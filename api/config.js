//invoque a dotenv .. for enviroment variable 
//import {config} from "dotenv";
//config()

const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

export default {
    port: process.env.PORT,
    server: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}