import type { Activity, Flight, Hotel } from "../src/type";

export const categoryData: {
  flight: Flight;
  hotel: Hotel;
  activity: Activity;
} = {
  flight: {
    id: 20,
    airlineName: "Singapore Airlines",
    country: "singapore",
    imagePath: "country/singapore1.jpg",
    departureAirport: "ICN",
    arrivalAirport: "SIN",
    arrivalCountry: "싱가포르",
    outboundDate: "2024-08-01",
    inboundDate: "2024-08-07",
    price: 200000,
    currency: "KRW",
    promotionTag: "특가",
    image: "image",
  },
  hotel: {
    id: 14,
    hotelName: "JW Marriott Hotel Hanoi",
    imagePath: "hotel/hotel14.jpg",
    location: "하노이, 베트남",
    country: "vietnam",
    checkInDate: "2024-09-12",
    checkOutDate: "2024-09-17",
    pricePerNight: 250000,
    totalNights: 5,
    totalPrice: 1250000,
    currency: "KRW",
    promotionTag: "특가",
    image: "image",
  },
  activity: {
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
    image: "image",
  },
};
