"use client";
import styled from "styled-components";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

export default function LoadingProduct() {
  return (
    <ProductContainer>
      <ProductTitle>
        <Skeleton width={100} height={20} />
      </ProductTitle>
      <ProductContent>
        <CardContainer>
          {Array.from({ length: 3 }).map((_, i) => {
            return <Skeleton key={i} height={400} />;
          })}
        </CardContainer>
        {/* {loadMore && (
          <LoadMore
            data-testid="loadMore"
            onClick={() => {
              router(`/${category}`);
            }}
            src="/public/load-more.png"
          />
        )} */}
      </ProductContent>
    </ProductContainer>
  );
}
