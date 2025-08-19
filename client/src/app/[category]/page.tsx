import ProductSection from "../../components/ProductSection/ProductSection";
import type { Activity, Category, Flight, Hotel } from "../../type";
import fetchFromServer from "../../api/fetch/fetchFromServer";

const title: Record<Category, string> = {
  flight: "항공권",
  hotel: "호텔",
  activity: "액티비티",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: Category }>;
}) {
  const { category } = await params;
  const data = await fetchFromServer<Flight[] | Hotel[] | Activity[]>(category);

  return (
    <ProductSection
      category={category}
      title={title[category]}
      products={data}
    />
  );
}
