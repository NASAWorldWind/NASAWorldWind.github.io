---
title: "Examples"
date: 2017-07-27T09:58:18-05:00
draft: false
---

## Examples

The World Wind API contains over 100 code examples that show how to perform all manner of tasks, from creating the most basic World Wind application to using complex, advanced functionality.

Below are brief descriptions of selected example programs.  All examples can be found in **gov.nasa.worldwindx.examples**

1. Basics
2. Layers
3. View
4. Data
5. Terrain
6. Shapes
7. Annotations
8. Images
9. User Interface
10. Network
11. Configuration
12. Tools
13. Multiwindow

### Basics

**SimplestPossibleExample** -  Demonstrates the simplest possible way to create a WorldWind application.

**HelloWorldWind** -  Shows in detail how to create a basic World Wind program.

**ApplicationTemplate** -  Provides a base application framework for simple WorldWind examples.

**Shutdown** -  Shows how to shut down a WorldWindow and how to shut down all of World Wind.

### Layers

**OnScreenLayerManager** -  Demonstrates an on-screen layer manager using LayerManagerLayer.

**WMSLayerManager** -  Demonstrates the use of multiple WMS layers, as displayed in a WMSLayersPanel.

**LayerTreeUsage** -  Example of using BasicTree to display a list of layers.

**Graticule** -  Displays the globe with a latitude and longitude graticule (latitude and longitude grid)

**MGRSGraticule** -  Displays the globe with a MGRS/UTM graticule

### View

**ViewLookAround** -  Demonstrates how to ‘look around’ a scene by controlling the view’s pitch, heading, roll and field of view, in this case by using a simple set of sliders.

**ViewIteration** -  Demonstrates how to animate the view from one position on the globe to another.

**AddAnimator** -  Demonstrates the use of BasicFlyView with a FlyToFlyViewAnimator, allowing the user to fly smoothly to new locations by simply specifying a location’s name or lat-long coordinates.

**ViewSwitch** -  Demonstrates the difference between BasicOrbitView and BasicFlyView. Allows the user to select the preferred view type and then enter the name or lat-lon coordinates of a new location to animate the view to.

**ViewLimits** -  Demonstrates how to keep the view within certain bounds.

**KeepingObjectsInView** -  Demonstrates keeping a set of scene elements visible by using the utility class ExtentVisibilitySupport.

**ViewControls** -  Shows the ViewControlsLayer and allows you to adjust its size, orientation, and the available controls.

### Data

**BulkDownload** -  Illustrates how to use World Wind to retrieve data from layers and elevation models in bulk from a remote source.

**DataInstallerAp** - Provides an interactive means to install data on the client.

**Shapefiles** -  Illustrates how to import ESRI Shapefiles into World Wind.

**ExtrudedPolygonsFromShapefile** -  Shows how to load extruded shapes from Shapefiles.

**VPFLayerDemo** -  Illustrates how to import data from a Vector Product Format (VPF) database into World Wind.

**FlatWorldEartquakes** -  Demonstrates how to use the EarthFlat and FlatOrbitView to display USGS’ latest earthquakes RSS feed.

**GeoRSS** -  Illustrates how to create a shape from a GeoRSS document. This example creates two shapes from hard-coded example GeoRSS documents.

**SkankortDenmark** -  Demonstrates high resolution imagery (0.2 meters per pixel) and elevation data (1.6 meters per pixel) served by the World Wind WMS, and visualized by the World Wind Java client.

**SurfaceImageViewer** -  Demonstrates how to open and view arbitrary surface images and elevations that have an accompanying world file.

**ExportImageOrElevations** -  Demonstrates how to use the SectorSelector utility to save selected image and/or elevations to a GeoTIFF file.

**GetBestElevations** -  Retrieve the highest-resolution elevations available for the current elevation model, drawing them from the server if necessary.

### Terrain

**TerrainProfiler** -  Shows the TerrainProfileLayer in action with its various controls.

**TerrainIntersection** -  Shows how to compute terrain intersections using the highest resolution terrain data available from a globe’s elevation model.

**ContourLines** -  Illustrates how to display contour lines in World Wind on the surface terrain at a specified elevation.

