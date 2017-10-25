var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add to the previous total', function() {
    calculator.previousTotal = '0';
    calculator.add(4)
    assert.equal(4, calculator.runningTotal)
  });

  it('can takeaway from the previous total', function() {
    calculator.previousTotal = '8';
    calculator.subtract(4)
    assert.equal(4, calculator.runningTotal);
  });

  it('can multiply the previous total', function() {
    calculator.previousTotal = '8';
    calculator.multiply(2)
    assert.equal(16, calculator.runningTotal);
  });

  it('can divide from the previous total', function() {
    calculator.previousTotal = '6';
    calculator.divide(2)
    assert.equal(3, calculator.runningTotal);
  });

  it('should be able to click', function() {
    calculator.numberClick(7)
    assert.equal(7, calculator.runningTotal)
  });

  it('should let the operator check work', function() {
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(2, calculator.runningTotal)
  });

  it('should clear the total at the time and put to zero', function() {
    calculator.runningTotal = '6'
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal)
  });


});
