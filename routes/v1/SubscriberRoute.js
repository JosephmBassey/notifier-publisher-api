import express from 'express';
import SubscriberController  from '../../controllers/v1/SubscriberController ';
import SubscriberValidator from '../../validations/v1/SubscriberValidator';

const  routes = express.Router();
const {validateSubscriberPayload, checkIfAlreadySubscribeToTopic} =  new SubscriberValidator();
const {SubscribeToTopic} = new SubscriberController();

routes.post('/', validateSubscriberPayload, checkIfAlreadySubscribeToTopic, SubscribeToTopic);

export default routes;

