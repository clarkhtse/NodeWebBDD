var supertest = require('supertest')(require('../../app'));
var expect = require('chai').expect;
var cheerio = require('cheerio');

var Staff = require('../../models/staff');


describe('INTEGRATION', function () {


    describe('employees', function () {


        beforeEach(function (done) {
            Staff.remove({}, function (err) {
                console.log('collection removed')
                done();
            });
        });

        it('should be able to create new employee and redirect it', function test(done) {
            var param = {name: "tuo", address: "shanghai", position: "dev", salary: 100};
            supertest.post('/employees/save').send(param).expect(302).end(function (err, res) {
                expect(res.status).to.equal(302);
                var location = res.headers.location;
                expect(location).to.match(/^\/employees\/show\//);
                var regex = /^\/employees\/show\/(.*)/;
                var segments = location.match(regex)
                if (segments.length > 1) {
                    var empoyeeId = segments[1];
                }
                if (err) throw err;
                done();
            });
        })

        it('should not be able to create new employee with name already existed', function test(done) {
            var params = {name: "tuo", address: "shanghai", position: "dev", salary: 100};
            Staff.create(params, function (err, doc) {
                supertest.post('/employees/save').send(params).expect(500).end(function (err, res) {
                    if (err) throw err;
                    done();
                });
            })
        });

        afterEach(function (done) {
            Staff.remove({}, function(err) {
                console.log('collection removed')
                done();
            });

        });

    });
});
