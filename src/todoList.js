import { showToDo } from "./todo";

const todoList = (items) => {
  const tableWrapper = document.createElement("div");
  tableWrapper.id = "table-wrapper";
  const element = document.createElement("table");
  element.classList.add("table", "todos-table");
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
  let content = ``;
  let index = 1;
  items.forEach((todo) => {
    let row = document.createElement("tr");
    row.onclick = () => showToDo(todo);
    row.innerHTML = `
    <th scope="row">${index}</th>
        <td>${todo.title}</td>
        <td>${todo.dueDate}</td>
        <td>${todo.priority}</td>
    `;
    tableBody.appendChild(row);
    index += 1;
  });
  element.appendChild(tableHead);
  element.appendChild(tableBody);
  tableWrapper.appendChild(element);
  return tableWrapper;
};

export default todoList;
