import { z } from "zod";
import { customAlphabet } from "nanoid";

import { publicProcedure, router } from "@/trpc";
import { ALPHABET } from "./consts";
import { TRPCError } from "@trpc/server";

const EDelay = z.enum(["15m", "1h", "1d"]);
type EDelay = z.infer<typeof EDelay>;

const getProcedure = publicProcedure.input(z.string()).output(
  z.object({
    link: z.string(),
  })
);
const addProcedure = publicProcedure
  .input(
    z.object({
      href: z.string().url(),
      delay: EDelay.optional(),
    })
  )
  .output(
    z.object({
      link: z.string(),
      expirationDate: z.date(),
    })
  );

// TODO:: decomposition
// TODO:: add remove expired links

export const linkRouter = router({
  test: publicProcedure.query(async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return "done";
  }),
  get: getProcedure.query(async ({ input, ctx }) => {
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

    return { link: link.href };
  }),

  // TODO:: add delay
  add: addProcedure.mutation(async ({ input, ctx }) => {
    const { href, delay } = input;

    console.log(delay);

    const existedLink = await ctx.db.link.findUnique({
      where: {
        href,
      },
      select: {
        shortLink: true,
        expirationDate: true,
      },
    });

    if (existedLink)
      return {
        expirationDate: existedLink.expirationDate,
        link: existedLink.shortLink,
      };

    const linksCount = await ctx.db.link.count({
      where: {
        expirationDate: {
          gte: new Date(),
        },
      },
    });

    const nanoid = customAlphabet(ALPHABET, 4 + Math.floor(linksCount / 1000));

    let generatedLink = nanoid();

    while (
      await ctx.db.link.findUnique({ where: { shortLink: generatedLink } })
    ) {
      generatedLink = nanoid();
    }

    const { shortLink, expirationDate } = await ctx.db.link.create({
      data: {
        href,
        shortLink: generatedLink,
      },
      select: {
        shortLink: true,
        expirationDate: true,
      },
    });

    return { link: shortLink, expirationDate };
  }),
});
