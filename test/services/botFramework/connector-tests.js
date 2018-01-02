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
      credentials = new Credentials('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ing0Nzh4eU9wbHNNMUg3TlhrN1N4MTd4MXVwYyIsImtpZCI6Ing0Nzh4eU9wbHNNMUg3TlhrN1N4MTd4MXVwYyJ9.eyJhdWQiOiJodHRwczovL2FwaS5ib3RmcmFtZXdvcmsuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDZkNDk0MjAtZjM5Yi00ZGY3LWExZGMtZDU5YTkzNTg3MWRiLyIsImlhdCI6MTUxNDkyNzE0NiwibmJmIjoxNTE0OTI3MTQ2LCJleHAiOjE1MTQ5MzEwNDYsImFpbyI6IlkyTmdZTWhjKzUzcGxLZjhTNU4xQnA5ZXZPeVdCd0E9IiwiYXBwaWQiOiJiZTVhOGM2Ny03NWRkLTQyNGEtYjdkYS03NDYxNDFlMTFmN2YiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNmQ0OTQyMC1mMzliLTRkZjctYTFkYy1kNTlhOTM1ODcxZGIvIiwidGlkIjoiZDZkNDk0MjAtZjM5Yi00ZGY3LWExZGMtZDU5YTkzNTg3MWRiIiwidXRpIjoiTXVuM19DbjNNMHFLWHphRlJ0RmpBQSIsInZlciI6IjEuMCJ9.B4l6J1FVZp5_gNG26bjB3p5Djxpb7G2jgHtbm5B1wpdvqK0RwWqtpv4An6wO1j7SUG0SAKh0XFIAJ-UNBFm0xw_GIDRJiLhMapVVL_Fg-2Xk_R0Wcwitpp9zm3iZJeLhP1mtg0CI-6-7QUf_0nk_Za2_XIWLPDRce-x1IPPsLXCRTgmwP161wKdq9GHnh_xyoQRBS9PPEhcK_juiWRTHSB-Raryr7XwoGkGg_-scXRNYvigWLeEu7UMw424XSXZ19b4P16aH94NTllSjyKYnWo5YcpPsBlpZQ4ymGUCRSMkXVAaY6mXcb5FMRQAPja9OA1UuiClkQ72aLAgRKXPjzQ');
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
      client.conversations.createConversation(params, function(err, result, request, response){
        should.exist(result.id);
        done();
      });
    });
  });
});
