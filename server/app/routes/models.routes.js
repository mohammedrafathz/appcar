module.exports = (app) => {
    const models = require('../controllers/models.controller.js');

    // Create a new Car
    app.post('/models', models.create);

    // Retrieve all cars
    app.get('/models', models.findAll);

    // Retrieve a model by carId
    app.get('/models/:carId', models.findOne);

}