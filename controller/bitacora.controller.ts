import { Request, Response } from "express";
import { Bitacora } from "../models/bitacora";
export const postNewChange = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    await Bitacora.create( body );
    res.status(200).json({
      msg: 'Registro creado'
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear el registro en la bitacora",
      error,
    });
  }
};
