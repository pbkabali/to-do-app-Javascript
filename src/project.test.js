import Project from "./project";

describe("test Project class", () => {
  const project = new Project("name");
  const todo = {
    title: "Title",
    description: "Make something",
    dueDate: "2020-12-22",
    priority: "high",
  };
  project.todos.push(todo);

  test("assigns the instance variables", () => {
    expect(project.name).toBe("name");
  });

  test("holds array of todos", () => {
    expect(project.todos.length).toBe(1);
  });
});
