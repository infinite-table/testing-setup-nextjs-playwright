import { test, expect } from "@testing";

test("Main example has corrent content", async ({ page }) => {
  await expect(await page.innerText("body")).toContain("Hello world");
});
