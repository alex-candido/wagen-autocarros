import initHeaderShort from './modules/start-header-short.js';
import initHomeSlide from './modules/start-home-slide.js';
import initAnimationSearch from './modules/start-animation-search.js';
import initBorderBottom from './modules/start-border-bottom.js';
import initNumbers from './modules/start-numbers.js';
import initAnimationNumbers from './modules/start-animation-numbers.js';
import initCategoriesSlide from './modules/start-categories-slide.js';

initHeaderShort();
initHomeSlide();
initAnimationSearch();
initBorderBottom();
initNumbers();
initAnimationNumbers();
initCategoriesSlide();

// start animation-numbers

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
