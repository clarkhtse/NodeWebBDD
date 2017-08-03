var ejs = require('ejs');
var cheerio = require('cheerio');
var expect = require('chai').expect;
var path = require('path');

describe('VIEW', function () {
    describe('employee list', function () {


        var location = path.resolve(__dirname, '../../../../views/employees/index.ejs');

        it('should show empty msg when no employees are empty', function test(done) {
            var data = {employees: []};
            ejs.renderFile(location, data, null, function (err, str) {
                if (err) throw err;
                var $ = cheerio.load(str);
                //expect($('.empty-msg').text()).to.equal('No employees found.');
                expect($('.empty-msg').length).to.equal(1);
                done();
            });
        })


        it('should populate list with data', function test(done) {
            var employee1 = {_id: 1, name: "TUO", address: "Shanghai", salary: "100", position: "dev"};
            var data = {employees: [employee1]};
            ejs.renderFile(location, data, null, function (err, str) {
                if (err) throw err;
                var $ = cheerio.load(str);
                expect($('.empty-msg').length).to.equal(0);
                expect($('table').length).to.equal(1);
                expect($('table tbody tr:nth-of-type(1) td:nth-of-type(1)').text()).to.equal(employee1.name);
                expect($('table tbody tr:nth-of-type(1) td:nth-of-type(1) a').prop('href')).to.equal("/employees/show/" + employee1._id);
                expect($('table tbody tr:nth-of-type(1) td:nth-of-type(2)').text()).to.equal(employee1.address);
                expect($('table tbody tr:nth-of-type(1) td:nth-of-type(3)').text()).to.equal(employee1.position);
                expect($('table tbody tr:nth-of-type(1) td:nth-of-type(4)').text()).to.contains(employee1.salary);
                done();
            });
        })
    });
});
