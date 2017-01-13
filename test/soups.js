var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var soups = require("../bin/soups");
 
chai.use(chaiAsPromised);
chai.should();

describe('Soups Module', function() {

  it('returns a promise', function() {
    return soups()
      .should.be.a('promise');
  });

  it('eventually returns a list of soups', function() {
    return soups().should.eventually
      .have.property('soups')
      .and.to.be.an('array');
  });

  it('get soups for a different day', function() {
    return soups(2).should.eventually
      .have.property('soups')
      .and.to.be.an('array');
  });

  describe('Soup', function() {

    it('has a name', function() {
      return soups().then(function(res) {
        return res.soups[0].should
          .have.property('name')
          .and.to.be.an('string');
      })
    });

    it('has a description', function() {
      return soups().then(function(res) {
        return res.soups[0].should
          .have.property('description')
          .and.to.be.an('string');
      })
    });

    it('has a calorie count', function() {
      return soups().then(function(res) {
        return res.soups[0].should
          .have.property('calorieCount')
          .and.to.be.an('number');
      })
    });

  });
});