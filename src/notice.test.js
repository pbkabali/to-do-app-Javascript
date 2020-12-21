import notice, { openNotice, toggleNoticeView } from './notice';

describe('test notice modal function', () => {
  const noticeModal = notice();
  test('creates the notice modal', () => {
    expect(noticeModal.id).toBe('notice');
  });

  test('Adds the notice modal CSS classes', () => {
    expect(noticeModal.classList.contains('notice')).toBeTruthy();
  });
});

describe('test open notice function', () => {
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
  });
  test('inserts notice message', () => {
    const noticeModal = notice();
    document.body.appendChild(noticeModal);
    const msg = 'todo deleted successfully';
    openNotice(msg);
    const msgArea = document.getElementById('notice-msg');
    expect(msgArea.innerText).toBe(msg);
  });
});

describe('test toggle notice function', () => {
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
  });
  test('unhides hidden notice modal', () => {
    const noticeModal = notice();
    document.body.appendChild(noticeModal);
    toggleNoticeView();
    expect(noticeModal.classList.contains('d-none')).toBeFalsy();
  });
});
