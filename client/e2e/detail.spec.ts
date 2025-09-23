import { expect, test } from "@playwright/test";

test.describe("route to DetailPage when card is clicked", () => {
  test("should route to flight detail", async ({ page }) => {
    await page.goto("/home");

    const flightCard = page.getByTestId("flight-card").nth(0);
    await flightCard.click();
    await page.waitForURL("/flight/detail?id=27");
    await expect(page).toHaveURL("/flight/detail?id=27");

    await page.waitForResponse(
      (response) =>
        response.url().includes("hotel") && response.status() === 200
    );
    await page.waitForResponse(
      (response) =>
        response.url().includes("activity") && response.status() === 200
    );

    await expect(page.getByAltText("말레이시아")).toBeVisible();
    await expect(page.getByRole("heading", { name: "AirAsia" })).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "이런 호텔은 어떠세요?" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "이런 액티비티는 어떠세요?" })
    ).toBeVisible();

    const hotelCard = page.getByTestId("hotel-card").nth(0);
    await hotelCard.click();
    await expect(page).toHaveURL("/hotel/detail?id=17");
  });

  // test("should route to hotel detail", async ({ page }) => {
  //   await page.goto("/home");
  //   const hotelCard = page.getByTestId("hotel-card").nth(0);
  //   await hotelCard.click();
  //   await page.waitForURL("/hotel/detail?id=6");
  //   await expect(page).toHaveURL("/hotel/detail?id=6");

  //   await expect(page.getByAltText("Four Seasons Hong Kong")).toBeVisible();

  //   await expect(
  //     page.getByRole("heading", { name: "이런 항공편은 어떠세요?" })
  //   ).toBeVisible();
  //   await expect(
  //     page.getByRole("heading", { name: "이런 액티비티는 어떠세요?" })
  //   ).toBeVisible();

  //   const flightCard = page.getByTestId("flight-card").nth(0);
  //   await flightCard.click();
  //   await expect(page).toHaveURL("/flight/detail?id=14");
  // });

  // test("should route to activity detail", async ({ page }) => {
  //   await page.goto("/home");
  //   const activityCard = page.getByTestId("activity-card").nth(0);
  //   await activityCard.click();
  //   await page.waitForURL("/activity/detail?id=23");
  //   await expect(page).toHaveURL("/activity/detail?id=23");

  //   await expect(page.getByAltText("싱가포르 리버 보트 체험")).toBeVisible();

  //   await expect(
  //     page.getByRole("heading", { name: "이런 항공편은 어떠세요?" })
  //   ).toBeVisible();
  //   await expect(
  //     page.getByRole("heading", { name: "이런 호텔은 어떠세요?" })
  //   ).toBeVisible();

  //   const hotelCard = page.getByTestId("hotel-card").nth(0);
  //   await hotelCard.click();
  //   await expect(page).toHaveURL("/hotel/detail?id=10");
  // });
});
