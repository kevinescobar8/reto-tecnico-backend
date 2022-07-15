import { DataTypes } from 'sequelize';
import db from './connection';

const Nave = db.define('Nave',{
    nombre: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    combustible: {
        type: DataTypes.STRING
    },
    peso: {
        type: DataTypes.DOUBLE
    },
    empuje: {
        type: DataTypes.DOUBLE
    },
    altura: {
        type: DataTypes.DOUBLE
    },
    distanciaTierra: {
        type: DataTypes.DOUBLE
    },
    capacidad: {
        type: DataTypes.DOUBLE
    },
    objetivo: {
        type: DataTypes.STRING
    },
    personas: {
        type: DataTypes.DOUBLE
    },
    potencia: {
        type: DataTypes.DOUBLE
    }
});

export default Nave;