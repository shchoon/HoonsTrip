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
