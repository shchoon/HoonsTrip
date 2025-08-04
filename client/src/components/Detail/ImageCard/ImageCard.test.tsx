import { screen } from "@testing-library/dom";
import ImageCard from "./ImageCard";
import { categoryData } from "../../../../test/categoryData";
import { render } from "@testing-library/react";

describe("ImageCard", () => {
  it("render flight image when category is flight", () => {
    const data = categoryData.flight;

    render(<ImageCard category="flight" data={data} />);

    const img = screen.getByAltText(data.arrivalCountry) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(data.image);
  });

  it("render flight image when category is hotel", () => {
    const data = categoryData.hotel;

    render(<ImageCard category="hotel" data={data} />);

    const img = screen.getByAltText(data.hotelName) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(data.image);
  });

  it("render flight image when category is activity", () => {
    const data = categoryData.activity;

    render(<ImageCard category="activity" data={data} />);

    const img = screen.getByAltText(data.activityName) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(data.image);
  });
});
