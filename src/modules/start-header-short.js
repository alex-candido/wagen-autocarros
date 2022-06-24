export default function initHeaderShort() {

  window.addEventListener('scroll', () =>{
    if (window.scrollY > 0){
      document.querySelector('.header-bg').classList.add('active');
    } else {
      document.querySelector('.header-bg').classList.remove('active');
    }
  })

  window.addEventListener('load', () =>{
    if (window.scrollY > 0){
      document.querySelector('.header-bg').classList.add('active');
    } else {
      document.querySelector('.header-bg').classList.remove('active');
    }
  })

}