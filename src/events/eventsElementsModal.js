import { deleteImages1080x1920, deleteImages1080x1152 } from '../services/api-delete.js';
import { clearModal } from '../components/uploadedImages.js';

const modalDePromociones = document.querySelector(".modal-promos");
const modalContenedorPromociones = document.querySelector(".contenedor-promos");

// Función para manejar los eventos del modal
export const eventsModal = () => {
  // Agrega un evento de escucha para los clics en el modal
  modalDePromociones.addEventListener('click', ({ target }) => {
    deleteImage(target); // Llama a la función para eliminar imágenes
    closeModal(target); // Llama a la función para cerrar el modal
  });
}

// Función asincrónica para eliminar una imagen
async function deleteImage(target) {
  // Obtiene el nombre de la imagen y su atributo de valor de datos
  const name = target.id;
  const dataValue = target.getAttribute('data-value');

  // Verifica si el botón de eliminación fue clickeado
  if (target.classList.contains('btn-delete')) {
    // Solicita confirmación al usuario antes de eliminar la imagen
    const confirmDelete = confirm('¿Está seguro de eliminar esta imagen?');
    if (confirmDelete) {
      try {
        // Elimina la imagen correspondiente según su valor de datos
        if (dataValue === '1080x1920') {
          await deleteImages1080x1920(name);
        } else if (dataValue === '1080x1152') {
          await deleteImages1080x1152(name);
        }
        // Muestra un mensaje de alerta después de eliminar la imagen
        alert('Imagen eliminada');
        // Remueve la imagen del modal
        removeImageFromModal(target);
      } catch (error) {
        console.error('Error al eliminar la imagen:', error);
        // Muestra un mensaje de alerta si ocurre un error al eliminar la imagen
        alert('Error al eliminar la imagen. Por favor, inténtelo de nuevo.');
      }
    }
  }
}

// Función para cerrar el modal
function closeModal(target) {
  // Verifica si se hizo clic en el botón de cierre del modal
  if (target.closest(".contenedor-close-promos")) {
    // Oculta el modal y realiza las acciones necesarias para cerrarlo
    modalDePromociones.classList.remove("mostrar");
    modalContenedorPromociones.classList.remove("tranformX-0");
    // Limpia el contenido del modal
    clearModal();
  }
}

// Función para remover la imagen del modal
function removeImageFromModal(target) {
  // Obtiene referencias al contenedor de imágenes y a la tarjeta de la imagen
  const imageContainer = document.querySelector(".promociones");
  const imageCard = target.closest(".card");
  // Remueve la tarjeta de imagen del contenedor
  imageContainer.removeChild(imageCard);
  
//Validamos si ya no existen elementos li en la lista ul
  const liElements = imageContainer.querySelectorAll('li');
  if(!liElements.length){
    modalDePromociones.classList.remove("mostrar");
    modalContenedorPromociones.classList.remove("tranformX-0");
  }
}
