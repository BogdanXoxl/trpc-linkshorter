import { type CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createContext = ({ req, res }: CreateExpressContextOptions) => ({
  db: prisma,
});

export type Context = Awaited<ReturnType<typeof createContext>>;
