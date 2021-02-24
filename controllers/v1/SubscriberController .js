
import autoBind from 'auto-bind';
import secrets from '../../config/secrets';
import SubscriberService from '../../services/SubscriberService';
import BaseController from './BaseController';


class SubscriberController extends BaseController{
    constructor(){
        super();
        autoBind(this);
        this.subscriberService = new SubscriberService();
    }
    /**
   * @param {Object} req 
   * @param {Object} res 
   * @api {post} /api/v1/subscribe Subscribe to a topic
   * @apiName Subscribe to a topic
   * @apiGroup Subscriber
   * @apiParam {string} url url of the Subscriber 
   * @apiParam {string} topic  topic to subscribe to
   */
    async SubscribeToTopic (req, res){
        try{

            const subscribeResponse = await this.subscriberService.subscribe(req.body);
            
            return super.success(res, subscribeResponse, 'Subscribed Successfully');
        
        }catch(error){
            const message =  error.message || 'Something went wrong';
            return super.actionFailure(res, message);
        }

    }

}

export default  SubscriberController;