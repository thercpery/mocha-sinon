let chai = require("chai");
let expect = chai.expect;

const YourClass = require("../src/yourClass");
const yourObj = new YourClass();

describe("Test suite", function() {
  it("should return sum of the numbers", function() {
    expect(yourObj.addSubtract(1, 2, true)).to.equal(3);
  });
});

// Root level hook
beforeEach(function() {
  console.log("------------ Root level hook in yourClass.spec.js");
});