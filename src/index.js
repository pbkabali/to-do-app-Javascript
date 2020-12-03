import "bootstrap";
import "./scss/app.scss";
import "./css/styles.css";

import pageLoad from './pageLoad';
import projects from "./projects";

pageLoad(projects[0].name, projects[0].todos);
