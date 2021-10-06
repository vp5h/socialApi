import { Router } from 'express';
import User from '../models/User.js';
const UserRouter = Router();

UserRouter.get('/', (req, res) => {
  res.send('hi from users');
});

//Update User
//delete User
//get a user
// get all users
//follow a user
//unfollow a user











export default UserRouter;
