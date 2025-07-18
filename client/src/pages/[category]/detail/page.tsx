import styled from "styled-components";

import ProductSection from "../../../components/ProductSection/ProductSection";
import ImageCard from "../../../components/Detail/ImageCard/ImageCard";
import DetailCard from "../../../components/Detail/DetailCard/DetailCard";
import BookingCard from "../../../components/Detail/BookingCard/BookingCard";

import { useDetailPageData } from "../../../hook/useDetailPageData";

export default function DetailPage() {
  const { data, detail, recoDataState, category } = useDetailPageData();
  if (!data || !detail || !recoDataState) return;

  console.log(data);
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
      {/* 추천 항목 */}
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
