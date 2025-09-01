import { expect, test } from "@playwright/test";

test.describe("route to DetailPage when card is clicked", () => {
  test("should route to flight detail", async ({ page }) => {
    await page.goto("/home");
    // await expect(page.getByRole("heading", { name: "11" })).toBeInViewport();
    const flightCard = page.getByTestId("flight-section").nth(0);
    await flightCard.click();
    await expect(page).toHaveURL("/flight/detail?id=20");
  });
});
