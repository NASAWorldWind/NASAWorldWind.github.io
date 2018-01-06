---
title: "GeoPackage-WorldWind Android/NASA WorldWind"
date: 2017-07-06T23:51:35-04:00
draft: false
header: GeoPackage
listdescription: "Demonstrates how to display a GeoPackage database containing high resolution monochromatic imagery of Naval Air Station Oceana in Virginia Beach, VA."
listimage: "/img/ww-android-geopackage.png"
---

## GeoPackage

<img src="/img/ww-android-geopackage.png" class="img-responsive center-block">

The GeoPackageFragment class extends BasicGlobeFragment and overrides the createWorldWindow method. Here we use WorldWind's LayerFactory to display the contents of a local OGC GeoPackage database. LayerFactory asynchronously reads the GeoPackage contents to configure a WorldWind layer, then notifies the application when it's done.

```java
package gov.nasa.worldwindx;
...
public class GeoPackageFragment extends BasicGlobeFragment {

    /**
     * Creates a new WorldWindow (GLSurfaceView) object with a GeoPackage Layer
     *
     * @return The WorldWindow object containing the globe.
     */
    @Override
    public WorldWindow createWorldWindow() {
        // Let the super class (BasicGlobeFragment) do the creation
        WorldWindow wwd = super.createWorldWindow();

        // Unpack the tutorial GeoPackage asset to the Android application cache. GeoPackage relies on the Android
        // SQLite library which operates only on files in the local Android filesystem.
        File geoPackageFile = TutorialUtil.unpackAsset(this.getContext(), "geopackage_tutorial.gpkg");

        // Create a layer factory, WorldWind's general component for creating layers
        // from complex data sources.
        LayerFactory layerFactory = new LayerFactory();

        // Create an OGC GeoPackage layer to display a high resolution monochromatic image of Naval Air Station Oceana
        // in Virginia Beach, VA.
        layerFactory.createFromGeoPackage(
            geoPackageFile.getPath(), // file path on the local Android filesystem
            new LayerFactory.Callback() {
                @Override
                public void creationSucceeded(LayerFactory factory, Layer layer) {
                    // Add the finished GeoPackage layer to the WorldWindow.
                    getWorldWindow().getLayers().addLayer(layer);
                    // Place the viewer directly over the GeoPackage image.
                    getWorldWindow().getNavigator().setLatitude(36.8139677556754);
                    getWorldWindow().getNavigator().setLongitude(-76.03260320181615);
                    getWorldWindow().getNavigator().setAltitude(20e3);
                    Log.i("gov.nasa.worldwind", "GeoPackage layer creation succeeded");
                }

                @Override
                public void creationFailed(LayerFactory factory, Layer layer, Throwable ex) {
                    // Something went wrong reading the GeoPackage.
                    Log.e("gov.nasa.worldwind", "GeoPackage layer creation failed", ex);
                }
            }
        );

        return wwd;
    }
}
```