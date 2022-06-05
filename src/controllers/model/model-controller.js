/* 
Designed by: Kelvin
Email: k3lvinding@gmail.com
*/

const tf = require("@tensorflow/tfjs");
// const tfn = require("@tensorflow/tfjs-node");
module.exports = {
  getModel: async (req, res) => {
    try {
      const model = await tf
        .loadLayersModel(
          "https://storage.googleapis.com/model-tf-bucket/js_model/model.json"
        )
        .then(function (model) {
          window.model = model;
        });

      // Return Response
      return res.json({
        status: "success",
        message: "Running Model Success",
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ message: err.message });
    }
  },
};
