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

  

  //stat categories-slide

  var swiper = new Swiper(".mySwiper-buy", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination-buy",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-buy",
      prevEl: ".swiper-button-prev-buy",
    },
  });
}