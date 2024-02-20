import { getAllImages1080x1920, getAllImages1080x1152 } from '../services/api-get.js'
import { uploadedImgPrincipalHtml } from '../components/uploadedImages.js';

const upLoadContainer    = document.querySelector('.main-options'),
      modalDePromociones = document.querySelector(".modal-promos"),
      modalContenedorPromociones = document.querySelector(".contenedor-promos");

export const eventsMain=() =>{
    upLoadContainer.addEventListener('click',( { target, localName })=>{
        const id = target.id;

        if( target.className === 'btnShowImg'){
            ( id === 'btn-1080-1920')?
            btnShowImages1080x1920():
            btnShowImages1080x1152();
        }

    });
}

const btnShowImages1080x1920= async()=>{
    showModalImg();
    const mainImages = await getAllImages1080x1920();
    Object.values( mainImages ).forEach((value)=>{
        // uploadedImgPrincipalHtml( value)
    })
}

const btnShowImages1080x1152= async()=>{
    showModalImg()
    const secondaryImages = await getAllImages1080x1152();
    Object.values( secondaryImages ).forEach((value)=>{
        console.log( value)
    })
}

function showModalImg(){
    modalDePromociones.classList.add('mostrar')
    modalContenedorPromociones.classList.add('tranformX-0');
}

