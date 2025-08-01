import { expect, test } from "vitest";
import { isValidCategory } from "./inferType";

test.each(["flight", "hotel", "activity"])(
  "isValidCategory(%s) should return true",
  (category) => {
    expect(isValidCategory(category)).toBe(true);
  }
);
