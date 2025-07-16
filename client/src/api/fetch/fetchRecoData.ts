import fetchCategoryData from "./fetchCategoryData";

import type {
  Category,
  FetchCategoryMap,
  Flight,
  Hotel,
  Activity,
} from "../../type";

type RecoProduct<T> = {
  title: string;
  category: Category;
  data: T[];
};

export type RecoProductState =
  | RecoProduct<Flight>
  | RecoProduct<Hotel>
  | RecoProduct<Activity>;

const categoryTitleMap: Record<Category, string> = {
  flight: "추천 항공편",
  hotel: "추천 호텔",
  activity: "추천 액티비티",
  //   새로운 카테고리 추가시 알맞게 항목 추가
};

const fetchRecoData = async (curCategory: Category, country: string) => {
  const allCategory: Category[] = ["flight", "hotel", "activity"]; // 새로운 카테고리 추가시 배열에 추가

  const result = await Promise.all(
    allCategory
      .filter((category) => category !== curCategory)
      .map(async (category) => {
        const data = await fetchCategoryData<FetchCategoryMap[typeof category]>(
          category
        );
        return {
          title: categoryTitleMap[category],
          category: category,
          data: data.filter((el) => el.country === country),
        };
      })
  );

  return result as RecoProductState[]; // ProductSection 컴포넌트를 사용하기 위한 객체 타입
};

export default fetchRecoData;
