/* eslint-disable import/no-cycle */

import header from './header';
import todoList from './todos';
import notice from './notice';

const pageLoad = (projectName, project, projectIndex) => {
  const container = document.getElementById('content');
  const wrapper = document.createElement('div');
  wrapper.id = 'wrapper';
  wrapper.appendChild(todoList(project, projectIndex));
  container.append(notice(), header(projectName), wrapper);
};

export default pageLoad;

/* eslint-enable import/no-cycle */
