---
sidebar_position: 0
---

# Property

Use `@Property()`.

```ts
@Property(typeFunc?: () => Type)
```

```ts
import { Property, Int } from "decotix";

class User {

    // type string is auto-detected
    @Property()
    property: string;

    // Int is specifically set
    @Property(() => Int)
    age: number;
}
```

:::tip
The Property decorator can be emitted sometimes. This is only possible if the `@Id` decorator is applied, or any of the relation decorators (`OneToOne`, `OneToMany`, `ManyToOne`, `ManyToMany`)
:::