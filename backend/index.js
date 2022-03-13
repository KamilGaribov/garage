const express = require("express");
const server = express();
const cors = require("cors");
const database = require("./database");

const { Warehouse, Car } = require("./models/car");
var data = require("./warehouses.json");

const localCors = require("./middlewares/cors");
const errorHandler = require("./middlewares/errorHandler");

const indexRouter = require("./routers/index");
const carRouter = require("./routers/car");

// database.sync().then(() => {
database.sync({ force: true }).then(() => {
    data.map((item) => {
        Warehouse.create({
            name: item.name,
            lat: item.location.lat,
            long: item.location.long,
            location: item.cars.location,
        });
        item.cars.vehicles.map((car) => {
            Car.create({ ...car, warehouseId: item._id });
        });
    });
});

server.use(express.json());
server.use(cors());
server.use(localCors);

server.use("/", indexRouter);
server.use("/car", carRouter);

server.use(errorHandler);

server.listen(5000, () =>
    console.log("Express JS server is running on http://localhost:5000/")
);
