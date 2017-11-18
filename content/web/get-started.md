---
title: "Get Started-Web WorldWind/NASA WorldWind"
date: 2017-11-14T11:17:24-08:00
draft: false
---

## Get Started

---
Web WorldWind is a free, open-source virtual globe for web pages. Written in JavaScript, Web WorldWind enables web page
and application builders to quickly create interactive visualizations of geographic information on an interactive 3D
globe or 2D map. Web WorldWind provides an API that enables JavaScript programs to control every detail of visualization
and interaction. Web WorldWind runs on all major operating systems, desktop and mobile devices, and web browsers.

---

## NPM Package

Get the [latest release](https://www.npmjs.com/package/@nasaworldwind/worldwind/) from npm.

    npm install @nasaworldwind/worldwind

Then to your JavaScript files add:

    require('@nasaworldwind/worldwind');

Finally, WorldWind's npm package requires that you publish the [images folder](https://files.worldwind.arc.nasa.gov/artifactory/web{{% latestArtifactoryPath url="https://files.worldwind.arc.nasa.gov/artifactory/api/storage/web" %}}/images.zip)
in your npm-based project's web root.

---

## Hosted Library

Load the latest release library directly from WorldWind's servers.

    <script src="https://files.worldwind.arc.nasa.gov/artifactory/web {{% latestArtifactoryPath url="https://files.worldwind.arc.nasa.gov/artifactory/api/storage/web"%}}/worldwind.min.js" type="text/javascript"/>

---

## More Ways to Get Started

- The latest [GitHub release](https://github.com/NASAWorldWind/WebWorldWind/releases/latest) contains all the WorldWind libraries and code examples.

- [Simplest Usage](/tutorials/simplest-example.md) tutorial

- [Hosting Locally](/tutorials/standalone-example.md) tutorial
