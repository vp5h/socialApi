import { Router } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
const AuthRouter = Router();

// AuthRouter.get('/', async (req, res) => {
//   const user = await new User({
//     username: 'prvws',
//     email: 'prv@prwv.com',
//     password: '123456',
//   });

//   await user.save();
//   res.send('hi from auth');
// });
//Register
AuthRouter.post('/register', async (req, res) => {
  try {
    //gen new password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);

    //new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedpassword,
    });

    //save and response

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login

AuthRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send('User NOt Found');

    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validpassword && res.status(400).json('Please enter the correct Password');

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default AuthRouter;
