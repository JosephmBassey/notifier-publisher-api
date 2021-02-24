import HttpClient from '../helpers/httpClient';
import autoBind from 'auto-bind';
import SubscriberModel from '../models/v1/SubscriberModel';
import BaseService from './BaseService';

class PublisherService extends BaseService{

    constructor(){
        super();
        autoBind(this);
        this.httpClient =  new HttpClient();
    }

    publish({topic, data}){
        return new Promise(async(resolve, reject)=>{
            try {

            
                const subscribers = await SubscriberModel.find({topic});
                if (!subscribers) {
                    return resolve(subscribers.length);    
                }
                await Promise.allSettled(
                    subscribers.map( subscriber => this.httpClient.post(subscriber.url, {topic, data}))
                );
                return resolve(subscribers.length);

            } catch (err) {
                return reject(err);
            }
        });
    }
}

export default PublisherService;