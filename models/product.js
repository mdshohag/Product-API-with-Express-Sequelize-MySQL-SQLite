import { DataTypes } from "sequelize";
import sequelize from "../config.js";


const Product = sequelize.define('Product', {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    descrption: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    
});

export default Product;