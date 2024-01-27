const start = (req, res) => {
  query(
    {
      ...req,
      query: {
        query: 'start',
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

  const response = req.mockJson.find((item) => item.query === query);
  if (!response) {
    return createNoResultsResponse();
  }
  return response;
};

const createNoResultsResponse = () => {
  return {
    response: 'Não encontrei uma resposta para a sua pergunta. :(',
  };
};
module.exports = {
  start,
  query,
};
