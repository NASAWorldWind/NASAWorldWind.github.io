---
title: "Configuration-Web WorldWind/NASA WorldWind"
date: 2017-11-15T13:56:48-08:00
draft: false
header: Configuration
listdescription: Illustrates the WorldWind configuration options and how to set them.
---

## Configuration

If you are just getting started with Web WorldWind, you might be interested in its configuration options. The script
below shows you how to set some of these configurations. Please note that these options must be set
before you create the WorldWindow or any other WorldWind object.

---

## Setting the Logging Level

    // Get detailed logging
    WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

    //Turn off logging
    WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_NONE);

## Changing the GPU Cache Size

    // Custom GPU Cache Size
    WorldWind.configuration.gpuCacheSize = 500e6; // 500 MB

## Changing the Image Path

If your server looks like this

    https://YOUR_SERVER/dir/subdir/images/
    https://YOUR_SERVER/worldwind.min.js

    WorldWind.configuration.baseUrl = "dir/subdir";

---

You can copy/paste these snippets into your own file, or check it out in the [Web WorldWind examples](https://github.com/NASAWorldWind/WebWorldWind/tree/develop/examples)
on GitHub.