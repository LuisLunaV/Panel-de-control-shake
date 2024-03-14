import { DataTypes } from 'sequelize';
import { db } from '../db/config.db';

const User = db.define('Users',{
    User_Id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    User_NumEmpleado:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

    },
    User_Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    User_Email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    User_Password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    User_Status:{
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
},{
    tableName: 'Users',
    timestamps: false 
});

export{
    User
};