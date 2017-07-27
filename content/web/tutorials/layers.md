---
title: "Layers"
date: 2017-07-26T15:21:03-05:00
draft: false
listdescription: "WorldWind's primary content display container."
---

## Layers

<img src="/img/web/layerlist.jpg" class="img-responsive" align="right">LayerListLayers hold all the information displayed by the World Window. Each World Window holds one layer list that contains all the layers to display in that World Window. Each layer contains either imagery, shapes or decorations such as a compass. During rendering, layers are displayed in the order they’re defined in the layer list. (3D shapes within layers, however, are displayed in far-to-near order, as described in the Shapes section.) The adjacent illustration depicts six layers. The first two are image layers. The second two hold shapes. And the bottom two hold decorations.

The above layer list is defined and the layers added to the World Window by the following code:

```javascript
// Create the World Window.
var wwd = new WorldWind.WorldWindow("canvasOne");

// Create and add imagery layers.
wwd.addLayer(new WorldWind.BMNGLayer());
wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer(null));

// Create and add layers for shapes, but don't add any shapes yet.
wwd.addLayer(new RenderableLayer());
wwd.addLayer(new RenderableLayer());

// Create and add a compass and view controls.
wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

// Update the display.
wwd.redraw();
```

### Layer Properties

Layers have the following properties:

- *displayName* — A string that you can use to give the layer a name that would be displayed, for example, in a layer manager.
- *enabled* — A boolean that enables you to turn the layer off while leaving it in the layer list.
- *pickEnabled* — A boolean indicating that the layer and its contents do not participate in picking.
- *opacity* — A number between 0 and 1 that enables you to make an layer and its contents semi-transparent. A value of 1 means fully opaque. A value of 0 means fully transparent.
- *minActiveAltitude* — A number specifying the eye altitude above which the layer is displayed. The layer is not displayed if the eye altitude is below this value
- *maxActiveAltitude* — A number specifying the eye altitude below which the layer is displayed. The layer is not displayed if the eye altitude is above this value.
- *inCurrentFrame* — A read-only boolean indicating whether the layer was actually drawn during the most recent redraw. A layer may not be drawn for several reasons, such as the eye altitude has not reached the max active altitude.

See the API doc for Layer for more details.

There are several types of layers. Each defines additional properties that you can use to control the layer’s behavior. See the API doc for the particular layer to discover those properties. The layer type you’re likely to use most is RenderableLayer, which you use to hold shapes. It’s described below. Apps typically create several of these.

### Image Layers

Image layers hold imagery that is drawn on the surface of the globe. This is typically global-coverage imagery but need not be. Web World Wind provides the following image layers:

- **Bing Aerial Layer** (class BingAerialLayer) — Full global coverage using high-resolution Bing satellite imagery.
- **Bing Aerial with Labels Layer** (class BingAerialWithLabelsLayer) — Full global coverage using the same imagery as Bing Aerial Layer but with placenames and roads included.
- **Bing Roads Layer** (class BingRoadsLayer) — Full global coverage using high-resolution Bing roads imagery.
- **Blue Marble Layer** (class BMNGLayer) — Full global coverage using low-resolution Blue Marble imagery.
- **Blue Marble + Landsat Layer** (class BMNGLandsatLayer) — Full global coverage using colorized Blue Marble imagery for the oceans and medium-resolution Landsat imagery for land.
- **Blue Marble Single Image Layer** (class BMNGOneImageLayer) — Full global coverage using one low-resolution Blue Marble image. This layer is used similarly to a splash screen in order to quickly display imagery on the globe while other higher-resolution imagery is retrieved.

You can create your own image layers using TiledImageLayer. The imagery need not span the entire globe.

### Renderable Layer

You use the RenderableLayer class when you want to display shapes. The layer can hold any number of shapes. Apps typically use renderable layers to group shapes logically. To display a shape, you simply create it using its constructor and add it to a renderable layer:

```javascript
var placemarkLayer = new WorldWind.RenderableLayer("Placemarks");
var placemark = new WorldWind.Placemark(new WorldWind.Position(latitude, longitude, altitude));

placemarkLayer.addRenderable(placemark);
```

Here the layer is given the display name “Placemarks”.

You must also add the renderable layer to the World Window’s layer list:

```javascript
wwd.addLayer(placemarkLayer);
```

Renderable layers hold any kind of shape.