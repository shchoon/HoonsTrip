"use client";
import styled from "styled-components";

import ImageCard from "./ImageCard/ImageCard";
import InformationCard from "./InformationlCard/InformationCard";
import BookingCard from "./BookingCard/BookingCard";
import {
  Category,
  Hotel,
  Flight,
  Activity,
  CountryInfo,
  HotelDetail,
  ActivityDetail,
} from "../../type";

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

type Props = {
  category: Category;
  dataById: Hotel | Flight | Activity;
  informationData: CountryInfo | HotelDetail | ActivityDetail;
};

export default function DetailCard({
  dataById,
  category,
  informationData,
}: Props) {
  return (
    <Wrapper>
      {/* 대표 이미지 */}
      <ImageCard
        category={category as "flight" | "hotel" | "activity"}
        data={dataById}
      />
      {/* 상세 정보 */}
      <InformationCard
        category={category as "flight" | "hotel" | "activity"}
        detail={informationData}
      />
      {/* 예약 정보 */}
      <BookingCard
        category={category as "flight" | "hotel" | "activity"}
        data={dataById}
      />
    </Wrapper>
  );
}
