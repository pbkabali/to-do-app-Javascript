import Todo from './todo'
import Project from './project'

const container = document.getElementById("content");
const todo1 = new Todo('Plan of project', 'Brainstorm and design', '02/12/20', 'high');
const defaultProject = new Project('Main project');
defaultProject.todos.push(todo1);

container.innerHTML = defaultProject.name;


