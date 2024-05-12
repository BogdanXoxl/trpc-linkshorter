import { router } from "@/trpc";
import { linkRouter } from "./link";

export const appRouter = router({
  links: linkRouter,
});
