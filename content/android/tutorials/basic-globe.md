---
title: "Basic Globe"
date: 2017-07-06T23:01:58-04:00
draft: false
listdescription: "Demonstrates how to construct a WorldWindow with a few layers."
listimage: "/img/ww-android-basic-globe.png"
---

## Basic Globe Tutorial

<img src="/img/ww-android-basic-globe.png" class="img-responsive" align="left" vspace="10" hspace="30">The globe uses the default navigation gestures:

- one-finger pan moves the camera,
- two-finger pinch-zoom adjusts the range to the look at position,
- two-finger rotate arcs the camera horizontally around the look at position,
- three-finger tilt arcs the camera vertically around the look at position.

### Get Started

It’s very easy to get started using World Wind Android. You simply create and configure a WorldWindow View object and add it to a layout. This can be performed in an Activity or a Fragment. The following snippet shows the code that creates the WorldWindow and adds some imagery to the globe.

```java
// Create a World Window (a GLSurfaceView)...
WorldWindow wwd = new WorldWindow(getContext());
// ... and add some map layers
wwd.getLayers().addLayer(new BackgroundLayer());
wwd.getLayers().addLayer(new BlueMarbleLandsatLayer());
```

### Example

In this example, we add WorldWindow to a Fragment's layout in its onCreateView() callback.  onCreateView() creates the WorldWind view object and adds the view to the Fragment's FrameLayout.

### Class Diagram

This class diagram shows the primary World Wind classes used in the Fragment.

<img src="/img/ww-android-basic-globe-class-diagram.png" class="img-responsive center-block">

### BasicGlobeFragment.java

```java
public class BasicGlobeFragment extends Fragment {

    private WorldWindow wwd;

    public BasicGlobeFragment() {
    }

    /**
     * Creates a new WorldWindow (GLSurfaceView) object.
     */
    public WorldWindow createWorldWindow() {
        // Create the World Window (a GLSurfaceView) which displays the globe.
        this.wwd = new WorldWindow(getContext());
        // Setup the World Window's layers.
        this.wwd.getLayers().addLayer(new BackgroundLayer());
        this.wwd.getLayers().addLayer(new BlueMarbleLandsatLayer());
        return this.wwd;
    }

    /**
     * Gets the WorldWindow (GLSurfaceView) object.
     */
    public WorldWindow getWorldWindow() {
        return this.wwd;
    }

    /**
     * Adds the WorldWindow to this Fragment's layout.
     */
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_globe, container, false);
        FrameLayout globeLayout = (FrameLayout) rootView.findViewById(R.id.globe);

        // Add the WorldWindow view object to the layout that was reserved for the globe.
        globeLayout.addView(this.createWorldWindow());

        return rootView;
    }

    /**
     * Resumes the WorldWindow's rendering thread
     */
    @Override
    public void onResume() {
        super.onResume();
        this.wwd.onResume(); // resumes a paused rendering thread
    }

    /**
     * Pauses the WorldWindow's rendering thread
     */
    @Override
    public void onPause() {
        super.onPause();
        this.wwd.onPause(); // pauses the rendering thread
    }
}
```

### layout/fragment_globe.xml

A FrameLayout hosts the WorldWindow.

```xml
<RelativeLayout
        xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_gravity="left|top">

    <!--WorldWindow Globe panel-->
    <FrameLayout
            android:id="@+id/globe"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:layout_alignParentLeft="true"
            android:layout_alignParentRight="true"
            android:layout_alignParentTop="true"></FrameLayout>

    ...
</RelativeLayout>
```