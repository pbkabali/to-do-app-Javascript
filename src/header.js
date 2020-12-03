import { seeProjects, showProjectForm } from "./projects";

const header = (heading) => {
  const element = document.createElement("div");
  element.classList.add(
    "d-flex",
    "flex-row-reverse",
    "justify-content-between",
    "border-bottom",
    "align-items-center",
    "px-3"
  );
  const element1 = document.createElement("div");

  element1.classList.add(
    "text-center",
    "my-3",
    "font-weight-bold",
    "text-uppercase",
    "h3"
  );
  element1.innerText = heading;

  const element2 = document.createElement("div");

  const element3 = document.createElement("div");
  element3.classList.add(
    "text-center",
    "my-3",
    "btn",
    "btn-lg",
    "btn-primary",
    "mr-1"
  );
  element3.innerText = "See all projects";
  element3.onclick = () => seeProjects();

  const element4 = document.createElement("div");
  element4.classList.add(
    "text-center",
    "my-3",
    "btn",
    "btn-lg",
    "btn-outline-primary",
    "mr-1"
  );
  element4.innerText = "Create a Project";
  element4.onclick = () => showProjectForm();

  element2.appendChild(element3);
  element2.appendChild(element4);
  element.appendChild(element1);
  element.appendChild(element2);
  return element;
};

export default header;
