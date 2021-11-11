var express = require('express');
var app = express();

//invoque a dotenv .. for enviroment variable 
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//set urlencode to get data from forms 
//and to not have errors 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

import userRoutes from './routes/users.routes';
app.use(userRoutes);

var server = app.listen(5000, function () {
    console.log('Server is running..');
});

//export default app;