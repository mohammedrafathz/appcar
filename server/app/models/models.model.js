const mongoose = require("mongoose");

const ModelSchema = mongoose.Schema(
  {
    car_id: String,
    carModelName: String,
    imagePath: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Model", ModelSchema);
