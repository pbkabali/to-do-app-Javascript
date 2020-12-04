import todoList from "./todos";
import deleteBtn from "./deleteBtn";
import projects, { openProject, saveToLocalStorage } from "./projects";
import { priorities } from "./todos";

const backToList = (project, projectIndex) => {
  const wrapper = document.getElementById("wrapper");
  wrapper.innerText = "";
  wrapper.appendChild(todoList(project, projectIndex));
};

const showToDo = (todo, project, index, projectIndex) => {
  const wrapper = document.getElementById("wrapper");
  const todoCard = document.createElement("div");
  todoCard.classList.add(
    "project-list",
    "m-3",
    "border",
    "rounded",
    "p-5",
    "text-center"
  );
  todoCard.innerHTML = `
      <p>Title: <span>${todo.title}</span></p>
      <p>Description: <span>${todo.description}</span></p>
      <p>Due-date: <span>${todo.dueDate}</span></p>
      <p>Priority: <span>${todo.priority}</span></p>
    `;
  const returnButton = document.createElement("button");
  returnButton.classList.add(
    "back-todo",
    "my-3",
    "btn",
    "btn-lg",
    "ml-3",
    "mr-1",
    "btn-success"
  );
  returnButton.innerText = "Return to to-do list";
  returnButton.onclick = () => backToList(project, projectIndex);
  wrapper.innerText = "";
  wrapper.appendChild(todoCard);

  wrapper.appendChild(returnButton);
  wrapper.appendChild(
    deleteBtn("to-do", () => deleteToDo(project, index, projectIndex))
  );
  const projectName = document.createElement("select");
  let optionDefault = document.createElement("option");
  optionDefault.innerText = "";
  projectName.appendChild(optionDefault);
  projects().forEach((project) => {
    let option = document.createElement("option");
    option.innerText = project.name;
    projectName.appendChild(option);
  });
  projectName.id = "move-id";
  projectName.classList.add("ml-5");
  projectName.placeholder = "Move to project";
  const submit = document.createElement("button");
  submit.classList.add("my-3", "btn", "btn-lg", "mx-1", "btn-success");
  submit.innerText = "Move to project";
  submit.onclick = () => moveToProject(todo, project, index);
  wrapper.append(projectName, submit);
  const priorityChange = document.createElement("select");
  const priorityDefault = document.createElement("option");
  priorityDefault.innerText = "";
  priorityChange.appendChild(priorityDefault);
  priorities.forEach((priority) => {
    let option = document.createElement("option");
    option.innerText = priority;
    priorityChange.appendChild(option);
  });
  priorityChange.id = "priority-id";
  priorityChange.classList.add("ml-5");
  const submitPriority = document.createElement("button");
  submitPriority.classList.add("btn", "btn-lg", "my-2", "mx-1", "btn-success");
  submitPriority.innerText = "Change priority";
  submitPriority.onclick = () =>
    changePriority(todo, project, index, projectIndex);
  wrapper.append(priorityChange, submitPriority);
};

const deleteToDoFromProject = (project, index, projectIndex) => {
  project.todos.splice(index, 1);
  const availableProjects = projects();
  availableProjects[projectIndex].todos.splice(index, 1);
  saveToLocalStorage(availableProjects);
};

const deleteToDo = (project, index, projectIndex) => {
  deleteToDoFromProject(project, index, projectIndex);
  backToList(project, projectIndex);
};

const moveToProject = (todo, currentProject, currentIndex) => {
  const targetProjectName = document.getElementById("move-id").value;
  if (targetProjectName) {
    const projectNames = projects.map((project) => project.name);
    const newProject = projects[projectNames.indexOf(targetProjectName)];
    newProject.todos.push(todo);
    openProject(newProject.name, newProject);
    deleteToDoFromProject(currentProject, currentIndex);
  }
};

const changePriority = (todo, project, index, projectIndex) => {
  const newPriority = document.getElementById("priority-id").value;
  if (newPriority) {
    todo.priority = newPriority;
    const availableProjects = projects();
    availableProjects[projectIndex].todos[index].priority = newPriority;
    saveToLocalStorage(availableProjects);
    showToDo(todo, project, index, projectIndex);
  }
};

export default showToDo;
