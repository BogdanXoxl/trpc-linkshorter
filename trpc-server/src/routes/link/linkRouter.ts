import { publicProcedure, router } from "@/trpc";
import { get, add } from "./routes";

export const linkRouter = router({
  get,
  add,
  test: publicProcedure.query(() => {
    return "test";
  }),
});
