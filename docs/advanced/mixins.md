---
sidebar_position: 2
---

# Mixins

Mixins are files that you can import to easily integrate between different libraries. This is mainly just fixing variable naming conflicts.

## TypeGraphQL Mixin

TypeGraphQL is the only mixin as of now, because it's the only library that I've found naming conflicts with, for example:

```ts
import { ObjectType, Field, Int } from "type-graphql";
// ERROR: Variable "Int" already exists.
import { Model, Property, Int } from "decotix";

@Model()
@ObjectType()
class User {
  @Property(() => Int)
  @Field(() => Int)
  age: number;
}
```

One option is to rename the imported variables with the `as` keyword: `import { Int as GQLInt } from "type-graphql"`.
The better option is to be able to use them interchangeably:

```ts
import { ObjectType, Field, Int } from "type-graphql";
import { Model, Property } from "decotix";
// No error.

@Model()
@ObjectType()
class User {
  // Thanks to the mixin, `@Property` now accepts TypeGraphQL's Int export
  @Property(() => Int)
  @Field(() => Int)
  age: number;
}
```

To call the mixin, import `decotix/mixins/type-graphql`:

```ts title="src/buildPrismaSchema.ts" {3}
import { buildSchema } from "decotix";
import { join } from "path";
import "decotix/mixins/type-graphql";

buildSchema({
  input: [join(__dirname, "./models/*.*")],
  baseSchemas: [join(__dirname, "../base.prisma")],
  emitTo: join(__dirname, "../prisma/schema.prisma"),
});
```
