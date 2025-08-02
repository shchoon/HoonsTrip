import styled from "styled-components";

import FlightCard from "../Card/FlightCard/FlightCard";
import HotelCard from "../Card/HotelCard/HotelCard";
import ActivityCard from "../Card/ActivityCard/ActivityCard";
import { useRouter } from "../../hook/useRouter";

import type { Flight, Hotel, Activity } from "../../type";

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
  grid-template-columns: repeat(3, minmax(120px, 1fr));
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
  category: string;
  title: string;
  products: Flight[] | Hotel[] | Activity[];
  loadMore?: boolean;
};

const CardComponent = (
  category: string,
  product: Flight | Hotel | Activity,
  router: ReturnType<typeof useRouter>["router"]
) => {
  const handleClick = () => {
    router(`/${category}/detail?id=${product.id}`);
  };

  if (category === "flight") {
    return (
      <FlightCard
        key={product.id}
        product={product as Flight}
        onClick={handleClick}
      />
    );
  }
  if (category === "hotel") {
    return (
      <HotelCard
        key={product.id}
        product={product as Hotel}
        onClick={handleClick}
      />
    );
  } else if (category === "activity") {
    return (
      <ActivityCard
        key={product.id}
        product={product as Activity}
        onClick={handleClick}
      />
    );
  } else {
    return null;
  }
};

export default function ProductSection({
  category,
  title,
  products,
  loadMore = false,
}: Props) {
  const { router } = useRouter();
  return (
    <ProductContainer>
      <ProductTitle>{title}</ProductTitle>
      <ProductContent>
        <CardContainer>
          {products.map((product) => {
            return <>{CardComponent(category, product, router)}</>;
          })}
        </CardContainer>
        {loadMore && (
          <LoadMore
            data-testid="loadMore"
            onClick={() => {
              router(`/${category}`);
            }}
            src="/public/load-more.png"
          />
        )}
      </ProductContent>
    </ProductContainer>
  );
}
