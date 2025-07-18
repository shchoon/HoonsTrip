import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import fetchCategoryData from "../api/fetch/fetchCategoryData";
import { isValidCategory } from "../utils/inferType";
import type {
  Flight,
  Hotel,
  Activity,
  Status,
  FetchCategoryMap,
} from "../type";

export const usePageData = () => {
  const { category } = useParams();

  //   isValidId가 true이면 id의 값을 'flight' | 'hotel' | 'activity' 중 하나라고 확정(type guard)

  const [data, setData] = useState<Flight[] | Hotel[] | Activity[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const title = {
    flight: "항공권",
    hotel: "호텔",
    activity: "액티비티",
  } as const; // 리터럴 타입으로 확정

  useEffect(() => {
    if (!isValidCategory(category)) return;

    const getData = async () => {
      setStatus("loading");
      try {
        const categoryData = await fetchCategoryData<
          FetchCategoryMap[typeof category]
        >(category);
        setData(categoryData);
        setStatus("success");
      } catch (err) {
        alert(err);
        setStatus("error");
      }
    };
    getData();

    return () => {
      setData([]);
      setStatus("idle");
    };
  }, [category]);

  return { data, category, isValidcategory: isValidCategory, status, title };
};
