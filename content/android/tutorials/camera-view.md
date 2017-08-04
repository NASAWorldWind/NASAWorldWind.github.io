---
title: "Camera View"
date: 2017-07-07T00:03:35-04:00
draft: false
listdescription: "Demonstrates how to use a Camera to view a position. Also shows how to configure the WorldWindow's
        camera to point a particular direction from a specific position and how to compute great circle distance and
        azimuth between two positions."
listimage: "/img/ww-android-camera-view.png"
---

## Camera View

<img src="/img/ww-android-camera-view.png" class="img-responsive" hspace="10" vspace="10" align="left">This example simulates a view from an aircraft above Oxnard, CA looking at the Point Mugu Naval Air Station.

### CameraViewFragment.java

The CameraViewFragment class extends the BasicGlobeFragment and overrides the createWorldWindow method. Here we position the Navigator's camera at an aircraft's location and point the camera at a nearby airport.

<img src="/img/ww-android-camera-view-classes.png" class="img-responsive center-block">

```java
public class CameraViewFragment extends BasicGlobeFragment {

    /**
     * Creates a new WorldWindow with its camera positioned at a given location and configured to point in a given
     * direction.
     */
    @Override
    public WorldWindow createWorldWindow() {
        // Let the super class (BasicGlobeFragment) do the creation
        WorldWindow wwd = super.createWorldWindow();

        // Create a view of Point Mugu airport as seen from an aircraft above Oxnard, CA.
        Position aircraft = new Position(34.2, -119.2, 3000);           // Above Oxnard CA, altitude in meters
        Position airport = new Position(34.1192744, -119.1195850, 4.0); // KNTD airport, Point Mugu CA, altitude MSL

        // Compute heading and tilt angles from aircraft to airport
        Globe globe = wwd.getGlobe();
        double heading = aircraft.greatCircleAzimuth(airport);
        double distanceRadians = aircraft.greatCircleDistance(airport);
        double distance = distanceRadians * globe.getRadiusAt(aircraft.latitude, aircraft.longitude);
        double tilt = Math.toDegrees(Math.atan(distance / aircraft.altitude));

        // Create the new camera view
        Camera camera = new Camera();
        camera.set(aircraft.latitude, aircraft.longitude, aircraft.altitude, WorldWind.ABSOLUTE, heading, tilt, 0); // No roll

        // Apply the view
        wwd.getNavigator().setAsCamera(globe, camera);

        // This works too!  Using the fluid api to manipulate the Navigator's camera:
//        wwd.getNavigator()
//            .setLatitude(aircraft.latitude)
//            .setLongitude(aircraft.longitude)
//            .setAltitude(aircraft.altitude)
//            .setHeading(heading)
//            .setTilt(tilt);

        return wwd;
    }
}
```