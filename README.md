[![npm](https://img.shields.io/npm/v/repository-provider.svg)](https://www.npmjs.com/package/repository-provider)
[![Greenkeeper](https://badges.greenkeeper.io/arlac77/repository-provider.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/arlac77/repository-provider)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://secure.travis-ci.org/arlac77/repository-provider.png)](http://travis-ci.org/arlac77/repository-provider)
[![codecov.io](http://codecov.io/github/arlac77/repository-provider/coverage.svg?branch=master)](http://codecov.io/github/arlac77/repository-provider?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/repository-provider/badge.svg)](https://snyk.io/test/github/arlac77/repository-provider)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/repository-provider.svg?style=flat-square)](https://github.com/arlac77/repository-provider/issues)
[![Dependency Status](https://david-dm.org/arlac77/repository-provider.svg)](https://david-dm.org/arlac77/repository-provider)
[![devDependency Status](https://david-dm.org/arlac77/repository-provider/dev-status.svg)](https://david-dm.org/arlac77/repository-provider#info=devDependencies)
[![docs](http://inch-ci.org/github/arlac77/repository-provider.svg?branch=master)](http://inch-ci.org/github/arlac77/repository-provider)
[![downloads](http://img.shields.io/npm/dm/repository-provider.svg?style=flat-square)](https://npmjs.org/package/repository-provider)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# repository-provider

abstract interface to git repository providers like github bitbucket

see list of avaliable implementations below

# Example

<!-- skip-example -->

```es6
import { Provider } from 'repository-provider';

const provider = new Provider({ token: 'xxx' });

const branch = await provider.branch('myuser/myrepo#myBranch');

for await (const entry of branch.entries('**/*.md')) {
    console.log(entry.name);
}

const readme = await branch.entry('README.md');

console.log(await readme.toString());
```

# Derived Providers

[list by _repository-provider_ keyword](https://www.npmjs.com/browse/keyword/repository-provider)

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Provider](#provider)
    -   [Parameters](#parameters)
    -   [Properties](#properties)
    -   [equals](#equals)
        -   [Parameters](#parameters-1)
    -   [repositoryGroup](#repositorygroup)
        -   [Parameters](#parameters-2)
    -   [createRepositoryGroup](#createrepositorygroup)
        -   [Parameters](#parameters-3)
    -   [repositoryBases](#repositorybases)
    -   [normalizeRepositoryName](#normalizerepositoryname)
        -   [Parameters](#parameters-4)
    -   [parseName](#parsename)
        -   [Parameters](#parameters-5)
    -   [repository](#repository)
        -   [Parameters](#parameters-6)
    -   [branch](#branch)
        -   [Parameters](#parameters-7)
    -   [repositoryGroups](#repositorygroups)
        -   [Parameters](#parameters-8)
    -   [repositories](#repositories)
        -   [Parameters](#parameters-9)
    -   [branches](#branches)
        -   [Parameters](#parameters-10)
    -   [tags](#tags)
        -   [Parameters](#parameters-11)
    -   [repositoryGroupClass](#repositorygroupclass)
    -   [hookClass](#hookclass)
    -   [name](#name)
    -   [provider](#provider-1)
    -   [toJSON](#tojson)
    -   [optionsFromEnvironment](#optionsfromenvironment)
        -   [Parameters](#parameters-12)
    -   [environmentOptions](#environmentoptions)
    -   [areOptionsSufficciant](#areoptionssufficciant)
        -   [Parameters](#parameters-13)
    -   [initialize](#initialize)
        -   [Parameters](#parameters-14)
-   [priority](#priority)
-   [Branch](#branch-1)
    -   [Parameters](#parameters-15)
    -   [Properties](#properties-1)
-   [defaultOptions](#defaultoptions)
-   [defaultOptions](#defaultoptions-1)
-   [defaultOptions](#defaultoptions-2)
-   [OneTimeInititalizer](#onetimeinititalizer)
-   [Owner](#owner)
    -   [Properties](#properties-2)
-   [RepositoryOwnerMixin](#repositoryownermixin)
    -   [Parameters](#parameters-16)
    -   [Properties](#properties-3)
-   [logger](#logger)
    -   [Parameters](#parameters-17)
-   [Repository](#repository-1)
    -   [Parameters](#parameters-18)
    -   [Properties](#properties-4)
-   [description](#description)
-   [description](#description-1)
-   [id](#id)
-   [id](#id-1)
-   [id](#id-2)
-   [defaultBranchName](#defaultbranchname)
-   [PullRequest](#pullrequest)
    -   [Parameters](#parameters-19)
    -   [Properties](#properties-5)
    -   [repository](#repository-2)
    -   [provider](#provider-2)
    -   [equals](#equals-1)
        -   [Parameters](#parameters-20)
    -   [delete](#delete)
    -   [merge](#merge)
        -   [Parameters](#parameters-21)
    -   [decline](#decline)
    -   [validStates](#validstates)
    -   [defaultListStates](#defaultliststates)
    -   [validMergeMethods](#validmergemethods)
    -   [list](#list)
        -   [Parameters](#parameters-22)
    -   [open](#open)
        -   [Parameters](#parameters-23)
-   [title](#title)
-   [body](#body)
-   [state](#state)
-   [locked](#locked)
-   [merged](#merged)
-   [Hook](#hook)
    -   [Parameters](#parameters-24)
    -   [Properties](#properties-6)
    -   [equals](#equals-2)
        -   [Parameters](#parameters-25)
    -   [toJSON](#tojson-1)
-   [RepositoryGroup](#repositorygroup-1)
    -   [Parameters](#parameters-26)
    -   [Properties](#properties-7)
    -   [repositoryClass](#repositoryclass)
    -   [branchClass](#branchclass)
    -   [contentClass](#contentclass)
    -   [pullRequestClass](#pullrequestclass)
-   [definePropertiesFromOptions](#definepropertiesfromoptions)
    -   [Parameters](#parameters-27)
-   [optionJSON](#optionjson)
    -   [Parameters](#parameters-28)
-   [generateBranchName](#generatebranchname)
    -   [Parameters](#parameters-29)

## Provider

**Extends Owner**

Base repository provider acts as a source of repositories

### Parameters

-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### Properties

-   `_repositoryGroups` **[Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [RepositoryGroup](#repositorygroup)>** 

### equals

#### Parameters

-   `other`  

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if other provider is the same as the receiver

### repositoryGroup

Lookup a repository group

#### Parameters

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** of the group

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[RepositoryGroup](#repositorygroup)>** 

### createRepositoryGroup

Create a new repository group
If there is already a group for the given name it will be returend instead

#### Parameters

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** of the group
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[RepositoryGroup](#repositorygroup)>** 

### repositoryBases

All possible base urls
For github something like

-   git@github.com
-   git://github.com
-   git+ssh://github.com
-   <https://github.com>
-   git+<https://github.com>

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** common base urls of all repositories

### normalizeRepositoryName

bring a repository name into its normal form by removing any clutter
like .git suffix or #branch names

#### Parameters

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** normalized name

### parseName

parses repository name and tries to split it into
group,repository and branch

#### Parameters

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### repository

Lookup a repository in the provider and all of its repository groups

#### Parameters

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** of the repository

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Repository](#repository)>** 

### branch

Lookup a branch in the provider and all of its repository groups

#### Parameters

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** of the branch
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Branch](#branch)>** 

### repositoryGroups

List groups

#### Parameters

-   `patterns` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** 

Returns **Iterator&lt;[RepositoryGroup](#repositorygroup)>** all matching repositories groups of the provider

### repositories

List repositories

#### Parameters

-   `patterns` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** 

Returns **Iterator&lt;[Repository](#repository)>** all matching repos of the provider

### branches

List branches

#### Parameters

-   `patterns` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** 

Returns **Iterator&lt;[Branch](#branch)>** all matching branches of the provider

### tags

List tags

#### Parameters

-   `patterns` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** 

Returns **Iterator&lt;[Branch](#branch)>** all matching tags of the provider

### repositoryGroupClass

Returns **Class** repository group class used by the Provider

### hookClass

Returns **Class** hook class used by the Provider

### name

Deliver the provider name

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** class name by default

### provider

we are our own provider

Returns **[Provider](#provider)** this

### toJSON

list all defined entries from defaultOptions

### optionsFromEnvironment

Extract options suitable for the constructor
form the given set of environment variables

#### Parameters

-   `env` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** taken from process.env

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** undefined if no suitable environment variables have been found

### environmentOptions

known mapping from environment variable to options

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** with the mapping of environmentvaraible names to option keys

### areOptionsSufficciant

Check if given options are sufficint to create a provider

#### Parameters

-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if options ar sufficiant to construct a provider

### initialize

Creates a new provider for a given set of options

#### Parameters

-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** additional options
-   `env` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** taken from process.env

Returns **[Provider](#provider)** newly createdprovider or undefined if optionsa re not sufficient to construct a provider

## priority

in case there are several provider able to support a given source which one sould be used ?
this defines the order

## Branch

-   **See: [Repository#addBranch](Repository#addBranch)**

Abstract branch

### Parameters

-   `repository` **[Repository](#repository)** 
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### Properties

-   `repository` **[Repository](#repository)** 
-   `provider` **[Provider](#provider)** 
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## defaultOptions

options

## defaultOptions

options

## defaultOptions

options

## OneTimeInititalizer

enshures that \_initialize() will be called only once

## Owner

Collection of repositories

### Properties

-   `repositories` **[Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [Repository](#repository)>** 

## RepositoryOwnerMixin

Collection of repositories

### Parameters

-   `parent`  

### Properties

-   `repositories` **[Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [Repository](#repository)>** 

## logger

default logger

### Parameters

-   `args` **...any** 

## Repository

Abstract repository

### Parameters

-   `owner` **[Owner](#owner)** 
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** (#branch) will be removed
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `options.description` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** human readable description
    -   `options.id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** internal id

### Properties

-   `owner` **[Owner](#owner)** 
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** without (#branch)
-   `description` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** from options.description
-   `id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** from options.id
-   `branches` **[Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [Branch](#branch)>** 
-   `pullRequests` **[Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [PullRequest](#pullrequest)>** 

## description

the description of the repository content.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## description

the description of the repository group.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## id

unique id within the provider.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## id

internal id.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## id

unique id within the provider.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## defaultBranchName

The name of the default branch

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## PullRequest

Abstract pull request
[Repository#addPullRequest](Repository#addPullRequest)

### Parameters

-   `source` **[Branch](#branch)** merge source
-   `destination` **[Branch](#branch)** merge target
-   `number` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `options.title` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** 
    -   `options.state` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** 
    -   `options.merged` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** 
    -   `options.locked` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** 

### Properties

-   `number` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `source` **[Branch](#branch)** 
-   `destination` **[Branch](#branch)** 
-   `title` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** 
-   `state` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** 
-   `merged` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** 
-   `locked` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** 

### repository

Returns **[Repository](#repository)** destination repository

### provider

Returns **[Provider](#provider)** 

### equals

Check for equality

#### Parameters

-   `other` **[PullRequest](#pullrequest)** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if number and provider are equal

### delete

-   **See: [Repository#deletePullRequest](Repository#deletePullRequest)**

Delete the pull request from the [Repository](#repository).

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

### merge

Merge the pull request

#### Parameters

-   `method` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### decline

Decline the pull request

### validStates

All valid states

Returns **[Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** valid states

### defaultListStates

States to list pull request by default

Returns **[Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** states to list by default

### validMergeMethods

All valid merge methods

Returns **[Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** valid merge methods

### list

list all pull request for a given destination repo

#### Parameters

-   `destination` **[Repository](#repository)** 
-   `states` **[Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 

Returns **Iterator&lt;[PullRequest](#pullrequest)>** 

### open

Opens a new pull request

#### Parameters

-   `source` **[Branch](#branch)** 
-   `destination` **[Branch](#branch)** 
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `options.title` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
    -   `options.body` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[PullRequest](#pullrequest)** 

## title

the one line description of the pull request.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## body

the description of the pull request.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## state

state of the pull request.

-   OPEN
-   MERGED
-   CLOSED

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## locked

locked state of the pull request.

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## merged

merged state of the pull request.

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Hook

### Parameters

-   `repository`  
-   `name`  
-   `events`   (optional, default `new Set(["*"])`)
-   `options`  

### Properties

-   `repository` **[Repository](#repository)** 
-   `url` **[URL](https://developer.mozilla.org/docs/Web/API/URL/URL)** 
-   `events` **[Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 

### equals

Check for equality

#### Parameters

-   `other` **[Hook](#hook)** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if name and repository are equal

### toJSON

provide name, events and all defined defaultOptions

## RepositoryGroup

**Extends Owner**

Abstract repository collection

### Parameters

-   `provider` **[Provider](#provider)** 
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** of the group
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `options.description` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** human readable description
    -   `options.id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** internal id

### Properties

-   `provider` **[Provider](#provider)** 
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### repositoryClass

By default we use the providers implementation.

Returns **Class** as defined in the provider

### branchClass

By default we use the providers implementation.

Returns **Class** as defined in the provider

### contentClass

By default we use the providers implementation.

Returns **Class** as defined in the provider

### pullRequestClass

By default we use the providers implementation.

Returns **Class** as defined in the provider

## definePropertiesFromOptions

-   **See: Object.definedProperties()**

create properties from options and default options

### Parameters

-   `object` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** target object
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** as passed to object constructor
-   `properties` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** object properties (optional, default `{}`)

## optionJSON

create json based on present options.
In other words only produce key value pairs if value is defined.

### Parameters

-   `object` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
-   `initial` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** initial + defined values

## generateBranchName

find a new branch name for a given pattern
'_' will be replaced by a number
'something/_' will get to something/1 something/2 ...

### Parameters

-   `repository` **[Repository](#repository)** 
-   `pattern` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

# install

With [npm](http://npmjs.org) do:

```shell
npm install repository-provider
```

# license

BSD-2-Clause
