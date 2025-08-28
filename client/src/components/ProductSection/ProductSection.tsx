"use client";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { lazy } from "react";
import Image from "next/image";

import type { Flight, Hotel, Activity } from "../../type";
import Link from "next/link";

const FlightCard = lazy(() => import("../Card/FlightCard/FlightCard"));
const HotelCard = lazy(() => import("../Card/HotelCard/HotelCard"));
const ActivityCard = lazy(() => import("../Card/ActivityCard/ActivityCard"));

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

const LoadMore = styled(Image)`
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
  product: Flight | Hotel | Activity
) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${category}/detail?id=${product.id}`);
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
  return (
    <ProductContainer>
      <ProductTitle>{title}</ProductTitle>
      <ProductContent>
        <CardContainer>
          {products.map((product) => {
            return (
              <div key={product.id}>{CardComponent(category, product)}</div>
            );
          })}
        </CardContainer>
        {loadMore && (
          <Link href={`/${category}`}>
            <LoadMore
              width={30}
              height={30}
              src={"/load-more.png"}
              alt="loadMore"
            />
          </Link>
        )}
      </ProductContent>
    </ProductContainer>
  );
}
