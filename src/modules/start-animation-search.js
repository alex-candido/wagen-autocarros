export default function initAnimationSearch() {

  const search = document.querySelector('.search')
  const numbers = document.querySelector('.numbers-bg')

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > (numbers.offsetTop - 800)){
      search.classList.add('active');
    } else {
      search.classList.remove('active');
    }
  })

}