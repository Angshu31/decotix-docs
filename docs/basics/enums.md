---
sidebar_position: 4
---

# Enums

Enums are defined by `registerEnums`:

```ts
import { registerEnums } from "decotix";

export enum Fruit {
  apple = "apple",
  banana = "banana",
}

registerEnums({ Fruit });
```

The argument to `registerEnums` is a simple object that maps an enum name to the enum, which is a perfect use case for the ES6 Property Value shorthand (like above).

## Numerical Enums

```ts
// This is a numerical enum. Natively, values are mapped to a number.
enum Fruit {
  apple,
  banana,
}

console.log(Fruit.apple); // 0
console.log(Fruit.apple); // 1
```

Prisma enum values cannot be numbers, so instead decotix must opt for the keys of the enum (`apple` and `banana`).

Prisma Output would be:

```prisma
enum Fruit {
  apple
  banana
}
```

:::tip
Using numerical enums can be problematic. Let's explain it with a codeblock:

```ts
// `user.favFruit` is "apple", but `Fruit.apple` is `0`
if (user.favFruit === Fruit.apple) {
  // never reached.
}
```

To avoid this, use a String Enum:

```ts
// src/enums/Fruit.ts
enum Fruit {
  apple = "apple",
  banana = "banana",
}
```

This is explained better in [`type-graphql`'s identical scenario](https://typegraphql.com/docs/enums.html#interoperability)

:::

## String Enums

For string enums, the values are selected:

```ts
import { registerEnums } from "decotix";

export enum Fruit {
  apple = "Apple",
  banana = "Banana",
}

registerEnums({ Fruit });
```

Output:

```prisma
enum Fruit {
  Apple,
  Banana
}
```

## Using an enum

Enough about different types of enums, how do use an enum?

```ts
import { Fruit } from "../enums/Fruit";

@Model()
class User {
  // ...

  // make sure to pass the type into `Property`
  @Property(() => Fruit)
  favFruit?: Fruit;
}
```
