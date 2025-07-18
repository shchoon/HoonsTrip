import type { Flight, Hotel, Category, Activity } from "../../../type";

import {
  BookButton,
  BookingSection,
  Title,
  SubTitle,
  Dates,
  Price,
  PromotionTag,
} from "./BookingCard.style";

type Props = {
  category: Category;
  data: Flight | Hotel | Activity;
};

type BookingMap = {
  flight: Flight;
  hotel: Hotel;
  activity: Activity;
};

const inferBookingType = <C extends keyof BookingMap>(
  _category: C,
  data: unknown
): data is BookingMap[C] => {
  return true;
};

export default function BookingCard({ category, data }: Props) {
  return (
    <BookingSection>
      {category === "flight" && inferBookingType(category, data) && (
        <FlightBooking data={data} />
      )}
      {category === "hotel" && inferBookingType(category, data) && (
        <HotelBooking data={data} />
      )}
      {category === "activity" && inferBookingType(category, data) && (
        <ActivityBooking data={data} />
      )}
    </BookingSection>
  );
}

function FlightBooking({ data }: { data: Flight }) {
  return (
    <>
      <Title>{data.airlineName}</Title>
      <SubTitle>
        {data.departureAirport} → {data.arrivalAirport}
      </SubTitle>
      <Dates>
        출국일: {data.outboundDate}
        <br />
        귀국일: {data.inboundDate}
      </Dates>
      <Price>
        {data.price && data.price.toLocaleString()} {data.currency}{" "}
        <PromotionTag>{data.promotionTag}</PromotionTag>
      </Price>
      <BookButton>예약하기</BookButton>
    </>
  );
}

function HotelBooking({ data }: { data: Hotel }) {
  return (
    <>
      <Title>{data.hotelName}</Title>
      <SubTitle>{data.location}</SubTitle>
      <Dates>체크인: {data.checkInDate}</Dates>
      <Dates>체크아웃: {data.checkOutDate}</Dates>
      <Price>
        1박: {data.pricePerNight && data.pricePerNight.toLocaleString()}{" "}
        {data.currency} <PromotionTag>{data.promotionTag}</PromotionTag>
      </Price>
      <BookButton>예약하기</BookButton>
    </>
  );
}

function ActivityBooking({ data }: { data: Activity }) {
  return (
    <>
      <Title>{data.activityName}</Title>
      <SubTitle>{data.location}</SubTitle>
      <Dates>날짜: {data.activityDate}</Dates>
      <Dates>소요시간: {data.durationHours}</Dates>
      <Price>
        {data.price && data.price.toLocaleString()} {data.currency}{" "}
        <PromotionTag>{data.promotionTag}</PromotionTag>
      </Price>
      <BookButton>예약하기</BookButton>
    </>
  );
}
