---
title: "Standalone Example-Web WorldWind/NASA WorldWind"
date: 2017-11-15T14:33:47-08:00
draft: false
header: Standalone Example
listdescription: Describes the how to host Web WorldWind on your own HTTP server.
---

## Hosting Locally

---

### The Data

Get the [latest release](https://github.com/NASAWorldWind/WebWorldWind/releases/latest) on GitHub.

Host the WorldWind library and the images folder on your HTTP server:

    https://YOUR_SERVER/worldwind.min.js
    https://YOUR_SERVER/image/

Get some data and unpack to:

    https://YOUR_SEVER/standalone/

You can also use this [example data](https://worldwind32.arc.nasa.gov/WebWorldWind-StandaloneData.tar.gz) from NASA.
**The standalone folder is specific to the example data from NASA. With custom data, the folder could be named anything.**
---

### The Script

Add the WorldWind library:

    <script src="https://YOUR_SERVER/worldwind.min.js" type="text/javascript"/>

Create an HTML5 canvas:

    <canvas id="canvasOne" width="1024" height="768">
        Your browser does not support HTML5 Canvas.
    </canvas>

Load the data in WorldWind:

    // Create a WorldWindow for the canvas. Use a REST elevation model rather than the default.
    var elevationModel = new WorldWind.EarthRestElevationModel(null, "../standalonedata/Earth/DTED0");
    var wwd = new WorldWind.WorldWindow("canvasOne", elevationModel);

    // Add the REST Blue Marble layer that retrieves imagery from local standalone data.
    var blueMarble = new WorldWind.BMNGRestLayer(null, "../standalonedata/Earth/BlueMarble256/");
    wwd.addLayer(blueMarble);

    // Add the REST Landsat layer (this offline data covers only a sector of the globe in North America)
    var landSat = new WorldWind.LandsatRestLayer(null, "../standalonedata/Earth/Landsat");
    wwd.addLayer(landSat);

---

You can see this tutorial in action through the [Standalone Example](https://files.worldwind.arc.nasa.gov/artifactory/apps/web/examples/Standalone.html).

<br></br>
<br></br>