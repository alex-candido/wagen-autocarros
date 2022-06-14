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

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});

// start border-bottom navbar-search

const optionSearch = document.querySelectorAll('.navbar-search h3')

optionSearch.forEach(option => {
  option.addEventListener('click', (event) => {
    optionSearch.forEach(item => {
      item.classList.remove('active')
    })
    const h3 = event.target;
    h3.classList.toggle('active');
  })
})

// 

const search = document.querySelector('.search')
const numbers = document.querySelector('.numbers')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > (numbers.offsetTop - 800)){
    search.classList.add('active');
  } else {
    search.classList.remove('active');
  }
})

// start animation-search



window.addEventListener('scroll', () => {
  if (window.pageYOffset > (numbers.offsetTop - 420)){
    numbers.classList.add('active');
  } else {
    numbers.classList.remove('active');
  }
})

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