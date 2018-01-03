/*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License. See License.txt in the project root for
* license information.
*/

require('dotenv').config({path:'test/services/botFramework/.env'});

const Connector = require('../../../lib/services/botFramework/Connector/lib/botConnector');
const Credentials = require('ms-rest').TokenCredentials;

var SuiteBase = require('../../framework/suite-base');
var should = require('should');

var requiredEnvironment = [
  'CLIENT_ID',
  'CLIENT_SECRET',
  'USER_ID',
  'BOT_ID',
  'HOST_URL'
];

const clientId = process.env['CLIENT_ID'];
const clientSecret = process.env['CLIENT_SECRET'];

const hostURL = process.env['HOST_URL'];

const user = {
  id: process.env['USER_ID']
};
const bot = {
  id: process.env['BOT_ID']
};

const testPrefix = 'botFramework-connector-tests';
var suite;
var client;

describe('Bot Framework Connector', function() {
  before(function (done) {
    suite = new SuiteBase(this, testPrefix, requiredEnvironment);
    suite.setupSuite(function () {
      credentials = new Credentials('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ing0Nzh4eU9wbHNNMUg3TlhrN1N4MTd4MXVwYyIsImtpZCI6Ing0Nzh4eU9wbHNNMUg3TlhrN1N4MTd4MXVwYyJ9.eyJhdWQiOiJodHRwczovL2FwaS5ib3RmcmFtZXdvcmsuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDZkNDk0MjAtZjM5Yi00ZGY3LWExZGMtZDU5YTkzNTg3MWRiLyIsImlhdCI6MTUxNTAwODM3NCwibmJmIjoxNTE1MDA4Mzc0LCJleHAiOjE1MTUwMTIyNzQsImFpbyI6IlkyTmdZTmpZMzhFK1ZTaU8rOXFPZ25jQko5Y3RCUUE9IiwiYXBwaWQiOiJiZTVhOGM2Ny03NWRkLTQyNGEtYjdkYS03NDYxNDFlMTFmN2YiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNmQ0OTQyMC1mMzliLTRkZjctYTFkYy1kNTlhOTM1ODcxZGIvIiwidGlkIjoiZDZkNDk0MjAtZjM5Yi00ZGY3LWExZGMtZDU5YTkzNTg3MWRiIiwidXRpIjoiUG9mSG50bXhfa3FWQ00zT3pGSUFBQSIsInZlciI6IjEuMCJ9.SZI1tRZiexPsGiGVAcZyOM7ccmkXmdUVJyaMrQgUjP4-yTZz4_ON1k_wgALo8ZpQStYctSOe4kE6DGqUzYEZcla8tA5ISt3iT8r6dlnc8dD3gnwYx5iKVqzmHJmVNo4gs5wTGe0HsnDt7gO9s4O90RA6fA_lj-uh7xIQ-vxEnN-OB9kXuud7jgqH3krLQHaRCzrZY1_1a9H18owFNJf7u-7LDZ_iU6a25VZS9Xl1IT-mqeQ2vtc2HtGgnGlzWpEgWNuDWWziZT9o2QFybzsHNRt1PzU3a57GhP1UNWF67oK8AvwK_sh6hLJTLZtausKd60124IQwPpqJgdtS01zOaQ');
      client = new Connector(credentials, hostURL);
    });
    done();
  });
  
  after(function (done) {
    suite.teardownSuite(done);
  });
  
  beforeEach(function (done) {
    suite.setupTest(done);
  });
  
  afterEach(function (done) {
    suite.baseTeardownTest(done);
  });
  
  describe('Connector SDK', function() {
    it('should return a valid conversation ID', function(done) {
      let params = {
        bot: bot,
        members: [ user ],
        activity: {
          type: 'message',
          text: 'nodeJS test',
          from: bot,
          recipient: user
        }
      }
      client.conversations.createConversation(params).then((result) => {
        should.exist(result.id);
      }).then(done, done);
    });
  });
});
