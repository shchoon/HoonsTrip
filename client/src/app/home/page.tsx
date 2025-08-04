"use client";
import ProductSection from "../../components/ProductSection/ProductSection";
import { useHomeData } from "../../hook/useHomeData";

export default function Home() {
  const { productState, status } = useHomeData();

  if (status !== "success" || !productState) return;

  return (
    <>
      {productState.map((product) => {
        return (
          <ProductSection
            key={product.title}
            category={product.id}
            title={product.title}
            products={product.products}
            loadMore={true}
          />
        );
      })}
    </>
  );
}
