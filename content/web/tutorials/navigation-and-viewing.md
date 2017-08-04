---
title: "Navigation and Viewing"
date: 2017-07-26T15:14:35-05:00
draft: false
listdescription: "Positioning and orienting the view."
---

## Navigation and Viewing

As the user interacts with the globe, panning, zooming and tilting, it’s the WorldWindow’s Navigator that translates the user’s movements into operations on the globe. Each WorldWindow has one navigator. That navigator is responsible for the view onto the globe. A navigator is created automatically when you create a WorldWindow.

Topics on this page:

- [Controlling the View from the WorldWindow](#controlling-view)
- [Controlling the Navigator](#controlling-navigator)
- [GoTo Animator](#goto)
- [Geocoders](#geocoders)

## <a name="controlling-view"></a>Controlling the View from the WorldWindow

If all you want to do is move the view to a geographic location or position (a location with altitude), you can use the goTo function of WorldWindow to do that. The GoToLocation example does this. You can directly modify the properties of the WorldWindow’s GoToAnimator to change the go-to travel time or update frequency, or to cancel a previously requested go-to request.

## <a name="controlling-navigator"></a>Controlling the Navigator

Unless an app wants to change the user’s view programmatically, it never needs to interact with the navigator. But it’s certainly possible to direct the navigator from the app itself.

The navigator has two primary properties allowing control:

- lookAtLocation — Indicates the latitude and longitude of where the user’s view is pointed.
- range — Indicates the eye distance from the globe’s ellipsoid.

By specifying these properties the app can move the user to any point around the globe, as in this example:

```javascript
// Get a reference to the WorldWindow.
var wwd = ...

// Adjust the Navigator to place Alaska in the center of the
// WorldWindow.
wwd.navigator.lookAtLocation.latitude = 65;
wwd.navigator.lookAtLocation.longitude = -150;
wwd.navigator.range = 2e6; // 2 million meters above the ellipsoid

// Redraw the WorldWindow.
wwd.redraw();
```

This code goes directly to the new view. Ideally the view would change incrementally and smoothly. For that use a GoToAnimator, described below.

The navigator also has the following properties that the app can set:

- heading — The navigator’s heading, in degrees clockwise from north.
- tilt — The navigator’s tilt, in degrees. A value of 0 points the user straight down on the globe. A value of 90 views the horizon.
- roll — The navigator’s angle around an imaginary line from the eye position to the look-at location. This property normally stays set to 0.

## <a name="goto"></a>GoTo Animator

To change the navigator smoothly, use the GoToAnimator class. You can see example usage in LayerManager.js. To  use this class you pass its goTo function either a Location or a Position. Use a Location if you want the start and end positions to have the same altitude. Use a Position if you want the end position to have a different altitude than the start position. You can change the time it takes to perform the animation via the *travelTime* property.

## <a name="geocoders"></a>Geocoders

Geocoders convert query strings identifying places to geographic locations and other useful information. Web WorldWind provides the NominatimGeocoder that uses Open Street Map’s Nominatim geocoder at MapQuest. An example of its usage is in LayerManager.js.

The NominatimGeocoder has one function, lookup. The arguments to this function are a query string and a callback function. The query string is sent to the geocoder service. The callback function is called when the service replies. The arguments to the callback function are, in order, a reference to geocoder and an array of query results. The results are parsed JSON and contain a wealth of information about the places found that match the query string. More than one place may be identified; each is represented by an element in the return array. Two important properties of each result are its lat and lon properties, which identify the latitude and longitude of the place. These coordinates can be passed to a GoToAnimator to move the navigator smoothly to that geographic position. An example of doing this is in LayerManager.js. See the NominatimGeocoder API doc to determine the details of the returned results and the accepted query string parameters.