export default function initBuySlide() {

  const categoriesbg = document.querySelector('.buy-bg')
  const swiperButtonPrevCategories = document.querySelector('.swiper-button-prev-buy');
  const swiperButtonNextCategories = document.querySelector('.swiper-button-next-buy');

  categoriesbg.addEventListener('mouseover', () => {
    swiperButtonPrevCategories.classList.add('active');
    swiperButtonNextCategories.classList.add('active');

    categoriesbg.addEventListener('mouseout', () => {
      swiperButtonPrevCategories.classList.remove('active');
      swiperButtonNextCategories.classList.remove('active');
    })
  })

  var swiper = new Swiper(".mySwiper-buy", {
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
      el: ".swiper-pagination-buy",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-buy",
      prevEl: ".swiper-button-prev-buy",
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