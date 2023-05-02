import { test, expect, Page } from "@playwright/test";

test("test the not authenticated base page", async ({ page, baseURL }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }
  
  await page.goto(baseURL);
  await expect(page.getByText("Log in")).toBeVisible();
});

test("test the not authenticated add result page", async ({ page, baseURL }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }
  
  await page.goto(baseURL + "add-result-container");
  await expect(page.getByText("Log in")).toBeVisible();
});

test("test the not authenticated players page", async ({ page, baseURL }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }
  
  await page.goto(baseURL + "players-container");
  await expect(page.getByText("Log in")).toBeVisible();
});

const doTest = async ({ page, baseURL, contextPath} : { page: Page, baseURL: string, contextPath: string }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }
  
  await page.goto(baseURL + contextPath);
  await expect(page.getByText("Log in")).toBeVisible();
}