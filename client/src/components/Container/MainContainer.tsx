import styled from "styled-components";
import FlightCard from "../Card/FlightCard";
import { useEffect, useState } from "react";
import HotelCard from "../Card/HotelCard";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 2rem;
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
`;

const ProductTitle = styled.h3`
  text-align: start;
`;

const LoadMore = styled.img`
  width: 30px;
  height: 30px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default function MainContainer() {
  const [products, setProducts] = useState({
    flight: [],
    hotel: [],
  });

  const fetchUrls = [
    "http://localhost:3333/flight",
    "http://localhost:3333/hotel",
  ];

  useEffect(() => {
    const getData = async () => {
      const responses = await Promise.all(fetchUrls.map((url) => fetch(url)));
      const data = await Promise.all(responses.map((res) => res.json()));

      setProducts((prev) => ({
        ...prev,
        flight: data[0].slice(0, 3),
        hotel: data[1].slice(0, 3),
      }));
    };

    getData();
  }, []);

  if (products.flight.length === 0) return;

  return (
    <Container>
      <ProductContainer>
        <ProductTitle>특가 항공권</ProductTitle>
        <ProductContent>
          <CardContainer>
            {products.flight.map((product) => {
              return <FlightCard flightData={product} />;
            })}
          </CardContainer>
          <LoadMore src="/public/load-more.png" />
        </ProductContent>
      </ProductContainer>
      <ProductContainer>
        <ProductTitle>특가 호텔</ProductTitle>
        <ProductContent>
          <CardContainer>
            {products.hotel.map((product) => {
              return <HotelCard hotelData={product} />;
            })}
          </CardContainer>
          <LoadMore src="/public/load-more.png" />
        </ProductContent>
      </ProductContainer>
    </Container>
  );
}
