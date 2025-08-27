import { Suspense } from "react";
import LoadingProduct from "../../loadingUI/LoadingProduct";
import CategoryItem from "../../components/CategoryItem";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingProduct itemLength={3} />}>
        <CategoryItem category="flight" usedPage="home" delay={1000} />
        <Suspense fallback={<LoadingProduct itemLength={3} />}>
          <CategoryItem category="hotel" usedPage="home" delay={2000} />
        </Suspense>
        <Suspense fallback={<LoadingProduct itemLength={3} />}>
          <CategoryItem category="activity" usedPage="home" delay={3000} />
        </Suspense>
      </Suspense>
    </>
  );
}
