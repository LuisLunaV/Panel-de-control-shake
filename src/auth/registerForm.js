import { formData, comparePasswords } from '../helper/index.js';
const formRegister = document.querySelector('.form-registro');

export const registerForm =()=>{
    formRegister.addEventListener('submit', (e)=>{
        e.preventDefault();
             //Validamos si los password en el registro son diferentes.
      if( !comparePasswords() ){
        alert('Las contraseñas no coinciden');
        location.reload();
        return;
      }  

        const data = formData( formRegister );
        console.log(data)
    })
};