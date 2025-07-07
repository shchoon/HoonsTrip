import {
  Card,
  HotelImage,
  InfoBox,
  HotelName,
  Location,
  Price,
  PromotionTag,
} from "./HotalCard.style";

import type { Hotel } from "../../../type";

type Props = {
  product: Hotel;
};

export default function HotelCard({ product }: Props) {
  return (
    <Card>
      <HotelImage src={product.hotelImageUrl} alt={product.hotelName} />
      <InfoBox>
        <HotelName>{product.hotelName}</HotelName>
        <Location>{product.location}</Location>
        <Date>
          체크인: {product.checkInDate}
          <br />
          체크아웃: {product.checkOutDate}
        </Date>
        <Price>
          {product.totalPrice && product.totalPrice.toLocaleString()}{" "}
          {product.currency}
        </Price>
        <PromotionTag>{product.promotionTag}</PromotionTag>
      </InfoBox>
    </Card>
  );
}
