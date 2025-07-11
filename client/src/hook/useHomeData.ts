import { useState, useEffect } from "react";

import fetchCategoryData from "../api/fetch/fetchCategoryData";

import type { Flight, Hotel, Activity, Status, Category } from "../type";

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
    const getData = async () => {
      setStatus("loading");
      try {
        const [flight, hotel, activity] = await Promise.all([
          await fetchCategoryData<Flight[]>("flight"),
          await fetchCategoryData<Hotel[]>("hotel"),
          await fetchCategoryData<Activity[]>("activity"),
        ]);

        const categoryData: ProductState = [
          {
            title: categoryTitleMap["flight"],
            id: "flight",
            products: [...flight].sort(() => Math.random() - 0.5).slice(0, 3),
          },
          {
            title: categoryTitleMap["hotel"],
            id: "hotel",
            products: [...hotel].sort(() => Math.random() - 0.5).slice(0, 3),
          },
          {
            title: categoryTitleMap["activity"],
            id: "activity",
            products: [...activity].sort(() => Math.random() - 0.5).slice(0, 3),
          },
        ];

        setProductState(categoryData);

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
