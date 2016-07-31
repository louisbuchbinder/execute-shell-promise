const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

const execute = require('./execute-shell-promise');

describe('Execute Shell Promise Unit Tests', () => {
  it('Should return a promise on invocation', () => {
    return expect(execute()).to.be.an.instanceOf(Promise);
  });
  it('Should resolve the stdout of the shell command', () => {
    return expect(execute('printf "Hello World"')).to.eventually.equal('Hello World');
  });
  it('Should reject an error within the child process', () => {
    return expect(execute('exit 1').catch(() => true)).to.eventually.equal(true);
  });
});
