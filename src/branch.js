/**
 * Abstract git branch
 * @param {Repository} repository
 * @param {string} name
 * @property {Repository} repository
 * @property {string} name
 */
export class Branch {
  constructor(repository, name = 'master') {
    Object.defineProperties(this, {
      name: { value: name },
      repository: { value: repository }
    });

    //repository.branches.set(name, this);
  }

  get provider() {
    return this.repository.provider;
  }

  /**
   * Delete the branch from the {@link Repository}.
   * @see {@link Repository.deleteBranch}
   */
  async delete() {
    return this.repository.deleteBranch(this.name);
  }

  /**
   * Deliver file content
   * @param {string} path
   * @return {string|Buffer} content os a given file
   */
  async content(path) {
    return notImplementedError();
  }

  /**
   * Commit files
   * @param {string} message commit message
   * @param {Blob} [updates] file content to be commited
   * @param {Object} options
   */
  async commit(message, updates, options) {
    return notImplementedError();
  }

  /**
   * Create a pull request
   * @param {Branch} toBranch
   * @param {string} message
   */
  async createPullRequest(toBranch, message) {
    return notImplementedError();
  }

  async list() {
    return [];
  }

  /**
   * Value delivered from the provider
   * @return {boolean} providers rateLimitReached
   */
  get rateLimitReached() {
    return this.provider.rateLimitReached;
  }

  /**
   * forward to the Provider
   * @param {boolean} value
   */
  set rateLimitReached(value) {
    this.provider.rateLimitReached(value);
  }
}