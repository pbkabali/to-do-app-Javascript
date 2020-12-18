import notice from './notice';

describe("test notice modal function", () => {
    const noticeModal = notice();
    test("creates the notice modal", () => {
      expect(noticeModal.id).toBe("notice");
    });
  
    test("Adds the notice modal CSS classes", () => {
      expect(noticeModal.classList.contains("notice")).toBeTruthy();
    });
  });

// describe("test close confirmation function", () => {
//   test("clears the confirm window", () => {
//     const confirmWindow = document.createElement("div");
//     confirmWindow.id = "notification-div";
//     document.body.appendChild(confirmWindow);
//     confirmWindow.innerText = "CONFIRM TEXT";
//     hideConfirmView();
//     expect(confirmWindow.outerHTML).toBe('<div id="notification-div"></div>');
//     expect(confirmWindow.id).toBe("notification-div");
//     expect(confirmWindow.innerText).toBe("");
//   });
// });


