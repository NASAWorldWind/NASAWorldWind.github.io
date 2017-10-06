---
title: "Common Problems-WorldWind Java/NASA WorldWind"
date: 2017-07-13T23:03:35-04:00
draft: false
listdescription: "Outlines some of the common issues users face and ways to resolve them."
---

## Common Problems

Many problems encountered by WorldWind developers and their application users have common causes. They therefore have the same solution. Those problems and their fix are listed here.

---

## Problem: NASA Map Layers do not download (HTTP 301)

As of January 2017 WorldWind map servers (worldwind*.arc.nasa.gov, data.worldwind.arc.nasa.gov, and builds.worldwind.arc.nasa.gov) exclusively use HTTPS.  HTTP requests return a redirect to the HTTPS endpoint. The Java URLConnection class does not follow the redirect protocol. Clients map layer configuration files must be updated to use HTTPS endpoints. You may see the following errors:

```
FINE: Response code 301, Content length 534, Content type text/html; charset=iso-8859-1, retrieving http://worldwind25.arc.nasa.gov/
...
SEVERE: Retrieval returned no content for http://worldwind47.arc.nasa.gov/topo?EXCEPTIONS=application/vnd.ogc.se_xml&REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0
```

<br/>

#### Option 1: Upgrade to WorldWind Java v2.1.0 (Preferred)

WorldWind Java v2.1.0 uses HTTPS map layers exclusively. SDK v2.1.0 and v2.0.0 are interface compatible.

https://github.com/NASAWorldWind/WorldWindJava/releases/latest

<br/>

#### Option 2: Update v2.0.0 Patch

