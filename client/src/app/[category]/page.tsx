import type { Category } from "../../type";
import { Suspense } from "react";
import LoadingProduct from "./loading";
import CategoryItem from "../../components/CategoryItem";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: Category }>;
}) {
  const { category } = await params;
  // const data = await fetchFromServer<Flight[] | Hotel[] | Activity[]>(category);

  return (
    <Suspense fallback={<LoadingProduct />}>
      <CategoryItem category={category} usedPage="category" />
    </Suspense>
    // <ProductSection
    //   category={category}
    //   title={title[category]}
    //   products={data}
    // />
  );
}
