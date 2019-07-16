
var file = require('./js/file.js');
var path = require("path");

function clickInput(id) {
	var event = document.createEvent('MouseEvents');
	event.initMouseEvent('click');
	document.getElementById(id).dispatchEvent(event);
}

document.addEventListener('keyup', function (e) {
	if (e.keyCode == 'O'.charCodeAt(0) && e.ctrlKey) {
		clickInput('open');
	} else if (e.keyCode == 'S'.charCodeAt(0) && e.ctrlKey) {
		clickInput('save');
	}else if (e.keyCode == 'N'.charCodeAt(0) && e.ctrlKey) {
	    gui.Window.open('index.html');
    }else if (e.keyCode == 'P'.charCodeAt(0) && e.ctrlKey) {
	    window.print();
    }
});

window.addEventListener('load', function() {
	document.getElementById('open').addEventListener('change', function (e) {
		file.open(this.value, document);
});

document.getElementById('save').addEventListener('change', function (e) {
	file.save(this.value, document);
});
});

/*
function readi(fn) {
 if (document.readyState != 'loading') {
  fn();
 } else {
	 document.addEventListener('DOMContentLoaded', fn);
 }
}

readi(function() {
	window.ondragover = function(e) {
		e.preventDefault();
		return false;
	};
	window.ondrop = function(e) {
		e.preventDefault();
		return false;
	};
	
	var editor = document.getElementById("editor");
	editor.ondragover = function(e) {
		e.dataTransfer.dropEffect = 'copy';
		return false;
	};
	editor.ondragleave = function() {
		return false;
	};
	editor.ondrop = function(e) {
		e.preventDefault();
		var files = e.dataTransfer.files;
		for (var i = 0; i < files.length; ++i) {
			document.querySelector('title').innerHTML = files[i].path + ' - Pointspad';
				if (files.type.indexOf("text") == 0) {
				var reader = new FileReader();
				reader.onload = function(e) {
					var text = e.target.result;
				};
				reader.readAsText(file);
		}
	  }
		return false;
	};
	
});
*/