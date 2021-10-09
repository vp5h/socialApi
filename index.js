import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import UserRouter from './Routes/users.js';
import AuthRouter from './Routes/auth.js';
import PostRouter from './Routes/posts.js';

//config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
mongoose.connect(
  process.env.MONOGO_URL,
  { useUnifiedTopology: true },
  (err, db) => {
    // console.log('connected to DB err', err, db);
    console.log('connected to DB');
  }
);

//middleWares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', UserRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/posts', PostRouter);

app.get('/', (req, res) => {
  res.send('Welcome To HomePage 1');
});

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
