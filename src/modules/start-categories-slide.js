export default function initCategoriesSlide() {

  const categoriesbg = document.querySelector('.categories-bg')
  const swiperButtonPrevCategories = document.querySelector('.swiper-button-prev-categories');
  const swiperButtonNextCategories = document.querySelector('.swiper-button-next-categories');

  categoriesbg.addEventListener('mouseover', () => {
    swiperButtonPrevCategories.classList.add('active');
    swiperButtonNextCategories.classList.add('active');

    categoriesbg.addEventListener('mouseout', () => {
      swiperButtonPrevCategories.classList.remove('active');
      swiperButtonNextCategories.classList.remove('active');
    })
  })

  var swiper = new Swiper(".mySwiper-categories", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
    delay: 6500,
    disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-categories",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-categories",
      prevEl: ".swiper-button-prev-categories",
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