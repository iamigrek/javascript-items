const modalBtns = document.querySelectorAll('[data-modal-button]');
const modalCloseBtn = document.querySelectorAll('[data-modal-close]');
const modal = document.querySelectorAll('[data-modal]');

modalBtns.forEach(function (item) {
  item.addEventListener('click', function () {
    const modalId = document.querySelector(`#${this.dataset.modalButton}`);
    modalId.classList.remove('hidden');

    modal.forEach(function (item) {
      item.addEventListener('click', function () {
        modalId.classList.add('hidden');
      });
    });

    modalId
      .querySelector('.modal__window')
      .addEventListener('click', function (e) {
        e.stopPropagation();
      });

    modalCloseBtn.forEach(function (item) {
      item.addEventListener('click', function () {
        modalId.classList.add('hidden');
      });
    });
  });
});
