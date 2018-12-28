import test from "ava";
import { Owner } from "../src/owner";
import { RepositoryGroup } from "../src/group";
import { Repository } from "../src/repository";
import { Branch } from "../src/branch";
import { PullRequest } from "../src/pull-request";

test("repository-group create with options", t => {
  const owner = new Owner();
  const rg = new RepositoryGroup(owner, "rg", {
    description: "a description",
    id: "4711"
  });
  t.is(rg.name, "rg");
  t.is(rg.description, "a description");
  t.is(rg.id, "4711");
  t.is(rg.toString(), "rg");
});

test("repository-group classes", t => {
  const owner = new Owner();
  const rg = new RepositoryGroup(owner, "rg");

  t.is(rg.repositoryClass, Repository);
  t.is(rg.branchClass, Branch);
  t.is(rg.entryClass, undefined);
  t.is(rg.pullRequestClass, PullRequest);
});
