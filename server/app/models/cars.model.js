const mongoose = require("mongoose");

const CarSchema = mongoose.Schema(
  {
    carName: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Car", CarSchema);
