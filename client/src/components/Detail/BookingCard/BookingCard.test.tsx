import { screen } from "@testing-library/dom";
import BookingCard from "./BookingCard";
import { categoryData } from "../../../../test/categoryData";
import { render } from "@testing-library/react";

describe("BookingCard", () => {
  const bookingData = categoryData;

  const expectBookingBtn = () => {
    expect(screen.getByRole("button", { name: "예약하기" }));
  };

  it("render FlightBooking when category is flight", () => {
    render(<BookingCard category="flight" data={bookingData.flight} />);

    const data = bookingData.flight;
    expect(
      screen.getByRole("heading", { name: data.airlineName })
    ).toBeInTheDocument();
    expect(
      screen.getByText(data.departureAirport + " → " + data.arrivalAirport)
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(
        (_, ele) =>
          ele?.textContent?.includes(`출국일: ${data.outboundDate}`) ?? false
      )
    );
    expect(
      screen.getAllByText(
        (_, ele) =>
          ele?.textContent?.includes(`귀국일: ${data.inboundDate}`) ?? false
      )
    );
    expect(
      screen.getByText(`${data.price.toLocaleString()} ${data.currency}`)
    ).toBeInTheDocument();

    expectBookingBtn();
  });

  it("render HotelBooking when category is hotel", () => {
    render(<BookingCard category="hotel" data={bookingData.hotel} />);

    const data = bookingData.hotel;
    expect(screen.getByRole("heading", { name: data.hotelName }));
    expect(screen.getByText(data.location)).toBeInTheDocument();
    expect(screen.getByText(`체크인: ${data.checkInDate}`));
    expect(screen.getByText(`체크아웃: ${data.checkOutDate}`));
    expect(
      screen.getAllByText(
        (_, ele) =>
          ele?.textContent?.includes(
            `1박: ${data.pricePerNight.toLocaleString()}`
          ) ?? false
      )
    );
    expect(screen.getByText(data.promotionTag));
    expectBookingBtn();
  });

  it("render ActivityBooking when category is activity", () => {
    render(<BookingCard category="activity" data={bookingData.activity} />);

    const data = bookingData.activity;

    expect(screen.getByRole("heading", { name: data.activityName }));
    expect(screen.getByText(data.location)).toBeInTheDocument();
    expect(screen.getByText(`날짜: ${data.activityDate}`));
    expect(screen.getByText(`소요시간: ${data.durationHours}`));
    expect(screen.getByText(`${data.price.toLocaleString()} ${data.currency}`));
    expect(screen.getByText(data.promotionTag));
    expectBookingBtn();
  });
});
