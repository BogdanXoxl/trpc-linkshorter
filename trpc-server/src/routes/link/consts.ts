import { z } from "zod";

export const ALPHABET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

export const EDelay = z.enum(["15m", "1h", "1d"]);
export type EDelay = z.infer<typeof EDelay>;
