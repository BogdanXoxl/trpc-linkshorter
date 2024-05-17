import { z } from "zod";
import { publicProcedure } from "@/trpc";

import { DEFAULT_HOST, EDelay } from "../consts";
import { createLink } from "../utils/createLink";
import { getDate } from "../utils/getDate";

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
    })
  );

export const add = addProcedure.mutation(async ({ input, ctx }) => {
  const { href: _href, delay = "15m" } = input;
  const reg = /(^\w+:|^)\/\//;
  let href = _href;

  if (!reg.test(href)) {
    href = "https://" + href;
  }

  const { shortLink } = await ctx.db.link.upsert({
    where: {
      href,
    },
    create: {
      href,
      shortLink: await createLink(ctx.db),
      expirationDate: new Date(getDate(Date.now(), delay)),
    },
    update: {
      expirationDate: {
        set: new Date(getDate(Date.now(), delay)),
      },
    },
    select: {
      shortLink: true,
    },
  });

  return { link: (process.env.HOST ?? DEFAULT_HOST) + "/" + shortLink };
});
