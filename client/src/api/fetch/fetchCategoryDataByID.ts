import { apiClient } from "../apiClient";

import type { Category } from "../../type";

const fetchCategoryDataByID = async (category: Category, id: string) => {
  switch (category) {
    case "flight":
      return await apiClient("/flight?flight=" + id);
    case "hotel":
      return await apiClient("/hotel?hotel=" + id);
    case "activity":
      return await apiClient("/activity?activity=" + id);
    // 새로운 카테고리가 추가되면 추가로 데이터 패칭 함수 작성
  }
};

export default fetchCategoryDataByID;
