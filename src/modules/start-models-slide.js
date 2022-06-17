export default function initModelsSlide() {

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

  

  //stat categories-slide

  var swiper = new Swiper(".mySwiper-categories", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination-categories",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}