const express = require("express");
const dataController = require("../controllers/hotel/hotel-data-controller");
const dataflaskController = require("../controllers/model-integration/model-integration-controller");
const dataDjangoController = require("../controllers/model-integration/django-model-integration");
const djangoModelIntegration = require("../controllers/model-integration/django-model-integration");

const router = express.Router();

// Dummy data
router.get("/hotel-data", dataController.getAllHotels);
router.get("/hotel-data/getBestPicks", dataController.getHotelForBestPick);
// Recommendation
router.get(
  "/hotel-data/getRecomendation",
  dataController.getHotelForRecomendation
);
// Explore
router.get("/hotel-data", dataController.getAllHotels);
router.get("/hotel-data/:id", dataController.getHotelById);

// Flask Model Integration
router.get("/list-hotels", dataflaskController.getAllFlaskHotels);
router.get("/list-hotels/:id", dataflaskController.getFlaskHotelById);

// Django Model Integration
router.get("/hotel-bestpicks", djangoModelIntegration.getHotelBestPicks)
router.get("/hotel-bestpicks/:id", djangoModelIntegration.getHotelBestPicksByID)
module.exports = router;
