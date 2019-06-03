import { Repository } from "./repository.mjs";
import { Branch } from "./branch.mjs";
import { PullRequest } from "./pull-request.mjs";
import { OneTimeInititalizerMixin } from "./one-time-initializer-mixin.mjs";
import { LogLevelMixin } from "loglevel-mixin";
import micromatch from "micromatch";

/**
 * Collection of repositories
 * @property {Map<string,Repository>} repositories
 */
export function RepositoryOwnerMixin(parent) {
  return LogLevelMixin(
    OneTimeInititalizerMixin(
      class Owner extends parent {
        /**
         * options
         */
        static get defaultOptions() {
          return {
            /**
             * default logger
             */
            logger: (...arg) => console.log(...args),
            logLevel: "info"
          };
        }

        constructor(...args) {
          super(...args);
          Object.defineProperties(this, {
            _repositories: { value: new Map() }
          });
        }

        /**
         * @return {Class} repository class used by the Provider
         */
        get repositoryClass() {
          return Repository;
        }

        /**
         * @return {Class} branch class used by the Provider
         */
        get branchClass() {
          return Branch;
        }

        /**
         * @return {Class} entry class used by the Provider
         */
        get entryClass() {
          return undefined;
        }

        /**
         * @return {Class} pull request class used by the Provider
         */
        get pullRequestClass() {
          return PullRequest;
        }

        /**
         * Delete a repository
         * @param {string} name
         * @return {Promise<undefined>}
         */
        async deleteRepository(name) {
          await this.initialize();
          this._repositories.delete(name);
        }

        /**
         * Lookup a repository
         * @param {string} name of the repository may contain a #branch
         * @return {Promise<Repository>}
         */
        async repository(name) {
          if (name === undefined) {
            return undefined;
          }

          const [repoName, branchName] = name.split(/#/);

          await this.initialize();
          return this._repositories.get(repoName);
        }

        /**
         * List repositories for the owner
         * @param {string[]|string} matchingPatterns
         * @return {Iterator<Repository>} all matching repositories of the owner
         */
        async *repositories(patterns) {
          await this.initialize();
          for (const name of micromatch(
            [...this._repositories.keys()],
            patterns
          )) {
            yield this._repositories.get(name);
          }
        }

        /**
         * Create a new repository
         * if there is already if repository for the given name it will be returned
         * @param {string} name
         * @param {Object} options
         * @return {Promise<Repository>}
         */
        async createRepository(name, options) {
          let repository = await this.repository(name);

          if(repository === undefined) {
            repository = await this._createRepository(name, options);
            this._repositories.set(repository.name, repository);
          }

          return repository;
        }

        /**
         * Create a new {@link Repository}
         * All owner implementations must provide a repository._createRepository() to handle the real repository creation.
         * This methos MUST NOT be called by application code directly. It should be implemented by child classes, and called by the internal class methods only.
         * Internal repository creation does not call owner.initialize()
         * @param {string} name
         * @param {Object} options
         * @return {Promise<Repository>} newly created repository
         */
        async _createRepository(name, options) {
          return new this.repositoryClass(this, name, options);
        }

        /**
         * Lookup a branch
         * First lookup repository then the branch
         * If no branch was specified then the default branch will be delivered.
         * @see {@link Repository#defaultBranch}
         * @param {string} name with optional branch name as '#myBranchName'
         * @return {Promise<Branch|undefined>}
         */
        async branch(name, options) {
          if (name === undefined) {
            return undefined;
          }

          const [repoName, branchName] = name.split(/#/);
          const repository = await this.repository(repoName);

          if (repository === undefined) {
            return undefined;
          }

          return branchName === undefined
            ? repository.defaultBranch
            : repository.branch(branchName);
        }

        /**
         * List branches for the owner
         * @param {string[]|string} matchingPatterns
         * @return {Iterator<Branch>} all matching branches of the owner
         */
        async *branches(patterns) {
          const [repoPatterns, branchPatterns] = patterns.split(/#/);

          await this.initialize();

          for (const name of micromatch(
            [...this._repositories.keys()],
            repoPatterns
          )) {
            const repository = this._repositories.get(name);
            const branch =
              branchPatterns === undefined
                ? repository.defaultBranch
                : repository.branch(branchPatterns);
            if (branch !== undefined) {
              yield branch;
            }
          }
        }

        /**
         * Deliver the repository type
         * @return {string} 'git'
         */
        get type() {
          return "git";
        }

        async _initialize() {}
      }
    )
  );
}
