---
title: "Examples"
date: 2017-07-25T16:24:36-05:00
draft: false
---

## Examples

Web WorldWind includes many different examples in the source code. The examples are simple in order to make each feature easy to learn.

You can run the examples directly from this page by clicking on the HTML links here. It is not necessary to download Web WorldWind to run them. If you want to download and run them locally, see the Running Local section of the [Deployment](/web/tutorials/deployment/) tutorial.

Most examples use jquery, Bootstrap and requireJS, but those technologies are not required to use Web WorldWind.

All examples start out doing two things: Create a WorldWindow and create layers to display in that WorldWindow.  Here is typical code that does that:

```javascript
// Create the WorldWindow in a canvas named "canvasOne".
var wwd = new WorldWind.WorldWindow("canvasOne");

// Define layers to populate the WorldWindow
var layers = [
    {layer: new WorldWind.BMNGLayer(), enabled: true},
    {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
    {layer: new WorldWind.BingAerialLayer(null), enabled: false},
    {layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true},
    {layer: new WorldWind.BingRoadsLayer(null), enabled: false},
    {layer: new WorldWind.CompassLayer(), enabled: true},
    {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
    {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true}
];

// Create those layers.
for (var l = 0; l < layers.length; l++) {
    layers[l].layer.enabled = layers[l].enabled;
    wwd.addLayer(layers[l].layer);
}
```

Subsequent code in the examples creates shapes or other features specific to the example. All that code is followed by a call to redraw the WorldWindow to make it up-to-date with the content that’s been added to it:

```javascript
wwd.redraw();
```

Notice that Web WorldWind objects are created using the WorldWind global object.

Most examples also include a Layer Manager (defined in [examples/LayerManager.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/LayerManager.js)) to enable the user to control layer visibility and projection type:

```javascript
// Create a layer manager for controlling layer visibility.
var layerManger = new LayerManager(wwd);
```

## Basic Examples

[SimplestExample.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/SimplestExample.html) illustrates the most basic Web WorldWind program there is. Its six lines of JavaScript code create a fully functioning WorldWindow with a globe containing terrain and high-resolution imagery. The program also creates a compass, a layer that shows the current map coordinates, and a layer with view controls. (With the exception of the vertical exaggeration control, the view controls are redundant with mouse and gesture input.)

[BasicExample.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/BasicExample.html) and [BasicExample.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/BasicExample.js) define the template for most Web WorldWind examples. This example performs only the operations described above. The result is a full-featured, interactive Web WorldWind globe with layer and projection control.

[Configuration.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/Configuration.js) shows how to set Web WorldWind’s configuration properties, although that’s seldom necessary. Most configuration properties must be set before creating a WorldWindow or other Web WorldWind objects. Functionally this example behaves the same as BasicExample, above.

## Shape Examples

[GeographicText.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/GeographicText.html) and [GeographicText.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/GeographicText.js) illustrate the use of Web WorldWind’s GeographicText shape. The example defines a large number of the word’s mountain peaks and displays each peak’s name at its geographic location. A GeographicText shape is created for each peak, and each shape is assigned a common TextAttributes bundle. The shapes are all added to a single RenderableLayer, which is added to the WorldWindow’s layer list.

[Paths.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/Paths.html) and [Paths.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/Paths.js) show how to use Path and several of its unique features, including altitude mode, terrain following and extrusion. It also show how to assign separate appearance attributes for highlighting, and  instantiates a HighlightController to handle highlighting automatically.

[Polygons.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/Polygons.html) and [Polygons.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/Polygons.js) give examples of creating Polygons, both simple polygons and polygons with multiple boundaries defining holes, as well as extruded polygons. Images are applied to several of the polygons. The polygons are given separate highlight attributes so that they stand out when highlighted by the HighlightController included by the program.

[PlacemarksAndPicking.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/PlacemarksAndPicking.html) and [PlacemarksAndPicking.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/PlacemarksAndPicking.js) show how to create Placemarks with labels. It creates 21 placemarks using Web WorldWind’s built-in push-pin placemark images. It instructs Web WorldWind to draw leader lines from each placemark’s position in space to the ground. And it explicitly shows how to monitor picking and highlight the placemarks in response to pick events.

[CustomPlacemark.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/CustomPlacemark.html) and [CustomPlacemark.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/CustomPlacemark.js) illustrate the use of a custom placemark image created on the fly using the 2D context of an HTML canvas.

[ScreenImage.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/ScreenImage.html) and [ScreenImage.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/ScreenImage.js) show how to use Web WorldWind’s ScreenImage shape. The example creates two screen images, one using a predefined image and another using an image created on the fly using the 2D context of an HTML canvas. The example also shows how to monitor pick events and highlight the screen images when they’re picked. Additionally, it shows how to listen for pick events on the compass and reset the globe’s orientation when the compass is picked.

