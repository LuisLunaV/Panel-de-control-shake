import { clearModal } from '../components/uploadedImages.js';
const modalDePromociones = document.querySelector(".modal-promos"),
      modalContenedorPromociones = document.querySelector(".contenedor-promos");

 export const eventsModal=()=>{
    modalDePromociones.addEventListener('click',( { target } )=>{
      closeModalImg( target )
    })
  }

function closeModalImg(target) {

  if (target.closest(".contenedor-close-promos")) {
    modalDePromociones.classList.remove("mostrar");
    modalContenedorPromociones.classList.remove("tranformX-0");
    clearModal();
    return;
  }
}
