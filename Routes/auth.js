import { Router } from 'express';
import UserModel from '../models/User.js';

const AuthRouter = Router();

AuthRouter.get('/', async (req, res) => {
  const user = await new UserModel({
    username: 'prv',
    email: 'prv@prv.co',
    password: '123456',
  });

  await user.save();
  res.send('hi from auth');
});

//Register

// AuthRouter.get('/', (req, res) => {
//   res.send('hi from auth ');
// });

export default AuthRouter;
