#!/usr/bin/node
//Write a script that gets the contents of a webpage and stores it in a file

const request = require('request');
const url = 'http://loripsum.net/api';
const fs = require('fs');
const file = 'loripsum';

request.get('url' (error, response, body) => {
	if (error) throw error;
	fs.writeFile(file, body, 'utf8', (fileError) => {
		if (fileError) {
			console.log(fileError);
		}
	});
});

