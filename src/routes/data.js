const express = require("express");
const dataController = require("../controllers/hotel/hotel-data-controller");
const modelController = require("../controllers/model/model-controller");

const router = express.Router();

router.get("/hotel-data", dataController.getAllHotels);
router.get("/hotel-data/getBestPicks", dataController.getHotelForBestPick);
router.get("/hotel-data/getRecomendation", dataController.getHotelForRecomendation);
router.get("/hotel-data/:id", dataController.getHotelById);
router.get("/model-data", modelController.getModel);
module.exports = router;
