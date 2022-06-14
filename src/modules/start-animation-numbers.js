export default function initAnimationNumbers() {

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

}