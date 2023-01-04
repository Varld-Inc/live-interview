import { Prisma } from "./types";
import initStorage from "./seed";

export function init(): Prisma {
  initStorage();

  return {
    user: {
      create: async function (record) {
        const id = ++global.storage!.userCounter;
        const { name = "", lastName = "", email = "", age = 18 } = record.data;

        const user = { id, name, lastName, email, age };
        global.storage!.users.push(user);
      },
      findMany: async function () {
        return global.storage!.users;
      },
      findUnique: async function (record) {
        const id = record.where.id;
        const user = global.storage!.users[id];

        return user;
      },
    },
    post: {
      findMany: async function () {
        return global.storage!.posts;
      },
    },
  };
}
