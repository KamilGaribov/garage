const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Warehouse, Car } = require("../models/car");
const router = require("express").Router();
const { CARS_PAGE_LIMIT } = require("../config");

router.get("/", async (req, res) => {
    let page = req.query.page ? req.query.page - 1 : 0;
    let count = Math.ceil(await Car.count() / CARS_PAGE_LIMIT)
    let cars = await Car.findAll({
        offset: page * CARS_PAGE_LIMIT,
        limit: CARS_PAGE_LIMIT,
        order: [["date_added", "ASC"]],
        include: {
            model: Warehouse,
        },
    });
    res.send({ cars, count });
});

router.get("/:id", async (req, res) => {
    let { id } = req.params;
    let car = await Car.findByPk(id, {
        include: [Warehouse],
    });
    if (car) res.status(200).send(car);
    else {
        res.status(404).json({
            errorMessage: `Car couldn't find with ID: ${id}`,
        });
    }
});

router.post("/new", async (req, res) => {
    console.log("body============");
    console.log(req.body);
    await Car.create(req.body);
    res.state(200).json({ successMessage: "Make created" });
});

module.exports = router;
