import styled from "styled-components";

import type { Flight, Hotel, Activity } from "../../../type";
import FlightCard from "../../Card/FlightCard/FlightCard";
import HotelCard from "../../Card/HotelCard/HotelCard";
import ActivityCard from "../../Card/ActivityCard/ActivityCard";

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

type Props = {
  id: string;
  title: string;
  products: Flight[] | Hotel[] | Activity[];
};

const CardComponent = (id: string, product: Flight | Hotel | Activity) => {
  if (id === "flight") {
    return <FlightCard product={product as Flight} />;
  } else if (id === "hotel") {
    return <HotelCard product={product as Hotel} />;
  } else if (id === "activity") {
    return <ActivityCard product={product as Activity} />;
  } else {
    return null;
  }
};

export default function ProductSection({ id, title, products }: Props) {
  return (
    <ProductContainer>
      <ProductTitle>{title}</ProductTitle>
      <ProductContent>
        <CardContainer>
          {products.map((product) => {
            return <>{CardComponent(id, product)}</>;
          })}
        </CardContainer>
        <LoadMore src="/public/load-more.png" />
      </ProductContent>
    </ProductContainer>
  );
}
