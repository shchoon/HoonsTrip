import type { Activity, Category, Flight, Hotel } from "../type";
import ProductSection from "./ProductSection/ProductSection";
import fetchFromServer from "../api/fetch/fetchFromServer";

const TitleMap: Record<Category, string> = {
  flight: "추천 항공편",
  hotel: "추천 호텔",
  activity: "추천 액티비티",
};

export default async function RecoItemByCategory({
  category,
}: {
  category: Category;
}) {
  const data = await fetchFromServer<Flight[] | Hotel[] | Activity[]>(
    category,
    "no-store"
  );
  const items = data.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <ProductSection
      category={category}
      title={TitleMap[category]}
      products={items}
      loadMore={true}
    />
  );
}
