#!/usr/bin/node
// Scripts prints the number of movies where character
// "Wedge Antilles" is present

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/';

request.get(url, (error, response, body) => {
	if error throw error;
	const data = JSON.parse(body);
	filmInfo = filmInfo.filters(film => film.characters.find(character => character.match(18)));
	console.log(filmInfo.length);
});
