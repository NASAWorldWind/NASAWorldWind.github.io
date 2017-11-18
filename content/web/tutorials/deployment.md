---
title: "Deployment-Web WorldWind/NASA WorldWind"
date: 2017-07-27T09:14:35-05:00
draft: false
header: Deployment
listdescription: "Methods for deploying Web WorldWind."
---

## Deployment

Deploying Web WorldWind is easy. In fact, unless you want to run it from your own server there is no deployment 
required. You simply include a script tag linking to it:

    <script src="https://files.worldwind.arc.nasa.gov/artifactory/web{{% latestArtifactoryPath url="https://files.worldwind.arc.nasa.gov/artifactory/api/storage/web"%}}/worldwind.min.js" type="text/javascript"/>

To deploy Web WorldWind on your own server, copy the library worldwind.min.js and the images directory from the Web 
WorldWind release and place them on your web server. The images directory must be a sibling of the library, i.e., exist 
in the same directory. These files are included in the release zip file.

## Running Locally

If you do not already have a web server, you can use Python‘s built in HTTP server. With Python installed on your 
computer, change directory to the top-level Web WorldWind directory and run the Python HTTP server:

    python -m SimpleHTTPServer

Or if using Python 3:

    python -m http.server 8000

Then browse to

    http://localhost:8000/examples/BasicExample.html

and you should see that Web WorldWind example in your web browser.