import Todo from './todo';

describe('test Todo class', () => {
  test('assigns the instance variables', () => {
    const todo = new Todo('title', 'description', 'dueDate', 'priority');
    expect(todo.title).toBe('title');
  });
});
