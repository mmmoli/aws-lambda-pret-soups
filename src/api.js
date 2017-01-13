import API from 'claudia-api-builder'
// import soups from './soups';

const api = new API()

api.get('/', () => 'Hello')

// api.get('/soups', () => soups());

module.exports = api
