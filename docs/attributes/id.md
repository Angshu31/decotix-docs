---
sidebar_position: 0
---

# IDs

Use `@Id()`.

```ts
Id(default: string)
```

```ts
import { Id } from "decotix";

class User {
    @Id("uuid")
    id: string;
}
```

:::tip
You might notice that a `"uuid"` argument is passed in to the decorator. This is a simple shorthand to let you define a `default` function. It's the equivalent of `@default(uuid())` in prisma. Of course, you can also use `"autoincrement"` and other such functions.
:::
