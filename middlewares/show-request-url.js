const fs = require('fs');

const showRequestURL = (req, res, next) => {
  console.log(
    `Arriving request at URL: ${req.originalUrl.replace('/api/v1', '')}`
  );
  next();
};

module.exports = showRequestURL;
