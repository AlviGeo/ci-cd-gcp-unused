const data = require("../../models/all-hotel-data");
const recommendationData = require("../../models/recommendation-hotel");
const bestPickData = require("../../models/best-pick-hotel");
const _ = require("lodash")
const dataForBestPick = _.shuffle(bestPickData)

module.exports = {
  getAllHotels: async (req, res) => {
    try {
      // Define Variable Filter
      const filterByName = req.query.name;
      const limitReturn = req.query.limit || 15;

      // If empty
      if (data.length < 1) {
        return res.status(404).json({
          status: "error",
          message: "Hotel Not Found!",
        });
      }
      // Check filter by hotel name
      if (filterByName) {
        var filter = data.filter((hotel) =>
          hotel.namaHotel.toLowerCase().includes(filterByName.toLowerCase())
        );
        filter = filter.slice(0, limitReturn);
      }

      // Return data
      return res.json({
        status: "success",
        message: "Successfully retrieved!",
        data: filter || data.slice(0, limitReturn),
      });
    } catch (err) {
      return err.message;
    }
  },

  getHotelForRecomendation: async (req, res) => {
    try {
      // Define Variable Filter
      const filterByName = req.query.name;
      const limitReturn = req.query.limit || 15;

      // If empty
      if (recommendationData.length < 1) {
        return res.status(404).json({
          status: "error",
          message: "Hotel Not Found!",
        });
      }
      // Check filter by hotel name
      if (filterByName) {
        var filter = recommendationData.filter((hotel) =>
          hotel.namaHotel.toLowerCase().includes(filterByName.toLowerCase())
        );
        filter = filter.slice(0, limitReturn);
      }

      const result = filter || recommendationData.slice(0, limitReturn)
      const shuffle = _.shuffle(result) 

      // Return data
      return res.json({
        status: "success",
        message: "Successfully retrieved!",
        data: shuffle
      });
    } catch (err) {
      return err.message;
    }
  },

  getHotelForBestPick: async (req, res) => {
    try {
      // Define Variable Filter
      const filterByName = req.query.name;
      const limitReturn = req.query.limit || 15;

      // If empty
      if (dataForBestPick.length < 1) {
        return res.status(404).json({
          status: "error",
          message: "Hotel Not Found!",
        });
      }
      // Check filter by hotel name
      if (filterByName) {
        var filter = dataForBestPick.filter((hotel) =>
          hotel.namaHotel.toLowerCase().includes(filterByName.toLowerCase())
        );
        filter = filter.slice(0, limitReturn);
      }

      // Return data
      return res.json({
        status: "success",
        message: "Successfully retrieved!",
        data: filter || dataForBestPick.slice(0, limitReturn),
      });
    } catch (err) {
      return err.message;
    }
  },

  getHotelById: async (req, res) => {
    try {
      const filter = data.find((element) => element.id == req.params.id);
      if (filter) {
        // Return data
        return res.json({
          status: "success",
          message: "Successfully retrieved!",
          data: filter,
        });
      } else {
        res.send({ status: "error" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    console.log(filter);
  },
};
