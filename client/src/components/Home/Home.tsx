import ProductSection from "./_components/ProductSection";

import { useProduct } from "../../hook/useProduct";

import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 2rem;
`;

export default function Home() {
  const { productState, status } = useProduct();

  if (status !== "success") return;

  return (
    <Container>
      {Object.values(productState).map((product) => {
        return (
          <ProductSection
            id={product.id}
            title={product.title}
            products={product.products}
          />
        );
      })}
    </Container>
  );
}
