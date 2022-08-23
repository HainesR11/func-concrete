const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const ProjectRoutes = require('./routes/ProjectRouts')

const app = express();

if (process.env.ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(cors())
app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})

app.use('/api/projects', ProjectRoutes)

module.exports = app;
