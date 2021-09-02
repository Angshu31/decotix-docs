---
sidebar_position: 1
---

# Autofilled Relations

While this is covered in [Advanced Relations](./more-on-relations) and [Relations](../basics/relations), here's the full rundown on autofilled relations.

As you should be familiar with by now, there are some components to a relation:

- `name`: This is the name of the relationship.
- `fields`: This refers to the `id` fields that the model has that links it to the other model.
  - You are also required (in raw prisma) to define these fields in the model.
- `references`: This refers to the unique fields on the other model that can be used to identify it

The `fields`, and defining those fields can be automated.

```prisma

model Profile {
  user User @relation(fields: [], references: [id])
}
```
