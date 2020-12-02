const header = (heading) => {
  const element = document.createElement("div");
  element.classList.add(
    "text-center",
    "my-3",
    "font-weight-bold",
    "text-uppercase",
    "border-bottom",
    "pb-3"
  );
  element.innerText = heading;
  return element;
};

export default header;
