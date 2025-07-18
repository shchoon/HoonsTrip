import styled from "styled-components";

export const Card = styled.div`
  min-width: 120px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  padding: 12px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

export const HotelImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 10px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  align-items: center;
`;

export const HotelName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  min-height: 50px;
`;

export const Location = styled.div`
  font-size: 13px;
  color: #4b5563;
`;

export const Date = styled.div`
  font-size: 12px;
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
