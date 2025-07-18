import styled from "styled-components";

import type { ActivityDetail, CountryInfo, HotelDetail } from "../../../type";
import { formatArrToStr } from "../../../utils/formatArrToAtr";

const InfoSection = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 24px 20px;
  border-radius: 12px;
  box-shadow: inset 0 0 8px #eee;

  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.h3`
  margin: 0 0 18px;
  font-size: 22px;
  font-weight: 700;
  color: #444;
`;

const InfoList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  flex-grow: 1;

  li {
    font-size: 16px;
    margin-bottom: 10px;
    color: #555;
  }
`;

type Props = {
  detail: CountryInfo | HotelDetail | ActivityDetail;
  category: "flight" | "hotel" | "activity";
};

type DetailMap = {
  flight: CountryInfo;
  hotel: HotelDetail;
  activity: ActivityDetail;
};

function inferDetailType<C extends keyof DetailMap>(
  _category: C,
  detail: unknown
): detail is DetailMap[C] {
  void detail; // detail가 사용되었다고 인식시킴
  return true;
}

function FlightDetail({ detail }: { detail: CountryInfo }) {
  return (
    <>
      <SubTitle>여행지 정보</SubTitle>
      <InfoList>
        <li>날씨: 맑음, 28°C</li>
        <li>비자: {detail.visaRequired}</li>
        <li>시차: {detail.timezoneDifference}</li>
        <li>통화: {detail.currency}</li>
        <li>언어: {detail.language}</li>
        <li>추천 음식: {detail.recommendedFood}</li>
        <li>추천 관광지: {detail.recommendedAttractions}</li>
      </InfoList>
    </>
  );
}

function HotelDetail({ detail }: { detail: HotelDetail }) {
  return (
    <>
      <SubTitle>호텔 정보</SubTitle>
      <InfoList>
        <li>등급: {Array(detail.star).fill("⭐").join("")}</li>
        <li>조식 포함: {detail.breakfastIncluded ? "⭕" : "❌"}</li>
        <li>편의 시설: {formatArrToStr(detail.amenities)}</li>
        <li>공항 셔틀: 제공</li>
        <li>주변 맛집: {formatArrToStr(detail.nearbyRestaurants)}</li>
        <li>고객 평점: {detail.rating} / 5</li>
      </InfoList>
    </>
  );
}

function ActivityDetail({ detail }: { detail: ActivityDetail }) {
  return (
    <>
      <SubTitle>액티비티 정보</SubTitle>
      <InfoList>
        <li>소요시간: {detail.duration}</li>
        <li>지원 언어: {formatArrToStr(detail.languages)} </li>
        <li>최소 인원: {detail.minParticipants}명</li>
        <li>포함 사항: {formatArrToStr(detail.includes)}</li>
        <li>고객 평점: {detail.rating} / 5</li>
      </InfoList>
    </>
  );
}

export default function DetailCard({ detail, category }: Props) {
  return (
    <InfoSection>
      {category === "flight" && inferDetailType(category, detail) && (
        <FlightDetail detail={detail} />
      )}
      {category === "hotel" && inferDetailType(category, detail) && (
        <HotelDetail detail={detail} />
      )}
      {category === "activity" && inferDetailType(category, detail) && (
        <ActivityDetail detail={detail} />
      )}
    </InfoSection>
  );
}
