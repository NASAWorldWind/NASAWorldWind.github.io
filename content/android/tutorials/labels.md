---
title: "Labels-WorldWind Android/NASA WorldWind"
date: 2017-07-07T00:33:17-04:00
draft: false
header: Labels
listdescription: "Demonstrates how to display labels on a WorldWind globe."
listimage: "/img/ww-android-labels.png"
---

## Labels

<img src="/img/ww-android-labels.png" class="img-responsive center-block">

This tutorial uses Labels shapes to identify landmarks around Washington, D.C. Label shapes have a variety of configurable properties, including text color, text size (in screen pixels), typeface, text outline, and rotation.

### LabelsFragment.java

The LabelsFragment class extends BasicGlobeFragment and overrides the createWorldWindow method. Here we configure six Label shapes to identify landmarks around Washington, D.C.

```java
package gov.nasa.worldwindx;
...
public class LabelsFragment extends BasicGlobeFragment {

    /**
     * Creates a new WorldWindow (GLSurfaceView) object with a set of label shapes
     *
     * @return The WorldWindow object containing the globe.
     */
    @Override
    public WorldWindow createWorldWindow() {
        // Let the super class (BasicGlobeFragment) do the creation
        WorldWindow wwd = super.createWorldWindow();

        // Create a layer to display the tutorial labels.
        RenderableLayer layer = new RenderableLayer();
        wwd.getLayers().addLayer(layer);

        // Create a basic label with the default attributes, including the default text color (white), the default text
        // size (24 pixels), the system default typeface, and the default alignment (bottom center).
        Label label = new Label(new Position(38.8977, -77.0365, 0), "The White House");
        layer.addRenderable(label);

        // Create a label with a green text color, the default text size, the system default typeface, and the default
        // alignment.
        TextAttributes attrs = new TextAttributes();
        attrs.setTextColor(new Color(0, 1, 0, 1)); // green via r,g,b,a
        label = new Label(new Position(38.881389, -77.036944, 0), "Thomas Jefferson Memorial", attrs);
        layer.addRenderable(label);

        // Create a right-aligned label using a bottom-right offset.
        attrs = new TextAttributes();
        attrs.setTextOffset(Offset.bottomRight());
        label = new Label(new Position(38.8893, -77.050111, 0), "Lincoln Memorial", attrs);
        layer.addRenderable(label);

        // Create a left-aligned label using a bottom-left offset.
        attrs = new TextAttributes();
        attrs.setTextOffset(Offset.bottomLeft());
        label = new Label(new Position(38.889803, -77.009114, 0), "United States Capitol", attrs);
        layer.addRenderable(label);

        // Create a label with a 48 pixel text size and a bold typeface.
        attrs = new TextAttributes();
        attrs.setTypeface(Typeface.DEFAULT_BOLD); // system default bold typeface
        attrs.setTextSize(48); // 48 screen pixels
        label = new Label(new Position(38.907192, -77.036871, 0), "Washington", attrs);
        layer.addRenderable(label);

        // Create a label with its orientation fixed relative to the globe.
        label = new Label(new Position(38.89, -77.023611, 0), "National Mall");
        label.setRotationMode(WorldWind.RELATIVE_TO_GLOBE);
        layer.addRenderable(label);

        // Place the viewer directly over the tutorial labels.
        wwd.getNavigator().setLatitude(38.89);
        wwd.getNavigator().setLongitude(-77.023611);
        wwd.getNavigator().setAltitude(10e3);

        return wwd;
    }
}
```