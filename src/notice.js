export const toggleNoticeView = () => {
  const notice = document.getElementById('notice');
  notice.classList.toggle('d-none');
};

const notice = () => {
  const modal = document.createElement('div');
  modal.id = 'notice';
  modal.classList.add('notice', 'text-center', 'rounded', 'd-none');
  const message = document.createElement('p');
  message.id = 'notice-msg';
  const closeBtn = document.createElement('div');
  closeBtn.classList.add(
    'text-center',
    'my-3',
    'btn',
    'btn-lg',
    'btn-outline-primary',
    'mr-1',
  );
  closeBtn.innerText = 'Close';
  closeBtn.onclick = () => toggleNoticeView();
  modal.append(message, closeBtn);
  return modal;
};

export const openNotice = (msg) => {
  toggleNoticeView();
  const msgArea = document.getElementById('notice-msg');
  msgArea.innerText = msg;
};

export default notice;
