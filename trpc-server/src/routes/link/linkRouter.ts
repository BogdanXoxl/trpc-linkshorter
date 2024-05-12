import { z } from "zod";

import { publicProcedure, router } from "@/trpc";

export const linkRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const links = await ctx.db.link.findMany();
    return { links };
  }),
  helloworld: publicProcedure.query(async () => {
    return { message: "Hello World" };
  }),
  getUser: publicProcedure.input(z.string()).query((opts) => {
    opts.input; // string

    return { id: opts.input, name: "Bilbo" };
  }),
});
