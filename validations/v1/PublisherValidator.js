import Helpers from '../../helpers/helper';

/**
 * Defines methods for validating publisher functions
 *
 * @class PublisherValidator
 */
class PublisherValidator extends Helpers{
  
    constructor(){
        super();
    }
    /**
   * validates publisher data
   * @param {object} req
   * @param {object} res
   * @param {callback} next
   */
    async validatePublisherPayload(req, res, next) {
        req.checkBody('data', 'Data field is required.').trim().escape().notEmpty();

        req.checkBody('topic', 'Topic field is required.').trim().escape().notEmpty();

        let errors = req.validationErrors();

        if (errors) {
            return super.validationFailed(res, super.extractErrors(errors));
        }    

        const payload = Object.keys(req.body.data).length >= 1 && req.body.constructor === Object;

        req.checkBody('data', 'Expected data to be a non empty Object')
            .custom(() => {
                return payload;
            });
        errors = req.validationErrors();

        if (errors) {
            return super.validationFailed(res, super.extractErrors(errors));
        }  
        return next();
    }

}
export default PublisherValidator;