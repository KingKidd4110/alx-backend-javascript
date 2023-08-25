const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    beforeEach("Set Spy for each test", function() {
        sinon.spy(console, "log");
    });
    afterEach("Restore spy", function() {
        console.log.restore();
    });
    it("check that console.log is called with the right arg", function() {
        sendPaymentRequestToApi(100, 20);

        expect(console.log.withArgs("The total is 120").calledOnce).to.be.true;
    });
    it("check that console.log is called with the right arg", function() {
        sendPaymentRequestToApi(10, 10);

        expect(console.log.withArgs("he total is: 20").calledOnce).to.be.true;
    });

});
