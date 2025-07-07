import { useState, useEffect } from "react";
import type { Flight, Hotel, Activity, Status } from "../type";

type ProductCategory<T> = {
  title: string;
  id: "flight" | "hotel" | "activity";
  products: T[];
};

type ProductState = {
  flight: ProductCategory<Flight>;
  hotel: ProductCategory<Hotel>;
  activity: ProductCategory<Activity>;
};

const initialProduct: ProductState = {
  flight: {
    title: "특가 항공권",
    id: "flight",
    products: [],
  },
  hotel: {
    title: "특가 호텔",
    id: "hotel",
    products: [],
  },
  activity: {
    title: "추천 액티비티",
    id: "activity",
    products: [],
  },
};

export const useProduct = () => {
  const [productState, setProductState] =
    useState<ProductState>(initialProduct);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const fetchUrls = [
      "http://localhost:3333/flight",
      "http://localhost:3333/hotel",
      "http://localhost:3333/activity",
    ];
    const getData = async () => {
      setStatus("loading");
      try {
        const responses = await Promise.all(fetchUrls.map((url) => fetch(url)));
        const data = await Promise.all(responses.map((res) => res.json()));

        setProductState((prev) => ({
          flight: {
            ...prev.flight,
            products: data[0].slice(0, 3),
          },
          hotel: {
            ...prev.hotel,
            products: data[1].slice(0, 3),
          },
          activity: {
            ...prev.activity,
            products: data[2].slice(0, 3),
          },
        }));

        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };

    getData();
  }, []);

  return { productState, status };
};
