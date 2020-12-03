import header from "./header";
import todoList from "./todos";


const container = document.getElementById("content");
const pageLoad = (projectName, todos) => {
    container.appendChild(header(projectName));
    container.appendChild(todoList(todos));
}

export default pageLoad;
