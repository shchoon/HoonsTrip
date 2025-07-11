export type Caoursel = {
  id: number;
  title: string;
  image: string;
};

export type Flight = {
  id: number;
  airlineName: string;
  country: string; // 예: "japan"
  countryImage: string; // 국가 이미지 URL
  departureAirport: string;
  arrivalAirport: string;
  arrivalCountry: string; // 사용자용 표기
  outboundDate: string; // ISO date string
  inboundDate: string; // ISO date string
  price: number;
  currency: string; // 예: "KRW"
  promotionTag: string;
};

export type Hotel = {
  id: number;
  hotelName: string;
  hotelImageUrl: string;
  location: string; // 예: "도쿄, 일본"
  country: string; // 예: "japan"
  checkInDate: string; // ISO date string
  checkOutDate: string; // ISO date string
  pricePerNight: number;
  totalNights: number;
  totalPrice: number;
  currency: string;
  promotionTag: string;
};

export type Activity = {
  id: number;
  activityName: string;
  location: string; // 예: "도쿄, 일본"
  country: string; // 예: "japan"
  activityDate: string; // ISO date string
  durationHours: number; // 소수점 포함 가능 (e.g. 1.5)
  price: number;
  currency: string;
  promotionTag: string;
  imageUrl: string;
};

export type Status = "idle" | "loading" | "success" | "error";

export type Category = "flight" | "hotel" | "activity";

export type CountryInfo = {
  country: string;
  recommendedFood: string;
  visaRequired: string;
  language: string;
  timezoneDifference: string;
  currency: string;
  recommendedAttractions: string[];
};

export type HotelDetail = {
  id: number;
  rating: number; // 호텔 등급 (1~5)
  breakfastIncluded: boolean;
  amenities: string[]; // 편의시설
  airportShuttle: boolean;
  nearbyRestaurants: string[]; // 주변 맛집
  customerRating: number; // 고객 평점 (1~5)
};

export type ActivityDetail = {
  id: number;
  duration: string; // 예: "2시간"
  languages: string[]; // 사용 가능한 언어
  minParticipants: number; // 최소 인원
  includes: string[]; // 포함 사항
  rating: number; // 평점 (0.0 ~ 5.0)
};
