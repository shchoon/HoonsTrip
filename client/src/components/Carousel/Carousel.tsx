import { useEffect, useState } from "react";
import styled from "styled-components";

import type { Caoursel } from "../../type";

interface CarouselBoxProps {
  translateX: number;
  animation: boolean;
}

const CarouselContainer = styled.section`
  width: 100%;
  position: relative;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselWrapper = styled.div`
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CarouselBox = styled.div.withConfig({
  shouldForwardProp: (prop) => !["translateX", "animation"].includes(prop),
})<CarouselBoxProps>`
  width: 100%;
  display: flex;
  transform: translateX(${({ translateX }) => -translateX}%);
  transition: ${({ animation }) =>
    animation === true ? "transform 0.5s ease" : "none"};
`;

const CarouselItem = styled.div`
  display: flex;
  flex: 0 0 33.33%;
  padding: 0 5px;
  box-sizing: border-box;
  align-items: center;
`;

const CarouselImage = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 80%;
  display: block;
`;

export default function Carousel() {
  const [carouselData, setCarouselData] = useState<Caoursel[]>();
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    const getCarouselData = async () => {
      const res = await fetch("http://localhost:3000/carousel");
      const data = await res.json();
      setCarouselData([...data, ...data.slice(0, 3)]);
    };

    getCarouselData();
  }, []);

  useEffect(() => {
    if (!carouselData) return;

    const slideCarousel = setInterval(() => {
      setSlideCount((prev) => prev + 1);
    }, 3000);

    return () => {
      clearInterval(slideCarousel);
    };
  }, [carouselData]);

  if (!carouselData) return;

  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselBox
          translateX={33.33 * slideCount}
          animation={slideCount !== 0}
          onTransitionEnd={() => {
            if (slideCount === carouselData.length - 3) {
              setSlideCount(0);
            }
          }}
        >
          {carouselData.map((data) => {
            return (
              <CarouselItem>
                <CarouselImage src={data.image} alt="여행지1" />
              </CarouselItem>
            );
          })}
        </CarouselBox>
      </CarouselWrapper>
    </CarouselContainer>
  );
}
