import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { publicProcedure } from "@/trpc";

const getProcedure = publicProcedure.input(z.string()).output(
  z.object({
    link: z.string(),
  })
);

export const get = getProcedure.query(async ({ input, ctx }) => {
  const shortLink = input.replace(/\//, "");

  const link = await ctx.db.link.findUnique({
    where: {
      shortLink,
    },
  });

  if (!link)
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Link not found",
    });

  if (link.expirationDate < new Date()) {
    await ctx.db.link.delete({
      where: {
        shortLink,
      },
    });

    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Link expired",
    });
  }

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return { link: link.href };
});
