/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTagCloud"], function($oj$$73$$, $$$$66$$, $comp$$16$$, $base$$11$$, $dvt$$9$$) {
  $oj$$73$$.$__registerWidget$("oj.ojTagCloud", $$$$66$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$162$$, $callback$$129$$, $callbackObj$$12$$) {
    return $dvt$$9$$.TagCloud.newInstance($context$$162$$, $callback$$129$$, $callbackObj$$12$$);
  }, $_ConvertLocatorToSubId$:function($locator$$58$$) {
    var $subId$$62$$ = $locator$$58$$.subId;
    "oj-tagcloud-item" == $subId$$62$$ ? $subId$$62$$ = "item[" + $locator$$58$$.index + "]" : "oj-tagcloud-tooltip" == $subId$$62$$ && ($subId$$62$$ = "tooltip");
    return $subId$$62$$;
  }, $_ConvertSubIdToLocator$:function($subId$$63$$) {
    var $locator$$59$$ = {};
    0 == $subId$$63$$.indexOf("item") ? ($locator$$59$$.subId = "oj-tagcloud-item", $locator$$59$$.index = this.$_GetFirstIndex$($subId$$63$$)) : "tooltip" == $subId$$63$$ && ($locator$$59$$.subId = "oj-tagcloud-tooltip");
    return $locator$$59$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$20$$ = this._super();
    $styleClasses$$20$$.push("oj-tagcloud");
    return $styleClasses$$20$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$21$$ = this._super();
    $styleClasses$$21$$["oj-tagcloud"] = {path:"styleDefaults/style", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$21$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$19$$ = this.options.translations, $ret$$58$$ = this._super();
    $ret$$58$$["DvtUtilBundle.TAG_CLOUD"] = $translations$$19$$.componentName;
    return $ret$$58$$;
  }, getItem:function($index$$291$$) {
    return this.$_component$.getAutomation().getItem($index$$291$$);
  }, getItemCount:function() {
    return this.$_component$.getAutomation().getItemCount();
  }, getContextByNode:function($context$$163_node$$128$$) {
    return($context$$163_node$$128$$ = this.getSubIdByNode($context$$163_node$$128$$)) && "oj-tagcloud-tooltip" !== $context$$163_node$$128$$.subId ? $context$$163_node$$128$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["items"]};
  }});
});
