import { seeProjects } from "./projects";

const header = (heading) => {
  const element = document.createElement("div");
  element.classList.add(
    "d-flex",
    "flex-row-reverse",
    "justify-content-between",
    "border-bottom",
    "align-items-center",
    'px-3'
  );
  const element1 = document.createElement("div");

  element1.classList.add(
    "text-center",
    "my-3",
    "font-weight-bold",
    "text-uppercase"
  );
  element1.innerText = heading;

  const element2 = document.createElement("div");
  element2.classList.add(
    "text-center",
    "my-3",
    "btn",
    "btn-lg",
    "btn-primary"
  );
  element2.innerText = "See all projects";
  element2.onclick = () => seeProjects();
  element.appendChild(element1);
  element.appendChild(element2);
  return element;
};

export default header;
