// We'll use this to override require calls in routes
var proxyquire = require('proxyquire');
// This will create stubbed functions for our overrides
var sinon = require('sinon');
require('sinon-mongoose');
var mongoose = require('mongoose');
var Staff = require('../../../models/staff')
// Supertest allows us to make requests against an express object
var supertest = require('supertest');
// Natural language-like assertions
var expect = require('chai').expect;

var express = require('express');

describe('CONTROLLER', function () {
    describe('employee', function () {

        describe('list', function () {

            beforeEach(function () {

            });

            it('should list with no error', function test(done) {
                var result = [{"_id": 1}];
                //var Staff = mongoose.model('Staff')
                var StaffMock = sinon.mock(Staff)

                StaffMock
                    .expects('find').withArgs({})
                    .chain('exec')
                    .yields(null, result);

                var controller = proxyquire('../../../controllers/employee', {
                    '../models/employee.js': StaffMock
                });
                var res = {};
                res.render = function(view, data){
                    StaffMock.verify();
                    StaffMock.restore();
                    expect(data).to.deep.equal({"employees": result});
                    expect(view).to.equal("employees/index");
                    done()
                };
                controller.list({}, res);
            })

            it('should list with error', function test(done) {
                var Staff = mongoose.model('Staff')
                var StaffMock = sinon.mock(Staff)

                StaffMock
                    .expects('find').withArgs({})
                    .chain('exec')
                    .yields("Something went wrong", null);

                var controller = proxyquire('../../../controllers/employee', {
                    '../models/employee.js': StaffMock
                });
                var req = {};
                var res = {};
                req.flash = function(key, message){
                    StaffMock.verify();
                    StaffMock.restore();

                    expect(key).to.equal("error");
                    expect(message).to.equal("Something went wrong");
                };
                res.redirect = function(url){
                    expect(url).to.equal("/employees");
                    done()
                };
                controller.list(req, res);
            })
        });



    });
});
