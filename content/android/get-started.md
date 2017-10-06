---
title: "Get Started-WorldWind Android/NASA WorldWind"
date: 2017-06-30T14:40:16-04:00
draft: false
---

## Get Started

WorldWind Android is a 3D virtual globe API for Android, developed by NASA. It provides a geographic context with
high-resolution terrain, used to visualize geographic or geo-located information in 3D and 2D. Developers can customize
the globe’s terrain and imagery. WorldWind Android provides a collection of shapes for displaying and interacting
with geographic data and representing a range of geometric objects.

Compatible with Android 4.1 (Jelly Bean) and newer.

---

## Download

Download the [latest release](https://bintray.com/nasaworldwind/maven/WorldWindAndroid/_latestVersion) or grab via Gradle:
```groovy
compile '{{% latestBintrayVersion url="https://api.bintray.com/packages/nasaworldwind/maven/WorldWindAndroid" %}}'
```

---

## Snapshots

Get development build snapshots with the latest features and bug fixes from [oss.jfrog.org](https://oss.jfrog.org):
```groovy
repositories {
    maven {
        url 'https://oss.jfrog.org/artifactory/oss-snapshot-local'
    }
}

...

compile 'gov.nasa.worldwind.android:worldwind:{{% latestOjoVersion url="https://oss.jfrog.org/artifactory/api/search/versions?g=gov.nasa.worldwind.android&a=worldwind&repos=oss-snapshot-local" %}}'
```
