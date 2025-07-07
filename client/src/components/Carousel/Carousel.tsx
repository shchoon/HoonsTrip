import { useEffect, useState } from "react";
import styled from "styled-components";

import type { Caoursel } from "../../type";

interface CarouselBoxProps {
  translateX: number;
  animation: boolean;
}

const CarouselContainer = styled.section`
  margin-top: 80px; /* 헤더 높이 만큼 여백 */
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
  height: auto;
  display: block;
`;

const Icon = styled.img<{ direction: string }>`
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
  transform: ${({ direction }) =>
    direction === "right" ? "rotate(180deg)" : "none"};

  &:hover {
    background-color: #e5e7eb; /* light gray 배경 */
    transform: ${({ direction }) =>
      direction === "right" ? "rotate(180deg) scale(1.2)" : "scale(1.2)"};
  }
`;

export default function Carousel() {
  const [carouselData, setCarouselData] = useState<Caoursel[]>();
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    const getCarouselData = async () => {
      const res = await fetch("http://localhost:3333/carousel");
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

  // const handleClickArrow = (direc: string) => {
  //   if (!carouselData) return;

  //   if (direc === "right") {
  //     setSlideCount((prev) =>
  //       prev === carouselData.length - 3 ? 0 : prev + 1
  //     );
  //   } else {
  //     setSlideCount((prev) =>
  //       prev === 0 ? carouselData.length - 3 : prev - 1
  //     );
  //   }
  // };

  if (!carouselData) return;

  return (
    <CarouselContainer>
      {/* <Icon
        src={"/public/left-arrow.png"}
        direction="left"
        // onClick={() => handleClickArrow("left")}
      /> */}
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
      {/* <Icon
        src={"/public/left-arrow.png"}
        direction="right"
        // onClick={() => handleClickArrow("right")}
      /> */}
    </CarouselContainer>
  );
}
