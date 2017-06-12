/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
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

(function($dvt$$9$$) {
  function $DvtTrainEvent$$($dvt$$9$$) {
    this.Init($DvtTrainEvent$$.$TYPE$);
    this.type = this.$getType$();
    this.$_index$ = $dvt$$9$$;
  }
  function $DvtAccordionDefaults$$() {
    this.Init({skyros:$DvtAccordionDefaults$$.$VERSION_1$, alta:$DvtAccordionDefaults$$.$SKIN_ALTA$});
  }
  function $DvtPanelDrawerKeyboardHandler$$($dvt$$9$$, $DvtTrainEvent$$) {
    this.Init($dvt$$9$$, $DvtTrainEvent$$);
  }
  function $DvtPanelDrawerEventManager$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.Init($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$);
  }
  function $DvtPanelDrawerTab$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    this.Init($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
  }
  function $DvtBreadcrumbsPeer$$($dvt$$9$$, $DvtTrainEvent$$) {
    this.Init();
    this.$_id$ = $dvt$$9$$;
    this.$_bDrillable$ = !1;
    this.$_displayable$ = $DvtTrainEvent$$;
  }
  function $DvtBreadcrumbsEventManager$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    this.Init($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
    this.$_breadcrumbs$ = $dvt$$9$$;
  }
  $dvt$$9$$.$AttrGroups$ = function $$dvt$$9$$$$AttrGroups$$() {
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$AttrGroups$, $dvt$$9$$.$Obj$);
  $dvt$$9$$.$AttrGroups$.prototype.get = function $$dvt$$9$$$$AttrGroups$$$get$() {
  };
  $dvt$$9$$.$DiscreteAttrGroups$ = function $$dvt$$9$$$$DiscreteAttrGroups$$() {
    this.$_results$ = [];
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$DiscreteAttrGroups$, $dvt$$9$$.$AttrGroups$);
  $dvt$$9$$.$DiscreteAttrGroups$.prototype.add = function $$dvt$$9$$$$DiscreteAttrGroups$$$add$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$_results$.push({group:$dvt$$9$$, $groupLabel$:$DvtTrainEvent$$, $params$:$DvtAccordionDefaults$$});
  };
  $dvt$$9$$.$DiscreteAttrGroups$.prototype.get = function $$dvt$$9$$$$DiscreteAttrGroups$$$get$($dvt$$9$$) {
    if (null === $dvt$$9$$) {
      return null;
    }
    for (var $DvtTrainEvent$$ = 0;$DvtTrainEvent$$ < this.$_results$.length;$DvtTrainEvent$$++) {
      if (this.$_results$[$DvtTrainEvent$$].group == $dvt$$9$$) {
        return this.$_results$[$DvtTrainEvent$$].$params$;
      }
    }
    return null;
  };
  $dvt$$9$$.$DiscreteAttrGroups$.prototype.$getMappingsArray$ = function $$dvt$$9$$$$DiscreteAttrGroups$$$$getMappingsArray$$() {
    return this.$_results$.slice(0);
  };
  $dvt$$9$$.$ContinuousAttrGroups$ = function $$dvt$$9$$$$ContinuousAttrGroups$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    this.$_minValue$ = $dvt$$9$$;
    this.$_maxValue$ = $DvtTrainEvent$$;
    this.$_minLabel$ = $DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$ : this.$_minValue$;
    this.$_maxLabel$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$ : this.$_maxValue$;
    this.$_ramp$ = $DvtPanelDrawerEventManager$$;
    this.$_range$ = this.$_maxValue$ - this.$_minValue$;
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$ContinuousAttrGroups$, $dvt$$9$$.$AttrGroups$);
  $dvt$$9$$.$ContinuousAttrGroups$.prototype.get = function $$dvt$$9$$$$ContinuousAttrGroups$$$get$($dvt$$9$$) {
    if (isNaN($dvt$$9$$) || null === $dvt$$9$$) {
      return null;
    }
    $dvt$$9$$ = 0 < this.$_range$ ? ($dvt$$9$$ - this.$_minValue$) / this.$_range$ : .5;
    $dvt$$9$$ = Math.max(Math.min($dvt$$9$$, 1), 0);
    $dvt$$9$$ *= this.$_ramp$.length - 1;
    return $dvt$$9$$ === Math.round($dvt$$9$$) ? this.$_ramp$[$dvt$$9$$] : this.$_calcValue$(this.$_ramp$[Math.floor($dvt$$9$$)], this.$_ramp$[Math.ceil($dvt$$9$$)], $dvt$$9$$ - Math.floor($dvt$$9$$));
  };
  $dvt$$9$$.$ContinuousAttrGroups$.prototype.$getRamp$ = function $$dvt$$9$$$$ContinuousAttrGroups$$$$getRamp$$() {
    return this.$_ramp$.slice(0);
  };
  $dvt$$9$$.$ContinuousAttrGroups$.prototype.$getMinLabel$ = function $$dvt$$9$$$$ContinuousAttrGroups$$$$getMinLabel$$() {
    return this.$_minLabel$;
  };
  $dvt$$9$$.$ContinuousAttrGroups$.prototype.$_calcValue$ = function $$dvt$$9$$$$ContinuousAttrGroups$$$$_calcValue$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    return $dvt$$9$$.$ColorUtils$.$interpolateColor$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
  };
  $dvt$$9$$.$LegendAttrGroupsRenderer$ = function $$dvt$$9$$$$LegendAttrGroupsRenderer$$() {
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$LegendAttrGroupsRenderer$, $dvt$$9$$.$Obj$);
  $dvt$$9$$.$LegendAttrGroupsRenderer$.$_LEGEND_MAX_HEIGHT$ = .4;
  $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_GROUP_GAP$ = 1;
  $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_WIDTH$ = 50;
  $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_HEIGHT$ = 10;
  $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$ = 5;
  $dvt$$9$$.$LegendAttrGroupsRenderer$.$_LABEL_SIZE$ = 11;
  $dvt$$9$$.$LegendAttrGroupsRenderer$.$_LABEL_COLOR$ = "#636363";
  $dvt$$9$$.$LegendAttrGroupsRenderer$.$_LABEL_VALUE_COLOR$ = "#333333";
  $dvt$$9$$.$LegendAttrGroupsRenderer$.$renderAttrGroups$ = function $$dvt$$9$$$$LegendAttrGroupsRenderer$$$renderAttrGroups$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$) {
    var $DvtBreadcrumbsDefaults$$ = null;
    $DvtBreadcrumbsPeer$$ && ($DvtBreadcrumbsPeer$$ instanceof $dvt$$9$$.$ContinuousAttrGroups$ ? $DvtBreadcrumbsDefaults$$ = $dvt$$9$$.$LegendAttrGroupsRenderer$.$_renderAttrGroupsContinuous$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$) : $DvtBreadcrumbsPeer$$ instanceof $dvt$$9$$.$DiscreteAttrGroups$ && ($DvtBreadcrumbsDefaults$$ = $dvt$$9$$.$LegendAttrGroupsRenderer$.$_renderAttrGroupsDiscrete$($DvtTrainEvent$$, 
    $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$)));
    return $DvtBreadcrumbsDefaults$$;
  };
  $dvt$$9$$.$LegendAttrGroupsRenderer$.$_renderAttrGroupsContinuous$ = function $$dvt$$9$$$$LegendAttrGroupsRenderer$$$_renderAttrGroupsContinuous$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    var $DvtBreadcrumbsEventManager$$ = $dvt$$9$$.$Agent$.$isRightToLeft$($DvtTrainEvent$$), $DvtBreadcrumbsDefaults$$ = $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_HEIGHT$ / 2 + $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_GROUP_GAP$, $DvtBreadcrumbsRenderer$$ = new $dvt$$9$$.$Container$($DvtTrainEvent$$);
    $DvtPanelDrawerKeyboardHandler$$.$addChild$($DvtBreadcrumbsRenderer$$);
    $DvtPanelDrawerKeyboardHandler$$ = $DvtPanelDrawerTab$$.$getMinLabel$();
    var $minLabel$$2$$ = new $dvt$$9$$.$OutputText$($DvtTrainEvent$$, $DvtPanelDrawerKeyboardHandler$$, 0, $DvtBreadcrumbsDefaults$$);
    $minLabel$$2$$.$setCSSStyle$($DvtBreadcrumbsPeer$$.$labelStyle$);
    $minLabel$$2$$.$alignMiddle$();
    $DvtBreadcrumbsRenderer$$.$addChild$($minLabel$$2$$);
    var $gradientRect$$ = new $dvt$$9$$.Rect($DvtTrainEvent$$, 0, $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_GROUP_GAP$, $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_WIDTH$, $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_HEIGHT$), $gradientWidth_ramp$$1$$ = $DvtBreadcrumbsEventManager$$ ? $DvtPanelDrawerTab$$.$getRamp$().slice().reverse() : $DvtPanelDrawerTab$$.$getRamp$();
    $gradientRect$$.$setFill$(new $dvt$$9$$.$LinearGradientFill$(0, $gradientWidth_ramp$$1$$));
    $DvtBreadcrumbsPeer$$.borderColor && $gradientRect$$.$setSolidStroke$($DvtBreadcrumbsPeer$$.borderColor);
    $DvtBreadcrumbsRenderer$$.$addChild$($gradientRect$$);
    $gradientWidth_ramp$$1$$ = $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_WIDTH$ + $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$;
    $DvtPanelDrawerTab$$ = $DvtPanelDrawerTab$$.$_maxLabel$;
    $DvtTrainEvent$$ = new $dvt$$9$$.$OutputText$($DvtTrainEvent$$, $DvtPanelDrawerTab$$, 0, $DvtBreadcrumbsDefaults$$);
    $DvtTrainEvent$$.$setCSSStyle$($DvtBreadcrumbsPeer$$.$labelStyle$);
    $DvtTrainEvent$$.$alignMiddle$();
    $DvtBreadcrumbsRenderer$$.$addChild$($DvtTrainEvent$$);
    $DvtBreadcrumbsEventManager$$ ? ($DvtBreadcrumbsPeer$$ = $DvtTrainEvent$$.$measureDimensions$().$w$ + $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($DvtBreadcrumbsPeer$$), $minLabel$$2$$.$setX$($DvtBreadcrumbsPeer$$ + $gradientWidth_ramp$$1$$)) : ($DvtBreadcrumbsPeer$$ = $minLabel$$2$$.$measureDimensions$().$w$ + $dvt$$9$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($DvtBreadcrumbsPeer$$), $DvtTrainEvent$$.$setX$($DvtBreadcrumbsPeer$$ + 
    $gradientWidth_ramp$$1$$));
    $DvtAccordionDefaults$$.$associate$($gradientRect$$, new $dvt$$9$$.$SimpleObjPeer$($DvtPanelDrawerKeyboardHandler$$ + " - " + $DvtPanelDrawerTab$$));
    $DvtBreadcrumbsRenderer$$.$getDimensions$().$w$ > $DvtPanelDrawerEventManager$$ && ($DvtBreadcrumbsRenderer$$.removeChild($minLabel$$2$$), $DvtBreadcrumbsRenderer$$.removeChild($DvtTrainEvent$$), $gradientRect$$.$setTranslateX$(0));
    return $DvtBreadcrumbsRenderer$$;
  };
  $dvt$$9$$.$LegendAttrGroupsRenderer$.$_renderAttrGroupsDiscrete$ = function $$dvt$$9$$$$LegendAttrGroupsRenderer$$$_renderAttrGroupsDiscrete$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    var $DvtBreadcrumbsEventManager$$ = new $dvt$$9$$.$Container$($DvtTrainEvent$$);
    $DvtAccordionDefaults$$.$addChild$($DvtBreadcrumbsEventManager$$);
    $DvtAccordionDefaults$$ = [];
    $DvtPanelDrawerTab$$ = $DvtPanelDrawerTab$$.$getMappingsArray$();
    for (var $DvtBreadcrumbsDefaults$$ = 0;$DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerTab$$.length;$DvtBreadcrumbsDefaults$$++) {
      var $DvtBreadcrumbsRenderer$$ = $DvtPanelDrawerTab$$[$DvtBreadcrumbsDefaults$$];
      $DvtAccordionDefaults$$.push({text:$DvtBreadcrumbsRenderer$$.$groupLabel$, color:$DvtBreadcrumbsRenderer$$.$params$.color, pattern:$DvtBreadcrumbsRenderer$$.$params$.pattern, borderColor:$DvtBreadcrumbsPeer$$.borderColor});
    }
    $DvtBreadcrumbsPeer$$ = {sections:[{items:$DvtAccordionDefaults$$}], orientation:"horizontal", layout:{outerGapWidth:0, outerGapHeight:0}, textStyle:$DvtBreadcrumbsPeer$$.$labelStyle$.toString()};
    $DvtAccordionDefaults$$ = $dvt$$9$$.$Legend$.newInstance($DvtTrainEvent$$);
    $DvtAccordionDefaults$$.setId(null);
    $DvtBreadcrumbsEventManager$$.$addChild$($DvtAccordionDefaults$$);
    $DvtPanelDrawerEventManager$$ = $DvtAccordionDefaults$$.$getPreferredSize$($DvtBreadcrumbsPeer$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$ * $dvt$$9$$.$LegendAttrGroupsRenderer$.$_LEGEND_MAX_HEIGHT$);
    $DvtAccordionDefaults$$.$render$($DvtBreadcrumbsPeer$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$.$h$);
    $DvtPanelDrawerKeyboardHandler$$ = $DvtAccordionDefaults$$.$getContentDimensions$();
    $DvtTrainEvent$$ = new $dvt$$9$$.Rect($DvtTrainEvent$$, 0, 0, $DvtPanelDrawerKeyboardHandler$$.$w$, $DvtPanelDrawerEventManager$$.$h$);
    $DvtTrainEvent$$.$setInvisibleFill$();
    $DvtBreadcrumbsEventManager$$.$addChildAt$($DvtTrainEvent$$, 0);
    return $DvtBreadcrumbsEventManager$$;
  };
  $dvt$$9$$.$BreadcrumbsDrillEvent$ = function $$dvt$$9$$$$BreadcrumbsDrillEvent$$($DvtTrainEvent$$) {
    this.Init($dvt$$9$$.$BreadcrumbsDrillEvent$.$TYPE$);
    this.$_id$ = $DvtTrainEvent$$;
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$BreadcrumbsDrillEvent$, $dvt$$9$$.$BaseComponentEvent$);
  $dvt$$9$$.$BreadcrumbsDrillEvent$.$TYPE$ = "breadcrumbsDrill";
  $dvt$$9$$.$BreadcrumbsDrillEvent$.prototype.getId = function $$dvt$$9$$$$BreadcrumbsDrillEvent$$$getId$() {
    return this.$_id$;
  };
  $dvt$$9$$.$Breadcrumbs$ = function $$dvt$$9$$$$Breadcrumbs$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    this.Init($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$Breadcrumbs$, $dvt$$9$$.$Container$);
  $dvt$$9$$.$Breadcrumbs$.prototype.Init = function $$dvt$$9$$$$Breadcrumbs$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    $dvt$$9$$.$Breadcrumbs$.$superclass$.Init.call(this, $DvtTrainEvent$$);
    this.$setOptions$($DvtPanelDrawerEventManager$$);
    this.$_eventHandler$ = new $DvtBreadcrumbsEventManager$$(this, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
    this.$_eventHandler$.$addListeners$(this);
    this.setId("breadcrumbs1000" + Math.floor(1E9 * Math.random()));
    this.$_curCrumbIdx$ = -1;
    this.$_crumbs$ = this.$_keyboardFocusRect$ = null;
  };
  $dvt$$9$$.$Breadcrumbs$.prototype.$setOptions$ = function $$dvt$$9$$$$Breadcrumbs$$$$setOptions$$($dvt$$9$$) {
    this.$_options$ = $DvtBreadcrumbsDefaults$$.$calcOptions$($dvt$$9$$);
  };
  $dvt$$9$$.$Breadcrumbs$.prototype.$render$ = function $$dvt$$9$$$$Breadcrumbs$$$$render$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$_data$ = $DvtTrainEvent$$ ? $dvt$$9$$.$JsonUtils$.clone($DvtTrainEvent$$) : this.$_data$;
    this.$removeChildren$();
    this.$SetCrumbs$(null);
    $DvtBreadcrumbsRenderer$$.$render$(this, this, $DvtAccordionDefaults$$);
  };
  $dvt$$9$$.$Breadcrumbs$.prototype.$__getData$ = function $$dvt$$9$$$$Breadcrumbs$$$$__getData$$() {
    return this.$_data$ ? this.$_data$ : {};
  };
  $dvt$$9$$.$Breadcrumbs$.prototype.$getEventManager$ = function $$dvt$$9$$$$Breadcrumbs$$$$getEventManager$$() {
    return this.$_eventHandler$;
  };
  $dvt$$9$$.$Breadcrumbs$.prototype.$hideKeyboardFocusEffect$ = function $$dvt$$9$$$$Breadcrumbs$$$$hideKeyboardFocusEffect$$() {
    var $dvt$$9$$ = this.$_curCrumbIdx$;
    this.$_curCrumbIdx$ = -1;
    this.$_updateKeyboardFocusEffect$($dvt$$9$$, this.$_curCrumbIdx$);
  };
  $dvt$$9$$.$Breadcrumbs$.prototype.$updateCrumbFocus$ = function $$dvt$$9$$$$Breadcrumbs$$$$updateCrumbFocus$$($dvt$$9$$) {
    var $DvtTrainEvent$$ = this.$_curCrumbIdx$;
    this.$_curCrumbIdx$ = this.$_getUpdatedCrumbIndex$($DvtTrainEvent$$, !$dvt$$9$$);
    this.$_updateKeyboardFocusEffect$($DvtTrainEvent$$, this.$_curCrumbIdx$);
    return this.$_curCrumbIdx$;
  };
  $dvt$$9$$.$Breadcrumbs$.prototype.$_getUpdatedCrumbIndex$ = function $$dvt$$9$$$$Breadcrumbs$$$$_getUpdatedCrumbIndex$$($dvt$$9$$, $DvtTrainEvent$$) {
    return -1 == $dvt$$9$$ ? $DvtTrainEvent$$ ? 0 : this.$_data$.items.length - 2 : $DvtTrainEvent$$ ? $dvt$$9$$ == this.$_data$.items.length - 2 ? -1 : ++$dvt$$9$$ : 0 == $dvt$$9$$ ? -1 : --$dvt$$9$$;
  };
  $dvt$$9$$.$Breadcrumbs$.prototype.$_updateKeyboardFocusEffect$ = function $$dvt$$9$$$$Breadcrumbs$$$$_updateKeyboardFocusEffect$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$ = this.$_keyboardFocusRect$, $DvtPanelDrawerEventManager$$ = null, $DvtPanelDrawerTab$$ = this.$getCrumb$($DvtAccordionDefaults$$);
    if ($DvtPanelDrawerTab$$) {
      var $DvtBreadcrumbsPeer$$ = this.$_eventHandler$.$GetLogicalObject$($DvtPanelDrawerTab$$);
      $DvtBreadcrumbsPeer$$ && $DvtBreadcrumbsPeer$$.$isDrillable$ && $DvtBreadcrumbsPeer$$.$isDrillable$() ? ($DvtPanelDrawerEventManager$$ = this.$getCtx$(), $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerTab$$.$getDimensions$(), $DvtPanelDrawerTab$$ = $DvtPanelDrawerTab$$.$getMatrix$(), this.$_keyboardFocusRect$ = $DvtPanelDrawerEventManager$$ = new $dvt$$9$$.$KeyboardFocusEffect$($DvtPanelDrawerEventManager$$, this, $DvtBreadcrumbsPeer$$, $DvtPanelDrawerTab$$)) : this.$_keyboardFocusRect$ = null;
    }
    $DvtPanelDrawerKeyboardHandler$$ && $DvtPanelDrawerKeyboardHandler$$.$hide$();
    $DvtPanelDrawerEventManager$$ && $DvtPanelDrawerEventManager$$.show();
  };
  $dvt$$9$$.$Breadcrumbs$.prototype.$getCrumb$ = function $$dvt$$9$$$$Breadcrumbs$$$$getCrumb$$($dvt$$9$$) {
    var $DvtTrainEvent$$ = this.$_crumbs$;
    return 0 > $dvt$$9$$ || !$DvtTrainEvent$$ || $dvt$$9$$ >= $DvtTrainEvent$$.length ? null : $DvtTrainEvent$$[$dvt$$9$$];
  };
  $dvt$$9$$.$Breadcrumbs$.prototype.$getCrumbIndex$ = function $$dvt$$9$$$$Breadcrumbs$$$$getCrumbIndex$$($dvt$$9$$) {
    for (var $DvtTrainEvent$$ = this.$_crumbs$, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < $DvtTrainEvent$$.length;$DvtAccordionDefaults$$++) {
      if ($DvtTrainEvent$$[$DvtAccordionDefaults$$] == $dvt$$9$$) {
        return $DvtAccordionDefaults$$;
      }
    }
  };
  $dvt$$9$$.$Breadcrumbs$.prototype.$SetCrumbs$ = function $$dvt$$9$$$$Breadcrumbs$$$$SetCrumbs$$($dvt$$9$$) {
    this.$_crumbs$ = $dvt$$9$$;
  };
  var $DvtBreadcrumbsDefaults$$ = {};
  $dvt$$9$$.$Obj$.$createSubclass$($DvtBreadcrumbsDefaults$$, $dvt$$9$$.$Obj$);
  $DvtBreadcrumbsDefaults$$.$VERSION_1$ = {labelStyle:$dvt$$9$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$ + "color: #003286;", disabledLabelStyle:$dvt$$9$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$, $__labelGap$:2, $__labelSeparator$:"\x3e"};
  $DvtBreadcrumbsDefaults$$.$calcOptions$ = function $$DvtBreadcrumbsDefaults$$$$calcOptions$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtBreadcrumbsDefaults$$.$_getDefaults$($DvtTrainEvent$$);
    return $DvtTrainEvent$$ ? $dvt$$9$$.$JsonUtils$.$merge$($DvtTrainEvent$$, $DvtAccordionDefaults$$) : $DvtAccordionDefaults$$;
  };
  $DvtBreadcrumbsDefaults$$.$_getDefaults$ = function $$DvtBreadcrumbsDefaults$$$$_getDefaults$$() {
    return $dvt$$9$$.$JsonUtils$.clone($DvtBreadcrumbsDefaults$$.$VERSION_1$);
  };
  $DvtBreadcrumbsDefaults$$.$getGapSize$ = function $$DvtBreadcrumbsDefaults$$$$getGapSize$$($dvt$$9$$, $DvtTrainEvent$$) {
    return Math.ceil($DvtTrainEvent$$ * $dvt$$9$$.layout.gapRatio);
  };
  $dvt$$9$$.$Obj$.$createSubclass$($DvtBreadcrumbsEventManager$$, $dvt$$9$$.$EventManager$);
  $DvtBreadcrumbsEventManager$$.prototype.$OnClick$ = function $$DvtBreadcrumbsEventManager$$$$$OnClick$$($dvt$$9$$) {
    $DvtBreadcrumbsEventManager$$.$superclass$.$OnClick$.call(this, $dvt$$9$$);
    this.$_processBreadcrumbs$(this.$GetLogicalObject$($dvt$$9$$.target));
  };
  $DvtBreadcrumbsEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtBreadcrumbsEventManager$$$$$HandleTouchClickInternal$$($dvt$$9$$) {
    this.$_processBreadcrumbs$(this.$GetLogicalObject$($dvt$$9$$.target));
  };
  $DvtBreadcrumbsEventManager$$.prototype.$_processBreadcrumbs$ = function $$DvtBreadcrumbsEventManager$$$$$_processBreadcrumbs$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ && $DvtTrainEvent$$ instanceof $DvtBreadcrumbsPeer$$ && $DvtTrainEvent$$.$isDrillable$() && ($DvtTrainEvent$$ = new $dvt$$9$$.$BreadcrumbsDrillEvent$($DvtTrainEvent$$.getId()), this.$FireEvent$($DvtTrainEvent$$, this.$_breadcrumbs$));
  };
  $DvtBreadcrumbsEventManager$$.prototype.$handleKeyboardEvent$ = function $$DvtBreadcrumbsEventManager$$$$$handleKeyboardEvent$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = !0, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.keyCode;
    $DvtPanelDrawerKeyboardHandler$$ == $dvt$$9$$.KeyboardEvent.$TAB$ ? ($DvtPanelDrawerKeyboardHandler$$ = this.$_breadcrumbs$.$updateCrumbFocus$($DvtTrainEvent$$.shiftKey), -1 == $DvtPanelDrawerKeyboardHandler$$ ? $DvtAccordionDefaults$$ = !1 : this.$UpdateActiveElement$(this.$_breadcrumbs$.$getCrumb$($DvtPanelDrawerKeyboardHandler$$))) : $DvtPanelDrawerKeyboardHandler$$ == $dvt$$9$$.KeyboardEvent.$ENTER$ && this.$_processBreadcrumbs$(this.$GetLogicalObject$(this.$_breadcrumbs$.$getCrumb$(this.$_breadcrumbs$.$_curCrumbIdx$)));
    $DvtAccordionDefaults$$ && $dvt$$9$$.$EventManager$.$consumeEvent$($DvtTrainEvent$$);
    return $DvtAccordionDefaults$$;
  };
  $dvt$$9$$.$Obj$.$createSubclass$($DvtBreadcrumbsPeer$$, $dvt$$9$$.$SimpleObjPeer$);
  $DvtBreadcrumbsPeer$$.prototype.getId = function $$DvtBreadcrumbsPeer$$$$getId$() {
    return this.$_id$;
  };
  $DvtBreadcrumbsPeer$$.prototype.$isDrillable$ = function $$DvtBreadcrumbsPeer$$$$$isDrillable$$() {
    return this.$_bDrillable$;
  };
  $DvtBreadcrumbsPeer$$.prototype.$setDrillable$ = function $$DvtBreadcrumbsPeer$$$$$setDrillable$$($dvt$$9$$) {
    this.$_bDrillable$ = $dvt$$9$$;
  };
  $DvtBreadcrumbsPeer$$.prototype.$getDisplayable$ = function $$DvtBreadcrumbsPeer$$$$$getDisplayable$$() {
    return this.$_displayable$;
  };
  var $DvtBreadcrumbsRenderer$$ = {};
  $dvt$$9$$.$Obj$.$createSubclass$($DvtBreadcrumbsRenderer$$, $dvt$$9$$.$Obj$);
  $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$ = 3;
  $DvtBreadcrumbsRenderer$$.$render$ = function $$DvtBreadcrumbsRenderer$$$$render$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    for (var $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.$getCtx$(), $DvtPanelDrawerTab$$ = $DvtTrainEvent$$.$__getData$().items ? $DvtTrainEvent$$.$__getData$().items : [], $DvtBreadcrumbsEventManager$$ = $DvtTrainEvent$$.$_options$, $DvtBreadcrumbsDefaults$$ = $DvtTrainEvent$$.$getEventManager$(), $labels$$23$$ = [], $peers$$9$$ = [], $i$$557$$ = 0;$i$$557$$ < $DvtPanelDrawerTab$$.length;$i$$557$$++) {
      var $dataItem$$44_peer$$27$$ = $DvtPanelDrawerTab$$[$i$$557$$];
      if ($dataItem$$44_peer$$27$$) {
        var $label$$70$$ = $DvtBreadcrumbsRenderer$$.$_createLabel$($DvtPanelDrawerEventManager$$, $dataItem$$44_peer$$27$$.label ? $dataItem$$44_peer$$27$$.label : "", $DvtBreadcrumbsEventManager$$, $i$$557$$ < $DvtPanelDrawerTab$$.length - 1);
        $labels$$23$$.push($label$$70$$);
        $dataItem$$44_peer$$27$$ = new $DvtBreadcrumbsPeer$$($dataItem$$44_peer$$27$$.id, $label$$70$$);
        $DvtBreadcrumbsDefaults$$.$associate$($label$$70$$, $dataItem$$44_peer$$27$$);
        $peers$$9$$.push($dataItem$$44_peer$$27$$);
        $i$$557$$ < $DvtPanelDrawerTab$$.length - 1 && $dataItem$$44_peer$$27$$.$setDrillable$(!0);
      }
    }
    $DvtTrainEvent$$.$SetCrumbs$($labels$$23$$);
    $dvt$$9$$.$Agent$.$isRightToLeft$($DvtPanelDrawerEventManager$$) ? $DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $labels$$23$$, $peers$$9$$) : $DvtBreadcrumbsRenderer$$.$_positionLabels$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $labels$$23$$, $peers$$9$$);
  };
  $DvtBreadcrumbsRenderer$$.$_createButtonState$ = function $$DvtBreadcrumbsRenderer$$$$_createButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    $DvtAccordionDefaults$$ = new $dvt$$9$$.$OutputText$($DvtTrainEvent$$, $DvtAccordionDefaults$$, 0, 0);
    $DvtAccordionDefaults$$.$setMouseEnabled$(!1);
    $DvtAccordionDefaults$$.$setCSSStyle$($DvtPanelDrawerKeyboardHandler$$);
    var $DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$($dvt$$9$$.$CSSStyle$.$PADDING_TOP$), $DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$($dvt$$9$$.$CSSStyle$.$PADDING_RIGHT$), $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$($dvt$$9$$.$CSSStyle$.$PADDING_BOTTOM$), $DvtBreadcrumbsEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$($dvt$$9$$.$CSSStyle$.$PADDING_LEFT$), $DvtBreadcrumbsDefaults$$ = $dvt$$9$$.$DisplayableUtils$.$getDimensionsForced$($DvtTrainEvent$$, 
    $DvtAccordionDefaults$$);
    $DvtTrainEvent$$ = new $dvt$$9$$.Rect($DvtTrainEvent$$, 0, 0, $DvtBreadcrumbsDefaults$$.$w$ + $DvtBreadcrumbsEventManager$$ + $DvtPanelDrawerTab$$, $DvtBreadcrumbsDefaults$$.$h$ + $DvtPanelDrawerEventManager$$ + $DvtBreadcrumbsPeer$$);
    $DvtTrainEvent$$.$setInvisibleFill$();
    $DvtTrainEvent$$.$setCSSStyle$($DvtPanelDrawerKeyboardHandler$$);
    $DvtAccordionDefaults$$.$setTranslate$($DvtBreadcrumbsEventManager$$, $DvtPanelDrawerEventManager$$);
    $DvtTrainEvent$$.$addChild$($DvtAccordionDefaults$$);
    return $DvtTrainEvent$$;
  };
  $DvtBreadcrumbsRenderer$$.$_createLabel$ = function $$DvtBreadcrumbsRenderer$$$$_createLabel$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    if ($DvtPanelDrawerEventManager$$ && ($DvtPanelDrawerKeyboardHandler$$.$labelStyleOver$ || $DvtPanelDrawerKeyboardHandler$$.$labelStyleDown$)) {
      var $DvtPanelDrawerTab$$ = new $dvt$$9$$.$CSSStyle$($DvtPanelDrawerKeyboardHandler$$.$labelStyle$);
      $DvtPanelDrawerEventManager$$ = new $dvt$$9$$.$CSSStyle$($DvtPanelDrawerKeyboardHandler$$.$labelStyleOver$);
      $DvtPanelDrawerKeyboardHandler$$ = new $dvt$$9$$.$CSSStyle$($DvtPanelDrawerKeyboardHandler$$.$labelStyleDown$);
      $DvtPanelDrawerTab$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerTab$$);
      $DvtPanelDrawerEventManager$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerEventManager$$);
      $DvtPanelDrawerKeyboardHandler$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
      $DvtTrainEvent$$ = new $dvt$$9$$.$Button$($DvtTrainEvent$$, $DvtPanelDrawerTab$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerKeyboardHandler$$);
      $DvtTrainEvent$$.$setAriaRole$("link");
      $DvtTrainEvent$$.$setAriaProperty$("label", $DvtAccordionDefaults$$);
    } else {
      $DvtPanelDrawerEventManager$$ = new $dvt$$9$$.$CSSStyle$($DvtPanelDrawerEventManager$$ ? $DvtPanelDrawerKeyboardHandler$$.$labelStyle$ : $DvtPanelDrawerKeyboardHandler$$.$disabledLabelStyle$), $DvtPanelDrawerEventManager$$.$getPadding$($dvt$$9$$.$CSSStyle$.$PADDING_LEFT$) || $DvtPanelDrawerEventManager$$.$getPadding$($dvt$$9$$.$CSSStyle$.$PADDING_RIGHT$) || $DvtPanelDrawerEventManager$$.$getPadding$($dvt$$9$$.$CSSStyle$.$PADDING_TOP$) || $DvtPanelDrawerEventManager$$.$getPadding$($dvt$$9$$.$CSSStyle$.$PADDING_BOTTOM$) ? 
      $DvtTrainEvent$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerEventManager$$) : ($DvtTrainEvent$$ = new $dvt$$9$$.$OutputText$($DvtTrainEvent$$, $DvtAccordionDefaults$$, 0, 0), $DvtTrainEvent$$.$setCSSStyle$($DvtPanelDrawerEventManager$$));
    }
    return $DvtTrainEvent$$;
  };
  $DvtBreadcrumbsRenderer$$.$_getLabelTextString$ = function $$DvtBreadcrumbsRenderer$$$$_getLabelTextString$$($DvtTrainEvent$$) {
    if ($DvtTrainEvent$$ instanceof $dvt$$9$$.$Button$) {
      return $DvtTrainEvent$$ = $DvtTrainEvent$$.$upState$.$getChildAt$(0), $DvtTrainEvent$$.$getTextString$();
    }
    $DvtTrainEvent$$ instanceof $dvt$$9$$.Rect && ($DvtTrainEvent$$ = $DvtTrainEvent$$.$getChildAt$(0));
    return $DvtTrainEvent$$.$getTextString$();
  };
  $DvtBreadcrumbsRenderer$$.$_truncateLabels$ = function $$DvtBreadcrumbsRenderer$$$$_truncateLabels$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if ($DvtTrainEvent$$ instanceof $dvt$$9$$.$Button$) {
      var $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$upState$.$getChildAt$(0);
      $dvt$$9$$.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent());
      $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$overState$.$getChildAt$(0);
      $dvt$$9$$.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent());
      $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$downState$.$getChildAt$(0);
      $dvt$$9$$.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent());
    } else {
      $DvtTrainEvent$$ instanceof $dvt$$9$$.Rect ? ($DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$getChildAt$(0), $dvt$$9$$.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent())) : $dvt$$9$$.$TextUtils$.$fitText$($DvtTrainEvent$$, $DvtAccordionDefaults$$, Infinity, $DvtTrainEvent$$.getParent());
    }
  };
  $DvtBreadcrumbsRenderer$$.$_positionLabels$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabels$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    for (var $DvtBreadcrumbsPeer$$ = $DvtTrainEvent$$.$_options$, $DvtBreadcrumbsEventManager$$ = $DvtTrainEvent$$.$getEventManager$(), $DvtBreadcrumbsDefaults$$ = [], $maxHeight$$11$$ = 0, $i$$558$$ = 0;$i$$558$$ < $DvtPanelDrawerEventManager$$.length;$i$$558$$++) {
      $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$[$i$$558$$]);
      var $dims$$47_separator$$1$$ = $DvtPanelDrawerEventManager$$[$i$$558$$].$getDimensions$();
      $DvtBreadcrumbsDefaults$$[$i$$558$$] = $dims$$47_separator$$1$$;
      $maxHeight$$11$$ = Math.max($dims$$47_separator$$1$$.$h$, $maxHeight$$11$$);
      $DvtAccordionDefaults$$.removeChild($DvtPanelDrawerEventManager$$[$i$$558$$]);
    }
    for (var $x$$181$$ = 0, $i$$558$$ = 0;$i$$558$$ < $DvtPanelDrawerEventManager$$.length;$i$$558$$++) {
      $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$[$i$$558$$]);
      $dims$$47_separator$$1$$ = $DvtBreadcrumbsDefaults$$[$i$$558$$];
      $DvtPanelDrawerEventManager$$[$i$$558$$].$setTranslate$($x$$181$$, .5 * ($maxHeight$$11$$ - $dims$$47_separator$$1$$.$h$));
      if ($dvt$$9$$.$Agent$.$isTouchDevice$()) {
        var $rect$$32_sepDims_separatorWidth$$ = new $dvt$$9$$.Rect($DvtAccordionDefaults$$.$getCtx$(), -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$47_separator$$1$$.$w$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$47_separator$$1$$.$h$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
        $rect$$32_sepDims_separatorWidth$$.$setInvisibleFill$();
        $DvtPanelDrawerEventManager$$[$i$$558$$].$addChild$($rect$$32_sepDims_separatorWidth$$);
        $i$$558$$ < $DvtPanelDrawerTab$$.length && $DvtBreadcrumbsEventManager$$.$associate$($rect$$32_sepDims_separatorWidth$$, $DvtPanelDrawerTab$$[$i$$558$$]);
      }
      if ($x$$181$$ + $dims$$47_separator$$1$$.$w$ > $DvtPanelDrawerKeyboardHandler$$) {
        $DvtTrainEvent$$ = $DvtBreadcrumbsRenderer$$.$_getLabelTextString$($DvtPanelDrawerEventManager$$[$i$$558$$]);
        $DvtBreadcrumbsRenderer$$.$_truncateLabels$($DvtPanelDrawerEventManager$$[$i$$558$$], $DvtPanelDrawerKeyboardHandler$$ - $x$$181$$);
        $i$$558$$ < $DvtPanelDrawerTab$$.length ? $DvtPanelDrawerTab$$[$i$$558$$].$setTooltip$($DvtTrainEvent$$) : $DvtBreadcrumbsEventManager$$.$associate$($DvtPanelDrawerEventManager$$[$i$$558$$], new $dvt$$9$$.$SimpleObjPeer$($DvtTrainEvent$$));
        break;
      } else {
        $x$$181$$ += $dims$$47_separator$$1$$.$w$ + $DvtBreadcrumbsPeer$$.$__labelGap$;
      }
      if ($i$$558$$ < $DvtPanelDrawerEventManager$$.length - 1) {
        $dims$$47_separator$$1$$ = $DvtBreadcrumbsRenderer$$.$_newSeparator$($DvtTrainEvent$$);
        $DvtAccordionDefaults$$.$addChild$($dims$$47_separator$$1$$);
        $rect$$32_sepDims_separatorWidth$$ = $dims$$47_separator$$1$$.$getDimensions$();
        $dims$$47_separator$$1$$.$setTranslate$($x$$181$$, .5 * ($maxHeight$$11$$ - $rect$$32_sepDims_separatorWidth$$.$h$));
        $rect$$32_sepDims_separatorWidth$$ = $rect$$32_sepDims_separatorWidth$$.$w$;
        if ($x$$181$$ + $rect$$32_sepDims_separatorWidth$$ > $DvtPanelDrawerKeyboardHandler$$) {
          $DvtAccordionDefaults$$.removeChild($dims$$47_separator$$1$$);
          break;
        }
        $x$$181$$ += $rect$$32_sepDims_separatorWidth$$ + $DvtBreadcrumbsPeer$$.$__labelGap$;
      }
    }
  };
  $DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabelsBidi$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    for (var $DvtBreadcrumbsPeer$$ = $DvtTrainEvent$$.$_options$, $DvtBreadcrumbsEventManager$$ = $DvtTrainEvent$$.$getEventManager$(), $DvtBreadcrumbsDefaults$$ = 0;$DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerEventManager$$.length;$DvtBreadcrumbsDefaults$$++) {
      $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$]);
      var $dims$$48_separator$$2$$ = $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$getDimensions$();
      if ($dvt$$9$$.$Agent$.$isTouchDevice$()) {
        var $rect$$33_separatorWidth$$1$$ = new $dvt$$9$$.Rect($DvtAccordionDefaults$$.$getCtx$(), -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$48_separator$$2$$.$w$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$48_separator$$2$$.$h$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
        $rect$$33_separatorWidth$$1$$.$setInvisibleFill$();
        $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$addChild$($rect$$33_separatorWidth$$1$$);
        $DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerTab$$.length && $DvtBreadcrumbsEventManager$$.$associate$($rect$$33_separatorWidth$$1$$, $DvtPanelDrawerTab$$[$DvtBreadcrumbsDefaults$$]);
      }
      if (0 > $DvtPanelDrawerKeyboardHandler$$ - $dims$$48_separator$$2$$.$w$) {
        $DvtTrainEvent$$ = $DvtBreadcrumbsRenderer$$.$_getLabelTextString$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$]);
        $DvtBreadcrumbsRenderer$$.$_truncateLabels$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$], $DvtPanelDrawerKeyboardHandler$$);
        $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$setTranslateX$(0);
        $DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerTab$$.length ? $DvtPanelDrawerTab$$[$DvtBreadcrumbsDefaults$$].$setTooltip$($DvtTrainEvent$$) : $DvtBreadcrumbsEventManager$$.$associate$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$], new $dvt$$9$$.$SimpleObjPeer$($DvtTrainEvent$$));
        break;
      } else {
        $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$setTranslateX$($DvtPanelDrawerKeyboardHandler$$ - $dims$$48_separator$$2$$.$w$), $DvtPanelDrawerKeyboardHandler$$ -= $dims$$48_separator$$2$$.$w$ + $DvtBreadcrumbsPeer$$.$__labelGap$;
      }
      if ($DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerEventManager$$.length - 1) {
        if ($dims$$48_separator$$2$$ = $DvtBreadcrumbsRenderer$$.$_newSeparator$($DvtTrainEvent$$), $DvtAccordionDefaults$$.$addChild$($dims$$48_separator$$2$$), $rect$$33_separatorWidth$$1$$ = $dims$$48_separator$$2$$.$getDimensions$().$w$, 0 > $DvtPanelDrawerKeyboardHandler$$ - $rect$$33_separatorWidth$$1$$) {
          $DvtAccordionDefaults$$.removeChild($dims$$48_separator$$2$$);
          break;
        } else {
          $dims$$48_separator$$2$$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$ - $rect$$33_separatorWidth$$1$$), $DvtPanelDrawerKeyboardHandler$$ -= $rect$$33_separatorWidth$$1$$ + $DvtBreadcrumbsPeer$$.$__labelGap$;
        }
      }
    }
  };
  $DvtBreadcrumbsRenderer$$.$_newSeparator$ = function $$DvtBreadcrumbsRenderer$$$$_newSeparator$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$_options$;
    $DvtTrainEvent$$ = new $dvt$$9$$.$OutputText$($DvtTrainEvent$$.$getCtx$(), $DvtAccordionDefaults$$.$__labelSeparator$, 0, 0);
    $DvtTrainEvent$$.$setCSSStyle$(new $dvt$$9$$.$CSSStyle$($DvtAccordionDefaults$$.$labelStyle$));
    return $DvtTrainEvent$$;
  };
  $dvt$$9$$.$PanelDrawerEvent$ = function $$dvt$$9$$$$PanelDrawerEvent$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.Init($dvt$$9$$.$PanelDrawerEvent$.$TYPE$);
    this.$_subtype$ = $DvtTrainEvent$$;
    this.$_activePanel$ = $DvtAccordionDefaults$$;
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$PanelDrawerEvent$, $dvt$$9$$.$BaseComponentEvent$);
  $dvt$$9$$.$PanelDrawerEvent$.$TYPE$ = "dvtPanelDrawerEvent";
  $dvt$$9$$.$PanelDrawerEvent$.$SUBTYPE_HIDE$ = "hide";
  $dvt$$9$$.$PanelDrawerEvent$.$SUBTYPE_SHOW$ = "show";
  $dvt$$9$$.$PanelDrawerEvent$.prototype.$getSubType$ = function $$dvt$$9$$$$PanelDrawerEvent$$$$getSubType$$() {
    return this.$_subtype$;
  };
  $dvt$$9$$.$PanelDrawer$ = function $$dvt$$9$$$$PanelDrawer$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    this.Init($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$PanelDrawer$, $dvt$$9$$.$Container$);
  $dvt$$9$$.$PanelDrawer$.$DIR_LEFT$ = "left";
  $dvt$$9$$.$PanelDrawer$.$DIR_RIGHT$ = "right";
  $dvt$$9$$.$PanelDrawer$.$DOCK_TOP$ = "top";
  $dvt$$9$$.$PanelDrawer$.$DOCK_BOTTOM$ = "bottom";
  $dvt$$9$$.$PanelDrawer$.$_FIRST_TAB_SPACING$ = 15;
  $dvt$$9$$.$PanelDrawer$.$_INTER_TAB_SPACING$ = 0;
  $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ = 42;
  $dvt$$9$$.$PanelDrawer$.$_TAB_CORNER_RADIUS$ = 2;
  $dvt$$9$$.$PanelDrawer$.$_BACKGROUND_COLOR$ = "#ffffff";
  $dvt$$9$$.$PanelDrawer$.$_BORDER_COLOR$ = "#bbc7d0";
  $dvt$$9$$.$PanelDrawer$.$_ANIM_DURATION$ = .25;
  $dvt$$9$$.$PanelDrawer$.$_CONTENT_PADDING$ = 10;
  $dvt$$9$$.$PanelDrawer$.$_BACKGROUND_ALPHA$ = 1;
  $dvt$$9$$.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$ = 1;
  $dvt$$9$$.$PanelDrawer$.$_BACKGROUND_ALPHA_ROLLOVER$ = 1;
  $dvt$$9$$.$PanelDrawer$.$_BORDER_ALPHA$ = 1;
  $dvt$$9$$.$PanelDrawer$.$_BORDER_ALPHA_DE_EMPHASIZED$ = 1;
  $dvt$$9$$.$PanelDrawer$.$_TAB_BACKGROUND_COLOR_INACTIVE$ = "#dee4e7";
  $dvt$$9$$.$PanelDrawer$.$_TAB_BORDER_COLOR_INACTIVE$ = "#c1cede";
  $dvt$$9$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ = 1.25;
  $dvt$$9$$.$PanelDrawer$.$_DEFAULT_SKIN$ = "alta";
  $dvt$$9$$.$PanelDrawer$.$IMAGE_SIZE$ = 24;
  $dvt$$9$$.$PanelDrawer$.$PANEL_LEGEND$ = "legend";
  $dvt$$9$$.$PanelDrawer$.$PANEL_PALETTE$ = "palette";
  $dvt$$9$$.$PanelDrawer$.$PANEL_SEARCH$ = "search";
  $dvt$$9$$.$PanelDrawer$.$PANEL_OVERVIEW$ = "overview";
  $dvt$$9$$.$PanelDrawer$.$PANEL_SEARCH_ICON_ENA$ = "searchEna";
  $dvt$$9$$.$PanelDrawer$.$PANEL_SEARCH_ICON_OVR$ = "searchOvr";
  $dvt$$9$$.$PanelDrawer$.$PANEL_SEARCH_ICON_DWN$ = "searchDwn";
  $dvt$$9$$.$PanelDrawer$.$PANEL_SEARCH_TIP$ = "searchTip";
  $dvt$$9$$.$PanelDrawer$.$PANEL_PALETTE_ICON_ENA$ = "paletteEna";
  $dvt$$9$$.$PanelDrawer$.$PANEL_PALETTE_ICON_OVR$ = "paletteOvr";
  $dvt$$9$$.$PanelDrawer$.$PANEL_PALETTE_ICON_DWN$ = "paletteDwn";
  $dvt$$9$$.$PanelDrawer$.$PANEL_PALETTE_TIP$ = "paletteTip";
  $dvt$$9$$.$PanelDrawer$.$PANEL_LEGEND_ICON_ENA$ = "legendEna";
  $dvt$$9$$.$PanelDrawer$.$PANEL_LEGEND_ICON_OVR$ = "legendOvr";
  $dvt$$9$$.$PanelDrawer$.$PANEL_LEGEND_ICON_DWN$ = "legendDwn";
  $dvt$$9$$.$PanelDrawer$.$PANEL_LEGEND_TIP$ = "legendTip";
  $dvt$$9$$.$PanelDrawer$.$PANEL_OVERVIEW_ICON_ENA$ = "overviewEna";
  $dvt$$9$$.$PanelDrawer$.$PANEL_OVERVIEW_ICON_OVR$ = "overviewOvr";
  $dvt$$9$$.$PanelDrawer$.$PANEL_OVERVIEW_ICON_DWN$ = "overviewDwn";
  $dvt$$9$$.$PanelDrawer$.$PANEL_OVERVIEW_TIP$ = "overviewTip";
  $dvt$$9$$.$PanelDrawer$.$BG_ALPHA$ = "backgroundAlpha";
  $dvt$$9$$.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$ = "tab-color-inactive";
  $dvt$$9$$.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$ = "tab-border-color-inactive";
  $dvt$$9$$.$PanelDrawer$.prototype.Init = function $$dvt$$9$$$$PanelDrawer$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    $dvt$$9$$.$PanelDrawer$.$superclass$.Init.call(this, $DvtTrainEvent$$, null, "panelDrawer" + $DvtBreadcrumbsPeer$$);
    this.$_sid$ = $DvtBreadcrumbsPeer$$;
    this.$_eventManager$ = new $DvtPanelDrawerEventManager$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerTab$$);
    this.$_eventManager$.$addListeners$(this);
    this.$_eventManager$.$addRolloverType$($dvt$$9$$.$PanelDrawer$);
    this.$_eventManager$.$associate$(this, this);
    $dvt$$9$$.$Agent$.$isTouchDevice$() || this.$_eventManager$.$setKeyboardHandler$(new $DvtPanelDrawerKeyboardHandler$$(this.$_eventManager$, this));
    this.$_callback$ = $DvtAccordionDefaults$$;
    this.$_callbackObj$ = $DvtPanelDrawerTab$$;
    this.$_panels$ = {};
    this.$_panelOrder$ = [];
    this.$_maxHeight$ = this.$_maxWidth$ = Number.MAX_VALUE;
    this.$_minWidth$ = 5;
    this.$_minHeight$ = 0;
    this.$_displayedPanelId$;
    this.$_oldDisplayedPanelId$;
    this.$_bTransition$ = this.$_bDisclosed$ = !1;
    this.$_contentPane$;
    this.$_activeContent$;
    this.$_expandedContent$;
    this.$_contentClipPath$;
    this.$_expandedBorder$;
    this.$_expandedBorderResizable$;
    this.$_tabs$ = {};
    this.$_discloseDirection$ = $dvt$$9$$.$PanelDrawer$.$DIR_LEFT$;
    this.$_dockSide$ = $dvt$$9$$.$PanelDrawer$.$DOCK_TOP$;
    this.$_isFixed$ = !1;
    this.$_styleMap$ = null;
    $DvtPanelDrawerTab$$ && (this.$_styleMap$ = $DvtPanelDrawerTab$$.$getSubcomponentStyles$());
    this.$_bgAlpha$ = $dvt$$9$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$9$$.$PanelDrawer$.$BG_ALPHA$, $dvt$$9$$.$PanelDrawer$.$_BACKGROUND_ALPHA$);
    this.$_borderColor$ = $dvt$$9$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$9$$.$CSSStyle$.$BORDER_COLOR$, $dvt$$9$$.$PanelDrawer$.$_BORDER_COLOR$);
    this.$_borderRadius$ = parseInt($dvt$$9$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$9$$.$CSSStyle$.$BORDER_RADIUS$, $dvt$$9$$.$PanelDrawer$.$_TAB_CORNER_RADIUS$));
    this.$_bgColor$ = $dvt$$9$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$9$$.$CSSStyle$.$BACKGROUND_COLOR$, $dvt$$9$$.$PanelDrawer$.$_BACKGROUND_COLOR$);
    this.$_bgInactiveColor$ = $dvt$$9$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$9$$.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, $dvt$$9$$.$PanelDrawer$.$_TAB_BACKGROUND_COLOR_INACTIVE$);
    this.$_borderInactiveColor$ = $dvt$$9$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$9$$.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$, $dvt$$9$$.$PanelDrawer$.$_TAB_BORDER_COLOR_INACTIVE$);
    this.$setPixelHinting$();
    this.$_contentPadding$ = $dvt$$9$$.$PanelDrawer$.$_CONTENT_PADDING$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$addPanel$ = function $$dvt$$9$$$$PanelDrawer$$$$addPanel$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    this.$_panels$[$DvtBreadcrumbsPeer$$] = {panel:$DvtTrainEvent$$, iconUp:$DvtAccordionDefaults$$, iconOver:$DvtPanelDrawerKeyboardHandler$$, iconDown:$DvtPanelDrawerEventManager$$, tooltip:$DvtPanelDrawerTab$$};
    this.$_panelOrder$.push($DvtBreadcrumbsPeer$$);
    this.$_minHeight$ = $dvt$$9$$.$PanelDrawer$.$_FIRST_TAB_SPACING$ + this.$_panelOrder$.length * ($dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ + $dvt$$9$$.$PanelDrawer$.$_INTER_TAB_SPACING$);
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$setFixed$ = function $$dvt$$9$$$$PanelDrawer$$$$setFixed$$($dvt$$9$$) {
    this.$_isFixed$ = $dvt$$9$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$setMaxWidth$ = function $$dvt$$9$$$$PanelDrawer$$$$setMaxWidth$$($dvt$$9$$) {
    this.$_maxWidth$ = $dvt$$9$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$setContentPadding$ = function $$dvt$$9$$$$PanelDrawer$$$$setContentPadding$$() {
    this.$_contentPadding$ = 0;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$getMaxContentWidth$ = function $$dvt$$9$$$$PanelDrawer$$$$getMaxContentWidth$$() {
    return this.$_maxWidth$ - 2 * this.$_contentPadding$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$setMaxHeight$ = function $$dvt$$9$$$$PanelDrawer$$$$setMaxHeight$$($dvt$$9$$) {
    this.$_maxHeight$ = $dvt$$9$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$getMaxContentHeight$ = function $$dvt$$9$$$$PanelDrawer$$$$getMaxContentHeight$$() {
    return this.$_maxHeight$ - 2 * this.$_contentPadding$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$setDiscloseDirection$ = function $$dvt$$9$$$$PanelDrawer$$$$setDiscloseDirection$$($dvt$$9$$) {
    this.$_discloseDirection$ = $dvt$$9$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$setDockSide$ = function $$dvt$$9$$$$PanelDrawer$$$$setDockSide$$($dvt$$9$$) {
    this.$_dockSide$ = $dvt$$9$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$GetPanel$ = function $$dvt$$9$$$$PanelDrawer$$$$GetPanel$$($dvt$$9$$) {
    return this.$_panels$[$dvt$$9$$].panel;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$GetIcon$ = function $$dvt$$9$$$$PanelDrawer$$$$GetIcon$$($dvt$$9$$) {
    return this.$_panels$[$dvt$$9$$].icon;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$GetTooltip$ = function $$dvt$$9$$$$PanelDrawer$$$$GetTooltip$$($dvt$$9$$) {
    return this.$_panels$[$dvt$$9$$].tooltip;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$GetTab$ = function $$dvt$$9$$$$PanelDrawer$$$$GetTab$$($dvt$$9$$) {
    return this.$_tabs$[$dvt$$9$$];
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$setDisplayedPanelId$ = function $$dvt$$9$$$$PanelDrawer$$$$setDisplayedPanelId$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$_oldDisplayedPanelId$ = this.$_displayedPanelId$;
    this.$_displayedPanelId$ = $dvt$$9$$;
    this.$isDisclosed$() && (this.$ChangeTabsState$(), this.$ChangePanels$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$));
    this.$_oldDisplayedPanelId$ = null;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$getDisplayedPanelId$ = function $$dvt$$9$$$$PanelDrawer$$$$getDisplayedPanelId$$() {
    var $dvt$$9$$ = this.$_displayedPanelId$;
    return !$dvt$$9$$ && 0 < this.$_panelOrder$.length ? this.$_panelOrder$[0] : $dvt$$9$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$setDisclosed$ = function $$dvt$$9$$$$PanelDrawer$$$$setDisclosed$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if (!this.$_bTransition$) {
      var $DvtPanelDrawerKeyboardHandler$$ = this.$_bDisclosed$;
      this.$_bDisclosed$ = $dvt$$9$$;
      $DvtPanelDrawerKeyboardHandler$$ != $dvt$$9$$ && (this.$_bTransition$ = !0, $dvt$$9$$ ? this.$DoExpand$($DvtTrainEvent$$, $DvtAccordionDefaults$$) : this.$DoCollapse$($DvtTrainEvent$$, $DvtAccordionDefaults$$));
    }
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$isDisclosed$ = function $$dvt$$9$$$$PanelDrawer$$$$isDisclosed$$() {
    return this.$_bDisclosed$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$renderComponent$ = function $$dvt$$9$$$$PanelDrawer$$$$renderComponent$$() {
    this.$_contentPane$ || (this.$_contentPane$ = new $dvt$$9$$.$Container$(this.$getCtx$(), "pd_contentPane"), this.$addChild$(this.$_contentPane$), this.$_activeContent$ = new $dvt$$9$$.$Container$(this.$getCtx$(), "pdcp_activeContent"), this.$_contentPane$.$addChild$(this.$_activeContent$));
    this.$RenderTabs$();
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$RenderTabs$ = function $$dvt$$9$$$$PanelDrawer$$$$RenderTabs$$() {
    if (!this.$_isFixed$) {
      var $DvtTrainEvent$$ = -$dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$;
      this.$_discloseDirection$ == $dvt$$9$$.$PanelDrawer$.$DIR_RIGHT$ && ($DvtTrainEvent$$ = 0);
      var $DvtAccordionDefaults$$ = $dvt$$9$$.$PanelDrawer$.$_FIRST_TAB_SPACING$;
      if (this.$_dockSide$ == $dvt$$9$$.$PanelDrawer$.$DOCK_TOP$) {
        for (var $DvtPanelDrawerKeyboardHandler$$ = 0;$DvtPanelDrawerKeyboardHandler$$ < this.$_panelOrder$.length;$DvtPanelDrawerKeyboardHandler$$++) {
          var $DvtPanelDrawerEventManager$$ = this.$_panelOrder$[$DvtPanelDrawerKeyboardHandler$$], $DvtPanelDrawerEventManager$$ = this.$RenderTab$($DvtPanelDrawerEventManager$$);
          $DvtPanelDrawerEventManager$$.$setTranslate$($DvtTrainEvent$$, $DvtAccordionDefaults$$);
          $DvtAccordionDefaults$$ += $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ + $dvt$$9$$.$PanelDrawer$.$_INTER_TAB_SPACING$;
        }
      } else {
        if (this.$_dockSide$ == $dvt$$9$$.$PanelDrawer$.$DOCK_BOTTOM$) {
          for ($DvtAccordionDefaults$$ = -$dvt$$9$$.$PanelDrawer$.$_FIRST_TAB_SPACING$ - $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$, $DvtPanelDrawerKeyboardHandler$$ = this.$_panelOrder$.length - 1;0 <= $DvtPanelDrawerKeyboardHandler$$;$DvtPanelDrawerKeyboardHandler$$--) {
            $DvtPanelDrawerEventManager$$ = this.$_panelOrder$[$DvtPanelDrawerKeyboardHandler$$], $DvtPanelDrawerEventManager$$ = this.$RenderTab$($DvtPanelDrawerEventManager$$), $DvtPanelDrawerEventManager$$.$setTranslate$($DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtAccordionDefaults$$ -= $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ + $dvt$$9$$.$PanelDrawer$.$_INTER_TAB_SPACING$;
          }
        }
      }
    }
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$GetTabPathCommands$ = function $$dvt$$9$$$$PanelDrawer$$$$GetTabPathCommands$$() {
    var $DvtTrainEvent$$;
    switch(this.$_discloseDirection$) {
      case $dvt$$9$$.$PanelDrawer$.$DIR_RIGHT$:
        $DvtTrainEvent$$ = ["M", 0, 0, "L", $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, 0, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 1, $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$, this.$_borderRadius$, "L", $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$, $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 1, $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$, "L", 0, $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$];
        break;
      default:
        $DvtTrainEvent$$ = ["M", $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$, 0, "L", this.$_borderRadius$, 0, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 0, 0, this.$_borderRadius$, "L", 0, $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 0, this.$_borderRadius$, $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$, "L", $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$, $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$];
    }
    return $DvtTrainEvent$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$RenderTab$ = function $$dvt$$9$$$$PanelDrawer$$$$RenderTab$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$GetTabPathCommands$(), $DvtPanelDrawerKeyboardHandler$$ = new $DvtPanelDrawerTab$$(this.$getCtx$(), $DvtAccordionDefaults$$, $DvtTrainEvent$$, this);
    $DvtPanelDrawerKeyboardHandler$$.$setPixelHinting$();
    $DvtPanelDrawerKeyboardHandler$$.setCursor("pointer");
    this.$_contentPane$.$addChildAt$($DvtPanelDrawerKeyboardHandler$$, 0);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidStroke$(this.$_borderInactiveColor$, $dvt$$9$$.$PanelDrawer$.$_BORDER_ALPHA$, 1);
    var $DvtPanelDrawerEventManager$$ = this.$_panels$[$DvtTrainEvent$$], $DvtBreadcrumbsPeer$$ = new $dvt$$9$$.$Path$(this.$getCtx$(), $DvtAccordionDefaults$$);
    $DvtBreadcrumbsPeer$$.$setInvisibleFill$();
    $DvtPanelDrawerEventManager$$.iconUp.$setTranslate$(.5 * ($dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$9$$.$PanelDrawer$.$IMAGE_SIZE$), .5 * ($dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$9$$.$PanelDrawer$.$IMAGE_SIZE$));
    $DvtBreadcrumbsPeer$$.$addChild$($DvtPanelDrawerEventManager$$.iconUp);
    var $DvtBreadcrumbsEventManager$$ = new $dvt$$9$$.$Path$(this.$getCtx$(), $DvtAccordionDefaults$$);
    $DvtBreadcrumbsEventManager$$.$setInvisibleFill$();
    $DvtPanelDrawerEventManager$$.iconOver.$setTranslate$(.5 * ($dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$9$$.$PanelDrawer$.$IMAGE_SIZE$), .5 * ($dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$9$$.$PanelDrawer$.$IMAGE_SIZE$));
    $DvtBreadcrumbsEventManager$$.$addChild$($DvtPanelDrawerEventManager$$.iconOver);
    $DvtAccordionDefaults$$ = new $dvt$$9$$.$Path$(this.$getCtx$(), $DvtAccordionDefaults$$);
    $DvtAccordionDefaults$$.$setInvisibleFill$();
    $DvtPanelDrawerEventManager$$.iconDown.$setTranslate$(.5 * ($dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$9$$.$PanelDrawer$.$IMAGE_SIZE$), .5 * ($dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$9$$.$PanelDrawer$.$IMAGE_SIZE$));
    $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$.iconDown);
    $DvtBreadcrumbsPeer$$ = new $dvt$$9$$.$Button$(this.$getCtx$(), $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtAccordionDefaults$$);
    $DvtBreadcrumbsPeer$$.$setToggleEnabled$();
    $DvtPanelDrawerEventManager$$.icon = $DvtBreadcrumbsPeer$$;
    $DvtPanelDrawerKeyboardHandler$$.$addChild$($DvtBreadcrumbsPeer$$);
    this.$_tabs$[$DvtTrainEvent$$] = $DvtPanelDrawerKeyboardHandler$$;
    var $DvtBreadcrumbsDefaults$$ = this;
    this.$_eventManager$.$associate$($DvtPanelDrawerKeyboardHandler$$, {$HandleClick$:function() {
      $DvtBreadcrumbsDefaults$$.$HandleTabClick$($DvtTrainEvent$$);
    }, $getTooltip$:function() {
      return $DvtBreadcrumbsDefaults$$.$GetTooltip$($DvtTrainEvent$$);
    }});
    $DvtPanelDrawerKeyboardHandler$$.$addAccessibilityAttributes$();
    return $DvtPanelDrawerKeyboardHandler$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$HandleTabClick$ = function $$dvt$$9$$$$PanelDrawer$$$$HandleTabClick$$($DvtTrainEvent$$) {
    function $DvtAccordionDefaults$$() {
      var $dvt$$9$$ = $DvtPanelDrawerEventManager$$.$getCtx$().$getTooltipManager$();
      $dvt$$9$$ && $dvt$$9$$.$hideTooltip$();
    }
    this.$_oldDisplayedPanelId$ = this.$getDisplayedPanelId$();
    this.$_displayedPanelId$ = $DvtTrainEvent$$;
    var $DvtPanelDrawerKeyboardHandler$$ = this.$GetTab$($DvtTrainEvent$$).$isShowingKeyboardFocusEffect$(), $DvtPanelDrawerEventManager$$ = this;
    this.$isDisclosed$() ? this.$_oldDisplayedPanelId$ == $DvtTrainEvent$$ ? this.$setDisclosed$(!1, !1, $DvtAccordionDefaults$$) : (this.$ChangeTabsState$(), this.$ChangePanels$($DvtTrainEvent$$, !1)) : (this.$setDisclosed$(!0, !1, $DvtAccordionDefaults$$), this.$ApplyAlphasRollover$());
    this.$_oldDisplayedPanelId$ = null;
    this.$FireListener$(new $dvt$$9$$.$PanelDrawerEvent$(this.$isDisclosed$() ? $dvt$$9$$.$PanelDrawerEvent$.$SUBTYPE_SHOW$ : $dvt$$9$$.$PanelDrawerEvent$.$SUBTYPE_HIDE$, this.$_displayedPanelId$));
    $DvtPanelDrawerKeyboardHandler$$ && this.$getCtx$().$setCurrentKeyboardFocus$(this);
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$ChangePanels$ = function $$dvt$$9$$$$PanelDrawer$$$$ChangePanels$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = null;
    $DvtAccordionDefaults$$ || ($DvtPanelDrawerEventManager$$ = new $dvt$$9$$.$Animator$(this.$getCtx$(), $dvt$$9$$.$PanelDrawer$.$_ANIM_DURATION$));
    this.$_oldDisplayedPanelId$ && ($DvtAccordionDefaults$$ = this.$GetPanel$(this.$_oldDisplayedPanelId$)) && this.$_expandedContentPanel$.removeChild($DvtAccordionDefaults$$);
    this.$DisplayPanel$($DvtTrainEvent$$, $DvtPanelDrawerEventManager$$);
    $DvtPanelDrawerEventManager$$ ? (this.$ApplyAlphasRollover$(), $DvtPanelDrawerKeyboardHandler$$ && $dvt$$9$$.$Playable$.$appendOnEnd$($DvtPanelDrawerEventManager$$, $DvtPanelDrawerKeyboardHandler$$), $DvtPanelDrawerEventManager$$.play()) : $DvtPanelDrawerKeyboardHandler$$ && $DvtPanelDrawerKeyboardHandler$$();
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$DoExpand$ = function $$dvt$$9$$$$PanelDrawer$$$$DoExpand$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$DisplayPanel$(this.$getDisplayedPanelId$());
    var $DvtPanelDrawerKeyboardHandler$$ = -(1 / $dvt$$9$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ * this.$_expandedContent$.getWidth());
    this.$_discloseDirection$ == $dvt$$9$$.$PanelDrawer$.$DIR_RIGHT$ && ($DvtPanelDrawerKeyboardHandler$$ = -$DvtPanelDrawerKeyboardHandler$$, this.$_expandedContent$.$setX$((1 / $dvt$$9$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ - 1) * this.$_expandedContent$.getWidth()));
    if ($DvtTrainEvent$$) {
      this.$_contentPane$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$), $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$(), this.$_bTransition$ = !1;
    } else {
      var $DvtPanelDrawerEventManager$$ = new $dvt$$9$$.$Animator$(this.$getCtx$(), $dvt$$9$$.$PanelDrawer$.$_ANIM_DURATION$);
      $DvtPanelDrawerEventManager$$.$setEasing$($dvt$$9$$.$Easing$.$backOut$);
      $DvtPanelDrawerEventManager$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, $DvtPanelDrawerKeyboardHandler$$);
      $DvtAccordionDefaults$$ && $dvt$$9$$.$Playable$.$appendOnEnd$($DvtPanelDrawerEventManager$$, $DvtAccordionDefaults$$);
      if ($DvtPanelDrawerEventManager$$) {
        var $DvtPanelDrawerTab$$ = this;
        $dvt$$9$$.$Playable$.$appendOnEnd$($DvtPanelDrawerEventManager$$, function() {
          $DvtPanelDrawerTab$$.$_bTransition$ = !1;
        });
        $DvtPanelDrawerEventManager$$.play();
      }
    }
    this.$ChangeTabsState$();
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$DoCollapse$ = function $$dvt$$9$$$$PanelDrawer$$$$DoCollapse$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if ($DvtTrainEvent$$) {
      this.$_contentPane$.$setTranslateX$(0), this.$RemoveExpandedContent$(), $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$(), this.$ChangeTabsState$(), this.$_bTransition$ = !1;
    } else {
      var $DvtPanelDrawerKeyboardHandler$$ = new $dvt$$9$$.$Animator$(this.$getCtx$(), $dvt$$9$$.$PanelDrawer$.$_ANIM_DURATION$);
      $DvtPanelDrawerKeyboardHandler$$.$setEasing$($dvt$$9$$.$Easing$.$backIn$);
      $DvtPanelDrawerKeyboardHandler$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, 0);
      $dvt$$9$$.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, this.$RemoveExpandedContent$, this);
      $dvt$$9$$.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, this.$ChangeTabsState$, this);
      $DvtAccordionDefaults$$ && $dvt$$9$$.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, $DvtAccordionDefaults$$);
      var $DvtPanelDrawerEventManager$$ = this;
      $dvt$$9$$.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, function() {
        $DvtPanelDrawerEventManager$$.$_bTransition$ = !1;
      });
      $DvtPanelDrawerKeyboardHandler$$.play();
    }
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$RemoveExpandedContent$ = function $$dvt$$9$$$$PanelDrawer$$$$RemoveExpandedContent$$() {
    this.$_expandedContent$ && (this.$_contentClipPath$ = null, this.$_expandedContentPanel$.$removeChildren$(), this.$_activeContent$.$removeAllDrawEffects$(), this.$_expandedContent$.$destroy$(), this.$_activeContent$.removeChild(this.$_expandedContent$), this.$_expandedBorderResizable$ = this.$_expandedBorder$ = this.$_expandedContentPanel$ = this.$_expandedContent$ = null);
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$DisplayPanel$ = function $$dvt$$9$$$$PanelDrawer$$$$DisplayPanel$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$_expandedContent$ || (this.$_expandedContent$ = new $dvt$$9$$.Rect(this.$getCtx$(), 0, 0, 1, 1, "pdcp_expandedContent"), this.$_activeContent$.$addChild$(this.$_expandedContent$), this.$_expandedContent$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), this.$_expandedContentPanel$ = new $dvt$$9$$.$Container$(this.$_context$), this.$_expandedContent$.$addChild$(this.$_expandedContentPanel$), this.$_expandedContentPanel$.$setTranslate$(this.$_contentPadding$, this.$_contentPadding$));
    var $DvtPanelDrawerKeyboardHandler$$ = this.$GetPanel$($DvtTrainEvent$$);
    if ($DvtPanelDrawerKeyboardHandler$$) {
      this.$_expandedContentPanel$.$addChild$($DvtPanelDrawerKeyboardHandler$$);
      if (this.$_oldDisplayedPanelId$) {
        var $DvtPanelDrawerEventManager$$ = this.$GetPanel$(this.$_oldDisplayedPanelId$);
        $DvtPanelDrawerEventManager$$ && $DvtPanelDrawerEventManager$$.$removeEvtListener$($dvt$$9$$.$ResizeEvent$.$RESIZE_EVENT$, this.$HandlePanelResize$, !1, this);
      }
      $DvtPanelDrawerKeyboardHandler$$.$addEvtListener$($dvt$$9$$.$ResizeEvent$.$RESIZE_EVENT$, this.$HandlePanelResize$, !1, this);
    }
    this.$_expandedBorder$ || (this.$_expandedBorder$ = new $dvt$$9$$.$Path$(this.$getCtx$(), ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorder"), this.$_expandedBorderResizable$ = new $dvt$$9$$.$Path$(this.$getCtx$(), ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorderResizable"), this.$_expandedContent$.$addChild$(this.$_expandedBorder$), this.$_expandedContent$.$addChild$(this.$_expandedBorderResizable$), this.$_expandedBorder$.$setSolidStroke$(this.$_borderColor$, $dvt$$9$$.$PanelDrawer$.$_BORDER_ALPHA$), 
    this.$_expandedBorder$.$setFill$(null), this.$_expandedBorderResizable$.$setSolidStroke$(this.$_borderColor$, $dvt$$9$$.$PanelDrawer$.$_BORDER_ALPHA$), this.$_expandedBorderResizable$.$setFill$(null), this.$_expandedBorder$.$setPixelHinting$(), this.$_expandedBorderResizable$.$setPixelHinting$());
    this.$RefreshExpandedSize$($DvtTrainEvent$$, $DvtAccordionDefaults$$);
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$HandlePanelResize$ = function $$dvt$$9$$$$PanelDrawer$$$$HandlePanelResize$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = new $dvt$$9$$.$Animator$(this.$getCtx$(), $dvt$$9$$.$PanelDrawer$.$_ANIM_DURATION$), $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.getWidth(), $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.getHeight(), $DvtPanelDrawerKeyboardHandler$$ = this.$GetExpandedContentWidth$($DvtPanelDrawerKeyboardHandler$$), $DvtPanelDrawerEventManager$$ = this.$GetExpandedContentHeight$($DvtPanelDrawerEventManager$$), $DvtPanelDrawerTab$$ = $DvtTrainEvent$$.$getX$() ? $DvtTrainEvent$$.$getX$() : 
    0;
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getY$() ? $DvtTrainEvent$$.$getY$() : 0;
    this.$_refreshPanelSize$(this.$getDisplayedPanelId$(), $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtTrainEvent$$);
    $DvtAccordionDefaults$$.play();
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$RefreshExpandedSize$ = function $$dvt$$9$$$$PanelDrawer$$$$RefreshExpandedSize$$($dvt$$9$$, $DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$GetPanel$($dvt$$9$$), $DvtPanelDrawerKeyboardHandler$$ = 2 * this.$_contentPadding$, $DvtPanelDrawerEventManager$$ = 2 * this.$_contentPadding$, $DvtPanelDrawerTab$$ = 0, $DvtBreadcrumbsPeer$$ = 0;
    $DvtAccordionDefaults$$ && ($DvtAccordionDefaults$$ = $DvtAccordionDefaults$$.$getContentDimensions$ ? $DvtAccordionDefaults$$.$getContentDimensions$() : $DvtAccordionDefaults$$.$getDimensionsWithStroke$(), $DvtPanelDrawerKeyboardHandler$$ = this.$GetExpandedContentWidth$($DvtAccordionDefaults$$.$w$), $DvtPanelDrawerEventManager$$ = this.$GetExpandedContentHeight$($DvtAccordionDefaults$$.$h$), $DvtPanelDrawerTab$$ = $DvtAccordionDefaults$$.x, $DvtBreadcrumbsPeer$$ = $DvtAccordionDefaults$$.y);
    this.$_refreshPanelSize$($dvt$$9$$, $DvtTrainEvent$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$);
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$_refreshPanelSize$ = function $$dvt$$9$$$$PanelDrawer$$$$_refreshPanelSize$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    var $DvtBreadcrumbsEventManager$$ = this.$GetPanel$($DvtTrainEvent$$);
    $DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsEventManager$$.$getTranslateX$, $DvtBreadcrumbsEventManager$$.$setTranslateX$, -$DvtPanelDrawerTab$$) : $DvtBreadcrumbsEventManager$$.$setTranslateX$(-$DvtPanelDrawerTab$$);
    $DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsEventManager$$.$getTranslateY$, $DvtBreadcrumbsEventManager$$.$setTranslateY$, -$DvtBreadcrumbsPeer$$) : $DvtBreadcrumbsEventManager$$.$setTranslateY$(-$DvtBreadcrumbsPeer$$);
    $DvtPanelDrawerTab$$ = new $dvt$$9$$.$Rectangle$(this.$_contentPadding$, this.$_contentPadding$, $DvtPanelDrawerKeyboardHandler$$ - 2 * this.$_contentPadding$, $DvtPanelDrawerEventManager$$ - 2 * this.$_contentPadding$);
    $DvtBreadcrumbsPeer$$ = $dvt$$9$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ * $DvtPanelDrawerKeyboardHandler$$;
    $DvtAccordionDefaults$$ ? ($DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_expandedContent$, this.$_expandedContent$.getWidth, this.$_expandedContent$.$setWidth$, $DvtBreadcrumbsPeer$$), $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_expandedContent$, this.$_expandedContent$.getHeight, this.$_expandedContent$.$setHeight$, $DvtPanelDrawerEventManager$$), $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_RECTANGLE$, this, this.$_getContentClipPath$, 
    this.$_setContentClipPath$, $DvtPanelDrawerTab$$), this.$_discloseDirection$ == $dvt$$9$$.$PanelDrawer$.$DIR_LEFT$ ? $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, -$DvtPanelDrawerKeyboardHandler$$) : this.$_discloseDirection$ == $dvt$$9$$.$PanelDrawer$.$DIR_RIGHT$ && ($DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, 
    this.$_contentPane$.$setTranslateX$, $DvtPanelDrawerKeyboardHandler$$), $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_expandedBorder$, this.$_expandedBorder$.$getTranslateX$, this.$_expandedBorder$.$setTranslateX$, $DvtPanelDrawerKeyboardHandler$$), $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_expandedBorderResizable$, this.$_expandedBorderResizable$.$getTranslateX$, this.$_expandedBorderResizable$.$setTranslateX$, $DvtPanelDrawerKeyboardHandler$$), 
    $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_expandedContent$, this.$_expandedContent$.$getTranslateX$, this.$_expandedContent$.$setTranslateX$, -$DvtPanelDrawerKeyboardHandler$$)), this.$_dockSide$ == $dvt$$9$$.$PanelDrawer$.$DOCK_BOTTOM$ && ($DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_expandedBorder$, this.$_expandedBorder$.$getTranslateY$, this.$_expandedBorder$.$setTranslateY$, $DvtPanelDrawerEventManager$$), $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, 
    this.$_expandedBorderResizable$, this.$_expandedBorderResizable$.$getTranslateY$, this.$_expandedBorderResizable$.$setTranslateY$, $DvtPanelDrawerEventManager$$), $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_expandedContent$, this.$_expandedContent$.$getTranslateY$, this.$_expandedContent$.$setTranslateY$, -$DvtPanelDrawerEventManager$$))) : (this.$_expandedContent$.$setWidth$($DvtBreadcrumbsPeer$$), this.$_expandedContent$.$setHeight$($DvtPanelDrawerEventManager$$), 
    this.$_discloseDirection$ == $dvt$$9$$.$PanelDrawer$.$DIR_RIGHT$ && (this.$_expandedContent$.$setTranslateX$(-$DvtPanelDrawerKeyboardHandler$$), this.$_expandedBorder$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$), this.$_expandedBorderResizable$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$)), this.$_dockSide$ == $dvt$$9$$.$PanelDrawer$.$DOCK_BOTTOM$ && (this.$_expandedContent$.$setTranslateY$(-$DvtPanelDrawerEventManager$$), this.$_expandedBorder$.$setTranslateY$($DvtPanelDrawerEventManager$$), 
    this.$_expandedBorderResizable$.$setTranslateY$($DvtPanelDrawerEventManager$$)), this.$_setContentClipPath$($DvtPanelDrawerTab$$));
    $DvtPanelDrawerTab$$ = this.$GetTab$($DvtTrainEvent$$);
    var $DvtBreadcrumbsDefaults$$;
    $DvtTrainEvent$$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_discloseDirection$ == $dvt$$9$$.$PanelDrawer$.$DIR_RIGHT$ && ($DvtTrainEvent$$ = -$DvtPanelDrawerKeyboardHandler$$);
    this.$_dockSide$ == $dvt$$9$$.$PanelDrawer$.$DOCK_TOP$ ? $DvtPanelDrawerTab$$ ? ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, $DvtPanelDrawerTab$$.$getTranslateY$(), "M", 0, $DvtPanelDrawerTab$$.$getTranslateY$() + $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$], $DvtPanelDrawerKeyboardHandler$$ = this.$GetTab$(this.$_panelOrder$[this.$_panelOrder$.length - 1]), $DvtBreadcrumbsDefaults$$.push("L", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$() + $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$), this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$), 
    $DvtTrainEvent$$ *= $dvt$$9$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$, $DvtBreadcrumbsDefaults$$ = ["M", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$() + $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$, "L", 0, $DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, $DvtPanelDrawerEventManager$$]) : ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, $DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, $DvtPanelDrawerEventManager$$], this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$)) : this.$_dockSide$ == 
    $dvt$$9$$.$PanelDrawer$.$DOCK_BOTTOM$ && ($DvtPanelDrawerTab$$ ? ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, $DvtPanelDrawerTab$$.$getTranslateY$() + $dvt$$9$$.$PanelDrawer$.$_TAB_SIZE$, "M", 0, $DvtPanelDrawerTab$$.$getTranslateY$()], $DvtPanelDrawerKeyboardHandler$$ = this.$GetTab$(this.$_panelOrder$[0]), $DvtBreadcrumbsDefaults$$.push("L", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$()), this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$), $DvtTrainEvent$$ *= $dvt$$9$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$, 
    $DvtBreadcrumbsDefaults$$ = ["M", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$(), "L", 0, -$DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, -$DvtPanelDrawerEventManager$$]) : ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, -$DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, -$DvtPanelDrawerEventManager$$], this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$)));
    $DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_PATH$, this.$_expandedBorderResizable$, this.$_expandedBorderResizable$.$getCommands$, this.$_expandedBorderResizable$.$setCommands$, $DvtBreadcrumbsDefaults$$) : this.$_expandedBorderResizable$.$setCommands$($DvtBreadcrumbsDefaults$$);
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$_setContentClipPath$ = function $$dvt$$9$$$$PanelDrawer$$$$_setContentClipPath$$($DvtTrainEvent$$) {
    if (this.$_expandedContentPanel$ && $DvtTrainEvent$$) {
      var $DvtAccordionDefaults$$ = new $dvt$$9$$.$ClipPath$("pdcp" + this.$_sid$);
      $DvtAccordionDefaults$$.$addRect$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtTrainEvent$$.$w$, $DvtTrainEvent$$.$h$);
      this.$_expandedContentPanel$.$setClipPath$($DvtAccordionDefaults$$);
    }
    this.$_contentClipPath$ = $DvtTrainEvent$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$_getContentClipPath$ = function $$dvt$$9$$$$PanelDrawer$$$$_getContentClipPath$$() {
    return this.$_contentClipPath$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$GetExpandedContentWidth$ = function $$dvt$$9$$$$PanelDrawer$$$$GetExpandedContentWidth$$($dvt$$9$$) {
    $dvt$$9$$ += 2 * this.$_contentPadding$;
    (this.$_minWidth$ || 0 == this.$_minWidth$) && $dvt$$9$$ < this.$_minWidth$ && ($dvt$$9$$ = this.$_minWidth$);
    this.$_maxWidth$ && $dvt$$9$$ > this.$_maxWidth$ && ($dvt$$9$$ = this.$_maxWidth$);
    return $dvt$$9$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$GetExpandedContentHeight$ = function $$dvt$$9$$$$PanelDrawer$$$$GetExpandedContentHeight$$($dvt$$9$$) {
    $dvt$$9$$ += 2 * this.$_contentPadding$;
    (this.$_minHeight$ || 0 == this.$_minHeight$) && $dvt$$9$$ < this.$_minHeight$ && ($dvt$$9$$ = this.$_minHeight$);
    this.$_maxHeight$ && $dvt$$9$$ > this.$_maxHeight$ && ($dvt$$9$$ = this.$_maxHeight$);
    return $dvt$$9$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$ApplyFillAlpha$ = function $$dvt$$9$$$$PanelDrawer$$$$ApplyFillAlpha$$($dvt$$9$$) {
    if (this.$_expandedContent$) {
      var $DvtTrainEvent$$ = this.$_expandedContent$.$getFill$().clone();
      $DvtTrainEvent$$.$setAlpha$($dvt$$9$$);
      this.$_expandedContent$.$setFill$($DvtTrainEvent$$);
    }
    for (var $DvtAccordionDefaults$$ in this.$_tabs$) {
      var $DvtPanelDrawerKeyboardHandler$$ = this.$_tabs$[$DvtAccordionDefaults$$];
      $DvtPanelDrawerKeyboardHandler$$ && ($DvtTrainEvent$$ = $DvtPanelDrawerKeyboardHandler$$.$getFill$().clone(), $DvtTrainEvent$$.$setAlpha$($dvt$$9$$), $DvtPanelDrawerKeyboardHandler$$.$setFill$($DvtTrainEvent$$));
    }
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$ApplyStrokeAlpha$ = function $$dvt$$9$$$$PanelDrawer$$$$ApplyStrokeAlpha$$($dvt$$9$$) {
    if (this.$_expandedBorder$) {
      var $DvtTrainEvent$$ = this.$_expandedBorder$.$getStroke$().clone();
      $DvtTrainEvent$$.$setAlpha$($dvt$$9$$);
      this.$_expandedBorder$.$setStroke$($DvtTrainEvent$$);
    }
    this.$_expandedBorderResizable$ && ($DvtTrainEvent$$ = this.$_expandedBorderResizable$.$getStroke$().clone(), $DvtTrainEvent$$.$setAlpha$($dvt$$9$$), this.$_expandedBorderResizable$.$setStroke$($DvtTrainEvent$$));
    for (var $DvtAccordionDefaults$$ in this.$_tabs$) {
      var $DvtPanelDrawerKeyboardHandler$$ = this.$_tabs$[$DvtAccordionDefaults$$];
      $DvtPanelDrawerKeyboardHandler$$ && ($DvtTrainEvent$$ = $DvtPanelDrawerKeyboardHandler$$.$getStroke$().clone(), $DvtTrainEvent$$.$setAlpha$($dvt$$9$$), $DvtPanelDrawerKeyboardHandler$$.$setStroke$($DvtTrainEvent$$));
    }
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$deEmphasizeStart$ = function $$dvt$$9$$$$PanelDrawer$$$$deEmphasizeStart$$() {
    this.$setMouseEnabled$(!1);
    this.$ApplyFillAlpha$($dvt$$9$$.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$);
    this.$ApplyStrokeAlpha$($dvt$$9$$.$PanelDrawer$.$_BORDER_ALPHA_DE_EMPHASIZED$);
    this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$($dvt$$9$$.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$);
    for (var $DvtTrainEvent$$ in this.$_tabs$) {
      var $DvtAccordionDefaults$$ = this.$GetIcon$($DvtTrainEvent$$);
      $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$.$setAlpha$($dvt$$9$$.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$);
    }
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$deEmphasizeEnd$ = function $$dvt$$9$$$$PanelDrawer$$$$deEmphasizeEnd$$() {
    this.$setMouseEnabled$(!0);
    this.$ApplyFillAlpha$(this.$_bgAlpha$);
    this.$ApplyStrokeAlpha$($dvt$$9$$.$PanelDrawer$.$_BORDER_ALPHA$);
    this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
    for (var $DvtTrainEvent$$ in this.$_tabs$) {
      var $DvtAccordionDefaults$$ = this.$GetIcon$($DvtTrainEvent$$);
      $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$.$setAlpha$(1);
    }
    this.$HandleRollOut$(null);
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$HandleRollOver$ = function $$dvt$$9$$$$PanelDrawer$$$$HandleRollOver$$() {
    this.$ApplyAlphasRollover$();
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$HandleRollOut$ = function $$dvt$$9$$$$PanelDrawer$$$$HandleRollOut$$() {
    this.$_bFocus$ || this.$ApplyAlphasRollout$();
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$ApplyAlphasRollover$ = function $$dvt$$9$$$$PanelDrawer$$$$ApplyAlphasRollover$$() {
    this.$ApplyFillAlpha$($dvt$$9$$.$PanelDrawer$.$_BACKGROUND_ALPHA_ROLLOVER$);
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$ApplyAlphasRollout$ = function $$dvt$$9$$$$PanelDrawer$$$$ApplyAlphasRollout$$() {
    this.$ApplyFillAlpha$(this.$_bgAlpha$);
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$ChangeTabsState$ = function $$dvt$$9$$$$PanelDrawer$$$$ChangeTabsState$$() {
    for (var $DvtTrainEvent$$ in this.$_tabs$) {
      var $DvtAccordionDefaults$$ = this.$_tabs$[$DvtTrainEvent$$];
      $DvtAccordionDefaults$$ && ($DvtTrainEvent$$ == this.$getDisplayedPanelId$() && this.$isDisclosed$() ? ($DvtAccordionDefaults$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), $DvtAccordionDefaults$$.$setSolidStroke$(this.$_borderColor$, $dvt$$9$$.$PanelDrawer$.$_BORDER_ALPHA$), $DvtAccordionDefaults$$.$setDisclosed$(!0)) : ($DvtAccordionDefaults$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$), $DvtAccordionDefaults$$.$setSolidStroke$(this.$_borderInactiveColor$, $dvt$$9$$.$PanelDrawer$.$_BORDER_ALPHA$), 
      $DvtAccordionDefaults$$.$setDisclosed$(!1)));
      var $DvtPanelDrawerKeyboardHandler$$ = this.$isDisclosed$() && $DvtTrainEvent$$ == this.$getDisplayedPanelId$(), $DvtPanelDrawerEventManager$$ = this.$GetIcon$($DvtTrainEvent$$);
      $DvtPanelDrawerEventManager$$ && $DvtPanelDrawerEventManager$$.$setToggled$($DvtPanelDrawerKeyboardHandler$$);
      $DvtPanelDrawerKeyboardHandler$$ ? this.$_activeContent$.$addChild$($DvtAccordionDefaults$$) : this.$_contentPane$.$addChildAt$($DvtAccordionDefaults$$, 0);
    }
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$setMaxContainerHeight$ = function $$dvt$$9$$$$PanelDrawer$$$$setMaxContainerHeight$$($dvt$$9$$) {
    if (!this.$_maxContainerHeight$ || this.$_maxContainerHeight$ < $dvt$$9$$) {
      this.$_maxContainerHeight$ = $dvt$$9$$;
    }
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$getMaxContainerHeight$ = function $$dvt$$9$$$$PanelDrawer$$$$getMaxContainerHeight$$() {
    return this.$GetExpandedContentHeight$(this.$_maxContainerHeight$);
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$getDimensions$ = function $$dvt$$9$$$$PanelDrawer$$$$getDimensions$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ = $dvt$$9$$.$PanelDrawer$.$superclass$.$getDimensions$.call(this, $DvtTrainEvent$$);
    $DvtTrainEvent$$.$w$ /= $dvt$$9$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$;
    return $DvtTrainEvent$$;
  };
  $dvt$$9$$.$PanelDrawer$.prototype.$getEventManager$ = function $$dvt$$9$$$$PanelDrawer$$$$getEventManager$$() {
    return this.$_eventManager$;
  };
  $dvt$$9$$.$Obj$.$createSubclass$($DvtPanelDrawerTab$$, $dvt$$9$$.$Path$);
  $DvtPanelDrawerTab$$.prototype.Init = function $$DvtPanelDrawerTab$$$$Init$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    $DvtPanelDrawerTab$$.$superclass$.Init.call(this, $dvt$$9$$, $DvtTrainEvent$$);
    this.$_panelDrawer$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_isDisclosed$ = !1;
    this.$_panelId$ = $DvtAccordionDefaults$$;
  };
  $DvtPanelDrawerTab$$.prototype.$HandleKeyboardEvent$ = function $$DvtPanelDrawerTab$$$$$HandleKeyboardEvent$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.keyCode;
    if ($DvtAccordionDefaults$$ == $dvt$$9$$.KeyboardEvent.$ENTER$ || $DvtAccordionDefaults$$ == $dvt$$9$$.KeyboardEvent.$SPACE$) {
      var $DvtAccordionDefaults$$ = this.$_panelDrawer$.$getEventManager$(), $DvtPanelDrawerKeyboardHandler$$ = this.$localToStage$(new $dvt$$9$$.$Point$(0, 0));
      $DvtTrainEvent$$ = $dvt$$9$$.$DomEventFactory$.$generateMouseEventFromKeyboardEvent$($DvtTrainEvent$$, this.$_context$, $dvt$$9$$.MouseEvent.$CLICK$, $DvtPanelDrawerKeyboardHandler$$.x, $DvtPanelDrawerKeyboardHandler$$.y);
      $DvtTrainEvent$$.target = this;
      $DvtAccordionDefaults$$.$PreOnClick$($DvtTrainEvent$$);
    }
  };
  $DvtPanelDrawerTab$$.prototype.$isDisclosed$ = function $$DvtPanelDrawerTab$$$$$isDisclosed$$() {
    return this.$_isDisclosed$;
  };
  $DvtPanelDrawerTab$$.prototype.$setDisclosed$ = function $$DvtPanelDrawerTab$$$$$setDisclosed$$($dvt$$9$$) {
    this.$_isDisclosed$ != $dvt$$9$$ ? (this.$_isDisclosed$ = $dvt$$9$$, this.$updateAccessibilityAttributes$()) : this.$_isDisclosed$ = $dvt$$9$$;
  };
  $DvtPanelDrawerTab$$.prototype.$getAriaLabel$ = function $$DvtPanelDrawerTab$$$$$getAriaLabel$$() {
    var $DvtTrainEvent$$ = [];
    $DvtTrainEvent$$.push(this.$isDisclosed$() ? $dvt$$9$$.$Bundle$.$getTranslatedString$($dvt$$9$$.$Bundle$.$UTIL_PREFIX$, "STATE_EXPANDED") : $dvt$$9$$.$Bundle$.$getTranslatedString$($dvt$$9$$.$Bundle$.$UTIL_PREFIX$, "STATE_COLLAPSED"));
    return $dvt$$9$$.$Displayable$.$generateAriaLabel$(this.$_panelDrawer$.$GetTooltip$(this.$_panelId$), $DvtTrainEvent$$);
  };
  $DvtPanelDrawerTab$$.prototype.$addAccessibilityAttributes$ = function $$DvtPanelDrawerTab$$$$$addAccessibilityAttributes$$() {
    this.$setAriaRole$("button");
    $dvt$$9$$.$Agent$.$deferAriaCreation$() || this.$setAriaProperty$("label", this.$getAriaLabel$());
  };
  $DvtPanelDrawerTab$$.prototype.$updateAccessibilityAttributes$ = function $$DvtPanelDrawerTab$$$$$updateAccessibilityAttributes$$() {
    $dvt$$9$$.$Agent$.$deferAriaCreation$() || this.$setAriaProperty$("label", this.$getAriaLabel$());
  };
  $DvtPanelDrawerTab$$.prototype.$getKeyboardBoundingBox$ = function $$DvtPanelDrawerTab$$$$$getKeyboardBoundingBox$$($dvt$$9$$) {
    return this.$getDimensions$($dvt$$9$$);
  };
  $DvtPanelDrawerTab$$.prototype.$getTargetElem$ = function $$DvtPanelDrawerTab$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtPanelDrawerTab$$.prototype.$showKeyboardFocusEffect$ = function $$DvtPanelDrawerTab$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$();
    this.$_keyboardFocusEffect$.show();
    this.$_context$.$setActiveElement$(this);
  };
  $DvtPanelDrawerTab$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtPanelDrawerTab$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$();
    this.$_keyboardFocusEffect$.$hide$();
  };
  $DvtPanelDrawerTab$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtPanelDrawerTab$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtPanelDrawerTab$$.prototype.$getNextNavigable$ = function $$DvtPanelDrawerTab$$$$$getNextNavigable$$($dvt$$9$$) {
    return this.$_panelDrawer$.$getEventManager$().$KeyboardHandler$.$getNextNavigable$(this, $dvt$$9$$);
  };
  $DvtPanelDrawerTab$$.prototype.$_createKeyboardFocusEffect$ = function $$DvtPanelDrawerTab$$$$$_createKeyboardFocusEffect$$() {
    var $DvtTrainEvent$$ = this.$getDimensions$();
    this.$_keyboardFocusEffect$ = new $dvt$$9$$.$KeyboardFocusEffect$(this.$getCtx$(), this, new $dvt$$9$$.$Rectangle$($DvtTrainEvent$$.x + 1, $DvtTrainEvent$$.y + 1, $DvtTrainEvent$$.$w$ - 2, $DvtTrainEvent$$.$h$ - 2), null, null, !0);
  };
  $dvt$$9$$.$Obj$.$createSubclass$($DvtPanelDrawerEventManager$$, $dvt$$9$$.$EventManager$);
  $DvtPanelDrawerEventManager$$.prototype.$OnClick$ = function $$DvtPanelDrawerEventManager$$$$$OnClick$$($dvt$$9$$) {
    var $DvtTrainEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$9$$));
    $DvtPanelDrawerEventManager$$.$superclass$.$OnClick$.call(this, $dvt$$9$$);
    $DvtTrainEvent$$ && ($DvtTrainEvent$$.$HandleClick$ && $DvtTrainEvent$$.$HandleClick$($dvt$$9$$), $dvt$$9$$.stopPropagation());
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtPanelDrawerEventManager$$$$$OnDblClickInternal$$($dvt$$9$$) {
    var $DvtTrainEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$9$$));
    $DvtTrainEvent$$ && ($DvtTrainEvent$$.$isDoubleClickable$ && $DvtTrainEvent$$.$isDoubleClickable$() && $DvtTrainEvent$$.$HandleDblClick$ && $DvtTrainEvent$$.$HandleDblClick$($dvt$$9$$), $dvt$$9$$.stopPropagation());
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnRollOver$ = function $$DvtPanelDrawerEventManager$$$$$OnRollOver$$($dvt$$9$$) {
    $DvtPanelDrawerEventManager$$.$superclass$.$OnRollOver$.call(this, $dvt$$9$$);
    var $DvtTrainEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$9$$));
    $DvtTrainEvent$$ && $DvtTrainEvent$$.$HandleRollOver$ && $DvtTrainEvent$$.$HandleRollOver$($dvt$$9$$);
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnRollOut$ = function $$DvtPanelDrawerEventManager$$$$$OnRollOut$$($dvt$$9$$) {
    $DvtPanelDrawerEventManager$$.$superclass$.$OnRollOut$.call(this, $dvt$$9$$);
    var $DvtTrainEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$9$$));
    $DvtTrainEvent$$ && $DvtTrainEvent$$.$HandleRollOut$ && $DvtTrainEvent$$.$HandleRollOut$($dvt$$9$$);
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnComponentTouchClick$ = function $$DvtPanelDrawerEventManager$$$$$OnComponentTouchClick$$($dvt$$9$$) {
    var $DvtTrainEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$9$$));
    $DvtPanelDrawerEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $dvt$$9$$);
    $DvtTrainEvent$$ && ($DvtTrainEvent$$.$HandleClick$ && $DvtTrainEvent$$.$HandleClick$($dvt$$9$$), $dvt$$9$$.stopPropagation());
  };
  $dvt$$9$$.$Obj$.$createSubclass$($DvtPanelDrawerKeyboardHandler$$, $dvt$$9$$.$KeyboardHandler$);
  $DvtPanelDrawerKeyboardHandler$$.prototype.Init = function $$DvtPanelDrawerKeyboardHandler$$$$Init$($dvt$$9$$, $DvtTrainEvent$$) {
    $DvtPanelDrawerKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$9$$);
    this.$_panelDrawer$ = $DvtTrainEvent$$;
  };
  $DvtPanelDrawerKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanelDrawerKeyboardHandler$$$$$processKeyDown$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.keyCode, $DvtPanelDrawerEventManager$$ = this.$_eventManager$.$getFocus$();
    return $DvtAccordionDefaults$$ == $dvt$$9$$.KeyboardEvent.$TAB$ ? ($DvtAccordionDefaults$$ = null, $dvt$$9$$.$EventManager$.$consumeEvent$($DvtTrainEvent$$), $DvtAccordionDefaults$$ = $DvtPanelDrawerEventManager$$ ? $DvtPanelDrawerEventManager$$ : this.$_panelDrawer$.$GetTab$(this.$_panelDrawer$.$_panelOrder$[0])) : $DvtAccordionDefaults$$ == $dvt$$9$$.KeyboardEvent.$ENTER$ || $DvtAccordionDefaults$$ == $dvt$$9$$.KeyboardEvent.$SPACE$ ? ($DvtPanelDrawerEventManager$$.$HandleKeyboardEvent$($DvtTrainEvent$$), 
    null) : $DvtPanelDrawerKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtTrainEvent$$);
  };
  $DvtPanelDrawerKeyboardHandler$$.prototype.$getNextNavigable$ = function $$DvtPanelDrawerKeyboardHandler$$$$$getNextNavigable$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if ($DvtAccordionDefaults$$.keyCode != $dvt$$9$$.KeyboardEvent.$DOWN_ARROW$ && $DvtAccordionDefaults$$.keyCode != $dvt$$9$$.KeyboardEvent.$UP_ARROW$) {
      return $DvtTrainEvent$$;
    }
    for (var $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$, $DvtPanelDrawerEventManager$$ = $DvtAccordionDefaults$$.keyCode == $dvt$$9$$.KeyboardEvent.$DOWN_ARROW$ ? !0 : !1, $DvtPanelDrawerTab$$ = this.$_panelDrawer$.$_panelOrder$, $DvtBreadcrumbsPeer$$ = -1, $DvtBreadcrumbsEventManager$$ = 0;$DvtBreadcrumbsEventManager$$ < $DvtPanelDrawerTab$$.length;$DvtBreadcrumbsEventManager$$++) {
      if ($DvtTrainEvent$$ == this.$_panelDrawer$.$GetTab$($DvtPanelDrawerTab$$[$DvtBreadcrumbsEventManager$$])) {
        $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerEventManager$$ ? $DvtBreadcrumbsEventManager$$ == $DvtPanelDrawerTab$$.length - 1 ? -1 : $DvtBreadcrumbsEventManager$$ + 1 : 0 == $DvtBreadcrumbsEventManager$$ ? -1 : $DvtBreadcrumbsEventManager$$ - 1;
        break;
      }
    }
    0 <= $DvtBreadcrumbsPeer$$ && ($DvtPanelDrawerKeyboardHandler$$ = this.$_panelDrawer$.$GetTab$($DvtPanelDrawerTab$$[$DvtBreadcrumbsPeer$$]));
    return $DvtPanelDrawerKeyboardHandler$$;
  };
  $dvt$$9$$.$Accordion$ = function $$dvt$$9$$$$Accordion$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    this.Init($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$);
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$Accordion$, $dvt$$9$$.$Container$);
  $dvt$$9$$.$Accordion$.$COLLAPSE_ENA$ = "sectionColEna";
  $dvt$$9$$.$Accordion$.$COLLAPSE_OVR$ = "sectionColOvr";
  $dvt$$9$$.$Accordion$.$COLLAPSE_DWN$ = "sectionColDwn";
  $dvt$$9$$.$Accordion$.$EXPAND_ENA$ = "sectionExpEna";
  $dvt$$9$$.$Accordion$.$EXPAND_OVR$ = "sectionExpOvr";
  $dvt$$9$$.$Accordion$.$EXPAND_DWN$ = "sectionExpDwn";
  $dvt$$9$$.$Accordion$.prototype.Init = function $$dvt$$9$$$$Accordion$$$Init$($DvtTrainEvent$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$) {
    $dvt$$9$$.$Accordion$.$superclass$.Init.call(this, $DvtTrainEvent$$, null, $DvtPanelDrawerKeyboardHandler$$);
    this.$_images$ = $DvtBreadcrumbsEventManager$$;
    this.$_styleMap$ = (new $DvtAccordionDefaults$$).$calcOptions$($DvtBreadcrumbsDefaults$$);
    this.$_sections$ = {};
    this.$_sectionOrder$ = [];
    this.$_maxWidth$ = $DvtPanelDrawerEventManager$$;
    this.$_minWidth$ = 0;
    this.$_maxHeight$ = $DvtPanelDrawerTab$$;
    this.$_bExpandMany$ = this.$_bCollapseAll$ = !1;
    this.$_eventManager$ = $DvtBreadcrumbsPeer$$;
  };
  $dvt$$9$$.$Accordion$.prototype.$addSection$ = function $$dvt$$9$$$$Accordion$$$$addSection$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    $DvtPanelDrawerEventManager$$ || ($DvtPanelDrawerEventManager$$ = "accordion_" + $DvtTrainEvent$$.replace(/ /g, "_") + Math.floor(1E9 * Math.random()));
    $DvtTrainEvent$$ = new $dvt$$9$$.$AccordionSection$(this.$getCtx$(), $DvtAccordionDefaults$$, $DvtTrainEvent$$, $DvtPanelDrawerKeyboardHandler$$, !0, this, this.$_eventManager$, $DvtPanelDrawerEventManager$$, this.$_images$, this.$_styleMap$);
    this.$_sections$[$DvtPanelDrawerEventManager$$] = $DvtTrainEvent$$;
    this.$_sectionOrder$.push($DvtPanelDrawerEventManager$$);
    this.$addChild$($DvtTrainEvent$$);
  };
  $dvt$$9$$.$Accordion$.prototype.$render$ = function $$dvt$$9$$$$Accordion$$$$render$$() {
    for (var $dvt$$9$$ = this.$getMaxSectionWidth$(), $DvtTrainEvent$$ = !1, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
      var $DvtPanelDrawerKeyboardHandler$$ = this.$getSectionByIndex$($DvtAccordionDefaults$$);
      $DvtPanelDrawerKeyboardHandler$$.$render$($dvt$$9$$);
      $DvtTrainEvent$$ && !this.$_bExpandMany$ && $DvtPanelDrawerKeyboardHandler$$.setActive(!1);
      $DvtPanelDrawerKeyboardHandler$$.$_isActive$ && $DvtPanelDrawerKeyboardHandler$$.$isCollapsible$() && ($DvtTrainEvent$$ = !0);
    }
    !$DvtTrainEvent$$ && 0 < this.$_sectionOrder$.length && !this.$_bCollapseAll$ && this.$getSectionByIndex$(0).setActive(!0);
    this.$_drawSections$();
  };
  $dvt$$9$$.$Accordion$.prototype.$setMaxHeight$ = function $$dvt$$9$$$$Accordion$$$$setMaxHeight$$($dvt$$9$$) {
    this.$_maxHeight$ = $dvt$$9$$;
  };
  $dvt$$9$$.$Accordion$.prototype.$setMaxWidth$ = function $$dvt$$9$$$$Accordion$$$$setMaxWidth$$($dvt$$9$$) {
    this.$_maxWidth$ = $dvt$$9$$;
  };
  $dvt$$9$$.$Accordion$.prototype.$setMinWidth$ = function $$dvt$$9$$$$Accordion$$$$setMinWidth$$($dvt$$9$$) {
    this.$_minWidth$ = $dvt$$9$$;
  };
  $dvt$$9$$.$Accordion$.prototype.update = function $$dvt$$9$$$$Accordion$$$update$($dvt$$9$$) {
    $dvt$$9$$ = this.$getSectionById$($dvt$$9$$);
    var $DvtTrainEvent$$ = $dvt$$9$$.$_isActive$;
    if ($DvtTrainEvent$$) {
      $DvtTrainEvent$$ && this.$_canCollapseSection$($dvt$$9$$) && $dvt$$9$$.setActive(!1);
    } else {
      if (!this.$_bExpandMany$) {
        for ($DvtTrainEvent$$ = 0;$DvtTrainEvent$$ < this.$_sectionOrder$.length;$DvtTrainEvent$$++) {
          this.$getSectionByIndex$($DvtTrainEvent$$).setActive(!1);
        }
      }
      $dvt$$9$$.setActive(!0);
    }
    this.$_drawSections$();
  };
  $dvt$$9$$.$Accordion$.prototype.$getMaxSectionWidth$ = function $$dvt$$9$$$$Accordion$$$$getMaxSectionWidth$$() {
    if (!this.$_maxSectionWidth$) {
      for (var $dvt$$9$$ = 0, $DvtTrainEvent$$ = this.$_styleMap$.paddingX, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
        var $DvtPanelDrawerKeyboardHandler$$ = this.$getSectionByIndex$($DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$GetTitleDimensions$();
        $DvtPanelDrawerEventManager$$.$w$ > $dvt$$9$$ && ($dvt$$9$$ = $DvtPanelDrawerEventManager$$.$w$);
        $DvtPanelDrawerKeyboardHandler$$ = $DvtPanelDrawerKeyboardHandler$$.$getContentDimensions$().$w$ + 2 * $DvtTrainEvent$$;
        $DvtPanelDrawerKeyboardHandler$$ > $dvt$$9$$ && ($dvt$$9$$ = $DvtPanelDrawerKeyboardHandler$$);
      }
      $dvt$$9$$ = Math.min($dvt$$9$$, this.$_maxWidth$);
      this.$_maxSectionWidth$ = $dvt$$9$$ = Math.max($dvt$$9$$, this.$_minWidth$);
    }
    return this.$_maxSectionWidth$;
  };
  $dvt$$9$$.$Accordion$.prototype.$getExpandedHeight$ = function $$dvt$$9$$$$Accordion$$$$getExpandedHeight$$() {
    if (!this.$_maxHeight$) {
      for (var $dvt$$9$$ = 0, $DvtTrainEvent$$ = 0, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
        var $DvtPanelDrawerKeyboardHandler$$ = this.$getSectionByIndex$($DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$getExpandedDimensions$().$h$;
        if ($DvtPanelDrawerKeyboardHandler$$.$isCollapsible$() && $DvtPanelDrawerEventManager$$ > $dvt$$9$$) {
          $dvt$$9$$ = $DvtPanelDrawerEventManager$$;
        } else {
          if (!$DvtPanelDrawerKeyboardHandler$$.$isCollapsible$() || this.$_bExpandMany$) {
            $DvtTrainEvent$$ += $DvtPanelDrawerEventManager$$;
          }
        }
      }
      this.$_maxHeight$ = $dvt$$9$$ + $DvtTrainEvent$$;
    }
    return this.$_maxHeight$;
  };
  $dvt$$9$$.$Accordion$.prototype.$getSectionByIndex$ = function $$dvt$$9$$$$Accordion$$$$getSectionByIndex$$($dvt$$9$$) {
    return 0 <= $dvt$$9$$ && $dvt$$9$$ < this.$_sectionOrder$.length ? this.$getSectionById$(this.$_sectionOrder$[$dvt$$9$$]) : null;
  };
  $dvt$$9$$.$Accordion$.prototype.$getSectionById$ = function $$dvt$$9$$$$Accordion$$$$getSectionById$$($dvt$$9$$) {
    return this.$_sections$[$dvt$$9$$];
  };
  $dvt$$9$$.$Accordion$.prototype.$setExpandMany$ = function $$dvt$$9$$$$Accordion$$$$setExpandMany$$() {
    this.$_bExpandMany$ = !0;
  };
  $dvt$$9$$.$Accordion$.prototype.$setCollapseAll$ = function $$dvt$$9$$$$Accordion$$$$setCollapseAll$$() {
    this.$_bCollapseAll$ = !0;
  };
  $dvt$$9$$.$Accordion$.prototype.$_canCollapseSection$ = function $$dvt$$9$$$$Accordion$$$$_canCollapseSection$$($dvt$$9$$) {
    if ($dvt$$9$$.$isCollapsible$()) {
      if (this.$_bCollapseAll$) {
        return !0;
      }
      for (var $DvtTrainEvent$$ = 0, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
        $dvt$$9$$ = this.$getSectionByIndex$($DvtAccordionDefaults$$), $dvt$$9$$.$_isActive$ && $DvtTrainEvent$$++;
      }
      return 1 < $DvtTrainEvent$$;
    }
    return !1;
  };
  $dvt$$9$$.$Accordion$.prototype.$_drawSections$ = function $$dvt$$9$$$$Accordion$$$$_drawSections$$() {
    for (var $DvtTrainEvent$$ = 0, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
      var $DvtPanelDrawerKeyboardHandler$$ = this.$getSectionByIndex$($DvtAccordionDefaults$$);
      $DvtPanelDrawerKeyboardHandler$$.$setTranslateY$($DvtTrainEvent$$);
      $DvtPanelDrawerKeyboardHandler$$.$_isActive$ ? ($DvtPanelDrawerKeyboardHandler$$.expand(), $DvtTrainEvent$$ += $DvtPanelDrawerKeyboardHandler$$.$getDimensionsWithStroke$().$h$, $DvtTrainEvent$$ += this.$_styleMap$.paddingY) : ($DvtPanelDrawerKeyboardHandler$$.collapse(), $DvtTrainEvent$$ += this.$_styleMap$.sectionHeader.headerHeight);
    }
    $DvtTrainEvent$$ = this.$getDimensionsWithStroke$();
    this.$FireListener$(new $dvt$$9$$.$ResizeEvent$($DvtTrainEvent$$.$w$, $DvtTrainEvent$$.$h$, 0, 0));
  };
  $dvt$$9$$.$Accordion$.prototype.$getSections$ = function $$dvt$$9$$$$Accordion$$$$getSections$$() {
    for (var $dvt$$9$$ = [], $DvtTrainEvent$$ = 0;$DvtTrainEvent$$ < this.$_sectionOrder$.length;$DvtTrainEvent$$++) {
      $dvt$$9$$.push(this.$getSectionByIndex$($DvtTrainEvent$$));
    }
    return $dvt$$9$$;
  };
  $dvt$$9$$.$AccordionSection$ = function $$dvt$$9$$$$AccordionSection$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsRenderer$$) {
    this.Init($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsRenderer$$);
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$AccordionSection$, $dvt$$9$$.$Container$);
  $dvt$$9$$.$AccordionSection$.prototype.Init = function $$dvt$$9$$$$AccordionSection$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsRenderer$$, $styleMap$$90$$) {
    $dvt$$9$$.$AccordionSection$.$superclass$.Init.call(this, $DvtTrainEvent$$, null, $DvtBreadcrumbsDefaults$$);
    this.$_parent$ = $DvtBreadcrumbsPeer$$;
    this.$_images$ = $DvtBreadcrumbsRenderer$$;
    this.$_title$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_id$ = $DvtBreadcrumbsDefaults$$;
    this.$_sectionContent$ = $DvtAccordionDefaults$$;
    this.$_collapsedBtn$ = this.$_expandedBtn$ = null;
    this.$_isActive$ = (this.$_isCollapsible$ = $DvtPanelDrawerTab$$) ? $DvtPanelDrawerEventManager$$ : !0;
    this.$_eventManager$ = $DvtBreadcrumbsEventManager$$;
    this.$_styleMap$ = $styleMap$$90$$;
    this.$_headerHeight$ = this.$_styleMap$.sectionHeader.headerHeight;
    this.$_paddingX$ = this.$_styleMap$.paddingX;
    this.$_paddingY$ = this.$_styleMap$.paddingY;
    this.$_titleStyle$ = this.$_styleMap$.sectionHeader.styleEna;
    this.$_imageWidth$ = this.$_styleMap$.sectionHeader.imageWidth;
    this.$_imageHeight$ = this.$_styleMap$.sectionHeader.imageHeight;
    this.$_textPadding$ = this.$_styleMap$.sectionHeader.textPadding;
  };
  $dvt$$9$$.$AccordionSection$.prototype.getId = function $$dvt$$9$$$$AccordionSection$$$getId$() {
    return this.$_id$;
  };
  $dvt$$9$$.$AccordionSection$.prototype.$getTitle$ = function $$dvt$$9$$$$AccordionSection$$$$getTitle$$() {
    return this.$_title$;
  };
  $dvt$$9$$.$AccordionSection$.prototype.setActive = function $$dvt$$9$$$$AccordionSection$$$setActive$($dvt$$9$$) {
    this.$_isActive$ = $dvt$$9$$;
  };
  $dvt$$9$$.$AccordionSection$.prototype.$isCollapsible$ = function $$dvt$$9$$$$AccordionSection$$$$isCollapsible$$() {
    return this.$_isCollapsible$;
  };
  $dvt$$9$$.$AccordionSection$.prototype.$getContentDimensions$ = function $$dvt$$9$$$$AccordionSection$$$$getContentDimensions$$() {
    var $dvt$$9$$ = null;
    0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), $dvt$$9$$ = this.$_sectionContent$.$getDimensions$(), this.removeChild(this.$_sectionContent$)) : $dvt$$9$$ = this.$_sectionContent$.$getDimensions$();
    return $dvt$$9$$;
  };
  $dvt$$9$$.$AccordionSection$.prototype.$getExpandedDimensions$ = function $$dvt$$9$$$$AccordionSection$$$$getExpandedDimensions$$() {
    var $dvt$$9$$ = null;
    0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$), $dvt$$9$$ = this.$getDimensionsWithStroke$(), this.removeChild(this.$_sectionContent$)) : $dvt$$9$$ = this.$getDimensionsWithStroke$();
    return $dvt$$9$$;
  };
  $dvt$$9$$.$AccordionSection$.prototype.$render$ = function $$dvt$$9$$$$AccordionSection$$$$render$$($dvt$$9$$) {
    this.$_createHeader$($dvt$$9$$, this.$_headerHeight$);
    this.$isCollapsible$() ? this.$_isActive$ ? (this.$addChildAt$(this.$_expandedBtn$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$)) : this.$addChild$(this.$_collapsedBtn$) : (this.$addChildAt$(this.$_header$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + 
    this.$_paddingY$));
  };
  $dvt$$9$$.$AccordionSection$.prototype.collapse = function $$dvt$$9$$$$AccordionSection$$$collapse$() {
    this.$isCollapsible$() && (0 <= this.$getChildIndex$(this.$_expandedBtn$) && this.removeChild(this.$_expandedBtn$), 0 <= this.$getChildIndex$(this.$_sectionContent$) && this.removeChild(this.$_sectionContent$), this.$addChild$(this.$_collapsedBtn$), this.setActive(!1), this.$isShowingKeyboardFocusEffect$() && this.$showKeyboardFocusEffect$());
  };
  $dvt$$9$$.$AccordionSection$.prototype.expand = function $$dvt$$9$$$$AccordionSection$$$expand$() {
    0 <= this.$getChildIndex$(this.$_collapsedBtn$) && this.removeChild(this.$_collapsedBtn$);
    this.$addChild$(this.$_expandedBtn$);
    this.$addChild$(this.$_sectionContent$);
    this.$_sectionContent$.$setTranslateX$(this.$_paddingX$);
    this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$);
    this.setActive(!0);
    this.$isShowingKeyboardFocusEffect$() && this.$showKeyboardFocusEffect$();
  };
  $dvt$$9$$.$AccordionSection$.prototype.$GetTitleDimensions$ = function $$dvt$$9$$$$AccordionSection$$$$GetTitleDimensions$$() {
    if (!this.$_titleDim$) {
      var $DvtTrainEvent$$ = new $dvt$$9$$.$OutputText$(this.$_context$, this.$_title$);
      $DvtTrainEvent$$.$setCSSStyle$(this.$_titleStyle$);
      if ($DvtTrainEvent$$ = $DvtTrainEvent$$.$measureDimensions$()) {
        $DvtTrainEvent$$.$w$ = $DvtTrainEvent$$.$w$ + this.$_imageWidth$ + this.$_textPadding$;
      }
      this.$_titleDim$ = $DvtTrainEvent$$;
    }
    return this.$_titleDim$;
  };
  $dvt$$9$$.$AccordionSection$.prototype.$SetTitleDimensions$ = function $$dvt$$9$$$$AccordionSection$$$$SetTitleDimensions$$($dvt$$9$$) {
    if (!this.$_titleDim$ || this.$_titleDim$.$w$ < $dvt$$9$$.$w$ || this.$_titleDim$.$h$ < $dvt$$9$$.$h$) {
      this.$_titleDim$ = $dvt$$9$$;
    }
  };
  $dvt$$9$$.$AccordionSection$.prototype.$_createHeader$ = function $$dvt$$9$$$$AccordionSection$$$$_createHeader$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if (this.$isCollapsible$()) {
      var $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$;
      this.$_images$.$getAttr$ ? ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_ENABLED$, this.$_images$.$getAttr$($dvt$$9$$.$Accordion$.$EXPAND_ENA$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_OVER$, this.$_images$.$getAttr$($dvt$$9$$.$Accordion$.$EXPAND_OVR$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_DOWN$, 
      this.$_images$.$getAttr$($dvt$$9$$.$Accordion$.$EXPAND_DWN$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$)) : ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_ENABLED$, this.$_images$[$dvt$$9$$.$Accordion$.$EXPAND_ENA$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_OVER$, this.$_images$[$dvt$$9$$.$Accordion$.$EXPAND_OVR$], this.$_title$, $DvtTrainEvent$$, 
      $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_DOWN$, this.$_images$[$dvt$$9$$.$Accordion$.$EXPAND_DWN$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$));
      this.$_expandedBtn$ = new $dvt$$9$$.$Button$(this.$_context$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$);
      this.$_expandedBtn$.$setAriaRole$("button");
      $DvtPanelDrawerKeyboardHandler$$ = $dvt$$9$$.$Displayable$.$generateAriaLabel$(this.$_title$, [$dvt$$9$$.$Bundle$.$getTranslatedString$($dvt$$9$$.$Bundle$.$UTIL_PREFIX$, "STATE_EXPANDED")]);
      this.$_expandedBtn$.$setAriaProperty$("label", $DvtPanelDrawerKeyboardHandler$$);
      this.$_images$.$getAttr$ ? ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_ENABLED$, this.$_images$.$getAttr$($dvt$$9$$.$Accordion$.$COLLAPSE_ENA$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_OVER$, this.$_images$.$getAttr$($dvt$$9$$.$Accordion$.$COLLAPSE_OVR$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_DOWN$, 
      this.$_images$.$getAttr$($dvt$$9$$.$Accordion$.$COLLAPSE_DWN$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$)) : ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_ENABLED$, this.$_images$[$dvt$$9$$.$Accordion$.$COLLAPSE_ENA$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_OVER$, this.$_images$[$dvt$$9$$.$Accordion$.$COLLAPSE_OVR$], this.$_title$, 
      $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = this.$_createHeaderState$($dvt$$9$$.$Button$.$STATE_DOWN$, this.$_images$[$dvt$$9$$.$Accordion$.$COLLAPSE_DWN$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$));
      this.$_collapsedBtn$ = new $dvt$$9$$.$Button$(this.$_context$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$);
      this.$_collapsedBtn$.$setAriaRole$("button");
      $DvtPanelDrawerKeyboardHandler$$ = $dvt$$9$$.$Displayable$.$generateAriaLabel$(this.$_title$, [$dvt$$9$$.$Bundle$.$getTranslatedString$($dvt$$9$$.$Bundle$.$UTIL_PREFIX$, "STATE_COLLAPSED")]);
      this.$_collapsedBtn$.$setAriaProperty$("label", $DvtPanelDrawerKeyboardHandler$$);
      this.$_eventManager$.$associate$(this.$_expandedBtn$, this);
      this.$_eventManager$.$associate$(this.$_collapsedBtn$, this);
    } else {
      $DvtPanelDrawerKeyboardHandler$$ = this.$_createButtonBase$($dvt$$9$$.$Button$.$STATE_DISABLED$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createButtonText$(this.$_title$), this.$_header$ = new $dvt$$9$$.$Container$(this.$_context$), this.$_header$.$addChild$($DvtPanelDrawerKeyboardHandler$$), this.$_header$.$addChild$($DvtPanelDrawerEventManager$$);
    }
  };
  $dvt$$9$$.$AccordionSection$.prototype.$_createHeaderState$ = function $$dvt$$9$$$$AccordionSection$$$$_createHeaderState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    var $DvtBreadcrumbsPeer$$ = this.$_imageWidth$, $DvtBreadcrumbsEventManager$$ = this.$_imageHeight$, $DvtBreadcrumbsDefaults$$ = (this.$_headerHeight$ - $DvtBreadcrumbsEventManager$$) / 2, $DvtBreadcrumbsRenderer$$ = new $dvt$$9$$.$Container$(this.$_context$);
    $DvtTrainEvent$$ = this.$_createButtonBase$($DvtTrainEvent$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$);
    $DvtBreadcrumbsRenderer$$.$addChild$($DvtTrainEvent$$);
    ($DvtAccordionDefaults$$ = $DvtAccordionDefaults$$ ? new $dvt$$9$$.Image(this.$_context$, $DvtAccordionDefaults$$, 0, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$) : null) && $DvtBreadcrumbsRenderer$$.$addChild$($DvtAccordionDefaults$$);
    $DvtPanelDrawerKeyboardHandler$$ = this.$_createButtonText$($DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$ - $DvtBreadcrumbsPeer$$ - 0, $DvtPanelDrawerTab$$, $DvtBreadcrumbsRenderer$$);
    $dvt$$9$$.$Agent$.$isRightToLeft$(this.$_context$) ? ($DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.$measureDimensions$(), $DvtPanelDrawerKeyboardHandler$$.$setTranslateX$($DvtPanelDrawerEventManager$$ - $DvtPanelDrawerTab$$.$w$ - $DvtBreadcrumbsPeer$$), $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$.$setTranslateX$($DvtPanelDrawerEventManager$$ - $DvtBreadcrumbsPeer$$)) : $DvtPanelDrawerKeyboardHandler$$.$setTranslateX$($DvtBreadcrumbsPeer$$);
    this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$($DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$ : $DvtPanelDrawerKeyboardHandler$$);
    return $DvtBreadcrumbsRenderer$$;
  };
  $dvt$$9$$.$AccordionSection$.prototype.$_createButtonText$ = function $$dvt$$9$$$$AccordionSection$$$$_createButtonText$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    var $DvtPanelDrawerTab$$ = null;
    $DvtTrainEvent$$ && ($DvtPanelDrawerTab$$ = new $dvt$$9$$.$OutputText$(this.$_context$, $DvtTrainEvent$$), $DvtPanelDrawerTab$$.$setCSSStyle$(this.$_titleStyle$), $dvt$$9$$.$TextUtils$.$fitText$($DvtPanelDrawerTab$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$), $DvtTrainEvent$$ = $DvtPanelDrawerTab$$.$measureDimensions$(), this.$SetTitleDimensions$($DvtTrainEvent$$), $DvtPanelDrawerTab$$.$setTranslateY$((this.$_headerHeight$ - $DvtTrainEvent$$.$h$) / 
    2));
    return $DvtPanelDrawerTab$$;
  };
  $dvt$$9$$.$AccordionSection$.prototype.$_createButtonBase$ = function $$dvt$$9$$$$AccordionSection$$$$_createButtonBase$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = null;
    switch($DvtTrainEvent$$) {
      case $dvt$$9$$.$Button$.$STATE_OVER$:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleOvr;
        break;
      case $dvt$$9$$.$Button$.$STATE_DOWN$:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleDwn;
        break;
      case $dvt$$9$$.$Button$.$STATE_DISABLED$:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleDis;
        break;
      default:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleEna;
    }
    $DvtTrainEvent$$ = new $dvt$$9$$.Rect(this.$_context$, 0, 0, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
    $DvtTrainEvent$$.$setStroke$($dvt$$9$$.$AccordionSection$.$_getStroke$($DvtPanelDrawerEventManager$$));
    $DvtTrainEvent$$.$setFill$($dvt$$9$$.$AccordionSection$.$_getFill$($DvtPanelDrawerEventManager$$));
    return $DvtTrainEvent$$;
  };
  $dvt$$9$$.$AccordionSection$.$_getFill$ = function $$dvt$$9$$$$AccordionSection$$$_getFill$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$getStyle$($dvt$$9$$.$CSSStyle$.$BACKGROUND_COLOR$);
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getBackgroundImage$();
    var $DvtPanelDrawerKeyboardHandler$$ = null;
    if ($DvtTrainEvent$$ && $DvtTrainEvent$$ instanceof $dvt$$9$$.$CSSGradient$) {
      var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$_arColors$, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$_arAlphas$, $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.$_arRatios$;
      $DvtTrainEvent$$ = $DvtTrainEvent$$.$getAngle$();
      $DvtPanelDrawerKeyboardHandler$$ = new $dvt$$9$$.$LinearGradientFill$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$);
    } else {
      $DvtAccordionDefaults$$ && ($DvtPanelDrawerKeyboardHandler$$ = new $dvt$$9$$.$SolidFill$($DvtAccordionDefaults$$, 1));
    }
    return $DvtPanelDrawerKeyboardHandler$$;
  };
  $dvt$$9$$.$AccordionSection$.$_getStroke$ = function $$dvt$$9$$$$AccordionSection$$$_getStroke$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getStyle$($dvt$$9$$.$CSSStyle$.$BORDER_COLOR$);
    return new $dvt$$9$$.$SolidStroke$($DvtTrainEvent$$, 1, 1);
  };
  $dvt$$9$$.$AccordionSection$.prototype.$getKeyboardBoundingBox$ = function $$dvt$$9$$$$AccordionSection$$$$getKeyboardBoundingBox$$() {
    var $DvtTrainEvent$$ = this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$, $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$getDimensions$(), $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$localToStage$(new $dvt$$9$$.$Point$($DvtAccordionDefaults$$.x, $DvtAccordionDefaults$$.y)), $DvtTrainEvent$$ = $DvtTrainEvent$$.$localToStage$(new $dvt$$9$$.$Point$($DvtAccordionDefaults$$.x + $DvtAccordionDefaults$$.$w$, $DvtAccordionDefaults$$.y + $DvtAccordionDefaults$$.$h$));
    return new $dvt$$9$$.$Rectangle$($DvtPanelDrawerKeyboardHandler$$.x, $DvtPanelDrawerKeyboardHandler$$.y, $DvtTrainEvent$$.x - $DvtPanelDrawerKeyboardHandler$$.x, $DvtTrainEvent$$.y - $DvtPanelDrawerKeyboardHandler$$.y);
  };
  $dvt$$9$$.$AccordionSection$.prototype.$getTargetElem$ = function $$dvt$$9$$$$AccordionSection$$$$getTargetElem$$() {
    return (this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$).$getElem$();
  };
  $dvt$$9$$.$AccordionSection$.prototype.$showKeyboardFocusEffect$ = function $$dvt$$9$$$$AccordionSection$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$_keyboardFocusEffect$.show();
    this.$_context$.$setActiveElement$(this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$);
  };
  $dvt$$9$$.$AccordionSection$.prototype.$hideKeyboardFocusEffect$ = function $$dvt$$9$$$$AccordionSection$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$_keyboardFocusEffect$.$hide$();
  };
  $dvt$$9$$.$AccordionSection$.prototype.$isShowingKeyboardFocusEffect$ = function $$dvt$$9$$$$AccordionSection$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $dvt$$9$$.$AccordionSection$.prototype.$getNextNavigable$ = function $$dvt$$9$$$$AccordionSection$$$$getNextNavigable$$($dvt$$9$$) {
    return this.$_eventManager$.$KeyboardHandler$.$getNextNavigable$(this, $dvt$$9$$);
  };
  $dvt$$9$$.$AccordionSection$.prototype.$_createKeyboardFocusEffect$ = function $$dvt$$9$$$$AccordionSection$$$$_createKeyboardFocusEffect$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$getDimensions$(), $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$getTranslateX$() || $DvtAccordionDefaults$$.x;
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getTranslateY$() || $DvtAccordionDefaults$$.y;
    this.$_keyboardFocusEffect$ = new $dvt$$9$$.$KeyboardFocusEffect$(this.$getCtx$(), this, new $dvt$$9$$.$Rectangle$($DvtPanelDrawerKeyboardHandler$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$.$w$, $DvtAccordionDefaults$$.$h$), null, null, !0);
  };
  $dvt$$9$$.$Obj$.$createSubclass$($DvtAccordionDefaults$$, $dvt$$9$$.$BaseComponentDefaults$);
  $DvtAccordionDefaults$$.$VERSION_1$ = {skin:$dvt$$9$$.$CSSStyle$.$SKIN_ALTA$, sectionHeader:{styleEna:new $dvt$$9$$.$CSSStyle$($dvt$$9$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$ + "color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleOvr:new $dvt$$9$$.$CSSStyle$($dvt$$9$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$ + "color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDwn:new $dvt$$9$$.$CSSStyle$($dvt$$9$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$ + 
  "color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDis:new $dvt$$9$$.$CSSStyle$($dvt$$9$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$ + "color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), headerHeight:33, imageWidth:24, imageHeight:24, textPadding:5}, paddingX:0, paddingY:0};
  $DvtAccordionDefaults$$.$SKIN_ALTA$ = {};
  $dvt$$9$$.$Train$ = function $$dvt$$9$$$$Train$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    this.Init($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$);
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$Train$, $dvt$$9$$.$Container$);
  $dvt$$9$$.$Train$.$TRAIN_EVENT$ = "dvtTrain";
  $dvt$$9$$.$Train$.$FILL_COLOR$ = "#c0cbd5";
  $dvt$$9$$.$Train$.$BORDER_COLOR$ = "#5d7891";
  $dvt$$9$$.$Train$.$SELECTED_FILL_COLOR$ = "#61bde3";
  $dvt$$9$$.$Train$.$SELECTED_BORDER_COLOR$ = "#0066ff";
  $dvt$$9$$.$Train$.$BUTTON_SIZE$ = 8;
  $dvt$$9$$.$Train$.$VPADDING$ = 1;
  $dvt$$9$$.$Train$.$HPADDING$ = 3;
  $dvt$$9$$.$Train$.$STATE_ENABLED$ = 0;
  $dvt$$9$$.$Train$.$STATE_HOVER$ = 1;
  $dvt$$9$$.$Train$.$STATE_SELECTED$ = 2;
  $dvt$$9$$.$Train$.prototype.Init = function $$dvt$$9$$$$Train$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    $dvt$$9$$.$Train$.$superclass$.Init.call(this, $DvtTrainEvent$$, null, $DvtPanelDrawerTab$$);
    this.$_tooltipManager$ = $DvtTrainEvent$$.$getTooltipManager$();
    this.$_labels$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_buttonStyles$ = $DvtPanelDrawerEventManager$$;
    this.$_count$ = $DvtPanelDrawerKeyboardHandler$$.length;
    this.$_buttons$ = Array(this.$_count$);
    this.$_selectedIndex$ = 0;
    this.$_isAltaSkin$ = $DvtBreadcrumbsPeer$$;
    this.$RenderSelf$($DvtAccordionDefaults$$);
  };
  $dvt$$9$$.$Train$.prototype.$setSelectedIndex$ = function $$dvt$$9$$$$Train$$$$setSelectedIndex$$($dvt$$9$$) {
    0 <= $dvt$$9$$ && $dvt$$9$$ < this.$_count$ && this.$SelectedIndexChanged$(this.$_selectedIndex$, $dvt$$9$$);
  };
  $dvt$$9$$.$Train$.prototype.$HandleClick$ = function $$dvt$$9$$$$Train$$$$HandleClick$$($DvtTrainEvent$$) {
    $dvt$$9$$.$EventManager$.$consumeEvent$($DvtTrainEvent$$);
    for (var $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_buttons$.length;$DvtAccordionDefaults$$++) {
      var $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.target;
      if (this.$_buttons$[$DvtAccordionDefaults$$] === $DvtPanelDrawerKeyboardHandler$$ || this.$_buttons$[$DvtAccordionDefaults$$] === $DvtPanelDrawerKeyboardHandler$$.getParent()) {
        $DvtTrainEvent$$ = this.$_selectedIndex$;
        this.$SelectedIndexChanged$($DvtTrainEvent$$, $DvtAccordionDefaults$$);
        $DvtTrainEvent$$ != $DvtAccordionDefaults$$ && this.$fireTrainEvent$();
        break;
      }
    }
  };
  $dvt$$9$$.$Train$.prototype.$SelectedIndexChanged$ = function $$dvt$$9$$$$Train$$$$SelectedIndexChanged$$($dvt$$9$$, $DvtTrainEvent$$) {
    this.$_selectedIndex$ = $DvtTrainEvent$$;
    var $DvtAccordionDefaults$$ = this.$_buttons$[$dvt$$9$$];
    $DvtAccordionDefaults$$ && ($DvtAccordionDefaults$$.$overState$ && $DvtAccordionDefaults$$.$overState$.setCursor("pointer"), $DvtAccordionDefaults$$.$downState$ && $DvtAccordionDefaults$$.$downState$.setCursor("pointer"), $DvtAccordionDefaults$$.$setToggled$(!1));
    if ($DvtAccordionDefaults$$ = this.$_buttons$[$DvtTrainEvent$$]) {
      $DvtAccordionDefaults$$.$overState$ && $DvtAccordionDefaults$$.$overState$.setCursor("default"), $DvtAccordionDefaults$$.$downState$ && $DvtAccordionDefaults$$.$downState$.setCursor("default"), $DvtAccordionDefaults$$.$setToggled$(!0);
    }
  };
  $dvt$$9$$.$Train$.prototype.$addTrainEventListener$ = function $$dvt$$9$$$$Train$$$$addTrainEventListener$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$addEvtListener$($dvt$$9$$.$Train$.$TRAIN_EVENT$, $DvtTrainEvent$$, !1, $DvtAccordionDefaults$$);
  };
  $dvt$$9$$.$Train$.prototype.$fireTrainEvent$ = function $$dvt$$9$$$$Train$$$$fireTrainEvent$$() {
    var $dvt$$9$$ = new $DvtTrainEvent$$(this.$_selectedIndex$);
    this.$FireListener$($dvt$$9$$, !1);
  };
  $dvt$$9$$.$Train$.prototype.$RenderSelf$ = function $$dvt$$9$$$$Train$$$$RenderSelf$$($DvtTrainEvent$$) {
    for (var $DvtAccordionDefaults$$ = $dvt$$9$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtPanelDrawerKeyboardHandler$$ = this.$_getButtonSize$(), $DvtPanelDrawerEventManager$$ = 0;$DvtPanelDrawerEventManager$$ < this.$_count$;$DvtPanelDrawerEventManager$$++) {
      var $DvtPanelDrawerTab$$;
      $DvtPanelDrawerTab$$ = this.$CreateButton$($DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$ == this.$_selectedIndex$, this.$_labels$[$DvtPanelDrawerEventManager$$]);
      this.$addButtonListeners$($DvtPanelDrawerTab$$);
      var $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerEventManager$$;
      $DvtAccordionDefaults$$ && ($DvtBreadcrumbsPeer$$ = this.$_count$ - 1 - $DvtPanelDrawerEventManager$$);
      $DvtTrainEvent$$ && $DvtTrainEvent$$.$associate$($DvtPanelDrawerTab$$, $DvtPanelDrawerTab$$);
      $DvtPanelDrawerTab$$.$setTranslate$($DvtBreadcrumbsPeer$$ * ($DvtPanelDrawerKeyboardHandler$$ + $dvt$$9$$.$Train$.$HPADDING$), this.$_isAltaSkin$ ? 0 : $dvt$$9$$.$Train$.$VPADDING$);
      this.$addChild$($DvtPanelDrawerTab$$);
      this.$_buttons$[$DvtPanelDrawerEventManager$$] = $DvtPanelDrawerTab$$;
    }
  };
  $dvt$$9$$.$Train$.prototype.$DrawButtonState$ = function $$dvt$$9$$$$Train$$$$DrawButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$;
    $DvtAccordionDefaults$$ ? ($DvtBreadcrumbsPeer$$ = 0, $DvtPanelDrawerTab$$ = $dvt$$9$$.$Train$.$SELECTED_FILL_COLOR$, $DvtPanelDrawerEventManager$$ = $dvt$$9$$.$Train$.$SELECTED_BORDER_COLOR$, this.$_buttonStyles$ && ($DvtPanelDrawerKeyboardHandler$$ = this.$_buttonStyles$[$dvt$$9$$.$Train$.$STATE_SELECTED$])) : ($DvtBreadcrumbsPeer$$ = 1, $DvtPanelDrawerTab$$ = $dvt$$9$$.$Train$.$FILL_COLOR$, $DvtPanelDrawerEventManager$$ = $dvt$$9$$.$Train$.$BORDER_COLOR$, this.$_buttonStyles$ && ($DvtPanelDrawerKeyboardHandler$$ = 
    this.$_buttonStyles$[$dvt$$9$$.$Train$.$STATE_ENABLED$]));
    $DvtPanelDrawerKeyboardHandler$$ && ($DvtPanelDrawerKeyboardHandler$$.$getStyle$($dvt$$9$$.$CSSStyle$.$BORDER_COLOR$) && ($DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$getStyle$($dvt$$9$$.$CSSStyle$.$BORDER_COLOR$)), $DvtPanelDrawerKeyboardHandler$$.$getStyle$($dvt$$9$$.$CSSStyle$.$BACKGROUND_COLOR$) && ($DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.$getStyle$($dvt$$9$$.$CSSStyle$.$BACKGROUND_COLOR$)));
    $DvtPanelDrawerKeyboardHandler$$ = new $dvt$$9$$.Rect(this.$getCtx$(), $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsPeer$$, $DvtTrainEvent$$ - 2 * $DvtBreadcrumbsPeer$$, $DvtTrainEvent$$ - 2 * $DvtBreadcrumbsPeer$$);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidFill$($DvtPanelDrawerTab$$);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidStroke$($DvtPanelDrawerEventManager$$);
    return $DvtPanelDrawerKeyboardHandler$$;
  };
  $dvt$$9$$.$Train$.prototype.$addButtonListeners$ = function $$dvt$$9$$$$Train$$$$addButtonListeners$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$.$addEvtListener$($dvt$$9$$.TouchEvent.$TOUCHSTART$, this.$HandleClick$, !1, this);
    $dvt$$9$$.$Agent$.$isTouchDevice$() || $DvtTrainEvent$$.$addEvtListener$($dvt$$9$$.MouseEvent.$CLICK$, this.$HandleClick$, !1, this);
  };
  $dvt$$9$$.$Train$.prototype.$_getButtonSize$ = function $$dvt$$9$$$$Train$$$$_getButtonSize$$() {
    if (!this.$_buttonSize$) {
      if (this.$_buttonStyles$) {
        var $DvtTrainEvent$$ = this.$_buttonStyles$[0];
        $DvtTrainEvent$$ && (this.$_buttonSize$ = $dvt$$9$$.$CSSStyle$.$toNumber$($DvtTrainEvent$$.getWidth()));
      }
      this.$_buttonSize$ || (this.$_buttonSize$ = $dvt$$9$$.$Train$.$BUTTON_SIZE$);
    }
    return this.$_buttonSize$;
  };
  $dvt$$9$$.$Train$.prototype.$CreateButtonState$ = function $$dvt$$9$$$$Train$$$$CreateButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    return new $dvt$$9$$.Image(this.$getCtx$(), $DvtTrainEvent$$, 0, 0, $DvtAccordionDefaults$$, $DvtAccordionDefaults$$);
  };
  $dvt$$9$$.$Train$.prototype.$MakeButtonState$ = function $$dvt$$9$$$$Train$$$$MakeButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = this.$_buttonStyles$ ? this.$_buttonStyles$[$DvtAccordionDefaults$$] : null;
    $DvtTrainEvent$$ = ($DvtPanelDrawerEventManager$$ = $DvtPanelDrawerEventManager$$ ? $DvtPanelDrawerEventManager$$.$getIconUrl$() : null) ? this.$CreateButtonState$($DvtPanelDrawerEventManager$$, $DvtTrainEvent$$) : this.$DrawButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$ == $dvt$$9$$.$Train$.$STATE_SELECTED$);
    $DvtTrainEvent$$.setCursor($DvtAccordionDefaults$$ == $dvt$$9$$.$Train$.$STATE_ENABLED$ || $DvtPanelDrawerKeyboardHandler$$ ? "default" : "pointer");
    return $DvtTrainEvent$$;
  };
  $dvt$$9$$.$Train$.prototype.$CreateButton$ = function $$dvt$$9$$$$Train$$$$CreateButton$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    $DvtTrainEvent$$ = new $dvt$$9$$.$Button$(this.$getCtx$(), this.$MakeButtonState$($DvtTrainEvent$$, $dvt$$9$$.$Train$.$STATE_ENABLED$, $DvtAccordionDefaults$$), this.$MakeButtonState$($DvtTrainEvent$$, $dvt$$9$$.$Train$.$STATE_HOVER$, $DvtAccordionDefaults$$), this.$MakeButtonState$($DvtTrainEvent$$, $dvt$$9$$.$Train$.$STATE_SELECTED$, $DvtAccordionDefaults$$), null);
    $DvtTrainEvent$$.$setTooltip$($DvtPanelDrawerKeyboardHandler$$);
    $DvtTrainEvent$$.$setToggleEnabled$();
    $DvtAccordionDefaults$$ && $DvtTrainEvent$$.$setToggled$($DvtAccordionDefaults$$);
    return $DvtTrainEvent$$;
  };
  $dvt$$9$$.$Obj$.$createSubclass$($DvtTrainEvent$$, $dvt$$9$$.$BaseComponentEvent$);
  $DvtTrainEvent$$.$TYPE$ = "dvtTrain";
  $DvtTrainEvent$$.prototype.$getIndex$ = function $$DvtTrainEvent$$$$$getIndex$$() {
    return this.$_index$;
  };
  $dvt$$9$$.$OverviewWindow$ = function $$dvt$$9$$$$OverviewWindow$$($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    this.Init($dvt$$9$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$);
  };
  $dvt$$9$$.$Obj$.$createSubclass$($dvt$$9$$.$OverviewWindow$, $dvt$$9$$.$Container$);
  $dvt$$9$$.$OverviewWindow$.$VIEWPORT_BG_COLOR$ = "viewport-bg-color";
  $dvt$$9$$.$OverviewWindow$.$VIEWPORT_BORDER_COLOR$ = "viewport-border-color";
  $dvt$$9$$.$OverviewWindow$.$OVERVIEW_DISCLOSED_KEY$ = "isOverviewDisclosed";
  $dvt$$9$$.$OverviewWindow$.prototype.Init = function $$dvt$$9$$$$OverviewWindow$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    $dvt$$9$$.$OverviewWindow$.$superclass$.Init.call(this, $DvtTrainEvent$$, null, $DvtAccordionDefaults$$);
    this.$_x$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_y$ = $DvtPanelDrawerEventManager$$;
    this.$_ww$ = $DvtPanelDrawerTab$$;
    this.$_hh$ = $DvtBreadcrumbsPeer$$;
    this.$_skinStyle$ = null;
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$render$ = function $$dvt$$9$$$$OverviewWindow$$$$render$$() {
    this.$_md$ = !1;
    this.$_panEnable$ = !0;
    this.$_overview$ && ($dvt$$9$$.$Agent$.$isTouchDevice$() ? (this.$_overview$.$removeEvtListener$($dvt$$9$$.TouchEvent.$TOUCHSTART$, this.$_mouseDown$, !1, this), this.$_overview$.$removeEvtListener$($dvt$$9$$.TouchEvent.$TOUCHMOVE$, this.$_mouseMove$, !1, this), this.$_overview$.$removeEvtListener$($dvt$$9$$.TouchEvent.$TOUCHEND$, this.$_mouseUp$, !1, this)) : (this.$_overview$.$removeEvtListener$($dvt$$9$$.MouseEvent.$MOUSEDOWN$, this.$_mouseDown$, !1, this), this.$_overview$.$removeEvtListener$($dvt$$9$$.MouseEvent.$MOUSEMOVE$, 
    this.$_mouseMove$, !1, this), this.$_overview$.$removeEvtListener$($dvt$$9$$.MouseEvent.$MOUSEUP$, this.$_mouseUp$, !1, this), this.$_overview$.$removeEvtListener$($dvt$$9$$.MouseEvent.$MOUSEOUT$, this.$_mouseOut$, !1, this)), this.$_overview$.$setClipPath$(null));
    this.$removeChildren$();
    this.$_overview$ = this.$_viewport$ = null;
    var $DvtTrainEvent$$ = new $dvt$$9$$.$ClipPath$(this.getId());
    $DvtTrainEvent$$.$addRect$(0, 0, this.$_ww$, this.$_hh$);
    this.$_overview$ = new $dvt$$9$$.Rect(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
    this.$_overview$.$setClipPath$($DvtTrainEvent$$);
    this.$_overview$.$setInvisibleFill$();
    this.$addChild$(this.$_overview$);
    this.$_viewport$ = new $dvt$$9$$.Rect(this.$_context$, 0, 0, 0, 0, this.getId() + ":viewport");
    $DvtTrainEvent$$ = this.$getSkinStyleAttr$($dvt$$9$$.$OverviewWindow$.$VIEWPORT_BG_COLOR$);
    this.$_viewport$.$setSolidStroke$(this.$getSkinStyleAttr$($dvt$$9$$.$OverviewWindow$.$VIEWPORT_BORDER_COLOR$), null, 2);
    this.$_viewport$.$setSolidFill$($DvtTrainEvent$$);
    this.$_viewport$.$setMouseEnabled$(!1);
    this.$_overview$.$addChild$(this.$_viewport$);
    $dvt$$9$$.$Agent$.$isTouchDevice$() ? (this.$_overview$.$addEvtListener$($dvt$$9$$.TouchEvent.$TOUCHSTART$, this.$_mouseDown$, !1, this), this.$_overview$.$addEvtListener$($dvt$$9$$.TouchEvent.$TOUCHMOVE$, this.$_mouseMove$, !1, this), this.$_overview$.$addEvtListener$($dvt$$9$$.TouchEvent.$TOUCHEND$, this.$_mouseUp$, !1, this)) : (this.$_overview$.$addEvtListener$($dvt$$9$$.MouseEvent.$MOUSEDOWN$, this.$_mouseDown$, !1, this), this.$_overview$.$addEvtListener$($dvt$$9$$.MouseEvent.$MOUSEMOVE$, 
    this.$_mouseMove$, !1, this), this.$_overview$.$addEvtListener$($dvt$$9$$.MouseEvent.$MOUSEUP$, this.$_mouseUp$, !1, this), this.$_overview$.$addEvtListener$($dvt$$9$$.MouseEvent.$MOUSEOUT$, this.$_mouseOut$, !1, this));
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$loadXmlNode$ = function $$dvt$$9$$$$OverviewWindow$$$$loadXmlNode$$($dvt$$9$$) {
    this.$_isDisclosed$ = "true" == $dvt$$9$$.$getAttr$("disclosed");
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$isDisclosed$ = function $$dvt$$9$$$$OverviewWindow$$$$isDisclosed$$() {
    return this.$_isDisclosed$;
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$setDisclosed$ = function $$dvt$$9$$$$OverviewWindow$$$$setDisclosed$$($dvt$$9$$) {
    this.$_isDisclosed$ = $dvt$$9$$;
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$getContentAreaWidth$ = function $$dvt$$9$$$$OverviewWindow$$$$getContentAreaWidth$$() {
    return this.$getContentDimensions$().$w$;
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$getContentAreaHeight$ = function $$dvt$$9$$$$OverviewWindow$$$$getContentAreaHeight$$() {
    return this.$getContentDimensions$().$h$;
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$getContentDimensions$ = function $$dvt$$9$$$$OverviewWindow$$$$getContentDimensions$$() {
    return new $dvt$$9$$.$Rectangle$(this.$_x$, this.$_y$, this.$_ww$, this.$_hh$);
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$setViewportDimensions$ = function $$dvt$$9$$$$OverviewWindow$$$$setViewportDimensions$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$ = this.$TransformFromContentToViewportCoords$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$TransformFromContentToViewportCoords$($DvtTrainEvent$$.x + $DvtTrainEvent$$.$w$, $DvtTrainEvent$$.y + $DvtTrainEvent$$.$h$, $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.x, $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerKeyboardHandler$$.y, $DvtBreadcrumbsEventManager$$ = $DvtPanelDrawerEventManager$$.x - 
    $DvtPanelDrawerKeyboardHandler$$.x, $DvtPanelDrawerKeyboardHandler$$ = $DvtPanelDrawerEventManager$$.y - $DvtPanelDrawerKeyboardHandler$$.y;
    $DvtAccordionDefaults$$ ? ($DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.$getX$, this.$_viewport$.$setX$, $DvtPanelDrawerTab$$), $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.$getY$, this.$_viewport$.$setY$, $DvtBreadcrumbsPeer$$), $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.getWidth, this.$_viewport$.$setWidth$, $DvtBreadcrumbsEventManager$$), 
    $DvtAccordionDefaults$$.$addProp$($dvt$$9$$.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.getHeight, this.$_viewport$.$setHeight$, $DvtPanelDrawerKeyboardHandler$$)) : (this.$_viewport$.$setX$($DvtPanelDrawerTab$$), this.$_viewport$.$setY$($DvtBreadcrumbsPeer$$), this.$_viewport$.$setWidth$($DvtBreadcrumbsEventManager$$), this.$_viewport$.$setHeight$($DvtPanelDrawerKeyboardHandler$$));
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$getViewportDimensions$ = function $$dvt$$9$$$$OverviewWindow$$$$getViewportDimensions$$() {
    var $DvtTrainEvent$$ = this.$TransformFromViewportToContentCoords$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$()), $DvtAccordionDefaults$$ = this.$TransformFromViewportToContentCoords$(this.$_viewport$.$getX$() + this.$_viewport$.getWidth(), this.$_viewport$.$getY$() + this.$_viewport$.getHeight());
    return new $dvt$$9$$.$Rectangle$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtAccordionDefaults$$.x - $DvtTrainEvent$$.x, $DvtAccordionDefaults$$.y - $DvtTrainEvent$$.y);
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$setContent$ = function $$dvt$$9$$$$OverviewWindow$$$$setContent$$($dvt$$9$$) {
    var $DvtTrainEvent$$ = this.$getViewportDimensions$();
    this.$_content$ && this.$_overview$.removeChild(this.$_content$);
    this.$_content$ = $dvt$$9$$;
    this.$_overview$.$addChildAt$($dvt$$9$$, 0);
    this.$setViewportDimensions$($DvtTrainEvent$$);
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$_mouseDown$ = function $$dvt$$9$$$$OverviewWindow$$$$_mouseDown$$($DvtTrainEvent$$) {
    if (!this.$_md$ && this.$_panEnable$) {
      this.$_md$ = !0;
      var $DvtAccordionDefaults$$ = this.$_getRelativePosition$($DvtTrainEvent$$);
      $DvtTrainEvent$$ = new $dvt$$9$$.$ViewportChangeEvent$(this.$getViewportDimensions$(), this.$_getCenteredViewportDimensions$($DvtAccordionDefaults$$), $DvtTrainEvent$$);
      this.$FireListener$($DvtTrainEvent$$);
    }
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$_mouseMove$ = function $$dvt$$9$$$$OverviewWindow$$$$_mouseMove$$($DvtTrainEvent$$) {
    if (this.$_md$ && this.$_panEnable$) {
      var $DvtAccordionDefaults$$ = this.$_getRelativePosition$($DvtTrainEvent$$);
      $DvtTrainEvent$$ = new $dvt$$9$$.$ViewportChangeEvent$(this.$getViewportDimensions$(), this.$_getCenteredViewportDimensions$($DvtAccordionDefaults$$), $DvtTrainEvent$$);
      this.$FireListener$($DvtTrainEvent$$);
    }
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$_mouseUp$ = function $$dvt$$9$$$$OverviewWindow$$$$_mouseUp$$() {
    this.$_md$ && this.$_panEnable$ && (this.$_md$ = !1);
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$_mouseOut$ = function $$dvt$$9$$$$OverviewWindow$$$$_mouseOut$$() {
    this.$_mouseUp$();
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$_getRelativePosition$ = function $$dvt$$9$$$$OverviewWindow$$$$_getRelativePosition$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$;
    $dvt$$9$$.$Agent$.$isTouchDevice$() ? ($DvtTrainEvent$$ = $DvtTrainEvent$$.touches, 0 < $DvtTrainEvent$$.length && ($DvtAccordionDefaults$$ = $DvtTrainEvent$$[0].pageX, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$[0].pageY)) : ($DvtAccordionDefaults$$ = $DvtTrainEvent$$.pageX, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.pageY);
    return this.$_context$.$pageToStageCoords$($DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$TransformFromViewportToContentCoords$ = function $$dvt$$9$$$$OverviewWindow$$$$TransformFromViewportToContentCoords$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$ = 0, $DvtPanelDrawerEventManager$$ = 0, $DvtPanelDrawerTab$$ = 1, $DvtBreadcrumbsPeer$$ = 1;
    this.$_content$ && ($DvtPanelDrawerKeyboardHandler$$ = this.$_content$.$getTranslateX$(), $DvtPanelDrawerEventManager$$ = this.$_content$.$getTranslateY$(), $DvtPanelDrawerTab$$ = this.$_content$.$getScaleX$(), $DvtBreadcrumbsPeer$$ = this.$_content$.$getScaleY$());
    return new $dvt$$9$$.$Point$(($DvtTrainEvent$$ - $DvtPanelDrawerKeyboardHandler$$) / $DvtPanelDrawerTab$$, ($DvtAccordionDefaults$$ - $DvtPanelDrawerEventManager$$) / $DvtBreadcrumbsPeer$$);
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$TransformFromContentToViewportCoords$ = function $$dvt$$9$$$$OverviewWindow$$$$TransformFromContentToViewportCoords$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = 0, $DvtPanelDrawerTab$$ = 0, $DvtBreadcrumbsPeer$$ = 1, $DvtBreadcrumbsEventManager$$ = 1;
    this.$_content$ && ($DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, this.$_content$.$getTranslateX$, !0) : this.$_content$.$getTranslateX$(), $DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, this.$_content$.$getTranslateY$, !0) : this.$_content$.$getTranslateY$(), $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, 
    this.$_content$.$getScaleX$, !0) : this.$_content$.$getScaleX$(), $DvtBreadcrumbsEventManager$$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, this.$_content$.$getScaleY$, !0) : this.$_content$.$getScaleY$());
    return new $dvt$$9$$.$Point$($DvtTrainEvent$$ * $DvtBreadcrumbsPeer$$ + $DvtPanelDrawerEventManager$$, $DvtAccordionDefaults$$ * $DvtBreadcrumbsEventManager$$ + $DvtPanelDrawerTab$$);
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$getSkinStyle$ = function $$dvt$$9$$$$OverviewWindow$$$$getSkinStyle$$() {
    return this.$_skinStyle$;
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$setSkinStyle$ = function $$dvt$$9$$$$OverviewWindow$$$$setSkinStyle$$($dvt$$9$$) {
    this.$_skinStyle$ = $dvt$$9$$;
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$getSkinStyleAttr$ = function $$dvt$$9$$$$OverviewWindow$$$$getSkinStyleAttr$$($dvt$$9$$) {
    return this.$_skinStyle$ && "undefined" != this.$_skinStyle$[$dvt$$9$$] ? this.$_skinStyle$[$dvt$$9$$] : null;
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$_getCenteredViewportDimensions$ = function $$dvt$$9$$$$OverviewWindow$$$$_getCenteredViewportDimensions$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$_overview$.$localToStage$(new $dvt$$9$$.$Point$(0, 0)), $DvtPanelDrawerKeyboardHandler$$ = this.$_viewport$.$getDimensions$(), $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.x - $DvtAccordionDefaults$$.x - $DvtPanelDrawerKeyboardHandler$$.$w$ / 2, $DvtAccordionDefaults$$ = $DvtTrainEvent$$.y - $DvtAccordionDefaults$$.y - $DvtPanelDrawerKeyboardHandler$$.$h$ / 2;
    $DvtTrainEvent$$ = this.$TransformFromViewportToContentCoords$($DvtPanelDrawerEventManager$$, $DvtAccordionDefaults$$);
    $DvtPanelDrawerKeyboardHandler$$ = this.$TransformFromViewportToContentCoords$($DvtPanelDrawerEventManager$$ + $DvtPanelDrawerKeyboardHandler$$.$w$, $DvtAccordionDefaults$$ + $DvtPanelDrawerKeyboardHandler$$.$h$);
    return new $dvt$$9$$.$Rectangle$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtPanelDrawerKeyboardHandler$$.x - $DvtTrainEvent$$.x, $DvtPanelDrawerKeyboardHandler$$.y - $DvtTrainEvent$$.y);
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$SetViewportRectangle$ = function $$dvt$$9$$$$OverviewWindow$$$$SetViewportRectangle$$($dvt$$9$$) {
    this.$_viewport$.$setX$($dvt$$9$$.x);
    this.$_viewport$.$setY$($dvt$$9$$.y);
    this.$_viewport$.$setWidth$($dvt$$9$$.$w$);
    this.$_viewport$.$setHeight$($dvt$$9$$.$h$);
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$GetViewportRectangle$ = function $$dvt$$9$$$$OverviewWindow$$$$GetViewportRectangle$$() {
    return new $dvt$$9$$.$Rectangle$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$(), this.$_viewport$.getWidth(), this.$_viewport$.getHeight());
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$getDimensions$ = function $$dvt$$9$$$$OverviewWindow$$$$getDimensions$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = new $dvt$$9$$.$Rectangle$(0, 0, this.$_ww$, this.$_hh$);
    return $DvtTrainEvent$$ && $DvtTrainEvent$$ !== this ? this.$ConvertCoordSpaceRect$($DvtAccordionDefaults$$, $DvtTrainEvent$$) : $DvtAccordionDefaults$$;
  };
  $dvt$$9$$.$OverviewWindow$.prototype.$getDimensionsWithStroke$ = function $$dvt$$9$$$$OverviewWindow$$$$getDimensionsWithStroke$$($dvt$$9$$) {
    return this.$getDimensions$($dvt$$9$$);
  };
  $dvt$$9$$.$Bundle$.$addDefaultStrings$($dvt$$9$$.$Bundle$.$SUBCOMPONENT_PREFIX$, {CONTROL_PANEL:"Control Panel", CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center", CONTROL_PANEL_PAN:"Pan", CONTROL_PANEL_LAYOUT:"Layout", CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down", CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up", CONTROL_PANEL_LAYOUT_HORIZ_START:"Horizontal, Start-to-End", CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right", CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left", 
  CONTROL_PANEL_LAYOUT_RADIAL:"Radial", CONTROL_PANEL_LAYOUT_TREE:"Tree", CONTROL_PANEL_LAYOUT_CIRCLE:"Circle", CONTROL_PANEL_SYNC:"View", CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit", CONTROL_PANEL_ZOOMIN:"Zoom In", CONTROL_PANEL_ZOOMOUT:"Zoom Out", CONTROL_PANEL_RESET:"Reset Map", CONTROL_PANEL_DRILLUP:"Drill Up", CONTROL_PANEL_DRILLDOWN:"Drill Down", LEGEND:"Legend", OVERVIEW:"Overview", PALETTE:"Palette", SEARCH:"Search", SEARCH_TEXT:"Search", SEARCH_TEXT_ALTA:"Find", SEARCH_RESULTS:"Search Results [{0}]", 
  SEARCH_RESULTS_ALTA:"{0} Results", SEARCH_RESULTS_CLOSE:"Close", SEARCH_RESULTS_NO_DATA:"No results to display"});
})(dvt);

  return dvt;
});
