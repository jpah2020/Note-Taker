const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api.js');
const htmlRoutes = require('./routes/html.js');

var app = express();
var PORT = process.env.PORT || 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
