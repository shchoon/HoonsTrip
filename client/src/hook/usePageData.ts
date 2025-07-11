import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import type { Flight, Hotel, Activity, Status } from "../type";

export const usePageData = () => {
  const { category } = useParams();

  //   isValidId가 true이면 id의 값을 'flight' | 'hotel' | 'activity' 중 하나라고 확정(type guard)
  const isValidCategory = (
    category: unknown
  ): category is "flight" | "hotel" | "activity" => {
    return (
      category === "flight" || category === "hotel" || category === "activity"
    );
  };

  const [data, setData] = useState<Flight[] | Hotel[] | Activity[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const title = {
    flight: "항공권",
    hotel: "호텔",
    activity: "액티비티",
  } as const; // 리터럴 타입으로 확정

  useEffect(() => {
    const getData = async () => {
      setStatus("loading");
      try {
        const res = await fetch(`http://localhost:3333/${category}`);
        const data = await res.json();

        setData(data);
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
