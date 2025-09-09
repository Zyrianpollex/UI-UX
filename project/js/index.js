let defaultTransform = 0;
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const searchInput = document.getElementById('search');
const carouselItem1 = document.getElementById('carousel-item-1');
const slider = document.getElementById('slider');

const goNext = () => {
  defaultTransform -= 398;
  if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
  slider.style.transform = `translateX(${defaultTransform}px)`;
};

nextBtn.addEventListener('click', goNext);

const goPrev = () => {
  if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
  else defaultTransform += 398;
  slider.style.transform = `translateX(${defaultTransform}px)`;
};

prevBtn.addEventListener('click', goPrev);

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') window.location.href = '/pages/search.html';
});

carouselItem1.addEventListener('click', () => {
  window.location.href = '/pages/search.html';
});
