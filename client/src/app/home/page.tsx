import { Suspense } from "react";
import LoadingProduct from "../../loadingUI/LoadingProduct";
import CategoryItem from "../../components/CategoryItem";

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingProduct itemLength={3} />}>
        <CategoryItem category="flight" usedPage="home" />
        <Suspense fallback={<LoadingProduct itemLength={3} />}>
          <CategoryItem category="hotel" usedPage="home" />
        </Suspense>
        <Suspense fallback={<LoadingProduct itemLength={3} />}>
          <CategoryItem category="activity" usedPage="home" />
        </Suspense>
      </Suspense>
    </>
  );
}
