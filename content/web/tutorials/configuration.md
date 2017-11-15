---
title: "Configuration-Web WorldWind/NASA WorldWind"
date: 2017-11-15T13:56:48-08:00
draft: false
header: Configuration
listdescription: Illustrates the WorldWind configuration options and how to set them.
---

## Configuration

If you are just getting started with Web WorldWind, you might be interested in its configuration options. The script
below illustrates some of these configurations. Please note that most of these configuration options must be set
before you create the WorldWindow or any other WorldWind object.

---

```groovy
requirejs(['../src/WorldWind',
'./LayerManager'],
function (ww,
LayerManager) {
"use strict";

// Configure the logging level.
WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

// Configure the amount of GPU memory to use.
WorldWind.configuration.gpuCacheSize = 500e6; // 500 MB

// Create a World Window and some layers to display.
var wwd = new WorldWind.WorldWindow("canvasOne");

var layers = [
  {layer: new WorldWind.BMNGLayer(), enabled: true},
  {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
  {layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true},
  {layer: new WorldWind.BingRoadsLayer(null), enabled: false},
  {layer: new WorldWind.CompassLayer(), enabled: true},
  {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
  {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true}
  ];

  for (var l = 0; l < layers.length; l++) {
    layers[l].layer.enabled = layers[l].enabled;
    wwd.addLayer(layers[l].layer);
  }

  // Create a layer manager for controlling layer visibility.
  var layerManger = new LayerManager(wwd);

});
```
---

You can copy/paste this script into your own file, or check it out in the [Web WorldWind examples](https://github.com/NASAWorldWind/WebWorldWind/tree/develop/examples)
on GitHub.