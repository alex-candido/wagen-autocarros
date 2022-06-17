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

  

  //stat categories-slide

  var swiper = new Swiper(".mySwiper-models", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination-models",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-models",
      prevEl: ".swiper-button-prev-models",
    },
  });
}