/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */

import todoList, { priorities } from "./todos";
import deleteBtn from "./deleteBtn";
import projects, { openProject, saveToLocalStorage } from "./projects";

const backToList = (project, projectIndex) => {
  const wrapper = document.getElementById("wrapper");
  wrapper.innerText = "";
  wrapper.appendChild(todoList(project, projectIndex));
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

const moveToProject = (todo, currentIndex, projectIndex) => {
  const targetProjectIndex =
    parseInt(document.getElementById("move-id").value[0], 10) - 1;
  if (targetProjectIndex >= 0) {
    const availableProjects = projects();
    const oldProject = availableProjects[projectIndex];
    const newProject = availableProjects[targetProjectIndex];
    newProject.todos.push(todo);
    openProject(newProject.name, newProject, targetProjectIndex);
    oldProject.todos.splice(currentIndex, 1);
    saveToLocalStorage(availableProjects);
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

const showToDo = (todo, project, index, projectIndex) => {
  const wrapper = document.getElementById("wrapper");
  const todoCard = document.createElement("div");
  todoCard.classList.add(
    "project-list",
    "card-style",
    "mx-3",
    "my-5",
    "text-center"
  );
  todoCard.innerHTML = `
      <p><span class="font-weight-bold">Title:</span> <span>${todo.title}</span></p>
      <p><span class="font-weight-bold">Description:</span> <span>${todo.description}</span></p>
      <p><span class="font-weight-bold">Due-date: </span><span>${todo.dueDate}</span></p>
      <p><span class="font-weight-bold">Priority:</span><span>${todo.priority}</span></p>
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
  let newProjectIndex = 1;
  projects().forEach((project) => {
    const option = document.createElement("option");
    option.innerText = `${newProjectIndex}. ${project.name}`;
    projectName.appendChild(option);
    newProjectIndex += 1;
  });
  projectName.id = "move-id";
  projectName.options.selectedIndex = projectIndex;
  projectName.classList.add("ml-5");
  projectName.placeholder = "Move to project";
  const submit = document.createElement("button");
  submit.classList.add("my-3", "btn", "btn-lg", "mx-1", "btn-success");
  submit.innerText = "Move to project";
  submit.onclick = () => moveToProject(todo, index, projectIndex);
  wrapper.append(projectName, submit);
  const priorityChange = document.createElement("select");
  priorities.forEach((priority) => {
    const option = document.createElement("option");
    option.innerText = priority;
    priorityChange.appendChild(option);
  });
  priorityChange.id = "priority-id";
  priorityChange.options.selectedIndex = priorities.indexOf(todo.priority);
  priorityChange.classList.add("ml-5");
  const submitPriority = document.createElement("button");
  submitPriority.classList.add("btn", "btn-lg", "my-2", "mx-1", "btn-success");
  submitPriority.innerText = "Change priority";
  submitPriority.onclick = () =>
    changePriority(todo, project, index, projectIndex);
  wrapper.append(priorityChange, submitPriority);
};

export default showToDo;

/* eslint-enable import/no-cycle */
/* eslint-enable no-use-before-define */
