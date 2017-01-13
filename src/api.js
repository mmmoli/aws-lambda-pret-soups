import API from 'claudia-api-builder'
import soups from './soups';

const api = new API();

api.get('/', () => 'Hello');

api.get('/soups/{day+}', request => {
  const {day} = request.pathParams;
  return soups(day);
});

module.exports = api;

