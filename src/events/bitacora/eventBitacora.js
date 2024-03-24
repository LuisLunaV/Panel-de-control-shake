import { showUserBitacora } from '../../components/bitacora/showUsersBitacora.js';
const formBitacora = document.querySelector('.form-bitacora');
export const eventBitacora=()=>{
    formBitacora.addEventListener('change', ( { target } )=>{
        const fecha = target.value;
        showUserBitacora( fecha );
    })
}