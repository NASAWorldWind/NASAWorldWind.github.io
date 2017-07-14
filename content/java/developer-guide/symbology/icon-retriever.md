---
title: "Icon Retriever"
date: 2017-07-14T00:41:16-04:00
draft: false
mainpage: false
projectpage: false
projectslug: "java"
projectname: "WorldWind Java"
layout: "project"
---

## Overview

This guide shows how to use the IconRetriever interface to retrieve icons for tactical symbols. The guide is organized into in three sections:

1. [Usage](#usage)
2. [Parameters](#parameters)
3. [Example](#example)

### <a name="usage"></a>Usage

Icons in a symbol set are retrieved using an IconRetriever. The retriever's job is to take the identifier for a symbol and construct a BufferedImage that contains the icon for that symbol. An IconRetriever implementation handles icons for a specific symbol set. This guide will discuss the MilStd2525IconRetriever, which creates icons for symbols in MIL-STD-2525C.

IconRetriever.createIcon takes two parameters: an icon identifier, and a list of retrieval parameters. The format of the identifier is defined by the symbol set. For example, the MilStd2525IconRetriever accepts a MIL-STD-2525C SIDC. The retrieval parameter list is optional.

The icon retriever must be configured with a path to a symbol repository. The retrieval path identifies a directory or ZIP file that contains icons for the MIL-STD-2525C symbol set. See the Tactical Symbol Usage Guide for more information on how to set up a symbol repository.

The following code creates an icon for the MIL-STD-2525C Special Operation Forces Drone Aircraft (SFAPMFQM--GIUSA):

```java
// Create an icon retriever to fetch symbols from the WorldWind server
IconRetriever retriever = new MilStd2525IconRetriever(MilStd2525Constants.DEFAULT_ICON_RETRIEVER_PATH);
BufferedImage icon = retriever.createIcon("SFAPMFQM--GIUSA", null);
```

The code above retrieves this image:

![TacticalSymbol from IconRetriever](/img/java/full-symbol.png)

### <a name="parameters"></a>Parameters

Retrieval parameters are specified as key/value pairs. Each icon retriever may support different parameters. MilStd2525IconRetriever supports the following parameters to control how the symbol is constructed:

**Show Icon**

Determines if the symbol will be created with an icon.

**Show Frame**

Determines if the symbol will be created with a frame.

**Show Fill**

Determines if the symbol will include a fill color.

**Color**

Fill color applied to the symbol. If the symbol is drawn with a frame, then this color will be used to fill the frame. If the symbol is not drawn with a frame, then the fill will be applied to the icon itself. The fill color has no effect if Show Fill is False.

Icon Result | Parameters
--- | ---
![TacticalSymbol from IconRetriever](/img/java/full-symbol.png) | Frame: `on`, Fill: `on`, Icon: `on`
![TacticalSymbol from IconRetriever](/img/java/no-fill.png) | Frame: `on`, Fill: `off`, Icon: `on`
![TacticalSymbol from IconRetriever](/img/java/no-frame.png) | Frame: `off`, Fill: `on`, Icon: `on`
![TacticalSymbol from IconRetriever](/img/java/no-frame-no-fill.png) | Frame: `off`, Fill: `off`, Icon: `on`
![TacticalSymbol from IconRetriever](/img/java/no-frame-no-fill-no-icon.png) | Frame: `off`, Fill: `on`, Icon: `off`

### <a name="example"></a>Example

The following code creates an instance of the Drone Aircraft graphic with no fill:

```java
VList params = new AVListImpl();
params.setValue(SymbologyConstants.SHOW_FILL, false);

IconRetriever retriever = new MilStd2525IconRetriever(MilStd2525Constants.DEFAULT_ICON_RETRIEVER_PATH);
BufferedImage icon = retriever.createIcon("SFAPMFQM--GIUSA", params);
```

The icon retriever will return this image:

![Drone aircraft graphic with no fill](/img/java/no-fill.png)