Download the WorldWind Java v2.0.0 HTTPS Patch jar from [GitHub](https://github.com/zglueck/worldwind-2.0.0-https-patch/releases). Place the jar in the classpath of your project and add the following argument to your application launch script.

```
$ java -Dgov.nasa.worldwind.app.config.document=worldwind-2.0.0-https-patch/worldwind-https-patch.xml
```

The patch jar includes a new PlaceNames layer: NASAWFSPlaceNamesLayerHttps.java. This class is a copy of the NASAWFSPlaceNamesLayer class but updates the hard coded service link to HTTPS.

To summarize, the best option, if available, is to update to v2.1.0. In addition to HTTPS endpoints specified by default, there are a number of improvements and bug fixes. Please note some WMS layer sources have been deprecated in v2.1.0. The configuration files have been maintained with a deprecated comment in order to maintain your on disk cache of the data. All versions of WorldWind Java support HTTPS, as WorldWind is using the Java URLConnection class. Specifying an HTTPS endpoint on an older WorldWind Java version will work. The problem arises in the URLConnection class not following the protocol redirection provided by the server.

If you still need help or have questions, please search/post on the forum or GitHub.

---

## Problem: I don't see a globe

The video card drivers are out of date. Installing updated drivers almost always fixes the problem.

---

## Problem: The change I made didn't show up on the screen

1. Be sure to call `WorldWindow.redraw()` when you've finished making changes to shapes, layers, the view, or anything else. WorldWind does not automatically update the screen when the app makes changes. Apps usually make several changes in reaction to user requests, Redrawing at every one of those intermediate changes would show intermediate states and decrease performance. WorldWind does redraw in response to its input handler or when data requested from a server arrives.
2. Be sure to make changes to WorldWind on the event dispatch thread (EDT). That's the drawing thread. If changes are made to shapes, layers, views, etc. on a separate thread, they could occur while the model is being drawn and the drawing thread could encounter inconsistent or incoherent state.

---

## Problem: My shapes are bigger than they're supposed to me

Be sure the shapes are specified in meters. WorldWind assumes all linear measures such as elevation, altitude and length are in meters. If they're in feet instead, all the shapes will be larger than expected.

---

## Problem: The globe became dark

If you're using classes that you've created or extended, and they draw using OpenGL, be sure they restore the OpenGL state to what it was when given control. All WorldWind shapes assume they inherit the default OpenGL state when they draw. If the inherited state is different from the default, the shape will likely display incorrectly. And if one class does not restore the state, everything subsequently drawn will likely be incorrect in some way. The causes are typically one of these:
1. The most common mistake is failure to push and pop attribute masks or transforms for the state changed by the drawing code.
2. It could also happen when an exception occurred after the OpenGL state is set but before it's restored. The best practice is to set state within a try block with a finally clause that performs the restoration, like this:
```java
GL2 gl = dc.getGL().getGL2(); // Get JOGL's GL2 interface from the draw context.
OGLStackHandler osh = new OGLStackHandler();
try
{
    gl.glEnable(GL.GL_TEXTURE_2D);
    osh.pushProjectionIdentity(gl);
    gl.glBegin(GL.GL_LINE_LOOP);
    gl.glVertex2d(0d, 0d);
    gl.glVertex2d(1, 0d);
    gl.glVertex2d(1, 1);
    gl.glEnd();
}
finally
{
    gl.glDisable(GL.GL_TEXTURE_2D);
    osh.pop(gl);
}
```
Notice that WorldWind's OGLStackHandler class is used to push and pop an identity projection matrix. The texture control is explicit because pushing and popping texture state is expensive.

---

## Problem: Can't load IA 32-bit .dll on a AMD 64-bit platform

Note: This problem applies to WorldWind 1.5 and earlier. WorldWind 2.0 manages the loading of 32-bit and 64-bit versions of JOGL automatically.

This error indicates that WorldWind is running in a 64-bit Java Virtual Machine, but attempting to load a 32-bit version of JOGL (the Java OpenGL binding). To correct the problem, you need to extract the 64-bit libraries for Windows included in the WorldWind release:

1. Open a terminal.
2. `cd` to the WorldWind release folder.
3. `jar xf jogl-natives-windows-amd64.jar`
4. `jar xf gluegen-rt-natives-windows-amd64.jar`

---

## Problem: Cannot extract JOGL runtime binaries

JOGL 2 performs runtime extraction of native binaries. Some deployment situations may not allow this because it extracts the binaries to the application user's temp directory. Runtime extraction can be avoided by following the instructions in WorldWind's README.txt file in the "New features and improvements in WorldWind Java SDK 2.0.0" section.

---

## Problem: Memory leaks on Intel integrated graphics devices. Application eventually crashes.

The Intel integrated graphics driver has a memory leak. It does not free memory when OpenGL resources such as VBOs are deleted. System memory usage therefore continues to grow unbounded until the application crashes. The best way to mitigate this is to set the WorldWind VBOUsage configuration  property to false in config/worldwind.xml.

---

## Console Message: `GLDrawableHelper.reshape: pre-existing GL error`

An OpenGL error has been detected during rendering. Identify the problematic OpenGL call by enabling the OpenGL debugger. Add the following JVM argument and run the application again:

```
-Djogl.debug.DebugGL
```

When the OpenGL debugger is enabled, problematic OpenGL calls that went unreported now result in an exception. These exceptions are caught by WorldWind and written to the log. For example, modifying TextureTile.setTextureParameters to produce an OpenGL error results in:

```
Sep 06, 2016 1:29:06 PM gov.nasa.worldwind.render.SurfaceTileRenderer renderTiles
SEVERE: Exception while rendering layer gov.nasa.worldwind.render.GeographicSurfaceTileRenderer
javax.media.opengl.GLException: Thread[AWT-EventQueue-0,6,main] glGetError() returned the following error codes after a call to glTexParameteri( 0xDE1,  0x2801,  0x1907): GL_INVALID_ENUM ( 1280 0x500), 
    at javax.media.opengl.DebugGL4bc.writeGLError(DebugGL4bc.java:29501)
    at javax.media.opengl.DebugGL4bc.glTexParameteri(DebugGL4bc.java:20131)
    at gov.nasa.worldwind.layers.TextureTile.setTextureParameters(TextureTile.java:397)
    ....
```

Warning: The OpenGL debugger impacts rendering performance, and must not be used in production.
