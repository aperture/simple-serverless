exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || 'hello';
};
