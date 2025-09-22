import {
  Card,
  CountryImage,
  AirlineName,
  InfoBox,
  Route,
  Dates,
  Price,
  PromotionTag,
} from "./FlightCard.style";

import type { Flight } from "../../../type";

type Props = {
  product: Flight;
  onClick: () => void;
  testId: string;
  index: number;
};

export default function FlightCard({ product, onClick, testId, index }: Props) {
  return (
    <Card data-testid={testId} onClick={onClick}>
      <CountryImage
        priority={index === 0 || index === 1 || index === 2}
        src={product.image}
        alt={product.arrivalCountry}
        width={200}
        height={200}
      />
      <AirlineName>{product.airlineName}</AirlineName>
      <InfoBox>
        <Route>
          {product.departureAirport} → {product.arrivalAirport}
        </Route>
        <Dates>
          출발: {product.outboundDate} / 도착: {product.inboundDate}
        </Dates>
        <Price>
          {product.price && product.price.toLocaleString()} {product.currency}
        </Price>
        <PromotionTag>{product.promotionTag}</PromotionTag>
      </InfoBox>
    </Card>
  );
}
