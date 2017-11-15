---
title: "Simplest Example-Web WorldWind/NASA WorldWind"
date: 2017-11-15T13:48:00-08:00
draft: false
header: Simplest Example
listdescription: Shows the simplest way to get started with Web WorldWind.
---

## Simplest Example

This tutorial illustrates the simplest way to get started with Web WorldWind. Simply include a short script
in an HTML page, like this:

---

```html
<!DOCTYPE html>
<!-- This is a very simple example of using Web WorldWind. -->
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>WorldWind Example</title>
        <!-- Include the Web WorldWind library. -->
        <script src="http://worldwindserver.net/webworldwind/worldwindlib.min.js" type="text/javascript"></script>
    </head>
    <body>
        <div style="position: absolute; top: 50px; left: 50px;">
            <!-- Create a canvas for Web WorldWind. -->
            <canvas id="canvasOne" width="1024" height="768">
                Your browser does not support HTML5 Canvas.
            </canvas>
        </div>
        <script>
            // Register an event listener to be called when the page is loaded.
            window.addEventListener("load", eventWindowLoaded, false);

            // Define the event listener to initialize Web WorldWind.
            function eventWindowLoaded() {
            // Create a WorldWindow for the canvas.
            var wwd = new WorldWind.WorldWindow("canvasOne");

            // Add some image layers to the WorldWindow's globe.
            wwd.addLayer(new WorldWind.BMNGOneImageLayer());
            wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer());

            // Add a compass, a coordinates display and some view controls to the WorldWindow.wwd.addLayer(new WorldWind.CompassLayer());
            wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
            wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
            }
        </script>
    </body>
</html>
```
---

## The Breakdown

This example downloads the minified Web WorldWind library, worldwind.min.js, the creates an HTML5 canvas, then
defines a script that creates the WorldWind and populates it with two image layers and three control layers. The
result is a simple, interactive [globe](https://files.worldwind.arc.nasa.gov/artifactory/apps/web/examples/SimplestExample.html).

## Gestures

Try zooming in with your mouse wheel (or a pinch gesture for mobile devices). Drag the mouse or your finger to pan
around the globe. Drag the right mouse button or your two fingers upward to tilt the globe.
