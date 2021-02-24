import autoBind from 'auto-bind';
import SubscriberModel from '../models/v1/SubscriberModel';
import BaseService from './BaseService';
class SubscriberService extends BaseService{

    constructor(){
        super();
        autoBind(this);
    }

    subscribe({topic, url}){
        return new Promise(async(resolve, reject)=>{
            try {
                await SubscriberModel.create({topic, url})
                
                return resolve({topic, url});

            } catch (err) {
                return reject(err);
            }
        });
    }
}

export default SubscriberService;