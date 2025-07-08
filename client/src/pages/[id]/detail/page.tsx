import styled from "styled-components";
import ProductSection from "../../Home/_components/ProductSection";

import type { Flight, Hotel, Activity } from "../../../type";

type Props = {
  flight: Flight;
  hotels: Hotel[];
  activities: Activity[];
};

export default function FlightDetailPage({
  flight,
  hotels,
  activities,
}: Props) {
  return (
    <Wrapper>
      <ImageWrapper>
        <CountryImage src={flight.countryImage} alt={flight.arrivalCountry} />
        <Overlay>
          <CountryName>{flight.arrivalCountry}</CountryName>
        </Overlay>
      </ImageWrapper>

      <FlightCard>
        <Airline>{flight.airlineName}</Airline>
        <Route>
          {flight.departureAirport} → {flight.arrivalAirport}
        </Route>
        <Dates>
          출국일: {flight.outboundDate}
          <br />
          귀국일: {flight.inboundDate}
        </Dates>
        <PriceBox>
          <Price>
            {flight.price.toLocaleString()} {flight.currency}
          </Price>
          <Tag>{flight.promotionTag}</Tag>
        </PriceBox>
        <CTAButton>항공권 예약하기</CTAButton>
      </FlightCard>

      <ProductSection id="hotel" title="🛏 추천 호텔" products={hotels} />
      <ProductSection
        id="activity"
        title="🎯 인기 액티비티"
        products={activities}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 260px;
  overflow: hidden;
  border-radius: 12px;
`;

const CountryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
`;

const CountryName = styled.h2`
  color: #fff;
  font-size: 28px;
  margin: 0;
`;

const FlightCard = styled.div`
  background-color: white;
  margin-top: 20px;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const Airline = styled.h3`
  font-size: 22px;
  margin: 0 0 12px 0;
`;

const Route = styled.p`
  font-size: 18px;
  color: #333;
  margin: 0 0 10px 0;
`;

const Dates = styled.p`
  color: #555;
  margin: 0 0 16px 0;
  line-height: 1.5;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #e60023;
`;

const Tag = styled.span`
  font-size: 13px;
  background-color: #ffe600;
  color: #000;
  padding: 4px 8px;
  border-radius: 4px;
`;

const CTAButton = styled.button`
  width: 100%;
  padding: 14px 0;
  background-color: #ff5722;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #e64a19;
  }
`;
