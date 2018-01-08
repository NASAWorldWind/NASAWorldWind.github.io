---
title: "Picking-Web WorldWind/NASA WorldWind"
date: 2017-07-26T15:19:00-05:00
draft: false
header: Picking
listdescription: "Picking capabilities and setup."
---

## Picking

Picking is performed by the WorldWindow. There are four flavors of picking:

- Normal picking returns the visible object or terrain at a specified pick point. See [PlacemarksAndPicking.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/PlacemarksAndPicking.js) for an example.
- Deep picking returns all objects at a specified pick point. See [DeepPicking.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/DeepPicking.js) for an example.
- Region picking returns all visible objects within a specified pick region. See [PickAllShapesInRegion.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/PickAllShapesInRegion.js) for an example.
- Terrain picking returns the geographic coordinates of the terrain at a specified pick point. See [CoordinatesDisplayLayer.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/src/layer/CoordinatesDisplayLayer.js) for an example.

The sections below provide the details of each flavor.

Picking is initiated by the app using the API on the WorldWindow object. It’s typically performed in response to a mouse click or tap gesture, but the app may initiate picking at any time it chooses.

Picking is fast, much faster than actually drawing the scene. But apps should invoke picking judiciously because it does require both CPU and GPU resources.

## Pick Return

All flavors of picking return a PickedObjectList containing an array of PickedObjects. Each PickedObject identifies the individual item that was picked. Included in that object is a reference to the picked shape and a flag indicating whether the picked object is the top-most object in the returned collection of picked objects. In the case of normal picking there will be at most one picked shape identified, and its isOnTop property will be true. In the case of deep picking there may be several picked objects, but only one will be marked as the top-most. This top-most object may be the terrain, as described below.

For region picking all objects that fall within the pick region are returned regardless of whether they are actually visible on the screen (not occluded by other shapes or terrain). But the truly visible ones are marked as top-most.

In all flavors of picking but region picking, the picked object list may contain a picked object identifying terrain. Its isTerrain property is true. This object identifies the geographic position of the pick point (the position property). It’s returned if the pick point is within the terrain and not in space. If the terrain at that position occludes the other items in the picked object list, the terrain object is marked as top-most.

Also included in the picked object is the parent layer of the picked shape. See the API doc for PickedObject for further details.

## Picking Interface

The API for picking is all on the WorldWindow object. The methods are:

pick for normal and deep picking
pickTerrain for terrain picking
pickShapesInRegion for region picking
For deep picking you set the WorldWindow’s deepPicking property prior to calling the pick method.

## Pick Point and Pick Region

The pick point and pick region are specified in screen coordinates, but coordinates relative to the WorldWindow’s canvas. Those coordinates can be easily computed using the canvasCoodinates method of the WorldWindow object, as follows in this call to pick:

```javascript
var pickList = wwd.pick(wwd.canvasCoordinates(x, y));
```

The x and y in this call are the clientX and clientY properties of the event passed to the event handler.

For region picking, the pick region is relative to the upper-left corner of the window. Here is code from the PickAllShapesInRegion example that composes the pick region:

```javascript
var rectRadius = 50,
    pickPoint = wwd.canvasCoordinates(x, y),
    pickRectangle = new WorldWind.Rectangle(
        pickPoint[0] - rectRadius,
        pickPoint[1] + rectRadius,
        2 * rectRadius, 2 * rectRadius);
```

Notice that the origin of the rectangle (the first two arguments to the Rectangle constructor above) is its upper-left corner.