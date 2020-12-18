import deleteBtn from "./deleteBtn";

describe("delete todo button", () => {
  test("creates button", () => {
    const action = jest.fn();
    const name = "todo";
    const btn = deleteBtn(name, action);
    expect(btn.innerText).toBe(`Delete ${name}`);
  });
});
