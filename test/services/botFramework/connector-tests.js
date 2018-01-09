/*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License. See License.txt in the project root for
* license information.
*/

require('dotenv').config({path:'test/services/botFramework/.env'});
var fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap);
}

const Connector = require('../../../lib/services/botFramework/Connector/lib/botConnector');
const Credentials = require('../../../lib/services/botFramework/Connector/lib/customs/microsoftAppCredentials');

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

var createActivity = () => ({
  type: 'message',
  text: 'test activity',
  recipient: user,
  from: bot
});

var createConversation = () => ({
  members: [ user ],
  bot: bot
});

var createAttachment = () => ({
  name: 'bot-framework.png',
  type: 'image/png',
  originalBase64: base64_encode('./test/services/botFramework/bot-framework.png')
});

var readStreamToBuffer = function(stream, callback) {
  var buffer = [];
  stream.on('data', d => buffer.push(d));
  stream.on('end', () => callback(null, Buffer.concat(buffer)));
  stream.on('error', (err) => callback(error, null));
}

describe('Bot Framework Connector SDK', function() {
  before(function (done) {
    suite = new SuiteBase(this, testPrefix, requiredEnvironment);
    suite.setupSuite(function () {
      credentials = new Credentials.MicrosoftAppCredentials({
        appId: clientId,
        appPassword: clientSecret
      });
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
  
  describe('Conversations', function() {
    describe('CreateConversation', function() {
      it('should return a valid conversation ID', function(done) {
        var params = createConversation()
        params.activity = createActivity();
        
        client.conversations.createConversation(params)
        .then((result) => should.exist(result.id))
        .then(done, done);
      });
      
      it('should fail with invalid bot', function(done) {
        var params = createConversation();
        params.bot = { id: 'invalid-id' };
        
        client.conversations.createConversation(params).then((result) => {
          should.fail();
        }, (error) => {
          should.exist(error.code);
          should.exist(error.message);
        }).then(done, done);
      });
      
      it('should fail without members', function(done) {
        var params = createConversation();
        params.members = [];
        
        client.conversations.createConversation(params).then((result) => {
          should.fail();
        }, (error) => {
          should.exist(error.code);
          should.exist(error.message);
        }).then(done, done);
      });
      
      it('should fail with bot member', function(done) {
        var params = createConversation();
        params.members = [ bot ];
        
        client.conversations.createConversation(params).then((result) => {
          should.fail();
        }, (error) => {
          should.exist(error.code);
          should.exist(error.message);
        }).then(done, done);
      });
    });
    
    describe('GetConversationMembers', function() {
      it('should have the userId', function(done) {
        var params = createConversation();
        
        client.conversations.createConversation(params)
        .then((result) => client.conversations.getConversationMembers(result.id))
        .then((result) => {
          result.should.matchAny((member) => member.id === user.id);
        })
        .then(done, done);
      });
      
      it('should fail with invalid conversationId', function(done) {
        var params = createConversation();
        
        client.conversations.createConversation(params)
        .then((result) => client.conversations.getConversationMembers(result.id.concat('M')))
        .then((result) => {
          should.fail();
        }, (error) => {
          should.exist(error.code);
          should.exist(error.message);
        })
        .then(done, done);
      });
    });
    
    describe('SendToConversation', function() {
      it('should return a valid activityId', function(done) {
        var params = createConversation();
        
        client.conversations.createConversation(params)
        .then((result) => client.conversations.sendToConversation(result.id, createActivity()))
        .then((result) => {
          should.exist(result.id);
        })
        .then(done, done);
      });
      
      it('should fail with invalid conversationId', function(done) {
        var params = createConversation();
        
        client.conversations.createConversation(params)
        .then((result) => client.conversations.sendToConversation(result.id.concat('M'), createActivity()))
        .then((result) => {
          should.fail();
        }, (error) => {
          should.exist(error.code);
          should.exist(error.message);
        })
        .then(done, done);
      });
      
      it('should send a Hero card', function(done) {
        var params = createConversation();
        var activity = createActivity();
        activity.attachments = [
          {
            contentType: 'application/vnd.microsoft.card.hero',
            content: {
              title: 'A static image',
              subtitle: 'JPEG image',
              images: [
                { url: 'https://docs.microsoft.com/en-us/bot-framework/media/designing-bots/core/dialogs-screens.png'}
              ]
            }
          }
        ];
        
        client.conversations.createConversation(params)
        .then((result) => client.conversations.sendToConversation(result.id, activity))
        .then((result) => {
          should.exist(result.id);
        })
        .then(done, done);
      });
    });
    
    describe('GetActivityMembers', function() {
      it('should have the userId', function(done) {
        var params = createConversation();
        params.activity = createActivity();
        
        client.conversations.createConversation(params)
        .then((result) => client.conversations.getActivityMembers(result.id, result.activityId))
        .then((result) => {
          result.should.matchAny((member) => member.id === user.id);
        })
        .then(done, done);
      });
      
      it('should fail with invalid conversatoinId', function(done) {
        var params = createConversation();
        params.activity = createActivity();
        
        client.conversations.createConversation(params)
        .then((result) => client.conversations.getActivityMembers(result.id.concat('M'), result.activityId))
        .then((result) => {
          should.fail();
        }, (error) => {
          should.exist(error.code);
          should.exist(error.message);
        })
        .then(done, done);
      });
    });
    
    describe('ReplyToActivity', function() {
      it('should return a valid activityId', function(done) {
        var params = createConversation();
        var reply = createActivity();
        reply.text = 'reply';
        
        var conversationId = '';
        
        client.conversations.createConversation(params)
        .then((result) => {
          conversationId = result.id;
          return client.conversations.sendToConversation(result.id, createActivity());
        })
        .then((result) => client.conversations.replyToActivity(conversationId, result.id, reply))
        .then((result) => {
          should.exist(result.id);
        })
        .then(done, done);
      });
      
      it('should fail with invalid conversationId', function(done) {
        client.conversations.createConversation(createConversation())
        .then((result) => client.conversations.sendToConversation(result.id, createActivity()))
        .then((result) => client.conversations.replyToActivity('invalid-id', result.id, createActivity()))
        .then((result) => {
          should.fail();
        }, (error) => {
          should.exist(error.code);
          should.exist(error.message);
        })
        .then(done, done);
      });
      
    });
    
    describe('DeleteActivity', function() {
      it('should delete the activity', function(done) {
        var conversation = createConversation();
        conversation.activity = createActivity();
        client.conversations.createConversation(conversation)
        .then((result) => client.conversations.deleteActivity(result.id, result.activityId))
        .then(done, done);
      });
      
      it('should fail with invalid conversationId', function(done) {
        client.conversations.createConversation(createConversation())
        .then((result) => client.conversations.sendToConversation(result.id, createActivity()))
        .then((result) => client.conversations.deleteActivity('invalid-id', result.id))
        .then((result) => {
          should.fail();
        }, (error) => {
          should.exist(error.code);
          should.exist(error.message);
        })
        .then(done, done);
      });
      
    });
    
    describe('UpdateActivity', function() {
      it('should return a valid activityId', function(done) {
        var conversationId = '';
        var updatedActivity = createActivity();
        updatedActivity.text = 'updated activity';
        
        client.conversations.createConversation(createConversation())
        .then((result) => {
          conversationId = result.id;
          return client.conversations.sendToConversation(result.id, createActivity());
        })
        .then((result) => {
          updatedActivity.id = result.id;
          return client.conversations.updateActivity(conversationId, result.id, updatedActivity)
        })
        .then((result) => {
          should.exist(result.id);
        })
        .then(done, done);
      });
      
      it('should fail with invalid conversationId', function(done) {
        client.conversations.createConversation(createConversation())
        .then((result) => client.conversations.sendToConversation(result.id, createActivity()))
        .then((result) => client.conversations.updateActivity('invalid-id', result.id, createActivity()))
        .then((result) => {
          should.fail();
        }, (error) => {
          should.exist(error.code);
          should.exist(error.message);
        })
        .then(done, done);
      });
      
    });
    
    describe('UploadAttachment', function() {
      it('should return a valid attachmentId', function(done) {
        client.conversations.createConversation(createConversation())
        .then((result) => client.conversations.uploadAttachment(result.id, createAttachment()))
        .then((result) => {
          should.exist(result.id);
        })
        .then(done, done);
      });
      
    });
    
  });
  
  describe('Attachments', function() {
    describe('GetAttachmentInfo', function() {
      it('should return a valid attachmentId', function(done) {
        var attachment = createAttachment();
        client.conversations.createConversation(createConversation())
        .then((result) => client.conversations.uploadAttachment(result.id, attachment))
        .then((result) => client.attachments.getAttachmentInfo(result.id))
        .then((result) => {
          result.name.should.be.exactly(attachment.name);
        })
        .then(done, done);
      });
      
    });
    
    describe('GetAttachment', function() {
      it('should return valid attachment', function(done) {
        var attachment = createAttachment();
        var attachmentId = '';
        client.conversations.createConversation(createConversation())
        .then((result) => client.conversations.uploadAttachment(result.id, attachment))
        .then((result) => {
          attachmentId = result.id;
          return client.attachments.getAttachmentInfo(result.id);
        })
        .then((result) => new Promise((resolve, reject) => {
          client.attachments.getAttachment(attachmentId, result.views[0].viewId, (err, result) => {
            if (err) reject(err);
            readStreamToBuffer(result, (err, buffer) => {
              if (err) reject(err);
              resolve(buffer);
            });
          });
        }))
        .then((result) => {
          result.toString().should.be.exactly(attachment.originalBase64.toString());
        })
        .then(done, done);
      });
    });
  });
});
