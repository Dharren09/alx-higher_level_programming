#!/usr/bin/node
// Scripts prints the number of movies where character
// "Wedge Antilles" is present

const request = require('request');
const url = process.argv[2];

request.get(url, (err, response, body) => {
	if (err) {
		console.log(err);
		return;
	}
	const data = JSON.parse(body);
	let filmInfo = data.results;
	filmInfo = filmInfo.filter(film => film.characters.find(character => character.match(18)));
	console.log(filmInfo.length);
});