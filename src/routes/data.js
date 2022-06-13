const express = require("express");
const dataController = require("../controllers/hotel/hotel-data-controller");
const dataflaskController = require("../controllers/model-integration/model-integration-controller");

const router = express.Router();

router.get("/hotel-data", dataController.getAllHotels);
router.get("/hotel-data/getBestPicks", dataController.getHotelForBestPick);
router.get(
  "/hotel-data/getRecomendation",
  dataController.getHotelForRecomendation
);
router.get("/hotel-data/:id", dataController.getHotelById);

router.get("/list-hotels", dataflaskController.getAllFlaskHotels);

module.exports = router;
