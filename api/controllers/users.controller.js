const connection = require('../database/dbSettings');
const mssql = require('mssql');
//import { GetConnection } from '../database/dbSettings';
const query = require('../database/queries');
const moment = require('moment');


export const GetUsers = async (req, res) => {
    try {
        
        //const pool = await GetConnection();
        const pool = await connection.GetConnection();
        
        const result = await pool.request().query(query.getAllUsers);
        res.json(result.recordset);

    } catch (error) {

        res.status(500);
        res.send(error.message);

    }
  };

  export const CreateNewUser = async (req, res) => {
    
    let { email, popupActive, givename, surname, birthday } = req.body;
    const { userName,  password} = req.body;
  
    // validating
    if (userName == null || password == null) {
      return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
  
    if (popupActive == null) popupActive = 0;
  
    try {
      const pool = await connection.GetConnection();
      console.log( birthday);
      console.log( new Date(birthday));

      console.log( moment(new Date(birthday)));

      await pool
        .request()
        .input("Email", mssql.Text, email)
        .input("UserName", mssql.VarChar, userName)
        .input("Password", mssql.VarChar, password)
        .input("PopupActive", mssql.Int, popupActive)
        .input("Givename", mssql.VarChar, givename)
        .input("Surname", mssql.VarChar, surname)
        .input("Birthday", mssql.DateTime, birthday)
        .query(query.insertUser);

      res.json({ userName, email , birthday});
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const GetUserById = async (req, res) => {
    try {
      const pool = await connection.GetConnection();
  
      const result = await pool
        .request()
        .input("UserId", req.params.UserId)
        .query(query.getUserById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const DeleteUserById = async (req, res) => {
    try {
      const pool = await connection.GetConnection();
  
      const result = await pool
        .request()
        .input("UserId", req.params.UserId)
        .query(query.deleteUserById);
      return res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };


  export const UpdateUserById = async (req, res) => {
    
    let { email, popupActive, givename, surname, birthday } = req.body;
    const { userName,  password} = req.body;
    var  userId  = req.params.UserId;


    // validating
    if (userName == null || password == null) {
      return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
  
    if (popupActive == null) popupActive = 0;
  
    try {
      const pool = await connection.GetConnection();
      console.log( userId );

      await pool
      .request()
      .input("Email", mssql.Text, email)
      .input("UserName", mssql.VarChar, userName)
      .input("Password", mssql.VarChar, password)
      .input("PopupActive", mssql.Int, popupActive)
      .input("Givename", mssql.VarChar, givename)
      .input("Surname", mssql.VarChar, surname)
      .input("Birthday", mssql.DateTime, birthday)
      .input("UserId", mssql.Int, userId)
      .query(query.updateUserById);

      res.json({ userName, email , birthday});
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };