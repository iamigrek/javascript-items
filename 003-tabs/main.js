const tabBtn = document.querySelectorAll('[data-tab]');
const tabInfo = document.querySelectorAll('[data-tab-content]');

tabBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    tabInfo.forEach(function (item) {
      item.classList.add('hidden');
    });
    const tabItem = document.querySelector('#' + this.dataset.tab);
    tabItem.classList.remove('hidden');
  });
});
