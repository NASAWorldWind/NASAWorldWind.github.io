---
title: "Concepts"
date: 2017-07-26T14:39:48-05:00
draft: false
listdescription: "Describes the architecture of Web WorldWind."
---

## Concepts

Web WorldWind is a virtual globe component that you embed in web pages. It provides an interactive, 3D geographic context for information. As a component, it comprises one aspect of a web application or web page. Other components provide textual or graphic information or provide a user interface. In the following  figure, Web WorldWind is just the portion outlined in red. The rest of the components on the web page — the menus, the buttons, the text — are HTML developed by the web page creator.

![Example Web WorldWind Page](/img/web/layout.jpg)

The Web WorldWind component is called a World Window. The web page may contain more than one World Window. Each operates independently of the others. The World Window is the primary object the application interacts with.

### The World Window

The following figure illustrates Web World Wind’s overall architecture. Objects in red are objects the app typically interacts with, in addition to the World Window. Items in cyan represent objects that work behind the scenes to retrieve data from the internet and create what the user sees.

![Web WorldWind Architecture](/img/web/architecture1.jpg)

The World Window object encapsulates the Web WorldWind functionality around an HTML canvas. The canvas is created by the app, typically within a <div> element in an HTML page. It’s ID is passed to WorldWind during construction of a WorldWindow object. An app (web page) may contain more than one WorldWindow object, each for a different canvas.

In addition to acting as a container for the Globe and other objects, the World Window provides picking and scene control. See the World Window chapter of this developer’s guide for more information about it. Also see the World Window API documentation for its interface details.

### Layers

Aside from the World Window, the most fundamental objects in Web WorldWind are layers. Layers contain all the information displayed in the World Window. All imagery, shapes and decorations such as the compass are defined in layers.

Each World Window contains one Layer List, which holds all the layers displayed in that World Window. When the World Window draws the scene, it traverses its layer list in order and draws the imagery and other content listed there.

Typically a layer list includes imagery layers followed by shape layers followed by decoration layers. The World Window’s layer list is empty by default. The first thing a Web WorldWind application must do is add layers to the layer list. You can see this in all the Web WorldWind examples. Here’s an example of adding initial imagery layers along with a compass, a coordinates display and view controls:

```javascript
// Create the World Window.
var wwd = new WorldWind.WorldWindow("canvasOne");

// Create and add imagery layers.
wwd.addLayer(new WorldWind.BMNGLayer());
wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer(null));

// Create and add decoration layers.
wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
```

See the [Layers](/web/tutorials/layers/) section of the tutorials for lots more information about layers.

### Shapes

Shapes represent information that you want to display on or relative to the globe. They can be simple placemarks, complex volumes or shapes draped on the terrain. All shapes are contained in layers and the layers contained in a World Window’s layer list. Web WorldWind provides many different kinds of shapes. See the [Shapes](/web/tutorials/shapes/) tutorial for a listing and complete description of Web World Wind’s shapes.

### Globe

The Globe is responsible for representing the WGS84 ellipsoid and its terrain. It also handles implementation of the various 2D projections that can be utilized instead of the 3D globe. Aside from selecting these projections, the application does not typically interact with the globe. The exception is when the application desires to know terrain elevations, such as when performing line-of-sight calculations, or when it needs to convert between geographic and Cartesian coordinates. See the API documentation for Globe and Globe2D to learn more about the Globe object.

Each World Window has one Globe, created automatically when the World Window is created. The application may replace this globe with another. Most Web WorldWind examples replace the globe with a 2D, flat globe when the user selects a 2D projection.

### Navigator

The Navigator is responsible for converting user actions to manipulations of the globe. It monitors mouse events and user gestures and translates them to pan, zoom or tilt operations on the globe. The Navigator can also be driven by the application to move the view to a particular location or to set its tilt and heading.

Each World Window has its own Navigator, which is created automatically when the World Window is created. The application may subsequently replace this Navigator, perhaps with one the app developer created to operate differently or in response to different gestures.

### Other Objects

The above objects — World Window, Layers, Shapes, Globe, Navigator — are the objects that applications typically interact with. Web WorldWind contains many other objects, most of which operate behind the scenes without any direction needed from the application. This includes those objects that automatically retrieve data such as imagery and elevations from the internet. Applications may interact with these objects to achieve non-default behavior, but doing so is not necessary.

### Extensibility

Web WorldWind is designed to be readily extensible. Developers should feel free to customize Web WorldWind objects to achieve effects that Web WorldWind does not already provide. Applications often extend and customize shapes, for example, or create completely new ones.