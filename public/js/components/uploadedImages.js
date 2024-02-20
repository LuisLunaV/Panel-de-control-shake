const ulList = document.querySelector('.promociones');
const uploadedImgPrincipalHtml=( imagen )=>{
   const html = `<li class="card">
   <div class="card-img" >
   <img src="../../publicidad/1080x1920/${imagen}" alt="img_producto" />
 </div>
 <div class="card-contenido" data-value=''>
 <img src="assets/svg/trash.svg" class="btn-delete">
 </div>
 <li>`;

 ulList.innerHTML += html;
}

export{
    uploadedImgPrincipalHtml
}