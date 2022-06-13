const express = require("express");
const dataController = require("../controllers/hotel/hotel-data-controller");
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

module.exports = router;
