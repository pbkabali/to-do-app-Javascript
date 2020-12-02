class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export const showToDo = (todo) => {
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

export default Todo;
