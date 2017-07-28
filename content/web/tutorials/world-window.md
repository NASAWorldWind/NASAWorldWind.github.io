---
title: "World Window"
date: 2017-07-26T15:05:14-05:00
draft: false
listdescription: "Notes on the fundamental WorldWind object."
---

## World Window

WorldWindow is the fundamental Web WorldWind object. It represents the presence of Web WorldWind in the web page. Almost all interactions between the app and Web WorldWind occur through a World Window.

A World Window encapsulates an HTML canvas element. The app developer is responsible for creating the canvas, typically by defining a `<canvas>` element in static HTML. The canvas is given an ID and that ID is handed to the WorldWindow constructor to tell the World Window its drawing surface. The World Window directs all drawing to that canvas. Here’s an example of creating a World Window for a canvas whose ID is “canvasOne”:

```javascript
var wwd = new WorldWind.WorldWindow("canvasOne");
```

The canvas, itself, is defined in the associated HTML page as follows:

```html
<div style="position:relative">
    <canvas id="canvasOne" width="1000" height="1000" style="width: 100%; height: auto">
    </canvas>
</div>
```

Here the canvas is given an initial width and height of 1000 pixels, but the style element causes it to resize to the width of the containing `<div>` when displayed, and maintain the initial aspect ratio.

A web page may contain multiple World Windows. Each encapsulates a separate canvas and operates independently of the others.

A World Window contains a Globe, a Navigator and a Layer List. These are all created automatically during construction of the WorldWindow object. The globe and navigator may subsequently be replaced by the app if desired. The layer list holds all layers displayed in that World Window, but it is initially empty. The first thing most apps do is populate it with one or more imagery layers.

The World Window manages the display of the virtual globe or 2D map. Apps need do nothing but add layers and perhaps shapes and initiate redraws when it does so. Behind the scenes, the World Window retrieves imagery and elevation from the internet as needed, generates 3D terrain, and traverses the layer list to display its contents. Its associated navigator translates user input to movements of the globe.

Picking is also provided by the World Window. See this developer’s guide’s section on [Picking](/web/tutorials/picking/) for more information.

### Changing the View

See the [Navigation and Viewing](/web/tutorials/navigation-and-viewing/) page to learn how to make the World Window look at a different location on the globe or to otherwise modify its view.

### Event Listeners

A World Window manages all event handlers associated with its canvas. Rather than specifying event handlers directly on the canvas, apps should establish them on the World Window so that it may coordinate event handling with its own. The call to register event handlers is the same as it would be to define event handlers anywhere:

```javascript
wwd.addEventListener("mousemove", function (event) {...});
```

or for a mobile device:

```javascript
window.addEventListener("touchstart", function (event) {...});
```