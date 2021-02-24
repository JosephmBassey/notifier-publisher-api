// const { wrongUser, correctUser} = require('../__mocks__/user');

const request = require('./request');

const url = '/api/v1/publish';

const message = {message:'New Message from publisher', topic:'topic'};

describe('Publisher Endpoint', () =>{
    it('Should publish new message to topic', async done => {
        const response = await request.post(url).send(message);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
        done();
    
    });
});