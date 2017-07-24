---
title: "Look At View"
date: 2017-07-07T00:11:40-04:00
draft: false
listdescription: "Demonstrates how to use LookAt to view a position. This example also shows how to compute great circle distance and azimuth between two positions."
listimage: "/img/ww-android-look-at-view.png"
---

## Look At View

<img src="/img/ww-android-camera-view.png" class="img-responsive" hspace="10" vspace="10" align="left">This example simulates a view from an aircraft above Santa Monica, CA looking at the LAX airport.

### CameraViewFragment.java

The LookAtViewFragment class extends the BasicGlobeFragment and overrides the createWorldWindow method. Here we position the Navigator's camera at an aircraft's location and point the camera at a nearby airport.

<img src="/img/ww-android-look-at-view-classes.png" class="img-responsive center-block">

```java
public class LookAtViewFragment extends BasicGlobeFragment {

    /**
     * Creates a new WorldWindow with its camera configured to look at a given location from a given position.
     */
    @Override
    public WorldWindow createWorldWindow() {
        // Let the super class (BasicGlobeFragment) do the creation
        WorldWindow wwd = super.createWorldWindow();

        // Create a view of LAX airport as seen from an aircraft above Santa Monica, CA.
        Position aircraft = new Position(34.0158333, -118.4513056, 2500);   // Aircraft above Santa Monica airport, altitude in meters
        Position airport = new Position(33.9424368, -118.4081222, 38.7);    // LAX airport, Los Angeles CA, altitude MSL

        // Compute heading and distance from aircraft to airport
        Globe globe = wwd.getGlobe();
        double heading = aircraft.greatCircleAzimuth(airport);
        double distanceRadians = aircraft.greatCircleDistance(airport);
        double distance = distanceRadians * globe.getRadiusAt(aircraft.latitude, aircraft.longitude);

        // Compute camera settings
        double altitude = aircraft.altitude - airport.altitude;
        double range = Math.sqrt(altitude * altitude + distance * distance);
        double tilt = Math.toDegrees(Math.atan(distance / aircraft.altitude));

        // Apply the new view
        LookAt lookAt = new LookAt();
        lookAt.set(airport.latitude, airport.longitude, airport.altitude, WorldWind.ABSOLUTE, range, heading, tilt, 0 /*roll*/);
        wwd.getNavigator().setAsLookAt(globe, lookAt);

        return wwd;
    }
}
```