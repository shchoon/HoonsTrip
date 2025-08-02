import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { vi } from "vitest";
import ActivityCard from "./ActivityCard";
import type { Activity } from "../../../type";

it("render all UI element for ActivityCard", () => {
  const clickEvent = vi.fn();

  const product: Activity = {
    id: 4,
    activityName: "빅토리아 피크 야경 트램 체험",
    location: "홍콩, 홍콩",
    country: "hong-kong",
    activityDate: "2024-09-18",
    durationHours: 2,
    price: 32000,
    currency: "KRW",
    promotionTag: "특가",
    imagePath: "activity/victoria.jpg",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/activity/victoria.jpg",
  };
  render(<ActivityCard product={product} onClick={clickEvent} />);

  const img = screen.getByAltText(product.activityName) as HTMLImageElement;
  expect(img).toBeInTheDocument();
  expect(img.src).toContain(product.image);

  expect(screen.getByRole("heading", { name: product.activityName }));
  expect(screen.getByText(product.location));
  expect(screen.getByText(`날짜: ${product.activityDate}`));
  expect(screen.getByText(`소요 시간: ${product.durationHours}시간`));
  expect(screen.getByText(`${product.price} ${product.currency}`));
  expect(screen.getByText(product.promotionTag));

  const card = screen.getByTestId("card");
  fireEvent.click(card);
  expect(clickEvent).toHaveBeenCalledTimes(1);
});
