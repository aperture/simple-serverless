exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || 'hello';
  return {
    statusCode: 200,
    body: `Hello ${subject}`,
  };
};