**BathymetryRemoval** -  Illustrates how to suppress the World Wind Globe’s bathymetry (elevations below mean sea level) by using a  BathymetryFilterElevationModel.

**DetailHints** -  Illustrates how to control the detail of ElevationModel and TiledImageLayer using their detail hint properties.

**DimGlobeSurfac** - Illustrates how to place a layer over the terrain in order to dim it.

### Shapes

**Shapes** -  Shows how to let the user create path and surface shapes on the globe and modify their parameters with a simple user interface.

**Airspaces** -  Illustrates how to configure and display World Wind Airspace shapes.

**AirspaceBuilder** -  Illustrates runtime construction of 3D extruded polygons and spheres using World Wind Airspace shapes.

**ExtrudedPolygons** -  Shows how to use World Wind ExtrudedPolygons.

**ExtrudedShapes** -  Demonstrates how to create ExtrudedPolygons with cap and side textures.

**ExtrudedPolygonBuilder** -  Shows how to build a tool for creating and editing ExtrudedPolygons on the surface of the globe.

**LineBuilder** -  A utility class that allows the user to interactively build a polyline.

**LineBackground** -  Illustrates how to display lines that stand out from the background imagery.

**Paths** -  Shows how to use the World Wind Path construct.

**PathsWithDirection** -  Shows how to draw a Path with direction arrowheads between the points.

**Polygons** -  Shows how to use World Wind Polygon shapes.

**RigidShapes** -  Demonstrates usage of the various Rigid Shapes: Ellipsoid, Box, Cylinder, Cone, Pyramid and Wedge.

**RigidShapeBuilder** -  Shows how to build a tool for creating and editing 3D shapes and placing them on the globe. Possible shapes include the Rigid Shapes (Ellipsoid, Box, Cylinder, Cone, Pyramid and Wedge) as well as ExtrudedPolygon.

**Ellipsoids** -  Illustrates how to use the World Wind Ellipsoid rigid shape to display an arbitrarily sized and oriented ellipsoid on the Globe.

**Boxes** -  Illustrates how to use the World Wind Box rigid shape to display an arbitrarily sized and oriented box on the Globe.

**Cylinders** -  Illustrates how to use the World Wind Cylinder rigid shape to display an arbitrarily sized and oriented cylinder on the Globe.

**Cones** -  Illustrates how to use the World Wind Cone rigid shape to display an arbitrarily sized and oriented cone on the Globe.

**Pyramid** -  Illustrates how to use the World Wind Pyramid rigid shape to display an arbitrarily sized and oriented pyramid on the Globe.

**Wedges** -  Illustrates how to use the World Wind Wedge rigid shape to display an arbitrarily sized and oriented wedge on the Globe.

**RotatedSector** -  Illustrates rotating a Sector-shaped SurfaceQuad from standard position.

### Annotations

**Annotations** -  Illustrates how to use a World Wind Annotation to display on-screen information to the user in the form of a text label with an optional image.

**AnnotationControls** -  Illustrates how to use a World Wind Annotation with an AnnotationLayoutManager to display an Annotation with a simple embedded user interface.

**Balloons** -  Illustrates how to use a World Wind Balloon to display on-screen information to the user in the form of a screen-aligned text balloon.

**WebBrowserBalloons** -  Illustrates how to use World Wind browser balloons to display HTML, JavaScript, and Flash content to the user in the form of a screen-aligned balloon.

**TacticalGraphics and TacticalSymbol** - Shows examples of World Wind’s 2525C implementation.

**Markers** -  Displays Markers (small shapes) in different shapes and colors.

**MarkersOrder** -  Shows how to control track markers’ attributes to convey their order in time.

**GPSTracks** -  Demonstrates displaying GPS tracks using markers.

**Placemarks** -  Illustrates how to use PointPlacemark.

**PlaceNames** -  Demonstrates how to customize which place names (names of countries, oceans, cities, etc) are displayed.

**PathsWithLabels** -  Example of how to draw a path with a text annotation attached to the path.

**AlarmIcons** -  Illustrates how to display an icon with an alarm state using a World Wind WWIcon.

