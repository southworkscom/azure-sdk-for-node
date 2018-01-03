require.config({
  baseUrl: 'scripts',
  paths: {
    'jquery': 'lib/jquery',
    'mocha': 'node_modules/mocha/mocha',
    'chai': 'node_modules/chai/chai',
    'token-credentials': 'lib/token-credentials',
    'botframework-connector': 'lib/botframework-connector'
  },
  shim: {
    'mocha': { exports: 'mocha' }
  }
});

define(function (require) {
  var chai = require('chai');
  var mocha = require('mocha');
  require('jquery');

  // Chai
  var should = chai.should();

  mocha.setup('bdd');

  require([
    './scripts/connector-test.js',
  ], function (require) {
    mocha.run();
  });

});