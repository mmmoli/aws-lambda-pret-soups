import API from 'claudia-api-builder'
import fs from 'fs'
import denodeify from 'denodeify'
// import soups from './soups';

const api = new API()

api.get('/', () => 'Hello')

api.get('/packagejson', () => {
	const read = denodeify(fs.readFile);
	return read('./package.json')
		.then(JSON.parse)
		.then(val => val);
});

// api.get('/soups', () => soups());

module.exports = api
