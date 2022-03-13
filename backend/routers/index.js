const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("salam ana sehife");
});


module.exports = router;
