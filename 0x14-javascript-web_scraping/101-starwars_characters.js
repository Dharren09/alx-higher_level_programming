#!/usr/bin/node
// prints all characters of a Star Wars movie

const request = require('request');

request('https://swapi-api.hbtn.io/api/films/${process.argv[2]}', (err, response, body) => {
	if (err) {
		console.log(err);
		return;
	}
	else {
		send(JSON.parse(body).characters, 0);
	}
});

function send(person, idx) {
	if (idx >= person.length) {
		return;
	}
	request(person[idx], (err, ressponse, body) => {
		if (err) {
			console.log(err);
			return;
		}
		else {
			console.log(JSON.parse(body).name);
			return send(person, ++idx);
		}
	});
}