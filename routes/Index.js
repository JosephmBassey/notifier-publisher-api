let express = require('express');
let routes = express.Router();

//Creating the Index Route
routes.get('/', (req, res)=>{
    res
        .status(200)
        .send(
            '<br/><center><p>Notification Service API (Publisher Server) Version 1.0</p></center>'
        );
});


//exporting Route
module.exports = routes;