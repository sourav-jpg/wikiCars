const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');

route.post('/create',controller.createCar);
route.get('/getCars',controller.getCars);
route.get('/getCarById/:id',controller.getCarById);
route.put('/update/:id',controller.updateCar);
route.delete('/delete/:id',controller.deleteCar);

module.exports= route