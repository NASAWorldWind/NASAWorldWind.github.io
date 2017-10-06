---
title: "Releases-WorldWind Java/NASA WorldWind"
date: 2017-07-27T13:47:01-05:00
draft: false
---

## Releases

[GitHub Releases](https://github.com/NASAWorldWind/WorldWindJava/releases) has the WorldWind Java release artifacts and detailed release change logs. Information about the WorldWind releases is listed here.

---

## WorldWind Java v2.1.0, December 13, 2016

WorldWind Java v2.1.0 contains major improvements for security, functionality, and automation, including: HTTPS map services, Travis CI integration, first-class 2D map support, improved shape dragging, general shape editor, new USGS high resolution imagery layer, new USGS topographic layers, Shapefile rendering performance improvements, Shapefile XML layer configuration files, OGC Web Coverage Service (WCS) elevations, plus many more improvements and bug fixes.

With the release of v2.1.0 all NASA WorldWind map services (imagery, terrain, placenames, etc.) require HTTPS connections. Existing versions of WorldWind (including v2.0.0) will not connect unless map service links are updated to use the HTTPS protocol. There is an HTTP to HTTPS redirect in place for all NASA WorldWind map services, but the Java VM will not automatically follow the redirect. The requirement to host map services exclusively through HTTPS is a U.S. Government mandate.

---

## WorldWind 2.0.0, April 30, 2014

2.0.0 differs from release 1.5.1 primarily in its use of JOGL 2 vs. 1.5.1’s use of JOGL 1.

Note: JOGL 2 performs runtime extraction of native binaries. Some deployment situations may not allow this because it extracts the binaries to the application user’s temp directory. Runtime extraction can be avoided by following the instructions in WorldWind’s README.txt file in the “New features and improvements in WorldWind Java SDK 2.0.0” section.

---

## Release 1.5.1, July 24, 2013

This release is a patch for Release 1.5 that repairs a geo-referencing issue with WorldWind’s DTED elevation importer. See the release’s README.txt file for a complete list of changes.

Note: The changes made for Release 1.5.1 have also been applied to the WorldWind 2.0 Current Development Release.

---

## Release 1.5, January 21, 2013

This release adds support for Open Street Map, text decluttering, applying Earth gravitational model offsets, and other features. See the release’s README.txt file for a complete list of significant changes.

---

## Release 1.4, July 16, 2012

This release adds support for Collada, fixes issues with rendering surface shapes at the poles and adds Bing imagery. See the release’s README.txt file for a complete list of significant changes.

---

## Release 1.3, May 1, 2012

This release adds support for Mil-Std 2525C and the KML NetworkLinkControl element.

---

## Release 1.2, July 19, 2011

This is WorldWind’s first public formal release. It’s undergone significant testing and contains important documentation that was missing from the previous “pre-alpha” daily releases. It also initiates a portal — this site — that gathers into one place all information relative to understanding and using WorldWind and its API.

This release of WorldWind operates on all platforms WorldWind has historically supported: OS X, Windows 32 & 64, Linux 32 & 64. It is expected to work on Solaris but has not been tested on that platform.

There are very few platform-specific dependencies. The most significant one is the absence of BrowserBalloon availability on Linux. This will be corrected at some point. All other platform dependencies are related to specific problems, such as the existence of a bug on one platform but not another. The bug database describes all such known problems.