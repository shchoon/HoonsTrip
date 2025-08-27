import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { vi } from "vitest";
import HotelCard from "./HotelCard";
import type { Hotel } from "../../../type";

it("render all UI element for FlightCard", () => {
  const clickEvent = vi.fn();

  const product: Hotel = {
    id: 5,
    hotelName: "Rosewood Hong Kong",
    imagePath: "hotel/hotel5.jpg",
    location: "홍콩, 홍콩",
    country: "hong-kong",
    checkInDate: "2024-09-10",
    checkOutDate: "2024-09-14",
    pricePerNight: 230000,
    totalNights: 4,
    totalPrice: 920000,
    currency: "KRW",
    promotionTag: "한정",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/hotel/hotel5.jpg",
  };
  render(<HotelCard product={product} onClick={clickEvent} />);

  const img = screen.getByAltText(product.hotelName) as HTMLImageElement;
  expect(img).toBeInTheDocument();
  expect(img.src).toContain(product.image);

  expect(screen.getByRole("heading", { name: product.hotelName }));
  expect(
    screen.getAllByText(
      (_, ele) =>
        ele?.textContent?.includes(`체크인: ${product.checkInDate}`) ?? false
    )
  );
  expect(
    screen.getAllByText(
      (_, ele) =>
        ele?.textContent?.includes(`체크아웃: ${product.checkOutDate}`) ?? false
    )
  );
  expect(
    screen.getByText(
      `${product.totalPrice.toLocaleString()} ${product.currency}`
    )
  );
  expect(screen.getByText(product.promotionTag));

  const card = screen.getByTestId("card");
  fireEvent.click(card);
  expect(clickEvent).toHaveBeenCalledTimes(1);
});
