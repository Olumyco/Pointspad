var gui = require('nw.gui');
var menu = new gui.Menu({ type: 'menubar' });
 menu.append(new gui.MenuItem({
	label: 'File',
	submenu: new gui.Menu()
}));
 menu.append(new gui.MenuItem({
	label: 'Edit',
	submenu: new gui.Menu()
}));
 menu.append(new gui.MenuItem({
	label: 'Format',
	submenu: new gui.Menu()
}));
 menu.append(new gui.MenuItem({
	label: 'View',
	submenu: new gui.Menu()
}));
 menu.append(new gui.MenuItem({
	label: 'Help',
	submenu: new gui.Menu()
}));
menu.items[0].submenu.append(new gui.MenuItem({
	label: 'New         Ctrl+N',
	click: function () {
		gui.Window.open('index.html', {
			icon: "images/icon.png",
			title: "Pointpad",
			toolbar: false,
			width: 800,
			height: 500,
			position: 'left',
			focus: true
		});
	}
}));
menu.items[0].submenu.append(new gui.MenuItem({
	label: 'Open       Ctrl+O',
	click: function () {
		clickInput('open');
	}
}));
menu.items[0].submenu.append(new gui.MenuItem({
	label: 'Save         Ctrl+S',
	click: function () {
		clickInput('save');
	}
}));
menu.items[0].submenu.append(new gui.MenuItem({
	label: 'Print         Ctrl+P',
	click: function () {
		window.print();
	}
}));
menu.items[0].submenu.append(new gui.MenuItem({
	type: 'separator'
}));
menu.items[0].submenu.append(new gui.MenuItem({
	label: 'Close',
	click: function () {
		gui.Window.get().close();
	}
}));
menu.items[1].submenu.append(new gui.MenuItem({
	label: 'Undo',
	click: function () {
		document.execCommand("undo");
	}
}));
menu.items[1].submenu.append(new gui.MenuItem({
	label: 'Redo',
	click: function () {
		document.execCommand("redo");
	}
}));
menu.items[1].submenu.append(new gui.MenuItem({
	type: 'separator'
}));
menu.items[1].submenu.append(new gui.MenuItem({
	label: 'Select All',
	click: function () {
		document.execCommand("selectall");
	}
}));
menu.items[1].submenu.append(new gui.MenuItem({
	type: 'separator'
}));
menu.items[1].submenu.append(new gui.MenuItem({
	label: 'Cut',
	click: function () {
		document.execCommand("cut");
	}
}));
menu.items[1].submenu.append(new gui.MenuItem({
	label: 'Copy',
	click: function () {
		document.execCommand("copy");
	}
}));
menu.items[1].submenu.append(new gui.MenuItem({
	label: 'Paste',
	click: function () {
		document.execCommand("paste");
	}
}));
menu.items[1].submenu.append(new gui.MenuItem({
	label: 'Delete',
	click: function () {
		document.execCommand("delete");
	}
}));
menu.items[1].submenu.append(new gui.MenuItem({
	type: 'separator'
}));
menu.items[1].submenu.append(new gui.MenuItem({
	label: 'Find',
	click: function () {
		document.execCommand("find");
	}
}));
menu.items[1].submenu.append(new gui.MenuItem({
	label: 'Replace',
	click: function () {
		document.execCommand("replace");
	}
}));
menu.items[1].submenu.append(new gui.MenuItem({
	type: 'separator'
}));
menu.items[1].submenu.append(new gui.MenuItem({
	label: 'Time/Date',
	click: function () {
		var date = new Date();
		document.getElementById("editor").innerHTML += date; 
	}
}));
menu.items[2].submenu.append(new gui.MenuItem({
	label: 'Page Styles',
	click: function () {
		gui.Window.get().close();
	}
}));
menu.items[2].submenu.append(new gui.MenuItem({
	label: 'Font...',
	click: function () {
		gui.Window.get().close();
	}
}));
menu.items[3].submenu.append(new gui.MenuItem({
	label: 'Full Screen',
	click: function () {
		gui.Window.get().enterFullscreen();
	}
}));
menu.items[4].submenu.append(new gui.MenuItem({
	label: 'Get Help',
	click: function () {
		gui.Window.get().close();
	}
}));
menu.items[4].submenu.append(new gui.MenuItem({
	type: 'separator'
}));
menu.items[4].submenu.append(new gui.MenuItem({
	label: 'About Pointpad',
	click: function () {
		gui.Window.get().close();
	}
}));
gui.Window.get().menu = menu;

window.addEventListener('load', function(){
    document.getElementById("editor").addEventListener('dblclick', function(){
           gui.Window.get().toggleFullscreen(); 
    });
});


window.addEventListener('load', function() {
  function Menu(cutLabel, copyLabel, pasteLabel) {
    var gui = require('nw.gui')
      , menu = new gui.Menu()

      , cut = new gui.MenuItem({
        label: cutLabel || "Cut"
        , click: function() {
          document.execCommand("cut");
          console.log('Menu:', 'cutted to clipboard');
        }
      })

      , copy = new gui.MenuItem({
        label: copyLabel || "Copy"
        , click: function() {
          document.execCommand("copy");
          console.log('Menu:', 'copied to clipboard');
        }
      })

      , paste = new gui.MenuItem({
        label: pasteLabel || "Paste"
        , click: function() {
          document.execCommand("paste");
          console.log('Menu:', 'pasted to textarea');
        }
      })
    ;

    menu.append(cut);
    menu.append(copy);
    menu.append(paste);

    return menu;
  }

  var menu = new Menu(/* pass cut, copy, paste labels if you need i18n*/);
  $('#editor').on("contextmenu", function(e) {
    e.preventDefault();
    menu.popup(e.originalEvent.x, e.originalEvent.y);
  });
});
