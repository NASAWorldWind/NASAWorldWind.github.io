/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtPanZoomCanvas'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var $JSCompiler_prototypeAlias$$;
function $goog$exportPath_$$($name$$71$$, $opt_object$$) {
  0 == $name$$71$$.indexOf("dvt.") && ($name$$71$$ = $name$$71$$.substring(4));
  var $parts$$ = $name$$71$$.split("."), $cur$$ = eval("dvt");
  $parts$$[0] in $cur$$ || !$cur$$.execScript || $cur$$.execScript("var " + $parts$$[0]);
  for (var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    $parts$$.length || void 0 === $opt_object$$ ? $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {} : $cur$$[$part$$] = $opt_object$$;
  }
}
Math.floor(2147483648 * Math.random()).toString(36);

function $DvtDiagramLayoutContext$$($context$$104$$) {
  this.Init($context$$104$$);
}
$goog$exportPath_$$("DvtDiagramLayoutContext", $DvtDiagramLayoutContext$$);
dvt.$Obj$.$createSubclass$($DvtDiagramLayoutContext$$, dvt.$Obj$, "DvtDiagramLayoutContext");
$DvtDiagramLayoutContext$$.prototype.Init = function $$DvtDiagramLayoutContext$$$$Init$($context$$105$$) {
  this.$_layout$ = $context$$105$$ ? $context$$105$$.$_layout$ : null;
  this.$_layoutAttrs$ = $context$$105$$ ? $context$$105$$.$_layoutAttrs$ : null;
  this.$_nodeCount$ = $context$$105$$ ? $context$$105$$.$_nodeCount$ : 0;
  this.$_linkCount$ = $context$$105$$ ? $context$$105$$.$_linkCount$ : 0;
  this.$_bLocaleR2L$ = $context$$105$$ ? $context$$105$$.$_bLocaleR2L$ : !1;
  this.$_componentSize$ = $context$$105$$ ? $context$$105$$.$_componentSize$ : null;
  this.$_viewport$ = $context$$105$$ ? $context$$105$$.$_viewport$ : null;
  this.$_containerId$ = $context$$105$$ ? $context$$105$$.$_containerId$ : null;
  this.$_containerPadding$ = $context$$105$$ ? $context$$105$$.$_containerPadding$ : null;
  this.$_nodes$ = {};
  this.$_links$ = {};
  this.$_arNodes$ = [];
  this.$_arLinks$ = [];
  if ($context$$105$$) {
    for (var $i$$246$$ = 0;$i$$246$$ < this.$_nodeCount$;$i$$246$$++) {
      var $linkCopy_nodeCopy$$ = new $DvtDiagramLayoutContextNode$$($context$$105$$.$_arNodes$[$i$$246$$]);
      this.$_arNodes$.push($linkCopy_nodeCopy$$);
      this.$_nodes$[$linkCopy_nodeCopy$$.getId()] = $linkCopy_nodeCopy$$;
    }
    for (var $nodeId$$90$$ in $context$$105$$.$_nodes$) {
      this.$_nodes$[$nodeId$$90$$] || (this.$_nodes$[$nodeId$$90$$] = new $DvtDiagramLayoutContextNode$$($context$$105$$.$_nodes$[$nodeId$$90$$]));
    }
    for ($i$$246$$ = 0;$i$$246$$ < this.$_linkCount$;$i$$246$$++) {
      $linkCopy_nodeCopy$$ = new $DvtDiagramLayoutContextLink$$($context$$105$$.$_arLinks$[$i$$246$$]), this.$_arLinks$.push($linkCopy_nodeCopy$$), this.$_links$[$linkCopy_nodeCopy$$.getId()] = $linkCopy_nodeCopy$$;
    }
    for (var $linkId$$32$$ in $context$$105$$.$_links$) {
      this.$_links$[$linkId$$32$$] || (this.$_links$[$linkId$$32$$] = new $DvtDiagramLayoutContextLink$$($context$$105$$.$_links$[$linkId$$32$$]));
    }
  }
};
$DvtDiagramLayoutContext$$.prototype.$setLayout$ = function $$DvtDiagramLayoutContext$$$$$setLayout$$($layout$$18$$) {
  this.$_layout$ = $layout$$18$$;
};
$DvtDiagramLayoutContext$$.prototype.$getLayout$ = function $$DvtDiagramLayoutContext$$$$$getLayout$$() {
  return this.$_layout$;
};
$DvtDiagramLayoutContext$$.prototype.getLayout = $DvtDiagramLayoutContext$$.prototype.$getLayout$;
$DvtDiagramLayoutContext$$.prototype.$setLayoutAttributes$ = function $$DvtDiagramLayoutContext$$$$$setLayoutAttributes$$($layoutAttrs$$5$$) {
  this.$_layoutAttrs$ = $layoutAttrs$$5$$;
};
$DvtDiagramLayoutContext$$.prototype.$getLayoutAttributes$ = function $$DvtDiagramLayoutContext$$$$$getLayoutAttributes$$() {
  return this.$_layoutAttrs$;
};
$DvtDiagramLayoutContext$$.prototype.getLayoutAttributes = $DvtDiagramLayoutContext$$.prototype.$getLayoutAttributes$;
$DvtDiagramLayoutContext$$.prototype.$addNode$ = function $$DvtDiagramLayoutContext$$$$$addNode$$($node$$164$$) {
  this.$getNodeById$($node$$164$$.getId()) || (this.$_nodeCount$++, this.$_arNodes$.push($node$$164$$));
  this.$_nodes$[$node$$164$$.getId()] = $node$$164$$;
};
$DvtDiagramLayoutContext$$.prototype.$getNodeById$ = function $$DvtDiagramLayoutContext$$$$$getNodeById$$($id$$79$$) {
  return this.$_nodes$[$id$$79$$];
};
$DvtDiagramLayoutContext$$.prototype.getNodeById = $DvtDiagramLayoutContext$$.prototype.$getNodeById$;
$DvtDiagramLayoutContext$$.prototype.$getNodeByIndex$ = function $$DvtDiagramLayoutContext$$$$$getNodeByIndex$$($index$$126$$) {
  return this.$_arNodes$[$index$$126$$];
};
$DvtDiagramLayoutContext$$.prototype.getNodeByIndex = $DvtDiagramLayoutContext$$.prototype.$getNodeByIndex$;
$DvtDiagramLayoutContext$$.prototype.$getNodeCount$ = function $$DvtDiagramLayoutContext$$$$$getNodeCount$$() {
  return this.$_nodeCount$;
};
$DvtDiagramLayoutContext$$.prototype.getNodeCount = $DvtDiagramLayoutContext$$.prototype.$getNodeCount$;
function $JSCompiler_StaticMethods_addLink$$($JSCompiler_StaticMethods_addLink$self$$, $link$$55$$) {
  $JSCompiler_StaticMethods_addLink$self$$.$getLinkById$($link$$55$$.getId()) || ($JSCompiler_StaticMethods_addLink$self$$.$_linkCount$++, $JSCompiler_StaticMethods_addLink$self$$.$_arLinks$.push($link$$55$$));
  $JSCompiler_StaticMethods_addLink$self$$.$_links$[$link$$55$$.getId()] = $link$$55$$;
}
$DvtDiagramLayoutContext$$.prototype.$getLinkById$ = function $$DvtDiagramLayoutContext$$$$$getLinkById$$($id$$80$$) {
  return this.$_links$[$id$$80$$];
};
$DvtDiagramLayoutContext$$.prototype.getLinkById = $DvtDiagramLayoutContext$$.prototype.$getLinkById$;
$DvtDiagramLayoutContext$$.prototype.$getLinkByIndex$ = function $$DvtDiagramLayoutContext$$$$$getLinkByIndex$$($index$$127$$) {
  return this.$_arLinks$[$index$$127$$];
};
$DvtDiagramLayoutContext$$.prototype.getLinkByIndex = $DvtDiagramLayoutContext$$.prototype.$getLinkByIndex$;
$DvtDiagramLayoutContext$$.prototype.$getLinkCount$ = function $$DvtDiagramLayoutContext$$$$$getLinkCount$$() {
  return this.$_linkCount$;
};
$DvtDiagramLayoutContext$$.prototype.getLinkCount = $DvtDiagramLayoutContext$$.prototype.$getLinkCount$;
$DvtDiagramLayoutContext$$.prototype.$localToGlobal$ = function $$DvtDiagramLayoutContext$$$$$localToGlobal$$($point$$30$$, $node$$166$$) {
  for (var $containerId$$inline_2347_node$$inline_2345$$ = $node$$166$$, $offset$$inline_2346$$ = new $DvtDiagramPoint$$(0, 0);$containerId$$inline_2347_node$$inline_2345$$;) {
    if ($offset$$inline_2346$$.x += $containerId$$inline_2347_node$$inline_2345$$.$ContentOffset$.x + $containerId$$inline_2347_node$$inline_2345$$.$getPosition$().x, $offset$$inline_2346$$.y += $containerId$$inline_2347_node$$inline_2345$$.$ContentOffset$.y + $containerId$$inline_2347_node$$inline_2345$$.$getPosition$().y, $containerId$$inline_2347_node$$inline_2345$$ = $containerId$$inline_2347_node$$inline_2345$$.$_containerId$) {
      if (($containerId$$inline_2347_node$$inline_2345$$ = this.$getNodeById$($containerId$$inline_2347_node$$inline_2345$$)) && $containerId$$inline_2347_node$$inline_2345$$.$isDisclosed$()) {
        var $containerPadding$$inline_2348$$ = $containerId$$inline_2347_node$$inline_2345$$.$getContainerPadding$();
        $containerPadding$$inline_2348$$ && ($offset$$inline_2346$$.x += $containerPadding$$inline_2348$$.left, $offset$$inline_2346$$.y += $containerPadding$$inline_2348$$.top);
      }
    } else {
      $containerId$$inline_2347_node$$inline_2345$$ = null;
    }
  }
  return new $DvtDiagramPoint$$($point$$30$$.x + $offset$$inline_2346$$.x, $point$$30$$.y + $offset$$inline_2346$$.y);
};
$DvtDiagramLayoutContext$$.prototype.localToGlobal = $DvtDiagramLayoutContext$$.prototype.$localToGlobal$;
$DvtDiagramLayoutContext$$.prototype.$isLocaleR2L$ = function $$DvtDiagramLayoutContext$$$$$isLocaleR2L$$() {
  return this.$_bLocaleR2L$;
};
$DvtDiagramLayoutContext$$.prototype.isLocaleR2L = $DvtDiagramLayoutContext$$.prototype.$isLocaleR2L$;
$DvtDiagramLayoutContext$$.prototype.$getComponentSize$ = function $$DvtDiagramLayoutContext$$$$$getComponentSize$$() {
  return this.$_componentSize$;
};
$DvtDiagramLayoutContext$$.prototype.getComponentSize = $DvtDiagramLayoutContext$$.prototype.$getComponentSize$;
$DvtDiagramLayoutContext$$.prototype.$setViewport$ = function $$DvtDiagramLayoutContext$$$$$setViewport$$($viewport$$4$$) {
  this.$_viewport$ = $viewport$$4$$;
};
$DvtDiagramLayoutContext$$.prototype.setViewport = $DvtDiagramLayoutContext$$.prototype.$setViewport$;
$DvtDiagramLayoutContext$$.prototype.$getViewport$ = function $$DvtDiagramLayoutContext$$$$$getViewport$$() {
  return this.$_viewport$;
};
$DvtDiagramLayoutContext$$.prototype.getViewport = $DvtDiagramLayoutContext$$.prototype.$getViewport$;
$DvtDiagramLayoutContext$$.prototype.$setContainerId$ = function $$DvtDiagramLayoutContext$$$$$setContainerId$$($containerId$$3$$) {
  this.$_containerId$ = $containerId$$3$$;
};
$DvtDiagramLayoutContext$$.prototype.$getContainerId$ = function $$DvtDiagramLayoutContext$$$$$getContainerId$$() {
  return this.$_containerId$;
};
$DvtDiagramLayoutContext$$.prototype.getContainerId = $DvtDiagramLayoutContext$$.prototype.$getContainerId$;
$DvtDiagramLayoutContext$$.prototype.$setContainerPadding$ = function $$DvtDiagramLayoutContext$$$$$setContainerPadding$$($top$$5$$, $right$$6$$, $bottom$$4$$, $left$$6$$) {
  this.$_containerId$ && (this.$_containerPadding$ = {}, "number" !== typeof $top$$5$$ && "string" !== typeof $top$$5$$ && ($left$$6$$ = $top$$5$$.left, $right$$6$$ = $top$$5$$.right, $bottom$$4$$ = $top$$5$$.bottom, $top$$5$$ = $top$$5$$.top), this.$_containerPadding$.top = $top$$5$$, this.$_containerPadding$.right = $right$$6$$, this.$_containerPadding$.bottom = $bottom$$4$$, this.$_containerPadding$.left = $left$$6$$);
};
$DvtDiagramLayoutContext$$.prototype.setContainerPadding = $DvtDiagramLayoutContext$$.prototype.$setContainerPadding$;
$DvtDiagramLayoutContext$$.prototype.$getContainerPadding$ = function $$DvtDiagramLayoutContext$$$$$getContainerPadding$$() {
  return this.$_containerPadding$;
};
$DvtDiagramLayoutContext$$.prototype.getContainerPadding = $DvtDiagramLayoutContext$$.prototype.$getContainerPadding$;
$DvtDiagramLayoutContext$$.prototype.$getCurrentViewport$ = function $$DvtDiagramLayoutContext$$$$$getCurrentViewport$$() {
  return this.$_currentViewport$;
};
$DvtDiagramLayoutContext$$.prototype.getCurrentViewport = $DvtDiagramLayoutContext$$.prototype.$getCurrentViewport$;
function $DvtDiagramLayoutContextLink$$($link$$56$$) {
  this.Init($link$$56$$);
}
$goog$exportPath_$$("DvtDiagramLayoutContextLink", $DvtDiagramLayoutContextLink$$);
dvt.$Obj$.$createSubclass$($DvtDiagramLayoutContextLink$$, dvt.$Obj$, "DvtDiagramLayoutContextLink");
$DvtDiagramLayoutContextLink$$.prototype.Init = function $$DvtDiagramLayoutContextLink$$$$Init$($link$$57$$) {
  this.$_id$ = $link$$57$$ ? $link$$57$$.$_id$ : null;
  this.$_startId$ = $link$$57$$ ? $link$$57$$.$_startId$ : null;
  this.$_endId$ = $link$$57$$ ? $link$$57$$.$_endId$ : null;
  this.$_points$ = $link$$57$$ ? $link$$57$$.$_points$ : null;
  this.$_labelPosition$ = $link$$57$$ ? $link$$57$$.$_labelPosition$ : null;
  this.$_labelValign$ = $link$$57$$ ? $link$$57$$.$_labelValign$ : null;
  this.$_labelHalign$ = $link$$57$$ ? $link$$57$$.$_labelHalign$ : null;
  this.$_labelBounds$ = $link$$57$$ ? $link$$57$$.$_labelBounds$ : null;
  this.$_layoutAttrs$ = $link$$57$$ ? $link$$57$$.$_layoutAttrs$ : null;
  this.$_startConnectorOffset$ = $link$$57$$ ? $link$$57$$.$_startConnectorOffset$ : 0;
  this.$_endConnectorOffset$ = $link$$57$$ ? $link$$57$$.$_endConnectorOffset$ : 0;
  this.$_linkWidth$ = $link$$57$$ ? $link$$57$$.$_linkWidth$ : 1;
  this.$_selected$ = $link$$57$$ ? $link$$57$$.$_selected$ : !1;
  this.$_labelRotAngle$ = $link$$57$$ ? $link$$57$$.$_labelRotAngle$ : null;
  this.$_labelRotPoint$ = $link$$57$$ ? $link$$57$$.$_labelRotPoint$ : null;
  this.$_bPromoted$ = $link$$57$$ ? $link$$57$$.$_bPromoted$ : !1;
};
$DvtDiagramLayoutContextLink$$.prototype.setId = function $$DvtDiagramLayoutContextLink$$$$setId$($id$$81$$) {
  this.$_id$ = $id$$81$$;
};
$DvtDiagramLayoutContextLink$$.prototype.getId = function $$DvtDiagramLayoutContextLink$$$$getId$() {
  return this.$_id$;
};
$DvtDiagramLayoutContextLink$$.prototype.getId = $DvtDiagramLayoutContextLink$$.prototype.getId;
$DvtDiagramLayoutContextLink$$.prototype.$setStartId$ = function $$DvtDiagramLayoutContextLink$$$$$setStartId$$($id$$82$$) {
  this.$_startId$ = $id$$82$$;
};
$DvtDiagramLayoutContextLink$$.prototype.$getStartId$ = function $$DvtDiagramLayoutContextLink$$$$$getStartId$$() {
  return this.$_startId$;
};
$DvtDiagramLayoutContextLink$$.prototype.getStartId = $DvtDiagramLayoutContextLink$$.prototype.$getStartId$;
$DvtDiagramLayoutContextLink$$.prototype.$setEndId$ = function $$DvtDiagramLayoutContextLink$$$$$setEndId$$($id$$83$$) {
  this.$_endId$ = $id$$83$$;
};
$DvtDiagramLayoutContextLink$$.prototype.$getEndId$ = function $$DvtDiagramLayoutContextLink$$$$$getEndId$$() {
  return this.$_endId$;
};
$DvtDiagramLayoutContextLink$$.prototype.getEndId = $DvtDiagramLayoutContextLink$$.prototype.$getEndId$;
$DvtDiagramLayoutContextLink$$.prototype.$setPoints$ = function $$DvtDiagramLayoutContextLink$$$$$setPoints$$($points$$8$$) {
  this.$_points$ = "string" == typeof $points$$8$$ ? dvt.$PathUtils$.$createPathArray$($points$$8$$) : $points$$8$$;
};
$DvtDiagramLayoutContextLink$$.prototype.setPoints = $DvtDiagramLayoutContextLink$$.prototype.$setPoints$;
$DvtDiagramLayoutContextLink$$.prototype.$getPoints$ = function $$DvtDiagramLayoutContextLink$$$$$getPoints$$() {
  return this.$_points$;
};
$DvtDiagramLayoutContextLink$$.prototype.getPoints = $DvtDiagramLayoutContextLink$$.prototype.$getPoints$;
$DvtDiagramLayoutContextLink$$.prototype.$setLabelPosition$ = function $$DvtDiagramLayoutContextLink$$$$$setLabelPosition$$($pos$$22$$) {
  this.$_labelPosition$ = $pos$$22$$;
};
$DvtDiagramLayoutContextLink$$.prototype.setLabelPosition = $DvtDiagramLayoutContextLink$$.prototype.$setLabelPosition$;
$DvtDiagramLayoutContextLink$$.prototype.$getLabelPosition$ = function $$DvtDiagramLayoutContextLink$$$$$getLabelPosition$$() {
  return this.$_labelPosition$;
};
$DvtDiagramLayoutContextLink$$.prototype.getLabelPosition = $DvtDiagramLayoutContextLink$$.prototype.$getLabelPosition$;
$DvtDiagramLayoutContextLink$$.prototype.$setLabelBounds$ = function $$DvtDiagramLayoutContextLink$$$$$setLabelBounds$$($bounds$$18$$) {
  this.$_labelBounds$ = $bounds$$18$$;
};
$DvtDiagramLayoutContextLink$$.prototype.$getLabelBounds$ = function $$DvtDiagramLayoutContextLink$$$$$getLabelBounds$$() {
  return this.$_labelBounds$;
};
$DvtDiagramLayoutContextLink$$.prototype.getLabelBounds = $DvtDiagramLayoutContextLink$$.prototype.$getLabelBounds$;
$DvtDiagramLayoutContextLink$$.prototype.$getStartConnectorOffset$ = function $$DvtDiagramLayoutContextLink$$$$$getStartConnectorOffset$$() {
  return this.$_startConnectorOffset$;
};
$DvtDiagramLayoutContextLink$$.prototype.getStartConnectorOffset = $DvtDiagramLayoutContextLink$$.prototype.$getStartConnectorOffset$;
$DvtDiagramLayoutContextLink$$.prototype.$getEndConnectorOffset$ = function $$DvtDiagramLayoutContextLink$$$$$getEndConnectorOffset$$() {
  return this.$_endConnectorOffset$;
};
$DvtDiagramLayoutContextLink$$.prototype.getEndConnectorOffset = $DvtDiagramLayoutContextLink$$.prototype.$getEndConnectorOffset$;
$DvtDiagramLayoutContextLink$$.prototype.$setLinkWidth$ = function $$DvtDiagramLayoutContextLink$$$$$setLinkWidth$$($ww$$53$$) {
  this.$_linkWidth$ = $ww$$53$$;
};
$DvtDiagramLayoutContextLink$$.prototype.$getLinkWidth$ = function $$DvtDiagramLayoutContextLink$$$$$getLinkWidth$$() {
  return this.$_linkWidth$;
};
$DvtDiagramLayoutContextLink$$.prototype.getLinkWidth = $DvtDiagramLayoutContextLink$$.prototype.$getLinkWidth$;
$DvtDiagramLayoutContextLink$$.prototype.$setLayoutAttributes$ = function $$DvtDiagramLayoutContextLink$$$$$setLayoutAttributes$$($layoutAttrs$$6$$) {
  this.$_layoutAttrs$ = $layoutAttrs$$6$$;
};
$DvtDiagramLayoutContextLink$$.prototype.$getLayoutAttributes$ = function $$DvtDiagramLayoutContextLink$$$$$getLayoutAttributes$$() {
  return this.$_layoutAttrs$;
};
$DvtDiagramLayoutContextLink$$.prototype.getLayoutAttributes = $DvtDiagramLayoutContextLink$$.prototype.$getLayoutAttributes$;
$DvtDiagramLayoutContextLink$$.prototype.$setSelected$ = function $$DvtDiagramLayoutContextLink$$$$$setSelected$$($selected$$8$$) {
  this.$_selected$ = $selected$$8$$;
};
$DvtDiagramLayoutContextLink$$.prototype.$getSelected$ = function $$DvtDiagramLayoutContextLink$$$$$getSelected$$() {
  return this.$_selected$;
};
$DvtDiagramLayoutContextLink$$.prototype.getSelected = $DvtDiagramLayoutContextLink$$.prototype.$getSelected$;
$DvtDiagramLayoutContextLink$$.prototype.$setLabelRotationAngle$ = function $$DvtDiagramLayoutContextLink$$$$$setLabelRotationAngle$$($angle$$6$$) {
  this.$_labelRotAngle$ = $angle$$6$$;
};
$DvtDiagramLayoutContextLink$$.prototype.setLabelRotationAngle = $DvtDiagramLayoutContextLink$$.prototype.$setLabelRotationAngle$;
$DvtDiagramLayoutContextLink$$.prototype.$getLabelRotationAngle$ = function $$DvtDiagramLayoutContextLink$$$$$getLabelRotationAngle$$() {
  return this.$_labelRotAngle$;
};
$DvtDiagramLayoutContextLink$$.prototype.getLabelRotationAngle = $DvtDiagramLayoutContextLink$$.prototype.$getLabelRotationAngle$;
$DvtDiagramLayoutContextLink$$.prototype.$setLabelRotationPoint$ = function $$DvtDiagramLayoutContextLink$$$$$setLabelRotationPoint$$($point$$31$$) {
  this.$_labelRotPoint$ = $point$$31$$;
};
$DvtDiagramLayoutContextLink$$.prototype.setLabelRotationPoint = $DvtDiagramLayoutContextLink$$.prototype.$setLabelRotationPoint$;
$DvtDiagramLayoutContextLink$$.prototype.$getLabelRotationPoint$ = function $$DvtDiagramLayoutContextLink$$$$$getLabelRotationPoint$$() {
  return this.$_labelRotPoint$;
};
$DvtDiagramLayoutContextLink$$.prototype.getLabelRotationPoint = $DvtDiagramLayoutContextLink$$.prototype.$getLabelRotationPoint$;
$DvtDiagramLayoutContextLink$$.prototype.$setPromoted$ = function $$DvtDiagramLayoutContextLink$$$$$setPromoted$$($bPromoted$$1$$) {
  this.$_bPromoted$ = $bPromoted$$1$$;
};
$DvtDiagramLayoutContextLink$$.prototype.$isPromoted$ = function $$DvtDiagramLayoutContextLink$$$$$isPromoted$$() {
  return this.$_bPromoted$;
};
$DvtDiagramLayoutContextLink$$.prototype.isPromoted = $DvtDiagramLayoutContextLink$$.prototype.$isPromoted$;
$DvtDiagramLayoutContextLink$$.prototype.$setLabelValign$ = function $$DvtDiagramLayoutContextLink$$$$$setLabelValign$$($valign$$) {
  this.$_labelValign$ = $valign$$;
};
$DvtDiagramLayoutContextLink$$.prototype.setLabelValign = $DvtDiagramLayoutContextLink$$.prototype.$setLabelValign$;
$DvtDiagramLayoutContextLink$$.prototype.$setLabelHalign$ = function $$DvtDiagramLayoutContextLink$$$$$setLabelHalign$$($halign$$) {
  this.$_labelHalign$ = $halign$$;
};
$DvtDiagramLayoutContextLink$$.prototype.setLabelHalign = $DvtDiagramLayoutContextLink$$.prototype.$setLabelHalign$;
$DvtDiagramLayoutContextLink$$.prototype.$getLabelValign$ = function $$DvtDiagramLayoutContextLink$$$$$getLabelValign$$() {
  return this.$_labelValign$;
};
$DvtDiagramLayoutContextLink$$.prototype.getLabelValign = $DvtDiagramLayoutContextLink$$.prototype.$getLabelValign$;
$DvtDiagramLayoutContextLink$$.prototype.$getLabelHalign$ = function $$DvtDiagramLayoutContextLink$$$$$getLabelHalign$$() {
  return this.$_labelHalign$;
};
$DvtDiagramLayoutContextLink$$.prototype.getLabelHalign = $DvtDiagramLayoutContextLink$$.prototype.$getLabelHalign$;
function $DvtDiagramLayoutContextNode$$($node$$168$$) {
  this.Init($node$$168$$);
}
$goog$exportPath_$$("DvtDiagramLayoutContextNode", $DvtDiagramLayoutContextNode$$);
dvt.$Obj$.$createSubclass$($DvtDiagramLayoutContextNode$$, dvt.$Obj$, "DvtDiagramLayoutContextNode");
$DvtDiagramLayoutContextNode$$.prototype.Init = function $$DvtDiagramLayoutContextNode$$$$Init$($node$$169$$) {
  this.$_id$ = $node$$169$$ ? $node$$169$$.$_id$ : null;
  this.$_bounds$ = $node$$169$$ ? $node$$169$$.$_bounds$ : null;
  this.$_contentBounds$ = $node$$169$$ ? $node$$169$$.$_contentBounds$ : null;
  this.$_position$ = $node$$169$$ ? $node$$169$$.$_position$ : null;
  this.$_labelPosition$ = $node$$169$$ ? $node$$169$$.$_labelPosition$ : null;
  this.$_labelBounds$ = $node$$169$$ ? $node$$169$$.$_labelBounds$ : null;
  this.$_labelValign$ = $node$$169$$ ? $node$$169$$.$_labelValign$ : null;
  this.$_labelHalign$ = $node$$169$$ ? $node$$169$$.$_labelHalign$ : null;
  this.$_layoutAttrs$ = $node$$169$$ ? $node$$169$$.$_layoutAttrs$ : null;
  this.$_bReadOnly$ = $node$$169$$ ? $node$$169$$.$_bReadOnly$ : !1;
  this.$_containerId$ = $node$$169$$ ? $node$$169$$.$_containerId$ : null;
  this.$_selected$ = $node$$169$$ ? $node$$169$$.$_selected$ : !1;
  this.$_labelRotAngle$ = $node$$169$$ ? $node$$169$$.$_labelRotAngle$ : null;
  this.$_labelRotPoint$ = $node$$169$$ ? $node$$169$$.$_labelRotPoint$ : null;
  this.$_containerPadding$ = $node$$169$$ ? $node$$169$$.$_containerPadding$ : null;
  this.$_origBounds$ = $node$$169$$ ? $node$$169$$.$_origBounds$ : null;
  this.$_origContentBounds$ = $node$$169$$ ? $node$$169$$.$_origContentBounds$ : null;
  this.$_bDisclosed$ = $node$$169$$ ? $node$$169$$.$_bDisclosed$ : !1;
  this.$Component$ = $node$$169$$ ? $node$$169$$.$GetDiagram$() : null;
  this.$IsRendered$ = !0;
  this.$ContentOffset$ = new $DvtDiagramPoint$$(0, 0);
};
$DvtDiagramLayoutContextNode$$.prototype.setId = function $$DvtDiagramLayoutContextNode$$$$setId$($id$$84$$) {
  this.$_id$ = $id$$84$$;
};
$DvtDiagramLayoutContextNode$$.prototype.getId = function $$DvtDiagramLayoutContextNode$$$$getId$() {
  return this.$_id$;
};
$DvtDiagramLayoutContextNode$$.prototype.getId = $DvtDiagramLayoutContextNode$$.prototype.getId;
$DvtDiagramLayoutContextNode$$.prototype.$getBounds$ = function $$DvtDiagramLayoutContextNode$$$$$getBounds$$() {
  !this.$IsRendered$ && this.$Component$ && this.$Component$.$renderNodeFromContext$(this);
  return this.$_bounds$;
};
$DvtDiagramLayoutContextNode$$.prototype.getBounds = $DvtDiagramLayoutContextNode$$.prototype.$getBounds$;
$DvtDiagramLayoutContextNode$$.prototype.$getContentBounds$ = function $$DvtDiagramLayoutContextNode$$$$$getContentBounds$$() {
  !this.$IsRendered$ && this.$Component$ && this.$Component$.$renderNodeFromContext$(this);
  return this.$_contentBounds$;
};
$DvtDiagramLayoutContextNode$$.prototype.getContentBounds = $DvtDiagramLayoutContextNode$$.prototype.$getContentBounds$;
$DvtDiagramLayoutContextNode$$.prototype.setPosition = function $$DvtDiagramLayoutContextNode$$$$setPosition$($pos$$23$$) {
  this.$_position$ = $pos$$23$$;
  $JSCompiler_StaticMethods__updateParentNodes$$(this, this);
};
$DvtDiagramLayoutContextNode$$.prototype.setPosition = $DvtDiagramLayoutContextNode$$.prototype.setPosition;
$DvtDiagramLayoutContextNode$$.prototype.$getPosition$ = function $$DvtDiagramLayoutContextNode$$$$$getPosition$$() {
  return this.$_position$;
};
$DvtDiagramLayoutContextNode$$.prototype.getPosition = $DvtDiagramLayoutContextNode$$.prototype.$getPosition$;
$DvtDiagramLayoutContextNode$$.prototype.$setLabelPosition$ = function $$DvtDiagramLayoutContextNode$$$$$setLabelPosition$$($pos$$24$$) {
  this.$_labelPosition$ = $pos$$24$$;
};
$DvtDiagramLayoutContextNode$$.prototype.setLabelPosition = $DvtDiagramLayoutContextNode$$.prototype.$setLabelPosition$;
$DvtDiagramLayoutContextNode$$.prototype.$getLabelPosition$ = function $$DvtDiagramLayoutContextNode$$$$$getLabelPosition$$() {
  return this.$_labelPosition$;
};
$DvtDiagramLayoutContextNode$$.prototype.getLabelPosition = $DvtDiagramLayoutContextNode$$.prototype.$getLabelPosition$;
$DvtDiagramLayoutContextNode$$.prototype.$setLabelBounds$ = function $$DvtDiagramLayoutContextNode$$$$$setLabelBounds$$($bounds$$21$$) {
  this.$_labelBounds$ = $bounds$$21$$;
};
$DvtDiagramLayoutContextNode$$.prototype.$getLabelBounds$ = function $$DvtDiagramLayoutContextNode$$$$$getLabelBounds$$() {
  return this.$_labelBounds$;
};
$DvtDiagramLayoutContextNode$$.prototype.getLabelBounds = $DvtDiagramLayoutContextNode$$.prototype.$getLabelBounds$;
$DvtDiagramLayoutContextNode$$.prototype.$setLayoutAttributes$ = function $$DvtDiagramLayoutContextNode$$$$$setLayoutAttributes$$($layoutAttrs$$7$$) {
  this.$_layoutAttrs$ = $layoutAttrs$$7$$;
};
$DvtDiagramLayoutContextNode$$.prototype.$getLayoutAttributes$ = function $$DvtDiagramLayoutContextNode$$$$$getLayoutAttributes$$() {
  return this.$_layoutAttrs$;
};
$DvtDiagramLayoutContextNode$$.prototype.getLayoutAttributes = $DvtDiagramLayoutContextNode$$.prototype.$getLayoutAttributes$;
$DvtDiagramLayoutContextNode$$.prototype.$setReadOnly$ = function $$DvtDiagramLayoutContextNode$$$$$setReadOnly$$($bReadOnly$$) {
  this.$_bReadOnly$ = $bReadOnly$$;
};
$DvtDiagramLayoutContextNode$$.prototype.$isReadOnly$ = function $$DvtDiagramLayoutContextNode$$$$$isReadOnly$$() {
  return this.$_bReadOnly$;
};
$DvtDiagramLayoutContextNode$$.prototype.isReadOnly = $DvtDiagramLayoutContextNode$$.prototype.$isReadOnly$;
$DvtDiagramLayoutContextNode$$.prototype.$setContainerId$ = function $$DvtDiagramLayoutContextNode$$$$$setContainerId$$($id$$85$$) {
  this.$_containerId$ = $id$$85$$;
};
$DvtDiagramLayoutContextNode$$.prototype.$getContainerId$ = function $$DvtDiagramLayoutContextNode$$$$$getContainerId$$() {
  return this.$_containerId$;
};
$DvtDiagramLayoutContextNode$$.prototype.getContainerId = $DvtDiagramLayoutContextNode$$.prototype.$getContainerId$;
$DvtDiagramLayoutContextNode$$.prototype.$setSelected$ = function $$DvtDiagramLayoutContextNode$$$$$setSelected$$($selected$$9$$) {
  this.$_selected$ = $selected$$9$$;
};
$DvtDiagramLayoutContextNode$$.prototype.$getSelected$ = function $$DvtDiagramLayoutContextNode$$$$$getSelected$$() {
  return this.$_selected$;
};
$DvtDiagramLayoutContextNode$$.prototype.getSelected = $DvtDiagramLayoutContextNode$$.prototype.$getSelected$;
$DvtDiagramLayoutContextNode$$.prototype.$setLabelRotationAngle$ = function $$DvtDiagramLayoutContextNode$$$$$setLabelRotationAngle$$($angle$$7$$) {
  this.$_labelRotAngle$ = $angle$$7$$;
};
$DvtDiagramLayoutContextNode$$.prototype.setLabelRotationAngle = $DvtDiagramLayoutContextNode$$.prototype.$setLabelRotationAngle$;
$DvtDiagramLayoutContextNode$$.prototype.$getLabelRotationAngle$ = function $$DvtDiagramLayoutContextNode$$$$$getLabelRotationAngle$$() {
  return this.$_labelRotAngle$;
};
$DvtDiagramLayoutContextNode$$.prototype.getLabelRotationAngle = $DvtDiagramLayoutContextNode$$.prototype.$getLabelRotationAngle$;
$DvtDiagramLayoutContextNode$$.prototype.$setLabelRotationPoint$ = function $$DvtDiagramLayoutContextNode$$$$$setLabelRotationPoint$$($point$$32$$) {
  this.$_labelRotPoint$ = $point$$32$$;
};
$DvtDiagramLayoutContextNode$$.prototype.setLabelRotationPoint = $DvtDiagramLayoutContextNode$$.prototype.$setLabelRotationPoint$;
$DvtDiagramLayoutContextNode$$.prototype.$getLabelRotationPoint$ = function $$DvtDiagramLayoutContextNode$$$$$getLabelRotationPoint$$() {
  return this.$_labelRotPoint$;
};
$DvtDiagramLayoutContextNode$$.prototype.getLabelRotationPoint = $DvtDiagramLayoutContextNode$$.prototype.$getLabelRotationPoint$;
$DvtDiagramLayoutContextNode$$.prototype.$setContainerPadding$ = function $$DvtDiagramLayoutContextNode$$$$$setContainerPadding$$($top$$6$$, $right$$7$$, $bottom$$5$$, $left$$7$$) {
  this.$isDisclosed$() && (this.$_containerPadding$ = {}, "number" !== typeof $top$$6$$ && "string" !== typeof $top$$6$$ && ($left$$7$$ = $top$$6$$.left, $right$$7$$ = $top$$6$$.right, $bottom$$5$$ = $top$$6$$.bottom, $top$$6$$ = $top$$6$$.top), this.$_containerPadding$.top = $top$$6$$, this.$_containerPadding$.right = $right$$7$$, this.$_containerPadding$.bottom = $bottom$$5$$, this.$_containerPadding$.left = $left$$7$$, this.$_origBounds$ && (this.$_bounds$ = new $DvtDiagramRectangle$$(this.$_origBounds$.x, 
  this.$_origBounds$.y, this.$_origBounds$.w + $left$$7$$ + $right$$7$$, this.$_origBounds$.h + $top$$6$$ + $bottom$$5$$)), this.$_origContentBounds$ && (this.$_contentBounds$ = new $DvtDiagramRectangle$$(this.$_origContentBounds$.x, this.$_origContentBounds$.y, this.$_origContentBounds$.w + $left$$7$$ + $right$$7$$, this.$_origContentBounds$.h + $top$$6$$ + $bottom$$5$$)));
};
$DvtDiagramLayoutContextNode$$.prototype.setContainerPadding = $DvtDiagramLayoutContextNode$$.prototype.$setContainerPadding$;
$DvtDiagramLayoutContextNode$$.prototype.$getContainerPadding$ = function $$DvtDiagramLayoutContextNode$$$$$getContainerPadding$$() {
  return this.$_containerPadding$;
};
$DvtDiagramLayoutContextNode$$.prototype.getContainerPadding = $DvtDiagramLayoutContextNode$$.prototype.$getContainerPadding$;
$DvtDiagramLayoutContextNode$$.prototype.$setDisclosed$ = function $$DvtDiagramLayoutContextNode$$$$$setDisclosed$$($bDisclosed$$6$$) {
  this.$_bDisclosed$ = $bDisclosed$$6$$;
};
$DvtDiagramLayoutContextNode$$.prototype.$isDisclosed$ = function $$DvtDiagramLayoutContextNode$$$$$isDisclosed$$() {
  return this.$_bDisclosed$;
};
$DvtDiagramLayoutContextNode$$.prototype.isDisclosed = $DvtDiagramLayoutContextNode$$.prototype.$isDisclosed$;
$DvtDiagramLayoutContextNode$$.prototype.$setChildNodes$ = function $$DvtDiagramLayoutContextNode$$$$$setChildNodes$$($childNodes$$17$$) {
  this.$_childNodes$ = $childNodes$$17$$;
};
$DvtDiagramLayoutContextNode$$.prototype.$getChildNodes$ = function $$DvtDiagramLayoutContextNode$$$$$getChildNodes$$() {
  return this.$_childNodes$;
};
$DvtDiagramLayoutContextNode$$.prototype.getChildNodes = $DvtDiagramLayoutContextNode$$.prototype.$getChildNodes$;
$DvtDiagramLayoutContextNode$$.prototype.$setParentNode$ = function $$DvtDiagramLayoutContextNode$$$$$setParentNode$$($parentNode$$3$$) {
  this.$_parentNode$ = $parentNode$$3$$;
};
$DvtDiagramLayoutContextNode$$.prototype.$getParentNode$ = function $$DvtDiagramLayoutContextNode$$$$$getParentNode$$() {
  return this.$_parentNode$;
};
$DvtDiagramLayoutContextNode$$.prototype.getParentNode = $DvtDiagramLayoutContextNode$$.prototype.$getParentNode$;
function $JSCompiler_StaticMethods__updateParentNodes$$($JSCompiler_StaticMethods__updateParentNodes$self$$, $node$$170$$) {
  var $parent$$50$$ = $node$$170$$.$getParentNode$();
  $parent$$50$$ && $parent$$50$$.$IsRendered$ && ($parent$$50$$.$IsRendered$ = !1, $JSCompiler_StaticMethods__updateParentNodes$$($JSCompiler_StaticMethods__updateParentNodes$self$$, $parent$$50$$));
}
$DvtDiagramLayoutContextNode$$.prototype.$setLabelValign$ = function $$DvtDiagramLayoutContextNode$$$$$setLabelValign$$($valign$$1$$) {
  this.$_labelValign$ = $valign$$1$$;
};
$DvtDiagramLayoutContextNode$$.prototype.setLabelValign = $DvtDiagramLayoutContextNode$$.prototype.$setLabelValign$;
$DvtDiagramLayoutContextNode$$.prototype.$setLabelHalign$ = function $$DvtDiagramLayoutContextNode$$$$$setLabelHalign$$($halign$$1$$) {
  this.$_labelHalign$ = $halign$$1$$;
};
$DvtDiagramLayoutContextNode$$.prototype.setLabelHalign = $DvtDiagramLayoutContextNode$$.prototype.$setLabelHalign$;
$DvtDiagramLayoutContextNode$$.prototype.$getLabelValign$ = function $$DvtDiagramLayoutContextNode$$$$$getLabelValign$$() {
  return this.$_labelValign$;
};
$DvtDiagramLayoutContextNode$$.prototype.getLabelValign = $DvtDiagramLayoutContextNode$$.prototype.$getLabelValign$;
$DvtDiagramLayoutContextNode$$.prototype.$getLabelHalign$ = function $$DvtDiagramLayoutContextNode$$$$$getLabelHalign$$() {
  return this.$_labelHalign$;
};
$DvtDiagramLayoutContextNode$$.prototype.getLabelHalign = $DvtDiagramLayoutContextNode$$.prototype.$getLabelHalign$;
function $DvtDiagramPoint$$($x$$89$$, $y$$69$$) {
  this.Init($x$$89$$, $y$$69$$);
}
$goog$exportPath_$$("DvtDiagramPoint", $DvtDiagramPoint$$);
dvt.$Obj$.$createSubclass$($DvtDiagramPoint$$, dvt.$Obj$, "DvtDiagramPoint");
$DvtDiagramPoint$$.prototype.Init = function $$DvtDiagramPoint$$$$Init$($x$$90$$, $y$$70$$) {
  this.x = null === $x$$90$$ || isNaN($x$$90$$) ? 0 : $x$$90$$;
  this.y = null === $y$$70$$ || isNaN($y$$70$$) ? 0 : $y$$70$$;
};
function $DvtDiagramRectangle$$($x$$91$$, $y$$71$$, $w$$16$$, $h$$12$$) {
  this.Init($x$$91$$, $y$$71$$, $w$$16$$, $h$$12$$);
}
$goog$exportPath_$$("DvtDiagramRectangle", $DvtDiagramRectangle$$);
dvt.$Obj$.$createSubclass$($DvtDiagramRectangle$$, dvt.$Obj$, "DvtDiagramRectangle");
$DvtDiagramRectangle$$.prototype.Init = function $$DvtDiagramRectangle$$$$Init$($x$$92$$, $y$$72$$, $w$$17$$, $h$$13$$) {
  this.x = null === $x$$92$$ || isNaN($x$$92$$) ? 0 : $x$$92$$;
  this.y = null === $y$$72$$ || isNaN($y$$72$$) ? 0 : $y$$72$$;
  this.w = null === $w$$17$$ || isNaN($w$$17$$) ? 0 : $w$$17$$;
  this.h = null === $h$$13$$ || isNaN($h$$13$$) ? 0 : $h$$13$$;
};
dvt.$ShapeAnimationUtils$ = {};
dvt.$Obj$.$createSubclass$(dvt.$ShapeAnimationUtils$, dvt.$Obj$);
dvt.$ShapeAnimationUtils$.$transitionShapes$ = function $dvt$$ShapeAnimationUtils$$$transitionShapes$$($oldShape$$, $newShape$$, $anim$$11$$) {
  $oldShape$$ && $newShape$$ && $oldShape$$ instanceof $DvtText$$ && $newShape$$ instanceof $DvtText$$ ? dvt.$ShapeAnimationUtils$.$TransitionTextToText$($oldShape$$, $newShape$$, $anim$$11$$) : $oldShape$$ && $newShape$$ && $oldShape$$ instanceof dvt.$Shape$ && $newShape$$ instanceof dvt.$Shape$ ? dvt.$ShapeAnimationUtils$.$TransitionShapeToShapeUsingPaths$($oldShape$$, $newShape$$, $anim$$11$$) : $oldShape$$ && $newShape$$ && dvt.$ShapeAnimationUtils$.$TransitionShapeToShape$($oldShape$$, $newShape$$, 
  $anim$$11$$);
};
dvt.$ShapeAnimationUtils$.$TransitionTextToText$ = function $dvt$$ShapeAnimationUtils$$$TransitionTextToText$$($oldShape$$1$$, $newShape$$1$$, $anim$$12$$) {
  dvt.$ShapeAnimationUtils$.$_transitionMatrix$($oldShape$$1$$, $newShape$$1$$, $anim$$12$$);
  var $oldFill$$1$$ = $oldShape$$1$$.$getFill$ ? $oldShape$$1$$.$getFill$() : null, $newFill$$2$$ = $newShape$$1$$.$getFill$ ? $newShape$$1$$.$getFill$() : null;
  $anim$$12$$ && ($oldShape$$1$$.$getX$() != $newShape$$1$$.$getX$() && $anim$$12$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $oldShape$$1$$, $oldShape$$1$$.$getX$, $oldShape$$1$$.$setX$, $newShape$$1$$.$getX$()), $oldShape$$1$$.$getY$() != $newShape$$1$$.$getY$() && $anim$$12$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $oldShape$$1$$, $oldShape$$1$$.$getY$, $oldShape$$1$$.$setY$, $newShape$$1$$.$getY$()), $oldFill$$1$$ && $newFill$$2$$ && $oldFill$$1$$ instanceof dvt.$SolidFill$ && $newFill$$2$$ instanceof 
  dvt.$SolidFill$ && $oldFill$$1$$.$getColor$() != $newFill$$2$$.$getColor$() && $anim$$12$$.$addProp$(dvt.$Animator$.$TYPE_FILL$, $oldShape$$1$$, $oldShape$$1$$.$getFill$, $oldShape$$1$$.$setFill$, $newFill$$2$$));
};
dvt.$ShapeAnimationUtils$.$TransitionShapeToShape$ = function $dvt$$ShapeAnimationUtils$$$TransitionShapeToShape$$($oldShape$$2$$, $deltaSx_newShape$$2$$, $anim$$13$$) {
  var $newMat$$4_oldStageDims$$ = $oldShape$$2$$.$getDimensions$($oldShape$$2$$.$getCtx$().$_stage$), $deltaMat_newStageDims$$ = $deltaSx_newShape$$2$$.$getDimensions$($deltaSx_newShape$$2$$.$getCtx$().$_stage$), $oldFill$$2$$ = $oldShape$$2$$.$getFill$ ? $oldShape$$2$$.$getFill$() : null, $newFill$$3$$ = $deltaSx_newShape$$2$$.$getFill$ ? $deltaSx_newShape$$2$$.$getFill$() : null, $oldStroke$$3$$ = $oldShape$$2$$.$getStroke$ ? $oldShape$$2$$.$getStroke$() : null, $newStroke$$3$$ = $deltaSx_newShape$$2$$.$getStroke$ ? 
  $deltaSx_newShape$$2$$.$getStroke$() : null;
  if ($anim$$13$$) {
    var $deltaSy$$ = $deltaSx_newShape$$2$$ = 1;
    $newMat$$4_oldStageDims$$.$w$ != $deltaMat_newStageDims$$.$w$ && ($deltaSx_newShape$$2$$ = $deltaMat_newStageDims$$.$w$ / $newMat$$4_oldStageDims$$.$w$);
    $newMat$$4_oldStageDims$$.$h$ != $deltaMat_newStageDims$$.$h$ && ($deltaSy$$ = $deltaMat_newStageDims$$.$h$ / $newMat$$4_oldStageDims$$.$h$);
    var $deltaTx$$ = 0, $deltaTy$$ = 0;
    $newMat$$4_oldStageDims$$.x != $deltaMat_newStageDims$$.x && ($deltaTx$$ = $deltaMat_newStageDims$$.x - $newMat$$4_oldStageDims$$.x);
    $newMat$$4_oldStageDims$$.y != $deltaMat_newStageDims$$.y && ($deltaTy$$ = $deltaMat_newStageDims$$.y - $newMat$$4_oldStageDims$$.y);
    $oldFill$$2$$ && $newFill$$3$$ && $oldFill$$2$$ instanceof dvt.$SolidFill$ && $newFill$$3$$ instanceof dvt.$SolidFill$ && $oldFill$$2$$.$getColor$() != $newFill$$3$$.$getColor$() && $anim$$13$$.$addProp$(dvt.$Animator$.$TYPE_FILL$, $oldShape$$2$$, $oldShape$$2$$.$getFill$, $oldShape$$2$$.$setFill$, $newFill$$3$$);
    $oldStroke$$3$$ && $newStroke$$3$$ && $oldStroke$$3$$ instanceof dvt.$SolidStroke$ && $newStroke$$3$$ instanceof dvt.$SolidStroke$ && $oldStroke$$3$$.$getColor$() != $newStroke$$3$$.$getColor$() && $anim$$13$$.$addProp$(dvt.$Animator$.$TYPE_STROKE$, $oldShape$$2$$, $oldShape$$2$$.$getStroke$, $oldShape$$2$$.$setStroke$, $newStroke$$3$$);
    if (0 != $deltaTx$$ || 0 != $deltaTy$$ || 1 != $deltaSx_newShape$$2$$ || 1 != $deltaSy$$) {
      $deltaMat_newStageDims$$ = new dvt.$Matrix$, $deltaMat_newStageDims$$.translate(-$newMat$$4_oldStageDims$$.x, -$newMat$$4_oldStageDims$$.y), $deltaMat_newStageDims$$.scale($deltaSx_newShape$$2$$, $deltaSy$$), $deltaMat_newStageDims$$.translate($newMat$$4_oldStageDims$$.x, $newMat$$4_oldStageDims$$.y), $deltaMat_newStageDims$$.translate($deltaTx$$, $deltaTy$$), $newMat$$4_oldStageDims$$ = $oldShape$$2$$.$getMatrix$().clone(), $newMat$$4_oldStageDims$$.concat($deltaMat_newStageDims$$), $anim$$13$$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, 
      $oldShape$$2$$, $oldShape$$2$$.$getMatrix$, $oldShape$$2$$.$setMatrix$, $newMat$$4_oldStageDims$$);
    }
  }
};
dvt.$ShapeAnimationUtils$.$_transitionMatrix$ = function $dvt$$ShapeAnimationUtils$$$_transitionMatrix$$($oldShape$$3$$, $newMatrix_newShape$$3$$, $anim$$14$$) {
  if ($anim$$14$$) {
    var $oldMatrix_parentMat$$ = dvt.$ShapeAnimationUtils$.$_getCurrentTransformationMatrix$($oldShape$$3$$);
    $newMatrix_newShape$$3$$ = dvt.$ShapeAnimationUtils$.$_getCurrentTransformationMatrix$($newMatrix_newShape$$3$$);
    $oldMatrix_parentMat$$.$equals$($newMatrix_newShape$$3$$) || ($oldMatrix_parentMat$$ = dvt.$ShapeAnimationUtils$.$_getCurrentTransformationMatrix$($oldShape$$3$$.getParent()), $oldMatrix_parentMat$$.$invert$(), $newMatrix_newShape$$3$$.concat($oldMatrix_parentMat$$), $anim$$14$$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, $oldShape$$3$$, $oldShape$$3$$.$getMatrix$, $oldShape$$3$$.$setMatrix$, $newMatrix_newShape$$3$$));
  }
};
dvt.$ShapeAnimationUtils$.$_getCurrentTransformationMatrix$ = function $dvt$$ShapeAnimationUtils$$$_getCurrentTransformationMatrix$$($ctm_displayable$$15_parent$$51$$) {
  var $arDisp$$ = [$ctm_displayable$$15_parent$$51$$];
  for ($ctm_displayable$$15_parent$$51$$ = $ctm_displayable$$15_parent$$51$$.getParent();$ctm_displayable$$15_parent$$51$$;) {
    $arDisp$$.push($ctm_displayable$$15_parent$$51$$), $ctm_displayable$$15_parent$$51$$ = $ctm_displayable$$15_parent$$51$$.getParent();
  }
  $ctm_displayable$$15_parent$$51$$ = new dvt.$Matrix$;
  for (var $i$$247$$ = 0;$i$$247$$ < $arDisp$$.length;$i$$247$$++) {
    $ctm_displayable$$15_parent$$51$$.concat($arDisp$$[$i$$247$$].$getMatrix$());
  }
  return $ctm_displayable$$15_parent$$51$$;
};
dvt.$ShapeAnimationUtils$.$TransitionShapeToShapeUsingPaths$ = function $dvt$$ShapeAnimationUtils$$$TransitionShapeToShapeUsingPaths$$($oldShape$$4$$, $newCTM_newShape$$4$$, $anim$$15$$) {
  var $oldFill$$3_oldPath$$ = dvt.$ShapeAnimationUtils$.$_convertShapeToPath$($oldShape$$4$$), $newPath$$ = dvt.$ShapeAnimationUtils$.$_convertShapeToPath$($newCTM_newShape$$4$$);
  if ($oldFill$$3_oldPath$$ && $newPath$$) {
    $oldShape$$4$$ != $oldFill$$3_oldPath$$ && (dvt.$ShapeAnimationUtils$.$_replaceShape$($oldShape$$4$$, $oldFill$$3_oldPath$$), $oldShape$$4$$ = $oldFill$$3_oldPath$$);
    var $oldFill$$3_oldPath$$ = $oldShape$$4$$.$getFill$ ? $oldShape$$4$$.$getFill$() : null, $newFill$$4$$ = $newCTM_newShape$$4$$.$getFill$ ? $newCTM_newShape$$4$$.$getFill$() : null;
    $anim$$15$$ && ($oldFill$$3_oldPath$$ && $newFill$$4$$ && $oldFill$$3_oldPath$$ instanceof dvt.$SolidFill$ && $newFill$$4$$ instanceof dvt.$SolidFill$ && $oldFill$$3_oldPath$$.$getColor$() != $newFill$$4$$.$getColor$() && $anim$$15$$.$addProp$(dvt.$Animator$.$TYPE_FILL$, $oldShape$$4$$, $oldShape$$4$$.$getFill$, $oldShape$$4$$.$setFill$, $newFill$$4$$), $newCTM_newShape$$4$$ = dvt.$ShapeAnimationUtils$.$_getCurrentTransformationMatrix$($newCTM_newShape$$4$$), dvt.$ShapeAnimationUtils$.$_assimilatePaths$($oldShape$$4$$, 
    $newPath$$, $anim$$15$$, $newCTM_newShape$$4$$));
  } else {
    dvt.$ShapeAnimationUtils$.$TransitionShapeToShape$($oldShape$$4$$, $newCTM_newShape$$4$$, $anim$$15$$);
  }
};
dvt.$ShapeAnimationUtils$.$_convertShapeToPath$ = function $dvt$$ShapeAnimationUtils$$$_convertShapeToPath$$($shape$$31$$) {
  if ($shape$$31$$ instanceof dvt.$Path$) {
    return $shape$$31$$;
  }
  var $points$$9$$ = dvt.$ShapeAnimationUtils$.$_getPathPoints$($shape$$31$$);
  return $points$$9$$ ? new dvt.$Path$($shape$$31$$.$getCtx$(), $points$$9$$) : null;
};
dvt.$ShapeAnimationUtils$.$_replaceShape$ = function $dvt$$ShapeAnimationUtils$$$_replaceShape$$($oldShape$$5$$, $newShape$$5$$) {
  var $fill$$19_numChildren$$12$$ = $oldShape$$5$$.$getFill$(), $i$$248_stroke$$22$$ = $oldShape$$5$$.$getStroke$(), $mat$$6$$ = $oldShape$$5$$.$getMatrix$(), $childIndex$$5$$ = $oldShape$$5$$.getParent().$getChildIndex$($oldShape$$5$$);
  $oldShape$$5$$.getParent().$addChildAt$($newShape$$5$$, $childIndex$$5$$);
  $oldShape$$5$$.$setFill$(null);
  $oldShape$$5$$.$setStroke$(null);
  $oldShape$$5$$.$setMatrix$(null);
  $newShape$$5$$.$setFill$($fill$$19_numChildren$$12$$);
  $newShape$$5$$.$setStroke$($i$$248_stroke$$22$$);
  $newShape$$5$$.$setMatrix$($mat$$6$$);
  $fill$$19_numChildren$$12$$ = $oldShape$$5$$.$getNumChildren$();
  for ($i$$248_stroke$$22$$ = 0;$i$$248_stroke$$22$$ < $fill$$19_numChildren$$12$$;$i$$248_stroke$$22$$++) {
    $newShape$$5$$.$addChild$($oldShape$$5$$.$getChildAt$(0));
  }
  $oldShape$$5$$.getParent().removeChild($oldShape$$5$$);
  $oldShape$$5$$.$destroy$ && $oldShape$$5$$.$destroy$();
};
dvt.$ShapeAnimationUtils$.$_getPathPoints$ = function $dvt$$ShapeAnimationUtils$$$_getPathPoints$$($angleExtent_cpa_shape$$32$$) {
  var $arPoints$$2_cbx$$;
  if ($angleExtent_cpa_shape$$32$$ instanceof dvt.Rect) {
    var $points$$10_rx$$5_sa$$1$$ = $angleExtent_cpa_shape$$32$$.$getRx$(), $ae_ry$$1$$ = $angleExtent_cpa_shape$$32$$.$getRy$(), $startAngle$$3_x$$93$$ = $angleExtent_cpa_shape$$32$$.$getX$(), $i$$249_y$$73$$ = $angleExtent_cpa_shape$$32$$.$getY$(), $controlPoint1_startPoint_w$$18$$ = $angleExtent_cpa_shape$$32$$.getWidth(), $controlPoint2_h$$14$$ = $angleExtent_cpa_shape$$32$$.getHeight();
    if ($points$$10_rx$$5_sa$$1$$ && $ae_ry$$1$$) {
      $angleExtent_cpa_shape$$32$$ = .5 * Math.PI;
      var $ax_cpb_pointA$$ = Math.cos(.5 * $angleExtent_cpa_shape$$32$$), $ay$$ = Math.sin(.5 * $angleExtent_cpa_shape$$32$$), $bx_pointB$$ = $ax_cpb_pointA$$, $by$$ = -$ay$$, $cax_pointCA$$ = (4 - $ax_cpb_pointA$$) / 3, $cay_endPoint_mat$$7$$ = (1 - $ax_cpb_pointA$$) * (3 - $ax_cpb_pointA$$) / (3 * $ay$$);
      $arPoints$$2_cbx$$ = $cax_pointCA$$;
      var $cby_pointCB$$ = -$cay_endPoint_mat$$7$$, $ax_cpb_pointA$$ = new dvt.$Point$($ax_cpb_pointA$$, $ay$$), $bx_pointB$$ = new dvt.$Point$($bx_pointB$$, $by$$), $cax_pointCA$$ = new dvt.$Point$($cax_pointCA$$, $cay_endPoint_mat$$7$$), $cby_pointCB$$ = new dvt.$Point$($arPoints$$2_cbx$$, $cby_pointCB$$), $cay_endPoint_mat$$7$$ = new dvt.$Matrix$;
      $cay_endPoint_mat$$7$$.rotate(.5 * $angleExtent_cpa_shape$$32$$);
      $cay_endPoint_mat$$7$$.scale($points$$10_rx$$5_sa$$1$$, $ae_ry$$1$$);
      $angleExtent_cpa_shape$$32$$ = $cay_endPoint_mat$$7$$.$transformPoint$($cax_pointCA$$);
      var $ax_cpb_pointA$$ = $cay_endPoint_mat$$7$$.$transformPoint$($cby_pointCB$$), $cx$$4$$ = $startAngle$$3_x$$93$$ + $controlPoint1_startPoint_w$$18$$ - $points$$10_rx$$5_sa$$1$$, $cy$$5$$ = $i$$249_y$$73$$ + $ae_ry$$1$$;
      $arPoints$$2_cbx$$ = ["M", $startAngle$$3_x$$93$$ + $points$$10_rx$$5_sa$$1$$, $i$$249_y$$73$$, "L", $startAngle$$3_x$$93$$ + $controlPoint1_startPoint_w$$18$$ - $points$$10_rx$$5_sa$$1$$, $i$$249_y$$73$$, "C", $cx$$4$$ + $angleExtent_cpa_shape$$32$$.x, $cy$$5$$ - $angleExtent_cpa_shape$$32$$.y, $cx$$4$$ + $ax_cpb_pointA$$.x, $cy$$5$$ - $ax_cpb_pointA$$.y, $startAngle$$3_x$$93$$ + $controlPoint1_startPoint_w$$18$$, $i$$249_y$$73$$ + $ae_ry$$1$$];
      $cy$$5$$ = $i$$249_y$$73$$ + $controlPoint2_h$$14$$ - $ae_ry$$1$$;
      $arPoints$$2_cbx$$.push("L", $startAngle$$3_x$$93$$ + $controlPoint1_startPoint_w$$18$$, $i$$249_y$$73$$ + $controlPoint2_h$$14$$ - $ae_ry$$1$$, "C", $cx$$4$$ + $ax_cpb_pointA$$.x, $cy$$5$$ + $ax_cpb_pointA$$.y, $cx$$4$$ + $angleExtent_cpa_shape$$32$$.x, $cy$$5$$ + $angleExtent_cpa_shape$$32$$.y, $startAngle$$3_x$$93$$ + $controlPoint1_startPoint_w$$18$$ - $points$$10_rx$$5_sa$$1$$, $i$$249_y$$73$$ + $controlPoint2_h$$14$$);
      $cx$$4$$ = $startAngle$$3_x$$93$$ + $points$$10_rx$$5_sa$$1$$;
      $arPoints$$2_cbx$$.push("L", $startAngle$$3_x$$93$$ + $points$$10_rx$$5_sa$$1$$, $i$$249_y$$73$$ + $controlPoint2_h$$14$$, "C", $cx$$4$$ - $angleExtent_cpa_shape$$32$$.x, $cy$$5$$ + $angleExtent_cpa_shape$$32$$.y, $cx$$4$$ - $ax_cpb_pointA$$.x, $cy$$5$$ + $ax_cpb_pointA$$.y, $startAngle$$3_x$$93$$, $i$$249_y$$73$$ + $controlPoint2_h$$14$$ - $ae_ry$$1$$);
      $cy$$5$$ = $i$$249_y$$73$$ + $ae_ry$$1$$;
      $arPoints$$2_cbx$$.push("L", $startAngle$$3_x$$93$$, $i$$249_y$$73$$ + $ae_ry$$1$$, "C", $cx$$4$$ - $ax_cpb_pointA$$.x, $cy$$5$$ - $ax_cpb_pointA$$.y, $cx$$4$$ - $angleExtent_cpa_shape$$32$$.x, $cy$$5$$ - $angleExtent_cpa_shape$$32$$.y, $startAngle$$3_x$$93$$ + $points$$10_rx$$5_sa$$1$$, $i$$249_y$$73$$, "Z");
    } else {
      $arPoints$$2_cbx$$ = ["M", $startAngle$$3_x$$93$$, $i$$249_y$$73$$, "L", $startAngle$$3_x$$93$$ + $controlPoint1_startPoint_w$$18$$, $i$$249_y$$73$$, "L", $startAngle$$3_x$$93$$ + $controlPoint1_startPoint_w$$18$$, $i$$249_y$$73$$ + $controlPoint2_h$$14$$, "L", $startAngle$$3_x$$93$$, $i$$249_y$$73$$ + $controlPoint2_h$$14$$, "Z"];
    }
  } else {
    if ($angleExtent_cpa_shape$$32$$ instanceof dvt.$Polyline$ || $angleExtent_cpa_shape$$32$$ instanceof dvt.$Polygon$) {
      if ($points$$10_rx$$5_sa$$1$$ = $angleExtent_cpa_shape$$32$$.$getPoints$()) {
        $arPoints$$2_cbx$$ = [];
        for ($i$$249_y$$73$$ = 0;$i$$249_y$$73$$ < $points$$10_rx$$5_sa$$1$$.length;$i$$249_y$$73$$ += 2) {
          0 == $i$$249_y$$73$$ ? $arPoints$$2_cbx$$.push("M", $points$$10_rx$$5_sa$$1$$[$i$$249_y$$73$$], $points$$10_rx$$5_sa$$1$$[$i$$249_y$$73$$ + 1]) : $arPoints$$2_cbx$$.push("L", $points$$10_rx$$5_sa$$1$$[$i$$249_y$$73$$], $points$$10_rx$$5_sa$$1$$[$i$$249_y$$73$$ + 1]);
        }
        $angleExtent_cpa_shape$$32$$ instanceof dvt.$Polygon$ && $arPoints$$2_cbx$$.push("Z");
      }
    } else {
      if ($angleExtent_cpa_shape$$32$$ instanceof dvt.$Line$) {
        $arPoints$$2_cbx$$ = ["M", $angleExtent_cpa_shape$$32$$.$getX1$(), $angleExtent_cpa_shape$$32$$.$getY1$(), "L", $angleExtent_cpa_shape$$32$$.$getX2$(), $angleExtent_cpa_shape$$32$$.$getY2$()];
      } else {
        if ($angleExtent_cpa_shape$$32$$ instanceof dvt.$Circle$) {
          $cx$$4$$ = $angleExtent_cpa_shape$$32$$.$getCx$();
          $cy$$5$$ = $angleExtent_cpa_shape$$32$$.$getCy$();
          $angleExtent_cpa_shape$$32$$ instanceof dvt.$Oval$ ? ($points$$10_rx$$5_sa$$1$$ = $angleExtent_cpa_shape$$32$$.$getRx$(), $ae_ry$$1$$ = $angleExtent_cpa_shape$$32$$.$getRy$()) : $ae_ry$$1$$ = $points$$10_rx$$5_sa$$1$$ = $angleExtent_cpa_shape$$32$$.$getRadius$();
          $startAngle$$3_x$$93$$ = -.5 * Math.PI;
          $angleExtent_cpa_shape$$32$$ = 2 * Math.PI / 4;
          $ax_cpb_pointA$$ = Math.cos(.5 * $angleExtent_cpa_shape$$32$$);
          $ay$$ = Math.sin(.5 * $angleExtent_cpa_shape$$32$$);
          $bx_pointB$$ = $ax_cpb_pointA$$;
          $by$$ = -$ay$$;
          $cax_pointCA$$ = (4 - $ax_cpb_pointA$$) / 3;
          $cay_endPoint_mat$$7$$ = (1 - $ax_cpb_pointA$$) * (3 - $ax_cpb_pointA$$) / (3 * $ay$$);
          $arPoints$$2_cbx$$ = $cax_pointCA$$;
          $cby_pointCB$$ = -$cay_endPoint_mat$$7$$;
          $ax_cpb_pointA$$ = new dvt.$Point$($ax_cpb_pointA$$, $ay$$);
          $bx_pointB$$ = new dvt.$Point$($bx_pointB$$, $by$$);
          $cax_pointCA$$ = new dvt.$Point$($cax_pointCA$$, $cay_endPoint_mat$$7$$);
          $cby_pointCB$$ = new dvt.$Point$($arPoints$$2_cbx$$, $cby_pointCB$$);
          $arPoints$$2_cbx$$ = [];
          for ($i$$249_y$$73$$ = 0;4 > $i$$249_y$$73$$;$i$$249_y$$73$$++) {
            $cay_endPoint_mat$$7$$ = new dvt.$Matrix$, $cay_endPoint_mat$$7$$.rotate($startAngle$$3_x$$93$$ + $i$$249_y$$73$$ * $angleExtent_cpa_shape$$32$$), $cay_endPoint_mat$$7$$.scale($points$$10_rx$$5_sa$$1$$, $ae_ry$$1$$), 0 == $i$$249_y$$73$$ && ($controlPoint1_startPoint_w$$18$$ = $cay_endPoint_mat$$7$$.$transformPoint$($bx_pointB$$), $arPoints$$2_cbx$$.push("M", $cx$$4$$ + $controlPoint1_startPoint_w$$18$$.x, $cy$$5$$ + $controlPoint1_startPoint_w$$18$$.y)), $controlPoint1_startPoint_w$$18$$ = 
            $cay_endPoint_mat$$7$$.$transformPoint$($cby_pointCB$$), $controlPoint2_h$$14$$ = $cay_endPoint_mat$$7$$.$transformPoint$($cax_pointCA$$), $cay_endPoint_mat$$7$$ = $cay_endPoint_mat$$7$$.$transformPoint$($ax_cpb_pointA$$), $arPoints$$2_cbx$$.push("C", $cx$$4$$ + $controlPoint1_startPoint_w$$18$$.x, $cy$$5$$ + $controlPoint1_startPoint_w$$18$$.y, $cx$$4$$ + $controlPoint2_h$$14$$.x, $cy$$5$$ + $controlPoint2_h$$14$$.y, $cx$$4$$ + $cay_endPoint_mat$$7$$.x, $cy$$5$$ + $cay_endPoint_mat$$7$$.y)
            ;
          }
          $arPoints$$2_cbx$$.push("Z");
        } else {
          $angleExtent_cpa_shape$$32$$ instanceof dvt.$Arc$ && ($points$$10_rx$$5_sa$$1$$ = $angleExtent_cpa_shape$$32$$.$getAngleStart$() * dvt.Math.$RADS_PER_DEGREE$, $ae_ry$$1$$ = $angleExtent_cpa_shape$$32$$.$getAngleExtent$() * dvt.Math.$RADS_PER_DEGREE$, $arPoints$$2_cbx$$ = ["M", $angleExtent_cpa_shape$$32$$.$getCx$() + $angleExtent_cpa_shape$$32$$.$getRx$() * Math.cos($points$$10_rx$$5_sa$$1$$), $angleExtent_cpa_shape$$32$$.$getCy$() - $angleExtent_cpa_shape$$32$$.$getRy$() * Math.sin($points$$10_rx$$5_sa$$1$$), 
          "A", $angleExtent_cpa_shape$$32$$.$getRx$(), $angleExtent_cpa_shape$$32$$.$getRy$(), "0", 180 < Math.abs($angleExtent_cpa_shape$$32$$.$getAngleExtent$()) ? "1" : "0", 0 < $angleExtent_cpa_shape$$32$$.$getAngleExtent$() ? "0" : "1", $angleExtent_cpa_shape$$32$$.$getCx$() + $angleExtent_cpa_shape$$32$$.$getRx$() * Math.cos($points$$10_rx$$5_sa$$1$$ + $ae_ry$$1$$), $angleExtent_cpa_shape$$32$$.$getCy$() - $angleExtent_cpa_shape$$32$$.$getRy$() * Math.sin($points$$10_rx$$5_sa$$1$$ + $ae_ry$$1$$)], 
          $angleExtent_cpa_shape$$32$$.$_ct$ === dvt.$Arc$.$CHORD$ ? $arPoints$$2_cbx$$.push("Z") : $angleExtent_cpa_shape$$32$$.$_ct$ === dvt.$Arc$.$PIE$ && $arPoints$$2_cbx$$.push("L", $angleExtent_cpa_shape$$32$$.$getCx$(), $angleExtent_cpa_shape$$32$$.$getCy$(), "Z"));
        }
      }
    }
  }
  return $arPoints$$2_cbx$$;
};
dvt.$ShapeAnimationUtils$.$_getNextCommandIndex$ = function $dvt$$ShapeAnimationUtils$$$_getNextCommandIndex$$($arPoints$$3$$, $index$$128$$) {
  for (;$index$$128$$ < $arPoints$$3$$.length && !isNaN($arPoints$$3$$[$index$$128$$]);) {
    $index$$128$$++;
  }
  return $index$$128$$;
};
dvt.$ShapeAnimationUtils$.$_getPrevCommandIndex$ = function $dvt$$ShapeAnimationUtils$$$_getPrevCommandIndex$$($arPoints$$4$$, $index$$129$$) {
  for (;-1 < $index$$129$$ && !isNaN($arPoints$$4$$[$index$$129$$]);) {
    $index$$129$$--;
  }
  return $index$$129$$;
};
dvt.$ShapeAnimationUtils$.$_countCommands$ = function $dvt$$ShapeAnimationUtils$$$_countCommands$$($arPoints$$5$$) {
  for (var $count$$15$$ = 0, $i$$250$$ = 0;$i$$250$$ < $arPoints$$5$$.length;$i$$250$$++) {
    isNaN($arPoints$$5$$[$i$$250$$]) && $count$$15$$++;
  }
  return $count$$15$$;
};
dvt.$ShapeAnimationUtils$.$_makePathsSameLength$ = function $dvt$$ShapeAnimationUtils$$$_makePathsSameLength$$($oldPoints$$6$$, $newPoints$$4$$) {
  var $oldCommandCount_shortPathPoints$$ = dvt.$ShapeAnimationUtils$.$_countCommands$($oldPoints$$6$$), $insertInterval_newCommandCount$$ = dvt.$ShapeAnimationUtils$.$_countCommands$($newPoints$$4$$);
  if ($oldCommandCount_shortPathPoints$$ != $insertInterval_newCommandCount$$) {
    var $diffCommandCount$$ = 0, $commandsPerInsert_shortCommandCount$$ = 0;
    $oldCommandCount_shortPathPoints$$ > $insertInterval_newCommandCount$$ ? ($diffCommandCount$$ = $oldCommandCount_shortPathPoints$$ - $insertInterval_newCommandCount$$, $commandsPerInsert_shortCommandCount$$ = $insertInterval_newCommandCount$$, $oldCommandCount_shortPathPoints$$ = $newPoints$$4$$) : ($diffCommandCount$$ = $insertInterval_newCommandCount$$ - $oldCommandCount_shortPathPoints$$, $commandsPerInsert_shortCommandCount$$ = $oldCommandCount_shortPathPoints$$, $oldCommandCount_shortPathPoints$$ = 
    $oldPoints$$6$$);
    $insertInterval_newCommandCount$$ = Math.floor($commandsPerInsert_shortCommandCount$$ / $diffCommandCount$$);
    1 > $insertInterval_newCommandCount$$ && ($insertInterval_newCommandCount$$ = 1);
    $commandsPerInsert_shortCommandCount$$ = Math.floor($diffCommandCount$$ / $commandsPerInsert_shortCommandCount$$);
    1 > $commandsPerInsert_shortCommandCount$$ && ($commandsPerInsert_shortCommandCount$$ = 1);
    for (var $commandCount$$ = -1, $i$$251$$ = 0;$i$$251$$ < $oldCommandCount_shortPathPoints$$.length;$i$$251$$++) {
      if (isNaN($oldCommandCount_shortPathPoints$$[$i$$251$$])) {
        if ($commandCount$$ == $insertInterval_newCommandCount$$) {
          for (var $j$$40$$ = $commandCount$$ = 0;$j$$40$$ < $commandsPerInsert_shortCommandCount$$;$j$$40$$++) {
            $oldCommandCount_shortPathPoints$$.splice($i$$251$$++, 0, "tmp"), $diffCommandCount$$--;
          }
        }
        $commandCount$$++;
      }
    }
    for ($i$$251$$ = 0;$i$$251$$ < $diffCommandCount$$;$i$$251$$++) {
      "Z" == $oldCommandCount_shortPathPoints$$[$oldCommandCount_shortPathPoints$$.length - 1] ? $oldCommandCount_shortPathPoints$$.splice($oldCommandCount_shortPathPoints$$.length - 1, 0, "tmp") : $oldCommandCount_shortPathPoints$$.push("tmp");
    }
  }
};
dvt.$ShapeAnimationUtils$.$_modifyClosePath$ = function $dvt$$ShapeAnimationUtils$$$_modifyClosePath$$($points$$11$$) {
  return 2 < $points$$11$$.length && "Z" == $points$$11$$[$points$$11$$.length - 1] ? ($points$$11$$.splice($points$$11$$.length - 1, 1), $points$$11$$.push("L", $points$$11$$[1], $points$$11$$[2]), !0) : !1;
};
dvt.$ShapeAnimationUtils$.$_assimilatePaths$ = function $dvt$$ShapeAnimationUtils$$$_assimilatePaths$$($oldShape$$6$$, $newShape$$6_obj$$113$$, $anim$$16$$, $newCTM$$1$$) {
  $newShape$$6_obj$$113$$ = dvt.$ShapeAnimationUtils$.$getAssimilatedPaths$($oldShape$$6$$.$getCommands$(), $newShape$$6_obj$$113$$.$getCommands$());
  var $oldMatrix$$1$$ = dvt.$ShapeAnimationUtils$.$_getCurrentTransformationMatrix$($oldShape$$6$$);
  $oldMatrix$$1$$ && dvt.$ShapeAnimationUtils$.$_transformPathCoords$($newShape$$6_obj$$113$$.$updatedOldPath$, $oldMatrix$$1$$);
  $oldShape$$6$$.$setMatrix$(null);
  $newCTM$$1$$ && dvt.$ShapeAnimationUtils$.$_transformPathCoords$($newShape$$6_obj$$113$$.$updatedNewPath$, $newCTM$$1$$);
  $oldShape$$6$$.$setCommands$($newShape$$6_obj$$113$$.$updatedOldPath$);
  $anim$$16$$.$addProp$(dvt.$Animator$.$TYPE_PATH$, $oldShape$$6$$, $oldShape$$6$$.$getCommands$, $oldShape$$6$$.$setCommands$, $newShape$$6_obj$$113$$.$updatedNewPath$);
};
dvt.$ShapeAnimationUtils$.$getAssimilatedPaths$ = function $dvt$$ShapeAnimationUtils$$$getAssimilatedPaths$$($oldPathCommands$$, $newPathCommands$$) {
  var $oldPoints$$7$$ = dvt.$ArrayUtils$.copy($oldPathCommands$$), $newPoints$$5$$ = dvt.$ArrayUtils$.copy($newPathCommands$$), $updatedNewPoints$$ = [], $updatedOldPoints$$ = [];
  dvt.$ShapeAnimationUtils$.$_makeImplicitCommandsExplicit$($oldPoints$$7$$);
  dvt.$ShapeAnimationUtils$.$_makeImplicitCommandsExplicit$($newPoints$$5$$);
  dvt.$ShapeAnimationUtils$.$_makeRelativeCommandsAbsolute$($oldPoints$$7$$);
  dvt.$ShapeAnimationUtils$.$_makeRelativeCommandsAbsolute$($newPoints$$5$$);
  dvt.$ShapeAnimationUtils$.$_makeShorthandCommandsVerbose$($oldPoints$$7$$);
  dvt.$ShapeAnimationUtils$.$_makeShorthandCommandsVerbose$($newPoints$$5$$);
  dvt.$ShapeAnimationUtils$.$_makeSubpathsExplicit$($oldPoints$$7$$);
  dvt.$ShapeAnimationUtils$.$_makeSubpathsExplicit$($newPoints$$5$$);
  var $oldSubpaths$$ = dvt.$ShapeAnimationUtils$.$_breakIntoSubpaths$($oldPoints$$7$$), $newSubpaths$$ = dvt.$ShapeAnimationUtils$.$_breakIntoSubpaths$($newPoints$$5$$);
  dvt.$ShapeAnimationUtils$.$_sortSubpaths$($oldSubpaths$$);
  dvt.$ShapeAnimationUtils$.$_sortSubpaths$($newSubpaths$$);
  for (var $i$$252$$ = 0;$i$$252$$ < Math.max($oldSubpaths$$.length, $newSubpaths$$.length);$i$$252$$++) {
    var $subpathUpdatedOldPoints$$ = [], $subpathUpdatedNewPoints$$ = [], $subpathOldPoints$$ = null, $subpathNewPoints$$ = null;
    $i$$252$$ < $oldSubpaths$$.length ? $subpathOldPoints$$ = $oldSubpaths$$[$i$$252$$] : ($subpathOldPoints$$ = ["M", $oldPoints$$7$$[1], $oldPoints$$7$$[2]], "Z" == $newSubpaths$$[$i$$252$$][$newSubpaths$$[$i$$252$$].length - 1] && $subpathOldPoints$$.push("Z"));
    $i$$252$$ < $newSubpaths$$.length ? $subpathNewPoints$$ = $newSubpaths$$[$i$$252$$] : ($subpathNewPoints$$ = ["M", $newPoints$$5$$[1], $newPoints$$5$$[2]], "Z" == $oldSubpaths$$[$i$$252$$][$oldSubpaths$$[$i$$252$$].length - 1] && $subpathNewPoints$$.push("Z"));
    dvt.$ShapeAnimationUtils$.$_assimilateSubpaths$($subpathOldPoints$$, $subpathNewPoints$$, $subpathUpdatedOldPoints$$, $subpathUpdatedNewPoints$$);
    $updatedOldPoints$$ = $updatedOldPoints$$.concat($subpathUpdatedOldPoints$$);
    $updatedNewPoints$$ = $updatedNewPoints$$.concat($subpathUpdatedNewPoints$$);
  }
  return {$updatedOldPath$:$updatedOldPoints$$, $updatedNewPath$:$updatedNewPoints$$};
};
dvt.$ShapeAnimationUtils$.$_breakIntoSubpaths$ = function $dvt$$ShapeAnimationUtils$$$_breakIntoSubpaths$$($points$$12$$) {
  for (var $ar$$3$$ = [], $startIndex$$6$$ = 0, $i$$253$$ = 1;$i$$253$$ < $points$$12$$.length;$i$$253$$++) {
    if ("M" == $points$$12$$[$i$$253$$] || "m" == $points$$12$$[$i$$253$$]) {
      $ar$$3$$.push($points$$12$$.slice($startIndex$$6$$, $i$$253$$)), $startIndex$$6$$ = $i$$253$$;
    }
  }
  1 > $ar$$3$$.length ? $ar$$3$$.push($points$$12$$) : $startIndex$$6$$ < $points$$12$$.length && $ar$$3$$.push($points$$12$$.slice($startIndex$$6$$));
  return $ar$$3$$;
};
dvt.$ShapeAnimationUtils$.$_sortSubpaths$ = function $dvt$$ShapeAnimationUtils$$$_sortSubpaths$$($arSubpaths$$) {
  $arSubpaths$$.sort(dvt.$ShapeAnimationUtils$.$_compareSubpaths$);
};
dvt.$ShapeAnimationUtils$.$_compareSubpaths$ = function $dvt$$ShapeAnimationUtils$$$_compareSubpaths$$($subpath1$$, $subpath2$$) {
  var $length1$$ = dvt.$ShapeAnimationUtils$.$_calcSubpathLength$($subpath1$$), $length2$$ = dvt.$ShapeAnimationUtils$.$_calcSubpathLength$($subpath2$$);
  return $length1$$ > $length2$$ ? -1 : $length2$$ > $length1$$ ? 1 : 0;
};
dvt.$ShapeAnimationUtils$.$_calcSubpathLength$ = function $dvt$$ShapeAnimationUtils$$$_calcSubpathLength$$($points$$13$$) {
  for (var $currX$$5$$ = 0, $currY$$5$$ = 0, $prevX$$ = 0, $prevY$$ = 0, $startX$$ = 0, $startY$$ = 0, $totalLength$$ = 0, $i$$254$$ = 0;$i$$254$$ < $points$$13$$.length;) {
    switch($points$$13$$[$i$$254$$]) {
      case "M":
        $startX$$ = $points$$13$$[$i$$254$$ + 1];
        $startY$$ = $points$$13$$[$i$$254$$ + 2];
        break;
      case "L":
        $currX$$5$$ = $points$$13$$[$i$$254$$ + 1];
        $currY$$5$$ = $points$$13$$[$i$$254$$ + 2];
        break;
      case "C":
        $currX$$5$$ = $points$$13$$[$i$$254$$ + 5];
        $currY$$5$$ = $points$$13$$[$i$$254$$ + 6];
        break;
      case "Q":
        $currX$$5$$ = $points$$13$$[$i$$254$$ + 3];
        $currY$$5$$ = $points$$13$$[$i$$254$$ + 4];
        break;
      case "A":
        $currX$$5$$ = $points$$13$$[$i$$254$$ + 6];
        $currY$$5$$ = $points$$13$$[$i$$254$$ + 7];
        break;
      case "Z":
        $currX$$5$$ = $startX$$, $currY$$5$$ = $startY$$;
    }
    $totalLength$$ += Math.sqrt(($currX$$5$$ - $prevX$$) * ($currX$$5$$ - $prevX$$) + ($currY$$5$$ - $prevY$$) * ($currY$$5$$ - $prevY$$));
    $i$$254$$ = dvt.$ShapeAnimationUtils$.$_getNextCommandIndex$($points$$13$$, $i$$254$$ + 1);
    $prevX$$ = $currX$$5$$;
    $prevY$$ = $currY$$5$$;
  }
  return $totalLength$$;
};
dvt.$ShapeAnimationUtils$.$_assimilateSubpaths$ = function $dvt$$ShapeAnimationUtils$$$_assimilateSubpaths$$($oldPoints$$8$$, $newPoints$$6$$, $updatedOldPoints$$1$$, $updatedNewPoints$$1$$) {
  var $bModCloseOld$$ = dvt.$ShapeAnimationUtils$.$_modifyClosePath$($oldPoints$$8$$), $bModCloseNew$$ = dvt.$ShapeAnimationUtils$.$_modifyClosePath$($newPoints$$6$$);
  if ($bModCloseOld$$ || $oldPoints$$8$$[$oldPoints$$8$$.length - 2] == $oldPoints$$8$$[1] && $oldPoints$$8$$[$oldPoints$$8$$.length - 1] == $oldPoints$$8$$[2]) {
    $oldPoints$$8$$ = dvt.$ShapeAnimationUtils$.$_makePathStartAtTopLeft$($oldPoints$$8$$), $oldPoints$$8$$ = dvt.$ShapeAnimationUtils$.$_makePathClockwise$($oldPoints$$8$$);
  }
  if ($bModCloseNew$$ || $newPoints$$6$$[$newPoints$$6$$.length - 2] == $newPoints$$6$$[1] && $newPoints$$6$$[$newPoints$$6$$.length - 1] == $newPoints$$6$$[2]) {
    $newPoints$$6$$ = dvt.$ShapeAnimationUtils$.$_makePathStartAtTopLeft$($newPoints$$6$$), $newPoints$$6$$ = dvt.$ShapeAnimationUtils$.$_makePathClockwise$($newPoints$$6$$);
  }
  dvt.$ShapeAnimationUtils$.$_makePathsSameLength$($oldPoints$$8$$, $newPoints$$6$$);
  dvt.$ShapeAnimationUtils$.$_assimilatePathCommands$($oldPoints$$8$$, $newPoints$$6$$, $updatedOldPoints$$1$$, $updatedNewPoints$$1$$);
  $bModCloseOld$$ && $oldPoints$$8$$.push("Z");
  $bModCloseNew$$ && $newPoints$$6$$.push("Z");
};
dvt.$ShapeAnimationUtils$.$_assimilatePathCommands$ = function $dvt$$ShapeAnimationUtils$$$_assimilatePathCommands$$($oldPoints$$9$$, $newPoints$$7$$, $updatedOldPoints$$2$$, $updatedNewPoints$$2$$) {
  for (var $iOld$$ = 0, $i$$255_iNew$$ = 0, $prevOldX$$ = 0, $prevOldY$$ = 0, $prevNewX$$ = 0, $prevNewY$$ = 0, $bCloseNew$$ = !1, $bCloseOld$$ = !1;-1 < $iOld$$ || -1 < $i$$255_iNew$$;) {
    var $oldCommand$$ = -1 < $iOld$$ ? $oldPoints$$9$$[$iOld$$] : null, $newCommand$$ = -1 < $i$$255_iNew$$ ? $newPoints$$7$$[$i$$255_iNew$$] : null, $iNextOld$$ = -1 < $iOld$$ ? dvt.$ShapeAnimationUtils$.$_getNextCommandIndex$($oldPoints$$9$$, $iOld$$ + 1) : -1, $iNextNew$$ = -1 < $i$$255_iNew$$ ? dvt.$ShapeAnimationUtils$.$_getNextCommandIndex$($newPoints$$7$$, $i$$255_iNew$$ + 1) : -1;
    if ($oldCommand$$ == $newCommand$$) {
      for (;$i$$255_iNew$$ < $iNextNew$$;$i$$255_iNew$$++) {
        $updatedNewPoints$$2$$.push($newPoints$$7$$[$i$$255_iNew$$]);
      }
      for ($i$$255_iNew$$ = $iOld$$;$i$$255_iNew$$ < $iNextOld$$;$i$$255_iNew$$++) {
        $updatedOldPoints$$2$$.push($oldPoints$$9$$[$i$$255_iNew$$]);
      }
    } else {
      $oldCommand$$ && "tmp" != $oldCommand$$ ? $newCommand$$ && "tmp" != $newCommand$$ ? "L" == $oldCommand$$ ? "Q" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("Q", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4]), $updatedOldPoints$$2$$.push("Q", $prevOldX$$ + .5 * ($oldPoints$$9$$[$iOld$$ + 1] - $prevOldX$$), $prevOldY$$ + .5 * ($oldPoints$$9$$[$iOld$$ + 2] - $prevOldY$$), $oldPoints$$9$$[$iOld$$ + 
      1], $oldPoints$$9$$[$iOld$$ + 2])) : "C" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("C", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 6]), $updatedOldPoints$$2$$.push("C", $prevOldX$$ + .5 * ($oldPoints$$9$$[$iOld$$ + 1] - $prevOldX$$), $prevOldY$$ + .5 * ($oldPoints$$9$$[$iOld$$ + 2] - $prevOldY$$), $prevOldX$$ + .5 * 
      ($oldPoints$$9$$[$iOld$$ + 1] - $prevOldX$$), $prevOldY$$ + .5 * ($oldPoints$$9$$[$iOld$$ + 2] - $prevOldY$$), $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2])) : "A" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("L", $prevNewX$$, $prevNewY$$, "A", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 6], $newPoints$$7$$[$i$$255_iNew$$ + 
      7]), $updatedOldPoints$$2$$.push("L", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], "A", 0, 0, $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2])) : "Z" == $newCommand$$ && ($bCloseNew$$ = !0, $updatedNewPoints$$2$$.push("L", $prevNewX$$, $prevNewY$$), $updatedOldPoints$$2$$.push("L", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2])) : "Q" == $oldCommand$$ ? 
      "L" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("Q", $prevNewX$$ + .5 * ($newPoints$$7$$[$i$$255_iNew$$ + 1] - $prevNewX$$), $prevNewY$$ + .5 * ($newPoints$$7$$[$i$$255_iNew$$ + 2] - $prevNewY$$), $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2]), $updatedOldPoints$$2$$.push("Q", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4])) : "C" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("C", $newPoints$$7$$[$i$$255_iNew$$ + 
      1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 6]), $updatedOldPoints$$2$$.push("C", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4])) : "A" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("Q", $prevNewX$$, $prevNewY$$, $prevNewX$$, 
      $prevNewY$$, "A", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 6], $newPoints$$7$$[$i$$255_iNew$$ + 7]), $updatedOldPoints$$2$$.push("Q", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], "A", 0, 0, $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 
      4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4])) : "Z" == $newCommand$$ && ($bCloseNew$$ = !0, $updatedNewPoints$$2$$.push("Q", $prevNewX$$, $prevNewY$$, $prevNewX$$, $prevNewY$$), $updatedOldPoints$$2$$.push("Q", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4])) : "C" == $oldCommand$$ ? "L" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("C", $prevNewX$$ + .5 * ($newPoints$$7$$[$i$$255_iNew$$ + 
      1] - $prevNewX$$), $prevNewY$$ + .5 * ($newPoints$$7$$[$i$$255_iNew$$ + 2] - $prevNewY$$), $prevNewX$$ + .5 * ($newPoints$$7$$[$i$$255_iNew$$ + 1] - $prevNewX$$), $prevNewY$$ + .5 * ($newPoints$$7$$[$i$$255_iNew$$ + 2] - $prevNewY$$), $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2]), $updatedOldPoints$$2$$.push("C", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $oldPoints$$9$$[$iOld$$ + 
      6])) : "Q" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("C", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4]), $updatedOldPoints$$2$$.push("C", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $oldPoints$$9$$[$iOld$$ + 
      6])) : "A" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("C", $prevNewX$$, $prevNewY$$, $prevNewX$$, $prevNewY$$, $prevNewX$$, $prevNewY$$, "A", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 6], $newPoints$$7$$[$i$$255_iNew$$ + 7]), $updatedOldPoints$$2$$.push("C", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 
      2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $oldPoints$$9$$[$iOld$$ + 6], "A", 0, 0, $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $oldPoints$$9$$[$iOld$$ + 5], $oldPoints$$9$$[$iOld$$ + 6])) : "Z" == $newCommand$$ && ($bCloseNew$$ = !0, $updatedNewPoints$$2$$.push("C", $prevNewX$$, $prevNewY$$, $prevNewX$$, $prevNewY$$, $prevNewX$$, $prevNewY$$), $updatedOldPoints$$2$$.push("C", 
      $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $oldPoints$$9$$[$iOld$$ + 6])) : "A" == $oldCommand$$ ? "L" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("L", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], "A", 0, 0, $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 
      2]), $updatedOldPoints$$2$$.push("L", $prevOldX$$, $prevOldY$$, "A", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $oldPoints$$9$$[$iOld$$ + 6], $oldPoints$$9$$[$iOld$$ + 7])) : "Q" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("Q", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], "A", 0, 
      0, $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4]), $updatedOldPoints$$2$$.push("Q", $prevOldX$$, $prevOldY$$, $prevOldX$$, $prevOldY$$, "A", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $oldPoints$$9$$[$iOld$$ + 6], $oldPoints$$9$$[$iOld$$ + 7])) : "C" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("C", 
      $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 6], "A", 0, 0, $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 6]), $updatedOldPoints$$2$$.push("C", $prevOldX$$, $prevOldY$$, $prevOldX$$, $prevOldY$$, $prevOldX$$, 
      $prevOldY$$, "A", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $oldPoints$$9$$[$iOld$$ + 6], $oldPoints$$9$$[$iOld$$ + 7])) : "Z" == $newCommand$$ && ($bCloseNew$$ = !0, $updatedNewPoints$$2$$.push("A", 0, 0, $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $prevNewX$$, $prevNewY$$), $updatedOldPoints$$2$$.push("A", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 
      2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $oldPoints$$9$$[$iOld$$ + 6], $oldPoints$$9$$[$iOld$$ + 7])) : "Z" == $oldCommand$$ && ($bCloseOld$$ = !0, "L" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("L", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2]), $updatedOldPoints$$2$$.push("L", $prevOldX$$, $prevOldY$$)) : "Q" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("Q", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 
      2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4]), $updatedOldPoints$$2$$.push("Q", $prevOldX$$, $prevOldY$$, $prevOldX$$, $prevOldY$$)) : "C" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("C", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 6]), $updatedOldPoints$$2$$.push("C", $prevOldX$$, $prevOldY$$, 
      $prevOldX$$, $prevOldY$$, $prevOldX$$, $prevOldY$$)) : "A" == $newCommand$$ && ($updatedNewPoints$$2$$.push("A", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 6], $newPoints$$7$$[$i$$255_iNew$$ + 7]), $updatedOldPoints$$2$$.push("A", 0, 0, $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 
      5], $prevOldX$$, $prevOldY$$))) : "L" == $oldCommand$$ ? ($updatedNewPoints$$2$$.push("L", $prevNewX$$, $prevNewY$$), $updatedOldPoints$$2$$.push("L", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2])) : "Q" == $oldCommand$$ ? ($updatedNewPoints$$2$$.push("Q", $prevNewX$$, $prevNewY$$, $prevNewX$$, $prevNewY$$), $updatedOldPoints$$2$$.push("Q", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4])) : "C" == $oldCommand$$ ? 
      ($updatedNewPoints$$2$$.push("C", $prevNewX$$, $prevNewY$$, $prevNewX$$, $prevNewY$$, $prevNewX$$, $prevNewY$$), $updatedOldPoints$$2$$.push("C", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $oldPoints$$9$$[$iOld$$ + 6])) : "A" == $oldCommand$$ ? ($updatedNewPoints$$2$$.push("A", 0, 0, $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $prevNewX$$, 
      $prevNewY$$), $updatedOldPoints$$2$$.push("A", $oldPoints$$9$$[$iOld$$ + 1], $oldPoints$$9$$[$iOld$$ + 2], $oldPoints$$9$$[$iOld$$ + 3], $oldPoints$$9$$[$iOld$$ + 4], $oldPoints$$9$$[$iOld$$ + 5], $oldPoints$$9$$[$iOld$$ + 6], $oldPoints$$9$$[$iOld$$ + 7])) : "Z" == $oldCommand$$ && ($updatedNewPoints$$2$$.push("Z"), $updatedOldPoints$$2$$.push("Z")) : "L" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("L", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2]), $updatedOldPoints$$2$$.push("L", 
      $prevOldX$$, $prevOldY$$)) : "Q" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("Q", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4]), $updatedOldPoints$$2$$.push("Q", $prevOldX$$, $prevOldY$$, $prevOldX$$, $prevOldY$$)) : "C" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("C", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 
      4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 6]), $updatedOldPoints$$2$$.push("C", $prevOldX$$, $prevOldY$$, $prevOldX$$, $prevOldY$$, $prevOldX$$, $prevOldY$$)) : "A" == $newCommand$$ ? ($updatedNewPoints$$2$$.push("A", $newPoints$$7$$[$i$$255_iNew$$ + 1], $newPoints$$7$$[$i$$255_iNew$$ + 2], $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $newPoints$$7$$[$i$$255_iNew$$ + 6], $newPoints$$7$$[$i$$255_iNew$$ + 
      7]), $updatedOldPoints$$2$$.push("A", 0, 0, $newPoints$$7$$[$i$$255_iNew$$ + 3], $newPoints$$7$$[$i$$255_iNew$$ + 4], $newPoints$$7$$[$i$$255_iNew$$ + 5], $prevOldX$$, $prevOldY$$)) : "Z" == $newCommand$$ && ($updatedNewPoints$$2$$.push("Z"), $updatedOldPoints$$2$$.push("Z"));
    }
    -1 < $iNextOld$$ && "Z" != $oldCommand$$ && "tmp" != $oldCommand$$ && ($prevOldX$$ = $oldPoints$$9$$[$iNextOld$$ - 2], $prevOldY$$ = $oldPoints$$9$$[$iNextOld$$ - 1]);
    -1 < $iNextNew$$ && "Z" != $newCommand$$ && "tmp" != $newCommand$$ && ($prevNewX$$ = $newPoints$$7$$[$iNextNew$$ - 2], $prevNewY$$ = $newPoints$$7$$[$iNextNew$$ - 1]);
    $iOld$$ = $iNextOld$$;
    $i$$255_iNew$$ = $iNextNew$$;
    if ($iOld$$ >= $oldPoints$$9$$.length || 0 > $iOld$$) {
      $iOld$$ = -1;
    }
    if ($i$$255_iNew$$ >= $newPoints$$7$$.length || 0 > $i$$255_iNew$$) {
      $i$$255_iNew$$ = -1;
    }
  }
  if ($bCloseOld$$ || $bCloseNew$$) {
    $updatedNewPoints$$2$$.push("Z"), $updatedOldPoints$$2$$.push("Z");
  }
};
dvt.$ShapeAnimationUtils$.$_makePathClockwise$ = function $dvt$$ShapeAnimationUtils$$$_makePathClockwise$$($points$$14$$) {
  if (!dvt.$ShapeAnimationUtils$.$_isPathClockwise$($points$$14$$)) {
    for (var $newPoints$$8$$ = ["M"], $i$$256$$ = dvt.$ShapeAnimationUtils$.$_getPrevCommandIndex$($points$$14$$, $points$$14$$.length - 1);-1 < $i$$256$$;) {
      var $command$$1$$ = $points$$14$$[$i$$256$$];
      switch($command$$1$$) {
        case "M":
          $newPoints$$8$$.push($points$$14$$[$i$$256$$ + 1], $points$$14$$[$i$$256$$ + 2]);
          break;
        case "L":
          $newPoints$$8$$.push($points$$14$$[$i$$256$$ + 1], $points$$14$$[$i$$256$$ + 2]);
          $newPoints$$8$$.push($command$$1$$);
          break;
        case "Q":
          $newPoints$$8$$.push($points$$14$$[$i$$256$$ + 3], $points$$14$$[$i$$256$$ + 4]);
          $newPoints$$8$$.push($command$$1$$);
          $newPoints$$8$$.push($points$$14$$[$i$$256$$ + 1], $points$$14$$[$i$$256$$ + 2]);
          break;
        case "C":
          $newPoints$$8$$.push($points$$14$$[$i$$256$$ + 5], $points$$14$$[$i$$256$$ + 6]);
          $newPoints$$8$$.push($command$$1$$);
          $newPoints$$8$$.push($points$$14$$[$i$$256$$ + 3], $points$$14$$[$i$$256$$ + 4]);
          $newPoints$$8$$.push($points$$14$$[$i$$256$$ + 1], $points$$14$$[$i$$256$$ + 2]);
          break;
        case "A":
          $newPoints$$8$$.push($points$$14$$[$i$$256$$ + 6], $points$$14$$[$i$$256$$ + 7]), $newPoints$$8$$.push($command$$1$$), $newPoints$$8$$.push($points$$14$$[$i$$256$$ + 1], $points$$14$$[$i$$256$$ + 2], $points$$14$$[$i$$256$$ + 3], $points$$14$$[$i$$256$$ + 4]), $newPoints$$8$$.push(0 == $points$$14$$[$i$$256$$ + 5] ? 1 : 0);
      }
      $i$$256$$ = dvt.$ShapeAnimationUtils$.$_getPrevCommandIndex$($points$$14$$, $i$$256$$ - 1);
    }
    return $newPoints$$8$$;
  }
  return $points$$14$$;
};
dvt.$ShapeAnimationUtils$.$_isPathClockwise$ = function $dvt$$ShapeAnimationUtils$$$_isPathClockwise$$($points$$15_xa$$) {
  for (var $polygon$$ = [], $topLeftIndex$$ = 0, $minX$$5_xb$$ = Number.MAX_VALUE, $minY$$5_yb$$ = Number.MAX_VALUE, $endIndex$$5_ya$$ = dvt.$ShapeAnimationUtils$.$_getPrevCommandIndex$($points$$15_xa$$, $points$$15_xa$$.length - 1), $i$$257_iNext_xc$$ = 1;$i$$257_iNext_xc$$ < $endIndex$$5_ya$$;) {
    $i$$257_iNext_xc$$ = dvt.$ShapeAnimationUtils$.$_getNextCommandIndex$($points$$15_xa$$, $i$$257_iNext_xc$$);
    if (0 < $i$$257_iNext_xc$$ - 2 && "Z" != $points$$15_xa$$[$i$$257_iNext_xc$$ - 1]) {
      var $xx$$25_yc$$ = $points$$15_xa$$[$i$$257_iNext_xc$$ - 2], $yy$$25$$ = $points$$15_xa$$[$i$$257_iNext_xc$$ - 1];
      $polygon$$.push($xx$$25_yc$$, $yy$$25$$);
      if ($yy$$25$$ < $minY$$5_yb$$ || $yy$$25$$ == $minY$$5_yb$$ && $xx$$25_yc$$ < $minX$$5_xb$$) {
        $minX$$5_xb$$ = $xx$$25_yc$$, $minY$$5_yb$$ = $yy$$25$$, $topLeftIndex$$ = $polygon$$.length - 2;
      }
    }
    $i$$257_iNext_xc$$ += 1;
  }
  $xx$$25_yc$$ = $i$$257_iNext_xc$$ = $endIndex$$5_ya$$ = $points$$15_xa$$ = 0;
  0 < $topLeftIndex$$ ? ($points$$15_xa$$ = $polygon$$[$topLeftIndex$$ - 2], $endIndex$$5_ya$$ = $polygon$$[$topLeftIndex$$ - 1]) : ($points$$15_xa$$ = $polygon$$[$polygon$$.length - 2], $endIndex$$5_ya$$ = $polygon$$[$polygon$$.length - 1]);
  $topLeftIndex$$ < $polygon$$.length - 2 ? ($i$$257_iNext_xc$$ = $polygon$$[$topLeftIndex$$ + 2], $xx$$25_yc$$ = $polygon$$[$topLeftIndex$$ + 3]) : ($i$$257_iNext_xc$$ = $polygon$$[0], $xx$$25_yc$$ = $polygon$$[1]);
  return 0 > $minX$$5_xb$$ * $xx$$25_yc$$ + $points$$15_xa$$ * $minY$$5_yb$$ + $endIndex$$5_ya$$ * $i$$257_iNext_xc$$ - ($endIndex$$5_ya$$ * $minX$$5_xb$$ + $minY$$5_yb$$ * $i$$257_iNext_xc$$ + $points$$15_xa$$ * $xx$$25_yc$$) ? !1 : !0;
};
dvt.$ShapeAnimationUtils$.$_makePathStartAtTopLeft$ = function $dvt$$ShapeAnimationUtils$$$_makePathStartAtTopLeft$$($points$$16$$) {
  for (var $newPoints$$9_topLeftIndex$$1$$ = 0, $arSlice_minX$$6$$ = Number.MAX_VALUE, $minY$$6$$ = Number.MAX_VALUE, $iPrev$$ = 0, $endIndex$$6$$ = dvt.$ShapeAnimationUtils$.$_getPrevCommandIndex$($points$$16$$, $points$$16$$.length - 1), $i$$258_xx$$26$$ = 1;$i$$258_xx$$26$$ < $endIndex$$6$$;) {
    var $iNext$$1$$ = dvt.$ShapeAnimationUtils$.$_getNextCommandIndex$($points$$16$$, $i$$258_xx$$26$$);
    if (0 < $iNext$$1$$ - 2 && "Z" != $points$$16$$[$iNext$$1$$ - 1]) {
      var $i$$258_xx$$26$$ = $points$$16$$[$iNext$$1$$ - 2], $yy$$26$$ = $points$$16$$[$iNext$$1$$ - 1];
      if ($yy$$26$$ < $minY$$6$$ || $yy$$26$$ == $minY$$6$$ && $i$$258_xx$$26$$ < $arSlice_minX$$6$$) {
        $arSlice_minX$$6$$ = $i$$258_xx$$26$$, $minY$$6$$ = $yy$$26$$, $newPoints$$9_topLeftIndex$$1$$ = $iPrev$$;
      }
    }
    $i$$258_xx$$26$$ = $iNext$$1$$ + 1;
    $iPrev$$ = $iNext$$1$$;
  }
  return 0 < $newPoints$$9_topLeftIndex$$1$$ ? ($iNext$$1$$ = dvt.$ShapeAnimationUtils$.$_getNextCommandIndex$($points$$16$$, $newPoints$$9_topLeftIndex$$1$$ + 1), $newPoints$$9_topLeftIndex$$1$$ = ["M"], $arSlice_minX$$6$$ = $points$$16$$.slice($iNext$$1$$ - 2, $points$$16$$.length), $newPoints$$9_topLeftIndex$$1$$ = $newPoints$$9_topLeftIndex$$1$$.concat($arSlice_minX$$6$$), $arSlice_minX$$6$$ = $points$$16$$.slice(3, $iNext$$1$$), $newPoints$$9_topLeftIndex$$1$$ = $newPoints$$9_topLeftIndex$$1$$.concat($arSlice_minX$$6$$)) : 
  $points$$16$$;
};
dvt.$ShapeAnimationUtils$.$_getNumParamsForCommand$ = function $dvt$$ShapeAnimationUtils$$$_getNumParamsForCommand$$($command$$2$$) {
  switch($command$$2$$) {
    case "H":
    ;
    case "h":
    ;
    case "V":
    ;
    case "v":
      return 1;
    case "M":
    ;
    case "m":
    ;
    case "L":
    ;
    case "l":
    ;
    case "T":
    ;
    case "t":
      return 2;
    case "Q":
    ;
    case "q":
    ;
    case "S":
    ;
    case "s":
      return 4;
    case "C":
    ;
    case "c":
      return 6;
    case "A":
    ;
    case "a":
      return 7;
  }
  return 0;
};
dvt.$ShapeAnimationUtils$.$_makeImplicitCommandsExplicit$ = function $dvt$$ShapeAnimationUtils$$$_makeImplicitCommandsExplicit$$($points$$17$$) {
  for (var $i$$259$$ = 0;$i$$259$$ < $points$$17$$.length;) {
    var $command$$3$$ = $points$$17$$[$i$$259$$], $numParams$$ = dvt.$ShapeAnimationUtils$.$_getNumParamsForCommand$($command$$3$$);
    switch($command$$3$$) {
      case "M":
        $i$$259$$ + $numParams$$ + 1 < $points$$17$$.length && !isNaN($points$$17$$[$i$$259$$ + $numParams$$ + 1]) && $points$$17$$.splice($i$$259$$ + $numParams$$ + 1, 0, "L");
        break;
      case "m":
        $i$$259$$ + $numParams$$ + 1 < $points$$17$$.length && !isNaN($points$$17$$[$i$$259$$ + $numParams$$ + 1]) && $points$$17$$.splice($i$$259$$ + $numParams$$ + 1, 0, "l");
        break;
      case "Z":
      ;
      case "z":
        break;
      default:
        $i$$259$$ + $numParams$$ + 1 < $points$$17$$.length && !isNaN($points$$17$$[$i$$259$$ + $numParams$$ + 1]) && $points$$17$$.splice($i$$259$$ + $numParams$$ + 1, 0, $command$$3$$);
    }
    $i$$259$$ += $numParams$$ + 1;
  }
};
dvt.$ShapeAnimationUtils$.$_makeRelativeCommandsAbsolute$ = function $dvt$$ShapeAnimationUtils$$$_makeRelativeCommandsAbsolute$$($points$$18$$) {
  for (var $currX$$6$$ = 0, $currY$$6$$ = 0, $startX$$1$$ = 0, $startY$$1$$ = 0, $i$$260$$ = 0;$i$$260$$ < $points$$18$$.length;) {
    switch($points$$18$$[$i$$260$$]) {
      case "m":
        $points$$18$$[$i$$260$$] = "M";
        0 < $i$$260$$ && ($points$$18$$[$i$$260$$ + 1] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 1], $points$$18$$[$i$$260$$ + 2] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 2]);
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 1];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 2];
        $startX$$1$$ = $currX$$6$$;
        $startY$$1$$ = $currY$$6$$;
        break;
      case "l":
        $points$$18$$[$i$$260$$] = "L";
        $points$$18$$[$i$$260$$ + 1] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 1];
        $points$$18$$[$i$$260$$ + 2] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 2];
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 1];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 2];
        break;
      case "h":
        $points$$18$$[$i$$260$$] = "H";
        $points$$18$$[$i$$260$$ + 1] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 1];
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 1];
        break;
      case "v":
        $points$$18$$[$i$$260$$] = "V";
        $points$$18$$[$i$$260$$ + 1] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 1];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 1];
        break;
      case "c":
        $points$$18$$[$i$$260$$] = "C";
        $points$$18$$[$i$$260$$ + 1] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 1];
        $points$$18$$[$i$$260$$ + 2] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 2];
        $points$$18$$[$i$$260$$ + 3] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 3];
        $points$$18$$[$i$$260$$ + 4] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 4];
        $points$$18$$[$i$$260$$ + 5] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 5];
        $points$$18$$[$i$$260$$ + 6] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 6];
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 5];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 6];
        break;
      case "s":
        $points$$18$$[$i$$260$$] = "S";
        $points$$18$$[$i$$260$$ + 1] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 1];
        $points$$18$$[$i$$260$$ + 2] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 2];
        $points$$18$$[$i$$260$$ + 3] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 3];
        $points$$18$$[$i$$260$$ + 4] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 4];
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 3];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 4];
        break;
      case "q":
        $points$$18$$[$i$$260$$] = "Q";
        $points$$18$$[$i$$260$$ + 1] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 1];
        $points$$18$$[$i$$260$$ + 2] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 2];
        $points$$18$$[$i$$260$$ + 3] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 3];
        $points$$18$$[$i$$260$$ + 4] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 4];
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 3];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 4];
        break;
      case "t":
        $points$$18$$[$i$$260$$] = "T";
        $points$$18$$[$i$$260$$ + 1] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 1];
        $points$$18$$[$i$$260$$ + 2] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 2];
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 1];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 2];
        break;
      case "a":
        $points$$18$$[$i$$260$$] = "A";
        $points$$18$$[$i$$260$$ + 6] = $currX$$6$$ + $points$$18$$[$i$$260$$ + 6];
        $points$$18$$[$i$$260$$ + 7] = $currY$$6$$ + $points$$18$$[$i$$260$$ + 7];
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 6];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 7];
        break;
      case "z":
        $points$$18$$[$i$$260$$] = "Z";
        $currX$$6$$ = $startX$$1$$;
        $currY$$6$$ = $startY$$1$$;
        break;
      case "M":
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 1];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 2];
        $startX$$1$$ = $currX$$6$$;
        $startY$$1$$ = $currY$$6$$;
        break;
      case "L":
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 1];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 2];
        break;
      case "H":
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 1];
        break;
      case "V":
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 1];
        break;
      case "C":
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 5];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 6];
        break;
      case "S":
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 3];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 4];
        break;
      case "Q":
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 3];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 4];
        break;
      case "T":
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 1];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 2];
        break;
      case "A":
        $currX$$6$$ = $points$$18$$[$i$$260$$ + 6];
        $currY$$6$$ = $points$$18$$[$i$$260$$ + 7];
        break;
      case "Z":
        $currX$$6$$ = $startX$$1$$, $currY$$6$$ = $startY$$1$$;
    }
    $i$$260$$ = dvt.$ShapeAnimationUtils$.$_getNextCommandIndex$($points$$18$$, $i$$260$$ + 1);
  }
};
dvt.$ShapeAnimationUtils$.$_makeShorthandCommandsVerbose$ = function $dvt$$ShapeAnimationUtils$$$_makeShorthandCommandsVerbose$$($points$$19$$) {
  for (var $currX$$7$$ = 0, $currY$$7$$ = 0, $startX$$2$$ = 0, $startY$$2$$ = 0, $i$$261$$ = 0;$i$$261$$ < $points$$19$$.length;) {
    switch($points$$19$$[$i$$261$$]) {
      case "M":
        $currX$$7$$ = $points$$19$$[$i$$261$$ + 1];
        $currY$$7$$ = $points$$19$$[$i$$261$$ + 2];
        $startX$$2$$ = $currX$$7$$;
        $startY$$2$$ = $currY$$7$$;
        break;
      case "L":
        $currX$$7$$ = $points$$19$$[$i$$261$$ + 1];
        $currY$$7$$ = $points$$19$$[$i$$261$$ + 2];
        break;
      case "H":
        $currX$$7$$ = $points$$19$$[$i$$261$$ + 1];
        $points$$19$$[$i$$261$$] = "L";
        $points$$19$$.splice($i$$261$$ + 2, 0, $currY$$7$$);
        break;
      case "V":
        $currY$$7$$ = $points$$19$$[$i$$261$$ + 1];
        $points$$19$$[$i$$261$$] = "L";
        $points$$19$$.splice($i$$261$$ + 1, 0, $currX$$7$$);
        break;
      case "C":
        $currX$$7$$ = $points$$19$$[$i$$261$$ + 5];
        $currY$$7$$ = $points$$19$$[$i$$261$$ + 6];
        break;
      case "S":
        var $j$$41$$ = dvt.$ShapeAnimationUtils$.$_getPrevCommandIndex$($points$$19$$, $i$$261$$ - 1), $newCp1x_newCpx$$ = $currX$$7$$, $cp2y$$1_cpy$$1_newCp1y_newCpy$$ = $currY$$7$$;
        "C" == $points$$19$$[$j$$41$$] && ($cp2y$$1_cpy$$1_newCp1y_newCpy$$ = $points$$19$$[$j$$41$$ + 4], $newCp1x_newCpx$$ = $currX$$7$$ + ($currX$$7$$ - $points$$19$$[$j$$41$$ + 3]), $cp2y$$1_cpy$$1_newCp1y_newCpy$$ = $currY$$7$$ + ($currY$$7$$ - $cp2y$$1_cpy$$1_newCp1y_newCpy$$));
        $points$$19$$[$i$$261$$] = "C";
        $points$$19$$.splice($i$$261$$ + 1, 0, $newCp1x_newCpx$$, $cp2y$$1_cpy$$1_newCp1y_newCpy$$);
        $currX$$7$$ = $points$$19$$[$i$$261$$ + 5];
        $currY$$7$$ = $points$$19$$[$i$$261$$ + 6];
        break;
      case "Q":
        $currX$$7$$ = $points$$19$$[$i$$261$$ + 3];
        $currY$$7$$ = $points$$19$$[$i$$261$$ + 4];
        break;
      case "T":
        $j$$41$$ = dvt.$ShapeAnimationUtils$.$_getPrevCommandIndex$($points$$19$$, $i$$261$$ - 1);
        $newCp1x_newCpx$$ = $currX$$7$$;
        $cp2y$$1_cpy$$1_newCp1y_newCpy$$ = $currY$$7$$;
        "Q" == $points$$19$$[$j$$41$$] && ($cp2y$$1_cpy$$1_newCp1y_newCpy$$ = $points$$19$$[$j$$41$$ + 2], $newCp1x_newCpx$$ = $currX$$7$$ + ($currX$$7$$ - $points$$19$$[$j$$41$$ + 1]), $cp2y$$1_cpy$$1_newCp1y_newCpy$$ = $currY$$7$$ + ($currY$$7$$ - $cp2y$$1_cpy$$1_newCp1y_newCpy$$));
        $points$$19$$[$i$$261$$] = "Q";
        $points$$19$$.splice($i$$261$$ + 1, 0, $newCp1x_newCpx$$, $cp2y$$1_cpy$$1_newCp1y_newCpy$$);
        $currX$$7$$ = $points$$19$$[$i$$261$$ + 3];
        $currY$$7$$ = $points$$19$$[$i$$261$$ + 4];
        break;
      case "A":
        $currX$$7$$ = $points$$19$$[$i$$261$$ + 6];
        $currY$$7$$ = $points$$19$$[$i$$261$$ + 7];
        break;
      case "Z":
        $currX$$7$$ = $startX$$2$$, $currY$$7$$ = $startY$$2$$;
    }
    $i$$261$$ = dvt.$ShapeAnimationUtils$.$_getNextCommandIndex$($points$$19$$, $i$$261$$ + 1);
  }
};
dvt.$ShapeAnimationUtils$.$_makeSubpathsExplicit$ = function $dvt$$ShapeAnimationUtils$$$_makeSubpathsExplicit$$($points$$20$$) {
  for (var $startX$$3$$ = 0, $startY$$3$$ = 0, $i$$262$$ = 0;$i$$262$$ < $points$$20$$.length;$i$$262$$++) {
    "Z" == $points$$20$$[$i$$262$$] ? $i$$262$$ + 1 < $points$$20$$.length && "M" != $points$$20$$[$i$$262$$ + 1] && "m" != $points$$20$$[$i$$262$$ + 1] && $points$$20$$.splice($i$$262$$ + 1, 0, "M", $startX$$3$$, $startY$$3$$) : "M" == $points$$20$$[$i$$262$$] && ($startX$$3$$ = $points$$20$$[$i$$262$$ + 1], $startY$$3$$ = $points$$20$$[$i$$262$$ + 2]);
  }
};
dvt.$ShapeAnimationUtils$.$_transformPathCoords$ = function $dvt$$ShapeAnimationUtils$$$_transformPathCoords$$($points$$21$$, $mat$$8$$) {
  for (var $p$$2_pOrig$$ = null, $i$$263$$ = 0;$i$$263$$ < $points$$21$$.length;) {
    switch($points$$21$$[$i$$263$$]) {
      case "M":
      ;
      case "L":
        $p$$2_pOrig$$ = $mat$$8$$.$transformPoint$(new dvt.$Point$($points$$21$$[$i$$263$$ + 1], $points$$21$$[$i$$263$$ + 2]));
        $points$$21$$[$i$$263$$ + 1] = $p$$2_pOrig$$.x;
        $points$$21$$[$i$$263$$ + 2] = $p$$2_pOrig$$.y;
        break;
      case "Q":
        $p$$2_pOrig$$ = $mat$$8$$.$transformPoint$(new dvt.$Point$($points$$21$$[$i$$263$$ + 1], $points$$21$$[$i$$263$$ + 2]));
        $points$$21$$[$i$$263$$ + 1] = $p$$2_pOrig$$.x;
        $points$$21$$[$i$$263$$ + 2] = $p$$2_pOrig$$.y;
        $p$$2_pOrig$$ = $mat$$8$$.$transformPoint$(new dvt.$Point$($points$$21$$[$i$$263$$ + 3], $points$$21$$[$i$$263$$ + 4]));
        $points$$21$$[$i$$263$$ + 3] = $p$$2_pOrig$$.x;
        $points$$21$$[$i$$263$$ + 4] = $p$$2_pOrig$$.y;
        break;
      case "C":
        $p$$2_pOrig$$ = $mat$$8$$.$transformPoint$(new dvt.$Point$($points$$21$$[$i$$263$$ + 1], $points$$21$$[$i$$263$$ + 2]));
        $points$$21$$[$i$$263$$ + 1] = $p$$2_pOrig$$.x;
        $points$$21$$[$i$$263$$ + 2] = $p$$2_pOrig$$.y;
        $p$$2_pOrig$$ = $mat$$8$$.$transformPoint$(new dvt.$Point$($points$$21$$[$i$$263$$ + 3], $points$$21$$[$i$$263$$ + 4]));
        $points$$21$$[$i$$263$$ + 3] = $p$$2_pOrig$$.x;
        $points$$21$$[$i$$263$$ + 4] = $p$$2_pOrig$$.y;
        $p$$2_pOrig$$ = $mat$$8$$.$transformPoint$(new dvt.$Point$($points$$21$$[$i$$263$$ + 5], $points$$21$$[$i$$263$$ + 6]));
        $points$$21$$[$i$$263$$ + 5] = $p$$2_pOrig$$.x;
        $points$$21$$[$i$$263$$ + 6] = $p$$2_pOrig$$.y;
        break;
      case "A":
        var $p$$2_pOrig$$ = $mat$$8$$.$transformPoint$(new dvt.$Point$(0, 0)), $pRadX$$ = $mat$$8$$.$transformPoint$(new dvt.$Point$($points$$21$$[$i$$263$$ + 1], 0)), $newRadY_pRadY$$ = $mat$$8$$.$transformPoint$(new dvt.$Point$(0, $points$$21$$[$i$$263$$ + 2])), $newRadY_pRadY$$ = Math.sqrt(($newRadY_pRadY$$.x - $p$$2_pOrig$$.x) * ($newRadY_pRadY$$.x - $p$$2_pOrig$$.x) + ($newRadY_pRadY$$.y - $p$$2_pOrig$$.y) * ($newRadY_pRadY$$.y - $p$$2_pOrig$$.y));
        $points$$21$$[$i$$263$$ + 1] = Math.sqrt(($pRadX$$.x - $p$$2_pOrig$$.x) * ($pRadX$$.x - $p$$2_pOrig$$.x) + ($pRadX$$.y - $p$$2_pOrig$$.y) * ($pRadX$$.y - $p$$2_pOrig$$.y));
        $points$$21$$[$i$$263$$ + 2] = $newRadY_pRadY$$;
        $p$$2_pOrig$$ = $mat$$8$$.$transformPoint$(new dvt.$Point$($points$$21$$[$i$$263$$ + 6], $points$$21$$[$i$$263$$ + 7]));
        $points$$21$$[$i$$263$$ + 6] = $p$$2_pOrig$$.x;
        $points$$21$$[$i$$263$$ + 7] = $p$$2_pOrig$$.y;
    }
    $i$$263$$ = dvt.$ShapeAnimationUtils$.$_getNextCommandIndex$($points$$21$$, $i$$263$$ + 1);
  }
};
function $DvtBaseDiagram$$($context$$106$$, $callback$$81$$, $callbackObj$$22$$) {
  this.Init($context$$106$$, $callback$$81$$, $callbackObj$$22$$);
}
$goog$exportPath_$$("DvtBaseDiagram", $DvtBaseDiagram$$);
dvt.$Obj$.$createSubclass$($DvtBaseDiagram$$, dvt.$PanZoomComponent$, "DvtBaseDiagram");
$JSCompiler_prototypeAlias$$ = $DvtBaseDiagram$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$107$$, $callback$$82$$, $callbackObj$$23$$) {
  $DvtBaseDiagram$$.$superclass$.Init.call(this, $context$$107$$, $callback$$82$$, $callbackObj$$23$$);
  this.$getCtx$().$_stage$.$getElem$().setAttributeNS(null, "text-rendering", "geometricPrecision");
  this.$_layoutOffset$;
  this.$_layoutViewportContainerId$ = this.$_layoutViewport$ = null;
  this.$_initAnim$;
  this.$_bInitAnimEnabled$ = !0;
  this.$_linksPane$ = new dvt.$Container$($context$$107$$);
  this.$_nodesPane$ = new dvt.$Container$($context$$107$$);
  this.$_topPane$ = new dvt.$Container$($context$$107$$);
  this.$_animationDuration$ = dvt.$PanZoomCanvas$.$DEFAULT_ANIMATION_DURATION$;
  this.$InitializeZoomLimits$();
};
$JSCompiler_prototypeAlias$$.$InitComponentInternal$ = function $$JSCompiler_prototypeAlias$$$$InitComponentInternal$$() {
  var $pzc$$10$$ = this.$_panZoomCanvas$;
  $pzc$$10$$.$setMinZoom$(this.$getMinZoom$());
  $pzc$$10$$.$setMaxZoom$(this.$getMaxZoom$());
  $pzc$$10$$.$setAnimationDuration$(this.$getAnimationDuration$());
  $pzc$$10$$.$_contentPane$.$addChild$(this.$_linksPane$);
  $pzc$$10$$.$_contentPane$.$addChild$(this.$_nodesPane$);
  $pzc$$10$$.$_contentPane$.$addChild$(this.$_topPane$);
};
$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$setAnimationDuration$$($animationDuration$$) {
  this.$_animationDuration$ = $animationDuration$$;
  this.$_panZoomCanvas$ && this.$_panZoomCanvas$.$setAnimationDuration$($animationDuration$$);
};
$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return this.$_animationDuration$;
};
$JSCompiler_prototypeAlias$$.$setMaxZoom$ = function $$JSCompiler_prototypeAlias$$$$setMaxZoom$$($maxZoom$$2$$) {
  this.$_maxZoom$ = $maxZoom$$2$$;
  this.$_panZoomCanvas$ && this.$_panZoomCanvas$.$setMaxZoom$($maxZoom$$2$$);
};
$JSCompiler_prototypeAlias$$.$getMaxZoom$ = function $$JSCompiler_prototypeAlias$$$$getMaxZoom$$() {
  return this.$_maxZoom$;
};
$JSCompiler_prototypeAlias$$.$setMinZoom$ = function $$JSCompiler_prototypeAlias$$$$setMinZoom$$($minZoom$$2$$) {
  this.$_minZoom$ = $minZoom$$2$$;
  this.$_panZoomCanvas$ && this.$_panZoomCanvas$.$setMinZoom$($minZoom$$2$$);
};
$JSCompiler_prototypeAlias$$.$getMinZoom$ = function $$JSCompiler_prototypeAlias$$$$getMinZoom$$() {
  return this.$_minZoom$;
};
$JSCompiler_prototypeAlias$$.$InitializeZoomLimits$ = function $$JSCompiler_prototypeAlias$$$$InitializeZoomLimits$$() {
  this.$setMaxZoom$(2);
  this.$setMinZoom$(0);
};
$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  this.$_handledEventXml$ || ($DvtBaseDiagram$$.$superclass$.$Render$.call(this), this.$InitComponentInternal$(), this.$RenderComponentInternal$());
  this.$_handledEventXml$ = !1;
};
$JSCompiler_prototypeAlias$$.$RenderComponentInternal$ = function $$JSCompiler_prototypeAlias$$$$RenderComponentInternal$$() {
};
$JSCompiler_prototypeAlias$$.$getNodeById$ = function $$JSCompiler_prototypeAlias$$$$getNodeById$$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$getLinkById$ = function $$JSCompiler_prototypeAlias$$$$getLinkById$$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$GetAllLinks$ = function $$JSCompiler_prototypeAlias$$$$GetAllLinks$$() {
  return [];
};
$JSCompiler_prototypeAlias$$.$GetAllNodes$ = function $$JSCompiler_prototypeAlias$$$$GetAllNodes$$() {
  return [];
};
$JSCompiler_prototypeAlias$$.$getNodeCount$ = function $$JSCompiler_prototypeAlias$$$$getNodeCount$$() {
  return this.$GetAllNodes$().length;
};
$DvtBaseDiagram$$.prototype.getNodeCount = $DvtBaseDiagram$$.prototype.$getNodeCount$;
$DvtBaseDiagram$$.prototype.$getLinkCount$ = function $$DvtBaseDiagram$$$$$getLinkCount$$() {
  return this.$GetAllLinks$().length;
};
$DvtBaseDiagram$$.prototype.getLinkCount = $DvtBaseDiagram$$.prototype.$getLinkCount$;
function $JSCompiler_StaticMethods_RefreshEmptyText$$($JSCompiler_StaticMethods_RefreshEmptyText$self$$, $emptyDiagram$$1$$) {
  if ($emptyDiagram$$1$$ && $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyText$) {
    $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$ ? ($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$.$setX$($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$Width$ / 2), $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$.$setY$($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$Height$ / 2), dvt.$TextUtils$.$fitText$($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$, $JSCompiler_StaticMethods_RefreshEmptyText$self$$.getWidth() - 
    2 * dvt.$TextUtils$.$EMPTY_TEXT_BUFFER$, Infinity, $JSCompiler_StaticMethods_RefreshEmptyText$self$$)) : $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$ = $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$CreateEmptyText$($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyText$);
  } else {
    if ($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$) {
      var $parent$$52$$ = $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$.getParent();
      $parent$$52$$ && $parent$$52$$.removeChild($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$);
      $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$ = null;
    }
  }
}
$DvtBaseDiagram$$.prototype.$CreateEmptyText$ = function $$DvtBaseDiagram$$$$$CreateEmptyText$$($text$$49$$) {
  var $options$$32$$ = this.$getOptions$();
  return dvt.$TextUtils$.$renderEmptyText$(this, $text$$49$$, new dvt.$Rectangle$(0, 0, this.getWidth(), this.getHeight()), this.$getEventManager$(), $options$$32$$._statusMessageStyle);
};
$DvtBaseDiagram$$.prototype.$setPanDirection$ = function $$DvtBaseDiagram$$$$$setPanDirection$$($panDirection$$) {
  this.$_panDirection$ = $panDirection$$;
  this.$_panZoomCanvas$ && this.$_panZoomCanvas$.$setPanDirection$($panDirection$$);
};
$DvtBaseDiagram$$.prototype.$getPanDirection$ = function $$DvtBaseDiagram$$$$$getPanDirection$$() {
  return this.$_panDirection$;
};
$DvtBaseDiagram$$.prototype.$setInitAnim$ = function $$DvtBaseDiagram$$$$$setInitAnim$$($anim$$17$$) {
  this.$_initAnim$ = $anim$$17$$;
};
$DvtBaseDiagram$$.prototype.setInitAnim = $DvtBaseDiagram$$.prototype.$setInitAnim$;
$JSCompiler_prototypeAlias$$ = $DvtBaseDiagram$$.prototype;
$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$getSelectionHandler$$() {
  return this.$_selectionHandler$;
};
$JSCompiler_prototypeAlias$$.$setSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$setSelectionMode$$($selectionMode$$1$$) {
  this.$_selectionHandler$ = "single" == $selectionMode$$1$$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $selectionMode$$1$$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_MULTIPLE$) : null;
  this.$getEventManager$().$setSelectionHandler$(this.$_selectionHandler$);
};
function $JSCompiler_StaticMethods_getSelectionMode$$($JSCompiler_StaticMethods_getSelectionMode$self$$) {
  return $JSCompiler_StaticMethods_getSelectionMode$self$$.$_selectionHandler$ ? $JSCompiler_StaticMethods_getSelectionMode$self$$.$_selectionHandler$.$getType$() : null;
}
$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? !0 : !1;
};
function $JSCompiler_StaticMethods_CreateEmptyLayoutContext$$($JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2590$$) {
  var $layoutContext$$11$$ = new $DvtDiagramLayoutContext$$, $bR2L$$inline_2587$$ = dvt.$Agent$.$isRightToLeft$($JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2590$$.$getCtx$());
  $layoutContext$$11$$.$_bLocaleR2L$ = $bR2L$$inline_2587$$;
  $JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2590$$ = new $DvtDiagramRectangle$$(0, 0, $JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2590$$.getWidth(), $JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2590$$.getHeight());
  $layoutContext$$11$$.$_componentSize$ = $JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2590$$;
  return $layoutContext$$11$$;
}
$JSCompiler_prototypeAlias$$.$CreateLayoutContextNode$ = function $$JSCompiler_prototypeAlias$$$$CreateLayoutContextNode$$($node$$171$$, $layout$$19_obj$$inline_2599$$, $bRenderAfter$$) {
  var $nc$$1$$ = new $DvtDiagramLayoutContextNode$$;
  $nc$$1$$.setId($node$$171$$.getId ? $node$$171$$.getId() : $node$$171$$.getData().getId());
  var $bounds$$inline_2593_bounds$$inline_2596$$ = $DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$($node$$171$$.$getLayoutBounds$());
  $nc$$1$$.$_bounds$ = $bounds$$inline_2593_bounds$$inline_2596$$;
  $nc$$1$$.$_origBounds$ = $bounds$$inline_2593_bounds$$inline_2596$$;
  $bounds$$inline_2593_bounds$$inline_2596$$ = $DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$($node$$171$$.$getContentBounds$());
  $nc$$1$$.$_contentBounds$ = $bounds$$inline_2593_bounds$$inline_2596$$;
  $nc$$1$$.$_origContentBounds$ = $bounds$$inline_2593_bounds$$inline_2596$$;
  $nc$$1$$.$setLayoutAttributes$($node$$171$$.$getLayoutAttributes$($layout$$19_obj$$inline_2599$$));
  $nc$$1$$.$setLabelBounds$($DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$($node$$171$$.$getLabelBounds$()));
  $nc$$1$$.$setLabelPosition$($DvtDiagramLayoutUtils$$.$convertPointToDiagramPoint$($node$$171$$.$getLabelPosition$()));
  $nc$$1$$.$setSelected$(1 == $node$$171$$.$isSelected$());
  $node$$171$$.$isDisclosed$() && ($nc$$1$$.$setDisclosed$(!0), $layout$$19_obj$$inline_2599$$ = $DvtBaseDiagram$getLayoutContainerPadding$$($node$$171$$.$getContainerPadding$()), $nc$$1$$.$isDisclosed$() && ($nc$$1$$.$_containerPadding$ = $layout$$19_obj$$inline_2599$$)) && ($nc$$1$$.$_origBounds$ && ($nc$$1$$.$_origBounds$ = new $DvtDiagramRectangle$$($nc$$1$$.$_origBounds$.x, $nc$$1$$.$_origBounds$.y, $nc$$1$$.$_origBounds$.w - ($layout$$19_obj$$inline_2599$$.left + $layout$$19_obj$$inline_2599$$.right), 
  $nc$$1$$.$_origBounds$.h - ($layout$$19_obj$$inline_2599$$.top + $layout$$19_obj$$inline_2599$$.bottom))), $nc$$1$$.$_origContentBounds$ && ($nc$$1$$.$_origContentBounds$ = new $DvtDiagramRectangle$$($nc$$1$$.$_origContentBounds$.x, $nc$$1$$.$_origContentBounds$.y, $nc$$1$$.$_origContentBounds$.w - ($layout$$19_obj$$inline_2599$$.left + $layout$$19_obj$$inline_2599$$.right), $nc$$1$$.$_origContentBounds$.h - ($layout$$19_obj$$inline_2599$$.top + $layout$$19_obj$$inline_2599$$.bottom))));
  $nc$$1$$.$setContainerId$($node$$171$$.getData().$getGroupId$ ? $node$$171$$.getData().$_groupId$ : null);
  $nc$$1$$.$Component$ = this;
  $nc$$1$$.$IsRendered$ = !$bRenderAfter$$;
  return $nc$$1$$;
};
$JSCompiler_prototypeAlias$$.$CreateLayoutContextLink$ = function $$JSCompiler_prototypeAlias$$$$CreateLayoutContextLink$$($link$$58$$, $offset$$inline_2602_offset$$inline_2605_startId$$5$$, $endId$$5$$, $layout$$20$$) {
  var $lc$$6$$ = new $DvtDiagramLayoutContextLink$$;
  $lc$$6$$.setId($link$$58$$.getId ? $link$$58$$.getId() : $link$$58$$.getData().getId());
  $lc$$6$$.$setStartId$($offset$$inline_2602_offset$$inline_2605_startId$$5$$ ? $offset$$inline_2602_offset$$inline_2605_startId$$5$$ : $link$$58$$.getData().$getStartId$());
  $lc$$6$$.$setEndId$($endId$$5$$ ? $endId$$5$$ : $link$$58$$.getData().$getEndId$());
  $lc$$6$$.$setLayoutAttributes$($link$$58$$.$getLayoutAttributes$($layout$$20$$));
  $lc$$6$$.$setLabelBounds$($DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$($link$$58$$.$getLabelBounds$()));
  $lc$$6$$.$setLabelPosition$($DvtDiagramLayoutUtils$$.$convertPointToDiagramPoint$($link$$58$$.$getLabelPosition$()));
  $offset$$inline_2602_offset$$inline_2605_startId$$5$$ = $link$$58$$.$getStartConnectorOffset$();
  $lc$$6$$.$_startConnectorOffset$ = $offset$$inline_2602_offset$$inline_2605_startId$$5$$;
  $offset$$inline_2602_offset$$inline_2605_startId$$5$$ = $link$$58$$.$getEndConnectorOffset$();
  $lc$$6$$.$_endConnectorOffset$ = $offset$$inline_2602_offset$$inline_2605_startId$$5$$;
  $lc$$6$$.$setLinkWidth$($link$$58$$.$getLinkWidth$());
  $lc$$6$$.$setSelected$(1 == $link$$58$$.$isSelected$());
  $lc$$6$$.$setPromoted$(1 == $link$$58$$.$isPromoted$());
  return $lc$$6$$;
};
$JSCompiler_prototypeAlias$$.$ApplyLayoutContext$ = function $$JSCompiler_prototypeAlias$$$$ApplyLayoutContext$$($layoutContext$$12$$, $animator$$61_layoutViewport$$1$$, $bSaveOffset$$1$$) {
  var $minx_topContainerPadding_tx$$9$$ = $layoutContext$$12$$.$getContainerPadding$();
  if ($minx_topContainerPadding_tx$$9$$) {
    var $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$ = $layoutContext$$12$$.$_containerId$;
    $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$ && ($containerId$$4_containerNode$$1_lopt_miny_ty$$10$$ = this.$getNodeById$($containerId$$4_containerNode$$1_lopt_miny_ty$$10$$)) && $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$.$setContainerPadding$($DvtBaseDiagram$getContainerPadding$$($minx_topContainerPadding_tx$$9$$), $animator$$61_layoutViewport$$1$$);
  }
  for (var $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$ = $minx_topContainerPadding_tx$$9$$ = Number.MAX_VALUE, $li$$1_ni$$1$$ = 0;$li$$1_ni$$1$$ < $layoutContext$$12$$.$getNodeCount$();$li$$1_ni$$1$$++) {
    var $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$ = $layoutContext$$12$$.$getNodeByIndex$($li$$1_ni$$1$$), $i$$264_labelBounds$$3_node$$172_obj$$114$$ = this.$getNodeById$($containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.getId()), $controlPoints$$1_points$$22_pos$$25$$ = $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.$getPosition$();
    $controlPoints$$1_points$$22_pos$$25$$ && ($minx_topContainerPadding_tx$$9$$ = Math.min($minx_topContainerPadding_tx$$9$$, $controlPoints$$1_points$$22_pos$$25$$.x), $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$ = Math.min($containerId$$4_containerNode$$1_lopt_miny_ty$$10$$, $controlPoints$$1_points$$22_pos$$25$$.y));
    $i$$264_labelBounds$$3_node$$172_obj$$114$$ = $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.$getLabelBounds$();
    $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$ = $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.$getLabelPosition$();
    $i$$264_labelBounds$$3_node$$172_obj$$114$$ && $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$ && ($minx_topContainerPadding_tx$$9$$ = Math.min($minx_topContainerPadding_tx$$9$$, $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.x + $i$$264_labelBounds$$3_node$$172_obj$$114$$.x), $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$ = Math.min($containerId$$4_containerNode$$1_lopt_miny_ty$$10$$, $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.y + $i$$264_labelBounds$$3_node$$172_obj$$114$$.y));
  }
  for ($li$$1_ni$$1$$ = 0;$li$$1_ni$$1$$ < $layoutContext$$12$$.$getLinkCount$();$li$$1_ni$$1$$++) {
    var $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$ = $layoutContext$$12$$.$getLinkByIndex$($li$$1_ni$$1$$), $link$$59$$ = this.$getLinkById$($containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.getId());
    if ($controlPoints$$1_points$$22_pos$$25$$ = $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.$getPoints$()) {
      for ($controlPoints$$1_points$$22_pos$$25$$ = $DvtDiagramLinkUtils$$.$GetControlPoints$($controlPoints$$1_points$$22_pos$$25$$), $i$$264_labelBounds$$3_node$$172_obj$$114$$ = 0;$i$$264_labelBounds$$3_node$$172_obj$$114$$ < $controlPoints$$1_points$$22_pos$$25$$.length;$i$$264_labelBounds$$3_node$$172_obj$$114$$++) {
        var $controlPoint$$1$$ = $controlPoints$$1_points$$22_pos$$25$$[$i$$264_labelBounds$$3_node$$172_obj$$114$$], $minx_topContainerPadding_tx$$9$$ = Math.min($minx_topContainerPadding_tx$$9$$, $controlPoint$$1$$.x), $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$ = Math.min($containerId$$4_containerNode$$1_lopt_miny_ty$$10$$, $controlPoint$$1$$.y)
      }
    }
    $i$$264_labelBounds$$3_node$$172_obj$$114$$ = $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.$getLabelBounds$();
    $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$ = $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.$getLabelPosition$();
    $i$$264_labelBounds$$3_node$$172_obj$$114$$ && $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$ && ($minx_topContainerPadding_tx$$9$$ = Math.min($minx_topContainerPadding_tx$$9$$, $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.x + $i$$264_labelBounds$$3_node$$172_obj$$114$$.x), $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$ = Math.min($containerId$$4_containerNode$$1_lopt_miny_ty$$10$$, $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.y + $i$$264_labelBounds$$3_node$$172_obj$$114$$.y));
  }
  $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$ = this.$CalcLayoutOffset$(-$minx_topContainerPadding_tx$$9$$, -$containerId$$4_containerNode$$1_lopt_miny_ty$$10$$);
  $minx_topContainerPadding_tx$$9$$ = $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$.x;
  $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$ = $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$.y;
  for ($li$$1_ni$$1$$ = 0;$li$$1_ni$$1$$ < $layoutContext$$12$$.$getNodeCount$();$li$$1_ni$$1$$++) {
    $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$ = $layoutContext$$12$$.$getNodeByIndex$($li$$1_ni$$1$$), $i$$264_labelBounds$$3_node$$172_obj$$114$$ = this.$getNodeById$($containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.getId()), ($controlPoints$$1_points$$22_pos$$25$$ = $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.$getPosition$()) && $i$$264_labelBounds$$3_node$$172_obj$$114$$.$SetPosition$($controlPoints$$1_points$$22_pos$$25$$.x + $minx_topContainerPadding_tx$$9$$, $controlPoints$$1_points$$22_pos$$25$$.y + 
    $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$, $animator$$61_layoutViewport$$1$$), $JSCompiler_StaticMethods_ApplyLabelPosition$$($containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$, $i$$264_labelBounds$$3_node$$172_obj$$114$$, $DvtDiagramLayoutUtils$$.$convertDiagramPointToPoint$($controlPoints$$1_points$$22_pos$$25$$), $animator$$61_layoutViewport$$1$$), $i$$264_labelBounds$$3_node$$172_obj$$114$$.$isDisclosed$() && ($containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$ = $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.$getContainerPadding$()) && 
    $i$$264_labelBounds$$3_node$$172_obj$$114$$.$setContainerPadding$($DvtBaseDiagram$getContainerPadding$$($containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$), $animator$$61_layoutViewport$$1$$);
  }
  if (!this.$_bCrossedZoomThreshold$) {
    for ($li$$1_ni$$1$$ = 0;$li$$1_ni$$1$$ < $layoutContext$$12$$.$getLinkCount$();$li$$1_ni$$1$$++) {
      $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$ = $layoutContext$$12$$.$getLinkByIndex$($li$$1_ni$$1$$);
      $link$$59$$ = this.$getLinkById$($containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.getId());
      if ($controlPoints$$1_points$$22_pos$$25$$ = $containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$.$getPoints$()) {
        0 < $controlPoints$$1_points$$22_pos$$25$$.length && !isNaN($controlPoints$$1_points$$22_pos$$25$$[0]) && ($controlPoints$$1_points$$22_pos$$25$$ = $DvtDiagramLinkUtils$$.$ConvertToPath$($controlPoints$$1_points$$22_pos$$25$$));
        for (var $translatedPoints$$ = [], $i$$264_labelBounds$$3_node$$172_obj$$114$$ = 0;$i$$264_labelBounds$$3_node$$172_obj$$114$$ < $controlPoints$$1_points$$22_pos$$25$$.length;) {
          isNaN($controlPoints$$1_points$$22_pos$$25$$[$i$$264_labelBounds$$3_node$$172_obj$$114$$]) ? ($translatedPoints$$.push($controlPoints$$1_points$$22_pos$$25$$[$i$$264_labelBounds$$3_node$$172_obj$$114$$]), $i$$264_labelBounds$$3_node$$172_obj$$114$$++) : ($translatedPoints$$.push($controlPoints$$1_points$$22_pos$$25$$[$i$$264_labelBounds$$3_node$$172_obj$$114$$] + $minx_topContainerPadding_tx$$9$$), $translatedPoints$$.push($controlPoints$$1_points$$22_pos$$25$$[$i$$264_labelBounds$$3_node$$172_obj$$114$$ + 
          1] + $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$), $i$$264_labelBounds$$3_node$$172_obj$$114$$ += 2);
        }
        $animator$$61_layoutViewport$$1$$ && $link$$59$$.$getPoints$() ? 0 < $translatedPoints$$.length && isNaN($translatedPoints$$[0]) ? ($i$$264_labelBounds$$3_node$$172_obj$$114$$ = dvt.$ShapeAnimationUtils$.$getAssimilatedPaths$($link$$59$$.$getPoints$(), $translatedPoints$$), $link$$59$$.$setPoints$($i$$264_labelBounds$$3_node$$172_obj$$114$$.$updatedOldPath$), $animator$$61_layoutViewport$$1$$.$addProp$(dvt.$Animator$.$TYPE_PATH$, $link$$59$$, $link$$59$$.$getPoints$, $link$$59$$.$setPoints$, 
        $i$$264_labelBounds$$3_node$$172_obj$$114$$.$updatedNewPath$), dvt.$Playable$.$appendOnEnd$($animator$$61_layoutViewport$$1$$, function() {
          $link$$59$$.$setPoints$($translatedPoints$$);
        })) : $animator$$61_layoutViewport$$1$$.$addProp$(dvt.$Animator$.$TYPE_POLYLINE$, $link$$59$$, $link$$59$$.$getPoints$, $link$$59$$.$setPoints$, $translatedPoints$$) : $link$$59$$.$setPoints$($translatedPoints$$);
      }
      $JSCompiler_StaticMethods_ApplyLabelPosition$$($containerPadding$$5_labelPos$$6_lc$$7_nc$$2$$, $link$$59$$, new dvt.$Point$(-$minx_topContainerPadding_tx$$9$$, -$containerId$$4_containerNode$$1_lopt_miny_ty$$10$$), $animator$$61_layoutViewport$$1$$);
    }
  }
  if ($animator$$61_layoutViewport$$1$$ = $layoutContext$$12$$.$getViewport$()) {
    this.$_layoutViewport$ = new dvt.$Rectangle$($animator$$61_layoutViewport$$1$$.x + $minx_topContainerPadding_tx$$9$$, $animator$$61_layoutViewport$$1$$.y + $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$, $animator$$61_layoutViewport$$1$$.w, $animator$$61_layoutViewport$$1$$.h), this.$_layoutViewportContainerId$ = $layoutContext$$12$$.$_containerId$;
  }
  $bSaveOffset$$1$$ && (this.$_layoutOffset$ = new dvt.$Point$($minx_topContainerPadding_tx$$9$$, $containerId$$4_containerNode$$1_lopt_miny_ty$$10$$));
};
function $JSCompiler_StaticMethods_GetLayoutViewport$$($JSCompiler_StaticMethods_GetLayoutViewport$self$$, $animator$$62$$) {
  var $viewport$$6$$;
  if ($JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewport$ && ($viewport$$6$$ = new dvt.$Rectangle$($JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewport$.x, $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewport$.y, $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewport$.$w$, $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewport$.$h$), $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewportContainerId$)) {
    for (var $containerId$$5_node$$173$$ = $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$getNodeById$($JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewportContainerId$);$containerId$$5_node$$173$$;) {
      var $tx$$10$$ = $containerId$$5_node$$173$$.$getTranslateX$(), $ty$$11$$ = $containerId$$5_node$$173$$.$getTranslateY$();
      if ($animator$$62$$) {
        var $animTx$$1$$ = $animator$$62$$.$getDestVal$($containerId$$5_node$$173$$, $containerId$$5_node$$173$$.$getTranslateX$), $animTy$$1$$ = $animator$$62$$.$getDestVal$($containerId$$5_node$$173$$, $containerId$$5_node$$173$$.$getTranslateY$);
        if ($animTx$$1$$ || 0 == $animTx$$1$$) {
          $tx$$10$$ = $animTx$$1$$;
        }
        if ($animTy$$1$$ || 0 == $animTy$$1$$) {
          $ty$$11$$ = $animTy$$1$$;
        }
      }
      $viewport$$6$$.x += $tx$$10$$;
      $viewport$$6$$.y += $ty$$11$$;
      $containerId$$5_node$$173$$ = ($containerId$$5_node$$173$$ = $containerId$$5_node$$173$$.getData().$getGroupId$ ? $containerId$$5_node$$173$$.getData().$_groupId$ : null) ? $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$getNodeById$($containerId$$5_node$$173$$) : null;
    }
  }
  return $viewport$$6$$;
}
$JSCompiler_prototypeAlias$$.$CalcLayoutOffset$ = function $$JSCompiler_prototypeAlias$$$$CalcLayoutOffset$$($x$$94$$, $y$$74$$) {
  return new dvt.$Point$($x$$94$$, $y$$74$$);
};
$JSCompiler_prototypeAlias$$.$AdjustMinZoom$ = function $$JSCompiler_prototypeAlias$$$$AdjustMinZoom$$($animator$$63$$, $fitBounds$$5$$) {
  if (0 == this.$getMinZoom$()) {
    var $panZoomCanvas$$1$$ = this.$_panZoomCanvas$, $minZoomFitBounds$$1$$ = $fitBounds$$5$$ ? $fitBounds$$5$$ : $JSCompiler_StaticMethods_CalcViewBounds$$(this, $animator$$63$$, void 0, void 0);
    $panZoomCanvas$$1$$.$setMinZoom$(this.$GetMinZoomFactor$() * Math.min($JSCompiler_StaticMethods_CalculateMinimumScale$$(this, $minZoomFitBounds$$1$$), $panZoomCanvas$$1$$.$getMaxZoom$()));
    return $minZoomFitBounds$$1$$;
  }
  return null;
};
$JSCompiler_prototypeAlias$$.$GetMinZoomFactor$ = function $$JSCompiler_prototypeAlias$$$$GetMinZoomFactor$$() {
  return 1;
};
function $JSCompiler_StaticMethods_CalculateMinimumScale$$($JSCompiler_StaticMethods_CalculateMinimumScale$self$$, $bounds$$22$$) {
  if (!$bounds$$22$$) {
    return 0;
  }
  var $panZoomCanvas$$2$$ = $JSCompiler_StaticMethods_CalculateMinimumScale$self$$.$_panZoomCanvas$;
  return Math.min(($JSCompiler_StaticMethods_CalculateMinimumScale$self$$.$Width$ - 2 * $panZoomCanvas$$2$$.$_zoomToFitPadding$) / $bounds$$22$$.$w$, ($JSCompiler_StaticMethods_CalculateMinimumScale$self$$.$Height$ - 2 * $panZoomCanvas$$2$$.$_zoomToFitPadding$) / $bounds$$22$$.$h$);
}
function $JSCompiler_StaticMethods_CalcViewBounds$$($JSCompiler_StaticMethods_CalcViewBounds$self$$, $animator$$65$$, $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$, $arLinkIds$$2$$) {
  var $bounds$$23$$ = null, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$, $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$, $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$, $contentPane$$ = $JSCompiler_StaticMethods_CalcViewBounds$self$$.$_panZoomCanvas$.$_contentPane$;
  $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$ || ($arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$ = $JSCompiler_StaticMethods_CalcViewBounds$self$$.$GetAllNodes$());
  for (var $i$$265$$ = 0;$i$$265$$ < $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$.length;$i$$265$$++) {
    if ($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$ = $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$[$i$$265$$], ($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ = $JSCompiler_StaticMethods_CalcViewBounds$self$$.$getNodeById$($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$)) && $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$_bVisible$ && 
    !$JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$_bHiddenAncestor$) {
      var $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$, $animator$$inline_2608_j$$inline_2626$$ = $animator$$65$$;
      $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.$getLayoutBounds$();
      $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = new dvt.$Rectangle$($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$);
      $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ = null;
      $animator$$inline_2608_j$$inline_2626$$ && ($bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ = $animator$$inline_2608_j$$inline_2626$$.$getDestVal$($JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.$getLabelPosition$));
      $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ || ($bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.$getLabelPosition$());
      var $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ = null, $labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ = null;
      $animator$$inline_2608_j$$inline_2626$$ && ($labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ = $animator$$inline_2608_j$$inline_2626$$.$getDestVal$($JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.$getLabelRotationAngle$), $labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ = 
      $animator$$inline_2608_j$$inline_2626$$.$getDestVal$($JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.$getLabelRotationPoint$));
      null == $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ && ($labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.$_labelRotAngle$);
      $labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ || ($labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.$_labelRotPoint$);
      $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.$getLabelBounds$();
      $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ && $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$ && (null != $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ && ($JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$ = $DvtBaseDiagram$RotateBounds$$($JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$, 
      $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$, $labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$)), $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.x = Math.min($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.x + $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$.x), 
      $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.y = Math.min($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.y + $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$.y), $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.$w$ = 
      Math.max($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.x + $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$.x + $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.$w$) - 
      $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.x, $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.$h$ = Math.max($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.y + 
      $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$.y + $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$.$h$) - $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.y);
      $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$ = $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$;
      $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ = $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = null;
      $animator$$65$$ && ($animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $animator$$65$$.$getDestVal$($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$getTranslateX$), $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ = 
      $animator$$65$$.$getDestVal$($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$getTranslateY$));
      null == $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ && ($animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$getTranslateX$());
      null == $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ && ($bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$getTranslateY$());
      $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x += $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$;
      $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y += $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$;
      if ($animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.getData().$getGroupId$ ? $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.getData().$_groupId$ : null) {
        $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.getParent(), $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ = $JSCompiler_StaticMethods_LocalToStage$$(new dvt.$Point$($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x, 
        $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y), $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$, $animator$$65$$), $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ = $JSCompiler_StaticMethods_StageToLocal$$($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$, 
        $contentPane$$, $animator$$65$$), $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $JSCompiler_StaticMethods_LocalToStage$$(new dvt.$Point$($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$), 
        $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$, $animator$$65$$), $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $JSCompiler_StaticMethods_StageToLocal$$($animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$, $contentPane$$, $animator$$65$$), $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x = 
        $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.x, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.y, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$ = $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.x - 
        $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.x, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$ = $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.y - $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.y;
      }
      $bounds$$23$$ ? ($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ = $bounds$$23$$.x, $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $bounds$$23$$.y, $bounds$$23$$.x = Math.min($bounds$$23$$.x, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x), $bounds$$23$$.y = Math.min($bounds$$23$$.y, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y), 
      $bounds$$23$$.$w$ = Math.max($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ + $bounds$$23$$.$w$, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$) - $bounds$$23$$.x, $bounds$$23$$.$h$ = Math.max($animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ + $bounds$$23$$.$h$, 
      $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$) - $bounds$$23$$.y) : $bounds$$23$$ = $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$;
    }
  }
  $arLinkIds$$2$$ || ($arLinkIds$$2$$ = $JSCompiler_StaticMethods_CalcViewBounds$self$$.$GetAllLinks$());
  for ($i$$265$$ = 0;$i$$265$$ < $arLinkIds$$2$$.length;$i$$265$$++) {
    if ($arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$ = $arLinkIds$$2$$[$i$$265$$], ($arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$ = $JSCompiler_StaticMethods_CalcViewBounds$self$$.$getLinkById$($arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$)) && $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$.$_bVisible$) {
      $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ = $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$;
      $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $animator$$65$$;
      $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$ = new dvt.$Rectangle$(Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ = null;
      $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ && ($bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ = $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.$getDestVal$($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$getPoints$));
      $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ || ($bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$getPoints$());
      if ($bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$) {
        $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ = $DvtDiagramLinkUtils$$.$GetControlPoints$($bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$);
        for (var $controlPoint$$inline_2621_minY$$inline_2625$$ = void 0, $controlPoint$$inline_2621_minY$$inline_2625$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$ = $labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ = $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ = void 0, $animator$$inline_2608_j$$inline_2626$$ = 0;$animator$$inline_2608_j$$inline_2626$$ < $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$.length;$animator$$inline_2608_j$$inline_2626$$++) {
          $controlPoint$$inline_2621_minY$$inline_2625$$ = $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$[$animator$$inline_2608_j$$inline_2626$$], $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ = Math.max($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$, $controlPoint$$inline_2621_minY$$inline_2625$$.x), $labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ = 
          Math.max($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$, $controlPoint$$inline_2621_minY$$inline_2625$$.y), $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$ = Math.min($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x, $controlPoint$$inline_2621_minY$$inline_2625$$.x), $controlPoint$$inline_2621_minY$$inline_2625$$ = 
          Math.min($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y, $controlPoint$$inline_2621_minY$$inline_2625$$.y), $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y = $controlPoint$$inline_2621_minY$$inline_2625$$, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$ = 
          $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ - $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$ = $labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ - $controlPoint$$inline_2621_minY$$inline_2625$$;
        }
      }
      $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$ = new dvt.$Rectangle$($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$);
      $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ = null;
      $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ && ($labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ = $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.$getDestVal$($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$getLabelPosition$));
      null == $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ && ($labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$getLabelPosition$());
      $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$ = $labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ = null;
      $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ && ($labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ = $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.$getDestVal$($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$getLabelRotationAngle$), 
      $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$ = $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.$getDestVal$($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$getLabelRotationPoint$));
      null == $labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ && ($labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$_labelRotAngle$);
      $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$ || ($JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$_labelRotPoint$);
      $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$getLabelBounds$();
      $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$ && $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ && (null != $labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$ && ($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ = $DvtBaseDiagram$RotateBounds$$($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$, 
      $labelRotAngle$$inline_2629_labelRotPoint$$inline_2613_maxY$$inline_2623$$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2607_labelBounds$$inline_2614_labelRotPoint$$inline_2630_minX$$inline_2624$$)), $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$.x = Math.min($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.x + 
      $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$.x), $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$.y = Math.min($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.y + $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$.y), $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$.$w$ = 
      Math.max($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.x + $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$.x + $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$w$) - 
      $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$.x, $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$.$h$ = Math.max($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.y + 
      $labelPos$$inline_2628_labelRotAngle$$inline_2612_maxX$$inline_2622$$.y + $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.$h$) - $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$.y);
      $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$ = $bounds$$inline_2627_controlPoints$$inline_2620_labelPos$$inline_2611_points$$inline_2619_ty$$12$$;
      if ($animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$.getData().$getGroupId$ ? $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$.getData().$_groupId$ : null) {
        $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$ = $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$.getParent(), $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ = $JSCompiler_StaticMethods_LocalToStage$$(new dvt.$Point$($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y), $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$, 
        $animator$$65$$), $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ = $JSCompiler_StaticMethods_StageToLocal$$($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$, $contentPane$$, $animator$$65$$), $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $JSCompiler_StaticMethods_LocalToStage$$(new dvt.$Point$($dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x + 
        $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$), $arNodeIds$$4_link$$60_linkId$$33_linkParent$$1$$, $animator$$65$$), $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $JSCompiler_StaticMethods_StageToLocal$$($animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$, 
        $contentPane$$, $animator$$65$$), $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.x, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.y, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$ = 
        $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.x - $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.x, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$ = $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$.y - $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$.y
        ;
      }
      $bounds$$23$$ ? ($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ = $bounds$$23$$.x, $animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ = $bounds$$23$$.y, $bounds$$23$$.x = Math.min($bounds$$23$$.x, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x), $bounds$$23$$.y = Math.min($bounds$$23$$.y, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y), 
      $bounds$$23$$.$w$ = Math.max($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2616_bx$$1_labelBounds$$inline_2631_localPoint1_node$$174_stagePoint1$$ + $bounds$$23$$.$w$, $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.x + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$w$) - $bounds$$23$$.x, $bounds$$23$$.$h$ = Math.max($animator$$inline_2617_bounds$$inline_2610_by$$1_groupId$$22_localPoint2_nodeParent$$1_stagePoint2_tx$$11$$ + $bounds$$23$$.$h$, 
      $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.y + $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$.$h$) - $bounds$$23$$.y) : $bounds$$23$$ = $dims$$31_linkBounds$$inline_2618_nodeBounds$$inline_2609_nodeId$$91$$;
    }
  }
  return $bounds$$23$$;
}
function $DvtBaseDiagram$RotateBounds$$($bottomRight$$3_bounds$$24_br$$1$$, $rotAngle$$2_tl$$, $minY$$7_rotPoint$$2$$) {
  if (null == $rotAngle$$2_tl$$ && !$minY$$7_rotPoint$$2$$) {
    return $bottomRight$$3_bounds$$24_br$$1$$;
  }
  var $topLeft$$3$$ = new dvt.$Point$($bottomRight$$3_bounds$$24_br$$1$$.x, $bottomRight$$3_bounds$$24_br$$1$$.y), $topRight$$2_tr$$ = new dvt.$Point$($bottomRight$$3_bounds$$24_br$$1$$.x + $bottomRight$$3_bounds$$24_br$$1$$.$w$, $bottomRight$$3_bounds$$24_br$$1$$.y), $bl_bottomLeft$$2$$ = new dvt.$Point$($bottomRight$$3_bounds$$24_br$$1$$.x, $bottomRight$$3_bounds$$24_br$$1$$.y + $bottomRight$$3_bounds$$24_br$$1$$.$h$);
  $bottomRight$$3_bounds$$24_br$$1$$ = new dvt.$Point$($bottomRight$$3_bounds$$24_br$$1$$.x + $bottomRight$$3_bounds$$24_br$$1$$.$w$, $bottomRight$$3_bounds$$24_br$$1$$.y + $bottomRight$$3_bounds$$24_br$$1$$.$h$);
  var $mat$$9_minX$$7$$ = new dvt.$Matrix$;
  null != $rotAngle$$2_tl$$ && ($minY$$7_rotPoint$$2$$ && $mat$$9_minX$$7$$.translate(-$minY$$7_rotPoint$$2$$.x, -$minY$$7_rotPoint$$2$$.y), $mat$$9_minX$$7$$.rotate($rotAngle$$2_tl$$), $minY$$7_rotPoint$$2$$ && $mat$$9_minX$$7$$.translate($minY$$7_rotPoint$$2$$.x, $minY$$7_rotPoint$$2$$.y));
  $rotAngle$$2_tl$$ = $mat$$9_minX$$7$$.$transformPoint$($topLeft$$3$$);
  $topRight$$2_tr$$ = $mat$$9_minX$$7$$.$transformPoint$($topRight$$2_tr$$);
  $bl_bottomLeft$$2$$ = $mat$$9_minX$$7$$.$transformPoint$($bl_bottomLeft$$2$$);
  $bottomRight$$3_bounds$$24_br$$1$$ = $mat$$9_minX$$7$$.$transformPoint$($bottomRight$$3_bounds$$24_br$$1$$);
  $mat$$9_minX$$7$$ = Math.min(Math.min($rotAngle$$2_tl$$.x, $topRight$$2_tr$$.x), Math.min($bl_bottomLeft$$2$$.x, $bottomRight$$3_bounds$$24_br$$1$$.x));
  $minY$$7_rotPoint$$2$$ = Math.min(Math.min($rotAngle$$2_tl$$.y, $topRight$$2_tr$$.y), Math.min($bl_bottomLeft$$2$$.y, $bottomRight$$3_bounds$$24_br$$1$$.y));
  return new dvt.$Rectangle$($mat$$9_minX$$7$$, $minY$$7_rotPoint$$2$$, Math.max(Math.max($rotAngle$$2_tl$$.x, $topRight$$2_tr$$.x), Math.max($bl_bottomLeft$$2$$.x, $bottomRight$$3_bounds$$24_br$$1$$.x)) - $mat$$9_minX$$7$$, Math.max(Math.max($rotAngle$$2_tl$$.y, $topRight$$2_tr$$.y), Math.max($bl_bottomLeft$$2$$.y, $bottomRight$$3_bounds$$24_br$$1$$.y)) - $minY$$7_rotPoint$$2$$);
}
function $JSCompiler_StaticMethods_StageToLocal$$($mat$$10_point$$33$$, $displayable$$16$$, $animator$$66$$) {
  for (var $pathToStage$$ = $displayable$$16$$.$getPathToStage$(), $retPoint$$ = $mat$$10_point$$33$$, $i$$266$$ = $pathToStage$$.length - 1;0 <= $i$$266$$;$i$$266$$--) {
    $displayable$$16$$ = $pathToStage$$[$i$$266$$];
    $mat$$10_point$$33$$ = $displayable$$16$$.$getMatrix$().clone();
    var $tx$$12$$ = null, $ty$$13$$ = null;
    $animator$$66$$ && ($tx$$12$$ = $animator$$66$$.$getDestVal$($displayable$$16$$, $displayable$$16$$.$getTranslateX$), $ty$$13$$ = $animator$$66$$.$getDestVal$($displayable$$16$$, $displayable$$16$$.$getTranslateY$));
    null != $tx$$12$$ && ($mat$$10_point$$33$$.$_tx$ = $tx$$12$$);
    null != $ty$$13$$ && ($mat$$10_point$$33$$.$_ty$ = $ty$$13$$);
    $mat$$10_point$$33$$.$invert$();
    $retPoint$$ = $mat$$10_point$$33$$.$transformPoint$($retPoint$$);
  }
  return $retPoint$$;
}
function $JSCompiler_StaticMethods_LocalToStage$$($mat$$11_point$$34$$, $displayable$$17$$, $animator$$67$$) {
  for (var $pathToStage$$1$$ = $displayable$$17$$.$getPathToStage$(), $retPoint$$1$$ = $mat$$11_point$$34$$, $i$$267$$ = 0;$i$$267$$ < $pathToStage$$1$$.length;$i$$267$$++) {
    $displayable$$17$$ = $pathToStage$$1$$[$i$$267$$];
    $mat$$11_point$$34$$ = $displayable$$17$$.$getMatrix$().clone();
    var $tx$$13$$ = null, $ty$$14$$ = null;
    $animator$$67$$ && ($tx$$13$$ = $animator$$67$$.$getDestVal$($displayable$$17$$, $displayable$$17$$.$getTranslateX$), $ty$$14$$ = $animator$$67$$.$getDestVal$($displayable$$17$$, $displayable$$17$$.$getTranslateY$));
    null != $tx$$13$$ && ($mat$$11_point$$34$$.$_tx$ = $tx$$13$$);
    null != $ty$$14$$ && ($mat$$11_point$$34$$.$_ty$ = $ty$$14$$);
    $retPoint$$1$$ = $mat$$11_point$$34$$.$transformPoint$($retPoint$$1$$);
  }
  return $retPoint$$1$$;
}
$JSCompiler_prototypeAlias$$.$ConstrainPanning$ = function $$JSCompiler_prototypeAlias$$$$ConstrainPanning$$($maxPanX_x$$95$$, $maxPanY_y$$75$$, $minPanX_w$$19$$, $h$$15_minPanY$$, $dy$$8_zoom$$7$$) {
  var $pzc$$11$$ = this.$_panZoomCanvas$, $dx$$6_halfViewportW$$ = $pzc$$11$$.$getSize$().$w$ / 2, $halfViewportH_viewportBounds$$1$$ = $pzc$$11$$.$getSize$().$h$ / 2;
  $minPanX_w$$19$$ = $dx$$6_halfViewportW$$ - ($minPanX_w$$19$$ + $maxPanX_x$$95$$) * $dy$$8_zoom$$7$$;
  $h$$15_minPanY$$ = $halfViewportH_viewportBounds$$1$$ - ($h$$15_minPanY$$ + $maxPanY_y$$75$$) * $dy$$8_zoom$$7$$;
  $maxPanX_x$$95$$ = $dx$$6_halfViewportW$$ - $maxPanX_x$$95$$ * $dy$$8_zoom$$7$$;
  $maxPanY_y$$75$$ = $halfViewportH_viewportBounds$$1$$ - $maxPanY_y$$75$$ * $dy$$8_zoom$$7$$;
  this.$_layoutViewport$ && ($halfViewportH_viewportBounds$$1$$ = $JSCompiler_StaticMethods_GetLayoutViewport$$(this), -$halfViewportH_viewportBounds$$1$$.x * $dy$$8_zoom$$7$$ < $minPanX_w$$19$$ ? ($dx$$6_halfViewportW$$ = $minPanX_w$$19$$ + $halfViewportH_viewportBounds$$1$$.x * $dy$$8_zoom$$7$$, $minPanX_w$$19$$ -= $dx$$6_halfViewportW$$, $maxPanX_x$$95$$ += $dx$$6_halfViewportW$$) : -$halfViewportH_viewportBounds$$1$$.x * $dy$$8_zoom$$7$$ > $maxPanX_x$$95$$ && ($dx$$6_halfViewportW$$ = -$halfViewportH_viewportBounds$$1$$.x * 
  $dy$$8_zoom$$7$$ - $maxPanX_x$$95$$, $minPanX_w$$19$$ -= $dx$$6_halfViewportW$$, $maxPanX_x$$95$$ += $dx$$6_halfViewportW$$), -$halfViewportH_viewportBounds$$1$$.y * $dy$$8_zoom$$7$$ < $h$$15_minPanY$$ ? ($dy$$8_zoom$$7$$ = $h$$15_minPanY$$ + $halfViewportH_viewportBounds$$1$$.y * $dy$$8_zoom$$7$$, $h$$15_minPanY$$ -= $dy$$8_zoom$$7$$, $maxPanY_y$$75$$ += $dy$$8_zoom$$7$$) : -$halfViewportH_viewportBounds$$1$$.y * $dy$$8_zoom$$7$$ > $maxPanY_y$$75$$ && ($dy$$8_zoom$$7$$ = -$halfViewportH_viewportBounds$$1$$.y * 
  $dy$$8_zoom$$7$$ - $maxPanY_y$$75$$, $h$$15_minPanY$$ -= $dy$$8_zoom$$7$$, $maxPanY_y$$75$$ += $dy$$8_zoom$$7$$));
  $pzc$$11$$.$setMinPanX$($minPanX_w$$19$$);
  $pzc$$11$$.$setMinPanY$($h$$15_minPanY$$);
  $pzc$$11$$.$setMaxPanX$($maxPanX_x$$95$$);
  $pzc$$11$$.$setMaxPanY$($maxPanY_y$$75$$);
};
function $DvtBaseDiagram$getContainerPadding$$($layoutContainerPadding$$) {
  var $containerPadding$$6$$ = {};
  $containerPadding$$6$$.top = $layoutContainerPadding$$.top;
  $containerPadding$$6$$.right = $layoutContainerPadding$$.right;
  $containerPadding$$6$$.bottom = $layoutContainerPadding$$.bottom;
  $containerPadding$$6$$.left = $layoutContainerPadding$$.left;
  return $containerPadding$$6$$;
}
function $DvtBaseDiagram$getLayoutContainerPadding$$($containerPadding$$7$$) {
  var $layoutContainerPadding$$1$$ = {};
  $layoutContainerPadding$$1$$.top = $containerPadding$$7$$.top;
  $layoutContainerPadding$$1$$.right = $containerPadding$$7$$.right;
  $layoutContainerPadding$$1$$.bottom = $containerPadding$$7$$.bottom;
  $layoutContainerPadding$$1$$.left = $containerPadding$$7$$.left;
  return $layoutContainerPadding$$1$$;
}
$JSCompiler_prototypeAlias$$.$renderNodeFromContext$ = function $$JSCompiler_prototypeAlias$$$$renderNodeFromContext$$() {
};
function $JSCompiler_StaticMethods_UpdateNodeLayoutContext$$($nodeContext$$3$$, $node$$175$$) {
  var $bounds$$inline_2634_bounds$$inline_2637$$ = $DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$($node$$175$$.$getLayoutBounds$());
  $nodeContext$$3$$.$_bounds$ = $bounds$$inline_2634_bounds$$inline_2637$$;
  $nodeContext$$3$$.$_origBounds$ = $bounds$$inline_2634_bounds$$inline_2637$$;
  $bounds$$inline_2634_bounds$$inline_2637$$ = $DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$($node$$175$$.$getContentBounds$());
  $nodeContext$$3$$.$_contentBounds$ = $bounds$$inline_2634_bounds$$inline_2637$$;
  $nodeContext$$3$$.$_origContentBounds$ = $bounds$$inline_2634_bounds$$inline_2637$$;
  $nodeContext$$3$$.$setLabelBounds$($DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$($node$$175$$.$getLabelBounds$()));
  $nodeContext$$3$$.$IsRendered$ = !0;
}
function $JSCompiler_StaticMethods_ApplyLabelPosition$$($objc$$, $obj$$118$$, $pos$$26_translatedPos$$, $animator$$68$$) {
  var $labelBounds$$4$$ = $objc$$.$getLabelBounds$(), $labelBounds$$4$$ = $DvtDiagramLayoutUtils$$.$convertDiagramRectToRect$($labelBounds$$4$$), $labelPos$$7_labelRotAngle$$2$$ = $objc$$.$getLabelPosition$();
  if ($labelBounds$$4$$ && $labelPos$$7_labelRotAngle$$2$$) {
    $pos$$26_translatedPos$$ = new dvt.$Point$($labelPos$$7_labelRotAngle$$2$$.x - $pos$$26_translatedPos$$.x, $labelPos$$7_labelRotAngle$$2$$.y - $pos$$26_translatedPos$$.y);
    var $labelPos$$7_labelRotAngle$$2$$ = $objc$$.$_labelRotAngle$, $labelRotPoint$$2$$ = $DvtDiagramLayoutUtils$$.$convertDiagramPointToPoint$($objc$$.$_labelRotPoint$);
    $animator$$68$$ ? ($animator$$68$$.$addProp$(dvt.$Animator$.$TYPE_RECTANGLE$, $obj$$118$$, $obj$$118$$.$getLabelBounds$, $obj$$118$$.$setLabelBounds$, $labelBounds$$4$$), $obj$$118$$.$getLabelPosition$() ? $animator$$68$$.$addProp$(dvt.$Animator$.$TYPE_POINT$, $obj$$118$$, $obj$$118$$.$getLabelPosition$, $obj$$118$$.$setLabelPosition$, $pos$$26_translatedPos$$) : $obj$$118$$.$setLabelPosition$($pos$$26_translatedPos$$), null != $labelPos$$7_labelRotAngle$$2$$ && $animator$$68$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, 
    $obj$$118$$, $obj$$118$$.$getLabelRotationAngle$, $obj$$118$$.$setLabelRotationAngle$, $labelPos$$7_labelRotAngle$$2$$), $labelRotPoint$$2$$ && ($obj$$118$$.$_labelRotPoint$ ? $animator$$68$$.$addProp$(dvt.$Animator$.$TYPE_POINT$, $obj$$118$$, $obj$$118$$.$getLabelRotationPoint$, $obj$$118$$.$setLabelRotationPoint$, $labelRotPoint$$2$$) : $obj$$118$$.$setLabelRotationPoint$($labelRotPoint$$2$$))) : ($obj$$118$$.$setLabelBounds$($labelBounds$$4$$), $obj$$118$$.$setLabelPosition$($pos$$26_translatedPos$$), 
    $obj$$118$$.$setLabelAlignments$($objc$$.$getLabelHalign$(), $objc$$.$_labelValign$), null != $labelPos$$7_labelRotAngle$$2$$ && $obj$$118$$.$setLabelRotationAngle$($labelPos$$7_labelRotAngle$$2$$), $labelRotPoint$$2$$ && $obj$$118$$.$setLabelRotationPoint$($labelRotPoint$$2$$));
  }
}
function $DvtBaseDiagramKeyboardHandler$$($component$$5$$, $manager$$6$$) {
  this.Init($component$$5$$, $manager$$6$$);
}
dvt.$Obj$.$createSubclass$($DvtBaseDiagramKeyboardHandler$$, dvt.$PanZoomCanvasKeyboardHandler$, "DvtBaseDiagramKeyboardHandler");
$JSCompiler_prototypeAlias$$ = $DvtBaseDiagramKeyboardHandler$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($diagram$$89$$, $manager$$7$$) {
  $DvtBaseDiagramKeyboardHandler$$.$superclass$.Init.call(this, $diagram$$89$$, $manager$$7$$);
  this.$_diagram$ = $diagram$$89$$;
};
$JSCompiler_prototypeAlias$$.$GetDiagram$ = function $$JSCompiler_prototypeAlias$$$$GetDiagram$$() {
  return this.$_diagram$;
};
$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$182$$) {
  return $event$$182$$.keyCode == dvt.KeyboardEvent.$TAB$ ? !1 : this.$isNavigationEvent$($event$$182$$) && !$event$$182$$.ctrlKey;
};
$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$183$$) {
  return $event$$183$$.keyCode == dvt.KeyboardEvent.$SPACE$ && $event$$183$$.ctrlKey;
};
$JSCompiler_prototypeAlias$$.$getFirstNavigableLink$ = function $$JSCompiler_prototypeAlias$$$$getFirstNavigableLink$$($node$$176_nodeBB_nodeCenterX$$, $direction$$7_event$$184$$, $listOfLinks$$) {
  $direction$$7_event$$184$$ = $direction$$7_event$$184$$.keyCode;
  if (!$listOfLinks$$ || 1 > $listOfLinks$$.length || !$node$$176_nodeBB_nodeCenterX$$) {
    return null;
  }
  var $link$$61$$ = $listOfLinks$$[0];
  $node$$176_nodeBB_nodeCenterX$$ = $node$$176_nodeBB_nodeCenterX$$.$getKeyboardBoundingBox$();
  $node$$176_nodeBB_nodeCenterX$$ = $node$$176_nodeBB_nodeCenterX$$.x + $node$$176_nodeBB_nodeCenterX$$.$w$ / 2;
  for (var $i$$268$$ = 0;$i$$268$$ < $listOfLinks$$.length;$i$$268$$++) {
    var $object$$6$$ = $listOfLinks$$[$i$$268$$], $linkBB_linkCenterX$$ = $object$$6$$.$getKeyboardBoundingBox$(), $linkBB_linkCenterX$$ = $linkBB_linkCenterX$$.x + $linkBB_linkCenterX$$.$w$ / 2;
    if ($direction$$7_event$$184$$ == dvt.KeyboardEvent.$OPEN_ANGLED_BRACKET$ && $linkBB_linkCenterX$$ <= $node$$176_nodeBB_nodeCenterX$$ || $direction$$7_event$$184$$ == dvt.KeyboardEvent.$CLOSE_ANGLED_BRACKET$ && $linkBB_linkCenterX$$ >= $node$$176_nodeBB_nodeCenterX$$) {
      $link$$61$$ = $object$$6$$;
      break;
    }
  }
  return $link$$61$$;
};
$JSCompiler_prototypeAlias$$.$getNextNavigableLink$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigableLink$$($i$$inline_2646_index$$130_node$$177$$, $currentLink$$, $bForward$$8_event$$185$$, $listOfLinks$$1$$) {
  if (!$listOfLinks$$1$$) {
    return null;
  }
  if (!$currentLink$$) {
    return $listOfLinks$$1$$[0];
  }
  if (!$i$$inline_2646_index$$130_node$$177$$) {
    return $currentLink$$;
  }
  for (var $i$$269_i$$inline_2642_link$$inline_2647$$ = 0;$i$$269_i$$inline_2642_link$$inline_2647$$ < $listOfLinks$$1$$.length;$i$$269_i$$inline_2642_link$$inline_2647$$++) {
    var $JSCompiler_inline_result$$4259_link$$inline_2643_link$$inline_4822$$ = $listOfLinks$$1$$[$i$$269_i$$inline_2642_link$$inline_2647$$], $JSCompiler_temp_const$$4254_JSCompiler_temp_const$$4256_JSCompiler_temp_const$$4258$$ = $JSCompiler_inline_result$$4259_link$$inline_2643_link$$inline_4822$$, $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$ = $i$$inline_2646_index$$130_node$$177$$, $endNode$$inline_4807_link$$inline_4805$$ = $JSCompiler_inline_result$$4259_link$$inline_2643_link$$inline_4822$$, 
    $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$ = this.$GetVisibleNode$($endNode$$inline_4807_link$$inline_4805$$.$getStartId$ ? $endNode$$inline_4807_link$$inline_4805$$.$getStartId$() : $endNode$$inline_4807_link$$inline_4805$$.getData().$getStartId$()), $endNode$$inline_4807_link$$inline_4805$$ = this.$GetVisibleNode$($endNode$$inline_4807_link$$inline_4805$$.$getEndId$ ? $endNode$$inline_4807_link$$inline_4805$$.$getEndId$() : 
    $endNode$$inline_4807_link$$inline_4805$$.getData().$getEndId$()), $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$ = $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$ == $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$ ? $endNode$$inline_4807_link$$inline_4805$$ : $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$, 
    $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$ = $JSCompiler_StaticMethods__getNodeCenter$$($angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$), $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$ = $JSCompiler_StaticMethods__getNodeCenter$$($endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$), 
    $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$ = Math.atan2($endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$.y - $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$.y, $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$.x - $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$.x), 
    $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$ = 0 > $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$ ? $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$ + 2 * Math.PI : $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$;
    $JSCompiler_temp_const$$4254_JSCompiler_temp_const$$4256_JSCompiler_temp_const$$4258$$.$__angle$ = $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$;
    $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$ = $JSCompiler_temp_const$$4254_JSCompiler_temp_const$$4256_JSCompiler_temp_const$$4258$$ = $JSCompiler_inline_result$$4259_link$$inline_2643_link$$inline_4822$$;
    $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$ = this.$GetVisibleNode$($endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$.$getStartId$ ? $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$.$getStartId$() : $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$.getData().$getStartId$());
    $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$ = this.$GetVisibleNode$($endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$.$getEndId$ ? $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$.$getEndId$() : $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$.getData().$getEndId$());
    $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$ = $JSCompiler_StaticMethods__getNodeCenter$$($angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$);
    $endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$ = $JSCompiler_StaticMethods__getNodeCenter$$($endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$);
    $JSCompiler_temp_const$$4254_JSCompiler_temp_const$$4256_JSCompiler_temp_const$$4258$$.$__distance$ = Math.sqrt(Math.pow($endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$.x - $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$.x, 2) + Math.pow($endNode$$inline_4816_link$$inline_4814_oppositeNode$$inline_4808_p2$$inline_4810_p2$$inline_4818_startNode$$inline_4806$$.y - $angle$$inline_4811_node$$inline_4804_p1$$inline_4809_p1$$inline_4817_startNode$$inline_4815$$.y, 
    2));
    $JSCompiler_temp_const$$4254_JSCompiler_temp_const$$4256_JSCompiler_temp_const$$4258$$ = $JSCompiler_inline_result$$4259_link$$inline_2643_link$$inline_4822$$;
    $JSCompiler_inline_result$$4259_link$$inline_2643_link$$inline_4822$$ = $i$$inline_2646_index$$130_node$$177$$ == this.$GetVisibleNode$($JSCompiler_inline_result$$4259_link$$inline_2643_link$$inline_4822$$.$getEndId$ ? $JSCompiler_inline_result$$4259_link$$inline_2643_link$$inline_4822$$.$getEndId$() : $JSCompiler_inline_result$$4259_link$$inline_2643_link$$inline_4822$$.getData().$getEndId$()) ? 1 : 0;
    $JSCompiler_temp_const$$4254_JSCompiler_temp_const$$4256_JSCompiler_temp_const$$4258$$.$__direction$ = $JSCompiler_inline_result$$4259_link$$inline_2643_link$$inline_4822$$;
  }
  $listOfLinks$$1$$.sort($JSCompiler_StaticMethods__getLinkComparator$$());
  for ($i$$inline_2646_index$$130_node$$177$$ = 0;$i$$inline_2646_index$$130_node$$177$$ < $listOfLinks$$1$$.length;$i$$inline_2646_index$$130_node$$177$$++) {
    $i$$269_i$$inline_2642_link$$inline_2647$$ = $listOfLinks$$1$$[$i$$inline_2646_index$$130_node$$177$$], $i$$269_i$$inline_2642_link$$inline_2647$$.$__angle$ = void 0, $i$$269_i$$inline_2642_link$$inline_2647$$.$__distance$ = void 0, $i$$269_i$$inline_2642_link$$inline_2647$$.$__direction$ = void 0;
  }
  $bForward$$8_event$$185$$ = $bForward$$8_event$$185$$.keyCode == dvt.KeyboardEvent.$DOWN_ARROW$ ? !0 : !1;
  for ($i$$269_i$$inline_2642_link$$inline_2647$$ = $i$$inline_2646_index$$130_node$$177$$ = 0;$i$$269_i$$inline_2642_link$$inline_2647$$ < $listOfLinks$$1$$.length;$i$$269_i$$inline_2642_link$$inline_2647$$++) {
    if ($listOfLinks$$1$$[$i$$269_i$$inline_2642_link$$inline_2647$$] === $currentLink$$) {
      $i$$inline_2646_index$$130_node$$177$$ = $bForward$$8_event$$185$$ ? $i$$269_i$$inline_2642_link$$inline_2647$$ == $listOfLinks$$1$$.length - 1 ? 0 : $i$$269_i$$inline_2642_link$$inline_2647$$ + 1 : 0 == $i$$269_i$$inline_2642_link$$inline_2647$$ ? $listOfLinks$$1$$.length - 1 : $i$$269_i$$inline_2642_link$$inline_2647$$ - 1;
      break;
    }
  }
  return $listOfLinks$$1$$[$i$$inline_2646_index$$130_node$$177$$];
};
$JSCompiler_prototypeAlias$$.$GetVisibleNode$ = function $$JSCompiler_prototypeAlias$$$$GetVisibleNode$$() {
  return null;
};
function $JSCompiler_StaticMethods__getNodeCenter$$($node$$179_nodeBB$$1$$) {
  $node$$179_nodeBB$$1$$ = $node$$179_nodeBB$$1$$.$getKeyboardBoundingBox$();
  return new dvt.$Point$($node$$179_nodeBB$$1$$.x + $node$$179_nodeBB$$1$$.$w$ / 2, $node$$179_nodeBB$$1$$.y + $node$$179_nodeBB$$1$$.$h$ / 2);
}
function $JSCompiler_StaticMethods__getLinkComparator$$() {
  return function($link1$$, $link2$$) {
    var $linkAngle1$$ = $link1$$.$__angle$, $linkAngle2$$ = $link2$$.$__angle$, $res$$1$$ = -1;
    !$DvtBaseDiagramKeyboardHandler$_anglesAreEqualWithinTolerance$$($linkAngle1$$, $linkAngle2$$) && $linkAngle1$$ > $linkAngle2$$ ? $res$$1$$ = 1 : $DvtBaseDiagramKeyboardHandler$_anglesAreEqualWithinTolerance$$($linkAngle1$$, $linkAngle2$$) && ($link1$$.$__distance$ > $link2$$.$__distance$ ? $res$$1$$ = 1 : $link2$$.$__distance$ == $link1$$.$__distance$ && $link1$$.$__direction$ > $link2$$.$__direction$ ? $res$$1$$ = 1 : $link2$$.$__distance$ == $link1$$.$__distance$ && $link1$$.$__direction$ == 
    $link2$$.$__direction$ && ($res$$1$$ = 0));
    return $res$$1$$;
  };
}
function $DvtBaseDiagramKeyboardHandler$_anglesAreEqualWithinTolerance$$($a1$$, $a2$$) {
  var $res$$2$$ = 1E-7 >= Math.abs($a1$$ - $a2$$);
  $res$$2$$ || ($res$$2$$ = 1E-7 >= Math.abs(2 * Math.PI + Math.min($a1$$, $a2$$) - Math.max($a1$$, $a2$$)));
  return $res$$2$$;
}
function $DvtBaseDiagramNode$$($context$$108$$, $nodeId$$93$$, $diagram$$90$$) {
  this.Init($context$$108$$, $nodeId$$93$$, $diagram$$90$$);
}
dvt.$Obj$.$createSubclass$($DvtBaseDiagramNode$$, dvt.$Container$, "DvtBaseDiagramNode");
$JSCompiler_prototypeAlias$$ = $DvtBaseDiagramNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$109$$, $nodeId$$94$$, $diagram$$91$$) {
  $DvtBaseDiagramNode$$.$superclass$.Init.call(this, $context$$109$$, null, $nodeId$$94$$);
  this.$_diagram$ = $diagram$$91$$;
  this.$_selected$ = this.$_bDisclosed$ = !1;
  this.$_selectable$ = !0;
  this.$_labelObj$;
  this.$_labelPos$;
  this.$_labelRotAngle$;
  this.$_labelRotPoint$;
  this.$_outLinkIds$;
  this.$_inLinkIds$;
};
$JSCompiler_prototypeAlias$$.$GetDiagram$ = function $$JSCompiler_prototypeAlias$$$$GetDiagram$$() {
  return this.$_diagram$;
};
$JSCompiler_prototypeAlias$$.getData = function $$JSCompiler_prototypeAlias$$$getData$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$getLayoutBounds$ = function $$JSCompiler_prototypeAlias$$$$getLayoutBounds$$() {
  return this.$getContentBounds$();
};
$JSCompiler_prototypeAlias$$.$getContentBounds$ = function $$JSCompiler_prototypeAlias$$$$getContentBounds$$() {
  return new dvt.$Rectangle$(0, 0, this.getWidth(), this.getHeight());
};
$JSCompiler_prototypeAlias$$.$getLayoutAttributes$ = function $$JSCompiler_prototypeAlias$$$$getLayoutAttributes$$() {
  return {};
};
$JSCompiler_prototypeAlias$$.$setLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$setLabelPosition$$($mat$$inline_2654_pos$$27$$) {
  if ($mat$$inline_2654_pos$$27$$) {
    this.$_labelPos$ = $mat$$inline_2654_pos$$27$$;
    var $label$$inline_2649$$ = this.$_labelObj$;
    this.$getLabelBounds$();
    $label$$inline_2649$$ && ($mat$$inline_2654_pos$$27$$ = $DvtBaseDiagramNode$CalcLabelMatrix$$($mat$$inline_2654_pos$$27$$, this.$_labelRotAngle$, this.$_labelRotPoint$), $label$$inline_2649$$.$setMatrix$($mat$$inline_2654_pos$$27$$));
  }
};
$JSCompiler_prototypeAlias$$.$getLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$getLabelPosition$$() {
  return this.$_labelPos$;
};
$JSCompiler_prototypeAlias$$.$getLabelBounds$ = function $$JSCompiler_prototypeAlias$$$$getLabelBounds$$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$setLabelBounds$ = function $$JSCompiler_prototypeAlias$$$$setLabelBounds$$() {
};
$JSCompiler_prototypeAlias$$.$getContainerPadding$ = function $$JSCompiler_prototypeAlias$$$$getContainerPadding$$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$setContainerPadding$ = function $$JSCompiler_prototypeAlias$$$$setContainerPadding$$() {
};
$JSCompiler_prototypeAlias$$.$isDisclosed$ = function $$JSCompiler_prototypeAlias$$$$isDisclosed$$() {
  return this.$_bDisclosed$;
};
$JSCompiler_prototypeAlias$$.$setDisclosed$ = function $$JSCompiler_prototypeAlias$$$$setDisclosed$$($bDisclosed$$7$$) {
  this.$_bDisclosed$ = $bDisclosed$$7$$;
};
$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$_selected$;
};
$DvtBaseDiagramNode$$.prototype.isSelected = $DvtBaseDiagramNode$$.prototype.$isSelected$;
$JSCompiler_prototypeAlias$$ = $DvtBaseDiagramNode$$.prototype;
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$10$$) {
  this.$_selected$ = $selected$$10$$;
};
$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($selectable$$2$$) {
  this.$_selectable$ = $selectable$$2$$;
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$GetDiagram$().$isSelectionSupported$() && this.$_selectable$;
};
$JSCompiler_prototypeAlias$$.$setHiddenAncestor$ = function $$JSCompiler_prototypeAlias$$$$setHiddenAncestor$$($bHiddenAncestor$$2$$) {
  this.$_bHiddenAncestor$ = $bHiddenAncestor$$2$$;
};
$JSCompiler_prototypeAlias$$.$isHiddenAncestor$ = function $$JSCompiler_prototypeAlias$$$$isHiddenAncestor$$() {
  return this.$_bHiddenAncestor$;
};
$JSCompiler_prototypeAlias$$.$setLabelRotationAngle$ = function $$JSCompiler_prototypeAlias$$$$setLabelRotationAngle$$($angle$$9_mat$$inline_2665$$) {
  this.$_labelRotAngle$ = $angle$$9_mat$$inline_2665$$;
  var $label$$inline_2660$$ = this.$_labelObj$;
  this.$getLabelBounds$();
  $label$$inline_2660$$ && ($angle$$9_mat$$inline_2665$$ = $DvtBaseDiagramNode$CalcLabelMatrix$$(this.$getLabelPosition$(), $angle$$9_mat$$inline_2665$$, this.$_labelRotPoint$), $label$$inline_2660$$.$setMatrix$($angle$$9_mat$$inline_2665$$));
};
$JSCompiler_prototypeAlias$$.$getLabelRotationAngle$ = function $$JSCompiler_prototypeAlias$$$$getLabelRotationAngle$$() {
  return this.$_labelRotAngle$;
};
$JSCompiler_prototypeAlias$$.$setLabelRotationPoint$ = function $$JSCompiler_prototypeAlias$$$$setLabelRotationPoint$$($mat$$inline_2672_point$$35$$) {
  this.$_labelRotPoint$ = $mat$$inline_2672_point$$35$$;
  var $label$$inline_2667$$ = this.$_labelObj$;
  this.$getLabelBounds$();
  $label$$inline_2667$$ && ($mat$$inline_2672_point$$35$$ = $DvtBaseDiagramNode$CalcLabelMatrix$$(this.$getLabelPosition$(), this.$_labelRotAngle$, $mat$$inline_2672_point$$35$$), $label$$inline_2667$$.$setMatrix$($mat$$inline_2672_point$$35$$));
};
$JSCompiler_prototypeAlias$$.$getLabelRotationPoint$ = function $$JSCompiler_prototypeAlias$$$$getLabelRotationPoint$$() {
  return this.$_labelRotPoint$;
};
function $DvtBaseDiagramNode$CalcLabelMatrix$$($pos$$28$$, $rotAngle$$3$$, $rotPoint$$3$$) {
  var $mat$$12$$ = new dvt.$Matrix$;
  null != $rotAngle$$3$$ && ($rotPoint$$3$$ && $mat$$12$$.translate(-$rotPoint$$3$$.x, -$rotPoint$$3$$.y), $mat$$12$$.rotate($rotAngle$$3$$), $rotPoint$$3$$ && $mat$$12$$.translate($rotPoint$$3$$.x, $rotPoint$$3$$.y));
  $pos$$28$$ && $mat$$12$$.translate($pos$$28$$.x, $pos$$28$$.y);
  return $mat$$12$$;
}
$JSCompiler_prototypeAlias$$.$SetPosition$ = function $$JSCompiler_prototypeAlias$$$$SetPosition$$($xx$$27$$, $yy$$27$$, $animator$$72$$) {
  $animator$$72$$ ? ($animator$$72$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getTranslateX$, this.$setTranslateX$, $xx$$27$$), $animator$$72$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getTranslateY$, this.$setTranslateY$, $yy$$27$$)) : this.$setTranslate$($xx$$27$$, $yy$$27$$);
};
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($stageP1$$2_targetCoordinateSpace$$13$$) {
  var $bounds$$29_stageP2$$2$$ = this.$getContentBounds$($stageP1$$2_targetCoordinateSpace$$13$$);
  $stageP1$$2_targetCoordinateSpace$$13$$ = this.$localToStage$(new dvt.$Point$($bounds$$29_stageP2$$2$$.x, $bounds$$29_stageP2$$2$$.y));
  $bounds$$29_stageP2$$2$$ = this.$localToStage$(new dvt.$Point$($bounds$$29_stageP2$$2$$.x + $bounds$$29_stageP2$$2$$.$w$, $bounds$$29_stageP2$$2$$.y + $bounds$$29_stageP2$$2$$.$h$));
  return new dvt.$Rectangle$($stageP1$$2_targetCoordinateSpace$$13$$.x, $stageP1$$2_targetCoordinateSpace$$13$$.y, $bounds$$29_stageP2$$2$$.x - $stageP1$$2_targetCoordinateSpace$$13$$.x, $bounds$$29_stageP2$$2$$.y - $stageP1$$2_targetCoordinateSpace$$13$$.y);
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$();
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$isShowingKeyboardFocusEffect$$() {
};
$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return null;
};
function $JSCompiler_StaticMethods_addOutLinkId$$($JSCompiler_StaticMethods_addOutLinkId$self$$, $id$$88$$) {
  $JSCompiler_StaticMethods_addOutLinkId$self$$.$_outLinkIds$ || ($JSCompiler_StaticMethods_addOutLinkId$self$$.$_outLinkIds$ = []);
  $JSCompiler_StaticMethods_addOutLinkId$self$$.$_outLinkIds$.push($id$$88$$);
}
function $JSCompiler_StaticMethods_addInLinkId$$($JSCompiler_StaticMethods_addInLinkId$self$$, $id$$90$$) {
  $JSCompiler_StaticMethods_addInLinkId$self$$.$_inLinkIds$ || ($JSCompiler_StaticMethods_addInLinkId$self$$.$_inLinkIds$ = []);
  $JSCompiler_StaticMethods_addInLinkId$self$$.$_inLinkIds$.push($id$$90$$);
}
$JSCompiler_prototypeAlias$$.$setLabelAlignments$ = function $$JSCompiler_prototypeAlias$$$$setLabelAlignments$$() {
};
function $DvtBaseDiagramLink$$($context$$110$$, $linkId$$34$$, $diagram$$92$$) {
  this.Init($context$$110$$, $linkId$$34$$, $diagram$$92$$);
}
dvt.$Obj$.$createSubclass$($DvtBaseDiagramLink$$, dvt.$Container$, "DvtBaseDiagramLink");
$JSCompiler_prototypeAlias$$ = $DvtBaseDiagramLink$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$111$$, $linkId$$35$$, $diagram$$93$$) {
  $DvtBaseDiagramLink$$.$superclass$.Init.call(this, $context$$111$$, null, $linkId$$35$$);
  this.$_diagram$ = $diagram$$93$$;
  this.$_arPoints$;
  this.$_points$;
  this.$_pathCmds$;
  this.$_labelObj$;
  this.$_labelPos$;
  this.$_labelRotAngle$;
  this.$_labelRotPoint$;
  this.$_selected$ = !1;
  this.$_selectable$ = !0;
  this.$_shape$;
  this.$_endConnector$;
  this.$_startConnector$;
};
$JSCompiler_prototypeAlias$$.$GetDiagram$ = function $$JSCompiler_prototypeAlias$$$$GetDiagram$$() {
  return this.$_diagram$;
};
$JSCompiler_prototypeAlias$$.$setEndConnectorType$ = function $$JSCompiler_prototypeAlias$$$$setEndConnectorType$$() {
};
$JSCompiler_prototypeAlias$$.$getEndConnectorType$ = function $$JSCompiler_prototypeAlias$$$$getEndConnectorType$$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$setStartConnectorType$ = function $$JSCompiler_prototypeAlias$$$$setStartConnectorType$$() {
};
$JSCompiler_prototypeAlias$$.$getStartConnector$ = function $$JSCompiler_prototypeAlias$$$$getStartConnector$$() {
  return this.$_startConnector$;
};
$DvtBaseDiagramLink$$.prototype.getStartConnector = $DvtBaseDiagramLink$$.prototype.$getStartConnector$;
$DvtBaseDiagramLink$$.prototype.$getEndConnector$ = function $$DvtBaseDiagramLink$$$$$getEndConnector$$() {
  return this.$_endConnector$;
};
$DvtBaseDiagramLink$$.prototype.getEndConnector = $DvtBaseDiagramLink$$.prototype.$getEndConnector$;
$JSCompiler_prototypeAlias$$ = $DvtBaseDiagramLink$$.prototype;
$JSCompiler_prototypeAlias$$.$setShape$ = function $$JSCompiler_prototypeAlias$$$$setShape$$($shape$$33$$) {
  this.$_shape$ = $shape$$33$$;
};
$JSCompiler_prototypeAlias$$.$getShape$ = function $$JSCompiler_prototypeAlias$$$$getShape$$() {
  return this.$_shape$;
};
$JSCompiler_prototypeAlias$$.$setLabelRotationAngle$ = function $$JSCompiler_prototypeAlias$$$$setLabelRotationAngle$$($angle$$10_mat$$inline_2687$$) {
  this.$_labelRotAngle$ = $angle$$10_mat$$inline_2687$$;
  var $label$$inline_2682$$ = this.$_labelObj$;
  this.$getLabelBounds$();
  $label$$inline_2682$$ && ($angle$$10_mat$$inline_2687$$ = $DvtBaseDiagramLink$CalcLabelMatrix$$(this.$getLabelPosition$(), $angle$$10_mat$$inline_2687$$, this.$_labelRotPoint$), $label$$inline_2682$$.$setMatrix$($angle$$10_mat$$inline_2687$$));
};
$JSCompiler_prototypeAlias$$.$getLabelRotationAngle$ = function $$JSCompiler_prototypeAlias$$$$getLabelRotationAngle$$() {
  return this.$_labelRotAngle$;
};
$JSCompiler_prototypeAlias$$.$setLabelRotationPoint$ = function $$JSCompiler_prototypeAlias$$$$setLabelRotationPoint$$($mat$$inline_2694_point$$36$$) {
  this.$_labelRotPoint$ = $mat$$inline_2694_point$$36$$;
  var $label$$inline_2689$$ = this.$_labelObj$;
  this.$getLabelBounds$();
  $label$$inline_2689$$ && ($mat$$inline_2694_point$$36$$ = $DvtBaseDiagramLink$CalcLabelMatrix$$(this.$getLabelPosition$(), this.$_labelRotAngle$, $mat$$inline_2694_point$$36$$), $label$$inline_2689$$.$setMatrix$($mat$$inline_2694_point$$36$$));
};
$JSCompiler_prototypeAlias$$.$getLabelRotationPoint$ = function $$JSCompiler_prototypeAlias$$$$getLabelRotationPoint$$() {
  return this.$_labelRotPoint$;
};
$JSCompiler_prototypeAlias$$.$getLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$getLabelPosition$$() {
  return this.$_labelPos$;
};
$JSCompiler_prototypeAlias$$.$setLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$setLabelPosition$$($mat$$inline_2701_pos$$30$$) {
  if ($mat$$inline_2701_pos$$30$$) {
    this.$_labelPos$ = $mat$$inline_2701_pos$$30$$;
    var $label$$inline_2696$$ = this.$_labelObj$;
    this.$getLabelBounds$();
    $label$$inline_2696$$ && ($mat$$inline_2701_pos$$30$$ = $DvtBaseDiagramLink$CalcLabelMatrix$$($mat$$inline_2701_pos$$30$$, this.$_labelRotAngle$, this.$_labelRotPoint$), $label$$inline_2696$$.$setMatrix$($mat$$inline_2701_pos$$30$$));
  }
};
$JSCompiler_prototypeAlias$$.$getLabelBounds$ = function $$JSCompiler_prototypeAlias$$$$getLabelBounds$$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$setLabelBounds$ = function $$JSCompiler_prototypeAlias$$$$setLabelBounds$$() {
};
$JSCompiler_prototypeAlias$$.$getStartConnectorOffset$ = function $$JSCompiler_prototypeAlias$$$$getStartConnectorOffset$$() {
  return 0;
};
$JSCompiler_prototypeAlias$$.$getEndConnectorOffset$ = function $$JSCompiler_prototypeAlias$$$$getEndConnectorOffset$$() {
  return 0;
};
$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($selectable$$3$$) {
  this.$_selectable$ = $selectable$$3$$;
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$GetDiagram$().$isSelectionSupported$() && this.$_selectable$;
};
$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$_selected$;
};
$DvtBaseDiagramLink$$.prototype.isSelected = $DvtBaseDiagramLink$$.prototype.$isSelected$;
$JSCompiler_prototypeAlias$$ = $DvtBaseDiagramLink$$.prototype;
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$11$$) {
  this.$_selected$ = $selected$$11$$;
};
$JSCompiler_prototypeAlias$$.$setPromoted$ = function $$JSCompiler_prototypeAlias$$$$setPromoted$$() {
};
$JSCompiler_prototypeAlias$$.$isPromoted$ = function $$JSCompiler_prototypeAlias$$$$isPromoted$$() {
  return !1;
};
$JSCompiler_prototypeAlias$$.$setLinkWidth$ = function $$JSCompiler_prototypeAlias$$$$setLinkWidth$$() {
};
$JSCompiler_prototypeAlias$$.$getLinkWidth$ = function $$JSCompiler_prototypeAlias$$$$getLinkWidth$$() {
  return 1;
};
$DvtBaseDiagramLink$$.prototype.getLinkWidth = $DvtBaseDiagramLink$$.prototype.$getLinkWidth$;
$JSCompiler_prototypeAlias$$ = $DvtBaseDiagramLink$$.prototype;
$JSCompiler_prototypeAlias$$.$setLinkStyle$ = function $$JSCompiler_prototypeAlias$$$$setLinkStyle$$() {
};
$JSCompiler_prototypeAlias$$.$getLinkStyle$ = function $$JSCompiler_prototypeAlias$$$$getLinkStyle$$() {
  return "solid";
};
$JSCompiler_prototypeAlias$$.$setLinkColor$ = function $$JSCompiler_prototypeAlias$$$$setLinkColor$$() {
};
$JSCompiler_prototypeAlias$$.$getLinkColor$ = function $$JSCompiler_prototypeAlias$$$$getLinkColor$$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$getConnectorTemplate$ = function $$JSCompiler_prototypeAlias$$$$getConnectorTemplate$$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$GetAppliedLinkStyle$ = function $$JSCompiler_prototypeAlias$$$$GetAppliedLinkStyle$$() {
  return this.$getLinkStyle$();
};
$JSCompiler_prototypeAlias$$.$GetAppliedLinkWidth$ = function $$JSCompiler_prototypeAlias$$$$GetAppliedLinkWidth$$() {
  return this.$getLinkWidth$();
};
$JSCompiler_prototypeAlias$$.$GetAppliedLinkColor$ = function $$JSCompiler_prototypeAlias$$$$GetAppliedLinkColor$$() {
  return this.$getLinkColor$();
};
function $JSCompiler_StaticMethods_CreateConnector$$($JSCompiler_StaticMethods_CreateConnector$self$$, $points$$23$$, $connector$$4_connectorType$$1$$, $connectorPos$$, $connectorTemplate$$2$$) {
  if ($connector$$4_connectorType$$1$$ || $connectorTemplate$$2$$) {
    var $stroke$$23$$;
    $connectorTemplate$$2$$ || ($stroke$$23$$ = $JSCompiler_StaticMethods_CreateConnector$self$$.$_shape$.$getStroke$().clone(), $stroke$$23$$.$setType$(dvt.$Stroke$.$SOLID$), $stroke$$23$$.$setFixedWidth$(!1));
    if ($connector$$4_connectorType$$1$$ = $DvtDiagramLinkConnectorUtils$$.$CreateConnectorShape$($JSCompiler_StaticMethods_CreateConnector$self$$.$getCtx$(), $connector$$4_connectorType$$1$$, $connectorTemplate$$2$$, $stroke$$23$$, $JSCompiler_StaticMethods_CreateConnector$self$$)) {
      $JSCompiler_StaticMethods_CreateConnector$self$$.$_shape$.$addChild$($connector$$4_connectorType$$1$$), $DvtDiagramLinkConnectorUtils$$.$TransformConnector$($connector$$4_connectorType$$1$$, 0, $connectorTemplate$$2$$, $points$$23$$, $connectorPos$$);
    }
    return $connector$$4_connectorType$$1$$;
  }
}
$JSCompiler_prototypeAlias$$.$setPoints$ = function $$JSCompiler_prototypeAlias$$$$setPoints$$($points$$25_underlayStart$$) {
  this.$_arPoints$ = $points$$25_underlayStart$$;
  $DvtDiagramLinkUtils$$.$IsPath$($points$$25_underlayStart$$) ? (this.$_pathCmds$ = $points$$25_underlayStart$$, this.$_points$ = $DvtDiagramLinkUtils$$.$ConvertToPoints$($points$$25_underlayStart$$)) : (this.$_points$ = $points$$25_underlayStart$$, this.$_pathCmds$ = $DvtDiagramLinkUtils$$.$ConvertToPath$($points$$25_underlayStart$$));
  this.$_shape$ && this.$_shape$ instanceof dvt.$Path$ && (this.$_shape$.$setCommands$(this.$_pathCmds$), this.$_endConnector$ ? $DvtDiagramLinkConnectorUtils$$.$TransformConnector$(this.$_endConnector$, this.$getEndConnectorType$(), this.$getConnectorTemplate$($DvtDiagramLinkConnectorUtils$$.$END_CONNECTOR$), this.$_points$, 1) : this.$_endConnector$ = $JSCompiler_StaticMethods_CreateConnector$$(this, this.$_points$, this.$getEndConnectorType$(), 1, this.$getConnectorTemplate$($DvtDiagramLinkConnectorUtils$$.$END_CONNECTOR$)), 
  this.$_startConnector$ ? $DvtDiagramLinkConnectorUtils$$.$TransformConnector$(this.$_startConnector$, this.$getStartConnectorType$(), this.$getConnectorTemplate$($DvtDiagramLinkConnectorUtils$$.$START_CONNECTOR$), this.$_points$, 0) : this.$_startConnector$ = $JSCompiler_StaticMethods_CreateConnector$$(this, this.$_points$, this.$getStartConnectorType$(), 0, this.$getConnectorTemplate$($DvtDiagramLinkConnectorUtils$$.$START_CONNECTOR$)));
  var $underlayEnd$$ = $points$$25_underlayStart$$ = null;
  this.$_linkUnderlay$ && this.$_linkUnderlay$.$_underlay$ instanceof dvt.$Path$ && this.$_linkUnderlay$.$_underlay$.$setCommands$(this.$_pathCmds$);
  this.$_linkUnderlay$ && ($points$$25_underlayStart$$ = this.$_linkUnderlay$.$_underlayStart$) && $DvtDiagramLinkConnectorUtils$$.$TransformConnector$($points$$25_underlayStart$$, this.$getStartConnectorType$(), this.$getConnectorTemplate$($DvtDiagramLinkConnectorUtils$$.$START_CONNECTOR$), this.$_points$, 0);
  this.$_linkUnderlay$ && ($underlayEnd$$ = this.$_linkUnderlay$.$_underlayEnd$) && $DvtDiagramLinkConnectorUtils$$.$TransformConnector$($underlayEnd$$, this.$getEndConnectorType$(), this.$getConnectorTemplate$($DvtDiagramLinkConnectorUtils$$.$END_CONNECTOR$), this.$_points$, 1);
  this.$_hitDetectionUnderlay$ && this.$_hitDetectionUnderlay$.$_underlay$ instanceof dvt.$Path$ && this.$_hitDetectionUnderlay$.$_underlay$.$setCommands$(this.$_pathCmds$);
  this.$_startHandle$ && this.$_startHandle$.setPosition($JSCompiler_StaticMethods_getLinkStart$$(this));
  this.$_endHandle$ && this.$_endHandle$.setPosition($JSCompiler_StaticMethods_getLinkEnd$$(this));
};
$JSCompiler_prototypeAlias$$.$getPoints$ = function $$JSCompiler_prototypeAlias$$$$getPoints$$() {
  return this.$_arPoints$;
};
function $JSCompiler_StaticMethods_getLinkStart$$($JSCompiler_StaticMethods_getLinkStart$self$$) {
  return $JSCompiler_StaticMethods_getLinkStart$self$$.$_points$ ? new dvt.$Point$($JSCompiler_StaticMethods_getLinkStart$self$$.$_points$[0], $JSCompiler_StaticMethods_getLinkStart$self$$.$_points$[1]) : null;
}
function $JSCompiler_StaticMethods_getLinkEnd$$($JSCompiler_StaticMethods_getLinkEnd$self$$) {
  if (!$JSCompiler_StaticMethods_getLinkEnd$self$$.$_points$) {
    return null;
  }
  var $numPoints$$ = $JSCompiler_StaticMethods_getLinkEnd$self$$.$_points$.length;
  return new dvt.$Point$($JSCompiler_StaticMethods_getLinkEnd$self$$.$_points$[$numPoints$$ - 2], $JSCompiler_StaticMethods_getLinkEnd$self$$.$_points$[$numPoints$$ - 1]);
}
function $DvtBaseDiagramLink$CalcLabelMatrix$$($pos$$31$$, $rotAngle$$5$$, $rotPoint$$5$$) {
  var $mat$$14$$ = new dvt.$Matrix$;
  null != $rotAngle$$5$$ && ($rotPoint$$5$$ && $mat$$14$$.translate(-$rotPoint$$5$$.x, -$rotPoint$$5$$.y), $mat$$14$$.rotate($rotAngle$$5$$), $rotPoint$$5$$ && $mat$$14$$.translate($rotPoint$$5$$.x, $rotPoint$$5$$.y));
  $pos$$31$$ && $mat$$14$$.translate($pos$$31$$.x, $pos$$31$$.y);
  return $mat$$14$$;
}
$JSCompiler_prototypeAlias$$.$CreateUnderlay$ = function $$JSCompiler_prototypeAlias$$$$CreateUnderlay$$($stroke$$24_strokeColor$$3$$, $strokeAlpha$$, $strokeWidth$$4_strokeWidthOffset$$) {
  $strokeAlpha$$ || 0 == $strokeAlpha$$ || ($strokeAlpha$$ = 1);
  $strokeWidth$$4_strokeWidthOffset$$ || 0 == $strokeWidth$$4_strokeWidthOffset$$ || ($strokeWidth$$4_strokeWidthOffset$$ = 0);
  $strokeWidth$$4_strokeWidthOffset$$ = this.$GetAppliedLinkWidth$() + $strokeWidth$$4_strokeWidthOffset$$;
  $stroke$$24_strokeColor$$3$$ = new dvt.$SolidStroke$($stroke$$24_strokeColor$$3$$, $strokeAlpha$$, $strokeWidth$$4_strokeWidthOffset$$);
  return new $DvtDiagramLinkUnderlay$$(this.$getCtx$(), this.$_pathCmds$, $stroke$$24_strokeColor$$3$$);
};
function $JSCompiler_StaticMethods_CreateFeedbackUnderlay$$($JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$, $feedbackUnderlay_strokeColor$$4$$, $connectorType$$inline_2713_connectorType$$inline_2720_strokeAlpha$$1$$, $connectorUnderlay$$inline_2716_strokeWidthOffset$$1$$) {
  $feedbackUnderlay_strokeColor$$4$$ = $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$.$CreateUnderlay$($feedbackUnderlay_strokeColor$$4$$, $connectorType$$inline_2713_connectorType$$inline_2720_strokeAlpha$$1$$, $connectorUnderlay$$inline_2716_strokeWidthOffset$$1$$);
  $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$.$_startConnector$ && $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$.$getStartConnectorType$() && ($connectorType$$inline_2713_connectorType$$inline_2720_strokeAlpha$$1$$ = $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$.$getStartConnectorType$(), $connectorUnderlay$$inline_2716_strokeWidthOffset$$1$$ = $JSCompiler_StaticMethods_CreateConnectorUnderlay$$($feedbackUnderlay_strokeColor$$4$$, 
  $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$.$_points$, $connectorType$$inline_2713_connectorType$$inline_2720_strokeAlpha$$1$$, $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$.$getConnectorTemplate$($DvtDiagramLinkConnectorUtils$$.$START_CONNECTOR$), $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$, 0), $feedbackUnderlay_strokeColor$$4$$.$_underlayStart$ && $feedbackUnderlay_strokeColor$$4$$.removeChild($feedbackUnderlay_strokeColor$$4$$.$_underlayStart$), 
  $feedbackUnderlay_strokeColor$$4$$.$_underlayStart$ = $connectorUnderlay$$inline_2716_strokeWidthOffset$$1$$, $feedbackUnderlay_strokeColor$$4$$.$_underlayStartType$ = $connectorType$$inline_2713_connectorType$$inline_2720_strokeAlpha$$1$$, $feedbackUnderlay_strokeColor$$4$$.$addChild$($feedbackUnderlay_strokeColor$$4$$.$_underlayStart$));
  $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$.$_endConnector$ && $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$.$getEndConnectorType$() && ($connectorType$$inline_2713_connectorType$$inline_2720_strokeAlpha$$1$$ = $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$.$getEndConnectorType$(), $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$ = $JSCompiler_StaticMethods_CreateConnectorUnderlay$$($feedbackUnderlay_strokeColor$$4$$, 
  $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$.$_points$, $connectorType$$inline_2713_connectorType$$inline_2720_strokeAlpha$$1$$, $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$.$getConnectorTemplate$($DvtDiagramLinkConnectorUtils$$.$END_CONNECTOR$), $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$, 1), $feedbackUnderlay_strokeColor$$4$$.$_underlayEnd$ && $feedbackUnderlay_strokeColor$$4$$.removeChild($feedbackUnderlay_strokeColor$$4$$.$_underlayEnd$), 
  $feedbackUnderlay_strokeColor$$4$$.$_underlayEnd$ = $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2723$$, $feedbackUnderlay_strokeColor$$4$$.$_underlayEndType$ = $connectorType$$inline_2713_connectorType$$inline_2720_strokeAlpha$$1$$, $feedbackUnderlay_strokeColor$$4$$.$addChild$($feedbackUnderlay_strokeColor$$4$$.$_underlayEnd$));
  return $feedbackUnderlay_strokeColor$$4$$;
}
function $JSCompiler_StaticMethods_ApplyLinkStyle$$($JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$, $stroke$$25$$, $bUnderlay$$) {
  $JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$ = $JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$.$GetAppliedLinkStyle$();
  $JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$ = $DvtDiagramLinkUtils$$.$ConvertLinkStyleToStrokeType$($JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$);
  $stroke$$25$$.$setType$($JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$, $DvtDiagramLinkUtils$$.$GetStrokeDash$($JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$, $bUnderlay$$), $DvtDiagramLinkUtils$$.$GetStrokeDashOffset$($JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$, $bUnderlay$$));
}
function $JSCompiler_StaticMethods_ReplaceConnectorColor$$($connector$$5$$, $stroke$$26$$) {
  if ($connector$$5$$) {
    var $color$$19$$ = null;
    $stroke$$26$$.$getColor$ && ($color$$19$$ = $stroke$$26$$.$getColor$());
    if ($color$$19$$) {
      var $conStroke$$ = $connector$$5$$.$getStroke$() ? $connector$$5$$.$getStroke$().clone() : null, $conFill$$ = $connector$$5$$.$getFill$() ? $connector$$5$$.$getFill$().clone() : null;
      $conStroke$$ && $conStroke$$.$setColor$ && ($conStroke$$.$setColor$($color$$19$$), $connector$$5$$.$setStroke$($conStroke$$));
      $conFill$$ && $conFill$$.$setColor$ && ($conFill$$.$setColor$($color$$19$$), $connector$$5$$.$setFill$($conFill$$));
    }
  }
}
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$14$$) {
  return this.$getDimensions$($targetCoordinateSpace$$14$$);
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$();
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$isShowingKeyboardFocusEffect$$() {
};
$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return null;
};
$JSCompiler_prototypeAlias$$.$setLabelAlignments$ = function $$JSCompiler_prototypeAlias$$$$setLabelAlignments$$() {
};
var $DvtDiagramLayoutUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtDiagramLayoutUtils$$, dvt.$Obj$, "DvtDiagramLayoutUtils");
$DvtDiagramLayoutUtils$$.$gridLayout$ = function $$DvtDiagramLayoutUtils$$$$gridLayout$$($layoutContext$$13$$) {
  for (var $maxNodeBounds_nodeCount$$ = $DvtDiagramLayoutUtils$$.$getMaxNodeBounds$($layoutContext$$13$$), $nodeSize_space$$ = Math.max($maxNodeBounds_nodeCount$$.w, $maxNodeBounds_nodeCount$$.h), $maxNodeBounds_nodeCount$$ = $layoutContext$$13$$.$getNodeCount$(), $linkCount_startx$$ = $layoutContext$$13$$.$getLinkCount$(), $size$$15$$ = Math.floor(Math.sqrt($maxNodeBounds_nodeCount$$)), $layoutAttrs$$8_padding$$13_starty$$ = 0, $layoutAttrs$$8_padding$$13_starty$$ = ($layoutAttrs$$8_padding$$13_starty$$ = 
  $layoutContext$$13$$.$getLayoutAttributes$()) && $layoutAttrs$$8_padding$$13_starty$$.padding ? $layoutAttrs$$8_padding$$13_starty$$.padding : 0 < $linkCount_startx$$ ? $nodeSize_space$$ : .25 * $nodeSize_space$$, $nodeSize_space$$ = $nodeSize_space$$ + $layoutAttrs$$8_padding$$13_starty$$, $linkCount_startx$$ = -(Math.ceil($maxNodeBounds_nodeCount$$ / $size$$15$$) - 1) * $nodeSize_space$$ / 2, $layoutAttrs$$8_padding$$13_starty$$ = -($size$$15$$ - 1) * $nodeSize_space$$ / 2, $ni$$2$$ = 0;$ni$$2$$ < 
  $maxNodeBounds_nodeCount$$;$ni$$2$$++) {
    $DvtDiagramLayoutUtils$$.$centerNodeAndLabel$($layoutContext$$13$$.$getNodeByIndex$($ni$$2$$), $linkCount_startx$$ + $nodeSize_space$$ * Math.floor($ni$$2$$ / $size$$15$$), $layoutAttrs$$8_padding$$13_starty$$ + $ni$$2$$ % $size$$15$$ * $nodeSize_space$$);
  }
};
$DvtDiagramLayoutUtils$$.$getMaxNodeBounds$ = function $$DvtDiagramLayoutUtils$$$$getMaxNodeBounds$$($layoutContext$$14$$) {
  for (var $nodeCount$$1$$ = $layoutContext$$14$$.$getNodeCount$(), $maxW$$2$$ = 0, $maxH$$3$$ = 0, $ni$$3$$ = 0;$ni$$3$$ < $nodeCount$$1$$;$ni$$3$$++) {
    var $labelBounds$$7_node$$184$$ = $layoutContext$$14$$.$getNodeByIndex$($ni$$3$$), $bounds$$34$$ = $labelBounds$$7_node$$184$$.$getBounds$(), $maxW$$2$$ = Math.max($bounds$$34$$.w, $maxW$$2$$), $maxH$$3$$ = Math.max($bounds$$34$$.h, $maxH$$3$$);
    if ($labelBounds$$7_node$$184$$ = $labelBounds$$7_node$$184$$.$getLabelBounds$()) {
      $maxW$$2$$ = Math.max($labelBounds$$7_node$$184$$.w, $maxW$$2$$), $maxH$$3$$ = Math.max($bounds$$34$$.h + $labelBounds$$7_node$$184$$.h, $maxH$$3$$);
    }
  }
  return new $DvtDiagramRectangle$$(0, 0, $maxW$$2$$, $maxH$$3$$);
};
$DvtDiagramLayoutUtils$$.$centerNodeAndLabel$ = function $$DvtDiagramLayoutUtils$$$$centerNodeAndLabel$$($node$$185$$, $x$$98$$, $y$$78$$) {
  var $bounds$$35$$ = $node$$185$$.$getContentBounds$();
  $node$$185$$.setPosition(new $DvtDiagramPoint$$($x$$98$$ - $bounds$$35$$.x - .5 * $bounds$$35$$.w, $y$$78$$ - $bounds$$35$$.y - .5 * $bounds$$35$$.h));
  $DvtDiagramLayoutUtils$$.$positionNodeLabel$($node$$185$$);
};
$DvtDiagramLayoutUtils$$.$positionNodeLabel$ = function $$DvtDiagramLayoutUtils$$$$positionNodeLabel$$($node$$186$$) {
  var $nodeBounds$$7$$ = $node$$186$$.$getBounds$(), $nodePos$$ = $node$$186$$.$getPosition$(), $nodeLabelBounds$$ = $node$$186$$.$getLabelBounds$();
  $nodeLabelBounds$$ && $node$$186$$.$setLabelPosition$(new $DvtDiagramPoint$$($nodeBounds$$7$$.x + $nodePos$$.x + .5 * ($nodeBounds$$7$$.w - $nodeLabelBounds$$.w), $nodeBounds$$7$$.y + $nodePos$$.y + $nodeBounds$$7$$.h));
};
$DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$ = function $$DvtDiagramLayoutUtils$$$$convertRectToDiagramRect$$($rect$$8$$) {
  return void 0 === $rect$$8$$ || null == $rect$$8$$ ? null : new $DvtDiagramRectangle$$($rect$$8$$.x, $rect$$8$$.y, $rect$$8$$.$w$, $rect$$8$$.$h$);
};
$DvtDiagramLayoutUtils$$.$convertPointToDiagramPoint$ = function $$DvtDiagramLayoutUtils$$$$convertPointToDiagramPoint$$($point$$37$$) {
  return void 0 === $point$$37$$ || null == $point$$37$$ ? null : new $DvtDiagramPoint$$($point$$37$$.x, $point$$37$$.y);
};
$DvtDiagramLayoutUtils$$.$convertDiagramRectToRect$ = function $$DvtDiagramLayoutUtils$$$$convertDiagramRectToRect$$($diagramRect$$) {
  return $diagramRect$$ ? new dvt.$Rectangle$($diagramRect$$.x, $diagramRect$$.y, $diagramRect$$.w, $diagramRect$$.h) : null;
};
$DvtDiagramLayoutUtils$$.$convertDiagramPointToPoint$ = function $$DvtDiagramLayoutUtils$$$$convertDiagramPointToPoint$$($diagramPoint$$) {
  return $diagramPoint$$ ? new dvt.$Point$($diagramPoint$$.x, $diagramPoint$$.y) : null;
};
function $DvtDiagramLinkUnderlay$$($context$$112$$, $points$$26$$, $stroke$$27$$) {
  $DvtDiagramLinkUnderlay$$.$superclass$.Init.call(this, $context$$112$$);
  this.Init($context$$112$$, $points$$26$$, $stroke$$27$$);
}
dvt.$Obj$.$createSubclass$($DvtDiagramLinkUnderlay$$, dvt.$Container$, "DvtDiagramLinkUnderlay");
$DvtDiagramLinkUnderlay$$.prototype.Init = function $$DvtDiagramLinkUnderlay$$$$Init$($context$$113$$, $points$$27$$, $stroke$$28$$) {
  $points$$27$$ || ($points$$27$$ = ["M", 0, 0, "L", 1, 0]);
  this.$_stroke$ = $stroke$$28$$;
  this.$_stroke$ || (this.$_stroke$ = new dvt.$SolidStroke$("#ffffff", 1, 1));
  this.$_underlay$ = new dvt.$Path$($context$$113$$, $points$$27$$);
  this.$_underlay$.$setStroke$($stroke$$28$$);
  this.$_underlay$.$setFill$(null);
  this.$addChild$(this.$_underlay$);
  this.$_underlayEndType$ = this.$_underlayEnd$ = this.$_underlayStartType$ = this.$_underlayStart$ = null;
};
function $JSCompiler_StaticMethods_CreateConnectorUnderlay$$($JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$, $points$$30$$, $connectorType$$4$$, $connectorTemplate$$5$$, $parentLink$$2$$, $connectorPos$$1$$) {
  $JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$ = $DvtDiagramLinkConnectorUtils$$.$CreateConnectorShape$($JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$.$getCtx$(), $connectorType$$4$$, $connectorTemplate$$5$$, $JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$.$_stroke$, $parentLink$$2$$);
  $DvtDiagramLinkConnectorUtils$$.$TransformConnector$($JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$, 0, $connectorTemplate$$5$$, $points$$30$$, $connectorPos$$1$$);
  return $JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$;
}
$DvtDiagramLinkUnderlay$$.prototype.$setStroke$ = function $$DvtDiagramLinkUnderlay$$$$$setStroke$$($stroke$$29$$, $strokeOffset$$1$$) {
  this.$_stroke$ = $stroke$$29$$;
  dvt.$Agent$.$isTouchDevice$() && dvt.$Agent$.$isBrowserSafari$() && 1 == dvt.$Agent$.$getDevicePixelRatio$() && $stroke$$29$$.$setFixedWidth$(!0);
  this.$_underlay$.$setStroke$($stroke$$29$$);
  if (this.$_underlayStart$) {
    var $endStroke_startStroke$$ = $stroke$$29$$.clone();
    $endStroke_startStroke$$.$setType$(dvt.$Stroke$.$SOLID$);
    $endStroke_startStroke$$.$setFixedWidth$(!1);
    if (this.$_underlayStartType$ == $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW$ || this.$_underlayStartType$ == $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_CONCAVE$) {
      $endStroke_startStroke$$.$setWidth$($strokeOffset$$1$$), this.$_underlayStart$.$setSolidFill$($stroke$$29$$.$getColor$());
    }
    this.$_underlayStart$.$setStroke$($endStroke_startStroke$$);
  }
  if (this.$_underlayEnd$) {
    $endStroke_startStroke$$ = $stroke$$29$$.clone();
    $endStroke_startStroke$$.$setType$(dvt.$Stroke$.$SOLID$);
    $endStroke_startStroke$$.$setFixedWidth$(!1);
    if (this.$_underlayEndType$ == $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW$ || this.$_underlayEndType$ == $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_CONCAVE$) {
      $endStroke_startStroke$$.$setWidth$($strokeOffset$$1$$), this.$_underlayEnd$.$setSolidFill$($stroke$$29$$.$getColor$());
    }
    this.$_underlayEnd$.$setStroke$($endStroke_startStroke$$);
  }
};
$DvtDiagramLinkUnderlay$$.prototype.$getStroke$ = function $$DvtDiagramLinkUnderlay$$$$$getStroke$$() {
  return this.$_stroke$;
};
var $DvtDiagramLinkUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtDiagramLinkUtils$$, dvt.$Obj$, "DvtDiagramLinkUtils");
$DvtDiagramLinkUtils$$.$ConvertLinkStyleToStrokeType$ = function $$DvtDiagramLinkUtils$$$$ConvertLinkStyleToStrokeType$$($linkStyle$$1$$) {
  var $strokeType$$1$$ = dvt.$Stroke$.$SOLID$;
  switch($linkStyle$$1$$) {
    case "dash":
      $strokeType$$1$$ = dvt.$Stroke$.$DASHED$;
      break;
    case "dot":
      $strokeType$$1$$ = dvt.$Stroke$.$DOTTED$;
      break;
    case "dashDot":
      $strokeType$$1$$ = dvt.$Stroke$.$DASHED_DOTTED$;
  }
  return $strokeType$$1$$;
};
$DvtDiagramLinkUtils$$.$GetStrokeDash$ = function $$DvtDiagramLinkUtils$$$$GetStrokeDash$$($strokeType$$2$$, $bUnderlay$$1$$) {
  if (dvt.$Stroke$.$SOLID$ == $strokeType$$2$$) {
    return null;
  }
  if (dvt.$Stroke$.$DASHED$ == $strokeType$$2$$) {
    return $bUnderlay$$1$$ ? "8,2" : "6,4";
  }
  if (dvt.$Stroke$.$DOTTED$ == $strokeType$$2$$) {
    return $bUnderlay$$1$$ ? "4,1" : "2,3";
  }
  if (dvt.$Stroke$.$DASHED_DOTTED$ == $strokeType$$2$$) {
    return $bUnderlay$$1$$ ? "10,1,4,1" : "8,3,2,3";
  }
};
$DvtDiagramLinkUtils$$.$GetStrokeDashOffset$ = function $$DvtDiagramLinkUtils$$$$GetStrokeDashOffset$$($strokeType$$3$$, $bUnderlay$$2$$) {
  return $bUnderlay$$2$$ && dvt.$Stroke$.$SOLID$ != $strokeType$$3$$ ? 1 : null;
};
$DvtDiagramLinkUtils$$.$ConvertToPath$ = function $$DvtDiagramLinkUtils$$$$ConvertToPath$$($points$$31$$) {
  var $pathCmds$$ = [];
  if ($points$$31$$) {
    for (var $i$$272$$ = 0;$i$$272$$ < $points$$31$$.length;$i$$272$$ += 2) {
      0 == $i$$272$$ ? $pathCmds$$.push("M") : $pathCmds$$.push("L"), $pathCmds$$.push($points$$31$$[$i$$272$$]), $pathCmds$$.push($points$$31$$[$i$$272$$ + 1]);
    }
  }
  return $pathCmds$$;
};
$DvtDiagramLinkUtils$$.$ConvertToPoints$ = function $$DvtDiagramLinkUtils$$$$ConvertToPoints$$($pathCmds$$1$$) {
  var $points$$32$$ = [];
  if ($pathCmds$$1$$) {
    for (var $i$$273$$ = 0;$i$$273$$ < $pathCmds$$1$$.length;$i$$273$$++) {
      isNaN($pathCmds$$1$$[$i$$273$$]) || $points$$32$$.push($pathCmds$$1$$[$i$$273$$]);
    }
  }
  return $points$$32$$;
};
$DvtDiagramLinkUtils$$.$IsPath$ = function $$DvtDiagramLinkUtils$$$$IsPath$$($points$$33$$) {
  return $points$$33$$ && 0 < $points$$33$$.length ? isNaN($points$$33$$[0]) : !1;
};
$DvtDiagramLinkUtils$$.$GetControlPoints$ = function $$DvtDiagramLinkUtils$$$$GetControlPoints$$($coords$$7_points$$34$$) {
  var $controlPoints$$3$$ = [];
  $coords$$7_points$$34$$ = $DvtDiagramLinkUtils$$.$IsPath$($coords$$7_points$$34$$) ? $DvtDiagramLinkUtils$$.$ConvertToPoints$($coords$$7_points$$34$$) : $coords$$7_points$$34$$;
  for (var $i$$274$$ = 0;$i$$274$$ < $coords$$7_points$$34$$.length;$i$$274$$ += 2) {
    $controlPoints$$3$$.push(new dvt.$Point$($coords$$7_points$$34$$[$i$$274$$], $coords$$7_points$$34$$[$i$$274$$ + 1]));
  }
  return $controlPoints$$3$$;
};
var $DvtDiagramLinkConnectorUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtDiagramLinkConnectorUtils$$, dvt.$Obj$, "DvtDiagramLinkConnectorUtils");
$DvtDiagramLinkConnectorUtils$$.$END_CONNECTOR$ = "endConnector";
$DvtDiagramLinkConnectorUtils$$.$START_CONNECTOR$ = "startConnector";
$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_OPEN$ = "arrowOpen";
$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW$ = "arrow";
$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_CONCAVE$ = "arrowConcave";
$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE$ = "rectangle";
$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE_ROUNDED$ = "rectangleRounded";
$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_CIRCLE$ = "circle";
$DvtDiagramLinkConnectorUtils$$.$CreateConnectorShape$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateConnectorShape$$($context$$114$$, $connectorType$$5$$, $connectorTemplate$$6_linkWidth$$1$$, $stroke$$30$$, $parentLink$$3$$) {
  if ($connectorTemplate$$6_linkWidth$$1$$) {
    return $DvtDiagramLinkConnectorUtils$$.$CreateCustomConnector$($connectorTemplate$$6_linkWidth$$1$$, $parentLink$$3$$);
  }
  $connectorTemplate$$6_linkWidth$$1$$ = $parentLink$$3$$.$GetAppliedLinkWidth$();
  switch($connectorType$$5$$) {
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW$:
      return $DvtDiagramLinkConnectorUtils$$.$CreateFilledArrowConnector$($context$$114$$, $connectorTemplate$$6_linkWidth$$1$$, $parentLink$$3$$.$getLinkColor$());
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_CONCAVE$:
      return $DvtDiagramLinkConnectorUtils$$.$CreateFilledConcaveArrowConnector$($context$$114$$, $connectorTemplate$$6_linkWidth$$1$$, $parentLink$$3$$.$getLinkColor$());
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_OPEN$:
      return $DvtDiagramLinkConnectorUtils$$.$CreateOpenArrowConnector$($context$$114$$, $connectorTemplate$$6_linkWidth$$1$$, $stroke$$30$$);
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_CIRCLE$:
      return $DvtDiagramLinkConnectorUtils$$.$CreateCircleConnector$($context$$114$$, $connectorTemplate$$6_linkWidth$$1$$, $stroke$$30$$);
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE$:
      return $DvtDiagramLinkConnectorUtils$$.$CreateRectangleConnector$($context$$114$$, $connectorTemplate$$6_linkWidth$$1$$, $stroke$$30$$);
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE_ROUNDED$:
      return $DvtDiagramLinkConnectorUtils$$.$CreateRoundedRectangleConnector$($context$$114$$, $connectorTemplate$$6_linkWidth$$1$$, $stroke$$30$$);
  }
  return null;
};
$DvtDiagramLinkConnectorUtils$$.$TransformConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$TransformConnector$$($connector$$6$$, $connectorType$$6_mat$$16$$, $connectorTemplate$$7$$, $points$$35$$, $connectorPos$$2$$) {
  $connectorType$$6_mat$$16$$ = $DvtDiagramLinkConnectorUtils$$.$CalcConnectorTransform$($connector$$6$$, $connectorTemplate$$7$$, $points$$35$$, $connectorPos$$2$$);
  $connector$$6$$.$setMatrix$($connectorType$$6_mat$$16$$);
};
$DvtDiagramLinkConnectorUtils$$.$CalcConnectorTransform$ = function $$DvtDiagramLinkConnectorUtils$$$$CalcConnectorTransform$$($connScaleY_connector$$7$$, $connectorTemplate$$8_dims$$32$$, $points$$36_tx$$14$$, $connectorPos$$3_ty$$15$$) {
  var $angleRads$$1_x1$$7$$ = -1, $connScaleX_numPoints$$1_y1$$6$$ = 0, $origMat_x2$$5$$ = 0, $tMat_y2$$4$$ = 0;
  $points$$36_tx$$14$$ && ($connScaleX_numPoints$$1_y1$$6$$ = $points$$36_tx$$14$$.length, 1 === $connectorPos$$3_ty$$15$$ ? (2 <= $connScaleX_numPoints$$1_y1$$6$$ && ($origMat_x2$$5$$ = $points$$36_tx$$14$$[$connScaleX_numPoints$$1_y1$$6$$ - 2], $tMat_y2$$4$$ = $points$$36_tx$$14$$[$connScaleX_numPoints$$1_y1$$6$$ - 1]), 4 <= $connScaleX_numPoints$$1_y1$$6$$ ? ($angleRads$$1_x1$$7$$ = $points$$36_tx$$14$$[$connScaleX_numPoints$$1_y1$$6$$ - 4], $connScaleX_numPoints$$1_y1$$6$$ = $points$$36_tx$$14$$[$connScaleX_numPoints$$1_y1$$6$$ - 
  3]) : ($angleRads$$1_x1$$7$$ = $origMat_x2$$5$$ - 1E-4, $connScaleX_numPoints$$1_y1$$6$$ = $tMat_y2$$4$$)) : (2 <= $connScaleX_numPoints$$1_y1$$6$$ && ($origMat_x2$$5$$ = $points$$36_tx$$14$$[0], $tMat_y2$$4$$ = $points$$36_tx$$14$$[1]), 4 <= $connScaleX_numPoints$$1_y1$$6$$ ? ($angleRads$$1_x1$$7$$ = $points$$36_tx$$14$$[2], $connScaleX_numPoints$$1_y1$$6$$ = $points$$36_tx$$14$$[3]) : ($angleRads$$1_x1$$7$$ = $origMat_x2$$5$$ + 1E-4, $connScaleX_numPoints$$1_y1$$6$$ = $tMat_y2$$4$$)));
  $points$$36_tx$$14$$ = $origMat_x2$$5$$;
  $connectorPos$$3_ty$$15$$ = $tMat_y2$$4$$;
  $angleRads$$1_x1$$7$$ = $DvtDiagramLinkConnectorUtils$$.$CalcConnectorRotation$($angleRads$$1_x1$$7$$, $connScaleX_numPoints$$1_y1$$6$$, $origMat_x2$$5$$, $tMat_y2$$4$$);
  $origMat_x2$$5$$ = $connScaleY_connector$$7$$.$_connectorOrigMat$;
  $origMat_x2$$5$$ || ($origMat_x2$$5$$ = $connScaleY_connector$$7$$.$getMatrix$().clone(), $connScaleY_connector$$7$$.$_connectorOrigMat$ = $origMat_x2$$5$$);
  $tMat_y2$$4$$ = new dvt.$Matrix$;
  $connectorTemplate$$8_dims$$32$$ && ($connectorTemplate$$8_dims$$32$$ = $DvtDiagramLinkConnectorUtils$$.$_getCachedDims$($connScaleY_connector$$7$$), $connScaleX_numPoints$$1_y1$$6$$ = $connScaleY_connector$$7$$.$getScaleX$(), $connScaleY_connector$$7$$ = $connScaleY_connector$$7$$.$getScaleY$(), $tMat_y2$$4$$.translate(-.5 * $connectorTemplate$$8_dims$$32$$.$w$ * $connScaleX_numPoints$$1_y1$$6$$, -.5 * $connectorTemplate$$8_dims$$32$$.$h$ * $connScaleY_connector$$7$$));
  $tMat_y2$$4$$.rotate($angleRads$$1_x1$$7$$);
  $tMat_y2$$4$$.translate($points$$36_tx$$14$$, $connectorPos$$3_ty$$15$$);
  $tMat_y2$$4$$.concat($origMat_x2$$5$$);
  return $tMat_y2$$4$$;
};
$DvtDiagramLinkConnectorUtils$$.$_getCachedDims$ = function $$DvtDiagramLinkConnectorUtils$$$$_getCachedDims$$($connector$$8$$) {
  var $dims$$33$$ = $connector$$8$$.$_cachedDims$;
  $dims$$33$$ || ($dims$$33$$ = $connector$$8$$.$getDimensions$(), $connector$$8$$.$_cachedDims$ = $dims$$33$$);
  return $dims$$33$$;
};
$DvtDiagramLinkConnectorUtils$$.$CalcConnectorRotation$ = function $$DvtDiagramLinkConnectorUtils$$$$CalcConnectorRotation$$($x1$$8$$, $y1$$7$$, $x2$$6$$, $y2$$5$$) {
  return Math.atan2($y2$$5$$ - $y1$$7$$, $x2$$6$$ - $x1$$8$$);
};
$DvtDiagramLinkConnectorUtils$$.$CreateFilledConcaveArrowConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateFilledConcaveArrowConnector$$($context$$115_filledArrowHead$$, $arrowLength_linkWidth$$2$$, $linkColor$$1$$) {
  $arrowLength_linkWidth$$2$$ = 6 * $DvtDiagramLinkConnectorUtils$$.$_getReduce$($arrowLength_linkWidth$$2$$);
  var $arrowWidth$$1$$ = .8 * $arrowLength_linkWidth$$2$$;
  $context$$115_filledArrowHead$$ = new dvt.$Polygon$($context$$115_filledArrowHead$$, [-.22 * $arrowLength_linkWidth$$2$$, -.5 * $arrowWidth$$1$$, .78 * $arrowLength_linkWidth$$2$$, 0, -.22 * $arrowLength_linkWidth$$2$$, .5 * $arrowWidth$$1$$, 0, 0]);
  $context$$115_filledArrowHead$$.$setSolidFill$($linkColor$$1$$);
  return $context$$115_filledArrowHead$$;
};
$DvtDiagramLinkConnectorUtils$$.$CreateFilledArrowConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateFilledArrowConnector$$($context$$116_filledArrowHead$$1$$, $arrowLength$$1_linkWidth$$3$$, $linkColor$$2$$) {
  $arrowLength$$1_linkWidth$$3$$ = 5 * $DvtDiagramLinkConnectorUtils$$.$_getReduce$($arrowLength$$1_linkWidth$$3$$);
  var $arrowWidth$$2$$ = .8 * $arrowLength$$1_linkWidth$$3$$;
  $context$$116_filledArrowHead$$1$$ = new dvt.$Polygon$($context$$116_filledArrowHead$$1$$, [0, -.5 * $arrowWidth$$2$$, $arrowLength$$1_linkWidth$$3$$, 0, 0, .5 * $arrowWidth$$2$$]);
  $context$$116_filledArrowHead$$1$$.$setSolidFill$($linkColor$$2$$);
  return $context$$116_filledArrowHead$$1$$;
};
$DvtDiagramLinkConnectorUtils$$.$_getReduce$ = function $$DvtDiagramLinkConnectorUtils$$$$_getReduce$$($length$$18$$) {
  return 1 >= $length$$18$$ ? $length$$18$$ : 1 + .5 * ($length$$18$$ - 1);
};
$DvtDiagramLinkConnectorUtils$$.$CreateOpenArrowConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateOpenArrowConnector$$($arrowHead_context$$117$$, $arrowWidth$$3_linkWidth$$4$$, $stroke$$31$$) {
  $arrowWidth$$3_linkWidth$$4$$ *= 3;
  var $strokeWidth$$5$$ = $stroke$$31$$.getWidth();
  $arrowHead_context$$117$$ = new dvt.$Polyline$($arrowHead_context$$117$$, [-$arrowWidth$$3_linkWidth$$4$$ + $strokeWidth$$5$$ * Math.sqrt(2) / 2, -$arrowWidth$$3_linkWidth$$4$$, $strokeWidth$$5$$ * Math.sqrt(2) / 2, 0, -$arrowWidth$$3_linkWidth$$4$$ + $strokeWidth$$5$$ * Math.sqrt(2) / 2, $arrowWidth$$3_linkWidth$$4$$]);
  $arrowHead_context$$117$$.$setStroke$($stroke$$31$$);
  $arrowHead_context$$117$$.$setFill$(null);
  return $arrowHead_context$$117$$;
};
$DvtDiagramLinkConnectorUtils$$.$getCircleRadius$ = function $$DvtDiagramLinkConnectorUtils$$$$getCircleRadius$$($linkWidth$$5$$) {
  return 2 * $linkWidth$$5$$;
};
$DvtDiagramLinkConnectorUtils$$.$getRectangleLength$ = function $$DvtDiagramLinkConnectorUtils$$$$getRectangleLength$$($linkWidth$$6$$) {
  return 3 * $linkWidth$$6$$;
};
$DvtDiagramLinkConnectorUtils$$.$CreateCircleConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateCircleConnector$$($conShape_context$$118$$, $linkWidth$$7_radius$$8$$, $stroke$$32$$) {
  $linkWidth$$7_radius$$8$$ = $DvtDiagramLinkConnectorUtils$$.$getCircleRadius$($linkWidth$$7_radius$$8$$);
  $conShape_context$$118$$ = new dvt.$Circle$($conShape_context$$118$$, $linkWidth$$7_radius$$8$$, 0, $linkWidth$$7_radius$$8$$);
  $conShape_context$$118$$.$setStroke$($stroke$$32$$);
  $conShape_context$$118$$.$setFill$(null);
  return $conShape_context$$118$$;
};
$DvtDiagramLinkConnectorUtils$$.$CreateRectangleConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateRectangleConnector$$($conShape$$1_context$$119$$, $length$$20_linkWidth$$8$$, $stroke$$33$$) {
  $length$$20_linkWidth$$8$$ = $DvtDiagramLinkConnectorUtils$$.$getRectangleLength$($length$$20_linkWidth$$8$$);
  $conShape$$1_context$$119$$ = new dvt.Rect($conShape$$1_context$$119$$, 0, -$length$$20_linkWidth$$8$$ / 2, $length$$20_linkWidth$$8$$, $length$$20_linkWidth$$8$$);
  $conShape$$1_context$$119$$.$setStroke$($stroke$$33$$);
  $conShape$$1_context$$119$$.$setFill$(null);
  return $conShape$$1_context$$119$$;
};
$DvtDiagramLinkConnectorUtils$$.$CreateRoundedRectangleConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateRoundedRectangleConnector$$($conShape$$2_context$$120$$, $linkWidth$$9$$, $stroke$$34$$) {
  $conShape$$2_context$$120$$ = $DvtDiagramLinkConnectorUtils$$.$CreateRectangleConnector$($conShape$$2_context$$120$$, $linkWidth$$9$$, $stroke$$34$$);
  $conShape$$2_context$$120$$.$setCornerRadius$($linkWidth$$9$$);
  return $conShape$$2_context$$120$$;
};
$DvtDiagramLinkConnectorUtils$$.$CreateCustomConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateCustomConnector$$($connectorTemplate$$9$$, $parentLink$$4$$) {
  var $afContext$$59$$ = $JSCompiler_StaticMethods_createAfContext$$($parentLink$$4$$.$GetDiagram$()), $array$$inline_2729_elContext$$inline_2726$$ = $parentLink$$4$$.getData().$_elAttributes$;
  $afContext$$59$$.$_elContext$ = $array$$inline_2729_elContext$$inline_2726$$;
  $afContext$$59$$.$setContextCallback$($parentLink$$4$$, $parentLink$$4$$.$eventContextCallback$);
  $array$$inline_2729_elContext$$inline_2726$$ = $parentLink$$4$$.$getTabStopsArray$();
  $afContext$$59$$.$_tabStopsArray$ = $array$$inline_2729_elContext$$inline_2726$$;
  return $DvtAfComponentFactory$$.$parseAndLayout$($afContext$$59$$, $connectorTemplate$$9$$, $parentLink$$4$$);
};
$DvtDiagramLinkConnectorUtils$$.$GetConnectorOffset$ = function $$DvtDiagramLinkConnectorUtils$$$$GetConnectorOffset$$($connScaleX$$1_connector$$10_linkWidth$$10$$, $connectorType$$8_dims$$34_scaleFactor$$7$$, $connectorTemplate$$10$$, $stroke$$35_strokeWidth$$6$$, $parentLink$$5$$) {
  if ($connectorTemplate$$10$$) {
    return $connectorType$$8_dims$$34_scaleFactor$$7$$ = $DvtDiagramLinkConnectorUtils$$.$_getCachedDims$($connScaleX$$1_connector$$10_linkWidth$$10$$), $connScaleX$$1_connector$$10_linkWidth$$10$$ = $connScaleX$$1_connector$$10_linkWidth$$10$$.$getScaleX$(), .5 * $connectorType$$8_dims$$34_scaleFactor$$7$$.$w$ * $connScaleX$$1_connector$$10_linkWidth$$10$$;
  }
  $connScaleX$$1_connector$$10_linkWidth$$10$$ = $parentLink$$5$$.$GetAppliedLinkWidth$();
  $stroke$$35_strokeWidth$$6$$ = $stroke$$35_strokeWidth$$6$$.getWidth();
  switch($connectorType$$8_dims$$34_scaleFactor$$7$$) {
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_OPEN$:
      return $stroke$$35_strokeWidth$$6$$ * Math.sqrt(2);
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW$:
      return $connectorType$$8_dims$$34_scaleFactor$$7$$ = $DvtDiagramLinkConnectorUtils$$.$_getReduce$($connScaleX$$1_connector$$10_linkWidth$$10$$), 5 * $connectorType$$8_dims$$34_scaleFactor$$7$$;
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_CONCAVE$:
      return $connectorType$$8_dims$$34_scaleFactor$$7$$ = $DvtDiagramLinkConnectorUtils$$.$_getReduce$($connScaleX$$1_connector$$10_linkWidth$$10$$), 4.68 * $connectorType$$8_dims$$34_scaleFactor$$7$$;
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_CIRCLE$:
      return 2 * $DvtDiagramLinkConnectorUtils$$.$getCircleRadius$($stroke$$35_strokeWidth$$6$$) + $stroke$$35_strokeWidth$$6$$ / 2;
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE$:
    ;
    case $DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE_ROUNDED$:
      return $DvtDiagramLinkConnectorUtils$$.$getRectangleLength$($stroke$$35_strokeWidth$$6$$) + $stroke$$35_strokeWidth$$6$$ / 2;
    default:
      return 0;
  }
};

dvt.$Diagram$ = function $dvt$$Diagram$$($context$$157$$, $callback$$93$$, $callbackObj$$33$$) {
  this.Init($context$$157$$, $callback$$93$$, $callbackObj$$33$$);
};
$goog$exportPath_$$("dvt.Diagram", dvt.$Diagram$);
dvt.$Obj$.$createSubclass$(dvt.$Diagram$, $DvtBaseDiagram$$);
dvt.$Diagram$.prototype.Init = function $dvt$$Diagram$$$Init$($context$$158$$, $callback$$94$$, $callbackObj$$34$$) {
  dvt.$Diagram$.$superclass$.Init.call(this, $context$$158$$, $callback$$94$$, $callbackObj$$34$$);
  this.$Defaults$ = new $DvtDiagramDefaults$$;
  this.$EventManager$ = new $DvtDiagramEventManager$$($context$$158$$, this.$processEvent$, this);
  this.$EventManager$.$addListeners$(this);
  dvt.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(new $DvtDiagramKeyboardHandler$$(this, this.$EventManager$));
  this.$_nodes$ = {};
  this.$_arNodeIds$ = [];
  this.$_links$ = {};
  this.$_arLinkIds$ = [];
  this.$_renderCount$ = 0;
};
dvt.$Diagram$.newInstance = function $dvt$$Diagram$$newInstance$($context$$159$$, $callback$$95$$, $callbackObj$$35$$) {
  return new dvt.$Diagram$($context$$159$$, $callback$$95$$, $callbackObj$$35$$);
};
dvt.$Diagram$.newInstance = dvt.$Diagram$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$Diagram$.prototype;
$JSCompiler_prototypeAlias$$.$PreRender$ = function $$JSCompiler_prototypeAlias$$$$PreRender$$() {
  !this.$_isResize$ && this.$_bRendered$ && ("none" != this.$_dataChangeAnim$ && (this.$_oldDataAnimState$ = {id:this.getId(), getId:function $this$$_oldDataAnimState$$getId$() {
    return this.id;
  }, options:this.$getOptions$(), getOptions:function $this$$_oldDataAnimState$$getOptions$() {
    return this.options;
  }, panZoomMatrix:this.$_panZoomCanvas$.$_contentPane$.$getMatrix$(), getPanZoomMatrix:function $this$$_oldDataAnimState$$getPanZoomMatrix$() {
    return this.panZoomMatrix;
  }, nodes:this.$_nodes$ ? $JSCompiler_StaticMethods_GetAllNodeObjects$$(this) : [], links:this.$_links$ ? $JSCompiler_StaticMethods_GetAllLinkObjects$$(this) : [], getNodes:function $this$$_oldDataAnimState$$getNodes$() {
    return this.nodes;
  }, getLinks:function $this$$_oldDataAnimState$$getLinks$() {
    return this.links;
  }}, this.$_oldDataAnimState$.$getOptions$ = this.$_oldDataAnimState$.getOptions, this.$_oldDataAnimState$.$getPanZoomMatrix$ = this.$_oldDataAnimState$.getPanZoomMatrix, this.$_oldDataAnimState$.getId = this.$_oldDataAnimState$.getId, this.$_oldDataAnimState$.$getNodes$ = this.$_oldDataAnimState$.getNodes, this.$_oldDataAnimState$.$getLinks$ = this.$_oldDataAnimState$.getLinks), this.$_bRendered$ = !1, this.$_oldPanZoomCanvas$ = this.$_panZoomCanvas$);
  this.$_isResize$ || this.$ResetNodesAndLinks$();
};
$JSCompiler_prototypeAlias$$.$ResetNodesAndLinks$ = function $$JSCompiler_prototypeAlias$$$$ResetNodesAndLinks$$() {
  this.$_linksPane$ = new dvt.$Container$(this.$getCtx$());
  this.$_nodesPane$ = new dvt.$Container$(this.$getCtx$());
  this.$_topPane$ = new dvt.$Container$(this.$getCtx$());
  this.$_nodes$ = {};
  this.$_arNodeIds$ = [];
  this.$_links$ = {};
  this.$_arLinkIds$ = [];
  this.$_highlightedObjects$ = null;
};
$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$());
  this.$_deleteContainer$ = null;
  this.$Animation$ && this.$getEventManager$().$addListeners$(this);
  this.$AnimationStopped$ || this.$RenderComplete$();
  this.$Animation$ = null;
  this.$AnimationStopped$ = !1;
};
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$, $oldDiagramState$$2$$) {
  var $playable$$16$$ = new dvt.$CustomAnimation$(this.$getCtx$(), null, $animationHandler$$.$getAnimationDuration$()), $oldMat$$4$$ = $oldDiagramState$$2$$.$getPanZoomMatrix$(), $newMat$$5$$ = this.$_panZoomCanvas$.$_contentPane$.$getMatrix$();
  $oldMat$$4$$.$equals$($newMat$$5$$) || (this.$_panZoomCanvas$.$_contentPane$.$setMatrix$($oldMat$$4$$), $playable$$16$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, this.$_panZoomCanvas$.$_contentPane$, this.$_panZoomCanvas$.$_contentPane$.$getMatrix$, this.$_panZoomCanvas$.$_contentPane$.$setMatrix$, $newMat$$5$$));
  $animationHandler$$.$constructAnimation$($oldDiagramState$$2$$.$getNodes$(), this.$_nodes$ ? $JSCompiler_StaticMethods_GetAllNodeObjects$$(this) : []);
  $animationHandler$$.$constructAnimation$($oldDiagramState$$2$$.$getLinks$(), this.$_links$ ? $JSCompiler_StaticMethods_GetAllLinkObjects$$(this) : []);
  $animationHandler$$.add($playable$$16$$, 1);
};
$JSCompiler_prototypeAlias$$.$RenderComponentInternal$ = function $$JSCompiler_prototypeAlias$$$$RenderComponentInternal$$($animator$$75$$) {
  var $emptyDiagram$$2$$ = !1;
  if (!this.$_bRendered$ && !this.$_isResize$) {
    $JSCompiler_StaticMethods_renderNodes$$(this);
    $JSCompiler_StaticMethods_renderLinks$$(this);
    var $keys$$2$$ = [], $key$$60$$;
    for ($key$$60$$ in this.$_nodes$) {
      $keys$$2$$.push($key$$60$$);
    }
    $emptyDiagram$$2$$ = 0 === $keys$$2$$.length;
    this.$getCtx$().$setKeyboardFocusArray$([this]);
    this.$_renderCount$++;
  }
  if ($emptyDiagram$$2$$) {
    this.$_renderCount$ = this.$_bRendered$ ? this.$_renderCount$ : this.$_renderCount$ - 1, 0 === this.$_renderCount$ && $JSCompiler_StaticMethods__processContent$$(this, $animator$$75$$, $emptyDiagram$$2$$);
  } else {
    this.contains(this.$_oldPanZoomCanvas$) || this.$addChild$(this.$_oldPanZoomCanvas$);
    var $thisRef$$26$$ = this;
    this.$layout$($animator$$75$$).then(function() {
      $thisRef$$26$$.$_renderCount$ = $thisRef$$26$$.$_bRendered$ ? $thisRef$$26$$.$_renderCount$ : $thisRef$$26$$.$_renderCount$ - 1;
      0 === $thisRef$$26$$.$_renderCount$ && $JSCompiler_StaticMethods__processContent$$($thisRef$$26$$, $animator$$75$$, $emptyDiagram$$2$$);
    }, function() {
      $thisRef$$26$$.$_renderCount$ = $thisRef$$26$$.$_bRendered$ ? $thisRef$$26$$.$_renderCount$ : $thisRef$$26$$.$_renderCount$ - 1;
      0 === $thisRef$$26$$.$_renderCount$ && ($thisRef$$26$$.removeChild($thisRef$$26$$.$_oldPanZoomCanvas$), $thisRef$$26$$.$_oldPanZoomCanvas$ = null, $thisRef$$26$$.$_bRendered$ = !0);
    });
  }
};
function $JSCompiler_StaticMethods__processContent$$($JSCompiler_StaticMethods__processContent$self$$, $animator$$76_zoom$$8$$, $bEmptyDiagram_contentDim$$2$$) {
  var $calcViewBounds$$1$$;
  if (!$bEmptyDiagram_contentDim$$2$$) {
    $JSCompiler_StaticMethods__processContent$self$$.removeChild($JSCompiler_StaticMethods__processContent$self$$.$_oldPanZoomCanvas$);
    $JSCompiler_StaticMethods__processContent$self$$.$_processHighlighting$();
    $JSCompiler_StaticMethods__processContent$self$$.$_processInitialSelections$();
    if ($calcViewBounds$$1$$ = null == $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$) {
      $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$ = $JSCompiler_StaticMethods_CalcViewBounds$$($JSCompiler_StaticMethods__processContent$self$$, $animator$$76_zoom$$8$$, void 0, void 0);
    }
    var $ah$$1_pzc$$inline_2746$$ = $JSCompiler_StaticMethods__processContent$self$$.$_panZoomCanvas$;
    if ($JSCompiler_StaticMethods__processContent$self$$.$_bRendered$) {
      $JSCompiler_StaticMethods__processContent$self$$.$_isResize$ && ($fitBounds$$inline_2748_viewBounds$$inline_2749$$ = $JSCompiler_StaticMethods__processContent$self$$.$AdjustMinZoom$($animator$$76_zoom$$8$$, $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$), $fitBounds$$inline_2748_viewBounds$$inline_2749$$ = $bLayoutViewport$$inline_2747$$ ? $JSCompiler_StaticMethods_GetLayoutViewport$$($JSCompiler_StaticMethods__processContent$self$$) : $fitBounds$$inline_2748_viewBounds$$inline_2749$$ ? 
      $fitBounds$$inline_2748_viewBounds$$inline_2749$$ : $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$, $ah$$1_pzc$$inline_2746$$.$setZoomToFitEnabled$(!0), $ah$$1_pzc$$inline_2746$$.$zoomToFit$(null, $fitBounds$$inline_2748_viewBounds$$inline_2749$$), $ah$$1_pzc$$inline_2746$$.$setZoomToFitEnabled$($JSCompiler_StaticMethods__processContent$self$$.$_zoomingEnabled$));
    } else {
      $JSCompiler_StaticMethods__processContent$self$$.$AdjustMinZoom$($animator$$76_zoom$$8$$, $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$);
      if (!$JSCompiler_StaticMethods__processContent$self$$.$_isResize$) {
        var $bLayoutViewport$$inline_2747$$ = $JSCompiler_StaticMethods__processContent$self$$.$_layoutViewport$ ? !0 : !1, $fitBounds$$inline_2748_viewBounds$$inline_2749$$ = $bLayoutViewport$$inline_2747$$ ? $JSCompiler_StaticMethods_GetLayoutViewport$$($JSCompiler_StaticMethods__processContent$self$$) : $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$;
        $bLayoutViewport$$inline_2747$$ && $ah$$1_pzc$$inline_2746$$.$setZoomToFitPadding$();
        $ah$$1_pzc$$inline_2746$$.$zoomToFit$(null, $fitBounds$$inline_2748_viewBounds$$inline_2749$$);
      }
      $ah$$1_pzc$$inline_2746$$.$setPanningEnabled$($JSCompiler_StaticMethods__processContent$self$$.$_panningEnabled$);
      $ah$$1_pzc$$inline_2746$$.$setPanDirection$($JSCompiler_StaticMethods__processContent$self$$.$getPanDirection$());
      $ah$$1_pzc$$inline_2746$$.$setZoomingEnabled$($JSCompiler_StaticMethods__processContent$self$$.$_zoomingEnabled$);
      $ah$$1_pzc$$inline_2746$$.$setZoomToFitEnabled$($JSCompiler_StaticMethods__processContent$self$$.$_zoomingEnabled$);
    }
  }
  $JSCompiler_StaticMethods__processContent$self$$.$_oldPanZoomCanvas$ = null;
  $JSCompiler_StaticMethods__processContent$self$$.$_bRendered$ || ($JSCompiler_StaticMethods__processContent$self$$.$StopAnimation$(!0), dvt.$Agent$.$isEnvironmentBrowser$() && $JSCompiler_StaticMethods__processContent$self$$.$_initAnim$ && !$JSCompiler_StaticMethods__processContent$self$$.$_oldDataAnimState$ ? $JSCompiler_StaticMethods__processContent$self$$.$Animation$ = dvt.$BlackBoxAnimationHandler$.$getInAnimation$($JSCompiler_StaticMethods__processContent$self$$.$getCtx$(), $JSCompiler_StaticMethods__processContent$self$$.$_initAnim$, 
  $JSCompiler_StaticMethods__processContent$self$$, null, $JSCompiler_StaticMethods__processContent$self$$.$getAnimationDuration$()) : "none" != $JSCompiler_StaticMethods__processContent$self$$.$_dataChangeAnim$ && $JSCompiler_StaticMethods__processContent$self$$.$_oldDataAnimState$ && ($JSCompiler_StaticMethods__processContent$self$$.$_deleteContainer$ = new dvt.$Container$($JSCompiler_StaticMethods__processContent$self$$.$getCtx$(), "Delete Container"), $JSCompiler_StaticMethods__processContent$self$$.$addChild$($JSCompiler_StaticMethods__processContent$self$$.$_deleteContainer$), 
  $ah$$1_pzc$$inline_2746$$ = new $DvtDiagramDataAnimationHandler$$($JSCompiler_StaticMethods__processContent$self$$.$getCtx$(), $JSCompiler_StaticMethods__processContent$self$$.$_deleteContainer$, $JSCompiler_StaticMethods__processContent$self$$.$_oldDataAnimState$, $JSCompiler_StaticMethods__processContent$self$$), $ah$$1_pzc$$inline_2746$$.$constructAnimation$([$JSCompiler_StaticMethods__processContent$self$$.$_oldDataAnimState$], [$JSCompiler_StaticMethods__processContent$self$$]), $JSCompiler_StaticMethods__processContent$self$$.$Animation$ = 
  $ah$$1_pzc$$inline_2746$$.$getAnimation$()), $JSCompiler_StaticMethods__processContent$self$$.$Animation$ ? ($JSCompiler_StaticMethods__processContent$self$$.$getEventManager$().$hideTooltip$(), $JSCompiler_StaticMethods__processContent$self$$.$getEventManager$().$removeListeners$($JSCompiler_StaticMethods__processContent$self$$), $JSCompiler_StaticMethods__processContent$self$$.$Animation$.$setOnEnd$($JSCompiler_StaticMethods__processContent$self$$.$_onAnimationEnd$, $JSCompiler_StaticMethods__processContent$self$$), 
  $JSCompiler_StaticMethods__processContent$self$$.$Animation$.play()) : $JSCompiler_StaticMethods__processContent$self$$.$_onAnimationEnd$());
  $JSCompiler_StaticMethods__processContent$self$$.$_bRendered$ = !0;
  $JSCompiler_StaticMethods_RefreshEmptyText$$($JSCompiler_StaticMethods__processContent$self$$, $bEmptyDiagram_contentDim$$2$$);
  $JSCompiler_StaticMethods__processContent$self$$.$_panningEnabled$ && ($bEmptyDiagram_contentDim$$2$$ = $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$, null != $bEmptyDiagram_contentDim$$2$$ && ($animator$$76_zoom$$8$$ = $JSCompiler_StaticMethods__processContent$self$$.$_panZoomCanvas$.$getZoom$($animator$$76_zoom$$8$$), $JSCompiler_StaticMethods__processContent$self$$.$ConstrainPanning$($bEmptyDiagram_contentDim$$2$$.x, $bEmptyDiagram_contentDim$$2$$.y, $bEmptyDiagram_contentDim$$2$$.$w$, 
  $bEmptyDiagram_contentDim$$2$$.$h$, $animator$$76_zoom$$8$$)));
  $JSCompiler_StaticMethods__processContent$self$$.$_layoutViewport$ = null;
  $JSCompiler_StaticMethods__processContent$self$$.$_layoutViewportContainerId$ = null;
  $calcViewBounds$$1$$ && ($JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$ = null);
}
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$120$$) {
  dvt.$Diagram$.$superclass$.$SetOptions$.call(this, $options$$120$$);
  this.$parseComponentJson$(this.$Options$);
  this.$_panningEnabled$ = "none" != this.$Options$.panning;
  this.$_zoomingEnabled$ = "none" != this.$Options$.zooming;
  this.$setControlPanelBehavior$("hidden");
  this.$_dataChangeAnim$ = this.$Options$.animationOnDataChange;
  this.$setInitAnim$("auto" == this.$Options$.animationOnDisplay ? dvt.$BlackBoxAnimationHandler$.$ALPHA_FADE$ : null);
  this.$setSelectionMode$(this.$Options$.selectionMode);
  this.$_emptyText$ = this.$Options$.emptyText ? this.$Options$.emptyText : dvt.$Bundle$.$getTranslation$(this.$Options$, "labelNoData", dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA");
};
dvt.$Diagram$.$getDefaults$ = function $dvt$$Diagram$$$getDefaults$$($skin$$7$$) {
  return (new $DvtDiagramDefaults$$).$getDefaults$($skin$$7$$);
};
$JSCompiler_prototypeAlias$$ = dvt.$Diagram$.prototype;
$JSCompiler_prototypeAlias$$.$getMaxZoom$ = function $$JSCompiler_prototypeAlias$$$$getMaxZoom$$() {
  var $f$$4_maxZoom$$3$$ = this.$getOptions$().maxZoom, $f$$4_maxZoom$$3$$ = parseFloat($f$$4_maxZoom$$3$$);
  return 0 < $f$$4_maxZoom$$3$$ ? $f$$4_maxZoom$$3$$ : 1;
};
$JSCompiler_prototypeAlias$$.$getMinZoom$ = function $$JSCompiler_prototypeAlias$$$$getMinZoom$$() {
  var $minZoom$$3$$ = this.$getOptions$().minZoom;
  if ($minZoom$$3$$) {
    var $f$$5$$ = parseFloat($minZoom$$3$$);
    0 < $f$$5$$ && ($minZoom$$3$$ = Math.min($f$$5$$, this.$getMaxZoom$()));
    return $minZoom$$3$$;
  }
  return 0;
};
$JSCompiler_prototypeAlias$$.$getPanDirection$ = function $$JSCompiler_prototypeAlias$$$$getPanDirection$$() {
  return this.$getOptions$().panDirection;
};
$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return dvt.$StyleUtils$.$getTimeMilliseconds$(this.$getOptions$().styleDefaults.animationDuration) / 1E3;
};
$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$240$$) {
  "categoryHighlight" == $event$$240$$.type && this.$_processHighlighting$(!0);
  $event$$240$$ && this.dispatchEvent($event$$240$$);
};
function $JSCompiler_StaticMethods_renderNodes$$($JSCompiler_StaticMethods_renderNodes$self$$) {
  var $nodesData$$ = $JSCompiler_StaticMethods_renderNodes$self$$.$getOptions$().nodes;
  if ($nodesData$$) {
    for (var $i$$384$$ = 0;$i$$384$$ < $nodesData$$.length;$i$$384$$++) {
      var $node$$187_nodeData$$20$$ = $nodesData$$[$i$$384$$], $node$$187_nodeData$$20$$ = dvt.$JsonUtils$.$merge$($node$$187_nodeData$$20$$, $JSCompiler_StaticMethods_renderNodes$self$$.$getOptions$().styleDefaults.nodeDefaults), $node$$187_nodeData$$20$$ = new $DvtDiagramNode$$($JSCompiler_StaticMethods_renderNodes$self$$.$getCtx$(), $JSCompiler_StaticMethods_renderNodes$self$$, $node$$187_nodeData$$20$$), $nodeId$$95$$ = $node$$187_nodeData$$20$$.getId();
      $node$$187_nodeData$$20$$.$isHidden$() ? $JSCompiler_StaticMethods_renderNodes$self$$.$_arNodeIds$.push($nodeId$$95$$) : ($node$$187_nodeData$$20$$.$render$($JSCompiler_StaticMethods_renderNodes$self$$.$_nodesPane$), $JSCompiler_StaticMethods_renderNodes$self$$.$_arNodeIds$.push($nodeId$$95$$), $JSCompiler_StaticMethods_renderNodes$self$$.$_nodes$[$nodeId$$95$$] = $node$$187_nodeData$$20$$);
    }
  }
}
function $JSCompiler_StaticMethods_renderLinks$$($JSCompiler_StaticMethods_renderLinks$self$$) {
  var $linksData$$ = $JSCompiler_StaticMethods_renderLinks$self$$.$getOptions$().links;
  if ($linksData$$) {
    for (var $i$$385$$ = 0;$i$$385$$ < $linksData$$.length;$i$$385$$++) {
      var $linkData$$15_linkId$$36$$ = $linksData$$[$i$$385$$], $linkData$$15_linkId$$36$$ = dvt.$JsonUtils$.$merge$($linkData$$15_linkId$$36$$, $JSCompiler_StaticMethods_renderLinks$self$$.$getOptions$().styleDefaults.linkDefaults), $endNode$$2_link$$68$$ = new $DvtDiagramLink$$($JSCompiler_StaticMethods_renderLinks$self$$.$getCtx$(), $JSCompiler_StaticMethods_renderLinks$self$$, $linkData$$15_linkId$$36$$), $linkData$$15_linkId$$36$$ = $endNode$$2_link$$68$$.getId();
      if ($endNode$$2_link$$68$$.$isHidden$()) {
        $JSCompiler_StaticMethods_renderLinks$self$$.$_arLinkIds$.push($linkData$$15_linkId$$36$$);
      } else {
        $endNode$$2_link$$68$$.$render$($JSCompiler_StaticMethods_renderLinks$self$$.$_linksPane$);
        $JSCompiler_StaticMethods_renderLinks$self$$.$_arLinkIds$.push($linkData$$15_linkId$$36$$);
        $JSCompiler_StaticMethods_renderLinks$self$$.$_links$[$linkData$$15_linkId$$36$$] = $endNode$$2_link$$68$$;
        var $startNode$$2$$ = $JSCompiler_StaticMethods_renderLinks$self$$.$getNodeById$($endNode$$2_link$$68$$.$getStartId$()), $endNode$$2_link$$68$$ = $JSCompiler_StaticMethods_renderLinks$self$$.$getNodeById$($endNode$$2_link$$68$$.$getEndId$());
        $JSCompiler_StaticMethods_addOutLinkId$$($startNode$$2$$, $linkData$$15_linkId$$36$$);
        $JSCompiler_StaticMethods_addInLinkId$$($endNode$$2_link$$68$$, $linkData$$15_linkId$$36$$);
      }
    }
  }
}
$JSCompiler_prototypeAlias$$.$layout$ = function $$JSCompiler_prototypeAlias$$$$layout$$($animator$$78$$) {
  for (var $layoutFunc$$1_promise$$ = this.$getOptions$().layout, $layoutContext$$15$$ = $JSCompiler_StaticMethods_CreateEmptyLayoutContext$$(this), $nodeIds$$2$$ = {}, $link$$69_n$$9$$ = 0;$link$$69_n$$9$$ < this.$_arNodeIds$.length;$link$$69_n$$9$$++) {
    var $nodeId$$96_startId$$6$$ = this.$_arNodeIds$[$link$$69_n$$9$$];
    this.$getNodeById$($nodeId$$96_startId$$6$$) && ($nodeIds$$2$$[$nodeId$$96_startId$$6$$] = !0, $layoutContext$$15$$.$addNode$(this.$CreateLayoutContextNode$(this.$getNodeById$($nodeId$$96_startId$$6$$))));
  }
  for (var $linkId$$37$$ in this.$_links$) {
    if ($link$$69_n$$9$$ = this.$getLinkById$($linkId$$37$$)) {
      var $nodeId$$96_startId$$6$$ = $link$$69_n$$9$$.getData().startNode, $endId$$6$$ = $link$$69_n$$9$$.getData().endNode;
      $nodeIds$$2$$[$nodeId$$96_startId$$6$$] && $nodeIds$$2$$[$endId$$6$$] && $JSCompiler_StaticMethods_addLink$$($layoutContext$$15$$, this.$CreateLayoutContextLink$($link$$69_n$$9$$, $nodeId$$96_startId$$6$$, $endId$$6$$));
    }
  }
  if ($layoutFunc$$1_promise$$ && "function" == typeof $layoutFunc$$1_promise$$) {
    var $thisRef$$27$$ = this;
    ($layoutFunc$$1_promise$$ = $layoutFunc$$1_promise$$($layoutContext$$15$$)) || ($layoutFunc$$1_promise$$ = {then:function $$layoutFunc$$1_promise$$$then$($animator$$78$$) {
      $animator$$78$$();
    }});
    this.$setAlphas$(0);
    $layoutFunc$$1_promise$$.then(function() {
      1 === $thisRef$$27$$.$_renderCount$ && ($thisRef$$27$$.$setAlphas$(1), $thisRef$$27$$.$ApplyLayoutContext$($layoutContext$$15$$, $animator$$78$$, !0));
    }, function() {
    });
    return $layoutFunc$$1_promise$$;
  }
  this.$Log$("dvt.Diagram: Layout function is not defined", 1);
};
$JSCompiler_prototypeAlias$$.$setAlphas$ = function $$JSCompiler_prototypeAlias$$$$setAlphas$$($alpha$$17$$) {
  this.$_bRendered$ || (this.$_linksPane$.$setAlpha$($alpha$$17$$), this.$_nodesPane$.$setAlpha$($alpha$$17$$));
};
$JSCompiler_prototypeAlias$$.$getNodeById$ = function $$JSCompiler_prototypeAlias$$$$getNodeById$$($id$$107$$) {
  return this.$_nodes$[$id$$107$$];
};
$JSCompiler_prototypeAlias$$.$getLinkById$ = function $$JSCompiler_prototypeAlias$$$$getLinkById$$($id$$108$$) {
  return this.$_links$[$id$$108$$];
};
$JSCompiler_prototypeAlias$$.$GetAllLinks$ = function $$JSCompiler_prototypeAlias$$$$GetAllLinks$$() {
  return this.$_arLinkIds$;
};
function $JSCompiler_StaticMethods_GetAllLinkObjects$$($JSCompiler_StaticMethods_GetAllLinkObjects$self$$) {
  var $allLinks$$1$$ = [], $linkId$$38$$;
  for ($linkId$$38$$ in $JSCompiler_StaticMethods_GetAllLinkObjects$self$$.$_links$) {
    $allLinks$$1$$.push($JSCompiler_StaticMethods_GetAllLinkObjects$self$$.$_links$[$linkId$$38$$]);
  }
  return $allLinks$$1$$;
}
$JSCompiler_prototypeAlias$$.$GetAllNodes$ = function $$JSCompiler_prototypeAlias$$$$GetAllNodes$$() {
  return this.$_arNodeIds$;
};
function $JSCompiler_StaticMethods_GetAllNodeObjects$$($JSCompiler_StaticMethods_GetAllNodeObjects$self$$) {
  var $allNodes$$3$$ = [], $nodeId$$97$$;
  for ($nodeId$$97$$ in $JSCompiler_StaticMethods_GetAllNodeObjects$self$$.$_nodes$) {
    $allNodes$$3$$.push($JSCompiler_StaticMethods_GetAllNodeObjects$self$$.$_nodes$[$nodeId$$97$$]);
  }
  return $allNodes$$3$$;
}
$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$241$$) {
  dvt.$Diagram$.$superclass$.$HandleZoomEvent$.call(this, $event$$241$$);
  switch($event$$241$$.$getSubType$()) {
    case dvt.$ZoomEvent$.$SUBTYPE_ADJUST_PAN_CONSTRAINTS$:
      if (this.$_panningEnabled$) {
        var $nodeId$$98_zoom$$9$$ = $event$$241$$.$_newZoom$, $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$ = this.$_cachedViewBounds$ ? this.$_cachedViewBounds$ : $JSCompiler_StaticMethods_CalcViewBounds$$(this, $event$$241$$.$_animator$, void 0, void 0);
        this.$ConstrainPanning$($JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$.x, $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$.y, $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$.$w$, $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$.$h$, $nodeId$$98_zoom$$9$$);
      }
      break;
    case dvt.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_CALC_BOUNDS$:
      this.$_layoutViewport$ || ($JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$ = this.$_cachedViewBounds$ ? this.$_cachedViewBounds$ : $JSCompiler_StaticMethods_CalcViewBounds$$(this, $event$$241$$.$_animator$, void 0, void 0), $event$$241$$.$setZoomToFitBounds$($JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$));
      break;
    case dvt.$ZoomEvent$.$SUBTYPE_ZOOMED$:
      if (this.$getOptions$().zoomRenderer && $event$$241$$.$_oldZoom$ !== $event$$241$$.$_newZoom$) {
        for ($nodeId$$98_zoom$$9$$ in this.$_nodes$) {
          var $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$ = this.$getNodeById$($nodeId$$98_zoom$$9$$), $event$$inline_2766_state$$inline_2768$$ = $event$$241$$;
          if ($JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$.$_diagram$.$getOptions$().zoomRenderer) {
            var $prevState$$inline_2767$$ = $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$.$_getState$($event$$inline_2766_state$$inline_2768$$.$_oldZoom$), $event$$inline_2766_state$$inline_2768$$ = $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$.$_getState$($event$$inline_2766_state$$inline_2768$$.$_newZoom$);
            $JSCompiler_StaticMethods__applyCustomNodeContent$$($JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$, $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2765_contentDim$$3$$.$_diagram$.$getOptions$().zoomRenderer, $event$$inline_2766_state$$inline_2768$$, $prevState$$inline_2767$$);
          }
        }
      }
    ;
  }
};
$JSCompiler_prototypeAlias$$.$prepareForDataChange$ = function $$JSCompiler_prototypeAlias$$$$prepareForDataChange$$() {
};
$JSCompiler_prototypeAlias$$.$getNavigableLinksForNodeId$ = function $$JSCompiler_prototypeAlias$$$$getNavigableLinksForNodeId$$($nodeId$$99$$) {
  var $links$$5$$ = [], $linkId$$39$$;
  for ($linkId$$39$$ in this.$_links$) {
    var $link$$70$$ = this.$getLinkById$($linkId$$39$$), $startId$$7$$ = $link$$70$$.$getStartId$(), $endId$$7$$ = $link$$70$$.$getEndId$();
    $startId$$7$$ != $nodeId$$99$$ && $endId$$7$$ != $nodeId$$99$$ || !$link$$70$$.$_bVisible$ || $links$$5$$.push($link$$70$$);
  }
  return $links$$5$$;
};
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DIAGRAM");
};
$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  if (this.$Options$.selection && this.$isSelectionSupported$()) {
    var $targets$$3$$ = [], $nodeId$$100$$;
    for ($nodeId$$100$$ in this.$_nodes$) {
      $targets$$3$$.push(this.$getNodeById$($nodeId$$100$$));
    }
    for (var $linkId$$40$$ in this.$_links$) {
      $targets$$3$$.push(this.$getLinkById$($linkId$$40$$));
    }
    this.$getSelectionHandler$().$processInitialSelections$(this.$Options$.selection, $targets$$3$$);
  }
};
$JSCompiler_prototypeAlias$$.$_processHighlighting$ = function $$JSCompiler_prototypeAlias$$$$_processHighlighting$$($handleEventListeners$$) {
  $handleEventListeners$$ && this.$EventManager$.$removeListeners$(this);
  this.$_highlightedObjects$ && (this.$_updateAlphas$(!1, this.$_highlightedObjects$), this.$_highlightedObjects$ = null);
  var $categories$$8$$ = this.$Options$.highlightedCategories;
  if ($categories$$8$$) {
    var $bAnyMatched$$ = "any" == this.$Options$.highlightMatch;
    this.$_highlightedObjects$ = {};
    var $highlightedLinks_highlightedNodes$$ = [], $link$$71_nodeId$$101$$;
    for ($link$$71_nodeId$$101$$ in this.$_nodes$) {
      var $node$$189$$ = this.$getNodeById$($link$$71_nodeId$$101$$), $match$$3$$ = $bAnyMatched$$ ? dvt.$ArrayUtils$.$hasAnyItem$($node$$189$$.$getCategories$(), $categories$$8$$) : dvt.$ArrayUtils$.$hasAllItems$($node$$189$$.$getCategories$(), $categories$$8$$);
      $match$$3$$ && (this.$_highlightedObjects$[$node$$189$$.getId()] = $node$$189$$, $highlightedLinks_highlightedNodes$$.push($node$$189$$));
    }
    $JSCompiler_StaticMethods__processNodeConnections$$(this, $highlightedLinks_highlightedNodes$$);
    var $highlightedLinks_highlightedNodes$$ = [], $linkId$$41$$;
    for ($linkId$$41$$ in this.$_links$) {
      if ($link$$71_nodeId$$101$$ = this.$getLinkById$($linkId$$41$$), $match$$3$$ = $bAnyMatched$$ ? dvt.$ArrayUtils$.$hasAnyItem$($link$$71_nodeId$$101$$.$getCategories$(), $categories$$8$$) : dvt.$ArrayUtils$.$hasAllItems$($link$$71_nodeId$$101$$.$getCategories$(), $categories$$8$$)) {
        this.$_highlightedObjects$[$link$$71_nodeId$$101$$.getId()] = $link$$71_nodeId$$101$$, $highlightedLinks_highlightedNodes$$.push($link$$71_nodeId$$101$$);
      }
    }
    "linkAndNodes" == this.$Options$.linkHighlightMode && $JSCompiler_StaticMethods__processLinkConnections$$(this, $highlightedLinks_highlightedNodes$$);
    this.$_updateAlphas$(!0, this.$_highlightedObjects$);
    if ($handleEventListeners$$) {
      var $thisRef$$28$$ = this;
      setTimeout(function() {
        $thisRef$$28$$.$getEventManager$().$addListeners$($thisRef$$28$$);
      }, 0);
    }
  } else {
    $handleEventListeners$$ && this.$EventManager$.$addListeners$(this);
  }
};
function $JSCompiler_StaticMethods__processNodeConnections$$($JSCompiler_StaticMethods__processNodeConnections$self$$, $highlightedNodes$$1$$) {
  var $nodeHighlightMode_outgoing$$1$$ = $JSCompiler_StaticMethods__processNodeConnections$self$$.$Options$.nodeHighlightMode;
  if ("node" != $nodeHighlightMode_outgoing$$1$$) {
    for (var $incoming$$1$$ = "nodeAndIncomingLinks" == $nodeHighlightMode_outgoing$$1$$ || "nodeAndLinks" == $nodeHighlightMode_outgoing$$1$$, $nodeHighlightMode_outgoing$$1$$ = "nodeAndOutgoingLinks" == $nodeHighlightMode_outgoing$$1$$ || "nodeAndLinks" == $nodeHighlightMode_outgoing$$1$$, $highlightedLinks$$1$$ = [], $nodeIdx$$ = 0;$nodeIdx$$ < $highlightedNodes$$1$$.length;$nodeIdx$$++) {
      for (var $idx$$12_node$$190$$ = $highlightedNodes$$1$$[$nodeIdx$$], $links$$6$$ = $incoming$$1$$ && $idx$$12_node$$190$$.$_inLinkIds$ ? $idx$$12_node$$190$$.$_inLinkIds$ : [], $links$$6$$ = $nodeHighlightMode_outgoing$$1$$ && $idx$$12_node$$190$$.$_outLinkIds$ ? $links$$6$$.concat($idx$$12_node$$190$$.$_outLinkIds$) : $links$$6$$, $idx$$12_node$$190$$ = 0;$idx$$12_node$$190$$ < $links$$6$$.length;$idx$$12_node$$190$$++) {
        var $linkId$$42$$ = $links$$6$$[$idx$$12_node$$190$$];
        $JSCompiler_StaticMethods__processNodeConnections$self$$.$_highlightedObjects$[$linkId$$42$$] = $JSCompiler_StaticMethods__processNodeConnections$self$$.$getLinkById$($linkId$$42$$);
        $highlightedLinks$$1$$.push($JSCompiler_StaticMethods__processNodeConnections$self$$.$getLinkById$($linkId$$42$$));
      }
    }
    $JSCompiler_StaticMethods__processLinkConnections$$($JSCompiler_StaticMethods__processNodeConnections$self$$, $highlightedLinks$$1$$);
  }
}
function $JSCompiler_StaticMethods__processLinkConnections$$($JSCompiler_StaticMethods__processLinkConnections$self$$, $highlightedLinks$$2$$) {
  for (var $linkIdx$$ = 0;$linkIdx$$ < $highlightedLinks$$2$$.length;$linkIdx$$++) {
    var $link$$72_linkEndId$$ = $highlightedLinks$$2$$[$linkIdx$$], $linkStartId$$ = $link$$72_linkEndId$$.$getStartId$(), $link$$72_linkEndId$$ = $link$$72_linkEndId$$.$getEndId$();
    $JSCompiler_StaticMethods__processLinkConnections$self$$.$_highlightedObjects$[$linkStartId$$] = $JSCompiler_StaticMethods__processLinkConnections$self$$.$getNodeById$($linkStartId$$);
    $JSCompiler_StaticMethods__processLinkConnections$self$$.$_highlightedObjects$[$link$$72_linkEndId$$] = $JSCompiler_StaticMethods__processLinkConnections$self$$.$getNodeById$($link$$72_linkEndId$$);
  }
}
$JSCompiler_prototypeAlias$$.$_updateAlphas$ = function $$JSCompiler_prototypeAlias$$$$_updateAlphas$$($bHighlight$$1$$, $highlightedObjects$$3$$) {
  var $defaultAlpha$$1$$ = $bHighlight$$1$$ ? this.$Options$.styleDefaults._highlightAlpha : 1;
  this.$_linksPane$.$setAlpha$($defaultAlpha$$1$$);
  this.$_nodesPane$.$setAlpha$($defaultAlpha$$1$$);
  for (var $id$$109$$ in $highlightedObjects$$3$$) {
    $bHighlight$$1$$ ? this.$_topPane$.$addChild$($highlightedObjects$$3$$[$id$$109$$]) : $highlightedObjects$$3$$[$id$$109$$] instanceof $DvtDiagramLink$$ ? this.$_linksPane$.$addChild$($highlightedObjects$$3$$[$id$$109$$]) : $highlightedObjects$$3$$[$id$$109$$] instanceof $DvtDiagramNode$$ && this.$_nodesPane$.$addChild$($highlightedObjects$$3$$[$id$$109$$]);
  }
};
$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($categories$$9$$) {
  this.$Options$.highlightedCategories = dvt.$JsonUtils$.clone($categories$$9$$);
  this.$_processHighlighting$();
};
dvt.$Diagram$.prototype.highlight = dvt.$Diagram$.prototype.$highlight$;
dvt.$Diagram$.prototype.select = function $dvt$$Diagram$$$select$($selection$$16$$) {
  this.$Options$.selection = dvt.$JsonUtils$.clone($selection$$16$$);
  this.$_processInitialSelections$();
};
dvt.$Diagram$.prototype.select = dvt.$Diagram$.prototype.select;
dvt.$Diagram$.prototype.$getAutomation$ = function $dvt$$Diagram$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new $DvtDiagramAutomation$$(this));
  return this.$Automation$;
};
dvt.$Diagram$.prototype.getAutomation = dvt.$Diagram$.prototype.$getAutomation$;
dvt.$Diagram$.prototype.$Log$ = function $dvt$$Diagram$$$$Log$$($message$$19$$, $level$$38$$) {
  var $logger$$ = this.$getOptions$()._logger;
  if ($logger$$) {
    switch($level$$38$$) {
      case 1:
        $logger$$.error && $logger$$.error($message$$19$$);
        break;
      case 2:
        $logger$$.warn && $logger$$.warn($message$$19$$);
        break;
      case 3:
        $logger$$.info && $logger$$.info($message$$19$$);
        break;
      default:
        $logger$$.log && $logger$$.log($message$$19$$);
    }
  }
};
dvt.$Diagram$.prototype.$processDefaultHoverEffect$ = function $dvt$$Diagram$$$$processDefaultHoverEffect$$($nodeId$$102$$, $hovered$$) {
  var $node$$191$$ = this.$getNodeById$($nodeId$$102$$);
  $node$$191$$ && $node$$191$$.$processDefaultHoverEffect$($hovered$$);
};
dvt.$Diagram$.prototype.processDefaultHoverEffect = dvt.$Diagram$.prototype.$processDefaultHoverEffect$;
dvt.$Diagram$.prototype.$processDefaultSelectionEffect$ = function $dvt$$Diagram$$$$processDefaultSelectionEffect$$($nodeId$$103$$, $selected$$25$$) {
  var $node$$192$$ = this.$getNodeById$($nodeId$$103$$);
  $node$$192$$ && $node$$192$$.$processDefaultSelectionEffect$($selected$$25$$);
};
dvt.$Diagram$.prototype.processDefaultSelectionEffect = dvt.$Diagram$.prototype.$processDefaultSelectionEffect$;
dvt.$Diagram$.prototype.$processDefaultFocusEffect$ = function $dvt$$Diagram$$$$processDefaultFocusEffect$$($nodeId$$104$$, $focused$$1$$) {
  var $node$$193$$ = this.$getNodeById$($nodeId$$104$$);
  $node$$193$$ && $node$$193$$.$processDefaultFocusEffect$($focused$$1$$);
};
dvt.$Diagram$.prototype.processDefaultFocusEffect = dvt.$Diagram$.prototype.$processDefaultFocusEffect$;
dvt.$Diagram$.prototype.$renderNodeFromContext$ = function $dvt$$Diagram$$$$renderNodeFromContext$$($nodeContext$$4$$) {
  var $node$$194$$ = this.$getNodeById$($nodeContext$$4$$.getId());
  $node$$194$$.$IsRendered$() || ($node$$194$$.$render$(this.$_nodesPane$), $JSCompiler_StaticMethods_UpdateNodeLayoutContext$$($nodeContext$$4$$, $node$$194$$));
};
function $DvtDiagramCategoryRolloverHandler$$($callback$$96$$, $callbackObj$$36$$) {
  $DvtDiagramCategoryRolloverHandler$$.$superclass$.constructor.call(this, $callback$$96$$, $callbackObj$$36$$);
  this.$setHoverDelay$();
  this.$_diagram$ = $callbackObj$$36$$;
}
dvt.$Obj$.$createSubclass$($DvtDiagramCategoryRolloverHandler$$, dvt.$CategoryRolloverHandler$, "DvtDiagramCategoryRolloverHandler");
$DvtDiagramCategoryRolloverHandler$$.prototype.$GetRolloverCallback$ = function $$DvtDiagramCategoryRolloverHandler$$$$$GetRolloverCallback$$($event$$242$$) {
  return dvt.$Obj$.$createCallback$(this, function() {
    this.$SetHighlightMode$(!0);
    this.$_diagram$.$processEvent$($event$$242$$);
  });
};
$DvtDiagramCategoryRolloverHandler$$.prototype.$GetRolloutCallback$ = function $$DvtDiagramCategoryRolloverHandler$$$$$GetRolloutCallback$$($event$$243$$) {
  return dvt.$Obj$.$createCallback$(this, function() {
    this.$SetHighlightModeTimeout$();
    this.$_diagram$.$processEvent$($event$$243$$);
  });
};
function $DvtDiagramDefaults$$() {
  this.Init({skyros:$DvtDiagramDefaults$VERSION_1$$, alta:$DvtDiagramDefaults$SKIN_ALTA$$});
}
dvt.$Obj$.$createSubclass$($DvtDiagramDefaults$$, dvt.$BaseComponentDefaults$, "DvtDiagramDefaults");
var $DvtDiagramDefaults$VERSION_1$$ = {skin:dvt.$CSSStyle$.$SKIN_ALTA$, emptyText:null, selectionMode:"none", animationOnDataChange:"none", animationOnDisplay:"none", maxZoom:1, highlightMatch:"all", nodeHighlightMode:"node", linkHighlightMode:"link", panning:"none", touchResponse:"auto", zooming:"none", _statusMessageStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$), styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, _highlightAlpha:.1, nodeDefaults:{labelStyle:dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_12$ + 
"color:#383A47", hoverInnerColor:"rgb(255,255,255)", hoverOuterColor:"rgba(0,0,0, .3)", selectionColor:"rgb(0,0,0)", icon:{width:10, height:10, fillPattern:"none", shape:"circle"}}, linkDefaults:{startConnectorType:"none", endConnectorType:"none", width:1, style:"solid", hoverInnerColor:"rgb(255,255,255)", hoverOuterColor:"rgba(0,0,0, .3)", selectionColor:"rgb(0,0,0)", labelStyle:dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_12$ + "color:#383A47", _hitDetectionOffset:4}}}, $DvtDiagramDefaults$SKIN_ALTA$$ = 
{};
function $DvtDiagramDataAnimationHandler$$($context$$160$$, $deleteContainer$$1$$, $oldDiagram$$, $newDiagram$$3$$) {
  this.Init($context$$160$$, $deleteContainer$$1$$, $oldDiagram$$, $newDiagram$$3$$);
}
dvt.$Obj$.$createSubclass$($DvtDiagramDataAnimationHandler$$, dvt.$DataAnimationHandler$, "DvtDiagramDataAnimationHandler");
$DvtDiagramDataAnimationHandler$$.prototype.Init = function $$DvtDiagramDataAnimationHandler$$$$Init$($context$$161$$, $deleteContainer$$2$$, $oldDiagram$$1$$) {
  $DvtDiagramDataAnimationHandler$$.$superclass$.Init.call(this, $context$$161$$, $deleteContainer$$2$$);
  this.$_oldDiagram$ = $oldDiagram$$1$$;
};
$DvtDiagramDataAnimationHandler$$.prototype.$getAnimationDuration$ = function $$DvtDiagramDataAnimationHandler$$$$$getAnimationDuration$$() {
  return dvt.$StyleUtils$.$getTimeMilliseconds$(this.$_oldDiagram$.$getOptions$().styleDefaults.animationDuration) / 1E3;
};
function $DvtDiagramEventManager$$($context$$162$$, $callback$$99$$, $callbackObj$$37$$) {
  this.Init($context$$162$$, $callback$$99$$, $callbackObj$$37$$);
  this.$_diagram$ = $callbackObj$$37$$;
}
dvt.$Obj$.$createSubclass$($DvtDiagramEventManager$$, dvt.$EventManager$, "DvtDiagramEventManager");
$JSCompiler_prototypeAlias$$ = $DvtDiagramEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$244_options$$121$$, $categories$$10_hoverBehaviorDelay$$1_obj$$138$$, $bOver$$7_rolloverEvent$$2$$) {
  $event$$244_options$$121$$ = this.$_diagram$.$getOptions$();
  "dim" == $event$$244_options$$121$$.hoverBehavior && ($categories$$10_hoverBehaviorDelay$$1_obj$$138$$ = $categories$$10_hoverBehaviorDelay$$1_obj$$138$$.$getCategories$ ? $categories$$10_hoverBehaviorDelay$$1_obj$$138$$.$getCategories$() : [], $event$$244_options$$121$$.highlightedCategories = $bOver$$7_rolloverEvent$$2$$ ? $categories$$10_hoverBehaviorDelay$$1_obj$$138$$.slice() : null, $bOver$$7_rolloverEvent$$2$$ = dvt.$EventFactory$.$newCategoryHighlightEvent$($event$$244_options$$121$$.highlightedCategories, 
  $bOver$$7_rolloverEvent$$2$$), $categories$$10_hoverBehaviorDelay$$1_obj$$138$$ = dvt.$StyleUtils$.$getTimeMilliseconds$($event$$244_options$$121$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$7_rolloverEvent$$2$$, $JSCompiler_StaticMethods_GetAllNodeObjects$$(this.$_diagram$), $categories$$10_hoverBehaviorDelay$$1_obj$$138$$, "any" == $event$$244_options$$121$$.highlightMatch));
};
$JSCompiler_prototypeAlias$$.$CreateCategoryRolloverHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateCategoryRolloverHandler$$($callback$$100$$, $callbackObj$$38$$) {
  return new $DvtDiagramCategoryRolloverHandler$$($callback$$100$$, $callbackObj$$38$$);
};
$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$245$$) {
  var $eventConsumed$$1$$ = !0, $keyCode$$15$$ = $event$$245$$.keyCode, $focusObj$$ = this.$getFocus$(), $focusDisp$$ = $focusObj$$ instanceof $DvtDiagramNode$$ ? $focusObj$$.$_customNodeContent$ : null;
  $keyCode$$15$$ != dvt.KeyboardEvent.$TAB$ && this.$_bPassOnEvent$ ? ($focusDisp$$.$fireKeyboardListener$($event$$245$$), $event$$245$$.preventDefault()) : $keyCode$$15$$ == dvt.KeyboardEvent.$TAB$ && $focusDisp$$ instanceof dvt.$BaseComponent$ ? !$event$$245$$.shiftKey && $focusObj$$.$isShowingKeyboardFocusEffect$() ? ($focusObj$$.$hideKeyboardFocusEffect$(), $focusDisp$$.$fireKeyboardListener$($event$$245$$), $event$$245$$.preventDefault(), this.$_bPassOnEvent$ = !0) : ($event$$245$$.shiftKey && 
  this.$_bPassOnEvent$ ? (this.$ShowFocusEffect$($event$$245$$, $focusObj$$), $event$$245$$.preventDefault()) : (this.$_bPassOnEvent$ && $focusObj$$.$showKeyboardFocusEffect$(), $eventConsumed$$1$$ = $DvtDiagramEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$245$$)), this.$_bPassOnEvent$ = !1) : $eventConsumed$$1$$ = $DvtDiagramEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$245$$);
  return $eventConsumed$$1$$;
};
$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  var $options$$122$$ = this.$_diagram$.$getOptions$();
  return "none" !== $options$$122$$.panning || "none" !== $options$$122$$.zooming ? dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : $options$$122$$.touchResponse === dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ ? dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ : dvt.$EventManager$.$TOUCH_RESPONSE_AUTO$;
};
$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$246$$) {
  return this.$GetEventInfo$($event$$246$$, dvt.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$);
};
$JSCompiler_prototypeAlias$$.$StoreInfoByEventType$ = function $$JSCompiler_prototypeAlias$$$$StoreInfoByEventType$$($key$$61$$) {
  return $key$$61$$ == dvt.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$ ? !1 : $DvtDiagramEventManager$$.$superclass$.$StoreInfoByEventType$.call(this, $key$$61$$);
};
function $DvtDiagramKeyboardHandler$$($component$$6$$, $manager$$11$$) {
  this.Init($component$$6$$, $manager$$11$$);
}
dvt.$Obj$.$createSubclass$($DvtDiagramKeyboardHandler$$, $DvtBaseDiagramKeyboardHandler$$, "DvtDiagramKeyboardHandler");
$DvtDiagramKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtDiagramKeyboardHandler$$$$$isNavigationEvent$$($event$$247$$) {
  var $retVal$$1$$ = !1;
  switch($event$$247$$.keyCode) {
    case dvt.KeyboardEvent.$OPEN_ANGLED_BRACKET$:
    ;
    case dvt.KeyboardEvent.$CLOSE_ANGLED_BRACKET$:
      $retVal$$1$$ = $event$$247$$.altKey ? !0 : !1;
      break;
    default:
      $retVal$$1$$ = $DvtDiagramKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$247$$);
  }
  return $retVal$$1$$;
};
$DvtDiagramKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtDiagramKeyboardHandler$$$$$processKeyDown$$($event$$248$$) {
  if ($event$$248$$.keyCode == dvt.KeyboardEvent.$TAB$) {
    var $arNodes$$14_currentNavigable$$5$$ = this.$_eventManager$.$getFocus$();
    if ($arNodes$$14_currentNavigable$$5$$) {
      return dvt.$EventManager$.$consumeEvent$($event$$248$$), $arNodes$$14_currentNavigable$$5$$;
    }
    $arNodes$$14_currentNavigable$$5$$ = $JSCompiler_StaticMethods_GetAllNodeObjects$$(this.$GetDiagram$());
    if (0 < $arNodes$$14_currentNavigable$$5$$.length) {
      return dvt.$EventManager$.$consumeEvent$($event$$248$$), this.$getDefaultNavigable$($arNodes$$14_currentNavigable$$5$$);
    }
  }
  return $DvtDiagramKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$248$$);
};
$DvtDiagramKeyboardHandler$$.prototype.$GetVisibleNode$ = function $$DvtDiagramKeyboardHandler$$$$$GetVisibleNode$$($nodeId$$105$$) {
  return this.$GetDiagram$().$getNodeById$($nodeId$$105$$);
};
function $DvtDiagramLink$$($context$$163$$, $diagram$$94$$, $linkData$$16$$) {
  this.Init($context$$163$$, $diagram$$94$$, $linkData$$16$$);
}
dvt.$Obj$.$createSubclass$($DvtDiagramLink$$, $DvtBaseDiagramLink$$, "DvtDiagramLink");
$JSCompiler_prototypeAlias$$ = $DvtDiagramLink$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$164$$, $diagram$$96$$, $data$$61$$) {
  $DvtDiagramLink$$.$superclass$.Init.call(this, $context$$164$$, $data$$61$$.id, $diagram$$96$$);
  this.$_data$ = $data$$61$$;
  this.$_diagram$.$isSelectionSupported$() && this.setCursor("pointer");
};
$JSCompiler_prototypeAlias$$.getData = function $$JSCompiler_prototypeAlias$$$getData$() {
  return this.$_data$;
};
$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.getData().id;
};
$JSCompiler_prototypeAlias$$.$getStartId$ = function $$JSCompiler_prototypeAlias$$$$getStartId$$() {
  return this.getData().startNode;
};
$JSCompiler_prototypeAlias$$.$getEndId$ = function $$JSCompiler_prototypeAlias$$$$getEndId$$() {
  return this.getData().endNode;
};
$JSCompiler_prototypeAlias$$.$getLabelBounds$ = function $$JSCompiler_prototypeAlias$$$$getLabelBounds$$() {
  var $bounds$$43$$ = null;
  this.$_labelObj$ && ($bounds$$43$$ = this.$_labelObj$.$getDimensions$());
  return $bounds$$43$$;
};
$JSCompiler_prototypeAlias$$.$getLinkStyle$ = function $$JSCompiler_prototypeAlias$$$$getLinkStyle$$() {
  return this.getData().style;
};
$JSCompiler_prototypeAlias$$.$getLinkWidth$ = function $$JSCompiler_prototypeAlias$$$$getLinkWidth$$() {
  return this.getData().width;
};
$JSCompiler_prototypeAlias$$.$getLinkColor$ = function $$JSCompiler_prototypeAlias$$$$getLinkColor$$() {
  return this.getData().color;
};
$JSCompiler_prototypeAlias$$.$getStartConnectorType$ = function $$JSCompiler_prototypeAlias$$$$getStartConnectorType$$() {
  return this.getData().startConnectorType;
};
$JSCompiler_prototypeAlias$$.$getEndConnectorType$ = function $$JSCompiler_prototypeAlias$$$$getEndConnectorType$$() {
  return this.getData().endConnectorType;
};
$JSCompiler_prototypeAlias$$.$getStartConnectorOffset$ = function $$JSCompiler_prototypeAlias$$$$getStartConnectorOffset$$() {
  if (this.$getStartConnectorType$()) {
    var $stroke$$53$$ = this.$getShape$().$getStroke$().clone();
    $stroke$$53$$.$setType$(dvt.$Stroke$.$SOLID$);
    return $DvtDiagramLinkConnectorUtils$$.$GetConnectorOffset$(null, this.$getStartConnectorType$(), null, $stroke$$53$$, this);
  }
  return 0;
};
$JSCompiler_prototypeAlias$$.$getEndConnectorOffset$ = function $$JSCompiler_prototypeAlias$$$$getEndConnectorOffset$$() {
  if (this.$getEndConnectorType$()) {
    var $stroke$$54$$ = this.$getShape$().$getStroke$().clone();
    $stroke$$54$$.$setType$(dvt.$Stroke$.$SOLID$);
    return $DvtDiagramLinkConnectorUtils$$.$GetConnectorOffset$(null, this.$getEndConnectorType$(), null, $stroke$$54$$, this);
  }
  return 0;
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$72$$) {
  var $linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$ = this.getData(), $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$ = this.$_pathCmds$;
  $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$ || ($labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$ = ["M", 0, 0, "L", 0, 0]);
  var $halign$$inline_2811_id$$inline_2800$$ = $linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$.id, $diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$ = $linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$.color, $linkWidth$$inline_2802$$ = $linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$.width, $linkStyle$$inline_2803_strokeType$$inline_2805_style$$inline_4835$$ = $linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$.style;
  this.$_hitDetectionUnderlay$ = this.$CreateUnderlay$("#000000", 0, $linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$._hitDetectionOffset);
  this.$addChild$(this.$_hitDetectionUnderlay$);
  $linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$ = new dvt.$SolidStroke$($diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$, 1, $linkWidth$$inline_2802$$);
  dvt.$Agent$.$isTouchDevice$() && dvt.$Agent$.$isBrowserSafari$() && 1 == dvt.$Agent$.$getDevicePixelRatio$() && $linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$.$setFixedWidth$(!0);
  $linkStyle$$inline_2803_strokeType$$inline_2805_style$$inline_4835$$ = $DvtDiagramLinkUtils$$.$ConvertLinkStyleToStrokeType$($linkStyle$$inline_2803_strokeType$$inline_2805_style$$inline_4835$$);
  $linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$.$setType$($linkStyle$$inline_2803_strokeType$$inline_2805_style$$inline_4835$$, $DvtDiagramLinkUtils$$.$GetStrokeDash$($linkStyle$$inline_2803_strokeType$$inline_2805_style$$inline_4835$$), $DvtDiagramLinkUtils$$.$GetStrokeDashOffset$($linkStyle$$inline_2803_strokeType$$inline_2805_style$$inline_4835$$));
  $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$ = new dvt.$Path$(this.$getCtx$(), $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$, $halign$$inline_2811_id$$inline_2800$$);
  $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$.$setFill$(null);
  $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$.$setStroke$($linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$);
  this.$setShape$($labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$);
  this.$addChild$($labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$);
  $diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$ = this.$_diagram$;
  $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$ = this.getData();
  $halign$$inline_2811_id$$inline_2800$$ = dvt.$Agent$.$isRightToLeft$($diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$.$getCtx$()) ? dvt.$OutputText$.$H_ALIGN_RIGHT$ : dvt.$OutputText$.$H_ALIGN_LEFT$;
  $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$.label && ($linkStyle$$inline_2803_strokeType$$inline_2805_style$$inline_4835$$ = $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$.labelStyle, $linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$ = dvt.$OutputText$.$V_ALIGN_TOP$, $diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$ = new dvt.$OutputText$($diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$.$getCtx$(), 
  $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$.label, 0, 0), $diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$.$setCSSStyle$(new dvt.$CSSStyle$($linkStyle$$inline_2803_strokeType$$inline_2805_style$$inline_4835$$)), $diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$.$setHorizAlignment$($halign$$inline_2811_id$$inline_2800$$), $diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$.$setVertAlignment$($linkData$$inline_2797_stroke$$inline_2804_valign$$inline_4837$$), 
  $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$ = dvt.$CSSStyle$.$toNumber$((new dvt.$CSSStyle$($labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$.labelStyle)).getWidth()), 0 < $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$ && dvt.$TextUtils$.$fitText$($diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$, $labelWidth$$inline_2813_linkData$$inline_2809_points$$inline_2799_shape$$inline_2806$$, 
  Infinity, this) || this.$addChild$($diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$), this.$_labelObj$ = $diagram$$inline_2808_linkColor$$inline_2801_text$$inline_4838$$);
  $container$$72$$.$addChild$(this);
  this.$setAriaRole$("img");
  this.$UpdateAriaLabel$();
  this.$_diagram$.$getEventManager$().$associate$(this, this);
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$26$$) {
  $DvtDiagramLink$$.$superclass$.$setSelected$.call(this, $selected$$26$$);
  $selected$$26$$ ? this.$_showFeedback$(this.$_isShowingHoverEffect$, !0) : this.$_hideFeedback$();
  this.$UpdateAriaLabel$();
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$GetDiagram$().$isSelectionSupported$() && "off" != this.getData().selectable;
};
$JSCompiler_prototypeAlias$$.$_showFeedback$ = function $$JSCompiler_prototypeAlias$$$$_showFeedback$$($bHovered$$1$$, $bSelected$$2$$) {
  if ($bHovered$$1$$) {
    this.$_savedStroke$ || (this.$_savedStroke$ = this.$getShape$().$getStroke$());
    var $color$$30_hoverStroke$$1$$ = this.$getShape$().$getStroke$().clone();
    $color$$30_hoverStroke$$1$$.$setColor$ && $color$$30_hoverStroke$$1$$.$setColor$(this.getData().hoverInnerColor);
    this.$getShape$().$setStroke$($color$$30_hoverStroke$$1$$);
    $JSCompiler_StaticMethods_ReplaceConnectorColor$$(this.$_startConnector$, $color$$30_hoverStroke$$1$$);
    $JSCompiler_StaticMethods_ReplaceConnectorColor$$(this.$_endConnector$, $color$$30_hoverStroke$$1$$);
  } else {
    this.$_savedStroke$ && (this.$getShape$().$setStroke$(this.$_savedStroke$), $JSCompiler_StaticMethods_ReplaceConnectorColor$$(this.$_startConnector$, this.$_savedStroke$), $JSCompiler_StaticMethods_ReplaceConnectorColor$$(this.$_endConnector$, this.$_savedStroke$), this.$_savedStroke$ = null);
  }
  this.$_linkUnderlay$ || (this.$_linkUnderlay$ = $JSCompiler_StaticMethods_CreateFeedbackUnderlay$$(this, "#000000", 1, 0), this.$addChildAt$(this.$_linkUnderlay$, 0));
  var $color$$30_hoverStroke$$1$$ = $bSelected$$2$$ ? this.getData().selectionColor : this.getData().hoverOuterColor, $stroke$$56$$ = this.$_linkUnderlay$.$getStroke$().clone();
  $stroke$$56$$.$setColor$($color$$30_hoverStroke$$1$$);
  $stroke$$56$$.$setWidth$(2 + this.$GetAppliedLinkWidth$());
  $JSCompiler_StaticMethods_ApplyLinkStyle$$(this, $stroke$$56$$, !0);
  this.$_linkUnderlay$.$setStroke$($stroke$$56$$, 2);
};
$JSCompiler_prototypeAlias$$.$_hideFeedback$ = function $$JSCompiler_prototypeAlias$$$$_hideFeedback$$() {
  this.$_savedStroke$ && (this.$getShape$().$setStroke$(this.$_savedStroke$), $JSCompiler_StaticMethods_ReplaceConnectorColor$$(this.$_startConnector$, this.$_savedStroke$), $JSCompiler_StaticMethods_ReplaceConnectorColor$$(this.$_endConnector$, this.$_savedStroke$), this.$_savedStroke$ = null);
  this.$_linkUnderlay$ && (this.removeChild(this.$_linkUnderlay$), this.$_linkUnderlay$.$destroy$ && this.$_linkUnderlay$.$destroy$(), this.$_linkUnderlay$ = null);
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = !0, this.$_showFeedback$(!0, this.$isSelected$()));
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() ? this.$_showFeedback$(!1, !0) : this.$_hideFeedback$();
  this.$_isShowingHoverEffect$ = !1;
};
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $customTooltip$$5_tooltipFunc$$5$$ = this.$GetDiagram$().$getOptions$().tooltip;
  return ($customTooltip$$5_tooltipFunc$$5$$ = $customTooltip$$5_tooltipFunc$$5$$ ? $customTooltip$$5_tooltipFunc$$5$$.renderer : null) ? this.$GetDiagram$().$getCtx$().$getTooltipManager$().$getCustomTooltip$($customTooltip$$5_tooltipFunc$$5$$, this.$getDataContext$()) : this.$getShortDesc$();
};
$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.getData().shortDesc;
};
$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return {id:this.getId(), type:"link", label:this.getData().label};
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$7$$ = [];
  this.$isSelectable$() && $states$$7$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return dvt.$Displayable$.$generateAriaLabel$(this.$getShortDesc$(), $states$$7$$);
};
$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  if (!dvt.$Agent$.$deferAriaCreation$()) {
    var $desc$$16$$ = this.$getAriaLabel$();
    $desc$$16$$ && this.$setAriaProperty$("label", $desc$$16$$);
  }
};
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$249_nodeId$$106$$) {
  if ($event$$249_nodeId$$106$$.keyCode == dvt.KeyboardEvent.$SPACE$ && $event$$249_nodeId$$106$$.ctrlKey) {
    return this;
  }
  if ($event$$249_nodeId$$106$$.keyCode == dvt.KeyboardEvent.$UP_ARROW$ || $event$$249_nodeId$$106$$.keyCode == dvt.KeyboardEvent.$DOWN_ARROW$) {
    var $node$$195$$ = this.$_keyboardNavNode$;
    $node$$195$$ || ($node$$195$$ = this.$GetDiagram$().$getNodeById$($JSCompiler_StaticMethods_getLinkStartId$$(this.$GetDiagram$(), this)));
    var $nextLink$$1$$ = this, $links$$7$$ = this.$GetDiagram$().$getNavigableLinksForNodeId$($node$$195$$.getId()), $keyboardHandler$$3$$ = this.$GetDiagram$().$getEventManager$().$KeyboardHandler$;
    $keyboardHandler$$3$$ && $keyboardHandler$$3$$.$getNextNavigableLink$ && ($nextLink$$1$$ = $keyboardHandler$$3$$.$getNextNavigableLink$($node$$195$$, this, $event$$249_nodeId$$106$$, $links$$7$$));
    $nextLink$$1$$.$_keyboardNavNode$ = $node$$195$$;
    return $nextLink$$1$$;
  }
  return $event$$249_nodeId$$106$$.keyCode == dvt.KeyboardEvent.$RIGHT_ARROW$ || $event$$249_nodeId$$106$$.keyCode == dvt.KeyboardEvent.$LEFT_ARROW$ ? ($event$$249_nodeId$$106$$ = this.$_movingToStart$($event$$249_nodeId$$106$$.keyCode) ? this.$getStartId$() : this.$getEndId$(), this.$GetDiagram$().$getNodeById$($event$$249_nodeId$$106$$)) : $event$$249_nodeId$$106$$.type == dvt.MouseEvent.$CLICK$ ? this : null;
};
$JSCompiler_prototypeAlias$$.$_movingToStart$ = function $$JSCompiler_prototypeAlias$$$$_movingToStart$$($direction$$13$$) {
  var $linkDirectionL2R$$1_start$$34$$ = $JSCompiler_StaticMethods_getLinkStart$$(this), $end$$16$$ = $JSCompiler_StaticMethods_getLinkEnd$$(this), $linkDirectionL2R$$1_start$$34$$ = $linkDirectionL2R$$1_start$$34$$.x < $end$$16$$.x ? !0 : !1;
  return $direction$$13$$ == dvt.KeyboardEvent.$RIGHT_ARROW$ && $linkDirectionL2R$$1_start$$34$$ || $direction$$13$$ == dvt.KeyboardEvent.$LEFT_ARROW$ && !$linkDirectionL2R$$1_start$$34$$ ? !1 : !0;
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  this.$showHoverEffect$();
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !1;
  this.$hideHoverEffect$();
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$isShowingKeyboardFocusEffect$$() {
  return this.$_isShowingKeyboardFocusEffect$;
};
$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.getData().categories ? this.getData().categories : [this.getId()];
};
$JSCompiler_prototypeAlias$$.$isHidden$ = function $$JSCompiler_prototypeAlias$$$$isHidden$$() {
  var $hiddenCategories$$5$$ = this.$GetDiagram$().$getOptions$().hiddenCategories;
  return $hiddenCategories$$5$$ && dvt.$ArrayUtils$.$hasAnyItem$($hiddenCategories$$5$$, this.$getCategories$()) || !this.$GetDiagram$().$getNodeById$(this.$getStartId$()) || !this.$GetDiagram$().$getNodeById$(this.$getEndId$()) ? !0 : !1;
};
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$1$$, $oldLink$$2$$) {
  var $linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$ = $oldLink$$2$$.$getPoints$(), $newPoints$$10_oldMat$$5_oldStroke$$4$$ = this.$getPoints$(), $playable$$17$$ = new dvt.$CustomAnimation$(this.$getCtx$(), null, $animationHandler$$1$$.$getAnimationDuration$());
  dvt.$ArrayUtils$.$equals$($linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$, $newPoints$$10_oldMat$$5_oldStroke$$4$$) || (this.$setPoints$($linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$), $linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$ = dvt.$Animator$.$TYPE_POLYLINE$, 0 < $newPoints$$10_oldMat$$5_oldStroke$$4$$.length && isNaN($newPoints$$10_oldMat$$5_oldStroke$$4$$[0]) && ($linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$ = dvt.$Animator$.$TYPE_PATH$), $playable$$17$$.$_animator$.$addProp$($linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$, 
  this, this.$getPoints$, this.$setPoints$, $newPoints$$10_oldMat$$5_oldStroke$$4$$));
  $oldLink$$2$$.$_labelObj$ && this.$_labelObj$ && ($newPoints$$10_oldMat$$5_oldStroke$$4$$ = $oldLink$$2$$.$_labelObj$.$getMatrix$(), $linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$ = this.$_labelObj$.$getMatrix$(), $newPoints$$10_oldMat$$5_oldStroke$$4$$.$equals$($linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$) || (this.$_labelObj$.$setMatrix$($newPoints$$10_oldMat$$5_oldStroke$$4$$), $playable$$17$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, this.$_labelObj$, this.$_labelObj$.$getMatrix$, 
  this.$_labelObj$.$setMatrix$, $linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$)));
  $oldLink$$2$$.$getShape$() && this.$getShape$() && ($newPoints$$10_oldMat$$5_oldStroke$$4$$ = $oldLink$$2$$.$getShape$().$getStroke$(), $linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$ = this.$getShape$().$getStroke$(), $newPoints$$10_oldMat$$5_oldStroke$$4$$ && $linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$ && $newPoints$$10_oldMat$$5_oldStroke$$4$$ instanceof dvt.$SolidStroke$ && $linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$ instanceof dvt.$SolidStroke$ && ($newPoints$$10_oldMat$$5_oldStroke$$4$$.$getColor$() != 
  $linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$.$getColor$() || $newPoints$$10_oldMat$$5_oldStroke$$4$$.getWidth() != $linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$.getWidth()) && (this.$getShape$().$setStroke$($newPoints$$10_oldMat$$5_oldStroke$$4$$), $playable$$17$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_STROKE$, this.$getShape$(), this.$getShape$().$getStroke$, this.$getShape$().$setStroke$, $linkAnimType$$2_newMat$$6_newStroke$$4_oldPoints$$10$$)));
  $animationHandler$$1$$.add($playable$$17$$, 1);
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$2$$) {
  this.$GetDiagram$().$_linksPane$.$addChild$(this);
  var $thisRef$$29$$ = this, $playable$$18$$ = new dvt.$AnimFadeOut$(this.$getCtx$(), this, $animationHandler$$2$$.$getAnimationDuration$());
  dvt.$Playable$.$appendOnEnd$($playable$$18$$, function() {
    $thisRef$$29$$.getParent().removeChild($thisRef$$29$$);
    $thisRef$$29$$.$destroy$();
  });
  $animationHandler$$2$$.add($playable$$18$$, 0);
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$3$$) {
  this.$setAlpha$(0);
  $animationHandler$$3$$.add(new dvt.$AnimFadeIn$(this.$getCtx$(), this, $animationHandler$$3$$.$getAnimationDuration$()), 2);
};
$JSCompiler_prototypeAlias$$.$getLayoutAttributes$ = function $$JSCompiler_prototypeAlias$$$$getLayoutAttributes$$() {
  return this.getData();
};
$JSCompiler_prototypeAlias$$.$setLabelAlignments$ = function $$JSCompiler_prototypeAlias$$$$setLabelAlignments$$($halign$$7$$, $valign$$5$$) {
  $halign$$7$$ && ($halign$$7$$ == dvt.$OutputText$.$H_ALIGN_LEFT$ ? this.$_labelObj$.$alignLeft$() : $halign$$7$$ == dvt.$OutputText$.$H_ALIGN_CENTER$ ? this.$_labelObj$.$alignCenter$() : $halign$$7$$ == dvt.$OutputText$.$H_ALIGN_RIGHT$ && this.$_labelObj$.$alignRight$());
  $valign$$5$$ && ($valign$$5$$ == dvt.$OutputText$.$V_ALIGN_TOP$ ? this.$_labelObj$.$alignTop$() : $valign$$5$$ == dvt.$OutputText$.$V_ALIGN_MIDDLE$ ? this.$_labelObj$.$alignMiddle$() : $valign$$5$$ == dvt.$OutputText$.$V_ALIGN_BOTTOM$ ? this.$_labelObj$.$alignBottom$() : "baseline" == $valign$$5$$ && this.$_labelObj$.$alignAuto$());
};
function $DvtDiagramNode$$($context$$165$$, $diagram$$99$$, $nodeData$$21$$) {
  this.Init($context$$165$$, $diagram$$99$$, $nodeData$$21$$);
}
dvt.$Obj$.$createSubclass$($DvtDiagramNode$$, $DvtBaseDiagramNode$$, "DvtDiagramNode");
$JSCompiler_prototypeAlias$$ = $DvtDiagramNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$166$$, $diagram$$101$$, $data$$63$$) {
  $DvtDiagramNode$$.$superclass$.Init.call(this, $context$$166$$, $data$$63$$.id, $diagram$$101$$);
  this.$_data$ = $data$$63$$;
  this.$_diagram$.$isSelectionSupported$() && this.setCursor("pointer");
};
$JSCompiler_prototypeAlias$$.getData = function $$JSCompiler_prototypeAlias$$$getData$() {
  return this.$_data$;
};
$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id;
};
$JSCompiler_prototypeAlias$$.$getContentBounds$ = function $$JSCompiler_prototypeAlias$$$$getContentBounds$$() {
  return this.$_contentDims$;
};
$JSCompiler_prototypeAlias$$.$getLabelBounds$ = function $$JSCompiler_prototypeAlias$$$$getLabelBounds$$() {
  var $bounds$$44$$ = null;
  this.$_labelObj$ && ($bounds$$44$$ = this.$_labelDims$ ? this.$_labelDims$ : this.$_labelObj$.$getDimensions$());
  return $bounds$$44$$;
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$27$$) {
  var $prevState$$ = this.$_getState$();
  $DvtDiagramNode$$.$superclass$.$setSelected$.call(this, $selected$$27$$);
  this.$_diagram$.$getOptions$().selectionRenderer ? $JSCompiler_StaticMethods__applyCustomNodeContent$$(this, this.$_diagram$.$getOptions$().selectionRenderer, this.$_getState$(), $prevState$$) : this.$processDefaultSelectionEffect$($selected$$27$$);
  this.$UpdateAriaLabel$();
};
$JSCompiler_prototypeAlias$$.$processDefaultSelectionEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultSelectionEffect$$($selected$$28$$) {
  this.$getSelectionShape$() && this.$getSelectionShape$().$setSelected$($selected$$28$$);
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$GetDiagram$().$isSelectionSupported$() && "off" != this.getData().selectable;
};
$JSCompiler_prototypeAlias$$.$GetIcon$ = function $$JSCompiler_prototypeAlias$$$$GetIcon$$() {
  return this.$_shape$;
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$75_dims$$inline_2848$$) {
  if (this.$_diagram$.$getOptions$().renderer) {
    $JSCompiler_StaticMethods__applyCustomNodeContent$$(this, this.$_diagram$.$getOptions$().renderer, this.$_getState$(), null);
  } else {
    var $bbox$$inline_2849_nodeData$$22$$ = this.getData(), $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$ = this.$_diagram$, $backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$ = new dvt.$CSSStyle$($bbox$$inline_2849_nodeData$$22$$.backgroundStyle);
    if (!$backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$.$isEmpty$()) {
      var $iconHeight$$inline_2835_iconWidth$$inline_4845_width$$inline_2822$$ = dvt.$CSSStyle$.$toNumber$($backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$.$getStyle$(dvt.$CSSStyle$.$WIDTH$)), $height$$inline_2823_iconBorderRadius$$inline_2837_iconHeight$$inline_4846$$ = dvt.$CSSStyle$.$toNumber$($backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$.$getStyle$(dvt.$CSSStyle$.$HEIGHT$)), $diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$ = 
      $backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$), $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$ = $backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$.$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$), $backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$ = dvt.$CSSStyle$.$toNumber$($backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$.$getStyle$(dvt.$CSSStyle$.$BORDER_WIDTH$)), 
      $backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$ = dvt.$CSSStyle$.$toNumber$($backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$.$getStyle$(dvt.$CSSStyle$.$BORDER_RADIUS$)), $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$ = new dvt.Rect($backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$.$getCtx$(), 
      0, 0, $iconHeight$$inline_2835_iconWidth$$inline_4845_width$$inline_2822$$, $height$$inline_2823_iconBorderRadius$$inline_2837_iconHeight$$inline_4846$$);
      $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$.$setSolidFill$($diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$);
      $backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$ && ($backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$.$setRx$($backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$), $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$.$setRy$($backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$));
      $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$ && $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$.$setStroke$(new dvt.$SolidStroke$($borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$, 1, $backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$));
      this.$addChild$($backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$);
      this.$setSelectionShape$($backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$);
      this.$_background$ = $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$;
    }
    $diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$ = this.$_diagram$;
    if ($borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$ = $bbox$$inline_2849_nodeData$$22$$.icon) {
      $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$ = $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.width;
      $iconHeight$$inline_2835_iconWidth$$inline_4845_width$$inline_2822$$ = $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.height;
      $backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$ = $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.color;
      $height$$inline_2823_iconBorderRadius$$inline_2837_iconHeight$$inline_4846$$ = $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.borderRadius;
      $diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$ = $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.source ? new dvt.$ImageMarker$($diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$.$getCtx$(), $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$ / 
      2, $iconHeight$$inline_2835_iconWidth$$inline_4845_width$$inline_2822$$ / 2, $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$, $iconHeight$$inline_2835_iconWidth$$inline_4845_width$$inline_2822$$, $height$$inline_2823_iconBorderRadius$$inline_2837_iconHeight$$inline_4846$$, $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.source, $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.sourceSelected, 
      $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.sourceHover, $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.sourceHoverSelected) : new dvt.$SimpleMarker$($diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$.$getCtx$(), $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.shape, dvt.$CSSStyle$.$SKIN_ALTA$, $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$ / 
      2, $iconHeight$$inline_2835_iconWidth$$inline_4845_width$$inline_2822$$ / 2, $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$, $iconHeight$$inline_2835_iconWidth$$inline_4845_width$$inline_2822$$, $height$$inline_2823_iconBorderRadius$$inline_2837_iconHeight$$inline_4846$$);
      "none" != $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.fillPattern ? $diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$.$setFill$(new dvt.$PatternFill$($borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.fillPattern, $backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$, $backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$)) : 
      $diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$.$setSolidFill$($backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$);
      $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.borderColor && $diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$.$setStroke$(new dvt.$SolidStroke$($borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.borderColor, $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.borderWidth));
      this.$addChild$($diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$);
      this.$_shape$ = $diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$;
      if (this.$_background$) {
        var $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$ = $bbox$$inline_2849_nodeData$$22$$.icon, $backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$ = this.$_background$.getWidth(), $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$ = this.$_background$.getHeight(), $iconHeight$$inline_2835_iconWidth$$inline_4845_width$$inline_2822$$ = 
        $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.width, $height$$inline_2823_iconBorderRadius$$inline_2837_iconHeight$$inline_4846$$ = $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.height, $backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$ = .5 * ($backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$ - $iconHeight$$inline_2835_iconWidth$$inline_4845_width$$inline_2822$$), 
        $positionY$$inline_4848$$ = .5 * ($backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$ - $height$$inline_2823_iconBorderRadius$$inline_2837_iconHeight$$inline_4846$$);
        if (void 0 !== $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.positionX) {
          $backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$ = parseFloat($borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.positionX), dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) && ($backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$ = $backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$ - $backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$ - 
          $iconHeight$$inline_2835_iconWidth$$inline_4845_width$$inline_2822$$);
        } else {
          var $resolvedHalign$$inline_4849$$ = $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.halign;
          "start" == $resolvedHalign$$inline_4849$$ ? $resolvedHalign$$inline_4849$$ = dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? "right" : "left" : "end" == $resolvedHalign$$inline_4849$$ && ($resolvedHalign$$inline_4849$$ = dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? "left" : "right");
          $backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$ = "left" == $resolvedHalign$$inline_4849$$ ? 0 : "right" == $resolvedHalign$$inline_4849$$ ? $backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$ - $iconHeight$$inline_2835_iconWidth$$inline_4845_width$$inline_2822$$ : $backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$;
        }
        void 0 !== $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.positionY ? $positionY$$inline_4848$$ = parseFloat($borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.positionY) : "top" == $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.valign ? $positionY$$inline_4848$$ = 0 : "bottom" == $borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$.valign && 
        ($positionY$$inline_4848$$ = $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$ - $height$$inline_2823_iconBorderRadius$$inline_2837_iconHeight$$inline_4846$$);
        this.$_shape$.$setTranslate$($backgroundStyle$$inline_2821_borderRadius$$inline_2827_positionX$$inline_4847$$, $positionY$$inline_4848$$);
      }
      this.$_background$ || this.$setSelectionShape$($diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$);
    }
    $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$ = this.$_diagram$;
    $diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$ = dvt.$Agent$.$isRightToLeft$($backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$.$getCtx$()) ? dvt.$OutputText$.$H_ALIGN_RIGHT$ : dvt.$OutputText$.$H_ALIGN_LEFT$;
    $bbox$$inline_2849_nodeData$$22$$.label && ($borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$ = $bbox$$inline_2849_nodeData$$22$$.labelStyle, $backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$ = dvt.$OutputText$.$V_ALIGN_TOP$, $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$ = new dvt.$OutputText$($backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$.$getCtx$(), 
    $bbox$$inline_2849_nodeData$$22$$.label, 0, 0), $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$.$setCSSStyle$(new dvt.$CSSStyle$($borderColor$$inline_2825_icon$$inline_2833_iconData$$inline_4842_style$$inline_4853$$)), $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$.$setHorizAlignment$($diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$), 
    $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$.$setVertAlignment$($backgroundWidth$$inline_4843_borderWidth$$inline_2826_iconColor$$inline_2836_valign$$inline_4855$$), $diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$ = dvt.$CSSStyle$.$toNumber$((new dvt.$CSSStyle$($bbox$$inline_2849_nodeData$$22$$.labelStyle)).getWidth()), 0 < $diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$ && 
    dvt.$TextUtils$.$fitText$($backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$, $diagram$$inline_2830_fillColor$$inline_2824_halign$$inline_2843_iconMarker$$inline_2838_labelWidth$$inline_2845$$, Infinity, this) || this.$addChild$($backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$), this.$_labelObj$ = $backgroundHeight$$inline_4844_backgroundRect$$inline_2828_diagram$$inline_2818_diagram$$inline_2840_iconWidth$$inline_2834_text$$inline_4856$$);
    $DvtDiagramNode$_addHoverSelectionStrokes$$(this.$getSelectionShape$(), $bbox$$inline_2849_nodeData$$22$$);
  }
  $container$$75_dims$$inline_2848$$.$addChild$(this);
  $container$$75_dims$$inline_2848$$ = null;
  this.$_customNodeContent$ ? ($bbox$$inline_2849_nodeData$$22$$ = this.$getDimensions$()) && ($container$$75_dims$$inline_2848$$ = new dvt.$Rectangle$($bbox$$inline_2849_nodeData$$22$$.x, $bbox$$inline_2849_nodeData$$22$$.y, $bbox$$inline_2849_nodeData$$22$$.$w$ - $bbox$$inline_2849_nodeData$$22$$.x, $bbox$$inline_2849_nodeData$$22$$.$h$ - $bbox$$inline_2849_nodeData$$22$$.y)) : ($container$$75_dims$$inline_2848$$ = this.$_background$ ? this.$_background$.$GetDimensionsWithStroke$(this) : null) && 
  this.$_shape$ ? $container$$75_dims$$inline_2848$$ = $container$$75_dims$$inline_2848$$.$getUnion$(this.$_shape$.$GetDimensionsWithStroke$(this)) : !$container$$75_dims$$inline_2848$$ && this.$_shape$ && ($container$$75_dims$$inline_2848$$ = this.$_shape$.$GetDimensionsWithStroke$(this));
  this.$_contentDims$ = $container$$75_dims$$inline_2848$$;
  this.$setAriaRole$("img");
  this.$UpdateAriaLabel$();
  this.$_diagram$.$getEventManager$().$associate$(this, this);
};
function $JSCompiler_StaticMethods__applyCustomNodeContent$$($JSCompiler_StaticMethods__applyCustomNodeContent$self$$, $nodeContent$$1_renderer$$, $context$$167_state$$28$$, $prevState$$1$$) {
  var $contextHandler$$ = $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_diagram$.$getOptions$()._contextHandler;
  if ($contextHandler$$) {
    var $nodeData$$23$$ = $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.getData();
    $context$$167_state$$28$$ = $contextHandler$$($JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$getElem$(), $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$, $nodeData$$23$$, $context$$167_state$$28$$, $prevState$$1$$);
    $nodeContent$$1_renderer$$ = $nodeContent$$1_renderer$$($context$$167_state$$28$$);
    $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ && $nodeContent$$1_renderer$$ != $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ && ($JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$.namespaceURI === dvt.$ToolkitUtils$.$SVG_NS$ ? $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$getContainerElem$().removeChild($JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$) : $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.removeChild($nodeContent$$1_renderer$$), 
    $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ = null);
    $nodeContent$$1_renderer$$ && $nodeContent$$1_renderer$$.namespaceURI === dvt.$ToolkitUtils$.$SVG_NS$ ? $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ || (dvt.$ToolkitUtils$.$appendChildElem$($JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$getContainerElem$(), $nodeContent$$1_renderer$$), $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ = $nodeContent$$1_renderer$$) : $nodeContent$$1_renderer$$ instanceof dvt.$BaseComponent$ ? 
    $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ || ($JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$addChild$($nodeContent$$1_renderer$$), $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ = $nodeContent$$1_renderer$$) : $nodeContent$$1_renderer$$ && $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_diagram$.$Log$("dvt.Diagram: could not add custom node content for the node " + $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.getId() + 
    $nodeContent$$1_renderer$$, 1);
  } else {
    $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_diagram$.$Log$("dvt.Diagram: could not add custom node content - context handler is undefined", 1);
  }
}
function $DvtDiagramNode$_addHoverSelectionStrokes$$($selectionShape$$, $nodeData$$28$$) {
  var $hoverInnerColor_shis$$1$$ = $nodeData$$28$$.hoverInnerColor, $hos$$1_hoverOuterColor$$ = $nodeData$$28$$.hoverOuterColor, $selectionColor_shos$$1$$ = $nodeData$$28$$.selectionColor, $his$$1$$ = new dvt.$SolidStroke$($hoverInnerColor_shis$$1$$, 1, 4);
  $his$$1$$.$setFixedWidth$(!0);
  $hos$$1_hoverOuterColor$$ = new dvt.$SolidStroke$($hos$$1_hoverOuterColor$$, 1, 8);
  $hos$$1_hoverOuterColor$$.$setFixedWidth$(!0);
  var $sis$$1$$ = new dvt.$SolidStroke$($selectionColor_shos$$1$$, 1, 2);
  $sis$$1$$.$setFixedWidth$(!0);
  var $sos$$1$$ = new dvt.$SolidStroke$($selectionColor_shos$$1$$, 1, 4);
  $sos$$1$$.$setFixedWidth$(!0);
  $hoverInnerColor_shis$$1$$ = new dvt.$SolidStroke$($hoverInnerColor_shis$$1$$, 1, 4);
  $hoverInnerColor_shis$$1$$.$setFixedWidth$(!0);
  $selectionColor_shos$$1$$ = new dvt.$SolidStroke$($selectionColor_shos$$1$$, 1, 8);
  $selectionColor_shos$$1$$.$setFixedWidth$(!0);
  $selectionShape$$.$setHoverStroke$($his$$1$$, $hos$$1_hoverOuterColor$$).$setSelectedStroke$($sis$$1$$, $sos$$1$$).$setSelectedHoverStroke$($hoverInnerColor_shis$$1$$, $selectionColor_shos$$1$$);
}
$JSCompiler_prototypeAlias$$.$setSelectionShape$ = function $$JSCompiler_prototypeAlias$$$$setSelectionShape$$($selectionShape$$1$$) {
  this.$_selectionShape$ = $selectionShape$$1$$;
};
$JSCompiler_prototypeAlias$$.$getSelectionShape$ = function $$JSCompiler_prototypeAlias$$$$getSelectionShape$$() {
  if (!this.$_selectionShape$ && this.$_contentDims$) {
    var $selectionShape$$2$$ = new dvt.Rect(this.$_diagram$.$getCtx$(), this.$_contentDims$.x, this.$_contentDims$.y, this.$_contentDims$.$w$, this.$_contentDims$.$h$);
    $selectionShape$$2$$.$setInvisibleFill$();
    this.$setSelectionShape$($selectionShape$$2$$);
    this.$addChildAt$($selectionShape$$2$$, 0);
    $DvtDiagramNode$_addHoverSelectionStrokes$$($selectionShape$$2$$, this.getData());
    this.$_selectionShape$ = $selectionShape$$2$$;
  }
  return this.$_selectionShape$;
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  var $prevState$$2$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = !0;
  this.$_diagram$.$getOptions$().hoverRenderer ? $JSCompiler_StaticMethods__applyCustomNodeContent$$(this, this.$_diagram$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$2$$) : this.$processDefaultHoverEffect$(!0);
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  var $prevState$$3$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = !1;
  this.$_diagram$.$getOptions$().hoverRenderer ? $JSCompiler_StaticMethods__applyCustomNodeContent$$(this, this.$_diagram$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$3$$) : this.$processDefaultHoverEffect$(!1);
};
$JSCompiler_prototypeAlias$$.$processDefaultHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultHoverEffect$$($hovered$$1$$) {
  this.$getSelectionShape$() && ($hovered$$1$$ ? this.$getSelectionShape$().$showHoverEffect$() : this.$getSelectionShape$().$hideHoverEffect$());
};
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $customTooltip$$6_tooltipFunc$$6$$ = this.$GetDiagram$().$getOptions$().tooltip;
  return ($customTooltip$$6_tooltipFunc$$6$$ = $customTooltip$$6_tooltipFunc$$6$$ ? $customTooltip$$6_tooltipFunc$$6$$.renderer : null) ? this.$GetDiagram$().$getCtx$().$getTooltipManager$().$getCustomTooltip$($customTooltip$$6_tooltipFunc$$6$$, this.$getDataContext$()) : this.$getShortDesc$();
};
$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.getData().shortDesc;
};
$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return {id:this.getId(), type:"node", label:this.getData().label};
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$8$$ = [];
  this.$isSelectable$() && $states$$8$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return dvt.$Displayable$.$generateAriaLabel$(this.$getShortDesc$(), $states$$8$$);
};
$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  if (!dvt.$Agent$.$deferAriaCreation$()) {
    var $desc$$17$$ = this.$getAriaLabel$();
    $desc$$17$$ && this.$setAriaProperty$("label", $desc$$17$$);
  }
};
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$250$$) {
  var $arNodes$$15_next$$5$$ = null;
  if ($event$$250$$.keyCode == dvt.KeyboardEvent.$SPACE$ && $event$$250$$.ctrlKey) {
    $arNodes$$15_next$$5$$ = this;
  } else {
    if (($event$$250$$.keyCode == dvt.KeyboardEvent.$OPEN_ANGLED_BRACKET$ || dvt.KeyboardEvent.$CLOSE_ANGLED_BRACKET$) && $event$$250$$.altKey) {
      var $adjLinks$$1$$ = this.$GetDiagram$().$getNavigableLinksForNodeId$(this.getId()), $keyboardHandler$$4$$ = this.$GetDiagram$().$getEventManager$().$KeyboardHandler$;
      $keyboardHandler$$4$$ && $keyboardHandler$$4$$.$getFirstNavigableLink$ && ($arNodes$$15_next$$5$$ = $keyboardHandler$$4$$.$getFirstNavigableLink$(this, $event$$250$$, $adjLinks$$1$$));
      $arNodes$$15_next$$5$$ ? $arNodes$$15_next$$5$$.$_keyboardNavNode$ = this : $arNodes$$15_next$$5$$ = this;
    } else {
      $event$$250$$.type == dvt.MouseEvent.$CLICK$ ? $arNodes$$15_next$$5$$ = this : ($arNodes$$15_next$$5$$ = $JSCompiler_StaticMethods_GetAllNodeObjects$$(this.$GetDiagram$()), $arNodes$$15_next$$5$$ = dvt.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $event$$250$$, $arNodes$$15_next$$5$$));
    }
  }
  return $arNodes$$15_next$$5$$;
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  var $prevState$$4$$ = this.$_getState$();
  this.$_isShowingKeyboardFocusEffect$ = !0;
  this.$_diagram$.$getOptions$().focusRenderer ? $JSCompiler_StaticMethods__applyCustomNodeContent$$(this, this.$_diagram$.$getOptions$().focusRenderer, this.$_getState$(), $prevState$$4$$) : this.$processDefaultFocusEffect$(!0);
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$isShowingKeyboardFocusEffect$() && (this.$_getState$(), this.$_isShowingKeyboardFocusEffect$ = !1, this.$_diagram$.$getOptions$().focusRenderer ? $JSCompiler_StaticMethods__applyCustomNodeContent$$(this, this.$_diagram$.$getOptions$().focusRenderer, this.getData(), this.$_getState$()) : this.$processDefaultFocusEffect$(!1));
};
$JSCompiler_prototypeAlias$$.$processDefaultFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultFocusEffect$$($focused$$2$$) {
  this.$processDefaultHoverEffect$($focused$$2$$);
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$isShowingKeyboardFocusEffect$$() {
  return this.$_isShowingKeyboardFocusEffect$;
};
$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.getData().categories ? this.getData().categories : [this.getId()];
};
$JSCompiler_prototypeAlias$$.$isHidden$ = function $$JSCompiler_prototypeAlias$$$$isHidden$$() {
  var $hiddenCategories$$6$$ = this.$GetDiagram$().$getOptions$().hiddenCategories;
  return $hiddenCategories$$6$$ && dvt.$ArrayUtils$.$hasAnyItem$($hiddenCategories$$6$$, this.$getCategories$()) ? !0 : !1;
};
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$4$$, $oldNode$$9$$) {
  var $playable$$19$$ = new dvt.$CustomAnimation$(this.$getCtx$(), null, $animationHandler$$4$$.$getAnimationDuration$()), $oldMat$$6_oldTx$$3$$ = $oldNode$$9$$.$getTranslateX$(), $newMat$$7_oldTy$$3$$ = $oldNode$$9$$.$getTranslateY$(), $newTx$$4$$ = this.$getTranslateX$(), $newTy$$4$$ = this.$getTranslateY$();
  $oldMat$$6_oldTx$$3$$ != $newTx$$4$$ && (this.$setTranslateX$($oldMat$$6_oldTx$$3$$), $playable$$19$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getTranslateX$, this.$setTranslateX$, $newTx$$4$$));
  $newMat$$7_oldTy$$3$$ != $newTy$$4$$ && (this.$setTranslateY$($newMat$$7_oldTy$$3$$), $playable$$19$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getTranslateY$, this.$setTranslateY$, $newTy$$4$$));
  $oldNode$$9$$.$_shape$ && this.$_shape$ && ($playable$$19$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_RECTANGLE$, this.$_shape$, this.$_shape$.$getCenterDimensions$, this.$_shape$.$setCenterDimensions$, this.$_shape$.$getCenterDimensions$()), this.$_shape$.$setCenterDimensions$($oldNode$$9$$.$_shape$.$getCenterDimensions$()));
  $oldNode$$9$$.$_labelObj$ && this.$_labelObj$ && ($oldMat$$6_oldTx$$3$$ = $oldNode$$9$$.$_labelObj$.$getMatrix$(), $newMat$$7_oldTy$$3$$ = this.$_labelObj$.$getMatrix$(), $oldMat$$6_oldTx$$3$$.$equals$($newMat$$7_oldTy$$3$$) || (this.$_labelObj$.$setMatrix$($oldMat$$6_oldTx$$3$$), $playable$$19$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, this.$_labelObj$, this.$_labelObj$.$getMatrix$, this.$_labelObj$.$setMatrix$, $newMat$$7_oldTy$$3$$)));
  $DvtDiagramNode$_animateFill$$($playable$$19$$, $oldNode$$9$$.$_background$, this.$_background$);
  $DvtDiagramNode$_animateFill$$($playable$$19$$, $oldNode$$9$$.$_shape$, this.$_shape$);
  $animationHandler$$4$$.add($playable$$19$$, 1);
};
function $DvtDiagramNode$_animateFill$$($playable$$20$$, $oldDisplayable$$, $newDisplayable$$) {
  $oldDisplayable$$ && $newDisplayable$$ && ($playable$$20$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_FILL$, $newDisplayable$$, $newDisplayable$$.$getFill$, $newDisplayable$$.$setFill$, $newDisplayable$$.$getFill$()), $newDisplayable$$.$setFill$($oldDisplayable$$.$getFill$()));
}
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$5$$) {
  this.$GetDiagram$().$_nodesPane$.$addChild$(this);
  var $thisRef$$30$$ = this, $playable$$21$$ = new dvt.$AnimFadeOut$(this.$getCtx$(), this, $animationHandler$$5$$.$getAnimationDuration$());
  dvt.$Playable$.$appendOnEnd$($playable$$21$$, function() {
    $thisRef$$30$$.getParent().removeChild($thisRef$$30$$);
    $thisRef$$30$$.$destroy$();
  });
  $animationHandler$$5$$.add($playable$$21$$, 0);
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$6$$) {
  this.$setAlpha$(0);
  $animationHandler$$6$$.add(new dvt.$AnimFadeIn$(this.$getCtx$(), this, $animationHandler$$6$$.$getAnimationDuration$()), 2);
};
$JSCompiler_prototypeAlias$$.$getLayoutAttributes$ = function $$JSCompiler_prototypeAlias$$$$getLayoutAttributes$$() {
  return this.getData();
};
$JSCompiler_prototypeAlias$$.$_getState$ = function $$JSCompiler_prototypeAlias$$$$_getState$$($zoom$$10$$) {
  return {hovered:this.$_isShowingHoverEffect$, selected:this.$isSelected$(), focused:this.$_isShowingKeyboardFocusEffect$, zoom:$zoom$$10$$ ? $zoom$$10$$ : this.$GetDiagram$().$_panZoomCanvas$.$getZoom$()};
};
$JSCompiler_prototypeAlias$$.$setLabelAlignments$ = function $$JSCompiler_prototypeAlias$$$$setLabelAlignments$$($halign$$10$$, $valign$$7$$) {
  $halign$$10$$ && ($halign$$10$$ == dvt.$OutputText$.$H_ALIGN_LEFT$ ? this.$_labelObj$.$alignLeft$() : $halign$$10$$ == dvt.$OutputText$.$H_ALIGN_CENTER$ ? this.$_labelObj$.$alignCenter$() : $halign$$10$$ == dvt.$OutputText$.$H_ALIGN_RIGHT$ && this.$_labelObj$.$alignRight$());
  $valign$$7$$ && ($valign$$7$$ == dvt.$OutputText$.$V_ALIGN_TOP$ ? this.$_labelObj$.$alignTop$() : $valign$$7$$ == dvt.$OutputText$.$V_ALIGN_MIDDLE$ ? this.$_labelObj$.$alignMiddle$() : $valign$$7$$ == dvt.$OutputText$.$V_ALIGN_BOTTOM$ ? this.$_labelObj$.$alignBottom$() : "baseline" == $valign$$7$$ && this.$_labelObj$.$alignAuto$());
};
function $DvtDiagramAutomation$$($dvtComponent$$6$$) {
  this.Init($dvtComponent$$6$$);
}
$goog$exportPath_$$("DvtDiagramAutomation", $DvtDiagramAutomation$$);
dvt.$Obj$.$createSubclass$($DvtDiagramAutomation$$, dvt.$Automation$, "DvtDiagramAutomation");
$DvtDiagramAutomation$$.prototype.Init = function $$DvtDiagramAutomation$$$$Init$($dvtComponent$$7$$) {
  this.$_diagram$ = $dvtComponent$$7$$;
};
$DvtDiagramAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtDiagramAutomation$$$$$GetSubIdForDomElement$$($displayable$$27_logicalObj$$6$$) {
  return ($displayable$$27_logicalObj$$6$$ = this.$_diagram$.$getEventManager$().$GetLogicalObject$($displayable$$27_logicalObj$$6$$)) && $displayable$$27_logicalObj$$6$$ instanceof $DvtDiagramNode$$ ? "node[" + this.$_diagram$.$GetAllNodes$().indexOf($displayable$$27_logicalObj$$6$$.getId()) + "]" : $displayable$$27_logicalObj$$6$$ && $displayable$$27_logicalObj$$6$$ instanceof $DvtDiagramLink$$ ? "link[" + this.$_diagram$.$GetAllLinks$().indexOf($displayable$$27_logicalObj$$6$$.getId()) + "]" : 
  null;
};
$DvtDiagramAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtDiagramAutomation$$$$$getDomElementForSubId$$($component$$7_subId$$11$$) {
  if ($component$$7_subId$$11$$ == dvt.$Automation$.$TOOLTIP_SUBID$) {
    return this.$GetTooltipElement$(this.$_diagram$);
  }
  var $index$$144_parsedSubId$$1$$ = this.$_parseSubId$($component$$7_subId$$11$$);
  $component$$7_subId$$11$$ = $index$$144_parsedSubId$$1$$.component;
  var $index$$144_parsedSubId$$1$$ = $index$$144_parsedSubId$$1$$.index, $displayable$$28$$ = null;
  "node" == $component$$7_subId$$11$$ ? $displayable$$28$$ = this.$_getNode$($index$$144_parsedSubId$$1$$) : "link" == $component$$7_subId$$11$$ && ($displayable$$28$$ = $JSCompiler_StaticMethods__getLink$$(this, $index$$144_parsedSubId$$1$$));
  return $displayable$$28$$ ? $displayable$$28$$.$getElem$() : null;
};
$DvtDiagramAutomation$$.prototype.getDomElementForSubId = $DvtDiagramAutomation$$.prototype.$getDomElementForSubId$;
$DvtDiagramAutomation$$.prototype.$_parseSubId$ = function $$DvtDiagramAutomation$$$$$_parseSubId$$($subId$$12$$) {
  var $component$$8$$ = $subId$$12$$, $index$$145$$ = -1, $substring$$1$$ = $subId$$12$$.substring(0, $subId$$12$$.indexOf("["));
  $substring$$1$$ && ($component$$8$$ = "node" == $substring$$1$$ || "link" == $substring$$1$$ ? $substring$$1$$ : null, $index$$145$$ = parseInt($subId$$12$$.substring($subId$$12$$.indexOf("[") + 1, $subId$$12$$.indexOf("]"))));
  return {component:$component$$8$$, index:$index$$145$$};
};
$DvtDiagramAutomation$$.prototype.$getNodeCount$ = function $$DvtDiagramAutomation$$$$$getNodeCount$$() {
  return this.$_diagram$.$getNodeCount$();
};
$DvtDiagramAutomation$$.prototype.getNodeCount = $DvtDiagramAutomation$$.prototype.$getNodeCount$;
$DvtDiagramAutomation$$.prototype.$getLinkCount$ = function $$DvtDiagramAutomation$$$$$getLinkCount$$() {
  return this.$_diagram$.$getLinkCount$();
};
$DvtDiagramAutomation$$.prototype.getLinkCount = $DvtDiagramAutomation$$.prototype.$getLinkCount$;
$DvtDiagramAutomation$$.prototype.$getNode$ = function $$DvtDiagramAutomation$$$$$getNode$$($node$$196_nodeIndex$$4$$) {
  if ($node$$196_nodeIndex$$4$$ = this.$_getNode$($node$$196_nodeIndex$$4$$)) {
    var $data$$64$$ = {};
    $data$$64$$.id = $node$$196_nodeIndex$$4$$.getId();
    $data$$64$$.selected = $node$$196_nodeIndex$$4$$.$isSelected$();
    $data$$64$$.tooltip = $node$$196_nodeIndex$$4$$.$getShortDesc$();
    $data$$64$$.label = $node$$196_nodeIndex$$4$$.getData().label;
    $data$$64$$.background = $node$$196_nodeIndex$$4$$.getData().backgroundStyle;
    $data$$64$$.icon = this.$_getMarkerData$($node$$196_nodeIndex$$4$$.$GetIcon$());
    return $data$$64$$;
  }
  return null;
};
$DvtDiagramAutomation$$.prototype.getNode = $DvtDiagramAutomation$$.prototype.$getNode$;
$DvtDiagramAutomation$$.prototype.$getLink$ = function $$DvtDiagramAutomation$$$$$getLink$$($link$$73_linkIndex$$) {
  if ($link$$73_linkIndex$$ = $JSCompiler_StaticMethods__getLink$$(this, $link$$73_linkIndex$$)) {
    var $data$$65$$ = {};
    $data$$65$$.id = $link$$73_linkIndex$$.getId();
    $data$$65$$.selected = $link$$73_linkIndex$$.$isSelected$();
    $data$$65$$.tooltip = $link$$73_linkIndex$$.$getShortDesc$();
    $data$$65$$.label = $link$$73_linkIndex$$.getData().label;
    $data$$65$$.color = $link$$73_linkIndex$$.$getLinkColor$();
    $data$$65$$.width = $link$$73_linkIndex$$.$getLinkWidth$();
    $data$$65$$.style = $link$$73_linkIndex$$.$getLinkStyle$();
    $data$$65$$.startNode = $link$$73_linkIndex$$.$getStartId$();
    $data$$65$$.endNode = $link$$73_linkIndex$$.$getEndId$();
    $data$$65$$.startConnectorType = $link$$73_linkIndex$$.$getStartConnectorType$();
    $data$$65$$.endConnectorType = $link$$73_linkIndex$$.$getEndConnectorType$();
    return $data$$65$$;
  }
  return null;
};
$DvtDiagramAutomation$$.prototype.getLink = $DvtDiagramAutomation$$.prototype.$getLink$;
$DvtDiagramAutomation$$.prototype.$_getMarkerData$ = function $$DvtDiagramAutomation$$$$$_getMarkerData$$($marker$$9$$) {
  if ($marker$$9$$) {
    var $data$$66$$ = {};
    $data$$66$$.shape = $marker$$9$$ instanceof dvt.$SimpleMarker$ ? $marker$$9$$.$getType$() : "none";
    $marker$$9$$.$getFill$() && ($data$$66$$.color = $marker$$9$$.$getFill$().$getColor$());
    return $data$$66$$;
  }
  return null;
};
$DvtDiagramAutomation$$.prototype.$_getNode$ = function $$DvtDiagramAutomation$$$$$_getNode$$($nodeIndex$$5$$) {
  var $nodeIds$$3$$ = this.$_diagram$.$GetAllNodes$();
  return 0 <= $nodeIndex$$5$$ && $nodeIndex$$5$$ < $nodeIds$$3$$.length ? this.$_diagram$.$getNodeById$($nodeIds$$3$$[$nodeIndex$$5$$]) : null;
};
function $JSCompiler_StaticMethods__getLink$$($JSCompiler_StaticMethods__getLink$self$$, $linkIndex$$1$$) {
  var $linkIds$$ = $JSCompiler_StaticMethods__getLink$self$$.$_diagram$.$GetAllLinks$();
  return 0 <= $linkIndex$$1$$ && $linkIndex$$1$$ < $linkIds$$.length ? $JSCompiler_StaticMethods__getLink$self$$.$_diagram$.$getLinkById$($linkIds$$[$linkIndex$$1$$]) : null;
}
;
  return dvt;
});
