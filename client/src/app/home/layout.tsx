"use client";
import styled from "styled-components";

import Carousel from "../../components/Carousel/Carousel";

const MainContainer = styled.div`
  margin-top: 80px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainContainer>
      <Carousel />
      {children}
    </MainContainer>
  );
}
