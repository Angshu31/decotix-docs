---
sidebar_position: 4
---

# Enums

## Using `createEnum` (recommended)

The `createEnum` function creates an enum-like object that's much easier to work with rather than traditional TS enums:

```ts
import { createEnum, EnumValues } from "decotix";

// Value: { APPLE: "APPLE", BANANA: "BANANA" }
export const Fruit = createEnum("Fruit", ["APPLE", "BANANA"]);

// Type value: "APPLE" | "BANANA"
export type Fruit = EnumValues<typeof Fruit>;
```

Alternatively, you can pass an object in:

```ts
import { createEnum, EnumValues } from "decotix";

// Value: { apple: "APPLE", banana: "BANANA" }
export const Fruit = createEnum("Fruit", {
  apple: "APPLE",
  banana: "BANANA",
});

// Type value: "APPLE" | "BANANA"
export type Fruit = EnumValues<typeof Fruit>;
```

Arguments for `createEnum`:

`name: string`: The name of the enum  
`theEnum: string[] | { [key: string]: string }` : An array of strings, or a an object mapping strings to other strings

## TypeScript Built-in Enums

:::caution Using this approach
We recommend using `createEnum` instead because using normal TS enums can conflict with prisma client's TS definitions.
Prisma client also exports an enum-like object and a type with the same name. The `createEnum` approach mirrors this. Using built-in TS enums can lead to type conflicts such as `Type Colour is not assignable to type "red"`
:::

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

### Numerical Enums

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

:::danger
Using numerical enums can be problematic, because prisma will use the string form, but TS will use the number. Let's explain it with a codeblock:

```ts
// `user.favFruit` is "apple", but `Fruit.apple` is `0`
if (user.favFruit === Fruit.apple) {
  // never reached.
  console.log("user likes apples");
}
```

To avoid this, use the aforementioned [`createEnum` method](#using-createenum-recommended), or if you must use a TS enum, use a String enum:

```ts title="src/enums/Fruit.ts"
enum Fruit {
  apple = "apple",
  banana = "banana",
}
```

This is explained better in [`type-graphql`'s similar situation](https://typegraphql.com/docs/enums.html#interoperability)

:::

### String Enums

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