**GridOfPoints** -  Uses a PointGrid to draw a grid of points on the terrain, spacing them evenly throughout a region defined by a four sided polygon.

### Images

**SurfaceImages** -  Demonstrates how to use the SurfaceImage class to place images on the surface of the globe.

**RemoteSurfaceImage** -  Demonstrates how to retrieve a remote image and display it as a SurfaceImage.

**RubberSheetImage** -  Demonstrates use of the SurfaceImage class to create a “rubber sheet” image that can be arbitrarily positioned, scaled and warped on the globe’s surface.

**VideoOnTerrain** -  Illustrates how you might show video on the globe’s surface.

**ScreenImageDragging** -  Demonstrates the use of the ScreenImage class, and shows how to use it to create an image that can be dragged around the screen using the mouse.

### User Interface

**ContextMenusOnShapes** -  Illustrates how to attach context (popup) menus to shapes.

**DeepPicking** -  Illustrates how to cause all elements under the cursor in a WorldWindow to be reported in SelectEvents.

**PickFrustum** -  Illustrates how to change the size of the pick frustum.

**SplitPaneUsage** -  Illustrates how to use World Wind within a Swing JSplitPane.

**TabbedPaneUsage** -  Demonstrates the use of tabbed panes.

### Network

**NetworkOfflineMode** -  Shows how to detach World Wind from the network and reattach it.

**LocalDataOnly** -  Shows how to operate World Wind completely locally, drawing data only from local caches.

### Configuration

**FlatWorld** -  Demonstrates how to display a flat globe instead of a round globe.

**ConfiguringGLRuntimeCapabilities** -  Illustrates how to configure World Wind’s OpenGL features using a GLRuntimeCapabilities.

**CustomElevationModel** -  Illustrates how to configure World Wind with a custom ElevationModel from a configuration file.

**Stereo** -  Shows how to configure World Wind to display the globe in stereo.

### Tools

**LoggingControl** -  Illustrates control and redirection of World Wind logging.

**WorldWindDiagnostics** -  Shows how to output extensive diagnostic information about the user’s system configuration.

**ScreenShots** -  Demonstrates how to take screenshots with WWJ using the ScreenShotAction class.

**LinesOfSight** -  Computes and displays line-of-sight intersections for Terrain and renderables using the highest-resolution elevation data associated with a specified globe.

**AbstractShapeIntersection** -  Shows how to determine and display the intersection of a line with an Ellipsoid or other rigid shapes.

**ExtrudedPolygonIntersection** -  Shows how to determine and display the intersection of a line with an ExtrudedPolygon.

**PolygonIntersection** -  Shows how to determine and display the intersection of a line with a Polygon.

**SectorSelection** -  Demonstrates how to use the SectorSelector utility.

**SimpleShapeDragging** -  Demonstrates the use of the BasicDragger class for dragging a shape across the globe.

**DraggingShapes** -  Illustrates how to use the BasicDragger to create multiple shapes on the surface terrain that retain their form when dragged.

**TreeControl** -  Demonstrates use of the on-screen tree control using BasicTree.

**TreeFiltering** -  Demonstrates the use of BasicQuadTree to limit which markers in a collection are displayed to those in a specific region.

**MeasureToolUsage** -  Shows how to use the MeasureTool to draw a shape on the globe and measure length, area, etc.

**GazeteerApp** -  Shows how to integrate a gazetteer search function into the World Window using the YahooGazetteer.

**DataCacheViewer** -  Shows how to build a tool to allow the user to view and delete cached WorldWind files based on how old they are.

### Multiwindow

**MultiFrame** -  Shows how to create two World Windows, each in its own JFrame. The World Windows share a globe and some layers.

**CardLayoutUsage** -  Illustrates how to use multiple World Wind windows with a CardLayout layer manager.

**FlatAndRoundGlobes** -  Illustrates how to display round and flat globes side by side.

**TabbedPaneUsage** -  Illustrates how to use multiple World Wind windows with a JTabbedPane.

**ViewViewVolume** -  Illustrates how to display a globe, and in a separate window display another globe with a visualization of the view volume in the main globe window.