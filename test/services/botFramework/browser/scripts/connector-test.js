define(function (require) {
    const should = require('chai').should();
    const Credentials = require('token-credentials');
    const Connector = require('botframework-connector');
    const Buffer = require('buffer').Buffer;
    
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ing0Nzh4eU9wbHNNMUg3TlhrN1N4MTd4MXVwYyIsImtpZCI6Ing0Nzh4eU9wbHNNMUg3TlhrN1N4MTd4MXVwYyJ9.eyJhdWQiOiJodHRwczovL2FwaS5ib3RmcmFtZXdvcmsuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDZkNDk0MjAtZjM5Yi00ZGY3LWExZGMtZDU5YTkzNTg3MWRiLyIsImlhdCI6MTUxNTUyNTEzNiwibmJmIjoxNTE1NTI1MTM2LCJleHAiOjE1MTU1MjkwMzYsImFpbyI6IlkyTmdZSmh0UHRraTYwWjVweDJMeVZ0dTk3MjdBUT09IiwiYXBwaWQiOiJiZTVhOGM2Ny03NWRkLTQyNGEtYjdkYS03NDYxNDFlMTFmN2YiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNmQ0OTQyMC1mMzliLTRkZjctYTFkYy1kNTlhOTM1ODcxZGIvIiwidGlkIjoiZDZkNDk0MjAtZjM5Yi00ZGY3LWExZGMtZDU5YTkzNTg3MWRiIiwidXRpIjoiaXA4akN4NnFXRUNrVkExVVBzb1lBQSIsInZlciI6IjEuMCJ9.aIhRnNJcLHFaC5c5d_CZyuxki4NTa7h_FhADZ6HKjglMdyqK90oEyQMmmLCovUaBZly84CT23mdzY0oDy0WUel72uu1N0jBYK5jyv9SSxfZK7Om-NfjR2G5NpqAhO1VhgMgWonkO293v-kPzCD3kx6PgjWI-6jUL3prkrkMLC4nc8Woicn_3_kctQ7Yu324CO7cWNqOE5zZAJFO8HAouZFzuAd6porv6KGZMq4JK-GydVPExb9LA-wPvOXA0WOxRKmpaZdoFIlmYbN11PuG9hAfHQ8ePsoTali9Phr7BWRRQsglQ5qleJcifsv4qQyauARdIQGJX7DFccvJ29Iu9GQ';
    
    const hostURL = 'http://localhost:8080/https://slack.botframework.com';
    const userId = 'U3Z9ZUDK5:T03CWQ0QB';
    const botId = 'B21S8SG7J:T03CWQ0QB';
    
    const user = {
        id: userId
    };
    
    const bot = {
        id: botId
    };
    
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
        originalBase64: new Buffer('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', 'utf8')
    });
    
    var readStreamToBuffer = function(stream, callback) {
        var buffer = [];
        stream.on('data', d => buffer.push(d));
        stream.on('end', () => callback(null, Buffer.concat(buffer)));
        stream.on('error', (err) => callback(error, null));
    };
    
    var credentials = new Credentials(token);
    var client = new Connector(credentials, hostURL);
    
    describe('Conversations', function() {
        this.timeout(10000);
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
                    result.some(member => member.id === user.id).should.be.true;
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
                    result.some(member => member.id === user.id).should.be.true;
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
        this.timeout(10000);
        describe('GetAttachmentInfo', function() {
            it('should return a valid attachmentId', function(done) {
                var attachment = createAttachment();
                client.conversations.createConversation(createConversation())
                .then((result) => client.conversations.uploadAttachment(result.id, attachment))
                .then((result) => client.attachments.getAttachmentInfo(result.id))
                .then((result) => {
                    result.name.should.be.equal(attachment.name);
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
                    result.toString().should.be.equal(attachment.originalBase64.toString());
                })
                .then(done, done);
            });
        });
    });
});