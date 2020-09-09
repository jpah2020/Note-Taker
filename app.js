const express = require('express');
const fs = require('fs');
const app = express();

//app.get
app.get('/notes', (request, response) => {
	// fs.readFile("./public/notes.html", "utf8", (error,data)=>{
	//     response.send(data);
	response.sendFile(__dirname + '/public/notes.html');
});
// });

app.get('*', (request, response) => {
	// fs.readFile("./public/index.html", "utf8", (error,data)=>{
	//     response.send(data);
	response.sendFile(__dirname + '/public/index.html');
});
// });

app.listen(7000, () => {
	console.log('Listening to server 7000');
});
