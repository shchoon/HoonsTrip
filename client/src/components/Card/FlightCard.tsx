import styled from "styled-components";

import type { Flight } from "../../type";

type Props = {
  flightData: Flight;
};

const Card = styled.div`
  min-width: 200px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  transition: tranasform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FlightBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Logo = styled.img`
  width: 25px;
  height: 25px;
`;

const Brand = styled.h3`
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Route = styled.div`
  font-size: 14px;
  color: #4b5563;
`;

const Country = styled.div`
  font-size: 13px;
  color: #1f2937;
  font-weight: 500;
`;

const Date = styled.div`
  font-size: 13px;
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

export default function FlightCard({ flightData }: Props) {
  return (
    <Card>
      <FlightBrand>
        <Logo src={"/public/airplane.png"} />
        <Brand>{flightData.airlineName}</Brand>
      </FlightBrand>
      <InfoBox>
        <Route>
          {flightData.arrivalAirport} → {flightData.departureAirport}
        </Route>
        <Country>목적지: {flightData.arrivalCountry}</Country>
        <Date>출국: {flightData.inboundDate}</Date>
        <Date>귀국: {flightData.outboundDate}</Date>
        <Price>{flightData.price} KRW</Price>
        <PromotionTag>{flightData.promotionTag}</PromotionTag>
      </InfoBox>
    </Card>
  );
}
