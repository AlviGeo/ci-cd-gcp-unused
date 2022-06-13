const express = require("express");
const dataController = require("../controllers/hotel/hotel-data-controller");
const router = express.Router();

// Explore
router.get("/hotel-data", dataController.getAllHotels);
router.get("/hotel-data/:id", dataController.getHotelById);

// Best Pick
router.get("/hotel-data/getBestPicks", dataController.getHotelForBestPick);
// Recommendation
router.get(
  "/hotel-data/getRecomendation",
  dataController.getHotelForRecomendation
);

module.exports = router;
