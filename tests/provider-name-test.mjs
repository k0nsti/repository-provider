import test from "ava";
import { Provider } from "../src/provider.mjs";

class MyProvider extends Provider {
  get repositoryBases() {
    return ["https://github.com/", "http://otherdomain.com"];
  }
}

test("provider normalize repo name", t => {
  const provider = new Provider();
  t.is(provider.normalizeRepositoryName("abc"), "abc");
  t.is(provider.normalizeRepositoryName(" abc"), "abc");
  t.is(provider.normalizeRepositoryName("abc "), "abc");
  t.is(provider.normalizeRepositoryName(" abc "), "abc");
  t.is(provider.normalizeRepositoryName("abc/def"), "abc/def");
  t.is(provider.normalizeRepositoryName("abc/def#mybranch"), "abc/def");
  t.is(provider.normalizeRepositoryName("abc/def.git"), "abc/def");
  t.is(provider.normalizeRepositoryName("abc/def.git#mybranch"), "abc/def");
});

test("provider parseName", t => {
  const provider = new MyProvider();
  const nameFixtures = {
    abc: { repository: "abc" },
    " abc/def": { group: "abc", repository: "def" },
    "abc/def#mybranch ": {
      group: "abc",
      repository: "def",
      branch: "mybranch"
    },
    "abc/def.git": { group: "abc", repository: "def" },
    "abc/def.git#mybranch": {
      group: "abc",
      repository: "def",
      branch: "mybranch"
    },
    "xxx/abc/def.git#mybranch": {
      group: "abc",
      repository: "def",
      branch: "mybranch"
    },

    "https://github.com/arlac77/sync-test-repository.git#mybranch": {
      base: 'https://github.com/',
      group: "arlac77",
      repository: "sync-test-repository",
      branch: "mybranch"
    },
    "https://user:password@github.com/arlac77/sync-test-repository.git#mybranch": {
      base: 'https://github.com/',
      group: "arlac77",
      repository: "sync-test-repository",
      branch: "mybranch"
    },
    "https://user@github.com/arlac77/sync-test-repository.git#mybranch": {
      base: 'https://github.com/',
      group: "arlac77",
      repository: "sync-test-repository",
      branch: "mybranch"
    },
    "http://otherdomain.com/arlac77/sync-test-repository.git#mybranch": {
      base: 'http://otherdomain.com',
      group: "arlac77",
      repository: "sync-test-repository",
      branch: "mybranch"
    },
    "git+http://otherdomain.com/arlac77/sync-test-repository.git#mybranch": {
      base: 'http://otherdomain.com',
      group: "arlac77",
      repository: "sync-test-repository",
      branch: "mybranch"
    },
    "git+http://arlac77@otherdomain.com/prefix/arlac77/sync-test-repository.git": {
      base: 'http://otherdomain.com',
      group: "arlac77",
      repository: "sync-test-repository"
    },
    "git@bitbucket.org:arlac77/sync-test-repository.git": {
      base: 'git@bitbucket.org:',
      group: "arlac77",
      repository: "sync-test-repository"
    },
    "git@bitbucket.org/arlac77/sync-test-repository.git": {
      base: 'git@bitbucket.org/',
      group: "arlac77",
      repository: "sync-test-repository"
    },
    "https://arlac77@bitbucket.org/arlac77/sync-test-repository.git" : {
      base: 'https://bitbucket.org/',
      group: "arlac77",
      repository: "sync-test-repository"
    }

  };

  for (const name of Object.keys(nameFixtures)) {
    t.deepEqual(provider.parseName(name), nameFixtures[name]);
  }
});
