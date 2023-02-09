#!/usr/bin/node
// script displays the status code of a GET request

const request = require('request');
const url = 'https://alx-intranet.hbtn.io/status';

request.get(url, (error, response) => {
	if (error) throw error;
	console.log('code', response.statuscode);
});
