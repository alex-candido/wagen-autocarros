import initHeaderShort from './modules/start-header-short.js';
import initHomeSlide from './modules/start-home-slide.js';
import initAnimationSearch from './modules/start-animation-search.js';
import initBorderBottom from './modules/start-border-bottom.js';
import initNumbers from './modules/start-numbers.js';

initHeaderShort();
initHomeSlide();
initAnimationSearch();
initBorderBottom();
initNumbers();

// start user city location 

navigator.geolocation.getCurrentPosition(function(posicao) {
    var url = "http://nominatim.openstreetmap.org/reverse?lat="+posicao.coords.latitude+"&lon="+posicao.coords.longitude+"&format=json&json_callback=preencherDados";

    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
});

// start home slide 

function preencherDados(dados) {
  const city = document.querySelector('.city a')
  city.innerText = dados.address.city;
  city.style.color = '#D90008'
}

// animated numbers

function animatedNumbers() {
  const numbers = document.querySelectorAll('[data-numero]');

  numbers.forEach((numero) => {
    const total = +numero.innerText;
    const inscription = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start = start + inscription;
      numero.innerText = start;

      if(start > total) {
        numero.innerText = total + '+';
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
}
  
function handleMutation(mutation) {
   if(mutation[0].target.classList.contains('active')) {
    observer.disconnect();
    animatedNumbers();
   }
  }
  
  const observerTarget = document.querySelector('.numbers');
  const observer = new MutationObserver(handleMutation);
  
  observer.observe(observerTarget, {attributes: true});
  console.log(teste);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});