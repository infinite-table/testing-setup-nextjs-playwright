import { test, expect } from "@testing";

test.describe("the second test", () => {
  test("has correct content", async ({ page }) => {
    await expect(await page.innerText("body")).toContain("second test");
  });
});
