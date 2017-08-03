---
title: "Tactical Symbols"
date: 2017-07-13T23:25:56-04:00
draft: false
listdescription: "Display symbols for single-position objects."
---

## Tactical Symbols

A tactical symbol displays graphic and textual information about an object at a single geographic position at a particular point in time. The graphic displayed is typically a screen icon with supplemental text and graphics surrounding the icon. In general, the graphic displayed depends on the symbology set a tactical symbol belongs to. This guide covers tactical symbols belonging to the U.S. Department of Defense's Common Warfighting Symbology set, [MIL-STD-2525C](http://worldwind.arc.nasa.gov/milstd2525c/Mil-STD-2525C.pdf).

<img src="/img/java/tacticalsymbols-demoicon.jpg" align="right" class="img-responsive">The tactical symbols Java Web Start demo showcases how tactical symbols appear and behave in a WorldWind based application.

Run the [Tactical Symbols Demo](https://worldwind.arc.nasa.gov/java/latest/webstart/TacticalSymbols.jnlp).

## Overview

This guide shows how to use WorldWind tactical symbols in your application, and is organized into five sections:

1. [Construction](#construction)
2. [Position](#position)
3. [Modifiers](#modifiers)
4. [Display Options](#display-options)
5. [Offline Use](#offline-use)

## <a name="construction"></a>Construction

Each symbology set defines a tactical symbol implementation that derives from the TacticalSymbol interface. TacticalSymbol provides an interface to common tactical symbol functionality, and extends the Renderable interface so you can add a TacticalSymbol directly to a RenderableLayer.

To create and display a tactical symbol, create a new instance of a TacticalSymbol implementation appropriate for the desired symbology set, then add it to a RenderableLayer.

```java
// Create a tactical symbol for the MIL-STD-2525 symbology set. The symbol
// identifier specifies a MIL-STD-2525 friendly Special Operations Forces Drone
// Aircraft. The position places the tactical symbol at 1km above mean sea level.
TacticalSymbol symbol = new MilStd2525TacticalSymbol(&quot;SFAPMFQM------A&quot;, Position.fromDegrees(34.7327, -117.8347, 1000));

// Create a renderable layer to display the tactical symbol. This example adds
// only a single symbol, but many symbols can be added to a single layer. Note
// that Tactical symbols and tactical graphics can be combined in a single layer.
RenderableLayer symbolLayer = new RenderableLayer();
symbolLayer.addRenderable(symbol);

// Add the layer to the WorldWindow's model and request that the layer redraw
// itself. The WorldWindow draws the symbol on the globe at the specified
// position. Interactions between the symbol and the cursor are returned in the
// WorldWindow's picked object list, and reported to the WorldWindow's select
// listeners.
WorldWindow wwd = ... // A reference to your application's WorldWind instance.
wwd.getModel().getLayers().add(symbolLayer);
wwd.redraw();
```

We've created and displayed a TacticalSymbol representing a friendly Special Operations Forces Drone Aircraft from the MIL-STD-2525 symbology set by creating a MilStd2525TacticalSymbol with the appropriate symbol identifier string. We then added the TacticalSymbol to a RenderableLayer we created. Here's a screen shot of the result.

![Tactical Symbol in WorldWind](/img/java/tacticalsymbolguide-createanddisplay11.jpg)

MilStd2525TacticalSymbol's constructor accepts the following parameters:

<br/>

#### Symbol Identifier (required)

A string identifier indicating the tactical symbol's appearance. The format of this identifier depends on the symbol set. In the case of MIL-STD-2525, the symbol identifier is a 15-character alphanumeric symbol identification code (SIDC). The symbol's shape, fill color, outline color, and icon are all defined by the symbol identifier. In the above example, "SFAPMFQM------A" defines a friendly Special Operations Forces drone aircraft.

<br/>

#### Position (required)

The latitude, longitude, and altitude where the symbol is drawn on the globe. In the above example, (34.7327, -117.8347, 1000) places the symbol 1km above sea level and north of Los Angeles.

<br/>

#### Modifiers (optional)

An optional list of key-value pairs specifying supplemental graphic and text attributes. This parameter may be null or omitted entirely. The modifiers list extends the symbol attributes already indicated by the symbol identifier. In the case where both the symbol identifier and the modifiers list indicate the same attribute, the modifiers list has priority. The above example omits the modifiers parameter, so the symbol contains only the attributes indicated by its symbol identifier. See [Modifiers](#modifiers) for more information.

## <a name="position"></a>Position

A TacticalSymbol's position indicates the latitude, longitude, and altitude where the symbol draws its graphic. To position a TacticalSymbol during construction, just specify the desired position parameter. To position a TacticalSymbol after construction, call setPosition with the desired position.

```java
// Create a tactical symbol for the MIL-STD-2525 symbology set. The symbol is
// initially positioned near Los Angeles.
TacticalSymbol symbol = new MilStd2525TacticalSymbol(&quot;SFAPMFQM------A&quot;, Position.fromDegrees(34.7327, -117.8347, 1000));

// Move the tactical symbol from Los Angeles to Afghanistan, and set its altitude to
// 3km above sea level.
symbol.setPosition(Position.fromDegrees(32.4520, 63.44553, 3000));
```

We've moved a TacticalSymbol from Los Angeles to Afghanistan, and set its altitude to 3km above sea level. Here's a screen shot of the result:

![TacticalSymbol in Afghanistan](/img/java/tacticalsymbolguide-position11.jpg)

A TacticalSymbol's altitude mode indicates how the altitude component is interpreted. There are three recognized altitude modes:

- WorldWind.ABSOLUTE - altitude is relative to mean sea level
- WorldWind.RELATIVE_TO_GROUND - altitude is relative to ground level
- WorldWind.CLAMP_TO_GROUND - altitude is replaced with ground level

To configure a MilStd2525TacticalSymbol's altitude mode appropriately for the type of object displayed, just create the symbol as you normally would. During construction, MilStd2525TacticalSymbol configures the altitude mode from information in the symbol identifier.

```java
// Create an air tactical symbol for the MIL-STD-2525 symbology set. This symbol
// identifier specifies a MIL-STD-2525 friendly Special Operations Forces Drone
// Aircraft. MilStd2525TacticalSymbol automatically sets the altitude mode to
// WorldWind.ABSOLUTE.
TacticalSymbol airSymbol = new MilStd2525TacticalSymbol(&quot;SFAPMFQM------A&quot;, Position.fromDegrees(32.4520, 63.44553, 3000));

// Create a ground tactical symbol for the MIL-STD-2525 symbology set. This symbol
// identifier specifies multiple hostile Self-Propelled Rocket Launchers.
// MilStd2525TacticalSymbol automatically sets the altitude mode to
// WorldWind.CLAMP_TO_GROUND.
TacticalSymbol groundSymbol = new MilStd2525TacticalSymbol(&quot;SHGPUCFRMS----G&quot;, Position.fromDegrees(32.4, 63.4, 0));
```

We've created two TacticalSymbols representing air and ground objects. MilStd2525TacticalSymbol identifies each symbol identifier as air and ground, and configures their altitude modes as WorldWind.ABSOLUTE and WorldWind.CLAMP_TO_GROUND, respectively. Here's a screen shot of the result.

![Tactical Symbols with different altitude modes](/img/java/tacticalsymbolguide-position22.jpg)

TacticalSymbol provides support for manually configuring the altitude mode. It is usually not necessary to manually configure a TacticalSymbol's altitude mode unless there's a need to override the automatically configured mode. To manually configure the altitude mode, call setAltitudeMode with one of the recognized modes.

```java
// Set the ground symbol's altitude mode.
groundSymbol.setAltitudeMode(WorldWind.CLAMP_TO_GROUND);
```

## <a name="modifiers"></a>Modifiers

Modifiers are optional key-value attributes that cause a TacticalSymbol to display supplemental graphic and text around or over the symbol's graphic. See the MilStd2525TacticalSymbol documentation for a list of supported modifiers. The placement and display of modifiers for MilStd2525TacticalSymbol is defined in the MIL-STD-2525 specification.

To set a TacticalSymbol's modifiers during construction, specify the modifier keys and their associated values as key-value pairs attached to an AVList.

```java
// Create the list of key-value pairs used to specify modifiers during tactical
// symbol construction.
AVList modifiers = new AVListImpl();
modifiers.setValue(SymbologyConstants.DIRECTION_OF_MOVEMENT, Angle.fromDegrees(50));
modifiers.setValue(SymbologyConstants.ECHELON, SymbologyConstants.ECHELON_TEAM_CREW);

// Create a ground tactical symbol for the MIL-STD-2525 symbology set. Specify the
// ground symbol's Direction of Movement (heading) and Echelon modifiers
// by adding each modifier as a key-value pair to the modifiers parameter.
TacticalSymbol groundSymbol = new MilStd2525TacticalSymbol(&quot;SHGPUCFRMS----G&quot;, Position.fromDegrees(32.4, 63.4, 0), modifiers);
```

To set a TacticalSymbol's modifiers after construction, call setModifier with the modifier key and its associated value. To display a modifier with an implicit value - such the Location modifier - call setModifier with the modifier key and the value true.

```java
// Set the ground symbol's Direction of Movement (heading) and Echelon modifiers.
groundSymbol.setModifier(SymbologyConstants.DIRECTION_OF_MOVEMENT, Angle.fromDegrees(50));
groundSymbol.setModifier(SymbologyConstants.ECHELON, SymbologyConstants.ECHELON_TEAM_CREW);
```

We've set a TacticalSymbol's Direction of Movement (heading) and Echelon modifiers. The Direction of Movement is displayed as an arrow extending from the symbol's ground position and oriented to its heading. The Echelon graphic is displayed above the symbol icon. The Location modifier is displayed as text aligned to the symbol icon's left side. Here's a screen shot of the result.

![TacticalSymbol with Modifier text](/img/java/tacticalsymbolguide-modifiers12.jpg)

TacticalSymbol provides support for removing existing modifiers. To remove a modifier, call setModifier with the modifier key and the value null. To hide an implicit modifier, such as the the Location modifier, set the appropriate visibility flag on the symbol. For example, to hide the Location modifier, call setShowLocation(false).

```java
// Remove the ground symbol's Direction of Movement (heading), Echelon, and Location
// modifiers.
groundSymbol.setModifier(SymbologyConstants.DIRECTION_OF_MOVEMENT, null);
groundSymbol.setModifier(SymbologyConstants.ECHELON, null);
groundSymbol.setShowLocation(false);
```

## <a name="display-options"></a>Display Options

<br/>

#### Size and Opacity
TacticalSymbol provides control of its scale and opacity through the TacticalSymbolAttributes interface. The scale is a decimal number greater than 0.0: values less than 1.0 make the symbol smaller, while values greater than 1.0 make the symbol larger. The opacity is a decimal number between 0.0 and 1.0 (inclusive), where 0.0 is completely transparent and 1.0 is completely opaque. The scale and opacity apply to both the symbol graphic and the symbol modifiers.

To set a TacticalSymbol's size or opacity (or both), create and configure a new TacticalSymbolAttributes, then call setAttributes with the new attribute bundle.

```java
// Create a tactical symbol for the MIL-STD-2525 symbology set.
TacticalSymbol symbol = new MilStd2525TacticalSymbol(&quot;SFAPMFQM------A&quot;, Position.fromDegrees(34.7327, -117.8347, 1000));

// Create an attribute bundle and use it as the symbol's normal attributes.
TacticalSymbolAttributes attrs = new BasicTacticalSymbolAttributes();
attrs.setScale(0.75); // Make the symbol 75% its normal size.
attrs.setOpacity(0.5); // Make the symbol 50% transparent.
symbol.setAttributes(attrs);
```

<br/>

#### Highlighting

TacticalSymbol extends the Highlightable interface, and provides control of its highlighted display parameters through a highlight attribute bundle. This bundle is used to draw the symbol's graphic and modifiers when a TacticalSymbol's highlighted state is true.

To highlight a TacticalSymbol, create and configure a new TacticalSymbolAttributes, then call setHighlightAttributes with the new attribute bundle. Finally, call setHighlighted with the value true to highlight the symbol. If your application uses HighlightController, the symbol is automatically highlighted when it's under the cursor. Note that it is possible to specify both normal and highlight attributes, but it is not necessary to do so.

```java
// Create a tactical symbol for the MIL-STD-2525 symbology set.
TacticalSymbol symbol = new MilStd2525TacticalSymbol(&quot;SFAPMFQM------A&quot;, Position.fromDegrees(34.7327, -117.8347, 1000));

// Create an attribute bundle and use it as the symbol's highlight attributes.
TacticalSymbolAttributes highlightAttrs = new BasicTacticalSymbolAttributes();
highlightAttrs.setScale(2.0); // 200% of normal size when highlighted.
highlightAttrs.setOpacity(1.0); // 100% opaque when highlighted.
symbol.setHighlightAttributes(highlightAttrs);
```

<br/>

#### Decluttering

When many tactical symbols are displayed in the same scene, the scene is likely to become cluttered and difficult to interpret. TacticalSymbol provides two ways to reduce the amount of information it displays in order to reduce clutter: hiding symbol modifiers, and displaying the symbol as a simple dot.

To hide a TacticalSymbol's graphic or text modifiers (or both) call setShowGraphicModifiers or setShowTextModifiers, respectively, with the value false. The symbol displays its normal frame, fill, and icon, but hides any supplemental graphic or text modifiers.

```java
// Create a tactical symbol for the MIL-STD-2525 symbology set.
TacticalSymbol symbol = new MilStd2525TacticalSymbol(&quot;SFAPMFQM------A&quot;, Position.fromDegrees(34.7327, -117.8347, 1000));

// Hide the symbol's text modifiers to reduce clutter.
symbol.setShowTextModifiers(false);
```

To display a MilStd2525TacticalSymbol as a simple dot, call setShowFrameAndIcon with the value false. The TacticalSymbolAttributes' scale indicates the dot's diameter in screen pixels, and the symbol's fill color is used as the dot's interior color. When MilStd2525TacticalSymbol is displayed as a dot, its graphic and text modifiers are not displayed.

```java
// Create a tactical symbol for the MIL-STD-2525 symbology set.
MilStd2525TacticalSymbol symbol = new MilStd2525TacticalSymbol(&quot;SFAPMFQM------A&quot;, Position.fromDegrees(34.7327, -117.8347, 1000));

// Configure the symbol to display as a simple dot, and without any graphic or text
// modifiers.
symbol.setShowFrameAndIcon(false);

// Create an attribute bundle to specify the dot's diameter in screen pixels.
TacticalSymbolAttributes attrs = new BasicTacticalSymbolAttributes();
attrs.setScale(3.0); // Set the dot's diameter to 3.0 pixels.
symbol.setAttributes(attrs);
```

<br/>

#### Modifier Attributes

TacticalSymbol provides control of the font and color used to display text modifiers via the TacticalSymbolAttributes interface. To set the text modifier font or color (or both), call setModifierFont or setModifierMaterial, respectively.

```java
// Create a tactical symbol for the MIL-STD-2525 symbology set.
TacticalSymbol symbol = new MilStd2525TacticalSymbol(&quot;SFAPMFQM------A&quot;, Position.fromDegrees(34.7327, -117.8347, 1000));

// Create an attribute bundle and use it as the symbol's normal attributes. Specify
// the text modifier font and material.
TacticalSymbolAttributes attrs = new BasicTacticalSymbolAttributes();
attrs.setTextModifierFont(Font.decode(&quot;Arial-Bold-12&quot;));
attrs.setTextModifierMaterial(Material.RED);
symbol.setAttributes(attrs);
```

## <a name="offline-use"></a>Offline Use

By default, the icons displayed by TacticalSymbol and TacticalPointGraphic are downloaded from an HTTP server at https://worldwind.arc.nasa.gov/milstd2525c/rev1/. When an application cannot access worldwind.arc.nasa.gov, it is necessary to configure these symbols to download their icons from another location. This can be accomplished by deploying an HTTPS server or by using a local ZIP archive.

<br/>

#### HTTPS Server

1. Install an HTTPS server on any machine that is accessible to the client application. Use any server that supports the HTTPS protocol, such as NGINX.

2. Download the WorldWind MIL-STD-2525 [Symbol Icons ZIP archive](https://worldwind.arc.nasa.gov/milstd2525c/rev1/milstd2525-symbols.zip).

3. Extract the Symbol Icons ZIP Archive to a publicly accessible folder on the server. Assign global read permission to the folder and its sub-folders. The following steps refer to the extracted folder's public URL as http://myserver.com/milstd2525/.

4. Configure WorldWind by adding the following entry to the worldwind.xml configuration file:

```xml
<Property name="gov.nasa.worldwind.avkey.MilStd2525IconRetrieverPath" value="http://myserver.com/milstd2525/">
```

<br/>

#### Local ZIP Archive

1. Download the WorldWind MIL-STD-2525 [Symbol Icons ZIP archive](https://worldwind.arc.nasa.gov/milstd2525c/rev1/milstd2525-symbols.zip). Place the archive in a location that is accessible to the application. The following steps refer to the archive's location as MyApp/milstd2525-symbols.zip, where MyApp is the application root folder.

2. Configure WorldWind by adding the following entry to the worldwind.xml configuration file:

```xml
<Property name="gov.nasa.worldwind.avkey.MilStd2525IconRetrieverPath" value="jar:file:milstd2525-symbols.zip!">
```

The file URL specified in this entry may be absolute or it may be relative to the application working directory.