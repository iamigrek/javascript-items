let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.accordion__item');
let btns = accordion.querySelectorAll('.accordion__btn');

btns.forEach(item =>
  item.addEventListener('click', function () {
    thisItem = this.parentNode;
    items.forEach(item => {
      if (thisItem == item) {
        thisItem.classList.toggle('open');
        return;
      }
      item.classList.remove('open');
    });
  })
);
