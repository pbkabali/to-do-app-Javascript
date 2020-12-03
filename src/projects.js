import Project from "./project";
import header from "./header";
import Todo from "./todo";

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

// const todo3 = new Todo(
//   "Finish the project",
//   "Brainstorm and finish",
//   "03/12/20",
//   "high"
// );
projects[0].todos.push(todo1, todo2);

export const seeProjects = () => {
  const wrapper = document.getElementById("content");
  wrapper.innerText = "";
  wrapper.appendChild(header("Project List"));

  const element = document.createElement("div");
  let content = "";
  projects.forEach((project) => {
    content += `
          <h1>
            ${project.name}
          </h1>
        `;
  });
  element.innerHTML = content;
  wrapper.appendChild(element);
};

export default projects;
