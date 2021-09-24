const modalBtn = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalWindow = modal.querySelector('.modal__window');

modalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

modalCloseBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modalWindow.addEventListener('click', e => {
  e.stopPropagation();
});
