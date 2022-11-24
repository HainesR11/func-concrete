const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const AppError = require('./utils/AppError')
const GlobalErrorHandler = require('./utils/GlobalError')


const ProjectRoutes = require('./routes/ProjectRoutes')
const TaskRoutes = require("./routes/TasksRoutes")
const UserRoutes = require('./routes/UserRoutes')

const app = express();

if (process.env.NODE_ENV === 'development') {
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
app.use('/api/tasks', TaskRoutes)
app.use('/api/users', UserRoutes)

app.all('*', (req, res, next ) => {
    next(new AppError(`Cant find ${req.originalUrl} on this server!`, 404))
})

app.use(GlobalErrorHandler)

module.exports = app;
