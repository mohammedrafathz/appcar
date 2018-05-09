module.exports = (app) => {
    const cars = require('../controllers/cars.controller.js');

    // Create a new Car
    app.post('/cars', cars.create);

    // Retrieve all cars
    app.get('/cars', cars.findAll);

    // Retrieve a single car by carId
    app.get('/cars/:carId', cars.findOne);

}