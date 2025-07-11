import { apiClient } from "../apiClient";

import type { Category } from "../../type";

const fetchDetailData = async <T>(
  category: Category,
  country?: string,
  id?: string
): Promise<T> => {
  switch (category) {
    case "flight":
      if (!country) throw new Error("country가 필요합니다.");
      return await apiClient(`/?country=${country}`);

    case "hotel":
      if (!id) throw new Error("id가 필요합니다.");
      return await apiClient(`/?hotel=${id}`);

    case "activity":
      if (!id) throw new Error("id가 필요합니다.");
      return await apiClient(`/?activity=${id}`);

    // 새로운 카테고리 추가시 case 추가
  }
};

export default fetchDetailData;
