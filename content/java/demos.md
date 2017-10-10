---
title: "Demos-WorldWind Java/NASA WorldWind"
date: 2017-07-13T00:02:06-04:00
draft: false
---

## Demos

The applications here demonstrate some of WorldWind's rich capabilities. Also see [WorldWind Europa Challenge site](http://eurochallenge.como.polimi.it/) for a collection of applications created by the WorldWind Europa Challenge teams.

---
## Requirements

- Up to date video card drivers
- Oracle Java Runtime Environment (JRE) 1.7.0
- Java and OpenGL setup can be tested using JOGL demo site.

---

{{% panel title="Application Template" link="https://worldwind.arc.nasa.gov/java/latest/webstart/ApplicationTemplate.jnlp" imgUrl="/img/java/applicationtemplate_01_250.jpg" %}}
Displays the default globe with its default layers. Includes capabilities such as a compass and status bar that are
common to most applications, and presents Earth within a star field and with an atmosphere. Only 6 lines
of code are required to instantiate everything seen here.
{{% /panel %}}

---

{{% panel title="KML Viewer" link="https://worldwind.arc.nasa.gov/java/latest/webstart/KMLViewer.jnlp" imgUrl="/img/java/kmlviewer_01_250.jpg" %}}
Demonstrates loading, displaying, and interacting with KML content in WorldWind.
{{% /panel %}}

---

{{% panel title="WMS Layer Manager" link="https://worldwind.arc.nasa.gov/java/latest/webstart/WMSLayerManager.jnlp" imgUrl="/img/java/wmslayermanager_01_250.jpg" %}}
Features a WMS layer panel that allows you to access any WMS server and
        layers.

To add a server, click on the + tab and enter a url. After the WMS discovery process, the list of available layers is displayed. Select one to add it to the current globe layer list. Unselect it to remove it.
{{% /panel %}}

---

{{% panel title="Installing Images and Elevations" link="https://worldwind.arc.nasa.gov/java/latest/webstart/InstallImageryAndElevationsDemo.jnlp" imgUrl="/img/java/rasterviewer.png" %}}
Enables a user to install image data and elevation data from a file on the local hard drive. Data can be installed as
a full pyramid of tiles or as a partial pyramid.

Installing a full pyramid takes longer and consumes more space on the user's hard drive, but has the best runtime performance. Installing a partial pyramid takes less time and consumes less space on the user's hard drive, but requires that the original data not be moved or deleted.
{{% /panel %}}

---

{{% panel title="Export Surface Imagery and Elevations" link="https://worldwind.arc.nasa.gov/java/latest/webstart/ExportImageOrElevations.jnlp" imgUrl="/img/java/exportimageorelevations_01_250.jpg" %}}
Demonstrates how to use the SectorSelector utility to save a selected region of surface imagery and elevations to a GeoTIFF file.
{{% /panel %}}

---

{{% panel title="Scankort Denmark Data" link="https://worldwind.arc.nasa.gov/java/latest/webstart/ScankortDenmark.jnlp" imgUrl="/img/java/scankortdenmark_01_250.jpg" %}}
Demonstrates high resolution imagery (0.2 meters per pixel) and elevation data (1.6 meters per pixel) served by the WorldWind WMS, and visualized by the WorldWind Java client.
{{% /panel %}}

---

{{% panel title="Rigid Shapes" link="https://worldwind.arc.nasa.gov/java/latest/webstart/RigidShapes.jnlp" imgUrl="/img/java/rigidshapes_01_250.jpg" %}}
Demonstrates visualization of common rigid shape types in WorldWind Java. Includes six rigid shape types: Box, Cone, Cylinder, Ellipsoid/Sphere, Pyramid, and Wedge.
{{% /panel %}}

---

{{% panel title="Extruded Shapes" link="https://worldwind.arc.nasa.gov/java/latest/webstart/ExtrudedShapes.jnlp" imgUrl="/img/java/extrudedshapes_01_250.jpg" %}}
Shows visualization of textured 3D buildings with WorldWind Java SDK Extruded Shapes.
{{% /panel %}}

