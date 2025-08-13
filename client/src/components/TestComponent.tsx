import type { Category } from "../type";
import ProductSection from "./ProductSection/ProductSection";
import {
  FlightResource,
  HotelResource,
  ActivityResource,
} from "../api/fetch/fetchcategoryTest";

const categoryTitleMap: Record<Category, string> = {
  flight: "추천 항공편",
  hotel: "추천 호텔",
  activity: "추천 액티비티",
};

export default function TestComponent({ category }: { category: Category }) {
  const title = categoryTitleMap[category];
  let items;

  switch (category) {
    case "flight": {
      items = FlightResource.read();
      break;
    }
    case "hotel": {
      items = HotelResource.read();
      break;
    }
    case "activity": {
      items = ActivityResource.read();
      break;
    }
  }

  if (items) {
    items = [...items].sort(() => Math.random() - 0.5).slice(0, 3);
  }

  return (
    <ProductSection
      key={category}
      category={category}
      title={title}
      products={items}
    />
  );
}