[ScreenText.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/ScreenText.html) and [ScreenText.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/ScreenText.js) display ScreenText at various places on the WorldWindow. The example shows how to position screen text relative to the WorldWindow using Web WorldWind’s Offset class.

[SurfaceImage.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/SurfaceImage.html) and [SurfaceImage.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/SurfaceImage.js) illustrate how to display images on the globe’s surface using Web WorldWind’s SurfaceImage class. The example creates one image using a predefined image and another image created on the fly using the 2D context of an HTML canvas. It also shows how to monitor pick events on surface images.

[GeographicMeshes.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/GeographicMeshes.html) and [GeographicMeshes.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/GeographicMeshes.js) displays two GeograhicMesh shapes, one with a custom image applied to it.

## Picking Examples

[PlacemarksAndPicking.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/PlacemarksAndPicking.html) and [PlacemarksAndPicking.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/PlacemarksAndPicking.js)  show how to monitor picking and highlight shapes in response to pick events.

[PickAllShapesInRegion.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/PickAllShapesInRegion.html) and [PickAllShapesInRegion.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/PickAllShapesInRegion.js) illustrate Web WorldWind’s region-picking functionality, in which all shapes in a defined screen-coordinate region are picked. The example creates and displays a grid of Placemarks, then monitors mouse motion and tap gestures. When those events occur, the example defines a small region around the event point and invokes the WorldWindow’s region picking function. (See WorldWindow.pickAllShapesInRegion().) All the placemarks within the specified region are identified by the WorldWindow as being picked, and the example highlights each of them.

[ScreenImage.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/ScreenImage.html) and [ScreenImage.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/ScreenImage.js) shows how to monitor pick events and highlight  screen images when they’re picked. Additionally, it shows how to listen for pick events on the compass and reset the globe’s orientation when the compass is picked.

[SurfaceImage.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/SurfaceImage.html) and [SurfaceImage.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/SurfaceImage.js) show how to monitor pick events on surface images.

[SurfaceShapes.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/SurfaceShapes.html) and [SurfaceShapes.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/SurfaceShapes.js) illustrate Web WorldWind’s surface shapes, shapes that drape themselves over the terrain. The example creates an instance of each surface shape type.

[GoToLocation.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/GoToLocation.html) and [GoToLocation.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/GoToLocation.js) show how to use terrain picking in conjunction with a GoToAnimator to implement a click-and-go capability. The user simply clicks on a geographic location to cause the view to move its center there. This example also shows how to use a click recognizer and a tap recognizer.

## Event and Gesture Handling Examples

[PlacemarksAndPicking.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/PlacemarksAndPicking.html) and [PlacemarksAndPicking.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/PlacemarksAndPicking.js) illustrate how to use a mouse event handler and a tap gesture recognizer to pick placemarks. GoToLocation.html and GoToLocation.js show how to use a tap gesture recognizer and a click recognizer to enable the user to click on a location to center in the view.

## Navigation and Viewing Examples

[GoToLocation.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/GoToLocation.html) and [GoToLocation.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/GoToLocation.js) show how to smoothly move the view to a specific location using a GoToAnimator. LayerManager.js also shows how to use a GoToAnimator to move the view to a location corresponding to a named point of interest.

## Time Series Examples

[BlueMarbleTimeSeries.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/BlueMarbleTimeSeries.html) and [BlueMarbleTimeSeries.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/BlueMarbleTimeSeries.js) display a time series animation of the 12 months (2004) of Blue Marble imagery. Be sure to read the source carefully as some data is required to be hosted locally for this example to work.

## Other Examples

[MultiWindow.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/MultiWindow.html) and [MultiWindow.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/MultiWindow.js) show how to place multiple WorldWindows on the same page. This example creates three WorldWindows and places them in a row. Each WorldWindow contains an imagery layer and a RenderableLayer containing a Path. These layers are shared among all the WorldWindows. Each WorldWindow also contains a CompassLayer, a CoordinatesDisplayLayer, and a ViewControlsLayer which are window-specific. Thus each WorldWindow has its own, unshared copy of these layers. Navigation among the WorldWindows is not synchronized, so each WorldWindow can display a completely different view of the globe.

[Shapefiles.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/Shapefiles.html) and [Shapefiles.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/Shapefiles.js) illustrate the retrieval and display of shapefiles using Web WorldWind’s Shapefile class. Several shapefiles are retrieved from the internet: Countries, Cities and U.S. States. Associated with these shapefiles are attributes files that identify country, state and city names. Those attribute files are automatically retrieved by Web WorldWind. The example uses the shapefile record callback interface to associate attributes with the Web WorldWind shape that’s created for the associated geometry.