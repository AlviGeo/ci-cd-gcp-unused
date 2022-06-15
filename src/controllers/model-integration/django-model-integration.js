const apiAdapter = require("../apiAdapter");

//Variable base url service category
const { URL_SERVICE_DJANGO } = process.env;
const api = apiAdapter(URL_SERVICE_DJANGO);

module.exports = {

  getHotelBestPicks: async (req, res) => {
    const hotel = await api.get("/");
    const data = hotel.data.data;

    try{
      //   console.log(data);
      //   Define Variable Filter
      const filterByName = req.query.name;
      const limitReturn = req.query.limit || 15;

      // If empty
      if (data.length < 1) {
        return res.status(404).json({
          status: "error",
          message: "Hotel Not Found!",
        });
      }
      //   Check filter by hotel name
      if (filterByName) {
        var filter = data.filter((hotel) =>
          hotel.hotel.toLowerCase().includes(filterByName.toLowerCase())
        );
        filter = filter.slice(0, limitReturn);
      }

      // Return data
      return res.json({
        status: "success",
        message: "Successfully retrieved!",
        data: filter || data.slice(0, limitReturn),
      });
    } catch(err){
      if (err.code === "ECONNREFUSED") {
        return res
          .status(500)
          .json({ status: "error", message: "service uanvailable" });
      }
      return err.message;
    }
  },
  
  getHotelBestPicksByID: async(req, res) => {
    try {
        const hotel = await api.get("/");
        const data = hotel.data.data;

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
  }
};