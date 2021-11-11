const express = require('express');
const router = express.Router();
//import {Router} from 'express';
//const router = Router();

//import { GetUsers } from '../controllers/users.controller';
const userControl = require('../controllers/users.controller');

//router.get("/users", (req, res) => res.send("users!!"));
router.get("/users", userControl.GetUsers);

router.get("/users/:UserId", userControl.GetUserById);

router.post("/users", userControl.CreateNewUser);

router.delete("/users/:UserId", userControl.DeleteUserById);

router.put("/users/:UserId", userControl.UpdateUserById);

export default router;