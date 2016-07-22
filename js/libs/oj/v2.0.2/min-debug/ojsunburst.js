/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreeView"], function($oj$$68$$, $$$$62$$, $comp$$15$$, $base$$10$$, $dvt$$8$$) {
  $oj$$68$$.$__registerWidget$("oj.ojSunburst", $$$$62$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null, rotateInput:null}, $_CreateDvtComponent$:function($context$$159$$, $callback$$128$$, $callbackObj$$11$$) {
    return $dvt$$8$$.Sunburst.newInstance($context$$159$$, $callback$$128$$, $callbackObj$$11$$);
  }, $_ConvertLocatorToSubId$:function($locator$$54$$) {
    var $subId$$58$$ = $locator$$54$$.subId;
    "oj-sunburst-node" == $subId$$58$$ ? $subId$$58$$ = "node" + this.$_GetStringFromIndexPath$($locator$$54$$.indexPath) : "oj-sunburst-tooltip" == $subId$$58$$ && ($subId$$58$$ = "tooltip");
    return $subId$$58$$;
  }, $_ConvertSubIdToLocator$:function($subId$$59$$) {
    var $locator$$55$$ = {};
    0 == $subId$$59$$.indexOf("node") ? ($locator$$55$$.subId = "oj-sunburst-node", $locator$$55$$.indexPath = this.$_GetIndexPath$($subId$$59$$)) : "tooltip" == $subId$$59$$ && ($locator$$55$$.subId = "oj-sunburst-tooltip");
    return $locator$$55$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$18$$ = this._super();
    $styleClasses$$18$$.push("oj-sunburst");
    return $styleClasses$$18$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$19$$ = this._super();
    $styleClasses$$19$$["oj-sunburst-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-sunburst-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-sunburst-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$19$$["oj-sunburst-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$19$$["oj-sunburst-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$19$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "rotateInput"];
  }, $_GetTranslationMap$:function() {
    var $translations$$18$$ = this.options.translations, $ret$$56$$ = this._super();
    $ret$$56$$["DvtSunburstBundle.COLOR"] = $translations$$18$$.labelColor;
    $ret$$56$$["DvtSunburstBundle.SIZE"] = $translations$$18$$.labelSize;
    $ret$$56$$["DvtUtilBundle.SUNBURST"] = $translations$$18$$.componentName;
    return $ret$$56$$;
  }, $_HandleEvent$:function($event$$622$$) {
    "rotation" === $event$$622$$.type ? $event$$622$$.complete ? this.$_UserOptionChange$("startAngle", $event$$622$$.startAngle) : this._trigger("rotateInput", null, {value:$event$$622$$.startAngle}) : this._super($event$$622$$);
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.rotateCursor = $oj$$68$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/sunburst/rotate.cur");
  }, getNode:function($ret$$57_subIdPath$$2$$) {
    $ret$$57_subIdPath$$2$$ = this.$_component$.getAutomation().getNode($ret$$57_subIdPath$$2$$);
    this.$_AddAutomationGetters$($ret$$57_subIdPath$$2$$);
    return $ret$$57_subIdPath$$2$$;
  }, getContextByNode:function($context$$160_node$$124$$) {
    return($context$$160_node$$124$$ = this.getSubIdByNode($context$$160_node$$124$$)) && "oj-sunburst-tooltip" !== $context$$160_node$$124$$.subId ? $context$$160_node$$124$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["nodes"]};
  }});
});
