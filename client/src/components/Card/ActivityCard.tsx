import styled from "styled-components";

import type { Activity } from "../../type";

type Props = {
  activityData: Activity;
};

const Card = styled.div`
  min-width: 120px;
  width: auto;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const ActivityImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ActivityName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const Location = styled.div`
  font-size: 13px;
  color: #4b5563;
`;

const Date = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

const Duration = styled.div`
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

export default function ActivityCard({ activityData }: Props) {
  return (
    <Card>
      <ActivityImage
        src={activityData.imageUrl}
        alt={activityData.activityName}
      />
      <InfoBox>
        <ActivityName>{activityData.activityName}</ActivityName>
        <Location>{activityData.location}</Location>
        <Date>날짜: {activityData.activityDate}</Date>
        <Duration>소요 시간: {activityData.durationHours}시간</Duration>
        <Price>
          {activityData.price} {activityData.currency}
        </Price>
        <PromotionTag>{activityData.promotionTag}</PromotionTag>
      </InfoBox>
    </Card>
  );
}
