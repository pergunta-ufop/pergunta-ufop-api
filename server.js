const express = require('express');
const v1Routes = require('./routes/v1.js');
const cors = require('cors');
const mockJsonMiddleware = require('./middlewares/mock-json-middleware.js');
const showRequestURL = require('./middlewares/show-request-url.js');
const port = 3000;

const app = express();

app.use(cors());

app.use(mockJsonMiddleware);

app.use(showRequestURL);

app.use('/api/v1', v1Routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
