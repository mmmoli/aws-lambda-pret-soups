import API from 'claudia-api-builder'
import soups from './soups';
import packagejson from './packagejson';

const api = new API()

api.get('/', () => 'Hello')

api.get('/packagejson', () => {
  return packagejson();
});

api.get('/soups', () => {
  return soups
});

module.exports = api;

