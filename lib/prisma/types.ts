import { User, Post } from "../../types";

export interface Storage {
  users: User[];
  posts: Post[];
  userCounter: number;
}

export interface Prisma {
  user: {
    create: (record: { data: User }) => Promise<void>;
    findMany: () => Promise<User[]>;
    findUnique: (record: {
      where: { id: number };
    }) => Promise<User | undefined>;
  };
  post: {
    findMany: () => Promise<Post[]>;
  };
}

declare global {
  var storage: Storage | undefined;
  var prisma: Prisma | undefined;
}
