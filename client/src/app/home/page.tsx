// "use client";
// import { useHomeData } from "../../hook/useHomeData";
// import ProductSection from "../../components/ProductSection/ProductSection";
import { Suspense } from "react";
import LoadingProduct from "../../loadingUI/LoadingProduct";
import RecoItemByCategory from "../../components/RecoItemByCategory";

// const LazyLoading = lazy(() => import("../../components/RecoItemByCategory"));

export default function Home() {
  // const { productState, status } = useHomeData();

  // if (status !== "success" || !productState) return;

  return (
    <>
      <Suspense fallback={<LoadingProduct />}>
        <RecoItemByCategory category="flight" />
      </Suspense>
      <Suspense fallback={<LoadingProduct />}>
        <RecoItemByCategory category="hotel" />
      </Suspense>
      <Suspense fallback={<LoadingProduct />}>
        <RecoItemByCategory category="activity" />
      </Suspense>
      {/* <Suspense fallback={<LoadingProduct />}>
        <LazyLoading category="flight" />
      </Suspense>
      <Suspense fallback={<LoadingProduct />}>
        <LazyLoading category="hotel" />
      </Suspense>
      <Suspense fallback={<LoadingProduct />}>
        <LazyLoading category="activity" />
      </Suspense> */}
    </>
  );
}
