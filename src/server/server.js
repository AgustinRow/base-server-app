import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import questionnaireRouter from './routes/questionnaire';
require('dotenv').config();

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/v1/questionnaire', questionnaireRouter);

const port = process.env.PORT;

export const start = (mongoose) => {
  mongoose.connect(process.env.URL_ATLAS);
  app.listen(port, () => {
    console.log(`REST API on http://localhost:${port}`);
  });
};
