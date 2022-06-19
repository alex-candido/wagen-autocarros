export default function initFaqAccordion() {
  const accordionLista = document.querySelectorAll('[data-anime="accordion"] li');
  const accordionDescription = document.querySelectorAll('[data-anime="accordion"] p');
  const activeClass = 'active';

if(accordionLista.length) {
  accordionDescription[0].classList.add(activeClass);
  function activeDescription(index){
    accordionDescription[index].classList.toggle(activeClass)
  }

  accordionLista.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeDescription(index);
    })
  })

}
}

