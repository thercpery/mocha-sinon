let chai = require("chai");
let expect = chai.expect;

describe("Dummy test suite", () => {
    it("Dummy test case", () => {
        expect(true).to.be.true;
    });
});

beforeEach(() => console.log("===== ROOT LEVEL HOOK ====="));