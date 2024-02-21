import { postImages1080x1920, postImages1080x1152 } from '../services/api-post.js';

const inputFileUno = document.querySelector("#fileUno");
const inputFileDos = document.querySelector("#fileDos");

export const eventInputFile = () => {

  inputFileUno.addEventListener("change", ({ target }) => {
    let files = target.files;
    processFiles(files[0], '1080x1920');
  });

  inputFileDos.addEventListener("change", ({ target }) => {
    let files = target.files;
    processFiles(files[0], '1080x1152');
  });

};

function processFiles(file, dimensions) {
  const docType = file.type;
  const validExtensions = ["image/jpg", "image/jpeg"];

  if (!validExtensions.includes(docType)) {
    return alert("El archivo no es valido");
  }

  const fileReader = new FileReader();

  fileReader.addEventListener("load", (event) => {
    // const fileUrl = fileReader.result;
    const image = new Image();
    image.src = fileReader.result;

    image.onload = function(){
        const width  = this.width;
        const height = this.height;
        
        const imgDimensions = `${width}x${height}`;

        if(dimensions != imgDimensions){
           return alert('La imagen no tiene las dimensiones necesarias para esta pantalla.');
        }

    }
  
    uploadFile( file )
  });
  
  fileReader.readAsDataURL(file);

};

async function uploadFile(file){
//    const resp = await postImages1080x1920( file );
//    console.log(resp)
}
