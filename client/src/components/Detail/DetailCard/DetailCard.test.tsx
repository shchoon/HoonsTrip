import { render, screen } from "@testing-library/react";
import DetailCard from "./DetailCard";
import { describe } from "vitest";
import { formatArrToStr } from "../../../utils/formatArrToStr";
import type { ActivityDetail, CountryInfo, HotelDetail } from "../../../type";

describe("DetailCard", () => {
  it("render FlightDetail when category is flight", () => {
    const flightDetail: CountryInfo = {
      country: "japan",
      recommendedFood: "스시, 라멘, 텐푸라",
      visaRequired: "비자 면제 (90일 이하 체류)",
      language: "일본어",
      timezoneDifference: "한국보다 -0시간",
      currency: "JPY (일본 엔)",
      recommendedAttractions: ["도쿄 타워", "교토 기요미즈데라"],
    };

    const countryInfoList = [
      `비자: ${flightDetail.visaRequired}`,
      `시차: ${flightDetail.timezoneDifference}`,
      `통화: ${flightDetail.currency}`,
      `언어: ${flightDetail.language}`,
      `추천 음식: ${flightDetail.recommendedFood}`,
      `추천 관광지: ${flightDetail.recommendedAttractions[0]}, ${flightDetail.recommendedAttractions[1]}`,
    ];
    render(<DetailCard detail={flightDetail} category="flight" />);

    expect(
      screen.getByRole("heading", { name: "여행지 정보" })
    ).toBeInTheDocument();
    countryInfoList.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("render HotelDetail when category is hotel", () => {
    const hotelDetail: HotelDetail = {
      id: 1,
      rating: 5,
      breakfastIncluded: true,
      airportShuttle: true,
      customerRating: 4.7,
      amenities: ["와이파이", "야외 수영장", "스파"],
      nearbyRestaurants: ["Blue Elephant", "Thip Samai Pad Thai"],
      star: 5,
    };

    const hotelInfoList = [
      { title: "등급", text: "⭐⭐⭐⭐⭐" },
      { title: "조식 포함", text: "⭕" },
      { title: "편의 시설", text: formatArrToStr(hotelDetail.amenities) },
      { title: "공항 셔틀", text: "⭕" },
      {
        title: "주변 맛집",
        text: formatArrToStr(hotelDetail.nearbyRestaurants),
      },
      { title: "고객 평점", text: `${hotelDetail.rating} / 5` },
    ];

    render(<DetailCard detail={hotelDetail} category="hotel" />);

    expect(
      screen.getByRole("heading", { name: "호텔 정보" })
    ).toBeInTheDocument();

    const items = screen.getAllByRole("listitem");

    items.forEach((item, i) => {
      expect(item).toHaveTextContent(
        hotelInfoList[i].title + ": " + hotelInfoList[i].text
      );
    });
  });

  it("render Activity when category is activity", () => {
    const activityDetail: ActivityDetail = {
      id: 11,
      duration: "4시간",
      languages: ["영어"],
      includes: ["어트랙션 이용권", "음료 제공"],
      minParticipants: 2,
      rating: 4.6,
    };
    const activityInfoList = [
      { title: "소요시간", text: activityDetail.duration },
      { title: "지원 언어", text: formatArrToStr(activityDetail.languages) },
      { title: "최소 인원", text: activityDetail.minParticipants + "명" },
      { title: "포함 사항", text: formatArrToStr(activityDetail.includes) },
      { title: "고객 평점", text: activityDetail.rating + " / 5" },
    ];

    render(<DetailCard category="activity" detail={activityDetail} />);

    expect(screen.getByRole("heading", { name: "액티비티 정보" }));

    const items = screen.getAllByRole("listitem");

    items.forEach((item, i) => {
      expect(item).toHaveTextContent(
        activityInfoList[i].title + ": " + activityInfoList[i].text
      );
    });
  });
});
