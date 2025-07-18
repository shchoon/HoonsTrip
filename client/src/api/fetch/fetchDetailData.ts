import { apiClient } from "../apiClient";

import type { Category } from "../../type";

function fetchDetailData<T>(category: "flight", country: string): Promise<T>;
function fetchDetailData<T>(
  category: "hotel" | "activity",
  id: string
): Promise<T>;

// optional chaining을 설정하지 않고 함수 오버로드 적용
// 장점 1. 사용되지 않는 값을 undefined 인자로 넘기지 않아도 됨
//     2. category에 따라 두번째 인자값을 강제하여 잘못된 값을 넣을 시 타입 에러로 이를 사전에 방지할 수 있음
//        (현재는 두번째 인자의 타입이 모두 string이지만 다른 타입의 값이 온다면 의미가 있음)

async function fetchDetailData<T>(
  category: Category,
  value: string
): Promise<T> {
  const fetchDetailMap = {
    flight: (value: string) => `/country?country=${value}`,
    hotel: (value: string) => `/hotelDetail?id=${value}`,
    activity: (value: string) => `/activityDetail?id=${value}`,
  };

  const fetchUrl = fetchDetailMap[category](value);

  return await apiClient(fetchUrl);
}

export default fetchDetailData;
