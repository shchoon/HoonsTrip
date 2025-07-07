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
};

export default function FlightCard({ product }: Props) {
  return (
    <Card>
      <CountryImage src={product.countryImage} alt={product.arrivalCountry} />
      <AirlineName>{product.airlineName}</AirlineName>
      <InfoBox>
        <Route>
          {product.departureAirport} → {product.arrivalAirport}
        </Route>
        <Dates>
          출발: {product.outboundDate} / 도착: {product.inboundDate}
        </Dates>
        <Price>
          {product.price.toLocaleString()} {product.currency}
        </Price>
        <PromotionTag>{product.promotionTag}</PromotionTag>
      </InfoBox>
    </Card>
  );
}
