import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

import ProductSection from "../../../components/ProductSection/ProductSection";
import { apiClient } from "../../../api/apiClient";
import ImageCard from "../../../components/Detail/ImageCard/ImageCard";
import DetailCard from "../../../components/Detail/DetailCard/DetailCard";
import BookingCard from "../../../components/Detail/BookingCard/BookingCard";

import type {
  Flight,
  CountryInfo,
  Hotel,
  Activity,
  Category,
} from "../../../type";

// type RecoDataTitle = '추천 항공편' | '추천 호텔' | '추천 액티비티'

type RecoDataMap = {
  flight: { hotel: Hotel[]; activity: Activity[] };
  hotel: { flight: Flight[]; activity: Activity[] };
  activity: { flight: Flight[]; hotel: Hotel[] };
};

type RecoDataType = {
  title: string;
  category: Category;
  data: Flight[] | Hotel[] | Activity[];
}[];

type RecoReqUrlType = {
  [K in Category]: Record<Exclude<Category, K>, string>;
};

export default function DetailPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [detailDataState, setDetailDataState] = useState<{
    data: Flight | null;
    detail: CountryInfo | null;
  }>({
    data: null,
    detail: null,
  });

  const [recoDataState, setRecoDataState] = useState<RecoDataType | null>(null);

  const recoReqUrl: RecoReqUrlType = {
    flight: {
      hotel: "/hotel",
      activity: "/activity",
    },
    hotel: {
      flight: "/flight",
      activity: "/activity",
    },
    activity: {
      flight: "/flight",
      hotel: "/hotel",
    },
  };

  const getDetailData = async (category: Category, country: string) => {
    let detail;
    if (category === "flight") {
      detail = await apiClient(`/?country=${country}`);
    } else if (category === "hotel") {
      detail = await apiClient(`/?hotel=${id}`);
    } else if (category === "activity") {
      detail = await apiClient(`/?activity=${id}`);
    }

    return detail;
  };

  // const inferRecoDataType = <C extends keyof RecoDataMap>(
  //   category: C,
  //   data: unknown
  // ): data is RecoDataMap[C] => {
  //   return true;
  // };

  const getRocoDataTitle = (category: Category) => {
    if (category === "flight") {
      return "추천 항공편";
    } else if (category === "hotel") {
      return "추천 호텔";
    } else {
      return "추천 액티비티";
    }
  };

  const getRecoData = async (category: Category, country: string) => {
    const urls = recoReqUrl[category];

    const entries = await Promise.all(
      (Object.entries(urls) as [Category, string][]).map(async ([key, url]) => {
        let data: Flight[] | Hotel[] | Activity[];

        if (key === "flight") {
          data = (await apiClient(url)) as Flight[];
        } else if (key === "hotel") {
          data = (await apiClient(url)) as Hotel[];
        } else {
          data = (await apiClient(url)) as Activity[];
        }

        const recoData = data.filter((el) => el.country === country);

        return {
          title: getRocoDataTitle(key),
          category: key,
          data: recoData,
        };
      })
    );

    // 타입 단언으로 해결
    setRecoDataState(entries as RecoDataType);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await apiClient(`/${category}?${category}=${id}`);
      const country = await data.country;
      const detail = await getDetailData(category as Category, country);

      await getRecoData(category as Category, country);

      setDetailDataState((prev) => ({
        ...prev,
        data: data,
        detail: detail,
      }));
    };

    getData();
  }, [category, id]);

  const { data, detail } = detailDataState;
  if (!data || !detail || !recoDataState) return;

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
