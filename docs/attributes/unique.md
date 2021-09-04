---
sidebar_position: 0
---

# Uniques

Just use `@Unique()`.

```ts
@Unique()
@Property()
field: string
```

```prisma title="Prisma output"
field String @unique
```
