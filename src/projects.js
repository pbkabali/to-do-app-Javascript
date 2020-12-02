import Project from "./project";
import header from "./header";


const defaultProject = new Project("Main project");
const projects = [defaultProject];

export const seeProjects = () => {
  const wrapper = document.getElementById('content');
  wrapper.innerText = '';
  wrapper.appendChild(header('Project List'));
  
  const element = document.createElement("div");
  let content = "";
  projects.forEach((project) => {
    content += `
          <h1>
            ${project.name}
          </h1>
        `;
  });
  element.innerHTML = content;
  wrapper.appendChild(element);
};

export default projects;
