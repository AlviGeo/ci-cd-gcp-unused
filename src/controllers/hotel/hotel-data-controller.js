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
    },

  getHotelById: async(req, res) => {
    try{
      var filter = data.find(element => element.id == req.params.id);
      if(filter){
        res.json(filter)
      }else
      {
        res.send({status: "error"})
      }
    }
    catch(err){
      return res.status(500).json({message: err.message})
    }

    console.log(filter)

  }
}