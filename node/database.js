import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql",
    timezone: "+07:00",
    logging: console.log,
    define: {
        charset: "UTF8",
        collate: "UTF8_GENERAL_CI"
    }
});

export class Products extends Model {}
export class Categories extends Model {}

Products.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true
});

Categories.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true
});