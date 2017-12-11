var express = require('express');
var app = express();

var fs = require('fs'); 

app.set('port', process.env.PORT || 9998);

var fileRead = function(fileName){
	const article = fs.readFileSync(fileName);
	lineArray = article.toString().split('\n');
	return lineArray;
};

var fileList = function(){
	var fileListName = fs.readdirSync('fileList');
	console.log(fileListName);
	return fileListName;
}

var fileWrite = function(fileName, fileContent){
	fs.truncate('./fileList/'+fileName, 0, function(){
		fs.writeFile('./fileList/'+fileName, fileContent, function(err){
			if(err){
				return console.log(err);
			}
		console.log("write!");
		});
	});
}

var server = app.listen(app.get('port'), function() {
   console.log("Express server has started on port " + server.address().port);
});


app.get('/getList', function(req, res){
	console.log("getList");	
	res.jsonp({fileList : fileList()});
});

app.get('/fileRead', function(req, res){
	console.log("fileRead"); 
	console.log(req.query.id);
	res.jsonp({fileContent:fileRead('./fileList/'+req.query.id)})		
});

app.get('/fileWrite', function(req, res){
	console.log("fileWrite");	
	console.log(req.query.id)
	console.log(req.query.content)
	fileWrite(req.query.id, req.query.content)

});
