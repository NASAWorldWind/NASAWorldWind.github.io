/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtAxis', './DvtLegend', './DvtOverview'], function(dvt) {
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

(function($dvt$$2$$) {
  function $DvtSparkChartEventManager$$($dvt$$2$$) {
    this.Init($dvt$$2$$.$getCtx$(), $dvt$$2$$.dispatchEvent, $dvt$$2$$);
    this.$_sparkChart$ = $dvt$$2$$;
  }
  function $DvtSparkChartDefaults$$() {
    this.Init({skyros:$DvtSparkChartDefaults$$.$VERSION_1$, alta:$DvtSparkChartDefaults$$.$SKIN_ALTA$});
  }
  function $DvtSparkChartAutomation$$($dvt$$2$$) {
    this.$_sparkChart$ = $dvt$$2$$;
  }
  function $DvtChartPieLabelUtils$$() {
  }
  function $DvtChartPieLabelInfo$$() {
    this.$_init$();
  }
  function $DvtChartPieRenderUtils$$() {
  }
  function $DvtChartDataChangeFunnelSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeRangeMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeLineArea$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeBar$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChangeAbstract$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDataChange$$($DvtSparkChartEventManager$$) {
    this.$Options$ = $DvtSparkChartEventManager$$.$Options$;
    this.$Peers$ = $DvtSparkChartEventManager$$.$Peers$;
    this.$SeriesStyleArray$ = $DvtSparkChartEventManager$$.$SeriesStyleArray$;
    this.Cache = $DvtSparkChartEventManager$$.Cache;
    this.$pieChart$ = $DvtSparkChartEventManager$$.$pieChart$;
    this.$_optionsCache$ = new $dvt$$2$$.$BaseComponentCache$;
    this.$_cache$ = new $dvt$$2$$.$BaseComponentCache$;
  }
  function $DvtChartAnimOnDC$$() {
  }
  function $DvtChartAnimOnDisplay$$() {
  }
  function $DvtChartPieSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartPie$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
  }
  function $DvtChartFunnelSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$);
  }
  function $DvtChartDataCursor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  }
  function $DvtChartRangeMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$) {
    this.Init($dvt$$2$$);
    this.$_markerSize$ = $DvtChartSeriesEffectUtils$$;
    this.$_isInvisible$ = $DvtChartPieLabelUtils$$;
    this.$_drawPath$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
  }
  function $DvtChartPolarBar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$) {
    this.Init($dvt$$2$$.$getCtx$());
    this.$_axisCoord$ = $DvtSparkChartEventManager$$;
    this.$_availSpace$ = $DvtChartPieLabelUtils$$.clone();
    this.$_bbox$ = null;
    this.$_dataItemGaps$ = $DvtChartStyleUtils$$.$getDataItemGaps$($dvt$$2$$) * $DvtChartPolarBar$$.$_MAX_DATA_ITEM_GAP$;
    this.$_setBarCoords$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$);
  }
  function $DvtChartOverview$$($dvt$$2$$) {
    this.Init($dvt$$2$$.$getCtx$(), $dvt$$2$$.$processEvent$, $dvt$$2$$);
    this.$_parentChart$ = $dvt$$2$$;
    this.$_chart$ = $dvt$$2$$.$overview$ ? $dvt$$2$$.$overview$.$_chart$ : null;
    this.$_id$ = $dvt$$2$$.getId() + "_overview";
  }
  function $DvtChartLineMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, null, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartTooltipUtils$$, null, null, !0);
    $DvtChartSeriesEffectUtils$$ && this.$setStroke$($DvtChartLineMarker$$.$DEFAULT_STROKE$);
  }
  function $DvtChartLineArea$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$) {
    this.Init($dvt$$2$$.$getCtx$());
    this.$_chart$ = $dvt$$2$$;
    this.$_bArea$ = $DvtSparkChartEventManager$$;
    this.$_availSpace$ = $DvtSparkChartDefaults$$;
    this.$_baseline$ = $DvtSparkChartAutomation$$;
    this.$_style$ = $DvtChartTooltipUtils$$;
    this.$_className$ = $DvtChartSeriesEffectUtils$$;
    this.$_fill$ = $DvtChartPieLabelUtils$$;
    this.$_stroke$ = $DvtChartPieRenderUtils$$;
    this.$_type$ = $DvtChartPieLabelInfo$$;
    this.$_baseType$ = $DvtChartDataChangeFunnelSlice$$ ? $DvtChartDataChangeFunnelSlice$$ : $DvtChartPieLabelInfo$$;
    this.$_indicatorMap$ = {};
    this.$setCoords$($DvtChartTypeUtils$$, $DvtChartLineMarker$$);
  }
  function $DvtChartCoord$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    this.x = $dvt$$2$$;
    this.$y1$ = $DvtSparkChartEventManager$$;
    this.$y2$ = $DvtSparkChartDefaults$$;
    this.$groupIndex$ = $DvtSparkChartAutomation$$;
    this.group = $DvtChartTooltipUtils$$;
    this.$filtered$ = $DvtChartSeriesEffectUtils$$;
  }
  function $DvtChartCandlestick$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$) {
    this.Init($dvt$$2$$);
    $DvtSparkChartDefaults$$ = Math.max(2 * Math.round($DvtSparkChartDefaults$$ / 2), 1);
    var $DvtChartPieRenderUtils$$ = Math.min(2 * Math.ceil($DvtChartCandlestick$$.$_BAR_WIDTH$ * $DvtSparkChartDefaults$$ / 2), $DvtSparkChartDefaults$$), $DvtChartPieLabelInfo$$ = Math.round($DvtSparkChartEventManager$$) - $DvtSparkChartDefaults$$ / 2;
    $DvtSparkChartDefaults$$ = $DvtChartPieLabelInfo$$ + $DvtSparkChartDefaults$$;
    null != $DvtChartSeriesEffectUtils$$ && null != $DvtChartPieLabelUtils$$ && ($DvtSparkChartEventManager$$ = Math.round($DvtSparkChartEventManager$$) - $DvtChartPieRenderUtils$$ / 2, $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$ + $DvtChartPieRenderUtils$$, this.$_rangeShape$ = new $DvtChartSelectableRectangularPolygon$$($dvt$$2$$, [$DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$, 
    $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$]), this.$addChild$(this.$_rangeShape$));
    this.$_changeShape$ = new $DvtChartSelectableRectangularPolygon$$($dvt$$2$$, [$DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelInfo$$, $DvtChartTooltipUtils$$]);
    this.$addChild$(this.$_changeShape$);
    this.$setPixelHinting$();
  }
  function $DvtChartBar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    this.Init($dvt$$2$$.$getCtx$());
    this.$_bHoriz$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$);
    this.$_bStacked$ = $DvtChartTypeUtils$$.$isStacked$($dvt$$2$$);
    this.$_barGapRatio$ = $DvtChartStyleUtils$$.$getBarGapRatio$($dvt$$2$$);
    this.$_dataItemGaps$ = $DvtChartStyleUtils$$.$getDataItemGaps$($dvt$$2$$);
    this.$_axisCoord$ = $DvtSparkChartEventManager$$;
    this.$_setBarCoords$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, !0);
  }
  function $DvtChartAxis$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  }
  function $DvtChartSelectableRectangularPolygon$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_x1$ = Math.min($DvtSparkChartEventManager$$[0], $DvtSparkChartEventManager$$[4]);
    this.$_x2$ = Math.max($DvtSparkChartEventManager$$[0], $DvtSparkChartEventManager$$[4]);
    this.$_y1$ = Math.min($DvtSparkChartEventManager$$[1], $DvtSparkChartEventManager$$[5]);
    this.$_y2$ = Math.max($DvtSparkChartEventManager$$[1], $DvtSparkChartEventManager$$[5]);
    this.Init($dvt$$2$$, [this.$_x1$, this.$_y1$, this.$_x2$, this.$_y1$, this.$_x2$, this.$_y2$, this.$_x1$, this.$_y2$], $DvtSparkChartDefaults$$);
  }
  function $DvtChartSelectableWedge$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$, $DvtChartTypeUtils$$) {
    this.Init($dvt$$2$$, null, $DvtChartTypeUtils$$);
    this.$setWedgeParams$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$);
  }
  function $DvtChartDataCursorHandler$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartDefaults$$() {
    this.Init({skyros:$DvtChartDefaults$$.$VERSION_1$, alta:$DvtChartDefaults$$.$SKIN_ALTA$, next:$DvtChartDefaults$$.$SKIN_NEXT$});
  }
  function $DvtChartDataItem$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.id = $dvt$$2$$;
    this.series = $DvtSparkChartEventManager$$;
    this.group = $DvtSparkChartDefaults$$;
  }
  function $DvtChartRefObjPeer$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
  }
  function $DvtChartObjPeer$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
  }
  function $DvtChartKeyboardHandler$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$);
  }
  function $DvtChartEventManager$$($DvtSparkChartEventManager$$) {
    $DvtChartEventManager$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
    this.$_chart$ = $DvtSparkChartEventManager$$;
    this.$_dragMode$ = null;
    this.$_dragButtonsVisible$ = $dvt$$2$$.$Agent$.$isTouchDevice$();
    this.$_stageAbsolutePosition$ = this.$_marqueeSelectHandler$ = this.$_marqueeZoomHandler$ = this.$_panZoomHandler$ = this.$_dataCursorHandler$ = this.$selectButton$ = this.$zoomButton$ = this.$panButton$ = null;
  }
  function $DvtChartAutomation$$($dvt$$2$$) {
    this.$_chart$ = $dvt$$2$$;
    this.$_options$ = this.$_chart$.$getOptions$();
    this.$_legend$ = this.$_chart$.$legend$;
    this.$_xAxis$ = this.$_chart$.$xAxis$;
    this.$_yAxis$ = this.$_chart$.$yAxis$;
    this.$_y2Axis$ = this.$_chart$.$y2Axis$;
    this.$_legendAutomation$ = this.$_legend$ ? this.$_legend$.$getAutomation$() : null;
    this.$_xAxisAutomation$ = this.$_xAxis$ ? this.$_xAxis$.$getAutomation$() : null;
    this.$_yAxisAutomation$ = this.$_yAxis$ ? this.$_yAxis$.$getAutomation$() : null;
    this.$_y2AxisAutomation$ = this.$_y2Axis$ ? this.$_y2Axis$.$getAutomation$() : null;
  }
  $dvt$$2$$.$Chart$ = function $$dvt$$2$$$$Chart$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($dvt$$2$$.$Chart$, $dvt$$2$$.$BaseComponent$);
  $dvt$$2$$.$Chart$.newInstance = function $$dvt$$2$$$$Chart$$newInstance$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return new $dvt$$2$$.$Chart$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
  };
  $dvt$$2$$.$Chart$.$getDefaults$ = function $$dvt$$2$$$$Chart$$$getDefaults$$($dvt$$2$$) {
    return (new $DvtChartDefaults$$).$getDefaults$($dvt$$2$$);
  };
  $dvt$$2$$.$Chart$.prototype.Init = function $$dvt$$2$$$$Chart$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$.$Chart$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    this.$Defaults$ = new $DvtChartDefaults$$;
    this.$EventManager$ = new $DvtChartEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$EventManager$));
    this.setId("chart1000" + Math.floor(1E9 * Math.random()));
    this.$pieCenterDiv$ = this.$pieChart$ = this.$dragButtons$ = this.$yScrollbar$ = this.$xScrollbar$ = this.$overview$ = this.$y2Axis$ = this.$yAxis$ = this.$xAxis$ = this.$legend$ = null;
    this.$Peers$ = [];
    this.$SeriesStyleArray$ = [];
    this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0;
    this.$_rawOptions$ = this.$_dataLabels$ = null;
  };
  $dvt$$2$$.$Chart$.prototype.$GetComponentDescription$ = function $$dvt$$2$$$$Chart$$$$GetComponentDescription$$() {
    var $DvtSparkChartEventManager$$ = this.$getOptions$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartEventManager$$, "componentName", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "CHART"), $DvtSparkChartAutomation$$ = "", $DvtChartTooltipUtils$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER");
    $DvtSparkChartEventManager$$.title.text && ($DvtSparkChartAutomation$$ += this.$Options$.title.text, $DvtSparkChartEventManager$$.subtitle.text && ($DvtSparkChartAutomation$$ += $DvtChartTooltipUtils$$ + this.$Options$.subtitle.text));
    $DvtSparkChartEventManager$$.footnote.text && ($DvtSparkChartAutomation$$ = 0 == $DvtSparkChartAutomation$$.length ? this.$Options$.footnote.text : $DvtSparkChartAutomation$$.concat($DvtChartTooltipUtils$$, this.$Options$.footnote.text));
    return 0 < $DvtSparkChartAutomation$$.length ? $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartEventManager$$, "labelAndValue", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$]) : $DvtSparkChartDefaults$$;
  };
  $dvt$$2$$.$Chart$.prototype.$SetOptions$ = function $$dvt$$2$$$$Chart$$$$SetOptions$$($DvtSparkChartEventManager$$) {
    if ($DvtSparkChartEventManager$$) {
      if (this.$_rawOptions$ = $DvtSparkChartEventManager$$, this.$Options$ = this.$Defaults$.$calcOptions$($DvtSparkChartEventManager$$), "horizontalBar" == this.$Options$.type && (this.$Options$.type = "bar", this.$Options$.orientation = "horizontal"), this.$_optionsCache$.$clearCache$(), $DvtChartDataUtils$$.$processDataObject$(this), !$dvt$$2$$.$Agent$.$isEnvironmentBrowser$() || $DvtChartDataUtils$$.$hasData$(this) && 5E3 < $DvtChartDataUtils$$.$getSeriesCount$(this) * $DvtChartDataUtils$$.$getGroupCount$(this)) {
        this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none";
      }
    } else {
      this.$Options$ || (this.$Options$ = this.$GetDefaults$());
    }
    $DvtSparkChartEventManager$$ = this.$Options$.selectionMode;
    this.$_selectionHandler$ = "single" == $DvtSparkChartEventManager$$ ? new $dvt$$2$$.$SelectionHandler$($dvt$$2$$.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $DvtSparkChartEventManager$$ ? new $dvt$$2$$.$SelectionHandler$($dvt$$2$$.$SelectionHandler$.$TYPE_MULTIPLE$) : null;
    this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
    if ($DvtSparkChartEventManager$$ = this.$Options$._spb) {
      this.$_popupBehaviors$ = {};
      for (var $DvtSparkChartDefaults$$ in $DvtSparkChartEventManager$$) {
        for (var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartTooltipUtils$$++) {
          this.$_popupBehaviors$[$DvtSparkChartDefaults$$] || (this.$_popupBehaviors$[$DvtSparkChartDefaults$$] = []);
          var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$];
          this.$_popupBehaviors$[$DvtSparkChartDefaults$$].push(new $dvt$$2$$.$ShowPopupBehavior$($DvtChartSeriesEffectUtils$$.popupId, $DvtChartSeriesEffectUtils$$.triggerType, $DvtChartSeriesEffectUtils$$.alignId, $DvtChartSeriesEffectUtils$$.align));
        }
      }
    }
  };
  $dvt$$2$$.$Chart$.prototype.$render$ = function $$dvt$$2$$$$Chart$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$_cache$.$clearCache$();
    var $DvtChartTooltipUtils$$ = this.$getCtx$(), $DvtChartSeriesEffectUtils$$ = this.$Options$ ? this.$Options$.animationOnDataChange : "none", $DvtChartPieLabelUtils$$ = "none" != $DvtChartSeriesEffectUtils$$ ? new $DvtChartDataChange$$(this) : null, $DvtChartPieRenderUtils$$ = this.$__cacheChartFocus$();
    this.$_container$ && this.$__cleanUp$();
    this.$SetOptions$($DvtSparkChartEventManager$$);
    isNaN($DvtSparkChartDefaults$$) || isNaN($DvtSparkChartAutomation$$) || (this.$Width$ = $DvtSparkChartDefaults$$, this.$Height$ = $DvtSparkChartAutomation$$);
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Container$($DvtChartTooltipUtils$$);
    this.$addChild$($DvtSparkChartDefaults$$);
    $DvtChartRenderer$$.$render$(this, $DvtSparkChartDefaults$$, new $dvt$$2$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    $DvtChartTypeUtils$$.$isSpark$(this) && this.$EventManager$.$removeListeners$(this);
    this.$StopAnimation$();
    var $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getAnimationOnDisplay$(this);
    $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getAnimationDuration$(this);
    var $DvtChartDataChangeFunnelSlice$$ = new $dvt$$2$$.$Rectangle$(0, 0, this.$Width$, this.$Height$), $DvtChartLineMarker$$ = !1;
    this.$_container$ ? "none" != $DvtChartSeriesEffectUtils$$ && $DvtSparkChartEventManager$$ && ((this.$Animation$ = $dvt$$2$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, this.$_container$, $DvtSparkChartDefaults$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$)) ? $DvtChartLineMarker$$ = !0 : "auto" == $DvtChartSeriesEffectUtils$$ && this.$getPlotArea$() && ($DvtSparkChartEventManager$$ = this.$_plotAreaSpace$, this.$_delContainer$ = 
    $DvtChartPlotAreaRenderer$$.$createClippedGroup$(this, this.$_container$, new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartEventManager$$.$w$, $DvtSparkChartEventManager$$.$h$)), this.$Animation$ = $DvtChartAnimOnDC$$.$createAnimation$($DvtChartPieLabelUtils$$, this, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$, this.$_delContainer$), 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().$addChild$(this.$_delContainer$))) : "none" != $DvtChartPieLabelInfo$$ && (this.$Animation$ = 
    $dvt$$2$$.$BlackBoxAnimationHandler$.$getInAnimation$($DvtChartTooltipUtils$$, $DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$), this.$Animation$ || "auto" != $DvtChartPieLabelInfo$$ || (this.$Animation$ = $DvtChartAnimOnDisplay$$.$createAnimation$(this, $DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$)));
    this.$Animation$ && (this.$EventManager$.$removeListeners$(this), $dvt$$2$$.$Playable$.$appendOnEnd$(this.$Animation$, this.$_onAnimationEnd$, this), this.$Animation$.play());
    $DvtChartLineMarker$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$(), this.$_container$ = null);
    this.$_container$ = $DvtSparkChartDefaults$$;
    this.$_dataCursor$ = $DvtChartRenderer$$.$renderDataCursor$(this);
    this.$UpdateAriaAttributes$();
    this.$__restoreChartFocus$($DvtChartPieRenderUtils$$);
    this.$Animation$ || this.$RenderComplete$();
  };
  $dvt$$2$$.$Chart$.prototype.$__cleanUp$ = function $$dvt$$2$$$$Chart$$$$__cleanUp$$() {
    this.$_dataCursor$ && (this.removeChild(this.$_dataCursor$), this.$_dataCursor$ = null);
    this.$EventManager$ && this.$EventManager$.$hideHoverFeedback$();
    this.$pieCenterDiv$ && (this.$getCtx$().$_parentDiv$.removeChild(this.$pieCenterDiv$), this.$pieCenterDiv$ = null);
    this.$Peers$ = [];
    this.$yScrollbar$ = this.$xScrollbar$ = null;
    this.$dragButtons$ && (this.removeChild(this.$dragButtons$), this.$dragButtons$.$destroy$(), this.$dragButtons$ = null, this.$EventManager$.$panButton$ = null, this.$EventManager$.$zoomButton$ = null, this.$EventManager$.$selectButton$ = null);
    this.$_dataLabels$ = this.$_areaContainer$ = this.$_plotArea$ = null;
    this.$_cache$.$clearCache$();
  };
  $dvt$$2$$.$Chart$.prototype.$__cleanUpAxisAndPlotArea$ = function $$dvt$$2$$$$Chart$$$$__cleanUpAxisAndPlotArea$$() {
    this.$EventManager$.$hideHoverFeedback$();
    this.$Peers$ = [];
    this.$_container$.removeChild(this.$xAxis$);
    this.$_container$.removeChild(this.$yAxis$);
    this.$_container$.removeChild(this.$y2Axis$);
    this.$_plotArea$ && this.$_plotArea$ == this.$_panZoomTarget$ ? this.$_plotArea$.$setVisible$(!1) : this.$_container$.removeChild(this.$_plotArea$);
    this.$_plotArea$ = null;
    this.$_cache$.$clearCache$();
  };
  $dvt$$2$$.$Chart$.prototype.$_onAnimationEnd$ = function $$dvt$$2$$$$Chart$$$$_onAnimationEnd$$() {
    this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
    this.$_delContainer$ && 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().removeChild(this.$_delContainer$);
    this.$_delContainer$ = null;
    this.$AnimationStopped$ || this.$RenderComplete$();
    this.$EventManager$.$addListeners$(this);
    this.$Animation$ = null;
    this.$AnimationStopped$ = !1;
  };
  $dvt$$2$$.$Chart$.prototype.$CreateKeyboardHandler$ = function $$dvt$$2$$$$Chart$$$$CreateKeyboardHandler$$($dvt$$2$$) {
    return new $DvtChartKeyboardHandler$$($dvt$$2$$, this);
  };
  $dvt$$2$$.$Chart$.prototype.$getAutomation$ = function $$dvt$$2$$$$Chart$$$$getAutomation$$() {
    return new $DvtChartAutomation$$(this);
  };
  $dvt$$2$$.$Chart$.prototype.$getValuesAt$ = function $$dvt$$2$$$$Chart$$$$getValuesAt$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$_plotAreaSpace$, $DvtSparkChartAutomation$$ = $dvt$$2$$ - $DvtSparkChartDefaults$$.x, $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$ - $DvtSparkChartDefaults$$.y, $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isPolar$(this), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$(this);
    return $DvtChartSeriesEffectUtils$$ ? ($DvtSparkChartAutomation$$ -= $DvtSparkChartDefaults$$.$w$ / 2, $DvtChartTooltipUtils$$ -= $DvtSparkChartDefaults$$.$h$ / 2, $DvtSparkChartDefaults$$ = Math.sqrt($DvtSparkChartAutomation$$ * $DvtSparkChartAutomation$$ + $DvtChartTooltipUtils$$ * $DvtChartTooltipUtils$$), $DvtSparkChartAutomation$$ = Math.atan2($DvtSparkChartAutomation$$, -$DvtChartTooltipUtils$$), 0 > $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ += 2 * Math.PI), {x:this.$xAxis$ ? 
    this.$xAxis$.$getValueAt$($DvtSparkChartAutomation$$) : null, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($DvtSparkChartDefaults$$) : null}) : {x:this.$xAxis$ ? this.$xAxis$.$getValueAt$($DvtChartPieLabelUtils$$ ? $DvtChartTooltipUtils$$ : $DvtSparkChartAutomation$$) : null, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($DvtChartPieLabelUtils$$ ? $DvtSparkChartAutomation$$ : $DvtChartTooltipUtils$$) : null, y2:this.$y2Axis$ ? this.$y2Axis$.$getValueAt$($DvtChartPieLabelUtils$$ ? $DvtSparkChartAutomation$$ : 
    $DvtChartTooltipUtils$$) : null};
  };
  $dvt$$2$$.$Chart$.prototype.filter = function $$dvt$$2$$$$Chart$$$filter$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartEventUtils$$.$setVisibility$(this, $dvt$$2$$, "out" == $DvtSparkChartEventManager$$ ? "hidden" : "visible");
    this.$render$(this.$Options$);
  };
  $dvt$$2$$.$Chart$.prototype.$highlight$ = function $$dvt$$2$$$$Chart$$$$highlight$$($DvtSparkChartEventManager$$) {
    this.$getOptions$().highlightedCategories = $dvt$$2$$.$JsonUtils$.clone($DvtSparkChartEventManager$$);
    $dvt$$2$$.$CategoryRolloverHandler$.$highlight$($DvtSparkChartEventManager$$, this.$getObjects$(), "any" == this.$getOptions$().highlightMatch);
    this.$legend$ && this.$legend$.$highlight$($DvtSparkChartEventManager$$);
    this.$pieChart$ && this.$pieChart$.$highlight$($DvtSparkChartEventManager$$);
    this.$overview$ && this.$overview$.$_chart$.$highlight$($DvtSparkChartEventManager$$);
  };
  $dvt$$2$$.$Chart$.prototype.select = function $$dvt$$2$$$$Chart$$$select$($DvtSparkChartEventManager$$) {
    this.$getOptions$().selection = $dvt$$2$$.$JsonUtils$.clone($DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getInitialSelection$(this);
    $DvtChartEventUtils$$.$setInitialSelection$(this, $DvtSparkChartEventManager$$);
    this.$pieChart$ && this.$pieChart$.$setInitialSelection$();
  };
  $dvt$$2$$.$Chart$.prototype.$positionDataCursor$ = function $$dvt$$2$$$$Chart$$$$positionDataCursor$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getEventManager$().$_dataCursorHandler$;
    if ($DvtSparkChartDefaults$$) {
      if ($DvtSparkChartEventManager$$) {
        var $DvtSparkChartAutomation$$ = this.$xAxis$ && null != $DvtSparkChartEventManager$$.x ? this.$xAxis$.$getCoordAt$($DvtSparkChartEventManager$$.x) : null, $DvtChartTooltipUtils$$ = null;
        $DvtChartTypeUtils$$.$isBLAC$(this) ? this.$yAxis$ && null != $DvtSparkChartEventManager$$.y ? $DvtChartTooltipUtils$$ = this.$yAxis$.$getBoundedCoordAt$($DvtSparkChartEventManager$$.y) : this.$y2Axis$ && null != $DvtSparkChartEventManager$$.y2 && ($DvtChartTooltipUtils$$ = this.$yAxis$.$getBoundedCoordAt$($DvtSparkChartEventManager$$.y2)) : $DvtChartTooltipUtils$$ = this.$yAxis$ && null != $DvtSparkChartEventManager$$.y ? this.$yAxis$.$getCoordAt$($DvtSparkChartEventManager$$.y) : null;
        if (null != $DvtSparkChartAutomation$$ && null != $DvtChartTooltipUtils$$) {
          $DvtSparkChartEventManager$$ = this.$_plotAreaSpace$;
          $DvtSparkChartAutomation$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$(this, new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$), $DvtSparkChartEventManager$$);
          $DvtSparkChartDefaults$$.$processMove$(new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$.x + $DvtSparkChartAutomation$$.x, $DvtSparkChartEventManager$$.y + $DvtSparkChartAutomation$$.y), !0);
          return;
        }
      }
      $DvtSparkChartDefaults$$.$processEnd$(!0);
    }
  };
  $dvt$$2$$.$Chart$.prototype.$processEvent$ = function $$dvt$$2$$$$Chart$$$$processEvent$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.type;
    if ("categoryHide" == $DvtSparkChartAutomation$$ || "categoryShow" == $DvtSparkChartAutomation$$) {
      this.filter($DvtSparkChartEventManager$$.category, "categoryHide" == $DvtSparkChartAutomation$$ ? "out" : "in");
    } else {
      if ("categoryHighlight" == $DvtSparkChartAutomation$$) {
        this != $DvtSparkChartDefaults$$ && this.$highlight$($DvtSparkChartEventManager$$.categories), this.$legend$ && this.$legend$ != $DvtSparkChartDefaults$$ && this.$legend$.$processEvent$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      } else {
        if ("selection" == $DvtSparkChartAutomation$$) {
          $DvtSparkChartEventManager$$ = this.$_processSelectionEvent$($DvtSparkChartEventManager$$);
        } else {
          if ($DvtSparkChartAutomation$$ == $dvt$$2$$.$PanZoomEvent$.$TYPE$) {
            $DvtSparkChartEventManager$$ = this.$_processPanZoomEvent$($DvtSparkChartEventManager$$);
          } else {
            if ($DvtSparkChartAutomation$$ == $dvt$$2$$.$MarqueeEvent$.$TYPE$) {
              $DvtSparkChartEventManager$$ = this.$_processMarqueeEvent$($DvtSparkChartEventManager$$);
            } else {
              if ($DvtSparkChartAutomation$$ == $dvt$$2$$.$OverviewEvent$.$TYPE$) {
                var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getSubType$();
                if ($DvtChartTooltipUtils$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$) {
                  return;
                }
                $DvtSparkChartEventManager$$ = this.$_processScrollbarEvent$($DvtSparkChartEventManager$$.$getNewStartTime$(), $DvtSparkChartEventManager$$.$getNewEndTime$(), $DvtChartTooltipUtils$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$ || $DvtChartTooltipUtils$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_SCROLL_END$ || $DvtChartTooltipUtils$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_RANGECHANGE$, $DvtSparkChartDefaults$$);
              } else {
                $DvtSparkChartAutomation$$ == $dvt$$2$$.$SimpleScrollbarEvent$.$TYPE$ ? $DvtSparkChartEventManager$$ = this.$_processScrollbarEvent$($DvtSparkChartEventManager$$.$_newMin$, $DvtSparkChartEventManager$$.$_newMax$, $DvtSparkChartEventManager$$.$getSubtype$() == $dvt$$2$$.$SimpleScrollbarEvent$.$SUBTYPE_END$, $DvtSparkChartDefaults$$) : "adfShowPopup" == $DvtSparkChartAutomation$$ && ($DvtSparkChartEventManager$$ = this.$_processShowPopupEvent$($DvtSparkChartEventManager$$));
              }
            }
          }
        }
      }
    }
    if ("selection" == $DvtSparkChartAutomation$$) {
      var $DvtChartTooltipUtils$$ = this.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartTooltipUtils$$.selection, $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getCurrentSelection$(this);
      $DvtSparkChartEventManager$$.complete && ($DvtChartTooltipUtils$$.selection = $DvtChartSeriesEffectUtils$$);
      var $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$ ? $DvtSparkChartAutomation$$ : [], $DvtChartSeriesEffectUtils$$ = $DvtChartSeriesEffectUtils$$ ? $DvtChartSeriesEffectUtils$$ : [], $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$ = {};
      for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
        $DvtChartPieRenderUtils$$[$DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].id] = !0;
      }
      $DvtChartTooltipUtils$$ = {};
      for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartSeriesEffectUtils$$.length;$DvtChartPieLabelUtils$$++) {
        $DvtChartTooltipUtils$$[$DvtChartSeriesEffectUtils$$[$DvtChartPieLabelUtils$$].id] = !0;
      }
      var $DvtChartPieLabelInfo$$ = {};
      for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartSeriesEffectUtils$$.length;$DvtChartPieLabelUtils$$++) {
        var $DvtChartTypeUtils$$ = $DvtChartSeriesEffectUtils$$[$DvtChartPieLabelUtils$$].id;
        $DvtChartPieRenderUtils$$[$DvtChartTypeUtils$$] || ($DvtChartPieLabelInfo$$[$DvtChartTypeUtils$$] = !0);
      }
      $DvtChartSeriesEffectUtils$$ = {};
      for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
        $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].id, $DvtChartTooltipUtils$$[$DvtChartPieRenderUtils$$] || ($DvtChartSeriesEffectUtils$$[$DvtChartPieRenderUtils$$] = !0);
      }
      $DvtSparkChartEventManager$$.addedSet = $DvtChartPieLabelInfo$$;
      $DvtSparkChartEventManager$$.removedSet = $DvtChartSeriesEffectUtils$$;
    }
    if ("selection" == $DvtSparkChartEventManager$$.type) {
      for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.selection.length;$DvtSparkChartAutomation$$++) {
        if ($DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getSeriesIndex$(this, $DvtSparkChartEventManager$$.selection[$DvtSparkChartAutomation$$].series), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getGroupIndex$(this, $DvtSparkChartEventManager$$.selection[$DvtSparkChartAutomation$$].group), $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getDataContext$(this, $DvtChartTooltipUtils$$, $DvtChartPieLabelInfo$$)) {
          $DvtSparkChartEventManager$$.selection[$DvtSparkChartAutomation$$].data = $DvtChartTooltipUtils$$.data, $DvtSparkChartEventManager$$.selection[$DvtSparkChartAutomation$$].seriesData = $DvtChartTooltipUtils$$.seriesData, $DvtSparkChartEventManager$$.selection[$DvtSparkChartAutomation$$].groupData = $DvtChartTooltipUtils$$.groupData;
        }
      }
      $DvtSparkChartEventManager$$.component = this.$getOptions$()._widgetConstructor;
    } else {
      if ("drill" == $DvtSparkChartEventManager$$.type) {
        $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getSeriesIndex$(this, $DvtSparkChartEventManager$$.series);
        $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getGroupIndex$(this, $DvtSparkChartEventManager$$.group);
        if ($DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getDataContext$(this, $DvtChartTooltipUtils$$, $DvtChartPieLabelInfo$$)) {
          $DvtSparkChartEventManager$$.data = $DvtChartTooltipUtils$$.data, $DvtSparkChartEventManager$$.seriesData = $DvtChartTooltipUtils$$.seriesData, $DvtSparkChartEventManager$$.groupData = $DvtChartTooltipUtils$$.groupData;
        }
        $DvtSparkChartEventManager$$.component = this.$getOptions$()._widgetConstructor;
      }
    }
    $DvtSparkChartEventManager$$ && this.dispatchEvent($DvtSparkChartEventManager$$);
  };
  $dvt$$2$$.$Chart$.prototype.$_processSelectionEvent$ = function $$dvt$$2$$$$Chart$$$$_processSelectionEvent$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$processIds$(this, $DvtSparkChartEventManager$$.selection);
    this.$_updateOverviewSelection$();
    return $dvt$$2$$.$EventFactory$.$newChartSelectionEvent$($DvtSparkChartEventManager$$, !0);
  };
  $dvt$$2$$.$Chart$.prototype.$_processPanZoomEvent$ = function $$dvt$$2$$$$Chart$$$$_processPanZoomEvent$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getSubtype$(), $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PAN_END$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_ZOOM$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PINCH_END$, $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PAN_START$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PINCH_START$;
    $dvt$$2$$.$Agent$.$isTouchDevice$() && $DvtSparkChartDefaults$$ && this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = this.$_plotArea$);
    $DvtChartEventUtils$$.$isLiveScroll$(this) ? ($DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $DvtSparkChartEventManager$$.$dxMin$, $DvtSparkChartEventManager$$.$dxMax$, $DvtSparkChartEventManager$$.$dyMin$, $DvtSparkChartEventManager$$.$dyMax$), $DvtSparkChartDefaults$$ || (this.$_setViewport$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), this.$_setScrollbarViewport$($DvtSparkChartEventManager$$))) : ($DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, 
    $DvtSparkChartEventManager$$.$dxMinTotal$, $DvtSparkChartEventManager$$.$dxMaxTotal$, $DvtSparkChartEventManager$$.$dyMinTotal$, $DvtSparkChartEventManager$$.$dyMaxTotal$), this.$_setScrollbarViewport$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ && this.$_setViewport$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$));
    $DvtSparkChartAutomation$$ && ($DvtChartRenderer$$.$_setEventHandlers$(this), this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = null));
    return $DvtChartTypeUtils$$.$isBLAC$(this) ? $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, $DvtSparkChartEventManager$$.$startGroup$, $DvtSparkChartEventManager$$.$endGroup$, null, null) : $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, null, null, $DvtSparkChartEventManager$$.$yMin$, 
    $DvtSparkChartEventManager$$.$yMax$);
  };
  $dvt$$2$$.$Chart$.prototype.$_processMarqueeEvent$ = function $$dvt$$2$$$$Chart$$$$_processMarqueeEvent$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getSubtype$(), $DvtSparkChartAutomation$$ = this.$EventManager$;
    $DvtChartEventUtils$$.$adjustBounds$($DvtSparkChartEventManager$$);
    if ($DvtSparkChartAutomation$$.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_SELECT$) {
      $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.$getSelectionHandler$();
      if ($DvtSparkChartDefaults$$ == $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_START$) {
        this.$_initSelection$ = $DvtSparkChartEventManager$$.ctrlKey ? $DvtSparkChartAutomation$$.$getSelectedIds$() : [];
      } else {
        var $DvtChartTooltipUtils$$ = $DvtChartEventUtils$$.$getBoundedObjects$(this, $DvtSparkChartEventManager$$);
        $DvtSparkChartAutomation$$.$processInitialSelections$(this.$_initSelection$, this.$getChartObjPeers$());
        $DvtSparkChartAutomation$$.$processGroupSelection$($DvtChartTooltipUtils$$);
      }
      $DvtSparkChartAutomation$$ = $DvtChartEventUtils$$.$getSelectedObjects$(this, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
      $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBounds$(this, $DvtSparkChartEventManager$$, !1);
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$EventFactory$.$newChartSelectionEvent$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$ == $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_END$ ? !0 : !1, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, $DvtSparkChartEventManager$$.$startGroup$, $DvtSparkChartEventManager$$.$endGroup$, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$, $DvtSparkChartEventManager$$.$y2Min$, $DvtSparkChartEventManager$$.$y2Max$);
      $DvtSparkChartDefaults$$ == $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_END$ && this.$_updateOverviewSelection$();
      return $DvtSparkChartEventManager$$;
    }
    if ($DvtSparkChartAutomation$$.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$) {
      if ($DvtSparkChartDefaults$$ != $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_END$) {
        return null;
      }
      $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBounds$(this, $DvtSparkChartEventManager$$, !0);
      this.$_setViewport$($DvtSparkChartEventManager$$, !0);
      this.$_setScrollbarViewport$($DvtSparkChartEventManager$$);
      $DvtChartRenderer$$.$_setEventHandlers$(this);
      return $DvtChartTypeUtils$$.$isBLAC$(this) ? $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$(!0, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, $DvtSparkChartEventManager$$.$startGroup$, $DvtSparkChartEventManager$$.$endGroup$, null, null) : $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$(!0, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, null, null, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$);
    }
    return null;
  };
  $dvt$$2$$.$Chart$.prototype.$_processScrollbarEvent$ = function $$dvt$$2$$$$Chart$$$$_processScrollbarEvent$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$ == this.$yScrollbar$ ? this.$yAxis$ : this.$xAxis$;
    $DvtSparkChartEventManager$$ = $DvtChartSeriesEffectUtils$$.$linearToActual$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$.$linearToActual$($DvtSparkChartDefaults$$);
    if ($DvtChartEventUtils$$.$isLiveScroll$(this) || $DvtSparkChartAutomation$$) {
      $DvtChartTooltipUtils$$ == this.$yScrollbar$ ? this.$_setViewport$({$yMin$:$DvtSparkChartEventManager$$, $yMax$:$DvtSparkChartDefaults$$}, $DvtSparkChartAutomation$$) : this.$_setViewport$({$xMin$:$DvtSparkChartEventManager$$, $xMax$:$DvtSparkChartDefaults$$}, $DvtSparkChartAutomation$$);
    }
    if ($DvtChartTooltipUtils$$ == this.$yScrollbar$) {
      return $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, null, null, null, null, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    }
    $DvtChartTooltipUtils$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$(this.$xAxis$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$.$startGroup$, $DvtChartTooltipUtils$$.$endGroup$, null, null);
  };
  $dvt$$2$$.$Chart$.prototype.$_processShowPopupEvent$ = function $$dvt$$2$$$$Chart$$$$_processShowPopupEvent$$($DvtSparkChartEventManager$$) {
    if ("mouseHover" != $DvtSparkChartEventManager$$.triggerType && this.$isSelectionSupported$() && 0 < this.$getSelectionHandler$().$_selection$.length) {
      var $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$processIds$(this, this.$getSelectionHandler$().$getSelectedIds$());
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$EventFactory$.$newAdfShowPopupEvent$($DvtSparkChartEventManager$$.showPopupBehavior, $DvtSparkChartEventManager$$.launcherBounds, $DvtSparkChartEventManager$$.launcherId);
      $DvtSparkChartEventManager$$[$dvt$$2$$.$BaseComponentEvent$.$CLIENT_ROW_KEY$] = $DvtSparkChartDefaults$$;
    }
    return $DvtSparkChartEventManager$$;
  };
  $dvt$$2$$.$Chart$.prototype.$_updateOverviewSelection$ = function $$dvt$$2$$$$Chart$$$$_updateOverviewSelection$$() {
    if (this.$overview$) {
      var $dvt$$2$$ = this.$overview$.$_chart$;
      $dvt$$2$$.$getOptions$().selection = $DvtChartDataUtils$$.$getCurrentSelection$(this);
      $dvt$$2$$.$render$();
    }
  };
  $dvt$$2$$.$Chart$.prototype.$changeOption$ = function $$dvt$$2$$$$Chart$$$$changeOption$$($DvtSparkChartEventManager$$) {
    this.$getOptions$().dataCursorPosition = $DvtSparkChartEventManager$$;
    this.dispatchEvent($dvt$$2$$.$EventFactory$.$newOptionChangeEvent$($DvtSparkChartEventManager$$));
  };
  $dvt$$2$$.$Chart$.prototype.$registerObject$ = function $$dvt$$2$$$$Chart$$$$registerObject$$($dvt$$2$$) {
    this.$Peers$.push($dvt$$2$$);
  };
  $dvt$$2$$.$Chart$.prototype.$getObjects$ = function $$dvt$$2$$$$Chart$$$$getObjects$$() {
    return this.$Peers$;
  };
  $dvt$$2$$.$Chart$.prototype.$getChartObjPeers$ = function $$dvt$$2$$$$Chart$$$$getChartObjPeers$$() {
    for (var $dvt$$2$$ = [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$Peers$.length;$DvtSparkChartEventManager$$++) {
      this.$Peers$[$DvtSparkChartEventManager$$] instanceof $DvtChartObjPeer$$ && $dvt$$2$$.push(this.$Peers$[$DvtSparkChartEventManager$$]);
    }
    return $dvt$$2$$;
  };
  $dvt$$2$$.$Chart$.prototype.$getRefObjPeers$ = function $$dvt$$2$$$$Chart$$$$getRefObjPeers$$() {
    for (var $dvt$$2$$ = [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$Peers$.length;$DvtSparkChartEventManager$$++) {
      this.$Peers$[$DvtSparkChartEventManager$$] instanceof $DvtChartRefObjPeer$$ && $dvt$$2$$.push(this.$Peers$[$DvtSparkChartEventManager$$]);
    }
    return $dvt$$2$$;
  };
  $dvt$$2$$.$Chart$.prototype.$getObject$ = function $$dvt$$2$$$$Chart$$$$getObject$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$Peers$.length;$DvtSparkChartDefaults$$++) {
      if (this.$Peers$[$DvtSparkChartDefaults$$] instanceof $DvtChartObjPeer$$ && this.$Peers$[$DvtSparkChartDefaults$$].$getSeriesIndex$() == $dvt$$2$$ && this.$Peers$[$DvtSparkChartDefaults$$].$getGroupIndex$() == $DvtSparkChartEventManager$$) {
        return this.$Peers$[$DvtSparkChartDefaults$$];
      }
    }
    return null;
  };
  $dvt$$2$$.$Chart$.prototype.getWidth = function $$dvt$$2$$$$Chart$$$getWidth$() {
    return this.$Width$;
  };
  $dvt$$2$$.$Chart$.prototype.getHeight = function $$dvt$$2$$$$Chart$$$getHeight$() {
    return this.$Height$;
  };
  $dvt$$2$$.$Chart$.prototype.$getPlotArea$ = function $$dvt$$2$$$$Chart$$$$getPlotArea$$() {
    return this.$_plotArea$;
  };
  $dvt$$2$$.$Chart$.prototype.$setPlotArea$ = function $$dvt$$2$$$$Chart$$$$setPlotArea$$($dvt$$2$$) {
    this.$_plotArea$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Chart$.prototype.$getType$ = function $$dvt$$2$$$$Chart$$$$getType$$() {
    return this.$getOptions$().type;
  };
  $dvt$$2$$.$Chart$.prototype.$getSkin$ = function $$dvt$$2$$$$Chart$$$$getSkin$$() {
    return this.$getOptions$().skin;
  };
  $dvt$$2$$.$Chart$.prototype.$getGapWidthRatio$ = function $$dvt$$2$$$$Chart$$$$getGapWidthRatio$$() {
    var $dvt$$2$$ = this.$getOptions$();
    return null !== $dvt$$2$$.layout.gapWidthRatio ? $dvt$$2$$.layout.gapWidthRatio : Math.min(this.$Width$ / 400, 1);
  };
  $dvt$$2$$.$Chart$.prototype.$getGapHeightRatio$ = function $$dvt$$2$$$$Chart$$$$getGapHeightRatio$$() {
    var $dvt$$2$$ = this.$getOptions$();
    return null !== $dvt$$2$$.layout.gapHeightRatio ? $dvt$$2$$.layout.gapHeightRatio : Math.min(this.$Height$ / 300, 1);
  };
  $dvt$$2$$.$Chart$.prototype.$getSelectionHandler$ = function $$dvt$$2$$$$Chart$$$$getSelectionHandler$$() {
    return this.$_selectionHandler$;
  };
  $dvt$$2$$.$Chart$.prototype.$isSelectionSupported$ = function $$dvt$$2$$$$Chart$$$$isSelectionSupported$$() {
    return this.$_selectionHandler$ ? !0 : !1;
  };
  $dvt$$2$$.$Chart$.prototype.$getShowPopupBehaviors$ = function $$dvt$$2$$$$Chart$$$$getShowPopupBehaviors$$($dvt$$2$$) {
    return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$dvt$$2$$] : null;
  };
  $dvt$$2$$.$Chart$.prototype.$bringToFrontOfSelection$ = function $$dvt$$2$$$$Chart$$$$bringToFrontOfSelection$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.getParent();
    if ($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$();
      1 < $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$, $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ - 1));
    }
    $dvt$$2$$.$isSelected$() && $dvt$$2$$.$IsShowingHoverEffect$ || this.$_numSelectedObjsInFront$++;
  };
  $dvt$$2$$.$Chart$.prototype.$pushToBackOfSelection$ = function $$dvt$$2$$$$Chart$$$$pushToBackOfSelection$$($dvt$$2$$) {
    0 < this.$_numSelectedObjsInFront$ && this.$_numSelectedObjsInFront$--;
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.getParent();
    if ($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$;
      0 <= $DvtSparkChartDefaults$$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$, $DvtSparkChartDefaults$$));
    }
  };
  $dvt$$2$$.$Chart$.prototype.$_setViewport$ = function $$dvt$$2$$$$Chart$$$$_setViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    null != $dvt$$2$$.$xMax$ && (this.$Options$.xAxis.viewportMax = $dvt$$2$$.$xMax$);
    null != $dvt$$2$$.$xMin$ && (this.$Options$.xAxis.viewportMin = $dvt$$2$$.$xMin$);
    $DvtChartTypeUtils$$.$isBLAC$(this) ? (this.$Options$.xAxis.viewportStartGroup = null, this.$Options$.xAxis.viewportEndGroup = null, this.$Options$._initialZoomed = !1) : (null != $dvt$$2$$.$yMax$ && (this.$Options$.yAxis.viewportMax = $dvt$$2$$.$yMax$), null != $dvt$$2$$.$yMin$ && (this.$Options$.yAxis.viewportMin = $dvt$$2$$.$yMin$));
    this.$Options$._duringAnimation = !$DvtSparkChartEventManager$$;
    $DvtChartRenderer$$.$rerenderAxisAndPlotArea$(this, this.$_container$);
  };
  $dvt$$2$$.$Chart$.prototype.$_setScrollbarViewport$ = function $$dvt$$2$$$$Chart$$$$_setScrollbarViewport$$($dvt$$2$$) {
    if (this.$xAxis$ && null != $dvt$$2$$.$xMin$ && null != $dvt$$2$$.$xMax$) {
      var $DvtSparkChartEventManager$$ = this.$xAxis$.$actualToLinear$($dvt$$2$$.$xMin$), $DvtSparkChartDefaults$$ = this.$xAxis$.$actualToLinear$($dvt$$2$$.$xMax$);
      this.$overview$ && this.$overview$.$setViewportRange$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      this.$xScrollbar$ && this.$xScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    }
    this.$yAxis$ && null != $dvt$$2$$.$yMin$ && null != $dvt$$2$$.$yMax$ && ($DvtSparkChartEventManager$$ = this.$yAxis$.$actualToLinear$($dvt$$2$$.$yMin$), $dvt$$2$$ = this.$yAxis$.$actualToLinear$($dvt$$2$$.$yMax$), this.$yScrollbar$ && this.$yScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$, $dvt$$2$$));
  };
  $dvt$$2$$.$Chart$.prototype.$__setAxisSpace$ = function $$dvt$$2$$$$Chart$$$$__setAxisSpace$$($dvt$$2$$) {
    this.$_axisSpace$ = $dvt$$2$$;
    var $DvtSparkChartEventManager$$;
    $DvtChartAxisUtils$$.$isAxisRendered$(this, "x") ? ($DvtSparkChartEventManager$$ = .8 * $dvt$$2$$.$w$, $dvt$$2$$ = $dvt$$2$$.$h$ - 4 * $DvtChartAxisUtils$$.$getTickLabelHeight$(this, "x")) : $DvtChartAxisUtils$$.$isAxisRendered$(this, "y") ? ($DvtSparkChartEventManager$$ = $dvt$$2$$.$w$, $dvt$$2$$ = $dvt$$2$$.$h$ - $DvtChartAxisUtils$$.$getTickLabelHeight$(this, "y")) : ($DvtSparkChartEventManager$$ = $dvt$$2$$.$w$, $dvt$$2$$ = $dvt$$2$$.$h$);
    this.$_radius$ = Math.min($DvtSparkChartEventManager$$, $dvt$$2$$) / 2;
  };
  $dvt$$2$$.$Chart$.prototype.$__setPlotAreaSpace$ = function $$dvt$$2$$$$Chart$$$$__setPlotAreaSpace$$($dvt$$2$$) {
    this.$_plotAreaSpace$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Chart$.prototype.$__setAreaContainer$ = function $$dvt$$2$$$$Chart$$$$__setAreaContainer$$($dvt$$2$$) {
    this.$_areaContainer$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Chart$.prototype.$getRadius$ = function $$dvt$$2$$$$Chart$$$$getRadius$$() {
    return this.$_radius$;
  };
  $dvt$$2$$.$Chart$.prototype.$showDragButtons$ = function $$dvt$$2$$$$Chart$$$$showDragButtons$$() {
    this.$dragButtons$ && this.$dragButtons$.$setVisible$(!0);
  };
  $dvt$$2$$.$Chart$.prototype.$hideDragButtons$ = function $$dvt$$2$$$$Chart$$$$hideDragButtons$$() {
    this.$dragButtons$ && this.$dragButtons$.$setVisible$(!1);
  };
  $dvt$$2$$.$Chart$.prototype.$addDataLabel$ = function $$dvt$$2$$$$Chart$$$$addDataLabel$$($dvt$$2$$) {
    this.$getDataLabels$().push($dvt$$2$$);
  };
  $dvt$$2$$.$Chart$.prototype.$getDataLabels$ = function $$dvt$$2$$$$Chart$$$$getDataLabels$$() {
    this.$_dataLabels$ || (this.$_dataLabels$ = []);
    return this.$_dataLabels$;
  };
  $dvt$$2$$.$Chart$.prototype.$__cacheChartFocus$ = function $$dvt$$2$$$$Chart$$$$__cacheChartFocus$$() {
    var $dvt$$2$$ = this.$EventManager$.$getFocus$();
    if ($dvt$$2$$) {
      var $DvtSparkChartEventManager$$ = $dvt$$2$$.$isShowingKeyboardFocusEffect$()
    }
    if (this.$xAxis$) {
      var $DvtSparkChartDefaults$$ = this.$xAxis$.$getKeyboardFocus$();
      if ($DvtSparkChartDefaults$$) {
        var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$isShowingKeyboardFocusEffect$()
      }
    }
    if (this.$legend$) {
      var $DvtChartTooltipUtils$$ = this.$legend$.$getKeyboardFocus$();
      if ($DvtChartTooltipUtils$$) {
        var $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.$isShowingKeyboardFocusEffect$()
      }
    }
    return {$chartFocus$:$dvt$$2$$, $chartShowingFocusEffect$:$DvtSparkChartEventManager$$, $axisFocus$:$DvtSparkChartDefaults$$, $axisShowingFocusEffect$:$DvtSparkChartAutomation$$, $legendFocus$:$DvtChartTooltipUtils$$, $legendShowingFocusEffect$:$DvtChartSeriesEffectUtils$$};
  };
  $dvt$$2$$.$Chart$.prototype.$__restoreChartFocus$ = function $$dvt$$2$$$$Chart$$$$__restoreChartFocus$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isOverview$(this) && !$DvtChartTypeUtils$$.$isSpark$(this)) {
      var $DvtSparkChartEventManager$$ = [this];
      this.$xAxis$ && this.$xAxis$.$isNavigable$() && $DvtSparkChartEventManager$$.push(this.$xAxis$);
      this.$legend$ && this.$legend$.$isNavigable$() && $DvtSparkChartEventManager$$.push(this.$legend$);
      this.$getCtx$().$setKeyboardFocusArray$($DvtSparkChartEventManager$$);
      if ($dvt$$2$$.$chartFocus$) {
        for (var $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getKeyboardNavigables$(this), $DvtSparkChartDefaults$$ = !1, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
          var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].getId();
          if ($DvtChartTooltipUtils$$ instanceof $DvtChartDataItem$$ && $DvtChartTooltipUtils$$.$equals$($dvt$$2$$.$chartFocus$.getId())) {
            this.$EventManager$.$setFocusObj$($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$]);
            $dvt$$2$$.$chartShowingFocusEffect$ && $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$showKeyboardFocusEffect$();
            $DvtSparkChartDefaults$$ = !0;
            break;
          }
        }
        $DvtSparkChartDefaults$$ || this.$EventManager$.$setFocusObj$(this.$EventManager$.$KeyboardHandler$.$getDefaultNavigable$($DvtSparkChartEventManager$$));
      }
      $dvt$$2$$.$axisFocus$ && (this.$xAxis$.$setKeyboardFocus$($dvt$$2$$.$axisFocus$, $dvt$$2$$.$axisShowingFocusEffect$), $dvt$$2$$.$axisShowingFocusEffect$ && this.$getCtx$().$setCurrentKeyboardFocus$(this.$xAxis$));
      $dvt$$2$$.$legendFocus$ && (this.$legend$.$setKeyboardFocus$($dvt$$2$$.$legendFocus$, $dvt$$2$$.$legendShowingFocusEffect$), $dvt$$2$$.$legendShowingFocusEffect$ && this.$getCtx$().$setCurrentKeyboardFocus$(this.$legend$));
    }
  };
  $dvt$$2$$.$Chart$.$_copyActiveDataProperties$ = function $$dvt$$2$$$$Chart$$$_copyActiveDataProperties$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ in $dvt$$2$$) {
      $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$] = $dvt$$2$$[$DvtSparkChartDefaults$$];
    }
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAutomation$$, $dvt$$2$$.$Automation$);
  $DvtChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtChartAutomation$$$$$GetSubIdForDomElement$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = null;
    if ($dvt$$2$$.$isDescendantOf$(this.$_xAxis$)) {
      return ($DvtSparkChartEventManager$$ = this.$_xAxisAutomation$.$GetSubIdForDomElement$($dvt$$2$$)) ? this.$_convertAxisSubIdToChartSubId$($DvtSparkChartEventManager$$, "xAxis") : null;
    }
    if ($dvt$$2$$.$isDescendantOf$(this.$_yAxis$)) {
      return ($DvtSparkChartEventManager$$ = this.$_yAxisAutomation$.$GetSubIdForDomElement$($dvt$$2$$)) ? this.$_convertAxisSubIdToChartSubId$($DvtSparkChartEventManager$$, "yAxis") : null;
    }
    if ($dvt$$2$$.$isDescendantOf$(this.$_y2Axis$)) {
      return ($DvtSparkChartEventManager$$ = this.$_y2AxisAutomation$.$GetSubIdForDomElement$($dvt$$2$$)) ? this.$_convertAxisSubIdToChartSubId$($DvtSparkChartEventManager$$, "y2Axis") : null;
    }
    if ($dvt$$2$$.$isDescendantOf$(this.$_legend$)) {
      return ($dvt$$2$$ = this.$_legendAutomation$.$GetSubIdForDomElement$($dvt$$2$$)) ? this.$_convertLegendSubIdToChartSubId$($dvt$$2$$) : null;
    }
    if (($dvt$$2$$ = this.$_chart$.$getEventManager$().$GetLogicalObject$($dvt$$2$$)) && "pie" == this.$_options$.type) {
      return "dataItem[" + $dvt$$2$$.$getSeriesIndex$() + "]";
    }
    if ($dvt$$2$$ instanceof $DvtChartObjPeer$$) {
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$getSeriesIndex$();
      $dvt$$2$$ = $dvt$$2$$.$getGroupIndex$();
      if (null != $DvtSparkChartEventManager$$ && 0 <= $dvt$$2$$ && "funnel" != this.$_options$.type) {
        return "dataItem[" + $DvtSparkChartEventManager$$ + "][" + $dvt$$2$$ + "]";
      }
      if (null != $DvtSparkChartEventManager$$ && $dvt$$2$$ == $DvtChartFunnelRenderer$$.$_GROUP_INDEX$ && "funnel" == this.$_options$.type) {
        return "dataItem[" + $DvtSparkChartEventManager$$ + "]";
      }
      if (null != $DvtSparkChartEventManager$$ && (null == $dvt$$2$$ || 0 > $dvt$$2$$)) {
        return "series[" + $DvtSparkChartEventManager$$ + "]";
      }
    } else {
      if ($dvt$$2$$ instanceof $DvtChartRefObjPeer$$) {
        return $DvtSparkChartEventManager$$ = $dvt$$2$$.$_axisType$, $dvt$$2$$ = $dvt$$2$$.$getIndex$(), $DvtSparkChartEventManager$$ && 0 <= $dvt$$2$$ ? $DvtSparkChartEventManager$$ + ":referenceObject[" + $dvt$$2$$ + "]" : null;
      }
    }
    return null;
  };
  $DvtChartAutomation$$.prototype.$_convertLegendSubIdToChartSubId$ = function $$DvtChartAutomation$$$$$_convertLegendSubIdToChartSubId$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_legend$.$getOptions$();
    if ($DvtSparkChartEventManager$$ = this.$_legendAutomation$.$getLegendItem$($DvtSparkChartEventManager$$, $dvt$$2$$)) {
      for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$_options$.series.length;$DvtSparkChartDefaults$$++) {
        if (this.$_options$.series[$DvtSparkChartDefaults$$].name == $DvtSparkChartEventManager$$.text) {
          return "series[" + $DvtSparkChartDefaults$$ + "]";
        }
      }
      return "legend:" + $dvt$$2$$;
    }
    return null;
  };
  $DvtChartAutomation$$.prototype.$_convertAxisSubIdToChartSubId$ = function $$DvtChartAutomation$$$$$_convertAxisSubIdToChartSubId$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ("title" == $dvt$$2$$ && $DvtSparkChartEventManager$$) {
      return $DvtSparkChartEventManager$$ + ":" + $dvt$$2$$;
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.substring($dvt$$2$$.indexOf("["));
    return $DvtSparkChartDefaults$$ ? "group" + $DvtSparkChartDefaults$$ : null;
  };
  $DvtChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtChartAutomation$$$$$getDomElementForSubId$$($DvtSparkChartEventManager$$) {
    if ($DvtSparkChartEventManager$$ == $dvt$$2$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_chart$, $DvtChartTooltipUtils$$.$isDataCursorEnabled$(this.$_chart$) ? $DvtChartDataCursor$$.$TOOLTIP_ID$ : null);
    }
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.indexOf("["), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.indexOf("]"), $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.indexOf(":");
    if (0 < $DvtSparkChartDefaults$$ && 0 < $DvtSparkChartAutomation$$ || 0 < $DvtChartPieRenderUtils$$) {
      $DvtChartSeriesEffectUtils$$ = 0 > $DvtChartPieRenderUtils$$ ? $DvtSparkChartEventManager$$.substring(0, $DvtSparkChartDefaults$$) : $DvtSparkChartEventManager$$.substring(0, $DvtChartPieRenderUtils$$);
      if ("group" == $DvtChartSeriesEffectUtils$$) {
        return this.$_xAxisAutomation$.$getDomElementForSubId$($DvtSparkChartEventManager$$);
      }
      if ("series" == $DvtChartSeriesEffectUtils$$) {
        return $DvtSparkChartEventManager$$ = this.$_convertToLegendSubId$($DvtSparkChartEventManager$$), this.$_legendAutomation$.$getDomElementForSubId$($DvtSparkChartEventManager$$);
      }
      if ("legend" == $DvtSparkChartEventManager$$.substring(0, $DvtChartPieRenderUtils$$)) {
        return $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.substring($DvtChartPieRenderUtils$$ + 1), this.$_legendAutomation$.$getDomElementForSubId$($DvtSparkChartEventManager$$);
      }
      $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.substring($DvtSparkChartDefaults$$ + 1, $DvtSparkChartAutomation$$);
      if ("xAxis" == $DvtChartSeriesEffectUtils$$ || "yAxis" == $DvtChartSeriesEffectUtils$$ || "y2Axis" == $DvtChartSeriesEffectUtils$$) {
        if ($DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.substring($DvtChartPieRenderUtils$$ + 1), "title" == $DvtChartPieRenderUtils$$) {
          if ("xAxis" == $DvtChartSeriesEffectUtils$$) {
            return this.$_xAxisAutomation$.$getDomElementForSubId$($DvtChartPieRenderUtils$$);
          }
          if ("yAxis" == $DvtChartSeriesEffectUtils$$) {
            return this.$_yAxisAutomation$.$getDomElementForSubId$($DvtChartPieRenderUtils$$);
          }
          if ("y2Axis" == $DvtChartSeriesEffectUtils$$) {
            return this.$_y2AxisAutomation$.$getDomElementForSubId$($DvtChartPieRenderUtils$$);
          }
        } else {
          if ($DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$.indexOf("["), $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$.indexOf("]"), "referenceObject" == $DvtChartPieRenderUtils$$.substring(0, $DvtChartSeriesEffectUtils$$) && ($DvtChartSeriesEffectUtils$$ = this.$_getRefObjPeer$($DvtChartPieRenderUtils$$.substring($DvtChartSeriesEffectUtils$$ + 1, $DvtChartPieLabelUtils$$)))) {
            return $DvtChartSeriesEffectUtils$$.$getDisplayables$()[0].$getElem$();
          }
        }
      }
      if ("pie" == this.$_options$.type && ($DvtChartSeriesEffectUtils$$ = this.$_chart$.$pieChart$.$getSliceDisplayable$($DvtSparkChartDefaults$$))) {
        return $DvtChartSeriesEffectUtils$$.$getElem$();
      }
      if ("funnel" == this.$_options$.type) {
        var $DvtChartPieLabelInfo$$ = $DvtChartFunnelRenderer$$.$_GROUP_INDEX$
      } else {
        $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.substring($DvtSparkChartAutomation$$ + 1), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.indexOf("["), $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.indexOf("]"), 0 <= $DvtChartSeriesEffectUtils$$ && 0 <= $DvtChartPieLabelUtils$$ && ($DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.substring($DvtChartSeriesEffectUtils$$ + 1, $DvtChartPieLabelUtils$$));
      }
      if ($DvtChartSeriesEffectUtils$$ = this.$_getChartObjPeer$($DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$)) {
        return $DvtChartSeriesEffectUtils$$.$getDisplayables$()[0].$getElem$();
      }
    }
    return null;
  };
  $DvtChartAutomation$$.prototype.$_getChartObjPeer$ = function $$DvtChartAutomation$$$$$_getChartObjPeer$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = this.$_chart$.$getChartObjPeers$(), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getSeriesIndex$(), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getGroupIndex$();
      if ($DvtChartTooltipUtils$$ == $dvt$$2$$ && $DvtChartSeriesEffectUtils$$ == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$];
      }
    }
    return null;
  };
  $DvtChartAutomation$$.prototype.$_getRefObjPeer$ = function $$DvtChartAutomation$$$$$_getRefObjPeer$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = this.$_chart$.$getRefObjPeers$(), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
      if ($dvt$$2$$ == $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].$getIndex$()) {
        return $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$];
      }
    }
    return null;
  };
  $DvtChartAutomation$$.prototype.$_convertToLegendSubId$ = function $$DvtChartAutomation$$$$$_convertToLegendSubId$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.substring($dvt$$2$$.indexOf("[") + 1, $dvt$$2$$.indexOf("]"));
    var $DvtSparkChartEventManager$$ = this.$_legend$.$getOptions$();
    return "section" + this.$_legendAutomation$.$getIndicesFromSeries$(this.$_options$.series[$dvt$$2$$], $DvtSparkChartEventManager$$);
  };
  $DvtChartAutomation$$.prototype.$getDataItem$ = function $$DvtChartAutomation$$$$$getDataItem$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ("pie" == this.$_options$.type || "funnel" == this.$_options$.type) {
      $DvtSparkChartEventManager$$ = 0;
    }
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ ? {borderColor:$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), color:$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), label:$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), targetValue:$DvtChartDataUtils$$.$getTargetValue$(this.$_chart$, $dvt$$2$$), tooltip:$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$, 
    !1), value:$DvtChartDataUtils$$.getValue(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), open:$DvtSparkChartDefaults$$.open, close:$DvtSparkChartDefaults$$.close, high:$DvtChartDataUtils$$.$getHighValue$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), low:$DvtChartDataUtils$$.$getLowValue$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), volume:$DvtSparkChartDefaults$$.volume, x:$DvtChartDataUtils$$.$getXValue$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), 
    y:$DvtSparkChartDefaults$$.y, z:$DvtSparkChartDefaults$$.z, min:$DvtSparkChartDefaults$$.min, max:$DvtSparkChartDefaults$$.max, group:$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $DvtSparkChartEventManager$$), series:$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $dvt$$2$$), selected:$DvtChartDataUtils$$.$isDataSelected$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$)} : null;
  };
  $DvtChartAutomation$$.prototype.$getGroup$ = function $$DvtChartAutomation$$$$$getGroup$$($dvt$$2$$) {
    return $DvtChartDataUtils$$.$getGroup$(this.$_chart$, $dvt$$2$$);
  };
  $DvtChartAutomation$$.prototype.$getSeries$ = function $$DvtChartAutomation$$$$$getSeries$$($dvt$$2$$) {
    return this.$_options$.series[$dvt$$2$$].name;
  };
  $DvtChartAutomation$$.prototype.$getGroupCount$ = function $$DvtChartAutomation$$$$$getGroupCount$$() {
    return $DvtChartDataUtils$$.$getGroupCount$(this.$_chart$);
  };
  $DvtChartAutomation$$.prototype.$getSeriesCount$ = function $$DvtChartAutomation$$$$$getSeriesCount$$() {
    return this.$_options$.series.length;
  };
  $DvtChartAutomation$$.prototype.$getTitle$ = function $$DvtChartAutomation$$$$$getTitle$$() {
    return this.$_options$.title.text;
  };
  $DvtChartAutomation$$.prototype.$getLegend$ = function $$DvtChartAutomation$$$$$getLegend$$() {
    var $DvtSparkChartEventManager$$ = this.$_legend$.$_bounds$, $DvtSparkChartDefaults$$ = this.$_legend$.$localToStage$(new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y));
    return {bounds:{x:$DvtSparkChartDefaults$$.x, y:$DvtSparkChartDefaults$$.y, width:$DvtSparkChartEventManager$$.$w$, height:$DvtSparkChartEventManager$$.$h$}, title:this.$_legend$.$getOptions$().title};
  };
  $DvtChartAutomation$$.prototype.$getPlotArea$ = function $$DvtChartAutomation$$$$$getPlotArea$$() {
    var $dvt$$2$$ = this.$_chart$.$_plotAreaSpace$;
    return {bounds:{x:$dvt$$2$$.x, y:$dvt$$2$$.y, width:$dvt$$2$$.$w$, height:$dvt$$2$$.$h$}};
  };
  $DvtChartAutomation$$.prototype.$getXAxis$ = function $$DvtChartAutomation$$$$$getXAxis$$() {
    return this.$_getAxis$("x");
  };
  $DvtChartAutomation$$.prototype.$getYAxis$ = function $$DvtChartAutomation$$$$$getYAxis$$() {
    return this.$_getAxis$("y");
  };
  $DvtChartAutomation$$.prototype.$getY2Axis$ = function $$DvtChartAutomation$$$$$getY2Axis$$() {
    return this.$_getAxis$("y2");
  };
  $DvtChartAutomation$$.prototype.$_getAxis$ = function $$DvtChartAutomation$$$$$_getAxis$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = "x" == $DvtSparkChartEventManager$$ ? this.$_xAxis$ : "y" == $DvtSparkChartEventManager$$ ? this.$_yAxis$ : this.$_y2Axis$;
    if ($DvtSparkChartDefaults$$) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_bounds$, $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.$localToStage$(new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y)), $DvtChartSeriesEffectUtils$$ = this.$_chart$;
      return {bounds:{x:$DvtChartTooltipUtils$$.x, y:$DvtChartTooltipUtils$$.y, width:$DvtSparkChartAutomation$$.$w$, height:$DvtSparkChartAutomation$$.$h$}, title:this.$_options$[$DvtSparkChartEventManager$$ + "Axis"].title, getPreferredSize:function($dvt$$2$$, $DvtSparkChartAutomation$$) {
        var $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.$getOptions$(), $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.position, $DvtChartPieRenderUtils$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtChartSeriesEffectUtils$$, $DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isStandaloneXAxis$($DvtChartSeriesEffectUtils$$) || $DvtChartTypeUtils$$.$isStandaloneYAxis$($DvtChartSeriesEffectUtils$$) || $DvtChartTypeUtils$$.$isStandaloneY2Axis$($DvtChartSeriesEffectUtils$$) ? 
        2 : 0;
        "top" == $DvtChartPieLabelUtils$$ || "bottom" == $DvtChartPieLabelUtils$$ ? ($DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartTooltipUtils$$, $dvt$$2$$, $DvtSparkChartAutomation$$ - $DvtChartPieRenderUtils$$ - $DvtChartPieLabelInfo$$), $DvtChartTooltipUtils$$.$h$ = Math.ceil($DvtChartTooltipUtils$$.$h$ + $DvtChartPieRenderUtils$$ + $DvtChartPieLabelInfo$$)) : ($DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartTooltipUtils$$, $dvt$$2$$ - 
        $DvtChartPieRenderUtils$$ - $DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$), $DvtChartTooltipUtils$$.$w$ = Math.ceil($DvtChartTooltipUtils$$.$w$ + $DvtChartPieRenderUtils$$ + $DvtChartPieLabelInfo$$));
        return {width:$DvtChartTooltipUtils$$.$w$, height:$DvtChartTooltipUtils$$.$h$};
      }};
    }
    return null;
  };
  $dvt$$2$$.$Automation$.prototype.$IsTooltipElement$ = function $$dvt$$2$$$$Automation$$$$IsTooltipElement$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.getAttribute("id");
    return !$DvtSparkChartEventManager$$ || 0 != $DvtSparkChartEventManager$$.indexOf($DvtChartDataCursor$$.$TOOLTIP_ID$) && 0 != $DvtSparkChartEventManager$$.indexOf($dvt$$2$$.$HtmlTooltipManager$.$_TOOLTIP_DIV_ID$) ? !1 : !0;
  };
  $dvt$$2$$.$Bundle$.$addDefaultStrings$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, {DEFAULT_GROUP_NAME:"Group {0}", LABEL_SERIES:"Series", LABEL_GROUP:"Group", LABEL_VALUE:"Value", LABEL_TARGET_VALUE:"Target", LABEL_X:"X", LABEL_Y:"Y", LABEL_Z:"Z", LABEL_PERCENTAGE:"Percentage", LABEL_MIN:"Min", LABEL_MAX:"Max", LABEL_HIGH:"High", LABEL_LOW:"Low", LABEL_OPEN:"Open", LABEL_CLOSE:"Close", LABEL_VOLUME:"Volume", LABEL_OTHER:"Other", MARQUEE_SELECT:"Marquee select", MARQUEE_ZOOM:"Marquee zoom", PAN:"Pan"});
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartEventManager$$, $dvt$$2$$.$EventManager$);
  $DvtChartEventManager$$.$DRAG_MODE_PAN$ = "pan";
  $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ = "zoom";
  $DvtChartEventManager$$.$DRAG_MODE_SELECT$ = "select";
  $DvtChartEventManager$$.$DRAG_MODE_OFF$ = "off";
  $DvtChartEventManager$$.prototype.$getComponent$ = function $$DvtChartEventManager$$$$$getComponent$$() {
    return this.$_chart$;
  };
  $DvtChartEventManager$$.prototype.$addListeners$ = function $$DvtChartEventManager$$$$$addListeners$$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$SvgDocumentUtils$.$addDragListeners$(this.$_chart$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
    $DvtChartEventManager$$.$superclass$.$addListeners$.call(this, $DvtSparkChartEventManager$$);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || $DvtSparkChartEventManager$$.$addEvtListener$($dvt$$2$$.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this);
  };
  $DvtChartEventManager$$.prototype.$removeListeners$ = function $$DvtChartEventManager$$$$$removeListeners$$($DvtSparkChartEventManager$$) {
    $DvtChartEventManager$$.$superclass$.$removeListeners$.call(this, $DvtSparkChartEventManager$$);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || $DvtSparkChartEventManager$$.$removeEvtListener$($dvt$$2$$.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this);
  };
  $DvtChartEventManager$$.prototype.$getLogicalObject$ = function $$DvtChartEventManager$$$$$getLogicalObject$$($dvt$$2$$) {
    return this.$GetLogicalObject$($dvt$$2$$, !0);
  };
  $DvtChartEventManager$$.prototype.$_getRelativePosition$ = function $$DvtChartEventManager$$$$$_getRelativePosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
    return new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$ - this.$_stageAbsolutePosition$.x, $DvtSparkChartDefaults$$ - this.$_stageAbsolutePosition$.y);
  };
  $DvtChartEventManager$$.prototype.$_getDragHandler$ = function $$DvtChartEventManager$$$$$_getDragHandler$$($dvt$$2$$) {
    $dvt$$2$$ && "user" == this.$_chart$.$getOptions$().dragMode && $DvtChartTypeUtils$$.$isBLAC$(this.$_chart$) && (this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_PAN$ || this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$) && (this.$_panZoomHandler$.$isWithinBounds$($dvt$$2$$) ? this.$_dragMode$ = $DvtChartEventManager$$.$DRAG_MODE_PAN$ : this.$_dragMode$ = $DvtChartEventManager$$.$DRAG_MODE_ZOOM$);
    return this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_PAN$ ? this.$_panZoomHandler$ : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ ? this.$_marqueeZoomHandler$ : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_SELECT$ ? this.$_marqueeSelectHandler$ : null;
  };
  $DvtChartEventManager$$.prototype.$_onDragStart$ = function $$DvtChartEventManager$$$$$_onDragStart$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($DvtSparkChartEventManager$$) : this.$_onMouseDragStart$($DvtSparkChartEventManager$$);
  };
  $DvtChartEventManager$$.prototype.$_onDragMove$ = function $$DvtChartEventManager$$$$$_onDragMove$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($DvtSparkChartEventManager$$) : this.$_onMouseDragMove$($DvtSparkChartEventManager$$);
  };
  $DvtChartEventManager$$.prototype.$_onDragEnd$ = function $$DvtChartEventManager$$$$$_onDragEnd$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($DvtSparkChartEventManager$$) : this.$_onMouseDragEnd$($DvtSparkChartEventManager$$);
  };
  $DvtChartEventManager$$.prototype.$_onMouseDragStart$ = function $$DvtChartEventManager$$$$$_onMouseDragStart$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_getDragHandler$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$2$$));
    $DvtChartTooltipUtils$$ && $DvtChartTooltipUtils$$.$isSelectable$ && $DvtChartTooltipUtils$$.$isSelectable$() || 0 != $dvt$$2$$.button || !$DvtSparkChartDefaults$$ || (($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$processDragStart$($DvtSparkChartEventManager$$, $dvt$$2$$.ctrlKey)) && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartAutomation$$), this.$_chart$.setCursor($DvtSparkChartDefaults$$.getCursor($DvtSparkChartEventManager$$)), this.$setDragButtonsVisible$(!1), this.$_chart$ != 
    this.$getCtx$().$getCurrentKeyboardFocus$() && this.$getCtx$().$setCurrentKeyboardFocus$(this.$_chart$));
    return $DvtSparkChartAutomation$$ ? (this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$(), !0) : !1;
  };
  $DvtChartEventManager$$.prototype.$_onMouseDragMove$ = function $$DvtChartEventManager$$$$$_onMouseDragMove$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_getDragHandler$(), $DvtSparkChartAutomation$$;
    $DvtSparkChartDefaults$$ && ($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$processDragMove$($DvtSparkChartEventManager$$, $dvt$$2$$.ctrlKey)) && (this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartAutomation$$), this.$setDragButtonsVisible$(!1));
    $DvtSparkChartAutomation$$ && $dvt$$2$$.stopPropagation();
  };
  $DvtChartEventManager$$.prototype.$_onMouseDragEnd$ = function $$DvtChartEventManager$$$$$_onMouseDragEnd$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_getDragHandler$();
    if ($DvtSparkChartDefaults$$) {
      if ($dvt$$2$$ = $DvtSparkChartDefaults$$.$processDragEnd$($DvtSparkChartEventManager$$, $dvt$$2$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $dvt$$2$$), this.$autoToggleZoomButton$();
      }
      this.$_chart$.setCursor($DvtSparkChartDefaults$$.getCursor($DvtSparkChartEventManager$$));
      ($DvtSparkChartDefaults$$ = this.$_chart$.$_axisSpace$) && this.$setDragButtonsVisible$($DvtSparkChartDefaults$$.$containsPoint$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y));
    }
    this.$_stageAbsolutePosition$ = null;
  };
  $DvtChartEventManager$$.prototype.$OnMouseMove$ = function $$DvtChartEventManager$$$$$OnMouseMove$$($DvtSparkChartEventManager$$) {
    $DvtChartEventManager$$.$superclass$.$OnMouseMove$.call(this, $DvtSparkChartEventManager$$);
    var $DvtSparkChartDefaults$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$.pageX, $DvtSparkChartEventManager$$.pageY);
    this.$_dataCursorHandler$ && (this.$GetCurrentTargetForEvent$($DvtSparkChartEventManager$$) instanceof $dvt$$2$$.$Button$ ? this.$_dataCursorHandler$.$processEnd$() : this.$_dataCursorHandler$.$processMove$($DvtSparkChartDefaults$$));
    ($DvtSparkChartEventManager$$ = this.$_getDragHandler$($DvtSparkChartDefaults$$)) ? this.$_chart$.setCursor($DvtSparkChartEventManager$$.getCursor($DvtSparkChartDefaults$$)) : this.$_chart$.setCursor("default");
  };
  $DvtChartEventManager$$.prototype.$OnMouseOut$ = function $$DvtChartEventManager$$$$$OnMouseOut$$($dvt$$2$$) {
    $DvtChartEventManager$$.$superclass$.$OnMouseOut$.call(this, $dvt$$2$$);
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_chart$.$_axisSpace$;
    $DvtSparkChartDefaults$$ && this.$setDragButtonsVisible$($DvtSparkChartDefaults$$.$containsPoint$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y));
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processOut$($DvtSparkChartEventManager$$);
    this.$_stageAbsolutePosition$ = null;
    this.$GetLogicalObject$($dvt$$2$$.target);
  };
  $DvtChartEventManager$$.prototype.$OnMouseWheel$ = function $$DvtChartEventManager$$$$$OnMouseWheel$$($dvt$$2$$) {
    if ($DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
      var $DvtSparkChartEventManager$$ = null != $dvt$$2$$.wheelDelta ? $dvt$$2$$.wheelDelta : 0, $DvtSparkChartDefaults$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY);
      this.$_panZoomHandler$ && ($DvtSparkChartEventManager$$ = this.$_panZoomHandler$.$processMouseWheel$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$)) && ($dvt$$2$$.preventDefault(), $dvt$$2$$.stopPropagation(), this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartEventManager$$), this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processMove$($DvtSparkChartDefaults$$));
    }
  };
  $DvtChartEventManager$$.prototype.$ShowFocusEffect$ = function $$DvtChartEventManager$$$$$ShowFocusEffect$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if (this.$_dataCursorHandler$) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_dataPos$;
      if ($DvtSparkChartAutomation$$) {
        var $DvtChartTooltipUtils$$ = this.$_chart$.$_plotAreaSpace$;
        this.$_dataCursorHandler$.$processMove$(new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x + $DvtChartTooltipUtils$$.x, $DvtSparkChartAutomation$$.y + $DvtChartTooltipUtils$$.y));
      }
    }
    $DvtChartEventManager$$.$superclass$.$ShowFocusEffect$.call(this, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartEventManager$$.prototype.$OnBlur$ = function $$DvtChartEventManager$$$$$OnBlur$$($dvt$$2$$) {
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$();
    $DvtChartEventManager$$.$superclass$.$OnBlur$.call(this, $dvt$$2$$);
  };
  $DvtChartEventManager$$.prototype.$OnClickInternal$ = function $$DvtChartEventManager$$$$$OnClickInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    $dvt$$2$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY);
    this.$SeriesFocusHandler$ && this.$SeriesFocusHandler$.$processSeriesFocus$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$ && (this.$processActionEvent$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$.$isSelectable$ && $DvtSparkChartEventManager$$.$isSelectable$() || this.$processDrillEvent$($DvtSparkChartEventManager$$));
  };
  $DvtChartEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtChartEventManager$$$$$OnDblClickInternal$$($dvt$$2$$) {
    ($dvt$$2$$ = this.$GetLogicalObject$($dvt$$2$$.target)) && $dvt$$2$$.$isSelectable$ && $dvt$$2$$.$isSelectable$() && this.$processDrillEvent$($dvt$$2$$);
  };
  $DvtChartEventManager$$.prototype.$HandleTouchHoverStartInternal$ = function $$DvtChartEventManager$$$$$HandleTouchHoverStartInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    this.$TouchManager$.$setTooltipEnabled$($dvt$$2$$.$touch$.identifier, this.$getTooltipsEnabled$($DvtSparkChartEventManager$$));
    return !1;
  };
  $DvtChartEventManager$$.prototype.$HandleTouchHoverMoveInternal$ = function $$DvtChartEventManager$$$$$HandleTouchHoverMoveInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    this.$TouchManager$.$setTooltipEnabled$($dvt$$2$$.$touch$.identifier, this.$getTooltipsEnabled$($DvtSparkChartEventManager$$));
    return !1;
  };
  $DvtChartEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtChartEventManager$$$$$HandleTouchHoverEndInternal$$($dvt$$2$$) {
    if ($dvt$$2$$ = this.$GetLogicalObject$($dvt$$2$$.target)) {
      this.$processActionEvent$($dvt$$2$$), $dvt$$2$$.$isSelectable$ && $dvt$$2$$.$isSelectable$() || this.$processDrillEvent$($dvt$$2$$);
    }
  };
  $DvtChartEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtChartEventManager$$$$$HandleTouchClickInternal$$($dvt$$2$$) {
    if ($dvt$$2$$ = this.$GetLogicalObject$($dvt$$2$$.target)) {
      this.$processActionEvent$($dvt$$2$$), $dvt$$2$$.$isSelectable$ && $dvt$$2$$.$isSelectable$() || this.$processDrillEvent$($dvt$$2$$);
    }
  };
  $DvtChartEventManager$$.prototype.$HandleTouchDblClickInternal$ = function $$DvtChartEventManager$$$$$HandleTouchDblClickInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.$isSelectable$ && $DvtSparkChartEventManager$$.$isSelectable$() && ($dvt$$2$$.preventDefault(), $dvt$$2$$.stopPropagation(), this.$processDrillEvent$($DvtSparkChartEventManager$$));
  };
  $DvtChartEventManager$$.prototype.$processActionEvent$ = function $$DvtChartEventManager$$$$$processActionEvent$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.$getAction$ && $DvtSparkChartEventManager$$.$getAction$() && this.$FireEvent$($dvt$$2$$.$EventFactory$.$newActionEvent$("action", $DvtSparkChartEventManager$$.$getAction$(), $DvtSparkChartEventManager$$.getId()));
  };
  $DvtChartEventManager$$.prototype.$processDrillEvent$ = function $$DvtChartEventManager$$$$$processDrillEvent$$($DvtSparkChartEventManager$$) {
    if ($DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.$isDrillable$ && $DvtSparkChartEventManager$$.$isDrillable$()) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.getId();
      $DvtSparkChartEventManager$$ instanceof $DvtChartObjPeer$$ ? this.$FireEvent$($dvt$$2$$.$EventFactory$.$newChartDrillEvent$($DvtSparkChartDefaults$$.getId ? $DvtSparkChartDefaults$$.getId() : $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$.$getSeries$(), $DvtSparkChartEventManager$$.$getGroup$())) : $DvtSparkChartEventManager$$ instanceof $DvtChartPieSlice$$ && this.$FireEvent$($dvt$$2$$.$EventFactory$.$newChartDrillEvent$($DvtSparkChartDefaults$$.getId(), $DvtSparkChartDefaults$$.$getSeries$(), 
      $DvtSparkChartDefaults$$.$getGroup$()));
    }
  };
  $DvtChartEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtChartEventManager$$$$$ProcessRolloverEvent$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartEventManager$$ = this.$_chart$.$getOptions$();
    if ("dim" == $DvtChartEventUtils$$.$getHoverBehavior$(this.$_chart$)) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getCategories$ ? $DvtSparkChartDefaults$$.$getCategories$() : [];
      $DvtSparkChartEventManager$$.highlightedCategories = $DvtSparkChartAutomation$$ ? $DvtSparkChartDefaults$$.slice() : null;
      $DvtSparkChartAutomation$$ = $dvt$$2$$.$EventFactory$.$newCategoryHighlightEvent$($DvtSparkChartEventManager$$.highlightedCategories, $DvtSparkChartAutomation$$);
      $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getHoverBehaviorDelay$(this.$_chart$);
      var $DvtChartTooltipUtils$$ = this.$_chart$.$getObjects$();
      this.$_chart$.$pieChart$ && ($DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$.concat(this.$_chart$.$pieChart$.$_slices$));
      this.$RolloverHandler$.$processEvent$($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtSparkChartDefaults$$, "any" == $DvtSparkChartEventManager$$.highlightMatch);
    }
  };
  $DvtChartEventManager$$.prototype.$_onTouchDragStart$ = function $$DvtChartEventManager$$$$$_onTouchDragStart$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.touches, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$;
    if (1 == $DvtSparkChartEventManager$$.length) {
      var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtChartTooltipUtils$$ = this.$_getDragHandler$();
      $DvtChartTooltipUtils$$ ? $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$.$processDragStart$($DvtSparkChartEventManager$$, !0) : this.$_dataCursorHandler$ && (this.$_dataCursorHandler$.$processMove$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = !0);
    } else {
      2 == $DvtSparkChartEventManager$$.length && this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && (this.$endDrag$(), $DvtSparkChartDefaults$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[1].pageX, $DvtSparkChartEventManager$$[1].pageY), $DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$processPinchStart$($DvtSparkChartDefaults$$, 
      $DvtSparkChartEventManager$$));
    }
    $DvtSparkChartDefaults$$ && (this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$());
    return $DvtSparkChartDefaults$$ || $DvtSparkChartAutomation$$ ? ($dvt$$2$$.preventDefault(), $dvt$$2$$.stopPropagation(), this.$setDragButtonsVisible$(!1), !0) : !1;
  };
  $DvtChartEventManager$$.prototype.$_onTouchDragMove$ = function $$DvtChartEventManager$$$$$_onTouchDragMove$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.touches, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$;
    if (1 == $DvtSparkChartEventManager$$.length) {
      var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtChartTooltipUtils$$ = this.$_getDragHandler$();
      $DvtChartTooltipUtils$$ ? $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$.$processDragMove$($DvtSparkChartEventManager$$, !0) : this.$_dataCursorHandler$ && (this.$_dataCursorHandler$.$processMove$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = !0);
    } else {
      2 == $DvtSparkChartEventManager$$.length && this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($DvtSparkChartDefaults$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[1].pageX, $DvtSparkChartEventManager$$[1].pageY), $DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$processPinchMove$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$))
      ;
    }
    ($DvtSparkChartDefaults$$ || $DvtSparkChartAutomation$$) && $dvt$$2$$.preventDefault();
    $DvtSparkChartDefaults$$ && (this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$());
  };
  $DvtChartEventManager$$.prototype.$_onTouchDragEnd$ = function $$DvtChartEventManager$$$$$_onTouchDragEnd$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$endDrag$(), $DvtSparkChartDefaults$$;
    this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$processPinchEnd$()) && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$);
    if ($DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$) {
      $dvt$$2$$.preventDefault(), this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    }
    this.$_stageAbsolutePosition$ = null;
    this.$setDragButtonsVisible$(!0);
  };
  $DvtChartEventManager$$.prototype.$endDrag$ = function $$DvtChartEventManager$$$$$endDrag$$() {
    var $dvt$$2$$ = this.$_getDragHandler$(), $DvtSparkChartEventManager$$;
    $dvt$$2$$ && ($DvtSparkChartEventManager$$ = $dvt$$2$$.$processDragEnd$(null, !0)) && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartEventManager$$);
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$();
    $DvtSparkChartEventManager$$ && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartEventManager$$.prototype.$zoomBy$ = function $$DvtChartEventManager$$$$$zoomBy$$($dvt$$2$$) {
    this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($dvt$$2$$ = this.$_panZoomHandler$.$zoomBy$($dvt$$2$$)) && this.$_callback$.call(this.$_callbackObj$, $dvt$$2$$);
  };
  $DvtChartEventManager$$.prototype.$panBy$ = function $$DvtChartEventManager$$$$$panBy$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isScrollable$(this.$_chart$)) {
      var $DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$panBy$($dvt$$2$$, $DvtSparkChartEventManager$$);
      $DvtSparkChartDefaults$$ && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$);
    }
  };
  $DvtChartEventManager$$.prototype.$hideHoverFeedback$ = function $$DvtChartEventManager$$$$$hideHoverFeedback$$() {
    this.$hideTooltip$();
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$();
  };
  $DvtChartEventManager$$.prototype.$hideTooltip$ = function $$DvtChartEventManager$$$$$hideTooltip$$() {
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$_dataCursorShown$ || $DvtChartEventManager$$.$superclass$.$hideTooltip$.call(this);
  };
  $DvtChartEventManager$$.prototype.$getTooltipsEnabled$ = function $$DvtChartEventManager$$$$$getTooltipsEnabled$$($dvt$$2$$) {
    return this.$_dataCursorHandler$ && ($dvt$$2$$ instanceof $DvtChartObjPeer$$ || $dvt$$2$$ instanceof $DvtChartRefObjPeer$$ || this.$_dataCursorHandler$.$_dataCursorShown$) ? !1 : $DvtChartEventManager$$.$superclass$.$getTooltipsEnabled$.call(this);
  };
  $DvtChartEventManager$$.prototype.$setDataCursorHandler$ = function $$DvtChartEventManager$$$$$setDataCursorHandler$$($dvt$$2$$) {
    this.$_dataCursorHandler$ = $dvt$$2$$;
  };
  $DvtChartEventManager$$.prototype.$setPanZoomHandler$ = function $$DvtChartEventManager$$$$$setPanZoomHandler$$($dvt$$2$$) {
    this.$_panZoomHandler$ = $dvt$$2$$;
  };
  $DvtChartEventManager$$.prototype.$setMarqueeZoomHandler$ = function $$DvtChartEventManager$$$$$setMarqueeZoomHandler$$($dvt$$2$$) {
    this.$_marqueeZoomHandler$ = $dvt$$2$$;
  };
  $DvtChartEventManager$$.prototype.$setMarqueeSelectHandler$ = function $$DvtChartEventManager$$$$$setMarqueeSelectHandler$$($dvt$$2$$) {
    this.$_marqueeSelectHandler$ = $dvt$$2$$;
  };
  $DvtChartEventManager$$.prototype.$cancelMarquee$ = function $$DvtChartEventManager$$$$$cancelMarquee$$($dvt$$2$$) {
    this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ ? this.$_marqueeZoomHandler$.$cancelMarquee$() && $dvt$$2$$.preventDefault() : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_SELECT$ && this.$_marqueeSelectHandler$ && this.$_marqueeSelectHandler$.$cancelMarquee$() && this.$_chart$.$render$();
  };
  $DvtChartEventManager$$.prototype.$setDragMode$ = function $$DvtChartEventManager$$$$$setDragMode$$($dvt$$2$$) {
    this.$_dragMode$ = null == $dvt$$2$$ ? this.$_getDefaultDragMode$() : $dvt$$2$$;
    !this.$_chart$.$xAxis$.$isFullViewport$() || this.$_chart$.$yAxis$ && !this.$_chart$.$yAxis$.$isFullViewport$() || this.$autoToggleZoomButton$();
  };
  $DvtChartEventManager$$.prototype.$_getDefaultDragMode$ = function $$DvtChartEventManager$$$$$_getDefaultDragMode$$() {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? $DvtChartEventManager$$.$DRAG_MODE_OFF$ : $DvtChartEventUtils$$.$isScrollable$(this.$_chart$) ? $DvtChartEventManager$$.$DRAG_MODE_PAN$ : "multiple" == this.$_chart$.$getOptions$().selectionMode ? $DvtChartEventManager$$.$DRAG_MODE_SELECT$ : null;
  };
  $DvtChartEventManager$$.prototype.$onZoomButtonClick$ = function $$DvtChartEventManager$$$$$onZoomButtonClick$$() {
    this.$zoomButton$.$_bToggled$ ? (this.$selectButton$ && this.$selectButton$.$setToggled$(!1), this.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_ZOOM$)) : this.$setDragMode$(null);
  };
  $DvtChartEventManager$$.prototype.$onPanButtonClick$ = function $$DvtChartEventManager$$$$$onPanButtonClick$$() {
    this.$panButton$.$_bToggled$ ? (this.$selectButton$ && this.$selectButton$.$setToggled$(!1), this.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_PAN$)) : this.$setDragMode$(null);
  };
  $DvtChartEventManager$$.prototype.$onSelectButtonClick$ = function $$DvtChartEventManager$$$$$onSelectButtonClick$$() {
    this.$selectButton$.$_bToggled$ ? (this.$zoomButton$ && this.$zoomButton$.$setToggled$(!1), this.$panButton$ && this.$panButton$.$setToggled$(!1), this.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_SELECT$)) : this.$setDragMode$(null);
  };
  $DvtChartEventManager$$.prototype.$setDragButtonsVisible$ = function $$DvtChartEventManager$$$$$setDragButtonsVisible$$($dvt$$2$$) {
    $dvt$$2$$ && !this.$_dragButtonsVisible$ ? (this.$_chart$.$showDragButtons$(), this.$_dragButtonsVisible$ = !0) : !$dvt$$2$$ && this.$_dragButtonsVisible$ && (this.$_chart$.$hideDragButtons$(), this.$_dragButtonsVisible$ = !1);
  };
  $DvtChartEventManager$$.prototype.$autoToggleZoomButton$ = function $$DvtChartEventManager$$$$$autoToggleZoomButton$$() {
    !$dvt$$2$$.$Agent$.$isTouchDevice$() && this.$zoomButton$ && (this.$_chart$.$xAxis$.$isFullViewport$() && this.$_chart$.$yAxis$.$isFullViewport$() ? this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_PAN$ && (this.$zoomButton$.$setToggled$(!0), this.$onZoomButtonClick$()) : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ && (this.$zoomButton$.$setToggled$(!1), this.$onZoomButtonClick$()));
  };
  $DvtChartEventManager$$.prototype.$GetTouchResponse$ = function $$DvtChartEventManager$$$$$GetTouchResponse$$() {
    return this.$_dragMode$ && this.$_dragMode$ != $DvtChartEventManager$$.$DRAG_MODE_OFF$ ? $dvt$$2$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : this.$_chart$.$getOptions$().touchResponse;
  };
  $DvtChartEventManager$$.prototype.$isDndSupported$ = function $$DvtChartEventManager$$$$$isDndSupported$$() {
    return !0;
  };
  $DvtChartEventManager$$.prototype.$GetDragSourceType$ = function $$DvtChartEventManager$$$$$GetDragSourceType$$() {
    var $dvt$$2$$ = this.$DragSource$.$_dragObj$;
    return $dvt$$2$$ instanceof $DvtChartObjPeer$$ && 0 <= $dvt$$2$$.$getSeriesIndex$() && 0 <= $dvt$$2$$.$getGroupIndex$() ? "items" : null;
  };
  $DvtChartEventManager$$.prototype.$GetDragDataContexts$ = function $$DvtChartEventManager$$$$$GetDragDataContexts$$() {
    if (this.$_chart$.$isSelectionSupported$() && 1 < this.$_chart$.$getSelectionHandler$().$_selection$.length) {
      for (var $dvt$$2$$ = this.$_chart$.$getSelectionHandler$().getSelection(), $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataContext$(this.$_chart$, $dvt$$2$$[$DvtSparkChartDefaults$$].$getSeriesIndex$(), $dvt$$2$$[$DvtSparkChartDefaults$$].$getGroupIndex$());
        $DvtSparkChartEventManager$$.push($DvtSparkChartAutomation$$);
      }
      return $DvtSparkChartEventManager$$;
    }
    $dvt$$2$$ = this.$DragSource$.$_dragObj$;
    return [$DvtChartDataUtils$$.$getDataContext$(this.$_chart$, $dvt$$2$$.$getSeriesIndex$(), $dvt$$2$$.$getGroupIndex$())];
  };
  $DvtChartEventManager$$.prototype.$GetDropOffset$ = function $$DvtChartEventManager$$$$$GetDropOffset$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$DragSource$.$_dragObj$;
    return $DvtSparkChartDefaults$$ instanceof $DvtChartObjPeer$$ ? ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$_dataPos$, $DvtSparkChartDefaults$$ = this.$_chart$.$getPlotArea$().$localToStage$($DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$.pageX, $DvtSparkChartEventManager$$.pageY), new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x - $DvtSparkChartEventManager$$.x, $DvtSparkChartDefaults$$.y - $DvtSparkChartEventManager$$.y)) : 
    null;
  };
  $DvtChartEventManager$$.prototype.$GetDropTargetType$ = function $$DvtChartEventManager$$$$$GetDropTargetType$$($dvt$$2$$) {
    $dvt$$2$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY);
    return this.$_chart$.$_plotAreaSpace$.$containsPoint$($dvt$$2$$.x, $dvt$$2$$.y) ? "plotArea" : $DvtChartAxisUtils$$.$axisContainsPoint$(this.$_chart$.$xAxis$, $dvt$$2$$) ? "xAxis" : $DvtChartAxisUtils$$.$axisContainsPoint$(this.$_chart$.$yAxis$, $dvt$$2$$) ? "yAxis" : $DvtChartAxisUtils$$.$axisContainsPoint$(this.$_chart$.$y2Axis$, $dvt$$2$$) ? "y2Axis" : null;
  };
  $DvtChartEventManager$$.prototype.$GetDropEventPayload$ = function $$DvtChartEventManager$$$$$GetDropEventPayload$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNativeEvent$().dataTransfer, $DvtSparkChartAutomation$$ = Number($DvtSparkChartDefaults$$.getData($dvt$$2$$.$EventManager$.$DROP_OFFSET_X_DATA_TYPE$)) || 0, $DvtSparkChartDefaults$$ = Number($DvtSparkChartDefaults$$.getData($dvt$$2$$.$EventManager$.$DROP_OFFSET_Y_DATA_TYPE$)) || 0;
    $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$.pageX, $DvtSparkChartEventManager$$.pageY);
    return this.$_chart$.$getValuesAt$($DvtSparkChartEventManager$$.x + $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.y + $DvtSparkChartDefaults$$);
  };
  $DvtChartEventManager$$.prototype.$ShowDropEffect$ = function $$DvtChartEventManager$$$$$ShowDropEffect$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetDropTargetType$($dvt$$2$$);
    $dvt$$2$$ = this.$_chart$.$getOptions$()._dropColor;
    "plotArea" == $DvtSparkChartEventManager$$ ? ($DvtSparkChartEventManager$$ = this.$_chart$.$_cache$.$getFromCache$("plotAreaBackground")) && $DvtSparkChartEventManager$$.$setSolidFill$($dvt$$2$$) : "xAxis" == $DvtSparkChartEventManager$$ ? this.$_chart$.$xAxis$.$_cache$.$getFromCache$("background").$setSolidFill$($dvt$$2$$) : "yAxis" == $DvtSparkChartEventManager$$ ? this.$_chart$.$yAxis$.$_cache$.$getFromCache$("background").$setSolidFill$($dvt$$2$$) : "y2Axis" == $DvtSparkChartEventManager$$ && 
    this.$_chart$.$y2Axis$.$_cache$.$getFromCache$("background").$setSolidFill$($dvt$$2$$);
  };
  $DvtChartEventManager$$.prototype.$ClearDropEffect$ = function $$DvtChartEventManager$$$$$ClearDropEffect$$() {
    function $dvt$$2$$($DvtSparkChartEventManager$$) {
      $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$_cache$.$getFromCache$("background")) && $DvtSparkChartEventManager$$.$setInvisibleFill$();
    }
    var $DvtSparkChartEventManager$$ = this.$_chart$.$_cache$.$getFromCache$("plotAreaBackground");
    if ($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getBackgroundColor$(this.$_chart$);
      $DvtSparkChartDefaults$$ ? $DvtSparkChartEventManager$$.$setSolidFill$($DvtSparkChartDefaults$$) : $DvtSparkChartEventManager$$.$setInvisibleFill$();
    }
    $dvt$$2$$(this.$_chart$.$xAxis$);
    $dvt$$2$$(this.$_chart$.$yAxis$);
    $dvt$$2$$(this.$_chart$.$y2Axis$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartKeyboardHandler$$, $dvt$$2$$.$KeyboardHandler$);
  $DvtChartKeyboardHandler$$.prototype.Init = function $$DvtChartKeyboardHandler$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$2$$);
    this.$_chart$ = $DvtSparkChartEventManager$$;
  };
  $DvtChartKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtChartKeyboardHandler$$$$$isSelectionEvent$$($dvt$$2$$) {
    return this.$isNavigationEvent$($dvt$$2$$) && !$dvt$$2$$.ctrlKey;
  };
  $DvtChartKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtChartKeyboardHandler$$$$$isMultiSelectEvent$$($DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.KeyboardEvent.$SPACE$ && $DvtSparkChartEventManager$$.ctrlKey;
  };
  $DvtChartKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtChartKeyboardHandler$$$$$processKeyDown$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.keyCode;
    if ($DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$TAB$) {
      if ($DvtSparkChartDefaults$$ = this.$_eventManager$.$getFocus$()) {
        return $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$;
      }
      $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$getKeyboardNavigables$(this.$_chart$);
      if (0 < $DvtSparkChartDefaults$$.length) {
        return $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$), this.$getDefaultNavigable$($DvtSparkChartDefaults$$);
      }
    } else {
      if ($DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$ENTER$) {
        if ($DvtSparkChartDefaults$$ = this.$_eventManager$.$getFocus$()) {
          return this.$_eventManager$.$processActionEvent$($DvtSparkChartDefaults$$), this.$_eventManager$.$processDrillEvent$($DvtSparkChartDefaults$$), $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$;
        }
      } else {
        $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$ESCAPE$ ? this.$_eventManager$.$cancelMarquee$($DvtSparkChartEventManager$$) : $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$PAGE_UP$ ? (($DvtSparkChartEventManager$$.ctrlKey || $DvtSparkChartEventManager$$.shiftKey || $DvtChartTypeUtils$$.$isBLAC$(this.$_chart$)) && $DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? this.$_eventManager$.$panBy$(-.25, 0) : this.$_eventManager$.$panBy$(0, -.25), $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$)) : 
        $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$PAGE_DOWN$ ? (($DvtSparkChartEventManager$$.ctrlKey || $DvtSparkChartEventManager$$.shiftKey || $DvtChartTypeUtils$$.$isBLAC$(this.$_chart$)) && $DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? this.$_eventManager$.$panBy$(.25, 0) : this.$_eventManager$.$panBy$(0, .25), $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$)) : $dvt$$2$$.KeyboardEvent.$isEquals$($DvtSparkChartEventManager$$) || $dvt$$2$$.KeyboardEvent.$isPlus$($DvtSparkChartEventManager$$) ? 
        this.$_eventManager$.$zoomBy$(1.5) : ($dvt$$2$$.KeyboardEvent.$isMinus$($DvtSparkChartEventManager$$) || $dvt$$2$$.KeyboardEvent.$isUnderscore$($DvtSparkChartEventManager$$)) && this.$_eventManager$.$zoomBy$(1 / 1.5);
      }
    }
    return $DvtChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtSparkChartEventManager$$);
  };
  $DvtChartKeyboardHandler$$.prototype.$getDefaultNavigable$ = function $$DvtChartKeyboardHandler$$$$$getDefaultNavigable$$($dvt$$2$$) {
    if (!$dvt$$2$$ || 0 >= $dvt$$2$$.length) {
      return null;
    }
    for (var $DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isPie$(this.$_chart$), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $dvt$$2$$.length;$DvtChartPieLabelUtils$$++) {
      $DvtChartSeriesEffectUtils$$ = $dvt$$2$$[$DvtChartPieLabelUtils$$], !$DvtSparkChartDefaults$$ || $DvtChartSeriesEffectUtils$$.$getSeriesIndex$() < $DvtSparkChartAutomation$$ ? ($DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$ = $DvtChartSeriesEffectUtils$$.$getSeriesIndex$(), $DvtSparkChartEventManager$$ || ($DvtChartTooltipUtils$$ = $DvtChartSeriesEffectUtils$$.$getGroupIndex$())) : !$DvtSparkChartEventManager$$ && $DvtChartSeriesEffectUtils$$.$getGroupIndex$() < 
      $DvtChartTooltipUtils$$ && ($DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$ = $DvtChartSeriesEffectUtils$$.$getSeriesIndex$(), $DvtChartTooltipUtils$$ = $DvtChartSeriesEffectUtils$$.$getGroupIndex$());
    }
    return $DvtSparkChartDefaults$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartObjPeer$$, $dvt$$2$$.$Obj$);
  $DvtChartObjPeer$$.prototype.Init = function $$DvtChartObjPeer$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    this.$_chart$ = $dvt$$2$$;
    this.$_displayables$ = $DvtSparkChartEventManager$$;
    this.$_seriesIndex$ = null != $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$ : -1;
    this.$_groupIndex$ = null != $DvtSparkChartAutomation$$ ? $DvtSparkChartAutomation$$ : -1;
    this.$_dataPos$ = $DvtChartTooltipUtils$$;
    this.$_isShowingKeyboardFocusEffect$ = this.$_isSelected$ = !1;
    0 <= $DvtSparkChartDefaults$$ && (this.$_series$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartDefaults$$));
    0 <= $DvtSparkChartAutomation$$ && (this.$_group$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartAutomation$$));
    if ($DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
      this.$_action$ = $DvtChartTooltipUtils$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isSeriesDrillable$($dvt$$2$$, $DvtSparkChartDefaults$$), this.$_stampId$ = $DvtChartTooltipUtils$$._id;
    }
    $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    this.$_categories$ = $DvtChartDataUtils$$.$getDataItemCategories$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartTooltipUtils$$ && (this.$_dataItemId$ = $DvtChartTooltipUtils$$.id, this.$_action$ = $DvtChartTooltipUtils$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isDataItemDrillable$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), this.$_stampId$ = $DvtChartTooltipUtils$$._id);
    if (this.$_action$ || this.$_drillable$) {
      for ($dvt$$2$$ = 0;$dvt$$2$$ < this.$_displayables$.length;$dvt$$2$$++) {
        this.$_displayables$[$dvt$$2$$].setCursor("pointer");
      }
    }
    for ($dvt$$2$$ = 0;$dvt$$2$$ < $DvtSparkChartEventManager$$.length;$dvt$$2$$++) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$[$dvt$$2$$], $DvtSparkChartDefaults$$ instanceof $DvtChartLineArea$$ || $DvtSparkChartDefaults$$.$setAriaRole$("img"), this.$_updateAriaLabel$($DvtSparkChartDefaults$$);
    }
  };
  $DvtChartObjPeer$$.$associate$ = function $$DvtChartObjPeer$$$$associate$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    $dvt$$2$$ && ($DvtSparkChartDefaults$$ = new $DvtChartObjPeer$$($DvtSparkChartEventManager$$, [$dvt$$2$$], $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$), $DvtSparkChartEventManager$$.$registerObject$($DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$.$getEventManager$().$associate$($dvt$$2$$, $DvtSparkChartDefaults$$));
  };
  $DvtChartObjPeer$$.prototype.getId = function $$DvtChartObjPeer$$$$getId$() {
    return 0 <= this.$_seriesIndex$ && 0 <= this.$_groupIndex$ ? new $DvtChartDataItem$$(this.$_dataItemId$, this.$getSeries$(), this.$getGroup$()) : 0 <= this.$_seriesIndex$ ? this.$getSeries$() : null;
  };
  $DvtChartObjPeer$$.prototype.$getSeries$ = function $$DvtChartObjPeer$$$$$getSeries$$() {
    return this.$_series$;
  };
  $DvtChartObjPeer$$.prototype.$getSeriesIndex$ = function $$DvtChartObjPeer$$$$$getSeriesIndex$$() {
    return this.$_seriesIndex$;
  };
  $DvtChartObjPeer$$.prototype.$getGroup$ = function $$DvtChartObjPeer$$$$$getGroup$$() {
    return this.$_group$;
  };
  $DvtChartObjPeer$$.prototype.$getGroupIndex$ = function $$DvtChartObjPeer$$$$$getGroupIndex$$() {
    return this.$_groupIndex$;
  };
  $DvtChartObjPeer$$.prototype.$getAction$ = function $$DvtChartObjPeer$$$$$getAction$$() {
    return this.$_action$;
  };
  $DvtChartObjPeer$$.prototype.$isDrillable$ = function $$DvtChartObjPeer$$$$$isDrillable$$() {
    return this.$_drillable$;
  };
  $DvtChartObjPeer$$.prototype.$isDoubleClickable$ = function $$DvtChartObjPeer$$$$$isDoubleClickable$$() {
    return this.$isSelectable$() && this.$isDrillable$();
  };
  $DvtChartObjPeer$$.prototype.$getSeriesType$ = function $$DvtChartObjPeer$$$$$getSeriesType$$() {
    return $DvtChartStyleUtils$$.$getSeriesType$(this.$_chart$, this.$_seriesIndex$);
  };
  $DvtChartObjPeer$$.prototype.$getSeriesItem$ = function $$DvtChartObjPeer$$$$$getSeriesItem$$() {
    return $DvtChartDataUtils$$.$getSeriesItem$(this.$_chart$, this.$_seriesIndex$);
  };
  $DvtChartObjPeer$$.prototype.$getDatatip$ = function $$DvtChartObjPeer$$$$$getDatatip$$() {
    return $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, !0);
  };
  $DvtChartObjPeer$$.prototype.$getDatatipColor$ = function $$DvtChartObjPeer$$$$$getDatatipColor$$() {
    return $DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$);
  };
  $DvtChartObjPeer$$.prototype.$isSelectable$ = function $$DvtChartObjPeer$$$$$isSelectable$$() {
    return $DvtChartStyleUtils$$.$isSelectable$(this.$_chart$, this.$getSeriesIndex$(), this.$getGroupIndex$());
  };
  $DvtChartObjPeer$$.prototype.$isSelected$ = function $$DvtChartObjPeer$$$$$isSelected$$() {
    return this.$_isSelected$;
  };
  $DvtChartObjPeer$$.prototype.$setSelected$ = function $$DvtChartObjPeer$$$$$setSelected$$($dvt$$2$$) {
    this.$_isSelected$ = $dvt$$2$$;
    for (var $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$_displayables$.length;$DvtSparkChartEventManager$$++) {
      this.$_displayables$[$DvtSparkChartEventManager$$].$setSelected$ && (this.$_displayables$[$DvtSparkChartEventManager$$].$setSelected$($dvt$$2$$), this.$_updateAriaLabel$(this.$_displayables$[$DvtSparkChartEventManager$$]));
    }
  };
  $DvtChartObjPeer$$.prototype.$showHoverEffect$ = function $$DvtChartObjPeer$$$$$showHoverEffect$$() {
    for (var $dvt$$2$$ = 0;$dvt$$2$$ < this.$_displayables$.length;$dvt$$2$$++) {
      this.$_displayables$[$dvt$$2$$].$showHoverEffect$ && this.$_displayables$[$dvt$$2$$].$showHoverEffect$();
    }
  };
  $DvtChartObjPeer$$.prototype.$hideHoverEffect$ = function $$DvtChartObjPeer$$$$$hideHoverEffect$$() {
    for (var $dvt$$2$$ = 0;$dvt$$2$$ < this.$_displayables$.length;$dvt$$2$$++) {
      this.$_displayables$[$dvt$$2$$].$hideHoverEffect$ && this.$_displayables$[$dvt$$2$$].$hideHoverEffect$();
    }
  };
  $DvtChartObjPeer$$.prototype.$getShowPopupBehaviors$ = function $$DvtChartObjPeer$$$$$getShowPopupBehaviors$$() {
    return this.$_chart$.$getShowPopupBehaviors$(this.$_stampId$);
  };
  $DvtChartObjPeer$$.prototype.$getDisplayables$ = function $$DvtChartObjPeer$$$$$getDisplayables$$() {
    return this.$_displayables$;
  };
  $DvtChartObjPeer$$.prototype.$getAriaLabel$ = function $$DvtChartObjPeer$$$$$getAriaLabel$$() {
    var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = this.$_chart$.$getOptions$();
    this.$isSelectable$() && $DvtSparkChartEventManager$$.push($dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    this.$isDrillable$() && $DvtSparkChartEventManager$$.push($dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "stateDrillable", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, !1);
    null == $DvtSparkChartDefaults$$ && 0 > this.$_groupIndex$ && 0 < $DvtSparkChartEventManager$$.length && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
    return $dvt$$2$$.$Displayable$.$generateAriaLabel$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$);
  };
  $DvtChartObjPeer$$.prototype.$_updateAriaLabel$ = function $$DvtChartObjPeer$$$$$_updateAriaLabel$$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$Agent$.$deferAriaCreation$() || $DvtSparkChartEventManager$$.$setAriaProperty$("label", this.$getAriaLabel$());
  };
  $DvtChartObjPeer$$.prototype.$getCategories$ = function $$DvtChartObjPeer$$$$$getCategories$$() {
    return this.$_categories$;
  };
  $DvtChartObjPeer$$.prototype.$getNextNavigable$ = function $$DvtChartObjPeer$$$$$getNextNavigable$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$;
    $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.keyCode;
    if ($DvtSparkChartEventManager$$.type == $dvt$$2$$.MouseEvent.$CLICK$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$SPACE$ && $DvtSparkChartEventManager$$.ctrlKey) {
      return this;
    }
    $DvtSparkChartDefaults$$ = this.$_chart$;
    for (var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getChartObjPeers$(), $DvtChartTooltipUtils$$ = [], $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartSeriesEffectUtils$$++) {
      $DvtSparkChartAutomation$$[$DvtChartSeriesEffectUtils$$].$isNavigable$() && $DvtChartTooltipUtils$$.push($DvtSparkChartAutomation$$[$DvtChartSeriesEffectUtils$$]);
    }
    $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$ = $dvt$$2$$.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$) : $DvtChartTypeUtils$$.$isLineArea$($DvtSparkChartDefaults$$) || $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartDefaults$$) || $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$ = this.$_findNextNavigable$($DvtSparkChartEventManager$$) : !$DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartDefaults$$) || 
    $DvtSparkChartEventManager$$.keyCode != $dvt$$2$$.KeyboardEvent.$UP_ARROW$ && $DvtSparkChartEventManager$$.keyCode != $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$ ? $DvtSparkChartEventManager$$ = $dvt$$2$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, !0) : (--$DvtSparkChartEventManager$$.keyCode, $DvtSparkChartEventManager$$ = $dvt$$2$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$));
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartObjPeer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtChartObjPeer$$$$$getKeyboardBoundingBox$$($DvtSparkChartEventManager$$) {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($DvtSparkChartEventManager$$) : new $dvt$$2$$.$Rectangle$(0, 0, 0, 0);
  };
  $DvtChartObjPeer$$.prototype.$getTargetElem$ = function $$DvtChartObjPeer$$$$$getTargetElem$$() {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : null;
  };
  $DvtChartObjPeer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtChartObjPeer$$$$$showKeyboardFocusEffect$$() {
    this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = !0, this.$showHoverEffect$());
  };
  $DvtChartObjPeer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtChartObjPeer$$$$$hideKeyboardFocusEffect$$() {
    this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = !1, this.$hideHoverEffect$());
  };
  $DvtChartObjPeer$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtChartObjPeer$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtChartObjPeer$$.prototype.$isNavigable$ = function $$DvtChartObjPeer$$$$$isNavigable$$() {
    return -1 != this.$getGroupIndex$() && -1 != this.$getSeriesIndex$();
  };
  $DvtChartObjPeer$$.prototype.$_findNextNavigable$ = function $$DvtChartObjPeer$$$$$_findNextNavigable$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.keyCode;
    var $DvtSparkChartDefaults$$ = this.$_chart$, $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getCtx$(), $DvtChartTooltipUtils$$ = this.$getSeriesIndex$(), $DvtChartSeriesEffectUtils$$ = this.$getGroupIndex$(), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartDefaults$$), $DvtChartLineMarker$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$), 
    $DvtSparkChartAutomation$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartAutomation$$), $DvtChartMarkerUtils$$ = $DvtChartDataChangeFunnelSlice$$ ? $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$LEFT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$, $DvtChartDataChangeLineArea$$ = $DvtChartDataChangeFunnelSlice$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$UP_ARROW$ : 
    $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$LEFT_ARROW$, $DvtChartRangeMarker$$ = $DvtChartDataChangeFunnelSlice$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$ : $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$LEFT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$;
    if ($DvtChartDataChangeFunnelSlice$$ ? $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$LEFT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.KeyboardEvent.$UP_ARROW$) {
      $DvtChartPieLabelInfo$$ = $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$ = this.$_findNextUpSeries$($DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$);
    } else {
      if ($DvtChartMarkerUtils$$) {
        $DvtChartPieLabelInfo$$ = $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$ = this.$_findNextDownSeries$($DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$);
      } else {
        if ($DvtChartRangeMarker$$) {
          $DvtChartPieRenderUtils$$ = $DvtChartTooltipUtils$$;
          $DvtChartPieLabelInfo$$ = $DvtChartSeriesEffectUtils$$;
          do {
            $DvtChartPieLabelInfo$$++, $DvtChartLineMarker$$ && $DvtChartPieLabelInfo$$ >= $DvtChartPieLabelUtils$$ && ($DvtChartPieLabelInfo$$ = 0);
          } while (null == $DvtSparkChartDefaults$$.$getObject$($DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$) && $DvtChartPieLabelInfo$$ < $DvtChartPieLabelUtils$$);
        } else {
          if ($DvtChartDataChangeLineArea$$) {
            $DvtChartPieRenderUtils$$ = $DvtChartTooltipUtils$$;
            $DvtChartPieLabelInfo$$ = $DvtChartSeriesEffectUtils$$;
            do {
              $DvtChartPieLabelInfo$$--, $DvtChartLineMarker$$ && 0 > $DvtChartPieLabelInfo$$ && ($DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$ - 1);
            } while (null == $DvtSparkChartDefaults$$.$getObject$($DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$) && -1 < $DvtChartPieLabelInfo$$);
          }
        }
      }
    }
    return ($DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$getObject$($DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$)) && $DvtChartPieRenderUtils$$.$isNavigable$() ? $DvtChartPieRenderUtils$$ : this;
  };
  $DvtChartObjPeer$$.prototype.$_findNextUpSeries$ = function $$DvtChartObjPeer$$$$$_findNextUpSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartSeriesEffectUtils$$ = null, $DvtChartPieLabelUtils$$ = null, $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtSparkChartAutomation$$;$DvtChartPieRenderUtils$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartPieRenderUtils$$)) {
        var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$);
        if ($DvtChartPieLabelInfo$$ > $DvtChartTooltipUtils$$ || $DvtChartPieLabelInfo$$ == $DvtChartTooltipUtils$$ && $DvtChartPieRenderUtils$$ > $DvtSparkChartEventManager$$) {
          if (null !== $DvtChartSeriesEffectUtils$$ && $DvtChartPieLabelInfo$$ < $DvtChartSeriesEffectUtils$$ || null == $DvtChartSeriesEffectUtils$$) {
            $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$;
          }
        }
      }
    }
    return $DvtChartPieLabelUtils$$;
  };
  $DvtChartObjPeer$$.prototype.$_findNextDownSeries$ = function $$DvtChartObjPeer$$$$$_findNextDownSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartSeriesEffectUtils$$ = null, $DvtChartPieLabelUtils$$ = null, $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$ - 1;0 <= $DvtSparkChartAutomation$$;$DvtSparkChartAutomation$$--) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartAutomation$$)) {
        var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
        if ($DvtChartPieRenderUtils$$ < $DvtChartTooltipUtils$$ || $DvtChartPieRenderUtils$$ == $DvtChartTooltipUtils$$ && $DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$) {
          if (null !== $DvtChartSeriesEffectUtils$$ && $DvtChartPieRenderUtils$$ > $DvtChartSeriesEffectUtils$$ || null == $DvtChartSeriesEffectUtils$$) {
            $DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$;
          }
        }
      }
    }
    return $DvtChartPieLabelUtils$$;
  };
  $DvtChartObjPeer$$.prototype.$isDragAvailable$ = function $$DvtChartObjPeer$$$$$isDragAvailable$$() {
    return !0;
  };
  $DvtChartObjPeer$$.prototype.$getDragTransferable$ = function $$DvtChartObjPeer$$$$$getDragTransferable$$() {
    return [this.getId()];
  };
  $DvtChartObjPeer$$.prototype.$getDragFeedback$ = function $$DvtChartObjPeer$$$$$getDragFeedback$$() {
    if (this.$_chart$.$isSelectionSupported$() && 1 < this.$_chart$.$getSelectionHandler$().$_selection$.length) {
      for (var $dvt$$2$$ = this.$_chart$.$getSelectionHandler$().getSelection(), $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.concat($dvt$$2$$[$DvtSparkChartDefaults$$].$getDisplayables$());
      }
      return $DvtSparkChartEventManager$$;
    }
    return this.$_displayables$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRefObjPeer$$, $dvt$$2$$.$Obj$);
  $DvtChartRefObjPeer$$.prototype.Init = function $$DvtChartRefObjPeer$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    this.$_chart$ = $dvt$$2$$;
    this.$_displayables$ = $DvtSparkChartEventManager$$;
    this.$_refObj$ = $DvtSparkChartDefaults$$;
    this.$_categories$ = $DvtChartRefObjUtils$$.$getRefObjCategories$(this.$_refObj$);
    this.$_index$ = $DvtSparkChartAutomation$$;
    this.$_axisType$ = $DvtChartTooltipUtils$$;
    for ($dvt$$2$$ = 0;$dvt$$2$$ < $DvtSparkChartEventManager$$.length;$dvt$$2$$++) {
      $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$[$dvt$$2$$], $DvtSparkChartAutomation$$.$setAriaRole$("img"), $DvtSparkChartAutomation$$.$setAriaProperty$("label", $DvtSparkChartDefaults$$.shortDesc);
    }
  };
  $DvtChartRefObjPeer$$.prototype.$getCategories$ = function $$DvtChartRefObjPeer$$$$$getCategories$$() {
    return this.$_categories$;
  };
  $DvtChartRefObjPeer$$.prototype.$getDisplayables$ = function $$DvtChartRefObjPeer$$$$$getDisplayables$$() {
    return this.$_displayables$;
  };
  $DvtChartRefObjPeer$$.prototype.$getIndex$ = function $$DvtChartRefObjPeer$$$$$getIndex$$() {
    return this.$_index$;
  };
  $DvtChartRefObjPeer$$.prototype.$getDatatip$ = function $$DvtChartRefObjPeer$$$$$getDatatip$$() {
    return $DvtChartTooltipUtils$$.$getRefObjTooltip$(this.$_chart$, this.$_refObj$, this.$_axisType$, this.$_index$);
  };
  $DvtChartRefObjPeer$$.prototype.$getDatatipColor$ = function $$DvtChartRefObjPeer$$$$$getDatatipColor$$() {
    return $DvtChartRefObjUtils$$.$getColor$(this.$_refObj$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataItem$$, $dvt$$2$$.$Obj$);
  $DvtChartDataItem$$.prototype.getId = function $$DvtChartDataItem$$$$getId$() {
    return this.id;
  };
  $DvtChartDataItem$$.prototype.$getSeries$ = function $$DvtChartDataItem$$$$$getSeries$$() {
    return this.series;
  };
  $DvtChartDataItem$$.prototype.$getGroup$ = function $$DvtChartDataItem$$$$$getGroup$$() {
    return this.group;
  };
  $DvtChartDataItem$$.prototype.$equals$ = function $$DvtChartDataItem$$$$$equals$$($DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$ instanceof $DvtChartDataItem$$ && this.series === $DvtSparkChartEventManager$$.series ? this.group instanceof Array && $DvtSparkChartEventManager$$.group instanceof Array ? $dvt$$2$$.$ArrayUtils$.$equals$(this.group, $DvtSparkChartEventManager$$.group) : this.group === $DvtSparkChartEventManager$$.group : !1;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDefaults$$, $dvt$$2$$.$BaseComponentDefaults$);
  $DvtChartDefaults$$.$SKIN_NEXT$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_NEXT$, styleDefaults:{dataItemGaps:"auto", markerSize:10, marqueeColor:"rgba(255,255,255,0.4)", marqueeBorderColor:"#0572ce"}, yAxis:{axisLine:{rendered:"auto"}}, y2Axis:{axisLine:{rendered:"auto"}}, layout:{titlePlotAreaGap:16, footnoteGap:10, legendGapWidth:15, legendGapHeight:10, tickLabelGapHeight:8, tickLabelGapWidth:9}};
  $DvtChartDefaults$$.$SKIN_ALTA$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_ALTA$, title:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_13$ + "color: #252525;")}, subtitle:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$ + "color: #252525;")}, footnote:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$)}, _statusMessageStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_13$ + 
  "color: #252525;"), pieCenter:{labelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, styleDefaults:{seriesEffect:"color", colors:$dvt$$2$$.$CSSStyle$.$COLORS_ALTA$, dataLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$), stackLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD$), stockRisingColor:"#6b6f74", stockFallingColor:"#ED6647"}};
  $DvtChartDefaults$$.$VERSION_1$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$, emptyText:null, type:"bar", stack:"off", stackLabel:"off", orientation:"vertical", polarGridShape:"circle", selectionMode:"none", hideAndShowBehavior:"none", hoverBehavior:"none", zoomAndScroll:"off", zoomDirection:"auto", initialZooming:"none", dragMode:"user", sorting:"off", otherThreshold:0, animationOnDataChange:"none", animationOnDisplay:"none", __sparkBarSpacing:"subpixel", __spark:!1, dataCursor:"auto", dataCursorBehavior:"auto", 
  drilling:"off", highlightMatch:"all", series:[], groups:[], title:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 12px; color: #003d5b; font-weight: bold"), halign:"start"}, subtitle:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 12px; color: #003d5b;")}, footnote:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 10px; color: #333333;"), halign:"start"}, 
  titleSeparator:{upperColor:"#74779A", lowerColor:"#FFFFFF", rendered:"off"}, touchResponse:"auto", _statusMessageStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 12px; color: #003d5b; font-weight: bold"), _dropColor:"#D9F4FA", xAxis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:.33}, yAxis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, 
  axisLine:{rendered:"on"}, scale:"linear", maxSize:.33}, y2Axis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:.33, alignTickMarks:"on"}, pieCenter:{labelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$)}, plotArea:{backgroundColor:null}, legend:{position:"auto", rendered:"auto", maxSize:.3, layout:{gapRatio:1}, seriesSection:{}, referenceObjectSection:{}, sections:[]}, overview:{rendered:"off"}, 
  dnd:{drag:{items:{}, series:{}, groups:{}}, drop:{plotArea:{}, xAxis:{}, yAxis:{}, y2Axis:{}, legend:{}}}, styleDefaults:{colors:$dvt$$2$$.$CSSStyle$.$COLORS_SKYROS$, borderColor:"auto", borderWidth:"auto", patterns:"smallDiagonalRight smallChecker smallDiagonalLeft smallTriangle smallCrosshatch smallDiamond largeDiagonalRight largeChecker largeDiagonalLeft largeTriangle largeCrosshatch largeDiamond".split(" "), shapes:"square circle diamond plus triangleDown triangleUp".split(" "), seriesEffect:"gradient", 
  threeDEffect:"off", selectionEffect:"highlight", animationDuration:1E3, animationIndicators:"all", animationUpColor:"#0099FF", animationDownColor:"#FF3300", lineStyle:"solid", lineType:"auto", markerDisplayed:"auto", markerColor:null, markerShape:"auto", markerSize:8, marqueeColor:"rgba(255,255,255,0.5)", marqueeBorderColor:"rgba(0,0,0,0.2)", pieFeelerColor:"#BAC5D6", pieInnerRadius:0, selectedInnerColor:"#ffffff", selectedOuterColor:"#5a5a5a", sliceLabelType:"percent", otherColor:"#4b4b4b", stockRisingColor:"#006666", 
  stockFallingColor:"#CC3300", stockRangeColor:"#B8B8B8", dataItemGaps:"0%", dataLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + $dvt$$2$$.$BaseComponentDefaults$.$FONT_SIZE_11$), dataLabelPosition:"auto", funnelBackgroundColor:"#EDEDED", x1Format:{}, y1Format:{}, y2Format:{}, zFormat:{}, _defaultSliceLabelColor:"#333333", _scrollbarHeight:3, _scrollbarTrackColor:"#F0F0F0", _scrollbarHandleColor:"#9E9E9E", hoverBehaviorDelay:200, dataCursor:{markerSize:8, 
  markerDisplayed:"on", lineColor:"#5a5a5a", lineWidth:2, lineStyle:"solid"}, groupSeparators:{rendered:"on", color:"rgba(138,141,172,0.4)"}, padding:"auto", _tooltipStyle:new $dvt$$2$$.$CSSStyle$("border-collapse: separate; border-spacing: 2px"), tooltipLabelStyle:new $dvt$$2$$.$CSSStyle$("color: #737373; padding: 0px 2px; white-space: nowrap;"), tooltipValueStyle:new $dvt$$2$$.$CSSStyle$("color: #333333; padding: 0px 2px;"), stackLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + 
  $dvt$$2$$.$BaseComponentDefaults$.$FONT_SIZE_11$)}, layout:{gapWidthRatio:null, gapHeightRatio:null, outerGapWidth:10, outerGapHeight:8, titleSubtitleGapWidth:14, titleSubtitleGapHeight:4, titleSeparatorGap:6, titlePlotAreaGap:10, footnoteGap:7, verticalAxisGap:6, legendGapWidth:10, legendGapHeight:10, tickLabelGapHeight:5, tickLabelGapWidth:7}, _locale:"en-us", _resources:{}};
  $DvtChartDefaults$$.$getGapWidth$ = function $$DvtChartDefaults$$$$getGapWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return Math.ceil($DvtSparkChartEventManager$$ * $dvt$$2$$.$getGapWidthRatio$());
  };
  $DvtChartDefaults$$.$getGapHeight$ = function $$DvtChartDefaults$$$$getGapHeight$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return Math.ceil($DvtSparkChartEventManager$$ * $dvt$$2$$.$getGapHeightRatio$());
  };
  $DvtChartDefaults$$.$isSkyrosSkin$ = function $$DvtChartDefaults$$$$isSkyrosSkin$$($DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.$getSkin$() == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$;
  };
  $DvtChartDefaults$$.$isPostAltaSkin$ = function $$DvtChartDefaults$$$$isPostAltaSkin$$($DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.$getSkin$() != $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ && $DvtSparkChartEventManager$$.$getSkin$() != $dvt$$2$$.$CSSStyle$.$SKIN_ALTA$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataCursorHandler$$, $dvt$$2$$.$Obj$);
  $DvtChartDataCursorHandler$$.prototype.Init = function $$DvtChartDataCursorHandler$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_context$ = $dvt$$2$$.$getCtx$();
    this.$_dataCursorShown$ = !1;
    this.$_dataCursor$ = $DvtSparkChartEventManager$$;
    this.$_chart$ = $dvt$$2$$;
  };
  $DvtChartDataCursorHandler$$.prototype.$processMove$ = function $$DvtChartDataCursorHandler$$$$$processMove$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$_chart$.$_plotAreaSpace$;
    $DvtSparkChartDefaults$$.$containsPoint$($dvt$$2$$.x, $dvt$$2$$.y) ? this.$_showDataCursor$($DvtSparkChartDefaults$$, $dvt$$2$$.x, $dvt$$2$$.y, $DvtSparkChartEventManager$$) : this.$_removeDataCursor$($DvtSparkChartEventManager$$);
  };
  $DvtChartDataCursorHandler$$.prototype.$processEnd$ = function $$DvtChartDataCursorHandler$$$$$processEnd$$($dvt$$2$$) {
    this.$_removeDataCursor$($dvt$$2$$);
  };
  $DvtChartDataCursorHandler$$.prototype.$processOut$ = function $$DvtChartDataCursorHandler$$$$$processOut$$($dvt$$2$$) {
    this.$_chart$.$_plotAreaSpace$.$containsPoint$($dvt$$2$$.x, $dvt$$2$$.y) || this.$_removeDataCursor$(void 0);
  };
  $DvtChartDataCursorHandler$$.prototype.$_showDataCursor$ = function $$DvtChartDataCursorHandler$$$$$_showDataCursor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (this.$_context$.$isOffscreen$()) {
      this.$_removeDataCursor$($DvtSparkChartAutomation$$);
    } else {
      var $DvtChartSeriesEffectUtils$$ = this.$_dataCursor$, $DvtChartPieLabelUtils$$ = this.$_getClosestMatch$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      if (null == $DvtChartPieLabelUtils$$) {
        this.$_removeDataCursor$($DvtSparkChartAutomation$$);
      } else {
        var $DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$.$matchRegion$.$getCenter$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$, $DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$;
        $DvtChartSeriesEffectUtils$$.$getBehavior$() == $DvtChartDataCursor$$.$BEHAVIOR_SNAP$ && ($DvtChartSeriesEffectUtils$$.$isHorizontal$() ? $DvtChartTypeUtils$$ = Math.min(Math.max($DvtChartPieRenderUtils$$.y, $dvt$$2$$.y), $dvt$$2$$.y + $dvt$$2$$.$h$) : $DvtChartPieLabelInfo$$ = Math.min(Math.max($DvtChartPieRenderUtils$$.x, $dvt$$2$$.x), $dvt$$2$$.x + $dvt$$2$$.$w$));
        var $DvtChartDataChangeFunnelSlice$$ = $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, $DvtChartPieLabelUtils$$.$sidx$, $DvtChartPieLabelUtils$$.$gidx$, !0);
        null == $DvtChartDataChangeFunnelSlice$$ ? $DvtChartSeriesEffectUtils$$.$setVisible$(!1) : ($DvtChartSeriesEffectUtils$$.$setVisible$(!0), $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, $DvtChartPieLabelUtils$$.$sidx$, $DvtChartPieLabelUtils$$.$gidx$), $DvtChartPieLabelInfo$$ = $DvtChartSeriesEffectUtils$$.$isHorizontal$() ? $DvtChartTypeUtils$$ : $DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$.$render$($dvt$$2$$, $DvtChartPieRenderUtils$$.x, $DvtChartPieRenderUtils$$.y, 
        $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelUtils$$), this.$_dataCursorShown$ = !0, $DvtSparkChartAutomation$$ || ($dvt$$2$$ = this.$_chart$.$getValuesAt$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), this.$_chart$.$changeOption$($dvt$$2$$)));
      }
    }
  };
  $DvtChartDataCursorHandler$$.prototype.$_removeDataCursor$ = function $$DvtChartDataCursorHandler$$$$$_removeDataCursor$$($dvt$$2$$) {
    this.$_dataCursor$.$_bVisible$ && this.$_dataCursor$.$setVisible$(!1);
    this.$_context$.$getTooltipManager$($DvtChartDataCursor$$.$TOOLTIP_ID$).$hideTooltip$();
    this.$_dataCursorShown$ = !1;
    $dvt$$2$$ || this.$_chart$.$changeOption$(null);
  };
  $DvtChartDataCursorHandler$$.$_getClosestMatchSecondDirection$ = function $$DvtChartDataCursorHandler$$$$_getClosestMatchSecondDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartTooltipUtils$$ = null, $DvtChartSeriesEffectUtils$$ = Infinity, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $dvt$$2$$.length;$DvtChartPieLabelUtils$$++) {
      var $DvtChartPieRenderUtils$$ = $dvt$$2$$[$DvtChartPieLabelUtils$$], $DvtChartPieLabelInfo$$ = Math.round(Math.abs((($DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.$matchRegion$.x : $DvtChartPieRenderUtils$$.$matchRegion$.y) + ($DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.$matchRegion$.x + $DvtChartPieRenderUtils$$.$matchRegion$.$w$ : $DvtChartPieRenderUtils$$.$matchRegion$.y + $DvtChartPieRenderUtils$$.$matchRegion$.$h$)) / 2 - ($DvtSparkChartEventManager$$ ? $DvtSparkChartDefaults$$ : 
      $DvtSparkChartAutomation$$)));
      $DvtChartPieLabelInfo$$ < $DvtChartSeriesEffectUtils$$ && ($DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelInfo$$, $DvtChartTooltipUtils$$ = $DvtChartPieRenderUtils$$);
    }
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartDataCursorHandler$$.$_getClosestMatchesFirstDirection$ = function $$DvtChartDataCursorHandler$$$$_getClosestMatchesFirstDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartTooltipUtils$$ = Infinity, $DvtChartSeriesEffectUtils$$ = [], $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $dvt$$2$$.length;$DvtChartPieLabelUtils$$++) {
      var $DvtChartPieRenderUtils$$ = $dvt$$2$$[$DvtChartPieLabelUtils$$], $DvtChartPieLabelInfo$$ = Math.round(Math.abs((($DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.$matchRegion$.y : $DvtChartPieRenderUtils$$.$matchRegion$.x) + ($DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.$matchRegion$.y + $DvtChartPieRenderUtils$$.$matchRegion$.$h$ : $DvtChartPieRenderUtils$$.$matchRegion$.x + $DvtChartPieRenderUtils$$.$matchRegion$.$w$)) / 2 - ($DvtSparkChartEventManager$$ ? $DvtSparkChartAutomation$$ : 
      $DvtSparkChartDefaults$$)));
      $DvtChartPieLabelInfo$$ <= $DvtChartTooltipUtils$$ && ($DvtChartPieLabelInfo$$ < $DvtChartTooltipUtils$$ && ($DvtChartSeriesEffectUtils$$ = []), $DvtChartSeriesEffectUtils$$.push($DvtChartPieRenderUtils$$), $DvtChartTooltipUtils$$ = $DvtChartPieLabelInfo$$);
    }
    return $DvtChartSeriesEffectUtils$$;
  };
  $DvtChartDataCursorHandler$$.prototype.$_findMatches$ = function $$DvtChartDataCursorHandler$$$$$_findMatches$$() {
    var $dvt$$2$$ = this.$_context$.$_stage$, $DvtSparkChartEventManager$$ = this.$_chart$.$getEventManager$(), $DvtSparkChartDefaults$$ = [];
    if (!this.$_chart$.$_currentMarkers$) {
      return null;
    }
    for (var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < this.$_chart$.$_currentMarkers$.length;$DvtSparkChartAutomation$$++) {
      for (var $DvtChartTooltipUtils$$ = this.$_chart$.$_currentMarkers$[$DvtSparkChartAutomation$$], $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.length, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartSeriesEffectUtils$$;$DvtChartPieLabelUtils$$++) {
        var $DvtChartPieRenderUtils$$ = $DvtChartTooltipUtils$$[$DvtChartPieLabelUtils$$], $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$GetLogicalObject$($DvtChartPieRenderUtils$$), $DvtChartTypeUtils$$ = $DvtChartPieRenderUtils$$.$getDimensionsSelf$ ? $DvtChartPieRenderUtils$$.$getDimensionsSelf$($dvt$$2$$) : $DvtChartPieRenderUtils$$.$getDimensions$($dvt$$2$$), $DvtChartPieRenderUtils$$ = {$obj$:$DvtChartPieRenderUtils$$, $matchRegion$:$DvtChartTypeUtils$$, $gidx$:$DvtChartPieLabelInfo$$.$getGroupIndex$(), 
        $sidx$:$DvtChartPieLabelInfo$$.$getSeriesIndex$(), $marker$:null};
        $DvtSparkChartDefaults$$.push($DvtChartPieRenderUtils$$);
      }
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataCursorHandler$$.prototype.$_getClosestMatch$ = function $$DvtChartDataCursorHandler$$$$$_getClosestMatch$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isHorizontal$(this.$_chart$), $DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$isLineArea$(this.$_chart$) && !$DvtChartAxisUtils$$.$isMixedFrequency$(this.$_chart$), $DvtChartTooltipUtils$$ = this.$_findMatches$(), $DvtChartSeriesEffectUtils$$ = $DvtChartDataCursorHandler$$.$_getClosestMatchesFirstDirection$($DvtChartTooltipUtils$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$);
    if (!$DvtChartTypeUtils$$.$isScatterBubble$(this.$_chart$)) {
      for (var $DvtChartPieLabelUtils$$ = Infinity, $DvtChartPieRenderUtils$$ = -Infinity, $DvtChartPieLabelInfo$$ = null, $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartSeriesEffectUtils$$.length;$DvtChartDataChangeFunnelSlice$$++) {
        $DvtChartPieLabelInfo$$ = $DvtChartSeriesEffectUtils$$[$DvtChartDataChangeFunnelSlice$$], $DvtChartPieLabelUtils$$ = Math.min($DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$ ? $DvtChartPieLabelInfo$$.$matchRegion$.y : $DvtChartPieLabelInfo$$.$matchRegion$.x), $DvtChartPieRenderUtils$$ = Math.max($DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$ ? $DvtChartPieLabelInfo$$.$matchRegion$.y + $DvtChartPieLabelInfo$$.$matchRegion$.$h$ : $DvtChartPieLabelInfo$$.$matchRegion$.x + $DvtChartPieLabelInfo$$.$matchRegion$.$w$), 
        $DvtChartPieLabelInfo$$ = $DvtChartPieLabelInfo$$.$gidx$;
      }
      for ($DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartTooltipUtils$$.length;$DvtChartDataChangeFunnelSlice$$++) {
        var $DvtChartLineMarker$$ = $DvtChartTooltipUtils$$[$DvtChartDataChangeFunnelSlice$$], $DvtChartMarkerUtils$$ = $DvtChartLineMarker$$.$gidx$;
        $DvtSparkChartAutomation$$ ? $DvtChartPieLabelInfo$$ == $DvtChartMarkerUtils$$ && $DvtChartSeriesEffectUtils$$.push($DvtChartLineMarker$$) : ($DvtChartMarkerUtils$$ = (($DvtSparkChartDefaults$$ ? $DvtChartLineMarker$$.$matchRegion$.y : $DvtChartLineMarker$$.$matchRegion$.x) + ($DvtSparkChartDefaults$$ ? $DvtChartLineMarker$$.$matchRegion$.y + $DvtChartLineMarker$$.$matchRegion$.$h$ : $DvtChartLineMarker$$.$matchRegion$.x + $DvtChartLineMarker$$.$matchRegion$.$w$)) / 2, $DvtChartPieRenderUtils$$ >= 
        $DvtChartMarkerUtils$$ && $DvtChartPieLabelUtils$$ <= $DvtChartMarkerUtils$$ && $DvtChartSeriesEffectUtils$$.push($DvtChartLineMarker$$));
      }
    }
    return $DvtChartDataCursorHandler$$.$_getClosestMatchSecondDirection$($DvtChartSeriesEffectUtils$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartSelectableWedge$$, $dvt$$2$$.$Path$);
  $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH$ = 2;
  $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH_HOVER$ = 1.25;
  $DvtChartSelectableWedge$$.$_INNER_BORDER_WIDTH$ = 1;
  $DvtChartSelectableWedge$$.prototype.Init = function $$DvtChartSelectableWedge$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartSelectableWedge$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartSelectableWedge$$.prototype.$setWedgeParams$ = function $$DvtChartSelectableWedge$$$$$setWedgeParams$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$) {
    this.$_cx$ = $dvt$$2$$;
    this.$_cy$ = $DvtSparkChartEventManager$$;
    this.$_rx$ = $DvtSparkChartDefaults$$;
    this.$_ry$ = $DvtSparkChartAutomation$$;
    this.$_sa$ = $DvtChartTooltipUtils$$;
    this.$_ae$ = $DvtChartSeriesEffectUtils$$;
    this.$_gap$ = $DvtChartPieLabelUtils$$;
    this.$_ir$ = $DvtChartPieRenderUtils$$;
    $dvt$$2$$ = this.$_makeWedgePath$(0);
    this.$setCmds$($dvt$$2$$);
  };
  $DvtChartSelectableWedge$$.prototype.$_makeWedgePath$ = function $$DvtChartSelectableWedge$$$$$_makeWedgePath$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = Math.max(this.$_rx$ - $DvtSparkChartEventManager$$, 0), $DvtSparkChartAutomation$$ = Math.max(this.$_ry$ - $DvtSparkChartEventManager$$, 0), $DvtChartTooltipUtils$$ = this.$_ir$ ? this.$_ir$ + $DvtSparkChartEventManager$$ : 0, $DvtChartSeriesEffectUtils$$ = 360 == this.$_ae$ ? $dvt$$2$$.Math.$degreesToRads$(359.99) : $dvt$$2$$.Math.$degreesToRads$(this.$_ae$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.Math.$degreesToRads$(this.$_sa$), $DvtChartPieRenderUtils$$ = (360 == 
    this.$_ae$ || $DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$ ? 0 : this.$_gap$ + 2 * $DvtSparkChartEventManager$$) / 2, $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$ < $DvtSparkChartDefaults$$ ? Math.asin($DvtChartPieRenderUtils$$ / $DvtSparkChartDefaults$$) : 0;
    $DvtSparkChartEventManager$$ = -$DvtChartSeriesEffectUtils$$ / 2 - $DvtChartPieLabelUtils$$;
    var $DvtChartTypeUtils$$ = Math.min(5 * $DvtChartPieRenderUtils$$, 0 < $DvtChartSeriesEffectUtils$$ ? Math.abs($DvtChartPieRenderUtils$$ / Math.sin($DvtChartSeriesEffectUtils$$ / 2)) : 0), $DvtChartDataChangeFunnelSlice$$ = this.$_cx$ + Math.cos($DvtSparkChartEventManager$$) * $DvtChartTypeUtils$$, $DvtChartLineMarker$$ = this.$_cy$ + Math.sin($DvtSparkChartEventManager$$) * (0 == $DvtSparkChartDefaults$$ ? $DvtChartTypeUtils$$ : $DvtChartTypeUtils$$ * $DvtSparkChartAutomation$$ / $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$ = this.$_cx$ + Math.cos(-$DvtChartPieLabelInfo$$ - $DvtChartPieLabelUtils$$) * $DvtSparkChartDefaults$$;
    var $DvtChartTypeUtils$$ = this.$_cy$ + Math.sin(-$DvtChartPieLabelInfo$$ - $DvtChartPieLabelUtils$$) * $DvtSparkChartAutomation$$, $DvtChartMarkerUtils$$ = this.$_cx$ + Math.cos(-$DvtChartPieLabelUtils$$ - $DvtChartSeriesEffectUtils$$ + $DvtChartPieLabelInfo$$) * $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$ = this.$_cy$ + Math.sin(-$DvtChartPieLabelUtils$$ - $DvtChartSeriesEffectUtils$$ + $DvtChartPieLabelInfo$$) * $DvtSparkChartAutomation$$;
    if (0 < $DvtChartTooltipUtils$$) {
      var $DvtChartDataChangeLineArea$$ = $DvtChartPieRenderUtils$$ < $DvtChartTooltipUtils$$ ? Math.asin($DvtChartPieRenderUtils$$ / $DvtChartTooltipUtils$$) : 0, $DvtChartPieRenderUtils$$ = this.$_cx$ + Math.cos(-$DvtChartDataChangeLineArea$$ - $DvtChartPieLabelUtils$$) * $DvtChartTooltipUtils$$, $DvtChartDataChangeFunnelSlice$$ = this.$_cy$ + Math.sin(-$DvtChartDataChangeLineArea$$ - $DvtChartPieLabelUtils$$) * $DvtChartTooltipUtils$$, $DvtChartLineMarker$$ = this.$_cx$ + Math.cos(-$DvtChartPieLabelUtils$$ - 
      $DvtChartSeriesEffectUtils$$ + $DvtChartDataChangeLineArea$$) * $DvtChartTooltipUtils$$, $DvtChartDataChangeLineArea$$ = this.$_cy$ + Math.sin(-$DvtChartPieLabelUtils$$ - $DvtChartSeriesEffectUtils$$ + $DvtChartDataChangeLineArea$$) * $DvtChartTooltipUtils$$;
      360 == this.$_ae$ ? ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$, 1, $DvtSparkChartEventManager$$, $DvtChartTypeUtils$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieRenderUtils$$, 
      $DvtChartDataChangeFunnelSlice$$)) : ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartLineMarker$$, $DvtChartDataChangeLineArea$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$, 1, $DvtSparkChartEventManager$$, $DvtChartTypeUtils$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartPieRenderUtils$$, 
      $DvtChartDataChangeFunnelSlice$$));
      $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartTooltipUtils$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, 0, $DvtChartLineMarker$$, $DvtChartDataChangeLineArea$$);
    } else {
      360 == this.$_ae$ ? $DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$) : ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$)), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$, 1, $DvtSparkChartEventManager$$, 
      $DvtChartTypeUtils$$);
    }
    return $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.closePath();
  };
  $DvtChartSelectableWedge$$.prototype.$_initializeSelectionEffects$ = function $$DvtChartSelectableWedge$$$$$_initializeSelectionEffects$$() {
    var $DvtSparkChartEventManager$$ = this.$isSelected$() ? $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH$ : $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH_HOVER$, $DvtSparkChartDefaults$$ = this.$_makeWedgePath$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$ = this.$_makeWedgePath$($DvtSparkChartEventManager$$ + $DvtChartSelectableWedge$$.$_INNER_BORDER_WIDTH$);
    this.$OuterChild$ ? (this.$OuterChild$.$setCmds$($DvtSparkChartDefaults$$), this.$InnerChild$.$setCmds$($DvtSparkChartEventManager$$)) : (this.$OuterChild$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartDefaults$$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setMouseEnabled$(!0), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartEventManager$$), this.$InnerChild$.$setInvisibleFill$(), this.$InnerChild$.$setMouseEnabled$(!0), 
    this.$addChild$(this.$InnerChild$));
  };
  $DvtChartSelectableWedge$$.prototype.$_showNestedBorders$ = function $$DvtChartSelectableWedge$$$$$_showNestedBorders$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_initializeSelectionEffects$();
    $DvtSparkChartEventManager$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$(null), this.$OuterChild$.$setSolidFill$($DvtSparkChartEventManager$$), this.$InnerChild$.$setFill$(this.$_fill$)) : ($dvt$$2$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$(null), this.$OuterChild$.$setFill$(this.$_fill$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_shapeStroke$), this.$OuterChild$.$setInvisibleFill$()), this.$InnerChild$.$setInvisibleFill$());
  };
  $DvtChartSelectableWedge$$.prototype.$setStyleProperties$ = function $$DvtChartSelectableWedge$$$$$setStyleProperties$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    this.$_fill$ = $DvtSparkChartEventManager$$;
    this.$_shapeStroke$ = $DvtSparkChartDefaults$$;
    this.$_hoverColor$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtSparkChartAutomation$$);
    this.$_innerColor$ = $DvtChartTooltipUtils$$;
    this.$_outerColor$ = $DvtChartSeriesEffectUtils$$;
    this.$setFill$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ && this.$setStroke$($DvtSparkChartDefaults$$);
  };
  $DvtChartSelectableWedge$$.prototype.$showHoverEffect$ = function $$DvtChartSelectableWedge$$$$$showHoverEffect$$() {
    this.$IsShowingHoverEffect$ = !0;
    this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$);
  };
  $DvtChartSelectableWedge$$.prototype.$hideHoverEffect$ = function $$DvtChartSelectableWedge$$$$$hideHoverEffect$$() {
    this.$IsShowingHoverEffect$ = !1;
    this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$();
  };
  $DvtChartSelectableWedge$$.prototype.$setSelected$ = function $$DvtChartSelectableWedge$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$());
  };
  $DvtChartSelectableWedge$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartSelectableWedge$$$$$UpdateSelectionEffect$$() {
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartSelectableRectangularPolygon$$, $dvt$$2$$.$Polygon$);
  $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$ = 2;
  $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH_HOVER$ = 1.25;
  $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$ = 1;
  $DvtChartSelectableRectangularPolygon$$.$SHAPE_EXPAND_SELECTION$ = 1;
  $DvtChartSelectableRectangularPolygon$$.prototype.$setStyleProperties$ = function $$DvtChartSelectableRectangularPolygon$$$$$setStyleProperties$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    this.$_fill$ = $DvtSparkChartEventManager$$;
    this.$_borderStroke$ = $DvtSparkChartDefaults$$;
    this.$_hoverColor$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtSparkChartAutomation$$);
    this.$_innerColor$ = $DvtChartTooltipUtils$$;
    this.$_outerColor$ = $DvtChartSeriesEffectUtils$$;
    this.$setFill$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ && this.$setStroke$($DvtSparkChartDefaults$$);
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$setAnimationParams$ = function $$DvtChartSelectableRectangularPolygon$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_x1$ = Math.min($dvt$$2$$[0], $dvt$$2$$[4]);
    this.$_x2$ = Math.max($dvt$$2$$[0], $dvt$$2$$[4]);
    this.$_y1$ = Math.min($dvt$$2$$[1], $dvt$$2$$[5]);
    this.$_y2$ = Math.max($dvt$$2$$[1], $dvt$$2$$[5]);
    this.$setPoints$($dvt$$2$$);
    this.$_initializeSelectionEffects$();
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$showHoverEffect$ = function $$DvtChartSelectableRectangularPolygon$$$$$showHoverEffect$$() {
    this.$IsShowingHoverEffect$ = !0;
    this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$);
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$hideHoverEffect$ = function $$DvtChartSelectableRectangularPolygon$$$$$hideHoverEffect$$() {
    this.$IsShowingHoverEffect$ = !1;
    this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$();
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$setSelected$ = function $$DvtChartSelectableRectangularPolygon$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$());
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartSelectableRectangularPolygon$$$$$UpdateSelectionEffect$$() {
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$getPrimaryFill$ = function $$DvtChartSelectableRectangularPolygon$$$$$getPrimaryFill$$() {
    return this.$_fill$;
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$_initializeSelectionEffects$ = function $$DvtChartSelectableRectangularPolygon$$$$$_initializeSelectionEffects$$() {
    this.$setPoints$(this.$_createPointsArray$(this.$isSelected$() ? -$DvtChartSelectableRectangularPolygon$$.$SHAPE_EXPAND_SELECTION$ : 0));
    var $DvtSparkChartEventManager$$ = this.$isSelected$() ? $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$ - $DvtChartSelectableRectangularPolygon$$.$SHAPE_EXPAND_SELECTION$ : $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH_HOVER$, $DvtSparkChartDefaults$$ = this.$_createPointsArray$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$ = this.$_createPointsArray$($DvtSparkChartEventManager$$ + $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$);
    this.$OuterChild$ ? (this.$OuterChild$.$setPoints$($DvtSparkChartDefaults$$), this.$InnerChild$.$setPoints$($DvtSparkChartEventManager$$)) : (this.$OuterChild$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartDefaults$$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setMouseEnabled$(!0), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartEventManager$$), this.$InnerChild$.$setInvisibleFill$(), this.$InnerChild$.$setMouseEnabled$(!0), 
    this.$addChild$(this.$InnerChild$));
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$_showNestedBorders$ = function $$DvtChartSelectableRectangularPolygon$$$$$_showNestedBorders$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_initializeSelectionEffects$();
    $DvtSparkChartEventManager$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$(null), this.$OuterChild$.$setSolidFill$($DvtSparkChartEventManager$$), this.$InnerChild$.$setFill$(this.$_fill$)) : ($dvt$$2$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$(null), this.$OuterChild$.$setFill$(this.$_fill$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_borderStroke$), this.$OuterChild$.$setInvisibleFill$()), this.$InnerChild$.$setInvisibleFill$());
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$_createPointsArray$ = function $$DvtChartSelectableRectangularPolygon$$$$$_createPointsArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_x1$ + $dvt$$2$$, $DvtSparkChartDefaults$$ = this.$_x2$ - $dvt$$2$$, $DvtSparkChartAutomation$$ = this.$_y1$ + $dvt$$2$$;
    $dvt$$2$$ = this.$_y2$ - $dvt$$2$$;
    return [$DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$];
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAxis$$, $dvt$$2$$.$Axis$);
  $DvtChartAxis$$.prototype.$axisToPlotArea$ = function $$DvtChartAxis$$$$$axisToPlotArea$$($dvt$$2$$) {
    if ("tangential" == this.$getOptions$().position) {
      return $dvt$$2$$;
    }
    if (null == $dvt$$2$$) {
      return null;
    }
    $dvt$$2$$ -= this.$getLeftOverflow$();
    return Math.round(10 * $dvt$$2$$) / 10;
  };
  $DvtChartAxis$$.prototype.$plotAreaToAxis$ = function $$DvtChartAxis$$$$$plotAreaToAxis$$($dvt$$2$$) {
    if ("tangential" == this.$getOptions$().position) {
      return $dvt$$2$$;
    }
    if (null == $dvt$$2$$) {
      return null;
    }
    $dvt$$2$$ += this.$getLeftOverflow$();
    return Math.round($dvt$$2$$);
  };
  $DvtChartAxis$$.prototype.$linearToActual$ = function $$DvtChartAxis$$$$$linearToActual$$($dvt$$2$$) {
    return this.$Info$.$linearToActual$($dvt$$2$$);
  };
  $DvtChartAxis$$.prototype.$actualToLinear$ = function $$DvtChartAxis$$$$$actualToLinear$$($dvt$$2$$) {
    return this.$Info$.$actualToLinear$($dvt$$2$$);
  };
  $DvtChartAxis$$.prototype.$getValueAt$ = function $$DvtChartAxis$$$$$getValueAt$$($dvt$$2$$) {
    return this.$Info$.$getValueAt$(this.$plotAreaToAxis$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getCoordAt$ = function $$DvtChartAxis$$$$$getCoordAt$$($dvt$$2$$) {
    return this.$axisToPlotArea$(this.$Info$.$getCoordAt$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getBoundedValueAt$ = function $$DvtChartAxis$$$$$getBoundedValueAt$$($dvt$$2$$) {
    return this.$Info$.$getBoundedValueAt$(this.$plotAreaToAxis$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getBoundedCoordAt$ = function $$DvtChartAxis$$$$$getBoundedCoordAt$$($dvt$$2$$) {
    return this.$axisToPlotArea$(this.$Info$.$getBoundedCoordAt$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getUnboundedValueAt$ = function $$DvtChartAxis$$$$$getUnboundedValueAt$$($dvt$$2$$) {
    return this.$Info$.$getUnboundedValueAt$(this.$plotAreaToAxis$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getUnboundedCoordAt$ = function $$DvtChartAxis$$$$$getUnboundedCoordAt$$($dvt$$2$$) {
    return this.$axisToPlotArea$(this.$Info$.$getUnboundedCoordAt$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$getBaselineCoord$ = function $$DvtChartAxis$$$$$getBaselineCoord$$() {
    return this.$axisToPlotArea$(this.$Info$.$getBaselineCoord$());
  };
  $DvtChartAxis$$.prototype.$getPosition$ = function $$DvtChartAxis$$$$$getPosition$$() {
    return this.$getOptions$().position;
  };
  $DvtChartAxis$$.prototype.$isGroupAxis$ = function $$DvtChartAxis$$$$$isGroupAxis$$() {
    return this.$Info$ instanceof $dvt$$2$$.$GroupAxisInfo$;
  };
  $DvtChartAxis$$.prototype.$getMajorTickCoords$ = function $$DvtChartAxis$$$$$getMajorTickCoords$$() {
    for (var $dvt$$2$$ = this.$Info$ ? this.$Info$.$getMajorTickCoords$() : [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $dvt$$2$$[$DvtSparkChartEventManager$$] = this.$axisToPlotArea$($dvt$$2$$[$DvtSparkChartEventManager$$]);
    }
    return $dvt$$2$$;
  };
  $DvtChartAxis$$.prototype.$getMinorTickCoords$ = function $$DvtChartAxis$$$$$getMinorTickCoords$$() {
    for (var $dvt$$2$$ = this.$Info$ ? this.$Info$.$getMinorTickCoords$() : [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $dvt$$2$$[$DvtSparkChartEventManager$$] = this.$axisToPlotArea$($dvt$$2$$[$DvtSparkChartEventManager$$]);
    }
    return $dvt$$2$$;
  };
  $DvtChartAxis$$.prototype.$getBaselineCoord$ = function $$DvtChartAxis$$$$$getBaselineCoord$$() {
    return this.$axisToPlotArea$(this.$Info$.$getBaselineCoord$());
  };
  $DvtChartAxis$$.prototype.$getLinearGlobalMin$ = function $$DvtChartAxis$$$$$getLinearGlobalMin$$() {
    return this.$actualToLinear$(this.$Info$.$GlobalMin$);
  };
  $DvtChartAxis$$.prototype.$getLinearGlobalMax$ = function $$DvtChartAxis$$$$$getLinearGlobalMax$$() {
    return this.$actualToLinear$(this.$Info$.$GlobalMax$);
  };
  $DvtChartAxis$$.prototype.$getLinearViewportMin$ = function $$DvtChartAxis$$$$$getLinearViewportMin$$() {
    return this.$actualToLinear$(this.$Info$.$MinValue$);
  };
  $DvtChartAxis$$.prototype.$getLinearViewportMax$ = function $$DvtChartAxis$$$$$getLinearViewportMax$$() {
    return this.$actualToLinear$(this.$Info$.$MaxValue$);
  };
  $DvtChartAxis$$.prototype.$getUnboundedLinearValueAt$ = function $$DvtChartAxis$$$$$getUnboundedLinearValueAt$$($dvt$$2$$) {
    return this.$Info$.$actualToLinear$(this.$getUnboundedValueAt$($dvt$$2$$));
  };
  $DvtChartAxis$$.prototype.$isFullViewport$ = function $$DvtChartAxis$$$$$isFullViewport$$() {
    return this.$Info$.$MinValue$ == this.$Info$.$GlobalMin$ && this.$Info$.$MaxValue$ == this.$Info$.$GlobalMax$;
  };
  $DvtChartAxis$$.prototype.$getLeftOverflow$ = function $$DvtChartAxis$$$$$getLeftOverflow$$() {
    return $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$Info$.$getEndOverflow$() : this.$Info$.$getStartOverflow$();
  };
  $DvtChartAxis$$.prototype.$getRightOverflow$ = function $$DvtChartAxis$$$$$getRightOverflow$$() {
    return $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$Info$.$getStartOverflow$() : this.$Info$.$getEndOverflow$();
  };
  $DvtChartAxis$$.prototype.$getMinCoord$ = function $$DvtChartAxis$$$$$getMinCoord$$() {
    return this.$axisToPlotArea$(Math.min(this.$Info$.$getStartCoord$(), this.$Info$.$getEndCoord$()));
  };
  $DvtChartAxis$$.prototype.$getMaxCoord$ = function $$DvtChartAxis$$$$$getMaxCoord$$() {
    return this.$axisToPlotArea$(Math.max(this.$Info$.$getStartCoord$(), this.$Info$.$getEndCoord$()));
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartBar$$, $DvtChartSelectableRectangularPolygon$$);
  $DvtChartBar$$.$_INDICATOR_OFFSET$ = 8;
  $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS$ = 5;
  $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS_PIXEL_HINTING$ = 15;
  $DvtChartBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ = 5;
  $DvtChartBar$$.$_MAX_GAP_SIZE$ = 2;
  $DvtChartBar$$.prototype.$setSelected$ = function $$DvtChartBar$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$isSelected$() ? (this.$_tempX1$ = this.$_x1$, this.$_tempX2$ = this.$_x2$, this.$_tempBaselineCoord$ = this.$_baselineCoord$, this.$_x1$ = this.$_origX1$, this.$_x2$ = this.$_origX2$, this.$_baselineCoord$ = this.$_origBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : this.$_outerColor$, this.$_innerColor$)) : (this.$_x1$ = this.$_tempX1$, 
    this.$_x2$ = this.$_tempX2$, this.$_baselineCoord$ = this.$_tempBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : null)));
  };
  $DvtChartBar$$.prototype.$getAnimationParams$ = function $$DvtChartBar$$$$$getAnimationParams$$($dvt$$2$$) {
    return $dvt$$2$$ ? this.$_bHoriz$ ? [this.$_x2$, this.$_x1$, this.$_baselineCoord$, this.$_endCoord$] : [this.$_x1$, this.$_x2$, this.$_endCoord$, this.$_baselineCoord$] : [this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$];
  };
  $DvtChartBar$$.prototype.$setAnimationParams$ = function $$DvtChartBar$$$$$setAnimationParams$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_setBarCoords$($dvt$$2$$[0], $dvt$$2$$[1], $dvt$$2$$[2], $dvt$$2$$[3], !1);
    if ($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = this.$getIndicatorPosition$();
      $DvtSparkChartEventManager$$.$setTranslate$($DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y);
      $DvtSparkChartEventManager$$.$setAlpha$(1);
      $DvtSparkChartEventManager$$.getParent().$addChild$($DvtSparkChartEventManager$$);
    }
  };
  $DvtChartBar$$.prototype.$getDisplayAnimation$ = function $$DvtChartBar$$$$$getDisplayAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getAnimationParams$();
    this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, this.$_x1$, this.$_x2$]);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartBar$$.prototype.$getDeleteAnimation$ = function $$DvtChartBar$$$$$getDeleteAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartBar$$.prototype.$getInsertAnimation$ = function $$DvtChartBar$$$$$getInsertAnimation$$($DvtSparkChartEventManager$$) {
    this.$setAlpha$(0);
    $DvtSparkChartEventManager$$ = this.$getDisplayAnimation$($DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartBar$$.prototype.$getIndicatorPosition$ = function $$DvtChartBar$$$$$getIndicatorPosition$$() {
    var $DvtSparkChartEventManager$$ = (this.$_x1$ + this.$_x2$) / 2, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = this.$_bStacked$ ? (this.$_endCoord$ + this.$_baselineCoord$) / 2 : this.$_endCoord$ >= this.$_baselineCoord$ ? this.$_endCoord$ + $DvtChartBar$$.$_INDICATOR_OFFSET$ : this.$_endCoord$ - $DvtChartBar$$.$_INDICATOR_OFFSET$;
    $DvtSparkChartDefaults$$ = this.$_bHoriz$ ? $DvtSparkChartAutomation$$ : $DvtSparkChartEventManager$$;
    $DvtSparkChartEventManager$$ = this.$_bHoriz$ ? $DvtSparkChartEventManager$$ : $DvtSparkChartAutomation$$;
    return new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$);
  };
  $DvtChartBar$$.prototype.$_setBarCoords$ = function $$DvtChartBar$$$$$_setBarCoords$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    this.$_baselineCoord$ = $DvtSparkChartEventManager$$;
    this.$_endCoord$ = $DvtSparkChartDefaults$$;
    this.$_x1$ = $DvtSparkChartAutomation$$;
    this.$_x2$ = $DvtChartTooltipUtils$$;
    this.$_origX1$ = this.$_x1$;
    this.$_origX2$ = this.$_x2$;
    this.$_origBaselineCoord$ = this.$_baselineCoord$;
    0 < this.$_dataItemGaps$ && $DvtChartSeriesEffectUtils$$ && !this.$isSelected$() && ($DvtSparkChartEventManager$$ = Math.ceil($DvtChartBar$$.$_MAX_GAP_SIZE$ * this.$_dataItemGaps$), $DvtSparkChartDefaults$$ = this.$_x2$ - this.$_x1$, $DvtSparkChartAutomation$$ = this.$_axisCoord$ == this.$_baselineCoord$, Math.abs(this.$_baselineCoord$ - this.$_endCoord$) >= $DvtChartBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ && this.$_bStacked$ && !$DvtSparkChartAutomation$$ && (this.$_baselineCoord$ += this.$_endCoord$ > 
    this.$_baselineCoord$ ? $DvtSparkChartEventManager$$ : -$DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ >= $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS$ && (1 == $dvt$$2$$.$Agent$.$getDevicePixelRatio$() && 0 < this.$_barGapRatio$ && $DvtSparkChartDefaults$$ > $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS_PIXEL_HINTING$ ? ($dvt$$2$$.$Agent$.$isPlatformGecko$() || this.$setPixelHinting$(), this.$_x1$ = Math.round(this.$_x1$), this.$_x2$ = Math.round(this.$_x2$), this.$_origX1$ = this.$_x1$, this.$_origX2$ = 
    this.$_x2$, this.$_x2$ -= $DvtSparkChartEventManager$$) : (this.$_x1$ += $DvtSparkChartEventManager$$ / 2, this.$_x2$ -= $DvtSparkChartEventManager$$ / 2)));
    this.$setPoints$(this.$_createPointsArray$());
    this.$OuterChild$ && this.$OuterChild$.$setPoints$(this.$_createPointsArray$($DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$));
    this.$InnerChild$ && this.$InnerChild$.$setPoints$(this.$_createPointsArray$($DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$ + $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$));
  };
  $DvtChartBar$$.prototype.$_createPointsArray$ = function $$DvtChartBar$$$$$_createPointsArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_baselineCoord$, $DvtSparkChartDefaults$$ = this.$_endCoord$, $DvtSparkChartAutomation$$ = this.$_x1$, $DvtChartTooltipUtils$$ = this.$_x2$;
    if (0 < $dvt$$2$$) {
      if (Math.abs($DvtSparkChartAutomation$$ - $DvtChartTooltipUtils$$) < 2 * $dvt$$2$$ || Math.abs($DvtSparkChartEventManager$$ - $DvtSparkChartDefaults$$) < 2 * $dvt$$2$$) {
        return [];
      }
      $DvtSparkChartAutomation$$ += $dvt$$2$$;
      $DvtChartTooltipUtils$$ -= $dvt$$2$$;
      $DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$ ? ($DvtSparkChartEventManager$$ -= $dvt$$2$$, $DvtSparkChartDefaults$$ += $dvt$$2$$) : ($DvtSparkChartEventManager$$ += $dvt$$2$$, $DvtSparkChartDefaults$$ -= $dvt$$2$$);
    }
    return this.$_bHoriz$ ? [$DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$] : [$DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$];
  };
  $DvtChartBar$$.prototype.$_initializeSelectionEffects$ = function $$DvtChartBar$$$$$_initializeSelectionEffects$$() {
    var $DvtSparkChartEventManager$$ = this.$isSelected$() ? $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$ : $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH_HOVER$, $DvtSparkChartDefaults$$ = this.$_createPointsArray$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$ = this.$_createPointsArray$($DvtSparkChartEventManager$$ + $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$);
    this.$OuterChild$ ? (this.$OuterChild$.$setPoints$($DvtSparkChartDefaults$$), this.$InnerChild$.$setPoints$($DvtSparkChartEventManager$$)) : (this.$OuterChild$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartDefaults$$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setMouseEnabled$(!0), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartEventManager$$), this.$InnerChild$.$setInvisibleFill$(), this.$InnerChild$.$setMouseEnabled$(!0), 
    this.$addChild$(this.$InnerChild$));
  };
  $DvtChartBar$$.prototype.$getBoundingBox$ = function $$DvtChartBar$$$$$getBoundingBox$$() {
    var $DvtSparkChartEventManager$$ = Math.min(this.$_x2$, this.$_x1$), $DvtSparkChartDefaults$$ = Math.min(this.$_endCoord$, this.$_baselineCoord$), $DvtSparkChartAutomation$$ = Math.abs(this.$_x2$ - this.$_x1$), $DvtChartTooltipUtils$$ = Math.abs(this.$_endCoord$ - this.$_baselineCoord$);
    return this.$_bHoriz$ ? new $dvt$$2$$.$Rectangle$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$) : new $dvt$$2$$.$Rectangle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
  };
  $DvtChartBar$$.prototype.$getDimensionsSelf$ = function $$DvtChartBar$$$$$getDimensionsSelf$$($dvt$$2$$) {
    return this.$ConvertCoordSpaceRect$(this.$getBoundingBox$(), $dvt$$2$$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartCandlestick$$, $dvt$$2$$.$Container$);
  $DvtChartCandlestick$$.$_BAR_WIDTH$ = .3;
  $DvtChartCandlestick$$.prototype.$setChangeStyle$ = function $$DvtChartCandlestick$$$$$setChangeStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    this.$_changeShape$.$setStyleProperties$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
  };
  $DvtChartCandlestick$$.prototype.$setRangeStyle$ = function $$DvtChartCandlestick$$$$$setRangeStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$_rangeShape$ && this.$_rangeShape$.$setStyleProperties$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, null, $DvtSparkChartAutomation$$);
  };
  $DvtChartCandlestick$$.prototype.$setSelected$ = function $$DvtChartCandlestick$$$$$setSelected$$($dvt$$2$$) {
    this.$_changeShape$.$setSelected$($dvt$$2$$);
    this.$_rangeShape$ && this.$_rangeShape$.$setSelected$($dvt$$2$$);
  };
  $DvtChartCandlestick$$.prototype.$showHoverEffect$ = function $$DvtChartCandlestick$$$$$showHoverEffect$$() {
    this.$_changeShape$.$showHoverEffect$();
    this.$_rangeShape$ && this.$_rangeShape$.$showHoverEffect$();
  };
  $DvtChartCandlestick$$.prototype.$hideHoverEffect$ = function $$DvtChartCandlestick$$$$$hideHoverEffect$$() {
    this.$_changeShape$.$hideHoverEffect$();
    this.$_rangeShape$ && this.$_rangeShape$.$hideHoverEffect$();
  };
  $DvtChartCandlestick$$.prototype.$getDisplayAnimation$ = function $$DvtChartCandlestick$$$$$getDisplayAnimation$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    var $DvtSparkChartDefaults$$ = this.$_changeShape$.$getPoints$();
    this.$_changeShape$.$setPoints$($DvtChartCandlestick$$.$_getInitialPoints$($DvtSparkChartDefaults$$));
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $DvtSparkChartDefaults$$);
    this.$_rangeShape$ && ($DvtSparkChartDefaults$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$($DvtChartCandlestick$$.$_getInitialPoints$($DvtSparkChartDefaults$$)), $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $DvtSparkChartDefaults$$));
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartCandlestick$$.prototype.$getDeleteAnimation$ = function $$DvtChartCandlestick$$$$$getDeleteAnimation$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $DvtChartCandlestick$$.$_getInitialPoints$(this.$_changeShape$.$getPoints$()));
    this.$_rangeShape$ && $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $DvtChartCandlestick$$.$_getInitialPoints$(this.$_rangeShape$.$getPoints$()));
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartCandlestick$$.prototype.$getInsertAnimation$ = function $$DvtChartCandlestick$$$$$getInsertAnimation$$($DvtSparkChartEventManager$$) {
    this.$setAlpha$(0);
    $DvtSparkChartEventManager$$ = this.$getDisplayAnimation$($DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartCandlestick$$.prototype.$getUpdateAnimation$ = function $$DvtChartCandlestick$$$$$getUpdateAnimation$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$), $DvtChartTooltipUtils$$ = this.$_changeShape$.$getPoints$();
    this.$_changeShape$.$setPoints$($DvtSparkChartDefaults$$.$_changeShape$.$getPoints$());
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $DvtChartTooltipUtils$$);
    var $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.$_changeShape$.$isSelected$() || this.$_changeShape$.$isSelected$(), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$.$_changeShape$.$getPrimaryFill$().clone(), $DvtChartPieLabelUtils$$ = this.$_changeShape$.$getPrimaryFill$();
    $DvtChartTooltipUtils$$ || (this.$_changeShape$.$setFill$($DvtChartSeriesEffectUtils$$), $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, this.$_changeShape$, this.$_changeShape$.$getFill$, this.$_changeShape$.$setFill$, $DvtChartPieLabelUtils$$));
    this.$_rangeShape$ && $DvtSparkChartDefaults$$.$_rangeShape$ && ($DvtChartTooltipUtils$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$($DvtSparkChartDefaults$$.$_rangeShape$.$getPoints$()), $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $DvtChartTooltipUtils$$));
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartCandlestick$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartCandlestick$$$$$UpdateSelectionEffect$$() {
  };
  $DvtChartCandlestick$$.$_getInitialPoints$ = function $$DvtChartCandlestick$$$$_getInitialPoints$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$[0], $DvtSparkChartDefaults$$ = $dvt$$2$$[2];
    $dvt$$2$$ = ($dvt$$2$$[1] + $dvt$$2$$[5]) / 2;
    return [$DvtSparkChartEventManager$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$];
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartCoord$$, $dvt$$2$$.$Obj$);
  $DvtChartCoord$$.prototype.$isUpstep$ = function $$DvtChartCoord$$$$$isUpstep$$($dvt$$2$$) {
    return Math.abs(this.$y2$ - $dvt$$2$$) > Math.abs(this.$y1$ - $dvt$$2$$);
  };
  $DvtChartCoord$$.prototype.clone = function $$DvtChartCoord$$$$clone$() {
    return new $DvtChartCoord$$(this.x, this.$y1$, this.$y2$, this.$groupIndex$, this.group, this.$filtered$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartLineArea$$, $dvt$$2$$.$Container$);
  $DvtChartLineArea$$.$_INDICATOR_OFFSET$ = 8;
  $DvtChartLineArea$$.prototype.$setCoords$ = function $$DvtChartLineArea$$$$$setCoords$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_arCoord$ = $dvt$$2$$;
    $DvtSparkChartEventManager$$ && (this.$_arBaseCoord$ = $DvtSparkChartEventManager$$);
    this.$removeChildren$();
    this.$_bArea$ ? this.$_renderAreas$() : this.$_renderLines$();
    this.$_positionIndicators$();
  };
  $DvtChartLineArea$$.prototype.$isArea$ = function $$DvtChartLineArea$$$$$isArea$$() {
    return this.$_bArea$;
  };
  $DvtChartLineArea$$.prototype.$_getPointArrays$ = function $$DvtChartLineArea$$$$$_getPointArrays$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = [], $DvtChartTooltipUtils$$ = [];
    $DvtSparkChartAutomation$$.push($DvtChartTooltipUtils$$);
    $DvtSparkChartEventManager$$ = $DvtChartLineArea$$.$_convertToPointCoords$($DvtSparkChartEventManager$$);
    var $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isPolar$(this.$_chart$), $DvtChartPieLabelUtils$$ = "centeredStepped" == $DvtSparkChartDefaults$$ || "centeredSegmented" == $DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$ || "stepped" == $DvtSparkChartDefaults$$ || "segmented" == $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getGroupWidth$(this.$_chart$), $DvtChartDataChangeFunnelSlice$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && 
    $DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? -1 : 1, $DvtChartLineMarker$$;
    $DvtChartSeriesEffectUtils$$ && ($DvtChartLineMarker$$ = $DvtSparkChartEventManager$$[$DvtSparkChartEventManager$$.length - 1]);
    for (var $DvtChartMarkerUtils$$, $DvtChartDataChangeLineArea$$, $DvtChartRangeMarker$$, $DvtChartDataChangeRangeMarker$$ = !1, $DvtChartOverview$$ = 0;$DvtChartOverview$$ < $DvtSparkChartEventManager$$.length;$DvtChartOverview$$++) {
      null == $DvtSparkChartEventManager$$[$DvtChartOverview$$] ? ($DvtChartAxisUtils$$.$isMixedFrequency$(this.$_chart$) || !$DvtChartPieRenderUtils$$ || $DvtChartSeriesEffectUtils$$ || !$DvtChartLineMarker$$ || $DvtChartRangeMarker$$ || ($DvtChartMarkerUtils$$ = $DvtChartPieLabelUtils$$ ? $DvtChartLineMarker$$.x + .5 * $DvtChartPieLabelInfo$$ * $DvtChartDataChangeFunnelSlice$$ : $DvtChartLineMarker$$.x + $DvtChartPieLabelInfo$$ * $DvtChartDataChangeFunnelSlice$$, this.$_pushCoord$($DvtChartTooltipUtils$$, 
      $DvtChartMarkerUtils$$, $DvtChartLineMarker$$.y)), "jet" != this.$_chart$.$getOptions$()._environment && $DvtChartAxisUtils$$.$isMixedFrequency$(this.$_chart$) || ($DvtChartTooltipUtils$$ = [], $DvtSparkChartAutomation$$.push($DvtChartTooltipUtils$$), $DvtChartLineMarker$$ = null)) : ($DvtChartMarkerUtils$$ = $DvtSparkChartEventManager$$[$DvtChartOverview$$], $DvtChartRangeMarker$$ = $DvtSparkChartEventManager$$[$DvtChartOverview$$].$_isY2$, $DvtChartDataChangeLineArea$$ = $DvtChartPieLabelUtils$$ ? 
      $DvtChartMarkerUtils$$.x - $DvtChartPieLabelInfo$$ / 2 * $DvtChartDataChangeFunnelSlice$$ : $DvtChartMarkerUtils$$.x, $DvtChartRangeMarker$$ && ($DvtChartDataChangeRangeMarker$$ && $DvtChartPieRenderUtils$$ && ($DvtChartDataChangeLineArea$$ += $DvtChartPieLabelInfo$$ * $DvtChartDataChangeFunnelSlice$$), $DvtChartDataChangeRangeMarker$$ = !$DvtChartDataChangeRangeMarker$$), "curved" == $DvtSparkChartDefaults$$ && $DvtChartRangeMarker$$ && $DvtChartTooltipUtils$$.push(null, null), $DvtChartLineMarker$$ && 
      $DvtChartPieRenderUtils$$ && this.$_pushCoord$($DvtChartTooltipUtils$$, $DvtChartDataChangeLineArea$$, $DvtChartLineMarker$$.y), this.$_bArea$ || "segmented" != $DvtSparkChartDefaults$$ && "centeredSegmented" != $DvtSparkChartDefaults$$ || ($DvtChartTooltipUtils$$ = [], $DvtSparkChartAutomation$$.push($DvtChartTooltipUtils$$)), this.$_pushCoord$($DvtChartTooltipUtils$$, $DvtChartDataChangeLineArea$$, $DvtChartMarkerUtils$$.y), $DvtChartLineMarker$$ = $DvtChartMarkerUtils$$);
    }
    $DvtChartPieRenderUtils$$ && !$DvtChartSeriesEffectUtils$$ && $DvtChartLineMarker$$ && !$DvtChartRangeMarker$$ && ($DvtChartMarkerUtils$$ = $DvtChartPieLabelUtils$$ ? $DvtChartLineMarker$$.x + .5 * $DvtChartPieLabelInfo$$ * $DvtChartDataChangeFunnelSlice$$ : $DvtChartLineMarker$$.x + $DvtChartPieLabelInfo$$ * $DvtChartDataChangeFunnelSlice$$, this.$_pushCoord$($DvtChartTooltipUtils$$, $DvtChartMarkerUtils$$, $DvtChartLineMarker$$.y));
    $DvtChartSeriesEffectUtils$$ && 1 < $DvtSparkChartAutomation$$.length && ($DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.pop(), $DvtSparkChartAutomation$$[0] = $DvtChartTooltipUtils$$.concat($DvtSparkChartAutomation$$[0]));
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartLineArea$$.prototype.$_pushCoord$ = function $$DvtChartLineArea$$$$$_pushCoord$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$(this.$_chart$, new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), this.$_availSpace$);
    $DvtSparkChartEventManager$$.push(Math.round(10 * $DvtSparkChartDefaults$$.x) / 10, Math.round(10 * $DvtSparkChartDefaults$$.y) / 10);
  };
  $DvtChartLineArea$$.prototype.$_isRing$ = function $$DvtChartLineArea$$$$$_isRing$$() {
    if (!$DvtChartTypeUtils$$.$isPolar$(this.$_chart$) || !$DvtChartAxisUtils$$.$hasGroupAxis$(this.$_chart$) || this.$_arCoord$.length < $DvtChartDataUtils$$.$getGroupCount$(this.$_chart$)) {
      return !1;
    }
    for (var $dvt$$2$$ = 0;$dvt$$2$$ < this.$_arCoord$.length;$dvt$$2$$++) {
      if (null == this.$_arCoord$[$dvt$$2$$].x) {
        return !1;
      }
    }
    return !0;
  };
  $DvtChartLineArea$$.prototype.$_getSplineType$ = function $$DvtChartLineArea$$$$$_getSplineType$$() {
    return $DvtChartTypeUtils$$.$isScatterBubble$(this.$_chart$) ? $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL$ : $DvtChartTypeUtils$$.$isPolar$(this.$_chart$) ? this.$_isRing$() ? $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL_CLOSED$ : $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL$ : $DvtChartTypeUtils$$.$isHorizontal$(this.$_chart$) ? $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_MONOTONE_HORIZONTAL$ : $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_MONOTONE_VERTICAL$;
  };
  $DvtChartLineArea$$.prototype.$_renderLines$ = function $$DvtChartLineArea$$$$$_renderLines$$() {
    for (var $DvtSparkChartEventManager$$ = this.$_getPointArrays$(this.$_arCoord$, this.$_type$), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      ($DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$]) && 1 < $DvtSparkChartDefaults$$.length && ("curved" == this.$_type$ ? ($DvtSparkChartDefaults$$ = $DvtChartLineArea$$.$_getCurvedPathCommands$($DvtSparkChartDefaults$$, !1, this.$_getSplineType$()), $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$.$setFill$(null)) : this.$_isRing$() ? ($DvtSparkChartDefaults$$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), 
      $DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$.$setFill$(null)) : $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Polyline$(this.$getCtx$(), $DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$.$setStroke$(this.$_stroke$), $DvtSparkChartDefaults$$.$setClassName$(this.$_className$).$setStyle$(this.$_style$), this.$addChild$($DvtSparkChartDefaults$$));
    }
  };
  $DvtChartLineArea$$.prototype.$_renderAreas$ = function $$DvtChartLineArea$$$$$_renderAreas$$() {
    var $DvtSparkChartEventManager$$ = this.$_arCoord$, $DvtSparkChartDefaults$$ = this.$_arBaseCoord$;
    !$DvtChartTypeUtils$$.$isPolar$(this.$_chart$) && 0 < $DvtSparkChartEventManager$$.length && 0 < $DvtSparkChartDefaults$$.length && ($DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.slice(0), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.slice(0), null != $DvtSparkChartEventManager$$[0].x && null != $DvtSparkChartDefaults$$[0].x && ($DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartEventManager$$, 0, this.$_baseline$), $DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartDefaults$$, 
    0, this.$_baseline$), $DvtSparkChartDefaults$$[0].x = $DvtSparkChartEventManager$$[0].x), null != $DvtSparkChartEventManager$$[$DvtSparkChartEventManager$$.length - 1].x && null != $DvtSparkChartDefaults$$[$DvtSparkChartDefaults$$.length - 1].x && ($DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.length - 1, this.$_baseline$), $DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.length - 1, this.$_baseline$), 
    $DvtSparkChartDefaults$$[$DvtSparkChartDefaults$$.length - 1].x = $DvtSparkChartEventManager$$[$DvtSparkChartEventManager$$.length - 1].x));
    $DvtSparkChartEventManager$$ = this.$_getPointArrays$($DvtSparkChartEventManager$$, this.$_type$);
    $DvtSparkChartDefaults$$ = this.$_getPointArrays$($DvtSparkChartDefaults$$, this.$_baseType$);
    if ($DvtSparkChartEventManager$$.length == $DvtSparkChartDefaults$$.length) {
      for (var $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartTooltipUtils$$++) {
        var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$[$DvtChartTooltipUtils$$], $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$[$DvtChartTooltipUtils$$];
        if (!(2 > $DvtChartSeriesEffectUtils$$.length)) {
          var $DvtChartPieRenderUtils$$ = "curved" == this.$_type$;
          $DvtSparkChartAutomation$$ = "curved" == this.$_baseType$;
          this.$_isRing$() && ($DvtChartPieRenderUtils$$ || $DvtChartSeriesEffectUtils$$.push($DvtChartSeriesEffectUtils$$[0], $DvtChartSeriesEffectUtils$$[1]), 2 <= $DvtChartPieLabelUtils$$.length && !$DvtSparkChartAutomation$$ && $DvtChartPieLabelUtils$$.push($DvtChartPieLabelUtils$$[0], $DvtChartPieLabelUtils$$[1]));
          for (var $DvtChartPieLabelInfo$$ = [], $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartPieLabelUtils$$.length;$DvtChartDataChangeFunnelSlice$$ += 2) {
            $DvtChartPieLabelInfo$$.unshift($DvtChartPieLabelUtils$$[$DvtChartDataChangeFunnelSlice$$], $DvtChartPieLabelUtils$$[$DvtChartDataChangeFunnelSlice$$ + 1]);
          }
          $DvtChartPieRenderUtils$$ || $DvtSparkChartAutomation$$ ? ($DvtChartPieLabelUtils$$ = this.$_getSplineType$(), $DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$ ? $DvtChartLineArea$$.$_getCurvedPathCommands$($DvtChartSeriesEffectUtils$$, !1, $DvtChartPieLabelUtils$$) : $dvt$$2$$.$PathUtils$.$polyline$($DvtChartSeriesEffectUtils$$, !1), $DvtChartSeriesEffectUtils$$ += $DvtSparkChartAutomation$$ ? $DvtChartLineArea$$.$_getCurvedPathCommands$($DvtChartPieLabelInfo$$, !0, $DvtChartPieLabelUtils$$) : 
          $dvt$$2$$.$PathUtils$.$polyline$($DvtChartPieLabelInfo$$, !0), $DvtChartSeriesEffectUtils$$ += $dvt$$2$$.$PathUtils$.closePath(), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtChartSeriesEffectUtils$$)) : ($DvtSparkChartAutomation$$ = $DvtChartPieLabelInfo$$.concat($DvtChartSeriesEffectUtils$$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartAutomation$$));
          $DvtSparkChartAutomation$$.$setFill$(this.$_fill$);
          $DvtSparkChartAutomation$$.$setClassName$(this.$_className$).$setStyle$(this.$_style$);
          this.$_stroke$ && $DvtSparkChartAutomation$$.$setStroke$(this.$_stroke$);
          this.$addChild$($DvtSparkChartAutomation$$);
        }
      }
    }
  };
  $DvtChartLineArea$$.prototype.$_positionIndicators$ = function $$DvtChartLineArea$$$$$_positionIndicators$$() {
    for (var $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < this.$_arCoord$.length;$DvtChartTooltipUtils$$++) {
      $DvtSparkChartAutomation$$ = this.$_arCoord$[$DvtChartTooltipUtils$$], ($DvtSparkChartEventManager$$ = this.$_indicatorMap$[$DvtSparkChartAutomation$$.$groupIndex$]) && $DvtSparkChartEventManager$$.$indicator$ && ($DvtSparkChartDefaults$$ = ($DvtSparkChartAutomation$$.$isUpstep$(this.$_baseline$) ? $DvtSparkChartAutomation$$.$y2$ : $DvtSparkChartAutomation$$.$y1$) + $DvtChartLineArea$$.$_INDICATOR_OFFSET$ * ($DvtSparkChartEventManager$$.direction == $DvtChartDataChangeUtils$$.$DIR_UP$ ? -1 : 
      1), $DvtSparkChartDefaults$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$(this.$_chart$, new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x, $DvtSparkChartDefaults$$), this.$_availSpace$), $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$indicator$, $DvtSparkChartEventManager$$.$setTranslate$($DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y), $DvtSparkChartEventManager$$.$setAlpha$(1), $DvtSparkChartEventManager$$.getParent().$addChild$($DvtSparkChartEventManager$$));
    }
  };
  $DvtChartLineArea$$.prototype.$getAnimationParams$ = function $$DvtChartLineArea$$$$$getAnimationParams$$($dvt$$2$$) {
    return $DvtChartLineArea$$.$_coordsToAnimationParams$(this.$_arCoord$, $dvt$$2$$ ? $dvt$$2$$.$_arCoord$ : null, this.$_baseline$);
  };
  $DvtChartLineArea$$.prototype.$setAnimationParams$ = function $$DvtChartLineArea$$$$$setAnimationParams$$($dvt$$2$$) {
    $dvt$$2$$ = $DvtChartLineArea$$.$_animationParamsToCoords$($dvt$$2$$);
    this.$setCoords$($dvt$$2$$);
  };
  $DvtChartLineArea$$.prototype.$getBaseAnimationParams$ = function $$DvtChartLineArea$$$$$getBaseAnimationParams$$($dvt$$2$$) {
    return $DvtChartLineArea$$.$_coordsToAnimationParams$(this.$_arBaseCoord$, $dvt$$2$$ ? $dvt$$2$$.$_arBaseCoord$ : null, this.$_baseline$);
  };
  $DvtChartLineArea$$.prototype.$setBaseAnimationParams$ = function $$DvtChartLineArea$$$$$setBaseAnimationParams$$($dvt$$2$$) {
    this.$_arBaseCoord$ = $DvtChartLineArea$$.$_animationParamsToCoords$($dvt$$2$$);
  };
  $DvtChartLineArea$$.prototype.$getCommonGroupIndices$ = function $$DvtChartLineArea$$$$$getCommonGroupIndices$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$_arCoord$.length;$DvtSparkChartDefaults$$++) {
      if (!this.$_arCoord$[$DvtSparkChartDefaults$$].$filtered$ && null != this.$_arCoord$[$DvtSparkChartDefaults$$].x) {
        for (var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.$_arCoord$.length;$DvtSparkChartAutomation$$++) {
          if (!$dvt$$2$$.$_arCoord$[$DvtSparkChartAutomation$$].$filtered$ && null != $dvt$$2$$.$_arCoord$[$DvtSparkChartAutomation$$].x && this.$_arCoord$[$DvtSparkChartDefaults$$].group == $dvt$$2$$.$_arCoord$[$DvtSparkChartAutomation$$].group) {
            $DvtSparkChartEventManager$$.push(this.$_arCoord$[$DvtSparkChartDefaults$$].$groupIndex$);
            break;
          }
        }
      }
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartLineArea$$.prototype.$addIndicator$ = function $$DvtChartLineArea$$$$$addIndicator$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$setAlpha$(0);
    this.$_indicatorMap$[$dvt$$2$$] = {direction:$DvtSparkChartEventManager$$, $indicator$:$DvtSparkChartDefaults$$};
  };
  $DvtChartLineArea$$.prototype.$removeIndicators$ = function $$DvtChartLineArea$$$$$removeIndicators$$() {
    for (var $dvt$$2$$ in this.$_indicatorMap$) {
      var $DvtSparkChartEventManager$$ = this.$_indicatorMap$[$dvt$$2$$].$indicator$;
      $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.getParent().removeChild($DvtSparkChartEventManager$$);
    }
    this.$_indicatorMap$ = {};
  };
  $DvtChartLineArea$$.$_convertToPointCoords$ = function $$DvtChartLineArea$$$$_convertToPointCoords$$($DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      if (!$DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$filtered$) {
        if (null == $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].x) {
          $DvtSparkChartDefaults$$.push(null);
        } else {
          if ($DvtSparkChartDefaults$$.push(new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].x, $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y1$)), $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y1$ != $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y2$) {
            var $DvtChartTooltipUtils$$ = new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].x, $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y2$);
            $DvtChartTooltipUtils$$.$_isY2$ = !0;
            $DvtSparkChartDefaults$$.push($DvtChartTooltipUtils$$);
          }
        }
      }
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartLineArea$$.$_coordsToAnimationParams$ = function $$DvtChartLineArea$$$$_coordsToAnimationParams$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if ($DvtSparkChartDefaults$$ && 0 < $DvtSparkChartDefaults$$.length) {
      if ($DvtSparkChartEventManager$$ && 0 < $DvtSparkChartEventManager$$.length) {
        $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.slice(0);
        $DvtSparkChartDefaults$$ = $DvtChartLineArea$$.$_coordsToGroups$($DvtSparkChartDefaults$$);
        for (var $DvtChartTooltipUtils$$ = $DvtChartLineArea$$.$_coordsToGroups$($DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.length, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.length - 1;0 <= $DvtChartPieRenderUtils$$;$DvtChartPieRenderUtils$$--) {
          $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$[$DvtChartPieRenderUtils$$], $DvtChartPieLabelUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartTooltipUtils$$, $DvtChartPieLabelUtils$$), -1 == $DvtChartPieLabelUtils$$ ? (0 == $DvtChartSeriesEffectUtils$$ ? ($DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$[0].clone(), $DvtSparkChartEventManager$$[0] = $DvtSparkChartEventManager$$[0].clone(), $DvtChartLineArea$$.$_removeCoordJump$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$[0], 
          $DvtSparkChartAutomation$$)) : ($DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$[$DvtChartSeriesEffectUtils$$ - 1].clone(), $DvtSparkChartEventManager$$[$DvtChartSeriesEffectUtils$$ - 1] = $DvtSparkChartEventManager$$[$DvtChartSeriesEffectUtils$$ - 1].clone(), $DvtChartLineArea$$.$_removeCoordJump$($DvtSparkChartEventManager$$[$DvtChartSeriesEffectUtils$$ - 1], $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$)), $DvtChartPieLabelUtils$$.$groupIndex$ = -1, $DvtSparkChartEventManager$$.splice($DvtChartSeriesEffectUtils$$, 
          0, $DvtChartPieLabelUtils$$)) : $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelUtils$$;
        }
      } else {
        for ($DvtSparkChartEventManager$$ = [], $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtSparkChartDefaults$$.length;$DvtChartPieRenderUtils$$++) {
          $DvtSparkChartEventManager$$.push(new $DvtChartCoord$$($DvtSparkChartDefaults$$[$DvtChartPieRenderUtils$$].x, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$));
        }
      }
    }
    $DvtSparkChartAutomation$$ = [];
    for ($DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartPieRenderUtils$$++) {
      $DvtSparkChartEventManager$$[$DvtChartPieRenderUtils$$].$filtered$ || (null == $DvtSparkChartEventManager$$[$DvtChartPieRenderUtils$$].x ? ($DvtSparkChartAutomation$$.push(Infinity), $DvtSparkChartAutomation$$.push(Infinity), $DvtSparkChartAutomation$$.push(Infinity)) : ($DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieRenderUtils$$].x), $DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieRenderUtils$$].$y1$), $DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieRenderUtils$$].$y2$)), 
      $DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieRenderUtils$$].$groupIndex$));
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartLineArea$$.$_animationParamsToCoords$ = function $$DvtChartLineArea$$$$_animationParamsToCoords$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$ += 4) {
      Infinity == $dvt$$2$$[$DvtSparkChartDefaults$$] || isNaN($dvt$$2$$[$DvtSparkChartDefaults$$]) ? $DvtSparkChartEventManager$$.push(new $DvtChartCoord$$(null, null, null, $dvt$$2$$[$DvtSparkChartDefaults$$ + 3])) : $DvtSparkChartEventManager$$.push(new $DvtChartCoord$$($dvt$$2$$[$DvtSparkChartDefaults$$], $dvt$$2$$[$DvtSparkChartDefaults$$ + 1], $dvt$$2$$[$DvtSparkChartDefaults$$ + 2], $dvt$$2$$[$DvtSparkChartDefaults$$ + 3]));
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartLineArea$$.$_coordsToGroups$ = function $$DvtChartLineArea$$$$_coordsToGroups$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
      $dvt$$2$$[$DvtSparkChartDefaults$$].$filtered$ || $DvtSparkChartEventManager$$.push($dvt$$2$$[$DvtSparkChartDefaults$$].group);
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartLineArea$$.$_removeCoordJump$ = function $$DvtChartLineArea$$$$_removeCoordJump$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.$isUpstep$($DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$.$y1$ = $DvtSparkChartEventManager$$.$y2$ : $dvt$$2$$.$y2$ = $dvt$$2$$.$y1$;
  };
  $DvtChartLineArea$$.$_getCurvedPathCommands$ = function $$DvtChartLineArea$$$$_getCurvedPathCommands$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = [], $DvtChartSeriesEffectUtils$$ = [];
    $DvtChartTooltipUtils$$.push($DvtChartSeriesEffectUtils$$);
    for (var $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartPieLabelUtils$$ += 2) {
      null == $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$] ? ($DvtChartSeriesEffectUtils$$ = [], $DvtChartTooltipUtils$$.push($DvtChartSeriesEffectUtils$$)) : $DvtChartSeriesEffectUtils$$.push($DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$], $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$ + 1]);
    }
    $DvtSparkChartAutomation$$ == $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL_CLOSED$ && 1 < $DvtChartTooltipUtils$$.length && ($DvtSparkChartAutomation$$ = $DvtChartTooltipUtils$$.pop(), $DvtChartTooltipUtils$$[0] = $DvtSparkChartAutomation$$.concat($DvtChartTooltipUtils$$[0]), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL$);
    $DvtSparkChartEventManager$$ = "";
    for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartTooltipUtils$$.length;$DvtChartPieLabelUtils$$++) {
      $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$[$DvtChartPieLabelUtils$$], $DvtSparkChartEventManager$$ += $dvt$$2$$.$PathUtils$.$curveThroughPoints$($DvtChartSeriesEffectUtils$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtSparkChartDefaults$$ = !0;
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartLineArea$$.$_removeAreaEdge$ = function $$DvtChartLineArea$$$$_removeAreaEdge$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartEventManager$$].clone();
    $DvtSparkChartAutomation$$.$isUpstep$($DvtSparkChartDefaults$$) ? $DvtSparkChartAutomation$$.$y1$ = $DvtSparkChartAutomation$$.$y2$ : $DvtSparkChartAutomation$$.$y2$ = $DvtSparkChartAutomation$$.$y1$;
    $dvt$$2$$[$DvtSparkChartEventManager$$] = $DvtSparkChartAutomation$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartLineMarker$$, $dvt$$2$$.$SimpleMarker$);
  $DvtChartLineMarker$$.$DEFAULT_STROKE$ = new $dvt$$2$$.$SolidStroke$("none");
  $DvtChartLineMarker$$.$SELECTED_FILL$ = new $dvt$$2$$.$SolidFill$("#FFFFFF");
  $DvtChartLineMarker$$.$SELECTED_STROKE$ = new $dvt$$2$$.$SolidStroke$("#5A5A5A", 1, 1.5);
  $DvtChartLineMarker$$.prototype.$setDataColor$ = function $$DvtChartLineMarker$$$$$setDataColor$$($DvtSparkChartEventManager$$) {
    this.$_dataColor$ = $DvtSparkChartEventManager$$;
    this.$_hoverStroke$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartEventManager$$, 1, 1.5);
  };
  $DvtChartLineMarker$$.prototype.$showHoverEffect$ = function $$DvtChartLineMarker$$$$$showHoverEffect$$() {
    this.$IsShowingHoverEffect$ = !0;
    this.$setStroke$(this.$_hoverStroke$);
  };
  $DvtChartLineMarker$$.prototype.$hideHoverEffect$ = function $$DvtChartLineMarker$$$$$hideHoverEffect$$() {
    this.$IsShowingHoverEffect$ = !1;
    this.$setStroke$(this.$isSelected$() ? $DvtChartLineMarker$$.$SELECTED_STROKE$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$);
  };
  $DvtChartLineMarker$$.prototype.$setSelected$ = function $$DvtChartLineMarker$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$isSelected$() ? (this.$setFill$($DvtChartLineMarker$$.$SELECTED_FILL$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$SELECTED_STROKE$)) : (this.$setInvisibleFill$(), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$)));
  };
  $DvtChartLineMarker$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartLineMarker$$$$$UpdateSelectionEffect$$() {
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartOverview$$, $dvt$$2$$.$Overview$);
  $DvtChartOverview$$.prototype.$_renderChart$ = function $$DvtChartOverview$$$$$_renderChart$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$_chartContainer$ = new $dvt$$2$$.$Container$(this.$getCtx$());
    this.$addChild$(this.$_chartContainer$);
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$JsonUtils$.$merge$({legend:{rendered:"off", size:null}, xAxis:{viewportMin:null, viewportMax:null, viewportStartGroup:null, viewportEndGroup:null, axisLine:{rendered:"off"}, size:null, maxSize:.5, title:null}, yAxis:{rendered:"off", size:null}, y2Axis:{rendered:"off", size:null}, splitDualY:"off", title:{text:null}, subtitle:{text:null}, footnote:{text:null}, titleSeparator:{rendered:"off"}, styleDefaults:{animationIndicators:"none"}, layout:{outerGapWidth:0, 
    outerGapHeight:0}, _isOverview:!0}, $DvtSparkChartEventManager$$);
    $DvtChartAxisUtils$$.$hasGroupAxis$(this.$_parentChart$) && ($DvtSparkChartEventManager$$.xAxis.tickLabel.rendered = "off");
    $DvtChartTypeUtils$$.$isStock$(this.$_parentChart$) && $DvtSparkChartEventManager$$.series && $DvtSparkChartEventManager$$.series[0] && ($DvtSparkChartEventManager$$.series = [$DvtSparkChartEventManager$$.series[0]], $DvtSparkChartEventManager$$.series[0].type = "lineWithArea");
    var $DvtChartTooltipUtils$$ = this.$_parentChart$.$getOptions$().overview.content;
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$JsonUtils$.$merge$($DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.zoomAndScroll = "off";
    this.$_chart$ || (this.$_chart$ = $dvt$$2$$.$Chart$.newInstance(this.$getCtx$()), this.$_chart$.setId(this.$_id$));
    this.$_chartContainer$.$addChild$(this.$_chart$);
    this.$_chart$.$render$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.Rect(this.$getCtx$(), 0, 0, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.$setInvisibleFill$();
    this.$_chartContainer$.$addChild$($DvtSparkChartEventManager$$);
    this.$_chart$.$getEventManager$().$setKeyboardHandler$(null);
    return this.$_chart$.$_plotAreaSpace$.$h$;
  };
  $DvtChartOverview$$.prototype.$createBackground$ = function $$DvtChartOverview$$$$$createBackground$$() {
  };
  $DvtChartOverview$$.prototype.$render$ = function $$DvtChartOverview$$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.style = {overviewBackgroundColor:"rgba(0,0,0,0)", windowBackgroundColor:"rgba(0,0,0,0)", windowBorderTopColor:"#333333", windowBorderRightColor:"#333333", windowBorderBottomColor:"#333333", windowBorderLeftColor:"#333333", leftFilterPanelColor:"rgba(5,65,135,0.1)", rightFilterPanelColor:"rgba(5,65,135,0.1)", handleBackgroundImage:$dvt$$2$$.chart._resources.overviewGrippy, handleWidth:3, handleHeight:15, handleFillColor:"rgba(0,0,0,0)"};
    $dvt$$2$$.animationOnClick = "off";
    $DvtSparkChartDefaults$$ = this.$_renderChart$($dvt$$2$$.chart, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartOverview$$.$superclass$.$render$.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartOverview$$.prototype.$destroy$ = function $$DvtChartOverview$$$$$destroy$$() {
    $DvtChartOverview$$.$superclass$.$destroy$.call(this);
    this.$_chart$ = this.$_parentChart$ = null;
  };
  $DvtChartOverview$$.prototype.$isLeftAndRightFilterRendered$ = function $$DvtChartOverview$$$$$isLeftAndRightFilterRendered$$() {
    return !0;
  };
  $DvtChartOverview$$.prototype.$HandleKeyDown$ = function $$DvtChartOverview$$$$$HandleKeyDown$$() {
  };
  $DvtChartOverview$$.prototype.$HandleKeyUp$ = function $$DvtChartOverview$$$$$HandleKeyUp$$() {
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPolarBar$$, $DvtChartSelectableWedge$$);
  $DvtChartPolarBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ = 4;
  $DvtChartPolarBar$$.$_MAX_DATA_ITEM_GAP$ = 3;
  $DvtChartPolarBar$$.prototype.$getAnimationParams$ = function $$DvtChartPolarBar$$$$$getAnimationParams$$() {
    return [this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$];
  };
  $DvtChartPolarBar$$.prototype.$setAnimationParams$ = function $$DvtChartPolarBar$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_setBarCoords$($dvt$$2$$[0], $dvt$$2$$[1], $dvt$$2$$[2], $dvt$$2$$[3]);
  };
  $DvtChartPolarBar$$.prototype.$getPrimaryFill$ = function $$DvtChartPolarBar$$$$$getPrimaryFill$$() {
    return this.$getFill$();
  };
  $DvtChartPolarBar$$.prototype.$getDisplayAnimation$ = function $$DvtChartPolarBar$$$$$getDisplayAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getAnimationParams$();
    this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, 0, 0]);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPolarBar$$.prototype.$getDeleteAnimation$ = function $$DvtChartPolarBar$$$$$getDeleteAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPolarBar$$.prototype.$getInsertAnimation$ = function $$DvtChartPolarBar$$$$$getInsertAnimation$$($DvtSparkChartEventManager$$) {
    this.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = this.$getAnimationParams$();
    this.$setAnimationParams$([this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$]);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPolarBar$$.prototype.$_setBarCoords$ = function $$DvtChartPolarBar$$$$$_setBarCoords$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = Math.max($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$);
    this.$setWedgeParams$(this.$_availSpace$.x + this.$_availSpace$.$w$ / 2, this.$_availSpace$.y + this.$_availSpace$.$h$ / 2, $DvtChartSeriesEffectUtils$$, $DvtChartSeriesEffectUtils$$, 360 - $dvt$$2$$.Math.$radsToDegrees$(Math.max($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$)) + 90, $dvt$$2$$.Math.$radsToDegrees$(Math.abs($DvtChartTooltipUtils$$ - $DvtSparkChartAutomation$$)), this.$_dataItemGaps$, Math.abs($DvtSparkChartDefaults$$ - $DvtSparkChartEventManager$$) >= $DvtChartPolarBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ && 
    this.$_axisCoord$ != $DvtSparkChartEventManager$$ ? Math.min($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$) + this.$_dataItemGaps$ : Math.min($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$));
    var $DvtChartSeriesEffectUtils$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, this.$_availSpace$), $DvtChartPieLabelUtils$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, this.$_availSpace$), $DvtChartPieRenderUtils$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, this.$_availSpace$), $DvtChartPieLabelInfo$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, 
    $DvtChartTooltipUtils$$, this.$_availSpace$), $DvtChartTypeUtils$$ = Math.min($DvtChartSeriesEffectUtils$$.x, $DvtChartPieLabelUtils$$.x, $DvtChartPieRenderUtils$$.x, $DvtChartPieLabelInfo$$.x), $DvtChartDataChangeFunnelSlice$$ = Math.min($DvtChartSeriesEffectUtils$$.y, $DvtChartPieLabelUtils$$.y, $DvtChartPieRenderUtils$$.y, $DvtChartPieLabelInfo$$.y);
    this.$_bbox$ = new $dvt$$2$$.$Rectangle$($DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, Math.max($DvtChartSeriesEffectUtils$$.x, $DvtChartPieLabelUtils$$.x, $DvtChartPieRenderUtils$$.x, $DvtChartPieLabelInfo$$.x) - $DvtChartTypeUtils$$, Math.max($DvtChartSeriesEffectUtils$$.y, $DvtChartPieLabelUtils$$.y, $DvtChartPieRenderUtils$$.y, $DvtChartPieLabelInfo$$.y) - $DvtChartDataChangeFunnelSlice$$);
    this.$_baselineCoord$ = $DvtSparkChartEventManager$$;
    this.$_endCoord$ = $DvtSparkChartDefaults$$;
    this.$_x1$ = $DvtSparkChartAutomation$$;
    this.$_x2$ = $DvtChartTooltipUtils$$;
  };
  $DvtChartPolarBar$$.prototype.$getBoundingBox$ = function $$DvtChartPolarBar$$$$$getBoundingBox$$() {
    return this.$_bbox$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRangeMarker$$, $dvt$$2$$.$Path$);
  $DvtChartRangeMarker$$.prototype.$_drawPath$ = function $$DvtChartRangeMarker$$$$$_drawPath$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = Math.atan2($DvtChartTooltipUtils$$ - $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ - $DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = this.$_markerSize$ / 2, $DvtChartPieRenderUtils$$ = Math.PI / 8, $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtSparkChartEventManager$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartSeriesEffectUtils$$ + $DvtChartPieRenderUtils$$), $DvtSparkChartDefaults$$ + $DvtChartPieLabelUtils$$ * Math.sin($DvtChartSeriesEffectUtils$$ + 
    $DvtChartPieRenderUtils$$)) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, 2 * (Math.PI - $DvtChartPieRenderUtils$$), 1, $DvtSparkChartEventManager$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartSeriesEffectUtils$$ - $DvtChartPieRenderUtils$$), $DvtSparkChartDefaults$$ + $DvtChartPieLabelUtils$$ * Math.sin($DvtChartSeriesEffectUtils$$ - $DvtChartPieRenderUtils$$)) + $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartAutomation$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartSeriesEffectUtils$$ + 
    $DvtChartPieRenderUtils$$), $DvtChartTooltipUtils$$ - $DvtChartPieLabelUtils$$ * Math.sin($DvtChartSeriesEffectUtils$$ + $DvtChartPieRenderUtils$$)) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, 2 * (Math.PI - $DvtChartPieRenderUtils$$), 1, $DvtSparkChartAutomation$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartSeriesEffectUtils$$ - $DvtChartPieRenderUtils$$), $DvtChartTooltipUtils$$ - $DvtChartPieLabelUtils$$ * Math.sin($DvtChartSeriesEffectUtils$$ - $DvtChartPieRenderUtils$$)) + 
    $dvt$$2$$.$PathUtils$.closePath();
    this.$setCmds$($DvtChartSeriesEffectUtils$$);
    this.$_x1$ = $DvtSparkChartEventManager$$;
    this.$_y1$ = $DvtSparkChartDefaults$$;
    this.$_x2$ = $DvtSparkChartAutomation$$;
    this.$_y2$ = $DvtChartTooltipUtils$$;
  };
  $DvtChartRangeMarker$$.prototype.$setStyleProperties$ = function $$DvtChartRangeMarker$$$$$setStyleProperties$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    this.$_dataColor$ = $DvtSparkChartAutomation$$;
    $DvtSparkChartAutomation$$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtSparkChartAutomation$$);
    this.$_isInvisible$ ? (this.$setInvisibleFill$(), this.$_hoverStroke$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 1.5)) : (this.$setFill$($DvtSparkChartEventManager$$), this.$setStroke$($DvtSparkChartDefaults$$), this.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartTooltipUtils$$, 1, 1), new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 3.5)), this.$setSelectedStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartTooltipUtils$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartSeriesEffectUtils$$, 
    1, 4.5)), this.$setSelectedHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartTooltipUtils$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 4.5)));
  };
  $DvtChartRangeMarker$$.prototype.$showHoverEffect$ = function $$DvtChartRangeMarker$$$$$showHoverEffect$$() {
    this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = !0, this.$setStroke$(this.$_hoverStroke$)) : $DvtChartRangeMarker$$.$superclass$.$showHoverEffect$.call(this);
  };
  $DvtChartRangeMarker$$.prototype.$hideHoverEffect$ = function $$DvtChartRangeMarker$$$$$hideHoverEffect$$() {
    this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = !1, this.$setStroke$(this.$isSelected$() ? $DvtChartLineMarker$$.$SELECTED_STROKE$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$)) : $DvtChartRangeMarker$$.$superclass$.$hideHoverEffect$.call(this);
  };
  $DvtChartRangeMarker$$.prototype.$setSelected$ = function $$DvtChartRangeMarker$$$$$setSelected$$($dvt$$2$$) {
    this.$_isInvisible$ ? this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$isSelected$() ? (this.$setFill$($DvtChartLineMarker$$.$SELECTED_FILL$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$SELECTED_STROKE$)) : (this.$setInvisibleFill$(), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$))) : $DvtChartRangeMarker$$.$superclass$.$setSelected$.call(this, $dvt$$2$$);
  };
  $DvtChartRangeMarker$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartRangeMarker$$$$$UpdateSelectionEffect$$() {
    this.$_isInvisible$ || $DvtChartRangeMarker$$.$superclass$.$UpdateSelectionEffect$.call(this);
  };
  $DvtChartRangeMarker$$.prototype.$getAnimationParams$ = function $$DvtChartRangeMarker$$$$$getAnimationParams$$() {
    return [this.$_x1$, this.$_y1$, this.$_x2$, this.$_y2$];
  };
  $DvtChartRangeMarker$$.prototype.$setAnimationParams$ = function $$DvtChartRangeMarker$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_drawPath$($dvt$$2$$[0], $dvt$$2$$[1], $dvt$$2$$[2], $dvt$$2$$[3]);
  };
  $DvtChartRangeMarker$$.prototype.$getBoundingBox$ = function $$DvtChartRangeMarker$$$$$getBoundingBox$$() {
    return this.$getBoundingBox1$().$getUnion$(this.$getBoundingBox2$());
  };
  $DvtChartRangeMarker$$.prototype.$getBoundingBox1$ = function $$DvtChartRangeMarker$$$$$getBoundingBox1$$() {
    return new $dvt$$2$$.$Rectangle$(this.$_x1$ - this.$_markerSize$ / 2, this.$_y1$ - this.$_markerSize$ / 2, this.$_markerSize$, this.$_markerSize$);
  };
  $DvtChartRangeMarker$$.prototype.$getBoundingBox2$ = function $$DvtChartRangeMarker$$$$$getBoundingBox2$$() {
    return new $dvt$$2$$.$Rectangle$(this.$_x2$ - this.$_markerSize$ / 2, this.$_y2$ - this.$_markerSize$ / 2, this.$_markerSize$, this.$_markerSize$);
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataCursor$$, $dvt$$2$$.$Container$);
  $DvtChartDataCursor$$.$BEHAVIOR_SNAP$ = "SNAP";
  $DvtChartDataCursor$$.$BEHAVIOR_SMOOTH$ = "SMOOTH";
  $DvtChartDataCursor$$.$BEHAVIOR_AUTO$ = "AUTO";
  $DvtChartDataCursor$$.$TOOLTIP_ID$ = "_dvtDataCursor";
  $DvtChartDataCursor$$.prototype.Init = function $$DvtChartDataCursor$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartDataCursor$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$);
    this.$_bHoriz$ = $DvtSparkChartAutomation$$;
    this.$_options$ = $DvtSparkChartDefaults$$;
    this.$setMouseEnabled$(!1);
    this.$setVisible$(!1);
    $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$.lineWidth;
    $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.lineColor;
    var $DvtChartTooltipUtils$$ = $dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartDefaults$$.lineStyle), $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, $DvtSparkChartEventManager$$);
    $DvtChartSeriesEffectUtils$$.$setStyle$($DvtChartTooltipUtils$$);
    this.$_cursorLine$ = new $dvt$$2$$.$Line$(this.$getCtx$(), 0, 0, 0, 0, "dcLine");
    this.$_cursorLine$.$setStroke$($DvtChartSeriesEffectUtils$$);
    this.$addChild$(this.$_cursorLine$);
    "off" != $DvtSparkChartDefaults$$.markerDisplayed && (this.$_marker$ = new $dvt$$2$$.$Container$(this.$_context$), this.$_marker$.$setMouseEnabled$(!1), this.$addChild$(this.$_marker$), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.markerSize, $DvtChartTooltipUtils$$ = new $dvt$$2$$.$SimpleMarker$(this.$_context$, $dvt$$2$$.$SimpleMarker$.$CIRCLE$, null, 0, 0, $DvtSparkChartDefaults$$ + 4 * $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 4 * $DvtSparkChartEventManager$$), $DvtChartTooltipUtils$$.$setSolidFill$($DvtSparkChartAutomation$$), 
    this.$_marker$.$addChild$($DvtChartTooltipUtils$$), $DvtSparkChartEventManager$$ = new $dvt$$2$$.$SimpleMarker$(this.$_context$, $dvt$$2$$.$SimpleMarker$.$CIRCLE$, null, 0, 0, $DvtSparkChartDefaults$$ + 2 * $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 2 * $DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$.$setSolidFill$("white"), this.$_marker$.$addChild$($DvtSparkChartEventManager$$), this.$_markerInnerCircle$ = new $dvt$$2$$.$SimpleMarker$(this.$_context$, $dvt$$2$$.$SimpleMarker$.$CIRCLE$, 
    null, 0, 0, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$), this.$_marker$.$addChild$(this.$_markerInnerCircle$));
  };
  $DvtChartDataCursor$$.prototype.$render$ = function $$DvtChartDataCursor$$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieRenderUtils$$ = this.$isHorizontal$(), $DvtChartPieLabelInfo$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtChartTypeUtils$$;
    if (null != $DvtChartSeriesEffectUtils$$ && "" != $DvtChartSeriesEffectUtils$$) {
      var $DvtChartDataChangeFunnelSlice$$ = this.$getCtx$().$getStageAbsolutePosition$(), $DvtChartLineMarker$$ = this.$getCtx$().$getTooltipManager$($DvtChartDataCursor$$.$TOOLTIP_ID$);
      $DvtChartLineMarker$$.$showDatatip$($DvtSparkChartDefaults$$ + $DvtChartDataChangeFunnelSlice$$.x, $DvtSparkChartAutomation$$ + $DvtChartDataChangeFunnelSlice$$.y, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, !1);
      $DvtChartTypeUtils$$ = $DvtChartLineMarker$$.$getTooltipBounds$();
      $DvtChartSeriesEffectUtils$$ = this.$_options$.markerSize + 4 * this.$_options$.lineWidth;
      var $DvtChartMarkerUtils$$, $DvtChartDataChangeLineArea$$;
      $DvtChartPieRenderUtils$$ ? ($DvtChartMarkerUtils$$ = $DvtChartPieLabelInfo$$ ? $DvtSparkChartEventManager$$.x - .75 * $DvtChartTypeUtils$$.$w$ : $DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ - $DvtChartTypeUtils$$.$w$ / 4, $DvtChartDataChangeLineArea$$ = $DvtChartTooltipUtils$$ - $DvtChartTypeUtils$$.$h$ / 2, !$DvtChartPieLabelInfo$$ && $DvtChartMarkerUtils$$ - $DvtSparkChartDefaults$$ < $DvtChartSeriesEffectUtils$$ ? $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$ + 
      $DvtChartSeriesEffectUtils$$ : $DvtChartPieLabelInfo$$ && $DvtSparkChartDefaults$$ - ($DvtChartMarkerUtils$$ + $DvtChartTypeUtils$$.$w$) < $DvtChartSeriesEffectUtils$$ && ($DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$ - $DvtChartSeriesEffectUtils$$ - $DvtChartTypeUtils$$.$w$)) : ($DvtChartMarkerUtils$$ = $DvtChartTooltipUtils$$ - $DvtChartTypeUtils$$.$w$ / 2, $DvtChartDataChangeLineArea$$ = $DvtSparkChartEventManager$$.y - .75 * $DvtChartTypeUtils$$.$h$, $DvtSparkChartAutomation$$ - ($DvtChartDataChangeLineArea$$ + 
      $DvtChartTypeUtils$$.$h$) < $DvtChartSeriesEffectUtils$$ && ($DvtChartDataChangeLineArea$$ = $DvtSparkChartAutomation$$ - $DvtChartSeriesEffectUtils$$ - $DvtChartTypeUtils$$.$h$));
      $DvtChartLineMarker$$.$positionTip$($DvtChartMarkerUtils$$ + $DvtChartDataChangeFunnelSlice$$.x, $DvtChartDataChangeLineArea$$ + $DvtChartDataChangeFunnelSlice$$.y);
      $DvtChartTypeUtils$$ = $DvtChartLineMarker$$.$getTooltipBounds$();
      $DvtChartTypeUtils$$.x -= $DvtChartDataChangeFunnelSlice$$.x;
      $DvtChartTypeUtils$$.y -= $DvtChartDataChangeFunnelSlice$$.y;
    }
    $DvtChartPieRenderUtils$$ ? (this.$_cursorLine$.$setTranslateY$($DvtChartTooltipUtils$$), $DvtChartPieLabelInfo$$ ? (this.$_cursorLine$.$setX1$($DvtChartTypeUtils$$ ? $DvtChartTypeUtils$$.x + $DvtChartTypeUtils$$.$w$ - 1 : $DvtSparkChartEventManager$$.x), this.$_cursorLine$.$setX2$($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$)) : (this.$_cursorLine$.$setX1$($DvtSparkChartEventManager$$.x), this.$_cursorLine$.$setX2$($DvtChartTypeUtils$$ ? $DvtChartTypeUtils$$.x + 1 : $DvtSparkChartEventManager$$.x + 
    $DvtSparkChartEventManager$$.$w$))) : (this.$_cursorLine$.$setTranslateX$($DvtChartTooltipUtils$$), this.$_cursorLine$.$setY1$($DvtChartTypeUtils$$ ? $DvtChartTypeUtils$$.y + $DvtChartTypeUtils$$.$h$ - 1 : $DvtSparkChartEventManager$$.y), this.$_cursorLine$.$setY2$($DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$));
    this.$_marker$ && (this.$_marker$.$setTranslate$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtSparkChartEventManager$$ = this.$_options$.markerColor, this.$_markerInnerCircle$.$setSolidFill$($DvtSparkChartEventManager$$ ? $DvtSparkChartEventManager$$ : $DvtChartPieLabelUtils$$), $dvt$$2$$.$Agent$.$workaroundFirefoxRepaint$(this.$_marker$));
  };
  $DvtChartDataCursor$$.prototype.$isHorizontal$ = function $$DvtChartDataCursor$$$$$isHorizontal$$() {
    return this.$_bHoriz$;
  };
  $DvtChartDataCursor$$.prototype.$getBehavior$ = function $$DvtChartDataCursor$$$$$getBehavior$$() {
    return this.$_behavior$ ? this.$_behavior$ : $DvtChartDataCursor$$.$BEHAVIOR_AUTO$;
  };
  $DvtChartDataCursor$$.prototype.$setBehavior$ = function $$DvtChartDataCursor$$$$$setBehavior$$($dvt$$2$$) {
    this.$_behavior$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartFunnelSlice$$, $dvt$$2$$.$Path$);
  $DvtChartFunnelSlice$$.prototype.Init = function $$DvtChartFunnelSlice$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$, $DvtChartTypeUtils$$) {
    $DvtChartFunnelSlice$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$.$getCtx$());
    this.$_chart$ = $DvtSparkChartEventManager$$;
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults;
    this.$_seriesIndex$ = $DvtSparkChartDefaults$$;
    this.$_numDrawnSeries$ = $DvtSparkChartAutomation$$;
    this.$_funnelWidth$ = $DvtChartTooltipUtils$$;
    this.$_funnelHeight$ = $DvtChartSeriesEffectUtils$$;
    this.$_startPercent$ = $DvtChartPieLabelUtils$$;
    this.$_valuePercent$ = $DvtChartPieRenderUtils$$;
    this.$_fillPercent$ = $DvtChartPieLabelInfo$$;
    this.$_3dRatio$ = "on" == $DvtSparkChartEventManager$$.threeDEffect ? 1 : 0;
    this.$_gap$ = $DvtChartTypeUtils$$;
    $DvtSparkChartDefaults$$ = this.$_getPath$();
    this.$_dataColor$ = $DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
    this.$_backgroundColor$ = $DvtSparkChartEventManager$$.backgroundColor ? $DvtSparkChartEventManager$$.backgroundColor : $DvtSparkChartEventManager$$.funnelBackgroundColor;
    this.$setCmds$($DvtSparkChartDefaults$$.slice);
    $DvtSparkChartDefaults$$.bar && (this.$_bar$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartDefaults$$.bar), this.$addChild$(this.$_bar$), this.$_bar$.$setMouseEnabled$(!1));
    this.$_setColorProperties$($DvtSparkChartDefaults$$.sliceBounds);
    this.$_label$ = this.$_getSliceLabel$($DvtSparkChartDefaults$$.sliceBounds, $DvtSparkChartDefaults$$.barBounds);
    null != this.$_label$ && (this.$_label$.$setMouseEnabled$(!1), this.$addChild$(this.$_label$));
  };
  $DvtChartFunnelSlice$$.$_FUNNEL_3D_WIDTH_RATIO$ = .08;
  $DvtChartFunnelSlice$$.$_FUNNEL_ANGLE_2D$ = 36;
  $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$ = 1 / 3;
  $DvtChartFunnelSlice$$.$_BORDER_COLOR$ = "#FFFFFF";
  $DvtChartFunnelSlice$$.$_MIN_CHARS_DATA_LABEL$ = 3;
  $DvtChartFunnelSlice$$.$_LINE_FRACTION$ = 2 / 3;
  $DvtChartFunnelSlice$$.$_AREA_FRACTION$ = .41;
  $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$ = .28;
  $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$ = .4;
  $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ = .8;
  $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$ = .7;
  $DvtChartFunnelSlice$$.prototype.$_getPath$ = function $$DvtChartFunnelSlice$$$$$_getPath$$() {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$(this.$_chart$), $DvtSparkChartAutomation$$ = (this.$_numDrawnSeries$ + 1) * this.$_gap$, $DvtChartTooltipUtils$$ = $dvt$$2$$.Math.$degreesToRads$($DvtChartFunnelSlice$$.$_FUNNEL_ANGLE_2D$ - 2 * this.$_3dRatio$), $DvtChartSeriesEffectUtils$$ = this.$_funnelWidth$ - $DvtSparkChartDefaults$$ * this.$_gap$, $DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$ / 
    Math.sin($dvt$$2$$.Math.$degreesToRads$($DvtChartFunnelSlice$$.$_FUNNEL_ANGLE_2D$)), $DvtChartPieLabelUtils$$ = this.$_funnelHeight$ / Math.sin($DvtChartTooltipUtils$$), $DvtChartPieRenderUtils$$ = this.$_3dRatio$ * this.$_funnelWidth$ / this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_FUNNEL_3D_WIDTH_RATIO$;
    1E-5 > $DvtChartPieRenderUtils$$ && ($DvtChartPieRenderUtils$$ = 0);
    var $DvtChartPieLabelInfo$$ = this.$_funnelHeight$, $DvtChartTypeUtils$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$, $DvtChartMarkerUtils$$, $DvtChartDataChangeLineArea$$, $DvtChartRangeMarker$$, $DvtChartLineArea$$, $DvtChartDataChangeRangeMarker$$, $DvtChartOverview$$, $DvtChartDataChangeMarker$$;
    this.$_startPercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION$ ? ($DvtChartDataChangeFunnelSlice$$ = this.$_startPercent$, $DvtChartLineMarker$$ = $DvtChartPieLabelInfo$$, $DvtChartMarkerUtils$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartRangeMarker$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartDataChangeRangeMarker$$ = $DvtChartSeriesEffectUtils$$ * $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$, $DvtChartDataChangeMarker$$ = $DvtChartSeriesEffectUtils$$ * 
    (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$)) : this.$_startPercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ ? ($DvtChartDataChangeFunnelSlice$$ = this.$_startPercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartLineMarker$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartMarkerUtils$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartRangeMarker$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, 
    $DvtChartDataChangeRangeMarker$$ = $DvtChartSeriesEffectUtils$$ * ($DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$ - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$), $DvtChartDataChangeMarker$$ = $DvtChartSeriesEffectUtils$$ * (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$)) : ($DvtChartDataChangeFunnelSlice$$ = this.$_startPercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, $DvtChartLineMarker$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartMarkerUtils$$ = $DvtChartTypeUtils$$, 
    $DvtChartRangeMarker$$ = 1 - $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, $DvtChartDataChangeRangeMarker$$ = $DvtChartSeriesEffectUtils$$ * (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$), $DvtChartDataChangeMarker$$ = 0);
    this.$_startPercent$ + this.$_valuePercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION$ ? ($DvtChartDataChangeLineArea$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartTypeUtils$$ = this.$_startPercent$ + this.$_valuePercent$, $DvtChartLineArea$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartOverview$$ = $DvtChartSeriesEffectUtils$$ * $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$, $DvtChartSeriesEffectUtils$$ *= 1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$) : this.$_startPercent$ + 
    this.$_valuePercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ ? ($DvtChartPieLabelInfo$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartDataChangeLineArea$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartTypeUtils$$ = this.$_startPercent$ + this.$_valuePercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartLineArea$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartOverview$$ = $DvtChartSeriesEffectUtils$$ * 
    ($DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$ - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$), $DvtChartSeriesEffectUtils$$ *= 1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$) : ($DvtChartPieLabelInfo$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartDataChangeLineArea$$ = $DvtChartTypeUtils$$, $DvtChartTypeUtils$$ = this.$_startPercent$ + this.$_valuePercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, $DvtChartLineArea$$ = 1 - $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, 
    $DvtChartOverview$$ = $DvtChartSeriesEffectUtils$$ * (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$), $DvtChartSeriesEffectUtils$$ = 0);
    $DvtChartDataChangeFunnelSlice$$ = .98 * Math.asin(((Math.sqrt(($DvtChartRangeMarker$$ - $DvtChartDataChangeFunnelSlice$$) / $DvtChartRangeMarker$$ * $DvtChartLineMarker$$ * $DvtChartLineMarker$$ + $DvtChartDataChangeFunnelSlice$$ / $DvtChartRangeMarker$$ * $DvtChartMarkerUtils$$ * $DvtChartMarkerUtils$$) - $DvtChartMarkerUtils$$) * $DvtChartDataChangeRangeMarker$$ / ($DvtChartLineMarker$$ - $DvtChartMarkerUtils$$) + $DvtChartDataChangeMarker$$) / $DvtSparkChartDefaults$$);
    $DvtChartLineMarker$$ = .98 * Math.asin(((Math.sqrt(($DvtChartLineArea$$ - $DvtChartTypeUtils$$) / $DvtChartLineArea$$ * $DvtChartPieLabelInfo$$ * $DvtChartPieLabelInfo$$ + $DvtChartTypeUtils$$ / $DvtChartLineArea$$ * $DvtChartDataChangeLineArea$$ * $DvtChartDataChangeLineArea$$) - $DvtChartDataChangeLineArea$$) * $DvtChartOverview$$ / ($DvtChartPieLabelInfo$$ - $DvtChartDataChangeLineArea$$) + $DvtChartSeriesEffectUtils$$) / $DvtSparkChartDefaults$$);
    $DvtChartPieLabelInfo$$ = (1 + $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$) / 2 * this.$_funnelHeight$ + $DvtChartPieLabelUtils$$;
    $DvtChartMarkerUtils$$ = (1 - $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$) / 2 * this.$_funnelHeight$ - $DvtChartPieLabelUtils$$;
    $DvtSparkChartEventManager$$ ? ($DvtSparkChartAutomation$$ = [$DvtSparkChartDefaults$$ * Math.sin($DvtChartDataChangeFunnelSlice$$) + $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartDataChangeFunnelSlice$$), $DvtSparkChartDefaults$$ * Math.sin($DvtChartLineMarker$$) + $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartLineMarker$$), $DvtSparkChartDefaults$$ * Math.sin($DvtChartLineMarker$$) + $DvtSparkChartAutomation$$, 
    $DvtChartMarkerUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartLineMarker$$), $DvtSparkChartDefaults$$ * Math.sin($DvtChartDataChangeFunnelSlice$$) + $DvtSparkChartAutomation$$, $DvtChartMarkerUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartDataChangeFunnelSlice$$)], $DvtChartDataChangeFunnelSlice$$ = 0, $DvtChartLineMarker$$ = 1) : ($DvtSparkChartAutomation$$ = [this.$_funnelWidth$ - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$ * Math.sin($DvtChartDataChangeFunnelSlice$$), 
    $DvtChartPieLabelInfo$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartDataChangeFunnelSlice$$), this.$_funnelWidth$ - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$ * Math.sin($DvtChartLineMarker$$), $DvtChartPieLabelInfo$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartLineMarker$$), this.$_funnelWidth$ - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$ * Math.sin($DvtChartLineMarker$$), $DvtChartMarkerUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartLineMarker$$), this.$_funnelWidth$ - 
    $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$ * Math.sin($DvtChartDataChangeFunnelSlice$$), $DvtChartMarkerUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartDataChangeFunnelSlice$$)], $DvtChartDataChangeFunnelSlice$$ = 1, $DvtChartLineMarker$$ = 0);
    $DvtChartPieLabelInfo$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
    $DvtChartMarkerUtils$$ = null;
    $DvtChartPieLabelInfo$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieRenderUtils$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, Math.PI, $DvtChartLineMarker$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[7]);
    $DvtChartPieLabelInfo$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieRenderUtils$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, Math.PI, $DvtChartLineMarker$$, $DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
    $DvtChartPieLabelInfo$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$[2], $DvtSparkChartAutomation$$[3]);
    $DvtChartPieLabelInfo$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieRenderUtils$$ * ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, Math.PI, $DvtChartLineMarker$$, $DvtSparkChartAutomation$$[4], $DvtSparkChartAutomation$$[5]);
    $DvtChartPieLabelInfo$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[7]);
    $DvtChartRangeMarker$$ = new $dvt$$2$$.$Rectangle$(Math.min($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[2]), $DvtSparkChartAutomation$$[5], Math.abs($DvtSparkChartAutomation$$[0] - $DvtSparkChartAutomation$$[2]), Math.abs($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]));
    if (null != this.$_fillPercent$) {
      var $DvtChartDataCursor$$ = Math.max(Math.min(this.$_fillPercent$, 1), 0), $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$ ? -$DvtChartDataCursor$$ * Math.PI : $DvtChartDataCursor$$ * Math.PI;
      $DvtChartMarkerUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
      $DvtChartMarkerUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$[2], $DvtSparkChartAutomation$$[3]);
      $DvtChartMarkerUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieRenderUtils$$ * ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, $DvtSparkChartEventManager$$, $DvtChartLineMarker$$, $DvtSparkChartAutomation$$[2] + $DvtChartPieRenderUtils$$ * ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2 * Math.sin($DvtSparkChartEventManager$$), ($DvtSparkChartAutomation$$[5] + $DvtSparkChartAutomation$$[3]) / 
      2 + ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2 * Math.cos($DvtSparkChartEventManager$$));
      $DvtChartMarkerUtils$$ = .95 < this.$_fillPercent$ ? $DvtChartMarkerUtils$$ + $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[1] + $DvtChartDataCursor$$ * ($DvtSparkChartAutomation$$[7] - $DvtSparkChartAutomation$$[1])) : .05 > this.$_fillPercent$ ? $DvtChartMarkerUtils$$ + $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, 
      $DvtChartTooltipUtils$$, $DvtChartLineMarker$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[1] + $DvtChartDataCursor$$ * ($DvtSparkChartAutomation$$[7] - $DvtSparkChartAutomation$$[1])) : $DvtChartMarkerUtils$$ + $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartAutomation$$[6] + $DvtChartPieRenderUtils$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2 * Math.sin($DvtSparkChartEventManager$$), ($DvtSparkChartAutomation$$[7] + $DvtSparkChartAutomation$$[1]) / 2 + 
      ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2 * Math.cos($DvtSparkChartEventManager$$));
      $DvtChartMarkerUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieRenderUtils$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, $DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
      $DvtChartMarkerUtils$$ += $dvt$$2$$.$PathUtils$.closePath();
      $DvtChartDataCursor$$ = new $dvt$$2$$.$Rectangle$(Math.min($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[2]), $DvtSparkChartAutomation$$[5] + Math.abs($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) * (1 - $DvtChartDataCursor$$), Math.abs($DvtSparkChartAutomation$$[0] - $DvtSparkChartAutomation$$[2]), Math.abs($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) * $DvtChartDataCursor$$);
    }
    return {slice:$DvtChartPieLabelInfo$$, bar:$DvtChartMarkerUtils$$, sliceBounds:$DvtChartRangeMarker$$, barBounds:$DvtChartMarkerUtils$$ ? $DvtChartDataCursor$$ : $DvtChartRangeMarker$$};
  };
  $DvtChartFunnelSlice$$.prototype.$_getSliceLabel$ = function $$DvtChartFunnelSlice$$$$$_getSliceLabel$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, this.$_seriesIndex$, 0);
    $DvtSparkChartAutomation$$ || ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
    if ($DvtSparkChartAutomation$$ && "none" != $DvtChartStyleUtils$$.$getDataLabelPosition$(this.$_chart$, this.$_seriesIndex$, 0)) {
      var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$OutputText$(this.$getCtx$(), $DvtSparkChartAutomation$$, 0, 0), $DvtChartTooltipUtils$$ = null != $DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0), $DvtChartSeriesEffectUtils$$ = [this.$_chart$.$getOptions$().styleDefaults.dataLabelStyle, new $dvt$$2$$.$CSSStyle$(this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle), new $dvt$$2$$.$CSSStyle$($DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 0).labelStyle)], 
      $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$CSSStyle$.$mergeStyles$($DvtChartSeriesEffectUtils$$);
      $DvtSparkChartAutomation$$.$setCSSStyle$($DvtChartSeriesEffectUtils$$);
      if ($dvt$$2$$.$TextUtils$.$fitText$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$h$ - this.$_3dRatio$ * (.8 - this.$_valuePercent$) * 50, $DvtSparkChartEventManager$$.$w$, this, $DvtChartFunnelSlice$$.$_MIN_CHARS_DATA_LABEL$)) {
        var $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.$measureDimensions$(), $DvtChartPieRenderUtils$$ = this.$_getLabelPosition$($DvtSparkChartEventManager$$);
        if ($DvtChartTooltipUtils$$) {
          var $DvtChartPieLabelInfo$$ = .15 * $DvtChartPieLabelUtils$$.$h$, $DvtChartTypeUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? .5 : -.5, $DvtChartPieLabelInfo$$ = $dvt$$2$$.$PathUtils$.$roundedRectangle$($DvtChartPieLabelUtils$$.x - $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelUtils$$.$w$ + 2 * $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$.$h$, 2, 2, 2, 2), $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtChartPieLabelInfo$$);
          $DvtChartPieLabelInfo$$.$setSolidFill$("#FFFFFF", .9);
          $DvtChartPieRenderUtils$$.translate($DvtChartTypeUtils$$ * $DvtChartPieLabelUtils$$.$h$, -$DvtChartTypeUtils$$ * $DvtChartPieLabelUtils$$.$w$);
          $DvtChartPieLabelInfo$$.$setMatrix$($DvtChartPieRenderUtils$$);
          this.$addChild$($DvtChartPieLabelInfo$$);
        }
        $DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$ ? "#000000" : $DvtSparkChartDefaults$$.$containsPoint$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y + ($DvtSparkChartEventManager$$.$h$ - $DvtChartPieLabelUtils$$.$w$) / 2) ? $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$(this.$_dataColor$) : $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$(this.$_backgroundColor$);
        $DvtChartSeriesEffectUtils$$.$getStyle$("color") && !$dvt$$2$$.$Agent$.$isHighContrast$() || $DvtSparkChartAutomation$$.$setCSSStyle$($DvtChartSeriesEffectUtils$$.$setStyle$("color", $DvtChartTooltipUtils$$));
        $DvtSparkChartAutomation$$.$setMatrix$(this.$_getLabelPosition$($DvtSparkChartEventManager$$));
        $DvtSparkChartAutomation$$.$alignCenter$();
        $DvtSparkChartAutomation$$.$alignMiddle$();
        return $DvtSparkChartAutomation$$;
      }
    }
  };
  $DvtChartFunnelSlice$$.prototype.$_getLabelPosition$ = function $$DvtChartFunnelSlice$$$$$_getLabelPosition$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$h$ * this.$_funnelWidth$ / this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_FUNNEL_3D_WIDTH_RATIO$ / 2 * this.$_3dRatio$, $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Matrix$;
    $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? ($DvtSparkChartAutomation$$.rotate(Math.PI / 2), $DvtSparkChartAutomation$$.translate($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ / 2 - $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$ / 2)) : ($DvtSparkChartAutomation$$.rotate(3 * Math.PI / 2), $DvtSparkChartAutomation$$.translate($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ / 2 + $DvtSparkChartDefaults$$, 
    $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$ / 2));
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartFunnelSlice$$.prototype.$_setColorProperties$ = function $$DvtChartFunnelSlice$$$$$_setColorProperties$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
    null == $DvtSparkChartAutomation$$ && 0 < this.$_3dRatio$ && ($DvtSparkChartAutomation$$ = $DvtChartFunnelSlice$$.$_BORDER_COLOR$);
    var $DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, this.$_seriesIndex$, 0);
    $DvtSparkChartEventManager$$ = $DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_backgroundColor$, $DvtSparkChartEventManager$$, !0);
    this.$_bar$ ? (this.$setFill$($DvtSparkChartEventManager$$), this.$_bar$.$setFill$($DvtSparkChartDefaults$$), this.$_bar$.$setStyle$($DvtChartStyleUtils$$.$getStyle$(this.$_chart$, this.$_seriesIndex$, 0)), this.$_bar$.$setClassName$($DvtChartStyleUtils$$.$getClassName$(this.$_chart$, this.$_seriesIndex$, 0))) : (this.$setFill$($DvtSparkChartDefaults$$), this.$setStyle$($DvtChartStyleUtils$$.$getStyle$(this.$_chart$, this.$_seriesIndex$, 0)), this.$setClassName$($DvtChartStyleUtils$$.$getClassName$(this.$_chart$, 
    this.$_seriesIndex$, 0)));
    $DvtSparkChartAutomation$$ && this.$setSolidStroke$($DvtSparkChartAutomation$$, null, $DvtChartTooltipUtils$$);
    this.$OriginalStroke$ = this.$getStroke$();
    this.$_chart$.$isSelectionSupported$() && ($DvtSparkChartDefaults$$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$(this.$_dataColor$), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? $DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, $DvtSparkChartEventManager$$ = null != this.$_bar$ ? this.$_bar$ : this, $DvtSparkChartEventManager$$.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartDefaults$$, 
    1, 2)), $DvtSparkChartEventManager$$.$setSelectedStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartTooltipUtils$$, 1, 4.5)), $DvtSparkChartEventManager$$.$setSelectedHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtSparkChartDefaults$$, 1, 4.5)), this.setCursor("pointer"));
  };
  $DvtChartFunnelSlice$$.prototype.$getAnimationParams$ = function $$DvtChartFunnelSlice$$$$$getAnimationParams$$() {
    return [this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$getAlpha$(), this.$_3dRatio$];
  };
  $DvtChartFunnelSlice$$.prototype.$setAnimationParams$ = function $$DvtChartFunnelSlice$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_startPercent$ = $dvt$$2$$[0];
    this.$_valuePercent$ = $dvt$$2$$[1];
    this.$_fillPercent$ = null != this.$_fillPercent$ ? $dvt$$2$$[2] : null;
    this.$setAlpha$($dvt$$2$$[3]);
    this.$_3dRatio$ = $dvt$$2$$[4];
    $dvt$$2$$ = this.$_getPath$();
    this.$setCmds$($dvt$$2$$.slice);
    $dvt$$2$$.bar && this.$_bar$ && this.$_bar$.$setCmds$($dvt$$2$$.bar);
    this.$_label$ && this.$_label$.$setMatrix$(this.$_getLabelPosition$($dvt$$2$$.sliceBounds));
  };
  $DvtChartFunnelSlice$$.prototype.$setSelected$ = function $$DvtChartFunnelSlice$$$$$setSelected$$($dvt$$2$$) {
    if (null != this.$_bar$) {
      if (this.$IsSelected$ == $dvt$$2$$) {
        return;
      }
      this.$IsSelected$ = $dvt$$2$$;
      this.$_bar$.$setSelected$($dvt$$2$$);
    } else {
      $DvtChartFunnelSlice$$.$superclass$.$setSelected$.call(this, $dvt$$2$$);
    }
    var $DvtSparkChartEventManager$$ = this.$getDimensions$(), $DvtSparkChartDefaults$$ = null != this.$_bar$ ? this.$_bar$ : this, $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$w$;
    $dvt$$2$$ ? ($DvtSparkChartDefaults$$.$setScaleX$(($DvtSparkChartAutomation$$ - 3) / $DvtSparkChartAutomation$$), $DvtSparkChartDefaults$$.$setTranslateX$(Math.ceil(1.5) + 3 / $DvtSparkChartAutomation$$ * $DvtSparkChartEventManager$$.x)) : ($DvtSparkChartDefaults$$.$setScaleX$(1), $DvtSparkChartDefaults$$.$setTranslateX$(0));
  };
  $DvtChartFunnelSlice$$.prototype.$showHoverEffect$ = function $$DvtChartFunnelSlice$$$$$showHoverEffect$$() {
    null != this.$_bar$ ? this.$_bar$.$showHoverEffect$() : $DvtChartFunnelSlice$$.$superclass$.$showHoverEffect$.call(this);
  };
  $DvtChartFunnelSlice$$.prototype.$hideHoverEffect$ = function $$DvtChartFunnelSlice$$$$$hideHoverEffect$$() {
    null != this.$_bar$ ? this.$_bar$.$hideHoverEffect$() : $DvtChartFunnelSlice$$.$superclass$.$hideHoverEffect$.call(this);
  };
  $DvtChartFunnelSlice$$.prototype.$copyShape$ = function $$DvtChartFunnelSlice$$$$$copyShape$$() {
    return new $DvtChartFunnelSlice$$(this.$_chart$, this.$_seriesIndex$, this.$_numDrawnSeries$, this.$_funnelWidth$, this.$_funnelHeight$, this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$_gap$);
  };
  $DvtChartPie$$.$_THREED_TILT$ = .59;
  $DvtChartPie$$.$_THREED_DEPTH$ = .1;
  $DvtChartPie$$.$_RADIUS$ = .45;
  $DvtChartPie$$.$_RADIUS_LABELS$ = .38;
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPie$$, $dvt$$2$$.$Container$);
  $DvtChartPie$$.prototype.Init = function $$DvtChartPie$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartPie$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$.$getCtx$());
    this.$chart$ = $DvtSparkChartEventManager$$;
    this.$_options$ = $DvtSparkChartEventManager$$.$getOptions$();
    this.$_frame$ = $DvtSparkChartDefaults$$.clone();
    $DvtSparkChartEventManager$$.$pieChart$ = this;
    for (var $DvtSparkChartAutomation$$ = this.$getLabelPosition$(), $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartTooltipUtils$$;$DvtChartSeriesEffectUtils$$++) {
      var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, 0);
      !$DvtChartPieLabelUtils$$ || "center" != $DvtSparkChartAutomation$$ && "none" != $DvtSparkChartAutomation$$ || "outsideSlice" != $DvtChartPieLabelUtils$$.labelPosition || ($DvtSparkChartAutomation$$ = "outsideSlice");
    }
    this.$_center$ = new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x + Math.floor($DvtSparkChartDefaults$$.$w$ / 2), $DvtSparkChartDefaults$$.y + Math.floor($DvtSparkChartDefaults$$.$h$ / 2));
    this.$_radiusY$ = this.$_radiusX$ = Math.floor(Math.min($DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$) * ("center" == $DvtSparkChartAutomation$$ || "none" == $DvtSparkChartAutomation$$ ? $DvtChartPie$$.$_RADIUS$ : $DvtChartPie$$.$_RADIUS_LABELS$));
    this.$_depth$ = 0;
    this.$_anchorOffset$ = 90;
    this.$is3D$() && (this.$_depth$ = $DvtSparkChartDefaults$$.$h$ * $DvtChartPie$$.$_THREED_DEPTH$, this.$_center$.y -= Math.floor(this.$_depth$ / 2), this.$_radiusY$ *= $DvtChartPie$$.$_THREED_TILT$);
    this.$_slices$ = this.$_createSlices$();
    this.$_shapesContainer$ = new $dvt$$2$$.$Container$(this.$getCtx$());
    this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0;
  };
  $DvtChartPie$$.prototype.$getOptions$ = function $$DvtChartPie$$$$$getOptions$$() {
    return this.$_options$;
  };
  $DvtChartPie$$.prototype.$highlight$ = function $$DvtChartPie$$$$$highlight$$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$CategoryRolloverHandler$.$highlight$($DvtSparkChartEventManager$$, this.$_slices$, "any" == this.$getOptions$().highlightMatch);
  };
  $DvtChartPie$$.prototype.$_createSlices$ = function $$DvtChartPie$$$$$_createSlices$$() {
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = $DvtChartPieUtils$$.$getRenderedSeriesIndices$(this.$chart$), $DvtChartTooltipUtils$$ = $DvtChartPieUtils$$.$getOtherValue$(this.$chart$), $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartSeriesEffectUtils$$++) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$[$DvtChartSeriesEffectUtils$$], $DvtChartStyleUtils$$.$isDataItemRendered$(this.$chart$, $DvtSparkChartDefaults$$) && ($DvtSparkChartDefaults$$ = new $DvtChartPieSlice$$(this, $DvtSparkChartDefaults$$), 0 >= $DvtSparkChartDefaults$$.getValue() || $DvtSparkChartEventManager$$.push($DvtSparkChartDefaults$$));
    }
    0 < $DvtChartTooltipUtils$$ && ($DvtSparkChartAutomation$$ = new $DvtChartPieSlice$$(this), "ascending" == this.$chart$.$getOptions$().sorting ? $DvtSparkChartEventManager$$.unshift($DvtSparkChartAutomation$$) : $DvtSparkChartEventManager$$.push($DvtSparkChartAutomation$$));
    $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && $DvtSparkChartEventManager$$.reverse();
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPie$$.prototype.$setInitialSelection$ = function $$DvtChartPie$$$$$setInitialSelection$$() {
    var $dvt$$2$$ = this.$chart$.$getSelectionHandler$();
    if ($dvt$$2$$) {
      for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getInitialSelection$(this.$chart$), $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
        for (var $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < this.$_slices$.length;$DvtChartTooltipUtils$$++) {
          var $DvtChartSeriesEffectUtils$$ = this.$_slices$[$DvtChartTooltipUtils$$].getId();
          $DvtChartSeriesEffectUtils$$ && ($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].id && $DvtChartSeriesEffectUtils$$.getId() == $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].id || $DvtChartSeriesEffectUtils$$.$getSeries$() == $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].series && $DvtChartSeriesEffectUtils$$.$getGroup$() == $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].group) && $DvtSparkChartDefaults$$.push($DvtChartSeriesEffectUtils$$);
        }
      }
      $DvtChartPieUtils$$.$isOtherSliceSelected$(this.$chart$, $DvtSparkChartEventManager$$) && ($DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$getOtherSliceId$(this.$chart$), $DvtSparkChartDefaults$$.push($DvtSparkChartEventManager$$));
      $dvt$$2$$.$processInitialSelections$($DvtSparkChartDefaults$$, this.$_slices$);
    }
  };
  $DvtChartPie$$.prototype.$render$ = function $$DvtChartPie$$$$$render$$() {
    var $DvtSparkChartEventManager$$;
    this.contains(this.$_shapesContainer$) || (this.$_shapesContainer$ || (this.$_shapesContainer$ = new $dvt$$2$$.$Container$(this.$getCtx$())), this.$addChild$(this.$_shapesContainer$), this.$is3D$() || this.$getSkin$() != $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ || ($DvtSparkChartEventManager$$ = new $dvt$$2$$.$Shadow$($dvt$$2$$.$ColorUtils$.$makeRGBA$(78, 87, 101, .45), 4, 7, 7, 54, 2, 3, !1, !1, !1)));
    $DvtChartPie$$.$_layoutSlices$(this.$_slices$, this.$_anchorOffset$);
    for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$_slices$.length;$DvtSparkChartDefaults$$++) {
      this.$_slices$[$DvtSparkChartDefaults$$].$preRender$();
    }
    var $DvtSparkChartAutomation$$ = $DvtChartPie$$.$_orderSlicesForRendering$(this.$_slices$);
    this.$_duringDisplayAnim$ || ($DvtChartPieLabelUtils$$.$createPieCenter$(this), $DvtChartPieLabelUtils$$.$layoutLabelsAndFeelers$(this));
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$.length;$DvtSparkChartDefaults$$++) {
      $DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$].$render$(this.$_duringDisplayAnim$);
    }
    $dvt$$2$$.$Agent$.$isPlatformWebkit$() || $DvtSparkChartEventManager$$ && this.$_shapesContainer$.$addDrawEffect$($DvtSparkChartEventManager$$);
    this.$setInitialSelection$();
    this.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$(this.$chart$));
  };
  $DvtChartPie$$.prototype.$getTotalValue$ = function $$DvtChartPie$$$$$getTotalValue$$() {
    for (var $dvt$$2$$ = 0, $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$_slices$.length;$DvtSparkChartEventManager$$++) {
      var $DvtSparkChartDefaults$$ = this.$_slices$[$DvtSparkChartEventManager$$].getValue();
      0 <= $DvtSparkChartDefaults$$ && ($dvt$$2$$ += $DvtSparkChartDefaults$$);
    }
    return $dvt$$2$$;
  };
  $DvtChartPie$$.$_layoutSlices$ = function $$DvtChartPie$$$$_layoutSlices$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$ = 0, $DvtChartPieLabelUtils$$ = $dvt$$2$$ ? $dvt$$2$$.length : 0;
    360 < $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ -= 360);
    0 > $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ += 360);
    var $DvtChartPieRenderUtils$$ = $DvtChartTooltipUtils$$ = 0;
    0 < $DvtChartPieLabelUtils$$ && ($DvtChartPieRenderUtils$$ = $dvt$$2$$[0].$_pieChart$.$getTotalValue$());
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtChartPieLabelUtils$$;$DvtSparkChartDefaults$$++) {
      $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$], $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.getValue(), $DvtChartTooltipUtils$$ = 0 == $DvtChartPieRenderUtils$$ ? 0 : Math.abs($DvtChartTooltipUtils$$) / $DvtChartPieRenderUtils$$ * 100, $DvtChartSeriesEffectUtils$$ = 3.6 * $DvtChartTooltipUtils$$, $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$ - $DvtChartSeriesEffectUtils$$, 0 > $DvtChartTooltipUtils$$ && ($DvtChartTooltipUtils$$ += 360), $DvtSparkChartAutomation$$.$setAngleStart$($DvtChartTooltipUtils$$), 
      $DvtSparkChartAutomation$$.$setAngleExtent$($DvtChartSeriesEffectUtils$$), $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.$getAngleStart$();
    }
  };
  $DvtChartPie$$.$_orderSlicesForRendering$ = function $$DvtChartPie$$$$_orderSlicesForRendering$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = $dvt$$2$$ ? $dvt$$2$$.length : 0, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$ = -1, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$;
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$;$DvtSparkChartDefaults$$++) {
      if ($DvtChartTooltipUtils$$ = $dvt$$2$$[$DvtSparkChartDefaults$$], $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$getAngleStart$(), $DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$.$getAngleExtent$(), $DvtChartTooltipUtils$$ = $DvtChartPieLabelUtils$$ + $DvtChartTooltipUtils$$, 360 < $DvtChartTooltipUtils$$ && ($DvtChartTooltipUtils$$ -= 360), 0 > $DvtChartTooltipUtils$$ && ($DvtChartTooltipUtils$$ += 360), 90 == $DvtChartTooltipUtils$$ || 90 > $DvtChartPieLabelUtils$$ && 90 < $DvtChartTooltipUtils$$) {
        $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$;
        $DvtChartPieRenderUtils$$ = $DvtChartTooltipUtils$$ - 90;
        break;
      }
    }
    $DvtChartPieLabelUtils$$ = [];
    for ($DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$;$DvtSparkChartDefaults$$++) {
      $DvtChartPieLabelUtils$$.push($dvt$$2$$[$DvtSparkChartDefaults$$]);
    }
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtChartSeriesEffectUtils$$;$DvtSparkChartDefaults$$++) {
      $DvtChartPieLabelUtils$$.push($dvt$$2$$[$DvtSparkChartDefaults$$]);
    }
    $DvtChartSeriesEffectUtils$$ = $dvt$$2$$ = 0;
    $DvtChartPieRenderUtils$$ = 180 + $DvtChartPieRenderUtils$$;
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$;$DvtSparkChartDefaults$$++) {
      if ($DvtChartTooltipUtils$$ = $DvtChartPieLabelUtils$$[$DvtSparkChartDefaults$$]) {
        if ($dvt$$2$$ + $DvtChartTooltipUtils$$.$getAngleExtent$() > $DvtChartPieRenderUtils$$) {
          $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$;
          break;
        }
        $DvtSparkChartEventManager$$.push($DvtChartTooltipUtils$$);
        $dvt$$2$$ += $DvtChartTooltipUtils$$.$getAngleExtent$();
      }
    }
    for ($DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$ - 1;$DvtSparkChartDefaults$$ >= $DvtChartSeriesEffectUtils$$;$DvtSparkChartDefaults$$--) {
      ($DvtChartTooltipUtils$$ = $DvtChartPieLabelUtils$$[$DvtSparkChartDefaults$$]) && $DvtSparkChartEventManager$$.push($DvtChartTooltipUtils$$);
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPie$$.prototype.$is3D$ = function $$DvtChartPie$$$$$is3D$$() {
    return "on" == this.$_options$.styleDefaults.threeDEffect;
  };
  $DvtChartPie$$.prototype.$__calcMaxExplodeDistance$ = function $$DvtChartPie$$$$$__calcMaxExplodeDistance$$() {
    return this.$_radiusX$ * (.5 / $DvtChartPie$$.$_RADIUS$ - 1);
  };
  $DvtChartPie$$.prototype.$getAnimationDuration$ = function $$DvtChartPie$$$$$getAnimationDuration$$() {
    return $DvtChartStyleUtils$$.$getAnimationDuration$(this.$chart$);
  };
  $DvtChartPie$$.prototype.$getDisplayAnimation$ = function $$DvtChartPie$$$$$getDisplayAnimation$$() {
    this.$_duringDisplayAnim$ = !0;
    var $DvtSparkChartEventManager$$ = new $dvt$$2$$.$DataAnimationHandler$(this.$getCtx$(), this), $DvtSparkChartDefaults$$ = this.$getAnimationDuration$(), $DvtSparkChartAutomation$$ = $DvtChartPieSlice$$.$createFillerSlice$(this, this.$getTotalValue$());
    this.$_slices$.push($DvtSparkChartAutomation$$);
    var $DvtChartTooltipUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
    $DvtChartTooltipUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$.$GetAnimationParams$, $DvtSparkChartAutomation$$.$SetAnimationParams$, $DvtSparkChartAutomation$$.$getDeletedAnimationParams$());
    $DvtChartTooltipUtils$$.$setOnEnd$($DvtSparkChartAutomation$$.$_removeDeletedSlice$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.add($DvtChartTooltipUtils$$, 0);
    for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < this.$_slices$.length - 1;$DvtSparkChartAutomation$$++) {
      this.$_slices$[$DvtSparkChartAutomation$$].$animateInsert$($DvtSparkChartEventManager$$);
    }
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
    $DvtChartTooltipUtils$$ = [];
    for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < this.$_slices$.length;$DvtSparkChartAutomation$$++) {
      $DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$.concat(this.$_slices$[$DvtSparkChartAutomation$$].$getLabelAndFeeler$());
    }
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_context$, $DvtChartTooltipUtils$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 0);
    this.$_setAnimationParams$();
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getAnimation$(!0);
    $DvtSparkChartEventManager$$.$setOnEnd$(this.$_onEnd$, this);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPie$$.prototype.$_onEnd$ = function $$DvtChartPie$$$$$_onEnd$$() {
    this.$_duringDisplayAnim$ = !1;
    this.$_setAnimationParams$();
  };
  $DvtChartPie$$.prototype.$getCenter$ = function $$DvtChartPie$$$$$getCenter$$() {
    return this.$_center$;
  };
  $DvtChartPie$$.prototype.$getInnerRadius$ = function $$DvtChartPie$$$$$getInnerRadius$$() {
    return this.$is3D$() ? 0 : this.$_options$.styleDefaults.pieInnerRadius * Math.min(this.$_radiusX$, this.$_radiusY$) * .95;
  };
  $DvtChartPie$$.prototype.getDepth = function $$DvtChartPie$$$$getDepth$() {
    return this.$_depth$;
  };
  $DvtChartPie$$.prototype.$getSliceDisplayable$ = function $$DvtChartPie$$$$$getSliceDisplayable$$($dvt$$2$$) {
    return ($dvt$$2$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$(this.$chart$, $dvt$$2$$)) ? $dvt$$2$$.$getTopDisplayable$() : null;
  };
  $DvtChartPie$$.prototype.$animateUpdate$ = function $$DvtChartPie$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$DataAnimationHandler$(this.$getCtx$(), this);
    $DvtSparkChartAutomation$$.$constructAnimation$($DvtSparkChartDefaults$$.$_slices$, this.$_slices$);
    var $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.$getAnimation$(!0), $DvtChartTooltipUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, this.$getAnimationDuration$());
    $DvtChartTooltipUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$ParallelPlayable$(this.$getCtx$(), $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
    $DvtSparkChartAutomation$$.$setOnEnd$(this.$_setAnimationParams$, this);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
    this.$_setAnimationParams$([$DvtSparkChartDefaults$$.getDepth(), $DvtSparkChartDefaults$$.$_radiusY$, $DvtSparkChartDefaults$$.$getCenter$().y]);
  };
  $DvtChartPie$$.prototype.$animateInsert$ = function $$DvtChartPie$$$$$animateInsert$$() {
  };
  $DvtChartPie$$.prototype.$animateDelete$ = function $$DvtChartPie$$$$$animateDelete$$() {
  };
  $DvtChartPie$$.prototype.$_getAnimationParams$ = function $$DvtChartPie$$$$$_getAnimationParams$$() {
    return [this.$_depth$, this.$_radiusY$, this.$_center$.y];
  };
  $DvtChartPie$$.prototype.$_setAnimationParams$ = function $$DvtChartPie$$$$$_setAnimationParams$$($dvt$$2$$) {
    this.$removeChildren$();
    this.$_shapesContainer$ && this.$_shapesContainer$.$destroy$();
    this.$_shapesContainer$ = null;
    $dvt$$2$$ && (this.$_depth$ = $dvt$$2$$[0], this.$_radiusY$ = $dvt$$2$$[1], this.$_center$.y = $dvt$$2$$[2]);
    this.$render$();
  };
  $DvtChartPie$$.prototype.$bringToFrontOfSelection$ = function $$DvtChartPie$$$$$bringToFrontOfSelection$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_pieChart$.$_shapesContainer$;
    if ($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$();
      1 < $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$.$_topSurface$[0]), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$.$_topSurface$[0], $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ - 1));
    }
  };
  $DvtChartPie$$.prototype.$pushToBackOfSelection$ = function $$DvtChartPie$$$$$pushToBackOfSelection$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = this.$_slices$.length, $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$;$DvtSparkChartAutomation$$++) {
      this.$_slices$[$DvtSparkChartAutomation$$].$isSelected$() && $DvtSparkChartDefaults$$++;
    }
    this.$_numSelectedObjsInFront$ = $DvtSparkChartDefaults$$;
    if ($DvtSparkChartEventManager$$ = $dvt$$2$$.$_pieChart$.$_shapesContainer$) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$, 0 <= $DvtSparkChartDefaults$$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$.$_topSurface$[0]), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$.$_topSurface$[0], $DvtSparkChartDefaults$$));
    }
  };
  $DvtChartPie$$.prototype.$getLabelPosition$ = function $$DvtChartPie$$$$$getLabelPosition$$() {
    var $dvt$$2$$ = this.$_options$.styleDefaults.sliceLabelPosition;
    $dvt$$2$$ || ($dvt$$2$$ = this.$_options$.styleDefaults.dataLabelPosition);
    return $DvtChartPie$$.$parseLabelPosition$($dvt$$2$$);
  };
  $DvtChartPie$$.prototype.$getSeriesLabelPosition$ = function $$DvtChartPie$$$$$getSeriesLabelPosition$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$getLabelPosition$();
    ($dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$(this.$chart$, $dvt$$2$$, 0)) && $dvt$$2$$.labelPosition && ($DvtSparkChartEventManager$$ = $dvt$$2$$.labelPosition);
    return $DvtChartPie$$.$parseLabelPosition$($DvtSparkChartEventManager$$);
  };
  $DvtChartPie$$.$parseLabelPosition$ = function $$DvtChartPie$$$$parseLabelPosition$$($dvt$$2$$) {
    return "center" == $dvt$$2$$ || "inside" == $dvt$$2$$ ? "center" : "outsideSlice" == $dvt$$2$$ || "outside" == $dvt$$2$$ ? "outsideSlice" : "none" == $dvt$$2$$ ? "none" : "auto";
  };
  $DvtChartPie$$.prototype.$getSkin$ = function $$DvtChartPie$$$$$getSkin$$() {
    return this.$_options$.skin;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieSlice$$, $dvt$$2$$.$Obj$);
  $DvtChartPieSlice$$.prototype.Init = function $$DvtChartPieSlice$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_pieChart$ = $DvtSparkChartEventManager$$;
    this.$_chart$ = $DvtSparkChartEventManager$$.$chart$;
    this.$_angleExtent$ = this.$_angleStart$ = 0;
    this.$_crustSurface$ = this.$_rightSurface$ = this.$_leftSurface$ = this.$_topSurface$ = null;
    this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
    this.$_sliceLabelString$ = this.$_sliceLabel$ = null;
    this.$_hasFeeler$ = !1;
    this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = this.$_feelerHoriz$ = this.$_feelerRad$ = null;
    this.$_selecting$ = this.$_selected$ = !1;
    this.$_centerX$ = this.$_pieChart$.$getCenter$().x;
    this.$_centerY$ = this.$_pieChart$.$getCenter$().y;
    this.$_radiusX$ = this.$_pieChart$.$_radiusX$;
    this.$_radiusY$ = this.$_pieChart$.$_radiusY$;
    this.$_depth$ = this.$_pieChart$.getDepth();
    var $DvtSparkChartAutomation$$ = this.$_chart$.$getOptions$();
    null != $DvtSparkChartDefaults$$ ? ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $DvtSparkChartDefaults$$, 0), this.$_value$ = $DvtChartDataUtils$$.getValue(this.$_chart$, $DvtSparkChartDefaults$$, 0), this.$_explode$ = $DvtChartPieUtils$$.$getSliceExplode$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_fillColor$ = $DvtChartStyleUtils$$.$getColor$(this.$_chart$, $DvtSparkChartDefaults$$, 0), this.$_fillPattern$ = $DvtChartStyleUtils$$.$getPattern$(this.$_chart$, 
    $DvtSparkChartDefaults$$, 0), this.$_strokeColor$ = $DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_borderWidth$ = $DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_customLabel$ = $DvtSparkChartAutomation$$.label, this.$_seriesLabel$ = $DvtChartDataUtils$$.$getSeries$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_action$ = $DvtSparkChartAutomation$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, 
    $DvtSparkChartDefaults$$, 0), this.$_showPopupBehaviors$ = this.$_chart$.$getShowPopupBehaviors$($DvtSparkChartAutomation$$._id), this.$_id$ = $DvtChartPieUtils$$.$getSliceId$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_seriesIndex$ = $DvtSparkChartDefaults$$, this.$_categories$ = $DvtChartDataUtils$$.$getDataItemCategories$(this.$_chart$, $DvtSparkChartDefaults$$, 0)) : (this.$_value$ = $DvtChartPieUtils$$.$getOtherValue$(this.$_chart$), this.$_explode$ = 0, this.$_fillColor$ = $DvtSparkChartAutomation$$.styleDefaults.otherColor, 
    this.$_fillPattern$ = null, this.$_strokeColor$ = $DvtSparkChartAutomation$$.styleDefaults.borderColor, this.$_borderWidth$ = $DvtSparkChartAutomation$$.styleDefaults.borderWidth, this.$_customLabel$ = null, this.$_seriesLabel$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", null), this.$_action$ = null, this.$_drillable$ = !1, this.$_showPopupBehaviors$ = $DvtChartPieUtils$$.$getOtherSliceShowPopupBehaviors$(this.$_chart$), this.$_id$ = $DvtChartPieUtils$$.$getOtherSliceId$(this.$_chart$));
  };
  $DvtChartPieSlice$$.prototype.$render$ = function $$DvtChartPieSlice$$$$$render$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = $DvtChartPieSlice$$.$_sortPieSurfaces$(this.$_topSurface$, this.$_leftSurface$, this.$_rightSurface$, this.$_crustSurface$, this.$_angleStart$, this.$_angleExtent$), $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.length, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
      for (var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$], $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.length, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartSeriesEffectUtils$$;$DvtChartPieLabelUtils$$++) {
        this.$_pieChart$.$_shapesContainer$.$addChild$($DvtChartTooltipUtils$$[$DvtChartPieLabelUtils$$]), $DvtChartTooltipUtils$$[$DvtChartPieLabelUtils$$].$render$ && $DvtChartTooltipUtils$$[$DvtChartPieLabelUtils$$].$render$();
      }
    }
    this.$_sliceLabel$ && (this.$_pieChart$.$addChild$(this.$_sliceLabel$), $DvtChartPieRenderUtils$$.$associate$(this, [this.$_sliceLabel$]), $dvt$$2$$ ? (this.$_pieChart$.$addChild$(this.$_feelerRad$), this.$_pieChart$.$addChild$(this.$_feelerHoriz$)) : this.$_renderOutsideFeeler$());
    this.$_explodeSlice$();
    if (this.$_action$ || this.$_drillable$ || this.$_pieChart$.$chart$.$isSelectionSupported$()) {
      for ($dvt$$2$$ = this.$getDisplayables$(), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.length;$DvtSparkChartAutomation$$++) {
        $dvt$$2$$[$DvtSparkChartAutomation$$].setCursor("pointer");
      }
    }
    if ($DvtSparkChartAutomation$$ = this.$getTopDisplayable$()) {
      $DvtSparkChartAutomation$$.$setAriaRole$("img"), this.$_updateAriaLabel$();
    }
  };
  $DvtChartPieSlice$$.prototype.$_feelerFromPts$ = function $$DvtChartPieSlice$$$$$_feelerFromPts$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Line$(this.$_pieChart$.$getCtx$(), $DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y), $DvtChartTooltipUtils$$ = this.$_pieChart$.$getOptions$().styleDefaults.pieFeelerColor, $DvtChartTooltipUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartTooltipUtils$$);
    $DvtSparkChartAutomation$$.$setStroke$($DvtChartTooltipUtils$$);
    this.$_pieChart$.$addChild$($DvtSparkChartAutomation$$);
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartPieSlice$$.prototype.$_renderOutsideFeeler$ = function $$DvtChartPieSlice$$$$$_renderOutsideFeeler$$() {
    if (this.$_hasFeeler$) {
      var $dvt$$2$$ = this.$_feelerFromPts$(this.$_outsideFeelerStart$, this.$_outsideFeelerMid$), $DvtSparkChartEventManager$$ = this.$_feelerFromPts$(this.$_outsideFeelerMid$, this.$_outsideFeelerEnd$);
      this.$_feelerRad$ = $dvt$$2$$;
      this.$_feelerHoriz$ = $DvtSparkChartEventManager$$;
    }
  };
  $DvtChartPieSlice$$.prototype.$preRender$ = function $$DvtChartPieSlice$$$$$preRender$$() {
    var $DvtSparkChartEventManager$$ = this.$_bFillerSlice$ ? "color" : $DvtChartStyleUtils$$.$getSeriesEffect$(this.$_chart$), $DvtSparkChartDefaults$$ = this.$getFillColor$(), $DvtSparkChartAutomation$$ = this.$getFillPattern$();
    if ("pattern" == $DvtSparkChartEventManager$$ || null != $DvtSparkChartAutomation$$) {
      $DvtSparkChartAutomation$$ = new $dvt$$2$$.$PatternFill$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = "pattern";
    } else {
      if ("gradient" == $DvtSparkChartEventManager$$) {
        var $DvtSparkChartAutomation$$ = this.$_pieChart$.$getSkin$(), $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$ == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ ? 297 : 270, $DvtChartSeriesEffectUtils$$ = this.$_pieChart$.$is3D$() ? "3D" : "2D", $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$.$getGradientColors$($dvt$$2$$.$ColorUtils$.$getRGB$($DvtSparkChartDefaults$$), $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$($dvt$$2$$.$ColorUtils$.$getAlpha$($DvtSparkChartDefaults$$), 
        $DvtChartSeriesEffectUtils$$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$LinearGradientFill$($DvtChartTooltipUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$.$getGradientRatios$($DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$), [Math.floor(this.$_centerX$ - this.$_radiusX$), Math.floor(this.$_centerY$ - this.$_radiusY$), Math.ceil(2 * this.$_radiusX$), Math.ceil(2 * this.$_radiusY$)])
      } else {
        $DvtSparkChartAutomation$$ = new $dvt$$2$$.$SolidFill$($DvtSparkChartDefaults$$);
      }
    }
    this.$_topSurface$ = $DvtChartPieRenderUtils$$.$createTopSurface$(this, $DvtSparkChartAutomation$$);
    if (0 < this.$_depth$ || this.$_radiusX$ != this.$_radiusY$) {
      $DvtSparkChartEventManager$$ = "gradient" == $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$ = new $dvt$$2$$.$SolidFill$($dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartDefaults$$, .6)), $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.$generateLateralGradientFill$(this, $DvtChartPieRenderUtils$$.$SIDE$) : $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.$generateLateralGradientFill$(this, 
      $DvtChartPieRenderUtils$$.$CRUST$) : $DvtSparkChartAutomation$$, this.$_leftSurface$ = $DvtChartPieRenderUtils$$.$createLateralSurface$(this, $DvtChartPieRenderUtils$$.$SURFACE_LEFT$, $DvtSparkChartDefaults$$), this.$_rightSurface$ = $DvtChartPieRenderUtils$$.$createLateralSurface$(this, $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$, $DvtSparkChartDefaults$$), this.$_crustSurface$ = $DvtChartPieRenderUtils$$.$createLateralSurface$(this, $DvtChartPieRenderUtils$$.$SURFACE_CRUST$, $DvtSparkChartEventManager$$)
      ;
    }
  };
  $DvtChartPieSlice$$.$_sortPieSurfaces$ = function $$DvtChartPieSlice$$$$_sortPieSurfaces$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    var $DvtChartPieLabelUtils$$ = [];
    $DvtSparkChartEventManager$$ && $DvtSparkChartDefaults$$ && $DvtSparkChartAutomation$$ && (270 >= $DvtChartTooltipUtils$$ && 270 < $DvtChartTooltipUtils$$ + $DvtChartSeriesEffectUtils$$ ? ($DvtChartPieLabelUtils$$.push($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartAutomation$$)) : 270 < $DvtChartTooltipUtils$$ || 90 >= $DvtChartTooltipUtils$$ + $DvtChartSeriesEffectUtils$$ ? ($DvtChartPieLabelUtils$$.push($DvtSparkChartEventManager$$), 
    $DvtChartPieLabelUtils$$.push($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartDefaults$$)) : ($DvtChartPieLabelUtils$$.push($DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartEventManager$$)));
    $DvtChartPieLabelUtils$$.push($dvt$$2$$);
    return $DvtChartPieLabelUtils$$;
  };
  $DvtChartPieSlice$$.$oppositeDirection$ = function $$DvtChartPieSlice$$$$oppositeDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return 0 < $dvt$$2$$ - $DvtSparkChartEventManager$$ != 0 < $dvt$$2$$ - $DvtSparkChartDefaults$$;
  };
  $DvtChartPieSlice$$.prototype.$_explodeSlice$ = function $$DvtChartPieSlice$$$$$_explodeSlice$$() {
    if (0 != this.$_explode$) {
      var $DvtSparkChartEventManager$$ = (360 - (this.$_angleStart$ + this.$_angleExtent$ / 2)) * $dvt$$2$$.Math.$RADS_PER_DEGREE$, $DvtSparkChartDefaults$$ = this.$_pieChart$.$is3D$() ? $DvtChartPie$$.$_THREED_TILT$ : 1, $DvtSparkChartAutomation$$ = this.$_explode$ * this.$_pieChart$.$__calcMaxExplodeDistance$();
      this.$_explodeOffsetX$ = Math.cos($DvtSparkChartEventManager$$) * $DvtSparkChartAutomation$$;
      this.$_explodeOffsetY$ = Math.sin($DvtSparkChartEventManager$$) * $DvtSparkChartDefaults$$ * $DvtSparkChartAutomation$$;
      $dvt$$2$$.$Agent$.$isPlatformWebkit$() && (this.$_explodeOffsetX$ = Math.round(this.$_explodeOffsetX$), this.$_explodeOffsetY$ = Math.round(this.$_explodeOffsetY$));
    } else {
      this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
    }
    this.$_topSurface$ && ($DvtSparkChartEventManager$$ = this.$_pieChart$.$is3D$() && this.$_topSurface$[0].$getSelectionOffset$ ? this.$_topSurface$[0].$getSelectionOffset$() : [], $DvtChartPieSlice$$.$_translateShapes$(this.$_topSurface$, $DvtSparkChartEventManager$$[0] ? $DvtSparkChartEventManager$$[0] + this.$_explodeOffsetX$ : this.$_explodeOffsetX$, $DvtSparkChartEventManager$$[1] ? $DvtSparkChartEventManager$$[1] + this.$_explodeOffsetY$ : this.$_explodeOffsetY$));
    this.$_rightSurface$ && $DvtChartPieSlice$$.$_translateShapes$(this.$_rightSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
    this.$_leftSurface$ && $DvtChartPieSlice$$.$_translateShapes$(this.$_leftSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
    this.$_crustSurface$ && $DvtChartPieSlice$$.$_translateShapes$(this.$_crustSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
    if (this.$_hasFeeler$) {
      var $DvtSparkChartEventManager$$ = this.$_outsideFeelerStart$.x, $DvtSparkChartDefaults$$ = this.$_outsideFeelerStart$.y, $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ + this.$_explodeOffsetX$, $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$ + this.$_explodeOffsetY$;
      this.$_feelerRad$.$setX1$($DvtSparkChartAutomation$$);
      this.$_feelerRad$.$setY1$($DvtChartTooltipUtils$$);
      var $DvtChartSeriesEffectUtils$$ = this.$_outsideFeelerMid$.x, $DvtChartPieLabelUtils$$ = this.$_outsideFeelerMid$.y;
      $DvtChartPieSlice$$.$oppositeDirection$($DvtChartSeriesEffectUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? (this.$_feelerRad$.$setX2$($DvtSparkChartAutomation$$), this.$_feelerHoriz$.$setX1$($DvtSparkChartAutomation$$)) : (this.$_feelerRad$.$setX2$($DvtChartSeriesEffectUtils$$), this.$_feelerHoriz$.$setX1$($DvtChartSeriesEffectUtils$$));
      $DvtChartPieSlice$$.$oppositeDirection$($DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$) ? (this.$_feelerRad$.$setY2$($DvtChartTooltipUtils$$), this.$_feelerHoriz$.$setY1$($DvtChartTooltipUtils$$)) : (this.$_feelerRad$.$setY2$($DvtChartPieLabelUtils$$), this.$_feelerHoriz$.$setY1$($DvtChartPieLabelUtils$$));
    }
    this.$_sliceLabel$ && !this.$_hasFeeler$ && this.$_sliceLabel$.$setTranslate$(this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  };
  $DvtChartPieSlice$$.$_translateShapes$ = function $$DvtChartPieSlice$$$$_translateShapes$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if ($dvt$$2$$) {
      for (var $DvtSparkChartAutomation$$ = $dvt$$2$$.length, $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartAutomation$$;$DvtChartTooltipUtils$$++) {
        $dvt$$2$$[$DvtChartTooltipUtils$$].$setTranslate$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      }
    }
  };
  $DvtChartPieSlice$$.prototype.$getCenter$ = function $$DvtChartPieSlice$$$$$getCenter$$() {
    return new $dvt$$2$$.$Point$(this.$_centerX$, this.$_centerY$);
  };
  $DvtChartPieSlice$$.prototype.getDepth = function $$DvtChartPieSlice$$$$getDepth$() {
    return this.$_depth$;
  };
  $DvtChartPieSlice$$.prototype.$getAngleExtent$ = function $$DvtChartPieSlice$$$$$getAngleExtent$$() {
    return this.$_angleExtent$;
  };
  $DvtChartPieSlice$$.prototype.$setAngleExtent$ = function $$DvtChartPieSlice$$$$$setAngleExtent$$($dvt$$2$$) {
    this.$_angleExtent$ = $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$getAngleStart$ = function $$DvtChartPieSlice$$$$$getAngleStart$$() {
    return this.$_angleStart$;
  };
  $DvtChartPieSlice$$.prototype.$setAngleStart$ = function $$DvtChartPieSlice$$$$$setAngleStart$$($dvt$$2$$) {
    this.$_angleStart$ = $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$setOutsideFeelerPoints$ = function $$DvtChartPieSlice$$$$$setOutsideFeelerPoints$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_outsideFeelerStart$ = $dvt$$2$$;
    this.$_outsideFeelerMid$ = $DvtSparkChartEventManager$$;
    this.$_outsideFeelerEnd$ = $DvtSparkChartDefaults$$;
    this.$_hasFeeler$ = !0;
  };
  $DvtChartPieSlice$$.prototype.$setNoOutsideFeeler$ = function $$DvtChartPieSlice$$$$$setNoOutsideFeeler$$() {
    this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = null;
    this.$_hasFeeler$ = !1;
  };
  $DvtChartPieSlice$$.prototype.$getLabelAndFeeler$ = function $$DvtChartPieSlice$$$$$getLabelAndFeeler$$() {
    var $dvt$$2$$ = [];
    this.$_sliceLabel$ && $dvt$$2$$.push(this.$_sliceLabel$);
    this.$_feelerRad$ && $dvt$$2$$.push(this.$_feelerRad$);
    this.$_feelerHoriz$ && $dvt$$2$$.push(this.$_feelerHoriz$);
    return $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$setSliceLabel$ = function $$DvtChartPieSlice$$$$$setSliceLabel$$($dvt$$2$$) {
    this.$_sliceLabel$ = $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$setSliceLabelString$ = function $$DvtChartPieSlice$$$$$setSliceLabelString$$($dvt$$2$$) {
    this.$_sliceLabelString$ = $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.getValue = function $$DvtChartPieSlice$$$$getValue$() {
    return this.$_value$;
  };
  $DvtChartPieSlice$$.prototype.getId = function $$DvtChartPieSlice$$$$getId$() {
    return this.$_id$;
  };
  $DvtChartPieSlice$$.prototype.$getSeriesIndex$ = function $$DvtChartPieSlice$$$$$getSeriesIndex$$() {
    return this.$_seriesIndex$;
  };
  $DvtChartPieSlice$$.$containsRect$ = function $$DvtChartPieSlice$$$$containsRect$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.contains($dvt$$2$$.x, $dvt$$2$$.y) && $DvtSparkChartEventManager$$.contains($dvt$$2$$.x + $dvt$$2$$.$w$, $dvt$$2$$.y) && $DvtSparkChartEventManager$$.contains($dvt$$2$$.x + $dvt$$2$$.$w$, $dvt$$2$$.y + $dvt$$2$$.$h$) && $DvtSparkChartEventManager$$.contains($dvt$$2$$.x, $dvt$$2$$.y + $dvt$$2$$.$h$);
  };
  $DvtChartPieSlice$$.$_shapeIsSelectable$ = function $$DvtChartPieSlice$$$$_shapeIsSelectable$$($dvt$$2$$) {
    return $dvt$$2$$ instanceof $DvtChartSelectableWedge$$;
  };
  $DvtChartPieSlice$$.prototype.contains = function $$DvtChartPieSlice$$$$contains$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = this.$_pieChart$.$getInnerRadius$(), $DvtSparkChartAutomation$$ = this.$_pieChart$.$getCenter$(), $DvtChartTooltipUtils$$ = ($dvt$$2$$ - $DvtSparkChartAutomation$$.x) / this.$_radiusX$, $DvtChartSeriesEffectUtils$$ = ($DvtSparkChartEventManager$$ - $DvtSparkChartAutomation$$.y) / this.$_radiusY$, $DvtSparkChartAutomation$$ = 180 / Math.PI * -Math.atan2($DvtChartSeriesEffectUtils$$, $DvtChartTooltipUtils$$);$DvtSparkChartAutomation$$ < this.$_angleStart$;) {
      $DvtSparkChartAutomation$$ += 360;
    }
    for (;360 <= $DvtSparkChartAutomation$$ - this.$_angleStart$;) {
      $DvtSparkChartAutomation$$ -= 360;
    }
    $DvtChartTooltipUtils$$ = Math.pow($DvtChartTooltipUtils$$, 2) + Math.pow($DvtChartSeriesEffectUtils$$, 2);
    $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$ <= this.$_angleStart$ + this.$_angleExtent$;
    return Math.sqrt($DvtChartTooltipUtils$$) > $DvtSparkChartDefaults$$ / this.$_radiusX$ && 1 >= $DvtChartTooltipUtils$$ && $DvtSparkChartAutomation$$;
  };
  $DvtChartPieSlice$$.prototype.$GetAnimationParams$ = function $$DvtChartPieSlice$$$$$GetAnimationParams$$() {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$ColorUtils$.$getRed$(this.$_fillColor$), $DvtSparkChartDefaults$$ = $dvt$$2$$.$ColorUtils$.$getGreen$(this.$_fillColor$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$ColorUtils$.$getBlue$(this.$_fillColor$), $DvtChartTooltipUtils$$ = $dvt$$2$$.$ColorUtils$.$getAlpha$(this.$_fillColor$);
    return [this.$_value$, this.$_radiusX$, this.$_radiusY$, this.$_explode$, this.$_centerX$, this.$_centerY$, this.$_depth$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$];
  };
  $DvtChartPieSlice$$.prototype.$SetAnimationParams$ = function $$DvtChartPieSlice$$$$$SetAnimationParams$$($DvtSparkChartEventManager$$) {
    this.$_value$ = $DvtSparkChartEventManager$$[0];
    this.$_radiusX$ = $DvtSparkChartEventManager$$[1];
    this.$_radiusY$ = $DvtSparkChartEventManager$$[2];
    this.$_explode$ = $DvtSparkChartEventManager$$[3];
    this.$_centerX$ = $DvtSparkChartEventManager$$[4];
    this.$_centerY$ = $DvtSparkChartEventManager$$[5];
    this.$_depth$ = $DvtSparkChartEventManager$$[6];
    this.$_fillColor$ = $dvt$$2$$.$ColorUtils$.$makeRGBA$(Math.round($DvtSparkChartEventManager$$[7]), Math.round($DvtSparkChartEventManager$$[8]), Math.round($DvtSparkChartEventManager$$[9]), Math.round($DvtSparkChartEventManager$$[10]));
  };
  $DvtChartPieSlice$$.prototype.$getDeletedAnimationParams$ = function $$DvtChartPieSlice$$$$$getDeletedAnimationParams$$() {
    var $dvt$$2$$ = this.$GetAnimationParams$();
    $dvt$$2$$[0] = 0;
    $dvt$$2$$[1] = this.$getInnerRadius$();
    $dvt$$2$$[2] = this.$getInnerRadius$();
    $dvt$$2$$[3] = 0;
    return $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$animateUpdate$ = function $$DvtChartPieSlice$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$GetAnimationParams$(), $DvtChartTooltipUtils$$ = this.$GetAnimationParams$();
    if (!$dvt$$2$$.$ArrayUtils$.$equals$($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$)) {
      var $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
      $DvtChartSeriesEffectUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, $DvtChartTooltipUtils$$);
      $DvtSparkChartEventManager$$.add($DvtChartSeriesEffectUtils$$, 0);
      this.$SetAnimationParams$($DvtSparkChartAutomation$$);
    }
  };
  $DvtChartPieSlice$$.prototype.$animateInsert$ = function $$DvtChartPieSlice$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
    $DvtSparkChartDefaults$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 0);
    this.$SetAnimationParams$(this.$getDeletedAnimationParams$());
  };
  $DvtChartPieSlice$$.prototype.$animateDelete$ = function $$DvtChartPieSlice$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_slices$, $DvtChartTooltipUtils$$ = this.$_pieChart$.$_slices$, $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartTooltipUtils$$, this) - 1;
    if (0 <= $DvtChartSeriesEffectUtils$$) {
      for ($DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$[$DvtChartSeriesEffectUtils$$].getId(), $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartSeriesEffectUtils$$++) {
        if ($DvtSparkChartAutomation$$[$DvtChartSeriesEffectUtils$$].getId().$equals$($DvtChartTooltipUtils$$)) {
          $DvtSparkChartAutomation$$.splice($DvtChartSeriesEffectUtils$$ + 1, 0, this);
          break;
        }
      }
    } else {
      $DvtSparkChartAutomation$$.splice(0, 0, this);
    }
    this.$_pieChart$ = $DvtSparkChartDefaults$$;
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartDefaults$$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$getDeletedAnimationParams$());
    $DvtSparkChartAutomation$$.$setOnEnd$(this.$_removeDeletedSlice$, this);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
  };
  $DvtChartPieSlice$$.prototype.$_removeDeletedSlice$ = function $$DvtChartPieSlice$$$$$_removeDeletedSlice$$() {
    var $DvtSparkChartEventManager$$ = this.$_pieChart$.$_slices$, $DvtSparkChartDefaults$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtSparkChartEventManager$$, this);
    0 <= $DvtSparkChartDefaults$$ && $DvtSparkChartEventManager$$.splice($DvtSparkChartDefaults$$, 1);
  };
  $DvtChartPieSlice$$.prototype.$getDisplayables$ = function $$DvtChartPieSlice$$$$$getDisplayables$$() {
    var $dvt$$2$$ = [];
    this.$_topSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_topSurface$));
    this.$_leftSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_leftSurface$));
    this.$_rightSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_rightSurface$));
    this.$_crustSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_crustSurface$));
    this.$_sliceLabel$ && $dvt$$2$$.push(this.$_sliceLabel$);
    this.$_feelerRad$ && $dvt$$2$$.push(this.$_feelerRad$);
    this.$_feelerHoriz$ && $dvt$$2$$.push(this.$_feelerHoriz$);
    return $dvt$$2$$;
  };
  $DvtChartPieSlice$$.prototype.$getAriaLabel$ = function $$DvtChartPieSlice$$$$$getAriaLabel$$() {
    var $DvtSparkChartEventManager$$;
    $DvtSparkChartEventManager$$ = null == this.$_seriesIndex$ ? $DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, !1) : $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, !1);
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_PERCENTAGE", null), $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$generateSliceLabelString$(this, "percent");
    $DvtSparkChartEventManager$$ += "; " + $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$]);
    $DvtSparkChartDefaults$$ = [];
    this.$isSelectable$() && $DvtSparkChartDefaults$$.push($dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    $DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$) && $DvtSparkChartDefaults$$.push($dvt$$2$$.$Bundle$.$getTranslation$(this.$_pieChart$.$getOptions$(), "stateDrillable", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    return $dvt$$2$$.$Displayable$.$generateAriaLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartPieSlice$$.prototype.$_updateAriaLabel$ = function $$DvtChartPieSlice$$$$$_updateAriaLabel$$() {
    var $DvtSparkChartEventManager$$ = this.$getTopDisplayable$();
    $DvtSparkChartEventManager$$ && !$dvt$$2$$.$Agent$.$deferAriaCreation$() && $DvtSparkChartEventManager$$.$setAriaProperty$("label", this.$getAriaLabel$());
  };
  $DvtChartPieSlice$$.prototype.$getTopDisplayable$ = function $$DvtChartPieSlice$$$$$getTopDisplayable$$() {
    return this.$_topSurface$ && 0 < this.$_topSurface$.length ? this.$_topSurface$[0] : null;
  };
  $DvtChartPieSlice$$.prototype.$isSelectable$ = function $$DvtChartPieSlice$$$$$isSelectable$$() {
    return this.$_chart$.$isSelectionSupported$();
  };
  $DvtChartPieSlice$$.prototype.$isSelected$ = function $$DvtChartPieSlice$$$$$isSelected$$() {
    return this.$_selected$;
  };
  $DvtChartPieSlice$$.prototype.$setSelected$ = function $$DvtChartPieSlice$$$$$setSelected$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    (this.$_selected$ = $DvtSparkChartEventManager$$) ? this.$_pieChart$.$bringToFrontOfSelection$(this) : this.$_selecting$ || this.$_pieChart$.$pushToBackOfSelection$(this);
    if ($DvtChartStyleUtils$$.$isSelectionHighlighted$(this.$_chart$)) {
      for (var $DvtSparkChartAutomation$$ = this.$getDisplayables$(), $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartTooltipUtils$$++) {
        $DvtChartPieSlice$$.$_shapeIsSelectable$($DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$]) && $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$].$setSelected$($DvtSparkChartEventManager$$);
      }
    }
    $DvtChartStyleUtils$$.$isSelectionExploded$(this.$_chart$) && ($DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ ? 1 : 0, $DvtSparkChartDefaults$$ || "none" == $DvtChartStyleUtils$$.$getAnimationOnDataChange$(this.$_chart$) ? this.$setExplode$($DvtSparkChartAutomation$$) : ($DvtChartTooltipUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$() / 2), $DvtChartTooltipUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, 
    this, this.$getExplode$, this.$setExplode$, $DvtSparkChartAutomation$$), $DvtChartTooltipUtils$$.play()));
    this.$_updateAriaLabel$();
  };
  $DvtChartPieSlice$$.prototype.$showHoverEffect$ = function $$DvtChartPieSlice$$$$$showHoverEffect$$() {
    this.$_selecting$ = !0;
    this.$_pieChart$.$bringToFrontOfSelection$(this);
    for (var $dvt$$2$$ = this.$getDisplayables$(), $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $DvtChartPieSlice$$.$_shapeIsSelectable$($dvt$$2$$[$DvtSparkChartEventManager$$]) && $dvt$$2$$[$DvtSparkChartEventManager$$].$showHoverEffect$();
    }
  };
  $DvtChartPieSlice$$.prototype.$hideHoverEffect$ = function $$DvtChartPieSlice$$$$$hideHoverEffect$$() {
    this.$_selecting$ = !1;
    this.$_selected$ || this.$_pieChart$.$pushToBackOfSelection$(this);
    for (var $dvt$$2$$ = this.$getDisplayables$(), $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $DvtChartPieSlice$$.$_shapeIsSelectable$($dvt$$2$$[$DvtSparkChartEventManager$$]) && $dvt$$2$$[$DvtSparkChartEventManager$$].$hideHoverEffect$();
    }
  };
  $DvtChartPieSlice$$.prototype.$getDatatip$ = function $$DvtChartPieSlice$$$$$getDatatip$$($dvt$$2$$) {
    return $dvt$$2$$ == this.$_sliceLabel$ && this.$_sliceLabel$ && this.$_sliceLabel$.$isTruncated$() ? this.$_sliceLabelString$ : this.$getTooltip$();
  };
  $DvtChartPieSlice$$.prototype.$getDatatipColor$ = function $$DvtChartPieSlice$$$$$getDatatipColor$$() {
    return this.$getFillColor$();
  };
  $DvtChartPieSlice$$.prototype.$getCategories$ = function $$DvtChartPieSlice$$$$$getCategories$$() {
    return this.$_categories$ && 0 < this.$_categories$.length ? this.$_categories$ : [this.getId().$getSeries$()];
  };
  $DvtChartPieSlice$$.prototype.$getNextNavigable$ = function $$DvtChartPieSlice$$$$$getNextNavigable$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.keyCode;
    if ($DvtSparkChartEventManager$$.type == $dvt$$2$$.MouseEvent.$CLICK$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$SPACE$ && $DvtSparkChartEventManager$$.ctrlKey) {
      return this;
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$_chart$.$getCtx$());
    var $DvtSparkChartAutomation$$ = this.$_pieChart$.$_slices$, $DvtChartTooltipUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtSparkChartAutomation$$, this), $DvtChartSeriesEffectUtils$$ = null;
    if ($DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$RIGHT_ARROW$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$ && !$DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$UP_ARROW$ && $DvtSparkChartEventManager$$) {
      $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$ < $DvtSparkChartAutomation$$.length - 1 ? $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$ + 1] : $DvtSparkChartAutomation$$[0];
    } else {
      if ($DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$LEFT_ARROW$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$DOWN_ARROW$ && $DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.KeyboardEvent.$UP_ARROW$ && !$DvtSparkChartEventManager$$) {
        $DvtChartSeriesEffectUtils$$ = 0 == $DvtChartTooltipUtils$$ ? $DvtSparkChartAutomation$$[$DvtSparkChartAutomation$$.length - 1] : $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$ - 1];
      }
    }
    return $DvtChartSeriesEffectUtils$$;
  };
  $DvtChartPieSlice$$.prototype.$getKeyboardBoundingBox$ = function $$DvtChartPieSlice$$$$$getKeyboardBoundingBox$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getDisplayables$();
    return $DvtSparkChartDefaults$$[0] ? $DvtSparkChartDefaults$$[0].$getDimensions$($DvtSparkChartEventManager$$) : new $dvt$$2$$.$Rectangle$(0, 0, 0, 0);
  };
  $DvtChartPieSlice$$.prototype.$getTargetElem$ = function $$DvtChartPieSlice$$$$$getTargetElem$$() {
    var $dvt$$2$$ = this.$getDisplayables$();
    return $dvt$$2$$[0] ? $dvt$$2$$[0].$getElem$() : null;
  };
  $DvtChartPieSlice$$.prototype.$showKeyboardFocusEffect$ = function $$DvtChartPieSlice$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$showHoverEffect$();
  };
  $DvtChartPieSlice$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtChartPieSlice$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$hideHoverEffect$();
  };
  $DvtChartPieSlice$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtChartPieSlice$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtChartPieSlice$$.prototype.$getExplode$ = function $$DvtChartPieSlice$$$$$getExplode$$() {
    return this.$_explode$;
  };
  $DvtChartPieSlice$$.prototype.$setExplode$ = function $$DvtChartPieSlice$$$$$setExplode$$($dvt$$2$$) {
    this.$_explode$ = $dvt$$2$$;
    this.$_explodeSlice$();
  };
  $DvtChartPieSlice$$.prototype.$getSeriesLabel$ = function $$DvtChartPieSlice$$$$$getSeriesLabel$$() {
    return this.$_seriesLabel$;
  };
  $DvtChartPieSlice$$.prototype.$getFillColor$ = function $$DvtChartPieSlice$$$$$getFillColor$$() {
    return this.$_fillColor$;
  };
  $DvtChartPieSlice$$.prototype.$getFillPattern$ = function $$DvtChartPieSlice$$$$$getFillPattern$$() {
    return this.$_fillPattern$;
  };
  $DvtChartPieSlice$$.prototype.$getStrokeColor$ = function $$DvtChartPieSlice$$$$$getStrokeColor$$() {
    return this.$_strokeColor$;
  };
  $DvtChartPieSlice$$.prototype.$getBorderWidth$ = function $$DvtChartPieSlice$$$$$getBorderWidth$$() {
    return this.$_borderWidth$;
  };
  $DvtChartPieSlice$$.prototype.$getSliceGaps$ = function $$DvtChartPieSlice$$$$$getSliceGaps$$() {
    return 0 == this.$_depth$ ? 3 * $DvtChartStyleUtils$$.$getDataItemGaps$(this.$_chart$) : 0;
  };
  $DvtChartPieSlice$$.prototype.$getInnerRadius$ = function $$DvtChartPieSlice$$$$$getInnerRadius$$() {
    return this.$_pieChart$.$getInnerRadius$();
  };
  $DvtChartPieSlice$$.prototype.$getTooltip$ = function $$DvtChartPieSlice$$$$$getTooltip$$() {
    return null == this.$_seriesIndex$ ? $DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, !0) : $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, !0);
  };
  $DvtChartPieSlice$$.prototype.$getAction$ = function $$DvtChartPieSlice$$$$$getAction$$() {
    return this.$_action$;
  };
  $DvtChartPieSlice$$.prototype.$isDrillable$ = function $$DvtChartPieSlice$$$$$isDrillable$$() {
    return this.$_drillable$;
  };
  $DvtChartPieSlice$$.prototype.$getShowPopupBehaviors$ = function $$DvtChartPieSlice$$$$$getShowPopupBehaviors$$() {
    return this.$_showPopupBehaviors$;
  };
  $DvtChartPieSlice$$.$createFillerSlice$ = function $$DvtChartPieSlice$$$$createFillerSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = new $DvtChartPieSlice$$($dvt$$2$$);
    $DvtSparkChartDefaults$$.$_value$ = $DvtSparkChartEventManager$$;
    $DvtSparkChartDefaults$$.$_bFillerSlice$ = !0;
    $DvtSparkChartDefaults$$.$_centerX$ = $dvt$$2$$.$getCenter$().x;
    $DvtSparkChartDefaults$$.$_centerY$ = $dvt$$2$$.$getCenter$().y;
    $DvtSparkChartDefaults$$.$_fillColor$ = "rgba(255,255,255,0)";
    $DvtSparkChartDefaults$$.$_strokeColor$ = "rgba(255,255,255,0)";
    $DvtSparkChartDefaults$$.$_id$ = new $DvtChartDataItem$$(null, null, null);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieSlice$$.prototype.$getSeriesIndex$ = function $$DvtChartPieSlice$$$$$getSeriesIndex$$() {
    return this.$_seriesIndex$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAnimOnDisplay$$, $dvt$$2$$.$Obj$);
  $DvtChartAnimOnDisplay$$.$createAnimation$ = function $$DvtChartAnimOnDisplay$$$$createAnimation$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ = [];
    if ($DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$)) {
      $DvtChartAnimOnDisplay$$.$_animBarLineArea$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
    } else {
      if ($DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$)) {
        $DvtChartAnimOnDisplay$$.$_animBubbleScatterFunnel$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
      } else {
        if ($DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) && $DvtSparkChartEventManager$$.$pieChart$) {
          return $DvtSparkChartEventManager$$.$pieChart$.$getDisplayAnimation$();
        }
      }
    }
    return 0 < $DvtSparkChartDefaults$$.length ? new $dvt$$2$$.$ParallelPlayable$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartDefaults$$) : null;
  };
  $DvtChartAnimOnDisplay$$.$_animBarLineArea$ = function $$DvtChartAnimOnDisplay$$$$_animBarLineArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getChartObjPeers$(), $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$ ? $DvtChartTooltipUtils$$.length : 0;
    if ($DvtChartSeriesEffectUtils$$) {
      for (var $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartSeriesEffectUtils$$;$DvtChartPieLabelInfo$$++) {
        $DvtChartPieRenderUtils$$ = $DvtChartTooltipUtils$$[$DvtChartPieLabelInfo$$];
        $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$.$getDisplayables$()[0];
        var $DvtChartTypeUtils$$ = $DvtChartPieRenderUtils$$.$getSeriesType$();
        $DvtChartPieRenderUtils$$ = null;
        if ($DvtChartPieLabelUtils$$ instanceof $DvtChartBar$$ || $DvtChartPieLabelUtils$$ instanceof $DvtChartPolarBar$$ || $DvtChartPieLabelUtils$$ instanceof $DvtChartCandlestick$$) {
          $DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$.$getDisplayAnimation$($DvtSparkChartDefaults$$);
        } else {
          if ($DvtChartPieLabelUtils$$ instanceof $DvtChartLineArea$$) {
            $DvtChartPieRenderUtils$$ = "line" == $DvtChartTypeUtils$$ ? $DvtChartAnimOnDisplay$$.$_getLinePlayable$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$) : $DvtChartAnimOnDisplay$$.$_getAreaPlayable$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$);
          } else {
            if ($DvtChartPieLabelUtils$$ instanceof $dvt$$2$$.$SimpleMarker$ || $DvtChartPieLabelUtils$$ instanceof $DvtChartRangeMarker$$) {
              if ($DvtChartPieLabelUtils$$ instanceof $DvtChartLineMarker$$ && !$DvtChartPieLabelUtils$$.$isSelected$()) {
                continue;
              }
              $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$AnimFadeIn$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$ - .8, .8);
            }
          }
        }
        $DvtChartPieRenderUtils$$ && $DvtSparkChartAutomation$$.push($DvtChartPieRenderUtils$$);
      }
    }
  };
  $DvtChartAnimOnDisplay$$.$_animBubbleScatterFunnel$ = function $$DvtChartAnimOnDisplay$$$$_animBubbleScatterFunnel$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getObjects$(), $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$ ? $DvtChartTooltipUtils$$.length : 0;
    if ($DvtChartSeriesEffectUtils$$) {
      for (var $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartSeriesEffectUtils$$;$DvtChartPieLabelInfo$$++) {
        $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$[$DvtChartPieLabelInfo$$], $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$.$getDisplayables$()[0], $DvtChartPieLabelUtils$$ instanceof $dvt$$2$$.$SimpleMarker$ ? $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$AnimPopIn$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelUtils$$, !0, $DvtSparkChartDefaults$$) : $DvtChartPieLabelUtils$$ instanceof $DvtChartFunnelSlice$$ && ($DvtChartPieRenderUtils$$ = $DvtChartAnimOnDisplay$$.$_getFunnelPlayable$($DvtSparkChartEventManager$$, 
        $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$)), $DvtChartPieRenderUtils$$ && $DvtSparkChartAutomation$$.push($DvtChartPieRenderUtils$$);
      }
    }
  };
  $DvtChartAnimOnDisplay$$.$_getAreaPlayable$ = function $$DvtChartAnimOnDisplay$$$$_getAreaPlayable$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$.$_baseline$, $DvtChartPieLabelUtils$$;
    if ($DvtSparkChartDefaults$$.$isArea$()) {
      var $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$_arBaseCoord$;
      $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$getBaseAnimationParams$();
      for (var $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.slice(0), $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtChartPieLabelUtils$$.length;$DvtChartTypeUtils$$++) {
        if (1 == $DvtChartTypeUtils$$ % 4 || 2 == $DvtChartTypeUtils$$ % 4) {
          $DvtChartPieLabelUtils$$[$DvtChartTypeUtils$$] = $DvtChartSeriesEffectUtils$$;
        }
      }
      $DvtSparkChartDefaults$$.$setBaseAnimationParams$($DvtChartPieLabelUtils$$);
      $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtChartTooltipUtils$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      $DvtChartPieLabelUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getBaseAnimationParams$, $DvtSparkChartDefaults$$.$setBaseAnimationParams$, $DvtChartPieLabelInfo$$);
    }
    for (var $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$.$_arCoord$, $DvtChartLineMarker$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartPieLabelInfo$$ = $DvtChartLineMarker$$.slice(0), $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtChartLineMarker$$.length;$DvtChartTypeUtils$$++) {
      if (1 == $DvtChartTypeUtils$$ % 4 || 2 == $DvtChartTypeUtils$$ % 4) {
        $DvtChartLineMarker$$[$DvtChartTypeUtils$$] = $DvtChartSeriesEffectUtils$$;
      }
    }
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartLineMarker$$);
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$($DvtChartTooltipUtils$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartPieLabelInfo$$);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$ParallelPlayable$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.$setOnEnd$(function() {
      $DvtSparkChartDefaults$$.$setCoords$($DvtChartDataChangeFunnelSlice$$, $DvtChartPieRenderUtils$$);
    });
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartAnimOnDisplay$$.$_getFunnelPlayable$ = function $$DvtChartAnimOnDisplay$$$$_getFunnelPlayable$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getCtx$();
    var $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.slice(0), $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.slice(0);
    $DvtChartTooltipUtils$$[0] = 0;
    $DvtChartTooltipUtils$$[2] = 0;
    $DvtChartSeriesEffectUtils$$[2] = 0;
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartTooltipUtils$$);
    $DvtChartTooltipUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ / 2);
    $DvtChartTooltipUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartSeriesEffectUtils$$);
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ / 2);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartPieLabelUtils$$);
    return new $dvt$$2$$.$SequentialPlayable$($DvtSparkChartEventManager$$, [$DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$]);
  };
  $DvtChartAnimOnDisplay$$.$_getLinePlayable$ = function $$DvtChartAnimOnDisplay$$$$_getLinePlayable$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.$_arCoord$, $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartPieLabelUtils$$ = $DvtChartSeriesEffectUtils$$.slice(0);
    $DvtChartAnimOnDisplay$$.$_getMeanPoints$($DvtChartSeriesEffectUtils$$);
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartSeriesEffectUtils$$);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartPieLabelUtils$$);
    $DvtSparkChartEventManager$$.$setOnEnd$(function() {
      $DvtSparkChartDefaults$$.$setCoords$($DvtChartTooltipUtils$$);
    });
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartAnimOnDisplay$$.$_getMeanPoints$ = function $$DvtChartAnimOnDisplay$$$$_getMeanPoints$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = 0, $DvtSparkChartDefaults$$ = Number.MAX_VALUE, $DvtSparkChartAutomation$$ = Number.MIN_VALUE, $DvtChartTooltipUtils$$ = $dvt$$2$$.length, $DvtChartSeriesEffectUtils$$;
    for ($DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartTooltipUtils$$;$DvtChartSeriesEffectUtils$$++) {
      var $DvtChartPieLabelUtils$$ = $dvt$$2$$[$DvtChartSeriesEffectUtils$$];
      0 != $DvtChartSeriesEffectUtils$$ % 4 && 3 != $DvtChartSeriesEffectUtils$$ % 4 && Infinity != $DvtChartPieLabelUtils$$ && ($DvtChartPieLabelUtils$$ < $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$), $DvtChartPieLabelUtils$$ > $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$), $DvtSparkChartEventManager$$ += $DvtChartPieLabelUtils$$);
    }
    $DvtSparkChartEventManager$$ = 8 < $DvtChartTooltipUtils$$ ? ($DvtSparkChartEventManager$$ - 2 * $DvtSparkChartDefaults$$ - 2 * $DvtSparkChartAutomation$$) / ($DvtChartTooltipUtils$$ / 2 - 4) : $DvtSparkChartEventManager$$ / ($DvtChartTooltipUtils$$ / 2);
    for ($DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartTooltipUtils$$;$DvtChartSeriesEffectUtils$$++) {
      if (1 == $DvtChartSeriesEffectUtils$$ % 4 || 2 == $DvtChartSeriesEffectUtils$$ % 4) {
        $dvt$$2$$[$DvtChartSeriesEffectUtils$$] = $DvtSparkChartEventManager$$;
      }
    }
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAnimOnDC$$, $dvt$$2$$.$Obj$);
  $DvtChartAnimOnDC$$.$createAnimation$ = function $$DvtChartAnimOnDC$$$$createAnimation$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    if (!$DvtChartAnimOnDC$$.$_canAnimate$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return null;
    }
    $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getCtx$();
    var $DvtChartPieLabelUtils$$ = [], $DvtChartPieRenderUtils$$ = [];
    $DvtChartTypeUtils$$.$isPie$($DvtSparkChartDefaults$$) ? ($DvtChartPieLabelUtils$$.push($DvtSparkChartEventManager$$.$pieChart$), $DvtChartPieRenderUtils$$.push($DvtSparkChartDefaults$$.$pieChart$)) : $DvtChartAnimOnDC$$.$_buildAnimLists$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$);
    var $DvtChartPieLabelInfo$$;
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$DataAnimationHandler$($DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$);
    $DvtSparkChartEventManager$$.$constructAnimation$($DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$);
    0 < $DvtSparkChartEventManager$$.$_playables$.length && ($DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getAnimation$(!0));
    $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getDataLabels$();
    if ($DvtChartPieLabelInfo$$ && 0 < $DvtSparkChartDefaults$$.length) {
      for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartEventManager$$++) {
        $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].$setAlpha$(0);
      }
      $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$SequentialPlayable$($DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$, new $dvt$$2$$.$AnimFadeIn$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$ / 4));
    }
    return $DvtChartPieLabelInfo$$;
  };
  $DvtChartAnimOnDC$$.$_buildAnimLists$ = function $$DvtChartAnimOnDC$$$$_buildAnimLists$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    var $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$getChartObjPeers$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$, $DvtChartTypeUtils$$, $DvtChartMarkerUtils$$, $DvtChartOverview$$;
    for ($DvtSparkChartEventManager$$ = 0;2 > $DvtSparkChartEventManager$$;$DvtSparkChartEventManager$$++) {
      for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartPieRenderUtils$$.length;$DvtChartPieLabelUtils$$++) {
        $DvtChartTypeUtils$$ = $DvtChartPieRenderUtils$$[$DvtChartPieLabelUtils$$];
        $DvtChartMarkerUtils$$ = $DvtChartTypeUtils$$.$getDisplayables$()[0];
        $DvtChartOverview$$ = null;
        if ($DvtChartMarkerUtils$$ instanceof $DvtChartFunnelSlice$$) {
          $DvtChartOverview$$ = new $DvtChartDataChangeFunnelSlice$$($DvtChartTypeUtils$$, $DvtChartSeriesEffectUtils$$);
        } else {
          if ($DvtChartMarkerUtils$$ instanceof $DvtChartBar$$ || $DvtChartMarkerUtils$$ instanceof $DvtChartPolarBar$$) {
            $DvtChartOverview$$ = new $DvtChartDataChangeBar$$($DvtChartTypeUtils$$, $DvtChartSeriesEffectUtils$$);
          } else {
            if ($DvtChartMarkerUtils$$ instanceof $DvtChartLineArea$$) {
              $DvtChartOverview$$ = new $DvtChartDataChangeLineArea$$($DvtChartTypeUtils$$, $DvtChartSeriesEffectUtils$$);
            } else {
              if ($DvtChartMarkerUtils$$ instanceof $dvt$$2$$.$SimpleMarker$) {
                if ($DvtChartMarkerUtils$$ instanceof $DvtChartLineMarker$$ && !$DvtChartMarkerUtils$$.$isSelected$()) {
                  continue;
                }
                $DvtChartOverview$$ = new $DvtChartDataChangeMarker$$($DvtChartTypeUtils$$, $DvtChartSeriesEffectUtils$$);
              } else {
                if ($DvtChartMarkerUtils$$ instanceof $DvtChartRangeMarker$$) {
                  if ($DvtChartMarkerUtils$$.$_isInvisible$ && !$DvtChartMarkerUtils$$.$isSelected$()) {
                    continue;
                  }
                  $DvtChartOverview$$ = new $DvtChartDataChangeRangeMarker$$($DvtChartTypeUtils$$, $DvtChartSeriesEffectUtils$$);
                } else {
                  $DvtChartMarkerUtils$$ instanceof $DvtChartCandlestick$$ && ($DvtChartOverview$$ = new $DvtChartDataChangeAbstract$$($DvtChartTypeUtils$$, $DvtChartSeriesEffectUtils$$));
                }
              }
            }
          }
        }
        $DvtChartOverview$$ && ($DvtChartPieLabelInfo$$.push($DvtChartOverview$$), $DvtChartOverview$$.$setOldChart$($DvtSparkChartDefaults$$));
      }
      $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$;
      $DvtChartPieRenderUtils$$ = $DvtChartTooltipUtils$$.$getChartObjPeers$();
    }
  };
  $DvtChartAnimOnDC$$.$_canAnimate$ = function $$DvtChartAnimOnDC$$$$_canAnimate$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtChartTypeUtils$$.$isPie$($dvt$$2$$) && $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) ? $dvt$$2$$ && $DvtSparkChartEventManager$$ : $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) != $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? !1 : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) ? !0 : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) ? 
    !0 : $dvt$$2$$.$getType$() == $DvtSparkChartEventManager$$.$getType$() ? !0 : !1;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChange$$, $dvt$$2$$.$Chart$);
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeAbstract$$, $dvt$$2$$.$Obj$);
  $DvtChartDataChangeAbstract$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeAbstract$$$$$animateUpdate$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$_shape$;
    this.$_shape$ && this.$_shape$.$getUpdateAnimation$ && $dvt$$2$$.add(this.$_shape$.$getUpdateAnimation$(this.$_updateDuration$, $DvtSparkChartDefaults$$), 1);
  };
  $DvtChartDataChangeAbstract$$.prototype.$animateInsert$ = function $$DvtChartDataChangeAbstract$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    if (this.$_shape$ && this.$_shape$.$getInsertAnimation$) {
      $DvtSparkChartEventManager$$.add(this.$_shape$.$getInsertAnimation$(this.$_insertDuration$), 2);
    } else {
      var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
      $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 0);
    }
  };
  $DvtChartDataChangeAbstract$$.prototype.$animateDelete$ = function $$DvtChartDataChangeAbstract$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$addChild$(this.$_shape$);
    if (this.$_shape$ && this.$_shape$.$getDeleteAnimation$) {
      $DvtSparkChartEventManager$$.add(this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$), 0);
    } else {
      var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
      $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
    }
  };
  $DvtChartDataChangeAbstract$$.prototype.getId = function $$DvtChartDataChangeAbstract$$$$getId$() {
    return this.$_animId$;
  };
  $DvtChartDataChangeAbstract$$.prototype.Init = function $$DvtChartDataChangeAbstract$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_peer$ = $dvt$$2$$;
    this.$_updateDuration$ = .75 * $DvtSparkChartEventManager$$;
    this.$_insertDuration$ = .5 * $DvtSparkChartEventManager$$;
    this.$_deleteDuration$ = .5 * $DvtSparkChartEventManager$$;
    this.$_shape$ = $dvt$$2$$.$getDisplayables$()[0];
    this.$_animId$ = $dvt$$2$$.$getSeries$() + "/" + $dvt$$2$$.$getGroup$();
  };
  $DvtChartDataChangeAbstract$$.prototype.$setOldChart$ = function $$DvtChartDataChangeAbstract$$$$$setOldChart$$($dvt$$2$$) {
    this.$_oldChart$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeBar$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeBar$$.prototype.Init = function $$DvtChartDataChangeBar$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeBar$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_indicator$ = null;
    this.$_animId$ += "/bar";
  };
  $DvtChartDataChangeBar$$.prototype.$animateInsert$ = function $$DvtChartDataChangeBar$$$$$animateInsert$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_shape$.$getInsertAnimation$(this.$_insertDuration$);
    $dvt$$2$$.add($DvtSparkChartEventManager$$, 2);
  };
  $DvtChartDataChangeBar$$.prototype.$animateDelete$ = function $$DvtChartDataChangeBar$$$$$animateDelete$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$.$addChild$(this.$_shape$);
    var $DvtSparkChartDefaults$$ = this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$);
    $dvt$$2$$.add($DvtSparkChartDefaults$$, 0);
  };
  $DvtChartDataChangeBar$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeBar$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = this.$_oldChart$, $DvtChartTooltipUtils$$ = this.$_peer$.$_chart$, $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartAutomation$$) != $DvtChartTypeUtils$$.$isHorizontal$($DvtChartTooltipUtils$$), $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$_getAnimationParams$($DvtChartSeriesEffectUtils$$), $DvtChartSeriesEffectUtils$$ = this.$_getAnimationParams$(), $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$isSelected$() || 
    this.$_shape$.$isSelected$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$_shape$.$getPrimaryFill$().clone(), $DvtChartDataChangeFunnelSlice$$ = this.$_shape$.$getPrimaryFill$();
    if (!$dvt$$2$$.$ArrayUtils$.$equals$($DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$) || !$DvtChartPieLabelInfo$$.$equals$($DvtChartDataChangeFunnelSlice$$)) {
      var $DvtChartLineMarker$$ = this.$_peer$.$getSeriesIndex$(), $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$.$_peer$.$getSeriesIndex$(), $DvtChartDataChangeLineArea$$ = this.$_peer$.$getGroupIndex$(), $DvtChartRangeMarker$$ = $DvtSparkChartDefaults$$.$_peer$.$getGroupIndex$();
      "none" !== $DvtChartStyleUtils$$.$getAnimationIndicators$($DvtChartTooltipUtils$$) && (this.$_indicator$ = $DvtChartDataChangeUtils$$.$makeIndicator$($DvtSparkChartAutomation$$, $DvtChartMarkerUtils$$, $DvtChartRangeMarker$$, $DvtChartTooltipUtils$$, $DvtChartLineMarker$$, $DvtChartDataChangeLineArea$$));
      this.$_setAnimationParams$($DvtChartPieLabelUtils$$);
      $DvtChartPieRenderUtils$$ || this.$_shape$.$setFill$($DvtChartPieLabelInfo$$);
      $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
      $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtChartSeriesEffectUtils$$);
      $DvtChartPieRenderUtils$$ || $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $DvtChartDataChangeFunnelSlice$$);
      this.$_indicator$ && ($DvtSparkChartAutomation$$.$setOnEnd$(this.$_onEndAnimation$, this), this.$_indicator$.$setAlpha$(0));
      $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 1);
    }
  };
  $DvtChartDataChangeBar$$.prototype.$_getAnimationParams$ = function $$DvtChartDataChangeBar$$$$$_getAnimationParams$$($dvt$$2$$) {
    return this.$_shape$.$getAnimationParams$($dvt$$2$$);
  };
  $DvtChartDataChangeBar$$.prototype.$_setAnimationParams$ = function $$DvtChartDataChangeBar$$$$$_setAnimationParams$$($dvt$$2$$) {
    this.$_shape$.$setAnimationParams$($dvt$$2$$, this.$_indicator$);
  };
  $DvtChartDataChangeBar$$.prototype.$_onEndAnimation$ = function $$DvtChartDataChangeBar$$$$$_onEndAnimation$$() {
    this.$_indicator$.getParent().removeChild(this.$_indicator$);
    this.$_indicator$ = null;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeLineArea$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeLineArea$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeLineArea$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_baseCoords$ = this.$_shape$.$_arBaseCoord$;
    this.$_coords$ = this.$_shape$.$_arCoord$;
    var $DvtSparkChartAutomation$$ = this.$_shape$.$isArea$(), $DvtChartTooltipUtils$$ = this.$_oldChart$, $DvtChartSeriesEffectUtils$$ = this.$_chart$, $DvtChartPieLabelUtils$$ = this.$_peer$.$getSeriesIndex$(), $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$_peer$.$getSeriesIndex$(), $DvtChartPieLabelInfo$$ = this.$_shape$.$getCommonGroupIndices$($DvtSparkChartDefaults$$.$_shape$), $DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getCommonGroupIndices$(this.$_shape$), $DvtChartDataChangeFunnelSlice$$;
    if ($DvtSparkChartAutomation$$) {
      var $DvtChartLineMarker$$ = $DvtSparkChartDefaults$$.$_getBaseAnimationParams$(this.$_shape$), $DvtChartMarkerUtils$$ = this.$_getBaseAnimationParams$($DvtSparkChartDefaults$$.$_shape$);
      $DvtChartDataChangeLineArea$$.$_matchGroupIndices$($DvtChartLineMarker$$, $DvtChartMarkerUtils$$);
      $dvt$$2$$.$ArrayUtils$.$equals$($DvtChartLineMarker$$, $DvtChartMarkerUtils$$) || (this.$_setBaseAnimationParams$($DvtChartLineMarker$$), $DvtChartDataChangeFunnelSlice$$ = new $dvt$$2$$.$CustomAnimation$(this.$_context$, this, this.$_updateDuration$), $DvtChartDataChangeFunnelSlice$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getBaseAnimationParams$, this.$_setBaseAnimationParams$, $DvtChartMarkerUtils$$));
    }
    var $DvtChartRangeMarker$$, $DvtChartLineMarker$$ = $DvtSparkChartDefaults$$.$_getAnimationParams$(this.$_shape$), $DvtChartMarkerUtils$$ = this.$_getAnimationParams$($DvtSparkChartDefaults$$.$_shape$);
    $DvtChartDataChangeLineArea$$.$_matchGroupIndices$($DvtChartLineMarker$$, $DvtChartMarkerUtils$$);
    $dvt$$2$$.$ArrayUtils$.$equals$($DvtChartLineMarker$$, $DvtChartMarkerUtils$$) || (this.$_setAnimationParams$($DvtChartLineMarker$$), $DvtChartRangeMarker$$ = new $dvt$$2$$.$CustomAnimation$(this.$_context$, this, this.$_updateDuration$), $DvtChartRangeMarker$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtChartMarkerUtils$$));
    if ("none" !== $DvtChartStyleUtils$$.$getAnimationIndicators$($DvtChartSeriesEffectUtils$$) && (!$DvtSparkChartAutomation$$ || "lineWithArea" != this.$_peer$.$getSeriesType$())) {
      for ($DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartPieLabelInfo$$.length;$DvtChartMarkerUtils$$++) {
        $DvtSparkChartAutomation$$ = $DvtChartDataChangeUtils$$.$getDirection$($DvtChartTooltipUtils$$, $DvtChartPieRenderUtils$$, $DvtChartTypeUtils$$[$DvtChartMarkerUtils$$], $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$[$DvtChartMarkerUtils$$]), ($DvtChartLineMarker$$ = $DvtChartDataChangeUtils$$.$makeIndicator$($DvtChartTooltipUtils$$, $DvtChartPieRenderUtils$$, $DvtChartTypeUtils$$[$DvtChartMarkerUtils$$], $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, 
        $DvtChartPieLabelInfo$$[$DvtChartMarkerUtils$$])) && this.$_shape$.$addIndicator$($DvtChartPieLabelInfo$$[$DvtChartMarkerUtils$$], $DvtSparkChartAutomation$$, $DvtChartLineMarker$$);
      }
    }
    if ($DvtChartDataChangeFunnelSlice$$ || $DvtChartRangeMarker$$) {
      $DvtChartTooltipUtils$$ = new $dvt$$2$$.$ParallelPlayable$(this.$_context$, $DvtChartDataChangeFunnelSlice$$, $DvtChartRangeMarker$$), $DvtChartTooltipUtils$$.$setOnEnd$(this.$_onAnimationEnd$, this), $DvtSparkChartEventManager$$.add($DvtChartTooltipUtils$$, 1);
    }
  };
  $DvtChartDataChangeLineArea$$.prototype.$animateInsert$ = function $$DvtChartDataChangeLineArea$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    this.$_shape$.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_context$, this.$_shape$, this.$_insertDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 2);
  };
  $DvtChartDataChangeLineArea$$.prototype.$animateDelete$ = function $$DvtChartDataChangeLineArea$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$;
    "area" == $DvtChartStyleUtils$$.$getSeriesType$(this.$_oldChart$, this.$_peer$.$getSeriesIndex$()) ? ($DvtSparkChartAutomation$$ = this.$_chart$.$_areaContainer$, this.$_deletedAreas$ = this.$_shape$.getParent().getParent(), $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$.$addChild$(this.$_deletedAreas$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_context$, this.$_deletedAreas$, this.$_deleteDuration$), $DvtSparkChartAutomation$$.$setOnEnd$(this.$_removeDeletedAreas$, 
    this), $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0))) : ($DvtSparkChartDefaults$$.$addChild$(this.$_shape$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_context$, this.$_shape$, this.$_deleteDuration$), $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0));
  };
  $DvtChartDataChangeLineArea$$.prototype.$_removeDeletedAreas$ = function $$DvtChartDataChangeLineArea$$$$$_removeDeletedAreas$$() {
    var $dvt$$2$$ = this.$_chart$.$_areaContainer$;
    $dvt$$2$$ && $dvt$$2$$.removeChild(this.$_deletedAreas$);
  };
  $DvtChartDataChangeLineArea$$.prototype.$_getAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_getAnimationParams$$($dvt$$2$$) {
    return this.$_shape$.$getAnimationParams$($dvt$$2$$);
  };
  $DvtChartDataChangeLineArea$$.prototype.$_setAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_setAnimationParams$$($dvt$$2$$) {
    this.$_shape$.$setAnimationParams$($dvt$$2$$);
  };
  $DvtChartDataChangeLineArea$$.prototype.$_getBaseAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_getBaseAnimationParams$$($dvt$$2$$) {
    return this.$_shape$.$getBaseAnimationParams$($dvt$$2$$);
  };
  $DvtChartDataChangeLineArea$$.prototype.$_setBaseAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_setBaseAnimationParams$$($dvt$$2$$) {
    this.$_shape$.$setBaseAnimationParams$($dvt$$2$$);
  };
  $DvtChartDataChangeLineArea$$.prototype.$_onAnimationEnd$ = function $$DvtChartDataChangeLineArea$$$$$_onAnimationEnd$$() {
    this.$_shape$.$removeIndicators$();
    this.$_shape$.$setCoords$(this.$_coords$, this.$_baseCoords$);
  };
  $DvtChartDataChangeLineArea$$.$_matchGroupIndices$ = function $$DvtChartDataChangeLineArea$$$$_matchGroupIndices$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = 3;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$ += 4) {
      $dvt$$2$$[$DvtSparkChartDefaults$$] = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$];
    }
  };
  $DvtChartDataChangeLineArea$$.prototype.Init = function $$DvtChartDataChangeLineArea$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeLineArea$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_context$ = this.$_shape$.$getCtx$();
    this.$_chart$ = this.$_peer$.$_chart$;
    this.$_animId$ += "/" + (this.$_shape$.$isArea$() ? "area" : "line");
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeMarker$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeMarker$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeMarker$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_shape$.$getCenterDimensions$(), $DvtChartTooltipUtils$$ = this.$_shape$.$getCenterDimensions$();
    if (!$DvtChartTooltipUtils$$.$equals$($DvtSparkChartAutomation$$)) {
      this.$_shape$.$setCenterDimensions$($DvtSparkChartAutomation$$);
      var $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
      $DvtChartSeriesEffectUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_RECTANGLE$, this.$_shape$, this.$_shape$.$getCenterDimensions$, this.$_shape$.$setCenterDimensions$, $DvtChartTooltipUtils$$);
      var $DvtChartPieLabelUtils$$ = this.$_peer$.$_chart$;
      this.$isValueChange$($DvtSparkChartDefaults$$) && "none" != $DvtChartStyleUtils$$.$getAnimationIndicators$($DvtChartPieLabelUtils$$) && $DvtChartTypeUtils$$.$isScatterBubble$($DvtChartPieLabelUtils$$) && ($DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$_shape$, $DvtChartPieLabelUtils$$.$setSolidFill$("#FFFF2B", .9), $DvtChartPieLabelUtils$$.$setCenterDimensions$($DvtSparkChartAutomation$$), this.$_peer$.$_chart$.$getPlotArea$().$addChild$($DvtChartPieLabelUtils$$), $DvtChartSeriesEffectUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_RECTANGLE$, 
      $DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$.$getCenterDimensions$, $DvtChartPieLabelUtils$$.$setCenterDimensions$, $DvtChartTooltipUtils$$), $DvtChartSeriesEffectUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$.$getAlpha$, $DvtChartPieLabelUtils$$.$setAlpha$, 0), this.$_overlay$ = $DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$.$setOnEnd$(this.$_onEndAnimation$, this));
      $DvtSparkChartEventManager$$.add($DvtChartSeriesEffectUtils$$, 1);
    }
  };
  $DvtChartDataChangeMarker$$.prototype.$animateInsert$ = function $$DvtChartDataChangeMarker$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    this.$_shape$.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 2);
  };
  $DvtChartDataChangeMarker$$.prototype.$animateDelete$ = function $$DvtChartDataChangeMarker$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$addChild$(this.$_shape$);
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
  };
  $DvtChartDataChangeMarker$$.prototype.$isValueChange$ = function $$DvtChartDataChangeMarker$$$$$isValueChange$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = !1;
    if ($dvt$$2$$) {
      var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_peer$.$getSeriesIndex$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$_peer$.$getGroupIndex$(), $DvtSparkChartAutomation$$ = this.$_peer$.$getSeriesIndex$(), $DvtChartTooltipUtils$$ = this.$_peer$.$getGroupIndex$();
      $dvt$$2$$ = $dvt$$2$$.$_oldChart$.$getOptions$();
      var $DvtChartSeriesEffectUtils$$ = this.$_peer$.$_chart$.$getOptions$(), $DvtChartPieLabelUtils$$ = $dvt$$2$$.series[$DvtSparkChartEventManager$$].items[$DvtSparkChartDefaults$$].y, $DvtChartPieRenderUtils$$ = $dvt$$2$$.series[$DvtSparkChartEventManager$$].items[$DvtSparkChartDefaults$$].z, $DvtChartPieLabelInfo$$ = $DvtChartSeriesEffectUtils$$.series[$DvtSparkChartAutomation$$].items[$DvtChartTooltipUtils$$].y, $DvtChartTypeUtils$$ = $DvtChartSeriesEffectUtils$$.series[$DvtSparkChartAutomation$$].items[$DvtChartTooltipUtils$$].z, 
      $DvtSparkChartEventManager$$ = $DvtChartSeriesEffectUtils$$.series[$DvtSparkChartAutomation$$].items[$DvtChartTooltipUtils$$].x !== $dvt$$2$$.series[$DvtSparkChartEventManager$$].items[$DvtSparkChartDefaults$$].x || $DvtChartPieLabelInfo$$ !== $DvtChartPieLabelUtils$$ || $DvtChartTypeUtils$$ !== $DvtChartPieRenderUtils$$;
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartDataChangeMarker$$.prototype.$_onEndAnimation$ = function $$DvtChartDataChangeMarker$$$$$_onEndAnimation$$() {
    this.$_overlay$ && (this.$_peer$.$_chart$.$getPlotArea$().removeChild(this.$_overlay$), this.$_overlay$ = null);
  };
  $DvtChartDataChangeMarker$$.prototype.Init = function $$DvtChartDataChangeMarker$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeMarker$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_animId$ += "/marker";
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeRangeMarker$$.prototype.Init = function $$DvtChartDataChangeRangeMarker$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeRangeMarker$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_animId$ += "/rangeMarker";
  };
  $DvtChartDataChangeRangeMarker$$.prototype.$animateInsert$ = function $$DvtChartDataChangeRangeMarker$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    this.$_shape$.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 2);
  };
  $DvtChartDataChangeRangeMarker$$.prototype.$animateDelete$ = function $$DvtChartDataChangeRangeMarker$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$addChild$(this.$_shape$);
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
  };
  $DvtChartDataChangeRangeMarker$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeRangeMarker$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_shape$.$getAnimationParams$(), $DvtChartTooltipUtils$$ = this.$_shape$.$getAnimationParams$();
    this.$_shape$.$setAnimationParams$($DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_shape$, this.$_shape$.$getAnimationParams$, this.$_shape$.$setAnimationParams$, $DvtChartTooltipUtils$$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 1);
  };
  var $DvtChartDataChangeUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartDataChangeUtils$$.$DIR_UP$ = 0;
  $DvtChartDataChangeUtils$$.$DIR_DOWN$ = 1;
  $DvtChartDataChangeUtils$$.$DIR_NOCHANGE$ = 2;
  $DvtChartDataChangeUtils$$.$makeIndicator$ = function $$DvtChartDataChangeUtils$$$$makeIndicator$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    if ($DvtChartTypeUtils$$.$isPolar$($DvtSparkChartAutomation$$)) {
      return null;
    }
    $dvt$$2$$ = $DvtChartDataChangeUtils$$.$getDirection$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$);
    if ($dvt$$2$$ == $DvtChartDataChangeUtils$$.$DIR_NOCHANGE$) {
      return null;
    }
    $DvtSparkChartEventManager$$ = ($dvt$$2$$ = $dvt$$2$$ === $DvtChartDataChangeUtils$$.$DIR_DOWN$) ? $DvtChartStyleUtils$$.$getAnimationDownColor$($DvtSparkChartAutomation$$) : $DvtChartStyleUtils$$.$getAnimationUpColor$($DvtSparkChartAutomation$$);
    $dvt$$2$$ = $DvtChartDataChangeUtils$$.$_drawIndicator$($DvtSparkChartAutomation$$.$getCtx$(), $dvt$$2$$, $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartAutomation$$), $DvtSparkChartEventManager$$);
    $DvtSparkChartAutomation$$.$getPlotArea$().$addChild$($dvt$$2$$);
    return $dvt$$2$$;
  };
  $DvtChartDataChangeUtils$$.$getDirection$ = function $$DvtChartDataChangeUtils$$$$getDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    $dvt$$2$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$);
    return null == $DvtSparkChartAutomation$$ || null == $dvt$$2$$ || $DvtSparkChartAutomation$$ == $dvt$$2$$ ? $DvtChartDataChangeUtils$$.$DIR_NOCHANGE$ : $DvtSparkChartAutomation$$ > $dvt$$2$$ ? $DvtChartDataChangeUtils$$.$DIR_UP$ : $DvtChartDataChangeUtils$$.$DIR_DOWN$;
  };
  $DvtChartDataChangeUtils$$.$_drawIndicator$ = function $$DvtChartDataChangeUtils$$$$_drawIndicator$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$ ? ($dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$) ? !$DvtSparkChartDefaults$$ : $DvtSparkChartDefaults$$) ? "M3.5,-5L3.5,5L-3.5,0L3.5,-5" : "M-3.5,-5L-3.5,5L3.5,0L-3.5,-5" : $DvtSparkChartDefaults$$ ? "M-5,-3.5L5,-3.5L0,3.5L-5,-3.5Z" : "M-5,3.5L5,3.5L0,-3.5L-5,3.5Z";
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$Path$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$setSolidFill$($DvtChartTooltipUtils$$);
    return $DvtSparkChartEventManager$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeFunnelSlice$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = this.$_shape$, $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getAnimationParams$(), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$.$getAnimationParams$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getFill$().clone(), $DvtChartPieRenderUtils$$ = this.$_shape$.$getFill$();
    $dvt$$2$$.$ArrayUtils$.$equals$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) && $DvtChartPieLabelUtils$$.$equals$($DvtChartPieRenderUtils$$) || ($DvtSparkChartAutomation$$.$setAnimationParams$($DvtChartTooltipUtils$$), this.$_shape$.$setFill$($DvtChartPieLabelUtils$$), $DvtChartTooltipUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartAutomation$$.$getCtx$(), this, this.$_updateDuration$), $DvtChartTooltipUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartAutomation$$, 
    $DvtSparkChartAutomation$$.$getAnimationParams$, $DvtSparkChartAutomation$$.$setAnimationParams$, $DvtChartSeriesEffectUtils$$), $DvtChartTooltipUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $DvtChartPieRenderUtils$$), this.$_indicator$ && $DvtChartTooltipUtils$$.$setOnEnd$(this.$_onEndAnimation$, this), $DvtSparkChartEventManager$$.add($DvtChartTooltipUtils$$, 1));
  };
  $DvtChartDataChangeFunnelSlice$$.prototype.$animateInsert$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$_shape$, $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.slice(0);
    $DvtChartTooltipUtils$$[0] += $DvtChartTooltipUtils$$[1] / 2;
    $DvtChartTooltipUtils$$[1] = 0;
    $DvtChartTooltipUtils$$[3] = 0;
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartTooltipUtils$$);
    $DvtChartTooltipUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartDefaults$$.$getCtx$(), this, this.$_insertDuration$);
    $DvtChartTooltipUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.add($DvtChartTooltipUtils$$, 2);
  };
  $DvtChartDataChangeFunnelSlice$$.prototype.$animateDelete$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = this.$_shape$;
    $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartAutomation$$);
    var $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.$getAnimationParams$(), $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.slice(0);
    $DvtChartSeriesEffectUtils$$[0] += $DvtChartTooltipUtils$$[1] / 2;
    $DvtChartSeriesEffectUtils$$[1] = 0;
    $DvtChartSeriesEffectUtils$$[3] = 0;
    $DvtChartTooltipUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartAutomation$$.$getCtx$(), this, this.$_deleteDuration$);
    $DvtChartTooltipUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$.$getAnimationParams$, $DvtSparkChartAutomation$$.$setAnimationParams$, $DvtChartSeriesEffectUtils$$);
    $DvtSparkChartEventManager$$.add($DvtChartTooltipUtils$$, 0);
  };
  $DvtChartDataChangeFunnelSlice$$.prototype.Init = function $$DvtChartDataChangeFunnelSlice$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeFunnelSlice$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_animId$ += "/funnel";
  };
  var $DvtChartAxisUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAxisUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartAxisUtils$$.$getXAxisPosition$ = function $$DvtChartAxisUtils$$$$getXAxisPosition$$($DvtSparkChartEventManager$$) {
    return $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? "tangential" : $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? "right" : "left" : "bottom";
  };
  $DvtChartAxisUtils$$.$getBaselineScaling$ = function $$DvtChartAxisUtils$$$$getBaselineScaling$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$ + "Axis", $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartDefaults$$].baselineScaling;
    return !$DvtSparkChartDefaults$$ || "zero" != $DvtSparkChartDefaults$$ && "min" != $DvtSparkChartDefaults$$ ? $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? "min" : "zero" : $DvtSparkChartDefaults$$;
  };
  $DvtChartAxisUtils$$.$getYAxisPosition$ = function $$DvtChartAxisUtils$$$$getYAxisPosition$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$().yAxis.position;
    if ($DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$)) {
      return "radial";
    }
    if ($DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$)) {
      return !$DvtSparkChartDefaults$$ || "top" != $DvtSparkChartDefaults$$ && "bottom" != $DvtSparkChartDefaults$$ ? "bottom" : $DvtSparkChartDefaults$$;
    }
    $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$) && ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$ : "end");
    return $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? $DvtSparkChartDefaults$$ && "end" == $DvtSparkChartDefaults$$ ? "left" : "right" : $DvtSparkChartDefaults$$ && "end" == $DvtSparkChartDefaults$$ ? "right" : "left";
  };
  $DvtChartAxisUtils$$.$getY2AxisPosition$ = function $$DvtChartAxisUtils$$$$getY2AxisPosition$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$().y2Axis.position;
    return $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? !$DvtSparkChartDefaults$$ || "top" != $DvtSparkChartDefaults$$ && "bottom" != $DvtSparkChartDefaults$$ ? "top" : $DvtSparkChartDefaults$$ : $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? $DvtSparkChartDefaults$$ && "start" == $DvtSparkChartDefaults$$ ? "right" : "left" : $DvtSparkChartDefaults$$ && "start" == $DvtSparkChartDefaults$$ ? "left" : "right";
  };
  $DvtChartAxisUtils$$.$hasTimeAxis$ = function $$DvtChartAxisUtils$$$$hasTimeAxis$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && "disabled" != $DvtChartAxisUtils$$.$getTimeAxisType$($dvt$$2$$);
  };
  $DvtChartAxisUtils$$.$hasGroupAxis$ = function $$DvtChartAxisUtils$$$$hasGroupAxis$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && "disabled" == $DvtChartAxisUtils$$.$getTimeAxisType$($dvt$$2$$);
  };
  $DvtChartAxisUtils$$.$getTimeAxisType$ = function $$DvtChartAxisUtils$$$$getTimeAxisType$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().timeAxisType;
    return $DvtSparkChartEventManager$$ && "auto" != $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $DvtSparkChartEventManager$$ : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? "skipGaps" : "disabled";
  };
  $DvtChartAxisUtils$$.$isMixedFrequency$ = function $$DvtChartAxisUtils$$$$isMixedFrequency$$($dvt$$2$$) {
    return "mixedFrequency" == $DvtChartAxisUtils$$.$getTimeAxisType$($dvt$$2$$);
  };
  $DvtChartAxisUtils$$.$getAxisOffset$ = function $$DvtChartAxisUtils$$$$getAxisOffset$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_cache$.$getFromCache$("axisOffset");
    if (null != $DvtSparkChartEventManager$$) {
      return $DvtSparkChartEventManager$$;
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.groupSeparators;
    $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$) && 1 < $DvtChartDataUtils$$.$getNumLevels$($dvt$$2$$) && "on" == $DvtSparkChartEventManager$$.rendered ? $DvtSparkChartEventManager$$ = .5 : $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasCenteredSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasCandlestickSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && 1 == $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$) ? $DvtSparkChartEventManager$$ = .5 : !$DvtChartDefaults$$.$isPostAltaSkin$($dvt$$2$$) || 
    $DvtChartTypeUtils$$.$isSpark$($dvt$$2$$) || $DvtChartEventUtils$$.$isScrollable$($dvt$$2$$) || $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) ? $DvtSparkChartEventManager$$ = 0 : ($DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) ? .2 : .5, $DvtSparkChartEventManager$$ -= $DvtSparkChartEventManager$$ / Math.sqrt($DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$)));
    $dvt$$2$$.$_cache$.$putToCache$("axisOffset", $DvtSparkChartEventManager$$);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartAxisUtils$$.$isGridShifted$ = function $$DvtChartAxisUtils$$$$isGridShifted$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return !1;
    }
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
        var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartDefaults$$), $DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartDefaults$$);
        if ("bar" != $DvtSparkChartAutomation$$ && "centeredSegmented" != $DvtChartTooltipUtils$$ && "centeredStepped" != $DvtChartTooltipUtils$$) {
          return !1;
        }
      }
    }
    return !0;
  };
  $DvtChartAxisUtils$$.$isGridPolygonal$ = function $$DvtChartAxisUtils$$$$isGridPolygonal$$($dvt$$2$$) {
    return !$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$) ? !1 : "polygon" == $dvt$$2$$.$getOptions$().polarGridShape;
  };
  $DvtChartAxisUtils$$.$isAxisRendered$ = function $$DvtChartAxisUtils$$$$isAxisRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ("y" == $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$hasY2DataOnly$($dvt$$2$$) || "y2" == $DvtSparkChartEventManager$$ && !$DvtChartTypeUtils$$.$hasY2Data$($dvt$$2$$)) {
      return !1;
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return "off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.tickLabel.rendered && !$DvtSparkChartDefaults$$.title ? !1 : !0;
  };
  $DvtChartAxisUtils$$.$isAxisLineRendered$ = function $$DvtChartAxisUtils$$$$isAxisLineRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return "off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.axisLine.rendered ? !1 : "auto" == $DvtSparkChartDefaults$$.axisLine.rendered && "x" != $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? !1 : !0;
  };
  $DvtChartAxisUtils$$.$isMajorTickRendered$ = function $$DvtChartAxisUtils$$$$isMajorTickRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return "off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.majorTick.rendered ? !1 : "auto" == $DvtSparkChartDefaults$$.majorTick.rendered && "x" == $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? !1 : !0;
  };
  $DvtChartAxisUtils$$.$isMinorTickRendered$ = function $$DvtChartAxisUtils$$$$isMinorTickRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return "off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.minorTick.rendered ? !1 : "on" == $DvtSparkChartDefaults$$.minorTick.rendered ? !0 : $DvtChartAxisUtils$$.$isLog$($dvt$$2$$, $DvtSparkChartEventManager$$);
  };
  $DvtChartAxisUtils$$.$isLog$ = function $$DvtChartAxisUtils$$$$isLog$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return "log" == $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"].scale;
  };
  $DvtChartAxisUtils$$.$getTickLabelHeight$ = function $$DvtChartAxisUtils$$$$getTickLabelHeight$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$ + "Axis"].tickLabel.style;
    $DvtChartTooltipUtils$$ instanceof $dvt$$2$$.$CSSStyle$ || ($DvtChartTooltipUtils$$ = new $dvt$$2$$.$CSSStyle$($DvtChartTooltipUtils$$));
    $DvtChartTooltipUtils$$.$mergeUnder$($dvt$$2$$.$Axis$.$getDefaults$($DvtSparkChartAutomation$$.skin).tickLabel.style);
    return $dvt$$2$$.$TextUtils$.$getTextStringHeight$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartTooltipUtils$$);
  };
  $DvtChartAxisUtils$$.$getTickLabelGapSize$ = function $$DvtChartAxisUtils$$$$getTickLabelGapSize$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ($DvtChartAxisUtils$$.$isTickLabelInside$($dvt$$2$$, $DvtSparkChartEventManager$$)) {
      return 0;
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$), $DvtChartTooltipUtils$$ = $DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = Math.ceil($DvtSparkChartDefaults$$.layout.tickLabelGapWidth * $DvtChartTooltipUtils$$), $DvtSparkChartDefaults$$ = Math.ceil($DvtSparkChartDefaults$$.layout.tickLabelGapHeight * $DvtChartTooltipUtils$$);
    return "x" == $DvtSparkChartEventManager$$ ? $DvtSparkChartAutomation$$ ? $DvtChartSeriesEffectUtils$$ : $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$ ? $DvtSparkChartDefaults$$ : $DvtChartSeriesEffectUtils$$;
  };
  $DvtChartAxisUtils$$.$getGapScalingFactor$ = function $$DvtChartAxisUtils$$$$getGapScalingFactor$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, $DvtSparkChartEventManager$$) ? $DvtChartAxisUtils$$.$getTickLabelHeight$($dvt$$2$$, $DvtSparkChartEventManager$$) / 14 : 0;
  };
  $DvtChartAxisUtils$$.$isTickLabelInside$ = function $$DvtChartAxisUtils$$$$isTickLabelInside$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && "x" == $DvtSparkChartEventManager$$ ? !1 : "inside" == $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"].tickLabel.position;
  };
  $DvtChartAxisUtils$$.$getXAxisViewportMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisViewportMinMax$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().xAxis, $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$), $DvtChartTooltipUtils$$ = $DvtChartAxisUtils$$.$getAxisOffset$($dvt$$2$$);
    if ($DvtSparkChartEventManager$$) {
      var $DvtChartSeriesEffectUtils$$ = $DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($dvt$$2$$)
    }
    var $DvtChartPieLabelUtils$$ = null;
    null != $DvtSparkChartDefaults$$.viewportMin ? $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.viewportMin : null != $DvtSparkChartDefaults$$.viewportStartGroup ? $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$ ? $DvtChartDataUtils$$.$getGroupIndex$($dvt$$2$$, $DvtSparkChartDefaults$$.viewportStartGroup) - $DvtChartTooltipUtils$$ : $DvtSparkChartDefaults$$.viewportStartGroup : $DvtSparkChartEventManager$$ && ($DvtChartPieLabelUtils$$ = $DvtChartSeriesEffectUtils$$.min);
    var $DvtChartPieRenderUtils$$ = null;
    null != $DvtSparkChartDefaults$$.viewportMax ? $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.viewportMax : null != $DvtSparkChartDefaults$$.viewportEndGroup ? $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$ ? $DvtChartDataUtils$$.$getGroupIndex$($dvt$$2$$, $DvtSparkChartDefaults$$.viewportEndGroup) + $DvtChartTooltipUtils$$ : $DvtSparkChartDefaults$$.viewportEndGroup : $DvtSparkChartEventManager$$ && ($DvtChartPieRenderUtils$$ = $DvtChartSeriesEffectUtils$$.max);
    return {min:$DvtChartPieLabelUtils$$, max:$DvtChartPieRenderUtils$$};
  };
  $DvtChartAxisUtils$$.$getXAxisGlobalMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisGlobalMinMax$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().xAxis, $DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$), $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$getAxisOffset$($dvt$$2$$);
    if (!$DvtSparkChartDefaults$$) {
      var $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getMinMaxValue$($dvt$$2$$, "x")
    }
    var $DvtChartSeriesEffectUtils$$ = null, $DvtChartSeriesEffectUtils$$ = null != $DvtSparkChartEventManager$$.min ? $DvtSparkChartEventManager$$.min : $DvtSparkChartDefaults$$ ? 0 - $DvtSparkChartAutomation$$ : $DvtChartTooltipUtils$$.min, $DvtChartPieLabelUtils$$ = null, $DvtChartPieLabelUtils$$ = null != $DvtSparkChartEventManager$$.max ? $DvtSparkChartEventManager$$.max : $DvtSparkChartDefaults$$ ? $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$) - 1 + $DvtSparkChartAutomation$$ : $DvtChartTooltipUtils$$.max;
    return {min:$DvtChartSeriesEffectUtils$$, max:$DvtChartPieLabelUtils$$};
  };
  $DvtChartAxisUtils$$.$applyInitialZooming$ = function $$DvtChartAxisUtils$$$$applyInitialZooming$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.xAxis, $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.initialZooming;
    if ($DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && "off" != $DvtSparkChartDefaults$$.zoomAndScroll && "none" != $DvtChartTooltipUtils$$) {
      $DvtSparkChartDefaults$$._initialZoomed && ("last" == $DvtChartTooltipUtils$$ ? $DvtSparkChartAutomation$$.viewportMin = null : $DvtSparkChartAutomation$$.viewportMax = null);
      var $DvtChartSeriesEffectUtils$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, !1), $DvtChartPieLabelUtils$$ = $DvtChartSeriesEffectUtils$$.min, $DvtChartSeriesEffectUtils$$ = $DvtChartSeriesEffectUtils$$.max;
      if (!("last" == $DvtChartTooltipUtils$$ && null != $DvtChartPieLabelUtils$$ || "first" == $DvtChartTooltipUtils$$ && null != $DvtChartSeriesEffectUtils$$)) {
        var $DvtChartTooltipUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) ? $DvtSparkChartEventManager$$.$h$ : $DvtSparkChartEventManager$$.$w$, $DvtChartPieRenderUtils$$ = Math.floor($DvtChartTooltipUtils$$ / (2 * $DvtChartAxisUtils$$.$getTickLabelHeight$($dvt$$2$$, "x"))) + $DvtChartAxisUtils$$.$getAxisOffset$($dvt$$2$$), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$) - 1;
        if (!($DvtChartPieLabelInfo$$ <= $DvtChartPieRenderUtils$$)) {
          var $DvtChartDataChangeFunnelSlice$$;
          $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$) ? ($DvtChartTooltipUtils$$ = 0, $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelInfo$$) : ($DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getMinMaxValue$($dvt$$2$$, "x"), $DvtChartTooltipUtils$$ = $DvtChartDataChangeFunnelSlice$$.min, $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataChangeFunnelSlice$$.max);
          $DvtChartPieRenderUtils$$ = $DvtChartPieRenderUtils$$ / $DvtChartPieLabelInfo$$ * ($DvtChartDataChangeFunnelSlice$$ - $DvtChartTooltipUtils$$);
          "last" == $DvtSparkChartDefaults$$.initialZooming ? (null == $DvtChartSeriesEffectUtils$$ && ($DvtChartSeriesEffectUtils$$ = $DvtChartDataChangeFunnelSlice$$), $DvtSparkChartAutomation$$.viewportMin = Math.max($DvtChartSeriesEffectUtils$$ - $DvtChartPieRenderUtils$$, $DvtChartTooltipUtils$$)) : (null == $DvtChartPieLabelUtils$$ && ($DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$), $DvtSparkChartAutomation$$.viewportMax = Math.min($DvtChartPieLabelUtils$$ + $DvtChartPieRenderUtils$$, 
          $DvtChartDataChangeFunnelSlice$$));
          $DvtSparkChartDefaults$$._initialZoomed = !0;
        }
      }
    }
  };
  $DvtChartAxisUtils$$.$getGroupWidthRatios$ = function $$DvtChartAxisUtils$$$$getGroupWidthRatios$$($DvtSparkChartEventManager$$) {
    if (!$DvtChartTypeUtils$$.$hasBarSeries$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$hasCandlestickSeries$($DvtSparkChartEventManager$$)) {
      return null;
    }
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getBarGapRatio$($DvtSparkChartEventManager$$);
    if (1 <= $DvtSparkChartAutomation$$) {
      return $DvtSparkChartDefaults$$._averageGroupZ = Infinity, null;
    }
    $DvtSparkChartDefaults$$._averageGroupZ = 0;
    for (var $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getStackCategories$($DvtSparkChartEventManager$$, "bar"), $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$_optionsCache$.$getFromCache$("_hasVaryingBarWidth"), $DvtChartPieLabelInfo$$ = [], $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$, 
    $DvtChartMarkerUtils$$, $DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartTooltipUtils$$;$DvtChartDataChangeLineArea$$++) {
      $DvtChartLineMarker$$ = $DvtChartDataChangeFunnelSlice$$ = 0;
      if ($DvtChartPieRenderUtils$$) {
        for ($DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartPieLabelUtils$$.y.length;$DvtChartMarkerUtils$$++) {
          $DvtChartDataChangeFunnelSlice$$ += $DvtChartDataUtils$$.$getBarCategoryZ$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.y[$DvtChartMarkerUtils$$], $DvtChartDataChangeLineArea$$, !1);
        }
        for ($DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartPieLabelUtils$$.y2.length;$DvtChartMarkerUtils$$++) {
          $DvtChartLineMarker$$ += $DvtChartDataUtils$$.$getBarCategoryZ$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.y2[$DvtChartMarkerUtils$$], $DvtChartDataChangeLineArea$$, !0);
        }
      } else {
        $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelUtils$$.y.length, $DvtChartLineMarker$$ = $DvtChartPieLabelUtils$$.y2.length;
      }
      $DvtChartPieLabelInfo$$.push($DvtChartSeriesEffectUtils$$ ? Math.max($DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$) : $DvtChartDataChangeFunnelSlice$$ + $DvtChartLineMarker$$);
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$ArrayUtils$.reduce($DvtChartPieLabelInfo$$, function($dvt$$2$$, $DvtSparkChartEventManager$$) {
      return $dvt$$2$$ + $DvtSparkChartEventManager$$;
    });
    var $DvtChartRangeMarker$$ = $DvtSparkChartEventManager$$ * $DvtSparkChartAutomation$$ / (1 - $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$ArrayUtils$.map($DvtChartPieLabelInfo$$, function($dvt$$2$$) {
      return $dvt$$2$$ + $DvtChartRangeMarker$$ / $DvtChartTooltipUtils$$;
    });
    $DvtSparkChartDefaults$$._averageGroupZ = ($DvtSparkChartEventManager$$ + $DvtChartRangeMarker$$) / $DvtChartTooltipUtils$$;
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartAxisUtils$$.$isYAdjustmentNeeded$ = function $$DvtChartAxisUtils$$$$isYAdjustmentNeeded$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.dataLabelPosition, $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$isStackLabelRendered$($dvt$$2$$);
    return $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$) && ("outsideBarEdge" == $DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$) ? !0 : !1;
  };
  $DvtChartAxisUtils$$.$axisContainsPoint$ = function $$DvtChartAxisUtils$$$$axisContainsPoint$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (!$dvt$$2$$) {
      return !1;
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().position, $DvtSparkChartAutomation$$ = "top" == $DvtSparkChartDefaults$$ || "bottom" == $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$ ? 4 : 10, $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$ ? 10 : 4, $DvtSparkChartAutomation$$ = $dvt$$2$$.$_bounds$.clone();
    $DvtSparkChartAutomation$$.x -= $DvtChartTooltipUtils$$;
    $DvtSparkChartAutomation$$.y -= $DvtSparkChartDefaults$$;
    $DvtSparkChartAutomation$$.$w$ += 2 * $DvtChartTooltipUtils$$;
    $DvtSparkChartAutomation$$.$h$ += 2 * $DvtSparkChartDefaults$$;
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$stageToLocal$($DvtSparkChartEventManager$$);
    return $DvtSparkChartAutomation$$.$containsPoint$($DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y);
  };
  var $DvtChartDataUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartDataUtils$$.$hasData$ = function $$DvtChartDataUtils$$$$hasData$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    if (!$DvtSparkChartEventManager$$ || !$DvtSparkChartEventManager$$.series || 1 > $DvtSparkChartEventManager$$.series.length) {
      return !1;
    }
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartDefaults$$);
      if ($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.items && 1 <= $DvtSparkChartAutomation$$.items.length) {
        return !0;
      }
    }
    return !1;
  };
  $DvtChartDataUtils$$.$hasInvalidData$ = function $$DvtChartDataUtils$$$$hasInvalidData$$($dvt$$2$$) {
    return !$DvtChartDataUtils$$.$hasData$($dvt$$2$$) || $DvtChartDataUtils$$.$hasInvalidTimeData$($dvt$$2$$);
  };
  $DvtChartDataUtils$$.$hasInvalidTimeData$ = function $$DvtChartDataUtils$$$$hasInvalidTimeData$$($dvt$$2$$) {
    if ($DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$) || $DvtChartTypeUtils$$.$isPie$($dvt$$2$$)) {
      return !1;
    }
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);
    if (!$DvtSparkChartEventManager$$ || !$DvtSparkChartEventManager$$.series || 1 > $DvtSparkChartEventManager$$.series.length || 1 > $DvtSparkChartDefaults$$) {
      return !0;
    }
    var $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);
    if ($DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$)) {
      for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartTooltipUtils$$;$DvtSparkChartAutomation$$++) {
        for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$;$DvtSparkChartEventManager$$++) {
          var $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$);
          if ($DvtChartSeriesEffectUtils$$ && (null == $DvtChartSeriesEffectUtils$$.x || isNaN($DvtChartSeriesEffectUtils$$.x))) {
            return !0;
          }
        }
      }
    } else {
      if ($DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$)) {
        for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$;$DvtSparkChartEventManager$$++) {
          if ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartEventManager$$), null == $DvtSparkChartAutomation$$ || isNaN($DvtSparkChartAutomation$$)) {
            return !0;
          }
        }
      }
    }
    return !1;
  };
  $DvtChartDataUtils$$.$hasSeriesData$ = function $$DvtChartDataUtils$$$$hasSeriesData$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).items;
    if ($DvtSparkChartDefaults$$) {
      for (var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
        if (null != $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]) {
          return !0;
        }
      }
    }
    return !1;
  };
  $DvtChartDataUtils$$.$processDataObject$ = function $$DvtChartDataUtils$$$$processDataObject$$($DvtSparkChartEventManager$$) {
    if ($DvtChartDataUtils$$.$hasData$($DvtSparkChartEventManager$$)) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_optionsCache$, $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);
      $DvtChartTypeUtils$$.$isValidType$($DvtSparkChartEventManager$$) || ($DvtSparkChartDefaults$$.type = "bar");
      var $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$);
      $DvtChartSeriesEffectUtils$$ && ($DvtSparkChartAutomation$$.$putToCache$("_hasVolume", !1), 1 < $DvtChartTooltipUtils$$ && ($DvtSparkChartDefaults$$.series = $DvtSparkChartDefaults$$.series.slice(0, 1), $DvtChartTooltipUtils$$ = 1));
      var $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$);
      $DvtSparkChartAutomation$$.$putToCache$("_hasVaryingBarWidth", !1);
      $DvtSparkChartAutomation$$.$putToCache$("dataMarkerSizeSet", !1);
      $DvtSparkChartAutomation$$.$putToCache$("dataMarkerDisplayedSet", !1);
      var $DvtChartPieRenderUtils$$ = $DvtChartAxisUtils$$.$isMixedFrequency$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = 100 < $DvtChartTooltipUtils$$;
      $DvtSparkChartAutomation$$.$putToCache$("hasLargeSeriesCount", $DvtChartPieLabelInfo$$);
      $DvtSparkChartAutomation$$.$putToCache$("hasY2Assignment", !1);
      for (var $DvtChartDataChangeFunnelSlice$$ = 0, $DvtChartLineMarker$$ = $DvtSparkChartEventManager$$.$SeriesStyleArray$, $DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartTooltipUtils$$;$DvtChartMarkerUtils$$++) {
        var $DvtChartDataChangeLineArea$$ = $DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$);
        !$DvtChartPieLabelInfo$$ && null != $DvtChartDataChangeLineArea$$ && 0 > $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartLineMarker$$, $DvtChartDataChangeLineArea$$) && $DvtChartLineMarker$$.push($DvtChartDataChangeLineArea$$);
        var $DvtChartRangeMarker$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$);
        $DvtChartRangeMarker$$.items && $DvtChartRangeMarker$$.items.length > $DvtChartDataChangeFunnelSlice$$ && ($DvtChartDataChangeFunnelSlice$$ = $DvtChartRangeMarker$$.items.length);
        if ("hidden" == $DvtChartRangeMarker$$.visibility) {
          var $DvtChartLineArea$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
          0 > $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartLineArea$$, $DvtChartDataChangeLineArea$$) && $DvtChartLineArea$$.push($DvtChartDataChangeLineArea$$);
        }
        $DvtChartRangeMarker$$.visibility = null;
        "on" == $DvtChartRangeMarker$$.assignedToY2 && $DvtSparkChartAutomation$$.$putToCache$("hasY2Assignment", !0);
        if ($DvtChartRangeMarker$$ && $DvtChartRangeMarker$$.items) {
          for (var $DvtChartLineArea$$ = $DvtChartRangeMarker$$.items, $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartLineArea$$.length;$DvtChartDataChangeLineArea$$++) {
            $DvtChartLineArea$$[$DvtChartDataChangeLineArea$$] && ($DvtChartDataChangeRangeMarker$$ = $DvtChartLineArea$$[$DvtChartDataChangeLineArea$$], "object" != typeof $DvtChartDataChangeRangeMarker$$ ? $DvtChartDataChangeRangeMarker$$ = Number($DvtChartDataChangeRangeMarker$$) : (!$DvtChartPieRenderUtils$$ && $DvtChartDataChangeRangeMarker$$.x && ($DvtChartDataChangeRangeMarker$$.x = Number($DvtChartDataChangeRangeMarker$$.x)), $DvtChartDataChangeRangeMarker$$.y && ($DvtChartDataChangeRangeMarker$$.y = 
            Number($DvtChartDataChangeRangeMarker$$.y)), $DvtChartDataChangeRangeMarker$$.z && ($DvtChartDataChangeRangeMarker$$.z = Number($DvtChartDataChangeRangeMarker$$.z), $DvtChartPieLabelUtils$$ && 1 != $DvtChartDataChangeRangeMarker$$.z && $DvtSparkChartAutomation$$.$putToCache$("_hasVaryingBarWidth", !0)), $DvtChartDataChangeRangeMarker$$.value && ($DvtChartDataChangeRangeMarker$$.value = Number($DvtChartDataChangeRangeMarker$$.value)), $DvtChartDataChangeRangeMarker$$.targetValue && ($DvtChartDataChangeRangeMarker$$.targetValue = 
            Number($DvtChartDataChangeRangeMarker$$.targetValue)), $DvtChartDataChangeRangeMarker$$.open && ($DvtChartDataChangeRangeMarker$$.open = Number($DvtChartDataChangeRangeMarker$$.open)), $DvtChartDataChangeRangeMarker$$.close && ($DvtChartDataChangeRangeMarker$$.close = Number($DvtChartDataChangeRangeMarker$$.close)), $DvtChartDataChangeRangeMarker$$.low && ($DvtChartDataChangeRangeMarker$$.low = Number($DvtChartDataChangeRangeMarker$$.low)), $DvtChartDataChangeRangeMarker$$.high && ($DvtChartDataChangeRangeMarker$$.high = 
            Number($DvtChartDataChangeRangeMarker$$.high)), $DvtChartDataChangeRangeMarker$$.volume && ($DvtChartDataChangeRangeMarker$$.volume = Number($DvtChartDataChangeRangeMarker$$.volume), $DvtSparkChartAutomation$$.$putToCache$("_hasVolume", !0)), $DvtChartDataChangeRangeMarker$$.markerSize && $DvtSparkChartAutomation$$.$putToCache$("dataMarkerSizeSet", !0), $DvtChartDataChangeRangeMarker$$.markerDisplayed && $DvtSparkChartAutomation$$.$putToCache$("dataMarkerDisplayedSet", !0)), $DvtChartLineArea$$[$DvtChartDataChangeLineArea$$] = 
            $DvtChartDataChangeRangeMarker$$);
          }
        }
      }
      if ($DvtChartSeriesEffectUtils$$ && $DvtChartDataUtils$$.$hasVolumeSeries$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
        $DvtChartMarkerUtils$$ = $dvt$$2$$.$JsonUtils$.clone($DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, 0));
        $DvtChartMarkerUtils$$.assignedToY2 = "on";
        $DvtSparkChartAutomation$$.$putToCache$("hasY2Assignment", !0);
        $DvtChartMarkerUtils$$.type = "bar";
        $DvtChartMarkerUtils$$.categories = $DvtChartDataUtils$$.$getSeriesCategories$($DvtSparkChartEventManager$$, 0);
        $DvtChartMarkerUtils$$.id = "_volume";
        $DvtChartMarkerUtils$$._selectable = "off";
        $DvtChartMarkerUtils$$.items = [];
        for ($DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartRangeMarker$$.items.length;$DvtChartDataChangeLineArea$$++) {
          $DvtSparkChartAutomation$$ = {}, $DvtSparkChartAutomation$$.color = $DvtChartStyleUtils$$.$getStockVolumeColor$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$), $DvtSparkChartAutomation$$.x = $DvtChartRangeMarker$$.items[$DvtChartDataChangeLineArea$$].x, $DvtSparkChartAutomation$$.value = $DvtChartRangeMarker$$.items[$DvtChartDataChangeLineArea$$].volume, $DvtChartMarkerUtils$$.items.push($DvtSparkChartAutomation$$);
        }
        $DvtSparkChartDefaults$$.series.push($DvtChartMarkerUtils$$);
      }
      $DvtChartRangeMarker$$ = $DvtChartRefObjUtils$$.$getRefObjs$($DvtSparkChartEventManager$$);
      for ($DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartRangeMarker$$.length;$DvtChartMarkerUtils$$++) {
        if ($DvtChartLineArea$$ = $DvtChartRangeMarker$$[$DvtChartMarkerUtils$$].items) {
          for ($DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartLineArea$$.length;$DvtChartDataChangeLineArea$$++) {
            if ($DvtChartDataChangeRangeMarker$$ = $DvtChartLineArea$$[$DvtChartDataChangeLineArea$$]) {
              "object" != typeof $DvtChartDataChangeRangeMarker$$ ? $DvtChartLineArea$$[$DvtChartDataChangeLineArea$$] = Number($DvtChartDataChangeRangeMarker$$) : (!$DvtChartAxisUtils$$.$isMixedFrequency$($DvtSparkChartEventManager$$) && $DvtChartDataChangeRangeMarker$$.x && ($DvtChartDataChangeRangeMarker$$.x = Number($DvtChartDataChangeRangeMarker$$.x)), $DvtChartDataChangeRangeMarker$$.max && ($DvtChartDataChangeRangeMarker$$.max = Number($DvtChartDataChangeRangeMarker$$.max)), $DvtChartDataChangeRangeMarker$$.min && 
              ($DvtChartDataChangeRangeMarker$$.min = Number($DvtChartDataChangeRangeMarker$$.min)), $DvtChartDataChangeRangeMarker$$.value && ($DvtChartDataChangeRangeMarker$$.value = Number($DvtChartDataChangeRangeMarker$$.value)));
            }
          }
        }
      }
      $DvtSparkChartDefaults$$.groups || ($DvtSparkChartDefaults$$.groups = []);
      $DvtChartDataChangeLineArea$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);
      for ($DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartDataChangeFunnelSlice$$ - $DvtChartDataChangeLineArea$$;$DvtChartMarkerUtils$$++) {
        $DvtChartRangeMarker$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "labelDefaultGroupName", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "DEFAULT_GROUP_NAME", $DvtSparkChartDefaults$$.groups.length + 1), $DvtSparkChartDefaults$$.groups.push($DvtChartRangeMarker$$);
      }
      $DvtSparkChartEventManager$$.$_optionsCache$.$putToCache$("groupsArray", null);
      $DvtChartDataUtils$$.$_processTimeAxis$($DvtSparkChartEventManager$$);
      $DvtChartRangeMarker$$ = $DvtSparkChartDefaults$$.sorting;
      $DvtChartRangeMarker$$ = "on" == $DvtChartRangeMarker$$ ? "descending" : "ascending" != $DvtChartRangeMarker$$ && "descending" != $DvtChartRangeMarker$$ ? "off" : $DvtChartRangeMarker$$;
      if ($DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) && $DvtChartAxisUtils$$.$hasGroupAxis$($DvtSparkChartEventManager$$) && "off" != $DvtChartRangeMarker$$ && 1 == $DvtChartDataUtils$$.$getNumLevels$($DvtSparkChartEventManager$$)) {
        for (var $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getGroups$($DvtSparkChartEventManager$$), $DvtChartOverview$$ = {}, $DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartDataChangeFunnelSlice$$.length;$DvtChartDataChangeLineArea$$++) {
          for ($DvtChartMarkerUtils$$ = $DvtSparkChartAutomation$$ = 0;$DvtChartMarkerUtils$$ <= $DvtChartTooltipUtils$$;$DvtChartMarkerUtils$$++) {
            $DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$) && !$DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$) && ($DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$, $DvtChartDataChangeLineArea$$), $DvtSparkChartAutomation$$ += null == $DvtChartSeriesEffectUtils$$ || isNaN($DvtChartSeriesEffectUtils$$) ? 0 : $DvtChartSeriesEffectUtils$$);
          }
          $DvtChartOverview$$[$DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeLineArea$$]] = {index:$DvtChartDataChangeLineArea$$, total:$DvtSparkChartAutomation$$, group:$DvtSparkChartDefaults$$.groups[$DvtChartDataChangeLineArea$$]};
        }
        "ascending" == $DvtChartRangeMarker$$ ? $DvtChartDataChangeFunnelSlice$$.sort(function($dvt$$2$$, $DvtSparkChartEventManager$$) {
          return $DvtChartOverview$$[$dvt$$2$$].total - $DvtChartOverview$$[$DvtSparkChartEventManager$$].total;
        }) : $DvtChartDataChangeFunnelSlice$$.sort(function($dvt$$2$$, $DvtSparkChartEventManager$$) {
          return $DvtChartOverview$$[$DvtSparkChartEventManager$$].total - $DvtChartOverview$$[$dvt$$2$$].total;
        });
        for ($DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartTooltipUtils$$;$DvtChartMarkerUtils$$++) {
          $DvtChartRangeMarker$$ = [];
          for ($DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartDataChangeFunnelSlice$$.length;$DvtChartDataChangeLineArea$$++) {
            $DvtChartRangeMarker$$.push($DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$, $DvtChartOverview$$[$DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeLineArea$$]].index));
          }
          $DvtSparkChartDefaults$$.series[$DvtChartMarkerUtils$$].items = $DvtChartRangeMarker$$;
        }
        $DvtChartTooltipUtils$$ = [];
        for ($DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartDataChangeFunnelSlice$$.length;$DvtChartDataChangeLineArea$$++) {
          $DvtChartTooltipUtils$$.push($DvtChartOverview$$[$DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeLineArea$$]].group);
        }
        $DvtSparkChartDefaults$$.groups = $DvtChartTooltipUtils$$;
        $DvtSparkChartEventManager$$.$_optionsCache$.$putToCache$("groupsArray", null);
        $DvtSparkChartEventManager$$.$_optionsCache$.$putToCache$("value", null);
      }
      $DvtChartDataUtils$$.$_sanitizeAxis$($DvtSparkChartDefaults$$.xAxis);
      $DvtChartDataUtils$$.$_sanitizeAxis$($DvtSparkChartDefaults$$.yAxis);
      $DvtChartDataUtils$$.$_sanitizeAxis$($DvtSparkChartDefaults$$.y2Axis);
    }
  };
  $DvtChartDataUtils$$.$_sanitizeAxis$ = function $$DvtChartDataUtils$$$$_sanitizeAxis$$($dvt$$2$$) {
    $dvt$$2$$.min == $dvt$$2$$.max && ($dvt$$2$$.min = null, $dvt$$2$$.max = null);
  };
  $DvtChartDataUtils$$.$_sanitizeDateTime$ = function $$DvtChartDataUtils$$$$_sanitizeDateTime$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = null, $DvtSparkChartAutomation$$ = $dvt$$2$$.$getLocaleHelpers$.isoToDateConverter;
    if ($DvtSparkChartAutomation$$) {
      try {
        $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$($DvtSparkChartEventManager$$);
      } catch ($DvtChartTooltipUtils$$) {
        $DvtSparkChartDefaults$$ = null;
      }
      null != $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.getTime());
    }
    null == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = Date.parse($DvtSparkChartEventManager$$));
    isNaN($DvtSparkChartDefaults$$) && ($DvtSparkChartDefaults$$ = Number($DvtSparkChartEventManager$$));
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$_processTimeAxis$ = function $$DvtChartDataUtils$$$$_processTimeAxis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getCtx$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);
    if ($DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$)) {
      for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartSeriesEffectUtils$$;$DvtSparkChartAutomation$$++) {
        for ($DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtChartPieLabelUtils$$;$DvtChartTooltipUtils$$++) {
          var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
          null != $DvtChartPieRenderUtils$$ && "string" == typeof $DvtChartPieRenderUtils$$.x && null != $DvtChartPieRenderUtils$$.x && ($DvtChartPieRenderUtils$$.x = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$.x));
        }
      }
    } else {
      if ($DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$)) {
        for ($DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtChartPieLabelUtils$$;$DvtChartTooltipUtils$$++) {
          $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtChartTooltipUtils$$), null != $DvtSparkChartAutomation$$ && ($DvtSparkChartDefaults$$.groups[$DvtChartTooltipUtils$$] = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$));
        }
        $dvt$$2$$.$_optionsCache$.$putToCache$("groupsArray", null);
      }
    }
    if ($DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$)) {
      for ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.xAxis, null != $DvtSparkChartDefaults$$.dataMin && ($DvtSparkChartDefaults$$.dataMin = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.dataMin)), null != $DvtSparkChartDefaults$$.dataMax && ($DvtSparkChartDefaults$$.dataMax = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.dataMax)), null != $DvtSparkChartDefaults$$.min && ($DvtSparkChartDefaults$$.min = 
      $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.min)), null != $DvtSparkChartDefaults$$.max && ($DvtSparkChartDefaults$$.max = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.max)), null != $DvtSparkChartDefaults$$.viewportMin && ($DvtSparkChartDefaults$$.viewportMin = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.viewportMin)), null != $DvtSparkChartDefaults$$.viewportMax && 
      ($DvtSparkChartDefaults$$.viewportMax = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.viewportMax)), null != $DvtSparkChartDefaults$$.viewportStartGroup && ($DvtSparkChartDefaults$$.viewportStartGroup = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.viewportStartGroup)), null != $DvtSparkChartDefaults$$.viewportEndGroup && ($DvtSparkChartDefaults$$.viewportEndGroup = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, 
      $DvtSparkChartDefaults$$.viewportEndGroup)), $dvt$$2$$ = $DvtChartRefObjUtils$$.$getRefObjs$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        if ($DvtChartTooltipUtils$$ = $dvt$$2$$[$DvtSparkChartDefaults$$].items) {
          for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartTooltipUtils$$.length;$DvtChartPieLabelUtils$$++) {
            null != $DvtChartTooltipUtils$$[$DvtChartPieLabelUtils$$].x && ($DvtChartTooltipUtils$$[$DvtChartPieLabelUtils$$].x = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$[$DvtChartPieLabelUtils$$].x));
          }
        }
      }
    }
  };
  $DvtChartDataUtils$$.$getSeriesCount$ = function $$DvtChartDataUtils$$$$getSeriesCount$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().series.length;
  };
  $DvtChartDataUtils$$.$getY2SeriesCount$ = function $$DvtChartDataUtils$$$$getY2SeriesCount$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = 0, $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
      $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartAutomation$$) && $DvtSparkChartEventManager$$++;
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartDataUtils$$.$getSeries$ = function $$DvtChartDataUtils$$$$getSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.id ? $DvtSparkChartDefaults$$.id : $DvtSparkChartDefaults$$.name || "" == $DvtSparkChartDefaults$$.name ? $DvtSparkChartDefaults$$.name : String($DvtSparkChartEventManager$$) : null;
  };
  $DvtChartDataUtils$$.$getSeriesLabel$ = function $$DvtChartDataUtils$$$$getSeriesLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$.name || "" == $DvtSparkChartDefaults$$.name) ? $DvtSparkChartDefaults$$.name : null;
  };
  $DvtChartDataUtils$$.$getSeriesIndex$ = function $$DvtChartDataUtils$$$$getSeriesIndex$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
      if ($DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartAutomation$$) == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartAutomation$$;
      }
    }
    return -1;
  };
  $DvtChartDataUtils$$.$getSeriesStyleIndex$ = function $$DvtChartDataUtils$$$$getSeriesStyleIndex$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if ($DvtSparkChartEventManager$$.$_optionsCache$.$getFromCache$("hasLargeSeriesCount")) {
      return $DvtSparkChartDefaults$$;
    }
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartAutomation$$ ? $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtSparkChartEventManager$$.$SeriesStyleArray$, $DvtSparkChartAutomation$$) : $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$getSeriesItem$ = function $$DvtChartDataUtils$$$$getSeriesItem$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (isNaN($DvtSparkChartEventManager$$) || null == $DvtSparkChartEventManager$$) {
      return null;
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    if ($DvtSparkChartDefaults$$.series && $DvtSparkChartDefaults$$.series.length > $DvtSparkChartEventManager$$) {
      return $DvtSparkChartDefaults$$.series[$DvtSparkChartEventManager$$];
    }
  };
  $DvtChartDataUtils$$.$getDataItem$ = function $$DvtChartDataUtils$$$$getDataItem$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return isNaN($DvtSparkChartDefaults$$) || null == $DvtSparkChartDefaults$$ || 0 > $DvtSparkChartDefaults$$ ? null : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $dvt$$2$$.items && $dvt$$2$$.items.length > $DvtSparkChartDefaults$$ ? $dvt$$2$$.items[$DvtSparkChartDefaults$$] : null;
  };
  $DvtChartDataUtils$$.$getGroupCount$ = function $$DvtChartDataUtils$$$$getGroupCount$$($dvt$$2$$) {
    return $DvtChartDataUtils$$.$_getGroupsArray$($dvt$$2$$).length;
  };
  $DvtChartDataUtils$$.$getGroup$ = function $$DvtChartDataUtils$$$$getGroup$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (0 <= $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$)) {
      var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$_getGroupsArray$($dvt$$2$$)[$DvtSparkChartEventManager$$];
      if ($DvtSparkChartDefaults$$) {
        return $DvtSparkChartDefaults$$.id ? $DvtSparkChartDefaults$$.id : $DvtSparkChartDefaults$$.name || "" == $DvtSparkChartDefaults$$.name ? $DvtSparkChartDefaults$$.name : $DvtSparkChartDefaults$$;
      }
    }
    return null;
  };
  $DvtChartDataUtils$$.$getGroupIndex$ = function $$DvtChartDataUtils$$$$getGroupIndex$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroups$($DvtSparkChartEventManager$$), $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartTooltipUtils$$++) {
      if ($DvtSparkChartDefaults$$ instanceof Array && $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$] instanceof Array ? $dvt$$2$$.$ArrayUtils$.$equals$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$]) : $DvtSparkChartDefaults$$ == $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$]) {
        return $DvtChartTooltipUtils$$;
      }
    }
    return -1;
  };
  $DvtChartDataUtils$$.$getGroupLabel$ = function $$DvtChartDataUtils$$$$getGroupLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (0 <= $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$)) {
      var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$_getGroupsArray$($dvt$$2$$)[$DvtSparkChartEventManager$$];
      if ($DvtSparkChartDefaults$$) {
        return $DvtSparkChartDefaults$$.name ? $DvtSparkChartDefaults$$.name : null != $DvtSparkChartDefaults$$.id ? "" : $DvtSparkChartDefaults$$;
      }
    }
    return null;
  };
  $DvtChartDataUtils$$.$getGroups$ = function $$DvtChartDataUtils$$$$getGroups$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$;$DvtSparkChartAutomation$$++) {
      $DvtSparkChartDefaults$$.push($DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartAutomation$$));
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$_getGroupsArray$ = function $$DvtChartDataUtils$$$$_getGroupsArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$_optionsCache$.$getFromCache$("groupsArray");
    if (!$DvtSparkChartDefaults$$) {
      $DvtSparkChartDefaults$$ = [];
      $DvtSparkChartEventManager$$.groups && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$_getNestedGroups$($DvtSparkChartEventManager$$.groups, $DvtSparkChartDefaults$$));
      for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartEventManager$$++) {
        1 == $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].id.length && ($DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].id = $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].id[0], $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].name = $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].name[0]);
      }
      $dvt$$2$$.$_optionsCache$.$putToCache$("groupsArray", $DvtSparkChartDefaults$$);
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$_getNestedGroups$ = function $$DvtChartDataUtils$$$$_getNestedGroups$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ($dvt$$2$$) {
      for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$], $DvtChartTooltipUtils$$ = null, $DvtChartSeriesEffectUtils$$ = null;
        null != $DvtSparkChartAutomation$$ && ($DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.id ? $DvtSparkChartAutomation$$.id : $DvtSparkChartAutomation$$.name ? $DvtSparkChartAutomation$$.name : $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$.name ? $DvtSparkChartAutomation$$.name : $DvtSparkChartAutomation$$);
        "object" == typeof $DvtChartTooltipUtils$$ && ($DvtChartTooltipUtils$$ = null);
        "object" == typeof $DvtChartSeriesEffectUtils$$ && ($DvtChartSeriesEffectUtils$$ = null);
        if ($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.groups) {
          ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$_getNestedGroups$($DvtSparkChartAutomation$$.groups, [])) || ($DvtSparkChartAutomation$$ = [{id:[], name:[]}]);
          for (var $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
            $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].id.unshift($DvtChartTooltipUtils$$), $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].name.unshift($DvtChartSeriesEffectUtils$$);
          }
          $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.concat($DvtSparkChartAutomation$$);
        } else {
          $DvtSparkChartEventManager$$.push({id:[$DvtChartTooltipUtils$$], name:[$DvtChartSeriesEffectUtils$$]});
        }
      }
      return $DvtSparkChartEventManager$$;
    }
  };
  $DvtChartDataUtils$$.$getNumLevels$ = function $$DvtChartDataUtils$$$$getNumLevels$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$_getGroupsArray$($DvtSparkChartEventManager$$);
    for (var $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      $DvtChartTooltipUtils$$ && $DvtChartTooltipUtils$$.id && ($DvtChartTooltipUtils$$ = $dvt$$2$$.$ArrayUtils$.isArray($DvtChartTooltipUtils$$.id) ? $DvtChartTooltipUtils$$.id.length : 1, $DvtSparkChartDefaults$$ = Math.max($DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$));
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.getValue = function $$DvtChartDataUtils$$$getValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_optionsCache$.$getFromCachedMap2D$("value", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if (void 0 !== $DvtSparkChartAutomation$$) {
      return $DvtSparkChartAutomation$$;
    }
    var $DvtSparkChartAutomation$$ = null, $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    null != $DvtChartTooltipUtils$$ && ("object" != typeof $DvtChartTooltipUtils$$ ? $DvtSparkChartAutomation$$ = $DvtChartTooltipUtils$$ : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) && null != $DvtChartTooltipUtils$$.close ? $DvtSparkChartAutomation$$ = $DvtChartTooltipUtils$$.close : null != $DvtChartTooltipUtils$$.value ? $DvtSparkChartAutomation$$ = $DvtChartTooltipUtils$$.value : null != $DvtChartTooltipUtils$$.y && ($DvtSparkChartAutomation$$ = $DvtChartTooltipUtils$$.y));
    $dvt$$2$$.$_optionsCache$.$putToCachedMap2D$("value", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartDataUtils$$.$getCumulativeValue$ = function $$DvtChartDataUtils$$$$getCumulativeValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$ ? "cumValueH" : "cumValue", $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$($DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if (void 0 !== $DvtChartSeriesEffectUtils$$) {
      return $DvtChartSeriesEffectUtils$$;
    }
    if ($DvtChartTypeUtils$$.$isStacked$($dvt$$2$$)) {
      for (var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelInfo$$ = "bar" == $DvtChartPieLabelUtils$$ ? 0 > $DvtChartSeriesEffectUtils$$ : $DvtChartDataUtils$$.$isSeriesNegative$($dvt$$2$$, 
      $DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = 0, $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartLineMarker$$ = 0;$DvtChartLineMarker$$ <= $DvtSparkChartEventManager$$;$DvtChartLineMarker$$++) {
        if (($DvtSparkChartAutomation$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartLineMarker$$, $DvtSparkChartDefaults$$)) && $DvtChartPieLabelUtils$$ == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartLineMarker$$) && $DvtChartPieRenderUtils$$ == $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartLineMarker$$) && $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartLineMarker$$) == $DvtChartDataChangeFunnelSlice$$) {
          var $DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartLineMarker$$, $DvtSparkChartDefaults$$), $DvtChartDataChangeLineArea$$ = "bar" == $DvtChartPieLabelUtils$$ ? 0 > $DvtChartMarkerUtils$$ : $DvtChartDataUtils$$.$isSeriesNegative$($dvt$$2$$, $DvtChartLineMarker$$);
          if ($DvtChartPieLabelInfo$$ && $DvtChartDataChangeLineArea$$ || !$DvtChartPieLabelInfo$$ && !$DvtChartDataChangeLineArea$$) {
            $DvtChartSeriesEffectUtils$$ += null == $DvtChartMarkerUtils$$ || isNaN($DvtChartMarkerUtils$$) ? 0 : $DvtChartMarkerUtils$$;
          }
        }
      }
    } else {
      $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    }
    $dvt$$2$$.$_cache$.$putToCachedMap2D$($DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartSeriesEffectUtils$$);
    return $DvtChartSeriesEffectUtils$$;
  };
  $DvtChartDataUtils$$.$getLowValue$ = function $$DvtChartDataUtils$$$$getLowValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return null == $DvtSparkChartDefaults$$ ? null : "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) ? null == $DvtSparkChartDefaults$$.low && null != $DvtSparkChartDefaults$$.close ? null != $DvtSparkChartDefaults$$.open ? Math.min($DvtSparkChartDefaults$$.close, $DvtSparkChartDefaults$$.open) : $DvtSparkChartDefaults$$.close : $DvtSparkChartDefaults$$.low : null != $DvtSparkChartDefaults$$.low && null == $DvtSparkChartDefaults$$.close ? $DvtSparkChartDefaults$$.low : 
    null;
  };
  $DvtChartDataUtils$$.$getHighValue$ = function $$DvtChartDataUtils$$$$getHighValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return null == $DvtSparkChartDefaults$$ ? null : "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) ? null == $DvtSparkChartDefaults$$.high ? null != $DvtSparkChartDefaults$$.open ? Math.max($DvtSparkChartDefaults$$.close, $DvtSparkChartDefaults$$.open) : $DvtSparkChartDefaults$$.close : $DvtSparkChartDefaults$$.high : null != $DvtSparkChartDefaults$$.high && null == $DvtSparkChartDefaults$$.close ? $DvtSparkChartDefaults$$.high : null;
  };
  $DvtChartDataUtils$$.$getXValue$ = function $$DvtChartDataUtils$$$$getXValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if ($DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$)) {
      return $DvtSparkChartDefaults$$;
    }
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if (null == $DvtSparkChartEventManager$$) {
      return null;
    }
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.x;
    return null != $DvtSparkChartEventManager$$ ? $DvtSparkChartEventManager$$ : $DvtChartDataUtils$$.$getGroupLabel$($dvt$$2$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartDataUtils$$.$getTargetValue$ = function $$DvtChartDataUtils$$$$getTargetValue$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, 0);
    return null == $DvtSparkChartDefaults$$ || "object" != typeof $DvtSparkChartDefaults$$ ? null : $DvtSparkChartDefaults$$.targetValue;
  };
  $DvtChartDataUtils$$.$getZValue$ = function $$DvtChartDataUtils$$$$getZValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return null == $dvt$$2$$ || "object" != typeof $dvt$$2$$ ? $DvtSparkChartAutomation$$ : null != $dvt$$2$$.z ? $dvt$$2$$.z : $DvtSparkChartAutomation$$;
  };
  $DvtChartDataUtils$$.$isStockValueRising$ = function $$DvtChartDataUtils$$$$isStockValueRising$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) ? $dvt$$2$$.open <= $dvt$$2$$.close : !0;
  };
  $DvtChartDataUtils$$.$getSeriesCategories$ = function $$DvtChartDataUtils$$$$getSeriesCategories$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.categories ? $DvtSparkChartDefaults$$.categories : $DvtSparkChartAutomation$$ ? [$DvtSparkChartAutomation$$] : [];
  };
  $DvtChartDataUtils$$.$getDataItemCategories$ = function $$DvtChartDataUtils$$$$getDataItemCategories$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.categories ? $DvtSparkChartDefaults$$.categories : $DvtChartDataUtils$$.$getSeriesCategories$($dvt$$2$$, $DvtSparkChartEventManager$$);
  };
  $DvtChartDataUtils$$.$isXValInViewport$ = function $$DvtChartDataUtils$$$$isXValInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (isNaN($DvtSparkChartEventManager$$) || null == $DvtSparkChartEventManager$$) {
      return !1;
    }
    var $DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, !0);
    return !(null != $DvtSparkChartDefaults$$.min && $DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$.min) && !(null != $DvtSparkChartDefaults$$.max && $DvtSparkChartEventManager$$ > $DvtSparkChartDefaults$$.max);
  };
  $DvtChartDataUtils$$.$isXInViewport$ = function $$DvtChartDataUtils$$$$isXInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$("isXInViewport", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    null == $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, $DvtSparkChartAutomation$$), $dvt$$2$$.$_cache$.$putToCachedMap2D$("isXInViewport", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$));
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartDataUtils$$.$isRefObjInViewport$ = function $$DvtChartDataUtils$$$$isRefObjInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartRefObjUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartTooltipUtils$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$("isRefObjInViewport", $DvtSparkChartAutomation$$);
    null == $DvtChartTooltipUtils$$ && ($DvtChartTooltipUtils$$ = $DvtChartRefObjUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ - 1), $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 1), $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, $DvtSparkChartAutomation$$) || $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, $DvtChartTooltipUtils$$) || $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, 
    $DvtSparkChartEventManager$$), $dvt$$2$$.$_cache$.$putToCachedMap2D$("isRefObjInViewport", $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$));
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartDataUtils$$.$isBLACItemInViewport$ = function $$DvtChartDataUtils$$$$isBLACItemInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) || $DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ - 1) || $DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 1) : !1;
  };
  $DvtChartDataUtils$$.$getViewportGroupCount$ = function $$DvtChartDataUtils$$$$getViewportGroupCount$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, !0), $DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($dvt$$2$$), $DvtSparkChartEventManager$$ = ($DvtSparkChartEventManager$$.max - $DvtSparkChartEventManager$$.min) / ($DvtSparkChartDefaults$$.max - $DvtSparkChartDefaults$$.min);
    return isNaN($DvtSparkChartEventManager$$) ? 1 : $DvtSparkChartEventManager$$ * $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);
  };
  $DvtChartDataUtils$$.$_computeYAlongLine$ = function $$DvtChartDataUtils$$$$_computeYAlongLine$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$) {
    $DvtSparkChartEventManager$$ && ($DvtSparkChartAutomation$$ = $dvt$$2$$.Math.log10($DvtSparkChartAutomation$$), $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.Math.log10($DvtChartSeriesEffectUtils$$));
    $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$ + ($DvtChartSeriesEffectUtils$$ - $DvtSparkChartAutomation$$) * ($DvtChartPieLabelUtils$$ - $DvtSparkChartDefaults$$) / ($DvtChartTooltipUtils$$ - $DvtSparkChartDefaults$$);
    return $DvtSparkChartEventManager$$ ? Math.pow(10, $DvtSparkChartDefaults$$) : $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$_getViewportEdgeYValues$ = function $$DvtChartDataUtils$$$$_getViewportEdgeYValues$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).items;
    if (!$DvtSparkChartDefaults$$) {
      return {min:null, max:null};
    }
    for (var $DvtSparkChartAutomation$$ = "withoutRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($dvt$$2$$), $DvtChartTooltipUtils$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, !0), $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.min, $DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$.max, $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$isLog$($dvt$$2$$, $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$) ? "y2" : "y"), $DvtChartPieRenderUtils$$, 
    $DvtChartPieLabelInfo$$, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$, $DvtChartMarkerUtils$$, $DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtSparkChartDefaults$$.length;$DvtChartDataChangeLineArea$$++) {
      if ($DvtSparkChartAutomation$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$)) {
        $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$, $DvtSparkChartAutomation$$), null != $DvtChartTypeUtils$$ && (null != $DvtChartSeriesEffectUtils$$ && $DvtChartSeriesEffectUtils$$ > $DvtChartTypeUtils$$ && $DvtChartSeriesEffectUtils$$ < $DvtChartPieRenderUtils$$ && ($DvtChartLineMarker$$ = 
        $DvtChartDataUtils$$.$_computeYAlongLine$($DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$)), null != $DvtChartTooltipUtils$$ && $DvtChartTooltipUtils$$ > $DvtChartTypeUtils$$ && $DvtChartTooltipUtils$$ < $DvtChartPieRenderUtils$$ && ($DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.$_computeYAlongLine$($DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, 
        $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$, $DvtChartTooltipUtils$$))), $DvtChartTypeUtils$$ = $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelInfo$$;
      }
    }
    return {min:$DvtChartLineMarker$$, max:$DvtChartMarkerUtils$$};
  };
  $DvtChartDataUtils$$.$getMinMaxValue$ = function $$DvtChartDataUtils$$$$getMinMaxValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ + ($DvtSparkChartDefaults$$ ? "MinMaxDO" : "MinMax"), $DvtChartTooltipUtils$$ = $dvt$$2$$.$_cache$.$getFromCache$($DvtSparkChartAutomation$$);
    if ($DvtChartTooltipUtils$$) {
      return $DvtChartTooltipUtils$$;
    }
    var $DvtChartSeriesEffectUtils$$ = "z" != $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$isLog$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = "y2" == $DvtSparkChartEventManager$$;
    $DvtChartPieLabelUtils$$ && ($DvtSparkChartEventManager$$ = "y");
    for (var $DvtChartPieRenderUtils$$ = "y" == $DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$ = !$DvtSparkChartDefaults$$ && $DvtChartPieRenderUtils$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$), $DvtChartPieLabelInfo$$ = "withoutRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($dvt$$2$$) || "x" == $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$), $DvtChartDataChangeFunnelSlice$$ = -Infinity, $DvtChartLineMarker$$ = Infinity, $DvtChartDataChangeLineArea$$ = 
    $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartRangeMarker$$ = 0;$DvtChartRangeMarker$$ < $DvtChartDataChangeLineArea$$;$DvtChartRangeMarker$$++) {
      var $DvtChartLineArea$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtChartRangeMarker$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartPieRenderUtils$$ && ($DvtChartStyleUtils$$.$isRangeSeries$($dvt$$2$$, $DvtChartRangeMarker$$) || "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartRangeMarker$$));
      if ($DvtChartPieLabelInfo$$ || $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartRangeMarker$$)) {
        var $DvtChartOverview$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartRangeMarker$$);
        if (!$DvtChartPieRenderUtils$$ || $DvtChartPieLabelUtils$$ == $DvtChartOverview$$) {
          var $DvtChartDataChangeMarker$$ = $DvtChartLineArea$$.items;
          if ($DvtChartDataChangeMarker$$) {
            for (var $DvtChartDataCursor$$ = 0;$DvtChartDataCursor$$ < $DvtChartDataChangeMarker$$.length;$DvtChartDataCursor$$++) {
              if ($DvtChartPieLabelInfo$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartRangeMarker$$, $DvtChartDataCursor$$)) {
                if ("object" != typeof $DvtChartDataChangeMarker$$[$DvtChartDataCursor$$] && ($DvtChartDataChangeMarker$$[$DvtChartDataCursor$$] = {y:$DvtChartDataChangeMarker$$[$DvtChartDataCursor$$]}), $DvtChartLineArea$$ = $DvtChartDataChangeMarker$$[$DvtChartDataCursor$$], $DvtChartOverview$$ = null, $DvtChartPieRenderUtils$$ ? $DvtChartDataChangeRangeMarker$$ || ($DvtChartOverview$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtChartRangeMarker$$, $DvtChartDataCursor$$, $DvtChartPieLabelInfo$$)) : 
                "x" == $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) && !$DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$) ? ($DvtChartOverview$$ = $DvtChartDataUtils$$.$getGroupLabel$($dvt$$2$$, $DvtChartDataCursor$$), null != $DvtChartLineArea$$ && ($DvtChartLineArea$$.x = $DvtChartOverview$$)) : null != $DvtChartLineArea$$ && ($DvtChartOverview$$ = $DvtChartLineArea$$[$DvtSparkChartEventManager$$]), !("z" == $DvtSparkChartEventManager$$ && 0 >= $DvtChartOverview$$ || 
                $DvtChartTooltipUtils$$ && !$DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtChartRangeMarker$$, $DvtChartDataCursor$$))) {
                  if (!($DvtChartDataChangeRangeMarker$$ || null == $DvtChartOverview$$ || "number" != typeof $DvtChartOverview$$ || $DvtChartSeriesEffectUtils$$ && 0 >= $DvtChartOverview$$)) {
                    var $DvtChartPolarBar$$ = 0;
                    $DvtChartTypeUtils$$.$isBubble$($dvt$$2$$) && !$DvtSparkChartDefaults$$ && "z" != $DvtSparkChartEventManager$$ && ($DvtChartPolarBar$$ = $DvtChartMarkerUtils$$.$getBubbleAxisRadius$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartLineArea$$.markerSize));
                    $DvtChartDataChangeFunnelSlice$$ = Math.max($DvtChartDataChangeFunnelSlice$$, $DvtChartSeriesEffectUtils$$ ? $DvtChartOverview$$ * Math.pow(10, $DvtChartPolarBar$$) : $DvtChartOverview$$ + $DvtChartPolarBar$$);
                    $DvtChartLineMarker$$ = Math.min($DvtChartLineMarker$$, $DvtChartSeriesEffectUtils$$ ? $DvtChartOverview$$ / Math.pow(10, $DvtChartPolarBar$$) : $DvtChartOverview$$ - $DvtChartPolarBar$$);
                  }
                  $DvtChartDataChangeRangeMarker$$ && ($DvtChartLineArea$$ = $DvtChartDataUtils$$.$getHighValue$($dvt$$2$$, $DvtChartRangeMarker$$, $DvtChartDataCursor$$), $DvtChartOverview$$ = $DvtChartDataUtils$$.$getLowValue$($dvt$$2$$, $DvtChartRangeMarker$$, $DvtChartDataCursor$$), $DvtChartSeriesEffectUtils$$ && (0 >= $DvtChartLineArea$$ || 0 >= $DvtChartOverview$$) || ($DvtChartDataChangeFunnelSlice$$ = Math.max($DvtChartDataChangeFunnelSlice$$, $DvtChartLineArea$$, $DvtChartOverview$$), $DvtChartLineMarker$$ = 
                  Math.min($DvtChartLineMarker$$, $DvtChartLineArea$$, $DvtChartOverview$$)));
                }
              }
            }
            $DvtChartTooltipUtils$$ && ($DvtChartLineArea$$ = $DvtChartDataUtils$$.$_getViewportEdgeYValues$($dvt$$2$$, $DvtChartRangeMarker$$), null != $DvtChartLineArea$$.min && ($DvtChartLineMarker$$ = Math.min($DvtChartLineMarker$$, $DvtChartLineArea$$.min), $DvtChartDataChangeFunnelSlice$$ = Math.max($DvtChartDataChangeFunnelSlice$$, $DvtChartLineArea$$.min)), null != $DvtChartLineArea$$.max && ($DvtChartLineMarker$$ = Math.min($DvtChartLineMarker$$, $DvtChartLineArea$$.max), $DvtChartDataChangeFunnelSlice$$ = 
            Math.max($DvtChartDataChangeFunnelSlice$$, $DvtChartLineArea$$.max)));
          }
        }
      }
    }
    $DvtSparkChartDefaults$$ = null;
    "x" == $DvtSparkChartEventManager$$ ? $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "x") : $DvtChartPieLabelUtils$$ ? $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y2") : $DvtChartPieRenderUtils$$ && ($DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y"));
    if (null != $DvtSparkChartDefaults$$) {
      for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartEventManager$$++) {
        if ($DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$], $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$.items, $DvtChartSeriesEffectUtils$$ = "withRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($dvt$$2$$) && "hidden" == $DvtChartPieRenderUtils$$.visibility, !$DvtChartSeriesEffectUtils$$) {
          if ($DvtChartPieLabelUtils$$ && !$DvtChartSeriesEffectUtils$$) {
            for ($DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartPieLabelUtils$$.length;$DvtChartPieRenderUtils$$++) {
              null == $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$] || $DvtChartTooltipUtils$$ && !$DvtChartDataUtils$$.$isRefObjInViewport$($dvt$$2$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$) || ($DvtChartOverview$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$]), $DvtChartLineArea$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$]), $DvtChartSeriesEffectUtils$$ = isNaN($DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$]) ? 
              $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$].value : $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$], null != $DvtChartOverview$$ && isFinite($DvtChartOverview$$) && ($DvtChartLineMarker$$ = Math.min($DvtChartLineMarker$$, $DvtChartOverview$$), $DvtChartDataChangeFunnelSlice$$ = Math.max($DvtChartDataChangeFunnelSlice$$, $DvtChartOverview$$)), null != $DvtChartLineArea$$ && isFinite($DvtChartLineArea$$) && ($DvtChartLineMarker$$ = Math.min($DvtChartLineMarker$$, $DvtChartLineArea$$), 
              $DvtChartDataChangeFunnelSlice$$ = Math.max($DvtChartDataChangeFunnelSlice$$, $DvtChartLineArea$$)), null != $DvtChartSeriesEffectUtils$$ && isFinite($DvtChartSeriesEffectUtils$$) && ($DvtChartLineMarker$$ = Math.min($DvtChartLineMarker$$, $DvtChartSeriesEffectUtils$$), $DvtChartDataChangeFunnelSlice$$ = Math.max($DvtChartDataChangeFunnelSlice$$, $DvtChartSeriesEffectUtils$$)));
            }
          } else {
            $DvtChartOverview$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtChartPieRenderUtils$$), $DvtChartLineArea$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtChartPieRenderUtils$$), $DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$.value, null != $DvtChartOverview$$ && isFinite($DvtChartOverview$$) && ($DvtChartLineMarker$$ = Math.min($DvtChartLineMarker$$, $DvtChartOverview$$), $DvtChartDataChangeFunnelSlice$$ = Math.max($DvtChartDataChangeFunnelSlice$$, $DvtChartOverview$$)), null != 
            $DvtChartLineArea$$ && isFinite($DvtChartLineArea$$) && ($DvtChartLineMarker$$ = Math.min($DvtChartLineMarker$$, $DvtChartLineArea$$), $DvtChartDataChangeFunnelSlice$$ = Math.max($DvtChartDataChangeFunnelSlice$$, $DvtChartLineArea$$)), null != $DvtChartSeriesEffectUtils$$ && isFinite($DvtChartSeriesEffectUtils$$) && ($DvtChartLineMarker$$ = Math.min($DvtChartLineMarker$$, $DvtChartSeriesEffectUtils$$), $DvtChartDataChangeFunnelSlice$$ = Math.max($DvtChartDataChangeFunnelSlice$$, $DvtChartSeriesEffectUtils$$))
            ;
          }
        }
      }
    }
    $DvtChartTooltipUtils$$ = {min:$DvtChartLineMarker$$, max:$DvtChartDataChangeFunnelSlice$$};
    $dvt$$2$$.$_cache$.$putToCache$($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartDataUtils$$.$isAssignedToY2$ = function $$DvtChartDataUtils$$$$isAssignedToY2$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (!$dvt$$2$$.$_optionsCache$.$getFromCache$("hasY2Assignment")) {
      return !1;
    }
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && "on" == $DvtSparkChartDefaults$$.assignedToY2 && $DvtChartTypeUtils$$.$isDualY$($dvt$$2$$) ? !0 : !1;
  };
  $DvtChartDataUtils$$.$getInitialSelection$ = function $$DvtChartDataUtils$$$$getInitialSelection$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().selection;
    $DvtSparkChartEventManager$$ || ($DvtSparkChartEventManager$$ = []);
    $dvt$$2$$ = $dvt$$2$$.$getChartObjPeers$();
    for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
      var $DvtSparkChartAutomation$$;
      "string" == typeof $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$] ? ($DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$] = {id:$DvtSparkChartAutomation$$}) : $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].id;
      if (!(null == $DvtSparkChartAutomation$$ || $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].series && $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].group)) {
        for (var $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $dvt$$2$$.length;$DvtChartTooltipUtils$$++) {
          var $DvtChartSeriesEffectUtils$$ = $dvt$$2$$[$DvtChartTooltipUtils$$];
          if ($DvtSparkChartAutomation$$ == $DvtChartSeriesEffectUtils$$.$_dataItemId$) {
            $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].series = $DvtChartSeriesEffectUtils$$.$getSeries$();
            $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].group = $DvtChartSeriesEffectUtils$$.$getGroup$();
            break;
          }
        }
      }
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartDataUtils$$.$getCurrentSelection$ = function $$DvtChartDataUtils$$$$getCurrentSelection$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [];
    if ($dvt$$2$$ = $dvt$$2$$.$getSelectionHandler$()) {
      $dvt$$2$$ = $dvt$$2$$.$getSelectedIds$();
      for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$];
        $DvtSparkChartEventManager$$.push({series:$DvtSparkChartAutomation$$.$getSeries$(), group:$DvtSparkChartAutomation$$.$getGroup$(), id:$DvtSparkChartAutomation$$.getId()});
      }
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartDataUtils$$.$hasVolumeSeries$ = function $$DvtChartDataUtils$$$$hasVolumeSeries$$($dvt$$2$$) {
    return ($dvt$$2$$ = $dvt$$2$$.$_optionsCache$.$getFromCache$("_hasVolume")) ? $dvt$$2$$ : !1;
  };
  $DvtChartDataUtils$$.$isDataSelected$ = function $$DvtChartDataUtils$$$$isDataSelected$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$).id;
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartDefaults$$);
    ($dvt$$2$$ = $dvt$$2$$.$getOptions$().selection) || ($dvt$$2$$ = []);
    for (var $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $dvt$$2$$.length;$DvtChartTooltipUtils$$++) {
      if (null != $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ == $dvt$$2$$[$DvtChartTooltipUtils$$] || $DvtSparkChartAutomation$$ == $dvt$$2$$[$DvtChartTooltipUtils$$].id) || $DvtSparkChartEventManager$$ == $dvt$$2$$[$DvtChartTooltipUtils$$].series && $DvtSparkChartDefaults$$ == $dvt$$2$$[$DvtChartTooltipUtils$$].group) {
        return !0;
      }
    }
    return !1;
  };
  $DvtChartDataUtils$$.$getDataLabel$ = function $$DvtChartDataUtils$$$$getDataLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$) {
    var $DvtChartPieLabelUtils$$;
    $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDefaultDataLabel$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$);
    var $DvtChartPieRenderUtils$$ = $dvt$$2$$.$getOptions$().dataLabel;
    $DvtChartPieRenderUtils$$ && !$DvtChartSeriesEffectUtils$$ && ($DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataContext$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$.label = $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$($DvtChartPieLabelUtils$$), "number" == typeof $DvtChartPieLabelUtils$$ && ($DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$, "label"), $DvtChartPieLabelUtils$$ = 
    $DvtChartTooltipUtils$$.$formatValue$($dvt$$2$$.$getCtx$(), $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$)));
    return $DvtChartPieLabelUtils$$ ? $DvtChartPieLabelUtils$$ : $DvtSparkChartAutomation$$;
  };
  $DvtChartDataUtils$$.$getDefaultDataLabel$ = function $$DvtChartDataUtils$$$$getDefaultDataLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$) {
    if ($DvtChartSeriesEffectUtils$$) {
      $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    } else {
      $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      if (!$DvtSparkChartDefaults$$) {
        return null;
      }
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.label;
      "low" == $DvtSparkChartAutomation$$ ? $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ instanceof Array ? $DvtSparkChartDefaults$$[0] : $DvtSparkChartDefaults$$ : "high" == $DvtSparkChartAutomation$$ && ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ instanceof Array ? $DvtSparkChartDefaults$$[1] : null);
    }
    if (null != $DvtSparkChartDefaults$$) {
      if ("number" == typeof $DvtSparkChartDefaults$$) {
        var $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$;
        if ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$) && $dvt$$2$$.$y2Axis$ ? $dvt$$2$$.$y2Axis$ : $dvt$$2$$.$yAxis$) {
          $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getInfo$(), $DvtChartPieLabelUtils$$ = $DvtChartPieLabelInfo$$.$GlobalMin$, $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$.$GlobalMax$, $DvtChartPieLabelInfo$$ = $DvtChartPieLabelInfo$$.$getMajorIncrement$();
        }
        $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$, "label");
        return $DvtChartTooltipUtils$$.$formatValue$($dvt$$2$$.$getCtx$(), $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$);
      }
      return $DvtSparkChartDefaults$$;
    }
    return null;
  };
  $DvtChartDataUtils$$.$getStackCategory$ = function $$DvtChartDataUtils$$$$getStackCategory$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_cache$.$getFromCachedMap$("stackCategory", $DvtSparkChartEventManager$$);
    if ("undefined" != typeof $DvtSparkChartDefaults$$) {
      return $DvtSparkChartDefaults$$;
    }
    $DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isStacked$($dvt$$2$$) ? $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).stackCategory || null : $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$) || null;
    $dvt$$2$$.$_cache$.$putToCachedMap$("stackCategory", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$getStackCategories$ = function $$DvtChartDataUtils$$$$getStackCategories$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = [], $DvtChartTooltipUtils$$ = [], $DvtChartSeriesEffectUtils$$ = {}, $DvtChartPieLabelUtils$$ = {}, $DvtChartPieRenderUtils$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$("stackCategories", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ($DvtChartPieRenderUtils$$) {
      return $DvtChartPieRenderUtils$$;
    }
    for (var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartPieRenderUtils$$;$DvtChartPieLabelInfo$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartPieLabelInfo$$) || $DvtSparkChartDefaults$$) {
        if ($DvtSparkChartEventManager$$) {
          var $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartPieLabelInfo$$);
          "candlestick" == $DvtChartTypeUtils$$ && ($DvtChartTypeUtils$$ = "bar");
          if ($DvtSparkChartEventManager$$ != $DvtChartTypeUtils$$) {
            continue;
          }
        }
        $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartPieLabelInfo$$);
        $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartPieLabelInfo$$) ? $DvtChartPieLabelUtils$$[$DvtChartTypeUtils$$] || ($DvtChartTooltipUtils$$.push($DvtChartTypeUtils$$), $DvtChartPieLabelUtils$$[$DvtChartTypeUtils$$] = !0) : $DvtChartSeriesEffectUtils$$[$DvtChartTypeUtils$$] || ($DvtSparkChartAutomation$$.push($DvtChartTypeUtils$$), $DvtChartSeriesEffectUtils$$[$DvtChartTypeUtils$$] = !0);
      }
    }
    $DvtChartPieRenderUtils$$ = {y:$DvtSparkChartAutomation$$, y2:$DvtChartTooltipUtils$$};
    $dvt$$2$$.$_cache$.$putToCachedMap2D$("stackCategories", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$);
    return $DvtChartPieRenderUtils$$;
  };
  $DvtChartDataUtils$$.$getBarCategoryZ$ = function $$DvtChartDataUtils$$$$getBarCategoryZ$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartTooltipUtils$$ = 0, $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);$DvtChartSeriesEffectUtils$$++) {
      var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartSeriesEffectUtils$$);
      ("bar" == $DvtChartPieLabelUtils$$ || "candlestick" == $DvtChartPieLabelUtils$$) && $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartSeriesEffectUtils$$) == $DvtSparkChartEventManager$$ && $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartSeriesEffectUtils$$) && ($DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartSeriesEffectUtils$$), $DvtSparkChartAutomation$$ && $DvtChartPieLabelUtils$$ || !$DvtSparkChartAutomation$$ && !$DvtChartPieLabelUtils$$) && 
      ($DvtChartTooltipUtils$$ = Math.max($DvtChartTooltipUtils$$, $DvtChartDataUtils$$.$getZValue$($dvt$$2$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartDefaults$$, 1)));
    }
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartDataUtils$$.$getBarInfo$ = function $$DvtChartDataUtils$$$$getBarInfo$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartLineMarker$$ = 
    $DvtChartStyleUtils$$.$getBarCategoryOffsetMap$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$), $DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartDataChangeLineArea$$ = $DvtChartPieLabelInfo$$.$getUnboundedCoordAt$($DvtChartMarkerUtils$$), $DvtChartRangeMarker$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), 
    $DvtChartLineArea$$ = $DvtChartRangeMarker$$ ? $DvtSparkChartEventManager$$.$y2Axis$ : $DvtSparkChartEventManager$$.$yAxis$, $DvtChartPieLabelInfo$$ = $DvtChartLineArea$$.$getBaselineCoord$(), $DvtChartDataChangeRangeMarker$$;
    if ($DvtChartDataChangeFunnelSlice$$) {
      var $DvtChartOverview$$ = $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      $DvtChartDataChangeRangeMarker$$ = $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      if (null == $DvtChartOverview$$ || isNaN($DvtChartOverview$$) || null == $DvtChartDataChangeRangeMarker$$ || isNaN($DvtChartDataChangeRangeMarker$$)) {
        return null;
      }
      $DvtChartMarkerUtils$$ = $DvtChartLineArea$$.$getBoundedCoordAt$($DvtChartOverview$$);
      $DvtChartDataChangeRangeMarker$$ = $DvtChartLineArea$$.$getBoundedCoordAt$($DvtChartDataChangeRangeMarker$$);
    } else {
      $DvtChartDataChangeRangeMarker$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      $DvtChartOverview$$ = $DvtChartDataUtils$$.$getCumulativeValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      if (null == $DvtChartDataChangeRangeMarker$$ || isNaN($DvtChartDataChangeRangeMarker$$)) {
        return null;
      }
      $DvtChartMarkerUtils$$ = $DvtChartLineArea$$.$getBoundedCoordAt$($DvtChartOverview$$);
      $DvtChartDataChangeRangeMarker$$ = $DvtChartPieLabelUtils$$ ? $DvtChartLineArea$$.$getBoundedCoordAt$($DvtChartOverview$$ - $DvtChartDataChangeRangeMarker$$) : $DvtChartPieLabelInfo$$;
    }
    if ($DvtChartMarkerUtils$$ == $DvtChartDataChangeRangeMarker$$ && null == $DvtChartLineArea$$.$getCoordAt$($DvtChartOverview$$)) {
      return null;
    }
    $DvtChartLineArea$$ = $DvtChartDataUtils$$.$getStackCategory$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getBarWidth$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$ ? $DvtChartStyleUtils$$.$getBarStackWidth$($DvtSparkChartEventManager$$, $DvtChartLineArea$$, $DvtSparkChartAutomation$$, $DvtChartRangeMarker$$) : $DvtSparkChartDefaults$$;
    "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($DvtSparkChartEventManager$$) && $dvt$$2$$.$Agent$.$isPlatformGecko$() && ($DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$ / (1 - $DvtChartStyleUtils$$.$getBarGapRatio$($DvtSparkChartEventManager$$)), 1 < $DvtSparkChartDefaults$$ && 2 > $DvtChartPieLabelUtils$$ - $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$--, $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$));
    $DvtChartLineMarker$$ = $DvtChartLineMarker$$[$DvtChartRangeMarker$$ ? "y2" : "y"][$DvtChartLineArea$$] + .5 * ($DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$);
    $DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$ && !$DvtChartSeriesEffectUtils$$ ? $DvtChartDataChangeLineArea$$ - $DvtChartLineMarker$$ - $DvtSparkChartDefaults$$ : $DvtChartDataChangeLineArea$$ + $DvtChartLineMarker$$;
    $DvtChartPieRenderUtils$$ = $DvtChartSeriesEffectUtils$$ + $DvtSparkChartDefaults$$;
    $DvtSparkChartEventManager$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$(($DvtChartSeriesEffectUtils$$ + $DvtChartPieRenderUtils$$) / 2, $DvtChartDataChangeFunnelSlice$$ ? ($DvtChartMarkerUtils$$ + $DvtChartDataChangeRangeMarker$$) / 2 : $DvtChartMarkerUtils$$), $DvtChartTooltipUtils$$);
    return {$x1$:$DvtChartSeriesEffectUtils$$, $x2$:$DvtChartPieRenderUtils$$, $axisCoord$:$DvtChartPieLabelInfo$$, $baseCoord$:$DvtChartDataChangeRangeMarker$$, $yCoord$:$DvtChartMarkerUtils$$, $dataPos$:$DvtSparkChartEventManager$$, $barWidth$:$DvtSparkChartDefaults$$};
  };
  $DvtChartDataUtils$$.$getMarkerPosition$ = function $$DvtChartDataUtils$$$$getMarkerPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$.$y2Axis$ : $DvtSparkChartEventManager$$.$yAxis$, $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartDataChangeFunnelSlice$$ = 
    $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartLineMarker$$ = $DvtChartDataUtils$$.$getCumulativeValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if ($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$)) {
      if ($DvtChartPieRenderUtils$$ && $DvtChartLineMarker$$ < $DvtChartPieLabelUtils$$.$getInfo$().$MinValue$) {
        return null;
      }
      $DvtSparkChartDefaults$$ = $DvtChartPieRenderUtils$$ ? $DvtChartSeriesEffectUtils$$.$getCoordAt$($DvtChartDataChangeFunnelSlice$$) : $DvtChartSeriesEffectUtils$$.$getUnboundedCoordAt$($DvtChartDataChangeFunnelSlice$$);
      $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$getUnboundedCoordAt$($DvtChartLineMarker$$);
    } else {
      $DvtChartPieLabelInfo$$ ? ($DvtChartLineMarker$$ = $DvtChartPieLabelUtils$$.$getCoordAt$($DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)), $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$.$getCoordAt$($DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)), $DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$.$getCoordAt$($DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, 
      $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)), $DvtSparkChartAutomation$$ = ($DvtChartLineMarker$$ + $DvtChartPieLabelUtils$$) / 2) : ($DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$.$getCoordAt$($DvtChartDataChangeFunnelSlice$$), $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$getCoordAt$($DvtChartLineMarker$$));
    }
    return null == $DvtSparkChartDefaults$$ || null == $DvtSparkChartAutomation$$ ? null : $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartTooltipUtils$$);
  };
  $DvtChartDataUtils$$.$getScatterBubbleMarkerPosition$ = function $$DvtChartDataUtils$$$$getScatterBubbleMarkerPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$yAxis$, $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$.$getCoordAt$($DvtChartPieLabelUtils$$);
    $DvtChartSeriesEffectUtils$$ = $DvtChartSeriesEffectUtils$$.$getCoordAt$($DvtSparkChartEventManager$$);
    return null == $DvtChartTooltipUtils$$ || null == $DvtChartSeriesEffectUtils$$ ? null : new $dvt$$2$$.$Point$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$);
  };
  $DvtChartDataUtils$$.$isSeriesNegative$ = function $$DvtChartDataUtils$$$$isSeriesNegative$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_optionsCache$.$getFromCachedMap$("isSeriesNegative", $DvtSparkChartEventManager$$);
    if (null != $DvtSparkChartDefaults$$) {
      return $DvtSparkChartDefaults$$;
    }
    for (var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$ && !(0 < $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$));$DvtSparkChartAutomation$$++) {
    }
    $DvtSparkChartDefaults$$ = !0;
    $dvt$$2$$.$_optionsCache$.$putToCachedMap$("isSeriesNegative", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartDataUtils$$.$getDataContext$ = function $$DvtChartDataUtils$$$$getDataContext$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) || {}, $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$_rawOptions$, $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) && null == $DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", null), $DvtChartPieLabelInfo$$ = 
    $DvtSparkChartEventManager$$.$getOptions$();
    return {id:$DvtChartPieLabelUtils$$ ? $DvtChartPieRenderUtils$$ : $DvtChartTooltipUtils$$.id, series:$DvtChartPieLabelUtils$$ ? $DvtChartPieRenderUtils$$ : $DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), group:0 <= $DvtSparkChartAutomation$$ ? $DvtChartDataUtils$$.$getGroup$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) : null, data:$DvtChartPieLabelUtils$$ ? null : null != $DvtSparkChartDefaults$$ && -1 != $DvtSparkChartDefaults$$ ? $DvtChartSeriesEffectUtils$$.series[$DvtSparkChartDefaults$$].items[$DvtSparkChartAutomation$$] : 
    null, seriesData:$DvtChartPieLabelUtils$$ ? null : $DvtChartSeriesEffectUtils$$.series[$DvtSparkChartDefaults$$], groupData:0 <= $DvtSparkChartAutomation$$ ? $DvtChartDataUtils$$.$_getGroupsDataArray$($DvtSparkChartEventManager$$)[$DvtSparkChartAutomation$$] : null, component:$DvtChartPieLabelInfo$$._widgetConstructor, value:$DvtChartPieLabelUtils$$ ? $DvtChartPieUtils$$.$getOtherValue$($DvtSparkChartEventManager$$) : $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
    $DvtSparkChartAutomation$$), targetValue:$DvtChartDataUtils$$.$getTargetValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), x:$DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), y:$DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), z:$DvtChartDataUtils$$.$getZValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), low:$DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), high:$DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), color:$DvtChartPieLabelUtils$$ ? $DvtChartPieLabelInfo$$.styleDefaults.otherColor : $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), open:$DvtChartPieLabelUtils$$ ? null : $DvtChartTooltipUtils$$.open, close:$DvtChartPieLabelUtils$$ ? null : $DvtChartTooltipUtils$$.close, 
    volume:$DvtChartPieLabelUtils$$ ? null : $DvtChartTooltipUtils$$.volume, totalValue:$DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) && $DvtSparkChartEventManager$$.$pieChart$ ? $DvtSparkChartEventManager$$.$pieChart$.$getTotalValue$() : null};
  };
  $DvtChartDataUtils$$.$_getGroupsDataArray$ = function $$DvtChartDataUtils$$$$_getGroupsDataArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_optionsCache$.$getFromCache$("groupsDataArray");
    $DvtSparkChartEventManager$$ || ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$_getNestedGroupsData$($dvt$$2$$.$_rawOptions$.groups), $dvt$$2$$.$_optionsCache$.$putToCache$("groupsDataArray", $DvtSparkChartEventManager$$));
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartDataUtils$$.$_getNestedGroupsData$ = function $$DvtChartDataUtils$$$$_getNestedGroupsData$$($dvt$$2$$) {
    if (!$dvt$$2$$) {
      return [];
    }
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
      var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$];
      if ($DvtSparkChartAutomation$$.groups) {
        for (var $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$_getNestedGroupsData$($DvtSparkChartAutomation$$.groups), $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartTooltipUtils$$.length;$DvtChartSeriesEffectUtils$$++) {
          $DvtChartTooltipUtils$$[$DvtChartSeriesEffectUtils$$].unshift($DvtSparkChartAutomation$$);
        }
        $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.concat($DvtChartTooltipUtils$$);
      } else {
        $DvtSparkChartEventManager$$.push([$DvtSparkChartAutomation$$]);
      }
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartDataUtils$$.$isOutermostBar$ = function $$DvtChartDataUtils$$$$isOutermostBar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartTooltipUtils$$ = 0 > $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);
    for ($DvtSparkChartEventManager$$ += 1;$DvtSparkChartEventManager$$ < $DvtChartSeriesEffectUtils$$;$DvtSparkChartEventManager$$++) {
      if ($DvtSparkChartAutomation$$ == $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtSparkChartEventManager$$) && $DvtChartTooltipUtils$$ == 0 > $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) && "bar" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) && $DvtChartDataUtils$$.$isBLACItemInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
        return !1;
      }
    }
    return !0;
  };
  var $DvtChartEventUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartEventUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartEventUtils$$.$getHideAndShowBehavior$ = function $$DvtChartEventUtils$$$$getHideAndShowBehavior$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().hideAndShowBehavior;
  };
  $DvtChartEventUtils$$.$getHoverBehavior$ = function $$DvtChartEventUtils$$$$getHoverBehavior$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().hoverBehavior;
  };
  $DvtChartEventUtils$$.$setVisibility$ = function $$DvtChartEventUtils$$$$setVisibility$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtChartRefObjUtils$$.$getRefObj$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    null != $DvtChartTooltipUtils$$ && ($DvtChartTooltipUtils$$.visibility = $DvtSparkChartAutomation$$);
    var $DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartTooltipUtils$$, $DvtSparkChartDefaults$$);
    "hidden" == $DvtSparkChartAutomation$$ && 0 > $DvtChartSeriesEffectUtils$$ ? $DvtChartTooltipUtils$$.push($DvtSparkChartDefaults$$) : "visible" == $DvtSparkChartAutomation$$ && 0 <= $DvtChartSeriesEffectUtils$$ && $DvtChartTooltipUtils$$.splice($DvtChartSeriesEffectUtils$$, 1);
    if (($DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getOptions$()) && $DvtSparkChartEventManager$$.legend && $DvtSparkChartEventManager$$.legend.sections) {
      for ($DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartEventManager$$.legend.sections.length;$DvtChartTooltipUtils$$++) {
        if (($DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.legend.sections[$DvtChartTooltipUtils$$]) && $DvtChartSeriesEffectUtils$$.items) {
          for (var $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartSeriesEffectUtils$$.items.length;$DvtChartPieLabelUtils$$++) {
            $DvtChartSeriesEffectUtils$$.items[$DvtChartPieLabelUtils$$].id == $DvtSparkChartDefaults$$ && ($DvtChartSeriesEffectUtils$$.items[$DvtChartPieLabelUtils$$].categoryVisibility = $DvtSparkChartAutomation$$);
          }
        }
      }
      return !0;
    }
    return !1;
  };
  $DvtChartEventUtils$$.$isScrollable$ = function $$DvtChartEventUtils$$$$isScrollable$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$) ? "off" != $dvt$$2$$.$getOptions$().zoomAndScroll : !1;
  };
  $DvtChartEventUtils$$.$isZoomable$ = function $$DvtChartEventUtils$$$$isZoomable$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$)) {
      return !1;
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().zoomAndScroll;
    return "live" == $dvt$$2$$ || "delayed" == $dvt$$2$$;
  };
  $DvtChartEventUtils$$.$getZoomDirection$ = function $$DvtChartEventUtils$$$$getZoomDirection$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) ? $dvt$$2$$.$getOptions$().zoomDirection : "auto";
  };
  $DvtChartEventUtils$$.$isLiveScroll$ = function $$DvtChartEventUtils$$$$isLiveScroll$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$)) {
      return !1;
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().zoomAndScroll;
    return "live" == $dvt$$2$$ || "liveScrollOnly" == $dvt$$2$$;
  };
  $DvtChartEventUtils$$.$isDelayedScroll$ = function $$DvtChartEventUtils$$$$isDelayedScroll$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$)) {
      return !1;
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().zoomAndScroll;
    return "delayed" == $dvt$$2$$ || "delayedScrollOnly" == $dvt$$2$$;
  };
  $DvtChartEventUtils$$.$processIds$ = function $$DvtChartEventUtils$$$$processIds$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      $DvtChartTooltipUtils$$.$getSeries$() == $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$ ? ($DvtChartTooltipUtils$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($dvt$$2$$), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.concat($DvtChartTooltipUtils$$)) : $DvtSparkChartDefaults$$.push($DvtChartTooltipUtils$$);
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartEventUtils$$.$adjustBounds$ = function $$DvtChartEventUtils$$$$adjustBounds$$($dvt$$2$$) {
    null != $dvt$$2$$.x && --$dvt$$2$$.x;
    null != $dvt$$2$$.$w$ && ($dvt$$2$$.$w$ += 2);
    null != $dvt$$2$$.y && --$dvt$$2$$.y;
    null != $dvt$$2$$.$h$ && ($dvt$$2$$.$h$ += 2);
  };
  $DvtChartEventUtils$$.$getSelectedObjects$ = function $$DvtChartEventUtils$$$$getSelectedObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if (!$dvt$$2$$.$_cache$.$getFromCache$("dataFiltered")) {
      return $DvtSparkChartDefaults$$.$getSelectedIds$();
    }
    $DvtSparkChartDefaults$$ = [];
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_cache$.$getFromCache$("dataPositions");
    if (!$DvtSparkChartAutomation$$) {
      for (var $DvtSparkChartAutomation$$ = [], $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);$DvtChartTooltipUtils$$++) {
        for (var $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);$DvtChartSeriesEffectUtils$$++) {
          var $DvtChartPieLabelUtils$$;
          if ($DvtChartPieLabelUtils$$ = "bar" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartTooltipUtils$$) ? $DvtChartDataUtils$$.$getBarInfo$($dvt$$2$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$).$dataPos$ : $DvtChartDataUtils$$.$getMarkerPosition$($dvt$$2$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$)) {
            $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getPlotArea$().$localToStage$($DvtChartPieLabelUtils$$), $DvtSparkChartAutomation$$.push({$seriesIndex$:$DvtChartTooltipUtils$$, $groupIndex$:$DvtChartSeriesEffectUtils$$, $pos$:$DvtChartPieLabelUtils$$});
          }
        }
      }
      $dvt$$2$$.$_cache$.$putToCache$("dataPositions", $DvtSparkChartAutomation$$);
    }
    for ($DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartTooltipUtils$$++) {
      if ($DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$].$pos$) {
        $DvtChartSeriesEffectUtils$$ = null == $DvtSparkChartEventManager$$.y || $DvtChartPieLabelUtils$$.y >= $DvtSparkChartEventManager$$.y && $DvtChartPieLabelUtils$$.y <= $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$, (null == $DvtSparkChartEventManager$$.x || $DvtChartPieLabelUtils$$.x >= $DvtSparkChartEventManager$$.x && $DvtChartPieLabelUtils$$.x <= $DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$) && $DvtChartSeriesEffectUtils$$ && $DvtSparkChartDefaults$$.push(new $DvtChartDataItem$$(null, 
        $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$].$seriesIndex$), $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$].$groupIndex$)));
      }
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartEventUtils$$.$getBoundedObjects$ = function $$DvtChartEventUtils$$$$getBoundedObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getChartObjPeers$(), $DvtSparkChartAutomation$$ = [], $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartDefaults$$.length;$DvtChartTooltipUtils$$++) {
      var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$[$DvtChartTooltipUtils$$], $DvtChartPieLabelUtils$$ = $DvtChartSeriesEffectUtils$$.$_dataPos$;
      if ($DvtChartPieLabelUtils$$) {
        var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getPlotArea$().$localToStage$($DvtChartPieLabelUtils$$), $DvtChartPieRenderUtils$$ = null == $DvtSparkChartEventManager$$.y || $DvtChartPieLabelUtils$$.y >= $DvtSparkChartEventManager$$.y && $DvtChartPieLabelUtils$$.y <= $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$;
        (null == $DvtSparkChartEventManager$$.x || $DvtChartPieLabelUtils$$.x >= $DvtSparkChartEventManager$$.x && $DvtChartPieLabelUtils$$.x <= $DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$) && $DvtChartPieRenderUtils$$ && $DvtSparkChartAutomation$$.push($DvtChartSeriesEffectUtils$$);
      }
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartEventUtils$$.$getAxisBounds$ = function $$DvtChartEventUtils$$$$getAxisBounds$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getPlotArea$(), $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.$stageToLocal$(new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y)), $DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$.$stageToLocal$(new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x + $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.y + $DvtSparkChartDefaults$$.$h$));
    null == $DvtSparkChartDefaults$$.x && ($DvtChartSeriesEffectUtils$$.x = null, $DvtChartTooltipUtils$$.x = null);
    null == $DvtSparkChartDefaults$$.y && ($DvtChartSeriesEffectUtils$$.y = null, $DvtChartTooltipUtils$$.y = null);
    $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$_convertToAxisCoord$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$.x, $DvtChartTooltipUtils$$.x, $DvtChartSeriesEffectUtils$$.y, $DvtChartTooltipUtils$$.y);
    var $DvtChartSeriesEffectUtils$$ = {}, $DvtChartTooltipUtils$$ = {}, $DvtChartPieLabelUtils$$ = {}, $DvtChartPieRenderUtils$$ = {};
    $DvtSparkChartEventManager$$.$xAxis$ && ($DvtChartSeriesEffectUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($DvtSparkChartEventManager$$.$xAxis$, $DvtSparkChartDefaults$$.$xMin$, $DvtSparkChartDefaults$$.$xMax$, $DvtSparkChartAutomation$$), $DvtChartPieRenderUtils$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$($DvtSparkChartEventManager$$.$xAxis$, $DvtChartSeriesEffectUtils$$.min, $DvtChartSeriesEffectUtils$$.max));
    $DvtSparkChartEventManager$$.$yAxis$ && ($DvtChartTooltipUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($DvtSparkChartEventManager$$.$yAxis$, $DvtSparkChartDefaults$$.$yMin$, $DvtSparkChartDefaults$$.$yMax$, $DvtSparkChartAutomation$$));
    $DvtSparkChartEventManager$$.$y2Axis$ && ($DvtChartPieLabelUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($DvtSparkChartEventManager$$.$y2Axis$, $DvtSparkChartDefaults$$.$yMin$, $DvtSparkChartDefaults$$.$yMax$, $DvtSparkChartAutomation$$));
    return {$xMin$:$DvtChartSeriesEffectUtils$$.min, $xMax$:$DvtChartSeriesEffectUtils$$.max, $yMin$:$DvtChartTooltipUtils$$.min, $yMax$:$DvtChartTooltipUtils$$.max, $y2Min$:$DvtChartPieLabelUtils$$.min, $y2Max$:$DvtChartPieLabelUtils$$.max, $startGroup$:$DvtChartPieRenderUtils$$.$startGroup$, $endGroup$:$DvtChartPieRenderUtils$$.$endGroup$};
  };
  $DvtChartEventUtils$$.$_getAxisMinMax$ = function $$DvtChartEventUtils$$$$_getAxisMinMax$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (null == $DvtSparkChartEventManager$$ || null == $DvtSparkChartDefaults$$) {
      return {min:null, max:null};
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartDefaults$$);
    return $DvtSparkChartAutomation$$ ? ($DvtSparkChartAutomation$$ = $dvt$$2$$.$getInfo$().$getMinimumExtent$(), $DvtSparkChartDefaults$$ - $DvtSparkChartEventManager$$ < $DvtSparkChartAutomation$$ && ($DvtSparkChartEventManager$$ = ($DvtSparkChartDefaults$$ + $DvtSparkChartEventManager$$) / 2, $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$ + $DvtSparkChartAutomation$$ / 2, $DvtSparkChartEventManager$$ -= $DvtSparkChartAutomation$$ / 2), $DvtChartEventUtils$$.$_limitToGlobal$($dvt$$2$$, 
    $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) : $DvtChartEventUtils$$.$_getActualMinMax$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartEventUtils$$.$getAxisBoundsByDelta$ = function $$DvtChartEventUtils$$$$getAxisBoundsByDelta$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$_convertToAxisCoord$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
    $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$getZoomDirection$($dvt$$2$$);
    $DvtSparkChartAutomation$$ = {};
    $DvtChartTooltipUtils$$ = {};
    var $DvtChartSeriesEffectUtils$$ = {}, $DvtChartPieLabelUtils$$ = {};
    $dvt$$2$$.$xAxis$ && "y" != $DvtSparkChartDefaults$$ && ($DvtSparkChartAutomation$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($dvt$$2$$.$xAxis$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$), $DvtChartPieLabelUtils$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$($dvt$$2$$.$xAxis$, $DvtSparkChartAutomation$$.min, $DvtSparkChartAutomation$$.max));
    $dvt$$2$$.$yAxis$ && "x" != $DvtSparkChartDefaults$$ && ($DvtChartTooltipUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($dvt$$2$$.$yAxis$, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$));
    $dvt$$2$$.$y2Axis$ && ($DvtChartSeriesEffectUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($dvt$$2$$.$y2Axis$, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$));
    return {$xMin$:$DvtSparkChartAutomation$$.min, $xMax$:$DvtSparkChartAutomation$$.max, $yMin$:$DvtChartTooltipUtils$$.min, $yMax$:$DvtChartTooltipUtils$$.max, $y2Min$:$DvtChartSeriesEffectUtils$$.min, $y2Max$:$DvtChartSeriesEffectUtils$$.max, $startGroup$:$DvtChartPieLabelUtils$$.$startGroup$, $endGroup$:$DvtChartPieLabelUtils$$.$endGroup$};
  };
  $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$ = function $$DvtChartEventUtils$$$$_getAxisMinMaxByDelta$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getLinearViewportMin$(), $DvtChartTooltipUtils$$ = $dvt$$2$$.$getLinearViewportMax$();
    if ($DvtSparkChartDefaults$$ == $DvtSparkChartEventManager$$ && $dvt$$2$$.$isFullViewport$()) {
      return $DvtChartEventUtils$$.$_getActualMinMax$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
    }
    var $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartEventManager$$) - $dvt$$2$$.$getUnboundedLinearValueAt$(0), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartDefaults$$) - $dvt$$2$$.$getUnboundedLinearValueAt$(0), $DvtChartPieRenderUtils$$ = 1, $DvtChartPieLabelInfo$$ = $DvtChartTooltipUtils$$ + $DvtChartPieLabelUtils$$ - ($DvtSparkChartAutomation$$ + $DvtChartSeriesEffectUtils$$), $DvtChartTypeUtils$$ = $dvt$$2$$.$getInfo$().$getMinimumExtent$();
    $DvtSparkChartEventManager$$ != $DvtSparkChartDefaults$$ && $DvtChartPieLabelInfo$$ < $DvtChartTypeUtils$$ && ($DvtChartPieRenderUtils$$ = ($DvtChartTooltipUtils$$ - $DvtSparkChartAutomation$$ - $DvtChartTypeUtils$$) / ($DvtChartSeriesEffectUtils$$ - $DvtChartPieLabelUtils$$));
    return $DvtChartEventUtils$$.$_limitToGlobal$($dvt$$2$$, $DvtSparkChartAutomation$$ + $DvtChartSeriesEffectUtils$$ * $DvtChartPieRenderUtils$$, $DvtChartTooltipUtils$$ + $DvtChartPieLabelUtils$$ * $DvtChartPieRenderUtils$$);
  };
  $DvtChartEventUtils$$.$_convertToAxisCoord$ = function $$DvtChartEventUtils$$$$_convertToAxisCoord$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    var $DvtChartPieLabelUtils$$ = {}, $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$());
    $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? ($DvtChartPieLabelUtils$$.$xMin$ = $DvtChartTooltipUtils$$, $DvtChartPieLabelUtils$$.$xMax$ = $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$.$yMin$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartAutomation$$ : $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.$yMax$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$) : ($DvtChartPieLabelUtils$$.$xMin$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartAutomation$$ : 
    $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.$xMax$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$.$yMin$ = $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$.$yMax$ = $DvtChartTooltipUtils$$);
    return $DvtChartPieLabelUtils$$;
  };
  $DvtChartEventUtils$$.$_limitToGlobal$ = function $$DvtChartEventUtils$$$$_limitToGlobal$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getLinearGlobalMin$(), $DvtChartTooltipUtils$$ = $dvt$$2$$.$getLinearGlobalMax$();
    $DvtSparkChartDefaults$$ - $DvtSparkChartEventManager$$ >= $DvtChartTooltipUtils$$ - $DvtSparkChartAutomation$$ ? ($DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$) : $DvtSparkChartEventManager$$ < $DvtSparkChartAutomation$$ ? ($DvtSparkChartDefaults$$ += $DvtSparkChartAutomation$$ - $DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$) : $DvtSparkChartDefaults$$ > $DvtChartTooltipUtils$$ && ($DvtSparkChartEventManager$$ -= 
    $DvtSparkChartDefaults$$ - $DvtChartTooltipUtils$$, $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$);
    return $DvtChartEventUtils$$.$_getActualMinMax$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartEventUtils$$.$_getActualMinMax$ = function $$DvtChartEventUtils$$$$_getActualMinMax$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return {min:$dvt$$2$$.$linearToActual$($DvtSparkChartEventManager$$), max:$dvt$$2$$.$linearToActual$($DvtSparkChartDefaults$$)};
  };
  $DvtChartEventUtils$$.$getAxisStartEndGroup$ = function $$DvtChartEventUtils$$$$getAxisStartEndGroup$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $dvt$$2$$.$isGroupAxis$() && null != $DvtSparkChartEventManager$$ && null != $DvtSparkChartDefaults$$ && ($DvtSparkChartEventManager$$ = Math.ceil($DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ = Math.floor($DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$ >= $DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = $dvt$$2$$.$getInfo$().$getGroup$($DvtSparkChartEventManager$$), $dvt$$2$$ = $dvt$$2$$.$getInfo$().$getGroup$($DvtSparkChartDefaults$$), {$startGroup$:$DvtSparkChartEventManager$$, 
    $endGroup$:$dvt$$2$$}) : {$startGroup$:null, $endGroup$:null};
  };
  $DvtChartEventUtils$$.$setInitialSelection$ = function $$DvtChartEventUtils$$$$setInitialSelection$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getSelectionHandler$();
    if ($DvtSparkChartAutomation$$) {
      for (var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getChartObjPeers$(), $DvtChartSeriesEffectUtils$$ = [], $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartDefaults$$.length;$DvtChartPieLabelUtils$$++) {
        for (var $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartTooltipUtils$$.length;$DvtChartPieRenderUtils$$++) {
          var $DvtChartPieLabelInfo$$ = $DvtChartTooltipUtils$$[$DvtChartPieRenderUtils$$], $DvtChartTypeUtils$$ = $dvt$$2$$.$ArrayUtils$.isArray($DvtChartPieLabelInfo$$.$getGroup$()) ? $dvt$$2$$.$ArrayUtils$.$equals$($DvtChartPieLabelInfo$$.$getGroup$(), $DvtSparkChartDefaults$$[$DvtChartPieLabelUtils$$].group) : $DvtChartPieLabelInfo$$.$getGroup$() == $DvtSparkChartDefaults$$[$DvtChartPieLabelUtils$$].group;
          $DvtChartPieLabelInfo$$.$getSeries$() === $DvtSparkChartDefaults$$[$DvtChartPieLabelUtils$$].series && $DvtChartTypeUtils$$ && $DvtChartSeriesEffectUtils$$.push($DvtChartPieLabelInfo$$.getId());
        }
      }
      $DvtSparkChartAutomation$$.$processInitialSelections$($DvtChartSeriesEffectUtils$$, $DvtChartTooltipUtils$$);
    }
  };
  $DvtChartEventUtils$$.$getKeyboardNavigables$ = function $$DvtChartEventUtils$$$$getKeyboardNavigables$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [];
    if ($DvtChartTypeUtils$$.$isPie$($dvt$$2$$)) {
      for (var $DvtSparkChartDefaults$$ = $dvt$$2$$.$pieChart$.$_slices$, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
        $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getSeriesIndex$()) && $DvtSparkChartEventManager$$.push($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]);
      }
    } else {
      for ($dvt$$2$$ = $dvt$$2$$.$getChartObjPeers$(), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.length;$DvtSparkChartAutomation$$++) {
        $dvt$$2$$[$DvtSparkChartAutomation$$].$isNavigable$() && $DvtSparkChartEventManager$$.push($dvt$$2$$[$DvtSparkChartAutomation$$]);
      }
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartEventUtils$$.$isSeriesDrillable$ = function $$DvtChartEventUtils$$$$isSeriesDrillable$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ = null != $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.drilling : "inherit";
    if ("on" == $DvtSparkChartDefaults$$) {
      return !0;
    }
    if ("off" == $DvtSparkChartDefaults$$) {
      return !1;
    }
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().drilling;
    return "on" == $DvtSparkChartDefaults$$ || "seriesOnly" == $DvtSparkChartDefaults$$;
  };
  $DvtChartEventUtils$$.$isDataItemDrillable$ = function $$DvtChartEventUtils$$$$isDataItemDrillable$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$ = null != $DvtSparkChartEventManager$$ ? $DvtSparkChartEventManager$$.drilling : "inherit";
    if ("on" == $DvtSparkChartEventManager$$) {
      return !0;
    }
    if ("off" == $DvtSparkChartEventManager$$) {
      return !1;
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().drilling;
    return "on" == $DvtSparkChartEventManager$$;
  };
  var $DvtChartRefObjUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRefObjUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartRefObjUtils$$.$getRefObjs$ = function $$DvtChartRefObjUtils$$$$getRefObjs$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "x"), $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y");
    $dvt$$2$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y2");
    return $DvtSparkChartEventManager$$.concat($DvtSparkChartDefaults$$, $dvt$$2$$);
  };
  $DvtChartRefObjUtils$$.$getAxisRefObjs$ = function $$DvtChartRefObjUtils$$$$getAxisRefObjs$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$ + "Axis"] && $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$ + "Axis"].referenceObjects ? $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$ + "Axis"].referenceObjects : [];
  };
  $DvtChartRefObjUtils$$.$getType$ = function $$DvtChartRefObjUtils$$$$getType$$($dvt$$2$$) {
    return "area" == $dvt$$2$$.type ? "area" : "line";
  };
  $DvtChartRefObjUtils$$.$getLocation$ = function $$DvtChartRefObjUtils$$$$getLocation$$($dvt$$2$$) {
    return "front" == $dvt$$2$$.location ? "front" : "back";
  };
  $DvtChartRefObjUtils$$.$getColor$ = function $$DvtChartRefObjUtils$$$$getColor$$($dvt$$2$$) {
    return $dvt$$2$$.color ? $dvt$$2$$.color : "#333333";
  };
  $DvtChartRefObjUtils$$.$getLineWidth$ = function $$DvtChartRefObjUtils$$$$getLineWidth$$($dvt$$2$$) {
    return $dvt$$2$$.lineWidth ? $dvt$$2$$.lineWidth : 1;
  };
  $DvtChartRefObjUtils$$.$getLineType$ = function $$DvtChartRefObjUtils$$$$getLineType$$($dvt$$2$$) {
    return $dvt$$2$$.lineType ? $dvt$$2$$.lineType : "straight";
  };
  $DvtChartRefObjUtils$$.$isObjectRendered$ = function $$DvtChartRefObjUtils$$$$isObjectRendered$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
    if (0 < $DvtSparkChartAutomation$$.length) {
      var $DvtChartTooltipUtils$$ = $DvtChartRefObjUtils$$.$getRefObjCategories$($DvtSparkChartDefaults$$);
      if ($DvtChartTooltipUtils$$ && $dvt$$2$$.$ArrayUtils$.$hasAnyItem$($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$)) {
        return !1;
      }
    }
    return "hidden" != $DvtSparkChartDefaults$$.visibility;
  };
  $DvtChartRefObjUtils$$.getId = function $$DvtChartRefObjUtils$$$getId$($dvt$$2$$) {
    return null != $dvt$$2$$.id ? $dvt$$2$$.id : $dvt$$2$$.text;
  };
  $DvtChartRefObjUtils$$.$getRefObjCategories$ = function $$DvtChartRefObjUtils$$$$getRefObjCategories$$($dvt$$2$$) {
    return $dvt$$2$$.categories ? $dvt$$2$$.categories : [$DvtChartRefObjUtils$$.getId($dvt$$2$$)];
  };
  $DvtChartRefObjUtils$$.$getRefObj$ = function $$DvtChartRefObjUtils$$$$getRefObj$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getRefObjs$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      if ($DvtChartRefObjUtils$$.getId($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]) == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$];
      }
    }
  };
  $DvtChartRefObjUtils$$.$getLowValue$ = function $$DvtChartRefObjUtils$$$$getLowValue$$($dvt$$2$$) {
    return null == $dvt$$2$$ ? null : null != $dvt$$2$$.min ? $dvt$$2$$.min : $dvt$$2$$.low;
  };
  $DvtChartRefObjUtils$$.$getHighValue$ = function $$DvtChartRefObjUtils$$$$getHighValue$$($dvt$$2$$) {
    return null == $dvt$$2$$ ? null : null != $dvt$$2$$.max ? $dvt$$2$$.max : $dvt$$2$$.high;
  };
  $DvtChartRefObjUtils$$.$getXValue$ = function $$DvtChartRefObjUtils$$$$getXValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$] && null != $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].x ? $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].x : $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) && !$DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$) ? $DvtChartDataUtils$$.$getGroupLabel$($dvt$$2$$, $DvtSparkChartDefaults$$) : $DvtSparkChartDefaults$$;
  };
  var $DvtChartSeriesEffectUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartSeriesEffectUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartSeriesEffectUtils$$.$getBarFill$ = function $$DvtChartSeriesEffectUtils$$$$getBarFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ ? new $dvt$$2$$.$PatternFill$($DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$) : "gradient" == $DvtSparkChartAutomation$$ && 3 < $DvtChartPieLabelUtils$$ ? ($DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$ ? 270 : 0, $DvtChartSeriesEffectUtils$$.$_useAltaGradients$($DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartPieRenderUtils$$, -.09, .04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartPieRenderUtils$$, 
    -.04, -.05)], $DvtChartPieRenderUtils$$ = [0, 1]) : ($DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieRenderUtils$$, .15), $dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieRenderUtils$$, .45), $dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieRenderUtils$$, .25), $DvtChartPieRenderUtils$$, $dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieRenderUtils$$, .15), $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartPieRenderUtils$$, .9)], $DvtChartPieRenderUtils$$ = [0, .15, .3, .65, 
    .85, 1]), new $dvt$$2$$.$LinearGradientFill$($DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$, null, $DvtChartPieRenderUtils$$)) : new $dvt$$2$$.$SolidFill$($DvtChartPieRenderUtils$$);
  };
  $DvtChartSeriesEffectUtils$$.$getAreaFill$ = function $$DvtChartSeriesEffectUtils$$$$getAreaFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = "lineWithArea" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartTooltipUtils$$;
    ($DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtChartTooltipUtils$$.areaColor ? $DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$.areaColor : ($DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$ && ($DvtChartTooltipUtils$$ = $dvt$$2$$.$ColorUtils$.$setAlpha$($DvtChartTooltipUtils$$, .2)));
    var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$);
    return $DvtChartPieLabelUtils$$ ? new $dvt$$2$$.$PatternFill$($DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$) : "gradient" == $DvtChartPieRenderUtils$$ ? ($DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? 180 : 270, $DvtSparkChartAutomation$$ ? ($DvtSparkChartAutomation$$ = $dvt$$2$$.$ColorUtils$.$getAlpha$($DvtChartTooltipUtils$$), $DvtSparkChartAutomation$$ = [$dvt$$2$$.$ColorUtils$.$setAlpha$($DvtChartTooltipUtils$$, Math.min($DvtSparkChartAutomation$$ + 
    .2, 1)), $dvt$$2$$.$ColorUtils$.$setAlpha$($DvtChartTooltipUtils$$, Math.max($DvtSparkChartAutomation$$ - .15, 0))], $DvtChartTooltipUtils$$ = [0, 1]) : $DvtChartSeriesEffectUtils$$.$_useAltaGradients$($DvtSparkChartEventManager$$) ? ($DvtSparkChartAutomation$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartTooltipUtils$$, -.09, .04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartTooltipUtils$$, -.04, -.05)], $DvtChartTooltipUtils$$ = [0, 1]) : ($DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$isSpark$($DvtSparkChartEventManager$$) ? 
    [$dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartTooltipUtils$$, .5), $DvtChartTooltipUtils$$, $dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartTooltipUtils$$, .5)] : [$dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartTooltipUtils$$, .5), $DvtChartTooltipUtils$$, $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartTooltipUtils$$, .7)], $DvtChartTooltipUtils$$ = [0, .5, 1]), new $dvt$$2$$.$LinearGradientFill$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, null, $DvtChartTooltipUtils$$)) : new $dvt$$2$$.$SolidFill$($DvtChartTooltipUtils$$);
  };
  $DvtChartSeriesEffectUtils$$.$getMarkerFill$ = function $$DvtChartSeriesEffectUtils$$$$getMarkerFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if ($DvtChartPieLabelUtils$$) {
      return new $dvt$$2$$.$PatternFill$($DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$);
    }
    if ($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && "gradient" == $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$)) {
      if ($DvtChartSeriesEffectUtils$$.$_useAltaGradients$($DvtSparkChartEventManager$$)) {
        return $DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartTooltipUtils$$, -.09, .04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartTooltipUtils$$, -.04, -.05)], new $dvt$$2$$.$LinearGradientFill$(270, $DvtSparkChartEventManager$$, null, [0, 1]);
      }
      if ("human" == $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) {
        return $DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartTooltipUtils$$, .2), $dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartTooltipUtils$$, .1), $DvtChartTooltipUtils$$, $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartTooltipUtils$$, .8)], new $dvt$$2$$.$LinearGradientFill$(315, $DvtSparkChartEventManager$$, null, [0, .3, .7, 1]);
      }
      $DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartTooltipUtils$$, .15), $DvtChartTooltipUtils$$, $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartTooltipUtils$$, .9), $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartTooltipUtils$$, .8)];
      return new $dvt$$2$$.$RadialGradientFill$($DvtSparkChartEventManager$$, null, [0, .5, .75, 1]);
    }
    return new $dvt$$2$$.$SolidFill$($DvtChartTooltipUtils$$);
  };
  $DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$ = function $$DvtChartSeriesEffectUtils$$$$getFunnelSliceFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 0);
    var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && !$DvtChartSeriesEffectUtils$$ ? ($DvtChartTooltipUtils$$ = new $dvt$$2$$.$PatternFill$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), "vertical" == $DvtSparkChartEventManager$$.$getOptions$().orientation && ($dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? $DvtChartTooltipUtils$$.$setMatrix$(new $dvt$$2$$.$Matrix$(0, -1, 1, 0)) : $DvtChartTooltipUtils$$.$setMatrix$(new $dvt$$2$$.$Matrix$(0, 1, -1, 0))), $DvtChartTooltipUtils$$) : 
    "gradient" == $DvtChartPieLabelUtils$$ ? ("on" == $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.threeDEffect ? ($DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, 0, -.1), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, 0, .12), $DvtSparkChartAutomation$$], $DvtSparkChartAutomation$$ = [0, .65, 1]) : ($DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, -.09, .04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, 
    -.04, -.05)], $DvtSparkChartAutomation$$ = [0, 1]), new $dvt$$2$$.$LinearGradientFill$(90, $DvtSparkChartEventManager$$, null, $DvtSparkChartAutomation$$, [$DvtChartTooltipUtils$$.x, $DvtChartTooltipUtils$$.y, $DvtChartTooltipUtils$$.$w$, $DvtChartTooltipUtils$$.$h$])) : new $dvt$$2$$.$SolidFill$($DvtSparkChartAutomation$$);
  };
  $DvtChartSeriesEffectUtils$$.$_useAltaGradients$ = function $$DvtChartSeriesEffectUtils$$$$_useAltaGradients$$($dvt$$2$$) {
    return !$DvtChartDefaults$$.$isSkyrosSkin$($dvt$$2$$);
  };
  var $DvtChartStyleUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartStyleUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$ = ["bar", "line", "area"];
  $DvtChartStyleUtils$$.$getSeriesType$ = function $$DvtChartStyleUtils$$$$getSeriesType$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_optionsCache$.$getFromCachedMap$("seriesType", $DvtSparkChartEventManager$$);
    if ($DvtSparkChartDefaults$$) {
      return $DvtSparkChartDefaults$$;
    }
    if (!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return $dvt$$2$$.$_optionsCache$.$putToCachedMap$("seriesType", $DvtSparkChartEventManager$$, "auto"), "auto";
    }
    $DvtSparkChartDefaults$$ = ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) ? $DvtSparkChartDefaults$$.type : null;
    $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) || "candlestick" != $DvtSparkChartDefaults$$ || ($DvtSparkChartDefaults$$ = "auto");
    $DvtSparkChartDefaults$$ && "auto" != $DvtSparkChartDefaults$$ || ($DvtChartTypeUtils$$.$isBar$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "bar" : $DvtChartTypeUtils$$.$isLine$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "line" : $DvtChartTypeUtils$$.$isArea$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "area" : $DvtChartTypeUtils$$.$isLineWithArea$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "lineWithArea" : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "candlestick" : $DvtChartTypeUtils$$.$isCombo$($dvt$$2$$) && 
    ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($dvt$$2$$, $DvtSparkChartEventManager$$) % $DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$.length, $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$[$DvtSparkChartDefaults$$]));
    $dvt$$2$$.$_optionsCache$.$putToCachedMap$("seriesType", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartStyleUtils$$.$isRangeSeries$ = function $$DvtChartStyleUtils$$$$isRangeSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_optionsCache$.$getFromCachedMap$("isRange", $DvtSparkChartEventManager$$);
    if (null != $DvtSparkChartDefaults$$) {
      return $DvtSparkChartDefaults$$;
    }
    var $DvtSparkChartDefaults$$ = !1, $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$);
    if ("bar" == $DvtSparkChartAutomation$$ || "area" == $DvtSparkChartAutomation$$) {
      for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);$DvtSparkChartAutomation$$++) {
        if (null != $DvtChartDataUtils$$.$getLowValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) || null != $DvtChartDataUtils$$.$getHighValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$)) {
          $DvtSparkChartDefaults$$ = !0;
          break;
        }
      }
    }
    $dvt$$2$$.$_optionsCache$.$putToCachedMap$("isRange", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartStyleUtils$$.$getSeriesEffect$ = function $$DvtChartStyleUtils$$$$getSeriesEffect$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.seriesEffect;
  };
  $DvtChartStyleUtils$$.$getColor$ = function $$DvtChartStyleUtils$$$$getColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.color) {
      return $DvtSparkChartAutomation$$.color;
    }
    if ("candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$)) {
      return $DvtChartStyleUtils$$.$getStockItemColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    }
    if (($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartDefaults$$.color) {
      return $DvtSparkChartDefaults$$.color;
    }
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.styleDefaults.colors;
    $dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($dvt$$2$$, $DvtSparkChartEventManager$$) % $DvtSparkChartAutomation$$.length;
    return $DvtSparkChartDefaults$$.styleDefaults.colors[$dvt$$2$$];
  };
  $DvtChartStyleUtils$$.$getStockItemColor$ = function $$DvtChartStyleUtils$$$$getStockItemColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartDataUtils$$.$isStockValueRising$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtSparkChartAutomation$$.styleDefaults.stockRisingColor : $DvtSparkChartAutomation$$.styleDefaults.stockFallingColor;
  };
  $DvtChartStyleUtils$$.$getStockVolumeColor$ = function $$DvtChartStyleUtils$$$$getStockVolumeColor$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, 0, $DvtSparkChartEventManager$$);
    if ($DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.color) {
      return $DvtSparkChartDefaults$$.color;
    }
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    return $DvtSparkChartDefaults$$.styleDefaults.stockVolumeColor ? $DvtSparkChartDefaults$$.styleDefaults.stockVolumeColor : $DvtChartStyleUtils$$.$getStockItemColor$($dvt$$2$$, 0, $DvtSparkChartEventManager$$);
  };
  $DvtChartStyleUtils$$.$getSplitterPosition$ = function $$DvtChartStyleUtils$$$$getSplitterPosition$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().splitterPosition;
    return null != $DvtSparkChartEventManager$$ ? $DvtSparkChartEventManager$$ : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? .8 : .5;
  };
  $DvtChartStyleUtils$$.$getPattern$ = function $$DvtChartStyleUtils$$$$getPattern$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if ($DvtChartTooltipUtils$$ && $DvtChartTooltipUtils$$.pattern && "auto" != $DvtChartTooltipUtils$$.pattern) {
      return $DvtChartTooltipUtils$$.pattern;
    }
    $DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if (("line" == $DvtChartTooltipUtils$$ || "area" == $DvtChartTooltipUtils$$) && null != $DvtSparkChartAutomation$$) {
      return null;
    }
    if (($DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtChartTooltipUtils$$.pattern && "auto" != $DvtChartTooltipUtils$$.pattern) {
      return $DvtChartTooltipUtils$$.pattern;
    }
    if ("pattern" == $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$)) {
      if ($DvtChartTypeUtils$$.$isStock$ && "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
        return $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$isStockValueRising$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtSparkChartEventManager$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtSparkChartDefaults$$ ? $DvtSparkChartEventManager$$ ? "smallDiagonalLeft" : "smallDiagonalRight" : $DvtSparkChartEventManager$$ ? "smallDiagonalRight" : "smallDiagonalLeft";
      }
      $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$();
      $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.styleDefaults.patterns;
      $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) % $DvtChartTooltipUtils$$.length;
      return $DvtSparkChartAutomation$$.styleDefaults.patterns[$DvtSparkChartEventManager$$];
    }
    return null;
  };
  $DvtChartStyleUtils$$.$getMarkerBorderColor$ = function $$DvtChartStyleUtils$$$$getMarkerBorderColor$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtChartTooltipUtils$$ ? $DvtChartTooltipUtils$$ : 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$) && "lineWithArea" != $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtChartStyleUtils$$.$getBackgroundColor$($DvtSparkChartEventManager$$, !0) : $DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && !$DvtChartDefaults$$.$isSkyrosSkin$($DvtSparkChartEventManager$$) && "gradient" != $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$) && 
    ($DvtSparkChartEventManager$$ = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) ? $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, .15, -.25) : null;
  };
  $DvtChartStyleUtils$$.$getBorderColor$ = function $$DvtChartStyleUtils$$$$getBorderColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if (($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.borderColor) {
      return $DvtSparkChartDefaults$$.borderColor;
    }
    if (($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartEventManager$$.borderColor) {
      return $DvtSparkChartEventManager$$.borderColor;
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().styleDefaults;
    return "auto" != $dvt$$2$$.borderColor ? $dvt$$2$$.borderColor : null;
  };
  $DvtChartStyleUtils$$.$getBorderWidth$ = function $$DvtChartStyleUtils$$$$getBorderWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if (($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.borderWidth) {
      return $DvtSparkChartDefaults$$.borderWidth;
    }
    if (($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartEventManager$$.borderWidth) {
      return $DvtSparkChartEventManager$$.borderWidth;
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults;
    return "auto" != $DvtSparkChartEventManager$$.borderWidth ? $DvtSparkChartEventManager$$.borderWidth : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || $DvtChartTypeUtils$$.$isLineArea$($dvt$$2$$) ? 1.25 : 1;
  };
  $DvtChartStyleUtils$$.$getMarkerColor$ = function $$DvtChartStyleUtils$$$$getMarkerColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if (!$DvtChartStyleUtils$$.$isMarkerDisplayed$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    }
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.color ? $DvtSparkChartAutomation$$.color : ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartAutomation$$.markerColor ? $DvtSparkChartAutomation$$.markerColor : ($DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$().styleDefaults.markerColor) ? $DvtSparkChartAutomation$$ : $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartStyleUtils$$.$getMarkerShape$ = function $$DvtChartStyleUtils$$$$getMarkerShape$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$(), $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.styleDefaults.markerShape, $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $DvtChartSeriesEffectUtils$$ && $DvtChartSeriesEffectUtils$$.markerShape && ($DvtChartTooltipUtils$$ = $DvtChartSeriesEffectUtils$$.markerShape);
    ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.markerShape && ($DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.markerShape);
    "auto" == $DvtChartTooltipUtils$$ && ("bubble" == $dvt$$2$$.$getType$() || $DvtChartStyleUtils$$.$isRangeSeries$($dvt$$2$$, $DvtSparkChartEventManager$$) ? $DvtChartTooltipUtils$$ = "circle" : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.styleDefaults.shapes, $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$[$dvt$$2$$ % $DvtSparkChartAutomation$$.length]));
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartStyleUtils$$.$getMarkerSize$ = function $$DvtChartStyleUtils$$$$getMarkerSize$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$ = ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && null != $DvtSparkChartDefaults$$.markerSize ? Number($DvtSparkChartDefaults$$.markerSize) : ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && null != $DvtSparkChartEventManager$$.markerSize ? Number($DvtSparkChartEventManager$$.markerSize) : Number($dvt$$2$$.$getOptions$().styleDefaults.markerSize);
    $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) && ($DvtSparkChartEventManager$$ = Math.ceil(.6 * $DvtSparkChartEventManager$$));
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartStyleUtils$$.$isMarkerDisplayed$ = function $$DvtChartStyleUtils$$$$isMarkerDisplayed$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$ = ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && null != $DvtSparkChartDefaults$$.markerDisplayed ? $DvtSparkChartDefaults$$.markerDisplayed : ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && null != $DvtSparkChartDefaults$$.markerDisplayed ? $DvtSparkChartDefaults$$.markerDisplayed : $dvt$$2$$.$getOptions$().styleDefaults.markerDisplayed;
    return "on" == $DvtSparkChartDefaults$$ ? !0 : "off" == $DvtSparkChartDefaults$$ ? !1 : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || "none" == $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartEventManager$$);
  };
  $DvtChartStyleUtils$$.$getImageSource$ = function $$DvtChartStyleUtils$$$$getImageSource$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$;
    ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$] ? $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$] : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $dvt$$2$$[$DvtSparkChartAutomation$$] && ($DvtChartTooltipUtils$$ = $dvt$$2$$[$DvtSparkChartAutomation$$]);
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartStyleUtils$$.$getLineWidth$ = function $$DvtChartStyleUtils$$$$getLineWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.lineWidth ? $DvtSparkChartDefaults$$.lineWidth : $DvtSparkChartAutomation$$.styleDefaults.lineWidth ? $DvtSparkChartAutomation$$.styleDefaults.lineWidth : "lineWithArea" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) ? 
    2 : 3;
    $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) && ($DvtSparkChartDefaults$$ = Math.ceil(.6 * $DvtSparkChartDefaults$$));
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartStyleUtils$$.$getLineStyle$ = function $$DvtChartStyleUtils$$$$getLineStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.lineStyle ? $DvtSparkChartDefaults$$.lineStyle : $dvt$$2$$.$getOptions$().styleDefaults.lineStyle;
  };
  $DvtChartStyleUtils$$.$getLineType$ = function $$DvtChartStyleUtils$$$$getLineType$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$;
    $DvtSparkChartDefaults$$ = ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartDefaults$$.lineType ? $DvtSparkChartDefaults$$.lineType : $dvt$$2$$.$getOptions$().styleDefaults.lineType;
    "auto" == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) ? "none" : "straight");
    if ($DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$)) {
      "centeredSegmented" == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = "segmented"), "centeredStepped" == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = "stepped");
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartStyleUtils$$.$getBarSpacing$ = function $$DvtChartStyleUtils$$$$getBarSpacing$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().__sparkBarSpacing;
  };
  $DvtChartStyleUtils$$.$getBarGapRatio$ = function $$DvtChartStyleUtils$$$$getBarGapRatio$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_cache$.$getFromCache$("barGapRatio");
    if ($DvtSparkChartEventManager$$) {
      return $DvtSparkChartEventManager$$;
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.barGapRatio;
    "string" == typeof $DvtSparkChartEventManager$$ && "%" == $DvtSparkChartEventManager$$.slice(-1) && ($DvtSparkChartEventManager$$ = Number($DvtSparkChartEventManager$$.slice(0, -1)) / 100);
    if (null != $DvtSparkChartEventManager$$ && !isNaN($DvtSparkChartEventManager$$)) {
      return $DvtSparkChartEventManager$$;
    }
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getStackCategories$($dvt$$2$$, "bar"), $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$.y.length, $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.y2.length, $DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isSplitDualY$($dvt$$2$$) ? Math.max($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : $DvtSparkChartEventManager$$ + $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? 
    1 == $DvtSparkChartEventManager$$ ? 0 : .25 : 1 == $DvtSparkChartEventManager$$ ? .37 + .26 / $DvtChartDataUtils$$.$getViewportGroupCount$($dvt$$2$$) : .25;
    $dvt$$2$$.$_cache$.$putToCache$("barGapRatio", $DvtSparkChartEventManager$$);
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartStyleUtils$$.$getMaxBarWidth$ = function $$DvtChartStyleUtils$$$$getMaxBarWidth$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.maxBarWidth;
    return null == $DvtSparkChartEventManager$$ || $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? Infinity : $DvtSparkChartEventManager$$;
  };
  $DvtChartStyleUtils$$.$getBarWidth$ = function $$DvtChartStyleUtils$$$$getBarWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getZValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 1) / $dvt$$2$$.$getOptions$()._averageGroupZ;
    return Math.min($DvtSparkChartEventManager$$ * $DvtChartStyleUtils$$.$getGroupWidth$($dvt$$2$$), $DvtChartStyleUtils$$.$getMaxBarWidth$($dvt$$2$$));
  };
  $DvtChartStyleUtils$$.$getBarStackWidth$ = function $$DvtChartStyleUtils$$$$getBarStackWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$ ? "y2BarStackWidth" : "yBarStackWidth", $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$($DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ($DvtChartSeriesEffectUtils$$) {
      return $DvtChartSeriesEffectUtils$$;
    }
    $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getBarCategoryZ$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) / $dvt$$2$$.$getOptions$()._averageGroupZ;
    $DvtChartSeriesEffectUtils$$ = Math.min($DvtSparkChartAutomation$$ * $DvtChartStyleUtils$$.$getGroupWidth$($dvt$$2$$), $DvtChartStyleUtils$$.$getMaxBarWidth$($dvt$$2$$));
    $dvt$$2$$.$_cache$.$putToCachedMap2D$($DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartSeriesEffectUtils$$);
    return $DvtChartSeriesEffectUtils$$;
  };
  $DvtChartStyleUtils$$.$getBarCategoryOffsetMap$ = function $$DvtChartStyleUtils$$$$getBarCategoryOffsetMap$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_cache$.$getFromCachedMap2D$("barCategoryOffsetMap", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ($DvtSparkChartAutomation$$) {
      return $DvtSparkChartAutomation$$;
    }
    var $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getStackCategories$($dvt$$2$$, "bar"), $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$), $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isSplitDualY$($dvt$$2$$), $DvtChartPieLabelUtils$$ = {}, $DvtChartPieRenderUtils$$ = {}, $DvtChartPieLabelInfo$$ = 0, $DvtChartDataChangeFunnelSlice$$ = 0, $DvtChartLineMarker$$, $DvtChartMarkerUtils$$;
    if ($DvtSparkChartDefaults$$) {
      for ($DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartTooltipUtils$$.y.length;$DvtChartMarkerUtils$$++) {
        $DvtChartLineMarker$$ = $DvtChartStyleUtils$$.$getBarStackWidth$($dvt$$2$$, $DvtChartTooltipUtils$$.y[$DvtChartMarkerUtils$$], $DvtSparkChartEventManager$$, !1), $DvtSparkChartAutomation$$ ? $DvtChartPieLabelUtils$$[$DvtChartTooltipUtils$$.y[$DvtChartMarkerUtils$$]] = -.5 * $DvtChartLineMarker$$ : ($DvtChartPieLabelUtils$$[$DvtChartTooltipUtils$$.y[$DvtChartMarkerUtils$$]] = $DvtChartPieLabelInfo$$, $DvtChartPieLabelInfo$$ += $DvtChartLineMarker$$);
      }
      $DvtChartSeriesEffectUtils$$ || ($DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelInfo$$);
      for ($DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartTooltipUtils$$.y2.length;$DvtChartMarkerUtils$$++) {
        $DvtChartLineMarker$$ = $DvtChartStyleUtils$$.$getBarStackWidth$($dvt$$2$$, $DvtChartTooltipUtils$$.y2[$DvtChartMarkerUtils$$], $DvtSparkChartEventManager$$, !0), $DvtSparkChartAutomation$$ ? $DvtChartPieRenderUtils$$[$DvtChartTooltipUtils$$.y2[$DvtChartMarkerUtils$$]] = -.5 * $DvtChartLineMarker$$ : ($DvtChartPieRenderUtils$$[$DvtChartTooltipUtils$$.y2[$DvtChartMarkerUtils$$]] = $DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeFunnelSlice$$ += $DvtChartLineMarker$$);
      }
      $DvtChartSeriesEffectUtils$$ || ($DvtChartPieLabelInfo$$ = $DvtChartDataChangeFunnelSlice$$);
    } else {
      for ($DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);$DvtChartMarkerUtils$$++) {
        if ($DvtChartLineMarker$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartMarkerUtils$$), ("bar" == $DvtChartLineMarker$$ || "candlestick" == $DvtChartLineMarker$$) && $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartMarkerUtils$$)) {
          var $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartMarkerUtils$$), $DvtChartDataChangeLineArea$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartMarkerUtils$$);
          $DvtChartLineMarker$$ = $DvtChartStyleUtils$$.$getBarWidth$($dvt$$2$$, $DvtChartMarkerUtils$$, $DvtSparkChartEventManager$$);
          $DvtChartTooltipUtils$$ ? $DvtSparkChartAutomation$$ ? $DvtChartPieRenderUtils$$[$DvtChartDataChangeLineArea$$] = -.5 * $DvtChartLineMarker$$ : ($DvtChartPieRenderUtils$$[$DvtChartDataChangeLineArea$$] = $DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeFunnelSlice$$ += $DvtChartLineMarker$$) : $DvtSparkChartAutomation$$ ? $DvtChartPieLabelUtils$$[$DvtChartDataChangeLineArea$$] = -.5 * $DvtChartLineMarker$$ : ($DvtChartPieLabelUtils$$[$DvtChartDataChangeLineArea$$] = $DvtChartPieLabelInfo$$, 
          $DvtChartPieLabelInfo$$ += $DvtChartLineMarker$$);
        }
      }
    }
    for ($DvtChartDataChangeLineArea$$ in $DvtChartPieLabelUtils$$) {
      $DvtChartPieLabelUtils$$[$DvtChartDataChangeLineArea$$] -= $DvtChartSeriesEffectUtils$$ || $DvtSparkChartDefaults$$ ? $DvtChartPieLabelInfo$$ / 2 : ($DvtChartPieLabelInfo$$ + $DvtChartDataChangeFunnelSlice$$) / 2;
    }
    for ($DvtChartDataChangeLineArea$$ in $DvtChartPieRenderUtils$$) {
      $DvtChartPieRenderUtils$$[$DvtChartDataChangeLineArea$$] -= $DvtChartSeriesEffectUtils$$ || $DvtSparkChartDefaults$$ ? $DvtChartDataChangeFunnelSlice$$ / 2 : ($DvtChartPieLabelInfo$$ + $DvtChartDataChangeFunnelSlice$$) / 2 - $DvtChartPieLabelInfo$$;
    }
    $DvtSparkChartAutomation$$ = {y:$DvtChartPieLabelUtils$$, y2:$DvtChartPieRenderUtils$$};
    $dvt$$2$$.$_cache$.$putToCachedMap2D$("barCategoryOffsetMap", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartStyleUtils$$.$getDataItemGaps$ = function $$DvtChartStyleUtils$$$$getDataItemGaps$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    if ($DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$) && "on" == $DvtSparkChartEventManager$$.styleDefaults.funnelSliceGaps) {
      return 1;
    }
    if (null != $DvtSparkChartEventManager$$.styleDefaults.sliceGaps) {
      return $DvtSparkChartEventManager$$.styleDefaults.sliceGaps;
    }
    $dvt$$2$$ = $DvtSparkChartEventManager$$.styleDefaults.dataItemGaps;
    "auto" == $dvt$$2$$ && ($dvt$$2$$ = "on" == $DvtSparkChartEventManager$$.styleDefaults.threeDEffect ? "0%" : "50%");
    $DvtSparkChartEventManager$$ = $dvt$$2$$ && $dvt$$2$$.indexOf ? $dvt$$2$$.indexOf("%") : -1;
    return 0 <= $DvtSparkChartEventManager$$ ? ($dvt$$2$$ = $dvt$$2$$.substring(0, $DvtSparkChartEventManager$$), $dvt$$2$$ / 100) : 0;
  };
  $DvtChartStyleUtils$$.$isSelectable$ = function $$DvtChartStyleUtils$$$$isSelectable$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartAutomation$$ && "off" == $DvtSparkChartAutomation$$._selectable ? !1 : $dvt$$2$$.$isSelectionSupported$() && 0 <= $DvtSparkChartEventManager$$ && 0 <= $DvtSparkChartDefaults$$;
  };
  $DvtChartStyleUtils$$.$isSeriesRendered$ = function $$DvtChartStyleUtils$$$$isSeriesRendered$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
    return 0 < $DvtSparkChartAutomation$$.length && $dvt$$2$$.$ArrayUtils$.$hasAnyItem$($DvtSparkChartAutomation$$, $DvtChartDataUtils$$.$getSeriesCategories$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) ? !1 : !0;
  };
  $DvtChartStyleUtils$$.$isDataItemRendered$ = function $$DvtChartStyleUtils$$$$isDataItemRendered$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if ($DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      var $DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
      if (0 < $DvtChartTooltipUtils$$.length) {
        if ($DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$)) {
          $DvtSparkChartAutomation$$ = 0;
        }
        if ($dvt$$2$$.$ArrayUtils$.$hasAnyItem$($DvtChartTooltipUtils$$, $DvtChartDataUtils$$.$getDataItemCategories$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$))) {
          return !1;
        }
      }
    } else {
      return !1;
    }
    return !0;
  };
  $DvtChartStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtChartStyleUtils$$$$getAnimationOnDisplay$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().animationOnDisplay;
  };
  $DvtChartStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtChartStyleUtils$$$$getAnimationOnDataChange$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().animationOnDataChange;
  };
  $DvtChartStyleUtils$$.$getAnimationDuration$ = function $$DvtChartStyleUtils$$$$getAnimationDuration$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$StyleUtils$.$getTimeMilliseconds$($DvtSparkChartEventManager$$.$getOptions$().styleDefaults.animationDuration) / 1E3;
  };
  $DvtChartStyleUtils$$.$getAnimationIndicators$ = function $$DvtChartStyleUtils$$$$getAnimationIndicators$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.animationIndicators;
  };
  $DvtChartStyleUtils$$.$getAnimationUpColor$ = function $$DvtChartStyleUtils$$$$getAnimationUpColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.animationUpColor;
  };
  $DvtChartStyleUtils$$.$getAnimationDownColor$ = function $$DvtChartStyleUtils$$$$getAnimationDownColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.animationDownColor;
  };
  $DvtChartStyleUtils$$.$getHiddenCategories$ = function $$DvtChartStyleUtils$$$$getHiddenCategories$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$();
    $dvt$$2$$.hiddenCategories || ($dvt$$2$$.hiddenCategories = []);
    return $dvt$$2$$.hiddenCategories;
  };
  $DvtChartStyleUtils$$.$getHighlightedCategories$ = function $$DvtChartStyleUtils$$$$getHighlightedCategories$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$();
    $dvt$$2$$.highlightedCategories || ($dvt$$2$$.highlightedCategories = []);
    return $dvt$$2$$.highlightedCategories;
  };
  $DvtChartStyleUtils$$.$getSelectedInnerColor$ = function $$DvtChartStyleUtils$$$$getSelectedInnerColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.selectedInnerColor;
  };
  $DvtChartStyleUtils$$.$getSelectedOuterColor$ = function $$DvtChartStyleUtils$$$$getSelectedOuterColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.selectedOuterColor;
  };
  $DvtChartStyleUtils$$.$isSelectionHighlighted$ = function $$DvtChartStyleUtils$$$$isSelectionHighlighted$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().styleDefaults.selectionEffect;
    return "highlight" == $dvt$$2$$ || "highlightAndExplode" == $dvt$$2$$;
  };
  $DvtChartStyleUtils$$.$isSelectionExploded$ = function $$DvtChartStyleUtils$$$$isSelectionExploded$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().styleDefaults.selectionEffect;
    return "explode" == $dvt$$2$$ || "highlightAndExplode" == $dvt$$2$$;
  };
  $DvtChartStyleUtils$$.$getDataLabelStyle$ = function $$DvtChartStyleUtils$$$$getDataLabelStyle$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieRenderUtils$$ = [], $DvtChartPieLabelInfo$$;
    !$DvtChartTooltipUtils$$ || "bar" != $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) && !$DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) || "center" != $DvtChartSeriesEffectUtils$$ && "inBottom" != $DvtChartSeriesEffectUtils$$ && "inTop" != $DvtChartSeriesEffectUtils$$ && "inRight" != $DvtChartSeriesEffectUtils$$ && "inLeft" != $DvtChartSeriesEffectUtils$$ ? $DvtChartPieRenderUtils$$.push(new $dvt$$2$$.$CSSStyle$("color: #333333;")) : 
    ($DvtChartPieLabelInfo$$ = null != $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) ? "#000000" : $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$($DvtChartTooltipUtils$$), $DvtChartPieRenderUtils$$.push(new $dvt$$2$$.$CSSStyle$("color: " + $DvtChartPieLabelInfo$$ + ";")));
    $DvtChartPieRenderUtils$$.push($DvtChartStyleUtils$$.$_parseLowHighArray$($DvtSparkChartEventManager$$.$getOptions$().styleDefaults.dataLabelStyle, $DvtChartPieLabelUtils$$));
    $DvtChartPieRenderUtils$$.push(new $dvt$$2$$.$CSSStyle$($DvtChartStyleUtils$$.$_parseLowHighArray$($DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$).labelStyle, $DvtChartPieLabelUtils$$)));
    $DvtChartPieLabelInfo$$ && $dvt$$2$$.$Agent$.$isHighContrast$() && $DvtChartPieRenderUtils$$.push(new $dvt$$2$$.$CSSStyle$("color: " + $DvtChartPieLabelInfo$$ + ";"));
    return $dvt$$2$$.$CSSStyle$.$mergeStyles$($DvtChartPieRenderUtils$$);
  };
  $DvtChartStyleUtils$$.$getDataLabelPosition$ = function $$DvtChartStyleUtils$$$$getDataLabelPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieRenderUtils$$;
    if ($DvtChartSeriesEffectUtils$$) {
      $DvtChartPieRenderUtils$$ = "outsideBarEdge";
    } else {
      if (($DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$.labelPosition) || ($DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.dataLabelPosition), $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$_parseLowHighArray$($DvtChartPieRenderUtils$$, $DvtChartTooltipUtils$$), "none" == $DvtChartPieRenderUtils$$) {
        return "none";
      }
    }
    var $DvtChartPieLabelInfo$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartLineMarker$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$);
    if ($DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$)) {
      return "center";
    }
    if ("bar" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      if ("center" == $DvtChartPieRenderUtils$$ || $DvtChartLineMarker$$) {
        return "center";
      }
      $DvtChartLineMarker$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$);
      if ("insideBarEdge" != $DvtChartPieRenderUtils$$) {
        if ($DvtChartLineMarker$$ && !$DvtChartSeriesEffectUtils$$) {
          return "center";
        }
        "outsideBarEdge" != $DvtChartPieRenderUtils$$ && ($DvtChartPieRenderUtils$$ = "insideBarEdge");
      }
      "insideBarEdge" != $DvtChartPieRenderUtils$$ || $DvtChartLineMarker$$ || ($DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.dataLabelStyle, $DvtChartDataChangeFunnelSlice$$ ? ($DvtChartLineMarker$$ = $DvtChartDataUtils$$.$getDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$), $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$TextUtils$.$getTextStringWidth$($DvtSparkChartEventManager$$.$getCtx$(), 
      $DvtChartLineMarker$$, $DvtChartSeriesEffectUtils$$)) : $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$TextUtils$.$getTextStringHeight$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartSeriesEffectUtils$$), $DvtChartLineMarker$$ = $DvtChartDataUtils$$.$getBarInfo$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), Math.abs($DvtChartLineMarker$$.$baseCoord$ - $DvtChartLineMarker$$.$yCoord$) <= $DvtChartSeriesEffectUtils$$ && ($DvtChartPieRenderUtils$$ = "outsideBarEdge"));
      $DvtSparkChartEventManager$$ = "low" == $DvtChartTooltipUtils$$ ? $DvtChartPieLabelUtils$$.low <= $DvtChartPieLabelUtils$$.high : "high" == $DvtChartTooltipUtils$$ ? $DvtChartPieLabelUtils$$.high < $DvtChartPieLabelUtils$$.low : 0 > $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      return "outsideBarEdge" == $DvtChartPieRenderUtils$$ ? $DvtChartDataChangeFunnelSlice$$ ? !$DvtSparkChartEventManager$$ && !$DvtChartPieLabelInfo$$ || $DvtSparkChartEventManager$$ && $DvtChartPieLabelInfo$$ ? "right" : "left" : $DvtSparkChartEventManager$$ ? "bottom" : "top" : $DvtChartDataChangeFunnelSlice$$ ? !$DvtSparkChartEventManager$$ && !$DvtChartPieLabelInfo$$ || $DvtSparkChartEventManager$$ && $DvtChartPieLabelInfo$$ ? "inRight" : "inLeft" : $DvtSparkChartEventManager$$ ? "inBottom" : 
      "inTop";
    }
    if ("center" == $DvtChartPieRenderUtils$$) {
      return "center";
    }
    if ("belowMarker" == $DvtChartPieRenderUtils$$) {
      return "bottom";
    }
    if ("aboveMarker" == $DvtChartPieRenderUtils$$) {
      return "top";
    }
    if ("afterMarker" != $DvtChartPieRenderUtils$$ && "beforeMarker" != $DvtChartPieRenderUtils$$) {
      if ($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$)) {
        return "center";
      }
      if ("low" != $DvtChartTooltipUtils$$ || $DvtChartLineMarker$$) {
        if ("high" != $DvtChartTooltipUtils$$ || $DvtChartLineMarker$$) {
          $DvtChartPieRenderUtils$$ = "afterMarker";
        } else {
          if ($DvtChartDataChangeFunnelSlice$$) {
            $DvtChartPieRenderUtils$$ = "afterMarker";
          } else {
            return "top";
          }
        }
      } else {
        if ($DvtChartDataChangeFunnelSlice$$) {
          $DvtChartPieRenderUtils$$ = "beforeMarker";
        } else {
          return "bottom";
        }
      }
    }
    return !$DvtChartPieLabelInfo$$ && "afterMarker" == $DvtChartPieRenderUtils$$ || $DvtChartPieLabelInfo$$ && "beforeMarker" == $DvtChartPieRenderUtils$$ ? "right" : "left";
  };
  $DvtChartStyleUtils$$.$_parseLowHighArray$ = function $$DvtChartStyleUtils$$$$_parseLowHighArray$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $dvt$$2$$ instanceof Array ? "high" == $DvtSparkChartEventManager$$ ? $dvt$$2$$[1] : $dvt$$2$$[0] : $dvt$$2$$;
  };
  $DvtChartStyleUtils$$.$isOverviewRendered$ = function $$DvtChartStyleUtils$$$$isOverviewRendered$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTypeUtils$$.$isOverviewSupported$($dvt$$2$$) && "off" != $DvtSparkChartEventManager$$.overview.rendered;
  };
  $DvtChartStyleUtils$$.$getOverviewHeight$ = function $$DvtChartStyleUtils$$$$getOverviewHeight$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().overview.height;
    null == $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ = $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) ? .25 : .2);
    return $DvtChartStyleUtils$$.$getSizeInPixels$($DvtSparkChartEventManager$$, $dvt$$2$$.getHeight());
  };
  $DvtChartStyleUtils$$.$getSizeInPixels$ = function $$DvtChartStyleUtils$$$$getSizeInPixels$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ("string" == typeof $dvt$$2$$) {
      if ("%" == $dvt$$2$$.slice(-1)) {
        return $DvtSparkChartEventManager$$ * Number($dvt$$2$$.slice(0, -1)) / 100;
      }
      if ("px" == $dvt$$2$$.slice(-2)) {
        return Number($dvt$$2$$.slice(0, -2));
      }
      $dvt$$2$$ = Number($dvt$$2$$);
    }
    return "number" == typeof $dvt$$2$$ ? 1 >= $dvt$$2$$ ? $DvtSparkChartEventManager$$ * $dvt$$2$$ : $dvt$$2$$ : 0;
  };
  $DvtChartStyleUtils$$.$getBackgroundColor$ = function $$DvtChartStyleUtils$$$$getBackgroundColor$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    return $DvtSparkChartDefaults$$.plotArea.backgroundColor ? $DvtSparkChartDefaults$$.plotArea.backgroundColor : $DvtSparkChartEventManager$$ ? "#FFFFFF" : null;
  };
  $DvtChartStyleUtils$$.$getHoverBehaviorDelay$ = function $$DvtChartStyleUtils$$$$getHoverBehaviorDelay$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.hoverBehaviorDelay;
    return $DvtSparkChartDefaults$$ ? ($DvtSparkChartDefaults$$ = $dvt$$2$$.$StyleUtils$.$getTimeMilliseconds$($DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isLine$($DvtSparkChartEventManager$$) ? .75 * $DvtSparkChartDefaults$$ : 1.25 * $DvtSparkChartDefaults$$) : 0;
  };
  $DvtChartStyleUtils$$.$optimizeMarkerStroke$ = function $$DvtChartStyleUtils$$$$optimizeMarkerStroke$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$);
  };
  $DvtChartStyleUtils$$.$getGroupWidth$ = function $$DvtChartStyleUtils$$$$getGroupWidth$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_cache$.$getFromCache$("groupWidth");
    null == $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ = $dvt$$2$$.$xAxis$.$getInfo$().$getGroupWidth$(), $dvt$$2$$.$_cache$.$putToCache$("groupWidth", $DvtSparkChartEventManager$$));
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartStyleUtils$$.$isStackLabelRendered$ = function $$DvtChartStyleUtils$$$$isStackLabelRendered$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTypeUtils$$.$isStacked$($dvt$$2$$) && "on" == $DvtSparkChartEventManager$$.stackLabel ? !0 : !1;
  };
  $DvtChartStyleUtils$$.$optimizeMarkerFill$ = function $$DvtChartStyleUtils$$$$optimizeMarkerFill$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isLineArea$($dvt$$2$$);
  };
  $DvtChartStyleUtils$$.$getClassName$ = function $$DvtChartStyleUtils$$$$getClassName$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.className ? $DvtSparkChartDefaults$$.className : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $dvt$$2$$.className ? $dvt$$2$$.className : null;
  };
  $DvtChartStyleUtils$$.$getAreaClassName$ = function $$DvtChartStyleUtils$$$$getAreaClassName$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.areaClassName ? $DvtSparkChartDefaults$$.areaClassName : $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.className ? $DvtSparkChartDefaults$$.className : null;
  };
  $DvtChartStyleUtils$$.$getMarkerClassName$ = function $$DvtChartStyleUtils$$$$getMarkerClassName$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.className ? $DvtSparkChartDefaults$$.className : ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartEventManager$$.markerClassName ? $DvtSparkChartEventManager$$.markerClassName : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && $DvtSparkChartEventManager$$ && 
    $DvtSparkChartEventManager$$.className ? $DvtSparkChartEventManager$$.className : null;
  };
  $DvtChartStyleUtils$$.$getStyle$ = function $$DvtChartStyleUtils$$$$getStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.style ? $DvtSparkChartDefaults$$.style : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $dvt$$2$$.style ? $dvt$$2$$.style : null;
  };
  $DvtChartStyleUtils$$.$getAreaStyle$ = function $$DvtChartStyleUtils$$$$getAreaStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.areaStyle ? $DvtSparkChartDefaults$$.areaStyle : $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.style ? $DvtSparkChartDefaults$$.style : null;
  };
  $DvtChartStyleUtils$$.$getMarkerStyle$ = function $$DvtChartStyleUtils$$$$getMarkerStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.style ? $DvtSparkChartDefaults$$.style : ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartEventManager$$.markerStyle ? $DvtSparkChartEventManager$$.markerStyle : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.style ? 
    $DvtSparkChartEventManager$$.style : null;
  };
  var $DvtChartTextUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartTextUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartTextUtils$$.$createText$ = function $$DvtChartTextUtils$$$$createText$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$) {
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$OutputText$($DvtSparkChartDefaults$$.$getCtx$(), $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$);
    $DvtSparkChartAutomation$$.$setCSSStyle$($DvtChartTooltipUtils$$);
    return $dvt$$2$$.$TextUtils$.$fitText$($DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$) ? ($DvtSparkChartEventManager$$.$associate$($DvtSparkChartAutomation$$, new $dvt$$2$$.$SimpleObjPeer$($DvtSparkChartAutomation$$.$getUntruncatedTextString$())), $DvtSparkChartAutomation$$) : null;
  };
  $DvtChartTextUtils$$.$areTitlesRendered$ = function $$DvtChartTextUtils$$$$areTitlesRendered$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$();
    return $dvt$$2$$.title.text || $dvt$$2$$.subtitle.text || $dvt$$2$$.footnote.text;
  };
  var $DvtChartTooltipUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartTooltipUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartTooltipUtils$$.$getDatatipColor$ = function $$DvtChartTooltipUtils$$$$getDatatipColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, 0, $DvtSparkChartDefaults$$) : $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtChartTooltipUtils$$.$getDatatip$ = function $$DvtChartTooltipUtils$$$$getDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if ($DvtChartTypeUtils$$.$isSpark$($dvt$$2$$) || $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) || 0 > $DvtSparkChartEventManager$$ || 0 > $DvtSparkChartDefaults$$) {
      return null;
    }
    var $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getOptions$().tooltip, $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$ ? $DvtChartPieLabelUtils$$.renderer : null;
    if ($DvtSparkChartAutomation$$ && $DvtChartPieLabelUtils$$) {
      return $DvtSparkChartAutomation$$ = $dvt$$2$$.$getCtx$().$getTooltipManager$($DvtChartTooltipUtils$$.$isDataCursorEnabled$($dvt$$2$$) ? $DvtChartDataCursor$$.$TOOLTIP_ID$ : null), $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getDataContext$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$isPie$($dvt$$2$$) ? ($dvt$$2$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$.label = 
      $dvt$$2$$.$_sliceLabelString$) : $DvtChartSeriesEffectUtils$$.label = $DvtChartDataUtils$$.$getDataLabel$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$.$getCustomTooltip$($DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$);
    }
    if ($DvtChartSeriesEffectUtils$$ && null != $DvtChartSeriesEffectUtils$$.shortDesc) {
      return $DvtChartSeriesEffectUtils$$.shortDesc;
    }
    $DvtChartPieLabelUtils$$ = "";
    $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? $DvtChartPieLabelUtils$$ += $DvtChartTooltipUtils$$.$getStockDatatip$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) : ($DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addSeriesDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
    $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addValueDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$));
    return $DvtChartTooltipUtils$$.$_processDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtSparkChartAutomation$$);
  };
  $DvtChartTooltipUtils$$.$getOtherSliceDatatip$ = function $$DvtChartTooltipUtils$$$$getOtherSliceDatatip$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", null), $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().tooltip, $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$ ? $DvtChartPieLabelUtils$$.renderer : null;
    if ($DvtSparkChartAutomation$$ && $DvtChartPieLabelUtils$$) {
      return $DvtSparkChartDefaults$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$($DvtSparkChartEventManager$$, null), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataContext$($DvtSparkChartEventManager$$, null, 0), $DvtSparkChartAutomation$$.label = $DvtSparkChartDefaults$$.$_sliceLabelString$, $DvtSparkChartEventManager$$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$);
    }
    $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$("", $DvtSparkChartEventManager$$, "series", "SERIES", $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$);
    $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, 0, 0, $DvtSparkChartAutomation$$);
    $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, "value", "VALUE", $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtChartTooltipUtils$$.$_processDatatip$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
  };
  $DvtChartTooltipUtils$$.$_processDatatip$ = function $$DvtChartTooltipUtils$$$$_processDatatip$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return "" == $DvtSparkChartEventManager$$ ? null : $DvtSparkChartAutomation$$ ? $dvt$$2$$.$HtmlTooltipManager$.$createStartTag$("table", $DvtSparkChartDefaults$$.$getOptions$().styleDefaults._tooltipStyle) + $DvtSparkChartEventManager$$ + "\x3c/table\x3e" : $DvtSparkChartEventManager$$;
  };
  $DvtChartTooltipUtils$$.$getRefObjTooltip$ = function $$DvtChartTooltipUtils$$$$getRefObjTooltip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$getOptions$().tooltip;
    if (($DvtChartSeriesEffectUtils$$ = $DvtChartSeriesEffectUtils$$ ? $DvtChartSeriesEffectUtils$$.renderer : null) && null != $DvtSparkChartEventManager$$.id) {
      var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getCtx$().$getTooltipManager$($DvtChartTooltipUtils$$.$isDataCursorEnabled$($dvt$$2$$) ? $DvtChartDataCursor$$.$TOOLTIP_ID$ : null);
      $dvt$$2$$ = {id:$DvtChartRefObjUtils$$.getId($DvtSparkChartEventManager$$), label:$DvtSparkChartEventManager$$.text, data:$dvt$$2$$.$_rawOptions$[$DvtSparkChartDefaults$$].referenceObjects[$DvtSparkChartAutomation$$], value:$DvtSparkChartEventManager$$.value, low:$DvtChartRefObjUtils$$.$getLowValue$($DvtSparkChartEventManager$$), high:$DvtChartRefObjUtils$$.$getHighValue$($DvtSparkChartEventManager$$), color:$DvtChartRefObjUtils$$.$getColor$($DvtSparkChartEventManager$$)};
      return $DvtChartPieLabelUtils$$.$getCustomTooltip$($DvtChartSeriesEffectUtils$$, $dvt$$2$$);
    }
    return $DvtSparkChartEventManager$$.shortDesc;
  };
  $DvtChartTooltipUtils$$.$getStockDatatip$ = function $$DvtChartTooltipUtils$$$$getStockDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, 0, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$("", $dvt$$2$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ && ($DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "open", "OPEN", $DvtSparkChartAutomation$$.open, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "close", "CLOSE", $DvtSparkChartAutomation$$.close, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, 
    $dvt$$2$$, "high", "HIGH", $DvtSparkChartAutomation$$.high, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "low", "LOW", $DvtSparkChartAutomation$$.low, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "volume", "VOLUME", $DvtSparkChartAutomation$$.volume, $DvtSparkChartDefaults$$));
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartTooltipUtils$$.$_addSeriesDatatip$ = function $$DvtChartTooltipUtils$$$$_addSeriesDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "series", "SERIES", $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
  };
  $DvtChartTooltipUtils$$.$_addGroupDatatip$ = function $$DvtChartTooltipUtils$$$$_addGroupDatatip$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieRenderUtils$$;
    $DvtChartAxisUtils$$.$hasTimeAxis$($DvtSparkChartDefaults$$) ? ($DvtChartPieRenderUtils$$ = $DvtChartTooltipUtils$$.$getValueFormat$($DvtSparkChartDefaults$$, "group"), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$), $DvtChartPieRenderUtils$$ = $DvtChartTooltipUtils$$.$formatDateValue$($DvtChartPieRenderUtils$$, new Date($DvtSparkChartAutomation$$)), null == $DvtChartPieRenderUtils$$ && ($DvtChartPieRenderUtils$$ = 
    $DvtSparkChartDefaults$$.$xAxis$.$getInfo$().$formatLabel$($DvtSparkChartAutomation$$))) : $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getGroupLabel$($DvtSparkChartDefaults$$, $DvtChartSeriesEffectUtils$$);
    $DvtChartSeriesEffectUtils$$ = $DvtChartDataUtils$$.$getNumLevels$($DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ = "GROUP";
    if (1 != $DvtChartSeriesEffectUtils$$ && $dvt$$2$$.$ArrayUtils$.isArray($DvtChartPieRenderUtils$$)) {
      for (--$DvtChartSeriesEffectUtils$$;0 <= $DvtChartSeriesEffectUtils$$;$DvtChartSeriesEffectUtils$$--) {
        $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "group", $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$[$DvtChartSeriesEffectUtils$$], $DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$), $DvtChartPieRenderUtils$$[$DvtChartSeriesEffectUtils$$] && ($DvtSparkChartAutomation$$ = null);
      }
    } else {
      $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "group", $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$);
    }
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartTooltipUtils$$.$_addValueDatatip$ = function $$DvtChartTooltipUtils$$$$_addValueDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getZValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) ? ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "x", "X", $DvtChartPieRenderUtils$$, $DvtChartSeriesEffectUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "y", "Y", $DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$), $DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, 
    $DvtSparkChartEventManager$$, "z", "Z", $DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$))) : $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) ? $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "value", "VALUE", $DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$) : $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) ? ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "value", 
    "VALUE", $DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getTargetValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), null != $DvtChartPieLabelUtils$$ && ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "targetValue", "TARGET_VALUE", $DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$))) : $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) && ($DvtSparkChartDefaults$$ = 
    $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? "y2" : "y", null != $DvtChartDataChangeFunnelSlice$$ || null != $DvtSparkChartAutomation$$ ? ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "high", "HIGH", $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "low", "LOW", $DvtChartDataChangeFunnelSlice$$, 
    $DvtChartSeriesEffectUtils$$), null != $DvtChartPieLabelInfo$$ && ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "z", "Z", $DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$))) : null != $DvtChartPieLabelInfo$$ ? ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "Y", $DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, 
    $DvtSparkChartEventManager$$, "z", "Z", $DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$)) : $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "VALUE", $DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$));
    return $dvt$$2$$;
  };
  $DvtChartTooltipUtils$$.$_addDatatipRow$ = function $$DvtChartTooltipUtils$$$$_addDatatipRow$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$) {
    if (null == $DvtChartPieLabelUtils$$ || "" === $DvtChartPieLabelUtils$$) {
      return $DvtSparkChartEventManager$$;
    }
    var $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$.$getOptions$().styleDefaults, $DvtChartLineMarker$$ = $DvtChartTooltipUtils$$.$getValueFormat$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartMarkerUtils$$ = $DvtChartLineMarker$$.tooltipDisplay;
    if (!$DvtChartMarkerUtils$$ || "auto" == $DvtChartMarkerUtils$$) {
      if ("series" == $DvtSparkChartAutomation$$ && "none" == $DvtChartDataChangeFunnelSlice$$.seriesTooltipType || "group" == $DvtSparkChartAutomation$$ && ("none" == $DvtChartDataChangeFunnelSlice$$.groupTooltipType || $DvtChartTypeUtils$$.$isPie$($DvtSparkChartDefaults$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartDefaults$$)) || "series" != $DvtSparkChartAutomation$$ && "group" != $DvtSparkChartAutomation$$ && "label" != $DvtSparkChartAutomation$$ && "none" == $DvtChartDataChangeFunnelSlice$$.valueTooltipType) {
        $DvtChartMarkerUtils$$ = "off";
      }
    }
    if ("off" == $DvtChartMarkerUtils$$) {
      return $DvtSparkChartEventManager$$;
    }
    var $DvtChartDataChangeLineArea$$;
    "string" === typeof $DvtChartLineMarker$$.tooltipLabel ? $DvtChartDataChangeLineArea$$ = $DvtChartLineMarker$$.tooltipLabel : $dvt$$2$$.$ArrayUtils$.isArray($DvtChartLineMarker$$.tooltipLabel) && ($DvtChartDataChangeLineArea$$ = $DvtChartLineMarker$$.tooltipLabel[$DvtChartPieLabelInfo$$ ? $DvtChartPieLabelInfo$$ : 0]);
    null == $DvtChartDataChangeLineArea$$ && ($DvtChartDataChangeLineArea$$ = null == $DvtChartSeriesEffectUtils$$ ? "" : "GROUP" == $DvtChartSeriesEffectUtils$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($DvtSparkChartDefaults$$) ? $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$.$getOptions$(), "labelDate", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_GROUP") : $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_" + $DvtChartSeriesEffectUtils$$, ""));
    "series" != $DvtSparkChartAutomation$$ && "group" != $DvtSparkChartAutomation$$ && ($DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), $DvtChartLineMarker$$, $DvtChartPieLabelUtils$$));
    if ($DvtChartPieRenderUtils$$) {
      return $DvtSparkChartDefaults$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartDefaults$$.$getCtx$()), $DvtChartDataChangeFunnelSlice$$.tooltipLabelStyle.$setStyle$($dvt$$2$$.$CSSStyle$.$TEXT_ALIGN$, $DvtSparkChartDefaults$$ ? "left" : "right"), $DvtChartDataChangeFunnelSlice$$.tooltipValueStyle.$setStyle$($dvt$$2$$.$CSSStyle$.$TEXT_ALIGN$, $DvtSparkChartDefaults$$ ? "right" : "left"), $DvtSparkChartEventManager$$ + "\x3ctr\x3e" + $dvt$$2$$.$HtmlTooltipManager$.$createStartTag$("td", $DvtChartDataChangeFunnelSlice$$.tooltipLabelStyle) + 
      $DvtChartDataChangeLineArea$$ + "\x3c/td\x3e" + $dvt$$2$$.$HtmlTooltipManager$.$createStartTag$("td", $DvtChartDataChangeFunnelSlice$$.tooltipValueStyle) + $DvtChartPieLabelUtils$$ + "\x3c/td\x3e\x3c/tr\x3e";
    }
    0 < $DvtSparkChartEventManager$$.length && ($DvtSparkChartEventManager$$ += "\x3cbr\x3e");
    return $DvtSparkChartEventManager$$ + $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtChartDataChangeLineArea$$, $DvtChartPieLabelUtils$$]);
  };
  $DvtChartTooltipUtils$$.$getValueFormat$ = function $$DvtChartTooltipUtils$$$$getValueFormat$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().valueFormats;
    if (!$DvtSparkChartDefaults$$) {
      return {};
    }
    for (var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      if ($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].type == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$];
      }
    }
    return "group" == $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) ? $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$, "x") : "y" != $DvtSparkChartEventManager$$ && "y2" != $DvtSparkChartEventManager$$ && "min" != $DvtSparkChartEventManager$$ && "max" != $DvtSparkChartEventManager$$ || !$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) ? {} : $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$, "value");
  };
  $DvtChartTooltipUtils$$.$formatValue$ = function $$DvtChartTooltipUtils$$$$formatValue$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieRenderUtils$$ = "auto", $DvtChartPieLabelInfo$$ = "on", $DvtChartTypeUtils$$;
    $DvtSparkChartDefaults$$.scaling && ($DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.scaling);
    $DvtSparkChartDefaults$$.autoPrecision && ($DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.autoPrecision);
    $DvtSparkChartDefaults$$.converter && ($DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$.converter);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$LinearScaleAxisValueFormatter$($DvtSparkChartEventManager$$, null != $DvtChartTooltipUtils$$ ? $DvtChartTooltipUtils$$ : $DvtSparkChartAutomation$$, null != $DvtChartSeriesEffectUtils$$ ? $DvtChartSeriesEffectUtils$$ : $DvtSparkChartAutomation$$, null != $DvtChartPieLabelUtils$$ ? $DvtChartPieLabelUtils$$ : 0, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$);
    return $DvtChartTypeUtils$$ && ($DvtChartTypeUtils$$.getAsString || $DvtChartTypeUtils$$.format) ? $DvtSparkChartEventManager$$.format($DvtSparkChartAutomation$$, $DvtChartTypeUtils$$) : $DvtSparkChartEventManager$$.format($DvtSparkChartAutomation$$);
  };
  $DvtChartTooltipUtils$$.$formatDateValue$ = function $$DvtChartTooltipUtils$$$$formatDateValue$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.converter;
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.getAsString ? $DvtSparkChartDefaults$$.getAsString($DvtSparkChartEventManager$$) : $DvtSparkChartDefaults$$.format ? $DvtSparkChartDefaults$$.format($DvtSparkChartEventManager$$) : null : null;
  };
  $DvtChartTooltipUtils$$.$isDataCursorEnabled$ = function $$DvtChartTooltipUtils$$$$isDataCursorEnabled$$($DvtSparkChartEventManager$$) {
    if ($DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$)) {
      return !1;
    }
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$();
    return "on" == $DvtSparkChartDefaults$$.dataCursor ? !0 : "off" == $DvtSparkChartDefaults$$.dataCursor ? !1 : $dvt$$2$$.$Agent$.$isTouchDevice$() && $DvtChartTypeUtils$$.$isLineArea$($DvtSparkChartEventManager$$);
  };
  $DvtChartTooltipUtils$$.$getDataCursorBehavior$ = function $$DvtChartTooltipUtils$$$$getDataCursorBehavior$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().dataCursorBehavior;
    return "snap" == $DvtSparkChartEventManager$$ ? $DvtChartDataCursor$$.$BEHAVIOR_SNAP$ : "smooth" == $DvtSparkChartEventManager$$ ? $DvtChartDataCursor$$.$BEHAVIOR_SMOOTH$ : $DvtChartTypeUtils$$.$isLineArea$($dvt$$2$$) ? $DvtChartDataCursor$$.$BEHAVIOR_SMOOTH$ : $DvtChartDataCursor$$.$BEHAVIOR_SNAP$;
  };
  var $DvtChartTypeUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartTypeUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartTypeUtils$$.$_SUPPORTED_TYPES$ = "bar line area lineWithArea combo pie bubble scatter funnel stock".split(" ");
  $DvtChartTypeUtils$$.$isValidType$ = function $$DvtChartTypeUtils$$$$isValidType$$($DvtSparkChartEventManager$$) {
    return 0 <= $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartTypeUtils$$.$_SUPPORTED_TYPES$, $DvtSparkChartEventManager$$.$getType$());
  };
  $DvtChartTypeUtils$$.$isSpark$ = function $$DvtChartTypeUtils$$$$isSpark$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().__spark;
  };
  $DvtChartTypeUtils$$.$isOverview$ = function $$DvtChartTypeUtils$$$$isOverview$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$()._isOverview;
  };
  $DvtChartTypeUtils$$.$isCombo$ = function $$DvtChartTypeUtils$$$$isCombo$$($dvt$$2$$) {
    return "combo" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isVertical$ = function $$DvtChartTypeUtils$$$$isVertical$$($dvt$$2$$) {
    return !$DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$isHorizontal$ = function $$DvtChartTypeUtils$$$$isHorizontal$$($dvt$$2$$) {
    return "horizontal" == $dvt$$2$$.$getOptions$().orientation && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isStock$($dvt$$2$$) && ($DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) || $DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$));
  };
  $DvtChartTypeUtils$$.$isPolar$ = function $$DvtChartTypeUtils$$$$isPolar$$($dvt$$2$$) {
    return "polar" == $dvt$$2$$.$getOptions$().coordinateSystem;
  };
  $DvtChartTypeUtils$$.$isStacked$ = function $$DvtChartTypeUtils$$$$isStacked$$($dvt$$2$$) {
    return "on" != $dvt$$2$$.$getOptions$().stack || $DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$) ? !1 : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$isBar$ = function $$DvtChartTypeUtils$$$$isBar$$($dvt$$2$$) {
    return "bar" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isStock$ = function $$DvtChartTypeUtils$$$$isStock$$($dvt$$2$$) {
    return "stock" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isLine$ = function $$DvtChartTypeUtils$$$$isLine$$($dvt$$2$$) {
    return "line" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isLineWithArea$ = function $$DvtChartTypeUtils$$$$isLineWithArea$$($dvt$$2$$) {
    return "lineWithArea" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isArea$ = function $$DvtChartTypeUtils$$$$isArea$$($dvt$$2$$) {
    return "area" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isScatter$ = function $$DvtChartTypeUtils$$$$isScatter$$($dvt$$2$$) {
    return "scatter" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isBubble$ = function $$DvtChartTypeUtils$$$$isBubble$$($dvt$$2$$) {
    return "bubble" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isPie$ = function $$DvtChartTypeUtils$$$$isPie$$($dvt$$2$$) {
    return "pie" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isFunnel$ = function $$DvtChartTypeUtils$$$$isFunnel$$($dvt$$2$$) {
    return "funnel" == $dvt$$2$$.$getType$();
  };
  $DvtChartTypeUtils$$.$isDualY$ = function $$DvtChartTypeUtils$$$$isDualY$$($dvt$$2$$) {
    return !$DvtChartTypeUtils$$.$hasAxes$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? !1 : !0;
  };
  $DvtChartTypeUtils$$.$isSplitDualY$ = function $$DvtChartTypeUtils$$$$isSplitDualY$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) && $DvtChartDataUtils$$.$hasVolumeSeries$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) ? !0 : "on" == $dvt$$2$$.$getOptions$().splitDualY && $DvtChartTypeUtils$$.$hasY2Data$($dvt$$2$$) && !$DvtChartTypeUtils$$.$hasY2DataOnly$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$isBLAC$ = function $$DvtChartTypeUtils$$$$isBLAC$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getType$();
    return "bar" == $dvt$$2$$ || "line" == $dvt$$2$$ || "area" == $dvt$$2$$ || "lineWithArea" == $dvt$$2$$ || "combo" == $dvt$$2$$ || "stock" == $dvt$$2$$;
  };
  $DvtChartTypeUtils$$.$isScatterBubble$ = function $$DvtChartTypeUtils$$$$isScatterBubble$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getType$();
    return "scatter" == $dvt$$2$$ || "bubble" == $dvt$$2$$;
  };
  $DvtChartTypeUtils$$.$isLineArea$ = function $$DvtChartTypeUtils$$$$isLineArea$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getType$();
    return "line" == $dvt$$2$$ || "area" == $dvt$$2$$ || "lineWithArea" == $dvt$$2$$;
  };
  $DvtChartTypeUtils$$.$isScrollSupported$ = function $$DvtChartTypeUtils$$$$isScrollSupported$$($dvt$$2$$) {
    return !$DvtChartTypeUtils$$.$isPie$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$isOverviewSupported$ = function $$DvtChartTypeUtils$$$$isOverviewSupported$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isVertical$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$isHorizScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isHorizScrollbarSupported$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getZoomDirection$($dvt$$2$$);
    return $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? !1 : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isVertical$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && "y" != $DvtSparkChartEventManager$$;
  };
  $DvtChartTypeUtils$$.$isVertScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isVertScrollbarSupported$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getZoomDirection$($dvt$$2$$);
    return $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? !1 : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && "x" != $DvtSparkChartEventManager$$;
  };
  $DvtChartTypeUtils$$.$hasAxes$ = function $$DvtChartTypeUtils$$$$hasAxes$$($dvt$$2$$) {
    return !("pie" == $dvt$$2$$.$getType$() || "funnel" == $dvt$$2$$.$getType$());
  };
  $DvtChartTypeUtils$$.$hasY2DataOnly$ = function $$DvtChartTypeUtils$$$$hasY2DataOnly$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isDualY$($dvt$$2$$) ? $DvtChartDataUtils$$.$getY2SeriesCount$($dvt$$2$$) == $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$) : !1;
  };
  $DvtChartTypeUtils$$.$hasY2Data$ = function $$DvtChartTypeUtils$$$$hasY2Data$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isDualY$($dvt$$2$$) ? 0 < $DvtChartDataUtils$$.$getY2SeriesCount$($dvt$$2$$) : !1;
  };
  $DvtChartTypeUtils$$.$hasY2BarData$ = function $$DvtChartTypeUtils$$$$hasY2BarData$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$hasY2Data$($dvt$$2$$);
  };
  $DvtChartTypeUtils$$.$hasBarSeries$ = function $$DvtChartTypeUtils$$$$hasBarSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "bar");
  };
  $DvtChartTypeUtils$$.$hasCandlestickSeries$ = function $$DvtChartTypeUtils$$$$hasCandlestickSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "candlestick");
  };
  $DvtChartTypeUtils$$.$hasLineSeries$ = function $$DvtChartTypeUtils$$$$hasLineSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "line");
  };
  $DvtChartTypeUtils$$.$hasAreaSeries$ = function $$DvtChartTypeUtils$$$$hasAreaSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "area");
  };
  $DvtChartTypeUtils$$.$hasLineWithAreaSeries$ = function $$DvtChartTypeUtils$$$$hasLineWithAreaSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "lineWithArea");
  };
  $DvtChartTypeUtils$$.$_hasSeriesType$ = function $$DvtChartTypeUtils$$$$_hasSeriesType$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ($DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      for (var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
        if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartAutomation$$) && $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartAutomation$$) == $DvtSparkChartEventManager$$) {
          return !0;
        }
      }
    }
    return !1;
  };
  $DvtChartTypeUtils$$.$hasCenteredSeries$ = function $$DvtChartTypeUtils$$$$hasCenteredSeries$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return !1;
    }
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$) && "bar" != $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
        var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartDefaults$$);
        if ("centeredSegmented" == $DvtSparkChartAutomation$$ || "centeredStepped" == $DvtSparkChartAutomation$$) {
          return !0;
        }
      }
    }
    return !1;
  };
  $DvtChartTypeUtils$$.$hasUncenteredSeries$ = function $$DvtChartTypeUtils$$$$hasUncenteredSeries$$($dvt$$2$$) {
    if (!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return !1;
    }
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$) && "bar" != $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
        var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartDefaults$$);
        if ("segmented" == $DvtSparkChartAutomation$$ || "stepped" == $DvtSparkChartAutomation$$) {
          return !0;
        }
      }
    }
    return !1;
  };
  $DvtChartTypeUtils$$.$isStandalonePlotArea$ = function $$DvtChartTypeUtils$$$$isStandalonePlotArea$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2") ? !1 : !0;
  };
  $DvtChartTypeUtils$$.$isStandaloneXAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneXAxis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || "off" != $DvtSparkChartEventManager$$.plotArea.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2") ? !1 : !0;
  };
  $DvtChartTypeUtils$$.$isStandaloneYAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneYAxis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x") || "off" != $DvtSparkChartEventManager$$.plotArea.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2") ? !1 : !0;
  };
  $DvtChartTypeUtils$$.$isStandaloneY2Axis$ = function $$DvtChartTypeUtils$$$$isStandaloneY2Axis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y") || "off" != $DvtSparkChartEventManager$$.plotArea.rendered ? !1 : !0;
  };
  var $DvtChartMarkerUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartMarkerUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartMarkerUtils$$.$_MIN_BUBBLE_SIZE$ = 6;
  $DvtChartMarkerUtils$$.$_MAX_BUBBLE_SIZE_RATIO$ = .5;
  $DvtChartMarkerUtils$$.$calcBubbleSizes$ = function $$DvtChartMarkerUtils$$$$calcBubbleSizes$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getMinMaxValue$($DvtSparkChartEventManager$$, "z"), $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.min, $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$.max, $DvtChartPieLabelUtils$$ = $DvtChartMarkerUtils$$.$_MIN_BUBBLE_SIZE$, $DvtSparkChartAutomation$$ = $DvtChartMarkerUtils$$.$_MAX_BUBBLE_SIZE_RATIO$ * Math.min($DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$), 
    $DvtChartPieLabelInfo$$ = "withoutRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartPieRenderUtils$$;$DvtChartDataChangeFunnelSlice$$++) {
      if ($DvtChartPieLabelInfo$$ || $DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$)) {
        for (var $DvtChartLineMarker$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$), $DvtChartDataChangeLineArea$$ = $DvtChartLineMarker$$.items ? $DvtChartLineMarker$$.items.length : 0, $DvtChartRangeMarker$$ = 0;$DvtChartRangeMarker$$ < $DvtChartDataChangeLineArea$$;$DvtChartRangeMarker$$++) {
          var $DvtChartLineArea$$ = $DvtChartLineMarker$$.items[$DvtChartRangeMarker$$];
          $DvtChartLineArea$$ && ($DvtChartLineArea$$.markerSize = $dvt$$2$$.$LayoutUtils$.$getBubbleSize$($DvtChartLineArea$$.z, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$));
        }
      }
    }
    $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? ($DvtChartSeriesEffectUtils$$ = Infinity, $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getRadius$()) : ($DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$.$w$ - 2.4 * $DvtChartAxisUtils$$.$getTickLabelHeight$($DvtSparkChartEventManager$$, "y"), $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.$h$ - 1.6 * $DvtChartAxisUtils$$.$getTickLabelHeight$($DvtSparkChartEventManager$$, "x"));
    $DvtChartSeriesEffectUtils$$ -= .5 * $DvtSparkChartAutomation$$;
    $DvtChartTooltipUtils$$ -= .5 * $DvtSparkChartAutomation$$;
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_cache$;
    $DvtChartPieLabelUtils$$ = $DvtChartMarkerUtils$$.$_getAxisValueRange$($DvtSparkChartEventManager$$, "x");
    $DvtSparkChartAutomation$$.$putToCache$("_xAxisBubbleRatio", $DvtChartPieLabelUtils$$ / $DvtChartSeriesEffectUtils$$);
    $DvtChartSeriesEffectUtils$$ = $DvtChartMarkerUtils$$.$_getAxisValueRange$($DvtSparkChartEventManager$$, "y");
    $DvtSparkChartAutomation$$.$putToCache$("_yAxisBubbleRatio", $DvtChartSeriesEffectUtils$$ / $DvtChartTooltipUtils$$);
  };
  $DvtChartMarkerUtils$$.$getBubbleAxisRadius$ = function $$DvtChartMarkerUtils$$$$getBubbleAxisRadius$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$ / 2 * $dvt$$2$$.$_cache$.$getFromCache$("x" == $DvtSparkChartEventManager$$ ? "_xAxisBubbleRatio" : "_yAxisBubbleRatio") : 0;
  };
  $DvtChartMarkerUtils$$.$_getAxisValueRange$ = function $$DvtChartMarkerUtils$$$$_getAxisValueRange$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$()[$DvtSparkChartDefaults$$ + "Axis"], $DvtChartTooltipUtils$$ = $DvtChartAxisUtils$$.$isLog$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartSeriesEffectUtils$$ = !$DvtChartTooltipUtils$$ && "zero" == $DvtChartAxisUtils$$.$getBaselineScaling$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getMinMaxValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
    !0), $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$.min;
    null == $DvtChartPieRenderUtils$$ && ($DvtChartPieRenderUtils$$ = $DvtChartSeriesEffectUtils$$ ? Math.min(0, $DvtChartPieLabelUtils$$.min) : $DvtChartPieLabelUtils$$.min);
    $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.max;
    null == $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = $DvtChartSeriesEffectUtils$$ ? Math.max(0, $DvtChartPieLabelUtils$$.max) : $DvtChartPieLabelUtils$$.max);
    return $DvtChartTooltipUtils$$ && 0 < $DvtSparkChartAutomation$$ && 0 < $DvtChartPieRenderUtils$$ ? $DvtSparkChartAutomation$$ == $DvtChartPieRenderUtils$$ ? 6 : $dvt$$2$$.Math.log10($DvtSparkChartAutomation$$ / $DvtChartPieRenderUtils$$) : $DvtSparkChartAutomation$$ == $DvtChartPieRenderUtils$$ ? 60 : $DvtSparkChartAutomation$$ - $DvtChartPieRenderUtils$$;
  };
  $DvtChartMarkerUtils$$.$sortMarkers$ = function $$DvtChartMarkerUtils$$$$sortMarkers$$($dvt$$2$$) {
    $dvt$$2$$.sort($DvtChartMarkerUtils$$.$_compareSize$);
  };
  $DvtChartMarkerUtils$$.$sortMarkerInfos$ = function $$DvtChartMarkerUtils$$$$sortMarkerInfos$$($dvt$$2$$) {
    $dvt$$2$$.sort($DvtChartMarkerUtils$$.$_compareInfoSize$);
  };
  $DvtChartMarkerUtils$$.$_compareSize$ = function $$DvtChartMarkerUtils$$$$_compareSize$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.$getSize$() - $dvt$$2$$.$getSize$();
  };
  $DvtChartMarkerUtils$$.$_compareInfoSize$ = function $$DvtChartMarkerUtils$$$$_compareInfoSize$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.size - $dvt$$2$$.size;
  };
  $DvtChartMarkerUtils$$.$checkPixelMap$ = function $$DvtChartMarkerUtils$$$$checkPixelMap$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartAutomation$$ /= 2;
    return $dvt$$2$$.$isObscured$(Math.max(Math.floor($DvtSparkChartEventManager$$ - $DvtSparkChartAutomation$$), 0), Math.max(Math.floor($DvtSparkChartDefaults$$ - $DvtSparkChartAutomation$$), 0), Math.max(Math.ceil($DvtSparkChartEventManager$$ + $DvtSparkChartAutomation$$), 0), Math.max(Math.ceil($DvtSparkChartDefaults$$ + $DvtSparkChartAutomation$$), 0));
  };
  $DvtChartMarkerUtils$$.$updatePixelMap$ = function $$DvtChartMarkerUtils$$$$updatePixelMap$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    $DvtSparkChartAutomation$$ *= .4;
    $dvt$$2$$.$obscure$(Math.max(Math.round($DvtSparkChartEventManager$$ - $DvtSparkChartAutomation$$), 0), Math.max(Math.round($DvtSparkChartDefaults$$ - $DvtSparkChartAutomation$$), 0), Math.max(Math.round($DvtSparkChartEventManager$$ + $DvtSparkChartAutomation$$), 0), Math.max(Math.round($DvtSparkChartDefaults$$ + $DvtSparkChartAutomation$$), 0), $DvtChartTooltipUtils$$);
  };
  var $DvtChartPieUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$ = "_dvtOther";
  $DvtChartPieUtils$$.$getSliceId$ = function $$DvtChartPieUtils$$$$getSliceId$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, 0), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.id : null, $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, 0);
    return new $DvtChartDataItem$$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
  };
  $DvtChartPieUtils$$.$getOtherSliceId$ = function $$DvtChartPieUtils$$$$getOtherSliceId$$($dvt$$2$$) {
    $dvt$$2$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, 0);
    return new $DvtChartDataItem$$(null, $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$, $dvt$$2$$);
  };
  $DvtChartPieUtils$$.$getRenderedSeriesIndices$ = function $$DvtChartPieUtils$$$$getRenderedSeriesIndices$$($dvt$$2$$) {
    return $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$rendered$;
  };
  $DvtChartPieUtils$$.$hasOtherSeries$ = function $$DvtChartPieUtils$$$$hasOtherSeries$$($dvt$$2$$) {
    return 0 < $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$other$.length;
  };
  $DvtChartPieUtils$$.$getOtherValue$ = function $$DvtChartPieUtils$$$$getOtherValue$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$other$, $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartTooltipUtils$$) && ($DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartTooltipUtils$$, 0), 0 < $DvtChartTooltipUtils$$ && ($DvtSparkChartDefaults$$ += $DvtChartTooltipUtils$$));
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieUtils$$.$getOtherSliceIds$ = function $$DvtChartPieUtils$$$$getOtherSliceIds$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$other$, $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      $DvtSparkChartDefaults$$.push($DvtChartPieUtils$$.$getSliceId$($dvt$$2$$, $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$]));
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieUtils$$.$isOtherSliceSelected$ = function $$DvtChartPieUtils$$$$isOtherSliceSelected$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      for (var $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartSeriesEffectUtils$$ = !1, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartPieLabelUtils$$++) {
        if ($DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].id && $DvtChartTooltipUtils$$.getId() === $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].id || $DvtChartTooltipUtils$$.$getSeries$() === $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].series && $DvtChartTooltipUtils$$.$getGroup$() === $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].group) {
          $DvtChartSeriesEffectUtils$$ = !0;
          break;
        }
      }
      if (!$DvtChartSeriesEffectUtils$$) {
        return !1;
      }
    }
    return !0;
  };
  $DvtChartPieUtils$$.$_getSeriesIndicesArrays$ = function $$DvtChartPieUtils$$$$_getSeriesIndicesArrays$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartTooltipUtils$$ = $dvt$$2$$.$getOptions$(), $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.otherThreshold * $DvtChartPieUtils$$.$getTotalValue$($dvt$$2$$), $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$;$DvtChartPieLabelUtils$$++) {
      var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartPieLabelUtils$$, 0);
      0 < $DvtChartSeriesEffectUtils$$ && $DvtChartPieRenderUtils$$ < $DvtChartSeriesEffectUtils$$ ? $DvtSparkChartDefaults$$.push($DvtChartPieLabelUtils$$) : $DvtSparkChartEventManager$$.push($DvtChartPieLabelUtils$$);
    }
    "ascending" == $DvtChartTooltipUtils$$.sorting ? $DvtSparkChartEventManager$$.sort(function($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
      return $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, 0) - $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartDefaults$$, 0);
    }) : "on" != $DvtChartTooltipUtils$$.sorting && "descending" != $DvtChartTooltipUtils$$.sorting || $DvtSparkChartEventManager$$.sort(function($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
      return $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartDefaults$$, 0) - $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, 0);
    });
    return {$rendered$:$DvtSparkChartEventManager$$, $other$:$DvtSparkChartDefaults$$};
  };
  $DvtChartPieUtils$$.$getTotalValue$ = function $$DvtChartPieUtils$$$$getTotalValue$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$;$DvtSparkChartAutomation$$++) {
      var $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartAutomation$$, 0);
      0 < $DvtChartTooltipUtils$$ && ($DvtSparkChartDefaults$$ += $DvtChartTooltipUtils$$);
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieUtils$$.$getSliceExplode$ = function $$DvtChartPieUtils$$$$getSliceExplode$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.pieSliceExplode ? $DvtSparkChartDefaults$$.pieSliceExplode : 0;
  };
  $DvtChartPieUtils$$.$getOtherSliceShowPopupBehaviors$ = function $$DvtChartPieUtils$$$$getOtherSliceShowPopupBehaviors$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($dvt$$2$$);
    if ($DvtSparkChartEventManager$$ && 1 <= $DvtSparkChartEventManager$$.length) {
      return $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesIndex$($dvt$$2$$, $DvtSparkChartEventManager$$[0].$getSeries$()), $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, 0)._id, $dvt$$2$$.$getShowPopupBehaviors$($DvtSparkChartEventManager$$);
    }
  };
  $DvtChartPieUtils$$.$getSliceBySeriesIndex$ = function $$DvtChartPieUtils$$$$getSliceBySeriesIndex$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for (var $DvtSparkChartDefaults$$ = $dvt$$2$$.$pieChart$.$_slices$, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      if ($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getSeriesIndex$() == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$];
      }
    }
    return null;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieRenderUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartPieRenderUtils$$.$TWOD$ = "2D";
  $DvtChartPieRenderUtils$$.$THREED$ = "3D";
  $DvtChartPieRenderUtils$$.$CRUST$ = "CRUST";
  $DvtChartPieRenderUtils$$.$SIDE$ = "SIDE";
  $DvtChartPieRenderUtils$$.$BORDER$ = "BORDER";
  $DvtChartPieRenderUtils$$.$SURFACE_CRUST$ = 0;
  $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ = 1;
  $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$ = 2;
  $DvtChartPieRenderUtils$$.$SURFACE_TOP$ = 3;
  $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$ = function $$DvtChartPieRenderUtils$$$$reflectAngleOverYAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    $DvtSparkChartEventManager$$ = $dvt$$2$$.Math.$degreesToRads$(360 - $DvtSparkChartEventManager$$);
    return {x:$DvtSparkChartDefaults$$ + Math.cos($DvtSparkChartEventManager$$) * $DvtChartTooltipUtils$$, y:$DvtSparkChartAutomation$$ + Math.sin($DvtSparkChartEventManager$$) * $DvtChartSeriesEffectUtils$$};
  };
  $DvtChartPieRenderUtils$$.$getGradientColors$ = function $$DvtChartPieRenderUtils$$$$getGradientColors$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if ($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$ != $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$) {
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$TWOD$ || $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$THREED$) {
        return [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -.04, -.05), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -.09, .04)];
      }
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
        return [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -.04, -.05), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, 0, -.14)];
      }
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
        return [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -.1, .06), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -.04, -.05)];
      }
    } else {
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
        return $DvtSparkChartDefaults$$ = [], $DvtSparkChartDefaults$$[0] = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getPastel$($DvtSparkChartEventManager$$, .1)), $DvtSparkChartDefaults$$[1] = $DvtSparkChartDefaults$$[0], $DvtSparkChartDefaults$$[2] = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartEventManager$$, .9)), $DvtSparkChartDefaults$$;
      }
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
        return ["#FFFFFF", "#000000", "#000000"];
      }
      $DvtSparkChartAutomation$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartEventManager$$, .88));
      var $DvtChartTooltipUtils$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getPastel$($DvtSparkChartEventManager$$, .05)), $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getPastel$($DvtSparkChartEventManager$$, .15));
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getPastel$($DvtSparkChartEventManager$$, .35));
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
        return [$DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$];
      }
      if ("SIDE" == $DvtSparkChartDefaults$$) {
        return [$DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$];
      }
      if ("3D" == $DvtSparkChartDefaults$$) {
        return [$DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$];
      }
    }
  };
  $DvtChartPieRenderUtils$$.$getGradientAlphas$ = function $$DvtChartPieRenderUtils$$$$getGradientAlphas$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = null == $dvt$$2$$ || isNaN($dvt$$2$$) || 0 == $dvt$$2$$ ? 1 : $dvt$$2$$;
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
      return [$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
      return [$DvtSparkChartDefaults$$ / 1.59375, $DvtSparkChartDefaults$$ / 5.3125, $DvtSparkChartDefaults$$ / 2.65625];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$THREED$) {
      return [$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
      return [$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
      return [$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$];
    }
  };
  $DvtChartPieRenderUtils$$.$getGradientRatios$ = function $$DvtChartPieRenderUtils$$$$getGradientRatios$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if ($DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$ != $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$) {
      return [0, 1];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
      return [.2, .5, 1];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
      return [0, .5, 1];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$THREED$) {
      return [0, .29, .55, .84, 1];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
      return [0, .43, .91, 1];
    }
    if ($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
      return [0, 1];
    }
  };
  $DvtChartPieRenderUtils$$.$createTopSurface$ = function $$DvtChartPieRenderUtils$$$$createTopSurface$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.$getCtx$(), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getCenter$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getInnerRadius$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$is3D$() || $DvtSparkChartEventManager$$.$getSliceGaps$() > Math.sin($dvt$$2$$.Math.$degreesToRads$($DvtSparkChartEventManager$$.$getAngleExtent$())) * $DvtSparkChartEventManager$$.$_radiusX$ + 
    1 ? null : $DvtSparkChartEventManager$$.$getSliceGaps$(), $DvtChartTooltipUtils$$ = new $DvtChartSelectableWedge$$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$.x, $DvtChartSeriesEffectUtils$$.y, $DvtSparkChartEventManager$$.$_radiusX$, $DvtSparkChartEventManager$$.$_radiusY$, $DvtSparkChartEventManager$$.$getAngleStart$(), $DvtSparkChartEventManager$$.$getAngleExtent$(), $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$), $DvtChartSeriesEffectUtils$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartAutomation$$.$chart$), 
    $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartAutomation$$.$chart$), $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartEventManager$$.$getStrokeColor$(), null, $DvtSparkChartEventManager$$.$getBorderWidth$()), $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.$getSeriesIndex$();
    $DvtChartTooltipUtils$$.$setStyleProperties$($DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$.$getFillColor$(), $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$);
    $DvtChartTooltipUtils$$.$setStyle$($DvtChartStyleUtils$$.$getStyle$($DvtSparkChartAutomation$$.$chart$, $DvtChartTypeUtils$$, 0));
    $DvtChartTooltipUtils$$.$setClassName$($DvtChartStyleUtils$$.$getClassName$($DvtSparkChartAutomation$$.$chart$, $DvtChartTypeUtils$$, 0));
    $DvtChartTooltipUtils$$ = [$DvtChartTooltipUtils$$];
    !$DvtSparkChartEventManager$$.$getStrokeColor$() && $DvtSparkChartAutomation$$.$getSkin$() == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ && $DvtSparkChartAutomation$$.$is3D$() && 0 < $DvtSparkChartEventManager$$.getDepth() && "gradient" == $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartAutomation$$.$chart$) && (180 <= $DvtSparkChartEventManager$$.$getAngleStart$() || 180 <= $DvtSparkChartEventManager$$.$getAngleStart$() + $DvtSparkChartEventManager$$.$getAngleExtent$() || 360 == $DvtSparkChartEventManager$$.$getAngleExtent$()) && 
    ($DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$_createGradientPieBorder$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$.$setTranslate$($DvtSparkChartEventManager$$.$_explodeOffsetX$, $DvtSparkChartEventManager$$.$_explodeOffsetY$), $DvtChartTooltipUtils$$.push($DvtSparkChartAutomation$$));
    $DvtChartPieRenderUtils$$.$associate$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$);
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartPieRenderUtils$$.$associate$ = function $$DvtChartPieRenderUtils$$$$associate$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ($DvtSparkChartEventManager$$) {
      for (var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
        $dvt$$2$$.$_pieChart$.$chart$.$getEventManager$().$associate$($DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $dvt$$2$$);
      }
    }
  };
  $DvtChartPieRenderUtils$$.$_createGradientPieBorder$ = function $$DvtChartPieRenderUtils$$$$_createGradientPieBorder$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$BORDER$, $DvtChartTooltipUtils$$ = $DvtChartPieRenderUtils$$.$getGradientColors$(null, $DvtSparkChartAutomation$$), $DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$(null, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$getGradientRatios$($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$getBounds$(), $DvtChartTooltipUtils$$ = new $dvt$$2$$.$LinearGradientStroke$(120, 
    $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$);
    $DvtChartTooltipUtils$$.$setWidth$(1);
    $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getAngleStart$();
    $DvtSparkChartAutomation$$ = 180 > $DvtChartSeriesEffectUtils$$ ? 180 - $DvtChartSeriesEffectUtils$$ : 0;
    $DvtChartSeriesEffectUtils$$ = 0 < $DvtSparkChartAutomation$$ ? 180 : $DvtChartSeriesEffectUtils$$;
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getAngleExtent$() - $DvtSparkChartAutomation$$;
    360 < $DvtChartSeriesEffectUtils$$ + $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = 360 - $DvtChartSeriesEffectUtils$$);
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getCenter$(), $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$Arc$($DvtChartPieLabelUtils$$.$getCtx$(), $DvtChartPieLabelInfo$$.x, $DvtChartPieLabelInfo$$.y, $DvtChartPieLabelUtils$$.$_radiusX$, $DvtChartPieLabelUtils$$.$_radiusY$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$Arc$.OPEN);
    $DvtChartSeriesEffectUtils$$.$setStroke$($DvtChartTooltipUtils$$);
    return $DvtChartSeriesEffectUtils$$;
  };
  $DvtChartPieRenderUtils$$.$createLateralSurface$ = function $$DvtChartPieRenderUtils$$$$createLateralSurface$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (0 == $DvtSparkChartEventManager$$.$getAngleExtent$()) {
      return [];
    }
    var $DvtChartTooltipUtils$$ = [];
    if (0 < $dvt$$2$$.$ColorUtils$.$getAlpha$($DvtSparkChartEventManager$$.$getFillColor$())) {
      if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ || $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$) {
        $DvtChartTooltipUtils$$.push($DvtChartPieRenderUtils$$.$_generateLateralShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, null, $DvtSparkChartAutomation$$));
      } else {
        if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_CRUST$) {
          for (var $DvtChartSeriesEffectUtils$$ = $DvtChartPieRenderUtils$$.$_createCrustPathCommands$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = $DvtChartSeriesEffectUtils$$.length, $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartPieLabelUtils$$;$DvtChartPieLabelInfo$$++) {
            $DvtChartTooltipUtils$$.push($DvtChartPieRenderUtils$$.$_generateLateralShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartSeriesEffectUtils$$[$DvtChartPieLabelInfo$$], $DvtSparkChartAutomation$$));
          }
        }
      }
    }
    $DvtChartPieRenderUtils$$.$associate$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$);
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartPieRenderUtils$$.$generateLateralGradientFill$ = function $$DvtChartPieRenderUtils$$$$generateLateralGradientFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.$getSkin$(), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$CRUST$ ? $DvtSparkChartEventManager$$.getDepth() : 0, $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$ == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ ? 0 : 270, $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$.$getGradientColors$($dvt$$2$$.$ColorUtils$.$getRGB$($DvtSparkChartEventManager$$.$getFillColor$()), 
    $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$), $DvtChartTypeUtils$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$($dvt$$2$$.$ColorUtils$.$getAlpha$($DvtSparkChartEventManager$$.$getFillColor$()), $DvtSparkChartDefaults$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieRenderUtils$$.$getGradientRatios$($DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$), $DvtChartLineMarker$$ = null;
    $DvtChartTooltipUtils$$ == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ && ($DvtChartLineMarker$$ = [Math.floor($DvtSparkChartEventManager$$.$getCenter$().x - $DvtSparkChartAutomation$$.$_radiusX$), Math.floor($DvtSparkChartEventManager$$.$getCenter$().y - $DvtSparkChartAutomation$$.$_radiusY$) + $DvtChartSeriesEffectUtils$$, Math.ceil(2 * $DvtSparkChartAutomation$$.$_radiusX$), Math.ceil(2 * $DvtSparkChartAutomation$$.$_radiusY$)]);
    return new $dvt$$2$$.$LinearGradientFill$($DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$);
  };
  $DvtChartPieRenderUtils$$.$_generateLateralShape$ = function $$DvtChartPieRenderUtils$$$$_generateLateralShape$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$_pieChart$.$getCtx$();
    if ($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ || $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$) {
      var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getAngleStart$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getAngleExtent$();
      $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getCenter$().x;
      var $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.$getCenter$().y, $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.$_radiusX$, $DvtChartLineMarker$$ = $DvtSparkChartEventManager$$.$_radiusY$, $DvtChartMarkerUtils$$ = $DvtSparkChartEventManager$$.getDepth();
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ ? $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartPieLabelUtils$$ + $DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$) : $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$);
      $DvtSparkChartDefaults$$ = $DvtChartPieRenderUtils$$.$_generateInnerPoints$($DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtChartMarkerUtils$$);
      $DvtSparkChartAutomation$$ = [];
      for ($DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtSparkChartDefaults$$.length;$DvtChartTypeUtils$$++) {
        $DvtSparkChartAutomation$$.push($DvtSparkChartDefaults$$[$DvtChartTypeUtils$$].x, $DvtSparkChartDefaults$$[$DvtChartTypeUtils$$].y);
      }
      $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$Polygon$($DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$);
      $DvtChartSeriesEffectUtils$$.$setFill$($DvtChartTooltipUtils$$);
      $DvtSparkChartEventManager$$.$getStrokeColor$() && $DvtChartSeriesEffectUtils$$.$setSolidStroke$($DvtSparkChartEventManager$$.$getStrokeColor$());
      return $DvtChartSeriesEffectUtils$$;
    }
    return $DvtSparkChartAutomation$$ ? ($DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$Path$($DvtChartSeriesEffectUtils$$, null), $DvtChartSeriesEffectUtils$$.$setCmds$($DvtSparkChartAutomation$$), $DvtChartSeriesEffectUtils$$.$setTranslate$($DvtSparkChartEventManager$$.$_explodeOffsetX$, $DvtSparkChartEventManager$$.$_explodeOffsetY$), $DvtChartSeriesEffectUtils$$.$setFill$($DvtChartTooltipUtils$$), $DvtSparkChartEventManager$$.$getStrokeColor$() && $DvtChartSeriesEffectUtils$$.$setSolidStroke$($DvtSparkChartEventManager$$.$getStrokeColor$()), 
    $DvtChartSeriesEffectUtils$$) : null;
  };
  $DvtChartPieRenderUtils$$.$_createCrustPathCommands$ = function $$DvtChartPieRenderUtils$$$$_createCrustPathCommands$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getAngleStart$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$getAngleExtent$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ + $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$ = $dvt$$2$$.$getCenter$().x, $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$getCenter$().y, $DvtChartPieLabelUtils$$ = $dvt$$2$$.$_radiusX$, $DvtChartPieLabelInfo$$ = $dvt$$2$$.$_radiusY$;
    $dvt$$2$$ = $dvt$$2$$.getDepth();
    var $DvtChartTypeUtils$$ = [];
    180 > $DvtSparkChartEventManager$$ && 360 < $DvtSparkChartAutomation$$ ? ($DvtChartTypeUtils$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, $DvtSparkChartEventManager$$, 180 - $DvtSparkChartEventManager$$)), $DvtChartTypeUtils$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, 
    $dvt$$2$$, 360, $DvtSparkChartAutomation$$ - 360)), $DvtChartTypeUtils$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, 180, 180))) : 360 < $DvtSparkChartAutomation$$ ? ($DvtChartTypeUtils$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, $DvtSparkChartEventManager$$, 
    360 - $DvtSparkChartEventManager$$)), $DvtChartTypeUtils$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, 360, $DvtSparkChartAutomation$$ - 360))) : 180 > $DvtSparkChartEventManager$$ && 180 < $DvtSparkChartAutomation$$ ? ($DvtChartTypeUtils$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, 
    $dvt$$2$$, $DvtSparkChartEventManager$$, 180 - $DvtSparkChartEventManager$$)), $DvtChartTypeUtils$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, 180, $DvtSparkChartAutomation$$ - 180))) : $DvtChartTypeUtils$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, $DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$));
    return $DvtChartTypeUtils$$;
  };
  $DvtChartPieRenderUtils$$.$_makeOuterPath$ = function $$DvtChartPieRenderUtils$$$$_makeOuterPath$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    $DvtChartPieLabelInfo$$ = $dvt$$2$$.Math.$degreesToRads$($DvtChartPieLabelInfo$$);
    var $DvtChartTypeUtils$$ = -($dvt$$2$$.Math.$degreesToRads$($DvtChartPieLabelUtils$$) + $DvtChartPieLabelInfo$$);
    $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
    $DvtSparkChartEventManager$$ += Math.cos($DvtChartTypeUtils$$) * $DvtSparkChartAutomation$$;
    $DvtSparkChartDefaults$$ += Math.sin($DvtChartTypeUtils$$) * $DvtChartTooltipUtils$$;
    $DvtChartTypeUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieLabelUtils$$.x, $DvtChartPieLabelUtils$$.y);
    $DvtChartTypeUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelInfo$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartTypeUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + $DvtChartSeriesEffectUtils$$);
    $DvtChartTypeUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelInfo$$, 1, $DvtChartPieLabelUtils$$.x, $DvtChartPieLabelUtils$$.y + $DvtChartSeriesEffectUtils$$);
    return $DvtChartTypeUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartPieLabelUtils$$.x, $DvtChartPieLabelUtils$$.y);
  };
  $DvtChartPieRenderUtils$$.$_generateInnerPoints$ = function $$DvtChartPieRenderUtils$$$$_generateInnerPoints$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = [];
    $DvtChartSeriesEffectUtils$$.push({x:$dvt$$2$$, y:$DvtSparkChartEventManager$$});
    $DvtChartSeriesEffectUtils$$.push({x:$DvtSparkChartDefaults$$, y:$DvtSparkChartAutomation$$});
    $DvtChartSeriesEffectUtils$$.push({x:$DvtSparkChartDefaults$$, y:$DvtSparkChartAutomation$$ + $DvtChartTooltipUtils$$});
    $DvtChartSeriesEffectUtils$$.push({x:$dvt$$2$$, y:$DvtSparkChartEventManager$$ + $DvtChartTooltipUtils$$});
    return $DvtChartSeriesEffectUtils$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieLabelInfo$$, $dvt$$2$$.$Obj$);
  $DvtChartPieLabelInfo$$.prototype.$_init$ = function $$DvtChartPieLabelInfo$$$$$_init$$() {
    this.$_slice$ = this.$_sliceLabel$ = null;
    this.$_initialNumLines$ = this.$_y$ = this.$_x$ = this.$_height$ = this.$_width$ = this.$_position$ = this.$_angle$ = -1;
    this.$_hasFeeler$ = !1;
    this.$_minY$ = this.$_maxY$ = -1;
  };
  $DvtChartPieLabelInfo$$.prototype.$getAngle$ = function $$DvtChartPieLabelInfo$$$$$getAngle$$() {
    return this.$_angle$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setAngle$ = function $$DvtChartPieLabelInfo$$$$$setAngle$$($dvt$$2$$) {
    this.$_angle$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.getHeight = function $$DvtChartPieLabelInfo$$$$getHeight$() {
    return this.$_height$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setHeight$ = function $$DvtChartPieLabelInfo$$$$$setHeight$$($dvt$$2$$) {
    this.$_height$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setMaxY$ = function $$DvtChartPieLabelInfo$$$$$setMaxY$$($dvt$$2$$) {
    this.$_maxY$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setMinY$ = function $$DvtChartPieLabelInfo$$$$$setMinY$$($dvt$$2$$) {
    this.$_minY$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$boundY$ = function $$DvtChartPieLabelInfo$$$$$boundY$$($dvt$$2$$) {
    this.$_minY$ <= this.$_maxY$ && ($dvt$$2$$ = Math.max($dvt$$2$$, this.$_minY$), $dvt$$2$$ = Math.min($dvt$$2$$, this.$_maxY$));
    return $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setHasFeeler$ = function $$DvtChartPieLabelInfo$$$$$setHasFeeler$$($dvt$$2$$) {
    this.$_hasFeeler$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$getPosition$ = function $$DvtChartPieLabelInfo$$$$$getPosition$$() {
    return this.$_position$;
  };
  $DvtChartPieLabelInfo$$.prototype.setPosition = function $$DvtChartPieLabelInfo$$$$setPosition$($dvt$$2$$) {
    this.$_position$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setSlice$ = function $$DvtChartPieLabelInfo$$$$$setSlice$$($dvt$$2$$) {
    this.$_slice$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setSliceLabel$ = function $$DvtChartPieLabelInfo$$$$$setSliceLabel$$($dvt$$2$$) {
    this.$_sliceLabel$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.getWidth = function $$DvtChartPieLabelInfo$$$$getWidth$() {
    return this.$_width$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setWidth$ = function $$DvtChartPieLabelInfo$$$$$setWidth$$($dvt$$2$$) {
    this.$_width$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$getX$ = function $$DvtChartPieLabelInfo$$$$$getX$$() {
    return this.$_x$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setX$ = function $$DvtChartPieLabelInfo$$$$$setX$$($dvt$$2$$) {
    this.$_x$ = $dvt$$2$$;
  };
  $DvtChartPieLabelInfo$$.prototype.$getY$ = function $$DvtChartPieLabelInfo$$$$$getY$$() {
    return this.$_y$;
  };
  $DvtChartPieLabelInfo$$.prototype.$setY$ = function $$DvtChartPieLabelInfo$$$$$setY$$($dvt$$2$$) {
    this.$_y$ = $dvt$$2$$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieLabelUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartPieLabelUtils$$.$_MAX_LINES_PER_LABEL$ = 3;
  $DvtChartPieLabelUtils$$.$_COLLISION_MARGIN$ = 1;
  $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$ = 1;
  $DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$ = 2;
  $DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$ = 1.04;
  $DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ = .1;
  $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ = .1;
  $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ = .5;
  $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$ = 3;
  $DvtChartPieLabelUtils$$.$_NO_COLLISION$ = 0;
  $DvtChartPieLabelUtils$$.$_HALF_COLLISION$ = 1;
  $DvtChartPieLabelUtils$$.$_ALL_COLLISION$ = 2;
  $DvtChartPieLabelUtils$$.$layoutLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$layoutLabelsAndFeelers$$($dvt$$2$$) {
    $DvtChartPieLabelUtils$$.$_layoutInsideLabels$($dvt$$2$$, "auto" == $dvt$$2$$.$getLabelPosition$());
    $DvtChartPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$($dvt$$2$$);
  };
  $DvtChartPieLabelUtils$$.$_layoutInsideLabels$ = function $$DvtChartPieLabelUtils$$$$_layoutInsideLabels$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_slices$, $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartTooltipUtils$$++) {
      var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$], $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getSeriesLabelPosition$($DvtChartSeriesEffectUtils$$.$getSeriesIndex$());
      if ("none" != $DvtChartPieLabelInfo$$ && "outsideSlice" != $DvtChartPieLabelInfo$$ && !$DvtChartPieLabelUtils$$.$_skipSliceLabel$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$)) {
        var $DvtChartTypeUtils$$ = $DvtChartSeriesEffectUtils$$.$getAngleStart$() + $DvtChartSeriesEffectUtils$$.$getAngleExtent$() / 2, $DvtChartDataChangeFunnelSlice$$ = $DvtChartSeriesEffectUtils$$.$getInnerRadius$(), $DvtChartLineMarker$$ = $DvtChartSeriesEffectUtils$$.$getCenter$(), $DvtChartMarkerUtils$$ = 0, $DvtChartDataChangeLineArea$$ = 0, $DvtChartRangeMarker$$ = $DvtChartPieLabelUtils$$.$_createLabel$($DvtChartSeriesEffectUtils$$, !0);
        1 == $DvtSparkChartAutomation$$.length ? ($DvtChartMarkerUtils$$ = $DvtChartLineMarker$$.x, $DvtChartDataChangeLineArea$$ = $DvtChartLineMarker$$.y) : ($DvtChartMarkerUtils$$ = Math.max(.45, .65 - .45 * $DvtChartDataChangeFunnelSlice$$ / Math.max($DvtChartSeriesEffectUtils$$.$_radiusY$, .001)), $DvtChartTypeUtils$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartTypeUtils$$, $DvtChartLineMarker$$.x, $DvtChartLineMarker$$.y, $DvtChartDataChangeFunnelSlice$$ + ($DvtChartSeriesEffectUtils$$.$_radiusX$ - 
        $DvtChartDataChangeFunnelSlice$$) * $DvtChartMarkerUtils$$, $DvtChartDataChangeFunnelSlice$$ + ($DvtChartSeriesEffectUtils$$.$_radiusY$ - $DvtChartDataChangeFunnelSlice$$) * $DvtChartMarkerUtils$$), $DvtChartMarkerUtils$$ = $DvtChartTypeUtils$$.x, $DvtChartDataChangeLineArea$$ = $DvtChartTypeUtils$$.y);
        $DvtChartRangeMarker$$.$setX$($DvtChartMarkerUtils$$);
        $DvtChartRangeMarker$$.$setY$($DvtChartDataChangeLineArea$$);
        $DvtChartRangeMarker$$.$alignMiddle$();
        $DvtChartRangeMarker$$.$alignCenter$();
        for (var $DvtChartTypeUtils$$ = $dvt$$2$$.$TextUtils$.$guessTextDimensions$($DvtChartRangeMarker$$), $DvtChartLineMarker$$ = $DvtChartDataChangeFunnelSlice$$ = $DvtChartMarkerUtils$$, $DvtChartLineArea$$ = $DvtChartDataChangeLineArea$$ - $DvtChartTypeUtils$$.$h$ / 2, $DvtChartDataChangeLineArea$$ = $DvtChartDataChangeLineArea$$ + $DvtChartTypeUtils$$.$h$ / 2;$DvtChartSeriesEffectUtils$$.contains($DvtChartDataChangeFunnelSlice$$, $DvtChartLineArea$$) && $DvtChartSeriesEffectUtils$$.contains($DvtChartDataChangeFunnelSlice$$, 
        $DvtChartDataChangeLineArea$$);) {
          $DvtChartDataChangeFunnelSlice$$--;
        }
        for (;$DvtChartSeriesEffectUtils$$.contains($DvtChartLineMarker$$, $DvtChartLineArea$$) && $DvtChartSeriesEffectUtils$$.contains($DvtChartLineMarker$$, $DvtChartDataChangeLineArea$$);) {
          $DvtChartLineMarker$$++;
        }
        $DvtChartDataChangeFunnelSlice$$ = Math.ceil($DvtChartDataChangeFunnelSlice$$ + 3);
        $DvtChartLineMarker$$ = Math.floor($DvtChartLineMarker$$ - 3);
        $DvtChartMarkerUtils$$ = 2 * Math.min($DvtChartMarkerUtils$$ - $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$ - $DvtChartMarkerUtils$$);
        $DvtChartMarkerUtils$$ < $DvtChartTypeUtils$$.$w$ && ($DvtChartRangeMarker$$.$setX$(($DvtChartDataChangeFunnelSlice$$ + $DvtChartLineMarker$$) / 2), $DvtChartMarkerUtils$$ = $DvtChartLineMarker$$ - $DvtChartDataChangeFunnelSlice$$);
        $DvtSparkChartDefaults$$ && "center" != $DvtChartPieLabelInfo$$ ? $DvtChartRangeMarker$$.$getDimensions$().$w$ < $DvtChartMarkerUtils$$ ? $DvtChartSeriesEffectUtils$$.$setSliceLabel$($DvtChartRangeMarker$$) : $DvtChartSeriesEffectUtils$$.$setSliceLabel$(null) : ($DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getCtx$().$_stage$, $DvtChartDataChangeLineArea$$ = $DvtChartPieLabelUtils$$.$_isTextLabel$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$) ? null : $DvtChartRangeMarker$$.$getTextString$().length, 
        $dvt$$2$$.$TextUtils$.$fitText$($DvtChartRangeMarker$$, $DvtChartMarkerUtils$$, $DvtChartTypeUtils$$.$h$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeLineArea$$) && ($DvtChartPieLabelInfo$$.removeChild($DvtChartRangeMarker$$), $DvtChartSeriesEffectUtils$$.$setSliceLabel$($DvtChartRangeMarker$$)));
        null != $DvtChartSeriesEffectUtils$$.$_sliceLabel$ && $DvtChartSeriesEffectUtils$$.$setNoOutsideFeeler$();
      }
    }
  };
  $DvtChartPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$_layoutOutsideLabelsAndFeelers$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = [], $DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$.$_generateInitialLayout$($dvt$$2$$), $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$[0], $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$[1], $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$_refineInitialLayout$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$), $DvtChartTooltipUtils$$ = $DvtChartPieLabelUtils$$.$_refineInitialLayout$($dvt$$2$$, 
    $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
    $DvtSparkChartAutomation$$ == $DvtChartPieLabelUtils$$.$_HALF_COLLISION$ && $DvtChartTooltipUtils$$ != $DvtChartPieLabelUtils$$.$_NO_COLLISION$ && $DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartEventManager$$, !0, !0, !0);
    $DvtSparkChartAutomation$$ != $DvtChartPieLabelUtils$$.$_NO_COLLISION$ && $DvtChartTooltipUtils$$ == $DvtChartPieLabelUtils$$.$_HALF_COLLISION$ && $DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartDefaults$$, !1, !0, !0);
    $DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$);
    $DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
  };
  $DvtChartPieLabelUtils$$.$_createLabel$ = function $$DvtChartPieLabelUtils$$$$_createLabel$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.$getCtx$(), $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$ ? new $dvt$$2$$.$OutputText$($DvtChartTooltipUtils$$) : new $dvt$$2$$.$MultilineText$($DvtChartTooltipUtils$$), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$.$getOptions$().styleDefaults, $DvtChartPieRenderUtils$$ = [$DvtChartSeriesEffectUtils$$.dataLabelStyle, new $dvt$$2$$.$CSSStyle$($DvtChartSeriesEffectUtils$$.sliceLabelStyle)];
    ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartAutomation$$.$chart$, $DvtSparkChartEventManager$$.$getSeriesIndex$(), 0)) && $DvtChartPieRenderUtils$$.push(new $dvt$$2$$.$CSSStyle$($DvtSparkChartAutomation$$.labelStyle));
    $DvtSparkChartAutomation$$ = $dvt$$2$$.$CSSStyle$.$mergeStyles$($DvtChartPieRenderUtils$$);
    $DvtChartPieRenderUtils$$ = null != $DvtSparkChartAutomation$$.$getStyle$("color");
    !$DvtSparkChartDefaults$$ || $DvtChartPieRenderUtils$$ && !$dvt$$2$$.$Agent$.$isHighContrast$() ? $DvtChartPieRenderUtils$$ || $DvtSparkChartAutomation$$.$setStyle$("color", $DvtChartSeriesEffectUtils$$._defaultSliceLabelColor) : ($DvtChartPieRenderUtils$$ = $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$($DvtSparkChartEventManager$$.$getFillColor$()), $DvtSparkChartAutomation$$.$setStyle$("color", $DvtChartPieRenderUtils$$));
    $DvtChartTooltipUtils$$.$setCSSStyle$($DvtSparkChartAutomation$$);
    $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelUtils$$.$generateSliceLabelString$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$.sliceLabelType);
    $DvtChartTooltipUtils$$.$setTextString$($DvtChartSeriesEffectUtils$$);
    $DvtSparkChartEventManager$$.$setSliceLabelString$($DvtChartSeriesEffectUtils$$);
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartPieLabelUtils$$.$createPieCenter$ = function $$DvtChartPieLabelUtils$$$$createPieCenter$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelUtils$$.$getPieCenterOptions$($DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$ = $DvtChartSeriesEffectUtils$$.label, $DvtChartPieLabelInfo$$ = $DvtChartSeriesEffectUtils$$.renderer, $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.$getLabelPosition$(), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$.tooltip, 
    $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataChangeFunnelSlice$$ ? $DvtChartDataChangeFunnelSlice$$.renderer : null, $DvtChartLineMarker$$ = $DvtSparkChartEventManager$$.$getCenter$(), $DvtChartMarkerUtils$$ = $DvtSparkChartEventManager$$.$getInnerRadius$();
    if ($DvtChartPieRenderUtils$$ || $DvtChartPieLabelInfo$$) {
      var $DvtChartDataChangeLineArea$$ = $DvtSparkChartEventManager$$.$_radiusX$, $DvtChartMarkerUtils$$ = 0 < $DvtChartMarkerUtils$$ ? $DvtChartMarkerUtils$$ : "outsideSlice" == $DvtChartTypeUtils$$ ? .9 * $DvtChartDataChangeLineArea$$ : .5 * $DvtChartDataChangeLineArea$$, $DvtChartTypeUtils$$ = $DvtChartMarkerUtils$$ * Math.sqrt(2);
      $DvtChartPieRenderUtils$$ && ($DvtChartDataChangeLineArea$$ = new $dvt$$2$$.$MultilineText$($DvtSparkChartAutomation$$), $DvtChartDataChangeLineArea$$.$setCSSStyle$($DvtChartSeriesEffectUtils$$.labelStyle), "number" === typeof $DvtChartPieRenderUtils$$ && ($DvtChartPieRenderUtils$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieRenderUtils$$, 0)), $DvtChartDataChangeLineArea$$.$setTextString$($DvtChartPieRenderUtils$$), 
      $dvt$$2$$.$TextUtils$.$fitText$($DvtChartDataChangeLineArea$$, $DvtChartTypeUtils$$, $DvtChartTypeUtils$$, $DvtSparkChartEventManager$$) && ($DvtChartSeriesEffectUtils$$ = $DvtChartDataChangeLineArea$$.$getDimensions$(), $DvtChartDataChangeLineArea$$.$setY$($DvtChartLineMarker$$.y - $DvtChartSeriesEffectUtils$$.$h$ / 2), $DvtChartDataChangeLineArea$$.$setX$($DvtChartLineMarker$$.x), $DvtChartDataChangeLineArea$$.$alignCenter$(), $DvtChartDataChangeLineArea$$.$isTruncated$() && !$DvtChartDataChangeFunnelSlice$$ && 
      $DvtSparkChartEventManager$$.$chart$.$getEventManager$().$associate$($DvtChartDataChangeLineArea$$, new $dvt$$2$$.$SimpleObjPeer$($DvtChartDataChangeLineArea$$.$getTextString$())), $DvtSparkChartEventManager$$.$addChild$($DvtChartDataChangeLineArea$$)));
      $DvtChartDataChangeFunnelSlice$$ && ($DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$Circle$($DvtSparkChartAutomation$$, $DvtChartLineMarker$$.x, $DvtChartLineMarker$$.y, $DvtChartMarkerUtils$$), $DvtChartSeriesEffectUtils$$.$setInvisibleFill$(), $DvtSparkChartEventManager$$.$addChild$($DvtChartSeriesEffectUtils$$), $DvtChartDataChangeLineArea$$ = $DvtSparkChartEventManager$$.$getCtx$().$getTooltipManager$(), $DvtSparkChartEventManager$$.$chart$.$getEventManager$().$associate$($DvtChartSeriesEffectUtils$$, 
      new $dvt$$2$$.$CustomDatatipPeer$($DvtChartDataChangeLineArea$$, $DvtChartDataChangeFunnelSlice$$, "#4b4b4b", {component:$DvtSparkChartDefaults$$._widgetConstructor, label:$DvtChartPieRenderUtils$$})));
      $DvtChartPieLabelInfo$$ && ($DvtChartPieRenderUtils$$ = {outerBounds:{x:$DvtChartLineMarker$$.x - $DvtChartMarkerUtils$$, y:$DvtChartLineMarker$$.y - $DvtChartMarkerUtils$$, width:2 * $DvtChartMarkerUtils$$, height:2 * $DvtChartMarkerUtils$$}, innerBounds:{x:$DvtChartLineMarker$$.x - $DvtChartTypeUtils$$ / 2, y:$DvtChartLineMarker$$.y - $DvtChartTypeUtils$$ / 2, width:$DvtChartTypeUtils$$, height:$DvtChartTypeUtils$$}, label:$DvtChartPieRenderUtils$$, component:$DvtSparkChartDefaults$$._widgetConstructor}, 
      $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$.$_parentDiv$, ($DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.$chart$.$pieCenterDiv$) && $DvtSparkChartDefaults$$.removeChild($DvtChartDataChangeFunnelSlice$$), $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$($DvtChartPieRenderUtils$$)) && ($DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$createOverlayDiv$(), $DvtChartPieLabelInfo$$.appendChild($DvtChartPieRenderUtils$$), $DvtSparkChartEventManager$$.$chart$.$pieCenterDiv$ = 
      $DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$.appendChild($DvtChartPieLabelInfo$$), ($DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.$_overlayAttachedCallback$) && $DvtSparkChartEventManager$$($DvtChartPieLabelInfo$$));
    }
  };
  $DvtChartPieLabelUtils$$.$generateSliceLabelString$ = function $$DvtChartPieLabelUtils$$$$generateSliceLabelString$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$getDefaultSliceLabelString$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$_pieChart$.$getOptions$().dataLabel;
    $DvtChartSeriesEffectUtils$$ && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataContext$($dvt$$2$$.$_chart$, $dvt$$2$$.$getSeriesIndex$(), 0), $DvtSparkChartDefaults$$.label = $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$($DvtSparkChartDefaults$$), "number" == typeof $DvtSparkChartDefaults$$ && ($DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$.$_pieChart$.$chart$, "label"), $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$.$formatValue$($dvt$$2$$.$_pieChart$.$getCtx$(), 
    $DvtChartSeriesEffectUtils$$, $DvtSparkChartDefaults$$)));
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$;
  };
  $DvtChartPieLabelUtils$$.$getDefaultSliceLabelString$ = function $$DvtChartPieLabelUtils$$$$getDefaultSliceLabelString$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_pieChart$, $DvtSparkChartAutomation$$ = $dvt$$2$$.$_customLabel$, $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.$getValueFormat$($DvtSparkChartDefaults$$.$chart$, "label");
    if (null != $DvtSparkChartAutomation$$) {
      return "number" == typeof $DvtSparkChartAutomation$$ ? $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$) : $DvtSparkChartAutomation$$;
    }
    var $DvtChartPieLabelUtils$$ = $dvt$$2$$.getValue(), $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getTotalValue$(), $DvtChartPieRenderUtils$$ = 0 == $DvtSparkChartAutomation$$ ? 0 : $DvtChartPieLabelUtils$$ / $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$ = .01 > $DvtChartPieRenderUtils$$ ? 3 : .1 > $DvtChartPieRenderUtils$$ ? 2 : 1 > $DvtChartPieRenderUtils$$ ? 1 : 0;
    150 > 2 * $DvtSparkChartDefaults$$.$_radiusX$ && ($DvtChartPieLabelInfo$$ = Math.max($DvtChartPieLabelInfo$$ - 1, 0));
    var $DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$.$getCtx$().$getNumberConverter$({style:"percent", maximumFractionDigits:$DvtChartPieLabelInfo$$, minimumFractionDigits:$DvtChartPieLabelInfo$$}), $DvtSparkChartAutomation$$ = "";
    $DvtChartTypeUtils$$ && $DvtChartTypeUtils$$.getAsString ? $DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.getAsString($DvtChartPieRenderUtils$$) : $DvtChartTypeUtils$$ && $DvtChartTypeUtils$$.format ? $DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.format($DvtChartPieRenderUtils$$) : ($DvtChartPieRenderUtils$$ *= 100, $DvtSparkChartAutomation$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), {}, $DvtChartPieRenderUtils$$, null, null, 100 == $DvtChartPieRenderUtils$$ ? 
    1 : Math.pow(10, -1 * $DvtChartPieLabelInfo$$)) + "%");
    $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$);
    $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$getSeriesLabel$();
    return "percent" == $DvtSparkChartEventManager$$ ? $DvtSparkChartAutomation$$ : "number" == $DvtSparkChartEventManager$$ ? $DvtSparkChartDefaults$$ : "text" == $DvtSparkChartEventManager$$ ? $DvtChartSeriesEffectUtils$$ : "textAndPercent" == $DvtSparkChartEventManager$$ ? $DvtChartSeriesEffectUtils$$ + ", " + $DvtSparkChartAutomation$$ : null;
  };
  $DvtChartPieLabelUtils$$.$_refineInitialLayout$ = function $$DvtChartPieLabelUtils$$$$_refineInitialLayout$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if ($DvtSparkChartEventManager$$ && 0 < $DvtSparkChartEventManager$$.length) {
      var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_frame$.y, $DvtChartTooltipUtils$$ = !1, $DvtChartSeriesEffectUtils$$ = !1, $DvtChartPieRenderUtils$$ = !1, $DvtChartPieLabelInfo$$ = 0, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$ = !1, $DvtChartLineMarker$$ = $DvtChartDataChangeFunnelSlice$$;
      $DvtChartTypeUtils$$ = !1;
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ == $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$;
      for (var $DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartMarkerUtils$$++) {
        $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$[$DvtChartMarkerUtils$$], $DvtChartLineMarker$$ = $DvtChartDataChangeFunnelSlice$$, 90 < $DvtChartTypeUtils$$.$getPosition$() && ($DvtChartDataChangeFunnelSlice$$ = !0), $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$getY$() + $DvtChartTypeUtils$$.getHeight(), ($DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$ - $DvtChartTypeUtils$$.$getY$() > $DvtChartPieLabelUtils$$.$_COLLISION_MARGIN$) && ($DvtChartDataChangeFunnelSlice$$ ? $DvtChartDataChangeFunnelSlice$$ && 
        !$DvtChartLineMarker$$ ? $DvtChartSeriesEffectUtils$$ = !0 : $DvtChartPieRenderUtils$$ = !0 : $DvtChartTooltipUtils$$ = !0), $DvtChartPieLabelInfo$$ > $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = $DvtChartPieLabelInfo$$);
      }
      return $DvtChartTooltipUtils$$ && $DvtChartPieRenderUtils$$ || $DvtChartSeriesEffectUtils$$ ? ($DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, !0, !0), $DvtChartPieLabelUtils$$.$_ALL_COLLISION$) : $DvtChartTooltipUtils$$ ? ($DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, !0, !1), $DvtChartPieLabelUtils$$.$_HALF_COLLISION$) : $DvtChartPieRenderUtils$$ ? ($DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, 
      $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, !1, !0), $DvtChartPieLabelUtils$$.$_HALF_COLLISION$) : $DvtChartPieLabelUtils$$.$_NO_COLLISION$;
    }
  };
  $DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$_setLabelsAndFeelers$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if (!(null == $DvtSparkChartEventManager$$ || 0 >= $DvtSparkChartEventManager$$.length)) {
      var $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$ == $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$, $DvtChartPieLabelInfo$$ = $dvt$$2$$.$_frame$, $DvtChartTypeUtils$$ = Infinity;
      for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
        $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $DvtSparkChartAutomation$$ = $DvtChartSeriesEffectUtils$$.$_slice$, $DvtChartSeriesEffectUtils$$.$_hasFeeler$ ? ($DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$_calculateFeeler$($DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), $DvtChartTooltipUtils$$ = $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($dvt$$2$$, $DvtChartSeriesEffectUtils$$.$getX$(), $DvtChartPieRenderUtils$$), 
        $DvtChartSeriesEffectUtils$$.getWidth() - $DvtSparkChartAutomation$$ >= $DvtChartTooltipUtils$$ || 0 == $DvtChartSeriesEffectUtils$$.getWidth() ? $DvtChartSeriesEffectUtils$$.$setHasFeeler$(!1) : $DvtChartTypeUtils$$ = Math.min($DvtChartTypeUtils$$, $DvtSparkChartAutomation$$)) : $DvtSparkChartAutomation$$.$setNoOutsideFeeler$();
      }
      for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
        $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $DvtSparkChartAutomation$$ = $DvtChartSeriesEffectUtils$$.$_slice$, $DvtChartTooltipUtils$$ = $DvtChartSeriesEffectUtils$$.$_sliceLabel$, $DvtChartSeriesEffectUtils$$.$_hasFeeler$ && ($DvtChartPieRenderUtils$$ ? $DvtChartSeriesEffectUtils$$.$setX$($DvtChartSeriesEffectUtils$$.$getX$() + $DvtChartTypeUtils$$) : $DvtChartSeriesEffectUtils$$.$setX$($DvtChartSeriesEffectUtils$$.$getX$() - $DvtChartTypeUtils$$), 
        $DvtChartPieLabelUtils$$.$_calculateFeeler$($DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), $DvtChartTooltipUtils$$.$setMaxLines$(1)), $DvtChartTooltipUtils$$.$setY$($DvtChartSeriesEffectUtils$$.$getY$()), $DvtChartTooltipUtils$$.$setX$($DvtChartSeriesEffectUtils$$.$getX$()), $DvtChartSeriesEffectUtils$$.$getY$() < $DvtChartPieLabelInfo$$.y || $DvtChartSeriesEffectUtils$$.$getY$() + $DvtChartSeriesEffectUtils$$.getHeight() > $DvtChartPieLabelInfo$$.y + 
        $DvtChartPieLabelInfo$$.$h$ ? ($DvtSparkChartAutomation$$.$setSliceLabel$(null), $DvtSparkChartAutomation$$.$setNoOutsideFeeler$()) : ($DvtChartPieLabelUtils$$.$_truncateSliceLabel$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$), 0 == $DvtChartSeriesEffectUtils$$.getWidth() || 0 == $DvtChartSeriesEffectUtils$$.getHeight() ? ($DvtSparkChartAutomation$$.$setSliceLabel$(null), $DvtSparkChartAutomation$$.$setNoOutsideFeeler$()) : $DvtSparkChartAutomation$$.$setSliceLabel$($DvtChartTooltipUtils$$))
        ;
      }
    }
  };
  $DvtChartPieLabelUtils$$.$_calculateFeeler$ = function $$DvtChartPieLabelUtils$$$$_calculateFeeler$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getX$(), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getY$() + $DvtSparkChartEventManager$$.getHeight() * $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$, $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ * $DvtSparkChartDefaults$$.$_radiusX$, $DvtChartTypeUtils$$;
    $DvtSparkChartAutomation$$ ? ($DvtChartTooltipUtils$$ += $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $DvtChartTypeUtils$$ = $DvtChartTooltipUtils$$ + $DvtChartPieLabelInfo$$) : ($DvtChartTooltipUtils$$ -= $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $DvtChartTypeUtils$$ = $DvtChartTooltipUtils$$ - $DvtChartPieLabelInfo$$);
    var $DvtChartDataChangeFunnelSlice$$ = {x:0, y:0};
    $DvtChartTypeUtils$$ = {x:$DvtChartTypeUtils$$, y:$DvtChartSeriesEffectUtils$$};
    $DvtChartTooltipUtils$$ = {x:$DvtChartTooltipUtils$$, y:$DvtChartSeriesEffectUtils$$};
    $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.$getAngle$();
    $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($DvtChartDataChangeFunnelSlice$$, $DvtSparkChartDefaults$$.getDepth());
    $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartDataChangeFunnelSlice$$, $DvtSparkChartDefaults$$.$getCenter$().x, $DvtSparkChartDefaults$$.$getCenter$().y + $DvtChartSeriesEffectUtils$$, $DvtSparkChartDefaults$$.$_radiusX$, $DvtSparkChartDefaults$$.$_radiusY$);
    $DvtSparkChartEventManager$$ = $dvt$$2$$.Math.$degreesToRads$($DvtSparkChartEventManager$$.$getPosition$());
    var $DvtChartSeriesEffectUtils$$ = Math.abs(Math.atan2($DvtChartTypeUtils$$.x - $DvtChartDataChangeFunnelSlice$$.x, $DvtChartDataChangeFunnelSlice$$.y - $DvtChartTypeUtils$$.y)), $DvtChartLineMarker$$ = ($DvtChartDataChangeFunnelSlice$$.y - $DvtChartTypeUtils$$.y) * Math.tan($DvtSparkChartEventManager$$);
    if ($DvtSparkChartEventManager$$ > Math.PI / 2 && $DvtChartSeriesEffectUtils$$ > Math.PI / 2 && $DvtChartSeriesEffectUtils$$ < $DvtSparkChartEventManager$$ || $DvtSparkChartEventManager$$ < Math.PI / 2 && $DvtChartSeriesEffectUtils$$ < Math.PI / 2 && $DvtChartSeriesEffectUtils$$ > $DvtSparkChartEventManager$$) {
      $DvtChartTypeUtils$$.x = $DvtSparkChartAutomation$$ ? $DvtChartDataChangeFunnelSlice$$.x - $DvtChartLineMarker$$ : $DvtChartDataChangeFunnelSlice$$.x + $DvtChartLineMarker$$;
    }
    $DvtSparkChartDefaults$$.$setOutsideFeelerPoints$($DvtChartDataChangeFunnelSlice$$, $DvtChartTypeUtils$$, $DvtChartTooltipUtils$$);
    return Math.abs($DvtChartTooltipUtils$$.x - $DvtChartTypeUtils$$.x) - $DvtChartPieLabelInfo$$;
  };
  $DvtChartPieLabelUtils$$.$_adjustForDepth$ = function $$DvtChartPieLabelUtils$$$$_adjustForDepth$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = 0;
    189 < $dvt$$2$$ && 351 > $dvt$$2$$ && ($DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieLabelUtils$$.$_getMiddleLabel$ = function $$DvtChartPieLabelUtils$$$$_getMiddleLabel$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = 91, $DvtSparkChartDefaults$$ = -1, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartTooltipUtils$$ = $dvt$$2$$[$DvtSparkChartAutomation$$].$getPosition$();
      Math.abs($DvtChartTooltipUtils$$ - 90) < $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ = Math.abs($DvtChartTooltipUtils$$ - 90), $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$);
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$ = function $$DvtChartPieLabelUtils$$$$_setOptimalLabelPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$.$setX$($DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_radiusY$ * (1 + $DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$);
    var $DvtChartTooltipUtils$$ = $dvt$$2$$.Math.$degreesToRads$($DvtSparkChartDefaults$$.$getPosition$());
    $DvtSparkChartAutomation$$ *= Math.cos($DvtChartTooltipUtils$$);
    $DvtChartTooltipUtils$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($DvtSparkChartDefaults$$.$getAngle$(), $DvtSparkChartEventManager$$.getDepth());
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getCenter$().y - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$.getHeight() * $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ + $DvtChartTooltipUtils$$;
    $DvtSparkChartDefaults$$.$setY$($DvtSparkChartDefaults$$.$boundY$($DvtSparkChartEventManager$$));
  };
  $DvtChartPieLabelUtils$$.$_getRadFeelerAngle$ = function $$DvtChartPieLabelUtils$$$$_getRadFeelerAngle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_slice$, $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.$getCenter$();
    $dvt$$2$$ = $dvt$$2$$.$getAngle$();
    var $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($dvt$$2$$, $DvtSparkChartAutomation$$.getDepth()), $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($dvt$$2$$, $DvtChartTooltipUtils$$.x, $DvtChartTooltipUtils$$.y + $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$.$_radiusX$, $DvtSparkChartAutomation$$.$_radiusY$);
    return Math.atan2(Math.abs($DvtSparkChartEventManager$$ - $DvtSparkChartAutomation$$.x), $DvtSparkChartAutomation$$.y - $DvtSparkChartDefaults$$);
  };
  $DvtChartPieLabelUtils$$.$_columnLabels$ = function $$DvtChartPieLabelUtils$$$$_columnLabels$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    var $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$_frame$, $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$.y, $DvtChartTypeUtils$$ = $DvtChartPieRenderUtils$$.y + $DvtChartPieRenderUtils$$.$h$, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$ = 0, $DvtChartMarkerUtils$$, $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$getCenter$().x, $DvtChartDataChangeLineArea$$;
    $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.$_radiusX$ * (1 + $DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ + $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$);
    $DvtSparkChartAutomation$$ ? ($DvtChartPieRenderUtils$$ -= $DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeLineArea$$ = $DvtChartPieRenderUtils$$ + $DvtSparkChartEventManager$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$) : ($DvtChartPieRenderUtils$$ += $DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeLineArea$$ = $DvtChartPieRenderUtils$$ - $DvtSparkChartEventManager$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$);
    for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartLineMarker$$ = $dvt$$2$$.Math.$degreesToRads$($DvtChartDataChangeFunnelSlice$$.$getPosition$()), $DvtChartMarkerUtils$$ = $DvtChartPieLabelUtils$$.$_getRadFeelerAngle$($DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeLineArea$$, $DvtChartPieLabelInfo$$), $DvtChartMarkerUtils$$ - $DvtChartLineMarker$$ > .45 * Math.PI || $DvtChartPieLabelUtils$$.$_skipSliceLabel$($DvtSparkChartEventManager$$, 
      $DvtChartDataChangeFunnelSlice$$.$_slice$) ? ($DvtSparkChartDefaults$$.splice($DvtSparkChartAutomation$$, 1), $DvtSparkChartAutomation$$--) : ($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$setMinY$($DvtChartPieLabelInfo$$), $DvtChartPieLabelInfo$$ += $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].getHeight());
    }
    for ($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.length - 1;0 <= $DvtSparkChartAutomation$$;$DvtSparkChartAutomation$$--) {
      $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartLineMarker$$ = $dvt$$2$$.Math.$degreesToRads$($DvtChartDataChangeFunnelSlice$$.$getPosition$()), $DvtChartMarkerUtils$$ = $DvtChartPieLabelUtils$$.$_getRadFeelerAngle$($DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeLineArea$$, $DvtChartTypeUtils$$), $DvtChartLineMarker$$ - $DvtChartMarkerUtils$$ > .45 * Math.PI || $DvtChartPieLabelUtils$$.$_skipSliceLabel$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$.$_slice$) ? 
      $DvtSparkChartDefaults$$.splice($DvtSparkChartAutomation$$, 1) : ($DvtChartTypeUtils$$ -= $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].getHeight(), $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$setMaxY$($DvtChartTypeUtils$$));
    }
    if (0 != $DvtSparkChartDefaults$$.length) {
      $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$_getMiddleLabel$($DvtSparkChartDefaults$$);
      $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$[$DvtChartPieLabelInfo$$];
      $DvtChartTooltipUtils$$ && !$DvtChartSeriesEffectUtils$$ && $DvtSparkChartAutomation$$.$_minY$ + $DvtSparkChartAutomation$$.getHeight() > $DvtSparkChartEventManager$$.$getCenter$().y && ($DvtChartSeriesEffectUtils$$ = !0);
      $DvtChartSeriesEffectUtils$$ && !$DvtChartTooltipUtils$$ && $DvtSparkChartAutomation$$.$_maxY$ < $DvtSparkChartEventManager$$.$getCenter$().y && ($DvtChartTooltipUtils$$ = !0);
      $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartAutomation$$.$getPosition$();
      if ($DvtChartSeriesEffectUtils$$ && $DvtChartTooltipUtils$$ || 90 < $DvtChartDataChangeFunnelSlice$$ && $DvtChartSeriesEffectUtils$$ || 90 >= $DvtChartDataChangeFunnelSlice$$ && $DvtChartTooltipUtils$$) {
        $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), $DvtSparkChartAutomation$$.$setHasFeeler$(!0);
      }
      $DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$.$getY$();
      $DvtChartLineMarker$$ = $DvtSparkChartAutomation$$.$getY$() + $DvtSparkChartAutomation$$.getHeight();
      if ($DvtChartTooltipUtils$$) {
        for ($DvtSparkChartAutomation$$ = $DvtChartPieLabelInfo$$ - 1;0 <= $DvtSparkChartAutomation$$;$DvtSparkChartAutomation$$--) {
          $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartMarkerUtils$$ = $DvtChartDataChangeFunnelSlice$$.getHeight(), $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieRenderUtils$$), $DvtChartDataChangeFunnelSlice$$.$setHasFeeler$(!0), $DvtChartTooltipUtils$$ = $DvtChartDataChangeFunnelSlice$$.$getY$(), $DvtChartTypeUtils$$ = $DvtChartTooltipUtils$$ + $DvtChartMarkerUtils$$ < 
          $DvtChartTypeUtils$$ ? $DvtChartTooltipUtils$$ : $DvtChartTypeUtils$$ - $DvtChartMarkerUtils$$, $DvtChartDataChangeFunnelSlice$$.$setY$($DvtChartTypeUtils$$);
        }
      }
      if ($DvtChartSeriesEffectUtils$$) {
        for ($DvtSparkChartAutomation$$ = $DvtChartPieLabelInfo$$ + 1;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
          $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartMarkerUtils$$ = $DvtChartDataChangeFunnelSlice$$.getHeight(), $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieRenderUtils$$), $DvtChartDataChangeFunnelSlice$$.$setHasFeeler$(!0), $DvtChartTooltipUtils$$ = $DvtChartDataChangeFunnelSlice$$.$getY$(), $DvtChartLineMarker$$ = $DvtChartTooltipUtils$$ > $DvtChartLineMarker$$ ? 
          $DvtChartTooltipUtils$$ + $DvtChartMarkerUtils$$ : $DvtChartLineMarker$$ + $DvtChartMarkerUtils$$, $DvtChartDataChangeFunnelSlice$$.$setY$($DvtChartLineMarker$$ - $DvtChartMarkerUtils$$);
        }
      }
    }
  };
  $DvtChartPieLabelUtils$$.$_truncateSliceLabel$ = function $$DvtChartPieLabelUtils$$$$_truncateSliceLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.$_sliceLabel$, $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.$getCSSStyle$(), $DvtChartPieRenderUtils$$ = 0, $DvtChartPieRenderUtils$$ = $dvt$$2$$.$getNumChildren$(), $DvtChartPieLabelInfo$$ = !1;
    $dvt$$2$$.contains($DvtChartTooltipUtils$$) || ($dvt$$2$$.$addChild$($DvtChartTooltipUtils$$), $DvtChartPieLabelInfo$$ = !0);
    $DvtChartTooltipUtils$$.$setCSSStyle$($DvtChartSeriesEffectUtils$$);
    $DvtChartTooltipUtils$$.$setTextString$($DvtSparkChartEventManager$$.$_sliceLabelString$);
    $DvtChartPieLabelInfo$$ && $dvt$$2$$.$removeChildAt$($DvtChartPieRenderUtils$$);
    $DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($dvt$$2$$, $DvtSparkChartDefaults$$.$getX$(), $DvtSparkChartAutomation$$);
    $dvt$$2$$ = $DvtChartPieLabelUtils$$.$_getTextDimension$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, $DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$.$_initialNumLines$);
    $DvtSparkChartDefaults$$.$setWidth$($dvt$$2$$.x);
    $DvtSparkChartDefaults$$.getHeight() != $dvt$$2$$.y && $DvtSparkChartDefaults$$.$setHeight$($dvt$$2$$.y);
  };
  $DvtChartPieLabelUtils$$.$_generateInitialLayout$ = function $$DvtChartPieLabelUtils$$$$_generateInitialLayout$$($dvt$$2$$) {
    for (var $DvtSparkChartEventManager$$ = Array(2), $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = [], $DvtChartTooltipUtils$$ = $dvt$$2$$.$_slices$, $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$_frame$, $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartTooltipUtils$$.length;$DvtChartPieLabelInfo$$++) {
      var $DvtChartTypeUtils$$ = $DvtChartTooltipUtils$$[$DvtChartPieLabelInfo$$], $DvtChartDataChangeFunnelSlice$$ = $dvt$$2$$.$getSeriesLabelPosition$($DvtChartTypeUtils$$.$getSeriesIndex$());
      if (null == $DvtChartTypeUtils$$.$_sliceLabel$ && "none" != $DvtChartDataChangeFunnelSlice$$ && "center" != $DvtChartDataChangeFunnelSlice$$ && !$DvtChartPieLabelUtils$$.$_skipSliceLabel$($dvt$$2$$, $DvtChartTypeUtils$$)) {
        var $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelUtils$$.$_createLabel$($DvtChartTypeUtils$$, !1), $DvtChartLineMarker$$ = $DvtChartTypeUtils$$.$getAngleStart$() + $DvtChartTypeUtils$$.$getAngleExtent$() / 2;
        360 < $DvtChartLineMarker$$ && ($DvtChartLineMarker$$ -= 360);
        0 > $DvtChartLineMarker$$ && ($DvtChartLineMarker$$ += 360);
        var $DvtChartMarkerUtils$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartLineMarker$$, $dvt$$2$$.$getCenter$().x, $dvt$$2$$.$getCenter$().y, $dvt$$2$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$, $dvt$$2$$.$_radiusY$ * $DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$), $DvtChartDataChangeLineArea$$ = $DvtChartPieLabelUtils$$.$_getTextDimension$($dvt$$2$$, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($dvt$$2$$, 
        $DvtChartMarkerUtils$$.x, 90 <= $DvtChartLineMarker$$ && 270 > $DvtChartLineMarker$$), $DvtChartPieLabelUtils$$.$_MAX_LINES_PER_LABEL$);
        165 > $DvtChartLineMarker$$ && 15 < $DvtChartLineMarker$$ ? $DvtChartMarkerUtils$$.y -= 1 * $DvtChartDataChangeLineArea$$.y : 15 > $DvtChartLineMarker$$ || 345 < $DvtChartLineMarker$$ ? ($DvtChartMarkerUtils$$.y -= .5 * $DvtChartDataChangeLineArea$$.y, $DvtChartMarkerUtils$$.x += .2 * $DvtChartDataChangeLineArea$$.y) : 165 < $DvtChartLineMarker$$ && 195 > $DvtChartLineMarker$$ && ($DvtChartMarkerUtils$$.y -= .5 * $DvtChartDataChangeLineArea$$.y, $DvtChartMarkerUtils$$.x -= .2 * $DvtChartDataChangeLineArea$$.y);
        var $DvtChartRangeMarker$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($DvtChartLineMarker$$, $dvt$$2$$.getDepth());
        $DvtChartMarkerUtils$$.y += $DvtChartRangeMarker$$;
        1 == $DvtChartTooltipUtils$$.length && ($DvtChartMarkerUtils$$.x -= $DvtChartDataChangeLineArea$$.x / 2);
        $DvtChartMarkerUtils$$.y < $DvtChartSeriesEffectUtils$$.y || $DvtChartMarkerUtils$$.y + $DvtChartDataChangeLineArea$$.y > $DvtChartSeriesEffectUtils$$.y + $DvtChartSeriesEffectUtils$$.$h$ || (90 <= $DvtChartLineMarker$$ && 270 > $DvtChartLineMarker$$ ? ($DvtChartDataChangeFunnelSlice$$.$alignRight$(), $DvtChartRangeMarker$$ = $DvtChartLineMarker$$ - 90, $DvtChartPieLabelUtils$$.$_createLabelInfo$($DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$, $DvtChartRangeMarker$$, 
        $DvtChartDataChangeLineArea$$, $DvtChartMarkerUtils$$, $DvtSparkChartDefaults$$)) : ($DvtChartRangeMarker$$ = 90 >= $DvtChartLineMarker$$ ? Math.abs(90 - $DvtChartLineMarker$$) : 180 - ($DvtChartLineMarker$$ - 270), $DvtChartPieLabelUtils$$.$_createLabelInfo$($DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$, $DvtChartMarkerUtils$$, $DvtSparkChartAutomation$$)));
      }
    }
    $DvtSparkChartEventManager$$[0] = $DvtSparkChartDefaults$$;
    $DvtSparkChartEventManager$$[1] = $DvtSparkChartAutomation$$;
    return $DvtSparkChartEventManager$$;
  };
  $DvtChartPieLabelUtils$$.$_createLabelInfo$ = function $$DvtChartPieLabelUtils$$$$_createLabelInfo$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$) {
    for (var $DvtChartPieRenderUtils$$ = -1, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartPieLabelUtils$$.length;$DvtChartDataChangeFunnelSlice$$++) {
      if ($DvtChartTypeUtils$$ = $DvtChartPieLabelUtils$$[$DvtChartDataChangeFunnelSlice$$], $DvtChartTypeUtils$$.$getPosition$() > $DvtSparkChartAutomation$$) {
        $DvtChartPieRenderUtils$$ = $DvtChartDataChangeFunnelSlice$$;
        break;
      }
    }
    -1 == $DvtChartPieRenderUtils$$ && ($DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$.length);
    $DvtChartTypeUtils$$ = new $DvtChartPieLabelInfo$$;
    $DvtChartTypeUtils$$.setPosition($DvtSparkChartAutomation$$);
    $DvtChartTypeUtils$$.$setAngle$($DvtSparkChartDefaults$$);
    $DvtChartTypeUtils$$.$setSliceLabel$($DvtSparkChartEventManager$$);
    $DvtChartTypeUtils$$.$setSlice$($dvt$$2$$);
    $DvtChartTypeUtils$$.$setWidth$($DvtChartTooltipUtils$$.x);
    $DvtChartTypeUtils$$.$setHeight$($DvtChartTooltipUtils$$.y);
    $DvtChartTypeUtils$$.$setX$($DvtChartSeriesEffectUtils$$.x);
    $DvtChartTypeUtils$$.$setY$($DvtChartSeriesEffectUtils$$.y);
    $DvtChartPieLabelUtils$$.splice($DvtChartPieRenderUtils$$, 0, $DvtChartTypeUtils$$);
  };
  $DvtChartPieLabelUtils$$.$_getTextDimension$ = function $$DvtChartPieLabelUtils$$$$_getTextDimension$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    $DvtSparkChartAutomation$$.$setMaxLines$($DvtChartSeriesEffectUtils$$);
    $DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$.$_isTextLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? null : $DvtSparkChartAutomation$$.$getTextString$().length;
    return $dvt$$2$$.$TextUtils$.$fitText$($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, Infinity, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? ($DvtSparkChartEventManager$$.$addChild$($DvtSparkChartAutomation$$), $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.$getDimensions$(), $DvtSparkChartEventManager$$.removeChild($DvtSparkChartAutomation$$), {x:$DvtChartTooltipUtils$$.$w$, y:$DvtChartTooltipUtils$$.$h$}) : {x:0, y:0};
  };
  $DvtChartPieLabelUtils$$.$_isTextLabel$ = function $$DvtChartPieLabelUtils$$$$_isTextLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$_customLabel$, $DvtSparkChartAutomation$$ = null != $dvt$$2$$.$getOptions$().dataLabel;
    return -1 != $dvt$$2$$.$getOptions$().styleDefaults.sliceLabelType.indexOf("text") || null != $DvtSparkChartDefaults$$ && "number" != typeof $DvtSparkChartDefaults$$ || $DvtSparkChartAutomation$$;
  };
  $DvtChartPieLabelUtils$$.$getMaxLabelWidth$ = function $$DvtChartPieLabelUtils$$$$getMaxLabelWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$ = $dvt$$2$$.$_frame$;
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartEventManager$$ - $dvt$$2$$.x : $dvt$$2$$.x + $dvt$$2$$.$w$ - $DvtSparkChartEventManager$$;
  };
  $DvtChartPieLabelUtils$$.$getPieCenterOptions$ = function $$DvtChartPieLabelUtils$$$$getPieCenterOptions$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$JsonUtils$.clone($DvtSparkChartEventManager$$.pieCenter), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.pieCenterLabel;
    $DvtSparkChartAutomation$$ && ($DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.style, ($DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.text) && ($DvtSparkChartDefaults$$.label = $DvtSparkChartAutomation$$), $DvtSparkChartEventManager$$ && ($DvtSparkChartDefaults$$.labelStyle = new $dvt$$2$$.$CSSStyle$($DvtSparkChartEventManager$$)));
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartPieLabelUtils$$.$_skipSliceLabel$ = function $$DvtChartPieLabelUtils$$$$_skipSliceLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return 3 > $DvtSparkChartEventManager$$.$getAngleExtent$() && 120 < $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$.$chart$);
  };
  var $DvtChartRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartRenderer$$.$_BUTTON_SIZE$ = 16;
  $DvtChartRenderer$$.$_BUTTON_PADDING$ = 5;
  $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$ = 4;
  $DvtChartRenderer$$.$_BUTTON_OPACITY$ = .8;
  $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$ = .05;
  $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ = .2;
  $DvtChartRenderer$$.$render$ = function $$DvtChartRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartRenderer$$.$_renderBackground$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ($DvtChartDataUtils$$.$hasInvalidData$($dvt$$2$$)) {
      $DvtChartRenderer$$.$renderEmptyText$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    } else {
      $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) || ($dvt$$2$$.$getOptions$()._maxOverflowCoord = $DvtSparkChartDefaults$$.x + $DvtSparkChartDefaults$$.$w$, $dvt$$2$$.$getOptions$()._minOverflowCoord = $DvtSparkChartDefaults$$.x);
      $DvtChartRenderer$$.$_addOuterGaps$($dvt$$2$$, $DvtSparkChartDefaults$$);
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.clone();
      $DvtChartRenderer$$.$_renderTitles$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $DvtChartLegendRenderer$$.$render$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      var $DvtChartTooltipUtils$$ = $DvtChartRenderer$$.$_prerenderHorizScrollbar$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartSeriesEffectUtils$$ = $DvtChartRenderer$$.$_prerenderVertScrollbar$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $dvt$$2$$.$__setAxisSpace$($DvtSparkChartDefaults$$.clone());
      $DvtChartAxisRenderer$$.$render$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_positionLegend$($dvt$$2$$.$legend$, $DvtSparkChartDefaults$$);
      $dvt$$2$$.$__setPlotAreaSpace$($DvtSparkChartDefaults$$.clone());
      $DvtChartRenderer$$.$_setEventHandlers$($dvt$$2$$);
      $DvtChartRenderer$$.$_renderScrollbars$($dvt$$2$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$);
      $DvtChartRenderer$$.$_updateTitles$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_renderPlotArea$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) && $DvtSparkChartEventManager$$.$addChild$($dvt$$2$$.$yAxis$);
      $DvtChartRenderer$$.$_renderDragButtons$($dvt$$2$$);
    }
  };
  $DvtChartRenderer$$.$_setEventHandlers$ = function $$DvtChartRenderer$$$$_setEventHandlers$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getEventManager$();
    if ($DvtChartTypeUtils$$.$hasAxes$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
      var $DvtChartTooltipUtils$$ = new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartEventManager$$.getWidth(), $DvtSparkChartEventManager$$.getHeight()), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$_plotAreaSpace$, $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$_axisSpace$, $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$Rectangle$($DvtChartSeriesEffectUtils$$.x, $DvtChartPieLabelUtils$$.y, $DvtChartSeriesEffectUtils$$.$w$, $DvtChartPieLabelUtils$$.$h$), $DvtChartPieLabelUtils$$ = 
      new $dvt$$2$$.$Rectangle$($DvtChartPieLabelUtils$$.x, $DvtChartSeriesEffectUtils$$.y, $DvtChartPieLabelUtils$$.$w$, $DvtChartSeriesEffectUtils$$.$h$), $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$SolidFill$($DvtSparkChartDefaults$$.styleDefaults.marqueeColor), $DvtChartDataChangeFunnelSlice$$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartDefaults$$.styleDefaults.marqueeBorderColor), $DvtChartLineMarker$$;
      $DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) && ($DvtChartLineMarker$$ = $DvtChartEventUtils$$.$isDelayedScroll$($DvtSparkChartEventManager$$) ? $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ : $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$, $DvtChartLineMarker$$ = new $dvt$$2$$.$PanZoomHandler$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, $DvtChartTooltipUtils$$, $DvtChartLineMarker$$), $DvtChartLineMarker$$.$setPanCursor$($DvtSparkChartDefaults$$._resources.panCursorUp, 
      $DvtSparkChartDefaults$$._resources.panCursorDown), $DvtSparkChartAutomation$$.$setPanZoomHandler$($DvtChartLineMarker$$), $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$) && ($DvtChartLineMarker$$ = $DvtChartEventUtils$$.$getZoomDirection$($DvtSparkChartEventManager$$), $DvtChartLineMarker$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) || "y" == $DvtChartLineMarker$$ ? new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, 
      $DvtChartTooltipUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, !1, !0, null, $DvtChartPieLabelUtils$$) : $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) || "x" == $DvtChartLineMarker$$ ? new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, !0, !1, $DvtChartPieRenderUtils$$, null) : new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, 
      $DvtChartSeriesEffectUtils$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, !0, !0, $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$), $DvtSparkChartAutomation$$.$setMarqueeZoomHandler$($DvtChartLineMarker$$)));
      "multiple" == $DvtSparkChartDefaults$$.selectionMode && ($DvtChartLineMarker$$ = new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, !0, !0, $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$), $DvtSparkChartAutomation$$.$setMarqueeSelectHandler$($DvtChartLineMarker$$));
    }
  };
  $DvtChartRenderer$$.$rerenderAxisAndPlotArea$ = function $$DvtChartRenderer$$$$rerenderAxisAndPlotArea$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if (!$DvtChartDataUtils$$.$hasInvalidData$($dvt$$2$$)) {
      var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_axisSpace$.clone(), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getSelectionHandler$();
      if ($DvtSparkChartAutomation$$) {
        var $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.$getSelectedIds$()
      }
      var $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$__cacheChartFocus$();
      $dvt$$2$$.$__cleanUpAxisAndPlotArea$();
      $DvtChartAxisRenderer$$.$render$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $dvt$$2$$.$__setPlotAreaSpace$($DvtSparkChartDefaults$$.clone());
      $DvtChartRenderer$$.$_renderPlotArea$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.$processInitialSelections$($DvtChartTooltipUtils$$, $dvt$$2$$.$getChartObjPeers$());
      $dvt$$2$$.$getEventManager$().$autoToggleZoomButton$();
      $DvtChartRenderer$$.$positionDragButtons$($dvt$$2$$);
      $dvt$$2$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($dvt$$2$$));
      $dvt$$2$$.$__restoreChartFocus$($DvtChartSeriesEffectUtils$$);
    }
  };
  $DvtChartRenderer$$.$_renderBackground$ = function $$DvtChartRenderer$$$$_renderBackground$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.Rect($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$);
    $DvtSparkChartEventManager$$.$setInvisibleFill$();
    $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartEventManager$$);
  };
  $DvtChartRenderer$$.$_addOuterGaps$ = function $$DvtChartRenderer$$$$_addOuterGaps$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartDefaults$$.$getGapWidth$($dvt$$2$$, $DvtSparkChartDefaults$$.layout.outerGapWidth), $DvtChartTooltipUtils$$ = $DvtChartDefaults$$.$getGapHeight$($dvt$$2$$, $DvtSparkChartDefaults$$.layout.outerGapHeight);
    if ("none" == $DvtSparkChartDefaults$$.styleDefaults.padding || $DvtChartTypeUtils$$.$isStandalonePlotArea$($dvt$$2$$) || $DvtChartTypeUtils$$.$isStandaloneXAxis$($dvt$$2$$) || $DvtChartTypeUtils$$.$isStandaloneYAxis$($dvt$$2$$) || $DvtChartTypeUtils$$.$isStandaloneY2Axis$($dvt$$2$$)) {
      $DvtSparkChartAutomation$$ = Math.min($DvtSparkChartAutomation$$, 1), $DvtChartTooltipUtils$$ = Math.min($DvtChartTooltipUtils$$, 1);
    }
    $DvtSparkChartEventManager$$.x += $DvtSparkChartAutomation$$;
    $DvtSparkChartEventManager$$.$w$ -= 2 * $DvtSparkChartAutomation$$;
    $DvtSparkChartEventManager$$.y += $DvtChartTooltipUtils$$;
    $DvtSparkChartEventManager$$.$h$ -= 2 * $DvtChartTooltipUtils$$;
  };
  $DvtChartRenderer$$.$_renderTitles$ = function $$DvtChartRenderer$$$$_renderTitles$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if ($DvtChartTooltipUtils$$.title.text) {
      var $DvtChartSeriesEffectUtils$$ = $DvtChartTextUtils$$.$createText$($DvtSparkChartEventManager$$.$getEventManager$(), $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$.title.text, $DvtChartTooltipUtils$$.title.style, $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$), $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$ = null != $DvtChartTooltipUtils$$.title.hAlign ? $DvtChartTooltipUtils$$.title.hAlign : 
      $DvtChartTooltipUtils$$.title.halign, $DvtChartTypeUtils$$ = "plotArea" == $DvtChartPieLabelInfo$$.substring(0, 8);
      $DvtChartSeriesEffectUtils$$ ? ($DvtChartPieRenderUtils$$ = $DvtChartSeriesEffectUtils$$.$getDimensions$(), $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$.$h$, $DvtChartSeriesEffectUtils$$.$setAriaProperty$("hidden", null)) : ($DvtChartPieLabelUtils$$ = 0, $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$Rectangle$(0, 0, 0, 0));
      if ($DvtChartTooltipUtils$$.subtitle.text) {
        var $DvtChartDataChangeFunnelSlice$$ = new $dvt$$2$$.$OutputText$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartTooltipUtils$$.subtitle.text, $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y);
        $DvtChartDataChangeFunnelSlice$$.$setCSSStyle$($DvtChartTooltipUtils$$.subtitle.style);
        $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangeFunnelSlice$$);
        var $DvtChartLineMarker$$ = $DvtChartDataChangeFunnelSlice$$.$measureDimensions$(), $DvtChartMarkerUtils$$ = $DvtChartDefaults$$.$getGapWidth$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$.layout.titleSubtitleGapWidth), $DvtChartDataChangeLineArea$$ = $DvtChartPieRenderUtils$$.$w$ + $DvtChartMarkerUtils$$ + $DvtChartLineMarker$$.$w$;
        $DvtChartDataChangeLineArea$$ > $DvtSparkChartAutomation$$.$w$ || $DvtChartTypeUtils$$ ? ($DvtChartMarkerUtils$$ = $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$.layout.titleSubtitleGapHeight), $DvtChartDataChangeFunnelSlice$$.$setY$($DvtSparkChartAutomation$$.y + $DvtChartPieLabelUtils$$ + $DvtChartMarkerUtils$$), $dvt$$2$$.$TextUtils$.$fitText$($DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$, $DvtSparkChartDefaults$$) && 
        ($DvtChartLineMarker$$ = $DvtChartDataChangeFunnelSlice$$.$measureDimensions$(), $DvtChartPieLabelUtils$$ += $DvtChartLineMarker$$.$h$ + $DvtChartMarkerUtils$$, $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) && ($DvtChartDataChangeFunnelSlice$$ && $DvtChartDataChangeFunnelSlice$$.$setX$($DvtSparkChartAutomation$$.$w$ - $DvtChartLineMarker$$.$w$), $DvtChartSeriesEffectUtils$$ && $DvtChartSeriesEffectUtils$$.$setX$($DvtSparkChartAutomation$$.$w$ - $DvtChartPieRenderUtils$$.$w$)))) : 
        ($DvtChartDataChangeFunnelSlice$$.$setY$($DvtChartPieRenderUtils$$.$h$ - $DvtChartLineMarker$$.$h$ + $DvtSparkChartAutomation$$.y), $DvtChartSeriesEffectUtils$$ && ($dvt$$2$$.$LayoutUtils$.align($DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$, $DvtChartDataChangeLineArea$$), $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? ($DvtChartDataChangeFunnelSlice$$.$setX$($DvtChartSeriesEffectUtils$$.$getX$()), $DvtChartSeriesEffectUtils$$ && 
        $DvtChartSeriesEffectUtils$$.$setX$($DvtChartSeriesEffectUtils$$.$getX$() + $DvtChartLineMarker$$.$w$ + $DvtChartMarkerUtils$$)) : $DvtChartDataChangeFunnelSlice$$.$setX$($DvtChartSeriesEffectUtils$$.$getX$() + $DvtChartDataChangeLineArea$$ - $DvtChartLineMarker$$.$w$)));
        $DvtChartDataChangeFunnelSlice$$.$setAriaProperty$("hidden", null);
        $DvtSparkChartEventManager$$.$getEventManager$().$associate$($DvtChartDataChangeFunnelSlice$$, new $dvt$$2$$.$SimpleObjPeer$($DvtChartDataChangeFunnelSlice$$.$getUntruncatedTextString$()));
      } else {
        $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$.$w$);
      }
      $DvtChartTypeUtils$$ && ($DvtSparkChartEventManager$$.$_cache$.$putToCache$("title", $DvtChartSeriesEffectUtils$$), $DvtSparkChartEventManager$$.$_cache$.$putToCache$("subtitle", $DvtChartDataChangeFunnelSlice$$));
      $DvtChartSeriesEffectUtils$$ = "on" == $DvtChartTooltipUtils$$.titleSeparator.rendered ? $DvtChartTooltipUtils$$.layout.titleSeparatorGap : $DvtChartTooltipUtils$$.layout.titlePlotAreaGap;
      $DvtSparkChartAutomation$$.y += $DvtChartPieLabelUtils$$ + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$);
      $DvtSparkChartAutomation$$.$h$ -= $DvtChartPieLabelUtils$$ + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$);
      "on" == $DvtChartTooltipUtils$$.titleSeparator.rendered && ($DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Line$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.y), $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$Line$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y + 1, $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$, 
      $DvtSparkChartAutomation$$.y + 1), $DvtChartPieLabelUtils$$.$setSolidStroke$($DvtChartTooltipUtils$$.titleSeparator.upperColor), $DvtChartSeriesEffectUtils$$.$setSolidStroke$($DvtChartTooltipUtils$$.titleSeparator.lowerColor), $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelUtils$$), $DvtSparkChartDefaults$$.$addChild$($DvtChartSeriesEffectUtils$$), $DvtChartPieLabelUtils$$ = 2 + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$.layout.titlePlotAreaGap), 
      $DvtSparkChartAutomation$$.y += $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$.$h$ -= $DvtChartPieLabelUtils$$);
    }
    $DvtChartTooltipUtils$$.footnote.text && ($DvtSparkChartDefaults$$ = $DvtChartTextUtils$$.$createText$($DvtSparkChartEventManager$$.$getEventManager$(), $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$.footnote.text, $DvtChartTooltipUtils$$.footnote.style, $DvtSparkChartAutomation$$.x, 0, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$), $DvtChartPieLabelUtils$$ = null != $DvtChartTooltipUtils$$.footnote.hAlign ? $DvtChartTooltipUtils$$.footnote.hAlign : $DvtChartTooltipUtils$$.footnote.halign, 
    $DvtChartSeriesEffectUtils$$ = "plotArea" == $DvtChartPieLabelUtils$$.substring(0, 8), $DvtSparkChartDefaults$$ && ($DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$getDimensions$(), $DvtSparkChartDefaults$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ - $DvtChartPieRenderUtils$$.$h$), $DvtSparkChartAutomation$$.$h$ -= $DvtChartPieRenderUtils$$.$h$ + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$.layout.footnoteGap), $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartAutomation$$, 
    $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$.$w$), $DvtSparkChartDefaults$$.$setAriaProperty$("hidden", null)), $DvtChartSeriesEffectUtils$$ && $DvtSparkChartEventManager$$.$_cache$.$putToCache$("footnote", $DvtSparkChartDefaults$$));
  };
  $DvtChartRenderer$$.$_updateTitles$ = function $$DvtChartRenderer$$$$_updateTitles$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $dvt$$2$$.$getOptions$(), $DvtChartSeriesEffectUtils$$ = null != $DvtChartTooltipUtils$$.title.hAlign ? $DvtChartTooltipUtils$$.title.hAlign : $DvtChartTooltipUtils$$.title.halign, $DvtChartPieLabelUtils$$ = null != $DvtChartTooltipUtils$$.footnote.hAlign ? $DvtChartTooltipUtils$$.footnote.hAlign : $DvtChartTooltipUtils$$.footnote.halign, $DvtChartPieRenderUtils$$ = $DvtChartTooltipUtils$$.title.text && "plotArea" == $DvtChartSeriesEffectUtils$$.substring(0, 8), 
    $DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$.footnote.text && "plotArea" == $DvtChartPieLabelUtils$$.substring(0, 8);
    $DvtSparkChartDefaults$$.x = $DvtSparkChartAutomation$$.x;
    $DvtSparkChartDefaults$$.$w$ = $DvtSparkChartAutomation$$.$w$;
    if ($DvtChartPieRenderUtils$$) {
      $DvtChartPieRenderUtils$$ = $dvt$$2$$.$_cache$.$getFromCache$("title");
      $DvtSparkChartAutomation$$ = $dvt$$2$$.$_cache$.$getFromCache$("subtitle");
      var $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$.$getDimensions$();
      $DvtChartRenderer$$.$_alignTextToPlotArea$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$.$w$);
      $DvtSparkChartAutomation$$ && ($DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$.$getDimensions$(), $DvtChartRenderer$$.$_alignTextToPlotArea$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$.$w$));
    }
    $DvtChartTooltipUtils$$ && ($dvt$$2$$ = $dvt$$2$$.$_cache$.$getFromCache$("footnote"), $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$getDimensions$(), $DvtChartRenderer$$.$_alignTextToPlotArea$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtChartSeriesEffectUtils$$.$w$));
  };
  $DvtChartRenderer$$.$_alignTextToPlotArea$ = function $$DvtChartRenderer$$$$_alignTextToPlotArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    $dvt$$2$$.$TextUtils$.$fitText$($DvtChartTooltipUtils$$, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$, $DvtSparkChartEventManager$$) && ("plotAreaStart" == $DvtSparkChartAutomation$$ ? $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartDefaults$$, "start", $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) : "plotAreaCenter" == $DvtSparkChartAutomation$$ ? $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartDefaults$$, "center", $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) : "plotAreaEnd" == 
    $DvtSparkChartAutomation$$ && $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartDefaults$$, "end", $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$));
  };
  $DvtChartRenderer$$.$_renderPlotArea$ = function $$DvtChartRenderer$$$$_renderPlotArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if ($DvtChartTypeUtils$$.$hasAxes$($DvtSparkChartEventManager$$)) {
      var $DvtChartTooltipUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$());
      $DvtChartTooltipUtils$$.$setTranslate$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y);
      $DvtSparkChartDefaults$$.$addChild$($DvtChartTooltipUtils$$);
      $DvtSparkChartEventManager$$.$setPlotArea$($DvtChartTooltipUtils$$);
      $DvtChartPlotAreaRenderer$$.$render$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$));
    } else {
      $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) ? ($DvtChartTooltipUtils$$ = new $DvtChartPie$$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), 0 < $DvtChartTooltipUtils$$.$_slices$.length ? ($DvtSparkChartDefaults$$.$addChild$($DvtChartTooltipUtils$$), $DvtSparkChartEventManager$$.$setPlotArea$($DvtChartTooltipUtils$$), $DvtChartTooltipUtils$$.$render$()) : $DvtChartRenderer$$.$renderEmptyText$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) : 
      $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) && $DvtChartFunnelRenderer$$.$render$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    }
    $DvtSparkChartAutomation$$.$w$ = 0;
    $DvtSparkChartAutomation$$.$h$ = 0;
  };
  $DvtChartRenderer$$.$renderEmptyText$ = function $$DvtChartRenderer$$$$renderEmptyText$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if ($DvtChartDataUtils$$.$hasInvalidTimeData$($DvtSparkChartEventManager$$) && $DvtChartDataUtils$$.$hasData$($DvtSparkChartEventManager$$)) {
      var $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtChartTooltipUtils$$, "labelInvalidData", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "INVALID_DATA")
    } else {
      ($DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.emptyText) || ($DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtChartTooltipUtils$$, "labelNoData", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "NO_DATA"));
    }
    $dvt$$2$$.$TextUtils$.$renderEmptyText$($DvtSparkChartDefaults$$, $DvtChartSeriesEffectUtils$$, new $dvt$$2$$.$Rectangle$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$), $DvtSparkChartEventManager$$.$getEventManager$(), $DvtChartTooltipUtils$$._statusMessageStyle);
  };
  $DvtChartRenderer$$.$_prerenderHorizScrollbar$ = function $$DvtChartRenderer$$$$_prerenderHorizScrollbar$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.$w$, $DvtChartSeriesEffectUtils$$ = 0;
    $DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isHorizScrollbarSupported$($DvtSparkChartEventManager$$) ? $DvtChartStyleUtils$$.$isOverviewRendered$($DvtSparkChartEventManager$$) ? ($DvtChartSeriesEffectUtils$$ = Math.min($DvtChartStyleUtils$$.$getOverviewHeight$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$.$h$), 0 < $DvtChartSeriesEffectUtils$$ && ($DvtSparkChartEventManager$$.$overview$ = new $DvtChartOverview$$($DvtSparkChartEventManager$$), 
    $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartEventManager$$.$overview$), $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, "bottom", $DvtSparkChartEventManager$$.$overview$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, 10))) : ($DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults._scrollbarHeight, $DvtSparkChartEventManager$$.$xScrollbar$ = new $dvt$$2$$.$SimpleScrollbar$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, 
    $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartEventManager$$.$xScrollbar$), $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, "bottom", $DvtSparkChartEventManager$$.$xScrollbar$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, 8), $DvtSparkChartEventManager$$.$overview$ = null) : $DvtSparkChartEventManager$$.$overview$ = null;
    return new $dvt$$2$$.$Dimension$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$);
  };
  $DvtChartRenderer$$.$_prerenderVertScrollbar$ = function $$DvtChartRenderer$$$$_prerenderVertScrollbar$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = 0, $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$.$h$;
    if ($DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isVertScrollbarSupported$($DvtSparkChartEventManager$$)) {
      var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults._scrollbarHeight, $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$SimpleScrollbar$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
      $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelUtils$$);
      $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? "right" : "left", $DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, 8);
      $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? $DvtSparkChartEventManager$$.$xScrollbar$ = $DvtChartPieLabelUtils$$ : $DvtSparkChartEventManager$$.$yScrollbar$ = $DvtChartPieLabelUtils$$;
    }
    return new $dvt$$2$$.$Dimension$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$);
  };
  $DvtChartRenderer$$.$_renderScrollbars$ = function $$DvtChartRenderer$$$$_renderScrollbars$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartSeriesEffectUtils$$ = {color:$DvtChartTooltipUtils$$.styleDefaults._scrollbarHandleColor, backgroundColor:$DvtChartTooltipUtils$$.styleDefaults._scrollbarTrackColor}, $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$_plotAreaSpace$;
    $DvtSparkChartEventManager$$.$xScrollbar$ && ($DvtChartSeriesEffectUtils$$.min = $DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMin$(), $DvtChartSeriesEffectUtils$$.max = $DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMax$(), $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? ($DvtChartSeriesEffectUtils$$.isHorizontal = !1, $DvtChartSeriesEffectUtils$$.isReversed = !1, $DvtSparkChartEventManager$$.$xScrollbar$.$setTranslateY$($DvtChartPieLabelUtils$$.y), $DvtSparkChartEventManager$$.$xScrollbar$.$render$($DvtChartSeriesEffectUtils$$, 
    $DvtSparkChartAutomation$$.$w$, $DvtChartPieLabelUtils$$.$h$)) : ($DvtChartSeriesEffectUtils$$.isHorizontal = !0, $DvtChartSeriesEffectUtils$$.isReversed = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtSparkChartEventManager$$.$xScrollbar$.$setTranslateX$($DvtChartPieLabelUtils$$.x), $DvtSparkChartEventManager$$.$xScrollbar$.$render$($DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$.$w$, $DvtSparkChartDefaults$$.$h$)), $DvtSparkChartEventManager$$.$xScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMin$(), 
    $DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMax$()));
    $DvtSparkChartEventManager$$.$yScrollbar$ && ($DvtChartSeriesEffectUtils$$.min = $DvtSparkChartEventManager$$.$yAxis$.$getLinearGlobalMin$(), $DvtChartSeriesEffectUtils$$.max = $DvtSparkChartEventManager$$.$yAxis$.$getLinearGlobalMax$(), $DvtChartSeriesEffectUtils$$.isHorizontal = !1, $DvtChartSeriesEffectUtils$$.isReversed = !0, $DvtSparkChartEventManager$$.$yScrollbar$.$setTranslateY$($DvtChartPieLabelUtils$$.y), $DvtSparkChartEventManager$$.$yScrollbar$.$render$($DvtChartSeriesEffectUtils$$, 
    $DvtSparkChartAutomation$$.$w$, $DvtChartPieLabelUtils$$.$h$), $DvtSparkChartEventManager$$.$yScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$.$yAxis$.$getLinearViewportMin$(), $DvtSparkChartEventManager$$.$yAxis$.$getLinearViewportMax$()));
    $DvtSparkChartEventManager$$.$overview$ && ($DvtSparkChartAutomation$$ = {startTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMin$(), endTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMax$(), viewportStartTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMin$(), viewportEndTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMax$(), minimumWindowSize:$DvtSparkChartEventManager$$.$xAxis$.$getInfo$().$getMinimumExtent$(), chart:$dvt$$2$$.$JsonUtils$.clone($DvtChartTooltipUtils$$)}, 
    $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$) || ($DvtSparkChartAutomation$$.featuresOff = "zoom"), $DvtSparkChartAutomation$$.chart._minOverflowCoord = $DvtChartTooltipUtils$$._minOverflowCoord - $DvtChartPieLabelUtils$$.x, $DvtSparkChartAutomation$$.chart._maxOverflowCoord = $DvtChartTooltipUtils$$._maxOverflowCoord - $DvtChartPieLabelUtils$$.x, $DvtSparkChartEventManager$$.$overview$.$setTranslateX$($DvtChartPieLabelUtils$$.x), $DvtSparkChartEventManager$$.$overview$.$render$($DvtSparkChartAutomation$$, 
    $DvtChartPieLabelUtils$$.$w$, $DvtSparkChartDefaults$$.$h$), $DvtSparkChartEventManager$$.$overview$.$setViewportRange$($DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMin$(), $DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMax$()));
  };
  $DvtChartRenderer$$.$_positionLegend$ = function $$DvtChartRenderer$$$$_positionLegend$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if ($dvt$$2$$) {
      var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getDimensions$(), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$().orientation;
      "vertical" == $DvtSparkChartAutomation$$ && $DvtSparkChartDefaults$$.$h$ <= $DvtSparkChartEventManager$$.$h$ ? $dvt$$2$$.$setTranslateY$(Math.round($DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$ / 2 - $DvtSparkChartDefaults$$.$h$ / 2)) : "horizontal" == $DvtSparkChartAutomation$$ && $DvtSparkChartDefaults$$.$w$ <= $DvtSparkChartEventManager$$.$w$ && $dvt$$2$$.$setTranslateX$(Math.round($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ / 2 - $DvtSparkChartDefaults$$.$w$ / 
      2));
    }
  };
  $DvtChartRenderer$$.$_renderDragButtons$ = function $$DvtChartRenderer$$$$_renderDragButtons$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getEventManager$(), $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.dragMode;
    if ("user" != $DvtChartTooltipUtils$$) {
      "pan" == $DvtChartTooltipUtils$$ ? $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_PAN$) : "zoom" == $DvtChartTooltipUtils$$ ? $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_ZOOM$) : "select" == $DvtChartTooltipUtils$$ ? $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_SELECT$) : $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_OFF$);
    } else {
      if ($DvtChartTypeUtils$$.$hasAxes$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
        var $DvtChartTooltipUtils$$ = $dvt$$2$$.$Agent$.$isTouchDevice$(), $DvtChartSeriesEffectUtils$$ = $DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$);
        $DvtSparkChartEventManager$$.$dragButtons$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$());
        var $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$._resources, $DvtChartPieRenderUtils$$;
        "multiple" == $DvtSparkChartDefaults$$.selectionMode && ($DvtChartTooltipUtils$$ || $DvtChartSeriesEffectUtils$$) && ($DvtChartPieRenderUtils$$ = $DvtChartSeriesEffectUtils$$ && ($DvtChartTooltipUtils$$ || $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$)) ? "end" : "solo", $DvtSparkChartAutomation$$.$selectButton$ = $DvtChartRenderer$$.$_createDragButton$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.$dragButtons$, $DvtChartPieLabelUtils$$.selectUp, $DvtChartPieLabelUtils$$.selectDown, 
        $DvtSparkChartAutomation$$.$onSelectButtonClick$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "tooltipSelect", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "MARQUEE_SELECT"), $DvtSparkChartAutomation$$.$selectButton$.$setTooltip$($DvtChartPieRenderUtils$$), $DvtSparkChartAutomation$$.$associate$($DvtSparkChartAutomation$$.$selectButton$, $DvtSparkChartAutomation$$.$selectButton$));
        $DvtChartSeriesEffectUtils$$ && ($DvtChartPieRenderUtils$$ = null == $DvtSparkChartAutomation$$.$selectButton$ ? "solo" : "start", $DvtChartTooltipUtils$$ ? ($DvtSparkChartAutomation$$.$panButton$ = $DvtChartRenderer$$.$_createDragButton$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.$dragButtons$, $DvtChartPieLabelUtils$$.panUp, $DvtChartPieLabelUtils$$.panDown, $DvtSparkChartAutomation$$.$onPanButtonClick$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), $DvtChartPieRenderUtils$$ = 
        $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "tooltipPan", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "PAN"), $DvtSparkChartAutomation$$.$panButton$.$setTooltip$($DvtChartPieRenderUtils$$), $DvtSparkChartAutomation$$.$associate$($DvtSparkChartAutomation$$.$panButton$, $DvtSparkChartAutomation$$.$panButton$)) : $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) && ($DvtSparkChartAutomation$$.$zoomButton$ = 
        $DvtChartRenderer$$.$_createDragButton$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.$dragButtons$, $DvtChartPieLabelUtils$$.zoomUp, $DvtChartPieLabelUtils$$.zoomDown, $DvtSparkChartAutomation$$.$onZoomButtonClick$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "tooltipZoom", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "MARQUEE_ZOOM"), $DvtSparkChartAutomation$$.$zoomButton$.$setTooltip$($DvtChartPieRenderUtils$$), 
        $DvtSparkChartAutomation$$.$associate$($DvtSparkChartAutomation$$.$zoomButton$, $DvtSparkChartAutomation$$.$zoomButton$)));
        $DvtChartRenderer$$.$positionDragButtons$($DvtSparkChartEventManager$$);
        $DvtSparkChartAutomation$$.$setDragMode$(null);
        0 < $DvtSparkChartEventManager$$.$dragButtons$.$getNumChildren$() && ($DvtSparkChartEventManager$$.$addChild$($DvtSparkChartEventManager$$.$dragButtons$), $DvtChartTooltipUtils$$ ? $DvtChartSeriesEffectUtils$$ && ($DvtSparkChartAutomation$$.$panButton$.$setToggled$(!0), $DvtSparkChartAutomation$$.$onPanButtonClick$()) : $DvtSparkChartEventManager$$.$hideDragButtons$(), $DvtSparkChartEventManager$$.$dragButtons$.setCursor("default"));
      }
    }
  };
  $DvtChartRenderer$$.$_positionDragButton$ = function $$DvtChartRenderer$$$$_positionDragButton$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? ($DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.x + $DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtSparkChartAutomation$$.x += $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$) : $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ - $DvtChartRenderer$$.$_BUTTON_SIZE$ - $DvtChartRenderer$$.$_BUTTON_PADDING$;
    $DvtSparkChartAutomation$$.$w$ -= $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$;
    $DvtSparkChartDefaults$$.$setTranslate$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$.y + $DvtChartRenderer$$.$_BUTTON_PADDING$);
  };
  $DvtChartRenderer$$.$positionDragButtons$ = function $$DvtChartRenderer$$$$positionDragButtons$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_plotAreaSpace$.clone();
    $DvtSparkChartEventManager$$.x += $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
    $DvtSparkChartEventManager$$.$w$ -= 2 * $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
    $DvtSparkChartEventManager$$.y += $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getEventManager$();
    $DvtSparkChartDefaults$$.$selectButton$ && $DvtChartRenderer$$.$_positionDragButton$($dvt$$2$$, $DvtSparkChartDefaults$$.$selectButton$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$panButton$ && $DvtChartRenderer$$.$_positionDragButton$($dvt$$2$$, $DvtSparkChartDefaults$$.$panButton$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$zoomButton$ && $DvtChartRenderer$$.$_positionDragButton$($dvt$$2$$, $DvtSparkChartDefaults$$.$zoomButton$, $DvtSparkChartEventManager$$);
  };
  $DvtChartRenderer$$.$_createDragButtonBackground$ = function $$DvtChartRenderer$$$$_createDragButtonBackground$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = 2, $DvtChartTooltipUtils$$ = 2, $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$);
    "start" == $DvtSparkChartDefaults$$ ? $DvtChartSeriesEffectUtils$$ ? $DvtSparkChartAutomation$$ = 0 : $DvtChartTooltipUtils$$ = 0 : "end" == $DvtSparkChartDefaults$$ && ($DvtChartSeriesEffectUtils$$ ? $DvtChartTooltipUtils$$ = 0 : $DvtSparkChartAutomation$$ = 0);
    var $DvtChartSeriesEffectUtils$$ = -$DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtChartPieLabelUtils$$ = $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.$roundedRectangle$($DvtChartSeriesEffectUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = 
    new $dvt$$2$$.$Path$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
    1 < $dvt$$2$$.$Agent$.$getDevicePixelRatio$() ? ($DvtSparkChartAutomation$$.$setSolidStroke$("#D8DEE3", 1, 1), $DvtSparkChartAutomation$$.$setPixelHinting$()) : $DvtSparkChartAutomation$$.$setSolidStroke$("#B8BDC1", 1, 1);
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartRenderer$$.$_createDragButton$ = function $$DvtChartRenderer$$$$_createDragButton$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$) {
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getCtx$();
    var $DvtChartPieLabelInfo$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$);
    $DvtChartPieLabelInfo$$.$setSolidFill$("#FFFFFF", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
    $DvtChartPieLabelInfo$$.$addChild$(new $dvt$$2$$.Image($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    var $DvtChartTypeUtils$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$);
    $DvtChartTypeUtils$$.$setSolidFill$("#E2E3E4", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
    $DvtChartTypeUtils$$.$addChild$(new $dvt$$2$$.Image($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    var $DvtChartDataChangeFunnelSlice$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$);
    $DvtChartDataChangeFunnelSlice$$.$setFill$(new $dvt$$2$$.$LinearGradientFill$(90, ["#0527CE", "#0586F0"], [$DvtChartRenderer$$.$_BUTTON_OPACITY$, $DvtChartRenderer$$.$_BUTTON_OPACITY$]));
    $DvtChartDataChangeFunnelSlice$$.$addChild$(new $dvt$$2$$.Image($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    $DvtSparkChartAutomation$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$);
    $DvtSparkChartAutomation$$.$setSolidFill$("#0586F0", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
    $DvtSparkChartAutomation$$.$addChild$(new $dvt$$2$$.Image($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    $DvtChartTooltipUtils$$ = new $dvt$$2$$.$Button$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, null, null, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$);
    $DvtChartTooltipUtils$$.$setOverDownState$($DvtSparkChartAutomation$$);
    $DvtChartTooltipUtils$$.$setToggleEnabled$();
    $DvtSparkChartDefaults$$.$addChild$($DvtChartTooltipUtils$$);
    $DvtChartTooltipUtils$$.$addEvtListener$($dvt$$2$$.MouseEvent.$MOUSEDOWN$, function($dvt$$2$$) {
      $dvt$$2$$.stopPropagation();
    });
    $dvt$$2$$.$Agent$.$isTouchDevice$() && ($DvtSparkChartDefaults$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtChartPieRenderUtils$$ = "solo" == $DvtChartPieRenderUtils$$ ? new $dvt$$2$$.Rect($DvtSparkChartEventManager$$, -$DvtChartSeriesEffectUtils$$, -$DvtChartSeriesEffectUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartSeriesEffectUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartSeriesEffectUtils$$) : 
    "start" == $DvtChartPieRenderUtils$$ && !$DvtSparkChartDefaults$$ || "end" == $DvtChartPieRenderUtils$$ && $DvtSparkChartDefaults$$ ? new $dvt$$2$$.Rect($DvtSparkChartEventManager$$, -$DvtChartSeriesEffectUtils$$, -$DvtChartSeriesEffectUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $DvtChartSeriesEffectUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartSeriesEffectUtils$$) : new $dvt$$2$$.Rect($DvtSparkChartEventManager$$, -.5 * $DvtChartSeriesEffectUtils$$, -$DvtChartSeriesEffectUtils$$, 
    $DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $DvtChartSeriesEffectUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartSeriesEffectUtils$$), $DvtChartPieRenderUtils$$.$setInvisibleFill$(), $DvtChartTooltipUtils$$.$addChild$($DvtChartPieRenderUtils$$));
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartRenderer$$.$_adjustAvailSpace$ = function $$DvtChartRenderer$$$$_adjustAvailSpace$$($dvt$$2$$) {
    $dvt$$2$$.x = Math.round($dvt$$2$$.x);
    $dvt$$2$$.y = Math.round($dvt$$2$$.y);
    $dvt$$2$$.$w$ = Math.round($dvt$$2$$.$w$);
    $dvt$$2$$.$h$ = Math.round($dvt$$2$$.$h$);
  };
  $DvtChartRenderer$$.$renderDataCursor$ = function $$DvtChartRenderer$$$$renderDataCursor$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = null, $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getEventManager$();
    if ($DvtChartTooltipUtils$$.$isDataCursorEnabled$($dvt$$2$$)) {
      $DvtSparkChartEventManager$$ = new $DvtChartDataCursor$$($dvt$$2$$.$getCtx$(), $DvtSparkChartDefaults$$.styleDefaults.dataCursor, $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$));
      $DvtSparkChartEventManager$$.$setBehavior$($DvtChartTooltipUtils$$.$getDataCursorBehavior$($dvt$$2$$));
      $dvt$$2$$.$addChild$($DvtSparkChartEventManager$$);
      var $DvtChartSeriesEffectUtils$$ = new $DvtChartDataCursorHandler$$($dvt$$2$$, $DvtSparkChartEventManager$$);
      $DvtSparkChartAutomation$$.$setDataCursorHandler$($DvtChartSeriesEffectUtils$$);
      $dvt$$2$$.$positionDataCursor$($DvtSparkChartDefaults$$.dataCursorPosition);
    } else {
      $DvtSparkChartAutomation$$.$setDataCursorHandler$(null);
    }
    return $DvtSparkChartEventManager$$;
  };
  var $DvtChartAxisRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAxisRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartAxisRenderer$$.$render$ = function $$DvtChartAxisRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartTypeUtils$$.$hasAxes$($dvt$$2$$) && ($DvtChartAxisUtils$$.$applyInitialZooming$($dvt$$2$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$isBubble$($dvt$$2$$) && $DvtChartMarkerUtils$$.$calcBubbleSizes$($dvt$$2$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $DvtChartAxisRenderer$$.$_renderPolar$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : $DvtChartAxisRenderer$$.$_renderCartesian$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$));
  };
  $DvtChartAxisRenderer$$.$_renderCartesian$ = function $$DvtChartAxisRenderer$$$$_renderCartesian$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$.clone(), $DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$.$getYAxisPosition$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartAxisUtils$$.$getY2AxisPosition$($DvtSparkChartEventManager$$);
    $DvtChartAxisRenderer$$.$_addAxisGaps$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
    $DvtChartPieLabelUtils$$ && $DvtChartPieLabelInfo$$ == $DvtChartDataChangeFunnelSlice$$ && ($DvtChartTooltipUtils$$.yAxis._skipHighestTick = $DvtChartSeriesEffectUtils$$, $DvtChartTooltipUtils$$.y2Axis._skipHighestTick = !$DvtChartSeriesEffectUtils$$);
    var $DvtChartLineMarker$$ = $DvtChartAxisRenderer$$.$_createYAxis$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), $DvtChartMarkerUtils$$ = $DvtChartAxisRenderer$$.$_createY2Axis$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$);
    ($DvtChartTooltipUtils$$ = !$DvtChartPieLabelUtils$$ && "on" == $DvtChartTooltipUtils$$.y2Axis.alignTickMarks && null == $DvtChartTooltipUtils$$.y2Axis.step) && $DvtChartLineMarker$$ && $DvtChartMarkerUtils$$ && ($DvtChartAxisRenderer$$.$_alignYAxes$($DvtChartLineMarker$$, $DvtChartMarkerUtils$$), $DvtChartSeriesEffectUtils$$ || ($DvtChartMarkerUtils$$.$dim$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$.axis, $DvtSparkChartEventManager$$.$y2Axis$, 
    $DvtChartMarkerUtils$$.options, "y2", $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$)));
    var $DvtChartDataChangeLineArea$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, "y"), $DvtChartRangeMarker$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, "y2");
    $DvtChartPieLabelUtils$$ && $DvtChartPieLabelInfo$$ == $DvtChartDataChangeFunnelSlice$$ ? ($DvtChartSeriesEffectUtils$$ ? ($DvtChartPieLabelInfo$$ = Math.max($DvtChartLineMarker$$.$dim$.$h$ + $DvtChartDataChangeLineArea$$, $DvtChartMarkerUtils$$.$dim$.$h$ + $DvtChartRangeMarker$$), $DvtChartLineMarker$$.$dim$.$h$ = $DvtChartPieLabelInfo$$ - $DvtChartDataChangeLineArea$$, $DvtChartMarkerUtils$$.$dim$.$h$ = $DvtChartPieLabelInfo$$ - $DvtChartRangeMarker$$) : ($DvtChartPieLabelInfo$$ = Math.max($DvtChartLineMarker$$.$dim$.$w$ + 
    $DvtChartDataChangeLineArea$$, $DvtChartMarkerUtils$$.$dim$.$w$ + $DvtChartRangeMarker$$), $DvtChartLineMarker$$.$dim$.$w$ = $DvtChartPieLabelInfo$$ - $DvtChartDataChangeLineArea$$, $DvtChartMarkerUtils$$.$dim$.$w$ = $DvtChartPieLabelInfo$$ - $DvtChartRangeMarker$$), $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$.clone(), $DvtChartLineMarker$$, $DvtChartDataChangeLineArea$$)) : $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$, $DvtChartLineMarker$$, $DvtChartDataChangeLineArea$$);
    $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$, $DvtChartMarkerUtils$$, $DvtChartRangeMarker$$);
    $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);
    "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isBar$($DvtSparkChartEventManager$$) && $DvtSparkChartAutomation$$.$w$ > $DvtChartPieLabelInfo$$ && ($DvtChartPieLabelInfo$$ *= Math.floor($DvtSparkChartAutomation$$.$w$ / $DvtChartPieLabelInfo$$), $DvtSparkChartAutomation$$.x += ($DvtSparkChartAutomation$$.$w$ - $DvtChartPieLabelInfo$$) / 2, $DvtSparkChartAutomation$$.$w$ = $DvtChartPieLabelInfo$$);
    $DvtSparkChartDefaults$$ = $DvtChartAxisRenderer$$.$_createXAxis$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$);
    $DvtSparkChartDefaults$$.axis.$render$($DvtSparkChartDefaults$$.options, $DvtSparkChartDefaults$$.$dim$.$w$, $DvtSparkChartDefaults$$.$dim$.$h$);
    $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, "x"));
    $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getSplitterPosition$($DvtSparkChartEventManager$$);
    $DvtChartDataChangeFunnelSlice$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$());
    $DvtChartPieRenderUtils$$ = $DvtChartAxisRenderer$$.$_getSplitAvailSpace$($DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$, $DvtChartSeriesEffectUtils$$ && $DvtChartDataChangeFunnelSlice$$);
    $DvtChartPieLabelInfo$$ = $DvtChartAxisRenderer$$.$_getSplitAvailSpace$($DvtSparkChartAutomation$$, 1 - $DvtChartPieLabelInfo$$, $DvtChartSeriesEffectUtils$$, !$DvtChartSeriesEffectUtils$$ || !$DvtChartDataChangeFunnelSlice$$);
    $DvtChartSeriesEffectUtils$$ ? ($DvtChartLineMarker$$ && ($DvtChartLineMarker$$.axis.$setTranslateX$($DvtSparkChartAutomation$$.x), $DvtChartPieLabelUtils$$ ? $DvtChartLineMarker$$.axis.$render$($DvtChartLineMarker$$.options, $DvtChartPieRenderUtils$$.$w$, $DvtChartLineMarker$$.$dim$.$h$, $DvtChartPieRenderUtils$$.x, 0) : $DvtChartLineMarker$$.axis.$render$($DvtChartLineMarker$$.options, $DvtSparkChartAutomation$$.$w$, $DvtChartLineMarker$$.$dim$.$h$)), $DvtChartTooltipUtils$$ && $DvtChartLineMarker$$ && 
    $DvtChartMarkerUtils$$ && $DvtChartAxisRenderer$$.$_alignYAxes$($DvtChartLineMarker$$, $DvtChartMarkerUtils$$), $DvtChartMarkerUtils$$ && ($DvtChartMarkerUtils$$.axis.$setTranslateX$($DvtSparkChartAutomation$$.x), $DvtChartPieLabelUtils$$ ? $DvtChartMarkerUtils$$.axis.$render$($DvtChartMarkerUtils$$.options, $DvtChartPieLabelInfo$$.$w$, $DvtChartMarkerUtils$$.$dim$.$h$, $DvtChartPieLabelInfo$$.x, 0) : $DvtChartMarkerUtils$$.axis.$render$($DvtChartMarkerUtils$$.options, $DvtSparkChartAutomation$$.$w$, 
    $DvtChartMarkerUtils$$.$dim$.$h$)), $DvtChartAxisRenderer$$.$_setOverflow$($DvtSparkChartAutomation$$, $DvtChartLineMarker$$, $DvtSparkChartDefaults$$)) : ($DvtChartLineMarker$$ && ($DvtChartPieLabelUtils$$ ? $DvtChartLineMarker$$.axis.$render$($DvtChartLineMarker$$.options, $DvtChartLineMarker$$.$dim$.$w$, $DvtChartPieRenderUtils$$.$h$, 0, $DvtChartPieRenderUtils$$.y) : $DvtChartLineMarker$$.axis.$render$($DvtChartLineMarker$$.options, $DvtChartLineMarker$$.$dim$.$w$, $DvtSparkChartAutomation$$.$h$)), 
    $DvtChartTooltipUtils$$ && $DvtChartLineMarker$$ && $DvtChartMarkerUtils$$ && $DvtChartAxisRenderer$$.$_alignYAxes$($DvtChartLineMarker$$, $DvtChartMarkerUtils$$), $DvtChartMarkerUtils$$ && ($DvtChartPieLabelUtils$$ ? $DvtChartMarkerUtils$$.axis.$render$($DvtChartMarkerUtils$$.options, $DvtChartMarkerUtils$$.$dim$.$w$, $DvtChartPieLabelInfo$$.$h$, 0, $DvtChartPieLabelInfo$$.y) : $DvtChartMarkerUtils$$.axis.$render$($DvtChartMarkerUtils$$.options, $DvtChartMarkerUtils$$.$dim$.$w$, $DvtSparkChartAutomation$$.$h$)), 
    $DvtChartAxisRenderer$$.$_setOverflow$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartLineMarker$$, $DvtChartMarkerUtils$$));
    $DvtChartAxisRenderer$$.$_storeAxes$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartLineMarker$$, $DvtChartMarkerUtils$$);
  };
  $DvtChartAxisRenderer$$.$_renderPolar$ = function $$DvtChartAxisRenderer$$$$_renderPolar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartAxisRenderer$$.$_createXAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$.axis.$setTranslateX$($DvtSparkChartDefaults$$.x);
    $DvtSparkChartAutomation$$.axis.$setTranslateY$($DvtSparkChartDefaults$$.y);
    $DvtSparkChartAutomation$$.axis.$render$($DvtSparkChartAutomation$$.options, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$);
    $DvtSparkChartEventManager$$ = $DvtChartAxisRenderer$$.$_createYAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.axis.$setTranslateX$($DvtSparkChartDefaults$$.x);
    $DvtSparkChartEventManager$$.axis.$setTranslateY$($DvtSparkChartDefaults$$.y);
    $DvtSparkChartEventManager$$.axis.$render$($DvtSparkChartEventManager$$.options, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$);
    $DvtChartAxisRenderer$$.$_storeAxes$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$);
  };
  $DvtChartAxisRenderer$$.$_createXAxis$ = function $$DvtChartAxisRenderer$$$$_createXAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$getXAxisPosition$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $dvt$$2$$.$JsonUtils$.clone($DvtChartSeriesEffectUtils$$.xAxis);
    $DvtChartPieRenderUtils$$.position = $DvtChartPieLabelUtils$$;
    $DvtChartPieRenderUtils$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneXAxis$($DvtSparkChartEventManager$$);
    $DvtChartPieRenderUtils$$.groupSeparators = $DvtChartSeriesEffectUtils$$.styleDefaults.groupSeparators;
    $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($DvtChartPieRenderUtils$$, "x", $DvtSparkChartEventManager$$);
    $DvtChartPieRenderUtils$$.groups = $DvtChartSeriesEffectUtils$$.groups;
    $DvtChartPieRenderUtils$$._groupWidthRatios = $DvtChartAxisUtils$$.$getGroupWidthRatios$($DvtSparkChartEventManager$$);
    $DvtChartPieRenderUtils$$.timeAxisType = $DvtChartAxisUtils$$.$getTimeAxisType$($DvtSparkChartEventManager$$);
    $DvtChartPieRenderUtils$$._environment = $DvtChartSeriesEffectUtils$$._environment;
    $DvtChartPieRenderUtils$$._locale = $DvtChartSeriesEffectUtils$$._locale;
    $DvtChartPieRenderUtils$$.drilling = $DvtChartSeriesEffectUtils$$.drilling;
    var $DvtChartPieLabelInfo$$ = "top" == $DvtChartPieLabelUtils$$ || "bottom" == $DvtChartPieLabelUtils$$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartAxisUtils$$.$isGridShifted$($DvtSparkChartEventManager$$);
    "tangential" == $DvtChartPieLabelUtils$$ && $DvtChartAxisUtils$$.$hasGroupAxis$($DvtSparkChartEventManager$$) ? $DvtChartDataChangeFunnelSlice$$ ? ($DvtChartPieRenderUtils$$.startGroupOffset = .5, $DvtChartPieRenderUtils$$.endGroupOffset = .5) : $DvtChartPieRenderUtils$$.endGroupOffset = 1 : ($DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$getAxisOffset$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$.startGroupOffset = $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$.endGroupOffset = 
    $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$.$hasUncenteredSeries$($DvtSparkChartEventManager$$) && ($DvtChartPieRenderUtils$$.endGroupOffset += 1), $DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$) || ($DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartAxisUtils$$.$isAxisRendered$($DvtSparkChartEventManager$$, "y") && $DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartEventManager$$, 
    "y") && ($DvtChartPieRenderUtils$$[($DvtChartPieLabelInfo$$ ? "start" : "end") + "GroupOffset"] += .04 * $DvtChartPieLabelUtils$$), $DvtChartAxisUtils$$.$isAxisRendered$($DvtSparkChartEventManager$$, "y2") && $DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartEventManager$$, "y2") && ($DvtChartPieRenderUtils$$[($DvtChartPieLabelInfo$$ ? "end" : "start") + "GroupOffset"] += .04 * $DvtChartPieLabelUtils$$)));
    $DvtChartPieRenderUtils$$.leftBuffer = $DvtChartPieLabelInfo$$ ? $DvtSparkChartAutomation$$.x - $DvtChartTooltipUtils$$.x : 0;
    $DvtChartPieRenderUtils$$.rightBuffer = $DvtChartPieLabelInfo$$ ? $DvtChartTooltipUtils$$.$w$ + $DvtChartTooltipUtils$$.x - ($DvtSparkChartAutomation$$.$w$ + $DvtSparkChartAutomation$$.x) : 0;
    $DvtChartPieRenderUtils$$._renderGridAtLabels = !$DvtChartDataChangeFunnelSlice$$ || $DvtChartAxisUtils$$.$hasTimeAxis$($DvtSparkChartEventManager$$);
    $DvtChartPieLabelInfo$$ = new $DvtChartAxis$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelInfo$$);
    $DvtSparkChartEventManager$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$.$xAxis$, $DvtChartPieRenderUtils$$, "x", $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
    $DvtChartPieRenderUtils$$._minOverflowCoord = $DvtChartSeriesEffectUtils$$._minOverflowCoord - $DvtSparkChartAutomation$$.x;
    $DvtChartPieRenderUtils$$._maxOverflowCoord = $DvtChartSeriesEffectUtils$$._maxOverflowCoord - $DvtSparkChartAutomation$$.x;
    return {axis:$DvtChartPieLabelInfo$$, options:$DvtChartPieRenderUtils$$, $dim$:$DvtSparkChartEventManager$$};
  };
  $DvtChartAxisRenderer$$.$_createYAxis$ = function $$DvtChartAxisRenderer$$$$_createYAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if ($DvtChartTypeUtils$$.$hasY2DataOnly$($DvtSparkChartEventManager$$)) {
      return null;
    }
    var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$JsonUtils$.clone($DvtChartSeriesEffectUtils$$.yAxis);
    $DvtChartPieLabelUtils$$.position = $DvtChartAxisUtils$$.$getYAxisPosition$($DvtSparkChartEventManager$$);
    $DvtChartPieLabelUtils$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneYAxis$($DvtSparkChartEventManager$$);
    $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($DvtChartPieLabelUtils$$, "y", $DvtSparkChartEventManager$$);
    $DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$);
    var $DvtChartPieRenderUtils$$ = new $DvtChartAxis$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartPieRenderUtils$$);
    $DvtSparkChartDefaults$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$.$yAxis$, $DvtChartPieLabelUtils$$, "y", $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
    $DvtChartAxisRenderer$$.$_adjustYAxisForLabels$($DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, "y");
    $DvtChartSeriesEffectUtils$$.yAxis.min = $DvtChartPieLabelUtils$$.min;
    $DvtChartSeriesEffectUtils$$.yAxis.max = $DvtChartPieLabelUtils$$.max;
    return {axis:$DvtChartPieRenderUtils$$, options:$DvtChartPieLabelUtils$$, $dim$:$DvtSparkChartDefaults$$};
  };
  $DvtChartAxisRenderer$$.$_createY2Axis$ = function $$DvtChartAxisRenderer$$$$_createY2Axis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if ($DvtChartTypeUtils$$.$hasY2Data$($DvtSparkChartEventManager$$)) {
      var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$JsonUtils$.clone($DvtChartSeriesEffectUtils$$.y2Axis);
      $DvtChartPieLabelUtils$$.position = $DvtChartAxisUtils$$.$getY2AxisPosition$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelUtils$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneY2Axis$($DvtSparkChartEventManager$$);
      $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($DvtChartPieLabelUtils$$, "y2", $DvtSparkChartEventManager$$);
      $DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$);
      var $DvtChartPieRenderUtils$$ = new $DvtChartAxis$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
      $DvtSparkChartDefaults$$.$addChild$($DvtChartPieRenderUtils$$);
      $DvtSparkChartDefaults$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$.$y2Axis$, $DvtChartPieLabelUtils$$, "y2", $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
      $DvtChartAxisRenderer$$.$_adjustYAxisForLabels$($DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, "y2");
      $DvtChartSeriesEffectUtils$$.y2Axis.min = $DvtChartPieLabelUtils$$.min;
      $DvtChartSeriesEffectUtils$$.y2Axis.max = $DvtChartPieLabelUtils$$.max;
      return {axis:$DvtChartPieRenderUtils$$, options:$DvtChartPieLabelUtils$$, $dim$:$DvtSparkChartDefaults$$};
    }
  };
  $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonAxisAttributes$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getOptions$();
    $dvt$$2$$.skin = $DvtSparkChartAutomation$$.skin;
    $dvt$$2$$.tickLabel.position = $DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$) ? "inside" : "outside";
    $dvt$$2$$.baselineScaling = $DvtChartAxisUtils$$.$getBaselineScaling$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$);
    if ($DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$) || "tangential" == $dvt$$2$$.position) {
      $dvt$$2$$._skipHighestTick = !0;
    }
    $dvt$$2$$.zoomAndScroll = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) ? "off" : $DvtSparkChartAutomation$$.zoomAndScroll;
    $dvt$$2$$._isOverview = $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartDefaults$$);
    "x" == $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$hasGroupAxis$($DvtSparkChartDefaults$$) || ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getMinMaxValue$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$), $dvt$$2$$.dataMin = null != $dvt$$2$$.dataMin ? $dvt$$2$$.dataMin : $DvtSparkChartEventManager$$.min, $dvt$$2$$.dataMax = null != $dvt$$2$$.dataMax ? $dvt$$2$$.dataMax : $DvtSparkChartEventManager$$.max);
    $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) && ($dvt$$2$$.polarGridShape = $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartDefaults$$) ? "polygon" : "circle", $dvt$$2$$._radius = $DvtSparkChartDefaults$$.$getRadius$());
    $dvt$$2$$.dnd = $DvtSparkChartAutomation$$.dnd;
  };
  $DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonYAxisAttributes$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$.timeAxisType = "disabled";
    $DvtChartEventUtils$$.$isLiveScroll$($DvtSparkChartDefaults$$) && $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartDefaults$$) && !$DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) && ($DvtSparkChartEventManager$$._continuousExtent = "on");
    if ($DvtSparkChartEventManager$$.isStandalone) {
      $DvtSparkChartEventManager$$.leftBuffer = 0, $DvtSparkChartEventManager$$.rightBuffer = 0;
    } else {
      if ($DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartDefaults$$)) {
        $DvtSparkChartEventManager$$.leftBuffer = Infinity, $DvtSparkChartEventManager$$.rightBuffer = Infinity;
      } else {
        var $DvtSparkChartAutomation$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartDefaults$$.$getCtx$());
        $DvtSparkChartEventManager$$.leftBuffer = $DvtSparkChartAutomation$$ ? 0 : $dvt$$2$$.$Axis$.$MINIMUM_AXIS_BUFFER$;
        $DvtSparkChartEventManager$$.rightBuffer = $DvtSparkChartAutomation$$ ? $dvt$$2$$.$Axis$.$MINIMUM_AXIS_BUFFER$ : 0;
      }
    }
  };
  $DvtChartAxisRenderer$$.$_adjustYAxisForLabels$ = function $$DvtChartAxisRenderer$$$$_adjustYAxisForLabels$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$.$getOptions$();
    if ($DvtChartAxisUtils$$.$isYAdjustmentNeeded$($DvtSparkChartAutomation$$)) {
      var $DvtChartPieLabelUtils$$ = $DvtChartSeriesEffectUtils$$.styleDefaults.dataLabelStyle, $DvtChartPieRenderUtils$$ = $DvtChartSeriesEffectUtils$$.styleDefaults.stackLabelStyle, $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getInfo$(), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$isStackLabelRendered$($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$TextUtils$.$getTextStringHeight$($DvtSparkChartAutomation$$.$getCtx$(), $DvtChartPieLabelInfo$$ ? $DvtChartPieRenderUtils$$ : 
      $DvtChartPieLabelUtils$$), $DvtChartPieRenderUtils$$ = 0;
      "log" == $DvtSparkChartDefaults$$.scale ? $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$getUnboundedValueAt$($DvtSparkChartEventManager$$.$getUnboundedCoordAt$($DvtChartSeriesEffectUtils$$.$DataMax$) - $DvtChartPieLabelUtils$$) - $DvtChartSeriesEffectUtils$$.$DataMax$ : ($DvtSparkChartEventManager$$ = 1, $DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartAutomation$$) && ($DvtSparkChartEventManager$$ = "y" == $DvtChartTooltipUtils$$ ? $DvtChartStyleUtils$$.$getSplitterPosition$($DvtSparkChartAutomation$$) : 
      1 - $DvtChartStyleUtils$$.$getSplitterPosition$($DvtSparkChartAutomation$$)), $DvtChartPieRenderUtils$$ = Math.abs($DvtChartSeriesEffectUtils$$.$MaxValue$ - $DvtChartSeriesEffectUtils$$.$MinValue$) / (Math.abs($DvtChartSeriesEffectUtils$$.$getEndCoord$() - $DvtChartSeriesEffectUtils$$.$getStartCoord$()) * $DvtSparkChartEventManager$$) * $DvtChartPieLabelUtils$$);
      $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartAutomation$$) && ($DvtChartPieRenderUtils$$ *= 4);
      $DvtChartSeriesEffectUtils$$.$DataMin$ - $DvtChartSeriesEffectUtils$$.$GlobalMin$ < $DvtChartPieRenderUtils$$ && 0 > $DvtChartSeriesEffectUtils$$.$DataMin$ && ($DvtSparkChartDefaults$$.dataMin -= $DvtChartPieRenderUtils$$);
      $DvtChartSeriesEffectUtils$$.$GlobalMax$ - $DvtChartSeriesEffectUtils$$.$DataMax$ < $DvtChartPieRenderUtils$$ && 0 < $DvtChartSeriesEffectUtils$$.$DataMax$ && ($DvtSparkChartDefaults$$.dataMax += $DvtChartPieRenderUtils$$);
    }
  };
  $DvtChartAxisRenderer$$.$_getPreferredSize$ = function $$DvtChartAxisRenderer$$$$_getPreferredSize$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtChartTooltipUtils$$.isStandalone, $DvtChartTypeUtils$$ = $DvtChartTooltipUtils$$.position, $DvtChartDataChangeFunnelSlice$$ = "top" == $DvtChartTypeUtils$$ || "bottom" == $DvtChartTypeUtils$$, $DvtChartLineMarker$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$), $DvtChartMarkerUtils$$ = $DvtChartTooltipUtils$$.maxSize, $DvtChartDataChangeLineArea$$ = $DvtChartTooltipUtils$$.size;
    $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelUtils$$.$w$;
    var $DvtChartRangeMarker$$ = $DvtChartPieLabelUtils$$.$h$;
    if ("radial" == $DvtChartTypeUtils$$ || "tangential" == $DvtChartTypeUtils$$) {
      $DvtChartRangeMarker$$ = $DvtChartSeriesEffectUtils$$ = 0;
    } else {
      if ("off" == $DvtChartTooltipUtils$$.rendered) {
        $DvtChartDataChangeFunnelSlice$$ ? $DvtChartRangeMarker$$ = 0 : $DvtChartSeriesEffectUtils$$ = 0;
      } else {
        if ($DvtChartPieLabelInfo$$) {
          $DvtChartDataChangeFunnelSlice$$ ? $DvtChartRangeMarker$$ = $DvtChartPieLabelUtils$$.$h$ - $DvtChartLineMarker$$ : $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelUtils$$.$w$ - $DvtChartLineMarker$$;
        } else {
          if (null != $DvtChartDataChangeLineArea$$) {
            $DvtChartDataChangeFunnelSlice$$ ? $DvtChartRangeMarker$$ = $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartDataChangeLineArea$$, $DvtChartPieRenderUtils$$.$h$) - $DvtChartLineMarker$$ : $DvtChartSeriesEffectUtils$$ = $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartDataChangeLineArea$$, $DvtChartPieRenderUtils$$.$w$) - $DvtChartLineMarker$$;
          } else {
            if ($DvtSparkChartEventManager$$.$getOptions$()._duringAnimation) {
              $DvtChartDataChangeFunnelSlice$$ ? ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartTooltipUtils$$._startOverflow = $DvtChartPieLabelUtils$$ ? $DvtSparkChartAutomation$$.$getRightOverflow$() : $DvtSparkChartAutomation$$.$getLeftOverflow$(), $DvtChartTooltipUtils$$._endOverflow = $DvtChartPieLabelUtils$$ ? $DvtSparkChartAutomation$$.$getLeftOverflow$() : $DvtSparkChartAutomation$$.$getRightOverflow$(), $DvtChartRangeMarker$$ = 
              $DvtSparkChartAutomation$$.getHeight()) : $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$.getWidth();
            } else {
              return $DvtChartDataChangeFunnelSlice$$ ? $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartTooltipUtils$$, $DvtChartPieLabelUtils$$.$w$, $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartMarkerUtils$$, $DvtChartPieRenderUtils$$.$h$) - $DvtChartLineMarker$$) : $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartTooltipUtils$$, $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartMarkerUtils$$, $DvtChartPieRenderUtils$$.$w$) - $DvtChartLineMarker$$, $DvtChartPieLabelUtils$$.$h$);
            }
          }
        }
      }
    }
    $DvtChartAxisUtils$$.$isYAdjustmentNeeded$($DvtSparkChartEventManager$$) && $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$);
    return new $dvt$$2$$.$Dimension$($DvtChartSeriesEffectUtils$$, $DvtChartRangeMarker$$);
  };
  $DvtChartAxisRenderer$$.$_addAxisGaps$ = function $$DvtChartAxisRenderer$$$$_addAxisGaps$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$), $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$getYAxisPosition$($dvt$$2$$), $DvtChartTooltipUtils$$ = $DvtChartAxisUtils$$.$getY2AxisPosition$($dvt$$2$$), $DvtChartSeriesEffectUtils$$ = $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x"), $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y"), $DvtChartPieRenderUtils$$ = $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2"), $DvtChartPieLabelInfo$$ = 
    $dvt$$2$$.$getOptions$().layout.verticalAxisGap, $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$ ? $DvtChartPieLabelInfo$$ * $DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, "x") : $DvtChartPieLabelInfo$$ * Math.max($DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, "y"), $DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, "y2")), $DvtChartPieLabelInfo$$ = Math.ceil($DvtChartPieLabelInfo$$);
    (!$DvtSparkChartDefaults$$ || "top" == $DvtSparkChartAutomation$$ && $DvtChartPieLabelUtils$$ || "top" == $DvtChartTooltipUtils$$ && $DvtChartPieRenderUtils$$) && $DvtSparkChartDefaults$$ || ($DvtSparkChartEventManager$$.y += $DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$.$h$ -= $DvtChartPieLabelInfo$$);
    (!$DvtSparkChartDefaults$$ || "bottom" == $DvtSparkChartAutomation$$ && $DvtChartPieLabelUtils$$ || "bottom" == $DvtChartTooltipUtils$$ && $DvtChartPieRenderUtils$$) && ($DvtSparkChartDefaults$$ || $DvtChartSeriesEffectUtils$$) || ($DvtSparkChartEventManager$$.$h$ -= $DvtChartPieLabelInfo$$);
  };
  $DvtChartAxisRenderer$$.$_positionAxis$ = function $$DvtChartAxisRenderer$$$$_positionAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ && $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.options.position, $DvtSparkChartDefaults$$.axis, $DvtSparkChartDefaults$$.$dim$.$w$, $DvtSparkChartDefaults$$.$dim$.$h$, $DvtSparkChartAutomation$$);
  };
  $DvtChartAxisRenderer$$.$_alignYAxes$ = function $$DvtChartAxisRenderer$$$$_alignYAxes$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.axis.$getInfo$();
    if ($DvtSparkChartDefaults$$) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getMinorTickCount$(), $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.options;
      $DvtChartTooltipUtils$$._majorTickCount = $DvtSparkChartDefaults$$.$getMajorTickCount$();
      $DvtChartTooltipUtils$$._minorTickCount = $DvtSparkChartAutomation$$;
    }
  };
  $DvtChartAxisRenderer$$.$_getSplitAvailSpace$ = function $$DvtChartAxisRenderer$$$$_getSplitAvailSpace$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $dvt$$2$$.clone();
    $DvtSparkChartDefaults$$ ? ($DvtChartTooltipUtils$$.$w$ = $dvt$$2$$.$w$ * $DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$.x = $DvtSparkChartAutomation$$ ? $dvt$$2$$.$w$ * (1 - $DvtSparkChartEventManager$$) : 0) : ($DvtChartTooltipUtils$$.$h$ = $dvt$$2$$.$h$ * $DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$.y = $DvtSparkChartAutomation$$ ? $dvt$$2$$.$h$ * (1 - $DvtSparkChartEventManager$$) : 0);
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartAxisRenderer$$.$_setOverflow$ = function $$DvtChartAxisRenderer$$$$_setOverflow$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if ($DvtSparkChartEventManager$$) {
      var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.axis.$getLeftOverflow$();
      $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.axis.$getRightOverflow$();
      $dvt$$2$$.x += $DvtChartTooltipUtils$$;
      $dvt$$2$$.$w$ -= $DvtChartTooltipUtils$$ + $DvtSparkChartEventManager$$;
      $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.axis.$setTranslateX$($DvtSparkChartDefaults$$.axis.$getTranslateX$() + ("left" == $DvtSparkChartDefaults$$.options.position ? $DvtChartTooltipUtils$$ : -$DvtSparkChartEventManager$$));
      $DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.axis.$setTranslateX$($DvtSparkChartAutomation$$.axis.$getTranslateX$() + ("left" == $DvtSparkChartAutomation$$.options.position ? $DvtChartTooltipUtils$$ : -$DvtSparkChartEventManager$$));
    }
  };
  $DvtChartAxisRenderer$$.$_storeAxes$ = function $$DvtChartAxisRenderer$$$$_storeAxes$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$.$xAxis$ && ($dvt$$2$$.$xAxis$.$destroy$(), $dvt$$2$$.removeChild($dvt$$2$$.$xAxis$));
    $dvt$$2$$.$yAxis$ && ($dvt$$2$$.$yAxis$.$destroy$(), $dvt$$2$$.removeChild($dvt$$2$$.$yAxis$));
    $dvt$$2$$.$y2Axis$ && ($dvt$$2$$.$y2Axis$.$destroy$(), $dvt$$2$$.removeChild($dvt$$2$$.$y2Axis$));
    $dvt$$2$$.$xAxis$ = $DvtSparkChartEventManager$$.axis;
    $dvt$$2$$.$yAxis$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.axis : null;
    $dvt$$2$$.$y2Axis$ = $DvtSparkChartAutomation$$ ? $DvtSparkChartAutomation$$.axis : null;
  };
  var $DvtChartLegendRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartLegendRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$ = 2;
  $DvtChartLegendRenderer$$.$render$ = function $$DvtChartLegendRenderer$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.legend.position;
    if (!("off" == $DvtChartTooltipUtils$$.legend.rendered || "auto" == $DvtChartTooltipUtils$$.legend.rendered && $DvtSparkChartEventManager$$.$_optionsCache$.$getFromCache$("hasLargeSeriesCount"))) {
      var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$JsonUtils$.clone($DvtChartTooltipUtils$$.legend);
      delete $DvtChartPieLabelUtils$$.position;
      $DvtChartPieLabelUtils$$.skin = $DvtChartTooltipUtils$$.skin;
      $DvtChartPieLabelUtils$$.hideAndShowBehavior = $DvtChartEventUtils$$.$getHideAndShowBehavior$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelUtils$$.hoverBehavior = $DvtChartEventUtils$$.$getHoverBehavior$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelUtils$$.hoverBehaviorDelay = $DvtChartStyleUtils$$.$getHoverBehaviorDelay$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelUtils$$.hiddenCategories = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelUtils$$.highlightedCategories = $DvtChartStyleUtils$$.$getHighlightedCategories$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelUtils$$.dnd = $DvtChartTooltipUtils$$.dnd;
      $DvtChartPieLabelUtils$$._dropColor = $DvtChartTooltipUtils$$._dropColor;
      "auto" == $DvtChartSeriesEffectUtils$$ && ($DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$.$w$ >= $DvtSparkChartAutomation$$.$h$ ? "end" : "bottom");
      var $DvtChartPieRenderUtils$$ = "top" == $DvtChartSeriesEffectUtils$$ || "bottom" == $DvtChartSeriesEffectUtils$$;
      $DvtChartPieLabelUtils$$.orientation = $DvtChartPieRenderUtils$$ ? "horizontal" : "vertical";
      "start" == $DvtChartSeriesEffectUtils$$ && ($DvtChartPieLabelUtils$$.halign = "end");
      if ("start" == $DvtChartSeriesEffectUtils$$ || "end" == $DvtChartSeriesEffectUtils$$) {
        $DvtChartPieLabelUtils$$.valign = "middle";
      }
      "top" == $DvtChartSeriesEffectUtils$$ && ($DvtChartPieLabelUtils$$.valign = "bottom");
      if ("top" == $DvtChartSeriesEffectUtils$$ || "bottom" == $DvtChartSeriesEffectUtils$$) {
        $DvtChartPieLabelUtils$$.halign = "center";
      }
      $DvtChartLegendRenderer$$.$_addLegendData$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$);
      if (0 != $DvtChartPieLabelUtils$$.sections.length) {
        var $DvtChartPieLabelInfo$$ = $dvt$$2$$.$Legend$.newInstance($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
        null != $DvtSparkChartEventManager$$.getId() && $DvtChartPieLabelInfo$$.setId($DvtSparkChartEventManager$$.getId() + "legend");
        $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelInfo$$);
        var $DvtChartDataChangeFunnelSlice$$;
        if (null != $DvtChartPieLabelUtils$$.size) {
          $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieRenderUtils$$ ? new $dvt$$2$$.$Dimension$($DvtSparkChartAutomation$$.$w$, $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieLabelUtils$$.size, $DvtSparkChartAutomation$$.$h$)) : new $dvt$$2$$.$Dimension$($DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieLabelUtils$$.size, $DvtSparkChartAutomation$$.$w$), $DvtSparkChartAutomation$$.$h$);
        } else {
          $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartAutomation$$.$w$ : $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieLabelUtils$$.maxSize, $DvtSparkChartAutomation$$.$w$);
          var $DvtChartLineMarker$$ = $DvtChartPieRenderUtils$$ ? $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieLabelUtils$$.maxSize, $DvtSparkChartAutomation$$.$h$) : $DvtSparkChartAutomation$$.$h$;
          $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelInfo$$.$getPreferredSize$($DvtChartPieLabelUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$);
        }
        $DvtChartPieLabelInfo$$.$render$($DvtChartPieLabelUtils$$, $DvtChartDataChangeFunnelSlice$$.$w$, $DvtChartDataChangeFunnelSlice$$.$h$);
        $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$ ? $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$.layout.legendGapHeight) : $DvtChartDefaults$$.$getGapWidth$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$.layout.legendGapWidth);
        $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$.$w$, $DvtChartDataChangeFunnelSlice$$.$h$, $DvtChartPieLabelUtils$$);
        $DvtSparkChartAutomation$$ = $DvtChartPieLabelInfo$$.$_bounds$;
        $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$.$localToStage$(new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y));
        $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$) || ($DvtChartDataChangeFunnelSlice$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), "end" == $DvtChartSeriesEffectUtils$$ ? $DvtChartDataChangeFunnelSlice$$ ? $DvtChartTooltipUtils$$._minOverflowCoord = $DvtChartPieRenderUtils$$.x + $DvtSparkChartAutomation$$.$w$ + $DvtChartPieLabelUtils$$ / 2 : $DvtChartTooltipUtils$$._maxOverflowCoord = $DvtChartPieRenderUtils$$.x - $DvtChartPieLabelUtils$$ / 
        2 : "start" == $DvtChartSeriesEffectUtils$$ && ($DvtChartDataChangeFunnelSlice$$ ? $DvtChartTooltipUtils$$._maxOverflowCoord = $DvtChartPieRenderUtils$$.x - $DvtChartPieLabelUtils$$ / 2 : $DvtChartTooltipUtils$$._minOverflowCoord = $DvtChartPieRenderUtils$$.x + $DvtSparkChartAutomation$$.$w$ + $DvtChartPieLabelUtils$$ / 2));
        $DvtSparkChartEventManager$$.$legend$ && ($DvtSparkChartEventManager$$.$legend$.$destroy$(), $DvtSparkChartDefaults$$.removeChild($DvtSparkChartEventManager$$.$legend$));
        $DvtSparkChartEventManager$$.$legend$ = $DvtChartPieLabelInfo$$;
      }
    }
  };
  $DvtChartLegendRenderer$$.$_addLegendData$ = function $$DvtChartLegendRenderer$$$$_addLegendData$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartLegendRenderer$$.$_getSeriesItems$($dvt$$2$$, "vertical" == $DvtSparkChartEventManager$$.orientation);
    if (0 < $DvtSparkChartDefaults$$.length) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.seriesSection;
      $DvtSparkChartAutomation$$.items = $DvtSparkChartDefaults$$;
      $DvtSparkChartEventManager$$.sections.unshift($DvtSparkChartAutomation$$);
    }
    $DvtSparkChartDefaults$$ = $DvtChartLegendRenderer$$.$_getRefObjItems$($dvt$$2$$);
    0 < $DvtSparkChartDefaults$$.length && ($DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.referenceObjectSection, $DvtSparkChartAutomation$$.items = $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$.referenceObjectTitle && ($DvtSparkChartAutomation$$.title = $DvtSparkChartEventManager$$.referenceObjectTitle), $DvtSparkChartEventManager$$.sections.push($DvtSparkChartAutomation$$));
  };
  $DvtChartLegendRenderer$$.$_getSeriesItems$ = function $$DvtChartLegendRenderer$$$$_getSeriesItems$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = [], $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$;
    if ("pie" == $DvtSparkChartEventManager$$.$getType$()) {
      for (var $DvtChartPieLabelUtils$$ = $DvtChartPieUtils$$.$getRenderedSeriesIndices$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartPieLabelUtils$$.length;$DvtChartPieRenderUtils$$++) {
        $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$], ($DvtChartTooltipUtils$$ = $DvtChartLegendRenderer$$.$_createLegendItem$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$)) && $DvtSparkChartAutomation$$.push($DvtChartTooltipUtils$$);
      }
      $DvtChartPieUtils$$.$hasOtherSeries$($DvtSparkChartEventManager$$) && ($DvtChartTooltipUtils$$ = {id:$DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$, text:$dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartEventManager$$.$getOptions$(), "labelOther", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER"), categoryVisibility:0 <= $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$), $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$) ? "hidden" : "visible", 
      symbolType:"marker", color:$DvtSparkChartEventManager$$.$getOptions$().styleDefaults.otherColor, borderColor:$DvtSparkChartEventManager$$.$getOptions$().styleDefaults.borderColor}, $DvtSparkChartAutomation$$.push($DvtChartTooltipUtils$$));
    } else {
      var $DvtChartPieLabelUtils$$ = {}, $DvtChartPieRenderUtils$$ = {}, $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);
      for ($DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartPieLabelInfo$$;$DvtChartSeriesEffectUtils$$++) {
        if ($DvtChartTooltipUtils$$ = $DvtChartLegendRenderer$$.$_createLegendItem$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$)) {
          var $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getStackCategory$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$);
          $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$) ? $DvtChartPieRenderUtils$$[$DvtChartDataChangeFunnelSlice$$] ? $DvtChartPieRenderUtils$$[$DvtChartDataChangeFunnelSlice$$].push($DvtChartTooltipUtils$$) : $DvtChartPieRenderUtils$$[$DvtChartDataChangeFunnelSlice$$] = [$DvtChartTooltipUtils$$] : $DvtChartPieLabelUtils$$[$DvtChartDataChangeFunnelSlice$$] ? $DvtChartPieLabelUtils$$[$DvtChartDataChangeFunnelSlice$$].push($DvtChartTooltipUtils$$) : 
          $DvtChartPieLabelUtils$$[$DvtChartDataChangeFunnelSlice$$] = [$DvtChartTooltipUtils$$];
        }
      }
      $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getStackCategories$($DvtSparkChartEventManager$$, null, !0);
      $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isVertical$($DvtSparkChartEventManager$$) && $DvtSparkChartDefaults$$;
      $DvtSparkChartAutomation$$ = $DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$.y, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$);
      $DvtSparkChartAutomation$$ = $DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($DvtChartPieRenderUtils$$, $DvtChartTooltipUtils$$.y2, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$);
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$ = function $$DvtChartLegendRenderer$$$$_getSeriesItemsForAxis$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartSeriesEffectUtils$$++) {
      ($DvtChartTooltipUtils$$ = $dvt$$2$$[$DvtSparkChartEventManager$$[$DvtChartSeriesEffectUtils$$]]) && ($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartAutomation$$.concat($DvtChartTooltipUtils$$.reverse()) : $DvtSparkChartAutomation$$.concat($DvtChartTooltipUtils$$));
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartLegendRenderer$$.$_createLegendItem$ = function $$DvtChartLegendRenderer$$$$_createLegendItem$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getType$(), $DvtChartSeriesEffectUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$.displayInLegend;
    if (!$DvtSparkChartAutomation$$ || "off" == $DvtChartPieRenderUtils$$ || "on" != $DvtChartPieRenderUtils$$ && ($DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$)) || "on" != $DvtChartPieRenderUtils$$ && !$DvtChartDataUtils$$.$hasSeriesData$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return null;
    }
    var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getSeriesLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if ("on" != $DvtChartPieRenderUtils$$ && (!$DvtChartPieLabelInfo$$ || 0 >= $dvt$$2$$.$StringUtils$.trim($DvtChartPieLabelInfo$$).length)) {
      return null;
    }
    $DvtChartPieRenderUtils$$ = {id:$DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), text:$DvtChartPieLabelInfo$$, categories:$DvtChartDataUtils$$.$getSeriesCategories$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), categoryVisibility:$DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? "visible" : "hidden", _dataContext:$DvtChartDataUtils$$.$getDataContext$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
    -1)};
    "line" == $DvtChartSeriesEffectUtils$$ || "lineWithArea" == $DvtChartSeriesEffectUtils$$ || "scatter" == $DvtChartTooltipUtils$$ || "bubble" == $DvtChartTooltipUtils$$ ? ($DvtChartPieRenderUtils$$.lineStyle = $DvtChartStyleUtils$$.$getLineStyle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$.lineWidth = $DvtChartStyleUtils$$.$getLineWidth$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$) ? ($DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, null, "source")) ? ($DvtChartPieRenderUtils$$.symbolType = "image", $DvtChartPieRenderUtils$$.source = $DvtChartTooltipUtils$$) : ($DvtChartPieRenderUtils$$.symbolType = "none" == $DvtChartPieLabelUtils$$ ? "marker" : "lineWithMarker", "lineWithMarker" == $DvtChartPieRenderUtils$$.symbolType && ($DvtChartPieRenderUtils$$.lineWidth = Math.min($DvtChartLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$, 
    $DvtChartPieRenderUtils$$.lineWidth)), $DvtChartPieRenderUtils$$.markerShape = $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$.markerColor = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) : $DvtChartPieRenderUtils$$.symbolType = "line") : ($DvtChartPieRenderUtils$$.symbolType = "marker", "none" == $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) && 
    ($DvtChartPieRenderUtils$$.markerShape = $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)));
    $DvtChartPieRenderUtils$$.color = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieRenderUtils$$.borderColor = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieRenderUtils$$.pattern = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieRenderUtils$$.style = "area" == $DvtChartSeriesEffectUtils$$ ? $DvtChartStyleUtils$$.$getAreaStyle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : $DvtChartStyleUtils$$.$getStyle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieRenderUtils$$.className = "area" == $DvtChartSeriesEffectUtils$$ ? $DvtChartStyleUtils$$.$getAreaClassName$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : $DvtChartStyleUtils$$.$getClassName$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieRenderUtils$$.markerStyle = $DvtChartStyleUtils$$.$getMarkerStyle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieRenderUtils$$.markerClassName = $DvtChartStyleUtils$$.$getMarkerClassName$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieRenderUtils$$.action = $DvtSparkChartAutomation$$.action;
    $DvtChartPieRenderUtils$$._spb = $DvtSparkChartEventManager$$.$getShowPopupBehaviors$($DvtSparkChartAutomation$$._id);
    $DvtChartPieRenderUtils$$.drilling = $DvtChartEventUtils$$.$isSeriesDrillable$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? "on" : "off";
    $DvtChartPieRenderUtils$$.shortDesc = $DvtSparkChartAutomation$$.shortDesc;
    return $DvtChartPieRenderUtils$$;
  };
  $DvtChartLegendRenderer$$.$_getRefObjItems$ = function $$DvtChartLegendRenderer$$$$_getRefObjItems$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getRefObjs$($dvt$$2$$);
    if (0 >= $DvtSparkChartEventManager$$.length) {
      return [];
    }
    for (var $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      if ($DvtChartTooltipUtils$$ && "on" == $DvtChartTooltipUtils$$.displayInLegend && $DvtChartTooltipUtils$$.text) {
        var $DvtChartSeriesEffectUtils$$ = $DvtChartRefObjUtils$$.$getType$($DvtChartTooltipUtils$$);
        $DvtSparkChartDefaults$$.push({symbolType:"area" == $DvtChartSeriesEffectUtils$$ ? "square" : "line", text:$DvtChartTooltipUtils$$.text, color:$DvtChartRefObjUtils$$.$getColor$($DvtChartTooltipUtils$$), lineStyle:$DvtChartTooltipUtils$$.lineStyle, lineWidth:$DvtChartRefObjUtils$$.$getLineWidth$($DvtChartTooltipUtils$$), categories:$DvtChartRefObjUtils$$.$getRefObjCategories$($DvtChartTooltipUtils$$), categoryVisibility:$DvtChartRefObjUtils$$.$isObjectRendered$($dvt$$2$$, $DvtChartTooltipUtils$$) ? 
        "visible" : "hidden", shortDesc:$DvtChartTooltipUtils$$.shortDesc, style:$DvtChartTooltipUtils$$.style, className:$DvtChartTooltipUtils$$.className});
      }
    }
    return $DvtSparkChartDefaults$$;
  };
  var $DvtChartPlotAreaRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPlotAreaRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ = 16;
  $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ = 4;
  $DvtChartPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$ = 3;
  $DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$ = 1E4;
  $DvtChartPlotAreaRenderer$$.$render$ = function $$DvtChartPlotAreaRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    "off" == $dvt$$2$$.$getOptions$().plotArea.rendered ? $DvtChartPlotAreaRenderer$$.$_renderAxisLines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : 0 < $DvtSparkChartDefaults$$.$w$ && 0 < $DvtSparkChartDefaults$$.$h$ && ($dvt$$2$$.$_currentMarkers$ = [], $dvt$$2$$.$_currentAreas$ = [], $DvtChartPlotAreaRenderer$$.$_renderBackgroundObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPlotAreaRenderer$$.$_renderTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$), $DvtChartPlotAreaRenderer$$.$_renderForegroundObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$));
  };
  $DvtChartPlotAreaRenderer$$.$_renderBackgroundObjects$ = function $$DvtChartPlotAreaRenderer$$$$_renderBackgroundObjects$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartSeriesEffectUtils$$ = $DvtChartPlotAreaRenderer$$.$_getBackgroundShape$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getBackgroundColor$($DvtSparkChartEventManager$$);
    $DvtChartPieLabelUtils$$ ? $DvtChartSeriesEffectUtils$$.$setSolidFill$($DvtChartPieLabelUtils$$) : $DvtChartSeriesEffectUtils$$.$setInvisibleFill$();
    $DvtSparkChartDefaults$$.$addChild$($DvtChartSeriesEffectUtils$$);
    $DvtSparkChartEventManager$$.$_cache$.$putToCache$("plotAreaBackground", $DvtChartSeriesEffectUtils$$);
    if ($DvtChartTooltipUtils$$.xAxis.referenceObjects || $DvtChartTooltipUtils$$.yAxis.referenceObjects || $DvtChartTooltipUtils$$.y2Axis.referenceObjects) {
      $DvtChartTooltipUtils$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartRefObjRenderer$$.$renderBackgroundObjects$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$);
    }
    $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) && ($DvtChartTooltipUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$()), $DvtSparkChartDefaults$$.$addChild$($DvtChartTooltipUtils$$), $DvtSparkChartEventManager$$.$__setAreaContainer$($DvtChartTooltipUtils$$), $DvtChartTypeUtils$$.$hasAreaSeries$($DvtSparkChartEventManager$$) && $DvtChartPlotAreaRenderer$$.$_renderAreas$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$, !1));
  };
  $DvtChartPlotAreaRenderer$$.$_getBackgroundShape$ = function $$DvtChartPlotAreaRenderer$$$$_getBackgroundShape$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$;
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getCtx$();
    if ($DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$)) {
      var $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.x + $DvtSparkChartDefaults$$.$w$ / 2, $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$.y + $DvtSparkChartDefaults$$.$h$ / 2;
      $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartEventManager$$) ? ($DvtChartTooltipUtils$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$.$getRadius$()), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Polygon$($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$)) : $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Circle$($DvtSparkChartAutomation$$, 
      $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartEventManager$$.$getRadius$());
    } else {
      $DvtSparkChartAutomation$$ = new $dvt$$2$$.Rect($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$);
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartPlotAreaRenderer$$.$_renderTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderTicks$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($dvt$$2$$, "x") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$yAxis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($dvt$$2$$, "y") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$yAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$y2Axis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($dvt$$2$$, "y2") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$y2Axis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($dvt$$2$$, "x") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$yAxis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($dvt$$2$$, "y") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$yAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$y2Axis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($dvt$$2$$, "y2") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$y2Axis$, $DvtSparkChartDefaults$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderAxisLines$ = function $$DvtChartPlotAreaRenderer$$$$_renderAxisLines$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.$xAxis$ && $dvt$$2$$.$yAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "x") && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $dvt$$2$$.$yAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$xAxis$ && $dvt$$2$$.$y2Axis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "x") && ($dvt$$2$$.$yAxis$ && !$DvtChartTypeUtils$$.$isSplitDualY$($dvt$$2$$) || $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $dvt$$2$$.$y2Axis$, $DvtSparkChartDefaults$$));
    $dvt$$2$$.$yAxis$ && $dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "y") && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$yAxis$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$y2Axis$ && $dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "y2") && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$y2Axis$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderMajorTicks$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartPlotAreaRenderer$$.$_renderGridlines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.$getOptions$().majorTick, $DvtSparkChartDefaults$$.$getPosition$(), $DvtSparkChartDefaults$$.$getMajorTickCoords$(), $DvtSparkChartDefaults$$.$getBaselineCoord$(), $DvtSparkChartAutomation$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderMinorTicks$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartPlotAreaRenderer$$.$_renderGridlines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.$getOptions$().minorTick, $DvtSparkChartDefaults$$.$getPosition$(), $DvtSparkChartDefaults$$.$getMinorTickCoords$(), null, $DvtSparkChartAutomation$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderAxisLine$ = function $$DvtChartPlotAreaRenderer$$$$_renderAxisLine$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getOptions$();
    var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$.position, $DvtChartSeriesEffectUtils$$ = "bottom" == $DvtChartSeriesEffectUtils$$ || "right" == $DvtChartSeriesEffectUtils$$ || "tangential" == $DvtChartSeriesEffectUtils$$ ? $DvtSparkChartAutomation$$.$getMaxCoord$() : $DvtSparkChartAutomation$$.$getMinCoord$();
    $DvtChartPlotAreaRenderer$$.$_renderGridlines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.axisLine, $DvtSparkChartAutomation$$.$getPosition$(), [$DvtChartSeriesEffectUtils$$], null, $DvtChartTooltipUtils$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderGridlines$ = function $$DvtChartPlotAreaRenderer$$$$_renderGridlines$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.lineColor, $DvtChartTypeUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartPieLabelInfo$$, 1, $DvtSparkChartAutomation$$.lineWidth);
    $DvtSparkChartAutomation$$.lineStyle && $DvtChartTypeUtils$$.$setStyle$($dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartAutomation$$.lineStyle));
    var $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.clone();
    "inherit" != $DvtSparkChartAutomation$$.baselineColor && ($DvtChartPieLabelInfo$$ = "auto" == $DvtSparkChartAutomation$$.baselineColor ? $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartPieLabelInfo$$, .4) : $DvtSparkChartAutomation$$.baselineColor, $DvtChartDataChangeFunnelSlice$$.$setColor$($DvtChartPieLabelInfo$$));
    $DvtChartDataChangeFunnelSlice$$.$setWidth$(null != $DvtSparkChartAutomation$$.baselineWidth ? $DvtSparkChartAutomation$$.baselineWidth : $DvtSparkChartAutomation$$.lineWidth);
    $DvtChartDataChangeFunnelSlice$$.$setStyle$($dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartAutomation$$.baselineStyle ? $DvtSparkChartAutomation$$.baselineStyle : $DvtSparkChartAutomation$$.lineStyle));
    for ($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartSeriesEffectUtils$$.length;$DvtSparkChartAutomation$$++) {
      $DvtChartPlotAreaRenderer$$.$_renderGridline$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$[$DvtSparkChartAutomation$$], null != $DvtChartPieLabelUtils$$ && $DvtChartSeriesEffectUtils$$[$DvtSparkChartAutomation$$] == $DvtChartPieLabelUtils$$ ? $DvtChartDataChangeFunnelSlice$$ : $DvtChartTypeUtils$$, $DvtChartPieRenderUtils$$);
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderGridline$ = function $$DvtChartPlotAreaRenderer$$$$_renderGridline$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieRenderUtils$$;
    $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$getCtx$();
    var $DvtChartPieLabelInfo$$ = !$dvt$$2$$.$Agent$.$isTouchDevice$() || 1 < $dvt$$2$$.$Agent$.$getDevicePixelRatio$();
    "radial" == $DvtSparkChartAutomation$$ ? ($DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartEventManager$$) ? ($DvtChartTooltipUtils$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$(0, 0, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartTooltipUtils$$), $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$Polygon$($DvtChartPieRenderUtils$$, $DvtChartTooltipUtils$$)) : $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$Circle$($DvtChartPieRenderUtils$$, 0, 0, $DvtChartTooltipUtils$$), 
    $DvtChartPieRenderUtils$$.$setInvisibleFill$(), $DvtChartPieRenderUtils$$.$setTranslate$($DvtChartPieLabelUtils$$.x + $DvtChartPieLabelUtils$$.$w$ / 2, $DvtChartPieLabelUtils$$.y + $DvtChartPieLabelUtils$$.$h$ / 2)) : "tangential" == $DvtSparkChartAutomation$$ ? ($DvtChartPieRenderUtils$$ = new $dvt$$2$$.$Line$($DvtChartPieRenderUtils$$, 0, 0, $DvtSparkChartEventManager$$.$getRadius$() * Math.sin($DvtChartTooltipUtils$$), -$DvtSparkChartEventManager$$.$getRadius$() * Math.cos($DvtChartTooltipUtils$$)), 
    .01 > $DvtChartTooltipUtils$$ % Math.PI / 2 && $DvtChartPieLabelInfo$$ && $DvtChartPieRenderUtils$$.$setPixelHinting$(), $DvtChartPieRenderUtils$$.$setTranslate$($DvtChartPieLabelUtils$$.x + $DvtChartPieLabelUtils$$.$w$ / 2, $DvtChartPieLabelUtils$$.y + $DvtChartPieLabelUtils$$.$h$ / 2)) : ($DvtChartPieRenderUtils$$ = "top" == $DvtSparkChartAutomation$$ || "bottom" == $DvtSparkChartAutomation$$ ? new $dvt$$2$$.$Line$($DvtChartPieRenderUtils$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelUtils$$.y, 
    $DvtChartTooltipUtils$$, $DvtChartPieLabelUtils$$.y + $DvtChartPieLabelUtils$$.$h$) : new $dvt$$2$$.$Line$($DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$.x, $DvtChartTooltipUtils$$, $DvtChartPieLabelUtils$$.x + $DvtChartPieLabelUtils$$.$w$, $DvtChartTooltipUtils$$), $DvtChartPieLabelInfo$$ && $DvtChartPieRenderUtils$$.$setPixelHinting$());
    $DvtChartPieRenderUtils$$.$setStroke$($DvtChartSeriesEffectUtils$$);
    $DvtChartPieRenderUtils$$.$setMouseEnabled$(!1);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartPieRenderUtils$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderForegroundObjects$ = function $$DvtChartPlotAreaRenderer$$$$_renderForegroundObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$(), $DvtChartTooltipUtils$$ = $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$), $DvtChartSeriesEffectUtils$$ = $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$hasLineSeries$($dvt$$2$$), $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.$hasCandlestickSeries$($dvt$$2$$), $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$hasLineWithAreaSeries$($dvt$$2$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($dvt$$2$$, 
    $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPlotAreaRenderer$$.$_renderAxisLines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    var $DvtChartLineMarker$$ = $DvtSparkChartAutomation$$.plotArea.borderColor, $DvtChartMarkerUtils$$ = $DvtSparkChartAutomation$$.plotArea.borderWidth;
    if ($DvtChartLineMarker$$ && 0 != $DvtChartMarkerUtils$$) {
      var $DvtChartDataChangeLineArea$$ = $DvtChartPlotAreaRenderer$$.$_getBackgroundShape$($dvt$$2$$, $DvtSparkChartDefaults$$);
      $DvtChartDataChangeLineArea$$.$setInvisibleFill$();
      $DvtChartDataChangeLineArea$$.$setSolidStroke$($DvtChartLineMarker$$, null, $DvtChartMarkerUtils$$);
      $DvtChartDataChangeLineArea$$.$setMouseEnabled$(!1);
      $DvtSparkChartEventManager$$.$addChild$($DvtChartDataChangeLineArea$$);
    }
    $DvtChartTooltipUtils$$ ? ($DvtChartPieLabelInfo$$ && $DvtChartPlotAreaRenderer$$.$_renderAreas$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, !0), $DvtChartSeriesEffectUtils$$ && $DvtChartPlotAreaRenderer$$.$_renderBars$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ && $DvtChartPlotAreaRenderer$$.$_renderLines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$ && 
    $DvtChartPlotAreaRenderer$$.$_renderStock$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$)) : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && $DvtChartPlotAreaRenderer$$.$_renderScatterBubble$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartDefaults$$);
    if ($DvtSparkChartAutomation$$.xAxis.referenceObjects || $DvtSparkChartAutomation$$.yAxis.referenceObjects || $DvtSparkChartAutomation$$.y2Axis.referenceObjects) {
      $DvtChartDataChangeFunnelSlice$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartRefObjRenderer$$.$renderForegroundObjects$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartDefaults$$);
    }
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getInitialSelection$($dvt$$2$$);
    $DvtChartEventUtils$$.$setInitialSelection$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $dvt$$2$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($dvt$$2$$));
  };
  $DvtChartPlotAreaRenderer$$.$_renderDataLabel$ = function $$DvtChartPlotAreaRenderer$$$$_renderDataLabel$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$) {
    if (!$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
      var $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getDataLabel$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$);
      if (null != $DvtChartDataChangeFunnelSlice$$) {
        var $DvtChartLineMarker$$ = $DvtChartStyleUtils$$.$getDataLabelPosition$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$);
        if ("none" != $DvtChartLineMarker$$) {
          $DvtChartDataChangeFunnelSlice$$ = new $dvt$$2$$.$OutputText$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartDataChangeFunnelSlice$$, 0, 0);
          $DvtChartDataChangeFunnelSlice$$.$setMouseEnabled$(!1);
          $DvtChartPieLabelUtils$$ = $DvtChartPieLabelInfo$$ ? $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.stackLabelStyle : $DvtChartStyleUtils$$.$getDataLabelStyle$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartLineMarker$$, $DvtChartPieRenderUtils$$);
          $DvtChartDataChangeFunnelSlice$$.$setCSSStyle$($DvtChartPieLabelUtils$$);
          $DvtChartDataChangeFunnelSlice$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2);
          $DvtChartDataChangeFunnelSlice$$.$setX$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2);
          $DvtChartDataChangeFunnelSlice$$.$alignCenter$();
          $DvtChartDataChangeFunnelSlice$$.$alignMiddle$();
          $DvtChartPieLabelUtils$$ = $DvtChartDataChangeFunnelSlice$$.$measureDimensions$();
          if ("left" == $DvtChartLineMarker$$) {
            $DvtChartDataChangeFunnelSlice$$.$setX$($DvtSparkChartAutomation$$.x - $DvtChartPieLabelUtils$$.$w$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$);
          } else {
            if ("right" == $DvtChartLineMarker$$) {
              $DvtChartDataChangeFunnelSlice$$.$setX$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ + $DvtChartPieLabelUtils$$.$w$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$);
            } else {
              if ("top" == $DvtChartLineMarker$$) {
                $DvtChartDataChangeFunnelSlice$$.$setY$($DvtSparkChartAutomation$$.y - $DvtChartPieLabelUtils$$.$h$ / 2);
              } else {
                if ("bottom" == $DvtChartLineMarker$$) {
                  $DvtChartDataChangeFunnelSlice$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ + $DvtChartPieLabelUtils$$.$h$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2);
                } else {
                  if ("bar" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$)) {
                    if ($DvtChartPieLabelUtils$$.$w$ > $DvtSparkChartAutomation$$.$w$ || $DvtChartPieLabelUtils$$.$h$ > $DvtSparkChartAutomation$$.$h$) {
                      return;
                    }
                    "inLeft" == $DvtChartLineMarker$$ ? $DvtChartDataChangeFunnelSlice$$.$setX$($DvtSparkChartAutomation$$.x + $DvtChartPieLabelUtils$$.$w$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inRight" == $DvtChartLineMarker$$ ? $DvtChartDataChangeFunnelSlice$$.$setX$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ - $DvtChartPieLabelUtils$$.$w$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inTop" == $DvtChartLineMarker$$ ? $DvtChartDataChangeFunnelSlice$$.$setY$($DvtSparkChartAutomation$$.y + 
                    $DvtChartPieLabelUtils$$.$h$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inBottom" == $DvtChartLineMarker$$ && $DvtChartDataChangeFunnelSlice$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ - $DvtChartPieLabelUtils$$.$h$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2);
                  } else {
                    if ($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && ($DvtSparkChartAutomation$$.x += $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtSparkChartAutomation$$.y += $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtSparkChartAutomation$$.$h$ -= 2 * $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtSparkChartAutomation$$.$w$ -= 2 * $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtChartLineMarker$$ = $DvtChartDataChangeFunnelSlice$$.$getOptimalFontSize$($DvtSparkChartAutomation$$), 
                    $DvtChartDataChangeFunnelSlice$$.$setFontSize$($DvtChartLineMarker$$), !$dvt$$2$$.$TextUtils$.$fitText$($DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$, $DvtSparkChartDefaults$$, $DvtChartPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$))) {
                      return;
                    }
                  }
                  null != $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) && ($DvtChartPieLabelUtils$$ = $DvtChartDataChangeFunnelSlice$$.$getDimensions$(), $DvtSparkChartAutomation$$ = .15 * $DvtChartPieLabelUtils$$.$h$, $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.$roundedRectangle$($DvtChartPieLabelUtils$$.x - $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelUtils$$.$w$ + 2 * $DvtSparkChartAutomation$$, 
                  $DvtChartPieLabelUtils$$.$h$, 2, 2, 2, 2), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Path$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$.$setSolidFill$("#FFFFFF", .9), $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartAutomation$$));
                }
              }
            }
          }
          $DvtChartStyleUtils$$.$optimizeMarkerStroke$($DvtSparkChartEventManager$$) && $DvtChartDataChangeFunnelSlice$$.$setSolidStroke$("none");
          $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangeFunnelSlice$$);
          $DvtSparkChartEventManager$$.$addDataLabel$($DvtChartDataChangeFunnelSlice$$);
        }
      }
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderDataLabelForMarker$ = function $$DvtChartPlotAreaRenderer$$$$_renderDataLabelForMarker$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$getEventManager$().$getLogicalObject$($DvtSparkChartAutomation$$), $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.$getSeriesIndex$(), $DvtChartTooltipUtils$$ = $DvtChartTooltipUtils$$.$getGroupIndex$();
    if ($DvtSparkChartAutomation$$ instanceof $dvt$$2$$.$SimpleMarker$) {
      var $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Rectangle$($DvtSparkChartAutomation$$.$getCx$() - $DvtSparkChartAutomation$$.getWidth() / 2, $DvtSparkChartAutomation$$.$getCy$() - $DvtSparkChartAutomation$$.getHeight() / 2, $DvtSparkChartAutomation$$.getWidth(), $DvtSparkChartAutomation$$.getHeight());
      $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartSeriesEffectUtils$$, $DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$.$_dataColor$);
    } else {
      $DvtSparkChartAutomation$$ instanceof $DvtChartRangeMarker$$ && ($DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.$getBoundingBox1$(), $DvtChartSeriesEffectUtils$$, $DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$.$_dataColor$, "low"), $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.$getBoundingBox2$(), $DvtChartSeriesEffectUtils$$, 
      $DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$.$_dataColor$, "high"));
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderScatterBubble$ = function $$DvtChartPlotAreaRenderer$$$$_renderScatterBubble$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtChartPlotAreaRenderer$$.$_filterScatterBubble$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);
    for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartPieRenderUtils$$;$DvtChartPieLabelUtils$$++) {
      "none" != $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$) && $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$);
    }
    var $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$SolidStroke$($DvtChartPieLabelInfo$$, null, $DvtChartDataChangeFunnelSlice$$), $DvtChartDataChangeFunnelSlice$$ = [];
    if ($DvtChartSeriesEffectUtils$$) {
      $DvtChartPieRenderUtils$$ = ($DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$optimizeMarkerStroke$($DvtSparkChartEventManager$$)) ? $DvtChartPieLabelInfo$$.$getColor$() : null;
      $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$ ? $DvtChartPieLabelInfo$$.getWidth() : null;
      for (var $DvtChartLineMarker$$ = 0;$DvtChartLineMarker$$ < $DvtChartSeriesEffectUtils$$.length;$DvtChartLineMarker$$++) {
        var $DvtChartDataChangeLineArea$$ = $DvtChartPlotAreaRenderer$$.$_createMarker$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$[$DvtChartLineMarker$$], $DvtChartTooltipUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$, !1);
        $DvtChartDataChangeFunnelSlice$$.push($DvtChartDataChangeLineArea$$);
      }
    } else {
      for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartPieRenderUtils$$;$DvtChartPieLabelUtils$$++) {
        $DvtChartSeriesEffectUtils$$ = $DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelInfo$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataChangeFunnelSlice$$.concat($DvtChartSeriesEffectUtils$$);
      }
      $DvtChartMarkerUtils$$.$sortMarkers$($DvtChartDataChangeFunnelSlice$$);
    }
    $DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) ? $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelInfo$$) : $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelInfo$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_renderMarkersForSeries$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartSeriesEffectUtils$$, null, $DvtChartPieLabelUtils$$);
    $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? $DvtChartPlotAreaRenderer$$.$_getRangeMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) : $DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$);
    $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartSeriesEffectUtils$$);
  };
  $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$ = function $$DvtChartPlotAreaRenderer$$$$_addMarkersToContainer$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$optimizeMarkerStroke$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$optimizeMarkerFill$($DvtSparkChartEventManager$$);
    if ($DvtChartPieLabelUtils$$ || $DvtChartPieRenderUtils$$) {
      $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartPieLabelUtils$$ ? $DvtChartSeriesEffectUtils$$.$setStroke$($DvtChartTooltipUtils$$) : $DvtChartSeriesEffectUtils$$.$setInvisibleFill$(), $DvtSparkChartDefaults$$.$addChild$($DvtChartSeriesEffectUtils$$);
    }
    for ($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$.length;$DvtSparkChartDefaults$$++) {
      $DvtChartSeriesEffectUtils$$.$addChild$($DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$]), $DvtChartPlotAreaRenderer$$.$_renderDataLabelForMarker$($DvtSparkChartEventManager$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$]);
    }
    $DvtSparkChartEventManager$$.$_currentMarkers$.push($DvtSparkChartAutomation$$);
  };
  $DvtChartPlotAreaRenderer$$.$_getMarkerInfo$ = function $$DvtChartPlotAreaRenderer$$$$_getMarkerInfo$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if (null == $DvtChartPieLabelUtils$$ || isNaN($DvtChartPieLabelUtils$$) || $DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) {
      return null;
    }
    var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if (!$DvtChartPieLabelUtils$$) {
      if ("jet" != $DvtChartSeriesEffectUtils$$._environment && $DvtChartAxisUtils$$.$isMixedFrequency$($DvtSparkChartEventManager$$)) {
        2 > $DvtChartPieRenderUtils$$ && ($DvtChartPieLabelUtils$$ = !0);
      } else {
        var $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$ - 1, $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartDataChangeFunnelSlice$$ && 0 < $DvtChartPieLabelInfo$$ && $DvtSparkChartAutomation$$ == $DvtChartPieLabelInfo$$ ? 0 : $DvtSparkChartAutomation$$ + 1, $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeFunnelSlice$$ && 
        0 < $DvtChartPieLabelInfo$$ && 0 == $DvtSparkChartAutomation$$ ? $DvtChartPieLabelInfo$$ : $DvtSparkChartAutomation$$ - 1), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$);
        null != $DvtChartPieLabelInfo$$ && !isNaN($DvtChartPieLabelInfo$$) || null != $DvtChartPieRenderUtils$$ && !isNaN($DvtChartPieRenderUtils$$) || ($DvtChartPieLabelUtils$$ = !0);
      }
    }
    if (!$DvtChartPieLabelUtils$$ && ($DvtChartTypeUtils$$.$isSpark$($DvtSparkChartEventManager$$) || ($DvtChartSeriesEffectUtils$$._duringAnimation || $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) && !$DvtChartDataUtils$$.$isDataSelected$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$))) {
      return null;
    }
    if (!$DvtChartStyleUtils$$.$isDataItemRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) {
      return !1;
    }
    $DvtChartSeriesEffectUtils$$ = !0;
    $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getMarkerPosition$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$);
    $DvtSparkChartEventManager$$ = $DvtChartStyleUtils$$.$getMarkerSize$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartTooltipUtils$$ && $DvtChartPieRenderUtils$$ && $DvtSparkChartEventManager$$ && ($DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.$intersects$(new $dvt$$2$$.$Rectangle$($DvtChartPieRenderUtils$$.x - $DvtSparkChartEventManager$$ / 2, $DvtChartPieRenderUtils$$.y - $DvtSparkChartEventManager$$ / 2, $DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$)));
    return $DvtChartPieRenderUtils$$ && $DvtChartSeriesEffectUtils$$ ? {$seriesIndex$:$DvtSparkChartDefaults$$, $groupIndex$:$DvtSparkChartAutomation$$, x:$DvtChartPieRenderUtils$$.x, y:$DvtChartPieRenderUtils$$.y, size:$DvtSparkChartEventManager$$, $markerDisplayed$:$DvtChartPieLabelUtils$$} : null;
  };
  $DvtChartPlotAreaRenderer$$.$_getScatterBubbleMarkerInfo$ = function $$DvtChartPlotAreaRenderer$$$$_getScatterBubbleMarkerInfo$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if (!$DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return !1;
    }
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getScatterBubbleMarkerPosition$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartAutomation$$ ? ($dvt$$2$$ = $DvtChartStyleUtils$$.$getMarkerSize$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) ? {$seriesIndex$:$DvtSparkChartEventManager$$, $groupIndex$:$DvtSparkChartDefaults$$, x:$DvtSparkChartAutomation$$.x, y:$DvtSparkChartAutomation$$.y, size:$dvt$$2$$} : null : null;
  };
  $DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getMarkersForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (!$DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartEventManager$$)) {
      return [];
    }
    var $DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$optimizeMarkerStroke$($dvt$$2$$), $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$ ? $DvtSparkChartAutomation$$.$getColor$() : null;
    $DvtSparkChartAutomation$$ = $DvtChartTooltipUtils$$ ? $DvtSparkChartAutomation$$.getWidth() : null;
    for (var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$optimizeMarkerFill$($dvt$$2$$), $DvtChartPieRenderUtils$$ = [], $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$), $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtChartPieLabelInfo$$;$DvtChartTypeUtils$$++) {
      var $DvtChartDataChangeFunnelSlice$$ = $DvtChartPlotAreaRenderer$$.$_getMarkerInfo$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartTypeUtils$$, $DvtSparkChartDefaults$$);
      $DvtChartDataChangeFunnelSlice$$ && ($DvtChartDataChangeFunnelSlice$$ = $DvtChartPlotAreaRenderer$$.$_createMarker$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$), null != $DvtChartDataChangeFunnelSlice$$ && $DvtChartPieRenderUtils$$.push($DvtChartDataChangeFunnelSlice$$));
    }
    return $DvtChartPieRenderUtils$$;
  };
  $DvtChartPlotAreaRenderer$$.$_createMarker$ = function $$DvtChartPlotAreaRenderer$$$$_createMarker$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$) {
    var $DvtChartPieLabelInfo$$ = $dvt$$2$$.$Agent$.$isTouchDevice$(), $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$.$seriesIndex$, $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$.$groupIndex$, $DvtChartDataChangeLineArea$$ = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$), $DvtChartRangeMarker$$ = $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, 
    $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$), $DvtChartLineArea$$ = $DvtSparkChartDefaults$$.$markerDisplayed$;
    null == $DvtChartLineArea$$ && ($DvtChartLineArea$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$));
    $DvtChartLineArea$$ ? (($DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, "source")) ? ($DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, "sourceSelected"), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, 
    "sourceHover"), $DvtChartDataChangeLineArea$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, "sourceHoverSelected"), $DvtChartTypeUtils$$ = new $dvt$$2$$.$ImageMarker$($DvtChartTypeUtils$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtSparkChartDefaults$$.size, null, $DvtChartPieRenderUtils$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelUtils$$, $DvtChartDataChangeLineArea$$)) : 
    ($DvtChartTypeUtils$$ = new $dvt$$2$$.$SimpleMarker$($DvtChartTypeUtils$$, $DvtChartRangeMarker$$, $DvtSparkChartEventManager$$.$getSkin$(), $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtSparkChartDefaults$$.size, null, null, !0), $DvtChartTypeUtils$$.$setFill$($DvtChartSeriesEffectUtils$$.$getMarkerFill$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$)), $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$, 
    $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$), $DvtChartRangeMarker$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$), $DvtChartPieRenderUtils$$ == $DvtChartTooltipUtils$$ && $DvtChartRangeMarker$$ == $DvtChartPieLabelUtils$$ || $DvtChartTypeUtils$$.$setSolidStroke$($DvtChartPieRenderUtils$$, null, $DvtChartRangeMarker$$), $DvtChartTypeUtils$$.$setDataColor$($DvtChartDataChangeLineArea$$, !0), $DvtChartTooltipUtils$$ = 
    $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtChartDataChangeLineArea$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$), $DvtChartDataChangeLineArea$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$), $DvtChartTypeUtils$$.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartPieLabelUtils$$, 1, 1), new $dvt$$2$$.$SolidStroke$($DvtChartTooltipUtils$$, 1, 3.5)), $DvtChartTypeUtils$$.$setSelectedStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartPieLabelUtils$$, 
    1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartDataChangeLineArea$$, 1, 4.5)), $DvtChartTypeUtils$$.$setSelectedHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartPieLabelUtils$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartTooltipUtils$$, 1, 4.5)), $DvtChartTypeUtils$$.$setClassName$($DvtChartStyleUtils$$.$getMarkerClassName$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$)), $DvtChartTypeUtils$$.$setStyle$($DvtChartStyleUtils$$.$getMarkerStyle$($DvtSparkChartEventManager$$, 
    $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$))), $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$) && $DvtChartTypeUtils$$.setCursor("pointer"), $DvtChartPieLabelInfo$$ && $DvtSparkChartDefaults$$.size < $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ && $DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$($DvtChartTypeUtils$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartAutomation$$)) : 
    ($DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$) ? ($DvtChartTypeUtils$$ = new $DvtChartLineMarker$$($DvtChartTypeUtils$$, $DvtChartRangeMarker$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtSparkChartAutomation$$), $DvtChartTypeUtils$$.setCursor("pointer"), $DvtChartPieLabelInfo$$ && $DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$($DvtChartTypeUtils$$, $DvtSparkChartDefaults$$.x, 
    $DvtSparkChartDefaults$$.y, $DvtSparkChartAutomation$$)) : ($DvtChartPieLabelInfo$$ && ($DvtSparkChartDefaults$$.size = $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), $DvtChartTypeUtils$$ = new $DvtChartLineMarker$$($DvtChartTypeUtils$$, $dvt$$2$$.$SimpleMarker$.$SQUARE$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtSparkChartAutomation$$)), null != $DvtChartTypeUtils$$ && ($DvtChartPieRenderUtils$$ || $DvtChartTypeUtils$$.$setInvisibleFill$(), 
    $DvtChartTypeUtils$$.$setDataColor$($DvtChartDataChangeLineArea$$)));
    null != $DvtChartTypeUtils$$ && $DvtChartObjPeer$$.$associate$($DvtChartTypeUtils$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $DvtSparkChartDefaults$$);
    return $DvtChartTypeUtils$$;
  };
  $DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$ = function $$DvtChartPlotAreaRenderer$$$$_addMarkerHitArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.Rect($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartDefaults$$ - $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $DvtSparkChartAutomation$$ - $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$);
    $DvtChartTooltipUtils$$ && $DvtSparkChartDefaults$$.$setSolidStroke$("none");
    $DvtSparkChartDefaults$$.$setInvisibleFill$();
    $DvtSparkChartEventManager$$.$addChild$($DvtSparkChartDefaults$$);
  };
  $DvtChartPlotAreaRenderer$$.$_getRangeMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getRangeMarkersForSeries$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if (!$DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return [];
    }
    for (var $DvtChartTooltipUtils$$ = $dvt$$2$$.$Agent$.$isTouchDevice$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$.$y2Axis$ : $DvtSparkChartEventManager$$.$yAxis$, $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartLineMarker$$ = 
    $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartMarkerUtils$$ = [], $DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartLineMarker$$;$DvtChartDataChangeLineArea$$++) {
      if (!$DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$) && $DvtChartStyleUtils$$.$isDataItemRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$)) {
        var $DvtChartLineArea$$ = $DvtChartPieRenderUtils$$.$getCoordAt$($DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$)), $DvtChartDataChangeRangeMarker$$ = $DvtChartPieLabelInfo$$.$getUnboundedCoordAt$($DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$)), $DvtChartOverview$$ = $DvtChartPieLabelInfo$$.$getUnboundedCoordAt$($DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, 
        $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$));
        if (null != $DvtChartLineArea$$ && null != $DvtChartDataChangeRangeMarker$$ && null != $DvtChartOverview$$) {
          var $DvtChartDataChangeMarker$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$);
          if (!$DvtChartDataChangeMarker$$) {
            var $DvtChartDataCursor$$ = $DvtChartLineMarker$$ - 1, $DvtChartPolarBar$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartPieUtils$$ = $DvtChartPolarBar$$ && 0 < $DvtChartDataCursor$$ && 0 == $DvtChartDataChangeLineArea$$ ? $DvtChartDataCursor$$ : $DvtChartDataChangeLineArea$$ - 1, $DvtChartDataChangeBar$$ = $DvtChartPolarBar$$ && 0 < $DvtChartDataCursor$$ && $DvtChartDataChangeLineArea$$ == $DvtChartDataCursor$$ ? 0 : $DvtChartDataChangeLineArea$$ + 1, $DvtChartDataCursor$$ = 
            $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieUtils$$), $DvtChartPolarBar$$ = $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieUtils$$), $DvtChartDataChangeBar$$ = $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeBar$$), $DvtChartPieUtils$$ = $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
            $DvtChartPieUtils$$);
            null == $DvtChartDataCursor$$ && null == $DvtChartPolarBar$$ && null == $DvtChartDataChangeBar$$ && null == $DvtChartPieUtils$$ && ($DvtChartDataChangeMarker$$ = !0);
          }
          if (!($DvtChartDataChangeFunnelSlice$$._duringAnimation || $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isSpark$($DvtSparkChartEventManager$$)) || $DvtChartDataChangeMarker$$ || $DvtChartDataUtils$$.$isDataSelected$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$)) {
            var $DvtChartDataChangeRangeMarker$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$($DvtChartLineArea$$, $DvtChartDataChangeRangeMarker$$), $DvtSparkChartAutomation$$), $DvtChartPieUtils$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$($DvtChartLineArea$$, $DvtChartOverview$$), $DvtSparkChartAutomation$$), $DvtChartLineArea$$ = new $dvt$$2$$.$Point$(($DvtChartDataChangeRangeMarker$$.x + 
            $DvtChartPieUtils$$.x) / 2, ($DvtChartDataChangeRangeMarker$$.y + $DvtChartPieUtils$$.y) / 2), $DvtChartOverview$$ = $DvtChartStyleUtils$$.$getMarkerSize$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$), $DvtChartDataChangeMarker$$ = new $DvtChartRangeMarker$$($DvtChartPieLabelUtils$$, $DvtChartDataChangeRangeMarker$$.x, $DvtChartDataChangeRangeMarker$$.y, $DvtChartPieUtils$$.x, $DvtChartPieUtils$$.y, $DvtChartOverview$$, !$DvtChartDataChangeMarker$$), 
            $DvtChartDataCursor$$ = $DvtChartSeriesEffectUtils$$.$getMarkerFill$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$), $DvtChartPolarBar$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$), $DvtChartDataChangeBar$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$), $DvtChartPolarBar$$ = new $dvt$$2$$.$SolidStroke$($DvtChartPolarBar$$, 
            null, $DvtChartDataChangeBar$$), $DvtChartDataChangeBar$$ = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$), $DvtChartCoord$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$), $DvtChartDataChangeAbstract$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$);
            $DvtChartDataChangeMarker$$.$setStyleProperties$($DvtChartDataCursor$$, $DvtChartPolarBar$$, $DvtChartDataChangeBar$$, $DvtChartCoord$$, $DvtChartDataChangeAbstract$$);
            $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$) && $DvtChartDataChangeMarker$$.setCursor("pointer");
            $DvtChartDataChangeRangeMarker$$ = new $dvt$$2$$.$Line$($DvtChartPieLabelUtils$$, $DvtChartDataChangeRangeMarker$$.x, $DvtChartDataChangeRangeMarker$$.y, $DvtChartPieUtils$$.x, $DvtChartPieUtils$$.y);
            $DvtChartDataChangeRangeMarker$$.$setSolidStroke$("rgba(0,0,0,0)", null, $DvtChartTooltipUtils$$ ? Math.max($DvtChartOverview$$, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$) : $DvtChartOverview$$);
            $DvtChartDataChangeMarker$$.$addChild$($DvtChartDataChangeRangeMarker$$);
            $DvtChartMarkerUtils$$.push($DvtChartDataChangeMarker$$);
            $DvtChartObjPeer$$.$associate$($DvtChartDataChangeMarker$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeLineArea$$, $DvtChartLineArea$$);
          }
        }
      }
    }
    return $DvtChartMarkerUtils$$;
  };
  $DvtChartPlotAreaRenderer$$.$_renderBars$ = function $$DvtChartPlotAreaRenderer$$$$_renderBars$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartTooltipUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), 
    $DvtChartLineMarker$$ = $DvtChartStyleUtils$$.$isStackLabelRendered$($DvtSparkChartEventManager$$), $DvtChartMarkerUtils$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$), $DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);$DvtChartDataChangeLineArea$$++) {
      for (var $DvtChartRangeMarker$$ = 0;$DvtChartRangeMarker$$ < $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);$DvtChartRangeMarker$$++) {
        if ($DvtChartDataUtils$$.$isBLACItemInViewport$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$) && "bar" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$)) {
          var $DvtChartLineArea$$ = $DvtChartDataUtils$$.$getBarInfo$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$, $DvtSparkChartAutomation$$);
          if (null != $DvtChartLineArea$$) {
            var $DvtChartDataChangeRangeMarker$$ = $DvtChartLineArea$$.$yCoord$, $DvtChartOverview$$ = $DvtChartLineArea$$.$baseCoord$, $DvtChartDataChangeMarker$$ = $DvtChartLineArea$$.$axisCoord$, $DvtChartDataCursor$$ = $DvtChartLineArea$$.$x1$, $DvtChartPieUtils$$ = $DvtChartLineArea$$.$x2$, $DvtChartDataChangeBar$$ = $DvtChartLineArea$$.$barWidth$, $DvtChartCoord$$ = !1;
            if (1 > Math.abs($DvtChartDataChangeRangeMarker$$ - $DvtChartOverview$$)) {
              if ($DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$)) {
                $DvtChartDataChangeRangeMarker$$--;
              } else {
                if (!$DvtChartMarkerUtils$$ || $DvtChartDataUtils$$.$isOutermostBar$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$)) {
                  $DvtChartCoord$$ = !0, $DvtChartDataChangeRangeMarker$$ = $DvtChartDataChangeRangeMarker$$ > $DvtChartOverview$$ || $DvtChartTooltipUtils$$ && !$DvtChartDataChangeFunnelSlice$$ && $DvtChartDataChangeRangeMarker$$ == $DvtChartOverview$$ ? $DvtChartOverview$$ + 3 : $DvtChartOverview$$ - 3;
                }
              }
            }
            $DvtChartDataChangeRangeMarker$$ = $DvtChartPieLabelUtils$$ ? new $DvtChartPolarBar$$($DvtSparkChartEventManager$$, $DvtChartDataChangeMarker$$, $DvtChartOverview$$, $DvtChartDataChangeRangeMarker$$, $DvtChartDataCursor$$, $DvtChartPieUtils$$, $DvtSparkChartAutomation$$) : new $DvtChartBar$$($DvtSparkChartEventManager$$, $DvtChartDataChangeMarker$$, $DvtChartOverview$$, $DvtChartDataChangeRangeMarker$$, $DvtChartDataCursor$$, $DvtChartPieUtils$$);
            $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangeRangeMarker$$);
            $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$) && $DvtChartDataChangeRangeMarker$$.setCursor("pointer");
            $DvtChartOverview$$ = null;
            $DvtChartCoord$$ ? $DvtChartDataChangeBar$$ = $dvt$$2$$.$SolidFill$.$invisibleFill$() : ($DvtChartDataChangeBar$$ = $DvtChartSeriesEffectUtils$$.$getBarFill$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$, $DvtChartTooltipUtils$$, $DvtChartDataChangeBar$$), $DvtChartCoord$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$), $DvtChartDataChangeMarker$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, 
            $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$), $DvtChartCoord$$ && ($DvtChartOverview$$ = new $dvt$$2$$.$SolidStroke$($DvtChartCoord$$, null, $DvtChartDataChangeMarker$$)));
            $DvtChartCoord$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$);
            $DvtChartDataChangeMarker$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$);
            $DvtChartDataCursor$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$);
            $DvtChartDataChangeRangeMarker$$.$setStyleProperties$($DvtChartDataChangeBar$$, $DvtChartOverview$$, $DvtChartCoord$$, $DvtChartDataChangeMarker$$, $DvtChartDataCursor$$);
            $DvtChartDataChangeRangeMarker$$.$setClassName$($DvtChartStyleUtils$$.$getClassName$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$));
            $DvtChartDataChangeRangeMarker$$.$setStyle$($DvtChartStyleUtils$$.$getStyle$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$));
            $DvtChartPieLabelInfo$$ && $DvtChartDataChangeRangeMarker$$.$setPixelHinting$();
            $DvtChartObjPeer$$.$associate$($DvtChartDataChangeRangeMarker$$, $DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$, $DvtChartLineArea$$.$dataPos$);
            $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$) ? ($DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeRangeMarker$$.$getBoundingBox$(), $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$, $DvtChartCoord$$, "low"), $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeRangeMarker$$.$getBoundingBox$(), $DvtChartRangeMarker$$, 
            $DvtChartDataChangeLineArea$$, $DvtChartCoord$$, "high")) : $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeRangeMarker$$.$getBoundingBox$(), $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$, $DvtChartCoord$$);
            $DvtChartLineArea$$ = [];
            $DvtChartLineArea$$.push($DvtChartDataChangeRangeMarker$$);
            $DvtChartPieRenderUtils$$ && 0 != $DvtChartRangeMarker$$ || $DvtSparkChartEventManager$$.$_currentMarkers$.push($DvtChartLineArea$$);
            $DvtChartLineMarker$$ && $DvtChartDataUtils$$.$isOutermostBar$($DvtSparkChartEventManager$$, $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$) && $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeRangeMarker$$.$getBoundingBox$(), $DvtChartRangeMarker$$, $DvtChartDataChangeLineArea$$, null, null, !0);
          }
        }
      }
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderStock$ = function $$DvtChartPlotAreaRenderer$$$$_renderStock$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartTooltipUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$yAxis$;
    if ("candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, 0)) {
      for (var $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);$DvtChartPieRenderUtils$$++) {
        if ($DvtChartDataUtils$$.$isBLACItemInViewport$($DvtSparkChartEventManager$$, 0, $DvtChartPieRenderUtils$$)) {
          var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, 0, $DvtChartPieRenderUtils$$), $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, 0, $DvtChartPieRenderUtils$$), $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$, $DvtChartMarkerUtils$$, $DvtChartDataChangeLineArea$$ = null;
          $DvtChartTypeUtils$$ && ($DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.open, $DvtChartLineMarker$$ = $DvtChartTypeUtils$$.close, $DvtChartMarkerUtils$$ = $DvtChartTypeUtils$$.low, $DvtChartDataChangeLineArea$$ = $DvtChartTypeUtils$$.high);
          var $DvtChartRangeMarker$$ = null != $DvtChartMarkerUtils$$ && null != $DvtChartDataChangeLineArea$$;
          if (null != $DvtChartDataChangeFunnelSlice$$ && null != $DvtChartLineMarker$$) {
            var $DvtChartPieLabelInfo$$ = $DvtChartTooltipUtils$$.$getUnboundedCoordAt$($DvtChartPieLabelInfo$$), $DvtChartLineArea$$ = $DvtChartStyleUtils$$.$getBarWidth$($DvtSparkChartEventManager$$, 0, $DvtChartPieRenderUtils$$), $DvtChartTypeUtils$$ = $DvtChartPieLabelUtils$$.$getBoundedCoordAt$($DvtChartDataChangeFunnelSlice$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartPieLabelUtils$$.$getBoundedCoordAt$($DvtChartLineMarker$$), $DvtChartOverview$$, $DvtChartDataChangeMarker$$ = null;
            $DvtChartRangeMarker$$ && ($DvtChartOverview$$ = $DvtChartPieLabelUtils$$.$getBoundedCoordAt$($DvtChartMarkerUtils$$), $DvtChartDataChangeMarker$$ = $DvtChartPieLabelUtils$$.$getBoundedCoordAt$($DvtChartDataChangeLineArea$$));
            $DvtChartDataChangeLineArea$$ = new $DvtChartCandlestick$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelInfo$$, $DvtChartLineArea$$, $DvtChartTypeUtils$$, $DvtChartDataChangeRangeMarker$$, $DvtChartOverview$$, $DvtChartDataChangeMarker$$);
            $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangeLineArea$$);
            $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, 0, $DvtChartPieRenderUtils$$) && $DvtChartDataChangeLineArea$$.setCursor("pointer");
            var $DvtChartRangeMarker$$ = $DvtChartSeriesEffectUtils$$.$getBarFill$($DvtSparkChartEventManager$$, 0, $DvtChartPieRenderUtils$$, !1, $DvtChartLineArea$$), $DvtChartLineArea$$ = null, $DvtChartDataChangeMarker$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, 0, $DvtChartPieRenderUtils$$), $DvtChartDataCursor$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, 0, $DvtChartPieRenderUtils$$);
            $DvtChartDataChangeMarker$$ ? $DvtChartLineArea$$ = new $dvt$$2$$.$SolidStroke$($DvtChartDataChangeMarker$$, null, $DvtChartDataCursor$$) : $DvtChartRangeMarker$$ instanceof $dvt$$2$$.$PatternFill$ && ($DvtChartLineArea$$ = new $dvt$$2$$.$SolidStroke$($DvtChartRangeMarker$$.$getColor$(), null, $DvtChartDataCursor$$));
            var $DvtChartDataChangeMarker$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, 0, $DvtChartPieRenderUtils$$), $DvtChartDataCursor$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$), $DvtChartPolarBar$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$), $DvtChartPieUtils$$ = $DvtSparkChartAutomation$$.styleDefaults.stockRangeColor;
            $DvtChartDataChangeLineArea$$.$setChangeStyle$($DvtChartRangeMarker$$, $DvtChartLineArea$$, $DvtChartDataChangeMarker$$, $DvtChartDataCursor$$, $DvtChartPolarBar$$);
            $DvtChartDataChangeLineArea$$.$setRangeStyle$(new $dvt$$2$$.$SolidFill$($DvtChartPieUtils$$), $DvtChartLineArea$$, $DvtChartPieUtils$$, $DvtChartPolarBar$$);
            $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Point$($DvtChartPieLabelInfo$$, ($DvtChartTypeUtils$$ + $DvtChartDataChangeRangeMarker$$) / 2);
            $DvtChartObjPeer$$.$associate$($DvtChartDataChangeLineArea$$, $DvtSparkChartEventManager$$, 0, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$);
            $DvtChartPieLabelInfo$$ = [];
            $DvtChartPieLabelInfo$$.push($DvtChartDataChangeLineArea$$.$_changeShape$);
            $DvtSparkChartEventManager$$.$_currentMarkers$.push($DvtChartPieLabelInfo$$);
          }
        }
      }
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderLines$ = function $$DvtChartPlotAreaRenderer$$$$_renderLines$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = [], $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);
    for ($DvtChartSeriesEffectUtils$$ = 0;$DvtChartSeriesEffectUtils$$ < $DvtChartPieLabelUtils$$;$DvtChartSeriesEffectUtils$$++) {
      $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartSeriesEffectUtils$$) && "line" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartSeriesEffectUtils$$) && $DvtChartTooltipUtils$$.push($DvtChartSeriesEffectUtils$$);
    }
    for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartTooltipUtils$$.length;$DvtChartPieLabelUtils$$++) {
      $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$[$DvtChartPieLabelUtils$$], "none" != $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtChartSeriesEffectUtils$$) && ($DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) || $DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$($dvt$$2$$, $DvtChartSeriesEffectUtils$$), $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$));
    }
    for ($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartTooltipUtils$$.length;$DvtChartPieLabelUtils$$++) {
      $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$[$DvtChartPieLabelUtils$$], $DvtSparkChartAutomation$$);
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderAreas$ = function $$DvtChartPlotAreaRenderer$$$$_renderAreas$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for (var $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$ ? "lineWithArea" : "area", $DvtChartPieLabelUtils$$ = [], $DvtChartPieRenderUtils$$ = [], $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartTooltipUtils$$;$DvtChartPieLabelInfo$$++) {
      $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartPieLabelInfo$$) && $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartPieLabelInfo$$) == $DvtChartSeriesEffectUtils$$ && ($DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartPieLabelInfo$$) ? $DvtChartPieRenderUtils$$.push($DvtChartPieLabelInfo$$) : $DvtChartPieLabelUtils$$.push($DvtChartPieLabelInfo$$));
    }
    0 < $DvtChartPieLabelUtils$$.length && $DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $dvt$$2$$.$yAxis$.$getBaselineCoord$(), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    0 < $DvtChartPieRenderUtils$$.length && $DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $dvt$$2$$.$y2Axis$.$getBaselineCoord$(), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
  };
  $DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$ = function $$DvtChartPlotAreaRenderer$$$$_renderAreasForAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$) {
    for (var $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartLineMarker$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$), $DvtChartMarkerUtils$$ = {}, $DvtChartDataChangeLineArea$$ = {}, $DvtChartRangeMarker$$ = {}, $DvtChartDataChangeRangeMarker$$ = {}, $DvtChartOverview$$ = 
    [], $DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartDataCursor$$ = 0;$DvtChartDataCursor$$ < $DvtChartDataChangeMarker$$;$DvtChartDataCursor$$++) {
      $DvtChartOverview$$.push(new $DvtChartCoord$$(null, $DvtChartTooltipUtils$$, $DvtChartTooltipUtils$$, $DvtChartDataCursor$$, $DvtChartDataUtils$$.$getGroup$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$), !0));
    }
    for ($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtSparkChartAutomation$$.length;$DvtChartDataChangeMarker$$++) {
      var $DvtChartDataCursor$$ = $DvtSparkChartAutomation$$[$DvtChartDataChangeMarker$$], $DvtChartPolarBar$$ = $DvtChartDataUtils$$.$getStackCategory$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$), $DvtChartPieUtils$$ = $DvtChartDataUtils$$.$isSeriesNegative$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$), $DvtChartDataChangeBar$$ = $DvtChartMarkerUtils$$[$DvtChartPolarBar$$], $DvtChartDataChangeAbstract$$ = $DvtChartDataChangeLineArea$$[$DvtChartPolarBar$$], $DvtChartCandlestick$$ = 
      $DvtChartRangeMarker$$[$DvtChartPolarBar$$], $DvtChartRenderer$$ = $DvtChartDataChangeRangeMarker$$[$DvtChartPolarBar$$];
      if ("none" == $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$)) {
        $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataCursor$$, $DvtChartPieLabelUtils$$);
      } else {
        var $DvtChartPie$$ = $DvtChartSeriesEffectUtils$$.$getAreaFill$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$), $DvtChartDataChange$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$), $DvtChartBar$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$), $DvtChartAnimOnDC$$ = $DvtChartStyleUtils$$.$getAreaClassName$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$), $DvtChartAxisRenderer$$ = $DvtChartStyleUtils$$.$getAreaStyle$($DvtSparkChartEventManager$$, 
        $DvtChartDataCursor$$), $DvtChartAnimOnDisplay$$ = $DvtChartDataChange$$ ? new $dvt$$2$$.$SolidStroke$($DvtChartDataChange$$, null, $DvtChartBar$$) : null, $DvtChartBar$$ = $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$);
        $DvtChartDataChangeFunnelSlice$$ || $DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$);
        var $DvtChartAxis$$;
        $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$) ? ($DvtChartAxis$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, "high"), $DvtChartDataChangeBar$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, "low"), $DvtChartDataChangeAbstract$$ = $DvtChartBar$$) : $DvtChartPieUtils$$ ? ($DvtChartAxis$$ = $DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$($DvtSparkChartEventManager$$, 
        $DvtChartDataCursor$$, $DvtChartCandlestick$$ ? $DvtChartCandlestick$$ : $DvtChartOverview$$), $DvtChartDataChangeBar$$ = $DvtChartCandlestick$$ ? $DvtChartCandlestick$$ : [], $DvtChartDataChangeAbstract$$ = $DvtChartRenderer$$) : ($DvtChartAxis$$ = $DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$, $DvtChartDataChangeBar$$ ? $DvtChartDataChangeBar$$ : $DvtChartOverview$$), $DvtChartDataChangeBar$$ = $DvtChartDataChangeBar$$ ? $DvtChartDataChangeBar$$ : 
        []);
        $DvtChartPie$$ = new $DvtChartLineArea$$($DvtSparkChartEventManager$$, !0, $DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$, $DvtChartAxisRenderer$$, $DvtChartAnimOnDC$$, $DvtChartPie$$, $DvtChartAnimOnDisplay$$, $DvtChartBar$$, $DvtChartAxis$$, $DvtChartDataChangeAbstract$$, $DvtChartDataChangeBar$$);
        $DvtChartLineMarker$$.$addChild$($DvtChartPie$$);
        $DvtSparkChartEventManager$$.$_currentAreas$.push($DvtChartPie$$);
        $DvtChartObjPeer$$.$associate$($DvtChartPie$$, $DvtSparkChartEventManager$$, $DvtChartDataCursor$$);
        $DvtChartPieUtils$$ ? ($DvtChartRangeMarker$$[$DvtChartPolarBar$$] = $DvtChartAxis$$, $DvtChartDataChangeRangeMarker$$[$DvtChartPolarBar$$] = $DvtChartBar$$) : ($DvtChartMarkerUtils$$[$DvtChartPolarBar$$] = $DvtChartAxis$$, $DvtChartDataChangeLineArea$$[$DvtChartPolarBar$$] = $DvtChartBar$$);
        $DvtChartPieLabelInfo$$ || (($DvtChartPieRenderUtils$$ || 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$) && !$DvtChartDataChange$$) && $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($DvtSparkChartEventManager$$, $DvtChartLineMarker$$, $DvtChartDataCursor$$, $DvtChartPieLabelUtils$$, !$DvtChartPieRenderUtils$$), $DvtChartPieRenderUtils$$ || $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataCursor$$, 
        $DvtChartPieLabelUtils$$), $DvtChartDataChangeMarker$$ + 1 < $DvtSparkChartAutomation$$.length && ($DvtChartLineMarker$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$)));
      }
    }
    for ($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtSparkChartAutomation$$.length;$DvtChartDataChangeMarker$$++) {
      $DvtChartDataCursor$$ = $DvtSparkChartAutomation$$[$DvtChartDataChangeMarker$$], "none" != $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$) && ($DvtChartTooltipUtils$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$) || $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartDataCursor$$ + 1), $DvtChartPieLabelInfo$$ && ($DvtChartPieRenderUtils$$ || 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$) && 
      !$DvtChartTooltipUtils$$) && $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($DvtSparkChartEventManager$$, $DvtChartLineMarker$$, $DvtChartDataCursor$$, $DvtChartPieLabelUtils$$, !$DvtChartPieRenderUtils$$), ($DvtChartPieLabelInfo$$ || $DvtChartPieRenderUtils$$) && $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataCursor$$, $DvtChartPieLabelUtils$$));
    }
  };
  $DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getAreaCoordsForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($dvt$$2$$, $DvtSparkChartEventManager$$);
    for (var $DvtSparkChartAutomation$$ = [], $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartDefaults$$.length;$DvtChartTooltipUtils$$++) {
      $DvtSparkChartAutomation$$.push($DvtSparkChartDefaults$$[$DvtChartTooltipUtils$$].clone());
    }
    $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.length - 1;
    $dvt$$2$$ = $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$);
    for ($DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartTooltipUtils$$++) {
      if (null != $DvtSparkChartEventManager$$[$DvtChartTooltipUtils$$].x) {
        var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$[$DvtSparkChartEventManager$$[$DvtChartTooltipUtils$$].$groupIndex$], $DvtChartPieLabelUtils$$ = $dvt$$2$$ && 0 == $DvtChartTooltipUtils$$ ? $DvtSparkChartDefaults$$ : $DvtChartTooltipUtils$$ - 1, $DvtChartPieRenderUtils$$ = $dvt$$2$$ && $DvtChartTooltipUtils$$ == $DvtSparkChartDefaults$$ ? 0 : $DvtChartTooltipUtils$$ + 1;
        0 <= $DvtChartPieLabelUtils$$ && null != $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].x && ($DvtChartSeriesEffectUtils$$.$y1$ = $DvtSparkChartEventManager$$[$DvtChartTooltipUtils$$].$y1$);
        $DvtChartPieRenderUtils$$ <= $DvtSparkChartDefaults$$ && null != $DvtSparkChartEventManager$$[$DvtChartPieRenderUtils$$].x && ($DvtChartSeriesEffectUtils$$.$y2$ = $DvtSparkChartEventManager$$[$DvtChartTooltipUtils$$].$y2$);
        $DvtChartSeriesEffectUtils$$.x = $DvtSparkChartEventManager$$[$DvtChartTooltipUtils$$].x;
        $DvtChartSeriesEffectUtils$$.$filtered$ = $DvtChartSeriesEffectUtils$$.$y1$ == $DvtChartSeriesEffectUtils$$.$y2$ ? $DvtSparkChartEventManager$$[$DvtChartTooltipUtils$$].$filtered$ : !1;
      }
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_renderLinesForSeries$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    function $DvtChartPieLabelUtils$$($dvt$$2$$) {
      $dvt$$2$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $dvt$$2$$);
      $dvt$$2$$ = new $DvtChartLineArea$$($DvtSparkChartEventManager$$, !1, $DvtChartTooltipUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeLineArea$$, $DvtChartMarkerUtils$$, null, $DvtChartPieRenderUtils$$, $DvtChartLineMarker$$, $dvt$$2$$);
      $DvtSparkChartDefaults$$.$addChild$($dvt$$2$$);
      $DvtChartObjPeer$$.$associate$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
    }
    var $DvtChartPieRenderUtils$$;
    if ($DvtChartSeriesEffectUtils$$) {
      $DvtChartSeriesEffectUtils$$ = 2.5 * $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartStyleUtils$$.$getBackgroundColor$($DvtSparkChartEventManager$$, !0), 1, $DvtChartSeriesEffectUtils$$);
    } else {
      $DvtChartSeriesEffectUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
      var $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getLineWidth$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartTypeUtils$$ = $dvt$$2$$.$Stroke$.$convertTypeString$($DvtChartStyleUtils$$.$getLineStyle$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$));
      $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartSeriesEffectUtils$$, 1, $DvtChartPieLabelInfo$$);
      $DvtChartPieRenderUtils$$.$setStyle$($DvtChartTypeUtils$$);
    }
    var $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? $DvtSparkChartEventManager$$.$y2Axis$.$getBaselineCoord$() : $DvtSparkChartEventManager$$.$yAxis$.$getBaselineCoord$(), $DvtChartLineMarker$$ = $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartMarkerUtils$$ = $DvtChartStyleUtils$$.$getClassName$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), 
    $DvtChartDataChangeLineArea$$ = $DvtChartStyleUtils$$.$getStyle$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
    $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? ($DvtChartPieLabelUtils$$("high"), $DvtChartPieLabelUtils$$("low")) : $DvtChartPieLabelUtils$$("value");
  };
  $DvtChartPlotAreaRenderer$$.$_filterScatterBubble$ = function $$DvtChartPlotAreaRenderer$$$$_filterScatterBubble$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);
    if ($DvtSparkChartDefaults$$ * $DvtSparkChartAutomation$$ < $DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$) {
      return null;
    }
    for (var $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$ = [], $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartDefaults$$;$DvtChartPieLabelUtils$$++) {
      if ($DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$)) {
        for (var $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtSparkChartAutomation$$;$DvtChartPieRenderUtils$$++) {
          $DvtChartTooltipUtils$$ = $DvtChartPlotAreaRenderer$$.$_getScatterBubbleMarkerInfo$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$), null != $DvtChartTooltipUtils$$ && $DvtChartSeriesEffectUtils$$.push($DvtChartTooltipUtils$$);
        }
      }
    }
    if ($DvtChartSeriesEffectUtils$$.length < $DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$) {
      return null;
    }
    $DvtChartMarkerUtils$$.$sortMarkerInfos$($DvtChartSeriesEffectUtils$$);
    for (var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$PixelMap$(25, new $dvt$$2$$.$PixelMap$(5, new $dvt$$2$$.$PixelMap$)), $DvtSparkChartAutomation$$ = [], $DvtChartPieLabelInfo$$ = $DvtChartSeriesEffectUtils$$.length - 1;0 <= $DvtChartPieLabelInfo$$;$DvtChartPieLabelInfo$$--) {
      if ($DvtChartTooltipUtils$$ = $DvtChartSeriesEffectUtils$$[$DvtChartPieLabelInfo$$], !$DvtChartMarkerUtils$$.$checkPixelMap$($DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$.x, $DvtChartTooltipUtils$$.y, $DvtChartTooltipUtils$$.size)) {
        var $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$.$seriesIndex$, $DvtChartTooltipUtils$$.$groupIndex$), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$) ? $dvt$$2$$.$ColorUtils$.$getAlpha$($DvtChartTypeUtils$$) : 0;
        0 < $DvtChartTypeUtils$$ && ($DvtChartMarkerUtils$$.$updatePixelMap$($DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$.x, $DvtChartTooltipUtils$$.y, $DvtChartTooltipUtils$$.size, $DvtChartTypeUtils$$), $DvtSparkChartAutomation$$.push($DvtChartTooltipUtils$$));
      }
    }
    $DvtSparkChartEventManager$$.$_cache$.$putToCache$("dataFiltered", !0);
    $DvtSparkChartAutomation$$.reverse();
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_filterPointsForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_plotAreaSpace$.$w$, $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).items, $DvtChartTooltipUtils$$ = $dvt$$2$$.$xAxis$.$getInfo$(), $DvtSparkChartDefaults$$ = Math.round($DvtSparkChartAutomation$$.length / (($DvtChartTooltipUtils$$.$DataMax$ - $DvtChartTooltipUtils$$.$DataMin$) / ($DvtChartTooltipUtils$$.$MaxValue$ - $DvtChartTooltipUtils$$.$MinValue$)) * 2 / $DvtSparkChartDefaults$$);
    if (2 >= $DvtSparkChartDefaults$$) {
      for ($DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartTooltipUtils$$++) {
        ($DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$[$DvtChartTooltipUtils$$]) && ($DvtChartTypeUtils$$._filtered = !1);
      }
    } else {
      for (var $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$, $DvtChartTypeUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$ = !1, $DvtChartTooltipUtils$$ = 0;$DvtChartTooltipUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartTooltipUtils$$ += $DvtSparkChartDefaults$$) {
        $DvtChartSeriesEffectUtils$$ = -1;
        $DvtChartPieLabelUtils$$ = -Infinity;
        $DvtChartPieRenderUtils$$ = -1;
        $DvtChartPieLabelInfo$$ = Infinity;
        for (var $DvtChartMarkerUtils$$ = $DvtChartTooltipUtils$$;$DvtChartMarkerUtils$$ < Math.min($DvtChartTooltipUtils$$ + $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.length);$DvtChartMarkerUtils$$++) {
          $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$), $DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$[$DvtChartMarkerUtils$$], null != $DvtChartDataChangeFunnelSlice$$ && null != $DvtChartTypeUtils$$ && ($DvtChartDataChangeFunnelSlice$$ > $DvtChartPieLabelUtils$$ && ($DvtChartSeriesEffectUtils$$ = $DvtChartMarkerUtils$$, $DvtChartPieLabelUtils$$ = $DvtChartDataChangeFunnelSlice$$), $DvtChartDataChangeFunnelSlice$$ < 
          $DvtChartPieLabelInfo$$ && ($DvtChartPieRenderUtils$$ = $DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$ = $DvtChartDataChangeFunnelSlice$$), $DvtChartLineMarker$$ = $DvtChartTypeUtils$$._filtered = !0);
        }
        for ($DvtChartMarkerUtils$$ = $DvtChartTooltipUtils$$;$DvtChartMarkerUtils$$ < Math.min($DvtChartTooltipUtils$$ + $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.length);$DvtChartMarkerUtils$$++) {
          $DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$[$DvtChartMarkerUtils$$], null == $DvtChartTypeUtils$$ || $DvtChartMarkerUtils$$ != $DvtChartSeriesEffectUtils$$ && $DvtChartMarkerUtils$$ != $DvtChartPieRenderUtils$$ || ($DvtChartTypeUtils$$._filtered = !1);
        }
      }
      $dvt$$2$$.$_cache$.$putToCache$("dataFiltered", $DvtChartLineMarker$$);
    }
  };
  $DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$ = function $$DvtChartPlotAreaRenderer$$$$_isDataItemFiltered$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return ($dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $dvt$$2$$._filtered ? !0 : !1;
  };
  $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getCoordsForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$xAxis$, $DvtChartTooltipUtils$$ = $dvt$$2$$.$yAxis$;
    $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$) && ($DvtChartTooltipUtils$$ = $dvt$$2$$.$y2Axis$);
    for (var $DvtChartSeriesEffectUtils$$ = [], $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);$DvtChartPieLabelUtils$$++) {
      var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtChartPieLabelUtils$$), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$), $DvtChartLineMarker$$ = null;
      "low" == $DvtSparkChartDefaults$$ ? $DvtChartLineMarker$$ = $DvtChartDataUtils$$.$getLowValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$) : "high" == $DvtSparkChartDefaults$$ ? $DvtChartLineMarker$$ = $DvtChartDataUtils$$.$getHighValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$) : null != $DvtChartPieLabelInfo$$ && ($DvtChartLineMarker$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$));
      null == $DvtChartLineMarker$$ || isNaN($DvtChartLineMarker$$) || !$DvtChartDataUtils$$.$isBLACItemInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$) ? $DvtChartSeriesEffectUtils$$.push(new $DvtChartCoord$$(null, null, null, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, !1)) : ($DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) && ($DvtChartLineMarker$$ = Math.max($DvtChartLineMarker$$, $DvtChartTooltipUtils$$.$getInfo$().$MinValue$)), $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$getUnboundedCoordAt$($DvtChartDataChangeFunnelSlice$$), 
      $DvtChartLineMarker$$ = $DvtChartTooltipUtils$$.$getUnboundedCoordAt$($DvtChartLineMarker$$), null == $DvtChartPieLabelInfo$$ || null == $DvtChartLineMarker$$ ? $DvtChartSeriesEffectUtils$$.push(new $DvtChartCoord$$(null, null, null, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, !1)) : ($DvtChartPieRenderUtils$$ = new $DvtChartCoord$$($DvtChartPieLabelInfo$$, $DvtChartLineMarker$$, $DvtChartLineMarker$$, $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$, $DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($dvt$$2$$, 
      $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$)), $DvtChartSeriesEffectUtils$$.push($DvtChartPieRenderUtils$$)));
    }
    return $DvtChartSeriesEffectUtils$$;
  };
  $DvtChartPlotAreaRenderer$$.$createClippedGroup$ = function $$DvtChartPlotAreaRenderer$$$$createClippedGroup$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartDefaults$$.$getCtx$());
    $DvtSparkChartDefaults$$.$addChild$($DvtChartTooltipUtils$$);
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.$ClipPath$($DvtSparkChartEventManager$$.getId());
    var $DvtChartSeriesEffectUtils$$ = $DvtChartPlotAreaRenderer$$.$_extendClipGroup$($DvtSparkChartEventManager$$);
    $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? ($DvtChartSeriesEffectUtils$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2, $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2, $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), 
    $DvtSparkChartEventManager$$.$getRadius$()), $DvtSparkChartDefaults$$.$addPolygon$($DvtSparkChartEventManager$$)) : $DvtSparkChartDefaults$$.$addCircle$($DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$getRadius$())) : $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? $DvtSparkChartDefaults$$.$addRect$($DvtSparkChartAutomation$$.x - $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$ + 2 * $DvtChartSeriesEffectUtils$$, 
    $DvtSparkChartAutomation$$.$h$) : $DvtSparkChartDefaults$$.$addRect$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y - $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$ + 2 * $DvtChartSeriesEffectUtils$$);
    $DvtChartTooltipUtils$$.$setClipPath$($DvtSparkChartDefaults$$);
    return $DvtChartTooltipUtils$$;
  };
  $DvtChartPlotAreaRenderer$$.$polarToCartesian$ = function $$DvtChartPlotAreaRenderer$$$$polarToCartesian$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2 + $DvtSparkChartEventManager$$ * Math.sin($DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2 - $DvtSparkChartEventManager$$ * Math.cos($DvtSparkChartDefaults$$));
  };
  $DvtChartPlotAreaRenderer$$.$convertAxisCoord$ = function $$DvtChartPlotAreaRenderer$$$$convertAxisCoord$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.x, $DvtSparkChartAutomation$$), new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y)) : $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.x) : new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x, 
    $DvtSparkChartDefaults$$.y);
  };
  $DvtChartPlotAreaRenderer$$.$_extendClipGroup$ = function $$DvtChartPlotAreaRenderer$$$$_extendClipGroup$$($dvt$$2$$) {
    if ($DvtChartTypeUtils$$.$hasLineSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasLineWithAreaSeries$($dvt$$2$$)) {
      var $DvtSparkChartEventManager$$ = $DvtChartStyleUtils$$.$getLineWidth$($dvt$$2$$), $DvtSparkChartDefaults$$ = function $$DvtSparkChartDefaults$$$($dvt$$2$$) {
        var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getInfo$();
        $dvt$$2$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$GlobalMax$);
        var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$DataMax$), $DvtChartTooltipUtils$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$GlobalMin$), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$DataMin$);
        return null != $dvt$$2$$ && null != $DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$ - $dvt$$2$$ <= $DvtSparkChartEventManager$$ / 2 || null != $DvtChartTooltipUtils$$ && null != $DvtSparkChartDefaults$$ && $DvtChartTooltipUtils$$ - $DvtSparkChartDefaults$$ <= $DvtSparkChartEventManager$$ / 2 ? !0 : !1;
      };
      if ($dvt$$2$$.$yAxis$ && $DvtSparkChartDefaults$$($dvt$$2$$.$yAxis$) || $dvt$$2$$.$y2Axis$ && $DvtSparkChartDefaults$$($dvt$$2$$.$y2Axis$)) {
        return Math.ceil($DvtSparkChartEventManager$$ / 2);
      }
    }
    return 0;
  };
  var $DvtChartFunnelRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartFunnelRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ = 1 / 36;
  $DvtChartFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ = 1 / 70;
  $DvtChartFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ = .25;
  $DvtChartFunnelRenderer$$.$_GROUP_INDEX$ = 0;
  $DvtChartFunnelRenderer$$.$render$ = function $$DvtChartFunnelRenderer$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$());
    $DvtChartTooltipUtils$$.$setTranslate$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartTooltipUtils$$);
    $DvtSparkChartEventManager$$.$setPlotArea$($DvtChartTooltipUtils$$);
    var $DvtChartSeriesEffectUtils$$;
    if ("horizontal" == $DvtSparkChartEventManager$$.$getOptions$().orientation) {
      $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$);
    } else {
      var $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Matrix$;
      $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? -1 : 1;
      $DvtChartPieLabelUtils$$.translate(-$DvtSparkChartAutomation$$.$h$ / 2, -$DvtSparkChartAutomation$$.$w$ / 2);
      $DvtChartPieLabelUtils$$.rotate($DvtChartSeriesEffectUtils$$ * Math.PI / 2);
      $DvtChartPieLabelUtils$$.translate($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2, $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2);
      $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartAutomation$$.$h$, $DvtSparkChartAutomation$$.$w$);
      $DvtChartTooltipUtils$$.$setMatrix$($DvtChartPieLabelUtils$$);
    }
    $DvtChartFunnelRenderer$$.$_renderFunnelSlices$($DvtSparkChartEventManager$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) || $DvtChartRenderer$$.$renderEmptyText$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getInitialSelection$($DvtSparkChartEventManager$$);
    $DvtChartEventUtils$$.$setInitialSelection$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($DvtSparkChartEventManager$$));
  };
  $DvtChartFunnelRenderer$$.$_renderFunnelSlices$ = function $$DvtChartFunnelRenderer$$$$_renderFunnelSlices$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for (var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$(), $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getDataItemGaps$($dvt$$2$$) * Math.min($DvtChartFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ * $DvtSparkChartDefaults$$.$w$ / ($DvtChartTooltipUtils$$ - 1), ("on" == $DvtSparkChartAutomation$$.styleDefaults.threeDEffect ? $DvtChartFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ : $DvtChartFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$) * 
    $DvtSparkChartDefaults$$.$w$), $DvtChartSeriesEffectUtils$$ = 0, $DvtChartPieLabelUtils$$ = 0, $DvtChartPieRenderUtils$$ = 0, $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartTooltipUtils$$;$DvtChartPieLabelInfo$$++) {
      if ($DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartPieLabelInfo$$)) {
        var $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getTargetValue$($dvt$$2$$, $DvtChartPieLabelInfo$$);
        null == $DvtChartTypeUtils$$ && ($DvtChartTypeUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartPieLabelInfo$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$));
        0 >= $DvtChartTypeUtils$$ || ($DvtChartSeriesEffectUtils$$ += $DvtChartTypeUtils$$);
      }
    }
    if (0 == $DvtChartSeriesEffectUtils$$) {
      return !1;
    }
    for ($DvtChartPieLabelInfo$$ = $DvtChartTooltipUtils$$ - 1;0 <= $DvtChartPieLabelInfo$$;$DvtChartPieLabelInfo$$--) {
      $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartPieLabelInfo$$) && ($DvtChartTypeUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartPieLabelInfo$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$), $DvtChartTooltipUtils$$ = $DvtChartDataUtils$$.$getTargetValue$($dvt$$2$$, $DvtChartPieLabelInfo$$), 0 >= $DvtChartTypeUtils$$ && null == $DvtChartTooltipUtils$$ || null != $DvtChartTooltipUtils$$ && 0 >= $DvtChartTooltipUtils$$ || (null != $DvtChartTooltipUtils$$ ? ($DvtChartPieRenderUtils$$ += 
      $DvtChartTooltipUtils$$ / $DvtChartSeriesEffectUtils$$, $DvtChartTooltipUtils$$ = new $DvtChartFunnelSlice$$($dvt$$2$$, $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$, 1 - $DvtChartPieRenderUtils$$, $DvtChartTooltipUtils$$ / $DvtChartSeriesEffectUtils$$, $DvtChartTypeUtils$$ / $DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$)) : ($DvtChartPieRenderUtils$$ += $DvtChartTypeUtils$$ / $DvtChartSeriesEffectUtils$$, $DvtChartTooltipUtils$$ = 
      new $DvtChartFunnelSlice$$($dvt$$2$$, $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$, 1 - $DvtChartPieRenderUtils$$, $DvtChartTypeUtils$$ / $DvtChartSeriesEffectUtils$$, null, $DvtSparkChartAutomation$$)), $DvtChartPieLabelUtils$$++, $DvtSparkChartEventManager$$.$addChild$($DvtChartTooltipUtils$$), $DvtChartObjPeer$$.$associate$($DvtChartTooltipUtils$$, $dvt$$2$$, $DvtChartPieLabelInfo$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$)))
      ;
    }
    return !0;
  };
  var $DvtChartRefObjRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRefObjRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartRefObjRenderer$$.$renderBackgroundObjects$ = function $$DvtChartRefObjRenderer$$$$renderBackgroundObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartRefObjRenderer$$.$_renderObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "back");
  };
  $DvtChartRefObjRenderer$$.$renderForegroundObjects$ = function $$DvtChartRefObjRenderer$$$$renderForegroundObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartRefObjRenderer$$.$_renderObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "front");
  };
  $DvtChartRefObjRenderer$$.$_renderObjects$ = function $$DvtChartRefObjRenderer$$$$_renderObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$xAxis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "x"));
    $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$yAxis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y"));
    $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$y2Axis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y2"));
  };
  $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$ = function $$DvtChartRefObjRenderer$$$$_renderObjectsForAxis$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    if ($DvtChartSeriesEffectUtils$$ && $DvtChartTooltipUtils$$) {
      for (var $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartSeriesEffectUtils$$.length;$DvtChartPieLabelUtils$$++) {
        var $DvtChartPieRenderUtils$$ = $DvtChartSeriesEffectUtils$$[$DvtChartPieLabelUtils$$];
        if ($DvtChartRefObjUtils$$.$isObjectRendered$($dvt$$2$$, $DvtChartPieRenderUtils$$) && $DvtChartPieRenderUtils$$ && $DvtChartRefObjUtils$$.$getLocation$($DvtChartPieRenderUtils$$) == $DvtSparkChartAutomation$$) {
          var $DvtChartPieLabelInfo$$, $DvtChartTypeUtils$$ = $DvtChartRefObjUtils$$.$getType$($DvtChartPieRenderUtils$$);
          "area" == $DvtChartTypeUtils$$ ? $DvtChartPieLabelInfo$$ = $DvtChartRefObjRenderer$$.$_createReferenceArea$($DvtChartPieRenderUtils$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$) : "line" == $DvtChartTypeUtils$$ && ($DvtChartPieLabelInfo$$ = $DvtChartRefObjRenderer$$.$_createReferenceLine$($DvtChartPieRenderUtils$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$));
          null != $DvtChartPieLabelInfo$$ && ($DvtChartPieRenderUtils$$ = new $DvtChartRefObjPeer$$($dvt$$2$$, [$DvtChartPieLabelInfo$$], $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTooltipUtils$$ == $dvt$$2$$.$xAxis$ ? "xAxis" : $DvtChartTooltipUtils$$ == $dvt$$2$$.$yAxis$ ? "yAxis" : "y2Axis"), $dvt$$2$$.$registerObject$($DvtChartPieRenderUtils$$), $dvt$$2$$.$getEventManager$().$associate$($DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$), $DvtSparkChartEventManager$$.$addChild$($DvtChartPieLabelInfo$$));
        }
      }
    }
  };
  $DvtChartRefObjRenderer$$.$_createReferenceArea$ = function $$DvtChartRefObjRenderer$$$$_createReferenceArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$.$getCtx$(), $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$getPosition$(), $DvtChartPieRenderUtils$$ = "top" == $DvtChartPieLabelUtils$$ || "bottom" == $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$ = "radial" == $DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$ = $DvtChartRefObjUtils$$.$getColor$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartRefObjUtils$$.$getLineType$($DvtSparkChartEventManager$$), 
    $DvtChartLineMarker$$ = $DvtSparkChartEventManager$$.style, $DvtChartMarkerUtils$$ = $DvtSparkChartEventManager$$.className;
    if (null == $DvtSparkChartEventManager$$.items || $DvtChartTooltipUtils$$ != $DvtSparkChartDefaults$$.$yAxis$ && $DvtChartTooltipUtils$$ != $DvtSparkChartDefaults$$.$y2Axis$) {
      $DvtChartDataChangeFunnelSlice$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtSparkChartEventManager$$);
      $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtSparkChartEventManager$$);
      if (null == $DvtChartDataChangeFunnelSlice$$ || -Infinity == $DvtChartDataChangeFunnelSlice$$) {
        $DvtChartDataChangeFunnelSlice$$ = $DvtChartTooltipUtils$$.$getInfo$().$GlobalMin$;
      }
      if (null == $DvtSparkChartEventManager$$ || Infinity == $DvtSparkChartEventManager$$) {
        $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$getInfo$().$GlobalMax$;
      }
      $DvtChartDataChangeFunnelSlice$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$, $DvtChartDataChangeFunnelSlice$$);
      $DvtChartTooltipUtils$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$);
      $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) ? ($DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2, $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2, $DvtChartPieLabelInfo$$ ? $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartDefaults$$) ? ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartPieRenderUtils$$, 
      $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, 1), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartDataChangeFunnelSlice$$, 0), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.$polyline$($DvtSparkChartDefaults$$) + $dvt$$2$$.$PathUtils$.$polyline$($DvtSparkChartAutomation$$) + $dvt$$2$$.$PathUtils$.closePath()) : $DvtSparkChartAutomation$$ = 
      $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ - $DvtChartTooltipUtils$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartTooltipUtils$$, $DvtChartTooltipUtils$$, Math.PI, 1, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ + $DvtChartTooltipUtils$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartTooltipUtils$$, $DvtChartTooltipUtils$$, Math.PI, 1, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ - $DvtChartTooltipUtils$$) + $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieRenderUtils$$, 
      $DvtSparkChartEventManager$$ - $DvtChartDataChangeFunnelSlice$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeFunnelSlice$$, Math.PI, 0, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ + $DvtChartDataChangeFunnelSlice$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeFunnelSlice$$, Math.PI, 0, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ - $DvtChartDataChangeFunnelSlice$$) + $dvt$$2$$.$PathUtils$.closePath() : 
      ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getRadius$(), $DvtChartPieLabelInfo$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$) + 
      $dvt$$2$$.$PathUtils$.lineTo($DvtChartPieLabelInfo$$.x, $DvtChartPieLabelInfo$$.y) + $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$ - $DvtChartDataChangeFunnelSlice$$, $dvt$$2$$.$Agent$.$isRightToLeft$($DvtChartSeriesEffectUtils$$) ? 0 : 1, $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y) + $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y) + $dvt$$2$$.$PathUtils$.closePath()), $DvtSparkChartAutomation$$ = 
      new $dvt$$2$$.$Path$($DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$)) : $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Polygon$($DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$ ? [$DvtChartDataChangeFunnelSlice$$, 0, $DvtChartTooltipUtils$$, 0, $DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$.$h$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$.$h$] : [0, $DvtChartDataChangeFunnelSlice$$, 0, $DvtChartTooltipUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtChartTooltipUtils$$, 
      $DvtSparkChartAutomation$$.$w$, $DvtChartDataChangeFunnelSlice$$]);
      $DvtSparkChartAutomation$$.$setSolidFill$($DvtChartPieLabelUtils$$);
      $DvtSparkChartAutomation$$.$setStyle$($DvtChartLineMarker$$).$setClassName$($DvtChartMarkerUtils$$);
    } else {
      $DvtChartSeriesEffectUtils$$ = $DvtSparkChartEventManager$$.items;
      $DvtChartPieLabelInfo$$ = [];
      $DvtChartPieRenderUtils$$ = [];
      if ($DvtSparkChartDefaults$$.$xAxis$.$isGroupAxis$()) {
        for (;$DvtChartSeriesEffectUtils$$.length < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$);) {
          $DvtChartSeriesEffectUtils$$.push(null);
        }
      }
      for ($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtChartSeriesEffectUtils$$.length;$DvtSparkChartEventManager$$++) {
        var $DvtChartDataChangeLineArea$$ = $DvtChartSeriesEffectUtils$$[$DvtSparkChartEventManager$$], $DvtChartRangeMarker$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtChartDataChangeLineArea$$), $DvtChartDataChangeLineArea$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtChartDataChangeLineArea$$);
        if (null == $DvtChartRangeMarker$$ || null == $DvtChartDataChangeLineArea$$) {
          $DvtChartPieLabelInfo$$.push(new $DvtChartCoord$$), $DvtChartPieRenderUtils$$.push(new $DvtChartCoord$$);
        } else {
          var $DvtChartRangeMarker$$ = $DvtChartTooltipUtils$$.$getUnboundedCoordAt$($DvtChartRangeMarker$$), $DvtChartDataChangeLineArea$$ = $DvtChartTooltipUtils$$.$getUnboundedCoordAt$($DvtChartDataChangeLineArea$$), $DvtChartDataChangeRangeMarker$$ = $DvtSparkChartDefaults$$.$xAxis$.$getUnboundedCoordAt$($DvtChartRefObjUtils$$.$getXValue$($DvtSparkChartDefaults$$, $DvtChartSeriesEffectUtils$$, $DvtSparkChartEventManager$$));
          $DvtChartPieLabelInfo$$.push(new $DvtChartCoord$$($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeLineArea$$));
          $DvtChartPieRenderUtils$$.push(new $DvtChartCoord$$($DvtChartDataChangeRangeMarker$$, $DvtChartRangeMarker$$, $DvtChartRangeMarker$$));
        }
      }
      $DvtSparkChartAutomation$$ = new $DvtChartLineArea$$($DvtSparkChartDefaults$$, !0, $DvtSparkChartAutomation$$, null, $DvtChartLineMarker$$, $DvtChartMarkerUtils$$, new $dvt$$2$$.$SolidFill$($DvtChartPieLabelUtils$$), null, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieRenderUtils$$);
    }
    return $DvtSparkChartAutomation$$;
  };
  $DvtChartRefObjRenderer$$.$_createReferenceLine$ = function $$DvtChartRefObjRenderer$$$$_createReferenceLine$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$) {
    var $DvtChartSeriesEffectUtils$$ = $DvtChartTooltipUtils$$.$getPosition$(), $DvtChartPieLabelUtils$$ = "top" == $DvtChartSeriesEffectUtils$$ || "bottom" == $DvtChartSeriesEffectUtils$$, $DvtChartPieRenderUtils$$ = "radial" == $DvtChartSeriesEffectUtils$$, $DvtChartPieLabelInfo$$ = "tangential" == $DvtChartSeriesEffectUtils$$, $DvtChartSeriesEffectUtils$$ = $DvtChartRefObjUtils$$.$getLineWidth$($DvtSparkChartEventManager$$), $DvtChartTypeUtils$$ = $DvtChartRefObjUtils$$.$getLineType$($DvtSparkChartEventManager$$), 
    $DvtChartDataChangeFunnelSlice$$ = $DvtChartRefObjUtils$$.$getColor$($DvtSparkChartEventManager$$), $DvtChartSeriesEffectUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartDataChangeFunnelSlice$$, 1, $DvtChartSeriesEffectUtils$$), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.style, $DvtChartLineMarker$$ = $DvtSparkChartEventManager$$.className;
    $DvtSparkChartEventManager$$.lineStyle && $DvtChartSeriesEffectUtils$$.$setStyle$($dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartEventManager$$.lineStyle));
    var $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$.$getCtx$();
    if (null == $DvtSparkChartEventManager$$.items || $DvtChartTooltipUtils$$ != $DvtSparkChartDefaults$$.$yAxis$ && $DvtChartTooltipUtils$$ != $DvtSparkChartDefaults$$.$y2Axis$) {
      if ($DvtSparkChartEventManager$$.value) {
        $DvtSparkChartEventManager$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($DvtSparkChartDefaults$$, $DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$.value);
        if (null == $DvtSparkChartEventManager$$ || Infinity == $DvtSparkChartEventManager$$ || -Infinity == $DvtSparkChartEventManager$$) {
          return null;
        }
        $DvtChartTooltipUtils$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2;
        $DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2;
        $DvtChartPieRenderUtils$$ ? ($DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartDefaults$$) ? ($DvtChartPieRenderUtils$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartTooltipUtils$$, $DvtChartTypeUtils$$, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Polygon$($DvtChartMarkerUtils$$, $DvtChartPieRenderUtils$$)) : $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Circle$($DvtChartMarkerUtils$$, 
        $DvtChartTooltipUtils$$, $DvtChartTypeUtils$$, $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$.$setFill$(null)) : $DvtChartPieLabelInfo$$ ? ($DvtSparkChartDefaults$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$.$getRadius$(), $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Line$($DvtChartMarkerUtils$$, $DvtChartTooltipUtils$$, $DvtChartTypeUtils$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y)) : 
        ($DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$ ? new $dvt$$2$$.$Line$($DvtChartMarkerUtils$$, $DvtSparkChartEventManager$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$.$h$) : new $dvt$$2$$.$Line$($DvtChartMarkerUtils$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$.$setPixelHinting$());
        $DvtSparkChartDefaults$$.$setStroke$($DvtChartSeriesEffectUtils$$);
        $DvtSparkChartDefaults$$.$setStyle$($DvtChartDataChangeFunnelSlice$$).$setClassName$($DvtChartLineMarker$$);
      } else {
        return null;
      }
    } else {
      $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.items;
      $DvtChartPieRenderUtils$$ = [];
      if ($DvtSparkChartDefaults$$.$xAxis$.$isGroupAxis$()) {
        for (;$DvtChartPieLabelUtils$$.length < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$);) {
          $DvtChartPieLabelUtils$$.push(null);
        }
      }
      $DvtChartPieRenderUtils$$ = [];
      for ($DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartPieLabelUtils$$.length;$DvtChartPieLabelInfo$$++) {
        $DvtChartMarkerUtils$$ = $DvtChartPieLabelUtils$$[$DvtChartPieLabelInfo$$], $DvtSparkChartEventManager$$ = null, null != $DvtChartMarkerUtils$$ && ("object" != typeof $DvtChartMarkerUtils$$ ? $DvtSparkChartEventManager$$ = $DvtChartMarkerUtils$$ : null != $DvtChartMarkerUtils$$.value && ($DvtSparkChartEventManager$$ = $DvtChartMarkerUtils$$.value)), null == $DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.push(new $DvtChartCoord$$) : ($DvtChartMarkerUtils$$ = $DvtChartTooltipUtils$$.$getUnboundedCoordAt$($DvtSparkChartEventManager$$), 
        $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$.$xAxis$.$getUnboundedCoordAt$($DvtChartRefObjUtils$$.$getXValue$($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$)), $DvtChartPieRenderUtils$$.push(new $DvtChartCoord$$($DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$, $DvtChartMarkerUtils$$)));
      }
      $DvtSparkChartDefaults$$ = new $DvtChartLineArea$$($DvtSparkChartDefaults$$, !1, $DvtSparkChartAutomation$$, null, $DvtChartDataChangeFunnelSlice$$, $DvtChartLineMarker$$, null, $DvtChartSeriesEffectUtils$$, $DvtChartTypeUtils$$, $DvtChartPieRenderUtils$$);
    }
    return $DvtSparkChartDefaults$$;
  };
  $DvtChartRefObjRenderer$$.$_getAxisCoord$ = function $$DvtChartRefObjRenderer$$$$_getAxisCoord$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtSparkChartEventManager$$.$isGroupAxis$() && ($dvt$$2$$ = $DvtChartDataUtils$$.$getGroupIndex$($dvt$$2$$, $DvtSparkChartDefaults$$), 0 <= $dvt$$2$$) ? $DvtSparkChartEventManager$$.$getUnboundedCoordAt$($dvt$$2$$) : isNaN($DvtSparkChartDefaults$$) ? null : $DvtSparkChartEventManager$$.$getUnboundedCoordAt$($DvtSparkChartDefaults$$);
  };
  $dvt$$2$$.$SparkChart$ = function $$dvt$$2$$$$SparkChart$$() {
  };
  $dvt$$2$$.$Obj$.$createSubclass$($dvt$$2$$.$SparkChart$, $dvt$$2$$.$BaseComponent$);
  $dvt$$2$$.$SparkChart$.newInstance = function $$dvt$$2$$$$SparkChart$$newInstance$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartTooltipUtils$$ = new $dvt$$2$$.$SparkChart$;
    $DvtChartTooltipUtils$$.Init($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtChartTooltipUtils$$;
  };
  $dvt$$2$$.$SparkChart$.$getDefaults$ = function $$dvt$$2$$$$SparkChart$$$getDefaults$$($dvt$$2$$) {
    return (new $DvtSparkChartDefaults$$).$getDefaults$($dvt$$2$$);
  };
  $dvt$$2$$.$SparkChart$.prototype.Init = function $$dvt$$2$$$$SparkChart$$$Init$($DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$) {
    $dvt$$2$$.$SparkChart$.$superclass$.Init.call(this, $DvtSparkChartAutomation$$, $DvtChartTooltipUtils$$, $DvtChartSeriesEffectUtils$$);
    this.$Defaults$ = new $DvtSparkChartDefaults$$;
    this.$EventManager$ = new $DvtSparkChartEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    this.$_chart$ = $dvt$$2$$.$Chart$.newInstance($DvtSparkChartAutomation$$, this.$_onRenderEnd$, this);
    this.$addChild$(this.$_chart$);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(new $dvt$$2$$.$KeyboardHandler$(this.$EventManager$, this));
    this.$_tooltipMask$ = new $dvt$$2$$.Rect($DvtSparkChartAutomation$$);
    this.$addChild$(this.$_tooltipMask$);
    this.setId("sparkChart1000" + Math.floor(1E9 * Math.random()));
  };
  $dvt$$2$$.$SparkChart$.prototype.$SetOptions$ = function $$dvt$$2$$$$SparkChart$$$$SetOptions$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($DvtSparkChartEventManager$$), $dvt$$2$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
  };
  $dvt$$2$$.$SparkChart$.prototype.setId = function $$dvt$$2$$$$SparkChart$$$setId$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$SparkChart$.$superclass$.setId.call(this, $DvtSparkChartEventManager$$);
    this.$_chart$ && this.$_chart$.setId($DvtSparkChartEventManager$$ + "chart");
  };
  $dvt$$2$$.$SparkChart$.prototype.$render$ = function $$dvt$$2$$$$SparkChart$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$SetOptions$($DvtSparkChartEventManager$$);
    isNaN($DvtSparkChartDefaults$$) || isNaN($DvtSparkChartAutomation$$) || (this.$Width$ = $DvtSparkChartDefaults$$, this.$Height$ = $DvtSparkChartAutomation$$);
    this.$_isDoneRendering$ = this.$_eventReceived$ = !1;
    $DvtSparkChartRenderer$$.$render$(this, this.$Width$, this.$Height$);
    $DvtSparkChartEventManager$$ = this.$Options$.shortDesc;
    this.$_tooltipMask$.$setWidth$(this.$Width$);
    this.$_tooltipMask$.$setHeight$(this.$Height$);
    this.$_tooltipMask$.$setInvisibleFill$();
    $DvtSparkChartDefaults$$ = ($DvtSparkChartDefaults$$ = this.$Options$.tooltip) ? $DvtSparkChartDefaults$$.renderer : null;
    $DvtSparkChartAutomation$$ = this.$Options$.color;
    $DvtSparkChartDefaults$$ ? ($DvtSparkChartEventManager$$ = {component:this.$Options$._widgetConstructor, color:$DvtSparkChartAutomation$$}, this.$_peer$ = new $dvt$$2$$.$CustomDatatipPeer$(this.$getCtx$().$getTooltipManager$(), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$), this.$EventManager$.$associate$(this.$_tooltipMask$, this.$_peer$)) : $DvtSparkChartEventManager$$ ? (this.$_peer$ = new $dvt$$2$$.$SimpleObjPeer$(null, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), 
    this.$EventManager$.$associate$(this.$_tooltipMask$, this.$_peer$)) : this.$_peer$ = null;
    this.$Options$._selectingCursor && this.setCursor("pointer");
    this.$UpdateAriaAttributes$();
    this.$_eventReceived$ && this.$RenderComplete$();
    this.$_isDoneRendering$ = !0;
  };
  $dvt$$2$$.$SparkChart$.prototype.$_onRenderEnd$ = function $$dvt$$2$$$$SparkChart$$$$_onRenderEnd$$($dvt$$2$$) {
    this.$_eventReceived$ = !0;
    "ready" == $dvt$$2$$.type && this.$_isDoneRendering$ && this.$RenderComplete$();
  };
  $dvt$$2$$.$SparkChart$.prototype.$getAutomation$ = function $$dvt$$2$$$$SparkChart$$$$getAutomation$$() {
    return new $DvtSparkChartAutomation$$(this);
  };
  $dvt$$2$$.$SparkChart$.prototype.$GetComponentDescription$ = function $$dvt$$2$$$$SparkChart$$$$GetComponentDescription$$() {
    return $dvt$$2$$.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "CHART");
  };
  $dvt$$2$$.$SparkChart$.prototype.$UpdateAriaAttributes$ = function $$dvt$$2$$$$SparkChart$$$$UpdateAriaAttributes$$() {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$Displayable$.$generateAriaLabel$($dvt$$2$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), this.$Options$.shortDesc ? [this.$Options$.shortDesc] : null);
    this.$IsParentRoot$() ? (this.$getCtx$().$setAriaRole$("img"), this.$getCtx$().$setAriaLabel$($dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $DvtSparkChartEventManager$$]))) : (this.$setAriaRole$("img"), this.$setAriaProperty$("label", $DvtSparkChartEventManager$$));
  };
  $dvt$$2$$.$SparkChart$.prototype.$__getLogicalObject$ = function $$dvt$$2$$$$SparkChart$$$$__getLogicalObject$$() {
    return this.$_peer$;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartAutomation$$, $dvt$$2$$.$Automation$);
  $DvtSparkChartAutomation$$.prototype.$getDataItem$ = function $$DvtSparkChartAutomation$$$$$getDataItem$$($dvt$$2$$) {
    return ($dvt$$2$$ = this.$_sparkChart$.$_chart$.$getAutomation$().$getDataItem$(0, $dvt$$2$$)) ? {borderColor:$dvt$$2$$.borderColor, color:$dvt$$2$$.color, date:$dvt$$2$$.x, low:$dvt$$2$$.low, high:$dvt$$2$$.high, value:null == $dvt$$2$$.low || null == $dvt$$2$$.high ? $dvt$$2$$.value : $dvt$$2$$.high - $dvt$$2$$.low} : null;
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartDefaults$$, $dvt$$2$$.$BaseComponentDefaults$);
  $DvtSparkChartDefaults$$.$SKIN_ALTA$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_ALTA$, color:"#267db3"};
  $DvtSparkChartDefaults$$.$VERSION_1$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$, type:"line", animationOnDisplay:"none", animationOnDataChange:"none", emptyText:null, color:"#666699", firstColor:null, lastColor:null, highColor:null, lowColor:null, visualEffects:"auto", baselineScaling:"min", barSpacing:"auto", lineWidth:1, lineStyle:"solid", lineType:"straight", markerSize:5, markerShape:"auto", barGapRatio:.25, _statusMessageStyle:new $dvt$$2$$.$CSSStyle$("font-size: 12px; color: #404259;")};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartEventManager$$, $dvt$$2$$.$EventManager$);
  $DvtSparkChartEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtSparkChartEventManager$$$$$ProcessKeyboardEvent$$($DvtSparkChartEventManager$$) {
    if (!this.$KeyboardHandler$) {
      return !1;
    }
    if ($DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.KeyboardEvent.$TAB$) {
      var $DvtSparkChartDefaults$$ = this.$_sparkChart$.$getCtx$().$getStageAbsolutePosition$();
      this.$ProcessObjectTooltip$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, this.$_sparkChart$.$__getLogicalObject$(), this.$_sparkChart$);
    }
    return !1;
  };
  $DvtSparkChartEventManager$$.prototype.$OnBlur$ = function $$DvtSparkChartEventManager$$$$$OnBlur$$($dvt$$2$$) {
    $DvtSparkChartEventManager$$.$superclass$.$OnBlur$.call(this, $dvt$$2$$);
    this.$hideTooltip$();
  };
  var $DvtSparkChartRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartRenderer$$, $dvt$$2$$.$Obj$);
  $DvtSparkChartRenderer$$.$render$ = function $$DvtSparkChartRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_chart$, $DvtChartTooltipUtils$$ = $DvtSparkChartRenderer$$.$_convertOptionsObj$($dvt$$2$$), $DvtChartSeriesEffectUtils$$ = $dvt$$2$$.$getOptions$();
    if ("area" == $DvtChartSeriesEffectUtils$$.type || "line" == $DvtChartSeriesEffectUtils$$.type || "lineWithArea" == $DvtChartSeriesEffectUtils$$.type) {
      $dvt$$2$$ = $DvtSparkChartRenderer$$.$_getDataItems$($dvt$$2$$);
      var $DvtChartPieLabelUtils$$ = !1;
      if ($DvtChartSeriesEffectUtils$$.firstColor || $DvtChartSeriesEffectUtils$$.lastColor || $DvtChartSeriesEffectUtils$$.highColor || $DvtChartSeriesEffectUtils$$.lowColor) {
        $DvtChartPieLabelUtils$$ = !0;
      } else {
        for (var $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $dvt$$2$$.length;$DvtChartPieRenderUtils$$++) {
          if ($dvt$$2$$[$DvtChartPieRenderUtils$$] && "on" == $dvt$$2$$[$DvtChartPieRenderUtils$$].markerDisplayed) {
            $DvtChartPieLabelUtils$$ = !0;
            break;
          }
        }
      }
      if ($DvtChartPieLabelUtils$$ && 0 < $dvt$$2$$.length || "none" == $DvtChartSeriesEffectUtils$$.lineType) {
        $DvtChartSeriesEffectUtils$$ = $DvtChartSeriesEffectUtils$$.markerSize / 2, $DvtSparkChartEventManager$$ -= 2 * $DvtChartSeriesEffectUtils$$, $DvtSparkChartDefaults$$ -= 2 * $DvtChartSeriesEffectUtils$$, $DvtSparkChartAutomation$$.$setTranslate$($DvtChartSeriesEffectUtils$$, $DvtChartSeriesEffectUtils$$);
      }
    }
    $DvtSparkChartAutomation$$.$render$($DvtChartTooltipUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
  };
  $DvtSparkChartRenderer$$.$_getDataItems$ = function $$DvtSparkChartRenderer$$$$_getDataItems$$($dvt$$2$$) {
    return ($dvt$$2$$ = $dvt$$2$$.$getOptions$()) && $dvt$$2$$.items ? $dvt$$2$$.items : [];
  };
  $DvtSparkChartRenderer$$.$_convertOptionsObj$ = function $$DvtSparkChartRenderer$$$$_convertOptionsObj$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = {styleDefaults:{}, xAxis:{}, yAxis:{}, groups:[]};
    $DvtSparkChartAutomation$$.translations = $DvtSparkChartDefaults$$.translations;
    var $DvtChartTooltipUtils$$ = "floatingBar" == $DvtSparkChartDefaults$$.type, $DvtChartSeriesEffectUtils$$ = [], $DvtChartPieLabelUtils$$ = -1, $DvtChartPieRenderUtils$$ = -1, $DvtChartPieLabelInfo$$ = -Infinity, $DvtChartTypeUtils$$ = Infinity;
    $DvtSparkChartEventManager$$ = $DvtSparkChartRenderer$$.$_getDataItems$($DvtSparkChartEventManager$$);
    for (var $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtSparkChartEventManager$$.length;$DvtChartDataChangeFunnelSlice$$++) {
      var $DvtChartLineMarker$$ = $DvtSparkChartEventManager$$[$DvtChartDataChangeFunnelSlice$$], $DvtChartMarkerUtils$$ = {};
      $DvtChartLineMarker$$ instanceof Object ? ($DvtChartTooltipUtils$$ ? ($DvtChartMarkerUtils$$.low = $DvtChartLineMarker$$.floatValue, $DvtChartMarkerUtils$$.high = $DvtChartLineMarker$$.floatValue + $DvtChartLineMarker$$.value) : ($DvtChartMarkerUtils$$.value = $DvtChartLineMarker$$.value, $DvtChartMarkerUtils$$.low = $DvtChartLineMarker$$.low, $DvtChartMarkerUtils$$.high = $DvtChartLineMarker$$.high), $DvtChartLineMarker$$.date && ($DvtSparkChartAutomation$$.timeAxisType = "enabled", $DvtSparkChartAutomation$$.groups.push($DvtChartLineMarker$$.date)), 
      "on" == $DvtChartLineMarker$$.markerDisplayed && ($DvtChartMarkerUtils$$.markerDisplayed = "on"), $DvtChartLineMarker$$.color && ($DvtChartMarkerUtils$$.color = $DvtChartLineMarker$$.color), $DvtChartLineMarker$$.borderColor && ($DvtChartMarkerUtils$$.borderColor = $DvtChartLineMarker$$.borderColor), $DvtChartLineMarker$$.markerShape && ($DvtChartMarkerUtils$$.markerShape = $DvtChartLineMarker$$.markerShape), $DvtChartLineMarker$$.markerSize && ($DvtChartMarkerUtils$$.markerSize = $DvtChartLineMarker$$.markerSize)) : 
      $DvtChartMarkerUtils$$.value = $DvtChartLineMarker$$;
      $DvtChartSeriesEffectUtils$$.push($DvtChartMarkerUtils$$);
      $DvtChartLineMarker$$ = null != $DvtChartMarkerUtils$$.value ? $DvtChartMarkerUtils$$.value : Math.max($DvtChartMarkerUtils$$.low, $DvtChartMarkerUtils$$.high);
      $DvtChartPieLabelInfo$$ < $DvtChartLineMarker$$ && ($DvtChartPieLabelInfo$$ = $DvtChartLineMarker$$, $DvtChartPieLabelUtils$$ = $DvtChartDataChangeFunnelSlice$$);
      $DvtChartMarkerUtils$$ = null != $DvtChartMarkerUtils$$.value ? $DvtChartMarkerUtils$$.value : Math.min($DvtChartMarkerUtils$$.low, $DvtChartMarkerUtils$$.high);
      $DvtChartTypeUtils$$ > $DvtChartMarkerUtils$$ && ($DvtChartTypeUtils$$ = $DvtChartMarkerUtils$$, $DvtChartPieRenderUtils$$ = $DvtChartDataChangeFunnelSlice$$);
    }
    $DvtSparkChartDefaults$$.highColor && 0 <= $DvtChartPieLabelUtils$$ && ($DvtChartSeriesEffectUtils$$[$DvtChartPieLabelUtils$$].markerDisplayed = "on", $DvtChartSeriesEffectUtils$$[$DvtChartPieLabelUtils$$].color || ($DvtChartSeriesEffectUtils$$[$DvtChartPieLabelUtils$$].color = $DvtSparkChartDefaults$$.highColor));
    $DvtSparkChartDefaults$$.lowColor && 0 <= $DvtChartPieRenderUtils$$ && ($DvtChartSeriesEffectUtils$$[$DvtChartPieRenderUtils$$].markerDisplayed = "on", $DvtChartSeriesEffectUtils$$[$DvtChartPieRenderUtils$$].color || ($DvtChartSeriesEffectUtils$$[$DvtChartPieRenderUtils$$].color = $DvtSparkChartDefaults$$.lowColor));
    $DvtSparkChartDefaults$$.firstColor && 0 < $DvtChartSeriesEffectUtils$$.length && ($DvtChartSeriesEffectUtils$$[0].markerDisplayed = "on", $DvtChartSeriesEffectUtils$$[0].color || ($DvtChartSeriesEffectUtils$$[0].color = $DvtSparkChartDefaults$$.firstColor));
    $DvtSparkChartDefaults$$.lastColor && 0 < $DvtChartSeriesEffectUtils$$.length && ($DvtChartSeriesEffectUtils$$[$DvtChartSeriesEffectUtils$$.length - 1].markerDisplayed = "on", $DvtChartSeriesEffectUtils$$[$DvtChartSeriesEffectUtils$$.length - 1].color || ($DvtChartSeriesEffectUtils$$[$DvtChartSeriesEffectUtils$$.length - 1].color = $DvtSparkChartDefaults$$.lastColor));
    $DvtSparkChartAutomation$$.series = [{items:$DvtChartSeriesEffectUtils$$, areaColor:$DvtSparkChartDefaults$$.areaColor}];
    $DvtSparkChartDefaults$$.referenceObjects && ($DvtSparkChartAutomation$$.yAxis.referenceObjects = $DvtSparkChartDefaults$$.referenceObjects);
    $DvtSparkChartAutomation$$.__spark = !0;
    $DvtChartSeriesEffectUtils$$ = $DvtSparkChartDefaults$$.barSpacing;
    "auto" == $DvtChartSeriesEffectUtils$$ && ($DvtChartSeriesEffectUtils$$ = 1 < $dvt$$2$$.$Agent$.$getDevicePixelRatio$() ? "subpixel" : "pixel");
    $DvtSparkChartAutomation$$.__sparkBarSpacing = $DvtChartSeriesEffectUtils$$;
    $DvtSparkChartAutomation$$.type = $DvtChartTooltipUtils$$ ? "bar" : $DvtSparkChartDefaults$$.type;
    $DvtSparkChartAutomation$$.animationOnDataChange = $DvtSparkChartDefaults$$.animationOnDataChange;
    $DvtSparkChartAutomation$$.animationOnDisplay = $DvtSparkChartDefaults$$.animationOnDisplay;
    $DvtSparkChartAutomation$$.emptyText = $DvtSparkChartDefaults$$.emptyText;
    $DvtSparkChartAutomation$$.styleDefaults.colors = [$DvtSparkChartDefaults$$.color];
    $DvtSparkChartAutomation$$.styleDefaults.animationDuration = $DvtSparkChartDefaults$$.animationDuration;
    $DvtSparkChartAutomation$$.styleDefaults.animationIndicators = "none";
    $DvtSparkChartAutomation$$.styleDefaults.lineWidth = $DvtSparkChartDefaults$$.lineWidth;
    $DvtSparkChartAutomation$$.styleDefaults.lineStyle = $DvtSparkChartDefaults$$.lineStyle;
    $DvtSparkChartAutomation$$.styleDefaults.lineType = $DvtSparkChartDefaults$$.lineType;
    $DvtSparkChartAutomation$$.styleDefaults.markerSize = $DvtSparkChartDefaults$$.markerSize;
    $DvtSparkChartAutomation$$.styleDefaults.markerShape = $DvtSparkChartDefaults$$.markerShape;
    $DvtSparkChartAutomation$$.styleDefaults.barGapRatio = $DvtSparkChartDefaults$$.barGapRatio;
    $DvtSparkChartAutomation$$.styleDefaults.dataItemGaps = "0%";
    $DvtSparkChartAutomation$$.xAxis.rendered = "off";
    $DvtSparkChartAutomation$$.yAxis.rendered = "off";
    $DvtChartTooltipUtils$$ = "zero" == $DvtSparkChartDefaults$$.baselineScaling;
    $DvtChartSeriesEffectUtils$$ = $DvtChartPieLabelInfo$$ != $DvtChartTypeUtils$$ ? .1 * ($DvtChartPieLabelInfo$$ - $DvtChartTypeUtils$$) : .1 * Math.abs($DvtChartPieLabelInfo$$);
    $DvtSparkChartAutomation$$.yAxis.min = $DvtChartTooltipUtils$$ && 0 <= $DvtChartTypeUtils$$ ? 0 : $DvtChartTypeUtils$$ - $DvtChartSeriesEffectUtils$$;
    $DvtSparkChartAutomation$$.yAxis.max = $DvtChartTooltipUtils$$ && 0 >= $DvtChartPieLabelInfo$$ ? 0 : $DvtChartPieLabelInfo$$ + $DvtChartSeriesEffectUtils$$;
    $DvtSparkChartAutomation$$.styleDefaults.seriesEffect = "none" == $DvtSparkChartDefaults$$.visualEffects || "area" != $DvtSparkChartDefaults$$.type && "lineWithArea" != $DvtSparkChartDefaults$$.type ? "color" : "gradient";
    $DvtSparkChartAutomation$$.layout = {gapWidthRatio:0, gapHeightRatio:0};
    $DvtSparkChartAutomation$$.legend = {rendered:"off"};
    $DvtSparkChartAutomation$$._statusMessageStyle = $DvtSparkChartDefaults$$._statusMessageStyle;
    return $DvtSparkChartAutomation$$;
  };
  $dvt$$2$$.$exportProperty$($dvt$$2$$, "Chart", $dvt$$2$$.$Chart$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$, "newInstance", $dvt$$2$$.$Chart$.newInstance);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "destroy", $dvt$$2$$.$Chart$.prototype.$destroy$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "getAutomation", $dvt$$2$$.$Chart$.prototype.$getAutomation$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "getDefaults", $dvt$$2$$.$Chart$.prototype.$getDefaults$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "getValuesAt", $dvt$$2$$.$Chart$.prototype.$getValuesAt$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "highlight", $dvt$$2$$.$Chart$.prototype.$highlight$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "positionDataCursor", $dvt$$2$$.$Chart$.prototype.$positionDataCursor$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "render", $dvt$$2$$.$Chart$.prototype.$render$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "select", $dvt$$2$$.$Chart$.prototype.select);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getDomElementForSubId", $DvtChartAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getDataItem", $DvtChartAutomation$$.prototype.$getDataItem$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getGroup", $DvtChartAutomation$$.prototype.$getGroup$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getSeries", $DvtChartAutomation$$.prototype.$getSeries$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getGroupCount", $DvtChartAutomation$$.prototype.$getGroupCount$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getSeriesCount", $DvtChartAutomation$$.prototype.$getSeriesCount$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getTitle", $DvtChartAutomation$$.prototype.$getTitle$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getLegend", $DvtChartAutomation$$.prototype.$getLegend$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getPlotArea", $DvtChartAutomation$$.prototype.$getPlotArea$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getXAxis", $DvtChartAutomation$$.prototype.$getXAxis$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getYAxis", $DvtChartAutomation$$.prototype.$getYAxis$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getY2Axis", $DvtChartAutomation$$.prototype.$getY2Axis$);
  $dvt$$2$$.$exportProperty$($DvtChartDataItem$$.prototype, "getId", $DvtChartDataItem$$.prototype.getId);
  $dvt$$2$$.$exportProperty$($DvtChartDataItem$$.prototype, "getSeries", $DvtChartDataItem$$.prototype.$getSeries$);
  $dvt$$2$$.$exportProperty$($DvtChartDataItem$$.prototype, "getGroup", $DvtChartDataItem$$.prototype.$getGroup$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$, "SparkChart", $dvt$$2$$.$SparkChart$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$, "newInstance", $dvt$$2$$.$SparkChart$.newInstance);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "destroy", $dvt$$2$$.$SparkChart$.prototype.$destroy$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "getAutomation", $dvt$$2$$.$SparkChart$.prototype.$getAutomation$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "getDefaults", $dvt$$2$$.$SparkChart$.prototype.$getDefaults$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "render", $dvt$$2$$.$SparkChart$.prototype.$render$);
  $dvt$$2$$.$exportProperty$($DvtSparkChartAutomation$$.prototype, "getDataItem", $DvtSparkChartAutomation$$.prototype.$getDataItem$);
})(dvt);

  return dvt;
});
