import express from 'express';
import winston from 'winston';
import productsRouter from './routes/productsRouter.js';

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use('/products', productsRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  res.send('Hello World Post');
});

const { combine, printf, label, timestamp } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => { 
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'embol-be.log' }),
  ],
  format: combine(label({ label: 'embol-be' }), timestamp(), myFormat),
});

app.listen(3001, () => {
  console.log('Server running on port 3000');
});
