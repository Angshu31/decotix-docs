---
sidebar_position: 0
---

import "../../src/css/advanced-relations.css";

# More on relations

## Typing Arguments

You can use type arguments to make `@Relation` tell you when you are making a mistake.
However, due to limitations of TS decorators as a whole, some kinds of intellisense is
impossilbe to achieve, but it does catch simple errors.

```ts title="Profile.ts"
@Relation<User>(["id"])
@Relation<Profile, User>({ fields: ["userId"], references: ["id"] })
```

## Every way of writing a relation

Arguments with a `:` before them are named arguments that have a `argName: ` go before the value in the prisma schema (e.g. `fields: []`)
All other arguments are postional and do not require such prefixes.

### `@relation(:fields, :references)`

```ts
@Relation({ fields: [], references: [] })

// Shortcut, only provide the `references` array, `fields` is automated for you.
@Relation(["id"])

// Better shortcut, don't provide anything
// This is equivalent to the method above with `["id"]` passed to it.
@Relation()
```

### `@relation(name, :fields, :references)`

```ts
@Relation("name", { fields: [], references: [] })

// Shortcut, only provide the `name` and `references` array
@Relation("name", ["id"])

// Alternative shortcut, put a true after the `name`.
// This is equivalent to the method above with `["id"]` passed to it.
@Relation("name", true)
```

### `@relation(name, :references)`

```ts
// Note, any example that has an object with *only* a references property
// does not trigger `fields` to be automated.
@Relation("name", { references: [] })
```

### `@relation(:name, :fields, :references)`

```ts
@Relation({ name: "", fields: [], references: [] })
```

### `@relation(:name, :references)`

```ts
@Relation({ name: "", references: [] })
```

### `@relation(name)`

```ts
@Relation("name")
```

### `@relation(:name)`

```ts
@Relation({ name: "" })
```
