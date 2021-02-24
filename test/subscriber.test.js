const request = require('./request');

const url = '/api/v1/subscribe';

// This subscriber server should be running 
const subscriberUrl = 'http://127.0.0.1:3000/api/v1/messages';
const topic  = 'topic';

describe('Subscribers Endpoint', ()=>{
    it('Should successfully subscribe a url  to topic', async done => {
        const response = await request.post(url).send({url: subscriberUrl, topic});
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
        done();
    });
});