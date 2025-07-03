import { useEffect } from "react";
import styled from "styled-components";

const CarouselContainer = styled.section`
  margin-top: 80px; /* 헤더 높이 만큼 여백 */
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #f9fafb;
`;

const CarouselWrapper = styled.div``;

const CarouselItem = styled.div``;

const CarouselImage = styled.img``;

const CarouselText = styled.div``;

export default function Carousel() {
  useEffect(() => {
    const getCarouselData = async () => {
      const res = await fetch("http://localhost:3333/carousel");
      const data = await res.json();
    };

    getCarouselData();
  });
  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselItem>
          <CarouselImage
            src="https://images.unsplash.com/photo-1582719478181-93c5b3a54d8f"
            alt="여행지1"
          />
          <CarouselText>
            <h2>몰디브 리조트</h2>
            <p>지상 최고의 휴양지</p>
          </CarouselText>
        </CarouselItem>
        <CarouselItem>
          <CarouselImage
            src="https://images.unsplash.com/photo-1515489420-9201f7fc63ca"
            alt="여행지2"
          />
          <CarouselText>
            <h2>파리 에펠탑</h2>
            <p>로맨틱한 도시 여행</p>
          </CarouselText>
        </CarouselItem>
      </CarouselWrapper>
    </CarouselContainer>
  );
}
