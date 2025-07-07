import {
  Card,
  ActivityImage,
  InfoBox,
  ActivityName,
  Location,
  Duration,
  Price,
  PromotionTag,
} from "./ActivityCard.style";

import type { Activity } from "../../../type";

type Props = {
  product: Activity;
};

export default function ActivityCard({ product }: Props) {
  return (
    <Card>
      <ActivityImage src={product.imageUrl} alt={product.activityName} />
      <InfoBox>
        <ActivityName>{product.activityName}</ActivityName>
        <Location>{product.location}</Location>
        <Date>날짜: {product.activityDate}</Date>
        <Duration>소요 시간: {product.durationHours}시간</Duration>
        <Price>
          {product.price} {product.currency}
        </Price>
        <PromotionTag>{product.promotionTag}</PromotionTag>
      </InfoBox>
    </Card>
  );
}
