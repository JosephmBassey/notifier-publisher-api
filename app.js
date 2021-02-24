//Require all that's needed to power this App
//adding a few documentation
import express, { json, urlencoded } from 'express';
import expressValidator from 'express-validator';
import { join } from 'path';
import morgan from 'morgan';
import { createStream } from 'rotating-file-stream';
import PublisherRoute from './routes/v1/PublisherRoute';
import SubscriberRoute from './routes/v1/SubscriberRoute';
import './config/dbConnection';

// require('./database/models/index');
const app = express();

// create a rotating write stream
const accessLogStream = createStream('access.log', {
    interval: '1d', // rotate daily
    path: join(__dirname, 'logs')
});

app.use(json());
app.use(
    urlencoded({
        extended: true,
    }),
);
app.use(morgan('combined', { stream: accessLogStream }));
//allowing for serving static files
app.use(express.static('public'));

app.use(expressValidator());

// allow cors
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use('/apidoc', express.static(__dirname + '/public/'));

//default landing:
app.get('/apidoc', (req, res) => {
    res.sendFile(join(__dirname, 'public/', 'index.html'));
});


app.use('/api/v1/publish', PublisherRoute);
app.use('/api/v1/subscribe', SubscriberRoute);

//default landing:
app.all('*', (req, res) => {
    res.status(404).send({
        status: 'failed',
        status_code: 404,
        message: 'Resource not found'
    });
});


module.exports = app;