---

{{% panel title="Surface Shapes" link="https://worldwind.arc.nasa.gov/java/latest/webstart/SurfaceShapes.jnlp" imgUrl="/img/java/surfaceshapes_01_250.jpg" %}}
Demonstrates visualization of common terrain following shapes in WorldWind Java. Includes five surface shape types: SurfacePolyline, SurfaceQuad/SurfaceSquare, SurfaceEllipse/SurfaceCircle, SurfaceSector, and SurfacePolygon.
{{% /panel %}}

---

{{% panel title="Airspaces" link="https://worldwind.arc.nasa.gov/java/latest/webstart/Airspaces.jnlp" imgUrl="/img/java/airspaces_01_250.jpg" %}}
Demonstrates the WorldWind Java controlled airspaces tookit.

Airspaces feature 3D volumes controlled by geographic coordinates and upper- and lower- altitude boundaries. Airspaces optionally conform to the terrain as you move them. They demonstrate what's possible in terms of dynamic manipulation of data in 3D space.
{{% /panel %}}

---

{{% panel title="Analytic Surface" link="https://worldwind.arc.nasa.gov/java/latest/webstart/AnalyticSurface.jnlp" imgUrl="/img/java/analyticsurface_01_250.jpg" %}}
Demonstrates visual representation of scalar values over a grid of geographic positions. AnalyticSurface supports dynamic scalar data by providing a simple, high throughput rendering pipeline for the application.

This demonstrates two unique surface types:

- A dynamic surface representing random altitudes over the Coast of Florida, USA.
- A static surface representing annual precipitation in Washington State, USA.
{{% /panel %}}


---

{{% panel title="Video On Terrain" link="https://worldwind.arc.nasa.gov/java/latest/webstart/VideoOnTerrain.jnlp" imgUrl="/img/java/videoonterrain_01_250.jpg" %}}
Illustrates how applications can display video on the globe's surface.
{{% /panel %}}

---

{{% panel title="Web Browser Balloons" link="https://worldwind.arc.nasa.gov/java/latest/webstart/VideoOnTerrain.jnlp" imgUrl="/img/java/webbrowserballoons_01_250.jpg" %}}
Demonstrates use of WorldWind browser balloons to display HTML, JavaScript, and Flash content to the user in the form of a screen-aligned balloon. There are two browser balloon types: *ScreenBrowserBalloon* which displays a balloon at a point on the screen, and *GlobeBrowserBalloon* which displays a balloon attached to a position on the Globe.
{{% /panel %}}

---

{{% panel title="Annotations" link="https://worldwind.arc.nasa.gov/java/latest/webstart/Annotations.jnlp" imgUrl="/img/java/annotations_01_250.jpg" %}}
Allows you to experiment with the multiple options of WorldWind Java annotation feature.

Annotations are text labels with support for multiline text, simple HTML and many styling attributes such as font face, size and colors, bubble shapes and background image.
{{% /panel %}}

---

{{% panel title="On Screen Controls" link="https://worldwind.arc.nasa.gov/java/latest/webstart/AnnotationControls.jnlp" imgUrl="/img/java/annotationcontrols_01_250.jpg" %}}
Demonstrates the use of WorldWind annotations to create simple user interfaces embedded into the WorldWindow.
{{% /panel %}}

---

{{% panel title="MGRS Graticule" link="https://worldwind.arc.nasa.gov/java/latest/webstart/MGRSGraticule.jnlp" imgUrl="/img/java/mgrsgraticule_01_250.jpg" %}}
Shows visualization of the Military Grid Reference System (MGRS) as a graticule overlayed on the globe's surface.
{{% /panel %}}

---

