const apiAdapter = require("../apiAdapter");
const Validator = require('fastest-validator');//Library Validator
const v = new Validator();

//Variable base url service category
const { URL_SERVICE_FLASK } = process.env;
const api = apiAdapter(URL_SERVICE_FLASK);

module.exports = {
  getRecommendation: async (req, res) => {
    try {
      //Validate Data
      const schema = {
        interest: { type: "array", items: "string", min:1, max:5, enum: [ "Shuttle Service", "Sports and Recreations", "Kids and Pets", "Transportation", "Connectivity", "Accessibilty", "Things to Do", "General", "Public Facilities", "Nearby Facilities", "Business Facilities", "In-room Facilities", "Hotel Services", "Food and Drinks", "Fast Food", "Shop & Gifts", "Business", "Transportation Hub", "Casual Dining", "Nightlife", "Park & Zoo", "Public Service", "Arts & Sciences", "Fine Dining", "Sport", "Quick Bites", "Education", "Street Food", "Activity & Games", "Cafe", "Entertainment", "Food Court", "Sight & Landmark" ] },
      }
      const validate= v.validate(req.body, schema);

      //Message Validate
      if(validate.length){
          return res.status(400).json({
            status: 'error',
            message: validate
          });
      }
      const hotel = await api.post("api/rekomendasi-hotel", req.body);
      const data = hotel.data.data;

      // Return data
      return res.json({
        status: "success",
        message: "Successfully retrieved!",
        data: data,
      });
    } catch (err) {
      if (err.code === "ECONNREFUSED") {
        return res
          .status(500)
          .json({ status: "error", message: "service uanvailable" });
      }
      return err.message;
    }
  },
};
