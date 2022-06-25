export default function initClientsSlide() {

  const categoriesbg = document.querySelector('.clients-bg')
  const swiperButtonPrevCategories = document.querySelector('.swiper-button-prev-clients');
  const swiperButtonNextCategories = document.querySelector('.swiper-button-next-clients');

  categoriesbg.addEventListener('mouseover', () => {
    swiperButtonPrevCategories.classList.add('active');
    swiperButtonNextCategories.classList.add('active');

    categoriesbg.addEventListener('mouseout', () => {
      swiperButtonPrevCategories.classList.remove('active');
      swiperButtonNextCategories.classList.remove('active');
    })
  })

  var swiper = new Swiper(".mySwiper-clients", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
    delay: 50500,
    disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-clients",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-clients",
      prevEl: ".swiper-button-prev-clients",
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