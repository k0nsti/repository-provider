import test from "ava";
import { Owner } from "../src/owner";
import { Provider } from "../src/provider";
import { Repository } from "../src/repository";
import { Branch } from "../src/branch";
import { Content } from "../src/content";

test("repository create with options", t => {
  const owner = new Owner();
  const repository = new Repository(owner, "r1", {
    description: "a description",
    id: "4711"
  });
  t.is(repository.owner, owner);
  t.is(repository.name, "r1");
  t.is(repository.fullName, "r1");
  t.is(repository.type, "git");
  t.is(repository.description, "a description");
  t.is(repository.id, "4711");
});

test("repository create without options", t => {
  const owner = new Owner();
  const repository = new Repository(owner, "r1");
  t.is(repository.owner, owner);
  t.is(repository.name, "r1");
  t.is(repository.fullName, "r1");
  t.is(repository.type, "git");
  t.is(repository.description, undefined);
});

test("repository normalize name", t => {
  const owner = new Owner();
  const repository = new Repository(owner, "r1#branch");
  t.is(repository.owner, owner);
  t.is(repository.name, "r1");
  t.is(repository.fullName, "r1");
});

test("repository classes", t => {
  const owner = new Provider();
  const repository = new Repository(owner, "r1#branch");
  t.is(repository.branchClass, Branch);
  t.is(repository.contentClass, Content);
});

class MyRepository extends Repository {
  static get defaultOptions() {
    return Object.assign(
      {
        myAttribute: 77
      },
      super.defaultOptions
    );
  }
}

test("defaultOption", t => {
  const repository = new MyRepository(undefined, "r1", { id: "xxx" });
  t.is(repository.myAttribute, 77);
  t.is(repository.id, "xxx");
});
