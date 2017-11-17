---
title: "Get Started-Web WorldWind/NASA WorldWind"
date: 2017-11-14T11:17:24-08:00
draft: false
---

        ## Get Started

        ----
        -
        Web WorldWind is a free, open-source virtual globe for web pages. Written in JavaScript, Web WorldWind enables web
        page and web application builders to quickly create interactive visualizations of geographic information on an
        interactive 3D globe or 2D map. Web WorldWind provides an extensible API that enables JavaScript programs to control
        @@ -16,20 +14,43 @@

        ---

        -## Usages
        +## NPM Package

        -Choose how you want to use Web WorldWind, then checkout the [Tutorials](/web/tutorials) page!
        +Get the [latest release](https://www.npmjs.com/package/@nasaworldwind/worldwind/) from npm.

        -
        -### 1. Build
        -
        -Get the [latest release](https://www.npmjs.com/package/@nasaworldwind/worldwind/) on npm.
        -```groovy
        -npm install @nasaworldwind/worldwind
        -```
        +    npm install @nasaworldwind/worldwind

        -***Note: In addition to npm install, you must separately download and publish images.***
        +Then in JavaScript...

        -### 2. Download
        +    require('@nasaworldwind/worldwind');

        -Download the [Web WorldWind library](https://files.worldwind.arc.nasa.gov/artifactory/web/0.9.0-RC1/).
        \ No newline at end of file
        +Finally, WorldWind's npm package requires that you publish the [images folder](https://files.worldwind.arc.nasa.gov/artifactory/web{{% latestArtifactoryPath url="https://files.worldwind.arc.nasa.gov/artifactory/api/storage/web" %}}/images.zip)
        +in your npm-based project's web root.
        +
        +---
        +
        +## Hosted Library
        +
        +Load the latest release library directly from WorldWind's servers.
        +
        +    <script src="https://files.worldwind.arc.nasa.gov/artifactory/web{{% latestArtifactoryPath url="https://files.worldwind.arc.nasa.gov/artifactory/api/storage/web" %}}/worldwind.min.js" type="text/javascript"/>
        +
        +---
        +
        +## More Ways to Get Started
        +
        +- Latest [GitHub release](https://github.com/NASAWorldWind/WebWorldWind/releases/latest) has the WorldWind libraries and code examples
        +
        +- Link to tutorial for the simplest usage
        +
        +- Link to tutorial for hosting WorldWind library yourself
        +
        +... Get the latest [GitHub release](https://github.com/NASAWorldWind/WebWorldWind/releases/latest/). Publish worldwind.min.js and
        +images folder on your HTTP server.
        +
        +    https://YOUR_SERVER/worldwind.min.js
        +    https://YOUR_SERVER/images/
        +
        +    ...
        +
        +    <script src="https://YOUR_SERVER/worldwind.min.js" type="text/javascript"/>