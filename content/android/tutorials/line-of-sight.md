---
title: "Line Of Sight"
date: 2017-08-22T17:25:39-05:00
draft: false
listdescription: "Details the use of the OmnidirectionalSightline object for displaying line of sight with terrain."
listimage: "/img/ww-android-line-of-sight.png"
---

## Line Of Sight
---
{{< youtube id="A2jWwF15BVo?rel=0&amp;showinfo=0" autoplay="true" >}}
###### *Video above from the Line Of Sight Example*

---

This tutorial demonstrates the OmnidirectionalSightline class and how it can be used to display the line of sight visible portions of terrain given an origin.

OmnidirectionalSightline uses the GPU to determine the visible areas of terrain from a position. A Position and range is all that is needed for the OmnidirectionalSightline object to display the visible areas. Different colors are used to differentiate occluded and visible terrain.

---

### OmnidirectionalSightlineFragment.java

The OmnidirectionalSightlineFragment class extends the BasicGlobeFragment and overrides the createWorldWindow method. An OmnidirectionalSightline object is created, customized with ShapeAttributes, and then added to a RenderableLayer on the WorldWindow.

Creating the OmnidirectionalSightline object:
```java
// Specify the Sightline origin position
Position position = new Position(46.230, -122.190, 2500.0);
// Specify the range (meters)
double range = 10000.0
OmnidirectionalSightline sightline = new OmnidirectionalSightline(position, range);
```

The OmnidirectionalSightline object is now fully configured and ready to be added to the WorldWindow for display on the globe:
```java
// Create a layer for the Sightline
RenderableLayer sightlineLayer = new RenderableLayer();
sightlineLayer.addRenderable(sightline);
wwd.getLayers().addLayer(sightlineLayer);

```

The color of the areas on terrain which are visible and occluded can be customized using ShapeAttributes:
```java
// Create attributes for the visible terrain
ShapeAttributes visibleAttributes = new ShapeAttributes();
visibleAttributes.setInteriorColor(new Color(0f, 1f, 0f, 0.5f)); // Green for visible
// Create attributes for the occluded terrain
ShapeAttributes occludedAttributes = new ShapeAttributes();
occludedAttributes.setInteriorColor(new Color(0.1f, 0.1f, 0.1f, 0.5f)); // Gray for occluded
// Add the attributes
sightline.setAttributes(visibleAttributes);
sightline.setOccludeAttributes(occludedAttributes);
```

The OmnidirectionalSightlineFragment tutorial also adds a Placemark at the position specified for the OmnidirectionalSightline object. This isn't necessary and is only added to provide a visual context of the sightline origin and results.

<br>The code above should provide a view similar to this:

<br>

<img src="/img/ww-android-line-of-sight-extra.png" class="img-responsive center-block">

<br>

The OmnidirectionalSightline object uses the available terrain to test for line of sight. As you zoom in or get closer to the terrain, refinement occurs and the visible terrain may change. Examine the WorldWind Example - Movable Line Of Sight for an additional code example working with the OmnidirectionalSightline class.
