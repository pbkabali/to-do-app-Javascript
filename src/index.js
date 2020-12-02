import "bootstrap";
import "./scss/app.scss";

import Todo from "./todo";
import Project from "./project";
import header from "./header";

const container = document.getElementById("content");
const defaultProject = new Project("Main project");
const projects = [defaultProject];
const todo1 = new Todo(
  "Plan of project",
  "Brainstorm and design",
  "02/12/20",
  "high"
);
defaultProject.todos.push(todo1);

container.appendChild(header(projects[0].name));
