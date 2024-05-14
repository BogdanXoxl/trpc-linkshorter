import { LinkCreateInput } from "@utils/trpc";

export type Delay = Exclude<LinkCreateInput["delay"], undefined>;
