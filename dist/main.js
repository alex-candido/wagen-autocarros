/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// start header-reduce\r\n\r\nwindow.addEventListener('scroll', () =>{\r\n  if (window.scrollY > 0){\r\n    document.querySelector('.header').classList.add('active');\r\n  } else {\r\n    document.querySelector('.header').classList.remove('active');\r\n  }\r\n})\r\n\r\n// start header-reduce\r\n\r\nwindow.addEventListener('load', () =>{\r\n  if (window.scrollY > 0){\r\n    document.querySelector('.header').classList.add('active');\r\n  } else {\r\n    document.querySelector('.header').classList.remove('active');\r\n  }\r\n})\r\n\r\n// start user city location \r\n\r\nnavigator.geolocation.getCurrentPosition(function(posicao) {\r\n    var url = \"http://nominatim.openstreetmap.org/reverse?lat=\"+posicao.coords.latitude+\"&lon=\"+posicao.coords.longitude+\"&format=json&json_callback=preencherDados\";\r\n\r\n    var script = document.createElement('script');\r\n    script.src = url;\r\n    document.body.appendChild(script);\r\n});\r\n\r\n// start home slide \r\n\r\nfunction preencherDados(dados) {\r\n  const city = document.querySelector('.city a')\r\n  city.innerText = dados.address.city;\r\n  city.style.color = '#D90008'\r\n}\r\n\r\nvar swiper = new Swiper(\".home-slider\", {\r\n  spaceBetween: 20,\r\n  effect: \"fade\",\r\n  loop:true,\r\n  navigation: {\r\n    nextEl: \".swiper-button-next\",\r\n    prevEl: \".swiper-button-prev\",\r\n  },\r\n  centeredSlides: true,\r\n  autoplay: {\r\n    delay: 9500,\r\n    disableOnInteraction: false,\r\n  },\r\n});\r\n\r\n// start border-bottom navbar-search\r\n\r\nconst optionSearch = document.querySelectorAll('.navbar-search h3')\r\n\r\noptionSearch.forEach(option => {\r\n  option.addEventListener('click', (event) => {\r\n    optionSearch.forEach(item => {\r\n      item.classList.remove('active')\r\n    })\r\n    const h3 = event.target;\r\n    h3.classList.toggle('active');\r\n  })\r\n})\r\n\r\n// \r\n\r\nconst search = document.querySelector('.search')\r\nconst numbers = document.querySelector('.numbers')\r\n\r\nwindow.addEventListener('scroll', () => {\r\n  if (window.pageYOffset > (numbers.offsetTop - 800)){\r\n    search.classList.add('active');\r\n  } else {\r\n    search.classList.remove('active');\r\n  }\r\n})\r\n\r\n// start animation-search\r\n\r\n\r\n\r\nwindow.addEventListener('scroll', () => {\r\n  if (window.pageYOffset > (numbers.offsetTop - 420)){\r\n    numbers.classList.add('active');\r\n  } else {\r\n    numbers.classList.remove('active');\r\n  }\r\n})\r\n\r\n// animated numbers\r\n\r\nfunction animatedNumbers() {\r\n  const numbers = document.querySelectorAll('[data-numero]');\r\n\r\n  numbers.forEach((numero) => {\r\n    const total = +numero.innerText;\r\n    const inscription = Math.floor(total / 100);\r\n\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      start = start + inscription;\r\n      numero.innerText = start;\r\n\r\n      if(start > total) {\r\n        numero.innerText = total + '+';\r\n        clearInterval(timer);\r\n      }\r\n    }, 25 * Math.random());\r\n  });\r\n}\r\n  \r\nfunction handleMutation(mutation) {\r\n   if(mutation[0].target.classList.contains('active')) {\r\n    observer.disconnect();\r\n    animatedNumbers();\r\n   }\r\n  }\r\n  \r\n  const observerTarget = document.querySelector('.numbers');\r\n  const observer = new MutationObserver(handleMutation);\r\n  \r\n  observer.observe(observerTarget, {attributes: true});\r\n\r\n\r\nvar swiper = new Swiper(\".mySwiper\", {\r\n  slidesPerView: 3,\r\n  spaceBetween: 30,\r\n  slidesPerGroup: 3,\r\n  loop: true,\r\n  loopFillGroupWithBlank: true,\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n  navigation: {\r\n    nextEl: \".swiper-button-next\",\r\n    prevEl: \".swiper-button-prev\",\r\n  },\r\n});\n\n//# sourceURL=webpack://wagen-autocarros/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;