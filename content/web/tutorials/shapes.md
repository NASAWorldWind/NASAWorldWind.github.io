---
title: "Shapes"
date: 2017-07-27T09:10:24-05:00
draft: false
listdescription: "Description of the properties of Shapes in Web WorldWind."
---

## Shapes

Shapes represent the information other than surface imagery that you display on the globe. Web WorldWind has a rich and growing set of shapes to choose from:

- **Placemark** (class Placemark) — Displays an image with an optional label at any geographic position and altitude. You can use one of Web WorldWind’s placemark images or specify your own. See the PlacemarksAndPicking example.
- **Path** (class Path) — Draws a connected set of lines either in space or on the ground. If extruded, draws a curtain from the line to the ground. See the Paths example.
- **Polygon** (class Polygon) — Displays a polygon in space. The polygon may have holes. If extruded, sides connecting the polygon to the ground are drawn. See the Polygons example
- **Surface Shapes** — Familiar shapes such as polyline, polygon, ellipse and square drawn on the terrain. The specific classes are SurfaceCircle, SurfaceEllipse, SurfaceImage, SurfacePolygon, SurfacePolyline, SurfaceRectangle and SurfaceSector. See the SurfaceShapes example
- **Geographic Text** (class GeographicText) — Text at any geographic position and altitude. See the GeographicText example.
- **Screen Image** (class ScreenImage) — An image drawn in the plane of the screen. See the ScreenImage example.
- **Screen Text** (class ScreenText) — Text drawn in the plane of the screen. See the ScreenText example.

The API docs describe these shapes in detail.

## Shape Attributes

All Web WorldWind shapes have an associated bundle of attributes that you use to control their color and other aspects. For most shapes this is the ShapeAttributes class, but Placemark and GeographicText have their own attributes classes, PlacemarkAttributes and TextAttributes. See the API docs for those classes to learn their properties. Shapes sometimes do not use all the attributes in the associated attribute bundle. The shape’s API doc describes which attributes it does use. Here’s an example of setting Placemark attributes:

```javascript
placemark = new WorldWind.Placemark(
    new WorldWind.Position(latitude, longitude, altitude));

// Create the placemark attributes for this placemark.
placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
placemarkAttributes.imageSource = "http://<url of image>";
placemark.attributes = placemarkAttributes;
```

The null passed to the PlacemarkAttributes constructor indicates that default values are to be used for all properties. Alternatively, you could specify an existing attributes object here and the newly created object’s properties would be initialized to that of the object passed in.

It’s important to realize that when assigned to a shape an attributes object is not copied, so any subsequent changes to that object will take effect over those in place when the attributes were assigned to the shape. To avoid any problems because of this it’s often best to create a new attributes object for each shape. You would not do this, however, if several shapes will have the same attributes continually. In that case you could share a single attributes object among the shapes.

## Highlighting and Highlight Attributes

Shapes contain two sets of attributes, one for normal display and one for highlighted display. Each shape has a boolean highlighted property that the app can specify. If the property is false, the shape’s normal attributes are used. If the property is true, the shape’s highlighted attributes are used. This provides shape highlighting by simply modifying a single flag. Normally the highlight attributes are identical to the normal attributes except for one or two properties, such as color or scale. Initially a shape’s highlight attributes are null, in which case the shape’s normal attributes are used even when the shape’s highlighted property is true.

## Path Type

Path, Polygon and Surface Shapes have a pathType property that controls how the path or the shape’s edges are formed. There are three possible values:

- *WorldWind.GREAT_CIRCLE* — The shape’s path or edges follow a great circle path between their defining geographic coordinates. The curvature of the globe is taken into account.
- *WorldWind.RHUMB_LINE* — The shape’s path or edges follow a line of constant bearing — a rhumb line — between their defining geographic coordinates. The curvature of the globe is taken into account.
- *WorldWind.LINEAR* — The shape’s path or edges are drawn as a single straight line between their defining geographic coordinates. The curvature of the globe is not taken into account. This is seldom the choice you want, and useful only for drawing straight lines in space.

The default for all shapes is *WorldWind.GREAT_CIRCLE*.

## Altitude Mode

All shapes defined by geographic positions have an altitudeMode property that indicates the relationship of the positions’ altitudes relative to the terrain. There are three possible values:

- *WorldWind.ABSOLUTE* — The altitude is treated as a distance relative to the surface of the ellipsoid.
- *WorldWind.RELATIVE_TO_GROUND* — The altitude is treated as a distance from the terrain at the position’s latitude and longitude.
- *WorldWind.CLAMP_TO_GROUND* — The altitude is ignored and the position is treated as being on the terrain at its latitude and longitude.

The default for all shapes is *WorldWind.ABSOLUTE*.