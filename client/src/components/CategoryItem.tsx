import type { Activity, Category, Flight, Hotel } from "../type";
import ProductSection from "./ProductSection/ProductSection";
import fetchFromServer from "../api/fetch/fetchFromServer";

const TitleMap: Record<Category, string> = {
  flight: "항공편",
  hotel: "호텔",
  activity: "액티비티",
};

export default async function CategoryItem({
  category,
  usedPage,
  delay,
}: {
  category: Category;
  usedPage: "home" | "category";
  delay: number;
}) {
  await new Promise((reslove) => setTimeout(reslove, delay));
  const data = await fetchFromServer<Flight[] | Hotel[] | Activity[]>(category);

  const items =
    usedPage === "home"
      ? data.sort(() => Math.random() - 0.5).slice(0, 3)
      : data;

  const title =
    usedPage === "home" ? "추천 " + TitleMap[category] : TitleMap[category];
  return (
    <ProductSection
      category={category}
      title={title}
      products={items}
      loadMore={usedPage === "home"}
    />
  );
}
