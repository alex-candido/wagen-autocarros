export default function initModelsSlide() {

  const categoriesbg = document.querySelector('.models-bg')
  const swiperButtonPrevCategories = document.querySelector('.swiper-button-prev-models');
  const swiperButtonNextCategories = document.querySelector('.swiper-button-next-models');

  categoriesbg.addEventListener('mouseover', () => {
    swiperButtonPrevCategories.classList.add('active');
    swiperButtonNextCategories.classList.add('active');

    categoriesbg.addEventListener('mouseout', () => {
      swiperButtonPrevCategories.classList.remove('active');
      swiperButtonNextCategories.classList.remove('active');
    })
  })

  var swiper = new Swiper(".mySwiper-models", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
    delay: 6500,
    disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-models",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-models",
      prevEl: ".swiper-button-prev-models",
    },
    breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    },
  });
}