var sonic_gl = function(canvas) {
  var engine = {};
  
  var graphics = null;
  var sounds = null;
  var world = null;
  var input = null;
  var resources = null;
  
  engine["graphics_engine"] = graphics;
  engine["sound_system"] = sounds;
  engine["world_engine"] = world;
  engine["input_controller"] = input;
  engine["resource_manager"] = resources;
};
