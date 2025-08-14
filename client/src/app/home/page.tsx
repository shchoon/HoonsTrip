"use client";
import { Suspense } from "react";
import TestComponent from "../components/TestComponent";
import LoadingProduct from "../loadingUI/LoadingProduct";
import { useHomeData } from "../../hook/useHomeData";
import ProductSection from "../../components/ProductSection/ProductSection";

// const LazyLoading = lazy(() => import("../../components/TestComponent"));

export default function Home() {
  const { productState, status } = useHomeData();

  if (status !== "success" || !productState) return;

  return (
    <>
      {/* <Suspense fallback={<LoadingProduct />}>
        <TestComponent category="flight" />
      </Suspense>
      <Suspense fallback={<LoadingProduct />}>
        <TestComponent category="hotel" />
      </Suspense>
      <Suspense fallback={<LoadingProduct />}>
        <TestComponent category="activity" />
      </Suspense> */}
      {productState.map((product) => {
        return (
          <ProductSection
            key={product.id}
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
