---
sidebar_position: 1
---

# Native Types

Native DB Types are implemented by the `@NativeType` decorator.

```typescript
import { Id, Property, Decimal } from "decotix";

class User {
  @Id()
  id: string;

  @Property(() => Decimal)
  @NativeType("Money")
  balance: number;
}
```

:::caution
Most (if not all) possible native types are provided by the TS intellisense. If there is an unsupported type that you want to use that is not included in the intellisense, pass in your string anyway. And feel free to open an issue.
:::
