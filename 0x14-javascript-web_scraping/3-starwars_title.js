#!/usr/bin/node
// Script prints the title of a Star Wars movies where episode
// number matches a given integer
const request = require('request');
const ID = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/:id';

request(url, (error, response, body) => {
	if (error) throw error;
	const data = JSON.parse(body);
	console.log(data.title);
});
