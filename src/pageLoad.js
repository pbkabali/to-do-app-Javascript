import header from "./header";
import todoList from "./todos";

const container = document.getElementById("content");
const pageLoad = (projectName, project, projectIndex) => {
  const wrapper = document.createElement("div");
  wrapper.id = "wrapper";
  container.appendChild(header(projectName));
  wrapper.appendChild(todoList(project, projectIndex));
  container.appendChild(wrapper);
};

export default pageLoad;
