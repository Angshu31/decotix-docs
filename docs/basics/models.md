---
sidebar_position: 2
---

# Models

You can define a [prisma model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model) by applying the `@Model()` decorator to a class.

```ts
import { Model } from "decotix";

@Model()
export class User {}
```

However, we cannot have a model without any fields. Model fields are represented by fields in the class, just apply the `@Property()` decorator on any field in the class.

```ts
import { Model, Property } from "decotix";

@Model()
export class User {
  @Property()
  id: string;
}
```

By Decotix's design, [prisma attributes](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#defining-attributes) are mapped to their own TypeScript decorators, for example the `@id` attribute is mapped to `@Id()`

```ts
import { Model, Property, Id } from "decotix";

@Model()
export class User {
  @Property()
  @Id()
  id: string;
}
```

You can type a field by passing a function that returns the type, to the `Property` decorator:

```ts
import { Model, Property, Id, Int } from "decotix";

@Model()
export class User {
  // This field is inferred to be a string from the TS type `string` which maps to prisma's `String`
  @Property()
  @Id()
  id: string;

  // This field is now typed as an integer.
  // The `Int` type is provided by decotix
  @Property(() => Int)
  age: number;
}
```

:::tip
Primitive TS types are mapped to their prisma equivalent. The type `number` can map to both `Float` (default), and `Int`.
You need specify the type (as done above) to make it an integer.
:::
