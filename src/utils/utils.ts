import { Entrada } from "../types";

const parseNombre = (commentFromRequest: any): string => {
    if(!isString(commentFromRequest)){
        return 'N/A'
    }
    return commentFromRequest
}

const parseTipo = (commentFromRequest: any): string => {
    if(!isString(commentFromRequest)){
        return 'N/A'
    }
    return commentFromRequest
}

const parseCombustible = (commentFromRequest: any): string => {
    if(!isString(commentFromRequest)){
        return 'N/A'
    }
    return commentFromRequest
}

const parsePeso = (commentFromRequest: any): number => {
    if(!isNumber(commentFromRequest)){
        return 0
    }
    return commentFromRequest
}

const parseAltura = (commentFromRequest: any): number => {
    if(!isNumber(commentFromRequest)){
        return 0
    }
    return commentFromRequest
}

const parseCapacidad = (commentFromRequest: any): number => {
    if(!isNumber(commentFromRequest)){
        return 0
    }
    return commentFromRequest
}

const parseObjetivo = (commentFromRequest: any): string => {
    if(!isString(commentFromRequest)){
        return 'N/A'
    }
    return commentFromRequest
}

const parsePersonas = (commentFromRequest: any): number => {
    if(!isNumber(commentFromRequest)){
        return 0
    }
    return commentFromRequest
}

const parsePotencia = (commentFromRequest: any): number => {
    if(!isNumber(commentFromRequest)){
        return 0
    }
    return commentFromRequest
}

const isString = (string: string): boolean => {
    return typeof string === 'string'
}
const isNumber = (number: number): boolean => {
    return typeof number === 'number'
}

const toEntrada = (object: any): Entrada => {
    const NewEntry: Entrada ={
        nombre: parseNombre(object.nombre),
        tipo: parseTipo(object.tipo),
        combustible: parseCombustible(object.combustible),
        peso: parsePeso(object.peso),
        altura: parseAltura(object.altura),  
        capacidad: parseCapacidad(object.capacidad),
        objetivo: parseObjetivo(object.objetivo),
        personas: parsePersonas(object.personas), 
        potencia: parsePotencia(object.potencia)
    }
    return NewEntry
}

export default toEntrada;