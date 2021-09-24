let accordion = document.querySelector('.accordion');
let accordionBtn = accordion.querySelectorAll('.accordion__btn');
let accordionInfo = accordion.querySelectorAll('.accordion__info');

accordionBtn.forEach(accordionBtn =>
  accordionBtn.addEventListener('click', toggleAccordion)
);

function toggleAccordion() {
  thisItem = this.nextElementSibling;
  accordionInfo.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('open');
      return;
    }
    item.classList.remove('open');
  });
}
