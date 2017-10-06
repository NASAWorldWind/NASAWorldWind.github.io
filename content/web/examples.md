---
title: "Web WorldWind Examples"
date: 2017-07-25T16:24:36-05:00
draft: false
---

## Examples

---

Web WorldWind includes many different examples in the source code. The examples are simple in order to make each feature easy to learn.

You can run the examples directly from this page by clicking on the HTML links. It is not necessary to download Web WorldWind to run them. If you want to download and run them locally, see the Running Local section of the [Deployment tutorial](/web/tutorials/deployment/).

Most examples use jquery, Bootstrap, and requireJS, but those technologies are not required to use Web WorldWind.

All examples start out doing two things: Create a WorldWindow and create layers to display in that WorldWindow.  Here is typical code that does that:

---

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
---

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
---

## Basic Examples

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/SimplestExample.html">SimplestExample.html</a> illustrates the most basic Web WorldWind program there is. Six lines of JavaScript code create a fully functioning WorldWindow with a globe containing terrain and high-resolution imagery. The program also creates a compass, a layer that shows the current map coordinates, and a layer with view controls. (With the exception of the vertical exaggeration control, the view controls are redundant with mouse and gesture input.)

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/BasicExample.html">BasicExample.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/BasicExample.js">BasicExample.js</a> define the template for most Web WorldWind examples. This example performs only the operations described above. The result is a full-featured, interactive Web WorldWind globe with layer and projection control.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/Configuration.js">Configuration.js</a> shows how to set Web WorldWind’s configuration properties, although that’s seldom necessary. Most configuration properties must be set before creating a WorldWindow or other Web WorldWind objects. Functionally, this example behaves the same as the BasicExample above.

---

## Shape Examples

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/GeographicText.html">GeographicText.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/GeographicText.js">GeographicText.js</a> illustrate the use of Web WorldWind’s GeographicText shape. The example defines a large number of the world’s mountain peaks and displays each peak’s name at its geographic location. A GeographicText shape is created for each peak, and each shape is assigned a common TextAttributes bundle. The shapes are all added to a single RenderableLayer, which is added to the WorldWindow’s layer list.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/Paths.html">Paths.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/Paths.js">Paths.js</a> show how to use Path and several of its unique features, including altitude mode, terrain following and extrusion. It also show how to assign separate appearance attributes for highlighting, and  instantiates a HighlightController to handle highlighting automatically.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/Polygons.html">Polygons.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/Polygons.js">Polygons.js</a> give examples of creating Polygons, both simple polygons and polygons with multiple boundaries defining holes, as well as extruded polygons. Images are applied to several of the polygons. The polygons are given separate highlight attributes so that they stand out when highlighted by the HighlightController included by the program.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/PlacemarksAndPicking.html">PlacemarksAndPicking.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/PlacemarksAndPicking.js">PlacemarksAndPicking.js</a> show how to create Placemarks with labels. It creates 21 placemarks using Web WorldWind’s built-in push-pin placemark images. It instructs Web WorldWind to draw leader lines from each placemark’s position in space to the ground. And it explicitly shows how to monitor picking and highlight the placemarks in response to pick events.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/CustomPlacemark.html">CustomPlacemark.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/CustomPlacemark.js">CustomPlacemark.js</a> illustrate the use of a custom placemark image created on the fly using the 2D context of an HTML canvas.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/ScreenImage.html">ScreenImage.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/ScreenImage.js">ScreenImage.js</a> show how to use Web WorldWind’s ScreenImage shape. The example creates two screen images, one using a predefined image and another using an image created on the fly using the 2D context of an HTML canvas. The example also shows how to monitor pick events and highlight the screen images when they’re picked. Additionally, it shows how to listen for pick events on the compass and reset the globe’s orientation when the compass is picked.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/ScreenText.html">ScreenText.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/ScreenText.js">ScreenText.js</a> display ScreenText at various places on the WorldWindow. The example shows how to position screen text relative to the WorldWindow using Web WorldWind’s Offset class.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/SurfaceImage.html">SurfaceImage.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/SurfaceImage.js">SurfaceImage.js</a> illustrate how to display images on the globe’s surface using Web WorldWind’s SurfaceImage class. The example creates one image using a predefined image and another image created on the fly using the 2D context of an HTML canvas. It also shows how to monitor pick events on surface images.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/GeographicMeshes.html">GeographicMeshes.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/GeographicMeshes.js">GeographicMeshes.js</a> displays two GeograhicMesh shapes, one with a custom image applied to it.

