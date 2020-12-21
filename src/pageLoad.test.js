import pageLoad from './pageLoad';

describe('Start page', () => {
  test('it loads content', () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'content';
    document.body.appendChild(wrapper);
    const projectName = 'Project1';
    const project = {
      name: 'Project1',
      todos: [],
    };
    const projectIndex = 1;
    pageLoad(projectName, project, projectIndex);
    expect(wrapper.firstChild.id).toBe('notice');
  });
});
