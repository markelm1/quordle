import { START_DATE } from "./constants";

export const getCurrentDailySeed = () => {
  return ((new Date().getTime() - START_DATE.getTime()) / (1000 * 5)) >> 0;
};

export const indexOfAll = (str: string, char: string): number[] =>
  str
    .split("")
    .map((c, i) => (c === char ? i : null))
    .filter((i) => i !== null) as number[];
