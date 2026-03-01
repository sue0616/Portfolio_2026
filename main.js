'use strict';

{// Base

  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const overlay = document.querySelector('.overlay');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
      loader.classList.add("hide");
    }, 2200);
  });


  // Process
  const swiper = new Swiper('.swiper', {
    grabCursor: true,
    navigation: {
      prevEl: '.my-button-prev',
      nextEl: '.my-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    watchSlidesProgress: true,
    spaceBetween: 16,
    keyboard: { enabled: true },
    a11y: { enabled: true },
    slidesPerView: 1,
    centeredSlides: true,
    speed: 800,
    loop: true,
    loopAdditionalSlides: 1,
    touchReleaseOnEdges: true,
  });


  //Animation

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.concept_container, .skill_card, .news_container, .work, .contact-wrapper, #process').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
  });
}