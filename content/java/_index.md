---
title: "WorldWind Java"
date: 2017-07-10T23:14:25-04:00
draft: false
mainpage: false
projectpage: false
projectslug: "java"
projectname: "WorldWind Java"
listdescription: ""
aliases:
    - /java/get-started/
---

## Get Started

WorldWind Java is an SDK (software development kit) that software engineers can use to build their own applications. To run a World Wind demo application, visit the [Examples](/java/examples) page.

### Run an Application Using World Wind

1. Download the latest release from the World Wind [GitHub Releases](https://github.com/NASAWorldWind/WorldWindJava/releases).

2. Extract the World Wind SDK to a folder anywhere on your hard drive. The following steps refer to the extracted folder as WorldWind.

3. Run a World Wind Demo by opening the WorldWind/README.txt and following the instructions under "Running a Basic Demo Application".

4. Create an app by reviewing the programming examples in WorldWind/src/gov/nasa/worldwindx/examples. Start with SimplestPossibleExample and ApplicationTemplate, then refer to the [Examples](/java/examples/) page for more advanced topics. Here are examples of running your app from the command-line, assuming your app's JAR file is MyApp.jar, and your main class is worldwinddemo.MyBasicDemo.

On Mac OS X and Linux

```
java -Xmx1024m -cp MyApp.jar:worldwind.jar:worldwindx.jar:jogl-all.jar:gluegen-rt.jar:gdal.jar worldwinddemo.MyBasicDemo
```

On Windows

```
java -Xmx1024m -Dsun.java2d.noddraw=true -cp MyApp.jar;worldwind.jar;worldwindx.jar;jogl-all.jar;gluegen-rt.jar;gdal.jar worldwinddemo.MyBasicDemo
```

Note: All *.dll, *.jnilib, and *.so files in the WorldWind folder must be in the same folder as MyApp.jar.

### Deploy an Application Using Java Web Start

1. Create a Java Web Start Application JNLP File
Modify the template JNLP file WorldWind/webstart/JavaWebStartTemplate.jnlp to fit your app.

2. Add World Wind Libraries to Your Application JNLP
Insert the following XML extension elements in the resources block of your app's JNLP file, depending on your app's needs:

World Wind Core Library (required)

```xml
<extension name="worldwind" href="http://worldwind.arc.nasa.gov/java/v2.1.0/webstart/worldwind.jnlp"/>
```

World Wind Extensions Library (required if your app uses the gov.nasa.worldwindx package)

```xml
<extension name="worldwindx" href="http://worldwind.arc.nasa.gov/java/v2.1.0/webstart/worldwindx.jnlp"/>
```

GDAL Library (optional, include if your app uses World Wind's data import feature)

```xml
<extension name="gdal" href="http://worldwind.arc.nasa.gov/java/v2.1.0/webstart/gdal.jnlp"/>
```

3. Prepare Your Application's JAR Files
JAR files used by a Java Web Start application must be signed by a recognized authority, and must specify the Permissions manifest attribute. World Wind's JAR files have already been signed and contain the necessary manifest attributes. See Oracle's documentation on Signing JAR Files and JAR File Manfiest Attributes for Security.

4. Deploy Your Application
Determine a URL to host your app at, such as http://myworldwinddemo.org/. Set your JNLP file's codebase attribute to this URL, then host your JNLP file and any JAR files referenced by your JNLP at this URL. See Oracle's documentation on Rich Internet Application Deployment for more information.

## Features

World Wind Java provides a rich set of features for displaying and interacting with geographic data and representing a wide range of geometric objects.

### General Features
- Open-source, high-performance 3D Virtual globe API and SDK
- Adds 3D geographic visualization to any application
- Runs on Windows, Mac OS X, Linux
- Free run-time and development license
- Unencumbered use on any number of devices
- Huge collection of high-resolution imagery and terrain from NASA servers
- Displays high-resolution imagery, terrain and geographic information from any open-standard public or private source
- Open-standard interfaces to GIS services and databases
- Large collection of geometric and geographic shapes
- Simple to extend and modify, designed to be extensible
- Uses Java and OpenGL

### Graphics Capabilities
- Point, Path, Polygon, Curtain
- Volumes: Extruded Polygon, Ellipsoid, Sphere, Cylinder, Cone, Pyramid, Box, Airspaces (see below)
- Terrain conforming shapes: Path, Polygons, Ellipse, Circle, Quadrilateral, Rectangle, Square, Text, Image, Icon
- Airspaces: Box, Cake, Capped Cylinder (full and partial), Curtain, Orbit, PolyArc, Polygon, Route, Sphere, Track
- Annotation: Text, Text Balloon, HTML5 web-browser Balloon, Image, Icons, all with geo-located and screen versions
- Placenames, Political boundaries
- Transparency
- Picking, Selection
- Navigation and Viewing: Orbit View, First Person, Stereo, application-defined
- Multiple World Wind windows
- Interactive shape editors
- 2525C Tactical Symbols and Tactical Graphics

### Data Formats
- Imagery: JPG, PNG, GeoTIFF, JPEG2000 and many others
- Government formats: NITF, MrSID, RPF (CADRG, CIB, etc.), DTED and many others
- GIS formats: Shapefile, KML, VPF, GML, GeoJSON, GeoRSS, GPX, NMEA and many others
- Coordinate Systems: Lat/Lon, UTM, MGRS.
- Datums: WGS84, NAD27 and many others

### Analysis Capabilities
- Measurement,  geometric and terrain following
- Line of site with high-resolution terrain and shapes
- Terrain intersection
- Shape interactions

### Miscellaneous Capabilities
- Deploy as Java Application or Java Web Start Application
- GIS web service protocols: WMS, WFS
- Swing, AWT and JOGL integration
- Layer model with visibility and transparency control
- Highly configurable and customizable
- Automatic image and terrain retrieval from web services
- Animation: View, globe, object
- Local data cache
- Automatic region sorting
- Over 100 programming examples
- API documentation
- Community support forum