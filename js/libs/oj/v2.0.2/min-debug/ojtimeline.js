/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTimeline"], function($oj$$75$$, $$$$68$$, $comp$$18$$, $base$$13$$, $dvt$$11$$) {
  $oj$$75$$.$__registerWidget$("oj.ojTimeline", $$$$68$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{viewportChange:null}, $_CreateDvtComponent$:function($context$$172$$, $callback$$131$$, $callbackObj$$14$$) {
    return $dvt$$11$$.Timeline.newInstance($context$$172$$, $callback$$131$$, $callbackObj$$14$$);
  }, $_ConvertLocatorToSubId$:function($locator$$62$$) {
    var $subId$$66$$ = $locator$$62$$.subId;
    "oj-timeline-item" == $subId$$66$$ && ($subId$$66$$ = "timelineItem[" + $locator$$62$$.seriesIndex + "][" + $locator$$62$$.itemIndex + "]");
    return $subId$$66$$;
  }, $_ConvertSubIdToLocator$:function($indexPath$$3_subId$$67$$) {
    var $locator$$63$$ = {};
    0 == $indexPath$$3_subId$$67$$.indexOf("timelineItem") && ($indexPath$$3_subId$$67$$ = this.$_GetIndexPath$($indexPath$$3_subId$$67$$), $locator$$63$$.subId = "oj-timeline-item", $locator$$63$$.seriesIndex = $indexPath$$3_subId$$67$$[0], $locator$$63$$.itemIndex = $indexPath$$3_subId$$67$$[1]);
    return $locator$$63$$;
  }, $_ProcessStyles$:function() {
    this._super();
    this.options.styleDefaults || (this.options.styleDefaults = {});
    this.options.styleDefaults.series || (this.options.styleDefaults.series = {});
    if (!this.options.styleDefaults.series.colors) {
      var $handler$$54$$ = new $oj$$75$$.$ColorAttributeGroupHandler$;
      this.options.styleDefaults.series.colors = $handler$$54$$.$getValueRamp$();
    }
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$24$$ = this._super();
    $styleClasses$$24$$.push("oj-timeline");
    return $styleClasses$$24$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$25$$ = this._super();
    $styleClasses$$25$$["oj-timeline"] = {path:"styleDefaults/borderColor", property:"border-color"};
    $styleClasses$$25$$["oj-timeline-item"] = [{path:"styleDefaults/item/borderColor", property:"border-color"}, {path:"styleDefaults/item/backgroundColor", property:"background-color"}];
    $styleClasses$$25$$["oj-timeline-item oj-hover"] = [{path:"styleDefaults/item/hoverBorderColor", property:"border-color"}, {path:"styleDefaults/item/hoverBackgroundColor", property:"background-color"}];
    $styleClasses$$25$$["oj-timeline-item oj-selected"] = [{path:"styleDefaults/item/selectedBorderColor", property:"border-color"}, {path:"styleDefaults/item/selectedBackgroundColor", property:"background-color"}];
    $styleClasses$$25$$["oj-timeline-item-description"] = {path:"styleDefaults/item/descriptionStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$25$$["oj-timeline-item-title"] = {path:"styleDefaults/item/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$25$$["oj-timeline-major-axis-label"] = {path:"styleDefaults/majorAxis/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$25$$["oj-timeline-major-axis-separator"] = {path:"styleDefaults/majorAxis/separatorColor", property:"color"};
    $styleClasses$$25$$["oj-timeline-minor-axis"] = [{path:"styleDefaults/minorAxis/backgroundColor", property:"background-color"}, {path:"styleDefaults/minorAxis/borderColor", property:"border-color"}];
    $styleClasses$$25$$["oj-timeline-minor-axis-label"] = {path:"styleDefaults/minorAxis/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$25$$["oj-timeline-minor-axis-separator"] = {path:"styleDefaults/minorAxis/separatorColor", property:"color"};
    $styleClasses$$25$$["oj-timeline-overview"] = {path:"styleDefaults/overview/backgroundColor", property:"background-color"};
    $styleClasses$$25$$["oj-timeline-overview-label"] = {path:"styleDefaults/overview/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$25$$["oj-timeline-overview-window"] = [{path:"styleDefaults/overview/window/backgroundColor", property:"background-color"}, {path:"styleDefaults/overview/window/borderColor", property:"border-color"}];
    $styleClasses$$25$$["oj-timeline-reference-object"] = {path:"styleDefaults/referenceObject/color", property:"color"};
    $styleClasses$$25$$["oj-timeline-series"] = {path:"styleDefaults/series/backgroundColor", property:"background-color"};
    $styleClasses$$25$$["oj-timeline-series-empty-text"] = {path:"styleDefaults/series/emptyTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$25$$["oj-timeline-series-label"] = {path:"styleDefaults/series/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$25$$["oj-timeline-zoomin-icon"] = {path:"_resources/zoomIn", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-zoomin-icon oj-hover"] = {path:"_resources/zoomIn_h", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-zoomin-icon oj-active"] = {path:"_resources/zoomIn_a", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-zoomin-icon oj-disabled"] = {path:"_resources/zoomIn_d", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-zoomout-icon"] = {path:"_resources/zoomOut", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-zoomout-icon oj-hover"] = {path:"_resources/zoomOut_h", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-zoomout-icon oj-active"] = {path:"_resources/zoomOut_a", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-zoomout-icon oj-disabled"] = {path:"_resources/zoomOut_d", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-scroll-indicator-back"] = {path:"_resources/scrollLeft", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-scroll-indicator-forward"] = {path:"_resources/scrollRight", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-scroll-indicator-up"] = {path:"_resources/scrollUp", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-scroll-indicator-down"] = {path:"_resources/scrollDown", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-overview-window-handle-horizontal"] = {path:"_resources/overviewHandleHor", property:"CSS_URL"};
    $styleClasses$$25$$["oj-timeline-overview-window-handle-vertical"] = {path:"_resources/overviewHandleVert", property:"CSS_URL"};
    return $styleClasses$$25$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "viewportChange"];
  }, $_GetTranslationMap$:function() {
    var $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$ = this.options.translations, $ret$$62$$ = this._super();
    $ret$$62$$["DvtUtilBundle.TIMELINE"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$.componentName;
    $ret$$62$$["DvtUtilBundle.TIMELINE_SERIES"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$.labelSeries;
    $ret$$62$$["DvtUtilBundle.ZOOM_IN"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$.tooltipZoomIn;
    $ret$$62$$["DvtUtilBundle.ZOOM_OUT"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$.tooltipZoomOut;
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$ = $oj$$75$$.$LocaleData$.$getMonthNames$("wide");
    $ret$$62$$["DvtUtilBundle.MONTH_JANUARY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[0];
    $ret$$62$$["DvtUtilBundle.MONTH_FEBRUARY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[1];
    $ret$$62$$["DvtUtilBundle.MONTH_MARCH"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[2];
    $ret$$62$$["DvtUtilBundle.MONTH_APRIL"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[3];
    $ret$$62$$["DvtUtilBundle.MONTH_MAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[4];
    $ret$$62$$["DvtUtilBundle.MONTH_JUNE"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[5];
    $ret$$62$$["DvtUtilBundle.MONTH_JULY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[6];
    $ret$$62$$["DvtUtilBundle.MONTH_AUGUST"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[7];
    $ret$$62$$["DvtUtilBundle.MONTH_SEPTEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[8];
    $ret$$62$$["DvtUtilBundle.MONTH_OCTOBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[9];
    $ret$$62$$["DvtUtilBundle.MONTH_NOVEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[10];
    $ret$$62$$["DvtUtilBundle.MONTH_DECEMBER"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[11];
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$ = $oj$$75$$.$LocaleData$.$getDayNames$("wide");
    $ret$$62$$["DvtUtilBundle.DAY_SUNDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[0];
    $ret$$62$$["DvtUtilBundle.DAY_MONDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[1];
    $ret$$62$$["DvtUtilBundle.DAY_TUESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[2];
    $ret$$62$$["DvtUtilBundle.DAY_WEDNESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[3];
    $ret$$62$$["DvtUtilBundle.DAY_THURSDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[4];
    $ret$$62$$["DvtUtilBundle.DAY_FRIDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[5];
    $ret$$62$$["DvtUtilBundle.DAY_SATURDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[6];
    $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$ = $oj$$75$$.$LocaleData$.$getDayNames$("abbreviated");
    $ret$$62$$["DvtUtilBundle.DAY_SHORT_SUNDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[0];
    $ret$$62$$["DvtUtilBundle.DAY_SHORT_MONDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[1];
    $ret$$62$$["DvtUtilBundle.DAY_SHORT_TUESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[2];
    $ret$$62$$["DvtUtilBundle.DAY_SHORT_WEDNESDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[3];
    $ret$$62$$["DvtUtilBundle.DAY_SHORT_THURSDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[4];
    $ret$$62$$["DvtUtilBundle.DAY_SHORT_FRIDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[5];
    $ret$$62$$["DvtUtilBundle.DAY_SHORT_SATURDAY"] = $dayNames$$1_dayShortNames_monthNames$$3_translations$$21$$[6];
    return $ret$$62$$;
  }, $_HandleEvent$:function($event$$647_minorAxisScale$$) {
    if ("viewportChange" === $event$$647_minorAxisScale$$.type) {
      var $viewportStart$$ = (new Date($event$$647_minorAxisScale$$.viewportStart)).toISOString(), $viewportEnd$$ = (new Date($event$$647_minorAxisScale$$.viewportEnd)).toISOString();
      $event$$647_minorAxisScale$$ = $event$$647_minorAxisScale$$.minorAxisScale;
      var $viewportChangePayload$$1$$ = {viewportStart:$viewportStart$$, viewportEnd:$viewportEnd$$, minorAxisScale:$event$$647_minorAxisScale$$};
      this.$_UserOptionChange$("viewportStart", $viewportStart$$);
      this.$_UserOptionChange$("viewportEnd", $viewportEnd$$);
      this.$_UserOptionChange$("minorAxis.scale", $event$$647_minorAxisScale$$);
      this._trigger("viewportChange", null, $viewportChangePayload$$1$$);
    } else {
      this._super($event$$647_minorAxisScale$$);
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$4$$ = this.options._resources, $converterFactory_yearsConverterVert$$ = $oj$$75$$.$Validation$.$converterFactory$("datetime"), $secondsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric", minute:"2-digit", second:"2-digit"}), $minutesConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric", minute:"2-digit"}), $hoursConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({hour:"numeric"}), $daysConverter$$ = 
    $converterFactory_yearsConverterVert$$.createConverter({month:"numeric", day:"2-digit"}), $monthsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({month:"long"}), $yearsConverter$$ = $converterFactory_yearsConverterVert$$.createConverter({year:"numeric"}), $converterVert_monthsConverterVert$$ = $converterFactory_yearsConverterVert$$.createConverter({month:"short"}), $converterFactory_yearsConverterVert$$ = $converterFactory_yearsConverterVert$$.createConverter({year:"2-digit"}), 
    $converterVert_monthsConverterVert$$ = {seconds:$secondsConverter$$, minutes:$minutesConverter$$, hours:$hoursConverter$$, days:$daysConverter$$, weeks:$daysConverter$$, months:$converterVert_monthsConverterVert$$, quarters:$converterVert_monthsConverterVert$$, years:$converterFactory_yearsConverterVert$$};
    $resources$$4$$.converter = {seconds:$secondsConverter$$, minutes:$minutesConverter$$, hours:$hoursConverter$$, days:$daysConverter$$, weeks:$daysConverter$$, months:$monthsConverter$$, quarters:$monthsConverter$$, years:$yearsConverter$$};
    $resources$$4$$.converterVert = $converterVert_monthsConverterVert$$;
  }, getContextByNode:function($node$$130$$) {
    return this.getSubIdByNode($node$$130$$);
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["series"]};
  }, whenReady:function() {
  }});
});
