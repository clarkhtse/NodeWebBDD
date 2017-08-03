var path = require('path');
var rootPath = path.normalize(__dirname + '/../'); // normalizes to base path

module.exports = {
    test: {
        rootPath: rootPath,
        database: 'mongodb://localhost/test-demo',
        port: process.env.PORT || 3000
    },
    development: {
        rootPath: rootPath,
        database: 'mongodb://localhost/dev-demo',
        port: process.env.PORT || 3000
    },
    production: {
        rootPath: rootPath,
        database: '',
        port: process.env.PORT || 80
    }
};