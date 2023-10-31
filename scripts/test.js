let chai = require('chai');
let expect = chai.expect;
let Cart = require('./cart');

describe("test add func", function() {

    it("adds", function() {
        assert.equal(add(2, 3), 5);
    });
});


mocha.run();
