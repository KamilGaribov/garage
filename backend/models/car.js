const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Warehouse extends Model {}
Warehouse.init(
    {
        name: { type: DataTypes.STRING },
        location: {type: DataTypes.STRING},
        lat: { type: DataTypes.STRING },
        long: { type: DataTypes.STRING },
    },
    {
        sequelize,
        modelName: "warehouse",
        timestamps: false,
    }
);

class Car extends Model {}
Car.init(
    {
        make: {
            type: DataTypes.STRING,
        },
        model: {
            type: DataTypes.STRING,
        },
        year_model: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.DECIMAL,
        },
        licensed: {
            type: DataTypes.BOOLEAN,
        },
        date_added: {
            type: DataTypes.DATEONLY,
        },
    },
    {
        sequelize,
        modelName: "car",
        timestamps: false,
    }
);

Warehouse.hasMany(Car);
Car.belongsTo(Warehouse);

module.exports = { Warehouse, Car };
