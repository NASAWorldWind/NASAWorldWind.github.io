---
title: "Surface Image-WorldWind Android/NASA WorldWind"
date: 2017-07-06T23:56:43-04:00
draft: false
header: Surface Image
listdescription: "Demonstrates how to add SurfaceImages to a RenderableLayer."
listimage: "/img/ww-android-surface-image.png"
---

## Surface Image

<img src="/img/ww-android-surface-image.png" class="img-responsive" hspace="10" vspace="10" align="left">This example adds two surface images to the basic globe:

- A remote image showing Mount Etna erupting on July 13th, 2001.
- The NASA 'Meatball' logo.

### SurfaceImageFragment.java

The SurfaceImageFragment class extends the BasicGlobeFragment and overrides the createWorldWindow method. Here we create two SurfaceImage objects and add them to a RenderableLayer, and then we add the layer to the globe.

<img src="/img/ww-android-surface-image-classes.png" class="img-responsive center-block">

```java
public class SurfaceImageFragment extends BasicGlobeFragment {

    /**
     * Creates a new WorldWindow with an additional RenderableLayer containing two SurfaceImages.
     */
    @Override
    public WorldWindow createWorldWindow() {
        // Let the super class (BasicGlobeFragment) do the creation
        WorldWindow wwd = super.createWorldWindow();

        // Configure a Surface Image to display an Android resource showing the NASA logo.
        Sector sector = new Sector(37.46, 15.5, 0.5, 0.6);
        int resourceId = R.drawable.nasa_logo;
        SurfaceImage surfaceImageResource = new SurfaceImage(sector, ImageSource.fromResource(resourceId));

        // Configure a Surface Image to display a remote image showing Mount Etna erupting on July 13th, 2001.
        sector = new Sector(37.46543388598137, 14.60128369746704, 0.45360804083528, 0.75704283995502);
        String urlString = "https://worldwind.arc.nasa.gov/android/tutorials/data/etna.jpg";
        SurfaceImage surfaceImageUrl = new SurfaceImage(sector, ImageSource.fromUrl(urlString));

        // Add a WorldWindow layer that displays the Surface Image, just before the Atmosphere layer.
        RenderableLayer layer = new RenderableLayer("Surface Image");
        layer.addRenderable(surfaceImageResource);
        layer.addRenderable(surfaceImageUrl);
        wwd.getLayers().addLayer(layer);

        // Position the viewer so that the Surface Images are visible when the activity is created.
        wwd.getNavigator().setLatitude(37.46543388598137);
        wwd.getNavigator().setLongitude(14.97980511744455);
        wwd.getNavigator().setAltitude(4.0e5);

        return wwd;
    }
}
```
