import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import UserRouter from './Routes/users.js';
import AuthRouter from './Routes/auth.js';

//config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
console.log(String(process.env.MONOGO_URL));
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

app.get('/', (req, res) => {
  res.send('Welcome To HomePage');
});

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
