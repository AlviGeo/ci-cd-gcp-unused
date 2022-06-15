const express = require("express");
const dataController = require("../controllers/hotel/hotel-data-controller");
const dataflaskController = require("../controllers/model-integration/model-integration-controller");

const router = express.Router();


// Best Pick
router.get("/hotel-data/getBestPicks", dataController.getHotelForBestPick);
// Recommendation
router.get(
  "/hotel-data/getRecomendation",
  dataController.getHotelForRecomendation
);
// Explore
router.get("/hotel-data", dataController.getAllHotels);
router.get("/hotel-data/:id", dataController.getHotelById);

router.get("/list-hotels", dataflaskController.getAllFlaskHotels);
router.get("/list-hotels/:id", dataflaskController.getFlaskHotelById);

module.exports = router;
