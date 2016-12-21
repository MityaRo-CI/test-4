var client = require('webdriverio')
var assert = require('assert')
var should = require('should');

var branchName = process.env.TRAVIS_BRANCH || 'http://myurl.com'
var branchUrl = 'http://ci-workshop-test-1-' + branchName + '.herokuapp.com'
    
describe('x', function() {
  describe('1', function() {
    it('Title', function() {
        browser.url(branchUrl)
        browser.getText('h1').should.equal('My Site')
    });
  });
});
