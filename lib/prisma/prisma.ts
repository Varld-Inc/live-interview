import { init } from "./client";
import { Prisma } from "./types";

let prisma: Prisma;

if (!global.prisma) {
  global.prisma = init();
}
prisma = global.prisma;

export default prisma;
