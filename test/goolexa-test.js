const expect = require('chai').expect;

const goolexa = require('../lib/goolexa');

describe('goolexa', function() {
  describe('#googleToAlexa', function() {
    it('converts a google message to an alexa message', function() {
      let googleData = goolexa.googleToAlexa(require('./fixtures/google-message.json'));
      expect(googleData).to.deep.equal({
        session: {
          sessionId: "10893294-e7dc-4747-9775-e780a58f545b",
          application: {
            applicationId: "api.ai"
          }
        },
        request: {
          type: "IntentRequest",
          requestId: "e0863aa1-76be-47f8-b986-2ea913030eb6",
          locale: "en-US",
          timestamp: "2017-03-19T19:25:41.505Z",
          intent: {
            name: "AddNote",
            slots: {
              Name: {
                name: "Name",
                value: "Nina"
              }
            }
          }
        }
      });
    });
  });

  describe('#stripAlexa', function() {
    it('strips fields from alexa message', function() {
      let stripped = goolexa.stripAlexa(require('./fixtures/alexa-message.json'));
      expect(stripped).to.deep.equal({
        
      });
    });
  });

});
