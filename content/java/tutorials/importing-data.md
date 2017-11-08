---
title: "Importing Data-WorldWind Java/NASA WorldWind"
date: 2017-07-14T09:37:03-04:00
draft: false
header: Importing Data
listdescription: "Describes how to import data to the WorldWind client."
---

## Importing Data

Follow these instructions to import data to the WorldWind client.

**1) Download the WorldWind Java SDK**

Follow the instructions on the Get Started page to download and extract the latest WorldWind Java SDK.

**2) Run the Install Imagery And Elevations Application**

Here is an examples of running the Install Imagery And Elevations application from the command-line:

On Mac OS X and Linux:

```
java -Xmx1024m -cp MyApp.jar:worldwind.jar:worldwindx.jar:jogl-all.jar:gluegen-rt.jar:gdal.jar gov.nasa.worldwindx.examples.dataimport.InstallImageryAndElevationsDemo
```

On Windows:

```
java -Xmx1024m -Dsun.java2d.noddraw=true -cp MyApp.jar;worldwind.jar;worldwindx.jar;jogl-all.jar;gluegen-rt.jar;gdal.jar gov.nasa.worldwindx.examples.dataimport.InstallImageryAndElevationsDemo
```

Note: All *.dll, *.jnilib, and *.so files in the WorldWind folder must be in the same folder as MyApp.jar.

**3) Import Data**

Once the Install Imagery And Elevations application is running, click on the Show Installed Data... button to open the Installed Data window.

In the Installed Data window, locate the Create a full pyramid check box and select it if you are intending to use the imported data on the server, otherwise you can leave it unchecked. Data can be installed as a full pyramid of tiles or as a partial pyramid. Installing a full pyramid takes longer and consumes more space on the user's hard drive, but has the best runtime performance, which is important for the server. Installing a partial pyramid takes less time and consumes less space on the user's hard drive, but requires that the original data remain in the location from which it was installed, and causes WorldWind to create portions of the full pyramid as needed during runtime, resulting in slower runtime performance.

In the Installed Data window, click the Install... button.

Locate and select the imagery or elevation file you would like to import and click the Install button.

The progress window will appear and show progress of the data import.

Once the import task completes, the newly created layer will be added to the WorldWind layer tree and a new button with the name of imported file will appear in the list of installed data. You may click on the button and WorldWind will zoom in to the newly imported data.