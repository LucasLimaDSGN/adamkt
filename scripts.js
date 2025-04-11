document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const dropMenu = document.querySelector('.drop-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.body;

  // Adiciona classe scrolled ao header após o segundo scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // Ajuste este valor conforme necessário
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (dropMenu && mobileNav) {
    dropMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
      body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Fechar o menu ao clicar em um link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        dropMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        body.style.overflow = '';
      });
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
      if (!mobileNav.contains(event.target) && !dropMenu.contains(event.target) && mobileNav.classList.contains('active')) {
        dropMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        body.style.overflow = '';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.querySelector('.back-to-top-button');
    
  // Rolagem suave
  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


const partnerSlides = document.querySelectorAll('.partner-slide');
const presentations = document.querySelectorAll('[class^="text-apresentation"]');
const partnerNames = [
  document.querySelector('.partner-name1'),
  document.querySelector('.partner-name2'),
  document.querySelector('.partner-name3'),
];

function updatePartner(index) {
  // Aplica fade e mostra o conteúdo certo
  partnerSlides.forEach((slide, i) => {
    slide.classList.toggle('faded', i !== index);
  });

  presentations.forEach((text, i) => {
    text.style.display = i === index ? 'block' : 'none';
  });

  partnerNames.forEach((name, i) => {
    name.style.display = i === index ? 'block' : 'none';
  });

  // Ajuste de z-index com ifs
  if (index === 0) {
    partnerSlides[0].style.zIndex = '3';
    partnerSlides[1].style.zIndex = '2';
    partnerSlides[2].style.zIndex = '1';
  } else if (index === 1) {
    partnerSlides[1].style.zIndex = '3';
    partnerSlides[2].style.zIndex = '2';
    partnerSlides[0].style.zIndex = '1';
  } else if (index === 2) {
    partnerSlides[2].style.zIndex = '3';
    partnerSlides[1].style.zIndex = '2';
    partnerSlides[0].style.zIndex = '1';
  }
}

updatePartner(0);


partnerSlides.forEach((slide, index) => {
  slide.addEventListener('click', () => updatePartner(index));
});

// Slider de parceiros

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 500) return; 

  const slides = [
    {
      name: "ADA PARKER",
      text: document.querySelector(".text-apresentation1"),
      imgClass: "partner1"
    },
    {
      name: "LUCAS LIMA",
      text: document.querySelector(".text-apresentation2"),
      imgClass: "partner2"
    },
    {
      name: "KIMILY",
      text: document.querySelector(".text-apresentation3"),
      imgClass: "partner3"
    }
  ];

  let currentIndex = 0;
  const nameEls = [
    document.querySelector(".partner-name1"),
    document.querySelector(".partner-name2"),
    document.querySelector(".partner-name3"),
  ];
  const imgEls = [
    document.querySelector(".partner1"),
    document.querySelector(".partner2"),
    document.querySelector(".partner3"),
  ];

  function updateSlider(index) {

    slides.forEach((slide, i) => {
      slide.text.style.display = "none";
      nameEls[i].style.display = "none";
      imgEls[i].style.display = "none";
    });

    slides[index].text.style.display = "block";
    nameEls[index].style.display = "block";
    imgEls[index].style.display = "block";
  }


  updateSlider(currentIndex);

  document.querySelector(".slider-control.next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
  });

  document.querySelector(".slider-control.prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(currentIndex);
  });
});



