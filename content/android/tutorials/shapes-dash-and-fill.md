---
title: "Shapes Dash and Fill-WorldWind Android/NASA WorldWind"
date: 2017-07-07T00:38:02-04:00
draft: false
header: Shapes Dash and Fill
listdescription: "Demonstrates how to specify dashed outlines and repeating fill patterns for shapes."
listimage: "/img/ww-android-shape-fills.png"
---

## Shapes Dash and Fill

<img src="/img/ww-android-shape-fills.png" class="img-responsive center-block">

This example renders five different dashed shapes on the globe.

- The westernmost Path specifies a dash pattern and factor.
- The middle Path modifies the dash factor from the western example.
- The easternmost Path follows terrain and uses a different pattern.
- The northern Polygon specifies a repeating fill using an image.
- The southern Polygon uses the same repeating fill, but follows terrain and specifies a dash pattern for the outline.

### ShapesDashAndFillFragment.java

The ShapesDashAndFillFragment class extends the BasicGlobeFragment and overrides the createWorldWindow method. Here we create and add a RenderableLayer to the globe, and then define and add four Paths to the layer.

```java
package gov.nasa.worldwindx;
...
public class ShapesDashAndFillFragment extends BasicGlobeFragment {

    /**
     * Creates a new WorldWindow (GLSurfaceView) object with a set of Path and Polygon shapes with dashed lines and
     * repeating fill.
     *
     * @return The WorldWindow object containing the globe.
     */
    @Override
    public WorldWindow createWorldWindow() {
        // Let the super class (BasicGlobeFragment) do the creation
        WorldWindow wwd = super.createWorldWindow();

        // Create a layer to display the tutorial shapes.
        RenderableLayer layer = new RenderableLayer();
        wwd.getLayers().addLayer(layer);

        // Thicken all lines used in the tutorial.
        ShapeAttributes thickenLine = new ShapeAttributes();
        thickenLine.setOutlineWidth(4f);

        // Create a path with a simple dashed pattern generated from the ImageSource factory. The
        // ImageSource.fromLineStipple function generates a texture based on the provided factor and pattern, similar to
        // stipple parameters of OpenGL 2. The binary representation of the pattern value will be the pattern displayed,
        // where positions with a 1 appearing as opaque and a 0 as transparent.
        List<Position> positions = Arrays.asList(
            Position.fromDegrees(60.0, -100.0, 1e5),
            Position.fromDegrees(30.0, -120.0, 1e5),
            Position.fromDegrees(0.0, -100.0, 1e5)
        );
        Path path = new Path(positions);
        ShapeAttributes sa = new ShapeAttributes(thickenLine);
        sa.setOutlineImageSource(ImageSource.fromLineStipple(2 /*factor*/, (short) 0xF0F0 /*pattern*/));
        path.setAttributes(sa);
        layer.addRenderable(path);

        // Modify the factor of the pattern for comparison to first path. Only the factor is modified, not the pattern.
        positions = Arrays.asList(
            Position.fromDegrees(60.0, -90.0, 5e4),
            Position.fromDegrees(30.0, -110.0, 5e4),
            Position.fromDegrees(0.0, -90.0, 5e4)
        );
        path = new Path(positions);
        sa = new ShapeAttributes(thickenLine);
        sa.setOutlineImageSource(ImageSource.fromLineStipple(4 /*factor*/, (short) 0xF0F0 /*pattern*/));
        path.setAttributes(sa);
        layer.addRenderable(path);

        // Create a path conforming to the terrain with a different pattern from the first two Paths.
        positions = Arrays.asList(
            Position.fromDegrees(60.0, -80.0, 0.0),
            Position.fromDegrees(30.0, -100.0, 0.0),
            Position.fromDegrees(0.0, -80.0, 0.0)
        );
        path = new Path(positions);
        sa = new ShapeAttributes(thickenLine);
        sa.setOutlineImageSource(ImageSource.fromLineStipple(8 /*factor*/, (short) 0xDFF6 /*pattern*/));
        path.setAttributes(sa);
        path.setAltitudeMode(WorldWind.CLAMP_TO_GROUND);
        path.setFollowTerrain(true);
        layer.addRenderable(path);

        // Create a polygon using an image as a repeating fill pattern.
        positions = Arrays.asList(
            Position.fromDegrees(50.0, -70.0, 1e5),
            Position.fromDegrees(35.0, -85.0, 1e5),
            Position.fromDegrees(35.0, -55.0, 1e5)
        );
        Polygon polygon = new Polygon(positions);
        sa = new ShapeAttributes(thickenLine);
        sa.setInteriorImageSource(ImageSource.fromResource(R.drawable.pattern_sample_houndstooth));
        sa.setInteriorColor(new gov.nasa.worldwind.render.Color(1f, 1f, 1f, 1f));
        polygon.setAttributes(sa);
        layer.addRenderable(polygon);

        // Create a surface polygon using an image as a repeating fill pattern and a dash pattern for the outline
        // of the polygon.
        positions = Arrays.asList(
            Position.fromDegrees(25.0, -85.0, 0.0),
            Position.fromDegrees(10.0, -80.0, 0.0),
            Position.fromDegrees(10.0, -60.0, 0.0),
            Position.fromDegrees(25.0, -55.0, 0.0)
        );
        polygon = new Polygon(positions);
        sa = new ShapeAttributes(thickenLine);
        sa.setInteriorImageSource(ImageSource.fromResource(R.drawable.pattern_sample_houndstooth));
        sa.setOutlineImageSource(ImageSource.fromLineStipple(8, (short) 0xDFF6));
        polygon.setAttributes(sa);
        polygon.setAltitudeMode(WorldWind.CLAMP_TO_GROUND);
        polygon.setFollowTerrain(true);
        layer.addRenderable(polygon);

        return wwd;
    }
}
```