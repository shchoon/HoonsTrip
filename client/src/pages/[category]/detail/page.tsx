import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

import ProductSection from "../../../components/ProductSection/ProductSection";
import { apiClient } from "../../../api/apiClient";
import ImageCard from "../../../components/Detail/ImageCard/ImageCard";
import DetailCard from "../../../components/Detail/DetailCard/DetailCard";
import BookingCard from "../../../components/Detail/BookingCard/BookingCard";

import type { Flight, Hotel, Activity, Category } from "../../../type";

type RecoDataType = {
  title: string;
  category: Category;
  data: Flight[] | Hotel[] | Activity[];
}[];

export default function DetailPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [pageDataState, setPageDataState] = useState<{
    data: any;
    detail: any;
  }>({
    data: null,
    detail: null,
  });

  const [recoDataState, setRecoDataState] = useState<RecoDataType | null>(null);

  const fetchCategoryDataByID = async (category: Category, id: string) => {
    switch (category) {
      case "flight":
        return await apiClient("/flight?flight=" + id);
      case "hotel":
        return await apiClient("/hotel?hotel=" + id);
      case "activity":
        return await apiClient("/activity?activity=" + id);
      // 새로운 카테고리가 추가되면 추가로 데이터 패칭 함수 작성
    }
  };

  const fetchDetailData = async (
    category: Category,
    country?: string,
    id?: string
  ) => {
    console.log(country, id);
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

  const fetchCategoryData = async (category: Category) => {
    switch (category) {
      case "flight":
        return await apiClient("/flight");
      case "hotel":
        return await apiClient("/hotel");
      case "activity":
        return await apiClient("/activity");

      // 새로운 카테고리 추가시 case 추가
    }
  };

  const recoDataTitleMap: Record<Category, string> = {
    flight: "추천 항공편",
    hotel: "추천 호텔",
    activity: "추천 액티비티",
  };

  const fetchRecoData = async (curCategory: Category, country: string) => {
    const allCategory: Category[] = ["flight", "hotel", "activity"]; // 새로운 카테고리 추가시 배열에 추가

    const result = await Promise.all(
      allCategory
        .filter((category) => category !== curCategory)
        .map(async (category) => {
          const data = await fetchCategoryData(category);
          return {
            category: category,
            title: recoDataTitleMap[category],
            data: data.filter((el) => el.country === country),
          };
        })
    );

    console.log(result);
    return result;
  };

  const isValidCategory = (
    category: string | undefined
  ): category is Category => {
    return ["flight", "hotel", "activity"].includes(category as Category);
    // category가 추가되면 배열에 카테고리 추가해서 유효한 카테고리인지 타입 추론
  };

  const isValidId = (id: null | string): id is string => {
    return typeof id === "string";
  };

  useEffect(() => {
    if (!isValidCategory(category) || !isValidId(id)) return;

    const getData = async () => {
      const data = await fetchCategoryDataByID(category, id);
      const country = await data.country;
      const detail =
        category === "flight"
          ? await fetchDetailData(category, country)
          : await fetchDetailData(category, undefined, id);

      const recoData = await fetchRecoData(category, country);
      console.log(recoData);
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
  if (!data || !detail || !recoDataState) return;

  console.log(pageDataState, recoDataState);
  return (
    <>
      <Wrapper>
        {/* 대표 이미지 */}
        <ImageCard
          category={category as "flight" | "hotel" | "activity"}
          data={data}
        />
        {/* 상세 정보 */}
        <DetailCard
          category={category as "flight" | "hotel" | "activity"}
          detail={detail}
        />
        {/* 예약 정보 */}
        <BookingCard
          category={category as "flight" | "hotel" | "activity"}
          data={data}
        />
      </Wrapper>
      <RecommendSection>
        {recoDataState.map((data) => {
          return (
            <ProductSection
              category={data.category}
              title={data.title}
              products={data.data}
            />
          );
        })}
      </RecommendSection>
    </>
  );
}

const RecommendSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;

  display: flex;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;
