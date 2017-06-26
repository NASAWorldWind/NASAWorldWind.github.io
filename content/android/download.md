{
    "title": "World Wind Android",
    "date": "2017-06-23T15:24:48-04:00",
    "draft": false,
    "layout": "project",
    "projectSlug": "android"
}

## Download

To add World Wind to your Gradle project, grab the latest release version from JCenter:

```
compile 'gov.nasa.worldwind.android:worldwind:{{< latestBintrayVersion url="https://api.bintray.com/packages/nasaworldwind/maven/WorldWindAndroid/versions/_latest" >}}'
```

For developers, the lastest ```SNAPSHOT``` version is hosted at the [OJO](https://oss.jfrog.org/). Add the repository:
```
repositories (
    maven (
        url 'https://oss.jfrog.org/artifactory/oss-snapshot-local/'
    )
)
```

The latest ```SNAPSHOT``` version is:
```
compile 'gov.nasa.worldwind.android:worldwind:{{< latestOjoVersion url="https://oss.jfrog.org/artifactory/api/search/versions?g=gov.nasa.worldwind.android&a=worldwind&repos=oss-snapshot-local" >}}'
```

You can also manually download the library from [Bintray](https://bintray.com/nasaworldwind/maven/WorldWindAndroid/_latestVersion).
### Development Environment

The World Wind team uses [Android Studio](https://developer.android.com/studio/index.html) for development of the World Wind Android project. It includes all of the tools you need to build apps for Android. Learn more about the Android platform here:

- Familiarize yourself with the [Android Developer's Site](http://developer.android.com/).
- Read ["Introduction to Android"](https://developer.android.com/guide/index.html) and ["Application Fundamentals"](https://developer.android.com/guide/components/fundamentals.html) in the [Android Developer's Guide](http://developer.android.com/guide/).
- Create a bookmark to the [Android API Docs](http://developer.android.com/reference/packages.html).

Additional help can be found at the [forum](https://forum.worldwindcentral.com/forum/worldwind-android-wwa/android-discussion) or [GitHub](https://github.com/NASAWorldWind/WorldWindAndroid).