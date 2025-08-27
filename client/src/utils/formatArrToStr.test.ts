import { expect, test } from "vitest";
import { formatArrToStr } from "./formatArrToStr";

test("input arr expect to string", () => {
  const arr = ["a", "b", "c"];
  expect(formatArrToStr(arr)).toBe("a, b, c");
});
