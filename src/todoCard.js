import todoList from "./todos";
import deleteBtn from './deleteBtn';
import { deleteToDo } from './todo';


const backToList = (items) => {
    const wrapper = document.getElementById("wrapper");
    wrapper.innerText = '';
    wrapper.appendChild(todoList(items));
}

const showToDo = (todo, items) => {
    const wrapper = document.getElementById("wrapper");
    const todoCard = document.createElement("div");
    todoCard.classList.add("m-3", "border", "rounded", "p-5", "text-center");
    todoCard.innerHTML = `
      <p>Title: <span>${todo.title}</span></p>
      <p>Description: <span>${todo.description}</span></p>
      <p>Due-date: <span>${todo.dueDate}</span></p>
      <p>Priority: <span>${todo.priority}</span></p>
    `;
    const returnButton = document.createElement("button");
    returnButton.classList.add(
     'back-todo',
      "my-3",
      "btn",
      "btn-lg",
      'ml-3',
      'mr-1',
      "btn-success"
    );
    returnButton.innerText = "Return to to-do list";
    returnButton.onclick = () => backToList(items);
     wrapper.innerText = "";
    wrapper.appendChild(todoCard);
    
    wrapper.appendChild(returnButton);
    wrapper.appendChild(deleteBtn('to-do', deleteToDo));
  };

  export default showToDo;