var sonic_gl = function(canvas) {
	var engine = {};
	engine.graphics = sonic_gl_graphics(engine, canvas);
	return engine;
};

var sonic_gl_graphics = function(engine, canvas) {
	var graphics = {};
	var graph_lib_params = {};
	var graph_lib = canvas.getContext("webgl", graph_lib_params) || canvas.getContext("webgl-experimental", graph_lib_params);

	console.log("Initializing WebGl...");
	
	if (graph_lib === null) {
		console.warn("Unable to initialize WebGL. Your browser or machine may not support it.");
		return;
	}
	
	graph_lib.enable(graph_lib.DEPTH_TEST);
	graph_lib.depthFunc(graph_lib.LESS);	
	graph_lib.clearColor(0.0, 0.0, 0.0, 1.0);
	graph_lib.enable(graph_lib.BLEND);
	graph_lib.blendFunc(graph_lib.SRC_ALPHA, graph_lib.ONE_MINUS_SRC_ALPHA);
	
	graphics.clear = function(){
		graph_lib.clear(graph_lib.COLOR_BUFFER_BIT | graph_lib.DEPTH_BUFFER_BIT);	
	}
	
	graphics.clearColor = function(){
		graph_lib.clear(graph_lib.COLOR_BUFFER_BIT);	
	}
	
	graphics.clearDepth = function(){
		graph_lib.clear(graph_lib.DEPTH_BUFFER_BIT);	
	}
	
	
	graphics.width = function() {
		return canvas.width;
	}
	
	graphics.height = function() {
		return canvas.height;
	}
	
	graphics.aspectRatio = function() {
		return canvas.width / canvas.height;
	}
	
	return graphics;
};
