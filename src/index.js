import 'bootstrap';
import './scss/app.scss';
import './css/styles.css';

import pageLoad from './pageLoad';
import projects, { saveToLocalStorage, initialProjects } from './projects';

if (projects()) {
  pageLoad(projects()[0].name, projects()[0], 0);
} else {
  saveToLocalStorage(initialProjects);
  pageLoad(projects()[0].name, projects()[0], 0);
}
