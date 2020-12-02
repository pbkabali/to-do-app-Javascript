import "bootstrap";
import "./scss/app.scss";

import Todo from "./todo";
import Project from "./project";
import header from "./header";
import todoList from "./todoList";

const container = document.getElementById("content");
const defaultProject = new Project("Main project");
const projects = [defaultProject];
const todo1 = new Todo(
  "Plan of project",
  "Brainstorm and design",
  "02/12/20",
  "high"
);
const todo2 = new Todo(
  "Setup the project",
  "Brainstorm and setup",
  "02/12/20",
  "high"
);
defaultProject.todos.push(todo1, todo2);

container.appendChild(header(projects[0].name));
container.appendChild(todoList(projects[0].todos));
