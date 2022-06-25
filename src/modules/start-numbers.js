export default function initNumbers() {

const numbers = document.querySelector('.numbers-bg')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > (numbers.offsetTop - 420)){
    numbers.classList.add('active');
  } else {
    numbers.classList.remove('active');
  }
})
}