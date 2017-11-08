---
title: "Adding New Tactical Symbols-WorldWind Java/NASA WorldWind"
date: 2017-07-14T01:02:30-04:00
draft: false
header: Adding New Tactical Symbols
listdescription: "Describes how custom symbols may be created."
---

{{< fix-tables >}}

## Adding New Tactical Symbols

Applications that use symbology may need to use some custom symbols. The application could implement a new symbology set for the custom symbols, but that may be too much work if the number of symbols is small. The easiest way to add a small number of symbols is to assign identifiers to the new symbols that fit into the naming convention of an existing symbol set, and provide icons for the new symbols along side WorldWind's standard icons. This guide describes how to add symbols to the MIL-STD-2525C symbol set. The details described here are specific to 2525C, but the concepts apply to all symbol sets.

Symbols can be added to the 2525C symbol set by naming the new symbols using the SIDC scheme used by 2525C. The new symbols need to be assigned Function IDs that are not used by other symbols in 2525C. WorldWind's symbol resolution logic will work as usual with the new IDs, and WorldWind will look for the new symbols alongside the existing 2525C symbols in a local symbol zip file or directory. Note that this approach is not guaranteed to be compatible with future revisions of 2525 since it relies on using identifier that are currently unused by 2525C.

An SIDC is a 15 character code that identifies a symbol in 2525C and its attributes. The format is slightly different for each appendix of 2525C. The graphic below shows an example of a SIDC from Tactical Graphics (Appendix B).

![Example Tactical Symbol](/img/java/phaseline1.jpg)

The table below shows the format of a Warfighting SIDC (from page 51 of the specification). The Function ID part of the SIDC is the part that identifies a particular symbol within an appendix.

Field | Positions | Length
--- | --- | ---
Coding scheme | 1 | 1
Standard Identity | 2 | 1
Battle Dimension | 3 | 1
Status | 1 | 4
Function ID | 5-10 | 6
Symbol Modifier | 11,12 | 2
Country Code | 13,14 | 2
Order of Battle | 15 | 1

To add new symbols to the specification, first choose a scheme (each appendix of 2525C is a different scheme) for the new symbols, and then choose Function IDs that are not used by other symbols in that scheme. For example you might choose the Warfighting scheme (Appendix A), and Function IDs ZA, ZB, and ZC. The Warfighting scheme includes Battle Dimension as part of the SIDC. The Battle Dimension (Air, Ground, Sea Surface, etc.) determines the shape of the icon's frame. We'll put our new symbols in the Air battle dimension. The new SIDCs (with some fields masked out) are:

`S-A-ZA---------`
`S-A-ZB---------`
`S-A-ZC---------`
`S-A-ZD---------`

For each new symbol, we need to provide eight icons for every combination of the four standard identities (friendly, neutral, unknown, and hostile) and the two status possibilities (present or anticipated). Each standard identity has a different frame shape, so a different version of the symbol can be provided for each frame. However, many symbols can use the same image for all four standard identities. The present version of the symbol should include the symbol drawn with solid lines, and the anticipated version should include the symbol drawn with dashed lines. The files must be named:

File name | Standard Identity | Status
--- | --- | ---
`sfapza---------.png` | Friendly | Present
`suapza---------.png` | Unknown | Present
`snapza---------.png` | Neutral | Present
`shapza---------.png` | Hostile | Present
`sfaaza---------.png` | Friendly | Anticipated
`suaaza---------.png` | Unknown | Anticipated
`snaaza---------.png` | Neutral | Anticipated
`shaaza---------.png` | Hostile | Anticipated

The file names above are SIDC codes with some fields masked out with hyphens. The standard identity is position 2 (f, u, h, n), the state is position 4 (p, a), and the function ID is positions 5-10. The "s" in position 1 indicates the Warfighting scheme (Appendix A), and the "a" in position 3 indicates the Air track, which determines the shape of the icon's frame.

