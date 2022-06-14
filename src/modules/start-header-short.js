export default function initHeaderShort() {
  // start header-reduce

  window.addEventListener('scroll', () =>{
    if (window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  })

  // start header-reduce

  window.addEventListener('load', () =>{
    if (window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  })

}