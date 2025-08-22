import createResource from "../../utils/createResource";
import type { Category } from "../../type";

const fetchMap: Record<Category, string> = {
  flight: "/flight",
  hotel: "/hotel",
  activity: "/activity",
};

// switch case -> mapping 함수로 변경
// 1. 가독성 향상 (코드 길이 짧아짐)
// 새로운 경로가 추가되면 [key, value] 만 간단하게 추가하면 됨

// url 을 인자로 받아 fetching 하는 방식보다 맵핑이 좋다고 생각하는 이유
// 1. category 기반으로 맵핑이 되기 때문에 정확성이 올라감과 동시에 req url 오타 위험성 감소
// 2. req url이 변경되는 경우, 해당 방식은 fetching을 하는 곳 전부 url을 변경해줘야 하지만, 맵핑 방식은 fetchMap에 해당하는 value 값만 변경하면 됨

const fetchCategory = (category: Category) => {
  //   const startTime = performance.now();
  //   while (performance.now() - startTime < 1000) {
  //     // 매우 느린 코드를 재현하기 위해 500ms동안 아무것도 하지 않습니다
  //   }
  return fetch("http://localhost:3001" + fetchMap[category]).then((res) =>
    res.json()
  );
};

export const FlightResource = createResource(fetchCategory("flight"));
export const HotelResource = createResource(fetchCategory("hotel"));
export const ActivityResource = createResource(fetchCategory("activity"));
