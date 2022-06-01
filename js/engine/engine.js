var sonic_gl = function(canvas) {
	var engine = {};
	engine.graphics = sonic_gl_graphics(engine, canvas);
	return engine;
};

var sonic_gl_graphics = function(engine, canvas) {
	var graphics = {};
	var graph_lib = null;
	var graph_lib_params = {};

	console.log("Initializing WebGl...");
  
	if (!(graph_lib = canvas.getContext("webgl", graph_lib_params))) {
		if (graph_lib = canvas.getContext("experimental-webgl", graph_lib_params)) {
			console.info("WebGL is running in experimental mode. Performance and stability may suffer.")
		} else {
			console.error("Could not initialize WebGL. Are you running a modern browser with WebGL enabled?");
		}
	}
};
