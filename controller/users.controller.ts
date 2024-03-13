import {Request, Response} from 'express';
import { User } from '../models/users'
export const users = {
    getUsers: async( req: Request, res: Response )=>{
        try {
            const user = await User.findAll();
            res.status(200).json({
                user,
                msg:'Hola mundo desde controller'
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                
                msg: "Fallo la busqueda de usuarios, comunicate con el administrador",
                error
            })
        }
    },

  
    postUsers: async( req: Request, res: Response )=>{
        try {
         const user = await User.create( req.body )
            
            res.status(200).json({
                user
            })
        } catch (error) {
            res.status(500).json({
                msg: "Error al crear usuario",
                error
            })
        }
    },

    getUserById: ( req: Request, res: Response )=>{
        try {
            
        } catch (error) {
            res.status(404).json({
                msg: "Fallo la busqueda del usuario, comunicate con el administrador",
                error
            })
        }
    }

};