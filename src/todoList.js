const todoList = (items) => {
  // const element = document.createElement("div");
  // let content = "";
  // items.forEach((todo) => {
  //   content += `
  //     <div class="border border-primary my-2 mx-5 p-3 rounded">
  //       <p>${todo.title}</p>
  //       <span>${todo.dueDate}</span>
  //     </div>
  //   `;
  // });

  const element = document.createElement("table");
  element.classList.add("table", "table-hover", "todos-table");
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
    content += `
      <tr>
        <th scope="row">${index}</th>
        <td>${todo.title}</td>
        <td>${todo.dueDate}</td>
        <td>${todo.priority}</td>
      </tr>
    `;
    index += 1;
  });
  tableBody.innerHTML = content;
  element.appendChild(tableHead);
  element.appendChild(tableBody);
  return element;
};

export default todoList;
