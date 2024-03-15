import { formData } from '../helper/formData.js';
const formLogin = document.querySelector('.form-login');
const txt_NumEmpleado = document.querySelector("#login_NumEmpleado");
const txt_Password    = document.querySelector("#login_Password");
export const loginForm =()=>{

    formLogin.addEventListener('submit', ( e )=>{
        e.preventDefault();
        const data = formData(formLogin);
        console.log(data)

        txt_NumEmpleado.value = '';
        txt_Password.value = '';
    })
}