import { Request, Response } from "express" 
import Nave from "../db/navedb";
import { Entrada } from "../types";
import { NaveEspacial } from "../models/nave";
import toEntrada from "../utils/utils";

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

export const postNave = async (req: Request, res: Response ) => {
    try {
        const newNave = toEntrada(req.body);
        const naveTipo = new NaveEspacial(newNave.nombre, newNave.peso, newNave.capacidad, newNave.altura, newNave.potencia, newNave.personas, newNave.objetivo, newNave.combustible);
        const definicionTipo = naveTipo.tipoNave(newNave.personas,newNave.peso);
        const newNaveToAdd = {
            nombre: newNave.nombre,
            tipo: definicionTipo,
            combustible: newNave.combustible,
            peso: newNave.peso,
            altura: newNave.altura, 
            capacidad: newNave.capacidad,
            objetivo: newNave.objetivo,
            personas: newNave.personas, 
            potencia: newNave.potencia
        }
        const defNave = Nave.build(newNaveToAdd);
        console.log(defNave)
        await defNave.save()
        return  res.json(defNave);
        
    } catch (error: any) {
        return res.status(500).json({
            msg: error
        })
    }
}
