#!/usr/bin/node
// read and print a file
const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
	if (err) {
		console.log (err);
		return;
	}
	console.log(data);
}); // fs = File System, module in node.js that provides an API 