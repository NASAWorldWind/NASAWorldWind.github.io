---
title: "Configuration-Web WorldWind/NASA WorldWind"
date: 2017-11-15T13:56:48-08:00
draft: false
header: Configuration
listdescription: Illustrates the WorldWind configuration options and how to set them.
---

## Configuration

If you are just getting started with Web WorldWind, you might be interested in its configuration options. The script
below illustrates some of these configurations. Please note that most of these configuration options must be set
before you create the WorldWindow or any other WorldWind object.

---

## Setting WorldWind's Logging Level

    // Get more detailed logging from WorldWind
    WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

    // turn off logging
    WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_NONE);

## Changing WorldWind's GPU Cache Size

    // WorldWind defaults to a default GPU cache size of [the default size] MB. 
    // This can be customized...
    WorldWind.configuration.gpuCacheSize = 500e6; // 500 MB

## Changing the path images are loaded from

If your server looks like this

    https://YOUR_SERVER/some/stuff/images/
    https://YOUR_SERVER/worldwind.min.js

    WorldWind.configuration.baseUrl = "some/stuff";

---

You can copy/paste this script into your own file, or check it out in the [Web WorldWind examples](https://github.com/NASAWorldWind/WebWorldWind/tree/develop/examples)
on GitHub.