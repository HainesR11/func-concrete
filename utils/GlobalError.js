module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'ERROR';

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      Status: err.status,
      Message: err.message,
      stack: err.stack
    });
  }
  else if(process.env.NODE_ENV){
    res.status(err.statusCode).json({
        Status: err.status,
        Message: err.message
      });
  }
};
