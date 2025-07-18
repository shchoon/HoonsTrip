import styled from "styled-components";

export const BookingSection = styled.div`
  flex: 1;
  background: white;
  padding: 24px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.07);

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 0 0 12px;
  font-size: 26px;
  color: #222;
`;

export const SubTitle = styled.p`
  margin: 0 0 14px;
  font-size: 18px;
  color: #555;
`;

export const Dates = styled.p`
  margin: 0 0 24px;
  font-size: 16px;
  color: #666;
  line-height: 1.4;
`;

export const Price = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #e60023;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PromotionTag = styled.span`
  background-color: #ffe600;
  color: black;
  padding: 4px 10px;
  font-weight: 600;
  border-radius: 6px;
  font-size: 14px;
`;

export const BookButton = styled.button`
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
