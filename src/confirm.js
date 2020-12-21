export const hideConfirmView = () => {
  const confirm = document.getElementById('notification-div');
  confirm.innerText = '';
};

const confirm = (msg, action) => {
  const modal = document.createElement('div');
  modal.id = 'confirm';
  modal.classList.add('notice', 'text-center', 'rounded');
  const message = document.createElement('p');
  message.id = 'confirm-msg';
  message.innerText = msg;
  const confirmBtn = document.createElement('div');
  confirmBtn.classList.add(
    'text-center',
    'my-3',
    'btn',
    'btn-lg',
    'btn-outline-success',
    'mr-1',
  );
  confirmBtn.innerText = 'Confirm';
  confirmBtn.onclick = () => action();

  const closeBtn = document.createElement('div');
  closeBtn.classList.add(
    'text-center',
    'my-3',
    'btn',
    'btn-lg',
    'btn-outline-warning',
    'mr-1',
  );
  closeBtn.innerText = 'Close';
  closeBtn.onclick = () => hideConfirmView();
  modal.append(message, confirmBtn, closeBtn);
  return modal;
};

export default confirm;
