---
title: "Get Started"
date: 2017-07-25T09:21:27-05:00
draft: false
---
## Get Started

Web WorldWind is a 3D virtual globe API for HTML5 and JavaScript. Web pages include Web WorldWind to provide one or more virtual globes on that page. The [European Space Agency](https://www.esa.int/) is now partnering with NASA on development. Work on Web WorldWind began in 2014 and is very active today.

---

## Download

*The first release of Web WorldWind is imminent, please check back soon for updates to these instructions! The versioned release will be the first official release of Web WorldWind and will be available as a hosted library and through npm.*

### Building the library

Building the library requires npm.

1. Clone the Web WorldWind Repository from GitHub: `git clone https://github.com/NASAWorldWind/WebWorldWind.git`
2. Install the dependencies: `npm install`
3. Build the worldwind.js and worldwind.min.js files: `npm run build`
4. Add the worldwind.js or worldwind.min.js files to your websites resources

### Using a hosted version

*The hosted version provided below is not current with the latest improvements from the develop branch on GitHub. The URL will soon be deprecated so we urge you not to utilize it for production use. Until Web WorldWind is released, we recommend downloading the source and building the library to take advantage of the latest bug fixes.*

Include the following script source on your webpage:
```html
<script src="http://worldwindserver.net/webworldwind/worldwind.min.js"></script>
```

### npm

Use npm for installation and application development with different module definitions (AMD, CommonJS, ES6) through Webpack and RequireJS.

*Coming Soon...*

---

## Adding Web WorldWind to a Webpage

- Add a `canvas` element with unique id:

```html
<canvas id="canvasOne" width="1024" height="768">
```

- Create a WorldWindow in your websites javascript:

```javascript
var wwd = new WorldWind.WorldWindow("canvasOne");
```

- Add some layers:

```javascript
wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer());
```

For the full html and javascript files see the [BasicExample.html](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/BasicExample.html) and [BasicExample.js](https://github.com/NASAWorldWind/WebWorldWind/blob/develop/examples/BasicExample.js) source.

---

## Features

Web WorldWind is a free, open-source virtual globe for web pages. Written in JavaScript, Web WorldWind enables web page and web application builders to quickly create interactive visualizations of geographic information on an interactive 3D globe or 2D map. Web WorldWind provides an API that enables JavaScript programs to control every detail of visualization and interaction. Web WorldWind runs on all major operating systems, desktop and mobile devices, and web browsers.

Web WorldWind provides a rich set of features for displaying and interacting with geographic information. Because Web WorldWind is completely open-source and designed to be extensible, extending the API and functionality is simple and easy to do.

### General Features

- Open-source, high-performance, 3D virtual globe (WGS84) for web pages and web applications
- 2D Map mode with selectable and extensible map projections
- JavaScript API for automating all aspects of interaction and visualization
- Large collection of built-in high-resolution imagery and terrain
- Display high-resolution imagery, terrain and geographic data from any public or private source
- Supports REST, WMS and Bing
- Large collection of geometric and geographic shapes for representing information
- Navigation and Viewing, Picking
- Display multiple globes and maps on the same page
- Simple to use, extend and modify

### Graphics Capabilities

- Placemark, Path and Curtain, Polygon and Extruded Polygon, Text
- Terrain conforming shapes: Path, Polygon, Ellipse, Circle, Quadrilateral, Square
- Imagery: JPEG, PNG
- Graticules
- Shapefiles