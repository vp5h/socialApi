import { Router } from 'express';
import User from '../models/User.js';
const UserRouter = Router();

UserRouter.get('/', (req, res) => {
  res.send('hi from users');
});

export default UserRouter;