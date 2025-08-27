import type { Category } from "../../type";
import { Suspense } from "react";
import LoadingProduct from "../../loadingUI/LoadingProduct";
import CategoryItem from "../../components/CategoryItem";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: Category }>;
}) {
  const { category } = await params;

  return (
    <Suspense fallback={<LoadingProduct itemLength={9} />}>
      <CategoryItem category={category} usedPage="category" delay={1000} />
    </Suspense>
  );
}
