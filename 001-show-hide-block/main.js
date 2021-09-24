const button = document.querySelector('.btn');
const block = document.querySelector('.text');

button.addEventListener('click', function () {
  block.classList.toggle('text--hidden')
    ? (button.textContent = 'Show')
    : (button.textContent = 'Hide');
});
