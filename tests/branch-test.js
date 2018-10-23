import test from "ava";
import { Provider } from "../src/provider";
import { Branch } from "../src/branch";
import { PullRequest } from "../src/pull-request";

test("branch", async t => {
  const provider = new Provider();
  const repository = await provider.createRepository("r1");

  const b = new Branch(repository, "b1");

  t.is(b.repository, repository);
  t.is(b.provider, provider);
  t.is(b.name, "b1");
  t.is(b.owner, provider);
  t.is(b.fullName, "r1#b1");
  t.is(b.fullCondensedName, "r1#b1");
  t.is(b.isDefault, false);
  t.is(b.homePageURL, undefined);
  t.is(b.issuesURL, undefined);
  t.is(`${b}`, "r1#b1");
  t.is(b.ref, "refs/heads/b1");
  t.is(b.pullRequestClass, PullRequest);
  t.is(await repository.branch("b1"), b);
});

test("branch isDefault", async t => {
  const provider = new Provider();
  const repository = await provider.createRepository("r1");
  const b = new Branch(repository, "master");
  t.is(b.fullName, "r1#master");
  t.is(b.fullCondensedName, "r1");
  t.is(b.isDefault, true);
});

test("branch delete", async t => {
  const provider = new Provider();
  const repository = await provider.createRepository("r1");

  const b = new Branch(repository, "b1");
  await b.delete();

  t.is(await repository.branch("b1"), undefined);
});

test("branch list", async t => {
  const provider = new Provider();
  const repository = await provider.createRepository("r1");

  const b = new Branch(repository, "b1");

  const entries = new Set();
  for await (const entry of b.list(["*.js"])) {
    entries.add(entry.path);
  }

  t.is(entries.size, 0);
});

test("branch content", async t => {
  const provider = new Provider();
  const repository = await provider.createRepository("r1");

  const b = new Branch(repository, "b1");

  await t.throwsAsync(async () => b.content("aFile"), {
    instanceOf: Error,
    message: `No such object 'aFile'`
  });
});
