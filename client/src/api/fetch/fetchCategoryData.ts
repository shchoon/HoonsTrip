import { apiClient } from "../apiClient";

import type { Category } from "../../type";

const fetchCategoryData = async <T>(category: Category): Promise<T> => {
  switch (category) {
    case "flight":
      return await apiClient("/flight");
    case "hotel":
      return await apiClient("/hotel");
    case "activity":
      return await apiClient("/activity");

    // 새로운 카테고리 추가시 case 추가
  }
};

export default fetchCategoryData;
