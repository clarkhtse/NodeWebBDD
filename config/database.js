var mongoose = require('mongoose');

module.exports = function(envConfig){

    mongoose.connect(envConfig.database).then(function () {
        return console.log('connection succesful');
    }).catch(function (err) {
        return console.error(err);
    });
};