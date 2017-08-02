---
title: "Web WorldWind Get Started"
date: 2017-07-27T11:21:56-05:00
draft: false
---

## Get Started

It’s very easy to get started using Web WorldWind. There’s nothing to download. You simply include a short script in an HTML page, as in this example:

```html
<!DOCTYPE html>
<!-- This is a very simple example of using Web WorldWind. -->
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>WorldWind Example</title>
    <!-- Include the Web WorldWind library. -->
    <script src="http://worldwindserver.net/webworldwind/worldwindlib.js" type="text/javascript"></script>
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

        // Add a compass, a coordinates display and some view controls to the WorldWindow.
        wwd.addLayer(new WorldWind.CompassLayer());
        wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
        wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
    }
</script>
</body>
</html>
```

This example first includes the Web WorldWind library, worldwindlib.js, then creates an HTML5 canvas, then defines a script that creates the WorldWindow and populates it with two image layers and three control layers. Click this link to see the web page it creates in a new window. The page contains an interactive 3D virtual globe. Try zooming in with your mouse wheel or on a mobile device with a pinch gesture. Drag the mouse or your finger to pan around the globe. Drag the right mouse button or your two fingers upward to tilt the globe.

Web WorldWind provides much more functionality than is available in this simple example. The Examples page illustrates much of that functionality in simple examples. The Developer’s Guide describes Web WorldWind’s functionality in detail. The Deployments page explains how to deploy Web WorldWind at  your own web site.

If you need help, see the resources listed on the Home page, especially the Web WorldWind forum.