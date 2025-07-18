import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { isValidCategory, isValidId } from "../utils/inferType";
import fetchCategoryDataByID from "../api/fetch/fetchCategoryDataByID";
import fetchDetailData from "../api/fetch/fetchDetailData";
import fetchRecoData from "../api/fetch/fetchRecoData";
import type { RecoProductState } from "../api/fetch/fetchRecoData";
import type {
  Activity,
  Flight,
  Hotel,
  CountryInfo,
  HotelDetail,
  ActivityDetail,
  Category,
} from "../type";

type FetchDetailMap = {
  flight: CountryInfo;
  hotel: HotelDetail;
  activity: ActivityDetail;
};

type FetchCategoryByIdMap = {
  flight: Flight;
  hotel: Hotel;
  activity: Activity;
};

export const useDetailPageData = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [pageDataState, setPageDataState] = useState<{
    data: FetchCategoryByIdMap[Category] | null;
    detail: FetchDetailMap[Category] | null;
  }>({
    data: null,
    detail: null,
  });

  const [recoDataState, setRecoDataState] = useState<RecoProductState[] | null>(
    null
  );

  useEffect(() => {
    if (!isValidCategory(category) || !isValidId(id)) return;

    const getData = async () => {
      const data = (await fetchCategoryDataByID(
        category,
        id
      )) as FetchCategoryByIdMap[typeof category];
      console.log(data);
      const detail =
        category === "flight"
          ? await fetchDetailData<FetchDetailMap[typeof category]>(
              category,
              data.country
            )
          : await fetchDetailData<FetchDetailMap[typeof category]>(
              category,
              id
            );

      const recoData = await fetchRecoData(category, data.country);
      setPageDataState((prev) => ({
        ...prev,
        data: data,
        detail: detail,
      }));

      setRecoDataState(recoData);
    };

    getData();
  }, [category, id]);

  const { data, detail } = pageDataState;

  return { data, detail, recoDataState, category };
};
