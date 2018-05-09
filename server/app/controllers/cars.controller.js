const Car = require("../models/cars.model.js");

// Create and Save a new car
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "car name can not be empty"
    });
  }

  // Create a car
  const car = new Car({
    carName: req.body.carName
  });

  // Save car in the database
  car
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the car."
      });
    });
};

// Retrieve and return all cars from the database.
exports.findAll = (req, res) => {
  Car.find()
    .then(cars => {
      res.send(cars);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cars."
      });
    });
};

// Find a single car with a carId
exports.findOne = (req, res) => {
  Car.findById(req.params.carId)
    .then(cars => {
      if (!cars) {
        return res.status(404).send({
          message: "car not found with id " + req.params.carId
        });
      }
      res.send(car);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Car not found with id " + req.params.carId
        });
      }
      return res.status(500).send({
        message: "Error retrieving car by id " + req.params.carId
      });
    });
};
