import styled from "styled-components";

import type { Hotel } from "../../type";

const Card = styled.div`
  min-width: 120px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
`;

const HotelName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  min-height: 50px;
`;

const Location = styled.div`
  font-size: 13px;
  color: #4b5563;
`;

const Date = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #ef4444;
`;

const PromotionTag = styled.span`
  align-self: center;
  display: inline-block;
  font-size: 12px;
  color: #ffffff;
  background-color: #f97316;
  padding: 4px 8px;
  border-radius: 6px;
`;

type Props = {
  hotelData: Hotel;
};

export default function HotelCard({ hotelData }: Props) {
  return (
    <Card>
      <HotelImage src={hotelData.hotelImageUrl} alt={hotelData.hotelName} />
      <InfoBox>
        <HotelName>{hotelData.hotelName}</HotelName>
        <Location>{hotelData.location}</Location>
        <Date>
          체크인: {hotelData.checkInDate}
          <br />
          체크아웃: {hotelData.checkOutDate}
        </Date>
        <Price>
          {hotelData.totalPrice.toLocaleString()} {hotelData.currency}
        </Price>
        <PromotionTag>{hotelData.promotionTag}</PromotionTag>
      </InfoBox>
    </Card>
  );
}
