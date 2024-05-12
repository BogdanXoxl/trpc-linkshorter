import { z } from "zod";
import { customAlphabet } from "nanoid";

import { publicProcedure, router } from "@/trpc";
import { ALPHABET } from "./consts";
import { TRPCError } from "@trpc/server";

export const linkRouter = router({
  get: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const shortLink = input.replace(/(^\w+:|^)\/\//, "");

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

    return "https://" + link.href;
  }),

  add: publicProcedure
    .input(z.object({ href: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const href = input.href.replace(/(^\w+:|^)\/\//, "");

      const existedLink = await ctx.db.link.findUnique({
        where: {
          href,
        },
        select: {
          shortLink: true,
        },
      });

      if (existedLink) return "https://" + existedLink.shortLink;

      const linksCount = await ctx.db.link.count({
        where: {
          expirationDate: {
            gte: new Date(),
          },
        },
      });

      const nanoid = customAlphabet(
        ALPHABET,
        4 + Math.floor(linksCount / 1000)
      );

      let generatedLink = nanoid();

      while (
        await ctx.db.link.findUnique({ where: { shortLink: generatedLink } })
      ) {
        generatedLink = nanoid();
      }

      const { shortLink } = await ctx.db.link.create({
        data: {
          href,
          shortLink: generatedLink,
        },
        select: {
          shortLink: true,
        },
      });

      return "https://" + shortLink;
    }),
});
