/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */

import Todo from './todo';
import showToDo from './todoCard';
import projects, { saveToLocalStorage } from './projects';

export const priorities = ['High', 'Medium', 'Low'];

const createToDo = (project, projectIndex) => {
  const title = document.getElementById('todo-title').value;
  const description = document.getElementById('todo-description').value;
  const dueDate = document.getElementById('todo-dueDate').value;
  const priority = document.getElementById('todo-priority').value;
  const newToDo = new Todo(title, description, dueDate, priority);
  project.todos.push(newToDo);
  const availableProjects = projects();
  availableProjects[projectIndex].todos.push(newToDo);
  saveToLocalStorage(availableProjects);
  const wrapper = document.getElementById('wrapper');
  wrapper.innerText = '';
  wrapper.appendChild(todoList(project, projectIndex));
};

const showToDoForm = (project, projectIndex) => {
  const wrapper = document.getElementById('wrapper');
  const toDoForm = document.createElement('div');
  toDoForm.classList.add(
    'todos-table',
    'center-div',
    'd-flex',
    'flex-column',
    'text-center',
    'font-weight-bold',
  );

  const title = document.createElement('input');
  title.id = 'todo-title';
  title.classList.add('my-3', 'mx-1', 'p-2', 'text-muted');
  title.placeholder = 'Enter to-do title';

  const description = document.createElement('input');
  description.id = 'todo-description';
  description.classList.add('my-3', 'mx-1', 'p-2');
  description.placeholder = 'Enter to-do description';

  const dueDate = document.createElement('input');
  dueDate.id = 'todo-dueDate';
  dueDate.type = 'date';
  dueDate.classList.add('my-3', 'mx-1', 'p-2', 'text-muted');
  dueDate.placeholder = 'Enter to-do dueDate';

  const priority = document.createElement('select');
  priorities.forEach((choice) => {
    const option = document.createElement('option');
    option.innerText = choice;
    priority.appendChild(option);
  });
  priority.id = 'todo-priority';
  priority.classList.add('my-3', 'mx-1', 'p-2');
  priority.placeholder = 'Choose priority';

  const submit = document.createElement('button');
  submit.classList.add('btn', 'btn-lg', 'btn-success', 'm-2');
  submit.innerText = 'Add To-Do';
  submit.onclick = () => createToDo(project, projectIndex);
  toDoForm.append(title, description, dueDate, priority, submit);

  wrapper.innerText = '';
  wrapper.appendChild(toDoForm);
};

const todoList = (project, projectIndex) => {
  const tableWrapper = document.createElement('div');
  const addToDoBtn = document.createElement('div');
  addToDoBtn.classList.add(
    'text-center',
    'my-3',
    'btn',
    'btn-lg',
    'btn-outline-success',
    'ml-3',
  );
  addToDoBtn.innerText = 'Create a To-Do';
  addToDoBtn.onclick = () => showToDoForm(project, projectIndex);
  tableWrapper.appendChild(addToDoBtn);
  if (project.todos.length > 0) {
    const element = document.createElement('table');
    element.classList.add(
      'table',
      'table-hover',
      'todos-table',
      'border-table',
      'border',
      'border-danger',
      'center-div',
      'mt-2',
    );
    const tableHead = document.createElement('thead');
    tableHead.innerHTML = `
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Due Date</th>
      <th scope="col">Priority</th>
    </tr>
  `;
    const tableBody = document.createElement('tbody');
    const priorityClass = {
      high: 'high-priority',
      medium: 'medium-priority',
      low: 'low-priority',
    };
    let index = 1;
    project.todos.forEach((todo) => {
      const row = document.createElement('tr');
      row.classList.add(priorityClass[todo.priority.toLowerCase()]);
      const arrIndex = index - 1;
      row.onclick = () => showToDo(todo, project, arrIndex, projectIndex);
      row.innerHTML = `
    <th scope="row">${index}</th>
        <td>${todo.title}</td>
        <td>${todo.dueDate}</td>
        <td>${todo.priority}</td>
    `;
      tableBody.appendChild(row);
      index += 1;
    });
    element.append(tableHead, tableBody);
    tableWrapper.appendChild(element);
  } else {
    const message = document.createElement('p');
    message.classList.add('text-center', 'text-primary', 'mt-5');
    message.innerText = 'There are no to-dos in this project yet. Click the button to add a new to-do';
    tableWrapper.appendChild(message);
  }
  return tableWrapper;
};

export default todoList;

/* eslint-enable import/no-cycle  */
/* eslint-enable no-use-before-define */
