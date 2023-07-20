const express = require("express");
const dataController = require("../controllers/hotel/hotel-data-controller");

const router = express.Router();

// Dummy data
router.get("/hotel-data", dataController.getAllHotels);
router.get("/hotel-data/getBestPicks", dataController.getHotelForBestPick);
// Survey Form
router.get("/hotel-data/survey", dataController.getHotelSurveyForm);

// Recommendation
router.get(
  "/hotel-data/getRecomendation",
  dataController.getHotelForRecomendation
);
// Explore
router.get("/hotel-data", dataController.getAllHotels);
router.get("/hotel-data/:id", dataController.getHotelById);


module.exports = router;
