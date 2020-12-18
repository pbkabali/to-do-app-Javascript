import confirm, { hideConfirmView } from "./confirm";

describe("test close confirmation function", () => {
  test("clears the confirm window", () => {
    const confirmWindow = document.createElement("div");
    confirmWindow.id = "notification-div";
    document.body.appendChild(confirmWindow);
    confirmWindow.innerText = "CONFIRM TEXT";
    hideConfirmView();
    expect(confirmWindow.outerHTML).toBe('<div id="notification-div"></div>');
    expect(confirmWindow.id).toBe("notification-div");
    expect(confirmWindow.innerText).toBe("");
  });
});

describe("test confirmation modal function", () => {
  const action = jest.fn();
  const msg = "delete?";
  const confirmModal = confirm(msg, action);
  test("creates the confirm modal", () => {
    expect(confirmModal.id).toBe("confirm");
  });

  test("Adds the modal CSS classes", () => {
    expect(confirmModal.classList.contains("notice")).toBeTruthy();
  });
});
