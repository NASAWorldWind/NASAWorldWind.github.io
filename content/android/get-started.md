---
title: "Get Started"
date: 2017-07-03T22:20:00-04:00
draft: false
mainpage: false
projectpage: true
projectslug: "android"
projectname: "WorldWind Android"
listdescription: ""
layout: "project"
---

## Getting Started

WorldWind Android is an [Android Library](https://developer.android.com/studio/projects/android-library.html) which compiles into an Android Archive (AAR) file. The AAR can be linked and used to display the 3D virtual globe within your application. The WorldWind Android AAR is compatible to API level 19 (Android 4.4 KitKat).

Skip to the [**Download**](#download) section for directions on how to add WorldWind Android to your application. If you need some guidance with setting up the Android Studio IDE, the [**Setup**](#setup) section includes in-depth directions and walks through the creation of a sample project utilizing the WorldWind library.

---
### <a name="download"></a>Download

For [Gradle](https://gradle.org) based projects, versioned WorldWind Android releases are hosted on [JCenter](https://bintray.com/bintray/jcenter). Grab the latest version by adding the following to the `dependencies` closure in your `build.gradle` file:
```groovy
compile 'gov.nasa.worldwind.android:worldwind:{{% latestBintrayVersion url="https://api.bintray.com/packages/nasaworldwind/maven/WorldWindAndroid/versions/_latest" %}}'
```

To manually download the (AAR) and other artifacts (source and javadocs) visit: https://bintray.com/nasaworldwind/maven/WorldWindAndroid

`SNAPSHOT` builds are available through [OJO](https://oss.jfrog.org/). Add the following repository to your Gradle project:
```groovy
repositories {
    maven {
        url 'https://oss.jfrog.org/artifactory/oss-snapshot-local'
    }
}
```
Add the latest `SNAPSHOT` WorldWind Android dependency:
```groovy
compile 'gov.nasa.worldwind.android:worldwind:{{% latestOjoVersion url="https://oss.jfrog.org/artifactory/api/search/versions?g=gov.nasa.worldwind.android&a=worldwind&repos=oss-snapshot-local" %}}'
```
---
### <a name="setup"></a>Setup
#### Install Android Studio
[Android Studio](https://developer.android.com/studio/index.html) is the IDE used by the WorldWind development team. It includes all the tools you need to build apps for Android. If you haven't done so already, download and install Android Studio.

{{< button url="https://developer.android.com/studio/index.html" buttonText="Get Android Studio" >}}
##### Installation Notes
When you perform the installation you can choose the *Standard Setup*, which will download the required Android SDK components.
##### Prerequisites
Android Studio requires a compatible [Java SE Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) be installed on your computer. The installation instructions may prompt you to download and install an appropriate JDK (JDK 8 is recommended).
#### Learning more about the Android Platform
- Familiarize yourself with the [Android Developer's Site](http://developer.android.com/).
- Read "[Introduction to Android](https://developer.android.com/guide/index.html)" and "[Application Fundamentals](https://developer.android.com/guide/components/fundamentals.html)" in the [Android Developer's Guide](http://developer.android.com/guide/).
- Create a bookmark to the [Android API Docs](http://developer.android.com/reference/packages.html).

#### How to build a basic WorldWind Android 'app'
1. Create a new Android Studio Project
  1. Select File > New > New Project... to run the ne project wizard
  2. Configure your new project:
     - You can use the default values
  3. Select the form factors your app will run on:
     - Choose Phone/Tablet
     - Choose Minimum SDK: API 19: Android 4.4 (KitKat)
  4. Add an Activity
     - Choose an Empty Activity
  5. Customize the Activity:
     - You can use the default values
     - Activity Name: `MainActivity`
     - Generate Layout File: checked
     - Layout Name: `activity_main`
2. Run the 'app' to verify it works
  1. Select Run > Run 'app'
  2. Choose an Available Emulator or Device and select OK
  3. If Required, create a new emulator to run the 'app'
     - Select hardware device: Default Nexus 5X
     - Select and download a System Image: Default: Marshmallow (wait for download to complete)
     - Configure Android Virtual Device (AVD)
3. Add the WorldWind library to your project
  - If using Gradle (prefered method), follow the directions [above](#download), otherwise:
     1. [Download](https://bintray.com/nasaworldwind/maven/WorldWindAndroid) the WorldWind Library for Android (worldwind.aar)
     2. Add a new Module to your project
         - Choose File > New Module...
         - Select Import .JAR/.AAR Package
         - Filename: Browse to your downloaded worldwind.aar file
         - Subproject name: worldwind
     3. Add worldwind dependency to your 'app'
         - Open app Module Setting... > Dependencies > [+] Module dependency > worldwind > OK
4. Add a WorldWindow globe to the MainActivity
    We'll make three simple changes to your 'app' to add a basic globe.

    First, edit the `activity_main.xml` layout file and replace the `TextView` with the following `FrameLayout`. The `FrameLayout` is assigned the `globe` id which will be referenced in the `MainActivity`.
    ```xml
    <!--WorldWindow Globe panel-->
    <FrameLayout
        android:id="@+id/globe"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_alignParentLeft="true"
        android:layout_alignParentRight="true"
        android:layout_alignParentTop="true"></FrameLayout>
    ```
    Second, create an instance of a WorldWindow in MainActivity.java and attach to the `FrameLayout`. The following code snippet should be added to the MainActivity's onCreate() method.
    ```java
    // Create a World Window (a GLSurfaceView)...
    WorldWindow wwd = new WorldWindow(getApplicationContext());
    // ... and add some map layers
    wwd.getLayers().addLayer(new BackgroundLayer());
    wwd.getLayers().addLayer(new BlueMarbleLandsatLayer());
    // Add the WorldWindow view object to the layout that was reserved for the globe.
    FrameLayout globeLayout = (FrameLayout) findViewById(R.id.globe);
    globeLayout.addView(wwd);
    ```
    And finally, add the following network access permissions to the AndroidManifest.xml so that the globe can download its imagery.
    ```xml
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    ```
  - `activity_main.xml`
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <RelativeLayout
            xmlns:android="http://schemas.android.com/apk/res/android"
            xmlns:tools="http://schemas.android.com/tools"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:paddingBottom="@dimen/activity_vertical_margin"
            android:paddingLeft="@dimen/activity_horizontal_margin"
            android:paddingRight="@dimen/activity_horizontal_margin"
            android:paddingTop="@dimen/activity_vertical_margin"
            tools:context="com.example.myapplication.MainActivity">

        <!--WorldWindow Globe panel-->
        <FrameLayout
                android:id="@+id/globe"
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:layout_alignParentLeft="true"
                android:layout_alignParentRight="true"
                android:layout_alignParentTop="true"></FrameLayout>
    </RelativeLayout>
    ```
  - `MainActivity.java`
    
    ```java
    package com.example.myapplication;

    import android.support.v7.app.AppCompatActivity;
    import android.os.Bundle;
    import android.widget.FrameLayout;

    import gov.nasa.worldwind.WorldWindow;
    import gov.nasa.worldwind.layer.BackgroundLayer;
    import gov.nasa.worldwind.layer.BlueMarbleLandsatLayer;

    public class MainActivity extends AppCompatActivity {

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);

            // Create a World Window (a GLSurfaceView)...
            WorldWindow wwd = new WorldWindow(getApplicationContext());
            // ... and add some map layers
            wwd.getLayers().addLayer(new BackgroundLayer());
            wwd.getLayers().addLayer(new BlueMarbleLandsatLayer());
            // Add the WorldWindow view object to the layout that was reserved for the globe.
            FrameLayout globeLayout = (FrameLayout) findViewById(R.id.globe);
            globeLayout.addView(wwd);
        }
    }
    ```
  - `AndroidManifest.xml`
  
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <manifest package="com.example.myapplication"
            xmlns:android="http://schemas.android.com/apk/res/android">

        <uses-permission android:name="android.permission.INTERNET"></uses>
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"></uses>

        <application
                android:allowBackup="true"
                android:icon="@mipmap/ic_launcher"
                android:label="@string/app_name"
                android:supportsRtl="true"
                android:theme="@style/AppTheme">
            <activity android:name=".MainActivity">
                <intent-filter>
                    <action android:name="android.intent.action.MAIN"></action>

                    <category android:name="android.intent.category.LAUNCHER"></category>
                </intent-filter>
            </activity>
        </application>
    </manifest>
    ```
5. Run the 'app' with the globe
  1. Select Run > Run 'app'
  2. Choose an Available Emulator or Device and select OK