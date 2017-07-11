---
title: "WCS Elevation Coverage"
date: 2017-07-06T23:45:17-04:00
draft: false
mainpage: false
projectpage: false
projectslug: "android"
projectname: "WorldWind Android"
listdescription: "Demonstrates how to add an OGC Web Coverage Service (WCS) elevation coverage."
listimage: "/img/ww-android-wcs-elevation.png"
layout: "project"
---

## WCS Elevation Coverage

<img src="/img/ww-android-wcs-elevation.png" class="img-responsive center-block">

This tutorial demonstrates how to add USGS NED elevation data from a WCS.

### WcsElevationFragment.java

The WcsElevationFragment class extends the BasicGlobeFragment and overrides the createWorldWindow method. Here we use the Wcs100ElevationCoverage class to load USGS NED elevation data. Once the coverage is added to the elevation model, the Wcs100ElevationCoverage class will request elevation data via the WCS version 1.0.0 specification and WorldWind will generate terrain. A similar connection to a WCS supporting version 2.0.1 is available in the Wcs201ElevationCoverage class.

```java
package gov.nasa.worldwindx;
...
public class WcsElevationFragment extends BasicGlobeFragment {

    /**
     * Creates a new WorldWindow (GLSurfaceView) object with a WCS Elevation Coverage
     *
     * @return The WorldWindow object containing the globe.
     */
    @Override
        public WorldWindow createWorldWindow() {
        // Let the super class (BasicGlobeFragment) do the creation
        WorldWindow wwd = super.createWorldWindow();

        // Specify the bounding sector - provided by the WCS
        Sector coverageSector = Sector.fromDegrees(25.0, -125.0, 25.0, 60.0);
        // Specify the number of levels to match data resolution
        int numberOfLevels = 12;
        // Specify the version 1.0.0 WCS address
        String serviceAddress = "https://worldwind26.arc.nasa.gov/wcs";
        // Specify the coverage name
        String coverage = "USGS-NED";

        // Create an elevation coverage from a version 1.0.0 WCS
        ElevationCoverage usgsNed = new Wcs100ElevationCoverage(coverageSector, numberOfLevels, serviceAddress, coverage);

        // Remove any existing coverages from the Globe
        wwd.getGlobe().getElevationModel().clearCoverages();

        // Add the coverage to the Globes elevation model
        wwd.getGlobe().getElevationModel().addCoverage(usgsNed);

        // Position the camera to look at Mt. Rainier
        this.positionView(wwd);

        return wwd;
    }
}
```