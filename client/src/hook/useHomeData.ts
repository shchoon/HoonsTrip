import { useState, useEffect } from "react";

import fetchCategoryData from "../api/fetch/fetchCategoryData";

import type {
  Flight,
  Hotel,
  Activity,
  Status,
  Category,
  FetchCategoryMap,
} from "../type";

type ProductCategory<T> = {
  title: string;
  id: Category;
  products: T[];
};

type ProductState = [
  ProductCategory<Flight>,
  ProductCategory<Hotel>,
  ProductCategory<Activity>
];

const categoryTitleMap: Record<Category, string> = {
  flight: "추천 항공편",
  hotel: "추천 호텔",
  activity: "추천 액티비티",
};

export const useHomeData = () => {
  const [productState, setProductState] = useState<ProductState | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const categories = ["flight", "hotel", "activity"] as const;
    const getData = async () => {
      setStatus("loading");
      try {
        const homeData = await Promise.all(
          categories.map(async (category) => {
            const data = await fetchCategoryData<
              FetchCategoryMap[typeof category]
            >(category);
            return {
              title: categoryTitleMap[category],
              id: category,
              products: data.sort(() => Math.random() - 0.5).slice(0, 3),
            };
          })
        );

        setProductState(homeData as ProductState);

        setStatus("success");
      } catch (error) {
        setStatus("error");
        alert(error);
      }
    };

    getData();
  }, []);

  return { productState, status };
};
