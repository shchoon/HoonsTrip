import type { Activity, Category, Flight, Hotel } from "../type";
import ProductSection from "./ProductSection/ProductSection";

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
  const data: Flight[] | Hotel[] | Activity[] = await fetch(
    "http://localhost:3001/" + category,
    { cache: "no-store" }
  ).then((res) => res.json());
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
