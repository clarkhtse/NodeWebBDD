var express = require('express');
var employee = require("../controllers/employee.js");

module.exports = function(app){
    var router = express.Router();

    // Get all employees
    router.get('/', employee.list);

    // Get single employee by id
    router.get('/show/:id', employee.show);

    // Create employee
    router.get('/create', employee.create);

    // Save employee
    router.post('/save', employee.save);

    // Edit employee
    router.get('/edit/:id', employee.edit);

    // Edit update
    router.post('/update/:id', employee.update);

    // Edit update
    router.post('/delete/:id', employee.delete);

    app.use('/employees', router);
};