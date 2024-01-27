const fs = require('fs');

const mockJsonMiddleware = (req, res, next) => {
  fs.readFile('./public/mock-response.json', 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      req.mockJson = JSON.parse(data);
      next();
    }
  });
};

module.exports = mockJsonMiddleware;
