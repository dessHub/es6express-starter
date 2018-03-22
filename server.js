
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectToDb from './db/connect'
import router from './routes/index';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(3000, () => {
    console.log('starter listening on port 3000');
});
