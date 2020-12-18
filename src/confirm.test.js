import confirm, { hideConfirmView } from "./confirm";

describe('close confirmation function', () => {
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
})

describe('confirmation modal', () => {
  test("creates the confirm modal", () => {
    const action = jest.fn();
    const msg = "delete?";
    expect(confirm(msg, action).id).toBe("confirm");
  });
});

