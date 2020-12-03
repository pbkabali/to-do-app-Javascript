import header from "./header";

  const showToDo = (todo) => {
  const wrapper = document.getElementById("table-wrapper");
  const todoCard = document.createElement("div");
  todoCard.classList.add("m-3", "border", "rounded", "p-5", "text-center");
  todoCard.innerHTML = `
    <p>Title: <span>${todo.title}</span></p>
    <p>Description: <span>${todo.description}</span></p>
    <p>Due-date: <span>${todo.dueDate}</span></p>
    <p>Priority: <span>${todo.priority}</span></p>
  `;
  const returnButton = document.createElement("div");
  returnButton.classList.add(
    "text-center",
    "my-3",
    "btn",
    "btn-large",
    "btn-warning"
  );
  returnButton.innerText = "Return to to do list";
  wrapper.innerText = "";
  wrapper.appendChild(todoCard);
  wrapper.appendChild(returnButton);
};

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
