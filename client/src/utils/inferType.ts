import type { Category } from "../type";

export const isValidCategory = (
  category: string | undefined
): category is Category => {
  return ["flight", "hotel", "activity"].includes(category as Category);
  // category가 추가되면 배열에 카테고리 추가해서 유효한 카테고리인지 타입 추론
};
