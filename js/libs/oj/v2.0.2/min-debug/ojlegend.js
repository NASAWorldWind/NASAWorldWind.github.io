/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtLegend"], function($oj$$50$$, $$$$46$$, $comp$$12$$, $base$$7$$, $dvt$$5$$) {
  $oj$$50$$.$__registerWidget$("oj.ojLegend", $$$$46$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, drill:null}, $_CreateDvtComponent$:function($context$$121$$, $callback$$112$$, $callbackObj$$8$$) {
    return $dvt$$5$$.Legend.newInstance($context$$121$$, $callback$$112$$, $callbackObj$$8$$);
  }, $_ConvertLocatorToSubId$:function($locator$$43$$) {
    var $subId$$49$$ = $locator$$43$$.subId;
    "oj-legend-section" == $subId$$49$$ ? $subId$$49$$ = "section" + this.$_GetStringFromIndexPath$($locator$$43$$.indexPath) : "oj-legend-item" == $subId$$49$$ ? ($subId$$49$$ = "section" + this.$_GetStringFromIndexPath$($locator$$43$$.sectionIndexPath), $subId$$49$$ += ":item[" + $locator$$43$$.itemIndex + "]") : "oj-legend-tooltip" == $subId$$49$$ && ($subId$$49$$ = "tooltip");
    return $subId$$49$$;
  }, $_ConvertSubIdToLocator$:function($itemSubstr$$1_subId$$50$$) {
    var $locator$$44$$ = {};
    if (0 < $itemSubstr$$1_subId$$50$$.indexOf(":item")) {
      var $itemStartIndex$$1$$ = $itemSubstr$$1_subId$$50$$.indexOf(":item"), $sectionSubstr$$1$$ = $itemSubstr$$1_subId$$50$$.substring(0, $itemStartIndex$$1$$);
      $itemSubstr$$1_subId$$50$$ = $itemSubstr$$1_subId$$50$$.substring($itemStartIndex$$1$$);
      $locator$$44$$.subId = "oj-legend-item";
      $locator$$44$$.sectionIndexPath = this.$_GetIndexPath$($sectionSubstr$$1$$);
      $locator$$44$$.itemIndex = this.$_GetFirstIndex$($itemSubstr$$1_subId$$50$$);
    } else {
      0 == $itemSubstr$$1_subId$$50$$.indexOf("section") ? ($locator$$44$$.subId = "oj-legend-section", $locator$$44$$.indexPath = this.$_GetIndexPath$($itemSubstr$$1_subId$$50$$)) : "tooltip" == $itemSubstr$$1_subId$$50$$ && ($locator$$44$$.subId = "oj-legend-tooltip");
    }
    return $locator$$44$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$.push("oj-legend");
    return $styleClasses$$12$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$["oj-legend"] = {path:"textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend-title"] = {path:"titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend-section-title"] = {path:"_sectionTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend-section-close-icon"] = {path:"_resources/closedEnabled", property:"CSS_URL"};
    $styleClasses$$13$$["oj-legend-section-close-icon oj-hover"] = {path:"_resources/closedOver", property:"CSS_URL"};
    $styleClasses$$13$$["oj-legend-section-close-icon oj-active"] = {path:"_resources/closedDown", property:"CSS_URL"};
    $styleClasses$$13$$["oj-legend-section-open-icon"] = {path:"_resources/openEnabled", property:"CSS_URL"};
    $styleClasses$$13$$["oj-legend-section-open-icon oj-hover"] = {path:"_resources/openOver", property:"CSS_URL"};
    $styleClasses$$13$$["oj-legend-section-open-icon oj-active"] = {path:"_resources/openDown", property:"CSS_URL"};
    return $styleClasses$$13$$;
  }, $_GetTranslationMap$:function() {
    var $translations$$16$$ = this.options.translations, $ret$$44$$ = this._super();
    $ret$$44$$["DvtUtilBundle.LEGEND"] = $translations$$16$$.componentName;
    return $ret$$44$$;
  }, $_GetEventTypes$:function() {
    return["categoryFilter", "categoryHighlight", "drill"];
  }, $_HandleEvent$:function($event$$515$$) {
    var $type$$97$$ = $event$$515$$.type;
    "categoryHide" === $type$$97$$ || "categoryShow" === $type$$97$$ ? (this._trigger("categoryFilter", null, {category:$event$$515$$.category, type:"categoryHide" === $type$$97$$ ? "out" : "in"}), this.$_UserOptionChange$("hiddenCategories", $event$$515$$.hiddenCategories)) : "categoryHighlight" === $type$$97$$ ? (this._trigger("categoryHighlight", null, {categories:$event$$515$$.categories, type:$event$$515$$.categories && 0 < $event$$515$$.categories.length ? "on" : "off"}), this.$_UserOptionChange$("highlightedCategories", 
    $event$$515$$.categories)) : "drill" === $type$$97$$ ? this._trigger("drill", null, {id:$event$$515$$.id}) : this._super($event$$515$$);
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.overviewGrippy = $oj$$50$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/drag_horizontal.png");
  }, $_Render$:function() {
    this._super();
    this.element.attr("role") || this.element.attr("tabIndex", null);
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle();
  }, getSection:function($subIdPath$$) {
    var $ret$$45$$ = this.$_component$.getAutomation().getSection($subIdPath$$);
    if ($ret$$45$$) {
      var $ojComponent$$ = this;
      this.$_AddAutomationGetters$($ret$$45$$);
      $ret$$45$$.getSection = function $$ret$$45$$$getSection$($section$$1_sectionIndex$$) {
        ($section$$1_sectionIndex$$ = $ret$$45$$.sections ? $ret$$45$$.sections[$section$$1_sectionIndex$$] : null) && $ojComponent$$.$_AddAutomationGetters$($section$$1_sectionIndex$$);
        return $section$$1_sectionIndex$$;
      };
      $ret$$45$$.getItem = function $$ret$$45$$$getItem$($item$$123_itemIndex$$4$$) {
        ($item$$123_itemIndex$$4$$ = $ret$$45$$.items ? $ret$$45$$.items[$item$$123_itemIndex$$4$$] : null) && $ojComponent$$.$_AddAutomationGetters$($item$$123_itemIndex$$4$$);
        return $item$$123_itemIndex$$4$$;
      };
    }
    return $ret$$45$$;
  }, getItem:function($ret$$46_subIdPath$$1$$) {
    $ret$$46_subIdPath$$1$$ = this.$_component$.getAutomation().getItem($ret$$46_subIdPath$$1$$);
    this.$_AddAutomationGetters$($ret$$46_subIdPath$$1$$);
    return $ret$$46_subIdPath$$1$$;
  }, getPreferredSize:function($width$$31$$, $height$$30$$) {
    var $dims$$ = this.$_component$.getPreferredSize(this.options, $width$$31$$, $height$$30$$);
    return{width:$dims$$.getWidth(), height:$dims$$.getHeight()};
  }, getContextByNode:function($context$$122_node$$106$$) {
    return($context$$122_node$$106$$ = this.getSubIdByNode($context$$122_node$$106$$)) && "oj-legend-tooltip" !== $context$$122_node$$106$$.subId ? $context$$122_node$$106$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{sections:["items"]};
  }});
});
