import todoList from "./todos";

describe("To-do list", () => {
  test("shows to do list", () => {
    const projectIndex = 0;
    const project = {
      name: "Project1",
      todos: [],
    };
    const list = todoList(project, projectIndex);
    expect(list.firstChild.innerText).toBe("Create a To-Do");
  });
});
