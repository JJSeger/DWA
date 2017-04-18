/**
 * Created by JuddHome on 4/17/17.
 */


// These are the global dependencies
const expect = require('chai').expect;
const util = require('../src/debug');
require('mocha-sinon');

process.env.DEBUG= true;

describe ('NX-Utility-Tool', (done) => {
    beforeEach(function() {
        this.sinon.stub(console, 'log');
        this.sinon.stub(console, 'error');
        this.sinon.stub(console, 'warn');
    });

it('We are currently checking for running tests', (done) => {
    util.debug('Error', 'error');
expect(console.error.calledOnce).to.be.true;
done();
});

it('We are currently checking for warnings', (done) => {
    util.debug('Warning!', 'warn');
expect(console.warn.calledOnce).to.be.true;
done();
});

it('All tests have been completed:', (done) => {
    util.debug('testing', 'log');
expect(console.log.calledOnce).to.be.true;
done();
});
});
