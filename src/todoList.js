const todoList = (items) => {
  const element = document.createElement("div");
  let content = "";
  items.forEach((todo) => {
    content += `
      <div>
        <p>${todo.title}</p>
        <span>${todo.dueDate}</span>
      </div>
    `;
  });
  element.innerHTML = content;
  return element;
};

export default todoList;
