---
title: "2D Rendering of Custom Shapes"
date: 2017-07-14T09:21:33-04:00
draft: false
listdescription: "This document describes how custom 3D renderables must be implemented to display correctly in 2D mode."
---

## 2D Rendering of Custom Shapes

Custom shapes (Renderables) should display correctly in both 3D and 2D modes. This document describes how custom 3D renderables must be implemented to display correctly in 2D mode. It first describes the necessary background and requirements of 2D mode, then presents steps for achieving correct behavior. Before reading this document we strongly advise that you read the custom-shape tutorial and examine the example code for that tutorial.

## An Important Implication of 2D Mode

In 2D mode the user can view more than 360 degrees of longitude in a single frame. If the view encompasses more than 360 degrees, some geographic locations will be visible in two or more different screen locations. Renderables at those geographic locations must therefore draw themselves at two or more different places on the screen. Additionally, the anti-meridian -- the +/- 180 degree meridian -- may lie at any point on the screen. It may even lie in several different screen locations if the user's view encompasses more than 360 degrees.

## How WorldWind Achieves Continuous 2D Scrolling

In 3D mode there is one globe and all Renderables in the model are rendered in a single display frame. In 2D mode there are multiple globes, each corresponding to one 180 degree x 360 degree view of the globe (with latitudes between plus and minus 90 degrees and longitudes between plus and minus 180 degrees). To achieve the effect that allows continuous scrolling, WorldWind renders several adjacent flat globes in a single display frame.

This entails that Renderables render themselves in multiple passes per frame, each pass corresponding to one of those globes. Renderables must therefore be programmed to pick and render themselves potentially several times per frame using different flat globes. Typically they are rendered only once or twice, depending on the user's view and the geographic projection in effect, but they may be rendered up to three times per frame.

WorldWind has always had the model that each display frame draws the Renderables for a single full globe. Renderables determine whether they are in view and draw themselves when they are. That model remains in 2D mode. Each time a Renderable's pick or render method is called it can assume that it's dealing with one full globe, but these methods might be called more than once per frame.

Renderables currently use Globe.computePointFromPosition and Globe.computePositionFromPoint to determine their Cartesian locations in the scene. These locations are subsequently transformed to screen coordinates by OpenGL. In 2D mode Renderables continue to use these methods this way. The difference is that the mapping to Cartesian and thus screen coordinates is different for each adjacent flat globe. Renderables can assume that when they are called to pick or render themselves that the current globe in the draw context is configured with the appropriate Cartesian coordinate mapping, and that their render and pick methods will be called once for each adjacent globe.

The number of times a Renderable is drawn is also governed by the geographic projection in effect. Some projections, such as polar projections, do not require multiple adjacent globes.

## Renderables Spanning the Anti-meridian

In 3D mode, Renderables spanning the anti-meridian typically draw themselves by transforming their geographic locations to Cartesian points and computing their dimensions and shape in Cartesian coordinates. This works well because Cartesian coordinates are continuous at the anti-meridian, unlike geographic coordinates. In 2D mode a globe's Cartesian coordinates are not continuous at the anti-meridian.

Renderables must be programmed to explicitly handle spanning the anti-meridian. Surface shapes automatically handle this case, so one method of adapting 3D Renderables is to draw them with a corresponding surface shape when in 2D mode. If that's not possible, the 3D Renderable must detect when it spans the anti-meridian, split itself accordingly and draw the split portions separately. One example of a WorldWind shape that does this is Path.

## Renderables in the Air

Users expect when using 2D mode that any shapes in the air are displayed projected onto the the 2D globe's surface. Therefore in 2D mode Renderables should ignore the altitude component of their geographic locations and drawn themselves as though their altitude mode is effectively CLAMP_TO_GROUND.

## Screen Shapes

The above relates to only geographically defined Renderables. Screen Renderables, such as ScreenAnnotation, must not draw themselves more than once per frame, since they should appear only once on the screen.

## Steps to Achieve 2D Mode Rendering

The following steps should be followed to ensure that custom Renderables display correctly in 2D mode. The draw context indicates to Renderables whether 2D mode is active. The method DrawContext.is2DGlobe indicates whether 2D mode is in effect. The method DrawContext.isContinuous2DGlobe indicates whether 2D mode is in effect and the projection requires multiple adjacent globes.

**1) Ensure that screen shapes are drawn only once per frame**
 
For this the shape can use the frame time stamp available from the method DrawContext.getFrameTimeStamp. This value remains constant for a frame no matter how many times a Renderable's pick and render methods are called. The shape can note the frame time when it renders its representation first for a frame, and prevent rendering subsequently if the frame time hasn't changed. For an example see CompassLayer.doRender or ScalebarLayer.doRender.

**2) Create separate OrderedRenderable for the shape**
 
To ensure that a Renderable is drawn in the correct locations when it's visible multiple times in the scene, create and enque separate OrderedRenderables for the Renderable, one per 2D globe, rather than treating the Renderable itself as an OrderedRenderable and enqueing it multiple times. Create and enque one new OrderedRenderable during each pick and render call, with each of those OrderedRenderables holding the Cartesian coordinates relative to the 2D globe for which they were created.
 
Cartesian coordinates are different for each 2D globe, so any Cartesian coordinates stored in the Renderable are valid for only one globe. If the Renderable itself is enqued as an OrderedRenderable, it will be drawn only at the location last stored in the Renderable no matter how many times it's added to the ordered renderable queue. By creating and enqueing separate OrderedRenderables for each specific instance associated with a specific 2D globe, the Renderable will be drawn correctly at multiple locations.

**3) Ensure the shape behaves correctly when drawn across the anti-meridian**
 
Renderables must detect when they span the anti-meridian and draw themselves correctly in that case. The simplest way to achieve this is to use a SurfacShape in place of the 3D Renderable when in 2D mode. Surface shapes automatically handle the anti-meridian correctly. To use a SurfaceShape for this, add the PreRenderable interface to the Renderable, create the representative surface shape in the preRender method, and draw the surface shape during rendering and picking. AbstractShape implements a mechanism for this. Renderables that inherit from AbstractShape need only implement AbstractShape.createSurfaceShape method and update that surface shape when the application changes the Renderable's properties, such as its geographic locations. See Polygon for an example.

When a SurfaceShape cannot be used to represent the Renderable, the Renderable must explicitly handle the anti-meridian crossing, typically by rendering itself in multiple sections. See Path.makePositions for an example.

See the How to: Build a Custom Renderable tutorial for an example of implementing a custom shape to work correctly in 2D mode.