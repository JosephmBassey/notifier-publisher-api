import Helpers from '../../helpers/helper';
import SubscriberModel from '../../models/v1/SubscriberModel';
/**
 * Defines methods for validating Subscriber methods
 *
 * @class SubscriberValidator
 */
class SubscriberValidator extends Helpers{

    constructor(){
        super();
    }
    /**
   * validates Subscriber data
   * @param {object} req
   * @param {object} res
   * @param {callback} next
   */
    async validateSubscriberPayload(req, res, next) {
        req.check('url', 'Subscriber url field is required').notEmpty().trim().isURL().withMessage('A valid URL is required');
        req.checkBody('topic', 'Topic field is required.').trim().escape().notEmpty();

        const errors = req.validationErrors();

        if (errors) {
            return super.validationFailed(res, super.extractErrors(errors));
        }    
        return next();
    }

    /**
   * validates if Subscriber already subscribe to same topic
   * @param {object} req
   * @param {object} res
   * @param {callback} next
   */
    async checkIfAlreadySubscribeToTopic(req, res, next) {
        const {url, topic} = req.body;

        const alreadySubscribe  = await SubscriberModel.findOne({url, topic});
        if (alreadySubscribe) {
            return super.badRequest(res, `Already subscribe to topic ${alreadySubscribe.topic}`);
        }
        return next();
    }

}
export default SubscriberValidator;