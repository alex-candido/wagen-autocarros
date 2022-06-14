export default function initNumbers() {

// start animation-numbers
const numbers = document.querySelector('.numbers')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > (numbers.offsetTop - 420)){
    numbers.classList.add('active');
  } else {
    numbers.classList.remove('active');
  }
})
}