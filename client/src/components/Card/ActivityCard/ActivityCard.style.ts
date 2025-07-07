import styled from "styled-components";

export const Card = styled.div`
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

export const ActivityImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 8px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const ActivityName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const Location = styled.div`
  font-size: 13px;
  color: #4b5563;
`;

export const Date = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

export const Duration = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #ef4444;
`;

export const PromotionTag = styled.span`
  align-self: center;
  display: inline-block;
  font-size: 12px;
  color: #ffffff;
  background-color: #f97316;
  padding: 4px 8px;
  border-radius: 6px;
`;
