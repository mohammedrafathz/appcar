const Model = require("../models/models.model.js");

// Create and Save a new car
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Model name can not be empty"
    });
  }

  // Create a car
  const model = new Model({
    car_id :req.body.car_id,
    carModelName: req.body.carModelName,
    imagePath: req.body.imagePath
  });

  // Save car in the database
  model
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the model."
      });
    });
};

// Retrieve and return all cars from the database.
exports.findAll = (req, res) => {
  Model.find()
    .then(models => {
      res.send(models);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cars."
      });
    });
};

// Find a single car with a carId
exports.findOne = (req, res) => {
  Model.findById(req.params.carId)
    .then(models => {
      if (!models) {
        return res.status(404).send({
          message: "car not found with id " + req.params.carId
        });
      }
      res.send(model);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Model not found with id " + req.params.carId
        });
      }
      return res.status(500).send({
        message: "Error retrieving model by car id " + req.params.carId
      });
    });
};
