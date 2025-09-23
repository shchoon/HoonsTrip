import { Suspense } from "react";
import LoadingProduct from "../../loadingUI/LoadingProduct";
import CategoryItem from "../../components/CategoryItem";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingProduct itemLength={3} />}>
        <CategoryItem category="flight" usedPage="home" delay={0} />
      </Suspense>
      <Suspense fallback={<LoadingProduct itemLength={3} />}>
        <CategoryItem category="hotel" usedPage="home" delay={0} />
      </Suspense>
      <Suspense fallback={<LoadingProduct itemLength={3} />}>
        <CategoryItem category="activity" usedPage="home" delay={0} />
      </Suspense>
    </>
  );
}
