/* eslint-disable no-param-reassign, class-methods-use-this */
const axios = require('axios');
const secrets = require('../config/secrets');

class HttpClient {
    constructor(baseURL = '', headers = {}) {
        this.baseURL = baseURL;
        this.client = axios.create({
            baseURL: baseURL,
            timeout: 30000,
            headers
        });
    }

    rejectError(reject, err) {
        if (err.response) {
            err.message = err.response.data.message || err.response.data || err.response;
            err.code = err.response.status;
            err.name = err.response.statusText;
        }
        return reject(err);
    }

    get(url, query = {}, headers = {}) {
        return new Promise(async(resolve, reject) => {
            try {
                if (!url) {
                    return reject('GET URL is undefined');
                }
                const response = await this.client.get(`${this.baseURL}${url}`, {headers});
                const data = response.data.data || response.data;

                return resolve(data);
            } catch (err) {
                return this.rejectError(reject, err);
            }
        });
    }

    post(url, payload = {}, headers = {}) {
        return new Promise(async(resolve, reject) => {
            try {
                if (!url) {
                    return reject('POST URL is undefined');
                }
                const response = await this.client.post(
                    this.baseURL + url,
                    payload,
                    {headers}
                );

                const data = response.data.data || response.data;

                return resolve(data);
            } catch (err) {
                return this.rejectError(reject, err);
            }
        });
    }

    put(url, payload, headers = {}) {
        return new Promise(async(resolve, reject) => {
            try {
                if (!url) {
                    return reject('PUT URL is undefined');
                }
                const response = await this.client.put(
                    this.baseURL + url,
                    payload,
                    {headers}
                );
                const data = response.data.data || response.data;

                return resolve(data);
            } catch (err) {
                return this.rejectError(reject, err);
            }
        });
    }

    delete(url, headers = {}) {
        return new Promise(async(resolve, reject) => {
            try {
                if (!url) {
                    return reject('DELETE URL is undefined');
                }
                const response = await this.client.delete(
                    this.baseURL + url,
                    {headers}
                );
                const data = response.data.data || response.data;

                return resolve(data);
            } catch (err) {
                return this.rejectError(reject, err);
            }
        });
    }
    patch(url, payload, headers = {}) {
        return new Promise(async(resolve, reject) => {
            try {
                if (!url) {
                    return reject('PATCH URL is undefined');
                }
                const response = await this.client.patch(
                    this.baseURL + url,
                    payload,
                    {headers}
                );
                const data = response.data.data || response.data;

                return resolve(data);
            } catch (err) {
                return this.rejectError(reject, err);
            }
        });
    }
}

module.exports = HttpClient;
