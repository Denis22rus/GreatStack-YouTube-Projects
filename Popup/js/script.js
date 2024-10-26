const btnOpen = document.querySelector('.btn-openModal');
const btnClose = document.querySelector('.btn-closeModal')

let popup = document.querySelector('#popup');

btnOpen.addEventListener('click', () => {
  popup.classList.add('open-popup');
});

btnClose.addEventListener('click', () => {
  popup.classList.remove('open-popup');
})

document.addEventListener('click', (event) => {
            // open popup                      -click outside popup true    - The click was not performed on the button that opens the popup.
  if (popup.classList.contains('open-popup') && !popup.contains(event.target) && !btnOpen.contains(event.target)) {
    popup.classList.remove('open-popup');
  }
});