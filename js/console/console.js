globalThis.console = {};

globalThis.console.startTime = Date.now();

globalThis.console.log = function log(msg) {
	var time = "[ <div style='margin: 0;padding:0;display:inline; max-width: 10px; width: 10px;'>" + Math.round(((Date.now() - this.startTime)) / 1000) + "s</div> ] ";
	var l = $("<div></div>").appendTo("#console").html(time + "<b>Log:</b> " + msg).addClass("log")
	l.hover(function() {
		l.html(time + "<i>" + "<b>From Script:</b> " + name + "</i>")
	}, function() {
		l.html(time + "<b>Log:</b> " + msg);
	});
	setTimeout(function() {
		l.fadeOut(1000, function() {
			div.parentNode.removeChild(div);
		});
	}, 6000);

};

globalThis.console.error = function error(msg) {
	var time = "[ <div style='margin: 0;padding:0;display:inline; max-width: 10px; width: 10px;'>" + Math.round(((Date.now() - this.startTime)) / 1000) + "s</div> ] ";
	var l = $("<div></div>").appendTo("#console").html(time + "<b>Error:</b> " + msg).addClass("error");
	l.hover(function() {
		l.html(time + "<i>" + "<b>From Script:</b> " + name + "</i>")
	}, function() {
		l.html(time + "<b>Error:</b> " + msg);
	});
	setTimeout(function() {
		l.fadeOut(1000, function() {
			div.parentNode.removeChild(div);
		});
	}, 6000);
};

globalThis.console.info = function(msg) {
	var time = "[ <div style='margin: 0;padding:0;display:inline; max-width: 10px; width: 10px;'>" + Math.round(((Date.now() - this.startTime)) / 1000) + "s</div> ] ";
	var l = $("<div></div>").appendTo("#console").html(time + "<b>Info:</b> " + msg).addClass("info");
	l.hover(function() {
		l.html(time + "<i>" + "<b>From Script:</b> " + name + "</i>")
	}, function() {
		l.html(time + "<b>Info:</b> " + msg);
	});
	setTimeout(function() {
		l.fadeOut(1000, function() {
			div.parentNode.removeChild(div);
		});
	}, 6000);
}

globalThis.console.warn = function(msg) {
	var time = "[ <div style='margin: 0;padding:0;display:inline; max-width: 10px; width: 10px;'>" + Math.round(((Date.now() - this.startTime)) / 1000) + "s</div> ] ";
	var l = $("<div></div>").appendTo("#console").html(time + "<b>Warning ⚠:</b> " + msg).addClass("warning");
	l.hover(function() {
		l.html(time + "<i>" + "<b>From Script:</b> " + name + "</i>")
	}, function() {
		l.html(time + "<b>Warning ⚠:</b> " + msg);
	});
	setTimeout(function() {
		l.fadeOut(1000, function() {
			div.parentNode.removeChild(div);
		});
	}, 6000);
}
