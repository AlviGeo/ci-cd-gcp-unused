const data = require("../../models/hotel-data");

module.exports = {

  getAllHotels: async (req, res) => {
    try {

      // If empty
      if(data.length < 1) {
        return res.status(404).json({
          status: 'error',
          message: 'Hotel Not Found!'
      });
      }
      
      // Return data
      return res.json({
        status: "success",
        message: "Successfully retrieved!",
        data,
      });

      } catch (err) {
        return err.message
      }
    }
}