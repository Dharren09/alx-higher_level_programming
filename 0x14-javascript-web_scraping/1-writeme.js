#!/usr/bin/node
// write a string to a file
const fs = require('fs');
const file = process.argv[2];
// string to write
const data = process.argv[3];

fs.writeFile(file, data, (err) => {
	if (err) {
		console.log(err);
		return;
	} 
});
