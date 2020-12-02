import Todo from './todo'
const container = document.getElementById("content");
const todo1 = new Todo('Plan of project', 'Brainstorm and design', '02/12/20', 'high');
container.innerHTML = todo1.description;
