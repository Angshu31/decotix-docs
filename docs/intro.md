---
sidebar_position: 0
---

# Intro

## What is decotix?

Put simply, decotix is a library that allows you to write a Prisma schema using TypeScript decorators

## Why should you use decotix?

### Scalability

The Prisma schema file is not very scalable. Having all the database logic in one file is usually fine for small applications, however the larger your application grows, the bigger your schema gets. Unsurprisingly, you could
be left with schema files that are 300+ lines long. After some time, the schema gets increasingly
difficult to maintain. Decotix allows us to split database logic between files. Solutions such as
[`prisma-merge`](https://github.com/inside-labs/prisma-merge) or
[`prismix`](https://github.com/jamiepine/prismix) solve that, but they come with one significant flaw:

**The flaw**: Libraries that merge schemas usually cause trouble with editors when writing relations
(a must-have in almost all projects), most editors aren't taught to take other Prisma files into
account, leading to a lot of errors in editors, and very hacky fixes to get good editor support.
When trying to form a relation from `User` to `Profile` in `user.prisma`, `user.prisma` has no idea
about `Profile` and gives an error when you try to type a field as a `Profile`. `prismix`'s fix has
been to include a minimal copy of the models for every relation (e.g. `user.prisma` would have a minimal
`Profile` model in it, with only the `user` and `id` fields). But that also gets impossible to maintain
when a model gets a lot of relations.

### Automation

A lot of Prisma code can be predictable, prime examples of this are relations. MongoDB connections also require a lot of boilerplate code which can easily be predicted beforehand.

Most relations look like this:

```prisma
user   User   @relation(fields: [userId], references: [id])
userId String // and an additional "@db.ObjectId" if using MongoDB
```

and almost all IDs for MongoDB look like this:

```prisma
id String @id @default(dbgenerated()) @map("_id") @db.ObjectId
```

To anyone who has ever used the above features, the code snippets should look incredibly familiar. Decotix knows that, allowing you to write less boilerplate code:

```ts
@Relation()
@Property(() => User)
user?: User;
```

```ts
@MongoID()
@Property()
id: string;
```

## When not to use Decotix

If you know that your app is not very complex and requires a reasonably low number of models, the simple Prisma schema is perfect for you, because the problems stated above do not apply to you.
