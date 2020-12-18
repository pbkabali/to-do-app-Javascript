import header from './header';

describe('test header', () => {
  const heading = 'project list';
  const nav = header(heading);
  test('Adds the header CSS classes', () => {
    expect(nav.classList.contains('d-flex')).toBeTruthy();
  });
});