The new icons should be white and black on a transparent background. WorldWind will replace white with the icon color, depending on the symbol's standard identity and other options. Black pixels will remain black. We just need to provide the icon itself, not the frame. WorldWind will place the icon on the appropriate frame, depending on the standard identity.

The following table shows the all eight icons for the Movement Control Center (MCC) Theater graphic, and how the final symbol will appear when created with and without a frame. Notice that the icon for each standard identity is slightly different so that each icon matches its frame exactly. Also notice that the white pixels of the icon are converted to black when the icon is drawn on a frame, and to the standard identity color when the icon is drawn without a frame. The anticipated version of the icon is only used to create an unframed symbol. For an anticipated framed symbol the frame itself is drawn with a dashed border.

Name | Icon | Framed Present | Framed Anticipated | Unframed
--- | --- | --- | --- | ---
Friendly Present | ![sfgpustmt------.png](/img/java/sfgpustmt.png) `sfgpustmt------.png` | ![sfgpustmt-_frame.png](/img/java/sfgpustmt-_frame.png) | ![sfgaustmt-_frame.png](/img/java/sfgaustmt-_frame.png) | ![sfgpustmt-_noframe.png](/img/java/sfgpustmt-_noframe.png)
Friendly Anticipated | ![sfgaustmt.png](/img/java/sfgaustmt.png) `sfgaustmt------.png` |  |  | ![sfgaustmt-_noframe.png](/img/java/sfgaustmt-_noframe.png)
Neutral Present | ![sngpustmt.png](/img/java/sngpustmt.png) `sngpustmt------.png` | ![sngpustmt-_frame.png](/img/java/sngpustmt-_frame.png) |  ![sngaustmt-_frame.png](/img/java/sngaustmt-_frame.png) | ![sngpustmt-_noframe.png](/img/java/sngpustmt-_noframe.png)
Neutral Anticipated | ![sngaustmt.png](/img/java/sngaustmt.png) `sngaustmt------.png` |  |  | ![sngaustmt-_noframe.png](/img/java/sngaustmt-_noframe.png)
Hostile Present | ![shgpustmt.png](/img/java/shgpustmt.png) `shgpustmt------.png` | ![shgpustmt-_frame.png](/img/java/shgpustmt-_frame.png) | ![shgaustmt-_frame.png](/img/java/shgaustmt-_frame.png) | ![shgpustmt-_noframe.png](/img/java/shgpustmt-_noframe.png)
Hostile Anticipated | ![shgaustmt.png](/img/java/shgaustmt.png) `shgaustmt------.png` |  |  | ![shgaustmt-_noframe.png](/img/java/shgaustmt-_noframe.png)
Unknown Present | ![sugpustmt.png](/img/java/sugpustmt.png) `sugpustmt------.png` | ![sugpustmt-_frame.png](/img/java/sugpustmt-_frame.png) | ![sugaustmt-_frame.png](/img/java/sugaustmt-_frame.png) | ![sugpustmt-_noframe.png](/img/java/sugpustmt-_noframe.png)
Unknown Anticipated | ![sugaustmt.png](/img/java/sugaustmt.png) `sugaustmt------.png` |  |  | ![sugaustmt-_noframe.png](/img/java/sugaustmt-_noframe.png)

Put the icons the icons/war/ directory of the symbology zip file or local symbol directory. See Offline Use for more information on using a local symbol archive. You can create instances of the the new symbols using MilStd2525TacticalSymbol:

```java
TacticalSymbol symbol = new MilStd2525TacticalSymbol(""SFAPZA--------A", position);
```

The approach described above is the easiest way to add new icons. If you want to do something more sophisticated (such as treating your icons differently than WorldWind's standard icons), take a look at MilStd2525IconRetriever. This is the class that translates the SIDC into a file path, and retrieves the icon. See the Icon Retriever Usage Guide for more information on icon retrievers.