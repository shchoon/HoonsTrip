export type Caoursel = {
  id: number;
  title: string;
  image: string;
};

export type Flight = {
  id: number;
  airlineName: string;
  airlineLogoUrl: string;
  departureAirport: string; // 출발 공항 코드
  arrivalAirport: string; // 도착 공항 코드
  arrivalCountry: string; // 도착 국가명
  outboundDate: string; // 출국 날짜 (ISO 형식)
  inboundDate: string; // 입국 날짜 (ISO 형식)
  price: number; // 가격
  currency: string; // 통화 단위
  promotionTag: string; // 프로모션 태그 (ex: 특가, 한정)
};

export type Hotel = {
  id: number;
  hotelName: string;
  hotelImageUrl: string;
  location: string;
  checkInDate: string; // ISO 날짜 문자열 (예: "2024-12-20")
  checkOutDate: string; // ISO 날짜 문자열
  pricePerNight: number; // 1박 가격
  totalNights: number; // 총 숙박일수
  totalPrice: number; // 총 가격
  currency: string; // 통화 (예: "KRW")
  promotionTag: string; // 프로모션 문구
};
