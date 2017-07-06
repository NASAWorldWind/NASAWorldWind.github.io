---
title: "WorldWind Android"
date: 2017-06-30T14:40:16-04:00
draft: false
mainpage: false
projectpage: true
projectslug: "android"
projectname: "WorldWind Android"
listdescription: ""
aliases:
    - /android/get-started/
---

## Get Started

WorldWind Android provides high-resolution terrain and imagery, retrieved from remote servers automatically as needed. You can also provide your own terrain and imagery. WorldWind Android additionally provides a rich collection of shapes that you can use to represent information on the globe or in space.

The WorldWind Android client is compatible to API level 19 (KitKat 4.4) and up. It displays the globe via the GLSurfaceView.

---
### Download

Download the [latest release](https://bintray.com/nasaworldwind/maven/WorldWindAndroid/_latestVersion) or grab via Gradle:
```groovy
compile '{{% latestBintrayVersion url="https://api.bintray.com/packages/nasaworldwind/maven/WorldWindAndroid" %}}'
```

SNAPSHOT builds are available through [OJO](https://oss.jfrog.org/artifactory/). Add the following repository to your Gradle project:
```groovy
maven {
    url 'https://oss.jfrog.org/artifactory/oss-snapshot-local'
}
```
Add the latest SNAPSHOT WorldWind Android dependency:
```groovy
compile 'gov.nasa.worldwind.android:worldwind:{{% latestOjoVersion url="https://oss.jfrog.org/artifactory/api/search/versions?g=gov.nasa.worldwind.android&a=worldwind&repos=oss-snapshot-local" %}}'
```