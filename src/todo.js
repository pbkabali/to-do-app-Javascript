class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export const deleteToDo = () => {
  console.log('delete to-do');
}
export default Todo;