{{% panel title="Terrain Profilier" link="https://worldwind.arc.nasa.gov/java/latest/webstart/TerrainProfiler.jnlp" imgUrl="/img/java/terrainprofiler_01_250.jpg" %}}
Shows the terrain profile layer in action with its various controls. Allows a view of a realtime section profile
graph for any place on the planet, at any scale - continent, country or mountain range... just by moving the mouse.

It proves particularly useful to explore the ocean floors where the bathymetry data reveals important geologic features.
{{% /panel %}}

---

{{% panel title="Flat World Earthquakes" link="https://worldwind.arc.nasa.gov/java/latest/webstart/FlatWorldEarthquakes.jnlp" imgUrl="/img/java/flatworld_02_250.jpg" %}}
Shows the latest earthquakes over a flat world projection. Allows you to see the whole globe at once while
retaining the capability to zoom onto the surface and still experience 3D terrain.
{{% /panel %}}

---

{{% panel title="Anaglyph Stereo" link="https://worldwind.arc.nasa.gov/java/latest/webstart/AnaglyphStereo.jnlp" imgUrl="/img/java/anaglyphstereo_01_250.jpg" %}}
Shows anaglyph stereo viewing capability. It allows you to explore the world in 'real' 3D using red and cyan glasses
        with the red filter over the left eye.

To get a comfortable experience use the slider to adjust the interocular distance.
{{% /panel %}}

---

{{% panel title="Multi-Window View Volume" link="https://worldwind.arc.nasa.gov/java/latest/webstart/MultiWindowViewVolume.jnlp" imgUrl="/img/java/multiwindowviewvolume_01_250.jpg" %}}
Demonstrates WorldWind Java SDK support for rendering globes in multiple application windows. WorldWind automatically shares resources wherever possible across multiple windows in a single runtime environment.
{{% /panel %}}

---

{{% panel title="View Tracking" link="https://worldwind.arc.nasa.gov/java/latest/webstart/KeepingObjectsInView.jnlp" imgUrl="/img/java/keepingobjectsinview_01_250.jpg" %}}
Demonstrates how applications can keep a set of moving objects in view.
{{% /panel %}}

---

{{% panel title="Line Builder" link="https://worldwind.arc.nasa.gov/java/latest/webstart/LineBuilder.jnlp" imgUrl="/img/java/linebuilder_01_250.jpg" %}}
Allows you to interactively draw a path over the terrain surface.

It demonstrates how an application can use and consume mouse events before they get to the default view input handler.
{{% /panel %}}

---

{{% panel title="Airspace Builder" link="https://worldwind.arc.nasa.gov/java/latest/webstart/AirspaceBuilder.jnlp" imgUrl="/img/java/airspacebuilder_01_250.jpg" %}}
Demonstrates runtime construction of 3D shapes using the WorldWind Java controlled airspace shapes.

- **New shape** - Click the "New shape" button. When "Auto fill new shapes" is checked a default shape is created automatically
- **Select a shape** - Left mouse button click
- **Delete a shape** - Select the shape, then press the delete key.
- **Move a shape** or move a control point - Drag the shape or control point with the left mouse button
- **Resize a shape** - Hold the Shift key and drag any control point with the left mouse button
- **Create a control point** - Hold the Alt key and click the left mouse button
- **Delete a control point** - Hold the Ctrl key and click the left mouse button
{{% /panel %}}

---

