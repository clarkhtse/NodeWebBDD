var supertest = require('supertest')(require('../../app'));
var expect = require('chai').expect;
var cheerio = require('cheerio');

describe('SMOKE', function () {
    describe('loading express', function () {

        it('responds to /', function test(done) {
            // supertest.get('/').expect(200).end(function(err, res) {
            //     var $ = cheerio.load(res.text);
            //     expect($('h1').text()).to.equal('Express');
            //     expect($('p').text()).to.equal('Welcome to Express');
            //     if (err) throw err;
            //     done();
            // });
            supertest.get('/').expect(200).end(done);
        })

    });
});
