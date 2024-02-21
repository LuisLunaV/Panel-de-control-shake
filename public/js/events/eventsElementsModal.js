// Importa las funciones necesarias desde los archivos correspondientes
import { deleteImages1080x1920, deleteImages1080x1152 } from '../services/api-delete.js';
import { clearModal } from '../components/uploadedImages.js';

// Obtiene referencias a los elementos del DOM
const modalDePromociones = document.querySelector(".modal-promos");
const modalContenedorPromociones = document.querySelector(".contenedor-promos");

// Función para manejar los eventos del modal
export const eventsModal = () => {
  modalDePromociones.addEventListener('click', ({ target }) => {
    deleteImages(target); // Llama a la función para eliminar imágenes
    closeModalImg(target); // Llama a la función para cerrar el modal
  });
}

// Función para eliminar imágenes
async function deleteImages(target) {
  // Obtiene el nombre de la imagen y su atributo de valor de datos
  const name = target.id;
  const dataValue = target.getAttribute('data-value');

  // Verifica si el botón de eliminación fue clickeado
  if (target.className === 'btn-delete') {
    // Solicita confirmación al usuario antes de eliminar la imagen
    const resp = confirm('¿Está seguro de eliminar esta imagen?');

    // Si el usuario confirma la eliminación
    if (resp) {
      // Elimina la imagen correspondiente según su valor de datos
      if (dataValue === '1080x1920') {
        await deleteImages1080x1920(name);
        alert('Imagen eliminada');
      }
      if (dataValue === '1080x1152') {
        await deleteImages1080x1152(name);
        alert('Imagen eliminada');
      }
    }
  }
}

// Función para cerrar el modal
function closeModalImg(target) {
  // Verifica si se hizo clic en el botón de cierre del modal
  if (target.closest(".contenedor-close-promos")) {
    // Oculta el modal y realiza las acciones necesarias para cerrarlo
    modalDePromociones.classList.remove("mostrar");
    modalContenedorPromociones.classList.remove("tranformX-0");
    clearModal(); // Limpia el contenido del modal
    return;
  }
}
