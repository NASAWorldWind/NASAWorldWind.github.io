---
title: "Standalone Example-Web WorldWind/NASA WorldWind"
date: 2017-11-15T14:33:47-08:00
draft: false
header: Standalone Example
listdescription: Describes the Standalone Example for Web WorldWind.
---

## Standalone Example

---

From a visual standpoint, the [Standalone](http://worldwindserver.net/webworldwind/examples/Standalone.html)
looks just like the [Simplest Example](http://worldwindserver.net/webworldwind/examples/Simplest.html).

Get the latest release on GitHub.

Host the WorldWind library and the images folder on your HTTP server

    https://YOUR_SERVER/worldwind.min.js
    https://YOUR_SERVER/image/
    
Get some data, here's example data from nasa https://worldwind32.arc.nasa.gov/WebWorldWind-StandaloneData.tar.gz
        
    ...unpack to
    
    https://YOUR_SEVER/standalone/
        
Add the WorldWind library

     <script src="https://YOUR_SERVER/worldwind.min.js" type="text/javascript"></script>

the creates an HTML5 canvas, 

    <canvas id="canvasOne" width="1024" height="768">
        Your browser does not support HTML5 Canvas.
    </canvas>

Load the data in WorldWind

    // Create a WorldWindow for the canvas. Use a REST elevation model rather than the default.
    var elevationModel = new WorldWind.EarthRestElevationModel(null, "../standalonedata/Earth/DTED0");
    var wwd = new WorldWind.WorldWindow("canvasOne", elevationModel);

    // Add the REST Blue Marble layer that retrieves imagery from local standalone data.
    var blueMarble = new WorldWind.BMNGRestLayer(null, "../standalonedata/Earth/BlueMarble256/");
    wwd.addLayer(blueMarble);

    // Add the REST Landsat layer (this offline data covers only a sector of the globe in North America)
    var landSat = new WorldWind.LandsatRestLayer(null, "../standalonedata/Earth/Landsat");
    wwd.addLayer(landSat);
