const express = require("express");
const dataController = require("../controllers/hotel/hotel-data-controller");

const router = express.Router();

router.get('/hotel-data', dataController.getAllHotels);
router.get('/hotel-data/:id', dataController.getHotelById)
module.exports = router;
