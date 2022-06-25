export default function initHeaderMenu() { 

  let menu = document.querySelector('#menu-btn');
  let navbar = document.querySelector('.header-menu');
  
  menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
  })  
  
}