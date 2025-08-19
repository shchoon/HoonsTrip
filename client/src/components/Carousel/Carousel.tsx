"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import type { Carousel } from "../../type";

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
  width: 100%;
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
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  padding: 0 5px;
  box-sizing: border-box;
`;

const CarouselImage = styled(Image)`
  border-radius: 8px;
`;

export default function Carousel({
  carouselData,
}: {
  carouselData: Carousel[];
}) {
  const [slideCount, setSlideCount] = useState(0);

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
          {carouselData.map((data, i) => {
            return (
              <CarouselItem key={data.id + i}>
                <CarouselImage
                  fill
                  priority={i < 3}
                  src={data.image}
                  alt={data.title}
                />
              </CarouselItem>
            );
          })}
        </CarouselBox>
      </CarouselWrapper>
    </CarouselContainer>
  );
}
