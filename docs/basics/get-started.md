---
sidebar_position: 1
---

# Get Started

:::danger
If you are not familiar with [Prisma (v2)](https://prisma.io), **_do not attempt to understand any of this documentation_**. It is required that you are familiar with writing the prisma schema yourself, and acknowledge decotix as a wrapper around it.
:::

:::caution
Make sure you have completed the [Installation Instructions](./installation).
:::

## The Code

To get you started, here's some example code you can copy to your own project:

**_`src/models/User.ts`_**:

```ts title="src/models/User.ts"
import { Id, Model, Property } from "decotix";
import { Profile } from "./Profile";

@Model()
export class User {
  @Property()
  @Id("uuid")
  id: string;

  @Property()
  name: string;

  @OneToOne(() => Profile, profile => profile.user)
  profile?: Profile;
}
```

```ts title="src/models/Profile.ts"
import { Id, Model, Property, Int, Relation } from "decotix";
import { User } from "./User";

@Model()
export class Profile {
  @Property()
  @Id("uuid")
  id: string;

  @Property()
  username: string;

  @Property(() => Int)
  age: string;

  @OneToOne(() => User, user => user.profile)
  user?: User;
}
```

```ts title="src/buildPrismaSchema.ts"
import { buildSchema } from "decotix";
import { join } from "path";

buildSchema({
  input: [join(__dirname, "./models/*.*")],
  baseSchemas: [join(__dirname, "../base.prisma")],
  emitTo: join(__dirname, "../prisma/schema.prisma"),
});
```

Output:

```prisma title="prisma/schema.prisma"
model User {
  id      String  @id @default(uuid())
  name    String
  profile Profile
}

model Profile {
  id       String @id @default(uuid())
  username String
  age      Int
  user     User   @relation(fields: [userId], references: [id])
  userId   String
}
```
