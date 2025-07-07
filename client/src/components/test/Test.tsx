import styled from "styled-components";

const Card = styled.div`
  width: 260px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  background: #fff;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CardHeader = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f9fafb;
`;

const AirlineLogo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const AirlineName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const Route = styled.p`
  font-size: 14px;
  color: #4b5563;
  margin: 4px 0;
`;

const Country = styled.p`
  font-size: 13px;
  color: #1f2937; /* 더 진한 색으로 강조 */
  margin: 2px 0;
  font-weight: 500;
`;

const DateInfo = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin: 2px 0;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #ef4444;
  margin: 12px 0 0 0;
`;

const PromotionTag = styled.span`
  display: inline-block;
  font-size: 12px;
  color: #ffffff;
  background-color: #f97316;
  padding: 4px 8px;
  border-radius: 6px;
  margin-top: 8px;
`;

export default function Test({ deal }: { deal: any }) {
  return (
    <Card>
      <CardHeader>
        <AirlineLogo src={deal.airlineLogoUrl} alt={deal.airlineName} />
        <AirlineName>{deal.airlineName}</AirlineName>
      </CardHeader>
      <CardBody>
        <Route>
          {deal.departureAirport} → {deal.arrivalAirport}
        </Route>
        <Country>목적지: {deal.arrivalCountry}</Country>
        <DateInfo>출국: {deal.outboundDate}</DateInfo>
        <DateInfo>귀국: {deal.inboundDate}</DateInfo>
        <Price>
          {deal.price.toLocaleString()} {deal.currency}
        </Price>
        <PromotionTag>{deal.promotionTag}</PromotionTag>
      </CardBody>
    </Card>
  );
}
