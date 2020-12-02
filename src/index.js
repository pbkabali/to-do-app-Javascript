import "bootstrap";
import "./scss/app.scss";
import "./css/styles.css";

import Todo from "./todo";
import projects from "./projects";
import header from "./header";
import todoList from "./todoList";

const container = document.getElementById("content");

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

const todo3 = new Todo(
  "Finish the project",
  "Brainstorm and finish",
  "03/12/20",
  "high"
);
projects[0].todos.push(todo1, todo2, todo3);

container.appendChild(header(projects[0].name));
container.appendChild(todoList(projects[0].todos));
