const express = require('express')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const reqId = require('express-request-id')();
const morgan = require('morgan')
const app = express()
const api = require('./routes/index')

// error
const { handleError } = require('./utils/errorHandler');

// security to api
app.use(helmet());
app.disable('x-powered-by');
app.use(xss());

app.use(cors());
app.use(reqId);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(morgan('dev'))

app.use('/api', api)

// eslint-disable-next-line
app.use((err, req, res, next) => {
  // eslint-disable-next-line
  err.statusCode = err.statusCode || 500;
  // eslint-disable-next-line
  err.status = err.status || 'error';
  handleError(err, res);
});

module.exports = app
