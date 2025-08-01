import { test, expect, type Page } from "@playwright/test";

// test.beforeEach(async ({ page }) => {
//   await page.goto("http://localhost:5173/");
// });

const checkUrl = async (category: string, page: Page) => {
  await expect(page).toHaveURL("/" + category);
};

test.describe("route correct page when button is clicked", () => {
  test("should route to flight page when click flight button", async ({
    page,
  }) => {
    await page.goto("/");
    const btn = page.getByRole("link", { name: "항공권" });
    const mainPageHeading = page.getByRole("heading", { name: "추천 항공편" });
    await expect(mainPageHeading).toBeInViewport();

    await expect(btn).toBeInViewport();
    await btn.click();
    await checkUrl("flight", page);

    await page.goto("/");

    const loadMoreBtn = page.getByTestId("loadMore").nth(0);

    await loadMoreBtn.click();

    await checkUrl("flight", page);

    const categoryPageHeading = page.getByRole("heading", {
      name: "항공권",
    });

    await expect(categoryPageHeading).toBeInViewport();
  });

  test("should route to hotel page when click hotel button", async ({
    page,
  }) => {
    await page.goto("/");

    const btn = page.getByRole("link", { name: "호텔" });
    const mainPageHeading = page.getByRole("heading", { name: "추천 호텔" });
    await expect(mainPageHeading).toBeInViewport();

    await expect(btn).toBeInViewport();
    await btn.click();
    await checkUrl("hotel", page);

    await page.goto("/");

    const loadMoreBtn = page.getByTestId("loadMore").nth(1);

    await loadMoreBtn.click();

    await checkUrl("hotel", page);

    const categoryPageHeading = page.getByRole("heading", { name: "호텔" });

    await expect(categoryPageHeading).toBeInViewport();
  });

  test("should route to activity page when click activity button", async ({
    page,
  }) => {
    await page.goto("/");

    const btn = page.getByRole("link", { name: "액티비티" });
    const mainPageHeading = page.getByRole("heading", {
      name: "추천 액티비티",
    });
    await mainPageHeading.scrollIntoViewIfNeeded();
    await expect(mainPageHeading).toBeInViewport();

    await expect(btn).toBeInViewport();
    await btn.click();
    await checkUrl("activity", page);

    await page.goto("/");

    const loadMoreBtn = page.getByTestId("loadMore").nth(2);

    await loadMoreBtn.click();

    await checkUrl("activity", page);

    const categoryPageHeading = page.getByRole("heading", { name: "액티비티" });

    await expect(categoryPageHeading).toBeInViewport();
  });
});
