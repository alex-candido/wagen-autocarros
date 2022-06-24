export default function initBorderBottom() {

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
}

