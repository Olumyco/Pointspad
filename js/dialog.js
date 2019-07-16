var dialogChecker = 0;

$(function() {
    gui.Window.get().on('close', function() {
		if (document.getElementById('editor').value) {
        $("#dialog").show();
		$("#editor2").show();
		gui.Window.get().blur();
        dialogChecker++;
		} else {
			gui.Window.get().removeAllListeners("close")
            gui.Window.get().close();
		}
    }); 
});


$(function() {
    gui.Window.get().on('close', function() {
		document.getElementById('editor').onkeydown = function() {
			return false;
		};
    }); 
});


window.addEventListener('load', function(){
	var arr =  [$("span"), $("button")];
	for (var i = 0; i < arr.length; i++) {
    arr[i].click(function(e) {
        var me = e.target;
        if (me.id == 'yes') {
            clickInput('save');
            $("#dialog").hide();
			$("#editor2").hide();
        } else if (me.id == 'no') {
            gui.Window.get().removeAllListeners("close")
            gui.Window.get().close();
        } else if (me.id == 'close' || me.id == 'cancel') {
            $("#dialog").hide();
			$("#editor2").hide();
			document.getElementById('editor').focus();
			document.getElementById('editor').onkeydown = function() {
			return true;
		};
        } 
    });
	}
});

$(function() {
    $("#back").draggable();
});

$(function() {
	var ke = ['click', 'contextmenu'];
	for (var y = 0; y < ke.length; y++) {
    document.querySelector("#editor2").addEventListener(ke[y], function() {
        if(dialogChecker > 0) {
            $("#back").fadeTo(60, 0).fadeTo(60, 1).fadeTo(60, 0).fadeTo(60, 1).fadeTo(60, 0).
                fadeTo(60, 1).fadeTo(60, 0).fadeTo(60, 1).fadeTo(60, 0).fadeTo(60, 1).
                fadeTo(60, 0).fadeTo(60, 1).fadeTo(60, 0).fadeTo(60, 1).fadeTo(60, 0).
                fadeTo(60, 1).fadeTo(60, 0).fadeTo(60, 1);
				dialogChecker++;
        }
    });
	
  }
});