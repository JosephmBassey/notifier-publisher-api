import express from 'express';
import PublisherController  from '../../controllers/v1/PublisherController';
import PublisherValidator from '../../validations/v1/PublisherValidator';

const  routes = express.Router();
const {validatePublisherPayload} =  new PublisherValidator();
const {publishToSubscribers} = new PublisherController();

routes.post('/', validatePublisherPayload, publishToSubscribers);

export default routes;
