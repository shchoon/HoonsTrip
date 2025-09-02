import type { Flight, Hotel, Activity, Category } from "../type";

const flightData: Flight[] = [
  {
    id: 27,
    airlineName: "AirAsia",
    country: "malaysia",
    imagePath: "country/malaysia2.jpg",
    departureAirport: "ICN",
    arrivalAirport: "KUL",
    arrivalCountry: "말레이시아",
    outboundDate: "2024-08-15",
    inboundDate: "2024-08-21",
    price: 230000,
    currency: "KRW",
    promotionTag: "한정",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/country/malaysia2.jpg",
  },
  {
    id: 17,
    airlineName: "Thai Airways",
    country: "thailand",
    imagePath: "country/thailand1.jpg",
    departureAirport: "ICN",
    arrivalAirport: "BKK",
    arrivalCountry: "태국",
    outboundDate: "2024-08-01",
    inboundDate: "2024-08-07",
    price: 200000,
    currency: "KRW",
    promotionTag: "특가",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/country/thailand1.jpg",
  },
  {
    id: 26,
    airlineName: "AirAsia",
    country: "malaysia",
    imagePath: "country/malaysia1.jpg",
    departureAirport: "ICN",
    arrivalAirport: "KUL",
    arrivalCountry: "말레이시아",
    outboundDate: "2024-08-01",
    inboundDate: "2024-08-07",
    price: 200000,
    currency: "KRW",
    promotionTag: "특가",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/country/malaysia1.jpg",
  },
];

const hotelData: Hotel[] = [
  {
    id: 6,
    hotelName: "Four Seasons Hong Kong",
    imagePath: "hotel/hotel6.jpg",
    location: "홍콩, 홍콩",
    country: "hong-kong",
    checkInDate: "2024-09-20",
    checkOutDate: "2024-09-24",
    pricePerNight: 270000,
    totalNights: 4,
    totalPrice: 1080000,
    currency: "KRW",
    promotionTag: "특가",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/hotel/hotel6.jpg",
  },
  {
    id: 27,
    hotelName: "The Ritz-Carlton Kuala Lumpur",
    imagePath: "hotel/hotel27.jpg",
    location: "쿠알라룸푸르, 말레이시아",
    country: "malaysia",
    checkInDate: "2024-09-09",
    checkOutDate: "2024-09-11",
    pricePerNight: 255000,
    totalNights: 2,
    totalPrice: 510000,
    currency: "KRW",
    promotionTag: "특가",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/hotel/hotel27.jpg",
  },
  {
    id: 2,
    hotelName: "Imperial Hotel Osaka",
    imagePath: "hotel/hotel2.jpg",
    location: "오사카, 일본",
    country: "japan",
    checkInDate: "2024-09-18",
    checkOutDate: "2024-09-21",
    pricePerNight: 240000,
    totalNights: 3,
    totalPrice: 720000,
    currency: "KRW",
    promotionTag: "특가",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/hotel/hotel2.jpg",
  },
];

const activityData: Activity[] = [
  {
    id: 23,
    activityName: "싱가포르 리버 보트 체험",
    location: "싱가포르, 싱가포르",
    country: "singapore",
    activityDate: "2024-09-16",
    durationHours: 2,
    price: 33000,
    currency: "KRW",
    promotionTag: "한정",
    imagePath: "activity/riverboat.jpg",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/activity/riverboat.jpg",
  },
  {
    id: 3,
    activityName: "오사카 도톤보리 야간 투어",
    location: "오사카, 일본",
    country: "japan",
    activityDate: "2024-09-26",
    durationHours: 4,
    price: 38000,
    currency: "KRW",
    promotionTag: "특가",
    imagePath: "activity/dotonbori.jpg",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/activity/dotonbori.jpg",
  },
  {
    id: 9,
    activityName: "후아힌 선셋 비치 요가",
    location: "후아힌, 태국",
    country: "thailand",
    activityDate: "2024-09-16",
    durationHours: 2,
    price: 30000,
    currency: "KRW",
    promotionTag: "특가",
    imagePath: "activity/yoga.jpg",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/activity/yoga.jpg",
  },
];

export const mockData: Record<Category, Flight[] | Hotel[] | Activity[]> = {
  flight: flightData,
  hotel: hotelData,
  activity: activityData,
};
