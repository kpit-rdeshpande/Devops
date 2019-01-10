var request = require('supertest');
var app = require('../index.js');
describe('GET/ index route test', function() {
 it('respond with "Hello Devops"', function(done) {
 request(app).get('/').expect('Hello Devops', done);
 });
});