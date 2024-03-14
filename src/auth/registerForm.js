import { formData } from '../helper/formData.js';
const formRegister = document.querySelector('.form-registro');

export const registerForm =()=>{
    formRegister.addEventListener('submit', (e)=>{
        e.preventDefault();
        const data = formData( formRegister );
        console.log(data)
    })
};