---
title: "Get Started"
date: 2017-07-27T09:50:17-05:00
draft: false
---

## Get Started

Built on Java and OpenGL, WorldWind Java is a cross-platform virtual globe in use by thousands of organizations around the world. With support for an array of different data formats WorldWind Java provides a highly configurable visual representation of a globe for you geographic needs.

---

### Run an Application Using WorldWind

1. Download the latest release from the WorldWind [GitHub Releases](https://github.com/NASAWorldWind/WorldWindJava/releases).

2. Extract the WorldWind SDK to a folder anywhere on your hard drive. The following steps refer to the extracted folder as WorldWind.

3. Run a WorldWind Demo by opening the WorldWind/README.txt and following the instructions under "Running a Basic Demo Application".

4. Create an app by reviewing the programming examples in WorldWind/src/gov/nasa/worldwindx/examples. Start with SimplestPossibleExample and ApplicationTemplate, then refer to the [Examples](/java/examples/) page for more advanced topics. Here are examples of running your app from the command-line, assuming your app's JAR file is MyApp.jar, and your main class is worldwinddemo.MyBasicDemo.

On Mac OS X and Linux

```
java -Xmx1024m -cp MyApp.jar:worldwind.jar:worldwindx.jar:jogl-all.jar:gluegen-rt.jar:gdal.jar worldwinddemo.MyBasicDemo
```

On Windows

```
java -Xmx1024m -Dsun.java2d.noddraw=true -cp MyApp.jar;worldwind.jar;worldwindx.jar;jogl-all.jar;gluegen-rt.jar;gdal.jar worldwinddemo.MyBasicDemo
```

Note: All *.dll, *.jnilib, and *.so files in the WorldWind folder must be in the same folder as MyApp.jar.

---

### Deploy an Application Using Java Web Start

1. Create a Java Web Start Application JNLP File
Modify the template JNLP file WorldWind/webstart/JavaWebStartTemplate.jnlp to fit your app.

2. Add WorldWind Libraries to Your Application JNLP
Insert the following XML extension elements in the resources block of your app's JNLP file, depending on your app's needs:

WorldWind Core Library (required)

```xml
<extension name="worldwind" href="http://worldwind.arc.nasa.gov/java/v2.1.0/webstart/worldwind.jnlp"/>
```

WorldWind Extensions Library (required if your app uses the gov.nasa.worldwindx package)

```xml
<extension name="worldwindx" href="http://worldwind.arc.nasa.gov/java/v2.1.0/webstart/worldwindx.jnlp"/>
```

GDAL Library (optional, include if your app uses WorldWind's data import feature)

```xml
<extension name="gdal" href="http://worldwind.arc.nasa.gov/java/v2.1.0/webstart/gdal.jnlp"/>
```

3. Prepare Your Application's JAR Files
JAR files used by a Java Web Start application must be signed by a recognized authority, and must specify the Permissions manifest attribute. WorldWind's JAR files have already been signed and contain the necessary manifest attributes. See Oracle's documentation on Signing JAR Files and JAR File Manfiest Attributes for Security.

4. Deploy Your Application
Determine a URL to host your app at, such as http://myworldwinddemo.org/. Set your JNLP file's codebase attribute to this URL, then host your JNLP file and any JAR files referenced by your JNLP at this URL. See Oracle's documentation on Rich Internet Application Deployment for more information.