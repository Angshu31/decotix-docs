---
sidebar_position: 0
---

# Uniques

Use `@Unique()`.

```ts
import { Unique, Property } from "decotix";

// ...

@Unique()
@Property()
field: string
```

```prisma title="Prisma output"
field String @unique
```
