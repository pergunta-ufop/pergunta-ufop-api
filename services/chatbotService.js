const commands = (req, res) => {
  res.send(req.mockJson.map((item) => item.query));
};

const start = (req, res) => {
  query(
    {
      ...req,
      query: {
        query: 'Iniciar',
      },
    },
    res
  );
};

const query = (req, res) => {
  const response = sendQueryToChatbot(req);
  res.send(response);
};

const sendQueryToChatbot = (req) => {
  const query = req.query.query;

  const response = req.mockJson.find(
    (item) => item.query.toLowerCase() === query.toLowerCase()
  );
  if (!response) {
    return createNoResultsResponse(req);
  }
  return response;
};

const createNoResultsResponse = (req) => {
  return req.mockJson.find((item) => item.query === 'NoResults');
};
module.exports = {
  start,
  query,
  commands,
};
