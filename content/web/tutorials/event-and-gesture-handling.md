---
title: "Event and Gesture Handling"
date: 2017-07-26T15:10:22-05:00
draft: false
listdescription: "How to manage cursor or tactile input."
---

## Event and Gesture Handling

Applications can generally monitor and respond to JavaScript events as they normally would. But because the WorldWindow’s navigator is monitoring mouse and touch events to enable the user to manipulate the globe, some coordination between the application’s event handling and the navigator’s event handling is necessary. Web WorldWind does not monitor keyboard events, so no coordination is necessary for those.

If your application is to work on conventional and mobile devices, it should monitor both mouse events and gestures if it wants to respond to user input beyond what the WorldWindow’s navigator already does. Web WorldWind examples such as PlacemarksAndPicking.js and GoToLocation.js do this.

## Monitoring Mouse Events

Applications wishing to monitor mouse events (other than click events, as described below) should register their event handlers using the addEventListener function on WorldWindow:

```javascript
var wwd = new WorldWind.WorldWindow("canvasOne");
wwd.addEventListener("mousemove", function (event) {...});
```

Event listeners added this way are invoked prior to the navigator’s event handlers. Application event handlers responding to the event should call preventDefault on the listener’s event argument so that the navigator and any subsequent event handlers know to ignore it:

```javascript
wwd.addEventListener("mousemove", function (event) {
    
    ... // potentially respond to the event
    
    if (eventHandled) {
        event.preventDefault();
    }
});
```

Event handlers should also of course first check the event to see if it’s already been handled:

```javascript
if (event.defaultPrevented) {
    return; // return without doing anything
}
```

## Click Events

Click events are the exception to specifying event listeners, and should instead be handled using a ClickRecognizer rather than an event listener:

```javascript
// Listen for mouse clicks.
var clickRecognizer = new WorldWind.ClickRecognizer(wwd, 
    function(recognizer) {
        ...
});
```

The click recognizer works in conjunction with the navigator’s event handlers and gesture recognizers to avoid duplicate handling. See the API doc for ClickRecognizer for the details of this class.

The example PickAllShapesInRegion.js illustrates event handling and how to register event handlers. The example GoToLocation.js shows how to use a click recognizer. See also the example fragment in the next section.

## Monitoring Touch Events and Gestures

Rather than monitoring touch events directly, applications should use Web WorldWind’s gesture recognizers. Of most use is the TapRecognizer, which recognizes tap gestures on touch screens. Below is how the GoToLocation.js example uses a tap recognizer to recognize a tap and determine a location to move to when the user taps on the globe. The tap gesture recognizer is created and the gesture handler specified in the emboldened lines:

```javascript
// The common gesture-handling function.
var handleClick = function (recognizer) {
    // Obtain the event location.
    var x = recognizer.clientX,
        y = recognizer.clientY;

    // Perform the pick. Must first convert from window coordinates to canvas coordinates, which are
    // relative to the upper left corner of the canvas rather than the upper left corner of the page.
    var pickList = wwd.pick(wwd.canvasCoordinates(x, y));

    // If only one thing is picked and it is the terrain, use a go-to animator to go to the picked location.
    if (pickList.objects.length == 1 && pickList.objects[0].isTerrain) {
        var position = pickList.objects[0].position;
        goToAnimator.goTo(new WorldWind.Location(position.latitude, position.longitude));
    }
};

// Listen for mouse clicks.
var clickRecognizer = new WorldWind.ClickRecognizer(wwd, handleClick);

// Listen for taps on mobile devices.
var tapRecognizer = new WorldWind.TapRecognizer(wwd, handleClick);
```
