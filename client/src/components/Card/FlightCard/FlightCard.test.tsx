import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { vi } from "vitest";
import FlightCard from "./FlightCard";
import type { Flight } from "../../../type";

it("render all UI element for FlightCard", () => {
  const clickEvent = vi.fn();

  const product: Flight = {
    id: 20,
    airlineName: "Singapore Airlines",
    country: "singapore",
    imagePath: "country/singapore1.jpg",
    departureAirport: "ICN",
    arrivalAirport: "SIN",
    arrivalCountry: "싱가포르",
    outboundDate: "2024-08-01",
    inboundDate: "2024-08-07",
    price: 200000,
    currency: "KRW",
    promotionTag: "특가",
    image:
      "https://tfjgwawkwttipyikvclt.supabase.co/storage/v1/object/public/images/country/singapore1.jpg",
  };
  render(<FlightCard product={product} onClick={clickEvent} />);

  const img = screen.getByAltText(product.arrivalCountry) as HTMLImageElement;
  expect(img).toBeInTheDocument();
  expect(img.src).toContain(product.image);

  expect(screen.getByRole("heading", { name: product.airlineName }));
  expect(
    screen.getByText(product.departureAirport + " → " + product.arrivalAirport)
  );
  expect(
    screen.getByText(
      `출발: ${product.outboundDate} / 도착: ${product.inboundDate}`
    )
  );
  expect(
    screen.getByText(`${product.price.toLocaleString()} ${product.currency}`)
  );
  expect(screen.getByText(product.promotionTag));

  const card = screen.getByTestId("card");
  fireEvent.click(card);
  expect(clickEvent).toHaveBeenCalledTimes(1);
});
