import { postLogin } from '../services/auth/login-post.js'
import { formData, authFailure } from '../helper/index.js';
const formLogin = document.querySelector('.form-login');
const txt_NumEmpleado = document.querySelector("#login_NumEmpleado");
const txt_Password    = document.querySelector("#login_Password");
export const loginForm =()=>{

    formLogin.addEventListener('submit', async( e )=>{
        e.preventDefault();
        const data = formData(formLogin);
        
       const {user, token } = await postLogin( data )
       .catch( authFailure );
       console.log({ user, token })
        txt_NumEmpleado.value = '';
        txt_Password.value = '';
    })
}