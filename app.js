var fs = require('fs');
var express = require('express');
var Canvas = require('canvas');
var app = express();

//ROUTES
app.get('/solid/:wd/:ht', function(req, res) {

	var wd = parseInt(req.params.wd),
			ht = parseInt(req.params.ht);

	var canvas = new Canvas(wd, ht);
	var context = canvas.getContext('2d');

	context.fillStyle = '#eee';
	context.fillRect(0, 0, wd, ht);
	
	var textOut = wd + 'x' + ht;
	context.fillStyle = '#aaa';
	context.font = 'bold ' + scaledFont(wd*ht) + 'px Arial';

	context.fillText(textOut, (wd / 2) - (context.measureText(textOut).width / 2), (ht / 2) + (scaledFont(wd*ht)/2));

	var stream = canvas.pngStream();

	res.type("png");
	stream.pipe(res);
});

app.get('/clipped/:wd/:ht', function(req, res) {
	
	var wd = parseInt(req.params.wd),
			ht = parseInt(req.params.ht);

	var canvas = new Canvas(wd, ht),
			context = canvas.getContext('2d'),
			img = new Canvas.Image;
	
	
	img.onload = function() {
		context.drawImage(img, 0, 0);
		var stream = canvas.pngStream();
		res.type("png");
		stream.pipe(res);
	};

	img.src = "./pic.gif";
});

//HELPER METHODS
var scaledFont = function(area) {
	var fontSize;
	if (area < 1000) { fontSize = 10; }
	else if (area > 100000) { fontSize = 32; }
	else { fontSize = 14 }
	return fontSize;
};

//EXPRESS SERVER STARTUP
app.listen(4000, '0.0.0.0');
console.log("Server running on port 4000.");