---

## Picking Examples

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/PlacemarksAndPicking.html">PlacemarksAndPicking.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/PlacemarksAndPicking.js">PlacemarksAndPicking.js</a> show how to monitor picking and highlight shapes in response to pick events.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/PickAllShapesInRegion.html">PickAllShapesInRegion.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/PickAllShapesInRegion.js">PickAllShapesInRegion.js</a> illustrate Web WorldWind’s region-picking functionality, in which all shapes in a defined screen-coordinate region are picked. The example creates and displays a grid of Placemarks, then monitors mouse motion and tap gestures. When those events occur, the example defines a small region around the event point and invokes the WorldWindow’s region picking function. (See WorldWindow.pickAllShapesInRegion().) All the placemarks within the specified region are identified by the WorldWindow as being picked, and the example highlights each of them.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/ScreenImage.html">ScreenImage.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/ScreenImage.js">ScreenImage.js</a> shows how to monitor pick events and highlight  screen images when they’re picked. Additionally, it shows how to listen for pick events on the compass and reset the globe’s orientation when the compass is picked.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/SurfaceImage.html">SurfaceImage.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/SurfaceImage.js">SurfaceImage.js</a> show how to monitor pick events on surface images.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/SurfaceShapes.html">SurfaceShapes.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/SurfaceShapes.js">SurfaceShapes.js</a> illustrate Web WorldWind’s surface shapes, shapes that drape themselves over the terrain. The example creates an instance of each surface shape type.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/GoToLocation.html">GoToLocation.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/GoToLocation.js">GoToLocation.js</a> show how to use terrain picking in conjunction with a GoToAnimator to implement a click-and-go capability. The user simply clicks on a geographic location to cause the view to move its center there. This example also shows how to use a click recognizer and a tap recognizer.

---

## Event and Gesture Handling Examples

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/PlacemarksAndPicking.html">PlacemarksAndPicking.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/PlacemarksAndPicking.js">PlacemarksAndPicking.js</a> illustrate how to use a mouse event handler and a tap gesture recognizer to pick placemarks. GoToLocation.html and GoToLocation.js show how to use a tap gesture recognizer and a click recognizer to enable the user to click on a location to center in the view.

---

## Navigation and Viewing Examples

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/GoToLocation.html">GoToLocation.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/GoToLocation.js">GoToLocation.js</a> show how to smoothly move the view to a specific location using a GoToAnimator. LayerManager.js also shows how to use a GoToAnimator to move the view to a location corresponding to a named point of interest.

---

## Time Series Examples

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/BlueMarbleTimeSeries.html">BlueMarbleTimeSeries.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/BlueMarbleTimeSeries.js">BlueMarbleTimeSeries.js</a> display a time series animation of the 12 months (2004) of Blue Marble imagery. Be sure to read the source carefully as some data is required to be hosted locally for this example to work.

---

## Other Examples

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/MultiWindow.html">MultiWindow.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/MultiWindow.js">MultiWindow.js</a> show how to place multiple WorldWindows on the same page. This example creates three WorldWindows and places them in a row. Each WorldWindow contains an imagery layer and a RenderableLayer containing a Path. These layers are shared among all the WorldWindows. Each WorldWindow also contains a CompassLayer, a CoordinatesDisplayLayer, and a ViewControlsLayer which are window-specific. Thus each WorldWindow has its own, unshared copy of these layers. Navigation among the WorldWindows is not synchronized, so each WorldWindow can display a completely different view of the globe.

<a target="_blank" href="http://worldwindserver.net/webworldwind/examples/Shapefiles.html">Shapefiles.html</a> and <a target="_blank" href="http://worldwindserver.net/webworldwind/examples/Shapefiles.js">Shapefiles.js</a> illustrate the retrieval and display of shapefiles using Web WorldWind’s Shapefile class. Several shapefiles are retrieved from the internet: Countries, Cities and U.S. States. Associated with these shapefiles are attributes files that identify country, state and city names. Those attribute files are automatically retrieved by Web WorldWind. The example uses the shapefile record callback interface to associate attributes with the Web WorldWind shape that’s created for the associated geometry.