import { EDelay } from "../consts";

export const getDate = (date: number, delay?: EDelay) => {
  switch (delay) {
    case "15m":
      return date + 15 * 60 * 1000;
    case "1h":
      return date + 60 * 60 * 1000;
    case "1d":
      return date + 24 * 60 * 60 * 1000;
    default:
      return date;
  }
};
