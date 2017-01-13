// var chai = require("chai");
// var chaiAsPromised = require("chai-as-promised");
var soups = require("../bin/soups");
 
// chai.use(chaiAsPromised);
 // chai.should();

describe('soups module', function() {
  it('returns soup objects', function() {
  	console.log(soups);
  	return true;
  	// return soups().should.eventually.have.length(3);
  });
});