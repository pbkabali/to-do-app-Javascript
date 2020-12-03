import Todo from "./todo";
import showToDo from "./todoCard";

const createToDo = (project) => {
  const title = document.getElementById("todo-title").value;
  const description = document.getElementById("todo-description").value;
  const dueDate = document.getElementById("todo-dueDate").value;
  const priority = document.getElementById("todo-priority").value;
  const newToDo= new Todo(title, description, dueDate, priority);
  project.todos.push(newToDo);
  const wrapper = document.getElementById('wrapper');
  wrapper.innerText = '';
  wrapper.appendChild(todoList(project));
  }

  const showToDoForm = (project) => {
  const wrapper = document.getElementById("wrapper");
  const toDoForm = document.createElement("div");
  toDoForm.classList.add("text-center", "font-weight-bold");

  const title = document.createElement("input");
  title.id = "todo-title";
  title.classList.add("m-3", "p-2");
  title.placeholder = "Enter to-do title";

  const description = document.createElement("input");
  description.id = "todo-description";
  description.classList.add("m-3", "p-2");
  description.placeholder = "Enter to-do description";

  const dueDate = document.createElement("input");
  dueDate.id = "todo-dueDate";
  dueDate.classList.add("m-3", "p-2");
  dueDate.placeholder = "Enter to-do dueDate";

  const priority = document.createElement("input");
  priority.id = "todo-priority";
  priority.classList.add("m-3", "p-2");
  priority.placeholder = "Choose priority";

  const submit = document.createElement("button");
  submit.classList.add("btn", "btn-sm", "btn-success");
  submit.innerText = "Add to-do";
  submit.onclick = () => createToDo(project);
  toDoForm.append(title, description, dueDate, priority, submit);
  
  wrapper.innerText = "";
  wrapper.appendChild(toDoForm);
};

const todoList = (project) => {
  const tableWrapper = document.createElement("div");
  const addToDoBtn = document.createElement('div');
  addToDoBtn.classList.add(
    "text-center",
    "my-3",
    "btn",
    "btn-lg",
    "btn-outline-success",
    "ml-3"
  );
  addToDoBtn.innerText = "Create a to-do";
  addToDoBtn.onclick = () => showToDoForm(project);
  // addToDoBtn.onclick = () => console.log('Create a to-do');
  const element = document.createElement("table");
  element.classList.add(
    "table",
    "table-hover",
    "todos-table",
    "border-table",
    "border",
    "border-danger",
    "center-div",
    "mt-2"
  );
  const tableHead = document.createElement("thead");
  tableHead.innerHTML = `
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Due Date</th>
      <th scope="col">Priority</th>
    </tr>
  `;
  let tableBody = document.createElement("tbody");
  let index = 1;
  project.todos.forEach((todo) => {
    let row = document.createElement("tr");
    row.onclick = () => showToDo(todo, project);
    row.innerHTML = `
    <th scope="row">${index}</th>
        <td>${todo.title}</td>
        <td>${todo.dueDate}</td>
        <td>${todo.priority}</td>
    `;
    tableBody.appendChild(row);
    index += 1;
  });
  element.append(tableHead, tableBody);
  // element.appendChild(tableBody);
  tableWrapper.appendChild(addToDoBtn);
  tableWrapper.appendChild(element);
  return tableWrapper;
};

export default todoList;
