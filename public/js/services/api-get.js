import { url, allImages} from './index.js'

const getAllImages1080x1920 = async()=>{
    try{
        const resp = await fetch(`${url}${allImages}`);

        if( resp.ok ){
            const data = await resp.json();
            return data;
        }else{
            const error = await resp.json();
            throw error;
        }
    }catch( error ){
        throw error;
    }
}

export{
    getAllImages1080x1920
}