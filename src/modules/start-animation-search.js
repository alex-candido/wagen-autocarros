export default function initAnimationSearch() {

// start animation-search

const search = document.querySelector('.search')
const numbers = document.querySelector('.numbers')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > (numbers.offsetTop - 800)){
    search.classList.add('active');
  } else {
    search.classList.remove('active');
  }
})

}