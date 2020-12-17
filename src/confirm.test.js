import { hideConfirmView } from "./confirm";

const confirmWindow = document.createElement("div");
confirmWindow.innerText = "CONFIRM TEXT";

test("clears the confirm window", () => {
  hideConfirmView();
  expect(confirmWindow.outerHTML).toBe("<div></div>");
  expect(confirmWindow.innerText).toBe("");
});
