
var fs = require('fs');

var pathfinder = null;
var contentkeeper = null;

function File() {
	function open(path, document) {
		fs.readFile(path, 'utf-8', function (error, contents) {
		if (typeof contents === 'undefined') {
			document.getElementById('editor').value = contentkeeper;
			document.querySelector('title').innerHTML = pathfinder.split("\\")[pathfinder.split("\\").length-1] + ' - Pointspad';
			document.querySelector('#dialogRes').textContent = pathfinder;
		} else {
			document.getElementById('editor').value = contents;
			contentkeeper = contents;
			pathfinder = path;
			document.querySelector('title').innerHTML = path.split("\\")[path.split("\\").length-1] + ' - Pointspad';	
			document.querySelector('#dialogRes').textContent = path;
		}
	});
	}
	
	function save(path, document) {
		var text = document.getElementById('editor').value;
		fs.writeFile(path, text);
		document.querySelector('title').innerHTML = path.split("\\")[path.split("\\").length-1] + ' - Pointspad';
	}
	
	this.open = open;
	this.save = save;
}
module.exports = new File;
