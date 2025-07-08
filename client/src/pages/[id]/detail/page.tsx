import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <Wrapper>
      {/* <ImageSection>
        <CountryImage src={flight.countryImage} alt={flight.arrivalCountry} />
        <CountryNameOverlay>{flight.arrivalCountry}</CountryNameOverlay>
      </ImageSection>

      <InfoSection>
        <SubTitle>여행지 정보</SubTitle>
        <InfoList>
          <li>날씨: 맑음, 28°C</li>
          <li>시차: 한국보다 0시간 느림</li>
          <li>통화: {flight.currency}</li>
          <li>언어: 일본어</li>
        </InfoList>
      </InfoSection>

      <BookingSection>
        <Airline>{flight.airlineName}</Airline>
        <Route>
          {flight.departureAirport} → {flight.arrivalAirport}
        </Route>
        <Dates>
          출국일: {flight.outboundDate}
          <br />
          귀국일: {flight.inboundDate}
        </Dates>
        <Price>
          {flight.price.toLocaleString()} {flight.currency}{" "}
          <PromotionTag>{flight.promotionTag}</PromotionTag>
        </Price>
        <BookButton>예약하기</BookButton>
      </BookingSection> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;

  display: flex;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ImageSection = styled.div`
  flex: 1.5;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
`;

const CountryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CountryNameOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 18px 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  font-weight: 700;
  font-size: 26px;
`;

const InfoSection = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 24px 20px;
  border-radius: 12px;
  box-shadow: inset 0 0 8px #eee;

  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.h3`
  margin: 0 0 18px;
  font-size: 22px;
  font-weight: 700;
  color: #444;
`;

const InfoList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  flex-grow: 1;

  li {
    font-size: 16px;
    margin-bottom: 10px;
    color: #555;
  }
`;

const BookingSection = styled.div`
  flex: 1;
  background: white;
  padding: 24px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.07);

  display: flex;
  flex-direction: column;
`;

const Airline = styled.h2`
  margin: 0 0 12px;
  font-size: 26px;
  color: #222;
`;

const Route = styled.p`
  margin: 0 0 14px;
  font-size: 18px;
  color: #555;
`;

const Dates = styled.p`
  margin: 0 0 24px;
  font-size: 16px;
  color: #666;
  line-height: 1.4;
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #e60023;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PromotionTag = styled.span`
  background-color: #ffe600;
  color: black;
  padding: 4px 10px;
  font-weight: 600;
  border-radius: 6px;
  font-size: 14px;
`;

const BookButton = styled.button`
  padding: 15px 0;
  background-color: #ff5722;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  color: white;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #e64a19;
  }
`;
