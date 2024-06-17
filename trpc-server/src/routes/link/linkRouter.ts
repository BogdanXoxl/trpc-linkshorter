import { router } from "@/trpc";
import { get, add } from "./routes";

export const linkRouter = router({
  get,
  add,
});
