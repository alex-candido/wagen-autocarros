export default function initBrandsSlide() {

  const categoriesbg = document.querySelector('.brands-bg')
  const swiperButtonPrevCategories = document.querySelector('.swiper-button-prev-brands');
  const swiperButtonNextCategories = document.querySelector('.swiper-button-next-brands');

  categoriesbg.addEventListener('mouseover', () => {
    swiperButtonPrevCategories.classList.add('active');
    swiperButtonNextCategories.classList.add('active');

    categoriesbg.addEventListener('mouseout', () => {
      swiperButtonPrevCategories.classList.remove('active');
      swiperButtonNextCategories.classList.remove('active');
    })
  })

  var swiper = new Swiper(".mySwiper-brands", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 6,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
    delay: 6500,
    disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-brands",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-brands",
      prevEl: ".swiper-button-prev-brands",
    },
    breakpoints: {
    0: {
      slidesPerView: 1,
    },
    321: {
      slidesPerView: 2,
    },
    502: {
      slidesPerView: 3,
    },
    683: {
      slidesPerView: 4,
    },
    864: {
      slidesPerView: 5,
    },
    1046: {
      slidesPerView: 6,
    },
    },
  });
}