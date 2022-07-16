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
        type: DataTypes.FLOAT
    },
    altura: {
        type: DataTypes.FLOAT
    },
    capacidad: {
        type: DataTypes.FLOAT
    },
    objetivo: {
        type: DataTypes.STRING
    },
    personas: {
        type: DataTypes.INTEGER
    },
    potencia: {
        type: DataTypes.FLOAT
    }
},{
    timestamps: false,
});

export default Nave;