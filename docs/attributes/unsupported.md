---
sidebar_position: 0
---

# Prisma Unsupported

If you want to use a data type that is not supported by Prisma, use the `Unsupported` function:

```typescript title="src/models/user.ts"
import { Id, Property, Unsupported } from "decotix";

class User {
  @Id()
  id: string;

  @Property(() => Unsupported("polygon"))
  favShape: any;
}
```

:::caution
Most (if not all) possible unsupported types are provided by the TS intellisense. If there is a native type that you want to use that is not included in the intellisense, pass in your string anyway. And feel free to open an issue.
:::
