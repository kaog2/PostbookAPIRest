//Here all for the DB connection
const mssql = require('mssql');
import config from '../config'

export const dbSettings = {
    server: config.server,
    user: config.user,
    password: config.password,
    database: config.database,
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  };
  
export const GetConnection = async () => {
  try {
    const pool = await mssql.connect(dbSettings);
    return pool;
  } catch (error) {

    console.log('getconnection error:');
    console.error(error);
    
  }
};