## User Created Application Examples
<br>
{{% panel title="GLIDER - Globally Leveraged integrated data explorer for research" link="http://miningsolutions.itsc.uah.edu/glider/" imgUrl="/img/java/glider_01_250.jpg" %}}
[GLIDER](http://miningsolutions.itsc.uah.edu/glider/) (Globally Leveraged Integrated Data Explorer for Research) is a NASA ACESS funded project managed at [UAHuntsville](http://www.uah.edu/) [ITSC](http://www.itsc.uah.edu/). The goal of this project is to integrate three existing applications, namely WorldWind, Interactive Visualizer and Image Classifier (IVICS) and the Algorithm Development and Mining (ADaM) toolkit into a single seamless tool for research and education community. GLIDER will be a complete comprehensive, easy to use tool for thematic information extraction from NASA imagery.
{{% /panel %}}

---

{{% panel title="EOLi (Earth Observation Link) by ESA (European Space Agency)" link="http://earth.esa.int/EOLi/EOLi.html" imgUrl="/img/java/eoli_01_250.jpg" %}}
[ESA EOLi](http://earth.esa.int/EOLi/EOLi.html) (Earth Observation Link) is the European Space Agency's client for Earth Observation Catalogue and Ordering Services.

Using EOLi, you can browse the metadata and preview images of Earth Observation data acquired by the satellites ENVISAT, ERS, Landsat, IKONOS, DMC, ALOS, SPOT, Kompsat, Proba, JERS, IRS, Nimbus, NOAA, SCISAT, SeaStar, Terra/Aqua.

By default, EOLi-sa uses a 2d drawing mode. To enable WorldWind, click on the layered map icon in the upper right for map settings. Then choose Orthographic or Plate Carrée (new 3D map) for a projection.
{{% /panel %}}

---

{{% panel title="WorldWind Java DiSTI F-16 Flight Simulator" link="#f16" imgUrl="/img/java/f16.png" %}}
‘Fly’ an F-16 and immerse yourself in the cockpit as it maneuvers over the terrain. All made possible through a collaboration between NASA WorldWind, Oracle and DiSTI. Here together you’ll see these three powerful technologies—NASA’s WorldWind, Oracle's Java Open GL and DiSTI’s new GL Studio for Java—converge to enable Java developers to leverage spatial data in a 4D world with incredible virtual reality.
{{% /panel %}}

---

{{% panel title="Informatics Tools for Population-level Movement Dynamics" link="http://www.clfs.umd.edu/biology/faganlab/movement/" imgUrl="/img/java/animal_tracker.jpg" %}}
The [University of Maryland Department of Biology](http://biology.umd.edu), has created the Animal Movement Visualizer to display animal location data in real time. This software can be used by ecologists and researchers to track the migration patterns of animals, simply by uploading coordinates via an excel file.
{{% /panel %}}

---

{{% panel title="Gaea+" link="http://geo.xlab.si/" imgUrl="/img/java/gaeaplus_250.jpg" %}}
Gaea+ features a rich combination of 3d building, landmark, street, and aerial photography data for Slovenia.

[Gaea+ XLAB 3D Viewer](http://geo.xlab.si/download/pzs/install/windows/GaeaPlusPZSEn.exe)

- [Windows](http://geo.xlab.si/download/pzs/install/windows/GaeaPlusPZSEn.exe)
- [Mac](http://geo.xlab.si/download/pzs/install/macosx/GaeaPZS_en.dmg)
{{% /panel %}}

---

{{% panel title="Air Search and Rescue" link="https://worldwind.arc.nasa.gov/java/apps/SARApp/help/v6/SARHelp.html" imgUrl="/img/java/sar_01_250.jpg" %}}
This application helps search and rescue planners determine the best places to search after a plane goes missing.

Using last known positions from ground radar and other sources, planners are able to reconstruct an aircraft path and study it's position relative to the ground from any view point including that of the pilot.
{{% /panel %}}

---

{{% panel title="Geoscience Australia's WorldWind Viewer" link="http://www.ga.gov.au/data-pubs/interactive-3d-models/world-wind-3d-data-viewer" imgUrl="/img/java/geoscience_australia_250.jpg" %}}
Geoscience Australia's WorldWind Viewer is an application that displays Australia's continental data sets. The viewer allows you to compare national data sets such as the radioelements, the gravity and magnetic anomalies, and other mapping layers, and show the data draped over the Australian terrain in three dimensions.

The viewer currently displays the following Geoscience Australia data layers: Radiometric Map of Australia, Gravity Anomaly Map of the Australian Region, Magnetic Anomaly Map of Australia
{{% /panel %}}


---

{{% panel title="WorldWind Geo" link="http://code.google.com/p/worldwindrcp/" imgUrl="/img/java/wwgeo_01_250.jpg" %}}
WorldWind Geo is an experimental geo browser built on top of two of the best open source technologies: the WorldWind Java SDK and Eclipse.

The new version of our 3D globe is closing the gap between GIS & SIS (Scientific Information Systems) by incorporating low/med/hi resolution GIS datasets from multiple sources: NASA, MS Virtual Earth, and others plus the great java NetCDF library for plotting/subsetting capabilities of scientific data.

Developed by Vladimir Silva.
{{% /panel %}}

---

{{% panel title="JSatTrack" link="http://www.gano.name/shawn/JSatTrak/" imgUrl="/img/java/jsattrack_01_250.jpg" %}}
JSatTrak is a Satellite tracking program written in Java. It allows you to predict the position of any satellite in real time or in the past or future. It uses advanced SGP4/SDP4 algorithms developed by NASA/NORAD to propagate the satellite orbits.

The program also allows for easy updating of current satellite tracking data via CelesTrak.com. Because this application was written in Java, it should run on almost any operating system or directly off the web using java web start!

Version 3.0 requires Java 1.6 - and uses NASA's WorldWind Java SDK (included) and JOGL for 3D rendering (included for win).

Developed by Shawn Gano.
{{% /panel %}}

---

{{% panel title="JSatTrack" link="http://www.gano.name/shawn/JSatTrak/" imgUrl="/img/java/jsattrack_01_250.jpg" %}}
JSatTrak is a Satellite tracking program written in Java. It allows you to predict the position of any satellite in real time or in the past or future. It uses advanced SGP4/SDP4 algorithms developed by NASA/NORAD to propagate the satellite orbits.

The program also allows for easy updating of current satellite tracking data via CelesTrak.com. Because this application was written in Java, it should run on almost any operating system or directly off the web using java web start!

Version 3.0 requires Java 1.6 - and uses NASA's WorldWind Java SDK (included) and JOGL for 3D rendering (included for win).

Developed by Shawn Gano.
{{% /panel %}}

---

{{% panel title="GeoMapApp" link="http://www.geomapapp.org/" imgUrl="/img/java/geomapapp_01_250.jpg" %}}
GeoMapApp (formerly MapApp) is a freely downloadable Java application, which permits users to browse bathymetry data from the world's oceans, generate and download custom grids and maps, and explore a variety of other data types.

GeoMapApp is a data exploration and visualization tool that is continually being expanded as part of the Marine Geoscience Data System. GeoMapApp is an integrated mapping application developed at Lamont-Doherty Earth Observatory.

Developed by William Haxby, with support from the LDEO Marine Geoscience Data System.
{{% /panel %}}

---

{{% panel title="DARPA ARGUS-IS" link="http://www.darpa.mil/program/autonomous-real-time-ground-ubiquitous-surveillance-infrared" imgUrl="/img/java/darpa_argus-is_01_250.jpg" %}}
The DARPA ARGUS-IS program mission is to provide military users a flexible and responsive capability to find, track and monitor events and activities of interest on a continuous basis in areas of interest.

The ground processing subsystem enables users to interact with the ARGUS-IS airborne systems. The user interface, based on NASA WorldWind software, facilitates specification of areas where imagery is desired throughout the entire ARGUS-IS field of view.

A next-generation system enables persistent surveillance of wide areas Brian Leininger, ARGUS-IS Program Manager, SPIE March 2008.
{{% /panel %}}

---

{{% panel title="MyUniPortal" link="http://www.myuniportal.com/" imgUrl="/img/java/myuniportal_01_250.jpg" %}}
The free high tech learning portal for kids throughout the world.

MyUniPortal combines information from different sources such as html, video media, search engines into an interface that allows the data to be placed into separate windows specific for that data (Browser, Video Viewer, Query Viewer, 3D Maps).

Developed by Anthony Anecito.
{{% /panel %}}