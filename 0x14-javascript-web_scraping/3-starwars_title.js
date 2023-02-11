#!/usr/bin/node
// Script prints the title of a Star Wars movies where episode
// number matches a given integer
const request = require('request');
const ID = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/';

request(url + ID, (err, response, body) => {
	if (err) {
		console.log(err);
		return;
	}
	const data = JSON.parse(body);
	console.log(data.title);
});
