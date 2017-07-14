---
title: "Concepts"
date: 2017-07-13T22:58:22-04:00
draft: false
mainpage: false
projectpage: false
projectslug: "java"
projectname: "WorldWind Java"
layout: "project"
---

## Concepts

WorldWind is a collection of components that interactively display 3D geographic information within Java applications. Applications use WorldWind by placing one or more WorldWindow objects in their user interface. That WorldWindow provide the 3D geographic context for the application's information and behaviors.

WorldWind components are extensible. The API is defined primarily by interfaces, so components can be selectively replaced by alternative components. Concrete classes can also be replaced or extended. Extensibility is a fundamental objective of WorldWind.

In addition to WorldWindow, there are several major WorldWind interfaces, all shown in the following diagram.

![WorldWind Java Interface Diagram](/img/java/worldwinddevguideillustrations.png)

- Globe represents a planet's shape and terrain. The globe has a Tessellator that generates the terrain.
- Layer applies application imagery, shapes or other information to the globe. These items all retain their position relative to the globe as the user navigates through the geography. Layers also provide in-screen shapes that lie in the plane of the screen and do not move with the globe.
- Model aggregates the globe and its layers, including in-screen layers.
- View determines the user's view of the model and is driven by input events from the user via the InputHandler.
- SceneController controls the rendering of a Model and the timing of the rendering. It associates a Model with a View.

In typical usage, applications create a globe and  layers for their data and combine them into a model. They also create a WorldWindow and pass the model to it. The WorldWindow's scene controller subsequently manages the display of the globe and its layers, in conjunction with an interactive view that defines the user's view of the planet.

All the objects above can be those provided by WorldWind or those developed by  application developers. Objects implementing a particular interface may be used wherever that interface is called for.

### Data Retrieval

WorldWind works with enormous quantities of data and information, all of which exist primarily on remote data servers. Retrieval and local caching of that data is therefore a necessary and primary feature of WorldWind. As remote data is retrieved it is stored in a local disk cache and subsequently used from there. The cache has no fixed size. It can be pruned programmatically by the application. All data retrieval, even retrieval from disk, is performed on background threads.

### Offline Mode

WorldWind's use of the network can be disabled by setting the offline-mode of the WorldWindow. Prior to attempting retrieval of a network resource, WorldWind checks the offline-mode and does not attempt retrieval if it's enabled.

### Picking and Selection

WorldWind can determine the displayed objects at a given screen position, typically the cursor position, in a WorldWindow. It can also determine the geographic position beneath the cursor. Both of these operations are performed automatically. The results are delivered to the application via Select events, and can also be queried from the WorldWindow.