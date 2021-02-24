
import autoBind from 'auto-bind';
import secrets from '../../config/secrets';
import PublisherService from '../../services/PublisherService';
import BaseController from './BaseController';


class PublisherController extends BaseController{
    constructor(){
        super();
        autoBind(this);
        this.publisherService = new PublisherService();
    }
    /**
   * @param {Object} req 
   * @param {Object} res 
   * @api {post} /api/v1/publish publish new message to topic
   * @apiName Publish new message to a topic
   * @apiGroup Publisher
   * @apiParam {string} message message to publish to subscribers
   * @apiParam {string} topic topic to publish to
   */
    async publishToSubscribers (req, res){
        try{

            const publishResponse = await this.publisherService.publish(req.body);

            return super.actionSuccess(res, `Published to ${publishResponse} subscribers in ${req.body.topic}`);
        
        }catch(error){
            const message =  error.message || 'Something went wrong';
            return super.actionFailure(res, message);
        }

    }

}

export default  PublisherController;