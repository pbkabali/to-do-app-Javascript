import Project from "./project";
import header from "./header";
import Todo from "./todo";
import pageLoad from "./pageLoad";

const defaultProject = new Project("Main project");
export const projects = [defaultProject];

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

export const openProject = (projectName, project) => {
  const wrapper = document.getElementById("content");
  wrapper.innerText = "";
  pageLoad(projectName, project);
};

export const seeProjects = () => {
  const wrapper = document.getElementById("content");
  wrapper.innerText = "";
  wrapper.appendChild(header("Project List"));

  const element = document.createElement("div");
  element.id = "wrapper";
  projects.forEach((project) => {
    const item = document.createElement("h1");
    item.innerText = project.name;
    item.onclick = () => openProject(project.name, project);
    element.appendChild(item);
  });
  wrapper.appendChild(element);
};

const createProject = () => {
  const projectName = document.getElementById("project-name").value;
  const newProject = new Project(projectName);
  projects.push(newProject);
  seeProjects();
};

export const showProjectForm = () => {
  const wrapper = document.getElementById("wrapper");
  const projectForm = document.createElement("div");
  projectForm.classList.add("text-center", "font-weight-bold");
  const projectName = document.createElement("input");
  projectName.id = "project-name";
  projectName.classList.add("m-3", "p-2");
  projectName.placeholder = "Enter project name";
  const submit = document.createElement("button");
  submit.classList.add("btn", "btn-sm", "btn-success");
  submit.innerText = "Add Project";
  submit.onclick = () => createProject();
  projectForm.appendChild(projectName);
  projectForm.appendChild(submit);
  wrapper.innerText = "";
  wrapper.appendChild(projectForm);
};

export default projects;
