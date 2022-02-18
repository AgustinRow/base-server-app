import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import questionarieRouter from '../resources/questionarie/questionarie.route';
import userRouter from '../resources/user/user.route';

require('dotenv').config();

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api/v1/questionarie', questionarieRouter);
app.use('/api/v1/user', userRouter);

app.get('/api/health', (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      res.status(200).json({ data: 'Ok' });
    } else {
      throw Error;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const port = 3000;

export const start = async () => {
  try {
    await mongoose.connect(process.env.URL_ATLAS);
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};
