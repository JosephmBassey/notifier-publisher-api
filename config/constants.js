const HTTP_NOT_FOUND = 404;
const HTTP_OK = 200;
const HTTP_UNPROCESSABLE_ENTITY = 422;
const HTTP_UNAUTHORIZED = 401;
const HTTP_BAD_REQUEST = 400;
const HTTP_FORBIDDEN = 403;
const HTTP_CONFLICT= 409;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const FAILED = 'failure';
const SUCCESS = 'success';

module.exports = {
    HTTP_BAD_REQUEST, HTTP_CONFLICT, HTTP_FORBIDDEN, 
    HTTP_NOT_FOUND, HTTP_OK, HTTP_UNAUTHORIZED, HTTP_INTERNAL_SERVER_ERROR,
    HTTP_UNPROCESSABLE_ENTITY, FAILED, SUCCESS
};