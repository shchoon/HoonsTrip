import {
  Card,
  HotelImage,
  InfoBox,
  HotelName,
  Location,
  Price,
  PromotionTag,
  Date,
} from "./HotalCard.style";

import type { Hotel } from "../../../type";

type Props = {
  product: Hotel;
  onClick: () => void;
  testId: string;
};

export default function HotelCard({ product, onClick, testId }: Props) {
  return (
    <Card data-testid={testId} onClick={onClick}>
      <HotelImage
        src={product.image}
        width={200}
        height={200}
        alt={product.hotelName}
      />
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
