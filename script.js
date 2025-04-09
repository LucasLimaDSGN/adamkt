// Slider de parceiros
const partnerSlider = document.querySelector('.partner-images');
const partners = document.querySelectorAll('.partner-slide');
const prevButton = document.querySelector('.slider-control.prev');
const nextButton = document.querySelector('.slider-control.next');

let currentSlide = 0;

function updateSlider() {
  partners.forEach((partner, index) => {
    if (index === currentSlide) {
      partner.classList.add('active');
    } else {
      partner.classList.remove('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + partners.length) % partners.length;
  updateSlider();
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % partners.length;
  updateSlider();
});

// Inicializa o slider com a primeira imagem visível
document.addEventListener('DOMContentLoaded', () => {
  updateSlider();
}); 