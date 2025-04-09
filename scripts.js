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
