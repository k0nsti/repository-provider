[![npm](https://img.shields.io/npm/v/repository-provider.svg)](https://www.npmjs.com/package/repository-provider)
[![Greenkeeper](https://badges.greenkeeper.io/arlac77/repository-provider.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/arlac77/repository-provider)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://secure.travis-ci.org/arlac77/repository-provider.png)](http://travis-ci.org/arlac77/repository-provider)
[![bithound](https://www.bithound.io/github/arlac77/repository-provider/badges/score.svg)](https://www.bithound.io/github/arlac77/repository-provider)
[![codecov.io](http://codecov.io/github/arlac77/repository-provider/coverage.svg?branch=master)](http://codecov.io/github/arlac77/repository-provider?branch=master)
[![Coverage Status](https://coveralls.io/repos/arlac77/repository-provider/badge.svg)](https://coveralls.io/r/arlac77/repository-provider)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/repository-provider/badge.svg)](https://snyk.io/test/github/arlac77/repository-provider)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/repository-provider.svg?style=flat-square)](https://github.com/arlac77/repository-provider/issues)
[![Stories in Ready](https://badge.waffle.io/arlac77/repository-provider.svg?label=ready&title=Ready)](http://waffle.io/arlac77/repository-provider)
[![Dependency Status](https://david-dm.org/arlac77/repository-provider.svg)](https://david-dm.org/arlac77/repository-provider)
[![devDependency Status](https://david-dm.org/arlac77/repository-provider/dev-status.svg)](https://david-dm.org/arlac77/repository-provider#info=devDependencies)
[![docs](http://inch-ci.org/github/arlac77/repository-provider.svg?branch=master)](http://inch-ci.org/github/arlac77/repository-provider)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![downloads](http://img.shields.io/npm/dm/repository-provider.svg?style=flat-square)](https://npmjs.org/package/repository-provider)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# repository-provider

abstract interface to git repository providers like github bitbucket

# Example

<!-- skip-example -->

```js
import { GithubProvider } from 'repository-provider';

const provider = new GithubProvider({ token: 'xxx' });

const repository = await provider.repository('myuser/myrepo');
const branch = await repository.branch('master');
const files = await branch.list();
```

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Content](#content)
-   [Provider](#provider)
    -   [initialize](#initialize)
    -   [repositoryClass](#repositoryclass)
    -   [branchClass](#branchclass)
    -   [pullRequestClass](#pullrequestclass)
    -   [createRepository](#createrepository)
    -   [deleteRepository](#deleterepository)
    -   [repository](#repository)
    -   [branch](#branch)
    -   [rateLimitReached](#ratelimitreached)
    -   [type](#type)
    -   [defaultOptions](#defaultoptions)
    -   [options](#options)
-   [Branch](#branch-1)
    -   [initialize](#initialize-1)
    -   [provider](#provider-1)
    -   [owner](#owner)
    -   [project](#project)
    -   [fullName](#fullname)
    -   [url](#url)
    -   [isDefault](#isdefault)
    -   [delete](#delete)
    -   [content](#content-1)
    -   [commit](#commit)
    -   [createPullRequest](#createpullrequest)
    -   [list](#list)
    -   [rateLimitReached](#ratelimitreached-1)
    -   [rateLimitReached](#ratelimitreached-2)
-   [Repository](#repository-1)
    -   [initialize](#initialize-2)
    -   [content](#content-2)
    -   [urls](#urls)
    -   [url](#url-1)
    -   [owner](#owner-1)
    -   [project](#project-1)
    -   [branch](#branch-2)
    -   [defaultBranch](#defaultbranch)
    -   [branches](#branches)
    -   [createBranch](#createbranch)
    -   [deleteBranch](#deletebranch)
    -   [addBranch](#addbranch)
    -   [delete](#delete-1)
    -   [pullRequests](#pullrequests)
    -   [pullRequest](#pullrequest)
    -   [addPullRequest](#addpullrequest)
    -   [deletePullRequest](#deletepullrequest)
    -   [rateLimitReached](#ratelimitreached-3)
    -   [rateLimitReached](#ratelimitreached-4)
-   [PullRequest](#pullrequest-1)
    -   [provider](#provider-2)
    -   [delete](#delete-2)

## Content

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

**Properties**

-   `content` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Buffer](https://nodejs.org/api/buffer.html))** 
-   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** file name inside of the repository
-   `mode` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** file permissions
-   `type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## Provider

Base repository provider acts as a source of repositories

**Parameters**

-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Properties**

-   `repositories` **[Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)** 
-   `config` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### initialize

-   **See: [Provider#repository](#providerrepository)**
-   **See: [Provider#branch](#providerbranch)**
-   **See: [Provider#createRepository](#providercreaterepository)**
-   **See: [Provider#deleteRepository](#providerdeleterepository)**

Provider initialization
will be called once before content addressing method is called

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** 

### repositoryClass

Returns **Class** repository class used by the Provider

### branchClass

Returns **Class** branch class used by the Provider

### pullRequestClass

Returns **Class** pull request class used by the Provider

### createRepository

Create a new repository

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Repository](#repository)>** 

### deleteRepository

Delete a repository

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** 

### repository

Lookup a repository

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Repository](#repository)>** 

### branch

-   **See: [Repository#defaultBranch](#repositorydefaultbranch)**

Lookup a branch
First lookup repository then the branch
If no branch was specified then the default branch will be delivered.

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** with optional branch name as '#myBranchName'

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Branch](#branch)>** 

### rateLimitReached

Is our rate limit reached.
By default we have no rate limit

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** always false

### type

Deliver the repository type

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 'git'

### defaultOptions

Default configuration options

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### options

Pepare configuration by mixing together defaultOptions with actual options

**Parameters**

-   `config` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** raw config

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** combined options

## Branch

-   **See: [Repository#addBranch](#repositoryaddbranch)**

Abstract branch

**Parameters**

-   `repository` **[Repository](#repository)** 
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `'master'`)

**Properties**

-   `repository` **[Repository](#repository)** 
-   `provider` **[Provider](#provider)** 
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### initialize

called one after constructing

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

### provider

Returns **[Provider](#provider)** 

### owner

-   **See: [Repository#owner](#repositoryowner)**

Branch owner
By default we provide the repository owner

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### project

-   **See: [Repository#project](#repositoryproject)**

Branch project
By default we provide the repository project

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### fullName

Deliver repository and branch name combined

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 'repo#branch'

### url

Deliver repository and branch name combined

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 'repoUrl#branch'

### isDefault

Are we the default branch

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** name is 'master'

### delete

-   **See: [Repository#deleteBranch](#repositorydeletebranch)**

Delete the branch from the [Repository](#repository).

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** 

### content

Deliver file content

**Parameters**

-   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Content](#content)>** content of a given file

### commit

Commit files

**Parameters**

-   `message` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** commit message
-   `updates` **[Content](#content)?** file content to be commited
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

### createPullRequest

Create a pull request

**Parameters**

-   `toBranch` **[Branch](#branch)** 
-   `message` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

### list

File list

### rateLimitReached

-   **See: [Provider#rateLimitReached](#providerratelimitreached)**

Value delivered from the provider

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** providers rateLimitReached

### rateLimitReached

forward to the Provider

**Parameters**

-   `value` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Repository

Abstract repository

**Parameters**

-   `provider` **[Provider](#provider)** 
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `options`  

**Properties**

-   `provider` **[Provider](#provider)** 
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### initialize

Called one after constructing

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** 

### content

-   **See: [Branch#content](#branchcontent)**

Lookup content form the default branch

**Parameters**

-   `args` **...any** 

Returns **[Content](#content)** 

### urls

Deliver urls to access the repo

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 

### url

Deliver preffered url to access the repo

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### owner

Repository owner
Default implementation delivers undefined

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** undefined

### project

Repository project
Default implementation delivers undefined

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** undefined

### branch

Lookup branch by name

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Branch](#branch)>** 

### defaultBranch

Lookup the default branch

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Branch](#branch)>** 'master' branch

### branches

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)>** of all branches

### createBranch

Create a new [Branch](#branch) by cloning a given source branch

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `source` **[Branch](#branch)** branch defaults to master
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Branch](#branch)>** newly created branch

### deleteBranch

Delete a [Branch](#branch)

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** 

### addBranch

Add a branch

**Parameters**

-   `branch` **[Branch](#branch)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** 

### delete

-   **See: [Provider#deleteRepository](#providerdeleterepository)**

Delete the repository from the [Provider](#provider).

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** 

### pullRequests

Deliver all @{link PullRequest}s

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)>** of all pull requests

### pullRequest

Deliver @{link PullRequest} for a given name

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[PullRequest](#pullrequest)>** 

### addPullRequest

Add a pull request

**Parameters**

-   `pullRequest` **[PullRequest](#pullrequest)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

### deletePullRequest

Delete a [PullRequest](#pullrequest)

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

### rateLimitReached

Value delivered from the provider

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** providers rateLimitReached

### rateLimitReached

forward to the Provider

**Parameters**

-   `value` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## PullRequest

-   **See: [Repository#addPullRequest](#repositoryaddpullrequest)**

Abstract pull request

**Parameters**

-   `repository` **Repositoy** 
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)
    -   `options.title` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
    -   `options.state` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

**Properties**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `repository` **[Repository](#repository)** 
-   `provider` **[Provider](#provider)** 
-   `title` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** 
-   `state` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** 

### provider

Returns **[Provider](#provider)** 

### delete

-   **See: [Repository#deletePullRequest](#repositorydeletepullrequest)**

Delete the pull request from the [Repository](#repository).

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

# install

With [npm](http://npmjs.org) do:

```shell
npm install repository-provider
```

# license

BSD-2-Clause
