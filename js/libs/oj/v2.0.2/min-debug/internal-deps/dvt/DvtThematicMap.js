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

(function($dvt$$11$$) {
  function $DvtThematicMapControlPanel$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  }
  function $DvtThematicMapJsonParser$$($dvt$$11$$) {
    this.Init($dvt$$11$$);
  }
  function $DvtThematicMapEventManager$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  }
  function $DvtThematicMapKeyboardHandler$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$);
  }
  function $DvtMapDataLayer$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  }
  function $DvtMapCustomAreaLayer$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  }
  function $DvtMapAreaLayer$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  }
  function $DvtMapLayer$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  }
  function $DvtMapArea$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$);
  }
  function $DvtMapAreaPeer$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
  }
  function $DvtMapObjPeer$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  }
  function $DvtMapLabel$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$);
  }
  function $DvtThematicMapCategoryWrapper$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$);
  }
  function $DvtCustomDataItem$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  }
  function $DvtDrillablePath$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$);
  }
  function $DvtThematicMapAutomation$$($dvt$$11$$) {
    this.$_tmap$ = $dvt$$11$$;
  }
  function $DvtThematicMapDefaults$$() {
    this.Init({fusion:$DvtThematicMapDefaults$$.DEFAULT, alta:$DvtThematicMapDefaults$$.$SKIN_ALTA$});
  }
  $dvt$$11$$.$AmxThematicMap$ = function $$dvt$$11$$$$AmxThematicMap$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  };
  $dvt$$11$$.$Obj$.$createSubclass$($dvt$$11$$.$AmxThematicMap$, $dvt$$11$$.$Container$);
  $dvt$$11$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$ = 10;
  $dvt$$11$$.$AmxThematicMap$.prototype.Init = function $$dvt$$11$$$$AmxThematicMap$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $dvt$$11$$.$AmxThematicMap$.$superclass$.Init.call(this, $DvtThematicMapControlPanel$$);
    this.$_tmap$ = new $dvt$$11$$.$ThematicMap$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
    this.$_tmapContainer$ = new $dvt$$11$$.$Container$($DvtThematicMapControlPanel$$);
    this.$_tmapContainer$.$addChild$(this.$_tmap$);
    this.$addChild$(this.$_tmapContainer$);
    this.$Defaults$ = new $DvtThematicMapDefaults$$;
  };
  $dvt$$11$$.$AmxThematicMap$.newInstance = function $$dvt$$11$$$$AmxThematicMap$$newInstance$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    return new $dvt$$11$$.$AmxThematicMap$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
  };
  $dvt$$11$$.$AmxThematicMap$.prototype.$render$ = function $$dvt$$11$$$$AmxThematicMap$$$$render$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    this.$Options$ = this.$Defaults$.$calcOptions$($DvtThematicMapControlPanel$$);
    this.$_width$ = $DvtThematicMapJsonParser$$;
    this.$_height$ = $DvtThematicMapEventManager$$;
    $DvtThematicMapJsonParser$$ = new $dvt$$11$$.$Rectangle$(0, 0, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
    this.$_renderLegend$(this, $DvtThematicMapJsonParser$$);
    this.$_tmap$.$render$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$.$w$, $DvtThematicMapJsonParser$$.$h$);
  };
  $dvt$$11$$.$AmxThematicMap$.prototype.$_renderLegend$ = function $$dvt$$11$$$$AmxThematicMap$$$$_renderLegend$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.$_legend$ && ($DvtThematicMapControlPanel$$.removeChild(this.$_legend$), this.$_legend$ = null);
    var $DvtThematicMapEventManager$$ = new $dvt$$11$$.$Rectangle$($dvt$$11$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$, $dvt$$11$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$, $DvtThematicMapJsonParser$$.$w$ - 2 * $dvt$$11$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$, $DvtThematicMapJsonParser$$.$h$ - 2 * $dvt$$11$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$), $DvtThematicMapKeyboardHandler$$ = this.$Options$, $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.legend.rendered, $DvtMapCustomAreaLayer$$ = 
    $DvtThematicMapKeyboardHandler$$.legend.scrolling, $DvtMapAreaLayer$$ = $dvt$$11$$.$JsonUtils$.clone($DvtThematicMapKeyboardHandler$$.legend);
    this.$_addLegendData$(this.$Options$, $DvtMapAreaLayer$$);
    var $DvtMapLayer$$ = $DvtMapAreaLayer$$.sections;
    if ($DvtMapDataLayer$$ && (!$DvtMapLayer$$ || 0 != $DvtMapLayer$$.length) && ($DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.legend.position, delete $DvtMapAreaLayer$$.position, $DvtMapAreaLayer$$.layout.gapRatio = this.$getGapRatio$(), $DvtMapAreaLayer$$.hideAndShowBehavior = "none", $DvtMapAreaLayer$$.rolloverBehavior = "none", $DvtMapAreaLayer$$.scrolling = $DvtThematicMapKeyboardHandler$$.legend.scrolling, $DvtMapLayer$$ = $dvt$$11$$.$Legend$.newInstance(this.$_tmap$.$getCtx$()), $DvtThematicMapControlPanel$$.$addChild$($DvtMapLayer$$), 
    "auto" == $DvtMapDataLayer$$ && "asNeeded" !== $DvtMapCustomAreaLayer$$ ? $DvtMapDataLayer$$ = "bottom" : "auto" == $DvtMapDataLayer$$ && "asNeeded" == $DvtMapCustomAreaLayer$$ && ($DvtMapDataLayer$$ = "end"), $DvtMapCustomAreaLayer$$ = $dvt$$11$$.$Agent$.$isRightToLeft$($DvtThematicMapControlPanel$$.$getCtx$()), "start" == $DvtMapDataLayer$$ ? $DvtMapDataLayer$$ = $DvtMapCustomAreaLayer$$ ? "right" : "left" : "end" == $DvtMapDataLayer$$ && ($DvtMapDataLayer$$ = $DvtMapCustomAreaLayer$$ ? "left" : 
    "right"), $DvtMapAreaLayer$$.orientation = "left" == $DvtMapDataLayer$$ || "right" == $DvtMapDataLayer$$ ? "vertical" : "horizontal", $DvtMapCustomAreaLayer$$ = "top" == $DvtMapDataLayer$$ || "bottom" == $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$ = $DvtMapLayer$$.$getPreferredSize$($DvtMapAreaLayer$$, $DvtMapCustomAreaLayer$$ ? $DvtThematicMapEventManager$$.$w$ : $DvtThematicMapKeyboardHandler$$.layout.legendMaxSize * $DvtThematicMapEventManager$$.$w$, $DvtMapCustomAreaLayer$$ ? $DvtThematicMapKeyboardHandler$$.layout.legendMaxSize * 
    $DvtThematicMapEventManager$$.$h$ : $DvtThematicMapEventManager$$.$h$), 0 < $DvtMapCustomAreaLayer$$.$w$ && 0 < $DvtMapCustomAreaLayer$$.$h$)) {
      switch($DvtMapLayer$$.$render$($DvtMapAreaLayer$$, $DvtMapCustomAreaLayer$$.$w$, $DvtMapCustomAreaLayer$$.$h$), this.$_legend$ = $DvtMapLayer$$, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapDefaults$$.$getGapSize$(this, $DvtThematicMapKeyboardHandler$$.layout.legendGap), $dvt$$11$$.$LayoutUtils$.position($DvtThematicMapEventManager$$, $DvtMapDataLayer$$, $DvtMapLayer$$, $DvtMapCustomAreaLayer$$.$w$, $DvtMapCustomAreaLayer$$.$h$, $DvtThematicMapKeyboardHandler$$), $DvtMapDataLayer$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($DvtMapCustomAreaLayer$$.$h$ + $dvt$$11$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $DvtThematicMapJsonParser$$.$h$ -= $DvtMapCustomAreaLayer$$.$h$ + $dvt$$11$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($DvtMapCustomAreaLayer$$.$w$ + $dvt$$11$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $DvtThematicMapJsonParser$$.$w$ -= $DvtMapCustomAreaLayer$$.$w$ + $dvt$$11$$.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$;
      }
    }
  };
  $dvt$$11$$.$AmxThematicMap$.prototype.$getGapRatio$ = function $$dvt$$11$$$$AmxThematicMap$$$$getGapRatio$$() {
    return null === this.$Options$.layout.gapRatio || isNaN(this.$Options$.layout.gapRatio) ? Math.min(Math.min(this.$_width$ / 400, 1), Math.min(this.$_height$ / 300, 1)) : this.$Options$.layout.gapRatio;
  };
  $dvt$$11$$.$AmxThematicMap$.prototype.$_addLegendData$ = function $$dvt$$11$$$$AmxThematicMap$$$$_addLegendData$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$.title = $dvt$$11$$.legend ? $dvt$$11$$.legend.title : null;
    $DvtThematicMapControlPanel$$.sections = [];
    if ($dvt$$11$$ && $dvt$$11$$.legend && $dvt$$11$$.legend.sections) {
      for (var $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $dvt$$11$$.legend.sections.length;$DvtThematicMapJsonParser$$++) {
        var $DvtThematicMapEventManager$$ = $dvt$$11$$.legend.sections[$DvtThematicMapJsonParser$$];
        $DvtThematicMapEventManager$$ && $DvtThematicMapControlPanel$$.sections.push({title:$DvtThematicMapEventManager$$.title, items:$DvtThematicMapEventManager$$.items, sections:$DvtThematicMapEventManager$$.sections});
      }
    }
    return $DvtThematicMapControlPanel$$;
  };
  $dvt$$11$$.$ThematicMap$ = function $$dvt$$11$$$$ThematicMap$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.Init($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  };
  $dvt$$11$$.$Obj$.$createSubclass$($dvt$$11$$.$ThematicMap$, $dvt$$11$$.$PanZoomComponent$);
  $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_PAN$ = 1;
  $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_ZOOM$ = 2;
  $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOM$ = 3;
  $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_ZOOMTOFIT$ = 4;
  $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOMTOFIT$ = 5;
  $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_ZOOM_ZOOMTOFIT$ = 6;
  $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_ALL$ = 7;
  $dvt$$11$$.$ThematicMap$.$_COLLAPSIBLE_PANEL_OFFSET$ = 5;
  $dvt$$11$$.$ThematicMap$.$_ELEM_RESOURCES_CONTROLPANEL$ = "controlPanelResources";
  $dvt$$11$$.$ThematicMap$.$_ELEM_RESOURCES_LEGEND$ = "legendResources";
  $dvt$$11$$.$ThematicMap$.$_ELEM_RESOURCES_PANEL_DRAWER$ = "panelDrawerResources";
  $dvt$$11$$.$ThematicMap$.$_ELEM_RESOURCES$ = "resources";
  $dvt$$11$$.$ThematicMap$.$DEFAULT_MAX_ZOOM_FACTOR$ = 6;
  $dvt$$11$$.$ThematicMap$.prototype.Init = function $$dvt$$11$$$$ThematicMap$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $dvt$$11$$.$ThematicMap$.$superclass$.Init.call(this, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
    this.$_createHandlers$();
    this.$_layers$ = [];
    this.$_drillAnimFadeOutObjs$ = [];
    this.$_legendData$ = this.$_legendPanel$ = this.$_legend$ = null;
    this.$_bBaseMapChanged$ = !1;
    this.$_drilledRowKeys$ = [];
    this.$_initDrilled$ = {};
    this.$_processingInitDrilled$ = !1;
    this.$_drillDataLayer$ = {};
    this.$_childToParent$ = {};
    this.$_drilled$ = [];
    this.$_areaLayers$ = new $dvt$$11$$.$Container$(this.$getCtx$());
    this.$_dataAreaLayers$ = new $dvt$$11$$.$Container$(this.$getCtx$());
    this.$_dataPointLayers$ = new $dvt$$11$$.$Container$(this.$getCtx$());
    this.$_labelLayers$ = new $dvt$$11$$.$Container$(this.$getCtx$());
    this.$_panning$ = this.$_zooming$ = this.$_initialZooming$ = !1;
    this.$_maxZoomFactor$ = $dvt$$11$$.$ThematicMap$.$DEFAULT_MAX_ZOOM_FACTOR$;
    this.$_isMarkerZoomBehaviorFixed$ = !0;
    this.$_selectedAreas$ = {};
    this.$_bListenersRemoved$ = !1;
    this.$_showPopupBehaviors$ = null;
    this.$setDisplayedControls$($dvt$$11$$.$ControlPanel$.$CONTROLS_ALL$);
    this.$Defaults$ = new $DvtThematicMapDefaults$$;
    this.$EventManager$.$associate$(this, this);
    this.$_bRendered$ = !1;
  };
  $dvt$$11$$.$ThematicMap$.newInstance = function $$dvt$$11$$$$ThematicMap$$newInstance$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    return new $dvt$$11$$.$ThematicMap$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$SetOptions$ = function $$dvt$$11$$$$ThematicMap$$$$SetOptions$$($DvtThematicMapControlPanel$$) {
    $dvt$$11$$.$ThematicMap$.$superclass$.$SetOptions$.call(this, $DvtThematicMapControlPanel$$);
    $dvt$$11$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
    (new $DvtThematicMapJsonParser$$(this)).parse(this.$Options$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setStyleDefaults$ = function $$dvt$$11$$$$ThematicMap$$$$setStyleDefaults$$($dvt$$11$$) {
    this.$_styleDefaults$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getMaxZoomFactor$ = function $$dvt$$11$$$$ThematicMap$$$$getMaxZoomFactor$$() {
    return this.$_zooming$ ? this.$_maxZoomFactor$ : 1;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setMaxZoomFactor$ = function $$dvt$$11$$$$ThematicMap$$$$setMaxZoomFactor$$($dvt$$11$$) {
    this.$_maxZoomFactor$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setMarkerZoomBehavior$ = function $$dvt$$11$$$$ThematicMap$$$$setMarkerZoomBehavior$$($dvt$$11$$) {
    this.$_isMarkerZoomBehaviorFixed$ = "fixed" == $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$addPointLayer$ = function $$dvt$$11$$$$ThematicMap$$$$addPointLayer$$($dvt$$11$$) {
    this.$_layers$.push($dvt$$11$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$addLayer$ = function $$dvt$$11$$$$ThematicMap$$$$addLayer$$($dvt$$11$$) {
    this.$_layers$.push($dvt$$11$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getLayer$ = function $$dvt$$11$$$$ThematicMap$$$$getLayer$$($dvt$$11$$) {
    for (var $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_layers$.length;$DvtThematicMapControlPanel$$++) {
      if (this.$_layers$[$DvtThematicMapControlPanel$$].$LayerName$ == $dvt$$11$$) {
        return this.$_layers$[$DvtThematicMapControlPanel$$];
      }
    }
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setMapName$ = function $$dvt$$11$$$$ThematicMap$$$$setMapName$$($dvt$$11$$) {
    this.$_bBaseMapChanged$ = this.$_mapName$ && this.$_mapName$ != $dvt$$11$$;
    this.$_mapName$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setAnimationOnDisplay$ = function $$dvt$$11$$$$ThematicMap$$$$setAnimationOnDisplay$$($dvt$$11$$) {
    this.$_animationOnDisplay$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setAnimationOnMapChange$ = function $$dvt$$11$$$$ThematicMap$$$$setAnimationOnMapChange$$($dvt$$11$$) {
    this.$_animationOnMapChange$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setAnimationDuration$ = function $$dvt$$11$$$$ThematicMap$$$$setAnimationDuration$$($dvt$$11$$) {
    this.$_animationDuration$ = parseFloat($dvt$$11$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getAnimationDuration$ = function $$dvt$$11$$$$ThematicMap$$$$getAnimationDuration$$() {
    return this.$_animationDuration$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setDisplayTooltips$ = function $$dvt$$11$$$$ThematicMap$$$$setDisplayTooltips$$($dvt$$11$$) {
    this.$_displayTooltips$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setFeaturesOff$ = function $$dvt$$11$$$$ThematicMap$$$$setFeaturesOff$$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$ = parseInt($DvtThematicMapControlPanel$$);
    var $DvtThematicMapJsonParser$$ = this.$_displayedControls$;
    if ($DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_PAN$ || $DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOM$ || $DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOMTOFIT$ || $DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_ALL$) {
      $DvtThematicMapJsonParser$$ &= ~$dvt$$11$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$, this.$setPanning$(!1);
    }
    if ($DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_ZOOM$ || $DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOM$ || $DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_ZOOM_ZOOMTOFIT$ || $DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_ALL$) {
      $DvtThematicMapJsonParser$$ &= ~$dvt$$11$$.$ControlPanel$.$CONTROLS_ZOOM$, this.$setZooming$(!1);
    }
    if ($DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_ZOOMTOFIT$ || $DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOMTOFIT$ || $DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_ZOOM_ZOOMTOFIT$ || $DvtThematicMapControlPanel$$ == $dvt$$11$$.$ThematicMap$.$_FEATURES_OFF_ALL$) {
      $DvtThematicMapJsonParser$$ &= ~$dvt$$11$$.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$;
    }
    this.$setDisplayedControls$($DvtThematicMapJsonParser$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setInitialCenterX$ = function $$dvt$$11$$$$ThematicMap$$$$setInitialCenterX$$($dvt$$11$$) {
    this.$_initialCenterX$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setInitialCenterY$ = function $$dvt$$11$$$$ThematicMap$$$$setInitialCenterY$$($dvt$$11$$) {
    this.$_initialCenterY$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setInitialZoom$ = function $$dvt$$11$$$$ThematicMap$$$$setInitialZoom$$($dvt$$11$$) {
    this.$_initialZoom$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setAnimationOnDrill$ = function $$dvt$$11$$$$ThematicMap$$$$setAnimationOnDrill$$($dvt$$11$$) {
    this.$_animationOnDrill$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setDrillMode$ = function $$dvt$$11$$$$ThematicMap$$$$setDrillMode$$($dvt$$11$$) {
    this.$_drillMode$ = $dvt$$11$$;
    this.$EventManager$.$setDrillMode$($dvt$$11$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setInitialZooming$ = function $$dvt$$11$$$$ThematicMap$$$$setInitialZooming$$($dvt$$11$$) {
    this.$_initialZooming$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$PreRender$ = function $$dvt$$11$$$$ThematicMap$$$$PreRender$$() {
    $dvt$$11$$.$ThematicMap$.$superclass$.$PreRender$.call(this);
    !this.$_isResize$ && this.$_pzcContainer$ && (this.$_layers$ = [], this.$_drilledRowKeys$ = [], this.$_initDrilled$ = {}, this.$_drillDataLayer$ = {}, this.$_childToParent$ = {}, this.$_drilled$ = [], this.removeChild(this.$_legendPanel$), this.$_legendData$ = this.$_legend$ = this.$_legendPanel$ = null, this.$setDisplayedControls$($dvt$$11$$.$ControlPanel$.$CONTROLS_ALL$), this.$_panning$ = this.$_zooming$ = !0, this.$_oldPzc$ = this.$_pzc$, this.$_areaLayers$ = new $dvt$$11$$.$Container$(this.$getCtx$()), 
    this.$_dataAreaLayers$ = new $dvt$$11$$.$Container$(this.$getCtx$()), this.$_dataPointLayers$ = new $dvt$$11$$.$Container$(this.$getCtx$()), this.$_labelLayers$ = new $dvt$$11$$.$Container$(this.$getCtx$()), this.$_showPopupBehaviors$ = null, this.$EventManager$.$removeListeners$(this), this.$_createHandlers$(), this.$_bListenersRemoved$ = !1, this.$EventManager$.$hideTooltip$(), this.$EventManager$.$associate$(this, this));
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_createHandlers$ = function $$dvt$$11$$$$ThematicMap$$$$_createHandlers$$() {
    this.$EventManager$ = new $DvtThematicMapEventManager$$(this.$getCtx$(), this.dispatchEvent, this);
    this.$EventManager$.$addListeners$(this);
    $dvt$$11$$.$Agent$.$isTouchDevice$() ? this.$_keyboardHandler$ = null : (this.$_keyboardHandler$ = new $DvtThematicMapKeyboardHandler$$(this, this.$EventManager$), this.$EventManager$.$setKeyboardHandler$(this.$_keyboardHandler$));
  };
  $dvt$$11$$.$ThematicMap$.prototype.$HandleLegendResize$ = function $$dvt$$11$$$$ThematicMap$$$$HandleLegendResize$$($DvtThematicMapControlPanel$$) {
    $dvt$$11$$.$Agent$.$isRightToLeft$(this.$getCtx$()) || ($DvtThematicMapControlPanel$$ = this.getWidth() - 5 - $DvtThematicMapControlPanel$$.getWidth(), this.$_legendPanel$.$setTranslateX$($DvtThematicMapControlPanel$$));
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_renderLegend$ = function $$dvt$$11$$$$ThematicMap$$$$_renderLegend$$() {
    if (this.$_legendData$) {
      this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
      var $DvtThematicMapControlPanel$$ = "true" == this.$_legendData$.disclosed, $DvtThematicMapJsonParser$$ = "fixed" == this.$_legendData$.display || $dvt$$11$$.$Agent$.$isEnvironmentBatik$();
      if (!$DvtThematicMapJsonParser$$ || $DvtThematicMapControlPanel$$) {
        var $DvtThematicMapEventManager$$ = this.$_legendData$.maxWidth, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapEventManager$$.indexOf("%"), $DvtThematicMapEventManager$$ = -1 != $DvtThematicMapKeyboardHandler$$ ? parseFloat($DvtThematicMapEventManager$$.substring(0, $DvtThematicMapKeyboardHandler$$)) / 100 * this.getWidth() : parseFloat($DvtThematicMapEventManager$$), $DvtThematicMapKeyboardHandler$$ = this.getHeight() - 2 * $dvt$$11$$.$ThematicMap$.$_COLLAPSIBLE_PANEL_OFFSET$;
        this.$_skinName$ == $dvt$$11$$.$CSSStyle$.$SKIN_ALTA$ ? (this.$_legendPanel$ = new $dvt$$11$$.$PanelDrawer$(this.$getCtx$(), null, this, "pd"), this.$_legendPanel$.$addEvtListener$($dvt$$11$$.$PanelDrawerEvent$.$TYPE$, this.$HandleLegendEvent$, !1, this), this.$_legendPanel$.$setMaxWidth$($DvtThematicMapEventManager$$), this.$_legendPanel$.$setMaxHeight$($DvtThematicMapKeyboardHandler$$), this.$_legendPanel$.$setFixed$($DvtThematicMapJsonParser$$), $dvt$$11$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? 
        (this.$_legendPanel$.$setDiscloseDirection$($dvt$$11$$.$PanelDrawer$.$DIR_RIGHT$), this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.getWidth())) : (this.$_legendPanel$ = new $dvt$$11$$.$CollapsiblePanel$(this.$getCtx$(), $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $dvt$$11$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$, this.$getResourcesMap$(), this.$getSubcomponentStyles$(), $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), this.$_legendPanel$.$addEvtListener$($dvt$$11$$.$CollapsiblePanelEvent$.$TYPE$, 
        this.$HandleLegendEvent$, !1, this), this.$_legendPanel$.$addEvtListener$($dvt$$11$$.$ResizeEvent$.$RESIZE_EVENT$, this.$HandleLegendResize$, !1, this), this.$_legendPanel$.$setButtonTooltips$(this.$_legendData$.expandTooltip, this.$_legendData$.collapseTooltip));
        $DvtThematicMapEventManager$$ = this.$_legendData$;
        this.$_legend$ = $dvt$$11$$.$Legend$.newInstance(this.$getCtx$(), this.$processLegendEvent$, this);
        this.$addChild$(this.$_legendPanel$);
        this.$addChild$(this.$_legend$);
        $DvtThematicMapKeyboardHandler$$ = this.$_legend$.$getPreferredSize$($DvtThematicMapEventManager$$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$());
        this.$_legend$.$render$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$.$w$, $DvtThematicMapKeyboardHandler$$.$h$);
        var $DvtMapDataLayer$$;
        if (this.$_skinName$ == $dvt$$11$$.$CSSStyle$.$SKIN_ALTA$) {
          this.$_legendPanel$.$setMaxContainerHeight$(this.$_legend$.$getContentDimensions$().$h$);
          this.removeChild(this.$_legend$);
          var $DvtThematicMapEventManager$$ = new $dvt$$11$$.Image(this.$getCtx$(), this.$getResourcesMap$()[$dvt$$11$$.$PanelDrawer$.$PANEL_LEGEND_ICON_ENA$], 0, 0, $dvt$$11$$.$PanelDrawer$.$IMAGE_SIZE$, $dvt$$11$$.$PanelDrawer$.$IMAGE_SIZE$), $DvtThematicMapKeyboardHandler$$ = new $dvt$$11$$.Image(this.$getCtx$(), this.$getResourcesMap$()[$dvt$$11$$.$PanelDrawer$.$PANEL_LEGEND_ICON_OVR$], 0, 0, $dvt$$11$$.$PanelDrawer$.$IMAGE_SIZE$, $dvt$$11$$.$PanelDrawer$.$IMAGE_SIZE$), $DvtMapCustomAreaLayer$$ = 
          new $dvt$$11$$.Image(this.$getCtx$(), this.$getResourcesMap$()[$dvt$$11$$.$PanelDrawer$.$PANEL_LEGEND_ICON_DWN$], 0, 0, $dvt$$11$$.$PanelDrawer$.$IMAGE_SIZE$, $dvt$$11$$.$PanelDrawer$.$IMAGE_SIZE$), $DvtMapAreaLayer$$ = $dvt$$11$$.$Bundle$.$getTranslatedString$($dvt$$11$$.$Bundle$.$UTIL_PREFIX$, "LEGEND");
          this.$_legendPanel$.$addPanel$(this.$_legend$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$, $dvt$$11$$.$PanelDrawer$.$PANEL_LEGEND$);
          this.$_legendPanel$.$renderComponent$();
          $DvtThematicMapControlPanel$$ && this.$_legendPanel$.$setDisclosed$(!0, !0);
        } else {
          this.$_legendPanel$.$addContent$(this.$_legend$), $DvtMapDataLayer$$ = this.$_legendPanel$.$getDimensions$(), $DvtThematicMapControlPanel$$ = $dvt$$11$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? 5 : this.getWidth() - 5 - $DvtMapDataLayer$$.$w$ - $DvtMapDataLayer$$.x, this.$_legendPanel$.$setTranslate$($DvtThematicMapControlPanel$$, 5), $DvtMapDataLayer$$.$w$ += 5;
        }
        if (this.$_isFixedLegend$ = $DvtThematicMapJsonParser$$) {
          $DvtMapDataLayer$$ || ($DvtMapDataLayer$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $DvtMapDataLayer$$.$w$, this.$_pzc$.$setSize$(this.getWidth() - this.$_legendWidth$, this.getHeight(), !0);
        }
      }
    }
  };
  $dvt$$11$$.$ThematicMap$.prototype.$Render$ = function $$dvt$$11$$$$ThematicMap$$$$Render$$() {
    $dvt$$11$$.$ThematicMap$.$superclass$.$Render$.call(this);
    var $DvtThematicMapControlPanel$$ = new $dvt$$11$$.$Container$(this.$getCtx$()), $DvtThematicMapJsonParser$$ = new $dvt$$11$$.$Container$(this.$getCtx$());
    this.$_pzc$ = this.$_panZoomCanvas$;
    this.$_pzc$.$addChild$($DvtThematicMapControlPanel$$);
    this.$_pzc$.$_contentPane$.$addChild$($DvtThematicMapJsonParser$$);
    this.$_render$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    if (this.$_topLayer$) {
      (this.$_controlPanel$ = this.$_pzc$.$_controlPanel$) && this.$_pzc$.$addChild$(this.$_controlPanel$);
      this.$StopAnimation$(!0);
      $DvtThematicMapJsonParser$$ = new $dvt$$11$$.$Rectangle$(0, 0, this.getWidth(), this.getHeight());
      if (this.$_bRendered$ || this.$_oldPzc$) {
        var $DvtThematicMapEventManager$$ = null;
        this.$_bBaseMapChanged$ && !this.$_isResize$ ? $DvtThematicMapEventManager$$ = this.$_animationOnMapChange$ : this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($DvtThematicMapEventManager$$ = this.$_topLayer$.$getAnimation$());
        $dvt$$11$$.$BlackBoxAnimationHandler$.isSupported($DvtThematicMapEventManager$$) && (this.$Animation$ = $dvt$$11$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$getCtx$(), $DvtThematicMapEventManager$$, this.$_oldPzc$, this.$_pzc$, $DvtThematicMapJsonParser$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$);
      } else {
        $dvt$$11$$.$BlackBoxAnimationHandler$.isSupported(this.$_animationOnDisplay$) && (this.$Animation$ = $dvt$$11$$.$BlackBoxAnimationHandler$.$getInAnimation$(this.$getCtx$(), this.$_animationOnDisplay$, this.$_pzc$, $DvtThematicMapJsonParser$$, this.$_animationDuration$));
      }
      this.$Animation$ ? (this.$_controlPanel$ && this.$addChild$(this.$_controlPanel$), this.$EventManager$.$hideTooltip$(), this.$EventManager$.$removeListeners$(this), this.$_bListenersRemoved$ = !0, this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play()) : this.$OnAnimationEnd$();
      this.$_pzcContainer$ = $DvtThematicMapControlPanel$$;
      this.$_topLayer$ && (this.$_oldTopLayerName$ = this.$_topLayer$.$LayerName$);
      this.$getCtx$().$setKeyboardFocusArray$([this]);
      this.$_bRendered$ = !0;
    }
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_calcMinZoom$ = function $$dvt$$11$$$$ThematicMap$$$$_calcMinZoom$$() {
    var $dvt$$11$$ = this.$_pzc$.$_zoomToFitPadding$, $DvtThematicMapControlPanel$$ = this.$_topLayer$.$getLayerDim$(), $DvtThematicMapJsonParser$$ = this.$_pzc$.$getSize$();
    return Math.min(($DvtThematicMapJsonParser$$.$w$ - 2 * $dvt$$11$$) / $DvtThematicMapControlPanel$$.$w$, ($DvtThematicMapJsonParser$$.$h$ - 2 * $dvt$$11$$) / $DvtThematicMapControlPanel$$.$h$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_render$ = function $$dvt$$11$$$$ThematicMap$$$$_render$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    this.$_renderLegend$();
    $DvtThematicMapControlPanel$$.$addChild$(this.$_areaLayers$);
    $DvtThematicMapControlPanel$$.$addChild$(this.$_dataAreaLayers$);
    this.$_isMarkerZoomBehaviorFixed$ ? $dvt$$11$$.$addChild$(this.$_dataPointLayers$) : $DvtThematicMapControlPanel$$.$addChild$(this.$_dataPointLayers$);
    $dvt$$11$$.$addChild$(this.$_labelLayers$);
    var $DvtThematicMapJsonParser$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
    this.$_topLayerRendered$ = !1;
    for (var $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < this.$_layers$.length;$DvtThematicMapEventManager$$++) {
      var $DvtThematicMapKeyboardHandler$$ = this.$_layers$[$DvtThematicMapEventManager$$];
      if (!this.$_topLayerRendered$ && $DvtThematicMapKeyboardHandler$$ instanceof $DvtMapAreaLayer$$ || !($DvtThematicMapKeyboardHandler$$ instanceof $DvtMapAreaLayer$$)) {
        $DvtThematicMapKeyboardHandler$$.$render$($DvtThematicMapJsonParser$$), !this.$_topLayerRendered$ && $DvtThematicMapKeyboardHandler$$ instanceof $DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = !0, this.$_topLayer$ = $DvtThematicMapKeyboardHandler$$);
      }
    }
    this.$_topLayer$ && ($DvtThematicMapJsonParser$$ = this.$_topLayer$.$_isolatedArea$, this.$_isolatedArea$ != $DvtThematicMapJsonParser$$ && (this.$_isolatedArea$ = $DvtThematicMapJsonParser$$, this.$setInitialCenterX$(null), this.$setInitialCenterY$(null), this.$setInitialZoom$(null)), this.$_keyboardHandler$ && ($DvtThematicMapJsonParser$$ = this.$getNavigableAreas$(), 0 == $DvtThematicMapJsonParser$$.length && ($DvtThematicMapJsonParser$$ = this.$getNavigableObjects$()), this.$EventManager$.$setInitialFocus$($DvtThematicMapJsonParser$$[0])), 
    this.$_pzc$.$setMinZoom$(null), this.$_pzc$.$setMaxZoom$(null), this.$_pzc$.$setZoomingEnabled$(!0), this.$_pzc$.$setPanningEnabled$(!0), this.$_bBaseMapChanged$ || this.$_isResize$ || null == this.$_initialZoom$ ? this.$_pzc$.$zoomToFit$(null, this.$_topLayer$.$getLayerDim$()) : (this.$_pzc$.$zoomTo$(this.$_initialZoom$), this.$_pzc$.$panTo$(this.$_initialCenterX$, this.$_initialCenterY$)), this.$_processInitialDrilled$(), this.$_updateZoomLimits$(), this.$_pzc$.$setZoomingEnabled$(this.$_zooming$), 
    this.$_pzc$.$setPanningEnabled$(this.$_panning$));
  };
  $dvt$$11$$.$ThematicMap$.prototype.$updateLayer$ = function $$dvt$$11$$$$ThematicMap$$$$updateLayer$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$) {
    this.$_bRendered$ = !1;
    this.$StopAnimation$(!0);
    (new $DvtThematicMapJsonParser$$(this)).$ParseDataLayers$([$dvt$$11$$], this.$getLayer$($DvtThematicMapControlPanel$$), this.$_topLayer$.$LayerName$, $DvtThematicMapEventManager$$);
    this.$_renderLegend$();
    this.$_bRendered$ = !0;
    this.$_keyboardHandler$ && ($dvt$$11$$ = this.$getNavigableAreas$(), 0 == $dvt$$11$$.length && ($dvt$$11$$ = this.$getNavigableObjects$()), this.$EventManager$.$setInitialFocus$($dvt$$11$$[0]));
    this.$getCtx$().$setKeyboardFocusArray$([this]);
    this.$_updateZoomLimits$();
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_renderCompleted$ = function $$dvt$$11$$$$ThematicMap$$$$_renderCompleted$$() {
    this.$AnimationStopped$ || this.$RenderComplete$();
    this.$Animation$ = null;
    this.$AnimationStopped$ = !1;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_updateZoomLimits$ = function $$dvt$$11$$$$ThematicMap$$$$_updateZoomLimits$$() {
    var $dvt$$11$$ = this.$_calcMinZoom$();
    this.$_pzc$.$setMinZoom$($dvt$$11$$);
    this.$_pzc$.$setMaxZoom$($dvt$$11$$ * this.$getMaxZoomFactor$());
  };
  $dvt$$11$$.$ThematicMap$.prototype.$OnUpdateLayerEnd$ = function $$dvt$$11$$$$ThematicMap$$$$OnUpdateLayerEnd$$() {
    this.$_topLayer$.$_isolatedArea$ && this.$_pzc$.$zoomToFit$(null, this.$_topLayer$.$getLayerDim$());
    this.$_processInitialDrilled$();
    this.$_initialZooming$ && this.$_zoomData$();
    this.$_renderCompleted$();
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setLegendData$ = function $$dvt$$11$$$$ThematicMap$$$$setLegendData$$($dvt$$11$$) {
    this.$_legendData$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setRolloverBehavior$ = function $$dvt$$11$$$$ThematicMap$$$$setRolloverBehavior$$($dvt$$11$$) {
    this.$_rolloverBehavior$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_transformContainers$ = function $$dvt$$11$$$$ThematicMap$$$$_transformContainers$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = new $dvt$$11$$.$Matrix$;
    $DvtThematicMapJsonParser$$.translate($DvtThematicMapControlPanel$$.$_tx$, $DvtThematicMapControlPanel$$.$_ty$);
    this.$_isMarkerZoomBehaviorFixed$ && this.$_dataPointLayers$.$setMatrix$($DvtThematicMapJsonParser$$);
    this.$_labelLayers$.$setMatrix$($DvtThematicMapJsonParser$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$HandleLegendEvent$ = function $$dvt$$11$$$$ThematicMap$$$$HandleLegendEvent$$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$ = $dvt$$11$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$11$$.$PanZoomComponent$.$LEGEND_DISCLOSED_EVENT_KEY$, $DvtThematicMapControlPanel$$.$getSubType$() == $dvt$$11$$.$CollapsiblePanelEvent$.$SUBTYPE_SHOW$);
    this.dispatchEvent($DvtThematicMapControlPanel$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_constrainPanning$ = function $$dvt$$11$$$$ThematicMap$$$$_constrainPanning$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_pzc$.$_zoomToFitPadding$, $DvtThematicMapEventManager$$ = this.$_pzc$.$getSize$(), $DvtThematicMapJsonParser$$ = new $dvt$$11$$.$Rectangle$($DvtThematicMapJsonParser$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$.$w$ - 2 * $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$.$h$ - 2 * $DvtThematicMapJsonParser$$), $DvtThematicMapKeyboardHandler$$ = this.$_topLayer$.$getLayerDim$(), $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.x * 
    $DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$ = $DvtThematicMapKeyboardHandler$$.y * $DvtThematicMapControlPanel$$, $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.$w$ * $DvtThematicMapControlPanel$$;
    $DvtThematicMapControlPanel$$ *= $DvtThematicMapKeyboardHandler$$.$h$;
    $DvtThematicMapKeyboardHandler$$ = 0;
    $DvtMapCustomAreaLayer$$ > $DvtThematicMapJsonParser$$.$w$ ? (this.$_isFixedLegend$ && $dvt$$11$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && ($DvtThematicMapKeyboardHandler$$ = this.$_legendWidth$), this.$_pzc$.$setMinPanX$($DvtThematicMapJsonParser$$.x + $DvtThematicMapJsonParser$$.$w$ + $DvtThematicMapKeyboardHandler$$ - ($DvtMapDataLayer$$ + $DvtMapCustomAreaLayer$$)), this.$_pzc$.$setMaxPanX$($DvtThematicMapJsonParser$$.x - $DvtMapDataLayer$$ + $DvtThematicMapKeyboardHandler$$)) : (this.$_isFixedLegend$ && 
    $dvt$$11$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && ($DvtThematicMapKeyboardHandler$$ = 2 * this.$_legendWidth$), $DvtMapDataLayer$$ = ($DvtThematicMapJsonParser$$.x + $DvtThematicMapJsonParser$$.$w$ + $DvtThematicMapKeyboardHandler$$) / 2 - ($DvtMapDataLayer$$ + $DvtMapCustomAreaLayer$$ / 2), this.$_pzc$.$setMinPanX$($DvtMapDataLayer$$), this.$_pzc$.$setMaxPanX$($DvtMapDataLayer$$));
    $DvtThematicMapControlPanel$$ > $DvtThematicMapJsonParser$$.$h$ ? (this.$_pzc$.$setMinPanY$($DvtThematicMapJsonParser$$.y + $DvtThematicMapJsonParser$$.$h$ - ($DvtThematicMapEventManager$$ + $DvtThematicMapControlPanel$$)), this.$_pzc$.$setMaxPanY$($DvtThematicMapJsonParser$$.y - $DvtThematicMapEventManager$$)) : ($DvtThematicMapJsonParser$$ = ($DvtThematicMapJsonParser$$.y + $DvtThematicMapJsonParser$$.$h$) / 2 - ($DvtThematicMapEventManager$$ + $DvtThematicMapControlPanel$$ / 2), this.$_pzc$.$setMinPanY$($DvtThematicMapJsonParser$$), 
    this.$_pzc$.$setMaxPanY$($DvtThematicMapJsonParser$$));
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_updateAnimator$ = function $$dvt$$11$$$$ThematicMap$$$$_updateAnimator$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.$_animator$;
    if ($DvtThematicMapEventManager$$) {
      var $DvtThematicMapKeyboardHandler$$ = this.$_pzc$.$_contentPane$, $DvtMapDataLayer$$ = $DvtThematicMapEventManager$$.$getDestVal$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapKeyboardHandler$$.$getMatrix$);
      $DvtThematicMapJsonParser$$ && (this.$_currentAnimMatrix$ = $DvtThematicMapKeyboardHandler$$.$getMatrix$(), $DvtThematicMapEventManager$$.$addProp$($dvt$$11$$.$Animator$.$TYPE_MATRIX$, this, this.$_getCenteredObjsMatrix$, this.$_setCenteredObjsMatrix$, $DvtMapDataLayer$$));
      $DvtThematicMapKeyboardHandler$$ = new $dvt$$11$$.$Matrix$(1, 0, 0, 1, $DvtMapDataLayer$$.$_tx$, $DvtMapDataLayer$$.$_ty$);
      this.$_isMarkerZoomBehaviorFixed$ && $DvtThematicMapEventManager$$.$addProp$($dvt$$11$$.$Animator$.$TYPE_MATRIX$, this.$_dataPointLayers$, this.$_dataPointLayers$.$getMatrix$, this.$_dataPointLayers$.$setMatrix$, $DvtThematicMapKeyboardHandler$$);
      $DvtThematicMapEventManager$$.$addProp$($dvt$$11$$.$Animator$.$TYPE_MATRIX$, this.$_labelLayers$, this.$_labelLayers$.$getMatrix$, this.$_labelLayers$.$setMatrix$, $DvtThematicMapKeyboardHandler$$);
    }
  };
  $dvt$$11$$.$ThematicMap$.prototype.$HandleZoomEvent$ = function $$dvt$$11$$$$ThematicMap$$$$HandleZoomEvent$$($DvtThematicMapControlPanel$$) {
    switch($DvtThematicMapControlPanel$$.$getSubType$()) {
      case $dvt$$11$$.$ZoomEvent$.$SUBTYPE_ADJUST_PAN_CONSTRAINTS$:
        this.$_panning$ && this.$_constrainPanning$($DvtThematicMapControlPanel$$.$_newZoom$);
        break;
      case $dvt$$11$$.$ZoomEvent$.$SUBTYPE_ZOOMING$:
      ;
      case $dvt$$11$$.$ZoomEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$:
        this.$_updateAnimator$($DvtThematicMapControlPanel$$, !0);
        break;
      case $dvt$$11$$.$ZoomEvent$.$SUBTYPE_ZOOMED$:
        var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$_newZoom$;
        if (null != $DvtThematicMapJsonParser$$) {
          var $DvtThematicMapEventManager$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
          $DvtThematicMapControlPanel$$.$_animator$ = null;
          this.dispatchEvent($dvt$$11$$.$EventFactory$.$newThematicMapViewportChangeEvent$($DvtThematicMapEventManager$$.$_tx$, $DvtThematicMapEventManager$$.$_ty$, $DvtThematicMapJsonParser$$));
          this.$_transformContainers$($DvtThematicMapEventManager$$);
          for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < this.$_layers$.length;$DvtThematicMapJsonParser$$++) {
            this.$_layers$[$DvtThematicMapJsonParser$$].$HandleZoomEvent$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$);
          }
        }
        break;
      case $dvt$$11$$.$ZoomEvent$.$SUBTYPE_ZOOM_AND_CENTER$:
        this.$fitSelectedRegions$();
        break;
      case $dvt$$11$$.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_END$:
        this.dispatchEvent($dvt$$11$$.$EventFactory$.$newThematicMapViewportChangeEvent$());
    }
  };
  $dvt$$11$$.$ThematicMap$.prototype.$HandlePanEvent$ = function $$dvt$$11$$$$ThematicMap$$$$HandlePanEvent$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$getSubType$();
    if ($DvtThematicMapJsonParser$$ == $dvt$$11$$.$PanEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$) {
      this.$_updateAnimator$($DvtThematicMapControlPanel$$, !1);
    } else {
      if ($DvtThematicMapJsonParser$$ == $dvt$$11$$.$PanEvent$.$SUBTYPE_PANNED$ && null != $DvtThematicMapControlPanel$$.$_newX$) {
        var $DvtThematicMapEventManager$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        $DvtThematicMapControlPanel$$.$_animator$ = null;
        this.dispatchEvent($dvt$$11$$.$EventFactory$.$newThematicMapViewportChangeEvent$($DvtThematicMapEventManager$$.$_tx$, $DvtThematicMapEventManager$$.$_ty$, this.$_pzc$.$getZoom$()));
        this.$_transformContainers$($DvtThematicMapEventManager$$);
        for ($DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_layers$.length;$DvtThematicMapControlPanel$$++) {
          this.$_layers$[$DvtThematicMapControlPanel$$].$HandlePanEvent$($DvtThematicMapEventManager$$);
        }
      }
    }
    this.$_legendPanel$ && (this.$_skinName$ == $dvt$$11$$.$CSSStyle$.$SKIN_ALTA$ ? $DvtThematicMapJsonParser$$ === $dvt$$11$$.$PanEvent$.$SUBTYPE_DRAG_PAN_BEGIN$ ? this.$_legendPanel$.$setMouseEnabled$(!1) : $DvtThematicMapJsonParser$$ === $dvt$$11$$.$PanEvent$.$SUBTYPE_DRAG_PAN_END$ && this.$_legendPanel$.$setMouseEnabled$(!0) : ($DvtThematicMapEventManager$$ = this.$getSubcomponentStyles$(), $DvtThematicMapControlPanel$$ = this.$_legendPanel$.$_background$.$getStroke$().clone(), $DvtThematicMapJsonParser$$ === 
    $dvt$$11$$.$PanEvent$.$SUBTYPE_DRAG_PAN_BEGIN$ ? (this.$_legend$.$setAlpha$($DvtThematicMapEventManager$$[$dvt$$11$$.$ControlPanel$.$BG_DRAG_ALPHA$]), $DvtThematicMapControlPanel$$.$setAlpha$($DvtThematicMapEventManager$$[$dvt$$11$$.$ControlPanel$.$FRAME_DRAG_ALPHA$]), this.$_legendPanel$.$_background$.$setStroke$($DvtThematicMapControlPanel$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($DvtThematicMapEventManager$$[$dvt$$11$$.$ControlPanel$.$FRAME_DRAG_ALPHA$]), 
    this.$_legendPanel$.$setMouseEnabled$(!1)) : $DvtThematicMapJsonParser$$ === $dvt$$11$$.$PanEvent$.$SUBTYPE_DRAG_PAN_END$ && (this.$_legend$.$setAlpha$(1), $DvtThematicMapControlPanel$$.$setAlpha$($DvtThematicMapEventManager$$[$dvt$$11$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]), this.$_legendPanel$.$_background$.$setStroke$($DvtThematicMapControlPanel$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($DvtThematicMapEventManager$$[$dvt$$11$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]), 
    this.$_legendPanel$.$setMouseEnabled$(!0))));
  };
  $dvt$$11$$.$ThematicMap$.prototype.$GetControlPanelBehavior$ = function $$dvt$$11$$$$ThematicMap$$$$GetControlPanelBehavior$$() {
    return "none" != this.$_drillMode$ || this.$_zooming$ || this.$_panning$ && this.$_skinName$ != $dvt$$11$$.$CSSStyle$.$SKIN_ALTA$ ? $dvt$$11$$.$ThematicMap$.$superclass$.$GetControlPanelBehavior$.call(this) : $dvt$$11$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$GetControlPanel$ = function $$dvt$$11$$$$ThematicMap$$$$GetControlPanel$$() {
    var $DvtThematicMapJsonParser$$ = this.$GetControlPanelBehavior$();
    return $DvtThematicMapJsonParser$$ != $dvt$$11$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$ ? new $DvtThematicMapControlPanel$$(this.$getCtx$(), this, $DvtThematicMapJsonParser$$ == $dvt$$11$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$ ? $dvt$$11$$.$ControlPanel$.$STATE_COLLAPSED$ : $dvt$$11$$.$ControlPanel$.$STATE_EXPANDED$) : null;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setZooming$ = function $$dvt$$11$$$$ThematicMap$$$$setZooming$$($dvt$$11$$) {
    this.$_zooming$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setPanning$ = function $$dvt$$11$$$$ThematicMap$$$$setPanning$$($dvt$$11$$) {
    this.$_panning$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$addDrilledLayer$ = function $$dvt$$11$$$$ThematicMap$$$$addDrilledLayer$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    this.$_initDrilled$[$dvt$$11$$] = $DvtThematicMapControlPanel$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_processInitialDrilled$ = function $$dvt$$11$$$$ThematicMap$$$$_processInitialDrilled$$() {
    this.$_processingInitDrilled$ = !0;
    for (var $dvt$$11$$ = 0;$dvt$$11$$ < this.$_layers$.length;$dvt$$11$$++) {
      var $DvtThematicMapControlPanel$$ = this.$_layers$[$dvt$$11$$].$LayerName$;
      $DvtThematicMapControlPanel$$ in this.$_initDrilled$ && (this.$_selectedAreas$[$DvtThematicMapControlPanel$$] = this.$_initDrilled$[$DvtThematicMapControlPanel$$][1], this.$_clickedLayerName$ = $DvtThematicMapControlPanel$$, this.$_clickedDataLayerId$ = this.$_initDrilled$[$DvtThematicMapControlPanel$$][0], this.$drillDown$());
    }
    this.$_processingInitDrilled$ = !1;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$resetMap$ = function $$dvt$$11$$$$ThematicMap$$$$resetMap$$() {
    this.$StopAnimation$(!0);
    for (var $dvt$$11$$ = [], $DvtThematicMapControlPanel$$ = [], $DvtThematicMapJsonParser$$ = this.$_layers$.length - 1;-1 < $DvtThematicMapJsonParser$$;$DvtThematicMapJsonParser$$--) {
      this.$_layers$[$DvtThematicMapJsonParser$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$DvtThematicMapJsonParser$$].reset($DvtThematicMapControlPanel$$) : this.$_layers$[$DvtThematicMapJsonParser$$].reset($dvt$$11$$);
    }
    for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $dvt$$11$$.length;$DvtThematicMapJsonParser$$++) {
      if ($dvt$$11$$[$DvtThematicMapJsonParser$$]) {
        var $DvtThematicMapEventManager$$ = $dvt$$11$$[$DvtThematicMapJsonParser$$].getParent();
        $DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$.removeChild($dvt$$11$$[$DvtThematicMapJsonParser$$]);
      }
    }
    for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
      $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$] && $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$setAlpha$(1);
    }
    this.$_drilledRowKeys$ = [];
    this.$fitMap$();
    this.$_drilled$ = [];
    this.$_controlPanel$ && "none" != this.$_drillMode$ && (this.$_controlPanel$.$setEnabledDrillDownButton$(!1), this.$_controlPanel$.$setEnabledDrillUpButton$(!1));
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_zoomData$ = function $$dvt$$11$$$$ThematicMap$$$$_zoomData$$() {
    var $DvtThematicMapControlPanel$$ = this.$_dataAreaLayers$.$getDimensions$(), $DvtThematicMapJsonParser$$ = this.$_dataPointLayers$.$getDimensions$();
    if (this.$_isMarkerZoomBehaviorFixed$) {
      var $DvtThematicMapEventManager$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      $DvtThematicMapJsonParser$$.$w$ /= $DvtThematicMapEventManager$$.$_a$;
      $DvtThematicMapJsonParser$$.$h$ /= $DvtThematicMapEventManager$$.$_d$;
      $DvtThematicMapJsonParser$$.x /= $DvtThematicMapEventManager$$.$_a$;
      $DvtThematicMapJsonParser$$.y /= $DvtThematicMapEventManager$$.$_d$;
    }
    $DvtThematicMapControlPanel$$ = $DvtThematicMapControlPanel$$.$getUnion$($DvtThematicMapJsonParser$$);
    this.$StopAnimation$(!0);
    var $DvtThematicMapKeyboardHandler$$;
    this.$_pzc$.$_bZoomingEnabled$ || ($DvtThematicMapKeyboardHandler$$ = this.$_pzc$.$getMaxZoom$(), this.$_pzc$.$setMaxZoom$($DvtThematicMapKeyboardHandler$$ * this.$_maxZoomFactor$));
    var $DvtMapDataLayer$$;
    $dvt$$11$$.$Agent$.$isEnvironmentBrowser$() && ($DvtMapDataLayer$$ = new $dvt$$11$$.$Animator$(this.$getCtx$(), .3));
    0 < $DvtThematicMapControlPanel$$.$w$ && 0 < $DvtThematicMapControlPanel$$.$h$ ? this.$_pzc$.$zoomToFit$($DvtMapDataLayer$$, $DvtThematicMapControlPanel$$) : this.$_pzc$.$zoomToFit$($DvtMapDataLayer$$, this.$_topLayer$.$getLayerDim$());
    $DvtMapDataLayer$$ && $DvtMapDataLayer$$.play();
    $DvtThematicMapKeyboardHandler$$ && this.$_pzc$.$setMaxZoom$($DvtThematicMapKeyboardHandler$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_zoomToFitBounds$ = function $$dvt$$11$$$$ThematicMap$$$$_zoomToFitBounds$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = new $dvt$$11$$.$Animator$(this.$getCtx$(), .3);
    this.$_pzc$.$zoomToFit$($DvtThematicMapJsonParser$$, $DvtThematicMapControlPanel$$);
    $DvtThematicMapJsonParser$$.play();
  };
  $dvt$$11$$.$ThematicMap$.prototype.$fitRegion$ = function $$dvt$$11$$$$ThematicMap$$$$fitRegion$$($dvt$$11$$) {
    $dvt$$11$$ || ($dvt$$11$$ = this.$_zoomToFitObject$);
    $dvt$$11$$ || ($dvt$$11$$ = this.$_clickedObject$);
    this.$_zoomToFitBounds$($dvt$$11$$.$getDimensions$());
  };
  $dvt$$11$$.$ThematicMap$.prototype.$fitSelectedRegions$ = function $$dvt$$11$$$$ThematicMap$$$$fitSelectedRegions$$() {
    if (this.$_clickedDataLayerId$) {
      var $dvt$$11$$ = this.$getLayer$(this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$);
      if ($dvt$$11$$ && ($dvt$$11$$ = $dvt$$11$$.$_selectionHandler$)) {
        for (var $dvt$$11$$ = $dvt$$11$$.getSelection(), $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < $dvt$$11$$.length;$DvtThematicMapControlPanel$$++) {
          $dvt$$11$$[$DvtThematicMapControlPanel$$] = $dvt$$11$$[$DvtThematicMapControlPanel$$].$getDisplayable$();
        }
        if (0 < $dvt$$11$$.length) {
          for (var $DvtThematicMapJsonParser$$ = $dvt$$11$$[0].$getDimensions$(), $DvtThematicMapControlPanel$$ = 1;$DvtThematicMapControlPanel$$ < $dvt$$11$$.length;$DvtThematicMapControlPanel$$++) {
            $DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$getUnion$($dvt$$11$$[$DvtThematicMapControlPanel$$].$getDimensions$());
          }
          this.$_zoomToFitBounds$($DvtThematicMapJsonParser$$);
        }
      }
    }
  };
  $dvt$$11$$.$ThematicMap$.prototype.$fitMap$ = function $$dvt$$11$$$$ThematicMap$$$$fitMap$$() {
    var $DvtThematicMapControlPanel$$ = new $dvt$$11$$.$Animator$(this.$getCtx$(), .3);
    this.$_pzc$.$zoomToFit$($DvtThematicMapControlPanel$$);
    $DvtThematicMapControlPanel$$.play();
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getDrillParentLayer$ = function $$dvt$$11$$$$ThematicMap$$$$getDrillParentLayer$$($dvt$$11$$) {
    $dvt$$11$$ = $DvtBaseMapManager$$.$getParentLayerName$(this.$_mapName$, $dvt$$11$$);
    return this.$getLayer$($dvt$$11$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getDrillChildLayer$ = function $$dvt$$11$$$$ThematicMap$$$$getDrillChildLayer$$($dvt$$11$$) {
    $dvt$$11$$ = $DvtBaseMapManager$$.$getChildLayerName$(this.$_mapName$, $dvt$$11$$);
    return this.$getLayer$($dvt$$11$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getNavigableAreas$ = function $$dvt$$11$$$$ThematicMap$$$$getNavigableAreas$$() {
    var $dvt$$11$$ = [];
    if (this.$_topLayer$) {
      for (var $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_layers$.length;$DvtThematicMapControlPanel$$++) {
        var $DvtThematicMapJsonParser$$ = this.$_layers$[$DvtThematicMapControlPanel$$].$DataLayers$, $DvtThematicMapEventManager$$;
        for ($DvtThematicMapEventManager$$ in $DvtThematicMapJsonParser$$) {
          $dvt$$11$$ = this.$_topLayer$.$LayerName$ == this.$_layers$[$DvtThematicMapControlPanel$$].$LayerName$ ? $dvt$$11$$.concat($DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$].$getNavigableAreaObjects$()) : $dvt$$11$$.concat($DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$].$getNavigableDisclosedAreaObjects$());
        }
      }
    }
    return $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getNavigableObjects$ = function $$dvt$$11$$$$ThematicMap$$$$getNavigableObjects$$() {
    var $dvt$$11$$ = [];
    if (this.$_topLayer$) {
      for (var $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_layers$.length;$DvtThematicMapControlPanel$$++) {
        var $DvtThematicMapJsonParser$$ = this.$_layers$[$DvtThematicMapControlPanel$$].$DataLayers$;
        if (this.$_topLayer$.$LayerName$ == this.$_layers$[$DvtThematicMapControlPanel$$].$LayerName$ || !(this.$_layers$[$DvtThematicMapControlPanel$$] instanceof $DvtMapAreaLayer$$)) {
          for (var $DvtThematicMapEventManager$$ in $DvtThematicMapJsonParser$$) {
            $dvt$$11$$ = $dvt$$11$$.concat($DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$].$_dataObjs$);
          }
        }
      }
    }
    return $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_setCenteredObjsMatrix$ = function $$dvt$$11$$$$ThematicMap$$$$_setCenteredObjsMatrix$$($dvt$$11$$) {
    this.$_currentAnimMatrix$ = $dvt$$11$$;
    if (this.$_isMarkerZoomBehaviorFixed$) {
      for (var $DvtThematicMapControlPanel$$ = this.$getNavigableObjects$(), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
        $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$HandleZoomEvent$($dvt$$11$$);
      }
      $DvtThematicMapControlPanel$$ = this.$_labelLayers$.$getNumChildren$();
      for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$;$DvtThematicMapJsonParser$$++) {
        for (var $DvtThematicMapEventManager$$ = this.$_labelLayers$.$getChildAt$($DvtThematicMapJsonParser$$), $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapEventManager$$.$getNumChildren$(), $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapKeyboardHandler$$;$DvtMapDataLayer$$++) {
          var $DvtMapCustomAreaLayer$$ = $DvtThematicMapEventManager$$.$getChildAt$($DvtMapDataLayer$$);
          $DvtMapCustomAreaLayer$$ instanceof $DvtMapLabel$$ && $DvtMapCustomAreaLayer$$.update($dvt$$11$$);
        }
      }
    }
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_getCenteredObjsMatrix$ = function $$dvt$$11$$$$ThematicMap$$$$_getCenteredObjsMatrix$$() {
    return this.$_currentAnimMatrix$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$drillDown$ = function $$dvt$$11$$$$ThematicMap$$$$drillDown$$() {
    this.$StopAnimation$(!0);
    var $dvt$$11$$ = this.$getDrillChildLayer$(this.$_clickedLayerName$), $DvtThematicMapControlPanel$$ = this.$getLayer$(this.$_clickedLayerName$), $DvtThematicMapJsonParser$$ = [];
    if ($dvt$$11$$) {
      this.$_drillDataLayer$[this.$_clickedLayerName$] = this.$_clickedDataLayerId$;
      for (var $DvtThematicMapEventManager$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $DvtThematicMapKeyboardHandler$$ = [], $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapEventManager$$.length;$DvtMapDataLayer$$++) {
        this.$_getAreaFromDataLayer$($DvtThematicMapEventManager$$[$DvtMapDataLayer$$], $DvtThematicMapControlPanel$$.$getDataLayer$(this.$_clickedDataLayerId$)).$isDrilled$() || $DvtThematicMapKeyboardHandler$$.push($DvtThematicMapEventManager$$[$DvtMapDataLayer$$]);
      }
      this.$_processingInitDrilled$ || "single" != this.$_drillMode$ || (this.$_drilled$.pop(), $DvtThematicMapControlPanel$$.reset($DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$), $dvt$$11$$.reset(this.$_drillAnimFadeOutObjs$));
      $DvtThematicMapEventManager$$ = [];
      for ($DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapKeyboardHandler$$.length;$DvtMapDataLayer$$++) {
        var $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$[$DvtMapDataLayer$$], $DvtMapAreaLayer$$ = $DvtThematicMapControlPanel$$.$getChildrenForArea$($DvtMapCustomAreaLayer$$);
        $DvtThematicMapEventManager$$.push($DvtMapAreaLayer$$[0]);
        for (var $DvtMapLayer$$ = 0;$DvtMapLayer$$ < $DvtMapAreaLayer$$.length;$DvtMapLayer$$++) {
          this.$_childToParent$[$DvtMapAreaLayer$$[$DvtMapLayer$$]] = $DvtMapCustomAreaLayer$$;
        }
        $dvt$$11$$.$discloseAreas$($DvtMapAreaLayer$$, $DvtThematicMapJsonParser$$);
        ($DvtMapAreaLayer$$ = $DvtThematicMapControlPanel$$.$getDataLayer$(this.$_clickedDataLayerId$)) && $DvtMapAreaLayer$$.$drill$($DvtMapCustomAreaLayer$$, this.$_drillAnimFadeOutObjs$);
        this.$_drilled$.push($DvtMapCustomAreaLayer$$);
      }
      this.$_handleDrillAnimations$(this.$_drillAnimFadeOutObjs$, $DvtThematicMapJsonParser$$, !1);
      this.$_updateDrillButton$($dvt$$11$$.$LayerName$, !0);
      this.$_clickedLayerName$ = $dvt$$11$$.$LayerName$;
      this.$_selectedAreas$[this.$_clickedLayerName$] = $DvtThematicMapEventManager$$;
    }
  };
  $dvt$$11$$.$ThematicMap$.prototype.$drillUp$ = function $$dvt$$11$$$$ThematicMap$$$$drillUp$$() {
    this.$StopAnimation$(!0);
    for (var $DvtThematicMapControlPanel$$ = this.$getLayer$(this.$_clickedLayerName$), $DvtThematicMapJsonParser$$ = this.$getDrillParentLayer$(this.$_clickedLayerName$), $DvtThematicMapEventManager$$ = [], $DvtThematicMapKeyboardHandler$$ = [], $DvtMapDataLayer$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $DvtMapCustomAreaLayer$$ = 0;$DvtMapCustomAreaLayer$$ < $DvtMapDataLayer$$.length;$DvtMapCustomAreaLayer$$++) {
      var $DvtMapAreaLayer$$ = this.$_childToParent$[$DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$]];
      $DvtThematicMapKeyboardHandler$$.push($DvtMapAreaLayer$$);
      -1 != $dvt$$11$$.$ArrayUtils$.$getIndex$(this.$_drilled$, $DvtMapAreaLayer$$) && ($DvtThematicMapControlPanel$$.$undiscloseAreas$($DvtThematicMapJsonParser$$.$getChildrenForArea$($DvtMapAreaLayer$$), this.$_drillAnimFadeOutObjs$), $DvtThematicMapJsonParser$$.$getDataLayer$(this.$_drillDataLayer$[$DvtThematicMapJsonParser$$.$LayerName$]).$undrill$($DvtMapAreaLayer$$, $DvtThematicMapEventManager$$), $DvtMapAreaLayer$$ = $dvt$$11$$.$ArrayUtils$.$getIndex$(this.$_drilled$, $DvtMapAreaLayer$$), 
      -1 != $DvtMapAreaLayer$$ && this.$_drilled$.splice($DvtMapAreaLayer$$, 1));
    }
    this.$_handleDrillAnimations$(this.$_drillAnimFadeOutObjs$, $DvtThematicMapEventManager$$, !0);
    this.$_clickedLayerName$ = $DvtThematicMapJsonParser$$.$LayerName$;
    this.$_clickedDataLayerId$ = this.$_drillDataLayer$[this.$_clickedLayerName$];
    this.$_selectedAreas$[this.$_clickedLayerName$] = $DvtThematicMapKeyboardHandler$$;
    this.$_updateDrillButton$(this.$_clickedLayerName$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_handleDrillAnimations$ = function $$dvt$$11$$$$ThematicMap$$$$_handleDrillAnimations$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    this.$_pzc$.$_contentPane$.$getMatrix$();
    if ("zoomToFit" == this.$_animationOnDrill$ && !this.$_processingInitDrilled$) {
      var $DvtThematicMapKeyboardHandler$$ = new $dvt$$11$$.$Animator$(this.$getCtx$(), .3);
      $dvt$$11$$.$Agent$.$isEnvironmentBrowser$() || ($DvtThematicMapKeyboardHandler$$ = null);
      $DvtThematicMapEventManager$$ ? this.$_pzc$.$zoomToFit$($DvtThematicMapKeyboardHandler$$) : this.$fitSelectedRegions$();
      $DvtThematicMapKeyboardHandler$$ && $DvtThematicMapKeyboardHandler$$.play();
    }
    this.$StopAnimation$(!0);
    !$dvt$$11$$.$Agent$.$isEnvironmentBrowser$() || "alphaFade" != this.$_animationOnDrill$ && "auto" != this.$_animationOnDrill$ || (this.$Animation$ = $dvt$$11$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$getCtx$(), "alphaFade", $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, null, .5));
    this.$Animation$ ? (this.$EventManager$.$hideTooltip$(), this.$EventManager$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnDrillAnimationEnd$, this), this.$Animation$.play()) : this.$_cleanUpDrilledObjects$();
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setClickInfo$ = function $$dvt$$11$$$$ThematicMap$$$$setClickInfo$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.$_clickedLayerName$ = $DvtThematicMapControlPanel$$;
    this.$_clickedDataLayerId$ = $dvt$$11$$;
    this.$_clickedObject$ = $DvtThematicMapJsonParser$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setEventClientId$ = function $$dvt$$11$$$$ThematicMap$$$$setEventClientId$$($dvt$$11$$) {
    this.$_eventClientId$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.dispatchEvent = function $$dvt$$11$$$$ThematicMap$$$dispatchEvent$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.type;
    if ("selection" == $DvtThematicMapJsonParser$$) {
      this.$_handleSelectionEvent$($DvtThematicMapControlPanel$$);
    } else {
      if ($DvtThematicMapJsonParser$$ == $dvt$$11$$.$MapDrillEvent$.$TYPE$) {
        this.$_handleDrillEvent$($DvtThematicMapControlPanel$$);
      } else {
        if ("adfShowPopup" == $DvtThematicMapJsonParser$$ || "adfHidePopup" == $DvtThematicMapJsonParser$$) {
          $DvtThematicMapControlPanel$$.clientId = this.$_eventClientId$;
        }
      }
    }
    $dvt$$11$$.$ThematicMap$.$superclass$.dispatchEvent.call(this, $DvtThematicMapControlPanel$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_handleSelectionEvent$ = function $$dvt$$11$$$$ThematicMap$$$$_handleSelectionEvent$$($DvtThematicMapControlPanel$$) {
    this.$_clickedDataLayerId$ ? (this.$_selectedRowKeys$ = $DvtThematicMapControlPanel$$.selection, this.$_selectedAreas$[this.$_clickedLayerName$] = this.$getLayer$(this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$getSelectedAreas$(this.$_selectedRowKeys$), this.$_updateDrillButton$(this.$_clickedLayerName$), $DvtThematicMapControlPanel$$.clientId = this.$_clickedDataLayerId$, !this.$_clickedObject$ || this.$_clickedObject$ instanceof $dvt$$11$$.$SimpleMarker$ || this.$_clickedObject$ instanceof 
    $dvt$$11$$.$ImageMarker$ || (this.$_zoomToFitObject$ = this.$_clickedObject$)) : (this.$_updateDrillButton$(null), this.$_zoomToFitObject$ = null);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_updateDrillButton$ = function $$dvt$$11$$$$ThematicMap$$$$_updateDrillButton$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    if (this.$_controlPanel$ && this.$_drillMode$ && "none" != this.$_drillMode$) {
      var $DvtThematicMapJsonParser$$ = this.$getDrillChildLayer$($dvt$$11$$), $DvtThematicMapEventManager$$ = this.$getDrillParentLayer$($dvt$$11$$);
      $DvtThematicMapJsonParser$$ && !$DvtThematicMapControlPanel$$ ? this.$_controlPanel$.$setEnabledDrillDownButton$(!0) : this.$_controlPanel$.$setEnabledDrillDownButton$(!1);
      $DvtThematicMapEventManager$$ ? this.$_controlPanel$.$setEnabledDrillUpButton$(!0) : this.$_controlPanel$.$setEnabledDrillUpButton$(!1);
    }
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_handleDrillEvent$ = function $$dvt$$11$$$$ThematicMap$$$$_handleDrillEvent$$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$.$addParam$("clientId", this.$_eventClientId$);
    this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$;
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$_drillType$;
    $DvtThematicMapJsonParser$$ == $dvt$$11$$.$MapDrillEvent$.$DRILL_UP$ && this.$drillUp$();
    $DvtThematicMapJsonParser$$ == $dvt$$11$$.$MapDrillEvent$.$DRILL_DOWN$ ? this.$drillDown$() : $DvtThematicMapJsonParser$$ == $dvt$$11$$.$MapDrillEvent$.$RESET$ && this.$resetMap$();
    $DvtThematicMapControlPanel$$.$setDisclosed$(this.$_drilledRowKeys$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$destroy$ = function $$dvt$$11$$$$ThematicMap$$$$destroy$$() {
    for (var $DvtThematicMapControlPanel$$ = this.$_layers$, $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
      $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$destroy$();
    }
    $dvt$$11$$.$ThematicMap$.$superclass$.$destroy$.call(this);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$OnAnimationEnd$ = function $$dvt$$11$$$$ThematicMap$$$$OnAnimationEnd$$() {
    this.$_controlPanel$ && this.$_pzc$.$addChild$(this.$_controlPanel$);
    this.$_oldPzc$ && (this.removeChild(this.$_oldPzc$), this.$_oldPzc$ = null);
    this.$_renderCompleted$();
    this.$_initialZooming$ && this.$_zoomData$();
    this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories);
    this.$_bListenersRemoved$ && (this.$EventManager$.$addListeners$(this), this.$_bListenersRemoved$ = !1);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$OnDrillAnimationEnd$ = function $$dvt$$11$$$$ThematicMap$$$$OnDrillAnimationEnd$$() {
    this.$_cleanUpDrilledObjects$();
    this.$Animation$ = null;
    this.$EventManager$.$addListeners$(this);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_cleanUpDrilledObjects$ = function $$dvt$$11$$$$ThematicMap$$$$_cleanUpDrilledObjects$$() {
    if (0 < this.$_drillAnimFadeOutObjs$.length) {
      for (var $dvt$$11$$ = 0;$dvt$$11$$ < this.$_drillAnimFadeOutObjs$.length;$dvt$$11$$++) {
        var $DvtThematicMapControlPanel$$ = this.$_drillAnimFadeOutObjs$[$dvt$$11$$];
        if ($DvtThematicMapControlPanel$$) {
          if ($DvtThematicMapControlPanel$$ instanceof $DvtMapLabel$$) {
            $DvtThematicMapControlPanel$$.reset();
          } else {
            if ($DvtThematicMapControlPanel$$.$isDrilled$ && $DvtThematicMapControlPanel$$.$isDrilled$()) {
              $DvtThematicMapControlPanel$$.$setAlpha$(0);
            } else {
              var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.getParent();
              $DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.removeChild($DvtThematicMapControlPanel$$);
            }
          }
        }
      }
      this.$_drillAnimFadeOutObjs$ = [];
    }
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getShowPopupBehaviors$ = function $$dvt$$11$$$$ThematicMap$$$$getShowPopupBehaviors$$() {
    return this.$_showPopupBehaviors$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$setShowPopupBehaviors$ = function $$dvt$$11$$$$ThematicMap$$$$setShowPopupBehaviors$$($dvt$$11$$) {
    this.$_showPopupBehaviors$ = $dvt$$11$$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getAutomation$ = function $$dvt$$11$$$$ThematicMap$$$$getAutomation$$() {
    this.$Automation$ || (this.$Automation$ = new $DvtThematicMapAutomation$$(this));
    return this.$Automation$;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$GetComponentDescription$ = function $$dvt$$11$$$$ThematicMap$$$$GetComponentDescription$$() {
    return $dvt$$11$$.$Bundle$.$getTranslatedString$($dvt$$11$$.$Bundle$.$UTIL_PREFIX$, "THEMATIC_MAP");
  };
  $dvt$$11$$.$ThematicMap$.prototype.$processLegendEvent$ = function $$dvt$$11$$$$ThematicMap$$$$processLegendEvent$$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$.type == $dvt$$11$$.$ResizeEvent$.$RESIZE_EVENT$ && this.$_legend$ && this.$_legend$.$FireListener$($DvtThematicMapControlPanel$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$highlight$ = function $$dvt$$11$$$$ThematicMap$$$$highlight$$($DvtThematicMapControlPanel$$) {
    this.$Options$.highlightedCategories = $dvt$$11$$.$JsonUtils$.clone($DvtThematicMapControlPanel$$);
    $dvt$$11$$.$CategoryRolloverHandler$.$highlight$($DvtThematicMapControlPanel$$, this.$getNavigableAreas$().concat(this.$getNavigableObjects$()), "any" == this.$Options$.highlightMatch);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$processDefaultHoverEffect$ = function $$dvt$$11$$$$ThematicMap$$$$processDefaultHoverEffect$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getDataItemById$($dvt$$11$$);
    $DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.$processDefaultHoverEffect$($DvtThematicMapControlPanel$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$processDefaultSelectionEffect$ = function $$dvt$$11$$$$ThematicMap$$$$processDefaultSelectionEffect$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getDataItemById$($dvt$$11$$);
    $DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.$processDefaultSelectionEffect$($DvtThematicMapControlPanel$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$processDefaultFocusEffect$ = function $$dvt$$11$$$$ThematicMap$$$$processDefaultFocusEffect$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getDataItemById$($dvt$$11$$);
    $DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.$processDefaultFocusEffect$($DvtThematicMapControlPanel$$);
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_getDataItemById$ = function $$dvt$$11$$$$ThematicMap$$$$_getDataItemById$$($dvt$$11$$) {
    for (var $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_layers$.length;$DvtThematicMapControlPanel$$++) {
      var $DvtThematicMapJsonParser$$ = this.$_layers$[$DvtThematicMapControlPanel$$].$DataLayers$, $DvtThematicMapEventManager$$;
      for ($DvtThematicMapEventManager$$ in $DvtThematicMapJsonParser$$) {
        for (var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$].$_dataObjs$, $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapKeyboardHandler$$.length;$DvtMapDataLayer$$++) {
          if ($DvtThematicMapKeyboardHandler$$[$DvtMapDataLayer$$].getId() === $dvt$$11$$) {
            return $DvtThematicMapKeyboardHandler$$[$DvtMapDataLayer$$];
          }
        }
      }
    }
    return null;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_getAreaFromDataLayer$ = function $$dvt$$11$$$$ThematicMap$$$$_getAreaFromDataLayer$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$_areaObjs$, $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapJsonParser$$.length;$DvtThematicMapEventManager$$++) {
      if ($DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$].$getLocation$() === $dvt$$11$$) {
        return $DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$];
      }
    }
    return null;
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtThematicMapDefaults$$, $dvt$$11$$.$BaseComponentDefaults$);
  $DvtThematicMapDefaults$$.DEFAULT = {animationDuration:500, animationOnDisplay:"none", animationOnDrill:"none", animationOnMapChange:"none", controlPanelBehavior:"hidden", drilling:"none", highlightMatch:"all", hoverBehavior:"none", initialZooming:"none", markerZoomBehavior:"fixed", panning:"none", tooltipDisplay:"auto", touchResponse:"auto", visualEffects:"none", zooming:"none", styleDefaults:{skin:"alta", areaStyle:"background-color:#B8CDEC;border-color:#FFFFFF;", hoverBehaviorDelay:200, dataAreaDefaults:{borderColor:"#FFFFFF", 
  drilledInnerColor:"#FFFFFF", drilledOuterColor:"#000000", hoverColor:"#FFFFFF", opacity:1, selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, dataMarkerDefaults:{borderColor:"#FFFFFF", borderStyle:"solid", borderWidth:.5, color:"#000000", height:8, labelStyle:"font-family:Tahoma;font-size:13pt;color:#000000", opacity:.4, scaleX:1, scaleY:1, shape:"circle", width:8}, labelStyle:"font-family:Tahoma;font-size:11pt;"}, legend:{position:"auto", rendered:!0, layout:{gapRatio:1}}, layout:{gapRatio:null, 
  legendMaxSize:.3, legendGap:10}, resources:{images:{}, translations:{}}};
  $DvtThematicMapDefaults$$.$SKIN_ALTA$ = {styleDefaults:{areaStyle:"background-color:#DDDDDD;border-color:#FFFFFF;", dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:$dvt$$11$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + "color:#333333", opacity:1}, labelStyle:$dvt$$11$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$}};
  $DvtThematicMapDefaults$$.$DEFAULT_AREA_LAYER$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"};
  $DvtThematicMapDefaults$$.$DEFAULT_DATA_LAYER$ = {animationOnDataChange:"none", selectionMode:"none"};
  $DvtThematicMapDefaults$$.prototype.$calcAreaLayerOptions$ = function $$DvtThematicMapDefaults$$$$$calcAreaLayerOptions$$($DvtThematicMapControlPanel$$) {
    return $dvt$$11$$.$JsonUtils$.$merge$($DvtThematicMapControlPanel$$, $DvtThematicMapDefaults$$.$DEFAULT_AREA_LAYER$);
  };
  $DvtThematicMapDefaults$$.prototype.$calcDataLayerOptions$ = function $$DvtThematicMapDefaults$$$$$calcDataLayerOptions$$($DvtThematicMapControlPanel$$) {
    return $dvt$$11$$.$JsonUtils$.$merge$($DvtThematicMapControlPanel$$, $DvtThematicMapDefaults$$.$DEFAULT_DATA_LAYER$);
  };
  $DvtThematicMapDefaults$$.$getGapSize$ = function $$DvtThematicMapDefaults$$$$getGapSize$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    return Math.ceil($DvtThematicMapControlPanel$$ * $dvt$$11$$.$getGapRatio$());
  };
  $dvt$$11$$.$ThematicMap$.prototype.$_getCurrentDragSource$ = function $$dvt$$11$$$$ThematicMap$$$$_getCurrentDragSource$$() {
    for (var $dvt$$11$$ = 0;$dvt$$11$$ < this.$_layers$.length;$dvt$$11$$++) {
      var $DvtThematicMapControlPanel$$ = this.$_layers$[$dvt$$11$$].$DataLayers$, $DvtThematicMapJsonParser$$;
      for ($DvtThematicMapJsonParser$$ in $DvtThematicMapControlPanel$$) {
        var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$_dragSource$;
        if ($DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$.$_dragCandidate$) {
          return $DvtThematicMapEventManager$$;
        }
      }
    }
    return null;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$isDragAvailable$ = function $$dvt$$11$$$$ThematicMap$$$$isDragAvailable$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return ($dvt$$11$$ = this.$_getCurrentDragSource$()) ? $dvt$$11$$.$isDragAvailable$($DvtThematicMapJsonParser$$) : !1;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getDragTransferable$ = function $$dvt$$11$$$$ThematicMap$$$$getDragTransferable$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getCurrentDragSource$();
    return $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$.$getDragTransferable$($dvt$$11$$, $DvtThematicMapControlPanel$$) : null;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getDragOverFeedback$ = function $$dvt$$11$$$$ThematicMap$$$$getDragOverFeedback$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getCurrentDragSource$();
    return $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$.$getDragOverFeedback$($dvt$$11$$, $DvtThematicMapControlPanel$$) : null;
  };
  $dvt$$11$$.$ThematicMap$.prototype.$getDragOffset$ = function $$dvt$$11$$$$ThematicMap$$$$getDragOffset$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_getCurrentDragSource$();
    return $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$.$getDragOffset$($dvt$$11$$, $DvtThematicMapControlPanel$$) : null;
  };
  $dvt$$11$$.$Obj$.$createSubclass$(function() {
  }, $dvt$$11$$.$DropTarget$);
  $dvt$$11$$.$Obj$.$createSubclass$($DvtThematicMapAutomation$$, $dvt$$11$$.$Automation$);
  $DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_tmap$.$getEventManager$().$GetLogicalObject$($DvtThematicMapControlPanel$$);
    if ($DvtThematicMapJsonParser$$ && ($DvtThematicMapJsonParser$$ instanceof $DvtMapAreaPeer$$ || $DvtThematicMapJsonParser$$ instanceof $DvtMapObjPeer$$)) {
      return this.$_getSubId$($DvtThematicMapJsonParser$$);
    }
    var $DvtThematicMapEventManager$$ = this.$_tmap$.$_panZoomCanvas$.$_controlPanel$;
    if ($DvtThematicMapEventManager$$ && ($DvtThematicMapJsonParser$$ = $DvtThematicMapEventManager$$.$getEventManager$().$GetLogicalObject$($DvtThematicMapControlPanel$$)) && $DvtThematicMapJsonParser$$ instanceof $dvt$$11$$.$Button$) {
      $DvtThematicMapControlPanel$$ = "disclosure zoomIn zoomOut zoomToFit drillDown drillUp reset".split(" ");
      for (var $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapKeyboardHandler$$++) {
        if ($DvtThematicMapEventManager$$.$getActionDisplayable$($DvtThematicMapControlPanel$$[$DvtThematicMapKeyboardHandler$$]) === $DvtThematicMapJsonParser$$) {
          return "controlPanel#" + $DvtThematicMapControlPanel$$[$DvtThematicMapKeyboardHandler$$];
        }
      }
    }
    return null;
  };
  $DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($DvtThematicMapControlPanel$$) {
    if ($DvtThematicMapControlPanel$$ == $dvt$$11$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_tmap$);
    }
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.indexOf(":"), $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.indexOf("[");
    return 0 < $DvtThematicMapJsonParser$$ && 0 < $DvtThematicMapEventManager$$ ? this.$_getDomElement$($DvtThematicMapControlPanel$$.substring(0, $DvtThematicMapJsonParser$$), $DvtThematicMapControlPanel$$.substring($DvtThematicMapJsonParser$$ + 1, $DvtThematicMapEventManager$$), parseInt($DvtThematicMapControlPanel$$.substring($DvtThematicMapEventManager$$ + 1, $DvtThematicMapControlPanel$$.length - 1))) : 0 === $DvtThematicMapControlPanel$$.lastIndexOf("controlPanel") && ($DvtThematicMapJsonParser$$ = 
    $DvtThematicMapControlPanel$$.indexOf("#"), 0 < $DvtThematicMapJsonParser$$ && ($DvtThematicMapControlPanel$$ = $DvtThematicMapControlPanel$$.substring($DvtThematicMapJsonParser$$ + 1), ($DvtThematicMapJsonParser$$ = this.$_tmap$.$_panZoomCanvas$.$_controlPanel$) && $DvtThematicMapControlPanel$$)) ? ($DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$.$getActionDisplayable$($DvtThematicMapControlPanel$$)) ? $DvtThematicMapControlPanel$$.$getElem$() : null : null;
  };
  $DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return ($dvt$$11$$ = this.$_getDataObject$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$)) ? ($DvtThematicMapControlPanel$$ = {}, $DvtThematicMapControlPanel$$.color = $dvt$$11$$.$getDatatipColor$(), $DvtThematicMapControlPanel$$.tooltip = $dvt$$11$$.$getShortDesc$(), $DvtThematicMapJsonParser$$ = $dvt$$11$$.$getLabel$(), $DvtThematicMapControlPanel$$.label = $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$.$getTextString$() : null, $DvtThematicMapControlPanel$$.selected = 
    $dvt$$11$$.$isSelected$(), $DvtThematicMapControlPanel$$) : null;
  };
  $DvtThematicMapAutomation$$.prototype.$_getDomElement$ = function $$DvtThematicMapAutomation$$$$$_getDomElement$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return ($dvt$$11$$ = this.$_getDataObject$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$)) ? $dvt$$11$$.$getDisplayable$().$getElem$() : null;
  };
  $DvtThematicMapAutomation$$.prototype.$_getSubId$ = function $$DvtThematicMapAutomation$$$$$_getSubId$$($DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$getDisplayable$(), $DvtThematicMapEventManager$$ = this.$_tmap$.$_layers$, $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapEventManager$$.length;$DvtThematicMapKeyboardHandler$$++) {
      var $DvtMapDataLayer$$ = $DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$].$DataLayers$, $DvtMapCustomAreaLayer$$;
      for ($DvtMapCustomAreaLayer$$ in $DvtMapDataLayer$$) {
        if ($DvtThematicMapJsonParser$$ instanceof $dvt$$11$$.$Path$) {
          for (var $DvtMapAreaLayer$$ = $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$].$_areaObjs$, $DvtMapLayer$$ = 0;$DvtMapLayer$$ < $DvtMapAreaLayer$$.length;$DvtMapLayer$$++) {
            if ($DvtMapAreaLayer$$[$DvtMapLayer$$] === $DvtThematicMapControlPanel$$) {
              return this.$_getDataLayerId$($DvtMapCustomAreaLayer$$) + ":area[" + $DvtMapLayer$$ + "]";
            }
          }
        } else {
          if ($DvtThematicMapJsonParser$$ instanceof $dvt$$11$$.$SimpleMarker$ || $DvtThematicMapJsonParser$$ instanceof $dvt$$11$$.$ImageMarker$) {
            for ($DvtMapAreaLayer$$ = $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$].$_dataObjs$, $DvtMapLayer$$ = 0;$DvtMapLayer$$ < $DvtMapAreaLayer$$.length;$DvtMapLayer$$++) {
              if ($DvtMapAreaLayer$$[$DvtMapLayer$$] === $DvtThematicMapControlPanel$$) {
                return this.$_getDataLayerId$($DvtMapCustomAreaLayer$$) + ":marker[" + $DvtMapLayer$$ + "]";
              }
            }
          }
        }
      }
    }
    return null;
  };
  $DvtThematicMapAutomation$$.prototype.$_getDataObject$ = function $$DvtThematicMapAutomation$$$$$_getDataObject$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    for (var $DvtThematicMapEventManager$$ = this.$_tmap$.$_layers$, $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapEventManager$$.length;$DvtThematicMapKeyboardHandler$$++) {
      var $DvtMapDataLayer$$ = $DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$].$DataLayers$, $DvtMapCustomAreaLayer$$;
      for ($DvtMapCustomAreaLayer$$ in $DvtMapDataLayer$$) {
        if (this.$_getDataLayerId$($DvtMapCustomAreaLayer$$) == $dvt$$11$$) {
          if ("area" == $DvtThematicMapControlPanel$$) {
            return $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$].$_dataAreaCollection$[$DvtThematicMapJsonParser$$];
          }
          if ("marker" == $DvtThematicMapControlPanel$$) {
            return $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$].$_dataMarkerCollection$[$DvtThematicMapJsonParser$$];
          }
        }
      }
    }
    return null;
  };
  $DvtThematicMapAutomation$$.prototype.$_getDataLayerId$ = function $$DvtThematicMapAutomation$$$$$_getDataLayerId$$($dvt$$11$$) {
    var $DvtThematicMapControlPanel$$ = $dvt$$11$$.lastIndexOf(":");
    return 0 < $DvtThematicMapControlPanel$$ ? $dvt$$11$$.substring($DvtThematicMapControlPanel$$ + 1) : $dvt$$11$$;
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtDrillablePath$$, $dvt$$11$$.$Path$);
  $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$ = 2;
  $DvtDrillablePath$$.$SELECTED_INNER_STROKE_WIDTH$ = 1;
  $DvtDrillablePath$$.$SELECTED_OUTER_STROKE_WIDTH$ = 4;
  $DvtDrillablePath$$.$SELECTED_HOVER_OUTER_STROKE_WIDTH$ = 6;
  $DvtDrillablePath$$.$DISCLOSED_INNER_STROKE_WIDTH$ = 2;
  $DvtDrillablePath$$.$DISCLOSED_OUTER_STROKE_WIDTH$ = 4;
  $DvtDrillablePath$$.prototype.Init = function $$DvtDrillablePath$$$$Init$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtDrillablePath$$.$superclass$.Init.call(this, $dvt$$11$$);
    this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = null;
    this.$_isDrilled$ = !1;
    this.Zoom = 1;
    this.$_bSupportsVectorEffects$ = $DvtThematicMapControlPanel$$;
  };
  $DvtDrillablePath$$.prototype.$isDrilled$ = function $$DvtDrillablePath$$$$$isDrilled$$() {
    return this.$_isDrilled$;
  };
  $DvtDrillablePath$$.prototype.$setDrilled$ = function $$DvtDrillablePath$$$$$setDrilled$$($dvt$$11$$) {
    this.$_isDrilled$ != $dvt$$11$$ && (this.$_isDrilled$ = $dvt$$11$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$(null), this.$_disclosedInnerShape$.$setMouseEnabled$(!1), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$(null), this.$_disclosedOuterShape$.$setMouseEnabled$(!1), $dvt$$11$$ = this.getParent(), $dvt$$11$$.$addChild$(this.$_disclosedOuterShape$), $dvt$$11$$.$addChild$(this.$_disclosedInnerShape$), 
    this.$_disclosedInnerShape$.$setStroke$(this.$_adjustStrokeZoomWidth$(this.$_disclosedInnerStroke$, $DvtDrillablePath$$.$DISCLOSED_INNER_STROKE_WIDTH$)), this.$_disclosedOuterShape$.$setStroke$(this.$_adjustStrokeZoomWidth$(this.$_disclosedOuterStroke$, $DvtDrillablePath$$.$DISCLOSED_OUTER_STROKE_WIDTH$)), this.$setMouseEnabled$(!1), this.$IsShowingHoverEffect$ = !1) : (this.$IsShowingHoverEffect$ && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$(this.$_adjustStrokeZoomWidth$(this.$HoverInnerStroke$, 
    1), $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$(!0), this.$setAlpha$(1)));
  };
  $DvtDrillablePath$$.prototype.$setSelected$ = function $$DvtDrillablePath$$$$$setSelected$$($dvt$$11$$) {
    this.$IsSelected$ != $dvt$$11$$ && ($dvt$$11$$ && (this.$IsShowingHoverEffect$ ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedHoverInnerStroke$, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$), this.$SelectedHoverOuterStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedHoverOuterStroke$, $DvtDrillablePath$$.$SELECTED_HOVER_OUTER_STROKE_WIDTH$)) : (this.$SelectedInnerStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedInnerStroke$, 
    $DvtDrillablePath$$.$SELECTED_INNER_STROKE_WIDTH$), this.$SelectedOuterStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedOuterStroke$, $DvtDrillablePath$$.$SELECTED_OUTER_STROKE_WIDTH$))), $DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $dvt$$11$$));
  };
  $DvtDrillablePath$$.prototype.$showHoverEffect$ = function $$DvtDrillablePath$$$$$showHoverEffect$$() {
    this.$isSelected$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedHoverInnerStroke$, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$), this.$SelectedHoverOuterStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedHoverOuterStroke$, $DvtDrillablePath$$.$SELECTED_HOVER_OUTER_STROKE_WIDTH$)) : this.$HoverInnerStroke$ = this.$_adjustStrokeZoomWidth$(this.$HoverInnerStroke$, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$);
    $DvtDrillablePath$$.$superclass$.$showHoverEffect$.call(this);
  };
  $DvtDrillablePath$$.prototype.$CreateSelectedHoverStrokes$ = function $$DvtDrillablePath$$$$$CreateSelectedHoverStrokes$$() {
    this.$SelectedHoverInnerStroke$ || (this.$SelectedHoverInnerStroke$ = this.$HoverInnerStroke$.clone(), this.$SelectedHoverInnerStroke$.$setWidth$($DvtDrillablePath$$.$HOVER_STROKE_WIDTH$), this.$_bSupportsVectorEffects$ && this.$SelectedHoverInnerStroke$.$setFixedWidth$(!0));
    this.$SelectedHoverOuterStroke$ || (this.$SelectedHoverOuterStroke$ = this.$SelectedOuterStroke$.clone(), this.$SelectedHoverOuterStroke$.$setWidth$($DvtDrillablePath$$.$SELECTED_HOVER_OUTER_STROKE_WIDTH$), this.$_bSupportsVectorEffects$ && this.$SelectedHoverOuterStroke$.$setFixedWidth$(!0));
  };
  $DvtDrillablePath$$.prototype.$hideHoverEffect$ = function $$DvtDrillablePath$$$$$hideHoverEffect$$() {
    this.$isSelected$() && (this.$SelectedInnerStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedInnerStroke$, $DvtDrillablePath$$.$SELECTED_INNER_STROKE_WIDTH$), this.$SelectedOuterStroke$ = this.$_adjustStrokeZoomWidth$(this.$SelectedOuterStroke$, $DvtDrillablePath$$.$SELECTED_OUTER_STROKE_WIDTH$));
    $DvtDrillablePath$$.$superclass$.$hideHoverEffect$.call(this);
  };
  $DvtDrillablePath$$.prototype.$setHoverStroke$ = function $$DvtDrillablePath$$$$$setHoverStroke$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtDrillablePath$$.$superclass$.$setHoverStroke$.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$);
    this.$_bSupportsVectorEffects$ && (this.$HoverInnerStroke$ && this.$HoverInnerStroke$.$setFixedWidth$(!0), this.$HoverOuterStroke$ && this.$HoverOuterStroke$.$setFixedWidth$(!0));
    return this;
  };
  $DvtDrillablePath$$.prototype.$setSelectedStroke$ = function $$DvtDrillablePath$$$$$setSelectedStroke$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtDrillablePath$$.$superclass$.$setSelectedStroke$.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$);
    this.$_bSupportsVectorEffects$ && (this.$SelectedInnerStroke$ && this.$SelectedInnerStroke$.$setFixedWidth$(!0), this.$SelectedOuterStroke$ && this.$SelectedOuterStroke$.$setFixedWidth$(!0));
    return this;
  };
  $DvtDrillablePath$$.prototype.$setSelectedHoverStroke$ = function $$DvtDrillablePath$$$$$setSelectedHoverStroke$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtDrillablePath$$.$superclass$.$setSelectedHoverStroke$.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$);
    this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$ && this.$SelectedHoverInnerStroke$.$setFixedWidth$(!0), this.$SelectedHoverOuterStroke$ && this.$SelectedHoverOuterStroke$.$setFixedWidth$(!0));
    return this;
  };
  $DvtDrillablePath$$.prototype.$setDisclosedStroke$ = function $$DvtDrillablePath$$$$$setDisclosedStroke$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    (this.$_disclosedInnerStroke$ = $dvt$$11$$) && this.$_bSupportsVectorEffects$ && this.$_disclosedInnerStroke$.$setFixedWidth$(!0);
    (this.$_disclosedOuterStroke$ = $DvtThematicMapControlPanel$$) && this.$_bSupportsVectorEffects$ && this.$_disclosedOuterStroke$.$setFixedWidth$(!0);
  };
  $DvtDrillablePath$$.prototype.$savePatternFill$ = function $$DvtDrillablePath$$$$$savePatternFill$$($dvt$$11$$) {
    this.$_ptFill$ = $dvt$$11$$;
  };
  $DvtDrillablePath$$.prototype.$_updateStrokeZoomWidth$ = function $$DvtDrillablePath$$$$$_updateStrokeZoomWidth$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    if (!this.$_bSupportsVectorEffects$) {
      var $DvtThematicMapJsonParser$$ = $dvt$$11$$.$getStroke$();
      $DvtThematicMapJsonParser$$ && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.clone(), $DvtThematicMapJsonParser$$.$setWidth$($DvtThematicMapControlPanel$$ / this.Zoom), $dvt$$11$$.$setStroke$($DvtThematicMapJsonParser$$));
    }
  };
  $DvtDrillablePath$$.prototype.$_adjustStrokeZoomWidth$ = function $$DvtDrillablePath$$$$$_adjustStrokeZoomWidth$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    if (!this.$_bSupportsVectorEffects$) {
      var $DvtThematicMapJsonParser$$ = $dvt$$11$$.clone();
      $DvtThematicMapJsonParser$$.$setWidth$($DvtThematicMapControlPanel$$ / this.Zoom);
      return $DvtThematicMapJsonParser$$;
    }
    return $dvt$$11$$;
  };
  $DvtDrillablePath$$.prototype.$handleZoomEvent$ = function $$DvtDrillablePath$$$$$handleZoomEvent$$($dvt$$11$$) {
    this.Zoom = $dvt$$11$$.$_a$;
    this.$isDrilled$() ? (this.$_updateStrokeZoomWidth$(this.$_disclosedInnerShape$, $DvtDrillablePath$$.$DISCLOSED_INNER_STROKE_WIDTH$), this.$_updateStrokeZoomWidth$(this.$_disclosedOuterShape$, $DvtDrillablePath$$.$DISCLOSED_OUTER_STROKE_WIDTH$)) : this.$isSelected$() ? this.$IsShowingHoverEffect$ ? (this.$_updateStrokeZoomWidth$(this.$InnerShape$, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$), this.$_updateStrokeZoomWidth$(this, $DvtDrillablePath$$.$SELECTED_HOVER_OUTER_STROKE_WIDTH$)) : (this.$_updateStrokeZoomWidth$(this.$InnerShape$, 
    $DvtDrillablePath$$.$SELECTED_INNER_STROKE_WIDTH$), this.$_updateStrokeZoomWidth$(this, $DvtDrillablePath$$.$SELECTED_OUTER_STROKE_WIDTH$)) : this.$IsShowingHoverEffect$ ? this.$_updateStrokeZoomWidth$(this.$InnerShape$, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$) : this.$_updateStrokeZoomWidth$(this, 1);
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtCustomDataItem$$, $dvt$$11$$.$Container$);
  $DvtCustomDataItem$$.$_RECT_PADDING$ = 5;
  $DvtCustomDataItem$$.prototype.Init = function $$DvtCustomDataItem$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtCustomDataItem$$.$superclass$.Init.call(this, $DvtThematicMapControlPanel$$);
    this.$_dataItem$ = $DvtThematicMapJsonParser$$;
    $DvtThematicMapJsonParser$$ instanceof $dvt$$11$$.$BaseComponent$ ? (this.$_width$ = $DvtThematicMapJsonParser$$.getWidth(), this.$_height$ = $DvtThematicMapJsonParser$$.getHeight(), this.$addChild$($DvtThematicMapJsonParser$$)) : (this.$getElem$().appendChild($DvtThematicMapJsonParser$$), $DvtThematicMapJsonParser$$ = $dvt$$11$$.$DisplayableUtils$.$getDimensionsForced$($DvtThematicMapControlPanel$$, this), this.$_width$ = $DvtThematicMapJsonParser$$.$w$, this.$_height$ = $DvtThematicMapJsonParser$$.$h$);
    this.$_boundingRect$ = new $dvt$$11$$.Rect($DvtThematicMapControlPanel$$, -$DvtCustomDataItem$$.$_RECT_PADDING$, -$DvtCustomDataItem$$.$_RECT_PADDING$, this.$_width$ + 2 * $DvtCustomDataItem$$.$_RECT_PADDING$, this.$_height$ + 2 * $DvtCustomDataItem$$.$_RECT_PADDING$);
    this.$_boundingRect$.$setInvisibleFill$();
    $DvtThematicMapControlPanel$$ = new $dvt$$11$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedInnerColor, 1, 2);
    $DvtThematicMapJsonParser$$ = new $dvt$$11$$.$SolidStroke$("rgb(235, 236, 237)", 1, 4);
    var $DvtThematicMapKeyboardHandler$$ = new $dvt$$11$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedInnerColor, 1, 2), $DvtMapDataLayer$$ = new $dvt$$11$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedOuterColor, 1, 4), $DvtMapCustomAreaLayer$$ = new $dvt$$11$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedInnerColor, 1, 2);
    $DvtThematicMapEventManager$$ = new $dvt$$11$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedOuterColor, 1, 6);
    this.$_boundingRect$.$setHoverStroke$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$).$setSelectedStroke$($DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$).$setSelectedHoverStroke$($DvtMapCustomAreaLayer$$, $DvtThematicMapEventManager$$);
    this.$addChildAt$(this.$_boundingRect$, 0);
  };
  $DvtCustomDataItem$$.prototype.$setAriaProperty$ = function $$DvtCustomDataItem$$$$$setAriaProperty$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $dvt$$11$$.$Agent$.$isTouchDevice$() ? this.$_boundingRect$.$setAriaProperty$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) : $DvtCustomDataItem$$.$superclass$.$setAriaProperty$.call(this, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  };
  $DvtCustomDataItem$$.prototype.$setAriaRole$ = function $$DvtCustomDataItem$$$$$setAriaRole$$($DvtThematicMapControlPanel$$) {
    $dvt$$11$$.$Agent$.$isTouchDevice$() ? this.$_boundingRect$.$setAriaRole$($DvtThematicMapControlPanel$$) : $DvtCustomDataItem$$.$superclass$.$setAriaRole$.call(this, $DvtThematicMapControlPanel$$);
  };
  $DvtCustomDataItem$$.prototype.getWidth = function $$DvtCustomDataItem$$$$getWidth$() {
    return this.$_width$;
  };
  $DvtCustomDataItem$$.prototype.getHeight = function $$DvtCustomDataItem$$$$getHeight$() {
    return this.$_height$;
  };
  $DvtCustomDataItem$$.prototype.$setSelectable$ = function $$DvtCustomDataItem$$$$$setSelectable$$($dvt$$11$$) {
    this.$_boundingRect$.$setSelectable$($dvt$$11$$);
  };
  $DvtCustomDataItem$$.prototype.$isSelectable$ = function $$DvtCustomDataItem$$$$$isSelectable$$() {
    return this.$_boundingRect$.$isSelectable$();
  };
  $DvtCustomDataItem$$.prototype.$isSelected$ = function $$DvtCustomDataItem$$$$$isSelected$$() {
    return this.$_boundingRect$.$isSelected$();
  };
  $DvtCustomDataItem$$.prototype.$setSelected$ = function $$DvtCustomDataItem$$$$$setSelected$$($dvt$$11$$) {
    this.$_boundingRect$.$setSelected$($dvt$$11$$);
  };
  $DvtCustomDataItem$$.prototype.$showHoverEffect$ = function $$DvtCustomDataItem$$$$$showHoverEffect$$() {
    this.$_boundingRect$.$showHoverEffect$();
  };
  $DvtCustomDataItem$$.prototype.$hideHoverEffect$ = function $$DvtCustomDataItem$$$$$hideHoverEffect$$() {
    this.$_boundingRect$.$hideHoverEffect$();
  };
  $DvtCustomDataItem$$.prototype.$updateRootElement$ = function $$DvtCustomDataItem$$$$$updateRootElement$$($DvtThematicMapControlPanel$$) {
    this.$_dataItem$ !== $DvtThematicMapControlPanel$$ && (this.$_dataItem$ && (this.$_dataItem$ instanceof $dvt$$11$$.$BaseComponent$ ? this.removeChild(this.$_dataItem$) : this.$getElem$().removeChild(this.$_dataItem$)), $DvtThematicMapControlPanel$$ instanceof $dvt$$11$$.$BaseComponent$ ? this.$addChild$($DvtThematicMapControlPanel$$) : this.$getElem$().appendChild($DvtThematicMapControlPanel$$), this.$_dataItem$ = $DvtThematicMapControlPanel$$);
  };
  $DvtCustomDataItem$$.prototype.$fireKeyboardListener$ = function $$DvtCustomDataItem$$$$$fireKeyboardListener$$($DvtThematicMapControlPanel$$) {
    this.$_dataItem$ instanceof $dvt$$11$$.$BaseComponent$ && this.$_dataItem$.$fireKeyboardListener$($DvtThematicMapControlPanel$$);
  };
  var $DvtBaseMapManager$$;
  this ? this.DvtBaseMapManager ? $DvtBaseMapManager$$ = this.DvtBaseMapManager : (this.DvtBaseMapManager = $DvtBaseMapManager$$ = {}, $DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]) : window.DvtBaseMapManager ? $DvtBaseMapManager$$ = window.DvtBaseMapManager : ($DvtBaseMapManager$$ = {}, window.DvtBaseMapManager = $DvtBaseMapManager$$, $DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = 
  [[]]);
  $dvt$$11$$.$Obj$.$createSubclass$($DvtBaseMapManager$$, $dvt$$11$$.$Obj$, "DvtBaseMapManager");
  $DvtBaseMapManager$$.$TYPE_LABELS$ = 0;
  $DvtBaseMapManager$$.$TYPE_PATH$ = 1;
  $DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$ = 2;
  $DvtBaseMapManager$$.$TYPE_LABELINFO$ = 3;
  $DvtBaseMapManager$$.$TYPE_DIM$ = 4;
  $DvtBaseMapManager$$.$_INDEX$ = "__index";
  $DvtBaseMapManager$$.$_GLOBAL_MAPS$ = {};
  $DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapEventManager$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$DvtThematicMapControlPanel$$][$DvtThematicMapJsonParser$$];
    return $DvtThematicMapEventManager$$ && ($DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$TYPE_DIM$]) ? new $dvt$$11$$.$Rectangle$($DvtThematicMapEventManager$$[0], $DvtThematicMapEventManager$$[1], $DvtThematicMapEventManager$$[2], $DvtThematicMapEventManager$$[3]) : null;
  };
  $DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtThematicMapControlPanel$$];
    return $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$[$DvtBaseMapManager$$.$TYPE_LABELINFO$] : null;
  };
  $DvtBaseMapManager$$.$getAreaIds$ = function $$DvtBaseMapManager$$$$getAreaIds$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = [], $DvtThematicMapEventManager$$ = $DvtBaseMapManager$$.$getAreaPaths$($dvt$$11$$, $DvtThematicMapControlPanel$$), $DvtThematicMapKeyboardHandler$$;
    for ($DvtThematicMapKeyboardHandler$$ in $DvtThematicMapEventManager$$) {
      $DvtThematicMapJsonParser$$.push($DvtThematicMapKeyboardHandler$$);
    }
    return $DvtThematicMapJsonParser$$;
  };
  $DvtBaseMapManager$$.$getAreaLabels$ = function $$DvtBaseMapManager$$$$getAreaLabels$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtThematicMapControlPanel$$];
    return $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$[$DvtBaseMapManager$$.$TYPE_LABELS$] : null;
  };
  $DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    $dvt$$11$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtThematicMapControlPanel$$];
    var $DvtThematicMapEventManager$$;
    $dvt$$11$$ && ($DvtThematicMapEventManager$$ = $dvt$$11$$[$DvtBaseMapManager$$.$TYPE_LABELS$]);
    return $DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$[$DvtThematicMapJsonParser$$] ? $DvtThematicMapEventManager$$[$DvtThematicMapJsonParser$$][1] : null;
  };
  $DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapEventManager$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$DvtThematicMapControlPanel$$];
    return $DvtThematicMapEventManager$$ && ($DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$.cities) && ($DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$TYPE_PATH$][$DvtThematicMapJsonParser$$]) ? new $dvt$$11$$.$Point$($DvtThematicMapEventManager$$[0], $DvtThematicMapEventManager$$[1]) : null;
  };
  $DvtBaseMapManager$$.$getCityLabel$ = function $$DvtBaseMapManager$$$$getCityLabel$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$];
    return $DvtThematicMapJsonParser$$ && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.cities) && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$[$DvtBaseMapManager$$.$TYPE_LABELS$][$DvtThematicMapControlPanel$$]) ? $DvtThematicMapJsonParser$$[1] : null;
  };
  $DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapKeyboardHandler$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$DvtThematicMapControlPanel$$];
    if ($DvtThematicMapKeyboardHandler$$ && ($DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$[$DvtThematicMapJsonParser$$])) {
      if (($DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$[$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $DvtThematicMapKeyboardHandler$$[$DvtThematicMapEventManager$$]) {
        return $dvt$$11$$.$Rectangle$.create($DvtThematicMapKeyboardHandler$$[$DvtThematicMapEventManager$$][0]).$getCenter$();
      }
      $DvtThematicMapControlPanel$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$DvtThematicMapControlPanel$$][$DvtThematicMapJsonParser$$][$DvtBaseMapManager$$.$TYPE_PATH$][$DvtThematicMapEventManager$$];
      if (!$DvtThematicMapControlPanel$$) {
        return null;
      }
      $DvtThematicMapControlPanel$$ = $dvt$$11$$.$PathUtils$.$createPathArray$($DvtThematicMapControlPanel$$);
      return $dvt$$11$$.$PathUtils$.$getDimensions$($DvtThematicMapControlPanel$$).$getCenter$();
    }
    return null;
  };
  $DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtThematicMapControlPanel$$];
    return $DvtThematicMapJsonParser$$ ? $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtBaseMapManager$$.$_INDEX$][$DvtThematicMapJsonParser$$.__index + 1] : null;
  };
  $DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtThematicMapControlPanel$$] ? $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtBaseMapManager$$.$_INDEX$][$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtThematicMapControlPanel$$].__index - 1] : null;
  };
  $DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtThematicMapControlPanel$$][$DvtBaseMapManager$$.$TYPE_PATH$];
  };
  $DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtThematicMapControlPanel$$][$DvtBaseMapManager$$.$TYPE_PATH$][$DvtThematicMapJsonParser$$];
  };
  $DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$getChildLayerName$($dvt$$11$$, $DvtThematicMapControlPanel$$);
    return $DvtThematicMapJsonParser$$ && ($DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtThematicMapJsonParser$$][$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $DvtThematicMapJsonParser$$ : [];
  };
  $DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtBaseMapManager$$.$_INDEX$][$DvtThematicMapControlPanel$$];
  };
  $DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$) {
    var $DvtMapLayer$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$];
    $DvtMapLayer$$ || ($DvtMapLayer$$ = {}, $DvtMapLayer$$[$DvtBaseMapManager$$.$_INDEX$] = [], $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$] = $DvtMapLayer$$);
    $dvt$$11$$ = $DvtMapLayer$$[$DvtThematicMapControlPanel$$];
    $dvt$$11$$ || ($dvt$$11$$ = {}, $DvtMapLayer$$[$DvtThematicMapControlPanel$$] = $dvt$$11$$, null != $DvtMapCustomAreaLayer$$ && ($DvtMapLayer$$[$DvtBaseMapManager$$.$_INDEX$][$DvtMapCustomAreaLayer$$] = $DvtThematicMapControlPanel$$));
    $dvt$$11$$[$DvtBaseMapManager$$.$TYPE_LABELS$] = $DvtThematicMapJsonParser$$;
    $dvt$$11$$[$DvtBaseMapManager$$.$TYPE_PATH$] = $DvtThematicMapEventManager$$;
    $dvt$$11$$[$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $DvtThematicMapKeyboardHandler$$;
    $dvt$$11$$[$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $DvtMapDataLayer$$;
    $dvt$$11$$[$DvtBaseMapManager$$.$TYPE_DIM$] = $DvtMapAreaLayer$$;
    $dvt$$11$$[$DvtBaseMapManager$$.$_INDEX$] = $DvtMapCustomAreaLayer$$;
  };
  $DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$];
    $DvtThematicMapEventManager$$ || ($DvtThematicMapEventManager$$ = {}, $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$] = $DvtThematicMapEventManager$$);
    $dvt$$11$$ = $DvtThematicMapEventManager$$[$DvtThematicMapControlPanel$$];
    $dvt$$11$$ || ($dvt$$11$$ = {}, $DvtThematicMapEventManager$$[$DvtThematicMapControlPanel$$] = $dvt$$11$$);
    ($dvt$$11$$ = $DvtThematicMapEventManager$$[$DvtThematicMapControlPanel$$]) && ($dvt$$11$$[$DvtBaseMapManager$$.$TYPE_LABELS$] = $DvtThematicMapJsonParser$$);
  };
  $DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    if ($dvt$$11$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$]) {
      if ($DvtThematicMapControlPanel$$ = $dvt$$11$$[$DvtThematicMapControlPanel$$]) {
        for (var $DvtThematicMapEventManager$$ in $DvtThematicMapJsonParser$$) {
          $DvtThematicMapControlPanel$$[$DvtBaseMapManager$$.$TYPE_LABELS$][$DvtThematicMapEventManager$$] = $DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$];
        }
      }
    }
  };
  $DvtBaseMapManager$$.$_processUnprocessedMaps$ = function $$DvtBaseMapManager$$$$_processUnprocessedMaps$$() {
    var $dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$._UNPROCESSED_MAPS;
    if ($DvtThematicMapJsonParser$$) {
      for ($dvt$$11$$ = 0;$dvt$$11$$ < $DvtThematicMapJsonParser$$[0].length;$dvt$$11$$++) {
        $DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$[0][$dvt$$11$$], $DvtBaseMapManager$$.$registerBaseMapLayer$($DvtThematicMapControlPanel$$[0], $DvtThematicMapControlPanel$$[1], $DvtThematicMapControlPanel$$[2], $DvtThematicMapControlPanel$$[3], $DvtThematicMapControlPanel$$[4], $DvtThematicMapControlPanel$$[5], $DvtThematicMapControlPanel$$[6], $DvtThematicMapControlPanel$$[7]);
      }
      for ($dvt$$11$$ = 0;$dvt$$11$$ < $DvtThematicMapJsonParser$$[1].length;$dvt$$11$$++) {
        $DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$[1][$dvt$$11$$], $DvtBaseMapManager$$.$registerResourceBundle$($DvtThematicMapControlPanel$$[0], $DvtThematicMapControlPanel$$[1], $DvtThematicMapControlPanel$$[2]);
      }
      for ($dvt$$11$$ = 0;$dvt$$11$$ < $DvtThematicMapJsonParser$$[2].length;$dvt$$11$$++) {
        $DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$[2][$dvt$$11$$], $DvtBaseMapManager$$.$updateResourceBundle$($DvtThematicMapControlPanel$$[0], $DvtThematicMapControlPanel$$[1], $DvtThematicMapControlPanel$$[2]);
      }
      $DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []];
    }
    if ($DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES) {
      for ($dvt$$11$$ = 0;$dvt$$11$$ < $DvtThematicMapJsonParser$$[0].length;$dvt$$11$$++) {
        $DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$[0][$dvt$$11$$];
        var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$[1], $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$[2], $DvtMapDataLayer$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$DvtThematicMapControlPanel$$[0]], $DvtMapCustomAreaLayer$$;
        if ($DvtMapDataLayer$$) {
          if ($DvtThematicMapEventManager$$ = $DvtMapDataLayer$$[$DvtThematicMapEventManager$$]) {
            for ($DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $DvtThematicMapControlPanel$$[3], $DvtMapCustomAreaLayer$$ = $DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$TYPE_DIM$], $dvt$$11$$ = $DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$_INDEX$], $DvtThematicMapEventManager$$ = $DvtMapDataLayer$$[$DvtBaseMapManager$$.$_INDEX$], $DvtThematicMapEventManager$$.splice($dvt$$11$$, 0, $DvtThematicMapKeyboardHandler$$), $DvtMapDataLayer$$[$DvtThematicMapKeyboardHandler$$][$DvtBaseMapManager$$.$_INDEX$] = 
            $dvt$$11$$, $dvt$$11$$ += 1;$dvt$$11$$ < $DvtThematicMapEventManager$$.length;$dvt$$11$$++) {
              ($DvtThematicMapKeyboardHandler$$ = $DvtMapDataLayer$$[$DvtThematicMapEventManager$$[$dvt$$11$$]]) && $DvtThematicMapKeyboardHandler$$[$DvtBaseMapManager$$.$_INDEX$]++;
            }
          }
          ($DvtThematicMapEventManager$$ = $DvtMapDataLayer$$[$DvtThematicMapControlPanel$$[2]]) && ($DvtThematicMapEventManager$$[$DvtBaseMapManager$$.$TYPE_DIM$] = $DvtMapCustomAreaLayer$$);
        }
      }
      $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]];
    }
  };
  $DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$) {
    if (0 < $DvtMapCustomAreaLayer$$) {
      $DvtThematicMapJsonParser$$ = 1 / (Math.min($DvtThematicMapKeyboardHandler$$ / $DvtThematicMapJsonParser$$, $DvtMapDataLayer$$ / $DvtThematicMapEventManager$$) * $DvtMapCustomAreaLayer$$);
      if (1 >= $DvtThematicMapJsonParser$$) {
        return $DvtThematicMapControlPanel$$;
      }
      $DvtThematicMapEventManager$$ = [];
      if ($DvtThematicMapControlPanel$$) {
        for (var $DvtMapAreaLayer$$ in $DvtThematicMapControlPanel$$) {
          $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$[$DvtMapAreaLayer$$], isNaN($DvtThematicMapKeyboardHandler$$) && ($DvtThematicMapKeyboardHandler$$ = $dvt$$11$$.$PathUtils$.$createPathArray$($DvtThematicMapControlPanel$$[$DvtMapAreaLayer$$])), $DvtThematicMapEventManager$$[$DvtMapAreaLayer$$] = $dvt$$11$$.$PathUtils$.$simplifyPath$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapJsonParser$$);
        }
      }
      return $DvtThematicMapEventManager$$;
    }
    return $DvtThematicMapControlPanel$$;
  };
  $DvtBaseMapManager$$.$getLayerIds$ = function $$DvtBaseMapManager$$$$getLayerIds$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtBaseMapManager$$.$_processUnprocessedMaps$();
    var $DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$dvt$$11$$][$DvtThematicMapControlPanel$$], $DvtThematicMapEventManager$$ = {};
    if ($DvtThematicMapJsonParser$$) {
      var $DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$[$DvtBaseMapManager$$.$TYPE_LABELS$], $DvtThematicMapKeyboardHandler$$;
      for ($DvtThematicMapKeyboardHandler$$ in $DvtThematicMapJsonParser$$) {
        $DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$] = $DvtThematicMapJsonParser$$[$DvtThematicMapKeyboardHandler$$][1];
      }
      if ("cities" !== $DvtThematicMapControlPanel$$ && !$DvtThematicMapJsonParser$$) {
        for ($DvtThematicMapKeyboardHandler$$ = $DvtBaseMapManager$$.$getAreaIds$($dvt$$11$$, $DvtThematicMapControlPanel$$), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapKeyboardHandler$$.length;$DvtThematicMapJsonParser$$++) {
          $DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$[$DvtThematicMapJsonParser$$]] = null;
        }
      }
    }
    return $DvtThematicMapEventManager$$;
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtThematicMapCategoryWrapper$$, $dvt$$11$$.$Obj$);
  $DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    this.$_displayable$ = $dvt$$11$$;
    this.$_category$ = $DvtThematicMapControlPanel$$;
  };
  $DvtThematicMapCategoryWrapper$$.prototype.$getCategories$ = function $$DvtThematicMapCategoryWrapper$$$$$getCategories$$() {
    return this.$_category$;
  };
  $DvtThematicMapCategoryWrapper$$.prototype.$getDisplayables$ = function $$DvtThematicMapCategoryWrapper$$$$$getDisplayables$$() {
    return [this.$_displayable$];
  };
  $dvt$$11$$.$MapDrillEvent$ = function $$dvt$$11$$$$MapDrillEvent$$($DvtThematicMapControlPanel$$) {
    this.Init($dvt$$11$$.$MapDrillEvent$.$TYPE$);
    this.$_drillType$ = $DvtThematicMapControlPanel$$;
  };
  $dvt$$11$$.$Obj$.$createSubclass$($dvt$$11$$.$MapDrillEvent$, $dvt$$11$$.$BaseComponentEvent$);
  $dvt$$11$$.$MapDrillEvent$.$TYPE$ = "drill";
  $dvt$$11$$.$MapDrillEvent$.$DRILL_UP$ = 0;
  $dvt$$11$$.$MapDrillEvent$.$DRILL_DOWN$ = 1;
  $dvt$$11$$.$MapDrillEvent$.$RESET$ = 2;
  $dvt$$11$$.$MapDrillEvent$.prototype.$setDisclosed$ = function $$dvt$$11$$$$MapDrillEvent$$$$setDisclosed$$($dvt$$11$$) {
    this.$_disclosed$ = $dvt$$11$$;
  };
  $dvt$$11$$.$MapActionEvent$ = function $$dvt$$11$$$$MapActionEvent$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    this.Init($dvt$$11$$.$MapActionEvent$.$TYPE$);
    this.item = $DvtThematicMapControlPanel$$;
    this.rowKey = $DvtThematicMapJsonParser$$;
    this.action = $DvtThematicMapEventManager$$;
  };
  $dvt$$11$$.$Obj$.$createSubclass$($dvt$$11$$.$MapActionEvent$, $dvt$$11$$.$BaseComponentEvent$);
  $dvt$$11$$.$MapActionEvent$.$TYPE$ = "action";
  $dvt$$11$$.$MapActionEvent$.prototype.$getClientId$ = function $$dvt$$11$$$$MapActionEvent$$$$getClientId$$() {
    return this.item;
  };
  $dvt$$11$$.$MapActionEvent$.prototype.$getAction$ = function $$dvt$$11$$$$MapActionEvent$$$$getAction$$() {
    return this.action;
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtMapLabel$$, $dvt$$11$$.$OutputText$);
  $DvtMapLabel$$.prototype.Init = function $$DvtMapLabel$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$) {
    $DvtMapLabel$$.$superclass$.Init.call(this, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, 0, 0);
    this.$_bSupportsVectorEffects$ = $DvtMapCustomAreaLayer$$;
    this.$_boundRectangle$ = [];
    this.$setMouseEnabled$(!1);
    this.$alignCenter$();
    this.$alignMiddle$();
    this.$_center$ = null;
    this.$_labelDisplay$ = $DvtThematicMapKeyboardHandler$$;
    this.$_parentContainer$ = $DvtMapDataLayer$$;
    if ($DvtThematicMapEventManager$$ && (this.$_boundRectangle$.push($dvt$$11$$.$Rectangle$.create($DvtThematicMapEventManager$$[0])), 1 < $DvtThematicMapEventManager$$.length)) {
      for (this.$_leaderLines$ = [], $DvtThematicMapJsonParser$$ = 1;$DvtThematicMapJsonParser$$ < $DvtThematicMapEventManager$$.length;$DvtThematicMapJsonParser$$++) {
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapEventManager$$[$DvtThematicMapJsonParser$$], this.$_boundRectangle$.push($dvt$$11$$.$Rectangle$.create($DvtThematicMapKeyboardHandler$$[0])), $DvtThematicMapKeyboardHandler$$ = new $dvt$$11$$.$Polyline$($DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$[1]), $DvtThematicMapKeyboardHandler$$.$setPixelHinting$(), $DvtMapDataLayer$$ = new $dvt$$11$$.$SolidStroke$("#000000"), this.$_bSupportsVectorEffects$ && $DvtMapDataLayer$$.$setFixedWidth$(!0), 
        $DvtThematicMapKeyboardHandler$$.$setStroke$($DvtMapDataLayer$$), this.$_leaderLines$.push($DvtThematicMapKeyboardHandler$$);
      }
    }
  };
  $DvtMapLabel$$.prototype.$addBounds$ = function $$DvtMapLabel$$$$$addBounds$$($dvt$$11$$) {
    this.$_boundRectangle$.push($dvt$$11$$);
  };
  $DvtMapLabel$$.prototype.$hasBounds$ = function $$DvtMapLabel$$$$$hasBounds$$() {
    return 0 < this.$_boundRectangle$.length;
  };
  $DvtMapLabel$$.prototype.update = function $$DvtMapLabel$$$$update$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$ = $DvtThematicMapControlPanel$$.$_a$;
    for (var $DvtThematicMapJsonParser$$ = -1, $DvtThematicMapEventManager$$ = $dvt$$11$$.$TextUtils$.$guessTextDimensions$(this), $DvtThematicMapKeyboardHandler$$ = !1, $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < this.$_boundRectangle$.length;$DvtMapDataLayer$$++) {
      var $DvtMapCustomAreaLayer$$ = this.$_boundRectangle$[$DvtMapDataLayer$$].$w$ * $DvtThematicMapControlPanel$$;
      if ($DvtThematicMapEventManager$$.$h$ <= this.$_boundRectangle$[$DvtMapDataLayer$$].$h$ * $DvtThematicMapControlPanel$$) {
        if ($DvtThematicMapEventManager$$.$w$ <= $DvtMapCustomAreaLayer$$) {
          $DvtThematicMapJsonParser$$ = $DvtMapDataLayer$$;
          break;
        } else {
          if (this.getParent() || ($DvtThematicMapKeyboardHandler$$ = !0, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $DvtMapCustomAreaLayer$$) {
            $DvtThematicMapJsonParser$$ = $DvtMapDataLayer$$;
            break;
          }
        }
      }
    }
    -1 == $DvtThematicMapJsonParser$$ && "on" == this.$_labelDisplay$ && ($DvtThematicMapJsonParser$$ = this.$_boundRectangle$.length - 1);
    this.$_currentState$ != $DvtThematicMapJsonParser$$ ? (-1 == $DvtThematicMapJsonParser$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $DvtThematicMapEventManager$$ = this.$_boundRectangle$[$DvtThematicMapJsonParser$$].$getCenter$(), this.$setCenter$($DvtThematicMapEventManager$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = null, 0 < $DvtThematicMapJsonParser$$ ? (this.$_leaderLine$ = this.$_leaderLines$[$DvtThematicMapJsonParser$$ - 
    1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $DvtThematicMapKeyboardHandler$$ = this.$getCSSStyle$(), $DvtThematicMapKeyboardHandler$$.$setStyle$($dvt$$11$$.$CSSStyle$.$COLOR$, "#000000"), this.$setCSSStyle$($DvtThematicMapKeyboardHandler$$), $DvtThematicMapKeyboardHandler$$ = this.$_boundRectangle$[$DvtThematicMapJsonParser$$], $DvtMapDataLayer$$ = this.$_leaderLine$.$getPoints$(), $DvtMapCustomAreaLayer$$ = $DvtMapDataLayer$$.length, $DvtThematicMapKeyboardHandler$$.x > $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$ - 
    2] ? (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new $dvt$$11$$.$Point$($DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapEventManager$$.y))) : $DvtThematicMapKeyboardHandler$$.y > $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new $dvt$$11$$.$Point$($DvtThematicMapEventManager$$.x, $DvtThematicMapKeyboardHandler$$.y))) : $DvtThematicMapKeyboardHandler$$.x + $DvtThematicMapKeyboardHandler$$.$w$ < $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$ - 
    2] ? (this.$alignRight$(), this.$alignMiddle$(), this.$setCenter$(new $dvt$$11$$.$Point$($DvtThematicMapKeyboardHandler$$.x + $DvtThematicMapKeyboardHandler$$.$w$, $DvtThematicMapEventManager$$.y))) : $DvtThematicMapKeyboardHandler$$.y + $DvtThematicMapKeyboardHandler$$.$h$ < $DvtMapDataLayer$$[$DvtMapCustomAreaLayer$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new $dvt$$11$$.$Point$($DvtThematicMapEventManager$$.x, $DvtThematicMapKeyboardHandler$$.y + $DvtThematicMapKeyboardHandler$$.$h$)))) : 
    (this.$alignCenter$(), this.$alignMiddle$(), $DvtThematicMapKeyboardHandler$$ = this.$getCSSStyle$(), $DvtThematicMapKeyboardHandler$$.$setStyle$($dvt$$11$$.$CSSStyle$.$COLOR$, this.$_labelColor$), this.$setCSSStyle$($DvtThematicMapKeyboardHandler$$)))), this.$_currentState$ = $DvtThematicMapJsonParser$$) : -1 == $DvtThematicMapJsonParser$$ && $DvtThematicMapKeyboardHandler$$ && this.$_parentContainer$.removeChild(this);
    -1 != this.$_currentState$ && ($DvtThematicMapJsonParser$$ = new $dvt$$11$$.$Matrix$, $DvtThematicMapJsonParser$$.translate($DvtThematicMapControlPanel$$ * this.$_center$.x - this.$_center$.x, $DvtThematicMapControlPanel$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($DvtThematicMapJsonParser$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new $dvt$$11$$.$Matrix$($DvtThematicMapControlPanel$$, 0, 0, $DvtThematicMapControlPanel$$)), this.$_bSupportsVectorEffects$ || ($DvtThematicMapJsonParser$$ = 
    this.$_leaderLine$.$getStroke$().clone(), $DvtThematicMapJsonParser$$.$setWidth$(1 / $DvtThematicMapControlPanel$$), this.$_leaderLine$.$setStroke$($DvtThematicMapJsonParser$$))));
  };
  $DvtMapLabel$$.prototype.$setCenter$ = function $$DvtMapLabel$$$$$setCenter$$($dvt$$11$$) {
    this.$_center$ = $dvt$$11$$;
    this.$setX$($dvt$$11$$.x);
    this.$setY$($dvt$$11$$.y);
  };
  $DvtMapLabel$$.prototype.$getCenter$ = function $$DvtMapLabel$$$$$getCenter$$() {
    return this.$_center$;
  };
  $DvtMapLabel$$.prototype.$setCSSStyle$ = function $$DvtMapLabel$$$$$setCSSStyle$$($DvtThematicMapControlPanel$$) {
    $DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $DvtThematicMapControlPanel$$);
    this.$_labelColor$ || (this.$_labelColor$ = $DvtThematicMapControlPanel$$.$getStyle$($dvt$$11$$.$CSSStyle$.$COLOR$));
  };
  $DvtMapLabel$$.prototype.reset = function $$DvtMapLabel$$$$reset$() {
    this.$_parentContainer$.removeChild(this);
    this.$_currentState$ = -1;
    this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = null);
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtMapObjPeer$$, $dvt$$11$$.$Obj$);
  $DvtMapObjPeer$$.$ANIMATION_DELETE_PRIORITY$ = 0;
  $DvtMapObjPeer$$.$ANIMATION_UPDATE_PRIORITY$ = 1;
  $DvtMapObjPeer$$.$ANIMATION_INSERT_PRIORITY$ = 2;
  $DvtMapObjPeer$$.prototype.Init = function $$DvtMapObjPeer$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    this.$_data$ = $DvtThematicMapControlPanel$$;
    this.$_dataLayer$ = $DvtThematicMapJsonParser$$;
    this.$Displayable$ = $DvtThematicMapEventManager$$;
    this.$_isShowingKeyboardFocusEffect$ = this.$_isShowingHoverEffect$ = this.$_isSelected$ = !1;
    this.$Displayable$.$setDataColor$ && this.$Displayable$.$setDataColor$($DvtThematicMapControlPanel$$.color);
    this.$_label$ = $DvtThematicMapKeyboardHandler$$;
    this.$_center$ = $DvtMapDataLayer$$;
    this.$_zoom$ = 1;
    this.$_view$ = $DvtThematicMapJsonParser$$.$_tmap$;
    this.$_data$.categories || this.$_label$ && (this.$_data$.categories = [this.$_label$.$getTextString$()]);
    $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.location;
    this.$_locationName$;
    $DvtThematicMapEventManager$$ && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$_parentLayer$, this.$_locationName$ = !($DvtThematicMapJsonParser$$ instanceof $DvtMapAreaLayer$$) || $DvtThematicMapJsonParser$$ instanceof $DvtMapCustomAreaLayer$$ ? $DvtBaseMapManager$$.$getCityLabel$(this.$_view$.$_mapName$, $DvtThematicMapEventManager$$) : $DvtBaseMapManager$$.$getLongAreaLabel$(this.$_view$.$_mapName$, $DvtThematicMapJsonParser$$.$LayerName$, $DvtThematicMapEventManager$$));
    "auto" == this.$_view$.$_displayTooltips$ && this.$_locationName$ && (this.$_data$.shortDesc = $DvtThematicMapControlPanel$$.shortDesc ? this.$_locationName$ + ": " + $DvtThematicMapControlPanel$$.shortDesc : this.$_locationName$);
    this.$Displayable$ && ($DvtThematicMapControlPanel$$.destination ? (this.$Displayable$.$setAriaRole$("link"), this.$_linkCallback$ = $dvt$$11$$.$ToolkitUtils$.$getLinkCallback$("_blank", $DvtThematicMapControlPanel$$.destination)) : this.$Displayable$.$setAriaRole$("img"));
    this.$UpdateAriaLabel$();
  };
  $DvtMapObjPeer$$.prototype.getId = function $$DvtMapObjPeer$$$$getId$() {
    return this.$_data$.id;
  };
  $DvtMapObjPeer$$.prototype.$getClientId$ = function $$DvtMapObjPeer$$$$$getClientId$$() {
    return this.$_data$.clientId;
  };
  $DvtMapObjPeer$$.prototype.$getLocation$ = function $$DvtMapObjPeer$$$$$getLocation$$() {
    return this.$_data$.location;
  };
  $DvtMapObjPeer$$.prototype.$getCenter$ = function $$DvtMapObjPeer$$$$$getCenter$$() {
    return this.$_center$;
  };
  $DvtMapObjPeer$$.prototype.$setCenter$ = function $$DvtMapObjPeer$$$$$setCenter$$($dvt$$11$$) {
    this.$_center$ = $dvt$$11$$;
    this.$__recenter$();
  };
  $DvtMapObjPeer$$.prototype.$getDisplayable$ = function $$DvtMapObjPeer$$$$$getDisplayable$$() {
    return this.$Displayable$;
  };
  $DvtMapObjPeer$$.prototype.$getLabel$ = function $$DvtMapObjPeer$$$$$getLabel$$() {
    return this.$_label$;
  };
  $DvtMapObjPeer$$.prototype.$getDataLayer$ = function $$DvtMapObjPeer$$$$$getDataLayer$$() {
    return this.$_dataLayer$;
  };
  $DvtMapObjPeer$$.prototype.$hasAction$ = function $$DvtMapObjPeer$$$$$hasAction$$() {
    return null != this.$getAction$();
  };
  $DvtMapObjPeer$$.prototype.$getAction$ = function $$DvtMapObjPeer$$$$$getAction$$() {
    return this.$_data$.action;
  };
  $DvtMapObjPeer$$.prototype.$setVisible$ = function $$DvtMapObjPeer$$$$$setVisible$$($dvt$$11$$) {
    this.$Displayable$.$setVisible$($dvt$$11$$);
    this.$_label$ && this.$_label$.$setVisible$($dvt$$11$$);
  };
  $DvtMapObjPeer$$.prototype.$getShortDesc$ = function $$DvtMapObjPeer$$$$$getShortDesc$$() {
    return this.$_data$.shortDesc;
  };
  $DvtMapObjPeer$$.prototype.$removeLabel$ = function $$DvtMapObjPeer$$$$$removeLabel$$() {
    this.$_label$ = null;
  };
  $DvtMapObjPeer$$.prototype.$getSize$ = function $$DvtMapObjPeer$$$$$getSize$$() {
    return this.$Displayable$.getWidth ? this.$Displayable$.getWidth() * this.$Displayable$.getHeight() : 0;
  };
  $DvtMapObjPeer$$.prototype.$getCategories$ = function $$DvtMapObjPeer$$$$$getCategories$$() {
    return this.$_data$.categories;
  };
  $DvtMapObjPeer$$.prototype.$getDatatip$ = function $$DvtMapObjPeer$$$$$getDatatip$$() {
    if ("none" != this.$_view$.$_displayTooltips$) {
      var $dvt$$11$$ = this.$_view$.$getOptions$()._tooltip;
      return $dvt$$11$$ ? this.$_view$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($dvt$$11$$, this.$getDataContext$()) : this.$getShortDesc$();
    }
    return null;
  };
  $DvtMapObjPeer$$.prototype.$getDataContext$ = function $$DvtMapObjPeer$$$$$getDataContext$$() {
    return {color:this.$getDatatipColor$(), component:this.$_view$.$getOptions$()._widgetConstructor, data:this.$_data$, id:this.getId(), label:this.$_label$ ? this.$_label$.$getTextString$() : null, location:this.$getLocation$(), locationName:this.$_locationName$, tooltip:this.$getShortDesc$(), x:this.$_data$.x, y:this.$_data$.y};
  };
  $DvtMapObjPeer$$.prototype.$getLinkCallback$ = function $$DvtMapObjPeer$$$$$getLinkCallback$$() {
    return this.$_linkCallback$;
  };
  $DvtMapObjPeer$$.prototype.$getDatatipColor$ = function $$DvtMapObjPeer$$$$$getDatatipColor$$() {
    return this.$_data$.color ? this.$_data$.color : "#000000";
  };
  $DvtMapObjPeer$$.prototype.$getAriaLabel$ = function $$DvtMapObjPeer$$$$$getAriaLabel$$() {
    var $DvtThematicMapControlPanel$$ = [];
    this.$isSelectable$() && $DvtThematicMapControlPanel$$.push($dvt$$11$$.$Bundle$.$getTranslatedString$($dvt$$11$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    return $dvt$$11$$.$Displayable$.$generateAriaLabel$(this.$getShortDesc$(), $DvtThematicMapControlPanel$$);
  };
  $DvtMapObjPeer$$.prototype.$getDisplayables$ = function $$DvtMapObjPeer$$$$$getDisplayables$$() {
    return [this.$getDisplayable$()];
  };
  $DvtMapObjPeer$$.prototype.$UpdateAriaLabel$ = function $$DvtMapObjPeer$$$$$UpdateAriaLabel$$() {
    if (!$dvt$$11$$.$Agent$.$deferAriaCreation$()) {
      var $DvtThematicMapControlPanel$$ = this.$getAriaLabel$();
      $DvtThematicMapControlPanel$$ && this.$Displayable$.$setAriaProperty$("label", $DvtThematicMapControlPanel$$);
    }
  };
  $DvtMapObjPeer$$.prototype.$setSelectable$ = function $$DvtMapObjPeer$$$$$setSelectable$$($dvt$$11$$) {
    var $DvtThematicMapControlPanel$$ = this.$getLabel$();
    this.$Displayable$.$setSelectable$ && (this.$Displayable$.$setSelectable$($dvt$$11$$), $DvtThematicMapControlPanel$$ && $dvt$$11$$ && $DvtThematicMapControlPanel$$.setCursor("pointer"));
    this.$_data$.destination && (this.$Displayable$.setCursor("pointer"), $DvtThematicMapControlPanel$$ && $DvtThematicMapControlPanel$$.setCursor("pointer"));
  };
  $DvtMapObjPeer$$.prototype.$isSelectable$ = function $$DvtMapObjPeer$$$$$isSelectable$$() {
    return this.$Displayable$.$isSelectable$ ? this.$Displayable$.$isSelectable$() : !1;
  };
  $DvtMapObjPeer$$.prototype.$isSelected$ = function $$DvtMapObjPeer$$$$$isSelected$$() {
    return this.$_isSelected$;
  };
  $DvtMapObjPeer$$.prototype.$setSelected$ = function $$DvtMapObjPeer$$$$$setSelected$$($dvt$$11$$) {
    if (this.$isSelectable$()) {
      var $DvtThematicMapControlPanel$$ = this.$_getState$();
      this.$_isSelected$ = $dvt$$11$$;
      this.$_dataLayer$.$getOptions$().selectionRenderer ? this.$_callCustomRenderer$(this.$_dataLayer$.$getOptions$().selectionRenderer, this.$_getState$(), $DvtThematicMapControlPanel$$) : this.$processDefaultSelectionEffect$($dvt$$11$$);
      this.$UpdateAriaLabel$();
    }
  };
  $DvtMapObjPeer$$.prototype.$showHoverEffect$ = function $$DvtMapObjPeer$$$$$showHoverEffect$$() {
    var $dvt$$11$$ = this.$_getState$();
    this.$_isShowingHoverEffect$ = !0;
    this.$_dataLayer$.$getOptions$().hoverRenderer ? this.$_callCustomRenderer$(this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $dvt$$11$$) : this.$processDefaultHoverEffect$(!0);
  };
  $DvtMapObjPeer$$.prototype.$hideHoverEffect$ = function $$DvtMapObjPeer$$$$$hideHoverEffect$$() {
    var $dvt$$11$$ = this.$_getState$();
    this.$_isShowingHoverEffect$ = !1;
    this.$_dataLayer$.$getOptions$().hoverRenderer ? this.$_callCustomRenderer$(this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $dvt$$11$$) : this.$processDefaultHoverEffect$(!1);
  };
  $DvtMapObjPeer$$.prototype.$setShowPopupBehaviors$ = function $$DvtMapObjPeer$$$$$setShowPopupBehaviors$$($dvt$$11$$) {
    this.$_showPopupBehaviors$ = $dvt$$11$$;
  };
  $DvtMapObjPeer$$.prototype.$getShowPopupBehaviors$ = function $$DvtMapObjPeer$$$$$getShowPopupBehaviors$$() {
    return this.$_showPopupBehaviors$;
  };
  $DvtMapObjPeer$$.prototype.$isDragAvailable$ = function $$DvtMapObjPeer$$$$$isDragAvailable$$($dvt$$11$$) {
    for (var $DvtThematicMapControlPanel$$ = this.$_dataLayer$.$getClientId$(), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $dvt$$11$$.length && $dvt$$11$$[$DvtThematicMapJsonParser$$] != $DvtThematicMapControlPanel$$;$DvtThematicMapJsonParser$$++) {
    }
    return $DvtThematicMapControlPanel$$;
  };
  $DvtMapObjPeer$$.prototype.$getDragTransferable$ = function $$DvtMapObjPeer$$$$$getDragTransferable$$() {
    return this.$_dataLayer$.$__getDragTransferable$(this);
  };
  $DvtMapObjPeer$$.prototype.$getDragFeedback$ = function $$DvtMapObjPeer$$$$$getDragFeedback$$() {
    return this.$_dataLayer$.$__getDragFeedback$();
  };
  $DvtMapObjPeer$$.prototype.$getNextNavigable$ = function $$DvtMapObjPeer$$$$$getNextNavigable$$($DvtThematicMapControlPanel$$) {
    return $DvtThematicMapControlPanel$$.type == $dvt$$11$$.MouseEvent.$CLICK$ ? this : $DvtThematicMapControlPanel$$.keyCode == $dvt$$11$$.KeyboardEvent.$SPACE$ && $DvtThematicMapControlPanel$$.ctrlKey ? this : $dvt$$11$$.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $DvtThematicMapControlPanel$$, this.$GetNavigables$());
  };
  $DvtMapObjPeer$$.prototype.$GetNavigables$ = function $$DvtMapObjPeer$$$$$GetNavigables$$() {
    return this.$getDataLayer$().$_tmap$.$getNavigableObjects$();
  };
  $DvtMapObjPeer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtMapObjPeer$$$$$getKeyboardBoundingBox$$($DvtThematicMapControlPanel$$) {
    return this.$Displayable$.getParent() ? this.$Displayable$ instanceof $DvtCustomDataItem$$ ? this.$Displayable$.$getDimensions$($DvtThematicMapControlPanel$$ ? $DvtThematicMapControlPanel$$ : this.$Displayable$.$getCtx$().$_stage$) : this.$Displayable$.$getDimensions$($DvtThematicMapControlPanel$$) : new $dvt$$11$$.$Rectangle$(0, 0, 0, 0);
  };
  $DvtMapObjPeer$$.prototype.$getTargetElem$ = function $$DvtMapObjPeer$$$$$getTargetElem$$() {
    return this.$Displayable$.$getElem$();
  };
  $DvtMapObjPeer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtMapObjPeer$$$$$showKeyboardFocusEffect$$() {
    var $dvt$$11$$ = this.$_getState$();
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$_dataLayer$.$getOptions$().focusRenderer ? this.$_callCustomRenderer$(this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $dvt$$11$$) : this.$processDefaultFocusEffect$(!0);
  };
  $DvtMapObjPeer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtMapObjPeer$$$$$hideKeyboardFocusEffect$$() {
    if (this.$isShowingKeyboardFocusEffect$()) {
      var $dvt$$11$$ = this.$_getState$();
      this.$_isShowingKeyboardFocusEffect$ = !1;
      this.$_dataLayer$.$getOptions$().focusRenderer ? this.$_callCustomRenderer$(this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $dvt$$11$$) : this.$processDefaultFocusEffect$(!1);
    }
  };
  $DvtMapObjPeer$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtMapObjPeer$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtMapObjPeer$$.prototype.$HandleZoomEvent$ = function $$DvtMapObjPeer$$$$$HandleZoomEvent$$($dvt$$11$$) {
    this.$Displayable$.getParent() && (this.$_zoom$ = $dvt$$11$$.$_a$, this.$__recenter$());
  };
  $DvtMapObjPeer$$.prototype.$positionLabel$ = function $$DvtMapObjPeer$$$$$positionLabel$$() {
    if (this.$_label$) {
      this.$_label$.$alignCenter$();
      var $DvtThematicMapControlPanel$$ = this.$Displayable$.$getCx$() * this.$_zoom$, $DvtThematicMapJsonParser$$ = this.$Displayable$.$getCy$() * this.$_zoom$, $DvtThematicMapEventManager$$ = this.$Displayable$.getHeight(), $DvtThematicMapKeyboardHandler$$ = this.$Displayable$ instanceof $dvt$$11$$.$SimpleMarker$ ? this.$Displayable$.$getType$() : "image", $DvtMapDataLayer$$ = this.$_data$.labelPosition;
      "top" == $DvtMapDataLayer$$ ? ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$ - $DvtThematicMapEventManager$$ / 2 - 4, this.$_label$.$alignBottom$()) : "bottom" == $DvtMapDataLayer$$ ? ($DvtThematicMapJsonParser$$ += $DvtThematicMapEventManager$$ / 2, this.$_label$.$alignTop$()) : ($DvtThematicMapJsonParser$$ = $DvtThematicMapKeyboardHandler$$ == $dvt$$11$$.$SimpleMarker$.$TRIANGLE_UP$ ? $DvtThematicMapJsonParser$$ + $DvtThematicMapEventManager$$ / 6 : $DvtThematicMapKeyboardHandler$$ == 
      $dvt$$11$$.$SimpleMarker$.$TRIANGLE_DOWN$ ? $DvtThematicMapJsonParser$$ - $DvtThematicMapEventManager$$ / 6 : $DvtThematicMapJsonParser$$, this.$_label$.$alignMiddle$());
      this.$_label$.$setX$($DvtThematicMapControlPanel$$).$setY$($DvtThematicMapJsonParser$$);
    }
  };
  $DvtMapObjPeer$$.prototype.$__recenter$ = function $$DvtMapObjPeer$$$$$__recenter$$() {
    var $DvtThematicMapControlPanel$$ = this.$Displayable$.getWidth(), $DvtThematicMapJsonParser$$ = this.$Displayable$.getHeight();
    if (null != $DvtThematicMapControlPanel$$ && null != $DvtThematicMapJsonParser$$ && this.$Displayable$.getParent()) {
      var $DvtThematicMapEventManager$$ = 0, $DvtThematicMapKeyboardHandler$$ = this.$_center$.x, $DvtThematicMapEventManager$$ = this.$_center$.y;
      this.$Displayable$.$getRotation$ && ($DvtThematicMapEventManager$$ = this.$Displayable$.$getRotation$(), $DvtThematicMapKeyboardHandler$$ = this.$_center$.x * Math.cos($DvtThematicMapEventManager$$) - this.$_center$.y * Math.sin($DvtThematicMapEventManager$$), $DvtThematicMapEventManager$$ = this.$_center$.x * Math.sin($DvtThematicMapEventManager$$) + this.$_center$.y * Math.cos($DvtThematicMapEventManager$$));
      $DvtThematicMapKeyboardHandler$$ = this.$_center$.x * this.$_zoom$ - $DvtThematicMapKeyboardHandler$$;
      $DvtThematicMapEventManager$$ = this.$_center$.y * this.$_zoom$ - $DvtThematicMapEventManager$$;
      this.$Displayable$ instanceof $DvtCustomDataItem$$ && ($DvtThematicMapKeyboardHandler$$ += this.$_center$.x - $DvtThematicMapControlPanel$$ / 2, $DvtThematicMapEventManager$$ += this.$_center$.y - $DvtThematicMapJsonParser$$ / 2);
      this.$Displayable$.$setTranslate$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapEventManager$$);
      $dvt$$11$$.$Agent$.$workaroundFirefoxRepaint$(this.$Displayable$);
      this.$positionLabel$();
    }
  };
  $DvtMapObjPeer$$.prototype.$animateUpdate$ = function $$DvtMapObjPeer$$$$$animateUpdate$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = new $dvt$$11$$.$CustomAnimation$(this.$_view$.$getCtx$(), this.$Displayable$, this.$getDataLayer$().$getAnimationDuration$()), $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapJsonParser$$.$getDisplayable$();
    if (this.$Displayable$.$getFill$) {
      var $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.$getFill$(), $DvtMapCustomAreaLayer$$ = this.$Displayable$.$getFill$();
      $DvtMapCustomAreaLayer$$ instanceof $dvt$$11$$.$SolidFill$ && ($DvtMapCustomAreaLayer$$.$getColor$() != $DvtMapDataLayer$$.$getColor$() || $DvtMapCustomAreaLayer$$.$getAlpha$() != $DvtMapDataLayer$$.$getAlpha$()) && (this.$Displayable$.$setFill$($DvtMapDataLayer$$), $DvtThematicMapJsonParser$$.$getLabel$() && this.$_label$ && ($DvtMapDataLayer$$ = this.$_label$.$getFill$(), this.$_label$.$setFill$($DvtThematicMapJsonParser$$.$getLabel$().$getFill$().clone()), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$11$$.$Animator$.$TYPE_FILL$, 
      this.$_label$, this.$_label$.$getFill$, this.$_label$.$setFill$, $DvtMapDataLayer$$)), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$11$$.$Animator$.$TYPE_FILL$, this.$Displayable$, this.$Displayable$.$getFill$, this.$Displayable$.$setFill$, $DvtMapCustomAreaLayer$$));
    }
    this.$Displayable$.$getCenterDimensions$ && ($DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getDisplayable$().$getCenterDimensions$(), $DvtMapDataLayer$$ = this.$Displayable$.$getCenterDimensions$(), $DvtMapCustomAreaLayer$$.x != $DvtMapDataLayer$$.x || $DvtMapCustomAreaLayer$$.y != $DvtMapDataLayer$$.y || $DvtMapCustomAreaLayer$$.$w$ != $DvtMapDataLayer$$.$w$ || $DvtMapCustomAreaLayer$$.$h$ != $DvtMapDataLayer$$.$h$) && (this.$Displayable$.$setCenterDimensions$($DvtMapCustomAreaLayer$$), 
    $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$11$$.$Animator$.$TYPE_RECTANGLE$, this.$Displayable$, this.$Displayable$.$getCenterDimensions$, this.$Displayable$.$setCenterDimensions$, $DvtMapDataLayer$$));
    $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.$getRotation$();
    $DvtMapDataLayer$$ = this.$Displayable$.$getRotation$();
    if ($DvtMapCustomAreaLayer$$ != $DvtMapDataLayer$$) {
      var $DvtMapAreaLayer$$ = $DvtMapCustomAreaLayer$$ - $DvtMapDataLayer$$;
      $DvtMapAreaLayer$$ > Math.PI ? $DvtMapCustomAreaLayer$$ -= 2 * Math.PI : $DvtMapAreaLayer$$ < -Math.PI && ($DvtMapCustomAreaLayer$$ += 2 * Math.PI);
      this.$Displayable$.$setRotation$($DvtMapCustomAreaLayer$$);
      $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$11$$.$Animator$.$TYPE_NUMBER$, this.$Displayable$, this.$Displayable$.$getRotation$, this.$Displayable$.$setRotation$, $DvtMapDataLayer$$);
    }
    var $DvtMapAreaLayer$$ = $DvtThematicMapJsonParser$$.$getCenter$(), $DvtMapLayer$$ = this.$getCenter$();
    $DvtMapAreaLayer$$ && $DvtMapLayer$$ && ($DvtMapAreaLayer$$.x != $DvtMapLayer$$.x || $DvtMapAreaLayer$$.y != $DvtMapLayer$$.y || $DvtMapCustomAreaLayer$$ != $DvtMapDataLayer$$) && (this.$setCenter$(new $dvt$$11$$.$Point$($DvtMapAreaLayer$$.x, $DvtMapAreaLayer$$.y)), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$11$$.$Animator$.$TYPE_POINT$, this, this.$getCenter$, this.$setCenter$, new $dvt$$11$$.$Point$($DvtMapLayer$$.x, $DvtMapLayer$$.y)));
    this.$_label$ && $DvtThematicMapJsonParser$$.$getLabel$() ? ($DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getLabel$().$getX$(), $DvtMapDataLayer$$ = this.$_label$.$getX$(), $DvtMapCustomAreaLayer$$ != $DvtMapDataLayer$$ && (this.$_label$.$setX$($DvtMapCustomAreaLayer$$), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$11$$.$Animator$.$TYPE_NUMBER$, this.$_label$, this.$_label$.$getX$, this.$_label$.$setX$, $DvtMapDataLayer$$)), $DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getLabel$().$getY$(), 
    $DvtMapDataLayer$$ = this.$_label$.$getY$(), $DvtMapCustomAreaLayer$$ != $DvtMapDataLayer$$ && (this.$_label$.$setY$($DvtMapCustomAreaLayer$$), $DvtThematicMapEventManager$$.$_animator$.$addProp$($dvt$$11$$.$Animator$.$TYPE_NUMBER$, this.$_label$, this.$_label$.$getY$, this.$_label$.$setY$, $DvtMapDataLayer$$)), $DvtThematicMapJsonParser$$.$getLabel$().$setAlpha$(0)) : $DvtThematicMapJsonParser$$.$getLabel$() && $DvtThematicMapJsonParser$$.$getLabel$().$setAlpha$(0);
    $DvtThematicMapKeyboardHandler$$.$setAlpha$(0);
    $DvtThematicMapControlPanel$$.add($DvtThematicMapEventManager$$, $DvtMapObjPeer$$.$ANIMATION_UPDATE_PRIORITY$);
  };
  $DvtMapObjPeer$$.prototype.$animateDelete$ = function $$DvtMapObjPeer$$$$$animateDelete$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = [this.$Displayable$], $DvtThematicMapEventManager$$ = this.$getLabel$();
    $DvtThematicMapEventManager$$ && $DvtThematicMapJsonParser$$.push($DvtThematicMapEventManager$$);
    $DvtThematicMapJsonParser$$ = new $dvt$$11$$.$AnimFadeOut$(this.$_view$.$getCtx$(), $DvtThematicMapJsonParser$$, this.$getDataLayer$().$getAnimationDuration$());
    $DvtThematicMapControlPanel$$.add($DvtThematicMapJsonParser$$, $DvtMapObjPeer$$.$ANIMATION_DELETE_PRIORITY$);
  };
  $DvtMapObjPeer$$.prototype.$animateInsert$ = function $$DvtMapObjPeer$$$$$animateInsert$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = [this.$Displayable$];
    this.$Displayable$.$setAlpha$(0);
    var $DvtThematicMapEventManager$$ = this.$getLabel$();
    $DvtThematicMapEventManager$$ && ($DvtThematicMapEventManager$$.$setAlpha$(0), $DvtThematicMapJsonParser$$.push($DvtThematicMapEventManager$$));
    $DvtThematicMapJsonParser$$ = new $dvt$$11$$.$AnimFadeIn$(this.$_view$.$getCtx$(), $DvtThematicMapJsonParser$$, this.$getDataLayer$().$getAnimationDuration$());
    $DvtThematicMapControlPanel$$.add($DvtThematicMapJsonParser$$, $DvtMapObjPeer$$.$ANIMATION_INSERT_PRIORITY$);
  };
  $DvtMapObjPeer$$.prototype.$processDefaultSelectionEffect$ = function $$DvtMapObjPeer$$$$$processDefaultSelectionEffect$$($dvt$$11$$) {
    this.$Displayable$.$setSelected$ && this.$Displayable$.$setSelected$($dvt$$11$$);
  };
  $DvtMapObjPeer$$.prototype.$processDefaultFocusEffect$ = function $$DvtMapObjPeer$$$$$processDefaultFocusEffect$$($dvt$$11$$) {
    this.$processDefaultHoverEffect$($dvt$$11$$);
  };
  $DvtMapObjPeer$$.prototype.$processDefaultHoverEffect$ = function $$DvtMapObjPeer$$$$$processDefaultHoverEffect$$($dvt$$11$$) {
    $dvt$$11$$ ? this.$Displayable$.$showHoverEffect$ && this.$Displayable$.$showHoverEffect$() : this.$Displayable$.$hideHoverEffect$ && !this.$isShowingKeyboardFocusEffect$() && this.$Displayable$.$hideHoverEffect$();
  };
  $DvtMapObjPeer$$.prototype.$_callCustomRenderer$ = function $$DvtMapObjPeer$$$$$_callCustomRenderer$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    if (this.$Displayable$ instanceof $DvtCustomDataItem$$) {
      var $DvtThematicMapEventManager$$ = this.$_view$.$getOptions$()._contextHandler;
      $DvtThematicMapEventManager$$ && ($DvtThematicMapControlPanel$$ = $DvtThematicMapEventManager$$(this.$Displayable$.$getElem$(), this.$Displayable$.$_dataItem$, this.$_data$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $dvt$$11$$ = $dvt$$11$$($DvtThematicMapControlPanel$$), this.$Displayable$.$updateRootElement$($dvt$$11$$));
    }
  };
  $DvtMapObjPeer$$.prototype.$_getState$ = function $$DvtMapObjPeer$$$$$_getState$$() {
    return {hovered:this.$_isShowingHoverEffect$, selected:this.$isSelected$(), focused:this.$isShowingKeyboardFocusEffect$()};
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtMapAreaPeer$$, $DvtMapObjPeer$$);
  $DvtMapAreaPeer$$.prototype.Init = function $$DvtMapAreaPeer$$$$Init$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtMapAreaPeer$$.$superclass$.Init.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
  };
  $DvtMapAreaPeer$$.prototype.$setAreaLayer$ = function $$DvtMapAreaPeer$$$$$setAreaLayer$$($dvt$$11$$) {
    this.$_dataAreaLayer$ = $dvt$$11$$;
  };
  $DvtMapAreaPeer$$.prototype.$setSelected$ = function $$DvtMapAreaPeer$$$$$setSelected$$($dvt$$11$$) {
    this.$isSelectable$() && ($dvt$$11$$ && !this.$_isShowingHoverEffect$ && this.$_dataAreaLayer$.$addChild$(this.$Displayable$), $DvtMapAreaPeer$$.$superclass$.$setSelected$.call(this, $dvt$$11$$));
  };
  $DvtMapAreaPeer$$.prototype.$showHoverEffect$ = function $$DvtMapAreaPeer$$$$$showHoverEffect$$() {
    this.$_dataAreaLayer$.$addChild$(this.$Displayable$);
    $DvtMapAreaPeer$$.$superclass$.$showHoverEffect$.call(this);
  };
  $DvtMapAreaPeer$$.prototype.$hideHoverEffect$ = function $$DvtMapAreaPeer$$$$$hideHoverEffect$$() {
    this.$isSelected$() ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
    $DvtMapAreaPeer$$.$superclass$.$hideHoverEffect$.call(this);
  };
  $DvtMapAreaPeer$$.prototype.$isDrilled$ = function $$DvtMapAreaPeer$$$$$isDrilled$$() {
    return this.$Displayable$.$isDrilled$();
  };
  $DvtMapAreaPeer$$.prototype.$setDrilled$ = function $$DvtMapAreaPeer$$$$$setDrilled$$($dvt$$11$$) {
    $dvt$$11$$ ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
    this.$Displayable$.$setDrilled$($dvt$$11$$);
  };
  $DvtMapAreaPeer$$.prototype.$HandleZoomEvent$ = function $$DvtMapAreaPeer$$$$$HandleZoomEvent$$($dvt$$11$$) {
    $DvtMapAreaPeer$$.$superclass$.$HandleZoomEvent$.call(this, $dvt$$11$$);
    this.$Displayable$.getParent() && (this.$Displayable$.$handleZoomEvent$($dvt$$11$$), this.$isDrilled$() || this.$positionLabel$($dvt$$11$$));
  };
  $DvtMapAreaPeer$$.prototype.$positionLabel$ = function $$DvtMapAreaPeer$$$$$positionLabel$$($dvt$$11$$) {
    this.$getLabel$() && this.$getLabel$().update($dvt$$11$$);
  };
  $DvtMapAreaPeer$$.prototype.$GetNavigables$ = function $$DvtMapAreaPeer$$$$$GetNavigables$$() {
    return this.$getDataLayer$().$_tmap$.$getNavigableAreas$();
  };
  $DvtMapAreaPeer$$.prototype.$animateUpdate$ = function $$DvtMapAreaPeer$$$$$animateUpdate$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtMapAreaPeer$$.$superclass$.$animateUpdate$.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$);
    this.$getDataLayer$().$_parentLayer$.$setAreaRendered$(this.$getLocation$(), !1);
  };
  $DvtMapAreaPeer$$.prototype.$__recenter$ = function $$DvtMapAreaPeer$$$$$__recenter$$() {
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtMapArea$$, $dvt$$11$$.$Container$);
  $DvtMapArea$$.$_DEFAULT_STROKE_WIDTH$ = 1;
  $DvtMapArea$$.prototype.Init = function $$DvtMapArea$$$$Init$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    $DvtMapArea$$.$superclass$.Init.call(this, $dvt$$11$$);
    this.$_isSelected$ = this.$_bSelectable$ = !1;
    this.$_areaId$ = $DvtThematicMapEventManager$$;
    this.$_areaName$ = $DvtThematicMapKeyboardHandler$$;
    this.$_shape$ = $DvtThematicMapJsonParser$$;
    this.$addChild$(this.$_shape$);
    this.$_view$ = $DvtThematicMapControlPanel$$;
    this.$_bSupportsVectorEffects$ = $DvtMapDataLayer$$;
    if ($dvt$$11$$ = $DvtThematicMapJsonParser$$.$getStroke$()) {
      this.$_areaStrokeWidth$ = $dvt$$11$$.getWidth();
    }
  };
  $DvtMapArea$$.prototype.$getDatatip$ = function $$DvtMapArea$$$$$getDatatip$$() {
    var $dvt$$11$$ = this.$_view$.$getOptions$()._tooltip;
    return $dvt$$11$$ ? this.$_view$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($dvt$$11$$, this.$getDataContext$()) : this.$_tooltip$;
  };
  $DvtMapArea$$.prototype.$setDatatip$ = function $$DvtMapArea$$$$$setDatatip$$($dvt$$11$$) {
    this.$_tooltip$ = $dvt$$11$$;
  };
  $DvtMapArea$$.prototype.$getDataContext$ = function $$DvtMapArea$$$$$getDataContext$$() {
    return {color:null, component:this.$_view$.$getOptions$()._widgetConstructor, data:null, id:null, label:null, location:this.$_areaId$, locationName:this.$_areaName$, tooltip:this.$_tooltip$, x:null, y:null};
  };
  $DvtMapArea$$.prototype.$getStroke$ = function $$DvtMapArea$$$$$getStroke$$() {
    return this.$_shape$ instanceof $dvt$$11$$.$Shape$ ? this.$_shape$.$getStroke$() : null;
  };
  $DvtMapArea$$.prototype.$setStroke$ = function $$DvtMapArea$$$$$setStroke$$($DvtThematicMapControlPanel$$) {
    this.$_shape$ instanceof $dvt$$11$$.$Shape$ && this.$_shape$.$setStroke$($DvtThematicMapControlPanel$$);
  };
  $DvtMapArea$$.prototype.$setFill$ = function $$DvtMapArea$$$$$setFill$$($DvtThematicMapControlPanel$$) {
    this.$_shape$ instanceof $dvt$$11$$.$Shape$ && this.$_shape$.$setFill$($DvtThematicMapControlPanel$$);
  };
  $DvtMapArea$$.prototype.$getFill$ = function $$DvtMapArea$$$$$getFill$$() {
    return this.$_shape$ instanceof $dvt$$11$$.$Shape$ ? this.$_shape$.$getFill$() : null;
  };
  $DvtMapArea$$.prototype.$getCmds$ = function $$DvtMapArea$$$$$getCmds$$() {
    return this.$_shape$ instanceof $dvt$$11$$.$Path$ ? this.$_shape$.$getCmds$() : null;
  };
  $DvtMapArea$$.prototype.$setCmds$ = function $$DvtMapArea$$$$$setCmds$$($DvtThematicMapControlPanel$$) {
    this.$_shape$ instanceof $dvt$$11$$.$Path$ && this.$_shape$.$setCmds$($DvtThematicMapControlPanel$$);
  };
  $DvtMapArea$$.prototype.$setSrc$ = function $$DvtMapArea$$$$$setSrc$$($DvtThematicMapControlPanel$$) {
    this.$_shape$ instanceof $dvt$$11$$.Image && this.$_shape$.$setSrc$($DvtThematicMapControlPanel$$);
  };
  $DvtMapArea$$.prototype.contains = function $$DvtMapArea$$$$contains$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$getDimensions$();
    return $dvt$$11$$ >= $DvtThematicMapJsonParser$$.x && $dvt$$11$$ <= $DvtThematicMapJsonParser$$.x + $DvtThematicMapJsonParser$$.$w$ && $DvtThematicMapControlPanel$$ >= $DvtThematicMapJsonParser$$.y && $DvtThematicMapControlPanel$$ <= $DvtThematicMapJsonParser$$.y + $DvtThematicMapJsonParser$$.$h$;
  };
  $DvtMapArea$$.prototype.$HandleZoomEvent$ = function $$DvtMapArea$$$$$HandleZoomEvent$$($dvt$$11$$) {
    if (!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
      var $DvtThematicMapControlPanel$$ = this.$_shape$.$getStroke$().clone();
      $DvtThematicMapControlPanel$$.$setWidth$(this.$_areaStrokeWidth$ / $dvt$$11$$.$_a$);
      this.$_shape$.$setStroke$($DvtThematicMapControlPanel$$);
    }
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtMapLayer$$, $dvt$$11$$.$Obj$);
  $DvtMapLayer$$.prototype.Init = function $$DvtMapLayer$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    this.$_tmap$ = $DvtThematicMapControlPanel$$;
    this.$LayerName$ = $DvtThematicMapJsonParser$$;
    this.$EventHandler$ = $DvtThematicMapEventManager$$;
    this.$DataLayers$ = {};
    this.$PzcMatrix$ = new $dvt$$11$$.$Matrix$;
  };
  $DvtMapLayer$$.prototype.$addDataLayer$ = function $$DvtMapLayer$$$$$addDataLayer$$($dvt$$11$$) {
    this.$DataLayers$[$dvt$$11$$.$getClientId$()] = $dvt$$11$$;
  };
  $DvtMapLayer$$.prototype.$PreDataLayerUpdate$ = function $$DvtMapLayer$$$$$PreDataLayerUpdate$$() {
  };
  $DvtMapLayer$$.prototype.$PostDataLayerUpdate$ = function $$DvtMapLayer$$$$$PostDataLayerUpdate$$() {
  };
  $DvtMapLayer$$.prototype.$updateDataLayer$ = function $$DvtMapLayer$$$$$updateDataLayer$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.$_animation$ && this.$_animation$.stop(!0);
    this.$PzcMatrix$ = $DvtThematicMapJsonParser$$;
    this.$_oldDataLayer$ = this.$getDataLayer$($DvtThematicMapControlPanel$$.$getClientId$());
    this.$addDataLayer$($DvtThematicMapControlPanel$$);
    $DvtThematicMapControlPanel$$.$render$(this.$PzcMatrix$);
    $DvtThematicMapControlPanel$$.$HandleZoomEvent$(new $dvt$$11$$.$ZoomEvent$($dvt$$11$$.$ZoomEvent$.$SUBTYPE_ZOOMED$), this.$PzcMatrix$);
    if (this.$_oldDataLayer$) {
      var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.$getAnimation$(), $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.$getAnimationDuration$();
      if ("auto" == $DvtThematicMapEventManager$$) {
        var $DvtMapDataLayer$$ = new $dvt$$11$$.$DataAnimationHandler$(this.$_tmap$.$getCtx$());
        $DvtMapDataLayer$$.$constructAnimation$(this.$_oldDataLayer$.$getAllObjects$(), $DvtThematicMapControlPanel$$.$getAllObjects$());
        this.$_animation$ = $DvtMapDataLayer$$.$getAnimation$();
      } else {
        if ($dvt$$11$$.$BlackBoxAnimationHandler$.isSupported($DvtThematicMapEventManager$$)) {
          this.$_removeAnimRect$ = !0;
          for (var $DvtMapCustomAreaLayer$$ = new $dvt$$11$$.$Rectangle$(0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $DvtMapAreaLayer$$ = this.$_oldDataLayer$.$getNonScaledContainers$(), $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtMapAreaLayer$$.length;$DvtMapDataLayer$$++) {
            var $DvtMapLayer$$ = new $dvt$$11$$.Rect(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight());
            $DvtMapLayer$$.$setFill$(null);
            $DvtMapAreaLayer$$[$DvtMapDataLayer$$].$addChild$($DvtMapLayer$$);
          }
          for (var $DvtMapAreaPeer$$ = $DvtThematicMapControlPanel$$.$getNonScaledContainers$(), $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtMapAreaPeer$$.length;$DvtMapDataLayer$$++) {
            $DvtMapLayer$$ = new $dvt$$11$$.Rect(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $DvtMapLayer$$.$setFill$(null), $DvtMapAreaPeer$$[$DvtMapDataLayer$$].$addChild$($DvtMapLayer$$);
          }
          $DvtMapCustomAreaLayer$$ = $dvt$$11$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $DvtThematicMapEventManager$$, $DvtMapAreaLayer$$, $DvtMapAreaPeer$$, $DvtMapCustomAreaLayer$$, $DvtThematicMapKeyboardHandler$$);
          $DvtMapAreaLayer$$ = new $dvt$$11$$.$Rectangle$(0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$);
          $DvtMapAreaPeer$$ = this.$_oldDataLayer$.$getScaledContainers$();
          for ($DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtMapAreaPeer$$.length;$DvtMapDataLayer$$++) {
            $DvtMapLayer$$ = new $dvt$$11$$.Rect(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $DvtMapLayer$$.$setFill$(null), $DvtMapAreaPeer$$[$DvtMapDataLayer$$].$addChild$($DvtMapLayer$$);
          }
          for (var $DvtMapArea$$ = $DvtThematicMapControlPanel$$.$getScaledContainers$(), $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtMapArea$$.length;$DvtMapDataLayer$$++) {
            $DvtMapLayer$$ = new $dvt$$11$$.Rect(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $DvtMapLayer$$.$setFill$(null), $DvtMapArea$$[$DvtMapDataLayer$$].$addChild$($DvtMapLayer$$);
          }
          $DvtMapDataLayer$$ = $dvt$$11$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $DvtThematicMapEventManager$$, $DvtMapAreaPeer$$, $DvtMapArea$$, $DvtMapAreaLayer$$, $DvtThematicMapKeyboardHandler$$);
          this.$_animation$ = new $dvt$$11$$.$ParallelPlayable$(this.$_tmap$.$getCtx$(), [$DvtMapCustomAreaLayer$$, $DvtMapDataLayer$$]);
        } else {
          for ($DvtThematicMapEventManager$$ = this.$_oldDataLayer$.$getContainers$(), $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapEventManager$$.length;$DvtMapDataLayer$$++) {
            $DvtThematicMapEventManager$$[$DvtMapDataLayer$$].getParent().removeChild($DvtThematicMapEventManager$$[$DvtMapDataLayer$$]);
          }
        }
      }
      this.$PreDataLayerUpdate$();
      if (this.$_animation$) {
        this.$EventHandler$.$removeListeners$(this.$_callbackObj$);
        var $DvtMapObjPeer$$ = this;
        this.$_animation$.$setOnEnd$(function() {
          $DvtMapObjPeer$$.$OnAnimationEnd$($DvtThematicMapControlPanel$$);
        }, this);
        this.$_animation$.play();
      }
    } else {
      this.$PostDataLayerUpdate$(), this.$_tmap$.$OnUpdateLayerEnd$();
    }
  };
  $DvtMapLayer$$.prototype.$getDataLayer$ = function $$DvtMapLayer$$$$$getDataLayer$$($dvt$$11$$) {
    return this.$DataLayers$ ? this.$DataLayers$[$dvt$$11$$] : null;
  };
  $DvtMapLayer$$.prototype.$render$ = function $$DvtMapLayer$$$$$render$$($dvt$$11$$) {
    this.$PzcMatrix$ = $dvt$$11$$;
    for (var $DvtThematicMapControlPanel$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapControlPanel$$].$render$($dvt$$11$$);
    }
  };
  $DvtMapLayer$$.prototype.reset = function $$DvtMapLayer$$$$reset$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapJsonParser$$].reset($dvt$$11$$, $DvtThematicMapControlPanel$$);
    }
  };
  $DvtMapLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapLayer$$$$$HandleZoomEvent$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    this.$PzcMatrix$ = $DvtThematicMapControlPanel$$;
    for (var $DvtThematicMapJsonParser$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapJsonParser$$].$HandleZoomEvent$($dvt$$11$$, $DvtThematicMapControlPanel$$);
    }
  };
  $DvtMapLayer$$.prototype.$HandlePanEvent$ = function $$DvtMapLayer$$$$$HandlePanEvent$$($dvt$$11$$) {
    this.$PzcMatrix$ = $dvt$$11$$;
    for (var $DvtThematicMapControlPanel$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapControlPanel$$].$HandlePanEvent$($dvt$$11$$);
    }
  };
  $DvtMapLayer$$.prototype.$OnAnimationEnd$ = function $$DvtMapLayer$$$$$OnAnimationEnd$$($dvt$$11$$) {
    if (this.$_oldDataLayer$) {
      for (var $DvtThematicMapControlPanel$$ = this.$_oldDataLayer$.$getContainers$(), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
        var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].getParent();
        $DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$.removeChild($DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$]);
      }
    }
    if (this.$_removeAnimRect$) {
      this.$_removeAnimRect$ = !1;
      $DvtThematicMapControlPanel$$ = $dvt$$11$$.$getNonScaledContainers$();
      for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
        $DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$removeChildAt$($DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$getNumChildren$() - 1);
      }
      $dvt$$11$$ = $dvt$$11$$.$getScaledContainers$();
      for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $dvt$$11$$.length;$DvtThematicMapJsonParser$$++) {
        $dvt$$11$$[$DvtThematicMapJsonParser$$].$removeChildAt$($dvt$$11$$[$DvtThematicMapJsonParser$$].$getNumChildren$() - 1);
      }
    }
    this.$PostDataLayerUpdate$();
    this.$_tmap$.$OnUpdateLayerEnd$();
    this.$_animation$ = null;
    this.$EventHandler$.$addListeners$(this.$_callbackObj$);
  };
  $DvtMapLayer$$.prototype.$destroy$ = function $$DvtMapLayer$$$$$destroy$$() {
    var $dvt$$11$$ = this.$DataLayers$, $DvtThematicMapControlPanel$$;
    for ($DvtThematicMapControlPanel$$ in $dvt$$11$$) {
      $dvt$$11$$[$DvtThematicMapControlPanel$$].$destroy$();
    }
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtMapAreaLayer$$, $DvtMapLayer$$);
  $DvtMapAreaLayer$$.$_SHORT_NAME$ = 0;
  $DvtMapAreaLayer$$.$_LONG_NAME$ = 1;
  $DvtMapAreaLayer$$.prototype.Init = function $$DvtMapAreaLayer$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    $DvtMapAreaLayer$$.$superclass$.Init.call(this, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtMapDataLayer$$);
    this.$_labelDisplay$ = $DvtThematicMapEventManager$$;
    this.$_labelType$ = $DvtThematicMapKeyboardHandler$$;
    this.$_areaLabels$ = {};
    this.$Areas$ = {};
    this.$AreaShapes$ = {};
    this.$_labelInfo$ = this.$AreaLabels$ = null;
    this.$_disclosed$ = [];
    this.$_renderArea$ = {};
    this.$_renderLabel$ = {};
    this.$_renderedLabels$ = {};
    this.$AreaContainer$ = new $dvt$$11$$.$Container$(this.$_tmap$.$getCtx$());
    this.$LabelContainer$ = new $dvt$$11$$.$Container$(this.$_tmap$.$getCtx$());
    this.$_tmap$.$_areaLayers$.$addChildAt$(this.$AreaContainer$, 0);
    this.$_tmap$.$_labelLayers$.$addChildAt$(this.$LabelContainer$, 0);
  };
  $DvtMapAreaLayer$$.prototype.$setAnimation$ = function $$DvtMapAreaLayer$$$$$setAnimation$$($dvt$$11$$) {
    this.$_animType$ = $dvt$$11$$;
  };
  $DvtMapAreaLayer$$.prototype.$getAnimation$ = function $$DvtMapAreaLayer$$$$$getAnimation$$() {
    return this.$_animType$;
  };
  $DvtMapAreaLayer$$.prototype.$setAnimationDuration$ = function $$DvtMapAreaLayer$$$$$setAnimationDuration$$($dvt$$11$$) {
    this.$_animDur$ = $dvt$$11$$;
  };
  $DvtMapAreaLayer$$.prototype.$getAnimationDuration$ = function $$DvtMapAreaLayer$$$$$getAnimationDuration$$() {
    return this.$_animDur$;
  };
  $DvtMapAreaLayer$$.prototype.$setAreaShapes$ = function $$DvtMapAreaLayer$$$$$setAreaShapes$$($dvt$$11$$) {
    this.$AreaShapes$ = $dvt$$11$$;
    for (var $DvtThematicMapControlPanel$$ in $dvt$$11$$) {
      this.$setAreaRendered$($DvtThematicMapControlPanel$$, !0);
    }
  };
  $DvtMapAreaLayer$$.prototype.$setAreaLabels$ = function $$DvtMapAreaLayer$$$$$setAreaLabels$$($dvt$$11$$) {
    this.$AreaLabels$ = $dvt$$11$$;
    for (var $DvtThematicMapControlPanel$$ in $dvt$$11$$) {
      this.$setLabelRendered$($DvtThematicMapControlPanel$$, !0);
    }
  };
  $DvtMapAreaLayer$$.prototype.$getShortAreaName$ = function $$DvtMapAreaLayer$$$$$getShortAreaName$$($dvt$$11$$) {
    return this.$AreaLabels$ && this.$AreaLabels$[$dvt$$11$$] ? this.$AreaLabels$[$dvt$$11$$][$DvtMapAreaLayer$$.$_SHORT_NAME$] : null;
  };
  $DvtMapAreaLayer$$.prototype.$getLongAreaName$ = function $$DvtMapAreaLayer$$$$$getLongAreaName$$($dvt$$11$$) {
    return this.$AreaLabels$ && this.$AreaLabels$[$dvt$$11$$] ? this.$AreaLabels$[$dvt$$11$$][$DvtMapAreaLayer$$.$_LONG_NAME$] : null;
  };
  $DvtMapAreaLayer$$.prototype.$setAreaLabelInfo$ = function $$DvtMapAreaLayer$$$$$setAreaLabelInfo$$($dvt$$11$$) {
    this.$_labelInfo$ = $dvt$$11$$;
  };
  $DvtMapAreaLayer$$.prototype.$getLabelInfoForArea$ = function $$DvtMapAreaLayer$$$$$getLabelInfoForArea$$($dvt$$11$$) {
    return this.$_labelInfo$ ? this.$_labelInfo$[$dvt$$11$$] : null;
  };
  $DvtMapAreaLayer$$.prototype.$setAreaChildren$ = function $$DvtMapAreaLayer$$$$$setAreaChildren$$($dvt$$11$$) {
    this.$_children$ = $dvt$$11$$;
  };
  $DvtMapAreaLayer$$.prototype.$getChildrenForArea$ = function $$DvtMapAreaLayer$$$$$getChildrenForArea$$($dvt$$11$$) {
    return this.$_children$[$dvt$$11$$] ? this.$_children$[$dvt$$11$$].split(",") : [];
  };
  $DvtMapAreaLayer$$.prototype.$getAreaShape$ = function $$DvtMapAreaLayer$$$$$getAreaShape$$($dvt$$11$$) {
    return this.$AreaShapes$[$dvt$$11$$];
  };
  $DvtMapAreaLayer$$.prototype.$getLabelDisplay$ = function $$DvtMapAreaLayer$$$$$getLabelDisplay$$() {
    return this.$_labelDisplay$;
  };
  $DvtMapAreaLayer$$.prototype.$setLayerCSSStyle$ = function $$DvtMapAreaLayer$$$$$setLayerCSSStyle$$($dvt$$11$$) {
    this.$_layerCSSStyle$ = $dvt$$11$$;
  };
  $DvtMapAreaLayer$$.prototype.$getLayerCSSStyle$ = function $$DvtMapAreaLayer$$$$$getLayerCSSStyle$$() {
    return new $dvt$$11$$.$CSSStyle$(this.$_layerCSSStyle$);
  };
  $DvtMapAreaLayer$$.prototype.$setAreaRendered$ = function $$DvtMapAreaLayer$$$$$setAreaRendered$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    this.$_renderArea$[$dvt$$11$$] = $DvtThematicMapControlPanel$$;
  };
  $DvtMapAreaLayer$$.prototype.$setLabelRendered$ = function $$DvtMapAreaLayer$$$$$setLabelRendered$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    this.$_renderLabel$[$dvt$$11$$] = $DvtThematicMapControlPanel$$;
  };
  $DvtMapAreaLayer$$.prototype.$setIsolatedArea$ = function $$DvtMapAreaLayer$$$$$setIsolatedArea$$($dvt$$11$$) {
    this.$_isolatedArea$ = $dvt$$11$$;
    this.$_layerDim$ = null;
    for (var $DvtThematicMapControlPanel$$ in this.$AreaShapes$) {
      $DvtThematicMapControlPanel$$ != $dvt$$11$$ && (this.$_renderArea$[$DvtThematicMapControlPanel$$] = !1);
    }
  };
  $DvtMapAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapAreaLayer$$$$$getLayerDim$$() {
    if (!this.$_layerDim$) {
      if (this.$_isolatedArea$) {
        this.$_layerDim$ = $dvt$$11$$.$PathUtils$.$getDimensions$($dvt$$11$$.$PathUtils$.$createPathArray$($DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$)));
      } else {
        if ("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = $DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), !this.$_layerDim$) {
          var $DvtThematicMapControlPanel$$ = this.$AreaContainer$.$getDimensions$().$getUnion$(this.$_tmap$.$_dataAreaLayers$.$getDimensions$()).$getUnion$(this.$_tmap$.$_dataPointLayers$.$getDimensions$());
          0 < $DvtThematicMapControlPanel$$.$w$ && 0 < $DvtThematicMapControlPanel$$.$h$ && (this.$_layerDim$ = $DvtThematicMapControlPanel$$);
        }
      }
    }
    return this.$_layerDim$;
  };
  $DvtMapAreaLayer$$.prototype.$_createAreaAndLabel$ = function $$DvtMapAreaLayer$$$$$_createAreaAndLabel$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = this.$AreaShapes$[$DvtThematicMapControlPanel$$];
    if ($DvtThematicMapEventManager$$) {
      !$DvtThematicMapJsonParser$$ && this.$Areas$[$DvtThematicMapControlPanel$$] || this.$updateAreaShape$($DvtThematicMapControlPanel$$);
      if (!this.$Areas$[$DvtThematicMapControlPanel$$]) {
        var $DvtThematicMapKeyboardHandler$$ = this.$AreaLabels$ && this.$AreaLabels$[$DvtThematicMapControlPanel$$] ? this.$AreaLabels$[$DvtThematicMapControlPanel$$][$DvtMapAreaLayer$$.$_LONG_NAME$] : null, $DvtMapDataLayer$$ = new $DvtMapArea$$(this.$_tmap$.$getCtx$(), this.$_tmap$, $DvtThematicMapEventManager$$, $DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$, this.$_tmap$.$_bSupportsVectorEffects$);
        this.$Areas$[$DvtThematicMapControlPanel$$] = $DvtMapDataLayer$$;
        this.$EventHandler$.$associate$($DvtThematicMapEventManager$$, $DvtMapDataLayer$$);
        $DvtMapDataLayer$$.$setDatatip$($DvtThematicMapKeyboardHandler$$);
      }
      this.$_renderLabel$[$DvtThematicMapControlPanel$$] && ($DvtThematicMapKeyboardHandler$$ = this.$_areaLabels$[$DvtThematicMapControlPanel$$], !$DvtThematicMapKeyboardHandler$$ && "off" != this.$_labelDisplay$ && this.$AreaLabels$ && ($DvtThematicMapKeyboardHandler$$ = "short" == this.$_labelType$ ? this.$AreaLabels$[$DvtThematicMapControlPanel$$][$DvtMapAreaLayer$$.$_SHORT_NAME$] : this.$AreaLabels$[$DvtThematicMapControlPanel$$][$DvtMapAreaLayer$$.$_LONG_NAME$])) && (this.$_labelInfo$ && this.$_labelInfo$[$DvtThematicMapControlPanel$$] ? 
      $DvtThematicMapKeyboardHandler$$ = new $DvtMapLabel$$(this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$, this.$_labelInfo$[$DvtThematicMapControlPanel$$], this.$_labelDisplay$, this.$LabelContainer$, this.$_tmap$.$_bSupportsVectorEffects$) : ($DvtThematicMapEventManager$$ = $dvt$$11$$.$DisplayableUtils$.$getDimensionsForced$(this.$_tmap$.$getCtx$(), $DvtThematicMapEventManager$$), $DvtThematicMapKeyboardHandler$$ = new $DvtMapLabel$$(this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$, 
      [[$DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y, $DvtThematicMapEventManager$$.$w$, $DvtThematicMapEventManager$$.$h$]], this.$_labelDisplay$, this.$LabelContainer$, this.$_tmap$.$_bSupportsVectorEffects$)), this.$_areaLabels$[$DvtThematicMapControlPanel$$] = $DvtThematicMapKeyboardHandler$$, this.$_layerCSSStyle$ && $DvtThematicMapKeyboardHandler$$.$setCSSStyle$(this.$_layerCSSStyle$));
    }
  };
  $DvtMapAreaLayer$$.prototype.$_addAreaAndLabel$ = function $$DvtMapAreaLayer$$$$$_addAreaAndLabel$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    if (this.$AreaShapes$[$dvt$$11$$]) {
      this.$AreaContainer$.$addChild$(this.$Areas$[$dvt$$11$$]);
      var $DvtThematicMapJsonParser$$ = this.$_areaLabels$[$dvt$$11$$];
      $DvtThematicMapJsonParser$$ && (this.$_renderLabel$[$dvt$$11$$] ? $DvtThematicMapJsonParser$$.update(this.$PzcMatrix$) : $DvtThematicMapJsonParser$$.reset(), this.$_renderedLabels$[$dvt$$11$$] = this.$_renderLabel$[$dvt$$11$$]);
      $DvtThematicMapControlPanel$$ && ($DvtThematicMapControlPanel$$.push(this.$Areas$[$dvt$$11$$]), $DvtThematicMapJsonParser$$ && ($DvtThematicMapControlPanel$$.push($DvtThematicMapJsonParser$$), $DvtThematicMapControlPanel$$.push($DvtThematicMapJsonParser$$.$_leaderLine$)));
    }
  };
  $DvtMapAreaLayer$$.prototype.$updateAreaShape$ = function $$DvtMapAreaLayer$$$$$updateAreaShape$$($dvt$$11$$) {
    if (!this.$_paths$ || this.$_bUpdateShapesForRender$) {
      this.$_bUpdateShapesForRender$ = !1;
      var $DvtThematicMapControlPanel$$;
      this.$_paths$ = ($DvtThematicMapControlPanel$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? $DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? $DvtBaseMapManager$$.$simplifyAreaPaths$($DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $DvtThematicMapControlPanel$$.$w$, $DvtThematicMapControlPanel$$.$h$, this.$_tmap$.getWidth(), this.$_tmap$.getHeight(), this.$_tmap$.$getMaxZoomFactor$()) : 
      $DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$);
    }
    $DvtThematicMapControlPanel$$ = this.$_paths$[$dvt$$11$$];
    this.$AreaShapes$[$dvt$$11$$] && $DvtThematicMapControlPanel$$ ? this.$AreaShapes$[$dvt$$11$$].$setCmds$($DvtThematicMapControlPanel$$) : delete this.$AreaShapes$[$dvt$$11$$];
  };
  $DvtMapAreaLayer$$.prototype.$resetRenderedAreas$ = function $$DvtMapAreaLayer$$$$$resetRenderedAreas$$() {
    for (var $dvt$$11$$ in this.$AreaLabels$) {
      this.$setAreaRendered$($dvt$$11$$, !0), this.$setLabelRendered$($dvt$$11$$, !0);
    }
  };
  $DvtMapAreaLayer$$.prototype.$updateDataLayer$ = function $$DvtMapAreaLayer$$$$$updateDataLayer$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtMapAreaLayer$$.$superclass$.$updateDataLayer$.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    if ($DvtThematicMapJsonParser$$ == this.$LayerName$) {
      for (var $DvtThematicMapEventManager$$ in this.$AreaShapes$) {
        this.$_createAreaAndLabel$($DvtThematicMapEventManager$$, !0), this.$_renderArea$[$DvtThematicMapEventManager$$] && this.$_addAreaAndLabel$($DvtThematicMapEventManager$$);
      }
    }
  };
  $DvtMapAreaLayer$$.prototype.$render$ = function $$DvtMapAreaLayer$$$$$render$$($dvt$$11$$) {
    this.$_bUpdateShapesForRender$ = !0;
    for (var $DvtThematicMapControlPanel$$ in this.$AreaShapes$) {
      this.$_createAreaAndLabel$($DvtThematicMapControlPanel$$, !0), this.$_renderArea$[$DvtThematicMapControlPanel$$] && this.$_addAreaAndLabel$($DvtThematicMapControlPanel$$);
    }
    $DvtMapAreaLayer$$.$superclass$.$render$.call(this, $dvt$$11$$);
  };
  $DvtMapAreaLayer$$.prototype.$PreDataLayerUpdate$ = function $$DvtMapAreaLayer$$$$$PreDataLayerUpdate$$() {
    for (var $dvt$$11$$ in this.$_renderArea$) {
      this.$_renderArea$[$dvt$$11$$] || (this.$_createAreaAndLabel$($dvt$$11$$, !1), this.$_addAreaAndLabel$($dvt$$11$$));
    }
  };
  $DvtMapAreaLayer$$.prototype.$PostDataLayerUpdate$ = function $$DvtMapAreaLayer$$$$$PostDataLayerUpdate$$() {
    for (var $dvt$$11$$ in this.$_renderArea$) {
      if (!this.$_renderArea$[$dvt$$11$$]) {
        this.$AreaContainer$.removeChild(this.$Areas$[$dvt$$11$$]);
        var $DvtThematicMapControlPanel$$ = this.$_areaLabels$[$dvt$$11$$];
        $DvtThematicMapControlPanel$$ && (this.$_renderedLabels$[$dvt$$11$$] = !1, this.$LabelContainer$.removeChild($DvtThematicMapControlPanel$$), ($DvtThematicMapControlPanel$$ = $DvtThematicMapControlPanel$$.$_leaderLine$) && this.$LabelContainer$.removeChild($DvtThematicMapControlPanel$$));
      }
    }
  };
  $DvtMapAreaLayer$$.prototype.$_renderSelectedAreasAndLabels$ = function $$DvtMapAreaLayer$$$$$_renderSelectedAreasAndLabels$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $dvt$$11$$.length;$DvtThematicMapJsonParser$$++) {
      this.$_createAreaAndLabel$($dvt$$11$$[$DvtThematicMapJsonParser$$], !1), this.$_renderArea$[$dvt$$11$$[$DvtThematicMapJsonParser$$]] && this.$_addAreaAndLabel$($dvt$$11$$[$DvtThematicMapJsonParser$$], $DvtThematicMapControlPanel$$);
    }
  };
  $DvtMapAreaLayer$$.prototype.$discloseAreas$ = function $$DvtMapAreaLayer$$$$$discloseAreas$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    this.$_renderSelectedAreasAndLabels$($dvt$$11$$, $DvtThematicMapControlPanel$$);
    for (var $DvtThematicMapJsonParser$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapJsonParser$$].$discloseAreas$($dvt$$11$$, $DvtThematicMapControlPanel$$, this.$PzcMatrix$);
    }
    this.$_disclosed$ = this.$_disclosed$.concat($dvt$$11$$);
  };
  $DvtMapAreaLayer$$.prototype.$undiscloseAreas$ = function $$DvtMapAreaLayer$$$$$undiscloseAreas$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    for (var $DvtThematicMapEventManager$$ in this.$DataLayers$) {
      this.$DataLayers$[$DvtThematicMapEventManager$$].$undiscloseAreas$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    }
    $DvtThematicMapEventManager$$ = this.$_tmap$.$getDrillChildLayer$(this.$LayerName$);
    for (var $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapKeyboardHandler$$++) {
      var $DvtMapDataLayer$$ = $DvtThematicMapControlPanel$$[$DvtThematicMapKeyboardHandler$$];
      if (this.$Areas$[$DvtMapDataLayer$$]) {
        var $DvtMapCustomAreaLayer$$ = $dvt$$11$$.$ArrayUtils$.$getIndex$(this.$_disclosed$, $DvtMapDataLayer$$);
        -1 !== $DvtMapCustomAreaLayer$$ && (this.$_disclosed$.splice($DvtMapCustomAreaLayer$$, 1), $DvtThematicMapJsonParser$$.push(this.$Areas$[$DvtMapDataLayer$$]));
      }
      $DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$.$undiscloseAreas$(this.$getChildrenForArea$($DvtMapDataLayer$$), $DvtThematicMapJsonParser$$);
    }
  };
  $DvtMapAreaLayer$$.prototype.reset = function $$DvtMapAreaLayer$$$$reset$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtMapAreaLayer$$.$superclass$.reset.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$);
    "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $dvt$$11$$), this.$_disclosed$ = []);
  };
  $DvtMapAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapAreaLayer$$$$$HandleZoomEvent$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$);
    if (!this.$_tmap$.$_bSupportsVectorEffects$) {
      for (var $DvtThematicMapJsonParser$$ in this.$Areas$) {
        this.$Areas$[$DvtThematicMapJsonParser$$].$HandleZoomEvent$($DvtThematicMapControlPanel$$);
      }
    }
    for ($DvtThematicMapJsonParser$$ in this.$_renderedLabels$) {
      if (this.$_renderedLabels$[$DvtThematicMapJsonParser$$]) {
        var $DvtThematicMapEventManager$$ = this.$_areaLabels$[$DvtThematicMapJsonParser$$];
        $DvtThematicMapEventManager$$ && $DvtThematicMapEventManager$$.update($DvtThematicMapControlPanel$$);
      }
    }
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$);
  $DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    $DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  };
  $DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = function $$DvtMapCustomAreaLayer$$$$$updateAreaShape$$() {
  };
  $DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
    return new $dvt$$11$$.$Rectangle$(0, 0, this.$_layerWidth$, this.$_layerHeight$);
  };
  $DvtMapCustomAreaLayer$$.prototype.$_selectImageBasedOnResolution$ = function $$DvtMapCustomAreaLayer$$$$$_selectImageBasedOnResolution$$() {
    for (var $dvt$$11$$ = this.$_tmap$.getWidth(), $DvtThematicMapControlPanel$$ = this.$_tmap$.getHeight(), $DvtThematicMapJsonParser$$ = this.$_areaLayerImages$, $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapJsonParser$$.length;$DvtThematicMapEventManager$$++) {
      var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$], $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.source, $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.width, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$.height;
      if ($DvtMapDataLayer$$ && -1 < $DvtMapDataLayer$$.search(".svg") || $DvtMapCustomAreaLayer$$ >= $dvt$$11$$ && $DvtThematicMapKeyboardHandler$$ >= $DvtThematicMapControlPanel$$ || $DvtThematicMapEventManager$$ == $DvtThematicMapJsonParser$$.length - 1) {
        return $DvtMapDataLayer$$;
      }
    }
  };
  $DvtMapCustomAreaLayer$$.prototype.$setAreaLayerImage$ = function $$DvtMapCustomAreaLayer$$$$$setAreaLayerImage$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = null, $DvtThematicMapEventManager$$ = $dvt$$11$$.$Agent$.$isRightToLeft$(this.$_tmap$.$getCtx$());
    if ($DvtThematicMapControlPanel$$ && 0 < $DvtThematicMapControlPanel$$.length) {
      var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$[0].width, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$[0].height;
      this.$_layerWidth$ = $DvtThematicMapJsonParser$$;
      this.$_layerHeight$ = $DvtThematicMapKeyboardHandler$$;
      for (var $DvtMapDataLayer$$ = [], $DvtMapCustomAreaLayer$$ = 0;$DvtMapCustomAreaLayer$$ < $DvtThematicMapControlPanel$$.length;$DvtMapCustomAreaLayer$$++) {
        $DvtThematicMapEventManager$$ && "rtl" == $DvtThematicMapControlPanel$$[$DvtMapCustomAreaLayer$$].dir ? $DvtMapDataLayer$$.push($DvtThematicMapControlPanel$$[$DvtMapCustomAreaLayer$$]) : $DvtThematicMapEventManager$$ || "ltr" != $DvtThematicMapControlPanel$$[$DvtMapCustomAreaLayer$$].dir || $DvtMapDataLayer$$.push($DvtThematicMapControlPanel$$[$DvtMapCustomAreaLayer$$]);
      }
      this.$_areaLayerImages$ = 0 < $DvtMapDataLayer$$.length ? $DvtMapDataLayer$$ : $DvtThematicMapControlPanel$$;
      this.$_imageSrc$ = this.$_selectImageBasedOnResolution$();
      $DvtThematicMapJsonParser$$ = new $dvt$$11$$.Image(this.$_tmap$.$getCtx$(), this.$_imageSrc$, 0, 0, $DvtThematicMapJsonParser$$, $DvtThematicMapKeyboardHandler$$);
    }
    $DvtThematicMapJsonParser$$ && (this.$setAreaLabels$({image:[null, null]}), this.$setAreaShapes$({image:$DvtThematicMapJsonParser$$}));
  };
  $DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$);
    if (this.$Areas$.image) {
      var $DvtThematicMapJsonParser$$ = this.$_selectImageBasedOnResolution$();
      $DvtThematicMapJsonParser$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $DvtThematicMapJsonParser$$, this.$Areas$.image.$setSrc$(this.$_imageSrc$));
    }
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtMapDataLayer$$, $dvt$$11$$.$Obj$);
  $DvtMapDataLayer$$.prototype.Init = function $$DvtMapDataLayer$$$$Init$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    this.$_tmap$ = $DvtThematicMapControlPanel$$;
    this.$_clientId$ = $DvtThematicMapEventManager$$;
    this.$_options$ = $DvtMapDataLayer$$;
    this.$_areaObjs$ = [];
    this.$_dataObjs$ = [];
    this.$_dataAreaCollection$ = [];
    this.$_dataMarkerCollection$ = [];
    this.$_eventHandler$ = $DvtThematicMapKeyboardHandler$$;
    this.$_dragSource$ = new $dvt$$11$$.$DragSource$($DvtThematicMapControlPanel$$.$getCtx$());
    this.$_eventHandler$.$setDragSource$(this.$_dragSource$);
    this.$_dataAreaLayer$ = new $dvt$$11$$.$Container$(this.$_tmap$.$getCtx$());
    this.$_dataPointLayer$ = new $dvt$$11$$.$Container$(this.$_tmap$.$getCtx$());
    this.$_dataLabelLayer$ = new $dvt$$11$$.$Container$(this.$_tmap$.$getCtx$());
    this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
    this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
    this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
    this.$_parentLayer$ = $DvtThematicMapJsonParser$$;
    this.$_disclosed$ = [];
    this.$_drilled$ = [];
  };
  $DvtMapDataLayer$$.prototype.$getOptions$ = function $$DvtMapDataLayer$$$$$getOptions$$() {
    return this.$_options$;
  };
  $DvtMapDataLayer$$.prototype.$getContainers$ = function $$DvtMapDataLayer$$$$$getContainers$$() {
    return [this.$_dataAreaLayer$, this.$_dataPointLayer$, this.$_dataLabelLayer$];
  };
  $DvtMapDataLayer$$.prototype.$getScaledContainers$ = function $$DvtMapDataLayer$$$$$getScaledContainers$$() {
    return [this.$_dataAreaLayer$];
  };
  $DvtMapDataLayer$$.prototype.$getNonScaledContainers$ = function $$DvtMapDataLayer$$$$$getNonScaledContainers$$() {
    var $dvt$$11$$ = [this.$_dataLabelLayer$];
    this.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $dvt$$11$$.push(this.$_dataPointLayer$);
    return $dvt$$11$$;
  };
  $DvtMapDataLayer$$.prototype.$getAllObjects$ = function $$DvtMapDataLayer$$$$$getAllObjects$$() {
    return this.$_dataObjs$.concat(this.$_areaObjs$);
  };
  $DvtMapDataLayer$$.prototype.$getNavigableAreaObjects$ = function $$DvtMapDataLayer$$$$$getNavigableAreaObjects$$() {
    for (var $dvt$$11$$ = [], $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_areaObjs$.length;$DvtThematicMapControlPanel$$++) {
      this.$_areaObjs$[$DvtThematicMapControlPanel$$].$isDrilled$() || $dvt$$11$$.push(this.$_areaObjs$[$DvtThematicMapControlPanel$$]);
    }
    return $dvt$$11$$;
  };
  $DvtMapDataLayer$$.prototype.$getNavigableDisclosedAreaObjects$ = function $$DvtMapDataLayer$$$$$getNavigableDisclosedAreaObjects$$() {
    for (var $dvt$$11$$ = [], $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < this.$_areaObjs$.length;$DvtThematicMapControlPanel$$++) {
      for (var $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < this.$_disclosed$.length;$DvtThematicMapJsonParser$$++) {
        this.$_areaObjs$[$DvtThematicMapControlPanel$$].$getLocation$() == this.$_disclosed$[$DvtThematicMapJsonParser$$] && (this.$_areaObjs$[$DvtThematicMapControlPanel$$].$isDrilled$() || $dvt$$11$$.push(this.$_areaObjs$[$DvtThematicMapControlPanel$$]));
      }
    }
    return $dvt$$11$$;
  };
  $DvtMapDataLayer$$.prototype.$addDataObject$ = function $$DvtMapDataLayer$$$$$addDataObject$$($dvt$$11$$) {
    this.$_dataMarkerCollection$.push($dvt$$11$$);
    if ($dvt$$11$$) {
      this.$_dataObjs$.push($dvt$$11$$);
      this.$_eventHandler$.$associate$($dvt$$11$$.$getDisplayable$(), $dvt$$11$$);
      var $DvtThematicMapControlPanel$$ = $dvt$$11$$.$getLabel$();
      $DvtThematicMapControlPanel$$ && this.$_eventHandler$.$associate$($DvtThematicMapControlPanel$$, $dvt$$11$$);
    }
  };
  $DvtMapDataLayer$$.prototype.$addAreaObject$ = function $$DvtMapDataLayer$$$$$addAreaObject$$($dvt$$11$$) {
    this.$_dataAreaCollection$.push($dvt$$11$$);
    $dvt$$11$$ && (this.$_areaObjs$.push($dvt$$11$$), this.$_eventHandler$.$associate$($dvt$$11$$.$getDisplayable$(), $dvt$$11$$), $dvt$$11$$.$setAreaLayer$(this.$_dataAreaLayer$));
  };
  $DvtMapDataLayer$$.prototype.$_removeAreaObject$ = function $$DvtMapDataLayer$$$$$_removeAreaObject$$($dvt$$11$$) {
    $dvt$$11$$ = this.$_areaObjs$.indexOf($dvt$$11$$);
    -1 !== $dvt$$11$$ && this.$_areaObjs$.splice($dvt$$11$$, 1);
  };
  $DvtMapDataLayer$$.prototype.$getClientId$ = function $$DvtMapDataLayer$$$$$getClientId$$() {
    return this.$_clientId$;
  };
  $DvtMapDataLayer$$.prototype.$setAnimation$ = function $$DvtMapDataLayer$$$$$setAnimation$$($dvt$$11$$) {
    this.$_animType$ = $dvt$$11$$;
  };
  $DvtMapDataLayer$$.prototype.$getAnimation$ = function $$DvtMapDataLayer$$$$$getAnimation$$() {
    return this.$_animType$;
  };
  $DvtMapDataLayer$$.prototype.$setAnimationDuration$ = function $$DvtMapDataLayer$$$$$setAnimationDuration$$($dvt$$11$$) {
    this.$_animDur$ = $dvt$$11$$;
  };
  $DvtMapDataLayer$$.prototype.$getAnimationDuration$ = function $$DvtMapDataLayer$$$$$getAnimationDuration$$() {
    return this.$_animDur$;
  };
  $DvtMapDataLayer$$.prototype.$setSelectionMode$ = function $$DvtMapDataLayer$$$$$setSelectionMode$$($DvtThematicMapControlPanel$$) {
    if (this.$_selectionMode$ = $DvtThematicMapControlPanel$$) {
      this.$_selectionHandler$ = new $dvt$$11$$.$SelectionHandler$(this.$_selectionMode$), this.$_eventHandler$.$setSelectionHandler$(this.$_clientId$, this.$_selectionHandler$);
    }
  };
  $DvtMapDataLayer$$.prototype.$isSelectable$ = function $$DvtMapDataLayer$$$$$isSelectable$$() {
    return null != this.$_selectionMode$;
  };
  $DvtMapDataLayer$$.prototype.$_updateAreaShape$ = function $$DvtMapDataLayer$$$$$_updateAreaShape$$($dvt$$11$$) {
    var $DvtThematicMapControlPanel$$ = $dvt$$11$$.$getDisplayable$(), $DvtThematicMapJsonParser$$ = this.$_parentLayer$.$getAreaShape$($dvt$$11$$.$getLocation$());
    if ($DvtThematicMapJsonParser$$) {
      return $DvtThematicMapControlPanel$$.$setCmds$($DvtThematicMapJsonParser$$.$getCmds$()), !0;
    }
    this.$_removeAreaObject$($dvt$$11$$);
    return !1;
  };
  $DvtMapDataLayer$$.prototype.$_renderAreaAndLabel$ = function $$DvtMapDataLayer$$$$$_renderAreaAndLabel$$($dvt$$11$$) {
    if (this.$_updateAreaShape$(this.$_areaObjs$[$dvt$$11$$])) {
      var $DvtThematicMapControlPanel$$ = this.$_areaObjs$[$dvt$$11$$].$getDisplayable$();
      this.$_dataAreaLayer$.$addChild$($DvtThematicMapControlPanel$$);
      if ($dvt$$11$$ = this.$_areaObjs$[$dvt$$11$$].$getLabel$()) {
        $dvt$$11$$.$hasBounds$() || ($DvtThematicMapControlPanel$$ = $DvtThematicMapControlPanel$$.$getDimensions$(), $dvt$$11$$.$addBounds$($DvtThematicMapControlPanel$$)), $dvt$$11$$.update(this.$_pzcMatrix$);
      }
      return !0;
    }
    return !1;
  };
  $DvtMapDataLayer$$.prototype.$render$ = function $$DvtMapDataLayer$$$$$render$$($DvtThematicMapControlPanel$$) {
    this.$_bFixPatterns$ = !0;
    this.$_pzcMatrix$ = $DvtThematicMapControlPanel$$;
    $DvtThematicMapControlPanel$$ = {};
    var $DvtThematicMapJsonParser$$ = this.$_dataObjs$.slice();
    $DvtThematicMapJsonParser$$.sort(function compare($dvt$$11$$, $DvtThematicMapControlPanel$$) {
      return $dvt$$11$$.$getSize$() < $DvtThematicMapControlPanel$$.$getSize$() ? 1 : $dvt$$11$$.$getSize$() > $DvtThematicMapControlPanel$$.$getSize$() ? -1 : 0;
    });
    for (var $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapJsonParser$$.length;$DvtThematicMapEventManager$$++) {
      var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapJsonParser$$[$DvtThematicMapEventManager$$], $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$.$getDisplayable$(), $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.$getLabel$();
      if ($DvtMapCustomAreaLayer$$) {
        var $DvtMapAreaLayer$$ = new $dvt$$11$$.$Container$($DvtMapDataLayer$$.$getCtx$());
        this.$_dataPointLayer$.$addChild$($DvtMapAreaLayer$$);
        $DvtMapAreaLayer$$.$addChild$($DvtMapDataLayer$$);
        $DvtMapAreaLayer$$.$addChild$($DvtMapCustomAreaLayer$$);
        $DvtThematicMapKeyboardHandler$$.$positionLabel$();
      } else {
        this.$_dataPointLayer$.$addChild$($DvtMapDataLayer$$);
      }
      ($DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$.$getLocation$()) && ($DvtThematicMapControlPanel$$[$DvtThematicMapKeyboardHandler$$] = !0);
    }
    for ($DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < this.$_areaObjs$.length;$DvtThematicMapEventManager$$++) {
      $DvtThematicMapControlPanel$$[this.$_areaObjs$[$DvtThematicMapEventManager$$].$getLocation$()] && this.$_areaObjs$[$DvtThematicMapEventManager$$].$removeLabel$(), this.$_renderAreaAndLabel$($DvtThematicMapEventManager$$) || $DvtThematicMapEventManager$$--;
    }
    this.$_initSelections$ && this.$_processInitialSelections$();
  };
  $DvtMapDataLayer$$.prototype.$discloseAreas$ = function $$DvtMapDataLayer$$$$$discloseAreas$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.$_pzcMatrix$ = $DvtThematicMapJsonParser$$;
    for (var $DvtThematicMapEventManager$$ = [], $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $dvt$$11$$.length;$DvtThematicMapKeyboardHandler$$++) {
      for (var $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < this.$_areaObjs$.length;$DvtMapDataLayer$$++) {
        if (this.$_areaObjs$[$DvtMapDataLayer$$].$getLocation$() == $dvt$$11$$[$DvtThematicMapKeyboardHandler$$]) {
          $DvtThematicMapEventManager$$.push(this.$_areaObjs$[$DvtMapDataLayer$$].$getLocation$());
          this.$_renderAreaAndLabel$($DvtMapDataLayer$$);
          var $DvtMapCustomAreaLayer$$ = this.$_areaObjs$[$DvtMapDataLayer$$].$getDisplayable$();
          $DvtThematicMapControlPanel$$.push($DvtMapCustomAreaLayer$$);
          $DvtMapCustomAreaLayer$$.$handleZoomEvent$($DvtThematicMapJsonParser$$);
          if ($DvtMapDataLayer$$ = this.$_areaObjs$[$DvtMapDataLayer$$].$getLabel$()) {
            $DvtThematicMapControlPanel$$.push($DvtMapDataLayer$$), ($DvtMapDataLayer$$ = $DvtMapDataLayer$$.$_leaderLine$) && $DvtThematicMapControlPanel$$.push($DvtMapDataLayer$$);
          }
          break;
        }
      }
    }
    for ($DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < this.$_dataObjs$.length;$DvtMapDataLayer$$++) {
      for ($DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $dvt$$11$$.length;$DvtThematicMapKeyboardHandler$$++) {
        $DvtThematicMapJsonParser$$ = this.$_dataObjs$[$DvtMapDataLayer$$].$getLocation$(), $DvtMapCustomAreaLayer$$ = this.$_dataObjs$[$DvtMapDataLayer$$].$getDisplayable$(), null != $DvtThematicMapJsonParser$$ ? $DvtThematicMapJsonParser$$ == $dvt$$11$$[$DvtThematicMapKeyboardHandler$$] && (this.$_dataPointLayer$.$addChild$($DvtMapCustomAreaLayer$$), $DvtThematicMapControlPanel$$.push($DvtMapCustomAreaLayer$$)) : (this.$_dataPointLayer$.$addChild$($DvtMapCustomAreaLayer$$), $DvtThematicMapControlPanel$$.push($DvtMapCustomAreaLayer$$))
        ;
      }
    }
    this.$_disclosed$ = this.$_disclosed$.concat($DvtThematicMapEventManager$$);
  };
  $DvtMapDataLayer$$.prototype.$undiscloseAreas$ = function $$DvtMapDataLayer$$$$$undiscloseAreas$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    for (var $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapEventManager$$++) {
      for (var $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < this.$_areaObjs$.length;$DvtThematicMapKeyboardHandler$$++) {
        if (this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getLocation$() == $DvtThematicMapControlPanel$$[$DvtThematicMapEventManager$$]) {
          this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$isDrilled$() && this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$setDrilled$(!1);
          this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$]);
          var $DvtMapDataLayer$$ = $dvt$$11$$.$ArrayUtils$.$getIndex$(this.$_disclosed$, $DvtThematicMapControlPanel$$[$DvtThematicMapEventManager$$]);
          -1 < $DvtMapDataLayer$$ && (this.$_disclosed$.splice($DvtMapDataLayer$$, 1), $DvtThematicMapJsonParser$$.push(this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getDisplayable$()), $DvtThematicMapKeyboardHandler$$ = this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getLabel$()) && ($DvtThematicMapJsonParser$$.push($DvtThematicMapKeyboardHandler$$), $DvtThematicMapJsonParser$$.push($DvtThematicMapKeyboardHandler$$.$_leaderLine$));
          break;
        }
      }
    }
  };
  $DvtMapDataLayer$$.prototype.$drill$ = function $$DvtMapDataLayer$$$$$drill$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < this.$_areaObjs$.length;$DvtThematicMapJsonParser$$++) {
      if (this.$_areaObjs$[$DvtThematicMapJsonParser$$].$getLocation$() == $dvt$$11$$) {
        this.$_areaObjs$[$DvtThematicMapJsonParser$$].$setDrilled$(!0);
        this.$_drilled$.push($dvt$$11$$);
        $DvtThematicMapControlPanel$$.push(this.$_areaObjs$[$DvtThematicMapJsonParser$$].$getDisplayable$());
        if ($DvtThematicMapJsonParser$$ = this.$_areaObjs$[$DvtThematicMapJsonParser$$].$getLabel$()) {
          $DvtThematicMapControlPanel$$.push($DvtThematicMapJsonParser$$), ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$_leaderLine$) && $DvtThematicMapControlPanel$$.push($DvtThematicMapJsonParser$$);
        }
        break;
      }
    }
    for ($DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < this.$_dataObjs$.length;$DvtThematicMapJsonParser$$++) {
      if (this.$_dataObjs$[$DvtThematicMapJsonParser$$].$getLocation$() == $dvt$$11$$) {
        $DvtThematicMapControlPanel$$.push(this.$_dataObjs$[$DvtThematicMapJsonParser$$].$getDisplayable$());
        break;
      }
    }
  };
  $DvtMapDataLayer$$.prototype.$undrill$ = function $$DvtMapDataLayer$$$$$undrill$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    for (var $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < this.$_areaObjs$.length;$DvtThematicMapEventManager$$++) {
      if (this.$_areaObjs$[$DvtThematicMapEventManager$$].$getLocation$() == $DvtThematicMapControlPanel$$) {
        var $DvtThematicMapKeyboardHandler$$ = $dvt$$11$$.$ArrayUtils$.$getIndex$(this.$_drilled$, $DvtThematicMapControlPanel$$);
        this.$_drilled$.splice($DvtThematicMapKeyboardHandler$$, 1);
        this.$_areaObjs$[$DvtThematicMapEventManager$$].$setDrilled$(!1);
        $DvtThematicMapKeyboardHandler$$ = this.$_areaObjs$[$DvtThematicMapEventManager$$].$getDisplayable$();
        this.$_dataAreaLayer$.$addChild$($DvtThematicMapKeyboardHandler$$);
        $DvtThematicMapJsonParser$$.push($DvtThematicMapKeyboardHandler$$);
        if ($DvtThematicMapEventManager$$ = this.$_areaObjs$[$DvtThematicMapEventManager$$].$getLabel$()) {
          $DvtThematicMapEventManager$$.update(this.$_pzcMatrix$), $DvtThematicMapJsonParser$$.push($DvtThematicMapEventManager$$), $DvtThematicMapJsonParser$$.push($DvtThematicMapEventManager$$.$_leaderLine$);
        }
        break;
      }
    }
    for ($DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < this.$_dataObjs$.length;$DvtThematicMapEventManager$$++) {
      if (this.$_dataObjs$[$DvtThematicMapEventManager$$].$getLocation$() == $DvtThematicMapControlPanel$$) {
        $DvtThematicMapKeyboardHandler$$ = this.$_dataObjs$[$DvtThematicMapEventManager$$].$getDisplayable$();
        this.$_dataPointLayer$.$addChild$($DvtThematicMapKeyboardHandler$$);
        $DvtThematicMapJsonParser$$.push($DvtThematicMapKeyboardHandler$$);
        break;
      }
    }
  };
  $DvtMapDataLayer$$.prototype.reset = function $$DvtMapDataLayer$$$$reset$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    if (this.$_selectionHandler$) {
      for (var $DvtThematicMapEventManager$$ = this.$_selectionHandler$.getSelection(), $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapEventManager$$.length;$DvtThematicMapKeyboardHandler$$++) {
        (!$DvtThematicMapJsonParser$$ || $DvtThematicMapJsonParser$$ && -1 == $dvt$$11$$.$ArrayUtils$.$getIndex$($DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$].$getLocation$())) && this.$_selectionHandler$.$removeFromSelection$($DvtThematicMapEventManager$$[$DvtThematicMapKeyboardHandler$$]);
      }
    }
    if ("none" != this.$_tmap$.$_drillMode$) {
      for ($DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < this.$_drilled$.length;$DvtThematicMapEventManager$$++) {
        for ($DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < this.$_areaObjs$.length;$DvtThematicMapKeyboardHandler$$++) {
          if (this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getLocation$() == this.$_drilled$[$DvtThematicMapEventManager$$]) {
            this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$setDrilled$(!1);
            var $DvtMapDataLayer$$ = this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getDisplayable$();
            this.$_dataAreaLayer$.$addChild$($DvtMapDataLayer$$);
            $DvtThematicMapControlPanel$$.push($DvtMapDataLayer$$);
            if ($DvtThematicMapKeyboardHandler$$ = this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getLabel$()) {
              $DvtThematicMapKeyboardHandler$$.update(this.$_pzcMatrix$), $DvtThematicMapControlPanel$$.push($DvtThematicMapKeyboardHandler$$), $DvtThematicMapControlPanel$$.push($DvtThematicMapKeyboardHandler$$.$_leaderLine$);
            }
            break;
          }
        }
        for ($DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < this.$_dataObjs$.length;$DvtThematicMapKeyboardHandler$$++) {
          if (this.$_dataObjs$[$DvtThematicMapKeyboardHandler$$].$getLocation$() == this.$_drilled$[$DvtThematicMapEventManager$$]) {
            $DvtMapDataLayer$$ = this.$_dataObjs$[$DvtThematicMapKeyboardHandler$$].$getDisplayable$();
            this.$_dataPointLayer$.$addChild$($DvtMapDataLayer$$);
            $DvtThematicMapControlPanel$$.push($DvtMapDataLayer$$);
            break;
          }
        }
      }
    }
    this.$_drilled$ = [];
  };
  $DvtMapDataLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapDataLayer$$$$$HandleZoomEvent$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    this.$_pzcMatrix$ = $DvtThematicMapJsonParser$$;
    var $DvtThematicMapEventManager$$ = $DvtThematicMapJsonParser$$.$_a$, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.$getSubType$();
    if (this.$_bFixPatterns$ && $DvtThematicMapKeyboardHandler$$ == $dvt$$11$$.$ZoomEvent$.$SUBTYPE_ZOOMED$) {
      for (this.$_bFixPatterns$ = !1, $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < this.$_areaObjs$.length;$DvtThematicMapKeyboardHandler$$++) {
        var $DvtMapDataLayer$$ = this.$_areaObjs$[$DvtThematicMapKeyboardHandler$$].$getDisplayable$(), $DvtMapCustomAreaLayer$$ = $DvtMapDataLayer$$.$_ptFill$;
        if ($DvtMapCustomAreaLayer$$) {
          var $DvtMapAreaLayer$$ = new $dvt$$11$$.$PatternFill$;
          $DvtMapCustomAreaLayer$$.$mergeProps$($DvtMapAreaLayer$$);
          $DvtMapAreaLayer$$.$setMatrix$(new $dvt$$11$$.$Matrix$(1 / $DvtThematicMapEventManager$$, null, null, 1 / $DvtThematicMapEventManager$$));
          $DvtMapDataLayer$$.$setFill$($DvtMapAreaLayer$$);
        }
      }
    }
    $DvtThematicMapKeyboardHandler$$ = this.$_areaObjs$;
    for ($DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapKeyboardHandler$$.length;$DvtThematicMapEventManager$$++) {
      $DvtThematicMapKeyboardHandler$$[$DvtThematicMapEventManager$$].$HandleZoomEvent$($DvtThematicMapJsonParser$$);
    }
    if (this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
      for ($DvtThematicMapKeyboardHandler$$ = this.$_dataObjs$, $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapKeyboardHandler$$.length;$DvtThematicMapEventManager$$++) {
        $DvtThematicMapKeyboardHandler$$[$DvtThematicMapEventManager$$].$HandleZoomEvent$($DvtThematicMapJsonParser$$);
      }
    }
  };
  $DvtMapDataLayer$$.prototype.$HandlePanEvent$ = function $$DvtMapDataLayer$$$$$HandlePanEvent$$($dvt$$11$$) {
    this.$_pzcMatrix$ = $dvt$$11$$;
  };
  $DvtMapDataLayer$$.prototype.$setInitialSelections$ = function $$DvtMapDataLayer$$$$$setInitialSelections$$($dvt$$11$$) {
    this.$_initSelections$ = $dvt$$11$$;
  };
  $DvtMapDataLayer$$.prototype.$_processInitialSelections$ = function $$DvtMapDataLayer$$$$$_processInitialSelections$$() {
    this.$_selectionHandler$ && (this.$_selectionHandler$.$processInitialSelections$(this.$_initSelections$, this.$getAllObjects$()), this.$_initSelections$ = null);
  };
  $DvtMapDataLayer$$.prototype.$__getDragTransferable$ = function $$DvtMapDataLayer$$$$$__getDragTransferable$$($dvt$$11$$) {
    if (this.$_selectionHandler$) {
      $dvt$$11$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($dvt$$11$$, !1), this.$_eventHandler$.$fireSelectionEvent$($dvt$$11$$));
      $dvt$$11$$ = [];
      for (var $DvtThematicMapControlPanel$$ = this.$_selectionHandler$.getSelection(), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
        $dvt$$11$$.push($DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].getId());
      }
      return $dvt$$11$$;
    }
    return null;
  };
  $DvtMapDataLayer$$.prototype.$__getDragFeedback$ = function $$DvtMapDataLayer$$$$$__getDragFeedback$$() {
    for (var $dvt$$11$$ = [], $DvtThematicMapControlPanel$$ = this.$_selectionHandler$.getSelection(), $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapJsonParser$$++) {
      $dvt$$11$$.push($DvtThematicMapControlPanel$$[$DvtThematicMapJsonParser$$].$getDisplayable$());
    }
    return $dvt$$11$$;
  };
  $DvtMapDataLayer$$.prototype.$getSelectedAreas$ = function $$DvtMapDataLayer$$$$$getSelectedAreas$$($dvt$$11$$) {
    for (var $DvtThematicMapControlPanel$$ = [], $DvtThematicMapJsonParser$$ = this.$_areaObjs$, $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $dvt$$11$$.length;$DvtThematicMapEventManager$$++) {
      for (var $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapJsonParser$$.length;$DvtThematicMapKeyboardHandler$$++) {
        if ($DvtThematicMapJsonParser$$[$DvtThematicMapKeyboardHandler$$].getId() == $dvt$$11$$[$DvtThematicMapEventManager$$]) {
          $DvtThematicMapControlPanel$$.push($DvtThematicMapJsonParser$$[$DvtThematicMapKeyboardHandler$$].$getLocation$());
          break;
        }
      }
    }
    return $DvtThematicMapControlPanel$$;
  };
  $DvtMapDataLayer$$.prototype.$destroy$ = function $$DvtMapDataLayer$$$$$destroy$$() {
    for (var $dvt$$11$$ = this.$getAllObjects$(), $DvtThematicMapControlPanel$$ = 0;$DvtThematicMapControlPanel$$ < $dvt$$11$$.length;$DvtThematicMapControlPanel$$++) {
      var $DvtThematicMapJsonParser$$ = $dvt$$11$$[$DvtThematicMapControlPanel$$].$getDisplayable$();
      $DvtThematicMapJsonParser$$ instanceof $DvtCustomDataItem$$ && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$_dataItem$, $DvtThematicMapJsonParser$$.$destroy$ && $DvtThematicMapJsonParser$$.$destroy$());
    }
    this.$_eventHandler$ = null;
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtThematicMapKeyboardHandler$$, $dvt$$11$$.$PanZoomCanvasKeyboardHandler$);
  $DvtThematicMapKeyboardHandler$$.prototype.Init = function $$DvtThematicMapKeyboardHandler$$$$Init$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    $DvtThematicMapKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$);
    this.$_tmap$ = $dvt$$11$$;
  };
  $DvtThematicMapKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtThematicMapKeyboardHandler$$$$$isSelectionEvent$$($dvt$$11$$) {
    return this.$isNavigationEvent$($dvt$$11$$) && !$dvt$$11$$.ctrlKey;
  };
  $DvtThematicMapKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtThematicMapKeyboardHandler$$$$$processKeyDown$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.keyCode;
    if ($DvtThematicMapJsonParser$$ == $dvt$$11$$.KeyboardEvent.$CLOSE_BRACKET$) {
      var $DvtThematicMapJsonParser$$ = this.$_eventManager$.$getFocus$(), $DvtThematicMapEventManager$$ = this.$_tmap$.$getNavigableObjects$();
      $DvtThematicMapJsonParser$$ instanceof $DvtMapAreaPeer$$ && 0 < $DvtThematicMapEventManager$$.length && ($DvtThematicMapJsonParser$$ = $dvt$$11$$.$KeyboardHandler$.$getNextAdjacentNavigable$($DvtThematicMapJsonParser$$, $DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$));
      this.$_eventManager$.$SetClickInfo$($DvtThematicMapJsonParser$$);
    } else {
      $DvtThematicMapJsonParser$$ == $dvt$$11$$.KeyboardEvent.$OPEN_BRACKET$ ? ($DvtThematicMapJsonParser$$ = this.$_eventManager$.$getFocus$(), $DvtThematicMapEventManager$$ = this.$_tmap$.$getNavigableAreas$(), !($DvtThematicMapJsonParser$$ instanceof $DvtMapAreaPeer$$) && 0 < $DvtThematicMapEventManager$$.length && ($DvtThematicMapJsonParser$$ = $dvt$$11$$.$KeyboardHandler$.$getNextAdjacentNavigable$($DvtThematicMapJsonParser$$, $DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$)), this.$_eventManager$.$SetClickInfo$($DvtThematicMapJsonParser$$)) : 
      ($DvtThematicMapJsonParser$$ = $DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtThematicMapControlPanel$$), this.$isNavigationEvent$($DvtThematicMapControlPanel$$) && !$DvtThematicMapControlPanel$$.ctrlKey && this.$_eventManager$.$SetClickInfo$($DvtThematicMapJsonParser$$));
    }
    return $DvtThematicMapJsonParser$$;
  };
  $DvtThematicMapKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtThematicMapKeyboardHandler$$$$$isMultiSelectEvent$$($DvtThematicMapControlPanel$$) {
    return $DvtThematicMapControlPanel$$.keyCode == $dvt$$11$$.KeyboardEvent.$SPACE$ && $DvtThematicMapControlPanel$$.ctrlKey;
  };
  $DvtThematicMapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtThematicMapKeyboardHandler$$$$$isNavigationEvent$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $DvtThematicMapControlPanel$$);
    $DvtThematicMapJsonParser$$ || ($DvtThematicMapControlPanel$$ = $DvtThematicMapControlPanel$$.keyCode, $DvtThematicMapControlPanel$$ != $dvt$$11$$.KeyboardEvent.$OPEN_BRACKET$ && $DvtThematicMapControlPanel$$ != $dvt$$11$$.KeyboardEvent.$CLOSE_BRACKET$) || ($DvtThematicMapJsonParser$$ = !0);
    return $DvtThematicMapJsonParser$$;
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtThematicMapEventManager$$, $dvt$$11$$.$EventManager$);
  $DvtThematicMapEventManager$$.prototype.Init = function $$DvtThematicMapEventManager$$$$Init$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    $DvtThematicMapEventManager$$.$superclass$.Init.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    this.$_selectionHandlers$ = {};
    this.$_tmap$ = $DvtThematicMapJsonParser$$;
    this.$_bPassOnEvent$ = !1;
  };
  $DvtThematicMapEventManager$$.prototype.$getSelectionHandler$ = function $$DvtThematicMapEventManager$$$$$getSelectionHandler$$($dvt$$11$$) {
    if ($dvt$$11$$ && $dvt$$11$$.$getDataLayer$) {
      return this.$_selectionHandlers$[$dvt$$11$$.$getDataLayer$().$getClientId$()];
    }
  };
  $DvtThematicMapEventManager$$.prototype.$setSelectionHandler$ = function $$DvtThematicMapEventManager$$$$$setSelectionHandler$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    this.$_selectionHandlers$[$dvt$$11$$] = $DvtThematicMapControlPanel$$;
  };
  $DvtThematicMapEventManager$$.prototype.$setDrillMode$ = function $$DvtThematicMapEventManager$$$$$setDrillMode$$($dvt$$11$$) {
    this.$_drillMode$ = $dvt$$11$$;
  };
  $DvtThematicMapEventManager$$.prototype.$removeFromSelection$ = function $$DvtThematicMapEventManager$$$$$removeFromSelection$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$_selectionHandlers$[$dvt$$11$$];
    $DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.$removeFromSelection$($DvtThematicMapControlPanel$$);
  };
  $DvtThematicMapEventManager$$.prototype.$clearSelection$ = function $$DvtThematicMapEventManager$$$$$clearSelection$$($dvt$$11$$) {
    ($dvt$$11$$ = this.$_selectionHandlers$[$dvt$$11$$]) && $dvt$$11$$.$clearSelection$();
  };
  $DvtThematicMapEventManager$$.prototype.$setInitialFocus$ = function $$DvtThematicMapEventManager$$$$$setInitialFocus$$($dvt$$11$$) {
    $dvt$$11$$ && $DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this, $dvt$$11$$);
  };
  $DvtThematicMapEventManager$$.prototype.$OnMouseOver$ = function $$DvtThematicMapEventManager$$$$$OnMouseOver$$($dvt$$11$$) {
    var $DvtThematicMapControlPanel$$ = this.$GetLogicalObject$($dvt$$11$$.target);
    $DvtThematicMapControlPanel$$ && $DvtThematicMapControlPanel$$.$getShowPopupBehaviors$ && $DvtThematicMapControlPanel$$.$getDataLayer$ && this.$_tmap$.$setEventClientId$($DvtThematicMapControlPanel$$.$getDataLayer$().$getClientId$());
    $DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $dvt$$11$$);
  };
  $DvtThematicMapEventManager$$.prototype.$OnMouseOut$ = function $$DvtThematicMapEventManager$$$$$OnMouseOut$$($dvt$$11$$) {
    this.$_tmap$.$setEventClientId$(null);
    $DvtThematicMapEventManager$$.$superclass$.$OnMouseOut$.call(this, $dvt$$11$$);
  };
  $DvtThematicMapEventManager$$.prototype.$OnClick$ = function $$DvtThematicMapEventManager$$$$$OnClick$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$GetLogicalObject$($DvtThematicMapControlPanel$$.target);
    this.$SetClickInfo$($DvtThematicMapJsonParser$$);
    if (!($DvtThematicMapJsonParser$$ && $DvtThematicMapJsonParser$$.$isSelectable$ && $DvtThematicMapJsonParser$$.$isSelectable$())) {
      for (var $DvtThematicMapKeyboardHandler$$ in this.$_selectionHandlers$) {
        if (this.$_selectionHandlers$[$DvtThematicMapKeyboardHandler$$].$processClick$(null, $DvtThematicMapControlPanel$$.ctrlKey)) {
          var $DvtMapDataLayer$$ = $dvt$$11$$.$EventFactory$.$newSelectionEvent$([]);
          $DvtMapDataLayer$$.clientId = $DvtThematicMapKeyboardHandler$$;
          this.$_callback$.call(this.$_callbackObj$, $DvtMapDataLayer$$);
        }
      }
    }
    $DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $DvtThematicMapControlPanel$$);
    this.$_handleClick$($DvtThematicMapJsonParser$$, $DvtThematicMapControlPanel$$.pageX, $DvtThematicMapControlPanel$$.pageY);
  };
  $DvtThematicMapEventManager$$.prototype.$_handleClick$ = function $$DvtThematicMapEventManager$$$$$_handleClick$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    if ($dvt$$11$$ instanceof $DvtMapObjPeer$$) {
      var $DvtThematicMapEventManager$$ = $dvt$$11$$.$getLinkCallback$();
      $DvtThematicMapEventManager$$ ? $DvtThematicMapEventManager$$.call() : $dvt$$11$$.$hasAction$() ? this.$HandleAction$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) : $dvt$$11$$.$getShowPopupBehaviors$() && this.$_tmap$.$setEventClientId$($dvt$$11$$.$getDataLayer$().$getClientId$());
    }
  };
  $DvtThematicMapEventManager$$.prototype.$HandleAction$ = function $$DvtThematicMapEventManager$$$$$HandleAction$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    var $DvtThematicMapKeyboardHandler$$ = new $dvt$$11$$.$MapActionEvent$($DvtThematicMapControlPanel$$.$getClientId$(), $DvtThematicMapControlPanel$$.getId(), $DvtThematicMapControlPanel$$.$getAction$());
    $DvtThematicMapKeyboardHandler$$.$addParam$("clientId", $DvtThematicMapControlPanel$$.$getDataLayer$().$getClientId$());
    null != $DvtThematicMapJsonParser$$ && null != $DvtThematicMapEventManager$$ && ($DvtThematicMapControlPanel$$ = this.$_tmap$.$getCtx$().$pageToStageCoords$($DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$), $DvtThematicMapKeyboardHandler$$.$addParam$("pointXY", {x:$DvtThematicMapControlPanel$$.x, y:$DvtThematicMapControlPanel$$.y}));
    this.$hideTooltip$();
    this.$_callback$.call(this.$_callbackObj$, $DvtThematicMapKeyboardHandler$$);
  };
  $DvtThematicMapEventManager$$.prototype.$SetClickInfo$ = function $$DvtThematicMapEventManager$$$$$SetClickInfo$$($dvt$$11$$) {
    var $DvtThematicMapControlPanel$$ = null, $DvtThematicMapJsonParser$$ = null, $DvtThematicMapEventManager$$ = null;
    $dvt$$11$$ && ($dvt$$11$$ instanceof $DvtMapObjPeer$$ ? $DvtThematicMapEventManager$$ = $dvt$$11$$.$getDisplayable$() : $dvt$$11$$ instanceof $DvtMapArea$$ && ($DvtThematicMapEventManager$$ = $dvt$$11$$), $dvt$$11$$.$getDataLayer$ && ($dvt$$11$$ = $dvt$$11$$.$getDataLayer$(), $DvtThematicMapControlPanel$$ = $dvt$$11$$.$getClientId$(), $DvtThematicMapJsonParser$$ = $dvt$$11$$.$_parentLayer$.$LayerName$));
    this.$_tmap$.$setClickInfo$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$);
  };
  $DvtThematicMapEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtThematicMapEventManager$$$$$OnDblClickInternal$$($DvtThematicMapControlPanel$$) {
    $DvtThematicMapControlPanel$$ = this.$GetLogicalObject$($DvtThematicMapControlPanel$$.target);
    this.$getSelectionHandler$($DvtThematicMapControlPanel$$) && this.$_drillMode$ && "none" != this.$_drillMode$ && ($DvtThematicMapControlPanel$$ = new $dvt$$11$$.$MapDrillEvent$($dvt$$11$$.$MapDrillEvent$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $DvtThematicMapControlPanel$$));
  };
  $DvtThematicMapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtThematicMapEventManager$$$$$ProcessKeyboardEvent$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = !0, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.keyCode, $DvtMapDataLayer$$ = this.$getFocus$(), $DvtMapCustomAreaLayer$$ = $DvtMapDataLayer$$.$getDisplayable$();
    $DvtThematicMapKeyboardHandler$$ != $dvt$$11$$.KeyboardEvent.$TAB$ && this.$_bPassOnEvent$ ? ($DvtMapCustomAreaLayer$$.$fireKeyboardListener$($DvtThematicMapControlPanel$$), $DvtThematicMapControlPanel$$.preventDefault()) : ($DvtThematicMapKeyboardHandler$$ == $dvt$$11$$.KeyboardEvent.ZERO || $DvtThematicMapKeyboardHandler$$ == $dvt$$11$$.KeyboardEvent.$NUMPAD_ZERO$) && $DvtThematicMapControlPanel$$.ctrlKey && $DvtThematicMapControlPanel$$.shiftKey ? (this.$_tmap$.$resetMap$(), $DvtThematicMapControlPanel$$.preventDefault()) : 
    $DvtThematicMapKeyboardHandler$$ == $dvt$$11$$.KeyboardEvent.$BACK_SLASH$ ? (($DvtMapDataLayer$$ = this.$_tmap$.$_legendPanel$) && ($DvtMapDataLayer$$ instanceof $dvt$$11$$.$CollapsiblePanel$ ? $DvtMapDataLayer$$.$setCollapsed$(!$DvtMapDataLayer$$.isCollapsed()) : $DvtMapDataLayer$$ instanceof $dvt$$11$$.$PanelDrawer$ && $DvtMapDataLayer$$.$setDisclosed$(!$DvtMapDataLayer$$.$isDisclosed$())), $DvtThematicMapControlPanel$$.preventDefault()) : $DvtThematicMapKeyboardHandler$$ == $dvt$$11$$.KeyboardEvent.$ENTER$ ? 
    $DvtMapDataLayer$$ instanceof $DvtMapObjPeer$$ && (($DvtThematicMapKeyboardHandler$$ = $DvtMapDataLayer$$.$getLinkCallback$()) ? $DvtThematicMapKeyboardHandler$$.call() : $DvtMapDataLayer$$.$hasAction$() ? this.$HandleAction$($DvtMapDataLayer$$) : $DvtThematicMapControlPanel$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $DvtThematicMapControlPanel$$.preventDefault()) : $DvtThematicMapKeyboardHandler$$ == $dvt$$11$$.KeyboardEvent.$SPACE$ && $DvtThematicMapControlPanel$$.ctrlKey ? 
    (this.$SetClickInfo$($DvtMapDataLayer$$), this.$ProcessSelectionEventHelper$($DvtMapDataLayer$$, !0), $DvtThematicMapControlPanel$$.preventDefault()) : $DvtThematicMapKeyboardHandler$$ != $dvt$$11$$.KeyboardEvent.ZERO && $DvtThematicMapKeyboardHandler$$ != $dvt$$11$$.KeyboardEvent.$NUMPAD_ZERO$ || !$DvtThematicMapControlPanel$$.ctrlKey ? $DvtThematicMapKeyboardHandler$$ == $dvt$$11$$.KeyboardEvent.$TAB$ && $DvtMapCustomAreaLayer$$ instanceof $DvtCustomDataItem$$ ? !$DvtThematicMapControlPanel$$.shiftKey && 
    $DvtMapDataLayer$$.$isShowingKeyboardFocusEffect$() ? ($DvtMapDataLayer$$.$hideKeyboardFocusEffect$(), $DvtMapCustomAreaLayer$$.$fireKeyboardListener$($DvtThematicMapControlPanel$$), $DvtThematicMapControlPanel$$.preventDefault(), this.$_bPassOnEvent$ = !0) : ($DvtThematicMapControlPanel$$.shiftKey && this.$_bPassOnEvent$ ? (this.$ShowFocusEffect$($DvtThematicMapControlPanel$$, $DvtMapDataLayer$$), $DvtThematicMapControlPanel$$.preventDefault()) : (this.$_bPassOnEvent$ && $DvtMapDataLayer$$.$showKeyboardFocusEffect$(), 
    $DvtThematicMapJsonParser$$ = $DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtThematicMapControlPanel$$)), this.$_bPassOnEvent$ = !1) : $DvtThematicMapJsonParser$$ = $DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtThematicMapControlPanel$$) : ($DvtThematicMapControlPanel$$.altKey ? this.$_tmap$.$fitRegion$($DvtMapCustomAreaLayer$$) : this.$_tmap$.$fitSelectedRegions$(), $DvtThematicMapControlPanel$$.preventDefault());
    return $DvtThematicMapJsonParser$$;
  };
  $DvtThematicMapEventManager$$.prototype.$OnComponentTouchClick$ = function $$DvtThematicMapEventManager$$$$$OnComponentTouchClick$$($DvtThematicMapControlPanel$$) {
    if (!this.$GetEventInfo$($DvtThematicMapControlPanel$$, $dvt$$11$$.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$)) {
      var $DvtThematicMapJsonParser$$ = this.$GetLogicalObject$($DvtThematicMapControlPanel$$.target);
      this.$SetClickInfo$($DvtThematicMapJsonParser$$);
      if ($DvtThematicMapJsonParser$$ instanceof $dvt$$11$$.$ThematicMap$) {
        for (var $DvtThematicMapKeyboardHandler$$ in this.$_selectionHandlers$) {
          if (this.$_selectionHandlers$[$DvtThematicMapKeyboardHandler$$].$processClick$(null, $DvtThematicMapControlPanel$$.ctrlKey)) {
            for (var $DvtMapDataLayer$$ = this.$_selectionHandlers$[$DvtThematicMapKeyboardHandler$$].getSelection(), $DvtMapCustomAreaLayer$$ = [], $DvtMapAreaLayer$$ = 0;$DvtMapAreaLayer$$ < $DvtMapDataLayer$$.length;$DvtMapAreaLayer$$++) {
              $DvtMapCustomAreaLayer$$.push($DvtMapDataLayer$$[$DvtMapAreaLayer$$].getId());
            }
            $DvtMapDataLayer$$ = $dvt$$11$$.$EventFactory$.$newSelectionEvent$($DvtMapCustomAreaLayer$$);
            this.$_callback$.call(this.$_callbackObj$, $DvtMapDataLayer$$);
          }
        }
      }
      $DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $DvtThematicMapControlPanel$$);
      this.$_handleClick$($DvtThematicMapJsonParser$$, $DvtThematicMapControlPanel$$.$touch$.pageX, $DvtThematicMapControlPanel$$.$touch$.pageY);
    }
  };
  $DvtThematicMapEventManager$$.prototype.$HandleTouchHoverStartInternal$ = function $$DvtThematicMapEventManager$$$$$HandleTouchHoverStartInternal$$($dvt$$11$$) {
    ($dvt$$11$$ = this.$GetLogicalObject$($dvt$$11$$.target)) && $dvt$$11$$.$getShowPopupBehaviors$ && $dvt$$11$$.$getDataLayer$ ? this.$_tmap$.$setEventClientId$($dvt$$11$$.$getDataLayer$().$getClientId$()) : this.$_tmap$.$setEventClientId$(null);
  };
  $DvtThematicMapEventManager$$.prototype.$HandleTouchHoverOverInternal$ = function $$DvtThematicMapEventManager$$$$$HandleTouchHoverOverInternal$$($dvt$$11$$) {
    ($dvt$$11$$ = this.$GetLogicalObject$($dvt$$11$$.target)) && $dvt$$11$$.$getShowPopupBehaviors$ && $dvt$$11$$.$getDataLayer$ ? this.$_tmap$.$setEventClientId$($dvt$$11$$.$getDataLayer$().$getClientId$()) : this.$_tmap$.$setEventClientId$(null);
  };
  $DvtThematicMapEventManager$$.prototype.$HandleTouchDblClickInternal$ = function $$DvtThematicMapEventManager$$$$$HandleTouchDblClickInternal$$($DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$GetLogicalObject$($DvtThematicMapControlPanel$$.target);
    $DvtThematicMapJsonParser$$ && this.$getSelectionHandler$($DvtThematicMapJsonParser$$) && this.$_drillMode$ && "none" != this.$_drillMode$ && (this.$ProcessSelectionEventHelper$($DvtThematicMapJsonParser$$, $DvtThematicMapControlPanel$$.ctrlKey), $DvtThematicMapControlPanel$$ = new $dvt$$11$$.$MapDrillEvent$($dvt$$11$$.$MapDrillEvent$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $DvtThematicMapControlPanel$$));
  };
  $DvtThematicMapEventManager$$.prototype.$HandleTouchActionsEnd$ = function $$DvtThematicMapEventManager$$$$$HandleTouchActionsEnd$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = this.$GetLogicalObject$($dvt$$11$$.target);
    this.$SetClickInfo$($DvtThematicMapJsonParser$$);
    $DvtThematicMapEventManager$$.$superclass$.$HandleTouchActionsEnd$.call(this, $dvt$$11$$, $DvtThematicMapControlPanel$$);
  };
  $DvtThematicMapEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtThematicMapEventManager$$$$$ProcessRolloverEvent$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtThematicMapControlPanel$$ = this.$_tmap$.$getOptions$();
    "dim" == $DvtThematicMapControlPanel$$.hoverBehavior && ($DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$getCategories$ ? $DvtThematicMapJsonParser$$.$getCategories$() : [], $DvtThematicMapControlPanel$$.highlightedCategories = $DvtThematicMapEventManager$$ ? $DvtThematicMapJsonParser$$.slice() : null, $DvtThematicMapEventManager$$ = $dvt$$11$$.$EventFactory$.$newCategoryHighlightEvent$($DvtThematicMapControlPanel$$.highlightedCategories, $DvtThematicMapEventManager$$), $DvtThematicMapJsonParser$$ = 
    $dvt$$11$$.$StyleUtils$.$getTimeMilliseconds$($DvtThematicMapControlPanel$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($DvtThematicMapEventManager$$, this.$_tmap$.$getNavigableAreas$().concat(this.$_tmap$.$getNavigableObjects$()), $DvtThematicMapJsonParser$$, "any" == $DvtThematicMapControlPanel$$.highlightMatch));
  };
  $DvtThematicMapEventManager$$.prototype.$GetTouchResponse$ = function $$DvtThematicMapEventManager$$$$$GetTouchResponse$$() {
    var $DvtThematicMapControlPanel$$ = this.$_tmap$.$getOptions$();
    return "none" !== $DvtThematicMapControlPanel$$.panning || "none" !== $DvtThematicMapControlPanel$$.zooming ? $dvt$$11$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : $DvtThematicMapControlPanel$$.touchResponse === $dvt$$11$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ ? $dvt$$11$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ : $dvt$$11$$.$EventManager$.$TOUCH_RESPONSE_AUTO$;
  };
  $DvtThematicMapEventManager$$.prototype.$StoreInfoByEventType$ = function $$DvtThematicMapEventManager$$$$$StoreInfoByEventType$$($DvtThematicMapControlPanel$$) {
    return $DvtThematicMapControlPanel$$ == $dvt$$11$$.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$ ? !1 : $DvtThematicMapEventManager$$.$superclass$.$StoreInfoByEventType$.call(this, $DvtThematicMapControlPanel$$);
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtThematicMapJsonParser$$, $dvt$$11$$.$Obj$);
  $DvtThematicMapJsonParser$$.$_MIN_MARKER_SIZE$ = 6;
  $DvtThematicMapJsonParser$$.$_MAX_MARKER_SIZE_RATIO$ = .5;
  $DvtThematicMapJsonParser$$.$_PZC_PADDING$ = 20;
  $DvtThematicMapJsonParser$$.prototype.Init = function $$DvtThematicMapJsonParser$$$$Init$($dvt$$11$$) {
    this.$_tmap$ = $dvt$$11$$;
    this.$_isCustomBasemap$ = !1;
    this.$_areaLayerStyle$ = null;
    this.$_customAreaLayerImages$ = {};
  };
  $DvtThematicMapJsonParser$$.prototype.parse = function $$DvtThematicMapJsonParser$$$$parse$($DvtThematicMapControlPanel$$) {
    this.$_parseMapProperties$($DvtThematicMapControlPanel$$);
    $DvtThematicMapControlPanel$$._legend && this.$_tmap$.$setLegendData$($DvtThematicMapControlPanel$$._legend);
    this.$_parseStyles$($DvtThematicMapControlPanel$$.styleDefaults);
    if (this.$_isCustomBasemap$ && $DvtThematicMapControlPanel$$.sourceXml) {
      var $DvtThematicMapJsonParser$$ = (new $dvt$$11$$.$XmlParser$(this.$_tmap$.$getCtx$())).parse($DvtThematicMapControlPanel$$.sourceXml);
      this.$_parseCustomBasemap$($DvtThematicMapJsonParser$$);
    }
    this.$_parseAreaLayers$($DvtThematicMapControlPanel$$.areaLayers);
    this.$ParseDataLayers$($DvtThematicMapControlPanel$$.pointDataLayers, null, null, !1);
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseMapProperties$ = function $$DvtThematicMapJsonParser$$$$$_parseMapProperties$$($dvt$$11$$) {
    var $DvtThematicMapControlPanel$$ = $dvt$$11$$.animationDuration;
    "string" == typeof $DvtThematicMapControlPanel$$ ? "ms" == $DvtThematicMapControlPanel$$.slice(-2) ? $DvtThematicMapControlPanel$$ = parseInt($DvtThematicMapControlPanel$$.slice(0, -2)) / 1E3 : "s" == $DvtThematicMapControlPanel$$.slice(-1) && ($DvtThematicMapControlPanel$$ = parseFloat($DvtThematicMapControlPanel$$.slice(0, -1))) : $DvtThematicMapControlPanel$$ /= 1E3;
    this.$_tmap$.$setAnimationDuration$($DvtThematicMapControlPanel$$);
    this.$_tmap$.$setAnimationOnDisplay$("auto" == $dvt$$11$$.animationOnDisplay ? "alphaFade" : $dvt$$11$$.animationOnDisplay);
    this.$_tmap$.$setAnimationOnMapChange$("auto" == $dvt$$11$$.animationOnMapChange ? "alphaFade" : $dvt$$11$$.animationOnMapChange);
    this.$_isCustomBasemap$ = null != $dvt$$11$$.source;
    this.$_tmap$.$setMapName$(this.$_isCustomBasemap$ ? "$" + $dvt$$11$$.basemap : $dvt$$11$$.basemap);
    this.$_tmap$.$setFeaturesOff$($dvt$$11$$.featuresOff);
    this.$_tmap$.$setControlPanelBehavior$($dvt$$11$$.controlPanelBehavior);
    $DvtThematicMapControlPanel$$ = $dvt$$11$$.tooltipDisplay;
    "shortDesc" == $DvtThematicMapControlPanel$$ ? $DvtThematicMapControlPanel$$ = "shortDescOnly" : "labelAndShortDesc" == $DvtThematicMapControlPanel$$ && ($DvtThematicMapControlPanel$$ = "auto");
    this.$_tmap$.$setDisplayTooltips$($DvtThematicMapControlPanel$$);
    ($DvtThematicMapControlPanel$$ = $dvt$$11$$.popups) && this.$_tmap$.$setShowPopupBehaviors$(this.$_getShowPopupBehaviors$($DvtThematicMapControlPanel$$));
    this.$_tmap$.$setDrillMode$($dvt$$11$$.drilling);
    this.$_tmap$.$setAnimationOnDrill$($dvt$$11$$.animationOnDrill);
    this.$_tmap$.$setInitialZooming$("auto" == $dvt$$11$$.initialZooming);
    this.$_tmap$.$setMarkerZoomBehavior$($dvt$$11$$.markerZoomBehavior);
    this.$_tmap$.$setPanning$("auto" == $dvt$$11$$.panning);
    this.$_tmap$.$setZooming$("auto" == $dvt$$11$$.zooming);
    this.$_tmap$.$setInitialCenterX$($dvt$$11$$.panX);
    this.$_tmap$.$setInitialCenterY$($dvt$$11$$.panY);
    this.$_tmap$.$setInitialZoom$($dvt$$11$$.zoom);
    isNaN($dvt$$11$$.maxZoom) || this.$_tmap$.$setMaxZoomFactor$(Math.max($dvt$$11$$.maxZoom, 1));
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseAreaLayers$ = function $$DvtThematicMapJsonParser$$$$$_parseAreaLayers$$($dvt$$11$$) {
    for (var $DvtThematicMapControlPanel$$ = this.$_tmap$.$_mapName$, $DvtThematicMapJsonParser$$ = 0;$DvtThematicMapJsonParser$$ < $dvt$$11$$.length;$DvtThematicMapJsonParser$$++) {
      var $DvtThematicMapEventManager$$ = this.$_tmap$.$Defaults$.$calcAreaLayerOptions$($dvt$$11$$[$DvtThematicMapJsonParser$$]), $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapEventManager$$.layer;
      if ($DvtThematicMapKeyboardHandler$$) {
        var $DvtMapDataLayer$$;
        $DvtThematicMapEventManager$$.areaStyle && this.$_areaLayerStyle$.$parseInlineStyle$($DvtThematicMapEventManager$$.areaStyle);
        $DvtThematicMapEventManager$$.labelStyle && this.$_areaLayerStyle$.$parseInlineStyle$($DvtThematicMapEventManager$$.labelStyle);
        this.$_isCustomBasemap$ ? ($DvtMapDataLayer$$ = new $DvtMapCustomAreaLayer$$(this.$_tmap$, $DvtThematicMapKeyboardHandler$$, $DvtThematicMapEventManager$$.labelDisplay, $DvtThematicMapEventManager$$.labelType, this.$_tmap$.$getEventManager$()), $DvtMapDataLayer$$.$setAreaLayerImage$(this.$_customAreaLayerImages$[$DvtThematicMapKeyboardHandler$$])) : ($DvtMapDataLayer$$ = new $DvtMapAreaLayer$$(this.$_tmap$, $DvtThematicMapKeyboardHandler$$, $DvtThematicMapEventManager$$.labelDisplay, $DvtThematicMapEventManager$$.labelType, 
        this.$_tmap$.$getEventManager$()), $DvtMapDataLayer$$.$setAreaShapes$(this.$_createPathShapes$($DvtBaseMapManager$$.$getAreaIds$($DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$))), $DvtMapDataLayer$$.$setAreaLabels$($DvtBaseMapManager$$.$getAreaLabels$($DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$)), $DvtMapDataLayer$$.$setAreaLabelInfo$($DvtBaseMapManager$$.$getAreaLabelInfo$($DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$)), $DvtMapDataLayer$$.$setAreaChildren$($DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, 
        $DvtThematicMapKeyboardHandler$$)));
        $DvtMapDataLayer$$.$setLayerCSSStyle$(this.$_areaLayerStyle$);
        $DvtMapDataLayer$$.$setAnimation$("auto" == $DvtThematicMapEventManager$$.animationOnLayerChange ? "alphaFade" : $DvtThematicMapEventManager$$.animationOnLayerChange);
        $DvtMapDataLayer$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
        this.$_tmap$.$addLayer$($DvtMapDataLayer$$);
        $DvtThematicMapEventManager$$.areaDataLayer && this.$ParseDataLayers$([$DvtThematicMapEventManager$$.areaDataLayer], $DvtMapDataLayer$$, null, !0);
        $DvtThematicMapEventManager$$.pointDataLayers && this.$ParseDataLayers$($DvtThematicMapEventManager$$.pointDataLayers, $DvtMapDataLayer$$, null, !1);
      }
    }
  };
  $DvtThematicMapJsonParser$$.prototype.$ParseDataLayers$ = function $$DvtThematicMapJsonParser$$$$$ParseDataLayers$$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapCustomAreaLayer$$) {
    if ($DvtThematicMapControlPanel$$) {
      for (var $DvtMapAreaPeer$$ = 0;$DvtMapAreaPeer$$ < $DvtThematicMapControlPanel$$.length;$DvtMapAreaPeer$$++) {
        var $DvtMapArea$$ = this.$_tmap$.$Defaults$.$calcDataLayerOptions$($DvtThematicMapControlPanel$$[$DvtMapAreaPeer$$]);
        $DvtMapArea$$.legend && this.$_tmap$.$setLegendData$($DvtMapArea$$.legend);
        $DvtThematicMapEventManager$$ ? $DvtThematicMapEventManager$$ instanceof $DvtMapAreaLayer$$ && $DvtMapCustomAreaLayer$$ && $DvtThematicMapEventManager$$.$resetRenderedAreas$() : ($DvtThematicMapEventManager$$ = new $DvtMapLayer$$(this.$_tmap$, $DvtMapArea$$.id, this.$_tmap$.$getEventManager$()), this.$_tmap$.$addPointLayer$($DvtThematicMapEventManager$$));
        var $DvtMapObjPeer$$ = new $DvtMapDataLayer$$(this.$_tmap$, $DvtThematicMapEventManager$$, $DvtMapArea$$.id, this.$_tmap$.$getEventManager$(), $DvtMapArea$$);
        $DvtMapCustomAreaLayer$$ = $DvtMapArea$$.selectionMode;
        "single" == $DvtMapCustomAreaLayer$$ ? $DvtMapObjPeer$$.$setSelectionMode$($dvt$$11$$.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $DvtMapCustomAreaLayer$$ && $DvtMapObjPeer$$.$setSelectionMode$($dvt$$11$$.$SelectionHandler$.$TYPE_MULTIPLE$);
        $DvtMapObjPeer$$.$setAnimation$($DvtMapArea$$.animationOnDataChange);
        $DvtMapObjPeer$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
        var $DvtMapLabel$$ = null;
        $DvtThematicMapEventManager$$ instanceof $DvtMapAreaLayer$$ && ($DvtMapLabel$$ = $DvtMapArea$$.isolatedItem);
        var $DvtThematicMapDefaults$$ = $DvtMapArea$$.disclosedItems, $DvtThematicMapCategoryWrapper$$ = [], $DvtDrillablePath$$;
        $DvtMapCustomAreaLayer$$ = $DvtThematicMapEventManager$$ instanceof $DvtMapAreaLayer$$;
        var $DvtCustomDataItem$$;
        $DvtMapArea$$.popups && ($DvtCustomDataItem$$ = this.$_getShowPopupBehaviors$($DvtMapArea$$.popups));
        var $DvtThematicMapProjections$$ = this.$_tmap$.$getOptions$().hiddenCategories, $DvtBaseMapManager$$ = $DvtMapArea$$.areas;
        if ($DvtBaseMapManager$$) {
          for (var $DvtThematicMapAutomation$$ = 0;$DvtThematicMapAutomation$$ < $DvtBaseMapManager$$.length;$DvtThematicMapAutomation$$++) {
            if ($DvtThematicMapProjections$$ && $dvt$$11$$.$ArrayUtils$.$hasAnyItem$($DvtThematicMapProjections$$, $DvtBaseMapManager$$[$DvtThematicMapAutomation$$].categories)) {
              $DvtMapObjPeer$$.$addAreaObject$(null);
            } else {
              var $areaId$$4_dataObj$$4$$ = $DvtBaseMapManager$$[$DvtThematicMapAutomation$$].location;
              if ($DvtMapLabel$$) {
                if ($DvtMapLabel$$ != $DvtBaseMapManager$$[$DvtThematicMapAutomation$$].id) {
                  continue;
                } else {
                  $DvtDrillablePath$$ = $areaId$$4_dataObj$$4$$;
                }
              }
              $DvtThematicMapDefaults$$ && -1 != $dvt$$11$$.$ArrayUtils$.$getIndex$($DvtThematicMapDefaults$$, $DvtBaseMapManager$$[$DvtThematicMapAutomation$$].id) && $DvtThematicMapCategoryWrapper$$.push($areaId$$4_dataObj$$4$$);
              $areaId$$4_dataObj$$4$$ = this.$_createArea$($DvtThematicMapEventManager$$, $DvtMapObjPeer$$, $DvtBaseMapManager$$[$DvtThematicMapAutomation$$]);
              $DvtCustomDataItem$$ && $areaId$$4_dataObj$$4$$.$setShowPopupBehaviors$($DvtCustomDataItem$$);
              $areaId$$4_dataObj$$4$$ && ($areaId$$4_dataObj$$4$$.$setSelectable$($DvtMapObjPeer$$.$isSelectable$()), $DvtMapObjPeer$$.$addAreaObject$($areaId$$4_dataObj$$4$$));
            }
          }
        }
        var $DvtBaseMapManager$$ = $DvtMapArea$$.renderer, $markers$$11$$ = $DvtMapArea$$.markers;
        if ($markers$$11$$ && !$DvtBaseMapManager$$) {
          for ($DvtThematicMapJsonParser$$.$_calcBubbleSizes$(this.$_tmap$, $markers$$11$$), $DvtThematicMapAutomation$$ = 0;$DvtThematicMapAutomation$$ < $markers$$11$$.length;$DvtThematicMapAutomation$$++) {
            if ($DvtThematicMapProjections$$ && $dvt$$11$$.$ArrayUtils$.$hasAnyItem$($DvtThematicMapProjections$$, $markers$$11$$[$DvtThematicMapAutomation$$].categories)) {
              $DvtMapObjPeer$$.$addDataObject$(null);
            } else {
              $areaId$$4_dataObj$$4$$ = $markers$$11$$[$DvtThematicMapAutomation$$].location;
              if ($DvtMapLabel$$) {
                if ($DvtMapLabel$$ != $markers$$11$$[$DvtThematicMapAutomation$$].id) {
                  continue;
                } else {
                  $DvtDrillablePath$$ = $areaId$$4_dataObj$$4$$;
                }
              }
              $areaId$$4_dataObj$$4$$ = this.$_createMarker$($DvtThematicMapEventManager$$, $DvtMapObjPeer$$, $markers$$11$$[$DvtThematicMapAutomation$$], $DvtMapCustomAreaLayer$$);
              $DvtCustomDataItem$$ && $areaId$$4_dataObj$$4$$.$setShowPopupBehaviors$($DvtCustomDataItem$$);
              $areaId$$4_dataObj$$4$$ && ($areaId$$4_dataObj$$4$$.$setSelectable$($DvtMapObjPeer$$.$isSelectable$()), $DvtMapObjPeer$$.$addDataObject$($areaId$$4_dataObj$$4$$));
            }
          }
        }
        if ($DvtThematicMapProjections$$ = $DvtMapArea$$.images) {
          for ($DvtThematicMapAutomation$$ = 0;$DvtThematicMapAutomation$$ < $DvtThematicMapProjections$$.length;$DvtThematicMapAutomation$$++) {
            $areaId$$4_dataObj$$4$$ = $DvtThematicMapProjections$$[$DvtThematicMapAutomation$$].location;
            if ($DvtMapLabel$$) {
              if ($DvtMapLabel$$ != $DvtThematicMapProjections$$[$DvtThematicMapAutomation$$].id) {
                continue;
              } else {
                $DvtDrillablePath$$ = $areaId$$4_dataObj$$4$$;
              }
            }
            $areaId$$4_dataObj$$4$$ = this.$_createImage$($DvtThematicMapEventManager$$, $DvtMapObjPeer$$, $DvtThematicMapProjections$$[$DvtThematicMapAutomation$$], $DvtMapCustomAreaLayer$$);
            $DvtCustomDataItem$$ && $areaId$$4_dataObj$$4$$.$setShowPopupBehaviors$($DvtCustomDataItem$$);
            $areaId$$4_dataObj$$4$$ && $DvtMapObjPeer$$.$addDataObject$($areaId$$4_dataObj$$4$$);
          }
        }
        if ($DvtBaseMapManager$$) {
          for ($DvtThematicMapAutomation$$ = 0;$DvtThematicMapAutomation$$ < $markers$$11$$.length;$DvtThematicMapAutomation$$++) {
            $areaId$$4_dataObj$$4$$ = $markers$$11$$[$DvtThematicMapAutomation$$].location;
            if ($DvtMapLabel$$) {
              if ($DvtMapLabel$$ != $markers$$11$$[$DvtThematicMapAutomation$$].id) {
                continue;
              } else {
                $DvtDrillablePath$$ = $areaId$$4_dataObj$$4$$;
              }
            }
            $DvtThematicMapDefaults$$ && -1 != $dvt$$11$$.$ArrayUtils$.$getIndex$($DvtThematicMapDefaults$$, $markers$$11$$[$DvtThematicMapAutomation$$].id) && $DvtThematicMapCategoryWrapper$$.push($areaId$$4_dataObj$$4$$);
            $DvtThematicMapProjections$$ = this.$_tmap$.$getOptions$()._contextHandler(this.$_tmap$.$getElem$(), null, $markers$$11$$[$DvtThematicMapAutomation$$], {hovered:!1, selected:!1, focused:!1}, null);
            $DvtThematicMapProjections$$ = $DvtBaseMapManager$$($DvtThematicMapProjections$$);
            $areaId$$4_dataObj$$4$$ = this.$_createCustomDataItem$($DvtThematicMapEventManager$$, $DvtMapObjPeer$$, $markers$$11$$[$DvtThematicMapAutomation$$], $DvtThematicMapProjections$$, $DvtMapCustomAreaLayer$$);
            $DvtCustomDataItem$$ && $areaId$$4_dataObj$$4$$.$setShowPopupBehaviors$($DvtCustomDataItem$$);
            $areaId$$4_dataObj$$4$$ && ($areaId$$4_dataObj$$4$$.$setSelectable$($DvtMapObjPeer$$.$isSelectable$()), $DvtMapObjPeer$$.$addDataObject$($areaId$$4_dataObj$$4$$));
          }
        }
        $DvtDrillablePath$$ && $DvtThematicMapEventManager$$.$setIsolatedArea$($DvtDrillablePath$$);
        ($DvtMapArea$$ = $DvtMapArea$$.selection) && 0 < $DvtMapArea$$.length && $DvtMapObjPeer$$.$setInitialSelections$($DvtMapArea$$);
        $DvtThematicMapCategoryWrapper$$ && 0 < $DvtThematicMapCategoryWrapper$$.length && this.$_tmap$.$addDrilledLayer$($DvtThematicMapEventManager$$.$LayerName$, [$DvtMapObjPeer$$.$getClientId$(), $DvtThematicMapCategoryWrapper$$]);
        $DvtThematicMapKeyboardHandler$$ ? $DvtThematicMapEventManager$$.$updateDataLayer$($DvtMapObjPeer$$, this.$_tmap$.$_panZoomCanvas$.$_contentPane$.$getMatrix$(), $DvtThematicMapKeyboardHandler$$) : $DvtThematicMapEventManager$$.$addDataLayer$($DvtMapObjPeer$$);
      }
    }
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseStyles$ = function $$DvtThematicMapJsonParser$$$$$_parseStyles$$($DvtThematicMapControlPanel$$) {
    this.$_tmap$.$parseComponentJson$($DvtThematicMapControlPanel$$);
    this.$_areaLayerStyle$ = new $dvt$$11$$.$CSSStyle$($DvtThematicMapControlPanel$$.areaStyle);
    this.$_areaLayerStyle$.$parseInlineStyle$($DvtThematicMapControlPanel$$.labelStyle);
    new $dvt$$11$$.$CSSStyle$($DvtThematicMapControlPanel$$.dropTargetStyle);
    this.$_tmap$.$setStyleDefaults$($DvtThematicMapControlPanel$$);
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseCustomBasemap$ = function $$DvtThematicMapJsonParser$$$$$_parseCustomBasemap$$($dvt$$11$$) {
    $dvt$$11$$ = $dvt$$11$$.$getChildNodes$();
    for (var $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $dvt$$11$$.length;$DvtThematicMapEventManager$$++) {
      $DvtThematicMapControlPanel$$ = $dvt$$11$$[$DvtThematicMapEventManager$$], $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.getName(), "layer" == $DvtThematicMapJsonParser$$ ? this.$_parseCustomLayer$($DvtThematicMapControlPanel$$) : "points" == $DvtThematicMapJsonParser$$ && this.$_parseCustomPoints$($DvtThematicMapControlPanel$$);
    }
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseCustomLayer$ = function $$DvtThematicMapJsonParser$$$$$_parseCustomLayer$$($dvt$$11$$) {
    var $DvtThematicMapControlPanel$$ = $dvt$$11$$.$getChildNodes$();
    $dvt$$11$$ = $dvt$$11$$.$getAttr$("id");
    for (var $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$ = [], $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $DvtThematicMapControlPanel$$.length;$DvtMapDataLayer$$++) {
      if ($DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$[$DvtMapDataLayer$$], $DvtThematicMapEventManager$$ = $DvtThematicMapJsonParser$$.getName(), "image" == $DvtThematicMapEventManager$$) {
        $DvtThematicMapEventManager$$ = {};
        $DvtThematicMapEventManager$$.source = $DvtThematicMapJsonParser$$.$getAttr$("source");
        $DvtThematicMapEventManager$$.width = Number($DvtThematicMapJsonParser$$.$getAttr$("width"));
        $DvtThematicMapEventManager$$.height = Number($DvtThematicMapJsonParser$$.$getAttr$("height"));
        var $DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getAttr$("bidi");
        $DvtThematicMapJsonParser$$ = $DvtThematicMapJsonParser$$.$getAttr$("dir");
        $DvtThematicMapEventManager$$.dir = "true" == $DvtMapCustomAreaLayer$$ || "rtl" == $DvtThematicMapJsonParser$$ ? "rtl" : "ltr";
        $DvtThematicMapKeyboardHandler$$.push($DvtThematicMapEventManager$$);
      }
    }
    this.$_customAreaLayerImages$[$dvt$$11$$] = $DvtThematicMapKeyboardHandler$$;
  };
  $DvtThematicMapJsonParser$$.prototype.$_parseCustomPoints$ = function $$DvtThematicMapJsonParser$$$$$_parseCustomPoints$$($dvt$$11$$) {
    $dvt$$11$$ = $dvt$$11$$.$getChildNodes$();
    for (var $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$ = {}, $DvtThematicMapKeyboardHandler$$ = {}, $DvtMapDataLayer$$ = 0;$DvtMapDataLayer$$ < $dvt$$11$$.length;$DvtMapDataLayer$$++) {
      $DvtThematicMapControlPanel$$ = $dvt$$11$$[$DvtMapDataLayer$$], $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.getName(), "point" == $DvtThematicMapJsonParser$$ && ($DvtThematicMapEventManager$$[$DvtThematicMapControlPanel$$.$getAttr$("name")] = [Number($DvtThematicMapControlPanel$$.$getAttr$("x")), Number($DvtThematicMapControlPanel$$.$getAttr$("y"))], $DvtThematicMapKeyboardHandler$$[$DvtThematicMapControlPanel$$.$getAttr$("name")] = [null, $DvtThematicMapControlPanel$$.$getAttr$("longLabel")])
      ;
    }
    $DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $DvtThematicMapKeyboardHandler$$, $DvtThematicMapEventManager$$, null, null, 1);
  };
  $DvtThematicMapJsonParser$$.prototype.$_createPathShapes$ = function $$DvtThematicMapJsonParser$$$$$_createPathShapes$$($DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = {}, $DvtThematicMapEventManager$$ = this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$ = 0;$DvtThematicMapKeyboardHandler$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapKeyboardHandler$$++) {
      var $DvtMapDataLayer$$ = $DvtThematicMapControlPanel$$[$DvtThematicMapKeyboardHandler$$];
      $DvtThematicMapJsonParser$$[$DvtMapDataLayer$$] = new $dvt$$11$$.$Path$($DvtThematicMapEventManager$$);
      var $DvtMapCustomAreaLayer$$ = this.$_areaLayerStyle$.$getStyle$($dvt$$11$$.$CSSStyle$.$BORDER_COLOR$);
      $DvtMapCustomAreaLayer$$ && "transparent" != $DvtMapCustomAreaLayer$$ && ($DvtMapCustomAreaLayer$$ = new $dvt$$11$$.$SolidStroke$($DvtMapCustomAreaLayer$$), this.$_tmap$.$_bSupportsVectorEffects$ && $DvtMapCustomAreaLayer$$.$setFixedWidth$(!0), $DvtThematicMapJsonParser$$[$DvtMapDataLayer$$].$setStroke$($DvtMapCustomAreaLayer$$));
      $DvtMapCustomAreaLayer$$ = this.$_areaLayerStyle$.$getStyle$($dvt$$11$$.$CSSStyle$.$BACKGROUND_COLOR$);
      "transparent" != $DvtMapCustomAreaLayer$$ ? $DvtThematicMapJsonParser$$[$DvtMapDataLayer$$].$setSolidFill$($DvtMapCustomAreaLayer$$) : $DvtThematicMapJsonParser$$[$DvtMapDataLayer$$].$setFill$(null);
    }
    return $DvtThematicMapJsonParser$$;
  };
  $DvtThematicMapJsonParser$$.prototype.$_createArea$ = function $$DvtThematicMapJsonParser$$$$$_createArea$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapEventManager$$.location;
    if ($DvtThematicMapControlPanel$$.$getAreaShape$($DvtThematicMapKeyboardHandler$$) && $DvtThematicMapEventManager$$.color) {
      $DvtThematicMapControlPanel$$.$setAreaRendered$($DvtThematicMapKeyboardHandler$$, !1);
      $DvtThematicMapKeyboardHandler$$ = new $DvtDrillablePath$$(this.$_tmap$.$getCtx$(), this.$_tmap$.$_bSupportsVectorEffects$);
      $DvtThematicMapEventManager$$ = $dvt$$11$$.$JsonUtils$.$merge$($DvtThematicMapEventManager$$, this.$_tmap$.$_styleDefaults$.dataAreaDefaults);
      $DvtThematicMapEventManager$$.labelStyle || ($DvtThematicMapEventManager$$.labelStyle = this.$_tmap$.$_styleDefaults$.labelStyle);
      var $DvtMapDataLayer$$ = new $dvt$$11$$.$SolidStroke$($DvtThematicMapEventManager$$.hoverColor, 1, $DvtDrillablePath$$.$HOVER_STROKE_WIDTH$), $DvtMapCustomAreaLayer$$ = new $dvt$$11$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedInnerColor, 1, $DvtDrillablePath$$.$SELECTED_INNER_STROKE_WIDTH$), $DvtMapAreaLayer$$ = new $dvt$$11$$.$SolidStroke$($DvtThematicMapEventManager$$.selectedOuterColor, 1, $DvtDrillablePath$$.$SELECTED_OUTER_STROKE_WIDTH$);
      $DvtThematicMapKeyboardHandler$$.$setHoverStroke$($DvtMapDataLayer$$, null).$setSelectedStroke$($DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$);
      $DvtMapDataLayer$$ = new $dvt$$11$$.$SolidStroke$($DvtThematicMapEventManager$$.drilledInnerColor, 1, $DvtDrillablePath$$.$DISCLOSED_INNER_STROKE_WIDTH$);
      $DvtMapCustomAreaLayer$$ = new $dvt$$11$$.$SolidStroke$($DvtThematicMapEventManager$$.drilledOuterColor, 1, $DvtDrillablePath$$.$DISCLOSED_OUTER_STROKE_WIDTH$);
      $DvtThematicMapKeyboardHandler$$.$setDisclosedStroke$($DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$);
      $DvtThematicMapControlPanel$$.$setLabelRendered$($DvtThematicMapEventManager$$.location, !1);
      this.$_styleDisplayable$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
      $DvtThematicMapControlPanel$$ = this.$_createLabel$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, !0);
      return new $DvtMapAreaPeer$$($DvtThematicMapEventManager$$, $DvtThematicMapJsonParser$$, $DvtThematicMapKeyboardHandler$$, $DvtThematicMapControlPanel$$);
    }
    return null;
  };
  $DvtThematicMapJsonParser$$.prototype.$_createMarker$ = function $$DvtThematicMapJsonParser$$$$$_createMarker$$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    var $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$._size, $DvtMapAreaLayer$$;
    $DvtMapAreaLayer$$ = ($DvtMapAreaLayer$$ = this.$_tmap$.$getOptions$().mapProvider) && null != $DvtMapAreaLayer$$.geo ? new $dvt$$11$$.$Point$($DvtThematicMapKeyboardHandler$$.x, -$DvtThematicMapKeyboardHandler$$.y) : $DvtThematicMapJsonParser$$.$getCenter$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
    if (!$DvtMapAreaLayer$$ || 0 === $DvtMapCustomAreaLayer$$) {
      return null;
    }
    var $DvtMapLayer$$ = this.$_tmap$.$_styleDefaults$.dataMarkerDefaults, $DvtMapAreaPeer$$ = new $dvt$$11$$.$CSSStyle$($DvtMapLayer$$.labelStyle);
    $DvtMapAreaPeer$$.$parseInlineStyle$($DvtThematicMapKeyboardHandler$$.labelStyle);
    $DvtThematicMapKeyboardHandler$$ = $dvt$$11$$.$JsonUtils$.$merge$($DvtThematicMapKeyboardHandler$$, $DvtMapLayer$$);
    $DvtThematicMapKeyboardHandler$$.labelStyle = $DvtMapAreaPeer$$.toString();
    if (null != $DvtMapCustomAreaLayer$$) {
      $DvtMapLayer$$ = $DvtMapCustomAreaLayer$$;
    } else {
      $DvtMapLayer$$ = $DvtThematicMapKeyboardHandler$$.scaleX;
      null == $DvtMapLayer$$ && ($DvtMapLayer$$ = 1);
      $DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.scaleY;
      null == $DvtMapCustomAreaLayer$$ && ($DvtMapCustomAreaLayer$$ = 1);
      var $DvtMapArea$$ = $DvtThematicMapKeyboardHandler$$.width;
      null == $DvtMapArea$$ && ($DvtMapArea$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.width);
      $DvtMapAreaPeer$$ = $DvtThematicMapKeyboardHandler$$.height;
      null == $DvtMapAreaPeer$$ && ($DvtMapAreaPeer$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.height);
      $DvtMapLayer$$ *= $DvtMapArea$$;
      $DvtMapCustomAreaLayer$$ *= $DvtMapAreaPeer$$;
    }
    $DvtMapAreaPeer$$ = $DvtThematicMapKeyboardHandler$$.borderRadius;
    $DvtThematicMapKeyboardHandler$$.source ? $DvtMapLayer$$ = new $dvt$$11$$.$ImageMarker$(this.$_tmap$.$getCtx$(), $DvtMapAreaLayer$$.x, $DvtMapAreaLayer$$.y, $DvtMapLayer$$, $DvtMapCustomAreaLayer$$, $DvtMapAreaPeer$$, $DvtThematicMapKeyboardHandler$$.source, $DvtThematicMapKeyboardHandler$$.sourceSelected, $DvtThematicMapKeyboardHandler$$.sourceHover, $DvtThematicMapKeyboardHandler$$.sourceHoverSelected) : ($DvtMapArea$$ = $DvtThematicMapKeyboardHandler$$.shape ? $DvtThematicMapKeyboardHandler$$.shape : 
    this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.shape, $DvtMapLayer$$ = new $dvt$$11$$.$SimpleMarker$(this.$_tmap$.$getCtx$(), $DvtMapArea$$, this.$_tmap$.$_skinName$, $DvtMapAreaLayer$$.x, $DvtMapAreaLayer$$.y, $DvtMapLayer$$, $DvtMapCustomAreaLayer$$, $DvtMapAreaPeer$$));
    ($DvtMapCustomAreaLayer$$ = $DvtThematicMapKeyboardHandler$$.rotation) && $DvtMapLayer$$.$setRotation$($DvtMapCustomAreaLayer$$ * Math.PI / 180);
    $DvtMapDataLayer$$ && $DvtThematicMapControlPanel$$.$setLabelRendered$($DvtThematicMapKeyboardHandler$$.location, !1);
    this.$_styleDisplayable$($DvtThematicMapKeyboardHandler$$, $DvtMapLayer$$);
    $DvtThematicMapControlPanel$$ = this.$_createLabel$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapLayer$$, $DvtMapDataLayer$$);
    return new $DvtMapObjPeer$$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapEventManager$$, $DvtMapLayer$$, $DvtThematicMapControlPanel$$, $DvtMapAreaLayer$$);
  };
  $DvtThematicMapJsonParser$$.prototype.$_createImage$ = function $$DvtThematicMapJsonParser$$$$$_createImage$$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    var $DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getCenter$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
    if (!$DvtMapCustomAreaLayer$$) {
      return null;
    }
    var $DvtMapAreaLayer$$ = new $dvt$$11$$.Image(this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$.url), $DvtMapLayer$$ = $DvtThematicMapKeyboardHandler$$.width, $DvtMapAreaPeer$$ = $DvtThematicMapKeyboardHandler$$.height;
    null != $DvtMapLayer$$ && null != $DvtMapAreaPeer$$ && ($DvtMapAreaLayer$$.$setX$($DvtMapCustomAreaLayer$$.x - $DvtMapLayer$$ / 2), $DvtMapAreaLayer$$.$setY$($DvtMapCustomAreaLayer$$.y - $DvtMapAreaPeer$$ / 2), $DvtMapAreaLayer$$.$setWidth$($DvtMapLayer$$), $DvtMapAreaLayer$$.$setHeight$($DvtMapAreaPeer$$));
    $DvtMapDataLayer$$ && $DvtThematicMapControlPanel$$.$setLabelRendered$($DvtThematicMapKeyboardHandler$$.location, !1);
    var $DvtMapArea$$ = new $DvtMapObjPeer$$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapEventManager$$, $DvtMapAreaLayer$$, null, $DvtMapCustomAreaLayer$$);
    $DvtMapLayer$$ && $DvtMapAreaPeer$$ || $dvt$$11$$.$ImageLoader$.$loadImage$(this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$.url, function($dvt$$11$$) {
      $dvt$$11$$ && $dvt$$11$$.width && $dvt$$11$$.height && ($DvtMapAreaLayer$$.$setWidth$($dvt$$11$$.width), $DvtMapAreaLayer$$.$setHeight$($dvt$$11$$.height), $DvtMapAreaLayer$$.$setX$($DvtMapCustomAreaLayer$$.x - $dvt$$11$$.width / 2), $DvtMapAreaLayer$$.$setY$($DvtMapCustomAreaLayer$$.y - $dvt$$11$$.height / 2), $DvtMapArea$$.$__recenter$());
    });
    return $DvtMapArea$$;
  };
  $DvtThematicMapJsonParser$$.prototype.$_createCustomDataItem$ = function $$DvtThematicMapJsonParser$$$$$_createCustomDataItem$$($dvt$$11$$, $DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    var $DvtMapCustomAreaLayer$$ = $DvtThematicMapJsonParser$$.$getCenter$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$);
    if (!$DvtMapCustomAreaLayer$$) {
      return null;
    }
    $DvtMapDataLayer$$ && $dvt$$11$$.$setLabelRendered$($DvtThematicMapEventManager$$.location, !1);
    $dvt$$11$$ = new $DvtCustomDataItem$$(this.$_tmap$.$getCtx$(), $DvtThematicMapKeyboardHandler$$, this.$_tmap$.$_styleDefaults$.dataAreaDefaults);
    return new $DvtMapObjPeer$$($DvtThematicMapEventManager$$, $DvtThematicMapControlPanel$$, $dvt$$11$$, null, $DvtMapCustomAreaLayer$$);
  };
  $DvtThematicMapJsonParser$$.prototype.$_createLabel$ = function $$DvtThematicMapJsonParser$$$$$_createLabel$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$) {
    var $DvtMapCustomAreaLayer$$ = $DvtThematicMapEventManager$$.location, $DvtMapAreaLayer$$ = $DvtThematicMapEventManager$$.label, $DvtMapLayer$$ = $DvtMapAreaLayer$$ ? "on" : "off";
    $DvtMapDataLayer$$ && ($DvtMapLayer$$ = $DvtThematicMapControlPanel$$.$getLabelDisplay$());
    $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$ instanceof $dvt$$11$$.$Path$;
    !$DvtMapAreaLayer$$ && $DvtMapDataLayer$$ && ($DvtThematicMapKeyboardHandler$$ && "off" != $DvtMapLayer$$ || !$DvtThematicMapKeyboardHandler$$ && "on" == $DvtMapLayer$$) && ($DvtMapAreaLayer$$ = "long" == $DvtThematicMapControlPanel$$.$_labelType$ ? $DvtThematicMapControlPanel$$.$getLongAreaName$($DvtMapCustomAreaLayer$$) : $DvtThematicMapControlPanel$$.$getShortAreaName$($DvtMapCustomAreaLayer$$));
    if ($DvtMapAreaLayer$$) {
      var $DvtMapAreaPeer$$ = this.$_tmap$.$getCtx$(), $DvtMapAreaPeer$$ = $DvtThematicMapKeyboardHandler$$ ? new $DvtMapLabel$$($DvtMapAreaPeer$$, $DvtMapAreaLayer$$, $DvtThematicMapControlPanel$$.$getLabelInfoForArea$ ? $DvtThematicMapControlPanel$$.$getLabelInfoForArea$($DvtMapCustomAreaLayer$$) : null, $DvtMapLayer$$, $DvtThematicMapJsonParser$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$) : new $dvt$$11$$.$OutputText$($DvtMapAreaPeer$$, $DvtMapAreaLayer$$, 0, 0);
      $DvtThematicMapJsonParser$$ = new $dvt$$11$$.$CSSStyle$;
      $DvtThematicMapKeyboardHandler$$ && $DvtThematicMapJsonParser$$.$merge$($DvtThematicMapControlPanel$$.$getLayerCSSStyle$());
      $DvtThematicMapEventManager$$.labelStyle && $DvtThematicMapJsonParser$$.$parseInlineStyle$($DvtThematicMapEventManager$$.labelStyle);
      $DvtThematicMapControlPanel$$ = $DvtThematicMapJsonParser$$.$getStyle$($dvt$$11$$.$CSSStyle$.$COLOR$);
      $DvtThematicMapJsonParser$$.$setStyle$($dvt$$11$$.$CSSStyle$.$COLOR$, null);
      $DvtMapAreaPeer$$.$setCSSStyle$($DvtThematicMapJsonParser$$);
      $DvtMapAreaPeer$$ instanceof $DvtMapLabel$$ && ($dvt$$11$$.$Agent$.$isHighContrast$() || !$DvtThematicMapControlPanel$$) && ($DvtThematicMapControlPanel$$ = $dvt$$11$$.$ColorUtils$.$getContrastingTextColor$($DvtThematicMapEventManager$$.color));
      $DvtThematicMapControlPanel$$ && $DvtMapAreaPeer$$.$setSolidFill$($DvtThematicMapControlPanel$$);
    }
    return $DvtMapAreaPeer$$;
  };
  $DvtThematicMapJsonParser$$.prototype.$_styleDisplayable$ = function $$DvtThematicMapJsonParser$$$$$_styleDisplayable$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.pattern, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.color, $DvtMapDataLayer$$ = $dvt$$11$$.$Agent$.$isTouchDevice$() || this.$_tmap$.$_skinName$ == $dvt$$11$$.$CSSStyle$.$SKIN_ALTA$ ? "none" : $DvtThematicMapControlPanel$$.visualEffects;
    if ($DvtThematicMapJsonParser$$ instanceof $dvt$$11$$.$SimpleMarker$) {
      if ("none" != $DvtThematicMapControlPanel$$.borderStyle) {
        var $DvtMapCustomAreaLayer$$ = $DvtThematicMapControlPanel$$.borderWidth;
        "string" == typeof $DvtMapCustomAreaLayer$$ && ($DvtMapCustomAreaLayer$$ = "px" == $DvtMapCustomAreaLayer$$.slice(-2) ? parseFloat($DvtThematicMapControlPanel$$.borderWidth.slice(0, -2)) : parseFloat($DvtThematicMapControlPanel$$.borderWidth));
        var $DvtMapAreaLayer$$ = new $dvt$$11$$.$SolidStroke$($DvtThematicMapControlPanel$$.borderColor, 1, $DvtMapCustomAreaLayer$$);
        this.$_tmap$.$_isMarkerZoomBehaviorFixed$ || $DvtMapAreaLayer$$.$setFixedWidth$(!0);
        $DvtMapAreaLayer$$.$setType$($dvt$$11$$.$Stroke$.$convertTypeString$($DvtThematicMapControlPanel$$.borderStyle));
        $DvtThematicMapJsonParser$$.$setStroke$($DvtMapAreaLayer$$);
      }
      $DvtMapCustomAreaLayer$$ = $DvtThematicMapControlPanel$$.opacity;
      "none" != $DvtMapDataLayer$$ ? $DvtThematicMapJsonParser$$.$setFill$(new $dvt$$11$$.$MarkerGradient$.$createMarkerGradient$($DvtThematicMapKeyboardHandler$$, $DvtThematicMapJsonParser$$, $DvtMapCustomAreaLayer$$)) : $DvtThematicMapEventManager$$ ? $DvtThematicMapJsonParser$$.$setFill$(new $dvt$$11$$.$PatternFill$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, "#FFFFFF")) : $DvtThematicMapKeyboardHandler$$ && $DvtThematicMapJsonParser$$.$setSolidFill$($DvtThematicMapKeyboardHandler$$, 
      $DvtMapCustomAreaLayer$$);
    } else {
      if ($DvtThematicMapJsonParser$$ instanceof $dvt$$11$$.$Path$) {
        if ($DvtMapDataLayer$$ = $DvtThematicMapControlPanel$$.borderColor) {
          $DvtMapAreaLayer$$ = new $dvt$$11$$.$SolidStroke$($DvtMapDataLayer$$), this.$_tmap$.$_bSupportsVectorEffects$ && $DvtMapAreaLayer$$.$setFixedWidth$(!0), $DvtThematicMapJsonParser$$.$setStroke$($DvtMapAreaLayer$$);
        }
        $DvtThematicMapEventManager$$ ? $DvtThematicMapJsonParser$$.$savePatternFill$(new $dvt$$11$$.$PatternFill$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, "#FFFFFF")) : $DvtThematicMapJsonParser$$.$setSolidFill$($DvtThematicMapKeyboardHandler$$, $DvtMapCustomAreaLayer$$);
      }
    }
  };
  $DvtThematicMapJsonParser$$.$getCenter$ = function $$DvtThematicMapJsonParser$$$$getCenter$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $dvt$$11$$.$_tmap$, $DvtThematicMapEventManager$$ = $DvtThematicMapJsonParser$$.$_mapName$, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.location;
    return $DvtThematicMapKeyboardHandler$$ ? (($DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$getAreaCenter$($DvtThematicMapEventManager$$, $dvt$$11$$.$_parentLayer$.$LayerName$, $DvtThematicMapKeyboardHandler$$)) || ($DvtThematicMapJsonParser$$ = $DvtBaseMapManager$$.$getCityCoordinates$($DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$)), $DvtThematicMapJsonParser$$) : $DvtThematicMapProjections$$.$project$($DvtThematicMapControlPanel$$.x, $DvtThematicMapControlPanel$$.y, $DvtThematicMapJsonParser$$.$_mapName$);
  };
  $DvtThematicMapJsonParser$$.prototype.$_getShowPopupBehaviors$ = function $$DvtThematicMapJsonParser$$$$$_getShowPopupBehaviors$$($DvtThematicMapControlPanel$$) {
    for (var $DvtThematicMapJsonParser$$ = [], $DvtThematicMapEventManager$$ = 0;$DvtThematicMapEventManager$$ < $DvtThematicMapControlPanel$$.length;$DvtThematicMapEventManager$$++) {
      $DvtThematicMapJsonParser$$.push(new $dvt$$11$$.$ShowPopupBehavior$($DvtThematicMapControlPanel$$[$DvtThematicMapEventManager$$].popupId, $DvtThematicMapControlPanel$$[$DvtThematicMapEventManager$$].triggerType, null, $DvtThematicMapControlPanel$$[$DvtThematicMapEventManager$$].align));
    }
    return $DvtThematicMapJsonParser$$;
  };
  $DvtThematicMapJsonParser$$.$_calcBubbleSizes$ = function $$DvtThematicMapJsonParser$$$$_calcBubbleSizes$$($DvtThematicMapControlPanel$$, $DvtThematicMapEventManager$$) {
    for (var $DvtThematicMapKeyboardHandler$$ = -Infinity, $DvtMapDataLayer$$ = Infinity, $DvtMapCustomAreaLayer$$ = 0;$DvtMapCustomAreaLayer$$ < $DvtThematicMapEventManager$$.length;$DvtMapCustomAreaLayer$$++) {
      var $DvtMapAreaLayer$$ = $DvtThematicMapEventManager$$[$DvtMapCustomAreaLayer$$].value;
      null == $DvtMapAreaLayer$$ || 0 >= $DvtMapAreaLayer$$ || ($DvtThematicMapKeyboardHandler$$ = Math.max($DvtThematicMapKeyboardHandler$$, $DvtMapAreaLayer$$), $DvtMapDataLayer$$ = Math.min($DvtMapDataLayer$$, $DvtMapAreaLayer$$));
    }
    if (Infinity !== $DvtMapDataLayer$$) {
      var $DvtMapAreaLayer$$ = 2 * $DvtThematicMapJsonParser$$.$_PZC_PADDING$, $DvtMapCustomAreaLayer$$ = $DvtThematicMapControlPanel$$.getWidth() - $DvtMapAreaLayer$$, $DvtMapAreaLayer$$ = $DvtThematicMapControlPanel$$.getHeight() - $DvtMapAreaLayer$$, $DvtMapLayer$$ = $DvtMapCustomAreaLayer$$ / $DvtMapAreaLayer$$;
      1.3 > $DvtMapLayer$$ ? $DvtMapAreaLayer$$ = 2 * $DvtMapCustomAreaLayer$$ / 3 : 1.7 < $DvtMapLayer$$ && ($DvtMapCustomAreaLayer$$ = 1.5 * $DvtMapAreaLayer$$);
      $DvtMapLayer$$ = $DvtThematicMapJsonParser$$.$_MAX_MARKER_SIZE_RATIO$ * Math.min($DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$);
      for ($DvtMapCustomAreaLayer$$ = 0;$DvtMapCustomAreaLayer$$ < $DvtThematicMapEventManager$$.length;$DvtMapCustomAreaLayer$$++) {
        $DvtMapAreaLayer$$ = $DvtThematicMapEventManager$$[$DvtMapCustomAreaLayer$$].value, $DvtThematicMapEventManager$$[$DvtMapCustomAreaLayer$$]._size = null == $DvtMapAreaLayer$$ || 0 >= $DvtMapAreaLayer$$ ? 0 : $dvt$$11$$.$LayoutUtils$.$getBubbleSize$($DvtMapAreaLayer$$, $DvtMapDataLayer$$, $DvtThematicMapKeyboardHandler$$, $DvtThematicMapJsonParser$$.$_MIN_MARKER_SIZE$, $DvtMapLayer$$);
      }
    }
  };
  var $DvtThematicMapProjections$$ = {};
  $dvt$$11$$.$Obj$.$createSubclass$($DvtThematicMapProjections$$, $dvt$$11$$.$Obj$);
  $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$ = new $dvt$$11$$.$Rectangle$(0, 0, 800, 500);
  $DvtThematicMapProjections$$.$_RADIUS$ = 6378206.4;
  $DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$ = new $dvt$$11$$.$Rectangle$(500, 200, 200, 200);
  $DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$ = new $dvt$$11$$.$Rectangle$(163, -49, 17, 17);
  $DvtThematicMapProjections$$.$_AFRICA_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-17.379205428479874, -37.201510854305546, 68.66391442808313, 77.50071544582713);
  $DvtThematicMapProjections$$.$_ASIA_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-.8436866097568272, -.7626456732012923, 1.8336308036296942, 1.5748427214611724);
  $DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$ = new $dvt$$11$$.$Rectangle$(113.29667079927977, -52.89550592498755, 65.25257389065216, 42.123114617504626);
  $DvtThematicMapProjections$$.$_EUROPE_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-.47944476148667076, -.0014669405958800579, .7364925893845453, .6293972741802124);
  $DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-.6154469465354344, -.24589767758847714, 1.2448236795108683, 1.2631535127174947);
  $DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-80.60817722658722, -60.796273249672765, 46.608687602908056, 66.96595767361796);
  $DvtThematicMapProjections$$.$_APAC_BOUNDS$ = new $dvt$$11$$.$Rectangle$(68.20516856593524, -52.89892708045518, 111.65739821771903, 116.55460214469134);
  $DvtThematicMapProjections$$.$_EMEA_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-24.543831069368586, -37.202500659225905, 204.54283106936856, 164.9634493690208);
  $DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-117.12451221229134, -54.95921623126266, 82.33223251442891, 87.67786623127876);
  $DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-.6154656300926513, .0507209798775865, 1.0153104799231851, .966537441082997);
  $DvtThematicMapProjections$$.$_WORLD_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-171.9, -62.6, 349.8, 150.8);
  $DvtThematicMapProjections$$.$_ALASKA1_RECT$ = new $dvt$$11$$.$Rectangle$(172, 51, 8, 3);
  $DvtThematicMapProjections$$.$_ALASKA2_RECT$ = new $dvt$$11$$.$Rectangle$(-180, 51, 51, 21);
  $DvtThematicMapProjections$$.$_HAWAII_RECT$ = new $dvt$$11$$.$Rectangle$(-178.5, 18.9, 35, 11);
  $DvtThematicMapProjections$$.$_USA_RECT$ = new $dvt$$11$$.$Rectangle$(-124.8, 24.4, 58, 25.5);
  $DvtThematicMapProjections$$.$_ALASKA_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
  $DvtThematicMapProjections$$.$_HAWAII_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
  $DvtThematicMapProjections$$.$_USA_BOUNDS$ = new $dvt$$11$$.$Rectangle$(-2386803.25, -1183550.5, 4514111, 2908402);
  $DvtThematicMapProjections$$.$_HAWAII_WINDOW$ = new $dvt$$11$$.$Rectangle$(165, 400, 100, 100);
  $DvtThematicMapProjections$$.$_ALASKA_WINDOW$ = new $dvt$$11$$.$Rectangle$(-75, 350, 240, 150);
  $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$ = [[1, 0], [.9986, .0314], [.9954, .0629], [.99, .0943], [.9822, .1258], [.973, .1572], [.96, .1887], [.9427, .2201], [.9216, .2515], [.8962, .2826], [.8679, .3132], [.835, .3433], [.7986, .3726], [.7597, .4008], [.6732, .4532], [.6213, .4765], [.5722, .4951], [.5322, .5072]];
  $DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    var $DvtThematicMapKeyboardHandler$$;
    switch($DvtThematicMapEventManager$$) {
      case "africa":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, $DvtThematicMapProjections$$.$_getMercatorProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "asia":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_ASIA_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(5));
        break;
      case "australia":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAustraliaProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "europe":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(10));
        break;
      case "northAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "southAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(5));
        break;
      case "apac":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_APAC_BOUNDS$, $DvtThematicMapProjections$$.$_getMercatorProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "emea":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_EMEA_BOUNDS$, $DvtThematicMapProjections$$.$_getMercatorProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "latinAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "usaAndCanada":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "worldRegions":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getWorldProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "usa":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getUSAProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "world":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getWorldProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    }
    return $DvtThematicMapKeyboardHandler$$ ? new $dvt$$11$$.$Point$(10 * $DvtThematicMapKeyboardHandler$$.x, 10 * $DvtThematicMapKeyboardHandler$$.y) : null;
  };
  $DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$;
    $DvtThematicMapProjections$$.$_ALASKA1_RECT$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) || $DvtThematicMapProjections$$.$_ALASKA2_RECT$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, $DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($DvtThematicMapEventManager$$, 
    $DvtThematicMapProjections$$.$_getMercatorProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$))) : $DvtThematicMapProjections$$.$_HAWAII_RECT$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, $DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($DvtThematicMapEventManager$$, 
    new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$))) : $DvtThematicMapProjections$$.$_USA_RECT$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) && ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_USA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($DvtThematicMapEventManager$$, 
    $DvtThematicMapProjections$$.$_getOrthographicProjection$(new $dvt$$11$$.$Point$(-95, 36), $DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$)));
    return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $DvtThematicMapEventManager$$);
  };
  $DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_WORLD_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($DvtThematicMapJsonParser$$, $DvtThematicMapProjections$$.$_getRobinsonProjection$($dvt$$11$$, $DvtThematicMapControlPanel$$));
    return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    var $DvtThematicMapJsonParser$$;
    $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$.$containsPoint$($dvt$$11$$, $DvtThematicMapControlPanel$$) ? $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
    $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($DvtThematicMapJsonParser$$, $DvtThematicMapProjections$$.$_getMercatorProjection$($dvt$$11$$, $DvtThematicMapControlPanel$$));
    return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapControlPanel$$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
    if ($DvtThematicMapEventManager$$) {
      var $DvtThematicMapKeyboardHandler$$ = new $dvt$$11$$.$Matrix$;
      $DvtThematicMapKeyboardHandler$$.rotate($DvtThematicMapEventManager$$);
      $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$_concatAffineTransforms$($DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$);
    }
    $DvtThematicMapJsonParser$$ = $DvtThematicMapControlPanel$$.$transformPoint$($DvtThematicMapJsonParser$$);
    return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$ = function $$DvtThematicMapProjections$$$$_getBoundedTransformedPoint$$($dvt$$11$$, $DvtThematicMapControlPanel$$) {
    return $DvtThematicMapControlPanel$$ && $dvt$$11$$.$containsPoint$($DvtThematicMapControlPanel$$.x, $DvtThematicMapControlPanel$$.y) ? $DvtThematicMapControlPanel$$ : null;
  };
  $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$) {
    $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapJsonParser$$);
    $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$);
    $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapEventManager$$);
    $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapKeyboardHandler$$);
    $DvtThematicMapKeyboardHandler$$ = .5 * (Math.sin($DvtThematicMapEventManager$$) + Math.sin($DvtThematicMapKeyboardHandler$$));
    $DvtThematicMapEventManager$$ = Math.pow(Math.cos($DvtThematicMapEventManager$$), 2) + 2 * $DvtThematicMapKeyboardHandler$$ * Math.sin($DvtThematicMapEventManager$$);
    $DvtThematicMapControlPanel$$ = $DvtThematicMapEventManager$$ - 2 * $DvtThematicMapKeyboardHandler$$ * Math.sin($DvtThematicMapControlPanel$$);
    $DvtThematicMapControlPanel$$ = Math.sqrt($DvtThematicMapControlPanel$$) / $DvtThematicMapKeyboardHandler$$;
    $DvtMapDataLayer$$ = $DvtThematicMapKeyboardHandler$$ * ($DvtThematicMapProjections$$.$toRadians$($DvtMapDataLayer$$) - $DvtThematicMapJsonParser$$);
    $DvtMapCustomAreaLayer$$ = $DvtThematicMapEventManager$$ - 2 * $DvtThematicMapKeyboardHandler$$ * Math.sin($DvtThematicMapProjections$$.$toRadians$($DvtMapCustomAreaLayer$$));
    $DvtMapCustomAreaLayer$$ = Math.sqrt($DvtMapCustomAreaLayer$$) / $DvtThematicMapKeyboardHandler$$;
    return new $dvt$$11$$.$Point$($DvtMapCustomAreaLayer$$ * Math.sin($DvtMapDataLayer$$), $DvtThematicMapControlPanel$$ - $DvtMapCustomAreaLayer$$ * Math.cos($DvtMapDataLayer$$));
  };
  $DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapProjections$$.$toDegrees$(Math.log(Math.tan(.25 * Math.PI + .5 * $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapJsonParser$$)))));
  };
  $DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapJsonParser$$);
    $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapEventManager$$);
    var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$.x);
    $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$.y);
    return new $dvt$$11$$.$Point$(Math.cos($DvtThematicMapEventManager$$) * Math.sin($DvtThematicMapJsonParser$$ - $DvtThematicMapKeyboardHandler$$) * $DvtThematicMapProjections$$.$_RADIUS$, (Math.cos($DvtThematicMapControlPanel$$) * Math.sin($DvtThematicMapEventManager$$) - Math.sin($DvtThematicMapControlPanel$$) * Math.cos($DvtThematicMapEventManager$$) * Math.cos($DvtThematicMapJsonParser$$ - $DvtThematicMapKeyboardHandler$$)) * $DvtThematicMapProjections$$.$_RADIUS$);
  };
  $DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = Math.floor(Math.abs($DvtThematicMapJsonParser$$) / 5);
    $DvtThematicMapEventManager$$ >= $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
    var $DvtThematicMapKeyboardHandler$$ = (Math.abs($DvtThematicMapJsonParser$$) - 5 * $DvtThematicMapEventManager$$) / 5, $DvtMapDataLayer$$ = $DvtThematicMapControlPanel$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][0] + $DvtThematicMapKeyboardHandler$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$ + 1][0] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][0])), $DvtThematicMapEventManager$$ = 
    $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][1] + $DvtThematicMapKeyboardHandler$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$ + 1][1] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][1]);
    0 > $DvtThematicMapJsonParser$$ && ($DvtThematicMapEventManager$$ *= -1);
    return new $dvt$$11$$.$Point$($DvtMapDataLayer$$, 180 * $DvtThematicMapEventManager$$);
  };
  $DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return new $dvt$$11$$.$Point$($DvtThematicMapJsonParser$$.x * $DvtThematicMapControlPanel$$.$_a$ + $DvtThematicMapControlPanel$$.$_tx$, $DvtThematicMapJsonParser$$.y * $DvtThematicMapControlPanel$$.$_d$ + $DvtThematicMapControlPanel$$.$_ty$);
  };
  $DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.$_a$, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapControlPanel$$.$_d$;
    return new $dvt$$11$$.$Matrix$($DvtThematicMapJsonParser$$.$_a$ * $DvtThematicMapEventManager$$, $DvtThematicMapJsonParser$$.$_b$ * $DvtThematicMapEventManager$$, $DvtThematicMapJsonParser$$.$_c$ * $DvtThematicMapKeyboardHandler$$, $DvtThematicMapJsonParser$$.$_d$ * $DvtThematicMapKeyboardHandler$$, $DvtThematicMapControlPanel$$.$_tx$ + $DvtThematicMapJsonParser$$.$_tx$ * $DvtThematicMapEventManager$$, $DvtThematicMapControlPanel$$.$_ty$ + $DvtThematicMapJsonParser$$.$_ty$ * $DvtThematicMapKeyboardHandler$$);
  };
  $DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapJsonParser$$.x, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapJsonParser$$.y, $DvtMapDataLayer$$ = $DvtThematicMapControlPanel$$.$w$, $DvtMapCustomAreaLayer$$ = $DvtThematicMapControlPanel$$.$h$, $DvtMapAreaLayer$$ = 0, $DvtMapAreaLayer$$ = $DvtThematicMapJsonParser$$.$w$ / $DvtMapDataLayer$$, $DvtMapLayer$$ = $DvtThematicMapJsonParser$$.$h$ / $DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$ = $DvtMapAreaLayer$$ <= $DvtMapLayer$$ ? $DvtMapAreaLayer$$ : 
    $DvtMapLayer$$, $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$ - $DvtThematicMapControlPanel$$.x * $DvtMapAreaLayer$$, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$ + $DvtThematicMapControlPanel$$.y * $DvtMapAreaLayer$$, $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$ + ($DvtThematicMapJsonParser$$.$w$ - $DvtMapDataLayer$$ * $DvtMapAreaLayer$$) / 2, $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapKeyboardHandler$$ + ($DvtThematicMapJsonParser$$.$h$ - 
    ($DvtThematicMapJsonParser$$.$h$ - $DvtMapCustomAreaLayer$$ * $DvtMapAreaLayer$$) / 2);
    return new $dvt$$11$$.$Matrix$($DvtMapAreaLayer$$, 0, 0, -$DvtMapAreaLayer$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
  };
  $DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($dvt$$11$$) {
    return Math.PI / 180 * $dvt$$11$$;
  };
  $DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($dvt$$11$$) {
    return 180 / Math.PI * $dvt$$11$$;
  };
  $DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    var $DvtThematicMapKeyboardHandler$$;
    $DvtThematicMapControlPanel$$ /= 10;
    $DvtThematicMapJsonParser$$ /= 10;
    switch($DvtThematicMapEventManager$$) {
      case "africa":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "asia":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(5));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "australia":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "europe":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(10));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "northAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "southAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$), $DvtThematicMapProjections$$.$toRadians$(5));
        break;
      case "apac":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_APAC_BOUNDS$, new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "emea":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "latinAmerica":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        break;
      case "usaAndCanada":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $DvtThematicMapKeyboardHandler$$.x, $DvtThematicMapKeyboardHandler$$.y);
        break;
      case "worldRegions":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseWorldProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "usa":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseUSAProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
        break;
      case "world":
        $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$_getInverseWorldProjection$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
    }
    return $DvtThematicMapKeyboardHandler$$ ? $DvtThematicMapKeyboardHandler$$ : new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$;
    return $DvtThematicMapProjections$$.$_ALASKA_WINDOW$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, $DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $DvtThematicMapEventManager$$.$invert$(), $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$.$transformPoint$(new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$)), 
    $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y)) : $DvtThematicMapProjections$$.$_HAWAII_WINDOW$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, $DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $DvtThematicMapEventManager$$.$invert$(), $DvtThematicMapEventManager$$.$transformPoint$(new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, 
    $DvtThematicMapJsonParser$$))) : $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_USA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $DvtThematicMapEventManager$$.$invert$(), $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$.$transformPoint$(new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, 
    $DvtThematicMapJsonParser$$)), $DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new $dvt$$11$$.$Point$(-95, 36), $DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y)) : new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_WORLD_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
    $DvtThematicMapEventManager$$.$invert$();
    $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$.$transformPoint$(new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
    return $DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y);
  };
  $DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$;
    $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$.$containsPoint$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) ? $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
    $DvtThematicMapEventManager$$.$invert$();
    $DvtThematicMapEventManager$$ = $DvtThematicMapEventManager$$.$transformPoint$(new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$));
    return $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($DvtThematicMapEventManager$$.x, $DvtThematicMapEventManager$$.y);
  };
  $DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapControlPanel$$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
    if ($DvtThematicMapEventManager$$) {
      var $DvtThematicMapKeyboardHandler$$ = new $dvt$$11$$.$Matrix$;
      $DvtThematicMapKeyboardHandler$$.rotate($DvtThematicMapEventManager$$);
      $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$_concatAffineTransforms$($DvtThematicMapControlPanel$$, $DvtThematicMapKeyboardHandler$$);
    }
    $DvtThematicMapControlPanel$$.$invert$();
    return $DvtThematicMapControlPanel$$.$transformPoint$($DvtThematicMapJsonParser$$);
  };
  $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$, $DvtMapDataLayer$$, $DvtMapCustomAreaLayer$$) {
    $DvtThematicMapJsonParser$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapJsonParser$$);
    $DvtThematicMapControlPanel$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$);
    $DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapEventManager$$);
    $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapKeyboardHandler$$);
    $DvtThematicMapKeyboardHandler$$ = .5 * (Math.sin($DvtThematicMapEventManager$$) + Math.sin($DvtThematicMapKeyboardHandler$$));
    $DvtThematicMapEventManager$$ = Math.pow(Math.cos($DvtThematicMapEventManager$$), 2) + 2 * $DvtThematicMapKeyboardHandler$$ * Math.sin($DvtThematicMapEventManager$$);
    $DvtThematicMapControlPanel$$ = $DvtThematicMapEventManager$$ - 2 * $DvtThematicMapKeyboardHandler$$ * Math.sin($DvtThematicMapControlPanel$$);
    $DvtThematicMapControlPanel$$ = Math.sqrt($DvtThematicMapControlPanel$$) / $DvtThematicMapKeyboardHandler$$;
    var $DvtMapAreaLayer$$ = Math.sqrt($DvtMapDataLayer$$ * $DvtMapDataLayer$$ + ($DvtThematicMapControlPanel$$ - $DvtMapCustomAreaLayer$$) * ($DvtThematicMapControlPanel$$ - $DvtMapCustomAreaLayer$$));
    return new $dvt$$11$$.$Point$($DvtThematicMapProjections$$.$toDegrees$($DvtThematicMapJsonParser$$ + Math.atan($DvtMapDataLayer$$ / ($DvtThematicMapControlPanel$$ - $DvtMapCustomAreaLayer$$)) / $DvtThematicMapKeyboardHandler$$), $DvtThematicMapProjections$$.$toDegrees$(Math.asin(($DvtThematicMapEventManager$$ - $DvtMapAreaLayer$$ * $DvtMapAreaLayer$$ * $DvtThematicMapKeyboardHandler$$ * $DvtThematicMapKeyboardHandler$$) / (2 * $DvtThematicMapKeyboardHandler$$))));
  };
  $DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    return new $dvt$$11$$.$Point$($DvtThematicMapControlPanel$$, $DvtThematicMapProjections$$.$toDegrees$(2 * Math.atan(Math.exp($DvtThematicMapProjections$$.$toRadians$($DvtThematicMapJsonParser$$))) - .5 * Math.PI));
  };
  $DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$) {
    $DvtThematicMapJsonParser$$ /= $DvtThematicMapProjections$$.$_RADIUS$;
    $DvtThematicMapEventManager$$ /= $DvtThematicMapProjections$$.$_RADIUS$;
    var $DvtThematicMapKeyboardHandler$$ = $DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$.y), $DvtMapDataLayer$$ = Math.sqrt($DvtThematicMapJsonParser$$ * $DvtThematicMapJsonParser$$ + $DvtThematicMapEventManager$$ * $DvtThematicMapEventManager$$), $DvtMapCustomAreaLayer$$ = Math.asin($DvtMapDataLayer$$);
    return new $dvt$$11$$.$Point$($DvtThematicMapProjections$$.$toDegrees$($DvtThematicMapProjections$$.$toRadians$($DvtThematicMapControlPanel$$.x) + Math.atan($DvtThematicMapJsonParser$$ * Math.sin($DvtMapCustomAreaLayer$$) / ($DvtMapDataLayer$$ * Math.cos($DvtThematicMapKeyboardHandler$$) * Math.cos($DvtMapCustomAreaLayer$$) - $DvtThematicMapEventManager$$ * Math.sin($DvtThematicMapKeyboardHandler$$) * Math.sin($DvtMapCustomAreaLayer$$)))), $DvtThematicMapProjections$$.$toDegrees$(Math.asin(Math.cos($DvtMapCustomAreaLayer$$) * 
    Math.sin($DvtThematicMapKeyboardHandler$$) + $DvtThematicMapEventManager$$ * Math.sin($DvtMapCustomAreaLayer$$) * Math.cos($DvtThematicMapKeyboardHandler$$) / $DvtMapDataLayer$$)));
  };
  $DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($DvtThematicMapControlPanel$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = Math.floor(Math.abs($DvtThematicMapJsonParser$$) / 5);
    $DvtThematicMapEventManager$$ >= $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($DvtThematicMapEventManager$$ = $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
    var $DvtThematicMapKeyboardHandler$$ = (Math.abs($DvtThematicMapJsonParser$$ / 180) - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][1]) / ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$ + 1][1] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][1]), $DvtMapDataLayer$$ = 5 * $DvtThematicMapKeyboardHandler$$ + 5 * $DvtThematicMapEventManager$$, $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$ / 
    ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][0] + $DvtThematicMapKeyboardHandler$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$ + 1][0] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$DvtThematicMapEventManager$$][0]));
    0 > $DvtThematicMapJsonParser$$ && ($DvtMapDataLayer$$ *= -1);
    return new $dvt$$11$$.$Point$($DvtThematicMapEventManager$$, $DvtMapDataLayer$$);
  };
  $dvt$$11$$.$Obj$.$createSubclass$($DvtThematicMapControlPanel$$, $dvt$$11$$.$ControlPanel$);
  $DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$) {
    $DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $DvtThematicMapJsonParser$$, $DvtThematicMapEventManager$$, $DvtThematicMapKeyboardHandler$$);
    this.$_drillMode$ = $DvtThematicMapEventManager$$.$_drillMode$;
    this.$_buttonImages$ = $DvtThematicMapEventManager$$.$getResourcesMap$();
    this.$_drillUpCallback$ = $dvt$$11$$.$Obj$.$createCallback$($DvtThematicMapEventManager$$, $DvtThematicMapEventManager$$.$drillUp$);
    this.$_drillDownCallback$ = $dvt$$11$$.$Obj$.$createCallback$($DvtThematicMapEventManager$$, $DvtThematicMapEventManager$$.$drillDown$);
    this.$_resetCallback$ = $dvt$$11$$.$Obj$.$createCallback$($DvtThematicMapEventManager$$, $DvtThematicMapEventManager$$.$resetMap$);
    this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = null;
    this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = !1;
    this.$_styleMap$ = $DvtThematicMapEventManager$$.$getSubcomponentStyles$();
  };
  $DvtThematicMapControlPanel$$.prototype.$setEnabledDrillDownButton$ = function $$DvtThematicMapControlPanel$$$$$setEnabledDrillDownButton$$($dvt$$11$$) {
    this.$_drillDownButtonEnabled$ = $dvt$$11$$;
    this.$_drillDownButton$ && this.$_drillDownButton$.$setEnabled$($dvt$$11$$);
  };
  $DvtThematicMapControlPanel$$.prototype.$setEnabledDrillUpButton$ = function $$DvtThematicMapControlPanel$$$$$setEnabledDrillUpButton$$($dvt$$11$$) {
    this.$_drillUpButtonEnabled$ = $dvt$$11$$;
    this.$_drillUpButton$ && this.$_drillUpButton$.$setEnabled$($dvt$$11$$);
  };
  $DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($DvtThematicMapControlPanel$$) {
    if (this.$_drillMode$ && "none" != this.$_drillMode$) {
      var $DvtThematicMapJsonParser$$ = $dvt$$11$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$11$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0);
      this.$_resetButton$ = $dvt$$11$$.$ButtonLAFUtils$.$createResetButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_resetButton$.$setCallback$(this.$_resetCallback$, this);
      this.$_resetButton$.$setTooltip$($dvt$$11$$.$Bundle$.$getTranslatedString$($dvt$$11$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_RESET"));
      this.$_eventManager$.$associate$(this.$_resetButton$, this.$_resetButton$);
      $DvtThematicMapControlPanel$$.$addChild$(this.$_resetButton$);
      this.$_drillDownButton$ = $dvt$$11$$.$ButtonLAFUtils$.$createDrillDownButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_drillDownButton$.$setCallback$(this.$_drillDownCallback$, this);
      this.$_drillDownButton$.$setTooltip$($dvt$$11$$.$Bundle$.$getTranslatedString$($dvt$$11$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_DRILLDOWN"));
      this.$_eventManager$.$associate$(this.$_drillDownButton$, this.$_drillDownButton$);
      this.$_drillDownButton$.$setTranslateX$($DvtThematicMapJsonParser$$);
      this.$_drillDownButton$.$setEnabled$(this.$_drillDownButtonEnabled$);
      $DvtThematicMapControlPanel$$.$addChild$(this.$_drillDownButton$);
      this.$_drillUpButton$ = $dvt$$11$$.$ButtonLAFUtils$.$createDrillUpButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_drillUpButton$.$setCallback$(this.$_drillUpCallback$, this);
      this.$_drillUpButton$.$setTooltip$($dvt$$11$$.$Bundle$.$getTranslatedString$($dvt$$11$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_DRILLUP"));
      this.$_eventManager$.$associate$(this.$_drillUpButton$, this.$_drillUpButton$);
      this.$_drillUpButton$.$setTranslateX$(2 * $DvtThematicMapJsonParser$$);
      this.$_drillUpButton$.$setEnabled$(this.$_drillUpButtonEnabled$);
      $DvtThematicMapControlPanel$$.$addChild$(this.$_drillUpButton$);
    }
  };
  $DvtThematicMapControlPanel$$.prototype.$getActionDisplayable$ = function $$DvtThematicMapControlPanel$$$$$getActionDisplayable$$($dvt$$11$$, $DvtThematicMapJsonParser$$) {
    var $DvtThematicMapEventManager$$ = $DvtThematicMapControlPanel$$.$superclass$.$getActionDisplayable$.call(this, $dvt$$11$$, $DvtThematicMapJsonParser$$);
    !$DvtThematicMapEventManager$$ && this.$isDisclosed$() && ("drillDown" == $dvt$$11$$ && this.$_drillDownButton$ && this.$_drillDownButton$.isEnabled() ? $DvtThematicMapEventManager$$ = this.$_drillDownButton$ : "drillUp" == $dvt$$11$$ && this.$_drillUpButton$ && this.$_drillUpButton$.isEnabled() ? $DvtThematicMapEventManager$$ = this.$_drillUpButton$ : "reset" == $dvt$$11$$ && this.$_resetButton$ && this.$_resetButton$.isEnabled() && ($DvtThematicMapEventManager$$ = this.$_resetButton$));
    return $DvtThematicMapEventManager$$;
  };
  $dvt$$11$$.$exportProperty$($dvt$$11$$, "AmxThematicMap", $dvt$$11$$.$AmxThematicMap$);
  $dvt$$11$$.$exportProperty$($dvt$$11$$.$AmxThematicMap$, "newInstance", $dvt$$11$$.$AmxThematicMap$.newInstance);
  $dvt$$11$$.$exportProperty$($dvt$$11$$.$AmxThematicMap$.prototype, "render", $dvt$$11$$.$AmxThematicMap$.prototype.$render$);
  $dvt$$11$$.$exportProperty$($DvtBaseMapManager$$, "getLayerIds", $DvtBaseMapManager$$.$getLayerIds$);
  $dvt$$11$$.$exportProperty$($dvt$$11$$, "ThematicMap", $dvt$$11$$.$ThematicMap$);
  $dvt$$11$$.$exportProperty$($dvt$$11$$.$ThematicMap$, "newInstance", $dvt$$11$$.$ThematicMap$.newInstance);
  $dvt$$11$$.$exportProperty$($dvt$$11$$.$ThematicMap$.prototype, "updateLayer", $dvt$$11$$.$ThematicMap$.prototype.$updateLayer$);
  $dvt$$11$$.$exportProperty$($dvt$$11$$.$ThematicMap$.prototype, "destroy", $dvt$$11$$.$ThematicMap$.prototype.$destroy$);
  $dvt$$11$$.$exportProperty$($dvt$$11$$.$ThematicMap$.prototype, "getAutomation", $dvt$$11$$.$ThematicMap$.prototype.$getAutomation$);
  $dvt$$11$$.$exportProperty$($dvt$$11$$.$ThematicMap$.prototype, "highlight", $dvt$$11$$.$ThematicMap$.prototype.$highlight$);
  $dvt$$11$$.$exportProperty$($dvt$$11$$.$ThematicMap$.prototype, "processDefaultHoverEffect", $dvt$$11$$.$ThematicMap$.prototype.$processDefaultHoverEffect$);
  $dvt$$11$$.$exportProperty$($dvt$$11$$.$ThematicMap$.prototype, "processDefaultSelectionEffect", $dvt$$11$$.$ThematicMap$.prototype.$processDefaultSelectionEffect$);
  $dvt$$11$$.$exportProperty$($dvt$$11$$.$ThematicMap$.prototype, "processDefaultFocusEffect", $dvt$$11$$.$ThematicMap$.prototype.$processDefaultFocusEffect$);
  $dvt$$11$$.$exportProperty$($DvtThematicMapAutomation$$.prototype, "getDomElementForSubId", $DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$11$$.$exportProperty$($DvtThematicMapAutomation$$.prototype, "getData", $DvtThematicMapAutomation$$.prototype.getData);
})(dvt);

// To avoid changing the basemaps, which each call the basemap manager, we will
// put the basemap manager onto the returned object. We'll only do this if it's
// not defined, since in min/min-debug mode, the non-exported version is on the window.
if(!dvt['DvtBaseMapManager'])
  dvt['DvtBaseMapManager'] = DvtBaseMapManager;

  return dvt;
});
