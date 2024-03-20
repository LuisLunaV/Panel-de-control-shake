import { postNewChange } from '../services/bitacora/api-post.js';
class Bitacora{
    constructor( ){
        const { User_NumEmpleado, User_Name } = JSON.parse(sessionStorage.getItem('user'))
        this.empNumber = User_NumEmpleado;
        this.empName   = User_Name;
        this.imgName;
        this.action; 
    }

   async sendInformation(){
        const payload = {
            Bitacora_NumEmpleado:this.empNumber,
            Bitacora_Name:       this.empName,
            Bitacora_Imagen:     this.imgName,
            Bitacora_Movimiento: this.action
        }
        try {
           const resp = await postNewChange( payload );
           console.log(resp);
        } catch (error) {
            console.log(error)
        }
    }
}

 class BitacoraUpload extends Bitacora{
    constructor({name}){
        super();
        this.imgName = name;
    }
    uploadImg(){
        this.imgName;
        this.action = 'upload';
        this.sendInformation()
    }
}

class BitacoraDelete extends Bitacora{
    constructor(name){
        super();
        this.imgName = name;
    }

    deleteImg(){
        this.imgName;
        this.action = 'delete';
        this.sendInformation();
    }
}

export{
BitacoraUpload,
BitacoraDelete
}