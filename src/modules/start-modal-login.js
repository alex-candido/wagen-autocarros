export default function initModalLogin() {
  const openButton = document.querySelectorAll('.modal-login');
  const closeButton = document.querySelector('#close');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  if(openButton && closeButton && containerModal) {
    
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('active');
    }
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
  
    openButton.forEach(button => {
      button.addEventListener('click', toggleModal);
      console.log(button)
    })
 
    closeButton.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}

