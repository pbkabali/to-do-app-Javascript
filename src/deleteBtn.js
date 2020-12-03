const deleteBtn = (name, deleteFunction) => {
    const element = document.createElement('button');
    element.classList.add(
      "btn",
      "btn-lg",
      "btn-outline-danger",
      "px-3"
    );
    element.innerText = `Delete ${name}`;
    element.onclick = () => deleteFunction();
    return element;
};
export default deleteBtn;
