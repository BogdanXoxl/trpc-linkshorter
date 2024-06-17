import type { IOption } from "@components/Select";
import type { Delay } from "./models";

export const DELAY_OPTIONS: IOption<Delay>[] = [
  { value: "15m", label: "15min" },
  { value: "1h", label: "1h" },
  { value: "1d", label: "1d" },
];

export const DEFAULT_DELAY_VALUE = DELAY_OPTIONS[0].value;
