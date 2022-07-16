import { Request, Response } from "express" 
import Nave from "../db/navedb";
import { Lanzadera, LanzaderaTripulada, Notripuladas, Tripuladas } from "../models/nave"

export const getNaves = async ( _req: Request, res: Response ) => {

    const naves = await Nave.findAll();

    res.json({naves})
}

export const getNave = async ( req: Request, res: Response ) => {
    const { tipo } = req.params;
    const nave = await Nave.findAll({
        where: {
            tipo: tipo
        }
    });
    res.json({nave})
}

export const postNave = async ( req: Request, res: Response ) => {
    const { body } = req;
    try {
        const nave =  Nave.build(body);
        await nave.save();

        return res.json( nave );
        
    } catch (error: any) {
        return res.status(500).json({
            msg: 'falló la db'
        })
    }
}
