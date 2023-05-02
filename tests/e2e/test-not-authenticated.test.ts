import { test, expect, Page } from "@playwright/test";

test("test the not authenticated base page", async ({ page, baseURL }) => {
  await doTest({page: page, baseURL: baseURL, contextPath: ""});
});

test("test the not authenticated add result page", async ({ page, baseURL }) => {
  await doTest({page: page, baseURL: baseURL, contextPath: "add-result-container"});
});

test("test the not authenticated players page", async ({ page, baseURL }) => {
  await doTest({page: page, baseURL: baseURL, contextPath: "players-container"});
});

const doTest = async ({ page, baseURL, contextPath} : { page: Page, baseURL?: string, contextPath: string }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }
  
  await page.goto(baseURL + contextPath);
  await expect(page.getByText("Log in")).toBeVisible();
}