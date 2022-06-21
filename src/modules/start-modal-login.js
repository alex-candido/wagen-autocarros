export default function initModalLogin() {
  const openButton = document.querySelector('[data-modal="login"]');
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
  
    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}

