// EXTERNAL MODULES
const chai = require("chai");
const sinon = require("sinon");
const chaiaspromised = require("chai-as-promised");
const nock = require("nock");
// INTERNAL MODULES
const MyClass = require("../src/myClass");
const myObj = new MyClass();
const expect = chai.expect;
chai.use(chaiaspromised);

describe("[001] Test Suite", () => {
    after(() => {

    });
    before(() => {

    });
    
    afterEach(() => {});
    beforeEach(() => sinon.restore());

    it("Test the add method", () => {
        return expect(myObj.add(1, 2)).to.be.equal(3);
    });

    it("spy the add method", () => {
        let spy = sinon.spy(myObj, "add");
        let arg1 = 10, arg2 = 20;
        myObj.callAnotherFunction(arg1, arg2);
        // sinon.assert.calledOnce(spy);
        // sinon.assert.calledTwice(spy);
        expect(spy.calledOnce).to.be.true;
        // expect(spy.calledTwice).to.be.true;
        expect(spy.calledWith(arg1, arg2)).to.be.true;
        // spy.restore();
    });

    it("copy spy the add method", () => {
        let spy = sinon.spy(myObj, "add");
        let arg1 = 10, arg2 = 20;
        myObj.callAnotherFunction(arg1, arg2);
        // sinon.assert.calledOnce(spy);
        // sinon.assert.calledTwice(spy);
        expect(spy.calledOnce).to.be.true;
        // expect(spy.calledTwice).to.be.true;
        expect(spy.calledWith(arg1, arg2)).to.be.true;
    });

    it("spy the callback", () => {
        let callback = sinon.spy();
        myObj.callTheCallback(callback);
        expect(callback.calledOnce).to.be.true;
        // expect(callback.calledOnce).to.be.false;
    });

    it("mock the sayHello method", () => {
        let mock = sinon.mock(myObj);
        let expectation = mock.expects("sayHello");
        expectation.exactly(1);
        expectation.withArgs("Hello world");
        myObj.callAnotherFunction(10, 20);
        mock.verify();
    });
});

describe("[002] Test suite for stub", () => {
    it("Stub the add method", () => {
        let stub = sinon.stub(myObj, "add");
        stub.withArgs(10, 20)
        .onFirstCall().returns(100)
        .onSecondCall().returns(200);
        expect(myObj.callAnotherFunction(10, 20)).to.be.equal(100);
        expect(myObj.callAnotherFunction(10, 20)).to.be.equal(200);
    });
});

describe("[003] Test the promise", () => {
    it("Promise test case", function() {
        this.timeout(0);
        // myObj.testPromise().then((result) => {
        //     expect(result).to.be.equal(6);
        //     // expect(result).to.be.equal(61);
        //     // expect(false).to.be.false;
        //     done();
        // });
        return expect(myObj.testPromise()).to.eventually.equal(6);
    });
});

describe("XHR Test Suite", () => {
    it("Mock and stub XHR call", function(done){
        let response = "E-Commerce App: I'll rewrite the app I've previously created using Knex.JS because I'm bored.";
        const scope = nock("http://localhost:5000")
        .get("/")
        .reply(200, response);
        myObj
        .xhrFunction()
        .then((result) => {
            // console.log(result);
            expect(result).to.be.equal(response);
            done();
        })
        .catch(err => done(new Error("Test case failed")));
    });
});