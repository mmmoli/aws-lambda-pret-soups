const scrape = require('./scrape');

module.exports.scrape = (event, context, callback) => {
  const response = scrape({ body: { message: 'Scrape!' } });
  console.log({ response }); // eslint-disable-line no-console
  callback(null, response);
};
