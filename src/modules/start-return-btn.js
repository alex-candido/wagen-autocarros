export default function initBtn() {
  const home = document.querySelector('.home-bg')
  const footer = document.querySelector('.footer-bg')

  const sectionTop = footer.offsetTop;
  console.log(sectionTop);

  window.addEventListener('scroll', () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > (footer.offsetTop - 588)) {
      document.querySelector('.return-btn').classList.add('active');
    } else {
      document.querySelector('.return-btn').classList.remove('active');
    }
  })

  var btn = document.querySelector('.return-btn');
    btn.addEventListener("click", function() {
      home.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
}