---
title: "Basic WorldWind App-WorldWind Android/NASA WorldWind"
date: 2017-07-06T14:01:30-04:00
draft: false
listdescription: "Describes how to setup an application to use the WorldWind Android library."
listimage: "/img/ww-android-basic-app.png"
---

## How to build a basic WorldWind Android 'app'

This tutorial sets up a project from scratch and inserts a WorldWind globe in a FrameLayout.

### 1. Create a new Android Studio Project
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
     - Activity Name: MainActivity
     - Generate Layout File: checked
     - Layout Name: activity_main

### 2. Run the 'app' to verify it works
  1. Select Run > Run 'app'
  2. Choose an Available Emulator or Device and select OK
  3. If Required, create a new emulator to run the 'app'
     - Select hardware device: Default Nexus 5X
     - Select and download a System Image: Default: Marshmallow (wait for download to complete)
     - Configure Android Virtual Device (AVD)

### 3. Add the WorldWind library to your project
  - If using Gradle (prefered method), follow the directions in [Get Started](/android), otherwise:
     1. [Download](https://bintray.com/nasaworldwind/maven/WorldWindAndroid) the WorldWind Library for Android (worldwind.aar)
     2. Add a new Module to your project
         - Choose File > New Module...
         - Select Import .JAR/.AAR Package
         - Filename: Browse to your downloaded worldwind.aar file
         - Subproject name: worldwind
     3. Add worldwind dependency to your 'app'
         - Open app Module Setting... > Dependencies > [+] Module dependency > worldwind > OK

### 4. Add a WorldWindow globe to the MainActivity
    We'll make three simple changes to your 'app' to add a basic globe.

    First, edit the activity_main.xml layout file and replace the TextView with the following FrameLayout. The FrameLayout is assigned the globe id which will be referenced in the MainActivity.
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
    Second, create an instance of a WorldWindow in MainActivity.java and attach to the FrameLayout. The following code snippet should be added to the MainActivity's onCreate() method.
    ```java
    // Create a WorldWindow (a GLSurfaceView)...
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
  - activity_main.xml
    
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
  - MainActivity.java
    
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

            // Create a WorldWindow (a GLSurfaceView)...
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
  - AndroidManifest.xml
  
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

### 5. Run the 'app' with the globe
  1. Select Run > Run 'app'
  2. Choose an Available Emulator or Device and select OK