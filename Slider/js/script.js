let scrollContainer = document.querySelector('.wrapper__gallery');
let nextBtn = document.getElementById('nextBtn');
let backBtn = document.getElementById('backBtn');

scrollContainer.addEventListener('wheel', (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior = 'auto';
})

nextBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += 900;
})

backBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= 900;
});

