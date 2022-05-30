globalThis.console = {};

globalThis.console.startTime = Date.now();

globalThis.console.log = function log() {
  var time = "[ <div style='margin: 0;padding:0;display:inline; max-width: 10px; width: 10px;'>" + ( Date.now() - this.startTime).toFixed(2) +"s</div> ] ";
  $("<div></div>").appendTo("#console").html(time+"<b>Log:</b> " + arguments[0]).addClass("log")
}; 

globalThis.console.error = function error() {
  var time = "[ <div style='margin: 0;padding:0;display:inline; max-width: 10px; width: 10px;'>" + ( Date.now() - this.startTime).toFixed(2) +"s</div> ] ";
  $("<div></div>").appendTo("#console").html(time + "<b>Error:</b> " + arguments[0]).addClass("error");
}; 

globalThis.console.table = function() {
  var time = "[ <div style='margin: 0;padding:0;display:inline; max-width: 10px; width: 10px;'>" + ( Date.now() - this.startTime).toFixed(2) +"s</div> ] ";
  $("<div></div>").appendTo("#console").html(time + "<b>Table:</b> " + arguments[0]).addClass("log");  
}

globalThis.console.info = function() {
  var time = "[ <div style='margin: 0;padding:0;display:inline; max-width: 10px; width: 10px;'>" + ( Date.now() - this.startTime).toFixed(2) +"s</div> ] ";
  $("<div></div>").appendTo("#console").html(time + "<b>Info:</b> " + arguments[0]).addClass("info");  
}

globalThis.console.warn = function() {
   var time = "[ <div style='margin: 0;padding:0;display:inline; max-width: 10px; width: 10px;'>" + (( Date.now() - this.startTime).toFixed(2)) +"s</div> ] ";
 $("<div></div>").appendTo("#console").html(time + "<b>Warning:</b> " + arguments[0]).addClass("warning");  
}

console.log("test");

console.info("test");

console.error("test")

console.warn("test")
 
console.table("teste")
