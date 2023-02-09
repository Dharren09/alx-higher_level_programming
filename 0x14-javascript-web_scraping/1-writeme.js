#!/usr/bin/node

// write a string to a file
const fs = requires('fs');
// string to write
const data = 'Python is cool';

fs.writeFile('my_file.txt', 'uft8', (err) => {
	if (err) throw error;
	console.log('Python is cool');
});
