import styled from "styled-components";

import FlightCard from "../../../components/Card/FlightCard/FlightCard";
import HotelCard from "../../../components/Card/HotelCard/HotelCard";
import ActivityCard from "../../../components/Card/ActivityCard/ActivityCard";
import { useRouter } from "../../../hook/useRouter";

import type { Flight, Hotel, Activity } from "../../../type";

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
  id: string;
  title: string;
  products: Flight[] | Hotel[] | Activity[];
  loadMore?: boolean;
};

const CardComponent = (
  id: string,
  product: Flight | Hotel | Activity,
  router: ReturnType<typeof useRouter>["router"]
) => {
  const handleClick = () => {
    router(`/${id}/detail?id=${product.id}`);
  };

  if (id === "flight") {
    return <FlightCard product={product as Flight} onClick={handleClick} />;
  } else if (id === "hotel") {
    return <HotelCard product={product as Hotel} onClick={handleClick} />;
  } else if (id === "activity") {
    return <ActivityCard product={product as Activity} onClick={handleClick} />;
  } else {
    return null;
  }
};

export default function ProductSection({
  id,
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
            return <>{CardComponent(id, product, router)}</>;
          })}
        </CardContainer>
        {loadMore && (
          <LoadMore
            onClick={() => {
              router(`/${id}`);
            }}
            src="/public/load-more.png"
          />
        )}
      </ProductContent>
    </ProductContainer>
  );
}
