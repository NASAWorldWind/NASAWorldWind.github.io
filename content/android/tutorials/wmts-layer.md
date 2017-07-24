---
title: "WMTS Layer"
date: 2017-07-06T23:26:43-04:00
draft: false
listdescription: "Demonstrates how to display an OGC Web Map Tile Service (WMTS) layer."
listimage: "/img/ww-android-wmts-layer.png"
---

## WMTS Layer

<img src="/img/ww-android-wmts-layer.png" class="img-responsive" hspace="10" vspace="10" align="left">This tutorial adds a hillshade WMTS layer to the basic globe example.

### WmtsLayerFragment.java

The WmtsLayerFragment class extends the BasicGlobeFragment and overrides the createWorldWindow method. Here we use World Wind's LayerFactory to display the contents of a remote OGC Web Map Tile Service (WMTS). LayerFactory asynchronously negotiates with the WMTS endpoint to configure a World Wind layer, then notifies the application when it's done.

```java
package gov.nasa.worldwindx;
...
public class WmtsLayerFragment extends BasicGlobeFragment {

    /**
     * Creates a new WorldWindow (GLSurfaceView) object with a WMTS Layer
     *
     * @return The WorldWindow object containing the globe.
     */
    @Override
    public WorldWindow createWorldWindow() {
        // Let the super class (BasicGlobeFragment) do the creation
        WorldWindow wwd = super.createWorldWindow();

        // Create a layer factory, World Wind's general component for creating layers
        // from complex data sources.
        LayerFactory layerFactory = new LayerFactory();

        // Create an OGC Web Map Tile Service (WMTS) layer to display Global Hillshade based on GMTED2010
        layerFactory.createFromWmts(
            "https://tiles.geoservice.dlr.de/service/wmts", // WMTS server URL
            "hillshade",                                    // WMTS layer identifier
            new LayerFactory.Callback() {
                @Override
                public void creationSucceeded(LayerFactory factory, Layer layer) {
                    // Add the finished WMTS layer to the World Window.
                    getWorldWindow().getLayers().addLayer(layer);
                    Log.i("gov.nasa.worldwind", "WMTS layer creation succeeded");
                }

                @Override
                public void creationFailed(LayerFactory factory, Layer layer, Throwable ex) {
                    // Something went wrong connecting to the WMTS server.
                    Log.e("gov.nasa.worldwind", "WMTS layer creation failed", ex);
                }
            }
        );

        return wwd;
    }
}
```