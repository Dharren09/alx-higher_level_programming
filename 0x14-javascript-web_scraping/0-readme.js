#!/usr/bin/node
// Read and Print a file
// fs module - provides a simple way to work with file system
const fs = require('fs');
const file = 'cisfun';

fs.readfile('file', 'utf8', (err, data) => {
	if (err) throw err;
	console.log('data');
});
