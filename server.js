'use strict';

const express = require ('express');
const cors = require('cors');
require('dotenv').config();
const superagent = require('superagent');

const app = express();
const PORT = process.env.PORT;
app.use(cors());

//handler
const searchhandler = require('./search/searchmodule');

//middleware
const loggerMiddleware = require('./middlewares/logger');
const validator = require('./middlewares/validate')

app.use(loggerMiddleware);

//Endpoints
app.get('/',homehandler)
app.get("/searchimage",validator,searchhandler.searchhandler);



function homehandler(req,res) {
    res.status(200).send('server is alive!!')
}

app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`);
});