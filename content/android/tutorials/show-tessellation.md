---
title: "Show Tessellation"
date: 2017-07-07T00:47:30-04:00
draft: false
listdescription: "Demonstrates the globe's Tessellator."
listimage: "/img/ww-android-show-tessellation.png"
---

## Show Tessellation

<img src="/img/ww-android-show-tessellation.png" class="img-responsive center-block">

This example adds a layer to the basic globe that shows the tessellation.

### ShowTessellationFragement.java

The ShowTessellationFragment class extends the BasicGlobeFragment and overrides the createWorldWindow method. Here we simply add an additional ShowTessellationLayer to the globe.

<img src="/img/ww-android-show-tessellation-classes" class="img-responsive center-block">

```java
public class ShowTessellationFragment extends BasicGlobeFragment {

    /**
     * Creates a new WorldWindow with a additional tessellation layer.
     */
    @Override
    public WorldWindow createWorldWindow() {
        // Let the super class (BasicGlobeFragment) do the creation
        WorldWindow wwd = super.createWorldWindow();

        // Create a layer that displays the globe's tessellation geometry.
        ShowTessellationLayer layer = new ShowTessellationLayer();
        wwd.getLayers().addLayer(layer);

        return wwd;
    }
}
```