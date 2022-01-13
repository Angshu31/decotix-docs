---
sidebar_position: 3
---

# Relations

Relations in decotix are designed to be significantly different from the way you may be used to writing them. Instead, Decotix takes an approach similar to other libraries like TypeORM.

## The basics (for all relations)

Unlike prisma, you have to define a relationship on both sides.

Arguments:

- `type`: A function that returns the type of the related entity.
- `inverse`: The property on the related entity that will be set to this entity.

By taking a look at the examples below, you can hopefully see that defining relations in Decotix is very simple and intuitive.

## One-to-One

How to create a one-to-one relationship:

```typescript title="src/models/user.ts"
@Entity()
class User {
  @Id()
  id: string;

  @OneToOne(() => Profile, (profile) => profile.user)
  profile?: Profile;
}
```

```typescript title="src/models/profile.ts"
@Entity()
class Profile {
  @Id()
  id: string;

  @OneToOne(() => User, (user) => user.profile)
  user?: User;
}
```

::caution
Always set relational fields as optional. Like the examples above, make sure you use `?:` when defining the fields. The reason for this is to avoid conflicts between the decotix and prisma types.
::

# Many-To-One / One-To-Many

```typescript title="src/models/author.ts"
@Entity()
class Author {
  @Id()
  id: string;

  @OneToMany(() => Book, (book) => book.author)
  books?: Book[];
}
```

```typescript title="src/models/book.ts"
@Entity()
class Book {
  @Id()
  id: string;

  @ManyToOne(() => Author, (author) => author.books)
  author?: Author;
}
```

# Many-to-Many

```typescript title="src/models/post.ts"
@Entity()
class Post {
  @Id()
  id: string;

  @ManyToMany(() => Category, (category) => category.posts)
  categories?: Category[];
}
```

```typescript title="src/models/category.ts"
@Entity()
class Post {
  @Id()
  id: string;

  @ManyToMany(() => Post, (post) => post.categories)
  posts?: Post[];
}
```
