---
sidebar_position: 1
---

# Get Started

:::tip
Make sure you have completed the [Installation Instructions](./installation)
:::

## The Code

To get you started, here's some example code you can copy to your own project:

**_`src/models/User.ts`_**:

```ts
import { Id, Model, Property } from "decotix";
import { Profile } from "./Profile";

@Model()
export class User {
  @Property()
  @Id("uuid")
  id: string;

  @Property()
  name: string;

  @Property(() => Profile, { nullable: true })
  profile?: Profile;
}
```

**_`src/models/Profile.ts`_**:

```ts
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

  @Relation()
  @Property(() => User)
  user?: User;
}
```

Output:

**_`prisma/schema.prisma`_**:

```prisma
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
