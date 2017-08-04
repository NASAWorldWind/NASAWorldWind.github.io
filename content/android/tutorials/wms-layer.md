---
title: "WMS Layer"
date: 2017-07-06T23:21:29-04:00
draft: false
listdescription: "Demonstrates how to construct a WmsLayer with the LayerFactory."
listimage: "/img/ww-android-wms-layer.png"
---

## WMS Layer

<img src="/img/ww-android-wms-layer.png" class="img-responsive" hspace="10" vspace="10" align="left">This example adds a Sea Surface Temperature WMS layer to the basic globe example.

### WmsLayerFragment.java

The WmsLayerFragment class extends the BasicGlobeFragment and overrides the createWorldWindow method. Here we create a WmsLayerConfig object to define a WMS layer configuration, and then we create a WmsLayer object with the config object. And, finally, we add the new layer to the WorldWindow object.

<img src="/img/wms-layer-classes.png" class="img-responsive center-block" hspace="10" vspace="10">

### WmsLayerFragment.java

```java
public class WmsLayerFragment extends BasicGlobeFragment {

    /**
     * Creates a new WorldWindow (GLSurfaceView) object with a WMS Layer
     *
     * @return The WorldWindow object containing the globe.
     */
    @Override
    public WorldWindow createWorldWindow() {
        // Let the super class (BasicGlobeFragment) do the creation
        WorldWindow wwd = super.createWorldWindow();

        // Configure an OGC Web Map Service (WMS) layer to display the
        // sea surface temperature layer from NASA's Near Earth Observations WMS.
        WmsLayerConfig config = new WmsLayerConfig();
        config.serviceAddress = "http://neowms.sci.gsfc.nasa.gov/wms/wms";
        config.wmsVersion = "1.1.1"; // NEO server works best with WMS 1.1.1
        config.layerNames = "MYD28M"; // Sea surface temperature (MODIS)
        WmsLayer layer = new WmsLayer(new Sector().setFullSphere(), 1e3, config); // 1km resolution

        // Add the WMS layer to the WorldWindow.
        wwd.getLayers().addLayer(layer);

        return wwd;
    }
}
``` 