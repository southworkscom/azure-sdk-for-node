define(function (require) {
    const should = require('chai').should();
    const Credentials = require('token-credentials');
    const Connector = require('botframework-connector');
    
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ing0Nzh4eU9wbHNNMUg3TlhrN1N4MTd4MXVwYyIsImtpZCI6Ing0Nzh4eU9wbHNNMUg3TlhrN1N4MTd4MXVwYyJ9.eyJhdWQiOiJodHRwczovL2FwaS5ib3RmcmFtZXdvcmsuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDZkNDk0MjAtZjM5Yi00ZGY3LWExZGMtZDU5YTkzNTg3MWRiLyIsImlhdCI6MTUxNTAwNzMyNiwibmJmIjoxNTE1MDA3MzI2LCJleHAiOjE1MTUwMTEyMjYsImFpbyI6IlkyTmdZTGhoRjF5cW1mOTFsdk5CYmZPSS8yZVlBUT09IiwiYXBwaWQiOiJiZTVhOGM2Ny03NWRkLTQyNGEtYjdkYS03NDYxNDFlMTFmN2YiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNmQ0OTQyMC1mMzliLTRkZjctYTFkYy1kNTlhOTM1ODcxZGIvIiwidGlkIjoiZDZkNDk0MjAtZjM5Yi00ZGY3LWExZGMtZDU5YTkzNTg3MWRiIiwidXRpIjoiOU5JY1hlY1N5MFdDd0ZPTWZNZHpBQSIsInZlciI6IjEuMCJ9.Z57TW2pIAZtk7I2YNCJieJCLU1rRIj0U4su-BxPgzusDfVejfOuoQxydEung5GUIZNCdr5XA2q5eZ5Sq5CnArx4141iemQGUaz59NRbyNzs7Ija8JUTFie_M7O7cKjcL4WWhXRT6BhOuI_mRg6cip4XO_259_HdenT-_rwEKSIu68erk0YauYkBMDoVEzUBAV46HvlfiPxAhnL7faBIT8kqPmjpEevBIB0im5ZWiTewrMNadgMvBX3zwwSfhWMgzYLfRDippr9G6KmiuEnJpoya3asYXnVdXlfi9wQJvb34_A5jn4hM5WlDda3imtzBrJ8InPJctuQhJJLkMIXO7Cw';
    
    const hostURL = 'https://slack.botframework.com';
    const userId = 'U3Z9ZUDK5:T03CWQ0QB';
    const botId = 'B21S8SG7J:T03CWQ0QB';
    
    const user = {
        id: userId
    };
    
    const bot = {
        id: botId
    };
    
    var credentials = new Credentials(token);
    var client = new Connector(credentials, hostURL);
    
    describe('Bot Connector', function () {
        describe('Connector', function () {
            it('should return a valid conversation ID', function (done) {
                let params = {
                    bot: bot,
                    members: [user],
                    activity: {
                        type: 'message',
                        text: 'nodeJS test',
                        from: bot,
                        recipient: user
                    }
                };
                client.conversations.createConversation(params).then((result) => {
                    should.exist(result.id);
                }).then(done, done);
            });
        });
    });
});