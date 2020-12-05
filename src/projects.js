import Project from "./project";
import header from "./header";
import Todo from "./todo";
import pageLoad from "./pageLoad";

const defaultProject = new Project("Main project");
export const initialProjects = [defaultProject];

export const saveToLocalStorage = (data) => {
  localStorage.setItem("projects", JSON.stringify(data));
};

const projects = () => {
  return JSON.parse(localStorage.getItem("projects"));
};

export const openProject = (projectName, project, projectIndex) => {
  const wrapper = document.getElementById("content");
  wrapper.innerText = "";
  pageLoad(projectName, project, projectIndex);
};

export const seeProjects = () => {
  const wrapper = document.getElementById("content");
  wrapper.innerText = "";
  wrapper.appendChild(header("Project List"));

  const element = document.createElement("div");
  element.id = "wrapper";
  let index = 0;
  projects().forEach((project) => {
    const item = document.createElement("h1");
    item.classList.add(
      "project-list",
      "text-center",
      "text-success",
      "m-5",
      "p-5",
      "border",
      "border-success",
      "rounded"
    );
    item.innerText = project.name;
    let projectIndex = index;
    item.onclick = () => openProject(project.name, project, projectIndex);
    element.appendChild(item);
    index += 1;
  });
  wrapper.appendChild(element);
};

const createProject = () => {
  const projectName = document.getElementById("project-name").value;
  const newProject = new Project(projectName);
  const availableProjects = projects();
  availableProjects.push(newProject);
  saveToLocalStorage(availableProjects);
  seeProjects();
};

export const showProjectForm = () => {
  const wrapper = document.getElementById("wrapper");
  const projectForm = document.createElement("div");
  projectForm.classList.add("text-center", "font-weight-bold");
  const projectName = document.createElement("input");
  projectName.id = "project-name";
  projectName.classList.add("my-3");
  projectName.placeholder = "Enter project name";
  const submit = document.createElement("button");
  submit.classList.add("btn", "btn-lg", "btn-success", "ml-1", "my-1");
  submit.innerText = "Add Project";
  submit.onclick = () => createProject();
  projectForm.appendChild(projectName);
  projectForm.appendChild(submit);
  wrapper.innerText = "";
  wrapper.appendChild(projectForm);
};

export default projects;
