---
title: "Simplest Example-Web WorldWind/NASA WorldWind"
date: 2017-11-15T13:48:00-08:00
draft: false
header: Simplest Example
listdescription: Shows the simplest way to get started with Web WorldWind.
---

## Simplest Example

This tutorial illustrates how to build a simple WorldWind globe in an HTML file. Zoom in with your mouse wheel (pinch gesture for mobile devices).
Drag the mouse or your finger to pan around the globe. Drag the right mouse button or
your two fingers upward to tilt the globe.

{{% latestWorldWindScript url="https://files.worldwind.arc.nasa.gov/artifactory" repo="web" %}}
{{% simplestExample %}}

---

### Breakdown

First, in the head tag of your HTML, add a script element to include the Web WorldWind library.

    <script src="{{% latestArtifactoryPath url="https://files.worldwind.arc.nasa.gov/artifactory" repo="web" %}}/worldwind.min.js" type="text/javascript"></script>

Next, create an HTML5 canvas, defining its width and height. You will also want to include a message for browsers that
do not support HTML5 Canvas.

    <canvas id="canvasOne" width="1024" height="768">
        Your browser does not support HTML5 Canvas.
    </canvas>

Finally, you will include a script between the body tags of your HTML, like this:

    // Create a WorldWindow for the canvas.
    var wwd = new WorldWind.WorldWindow("canvasOne");

    // Add some image layers to the WorldWindow's globe.
    wwd.addLayer(new WorldWind.BMNGOneImageLayer());
    wwd.addLayer(new WorldWind.BMNGLandsatLayer());

    // Add a compass, a coordinates display and some view controls to the WorldWindow.
    wwd.addLayer(new WorldWind.CompassLayer());
    wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
    wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

This script does two things. First, it creates a WorldWindow for your HTML5 canvas. Then it populates the WorldWindow
with various image and control layers.

---

### Putting it All Together

Here is what it looks like in a working example:

    <!DOCTYPE html>
    <!-- This is a very simple example of using Web WorldWind. -->
    <html>
    <head lang="en">
    <meta charset="UTF-8">
    <title>WorldWind Example</title>
    <!-- Include the Web WorldWind library. -->
    <script src="{{% latestArtifactoryPath url="https://files.worldwind.arc.nasa.gov/artifactory" repo="web"%}}/worldwind.min.js" type="text/javascript"></script>
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
            wwd.addLayer(new WorldWind.BMNGLandsatLayer());

            // Add a compass, a coordinates display and some view controls to the WorldWindow.
            wwd.addLayer(new WorldWind.CompassLayer());
            wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
            wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
        }
    </script>
    </body>
    </html>

<br></br>
<br></br>