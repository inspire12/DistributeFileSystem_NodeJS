


var express = require('express');
var app = express();

/*var fs = require('fs'); 
var text = 'UTF-8로 저장될 텍스트';
fs.writeFileSync("sync.txt", 'ufeff' + text, {encoding:'utf8'});
*/

app.set('port', process.env.PORT || 9998);

/*var fileRead = function(){
	const article = fs.readFileSync("source.txt");
	lineArray = article.toString().split('\n');
	return lineArray;
};
*/

var server = app.listen(app.get('port'), function() {
   console.log("Express server has started on port " + server.address().port);
});
app.get('/', function(req, res){
	res.write("mso");
	res.end();
});





