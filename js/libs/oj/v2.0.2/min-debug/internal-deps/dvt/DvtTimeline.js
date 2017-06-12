/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtTimeAxis', './DvtOverview', './DvtTimeComponent'], function(dvt) {
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

dvt.$TimelineOverview$ = function $dvt$$TimelineOverview$$($context$$431$$, $callback$$166$$, $callbackObj$$97$$) {
  this.Init($context$$431$$, $callback$$166$$, $callbackObj$$97$$);
};
$goog$exportPath_$$("dvt.TimelineOverview", dvt.$TimelineOverview$);
dvt.$Obj$.$createSubclass$(dvt.$TimelineOverview$, dvt.$Overview$);
dvt.$TimelineOverview$.$ENABLED_STATE$ = "_";
dvt.$TimelineOverview$.$HOVER_STATE$ = "_h";
dvt.$TimelineOverview$.$SELECTED_STATE$ = "_s";
dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$ = "_as";
dvt.$TimelineOverview$.$BORDER_STYLE$ = "bs";
dvt.$TimelineOverview$.$BORDER_COLOR$ = "bc";
dvt.$TimelineOverview$.$BORDER_WIDTH$ = "bw";
dvt.$TimelineOverview$.$DURATION_BORDER_STYLE$ = "dbs";
dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$ = "dbc";
dvt.$TimelineOverview$.$DURATION_BORDER_WIDTH$ = "dbw";
dvt.$TimelineOverview$.$BORDER_OFFSET$ = "bof";
dvt.$TimelineOverview$.$BORDER_OPACITY$ = "bo";
dvt.$TimelineOverview$.$GLOW_COLOR$ = "gc";
dvt.$TimelineOverview$.$GLOW_OPACITY$ = "go";
dvt.$TimelineOverview$.$FILL_COLOR$ = "fc";
dvt.$TimelineOverview$.newInstance = function $dvt$$TimelineOverview$$newInstance$($context$$432$$, $callback$$167$$, $callbackObj$$98$$) {
  return new dvt.$TimelineOverview$($context$$432$$, $callback$$167$$, $callbackObj$$98$$);
};
dvt.$TimelineOverview$.newInstance = dvt.$TimelineOverview$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$TimelineOverview$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($colors$$4_context$$433$$, $callback$$168$$, $callbackObj$$99$$) {
  dvt.$TimelineOverview$.$superclass$.Init.call(this, $colors$$4_context$$433$$, $callback$$168$$, $callbackObj$$99$$);
  $colors$$4_context$$433$$ = [dvt.$ColorUtils$.$getPound$(dvt.$ColorUtils$.$getPastel$("#aadd77", .35)), "#aadd77", dvt.$ColorUtils$.$getPound$(dvt.$ColorUtils$.$getDarker$("#aadd77", .5))];
  dvt.$OverviewUtils$.$supportsTouch$() && ($colors$$4_context$$433$$ = ["#aadd77"]);
  this.$_defColors$ = $colors$$4_context$$433$$;
  this.$_markerBorderFill$ = dvt.$SolidFill$.$invisibleFill$();
  this.$_markerSize$ = 12;
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$315$$, $width$$143$$, $height$$119$$) {
  "string" === typeof $options$$315$$ ? dvt.$TimelineOverview$.$superclass$.$render$.call(this, $JSCompiler_StaticMethods__getConvertedOptions$$(this, $options$$315$$), $width$$143$$, $height$$119$$) : dvt.$TimelineOverview$.$superclass$.$render$.call(this, $options$$315$$, $width$$143$$, $height$$119$$);
};
function $JSCompiler_StaticMethods__getConvertedOptions$$($JSCompiler_StaticMethods__getConvertedOptions$self$$, $xmlOptions$$) {
  for (var $options$$316$$ = {}, $j$$105_rootNode$$4$$ = (new dvt.$XmlParser$($JSCompiler_StaticMethods__getConvertedOptions$self$$.$getCtx$())).parse($xmlOptions$$), $attributes$$4$$ = $j$$105_rootNode$$4$$.getAttributes(), $i$$673$$ = 0;$i$$673$$ < $attributes$$4$$.length;$i$$673$$++) {
    var $attr$$23$$ = $attributes$$4$$[$i$$673$$];
    $options$$316$$[$attr$$23$$.name] = $attr$$23$$.value;
  }
  for (var $childNodes$$21_formattedTimeRangeNodes$$ = $j$$105_rootNode$$4$$.$getChildNodes$(), $formattedTimeRanges_markers$$13_ticks$$ = [], $markerNodes_tickNodes_timeRange$$ = $childNodes$$21_formattedTimeRangeNodes$$[0].$getChildNodes$(), $i$$673$$ = 0;$i$$673$$ < $markerNodes_tickNodes_timeRange$$.length;$i$$673$$++) {
    for (var $marker$$16_tick$$1$$ = {}, $attributes$$4$$ = $markerNodes_tickNodes_timeRange$$[$i$$673$$].getAttributes(), $j$$105_rootNode$$4$$ = 0;$j$$105_rootNode$$4$$ < $attributes$$4$$.length;$j$$105_rootNode$$4$$++) {
      $attr$$23$$ = $attributes$$4$$[$j$$105_rootNode$$4$$], $marker$$16_tick$$1$$[$attr$$23$$.name] = $attr$$23$$.value;
    }
    $formattedTimeRanges_markers$$13_ticks$$.push($marker$$16_tick$$1$$);
  }
  $options$$316$$.axisTicks = $formattedTimeRanges_markers$$13_ticks$$;
  $formattedTimeRanges_markers$$13_ticks$$ = [];
  $markerNodes_tickNodes_timeRange$$ = $childNodes$$21_formattedTimeRangeNodes$$[1].$getChildNodes$();
  for ($i$$673$$ = 0;$i$$673$$ < $markerNodes_tickNodes_timeRange$$.length;$i$$673$$++) {
    $marker$$16_tick$$1$$ = {};
    $attributes$$4$$ = $markerNodes_tickNodes_timeRange$$[$i$$673$$].getAttributes();
    for ($j$$105_rootNode$$4$$ = 0;$j$$105_rootNode$$4$$ < $attributes$$4$$.length;$j$$105_rootNode$$4$$++) {
      $attr$$23$$ = $attributes$$4$$[$j$$105_rootNode$$4$$], $marker$$16_tick$$1$$[$attr$$23$$.name] = $attr$$23$$.value;
    }
    $formattedTimeRanges_markers$$13_ticks$$.push($marker$$16_tick$$1$$);
  }
  $options$$316$$.markers = $formattedTimeRanges_markers$$13_ticks$$;
  if (2 < $childNodes$$21_formattedTimeRangeNodes$$.length) {
    $formattedTimeRanges_markers$$13_ticks$$ = [];
    $childNodes$$21_formattedTimeRangeNodes$$ = $childNodes$$21_formattedTimeRangeNodes$$[2].$getChildNodes$();
    for ($i$$673$$ = 0;$i$$673$$ < $childNodes$$21_formattedTimeRangeNodes$$.length;$i$$673$$++) {
      $markerNodes_tickNodes_timeRange$$ = {};
      $attributes$$4$$ = $childNodes$$21_formattedTimeRangeNodes$$[$i$$673$$].getAttributes();
      for ($j$$105_rootNode$$4$$ = 0;$j$$105_rootNode$$4$$ < $attributes$$4$$.length;$j$$105_rootNode$$4$$++) {
        $attr$$23$$ = $attributes$$4$$[$j$$105_rootNode$$4$$], $markerNodes_tickNodes_timeRange$$[$attr$$23$$.name] = $attr$$23$$.value;
      }
      $formattedTimeRanges_markers$$13_ticks$$.push($markerNodes_tickNodes_timeRange$$);
    }
    $options$$316$$.formattedTimeRanges = $formattedTimeRanges_markers$$13_ticks$$;
  }
  return $options$$316$$;
}
$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new $DvtTimelineOverviewParser$$(this);
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($_eOffset_borderOpacity_props$$13$$) {
  dvt.$TimelineOverview$.$superclass$.$_applyParsedProperties$.call(this, $_eOffset_borderOpacity_props$$13$$);
  this.$_selectionMode$ = $_eOffset_borderOpacity_props$$13$$.$selectionMode$;
  this.$_markers$ = $_eOffset_borderOpacity_props$$13$$.$markers$;
  this.$_seriesIds$ = $_eOffset_borderOpacity_props$$13$$.$seriesIds$;
  this.$_defaultMarkerStyles$ = $_eOffset_borderOpacity_props$$13$$.$defaultMarkerStyles$;
  this.$_durationColors$ = "#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");
  $_eOffset_borderOpacity_props$$13$$.$labelStyle$ && (this.$_labelStyle$ = new dvt.$CSSStyle$($_eOffset_borderOpacity_props$$13$$.$labelStyle$));
  $_eOffset_borderOpacity_props$$13$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1;
  var $_asOffset$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1, $_sOffset$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1;
  this.$_markerSpacingOffset$ = "none" != this.$_selectionMode$ ? Math.max($_asOffset$$, $_sOffset$$, $_eOffset_borderOpacity_props$$13$$, 1) / 2 + 1 : 1;
  this.$_defOpacity$ = this.$isVertical$() ? 0 : .75;
  this.$_defAlphas$ = [this.$_defOpacity$, this.$_defOpacity$, this.$_defOpacity$];
  this.$_radialFill$ = new dvt.$LinearGradientFill$(250, this.$_defColors$, this.$_defAlphas$);
  this.$_linearFill$ = new dvt.$LinearGradientFill$(180, this.$_defColors$, this.$_defAlphas$);
  $_eOffset_borderOpacity_props$$13$$ = this.$isVertical$() ? 0 : 1;
  this.$_border$ = new dvt.$SolidStroke$("#aadd77", $_eOffset_borderOpacity_props$$13$$);
};
function $JSCompiler_StaticMethods_getSeriesIds$$($JSCompiler_StaticMethods_getSeriesIds$self$$) {
  return null == $JSCompiler_StaticMethods_getSeriesIds$self$$.$_seriesIds$ ? null : $JSCompiler_StaticMethods_getSeriesIds$self$$.$_seriesIds$.split(" ");
}
$JSCompiler_prototypeAlias$$.$addLabel$ = function $$JSCompiler_prototypeAlias$$$$addLabel$$($pos$$76$$, $text$$80$$, $width$$144$$, $height$$120$$, $maxWidth$$24$$, $id$$211$$) {
  dvt.$TimelineOverview$.$superclass$.$addLabel$.call(this, $pos$$76$$, $text$$80$$, $width$$144$$, $height$$120$$, $maxWidth$$24$$, $id$$211$$, this.$_labelStyle$);
};
function $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_getDrawableById$self$$, $id$$212$$) {
  for (var $drawableId$$1$$ = "_mrk_" + $id$$212$$, $durationId$$1$$ = "_drn_" + $id$$212$$, $numChildren$$15$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getNumChildren$(), $childIndex$$8$$ = 0;$childIndex$$8$$ < $numChildren$$15$$;$childIndex$$8$$++) {
    var $drawable$$7$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getChildAt$($childIndex$$8$$);
    if (null != $drawable$$7$$ && ($drawableId$$1$$ == $drawable$$7$$.getId() || $durationId$$1$$ == $drawable$$7$$.getId())) {
      return $drawable$$7$$;
    }
  }
  return null;
}
$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$($drawable$$8$$) {
  return $drawable$$8$$.getId().substr(5);
};
$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$($state$$98$$, $style$$113$$) {
  return this.$_borderStyles$[$state$$98$$ + $style$$113$$];
};
$JSCompiler_prototypeAlias$$.$getX$ = function $$JSCompiler_prototypeAlias$$$$getX$$($drawable$$9$$) {
  return null != $drawable$$9$$.$_node$ ? $drawable$$9$$.$_node$.$getX$() : $drawable$$9$$.$getMatrix$().$_tx$;
};
$JSCompiler_prototypeAlias$$.$getY$ = function $$JSCompiler_prototypeAlias$$$$getY$$($drawable$$10$$) {
  return null != $drawable$$10$$.$_node$ ? $drawable$$10$$.$_node$.$getY$() : $drawable$$10$$.$getMatrix$().$_ty$;
};
$JSCompiler_prototypeAlias$$.$getScaleX$ = function $$JSCompiler_prototypeAlias$$$$getScaleX$$($node$$300_scaleX$$4$$) {
  $node$$300_scaleX$$4$$ = $node$$300_scaleX$$4$$.$getScaleX$();
  null == $node$$300_scaleX$$4$$ && ($node$$300_scaleX$$4$$ = this.$isVertical$() ? (this.$Width$ - this.$getTimeAxisWidth$() - 4) / 2 : 1);
  return $node$$300_scaleX$$4$$;
};
$JSCompiler_prototypeAlias$$.$getScaleY$ = function $$JSCompiler_prototypeAlias$$$$getScaleY$$($node$$301_scaleY$$4$$) {
  $node$$301_scaleY$$4$$ = $node$$301_scaleY$$4$$.$getScaleY$();
  null == $node$$301_scaleY$$4$$ && ($node$$301_scaleY$$4$$ = 1);
  return $node$$301_scaleY$$4$$;
};
$JSCompiler_prototypeAlias$$.$parseDataXML$ = function $$JSCompiler_prototypeAlias$$$$parseDataXML$$($width$$145$$, $height$$121$$) {
  dvt.$TimelineOverview$.$superclass$.$parseDataXML$.call(this, $width$$145$$, $height$$121$$);
  if (null != this.$_markers$) {
    for (var $opt$$ = $JSCompiler_StaticMethods_calculateOptimalSize$$(this, this.$_start$, this.$_end$, $width$$145$$, $height$$121$$, this.$_markerSize$), $durationMarkers$$ = [], $context$$inline_4146_j$$106$$ = 0;$context$$inline_4146_j$$106$$ < this.$_markers$.length;$context$$inline_4146_j$$106$$++) {
      var $i$$inline_4147_marker$$17_node$$inline_4121$$ = this.$_markers$[$context$$inline_4146_j$$106$$];
      if (null == $i$$inline_4147_marker$$17_node$$inline_4121$$.$_endTime$) {
        var $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$ = $opt$$, $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$ = "_mrk_" + $i$$inline_4147_marker$$17_node$$inline_4121$$.getId(), $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$ = $i$$inline_4147_marker$$17_node$$inline_4121$$.$getColor$(), $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$ = $i$$inline_4147_marker$$17_node$$inline_4121$$.$_gradient$, 
        $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$ = $i$$inline_4147_marker$$17_node$$inline_4121$$.$getOpacity$();
        null == $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$ && ($durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$ = this.$_defOpacity$, 0 == $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$ && null != $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$ && ($durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$ = 1));
        var $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ = this.$getScaleX$($i$$inline_4147_marker$$17_node$$inline_4121$$), $cx$$inline_4132_scaleY$$inline_4128$$ = this.$getScaleY$($i$$inline_4147_marker$$17_node$$inline_4121$$), $j$$inline_4148_marker$$inline_4129$$ = $i$$inline_4147_marker$$17_node$$inline_4121$$.$getShape$();
        if (this.$isVertical$()) {
          var $j$$inline_4148_marker$$inline_4129$$ = dvt.$SimpleMarker$.$RECTANGLE$, $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ = 2 * $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$, $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$ = 2 * $cx$$inline_4132_scaleY$$inline_4128$$, $cx$$inline_4132_scaleY$$inline_4128$$ = $i$$inline_4147_marker$$17_node$$inline_4121$$.$getY$() + 
          $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ / 2, $cy$$inline_4133$$ = $i$$inline_4147_marker$$17_node$$inline_4121$$.$getX$() + $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$ / 2
        } else {
          $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ *= $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$, $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$ *= $cx$$inline_4132_scaleY$$inline_4128$$, $cx$$inline_4132_scaleY$$inline_4128$$ = $i$$inline_4147_marker$$17_node$$inline_4121$$.$getX$() + $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ / 
          2, $cy$$inline_4133$$ = $i$$inline_4147_marker$$17_node$$inline_4121$$.$getY$() + $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$ / 2;
        }
        $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$ = new dvt.$SimpleMarker$(this.$getCtx$(), $j$$inline_4148_marker$$inline_4129$$, null, $cx$$inline_4132_scaleY$$inline_4128$$, $cy$$inline_4133$$, $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$, $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$, null, null, null, $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$);
        $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$.$_node$ = $i$$inline_4147_marker$$17_node$$inline_4121$$;
        null == $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$ && $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$ == this.$_defOpacity$ && null == $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$ ? ($duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$ = $j$$inline_4148_marker$$inline_4129$$ == dvt.$SimpleMarker$.$CIRCLE$ ? this.$_radialFill$ : this.$_linearFill$, $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$ = 
        this.$_border$) : ($colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ = this.$_defColors$, null != $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$ && (dvt.$OverviewUtils$.$supportsTouch$() ? $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ = [$color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$] : ($colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ = 
        dvt.$ColorUtils$.$getPastel$($color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$, .5), $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$ = dvt.$ColorUtils$.$getDarker$($color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$, .5), $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ = [$colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$, 
        $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$, $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$])), $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$ = [$durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$, $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$, $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$], $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$ = 
        null == $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$ ? $j$$inline_4148_marker$$inline_4129$$ == dvt.$SimpleMarker$.$CIRCLE$ ? new dvt.$LinearGradientFill$(250, $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$, $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$) : new dvt.$LinearGradientFill$(180, $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$, 
        $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$) : new dvt.$SolidFill$($color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$, $alphas$$inline_4138_darker$$inline_4137_height$$inline_4131_sz$$inline_4122$$[0]), $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$ = new dvt.$SolidStroke$($color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$, $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$));
        $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$.$setFill$($duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$);
        $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$.$setStroke$($color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$);
        "none" != this.$_selectionMode$ && $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$.$setSelectable$(!0);
        $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$ = this.$getNumChildren$();
        $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$ = this.$getChildAt$($color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$ - 1);
        $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$ > this.$_lastChildIndex$ && ("tb" == $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$.getId() || "arr" == $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$.getId()) ? this.$addChildAt$($displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$, $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$ - this.$_lastChildIndex$) : 
        this.$addChild$($displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$);
        $i$$inline_4147_marker$$17_node$$inline_4121$$.$setDisplayable$($displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$);
        this.$applyState$($displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$, dvt.$TimelineOverview$.$ENABLED_STATE$);
        !this.$isVertical$() && $j$$inline_4148_marker$$inline_4129$$ != dvt.$SimpleMarker$.$RECTANGLE$ && $j$$inline_4148_marker$$inline_4129$$ != dvt.$SimpleMarker$.$DIAMOND$ && $j$$inline_4148_marker$$inline_4129$$ != dvt.$SimpleMarker$.$TRIANGLE_UP$ && $j$$inline_4148_marker$$inline_4129$$ != dvt.$SimpleMarker$.$TRIANGLE_DOWN$ && $j$$inline_4148_marker$$inline_4129$$ != dvt.$SimpleMarker$.$PLUS$ || "false" == this.$_defaultMarkerStyles$.$pixelHinting$ || $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$.$setPixelHinting$();
      } else {
        $durationMarkers$$[$durationMarkers$$.length] = $i$$inline_4147_marker$$17_node$$inline_4121$$;
      }
    }
    this.$prepareDurations$($durationMarkers$$);
    $context$$inline_4146_j$$106$$ = this.$getCtx$();
    for ($i$$inline_4147_marker$$17_node$$inline_4121$$ = this.$_maxDurationY$;0 < $i$$inline_4147_marker$$17_node$$inline_4121$$;$i$$inline_4147_marker$$17_node$$inline_4121$$--) {
      for ($j$$inline_4148_marker$$inline_4129$$ = 0;$j$$inline_4148_marker$$inline_4129$$ < $durationMarkers$$.length;$j$$inline_4148_marker$$inline_4129$$++) {
        $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$ = $durationMarkers$$[$j$$inline_4148_marker$$inline_4129$$], $i$$inline_4147_marker$$17_node$$inline_4121$$ == $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$.$_durationLevel$ && ($duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$ = dvt.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$.getTime(), 
        this.$isVertical$() ? this.$Height$ : this.$Width$), $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$ = "_drn_" + $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$.getId(), $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$ = 9 + 5 * $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$.$_durationLevel$, $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ = 
        dvt.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$.$_endTime$, this.$isVertical$() ? this.$Height$ : this.$Width$), $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$ = this.$isVertical$() ? this.$isRTL$() ? new dvt.Rect($context$$inline_4146_j$$106$$, 0, $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$, $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$, 
        $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ - $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$, $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$) : new dvt.Rect($context$$inline_4146_j$$106$$, this.$Width$ - $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$, $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$, 
        $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$, $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ - $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$, $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$) : this.$isRTL$() ? new dvt.Rect($context$$inline_4146_j$$106$$, this.$Width$ - $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$, 
        this.$Height$ - $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$ - 20, $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ - $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$, $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$, $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$) : new dvt.Rect($context$$inline_4146_j$$106$$, 
        $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$, this.$Height$ - $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$ - 20, $colors$$inline_4135_lighter$$inline_4136_scaleX$$inline_4127_width$$inline_4130_x2$$inline_4153$$ - $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$, $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$, $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$), 
        $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$.$setFill$(new dvt.$SolidFill$($color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$.$_durationFillColor$)), $displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$ = new dvt.$SolidStroke$(this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$), 1, 1), $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$.$setStroke$($displayable$$inline_4134_durationId$$inline_4151_feelerStroke$$inline_4155_itemId$$inline_4123$$), 
        $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$.$setPixelHinting$(), $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$.$_node$ = $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$, this.$addChild$($duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$), $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$.$_durationBar$ = $duration$$inline_4154_fill$$inline_4139_isGradient$$inline_4125_x$$inline_4150$$, 
        $color$$inline_4124_count$$inline_4141_node$$inline_4149_stroke$$inline_4140$$.$_durationY$ = $durationY$$inline_4152_lastChild$$inline_4142_opacity$$inline_4126$$ - 2);
      }
    }
    this.removeChild(this.$_timeAxisTopBar$);
    this.$addChild$(this.$_timeAxisTopBar$);
    this.$_markerSize$ = $opt$$;
  }
};
$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$($durationMarkers$$1$$) {
  this.$_maxDurationY$ = 0;
  var $markerSeries$$ = null;
  null == this.$_durationColorMap$ && (this.$_durationColorMap$ = {});
  for (var $i$$674$$ = 0;$i$$674$$ < $durationMarkers$$1$$.length;$i$$674$$++) {
    var $marker$$18$$ = $durationMarkers$$1$$[$i$$674$$], $id$$213$$ = $marker$$18$$.getId(), $sId$$2$$ = $id$$213$$.substring($id$$213$$.indexOf(":") + 1, $id$$213$$.length), $sId$$2$$ = $sId$$2$$.substring(0, $sId$$2$$.indexOf(":"));
    $sId$$2$$ != $markerSeries$$ && (this.$_colorCount$ = 0, $markerSeries$$ = $sId$$2$$);
    $marker$$18$$.$_durationLevel$ = $JSCompiler_StaticMethods_calculateDurationY$$(this, $marker$$18$$, $durationMarkers$$1$$);
    null == $marker$$18$$.$_durationFillColor$ && (null == this.$_durationColorMap$[$id$$213$$] ? (this.$_durationColorMap$[$id$$213$$] = this.$_colorCount$, $marker$$18$$.$_durationFillColor$ = this.$_durationColors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_durationColors$.length && (this.$_colorCount$ = 0)) : $marker$$18$$.$_durationFillColor$ = this.$_durationColors$[this.$_durationColorMap$[$id$$213$$]]);
  }
};
$JSCompiler_prototypeAlias$$.$getDurationColorMap$ = function $$JSCompiler_prototypeAlias$$$$getDurationColorMap$$() {
  return this.$_durationColorMap$ ? this.$_durationColorMap$ : null;
};
dvt.$TimelineOverview$.prototype.getDurationColorMap = dvt.$TimelineOverview$.prototype.$getDurationColorMap$;
function $JSCompiler_StaticMethods_calculateOptimalSize$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$49$$, $end$$31$$, $width$$146$$, $height$$122$$, $size$$40$$) {
  for (var $JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$, $JSCompiler_object_inline_maxy_5095_overlappingMarkers$$inline_5051_prevX$$inline_4178$$, $result$$2$$ = {max:1, $arr$:[]}, $canvasSize$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isVertical$() ? $height$$122$$ : $width$$146$$, $i$$675$$ = 0;$i$$675$$ < $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$.length;$i$$675$$++) {
    var $marker$$19_node$$inline_4162$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$[$i$$675$$];
    if (null != $marker$$19_node$$inline_4162$$.$_endTime$) {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$ = dvt.$OverviewUtils$.$getDatePosition$($start$$49$$, $end$$31$$, $marker$$19_node$$inline_4162$$.getTime(), $canvasSize$$);
      $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isHorizontalRTL$() && ($JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$ = $canvasSize$$ - $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$);
      $marker$$19_node$$inline_4162$$.$setX$($JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$);
    } else {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$, $cx$$inline_4171_start$$inline_4163$$ = $start$$49$$, $end$$inline_4164_overlappingMarkers$$inline_4175$$ = $end$$31$$, $cy$$inline_4173_size$$inline_4165$$ = $canvasSize$$, $borderOffset$$inline_4172_hsz$$inline_4166$$ = $size$$40$$ / 2, $result$$inline_4167$$ = $result$$2$$, $maxHeight$$inline_4168$$ = $height$$122$$, $hszx$$inline_4169$$ = $borderOffset$$inline_4172_hsz$$inline_4166$$ * 
      $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$getScaleX$($marker$$19_node$$inline_4162$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$_markerSpacingOffset$, $hszy$$inline_4170$$ = $borderOffset$$inline_4172_hsz$$inline_4166$$ * $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$getScaleY$($marker$$19_node$$inline_4162$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$_markerSpacingOffset$, $cx$$inline_4171_start$$inline_4163$$ = 
      dvt.$OverviewUtils$.$getDatePosition$($cx$$inline_4171_start$$inline_4163$$, $end$$inline_4164_overlappingMarkers$$inline_4175$$, $marker$$19_node$$inline_4162$$.getTime(), $cy$$inline_4173_size$$inline_4165$$);
      $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$isHorizontalRTL$() && ($cx$$inline_4171_start$$inline_4163$$ = $cy$$inline_4173_size$$inline_4165$$ - $cx$$inline_4171_start$$inline_4163$$ - 2 * $hszx$$inline_4169$$);
      if ($JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$isVertical$()) {
        $borderOffset$$inline_4172_hsz$$inline_4166$$ = 0, "solid" == $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) && ($borderOffset$$inline_4172_hsz$$inline_4166$$ = parseInt($JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_WIDTH$), 10)), $cy$$inline_4173_size$$inline_4165$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$isRTL$() ? 
        $borderOffset$$inline_4172_hsz$$inline_4166$$ + 4 : $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$Width$ - 2 * $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$getScaleX$($marker$$19_node$$inline_4162$$) - $borderOffset$$inline_4172_hsz$$inline_4166$$ - 4;
      } else {
        $cy$$inline_4173_size$$inline_4165$$ = 3;
        $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$isOverviewAbove$() && ($cy$$inline_4173_size$$inline_4165$$ += $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$getTimeAxisHeight$());
        for (var $maxy$$inline_4174_maxy$$inline_5057$$ = 0, $end$$inline_4164_overlappingMarkers$$inline_4175$$ = [], $i$$inline_4176$$ = 0;$i$$inline_4176$$ < $result$$inline_4167$$.$arr$.length;$i$$inline_4176$$++) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$ = $result$$inline_4167$$.$arr$[$i$$inline_4176$$];
          $JSCompiler_object_inline_maxy_5095_overlappingMarkers$$inline_5051_prevX$$inline_4178$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$.$getX$();
          var $prevScaleX$$inline_4179_shape$$inline_5052$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$getScaleX$($JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$);
          Math.abs($cx$$inline_4171_start$$inline_4163$$ - $JSCompiler_object_inline_maxy_5095_overlappingMarkers$$inline_5051_prevX$$inline_4178$$) < $borderOffset$$inline_4172_hsz$$inline_4166$$ * $prevScaleX$$inline_4179_shape$$inline_5052$$ + $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$.$_markerSpacingOffset$ + $hszx$$inline_4169$$ && $end$$inline_4164_overlappingMarkers$$inline_4175$$.push($JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$);
        }
        for ($i$$inline_4176$$ = 0;$i$$inline_4176$$ < $end$$inline_4164_overlappingMarkers$$inline_4175$$.length;$i$$inline_4176$$++) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_4161_x$$216$$;
          $JSCompiler_object_inline_maxy_5095_overlappingMarkers$$inline_5051_prevX$$inline_4178$$ = $end$$inline_4164_overlappingMarkers$$inline_4175$$;
          for (var $prevScaleX$$inline_4179_shape$$inline_5052$$ = $marker$$19_node$$inline_4162$$.$getShape$(), $cx$$inline_5053$$ = $cx$$inline_4171_start$$inline_4163$$, $cy$$inline_5054$$ = $cy$$inline_4173_size$$inline_4165$$, $hszx$$inline_5055$$ = $hszx$$inline_4169$$, $hszy$$inline_5056$$ = $hszy$$inline_4170$$, $hsz$$inline_5058$$ = $borderOffset$$inline_4172_hsz$$inline_4166$$, $maxHeight$$inline_5059$$ = $maxHeight$$inline_4168$$, $i$$inline_5060$$ = 0;$i$$inline_5060$$ < $JSCompiler_object_inline_maxy_5095_overlappingMarkers$$inline_5051_prevX$$inline_4178$$.length;$i$$inline_5060$$++) {
            var $prevMarker$$inline_5061_prevScaleY$$inline_5066$$ = $JSCompiler_object_inline_maxy_5095_overlappingMarkers$$inline_5051_prevX$$inline_4178$$[$i$$inline_5060$$], $prevX$$inline_5062_xDist$$inline_5067$$ = $prevMarker$$inline_5061_prevScaleY$$inline_5066$$.$getX$(), $prevY$$inline_5063$$ = $prevMarker$$inline_5061_prevScaleY$$inline_5066$$.$getY$(), $prevShape$$inline_5064$$ = $prevMarker$$inline_5061_prevScaleY$$inline_5066$$.$getShape$(), $height$$inline_5069_minDist$$inline_5068_prevScaleX$$inline_5065$$ = 
            $JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$.$getScaleX$($prevMarker$$inline_5061_prevScaleY$$inline_5066$$), $prevMarker$$inline_5061_prevScaleY$$inline_5066$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$.$getScaleY$($prevMarker$$inline_5061_prevScaleY$$inline_5066$$);
            $prevScaleX$$inline_4179_shape$$inline_5052$$ == dvt.$SimpleMarker$.$CIRCLE$ && $prevShape$$inline_5064$$ == dvt.$SimpleMarker$.$CIRCLE$ && $hszx$$inline_5055$$ == $hszy$$inline_5056$$ && $height$$inline_5069_minDist$$inline_5068_prevScaleX$$inline_5065$$ == $prevMarker$$inline_5061_prevScaleY$$inline_5066$$ ? ($prevX$$inline_5062_xDist$$inline_5067$$ = Math.abs($cx$$inline_5053$$ - $prevX$$inline_5062_xDist$$inline_5067$$), $height$$inline_5069_minDist$$inline_5068_prevScaleX$$inline_5065$$ = 
            $hsz$$inline_5058$$ * $height$$inline_5069_minDist$$inline_5068_prevScaleX$$inline_5065$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$.$_markerSpacingOffset$ + $hszx$$inline_5055$$, $height$$inline_5069_minDist$$inline_5068_prevScaleX$$inline_5065$$ = Math.sqrt($height$$inline_5069_minDist$$inline_5068_prevScaleX$$inline_5065$$ * $height$$inline_5069_minDist$$inline_5068_prevScaleX$$inline_5065$$ - $prevX$$inline_5062_xDist$$inline_5067$$ * 
            $prevX$$inline_5062_xDist$$inline_5067$$)) : $height$$inline_5069_minDist$$inline_5068_prevScaleX$$inline_5065$$ = $hsz$$inline_5058$$ * $prevMarker$$inline_5061_prevScaleY$$inline_5066$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$.$_markerSpacingOffset$ + $hszy$$inline_5056$$;
            if ($height$$inline_5069_minDist$$inline_5068_prevScaleX$$inline_5065$$ > Math.abs($cy$$inline_5054$$ - $prevY$$inline_5063$$) && ($cy$$inline_5054$$ = $prevY$$inline_5063$$ + $height$$inline_5069_minDist$$inline_5068_prevScaleX$$inline_5065$$, $maxy$$inline_4174_maxy$$inline_5057$$ = Math.max($maxy$$inline_4174_maxy$$inline_5057$$, $cy$$inline_5054$$ + $height$$inline_5069_minDist$$inline_5068_prevScaleX$$inline_5065$$), 1 <= $hsz$$inline_5058$$ && void 0 != $maxHeight$$inline_5059$$ && 
            $maxy$$inline_4174_maxy$$inline_5057$$ > $maxHeight$$inline_5059$$)) {
              break;
            }
          }
          $JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$ = $cy$$inline_5054$$;
          $maxy$$inline_4174_maxy$$inline_5057$$ = $JSCompiler_object_inline_maxy_5095_overlappingMarkers$$inline_5051_prevX$$inline_4178$$ = $maxy$$inline_4174_maxy$$inline_5057$$;
          if ($JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$ == $cy$$inline_4173_size$$inline_4165$$) {
            $cy$$inline_4173_size$$inline_4165$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$;
            break;
          } else {
            $cy$$inline_4173_size$$inline_4165$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_5050_JSCompiler_object_inline_cy_5094_prevMarker$$inline_4177$$;
          }
        }
      }
      $marker$$19_node$$inline_4162$$.$setX$($cx$$inline_4171_start$$inline_4163$$);
      $marker$$19_node$$inline_4162$$.$setY$($cy$$inline_4173_size$$inline_4165$$);
      $result$$inline_4167$$.$arr$.push($marker$$19_node$$inline_4162$$);
      $maxy$$inline_4174_maxy$$inline_5057$$ > $result$$inline_4167$$.max && ($result$$inline_4167$$.max = $maxy$$inline_4174_maxy$$inline_5057$$);
      if ($result$$2$$.max > $height$$122$$) {
        break;
      }
    }
  }
  return $result$$2$$.max > $height$$122$$ && 1 < $size$$40$$ ? $JSCompiler_StaticMethods_calculateOptimalSize$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$49$$, $end$$31$$, $width$$146$$, $height$$122$$, $size$$40$$ - 1) : $size$$40$$;
}
function $JSCompiler_StaticMethods_calculateDurationY$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$91$$, $durationMarkers$$3$$) {
  var $index$$203$$ = $durationMarkers$$3$$.length, $startTime$$24$$ = $item$$91$$.getTime(), $y$$190$$ = $item$$91$$.$_durationLevel$;
  null == $y$$190$$ && ($y$$190$$ = 1);
  for (var $i$$679$$ = 0;$i$$679$$ < $index$$203$$;$i$$679$$++) {
    var $currItem$$2_curry$$ = $durationMarkers$$3$$[$i$$679$$];
    if ($currItem$$2_curry$$ != $item$$91$$) {
      var $currEndTime$$1$$ = $currItem$$2_curry$$.$_endTime$;
      if (null != $currEndTime$$1$$) {
        var $currStartTime$$1$$ = $currItem$$2_curry$$.getTime(), $currItem$$2_curry$$ = $currItem$$2_curry$$.$_durationLevel$;
        null == $currItem$$2_curry$$ && ($currItem$$2_curry$$ = 1);
        $startTime$$24$$ >= $currStartTime$$1$$ && $startTime$$24$$ <= $currEndTime$$1$$ && $y$$190$$ == $currItem$$2_curry$$ && ($y$$190$$ = $currItem$$2_curry$$ + 1, $item$$91$$.$_durationLevel$ = $y$$190$$, $y$$190$$ = $JSCompiler_StaticMethods_calculateDurationY$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$91$$, $durationMarkers$$3$$));
      }
    }
  }
  $y$$190$$ > $JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ && ($JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ = $y$$190$$);
  return $y$$190$$;
}
$JSCompiler_prototypeAlias$$ = dvt.$TimelineOverview$.prototype;
$JSCompiler_prototypeAlias$$.$HandleShapeMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOver$$($event$$554_isSelected$$3_itemId$$4$$) {
  var $drawable$$11$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeMouseOver$.call(this, $event$$554_isSelected$$3_itemId$$4$$);
  if (null != $drawable$$11$$) {
    if (null != $drawable$$11$$.$_node$) {
      var $evt$$60_i$$680_tooltip$$29$$ = $drawable$$11$$.$_node$.$_desc$;
      null != $evt$$60_i$$680_tooltip$$29$$ && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$554_isSelected$$3_itemId$$4$$.pageX, $event$$554_isSelected$$3_itemId$$4$$.pageY, $evt$$60_i$$680_tooltip$$29$$, "#000000");
      this.$isFlashEnvironment$() && this.setCursor("pointer");
    }
    if ("none" != this.$_selectionMode$) {
      $event$$554_isSelected$$3_itemId$$4$$ = !1;
      if (null != this.$_selectedMarkers$) {
        for ($evt$$60_i$$680_tooltip$$29$$ = 0;$evt$$60_i$$680_tooltip$$29$$ < this.$_selectedMarkers$.length;$evt$$60_i$$680_tooltip$$29$$++) {
          if ($drawable$$11$$ == this.$_selectedMarkers$[$evt$$60_i$$680_tooltip$$29$$]) {
            $event$$554_isSelected$$3_itemId$$4$$ = !0;
            break;
          }
        }
      }
      $event$$554_isSelected$$3_itemId$$4$$ || ($event$$554_isSelected$$3_itemId$$4$$ = this.$getItemId$($drawable$$11$$), $evt$$60_i$$680_tooltip$$29$$ = new $DvtTimelineOverviewEvent$$("highlight"), $evt$$60_i$$680_tooltip$$29$$.$addParam$("itemId", $event$$554_isSelected$$3_itemId$$4$$), this.dispatchEvent($evt$$60_i$$680_tooltip$$29$$), $JSCompiler_StaticMethods_highlightMarker$$(this, $drawable$$11$$));
    }
  }
};
$JSCompiler_prototypeAlias$$.$HandleShapeMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOut$$($drawable$$12_event$$555$$) {
  $drawable$$12_event$$555$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeMouseOut$.call(this, $drawable$$12_event$$555$$);
  if (null != $drawable$$12_event$$555$$ && !this.$isMovable$($drawable$$12_event$$555$$)) {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    var $isSelected$$4_itemId$$5$$ = !1;
    if (null != this.$_selectedMarkers$) {
      for (var $evt$$61_i$$681$$ = 0;$evt$$61_i$$681$$ < this.$_selectedMarkers$.length;$evt$$61_i$$681$$++) {
        if ($drawable$$12_event$$555$$ == this.$_selectedMarkers$[$evt$$61_i$$681$$]) {
          $isSelected$$4_itemId$$5$$ = !0;
          break;
        }
      }
    }
    $isSelected$$4_itemId$$5$$ || ($isSelected$$4_itemId$$5$$ = this.$getItemId$($drawable$$12_event$$555$$), $evt$$61_i$$681$$ = new $DvtTimelineOverviewEvent$$("unhighlight"), $evt$$61_i$$681$$.$addParam$("itemId", $isSelected$$4_itemId$$5$$), this.dispatchEvent($evt$$61_i$$681$$), $JSCompiler_StaticMethods_unhighlightMarker$$(this, $drawable$$12_event$$555$$));
  }
};
$JSCompiler_prototypeAlias$$.$HandleShapeClick$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeClick$$($event$$556$$, $drawable$$13_pageX$$9$$, $pageY$$9$$) {
  $drawable$$13_pageX$$9$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeClick$.call(this, $event$$556$$, $drawable$$13_pageX$$9$$, $pageY$$9$$);
  null != $drawable$$13_pageX$$9$$ && $JSCompiler_StaticMethods_HandleMarkerClick$$(this, $drawable$$13_pageX$$9$$, $event$$556$$.ctrlKey || $event$$556$$.shiftKey || dvt.$Agent$.$isTouchDevice$());
};
function $JSCompiler_StaticMethods_HandleMarkerClick$$($JSCompiler_StaticMethods_HandleMarkerClick$self$$, $drawable$$14_newPos$$1$$, $isMultiSelect$$2_slidingWindow$$21_time$$21$$) {
  if ("none" != $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$_selectionMode$) {
    var $evt$$62_itemId$$inline_4185$$ = $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$getItemId$($drawable$$14_newPos$$1$$), $evt$$inline_4186$$ = new $DvtTimelineOverviewEvent$$("selection");
    $evt$$inline_4186$$.$addParam$("itemId", $evt$$62_itemId$$inline_4185$$);
    $evt$$inline_4186$$.$addParam$("multiSelect", $isMultiSelect$$2_slidingWindow$$21_time$$21$$);
    $JSCompiler_StaticMethods_HandleMarkerClick$self$$.dispatchEvent($evt$$inline_4186$$);
    $isMultiSelect$$2_slidingWindow$$21_time$$21$$ = $drawable$$14_newPos$$1$$.$_node$.getTime();
    null != $isMultiSelect$$2_slidingWindow$$21_time$$21$$ && ($evt$$62_itemId$$inline_4185$$ = new $DvtTimelineOverviewEvent$$($DvtTimelineOverviewEvent$SUBTYPE_SCROLL_TIME$$), $evt$$62_itemId$$inline_4185$$.setTime($isMultiSelect$$2_slidingWindow$$21_time$$21$$), $JSCompiler_StaticMethods_HandleMarkerClick$self$$.dispatchEvent($evt$$62_itemId$$inline_4185$$), $isMultiSelect$$2_slidingWindow$$21_time$$21$$ = $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$getSlidingWindow$(), $drawable$$14_newPos$$1$$ = 
    $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$isVertical$() ? $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$getX$($drawable$$14_newPos$$1$$) - $isMultiSelect$$2_slidingWindow$$21_time$$21$$.getHeight() / 2 : $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$getX$($drawable$$14_newPos$$1$$) - $isMultiSelect$$2_slidingWindow$$21_time$$21$$.getWidth() / 2, $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$animateSlidingWindow$($drawable$$14_newPos$$1$$));
  }
}
function $JSCompiler_StaticMethods_highlightMarker$$($JSCompiler_StaticMethods_highlightMarker$self$$, $drawable$$17$$) {
  if (null != $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$) {
    for (var $i$$682$$ = 0;$i$$682$$ < $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$.length;$i$$682$$++) {
      if ($drawable$$17$$ == $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$[$i$$682$$]) {
        return;
      }
    }
  }
  $JSCompiler_StaticMethods_highlightMarker$self$$.$applyState$($drawable$$17$$, dvt.$TimelineOverview$.$HOVER_STATE$);
}
function $JSCompiler_StaticMethods_unhighlightMarker$$($JSCompiler_StaticMethods_unhighlightMarker$self$$, $drawable$$18$$) {
  if (null != $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$) {
    for (var $i$$683$$ = 0;$i$$683$$ < $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$.length;$i$$683$$++) {
      if ($drawable$$18$$ == $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$[$i$$683$$]) {
        return;
      }
    }
  }
  $JSCompiler_StaticMethods_unhighlightMarker$self$$.$applyState$($drawable$$18$$, dvt.$TimelineOverview$.$ENABLED_STATE$);
}
function $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_addSelectedMarker$self$$, $drawable$$22$$) {
  null == $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ && ($JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ = []);
  var $lastSelectedMarker$$ = null;
  0 < $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length && ($lastSelectedMarker$$ = $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$[$JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length - 1]);
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.push($drawable$$22$$);
  null != $lastSelectedMarker$$ && $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($lastSelectedMarker$$, dvt.$TimelineOverview$.$SELECTED_STATE$);
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($drawable$$22$$, dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$);
}
$JSCompiler_prototypeAlias$$.$applyState$ = function $$JSCompiler_prototypeAlias$$$$applyState$$($drawable$$25$$, $state$$99$$) {
  if ($drawable$$25$$ instanceof dvt.$SimpleMarker$) {
    var $borderWidth$$18_requiresBorderMarker$$ = !1, $requiresGlowMarker$$ = !1;
    if ("solid" == this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_STYLE$)) {
      var $borderWidth$$18_requiresBorderMarker$$ = !0, $borderColor$$47_stroke$$103$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_COLOR$);
      null == $borderColor$$47_stroke$$103$$ && ($borderColor$$47_stroke$$103$$ = "#000000");
      var $glowColor_glowStroke_width$$inline_4192$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$GLOW_COLOR$);
      null != $glowColor_glowStroke_width$$inline_4192$$ && "none" != $glowColor_glowStroke_width$$inline_4192$$ && ($requiresGlowMarker$$ = !0);
    }
    var $borderMarker$$ = $drawable$$25$$.$_borderMarker$, $glowMarker_glowOffset$$ = $drawable$$25$$.$_glowMarker$;
    $borderWidth$$18_requiresBorderMarker$$ || null == $borderMarker$$ ? $requiresGlowMarker$$ || null == $glowMarker_glowOffset$$ || (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = null) : (this.removeChild($borderMarker$$), $drawable$$25$$.$_borderMarker$ = null, null != $glowMarker_glowOffset$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = null));
    var $borderColor$$inline_4191_id$$214_markerType$$1$$ = $drawable$$25$$.$getType$();
    if ($borderWidth$$18_requiresBorderMarker$$) {
      var $borderWidth$$18_requiresBorderMarker$$ = parseInt(this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_WIDTH$), 10), $borderOffset$$1$$ = parseInt(this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10);
      if (null == $borderMarker$$) {
        if ($borderColor$$inline_4191_id$$214_markerType$$1$$ == dvt.$SimpleMarker$.$CIRCLE$) {
          this.$isFlashEnvironment$() && ($borderOffset$$1$$ = 0);
          var $width$$149$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$125$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$149$$ / 2, $cy$$38$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$125$$ / 2;
        } else {
          this.$isVertical$() ? ($width$$149$$ = ($drawable$$25$$.$getDimensions$().$w$ + ($borderWidth$$18_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleX$(), $height$$125$$ = ($drawable$$25$$.$getDimensions$().$h$ + ($borderWidth$$18_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getY$($drawable$$25$$) - ($borderWidth$$18_requiresBorderMarker$$ + 1) / 2 + $width$$149$$ / 2, $cy$$38$$ = this.$getX$($drawable$$25$$) - ($borderWidth$$18_requiresBorderMarker$$ + 
          1) / 2 + $height$$125$$ / 2) : ($width$$149$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$125$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$149$$ / 2, $cy$$38$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$125$$ / 2);
        }
        $borderMarker$$ = new dvt.$SimpleMarker$(this.$getCtx$(), $borderColor$$inline_4191_id$$214_markerType$$1$$, null, $cx$$37$$, $cy$$38$$, $width$$149$$, $height$$125$$, null, null, null, $drawable$$25$$.getId() + "_border");
        this.$addChildAt$($borderMarker$$, this.$getChildIndex$($drawable$$25$$));
        $drawable$$25$$.$_borderMarker$ = $borderMarker$$;
        $borderMarker$$.$setFill$(this.$_markerBorderFill$);
      }
      $borderColor$$47_stroke$$103$$ = new dvt.$SolidStroke$($borderColor$$47_stroke$$103$$, this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_OPACITY$), $borderWidth$$18_requiresBorderMarker$$);
      $borderMarker$$.$setStroke$($borderColor$$47_stroke$$103$$);
      !this.$isVertical$() && $borderColor$$inline_4191_id$$214_markerType$$1$$ != dvt.$SimpleMarker$.$RECTANGLE$ && $borderColor$$inline_4191_id$$214_markerType$$1$$ != dvt.$SimpleMarker$.$DIAMOND$ && $borderColor$$inline_4191_id$$214_markerType$$1$$ != dvt.$SimpleMarker$.$TRIANGLE_UP$ && $borderColor$$inline_4191_id$$214_markerType$$1$$ != dvt.$SimpleMarker$.$TRIANGLE_DOWN$ && $borderColor$$inline_4191_id$$214_markerType$$1$$ != dvt.$SimpleMarker$.$PLUS$ || "false" == this.$_defaultMarkerStyles$.$pixelHinting$ || 
      $borderMarker$$.$setPixelHinting$();
      $requiresGlowMarker$$ && (null == $glowMarker_glowOffset$$ && ($glowMarker_glowOffset$$ = $borderOffset$$1$$ - $borderWidth$$18_requiresBorderMarker$$, $borderColor$$inline_4191_id$$214_markerType$$1$$ == dvt.$SimpleMarker$.$CIRCLE$ ? (this.$isFlashEnvironment$() && ($glowMarker_glowOffset$$ = 0), $width$$149$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$125$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * 
      $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$149$$ / 2, $cy$$38$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$125$$ / 2) : this.$isVertical$() ? ($width$$149$$ = ($drawable$$25$$.$getDimensions$().$w$ + 3) * $drawable$$25$$.$getScaleX$(), $height$$125$$ = ($drawable$$25$$.$getDimensions$().$h$ + 3) * $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getY$($drawable$$25$$) + $width$$149$$ / 2, $cy$$38$$ = 
      this.$getX$($drawable$$25$$) - 1 + $height$$125$$ / 2) : ($width$$149$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$125$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$149$$ / 2, $cy$$38$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$125$$ / 2), $glowMarker_glowOffset$$ = 
      new dvt.$SimpleMarker$(this.$getCtx$(), $borderColor$$inline_4191_id$$214_markerType$$1$$, null, $cx$$37$$, $cy$$38$$, $width$$149$$, $height$$125$$, null, null, null, $drawable$$25$$.getId() + "_glow"), this.$addChildAt$($glowMarker_glowOffset$$, this.$getChildIndex$($borderMarker$$)), $drawable$$25$$.$_glowMarker$ = $glowMarker_glowOffset$$, $glowMarker_glowOffset$$.$setFill$(this.$_markerBorderFill$)), $glowColor_glowStroke_width$$inline_4192$$ = new dvt.$SolidStroke$($glowColor_glowStroke_width$$inline_4192$$, 
      this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$GLOW_OPACITY$), 4), $glowMarker_glowOffset$$.$setStroke$($glowColor_glowStroke_width$$inline_4192$$), !this.$isVertical$() && $borderColor$$inline_4191_id$$214_markerType$$1$$ != dvt.$SimpleMarker$.$RECTANGLE$ && $borderColor$$inline_4191_id$$214_markerType$$1$$ != dvt.$SimpleMarker$.$DIAMOND$ && $borderColor$$inline_4191_id$$214_markerType$$1$$ != dvt.$SimpleMarker$.$TRIANGLE_UP$ && $borderColor$$inline_4191_id$$214_markerType$$1$$ != dvt.$SimpleMarker$.$TRIANGLE_DOWN$ && 
      $borderColor$$inline_4191_id$$214_markerType$$1$$ != dvt.$SimpleMarker$.$PLUS$ || "false" == this.$_defaultMarkerStyles$.$pixelHinting$ || $glowMarker_glowOffset$$.$setPixelHinting$());
    }
  } else {
    ($borderColor$$inline_4191_id$$214_markerType$$1$$ = $drawable$$25$$.getId()) && "_drn_" == $borderColor$$inline_4191_id$$214_markerType$$1$$.substring(0, 5) && ($borderColor$$inline_4191_id$$214_markerType$$1$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$), null == $borderColor$$inline_4191_id$$214_markerType$$1$$ && ($borderColor$$inline_4191_id$$214_markerType$$1$$ = "#000000"), $glowColor_glowStroke_width$$inline_4192$$ = parseInt(this.$getStyle$($state$$99$$, 
    dvt.$TimelineOverview$.$DURATION_BORDER_WIDTH$), 10), $drawable$$25$$.$setStroke$(new dvt.$SolidStroke$($borderColor$$inline_4191_id$$214_markerType$$1$$, 1, $glowColor_glowStroke_width$$inline_4192$$)));
  }
};
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  this.$_Automation$ || (this.$_Automation$ = new $DvtTimelineOverviewAutomation$$(this));
  return this.$_Automation$;
};
dvt.$TimelineOverview$.prototype.getAutomation = dvt.$TimelineOverview$.prototype.$getAutomation$;
function $DvtTimelineOverviewParser$$($timelineOverview$$) {
  this.Init($timelineOverview$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewParser$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineOverviewParser$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$3$$) {
  this.$_view$ = $overview$$3$$;
  this.$_parser$ = new dvt.$XmlParser$($overview$$3$$.$getCtx$());
};
$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$317$$) {
  var $ret$$67$$ = this.$ParseRootAttributes$($options$$317$$), $JSCompiler_inline_result$$264_options$$inline_4198$$;
  if ($JSCompiler_inline_result$$264_options$$inline_4198$$ = $options$$317$$.axisTicks) {
    var $ret$$inline_4199$$ = {width:null, height:null};
    $ret$$inline_4199$$.$ticks$ = $JSCompiler_inline_result$$264_options$$inline_4198$$;
    $JSCompiler_inline_result$$264_options$$inline_4198$$ = $ret$$inline_4199$$;
  } else {
    $JSCompiler_inline_result$$264_options$$inline_4198$$ = null;
  }
  $ret$$67$$.$timeAxisInfo$ = $JSCompiler_inline_result$$264_options$$inline_4198$$;
  $ret$$67$$.$markers$ = this.$_parseDataNode$($options$$317$$.markers, $ret$$67$$.$defaultMarkerStyles$);
  $ret$$67$$.$formattedTimeRanges$ = $options$$317$$.formattedTimeRanges;
  return $ret$$67$$;
};
$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($options$$318$$) {
  var $ret$$68$$ = {};
  $ret$$68$$.start = parseInt($options$$318$$.start);
  $ret$$68$$.end = parseInt($options$$318$$.end);
  $ret$$68$$.width = parseInt($options$$318$$.width);
  $ret$$68$$.$renderStart$ = parseInt($options$$318$$.renstart);
  $ret$$68$$.currentTime = parseInt($options$$318$$.ocd);
  $ret$$68$$.orientation = $options$$318$$.orn;
  $ret$$68$$.$overviewPosition$ = $options$$318$$.ovp;
  $ret$$68$$.$selectionMode$ = $options$$318$$.selmode;
  $ret$$68$$.$isRtl$ = $options$$318$$.rtl;
  $ret$$68$$.borderTopStyle = $options$$318$$._bts;
  $ret$$68$$.borderTopColor = $options$$318$$._btc;
  $ret$$68$$.$seriesIds$ = $options$$318$$.sid;
  $ret$$68$$.$animationOnClick$ = $options$$318$$._aoc;
  var $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$.shape = $options$$318$$._ds;
  $borderStyles_defaultMarkerStyles$$.$scaleX$ = $options$$318$$._dsx;
  $borderStyles_defaultMarkerStyles$$.$scaleY$ = $options$$318$$._dsy;
  $borderStyles_defaultMarkerStyles$$.opacity = $options$$318$$._do;
  $borderStyles_defaultMarkerStyles$$.color = $options$$318$$._fc;
  $borderStyles_defaultMarkerStyles$$.$pixelHinting$ = $options$$318$$._ph;
  $ret$$68$$.$defaultMarkerStyles$ = $borderStyles_defaultMarkerStyles$$;
  $ret$$68$$.$handleFillColor$ = $options$$318$$._hfc;
  $ret$$68$$.$handleTextureColor$ = $options$$318$$._htc;
  $ret$$68$$.$handleBackgroundImage$ = $options$$318$$._hbi;
  $ret$$68$$.$handleWidth$ = $options$$318$$._hw;
  $ret$$68$$.$handleHeight$ = $options$$318$$._hh;
  $ret$$68$$.$windowBackgroundColor$ = $options$$318$$._wbc;
  $ret$$68$$.$windowBorderTopStyle$ = $options$$318$$._wbts;
  $ret$$68$$.$windowBorderRightStyle$ = $options$$318$$._wbrs;
  $ret$$68$$.$windowBorderBottomStyle$ = $options$$318$$._wbbs;
  $ret$$68$$.$windowBorderLeftStyle$ = $options$$318$$._wbls;
  $ret$$68$$.$windowBorderTopColor$ = $options$$318$$._wbtc;
  $ret$$68$$.$windowBorderRightColor$ = $options$$318$$._wbrc;
  $ret$$68$$.$windowBorderBottomColor$ = $options$$318$$._wbbc;
  $ret$$68$$.$windowBorderLeftColor$ = $options$$318$$._wblc;
  $ret$$68$$.$overviewBackgroundColor$ = $options$$318$$._obc;
  $ret$$68$$.$currentTimeIndicatorColor$ = $options$$318$$._ctic;
  $ret$$68$$.$timeIndicatorColor$ = $options$$318$$._tic;
  $ret$$68$$.$timeAxisBarColor$ = $options$$318$$._tabc;
  $ret$$68$$.$timeAxisBarOpacity$ = $options$$318$$._tabo;
  $ret$$68$$.$labelStyle$ = $options$$318$$._ls;
  $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$._bs = $options$$318$$._bs;
  $borderStyles_defaultMarkerStyles$$._bc = $options$$318$$._bc;
  $borderStyles_defaultMarkerStyles$$._bw = $options$$318$$._bw;
  $borderStyles_defaultMarkerStyles$$._bof = $options$$318$$._bof;
  $borderStyles_defaultMarkerStyles$$._bo = $options$$318$$._bo;
  $borderStyles_defaultMarkerStyles$$._gc = $options$$318$$._gc;
  $borderStyles_defaultMarkerStyles$$._go = $options$$318$$._go;
  $borderStyles_defaultMarkerStyles$$._dbs = $options$$318$$._dbs;
  $borderStyles_defaultMarkerStyles$$._dbc = $options$$318$$._dbc;
  $borderStyles_defaultMarkerStyles$$._dbw = $options$$318$$._dbw;
  $borderStyles_defaultMarkerStyles$$._hbs = $options$$318$$._hbs;
  $borderStyles_defaultMarkerStyles$$._hbc = $options$$318$$._hbc;
  $borderStyles_defaultMarkerStyles$$._hbw = $options$$318$$._hbw;
  $borderStyles_defaultMarkerStyles$$._hbof = $options$$318$$._hbof;
  $borderStyles_defaultMarkerStyles$$._hbo = $options$$318$$._hbo;
  $borderStyles_defaultMarkerStyles$$._hgc = $options$$318$$._hgc;
  $borderStyles_defaultMarkerStyles$$._hgo = $options$$318$$._hgo;
  $borderStyles_defaultMarkerStyles$$._hdbs = $options$$318$$._hdbs;
  $borderStyles_defaultMarkerStyles$$._hdbc = $options$$318$$._hdbc;
  $borderStyles_defaultMarkerStyles$$._hdbw = $options$$318$$._hdbw;
  $borderStyles_defaultMarkerStyles$$._sbs = $options$$318$$._sbs;
  $borderStyles_defaultMarkerStyles$$._sbc = $options$$318$$._sbc;
  $borderStyles_defaultMarkerStyles$$._sbw = $options$$318$$._sbw;
  $borderStyles_defaultMarkerStyles$$._sbof = $options$$318$$._sbof;
  $borderStyles_defaultMarkerStyles$$._sbo = $options$$318$$._sbo;
  $borderStyles_defaultMarkerStyles$$._sgc = $options$$318$$._sgc;
  $borderStyles_defaultMarkerStyles$$._sgo = $options$$318$$._sgo;
  $borderStyles_defaultMarkerStyles$$._sdbs = $options$$318$$._sdbs;
  $borderStyles_defaultMarkerStyles$$._sdbc = $options$$318$$._sdbc;
  $borderStyles_defaultMarkerStyles$$._sdbw = $options$$318$$._sdbw;
  $borderStyles_defaultMarkerStyles$$._asbs = $options$$318$$._asbs;
  $borderStyles_defaultMarkerStyles$$._asbc = $options$$318$$._asbc;
  $borderStyles_defaultMarkerStyles$$._asbw = $options$$318$$._asbw;
  $borderStyles_defaultMarkerStyles$$._asbof = $options$$318$$._asbof;
  $borderStyles_defaultMarkerStyles$$._asbo = $options$$318$$._asbo;
  $borderStyles_defaultMarkerStyles$$._asgc = $options$$318$$._asgc;
  $borderStyles_defaultMarkerStyles$$._asgo = $options$$318$$._asgo;
  $borderStyles_defaultMarkerStyles$$._asdbs = $options$$318$$._asdbs;
  $borderStyles_defaultMarkerStyles$$._asdbc = $options$$318$$._asdbc;
  $borderStyles_defaultMarkerStyles$$._asdbw = $options$$318$$._asdbw;
  $ret$$68$$.$borderStyles$ = $borderStyles_defaultMarkerStyles$$;
  return $ret$$68$$;
};
$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($markers$$14$$, $defaultMarkerStyles$$1$$) {
  if ($markers$$14$$) {
    for (var $treeNodes$$1$$ = [], $i$$690$$ = 0;$i$$690$$ < $markers$$14$$.length;$i$$690$$++) {
      var $props$$15_treeNode$$1$$ = this.$ParseNodeAttributes$($markers$$14$$[$i$$690$$], $defaultMarkerStyles$$1$$), $props$$15_treeNode$$1$$ = new $DvtTimelineOverviewNode$$(this.$_view$, $props$$15_treeNode$$1$$);
      $treeNodes$$1$$.push($props$$15_treeNode$$1$$);
    }
    return $treeNodes$$1$$;
  }
  return null;
};
$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($options$$319$$, $defaultMarkerStyles$$2$$) {
  var $ret$$69$$ = {}, $useSkinningDefaults$$ = "true" == $options$$319$$._sd;
  $ret$$69$$.id = $options$$319$$.tid;
  $ret$$69$$.$rowKey$ = $options$$319$$.rk;
  $ret$$69$$.time = $options$$319$$.t;
  $ret$$69$$.endTime = $options$$319$$.et;
  $ret$$69$$.shape = $options$$319$$.s;
  $useSkinningDefaults$$ && null == $ret$$69$$.shape && ($ret$$69$$.shape = $defaultMarkerStyles$$2$$.shape);
  $ret$$69$$.$desc$ = $options$$319$$.d;
  $ret$$69$$.color = $options$$319$$.c;
  $ret$$69$$.$durationFillColor$ = $options$$319$$.dfc;
  $useSkinningDefaults$$ && null == $ret$$69$$.color && ($ret$$69$$.color = $defaultMarkerStyles$$2$$.color);
  $ret$$69$$.$scaleX$ = $options$$319$$.sx;
  $useSkinningDefaults$$ && null == $ret$$69$$.$scaleX$ && ($ret$$69$$.$scaleX$ = $defaultMarkerStyles$$2$$.$scaleX$);
  $ret$$69$$.$scaleY$ = $options$$319$$.sy;
  $useSkinningDefaults$$ && null == $ret$$69$$.$scaleY$ && ($ret$$69$$.$scaleY$ = $defaultMarkerStyles$$2$$.$scaleY$);
  $ret$$69$$.$gradient$ = $options$$319$$.g;
  $ret$$69$$.opacity = $options$$319$$.o;
  $useSkinningDefaults$$ && null == $ret$$69$$.opacity && ($ret$$69$$.opacity = $defaultMarkerStyles$$2$$.opacity);
  return $ret$$69$$;
};
function $DvtTimelineOverviewNode$$($overview$$4$$, $props$$16$$) {
  this.Init($overview$$4$$, $props$$16$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewNode$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineOverviewNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$5$$, $props$$17$$) {
  this.$_view$ = $overview$$5$$;
  this.$_id$ = $props$$17$$.id;
  this.$_time$ = parseInt($props$$17$$.time);
  this.$_endTime$ = null == $props$$17$$.endTime ? null : parseInt($props$$17$$.endTime);
  this.$_shape$ = dvt.$SimpleMarker$.$CIRCLE$;
  "square" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$RECTANGLE$ : "plus" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$PLUS$ : "diamond" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$DIAMOND$ : "triangleUp" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$TRIANGLE_UP$ : "triangleDown" == $props$$17$$.shape && (this.$_shape$ = dvt.$SimpleMarker$.$TRIANGLE_DOWN$);
  this.$_desc$ = $props$$17$$.$desc$;
  this.$_color$ = $props$$17$$.color;
  this.$_gradient$ = $props$$17$$.$gradient$;
  null != $props$$17$$.opacity && (this.$_opacity$ = parseFloat($props$$17$$.opacity));
  null != $props$$17$$.$scaleX$ && (this.$_scaleX$ = parseFloat($props$$17$$.$scaleX$));
  null != $props$$17$$.$scaleY$ && (this.$_scaleY$ = parseFloat($props$$17$$.$scaleY$));
  null != $props$$17$$.$durationFillColor$ && (this.$_durationFillColor$ = $props$$17$$.$durationFillColor$);
};
$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_id$;
};
$JSCompiler_prototypeAlias$$.getTime = function $$JSCompiler_prototypeAlias$$$getTime$() {
  return this.$_time$;
};
$JSCompiler_prototypeAlias$$.$getScaleX$ = function $$JSCompiler_prototypeAlias$$$$getScaleX$$() {
  return this.$_scaleX$;
};
$JSCompiler_prototypeAlias$$.$getScaleY$ = function $$JSCompiler_prototypeAlias$$$$getScaleY$$() {
  return this.$_scaleY$;
};
$JSCompiler_prototypeAlias$$.$getColor$ = function $$JSCompiler_prototypeAlias$$$$getColor$$() {
  return this.$_color$;
};
$JSCompiler_prototypeAlias$$.$getShape$ = function $$JSCompiler_prototypeAlias$$$$getShape$$() {
  return this.$_shape$;
};
$JSCompiler_prototypeAlias$$.$getOpacity$ = function $$JSCompiler_prototypeAlias$$$$getOpacity$$() {
  return this.$_opacity$;
};
$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this.$_displayable$;
};
$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($displayable$$88$$) {
  this.$_displayable$ = $displayable$$88$$;
};
$JSCompiler_prototypeAlias$$.$getX$ = function $$JSCompiler_prototypeAlias$$$$getX$$() {
  return this.$_x$;
};
$JSCompiler_prototypeAlias$$.$setX$ = function $$JSCompiler_prototypeAlias$$$$setX$$($x$$218$$) {
  this.$_x$ = $x$$218$$;
};
$JSCompiler_prototypeAlias$$.$getY$ = function $$JSCompiler_prototypeAlias$$$$getY$$() {
  return this.$_y$;
};
$JSCompiler_prototypeAlias$$.$setY$ = function $$JSCompiler_prototypeAlias$$$$setY$$($y$$191$$) {
  this.$_y$ = $y$$191$$;
};
function $DvtTimelineOverviewEvent$$($type$$196$$) {
  this.Init("timeline");
  this.$_subtype$ = $type$$196$$;
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewEvent$$, dvt.$OverviewEvent$);
var $DvtTimelineOverviewEvent$SUBTYPE_SCROLL_TIME$$ = dvt.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$;
$DvtTimelineOverviewEvent$$.prototype.$getItemId$ = function $$DvtTimelineOverviewEvent$$$$$getItemId$$() {
  return this.$getParamValue$("itemId");
};
function $DvtTimelineOverviewAutomation$$($overview$$6$$) {
  this.$_Init$($overview$$6$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewAutomation$$, dvt.$Automation$);
$DvtTimelineOverviewAutomation$$.prototype.$_Init$ = function $$DvtTimelineOverviewAutomation$$$$$_Init$$($overview$$7$$) {
  this.$_overview$ = $overview$$7$$;
};
$DvtTimelineOverviewAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineOverviewAutomation$$$$$GetSubIdForDomElement$$($arr$$13_displayable$$89_prev$$1$$) {
  var $id$$215_seriesIds$$1_seriesIndex$$138$$ = $arr$$13_displayable$$89_prev$$1$$.getId();
  if ($arr$$13_displayable$$89_prev$$1$$ instanceof dvt.$SimpleMarker$) {
    $arr$$13_displayable$$89_prev$$1$$ = $id$$215_seriesIds$$1_seriesIndex$$138$$.split(":");
    if (4 != $arr$$13_displayable$$89_prev$$1$$.length) {
      return null;
    }
    $id$$215_seriesIds$$1_seriesIndex$$138$$ = $JSCompiler_StaticMethods_getSeriesIds$$(this.$_overview$);
    if (null != $id$$215_seriesIds$$1_seriesIndex$$138$$ && ($id$$215_seriesIds$$1_seriesIndex$$138$$ = dvt.$ArrayUtils$.$getIndex$($id$$215_seriesIds$$1_seriesIndex$$138$$, $arr$$13_displayable$$89_prev$$1$$[1]), -1 < $id$$215_seriesIds$$1_seriesIndex$$138$$)) {
      return "marker[" + $id$$215_seriesIds$$1_seriesIndex$$138$$ + "][" + $arr$$13_displayable$$89_prev$$1$$[2] + "]";
    }
  } else {
    if ("window" == $id$$215_seriesIds$$1_seriesIndex$$138$$) {
      return "range_window";
    }
    if ("lh" == $id$$215_seriesIds$$1_seriesIndex$$138$$ || "lhb" == $id$$215_seriesIds$$1_seriesIndex$$138$$ || "lbgrh" == $id$$215_seriesIds$$1_seriesIndex$$138$$) {
      return "range_start_handle";
    }
    if ("rh" == $id$$215_seriesIds$$1_seriesIndex$$138$$ || "rhb" == $id$$215_seriesIds$$1_seriesIndex$$138$$ || "rbgrh" == $id$$215_seriesIds$$1_seriesIndex$$138$$) {
      return "range_end_handle";
    }
    if ("grpy" == $id$$215_seriesIds$$1_seriesIndex$$138$$) {
      return $arr$$13_displayable$$89_prev$$1$$ = $arr$$13_displayable$$89_prev$$1$$.getParent().$getChildBefore$($arr$$13_displayable$$89_prev$$1$$), this.$GetSubIdForDomElement$($arr$$13_displayable$$89_prev$$1$$);
    }
  }
  return null;
};
$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineOverviewAutomation$$$$$getDomElementForSubId$$($seriesIds$$2_subId$$31$$) {
  var $marker$$31_subIdArray$$ = $DvtTimelineOverviewAutomation$_convertSubIdToArray$$($seriesIds$$2_subId$$31$$);
  if ($marker$$31_subIdArray$$ && 3 == $marker$$31_subIdArray$$.length && "marker" == $marker$$31_subIdArray$$[0]) {
    if ($seriesIds$$2_subId$$31$$ = $JSCompiler_StaticMethods_getSeriesIds$$(this.$_overview$), null != $seriesIds$$2_subId$$31$$) {
      var $index$$205$$ = parseInt($marker$$31_subIdArray$$[1], 10);
      if (-1 < $index$$205$$ && $index$$205$$ < $seriesIds$$2_subId$$31$$.length) {
        return ($marker$$31_subIdArray$$ = $DvtTimelineOverviewAutomation$_findMarker$$(this.$_overview$.$_markers$, $seriesIds$$2_subId$$31$$[$index$$205$$], $marker$$31_subIdArray$$[2])) ? $marker$$31_subIdArray$$.$getDisplayable$().$getElem$() : null;
      }
    }
  } else {
    if ("range_window" == $seriesIds$$2_subId$$31$$) {
      return this.$_overview$.$getSlidingWindow$().$getElem$();
    }
    if ("range_start_handle" == $seriesIds$$2_subId$$31$$) {
      return this.$_overview$.$getLeftHandle$().$getElem$();
    }
    if ("range_end_handle" == $seriesIds$$2_subId$$31$$) {
      return this.$_overview$.$getRightHandle$().$getElem$();
    }
  }
  return null;
};
$DvtTimelineOverviewAutomation$$.prototype.getDomElementForSubId = $DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$;
$DvtTimelineOverviewAutomation$$.prototype.click = function $$DvtTimelineOverviewAutomation$$$$click$($foundMarker$$inline_4209_subId$$32_subIdArray$$inline_4208$$) {
  var $event$$inline_4207$$ = 0;
  void 0 === $event$$inline_4207$$ && ($event$$inline_4207$$ = -1);
  null != $foundMarker$$inline_4209_subId$$32_subIdArray$$inline_4208$$ && -1 != $event$$inline_4207$$ && 0 == $event$$inline_4207$$ && ($foundMarker$$inline_4209_subId$$32_subIdArray$$inline_4208$$ = $DvtTimelineOverviewAutomation$_convertSubIdToArray$$($foundMarker$$inline_4209_subId$$32_subIdArray$$inline_4208$$)) && 3 == $foundMarker$$inline_4209_subId$$32_subIdArray$$inline_4208$$.length && "marker" == $foundMarker$$inline_4209_subId$$32_subIdArray$$inline_4208$$[0] && ($foundMarker$$inline_4209_subId$$32_subIdArray$$inline_4208$$ = 
  $DvtTimelineOverviewAutomation$_findMarker$$(this.$_overview$.$_markers$, $foundMarker$$inline_4209_subId$$32_subIdArray$$inline_4208$$[1], $foundMarker$$inline_4209_subId$$32_subIdArray$$inline_4208$$[2])) && $JSCompiler_StaticMethods_HandleMarkerClick$$(this.$_overview$, $foundMarker$$inline_4209_subId$$32_subIdArray$$inline_4208$$.$getDisplayable$(), !1);
};
function $DvtTimelineOverviewAutomation$_convertSubIdToArray$$($array$$18_subId$$34$$) {
  $array$$18_subId$$34$$ = $array$$18_subId$$34$$.split("[");
  for (var $len$$20$$ = $array$$18_subId$$34$$.length, $i$$691$$ = 1;$i$$691$$ < $len$$20$$;$i$$691$$++) {
    var $elem$$9_tempId$$ = $array$$18_subId$$34$$[$i$$691$$], $elem$$9_tempId$$ = $elem$$9_tempId$$.substr(0, $elem$$9_tempId$$.length - 1), $tempIdAsNumber$$ = parseFloat($elem$$9_tempId$$), $elem$$9_tempId$$ = isNaN($tempIdAsNumber$$) ? $elem$$9_tempId$$ : $tempIdAsNumber$$;
    $array$$18_subId$$34$$[$i$$691$$] = $elem$$9_tempId$$;
  }
  return $array$$18_subId$$34$$;
}
function $DvtTimelineOverviewAutomation$_findMarker$$($markers$$15$$, $markerId$$1_seriesId$$1$$, $i$$692_index$$206$$) {
  $markerId$$1_seriesId$$1$$ = "tl1:" + $markerId$$1_seriesId$$1$$ + ":" + $i$$692_index$$206$$ + ":";
  for ($i$$692_index$$206$$ = 0;$i$$692_index$$206$$ < $markers$$15$$.length;$i$$692_index$$206$$++) {
    var $marker$$32$$ = $markers$$15$$[$i$$692_index$$206$$], $id$$216$$ = $marker$$32$$.getId();
    if (null != $id$$216$$ && 0 == $id$$216$$.indexOf($markerId$$1_seriesId$$1$$)) {
      return $marker$$32$$;
    }
  }
  return null;
}
;
dvt.$TimeAxis$ = function $dvt$$TimeAxis$$($context$$394$$, $callback$$156$$, $callbackObj$$87$$) {
  this.Init($context$$394$$, $callback$$156$$, $callbackObj$$87$$);
};
dvt.$Obj$.$createSubclass$(dvt.$TimeAxis$, dvt.$BaseComponent$);
dvt.$TimeAxis$.$DEFAULT_INTERVAL_WIDTH$ = 50;
dvt.$TimeAxis$.$DEFAULT_INTERVAL_HEIGHT$ = 21;
dvt.$TimeAxis$.$DEFAULT_INTERVAL_PADDING$ = 2;
dvt.$TimeAxis$.$DEFAULT_BORDER_WIDTH$ = 1;
dvt.$TimeAxis$.$DEFAULT_SEPARATOR_WIDTH$ = 1;
dvt.$TimeAxis$.newInstance = function $dvt$$TimeAxis$$newInstance$($context$$395$$, $callback$$157$$, $callbackObj$$88$$) {
  return new dvt.$TimeAxis$($context$$395$$, $callback$$157$$, $callbackObj$$88$$);
};
dvt.$TimeAxis$.$_VALID_SCALES$ = "seconds minutes hours days weeks months quarters years".split(" ");
$JSCompiler_prototypeAlias$$ = dvt.$TimeAxis$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$396$$) {
  dvt.$TimeAxis$.$superclass$.Init.call(this, $context$$396$$);
  this.$_calendar$ = new $DvtTimeAxisCalendar$$;
  this.$_borderWidth$ = dvt.$TimeAxis$.$DEFAULT_BORDER_WIDTH$;
  this.$_dateToIsoConverter$ = $context$$396$$.$getLocaleHelpers$().dateToIsoConverter;
};
$JSCompiler_prototypeAlias$$.$setScale$ = function $$JSCompiler_prototypeAlias$$$$setScale$$($scale$$54$$) {
  this.$_scale$ = $scale$$54$$;
};
$JSCompiler_prototypeAlias$$.$getTimeAxisWidth$ = function $$JSCompiler_prototypeAlias$$$$getTimeAxisWidth$$() {
  null == this.$_timeAxisWidth$ && (this.$_timeAxisWidth$ = 30);
  return this.$_timeAxisWidth$;
};
$JSCompiler_prototypeAlias$$.$setBorderWidth$ = function $$JSCompiler_prototypeAlias$$$$setBorderWidth$$($borderWidth$$15$$) {
  this.$_borderWidth$ = $borderWidth$$15$$;
};
$JSCompiler_prototypeAlias$$.$getBorderWidth$ = function $$JSCompiler_prototypeAlias$$$$getBorderWidth$$() {
  return this.$_borderWidth$;
};
$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$_contentSize$ + 2 * this.$_borderWidth$;
};
$JSCompiler_prototypeAlias$$.$setType$ = function $$JSCompiler_prototypeAlias$$$$setType$$($type$$192$$, $dateFormatStrings$$) {
  this.$_formatter$ = new $DvtTimeAxisFormatter$$("short" == $type$$192$$ ? $DvtTimeAxisFormatter$$.SHORT : $DvtTimeAxisFormatter$$.$LONG$, $dateFormatStrings$$);
};
$JSCompiler_prototypeAlias$$.$adjustDate$ = function $$JSCompiler_prototypeAlias$$$$adjustDate$$($date$$12$$) {
  return this.$_calendar$.$adjustDate$(new Date($date$$12$$), this.$_scale$);
};
$JSCompiler_prototypeAlias$$.$getNextDate$ = function $$JSCompiler_prototypeAlias$$$$getNextDate$$($time$$13$$) {
  return this.$_calendar$.$getNextDate$($time$$13$$, this.$_scale$);
};
function $JSCompiler_StaticMethods_formatDate$$($JSCompiler_StaticMethods_formatDate$self$$, $date$$13$$) {
  if ($JSCompiler_StaticMethods_formatDate$self$$.$_converter$) {
    var $converter$$9$$;
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$;
    if ($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$13$$) : $date$$13$$);
    }
    if ($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$13$$);
    }
  }
  if ($JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$ && $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$]) {
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$];
    if ($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$13$$) : $date$$13$$);
    }
    if ($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$13$$);
    }
  }
  return $JSCompiler_StaticMethods_formatDate$self$$.$_formatter$.format($date$$13$$, $JSCompiler_StaticMethods_formatDate$self$$.$_scale$, $JSCompiler_StaticMethods_formatDate$self$$.$_timeZoneOffsets$);
}
function $DvtTimeAxisCalendar$$($options$$268$$) {
  this.Init($options$$268$$);
}
dvt.$Obj$.$createSubclass$($DvtTimeAxisCalendar$$, dvt.$Obj$);
$DvtTimeAxisCalendar$$.prototype.Init = function $$DvtTimeAxisCalendar$$$$Init$() {
  this.$_dayInMillis$ = 864E5;
};
$DvtTimeAxisCalendar$$.prototype.$adjustDate$ = function $$DvtTimeAxisCalendar$$$$$adjustDate$$($date$$14$$, $scale$$55$$) {
  var $_adjustedDate$$ = new Date($date$$14$$.getTime());
  if ("weeks" == $scale$$55$$) {
    $_adjustedDate$$.setHours(0, 0, 0);
    var $roll_amt$$ = ($date$$14$$.getDay() - 0 + 7) % 7;
    0 < $roll_amt$$ && $_adjustedDate$$.setTime($_adjustedDate$$.getTime() - $roll_amt$$ * this.$_dayInMillis$);
  } else {
    "months" == $scale$$55$$ ? $_adjustedDate$$.setDate(1) : "days" == $scale$$55$$ ? $_adjustedDate$$.setHours(0, 0, 0) : "hours" == $scale$$55$$ ? $_adjustedDate$$.setMinutes(0, 0, 0) : "minutes" == $scale$$55$$ ? $_adjustedDate$$.setSeconds(0, 0) : "seconds" == $scale$$55$$ ? $_adjustedDate$$.setMilliseconds(0) : "quarters" == $scale$$55$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 2 - ($date$$14$$.getMonth() + 11) % 3, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + 
    $roll_amt$$)) : "halfyears" == $scale$$55$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 5 - ($date$$14$$.getMonth() + 11) % 6, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + $roll_amt$$)) : "years" == $scale$$55$$ ? ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1)) : "twoyears" == $scale$$55$$ && ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1));
  }
  return $_adjustedDate$$;
};
$DvtTimeAxisCalendar$$.prototype.$getNextDate$ = function $$DvtTimeAxisCalendar$$$$$getNextDate$$($time$$14$$, $scale$$56$$) {
  if ("seconds" == $scale$$56$$) {
    return new Date($time$$14$$ + 1E3);
  }
  if ("minutes" == $scale$$56$$) {
    return new Date($time$$14$$ + 6E4);
  }
  if ("hours" == $scale$$56$$) {
    return new Date($time$$14$$ + 36E5);
  }
  var $_nextDate$$ = new Date($time$$14$$);
  "days" == $scale$$56$$ ? $_nextDate$$.setDate($_nextDate$$.getDate() + 1) : "weeks" == $scale$$56$$ ? $_nextDate$$.setDate($_nextDate$$.getDate() + 7) : "months" == $scale$$56$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 1) : "quarters" == $scale$$56$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 3) : "halfyears" == $scale$$56$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 6) : "years" == $scale$$56$$ ? $_nextDate$$.setFullYear($_nextDate$$.getFullYear() + 1) : "twoyears" == $scale$$56$$ ? 
  $_nextDate$$.setFullYear($_nextDate$$.getFullYear() + 2) : $_nextDate$$.setYear($_nextDate$$.getYear() + 1);
  return $_nextDate$$;
};
function $DvtTimeAxisFormatter$$($type$$193$$, $locale$$6$$) {
  this.Init($type$$193$$, $locale$$6$$);
}
dvt.$Obj$.$createSubclass$($DvtTimeAxisFormatter$$, dvt.$Obj$);
$DvtTimeAxisFormatter$$.$LONG$ = 0;
$DvtTimeAxisFormatter$$.SHORT = 1;
$DvtTimeAxisFormatter$$.prototype.Init = function $$DvtTimeAxisFormatter$$$$Init$($type$$194$$, $dateFormatStrings$$1$$) {
  this.$_type$ = $type$$194$$;
  this.$_dateFormatStrings$ = $dateFormatStrings$$1$$;
  this.$_formats$ = [];
  this.$_formats$[0] = {};
  this.$_formats$[0].seconds = "HH:MM:ss";
  this.$_formats$[0].minutes = "HH:MM";
  this.$_formats$[0].hours = "HH:MM";
  this.$_formats$[0].days = "dddd";
  this.$_formats$[0].weeks = "m/dd";
  this.$_formats$[0].months = "mmmm";
  this.$_formats$[0].quarters = "mmmm";
  this.$_formats$[0].halfyears = "yyyy";
  this.$_formats$[0].years = "yyyy";
  this.$_formats$[0].twoyears = "yyyy";
  this.$_formats$[1] = {};
  this.$_formats$[1].seconds = "HH:MM:ss";
  this.$_formats$[1].minutes = "HH:MM";
  this.$_formats$[1].hours = "HH:MM";
  this.$_formats$[1].days = "m/dd";
  this.$_formats$[1].weeks = "m/dd";
  this.$_formats$[1].months = "mmm";
  this.$_formats$[1].quarters = "mmm";
  this.$_formats$[1].halfyears = "yy";
  this.$_formats$[1].years = "yy";
  this.$_formats$[1].twoyears = "yy";
};
$DvtTimeAxisFormatter$$.prototype.format = function $$DvtTimeAxisFormatter$$$$format$($date$$15_timeInMS$$, $mask$$5_scale$$58$$, $newString_timeZoneOffsets$$1$$) {
  $mask$$5_scale$$58$$ = this.$_formats$[this.$_type$][$mask$$5_scale$$58$$];
  if (null != $mask$$5_scale$$58$$) {
    var $dates_isUTC$$ = !1;
    if ($newString_timeZoneOffsets$$1$$) {
      $date$$15_timeInMS$$ = $date$$15_timeInMS$$.getTime();
      for (var $dates_isUTC$$ = Object.keys($newString_timeZoneOffsets$$1$$), $offset$$34$$ = 0, $i$$632$$ = 0;$i$$632$$ < $dates_isUTC$$.length;$i$$632$$++) {
        $date$$15_timeInMS$$ >= parseInt($dates_isUTC$$[$i$$632$$], 10) && ($offset$$34$$ = $newString_timeZoneOffsets$$1$$[$dates_isUTC$$[$i$$632$$]]);
      }
      $date$$15_timeInMS$$ = new Date($date$$15_timeInMS$$ + $offset$$34$$);
      $dates_isUTC$$ = !0;
    }
    if (-1 != $mask$$5_scale$$58$$.indexOf(":")) {
      var $separator$$3$$ = ":"
    } else {
      -1 != $mask$$5_scale$$58$$.indexOf("/") && ($separator$$3$$ = "/");
    }
    if ($separator$$3$$) {
      $mask$$5_scale$$58$$ = $mask$$5_scale$$58$$.split($separator$$3$$);
      $newString_timeZoneOffsets$$1$$ = $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$15_timeInMS$$, $mask$$5_scale$$58$$[0], $dates_isUTC$$);
      for ($i$$632$$ = 1;$i$$632$$ < $mask$$5_scale$$58$$.length;$i$$632$$++) {
        $newString_timeZoneOffsets$$1$$ += $separator$$3$$ + $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$15_timeInMS$$, $mask$$5_scale$$58$$[$i$$632$$], $dates_isUTC$$);
      }
      return $newString_timeZoneOffsets$$1$$;
    }
    return $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$15_timeInMS$$, $mask$$5_scale$$58$$, $dates_isUTC$$);
  }
  return $date$$15_timeInMS$$.toLocaleString();
};
function $JSCompiler_StaticMethods_getDateFormatValue$$($JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$, $date$$16$$, $mask$$6$$, $isUTC$$1$$) {
  if ($isUTC$$1$$) {
    switch($mask$$6$$) {
      case "ss":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getUTCSeconds(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "HH":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getUTCHours(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "MM":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getUTCMinutes(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "dd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getUTCDate(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "dddd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$dayNames$[$date$$16$$.getUTCDay() + 7];
      case "m":
        return $date$$16$$.getUTCMonth() + 1;
      case "mmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$monthNames$[$date$$16$$.getUTCMonth()];
      case "mmmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$monthNames$[$date$$16$$.getUTCMonth() + 12];
      case "yy":
        return $date$$16$$.getUTCFullYear().toString().substring(2, 4);
      default:
        return $date$$16$$.getUTCFullYear();
    }
  } else {
    switch($mask$$6$$) {
      case "ss":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getSeconds(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "HH":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getHours(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "MM":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getMinutes(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "dd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getDate(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "dddd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$dayNames$[$date$$16$$.getDay() + 7];
      case "m":
        return $date$$16$$.getMonth() + 1;
      case "mmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$monthNames$[$date$$16$$.getMonth()];
      case "mmmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$monthNames$[$date$$16$$.getMonth() + 12];
      case "yy":
        return $date$$16$$.getFullYear().toString().substring(2, 4);
      default:
        return $date$$16$$.getFullYear();
    }
  }
}
;
dvt.$TimeComponent$ = function $dvt$$TimeComponent$$($context$$397$$, $callback$$159$$, $callbackObj$$90$$) {
  this.Init($context$$397$$, $callback$$159$$, $callbackObj$$90$$);
};
dvt.$Obj$.$createSubclass$(dvt.$TimeComponent$, dvt.$BaseComponent$);
$JSCompiler_prototypeAlias$$ = dvt.$TimeComponent$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$398$$, $callback$$160$$, $callbackObj$$91$$) {
  dvt.$TimeComponent$.$superclass$.Init.call(this, $context$$398$$, $callback$$160$$, $callbackObj$$91$$);
  this.$_virtualize$ = !1;
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($props$$3_width$$125$$, $height$$109$$, $options$$269$$) {
  $options$$269$$ && this.$SetOptions$($options$$269$$);
  this.$Width$ = $props$$3_width$$125$$;
  this.$Height$ = $height$$109$$;
  this.$Options$ && ($props$$3_width$$125$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($props$$3_width$$125$$));
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$270$$) {
  this.$Options$ = dvt.$JsonUtils$.clone($options$$270$$);
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$4$$) {
  this.$_start$ = $props$$4$$.start;
  this.$_end$ = $props$$4$$.end;
  this.$_inlineStyle$ = $props$$4$$.$inlineStyle$;
  this.$applyStyleValues$();
};
$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$.$parseInlineStyle$(this.$_inlineStyle$);
};
function $JSCompiler_StaticMethods_setContentLength$$($JSCompiler_StaticMethods_setContentLength$self$$, $length$$23$$) {
  $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$ < $length$$23$$ ? $length$$23$$ : $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$;
  $JSCompiler_StaticMethods_setContentLength$self$$.$_virtualize$ || ($JSCompiler_StaticMethods_setContentLength$self$$.$_fetchStartPos$ = 0, $JSCompiler_StaticMethods_setContentLength$self$$.$_fetchEndPos$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$);
}
$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return dvt.$Agent$.$isRightToLeft$(this.$getCtx$());
};
$JSCompiler_prototypeAlias$$.$isVertical$ = function $$JSCompiler_prototypeAlias$$$$isVertical$$() {
  return this.$_isVertical$;
};
function $JSCompiler_StaticMethods_renderTimeZoomCanvas$$($JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$, $container$$175$$) {
  $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_timeZoomCanvas$ ? $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_timeZoomCanvas$.$setClipPath$(null) : $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_timeZoomCanvas$ = new dvt.$Container$($JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$getCtx$(), "iCanvas");
  var $cp$$7$$ = new dvt.$ClipPath$;
  $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$isVertical$() ? ($cp$$7$$.$addRect$($JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_startX$, $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_startY$, $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_canvasSize$, $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_canvasLength$), $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_timeZoomCanvas$.$setTranslateX$($JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_startX$), 
  $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_timeZoomCanvas$.$setTranslateY$($JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_startY$ + $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_startPos$)) : ($cp$$7$$.$addRect$($JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_startX$, $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_startY$, $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_canvasLength$, $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_canvasSize$), 
  $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_timeZoomCanvas$.$setTranslateX$($JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_startX$ + $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_startPos$), $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_timeZoomCanvas$.$setTranslateY$($JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_startY$));
  $container$$175$$.$setClipPath$($cp$$7$$);
  $JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_timeZoomCanvas$.getParent() != $container$$175$$ && $container$$175$$.$addChild$($JSCompiler_StaticMethods_renderTimeZoomCanvas$self$$.$_timeZoomCanvas$);
}
$JSCompiler_prototypeAlias$$.$handleZoomWheel$ = function $$JSCompiler_prototypeAlias$$$$handleZoomWheel$$($newLength_viewTime$$, $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$, $compLoc$$1_s$$inline_3831_s$$inline_3834$$) {
  $newLength_viewTime$$ > this.$_maxContentLength$ ? ($newLength_viewTime$$ = this.$_maxContentLength$, $JSCompiler_StaticMethods_disableZoomButton$$(this, !0)) : $JSCompiler_StaticMethods_enableZoomButton$$(this, !0);
  this.$_canvasLength$ > $newLength_viewTime$$ ? ($newLength_viewTime$$ = this.$_canvasLength$, $JSCompiler_StaticMethods_disableZoomButton$$(this, !1)) : $JSCompiler_StaticMethods_enableZoomButton$$(this, !1);
  var $zoomIn$$ = this.$_contentLength$ <= $newLength_viewTime$$, $viewLength_widthFactor$$1$$ = (this.$_viewEndTime$ - this.$_viewStartTime$) / (this.$_end$ - this.$_start$) * this.$_contentLength$;
  $JSCompiler_StaticMethods_setContentLength$$(this, $newLength_viewTime$$);
  $newLength_viewTime$$ = $viewLength_widthFactor$$1$$ / this.$_contentLength$ * (this.$_end$ - this.$_start$);
  $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$ ? ($viewLength_widthFactor$$1$$ = (this.$_end$ - this.$_start$) / this.$_contentLength$, this.$_viewStartTime$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$ - $compLoc$$1_s$$inline_3831_s$$inline_3834$$ * $viewLength_widthFactor$$1$$, this.$_viewStartTime$ < this.$_start$ && 
  (this.$_viewStartTime$ = this.$_start$), this.$_viewEndTime$ = this.$_viewStartTime$ + $newLength_viewTime$$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$, this.$_viewStartTime$ = this.$_viewEndTime$ - $newLength_viewTime$$, this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$)), $JSCompiler_StaticMethods_setRelativeStartPos$$(this, 1 / $viewLength_widthFactor$$1$$ * (this.$_start$ - this.$_viewStartTime$))) : (this.$_viewStartTime$ = this.$_start$, 
  this.$_viewEndTime$ = this.$_viewStartTime$ + $newLength_viewTime$$, this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$), $JSCompiler_StaticMethods_setRelativeStartPos$$(this, 0));
  if ($zoomIn$$) {
    for (;0 < this.$_zoomLevelOrder$;) {
      if ($JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$ = this.$_zoomLevelLengths$[this.$_zoomLevelOrder$ - 1], this.$_contentLength$ >= $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$) {
        this.$_zoomLevelOrder$--;
        a: {
          for ($JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$ = this.$_timeAxis$, $compLoc$$1_s$$inline_3831_s$$inline_3834$$ = 1;$compLoc$$1_s$$inline_3831_s$$inline_3834$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$.$_zoomOrder$.length;$compLoc$$1_s$$inline_3831_s$$inline_3834$$++) {
            if ($JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$.$_zoomOrder$[$compLoc$$1_s$$inline_3831_s$$inline_3834$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$.$_zoomOrder$[$compLoc$$1_s$$inline_3831_s$$inline_3834$$ - 1];
              break a;
            }
          }
        }
        this.$_scale$ = this.$_timeAxis$.$_scale$;
      } else {
        break;
      }
    }
  } else {
    for (;this.$_zoomLevelOrder$ < this.$_zoomLevelLengths$.length - 1;) {
      if ($JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$ = this.$_zoomLevelLengths$[this.$_zoomLevelOrder$], this.$_contentLength$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$) {
        this.$_zoomLevelOrder$++;
        a: {
          for ($JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$ = this.$_timeAxis$, $compLoc$$1_s$$inline_3831_s$$inline_3834$$ = 0;$compLoc$$1_s$$inline_3831_s$$inline_3834$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$.$_zoomOrder$.length - 1;$compLoc$$1_s$$inline_3831_s$$inline_3834$$++) {
            if ($JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$.$_zoomOrder$[$compLoc$$1_s$$inline_3831_s$$inline_3834$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_3830_JSCompiler_StaticMethods_increaseScale$self$$inline_3833_minLength_time$$16$$.$_zoomOrder$[$compLoc$$1_s$$inline_3831_s$$inline_3834$$ + 1];
              break a;
            }
          }
        }
        this.$_scale$ = this.$_timeAxis$.$_scale$;
      } else {
        break;
      }
    }
  }
  $JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$$(this);
};
$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$11$$) {
  var $compLoc$$2$$ = this.$_isVertical$ ? this.$Height$ / 2 : this.$Width$ / 2;
  this.$handleZoomWheel$(this.$_contentLength$ * ((1 / $dz$$11$$ - 1) / 2 + 1), (this.$_end$ - this.$_start$) / this.$_contentLength$ * $compLoc$$2$$ + this.$_viewStartTime$, $compLoc$$2$$, !0);
};
function $JSCompiler_StaticMethods_panZoomCanvasBy$$($JSCompiler_StaticMethods_panZoomCanvasBy$self$$, $delta$$15$$) {
  if ($JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_isVertical$) {
    var $newTranslateX_newTranslateY_startPos$$2$$ = $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_timeZoomCanvas$.$getTranslateY$() - $delta$$15$$, $minTranslateX_minTranslateY_widthFactor$$4$$ = -($JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_contentLength$ - $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_canvasLength$ - $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_startY$), $maxTranslateX_maxTranslateY_viewTime$$1$$ = $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_startY$;
    $newTranslateX_newTranslateY_startPos$$2$$ < $minTranslateX_minTranslateY_widthFactor$$4$$ ? $newTranslateX_newTranslateY_startPos$$2$$ = $minTranslateX_minTranslateY_widthFactor$$4$$ : $newTranslateX_newTranslateY_startPos$$2$$ > $maxTranslateX_maxTranslateY_viewTime$$1$$ && ($newTranslateX_newTranslateY_startPos$$2$$ = $maxTranslateX_maxTranslateY_viewTime$$1$$);
    $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_timeZoomCanvas$.$setTranslateY$($newTranslateX_newTranslateY_startPos$$2$$);
    $newTranslateX_newTranslateY_startPos$$2$$ -= $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_startY$;
    $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_startPos$ = $newTranslateX_newTranslateY_startPos$$2$$;
  } else {
    $newTranslateX_newTranslateY_startPos$$2$$ = $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_timeZoomCanvas$.$getTranslateX$() - $delta$$15$$, $minTranslateX_minTranslateY_widthFactor$$4$$ = -($JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_contentLength$ - $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_canvasLength$ - $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_startX$), $maxTranslateX_maxTranslateY_viewTime$$1$$ = $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_startX$, 
    $newTranslateX_newTranslateY_startPos$$2$$ < $minTranslateX_minTranslateY_widthFactor$$4$$ ? $newTranslateX_newTranslateY_startPos$$2$$ = $minTranslateX_minTranslateY_widthFactor$$4$$ : $newTranslateX_newTranslateY_startPos$$2$$ > $maxTranslateX_maxTranslateY_viewTime$$1$$ && ($newTranslateX_newTranslateY_startPos$$2$$ = $maxTranslateX_maxTranslateY_viewTime$$1$$), $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_timeZoomCanvas$.$setTranslateX$($newTranslateX_newTranslateY_startPos$$2$$), $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_startPos$ = 
    $newTranslateX_newTranslateY_startPos$$2$$ - $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_startX$, $newTranslateX_newTranslateY_startPos$$2$$ = $JSCompiler_StaticMethods_getRelativeStartPos$$($JSCompiler_StaticMethods_panZoomCanvasBy$self$$);
  }
  $minTranslateX_minTranslateY_widthFactor$$4$$ = $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_contentLength$ / ($JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_end$ - $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_start$);
  $maxTranslateX_maxTranslateY_viewTime$$1$$ = $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_viewStartTime$;
  $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_start$ - $newTranslateX_newTranslateY_startPos$$2$$ / $minTranslateX_minTranslateY_widthFactor$$4$$;
  $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_panZoomCanvasBy$self$$.$_viewStartTime$ + $maxTranslateX_maxTranslateY_viewTime$$1$$;
}
function $JSCompiler_StaticMethods_enableZoomButton$$($JSCompiler_StaticMethods_enableZoomButton$self$$, $isZoomIn$$) {
  $isZoomIn$$ ? ($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$.$setEnabled$(!0), $JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$.$drawUpState$()) : ($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$.$setEnabled$(!0), $JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$.$drawUpState$());
}
function $JSCompiler_StaticMethods_disableZoomButton$$($JSCompiler_StaticMethods_disableZoomButton$self$$, $isZoomIn$$1$$) {
  $isZoomIn$$1$$ ? ($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.$setEnabled$(!1), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.$drawDisabledState$(), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.setCursor(null)) : ($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.$setEnabled$(!1), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.$drawDisabledState$(), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.setCursor(null));
}
function $JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$$($JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$self$$) {
  $JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$self$$.$_timeZoomCanvas$.$setTranslateY$($JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$self$$.$_startY$ + $JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$self$$.$_startPos$) : $JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$self$$.$_timeZoomCanvas$.$setTranslateX$($JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$self$$.$_startX$ + $JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$self$$.$_startPos$);
}
function $JSCompiler_StaticMethods_getRelativeStartPos$$($JSCompiler_StaticMethods_getRelativeStartPos$self$$) {
  return $JSCompiler_StaticMethods_getRelativeStartPos$self$$.$isRTL$() && !$JSCompiler_StaticMethods_getRelativeStartPos$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_getRelativeStartPos$self$$.$_canvasLength$ - $JSCompiler_StaticMethods_getRelativeStartPos$self$$.$_contentLength$ - $JSCompiler_StaticMethods_getRelativeStartPos$self$$.$_startPos$ : $JSCompiler_StaticMethods_getRelativeStartPos$self$$.$_startPos$;
}
function $JSCompiler_StaticMethods_setRelativeStartPos$$($JSCompiler_StaticMethods_setRelativeStartPos$self$$, $startPos$$4$$) {
  $JSCompiler_StaticMethods_setRelativeStartPos$self$$.$isRTL$() && !$JSCompiler_StaticMethods_setRelativeStartPos$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_setRelativeStartPos$self$$.$_startPos$ = $JSCompiler_StaticMethods_setRelativeStartPos$self$$.$_canvasLength$ - $JSCompiler_StaticMethods_setRelativeStartPos$self$$.$_contentLength$ - $startPos$$4$$ : $JSCompiler_StaticMethods_setRelativeStartPos$self$$.$_startPos$ = $startPos$$4$$;
}
;
var $DvtTimeUtils$$ = {$supportsTouch$:function() {
  return dvt.$Agent$.$isTouchDevice$();
}};
dvt.$Obj$.$createSubclass$($DvtTimeUtils$$, dvt.$Obj$);
$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$2_startTime$$12$$, $endTime$$9$$, $number$$3_time$$18$$, $width$$126$$) {
  $number$$3_time$$18$$ = ($number$$3_time$$18$$ - $denominator$$2_startTime$$12$$) * $width$$126$$;
  $denominator$$2_startTime$$12$$ = $endTime$$9$$ - $denominator$$2_startTime$$12$$;
  return 0 == $number$$3_time$$18$$ || 0 == $denominator$$2_startTime$$12$$ ? 0 : $number$$3_time$$18$$ / $denominator$$2_startTime$$12$$;
};
$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$13$$, $endTime$$10_number$$4$$, $pos$$68$$, $width$$127$$) {
  $endTime$$10_number$$4$$ = $pos$$68$$ * ($endTime$$10_number$$4$$ - $startTime$$13$$);
  return 0 == $endTime$$10_number$$4$$ || 0 == $width$$127$$ ? $startTime$$13$$ : $endTime$$10_number$$4$$ / $width$$127$$ + $startTime$$13$$;
};
function $DvtTimelineKeyboardHandler$$($manager$$28$$) {
  this.Init($manager$$28$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineKeyboardHandler$$, dvt.$KeyboardHandler$);
$DvtTimelineKeyboardHandler$$.prototype.Init = function $$DvtTimelineKeyboardHandler$$$$Init$($manager$$29$$) {
  $DvtTimelineKeyboardHandler$$.$superclass$.Init.call(this, $manager$$29$$);
};
$DvtTimelineKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isSelectionEvent$$($event$$519$$) {
  return this.$isNavigationEvent$($event$$519$$) && !$event$$519$$.ctrlKey;
};
$DvtTimelineKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isMultiSelectEvent$$($event$$520$$) {
  return $event$$520$$.keyCode == dvt.KeyboardEvent.$SPACE$ && $event$$520$$.ctrlKey;
};
$DvtTimelineKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtTimelineKeyboardHandler$$$$$processKeyDown$$($event$$521$$) {
  var $keyCode$$34$$ = $event$$521$$.keyCode;
  dvt.KeyboardEvent.$isEquals$($event$$521$$) || dvt.KeyboardEvent.$isPlus$($event$$521$$) ? this.$_eventManager$.$zoomBy$(1 / dvt.$Timeline$.$ZOOM_BY_VALUE$) : dvt.KeyboardEvent.$isMinus$($event$$521$$) || dvt.KeyboardEvent.$isUnderscore$($event$$521$$) ? this.$_eventManager$.$zoomBy$(dvt.$Timeline$.$ZOOM_BY_VALUE$) : $keyCode$$34$$ == dvt.KeyboardEvent.$PAGE_UP$ ? ($event$$521$$.shiftKey ? this.$_eventManager$.$panBy$(-.25, 0) : this.$_eventManager$.$panBy$(0, -.25), dvt.$EventManager$.$consumeEvent$($event$$521$$)) : 
  $keyCode$$34$$ == dvt.KeyboardEvent.$PAGE_DOWN$ && ($event$$521$$.shiftKey ? this.$_eventManager$.$panBy$(.25, 0) : this.$_eventManager$.$panBy$(0, .25), dvt.$EventManager$.$consumeEvent$($event$$521$$));
  return $DvtTimelineKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$521$$);
};
function $DvtTimelineKeyboardHandler$getNextNavigable$$($currentNavigable$$13$$, $event$$522$$, $navigableItems$$4$$) {
  var $isVertical$$3_series$$12$$ = $currentNavigable$$13$$.$getSeries$(), $seriesIndex$$134$$ = $currentNavigable$$13$$.$getSeriesIndex$(), $isRTL$$41$$ = dvt.$Agent$.$isRightToLeft$($isVertical$$3_series$$12$$.$getCtx$()), $isVertical$$3_series$$12$$ = $isVertical$$3_series$$12$$.$isVertical$(), $isDualSeries$$ = 1 < $navigableItems$$4$$.length;
  if (!$isRTL$$41$$ && dvt.KeyboardEvent.$RIGHT_ARROW$ == $event$$522$$.keyCode || $isRTL$$41$$ && dvt.KeyboardEvent.$LEFT_ARROW$ == $event$$522$$.keyCode) {
    if (!$isVertical$$3_series$$12$$) {
      return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$134$$], !0);
    }
    if ($isDualSeries$$ && 1 != $seriesIndex$$134$$) {
      return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[1]);
    }
  } else {
    if (!$isRTL$$41$$ && dvt.KeyboardEvent.$LEFT_ARROW$ == $event$$522$$.keyCode || $isRTL$$41$$ && dvt.KeyboardEvent.$RIGHT_ARROW$ == $event$$522$$.keyCode) {
      if (!$isVertical$$3_series$$12$$) {
        return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$134$$], !1);
      }
      if ($isDualSeries$$ && 0 != $seriesIndex$$134$$) {
        return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[0]);
      }
    } else {
      if (dvt.KeyboardEvent.$DOWN_ARROW$ == $event$$522$$.keyCode) {
        if ($isVertical$$3_series$$12$$) {
          return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$134$$], !0);
        }
        if ($isDualSeries$$ && 1 != $seriesIndex$$134$$) {
          return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[1]);
        }
      } else {
        if (dvt.KeyboardEvent.$UP_ARROW$ == $event$$522$$.keyCode) {
          if ($isVertical$$3_series$$12$$) {
            return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$134$$], !1);
          }
          if ($isDualSeries$$ && 0 != $seriesIndex$$134$$) {
            return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[0]);
          }
        }
      }
    }
  }
  return null;
}
function $DvtTimelineKeyboardHandler$getNextItem$$($item$$50_nextIndex$$5$$, $navigableItems$$5$$, $isNext$$) {
  $item$$50_nextIndex$$5$$ = dvt.$ArrayUtils$.$getIndex$($navigableItems$$5$$, $item$$50_nextIndex$$5$$) + ($isNext$$ ? 1 : -1);
  return 0 <= $item$$50_nextIndex$$5$$ && $item$$50_nextIndex$$5$$ < $navigableItems$$5$$.length ? $navigableItems$$5$$[$item$$50_nextIndex$$5$$] : null;
}
function $DvtTimelineKeyboardHandler$getClosestItem$$($item$$51$$, $navigableItems$$6$$) {
  if (0 < $navigableItems$$6$$.length) {
    for (var $closest$$ = $navigableItems$$6$$[0], $itemLoc$$ = $item$$51$$.$_loc$, $dist$$1$$ = Math.abs($itemLoc$$ - $closest$$.$_loc$), $i$$633$$ = 1;$i$$633$$ < $navigableItems$$6$$.length;$i$$633$$++) {
      var $testDist$$ = Math.abs($itemLoc$$ - $navigableItems$$6$$[$i$$633$$].$_loc$);
      $testDist$$ < $dist$$1$$ && ($dist$$1$$ = $testDist$$, $closest$$ = $navigableItems$$6$$[$i$$633$$]);
    }
    return $closest$$;
  }
  return null;
}
function $DvtTimelineEventManager$$($timeline$$) {
  this.Init($timeline$$.$getCtx$(), $timeline$$.$processEvent$, $timeline$$);
  this.$_timeline$ = $timeline$$;
  this.$_isPinchZoom$ = this.$_isDragPanning$ = !1;
}
dvt.$Obj$.$createSubclass$($DvtTimelineEventManager$$, dvt.$EventManager$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$83_stage$$11$$) {
  $DvtTimelineEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$83_stage$$11$$);
  dvt.$SvgDocumentUtils$.$addDragListeners$(this.$_timeline$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  dvt.$Agent$.$isTouchDevice$() || (dvt.$Agent$.$isPlatformGecko$() ? $displayable$$83_stage$$11$$.$addEvtListener$("wheel", this.$OnMouseWheel$, !1, this) : $displayable$$83_stage$$11$$.$addEvtListener$(dvt.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this), dvt.$Agent$.$isPlatformIE$() && ($displayable$$83_stage$$11$$ = this.$getCtx$().$_stage$, $displayable$$83_stage$$11$$.$addEvtListener$("mouseenter", this.$OnMouseEnter$, !1, this), $displayable$$83_stage$$11$$.$addEvtListener$("mouseleave", 
  this.$OnMouseLeave$, !1, this)));
};
$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$84_stage$$12$$) {
  $DvtTimelineEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$84_stage$$12$$);
  dvt.$Agent$.$isTouchDevice$() || (dvt.$Agent$.$isPlatformGecko$() ? $displayable$$84_stage$$12$$.$removeEvtListener$("wheel", this.$OnMouseWheel$, !1, this) : $displayable$$84_stage$$12$$.$removeEvtListener$(dvt.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this), dvt.$Agent$.$isPlatformIE$() && ($displayable$$84_stage$$12$$ = this.$getCtx$().$_stage$, $displayable$$84_stage$$12$$.$removeEvtListener$("mouseenter", this.$OnMouseEnter$, !1, this), $displayable$$84_stage$$12$$.$removeEvtListener$("mouseleave", 
  this.$OnMouseLeave$, !1, this)));
};
$JSCompiler_prototypeAlias$$.$OnKeyDown$ = function $$JSCompiler_prototypeAlias$$$$OnKeyDown$$($event$$523$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnKeyDown$.call(this, $event$$523$$);
  this.$_timeline$.$HandleKeyDown$($event$$523$$);
};
$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$524$$) {
  this.$_isDragPanning$ || ($DvtTimelineEventManager$$.$superclass$.$OnClick$.call(this, $event$$524$$), $JSCompiler_StaticMethods_handleShapeClick$$(this.$_timeline$, $event$$524$$));
};
$JSCompiler_prototypeAlias$$.$PreOnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOver$$($event$$525$$) {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseOver$.call(this, $event$$525$$);
  dvt.$Agent$.$isPlatformIE$() || this.$isMouseOver$ || (this.$isMouseOver$ = !0, $JSCompiler_StaticMethods_isAnimating$$(this.$_timeline$) || $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_timeline$));
};
$JSCompiler_prototypeAlias$$.$OnMouseEnter$ = function $$JSCompiler_prototypeAlias$$$$OnMouseEnter$$() {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  this.$isMouseOver$ || (this.$isMouseOver$ = !0, $JSCompiler_StaticMethods_isAnimating$$(this.$_timeline$) || $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_timeline$));
};
$JSCompiler_prototypeAlias$$.$OnMouseLeave$ = function $$JSCompiler_prototypeAlias$$$$OnMouseLeave$$() {
  this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new dvt.$Timer$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1));
  this.$_mouseOutTimer$.reset();
  this.$_mouseOutTimer$.start();
};
$JSCompiler_prototypeAlias$$.$PreOnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOut$$($event$$528$$) {
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseOut$.call(this, $event$$528$$);
  dvt.$Agent$.$isPlatformIE$() || (this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new dvt.$Timer$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1)), this.$_mouseOutTimer$.reset(), this.$_mouseOutTimer$.start());
};
$JSCompiler_prototypeAlias$$.$_onMouseOutTimerEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseOutTimerEnd$$() {
  this.$isMouseOver$ = !1;
};
$JSCompiler_prototypeAlias$$.$PreOnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseDown$$($event$$529$$) {
  this.$_isDragPanning$ = !1;
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseDown$.call(this, $event$$529$$);
  this.$_timeline$.$HandleMouseDown$($event$$529$$);
};
$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($compLoc$$inline_3849_event$$530$$) {
  var $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_3845$$ = this.$_timeline$;
  dvt.$EventManager$.$consumeEvent$($compLoc$$inline_3849_event$$530$$);
  var $wheelDelta$$inline_3847$$ = $compLoc$$inline_3849_event$$530$$.wheelDelta;
  if ($JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_3845$$) && $wheelDelta$$inline_3847$$) {
    var $compPagePos$$inline_3848$$ = $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_3845$$.$getCtx$().$getStageAbsolutePosition$();
    $compLoc$$inline_3849_event$$530$$ = $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_3845$$.$_isVertical$ ? $compLoc$$inline_3849_event$$530$$.pageY - $compPagePos$$inline_3848$$.y : $compLoc$$inline_3849_event$$530$$.pageX - $compPagePos$$inline_3848$$.x;
    $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_3845$$.$handleZoomWheel$($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_3845$$.$_contentLength$ * (.02 * $wheelDelta$$inline_3847$$ + 1), ($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_3845$$.$_end$ - $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_3845$$.$_start$) / $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_3845$$.$_contentLength$ * $compLoc$$inline_3849_event$$530$$ + $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_3845$$.$_viewStartTime$, 
    $compLoc$$inline_3849_event$$530$$, !0);
  }
};
$JSCompiler_prototypeAlias$$.$OnTouchStartBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchStartBubble$$($event$$531$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnTouchStartBubble$.call(this, $event$$531$$);
  this.$_timeline$.$HandleTouchStart$($event$$531$$);
  this.$_timeline$.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
};
$JSCompiler_prototypeAlias$$.$OnTouchEndBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchEndBubble$$($event$$532$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnTouchEndBubble$.call(this, $event$$532$$);
  this.$_timeline$.$HandleTouchEnd$($event$$532$$);
};
$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$533$$) {
  if ($JSCompiler_StaticMethods_hasValidOptions$$(this.$_timeline$)) {
    return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($event$$533$$) : this.$_onMouseDragStart$($event$$533$$);
  }
};
$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$534$$) {
  return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($event$$534$$) : this.$_onMouseDragMove$($event$$534$$);
};
$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$535$$) {
  return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($event$$535$$) : this.$_onMouseDragEnd$($event$$535$$);
};
$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$8$$, $pageY$$8$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
  return new dvt.$Point$($pageX$$8$$ - this.$_stageAbsolutePosition$.x, $pageY$$8$$ - this.$_stageAbsolutePosition$.y);
};
$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$536_relPos$$51$$) {
  return $event$$536_relPos$$51$$.button != dvt.MouseEvent.$RIGHT_CLICK_BUTTON$ ? ($event$$536_relPos$$51$$ = this.$_getRelativePosition$($event$$536_relPos$$51$$.pageX, $event$$536_relPos$$51$$.pageY), this.$_timeline$.$beginDragPan$($event$$536_relPos$$51$$.x, $event$$536_relPos$$51$$.y), !0) : !1;
};
$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$537_relPos$$52$$) {
  $event$$537_relPos$$52$$ = this.$_getRelativePosition$($event$$537_relPos$$52$$.pageX, $event$$537_relPos$$52$$.pageY);
  this.$_timeline$.$contDragPan$($event$$537_relPos$$52$$.x, $event$$537_relPos$$52$$.y) && (this.$_isDragPanning$ = !0);
};
$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$() {
  this.$_timeline$.$endDragPan$();
  this.$_stageAbsolutePosition$ = null;
};
$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$539_relPos$$53$$) {
  var $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$ = $event$$539_relPos$$53$$.touches;
  if (1 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.length) {
    return $event$$539_relPos$$53$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$[0].pageY), this.$_timeline$.$beginDragPan$($event$$539_relPos$$53$$.x, $event$$539_relPos$$53$$.y), !0;
  }
  if (2 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.length) {
    this.$_timeline$.$endDragPan$();
    this.$_isPinchZoom$ = !0;
    var $relPos1$$2_y1$$inline_3854$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$[0].pageY), $relPos2$$2_y2$$inline_3856$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$[1].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$[1].pageY), $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$ = 
    this.$_timeline$, $x1$$inline_3853$$ = $relPos1$$2_y1$$inline_3854$$.x, $relPos1$$2_y1$$inline_3854$$ = $relPos1$$2_y1$$inline_3854$$.y, $x2$$inline_3855$$ = $relPos2$$2_y2$$inline_3856$$.x, $relPos2$$2_y2$$inline_3856$$ = $relPos2$$2_y2$$inline_3856$$.y;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.$_initialPinchZoomLoc$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.$_isVertical$ ? Math.sqrt(($relPos1$$2_y1$$inline_3854$$ - $relPos2$$2_y2$$inline_3856$$) * ($relPos1$$2_y1$$inline_3854$$ - $relPos2$$2_y2$$inline_3856$$)) + ($relPos1$$2_y1$$inline_3854$$ < $relPos2$$2_y2$$inline_3856$$ ? $relPos1$$2_y1$$inline_3854$$ : $relPos2$$2_y2$$inline_3856$$) : Math.sqrt(($x1$$inline_3853$$ - $x2$$inline_3855$$) * 
    ($x1$$inline_3853$$ - $x2$$inline_3855$$)) + ($x1$$inline_3853$$ < $x2$$inline_3855$$ ? $x1$$inline_3853$$ : $x2$$inline_3855$$);
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.$_initialPinchZoomTime$ = ($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.$_end$ - $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.$_start$) / $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.$_contentLength$ * $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.$_initialPinchZoomLoc$ + $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.$_viewStartTime$;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.$_initialPinchZoomDist$ = Math.sqrt(($x1$$inline_3853$$ - $x2$$inline_3855$$) * ($x1$$inline_3853$$ - $x2$$inline_3855$$) + ($relPos1$$2_y1$$inline_3854$$ - $relPos2$$2_y2$$inline_3856$$) * ($relPos1$$2_y1$$inline_3854$$ - $relPos2$$2_y2$$inline_3856$$));
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.$_initialPinchZoomLength$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_3852_touches$$9$$.$_contentLength$;
    dvt.$EventManager$.$consumeEvent$($event$$539_relPos$$53$$);
    return !0;
  }
  return !1;
};
$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$540$$) {
  var $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$ = $event$$540$$.touches;
  if (1 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$.length) {
    $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$[0].pageY), this.$_timeline$.$contDragPan$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$.x, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$.y), 
    $event$$540$$.preventDefault();
  } else {
    if (2 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$.length) {
      var $relPos1$$3_y1$$inline_3860$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$[0].pageY), $relPos2$$3_y2$$inline_3862$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$[1].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$[1].pageY), 
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$ = this.$_timeline$, $currPinchZoomDist$$inline_3863_x1$$inline_3859$$ = $relPos1$$3_y1$$inline_3860$$.x, $relPos1$$3_y1$$inline_3860$$ = $relPos1$$3_y1$$inline_3860$$.y, $x2$$inline_3861$$ = $relPos2$$3_y2$$inline_3862$$.x, $relPos2$$3_y2$$inline_3862$$ = $relPos2$$3_y2$$inline_3862$$.y, $currPinchZoomDist$$inline_3863_x1$$inline_3859$$ = Math.sqrt(($currPinchZoomDist$$inline_3863_x1$$inline_3859$$ - $x2$$inline_3861$$) * 
      ($currPinchZoomDist$$inline_3863_x1$$inline_3859$$ - $x2$$inline_3861$$) + ($relPos1$$3_y1$$inline_3860$$ - $relPos2$$3_y2$$inline_3862$$) * ($relPos1$$3_y1$$inline_3860$$ - $relPos2$$3_y2$$inline_3862$$));
      $currPinchZoomDist$$inline_3863_x1$$inline_3859$$ != $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$.$_initialPinchZoomDist$ && ($JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$.$_triggerViewportChange$ = !0);
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$.$handleZoomWheel$($currPinchZoomDist$$inline_3863_x1$$inline_3859$$ / $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$.$_initialPinchZoomDist$ * $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$.$_initialPinchZoomLength$, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$.$_initialPinchZoomTime$, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_3858_relPos$$54_touches$$10$$.$_initialPinchZoomLoc$, 
      !1);
      $event$$540$$.preventDefault();
    }
  }
};
$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$541$$) {
  if (this.$_isPinchZoom$) {
    this.$_isPinchZoom$ = !1;
    var $JSCompiler_StaticMethods_endPinchZoom$self$$inline_3865$$ = this.$_timeline$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_3865$$.$_initialPinchZoomDist$ = null;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_3865$$.$_initialPinchZoomLoc$ = null;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_3865$$.$_initialPinchZoomLength$ = null;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_3865$$.$_initialPinchZoomTime$ = null;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_3865$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPinchZoom$self$$inline_3865$$.$_triggerViewportChange$ = !1, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_3865$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_endPinchZoom$self$$inline_3865$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_3865$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_3865$$.$_scale$)));
  } else {
    this.$_timeline$.$endDragPan$();
  }
  $event$$541$$.preventDefault();
  this.$_stageAbsolutePosition$ = null;
};
$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$12$$) {
  this.$_timeline$.$zoomBy$($dz$$12$$);
};
$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$22$$, $dy$$24$$) {
  var $deltaX$$16$$ = $dx$$22$$ * this.$_timeline$.$_canvasLength$ * (dvt.$Agent$.$isRightToLeft$(this.$_context$) ? -1 : 1), $deltaY$$16$$ = $dy$$24$$ * this.$_timeline$.$_seriesSize$;
  0 != $deltaX$$16$$ && (this.$_timeline$.$_triggerViewportChange$ = !0);
  var $focusObj$$4$$ = this.$getFocus$();
  $focusObj$$4$$ && (this.$_timeline$.$_dragPanSeries$ = $focusObj$$4$$.$_series$);
  this.$_timeline$.$panBy$($deltaX$$16$$, $deltaY$$16$$);
  $JSCompiler_StaticMethods_endPan$$(this.$_timeline$);
};
$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  this.$_timeline$.$zoomBy$(1 / dvt.$Timeline$.$ZOOM_BY_VALUE$);
};
$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  this.$_timeline$.$zoomBy$(dvt.$Timeline$.$ZOOM_BY_VALUE$);
};
$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  return dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$;
};
dvt.$Timeline$ = function $dvt$$Timeline$$($context$$399$$, $callback$$161$$, $callbackObj$$92$$) {
  this.Init($context$$399$$, $callback$$161$$, $callbackObj$$92$$);
};
$goog$exportPath_$$("dvt.Timeline", dvt.$Timeline$);
dvt.$Obj$.$createSubclass$(dvt.$Timeline$, dvt.$TimeComponent$);
dvt.$Timeline$.$ZOOM_BY_VALUE$ = 1.5;
dvt.$Timeline$.$ORIENTATION_VERTICAL$ = "vertical";
dvt.$Timeline$.newInstance = function $dvt$$Timeline$$newInstance$($context$$400$$, $callback$$162$$, $callbackObj$$93$$) {
  return new dvt.$Timeline$($context$$400$$, $callback$$162$$, $callbackObj$$93$$);
};
dvt.$Timeline$.newInstance = dvt.$Timeline$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$Timeline$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$401$$, $callback$$163$$, $callbackObj$$94$$) {
  dvt.$Timeline$.$superclass$.Init.call(this, $context$$401$$, $callback$$163$$, $callbackObj$$94$$);
  this.$Defaults$ = new $DvtTimelineDefaults$$;
  this.$EventManager$ = new $DvtTimelineEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  dvt.$Agent$.$isTouchDevice$() ? this.$_keyboardHandler$ = null : (this.$_keyboardHandler$ = new $DvtTimelineKeyboardHandler$$(this.$EventManager$), this.$EventManager$.$setKeyboardHandler$(this.$_keyboardHandler$));
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$271$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$271$$);
  dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none");
};
$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($options$$272$$) {
  this.$_parser$ = new $DvtTimelineParser$$;
  return this.$_parser$.parse($options$$272$$);
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$5$$) {
  var $orientation$$3$$ = this.$Options$.orientation;
  this.$_isVertical$ = $orientation$$3$$ && $orientation$$3$$ == dvt.$Timeline$.$ORIENTATION_VERTICAL$ ? !0 : !1;
  this.$_hasOverview$ = $props$$5$$.$hasOverview$;
  this.$_viewStartTime$ = $props$$5$$.$viewStart$;
  this.$_viewEndTime$ = $props$$5$$.$viewEnd$;
  this.$_selectionMode$ = $props$$5$$.$selectionMode$;
  this.$SelectionHandler$ = "single" == this.$_selectionMode$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == this.$_selectionMode$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_MULTIPLE$) : null;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  this.$_axisInlineStyle$ = $props$$5$$.$axisStyle$;
  this.$_shortDesc$ = $props$$5$$.$shortDesc$;
  this.$_referenceObjects$ = $props$$5$$.$referenceObjects$;
  this.$_zoomOrder$ = $props$$5$$.$zoomOrder$;
  this.$_seriesScale$ = $props$$5$$.$seriesScale$;
  this.$_dateFormatStrings$ = {$dayNames$:[dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_SUNDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_MONDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_TUESDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_WEDNESDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_THURSDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "DAY_SHORT_FRIDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_SATURDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SUNDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_MONDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_TUESDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_WEDNESDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "DAY_THURSDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_FRIDAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SATURDAY", null)], $monthNames$:[dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JANUARY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_FEBRUARY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MARCH", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_SHORT_APRIL", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JUNE", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JULY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_AUGUST", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_SEPTEMBER", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_SHORT_OCTOBER", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_NOVEMBER", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_DECEMBER", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_JANUARY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_FEBRUARY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_MARCH", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_APRIL", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_MAY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_JUNE", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_JULY", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_AUGUST", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SEPTEMBER", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_OCTOBER", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_NOVEMBER", null), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_DECEMBER", null)]};
  this.$_timeZoneOffsets$ = $props$$5$$.$timeZoneOffsets$;
  this.$_seriesScale$ ? (this.$_seriesConverter$ = $props$$5$$.$seriesConverter$, this.$_seriesTimeAxis$ = new dvt.$TimeAxis$(this.$getCtx$(), null, null), this.$_seriesTimeAxis$.$_contentSize$ = this.$_isVertical$ ? dvt.$TimeAxis$.$DEFAULT_INTERVAL_WIDTH$ : dvt.$TimeAxis$.$DEFAULT_INTERVAL_HEIGHT$, this.$_seriesTimeAxis$.$setScale$(this.$_seriesScale$), this.$_seriesTimeAxis$.$_converter$ = this.$_seriesConverter$, this.$_seriesCustomFormatScales$ = $props$$5$$.$seriesCustomFormatScales$, this.$_isVertical$ ? 
  (this.$_seriesTimeAxis$.$setType$("short", this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = this.$_resources$.converterVert) : (this.$_seriesTimeAxis$.$setType$("long", this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = this.$_resources$.converter), this.$_timeZoneOffsets$ && (this.$_seriesTimeAxis$.$_timeZoneOffsets$ = this.$_timeZoneOffsets$)) : this.$_seriesTimeAxis$ = null;
  this.$_defaultInversions$ = [!1, !0];
  this.$_itemPosition$ = $props$$5$$.$itemPosition$;
  this.$_customTimeScales$ = $props$$5$$.$customTimeScales$;
  this.$_customFormatScales$ = $props$$5$$.$customFormatScales$;
  this.$_scale$ = $props$$5$$.scale;
  this.$_converter$ = $props$$5$$.$converter$;
  dvt.$Timeline$.$superclass$.$_applyParsedProperties$.call(this, $props$$5$$);
};
function $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$, $seriesCount$$25$$) {
  return $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_hasOverview$ || 1 != $seriesCount$$25$$ ? $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$() : $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$() - $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getBorderWidth$();
}
$JSCompiler_prototypeAlias$$.select = function $$JSCompiler_prototypeAlias$$$select$($selection$$26$$) {
  this.$Options$.selection = dvt.$JsonUtils$.clone($selection$$26$$);
  this.$SelectionHandler$ && $JSCompiler_StaticMethods_applyInitialSelections$$(this);
};
dvt.$Timeline$.prototype.select = dvt.$Timeline$.prototype.select;
dvt.$Timeline$.prototype.$render$ = function $dvt$$Timeline$$$$render$$($context$$inline_3896_i$$inline_3924_options$$273_props$$6$$, $series$$inline_3922_startTime$$inline_3894_width$$128$$, $endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$) {
  if ($context$$inline_3896_i$$inline_3924_options$$273_props$$6$$) {
    this.$SetOptions$($context$$inline_3896_i$$inline_3924_options$$273_props$$6$$);
    this.$Options$ && (this.$_resources$ = this.$Options$._resources, null == this.$_resources$ && (this.$_resources$ = []));
    this.$Width$ = $series$$inline_3922_startTime$$inline_3894_width$$128$$;
    this.$Height$ = $endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$;
    $context$$inline_3896_i$$inline_3924_options$$273_props$$6$$ = this.$Parse$(this.$Options$);
    this.$_applyParsedProperties$($context$$inline_3896_i$$inline_3924_options$$273_props$$6$$);
    this.$_fetchStartPos$ = 0;
    this.$_fetchEndPos$ = this.$_isVertical$ ? $endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$ : $series$$inline_3922_startTime$$inline_3894_width$$128$$;
    this.$Options$.styleDefaults && (this.$_axisStyleDefaults$ = this.$Options$.styleDefaults.minorAxis, this.$_majorAxisStyleDefaults$ = this.$Options$.styleDefaults.majorAxis, this.$_seriesStyleDefaults$ = this.$Options$.styleDefaults.series);
    $JSCompiler_StaticMethods_prepareViewportLength$$(this);
    if (this.$_scale$) {
      $series$$inline_3922_startTime$$inline_3894_width$$128$$ = this.$_start$;
      $endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$ = this.$_end$;
      $context$$inline_3896_i$$inline_3924_options$$273_props$$6$$ = this.$getCtx$();
      var $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$ = $DvtTimelineStyleUtils$$.$getAxisLabelStyle$(this.$Options$);
      this.$_timeAxis$ = new dvt.$TimeAxis$($context$$inline_3896_i$$inline_3924_options$$273_props$$6$$, null, null);
      this.$_timeAxis$.$_contentSize$ = this.$_isVertical$ ? dvt.$TimeAxis$.$DEFAULT_INTERVAL_WIDTH$ : dvt.$TimeAxis$.$DEFAULT_INTERVAL_HEIGHT$;
      this.$_timeAxis$.$_zoomOrder$ = this.$_zoomOrder$;
      this.$_timeAxis$.$_converter$ = this.$_converter$;
      this.$_timeAxis$.$setType$("short", this.$_dateFormatStrings$);
      this.$_dates$ = [];
      this.$_labels$ = [];
      this.$_zoomLevelLengths$ = [];
      if (this.$_isVertical$) {
        var $defaultLength$$inline_3898$$ = dvt.$TimeAxis$.$DEFAULT_INTERVAL_HEIGHT$;
        this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converterVert;
      } else {
        $defaultLength$$inline_3898$$ = dvt.$TimeAxis$.$DEFAULT_INTERVAL_WIDTH$, this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converter;
      }
      this.$_timeZoneOffsets$ && (this.$_timeAxis$.$_timeZoneOffsets$ = this.$_timeZoneOffsets$);
      for (var $i$$inline_3899$$ = 0;$i$$inline_3899$$ < this.$_timeAxis$.$_zoomOrder$.length;$i$$inline_3899$$++) {
        var $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$ = this.$_timeAxis$.$_zoomOrder$[$i$$inline_3899$$];
        this.$_timeAxis$.$setScale$($scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$);
        var $JSCompiler_StaticMethods_setContentSize$self$$inline_5001_axis$$inline_3901$$ = new dvt.Rect($context$$inline_3896_i$$inline_3924_options$$273_props$$6$$, 0, 0, 0, 0, "tempAxis"), $minLength$$inline_3902_zoomLevelLength$$inline_3917$$ = Infinity, $contentSize$$inline_5002_maxSize$$inline_3903$$ = 0, $dates$$inline_3904$$, $labelTexts$$inline_3905$$;
        if (this.$_customTimeScales$ && this.$_customTimeScales$[$scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$]) {
          var $customFormatScale$$inline_3907_customScale$$inline_3906_labels$$inline_3909$$ = this.$_customTimeScales$[$scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$];
          $dates$$inline_3904$$ = $customFormatScale$$inline_3907_customScale$$inline_3906_labels$$inline_3909$$.times;
          $labelTexts$$inline_3905$$ = $customFormatScale$$inline_3907_customScale$$inline_3906_labels$$inline_3909$$.labels;
        } else {
          if (this.$_customFormatScales$ && this.$_customFormatScales$[$scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$]) {
            $customFormatScale$$inline_3907_customScale$$inline_3906_labels$$inline_3909$$ = this.$_customFormatScales$[$scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$], $dates$$inline_3904$$ = $customFormatScale$$inline_3907_customScale$$inline_3906_labels$$inline_3909$$.times, $labelTexts$$inline_3905$$ = $customFormatScale$$inline_3907_customScale$$inline_3906_labels$$inline_3909$$.labels;
          } else {
            $dates$$inline_3904$$ = [];
            $labelTexts$$inline_3905$$ = [];
            var $currentTime$$inline_3908_lengthFactor$$inline_3916$$ = this.$_timeAxis$.$adjustDate$($series$$inline_3922_startTime$$inline_3894_width$$128$$).getTime();
            for ($dates$$inline_3904$$.push($currentTime$$inline_3908_lengthFactor$$inline_3916$$);$currentTime$$inline_3908_lengthFactor$$inline_3916$$ < $endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$;) {
              $labelTexts$$inline_3905$$.push($JSCompiler_StaticMethods_formatDate$$(this.$_timeAxis$, new Date($currentTime$$inline_3908_lengthFactor$$inline_3916$$))), $currentTime$$inline_3908_lengthFactor$$inline_3916$$ = this.$_timeAxis$.$getNextDate$($currentTime$$inline_3908_lengthFactor$$inline_3916$$).getTime(), $dates$$inline_3904$$.push($currentTime$$inline_3908_lengthFactor$$inline_3916$$);
            }
          }
        }
        for (var $customFormatScale$$inline_3907_customScale$$inline_3906_labels$$inline_3909$$ = [], $j$$inline_3910$$ = 0;$j$$inline_3910$$ < $labelTexts$$inline_3905$$.length;$j$$inline_3910$$++) {
          var $currentTime$$inline_3908_lengthFactor$$inline_3916$$ = $dates$$inline_3904$$[$j$$inline_3910$$], $label$$inline_3911_lengthDim$$inline_3914$$ = new dvt.$OutputText$($context$$inline_3896_i$$inline_3924_options$$273_props$$6$$, $labelTexts$$inline_3905$$[$j$$inline_3910$$], 0, 0, "s_label" + $currentTime$$inline_3908_lengthFactor$$inline_3916$$);
          $label$$inline_3911_lengthDim$$inline_3914$$.$setCSSStyle$($axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$);
          $label$$inline_3911_lengthDim$$inline_3914$$.time = $currentTime$$inline_3908_lengthFactor$$inline_3916$$;
          $customFormatScale$$inline_3907_customScale$$inline_3906_labels$$inline_3909$$.push($label$$inline_3911_lengthDim$$inline_3914$$);
          var $nextTime$$inline_3912$$ = $dates$$inline_3904$$[$j$$inline_3910$$ + 1];
          $JSCompiler_StaticMethods_setContentSize$self$$inline_5001_axis$$inline_3901$$.$addChild$($label$$inline_3911_lengthDim$$inline_3914$$);
          var $dim$$inline_3913_sizeDim$$inline_3915$$ = $label$$inline_3911_lengthDim$$inline_3914$$.$getDimensions$();
          $JSCompiler_StaticMethods_setContentSize$self$$inline_5001_axis$$inline_3901$$.removeChild($label$$inline_3911_lengthDim$$inline_3914$$);
          this.$_isVertical$ ? ($label$$inline_3911_lengthDim$$inline_3914$$ = $dim$$inline_3913_sizeDim$$inline_3915$$.$h$, $dim$$inline_3913_sizeDim$$inline_3915$$ = $dim$$inline_3913_sizeDim$$inline_3915$$.$w$) : ($label$$inline_3911_lengthDim$$inline_3914$$ = $dim$$inline_3913_sizeDim$$inline_3915$$.$w$, $dim$$inline_3913_sizeDim$$inline_3915$$ = $dim$$inline_3913_sizeDim$$inline_3915$$.$h$);
          $currentTime$$inline_3908_lengthFactor$$inline_3916$$ = ($nextTime$$inline_3912$$ - $currentTime$$inline_3908_lengthFactor$$inline_3916$$) / Math.max($defaultLength$$inline_3898$$, $label$$inline_3911_lengthDim$$inline_3914$$ + 2 * dvt.$TimeAxis$.$DEFAULT_INTERVAL_PADDING$);
          $currentTime$$inline_3908_lengthFactor$$inline_3916$$ < $minLength$$inline_3902_zoomLevelLength$$inline_3917$$ && ($minLength$$inline_3902_zoomLevelLength$$inline_3917$$ = $currentTime$$inline_3908_lengthFactor$$inline_3916$$);
          $dim$$inline_3913_sizeDim$$inline_3915$$ > $contentSize$$inline_5002_maxSize$$inline_3903$$ && ($contentSize$$inline_5002_maxSize$$inline_3903$$ = $dim$$inline_3913_sizeDim$$inline_3915$$);
        }
        $JSCompiler_StaticMethods_setContentSize$self$$inline_5001_axis$$inline_3901$$ = this.$_timeAxis$;
        $contentSize$$inline_5002_maxSize$$inline_3903$$ += 2 * dvt.$TimeAxis$.$DEFAULT_INTERVAL_PADDING$;
        $contentSize$$inline_5002_maxSize$$inline_3903$$ > $JSCompiler_StaticMethods_setContentSize$self$$inline_5001_axis$$inline_3901$$.$_contentSize$ && ($JSCompiler_StaticMethods_setContentSize$self$$inline_5001_axis$$inline_3901$$.$_contentSize$ = $contentSize$$inline_5002_maxSize$$inline_3903$$);
        this.$_dates$.push($dates$$inline_3904$$);
        this.$_labels$.push($customFormatScale$$inline_3907_customScale$$inline_3906_labels$$inline_3909$$);
        $minLength$$inline_3902_zoomLevelLength$$inline_3917$$ = ($endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$ - $series$$inline_3922_startTime$$inline_3894_width$$128$$) / $minLength$$inline_3902_zoomLevelLength$$inline_3917$$;
        this.$_zoomLevelLengths$.push($minLength$$inline_3902_zoomLevelLength$$inline_3917$$);
        $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$ == this.$_scale$ && (this.$_zoomLevelOrder$ = $i$$inline_3899$$, this.$_setLength$ && ($JSCompiler_StaticMethods_setContentLength$$(this, $minLength$$inline_3902_zoomLevelLength$$inline_3917$$), this.$_setLength$ = !1, null == this.$_viewStartTime$ ? null != this.$_viewEndTime$ ? (this.$_viewStartTime$ = this.$_viewEndTime$ - this.$_canvasLength$ / $minLength$$inline_3902_zoomLevelLength$$inline_3917$$ * ($endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$ - 
        $series$$inline_3922_startTime$$inline_3894_width$$128$$), this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$), $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$ = this.$_viewEndTime$ - this.$_viewStartTime$, $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$ = this.$_canvasLength$ / $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$, $JSCompiler_StaticMethods_setContentLength$$(this, $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$ * 
        (this.$_end$ - this.$_start$)), $JSCompiler_StaticMethods_setRelativeStartPos$$(this, $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$ * (this.$_start$ - this.$_viewStartTime$))) : (this.$_viewStartTime$ = this.$_start$, $JSCompiler_StaticMethods_setRelativeStartPos$$(this, 0), this.$_viewEndTime$ = this.$_canvasLength$ / $minLength$$inline_3902_zoomLevelLength$$inline_3917$$ * ($endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$ - $series$$inline_3922_startTime$$inline_3894_width$$128$$) + 
        this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$)) : (this.$_viewEndTime$ = this.$_canvasLength$ / $minLength$$inline_3902_zoomLevelLength$$inline_3917$$ * ($endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$ - $series$$inline_3922_startTime$$inline_3894_width$$128$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$), $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$ = 
        this.$_viewEndTime$ - this.$_viewStartTime$, $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$ = this.$_canvasLength$ / $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$, $JSCompiler_StaticMethods_setContentLength$$(this, $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$ * (this.$_end$ - this.$_start$)), $JSCompiler_StaticMethods_setRelativeStartPos$$(this, $scale$$inline_3900_viewTime$$inline_3918_widthFactor$$inline_3919$$ * (this.$_start$ - 
        this.$_viewStartTime$)))));
        0 == $i$$inline_3899$$ && (this.$_maxContentLength$ = $customFormatScale$$inline_3907_customScale$$inline_3906_labels$$inline_3909$$.length * this.$_canvasLength$);
      }
      this.$_timeAxis$.$setScale$(this.$_scale$);
      $JSCompiler_StaticMethods_applyAxisStyleValues$$(this);
    }
    if ($series$$inline_3922_startTime$$inline_3894_width$$128$$ = this.$Options$.series) {
      $endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$ = Math.min($series$$inline_3922_startTime$$inline_3894_width$$128$$.length, 2);
      this.$_seriesOptions$ = [];
      if (this.$_series$) {
        if ($endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$ != this.$_series$.length) {
          for ($context$$inline_3896_i$$inline_3924_options$$273_props$$6$$ = 0;$context$$inline_3896_i$$inline_3924_options$$273_props$$6$$ < this.$_series$.length;$context$$inline_3896_i$$inline_3924_options$$273_props$$6$$++) {
            this.$_timeZoomCanvas$.removeChild(this.$_series$[$context$$inline_3896_i$$inline_3924_options$$273_props$$6$$]);
          }
          this.$_series$ = [];
        }
      } else {
        this.$_series$ = [];
      }
      for ($context$$inline_3896_i$$inline_3924_options$$273_props$$6$$ = 0;$context$$inline_3896_i$$inline_3924_options$$273_props$$6$$ < $endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$;$context$$inline_3896_i$$inline_3924_options$$273_props$$6$$++) {
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$ = $series$$inline_3922_startTime$$inline_3894_width$$128$$[$context$$inline_3896_i$$inline_3924_options$$273_props$$6$$];
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.start = this.$_start$;
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.end = this.$_end$;
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.inverted = this.$_defaultInversions$[$context$$inline_3896_i$$inline_3924_options$$273_props$$6$$];
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.orientation = this.$Options$.orientation;
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.referenceObjects = this.$_referenceObjects$;
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.timeline = this;
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.index = $context$$inline_3896_i$$inline_3924_options$$273_props$$6$$;
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.animationOnDisplay = this.$Options$.animationOnDisplay;
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.animationOnDataChange = this.$Options$.animationOnDataChange;
        this.$Options$.majorAxis && ($axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.scale = this.$Options$.majorAxis.scale, $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.timeAxis = this.$_seriesTimeAxis$, $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$._cfs = this.$_seriesCustomFormatScales$);
        if ($axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.styleDefaults = this.$Options$.styleDefaults) {
          $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.seriesStyleDefaults = this.$_seriesStyleDefaults$, $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$.axisStyleDefaults = this.$_majorAxisStyleDefaults$;
        }
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$._isRandomItemLayout = "random" == this.$_itemPosition$;
        $axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$._cts = this.$Options$._cts;
        this.$_seriesOptions$.push($axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$);
        null == this.$_series$[$context$$inline_3896_i$$inline_3924_options$$273_props$$6$$] && ($axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$ = new $DvtTimelineSeries$$(this.$getCtx$(), this.$HandleEvent$, this), this.$_series$.push($axisLabelStyle$$inline_3897_s$$inline_3926_seriesOptions$$inline_3925$$));
      }
    } else {
      this.$_series$ = [];
    }
    $DvtTimelineRenderer$$.$renderTimeline$(this);
    this.$UpdateAriaAttributes$();
    this.$getCtx$().$setKeyboardFocusArray$([this]);
  } else {
    this.$_handleResize$($series$$inline_3922_startTime$$inline_3894_width$$128$$, $endTime$$inline_3895_height$$110_seriesCount$$inline_3923$$);
  }
};
dvt.$Timeline$.prototype.render = dvt.$Timeline$.prototype.$render$;
function $JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$) {
  var $hasValidScale$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_scale$ && -1 != dvt.$ArrayUtils$.$getIndex$(dvt.$TimeAxis$.$_VALID_SCALES$, $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_scale$), $hasValidCustomScale$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_scale$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_customTimeScales$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_customTimeScales$[$JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_scale$], 
  $hasValidStartAndEnd$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ > $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$, $hasValidSeries$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_series$ && 0 < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_series$.length, 
  $JSCompiler_temp$$254_hasValidSeriesItems_i$$inline_3933$$;
  if ($hasValidSeries$$) {
    a: {
      for ($JSCompiler_temp$$254_hasValidSeriesItems_i$$inline_3933$$ = 0;$JSCompiler_temp$$254_hasValidSeriesItems_i$$inline_3933$$ < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesOptions$.length;$JSCompiler_temp$$254_hasValidSeriesItems_i$$inline_3933$$++) {
        var $hasValidSeriesScale_seriesOptions$$inline_3934$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesOptions$[$JSCompiler_temp$$254_hasValidSeriesItems_i$$inline_3933$$];
        if ($hasValidSeriesScale_seriesOptions$$inline_3934$$.items) {
          for (var $hasValidCustomSeriesScale_j$$inline_3935$$ = 0;$hasValidCustomSeriesScale_j$$inline_3935$$ < $hasValidSeriesScale_seriesOptions$$inline_3934$$.items.length;$hasValidCustomSeriesScale_j$$inline_3935$$++) {
            var $end$$inline_3938_hasValidViewStart_item$$inline_3936$$ = $hasValidSeriesScale_seriesOptions$$inline_3934$$.items[$hasValidCustomSeriesScale_j$$inline_3935$$], $hasValidViewport_start$$inline_3937$$ = (new Date($end$$inline_3938_hasValidViewStart_item$$inline_3936$$.start)).getTime();
            if (!$hasValidViewport_start$$inline_3937$$) {
              $JSCompiler_temp$$254_hasValidSeriesItems_i$$inline_3933$$ = !1;
              break a;
            }
            if ($end$$inline_3938_hasValidViewStart_item$$inline_3936$$.hasOwnProperty("end") && ($end$$inline_3938_hasValidViewStart_item$$inline_3936$$ = (new Date($end$$inline_3938_hasValidViewStart_item$$inline_3936$$.end)).getTime(), !($end$$inline_3938_hasValidViewStart_item$$inline_3936$$ && $end$$inline_3938_hasValidViewStart_item$$inline_3936$$ >= $hasValidViewport_start$$inline_3937$$))) {
              $JSCompiler_temp$$254_hasValidSeriesItems_i$$inline_3933$$ = !1;
              break a;
            }
          }
        }
      }
      $JSCompiler_temp$$254_hasValidSeriesItems_i$$inline_3933$$ = !0;
    }
  } else {
    $JSCompiler_temp$$254_hasValidSeriesItems_i$$inline_3933$$ = !1;
  }
  $hasValidSeriesScale_seriesOptions$$inline_3934$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesScale$ ? -1 != dvt.$ArrayUtils$.$getIndex$(dvt.$TimeAxis$.$_VALID_SCALES$, $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesScale$) : !0;
  $hasValidCustomSeriesScale_j$$inline_3935$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesScale$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_customTimeScales$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_customTimeScales$[$JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesScale$] : !0;
  $hasValidViewport_start$$inline_3937$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ > $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ : !0;
  $end$$inline_3938_hasValidViewStart_item$$inline_3936$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ >= $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ : !0;
  $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ > $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ <= $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ : !0;
  return ($hasValidScale$$ || $hasValidCustomScale$$) && ($hasValidSeriesScale_seriesOptions$$inline_3934$$ || $hasValidCustomSeriesScale_j$$inline_3935$$) && $hasValidStartAndEnd$$ && $hasValidSeries$$ && $JSCompiler_temp$$254_hasValidSeriesItems_i$$inline_3933$$ && $hasValidViewport_start$$inline_3937$$ && $end$$inline_3938_hasValidViewStart_item$$inline_3936$$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$;
}
$JSCompiler_prototypeAlias$$ = dvt.$Timeline$.prototype;
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return this.$_shortDesc$ ? this.$_shortDesc$ : dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "TIMELINE");
};
function $JSCompiler_StaticMethods_isAnimating$$($JSCompiler_StaticMethods_isAnimating$self$$) {
  for (var $i$$635$$ = 0;$i$$635$$ < $JSCompiler_StaticMethods_isAnimating$self$$.$_series$.length;$i$$635$$++) {
    if ($JSCompiler_StaticMethods_isAnimating$self$$.$_series$[$i$$635$$].$_isAnimating$) {
      return !0;
    }
  }
  return !1;
}
function $JSCompiler_StaticMethods_showThenHideHotspots$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$, $series$$13$$) {
  if ($JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$)) {
    for (var $animator$$135$$ = new dvt.$Animator$($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$getCtx$(), $DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, dvt.$Easing$.$linear$), $i$$636$$ = 0;$i$$636$$ < $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$.length;$i$$636$$++) {
      var $hotspot$$ = $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$[$i$$636$$], $id$$201$$ = $hotspot$$.getId(), $show$$2$$ = !0;
      $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_contentLength$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_canvasLength$ && ("lhs" == $id$$201$$ || "rhs" == $id$$201$$) && ($show$$2$$ = !1);
      var $pId$$1_parentSeries$$ = $hotspot$$.getParent().getId();
      $pId$$1_parentSeries$$ && ($pId$$1_parentSeries$$ = $pId$$1_parentSeries$$.substring($pId$$1_parentSeries$$.length - 1), null != $series$$13$$ && $series$$13$$ != $pId$$1_parentSeries$$ && ($show$$2$$ = !1), $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_series$[$pId$$1_parentSeries$$].$_maxOverflowValue$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_seriesSize$ && ("ths" == $id$$201$$ || "bhs" == $id$$201$$) && ($show$$2$$ = !1));
      $show$$2$$ && $animator$$135$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $hotspot$$, $hotspot$$.$getAlpha$, $hotspot$$.$setAlpha$, $DvtTimelineStyleUtils$$.$getHotspotOpacity$());
    }
    dvt.$Playable$.$appendOnEnd$($animator$$135$$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$hideHotspots$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$);
    $animator$$135$$.play();
  }
}
$JSCompiler_prototypeAlias$$.$hideHotspots$ = function $$JSCompiler_prototypeAlias$$$$hideHotspots$$() {
  var $hotSpotsLength$$ = this.$_scrollHotspots$.length;
  if (0 != $hotSpotsLength$$) {
    for (var $animator$$136$$ = new dvt.$Animator$(this.$getCtx$(), $DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, dvt.$Easing$.$linear$), $i$$637$$ = 0;$i$$637$$ < $hotSpotsLength$$;$i$$637$$++) {
      var $hotspot$$1$$ = this.$_scrollHotspots$[$i$$637$$];
      $animator$$136$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $hotspot$$1$$, $hotspot$$1$$.$getAlpha$, $hotspot$$1$$.$setAlpha$, 0);
    }
    $animator$$136$$.play();
  }
};
$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getTimelineStyle$());
  if (this.$Options$.styleDefaults) {
    var $borderWidth$$16_overviewStyle$$6_splits_style$$105$$ = this.$Options$.styleDefaults.borderColor;
    $borderWidth$$16_overviewStyle$$6_splits_style$$105$$ && this.$_style$.$parseInlineStyle$("border-color:" + $borderWidth$$16_overviewStyle$$6_splits_style$$105$$ + ";");
  }
  if (this.$_hasOverview$ && (this.$_overviewSize$ = this.$_isVertical$ ? $DvtTimelineStyleUtils$$.$getOverviewWidth$() : $DvtTimelineStyleUtils$$.$getOverviewHeight$(), $borderWidth$$16_overviewStyle$$6_splits_style$$105$$ = this.$Options$.overview.style)) {
    for (var $borderWidth$$16_overviewStyle$$6_splits_style$$105$$ = $borderWidth$$16_overviewStyle$$6_splits_style$$105$$.split(";"), $doubleBorderWidth_i$$638$$ = 0;$doubleBorderWidth_i$$638$$ < $borderWidth$$16_overviewStyle$$6_splits_style$$105$$.length;$doubleBorderWidth_i$$638$$++) {
      var $s$$134$$ = $borderWidth$$16_overviewStyle$$6_splits_style$$105$$[$doubleBorderWidth_i$$638$$];
      if ($s$$134$$ && 0 < $s$$134$$.length) {
        var $colonIndex$$2$$ = $s$$134$$.indexOf(":");
        if (-1 < $colonIndex$$2$$) {
          var $attrName$$1$$ = dvt.$StringUtils$.trim($s$$134$$.substring(0, $colonIndex$$2$$));
          if (this.$_isVertical$ && "width" == $attrName$$1$$ || !this.$_isVertical$ && "height" == $attrName$$1$$) {
            this.$_overviewSize$ = parseInt(dvt.$StringUtils$.trim($s$$134$$.substring($colonIndex$$2$$ + 1)), 10);
            break;
          }
        }
      }
    }
  }
  dvt.$Timeline$.$superclass$.$applyStyleValues$.call(this);
  $borderWidth$$16_overviewStyle$$6_splits_style$$105$$ = this.$_style$.$getBorderWidth$();
  $doubleBorderWidth_i$$638$$ = 2 * $borderWidth$$16_overviewStyle$$6_splits_style$$105$$;
  this.$_style$.$parseInlineStyle$("border:" + $doubleBorderWidth_i$$638$$ + "px;");
  this.$_startY$ = this.$_startX$ = $borderWidth$$16_overviewStyle$$6_splits_style$$105$$;
  this.$_backgroundWidth$ = this.$Width$;
  this.$_backgroundHeight$ = this.$Height$;
  this.$_isVertical$ ? (this.$_canvasLength$ = this.$_backgroundHeight$ - $doubleBorderWidth_i$$638$$, this.$_hasOverview$ ? (this.$_canvasSize$ = this.$_backgroundWidth$ - this.$_overviewSize$ - $doubleBorderWidth_i$$638$$, this.$isRTL$() && (this.$_startX$ = $borderWidth$$16_overviewStyle$$6_splits_style$$105$$ + this.$_overviewSize$)) : this.$_canvasSize$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$638$$) : (this.$_canvasLength$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$638$$, this.$_canvasSize$ = 
  this.$_hasOverview$ ? this.$Height$ - this.$_overviewSize$ - $doubleBorderWidth_i$$638$$ : this.$Height$ - $doubleBorderWidth_i$$638$$);
};
function $JSCompiler_StaticMethods_applyAxisStyleValues$$($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$) {
  $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisStyle$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getAxisStyle$());
  if ($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisStyleDefaults$) {
    var $axisStyles$$ = "", $style$$106$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisStyleDefaults$.backgroundColor;
    $style$$106$$ && ($axisStyles$$ = $axisStyles$$ + "background-color:" + $style$$106$$ + ";");
    ($style$$106$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisStyleDefaults$.borderColor) && ($axisStyles$$ = $axisStyles$$ + "border-color:" + $style$$106$$ + ";");
    ($style$$106$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisStyleDefaults$.borderWidth) && ($axisStyles$$ = $axisStyles$$ + "border-width:" + $style$$106$$ + ";");
    $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisStyle$.$parseInlineStyle$($axisStyles$$);
  }
  $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisStyle$.$parseInlineStyle$($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisInlineStyle$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisBorderWidth$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisStyle$.$getBorderWidth$();
  $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisStyle$.$parseInlineStyle$("border:" + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisBorderWidth$ + "px;");
  $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_timeAxis$.$setBorderWidth$($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisBorderWidth$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisLength$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_contentLength$ + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_axisBorderWidth$ - dvt.$TimeAxis$.$DEFAULT_SEPARATOR_WIDTH$;
  $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_seriesStyleDefaults$ && $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_seriesStyleDefaults$.backgroundColor && ($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_seriesStyleDefaults$.backgroundColor, dvt.$ColorUtils$.$getRed$($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$), dvt.$ColorUtils$.$getGreen$($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$), 
  dvt.$ColorUtils$.$getBlue$($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$));
}
function $JSCompiler_StaticMethods_prepareViewportLength$$($JSCompiler_StaticMethods_prepareViewportLength$self$$) {
  $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_setLength$ = !0;
  $JSCompiler_StaticMethods_setRelativeStartPos$$($JSCompiler_StaticMethods_prepareViewportLength$self$$, 0);
  if ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$ && $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$) {
    var $viewTime$$2_widthFactor$$5$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$;
    0 < $viewTime$$2_widthFactor$$5$$ && ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_setLength$ = !1, $viewTime$$2_widthFactor$$5$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_canvasLength$ / $viewTime$$2_widthFactor$$5$$, $JSCompiler_StaticMethods_setContentLength$$($JSCompiler_StaticMethods_prepareViewportLength$self$$, $viewTime$$2_widthFactor$$5$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$)), 
    $JSCompiler_StaticMethods_setRelativeStartPos$$($JSCompiler_StaticMethods_prepareViewportLength$self$$, $viewTime$$2_widthFactor$$5$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$)));
  }
}
$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$544$$) {
  if (1 == $event$$544$$.touches.length) {
    if (this.$_dragPanSeries$ = $JSCompiler_StaticMethods__findSeries$$(this, $event$$544$$.target)) {
      var $series$$15$$ = this.$_series$[0] == this.$_dragPanSeries$ ? 0 : 1
    }
    $JSCompiler_StaticMethods_showThenHideHotspots$$(this, $series$$15$$);
  }
};
$JSCompiler_prototypeAlias$$.$handleZoomWheel$ = function $$JSCompiler_prototypeAlias$$$$handleZoomWheel$$($newLength$$2$$, $time$$19$$, $compLoc$$3$$, $triggerViewportChangeEvent$$1$$) {
  dvt.$Timeline$.$superclass$.$handleZoomWheel$.call(this, $newLength$$2$$, $time$$19$$, $compLoc$$3$$, $triggerViewportChangeEvent$$1$$);
  this.$_hasOverview$ && this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_isVertical$ ? this.$_overview$.$Height$ : this.$_overview$.$Width$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$$(this);
  $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_timeZoomCanvas$);
  $JSCompiler_StaticMethods_updateSeries$$(this);
  $triggerViewportChangeEvent$$1$$ && this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$));
};
function $JSCompiler_StaticMethods_updateSeries$$($JSCompiler_StaticMethods_updateSeries$self$$) {
  if ($JSCompiler_StaticMethods_updateSeries$self$$.$_series$) {
    var $seriesCount$$28$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length, $axisSize$$1$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($JSCompiler_StaticMethods_updateSeries$self$$, $seriesCount$$28$$);
    $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ = ($JSCompiler_StaticMethods_updateSeries$self$$.$_canvasSize$ - $axisSize$$1$$) / $seriesCount$$28$$;
    for (var $i$$643$$ = 0;$i$$643$$ < $seriesCount$$28$$;$i$$643$$++) {
      var $series$$16$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$[$i$$643$$];
      $series$$16$$.$setClipPath$(null);
      var $cp$$8$$ = new dvt.$ClipPath$;
      if ($JSCompiler_StaticMethods_updateSeries$self$$.$_isVertical$) {
        var $key$$73_posMatrix$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() ? Math.abs($i$$643$$ - 1) : $i$$643$$;
        $JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() && 1 == $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length ? ($cp$$8$$.$addRect$($axisSize$$1$$, 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$), $key$$73_posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, $axisSize$$1$$, 0)) : ($cp$$8$$.$addRect$($key$$73_posMatrix$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), 0, 
        $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$), $key$$73_posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, $key$$73_posMatrix$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), 0));
        var $width$$129$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $height$$111$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$;
      } else {
        $cp$$8$$.$addRect$(0, $i$$643$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$), $key$$73_posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, 0, $i$$643$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$)), $width$$129$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $height$$111$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$
        ;
      }
      $series$$16$$.$setClipPath$($cp$$8$$);
      $series$$16$$.$setMatrix$($key$$73_posMatrix$$);
      $series$$16$$.$render$(null, $width$$129$$, $height$$111$$);
    }
  }
}
$JSCompiler_prototypeAlias$$.$_handleResize$ = function $$JSCompiler_prototypeAlias$$$$_handleResize$$($width$$130$$, $height$$112$$) {
  this.$Width$ = $width$$130$$;
  this.$Height$ = $height$$112$$;
  this.$applyStyleValues$();
  this.$_fetchStartPos$ = 0;
  this.$_fetchEndPos$ = this.$_isVertical$ ? $height$$112$$ : $width$$130$$;
  $JSCompiler_StaticMethods_prepareViewportLength$$(this);
  $DvtTimelineRenderer$$.$_renderBackground$(this);
  if ($JSCompiler_StaticMethods_hasValidOptions$$(this)) {
    if ($JSCompiler_StaticMethods_renderTimeZoomCanvas$$(this, this.$_canvas$), $JSCompiler_StaticMethods_applyAxisStyleValues$$(this), $JSCompiler_StaticMethods_updateSeries$$(this), $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_timeZoomCanvas$), $DvtTimelineRenderer$$.$_renderSeriesLabels$(this), $DvtTimelineRenderer$$.$_renderScrollHotspots$(this), $DvtTimelineRenderer$$.$_renderZoomControls$(this), this.$_hasOverview$ && ($DvtTimelineRenderer$$.$_renderOverview$(this), this.$SelectionHandler$)) {
      var $selection$$27$$ = this.$SelectionHandler$.$getSelectedIds$();
      if ($selection$$27$$ && 0 != $selection$$27$$.length) {
        for (var $i$$644$$ = 0;$i$$644$$ < $selection$$27$$.length;$i$$644$$++) {
          var $JSCompiler_StaticMethods_selSelectItem$self$$inline_3964$$ = this.$_overview$, $drawable$$inline_3966$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_3964$$, $selection$$27$$[$i$$644$$]);
          null != $drawable$$inline_3966$$ && $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_3964$$, $drawable$$inline_3966$$);
        }
      }
    }
  } else {
    $DvtTimelineRenderer$$.$_renderEmptyText$(this);
  }
};
$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$545$$) {
  dvt.KeyboardEvent.$RIGHT_ARROW$ != $event$$545$$.keyCode && dvt.KeyboardEvent.$LEFT_ARROW$ != $event$$545$$.keyCode && dvt.KeyboardEvent.$DOWN_ARROW$ != $event$$545$$.keyCode && dvt.KeyboardEvent.$UP_ARROW$ != $event$$545$$.keyCode || $JSCompiler_StaticMethods_updateScrollForItemNavigation$$(this, this.$EventManager$.$getFocus$());
};
$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$546$$) {
  this.$_dragPanSeries$ = $JSCompiler_StaticMethods__findSeries$$(this, $event$$546$$.target);
};
$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($compX$$2$$, $compY$$2$$) {
  this.$_currentX$ = $compX$$2$$;
  this.$_currentY$ = $compY$$2$$;
};
$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$547$$) {
  "none" != this.$_selectionMode$ && $JSCompiler_StaticMethods_handleShapeClick$$(this, $event$$547$$);
};
$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  this.$_dragPanSeries$ = null;
  $JSCompiler_StaticMethods_endPan$$(this);
};
function $JSCompiler_StaticMethods_endPan$$($JSCompiler_StaticMethods_endPan$self$$) {
  $JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ = !1, $JSCompiler_StaticMethods_endPan$self$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_endPan$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPan$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPan$self$$.$_scale$)));
}
$JSCompiler_prototypeAlias$$.$contDragPan$ = function $$JSCompiler_prototypeAlias$$$$contDragPan$$($compX$$3$$, $compY$$3$$) {
  if (this.$_currentX$ && this.$_currentY$) {
    var $deltaX$$17$$ = this.$_currentX$ - $compX$$3$$, $deltaY$$17$$ = this.$_currentY$ - $compY$$3$$;
    if (0 == $deltaX$$17$$ && 0 == $deltaY$$17$$) {
      return !1;
    }
    this.$_triggerViewportChange$ = !0;
    this.$_currentX$ = $compX$$3$$;
    this.$_currentY$ = $compY$$3$$;
    this.$panBy$($deltaX$$17$$, $deltaY$$17$$);
    return !0;
  }
  return !1;
};
$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($deltaX$$18$$, $deltaY$$18$$) {
  var $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$(this, this.$_series$.length);
  if (this.$_isVertical$) {
    if (this.$_dragPanSeries$) {
      var $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = this.$_dragPanSeries$.$getTranslateX$() - $deltaX$$18$$;
      if (1 < this.$_series$.length && (!this.$isRTL$() && this.$_dragPanSeries$.$_isInverted$ || this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$)) {
        var $minTranslateX$$1_minTranslateY$$1$$ = $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$ + 2 * this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$, $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$ = this.$_dragPanSeries$.$Width$ + $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$
      } else {
        this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$ ? $minTranslateX$$1_minTranslateY$$1$$ = this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$ + $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$ : ($minTranslateX$$1_minTranslateY$$1$$ = 0, $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Width$);
      }
      $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ < $minTranslateX$$1_minTranslateY$$1$$ ? $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = $minTranslateX$$1_minTranslateY$$1$$ : $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ > $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$ && ($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$);
      this.$_dragPanSeries$.$setTranslateX$($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$);
    }
    $JSCompiler_StaticMethods_panZoomCanvasBy$$(this, $deltaY$$18$$);
    this.$_hasOverview$ && ($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = this.$_overview$.$Height$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$));
  } else {
    $JSCompiler_StaticMethods_panZoomCanvasBy$$(this, $deltaX$$18$$), this.$_hasOverview$ && ($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = this.$_overview$.$Width$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$)), this.$_dragPanSeries$ && ($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = this.$_dragPanSeries$.$getTranslateY$() - $deltaY$$18$$, this.$_dragPanSeries$.$_isInverted$ ? ($minTranslateX$$1_minTranslateY$$1$$ = 
    $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$ + 2 * this.$_dragPanSeries$.$Height$ - this.$_dragPanSeries$.$_maxOverflowValue$, $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$ = this.$_dragPanSeries$.$Height$ + $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$) : ($minTranslateX$$1_minTranslateY$$1$$ = 0, $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Height$), $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ < $minTranslateX$$1_minTranslateY$$1$$ ? 
    $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = $minTranslateX$$1_minTranslateY$$1$$ : $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ > $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$ && ($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = $axisSize$$2_maxTranslateX$$1_maxTranslateY$$1$$), this.$_dragPanSeries$.$setTranslateY$($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$));
  }
};
$JSCompiler_prototypeAlias$$.$HandleEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleEvent$$($event$$549_i$$645_isMultiSelect$$inline_3969$$) {
  var $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$ = $event$$549_i$$645_isMultiSelect$$inline_3969$$.type;
  if ("selection" == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$ || "action" == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$) {
    dvt.$EventDispatcher$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$549_i$$645_isMultiSelect$$inline_3969$$);
  } else {
    if ("overview" == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$) {
      $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$ = $event$$549_i$$645_isMultiSelect$$inline_3969$$.$getSubType$();
      if ("rangeChanging" == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$ || "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$) {
        var $item$$54_oldViewTime$$1_zoomLevelOrder$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        this.$_viewStartTime$ = $event$$549_i$$645_isMultiSelect$$inline_3969$$.$getNewStartTime$();
        this.$_viewEndTime$ = $event$$549_i$$645_isMultiSelect$$inline_3969$$.$getNewEndTime$();
        var $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        if (0 < $isMultiSelect$$1_minLength$$2_viewTime$$4$$) {
          var $s$$136_viewSize$$inline_3973_widthFactor$$7$$ = this.$_canvasLength$ / $isMultiSelect$$1_minLength$$2_viewTime$$4$$;
          $JSCompiler_StaticMethods_setContentLength$$(this, $s$$136_viewSize$$inline_3973_widthFactor$$7$$ * (this.$_end$ - this.$_start$));
          $JSCompiler_StaticMethods_setRelativeStartPos$$(this, $s$$136_viewSize$$inline_3973_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$));
          if ($item$$54_oldViewTime$$1_zoomLevelOrder$$ > $isMultiSelect$$1_minLength$$2_viewTime$$4$$) {
            $item$$54_oldViewTime$$1_zoomLevelOrder$$ = this.$_zoomLevelLengths$.length;
            for ($isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$54_oldViewTime$$1_zoomLevelOrder$$ - 1];this.$_contentLength$ >= $isMultiSelect$$1_minLength$$2_viewTime$$4$$ && 0 < $item$$54_oldViewTime$$1_zoomLevelOrder$$;) {
              $item$$54_oldViewTime$$1_zoomLevelOrder$$--, $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$54_oldViewTime$$1_zoomLevelOrder$$ - 1];
            }
            $item$$54_oldViewTime$$1_zoomLevelOrder$$ == this.$_zoomLevelLengths$.length && $item$$54_oldViewTime$$1_zoomLevelOrder$$--;
          } else {
            for ($item$$54_oldViewTime$$1_zoomLevelOrder$$ = 0, $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$54_oldViewTime$$1_zoomLevelOrder$$];this.$_contentLength$ < $isMultiSelect$$1_minLength$$2_viewTime$$4$$ && $item$$54_oldViewTime$$1_zoomLevelOrder$$ < this.$_zoomLevelLengths$.length - 1;) {
              $item$$54_oldViewTime$$1_zoomLevelOrder$$++, $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$54_oldViewTime$$1_zoomLevelOrder$$];
            }
          }
          this.$_zoomLevelOrder$ = $item$$54_oldViewTime$$1_zoomLevelOrder$$;
          this.$_timeAxis$.$setScale$(this.$_timeAxis$.$_zoomOrder$[$item$$54_oldViewTime$$1_zoomLevelOrder$$]);
          this.$_scale$ = this.$_timeAxis$.$_scale$;
          $JSCompiler_StaticMethods_applyAxisStyleValues$$(this);
          $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_timeZoomCanvas$);
          $JSCompiler_StaticMethods_updateSeries$$(this);
          $JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$$(this);
        }
        "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$ && this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$));
      }
      if ("scrollPos" == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$ || "scrollTime" == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$) {
        this.$_viewStartTime$ = $event$$549_i$$645_isMultiSelect$$inline_3969$$.$getNewStartTime$(), this.$_viewEndTime$ = $event$$549_i$$645_isMultiSelect$$inline_3969$$.$getNewEndTime$(), $s$$136_viewSize$$inline_3973_widthFactor$$7$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), $JSCompiler_StaticMethods_setRelativeStartPos$$(this, $s$$136_viewSize$$inline_3973_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$)), $JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$$(this), 
        this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$));
      }
    } else {
      if ($itemId$$1_selectedItemId$$1_subType$$8_type$$195$$ = $event$$549_i$$645_isMultiSelect$$inline_3969$$.$getSubType$(), "selection" == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$) {
        for ($itemId$$1_selectedItemId$$1_subType$$8_type$$195$$ = $event$$549_i$$645_isMultiSelect$$inline_3969$$.$getItemId$(), $event$$549_i$$645_isMultiSelect$$inline_3969$$ = $event$$549_i$$645_isMultiSelect$$inline_3969$$.$getParamValue$("multiSelect"), $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = (null != $event$$549_i$$645_isMultiSelect$$inline_3969$$ ? $event$$549_i$$645_isMultiSelect$$inline_3969$$ : !1) && "multiple" == this.$_selectionMode$, $event$$549_i$$645_isMultiSelect$$inline_3969$$ = 
        0;$event$$549_i$$645_isMultiSelect$$inline_3969$$ < this.$_series$.length;$event$$549_i$$645_isMultiSelect$$inline_3969$$++) {
          for (var $s$$136_viewSize$$inline_3973_widthFactor$$7$$ = this.$_series$[$event$$549_i$$645_isMultiSelect$$inline_3969$$], $j$$98$$ = 0;$j$$98$$ < $s$$136_viewSize$$inline_3973_widthFactor$$7$$.$_items$.length;$j$$98$$++) {
            if ($item$$54_oldViewTime$$1_zoomLevelOrder$$ = $s$$136_viewSize$$inline_3973_widthFactor$$7$$.$_items$[$j$$98$$], $item$$54_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$) {
              this.$SelectionHandler$.$_addToSelection$($item$$54_oldViewTime$$1_zoomLevelOrder$$, $isMultiSelect$$1_minLength$$2_viewTime$$4$$);
              this.$EventManager$.$setFocusObj$($item$$54_oldViewTime$$1_zoomLevelOrder$$);
              $s$$136_viewSize$$inline_3973_widthFactor$$7$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
              this.$_viewStartTime$ = $item$$54_oldViewTime$$1_zoomLevelOrder$$.$_startTime$ - $s$$136_viewSize$$inline_3973_widthFactor$$7$$ / 2;
              this.$_viewStartTime$ < this.$_start$ ? this.$_viewStartTime$ = this.$_start$ : this.$_viewStartTime$ + $s$$136_viewSize$$inline_3973_widthFactor$$7$$ > this.$_end$ && (this.$_viewStartTime$ = this.$_end$ - $s$$136_viewSize$$inline_3973_widthFactor$$7$$);
              this.$_viewEndTime$ = this.$_viewStartTime$ + $s$$136_viewSize$$inline_3973_widthFactor$$7$$;
              $JSCompiler_StaticMethods_setRelativeStartPos$$(this, this.$_contentLength$ / (this.$_end$ - this.$_start$) * (this.$_start$ - this.$_viewStartTime$));
              $JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$$(this);
              this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$));
              break;
            }
          }
        }
      } else {
        if ("highlight" == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$) {
          for ($itemId$$1_selectedItemId$$1_subType$$8_type$$195$$ = $event$$549_i$$645_isMultiSelect$$inline_3969$$.$getItemId$(), $event$$549_i$$645_isMultiSelect$$inline_3969$$ = 0;$event$$549_i$$645_isMultiSelect$$inline_3969$$ < this.$_series$.length;$event$$549_i$$645_isMultiSelect$$inline_3969$$++) {
            for ($s$$136_viewSize$$inline_3973_widthFactor$$7$$ = this.$_series$[$event$$549_i$$645_isMultiSelect$$inline_3969$$], $j$$98$$ = 0;$j$$98$$ < $s$$136_viewSize$$inline_3973_widthFactor$$7$$.$_items$.length;$j$$98$$++) {
              if ($item$$54_oldViewTime$$1_zoomLevelOrder$$ = $s$$136_viewSize$$inline_3973_widthFactor$$7$$.$_items$[$j$$98$$], $item$$54_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$) {
                $item$$54_oldViewTime$$1_zoomLevelOrder$$.$showHoverEffect$(!0);
                break;
              }
            }
          }
        } else {
          if ("unhighlight" == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$) {
            for ($itemId$$1_selectedItemId$$1_subType$$8_type$$195$$ = $event$$549_i$$645_isMultiSelect$$inline_3969$$.$getItemId$(), $event$$549_i$$645_isMultiSelect$$inline_3969$$ = 0;$event$$549_i$$645_isMultiSelect$$inline_3969$$ < this.$_series$.length;$event$$549_i$$645_isMultiSelect$$inline_3969$$++) {
              for ($s$$136_viewSize$$inline_3973_widthFactor$$7$$ = this.$_series$[$event$$549_i$$645_isMultiSelect$$inline_3969$$], $j$$98$$ = 0;$j$$98$$ < $s$$136_viewSize$$inline_3973_widthFactor$$7$$.$_items$.length;$j$$98$$++) {
                if ($item$$54_oldViewTime$$1_zoomLevelOrder$$ = $s$$136_viewSize$$inline_3973_widthFactor$$7$$.$_items$[$j$$98$$], $item$$54_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$8_type$$195$$) {
                  $item$$54_oldViewTime$$1_zoomLevelOrder$$.$hideHoverEffect$(!0);
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
};
function $JSCompiler_StaticMethods_updateScrollForItemNavigation$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$, $item$$56$$) {
  var $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $item$$56$$.getHeight() : $item$$56$$.getWidth(), $endPos$$4_itemHoverStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $itemStart_widthFactor$$9$$ = $item$$56$$.$_loc$ - ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $itemEnd_itemSize_viewTime$$5$$ / 2 + $endPos$$4_itemHoverStrokeWidth$$ : $DvtTimelineStyleUtils$$.$getBubbleOffset$() + 
  $endPos$$4_itemHoverStrokeWidth$$), $startPos$$5$$ = $JSCompiler_StaticMethods_getRelativeStartPos$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$isRTL$() && !$JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ && ($itemStart_widthFactor$$9$$ -= $endPos$$4_itemHoverStrokeWidth$$);
  $itemEnd_itemSize_viewTime$$5$$ = $itemStart_widthFactor$$9$$ + $itemEnd_itemSize_viewTime$$5$$ + 2 * $endPos$$4_itemHoverStrokeWidth$$;
  $endPos$$4_itemHoverStrokeWidth$$ = $startPos$$5$$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$;
  -$itemStart_widthFactor$$9$$ > $startPos$$5$$ ? $startPos$$5$$ = -$itemStart_widthFactor$$9$$ : -$itemEnd_itemSize_viewTime$$5$$ < $endPos$$4_itemHoverStrokeWidth$$ && ($startPos$$5$$ = -$itemEnd_itemSize_viewTime$$5$$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$);
  $itemStart_widthFactor$$9$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ / ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$);
  $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $startPos$$5$$ / $itemStart_widthFactor$$9$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$, $startPos$$5$$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ + $itemEnd_itemSize_viewTime$$5$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ > $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $itemEnd_itemSize_viewTime$$5$$, 
  $startPos$$5$$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_setRelativeStartPos$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$, $startPos$$5$$);
  $JSCompiler_StaticMethods_applyTimeZoomCanvasPosition$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Height$ : 
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Width$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_scale$));
}
function $JSCompiler_StaticMethods_handleShapeClick$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $event$$550$$) {
  if ($event$$550$$) {
    var $drawable$$6_event$$inline_3978_item$$inline_3976$$ = $JSCompiler_StaticMethods_handleShapeClick$self$$.$_findDrawable$($event$$550$$.target);
    if ($drawable$$6_event$$inline_3978_item$$inline_3976$$) {
      var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_3975_series$$17$$ = $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_3978_item$$inline_3976$$);
      if ($drawable$$6_event$$inline_3978_item$$inline_3976$$.$_node$) {
        var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_3975_series$$17$$ = $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_3978_item$$inline_3976$$), $drawable$$6_event$$inline_3978_item$$inline_3976$$ = $drawable$$6_event$$inline_3978_item$$inline_3976$$.$_node$, $action$$inline_3977$$ = $drawable$$6_event$$inline_3978_item$$inline_3976$$.$getAction$();
        $action$$inline_3977$$ && ($drawable$$6_event$$inline_3978_item$$inline_3976$$ = dvt.$EventFactory$.$newActionEvent$("action", $action$$inline_3977$$, $drawable$$6_event$$inline_3978_item$$inline_3976$$.getId()), dvt.$EventDispatcher$.dispatchEvent($JSCompiler_StaticMethods_HandleItemAction$self$$inline_3975_series$$17$$.$_callback$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_3975_series$$17$$.$_callbackObj$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_3975_series$$17$$, 
        $drawable$$6_event$$inline_3978_item$$inline_3976$$));
      }
    }
  }
}
function $JSCompiler_StaticMethods_applyInitialSelections$$($JSCompiler_StaticMethods_applyInitialSelections$self$$) {
  if ($JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection) {
    for (var $items$$37$$ = [], $i$$646$$ = 0;$i$$646$$ < $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$.length;$i$$646$$++) {
      for (var $s$$137$$ = $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$[$i$$646$$], $j$$99$$ = 0;$j$$99$$ < $s$$137$$.$_items$.length;$j$$99$$++) {
        $items$$37$$.push($s$$137$$.$_items$[$j$$99$$]);
      }
    }
  }
  $JSCompiler_StaticMethods_applyInitialSelections$self$$.$SelectionHandler$.$processInitialSelections$($JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection, $items$$37$$);
}
$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$551$$) {
  $event$$551$$ && this.dispatchEvent($event$$551$$);
};
function $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods__findSeries$self$$, $target$$83$$) {
  if ($JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods__findSeries$self$$) && $target$$83$$ && $target$$83$$ != $JSCompiler_StaticMethods__findSeries$self$$) {
    var $id$$202$$ = $target$$83$$.getId();
    return $target$$83$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] || 1 < $JSCompiler_StaticMethods__findSeries$self$$.$_series$.length && $target$$83$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] ? $target$$83$$ : $id$$202$$ && "_s0" == $id$$202$$.substring($id$$202$$.length - 3, $id$$202$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] : $id$$202$$ && "_s1" == $id$$202$$.substring($id$$202$$.length - 3, $id$$202$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] : 
    $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods__findSeries$self$$, $target$$83$$.getParent());
  }
  return null;
}
$JSCompiler_prototypeAlias$$.$_findDrawable$ = function $$JSCompiler_prototypeAlias$$$$_findDrawable$$($grandParent_target$$84$$) {
  if ($grandParent_target$$84$$) {
    var $id$$203$$ = $grandParent_target$$84$$.getId();
    if ($id$$203$$ && "_duration_" == $id$$203$$.substring(0, 10) && $grandParent_target$$84$$.$_node$) {
      return $grandParent_target$$84$$;
    }
    var $parent$$76$$ = $grandParent_target$$84$$.getParent();
    if ($parent$$76$$) {
      if ($id$$203$$ && "zoom" == $id$$203$$.substring(0, 4)) {
        return $grandParent_target$$84$$;
      }
      if ($id$$203$$ && "_bubble_" == $id$$203$$.substring(0, 8) && $parent$$76$$.$_node$) {
        return $parent$$76$$;
      }
      if ($grandParent_target$$84$$ = $parent$$76$$.getParent()) {
        if ($id$$203$$ && "_bubble_" == $id$$203$$.substring(0, 8) && $grandParent_target$$84$$.$_node$) {
          return $grandParent_target$$84$$;
        }
        if (($id$$203$$ = $grandParent_target$$84$$.getId()) && "_bubble_" == $id$$203$$.substring(0, 8) && $grandParent_target$$84$$.getParent()) {
          return $grandParent_target$$84$$.getParent();
        }
      }
    }
  }
  return null;
};
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new $DvtTimelineAutomation$$(this));
  return this.$Automation$;
};
dvt.$Timeline$.prototype.getAutomation = dvt.$Timeline$.prototype.$getAutomation$;
function $JSCompiler_StaticMethods_clearOverview$$($JSCompiler_StaticMethods_clearOverview$self$$) {
  $JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$ && ($JSCompiler_StaticMethods_clearOverview$self$$.removeChild($JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$), $JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$ = null);
}
function $DvtTimelineAutomation$$($timeline$$1$$) {
  this.$_timeline$ = $timeline$$1$$;
}
$goog$exportPath_$$("DvtTimelineAutomation", $DvtTimelineAutomation$$);
dvt.$Obj$.$createSubclass$($DvtTimelineAutomation$$, dvt.$Automation$);
$DvtTimelineAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineAutomation$$$$$GetSubIdForDomElement$$($displayable$$85_logicalObj$$12$$) {
  if (($displayable$$85_logicalObj$$12$$ = this.$_timeline$.$EventManager$.$GetLogicalObject$($displayable$$85_logicalObj$$12$$)) && $displayable$$85_logicalObj$$12$$ instanceof $DvtTimelineSeriesNode$$) {
    for (var $i$$647$$ = 0;$i$$647$$ < this.$_timeline$.$_series$.length;$i$$647$$++) {
      var $itemIndex$$11$$ = dvt.$ArrayUtils$.$getIndex$(this.$_timeline$.$_series$[$i$$647$$].$_items$, $displayable$$85_logicalObj$$12$$);
      if (-1 != $itemIndex$$11$$) {
        return "timelineItem[" + $i$$647$$ + "][" + $itemIndex$$11$$ + "]";
      }
    }
  }
  return null;
};
$DvtTimelineAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineAutomation$$$$$getDomElementForSubId$$($series$$19_subId$$30$$) {
  if ($series$$19_subId$$30$$) {
    var $parenIndex$$ = $series$$19_subId$$30$$.indexOf("[");
    if (0 < $parenIndex$$ && "timelineItem" === $series$$19_subId$$30$$.substring(0, $parenIndex$$)) {
      var $endParenIndex$$ = $series$$19_subId$$30$$.indexOf("]");
      if (0 < $endParenIndex$$) {
        var $itemIndex$$12_node$$298$$ = parseInt($series$$19_subId$$30$$.substring($endParenIndex$$ + 2, $series$$19_subId$$30$$.length - 1));
        if ($series$$19_subId$$30$$ = this.$_timeline$.$_series$[parseInt($series$$19_subId$$30$$.substring($parenIndex$$ + 1, $endParenIndex$$))]) {
          if ($itemIndex$$12_node$$298$$ = $series$$19_subId$$30$$.$_items$[$itemIndex$$12_node$$298$$]) {
            return $itemIndex$$12_node$$298$$.$getDisplayables$()[0].$getElem$();
          }
        }
      }
    }
  }
  return null;
};
$DvtTimelineAutomation$$.prototype.getDomElementForSubId = $DvtTimelineAutomation$$.prototype.$getDomElementForSubId$;
function $DvtTimelineDefaults$$() {
  this.Init({alta:$DvtTimelineDefaults$VERSION_1$$});
}
dvt.$Obj$.$createSubclass$($DvtTimelineDefaults$$, dvt.$BaseComponentDefaults$);
var $DvtTimelineDefaults$VERSION_1$$ = {animationOnDataChange:"none", animationOnDisplay:"none", orientation:"horizontal", overview:{rendered:"off"}, selectionMode:"none", styleDefaults:{animationDuration:500, borderColor:"#d9dfe3", item:{backgroundColor:"#ffffff", borderColor:"#648baf", descriptionStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #084B8A; white-space: nowrap;"), hoverBorderColor:"#85bbe7", selectedBorderColor:"#000000", 
titleStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #000000; white-space: nowrap;")}, majorAxis:{labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; color: #4f4f4f; background-color: rgba(249,249,249,0.8); white-space: nowrap;"), separatorColor:"#bcc7d2"}, minorAxis:{backgroundColor:"#f9f9f9", borderColor:"#d9dfe3", labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #333333;"), 
separatorColor:"#bcc7d2"}, overview:{backgroundColor:"#e6ecf3", labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #4f4f4f;"), window:{backgroundColor:"#ffffff", borderColor:"#4f4f4f"}}, referenceObject:{color:"#ff591f"}, series:{backgroundColor:"#f9f9f9", colors:dvt.$CSSStyle$.$COLORS_ALTA$, emptyTextStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #333333; white-space: nowrap;"), 
labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: bold; color: #252525; background-color: rgba(249,249,249,0.8); white-space: nowrap;")}}};
function $DvtTimelineParser$$() {
}
dvt.$Obj$.$createSubclass$($DvtTimelineParser$$, dvt.$Obj$);
$DvtTimelineParser$$.prototype.parse = function $$DvtTimelineParser$$$$parse$($options$$274$$) {
  var $ret$$64$$ = {};
  $ret$$64$$.start = (new Date($options$$274$$.start)).getTime();
  $ret$$64$$.end = (new Date($options$$274$$.end)).getTime();
  $options$$274$$.viewportStart && ($ret$$64$$.$viewStart$ = (new Date($options$$274$$.viewportStart)).getTime());
  $options$$274$$.viewportEnd && ($ret$$64$$.$viewEnd$ = (new Date($options$$274$$.viewportEnd)).getTime());
  $ret$$64$$.$selectionMode$ = $options$$274$$.selectionMode ? $options$$274$$.selectionMode : "none";
  $ret$$64$$.$inlineStyle$ = $options$$274$$.style;
  var $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$274$$.minorAxis;
  if ($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$) {
    var $referenceObjectsValueArray_scale$$60$$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.scale;
    $ret$$64$$.scale = $referenceObjectsValueArray_scale$$60$$;
    var $i$$648_zoomOrder$$1$$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.zoomOrder;
    null == $i$$648_zoomOrder$$1$$ ? $i$$648_zoomOrder$$1$$ = [$referenceObjectsValueArray_scale$$60$$] : $i$$648_zoomOrder$$1$$.reverse();
    $ret$$64$$.$zoomOrder$ = $i$$648_zoomOrder$$1$$;
    $ret$$64$$.$converter$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.converter;
    $ret$$64$$.$axisStyle$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.style;
    $ret$$64$$.$customFormatScales$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$._cfs;
  }
  if ($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$274$$.majorAxis) {
    $ret$$64$$.$seriesScale$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.scale, $ret$$64$$.$seriesConverter$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.converter, $ret$$64$$.$seriesCustomFormatScales$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$._cfs;
  }
  $ret$$64$$.$shortDesc$ = $options$$274$$.shortDesc;
  $ret$$64$$.orientation = $options$$274$$.orientation;
  if (($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$274$$.referenceObjects) && 0 < $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.length) {
    $referenceObjectsValueArray_scale$$60$$ = [];
    for ($i$$648_zoomOrder$$1$$ = 0;$i$$648_zoomOrder$$1$$ < $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.length;$i$$648_zoomOrder$$1$$++) {
      $referenceObjectsValueArray_scale$$60$$.push(new Date($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$[$i$$648_zoomOrder$$1$$].value));
    }
    $ret$$64$$.$referenceObjects$ = $referenceObjectsValueArray_scale$$60$$;
  }
  $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$274$$.overview;
  $ret$$64$$.$hasOverview$ = null != $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ && "on" == $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.rendered ? !0 : !1;
  $ret$$64$$.$timeZoneOffsets$ = $options$$274$$._tzo;
  $ret$$64$$.$itemPosition$ = $options$$274$$._ip;
  $ret$$64$$.$customTimeScales$ = $options$$274$$._cts;
  return $ret$$64$$;
};
var $DvtTimelineRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineRenderer$$, dvt.$Obj$);
$DvtTimelineRenderer$$.$renderTimeline$ = function $$DvtTimelineRenderer$$$$renderTimeline$$($timeline$$2$$) {
  $DvtTimelineRenderer$$.$_renderBackground$($timeline$$2$$);
  $DvtTimelineRenderer$$.$_renderScrollableCanvas$($timeline$$2$$);
  if ($JSCompiler_StaticMethods_hasValidOptions$$($timeline$$2$$)) {
    $JSCompiler_StaticMethods_renderTimeZoomCanvas$$($timeline$$2$$, $timeline$$2$$.$_canvas$);
    var $i$$649_timeZoomCanvas$$ = $timeline$$2$$.$_timeZoomCanvas$;
    $DvtTimelineRenderer$$.$_renderSeries$($timeline$$2$$, $i$$649_timeZoomCanvas$$);
    $DvtTimelineRenderer$$.$_renderSeriesLabels$($timeline$$2$$);
    $DvtTimelineRenderer$$.$_renderAxis$($timeline$$2$$, $i$$649_timeZoomCanvas$$);
    $timeline$$2$$.$_hasOverview$ ? $DvtTimelineRenderer$$.$_renderOverview$($timeline$$2$$) : $JSCompiler_StaticMethods_clearOverview$$($timeline$$2$$);
    if ($timeline$$2$$.$_keyboardHandler$) {
      for ($i$$649_timeZoomCanvas$$ = 0;$i$$649_timeZoomCanvas$$ < $timeline$$2$$.$_series$.length;$i$$649_timeZoomCanvas$$++) {
        var $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$ = $timeline$$2$$.$_series$[$i$$649_timeZoomCanvas$$];
        if ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_items$ && 0 < $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_items$.length) {
          $timeline$$2$$.$EventManager$.$setFocusObj$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_items$[0]);
          break;
        }
      }
    }
    $DvtTimelineRenderer$$.$_renderScrollHotspots$($timeline$$2$$);
    $DvtTimelineRenderer$$.$_renderZoomControls$($timeline$$2$$);
    $timeline$$2$$.$SelectionHandler$ && $JSCompiler_StaticMethods_applyInitialSelections$$($timeline$$2$$);
    $DvtTimeUtils$$.$supportsTouch$() && $timeline$$2$$.$_setAriaProperty$("flowto", $timeline$$2$$.$_series$[0].getId());
    for ($i$$649_timeZoomCanvas$$ = 0;$i$$649_timeZoomCanvas$$ < $timeline$$2$$.$_series$.length;$i$$649_timeZoomCanvas$$++) {
      var $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$ = $timeline$$2$$.$_series$[$i$$649_timeZoomCanvas$$], $context$$inline_3989_fadeInAnimator$$inline_3991_fadeOutAnimator$$inline_3990$$ = $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$getCtx$();
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_rmAnimationElems$ && 0 != $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_rmAnimationElems$.length ? ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_isAnimating$ = !0, $context$$inline_3989_fadeInAnimator$$inline_3991_fadeOutAnimator$$inline_3990$$ = new dvt.$ParallelPlayable$($context$$inline_3989_fadeInAnimator$$inline_3991_fadeOutAnimator$$inline_3990$$, 
      new dvt.$AnimFadeOut$($context$$inline_3989_fadeInAnimator$$inline_3991_fadeOutAnimator$$inline_3990$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_rmAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$Options$))), $context$$inline_3989_fadeInAnimator$$inline_3991_fadeOutAnimator$$inline_3990$$.play(), dvt.$Playable$.$appendOnEnd$($context$$inline_3989_fadeInAnimator$$inline_3991_fadeOutAnimator$$inline_3990$$, 
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_onRmAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$)) : $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_mvAnimator$ ? ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_isAnimating$ = !0, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_mvAnimator$.play(), dvt.$Playable$.$appendOnEnd$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_mvAnimator$, 
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_onMvAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$)) : $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_frAnimationElems$ && 0 != $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_frAnimationElems$.length && ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_isAnimating$ = !0, $context$$inline_3989_fadeInAnimator$$inline_3991_fadeOutAnimator$$inline_3990$$ = 
      new dvt.$ParallelPlayable$($context$$inline_3989_fadeInAnimator$$inline_3991_fadeOutAnimator$$inline_3990$$, new dvt.$AnimFadeIn$($context$$inline_3989_fadeInAnimator$$inline_3991_fadeOutAnimator$$inline_3990$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_frAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$Options$), 0)), $context$$inline_3989_fadeInAnimator$$inline_3991_fadeOutAnimator$$inline_3990$$.play(), 
      dvt.$Playable$.$appendOnEnd$($context$$inline_3989_fadeInAnimator$$inline_3991_fadeOutAnimator$$inline_3990$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$.$_onAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3988_series$$20$$));
    }
    dvt.$Agent$.$isEnvironmentBrowser$() && !$JSCompiler_StaticMethods_isAnimating$$($timeline$$2$$) && $JSCompiler_StaticMethods_showThenHideHotspots$$($timeline$$2$$);
  } else {
    $DvtTimelineRenderer$$.$_renderEmptyText$($timeline$$2$$);
  }
};
$DvtTimelineRenderer$$.$_renderBackground$ = function $$DvtTimelineRenderer$$$$_renderBackground$$($timeline$$3$$) {
  $timeline$$3$$.$_background$ ? ($timeline$$3$$.$_background$.$setClipPath$(null), $timeline$$3$$.$_background$.$setWidth$($timeline$$3$$.$_backgroundWidth$), $timeline$$3$$.$_background$.$setHeight$($timeline$$3$$.$_backgroundHeight$)) : $timeline$$3$$.$_background$ = new dvt.Rect($timeline$$3$$.$getCtx$(), 0, 0, $timeline$$3$$.$_backgroundWidth$, $timeline$$3$$.$_backgroundHeight$, "bg");
  $timeline$$3$$.$_background$.$setCSSStyle$($timeline$$3$$.$_style$);
  $timeline$$3$$.$_background$.$setPixelHinting$();
  var $cp$$9$$ = new dvt.$ClipPath$;
  $cp$$9$$.$addRect$(0, 0, $timeline$$3$$.$_backgroundWidth$, $timeline$$3$$.$_backgroundHeight$);
  $timeline$$3$$.$_background$.$setClipPath$($cp$$9$$);
  $timeline$$3$$.$_background$.getParent() != $timeline$$3$$ && $timeline$$3$$.$addChild$($timeline$$3$$.$_background$);
};
$DvtTimelineRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineRenderer$$$$_renderScrollableCanvas$$($timeline$$4$$) {
  $timeline$$4$$.$_canvas$ || ($timeline$$4$$.$_canvas$ = new dvt.$Container$($timeline$$4$$.$getCtx$(), "canvas"), $timeline$$4$$.$addChild$($timeline$$4$$.$_canvas$));
};
$DvtTimelineRenderer$$.$_renderSeries$ = function $$DvtTimelineRenderer$$$$_renderSeries$$($timeline$$5$$, $container$$176$$) {
  if ($timeline$$5$$.$_series$) {
    var $isRTL$$42$$ = dvt.$Agent$.$isRightToLeft$($timeline$$5$$.$getCtx$()), $seriesCount$$30$$ = $timeline$$5$$.$_series$.length, $JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$5$$, $seriesCount$$30$$);
    if (!$timeline$$5$$.$isVertical$() && 1 < $seriesCount$$30$$ && $timeline$$5$$.$_canvasSize$ % 2 != $JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$ % 2) {
      var $JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$ = $timeline$$5$$.$_timeAxis$, $contentSize$$inline_5008_i$$650$$ = $timeline$$5$$.$_timeAxis$.$_contentSize$ + 1;
      $contentSize$$inline_5008_i$$650$$ > $JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$.$_contentSize$ && ($JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$.$_contentSize$ = $contentSize$$inline_5008_i$$650$$);
      $JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$5$$, $seriesCount$$30$$);
    }
    $timeline$$5$$.$_seriesSize$ = ($timeline$$5$$.$_canvasSize$ - $JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$) / $seriesCount$$30$$;
    for ($contentSize$$inline_5008_i$$650$$ = 0;$contentSize$$inline_5008_i$$650$$ < $seriesCount$$30$$;$contentSize$$inline_5008_i$$650$$++) {
      var $series$$21$$ = $timeline$$5$$.$_series$[$contentSize$$inline_5008_i$$650$$];
      $series$$21$$.$setClipPath$(null);
      var $cp$$10$$ = new dvt.$ClipPath$;
      if ($timeline$$5$$.$isVertical$()) {
        var $key$$74_posMatrix$$1$$ = $isRTL$$42$$ ? Math.abs($contentSize$$inline_5008_i$$650$$ - 1) : $contentSize$$inline_5008_i$$650$$;
        $isRTL$$42$$ && 1 == $timeline$$5$$.$_series$.length ? ($cp$$10$$.$addRect$($JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$, 0, $timeline$$5$$.$_seriesSize$, $timeline$$5$$.$_contentLength$), $key$$74_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, $JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$, 0)) : ($cp$$10$$.$addRect$($key$$74_posMatrix$$1$$ * ($timeline$$5$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$), 
        0, $timeline$$5$$.$_seriesSize$, $timeline$$5$$.$_contentLength$), $key$$74_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, $key$$74_posMatrix$$1$$ * ($timeline$$5$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$), 0));
        var $width$$131$$ = $timeline$$5$$.$_seriesSize$, $height$$113$$ = $timeline$$5$$.$_contentLength$;
      } else {
        $cp$$10$$.$addRect$(0, $contentSize$$inline_5008_i$$650$$ * ($timeline$$5$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$), $timeline$$5$$.$_contentLength$, $timeline$$5$$.$_seriesSize$), $key$$74_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, 0, $contentSize$$inline_5008_i$$650$$ * ($timeline$$5$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_5007_axisSize$$3$$)), $width$$131$$ = $timeline$$5$$.$_contentLength$, $height$$113$$ = 
        $timeline$$5$$.$_seriesSize$;
      }
      $series$$21$$.$setClipPath$($cp$$10$$);
      $series$$21$$.$setMatrix$($key$$74_posMatrix$$1$$);
      $series$$21$$.getParent() != $container$$176$$ && $container$$176$$.$addChild$($series$$21$$);
      $series$$21$$.$render$($timeline$$5$$.$_seriesOptions$[$contentSize$$inline_5008_i$$650$$], $width$$131$$, $height$$113$$);
    }
  }
};
$DvtTimelineRenderer$$.$_renderSeriesLabels$ = function $$DvtTimelineRenderer$$$$_renderSeriesLabels$$($timeline$$6$$) {
  if ($timeline$$6$$.$_series$) {
    var $context$$404$$ = $timeline$$6$$.$getCtx$(), $isRTL$$43$$ = dvt.$Agent$.$isRightToLeft$($context$$404$$);
    if ($timeline$$6$$.$_seriesLabels$) {
      for (var $i$$651$$ = 0;$i$$651$$ < $timeline$$6$$.$_seriesLabels$.length;$i$$651$$++) {
        $timeline$$6$$.removeChild($timeline$$6$$.$_seriesLabels$[$i$$651$$]);
      }
    }
    $timeline$$6$$.$_seriesLabels$ = [];
    for (var $seriesCount$$31$$ = $timeline$$6$$.$_series$.length, $labelSpacing$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$(), $zoomControlSpacing$$ = 2 * dvt.$TransientButton$.$_DEFAULT_RADIUS$ + 6, $doubleLabelSpacing$$ = 2 * $labelSpacing$$, $i$$651$$ = 0;$i$$651$$ < $seriesCount$$31$$;$i$$651$$++) {
      var $series$$22_seriesEmptyText_seriesEmptyTextElem$$ = $timeline$$6$$.$_series$[$i$$651$$], $seriesLabel$$2_seriesLabelElem$$ = $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$getLabel$();
      if (null != $seriesLabel$$2_seriesLabelElem$$) {
        var $posX$$4_seriesLabelStyle$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelStyle$($timeline$$6$$.$Options$), $seriesLabel$$2_seriesLabelElem$$ = new dvt.$OutputText$($context$$404$$, $seriesLabel$$2_seriesLabelElem$$, 0, 0, "sl_s" + $i$$651$$);
        $seriesLabel$$2_seriesLabelElem$$.$setCSSStyle$($posX$$4_seriesLabelStyle$$);
        $timeline$$6$$.$addChild$($seriesLabel$$2_seriesLabelElem$$);
        var $dim$$76_posMatrix$$2$$ = $seriesLabel$$2_seriesLabelElem$$.$getDimensions$();
        $timeline$$6$$.removeChild($seriesLabel$$2_seriesLabelElem$$);
        var $totalSpace$$2_width$$132$$ = $timeline$$6$$.$isVertical$() ? $timeline$$6$$.$_seriesSize$ : $timeline$$6$$.$_canvasLength$, $totalSpace$$2_width$$132$$ = Math.min($dim$$76_posMatrix$$2$$.$w$, $totalSpace$$2_width$$132$$ - ($i$$651$$ - 1) * -$zoomControlSpacing$$ - $doubleLabelSpacing$$), $seriesLabelPadding$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelPadding$(), $backgroundRect$$1$$ = new dvt.Rect($context$$404$$, 0, 0, $totalSpace$$2_width$$132$$ + 2 * $seriesLabelPadding$$, $dim$$76_posMatrix$$2$$.$h$ + 
        2 * $seriesLabelPadding$$, "slb_s" + $i$$651$$);
        $backgroundRect$$1$$.$setCSSStyle$($posX$$4_seriesLabelStyle$$);
        $backgroundRect$$1$$.$setCornerRadius$(3);
        if ($timeline$$6$$.$isVertical$()) {
          $posX$$4_seriesLabelStyle$$ = $isRTL$$43$$ ? Math.abs($i$$651$$ - 1) * ($timeline$$6$$.$_canvasSize$ - $totalSpace$$2_width$$132$$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$6$$.$_startX$ + ($i$$651$$ - 1) * $zoomControlSpacing$$ : $i$$651$$ * ($timeline$$6$$.$_canvasSize$ - $totalSpace$$2_width$$132$$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$6$$.$_startX$ + ($i$$651$$ - 1) * -$zoomControlSpacing$$, $posY$$3$$ = $timeline$$6$$.$_startY$ + $labelSpacing$$;
        } else {
          var $posX$$4_seriesLabelStyle$$ = $isRTL$$43$$ ? $timeline$$6$$.$_canvasLength$ - $totalSpace$$2_width$$132$$ - $labelSpacing$$ - ($i$$651$$ - 1) * -$zoomControlSpacing$$ : $timeline$$6$$.$_startX$ + $labelSpacing$$ + ($i$$651$$ - 1) * -$zoomControlSpacing$$, $posY$$3$$ = $i$$651$$ * ($timeline$$6$$.$_canvasSize$ - $dim$$76_posMatrix$$2$$.$h$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$6$$.$_startY$
        }
        $dim$$76_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, $posX$$4_seriesLabelStyle$$, $posY$$3$$);
        $seriesLabel$$2_seriesLabelElem$$.$setMatrix$($dim$$76_posMatrix$$2$$);
        $dim$$76_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, $posX$$4_seriesLabelStyle$$ - $seriesLabelPadding$$, $posY$$3$$ - $seriesLabelPadding$$);
        $backgroundRect$$1$$.$setMatrix$($dim$$76_posMatrix$$2$$);
        $timeline$$6$$.$addChild$($backgroundRect$$1$$);
        dvt.$TextUtils$.$fitText$($seriesLabel$$2_seriesLabelElem$$, $totalSpace$$2_width$$132$$, Infinity, $timeline$$6$$);
        $timeline$$6$$.$_seriesLabels$.push($backgroundRect$$1$$);
        $timeline$$6$$.$_seriesLabels$.push($seriesLabel$$2_seriesLabelElem$$);
      }
      $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$_isEmpty$ && ($series$$22_seriesEmptyText_seriesEmptyTextElem$$ = $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$_emptyText$, null != $series$$22_seriesEmptyText_seriesEmptyTextElem$$ && ($series$$22_seriesEmptyText_seriesEmptyTextElem$$ = new dvt.$OutputText$($context$$404$$, $series$$22_seriesEmptyText_seriesEmptyTextElem$$, 0, 0, "et_s" + $i$$651$$), $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getEmptyTextStyle$($timeline$$6$$.$Options$)), 
      $timeline$$6$$.$addChild$($series$$22_seriesEmptyText_seriesEmptyTextElem$$), $dim$$76_posMatrix$$2$$ = $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$getDimensions$(), $timeline$$6$$.removeChild($series$$22_seriesEmptyText_seriesEmptyTextElem$$), $dim$$76_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, ($timeline$$6$$.$_canvasLength$ - $dim$$76_posMatrix$$2$$.$w$) / 2 + $timeline$$6$$.$_startX$, $i$$651$$ * ($timeline$$6$$.$_seriesSize$ + $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$6$$, 
      $seriesCount$$31$$)) + ($timeline$$6$$.$_seriesSize$ - $dim$$76_posMatrix$$2$$.$h$) / 2 + $timeline$$6$$.$_startY$), $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$setMatrix$($dim$$76_posMatrix$$2$$), $timeline$$6$$.$addChild$($series$$22_seriesEmptyText_seriesEmptyTextElem$$), $timeline$$6$$.$_seriesLabels$.push($series$$22_seriesEmptyText_seriesEmptyTextElem$$)));
    }
  }
};
$DvtTimelineRenderer$$.$_renderAxis$ = function $$DvtTimelineRenderer$$$$_renderAxis$$($timeline$$7$$, $container$$177$$) {
  var $context$$405$$ = $timeline$$7$$.$getCtx$(), $cp$$11_isRTL$$44$$ = dvt.$Agent$.$isRightToLeft$($context$$405$$), $axisStart_seriesCount$$32$$ = $timeline$$7$$.$_series$.length, $axisSize$$4$$ = $timeline$$7$$.$_timeAxis$.$getSize$(), $axisVisibleSize$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$7$$, $axisStart_seriesCount$$32$$), $axisStart_seriesCount$$32$$ = 1 == $axisStart_seriesCount$$32$$ ? $timeline$$7$$.$_canvasSize$ - $axisVisibleSize$$ : $timeline$$7$$.$_canvasSize$ / 
  $axisStart_seriesCount$$32$$ - $axisVisibleSize$$ / 2;
  $cp$$11_isRTL$$44$$ && $timeline$$7$$.$isVertical$() && 1 == $timeline$$7$$.$_series$.length && ($axisStart_seriesCount$$32$$ = 0);
  null == $timeline$$7$$.$_axis$ ? ($cp$$11_isRTL$$44$$ = new dvt.$ClipPath$, $timeline$$7$$.$isVertical$() ? ($timeline$$7$$.$_axis$ = new dvt.Rect($context$$405$$, $axisStart_seriesCount$$32$$, -$timeline$$7$$.$_axisBorderWidth$, $axisSize$$4$$, $timeline$$7$$.$_axisLength$, "axis"), $cp$$11_isRTL$$44$$.$addRect$($axisStart_seriesCount$$32$$, 0, $axisSize$$4$$, $timeline$$7$$.$_contentLength$)) : ($timeline$$7$$.$_axis$ = new dvt.Rect($context$$405$$, -$timeline$$7$$.$_axisBorderWidth$, $axisStart_seriesCount$$32$$, 
  $timeline$$7$$.$_axisLength$, $axisSize$$4$$, "axis"), $cp$$11_isRTL$$44$$.$addRect$(0, $axisStart_seriesCount$$32$$, $timeline$$7$$.$_contentLength$, $axisSize$$4$$)), $timeline$$7$$.$_axis$.$setCSSStyle$($timeline$$7$$.$_axisStyle$), $timeline$$7$$.$_axis$.$setPixelHinting$(), $timeline$$7$$.$_axis$.$setClipPath$($cp$$11_isRTL$$44$$), $container$$177$$.$addChild$($timeline$$7$$.$_axis$)) : ($timeline$$7$$.$_axis$.$setClipPath$(null), $cp$$11_isRTL$$44$$ = new dvt.$ClipPath$, $timeline$$7$$.$isVertical$() ? 
  ($timeline$$7$$.$_axis$.$setX$($axisStart_seriesCount$$32$$), $timeline$$7$$.$_axis$.$setY$(-$timeline$$7$$.$_axisBorderWidth$), $timeline$$7$$.$_axis$.$setWidth$($axisSize$$4$$), $timeline$$7$$.$_axis$.$setHeight$($timeline$$7$$.$_axisLength$), $cp$$11_isRTL$$44$$.$addRect$($axisStart_seriesCount$$32$$, 0, $axisSize$$4$$, $timeline$$7$$.$_contentLength$)) : ($timeline$$7$$.$_axis$.$setX$(-$timeline$$7$$.$_axisBorderWidth$), $timeline$$7$$.$_axis$.$setY$($axisStart_seriesCount$$32$$), $timeline$$7$$.$_axis$.$setWidth$($timeline$$7$$.$_axisLength$), 
  $timeline$$7$$.$_axis$.$setHeight$($axisSize$$4$$), $cp$$11_isRTL$$44$$.$addRect$(0, $axisStart_seriesCount$$32$$, $timeline$$7$$.$_contentLength$, $axisSize$$4$$)), $timeline$$7$$.$_axis$.$setClipPath$($cp$$11_isRTL$$44$$));
  $DvtTimelineRenderer$$.$_renderSeriesTicks$($timeline$$7$$, $axisStart_seriesCount$$32$$);
};
$DvtTimelineRenderer$$.$_renderSeriesTicks$ = function $$DvtTimelineRenderer$$$$_renderSeriesTicks$$($timeline$$8$$, $axisStartPos$$) {
  $timeline$$8$$.$_axis$.$removeChildren$();
  var $axisStart$$1_separatorStyle$$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getAxisSeparatorStyle$());
  if ($timeline$$8$$.$_axisStyleDefaults$) {
    var $separatorColor$$ = $timeline$$8$$.$_axisStyleDefaults$.separatorColor;
    $separatorColor$$ && $axisStart$$1_separatorStyle$$.$parseInlineStyle$("color:" + $separatorColor$$ + ";");
  }
  $timeline$$8$$.$_separatorStroke$ = new dvt.$SolidStroke$($axisStart$$1_separatorStyle$$.$getStyle$(dvt.$CSSStyle$.$COLOR$));
  $axisStart$$1_separatorStyle$$ = $axisStartPos$$ + $timeline$$8$$.$_timeAxis$.$_borderWidth$;
  $DvtTimelineRenderer$$.$_renderTimeAxis$($timeline$$8$$, $timeline$$8$$.$_fetchStartPos$, $timeline$$8$$.$_fetchEndPos$, $timeline$$8$$.$_axis$, $timeline$$8$$.$_contentLength$, $axisStart$$1_separatorStyle$$ + $timeline$$8$$.$_timeAxis$.$_contentSize$, $axisStart$$1_separatorStyle$$, $axisStart$$1_separatorStyle$$);
  $DvtTimelineRenderer$$.$_renderSeriesTimeAxis$($timeline$$8$$, $timeline$$8$$.$_fetchStartPos$, $timeline$$8$$.$_fetchEndPos$, $timeline$$8$$.$_timeZoomCanvas$, $timeline$$8$$.$_contentLength$);
};
$DvtTimelineRenderer$$.$_renderTimeAxis$ = function $$DvtTimelineRenderer$$$$_renderTimeAxis$$($timeline$$9$$, $dates$$3_startPos$$6$$, $endPos$$5_labels$$33$$, $container$$178_i$$652$$, $length$$25$$, $axisEnd$$1$$, $tickStart$$, $labelStart$$) {
  var $context$$406$$ = $timeline$$9$$.$getCtx$(), $isRTL$$45$$ = dvt.$Agent$.$isRightToLeft$($context$$406$$), $block$$ = new dvt.$Container$($context$$406$$, "block_" + $dates$$3_startPos$$6$$ + "_" + $endPos$$5_labels$$33$$);
  $block$$.$startPos$ = $dates$$3_startPos$$6$$;
  $block$$.$endPos$ = $endPos$$5_labels$$33$$;
  $container$$178_i$$652$$.$addChild$($block$$);
  $dates$$3_startPos$$6$$ = $timeline$$9$$.$_dates$[$timeline$$9$$.$_zoomLevelOrder$];
  $endPos$$5_labels$$33$$ = $timeline$$9$$.$_labels$[$timeline$$9$$.$_zoomLevelOrder$];
  for ($container$$178_i$$652$$ = 0;$container$$178_i$$652$$ < $dates$$3_startPos$$6$$.length - 1;$container$$178_i$$652$$++) {
    var $date$$17$$ = $dates$$3_startPos$$6$$[$container$$178_i$$652$$], $next$$16_nextPos$$ = $dates$$3_startPos$$6$$[$container$$178_i$$652$$ + 1], $currentPos$$1$$ = $DvtTimeUtils$$.$getDatePosition$($timeline$$9$$.$_start$, $timeline$$9$$.$_end$, $date$$17$$, $length$$25$$), $next$$16_nextPos$$ = $DvtTimeUtils$$.$getDatePosition$($timeline$$9$$.$_start$, $timeline$$9$$.$_end$, $next$$16_nextPos$$, $length$$25$$), $maxLength$$ = $next$$16_nextPos$$ - $currentPos$$1$$;
    0 != $currentPos$$1$$ && (($timeline$$9$$.$isVertical$() ? $DvtTimelineRenderer$$.$_addTick$($context$$406$$, $block$$, $axisEnd$$1$$, $tickStart$$, $currentPos$$1$$, $currentPos$$1$$, $timeline$$9$$.$_separatorStroke$, "s_tick" + $date$$17$$) : $isRTL$$45$$ ? $DvtTimelineRenderer$$.$_addTick$($context$$406$$, $block$$, $length$$25$$ - $currentPos$$1$$, $length$$25$$ - $currentPos$$1$$, $axisEnd$$1$$, $tickStart$$, $timeline$$9$$.$_separatorStroke$, "s_tick" + $date$$17$$) : $DvtTimelineRenderer$$.$_addTick$($context$$406$$, 
    $block$$, $currentPos$$1$$, $currentPos$$1$$, $axisEnd$$1$$, $tickStart$$, $timeline$$9$$.$_separatorStroke$, "s_tick" + $date$$17$$)).time = $date$$17$$);
    $timeline$$9$$.$isVertical$() ? $DvtTimelineRenderer$$.$_addAxisLabel$($block$$, $endPos$$5_labels$$33$$[$container$$178_i$$652$$], $labelStart$$ + ($axisEnd$$1$$ - $labelStart$$) / 2, $currentPos$$1$$ + ($next$$16_nextPos$$ - $currentPos$$1$$) / 2, $axisEnd$$1$$ - $labelStart$$) : $isRTL$$45$$ ? $DvtTimelineRenderer$$.$_addAxisLabel$($block$$, $endPos$$5_labels$$33$$[$container$$178_i$$652$$], $length$$25$$ - ($currentPos$$1$$ + ($next$$16_nextPos$$ - $currentPos$$1$$) / 2), $labelStart$$ + 
    ($axisEnd$$1$$ - $labelStart$$) / 2, $maxLength$$) : $DvtTimelineRenderer$$.$_addAxisLabel$($block$$, $endPos$$5_labels$$33$$[$container$$178_i$$652$$], $currentPos$$1$$ + ($next$$16_nextPos$$ - $currentPos$$1$$) / 2, $labelStart$$ + ($axisEnd$$1$$ - $labelStart$$) / 2, $maxLength$$);
  }
};
$DvtTimelineRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineRenderer$$$$_renderSeriesTimeAxis$$($timeline$$10$$, $currentPos$$2_startPos$$7$$, $endPos$$6_label$$104$$, $container$$179$$, $length$$26$$) {
  var $context$$407$$ = $timeline$$10$$.$getCtx$(), $isRTL$$46$$ = dvt.$Agent$.$isRightToLeft$($context$$407$$);
  if ($timeline$$10$$.$_majorAxisLabels$) {
    for (var $currentDate$$1_i$$653_startDate$$1$$ = 0;$currentDate$$1_i$$653_startDate$$1$$ < $timeline$$10$$.$_majorAxisLabels$.length;$currentDate$$1_i$$653_startDate$$1$$++) {
      $container$$179$$.removeChild($timeline$$10$$.$_majorAxisLabels$[$currentDate$$1_i$$653_startDate$$1$$]);
    }
  }
  $timeline$$10$$.$_majorAxisLabels$ = [];
  if ($timeline$$10$$.$_seriesScale$) {
    var $dates$$4$$, $customFormatScale$$2_customScale$$2_labels$$34$$, $start$$46$$ = $timeline$$10$$.$_start$, $end$$28$$ = $timeline$$10$$.$_end$;
    if ($timeline$$10$$.$_customTimeScales$ && $timeline$$10$$.$_customTimeScales$[$timeline$$10$$.$_seriesScale$]) {
      $customFormatScale$$2_customScale$$2_labels$$34$$ = $timeline$$10$$.$_customTimeScales$[$timeline$$10$$.$_seriesScale$], $dates$$4$$ = $customFormatScale$$2_customScale$$2_labels$$34$$.times, $customFormatScale$$2_customScale$$2_labels$$34$$ = $customFormatScale$$2_customScale$$2_labels$$34$$.labels;
    } else {
      if ($timeline$$10$$.$_seriesCustomFormatScales$ && $timeline$$10$$.$_seriesCustomFormatScales$[$timeline$$10$$.$_seriesScale$]) {
        $customFormatScale$$2_customScale$$2_labels$$34$$ = $timeline$$10$$.$_seriesCustomFormatScales$[$timeline$$10$$.$_seriesScale$], $dates$$4$$ = $customFormatScale$$2_customScale$$2_labels$$34$$.times, $customFormatScale$$2_customScale$$2_labels$$34$$ = $customFormatScale$$2_customScale$$2_labels$$34$$.labels;
      } else {
        for ($dates$$4$$ = [], $customFormatScale$$2_customScale$$2_labels$$34$$ = [], $currentDate$$1_i$$653_startDate$$1$$ = $DvtTimeUtils$$.$getPositionDate$($start$$46$$, $end$$28$$, $currentPos$$2_startPos$$7$$, $length$$26$$), $currentDate$$1_i$$653_startDate$$1$$ = $timeline$$10$$.$_seriesTimeAxis$.$adjustDate$($currentDate$$1_i$$653_startDate$$1$$), $currentPos$$2_startPos$$7$$ = $DvtTimeUtils$$.$getDatePosition$($start$$46$$, $end$$28$$, $currentDate$$1_i$$653_startDate$$1$$, $length$$26$$), 
        $dates$$4$$.push($currentDate$$1_i$$653_startDate$$1$$.getTime());$currentPos$$2_startPos$$7$$ < $endPos$$6_label$$104$$;) {
          $customFormatScale$$2_customScale$$2_labels$$34$$.push($JSCompiler_StaticMethods_formatDate$$($timeline$$10$$.$_seriesTimeAxis$, $currentDate$$1_i$$653_startDate$$1$$)), $currentDate$$1_i$$653_startDate$$1$$ = $timeline$$10$$.$_seriesTimeAxis$.$getNextDate$($currentDate$$1_i$$653_startDate$$1$$.getTime()), $currentPos$$2_startPos$$7$$ = $DvtTimeUtils$$.$getDatePosition$($start$$46$$, $end$$28$$, $currentDate$$1_i$$653_startDate$$1$$, $length$$26$$), $dates$$4$$.push($currentDate$$1_i$$653_startDate$$1$$.getTime())
          ;
        }
      }
    }
    for ($currentDate$$1_i$$653_startDate$$1$$ = 0;$currentDate$$1_i$$653_startDate$$1$$ < $customFormatScale$$2_customScale$$2_labels$$34$$.length;$currentDate$$1_i$$653_startDate$$1$$++) {
      $endPos$$6_label$$104$$ = $customFormatScale$$2_customScale$$2_labels$$34$$[$currentDate$$1_i$$653_startDate$$1$$];
      $currentPos$$2_startPos$$7$$ = $DvtTimeUtils$$.$getDatePosition$($start$$46$$, $end$$28$$, $dates$$4$$[$currentDate$$1_i$$653_startDate$$1$$], $length$$26$$);
      var $maxLength$$1$$ = $DvtTimeUtils$$.$getDatePosition$($start$$46$$, $end$$28$$, $dates$$4$$[$currentDate$$1_i$$653_startDate$$1$$ + 1], $length$$26$$) - $currentPos$$2_startPos$$7$$;
      ($isRTL$$46$$ ? $timeline$$10$$.$isVertical$() ? $DvtTimelineRenderer$$.$_addLabel$($context$$407$$, $container$$179$$, $timeline$$10$$.$_canvasSize$ - 5, $endPos$$6_label$$104$$, $maxLength$$1$$, $currentPos$$2_startPos$$7$$ + 18, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$10$$.$Options$), "o_label" + $currentPos$$2_startPos$$7$$ + "_s0", $timeline$$10$$.$_majorAxisLabels$, $isRTL$$46$$) : $DvtTimelineRenderer$$.$_addLabel$($context$$407$$, $container$$179$$, $length$$26$$ - 
      ($currentPos$$2_startPos$$7$$ + 5), $endPos$$6_label$$104$$, $maxLength$$1$$, $timeline$$10$$.$_seriesSize$ - 2, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$10$$.$Options$), "o_label" + $currentPos$$2_startPos$$7$$ + "_s0", $timeline$$10$$.$_majorAxisLabels$, $isRTL$$46$$) : $timeline$$10$$.$isVertical$() ? $DvtTimelineRenderer$$.$_addLabel$($context$$407$$, $container$$179$$, 5, $endPos$$6_label$$104$$, $maxLength$$1$$, $currentPos$$2_startPos$$7$$ + 18, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$10$$.$Options$), 
      "o_label" + $currentPos$$2_startPos$$7$$ + "_s0", $timeline$$10$$.$_majorAxisLabels$, $isRTL$$46$$) : $DvtTimelineRenderer$$.$_addLabel$($context$$407$$, $container$$179$$, $currentPos$$2_startPos$$7$$ + 5, $endPos$$6_label$$104$$, $maxLength$$1$$, $timeline$$10$$.$_seriesSize$ - 2, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$10$$.$Options$), "o_label" + $currentPos$$2_startPos$$7$$ + "_s0", $timeline$$10$$.$_majorAxisLabels$, $isRTL$$46$$)).time = $dates$$4$$[$currentDate$$1_i$$653_startDate$$1$$];
    }
  }
};
$DvtTimelineRenderer$$.$_renderOverview$ = function $$DvtTimelineRenderer$$$$_renderOverview$$($timeline$$11$$) {
  var $context$$408_overviewOptions$$inline_3994$$ = $timeline$$11$$.$getCtx$(), $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$ = dvt.$Agent$.$isRightToLeft$($context$$408_overviewOptions$$inline_3994$$);
  if (null == $timeline$$11$$.$_overviewCanvas$) {
    var $addOverviewCanvas_dates$$inline_5012_seriesCount$$inline_5027$$ = !0;
    $timeline$$11$$.$_overviewCanvas$ = new dvt.$Container$($context$$408_overviewOptions$$inline_3994$$, "oCanvas");
  } else {
    $timeline$$11$$.$_overviewCanvas$.$removeChildren$();
  }
  var $borderWidth$$17_height$$114$$ = $timeline$$11$$.$_style$.$getBorderWidth$(), $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$ = $borderWidth$$17_height$$114$$ / 2;
  if ($timeline$$11$$.$isVertical$()) {
    var $width$$133$$ = $timeline$$11$$.$_overviewSize$, $borderWidth$$17_height$$114$$ = $timeline$$11$$.$Height$ - $borderWidth$$17_height$$114$$;
    $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$ ? $timeline$$11$$.$_overviewCanvas$.$setTranslateX$($customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$) : $timeline$$11$$.$_overviewCanvas$.$setTranslateX$($timeline$$11$$.$Width$ - $timeline$$11$$.$_overviewSize$ - $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$);
    $timeline$$11$$.$_overviewCanvas$.$setTranslateY$($customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$);
  } else {
    $width$$133$$ = $timeline$$11$$.$Width$ - $borderWidth$$17_height$$114$$, $borderWidth$$17_height$$114$$ = $timeline$$11$$.$_overviewSize$, $timeline$$11$$.$_overviewCanvas$.$setTranslateY$($timeline$$11$$.$Height$ - $timeline$$11$$.$_overviewSize$ - $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$), $timeline$$11$$.$_overviewCanvas$.$setTranslateX$($customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$)
    ;
  }
  $addOverviewCanvas_dates$$inline_5012_seriesCount$$inline_5027$$ && $timeline$$11$$.$addChild$($timeline$$11$$.$_overviewCanvas$);
  $timeline$$11$$.$_overview$ = new dvt.$TimelineOverview$($context$$408_overviewOptions$$inline_3994$$, $timeline$$11$$.$HandleEvent$, $timeline$$11$$);
  $timeline$$11$$.$_overviewCanvas$.$addChild$($timeline$$11$$.$_overview$);
  $context$$408_overviewOptions$$inline_3994$$ = {};
  $context$$408_overviewOptions$$inline_3994$$.start = $timeline$$11$$.$_start$;
  $context$$408_overviewOptions$$inline_3994$$.end = $timeline$$11$$.$_end$;
  $context$$408_overviewOptions$$inline_3994$$.renstart = $timeline$$11$$.$_viewStartTime$;
  $context$$408_overviewOptions$$inline_3994$$.width = $timeline$$11$$.$_contentLength$;
  $context$$408_overviewOptions$$inline_3994$$.ovp = "below";
  $context$$408_overviewOptions$$inline_3994$$.selmode = $timeline$$11$$.$_selectionMode$;
  $context$$408_overviewOptions$$inline_3994$$.rtl = $timeline$$11$$.$isRTL$();
  $context$$408_overviewOptions$$inline_3994$$.sid = "ts1";
  $context$$408_overviewOptions$$inline_3994$$._bts = "none";
  $context$$408_overviewOptions$$inline_3994$$._btc = "#4f4f4f";
  $context$$408_overviewOptions$$inline_3994$$._fc = "#aadd77";
  $context$$408_overviewOptions$$inline_3994$$._do = "0";
  $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$ = $DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$($timeline$$11$$.$Options$);
  $context$$408_overviewOptions$$inline_3994$$._wbc = $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$;
  $context$$408_overviewOptions$$inline_3994$$._hfc = $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$;
  $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$ = $DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$($timeline$$11$$.$Options$);
  $context$$408_overviewOptions$$inline_3994$$._wbtc = $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$;
  $context$$408_overviewOptions$$inline_3994$$._wbrc = $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$;
  $context$$408_overviewOptions$$inline_3994$$._wbbc = $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$;
  $context$$408_overviewOptions$$inline_3994$$._wblc = $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$;
  $context$$408_overviewOptions$$inline_3994$$._wbts = "solid";
  $context$$408_overviewOptions$$inline_3994$$._wbrs = "solid";
  $context$$408_overviewOptions$$inline_3994$$._wbbs = "solid";
  $context$$408_overviewOptions$$inline_3994$$._wbls = "solid";
  $context$$408_overviewOptions$$inline_3994$$._ls = $DvtTimelineStyleUtils$$.$getOverviewLabelStyle$($timeline$$11$$.$Options$).toString();
  $context$$408_overviewOptions$$inline_3994$$._obc = $DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$($timeline$$11$$.$Options$);
  $context$$408_overviewOptions$$inline_3994$$._ctic = $DvtTimelineStyleUtils$$.$getReferenceObjectColor$($timeline$$11$$.$Options$);
  $context$$408_overviewOptions$$inline_3994$$._tic = "#BCC7D2";
  $context$$408_overviewOptions$$inline_3994$$._tabc = "#D9DFE3";
  $context$$408_overviewOptions$$inline_3994$$._tabo = "0";
  $context$$408_overviewOptions$$inline_3994$$._bs = "solid";
  $context$$408_overviewOptions$$inline_3994$$._bc = "#648BAF";
  $context$$408_overviewOptions$$inline_3994$$._bw = "1px";
  $context$$408_overviewOptions$$inline_3994$$._bof = "0px";
  $context$$408_overviewOptions$$inline_3994$$._dbs = "solid";
  $context$$408_overviewOptions$$inline_3994$$._dbc = "#648BAF";
  $context$$408_overviewOptions$$inline_3994$$._dbw = "1px";
  $context$$408_overviewOptions$$inline_3994$$._hbs = "solid";
  $context$$408_overviewOptions$$inline_3994$$._hbc = "#85bbe7";
  $context$$408_overviewOptions$$inline_3994$$._hbw = "2px";
  $context$$408_overviewOptions$$inline_3994$$._hbof = "0px";
  $context$$408_overviewOptions$$inline_3994$$._hgc = "#ebeced";
  $context$$408_overviewOptions$$inline_3994$$._hgo = "1";
  $context$$408_overviewOptions$$inline_3994$$._hdbs = "solid";
  $context$$408_overviewOptions$$inline_3994$$._hdbc = "#85bbe7";
  $context$$408_overviewOptions$$inline_3994$$._hdbw = "2px";
  $context$$408_overviewOptions$$inline_3994$$._sbs = "solid";
  $context$$408_overviewOptions$$inline_3994$$._sbc = "#000000";
  $context$$408_overviewOptions$$inline_3994$$._sbw = "2px";
  $context$$408_overviewOptions$$inline_3994$$._sbof = "0px";
  $context$$408_overviewOptions$$inline_3994$$._sbo = "1";
  $context$$408_overviewOptions$$inline_3994$$._sdbs = "solid";
  $context$$408_overviewOptions$$inline_3994$$._sdbc = "#000000";
  $context$$408_overviewOptions$$inline_3994$$._sdbw = "2px";
  $context$$408_overviewOptions$$inline_3994$$._asbs = "solid";
  $context$$408_overviewOptions$$inline_3994$$._asbc = "#000000";
  $context$$408_overviewOptions$$inline_3994$$._asbw = "2px";
  $context$$408_overviewOptions$$inline_3994$$._asbof = "0px";
  $context$$408_overviewOptions$$inline_3994$$._asbo = "1";
  $context$$408_overviewOptions$$inline_3994$$._asgc = "#e4f0fa";
  $context$$408_overviewOptions$$inline_3994$$._asgo = "1";
  $context$$408_overviewOptions$$inline_3994$$._asdbs = "solid";
  $context$$408_overviewOptions$$inline_3994$$._asdbc = "#000000";
  $context$$408_overviewOptions$$inline_3994$$._asdbw = "2px";
  $context$$408_overviewOptions$$inline_3994$$._aoc = "off";
  $timeline$$11$$.$_referenceObjects$ && 0 < $timeline$$11$$.$_referenceObjects$.length && $timeline$$11$$.$_referenceObjects$[0] && ($context$$408_overviewOptions$$inline_3994$$.ocd = $timeline$$11$$.$_referenceObjects$[0].getTime());
  $timeline$$11$$.$_isVertical$ ? ($context$$408_overviewOptions$$inline_3994$$.orn = "vertical", ($JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$ = $timeline$$11$$.$_resources$.overviewHandleVert) ? ($context$$408_overviewOptions$$inline_3994$$._hbi = $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$, 
  $context$$408_overviewOptions$$inline_3994$$._hw = "15", $context$$408_overviewOptions$$inline_3994$$._hh = "3") : $context$$408_overviewOptions$$inline_3994$$._htc = $DvtTimelineStyleUtils$$.$getOverviewHandleTextureColor$()) : ($context$$408_overviewOptions$$inline_3994$$.orn = "horizontal", ($JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$ = $timeline$$11$$.$_resources$.overviewHandleHor) ? 
  ($context$$408_overviewOptions$$inline_3994$$._hbi = $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$, $context$$408_overviewOptions$$inline_3994$$._hw = "3", $context$$408_overviewOptions$$inline_3994$$._hh = "15") : $context$$408_overviewOptions$$inline_3994$$._htc = $DvtTimelineStyleUtils$$.$getOverviewHandleTextureColor$(), $context$$408_overviewOptions$$inline_3994$$._ds = 
  "square", $context$$408_overviewOptions$$inline_3994$$._dsx = "1.3d", $context$$408_overviewOptions$$inline_3994$$._dsy = "0.9d");
  $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$ = [];
  if ($timeline$$11$$.$_seriesTimeAxis$) {
    if ($timeline$$11$$.$_customTimeScales$ && $timeline$$11$$.$_customTimeScales$[$timeline$$11$$.$_seriesScale$]) {
      $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$ = $timeline$$11$$.$_customTimeScales$[$timeline$$11$$.$_seriesScale$], $addOverviewCanvas_dates$$inline_5012_seriesCount$$inline_5027$$ = $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$.times, $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$ = $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$.labels
      ;
    } else {
      if ($timeline$$11$$.$_seriesCustomFormatScales$ && $timeline$$11$$.$_seriesCustomFormatScales$[$timeline$$11$$.$_seriesScale$]) {
        $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$ = $timeline$$11$$.$_seriesCustomFormatScales$[$timeline$$11$$.$_seriesScale$], $addOverviewCanvas_dates$$inline_5012_seriesCount$$inline_5027$$ = $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$.times, $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$ = 
        $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$.labels;
      } else {
        for (var $addOverviewCanvas_dates$$inline_5012_seriesCount$$inline_5027$$ = [], $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$ = [], $i$$inline_5022_items$$inline_5029_start$$inline_5016$$ = $timeline$$11$$.$_start$, $end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$ = $timeline$$11$$.$_end$, $itemOption$$inline_5032_length$$inline_5018$$ = $timeline$$11$$.$_isVertical$ ? $timeline$$11$$.$Height$ : $timeline$$11$$.$Width$, 
        $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$ = $DvtTimeUtils$$.$getPositionDate$($i$$inline_5022_items$$inline_5029_start$$inline_5016$$, $end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$, $timeline$$11$$.$_fetchStartPos$, $itemOption$$inline_5032_length$$inline_5018$$), $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$ = $timeline$$11$$.$_seriesTimeAxis$.$adjustDate$($currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$), 
        $currentPos$$inline_5021_endTime$$inline_5033$$ = $DvtTimeUtils$$.$getDatePosition$($i$$inline_5022_items$$inline_5029_start$$inline_5016$$, $end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$, $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$, $itemOption$$inline_5032_length$$inline_5018$$);$currentPos$$inline_5021_endTime$$inline_5033$$ < $timeline$$11$$.$_fetchEndPos$;) {
          $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$.push($JSCompiler_StaticMethods_formatDate$$($timeline$$11$$.$_seriesTimeAxis$, $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$)), $addOverviewCanvas_dates$$inline_5012_seriesCount$$inline_5027$$.push($currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$.getTime()), $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$ = 
          $timeline$$11$$.$_seriesTimeAxis$.$getNextDate$($currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$.getTime()), $currentPos$$inline_5021_endTime$$inline_5033$$ = $DvtTimeUtils$$.$getDatePosition$($i$$inline_5022_items$$inline_5029_start$$inline_5016$$, $end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$, $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$, $itemOption$$inline_5032_length$$inline_5018$$)
          ;
        }
      }
    }
    for ($i$$inline_5022_items$$inline_5029_start$$inline_5016$$ = 0;$i$$inline_5022_items$$inline_5029_start$$inline_5016$$ < $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$.length;$i$$inline_5022_items$$inline_5029_start$$inline_5016$$++) {
      $end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$ = {}, $end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$.time = $addOverviewCanvas_dates$$inline_5012_seriesCount$$inline_5027$$[$i$$inline_5022_items$$inline_5029_start$$inline_5016$$], $end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$.label = $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$[$i$$inline_5022_items$$inline_5029_start$$inline_5016$$], $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$.push($end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$)
      ;
    }
  }
  $context$$408_overviewOptions$$inline_3994$$.axisTicks = $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$;
  if ($timeline$$11$$.$_series$) {
    for ($JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$ = [], $addOverviewCanvas_dates$$inline_5012_seriesCount$$inline_5027$$ = $timeline$$11$$.$_series$.length, $customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$ = 0;$customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$ < 
    $addOverviewCanvas_dates$$inline_5012_seriesCount$$inline_5027$$;$customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$++) {
      for ($i$$inline_5022_items$$inline_5029_start$$inline_5016$$ = $timeline$$11$$.$_series$[$customFormatScale$$inline_5015_customScale$$inline_5014_halfBorderWidth$$2_i$$inline_5028_labels$$inline_5013$$].$_items$, $end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$ = 0;$end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$ < $i$$inline_5022_items$$inline_5029_start$$inline_5016$$.length;$end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$++) {
        $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$ = $i$$inline_5022_items$$inline_5029_start$$inline_5016$$[$end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$];
        $itemOption$$inline_5032_length$$inline_5018$$ = {};
        $itemOption$$inline_5032_length$$inline_5018$$.rk = $end$$inline_5017_j$$inline_5030_tickOption$$inline_5023$$;
        $itemOption$$inline_5032_length$$inline_5018$$.tid = $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$.getId();
        $itemOption$$inline_5032_length$$inline_5018$$.t = $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$.$_startTime$;
        $itemOption$$inline_5032_length$$inline_5018$$._sd = "true";
        if ($currentPos$$inline_5021_endTime$$inline_5033$$ = $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$.$_endTime$) {
          $itemOption$$inline_5032_length$$inline_5018$$.et = $currentPos$$inline_5021_endTime$$inline_5033$$, ($currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$ = $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$.$_durationFillColor$) && ($itemOption$$inline_5032_length$$inline_5018$$.dfc = $currentDate$$inline_5020_durationFillColor$$inline_5034_item$$inline_5031_startDate$$inline_5019$$);
        }
        $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$.push($itemOption$$inline_5032_length$$inline_5018$$);
      }
    }
  } else {
    $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$ = void 0;
  }
  $context$$408_overviewOptions$$inline_3994$$.markers = $JSCompiler_inline_result$$4275_axisTicks$$inline_5011_handle$$inline_3997_isRTL$$47_overviewMarkers$$inline_5026_windowBackgroundColor$$inline_3995_windowBorderColor$$inline_3996$$;
  $timeline$$11$$.$_overview$.$render$($context$$408_overviewOptions$$inline_3994$$, $width$$133$$, $borderWidth$$17_height$$114$$);
};
$DvtTimelineRenderer$$.$_renderScrollHotspots$ = function $$DvtTimelineRenderer$$$$_renderScrollHotspots$$($timeline$$12$$) {
  if ($timeline$$12$$.$_series$) {
    var $context$$409$$ = $timeline$$12$$.$getCtx$(), $isRTL$$48$$ = dvt.$Agent$.$isRightToLeft$($context$$409$$), $seriesCount$$33$$ = $timeline$$12$$.$_series$.length, $axisSize$$6$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$12$$, $seriesCount$$33$$);
    if ($timeline$$12$$.$_scrollHotspotsContainers$) {
      for (var $i$$654$$ = 0;$i$$654$$ < $timeline$$12$$.$_scrollHotspotsContainers$.length;$i$$654$$++) {
        $timeline$$12$$.$_scrollHotspotsContainers$[$i$$654$$].$removeChildren$();
      }
    } else {
      var $addHotspotsContainers$$ = !0;
      $timeline$$12$$.$_scrollHotspotsContainers$ = [];
    }
    $timeline$$12$$.$_scrollHotspots$ = [];
    for (var $hotspotPadding$$ = $DvtTimelineStyleUtils$$.$getHotspotPadding$(), $hotspotWidth$$ = $DvtTimelineStyleUtils$$.$getHotspotWidth$(), $hotspotHeight$$ = $DvtTimelineStyleUtils$$.$getHotspotHeight$(), $hotspotArrowWidth$$ = $DvtTimelineStyleUtils$$.$getHotspotArrowWidth$(), $hotspotArrowHeight$$ = $DvtTimelineStyleUtils$$.$getHotspotArrowHeight$(), $hotspotBackgroundColor$$ = $DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$(), $hotspotBorderRadius$$ = $DvtTimelineStyleUtils$$.$getHotspotBorderRadius$(), 
    $i$$654$$ = 0;$i$$654$$ < $seriesCount$$33$$;$i$$654$$++) {
      if ($addHotspotsContainers$$) {
        var $scrollHotspots$$ = new dvt.$Container$($context$$409$$, "hotspots_s" + $i$$654$$);
        $timeline$$12$$.$addChild$($scrollHotspots$$);
        $timeline$$12$$.$_scrollHotspotsContainers$.push($scrollHotspots$$);
      } else {
        $scrollHotspots$$ = $timeline$$12$$.$_scrollHotspotsContainers$[$i$$654$$];
      }
      if ($timeline$$12$$.$isVertical$()) {
        var $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ = $isRTL$$48$$ ? Math.abs($i$$654$$ - 1) : $i$$654$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $backX_leftHotspot_topHotspot_topX$$ = $timeline$$12$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ * ($timeline$$12$$.$_seriesSize$ + $axisSize$$6$$) + ($timeline$$12$$.$_seriesSize$ - $hotspotWidth$$) / 2, $backY_topY$$1$$ = $timeline$$12$$.$_startY$ + $hotspotPadding$$, $bottomY$$2_forwardY$$ = $timeline$$12$$.$_startY$ + 
        $timeline$$12$$.$_canvasLength$ - $hotspotHeight$$ - $hotspotPadding$$, $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $bottomY$$2_forwardY$$ + $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$12$$.$_resources$.scrollUp, $arrowBottomResource_arrowForwardResource$$ = 
        $timeline$$12$$.$_resources$.scrollDown
      } else {
        var $backX_leftHotspot_topHotspot_topX$$ = $timeline$$12$$.$_startX$ + $hotspotPadding$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $timeline$$12$$.$_startX$ + $timeline$$12$$.$_canvasLength$ - $hotspotWidth$$ - $hotspotPadding$$, $backY_topY$$1$$ = $timeline$$12$$.$_startY$ + $i$$654$$ * ($timeline$$12$$.$_seriesSize$ + $axisSize$$6$$) + ($timeline$$12$$.$_seriesSize$ - $hotspotHeight$$) / 2, $bottomY$$2_forwardY$$ = $backY_topY$$1$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + 
        $hotspotArrowWidth$$ / 2, $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ = $bottomHotspot_bottomX_forwardX_rightHotspot$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $arrowBackY_arrowTopY$$, $arrowBackResource_arrowTopResource$$ = $timeline$$12$$.$_resources$.scrollLeft, $arrowBottomResource_arrowForwardResource$$ = $timeline$$12$$.$_resources$.scrollRight
      }
      $backX_leftHotspot_topHotspot_topX$$ = new dvt.Rect($context$$409$$, $backX_leftHotspot_topHotspot_topX$$, $backY_topY$$1$$, $hotspotWidth$$, $hotspotHeight$$, "lhs");
      $backX_leftHotspot_topHotspot_topX$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $backX_leftHotspot_topHotspot_topX$$.$setCornerRadius$($hotspotBorderRadius$$);
      $backX_leftHotspot_topHotspot_topX$$.$hotspot$ = "left";
      $backX_leftHotspot_topHotspot_topX$$.$setAlpha$(0);
      $backX_leftHotspot_topHotspot_topX$$.$setMouseEnabled$(!1);
      $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new dvt.Image($context$$409$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "lhs_arr");
      $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "left";
      $backX_leftHotspot_topHotspot_topX$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$ = new dvt.Rect($context$$409$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$, $bottomY$$2_forwardY$$, $hotspotWidth$$, $hotspotHeight$$, "rhs");
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setCornerRadius$($hotspotBorderRadius$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$hotspot$ = "right";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setAlpha$(0);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setMouseEnabled$(!1);
      $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ = new dvt.Image($context$$409$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$, $arrowBottomY_arrowForwardY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "rhs_arr");
      $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$.$hotspot$ = "right";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$);
      $scrollHotspots$$.$addChild$($backX_leftHotspot_topHotspot_topX$$);
      $timeline$$12$$.$_scrollHotspots$.push($backX_leftHotspot_topHotspot_topX$$);
      $scrollHotspots$$.$addChild$($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$12$$.$_scrollHotspots$.push($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$12$$.$isVertical$() ? ($arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ = $isRTL$$48$$ ? Math.abs($i$$654$$ - 1) : $i$$654$$, $backX_leftHotspot_topHotspot_topX$$ = $timeline$$12$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ * ($timeline$$12$$.$_seriesSize$ + $axisSize$$6$$) + $hotspotPadding$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $timeline$$12$$.$_startX$ + ($arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ + 1) * $timeline$$12$$.$_seriesSize$ + 
      $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ * $axisSize$$6$$ - $hotspotWidth$$ - $hotspotPadding$$, $bottomY$$2_forwardY$$ = $backY_topY$$1$$ = $timeline$$12$$.$_startY$ + ($timeline$$12$$.$_canvasLength$ - $hotspotHeight$$) / 2, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ = $bottomHotspot_bottomX_forwardX_rightHotspot$$ + $hotspotArrowWidth$$ / 2, $arrowBottomY_arrowForwardY$$ = 
      $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$12$$.$_resources$.scrollLeft, $arrowBottomResource_arrowForwardResource$$ = $timeline$$12$$.$_resources$.scrollRight) : ($bottomHotspot_bottomX_forwardX_rightHotspot$$ = $backX_leftHotspot_topHotspot_topX$$ = $timeline$$12$$.$_startX$ + ($timeline$$12$$.$_canvasLength$ - $hotspotWidth$$) / 2, $backY_topY$$1$$ = $timeline$$12$$.$_startY$ + $i$$654$$ * ($timeline$$12$$.$_seriesSize$ + 
      $axisSize$$6$$) + $hotspotPadding$$, $bottomY$$2_forwardY$$ = $timeline$$12$$.$_startY$ + ($i$$654$$ + 1) * $timeline$$12$$.$_seriesSize$ + $i$$654$$ * $axisSize$$6$$ - $hotspotHeight$$ - $hotspotPadding$$, $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $bottomY$$2_forwardY$$ + 
      $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$12$$.$_resources$.scrollUp, $arrowBottomResource_arrowForwardResource$$ = $timeline$$12$$.$_resources$.scrollDown);
      $backX_leftHotspot_topHotspot_topX$$ = new dvt.Rect($context$$409$$, $backX_leftHotspot_topHotspot_topX$$, $backY_topY$$1$$, $hotspotWidth$$, $hotspotHeight$$, "ths");
      $backX_leftHotspot_topHotspot_topX$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $backX_leftHotspot_topHotspot_topX$$.$setCornerRadius$($hotspotBorderRadius$$);
      $backX_leftHotspot_topHotspot_topX$$.$hotspot$ = "top";
      $backX_leftHotspot_topHotspot_topX$$.$setAlpha$(0);
      $backX_leftHotspot_topHotspot_topX$$.$setMouseEnabled$(!1);
      $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new dvt.Image($context$$409$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "ths_arr");
      $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "top";
      $backX_leftHotspot_topHotspot_topX$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$ = new dvt.Rect($context$$409$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$, $bottomY$$2_forwardY$$, $hotspotWidth$$, $hotspotHeight$$, "bhs");
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setCornerRadius$($hotspotBorderRadius$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$hotspot$ = "bottom";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setAlpha$(0);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setMouseEnabled$(!1);
      $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$ = new dvt.Image($context$$409$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$, $arrowBottomY_arrowForwardY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "bhs_arr");
      $arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$.$hotspot$ = "bottom";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_key$$76_rightArrow$$);
      $scrollHotspots$$.$addChild$($backX_leftHotspot_topHotspot_topX$$);
      $timeline$$12$$.$_scrollHotspots$.push($backX_leftHotspot_topHotspot_topX$$);
      $scrollHotspots$$.$addChild$($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$12$$.$_scrollHotspots$.push($bottomHotspot_bottomX_forwardX_rightHotspot$$);
    }
  }
};
$DvtTimelineRenderer$$.$_renderZoomControls$ = function $$DvtTimelineRenderer$$$$_renderZoomControls$$($timeline$$13$$) {
  var $context$$410_xOffset$$6$$ = $timeline$$13$$.$getCtx$(), $contentLength_isRTL$$49_transX$$6_yOffset$$9$$ = dvt.$Agent$.$isRightToLeft$($context$$410_xOffset$$6$$), $resources$$4$$ = $timeline$$13$$.$_resources$, $enabledBackgroundColor_upState$$17$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonBackgroundColor$($resources$$4$$), $enabledBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonBorderColor$($resources$$4$$), $hoverBackgroundColor_overState$$14$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonHoverBackgroundColor$($resources$$4$$), 
  $hoverBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonHoverBorderColor$($resources$$4$$), $activeBackgroundColor_downState$$14$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonActiveBackgroundColor$($resources$$4$$), $activeBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonActiveBorderColor$($resources$$4$$), $disabledBackgroundColor_disabledState$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBackgroundColor$($resources$$4$$), $disabledBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBorderColor$($resources$$4$$), 
  $enabledBackgroundColor_upState$$17$$ = dvt.$TransientButton$.$getStateFromURL$($context$$410_xOffset$$6$$, $resources$$4$$.zoomIn, $enabledBackgroundColor_upState$$17$$, $enabledBorderColor$$), $hoverBackgroundColor_overState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($context$$410_xOffset$$6$$, $resources$$4$$.zoomIn_h, $hoverBackgroundColor_overState$$14$$, $hoverBorderColor$$), $activeBackgroundColor_downState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($context$$410_xOffset$$6$$, 
  $resources$$4$$.zoomIn_a, $activeBackgroundColor_downState$$14$$, $activeBorderColor$$), $disabledBackgroundColor_disabledState$$ = dvt.$TransientButton$.$getStateFromURL$($context$$410_xOffset$$6$$, $resources$$4$$.zoomIn_d, $disabledBackgroundColor_disabledState$$, $disabledBorderColor$$);
  null == $timeline$$13$$.$zoomin$ ? ($timeline$$13$$.$zoomin$ = new dvt.$TransientButton$($context$$410_xOffset$$6$$, $enabledBackgroundColor_upState$$17$$, $hoverBackgroundColor_overState$$14$$, $activeBackgroundColor_downState$$14$$, $disabledBackgroundColor_disabledState$$, $timeline$$13$$.$EventManager$, $timeline$$13$$.$EventManager$.$HandleZoomInClick$), $timeline$$13$$.$EventManager$.$associate$($timeline$$13$$.$zoomin$, $timeline$$13$$.$zoomin$)) : ($timeline$$13$$.$zoomin$.$setUpState$($enabledBackgroundColor_upState$$17$$), 
  $timeline$$13$$.$zoomin$.$setOverState$($hoverBackgroundColor_overState$$14$$), $timeline$$13$$.$zoomin$.$setDownState$($activeBackgroundColor_downState$$14$$), $timeline$$13$$.$zoomin$.$setDisabledState$($disabledBackgroundColor_disabledState$$));
  $enabledBackgroundColor_upState$$17$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonBackgroundColor$($resources$$4$$);
  $enabledBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonBorderColor$($resources$$4$$);
  $hoverBackgroundColor_overState$$14$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBackgroundColor$($resources$$4$$);
  $hoverBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBorderColor$($resources$$4$$);
  $activeBackgroundColor_downState$$14$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBackgroundColor$($resources$$4$$);
  $activeBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBorderColor$($resources$$4$$);
  $disabledBackgroundColor_disabledState$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBackgroundColor$($resources$$4$$);
  $disabledBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBorderColor$($resources$$4$$);
  $enabledBackgroundColor_upState$$17$$ = dvt.$TransientButton$.$getStateFromURL$($context$$410_xOffset$$6$$, $resources$$4$$.zoomOut, $enabledBackgroundColor_upState$$17$$, $enabledBorderColor$$);
  $hoverBackgroundColor_overState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($context$$410_xOffset$$6$$, $resources$$4$$.zoomOut_h, $hoverBackgroundColor_overState$$14$$, $hoverBorderColor$$);
  $activeBackgroundColor_downState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($context$$410_xOffset$$6$$, $resources$$4$$.zoomOut_a, $activeBackgroundColor_downState$$14$$, $activeBorderColor$$);
  $disabledBackgroundColor_disabledState$$ = dvt.$TransientButton$.$getStateFromURL$($context$$410_xOffset$$6$$, $resources$$4$$.zoomOut_d, $disabledBackgroundColor_disabledState$$, $disabledBorderColor$$);
  null == $timeline$$13$$.$zoomout$ ? ($timeline$$13$$.$zoomout$ = new dvt.$TransientButton$($context$$410_xOffset$$6$$, $enabledBackgroundColor_upState$$17$$, $hoverBackgroundColor_overState$$14$$, $activeBackgroundColor_downState$$14$$, $disabledBackgroundColor_disabledState$$, $timeline$$13$$.$EventManager$, $timeline$$13$$.$EventManager$.$HandleZoomOutClick$), $timeline$$13$$.$EventManager$.$associate$($timeline$$13$$.$zoomout$, $timeline$$13$$.$zoomout$)) : ($timeline$$13$$.$zoomout$.$setUpState$($enabledBackgroundColor_upState$$17$$), 
  $timeline$$13$$.$zoomout$.$setOverState$($hoverBackgroundColor_overState$$14$$), $timeline$$13$$.$zoomout$.$setDownState$($activeBackgroundColor_downState$$14$$), $timeline$$13$$.$zoomout$.$setDisabledState$($disabledBackgroundColor_disabledState$$));
  $timeline$$13$$.$zoomin$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_IN", null));
  $timeline$$13$$.$zoomout$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_OUT", null));
  $timeline$$13$$.$zoomin$.$hide$();
  $timeline$$13$$.$zoomout$.$hide$();
  $DvtTimeUtils$$.$supportsTouch$() && (dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$13$$.$zoomin$.$getElem$(), "role", "button"), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$13$$.$zoomin$.$getElem$(), "aria-label", dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_IN", null)), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$13$$.$zoomout$.$getElem$(), "role", "button"), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$13$$.$zoomout$.$getElem$(), "aria-label", dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "ZOOM_OUT", null)));
  $context$$410_xOffset$$6$$ = $timeline$$13$$.$_startX$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_PADDING$;
  $contentLength_isRTL$$49_transX$$6_yOffset$$9$$ = $contentLength_isRTL$$49_transX$$6_yOffset$$9$$ ? $timeline$$13$$.$_backgroundWidth$ - $context$$410_xOffset$$6$$ - $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_DIAMETER$ : $context$$410_xOffset$$6$$;
  $timeline$$13$$.$zoomin$.$setTranslateX$($contentLength_isRTL$$49_transX$$6_yOffset$$9$$);
  $timeline$$13$$.$zoomout$.$setTranslateX$($contentLength_isRTL$$49_transX$$6_yOffset$$9$$);
  $contentLength_isRTL$$49_transX$$6_yOffset$$9$$ = $timeline$$13$$.$_startY$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_PADDING$;
  $timeline$$13$$.$zoomin$.$setTranslateY$($contentLength_isRTL$$49_transX$$6_yOffset$$9$$);
  $timeline$$13$$.$zoomout$.$setTranslateY$($contentLength_isRTL$$49_transX$$6_yOffset$$9$$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_DIAMETER$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_SPACING$);
  $timeline$$13$$.$zoomin$.getParent() != $timeline$$13$$.$_canvas$ && $timeline$$13$$.$_canvas$.$addChild$($timeline$$13$$.$zoomin$);
  $timeline$$13$$.$zoomout$.getParent() != $timeline$$13$$.$_canvas$ && $timeline$$13$$.$_canvas$.$addChild$($timeline$$13$$.$zoomout$);
  $contentLength_isRTL$$49_transX$$6_yOffset$$9$$ = $timeline$$13$$.$_contentLength$;
  $contentLength_isRTL$$49_transX$$6_yOffset$$9$$ >= $timeline$$13$$.$_maxContentLength$ && $JSCompiler_StaticMethods_disableZoomButton$$($timeline$$13$$, !0);
  $timeline$$13$$.$_canvasLength$ >= $contentLength_isRTL$$49_transX$$6_yOffset$$9$$ && $JSCompiler_StaticMethods_disableZoomButton$$($timeline$$13$$, !1);
};
$DvtTimelineRenderer$$.$_renderEmptyText$ = function $$DvtTimelineRenderer$$$$_renderEmptyText$$($timeline$$14$$) {
  var $emptyTextStr$$4$$ = $timeline$$14$$.$Options$.series ? dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "INVALID_DATA", null) : dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA", null);
  $timeline$$14$$.$_canvas$ && $timeline$$14$$.$_canvas$.$removeChildren$();
  $JSCompiler_StaticMethods_clearOverview$$($timeline$$14$$);
  dvt.$TextUtils$.$renderEmptyText$($timeline$$14$$.$_canvas$, $emptyTextStr$$4$$, new dvt.$Rectangle$(0, 0, $timeline$$14$$.$_backgroundWidth$, $timeline$$14$$.$_backgroundHeight$), $timeline$$14$$.$EventManager$, $DvtTimelineStyleUtils$$.$getEmptyTextStyle$($timeline$$14$$.$Options$));
};
$DvtTimelineRenderer$$.$_addLabel$ = function $$DvtTimelineRenderer$$$$_addLabel$$($backgroundRect$$2_context$$411$$, $container$$180$$, $pos$$69$$, $label$$105_text$$79$$, $maxLength$$2$$, $y$$186$$, $labelStyle$$22$$, $id$$204$$, $labelList$$, $isRTL$$50$$) {
  var $labelPadding$$ = $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$();
  $label$$105_text$$79$$ = new dvt.$OutputText$($backgroundRect$$2_context$$411$$, $label$$105_text$$79$$, $pos$$69$$, 0, $id$$204$$);
  null != $labelStyle$$22$$ && $label$$105_text$$79$$.$setCSSStyle$($labelStyle$$22$$);
  $container$$180$$.$addChild$($label$$105_text$$79$$);
  var $dim$$77$$ = $label$$105_text$$79$$.$getDimensions$();
  $container$$180$$.removeChild($label$$105_text$$79$$);
  $y$$186$$ -= $dim$$77$$.$h$;
  $label$$105_text$$79$$.$setY$($y$$186$$);
  $isRTL$$50$$ && $label$$105_text$$79$$.$setX$($pos$$69$$ - $dim$$77$$.$w$);
  var $width$$134$$ = Math.min($dim$$77$$.$w$ + 2 * $labelPadding$$, $maxLength$$2$$);
  $backgroundRect$$2_context$$411$$ = new dvt.Rect($backgroundRect$$2_context$$411$$, ($isRTL$$50$$ ? $pos$$69$$ - $width$$134$$ + 2 * $labelPadding$$ : $pos$$69$$) - $labelPadding$$, $y$$186$$ - $labelPadding$$, $width$$134$$, $dim$$77$$.$h$ + 2 * $labelPadding$$, "ob_" + $id$$204$$);
  $backgroundRect$$2_context$$411$$.$setCSSStyle$($labelStyle$$22$$);
  $backgroundRect$$2_context$$411$$.$setCornerRadius$(3);
  $container$$180$$.$addChild$($backgroundRect$$2_context$$411$$);
  $labelList$$ && $labelList$$.push($backgroundRect$$2_context$$411$$);
  dvt.$TextUtils$.$fitText$($label$$105_text$$79$$, $maxLength$$2$$, Infinity, $container$$180$$);
  $labelList$$ && $labelList$$.push($label$$105_text$$79$$);
  return $label$$105_text$$79$$;
};
$DvtTimelineRenderer$$.$_addAxisLabel$ = function $$DvtTimelineRenderer$$$$_addAxisLabel$$($container$$181$$, $label$$106$$, $x$$214$$, $y$$187$$, $maxLength$$3$$) {
  $label$$106$$.$setX$($x$$214$$);
  $label$$106$$.$setY$($y$$187$$);
  $label$$106$$.$isTruncated$() && $label$$106$$.$setTextString$($label$$106$$.$getUntruncatedTextString$());
  dvt.$TextUtils$.$fitText$($label$$106$$, $maxLength$$3$$, Infinity, $container$$181$$);
  $label$$106$$.$alignCenter$();
  dvt.$TextUtils$.$centerTextVertically$($label$$106$$, $y$$187$$);
};
$DvtTimelineRenderer$$.$_addTick$ = function $$DvtTimelineRenderer$$$$_addTick$$($context$$412_line$$17$$, $container$$182$$, $x1$$36$$, $x2$$34$$, $y1$$29$$, $y2$$28$$, $stroke$$99$$, $id$$205$$) {
  $context$$412_line$$17$$ = new dvt.$Line$($context$$412_line$$17$$, $x1$$36$$, $y1$$29$$, $x2$$34$$, $y2$$28$$, $id$$205$$);
  $context$$412_line$$17$$.$setStroke$($stroke$$99$$);
  $context$$412_line$$17$$.$setPixelHinting$();
  $container$$182$$.$addChild$($context$$412_line$$17$$);
  return $context$$412_line$$17$$;
};
var $DvtTimelineStyleUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineStyleUtils$$, dvt.$Obj$);
$DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$ = "border:1px #d9dfe3;background-color:#f9f9f9;";
$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_STYLE$ = "background-color:#f9f9f9;border:1px #d9dfe3;";
$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2;";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$ = "background-color:#f9f9f9;";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$ = 20;
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$ = 1;
$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$ = 60;
$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$ = 100;
$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HANDLE_TEXTURE_COLOR$ = "#B3C6DB";
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$ = "#000000";
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$ = .6;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$ = 28;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$ = 28;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$ = 3;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$ = 14;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$ = 14;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$ = .3;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$ = 1;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$ = "rgba(249,249,249,0)";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$ = "#e4f0fa";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$ = "rgba(249,249,249,0)";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$ = 20;
$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$ = 15;
$DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$ = 10;
$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$ = 32;
$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$ = 32;
$DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$ = "#ffffff";
$DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$ = "#d6d7d8";
$DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_DIAMETER$ = 31;
$DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_PADDING$ = 10.5;
$DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_SPACING$ = 9;
$DvtTimelineStyleUtils$$.$getItemDescriptionStyle$ = function $$DvtTimelineStyleUtils$$$$getItemDescriptionStyle$$($cssStyle$$33_item$$57_style$$107$$) {
  var $descriptionStyle$$ = $cssStyle$$33_item$$57_style$$107$$.$_series$.$getOptions$().styleDefaults.item.descriptionStyle;
  if ($cssStyle$$33_item$$57_style$$107$$ = $cssStyle$$33_item$$57_style$$107$$.$getStyle$()) {
    $cssStyle$$33_item$$57_style$$107$$ = new dvt.$CSSStyle$($cssStyle$$33_item$$57_style$$107$$), $descriptionStyle$$.$parseInlineStyle$($cssStyle$$33_item$$57_style$$107$$);
  }
  return $descriptionStyle$$;
};
$DvtTimelineStyleUtils$$.$getItemTitleStyle$ = function $$DvtTimelineStyleUtils$$$$getItemTitleStyle$$($cssStyle$$34_item$$58_style$$108$$) {
  var $titleStyle$$3$$ = $cssStyle$$34_item$$58_style$$108$$.$_series$.$getOptions$().styleDefaults.item.titleStyle;
  if ($cssStyle$$34_item$$58_style$$108$$ = $cssStyle$$34_item$$58_style$$108$$.$getStyle$()) {
    $cssStyle$$34_item$$58_style$$108$$ = new dvt.$CSSStyle$($cssStyle$$34_item$$58_style$$108$$), $titleStyle$$3$$.$parseInlineStyle$($cssStyle$$34_item$$58_style$$108$$);
  }
  return $titleStyle$$3$$;
};
$DvtTimelineStyleUtils$$.$getReferenceObjectColor$ = function $$DvtTimelineStyleUtils$$$$getReferenceObjectColor$$($options$$277$$) {
  return $options$$277$$.styleDefaults.referenceObject.color;
};
$DvtTimelineStyleUtils$$.$getSeriesLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelStyle$$($options$$278$$) {
  return $options$$278$$.styleDefaults.series.labelStyle;
};
$DvtTimelineStyleUtils$$.$getSeriesLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$;
};
$DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelSpacing$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$;
};
$DvtTimelineStyleUtils$$.$getEmptyTextStyle$ = function $$DvtTimelineStyleUtils$$$$getEmptyTextStyle$$($options$$279$$) {
  return $options$$279$$.styleDefaults.series.emptyTextStyle;
};
$DvtTimelineStyleUtils$$.$getBubbleOffset$ = function $$DvtTimelineStyleUtils$$$$getBubbleOffset$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$;
};
$DvtTimelineStyleUtils$$.$getBubbleSpacing$ = function $$DvtTimelineStyleUtils$$$$getBubbleSpacing$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$;
};
$DvtTimelineStyleUtils$$.$getItemFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemFillColor$$($item$$59$$) {
  var $fillColor$$7_style$$109$$ = $item$$59$$.$getStyle$();
  return $fillColor$$7_style$$109$$ && ($fillColor$$7_style$$109$$ = (new dvt.$CSSStyle$($fillColor$$7_style$$109$$)).$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$)) ? $fillColor$$7_style$$109$$ : $item$$59$$.$_series$.$getOptions$().styleDefaults.item.backgroundColor;
};
$DvtTimelineStyleUtils$$.$getItemStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeColor$$($item$$60$$) {
  var $strokeColor$$6_style$$110$$ = $item$$60$$.$getStyle$();
  return $strokeColor$$6_style$$110$$ && ($strokeColor$$6_style$$110$$ = (new dvt.$CSSStyle$($strokeColor$$6_style$$110$$)).$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$)) ? $strokeColor$$6_style$$110$$ : $item$$60$$.$_series$.$getOptions$().styleDefaults.item.borderColor;
};
$DvtTimelineStyleUtils$$.$getItemStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getItemHoverFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverFillColor$$($item$$61$$) {
  var $hoverDefault$$ = $item$$61$$.$_series$.$getOptions$().styleDefaults.item.hoverBackgroundColor;
  return $hoverDefault$$ ? $hoverDefault$$ : $DvtTimelineStyleUtils$$.$getItemFillColor$($item$$61$$);
};
$DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeColor$$($item$$62$$) {
  var $hoverDefault$$1$$ = $item$$62$$.$_series$.$getOptions$().styleDefaults.item.hoverBorderColor;
  return $hoverDefault$$1$$ ? $hoverDefault$$1$$ : $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$62$$);
};
$DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getItemSelectedFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedFillColor$$($item$$63$$) {
  var $selectedDefault$$ = $item$$63$$.$_series$.$getOptions$().styleDefaults.item.selectedBackgroundColor;
  return $selectedDefault$$ ? $selectedDefault$$ : $DvtTimelineStyleUtils$$.$getItemFillColor$($item$$63$$);
};
$DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeColor$$($item$$64$$) {
  var $selectedDefault$$1$$ = $item$$64$$.$_series$.$getOptions$().styleDefaults.item.selectedBorderColor;
  return $selectedDefault$$1$$ ? $selectedDefault$$1$$ : $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$64$$);
};
$DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getSeriesStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$;
};
$DvtTimelineStyleUtils$$.$getColorsArray$ = function $$DvtTimelineStyleUtils$$$$getColorsArray$$($options$$286$$) {
  return $options$$286$$.styleDefaults.series.colors;
};
$DvtTimelineStyleUtils$$.$getDurationFeelerOffset$ = function $$DvtTimelineStyleUtils$$$$getDurationFeelerOffset$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$;
};
$DvtTimelineStyleUtils$$.$getThumbnailWidth$ = function $$DvtTimelineStyleUtils$$$$getThumbnailWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getThumbnailHeight$ = function $$DvtTimelineStyleUtils$$$$getThumbnailHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$;
};
$DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisSeparatorStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$;
};
$DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerActiveStrokeColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$;
};
$DvtTimelineStyleUtils$$.$getItemInnerFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerFillColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$;
};
$DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$;
};
$DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getHotspotAnimationDuration$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$;
};
$DvtTimelineStyleUtils$$.$getHotspotOpacity$ = function $$DvtTimelineStyleUtils$$$$getHotspotOpacity$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$;
};
$DvtTimelineStyleUtils$$.$getTimelineStyle$ = function $$DvtTimelineStyleUtils$$$$getTimelineStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$;
};
$DvtTimelineStyleUtils$$.$getOverviewWidth$ = function $$DvtTimelineStyleUtils$$$$getOverviewWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getOverviewHeight$ = function $$DvtTimelineStyleUtils$$$$getOverviewHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$;
};
$DvtTimelineStyleUtils$$.$getAxisStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_STYLE$;
};
$DvtTimelineStyleUtils$$.$getAxisLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisLabelStyle$$($options$$287$$) {
  return $options$$287$$.styleDefaults.minorAxis.labelStyle;
};
$DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBackgroundColor$$($options$$288$$) {
  return $options$$288$$.styleDefaults.overview.window.backgroundColor;
};
$DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBorderColor$$($options$$289$$) {
  return $options$$289$$.styleDefaults.overview.window.borderColor;
};
$DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewBackgroundColor$$($options$$290$$) {
  return $options$$290$$.styleDefaults.overview.backgroundColor;
};
$DvtTimelineStyleUtils$$.$getOverviewLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getOverviewLabelStyle$$($options$$291$$) {
  return $options$$291$$.styleDefaults.overview.labelStyle;
};
$DvtTimelineStyleUtils$$.$getOverviewHandleTextureColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewHandleTextureColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HANDLE_TEXTURE_COLOR$;
};
$DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelStyle$$($options$$292$$) {
  return $options$$292$$.styleDefaults.majorAxis.labelStyle;
};
$DvtTimelineStyleUtils$$.$getAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisSeparatorStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$;
};
$DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$;
};
$DvtTimelineStyleUtils$$.$getHotspotPadding$ = function $$DvtTimelineStyleUtils$$$$getHotspotPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$;
};
$DvtTimelineStyleUtils$$.$getHotspotWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getHotspotHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$;
};
$DvtTimelineStyleUtils$$.$getHotspotArrowWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getHotspotArrowHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$;
};
$DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getHotspotBackgroundColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getHotspotBorderRadius$ = function $$DvtTimelineStyleUtils$$$$getHotspotBorderRadius$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$;
};
$DvtTimelineStyleUtils$$.$getAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getAnimationDuration$$($options$$293$$) {
  return dvt.$StyleUtils$.$getTimeMilliseconds$($options$$293$$.styleDefaults.animationDuration) / 1E3;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonBackgroundColor$$($options$$294$$) {
  return $options$$294$$.zoomIn_bgc ? $options$$294$$.zoomIn_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonActiveBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonActiveBackgroundColor$$($options$$295$$) {
  return $options$$295$$.zoomIn_a_bgc ? $options$$295$$.zoomIn_a_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonHoverBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonHoverBackgroundColor$$($options$$296$$) {
  return $options$$296$$.zoomIn_h_bgc ? $options$$296$$.zoomIn_h_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonDisabledBackgroundColor$$($options$$297$$) {
  return $options$$297$$.zoomIn_d_bgc ? $options$$297$$.zoomIn_d_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonBorderColor$$($options$$298$$) {
  return $options$$298$$.zoomIn_bc ? $options$$298$$.zoomIn_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonActiveBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonActiveBorderColor$$($options$$299$$) {
  return $options$$299$$.zoomIn_a_bc ? $options$$299$$.zoomIn_a_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonHoverBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonHoverBorderColor$$($options$$300$$) {
  return $options$$300$$.zoomIn_h_bc ? $options$$300$$.zoomIn_h_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonDisabledBorderColor$$($options$$301$$) {
  return $options$$301$$.zoomIn_d_bc ? $options$$301$$.zoomIn_d_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonBackgroundColor$$($options$$302$$) {
  return $options$$302$$.zoomOut_bgc ? $options$$302$$.zoomOut_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonActiveBackgroundColor$$($options$$303$$) {
  return $options$$303$$.zoomOut_a_bgc ? $options$$303$$.zoomOut_a_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonHoverBackgroundColor$$($options$$304$$) {
  return $options$$304$$.zoomOut_h_bgc ? $options$$304$$.zoomOut_h_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonDisabledBackgroundColor$$($options$$305$$) {
  return $options$$305$$.zoomOut_d_bgc ? $options$$305$$.zoomOut_d_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonBorderColor$$($options$$306$$) {
  return $options$$306$$.zoomOut_bc ? $options$$306$$.zoomOut_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonActiveBorderColor$$($options$$307$$) {
  return $options$$307$$.zoomOut_a_bc ? $options$$307$$.zoomOut_a_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonHoverBorderColor$$($options$$308$$) {
  return $options$$308$$.zoomOut_h_bc ? $options$$308$$.zoomOut_h_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonDisabledBorderColor$$($options$$309$$) {
  return $options$$309$$.zoomOut_d_bc ? $options$$309$$.zoomOut_d_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
function $DvtTimelineSeries$$($context$$413$$, $callback$$164$$, $callbackObj$$95$$) {
  this.Init($context$$413$$, $callback$$164$$, $callbackObj$$95$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeries$$, dvt.$BaseComponent$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeries$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$414$$, $callback$$165$$, $callbackObj$$96$$) {
  $DvtTimelineSeries$$.$superclass$.Init.call(this, $context$$414$$);
  this.$_callback$ = $callback$$165$$;
  this.$_callbackObj$ = $callbackObj$$96$$;
  this.$_blocks$ = [];
  this.$_renderedReferenceObjects$ = [];
  this.$_seriesTicksArray$ = [];
};
$JSCompiler_prototypeAlias$$.$_onRmAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onRmAnimationEnd$$() {
  for (var $i$$655$$ = 0;$i$$655$$ < this.$_rmAnimationElems$.length;$i$$655$$++) {
    var $elem$$8$$ = this.$_rmAnimationElems$[$i$$655$$], $parent$$77$$ = $elem$$8$$.getParent();
    $parent$$77$$ && $parent$$77$$.removeChild($elem$$8$$);
  }
  this.$_mvAnimator$ && this.$_hasMvAnimations$ ? (this.$_mvAnimator$.play(), dvt.$Playable$.$appendOnEnd$(this.$_mvAnimator$, this.$_onMvAnimationEnd$, this)) : this.$_onMvAnimationEnd$();
};
$JSCompiler_prototypeAlias$$.$_onMvAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMvAnimationEnd$$() {
  if (this.$_frAnimationElems$ && 0 != this.$_frAnimationElems$.length) {
    var $fadeInAnimator$$1$$ = new dvt.$ParallelPlayable$(this.$getCtx$(), new dvt.$AnimFadeIn$(this.$getCtx$(), this.$_frAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$(this.$Options$), 0));
    $fadeInAnimator$$1$$.play();
    dvt.$Playable$.$appendOnEnd$($fadeInAnimator$$1$$, this.$_onAnimationEnd$, this);
  } else {
    this.$_onAnimationEnd$();
  }
};
$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_isAnimating$ = !1;
  dvt.$Agent$.$isEnvironmentBrowser$() && $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_callbackObj$);
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$310_orientation$$4_props$$7$$, $desc$$28_width$$135$$, $height$$115$$) {
  if ($options$$310_orientation$$4_props$$7$$) {
    if (this.$SetOptions$($options$$310_orientation$$4_props$$7$$), this.$_isInitialRender$ = this.$Width$ ? !1 : !0, this.$Width$ = $desc$$28_width$$135$$, this.$Height$ = $height$$115$$, ($options$$310_orientation$$4_props$$7$$ = this.$Options$.orientation) && $options$$310_orientation$$4_props$$7$$ == dvt.$Timeline$.$ORIENTATION_VERTICAL$ ? (this.$_allowUpdates$ = 0 == this.$_isVertical$ ? !1 : !0, this.$_isVertical$ = !0) : (this.$_allowUpdates$ = this.$_isVertical$ ? !1 : !0, this.$_isVertical$ = 
    !1), this.$Options$ && ($options$$310_orientation$$4_props$$7$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($options$$310_orientation$$4_props$$7$$)), this.$_fetchStartPos$ = 0, this.$_isVertical$ ? (this.$_fetchEndPos$ = $height$$115$$, this.$_maxOverflowValue$ = $desc$$28_width$$135$$, this.$_length$ = $height$$115$$, this.$_size$ = $desc$$28_width$$135$$) : (this.$_fetchEndPos$ = $desc$$28_width$$135$$, this.$_maxOverflowValue$ = $height$$115$$, this.$_length$ = $desc$$28_width$$135$$, 
    this.$_size$ = $height$$115$$), this.$_isInverted$ = this.$Options$.inverted, this.$_maxDurationSize$ = this.$_colorCount$ = 0, $DvtTimelineSeriesRenderer$$.$renderSeries$(this, $desc$$28_width$$135$$, $height$$115$$), $DvtTimeUtils$$.$supportsTouch$() && 0 < this.$_items$.length && this.$_setAriaProperty$("flowto", "_bt_" + this.$_items$[0].getId()), $desc$$28_width$$135$$ = this.$GetComponentDescription$()) {
      dvt.$ToolkitUtils$.$setAttrNullNS$(this.$getElem$(), "role", "group"), dvt.$ToolkitUtils$.$setAttrNullNS$(this.$getElem$(), "aria-label", dvt.$StringUtils$.$processAriaLabel$($desc$$28_width$$135$$));
    }
  } else {
    this.$_handleResize$($desc$$28_width$$135$$, $height$$115$$);
  }
};
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  var $seriesDescArray$$ = [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "TIMELINE_SERIES")];
  this.$_label$ ? $seriesDescArray$$.push(this.$_label$) : $seriesDescArray$$.push(this.$Options$.index + 1);
  return dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", $seriesDescArray$$);
};
$JSCompiler_prototypeAlias$$.$_handleResize$ = function $$JSCompiler_prototypeAlias$$$$_handleResize$$($width$$136$$, $height$$116$$) {
  this.$_canvas$.$setTranslateY$(0);
  this.$_canvas$.$setTranslateX$(0);
  this.$Width$ = $width$$136$$;
  this.$Height$ = $height$$116$$;
  this.$_fetchStartPos$ = 0;
  this.$_isVertical$ ? (this.$_fetchEndPos$ = $height$$116$$, this.$_maxOverflowValue$ = $width$$136$$, this.$_length$ = $height$$116$$, this.$_size$ = $width$$136$$) : (this.$_fetchEndPos$ = $width$$136$$, this.$_maxOverflowValue$ = $height$$116$$, this.$_length$ = $width$$136$$, this.$_size$ = $height$$116$$);
  this.$_background$.$setWidth$($width$$136$$);
  this.$_background$.$setHeight$($height$$116$$);
  $DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$(this);
};
$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getSeriesStyle$());
  this.$_seriesStyleDefaults$ = this.$Options$.seriesStyleDefaults;
  this.$_axisStyleDefaults$ = this.$Options$.axisStyleDefaults;
  this.$_colors$ = $DvtTimelineStyleUtils$$.$getColorsArray$(this.$Options$);
  this.$_referenceObjects$ = this.$Options$.referenceObjects;
  if (this.$_seriesStyleDefaults$) {
    var $style$$111$$ = this.$_seriesStyleDefaults$.backgroundColor;
    $style$$111$$ && this.$_style$.$parseInlineStyle$("background-color:" + $style$$111$$ + ";");
  }
  this.$_style$.$parseInlineStyle$(this.$_inlineStyle$);
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$311$$) {
  this.$Options$ = $options$$311$$;
};
$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($options$$312$$) {
  this.$_parser$ = new $DvtTimelineSeriesParser$$;
  return this.$_parser$.parse($options$$312$$, this.$_items$);
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$8$$) {
  this.$_items$ && (this.$_oldItems$ = this.$_items$);
  this.$_isEmpty$ = (this.$_items$ = $props$$8$$.items) && 0 < this.$_items$.length ? !1 : !0;
  this.$_isIRAnimationEnabled$ = $props$$8$$.$isIRAnimationEnabled$;
  this.$_isDCAnimationEnabled$ = $props$$8$$.$isDCAnimationEnabled$;
  this.$_label$ = $props$$8$$.label;
  this.$_timeAxis$ = $props$$8$$.$timeAxis$;
  this.$_emptyText$ = $props$$8$$.$emptyText$;
  null == this.$_emptyText$ && (this.$_emptyText$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA", null));
  this.$_isTopToBottom$ = $props$$8$$.$isTopToBottom$;
  this.$_isRandomItemLayout$ = $props$$8$$.$isRandomItemLayout$;
  this.$_customTimeScales$ = $props$$8$$.$customTimeScales$;
  this.$_customFormatScales$ = $props$$8$$.$customFormatScales$;
  this.$_start$ = $props$$8$$.start;
  this.$_end$ = $props$$8$$.end;
  this.$_inlineStyle$ = $props$$8$$.$inlineStyle$;
  this.$_scale$ = $props$$8$$.scale;
  this.$_converter$ = $props$$8$$.$converter$;
  this.$applyStyleValues$();
};
function $JSCompiler_StaticMethods_calculateSpacing$$($JSCompiler_StaticMethods_calculateSpacing$self$$, $item$$65_itemHeight$$3$$, $index$$197_yChanged$$) {
  if (null != $JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$ && 0 != $JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$.length) {
    var $maxOverflowValue_top$$10$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$, $bottom$$10_y$$188$$ = $item$$65_itemHeight$$3$$.$_spacing$;
    if ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_isRandomItemLayout$) {
      return null == $bottom$$10_y$$188$$ && ($item$$65_itemHeight$$3$$ = $item$$65_itemHeight$$3$$.getHeight(), $bottom$$10_y$$188$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$, $maxOverflowValue_top$$10$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ - $item$$65_itemHeight$$3$$ - $bottom$$10_y$$188$$, 0 > $maxOverflowValue_top$$10$$ && ($maxOverflowValue_top$$10$$ = 0), $bottom$$10_y$$188$$ = Math.round(Math.random() * $maxOverflowValue_top$$10$$) + 
      $bottom$$10_y$$188$$, $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ < $bottom$$10_y$$188$$ + $item$$65_itemHeight$$3$$ && ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ = $bottom$$10_y$$188$$ + $item$$65_itemHeight$$3$$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$())), $bottom$$10_y$$188$$;
    }
    null == $bottom$$10_y$$188$$ && ($bottom$$10_y$$188$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$);
    if ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_isVertical$) {
      for ($i$$656$$ = 0;$i$$656$$ < $index$$197_yChanged$$;$i$$656$$++) {
        $currItem_currY$$21$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$[$i$$656$$], $currWidth$$ = $currItem_currY$$21$$.getWidth() + 10, $maxOverflowValue_top$$10$$ < $bottom$$10_y$$188$$ + $currWidth$$ && ($maxOverflowValue_top$$10$$ = $bottom$$10_y$$188$$ + $currWidth$$);
      }
    } else {
      for (var $j$$100_x$$215$$ = $item$$65_itemHeight$$3$$.$_loc$, $width$$137$$ = $item$$65_itemHeight$$3$$.getWidth() + 10, $hOffset$$2$$ = $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $overlappingItems$$ = [], $i$$656$$ = 0;$i$$656$$ < $index$$197_yChanged$$;$i$$656$$++) {
        var $currItem_currY$$21$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$[$i$$656$$], $currWidth$$ = $currItem_currY$$21$$.getWidth() + 10, $currX$$17$$ = $currItem_currY$$21$$.$_loc$;
        ($j$$100_x$$215$$ >= $currX$$17$$ && $j$$100_x$$215$$ <= $currX$$17$$ + $currWidth$$ || $currX$$17$$ >= $j$$100_x$$215$$ && $currX$$17$$ <= $j$$100_x$$215$$ + $width$$137$$) && $overlappingItems$$.push($currItem_currY$$21$$);
      }
      for ($i$$656$$ = 0;$i$$656$$ < $overlappingItems$$.length;$i$$656$$++) {
        $index$$197_yChanged$$ = !1;
        for ($j$$100_x$$215$$ = 0;$j$$100_x$$215$$ < $overlappingItems$$.length;$j$$100_x$$215$$++) {
          var $currItem_currY$$21$$ = $overlappingItems$$[$j$$100_x$$215$$], $currHeight$$ = $currItem_currY$$21$$.getHeight(), $currItem_currY$$21$$ = $currItem_currY$$21$$.$_spacing$;
          if ($bottom$$10_y$$188$$ >= $currItem_currY$$21$$ && $bottom$$10_y$$188$$ <= $currItem_currY$$21$$ + $currHeight$$) {
            $bottom$$10_y$$188$$ = $currItem_currY$$21$$ + $currHeight$$ + $hOffset$$2$$;
            $item$$65_itemHeight$$3$$.$_spacing$ = $bottom$$10_y$$188$$;
            $index$$197_yChanged$$ = !0;
            break;
          }
        }
        if (!$index$$197_yChanged$$) {
          break;
        }
      }
      $maxOverflowValue_top$$10$$ < $bottom$$10_y$$188$$ + $currHeight$$ && ($maxOverflowValue_top$$10$$ = $bottom$$10_y$$188$$ + $currHeight$$);
    }
    $maxOverflowValue_top$$10$$ > $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ && ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ = $maxOverflowValue_top$$10$$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$());
    return $bottom$$10_y$$188$$;
  }
}
$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$() {
  for (var $i$$658$$ = 0;$i$$658$$ < this.$_items$.length;$i$$658$$++) {
    var $node$$299$$ = this.$_items$[$i$$658$$], $JSCompiler_temp_const$$255_startTime$$16$$ = $node$$299$$.$_startTime$, $JSCompiler_inline_result$$256_endTime$$14_item$$inline_4010$$ = $node$$299$$.$_endTime$;
    if ($JSCompiler_inline_result$$256_endTime$$14_item$$inline_4010$$ && $JSCompiler_inline_result$$256_endTime$$14_item$$inline_4010$$ != $JSCompiler_temp_const$$255_startTime$$16$$) {
      $JSCompiler_temp_const$$255_startTime$$16$$ = $node$$299$$;
      a: {
        var $JSCompiler_inline_result$$256_endTime$$14_item$$inline_4010$$ = $node$$299$$, $index$$inline_4011_yChanged$$inline_4020$$ = $i$$658$$;
        if (null != this.$_items$ && 0 != this.$_items$.length) {
          var $j$$inline_4021_startTime$$inline_4012$$ = $JSCompiler_inline_result$$256_endTime$$14_item$$inline_4010$$.$_startTime$, $endTime$$inline_4013_y$$inline_4014$$ = $JSCompiler_inline_result$$256_endTime$$14_item$$inline_4010$$.$_endTime$;
          if ($endTime$$inline_4013_y$$inline_4014$$ && $endTime$$inline_4013_y$$inline_4014$$ != $j$$inline_4021_startTime$$inline_4012$$) {
            $endTime$$inline_4013_y$$inline_4014$$ = $JSCompiler_inline_result$$256_endTime$$14_item$$inline_4010$$.$_durationLevel$;
            null == $endTime$$inline_4013_y$$inline_4014$$ && ($endTime$$inline_4013_y$$inline_4014$$ = 1);
            for (var $overlappingItems$$inline_4015$$ = [], $i$$inline_4016$$ = 0;$i$$inline_4016$$ < $index$$inline_4011_yChanged$$inline_4020$$;$i$$inline_4016$$++) {
              var $currItem$$inline_4017_currY$$inline_4022$$ = this.$_items$[$i$$inline_4016$$], $currStartTime$$inline_4018$$ = $currItem$$inline_4017_currY$$inline_4022$$.$_startTime$, $currEndTime$$inline_4019$$ = $currItem$$inline_4017_currY$$inline_4022$$.$_endTime$;
              $currEndTime$$inline_4019$$ && $currEndTime$$inline_4019$$ != $currStartTime$$inline_4018$$ && $j$$inline_4021_startTime$$inline_4012$$ >= $currStartTime$$inline_4018$$ && $j$$inline_4021_startTime$$inline_4012$$ <= $currEndTime$$inline_4019$$ && $overlappingItems$$inline_4015$$.push($currItem$$inline_4017_currY$$inline_4022$$);
            }
            for ($i$$inline_4016$$ = 0;$i$$inline_4016$$ < $overlappingItems$$inline_4015$$.length;$i$$inline_4016$$++) {
              $index$$inline_4011_yChanged$$inline_4020$$ = !1;
              for ($j$$inline_4021_startTime$$inline_4012$$ = 0;$j$$inline_4021_startTime$$inline_4012$$ < $overlappingItems$$inline_4015$$.length;$j$$inline_4021_startTime$$inline_4012$$++) {
                if ($currItem$$inline_4017_currY$$inline_4022$$ = $overlappingItems$$inline_4015$$[$j$$inline_4021_startTime$$inline_4012$$], $currItem$$inline_4017_currY$$inline_4022$$ = $currItem$$inline_4017_currY$$inline_4022$$.$_durationLevel$, $endTime$$inline_4013_y$$inline_4014$$ == $currItem$$inline_4017_currY$$inline_4022$$) {
                  $endTime$$inline_4013_y$$inline_4014$$ = $currItem$$inline_4017_currY$$inline_4022$$ + 1;
                  $JSCompiler_inline_result$$256_endTime$$14_item$$inline_4010$$.$_durationLevel$ = $endTime$$inline_4013_y$$inline_4014$$;
                  $index$$inline_4011_yChanged$$inline_4020$$ = !0;
                  break;
                }
              }
              if (!$index$$inline_4011_yChanged$$inline_4020$$) {
                break;
              }
            }
            $endTime$$inline_4013_y$$inline_4014$$ > this.$_maxDurationSize$ && (this.$_maxDurationSize$ = $endTime$$inline_4013_y$$inline_4014$$);
            $JSCompiler_inline_result$$256_endTime$$14_item$$inline_4010$$ = $endTime$$inline_4013_y$$inline_4014$$;
            break a;
          }
        }
        $JSCompiler_inline_result$$256_endTime$$14_item$$inline_4010$$ = void 0;
      }
      $JSCompiler_temp_const$$255_startTime$$16$$.$_durationLevel$ = $JSCompiler_inline_result$$256_endTime$$14_item$$inline_4010$$;
      $node$$299$$.$_durationSize$ = 22 + 10 * $node$$299$$.$_durationLevel$ - 5;
      null == $node$$299$$.$_durationFillColor$ && ($node$$299$$.$_durationFillColor$ = this.$_colors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_colors$.length && (this.$_colorCount$ = 0));
    }
  }
};
$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return this.$_label$;
};
$JSCompiler_prototypeAlias$$.$isTopToBottom$ = function $$JSCompiler_prototypeAlias$$$$isTopToBottom$$() {
  return this.$_isTopToBottom$;
};
$JSCompiler_prototypeAlias$$.$isVertical$ = function $$JSCompiler_prototypeAlias$$$$isVertical$$() {
  return this.$_isVertical$;
};
$JSCompiler_prototypeAlias$$.$addTick$ = function $$JSCompiler_prototypeAlias$$$$addTick$$($container$$183$$, $line$$18_x1$$37$$, $x2$$35$$, $y1$$30$$, $y2$$29$$, $stroke$$100$$, $id$$206$$) {
  $line$$18_x1$$37$$ = new dvt.$Line$(this.$getCtx$(), $line$$18_x1$$37$$, $y1$$30$$, $x2$$35$$, $y2$$29$$, $id$$206$$);
  $line$$18_x1$$37$$.$setStroke$($stroke$$100$$);
  $line$$18_x1$$37$$.$setPixelHinting$();
  $container$$183$$.$addChild$($line$$18_x1$$37$$);
  return $line$$18_x1$$37$$;
};
function $DvtTimelineSeriesItem$$($context$$416$$, $id$$207$$) {
  this.Init($context$$416$$, $id$$207$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesItem$$, dvt.$Container$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeriesItem$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$417$$, $id$$208$$) {
  $DvtTimelineSeriesItem$$.$superclass$.Init.call(this, $context$$417$$, "g", $id$$208$$);
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($isSelected$$1$$) {
  this.$_isSelected$ != $isSelected$$1$$ && ((this.$_isSelected$ = $isSelected$$1$$) ? this.$_isShowingHoverEffect$ ? this.$applyState$("asel") : this.$applyState$("sel") : this.$applyState$("en"));
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($isFocused$$1$$) {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = !0, this.$_isSelected$ && $isFocused$$1$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("hl"));
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($isFocused$$2$$) {
  this.$_isSelected$ && $isFocused$$2$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("en");
  this.$_isShowingHoverEffect$ = !1;
};
$JSCompiler_prototypeAlias$$.$applyState$ = function $$JSCompiler_prototypeAlias$$$$applyState$$($bubbleFillColor_state$$97$$) {
  var $feeler$$1_item$$70$$ = this.$_node$, $duration$$35_itemElem$$ = $feeler$$1_item$$70$$.$_displayable$;
  if (null != $duration$$35_itemElem$$) {
    var $bubble$$ = $duration$$35_itemElem$$.$getChildAt$(0), $bubbleInner$$ = $bubble$$.$getChildAt$(0), $duration$$35_itemElem$$ = $feeler$$1_item$$70$$.$_durationBar$;
    if ("asel" == $bubbleFillColor_state$$97$$) {
      $bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($feeler$$1_item$$70$$);
      var $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($feeler$$1_item$$70$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$();
    } else {
      "sel" == $bubbleFillColor_state$$97$$ ? ($bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($feeler$$1_item$$70$$), $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($feeler$$1_item$$70$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$()) : "hl" == $bubbleFillColor_state$$97$$ ? ($bubbleFillColor_state$$97$$ = 
      $DvtTimelineStyleUtils$$.$getItemHoverFillColor$($feeler$$1_item$$70$$), $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$($feeler$$1_item$$70$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$()) : ($bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemFillColor$($feeler$$1_item$$70$$), $bubbleStroke_bubbleStrokeColor$$ = 
      $DvtTimelineStyleUtils$$.$getItemStrokeColor$($feeler$$1_item$$70$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$());
    }
    var $bubbleInnerStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$(), $bubbleStroke_bubbleStrokeColor$$ = new dvt.$SolidStroke$($bubbleStroke_bubbleStrokeColor$$, 1, $bubbleStrokeWidth$$), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = new dvt.$SolidStroke$($bubbleInnerStroke_bubbleInnerStrokeColor$$, 1, $bubbleInnerStrokeWidth$$);
    $bubble$$.$setSolidFill$($bubbleFillColor_state$$97$$);
    $bubble$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
    $bubbleInner$$.$setStroke$($bubbleInnerStroke_bubbleInnerStrokeColor$$);
    ($feeler$$1_item$$70$$ = $feeler$$1_item$$70$$.$_feeler$) && $feeler$$1_item$$70$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
    $duration$$35_itemElem$$ && $duration$$35_itemElem$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
  }
};
var $DvtTimelineSeriesItemRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesItemRenderer$$, dvt.$Obj$);
$DvtTimelineSeriesItemRenderer$$.$renderItem$ = function $$DvtTimelineSeriesItemRenderer$$$$renderItem$$($item$$71$$, $series$$23$$, $container$$184$$, $overflowOffset$$, $frAnimationElems$$, $mvAnimator$$) {
  $item$$71$$.$_content$ ? ($DvtTimelineSeriesItemRenderer$$.$_renderBubble$($item$$71$$, $series$$23$$, $container$$184$$, $frAnimationElems$$), $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($item$$71$$, $series$$23$$, $overflowOffset$$, null, !1)) : ($series$$23$$.$_hasMvAnimations$ = !0, $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($item$$71$$, $series$$23$$, $overflowOffset$$, $mvAnimator$$, !0));
  $series$$23$$.$isVertical$() || ($item$$71$$.$_feeler$ && $series$$23$$.$_allowUpdates$ ? $DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($item$$71$$, $series$$23$$, $overflowOffset$$, $mvAnimator$$) : $DvtTimelineSeriesItemRenderer$$.$_renderFeeler$($item$$71$$, $series$$23$$, $container$$184$$.$feelers$, $overflowOffset$$, $frAnimationElems$$));
};
$DvtTimelineSeriesItemRenderer$$.$initializeItem$ = function $$DvtTimelineSeriesItemRenderer$$$$initializeItem$$($item$$72$$, $series$$24$$, $index$$199$$) {
  $item$$72$$.$_displayable$ && $series$$24$$.$_allowUpdates$ ? $DvtTimelineSeriesItemRenderer$$.$_updateBubble$($item$$72$$, $series$$24$$, $index$$199$$) : $DvtTimelineSeriesItemRenderer$$.$_createBubble$($item$$72$$, $series$$24$$, $index$$199$$);
};
$DvtTimelineSeriesItemRenderer$$.$_createBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_createBubble$$($item$$73$$, $series$$25_spacing$$2$$, $index$$200$$) {
  var $content$$8$$ = $DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$($item$$73$$, $series$$25_spacing$$2$$);
  $series$$25_spacing$$2$$.$addChild$($content$$8$$);
  var $dim$$78$$ = $content$$8$$.$getDimensions$();
  $series$$25_spacing$$2$$.removeChild($content$$8$$);
  $item$$73$$.$setWidth$($dim$$78$$.$w$ + 10);
  $item$$73$$.$setHeight$($dim$$78$$.$h$ + 10);
  $item$$73$$.$_content$ = $content$$8$$;
  $series$$25_spacing$$2$$ = $JSCompiler_StaticMethods_calculateSpacing$$($series$$25_spacing$$2$$, $item$$73$$, $index$$200$$);
  $item$$73$$.$_spacing$ = $series$$25_spacing$$2$$;
};
$DvtTimelineSeriesItemRenderer$$.$_renderBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderBubble$$($item$$74$$, $series$$26$$, $container$$185$$, $animationElems$$) {
  var $bubbleContainer_context$$418$$ = $series$$26$$.$getCtx$(), $bubbleArray_isRTL$$51$$ = dvt.$Agent$.$isRightToLeft$($bubbleContainer_context$$418$$), $id$$209$$ = $item$$74$$.getId(), $content$$9$$ = $item$$74$$.$_content$;
  $item$$74$$.$_content$ = null;
  var $bubble$$1_nodeWidth$$4$$ = $item$$74$$.getWidth(), $innerBubbleArray_nodeHeight$$7$$ = $item$$74$$.getHeight(), $bubbleId_innerBubble$$ = "_bubble_" + $id$$209$$;
  if ($series$$26$$.$isVertical$()) {
    var $offset$$35$$ = $innerBubbleArray_nodeHeight$$7$$ / 2, $startOffset$$3$$ = $offset$$35$$ - 6, $endOffset$$3$$ = $offset$$35$$ + 6;
    !$bubbleArray_isRTL$$51$$ && $series$$26$$.$_isInverted$ || $bubbleArray_isRTL$$51$$ && !$series$$26$$.$_isInverted$ ? ($bubbleArray_isRTL$$51$$ = [0, 0, 0, $startOffset$$3$$, -6, $offset$$35$$, 0, $endOffset$$3$$, 0, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $startOffset$$3$$, -4, $offset$$35$$, 2, $endOffset$$3$$, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 
    $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2]) : ($bubbleArray_isRTL$$51$$ = [0, 0, 0, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $endOffset$$3$$, $bubble$$1_nodeWidth$$4$$ + 6, $offset$$35$$, $bubble$$1_nodeWidth$$4$$, $startOffset$$3$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 
    2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, $endOffset$$3$$, $bubble$$1_nodeWidth$$4$$ + 4, $offset$$35$$, $bubble$$1_nodeWidth$$4$$ - 2, $startOffset$$3$$, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2]);
  } else {
    $offset$$35$$ = $bubbleArray_isRTL$$51$$ ? $bubble$$1_nodeWidth$$4$$ - $DvtTimelineStyleUtils$$.$getBubbleOffset$() : $DvtTimelineStyleUtils$$.$getBubbleOffset$(), $startOffset$$3$$ = $offset$$35$$ - 6, $endOffset$$3$$ = $offset$$35$$ + 6, $series$$26$$.$_isInverted$ ? ($bubbleArray_isRTL$$51$$ = [0, 0, $startOffset$$3$$, 0, $offset$$35$$, -6, $endOffset$$3$$, 0, $bubble$$1_nodeWidth$$4$$, 0, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, 0, $innerBubbleArray_nodeHeight$$7$$, 0, 
    0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, $startOffset$$3$$, 2, $offset$$35$$, -4, $endOffset$$3$$, 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 2, 2]) : ($bubbleArray_isRTL$$51$$ = [0, 0, 0, $innerBubbleArray_nodeHeight$$7$$, $startOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$, $offset$$35$$, $innerBubbleArray_nodeHeight$$7$$ + 6, $endOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 
    $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $startOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$ - 2, $offset$$35$$, $innerBubbleArray_nodeHeight$$7$$ + 4, $endOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2]);
  }
  $bubble$$1_nodeWidth$$4$$ = new dvt.$Polygon$($bubbleContainer_context$$418$$, $bubbleArray_isRTL$$51$$, $bubbleId_innerBubble$$);
  $bubbleId_innerBubble$$ = new dvt.$Polygon$($bubbleContainer_context$$418$$, $innerBubbleArray_nodeHeight$$7$$, $bubbleId_innerBubble$$ + "_i");
  $bubbleId_innerBubble$$.$setSolidFill$($DvtTimelineStyleUtils$$.$getItemInnerFillColor$());
  $content$$9$$.$setTranslate$(5, 5);
  $bubble$$1_nodeWidth$$4$$.$addChild$($bubbleId_innerBubble$$);
  $bubble$$1_nodeWidth$$4$$.$addChild$($content$$9$$);
  $bubbleContainer_context$$418$$ = new $DvtTimelineSeriesItem$$($bubbleContainer_context$$418$$, "_bt_" + $id$$209$$);
  $animationElems$$ && ($bubbleContainer_context$$418$$.$setAlpha$(0), $animationElems$$.push($bubbleContainer_context$$418$$));
  $bubbleContainer_context$$418$$.$addChild$($bubble$$1_nodeWidth$$4$$);
  $DvtTimeUtils$$.$supportsTouch$() && dvt.$ToolkitUtils$.$setAttrNullNS$($bubbleContainer_context$$418$$.$_elem$, "id", $bubbleContainer_context$$418$$.$_id$);
  $bubbleContainer_context$$418$$.$_node$ = $item$$74$$;
  $item$$74$$.$_displayable$ = $bubbleContainer_context$$418$$;
  $bubbleContainer_context$$418$$.$applyState$("en");
  0 <= $item$$74$$.$_loc$ && $container$$185$$.$addChild$($bubbleContainer_context$$418$$);
  $bubbleContainer_context$$418$$.$setAriaRole$("group");
  $item$$74$$.$_updateAriaLabel$();
  $series$$26$$.$_callbackObj$.$EventManager$.$associate$($bubbleContainer_context$$418$$, $item$$74$$);
};
$DvtTimelineSeriesItemRenderer$$.$_displayBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_displayBubble$$($bubbleContainer$$1_item$$75$$, $series$$27$$, $overflowOffset$$1$$, $animator$$137$$, $resetState$$) {
  var $isRTL$$52_transX$$7$$ = dvt.$Agent$.$isRightToLeft$($series$$27$$.$getCtx$()), $loc$$1$$ = $bubbleContainer$$1_item$$75$$.$_loc$, $nodeWidth$$5$$ = $bubbleContainer$$1_item$$75$$.getWidth(), $nodeHeight$$8_transY$$ = $bubbleContainer$$1_item$$75$$.getHeight(), $spacing$$3$$ = $bubbleContainer$$1_item$$75$$.$_spacing$;
  $bubbleContainer$$1_item$$75$$ = $bubbleContainer$$1_item$$75$$.$_displayable$;
  $resetState$$ && $bubbleContainer$$1_item$$75$$.$applyState$("en");
  $series$$27$$.$isVertical$() ? ($nodeHeight$$8_transY$$ = $loc$$1$$ - $nodeHeight$$8_transY$$ / 2, $isRTL$$52_transX$$7$$ && $series$$27$$.$_isInverted$ || !$isRTL$$52_transX$$7$$ && !$series$$27$$.$_isInverted$ ? $isRTL$$52_transX$$7$$ = $series$$27$$.$_size$ - ($nodeWidth$$5$$ + $series$$27$$.$_initialSpacing$) + $overflowOffset$$1$$ : ($isRTL$$52_transX$$7$$ = $series$$27$$.$_initialSpacing$, $overflowOffset$$1$$ = 0)) : ($isRTL$$52_transX$$7$$ = $isRTL$$52_transX$$7$$ ? $series$$27$$.$_length$ - 
  $loc$$1$$ - $nodeWidth$$5$$ + $DvtTimelineStyleUtils$$.$getBubbleOffset$() : $loc$$1$$ - $DvtTimelineStyleUtils$$.$getBubbleOffset$(), $series$$27$$.$_isInverted$ ? ($nodeHeight$$8_transY$$ = $series$$27$$.$isTopToBottom$() ? $spacing$$3$$ : $series$$27$$.$Height$ - $spacing$$3$$ - $nodeHeight$$8_transY$$ + $overflowOffset$$1$$ + $series$$27$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $overflowOffset$$1$$ = 0) : $nodeHeight$$8_transY$$ = $series$$27$$.$isTopToBottom$() ? 
  $spacing$$3$$ - $series$$27$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() : $series$$27$$.$Height$ - $spacing$$3$$ - $nodeHeight$$8_transY$$ + $overflowOffset$$1$$);
  $animator$$137$$ ? ($series$$27$$.$isVertical$() ? $bubbleContainer$$1_item$$75$$.$setTranslateX$($bubbleContainer$$1_item$$75$$.$getTranslateX$() + $series$$27$$.$_canvasOffsetX$ + $overflowOffset$$1$$) : $bubbleContainer$$1_item$$75$$.$setTranslateY$($bubbleContainer$$1_item$$75$$.$getTranslateY$() + $series$$27$$.$_canvasOffsetY$ + $overflowOffset$$1$$), $animator$$137$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $bubbleContainer$$1_item$$75$$, $bubbleContainer$$1_item$$75$$.$getTranslateX$, $bubbleContainer$$1_item$$75$$.$setTranslateX$, 
  $isRTL$$52_transX$$7$$), $animator$$137$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $bubbleContainer$$1_item$$75$$, $bubbleContainer$$1_item$$75$$.$getTranslateY$, $bubbleContainer$$1_item$$75$$.$setTranslateY$, $nodeHeight$$8_transY$$)) : $bubbleContainer$$1_item$$75$$.$setTranslate$($isRTL$$52_transX$$7$$, $nodeHeight$$8_transY$$);
};
$DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$ = function $$DvtTimelineSeriesItemRenderer$$$$_getBubbleContent$$($item$$76$$, $series$$28$$) {
  var $context$$420$$ = $series$$28$$.$getCtx$(), $isRTL$$53$$ = dvt.$Agent$.$isRightToLeft$($context$$420$$), $title$$22_width$$138$$ = $item$$76$$.$getTitle$(), $desc$$29_descText$$ = $item$$76$$.$_desc$, $thumbImage_thumbnail$$ = $item$$76$$.$_thumbnail$, $container$$186$$ = new dvt.$Container$($context$$420$$), $offsetX$$10$$ = 0, $offsetY$$7$$ = 0;
  if ($isRTL$$53$$) {
    $title$$22_width$$138$$ && ($titleText$$ = new dvt.$OutputText$($context$$420$$, $title$$22_width$$138$$, 0, $offsetY$$7$$), $titleText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemTitleStyle$($item$$76$$)), $offsetX$$10$$ = $titleText$$.$measureDimensions$().$w$ + 2, $offsetY$$7$$ = 15, $container$$186$$.$addChild$($titleText$$)), $desc$$29_descText$$ && ($desc$$29_descText$$ = new dvt.$OutputText$($context$$420$$, $desc$$29_descText$$, 0, $offsetY$$7$$), $desc$$29_descText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($item$$76$$)), 
    $title$$22_width$$138$$ = $desc$$29_descText$$.$measureDimensions$().$w$ + 2, 0 != $offsetX$$10$$ && $title$$22_width$$138$$ != $offsetX$$10$$ ? $title$$22_width$$138$$ > $offsetX$$10$$ ? ($titleText$$.$setX$($title$$22_width$$138$$ - $offsetX$$10$$), $offsetX$$10$$ = $title$$22_width$$138$$) : $desc$$29_descText$$.$setX$($offsetX$$10$$ - $title$$22_width$$138$$) : $offsetX$$10$$ = $title$$22_width$$138$$, $container$$186$$.$addChild$($desc$$29_descText$$)), $thumbImage_thumbnail$$ && ($thumbImage_thumbnail$$ = 
    new dvt.Image($context$$420$$, $thumbImage_thumbnail$$, $offsetX$$10$$, 0, $DvtTimelineStyleUtils$$.$getThumbnailWidth$(), $DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $thumbImage_thumbnail$$.$setMouseEnabled$(!1), $container$$186$$.$addChild$($thumbImage_thumbnail$$));
  } else {
    $thumbImage_thumbnail$$ && ($thumbImage_thumbnail$$ = new dvt.Image($context$$420$$, $thumbImage_thumbnail$$, 0, 0, $DvtTimelineStyleUtils$$.$getThumbnailWidth$(), $DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $thumbImage_thumbnail$$.$setMouseEnabled$(!1), $container$$186$$.$addChild$($thumbImage_thumbnail$$), $offsetX$$10$$ = $DvtTimelineStyleUtils$$.$getThumbnailWidth$() + 2);
    if ($title$$22_width$$138$$) {
      var $titleText$$ = new dvt.$OutputText$($context$$420$$, $title$$22_width$$138$$, $offsetX$$10$$, $offsetY$$7$$);
      $titleText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemTitleStyle$($item$$76$$));
      $offsetY$$7$$ = 15;
      $container$$186$$.$addChild$($titleText$$);
    }
    $desc$$29_descText$$ && ($desc$$29_descText$$ = new dvt.$OutputText$($context$$420$$, $desc$$29_descText$$, $offsetX$$10$$, $offsetY$$7$$), $desc$$29_descText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($item$$76$$)), $container$$186$$.$addChild$($desc$$29_descText$$));
  }
  return $container$$186$$;
};
$DvtTimelineSeriesItemRenderer$$.$_updateBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateBubble$$($item$$77$$, $series$$29_spacing$$4$$, $index$$201$$) {
  $series$$29_spacing$$4$$ = $JSCompiler_StaticMethods_calculateSpacing$$($series$$29_spacing$$4$$, $item$$77$$, $index$$201$$);
  $item$$77$$.$_spacing$ = $series$$29_spacing$$4$$;
};
$DvtTimelineSeriesItemRenderer$$.$_renderFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderFeeler$$($item$$78$$, $feelerX$$1_series$$30$$, $container$$187_feelerWidth_stroke$$101$$, $feelerHeight_overflowOffset$$2$$, $animationElems$$1_feelerColor$$) {
  var $context$$421_feeler$$2$$ = $feelerX$$1_series$$30$$.$getCtx$(), $isRTL$$54$$ = dvt.$Agent$.$isRightToLeft$($context$$421_feeler$$2$$), $feelerId_id$$210$$ = $item$$78$$.getId(), $loc$$2$$ = $item$$78$$.$_loc$, $spacing$$5$$ = $item$$78$$.$_spacing$, $feelerId_id$$210$$ = "_feeler_" + $feelerId_id$$210$$;
  if ($feelerX$$1_series$$30$$.$_isInverted$) {
    $feelerY$$ = $item$$78$$.$_durationSize$, $feelerHeight_overflowOffset$$2$$ = $feelerX$$1_series$$30$$.$isTopToBottom$() ? $spacing$$5$$ : $feelerX$$1_series$$30$$.$Height$ - $spacing$$5$$ - $item$$78$$.getHeight() + $feelerHeight_overflowOffset$$2$$ + $feelerX$$1_series$$30$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$();
  } else {
    var $feelerY$$ = $feelerX$$1_series$$30$$.$Height$ + $feelerHeight_overflowOffset$$2$$ - $item$$78$$.$_durationSize$;
    $feelerHeight_overflowOffset$$2$$ = $feelerX$$1_series$$30$$.$isTopToBottom$() ? $spacing$$5$$ - $feelerX$$1_series$$30$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + $item$$78$$.getHeight() : $feelerX$$1_series$$30$$.$Height$ - $spacing$$5$$ + $feelerHeight_overflowOffset$$2$$;
  }
  $feelerX$$1_series$$30$$ = $isRTL$$54$$ ? $feelerX$$1_series$$30$$.$_length$ - $loc$$2$$ : $loc$$2$$;
  $context$$421_feeler$$2$$ = new dvt.$Line$($context$$421_feeler$$2$$, $feelerX$$1_series$$30$$, $feelerY$$, $feelerX$$1_series$$30$$, $feelerHeight_overflowOffset$$2$$, $feelerId_id$$210$$);
  $animationElems$$1_feelerColor$$ && ($context$$421_feeler$$2$$.$setAlpha$(0), $animationElems$$1_feelerColor$$.push($context$$421_feeler$$2$$));
  $container$$187_feelerWidth_stroke$$101$$.$addChild$($context$$421_feeler$$2$$);
  $container$$187_feelerWidth_stroke$$101$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
  $animationElems$$1_feelerColor$$ = $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$78$$);
  $container$$187_feelerWidth_stroke$$101$$ = new dvt.$SolidStroke$($animationElems$$1_feelerColor$$, 1, $container$$187_feelerWidth_stroke$$101$$);
  $context$$421_feeler$$2$$.$setStroke$($container$$187_feelerWidth_stroke$$101$$);
  $context$$421_feeler$$2$$.$_node$ = $item$$78$$;
  $item$$78$$.$_feeler$ = $context$$421_feeler$$2$$;
};
$DvtTimelineSeriesItemRenderer$$.$_updateFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateFeeler$$($feelerX$$2_item$$79$$, $series$$31$$, $overflowOffset$$3$$, $animator$$138$$) {
  if ($series$$31$$.$isVertical$()) {
    $feelerX$$2_item$$79$$.$_feeler$ = null;
  } else {
    var $isRTL$$55$$ = dvt.$Agent$.$isRightToLeft$($series$$31$$.$getCtx$()), $feeler$$3$$ = $feelerX$$2_item$$79$$.$_feeler$;
    if ($series$$31$$.$_isInverted$) {
      $feelerY$$1$$ = $feelerX$$2_item$$79$$.$_durationSize$, $feelerHeight$$1$$ = $series$$31$$.$isTopToBottom$() ? $feelerX$$2_item$$79$$.$_spacing$ : $series$$31$$.$Height$ - $feelerX$$2_item$$79$$.$_spacing$ - $feelerX$$2_item$$79$$.getHeight() + $overflowOffset$$3$$ + $series$$31$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $overflowOffset$$3$$ = 0;
    } else {
      var $feelerY$$1$$ = $series$$31$$.$Height$ + $overflowOffset$$3$$ - $feelerX$$2_item$$79$$.$_durationSize$, $feelerHeight$$1$$ = $series$$31$$.$isTopToBottom$() ? $feelerX$$2_item$$79$$.$_spacing$ - $series$$31$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + $feelerX$$2_item$$79$$.getHeight() : $series$$31$$.$Height$ - $feelerX$$2_item$$79$$.$_spacing$ + $overflowOffset$$3$$
    }
    $feelerX$$2_item$$79$$ = $isRTL$$55$$ ? $series$$31$$.$_length$ - $feelerX$$2_item$$79$$.$_loc$ : $feelerX$$2_item$$79$$.$_loc$;
    $animator$$138$$ ? ($feeler$$3$$.$setY1$($feeler$$3$$.$getY1$() + $series$$31$$.$_canvasOffsetY$ + $overflowOffset$$3$$), $feeler$$3$$.$setY2$($feeler$$3$$.$getY2$() + $series$$31$$.$_canvasOffsetY$ + $overflowOffset$$3$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getX1$, $feeler$$3$$.$setX1$, $feelerX$$2_item$$79$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getY1$, $feeler$$3$$.$setY1$, $feelerY$$1$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, 
    $feeler$$3$$, $feeler$$3$$.$getX2$, $feeler$$3$$.$setX2$, $feelerX$$2_item$$79$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getY2$, $feeler$$3$$.$setY2$, $feelerHeight$$1$$)) : ($feeler$$3$$.$setX1$($feelerX$$2_item$$79$$), $feeler$$3$$.$setY1$($feelerY$$1$$), $feeler$$3$$.$setX2$($feelerX$$2_item$$79$$), $feeler$$3$$.$setY2$($feelerHeight$$1$$));
  }
};
$DvtTimelineSeriesItemRenderer$$.$renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$renderDuration$$($item$$80$$, $series$$32$$, $container$$188$$, $overflowOffset$$4$$, $frAnimationElems$$1$$, $mvAnimator$$1$$) {
  $item$$80$$.$_durationBar$ ? $DvtTimelineSeriesItemRenderer$$.$_updateDuration$($item$$80$$, $series$$32$$, $overflowOffset$$4$$, $mvAnimator$$1$$) : $DvtTimelineSeriesItemRenderer$$.$_renderDuration$($item$$80$$, $series$$32$$, $container$$188$$, $overflowOffset$$4$$, $frAnimationElems$$1$$);
};
$DvtTimelineSeriesItemRenderer$$.$_renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderDuration$$($item$$81$$, $series$$33$$, $container$$189$$, $feelerStroke_feelerWidth$$1_overflowOffset$$5$$, $animationElems$$2_feelerColor$$1$$) {
  var $context$$423_duration$$36$$ = $series$$33$$.$getCtx$(), $isRTL$$56$$ = dvt.$Agent$.$isRightToLeft$($context$$423_duration$$36$$), $endLoc_endTime$$16_width$$139$$ = $item$$81$$.$_endTime$, $loc$$3_transX$$8$$ = $DvtTimeUtils$$.$getDatePosition$($series$$33$$.$_start$, $series$$33$$.$_end$, $item$$81$$.$_startTime$, $series$$33$$.$_length$), $durationId$$ = "_duration_" + $item$$81$$.getId(), $durationSize$$ = 22 + 10 * $item$$81$$.$_durationLevel$, $endLoc_endTime$$16_width$$139$$ = $DvtTimeUtils$$.$getDatePosition$($series$$33$$.$_start$, 
  $series$$33$$.$_end$, $endLoc_endTime$$16_width$$139$$, $series$$33$$.$_length$);
  $series$$33$$.$isVertical$() ? (!$isRTL$$56$$ && !$series$$33$$.$_isInverted$ || $isRTL$$56$$ && $series$$33$$.$_isInverted$ ? $context$$423_duration$$36$$ = new dvt.Rect($context$$423_duration$$36$$, $series$$33$$.$_size$ - $durationSize$$ + 5, $loc$$3_transX$$8$$, $durationSize$$, $endLoc_endTime$$16_width$$139$$ - $loc$$3_transX$$8$$, $durationId$$) : ($context$$423_duration$$36$$ = new dvt.Rect($context$$423_duration$$36$$, -5, $loc$$3_transX$$8$$, $durationSize$$, $endLoc_endTime$$16_width$$139$$ - 
  $loc$$3_transX$$8$$, $durationId$$), $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = 0), $context$$423_duration$$36$$.$setTranslateX$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$), $context$$423_duration$$36$$.$setY$($loc$$3_transX$$8$$), $context$$423_duration$$36$$.$setWidth$($durationSize$$), $context$$423_duration$$36$$.$setHeight$($endLoc_endTime$$16_width$$139$$ - $loc$$3_transX$$8$$)) : ($endLoc_endTime$$16_width$$139$$ -= $loc$$3_transX$$8$$, $loc$$3_transX$$8$$ = $isRTL$$56$$ ? 
  $series$$33$$.$_length$ - $loc$$3_transX$$8$$ - $endLoc_endTime$$16_width$$139$$ : $loc$$3_transX$$8$$, $series$$33$$.$_isInverted$ ? ($context$$423_duration$$36$$ = new dvt.Rect($context$$423_duration$$36$$, $loc$$3_transX$$8$$, -5, $endLoc_endTime$$16_width$$139$$, $durationSize$$, $durationId$$), $context$$423_duration$$36$$.$setTranslateY$(0)) : ($context$$423_duration$$36$$ = new dvt.Rect($context$$423_duration$$36$$, $loc$$3_transX$$8$$, $series$$33$$.$_size$ - $durationSize$$ + 5, $endLoc_endTime$$16_width$$139$$, 
  $durationSize$$, $durationId$$), $context$$423_duration$$36$$.$setTranslateY$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$)));
  $animationElems$$2_feelerColor$$1$$ && ($context$$423_duration$$36$$.$setAlpha$(0), $animationElems$$2_feelerColor$$1$$.push($context$$423_duration$$36$$));
  $context$$423_duration$$36$$.$setCornerRadius$(5);
  $context$$423_duration$$36$$.$setSolidFill$($item$$81$$.$_durationFillColor$);
  $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
  $animationElems$$2_feelerColor$$1$$ = $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$81$$);
  $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = new dvt.$SolidStroke$($animationElems$$2_feelerColor$$1$$, 1, $feelerStroke_feelerWidth$$1_overflowOffset$$5$$);
  $context$$423_duration$$36$$.$setStroke$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$);
  $context$$423_duration$$36$$.$_node$ = $item$$81$$;
  $series$$33$$.$_callbackObj$.$EventManager$.$associate$($context$$423_duration$$36$$, $item$$81$$);
  $container$$189$$.$addChild$($context$$423_duration$$36$$);
  $item$$81$$.$_durationBar$ = $context$$423_duration$$36$$;
};
$DvtTimelineSeriesItemRenderer$$.$_updateDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateDuration$$($durationTransY_item$$82$$, $series$$34$$, $overflowOffset$$6$$, $animator$$139$$) {
  var $durationX_isRTL$$57$$ = dvt.$Agent$.$isRightToLeft$($series$$34$$.$getCtx$()), $duration$$37$$ = $durationTransY_item$$82$$.$_durationBar$;
  if (null != $duration$$37$$) {
    var $durationHeight_loc$$4$$ = $DvtTimeUtils$$.$getDatePosition$($series$$34$$.$_start$, $series$$34$$.$_end$, $durationTransY_item$$82$$.$_startTime$, $series$$34$$.$_length$), $durationSize$$1$$ = 22 + 10 * $durationTransY_item$$82$$.$_durationLevel$, $endLoc$$1_width$$140$$ = $DvtTimeUtils$$.$getDatePosition$($series$$34$$.$_start$, $series$$34$$.$_end$, $durationTransY_item$$82$$.$_endTime$, $series$$34$$.$_length$);
    if ($series$$34$$.$isVertical$()) {
      $durationTransY_item$$82$$ = 0;
      !$durationX_isRTL$$57$$ && !$series$$34$$.$_isInverted$ || $durationX_isRTL$$57$$ && $series$$34$$.$_isInverted$ ? $durationX_isRTL$$57$$ = $series$$34$$.$_size$ - $durationSize$$1$$ + 5 : ($durationX_isRTL$$57$$ = -5, $overflowOffset$$6$$ = 0);
      var $durationTransX$$ = $overflowOffset$$6$$, $durationY$$ = $durationHeight_loc$$4$$, $durationWidth$$ = $durationSize$$1$$, $durationHeight_loc$$4$$ = $endLoc$$1_width$$140$$ - $durationHeight_loc$$4$$;
    } else {
      $durationTransX$$ = 0, $endLoc$$1_width$$140$$ -= $durationHeight_loc$$4$$, $durationX_isRTL$$57$$ = $durationX_isRTL$$57$$ ? $series$$34$$.$_length$ - $durationHeight_loc$$4$$ - $endLoc$$1_width$$140$$ : $durationHeight_loc$$4$$, $series$$34$$.$_isInverted$ ? ($durationTransY_item$$82$$ = $overflowOffset$$6$$ = 0, $durationY$$ = -5) : ($durationTransY_item$$82$$ = $overflowOffset$$6$$, $durationY$$ = $series$$34$$.$_size$ - $durationSize$$1$$ + 5), $durationWidth$$ = $endLoc$$1_width$$140$$, 
      $durationHeight_loc$$4$$ = $durationSize$$1$$;
    }
    $animator$$139$$ ? ($series$$34$$.$isVertical$() ? $duration$$37$$.$setTranslateX$($duration$$37$$.$getTranslateX$() + $series$$34$$.$_canvasOffsetX$ + $overflowOffset$$6$$) : $duration$$37$$.$setTranslateY$($duration$$37$$.$getTranslateY$() + $series$$34$$.$_canvasOffsetY$ + $overflowOffset$$6$$), $animator$$139$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$37$$, $duration$$37$$.$getTranslateX$, $duration$$37$$.$setTranslateX$, $durationTransX$$), $animator$$139$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, 
    $duration$$37$$, $duration$$37$$.$getTranslateY$, $duration$$37$$.$setTranslateY$, $durationTransY_item$$82$$), $animator$$139$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$37$$, $duration$$37$$.$getX$, $duration$$37$$.$setX$, $durationX_isRTL$$57$$), $animator$$139$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$37$$, $duration$$37$$.$getY$, $duration$$37$$.$setY$, $durationY$$), $animator$$139$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$37$$, $duration$$37$$.getWidth, $duration$$37$$.$setWidth$, 
    $durationWidth$$), $animator$$139$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$37$$, $duration$$37$$.getHeight, $duration$$37$$.$setHeight$, $durationHeight_loc$$4$$)) : ($duration$$37$$.$setTranslateX$($durationTransX$$), $duration$$37$$.$setTranslateY$($durationTransY_item$$82$$), $duration$$37$$.$setX$($durationX_isRTL$$57$$), $duration$$37$$.$setY$($durationY$$), $duration$$37$$.$setWidth$($durationWidth$$), $duration$$37$$.$setHeight$($durationHeight_loc$$4$$));
  }
};
function $DvtTimelineSeriesNode$$($timeline$$15$$, $series$$35$$, $props$$9$$) {
  this.Init($timeline$$15$$, $series$$35$$, $props$$9$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesNode$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeriesNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($timeline$$16$$, $seriesIndex$$136$$, $props$$10$$) {
  this.$_timeline$ = $timeline$$16$$;
  this.$_seriesIndex$ = $seriesIndex$$136$$;
  this.$_series$ = $timeline$$16$$.$_series$[$seriesIndex$$136$$];
  this.$_id$ = $props$$10$$.id;
  this.$_startTime$ = parseInt($props$$10$$.startTime);
  $props$$10$$.endTime && (this.$_endTime$ = parseInt($props$$10$$.endTime));
  this.$_title$ = $props$$10$$.title;
  this.$_desc$ = $props$$10$$.$desc$;
  this.$_thumbnail$ = $props$$10$$.$thumbnail$;
  this.$_style$ = $props$$10$$.style;
  this.$_data$ = $props$$10$$.data;
  this.$_action$ = $props$$10$$.action;
  this.$_durationFillColor$ = $props$$10$$.$durationFillColor$;
  this.$_durationSize$ = 0;
  this.$_spbs$ = $props$$10$$.$spbs$;
};
$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_id$;
};
$JSCompiler_prototypeAlias$$.$getSeries$ = function $$JSCompiler_prototypeAlias$$$$getSeries$$() {
  return this.$_series$;
};
$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = function $$JSCompiler_prototypeAlias$$$$getSeriesIndex$$() {
  return this.$_seriesIndex$;
};
$JSCompiler_prototypeAlias$$.$getTitle$ = function $$JSCompiler_prototypeAlias$$$$getTitle$$() {
  return this.$_title$;
};
$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$() {
  return this.$_style$;
};
$JSCompiler_prototypeAlias$$.$setStyle$ = function $$JSCompiler_prototypeAlias$$$$setStyle$$($style$$112$$) {
  this.$_style$ = $style$$112$$;
};
$JSCompiler_prototypeAlias$$.getData = function $$JSCompiler_prototypeAlias$$$getData$() {
  return this.$_data$;
};
$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return null != this.$_endTime$ ? "Start Time: " + (new Date(this.$_startTime$)).toLocaleString() + "; End Time: " + (new Date(this.$_endTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$ : "Time: " + (new Date(this.$_startTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$;
};
$JSCompiler_prototypeAlias$$.getWidth = function $$JSCompiler_prototypeAlias$$$getWidth$() {
  return this.$_w$;
};
$JSCompiler_prototypeAlias$$.$setWidth$ = function $$JSCompiler_prototypeAlias$$$$setWidth$$($w$$41$$) {
  this.$_w$ = $w$$41$$;
};
$JSCompiler_prototypeAlias$$.getHeight = function $$JSCompiler_prototypeAlias$$$getHeight$() {
  return this.$_h$;
};
$JSCompiler_prototypeAlias$$.$setHeight$ = function $$JSCompiler_prototypeAlias$$$$setHeight$$($h$$37$$) {
  this.$_h$ = $h$$37$$;
};
$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_action$;
};
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$553$$) {
  var $keyboardHandler$$9_navigableItems$$7$$ = this.$_timeline$.$EventManager$.$KeyboardHandler$;
  if ($event$$553$$.type == dvt.MouseEvent.$CLICK$ || $keyboardHandler$$9_navigableItems$$7$$.$isMultiSelectEvent$($event$$553$$)) {
    return this;
  }
  if ($keyboardHandler$$9_navigableItems$$7$$.$isNavigationEvent$($event$$553$$)) {
    for (var $keyboardHandler$$9_navigableItems$$7$$ = [], $i$$661$$ = 0;$i$$661$$ < this.$_timeline$.$_series$.length;$i$$661$$++) {
      $keyboardHandler$$9_navigableItems$$7$$.push(this.$_timeline$.$_series$[$i$$661$$].$_items$);
    }
    return $DvtTimelineKeyboardHandler$getNextNavigable$$(this, $event$$553$$, $keyboardHandler$$9_navigableItems$$7$$);
  }
  return null;
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$();
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$35$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$35$$);
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  this.$showHoverEffect$();
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$$(this.$_timeline$, this);
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !1;
  this.$hideHoverEffect$();
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$isShowingKeyboardFocusEffect$$() {
  return this.$_isShowingKeyboardFocusEffect$;
};
$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return [this.$_displayable$];
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$17$$ = [];
  this.$isSelectable$() && $states$$17$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return dvt.$Displayable$.$generateAriaLabel$(this.$getLabel$(), $states$$17$$);
};
$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($isSelectable$$) {
  this.$_isSelectable$ = $isSelectable$$;
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_isSelectable$;
};
$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$_isSelected$;
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$) {
  this.$_isSelected$ = $JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$;
  this.$_displayable$.$setSelected$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$);
  this.$_updateAriaLabel$();
  if (this.$_timeline$.$_hasOverview$ && this.$_timeline$.$_overview$) {
    if ($JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$) {
      $JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$ = this.$_timeline$.$_overview$;
      var $drawable$$inline_4056_drawable$$inline_4060_itemId$$inline_4055_itemId$$inline_4059$$ = this.getId(), $drawable$$inline_4056_drawable$$inline_4060_itemId$$inline_4055_itemId$$inline_4059$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$, $drawable$$inline_4056_drawable$$inline_4060_itemId$$inline_4055_itemId$$inline_4059$$);
      null != $drawable$$inline_4056_drawable$$inline_4060_itemId$$inline_4055_itemId$$inline_4059$$ && $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$, $drawable$$inline_4056_drawable$$inline_4060_itemId$$inline_4055_itemId$$inline_4059$$);
    } else {
      if ($JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$ = this.$_timeline$.$_overview$, $drawable$$inline_4056_drawable$$inline_4060_itemId$$inline_4055_itemId$$inline_4059$$ = this.getId(), $drawable$$inline_4056_drawable$$inline_4060_itemId$$inline_4055_itemId$$inline_4059$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$, 
      $drawable$$inline_4056_drawable$$inline_4060_itemId$$inline_4055_itemId$$inline_4059$$), null != $drawable$$inline_4056_drawable$$inline_4060_itemId$$inline_4055_itemId$$inline_4059$$ && null != $JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$.$_selectedMarkers$) {
        for (var $index$$inline_5041$$ = -1, $i$$inline_5042$$ = 0;$i$$inline_5042$$ < $JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$.$_selectedMarkers$.length;$i$$inline_5042$$++) {
          if ($drawable$$inline_4056_drawable$$inline_4060_itemId$$inline_4055_itemId$$inline_4059$$ == $JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$.$_selectedMarkers$[$i$$inline_5042$$]) {
            $index$$inline_5041$$ = $i$$inline_5042$$;
            break;
          }
        }
        -1 != $index$$inline_5041$$ && ($JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$.$applyState$($drawable$$inline_4056_drawable$$inline_4060_itemId$$inline_4055_itemId$$inline_4059$$, dvt.$TimelineOverview$.$ENABLED_STATE$), $JSCompiler_StaticMethods_selSelectItem$self$$inline_4054_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4058_isSelected$$2$$.$_selectedMarkers$.splice($index$$inline_5041$$, 1));
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($JSCompiler_StaticMethods_highlightItem$self$$inline_4062_ignoreOverview$$) {
  this.$_displayable$.$showHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if (!$JSCompiler_StaticMethods_highlightItem$self$$inline_4062_ignoreOverview$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_highlightItem$self$$inline_4062_ignoreOverview$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_4064_itemId$$inline_4063$$ = this.getId(), $drawable$$inline_4064_itemId$$inline_4063$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_highlightItem$self$$inline_4062_ignoreOverview$$, $drawable$$inline_4064_itemId$$inline_4063$$);
    null != $drawable$$inline_4064_itemId$$inline_4063$$ && $JSCompiler_StaticMethods_highlightMarker$$($JSCompiler_StaticMethods_highlightItem$self$$inline_4062_ignoreOverview$$, $drawable$$inline_4064_itemId$$inline_4063$$);
  }
  if (this.$_timeline$.$_isVertical$ || this.$_series$.$_isRandomItemLayout$) {
    this.$_index$ || (this.$_index$ = this.$_series$.$_blocks$[0].$getChildIndex$(this.$_displayable$)), this.$_series$.$_blocks$[0].$addChild$(this.$_displayable$);
  }
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_4066_ignoreOverview$$1$$) {
  this.$_displayable$.$hideHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if (!$JSCompiler_StaticMethods_unhighlightItem$self$$inline_4066_ignoreOverview$$1$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_unhighlightItem$self$$inline_4066_ignoreOverview$$1$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_4068_itemId$$inline_4067$$ = this.getId(), $drawable$$inline_4068_itemId$$inline_4067$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_4066_ignoreOverview$$1$$, $drawable$$inline_4068_itemId$$inline_4067$$);
    null != $drawable$$inline_4068_itemId$$inline_4067$$ && $JSCompiler_StaticMethods_unhighlightMarker$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_4066_ignoreOverview$$1$$, $drawable$$inline_4068_itemId$$inline_4067$$);
  }
  (this.$_timeline$.$_isVertical$ || this.$_series$.$_isRandomItemLayout$) && this.$_index$ && !this.$_isSelected$ && this.$_series$.$_blocks$[0].$addChildAt$(this.$_displayable$, this.$_index$);
};
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  if (!this.$_showPopupBehaviors$ && (this.$_showPopupBehaviors$ = [], this.$_spbs$)) {
    for (var $spbs$$7$$ = this.$_spbs$, $si$$1$$ = 0;$si$$1$$ < $spbs$$7$$.length;$si$$1$$++) {
      this.$_showPopupBehaviors$.push(new dvt.$ShowPopupBehavior$($spbs$$7$$[$si$$1$$].popupId, $spbs$$7$$[$si$$1$$].triggerType, $spbs$$7$$[$si$$1$$].alignId, $spbs$$7$$[$si$$1$$].align));
    }
  }
  return this.$_showPopupBehaviors$;
};
$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  dvt.$Agent$.$deferAriaCreation$() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$());
};
function $DvtTimelineSeriesParser$$() {
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesParser$$, dvt.$Obj$);
$DvtTimelineSeriesParser$$.prototype.parse = function $$DvtTimelineSeriesParser$$$$parse$($options$$313$$, $oldItems$$1$$) {
  var $itemArray$$inline_4072$$ = [], $ret$$65_seriesItems$$inline_4073$$ = $options$$313$$.items;
  if ($ret$$65_seriesItems$$inline_4073$$) {
    for (var $j$$inline_4074$$ = 0;$j$$inline_4074$$ < $ret$$65_seriesItems$$inline_4073$$.length;$j$$inline_4074$$++) {
      $itemArray$$inline_4072$$.push($ret$$65_seriesItems$$inline_4073$$[$j$$inline_4074$$]);
    }
  }
  $ret$$65_seriesItems$$inline_4073$$ = {};
  $ret$$65_seriesItems$$inline_4073$$.start = (new Date($options$$313$$.start)).getTime();
  $ret$$65_seriesItems$$inline_4073$$.end = (new Date($options$$313$$.end)).getTime();
  $ret$$65_seriesItems$$inline_4073$$.$inlineStyle$ = $options$$313$$.style;
  $ret$$65_seriesItems$$inline_4073$$.scale = $options$$313$$.scale;
  $ret$$65_seriesItems$$inline_4073$$.$timeAxis$ = $options$$313$$.timeAxis;
  $ret$$65_seriesItems$$inline_4073$$.label = $options$$313$$.label;
  $ret$$65_seriesItems$$inline_4073$$.$emptyText$ = $options$$313$$.emptyText;
  $ret$$65_seriesItems$$inline_4073$$.$isIRAnimationEnabled$ = "auto" == $options$$313$$.animationOnDisplay;
  $ret$$65_seriesItems$$inline_4073$$.$isDCAnimationEnabled$ = "auto" == $options$$313$$.animationOnDataChange;
  $ret$$65_seriesItems$$inline_4073$$.items = this.$_parseDataNode$($options$$313$$.timeline, $options$$313$$.index, $itemArray$$inline_4072$$, $oldItems$$1$$, $ret$$65_seriesItems$$inline_4073$$.start, $ret$$65_seriesItems$$inline_4073$$.end);
  $ret$$65_seriesItems$$inline_4073$$.$rtl$ = "false";
  $ret$$65_seriesItems$$inline_4073$$.$isRandomItemLayout$ = $options$$313$$._isRandomItemLayout;
  $ret$$65_seriesItems$$inline_4073$$.$customTimeScales$ = $options$$313$$._cts;
  $ret$$65_seriesItems$$inline_4073$$.$customFormatScales$ = $options$$313$$._cfs;
  $ret$$65_seriesItems$$inline_4073$$.$isTopToBottom$ = null == $options$$313$$.itemLayout || "auto" == $options$$313$$.itemLayout ? $options$$313$$.inverted : "topToBottom" == $options$$313$$.itemLayout;
  return $ret$$65_seriesItems$$inline_4073$$;
};
$DvtTimelineSeriesParser$$.prototype.$_parseDataNode$ = function $$DvtTimelineSeriesParser$$$$$_parseDataNode$$($timeline$$17$$, $seriesIndex$$137$$, $data$$119$$, $oldItems$$2$$, $compStartTime$$, $compEndTime$$) {
  var $treeNodes$$ = [], $series$$36$$ = $timeline$$17$$.$_series$[$seriesIndex$$137$$];
  if ($data$$119$$) {
    for (var $i$$662$$ = 0;$i$$662$$ < $data$$119$$.length;$i$$662$$++) {
      var $props$$11_startTime$$19$$ = this.$ParseNodeAttributes$($data$$119$$[$i$$662$$], $compStartTime$$, $compEndTime$$);
      if ($props$$11_startTime$$19$$) {
        if ($series$$36$$.$_allowUpdates$) {
          var $item$$84_props$$inline_4076$$;
          a: {
            $item$$84_props$$inline_4076$$ = $props$$11_startTime$$19$$;
            var $add_index$$202_items$$inline_4077$$ = $oldItems$$2$$;
            if ($add_index$$202_items$$inline_4077$$) {
              for (var $i$$inline_4078_j$$103$$ = 0;$i$$inline_4078_j$$103$$ < $add_index$$202_items$$inline_4077$$.length;$i$$inline_4078_j$$103$$++) {
                var $item$$inline_4079$$ = $add_index$$202_items$$inline_4077$$[$i$$inline_4078_j$$103$$];
                if ($item$$84_props$$inline_4076$$.id == $item$$inline_4079$$.getId() && $item$$84_props$$inline_4076$$.title == $item$$inline_4079$$.$getTitle$() && $item$$84_props$$inline_4076$$.$desc$ == $item$$inline_4079$$.$_desc$ && $item$$84_props$$inline_4076$$.$thumbnail$ == $item$$inline_4079$$.$_thumbnail$) {
                  $item$$84_props$$inline_4076$$ = $item$$inline_4079$$;
                  break a;
                }
              }
            }
            $item$$84_props$$inline_4076$$ = void 0;
          }
          $item$$84_props$$inline_4076$$ ? ($add_index$$202_items$$inline_4077$$ = dvt.$ArrayUtils$.$getIndex$($oldItems$$2$$, $item$$84_props$$inline_4076$$), $oldItems$$2$$.splice($add_index$$202_items$$inline_4077$$, 1), $item$$84_props$$inline_4076$$.$_spacing$ = null, $item$$84_props$$inline_4076$$.$_durationLevel$ = null, $item$$84_props$$inline_4076$$.$_loc$ = null, $item$$84_props$$inline_4076$$.$setSelected$(!1), $item$$84_props$$inline_4076$$.$_startTime$ = $props$$11_startTime$$19$$.startTime, 
          $item$$84_props$$inline_4076$$.$_endTime$ = $props$$11_startTime$$19$$.endTime, $item$$84_props$$inline_4076$$.$setStyle$($props$$11_startTime$$19$$.style)) : ($item$$84_props$$inline_4076$$ = new $DvtTimelineSeriesNode$$($timeline$$17$$, $seriesIndex$$137$$, $props$$11_startTime$$19$$), $item$$84_props$$inline_4076$$.$setSelectable$(!0));
        } else {
          $item$$84_props$$inline_4076$$ = new $DvtTimelineSeriesNode$$($timeline$$17$$, $seriesIndex$$137$$, $props$$11_startTime$$19$$), $item$$84_props$$inline_4076$$.$setSelectable$(!0);
        }
        $props$$11_startTime$$19$$ = $item$$84_props$$inline_4076$$.$_startTime$;
        $add_index$$202_items$$inline_4077$$ = !0;
        for ($i$$inline_4078_j$$103$$ = 0;$i$$inline_4078_j$$103$$ < $treeNodes$$.length;$i$$inline_4078_j$$103$$++) {
          if ($props$$11_startTime$$19$$ < $treeNodes$$[$i$$inline_4078_j$$103$$].$_startTime$) {
            $treeNodes$$.splice($i$$inline_4078_j$$103$$, 0, $item$$84_props$$inline_4076$$);
            $add_index$$202_items$$inline_4077$$ = !1;
            break;
          }
        }
        $add_index$$202_items$$inline_4077$$ && $treeNodes$$.push($item$$84_props$$inline_4076$$);
      }
    }
  }
  return $treeNodes$$;
};
$DvtTimelineSeriesParser$$.prototype.getDate = function $$DvtTimelineSeriesParser$$$$getDate$($date$$18$$) {
  return null == $date$$18$$ ? null : $date$$18$$.getTime ? $date$$18$$.getTime() : isNaN($date$$18$$) ? (new Date($date$$18$$)).getTime() + 0 : $date$$18$$;
};
$DvtTimelineSeriesParser$$.prototype.$ParseNodeAttributes$ = function $$DvtTimelineSeriesParser$$$$$ParseNodeAttributes$$($data$$120$$, $compStartTime$$1$$, $compEndTime$$1$$) {
  var $ret$$66$$ = {};
  $ret$$66$$.id = $data$$120$$.id;
  $ret$$66$$.$rowKey$ = $ret$$66$$.id;
  $ret$$66$$.startTime = this.getDate($data$$120$$.start);
  $ret$$66$$.endTime = this.getDate($data$$120$$.end);
  if (($ret$$66$$.endTime ? $ret$$66$$.endTime : $ret$$66$$.startTime) < $compStartTime$$1$$ || $ret$$66$$.startTime > $compEndTime$$1$$) {
    return null;
  }
  $ret$$66$$.title = $data$$120$$.title;
  $ret$$66$$.$desc$ = $data$$120$$.description;
  $ret$$66$$.$thumbnail$ = $data$$120$$.thumbnail;
  $ret$$66$$.data = $data$$120$$;
  $ret$$66$$.style = $data$$120$$.style;
  $ret$$66$$.action = $data$$120$$.action;
  $ret$$66$$.$durationFillColor$ = $data$$120$$.durationFillColor;
  $ret$$66$$.$spbs$ = $data$$120$$.showPopupBehaviors;
  return $ret$$66$$;
};
var $DvtTimelineSeriesRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesRenderer$$, dvt.$Obj$);
$DvtTimelineSeriesRenderer$$.$renderSeries$ = function $$DvtTimelineSeriesRenderer$$$$renderSeries$$($series$$37$$, $block$$1_width$$141$$, $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$) {
  $DvtTimelineSeriesRenderer$$.$_renderBackground$($series$$37$$, $block$$1_width$$141$$, $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$);
  $DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$($series$$37$$);
  $DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$($series$$37$$, $series$$37$$.$_canvas$);
  $DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$($series$$37$$);
  if (null != $series$$37$$.$_items$) {
    if (0 == $series$$37$$.$_blocks$.length) {
      $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$ = $series$$37$$.$getCtx$();
      $block$$1_width$$141$$ = new dvt.$Container$($context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$, "itemBlock_" + $series$$37$$.$_fetchStartPos$ + "_" + $series$$37$$.$_fetchEndPos$);
      $block$$1_width$$141$$.$startPos$ = $series$$37$$.$_fetchStartPos$;
      $block$$1_width$$141$$.$endPos$ = $series$$37$$.$_fetchEndPos$;
      var $feelerBlock_i$$inline_4098$$ = new dvt.$Container$($context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$, "feelers");
      $block$$1_width$$141$$.$addChild$($feelerBlock_i$$inline_4098$$);
      $block$$1_width$$141$$.$feelers$ = $feelerBlock_i$$inline_4098$$;
      $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$ = new dvt.$Container$($context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$, "durations");
      $block$$1_width$$141$$.$addChild$($context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$);
      $block$$1_width$$141$$.$durations$ = $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$;
      $series$$37$$.$_canvas$.$addChild$($block$$1_width$$141$$);
      $series$$37$$.$_blocks$.push($block$$1_width$$141$$);
    } else {
      $block$$1_width$$141$$ = $series$$37$$.$_blocks$[0];
    }
    $series$$37$$.$prepareDurations$($series$$37$$.$_items$);
    $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$ = $series$$37$$.$_items$;
    $series$$37$$.$isVertical$() ? $series$$37$$.$_initialSpacing$ = 20 * (0 < $series$$37$$.$_maxDurationSize$ ? 1 : 0) + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$37$$.$_maxDurationSize$ : $series$$37$$.$_initialSpacing$ = 20 + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$37$$.$_maxDurationSize$;
    for ($feelerBlock_i$$inline_4098$$ = 0;$feelerBlock_i$$inline_4098$$ < $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$.length;$feelerBlock_i$$inline_4098$$++) {
      var $item$$inline_4099$$ = $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$[$feelerBlock_i$$inline_4098$$], $loc$$inline_4100$$ = $DvtTimeUtils$$.$getDatePosition$($series$$37$$.$_start$, $series$$37$$.$_end$, $item$$inline_4099$$.$_startTime$, $series$$37$$.$_length$), $endTime$$inline_4101_span$$inline_4102$$ = $item$$inline_4099$$.$_endTime$;
      $endTime$$inline_4101_span$$inline_4102$$ && $endTime$$inline_4101_span$$inline_4102$$ != $item$$inline_4099$$.$_startTime$ && ($endTime$$inline_4101_span$$inline_4102$$ = $DvtTimeUtils$$.$getDatePosition$($series$$37$$.$_start$, $series$$37$$.$_end$, $endTime$$inline_4101_span$$inline_4102$$, $series$$37$$.$_length$) - $loc$$inline_4100$$, $loc$$inline_4100$$ += Math.min($DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), $endTime$$inline_4101_span$$inline_4102$$ / 2));
      $item$$inline_4099$$.$_loc$ = $loc$$inline_4100$$;
    }
    for ($feelerBlock_i$$inline_4098$$ = 0;$feelerBlock_i$$inline_4098$$ < $series$$37$$.$_items$.length;$feelerBlock_i$$inline_4098$$++) {
      $item$$inline_4099$$ = $series$$37$$.$_items$[$feelerBlock_i$$inline_4098$$], $loc$$inline_4100$$ = $DvtTimeUtils$$.$getDatePosition$($series$$37$$.$_start$, $series$$37$$.$_end$, $item$$inline_4099$$.$_startTime$, $series$$37$$.$_length$), $loc$$inline_4100$$ < $series$$37$$.$_fetchStartPos$ || $loc$$inline_4100$$ > $series$$37$$.$_fetchEndPos$ || $DvtTimelineSeriesItemRenderer$$.$initializeItem$($item$$inline_4099$$, $series$$37$$, $feelerBlock_i$$inline_4098$$);
    }
    $series$$37$$.$_isInitialRender$ ? ($series$$37$$.$_frAnimationElems$ = $series$$37$$.$_isIRAnimationEnabled$ ? [] : null, $series$$37$$.$_mvAnimator$ = null, $series$$37$$.$_rmAnimationElems$ = null) : $series$$37$$.$_allowUpdates$ && $series$$37$$.$_isDCAnimationEnabled$ ? ($series$$37$$.$_frAnimationElems$ = [], $series$$37$$.$_mvAnimator$ = new dvt.$Animator$($series$$37$$.$getCtx$(), $DvtTimelineStyleUtils$$.$getAnimationDuration$($series$$37$$.$Options$), 0, dvt.$Easing$.$cubicInOut$), 
    $series$$37$$.$_rmAnimationElems$ = []) : ($series$$37$$.$_frAnimationElems$ = null, $series$$37$$.$_mvAnimator$ = null, $series$$37$$.$_rmAnimationElems$ = null);
    $series$$37$$.$_hasMvAnimations$ = !1;
    $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$ = Math.max(0, $series$$37$$.$_maxOverflowValue$ - $series$$37$$.$_size$);
    $series$$37$$.$_overflowOffset$ = $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$;
    $DvtTimelineSeriesRenderer$$.$_adjustBackground$($series$$37$$, $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$);
    $series$$37$$.$_oldItems$ && $DvtTimelineSeriesRenderer$$.$_removeItems$($series$$37$$.$_oldItems$, $series$$37$$, $block$$1_width$$141$$, $series$$37$$.$_rmAnimationElems$);
    $series$$37$$.$_oldItems$ = null;
    $series$$37$$.$isVertical$() && $block$$1_width$$141$$.$feelers$.$removeChildren$();
    $DvtTimelineSeriesRenderer$$.$_renderItems$($series$$37$$.$_items$, $series$$37$$, $block$$1_width$$141$$, $series$$37$$.$_fetchStartPos$, $series$$37$$.$_fetchEndPos$, $context$$425_durationBlock_height$$117_items$$inline_4097_overflowOffset$$7$$, $series$$37$$.$_frAnimationElems$, $series$$37$$.$_mvAnimator$);
    $DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($series$$37$$);
    $DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($series$$37$$);
  }
};
$DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$ = function $$DvtTimelineSeriesRenderer$$$$updateSeriesForZoom$$($series$$38$$) {
  $DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$($series$$38$$.$_items$, $series$$38$$);
  $DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($series$$38$$);
  $DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($series$$38$$);
};
$DvtTimelineSeriesRenderer$$.$_renderBackground$ = function $$DvtTimelineSeriesRenderer$$$$_renderBackground$$($series$$39$$, $width$$142$$, $height$$118$$) {
  if ($series$$39$$.$_background$) {
    var $addBackground$$ = !1;
    $series$$39$$.$_background$.$setWidth$($width$$142$$);
    $series$$39$$.$_background$.$setHeight$($height$$118$$);
  } else {
    $addBackground$$ = !0, $series$$39$$.$_background$ = new dvt.Rect($series$$39$$.$getCtx$(), 0, 0, $width$$142$$, $height$$118$$, "bg");
  }
  $series$$39$$.$_background$.$setCSSStyle$($series$$39$$.$_style$);
  $series$$39$$.$_background$.$setPixelHinting$();
  $series$$39$$.$_background$.setCursor("move");
  $addBackground$$ && $series$$39$$.$addChild$($series$$39$$.$_background$);
};
$DvtTimelineSeriesRenderer$$.$_adjustBackground$ = function $$DvtTimelineSeriesRenderer$$$$_adjustBackground$$($series$$40$$, $overflowOffset$$8$$) {
  var $isRTL$$58$$ = dvt.$Agent$.$isRightToLeft$($series$$40$$.$getCtx$());
  0 < $overflowOffset$$8$$ && ($series$$40$$.$isVertical$() ? $series$$40$$.$_background$.$setWidth$($series$$40$$.$_maxOverflowValue$) : $series$$40$$.$_background$.$setHeight$($series$$40$$.$_maxOverflowValue$));
  if ($series$$40$$.$isVertical$()) {
    if (!$series$$40$$.$_isInverted$ && !$isRTL$$58$$ || $series$$40$$.$_isInverted$ && $isRTL$$58$$) {
      $series$$40$$.$_background$.$setTranslateX$(-$overflowOffset$$8$$), null != $series$$40$$.$_canvas$ && $series$$40$$.$_canvas$.$setTranslateX$(0 - $overflowOffset$$8$$);
    }
  } else {
    $series$$40$$.$_isInverted$ || ($series$$40$$.$_background$.$setTranslateY$(-$overflowOffset$$8$$), null != $series$$40$$.$_canvas$ && $series$$40$$.$_canvas$.$setTranslateY$(0 - $overflowOffset$$8$$));
  }
};
$DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineSeriesRenderer$$$$_renderScrollableCanvas$$($series$$41$$) {
  $series$$41$$.$_canvas$ ? ($series$$41$$.$_canvasOffsetX$ = $series$$41$$.$_canvas$.$getTranslateX$(), $series$$41$$.$_canvasOffsetY$ = $series$$41$$.$_canvas$.$getTranslateY$(), $series$$41$$.$_canvas$.$setTranslateX$(0), $series$$41$$.$_canvas$.$setTranslateY$(0)) : ($series$$41$$.$_canvas$ = new dvt.$Container$($series$$41$$.$getCtx$(), "canvas"), $series$$41$$.$addChild$($series$$41$$.$_canvas$));
};
$DvtTimelineSeriesRenderer$$.$_renderItems$ = function $$DvtTimelineSeriesRenderer$$$$_renderItems$$($items$$40$$, $series$$42$$, $container$$190$$, $startPos$$8$$, $endPos$$7$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$) {
  for (var $i$$664$$ = 0;$i$$664$$ < $items$$40$$.length;$i$$664$$++) {
    var $item$$86$$ = $items$$40$$[$i$$664$$], $loc$$6$$ = $DvtTimeUtils$$.$getDatePosition$($series$$42$$.$_start$, $series$$42$$.$_end$, $item$$86$$.$_startTime$, $series$$42$$.$_length$);
    $loc$$6$$ < $startPos$$8$$ || $loc$$6$$ > $endPos$$7$$ || $DvtTimelineSeriesItemRenderer$$.$renderItem$($item$$86$$, $series$$42$$, $container$$190$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$);
  }
  if ($DvtTimeUtils$$.$supportsTouch$()) {
    for ($i$$664$$ = 0;$i$$664$$ < $items$$40$$.length - 1;$i$$664$$++) {
      $item$$86$$ = $items$$40$$[$i$$664$$], $item$$86$$.$_displayable$.$_setAriaProperty$("flowto", "_bt_" + $items$$40$$[$i$$664$$ + 1].getId());
    }
  }
  $DvtTimelineSeriesRenderer$$.$_renderDurations$($items$$40$$, $series$$42$$, $container$$190$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$);
};
$DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$ = function $$DvtTimelineSeriesRenderer$$$$_updateItemsForZoom$$($items$$41$$, $series$$43$$) {
  if (null != $items$$41$$ && 0 != $items$$41$$.length) {
    var $endPos$$8_i$$665$$ = $series$$43$$.$_fetchEndPos$, $block$$2_item$$87$$ = $series$$43$$.$_blocks$[0];
    $block$$2_item$$87$$.$startPos$ = $series$$43$$.$_fetchStartPos$;
    $block$$2_item$$87$$.$endPos$ = $endPos$$8_i$$665$$;
    $series$$43$$.$isVertical$() ? $series$$43$$.$_initialSpacing$ = 20 * (0 < $series$$43$$.$_maxDurationSize$ ? 1 : 0) + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$43$$.$_maxDurationSize$ : $series$$43$$.$_initialSpacing$ = 20 + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$43$$.$_maxDurationSize$;
    for ($endPos$$8_i$$665$$ = 0;$endPos$$8_i$$665$$ < $items$$41$$.length;$endPos$$8_i$$665$$++) {
      var $block$$2_item$$87$$ = $items$$41$$[$endPos$$8_i$$665$$], $span$$1_startTime$$20$$ = $block$$2_item$$87$$.$_startTime$, $itemTime_loc$$7_overflowOffset$$10$$ = $DvtTimeUtils$$.$getDatePosition$($series$$43$$.$_start$, $series$$43$$.$_end$, $span$$1_startTime$$20$$, $series$$43$$.$_length$), $endTime$$18$$ = $block$$2_item$$87$$.$_endTime$;
      $endTime$$18$$ && $endTime$$18$$ != $span$$1_startTime$$20$$ && ($span$$1_startTime$$20$$ = $DvtTimeUtils$$.$getDatePosition$($series$$43$$.$_start$, $series$$43$$.$_end$, $endTime$$18$$, $series$$43$$.$_length$) - $itemTime_loc$$7_overflowOffset$$10$$, $itemTime_loc$$7_overflowOffset$$10$$ += Math.min($DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), $span$$1_startTime$$20$$ / 2));
      $block$$2_item$$87$$.$_loc$ = $itemTime_loc$$7_overflowOffset$$10$$;
      $series$$43$$.$_isRandomItemLayout$ || ($block$$2_item$$87$$.$_spacing$ = null);
    }
    for ($endPos$$8_i$$665$$ = 0;$endPos$$8_i$$665$$ < $items$$41$$.length;$endPos$$8_i$$665$$++) {
      $block$$2_item$$87$$ = $items$$41$$[$endPos$$8_i$$665$$], $itemTime_loc$$7_overflowOffset$$10$$ = $block$$2_item$$87$$.$_startTime$, $itemTime_loc$$7_overflowOffset$$10$$ < $series$$43$$.$_start$ || $itemTime_loc$$7_overflowOffset$$10$$ > $series$$43$$.$_end$ || $DvtTimelineSeriesItemRenderer$$.$_updateBubble$($block$$2_item$$87$$, $series$$43$$, $endPos$$8_i$$665$$);
    }
    $itemTime_loc$$7_overflowOffset$$10$$ = Math.max(0, $series$$43$$.$_maxOverflowValue$ - $series$$43$$.$_size$);
    $DvtTimelineSeriesRenderer$$.$_adjustBackground$($series$$43$$, $itemTime_loc$$7_overflowOffset$$10$$);
    for ($endPos$$8_i$$665$$ = 0;$endPos$$8_i$$665$$ < $items$$41$$.length;$endPos$$8_i$$665$$++) {
      $block$$2_item$$87$$ = $items$$41$$[$endPos$$8_i$$665$$], $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($block$$2_item$$87$$, $series$$43$$, $itemTime_loc$$7_overflowOffset$$10$$, null, !1), $DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($block$$2_item$$87$$, $series$$43$$, $itemTime_loc$$7_overflowOffset$$10$$, null), $DvtTimelineSeriesItemRenderer$$.$_updateDuration$($block$$2_item$$87$$, $series$$43$$, $itemTime_loc$$7_overflowOffset$$10$$, null);
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_renderDurations$ = function $$DvtTimelineSeriesRenderer$$$$_renderDurations$$($items$$42$$, $series$$44$$, $container$$191_durationBlock$$1$$, $overflowOffset$$11$$, $frAnimationElems$$3$$, $mvAnimator$$3$$) {
  $container$$191_durationBlock$$1$$ = $container$$191_durationBlock$$1$$.$durations$;
  for (var $i$$666$$ = $series$$44$$.$_maxDurationSize$;0 < $i$$666$$;$i$$666$$--) {
    for (var $j$$104$$ = 0;$j$$104$$ < $items$$42$$.length;$j$$104$$++) {
      var $item$$88$$ = $items$$42$$[$j$$104$$], $startTime$$21$$ = $item$$88$$.$_startTime$, $endTime$$19$$ = $item$$88$$.$_endTime$;
      $endTime$$19$$ && $endTime$$19$$ != $startTime$$21$$ && $i$$666$$ == $item$$88$$.$_durationLevel$ && $DvtTimelineSeriesItemRenderer$$.$renderDuration$($item$$88$$, $series$$44$$, $container$$191_durationBlock$$1$$, $overflowOffset$$11$$, $frAnimationElems$$3$$, $mvAnimator$$3$$);
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTicks$$($series$$45$$) {
  null == $series$$45$$.$_seriesTicks$ ? ($series$$45$$.$_seriesTicks$ = new dvt.$Container$($series$$45$$.$getCtx$()), $series$$45$$.$_canvas$.$addChild$($series$$45$$.$_seriesTicks$)) : ($series$$45$$.$_seriesTicks$.$removeChildren$(), $series$$45$$.$_seriesTicksArray$ = []);
  if ($series$$45$$.$_scale$ && $series$$45$$.$_timeAxis$) {
    var $separatorStyle$$1$$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$());
    if ($series$$45$$.$_axisStyleDefaults$) {
      var $separatorColor$$1$$ = $series$$45$$.$_axisStyleDefaults$.separatorColor;
      $separatorColor$$1$$ && $separatorStyle$$1$$.$parseInlineStyle$("color:" + $separatorColor$$1$$ + ";");
    }
    $series$$45$$.$_separatorStroke$ = new dvt.$SolidStroke$($separatorStyle$$1$$.$getStyle$(dvt.$CSSStyle$.$COLOR$));
    $series$$45$$.$_separatorStroke$.$setStyle$(dvt.$Stroke$.$DASHED$, 3);
    $DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$($series$$45$$, $series$$45$$.$_fetchStartPos$, $series$$45$$.$_fetchEndPos$, $series$$45$$.$_seriesTicks$);
  }
};
$DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_updateSeriesTicks$$($series$$46$$) {
  for (var $isRTL$$59$$ = dvt.$Agent$.$isRightToLeft$($series$$46$$.$getCtx$()), $i$$667$$ = 0;$i$$667$$ < $series$$46$$.$_seriesTicksArray$.length;$i$$667$$++) {
    var $tick$$ = $series$$46$$.$_seriesTicksArray$[$i$$667$$], $pos$$72$$ = !$series$$46$$.$isVertical$() && $isRTL$$59$$ ? $series$$46$$.$_length$ - $DvtTimeUtils$$.$getDatePosition$($series$$46$$.$_start$, $series$$46$$.$_end$, $tick$$.time, $series$$46$$.$_length$) : $DvtTimeUtils$$.$getDatePosition$($series$$46$$.$_start$, $series$$46$$.$_end$, $tick$$.time, $series$$46$$.$_length$);
    $series$$46$$.$isVertical$() ? ($tick$$.$setX1$(0), $tick$$.$setY1$($pos$$72$$), $tick$$.$setX2$($series$$46$$.$_maxOverflowValue$), $tick$$.$setY2$($pos$$72$$)) : ($tick$$.$setX1$($pos$$72$$), $tick$$.$setY1$(0), $tick$$.$setX2$($pos$$72$$), $tick$$.$setY2$($series$$46$$.$_maxOverflowValue$));
  }
};
$DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTimeAxis$$($series$$47$$, $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$, $endPos$$9_i$$668$$, $container$$192$$) {
  var $isRTL$$60$$ = dvt.$Agent$.$isRightToLeft$($series$$47$$.$getCtx$()), $dates$$5$$, $start$$47$$ = $series$$47$$.$_start$, $end$$29$$ = $series$$47$$.$_end$;
  if ($series$$47$$.$_customTimeScales$ && $series$$47$$.$_customTimeScales$[$series$$47$$.$_scale$]) {
    $dates$$5$$ = $series$$47$$.$_customTimeScales$[$series$$47$$.$_scale$].times;
  } else {
    if ($series$$47$$.$_customFormatScales$ && $series$$47$$.$_customFormatScales$[$series$$47$$.$_scale$]) {
      $dates$$5$$ = $series$$47$$.$_customFormatScales$[$series$$47$$.$_scale$].times;
    } else {
      $dates$$5$$ = [];
      $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ = $DvtTimeUtils$$.$getPositionDate$($start$$47$$, $end$$29$$, $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$, $series$$47$$.$_length$);
      var $currentDate$$2_currentTime$$2$$ = $series$$47$$.$_timeAxis$.$adjustDate$($currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$);
      $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ = $DvtTimeUtils$$.$getDatePosition$($start$$47$$, $end$$29$$, $currentDate$$2_currentTime$$2$$, $series$$47$$.$_length$);
      for ($dates$$5$$.push($currentDate$$2_currentTime$$2$$.getTime());$currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ < $endPos$$9_i$$668$$;) {
        $currentDate$$2_currentTime$$2$$ = $series$$47$$.$_timeAxis$.$getNextDate$($currentDate$$2_currentTime$$2$$.getTime()), $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ = $DvtTimeUtils$$.$getDatePosition$($start$$47$$, $end$$29$$, $currentDate$$2_currentTime$$2$$, $series$$47$$.$_length$), $dates$$5$$.push($currentDate$$2_currentTime$$2$$.getTime());
      }
    }
  }
  for ($endPos$$9_i$$668$$ = 0;$endPos$$9_i$$668$$ < $dates$$5$$.length - 1;$endPos$$9_i$$668$$++) {
    $currentDate$$2_currentTime$$2$$ = $dates$$5$$[$endPos$$9_i$$668$$];
    $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ = $DvtTimeUtils$$.$getDatePosition$($start$$47$$, $end$$29$$, $currentDate$$2_currentTime$$2$$, $series$$47$$.$_length$);
    var $pos$$73_y2$$30$$ = !$series$$47$$.$isVertical$() && $isRTL$$60$$ ? $series$$47$$.$_length$ - $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ : $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$;
    if ($series$$47$$.$isVertical$()) {
      var $x1$$38$$ = 0, $y1$$31$$ = $pos$$73_y2$$30$$, $x2$$36$$ = $series$$47$$.$_maxOverflowValue$
    } else {
      $x1$$38$$ = $pos$$73_y2$$30$$, $y1$$31$$ = 0, $x2$$36$$ = $pos$$73_y2$$30$$, $pos$$73_y2$$30$$ = $series$$47$$.$_maxOverflowValue$;
    }
    $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ = $series$$47$$.$addTick$($container$$192$$, $x1$$38$$, $x2$$36$$, $y1$$31$$, $pos$$73_y2$$30$$, $series$$47$$.$_separatorStroke$, "o_tick" + $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$);
    $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$.time = $currentDate$$2_currentTime$$2$$;
    $series$$47$$.$_seriesTicksArray$.push($currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$);
  }
};
$DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_renderReferenceObjects$$($series$$48$$, $container$$193$$) {
  var $context$$429$$ = $series$$48$$.$getCtx$(), $isRTL$$61$$ = dvt.$Agent$.$isRightToLeft$($context$$429$$);
  null == $series$$48$$.$_refObjectsContainer$ && ($series$$48$$.$_refObjectsContainer$ = new dvt.$Container$($context$$429$$), $container$$193$$.$addChild$($series$$48$$.$_refObjectsContainer$));
  var $referenceObjects$$4$$ = $series$$48$$.$_referenceObjects$;
  if ($referenceObjects$$4$$) {
    for (var $maxRefObjects$$ = Math.min(1, $referenceObjects$$4$$.length), $i$$669$$ = 0;$i$$669$$ < $maxRefObjects$$;$i$$669$$++) {
      var $refObject$$ = $referenceObjects$$4$$[$i$$669$$];
      if ($refObject$$) {
        var $pos$$74_ref$$2$$ = $DvtTimeUtils$$.$getDatePosition$($series$$48$$.$_start$, $series$$48$$.$_end$, $refObject$$, $series$$48$$.$_length$);
        if (0 == $series$$48$$.$_renderedReferenceObjects$.length) {
          $series$$48$$.$isVertical$() ? $pos$$74_ref$$2$$ = new dvt.$Line$($context$$429$$, 0, $pos$$74_ref$$2$$, $series$$48$$.$_maxOverflowValue$, $pos$$74_ref$$2$$, "zoomOrder[i]") : ($isRTL$$61$$ && ($pos$$74_ref$$2$$ = $series$$48$$.$_length$ - $pos$$74_ref$$2$$), $pos$$74_ref$$2$$ = new dvt.$Line$($context$$429$$, $pos$$74_ref$$2$$, 0, $pos$$74_ref$$2$$, $series$$48$$.$_maxOverflowValue$, "zoomOrder[i]"));
          var $referenceObjectStroke$$ = new dvt.$SolidStroke$($DvtTimelineStyleUtils$$.$getReferenceObjectColor$($series$$48$$.$Options$));
          $pos$$74_ref$$2$$.$setStroke$($referenceObjectStroke$$);
          $pos$$74_ref$$2$$.$setPixelHinting$();
          $pos$$74_ref$$2$$.$date$ = $refObject$$;
          $series$$48$$.$_refObjectsContainer$.$addChild$($pos$$74_ref$$2$$);
          $series$$48$$.$_renderedReferenceObjects$[$i$$669$$] = $pos$$74_ref$$2$$;
        }
      }
    }
  } else {
    $series$$48$$.$_refObjectsContainer$.$removeChildren$(), $series$$48$$.$_renderedReferenceObjects$ = [];
  }
};
$DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_updateReferenceObjects$$($series$$49$$) {
  for (var $isRTL$$62$$ = dvt.$Agent$.$isRightToLeft$($series$$49$$.$getCtx$()), $i$$670$$ = 0;$i$$670$$ < $series$$49$$.$_renderedReferenceObjects$.length;$i$$670$$++) {
    var $ref$$3$$ = $series$$49$$.$_renderedReferenceObjects$[$i$$670$$], $pos$$75$$ = $DvtTimeUtils$$.$getDatePosition$($series$$49$$.$_start$, $series$$49$$.$_end$, $ref$$3$$.$date$, $series$$49$$.$_length$);
    $series$$49$$.$isVertical$() ? ($ref$$3$$.$setX1$(0), $ref$$3$$.$setY1$($pos$$75$$), $ref$$3$$.$setX2$($series$$49$$.$_maxOverflowValue$), $ref$$3$$.$setY2$($pos$$75$$)) : ($isRTL$$62$$ && ($pos$$75$$ = $series$$49$$.$_length$ - $pos$$75$$), $ref$$3$$.$setX1$($pos$$75$$), $ref$$3$$.$setY1$(0), $ref$$3$$.$setX2$($pos$$75$$), $ref$$3$$.$setY2$($series$$49$$.$_maxOverflowValue$));
  }
};
$DvtTimelineSeriesRenderer$$.$_removeItems$ = function $$DvtTimelineSeriesRenderer$$$$_removeItems$$($items$$43$$, $series$$50$$, $container$$194$$, $animationElems$$3_i$$671$$) {
  if ($animationElems$$3_i$$671$$) {
    $DvtTimelineSeriesRenderer$$.$_animateItemRemoval$($items$$43$$, $series$$50$$, $animationElems$$3_i$$671$$);
  } else {
    for ($animationElems$$3_i$$671$$ = 0;$animationElems$$3_i$$671$$ < $items$$43$$.length;$animationElems$$3_i$$671$$++) {
      var $item$$89$$ = $items$$43$$[$animationElems$$3_i$$671$$];
      $container$$194$$.removeChild($item$$89$$.$_displayable$);
      $series$$50$$.$isVertical$() || $container$$194$$.$feelers$.removeChild($item$$89$$.$_feeler$);
      var $startTime$$22$$ = $item$$89$$.$_startTime$, $endTime$$20$$ = $item$$89$$.$_endTime$;
      $endTime$$20$$ && $endTime$$20$$ != $startTime$$22$$ && $container$$194$$.$durations$.removeChild($item$$89$$.$_durationBar$);
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_animateItemRemoval$ = function $$DvtTimelineSeriesRenderer$$$$_animateItemRemoval$$($items$$44$$, $series$$51$$, $animationElems$$4$$) {
  for (var $i$$672$$ = 0;$i$$672$$ < $items$$44$$.length;$i$$672$$++) {
    var $durationBar$$2_item$$90$$ = $items$$44$$[$i$$672$$], $bubble$$3_feeler$$6_startTime$$23$$ = $durationBar$$2_item$$90$$.$_displayable$;
    $series$$51$$.$isVertical$() ? $bubble$$3_feeler$$6_startTime$$23$$.$setTranslateX$($bubble$$3_feeler$$6_startTime$$23$$.$getTranslateX$() + $series$$51$$.$_canvasOffsetX$ + $series$$51$$.$_overflowOffset$) : $bubble$$3_feeler$$6_startTime$$23$$.$setTranslateY$($bubble$$3_feeler$$6_startTime$$23$$.$getTranslateY$() + $series$$51$$.$_canvasOffsetY$ + $series$$51$$.$_overflowOffset$);
    $animationElems$$4$$.push($bubble$$3_feeler$$6_startTime$$23$$);
    $series$$51$$.$isVertical$() || ($bubble$$3_feeler$$6_startTime$$23$$ = $durationBar$$2_item$$90$$.$_feeler$, $bubble$$3_feeler$$6_startTime$$23$$.$setTranslateY$($bubble$$3_feeler$$6_startTime$$23$$.$getTranslateY$() + $series$$51$$.$_canvasOffsetY$ + $series$$51$$.$_overflowOffset$), $animationElems$$4$$.push($bubble$$3_feeler$$6_startTime$$23$$));
    var $bubble$$3_feeler$$6_startTime$$23$$ = $durationBar$$2_item$$90$$.$_startTime$, $endTime$$21$$ = $durationBar$$2_item$$90$$.$_endTime$;
    $endTime$$21$$ && $endTime$$21$$ != $bubble$$3_feeler$$6_startTime$$23$$ && ($durationBar$$2_item$$90$$ = $durationBar$$2_item$$90$$.$_durationBar$, $series$$51$$.$isVertical$() ? $durationBar$$2_item$$90$$.$setTranslateX$($durationBar$$2_item$$90$$.$getTranslateX$() + $series$$51$$.$_canvasOffsetX$ + $series$$51$$.$_overflowOffset$) : $durationBar$$2_item$$90$$.$setTranslateY$($durationBar$$2_item$$90$$.$getTranslateY$() + $series$$51$$.$_canvasOffsetY$ + $series$$51$$.$_overflowOffset$), $animationElems$$4$$.push($durationBar$$2_item$$90$$));
  }
};

  return dvt;
});
