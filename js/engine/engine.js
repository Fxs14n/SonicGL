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
	
	graphics.shader = function(data, name) {
		var shader = {}
		
		console.log("Compiling vertex shader...");		
		
		var vertexShader = graph_lib.createShader(graph_lib.VERTEX_SHADER);
		graph_lib.shaderSource(vertexShader, shaderData.vertexShader);
		graph_lib.compileShader(vertexShader);
	
		if (!graph_lib.getShaderParameter(vertexShader, graph_lib.COMPILE_STATUS)) {
			console.error("Error compiling vertex shader: " + graph_lib.getShaderInfoLog(vertexShader));
		}
	
		console.log("Compiling fragment shader...");

		var fragmentShader = graph_lib.createShader(graph_lib.FRAGMENT_SHADER);
		graph_lib.shaderSource(fragmentShader, shaderData.fragmentShader);
		graph_lib.compileShader(fragmentShader);
	
		if (!graph_lib.getShaderParameter(fragmentShader, graph_lib.COMPILE_STATUS)) {
			console.error("Error compiling fragment shader: " + graph_lib.getShaderInfoLog(fragmentShader));
		}
	
		console.log("Linking shader program...");

		var program = graph_lib.createProgram();		
		graph_lib.attachShader(program, fragmentShader);
		graph_lib.attachShader(program, vertexShader);
		graph_lib.linkProgram(program);
		if (!graph_lib.getProgramParameter(program, graph_lib.LINK_STATUS)) {
			console.error("Error linking shader program: " + graph_lib.getProgramInfoLog(program));
		}

		console.log("Extracting uniform locations...");
		
		var uniforms = {};
		
		shaderData.uniforms.forEach(function(uniform){
			uniforms[uniform] = graph_lib.getUniformLocation(program, uniform);
			if (!uniforms[uniform]) {
				console.warn("Nonexistent or unused uniform in the description of shader " + shaderName + ": " + uniform);
			}
		});
	
		console.log("Extracting attribute locations...");
		
		var attributes = {};
		
		shaderData.attributes.forEach(function(attribute){
			attributes[attribute] = graph_lib.getAttribLocation(program, attribute);
			if (attributes[attribute] == -1) {
				console.warn("Nonexistent or unused attribute in the description of shader " + shaderName + ": " + attribute);
			}
		});
	
		shader.use = function() {
			if (activeShader != shader) {
				graph_lib.useProgram(program);
				activeShader = shader;
			}
		}
	
		shader.uniform = function(name) {
			if (!uniforms[name])
				throw new Error("Shader " + shaderName + " has no uniform named " + name);
			return uniforms[name];
		}		
	
		shader.attribute = function(name) {
			if (attributes[name] === undefined)
				throw new Error("Shader " + shaderName + " has no attribute named " + name);			
			return attributes[name];
		}
		
		shader.hasAttribute = function(name) {
			return attributes[name] != null;
		}

		shader.hasUniform = function(name) {
			return uniforms[name] != null;
		}
		
		return shader;
	}
	
	return graphics;
};
