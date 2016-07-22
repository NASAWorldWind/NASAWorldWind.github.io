define([], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
var D={};D.$JSCompiler_identityFn$$ = function() {
  return function($JSCompiler_identityFn_value$$) {
    return $JSCompiler_identityFn_value$$
  }
};
D.$JSCompiler_emptyFn$$ = function() {
  return function() {
  }
};
D.$JSCompiler_set$$ = function($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
};
D.$JSCompiler_get$$ = function($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
};
D.$JSCompiler_returnArg$$ = function($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
};
D.$goog$exportPath_$$ = function $$goog$exportPath_$$$($name$$56$$, $opt_object$$) {
  var $parts$$ = $name$$56$$.split("."), $cur$$ = eval("D");
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && void 0 !== $opt_object$$ ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
};
window.Math.floor(2147483648 * window.Math.random()).toString(36);

/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$DvtDataGridUtils$$ = function $$DvtDataGridUtils$$$($dataGrid_userAgent$$) {
  this.$scrollbarSize$ = -1;
  this.$dataGrid$ = $dataGrid_userAgent$$;
  $dataGrid_userAgent$$ = window.navigator && window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : null;
  this.$os$ = (0,D.$JSCompiler_StaticMethods__determineOS$$)($dataGrid_userAgent$$);
  this.platform = (0,D.$JSCompiler_StaticMethods__determinePlatform$$)($dataGrid_userAgent$$)
};
D.$JSCompiler_StaticMethods_getScrollbarSize$$ = function $$JSCompiler_StaticMethods_getScrollbarSize$$$($JSCompiler_StaticMethods_getScrollbarSize$self$$) {
  if(-1 == $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$) {
    var $scrollDiv$$inline_1223$$ = window.document.createElement("div");
    $scrollDiv$$inline_1223$$.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    window.document.body.appendChild($scrollDiv$$inline_1223$$);
    $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$ = $scrollDiv$$inline_1223$$.offsetWidth - $scrollDiv$$inline_1223$$.clientWidth;
    window.document.body.removeChild($scrollDiv$$inline_1223$$)
  }
  return $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$
};
D.$JSCompiler_StaticMethods_isTouchDevice$$ = function $$JSCompiler_StaticMethods_isTouchDevice$$$($JSCompiler_StaticMethods_isTouchDevice$self$$) {
  if(void 0 == $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$) {
    var $agentName$$ = window.navigator.userAgent.toLowerCase();
    $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$ = -1 != $agentName$$.indexOf("mobile") || -1 != $agentName$$.indexOf("android") ? !0 : !1
  }
  return $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$
};
D.$JSCompiler_StaticMethods_addCSSClassName$$ = function $$JSCompiler_StaticMethods_addCSSClassName$$$($domElement$$, $className$$18$$) {
  var $currentClassName$$, $classNameIndex$$;
  null != $className$$18$$ && null != $domElement$$ && ($currentClassName$$ = $domElement$$.className, $classNameIndex$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($currentClassName$$, $className$$18$$), -1 == $classNameIndex$$ && ($domElement$$.className = $currentClassName$$ ? $className$$18$$ + " " + $currentClassName$$ : $className$$18$$))
};
D.$JSCompiler_StaticMethods_removeCSSClassName$$ = function $$JSCompiler_StaticMethods_removeCSSClassName$$$($domElement$$1$$, $className$$19$$) {
  var $afterstring_currentClassName$$1$$, $beforestring_classNameIndex$$1$$, $classNameEndIndex$$;
  null != $className$$19$$ && null != $domElement$$1$$ && ($afterstring_currentClassName$$1$$ = $domElement$$1$$.className, $beforestring_classNameIndex$$1$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($afterstring_currentClassName$$1$$, $className$$19$$), -1 != $beforestring_classNameIndex$$1$$ && ($classNameEndIndex$$ = $beforestring_classNameIndex$$1$$ + $className$$19$$.length, $beforestring_classNameIndex$$1$$ = 0 == $beforestring_classNameIndex$$1$$ ? null : $afterstring_currentClassName$$1$$.substring(0, 
  $beforestring_classNameIndex$$1$$), $afterstring_currentClassName$$1$$ = $classNameEndIndex$$ == $afterstring_currentClassName$$1$$.length ? null : $afterstring_currentClassName$$1$$.substring($classNameEndIndex$$ + 1), $domElement$$1$$.className = null == $beforestring_classNameIndex$$1$$ ? null == $afterstring_currentClassName$$1$$ ? "" : $afterstring_currentClassName$$1$$ : null == $afterstring_currentClassName$$1$$ ? $beforestring_classNameIndex$$1$$ : $beforestring_classNameIndex$$1$$ + $afterstring_currentClassName$$1$$))
};
D.$JSCompiler_StaticMethods_containsCSSClassName$$ = function $$JSCompiler_StaticMethods_containsCSSClassName$$$($domElement$$2$$, $className$$20$$) {
  return null != $className$$20$$ && null != $domElement$$2$$ ? -1 != (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($domElement$$2$$.className, $className$$20$$) : !1
};
D.$DvtDataGridUtils$_getCSSClassNameIndex$$ = function $$DvtDataGridUtils$_getCSSClassNameIndex$$$($currentClassName$$2$$, $className$$21$$) {
  var $classNameLength$$, $currentClassNameLength$$, $nameIndex$$, $hasStart$$, $endIndex$$11_hasEnd$$, $lastNameIndex$$;
  if(!$currentClassName$$2$$ || !$currentClassName$$2$$.indexOf) {
    return-1
  }
  if($className$$21$$ === $currentClassName$$2$$) {
    return 0
  }
  $classNameLength$$ = $className$$21$$.length;
  $currentClassNameLength$$ = $currentClassName$$2$$.length;
  $nameIndex$$ = $currentClassName$$2$$.indexOf($className$$21$$);
  if(0 <= $nameIndex$$) {
    $hasStart$$ = 0 == $nameIndex$$ || " " == $currentClassName$$2$$.charAt($nameIndex$$ - 1);
    $endIndex$$11_hasEnd$$ = $nameIndex$$ + $classNameLength$$;
    $endIndex$$11_hasEnd$$ = $endIndex$$11_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$11_hasEnd$$);
    if($hasStart$$ && $endIndex$$11_hasEnd$$) {
      return $nameIndex$$
    }
    $lastNameIndex$$ = $currentClassName$$2$$.lastIndexOf($className$$21$$);
    if($lastNameIndex$$ != $nameIndex$$) {
      return $hasStart$$ = $currentClassName$$2$$.charAt($lastNameIndex$$ - 1), $endIndex$$11_hasEnd$$ = $lastNameIndex$$ + $classNameLength$$, $endIndex$$11_hasEnd$$ = $endIndex$$11_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$11_hasEnd$$), $hasStart$$ && $endIndex$$11_hasEnd$$ ? $lastNameIndex$$ : $currentClassName$$2$$.indexOf(" " + $className$$21$$ + " ")
    }
  }
  return-1
};
D.$JSCompiler_StaticMethods_ctrlEquivalent$$ = function $$JSCompiler_StaticMethods_ctrlEquivalent$$$($JSCompiler_StaticMethods_ctrlEquivalent$self$$, $event$$83$$) {
  return"Mac" === $JSCompiler_StaticMethods_ctrlEquivalent$self$$.$os$ ? $event$$83$$.metaKey : $event$$83$$.ctrlKey
};
D.$JSCompiler_StaticMethods__determineOS$$ = function $$JSCompiler_StaticMethods__determineOS$$$($userAgent$$1$$) {
  if($userAgent$$1$$) {
    if(-1 != $userAgent$$1$$.indexOf("win")) {
      return"Windows"
    }
    if(-1 != $userAgent$$1$$.indexOf("mac")) {
      return"Mac"
    }
    if(-1 != $userAgent$$1$$.indexOf("sunos")) {
      return"Solaris"
    }
  }
  return"Unknown"
};
D.$JSCompiler_StaticMethods__determinePlatform$$ = function $$JSCompiler_StaticMethods__determinePlatform$$$($userAgent$$2$$) {
  if($userAgent$$2$$ && -1 == $userAgent$$2$$.indexOf("opera")) {
    if(-1 != $userAgent$$2$$.indexOf("trident") || -1 != $userAgent$$2$$.indexOf("msie")) {
      return"ie"
    }
    if(-1 != $userAgent$$2$$.indexOf("edge")) {
      return"edge"
    }
    if(-1 != $userAgent$$2$$.indexOf("applewebkit") || -1 != $userAgent$$2$$.indexOf("safari")) {
      return"webkit"
    }
    if(-1 != $userAgent$$2$$.indexOf("gecko/")) {
      return"gecko"
    }
  }
  return"unknown"
};
D.$DvtDataGridUtils$$.prototype.empty = function $$DvtDataGridUtils$$$$empty$($elem$$29$$) {
  for(;$elem$$29$$.firstChild;) {
    this.$dataGrid$.$_remove$($elem$$29$$.firstChild)
  }
};
D.$JSCompiler_StaticMethods_supportsTransitions$$ = function $$JSCompiler_StaticMethods_supportsTransitions$$$() {
  var $s$$3$$ = (window.document.body || window.document.documentElement).style, $p$$ = "transition";
  if(/MSIE \d/.test(window.navigator.userAgent) && (null == window.document.documentMode || 11 > window.document.documentMode)) {
    return!1
  }
  if("string" == typeof $s$$3$$[$p$$]) {
    return!0
  }
  for(var $v$$1$$ = "Moz webkit Webkit Khtml O ms".split(" "), $p$$ = $p$$.charAt(0).toUpperCase() + $p$$.substr(1), $i$$57$$ = 0;$i$$57$$ < $v$$1$$.length;$i$$57$$++) {
    if("string" == typeof $s$$3$$[$v$$1$$[$i$$57$$] + $p$$]) {
      return!0
    }
  }
  return!1
};
D.$DvtDataGridOptions$$ = (0,D.$JSCompiler_set$$)("options");
D.$JSCompiler_StaticMethods_extract$$ = function $$JSCompiler_StaticMethods_extract$$$($JSCompiler_StaticMethods_extract$self_val1$$, $arg1$$, $arg2_val2$$, $arg3_val3$$, $arg4$$) {
  return null != $arg1$$ ? ($JSCompiler_StaticMethods_extract$self_val1$$ = $JSCompiler_StaticMethods_extract$self_val1$$.options[$arg1$$], null != $arg2_val2$$ && null != $JSCompiler_StaticMethods_extract$self_val1$$ ? ($arg2_val2$$ = $JSCompiler_StaticMethods_extract$self_val1$$[$arg2_val2$$], null != $arg3_val3$$ && null != $arg2_val2$$ ? ($arg3_val3$$ = $arg2_val2$$[$arg3_val3$$], null != $arg4$$ && null != $arg3_val3$$ ? $arg3_val3$$[$arg4$$] : $arg3_val3$$) : $arg2_val2$$) : $JSCompiler_StaticMethods_extract$self_val1$$) : 
  null
};
D.$DvtDataGridOptions$$.prototype.evaluate = function $$DvtDataGridOptions$$$$evaluate$($value$$49$$, $obj$$28$$) {
  return"function" == typeof $value$$49$$ ? $value$$49$$.call(this, $obj$$28$$) : $value$$49$$
};
D.$JSCompiler_StaticMethods_getRawProperty$$ = function $$JSCompiler_StaticMethods_getRawProperty$$$($JSCompiler_StaticMethods_getRawProperty$self$$, $prop$$7$$, $axis$$27$$) {
  var $arg1$$1$$, $arg2$$1$$, $arg3$$1$$;
  "row" == $axis$$27$$ || "column" == $axis$$27$$ ? ($arg1$$1$$ = "header", $arg2$$1$$ = $axis$$27$$, $arg3$$1$$ = $prop$$7$$) : "cell" == $axis$$27$$ && ($arg1$$1$$ = "cell", $arg2$$1$$ = $prop$$7$$);
  return(0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRawProperty$self$$, $arg1$$1$$, $arg2$$1$$, $arg3$$1$$)
};
D.$DvtDataGridOptions$$.prototype.$getProperty$ = function $$DvtDataGridOptions$$$$$getProperty$$($prop$$8$$, $axis$$28$$, $obj$$29$$) {
  return void 0 === $obj$$29$$ ? (0,D.$JSCompiler_StaticMethods_extract$$)(this, $prop$$8$$, $axis$$28$$) : this.evaluate((0,D.$JSCompiler_StaticMethods_getRawProperty$$)(this, $prop$$8$$, $axis$$28$$), $obj$$29$$)
};
D.$JSCompiler_StaticMethods_getRowBandingInterval$$ = function $$JSCompiler_StaticMethods_getRowBandingInterval$$$($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$) {
  $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ = $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$.$getProperty$("bandingInterval", "row");
  return null != $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ ? $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ : 0
};
D.$JSCompiler_StaticMethods_getColumnBandingInterval$$ = function $$JSCompiler_StaticMethods_getColumnBandingInterval$$$($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$) {
  $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$.$getProperty$("bandingInterval", "column");
  return null != $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ ? $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ : 0
};
D.$DvtDataGridOptions$$.prototype.$getEmptyText$ = function $$DvtDataGridOptions$$$$$getEmptyText$$() {
  return this.$getProperty$("emptyText")
};
D.$JSCompiler_StaticMethods_getHorizontalGridlines$$ = function $$JSCompiler_StaticMethods_getHorizontalGridlines$$$($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$, "gridlines", "horizontal");
  return null != $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ ? $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ : "visible"
};
D.$JSCompiler_StaticMethods_getVerticalGridlines$$ = function $$JSCompiler_StaticMethods_getVerticalGridlines$$$($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$, "gridlines", "vertical");
  return null != $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ ? $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ : "visible"
};
D.$JSCompiler_StaticMethods_getSelectionCardinality$$ = function $$JSCompiler_StaticMethods_getSelectionCardinality$$$($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$37$$) {
  var $mode$$8_val$$13$$;
  $mode$$8_val$$13$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$37$$.$getProperty$("selectionMode");
  if(void 0 == $mode$$8_val$$13$$) {
    return"none"
  }
  $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$37$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$37$$.$getSelectionMode$();
  $mode$$8_val$$13$$ = $mode$$8_val$$13$$[$JSCompiler_StaticMethods_getSelectionCardinality$self_key$$37$$];
  return null != $mode$$8_val$$13$$ ? $mode$$8_val$$13$$ : "none"
};
D.$DvtDataGridOptions$$.prototype.$getSelectionMode$ = function $$DvtDataGridOptions$$$$$getSelectionMode$$() {
  var $cardinality_mode$$9$$;
  $cardinality_mode$$9$$ = this.$getProperty$("selectionMode");
  if(void 0 == $cardinality_mode$$9$$) {
    return"cell"
  }
  $cardinality_mode$$9$$ = $cardinality_mode$$9$$.row;
  return null != $cardinality_mode$$9$$ && "none" != $cardinality_mode$$9$$ ? "row" : "cell"
};
D.$DvtDataGridOptions$$.prototype.getSelection = function $$DvtDataGridOptions$$$$getSelection$() {
  return this.$getProperty$("selection")
};
D.$JSCompiler_StaticMethods_isResizable$$ = function $$JSCompiler_StaticMethods_isResizable$$$($JSCompiler_StaticMethods_isResizable$self$$, $axis$$30_v$$, $dir$$13$$, $obj$$31$$) {
  $axis$$30_v$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_isResizable$self$$, "header", $axis$$30_v$$, "resizable", $dir$$13$$);
  return void 0 != $obj$$31$$ ? $JSCompiler_StaticMethods_isResizable$self$$.evaluate($axis$$30_v$$, $obj$$31$$) : $axis$$30_v$$
};
D.$DvtDataGridOptions$$.prototype.$getInlineStyle$ = function $$DvtDataGridOptions$$$$$getInlineStyle$$($axis$$32$$, $obj$$32$$) {
  return this.$getProperty$("style", $axis$$32$$, $obj$$32$$)
};
D.$DvtDataGridOptions$$.prototype.$getStyleClass$ = function $$DvtDataGridOptions$$$$$getStyleClass$$($axis$$33$$, $obj$$33$$) {
  return this.$getProperty$("className", $axis$$33$$, $obj$$33$$)
};
D.$JSCompiler_StaticMethods_getRenderer$$ = function $$JSCompiler_StaticMethods_getRenderer$$$($JSCompiler_StaticMethods_getRenderer$self$$, $axis$$34$$) {
  return(0,D.$JSCompiler_StaticMethods_getRawProperty$$)($JSCompiler_StaticMethods_getRenderer$self$$, "renderer", $axis$$34$$)
};
D.$JSCompiler_StaticMethods_getScrollPolicy$$ = function $$JSCompiler_StaticMethods_getScrollPolicy$$$($JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$) {
  $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ = $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$.$getProperty$("scrollPolicy");
  null == $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ && ($JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ = "auto");
  return $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$
};
D.$DvtDataGridSizingManager$$ = function $$DvtDataGridSizingManager$$$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGridSizingManager$$.prototype.$setSize$ = function $$DvtDataGridSizingManager$$$$$setSize$$($axis$$40$$, $headerKey$$, $size$$11$$) {
  this.$sizes$[$axis$$40$$][$headerKey$$] = $size$$11$$
};
D.$DvtDataGridSizingManager$$.prototype.$getSize$ = function $$DvtDataGridSizingManager$$$$$getSize$$($axis$$41$$, $headerKey$$1$$) {
  return this.$sizes$[$axis$$41$$].hasOwnProperty($headerKey$$1$$) ? this.$sizes$[$axis$$41$$][$headerKey$$1$$] : null
};
D.$DvtDataGridSizingManager$$.prototype.clear = function $$DvtDataGridSizingManager$$$$clear$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGrid$$ = function $$DvtDataGrid$$$() {
  this.$MAX_COLUMN_THRESHOLD$ = 20;
  this.$MAX_ROW_THRESHOLD$ = 30;
  this.$m_utils$ = new D.$DvtDataGridUtils$$(this);
  this.$m_discontiguousSelection$ = !1;
  this.$m_sizingManager$ = new D.$DvtDataGridSizingManager$$;
  this.$m_colHeaderHeight$ = this.$m_rowHeaderWidth$ = null;
  this.$m_styleClassDimensionMap$ = {};
  this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = !1;
  this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = void 0;
  this.$m_initialized$ = this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = !1;
  this.$callbacks$ = {};
  this.$m_readinessStack$ = []
};
(0,D.$goog$exportPath_$$)("DvtDataGrid", D.$DvtDataGrid$$);
D.$DvtDataGrid$$.VISIBILITY_STATE_HIDDEN = "hidden";
D.$DvtDataGrid$$.VISIBILITY_STATE_REFRESH = "refresh";
D.$DvtDataGrid$$.VISIBILITY_STATE_RENDER = "render";
D.$DvtDataGrid$$.VISIBILITY_STATE_VISIBLE = "visible";
D.$DvtDataGrid$$.prototype.$SetOptions$ = function $$DvtDataGrid$$$$$SetOptions$$($options$$3$$) {
  this.$m_options$ = new D.$DvtDataGridOptions$$($options$$3$$)
};
D.$DvtDataGrid$$.prototype.SetOptions = D.$DvtDataGrid$$.prototype.$SetOptions$;
D.$DvtDataGrid$$.prototype.$UpdateOptions$ = function $$DvtDataGrid$$$$$UpdateOptions$$($JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$) {
  for(var $candidate$$ in $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$) {
    $candidate$$ in this.$m_options$.options && this.$m_options$.options[$candidate$$] != $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$[$candidate$$] && (this.$m_options$.options[$candidate$$] = $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$[$candidate$$])
  }
  for($candidate$$ in $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$) {
    a: {
      $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = void 0;
      switch($candidate$$) {
        case "bandingInterval":
          var $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$ = $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = void 0, $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$ = void 0, $headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ = void 0, $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$ = 
          void 0;
          $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = this.$m_databody$.firstChild.childNodes;
          $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$ = this.getMappedStyle("banded");
          for($i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$ = 0;$i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$ < $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$.length;$i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$++) {
            (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$[$i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$], $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$[$i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$], 
            $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$);
            $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$ = $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$[$i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$].childNodes;
            for($headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ = 0;$headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ < $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$.length;$headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ += 1) {
              (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$[$headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$], $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$[$headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$], 
              $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$)
            }
          }
          var $j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$ = $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$ = $headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ = $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$ = $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$ = $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = 
          void 0, $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$ = void 0;
          $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
          if(0 < $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$) {
            $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$ = this.$m_databody$.firstChild.childNodes;
            $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$ = this.getMappedStyle("banded");
            for($i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$ = 0;$i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$ < $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$.length;$i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$ += 1) {
              $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$ = $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$[$i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$].childNodes;
              for($j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$ = 0;$j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$ < $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$.length;$j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$ += 1) {
                $headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ = this.$m_startCol$ + $j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$, 1 === window.Math.floor($headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ / $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$[$j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$], 
                $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$[$j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$], $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$[$j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$], 
                $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$[$j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$], $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$)
              }
            }
          }
          (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this);
          break;
        case "gridlines":
          var $dir$$inline_9426_value$$inline_11622$$ = $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$ = $j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$ = $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$ = $headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ = $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$ = $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$ = 
          $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = void 0, $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$), $j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$), 
          $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$ = this.$m_databody$.firstChild.childNodes, $headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ = $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$.length, $dir$$inline_9426_value$$inline_11622$$ = this.$m_resources$.isRTLMode() ? "right" : "left";
          for($JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = 0;$JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ < $headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$;$JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ += 
          1) {
            $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$ = $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$[$JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$].childNodes;
            for($colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$ = 0;$colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$ < $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$.length;$colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$ += 1) {
              "hidden" === $j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$ || (0,D.$JSCompiler_StaticMethods__isLastColumn$$)(this, $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$ + this.$m_startCol$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)(this) + (0,D.$JSCompiler_StaticMethods_getElementDir$$)($i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$[$colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$], 
              $dir$$inline_9426_value$$inline_11622$$) + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)(this, $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$[$colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$]) >= this.getWidth() ? "left" === $dir$$inline_9426_value$$inline_11622$$ ? $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$[$colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$].style.borderRightStyle = "none" : 
              $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$[$colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$].style.borderLeftStyle = "none" : "left" === $dir$$inline_9426_value$$inline_11622$$ ? $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$[$colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$].style.borderRightStyle = "" : $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$[$colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$].style.borderLeftStyle = 
              "", $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$[$colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$].style.borderBottomStyle = "hidden" === $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$ || (0,D.$JSCompiler_StaticMethods__isLastRow$$)(this, $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ + 
              this.$m_startRow$) && (0,D.$JSCompiler_StaticMethods_getRowBottom$$)(this, $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$[$JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$], null) >= this.getHeight() ? "none" : ""
            }
          }
          break;
        case "scrollPosition":
          (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this);
          break;
        case "selectionMode":
          break;
        case "emptyText":
          break;
        case "header":
          $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = this.$m_options$.options.header;
          $j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$ = $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$ = $headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ = $i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$ = $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$ = void 0;
          $j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$ = !1;
          for($bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$ in $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$) {
            if("column" == $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$ || "row" == $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$) {
              if($j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$) {
                break
              }
              "column" == $bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$ ? this.$m_colHeader$ && ($headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ = this.$m_colHeader$.firstChild.childNodes) : this.$m_rowHeader$ && ($headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$ = this.$m_rowHeader$.firstChild.childNodes);
              if($headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$) {
                for($i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$ in $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$ = $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$[$bandingClass$$inline_9407_bandingClass$$inline_9414_element$$inline_9433_horizontalGridlines$$inline_9423$$], $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$) {
                  b: {
                    var $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$ = $headers$$inline_9432_index$$inline_9413_j$$inline_9406_rowCount$$inline_9422$$, $dir$$inline_9426_value$$inline_11622$$ = $colObj$$inline_9430_j$$inline_9420_row$$inline_9404_rows$$inline_9411$$[$i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$], $i$$inline_11623$$ = void 0, $attribute$$inline_11624$$ = void 0, $val$$inline_11625$$ = void 0, $attribute$$inline_11624$$ = 
                    this.$m_resources$.getMappedAttribute($i$$inline_9405_i$$inline_9412_opt$$inline_9431_row$$inline_9421$$), $val$$inline_11625$$ = $dir$$inline_9426_value$$inline_11622$$;
                    $dir$$inline_9426_value$$inline_11622$$.width ? $val$$inline_11625$$ = $dir$$inline_9426_value$$inline_11622$$.width : $dir$$inline_9426_value$$inline_11622$$.height && ($val$$inline_11625$$ = $dir$$inline_9426_value$$inline_11622$$.height);
                    for($i$$inline_11623$$ = 0;$i$$inline_11623$$ < $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$.length;$i$$inline_11623$$++) {
                      if("disable" == $val$$inline_11625$$) {
                        $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$[$i$$inline_11623$$].setAttribute($attribute$$inline_11624$$, "false")
                      }else {
                        if("enable" == $val$$inline_11625$$) {
                          $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$[$i$$inline_11623$$].setAttribute($attribute$$inline_11624$$, "true")
                        }else {
                          $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$ = !1;
                          break b
                        }
                      }
                    }
                    $JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$ = !0
                  }
                  if(!$JSCompiler_inline_result$$11618_headers$$inline_11620_row$$inline_9416_rows$$inline_9425$$) {
                    $j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$ = !0;
                    break
                  }
                }
              }
            }
          }
          $j$$inline_9415_refresh$$inline_9434_verticalGridlines$$inline_9424$$ && (this.empty(), this.refresh(this.$m_root$));
          break;
        case "selection":
          $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = this.$m_options$.getSelection();
          null != $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$SetSelection$($JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$) : $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$.length = 
          0);
          break;
        case "currentCell":
          $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = this.$m_options$.$getProperty$("currentCell");
          (0,D.$JSCompiler_StaticMethods__updateActive$$)(this, $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$);
          break;
        default:
          $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = !1;
          break a
      }
      $JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$ = !0
    }
    if(!$JSCompiler_inline_result$$320_columnBandingInterval$$inline_9410_i$$inline_9419_obj$$inline_529_obj$$inline_9429_options$$4_rows$$inline_9403_selection$$inline_9437$$) {
      this.empty();
      this.refresh(this.$m_root$);
      break
    }
  }
};
D.$DvtDataGrid$$.prototype.UpdateOptions = D.$DvtDataGrid$$.prototype.$UpdateOptions$;
D.$DvtDataGrid$$.prototype.$SetResources$ = (0,D.$JSCompiler_set$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.SetResources = D.$DvtDataGrid$$.prototype.$SetResources$;
D.$DvtDataGrid$$.prototype.$getResources$ = (0,D.$JSCompiler_get$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.getResources = D.$DvtDataGrid$$.prototype.$getResources$;
D.$DvtDataGrid$$.prototype.$getStartRow$ = (0,D.$JSCompiler_get$$)("$m_startRow$");
D.$DvtDataGrid$$.prototype.getStartRow = D.$DvtDataGrid$$.prototype.$getStartRow$;
D.$DvtDataGrid$$.prototype.$getStartRowHeader$ = (0,D.$JSCompiler_get$$)("$m_startRowHeader$");
D.$DvtDataGrid$$.prototype.getStartRowHeader = D.$DvtDataGrid$$.prototype.$getStartRowHeader$;
D.$DvtDataGrid$$.prototype.$getStartColumn$ = (0,D.$JSCompiler_get$$)("$m_startCol$");
D.$DvtDataGrid$$.prototype.getStartColumn = D.$DvtDataGrid$$.prototype.$getStartColumn$;
D.$DvtDataGrid$$.prototype.$getStartColumnHeader$ = (0,D.$JSCompiler_get$$)("$m_startColHeader$");
D.$DvtDataGrid$$.prototype.getStartColumnHeader = D.$DvtDataGrid$$.prototype.$getStartColumnHeader$;
D.$DvtDataGrid$$.prototype.getMappedStyle = function $$DvtDataGrid$$$$getMappedStyle$($key$$22$$) {
  return this.$m_resources$.getMappedStyle($key$$22$$)
};
D.$DvtDataGrid$$.prototype.$SetDataSource$ = function $$DvtDataGrid$$$$$SetDataSource$$($dataSource$$) {
  (0,D.$JSCompiler_StaticMethods__removeDataSourceEventListeners$$)(this);
  null != $dataSource$$ && (this.$m_handleModelEventListener$ = this.$handleModelEvent$.bind(this), this.$m_handleExpandEventListener$ = this.$handleExpandEvent$.bind(this), this.$m_handleCollapseEventListener$ = this.$handleCollapseEvent$.bind(this), $dataSource$$.on("change", this.$m_handleModelEventListener$, this), $dataSource$$.on("expand", this.$m_handleExpandEventListener$, this), $dataSource$$.on("collapse", this.$m_handleCollapseEventListener$, this));
  this.$m_dataSource$ = $dataSource$$
};
D.$DvtDataGrid$$.prototype.SetDataSource = D.$DvtDataGrid$$.prototype.$SetDataSource$;
D.$DvtDataGrid$$.prototype.$getDataSource$ = (0,D.$JSCompiler_get$$)("$m_dataSource$");
D.$DvtDataGrid$$.prototype.getDataSource = D.$DvtDataGrid$$.prototype.$getDataSource$;
D.$DvtDataGrid$$.prototype.$setVisibility$ = (0,D.$JSCompiler_set$$)("$m_visibility$");
D.$DvtDataGrid$$.prototype.setVisibility = D.$DvtDataGrid$$.prototype.$setVisibility$;
D.$DvtDataGrid$$.prototype.$getVisibility$ = function $$DvtDataGrid$$$$$getVisibility$$() {
  null == this.$m_visibility$ && (null != this.$m_root$.offsetParent ? this.$setVisibility$("visible") : this.$setVisibility$("hidden"));
  return this.$m_visibility$
};
D.$DvtDataGrid$$.prototype.getVisibility = D.$DvtDataGrid$$.prototype.$getVisibility$;
D.$DvtDataGrid$$.prototype.$SetRemoveCallback$ = (0,D.$JSCompiler_set$$)("$m_removeCallback$");
D.$DvtDataGrid$$.prototype.SetRemoveCallback = D.$DvtDataGrid$$.prototype.$SetRemoveCallback$;
D.$DvtDataGrid$$.prototype.$_remove$ = function $$DvtDataGrid$$$$$_remove$$($element$$6$$) {
  null != this.$m_removeCallback$ ? this.$m_removeCallback$.call(null, $element$$6$$) : $element$$6$$.parentNode.removeChild($element$$6$$)
};
D.$DvtDataGrid$$.prototype._remove = D.$DvtDataGrid$$.prototype.$_remove$;
D.$DvtDataGrid$$.prototype.$SetCreateReadyPromiseCallback$ = (0,D.$JSCompiler_set$$)("$m_createReadyPromise$");
D.$DvtDataGrid$$.prototype.SetCreateReadyPromiseCallback = D.$DvtDataGrid$$.prototype.$SetCreateReadyPromiseCallback$;
D.$DvtDataGrid$$.prototype.$SetResolveReadyPromiseCallback$ = (0,D.$JSCompiler_set$$)("$m_resolveReadyPromise$");
D.$DvtDataGrid$$.prototype.SetResolveReadyPromiseCallback = D.$DvtDataGrid$$.prototype.$SetResolveReadyPromiseCallback$;
D.$JSCompiler_StaticMethods__signalTaskStart$$ = function $$JSCompiler_StaticMethods__signalTaskStart$$$($JSCompiler_StaticMethods__signalTaskStart$self$$) {
  $JSCompiler_StaticMethods__signalTaskStart$self$$.$m_readinessStack$ && (0 == $JSCompiler_StaticMethods__signalTaskStart$self$$.$m_readinessStack$.length && $JSCompiler_StaticMethods__signalTaskStart$self$$.$m_createReadyPromise$(), $JSCompiler_StaticMethods__signalTaskStart$self$$.$m_readinessStack$.push(1))
};
D.$JSCompiler_StaticMethods__signalTaskEnd$$ = function $$JSCompiler_StaticMethods__signalTaskEnd$$$($JSCompiler_StaticMethods__signalTaskEnd$self$$) {
  $JSCompiler_StaticMethods__signalTaskEnd$self$$.$m_readinessStack$ && 0 < $JSCompiler_StaticMethods__signalTaskEnd$self$$.$m_readinessStack$.length && ($JSCompiler_StaticMethods__signalTaskEnd$self$$.$m_readinessStack$.pop(), 0 == $JSCompiler_StaticMethods__signalTaskEnd$self$$.$m_readinessStack$.length && $JSCompiler_StaticMethods__signalTaskEnd$self$$.$m_resolveReadyPromise$())
};
D.$JSCompiler_StaticMethods__indexes$$ = function $$JSCompiler_StaticMethods__indexes$$$($JSCompiler_StaticMethods__indexes$self$$, $keys$$1$$, $callback$$26$$) {
  var $indexes$$3$$;
  $indexes$$3$$ = $JSCompiler_StaticMethods__indexes$self$$.$m_dataSource$.indexes($keys$$1$$);
  "function" === typeof $indexes$$3$$.then ? ((0,D.$JSCompiler_StaticMethods__signalTaskStart$$)($JSCompiler_StaticMethods__indexes$self$$), $indexes$$3$$.then(function($indexes$$3$$) {
    $callback$$26$$.call($JSCompiler_StaticMethods__indexes$self$$, $indexes$$3$$, $keys$$1$$);
    (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)($JSCompiler_StaticMethods__indexes$self$$)
  }, function() {
    $callback$$26$$.call($JSCompiler_StaticMethods__indexes$self$$, {row:-1, column:-1}, $keys$$1$$);
    (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)($JSCompiler_StaticMethods__indexes$self$$)
  })) : $callback$$26$$.call($JSCompiler_StaticMethods__indexes$self$$, $indexes$$3$$, $keys$$1$$)
};
D.$JSCompiler_StaticMethods__keys$$ = function $$JSCompiler_StaticMethods__keys$$$($JSCompiler_StaticMethods__keys$self$$, $indexes$$4$$, $callback$$27$$) {
  var $keys$$2$$;
  $keys$$2$$ = $JSCompiler_StaticMethods__keys$self$$.$m_dataSource$.keys($indexes$$4$$);
  "function" === typeof $keys$$2$$.then ? ((0,D.$JSCompiler_StaticMethods__signalTaskStart$$)($JSCompiler_StaticMethods__keys$self$$), $keys$$2$$.then(function($keys$$2$$) {
    $callback$$27$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$2$$, $indexes$$4$$);
    (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)($JSCompiler_StaticMethods__keys$self$$)
  }, function() {
    $callback$$27$$.call($JSCompiler_StaticMethods__keys$self$$, {row:null, column:null}, $indexes$$4$$);
    (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)($JSCompiler_StaticMethods__keys$self$$)
  })) : $callback$$27$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$2$$, $indexes$$4$$)
};
D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$ = (0,D.$JSCompiler_set$$)("$m_createContextCallback$");
D.$DvtDataGrid$$.prototype.SetCreateContextCallback = D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$;
D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$ = function $$JSCompiler_StaticMethods__isHighWatermarkScrolling$$$($JSCompiler_StaticMethods__isHighWatermarkScrolling$self$$) {
  return"scroll" != (0,D.$JSCompiler_StaticMethods_getScrollPolicy$$)($JSCompiler_StaticMethods__isHighWatermarkScrolling$self$$.$m_options$)
};
D.$DvtDataGrid$$.prototype.$destroy$ = function $$DvtDataGrid$$$$$destroy$$() {
  delete this.$m_fetching$;
  (0,D.$JSCompiler_StaticMethods__removeDataSourceEventListeners$$)(this);
  (0,D.$JSCompiler_StaticMethods__removeDomEventListeners$$)(this);
  delete this.$m_styleClassDimensionMap$;
  this.$m_styleClassDimensionMap$ = {}
};
D.$DvtDataGrid$$.prototype.destroy = D.$DvtDataGrid$$.prototype.$destroy$;
D.$JSCompiler_StaticMethods__removeDataSourceEventListeners$$ = function $$JSCompiler_StaticMethods__removeDataSourceEventListeners$$$($JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$) {
  null != $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$ && ($JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$.off("change", $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_handleModelEventListener$), $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$.off("expand", $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_handleExpandEventListener$), $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$.off("collapse", 
  $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_handleCollapseEventListener$))
};
D.$JSCompiler_StaticMethods__removeDomEventListeners$$ = function $$JSCompiler_StaticMethods__removeDomEventListeners$$$($JSCompiler_StaticMethods__removeDomEventListeners$self$$) {
  window.document.removeEventListener("mousemove", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_docMouseMoveListener$, !1);
  window.document.removeEventListener("mouseup", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_docMouseUpListener$, !1);
  null != $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$ && ($JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleDatabodyKeyDown$ && $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$.removeEventListener("keydown", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleDatabodyKeyDown$, !1), $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootFocus$ && $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$.removeEventListener("focus", 
  $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootFocus$, !1), $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootBlur$ && $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$.removeEventListener("blur", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootBlur$, !1))
};
D.$DvtDataGrid$$.prototype.$getRootElement$ = (0,D.$JSCompiler_get$$)("$m_root$");
D.$DvtDataGrid$$.prototype.getWidth = function $$DvtDataGrid$$$$getWidth$() {
  null == this.$m_width$ && (this.$m_width$ = this.$getRootElement$().clientWidth);
  return this.$m_width$
};
D.$DvtDataGrid$$.prototype.getHeight = function $$DvtDataGrid$$$$getHeight$() {
  null == this.$m_height$ && (this.$m_height$ = this.$getRootElement$().clientHeight);
  return this.$m_height$
};
D.$JSCompiler_StaticMethods_getViewportWidth$$ = function $$JSCompiler_StaticMethods_getViewportWidth$$$($JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$) {
  $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$ = $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$.getWidth();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$)
};
D.$JSCompiler_StaticMethods_getViewportHeight$$ = function $$JSCompiler_StaticMethods_getViewportHeight$$$($JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$) {
  $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$ = $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$.getHeight();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$)
};
D.$JSCompiler_StaticMethods_getFetchSize$$ = function $$JSCompiler_StaticMethods_getFetchSize$$$($JSCompiler_StaticMethods_getFetchSize$self$$, $axis$$4$$) {
  return"row" == $axis$$4$$ ? (null == $JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$) : "column" == $axis$$4$$ ? (null == $JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ && 
  ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / (0,D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$)($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$) : 0
};
D.$DvtDataGrid$$.prototype.$getEmptyText$ = function $$DvtDataGrid$$$$$getEmptyText$$() {
  var $emptyText_resources$$1$$;
  $emptyText_resources$$1$$ = this.$m_options$.$getEmptyText$();
  null == $emptyText_resources$$1$$ && ($emptyText_resources$$1$$ = this.$m_resources$, $emptyText_resources$$1$$ = $emptyText_resources$$1$$.getTranslatedText("msgNoData"));
  return $emptyText_resources$$1$$
};
D.$JSCompiler_StaticMethods__buildEmptyText$$ = function $$JSCompiler_StaticMethods__buildEmptyText$$$($JSCompiler_StaticMethods__buildEmptyText$self$$) {
  var $emptyText$$1$$, $empty$$;
  $emptyText$$1$$ = $JSCompiler_StaticMethods__buildEmptyText$self$$.$getEmptyText$();
  $empty$$ = window.document.createElement("div");
  $empty$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods__buildEmptyText$self$$, "empty");
  $empty$$.className = $JSCompiler_StaticMethods__buildEmptyText$self$$.getMappedStyle("emptytext");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($empty$$, 0 <= $JSCompiler_StaticMethods__buildEmptyText$self$$.$m_endColHeader$ ? (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods__buildEmptyText$self$$) : 0, "top");
  $empty$$.textContent = $emptyText$$1$$;
  return $JSCompiler_StaticMethods__buildEmptyText$self$$.$m_empty$ = $empty$$
};
D.$JSCompiler_StaticMethods_setDefaultDimensions$$ = function $$JSCompiler_StaticMethods_setDefaultDimensions$$$($JSCompiler_StaticMethods_setDefaultDimensions$self$$) {
  var $div$$, $resources$$2$$;
  $div$$ = window.document.createElement("div");
  $div$$.style.visibilty = "hidden";
  $resources$$2$$ = $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_resources$;
  $div$$.className = $resources$$2$$.getMappedStyle("colheadercell") + " " + $resources$$2$$.getMappedStyle("headercell");
  window.document.body.appendChild($div$$);
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultColumnWidth$ = window.Math.floor($div$$.getBoundingClientRect().width);
  $div$$.className = $resources$$2$$.getMappedStyle("row");
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultRowHeight$ = window.Math.floor($div$$.getBoundingClientRect().height);
  window.document.body.removeChild($div$$)
};
D.$JSCompiler_StaticMethods_getDefaultRowHeight$$ = function $$JSCompiler_StaticMethods_getDefaultRowHeight$$$($JSCompiler_StaticMethods_getDefaultRowHeight$self$$) {
  null == $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getDefaultRowHeight$self$$);
  return $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$
};
D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$ = function $$JSCompiler_StaticMethods_getDefaultColumnWidth$$$($JSCompiler_StaticMethods_getDefaultColumnWidth$self$$) {
  null == $JSCompiler_StaticMethods_getDefaultColumnWidth$self$$.$m_defaultColumnWidth$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getDefaultColumnWidth$self$$);
  return $JSCompiler_StaticMethods_getDefaultColumnWidth$self$$.$m_defaultColumnWidth$
};
D.$DvtDataGrid$$.prototype.$getRowHeight$ = function $$DvtDataGrid$$$$$getRowHeight$$($elem$$1$$, $key$$23$$) {
  var $rowHeight$$, $className$$5$$;
  $rowHeight$$ = this.$m_sizingManager$.$getSize$("row", $key$$23$$);
  if(null != $rowHeight$$) {
    return $rowHeight$$
  }
  if("" != $elem$$1$$.style.height) {
    return $rowHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$1$$), this.$m_sizingManager$.$setSize$("row", $key$$23$$, $rowHeight$$), $rowHeight$$
  }
  $className$$5$$ = $elem$$1$$.className;
  $rowHeight$$ = this.$m_styleClassDimensionMap$[$className$$5$$];
  null == $rowHeight$$ && ($rowHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$1$$));
  $rowHeight$$ != (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this) && this.$m_sizingManager$.$setSize$("row", $key$$23$$, $rowHeight$$);
  return this.$m_styleClassDimensionMap$[$className$$5$$] = $rowHeight$$
};
D.$DvtDataGrid$$.prototype.$getColumnWidth$ = function $$DvtDataGrid$$$$$getColumnWidth$$($elem$$2$$, $key$$24$$) {
  var $columnWidth$$, $className$$6$$;
  $columnWidth$$ = this.$m_sizingManager$.$getSize$("column", $key$$24$$);
  if(null != $columnWidth$$) {
    return $columnWidth$$
  }
  if("" != $elem$$2$$.style.width) {
    return $columnWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$2$$), this.$m_sizingManager$.$setSize$("column", $key$$24$$, $columnWidth$$), $columnWidth$$
  }
  $className$$6$$ = $elem$$2$$.className;
  $columnWidth$$ = this.$m_styleClassDimensionMap$[$className$$6$$];
  null == $columnWidth$$ && ($columnWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$2$$));
  $columnWidth$$ != (0,D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$)(this) && this.$m_sizingManager$.$setSize$("column", $key$$24$$, $columnWidth$$);
  return this.$m_styleClassDimensionMap$[$className$$6$$] = $columnWidth$$
};
D.$JSCompiler_StaticMethods_createSubId$$ = function $$JSCompiler_StaticMethods_createSubId$$$($JSCompiler_StaticMethods_createSubId$self$$, $subId$$) {
  var $id$$1$$ = $JSCompiler_StaticMethods_createSubId$self$$.$getRootElement$().id;
  null == $id$$1$$ && ($id$$1$$ = "");
  return[$id$$1$$, $subId$$].join(":")
};
D.$JSCompiler_StaticMethods_isFetchComplete$$ = function $$JSCompiler_StaticMethods_isFetchComplete$$$($JSCompiler_StaticMethods_isFetchComplete$self$$) {
  return!1 === $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.row && !1 === $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.column && !1 === $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.cells
};
D.$JSCompiler_StaticMethods__isLastRow$$ = function $$JSCompiler_StaticMethods__isLastRow$$$($JSCompiler_StaticMethods__isLastRow$self$$, $index$$49$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastRow$self$$, "row") ? $index$$49$$ === $JSCompiler_StaticMethods__isLastRow$self$$.$m_endRow$ && $JSCompiler_StaticMethods__isLastRow$self$$.$m_stopRowFetch$ : $index$$49$$ + 1 === $JSCompiler_StaticMethods__isLastRow$self$$.$m_dataSource$.getCount("row")
};
D.$JSCompiler_StaticMethods__isLastColumn$$ = function $$JSCompiler_StaticMethods__isLastColumn$$$($JSCompiler_StaticMethods__isLastColumn$self$$, $index$$50$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastColumn$self$$, "column") ? $index$$50$$ === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_endCol$ && $JSCompiler_StaticMethods__isLastColumn$self$$.$m_stopColumnFetch$ : $index$$50$$ + 1 === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_dataSource$.getCount("column")
};
D.$DvtDataGrid$$.prototype.empty = function $$DvtDataGrid$$$$empty$() {
  this.$m_empty$ && this.$m_root$.removeChild(this.$m_empty$);
  this.$m_corner$ && this.$m_root$.removeChild(this.$m_corner$);
  this.$m_bottomCorner$ && this.$m_root$.removeChild(this.$m_bottomCorner$);
  this.$m_columnHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_columnHeaderScrollbarSpacer$);
  this.$m_rowHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_rowHeaderScrollbarSpacer$);
  this.$m_root$.removeChild(this.$m_placeHolder$);
  this.$m_root$.removeChild(this.$m_status$);
  this.$m_root$.removeChild(this.$m_accSummary$);
  this.$m_root$.removeChild(this.$m_accInfo$);
  this.$m_root$.removeChild(this.$m_stateInfo$);
  this.$m_root$.removeChild(this.$m_contextInfo$);
  this.$m_root$.removeChild(this.$m_scroller$);
  this.$_remove$(this.$m_colHeader$);
  this.$_remove$(this.$m_rowHeader$);
  this.$_remove$(this.$m_databody$)
};
D.$DvtDataGrid$$.prototype.refresh = function $$DvtDataGrid$$$$refresh$($root$$) {
  (0,D.$JSCompiler_StaticMethods__removeDomEventListeners$$)(this);
  (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this);
  this.$render$($root$$)
};
D.$DvtDataGrid$$.prototype.refresh = D.$DvtDataGrid$$.prototype.refresh;
D.$JSCompiler_StaticMethods_resetInternal$$ = function $$JSCompiler_StaticMethods_resetInternal$$$($JSCompiler_StaticMethods_resetInternal$self$$) {
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_initialized$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_readinessStack$ = [];
  (0,D.$JSCompiler_StaticMethods__signalTaskStart$$)($JSCompiler_StaticMethods_resetInternal$self$$);
  (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)($JSCompiler_StaticMethods_resetInternal$self$$);
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_cursor$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_corner$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_bottomCorner$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderScrollbarSpacer$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderScrollbarSpacer$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_colHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databody$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scroller$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_empty$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_accInfo$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_accSummary$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_contextInfo$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_placeHolder$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stateInfo$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_status$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateRowCount$ = void 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateColumnCount$ = void 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowFetch$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowHeaderFetch$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnFetch$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnHeaderFetch$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowFetchSize$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnFetchSize$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_fetching$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_sizingManager$.clear();
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_styleClassDimensionMap$ = {};
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_height$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_width$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scrollHeight$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scrollWidth$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgRowHeight$ = void 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgColWidth$ = void 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultColumnWidth$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultRowHeight$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_colHeaderHeight$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderWidth$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderLevelWidths$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderLevelHeights$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_active$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_prevActive$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databodyDragState$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databodyMove$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_moveRow$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_moveRowHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_dropTarget$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_dropTargetHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_discontiguousSelection$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_docMouseMoveListener$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_docMouseUpListener$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_handleDatabodyKeyDown$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_handleRootFocus$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_handleRootBlur$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_modelEvents$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopDatabodyScroll$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_captureScrolling$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_hasHorizontalScroller$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_hasVerticalScroller$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_currentScrollLeft$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_currentScrollTop$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_resizing$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_resizingElement$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRow$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startCol$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRow$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endCol$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRowPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startColPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRowPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endColPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRowHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startColHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRowHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endColHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRowHeaderPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startColHeaderPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRowHeaderPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endColHeaderPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderLevelCount$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderLevelCount$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_sortInfo$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_resizeRequired$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_externalFocus$ = null
};
D.$JSCompiler_StaticMethods__shouldInitialize$$ = function $$JSCompiler_StaticMethods__shouldInitialize$$$($JSCompiler_StaticMethods__shouldInitialize$self$$) {
  return(0,D.$JSCompiler_StaticMethods_isFetchComplete$$)($JSCompiler_StaticMethods__shouldInitialize$self$$) && !$JSCompiler_StaticMethods__shouldInitialize$self$$.$m_initialized$ && null != $JSCompiler_StaticMethods__shouldInitialize$self$$.$m_databody$.parentNode
};
D.$JSCompiler_StaticMethods__handleInitialization$$ = function $$JSCompiler_StaticMethods__handleInitialization$$$($JSCompiler_StaticMethods__handleInitialization$self$$, $hasData$$) {
  !0 == $hasData$$ ? ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__handleInitialization$self$$), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)($JSCompiler_StaticMethods__handleInitialization$self$$), (0,D.$JSCompiler_StaticMethods_fillViewport$$)($JSCompiler_StaticMethods__handleInitialization$self$$, $JSCompiler_StaticMethods__handleInitialization$self$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__handleInitialization$self$$.$m_currentScrollTop$), (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)($JSCompiler_StaticMethods__handleInitialization$self$$) && 
  ((0,D.$JSCompiler_StaticMethods__updateActive$$)($JSCompiler_StaticMethods__handleInitialization$self$$, $JSCompiler_StaticMethods__handleInitialization$self$$.$m_options$.$getProperty$("currentCell")), $JSCompiler_StaticMethods__handleInitialization$self$$.$m_initialized$ = !0, $JSCompiler_StaticMethods__handleInitialization$self$$.fireEvent("ready", {}), (0,D.$JSCompiler_StaticMethods__runModelEventQueue$$)($JSCompiler_StaticMethods__handleInitialization$self$$))) : ($JSCompiler_StaticMethods__handleInitialization$self$$.$m_initialized$ = 
  !0, $JSCompiler_StaticMethods__handleInitialization$self$$.fireEvent("ready", {}), (0,D.$JSCompiler_StaticMethods__runModelEventQueue$$)($JSCompiler_StaticMethods__handleInitialization$self$$))
};
D.$JSCompiler_StaticMethods__runModelEventQueue$$ = function $$JSCompiler_StaticMethods__runModelEventQueue$$$($JSCompiler_StaticMethods__runModelEventQueue$self$$) {
  var $i$$7$$;
  if(null != $JSCompiler_StaticMethods__runModelEventQueue$self$$.$m_modelEvents$) {
    for($i$$7$$ = 0;$i$$7$$ < $JSCompiler_StaticMethods__runModelEventQueue$self$$.$m_modelEvents$.length;$i$$7$$++) {
      $JSCompiler_StaticMethods__runModelEventQueue$self$$.$handleModelEvent$($JSCompiler_StaticMethods__runModelEventQueue$self$$.$m_modelEvents$[$i$$7$$])
    }
    $JSCompiler_StaticMethods__runModelEventQueue$self$$.$m_modelEvents$.length = 0
  }
};
D.$DvtDataGrid$$.prototype.$render$ = function $$DvtDataGrid$$$$$render$$($empty$$inline_614_root$$1$$) {
  null != this.$m_databody$ && (this.$destroy$(), (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this));
  this.$m_timingStart$ = new window.Date;
  this.$m_fetching$ = {};
  this.$m_startCol$ = this.$m_startRow$ = 0;
  this.$m_endCol$ = this.$m_endRow$ = -1;
  this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = 0;
  this.$m_endColHeader$ = this.$m_endRowHeader$ = -1;
  this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = 0;
  var $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$, $colHeader$$inline_610$$, $rowHeader$$inline_611$$;
  this.$m_root$ = $empty$$inline_614_root$$1$$;
  this.$m_root$.setAttribute("role", "application");
  $empty$$inline_614_root$$1$$.tabIndex = 0;
  var $root$$inline_9440$$ = window.document.createElement("div");
  $root$$inline_9440$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "status");
  $root$$inline_9440$$.className = this.getMappedStyle("status");
  $root$$inline_9440$$.setAttribute("role", "status");
  $empty$$inline_614_root$$1$$.appendChild($root$$inline_9440$$);
  this.$m_status$ = $root$$inline_9440$$;
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$ = window.document.createElement("div");
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "summary");
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$.className = this.getMappedStyle("info");
  $empty$$inline_614_root$$1$$.appendChild($root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$);
  this.$m_accSummary$ = $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$;
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$ = window.document.createElement("div");
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "info");
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$.className = this.getMappedStyle("info");
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$.setAttribute("role", "status");
  $empty$$inline_614_root$$1$$.appendChild($root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$);
  this.$m_accInfo$ = $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$;
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$ = window.document.createElement("div");
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "state");
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$.className = this.getMappedStyle("info");
  $empty$$inline_614_root$$1$$.appendChild($root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$);
  this.$m_stateInfo$ = $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$;
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$ = window.document.createElement("div");
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "context");
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$.className = this.getMappedStyle("info");
  $empty$$inline_614_root$$1$$.appendChild($root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$);
  this.$m_contextInfo$ = $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$;
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$ = window.document.createElement("div");
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "placeHolder");
  $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$.className = this.getMappedStyle("info");
  $empty$$inline_614_root$$1$$.appendChild($root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$);
  this.$m_placeHolder$ = $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$;
  if(null != this.$m_dataSource$) {
    this.$m_empty$ = null;
    $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$ = this.$m_resources$.isRTLMode();
    $colHeader$$inline_610$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "column", this.getMappedStyle("colheader"));
    $rowHeader$$inline_611$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "row", this.getMappedStyle("rowheader"));
    var $root$$inline_9458$$ = window.document.createElement("div");
    $root$$inline_9458$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "scroller");
    $root$$inline_9458$$.className = this.getMappedStyle("scrollers");
    $root$$inline_9458$$.tabIndex = "-1";
    $root$$inline_9458$$.addEventListener ? $root$$inline_9458$$.addEventListener("scroll", this.$handleScroll$.bind(this), !1) : $root$$inline_9458$$.attachEvent("onscroll", this.$handleScroll$.bind(this));
    this.$m_scroller$ = $root$$inline_9458$$;
    var $root$$inline_9462$$ = window.document.createElement("div");
    $root$$inline_9462$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "databody");
    $root$$inline_9462$$.className = this.getMappedStyle("databody");
    this.$m_databody$ = $root$$inline_9462$$;
    this.fetchCells($root$$inline_9462$$, $root$$inline_9458$$, 0, 0);
    $root$$inline_9443_root$$inline_9446_root$$inline_9449_root$$inline_9452_root$$inline_9455_rtl$$inline_609$$ && ($colHeader$$inline_610$$.style.direction = "rtl", $root$$inline_9462$$.style.direction = "rtl", $root$$inline_9458$$.style.direction = "rtl");
    this.$m_isResizing$ = !1;
    this.$m_resizingElement$ = null;
    this.$m_databodyDragState$ = !1;
    this.$m_handleDatabodyKeyDown$ = this.$handleDatabodyKeyDown$.bind(this);
    this.$m_handleRootFocus$ = this.$handleRootFocus$.bind(this);
    this.$m_handleRootBlur$ = this.$handleRootBlur$.bind(this);
    this.$m_docMouseMoveListener$ = this.$handleMouseMove$.bind(this);
    this.$m_docMouseUpListener$ = this.$handleMouseUp$.bind(this);
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? ($root$$inline_9462$$.addEventListener("touchstart", this.$handleTouchStart$.bind(this), !1), $root$$inline_9462$$.addEventListener("touchmove", this.$handleTouchMove$.bind(this), !1), $root$$inline_9462$$.addEventListener("touchend", this.$handleTouchEnd$.bind(this), !1), $root$$inline_9462$$.addEventListener("touchcancel", this.$handleTouchCancel$.bind(this), !1), $colHeader$$inline_610$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), 
    !1), $colHeader$$inline_610$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), !1), $colHeader$$inline_610$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), !1), $colHeader$$inline_610$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), !1), $rowHeader$$inline_611$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), !1), $rowHeader$$inline_611$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), 
    !1), $rowHeader$$inline_611$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), !1), $rowHeader$$inline_611$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), !1), $empty$$inline_614_root$$1$$.addEventListener("focus", this.$m_handleRootFocus$, !0), $empty$$inline_614_root$$1$$.addEventListener("blur", this.$m_handleRootBlur$, !0)) : (window.document.addEventListener("mousemove", this.$m_docMouseMoveListener$, !1), window.document.addEventListener("mouseup", 
    this.$m_docMouseUpListener$, !1), $empty$$inline_614_root$$1$$.addEventListener("keydown", this.$m_handleDatabodyKeyDown$, !1), $empty$$inline_614_root$$1$$.addEventListener("focus", this.$m_handleRootFocus$, !0), $empty$$inline_614_root$$1$$.addEventListener("blur", this.$m_handleRootBlur$, !0), $root$$inline_9462$$.addEventListener("gecko" === this.$m_utils$.platform ? "DOMMouseScroll" : "mousewheel", this.$handleDatabodyMouseWheel$.bind(this), !1), $root$$inline_9462$$.addEventListener("mousedown", 
    this.$handleDatabodyMouseDown$.bind(this), !1), $root$$inline_9462$$.addEventListener("mousemove", this.$handleDatabodyMouseMove$.bind(this), !1), $root$$inline_9462$$.addEventListener("mouseup", this.$handleDatabodyMouseUp$.bind(this), !1), $root$$inline_9462$$.addEventListener("mouseout", this.$handleDatabodyMouseOut$.bind(this), !1), $root$$inline_9462$$.addEventListener("mouseover", this.$handleDatabodyMouseOver$.bind(this), !1), $rowHeader$$inline_611$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), 
    !1), $colHeader$$inline_610$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), !1), $rowHeader$$inline_611$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), !1), $colHeader$$inline_610$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), !1), $rowHeader$$inline_611$$.addEventListener("mousemove", this.$handleRowHeaderMouseMove$.bind(this), !1), $rowHeader$$inline_611$$.addEventListener("mouseup", this.$handleHeaderMouseUp$.bind(this), 
    !1), $rowHeader$$inline_611$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), !1), $colHeader$$inline_610$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), !1), $rowHeader$$inline_611$$.addEventListener("click", this.$handleHeaderClick$.bind(this), !1), $colHeader$$inline_610$$.addEventListener("click", this.$handleHeaderClick$.bind(this), !1), $root$$inline_9458$$.addEventListener("mousedown", this.$handleScrollerMouseDown$.bind(this), !1), $root$$inline_9458$$.addEventListener("mouseup", 
    this.$handleScrollerMouseUp$.bind(this), !1));
    $empty$$inline_614_root$$1$$.insertBefore($colHeader$$inline_610$$, $root$$inline_9440$$);
    $empty$$inline_614_root$$1$$.insertBefore($rowHeader$$inline_611$$, $root$$inline_9440$$);
    $empty$$inline_614_root$$1$$.insertBefore($root$$inline_9458$$, $root$$inline_9440$$);
    $empty$$inline_614_root$$1$$.insertBefore($root$$inline_9462$$, $root$$inline_9440$$);
    (0,D.$JSCompiler_StaticMethods__shouldInitialize$$)(this) && (0,D.$JSCompiler_StaticMethods__handleInitialization$$)(this, !0)
  }else {
    $empty$$inline_614_root$$1$$ = (0,D.$JSCompiler_StaticMethods__buildEmptyText$$)(this), this.$m_root$.appendChild($empty$$inline_614_root$$1$$), (0,D.$JSCompiler_StaticMethods__handleInitialization$$)(this, !1)
  }
};
D.$DvtDataGrid$$.prototype.render = D.$DvtDataGrid$$.prototype.$render$;
D.$DvtDataGrid$$.prototype.$HandleResize$ = function $$DvtDataGrid$$$$$HandleResize$$($width$$14$$, $height$$14$$) {
  $width$$14$$ = this.$getRootElement$().clientWidth;
  $height$$14$$ = this.$getRootElement$().clientHeight;
  if($width$$14$$ != this.$m_width$ || $height$$14$$ != this.$m_height$) {
    this.$m_width$ = $width$$14$$, this.$m_height$ = $height$$14$$, this.$m_columnFetchSize$ = this.$m_rowFetchSize$ = null, this.$m_initialized$ && ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$))
  }
};
D.$DvtDataGrid$$.prototype.HandleResize = D.$DvtDataGrid$$.prototype.$HandleResize$;
D.$JSCompiler_StaticMethods_resizeGrid$$ = function $$JSCompiler_StaticMethods_resizeGrid$$$($JSCompiler_StaticMethods_resizeGrid$self$$) {
  var $databodyWidth_width$$15$$, $height$$15_scrollerHeight$$, $borderStyle$$inline_627_colHeader$$2_empty$$2$$, $lastHeader$$inline_628_rowHeader$$2$$, $scroller$$1$$, $databody$$1$$, $colHeaderHeight$$1$$, $rowHeaderWidth$$1$$, $databodyContentWidth$$, $databodyContentHeight$$, $databodyHeight$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $isDatabodyVerticalScrollbarRequired$$, $scrollbarSize$$, $scrollerWidth$$;
  (0,D.$JSCompiler_StaticMethods__databodyEmpty$$)($JSCompiler_StaticMethods_resizeGrid$self$$) ? null == $JSCompiler_StaticMethods_resizeGrid$self$$.$m_empty$ && ($borderStyle$$inline_627_colHeader$$2_empty$$2$$ = (0,D.$JSCompiler_StaticMethods__buildEmptyText$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$.appendChild($borderStyle$$inline_627_colHeader$$2_empty$$2$$)) : ($databodyWidth_width$$15$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth(), 
  $height$$15_scrollerHeight$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getHeight(), $borderStyle$$inline_627_colHeader$$2_empty$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$, $lastHeader$$inline_628_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rowHeader$, $scroller$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scroller$, $databody$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$, $colHeaderHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_resizeGrid$self$$), 
  $rowHeaderWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $databodyContentWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$1$$.firstChild), $databodyContentHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$1$$.firstChild), $height$$15_scrollerHeight$$ -= $colHeaderHeight$$1$$, $scrollerWidth$$ = $databodyWidth_width$$15$$ - $rowHeaderWidth$$1$$, $databodyWidth_width$$15$$ = window.Math.min($databodyContentWidth$$, 
  $scrollerWidth$$), $databodyHeight$$ = window.Math.min($databodyContentHeight$$, $height$$15_scrollerHeight$$), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), $scrollbarSize$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, 
  $scrollerWidth$$)) ? $isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$15_scrollerHeight$$ - $scrollbarSize$$) : ($isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$15_scrollerHeight$$)) && ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, 
  $scrollerWidth$$ - $scrollbarSize$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasHorizontalScroller$ = $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$ && $height$$15_scrollerHeight$$ - $scrollbarSize$$ < $databodyHeight$$ && ($databodyHeight$$ = $height$$15_scrollerHeight$$ - $scrollbarSize$$), $isDatabodyVerticalScrollbarRequired$$ && 
  $scrollerWidth$$ - $scrollbarSize$$ < $databodyWidth_width$$15$$ && ($databodyWidth_width$$15$$ = $scrollerWidth$$ - $scrollbarSize$$), $dir$$3_isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($lastHeader$$inline_628_rowHeader$$2$$, 0, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($lastHeader$$inline_628_rowHeader$$2$$, 
  $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($lastHeader$$inline_628_rowHeader$$2$$, $databodyHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderStyle$$inline_627_colHeader$$2_empty$$2$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($borderStyle$$inline_627_colHeader$$2_empty$$2$$, $databodyWidth_width$$15$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, 
  $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$1$$, $databodyWidth_width$$15$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$1$$, $databodyHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, 
  $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$1$$, $scrollerWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$1$$, $height$$15_scrollerHeight$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollWidth$ = $databodyContentWidth$$ - $databodyWidth_width$$15$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollHeight$ = $databodyContentHeight$$ - $databodyHeight$$, null != $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$ && 
  0 <= $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeader$ && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeGrid$self$$) + $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeaderPixel$ >= $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth() && ($borderStyle$$inline_627_colHeader$$2_empty$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? "borderLeftStyle" : "borderRightStyle", $lastHeader$$inline_628_rowHeader$$2$$ = 
  (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeader$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_columnHeaderLevelCount$ - 1), $lastHeader$$inline_628_rowHeader$$2$$.style[$borderStyle$$inline_627_colHeader$$2_empty$$2$$] = "none"), (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resizeRequired$ = 
  !1)
};
D.$JSCompiler_StaticMethods_buildCorners$$ = function $$JSCompiler_StaticMethods_buildCorners$$$($JSCompiler_StaticMethods_buildCorners$self$$) {
  var $colHeaderHeight$$2$$, $rowHeaderWidth$$2$$, $bottomCorner$$, $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $dir$$4$$, $colHeaderWidth$$, $rowHeaderHeight$$, $scrollerWidth$$1$$, $scrollerHeight$$1$$;
  (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_utils$);
  $scrollerWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $scrollerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $colHeaderHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$);
  $colHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $rowHeaderWidth$$2$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$);
  $rowHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $dir$$4$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endRowHeader$ && -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endColHeader$ && (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = 
  (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "corner"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("topcorner")), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $colHeaderHeight$$2$$), null == $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$));
  null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ && null == $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = null);
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endRowHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ ? (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = 
  (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "rhSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("rowheaderspacer")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  0, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), null == $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = null));
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endColHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = 
  (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "chSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("colheaderspacer")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  0, "top"), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), null == $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = null));
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ && (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ ? $bottomCorner$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ : ($bottomCorner$$ = window.document.createElement("div"), $bottomCorner$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "bcorner"), $bottomCorner$$.className = 
  $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("bottomcorner")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner$$, $scrollerHeight$$1$$ - 
  $rowHeaderHeight$$), null == $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = $bottomCorner$$));
  null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ && null == $bottomCorner$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = null)
};
D.$JSCompiler_StaticMethods_setInitialScrollPosition$$ = function $$JSCompiler_StaticMethods_setInitialScrollPosition$$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$) {
  var $databody$$2_firstRow_scrollMode$$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$, $firstCell_rowScrollPosition$$inline_637$$;
  $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$.$getProperty$("scrollPosition");
  $databody$$2_firstRow_scrollMode$$ = void 0 == $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$ ? null : void 0 != $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$.key ? "key" : void 0 != $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$.index ? "index" : null;
  if(void 0 != $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$ && null != $databody$$2_firstRow_scrollMode$$ && ($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$, 
  "scrollPosition", "key", "column"), $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$ = null != $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$, 
  "scrollPosition", "index", "column"), $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$, $firstCell_rowScrollPosition$$inline_637$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$, "scrollPosition", "key", "row"), $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ = 
  null != $firstCell_rowScrollPosition$$inline_637$$ ? $firstCell_rowScrollPosition$$inline_637$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$, "scrollPosition", "index", "row"), !(null == $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$ && null == $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$))) {
    if("key" === $databody$$2_firstRow_scrollMode$$) {
      if(null == $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ || null == $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$) {
        $databody$$2_firstRow_scrollMode$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_databody$, $databody$$2_firstRow_scrollMode$$ = null != $databody$$2_firstRow_scrollMode$$ ? $databody$$2_firstRow_scrollMode$$.firstChild.firstChild : null, $firstCell_rowScrollPosition$$inline_637$$ = null != $databody$$2_firstRow_scrollMode$$ ? $databody$$2_firstRow_scrollMode$$.firstChild : null, null == $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ && 
        null != $databody$$2_firstRow_scrollMode$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, $databody$$2_firstRow_scrollMode$$) : null == $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$ && null != $firstCell_rowScrollPosition$$inline_637$$ && ($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ = 
        (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, $firstCell_rowScrollPosition$$inline_637$$))
      }
      (0,D.$JSCompiler_StaticMethods__indexes$$)($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, {row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$}, $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$)
    }else {
      null == $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ = 0 : null == $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$ && ($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$ = 
      0), $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$({row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_636_columnScrollPosition$$inline_634_rowScrollPosition$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_633_columnScrollPosition_scrollPosition$$inline_631$$})
    }
  }
};
D.$DvtDataGrid$$.prototype.$_intialScrollPositionCallback$ = function $$DvtDataGrid$$$$$_intialScrollPositionCallback$$($indexes$$6_rowScrollPosition$$1$$) {
  var $columnScrollPosition$$1_initialScrollLeft$$, $initialScrollTop$$ = 0;
  $columnScrollPosition$$1_initialScrollLeft$$ = -1 === $indexes$$6_rowScrollPosition$$1$$.column ? 0 : $indexes$$6_rowScrollPosition$$1$$.column;
  $indexes$$6_rowScrollPosition$$1$$ = -1 === $indexes$$6_rowScrollPosition$$1$$.row ? 0 : $indexes$$6_rowScrollPosition$$1$$.row;
  $columnScrollPosition$$1_initialScrollLeft$$ *= this.$m_avgColWidth$;
  $initialScrollTop$$ = $indexes$$6_rowScrollPosition$$1$$ * this.$m_avgRowHeight$;
  (0,D.$JSCompiler_StaticMethods__initiateScroll$$)(this, $columnScrollPosition$$1_initialScrollLeft$$, $initialScrollTop$$)
};
D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$, $expectedWidth$$) {
  var $databody$$3$$, $expected$$;
  $databody$$3$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$.$m_databody$;
  $expected$$ = null == $expectedWidth$$ ? (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$3$$) : $expectedWidth$$;
  return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$3$$.firstChild) > $expected$$ ? !0 : !1
};
D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$, $expectedHeight$$) {
  var $databody$$4$$, $expected$$1$$;
  $databody$$4$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$.$m_databody$;
  $expected$$1$$ = null == $expectedHeight$$ ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$4$$) : $expectedHeight$$;
  return(0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$4$$.firstChild) > $expected$$1$$ ? !0 : !1
};
D.$JSCompiler_StaticMethods_populateAccInfo$$ = function $$JSCompiler_StaticMethods_populateAccInfo$$$($JSCompiler_StaticMethods_populateAccInfo$self$$) {
  var $summary$$, $summaryExpanded$$;
  $summary$$ = $JSCompiler_StaticMethods_populateAccInfo$self$$.$m_resources$.getTranslatedText("accessibleSummaryExact", {rownum:$JSCompiler_StaticMethods_populateAccInfo$self$$.$m_endRow$ + 1, colnum:$JSCompiler_StaticMethods_populateAccInfo$self$$.$m_endCol$ + 1});
  $JSCompiler_StaticMethods_populateAccInfo$self$$.$m_dataSource$.getExpandedKeys && ($summaryExpanded$$ = $JSCompiler_StaticMethods_populateAccInfo$self$$.$m_resources$.getTranslatedText("accessibleSummaryExpanded", {num:$JSCompiler_StaticMethods_populateAccInfo$self$$.$m_dataSource$.getExpandedKeys().length}), $summary$$ = $summary$$ + ". " + $summaryExpanded$$);
  $JSCompiler_StaticMethods_populateAccInfo$self$$.$m_accSummary$.textContent = $summary$$ + ". "
};
D.$DvtDataGrid$$.prototype.$SetAccessibleContext$ = function $$DvtDataGrid$$$$$SetAccessibleContext$$($ancestors_context$$1$$) {
  var $label$$2$$, $col$$, $i$$9$$, $parent$$2$$, $cell_row$$1_text$$10$$;
  if(null != $ancestors_context$$1$$ && (null != $ancestors_context$$1$$.context && (this.$m_accessibleContext$ = $ancestors_context$$1$$.context), null != $ancestors_context$$1$$.state && (this.$m_stateInfo$.textContent = $ancestors_context$$1$$.state), null != $ancestors_context$$1$$.ancestors && (0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)(this))) {
    $label$$2$$ = "";
    $ancestors_context$$1$$ = $ancestors_context$$1$$.ancestors;
    $col$$ = this.$m_active$.indexes.column;
    if(null != $col$$ && 0 <= $col$$) {
      for($i$$9$$ = 0;$i$$9$$ < $ancestors_context$$1$$.length;$i$$9$$++) {
        0 < $i$$9$$ && ($label$$2$$ = $label$$2$$.concat(", ")), $parent$$2$$ = $ancestors_context$$1$$[$i$$9$$], $cell_row$$1_text$$10$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $parent$$2$$.key), null != $cell_row$$1_text$$10$$ && ($cell_row$$1_text$$10$$ = $cell_row$$1_text$$10$$.childNodes[$col$$ - this.$m_startCol$], $cell_row$$1_text$$10$$ = $cell_row$$1_text$$10$$.textContent, $cell_row$$1_text$$10$$ = null != $cell_row$$1_text$$10$$ ? $cell_row$$1_text$$10$$.replace(/\n|<br\s*\/?>/gi, 
        "").trim() : "", $label$$2$$ = $label$$2$$.concat($parent$$2$$.label).concat(" ").concat($cell_row$$1_text$$10$$))
      }
    }
    this.$m_accessibleContext$ = $label$$2$$.concat(", ").concat(this.$m_accessibleContext$)
  }
};
D.$DvtDataGrid$$.prototype.SetAccessibleContext = D.$DvtDataGrid$$.prototype.$SetAccessibleContext$;
D.$JSCompiler_StaticMethods__updateStateInfo$$ = function $$JSCompiler_StaticMethods__updateStateInfo$$$($JSCompiler_StaticMethods__updateStateInfo$self$$, $key$$25_text$$11$$, $args$$2$$) {
  $key$$25_text$$11$$ = $JSCompiler_StaticMethods__updateStateInfo$self$$.$m_resources$.getTranslatedText($key$$25_text$$11$$, $args$$2$$);
  null != $key$$25_text$$11$$ && ($JSCompiler_StaticMethods__updateStateInfo$self$$.$m_stateInfo$.textContent = $key$$25_text$$11$$)
};
D.$JSCompiler_StaticMethods__updateContextInfo$$ = function $$JSCompiler_StaticMethods__updateContextInfo$$$($JSCompiler_StaticMethods__updateContextInfo$self$$, $context$$2_info$$, $skip$$) {
  var $row$$2_text$$12$$, $column$$, $level$$11$$, $rowHeader$$3$$, $columnHeader$$;
  $row$$2_text$$12$$ = $context$$2_info$$.row;
  $column$$ = $context$$2_info$$.column;
  $level$$11$$ = $context$$2_info$$.level;
  $rowHeader$$3$$ = $context$$2_info$$.rowHeader;
  $columnHeader$$ = $context$$2_info$$.columnHeader;
  $context$$2_info$$ = "";
  null == $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ && (!(0,window.isNaN)($row$$2_text$$12$$) && "row" != $skip$$) && ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleRowContext", {index:$row$$2_text$$12$$ + 1}), null != $row$$2_text$$12$$ && ($context$$2_info$$ = $row$$2_text$$12$$));
  !(0,window.isNaN)($column$$) && "column" != $skip$$ && ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleColumnContext", {index:$column$$ + 1}), null != $row$$2_text$$12$$ && ($context$$2_info$$ = 0 === $context$$2_info$$.length ? $row$$2_text$$12$$ : $context$$2_info$$ + " " + $row$$2_text$$12$$));
  !(0,window.isNaN)($rowHeader$$3$$) && "rowHeader" != $skip$$ && ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleRowHeaderContext", {index:$rowHeader$$3$$ + 1}), null != $row$$2_text$$12$$ && ($context$$2_info$$ = 0 === $context$$2_info$$.length ? $row$$2_text$$12$$ : $context$$2_info$$ + " " + $row$$2_text$$12$$));
  !(0,window.isNaN)($columnHeader$$) && "columnHeader" != $skip$$ && ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleColumnHeaderContext", {index:$columnHeader$$ + 1}), null != $row$$2_text$$12$$ && ($context$$2_info$$ = 0 === $context$$2_info$$.length ? $row$$2_text$$12$$ : $context$$2_info$$ + " " + $row$$2_text$$12$$));
  !(0,window.isNaN)($level$$11$$) && "level" != $skip$$ && ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleLevelContext", {level:$level$$11$$ + 1}), null != $row$$2_text$$12$$ && ($context$$2_info$$ = 0 === $context$$2_info$$.length ? $row$$2_text$$12$$ : $context$$2_info$$ + " " + $row$$2_text$$12$$));
  null != $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ && ($context$$2_info$$ = $context$$2_info$$ + ", " + $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$, $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ = null);
  $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_contextInfo$.textContent = $context$$2_info$$
};
D.$JSCompiler_StaticMethods__isCountUnknown$$ = function $$JSCompiler_StaticMethods__isCountUnknown$$$($JSCompiler_StaticMethods__isCountUnknown$self$$, $axis$$5$$) {
  var $colCount_datasource_rowCount$$1$$, $colPrecision_rowPrecision$$;
  $colCount_datasource_rowCount$$1$$ = $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_dataSource$;
  return"row" === $axis$$5$$ ? (void 0 === $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("row"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("row"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$ = "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? !0 : !1), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$) : 
  "column" === $axis$$5$$ ? (void 0 === $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("column"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("column"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$ = "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? !0 : !1), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$) : 
  !1
};
D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$ = function $$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$$($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$)
};
D.$JSCompiler_StaticMethods_buildHeaders$$ = function $$JSCompiler_StaticMethods_buildHeaders$$$($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$, $styleClass$$) {
  var $root$$9$$ = window.document.createElement("div");
  $root$$9$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$ + "Header");
  $root$$9$$.className = $styleClass$$ + " " + $JSCompiler_StaticMethods_buildHeaders$self$$.getMappedStyle("header");
  "column" === $axis$$7$$ ? $JSCompiler_StaticMethods_buildHeaders$self$$.$m_colHeader$ = $root$$9$$ : "row" === $axis$$7$$ && ($JSCompiler_StaticMethods_buildHeaders$self$$.$m_rowHeader$ = $root$$9$$);
  $JSCompiler_StaticMethods_buildHeaders$self$$.fetchHeaders($axis$$7$$, 0, $root$$9$$);
  return $root$$9$$
};
D.$DvtDataGrid$$.prototype.fetchHeaders = function $$DvtDataGrid$$$$fetchHeaders$($axis$$8_headerRange$$1$$, $start$$9$$, $header$$2$$, $fetchSize$$, $callbacks$$3_successCallback$$26$$) {
  this.$m_fetching$[$axis$$8_headerRange$$1$$] || (this.$m_fetching$[$axis$$8_headerRange$$1$$] = {start:$start$$9$$}, void 0 == $fetchSize$$ && ($fetchSize$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, $axis$$8_headerRange$$1$$)), $axis$$8_headerRange$$1$$ = {axis:$axis$$8_headerRange$$1$$, start:$start$$9$$, count:$fetchSize$$, header:$header$$2$$}, $callbacks$$3_successCallback$$26$$ = null != $callbacks$$3_successCallback$$26$$ && null != $callbacks$$3_successCallback$$26$$.success ? 
  $callbacks$$3_successCallback$$26$$.success : this.$handleHeadersFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), (0,D.$JSCompiler_StaticMethods__signalTaskStart$$)(this), this.$m_dataSource$.fetchHeaders($axis$$8_headerRange$$1$$, {success:$callbacks$$3_successCallback$$26$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchSuccess$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccess$$($results$$, $headerRange$$3$$, $rowInsert$$) {
  var $axis$$10_scroller$$inline_648$$, $root$$10$$, $start$$10$$, $count$$6$$;
  if($headerRange$$3$$.start == this.$m_fetching$[$headerRange$$3$$.axis].start) {
    $axis$$10_scroller$$inline_648$$ = $headerRange$$3$$.axis;
    this.$m_fetching$[$axis$$10_scroller$$inline_648$$] = !1;
    $root$$10$$ = $headerRange$$3$$.header;
    $start$$10$$ = $headerRange$$3$$.start;
    $count$$6$$ = this.$m_dataSource$.getCount($axis$$10_scroller$$inline_648$$);
    if("column" === $axis$$10_scroller$$inline_648$$) {
      a: {
        var $renderer$$inline_649$$, $totalColumnWidth$$inline_650$$, $left$$inline_651$$, $headerCount$$inline_652$$, $c$$inline_653$$, $index$$inline_654_returnVal$$inline_657$$, $isAppend$$inline_655$$, $fragment$$inline_656$$, $className$$inline_658$$;
        null == this.$m_columnHeaderLevelCount$ && (this.$m_columnHeaderLevelCount$ = $results$$.getLevelCount());
        $headerCount$$inline_652$$ = $results$$.getCount();
        if($root$$10$$.hasChildNodes()) {
          if(0 == $headerCount$$inline_652$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column")) {
            this.$m_stopColumnHeaderFetch$ = !0;
            break a
          }
          $axis$$10_scroller$$inline_648$$ = $root$$10$$.firstChild;
          -1 == this.$m_endColHeader$ && "" == $root$$10$$.className && ($root$$10$$.className = this.getMappedStyle("colheader") + " " + this.getMappedStyle("header"), $root$$10$$.style.height = "", $axis$$10_scroller$$inline_648$$.style.height = "")
        }else {
          $axis$$10_scroller$$inline_648$$ = window.document.createElement("div"), $axis$$10_scroller$$inline_648$$.className = this.getMappedStyle("scroller") + ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""), 0 == $headerCount$$inline_652$$ && ($root$$10$$.className = "", (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($root$$10$$, 0), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($axis$$10_scroller$$inline_648$$, 0), 
          this.$m_stopColumnHeaderFetch$ = !0)
        }
        $renderer$$inline_649$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "column");
        $totalColumnWidth$$inline_650$$ = 0;
        $left$$inline_651$$ = ($isAppend$$inline_655$$ = $start$$10$$ > this.$m_endColHeader$) ? this.$m_endColHeaderPixel$ : this.$m_startColHeaderPixel$;
        $fragment$$inline_656$$ = window.document.createDocumentFragment();
        $c$$inline_653$$ = 0;
        for($className$$inline_658$$ = this.getMappedStyle("headercell") + " " + this.getMappedStyle("colheadercell");0 < $headerCount$$inline_652$$ - $c$$inline_653$$;) {
          $index$$inline_654_returnVal$$inline_657$$ = $isAppend$$inline_655$$ ? $start$$10$$ + $c$$inline_653$$ : $start$$10$$ + ($headerCount$$inline_652$$ - 1 - $c$$inline_653$$), $index$$inline_654_returnVal$$inline_657$$ = (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)(this, $fragment$$inline_656$$, $index$$inline_654_returnVal$$inline_657$$, 0, $isAppend$$inline_655$$ ? $left$$inline_651$$ + $totalColumnWidth$$inline_650$$ : $left$$inline_651$$ - $totalColumnWidth$$inline_650$$, 0, $isAppend$$inline_655$$, 
          !1, $renderer$$inline_649$$, $results$$, "column", $className$$inline_658$$, this.$m_columnHeaderLevelCount$), $c$$inline_653$$ += $index$$inline_654_returnVal$$inline_657$$.count, $totalColumnWidth$$inline_650$$ += $index$$inline_654_returnVal$$inline_657$$.totalWidth, null == this.$m_colHeaderHeight$ && (this.$m_colHeaderHeight$ = $index$$inline_654_returnVal$$inline_657$$.totalHeight, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($root$$10$$, this.$m_colHeaderHeight$))
        }
        $isAppend$$inline_655$$ ? $axis$$10_scroller$$inline_648$$.appendChild($fragment$$inline_656$$) : $axis$$10_scroller$$inline_648$$.insertBefore($fragment$$inline_656$$, $axis$$10_scroller$$inline_648$$.firstChild);
        $isAppend$$inline_655$$ ? (this.$m_endColHeader$ = $start$$10$$ + $headerCount$$inline_652$$ - 1, this.$m_endColHeaderPixel$ += $totalColumnWidth$$inline_650$$) : (this.$m_startColHeader$ -= $headerCount$$inline_652$$, this.$m_startColHeaderPixel$ -= $totalColumnWidth$$inline_650$$);
        $root$$10$$.hasChildNodes() || $root$$10$$.appendChild($axis$$10_scroller$$inline_648$$);
        !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endColHeader$ + 1 >= $count$$6$$) && (this.$m_stopColumnHeaderFetch$ = !0)
      }
      $results$$.getCount() < $headerRange$$3$$.count && (this.$m_stopColumnHeaderFetch$ = !0)
    }else {
      "row" === $axis$$10_scroller$$inline_648$$ && ((0,D.$JSCompiler_StaticMethods_buildRowHeaders$$)(this, $root$$10$$, $results$$, $start$$10$$, $count$$6$$, $rowInsert$$), $results$$.getCount() < $headerRange$$3$$.count && (this.$m_stopRowHeaderFetch$ = !0))
    }
    (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), (0,D.$JSCompiler_StaticMethods__shouldInitialize$$)(this) && !$rowInsert$$ && (0,D.$JSCompiler_StaticMethods__handleInitialization$$)(this, !0));
    this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this)
  }
  (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)(this)
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchError$ = function $$DvtDataGrid$$$$$handleHeadersFetchError$$($error$$3$$, $headerRange$$4$$) {
  this.$m_fetching$[$headerRange$$4$$.axis] = !1;
  (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)(this)
};
D.$JSCompiler_StaticMethods_createHeaderContext$$ = function $$JSCompiler_StaticMethods_createHeaderContext$$$($JSCompiler_StaticMethods_createHeaderContext$self$$, $axis$$12_key$$26$$, $index$$51$$, $data$$21$$, $metadata$$, $elem$$3$$, $level$$12$$, $extent$$, $depth$$1$$) {
  var $headerContext$$, $prop$$4$$;
  $headerContext$$ = {};
  $headerContext$$.axis = $axis$$12_key$$26$$;
  $headerContext$$.index = $index$$51$$;
  $headerContext$$.data = $data$$21$$;
  $headerContext$$.component = $JSCompiler_StaticMethods_createHeaderContext$self$$;
  $headerContext$$.datasource = $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_dataSource$;
  $headerContext$$.level = $level$$12$$;
  $headerContext$$.depth = $depth$$1$$;
  $headerContext$$.extent = $extent$$;
  null != $elem$$3$$ && ($headerContext$$.parentElement = $elem$$3$$.firstChild);
  $axis$$12_key$$26$$ = $metadata$$.key;
  null != $axis$$12_key$$26$$ && null != $elem$$3$$ && (0,D.$JSCompiler_StaticMethods__setKey$$)($JSCompiler_StaticMethods_createHeaderContext$self$$, $elem$$3$$, $axis$$12_key$$26$$);
  for($prop$$4$$ in $metadata$$) {
    $metadata$$.hasOwnProperty($prop$$4$$) && ($headerContext$$[$prop$$4$$] = $metadata$$[$prop$$4$$])
  }
  null != $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$ && $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createHeaderContext$self$$, $headerContext$$);
  return $headerContext$$
};
D.$JSCompiler_StaticMethods_buildLevelHeaders$$ = function $$JSCompiler_StaticMethods_buildLevelHeaders$$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $fragment$$1$$, $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$, $level$$13$$, $left$$4_totalLevelDimension$$, $top$$2_totalHeaderDimension$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, 
$headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$) {
  var $getLevelDimension_i$$10$$, $getHeaderDimension_headerDimensionValue$$, $levelDimension$$, $headerDimension$$, $dimensionToAdjust$$, $dimensionToAdjustValue$$, $dimensionSecond$$, $dimensionSecondValue$$, $direction$$inline_675_headerContext$$1_start$$12$$, $end$$3_headerMetadata$$, $getGrouping_header$$3$$, $extentInfo_headerDepth$$, $headerExtent$$, $headerContent_patchBefore$$, $headerData_patchAfter$$, $groupingContainer$$, $returnVal$$1$$, $levelDimensionValue$$, $totalHeaderDimensionValue$$, 
  $headerCount$$1$$, $d_inlineStyle_nextIndex_totalLevelDimensionValue$$, $styleClass$$1$$;
  $headerCount$$1$$ = $totalHeaderDimensionValue$$ = $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $levelDimensionValue$$ = 0;
  "row" === $axis$$13_sortIcon$$inline_673$$ ? ($getLevelDimension_i$$10$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getRowHeaderLevelWidth$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $getHeaderDimension_headerDimensionValue$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$getRowHeight$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $getGrouping_header$$3$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getRowHeaderContainer$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), 
  $levelDimension$$ = "width", $headerDimension$$ = "height", $dimensionToAdjust$$ = "top", $dimensionToAdjustValue$$ = $top$$2_totalHeaderDimension$$, $dimensionSecond$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_resources$.isRTLMode() ? "right" : "left", $dimensionSecondValue$$ = $left$$4_totalLevelDimension$$, $left$$4_totalLevelDimension$$ = "totalWidth", $top$$2_totalHeaderDimension$$ = "totalHeight", $direction$$inline_675_headerContext$$1_start$$12$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_startRowHeader$, 
  $end$$3_headerMetadata$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_endRowHeader$) : ($getLevelDimension_i$$10$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getColumnHeaderLevelHeight$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $getHeaderDimension_headerDimensionValue$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$getColumnWidth$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $getGrouping_header$$3$$ = 
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getColumnHeaderContainer$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $levelDimension$$ = "height", $headerDimension$$ = "width", $dimensionToAdjust$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_resources$.isRTLMode() ? "right" : "left", $dimensionToAdjustValue$$ = $left$$4_totalLevelDimension$$, $dimensionSecond$$ = "top", $dimensionSecondValue$$ = $top$$2_totalHeaderDimension$$, $left$$4_totalLevelDimension$$ = 
  "totalHeight", $top$$2_totalHeaderDimension$$ = "totalWidth", $direction$$inline_675_headerContext$$1_start$$12$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_startColHeader$, $end$$3_headerMetadata$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_endColHeader$);
  $extentInfo_headerDepth$$ = $headerSet$$1$$.getExtent($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$, $level$$13$$);
  $headerExtent$$ = $extentInfo_headerDepth$$.extent;
  $headerContent_patchBefore$$ = $extentInfo_headerDepth$$.more.before;
  $headerData_patchAfter$$ = $extentInfo_headerDepth$$.more.after;
  $extentInfo_headerDepth$$ = $headerSet$$1$$.getDepth($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$, $level$$13$$);
  if($headerContent_patchBefore$$ && $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ === $end$$3_headerMetadata$$ + 1) {
    $groupingContainer$$ = $getGrouping_header$$3$$($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ - 1, $level$$13$$, 0);
    (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent") + $headerExtent$$);
    $getGrouping_header$$3$$ = $groupingContainer$$.firstChild;
    $levelDimensionValue$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($getGrouping_header$$3$$, $levelDimension$$);
    for($getLevelDimension_i$$10$$ = 0;$getLevelDimension_i$$10$$ < $headerExtent$$;$getLevelDimension_i$$10$$) {
      $returnVal$$1$$ = "column" === $axis$$13_sortIcon$$inline_673$$ ? (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ + $getLevelDimension_i$$10$$, $level$$13$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, 
      $insert$$, $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$) : (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ + $getLevelDimension_i$$10$$, 
      $level$$13$$ + $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$), $dimensionToAdjustValue$$ += $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $totalHeaderDimensionValue$$ += $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $headerCount$$1$$ += 
      $returnVal$$1$$.count, $getLevelDimension_i$$10$$ += $returnVal$$1$$.count
    }
    (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($getGrouping_header$$3$$, $headerDimension$$) + $totalHeaderDimensionValue$$, $headerDimension$$)
  }else {
    if($headerData_patchAfter$$ && $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ === $direction$$inline_675_headerContext$$1_start$$12$$ - 1) {
      $groupingContainer$$ = $getGrouping_header$$3$$($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ + 1, $level$$13$$, 0);
      (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent") + $headerExtent$$);
      (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "start", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "start") - $headerExtent$$);
      $getGrouping_header$$3$$ = $groupingContainer$$.firstChild;
      $levelDimensionValue$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($getGrouping_header$$3$$, $levelDimension$$);
      for($getLevelDimension_i$$10$$ = 0;$getLevelDimension_i$$10$$ < $headerExtent$$;$getLevelDimension_i$$10$$) {
        $returnVal$$1$$ = "column" === $axis$$13_sortIcon$$inline_673$$ ? (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ - $getLevelDimension_i$$10$$, $level$$13$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, 
        $insert$$, $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$) : (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ - $getLevelDimension_i$$10$$, 
        $level$$13$$ + $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$), $dimensionToAdjustValue$$ -= $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $totalHeaderDimensionValue$$ += $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $headerCount$$1$$ += 
        $returnVal$$1$$.count, $getLevelDimension_i$$10$$ += $returnVal$$1$$.count
      }
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($getGrouping_header$$3$$, $headerDimension$$) + $totalHeaderDimensionValue$$, $headerDimension$$);
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$)
    }else {
      $headerData_patchAfter$$ = $headerSet$$1$$.getData($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$, $level$$13$$);
      $end$$3_headerMetadata$$ = $headerSet$$1$$.getMetadata($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$, $level$$13$$);
      $headerContent_patchBefore$$ = window.document.createElement("div");
      $headerContent_patchBefore$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercellcontent");
      $getGrouping_header$$3$$ = window.document.createElement("div");
      $getGrouping_header$$3$$.appendChild($headerContent_patchBefore$$);
      $direction$$inline_675_headerContext$$1_start$$12$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $axis$$13_sortIcon$$inline_673$$, $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$, $headerData_patchAfter$$, $end$$3_headerMetadata$$, $getGrouping_header$$3$$, $level$$13$$, $headerExtent$$, $extentInfo_headerDepth$$);
      $getGrouping_header$$3$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $axis$$13_sortIcon$$inline_673$$.charAt(0) + $direction$$inline_675_headerContext$$1_start$$12$$.key);
      $getGrouping_header$$3$$[$JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_resources$.getMappedAttribute("context")] = $direction$$inline_675_headerContext$$1_start$$12$$;
      $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$.$getInlineStyle$($axis$$13_sortIcon$$inline_673$$, $direction$$inline_675_headerContext$$1_start$$12$$);
      $styleClass$$1$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$.$getStyleClass$($axis$$13_sortIcon$$inline_673$$, $direction$$inline_675_headerContext$$1_start$$12$$);
      null != $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ && ($getGrouping_header$$3$$.style.cssText = $d_inlineStyle_nextIndex_totalLevelDimensionValue$$);
      $getGrouping_header$$3$$.className = $className$$8$$;
      null != $styleClass$$1$$ && ($getGrouping_header$$3$$.className += " " + $styleClass$$1$$);
      for($d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = 0;$d_inlineStyle_nextIndex_totalLevelDimensionValue$$ < $extentInfo_headerDepth$$;$d_inlineStyle_nextIndex_totalLevelDimensionValue$$++) {
        $levelDimensionValue$$ += $getLevelDimension_i$$10$$($level$$13$$ + $d_inlineStyle_nextIndex_totalLevelDimensionValue$$, $getGrouping_header$$3$$)
      }
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $dimensionSecondValue$$, $dimensionSecond$$);
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $levelDimensionValue$$, $levelDimension$$);
      $getHeaderDimension_headerDimensionValue$$ = $getHeaderDimension_headerDimensionValue$$($getGrouping_header$$3$$, $direction$$inline_675_headerContext$$1_start$$12$$.key);
      (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $getGrouping_header$$3$$, "depth", $extentInfo_headerDepth$$);
      $level$$13$$ != $totalLevels$$ - 1 && ($groupingContainer$$ = window.document.createElement("div"), $groupingContainer$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("groupingcontainer"), $groupingContainer$$.appendChild($getGrouping_header$$3$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "start", $isAppend$$1$$ ? $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ : 
      $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ - $headerExtent$$ + 1), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent", $headerExtent$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "level", $level$$13$$));
      if($level$$13$$ + $extentInfo_headerDepth$$ == $totalLevels$$) {
        (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $getHeaderDimension_headerDimensionValue$$, $headerDimension$$), $totalHeaderDimensionValue$$ += $getHeaderDimension_headerDimensionValue$$, $headerCount$$1$$++, $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $levelDimensionValue$$, !$isAppend$$1$$ && !$insert$$ && ($dimensionToAdjustValue$$ -= $getHeaderDimension_headerDimensionValue$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, 
        $dimensionToAdjustValue$$, $dimensionToAdjust$$))
      }else {
        for($getLevelDimension_i$$10$$ = 0;$getLevelDimension_i$$10$$ < $headerExtent$$;$getLevelDimension_i$$10$$++) {
          $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $isAppend$$1$$ ? $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ + $getLevelDimension_i$$10$$ : $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ - $getLevelDimension_i$$10$$, $returnVal$$1$$ = "column" === $axis$$13_sortIcon$$inline_673$$ ? (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, 
          $groupingContainer$$, $d_inlineStyle_nextIndex_totalLevelDimensionValue$$, $level$$13$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$) : (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, 
          $groupingContainer$$, $d_inlineStyle_nextIndex_totalLevelDimensionValue$$, $level$$13$$ + $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_673$$, $className$$8$$, $totalLevels$$), $getHeaderDimension_headerDimensionValue$$ = $returnVal$$1$$[$top$$2_totalHeaderDimension$$], 
          $dimensionToAdjustValue$$ = $isAppend$$1$$ ? $dimensionToAdjustValue$$ + $getHeaderDimension_headerDimensionValue$$ : $dimensionToAdjustValue$$ - $getHeaderDimension_headerDimensionValue$$, $totalHeaderDimensionValue$$ += $getHeaderDimension_headerDimensionValue$$, $headerCount$$1$$ += $returnVal$$1$$.count, $getLevelDimension_i$$10$$ += $returnVal$$1$$.count - 1
        }
        $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $levelDimensionValue$$ + $returnVal$$1$$[$left$$4_totalLevelDimension$$];
        !$isAppend$$1$$ && !$insert$$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
        (0,D.$JSCompiler_StaticMethods_setElementDir$$)($getGrouping_header$$3$$, $totalHeaderDimensionValue$$, $headerDimension$$)
      }
      "column" === $axis$$13_sortIcon$$inline_673$$ ? (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ + $headerExtent$$ - 1) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$) + $dimensionToAdjustValue$$ + $getHeaderDimension_headerDimensionValue$$ >= 
      $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getWidth() && ("left" === $dimensionToAdjust$$ ? $getGrouping_header$$3$$.style.borderRightStyle = "none" : $getGrouping_header$$3$$.style.borderLeftStyle = "none") : (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ + $headerExtent$$ - 
      1) && (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$) + $dimensionToAdjustValue$$ + $getHeaderDimension_headerDimensionValue$$ >= $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getHeight() && ($getGrouping_header$$3$$.style.borderBottomStyle = "none");
      "column" == $axis$$13_sortIcon$$inline_673$$ ? ($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$, $axis$$13_sortIcon$$inline_673$$, "width", $direction$$inline_675_headerContext$$1_start$$12$$), $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ = 
      "enable" == $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ ? !0 : !1) : "row" == $axis$$13_sortIcon$$inline_673$$ ? ($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$, $axis$$13_sortIcon$$inline_673$$, 
      "height", $direction$$inline_675_headerContext$$1_start$$12$$), $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ = "enable" == $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ ? !0 : !1) : $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ = 
      !1;
      $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ && (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $getGrouping_header$$3$$, "resizable", "true");
      null != $groupingContainer$$ ? $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_root$.appendChild($groupingContainer$$) : $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_root$.appendChild($getGrouping_header$$3$$);
      null != $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ ? ($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ = $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$.call($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $direction$$inline_675_headerContext$$1_start$$12$$), null != $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ && 
      (null === $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$.parentNode ? $headerContent_patchBefore$$.appendChild($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$) : null == $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$.parentNode && 
      $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$.toString && ($JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = window.document.createElement("span"), $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercelltext"), 
      $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$.appendChild(window.document.createTextNode($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$.toString())), $headerContent_patchBefore$$.appendChild($JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$))), (0,D.$JSCompiler_StaticMethods__disableAllFocusableElements$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, 
      $getGrouping_header$$3$$)) : (null == $headerData_patchAfter$$ && ($headerData_patchAfter$$ = ""), $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = window.document.createElement("span"), $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercelltext"), $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$.appendChild(window.document.createTextNode($headerData_patchAfter$$.toString())), 
      $headerContent_patchBefore$$.appendChild($JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$));
      if($JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = "column" === $axis$$13_sortIcon$$inline_673$$) {
        $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_dataSource$.getCapability("sort"), $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$.$getProperty$("sortable", $axis$$13_sortIcon$$inline_673$$, $direction$$inline_675_headerContext$$1_start$$12$$), 
        $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ = null != $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ ? $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ : !1, $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = 
        ("enable" === $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ || "auto" === $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$) && ("full" === $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ || $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ === 
        $axis$$13_sortIcon$$inline_673$$) ? !0 : !1
      }
      $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ && (null != $end$$3_headerMetadata$$.sortDirection && null == $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$ && ($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$ = {}, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.key = $end$$3_headerMetadata$$.key, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.direction = 
      $end$$3_headerMetadata$$.sortDirection, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.axis = $axis$$13_sortIcon$$inline_673$$), $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$ = window.document.createElement("div"), $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortcontainer"), 
      $axis$$13_sortIcon$$inline_673$$ = window.document.createElement("div"), $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("icon") + " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("clickableicon"), $direction$$inline_675_headerContext$$1_start$$12$$.key === (null != $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$ ? 
      $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.key : null) ? ($direction$$inline_675_headerContext$$1_start$$12$$ = null != $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$ ? $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.direction : null, "ascending" === $direction$$inline_675_headerContext$$1_start$$12$$ ? $axis$$13_sortIcon$$inline_673$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortascending") + 
      " " + $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ + " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("default") : "descending" === $direction$$inline_675_headerContext$$1_start$$12$$ && ($axis$$13_sortIcon$$inline_673$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortdescending") + " " + $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ + 
      " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("default"))) : ($JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$ += " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("disabled"), $axis$$13_sortIcon$$inline_673$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortascending") + " " + $JSCompiler_temp$$16_capability$$inline_668_iconClassString$$inline_674_renderer$$1_textWrapper$$), 
      $JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$.appendChild($axis$$13_sortIcon$$inline_673$$), $getGrouping_header$$3$$.appendChild($JSCompiler_inline_result$$170_content_index$$53_resizable$$inline_663_sortContainer$$inline_676_sortable$$inline_669_value$$inline_11627$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $getGrouping_header$$3$$, 
      "sortable", "true"));
      $isAppend$$1$$ ? null != $groupingContainer$$ ? $fragment$$1$$.appendChild($groupingContainer$$) : $fragment$$1$$.appendChild($getGrouping_header$$3$$) : null != $groupingContainer$$ ? $fragment$$1$$.firstChild ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($fragment$$1$$.firstChild, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("groupingcontainer")) ? $fragment$$1$$.insertBefore($groupingContainer$$, $fragment$$1$$.firstChild) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($fragment$$1$$.firstChild, 
      $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercell")) && $fragment$$1$$.insertBefore($groupingContainer$$, $fragment$$1$$.firstChild.nextSibling) : $fragment$$1$$.appendChild($groupingContainer$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($fragment$$1$$, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("groupingcontainer")) ? $fragment$$1$$.insertBefore($getGrouping_header$$3$$, $fragment$$1$$.firstChild.nextSibling) : 
      $fragment$$1$$.insertBefore($getGrouping_header$$3$$, $fragment$$1$$.firstChild)
    }
  }
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$ = {};
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$[$left$$4_totalLevelDimension$$] = $d_inlineStyle_nextIndex_totalLevelDimensionValue$$;
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$[$top$$2_totalHeaderDimension$$] = $totalHeaderDimensionValue$$;
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.count = $headerCount$$1$$;
  return $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$
};
D.$JSCompiler_StaticMethods_buildRowHeaders$$ = function $$JSCompiler_StaticMethods_buildRowHeaders$$$($JSCompiler_StaticMethods_buildRowHeaders$self$$, $headerRoot$$1$$, $headerSet$$2_prev$$, $rowHeader$$inline_679_start$$13$$, $totalCount$$1$$, $rowInsert$$1$$, $animation$$) {
  var $headerCount$$2$$, $scroller$$5$$, $renderer$$2$$, $isAppend$$2$$, $top$$3$$, $adjustment$$inline_680_totalRowHeight$$, $className$$9$$, $fragment$$2$$, $index$$54_returnVal$$2$$, $rowHeaderContent$$, $referenceRow$$, $c$$1$$;
  null == $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderLevelCount$ && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderLevelCount$ = $headerSet$$2_prev$$.getLevelCount());
  $headerCount$$2$$ = $headerSet$$2_prev$$.getCount();
  if(!$animation$$) {
    if($headerRoot$$1$$.hasChildNodes()) {
      if(0 == $headerCount$$2$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$, "row")) {
        $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_stopRowHeaderFetch$ = !0;
        return
      }
      $scroller$$5$$ = $headerRoot$$1$$.firstChild;
      -1 == $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ && "" == $headerRoot$$1$$.className && ($headerRoot$$1$$.className = $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("rowheader") + " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("header"), $headerRoot$$1$$.style.width = "", $scroller$$5$$.style.width = "")
    }else {
      $scroller$$5$$ = window.document.createElement("div"), $scroller$$5$$.className = $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("scroller") + ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_utils$) ? " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("scroller-mobile") : ""), 0 == $headerCount$$2$$ && ($headerRoot$$1$$.className = "", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($headerRoot$$1$$, 
      0), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$5$$, 0), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_stopRowHeaderFetch$ = !0)
    }
  }
  $renderer$$2$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_options$, "row");
  ($isAppend$$2$$ = $rowHeader$$inline_679_start$$13$$ > $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ ? !0 : !1) ? $top$$3$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ : $rowInsert$$1$$ ? ($rowHeaderContent$$ = $headerRoot$$1$$.firstChild, $referenceRow$$ = $rowHeaderContent$$.childNodes[$rowHeader$$inline_679_start$$13$$ - $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$], $top$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($referenceRow$$, 
  "top")) : $top$$3$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$;
  -1 == $totalCount$$1$$ && ($totalCount$$1$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ + $headerCount$$2$$);
  $adjustment$$inline_680_totalRowHeight$$ = 0;
  $fragment$$2$$ = window.document.createDocumentFragment();
  $c$$1$$ = 0;
  for($className$$9$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("row") + " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("headercell") + " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("rowheadercell");0 < $headerCount$$2$$ - $c$$1$$;) {
    $index$$54_returnVal$$2$$ = $isAppend$$2$$ ? $rowHeader$$inline_679_start$$13$$ + $c$$1$$ : $rowHeader$$inline_679_start$$13$$ + ($headerCount$$2$$ - 1 - $c$$1$$), $index$$54_returnVal$$2$$ = (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$, $fragment$$2$$, $index$$54_returnVal$$2$$, 0, 0, $isAppend$$2$$ ? $top$$3$$ + $adjustment$$inline_680_totalRowHeight$$ : $top$$3$$ - $adjustment$$inline_680_totalRowHeight$$, $isAppend$$2$$, $rowInsert$$1$$, 
    $renderer$$2$$, $headerSet$$2_prev$$, "row", $className$$9$$, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderLevelCount$), $c$$1$$ += $index$$54_returnVal$$2$$.count, $adjustment$$inline_680_totalRowHeight$$ += $index$$54_returnVal$$2$$.totalHeight, null == $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderWidth$ && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderWidth$ = $index$$54_returnVal$$2$$.totalWidth, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($headerRoot$$1$$, 
    $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderWidth$))
  }
  if($animation$$) {
    return $fragment$$2$$
  }
  if($isAppend$$2$$ && 0 != $headerCount$$2$$) {
    $scroller$$5$$.appendChild($fragment$$2$$), -1 != $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ && 0 != $headerCount$$2$$ && ($headerSet$$2_prev$$ = $scroller$$5$$.childNodes[$JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$], null != $headerSet$$2_prev$$ && ($headerSet$$2_prev$$.firstChild.style.borderBottomStyle = "")), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ = 
    $rowHeader$$inline_679_start$$13$$ + $headerCount$$2$$ - 1, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ += $adjustment$$inline_680_totalRowHeight$$
  }else {
    if($rowInsert$$1$$) {
      $rowHeaderContent$$.insertBefore($fragment$$2$$, $referenceRow$$);
      $rowHeader$$inline_679_start$$13$$ < $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ = $rowHeader$$inline_679_start$$13$$, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ = window.Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ - $adjustment$$inline_680_totalRowHeight$$));
      $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ += $headerCount$$2$$;
      $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ = window.Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ + $adjustment$$inline_680_totalRowHeight$$);
      for($rowHeader$$inline_679_start$$13$$ = $referenceRow$$;$rowHeader$$inline_679_start$$13$$;) {
        $rowHeader$$inline_679_start$$13$$.style.top = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$inline_679_start$$13$$, "top") + $adjustment$$inline_680_totalRowHeight$$ + "px", $rowHeader$$inline_679_start$$13$$ = $rowHeader$$inline_679_start$$13$$.nextSibling
      }
    }else {
      $scroller$$5$$.insertBefore($fragment$$2$$, $scroller$$5$$.firstChild), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ = window.Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ - $headerCount$$2$$), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ = window.Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ - $adjustment$$inline_680_totalRowHeight$$)
    }
  }
  $rowInsert$$1$$ || $headerRoot$$1$$.appendChild($scroller$$5$$);
  !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$, "row") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_buildRowHeaders$self$$) && $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ + 1 >= $totalCount$$1$$) && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_stopRowHeaderFetch$ = !0)
};
D.$DvtDataGrid$$.prototype.$_getRowHeaderContainer$ = function $$DvtDataGrid$$$$$_getRowHeaderContainer$$($index$$55$$, $level$$14$$, $currentLevel$$, $rowHeaders$$) {
  var $headerIndex$$, $headerExtent$$1$$, $headerDepth$$1$$, $i$$11$$;
  null == $rowHeaders$$ ? ($rowHeaders$$ = this.$m_rowHeader$.firstChild.childNodes, $i$$11$$ = 0) : $i$$11$$ = 1;
  if($currentLevel$$ === this.$m_rowHeaderLevelCount$ - 1) {
    return $rowHeaders$$[0].parentNode
  }
  for($i$$11$$;$i$$11$$ < $rowHeaders$$.length;$i$$11$$++) {
    if($headerIndex$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $rowHeaders$$[$i$$11$$], "start"), $headerExtent$$1$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $rowHeaders$$[$i$$11$$], "extent"), $headerDepth$$1$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $rowHeaders$$[$i$$11$$].firstChild, "depth"), $index$$55$$ >= $headerIndex$$ && $index$$55$$ < $headerIndex$$ + $headerExtent$$1$$) {
      return $level$$14$$ < $currentLevel$$ + $headerDepth$$1$$ ? $rowHeaders$$[$i$$11$$] : this.$_getRowHeaderContainer$($index$$55$$, $level$$14$$, $currentLevel$$ + $headerDepth$$1$$, $rowHeaders$$[$i$$11$$].childNodes)
    }
  }
  return null
};
D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$ = function $$JSCompiler_StaticMethods__getRowHeaderByIndex$$$($JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$, $index$$56_relativeIndex$$, $level$$15$$) {
  var $rowHeaderContainer_rowHeaderContent$$1$$;
  if(0 > $level$$15$$) {
    return null
  }
  if(1 === $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$m_rowHeaderLevelCount$) {
    return $rowHeaderContainer_rowHeaderContent$$1$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$m_rowHeader$.firstChild.childNodes, $index$$56_relativeIndex$$ -= $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$m_startRowHeader$, $rowHeaderContainer_rowHeaderContent$$1$$[$index$$56_relativeIndex$$]
  }
  $rowHeaderContainer_rowHeaderContent$$1$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$_getRowHeaderContainer$($index$$56_relativeIndex$$, $level$$15$$, 0);
  if(null == $rowHeaderContainer_rowHeaderContent$$1$$) {
    return null
  }
  if($level$$15$$ <= (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$, $rowHeaderContainer_rowHeaderContent$$1$$, "level") + (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$, $rowHeaderContainer_rowHeaderContent$$1$$.firstChild, "depth") - 1) {
    return $rowHeaderContainer_rowHeaderContent$$1$$.firstChild
  }
  $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$, $rowHeaderContainer_rowHeaderContent$$1$$, "start");
  return $rowHeaderContainer_rowHeaderContent$$1$$.childNodes[$index$$56_relativeIndex$$ - $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$ + 1]
};
D.$DvtDataGrid$$.prototype.$_getRowHeaderLevelWidth$ = function $$DvtDataGrid$$$$$_getRowHeaderLevelWidth$$($level$$16$$, $element$$7$$) {
  var $width$$16$$;
  null == this.$m_rowHeaderLevelWidths$ && (this.$m_rowHeaderLevelWidths$ = []);
  $width$$16$$ = this.$m_rowHeaderLevelWidths$[$level$$16$$];
  if(null != $width$$16$$) {
    return $width$$16$$
  }
  $width$$16$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($element$$7$$);
  return this.$m_rowHeaderLevelWidths$[$level$$16$$] = $width$$16$$
};
D.$DvtDataGrid$$.prototype.$_getColumnHeaderContainer$ = function $$DvtDataGrid$$$$$_getColumnHeaderContainer$$($index$$57$$, $level$$17$$, $currentLevel$$1$$, $columnHeaders$$) {
  var $headerIndex$$1$$, $headerExtent$$2$$, $headerDepth$$2$$, $i$$12$$;
  null == $columnHeaders$$ ? ($columnHeaders$$ = this.$m_colHeader$.firstChild.childNodes, $i$$12$$ = 0) : $i$$12$$ = 1;
  if($currentLevel$$1$$ === this.$m_columnHeaderLevelCount$ - 1) {
    return $columnHeaders$$[0].parentNode
  }
  for($i$$12$$;$i$$12$$ < $columnHeaders$$.length;$i$$12$$++) {
    if($headerIndex$$1$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $columnHeaders$$[$i$$12$$], "start"), $headerExtent$$2$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $columnHeaders$$[$i$$12$$], "extent"), $headerDepth$$2$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $columnHeaders$$[$i$$12$$].firstChild, "depth"), $index$$57$$ >= $headerIndex$$1$$ && $index$$57$$ < $headerIndex$$1$$ + $headerExtent$$2$$) {
      return $level$$17$$ < $currentLevel$$1$$ + $headerDepth$$2$$ ? $columnHeaders$$[$i$$12$$] : this.$_getColumnHeaderContainer$($index$$57$$, $level$$17$$, $currentLevel$$1$$ + $headerDepth$$2$$, $columnHeaders$$[$i$$12$$].childNodes)
    }
  }
  return null
};
D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$ = function $$JSCompiler_StaticMethods__getColumnHeaderByIndex$$$($JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$, $index$$58_relativeIndex$$1$$, $level$$18$$) {
  var $columnHeaderContainer_columnHeaderContent$$;
  if(0 > $level$$18$$) {
    return null
  }
  if(1 === $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$m_columnHeaderLevelCount$) {
    return $columnHeaderContainer_columnHeaderContent$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$m_colHeader$.firstChild.childNodes, $index$$58_relativeIndex$$1$$ -= $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$m_startColHeader$, $columnHeaderContainer_columnHeaderContent$$[$index$$58_relativeIndex$$1$$]
  }
  $columnHeaderContainer_columnHeaderContent$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$_getColumnHeaderContainer$($index$$58_relativeIndex$$1$$, $level$$18$$, 0);
  if(null == $columnHeaderContainer_columnHeaderContent$$) {
    return null
  }
  if($level$$18$$ <= (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$, $columnHeaderContainer_columnHeaderContent$$, "level") + (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$, $columnHeaderContainer_columnHeaderContent$$.firstChild, "depth") - 1) {
    return $columnHeaderContainer_columnHeaderContent$$.firstChild
  }
  $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$, $columnHeaderContainer_columnHeaderContent$$, "start");
  return $columnHeaderContainer_columnHeaderContent$$.childNodes[$index$$58_relativeIndex$$1$$ - $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$ + 1]
};
D.$DvtDataGrid$$.prototype.$_getColumnHeaderLevelHeight$ = function $$DvtDataGrid$$$$$_getColumnHeaderLevelHeight$$($level$$19$$, $element$$8$$) {
  var $height$$16$$;
  null == this.$m_columnHeaderLevelHeights$ && (this.$m_columnHeaderLevelHeights$ = []);
  $height$$16$$ = this.$m_columnHeaderLevelHeights$[$level$$19$$];
  if(null != $height$$16$$) {
    return $height$$16$$
  }
  $height$$16$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($element$$8$$);
  return this.$m_columnHeaderLevelHeights$[$level$$19$$] = $height$$16$$
};
D.$JSCompiler_StaticMethods__getAttribute$$ = function $$JSCompiler_StaticMethods__getAttribute$$$($JSCompiler_StaticMethods__getAttribute$self_value$$45$$, $element$$9$$, $attributeKey$$) {
  $JSCompiler_StaticMethods__getAttribute$self_value$$45$$ = $element$$9$$.getAttribute($JSCompiler_StaticMethods__getAttribute$self_value$$45$$.$m_resources$.getMappedAttribute($attributeKey$$));
  return(0,window.parseInt)($JSCompiler_StaticMethods__getAttribute$self_value$$45$$, 10)
};
D.$JSCompiler_StaticMethods__setAttribute$$ = function $$JSCompiler_StaticMethods__setAttribute$$$($JSCompiler_StaticMethods__setAttribute$self$$, $element$$10$$, $attributeKey$$1$$, $value$$46$$) {
  $element$$10$$.setAttribute($JSCompiler_StaticMethods__setAttribute$self$$.$m_resources$.getMappedAttribute($attributeKey$$1$$), $value$$46$$)
};
D.$DvtDataGrid$$.prototype.fetchCells = function $$DvtDataGrid$$$$fetchCells$($columnRange_databody$$5$$, $scroller$$7$$, $rowRange_rowStart$$, $colStart$$, $rowCount$$2$$, $colCount$$1$$, $callbacks$$4_successCallback$$27$$) {
  this.$m_fetching$.cells || (this.$m_fetching$.cells = {row:$rowRange_rowStart$$, column:$colStart$$}, null == $rowCount$$2$$ && ($rowCount$$2$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "row")), null == $colCount$$1$$ && ($colCount$$1$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "column")), $rowRange_rowStart$$ = {axis:"row", start:$rowRange_rowStart$$, count:$rowCount$$2$$}, $columnRange_databody$$5$$ = {axis:"column", start:$colStart$$, count:$colCount$$1$$, databody:$columnRange_databody$$5$$, 
  scroller:$scroller$$7$$}, $callbacks$$4_successCallback$$27$$ = null != $callbacks$$4_successCallback$$27$$ && null != $callbacks$$4_successCallback$$27$$.success ? $callbacks$$4_successCallback$$27$$.success : this.$handleCellsFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), (0,D.$JSCompiler_StaticMethods__signalTaskStart$$)(this), this.$m_dataSource$.fetchCells([$rowRange_rowStart$$, $columnRange_databody$$5$$], {success:$callbacks$$4_successCallback$$27$$, error:this.$handleCellsFetchError$}, 
  {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccess$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccess$$($cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$, $cellRange$$3_databody$$6$$, $prev$$1_rowInsert$$2_rows$$1$$) {
  var $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$, $scrollerWidth$$inline_725_totalColumnCount$$, $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$, $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$, $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$, $fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$, 
  $columnRange$$3_inner_viewportTop$$inline_701$$, $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$, $columnCount$$1_columnStartPixel$$inline_699$$, $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$, $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$, $columnBandingInterval$$inline_715_referenceRow$$1$$, $avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$, $avgWidth$$1_renderer$$inline_714$$;
  $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ = this.$m_dataSource$.getCount("row");
  $scrollerWidth$$inline_725_totalColumnCount$$ = this.$m_dataSource$.getCount("column");
  if(void 0 === $prev$$1_rowInsert$$2_rows$$1$$) {
    $prev$$1_rowInsert$$2_rows$$1$$ = !1;
    $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ = $cellRange$$3_databody$$6$$[0].start;
    $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ = $cellRange$$3_databody$$6$$[1].start;
    $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ = this.$m_fetching$.cells;
    $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ = $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$.row;
    $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ = $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$.column;
    if(!($requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ == $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ && $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ == $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$)) {
      (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)(this);
      return
    }
    if($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ = this.$m_startRowPixel$ == this.$m_endRowPixel$ && this.$m_startColPixel$ == this.$m_endColPixel$) {
      var $verticalGridlines$$inline_717_viewportLeft$$inline_703$$, $i$$inline_720_viewportRight$$inline_704$$;
      (0,window.isNaN)(this.$m_avgRowHeight$) || (0,window.isNaN)(this.$m_avgColWidth$) ? $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ = !0 : ($requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ = $cellRange$$3_databody$$6$$[0].start, $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ = 
      $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("row"), $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ = $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ + $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$, $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ = 
      $cellRange$$3_databody$$6$$[1].start, $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ = $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("column"), $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ *= this.$m_avgRowHeight$, $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ *= this.$m_avgRowHeight$, 
      $columnCount$$1_columnStartPixel$$inline_699$$ = this.$m_avgColWidth$ * $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$, $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ = this.$m_avgColWidth$ * ($columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ + $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$), $columnRange$$3_inner_viewportTop$$inline_701$$ = this.$m_currentScrollTop$, $fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$ = 
      this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $verticalGridlines$$inline_717_viewportLeft$$inline_703$$ = this.$m_currentScrollLeft$, $i$$inline_720_viewportRight$$inline_704$$ = this.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$), !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && (this.$m_dataSource$.getCount("row") == $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ && 
      $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ < $fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$) && ($columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ = $fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$), !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, 
      "column") && (this.$m_dataSource$.getCount("column") == $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ && $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ < $i$$inline_720_viewportRight$$inline_704$$) && ($columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ = $i$$inline_720_viewportRight$$inline_704$$), $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ = 
      $columnRange$$3_inner_viewportTop$$inline_701$$ >= $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ && $fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$ <= $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ && $verticalGridlines$$inline_717_viewportLeft$$inline_703$$ >= $columnCount$$1_columnStartPixel$$inline_699$$ && $i$$inline_720_viewportRight$$inline_704$$ <= 
      $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$);
      $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ = !$JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$
    }
    if($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$) {
      this.$m_fetching$.cells = !1;
      this.$m_captureScrolling$ || (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
      (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)(this);
      return
    }
  }
  (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
  $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ = $cellRange$$3_databody$$6$$[0];
  $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ = $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.start;
  $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ = $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("row");
  $fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$ = 0 < $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ && ($columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ > this.$m_endRow$ || $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ + $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ <= this.$m_startRow$);
  if(0 == $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && 0 < $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.count || $fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, 
  "row") && this.$m_endRow$ + $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ + 1 >= $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ || $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ < $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.count) {
    this.$m_stopRowFetch$ = !0
  }
  $columnRange$$3_inner_viewportTop$$inline_701$$ = $cellRange$$3_databody$$6$$[1];
  $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ = $columnRange$$3_inner_viewportTop$$inline_701$$.start;
  $columnCount$$1_columnStartPixel$$inline_699$$ = $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("column");
  $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ = 0 < $columnCount$$1_columnStartPixel$$inline_699$$ && ($columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ > this.$m_endCol$ || $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ + $columnCount$$1_columnStartPixel$$inline_699$$ == this.$m_startCol$);
  if(0 == $columnCount$$1_columnStartPixel$$inline_699$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && 0 < $columnRange$$3_inner_viewportTop$$inline_701$$.count || $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endCol$ + $columnCount$$1_columnStartPixel$$inline_699$$ + 1 >= $scrollerWidth$$inline_725_totalColumnCount$$ || 
  $columnCount$$1_columnStartPixel$$inline_699$$ < $columnRange$$3_inner_viewportTop$$inline_701$$.count) {
    this.$m_stopColumnFetch$ = !0
  }
  $cellRange$$3_databody$$6$$ = this.$m_databody$;
  null == $cellRange$$3_databody$$6$$ && ($cellRange$$3_databody$$6$$ = $columnRange$$3_inner_viewportTop$$inline_701$$.databody);
  $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ = this.$m_scroller$;
  null == $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ && ($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ = $columnRange$$3_inner_viewportTop$$inline_701$$.scroller);
  $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.hasChildNodes() ? $columnRange$$3_inner_viewportTop$$inline_701$$ = $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.firstChild : ($columnRange$$3_inner_viewportTop$$inline_701$$ = window.document.createElement("div"), $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.appendChild($columnRange$$3_inner_viewportTop$$inline_701$$));
  $cellRange$$3_databody$$6$$.hasChildNodes() ? $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ = $cellRange$$3_databody$$6$$.firstChild : ($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$ = window.document.createElement("div"), $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.className = 
  this.getMappedStyle("scroller") + ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""));
  if($fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$ || $prev$$1_rowInsert$$2_rows$$1$$) {
    if(($avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$ = !$prev$$1_rowInsert$$2_rows$$1$$ && $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ >= this.$m_startRow$ ? !0 : !1) ? ($columnBandingInterval$$inline_715_referenceRow$$1$$ = $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.childNodes[$columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ - 
    this.$m_startRow$], $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$ = this.$m_endRowPixel$) : $prev$$1_rowInsert$$2_rows$$1$$ ? ($columnBandingInterval$$inline_715_referenceRow$$1$$ = $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.childNodes[$columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ - this.$m_startRow$], $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$ = 
    (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnBandingInterval$$inline_715_referenceRow$$1$$, "top")) : $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$ = this.$m_startRowPixel$, $fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$ = window.document.createDocumentFragment(), $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$ = (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$, 
    $avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$ || $prev$$1_rowInsert$$2_rows$$1$$, $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$, $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$, $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$, $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$, $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$, 
    $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$), $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$ = $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$.totalRowHeight, $avgWidth$$1_renderer$$inline_714$$ = $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$.avgWidth, $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$ = $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$ / 
    $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$, $avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$) {
      $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.appendChild($fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$);
      if(-1 != this.$m_endRow$ && 0 != $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ && ($prev$$1_rowInsert$$2_rows$$1$$ = $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.childNodes[this.$m_endRow$ - this.$m_startRow$], null != $prev$$1_rowInsert$$2_rows$$1$$)) {
        $prev$$1_rowInsert$$2_rows$$1$$ = $prev$$1_rowInsert$$2_rows$$1$$.childNodes;
        for($avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$ = 0;$avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$ < $prev$$1_rowInsert$$2_rows$$1$$.length;$avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$ += 1) {
          $prev$$1_rowInsert$$2_rows$$1$$[$avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$].style.borderBottomStyle = ""
        }
      }
      this.$m_endRow$ = $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ + $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ - 1;
      this.$m_endRowPixel$ += $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$;
      $cellRange$$3_databody$$6$$.hasChildNodes() || $cellRange$$3_databody$$6$$.appendChild($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$)
    }else {
      $prev$$1_rowInsert$$2_rows$$1$$ ? ($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.insertBefore($fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$, $columnBandingInterval$$inline_715_referenceRow$$1$$), $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ < this.$m_startRow$ && (this.$m_startRow$ = $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$, 
      this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$)), this.$m_endRow$ += $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$, this.$m_endRowPixel$ += $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($columnBandingInterval$$inline_715_referenceRow$$1$$, 
      $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$)) : ($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.insertBefore($fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$, $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.firstChild), 
      this.$m_startRow$ -= $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$, this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$))
    }
  }else {
    if($columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ && ($prev$$1_rowInsert$$2_rows$$1$$ = $JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$.childNodes, $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ == $prev$$1_rowInsert$$2_rows$$1$$.length)) {
      $avgWidth$$1_renderer$$inline_714$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
      $columnBandingInterval$$inline_715_referenceRow$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
      $fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$);
      $verticalGridlines$$inline_717_viewportLeft$$inline_703$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$);
      for($i$$inline_720_viewportRight$$inline_704$$ = 0;$i$$inline_720_viewportRight$$inline_704$$ < $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$;$i$$inline_720_viewportRight$$inline_704$$ += 1) {
        $avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$ = $prev$$1_rowInsert$$2_rows$$1$$[$i$$inline_720_viewportRight$$inline_704$$], $avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$ = (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$, $avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$, $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ + 
        $i$$inline_720_viewportRight$$inline_704$$, $avgWidth$$1_renderer$$inline_714$$, !1, $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$, $i$$inline_720_viewportRight$$inline_704$$ == $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$ - 1, $columnBandingInterval$$inline_715_referenceRow$$1$$, $fragment$$3_horizontalGridlines$$inline_716_rowRangeNeedsUpdate_viewportBottom$$inline_702$$, 
        $verticalGridlines$$inline_717_viewportLeft$$inline_703$$), $avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$ = $avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$.avgWidth
      }
      $avgWidth$$1_renderer$$inline_714$$ = $avgWidth$$inline_719_i$$13_isAppend$$3_returnVal$$inline_721_row$$inline_718$$
    }
  }
  $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$ = -1 != $scrollerWidth$$inline_725_totalColumnCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerWidth$$inline_725_totalColumnCount$$ * $avgWidth$$1_renderer$$inline_714$$ : this.$m_endColPixel$;
  if(void 0 != $avgWidth$$1_renderer$$inline_714$$ && (0 == this.$m_avgColWidth$ || void 0 == this.$m_avgColWidth$)) {
    this.$m_avgColWidth$ = $avgWidth$$1_renderer$$inline_714$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$, $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnRange$$3_inner_viewportTop$$inline_701$$, $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerWidth$$inline_725_totalColumnCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$, $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnRange$$3_inner_viewportTop$$inline_701$$, $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$)
    }
  }
  $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$ = -1 != $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ * $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$ : this.$m_endRowPixel$;
  if(void 0 != $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$ && (0 == this.$m_avgRowHeight$ || void 0 == this.$m_avgRowHeight$)) {
    this.$m_avgRowHeight$ = $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$, $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnRange$$3_inner_viewportTop$$inline_701$$, 
    $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$)
  }else {
    if((-1 == $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$) || $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ * 
    $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$ != (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$, $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnRange$$3_inner_viewportTop$$inline_701$$, $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$)
    }
  }
  $columnEndPixel$$inline_700_columnRangeNeedsUpdate_columnStart$$inline_695$$ && ($columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ < this.$m_startCol$ ? this.$m_startCol$ -= $columnCount$$1_columnStartPixel$$inline_699$$ : this.$m_endCol$ = $columnStart$$1_requestCellRanges$$inline_686_requestColumnStart$$inline_688_rowEnd$$inline_694_rowEndPixel$$inline_698$$ + $columnCount$$1_columnStartPixel$$inline_699$$ - 1);
  this.$m_fetching$.cells = !1;
  this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), null != this.$m_scrollIndexAfterFetch$ ? (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, this.$m_scrollIndexAfterFetch$) : null != this.$m_scrollHeaderAfterFetch$ ? (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)(this, this.$m_scrollHeaderAfterFetch$) : (0,D.$JSCompiler_StaticMethods_isActionableMode$$)(this) || (0,D.$JSCompiler_StaticMethods__highlightActive$$)(this), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && 
  (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$, $columnCount$$inline_706_responseColumnStart$$inline_685_rowStart$$2$$ + $requestRowStart$$inline_687_rowCount$$4_rowStart$$inline_693_rowStartPixel$$inline_697$$), (0,D.$JSCompiler_StaticMethods_populateAccInfo$$)(this), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) && window.hasOwnProperty("WebKitCSSMatrix") && ($cellRange$$3_databody$$6$$.style.webkitTransform = 
  "translate3d(0, 0, 0)", null != this.$m_rowHeader$ && (this.$m_rowHeader$.style.webkitTransform = "translate3d(0, 0, 0)"), null != this.$m_colHeader$ && (this.$m_colHeader$.style.webkitTransform = "translate3d(0, 0, 0)")), (0,D.$JSCompiler_StaticMethods__shouldInitialize$$)(this) ? (0,D.$JSCompiler_StaticMethods__handleInitialization$$)(this, !0) : this.$m_initialized$ && (null == this.$m_scroller$ ? $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ = !1 : ($JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_scroller$), $scrollerWidth$$inline_725_totalColumnCount$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_scroller$), $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$ = this.$m_scroller$.firstChild, $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$), 
  $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$), $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ = this.$m_endRowPixel$ > $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ && $scrollerWidth$$inline_725_totalColumnCount$$ == 
  $cellSet$$1_scrollerContent$$inline_726_scrollerContentWidth$$inline_728_totalColumnWidth$$1_totalRowHeight$$1$$ || this.$m_endColPixel$ > $scrollerWidth$$inline_725_totalColumnCount$$ && $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ == $addResult_avgHeight_scrollerContentHeight$$inline_727_top$$4$$ ? !0 : !1), $JSCompiler_inline_result$$168_scrollerHeight$$inline_724_totalRowCount$$ || !0 == this.$m_resizeRequired$ || this.$m_endRowHeaderPixel$ > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellRange$$3_databody$$6$$) && 
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_scroller$) > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellRange$$3_databody$$6$$) || this.$m_endColHeaderPixel$ > (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cellRange$$3_databody$$6$$) && (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_scroller$) > (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cellRange$$3_databody$$6$$) ? (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this) : (this.$m_scrollWidth$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$) - 
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cellRange$$3_databody$$6$$), this.$m_scrollHeight$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_inline_result$$300_JSCompiler_temp$$299_databodyContent_responseRowStart$$inline_684_rowCount$$inline_705_rowRange$$3_scroller$$8$$) - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellRange$$3_databody$$6$$)), (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$), (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && 
  this.fireEvent("ready", {})));
  (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)(this)
};
D.$JSCompiler_StaticMethods__addRows$$ = function $$JSCompiler_StaticMethods__addRows$$$($JSCompiler_StaticMethods__addRows$self$$, $fragment$$4$$, $isAppendOrInsert$$, $top$$5$$, $rowStart$$5$$, $rowCount$$6$$, $columnStart$$3$$, $columnRangeNeedsUpdate$$1$$, $cellSet$$3$$) {
  var $renderer$$4$$, $columnBandingInterval$$1$$, $rowBandingInterval$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $row$$5$$, $avgWidth$$3_index$$59$$, $totalRowHeight$$3$$, $height$$17_returnVal$$4$$, $i$$17$$;
  $renderer$$4$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$, "cell");
  $columnBandingInterval$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $rowBandingInterval$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $horizontalGridlines$$2$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $verticalGridlines$$2$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  for($i$$17$$ = $totalRowHeight$$3$$ = 0;$i$$17$$ < $rowCount$$6$$;$i$$17$$ += 1) {
    $avgWidth$$3_index$$59$$ = $isAppendOrInsert$$ ? $rowStart$$5$$ + $i$$17$$ : $rowStart$$5$$ + ($rowCount$$6$$ - 1 - $i$$17$$), $row$$5$$ = window.document.createElement("div"), $row$$5$$.className = $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row"), 1 === window.Math.floor($avgWidth$$3_index$$59$$ / $rowBandingInterval$$) % 2 && ($row$$5$$.className += " " + $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("banded")), $JSCompiler_StaticMethods__addRows$self$$.$m_root$.appendChild($row$$5$$), 
    $height$$17_returnVal$$4$$ = (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)($JSCompiler_StaticMethods__addRows$self$$, $cellSet$$3$$, $row$$5$$, $avgWidth$$3_index$$59$$, $renderer$$4$$, !0, $columnStart$$3$$, $i$$17$$ == $rowCount$$6$$ - 1 && $columnRangeNeedsUpdate$$1$$, $columnBandingInterval$$1$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $top$$5$$), $avgWidth$$3_index$$59$$ = $height$$17_returnVal$$4$$.avgWidth, $height$$17_returnVal$$4$$ = $height$$17_returnVal$$4$$.height, $totalRowHeight$$3$$ += 
    $height$$17_returnVal$$4$$, $isAppendOrInsert$$ ? ($row$$5$$.style.top = $top$$5$$ + "px", $top$$5$$ += $height$$17_returnVal$$4$$, $fragment$$4$$.appendChild($row$$5$$)) : ($top$$5$$ -= $height$$17_returnVal$$4$$, $row$$5$$.style.top = $top$$5$$ + "px", $fragment$$4$$.insertBefore($row$$5$$, $fragment$$4$$.firstChild))
  }
  return{avgWidth:$avgWidth$$3_index$$59$$, totalRowHeight:$totalRowHeight$$3$$, top:$top$$5$$}
};
D.$JSCompiler_StaticMethods_pushRowsDown$$ = function $$JSCompiler_StaticMethods_pushRowsDown$$$($row$$6$$, $adjustment$$) {
  for(;$row$$6$$;) {
    $row$$6$$.style.top = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$6$$, "top") + $adjustment$$ + "px", $row$$6$$ = $row$$6$$.nextSibling
  }
};
D.$JSCompiler_StaticMethods_getRowHeaderWidth$$ = function $$JSCompiler_StaticMethods_getRowHeaderWidth$$$($JSCompiler_StaticMethods_getRowHeaderWidth$self$$) {
  return-1 === $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_endRowHeader$ ? 0 : $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_rowHeaderWidth$
};
D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$ = function $$JSCompiler_StaticMethods_getColumnHeaderHeight$$$($JSCompiler_StaticMethods_getColumnHeaderHeight$self$$) {
  return-1 === $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_endColHeader$ ? 0 : $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_colHeaderHeight$
};
D.$JSCompiler_StaticMethods_getRowBottom$$ = function $$JSCompiler_StaticMethods_getRowBottom$$$($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$, $row$$8$$, $bottom$$1_top$$8$$) {
  var $colHeaderHeight$$3$$;
  $colHeaderHeight$$3$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$);
  if(null != $bottom$$1_top$$8$$) {
    return $colHeaderHeight$$3$$ + $bottom$$1_top$$8$$
  }
  $bottom$$1_top$$8$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$8$$, "top");
  $JSCompiler_StaticMethods_getRowBottom$self_height$$18$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$, $row$$8$$);
  return!(0,window.isNaN)($bottom$$1_top$$8$$) && !(0,window.isNaN)($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$) ? $colHeaderHeight$$3$$ + $bottom$$1_top$$8$$ + $JSCompiler_StaticMethods_getRowBottom$self_height$$18$$ : $colHeaderHeight$$3$$
};
D.$JSCompiler_StaticMethods_addCellsToRow$$ = function $$JSCompiler_StaticMethods_addCellsToRow$$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $cellSet$$4$$, $row$$9$$, $rowIndex$$, $renderer$$5$$, $isRowFetch$$, $columnStart$$4$$, $updateColumnRangeInfo$$, $columnBandingInterval$$2$$, $horizontalGridlines$$3$$, $verticalGridlines$$3$$, $bottom$$2$$) {
  var $isAppend$$5$$, $cellContent$$, $firstColumn$$, $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$, $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$, $currentLeft$$, $dir$$5$$, $totalWidth$$, $columnCount$$2$$, $cellData_content$$1$$, $cellMetadata_metadata$$inline_733_shimHeader$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$, $j$$3$$, $cell$$1$$, $columnIndex_textWrapper$$1$$, $selectionAffordanceAppend$$, $height$$19_rowKey$$;
  $isAppend$$5$$ = $columnStart$$4$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startCol$;
  $firstColumn$$ = $row$$9$$.firstChild;
  $currentLeft$$ = $isRowFetch$$ || !$isAppend$$5$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$;
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_addCellsToRow$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$9$$.lastChild, $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) && ($selectionAffordanceAppend$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$9$$.children[$row$$9$$.children.length - 2], $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) ? $row$$9$$.children[$row$$9$$.children.length - 
  2] : $row$$9$$.lastChild);
  $dir$$5$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  $totalWidth$$ = 0;
  $columnCount$$2$$ = $cellSet$$4$$.getCount("column");
  for($j$$3$$ = 0;$j$$3$$ < $columnCount$$2$$;$j$$3$$ += 1) {
    $columnIndex_textWrapper$$1$$ = $isAppend$$5$$ || $isRowFetch$$ ? $columnStart$$4$$ + $j$$3$$ : $columnStart$$4$$ + ($columnCount$$2$$ - 1 - $j$$3$$);
    $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ = {row:$rowIndex$$, column:$columnIndex_textWrapper$$1$$};
    $cellData_content$$1$$ = $cellSet$$4$$.getData($indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$);
    $cellMetadata_metadata$$inline_733_shimHeader$$ = $cellSet$$4$$.getMetadata($indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$);
    $cell$$1$$ = window.document.createElement("div");
    $cell$$1$$.setAttribute("tabIndex", -1);
    $cellContent$$ = window.document.createElement("div");
    $cellContent$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cellcontent");
    $cell$$1$$.appendChild($cellContent$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$;
    $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$ = $cellData_content$$1$$;
    var $cellContext$$inline_735$$ = void 0, $prop$$inline_736$$ = void 0, $cellContext$$inline_735$$ = {};
    $cellContext$$inline_735$$.parentElement = $cell$$1$$.firstChild;
    $cellContext$$inline_735$$.indexes = $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$;
    $cellContext$$inline_735$$.data = $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$;
    $cellContext$$inline_735$$.component = $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$;
    $cellContext$$inline_735$$.datasource = $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$.$m_dataSource$;
    for($prop$$inline_736$$ in $cellMetadata_metadata$$inline_733_shimHeader$$) {
      $cellMetadata_metadata$$inline_733_shimHeader$$.hasOwnProperty($prop$$inline_736$$) && ($cellContext$$inline_735$$[$prop$$inline_736$$] = $cellMetadata_metadata$$inline_733_shimHeader$$[$prop$$inline_736$$])
    }
    null != $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$.$m_createContextCallback$ && $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$, $cellContext$$inline_735$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$ = $cellContext$$inline_735$$;
    $cell$$1$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, "r" + $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$.keys.row + "c" + $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$.keys.column);
    $cell$$1$$[$JSCompiler_StaticMethods_addCellsToRow$self$$.$m_resources$.getMappedAttribute("context")] = $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$;
    null == (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$9$$) && ($height$$19_rowKey$$ = $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$.keys.row, (0,D.$JSCompiler_StaticMethods__setKey$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$9$$, $height$$19_rowKey$$), -1 == $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endRowHeader$ ? ($cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, 
    "row", $rowIndex$$, null, {key:$height$$19_rowKey$$}, null, 0, 0, 1), $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("row", $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$), $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("row", $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$), 
    $cellMetadata_metadata$$inline_733_shimHeader$$ = window.document.createElement("div"), $cellMetadata_metadata$$inline_733_shimHeader$$.style.cssText = $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$, $cellMetadata_metadata$$inline_733_shimHeader$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("row") + " " + $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$, $height$$19_rowKey$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getRowHeight$($cellMetadata_metadata$$inline_733_shimHeader$$, 
    $height$$19_rowKey$$)) : $height$$19_rowKey$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getRowHeight$($row$$9$$, $height$$19_rowKey$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($row$$9$$, $height$$19_rowKey$$));
    $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$);
    null != $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ && ($cell$$1$$.style.cssText = $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$);
    "" != $cell$$1$$.style.height && ($cell$$1$$.style.height = "");
    "" != $cell$$1$$.style.width && ($cell$$1$$.style.width = "");
    $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$ = 1 === window.Math.floor($columnIndex_textWrapper$$1$$ / $columnBandingInterval$$2$$) % 2 ? $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("banded") : $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell");
    $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$);
    $cell$$1$$.className = null != $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ ? $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$ + " " + $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ : $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$;
    -1 == $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColHeader$ && 0 == $rowIndex$$ && !$JSCompiler_StaticMethods_addCellsToRow$self$$.$m_initialized$ ? ($cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, "column", $columnIndex_textWrapper$$1$$, null, {key:$JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$.keys.column}, null, 0, 0, 1), $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ = 
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("column", $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$), $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("column", $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$), $cellMetadata_metadata$$inline_733_shimHeader$$ = window.document.createElement("div"), $cellMetadata_metadata$$inline_733_shimHeader$$.style.cssText = 
    $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$, $cellMetadata_metadata$$inline_733_shimHeader$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("colheadercell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("headercell") + " " + $cellStyleClass_data$$inline_732_shimHeaderContext_styleClass$$2$$, $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getColumnWidth$($cellMetadata_metadata$$inline_733_shimHeader$$, 
    $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$.keys.column)) : $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getColumnWidth$($cell$$1$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$.keys.column);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($cell$$1$$, $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$);
    if("hidden" === $verticalGridlines$$3$$ || (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $columnIndex_textWrapper$$1$$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$) + $currentLeft$$ + $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.getWidth()) {
      "left" === $dir$$5$$ ? $cell$$1$$.style.borderRightStyle = "none" : $cell$$1$$.style.borderLeftStyle = "none"
    }
    "hidden" === $horizontalGridlines$$3$$ ? $cell$$1$$.style.borderBottomStyle = "none" : (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $rowIndex$$) && (null != $bottom$$2$$ && $columnIndex_textWrapper$$1$$ == $columnStart$$4$$ && ($bottom$$2$$ += (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$9$$)), (0,D.$JSCompiler_StaticMethods_getRowBottom$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$9$$, $bottom$$2$$) >= $JSCompiler_StaticMethods_addCellsToRow$self$$.getHeight() && 
    ($cell$$1$$.style.borderBottomStyle = "none"));
    $isAppend$$5$$ || $isRowFetch$$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$1$$, $currentLeft$$, $dir$$5$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$1$$, $currentLeft$$ - $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$, $dir$$5$$);
    $isAppend$$5$$ || $isRowFetch$$ ? ($selectionAffordanceAppend$$ ? $row$$9$$.insertBefore($cell$$1$$, $selectionAffordanceAppend$$) : $row$$9$$.appendChild($cell$$1$$), $currentLeft$$ += $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$) : ($row$$9$$.insertBefore($cell$$1$$, $firstColumn$$), $firstColumn$$ = $cell$$1$$, $currentLeft$$ -= $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$);
    null != $renderer$$5$$ ? ($cellData_content$$1$$ = $renderer$$5$$.call($JSCompiler_StaticMethods_addCellsToRow$self$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_730_cellContext$$1$$), null != $cellData_content$$1$$ && (null === $cellData_content$$1$$.parentNode || $cellData_content$$1$$.parentNode instanceof window.DocumentFragment ? $cellContent$$.appendChild($cellData_content$$1$$) : null == $cellData_content$$1$$.parentNode && $cellData_content$$1$$.toString && ($columnIndex_textWrapper$$1$$ = 
    window.document.createElement("span"), $columnIndex_textWrapper$$1$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("celltext"), $columnIndex_textWrapper$$1$$.appendChild(window.document.createTextNode($cellData_content$$1$$.toString())), $cellContent$$.appendChild($columnIndex_textWrapper$$1$$))), (0,D.$JSCompiler_StaticMethods__disableAllFocusableElements$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $cell$$1$$)) : (null == $cellData_content$$1$$ && ($cellData_content$$1$$ = 
    ""), $columnIndex_textWrapper$$1$$ = window.document.createElement("span"), $columnIndex_textWrapper$$1$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("celltext"), $columnIndex_textWrapper$$1$$.appendChild(window.document.createTextNode($cellData_content$$1$$.toString())), $cellContent$$.appendChild($columnIndex_textWrapper$$1$$));
    $updateColumnRangeInfo$$ && ($isAppend$$5$$ || $isRowFetch$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$ += $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ -= $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$, $totalWidth$$ += $indexes$$8_indexes$$inline_731_inlineStyle$$1_inlineStyleClass_width$$17$$)
  }
  return $updateColumnRangeInfo$$ && 0 < $columnCount$$2$$ ? {avgWidth:$totalWidth$$ / $columnCount$$2$$, height:$height$$19_rowKey$$} : {avgWidth:null, height:$height$$19_rowKey$$}
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = function $$DvtDataGrid$$$$$handleCellsFetchError$$($errorStatus$$, $cellRange$$4$$) {
  var $rowRange$$4$$, $columnRange$$4$$;
  this.$m_fetching$.cells = !1;
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  null == this.$m_databody$.firstChild ? (0,D.$JSCompiler_StaticMethods__shouldInitialize$$)(this) && (0,D.$JSCompiler_StaticMethods__handleInitialization$$)(this, !0) : ($rowRange$$4$$ = $cellRange$$4$$[0], $columnRange$$4$$ = $cellRange$$4$$[1], $columnRange$$4$$.start + $columnRange$$4$$.count - 1 > this.$m_endCol$ && (this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = !0), $rowRange$$4$$.start + $rowRange$$4$$.count - 1 > this.$m_endRow$ && (this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = 
  !0))
};
D.$JSCompiler_StaticMethods_showStatusText$$ = function $$JSCompiler_StaticMethods_showStatusText$$$($JSCompiler_StaticMethods_showStatusText$self$$) {
  var $left$$5_msg$$;
  $left$$5_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.$m_resources$.getTranslatedText("msgFetchingData");
  "block" != $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display && ($JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.textContent = $left$$5_msg$$, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display = "block", $left$$5_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.getWidth() / 2 - $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.offsetWidth / 2, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.left = $left$$5_msg$$ + 
  "px")
};
D.$JSCompiler_StaticMethods_hideStatusText$$ = function $$JSCompiler_StaticMethods_hideStatusText$$$($JSCompiler_StaticMethods_hideStatusText$self$$) {
  $JSCompiler_StaticMethods_hideStatusText$self$$.$m_status$.style.display = "none"
};
D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$ = function $$JSCompiler_StaticMethods_getFocusableElementsInNode$$$($JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$, $node$$3_nodes$$, $skipTabIndexCheck$$) {
  var $inputElems$$, $elem$$5$$, $nodeCount$$, $inputRegExp$$, $i$$18$$;
  $inputElems$$ = [];
  $JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$ = $JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$.$m_resources$.getMappedAttribute("tabMod");
  if(window.document.evaluate) {
    $node$$3_nodes$$ = window.document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A|.//*[@tabindex\x3e\x3d0]|.//*[@" + $JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$ + "\x3e\x3d0]", $node$$3_nodes$$, null, window.XPathResult.ANY_TYPE, null);
    for($elem$$5$$ = $node$$3_nodes$$.iterateNext();$elem$$5$$;) {
      !$elem$$5$$.disabled && ($skipTabIndexCheck$$ || !$elem$$5$$.tabIndex || 0 < $elem$$5$$.tabIndex || 0 <= (0,window.parseInt)($elem$$5$$.getAttribute($JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$))) && $inputElems$$.push($elem$$5$$), $elem$$5$$ = $node$$3_nodes$$.iterateNext()
    }
  }else {
    $node$$3_nodes$$ = $node$$3_nodes$$.getElementsByTagName("*");
    $nodeCount$$ = $node$$3_nodes$$.length;
    $inputRegExp$$ = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/;
    for($i$$18$$ = 0;$i$$18$$ < $nodeCount$$;$i$$18$$ += 1) {
      $elem$$5$$ = $node$$3_nodes$$[$i$$18$$], $elem$$5$$.tagName.match($inputRegExp$$) && (!$elem$$5$$.disabled && ($skipTabIndexCheck$$ || !$elem$$5$$.tabIndex || 0 <= $elem$$5$$.tabIndex || 0 <= (0,window.parseInt)($elem$$5$$.getAttribute($JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$)))) && $inputElems$$.push($elem$$5$$)
    }
  }
  return $inputElems$$
};
D.$JSCompiler_StaticMethods__disableAllFocusableElements$$ = function $$JSCompiler_StaticMethods__disableAllFocusableElements$$$($JSCompiler_StaticMethods__disableAllFocusableElements$self$$, $cell$$2$$) {
  var $focusElems$$, $i$$19$$, $tabIndex$$, $attr$$1$$;
  $attr$$1$$ = $JSCompiler_StaticMethods__disableAllFocusableElements$self$$.$m_resources$.getMappedAttribute("tabMod");
  $focusElems$$ = (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($JSCompiler_StaticMethods__disableAllFocusableElements$self$$, $cell$$2$$);
  for($i$$19$$ = 0;$i$$19$$ < $focusElems$$.length;$i$$19$$++) {
    if($tabIndex$$ = (0,window.parseInt)($focusElems$$[$i$$19$$].tabIndex, 10), (0,window.isNaN)($tabIndex$$) || 0 <= $tabIndex$$) {
      $focusElems$$[$i$$19$$].setAttribute($attr$$1$$, (0,window.isNaN)($tabIndex$$) ? -1 : $tabIndex$$), $focusElems$$[$i$$19$$].setAttribute("tabIndex", -1)
    }
  }
};
D.$JSCompiler_StaticMethods_isActionableMode$$ = function $$JSCompiler_StaticMethods_isActionableMode$$$($JSCompiler_StaticMethods_isActionableMode$self$$) {
  return"actionable" == $JSCompiler_StaticMethods_isActionableMode$self$$.$m_keyMode$
};
D.$JSCompiler_StaticMethods_setActionableMode$$ = function $$JSCompiler_StaticMethods_setActionableMode$$$($JSCompiler_StaticMethods_setActionableMode$self$$, $flag$$1$$) {
  $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ = $flag$$1$$ ? "actionable" : "navigation";
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_setActionableMode$self$$, "actionable" === $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ ? "accessibleActionableMode" : "accessibleNavigationMode")
};
D.$DvtDataGrid$$.prototype.$handleScroll$ = function $$DvtDataGrid$$$$$handleScroll$$($event$$4_scroller$$9$$) {
  if(!(0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$)) {
    if(!0 == this.$m_silentScroll$) {
      this.$m_silentScroll$ = !1
    }else {
      var $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$;
      $event$$4_scroller$$9$$ || ($event$$4_scroller$$9$$ = window.event);
      $event$$4_scroller$$9$$ = $event$$4_scroller$$9$$.target ? $event$$4_scroller$$9$$.target : $event$$4_scroller$$9$$.srcElement;
      $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$ = this.$m_utils$;
      var $elemWidth$$inline_741$$;
      $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$.$dataGrid$.$m_resources$.isRTLMode() ? "gecko" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$.platform || "ie" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$.platform || "edge" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$.platform ? $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$ = 
      window.Math.abs($event$$4_scroller$$9$$.scrollLeft) : ($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$.$dataGrid$.$m_scroller$.firstChild), $elemWidth$$inline_741$$ = $event$$4_scroller$$9$$.clientWidth, $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$ = 
      window.Math.max(0, $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$ - $elemWidth$$inline_741$$ - $event$$4_scroller$$9$$.scrollLeft)) : $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$ = $event$$4_scroller$$9$$.scrollLeft;
      this.scrollTo($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_738_scrollLeft_width$$inline_740$$, $event$$4_scroller$$9$$.scrollTop)
    }
  }
};
D.$JSCompiler_StaticMethods__getMaxScrollHeight$$ = function $$JSCompiler_StaticMethods__getMaxScrollHeight$$$($JSCompiler_StaticMethods__getMaxScrollHeight$self$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods__getMaxScrollHeight$self$$, "row") && !$JSCompiler_StaticMethods__getMaxScrollHeight$self$$.$m_stopRowFetch$ ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods__getMaxScrollHeight$self$$.$m_scrollHeight$
};
D.$DvtDataGrid$$.prototype.scroll = function $$DvtDataGrid$$$$scroll$($options$$5_scrollTop$$1$$) {
  var $scrollLeft$$1$$;
  null != $options$$5_scrollTop$$1$$.position && ($scrollLeft$$1$$ = window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)(this, "column") && !this.$m_stopColumnFetch$ ? window.Number.MAX_VALUE : this.$m_scrollWidth$, $options$$5_scrollTop$$1$$.position.scrollX)), $options$$5_scrollTop$$1$$ = window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__getMaxScrollHeight$$)(this), $options$$5_scrollTop$$1$$.position.scrollY)), (0,D.$JSCompiler_StaticMethods__initiateScroll$$)(this, 
  $scrollLeft$$1$$, $options$$5_scrollTop$$1$$))
};
D.$DvtDataGrid$$.prototype.scroll = D.$DvtDataGrid$$.prototype.scroll;
D.$JSCompiler_StaticMethods_scrollDelta$$ = function $$JSCompiler_StaticMethods_scrollDelta$$$($JSCompiler_StaticMethods_scrollDelta$self$$, $deltaX_scrollLeft$$2$$, $deltaY$$1_scrollTop$$2$$) {
  0 != $deltaX_scrollLeft$$2$$ && 0 != $deltaY$$1_scrollTop$$2$$ && (window.Math.abs($deltaX_scrollLeft$$2$$) > window.Math.abs($deltaY$$1_scrollTop$$2$$) ? ($deltaY$$1_scrollTop$$2$$ = 0, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverY$ = null) : ($deltaX_scrollLeft$$2$$ = 0, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverX$ = null));
  $deltaX_scrollLeft$$2$$ = window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_scrollDelta$self$$, "column") && !$JSCompiler_StaticMethods_scrollDelta$self$$.$m_stopColumnFetch$ ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollWidth$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollLeft$ - $deltaX_scrollLeft$$2$$));
  $deltaY$$1_scrollTop$$2$$ = window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__getMaxScrollHeight$$)($JSCompiler_StaticMethods_scrollDelta$self$$), $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollTop$ - $deltaY$$1_scrollTop$$2$$));
  (0,D.$JSCompiler_StaticMethods__initiateScroll$$)($JSCompiler_StaticMethods_scrollDelta$self$$, $deltaX_scrollLeft$$2$$, $deltaY$$1_scrollTop$$2$$)
};
D.$JSCompiler_StaticMethods__initiateScroll$$ = function $$JSCompiler_StaticMethods__initiateScroll$$$($JSCompiler_StaticMethods__initiateScroll$self$$, $scrollLeft$$3$$, $scrollTop$$3$$) {
  if((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__initiateScroll$self$$.$m_utils$)) {
    $JSCompiler_StaticMethods__initiateScroll$self$$.scrollTo($scrollLeft$$3$$, $scrollTop$$3$$)
  }else {
    var $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_747_width$$inline_750$$ = $JSCompiler_StaticMethods__initiateScroll$self$$.$m_utils$, $element$$inline_748$$ = $JSCompiler_StaticMethods__initiateScroll$self$$.$m_scroller$, $elemWidth$$inline_751$$;
    $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_747_width$$inline_750$$.$dataGrid$.$m_resources$.isRTLMode() ? "gecko" === $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_747_width$$inline_750$$.platform ? $element$$inline_748$$.scrollLeft = -$scrollLeft$$3$$ : "ie" == $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_747_width$$inline_750$$.platform || "edge" == $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_747_width$$inline_750$$.platform ? $element$$inline_748$$.scrollLeft = 
    $scrollLeft$$3$$ : ($JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_747_width$$inline_750$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_747_width$$inline_750$$.$dataGrid$.$m_scroller$.firstChild), $elemWidth$$inline_751$$ = $element$$inline_748$$.clientWidth, $element$$inline_748$$.scrollLeft = $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_747_width$$inline_750$$ - $elemWidth$$inline_751$$ - $scrollLeft$$3$$) : 
    $element$$inline_748$$.scrollLeft = $scrollLeft$$3$$;
    $JSCompiler_StaticMethods__initiateScroll$self$$.$m_scroller$.scrollTop = $scrollTop$$3$$
  }
};
D.$JSCompiler_StaticMethods__disableTouchScrollAnimation$$ = function $$JSCompiler_StaticMethods__disableTouchScrollAnimation$$$($JSCompiler_StaticMethods__disableTouchScrollAnimation$self$$) {
  $JSCompiler_StaticMethods__disableTouchScrollAnimation$self$$.$m_databody$.firstChild.style.webkitTransitionDuration = "0ms";
  $JSCompiler_StaticMethods__disableTouchScrollAnimation$self$$.$m_rowHeader$.firstChild.style.webkitTransitionDuration = "0ms";
  $JSCompiler_StaticMethods__disableTouchScrollAnimation$self$$.$m_colHeader$.firstChild.style.webkitTransitionDuration = "0ms"
};
D.$DvtDataGrid$$.prototype.scrollTo = function $$DvtDataGrid$$$$scrollTo$($scrollLeft$$5$$, $scrollTop$$5$$) {
  this.$m_currentScrollLeft$ = $scrollLeft$$5$$;
  this.$m_currentScrollTop$ = $scrollTop$$5$$;
  if(!(0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$)) {
    $scrollLeft$$5$$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)(this) < this.$m_startColPixel$ || $scrollLeft$$5$$ > this.$m_endColPixel$ || $scrollTop$$5$$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)(this) < this.$m_startRowPixel$ || $scrollTop$$5$$ > this.$m_endRowPixel$ ? (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, $scrollLeft$$5$$, $scrollTop$$5$$) : (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, $scrollLeft$$5$$, $scrollTop$$5$$);
    var $scrollerContent$$inline_761_viewportRight$$inline_757$$, $scrollerContentHeight$$inline_762_viewportBottom$$inline_758$$;
    $scrollerContent$$inline_761_viewportRight$$inline_757$$ = $scrollLeft$$5$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$);
    $scrollerContentHeight$$inline_762_viewportBottom$$inline_758$$ = $scrollTop$$5$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$);
    if(this.$m_endRowPixel$ < $scrollerContentHeight$$inline_762_viewportBottom$$inline_758$$ || this.$m_startRowPixel$ > $scrollTop$$5$$ || this.$m_endColPixel$ < $scrollerContent$$inline_761_viewportRight$$inline_757$$ - 2 || this.$m_startColPixel$ > $scrollLeft$$5$$) {
      this.$m_stopDatabodyScroll$ = !0;
      return
    }
  }
  this.$m_stopDatabodyScroll$ = !1;
  (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
  var $scrollerContentWidth$$inline_763$$, $databodyContent$$inline_764$$;
  $scrollerContent$$inline_761_viewportRight$$inline_757$$ = this.$m_scroller$.firstChild;
  $scrollerContentHeight$$inline_762_viewportBottom$$inline_758$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($scrollerContent$$inline_761_viewportRight$$inline_757$$);
  $scrollerContentWidth$$inline_763$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($scrollerContent$$inline_761_viewportRight$$inline_757$$);
  $databodyContent$$inline_764$$ = this.$m_databody$.firstChild;
  if(this.$m_endRowPixel$ > $scrollerContentHeight$$inline_762_viewportBottom$$inline_758$$ || this.$m_dataSource$.getCount("row") == this.$m_endRow$ + 1 && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && this.$m_endRowPixel$ < $scrollerContentHeight$$inline_762_viewportBottom$$inline_758$$) {
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scrollerContent$$inline_761_viewportRight$$inline_757$$, this.$m_endRowPixel$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_764$$, this.$m_endRowPixel$)
  }
  if(this.$m_endColPixel$ > $scrollerContentWidth$$inline_763$$ || this.$m_dataSource$.getCount("column") == this.$m_endCol$ + 1 && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endColPixel$ < $scrollerContentWidth$$inline_763$$) {
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scrollerContent$$inline_761_viewportRight$$inline_757$$, this.$m_endColPixel$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$inline_764$$, this.$m_endColPixel$)
  }
  null != this.$m_cellToFocus$ && (this.$m_cellToFocus$.focus(), this.$m_cellToFocus$ = null);
  null != this.$m_scrollIndexAfterFetch$ && 3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, this.$m_scrollIndexAfterFetch$) && ((0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)(this) && (this.$m_scrollIndexAfterFetch$.row == this.$m_active$.indexes.row && this.$m_scrollIndexAfterFetch$.column == this.$m_active$.indexes.column) && (0,D.$JSCompiler_StaticMethods__highlightActive$$)(this), this.$m_scrollIndexAfterFetch$ = null)
};
D.$DvtDataGrid$$.prototype.$_scrollTransitionEnd$ = function $$DvtDataGrid$$$$$_scrollTransitionEnd$$() {
  var $databody$$7$$;
  null != this.$m_scrollTransitionEnd$ && ($databody$$7$$ = this.$m_databody$.firstChild, $databody$$7$$.removeEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$));
  (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$)(this);
  this.fireEvent("scroll", {event:null, ui:{scrollX:this.$m_currentScrollLeft$, scrollY:this.$m_currentScrollTop$}});
  this.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)(this) < this.$m_startColPixel$ || this.$m_currentScrollLeft$ > this.$m_endColPixel$ || this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)(this) < this.$m_startRowPixel$ || this.$m_currentScrollTop$ > this.$m_endRowPixel$ ? (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$) : (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, 
  this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
D.$DvtDataGrid$$.prototype.$_bounceBack$ = function $$DvtDataGrid$$$$$_bounceBack$$() {
  var $scrollLeft$$6$$, $scrollTop$$6$$, $databody$$8$$, $colHeader$$3$$, $rowHeader$$7$$;
  $scrollLeft$$6$$ = this.$m_currentScrollLeft$;
  $scrollTop$$6$$ = this.$m_currentScrollTop$;
  $databody$$8$$ = this.$m_databody$.firstChild;
  $colHeader$$3$$ = this.$m_colHeader$.firstChild;
  $rowHeader$$7$$ = this.$m_rowHeader$.firstChild;
  $databody$$8$$.removeEventListener("webkitTransitionEnd", this.$m_bounceBack$);
  $databody$$8$$.style.webkitTransitionDuration = "500ms";
  $colHeader$$3$$.style.webkitTransitionDuration = "500ms";
  $rowHeader$$7$$.style.webkitTransitionDuration = "500ms";
  null == this.$m_scrollTransitionEnd$ && (this.$m_scrollTransitionEnd$ = this.$_scrollTransitionEnd$.bind(this));
  $databody$$8$$.addEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$);
  this.$m_resources$.isRTLMode() ? ($databody$$8$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, " + -$scrollTop$$6$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, 0, 0)") : ($databody$$8$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, " + -$scrollTop$$6$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, 0, 0)");
  $rowHeader$$7$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$6$$ + "px, 0)";
  this.$m_extraScrollOverY$ = this.$m_extraScrollOverX$ = null
};
D.$JSCompiler_StaticMethods__syncScroller$$ = function $$JSCompiler_StaticMethods__syncScroller$$$($JSCompiler_StaticMethods__syncScroller$self$$) {
  var $scrollLeft$$7$$, $scrollTop$$7$$, $databody$$9$$, $colHeader$$4$$, $rowHeader$$8$$, $dir$$7$$, $prevScrollLeft$$, $prevScrollTop$$;
  $scrollLeft$$7$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_currentScrollLeft$;
  $scrollTop$$7$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_currentScrollTop$;
  $databody$$9$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_databody$.firstChild;
  $colHeader$$4$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_colHeader$.firstChild;
  $rowHeader$$8$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_rowHeader$.firstChild;
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__syncScroller$self$$.$m_utils$) && window.hasOwnProperty("WebKitCSSMatrix") ? (null != $JSCompiler_StaticMethods__syncScroller$self$$.$m_extraScrollOverX$ || null != $JSCompiler_StaticMethods__syncScroller$self$$.$m_extraScrollOverY$ ? (null != $JSCompiler_StaticMethods__syncScroller$self$$.$m_extraScrollOverX$ ? $scrollLeft$$7$$ += $JSCompiler_StaticMethods__syncScroller$self$$.$m_extraScrollOverX$ : $scrollTop$$7$$ += $JSCompiler_StaticMethods__syncScroller$self$$.$m_extraScrollOverY$, 
  null == $JSCompiler_StaticMethods__syncScroller$self$$.$m_bounceBack$ && ($JSCompiler_StaticMethods__syncScroller$self$$.$m_bounceBack$ = $JSCompiler_StaticMethods__syncScroller$self$$.$_bounceBack$.bind($JSCompiler_StaticMethods__syncScroller$self$$)), $databody$$9$$.addEventListener("webkitTransitionEnd", $JSCompiler_StaticMethods__syncScroller$self$$.$m_bounceBack$)) : "0ms" == $databody$$9$$.style.webkitTransitionDuration ? $JSCompiler_StaticMethods__syncScroller$self$$.$_scrollTransitionEnd$() : 
  (null == $JSCompiler_StaticMethods__syncScroller$self$$.$m_scrollTransitionEnd$ && ($JSCompiler_StaticMethods__syncScroller$self$$.$m_scrollTransitionEnd$ = $JSCompiler_StaticMethods__syncScroller$self$$.$_scrollTransitionEnd$.bind($JSCompiler_StaticMethods__syncScroller$self$$)), $databody$$9$$.addEventListener("webkitTransitionEnd", $JSCompiler_StaticMethods__syncScroller$self$$.$m_scrollTransitionEnd$)), $JSCompiler_StaticMethods__syncScroller$self$$.$m_resources$.isRTLMode() ? ($databody$$9$$.style.webkitTransform = 
  "translate3d(" + $scrollLeft$$7$$ + "px, " + -$scrollTop$$7$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + $scrollLeft$$7$$ + "px, 0, 0)") : ($databody$$9$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$7$$ + "px, " + -$scrollTop$$7$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$7$$ + "px, 0, 0)"), $rowHeader$$8$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$7$$ + "px, 0)") : ($dir$$7$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_resources$.isRTLMode() ? 
  "right" : "left", $prevScrollLeft$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($databody$$9$$, $dir$$7$$), $prevScrollTop$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($databody$$9$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$9$$, -$scrollLeft$$7$$, $dir$$7$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$9$$, -$scrollTop$$7$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$4$$, -$scrollLeft$$7$$, $dir$$7$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$8$$, 
  -$scrollTop$$7$$, "top"), ($prevScrollTop$$ !== -$scrollTop$$7$$ || $prevScrollLeft$$ !== -$scrollLeft$$7$$) && $JSCompiler_StaticMethods__syncScroller$self$$.fireEvent("scroll", {event:null, ui:{scrollX:$scrollLeft$$7$$, scrollY:$scrollTop$$7$$}}))
};
D.$JSCompiler_StaticMethods_handleLongScroll$$ = function $$JSCompiler_StaticMethods_handleLongScroll$$$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$, $scrollTop$$8_startRow$$) {
  var $startRowPixel$$, $startColPixel$$;
  $scrollTop$$8_startRow$$ = window.Math.round(window.Math.max(0, $scrollTop$$8_startRow$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getHeight() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$);
  $scrollLeft$$8_startCol$$ = window.Math.round(window.Math.max(0, $scrollLeft$$8_startCol$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getWidth() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$);
  $startRowPixel$$ = $scrollTop$$8_startRow$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$;
  $startColPixel$$ = $scrollLeft$$8_startCol$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRow$ = $scrollTop$$8_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRow$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeader$ = $scrollTop$$8_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeader$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startCol$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endCol$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeader$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeader$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("row", $scrollTop$$8_startRow$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_rowHeader$, void 0, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("column", $scrollLeft$$8_startCol$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_colHeader$, void 0, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchCells($JSCompiler_StaticMethods_handleLongScroll$self$$.$m_databody$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_scroller$, $scrollTop$$8_startRow$$, $scrollLeft$$8_startCol$$, null, null, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$)
  }})
};
D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$, $headerSet$$5$$, $headerRange$$7$$) {
  var $headerContent$$1$$ = $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$m_rowHeader$.firstChild;
  null != $headerContent$$1$$ && $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$m_utils$.empty($headerContent$$1$$);
  $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$handleHeadersFetchSuccess$($headerSet$$5$$, $headerRange$$7$$)
};
D.$JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$self$$, $headerSet$$6$$, $headerRange$$8$$) {
  var $headerContent$$2$$ = $JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$self$$.$m_colHeader$.firstChild;
  null != $headerContent$$2$$ && $JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$self$$.$m_utils$.empty($headerContent$$2$$);
  $JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$self$$.$handleHeadersFetchSuccess$($headerSet$$6$$, $headerRange$$8$$)
};
D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$, $cellSet$$6$$, $cellRange$$6$$) {
  var $databodyContent$$3$$ = $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$m_databody$.firstChild;
  null != $databodyContent$$3$$ && $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$m_utils$.empty($databodyContent$$3$$);
  $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$handleCellsFetchSuccess$($cellSet$$6$$, $cellRange$$6$$)
};
D.$JSCompiler_StaticMethods_fillViewport$$ = function $$JSCompiler_StaticMethods_fillViewport$$$($JSCompiler_StaticMethods_fillViewport$self$$, $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$, $fetchSize$$inline_804_scrollTop$$9$$) {
  var $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$, $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$, $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$;
  $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$ = $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$);
  !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ && ($columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ || $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column")) ? 
  ($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && 
  ($colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ >= $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0 || ($colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ = 
  (0,D.$JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$)($JSCompiler_StaticMethods_fillViewport$self$$, $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$, null, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$, 0), $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ += $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$.widthChange, 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ += $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$.extentChange))) : $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ && ($column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$ = 
  window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column")), $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$), 
  $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$, $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$ = 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ <= $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$ || ($JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ && ($JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ = 
  !1), (0,D.$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$)($JSCompiler_StaticMethods_fillViewport$self$$, $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$, $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$))));
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$ && ($columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ || $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column"))) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ + 1), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$) {
      var $i$$inline_784_j$$inline_798_k$$inline_789$$, $column$$inline_785_row$$inline_799$$, $prevLeft$$inline_786$$;
      $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes;
      $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ = $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$ = 0;
      if(!(1 > $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$.length)) {
        $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$ = $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$[0].childNodes;
        for($i$$inline_784_j$$inline_798_k$$inline_789$$ = 0;$i$$inline_784_j$$inline_798_k$$inline_789$$ < $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$.length;$i$$inline_784_j$$inline_798_k$$inline_789$$ += 1) {
          if($column$$inline_785_row$$inline_799$$ = $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$[$i$$inline_784_j$$inline_798_k$$inline_789$$], $prevLeft$$inline_786$$ = $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$, $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ = 
          (0,D.$JSCompiler_StaticMethods_getElementDir$$)($column$$inline_785_row$$inline_799$$, "left"), $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
            $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$ = $i$$inline_784_j$$inline_798_k$$inline_789$$ - 1;
            $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ += $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$;
            $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ = $prevLeft$$inline_786$$;
            break
          }
        }
        for($colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ = 0;$colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ < $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$.length;$colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ += 
        1) {
          $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$ = $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$[$colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$];
          for($i$$inline_784_j$$inline_798_k$$inline_789$$ = 0;$i$$inline_784_j$$inline_798_k$$inline_789$$ < $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$;$i$$inline_784_j$$inline_798_k$$inline_789$$ += 1) {
            $JSCompiler_StaticMethods_fillViewport$self$$.$_remove$($column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$.firstChild)
          }
        }
      }
    }
  }else {
    if($fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ && ($column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column")), $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ = 
    window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$, 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ + 1, $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > 
    $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 
    0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ <= $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$)))) {
      $JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$ && ($JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$ = !1);
      $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$ = $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$[1];
      $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$ = $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$.lastChild;
      for($column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$);$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ - $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$ > $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$;) {
        for($i$$inline_784_j$$inline_798_k$$inline_789$$ = 0;$i$$inline_784_j$$inline_798_k$$inline_789$$ < $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$.length;$i$$inline_784_j$$inline_798_k$$inline_789$$ += 1) {
          $column$$inline_785_row$$inline_799$$ = $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$[$i$$inline_784_j$$inline_798_k$$inline_789$$], $JSCompiler_StaticMethods_fillViewport$self$$.$_remove$($column$$inline_785_row$$inline_799$$.lastChild)
        }
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ -= $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$;
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ -= 1;
        $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$ = $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$.lastChild;
        $column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($column$$inline_795_columns$$inline_783_fetchStartCol_row$$inline_788_threshold$$inline_775_width$$inline_796$$)
      }
    }
  }
  $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$ = $fetchSize$$inline_804_scrollTop$$9$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$);
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowHeaderFetch$ && ($fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ || $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "row"))) {
    $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && 
    (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromTop$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$)
  }else {
    if(window.Math.max(0, $fetchSize$$inline_804_scrollTop$$9$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$) {
      if(0 == $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$) {
        return
      }
      $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row"));
      $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $columns$$inline_794_fetchStartRow_indexToRemove$$inline_780_viewportRight$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$, $colHeaderContent$$inline_768_colHeaderContent$$inline_774_fetchSize$$1_j$$inline_787_left$$inline_781_returnVal$$inline_770_rows$$inline_797$$);
      !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$)
    }
  }
  !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowFetch$ && ($fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ || $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "row")) ? ($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, null, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ + 1), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$)) : window.Math.max(0, $fetchSize$$inline_804_scrollTop$$9$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowPixel$ && 0 != $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ && 
  ($fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row")), $fetchSize$$inline_804_scrollTop$$9$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$), 
  $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $fetchStartRow$$inline_805_rows$$inline_779_scrollLeft$$9_threshold$$inline_793_viewportBottom$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, $fetchSize$$inline_804_scrollTop$$9$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ + 1), 
  !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$))
};
D.$JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$ = function $$JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$$($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $columnHeadersContainer_returnVal$$6$$, $firstChild$$, $resizerWidth$$, $colThreshold$$1$$) {
  var $element$$11$$, $isColumnHeader$$, $columnHeader$$1$$, $width$$18$$, $removedColumnsWidth$$ = 0, $removedColumns$$ = 0;
  $element$$11$$ = null == $firstChild$$ ? $columnHeadersContainer_returnVal$$6$$.firstChild : $firstChild$$.nextSibling;
  if(null == $element$$11$$) {
    return{extentChange:0, widthChange:0}
  }
  $columnHeader$$1$$ = ($isColumnHeader$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$11$$, $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$11$$ : $element$$11$$.firstChild;
  for($width$$18$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$1$$);$resizerWidth$$ + $width$$18$$ < $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.$m_currentScrollLeft$ - $colThreshold$$1$$;) {
    $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.$_remove$($element$$11$$);
    $removedColumnsWidth$$ += $width$$18$$;
    $removedColumns$$ += $isColumnHeader$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "extent");
    $resizerWidth$$ += $width$$18$$;
    $element$$11$$ = null == $firstChild$$ ? $columnHeadersContainer_returnVal$$6$$.firstChild : $firstChild$$.nextSibling;
    if(null == $element$$11$$) {
      return{extentChange:$removedColumns$$, widthChange:$removedColumnsWidth$$}
    }
    $columnHeader$$1$$ = ($isColumnHeader$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$11$$, $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$11$$ : $element$$11$$.firstChild;
    $width$$18$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$1$$)
  }
  $isColumnHeader$$ || ($columnHeadersContainer_returnVal$$6$$ = (0,D.$JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, $element$$11$$.firstChild, $resizerWidth$$, $colThreshold$$1$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "start", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, 
  $element$$11$$, "start") + $columnHeadersContainer_returnVal$$6$$.extentChange), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "extent") - $columnHeadersContainer_returnVal$$6$$.extentChange), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeader$$1$$, 
  (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$1$$, "left") + $columnHeadersContainer_returnVal$$6$$.widthChange, "left"), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeader$$1$$, (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$1$$) - $columnHeadersContainer_returnVal$$6$$.widthChange), $removedColumns$$ += $columnHeadersContainer_returnVal$$6$$.extentChange, $removedColumnsWidth$$ += $columnHeadersContainer_returnVal$$6$$.widthChange);
  return{extentChange:$removedColumns$$, widthChange:$removedColumnsWidth$$}
};
D.$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$ = function $$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$$($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $columnHeadersContainer$$1_returnVal$$7$$, $threshold$$1$$) {
  var $element$$12$$, $columnHeader$$2$$, $isColumnHeader$$1$$, $width$$19$$, $removedColumns$$1$$ = 0, $removedColumnsWidth$$1$$ = 0;
  $element$$12$$ = $columnHeadersContainer$$1_returnVal$$7$$.lastChild;
  $columnHeader$$2$$ = ($isColumnHeader$$1$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$12$$, $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$12$$ : $element$$12$$.firstChild;
  for($width$$19$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$2$$);$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$m_endColHeaderPixel$ - $width$$19$$ > $threshold$$1$$;) {
    $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$_remove$($element$$12$$), $removedColumnsWidth$$1$$ += $width$$19$$, $removedColumns$$1$$ += $isColumnHeader$$1$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, "extent"), $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$m_endColHeaderPixel$ -= $width$$19$$, $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$m_endColHeader$ -= 
    $isColumnHeader$$1$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, "extent"), $element$$12$$ = $columnHeadersContainer$$1_returnVal$$7$$.lastChild, $columnHeader$$2$$ = ($isColumnHeader$$1$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$12$$, $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$12$$ : $element$$12$$.firstChild, 
    $width$$19$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$2$$)
  }
  $isColumnHeader$$1$$ || ($columnHeadersContainer$$1_returnVal$$7$$ = (0,D.$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$)($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, $threshold$$1$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, 
  $element$$12$$, "extent") - $columnHeadersContainer$$1_returnVal$$7$$.extentChange), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeader$$2$$, (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$2$$) - $columnHeadersContainer$$1_returnVal$$7$$.widthChange), $removedColumns$$1$$ += $columnHeadersContainer$$1_returnVal$$7$$.extentChange, $removedColumnsWidth$$1$$ += $columnHeadersContainer$$1_returnVal$$7$$.widthChange);
  return{extentChange:$removedColumns$$1$$, widthChange:$removedColumnsWidth$$1$$}
};
D.$JSCompiler_StaticMethods_removeRowHeadersFromTop$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromTop$$$($JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$, $rowHeader$$9$$) {
  var $returnVal$$8_rowHeaderContent$$3$$;
  $returnVal$$8_rowHeaderContent$$3$$ = $rowHeader$$9$$.firstChild;
  $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeaderPixel$ >= $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_currentScrollTop$ - 0 || ($returnVal$$8_rowHeaderContent$$3$$ = (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$)($JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$, $returnVal$$8_rowHeaderContent$$3$$, null, $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeaderPixel$, 0), $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeaderPixel$ += 
  $returnVal$$8_rowHeaderContent$$3$$.heightChange, $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeader$ += $returnVal$$8_rowHeaderContent$$3$$.extentChange)
};
D.$JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$$($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $returnVal$$9_rowHeadersContainer$$, $firstChild$$1$$, $resizerHeight$$, $rowThreshold$$1$$) {
  var $element$$13$$, $rowHeader$$10$$, $isRowHeader$$, $height$$20$$, $removedRows$$ = 0, $removedRowsHeight$$ = 0;
  $element$$13$$ = null == $firstChild$$1$$ ? $returnVal$$9_rowHeadersContainer$$.firstChild : $firstChild$$1$$.nextSibling;
  if(null == $element$$13$$) {
    return{extentChange:0, heightChange:0}
  }
  $rowHeader$$10$$ = ($isRowHeader$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$13$$, $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$13$$ : $element$$13$$.firstChild;
  for($height$$20$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$10$$);$resizerHeight$$ + $height$$20$$ < $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.$m_currentScrollTop$ - $rowThreshold$$1$$;) {
    $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.$_remove$($element$$13$$);
    $removedRowsHeight$$ += $height$$20$$;
    $removedRows$$ += $isRowHeader$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "extent");
    $resizerHeight$$ += $height$$20$$;
    $element$$13$$ = null == $firstChild$$1$$ ? $returnVal$$9_rowHeadersContainer$$.firstChild : $firstChild$$1$$.nextSibling;
    if(null == $element$$13$$) {
      return{extentChange:$removedRows$$, heightChange:$removedRowsHeight$$}
    }
    $rowHeader$$10$$ = ($isRowHeader$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$13$$, $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$13$$ : $element$$13$$.firstChild;
    $height$$20$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$10$$)
  }
  $isRowHeader$$ || ($returnVal$$9_rowHeadersContainer$$ = (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, $element$$13$$.firstChild, $resizerHeight$$, $rowThreshold$$1$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "start", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, 
  $element$$13$$, "start") + $returnVal$$9_rowHeadersContainer$$.extentChange), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "extent") - $returnVal$$9_rowHeadersContainer$$.extentChange), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$10$$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$10$$, 
  "top") + $returnVal$$9_rowHeadersContainer$$.heightChange, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$10$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$10$$) - $returnVal$$9_rowHeadersContainer$$.heightChange), $removedRows$$ += $returnVal$$9_rowHeadersContainer$$.extentChange, $removedRowsHeight$$ += $returnVal$$9_rowHeadersContainer$$.heightChange);
  return{extentChange:$removedRows$$, heightChange:$removedRowsHeight$$}
};
D.$JSCompiler_StaticMethods_removeRowsFromTop$$ = function $$JSCompiler_StaticMethods_removeRowsFromTop$$$($JSCompiler_StaticMethods_removeRowsFromTop$self$$, $databody$$12$$) {
  var $databodyContent$$7$$, $row$$12$$, $height$$21$$;
  $databodyContent$$7$$ = $databody$$12$$.firstChild;
  if(!($JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ >= $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0)) {
    $row$$12$$ = $databodyContent$$7$$.firstChild;
    for($height$$21$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$12$$);$JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ + $height$$21$$ < $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0;) {
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$_remove$($row$$12$$);
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ += $height$$21$$;
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRow$ += 1;
      $row$$12$$ = $databodyContent$$7$$.firstChild;
      if(null == $row$$12$$) {
        break
      }
      $height$$21$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$12$$)
    }
  }
};
D.$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$$($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$, $rowHeader$$11$$) {
  var $rowHeaderContent$$4$$, $threshold$$3$$;
  $rowHeaderContent$$4$$ = $rowHeader$$11$$.firstChild;
  $threshold$$3$$ = $JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$) + 0;
  $JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_endRowHeaderPixel$ <= $threshold$$3$$ || ($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_stopRowHeaderFetch$ && ($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_stopRowHeaderFetch$ = !1), (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$, $rowHeaderContent$$4$$, $threshold$$3$$))
};
D.$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$$($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $returnVal$$10_rowHeadersContainer$$1$$, $threshold$$4$$) {
  var $element$$14$$, $rowHeader$$12$$, $isRowHeader$$1$$, $height$$22$$, $removedRows$$1$$ = 0, $removedRowsHeight$$1$$ = 0;
  $element$$14$$ = $returnVal$$10_rowHeadersContainer$$1$$.lastChild;
  $rowHeader$$12$$ = ($isRowHeader$$1$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$14$$, $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$14$$ : $element$$14$$.firstChild;
  for($height$$22$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$12$$);$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$m_endRowHeaderPixel$ - $height$$22$$ > $threshold$$4$$;) {
    $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$_remove$($element$$14$$), $removedRowsHeight$$1$$ += $height$$22$$, $removedRows$$1$$ += $isRowHeader$$1$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, "extent"), $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$m_endRowHeaderPixel$ -= $height$$22$$, $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$m_endRowHeader$ -= 
    $isRowHeader$$1$$ ? 1 : (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, "extent"), $element$$14$$ = $returnVal$$10_rowHeadersContainer$$1$$.lastChild, $rowHeader$$12$$ = ($isRowHeader$$1$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$14$$, $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$14$$ : $element$$14$$.firstChild, 
    $height$$22$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$12$$)
  }
  $isRowHeader$$1$$ || ($returnVal$$10_rowHeadersContainer$$1$$ = (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, $threshold$$4$$), (0,D.$JSCompiler_StaticMethods__setAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, "extent", (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, 
  $element$$14$$, "extent") - $returnVal$$10_rowHeadersContainer$$1$$.extentChange), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$12$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$12$$) - $returnVal$$10_rowHeadersContainer$$1$$.heightChange), $removedRows$$1$$ += $returnVal$$10_rowHeadersContainer$$1$$.extentChange, $removedRowsHeight$$1$$ += $returnVal$$10_rowHeadersContainer$$1$$.heightChange);
  return{extentChange:$removedRows$$1$$, heightChange:$removedRowsHeight$$1$$}
};
D.$JSCompiler_StaticMethods_removeRowsFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowsFromBottom$$$($JSCompiler_StaticMethods_removeRowsFromBottom$self$$, $databody$$13$$) {
  var $databodyContent$$8$$, $threshold$$5$$, $row$$13$$, $height$$23$$;
  $databodyContent$$8$$ = $databody$$13$$.firstChild;
  $threshold$$5$$ = $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_removeRowsFromBottom$self$$) + 0;
  if(!($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ <= $threshold$$5$$)) {
    $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_stopRowFetch$ && ($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_stopRowFetch$ = !1);
    $row$$13$$ = $databodyContent$$8$$.lastChild;
    for($height$$23$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$13$$);$JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ - $height$$23$$ > $threshold$$5$$;) {
      $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$_remove$($row$$13$$), $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ -= $height$$23$$, $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRow$ -= 1, $row$$13$$ = $databodyContent$$8$$.lastChild, $height$$23$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$13$$)
    }
  }
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseDown$ = function $$DvtDataGrid$$$$$handleScrollerMouseDown$$() {
  this.$m_captureScrolling$ = !0
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseUp$ = function $$DvtDataGrid$$$$$handleScrollerMouseUp$$() {
  this.$m_captureScrolling$ = !1;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && this.$m_stopDatabodyScroll$ && (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
D.$DvtDataGrid$$.prototype.$handleContextMenuGesture$ = function $$DvtDataGrid$$$$$handleContextMenuGesture$$($event$$7$$, $eventType$$4$$, $callback$$29$$) {
  var $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$, $element$$15$$, $capabilities_target$$40$$;
  $capabilities_target$$40$$ = $event$$7$$.originalEvent.target;
  $element$$15$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $capabilities_target$$40$$);
  if("touch" === $eventType$$4$$ && null != $element$$15$$ && ($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$ = {row:this.$getRowIndex$($element$$15$$.parentNode), column:this.$getCellIndex$($element$$15$$)}, !(0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) || !(0,D.$JSCompiler_StaticMethods__isContainSelection$$)(this, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$) || 
  (0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)(this) && $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$.row != this.$m_active$.indexes.row && $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$.column != this.$m_active$.indexes.column)) {
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? (0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$7$$.originalEvent) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, $event$$7$$.originalEvent)
  }
  a: {
    $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$ = this.$m_utils$;
    for(var $node$$inline_808$$ = $capabilities_target$$40$$, $databody$$inline_809$$ = this.$m_root$, $nodeName$$inline_810$$, $tabIndex$$inline_811$$, $origTabIndex$$inline_812$$;null != $node$$inline_808$$ && $node$$inline_808$$ != $databody$$inline_809$$;) {
      $nodeName$$inline_810$$ = $node$$inline_808$$.nodeName;
      if(3 != $node$$inline_808$$.nodeType) {
        if($tabIndex$$inline_811$$ = (0,window.parseInt)($node$$inline_808$$.getAttribute("tabIndex"), 10), $origTabIndex$$inline_812$$ = (0,window.parseInt)($node$$inline_808$$.getAttribute($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$.$dataGrid$.$m_resources$.getMappedAttribute("tabindex")), 10), null != $tabIndex$$inline_811$$ && 0 <= $tabIndex$$inline_811$$) {
          if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($node$$inline_808$$, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$.$dataGrid$.$m_resources$.getMappedStyle("cell")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($node$$inline_808$$, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$.$dataGrid$.$m_resources$.getMappedStyle("headercell"))) {
            break
          }else {
            $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$ = !0;
            break a
          }
        }else {
          if($nodeName$$inline_810$$.match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && (-1 != $tabIndex$$inline_811$$ || -1 != $origTabIndex$$inline_812$$)) {
            $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$ = !0;
            break a
          }
        }
      }
      $node$$inline_808$$ = $node$$inline_808$$.parentNode
    }
    $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$ = !1
  }
  if(!$JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$) {
    if(null != $element$$15$$) {
      (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && (0,D.$JSCompiler_StaticMethods__isContainSelection$$)(this, this.$getCellIndex$($element$$15$$)) ? ($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$ = (0,D.$JSCompiler_StaticMethods__getActiveElement$$)(this), $capabilities_target$$40$$ = (0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)(this) ? "keyboard" === $eventType$$4$$ ? (0,D.$JSCompiler_StaticMethods__getCellCapability$$)(this, 
      $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$) : (0,D.$JSCompiler_StaticMethods__getCellCapability$$)(this, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$, $element$$15$$) : (0,D.$JSCompiler_StaticMethods__getHeaderCapability$$)(this, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$, 
      $element$$15$$)) : ($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$ = $element$$15$$, $capabilities_target$$40$$ = (0,D.$JSCompiler_StaticMethods__getCellCapability$$)(this, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$))
    }else {
      $element$$15$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $capabilities_target$$40$$);
      if(null == $element$$15$$) {
        return
      }
      $capabilities_target$$40$$ = (0,D.$JSCompiler_StaticMethods__getHeaderCapability$$)(this, $element$$15$$);
      $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$ = $element$$15$$
    }
    $callback$$29$$.call(null, {capabilities:$capabilities_target$$40$$, launcher:$JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_807_JSCompiler_inline_result$$29_index$$60_launcher$$}, $event$$7$$, $eventType$$4$$)
  }
};
D.$DvtDataGrid$$.prototype.handleContextMenuGesture = D.$DvtDataGrid$$.prototype.$handleContextMenuGesture$;
D.$JSCompiler_StaticMethods__getCellCapability$$ = function $$JSCompiler_StaticMethods__getCellCapability$$$($JSCompiler_StaticMethods__getCellCapability$self$$, $cell$$4_resizable$$, $actualCell_rowHeader$$13$$) {
  var $capabilities$$1$$, $columnHeader$$3$$, $sortable$$, $sameColumn_sorted$$ = !0, $sameRow$$ = !0;
  $capabilities$$1$$ = {resize:"disable", resizeWidth:"disable", resizeHeight:"disable", sortRow:"disable", sortCol:"disable", cut:"disable", paste:"disable", sortColAsc:"disable", sortColDsc:"disable"};
  if(null != $actualCell_rowHeader$$13$$ && ($sameColumn_sorted$$ = $JSCompiler_StaticMethods__getCellCapability$self$$.$getCellIndex$($cell$$4_resizable$$) === $JSCompiler_StaticMethods__getCellCapability$self$$.$getCellIndex$($actualCell_rowHeader$$13$$), $sameRow$$ = $cell$$4_resizable$$.parentNode === $actualCell_rowHeader$$13$$.parentNode, !1 === $sameRow$$ && !1 === $sameColumn_sorted$$)) {
    return $capabilities$$1$$
  }
  $actualCell_rowHeader$$13$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)($JSCompiler_StaticMethods__getCellCapability$self$$, $cell$$4_resizable$$, "row");
  $columnHeader$$3$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)($JSCompiler_StaticMethods__getCellCapability$self$$, $cell$$4_resizable$$, "column");
  $cell$$4_resizable$$ = $JSCompiler_StaticMethods__getCellCapability$self$$.$m_resources$.getMappedAttribute("resizable");
  $sortable$$ = $JSCompiler_StaticMethods__getCellCapability$self$$.$m_resources$.getMappedAttribute("sortable");
  null != $columnHeader$$3$$ && $sameColumn_sorted$$ && ("true" === $columnHeader$$3$$.getAttribute($cell$$4_resizable$$) && ($capabilities$$1$$.resize = "enable", $capabilities$$1$$.resizeWidth = "enable"), "true" === $columnHeader$$3$$.getAttribute($sortable$$) && ($capabilities$$1$$.sortCol = "enable", $capabilities$$1$$.sortColAsc = "enable", $capabilities$$1$$.sortColDsc = "enable", $sameColumn_sorted$$ = $columnHeader$$3$$.getAttribute($JSCompiler_StaticMethods__getCellCapability$self$$.$m_resources$.getMappedAttribute("sortDir")), 
  "ascending" === $sameColumn_sorted$$ ? $capabilities$$1$$.sortColAsc = "disable" : "descending" === $sameColumn_sorted$$ && ($capabilities$$1$$.sortColDsc = "disable")));
  $sameRow$$ && ((0,D.$JSCompiler_StaticMethods__isMoveEnabled$$)($JSCompiler_StaticMethods__getCellCapability$self$$) && ($capabilities$$1$$.cut = "enable", $capabilities$$1$$.paste = "enable"), null != $actualCell_rowHeader$$13$$ && ("true" === $actualCell_rowHeader$$13$$.getAttribute($cell$$4_resizable$$) && ($capabilities$$1$$.resize = "enable", $capabilities$$1$$.resizeHeight = "enable"), "true" === $actualCell_rowHeader$$13$$.getAttribute($sortable$$) && ($capabilities$$1$$.sortRow = "enable")));
  return $capabilities$$1$$
};
D.$JSCompiler_StaticMethods__getHeaderCapability$$ = function $$JSCompiler_StaticMethods__getHeaderCapability$$$($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$, $header$$4$$, $actualCell$$1_resizable$$1$$) {
  var $capabilities$$2$$, $sortable$$1$$, $sameColumn$$1$$ = !0, $sameRow$$1$$ = !0;
  $capabilities$$2$$ = {resize:"disable", resizeWidth:"disable", resizeHeight:"disable", sortRow:"disable", sortCol:"disable", cut:"disable", paste:"disable", sortColAsc:"disable", sortColDsc:"disable"};
  if(null != $actualCell$$1_resizable$$1$$ && ($sameColumn$$1$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$, $header$$4$$) === $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$getCellIndex$($actualCell$$1_resizable$$1$$), $sameRow$$1$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$, $header$$4$$) === (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$, 
  $actualCell$$1_resizable$$1$$.parentNode), !1 === $sameRow$$1$$ && !1 === $sameColumn$$1$$)) {
    return $capabilities$$2$$
  }
  $actualCell$$1_resizable$$1$$ = $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$m_resources$.getMappedAttribute("resizable");
  $sortable$$1$$ = $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$m_resources$.getMappedAttribute("sortable");
  null !== $header$$4$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$4$$, $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.getMappedStyle("colheadercell")) && $sameColumn$$1$$ ? ("true" === $header$$4$$.getAttribute($actualCell$$1_resizable$$1$$) && ($capabilities$$2$$.resizeWidth = "enable", $capabilities$$2$$.resize = "enable"), $capabilities$$2$$.resizeHeight = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$m_options$, 
  "column", "height"), "true" === $header$$4$$.getAttribute($sortable$$1$$) && ($capabilities$$2$$.sortCol = "enable", $capabilities$$2$$.sortColAsc = "enable", $capabilities$$2$$.sortColDsc = "enable", $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$ = $header$$4$$.getAttribute($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$m_resources$.getMappedAttribute("sortDir")), "ascending" === $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$ ? $capabilities$$2$$.sortColAsc = 
  "disable" : "descending" === $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$ && ($capabilities$$2$$.sortColDsc = "disable"))) : $sameRow$$1$$ && ((0,D.$JSCompiler_StaticMethods__isMoveEnabled$$)($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$) && ($capabilities$$2$$.cut = "enable", $capabilities$$2$$.paste = "enable"), "true" === $header$$4$$.getAttribute($actualCell$$1_resizable$$1$$) && ($capabilities$$2$$.resize = "enable", $capabilities$$2$$.resizeHeight = "enable"), 
  $capabilities$$2$$.resizeWidth = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$m_options$, "row", "width"), "true" === $header$$4$$.getAttribute($sortable$$1$$) && ($capabilities$$2$$.sortRow = "enable")));
  $capabilities$$2$$.resize = "enable" === $capabilities$$2$$.resizeHeight || "enable" === $capabilities$$2$$.resizeWidth ? "enable" : "disable";
  return $capabilities$$2$$
};
D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$ = function $$DvtDataGrid$$$$$handleContextMenuReturn$$($details$$inline_828_event$$8$$, $direction$$4_id$$2_newWidth$$inline_825$$, $initialWidth$$inline_823_value$$47$$) {
  var $newHeight$$inline_826_target$$41_target$$inline_822$$;
  null != this.$m_active$ && ($newHeight$$inline_826_target$$41_target$$inline_822$$ = (0,D.$JSCompiler_StaticMethods__getActiveElement$$)(this));
  if($direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("resizeHeight") || $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("resizeWidth")) {
    if((0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this)) {
      var $initialHeight$$inline_824$$, $value$$inline_827$$;
      $value$$inline_827$$ = (0,window.parseInt)($initialWidth$$inline_823_value$$47$$, 10);
      (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($newHeight$$inline_826_target$$41_target$$inline_822$$, this.getMappedStyle("cell")) && ($newHeight$$inline_826_target$$41_target$$inline_822$$ = $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("resizeHeight") ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $newHeight$$inline_826_target$$41_target$$inline_822$$, "row") : (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $newHeight$$inline_826_target$$41_target$$inline_822$$, 
      "column"));
      this.$m_resizingElement$ = $newHeight$$inline_826_target$$41_target$$inline_822$$;
      $initialWidth$$inline_823_value$$47$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($newHeight$$inline_826_target$$41_target$$inline_822$$);
      $initialHeight$$inline_824$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($newHeight$$inline_826_target$$41_target$$inline_822$$);
      $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("resizeWidth") ? $initialWidth$$inline_823_value$$47$$ !== $value$$inline_827$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)(this.$m_resizingElement$, this.getMappedStyle("colheadercell")) ? (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)(this, this.$m_resizingElement$) && (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)(this, $initialWidth$$inline_823_value$$47$$, $value$$inline_827$$) : 
      (0,D.$JSCompiler_StaticMethods_resizeRowWidth$$)(this, $value$$inline_827$$ - $initialWidth$$inline_823_value$$47$$)) : $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("resizeHeight") && ($initialHeight$$inline_824$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($newHeight$$inline_826_target$$41_target$$inline_822$$), $initialHeight$$inline_824$$ !== $value$$inline_827$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)(this.$m_resizingElement$, 
      this.getMappedStyle("colheadercell")) ? (0,D.$JSCompiler_StaticMethods_resizeColHeight$$)(this, $value$$inline_827$$ - $initialHeight$$inline_824$$) : (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)(this, this.$m_resizingElement$) && (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)(this, $initialHeight$$inline_824$$, $value$$inline_827$$)));
      $direction$$4_id$$2_newWidth$$inline_825$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($newHeight$$inline_826_target$$41_target$$inline_822$$);
      $newHeight$$inline_826_target$$41_target$$inline_822$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($newHeight$$inline_826_target$$41_target$$inline_822$$);
      if($direction$$4_id$$2_newWidth$$inline_825$$ != $initialWidth$$inline_823_value$$47$$ || $newHeight$$inline_826_target$$41_target$$inline_822$$ != $initialHeight$$inline_824$$) {
        $details$$inline_828_event$$8$$ = {event:$details$$inline_828_event$$8$$, ui:{header:(0,D.$JSCompiler_StaticMethods__getKey$$)(this, this.$m_resizingElement$), oldDimensions:{width:$initialWidth$$inline_823_value$$47$$, height:$initialHeight$$inline_824$$}, newDimensions:{width:$direction$$4_id$$2_newWidth$$inline_825$$, height:$newHeight$$inline_826_target$$41_target$$inline_822$$}, size:$value$$inline_827$$}}, this.fireEvent("resize", $details$$inline_828_event$$8$$), (0,D.$JSCompiler_StaticMethods_buildCorners$$)(this), 
        (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) && (0,D.$JSCompiler_StaticMethods__moveTouchSelectionAffordance$$)(this)
      }
      this.$m_resizingElement$ = null
    }
  }else {
    $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("sortColAsc") || $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("sortColDsc") ? ($direction$$4_id$$2_newWidth$$inline_825$$ = $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("sortColAsc") ? "ascending" : "descending", (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($newHeight$$inline_826_target$$41_target$$inline_822$$, this.getMappedStyle("cell")) && 
    ($newHeight$$inline_826_target$$41_target$$inline_822$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $newHeight$$inline_826_target$$41_target$$inline_822$$, "column")), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $newHeight$$inline_826_target$$41_target$$inline_822$$) && null != $newHeight$$inline_826_target$$41_target$$inline_822$$ && !(0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this) && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $details$$inline_828_event$$8$$, 
    $newHeight$$inline_826_target$$41_target$$inline_822$$, $direction$$4_id$$2_newWidth$$inline_825$$)) : $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("sortRowAsc") || $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("sortRowDsc") ? ($direction$$4_id$$2_newWidth$$inline_825$$ = $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("sortRowAsc") ? "ascending" : "descending", (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($newHeight$$inline_826_target$$41_target$$inline_822$$, 
    this.getMappedStyle("cell")) && ($newHeight$$inline_826_target$$41_target$$inline_822$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $newHeight$$inline_826_target$$41_target$$inline_822$$, "row")), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $newHeight$$inline_826_target$$41_target$$inline_822$$) && null != $newHeight$$inline_826_target$$41_target$$inline_822$$ && !(0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this) && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, 
    $details$$inline_828_event$$8$$, $newHeight$$inline_826_target$$41_target$$inline_822$$, $direction$$4_id$$2_newWidth$$inline_825$$)) : $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("cut") ? (0,D.$JSCompiler_StaticMethods__handleCut$$)(this, $details$$inline_828_event$$8$$, $newHeight$$inline_826_target$$41_target$$inline_822$$) : $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("paste") ? (0,D.$JSCompiler_StaticMethods__handlePaste$$)(this, 
    $details$$inline_828_event$$8$$, $newHeight$$inline_826_target$$41_target$$inline_822$$) : $direction$$4_id$$2_newWidth$$inline_825$$ === this.$m_resources$.getMappedCommand("discontiguousSelection") && (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, $initialWidth$$inline_823_value$$47$$)
  }
};
D.$DvtDataGrid$$.prototype.handleContextMenuReturn = D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$;
D.$JSCompiler_StaticMethods__isDOMElementSortable$$ = function $$JSCompiler_StaticMethods__isDOMElementSortable$$$($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$16$$) {
  var $header$$5$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$16$$);
  return null == $header$$5$$ ? !1 : "true" == $header$$5$$.getAttribute($JSCompiler_StaticMethods__isDOMElementSortable$self$$.$m_resources$.getMappedAttribute("sortable"))
};
D.$JSCompiler_StaticMethods__isSelectionEnabled$$ = function $$JSCompiler_StaticMethods__isSelectionEnabled$$$($JSCompiler_StaticMethods__isSelectionEnabled$self$$) {
  return"none" != (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods__isSelectionEnabled$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isMultipleSelection$$ = function $$JSCompiler_StaticMethods_isMultipleSelection$$$($JSCompiler_StaticMethods_isMultipleSelection$self$$) {
  return"multiple" == (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods_isMultipleSelection$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isResizeEnabled$$ = function $$JSCompiler_StaticMethods_isResizeEnabled$$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$) {
  var $row$$14$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "row");
  $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "column");
  return"disable" !== $row$$14$$.width || "disable" !== $row$$14$$.height || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.width || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.height
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleMouseMove$$($event$$9$$) {
  (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && !1 == this.$m_databodyDragState$ && (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$handleRowHeaderMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleRowHeaderMouseMove$$($event$$10$$) {
  this.$m_databodyMove$ && (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$10$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseDown$$($event$$11$$) {
  var $header$$inline_849_row$$15$$, $processed$$;
  (0,D.$JSCompiler_StaticMethods__exitActionableMode$$)(this);
  if(0 === $event$$11$$.button) {
    if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$11$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$11$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$11$$.target)) {
      $event$$11$$.preventDefault();
      (0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$11$$.target, this.getMappedStyle("selected"));
      return
    }
    (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($processed$$ = (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, $event$$11$$));
    $header$$inline_849_row$$15$$ = this.find($event$$11$$.target, "row");
    !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, $header$$inline_849_row$$15$$) && (this.$m_databodyMove$ = !0, this.$m_currentX$ = $event$$11$$.pageX, this.$m_currentY$ = $event$$11$$.pageY, $processed$$ = !0)
  }
  if(!this.$m_isResizing$) {
    if(!this.$m_root$.contains(window.document.activeElement) || window.document.activeElement === this.$m_root$) {
      this.$m_externalFocus$ = !0
    }
    $header$$inline_849_row$$15$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$11$$.target);
    null != $header$$inline_849_row$$15$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)(this), (0,D.$JSCompiler_StaticMethods__setActive$$)(this, $header$$inline_849_row$$15$$, $event$$11$$))
  }
  !0 === $processed$$ && $event$$11$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($event$$12$$) {
  this.$m_databodyMove$ && null != this.$m_moveRow$ ? (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, !1) : (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$12$$);
  this.$m_databodyMove$ = !1
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOver$$($event$$13$$) {
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$13$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$13$$.target) && !(0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this)) {
    var $header$$inline_853$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$13$$.target);
    $header$$inline_853$$ && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_853$$, !1);
    ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$13$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$13$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$13$$.target, this.getMappedStyle("hover"))
  }
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOut$$($event$$14$$) {
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$14$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$14$$.target) && !(0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this)) {
    var $header$$inline_857$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$14$$.target);
    (null == $header$$inline_857$$ || null == $event$$14$$.relatedTarget || $header$$inline_857$$ !== (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$14$$.relatedTarget)) && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_857$$, !0);
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$14$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$14$$.target, this.getMappedStyle("sortdescending"))) {
      (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$14$$.target, this.getMappedStyle("hover")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$14$$.target, this.getMappedStyle("selected"))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseUp$$() {
  this.$m_databodyMove$ && null != this.$m_moveRow$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, !0)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderClick$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderClick$$($event$$16$$) {
  if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$16$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$16$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$16$$.target)) {
    (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$16$$), $event$$16$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseDown$$($event$$17$$) {
  (0,D.$JSCompiler_StaticMethods__exitActionableMode$$)(this);
  0 === $event$$17$$.button && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$17$$.target, "row")) && (this.$m_databodyMove$ = !0, this.$m_currentX$ = $event$$17$$.pageX, this.$m_currentY$ = $event$$17$$.pageY);
  if(!this.$m_root$.contains(window.document.activeElement) || window.document.activeElement === this.$m_root$) {
    this.$m_externalFocus$ = !0
  }
  (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? ((0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$17$$), (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && 0 === $event$$17$$.button && (this.$m_databodyDragState$ = !0)) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, $event$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOut$$($event$$18$$) {
  var $row$$16$$, $selectionMode$$;
  this.$m_databodyMove$ || ($selectionMode$$ = this.$m_options$.$getSelectionMode$(), $row$$16$$ = this.find($event$$18$$.target, "row"), "cell" === $selectionMode$$ ? (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$18$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($row$$16$$, this.getMappedStyle("hover")))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOver$$($event$$19$$) {
  var $row$$17$$, $selectionMode$$1$$;
  this.$m_databodyMove$ || ($selectionMode$$1$$ = this.$m_options$.$getSelectionMode$(), $row$$17$$ = this.find($event$$19$$.target, "row"), "cell" === $selectionMode$$1$$ ? (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$19$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$1$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($row$$17$$, this.getMappedStyle("hover")))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseMove$$($event$$20$$) {
  this.$m_databodyMove$ ? (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$20$$) : this.$m_databodyDragState$ && (0,D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$)(this, $event$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseUp$$() {
  this.$m_databodyDragState$ = !1;
  this.$m_databodyMove$ && null != this.$m_moveRow$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, !0)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyKeyDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyKeyDown$$($event$$22$$) {
  var $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$;
  if(!$event$$22$$.defaultPrevented && !(9 === $event$$22$$.keyCode && (!(0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) || !(0,D.$JSCompiler_StaticMethods_isActionableMode$$)(this)))) {
    if(null != this.$m_active$ && "header" == this.$m_active$.type) {
      (0,D.$JSCompiler_StaticMethods__fireKeyDownEvent$$)(this, $event$$22$$);
      var $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$, $keyCode$$inline_864_shiftKey$$inline_876$$, $processed$$inline_865$$ = !1, $level$$inline_866$$, $ctrlKey$$inline_867$$;
      "header" == this.$m_active$.type ? ($axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ = this.$m_active$.axis, $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = this.$m_active$.index, $level$$inline_866$$ = this.$m_active$.level, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = (0,D.$JSCompiler_StaticMethods__getActiveElement$$)(this), 
      $keyCode$$inline_864_shiftKey$$inline_876$$ = $event$$22$$.keyCode, $ctrlKey$$inline_867$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$22$$), (0,D.$JSCompiler_StaticMethods_isActionableMode$$)(this) ? $processed$$inline_865$$ = (0,D.$JSCompiler_StaticMethods__handleActionableModeKeyDown$$)(this, $event$$22$$, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$, !0) : (38 == $keyCode$$inline_864_shiftKey$$inline_876$$ || 
      40 == $keyCode$$inline_864_shiftKey$$inline_876$$ || 37 == $keyCode$$inline_864_shiftKey$$inline_876$$ || 39 == $keyCode$$inline_864_shiftKey$$inline_876$$) && !$ctrlKey$$inline_867$$ ? $processed$$inline_865$$ = (0,D.$JSCompiler_StaticMethods_handleHeaderArrowKeys$$)(this, $keyCode$$inline_864_shiftKey$$inline_876$$, $event$$22$$) : 113 == $keyCode$$inline_864_shiftKey$$inline_876$$ ? (0,D.$JSCompiler_StaticMethods__enterActionableMode$$)(this, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$) : 
      32 == $keyCode$$inline_864_shiftKey$$inline_876$$ ? (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ("row" === $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ ? (this.$m_rowHeaderLevelCount$ - 1 === $level$$inline_866$$ ? $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ = 
      $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ : ($axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$.parentNode, "start"), $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = 
      $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ + (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$.parentNode, "extent") - 1), (0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$, $event$$22$$), 
      (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowSelected", {row:$JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ + 1}), $processed$$inline_865$$ = !0) : "column" === $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ && "cell" == this.$m_options$.$getSelectionMode$() && (this.$m_columnHeaderLevelCount$ - 1 === $level$$inline_866$$ ? $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = 
      $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ = $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ : ($axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$.parentNode, "start"), $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = 
      $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ + (0,D.$JSCompiler_StaticMethods__getAttribute$$)(this, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$.parentNode, "extent") - 1), (0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$, $event$$22$$), 
      (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleColumnSelected", {column:$JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ + 1}), $processed$$inline_865$$ = !0)) : 13 == $keyCode$$inline_864_shiftKey$$inline_876$$ ? "true" == $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$.getAttribute(this.$m_resources$.getMappedAttribute("sortable")) ? 
      ($JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$, (0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this) || ($cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$.getAttribute(this.$m_resources$.getMappedAttribute("sortDir")), 
      (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$22$$, $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$, null == $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ || "descending" === $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ ? "ascending" : "descending")), $processed$$inline_865$$ = 
      !0) : (0,D.$JSCompiler_StaticMethods__enterActionableMode$$)(this, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$) : 33 == $keyCode$$inline_864_shiftKey$$inline_876$$ ? "row" === $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ && ($cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)(this, 0, $level$$inline_866$$), 
      (0,D.$JSCompiler_StaticMethods__setActive$$)(this, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$, $event$$22$$), $processed$$inline_865$$ = !0) : 34 == $keyCode$$inline_864_shiftKey$$inline_876$$ ? "row" === $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ && ($JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = 
      !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? window.Math.max(0, this.$m_dataSource$.getCount("row") - 1) : window.Math.max(0, this.$m_endRowHeader$), $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)(this, $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$, 
      $level$$inline_866$$), (0,D.$JSCompiler_StaticMethods__setActive$$)(this, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$, $event$$22$$), $processed$$inline_865$$ = !0) : 36 == $keyCode$$inline_864_shiftKey$$inline_876$$ ? "column" === $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ && ($cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)(this, 
      0, $level$$inline_866$$), (0,D.$JSCompiler_StaticMethods__setActive$$)(this, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$, $event$$22$$), $processed$$inline_865$$ = !0) : 35 == $keyCode$$inline_864_shiftKey$$inline_876$$ ? "column" === $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ && ($JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = 
      !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? window.Math.max(0, this.$m_dataSource$.getCount("column") - 1) : window.Math.max(0, this.$m_endColHeader$), $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)(this, $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$, 
      $level$$inline_866$$), (0,D.$JSCompiler_StaticMethods__setActive$$)(this, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$, $event$$22$$), $processed$$inline_865$$ = !0) : $processed$$inline_865$$ = (0,D.$JSCompiler_StaticMethods_isReadCurrentContent$$)(this, $event$$22$$) ? (0,D.$JSCompiler_StaticMethods_readCurrentContent$$)(this) : (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$22$$), $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = 
      $processed$$inline_865$$) : $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = void 0
    }else {
      if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && null != this.$m_selectionFrontier$ && ($JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, this.createRange(this.$m_selectionFrontier$)), null == $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$)) {
        return
      }
      (0,D.$JSCompiler_StaticMethods__fireKeyDownEvent$$)(this, $event$$22$$);
      $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$22$$);
      if(!$JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$) {
        if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this)) {
          $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = !1;
          $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = $event$$22$$.keyCode;
          $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$22$$.target);
          if((0,D.$JSCompiler_StaticMethods_isActionableMode$$)(this)) {
            $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = (0,D.$JSCompiler_StaticMethods__handleActionableModeKeyDown$$)(this, $event$$22$$, $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$, !1)
          }else {
            if(113 == $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ || 13 == $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$) {
              (0,D.$JSCompiler_StaticMethods__enterActionableMode$$)(this, $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$)
            }else {
              if(27 == $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$) {
                this.$m_discontiguousSelection$ && (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, !1)
              }else {
                if((0,D.$JSCompiler_StaticMethods_isNavigationKey$$)($JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$)) {
                  $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$22$$), $keyCode$$inline_864_shiftKey$$inline_876$$ = $event$$22$$.shiftKey, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ || ($cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = 
                  (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$, $keyCode$$inline_864_shiftKey$$inline_876$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this), $event$$22$$))
                }else {
                  if($event$$22$$.shiftKey && 119 == $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$) {
                    (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, !this.$m_discontiguousSelection$), $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = !0
                  }else {
                    if(32 == $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ && ($axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$22$$), $keyCode$$inline_864_shiftKey$$inline_876$$ = $event$$22$$.shiftKey, "cell" == this.$m_options$.$getSelectionMode$() && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && 
                    ($keyCode$$inline_864_shiftKey$$inline_876$$ && !$axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ || $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$))) {
                      $axis$$inline_861_cell$$inline_874_ctrlKey$$inline_875_start$$inline_868$$ ? ($JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = this.$m_active$.indexes.column, (0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$, 
                      $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$, $event$$22$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleColumnSelected", {column:this.$m_active$.keys.column})) : ($JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = this.$m_active$.indexes.row, 
                      (0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$, $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$, $event$$22$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowSelected", {row:this.$m_active$.keys.row})), 
                      $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = !0
                    }
                  }
                }
              }
            }
          }
          (0,D.$JSCompiler_StaticMethods_isReadCurrentContent$$)(this, $event$$22$$) && ((0,D.$JSCompiler_StaticMethods_readCurrentContent$$)(this), $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = !0);
          $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$
        }else {
          $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = $event$$22$$.keyCode, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$22$$.target), $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ = 
          (0,D.$JSCompiler_StaticMethods_isActionableMode$$)(this) ? (0,D.$JSCompiler_StaticMethods__handleActionableModeKeyDown$$)(this, $event$$22$$, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$, !1) : 113 == $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ || 13 == $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ ? 
          (0,D.$JSCompiler_StaticMethods__enterActionableMode$$)(this, $cell$$inline_884_direction$$inline_9467_elem$$inline_863_end$$inline_869_processed$$inline_879$$) : (0,D.$JSCompiler_StaticMethods_isNavigationKey$$)($JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$) && !(0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$22$$) ? (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, 
          $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$, !1, $event$$22$$) : (0,D.$JSCompiler_StaticMethods_isReadCurrentContent$$)(this, $event$$22$$) ? (0,D.$JSCompiler_StaticMethods_readCurrentContent$$)(this) : !1
        }
      }
    }
    !0 === $JSCompiler_temp$$338_cell$$5_column$$inline_877_header$$inline_9465_index$$inline_862_keyCode$$inline_873_keyCode$$inline_883_processed$$1_row$$inline_878$$ && $event$$22$$.preventDefault()
  }
};
D.$JSCompiler_StaticMethods__fireKeyDownEvent$$ = function $$JSCompiler_StaticMethods__fireKeyDownEvent$$$($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $event$$23$$) {
  var $cell$$6_header$$6_rowKey$$1$$;
  $cell$$6_header$$6_rowKey$$1$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $event$$23$$.target);
  if(null == $cell$$6_header$$6_rowKey$$1$$) {
    $cell$$6_header$$6_rowKey$$1$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $event$$23$$.target);
    if(null == $cell$$6_header$$6_rowKey$$1$$) {
      return
    }
    $cell$$6_header$$6_rowKey$$1$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $cell$$6_header$$6_rowKey$$1$$)
  }else {
    $cell$$6_header$$6_rowKey$$1$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $cell$$6_header$$6_rowKey$$1$$.parentNode)
  }
  $JSCompiler_StaticMethods__fireKeyDownEvent$self$$.fireEvent("keydown", {event:$event$$23$$, ui:{rowKey:$cell$$6_header$$6_rowKey$$1$$}})
};
D.$JSCompiler_StaticMethods_findPos$$ = function $$JSCompiler_StaticMethods_findPos$$$($JSCompiler_StaticMethods_findPos$self$$, $element$$17$$) {
  var $parentPos$$, $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$;
  if($element$$17$$) {
    $parentPos$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_findPos$self$$, $element$$17$$.offsetParent);
    $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$ = $element$$17$$.offsetParent;
    var $matrixArray$$inline_889_transformZ$$inline_892$$, $transformY$$inline_891$$;
    $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$ ? ($cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$ = window.document.defaultView.getComputedStyle($cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$, null), $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$ = $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$.getPropertyValue("-webkit-transform") || 
    $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$.getPropertyValue("-moz-transform") || $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$.getPropertyValue("-ms-transform") || $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$.getPropertyValue("-o-transform") || $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$.getPropertyValue("transform"), 
    $matrixArray$$inline_889_transformZ$$inline_892$$ = $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$.substr(7, $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$.length - 8).split(", "), $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_889_transformZ$$inline_892$$[4], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_889_transformZ$$inline_892$$[4], 
    10), $transformY$$inline_891$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_889_transformZ$$inline_892$$[5], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_889_transformZ$$inline_892$$[5], 10), $matrixArray$$inline_889_transformZ$$inline_892$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_889_transformZ$$inline_892$$[6], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_889_transformZ$$inline_892$$[6], 10), $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$ = 
    [$cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$, $transformY$$inline_891$$, $matrixArray$$inline_889_transformZ$$inline_892$$]) : $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$ = [0, 0, 0];
    return[(0,window.parseInt)($parentPos$$[0], 10) + (0,window.parseInt)($element$$17$$.offsetLeft, 10) + $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$[0], (0,window.parseInt)($parentPos$$[1], 10) + (0,window.parseInt)($element$$17$$.offsetTop, 10) + $cs$$inline_887_element$$inline_886_transform_transform$$inline_888_transformX$$inline_890$$[1]]
  }
  return[0, 0]
};
D.$DvtDataGrid$$.prototype.$handleDatabodyMouseWheel$ = function $$DvtDataGrid$$$$$handleDatabodyMouseWheel$$($deltaY$$inline_896_event$$24$$) {
  var $delta$$1_deltaX$$inline_895$$;
  $deltaY$$inline_896_event$$24$$.preventDefault();
  $deltaY$$inline_896_event$$24$$.wheelDeltaX ? ($delta$$1_deltaX$$inline_895$$ = $deltaY$$inline_896_event$$24$$.wheelDeltaX, $deltaY$$inline_896_event$$24$$ = $deltaY$$inline_896_event$$24$$.wheelDeltaY) : ($delta$$1_deltaX$$inline_895$$ = 0, $deltaY$$inline_896_event$$24$$ = $deltaY$$inline_896_event$$24$$.detail ? -40 * $deltaY$$inline_896_event$$24$$.detail : $deltaY$$inline_896_event$$24$$.wheelDelta);
  $delta$$1_deltaX$$inline_895$$ = {deltaX:$delta$$1_deltaX$$inline_895$$, deltaY:$deltaY$$inline_896_event$$24$$};
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $delta$$1_deltaX$$inline_895$$.deltaX, $delta$$1_deltaX$$inline_895$$.deltaY)
};
D.$DvtDataGrid$$.prototype.$handleTouchStart$ = function $$DvtDataGrid$$$$$handleTouchStart$$($event$$25$$) {
  var $dir$$8_target$$42$$, $selection$$1$$;
  if(1 == $event$$25$$.touches.length) {
    this.$m_startX$ = $event$$25$$.touches[0].pageX;
    this.$m_startY$ = $event$$25$$.touches[0].pageY;
    this.$m_currentX$ = this.$m_startX$;
    this.$m_currentY$ = this.$m_startY$;
    this.$m_prevX$ = this.$m_startX$;
    this.$m_prevY$ = this.$m_startY$;
    this.$m_startTime$ = (new window.Date).getTime();
    this.$m_touchActive$ = !0;
    $dir$$8_target$$42$$ = $event$$25$$.touches[0].target;
    if((0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this)) {
      if($dir$$8_target$$42$$.className === this.getMappedStyle("selectaffordancetop") || $dir$$8_target$$42$$.className === this.getMappedStyle("selectaffordancebottom")) {
        $dir$$8_target$$42$$ = $dir$$8_target$$42$$.parentNode
      }
      if($dir$$8_target$$42$$ = $dir$$8_target$$42$$ === this.$m_topSelectIconContainer$ ? "top" : $dir$$8_target$$42$$ === this.$m_bottomSelectIconContainer$ ? "bottom" : null) {
        this.$m_touchMultipleSelect$ = !0, $selection$$1$$ = this.$GetSelection$(), this.$m_touchSelectAnchor$ = "top" === $dir$$8_target$$42$$ ? $selection$$1$$[$selection$$1$$.length - 1].endIndex : $selection$$1$$[$selection$$1$$.length - 1].startIndex
      }
    }
    !this.$m_touchMultipleSelect$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$25$$.touches[0].target, "row")) && (this.$m_databodyMove$ = !0)
  }else {
    this.$handleTouchCancel$()
  }
};
D.$DvtDataGrid$$.prototype.$handleTouchMove$ = function $$DvtDataGrid$$$$$handleTouchMove$$($event$$26$$) {
  var $diffX$$, $diffY$$;
  this.$m_touchActive$ ? ($event$$26$$.preventDefault(), this.$m_currentX$ = $event$$26$$.touches[0].pageX, this.$m_currentY$ = $event$$26$$.touches[0].pageY, $diffX$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_resources$.isRTLMode() && ($diffX$$ *= -1), this.$m_touchMultipleSelect$ ? (0,D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$)(this, $event$$26$$) : this.$m_databodyMove$ ? ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), 
  (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$26$$)) : (0,D.$JSCompiler_StaticMethods__handleNonSwipeScroll$$)(this, $diffX$$, $diffY$$), this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$()
};
D.$DvtDataGrid$$.prototype.$handleTouchEnd$ = function $$DvtDataGrid$$$$$handleTouchEnd$$($event$$27$$) {
  var $duration$$2$$;
  if(this.$m_touchActive$ && !$event$$27$$.defaultPrevented) {
    if(this.$m_touchMultipleSelect$) {
      $event$$27$$.preventDefault(), this.$m_touchMultipleSelect$ = !1
    }else {
      $duration$$2$$ = (new window.Date).getTime() - this.$m_startTime$;
      if(this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) {
        this.$m_databodyMove$ = !1;
        (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && 750 > $duration$$2$$ ? (0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$27$$) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, $event$$27$$);
        return
      }
      if(this.$m_databodyMove$) {
        $event$$27$$.preventDefault();
        this.$m_databodyMove$ = !1;
        (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, !0);
        return
      }
      this.$_handleSwipe$($event$$27$$)
    }
  }
  this.$handleTouchCancel$()
};
D.$JSCompiler_StaticMethods__calculateMomentum$$ = function $$JSCompiler_StaticMethods__calculateMomentum$$$($current_destination_distance$$, $duration$$3_start$$16$$, $speed_time$$, $currentScroll$$, $maxScroll$$, $rtl$$1$$) {
  var $overScroll$$;
  $current_destination_distance$$ -= $duration$$3_start$$16$$;
  $speed_time$$ = window.Math.abs($current_destination_distance$$) / $speed_time$$;
  $current_destination_distance$$ = $speed_time$$ * $speed_time$$ / 0.0012 * (0 > $current_destination_distance$$ ? -1 : 1);
  $duration$$3_start$$16$$ = $speed_time$$ / 6E-4;
  $rtl$$1$$ && ($current_destination_distance$$ *= -1);
  $currentScroll$$ - $current_destination_distance$$ > $maxScroll$$ ? ($overScroll$$ = window.Math.max(-50, $current_destination_distance$$), $current_destination_distance$$ = $currentScroll$$ - $maxScroll$$, $duration$$3_start$$16$$ = ($maxScroll$$ - $currentScroll$$) / $speed_time$$) : 0 > $currentScroll$$ - $current_destination_distance$$ && ($overScroll$$ = window.Math.min(50, $current_destination_distance$$), $current_destination_distance$$ = $currentScroll$$, $duration$$3_start$$16$$ = $currentScroll$$ / 
  $speed_time$$);
  return{$destination$:window.Math.round($current_destination_distance$$), duration:window.Math.max(100, $duration$$3_start$$16$$), $overScroll$:$overScroll$$}
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleTouchCancel$$() {
  this.$m_databodyMove$ && ((0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, !1), this.$m_databodyMove$ = !1);
  this.$m_touchSelectAnchor$ = null;
  this.$m_touchActive$ = this.$m_touchMultipleSelect$ = !1;
  this.$m_startTime$ = this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = 0
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchStart$$($event$$29$$) {
  var $header$$7$$;
  this.$m_touchStart$ = (new window.Date).getTime();
  1 == $event$$29$$.touches.length ? (this.$m_startX$ = $event$$29$$.touches[0].pageX, this.$m_startY$ = $event$$29$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_touchActive$ = !0, $header$$7$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$29$$.target), (0,window.setTimeout)(function() {
    this.$m_touchActive$ && (!this.$m_isResizing$ && this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) && ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), (0,D.$JSCompiler_StaticMethods__setActive$$)(this, $header$$7$$, $event$$29$$, !0))
  }.bind(this), 300), (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ((0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$29$$), (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, $event$$29$$)), !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$29$$.target, "row")) && (this.$m_databodyMove$ = !0)) : this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchMove$$($event$$30_header$$8$$) {
  var $diffX$$1$$, $diffY$$1$$;
  this.$m_touchActive$ ? ($event$$30_header$$8$$.preventDefault(), this.$m_currentX$ = $event$$30_header$$8$$.touches[0].pageX, this.$m_currentY$ = $event$$30_header$$8$$.touches[0].pageY, $diffX$$1$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$1$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) ? (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$30_header$$8$$) : this.$m_databodyMove$ ? ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), 
  (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$30_header$$8$$)) : ($event$$30_header$$8$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$30_header$$8$$.target), "column" == (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, $event$$30_header$$8$$) ? (0,D.$JSCompiler_StaticMethods__handleNonSwipeScroll$$)(this, $diffX$$1$$, 0) : (0,D.$JSCompiler_StaticMethods__handleNonSwipeScroll$$)(this, 0, $diffY$$1$$)), this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : 
  this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchEnd$$($event$$31$$) {
  var $header$$9_touchLength$$;
  $header$$9_touchLength$$ = (new window.Date).getTime() - this.$m_touchStart$;
  this.$m_touchActive$ && !$event$$31$$.defaultPrevented && (this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) ? ((0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$31$$), this.$m_currentX$ != this.$m_startX$ && this.$m_currentY$ != this.$m_startY$ && $event$$31$$.preventDefault()) : this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$ && 300 > $header$$9_touchLength$$ ? (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, 
  $event$$31$$.target) && ($event$$31$$.preventDefault(), (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$31$$), (0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this)) : this.$m_databodyMove$ ? ($event$$31$$.preventDefault(), this.$m_databodyMove$ = !1, (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, !0)) : ($header$$9_touchLength$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$31$$.target), this.$_handleSwipe$($event$$31$$, (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, 
  $header$$9_touchLength$$))));
  this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchCancel$$() {
  this.$m_databodyMove$ && ((0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, !1), this.$m_databodyMove$ = !1);
  this.$m_touchActive$ = !1;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = 0
};
D.$JSCompiler_StaticMethods__handleNonSwipeScroll$$ = function $$JSCompiler_StaticMethods__handleNonSwipeScroll$$$($JSCompiler_StaticMethods__handleNonSwipeScroll$self$$, $diffX$$2$$, $diffY$$2$$) {
  var $time$$1$$ = (new window.Date).getTime();
  (0,D.$JSCompiler_StaticMethods__disableTouchScrollAnimation$$)($JSCompiler_StaticMethods__handleNonSwipeScroll$self$$);
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods__handleNonSwipeScroll$self$$, $diffX$$2$$, $diffY$$2$$);
  300 < $time$$1$$ - $JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_startTime$ && ($JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_startX$ = $JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_currentX$, $JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_startY$ = $JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_currentY$, $JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_startTime$ = (new window.Date).getTime())
};
D.$DvtDataGrid$$.prototype.$_handleSwipe$ = function $$DvtDataGrid$$$$$_handleSwipe$$($event$$33$$, $axis$$17$$) {
  var $duration$$4_momentumY$$, $momentumX_rtl$$2$$, $diffX$$3$$, $diffY$$3$$, $transitionDuration$$;
  $duration$$4_momentumY$$ = (new window.Date).getTime() - this.$m_startTime$;
  $momentumX_rtl$$2$$ = this.$m_resources$.isRTLMode();
  $diffX$$3$$ = this.$m_currentX$ - this.$m_startX$;
  $diffY$$3$$ = this.$m_currentY$ - this.$m_startY$;
  $momentumX_rtl$$2$$ && ($diffX$$3$$ *= -1);
  if(10 > window.Math.abs($diffX$$3$$) && 10 > window.Math.abs($diffY$$3$$) && 200 > $duration$$4_momentumY$$) {
    $event$$33$$.preventDefault(), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$)(this)
  }else {
    if(400 > $duration$$4_momentumY$$) {
      $event$$33$$.preventDefault();
      if("row" != $axis$$17$$) {
        if($momentumX_rtl$$2$$ = (0,D.$JSCompiler_StaticMethods__calculateMomentum$$)(this.$m_currentX$, this.$m_startX$, $duration$$4_momentumY$$, this.$m_currentScrollLeft$, this.$m_scrollWidth$, $momentumX_rtl$$2$$), !(0,window.isNaN)($momentumX_rtl$$2$$.$overScroll$) && (0 < $momentumX_rtl$$2$$.$overScroll$ || this.$m_stopColumnFetch$)) {
          this.$m_extraScrollOverX$ = -1 * $momentumX_rtl$$2$$.$overScroll$
        }
      }else {
        $momentumX_rtl$$2$$ = {duration:0, $destination$:0}, $diffX$$3$$ = 0
      }
      if("column" != $axis$$17$$) {
        if($duration$$4_momentumY$$ = (0,D.$JSCompiler_StaticMethods__calculateMomentum$$)(this.$m_currentY$, this.$m_startY$, $duration$$4_momentumY$$, this.$m_currentScrollTop$, this.$m_scrollHeight$), !(0,window.isNaN)($duration$$4_momentumY$$.$overScroll$) && (0 < $duration$$4_momentumY$$.$overScroll$ || this.$m_stopRowFetch$)) {
          this.$m_extraScrollOverY$ = -1 * $duration$$4_momentumY$$.$overScroll$
        }
      }else {
        $duration$$4_momentumY$$ = {duration:0, $destination$:0}, $diffY$$3$$ = 0
      }
      $transitionDuration$$ = window.Math.max($momentumX_rtl$$2$$.duration, $duration$$4_momentumY$$.duration);
      this.$m_databody$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + "ms";
      this.$m_rowHeader$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + "ms";
      this.$m_colHeader$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + "ms";
      (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $diffX$$3$$ + $momentumX_rtl$$2$$.$destination$, $diffY$$3$$ + $duration$$4_momentumY$$.$destination$)
    }
  }
};
D.$DvtDataGrid$$.prototype.fireEvent = function $$DvtDataGrid$$$$fireEvent$($functionName$$, $details$$3$$) {
  var $callback$$30$$;
  if(!(null == $functionName$$ || null == $details$$3$$)) {
    return $callback$$30$$ = this.$callbacks$[$functionName$$], null != $callback$$30$$ ? $callback$$30$$($details$$3$$) : !0
  }
};
D.$DvtDataGrid$$.prototype.addListener = function $$DvtDataGrid$$$$addListener$($functionName$$1$$, $handler$$3$$) {
  this.$callbacks$[$functionName$$1$$] = $handler$$3$$
};
D.$DvtDataGrid$$.prototype.addListener = D.$DvtDataGrid$$.prototype.addListener;
D.$JSCompiler_StaticMethods_setElementHeight$$ = function $$JSCompiler_StaticMethods_setElementHeight$$$($elem$$9$$, $height$$24$$) {
  $elem$$9$$.style.height = $height$$24$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementHeight$$ = function $$JSCompiler_StaticMethods_getElementHeight$$$($elem$$10$$) {
  var $height$$25$$;
  if(-1 < $elem$$10$$.style.height.indexOf("px")) {
    return(0,window.parseInt)($elem$$10$$.style.height, 10)
  }
  window.document.body.contains($elem$$10$$) ? $height$$25$$ = window.Math.floor($elem$$10$$.getBoundingClientRect().height) : ($elem$$10$$.style.visibility = "hidden", window.document.body.appendChild($elem$$10$$), $height$$25$$ = window.Math.floor($elem$$10$$.getBoundingClientRect().height), window.document.body.removeChild($elem$$10$$), $elem$$10$$.style.visibility = "");
  return $height$$25$$
};
D.$JSCompiler_StaticMethods_setElementWidth$$ = function $$JSCompiler_StaticMethods_setElementWidth$$$($elem$$11$$, $width$$21$$) {
  $elem$$11$$.style.width = $width$$21$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementWidth$$ = function $$JSCompiler_StaticMethods_getElementWidth$$$($elem$$12$$) {
  var $width$$22$$;
  if(-1 < $elem$$12$$.style.width.indexOf("px")) {
    return(0,window.parseInt)($elem$$12$$.style.width, 10)
  }
  window.document.body.contains($elem$$12$$) ? $width$$22$$ = window.Math.floor($elem$$12$$.getBoundingClientRect().width) : ($elem$$12$$.style.visibility = "hidden", window.document.body.appendChild($elem$$12$$), $width$$22$$ = window.Math.floor($elem$$12$$.getBoundingClientRect().width), window.document.body.removeChild($elem$$12$$), $elem$$12$$.style.visibility = "");
  return $width$$22$$
};
D.$JSCompiler_StaticMethods_setElementDir$$ = function $$JSCompiler_StaticMethods_setElementDir$$$($elem$$13$$, $pix$$, $dir$$9$$) {
  $elem$$13$$.style[$dir$$9$$] = $pix$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementDir$$ = function $$JSCompiler_StaticMethods_getElementDir$$$($elem$$14$$, $dir$$10$$) {
  return(0,window.parseInt)($elem$$14$$.style[$dir$$10$$], 10)
};
D.$JSCompiler_StaticMethods__isInViewport$$ = function $$JSCompiler_StaticMethods__isInViewport$$$($JSCompiler_StaticMethods__isInViewport$self$$, $indexes$$9$$) {
  var $rowIndex$$1$$, $columnIndex$$1$$;
  $rowIndex$$1$$ = $indexes$$9$$.row;
  $columnIndex$$1$$ = $indexes$$9$$.column;
  return-1 === $rowIndex$$1$$ && -1 === $columnIndex$$1$$ ? -1 : -1 === $rowIndex$$1$$ ? $columnIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ ? 1 : $columnIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ ? 2 : 3 : -1 === $columnIndex$$1$$ ? $rowIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ ? 1 : $rowIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 2 : 3 : $columnIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ && 
  $columnIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ && $rowIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ && $rowIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 3 : -1
};
D.$DvtDataGrid$$.prototype.$handleModelEvent$ = function $$DvtDataGrid$$$$$handleModelEvent$$($event$$34_i$$inline_925_transition_timing_function$$inline_9488$$) {
  var $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$, $keys$$5$$, $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$, $adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$, $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$, $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$, 
  $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$;
  if(this.$m_initialized$) {
    if($afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$ = $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$.operation, $keys$$5$$ = $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$.keys, $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$.header && ($adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$ = $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$.header), 
    $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ = $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$.indices, $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$ = $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$.source, $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$ = $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$.indexes, 
    $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ = $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$.silent, "insert" === $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$) {
      $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ = $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$.result, (0,D.$JSCompiler_StaticMethods__adjustActive$$)(this, $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$, $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$), (0,D.$JSCompiler_StaticMethods__adjustSelectionOnModelChange$$)(this, 
      $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$, $keys$$5$$, $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$), null != $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ ? $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$ && $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$ instanceof 
      window.oj.FlattenedTreeDataGridDataSource ? (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$, $adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$) : (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$) : 
      ($cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ = (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$), 3 === $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ || 2 === $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ && 
      $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$.row == this.$m_endRow$ + 1 ? null != $keys$$5$$.row && ((0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this) ? (this.empty(), this.refresh(this.$m_root$)) : (this.fetchHeaders("row", $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderInsertsFetchSuccess$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$.row, 
      this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$_handleCellInsertsFetchSuccess$}))) : (1 === $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ && (this.$m_startRow$++, this.$m_startRowHeader$++, this.$m_endRow$++, this.$m_endRowHeader$++, this.$m_startRowPixel$ += this.$m_avgRowHeight$, this.$m_startRowHeaderPixel$ += this.$m_avgRowHeight$, this.$m_endRowPixel$ += 
      this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ += this.$m_avgRowHeight$, $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ = this.$m_databody$.firstChild.firstChild, null != $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$, 
      this.$m_avgRowHeight$), $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ = this.$m_rowHeader$.firstChild.firstChild, null != $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$, 
      this.$m_avgRowHeight$)), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$)))
    }else {
      if("update" === $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$) {
        3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$) && (-1 != this.$m_endRowHeader$ && this.fetchHeaders("row", $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderUpdatesFetchSuccess$, error:this.$handleHeadersFetchError$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$.row, 
        this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$_handleCellUpdatesFetchSuccess$, error:this.$handleCellsFetchError$}))
      }else {
        if("delete" === $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$) {
          if((0,D.$JSCompiler_StaticMethods__adjustActive$$)(this, $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$, $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$), (0,D.$JSCompiler_StaticMethods__adjustSelectionOnModelChange$$)(this, $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$, $keys$$5$$, $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$), $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$ && 
          $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$ instanceof window.oj.FlattenedTreeDataGridDataSource && (0,D.$JSCompiler_StaticMethods_supportsTransitions$$)()) {
            (0,D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$)(this, $keys$$5$$)
          }else {
            if($beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ && (0,D.$JSCompiler_StaticMethods_supportsTransitions$$)()) {
              if($beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$) {
                var $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$ = this, $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$, $j$$inline_9474$$, $k$$inline_9475$$, $row$$inline_9477$$, $totalHeight$$inline_9478$$, $height$$inline_9479$$, $databodyContent$$inline_9481$$, $lastTopRow$$inline_9483$$, $start$$inline_9484$$, $firstRowCase$$inline_9485$$, $height$$inline_928_opacity$$inline_9489$$;
                (0,D.$JSCompiler_StaticMethods__signalTaskStart$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$);
                $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$ = [];
                $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ = [];
                for($i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$ = 0;$i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$ < $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$.length - 1;$i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$++) {
                  1 == $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$[$i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$ + 1] - $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$[$i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$] ? $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$.push($beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$[$i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$]) : 
                  ($afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$.push($beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$[$i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$]), $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$.push($afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$), 
                  $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$ = [])
                }
                $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$.push($beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$[$beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$.length - 1]);
                $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$.push($afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$);
                $row$$inline_9477$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$[$beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$.length - 1]);
                $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$ = $row$$inline_9477$$.nextSibling;
                $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$ = 0;
                $adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
                $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay");
                $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
                $height$$inline_928_opacity$$inline_9489$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("opacity");
                (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
                $firstRowCase$$inline_9485$$ = !0;
                $databodyContent$$inline_9481$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$m_databody$.firstChild;
                $lastTopRow$$inline_9483$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$[0]);
                0 != $lastTopRow$$inline_9483$$.previousSibling.childElementCount && ($lastTopRow$$inline_9483$$ = $lastTopRow$$inline_9483$$.previousSibling, $firstRowCase$$inline_9485$$ = !1);
                for($beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ = 0;$beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ < $keys$$5$$.length;$beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$++) {
                  $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$ = $keys$$5$$[$beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$], $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$.row && ($beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$ = $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$.row, 
                  $row$$inline_9477$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$), null != $row$$inline_9477$$ ? ($height$$inline_9479$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, $row$$inline_9477$$), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9477$$, 
                  $adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$, "400ms"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9477$$, $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$, "0ms"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9477$$, $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$, "Cubic-bezier(0.70,0.00,0.51,1.29)"), 
                  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9477$$, $height$$inline_928_opacity$$inline_9489$$, 0)) : $height$$inline_9479$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$m_avgRowHeight$, $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$), 
                  null != $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$ && ($height$$inline_9479$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$), $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$ = $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$.nextSibling, 
                  (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$, -$height$$inline_9479$$), $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$_remove$($beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$), $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$.style.display = "none", $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$m_endRowHeader$ -= 
                  1, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$m_endRowHeaderPixel$ -= $height$$inline_9479$$), $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$m_endRow$ -= 1, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$m_endRowPixel$ -= $height$$inline_9479$$, $totalHeight$$inline_9478$$ += $height$$inline_9479$$)
                }
                if(1 < $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$.length) {
                  for($beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ = 0;$beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ < $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$.length - 1;$beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$++) {
                    $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$ += $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$[$beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$].length;
                    $adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$ = $height$$inline_9479$$ * $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$;
                    for($j$$inline_9474$$ = $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$[$beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$][$cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$[$beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$].length - 
                    1] + 1;$j$$inline_9474$$ < $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$[$beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ + 1][0];$j$$inline_9474$$++) {
                      $row$$inline_9477$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, $j$$inline_9474$$), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($row$$inline_9477$$, "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", 0, "-" + $adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$)
                    }
                  }
                }
                $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ = $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$;
                for($adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$ = $height$$inline_9479$$ * $keys$$5$$.length;$cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$;) {
                  $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ = $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$.previousSibling, (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$, 
                  "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", 0, "-" + $adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$), ($cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ = $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$.nextSibling) || 
                  $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$.addEventListener("transitionend", function() {
                    for($j$$inline_9474$$ = 0;$j$$inline_9474$$ < $keys$$5$$.length;$j$$inline_9474$$++) {
                      $keys$$5$$[$j$$inline_9474$$].row && ($row$$inline_9477$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, $keys$$5$$[$j$$inline_9474$$].row), $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$_remove$($row$$inline_9477$$), $row$$inline_9477$$.style.display = "none")
                    }
                    $start$$inline_9484$$ = -1;
                    for($k$$inline_9475$$ = 1;$k$$inline_9475$$ < $databodyContent$$inline_9481$$.childElementCount;$k$$inline_9475$$++) {
                      $row$$inline_9477$$ = $databodyContent$$inline_9481$$.childNodes[$k$$inline_9475$$], (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, $lastTopRow$$inline_9483$$) && (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, $lastTopRow$$inline_9483$$) == (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, 
                      $databodyContent$$inline_9481$$.childNodes[$k$$inline_9475$$]) && ($start$$inline_9484$$ = $k$$inline_9475$$ + 1), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_9477$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 0, "remove"), (0,D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$)($row$$inline_9477$$), 0 < $start$$inline_9484$$ ? $databodyContent$$inline_9481$$.childNodes[$k$$inline_9475$$].style.top = $lastTopRow$$inline_9483$$.offsetTop + 
                      $height$$inline_9479$$ * ($k$$inline_9475$$ - $start$$inline_9484$$ + 1) + "px" : $firstRowCase$$inline_9485$$ && ($databodyContent$$inline_9481$$.childNodes[$k$$inline_9475$$].style.top = $lastTopRow$$inline_9483$$.offsetTop + $height$$inline_9479$$ * ($k$$inline_9475$$ - 1) + "px")
                    }
                    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_9481$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$inline_9481$$) - $totalHeight$$inline_9478$$);
                    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$m_scroller$.firstChild, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$inline_9481$$) - $totalHeight$$inline_9478$$);
                    (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$);
                    $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$m_stopRowFetch$ = !1;
                    (0,D.$JSCompiler_StaticMethods_fillViewport$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$.$m_currentScrollTop$);
                    (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_9469$$);
                    this.removeEventListener("transitionend", arguments.callee, !1)
                  }, !1)
                }
              }else {
                (0,D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$)(this, $keys$$5$$)
              }
            }else {
              $adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$ = $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$;
              $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$ = $keys$$5$$;
              var $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$, $row$$inline_927$$, $flag$$inline_936_index$$inline_937_referenceRow$$inline_929$$, $insideRowsDeleted$$inline_939$$;
              window.Array.isArray($keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$) || ($keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$ = (0,window.Array)($keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$), $adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$ = (0,window.Array)($adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$));
              for($event$$34_i$$inline_925_transition_timing_function$$inline_9488$$ = $insideRowsDeleted$$inline_939$$ = $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$ = $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$ = $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$ = $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ = 0;$event$$34_i$$inline_925_transition_timing_function$$inline_9488$$ < 
              $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$.length;$event$$34_i$$inline_925_transition_timing_function$$inline_9488$$++) {
                $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$ = $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$[$event$$34_i$$inline_925_transition_timing_function$$inline_9488$$], $flag$$inline_936_index$$inline_937_referenceRow$$inline_929$$ = $adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$[$event$$34_i$$inline_925_transition_timing_function$$inline_9488$$], null != $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$.row && 
                ($height$$inline_928_opacity$$inline_9489$$ = 0, $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$ = $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$.row, $flag$$inline_936_index$$inline_937_referenceRow$$inline_929$$ = (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $flag$$inline_936_index$$inline_937_referenceRow$$inline_929$$), 1 === $flag$$inline_936_index$$inline_937_referenceRow$$inline_929$$ ? ($beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$++, 
                $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ += this.$m_avgRowHeight$, this.$m_startRowPixel$ -= this.$m_avgRowHeight$, this.$m_endRowPixel$ -= this.$m_avgRowHeight$, -1 != this.$m_endRowHeader$ && (this.$m_startRowHeaderPixel$ -= this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ -= this.$m_avgRowHeight$), $row$$inline_927$$ = this.$m_databody$.firstChild.firstChild, null != $row$$inline_927$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($row$$inline_927$$, 
                -this.$m_avgRowHeight$), $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$ = this.$m_rowHeader$.firstChild.firstChild, null != $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$ && (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$, -this.$m_avgRowHeight$)) : 3 === $flag$$inline_936_index$$inline_937_referenceRow$$inline_929$$ ? ($insideRowsDeleted$$inline_939$$++, $row$$inline_927$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, 
                $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$), null != $row$$inline_927$$ && ($height$$inline_928_opacity$$inline_9489$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)(this, $row$$inline_927$$), $flag$$inline_936_index$$inline_937_referenceRow$$inline_929$$ = $row$$inline_927$$.nextSibling, this.$_remove$($row$$inline_927$$), (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($flag$$inline_936_index$$inline_937_referenceRow$$inline_929$$, -$height$$inline_928_opacity$$inline_9489$$), 
                this.$m_endRowPixel$ -= $height$$inline_928_opacity$$inline_9489$$), $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)(this, $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$), null != $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$ && ($height$$inline_928_opacity$$inline_9489$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)(this, $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$), 
                $flag$$inline_936_index$$inline_937_referenceRow$$inline_929$$ = $key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$.nextSibling, this.$_remove$($key$$inline_924_rowHeader$$inline_935_rowKey$$inline_926$$), (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($flag$$inline_936_index$$inline_937_referenceRow$$inline_929$$, -$height$$inline_928_opacity$$inline_9489$$), this.$m_endRowHeaderPixel$ -= $height$$inline_928_opacity$$inline_9489$$), $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$ += 
                $height$$inline_928_opacity$$inline_9489$$) : "scroll" === (0,D.$JSCompiler_StaticMethods_getScrollPolicy$$)(this.$m_options$) && ($afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$ += this.$m_avgRowHeight$))
              }
              this.$m_startRow$ -= $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$;
              this.$m_endRow$ = this.$m_endRow$ - $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$ - $insideRowsDeleted$$inline_939$$;
              -1 != this.$m_endRowHeader$ && (this.$m_startRowHeader$ -= $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$, this.$m_endRowHeader$ = this.$m_endRowHeader$ - $beforeRowsDeleted$$inline_938_key$$inline_9472_rowHeader$$inline_9482_rowKey$$inline_9476$$ - $insideRowsDeleted$$inline_939$$);
              $adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$ = this.$m_databody$.firstChild;
              $keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$ = this.$m_scroller$.firstChild;
              $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$) - ($beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$ + $i$$inline_9494_indexes$$10_insideRowsHeight$$inline_932_referenceRow$$inline_9480$$ + $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$);
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($adjustment$$inline_9491_databodyContent$$inline_930_headerSet$$7_indexes$$inline_921_transition_duration$$inline_9486$$, $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$);
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($keys$$inline_922_scrollerContent$$inline_941_source$$2_transition_delay$$inline_9487$$, $beforeRowsHeight$$inline_931_databodyContentHeight$$inline_934_i$$inline_9473_indices_rwp$$inline_9492$$);
              (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this);
              !$cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ && !0 != this.$m_moveActive$ && (this.$m_resizeRequired$ = !0, this.$m_stopRowFetch$ = !1, -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = !1), (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$));
              (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this)
            }
          }
        }else {
          "refresh" === $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$ || "reset" === $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$ ? ($cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ = this.$getVisibility$(), "visible" === $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ ? 
          (this.empty(), null != this.$m_root$.offsetParent ? this.refresh(this.$m_root$) : this.$setVisibility$("refresh")) : "hidden" === $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ && (this.empty(), this.$setVisibility$("refresh"))) : "sync" === $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$ && ($cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$ = 
          $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$.pageSize, this.$m_fetching$ = {}, this.$m_startRow$ = 0, this.$m_endRow$ = -1, this.$m_startRowHeader$ = 0, this.$m_endRowHeader$ = -1, this.$m_startCol$ = this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = 0, this.$m_endCol$ = -1, this.$m_startColHeader$ = 0, this.$m_endColHeader$ = -1, this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = 
          this.$m_startColPixel$ = 0, this.$m_columnHeaderLevelCount$ = this.$m_rowHeaderLevelCount$ = void 0, this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = !1, this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = this.$m_avgColWidth$ = this.$m_avgRowHeight$ = void 0, this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = !1, this.$m_prevActive$ = this.$m_active$ = this.$m_selection$ = null, null != this.$m_empty$ && 
          (this.$m_root$.removeChild(this.$m_empty$), this.$m_empty$ = null), this.$m_initialized$ = !1, this.fetchHeaders("row", 0, this.$m_rowHeader$, $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$, {success:function($event$$34_i$$inline_925_transition_timing_function$$inline_9488$$, $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$) {
            (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$, $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$)
          }}), this.fetchHeaders("column", 0, this.$m_colHeader$, void 0, {success:function($event$$34_i$$inline_925_transition_timing_function$$inline_9488$$, $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$) {
            (0,D.$JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$$)(this, $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$, $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$)
          }}), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $cellSet$$7_flag$$inline_905_idxs$$inline_9496_pageSize$$inline_948_row$$inline_906_rowHeader$$inline_907_rwn$$inline_9490_silent_visibility$$inline_944$$, null, {success:function($event$$34_i$$inline_925_transition_timing_function$$inline_9488$$, $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$) {
            (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $event$$34_i$$inline_925_transition_timing_function$$inline_9488$$, $afterRowsHeight$$inline_933_gap_size$$inline_9493_idx$$inline_9495_operation$$1$$)
          }}), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this))
        }
      }
    }
  }else {
    void 0 == this.$m_modelEvents$ && (this.$m_modelEvents$ = []), this.$m_modelEvents$.push($event$$34_i$$inline_925_transition_timing_function$$inline_9488$$)
  }
};
D.$JSCompiler_StaticMethods__adjustActive$$ = function $$JSCompiler_StaticMethods__adjustActive$$$($JSCompiler_StaticMethods__adjustActive$self$$, $operation$$2$$, $indexes$$11$$) {
  var $activeRowIndex$$, $i$$22$$, $rowIndex$$2$$, $activeHeader$$, $adjustment$$4$$ = 0;
  if(null != $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$) {
    if("cell" == $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.type) {
      $activeHeader$$ = !1, $activeRowIndex$$ = $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.indexes.row
    }else {
      if("row" === $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.axis) {
        $activeHeader$$ = !0, $activeRowIndex$$ = $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.index
      }else {
        return
      }
    }
    window.Array.isArray($indexes$$11$$) || ($indexes$$11$$ = (0,window.Array)($indexes$$11$$));
    if(!0 === $JSCompiler_StaticMethods__adjustActive$self$$.$m_moveActive$) {
      if("insert" === $operation$$2$$) {
        $activeHeader$$ ? $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.index = $indexes$$11$$[0].row : $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.indexes.row = $indexes$$11$$[0].row;
        return
      }
      if("delete" === $operation$$2$$ && $indexes$$11$$[0].row === $activeRowIndex$$) {
        return
      }
    }
    $adjustment$$4$$ = "insert" === $operation$$2$$ ? 1 : -1;
    for($i$$22$$ = 0;$i$$22$$ < $indexes$$11$$.length;$i$$22$$++) {
      $rowIndex$$2$$ = $indexes$$11$$[$i$$22$$].row, $rowIndex$$2$$ < $activeRowIndex$$ ? $activeHeader$$ ? $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.index += $adjustment$$4$$ : $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.indexes.row += $adjustment$$4$$ : $rowIndex$$2$$ === $activeRowIndex$$ && "delete" === $operation$$2$$ && (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods__adjustActive$self$$, null)
    }
  }
};
D.$JSCompiler_StaticMethods__adjustSelectionOnModelChange$$ = function $$JSCompiler_StaticMethods__adjustSelectionOnModelChange$$$($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$, $movedRow_operation$$3$$, $keys$$6$$, $indexes$$12$$) {
  var $selection$$2$$, $i$$23$$, $rowKey$$2$$, $rowIndex$$3$$, $j$$6$$, $range$$5$$, $newRowKey_startRowKey$$, $endRowKey$$, $startRowIndex$$, $endRowIndex$$, $adjustment$$5$$;
  window.Array.isArray($keys$$6$$) || ($keys$$6$$ = (0,window.Array)($keys$$6$$));
  window.Array.isArray($indexes$$12$$) || ($indexes$$12$$ = (0,window.Array)($indexes$$12$$));
  $selection$$2$$ = $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$GetSelection$();
  if(null == $keys$$6$$ || null == $indexes$$12$$ || $keys$$6$$.length != $indexes$$12$$.length || 0 == $selection$$2$$.length) {
    $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_moveActive$ && "insert" == $movedRow_operation$$3$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$) && (0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$) && ($movedRow_operation$$3$$ = "cell" == $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_options$.$getSelectionMode$() ? 
    $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.createRange($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_active$.indexes, $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_active$.indexes, $keys$$6$$[0], $keys$$6$$[0]) : $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.createRange($indexes$$12$$[0], $indexes$$12$$[0], $keys$$6$$[0], $keys$$6$$[0]), $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_selectionFrontier$ = 
    $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_active$.indexes, $selection$$2$$.push($movedRow_operation$$3$$)), $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_moveActive$ = !1)
  }else {
    $adjustment$$5$$ = "insert" === $movedRow_operation$$3$$ ? 1 : -1;
    for($i$$23$$ = 0;$i$$23$$ < $keys$$6$$.length;$i$$23$$++) {
      $rowKey$$2$$ = $keys$$6$$[$i$$23$$].row;
      $rowIndex$$3$$ = $indexes$$12$$[$i$$23$$].row;
      for($j$$6$$ = $selection$$2$$.length;$j$$6$$--;) {
        $range$$5$$ = $selection$$2$$[$j$$6$$], $newRowKey_startRowKey$$ = $range$$5$$.startKey.row, $endRowKey$$ = $range$$5$$.endKey.row, $startRowIndex$$ = $range$$5$$.startIndex.row, $endRowIndex$$ = $range$$5$$.endIndex.row, $newRowKey_startRowKey$$ == $rowKey$$2$$ ? $endRowKey$$ == $rowKey$$2$$ && "delete" == $movedRow_operation$$3$$ ? $selection$$2$$.splice($j$$6$$, 1) : ($newRowKey_startRowKey$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$, 
        $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_databody$.firstChild.childNodes[$range$$5$$.startIndex.row + 1 - $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_startRow$]), $range$$5$$.startKey.row = $newRowKey_startRowKey$$, $range$$5$$.endIndex.row += $adjustment$$5$$) : $endRowKey$$ == $rowKey$$2$$ ? ($newRowKey_startRowKey$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$, $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_databody$.firstChild.childNodes[$range$$5$$.endIndex.row - 
        1 - $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_startRow$]), $range$$5$$.endKey.row = $newRowKey_startRowKey$$, $range$$5$$.endIndex.row += $adjustment$$5$$) : $rowIndex$$3$$ < $startRowIndex$$ ? ($range$$5$$.startIndex.row += $adjustment$$5$$, $range$$5$$.endIndex.row += $adjustment$$5$$) : $rowIndex$$3$$ < $endRowIndex$$ && ($range$$5$$.endIndex.row += $adjustment$$5$$)
      }
    }
  }
};
D.$DvtDataGrid$$.prototype.$_handleCellInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellInsertsFetchSuccess$$($cellSet$$8$$, $cellRanges$$) {
  this.$m_initialized$ = !1;
  this.$handleCellsFetchSuccess$($cellSet$$8$$, $cellRanges$$, this.$m_endRow$ >= $cellRanges$$[0].start);
  var $row$$inline_958_rowTop$$inline_961$$, $diff$$inline_962_viewportBottom$$inline_966_viewportTop$$inline_959$$, $viewportBottom$$inline_960_viewportTop$$inline_965$$;
  $row$$inline_958_rowTop$$inline_961$$ = this.$m_databody$.firstChild.childNodes[$cellRanges$$[0].start - this.$m_startRow$];
  null != $row$$inline_958_rowTop$$inline_961$$ && ($diff$$inline_962_viewportBottom$$inline_966_viewportTop$$inline_959$$ = this.$m_currentScrollTop$, $viewportBottom$$inline_960_viewportTop$$inline_965$$ = this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $row$$inline_958_rowTop$$inline_961$$ = $row$$inline_958_rowTop$$inline_961$$.offsetTop, $diff$$inline_962_viewportBottom$$inline_966_viewportTop$$inline_959$$ -= $row$$inline_958_rowTop$$inline_961$$, 
  0 < $diff$$inline_962_viewportBottom$$inline_966_viewportTop$$inline_959$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, $diff$$inline_962_viewportBottom$$inline_966_viewportTop$$inline_959$$) : ($diff$$inline_962_viewportBottom$$inline_966_viewportTop$$inline_959$$ = $viewportBottom$$inline_960_viewportTop$$inline_965$$ - $row$$inline_958_rowTop$$inline_961$$, 0 > $diff$$inline_962_viewportBottom$$inline_966_viewportTop$$inline_959$$ && (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 
  0, $diff$$inline_962_viewportBottom$$inline_966_viewportTop$$inline_959$$)));
  (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) || ($viewportBottom$$inline_960_viewportTop$$inline_965$$ = this.$m_currentScrollTop$, $diff$$inline_962_viewportBottom$$inline_966_viewportTop$$inline_959$$ = this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $viewportBottom$$inline_960_viewportTop$$inline_965$$ > this.$m_startRowPixel$ ? this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)(this, 
  this.$m_databody$) : $diff$$inline_962_viewportBottom$$inline_966_viewportTop$$inline_959$$ < this.$m_endRowPixel$ && this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)(this, this.$m_databody$), $viewportBottom$$inline_960_viewportTop$$inline_965$$ > this.$m_startRowHeaderPixel$ ? this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromTop$$)(this, this.$m_rowHeader$) : 
  $diff$$inline_962_viewportBottom$$inline_966_viewportTop$$inline_959$$ < this.$m_endRowPixel$ && this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$)(this, this.$m_rowHeader$));
  (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this);
  this.$m_stopRowFetch$ = !1;
  -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = !1);
  (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
D.$DvtDataGrid$$.prototype.$_handleHeaderInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderInsertsFetchSuccess$$($headerSet$$8$$, $headerRanges$$) {
  this.$m_resizeRequired$ = !0;
  this.$handleHeadersFetchSuccess$($headerSet$$8$$, $headerRanges$$, this.$m_endRowHeader$ >= $headerRanges$$.start)
};
D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$ = function $$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$$($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$, $cellSet$$9_rowHeaderFragment$$inline_970$$, $headerSet$$9_rowFragment$$1$$) {
  var $rowStart$$7$$, $headerRange$$9_isAppend$$inline_974_rowCount$$7$$, $columnRange$$5_columnStart$$5_totalRowHeight$$inline_972$$, $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$, $referenceRow$$inline_978_rowHeaderFragment$$1$$, $headerCount$$3_insertStartPixel$$inline_981$$, $c$$2_i$$inline_982$$, $newTop$$inline_985_totalRowHeight$$4$$, $className$$10_deltaY$$inline_986$$, $renderer$$6_row$$inline_983_rowHeader$$inline_984$$, $referenceRowHeader$$inline_979_rowRange$$5$$;
  $rowStart$$7$$ = $cellSet$$9_rowHeaderFragment$$inline_970$$.getStart("row");
  $headerRange$$9_isAppend$$inline_974_rowCount$$7$$ = $cellSet$$9_rowHeaderFragment$$inline_970$$.getCount("row");
  $columnRange$$5_columnStart$$5_totalRowHeight$$inline_972$$ = $cellSet$$9_rowHeaderFragment$$inline_970$$.getStart("column");
  $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$ = $cellSet$$9_rowHeaderFragment$$inline_970$$.getCount("column");
  if((0,D.$JSCompiler_StaticMethods_supportsTransitions$$)()) {
    if(null != $headerSet$$9_rowFragment$$1$$) {
      $referenceRow$$inline_978_rowHeaderFragment$$1$$ = window.document.createDocumentFragment();
      $headerCount$$3_insertStartPixel$$inline_981$$ = $headerSet$$9_rowFragment$$1$$.getCount();
      $c$$2_i$$inline_982$$ = $newTop$$inline_985_totalRowHeight$$4$$ = 0;
      $className$$10_deltaY$$inline_986$$ = $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.getMappedStyle("row") + " " + $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.getMappedStyle("headercell") + " " + $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.getMappedStyle("rowheadercell");
      for($renderer$$6_row$$inline_983_rowHeader$$inline_984$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_options$, "row");0 < $headerCount$$3_insertStartPixel$$inline_981$$ - $c$$2_i$$inline_982$$;) {
        $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$ = $rowStart$$7$$ + $c$$2_i$$inline_982$$, $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$ = (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$, $referenceRow$$inline_978_rowHeaderFragment$$1$$, $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$, 0, 0, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_startRowPixel$ + 
        $newTop$$inline_985_totalRowHeight$$4$$, !0, !1, $renderer$$6_row$$inline_983_rowHeader$$inline_984$$, $headerSet$$9_rowFragment$$1$$, "row", $className$$10_deltaY$$inline_986$$, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_rowHeaderLevelCount$), $c$$2_i$$inline_982$$ += $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$.count, $newTop$$inline_985_totalRowHeight$$4$$ += $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$.totalHeight
      }
    }
    $headerSet$$9_rowFragment$$1$$ = window.document.createDocumentFragment();
    $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$ = (0,D.$JSCompiler_StaticMethods__addRows$$)($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$, $headerSet$$9_rowFragment$$1$$, !0, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_startRowPixel$, $rowStart$$7$$, $headerRange$$9_isAppend$$inline_974_rowCount$$7$$, $columnRange$$5_columnStart$$5_totalRowHeight$$inline_972$$, !1, $cellSet$$9_rowHeaderFragment$$inline_970$$);
    $cellSet$$9_rowHeaderFragment$$inline_970$$ = $referenceRow$$inline_978_rowHeaderFragment$$1$$;
    $columnRange$$5_columnStart$$5_totalRowHeight$$inline_972$$ = $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$.totalRowHeight;
    var $databodyContent$$inline_975$$, $rowHeaderSupport$$inline_976$$, $rowHeaderContent$$inline_977$$, $lastAnimatedElement$$inline_987$$, $transitionListener$$inline_988$$;
    (0,D.$JSCompiler_StaticMethods__signalTaskStart$$)($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$);
    $headerRange$$9_isAppend$$inline_974_rowCount$$7$$ = $rowStart$$7$$ > $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_endRow$;
    $databodyContent$$inline_975$$ = $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_databody$.firstChild;
    $rowHeaderSupport$$inline_976$$ = null == $cellSet$$9_rowHeaderFragment$$inline_970$$ ? !1 : !0;
    $referenceRow$$inline_978_rowHeaderFragment$$1$$ = $databodyContent$$inline_975$$.childNodes[$rowStart$$7$$ - $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_startRow$ - 1];
    $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($referenceRow$$inline_978_rowHeaderFragment$$1$$, "top");
    $headerCount$$3_insertStartPixel$$inline_981$$ = $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($referenceRow$$inline_978_rowHeaderFragment$$1$$);
    (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($referenceRow$$inline_978_rowHeaderFragment$$1$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 10);
    $rowHeaderSupport$$inline_976$$ && ($rowHeaderContent$$inline_977$$ = $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_rowHeader$.firstChild, $referenceRowHeader$$inline_979_rowRange$$5$$ = $rowHeaderContent$$inline_977$$.childNodes[$rowStart$$7$$ - $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_startRow$ - 1], (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($referenceRowHeader$$inline_979_rowRange$$5$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 
    10));
    for($c$$2_i$$inline_982$$ = 0;$c$$2_i$$inline_982$$ < $headerSet$$9_rowFragment$$1$$.childNodes.length;$c$$2_i$$inline_982$$++) {
      $renderer$$6_row$$inline_983_rowHeader$$inline_984$$ = $headerSet$$9_rowFragment$$1$$.childNodes[$c$$2_i$$inline_982$$], $newTop$$inline_985_totalRowHeight$$4$$ = $headerCount$$3_insertStartPixel$$inline_981$$ + (0,D.$JSCompiler_StaticMethods_getElementDir$$)($renderer$$6_row$$inline_983_rowHeader$$inline_984$$, "top"), $className$$10_deltaY$$inline_986$$ = $columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$ - $newTop$$inline_985_totalRowHeight$$4$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($renderer$$6_row$$inline_983_rowHeader$$inline_984$$, 
      $newTop$$inline_985_totalRowHeight$$4$$, "top"), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($renderer$$6_row$$inline_983_rowHeader$$inline_984$$, 0, 0, "linear", 0, $className$$10_deltaY$$inline_986$$), $rowHeaderSupport$$inline_976$$ && ($renderer$$6_row$$inline_983_rowHeader$$inline_984$$ = $cellSet$$9_rowHeaderFragment$$inline_970$$.childNodes[$c$$2_i$$inline_982$$], (0,D.$JSCompiler_StaticMethods_setElementDir$$)($renderer$$6_row$$inline_983_rowHeader$$inline_984$$, $newTop$$inline_985_totalRowHeight$$4$$, 
      "top"), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($renderer$$6_row$$inline_983_rowHeader$$inline_984$$, 0, 0, "linear", 0, $className$$10_deltaY$$inline_986$$))
    }
    for($c$$2_i$$inline_982$$ = $rowStart$$7$$ - $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_startRow$;$c$$2_i$$inline_982$$ < $databodyContent$$inline_975$$.childNodes.length;$c$$2_i$$inline_982$$++) {
      $renderer$$6_row$$inline_983_rowHeader$$inline_984$$ = $databodyContent$$inline_975$$.childNodes[$c$$2_i$$inline_982$$], $newTop$$inline_985_totalRowHeight$$4$$ = $columnRange$$5_columnStart$$5_totalRowHeight$$inline_972$$ + (0,D.$JSCompiler_StaticMethods_getElementDir$$)($renderer$$6_row$$inline_983_rowHeader$$inline_984$$, "top"), $className$$10_deltaY$$inline_986$$ = -$columnRange$$5_columnStart$$5_totalRowHeight$$inline_972$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($renderer$$6_row$$inline_983_rowHeader$$inline_984$$, 
      $newTop$$inline_985_totalRowHeight$$4$$, "top"), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($renderer$$6_row$$inline_983_rowHeader$$inline_984$$, 0, 0, "linear", 0, $className$$10_deltaY$$inline_986$$), $rowHeaderSupport$$inline_976$$ && ($renderer$$6_row$$inline_983_rowHeader$$inline_984$$ = $rowHeaderContent$$inline_977$$.childNodes[$c$$2_i$$inline_982$$], (0,D.$JSCompiler_StaticMethods_setElementDir$$)($renderer$$6_row$$inline_983_rowHeader$$inline_984$$, $newTop$$inline_985_totalRowHeight$$4$$, 
      "top"), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($renderer$$6_row$$inline_983_rowHeader$$inline_984$$, 0, 0, "linear", 0, $className$$10_deltaY$$inline_986$$))
    }
    $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_endRow$ += $headerSet$$9_rowFragment$$1$$.childNodes.length;
    $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_endRowPixel$ += $columnRange$$5_columnStart$$5_totalRowHeight$$inline_972$$;
    $rowHeaderSupport$$inline_976$$ && ($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_endRowHeader$ += $cellSet$$9_rowHeaderFragment$$inline_970$$.childNodes.length, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_endRowHeaderPixel$ += $columnRange$$5_columnStart$$5_totalRowHeight$$inline_972$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_975$$, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_endRowPixel$ - $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_startRowPixel$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_scroller$.firstChild, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_endRowPixel$ - $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_startRowPixel$);
    (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$);
    $headerRange$$9_isAppend$$inline_974_rowCount$$7$$ ? ($databodyContent$$inline_975$$.appendChild($headerSet$$9_rowFragment$$1$$), $rowHeaderSupport$$inline_976$$ && $rowHeaderContent$$inline_977$$.appendChild($cellSet$$9_rowHeaderFragment$$inline_970$$)) : ($databodyContent$$inline_975$$.insertBefore($headerSet$$9_rowFragment$$1$$, $referenceRow$$inline_978_rowHeaderFragment$$1$$.nextSibling), $rowHeaderSupport$$inline_976$$ && $rowHeaderContent$$inline_977$$.insertBefore($cellSet$$9_rowHeaderFragment$$inline_970$$, 
    $referenceRowHeader$$inline_979_rowRange$$5$$.nextSibling));
    (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$);
    $lastAnimatedElement$$inline_987$$ = $databodyContent$$inline_975$$.lastChild;
    $transitionListener$$inline_988$$ = function $$transitionListener$$inline_988$$$() {
      (0,D.$JSCompiler_StaticMethods__handleAnimationEnd$$)($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$);
      $lastAnimatedElement$$inline_987$$.removeEventListener("transitionend", $transitionListener$$inline_988$$, !1)
    };
    $lastAnimatedElement$$inline_987$$.addEventListener("transitionend", $transitionListener$$inline_988$$, !1);
    (0,window.setTimeout)(function() {
      var $cellSet$$9_rowHeaderFragment$$inline_970$$;
      for($cellSet$$9_rowHeaderFragment$$inline_970$$ = $databodyContent$$inline_975$$.childNodes.length - 1;$cellSet$$9_rowHeaderFragment$$inline_970$$ >= $rowStart$$7$$ - $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_startRow$;$cellSet$$9_rowHeaderFragment$$inline_970$$--) {
        (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($databodyContent$$inline_975$$.childNodes[$cellSet$$9_rowHeaderFragment$$inline_970$$], "500ms", 0, "ease-out", 0, 0), $rowHeaderSupport$$inline_976$$ && (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($rowHeaderContent$$inline_977$$.childNodes[$cellSet$$9_rowHeaderFragment$$inline_970$$], "500ms", 0, "ease-out", 0, 0)
      }
    }, 0)
  }else {
    $referenceRowHeader$$inline_979_rowRange$$5$$ = {axis:"row", start:$rowStart$$7$$, count:$headerRange$$9_isAppend$$inline_974_rowCount$$7$$}, $columnRange$$5_columnStart$$5_totalRowHeight$$inline_972$$ = {axis:"column", start:$columnRange$$5_columnStart$$5_totalRowHeight$$inline_972$$, count:$columnCount$$3_index$$62_referenceRowTop$$inline_980_returnVal$$11$$}, null != $headerSet$$9_rowFragment$$1$$ && ($headerRange$$9_isAppend$$inline_974_rowCount$$7$$ = {axis:"row", header:$JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_rowHeader$, 
    start:$rowStart$$7$$, count:$headerSet$$9_rowFragment$$1$$.getCount()}, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_fetching$.row = $headerRange$$9_isAppend$$inline_974_rowCount$$7$$, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$_handleHeaderInsertsFetchSuccess$($headerSet$$9_rowFragment$$1$$, $headerRange$$9_isAppend$$inline_974_rowCount$$7$$)), $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$_handleCellInsertsFetchSuccess$($cellSet$$9_rowHeaderFragment$$inline_970$$, 
    [$referenceRowHeader$$inline_979_rowRange$$5$$, $columnRange$$5_columnStart$$5_totalRowHeight$$inline_972$$])
  }
};
D.$DvtDataGrid$$.prototype.$_handleHeaderUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderUpdatesFetchSuccess$$($headerSet$$10$$, $headerRange$$10$$) {
  var $row$$20_rowStart$$8$$, $rowHeaderContent$$5$$, $fragment$$5_rowIndex$$4$$;
  this.$m_fetching$[$headerRange$$10$$.axis] = !1;
  $row$$20_rowStart$$8$$ = $headerRange$$10$$.start;
  $rowHeaderContent$$5$$ = this.$m_rowHeader$.firstChild;
  $fragment$$5_rowIndex$$4$$ = $row$$20_rowStart$$8$$ - this.$m_startRowHeader$;
  $row$$20_rowStart$$8$$ = $rowHeaderContent$$5$$.childNodes[$fragment$$5_rowIndex$$4$$];
  $fragment$$5_rowIndex$$4$$ = (0,D.$JSCompiler_StaticMethods_buildRowHeaders$$)(this, this.$m_rowHeader$, $headerSet$$10$$, $fragment$$5_rowIndex$$4$$, 1, !0, !0);
  $rowHeaderContent$$5$$.replaceChild($fragment$$5_rowIndex$$4$$, $row$$20_rowStart$$8$$);
  null != this.$m_active$ && ("header" === this.$m_active$.type && "row" === this.$m_active$.axis && (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $row$$20_rowStart$$8$$) === this.$m_active$.key) && (0,D.$JSCompiler_StaticMethods__highlightActive$$)(this);
  (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)(this)
};
D.$DvtDataGrid$$.prototype.$_handleCellUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellUpdatesFetchSuccess$$($cellSet$$10$$, $cellRange$$7$$) {
  var $rowIndex$$5_rowStart$$9$$, $columnStart$$inline_996_databodyContent$$10$$, $renderer$$7$$, $columnBandingInterval$$3$$;
  this.$m_fetching$.cells = !1;
  $rowIndex$$5_rowStart$$9$$ = $cellRange$$7$$[0].start;
  $columnStart$$inline_996_databodyContent$$10$$ = this.$m_databody$.firstChild;
  $renderer$$7$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
  $columnBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
  (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)(this.$m_options$);
  $rowIndex$$5_rowStart$$9$$ -= this.$m_startRow$;
  var $row$$inline_993$$ = $columnStart$$inline_996_databodyContent$$10$$.childNodes[$rowIndex$$5_rowStart$$9$$];
  $columnStart$$inline_996_databodyContent$$10$$ = this.$m_startCol$;
  var $self$$inline_999$$, $width$$inline_1000$$;
  (0,D.$JSCompiler_StaticMethods_supportsTransitions$$)() ? ($self$$inline_999$$ = this, (0,D.$JSCompiler_StaticMethods__signalTaskStart$$)($self$$inline_999$$), $row$$inline_993$$.addEventListener("transitionend", function() {
    $row$$inline_993$$.style.left = "";
    (0,D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$)($row$$inline_993$$);
    $row$$inline_993$$.removeEventListener("transitionend", arguments.callee, !1);
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($self$$inline_999$$) && (0,D.$JSCompiler_StaticMethods_applySelection$$)($self$$inline_999$$);
    (0,D.$JSCompiler_StaticMethods__highlightActive$$)($self$$inline_999$$);
    (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)($self$$inline_999$$)
  }), $width$$inline_1000$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($row$$inline_993$$, $width$$inline_1000$$, "left"), this.$m_utils$.empty($row$$inline_993$$), (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$10$$, $row$$inline_993$$, $rowIndex$$5_rowStart$$9$$, $renderer$$7$$, !0, $columnStart$$inline_996_databodyContent$$10$$, !1, $columnBandingInterval$$3$$), (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), 
  (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($row$$inline_993$$, "250ms", 0, "linear", -1 * $width$$inline_1000$$, 0)) : (this.$m_utils$.empty($row$$inline_993$$), (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$10$$, $row$$inline_993$$, $rowIndex$$5_rowStart$$9$$, $renderer$$7$$, !0, $columnStart$$inline_996_databodyContent$$10$$, !1, $columnBandingInterval$$3$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this), 
  (0,D.$JSCompiler_StaticMethods__highlightActive$$)(this));
  (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)(this)
};
D.$JSCompiler_StaticMethods__getRowByLocalPosition$$ = function $$JSCompiler_StaticMethods__getRowByLocalPosition$$$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $pos$$4$$) {
  var $indexes$$inline_1003$$ = {row:$pos$$4$$}, $keys$$inline_1004$$ = {row:null, column:null};
  null != $indexes$$inline_1003$$.row && ($keys$$inline_1004$$.row = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_databody$.firstChild.childNodes[$indexes$$inline_1003$$.row - $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_startRow$]));
  null != $indexes$$inline_1003$$.column && ($keys$$inline_1004$$.column = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $indexes$$inline_1003$$.column, $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_ColumnHeaderLevelCount$ - 1)));
  return(0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $keys$$inline_1004$$.$row$)
};
D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$ = function $$JSCompiler_StaticMethods__collapseRowsWithAnimation$$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$) {
  var $databodyContent$$13$$, $referenceRow$$5$$, $referenceRowHeader$$1$$, $lastAnimationElement$$, $i$$27$$, $rowKey$$6$$, $row$$25$$, $rowsToRemove$$, $rowHeadersToRemove$$, $totalRowHeight$$5$$, $rowHeader$$17$$, $tranisitionListener$$, $rowHeaderSupport$$1$$;
  (0,D.$JSCompiler_StaticMethods__signalTaskStart$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
  $rowsToRemove$$ = [];
  $totalRowHeight$$5$$ = 0;
  $rowHeaderSupport$$1$$ = -1 == $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeader$ ? !1 : !0;
  $databodyContent$$13$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_databody$.firstChild;
  for($row$$25$$ = $referenceRow$$5$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$[0].row).previousSibling;$row$$25$$ && !((0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$25$$, "top") < $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollTop$);) {
    (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$25$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 10), $row$$25$$ = $row$$25$$.previousSibling
  }
  if($rowHeaderSupport$$1$$) {
    $rowHeadersToRemove$$ = [];
    for($row$$25$$ = $referenceRowHeader$$1$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$[0].row).previousSibling;$row$$25$$ && !((0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$25$$, "top") < $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollTop$);) {
      (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$25$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 10), $row$$25$$ = $row$$25$$.previousSibling
    }
  }
  for($i$$27$$ = 0;$i$$27$$ < $keys$$12$$.length;$i$$27$$++) {
    $rowKey$$6$$ = $keys$$12$$[$i$$27$$].row, $row$$25$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $rowKey$$6$$), null != $row$$25$$ && ($rowsToRemove$$.push($row$$25$$), $totalRowHeight$$5$$ += (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$25$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($row$$25$$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$25$$, "top") - $totalRowHeight$$5$$, "top"), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($row$$25$$, 
    0, 0, "linear", 0, $totalRowHeight$$5$$)), $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $rowKey$$6$$), null != $rowHeader$$17$$ && ($rowHeadersToRemove$$.push($rowHeader$$17$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$17$$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$17$$, "top") - $totalRowHeight$$5$$, "top"), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($rowHeader$$17$$, 
    0, 0, "linear", 0, $totalRowHeight$$5$$)))
  }
  for(;$row$$25$$.nextSibling;) {
    $row$$25$$ = $row$$25$$.nextSibling, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($row$$25$$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$25$$, "top") - $totalRowHeight$$5$$, "top"), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($row$$25$$, 0, 0, "linear", 0, $totalRowHeight$$5$$), $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = $rowHeader$$17$$.nextSibling, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$17$$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$17$$, 
    "top") - $totalRowHeight$$5$$, "top"), (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($rowHeader$$17$$, 0, 0, "linear", 0, $totalRowHeight$$5$$))
  }
  $lastAnimationElement$$ = $databodyContent$$13$$.lastChild;
  $tranisitionListener$$ = function $$tranisitionListener$$$() {
    var $keys$$12$$;
    for($keys$$12$$ = 0;$keys$$12$$ < $rowsToRemove$$.length;$keys$$12$$++) {
      $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$_remove$($rowsToRemove$$[$keys$$12$$]), $rowHeaderSupport$$1$$ && $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$_remove$($rowHeadersToRemove$$[$keys$$12$$])
    }
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$13$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowPixel$ - $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_startRowPixel$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_scroller$.firstChild, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowPixel$ - $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_startRowPixel$);
    (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
    (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
    (0,D.$JSCompiler_StaticMethods_fillViewport$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollTop$);
    (0,D.$JSCompiler_StaticMethods__handleAnimationEnd$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
    $lastAnimationElement$$.removeEventListener("transitionend", $tranisitionListener$$, !1)
  };
  $lastAnimationElement$$.addEventListener("transitionend", $tranisitionListener$$, !1);
  $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRow$ -= $rowsToRemove$$.length;
  $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowPixel$ -= $totalRowHeight$$5$$;
  $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_stopRowFetch$ = !1;
  $rowHeaderSupport$$1$$ && ($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeader$ -= $rowHeadersToRemove$$.length, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeaderPixel$ -= $totalRowHeight$$5$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_stopRowHeaderFetch$ = !1);
  $row$$25$$ = $referenceRow$$5$$.nextSibling;
  $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = $referenceRowHeader$$1$$.nextSibling);
  (0,window.setTimeout)(function() {
    for(;$row$$25$$;) {
      (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($row$$25$$, "400ms", 0, "ease-out", 0, 0), $row$$25$$ = $row$$25$$.nextSibling, $rowHeaderSupport$$1$$ && ((0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($rowHeader$$17$$, "400ms", 0, "ease-out", 0, 0), $rowHeader$$17$$ = $rowHeader$$17$$.nextSibling)
    }
  }, 0)
};
D.$JSCompiler_StaticMethods__handleAnimationEnd$$ = function $$JSCompiler_StaticMethods__handleAnimationEnd$$$($JSCompiler_StaticMethods__handleAnimationEnd$self$$) {
  var $i$$29$$, $databodyContent$$14$$, $rowHeaderContent$$6$$;
  $databodyContent$$14$$ = $JSCompiler_StaticMethods__handleAnimationEnd$self$$.$m_databody$.firstChild;
  $rowHeaderContent$$6$$ = $JSCompiler_StaticMethods__handleAnimationEnd$self$$.$m_rowHeader$.firstChild;
  for($i$$29$$ = 0;$i$$29$$ < $databodyContent$$14$$.childNodes.length;$i$$29$$++) {
    (0,D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$)($databodyContent$$14$$.childNodes[$i$$29$$]), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$14$$.childNodes[$i$$29$$], (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), null, "remove"), -1 != $JSCompiler_StaticMethods__handleAnimationEnd$self$$.$m_endRowHeader$ && ((0,D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$)($rowHeaderContent$$6$$.childNodes[$i$$29$$]), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($rowHeaderContent$$6$$.childNodes[$i$$29$$], 
    (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), null, "remove"))
  }
  (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)($JSCompiler_StaticMethods__handleAnimationEnd$self$$)
};
D.$JSCompiler_StaticMethods__findRowByKey$$ = function $$JSCompiler_StaticMethods__findRowByKey$$$($JSCompiler_StaticMethods__findRowByKey$self$$, $key$$30$$) {
  var $rows$$5$$, $row$$26$$, $i$$30$$, $rowKey$$7$$;
  if(null == $JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$ || null == $JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$.firstChild) {
    return null
  }
  $rows$$5$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$.firstChild.childNodes;
  for($i$$30$$ = 0;$i$$30$$ < $rows$$5$$.length;$i$$30$$++) {
    if($row$$26$$ = $rows$$5$$[$i$$30$$], $rowKey$$7$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__findRowByKey$self$$, $row$$26$$), $rowKey$$7$$ == $key$$30$$) {
      return $row$$26$$
    }
  }
  return null
};
D.$JSCompiler_StaticMethods__findRowHeaderByKey$$ = function $$JSCompiler_StaticMethods__findRowHeaderByKey$$$($JSCompiler_StaticMethods__findRowHeaderByKey$self$$, $key$$31$$) {
  var $rowHeaders$$2$$, $rowHeader$$18$$, $i$$31$$, $rowKey$$8$$;
  if(null == $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$) {
    return null
  }
  $rowHeaders$$2$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$.getElementsByClassName($JSCompiler_StaticMethods__findRowHeaderByKey$self$$.getMappedStyle("rowheadercell"));
  for($i$$31$$ = 0;$i$$31$$ < $rowHeaders$$2$$.length;$i$$31$$++) {
    if($rowHeader$$18$$ = $rowHeaders$$2$$[$i$$31$$], $rowKey$$8$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__findRowHeaderByKey$self$$, $rowHeader$$18$$), $rowKey$$8$$ == $key$$31$$) {
      return $rowHeader$$18$$
    }
  }
  return null
};
D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$ = function $$JSCompiler_StaticMethods__findColumnHeaderByKey$$$($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$, $key$$32$$) {
  var $columnHeaders$$2$$, $columnHeader$$4$$, $i$$32$$, $columnKey$$;
  if(null == $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$) {
    return null
  }
  $columnHeaders$$2$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$.getElementsByClassName($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.getMappedStyle("colheadercell"));
  for($i$$32$$ = 0;$i$$32$$ < $columnHeaders$$2$$.length;$i$$32$$++) {
    if($columnHeader$$4$$ = $columnHeaders$$2$$[$i$$32$$], $columnKey$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$, $columnHeader$$4$$), $columnKey$$ == $key$$32$$) {
      return $columnHeader$$4$$
    }
  }
  return null
};
D.$DvtDataGrid$$.prototype.$_setActiveByIndex$ = function $$DvtDataGrid$$$$$_setActiveByIndex$$($index$$64$$, $event$$36$$, $clearSelection$$) {
  return(0,D.$JSCompiler_StaticMethods__setActive$$)(this, (0,D.$JSCompiler_StaticMethods__getCellByIndex$$)(this, $index$$64$$), $event$$36$$, $clearSelection$$)
};
D.$JSCompiler_StaticMethods__updateActive$$ = function $$JSCompiler_StaticMethods__updateActive$$$($JSCompiler_StaticMethods__updateActive$self$$, $activeObject$$) {
  var $keys$$inline_1012_level$$20$$, $cells$$inline_1014_newActiveElement_row$$inline_1013$$;
  if(null == $activeObject$$) {
    (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods__updateActive$self$$, null, null, null, !0)
  }else {
    if(null != $activeObject$$.keys) {
      a: {
        $keys$$inline_1012_level$$20$$ = $activeObject$$.keys;
        $cells$$inline_1014_newActiveElement_row$$inline_1013$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__updateActive$self$$, $keys$$inline_1012_level$$20$$.row);
        if(null != $cells$$inline_1014_newActiveElement_row$$inline_1013$$) {
          $cells$$inline_1014_newActiveElement_row$$inline_1013$$ = $cells$$inline_1014_newActiveElement_row$$inline_1013$$.childNodes;
          for(var $i$$inline_1015$$ = 0;$i$$inline_1015$$ < $cells$$inline_1014_newActiveElement_row$$inline_1013$$.length;$i$$inline_1015$$++) {
            if($cells$$inline_1014_newActiveElement_row$$inline_1013$$[$i$$inline_1015$$][$JSCompiler_StaticMethods__updateActive$self$$.$m_resources$.getMappedAttribute("context")].keys.column === $keys$$inline_1012_level$$20$$.column) {
              $cells$$inline_1014_newActiveElement_row$$inline_1013$$ = $cells$$inline_1014_newActiveElement_row$$inline_1013$$[$i$$inline_1015$$];
              break a
            }
          }
        }
        $cells$$inline_1014_newActiveElement_row$$inline_1013$$ = null
      }
    }else {
      null != $activeObject$$.indexes ? $cells$$inline_1014_newActiveElement_row$$inline_1013$$ = (0,D.$JSCompiler_StaticMethods__getCellByIndex$$)($JSCompiler_StaticMethods__updateActive$self$$, $activeObject$$.indexes) : null != $activeObject$$.axis && ($keys$$inline_1012_level$$20$$ = null == $activeObject$$.level ? 0 : $activeObject$$.level, "column" == $activeObject$$.axis ? null != $activeObject$$.key ? $cells$$inline_1014_newActiveElement_row$$inline_1013$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__updateActive$self$$, 
      $activeObject$$.key) : null != $activeObject$$.index && ($cells$$inline_1014_newActiveElement_row$$inline_1013$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods__updateActive$self$$, $activeObject$$.index, $keys$$inline_1012_level$$20$$)) : "row" == $activeObject$$.axis && (null != $activeObject$$.key ? $cells$$inline_1014_newActiveElement_row$$inline_1013$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__updateActive$self$$, 
      $activeObject$$.key) : null != $activeObject$$.index && ($cells$$inline_1014_newActiveElement_row$$inline_1013$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods__updateActive$self$$, $activeObject$$.index, $keys$$inline_1012_level$$20$$))))
    }
  }
  null != $cells$$inline_1014_newActiveElement_row$$inline_1013$$ && (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods__updateActive$self$$, $cells$$inline_1014_newActiveElement_row$$inline_1013$$, null, null, !0)
};
D.$JSCompiler_StaticMethods__setActive$$ = function $$JSCompiler_StaticMethods__setActive$$$($JSCompiler_StaticMethods__setActive$self$$, $activeObject$$inline_1018_activeRow$$inline_1024_element$$19$$, $event$$37$$, $className$$inline_1021_clearSelection$$1$$, $silent$$2$$) {
  if(null != $activeObject$$inline_1018_activeRow$$inline_1024_element$$19$$) {
    var $active$$ = (0,D.$JSCompiler_StaticMethods__createActiveObject$$)($JSCompiler_StaticMethods__setActive$self$$, $activeObject$$inline_1018_activeRow$$inline_1024_element$$19$$);
    if((0,D.$JSCompiler_StaticMethods__compareActive$$)($active$$, $JSCompiler_StaticMethods__setActive$self$$.$m_active$) && ($silent$$2$$ || (0,D.$JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$$)($JSCompiler_StaticMethods__setActive$self$$, $active$$, $JSCompiler_StaticMethods__setActive$self$$.$m_active$, $event$$37$$))) {
      $JSCompiler_StaticMethods__setActive$self$$.$m_prevActive$ = $JSCompiler_StaticMethods__setActive$self$$.$m_active$;
      $activeObject$$inline_1018_activeRow$$inline_1024_element$$19$$ = $JSCompiler_StaticMethods__setActive$self$$.$m_active$ = $active$$;
      "header" === $activeObject$$inline_1018_activeRow$$inline_1024_element$$19$$.type ? (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods__setActive$self$$, $activeObject$$inline_1018_activeRow$$inline_1024_element$$19$$) : (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods__setActive$self$$, $activeObject$$inline_1018_activeRow$$inline_1024_element$$19$$.indexes);
      $className$$inline_1021_clearSelection$$1$$ && (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__setActive$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__setActive$self$$);
      (0,D.$JSCompiler_StaticMethods__unhighlightActiveObject$$)($JSCompiler_StaticMethods__setActive$self$$, $JSCompiler_StaticMethods__setActive$self$$.$m_prevActive$);
      (0,D.$JSCompiler_StaticMethods__highlightActiveObject$$)($JSCompiler_StaticMethods__setActive$self$$, $JSCompiler_StaticMethods__setActive$self$$.$m_active$, $JSCompiler_StaticMethods__setActive$self$$.$m_prevActive$);
      var $activeKey$$inline_1022_activeRowHeader$$inline_1026$$, $prevActiveKey$$inline_1023_prevActiveRowHeader$$inline_1027$$, $prevActiveRow$$inline_1025$$;
      $className$$inline_1021_clearSelection$$1$$ = $JSCompiler_StaticMethods__setActive$self$$.getMappedStyle("draggable");
      $activeKey$$inline_1022_activeRowHeader$$inline_1026$$ = (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__setActive$self$$);
      $prevActiveKey$$inline_1023_prevActiveRowHeader$$inline_1027$$ = (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__setActive$self$$, !0);
      $activeObject$$inline_1018_activeRow$$inline_1024_element$$19$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__setActive$self$$, $activeKey$$inline_1022_activeRowHeader$$inline_1026$$);
      $prevActiveRow$$inline_1025$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__setActive$self$$, $prevActiveKey$$inline_1023_prevActiveRowHeader$$inline_1027$$);
      (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($prevActiveRow$$inline_1025$$, $className$$inline_1021_clearSelection$$1$$) && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($prevActiveRow$$inline_1025$$, $className$$inline_1021_clearSelection$$1$$), $prevActiveKey$$inline_1023_prevActiveRowHeader$$inline_1027$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__setActive$self$$, $prevActiveKey$$inline_1023_prevActiveRowHeader$$inline_1027$$), (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($prevActiveKey$$inline_1023_prevActiveRowHeader$$inline_1027$$, 
      $className$$inline_1021_clearSelection$$1$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($prevActiveKey$$inline_1023_prevActiveRowHeader$$inline_1027$$, $className$$inline_1021_clearSelection$$1$$));
      (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__setActive$self$$, $activeObject$$inline_1018_activeRow$$inline_1024_element$$19$$) && ($activeKey$$inline_1022_activeRowHeader$$inline_1026$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__setActive$self$$, $activeKey$$inline_1022_activeRowHeader$$inline_1026$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($activeObject$$inline_1018_activeRow$$inline_1024_element$$19$$, 
      $className$$inline_1021_clearSelection$$1$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($activeKey$$inline_1022_activeRowHeader$$inline_1026$$, $className$$inline_1021_clearSelection$$1$$));
      $silent$$2$$ || $JSCompiler_StaticMethods__setActive$self$$.fireEvent("currentCell", {event:$event$$37$$, ui:$active$$});
      return!0
    }
  }else {
    if(!$JSCompiler_StaticMethods__setActive$self$$.$m_scrollIndexAfterFetch$ && !$JSCompiler_StaticMethods__setActive$self$$.$m_scrollHeaderAfterFetch$) {
      if($silent$$2$$ || (0,D.$JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$$)($JSCompiler_StaticMethods__setActive$self$$, $active$$, $JSCompiler_StaticMethods__setActive$self$$.$m_active$, $event$$37$$)) {
        $JSCompiler_StaticMethods__setActive$self$$.$m_prevActive$ = $JSCompiler_StaticMethods__setActive$self$$.$m_active$, $JSCompiler_StaticMethods__setActive$self$$.$m_active$ = null, (0,D.$JSCompiler_StaticMethods__unhighlightActiveObject$$)($JSCompiler_StaticMethods__setActive$self$$, $JSCompiler_StaticMethods__setActive$self$$.$m_prevActive$), $silent$$2$$ || $JSCompiler_StaticMethods__setActive$self$$.fireEvent("currentCell", {event:$event$$37$$, ui:$active$$})
      }
      return!0
    }
  }
  return!1
};
D.$JSCompiler_StaticMethods__createActiveObject$$ = function $$JSCompiler_StaticMethods__createActiveObject$$$($JSCompiler_StaticMethods__createActiveObject$self$$, $element$$20$$) {
  var $context$$3$$ = $element$$20$$[$JSCompiler_StaticMethods__createActiveObject$self$$.$m_resources$.getMappedAttribute("context")];
  return(0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$20$$, $JSCompiler_StaticMethods__createActiveObject$self$$.getMappedStyle("headercell")) ? {type:"header", axis:$context$$3$$.axis, index:(0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods__createActiveObject$self$$, $element$$20$$), key:$context$$3$$.key, level:$context$$3$$.level} : {type:"cell", indexes:{row:$JSCompiler_StaticMethods__createActiveObject$self$$.$getRowIndex$($element$$20$$.parentNode), 
  column:$JSCompiler_StaticMethods__createActiveObject$self$$.$getCellIndex$($element$$20$$)}, keys:{row:$context$$3$$.keys.row, column:$context$$3$$.keys.column}}
};
D.$JSCompiler_StaticMethods__getActiveElement$$ = function $$JSCompiler_StaticMethods__getActiveElement$$$($JSCompiler_StaticMethods__getActiveElement$self$$) {
  return(0,D.$JSCompiler_StaticMethods__getElementFromActiveObject$$)($JSCompiler_StaticMethods__getActiveElement$self$$, $JSCompiler_StaticMethods__getActiveElement$self$$.$m_active$)
};
D.$JSCompiler_StaticMethods__getElementFromActiveObject$$ = function $$JSCompiler_StaticMethods__getElementFromActiveObject$$$($JSCompiler_StaticMethods__getElementFromActiveObject$self$$, $active$$1$$) {
  var $elements$$;
  if(null != $active$$1$$) {
    if("header" == $active$$1$$.type) {
      if("row" === $active$$1$$.axis) {
        return(0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__getElementFromActiveObject$self$$, $active$$1$$.key)
      }
      if("column" === $active$$1$$.axis) {
        return(0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__getElementFromActiveObject$self$$, $active$$1$$.key)
      }
    }else {
      if($elements$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__getElementFromActiveObject$self$$, $JSCompiler_StaticMethods__getElementFromActiveObject$self$$.createRange($active$$1$$.indexes)), null != $elements$$) {
        return $elements$$[0]
      }
    }
  }
  return null
};
D.$JSCompiler_StaticMethods__compareActive$$ = function $$JSCompiler_StaticMethods__compareActive$$$($active1$$, $active2$$) {
  if(!(null == $active1$$ && null == $active2$$)) {
    if(!(null == $active1$$ && null != $active2$$ || null != $active1$$ && null == $active2$$) && $active1$$.type == $active2$$.type) {
      if("header" == $active1$$.type) {
        if($active1$$.index != $active2$$.index || $active1$$.key != $active2$$.key || $active1$$.axis != $active2$$.axis || $active1$$.level != $active2$$.level) {
          return!0
        }
      }else {
        if($active1$$.indexes.row != $active2$$.indexes.row || $active1$$.indexes.column != $active2$$.indexes.column || $active1$$.keys.row != $active2$$.keys.row || $active1$$.keys.column != $active2$$.keys.column) {
          return!0
        }
      }
    }else {
      return!0
    }
  }
  return!1
};
D.$JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$$ = function $$JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$$$($JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$self$$, $newActive$$, $oldActive$$, $event$$38$$) {
  return $JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$self$$.fireEvent("beforeCurrentCell", {event:$event$$38$$, ui:{currentCell:$newActive$$, previousCurrentCell:$oldActive$$}})
};
D.$JSCompiler_StaticMethods__isDatabodyCellActive$$ = function $$JSCompiler_StaticMethods__isDatabodyCellActive$$$($JSCompiler_StaticMethods__isDatabodyCellActive$self$$) {
  return null != $JSCompiler_StaticMethods__isDatabodyCellActive$self$$.$m_active$ && "cell" == $JSCompiler_StaticMethods__isDatabodyCellActive$self$$.$m_active$.type
};
D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickActive$$$($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$40$$) {
  var $cell$$7$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$40$$.target);
  null != $cell$$7$$ && (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $cell$$7$$, $event$$40$$)
};
D.$JSCompiler_StaticMethods__getCellByIndex$$ = function $$JSCompiler_StaticMethods__getCellByIndex$$$($JSCompiler_StaticMethods__getCellByIndex$self$$, $indexes$$16$$) {
  var $elements$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__getCellByIndex$self$$, $JSCompiler_StaticMethods__getCellByIndex$self$$.createRange($indexes$$16$$));
  return null != $elements$$1$$ ? $elements$$1$$[0] : null
};
D.$DvtDataGrid$$.prototype.$getRowIndex$ = function $$DvtDataGrid$$$$$getRowIndex$$($row$$28$$) {
  for(var $index$$66$$ = this.$m_startRow$;$row$$28$$.previousSibling;) {
    $index$$66$$ += 1, $row$$28$$ = $row$$28$$.previousSibling
  }
  return $index$$66$$
};
D.$DvtDataGrid$$.prototype.$getCellIndex$ = function $$DvtDataGrid$$$$$getCellIndex$$($cell$$8$$) {
  for(var $index$$67$$ = this.$m_startCol$;$cell$$8$$.previousSibling;) {
    $index$$67$$ += 1, $cell$$8$$ = $cell$$8$$.previousSibling
  }
  return $index$$67$$
};
D.$JSCompiler_StaticMethods_getHeaderCellIndex$$ = function $$JSCompiler_StaticMethods_getHeaderCellIndex$$$($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$11$$) {
  var $axis$$20$$, $index$$68$$;
  $axis$$20$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$11$$);
  if("row" === $axis$$20$$) {
    if(1 < $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_rowHeaderLevelCount$) {
      $index$$68$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$11$$.parentNode, "start");
      if($header$$11$$ === $header$$11$$.parentNode.firstChild) {
        return $index$$68$$
      }
      $index$$68$$--
    }else {
      $index$$68$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startRowHeader$
    }
  }else {
    if("column" === $axis$$20$$) {
      if(1 < $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_columnHeaderLevelCount$) {
        $index$$68$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$11$$.parentNode, "start");
        if($header$$11$$ === $header$$11$$.parentNode.firstChild) {
          return $index$$68$$
        }
        $index$$68$$--
      }else {
        $index$$68$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startColHeader$
      }
    }
  }
  for(;$header$$11$$.previousSibling;) {
    $index$$68$$ += 1, $header$$11$$ = $header$$11$$.previousSibling
  }
  return $index$$68$$
};
D.$JSCompiler_StaticMethods_getHeaderCellAxis$$ = function $$JSCompiler_StaticMethods_getHeaderCellAxis$$$($JSCompiler_StaticMethods_getHeaderCellAxis$self$$, $header$$12$$) {
  return(0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$12$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("colheadercell")) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$12$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("rowheadercell")) ? "row" : null
};
D.$JSCompiler_StaticMethods_getHeaderCellLevel$$ = function $$JSCompiler_StaticMethods_getHeaderCellLevel$$$($JSCompiler_StaticMethods_getHeaderCellLevel$self$$, $header$$13$$) {
  var $level$$22$$;
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$13$$, $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.getMappedStyle("colheadercell"))) {
    if(1 === $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.$m_columnHeaderLevelCount$) {
      return 0
    }
  }else {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$13$$, $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.getMappedStyle("rowheadercell"))) {
      if(1 === $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.$m_rowHeaderLevelCount$) {
        return 0
      }
    }else {
      return null
    }
  }
  $level$$22$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_getHeaderCellLevel$self$$, $header$$13$$.parentNode, "level");
  return $header$$13$$ === $header$$13$$.parentNode.firstChild ? $level$$22$$ : $level$$22$$ + (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_getHeaderCellLevel$self$$, $header$$13$$.parentNode.firstChild, "depth")
};
D.$JSCompiler_StaticMethods_findCell$$ = function $$JSCompiler_StaticMethods_findCell$$$($JSCompiler_StaticMethods_findCell$self$$, $elem$$15$$) {
  return $JSCompiler_StaticMethods_findCell$self$$.find($elem$$15$$, "cell")
};
D.$DvtDataGrid$$.prototype.find = function $$DvtDataGrid$$$$find$($elem$$16$$, $key$$33$$, $className$$11$$) {
  if(null == $elem$$16$$ || $elem$$16$$ == this.$getRootElement$()) {
    return null
  }
  void 0 == $className$$11$$ && ($className$$11$$ = this.getMappedStyle($key$$33$$));
  return null == $className$$11$$ ? null : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$16$$, $className$$11$$) ? $elem$$16$$ : this.find($elem$$16$$.parentNode, $key$$33$$, $className$$11$$)
};
D.$JSCompiler_StaticMethods__highlightActive$$ = function $$JSCompiler_StaticMethods__highlightActive$$$($JSCompiler_StaticMethods__highlightActive$self$$) {
  (0,D.$JSCompiler_StaticMethods__highlightActiveObject$$)($JSCompiler_StaticMethods__highlightActive$self$$, $JSCompiler_StaticMethods__highlightActive$self$$.$m_active$, $JSCompiler_StaticMethods__highlightActive$self$$.$m_prevActive$, void 0)
};
D.$JSCompiler_StaticMethods__highlightActiveObject$$ = function $$JSCompiler_StaticMethods__highlightActiveObject$$$($JSCompiler_StaticMethods__highlightActiveObject$self$$, $activeObject$$3$$, $prevActiveObject$$1$$, $classNames$$3$$) {
  null == $classNames$$3$$ && ($classNames$$3$$ = ["focus"]);
  if(null != $activeObject$$3$$) {
    var $element$$21$$ = (0,D.$JSCompiler_StaticMethods__getElementFromActiveObject$$)($JSCompiler_StaticMethods__highlightActiveObject$self$$, $activeObject$$3$$);
    (0,D.$JSCompiler_StaticMethods__highlightElement$$)($JSCompiler_StaticMethods__highlightActiveObject$self$$, $element$$21$$, $classNames$$3$$);
    (0,D.$JSCompiler_StaticMethods__setAriaProperties$$)($JSCompiler_StaticMethods__highlightActiveObject$self$$, $activeObject$$3$$, $prevActiveObject$$1$$, $element$$21$$)
  }
};
D.$JSCompiler_StaticMethods__unhighlightActiveObject$$ = function $$JSCompiler_StaticMethods__unhighlightActiveObject$$$($JSCompiler_StaticMethods__unhighlightActiveObject$self$$, $activeObject$$4_element$$22$$, $classNames$$4$$) {
  null == $classNames$$4$$ && ($classNames$$4$$ = ["focus"]);
  null != $activeObject$$4_element$$22$$ && ($activeObject$$4_element$$22$$ = (0,D.$JSCompiler_StaticMethods__getElementFromActiveObject$$)($JSCompiler_StaticMethods__unhighlightActiveObject$self$$, $activeObject$$4_element$$22$$), (0,D.$JSCompiler_StaticMethods__unhighlightElement$$)($JSCompiler_StaticMethods__unhighlightActiveObject$self$$, $activeObject$$4_element$$22$$, $classNames$$4$$), (0,D.$JSCompiler_StaticMethods__unsetAriaProperties$$)($activeObject$$4_element$$22$$))
};
D.$JSCompiler_StaticMethods__highlightElement$$ = function $$JSCompiler_StaticMethods__highlightElement$$$($JSCompiler_StaticMethods__highlightElement$self$$, $element$$23$$, $classNames$$5$$) {
  var $className$$12$$, $i$$34$$;
  for($i$$34$$ = 0;$i$$34$$ < $classNames$$5$$.length;$i$$34$$++) {
    $className$$12$$ = $JSCompiler_StaticMethods__highlightElement$self$$.getMappedStyle($classNames$$5$$[$i$$34$$]), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($element$$23$$, $className$$12$$)
  }
};
D.$JSCompiler_StaticMethods__unhighlightElement$$ = function $$JSCompiler_StaticMethods__unhighlightElement$$$($JSCompiler_StaticMethods__unhighlightElement$self$$, $element$$24$$, $classNames$$6$$) {
  var $className$$13$$, $i$$35$$;
  for($i$$35$$ = 0;$i$$35$$ < $classNames$$6$$.length;$i$$35$$++) {
    $className$$13$$ = $JSCompiler_StaticMethods__unhighlightElement$self$$.getMappedStyle($classNames$$6$$[$i$$35$$]), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($element$$24$$, $className$$13$$)
  }
};
D.$JSCompiler_StaticMethods__setAriaProperties$$ = function $$JSCompiler_StaticMethods__setAriaProperties$$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $activeObject$$5$$, $prevActiveObject$$2$$, $element$$25$$) {
  var $label$$3_label$$inline_1033_rowHeader$$inline_1037$$, $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$, $columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$, $contextObj$$inline_1048_previousRowIndex$$inline_1039$$, $index$$inline_1046_previousColumnIndex$$inline_1040$$;
  $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ = "";
  if("header" == $activeObject$$5$$.type) {
    null != $prevActiveObject$$2$$ && ("header" == $prevActiveObject$$2$$.type && !$JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$) && ("row" === $prevActiveObject$$2$$.axis && 1 < $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_rowHeaderLevelCount$ ? $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $prevActiveObject$$2$$.index, $prevActiveObject$$2$$.level) : 
    "column" === $prevActiveObject$$2$$.axis && 1 < $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_columnHeaderLevelCount$ && ($axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $prevActiveObject$$2$$.index, $prevActiveObject$$2$$.level))), $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, 
    "context") + (0,D.$JSCompiler_StaticMethods__getHeaderAndParentIds$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $element$$25$$, $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$), $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ = $element$$25$$.getAttribute($JSCompiler_StaticMethods__setAriaProperties$self$$.$m_resources$.getMappedAttribute("sortDir")), "ascending" === $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ ? 
    ($columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$ = "accessibleSortAscending", $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ = $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ + " " + (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, "state")) : "descending" === $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ && ($columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$ = "accessibleSortDescending", 
    $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ = $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ + " " + (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, "state")), !0 === $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ && ($label$$3_label$$inline_1033_rowHeader$$inline_1037$$ = [(0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, "summary"), $label$$3_label$$inline_1033_rowHeader$$inline_1037$$].join(" "), 
    $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ = !1), null != $columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$ && (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$, {id:""}), $element$$25$$.setAttribute("tabIndex", 0)
  }else {
    null != $prevActiveObject$$2$$ && ("header" === $prevActiveObject$$2$$.type ? ($contextObj$$inline_1048_previousRowIndex$$inline_1039$$ = "row" === $prevActiveObject$$2$$.axis ? $prevActiveObject$$2$$.index : null, $index$$inline_1046_previousColumnIndex$$inline_1040$$ = "column" === $prevActiveObject$$2$$.axis ? $prevActiveObject$$2$$.index : null) : ($contextObj$$inline_1048_previousRowIndex$$inline_1039$$ = $prevActiveObject$$2$$.indexes.row, $index$$inline_1046_previousColumnIndex$$inline_1040$$ = 
    $prevActiveObject$$2$$.indexes.column));
    if(-1 != $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_endRowHeader$ && ($activeObject$$5$$.indexes.row != $contextObj$$inline_1048_previousRowIndex$$inline_1039$$ || $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$)) {
      $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $element$$25$$, "row"), null != $contextObj$$inline_1048_previousRowIndex$$inline_1039$$ && ($axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $contextObj$$inline_1048_previousRowIndex$$inline_1039$$, 
      $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_rowHeaderLevelCount$ - 1)), $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ = (0,D.$JSCompiler_StaticMethods__getHeaderAndParentIds$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $label$$3_label$$inline_1033_rowHeader$$inline_1037$$, $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$)
    }
    if(-1 != $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_endColHeader$ && ($activeObject$$5$$.indexes.column != $index$$inline_1046_previousColumnIndex$$inline_1040$$ || $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$)) {
      $columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $element$$25$$, "column"), null != $index$$inline_1046_previousColumnIndex$$inline_1040$$ && ($axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $index$$inline_1046_previousColumnIndex$$inline_1040$$, 
      $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_columnHeaderLevelCount$ - 1)), $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ = "" == $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ ? (0,D.$JSCompiler_StaticMethods__getHeaderAndParentIds$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$, $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$) : [$label$$3_label$$inline_1033_rowHeader$$inline_1037$$, 
      (0,D.$JSCompiler_StaticMethods__getHeaderAndParentIds$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$, $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$)].join(" ")
    }
    $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ = "" == $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ ? $element$$25$$.id : [$label$$3_label$$inline_1033_rowHeader$$inline_1037$$, $element$$25$$.id].join(" ");
    $label$$3_label$$inline_1033_rowHeader$$inline_1037$$ = [(0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, "context"), $label$$3_label$$inline_1033_rowHeader$$inline_1037$$, (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, "state")].join(" ");
    $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ && ($label$$3_label$$inline_1033_rowHeader$$inline_1037$$ = [(0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, "summary"), $label$$3_label$$inline_1033_rowHeader$$inline_1037$$].join(" "), $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ = !1)
  }
  var $skip$$inline_1049$$;
  if("header" === $activeObject$$5$$.type) {
    $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ = $activeObject$$5$$.axis;
    $index$$inline_1046_previousColumnIndex$$inline_1040$$ = $activeObject$$5$$.index;
    $columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$ = $activeObject$$5$$.level;
    $contextObj$$inline_1048_previousRowIndex$$inline_1039$$ = {};
    if("row" === $activeObject$$5$$.axis) {
      if(1 < $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_rowHeaderLevelCount$ && (null == $prevActiveObject$$2$$ || !($columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$ === $prevActiveObject$$2$$.level && $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ === $prevActiveObject$$2$$.axis))) {
        $contextObj$$inline_1048_previousRowIndex$$inline_1039$$.level = $columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$
      }
      if(null == $prevActiveObject$$2$$ || !($index$$inline_1046_previousColumnIndex$$inline_1040$$ === $prevActiveObject$$2$$.index && $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ === $prevActiveObject$$2$$.axis)) {
        $contextObj$$inline_1048_previousRowIndex$$inline_1039$$.rowHeader = $index$$inline_1046_previousColumnIndex$$inline_1040$$
      }
    }else {
      if(1 < $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_columnHeaderLevelCount$ && (null == $prevActiveObject$$2$$ || !($columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$ === $prevActiveObject$$2$$.level && $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ === $prevActiveObject$$2$$.axis))) {
        $contextObj$$inline_1048_previousRowIndex$$inline_1039$$.level = $columnHeader$$inline_1038_key$$inline_1036_level$$inline_1047$$
      }
      if(null == $prevActiveObject$$2$$ || !($index$$inline_1046_previousColumnIndex$$inline_1040$$ === $prevActiveObject$$2$$.index && $axis$$inline_1045_direction$$inline_1035_previousElement$$inline_1034$$ === $prevActiveObject$$2$$.axis)) {
        $contextObj$$inline_1048_previousRowIndex$$inline_1039$$.columnHeader = $index$$inline_1046_previousColumnIndex$$inline_1040$$
      }
    }
    (0,D.$JSCompiler_StaticMethods__updateContextInfo$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, $contextObj$$inline_1048_previousRowIndex$$inline_1039$$, $skip$$inline_1049$$)
  }else {
    null != $prevActiveObject$$2$$ && ("cell" == $prevActiveObject$$2$$.type && null != $activeObject$$5$$ && !$JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$) && ($activeObject$$5$$.indexes.row === $prevActiveObject$$2$$.indexes.row ? $skip$$inline_1049$$ = "row" : $activeObject$$5$$.indexes.column === $prevActiveObject$$2$$.indexes.column && ($skip$$inline_1049$$ = "column")), (0,D.$JSCompiler_StaticMethods__updateContextInfo$$)($JSCompiler_StaticMethods__setAriaProperties$self$$, 
    $activeObject$$5$$.indexes, $skip$$inline_1049$$)
  }
  $element$$25$$.setAttribute("tabIndex", 0);
  $element$$25$$.setAttribute("aria-labelledby", $label$$3_label$$inline_1033_rowHeader$$inline_1037$$);
  (null == $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_cellToFocus$ || $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_cellToFocus$ != $element$$25$$) && $element$$25$$.focus()
};
D.$JSCompiler_StaticMethods__unsetAriaProperties$$ = function $$JSCompiler_StaticMethods__unsetAriaProperties$$$($element$$26$$) {
  null != $element$$26$$ && ($element$$26$$.setAttribute("tabIndex", -1), $element$$26$$.removeAttribute("aria-labelledby"))
};
D.$JSCompiler_StaticMethods_getHeaderFromCell$$ = function $$JSCompiler_StaticMethods_getHeaderFromCell$$$($JSCompiler_StaticMethods_getHeaderFromCell$self$$, $cell$$9_colIndex_row$$29_rowIndex$$7$$, $axis$$21$$) {
  if("row" === $axis$$21$$) {
    if(null != $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_rowHeader$ && ($cell$$9_colIndex_row$$29_rowIndex$$7$$ = $cell$$9_colIndex_row$$29_rowIndex$$7$$.parentNode, $cell$$9_colIndex_row$$29_rowIndex$$7$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$9_colIndex_row$$29_rowIndex$$7$$) + $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_startRow$, -1 < $cell$$9_colIndex_row$$29_rowIndex$$7$$)) {
      return(0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_getHeaderFromCell$self$$, $cell$$9_colIndex_row$$29_rowIndex$$7$$, $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_rowHeaderLevelCount$ - 1)
    }
  }else {
    if("column" === $axis$$21$$ && null != $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_colHeader$ && ($cell$$9_colIndex_row$$29_rowIndex$$7$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$9_colIndex_row$$29_rowIndex$$7$$) + $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_startCol$, -1 < $cell$$9_colIndex_row$$29_rowIndex$$7$$)) {
      return(0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_getHeaderFromCell$self$$, $cell$$9_colIndex_row$$29_rowIndex$$7$$, $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_columnHeaderLevelCount$ - 1)
    }
  }
  return null
};
D.$JSCompiler_StaticMethods_findIndexOf$$ = function $$JSCompiler_StaticMethods_findIndexOf$$$($elem$$17$$) {
  var $child$$1$$, $children$$, $index$$69$$, $i$$36$$;
  $children$$ = $elem$$17$$.parentNode.childNodes;
  $index$$69$$ = -1;
  for($i$$36$$ = 0;$i$$36$$ < $children$$.length;$i$$36$$ += 1) {
    $child$$1$$ = $children$$[$i$$36$$];
    if($child$$1$$ === $elem$$17$$) {
      return $index$$69$$ + 1
    }
    "DIV" == $child$$1$$.nodeName && $index$$69$$++
  }
  return $index$$69$$
};
D.$DvtDataGrid$$.prototype.createRange = function $$DvtDataGrid$$$$createRange$($startIndex$$, $endColumn_endIndex$$, $startKey$$, $endKey$$) {
  var $startRow$$3$$, $endRow$$, $startColumn$$, $startRowKey$$1$$, $endRowKey$$1$$, $startColumnKey$$, $endColumnKey$$;
  $endColumn_endIndex$$ && ($startIndex$$.row < $endColumn_endIndex$$.row || -1 == $endColumn_endIndex$$.row ? ($startRow$$3$$ = $startIndex$$.row, $endRow$$ = $endColumn_endIndex$$.row, $startKey$$ && ($startRowKey$$1$$ = $startKey$$.row, $endRowKey$$1$$ = $endKey$$.row)) : ($startRow$$3$$ = $endColumn_endIndex$$.row, $endRow$$ = $startIndex$$.row, $startKey$$ && ($startRowKey$$1$$ = $endKey$$.row, $endRowKey$$1$$ = $startKey$$.row)), !(0,window.isNaN)($startIndex$$.column) && !(0,window.isNaN)($endColumn_endIndex$$.column) ? 
  ($startIndex$$.column < $endColumn_endIndex$$.column || -1 == $endColumn_endIndex$$.column ? ($startColumn$$ = $startIndex$$.column, $endColumn_endIndex$$ = $endColumn_endIndex$$.column, $startKey$$ && ($startColumnKey$$ = $startKey$$.column, $endColumnKey$$ = $endKey$$.column)) : ($startColumn$$ = $endColumn_endIndex$$.column, $endColumn_endIndex$$ = $startIndex$$.column, $startKey$$ && ($startColumnKey$$ = $endKey$$.column, $endColumnKey$$ = $startKey$$.column)), $startIndex$$ = {row:$startRow$$3$$, 
  column:$startColumn$$}, $endColumn_endIndex$$ = {row:$endRow$$, column:$endColumn_endIndex$$}) : ($startIndex$$ = {row:$startRow$$3$$}, $endColumn_endIndex$$ = {row:$endRow$$}), $startKey$$ && ($startKey$$ = {row:$startRowKey$$1$$, column:$startColumnKey$$}, $endKey$$ = {row:$endRowKey$$1$$, column:$endColumnKey$$}));
  return $startKey$$ ? {startIndex:$startIndex$$, endIndex:$endColumn_endIndex$$, startKey:$startKey$$, endKey:$endKey$$} : {startIndex:$startIndex$$, endIndex:$endColumn_endIndex$$}
};
D.$DvtDataGrid$$.prototype.$_createRangeStartKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeStartKeyCallback$$($endIndex$$2$$, $callback$$32$$, $startKey$$1$$, $startIndex$$2$$) {
  $endIndex$$2$$ === $startIndex$$2$$ ? this.$_createRangeEndKeyCallback$($startKey$$1$$, $startIndex$$2$$, $callback$$32$$, $startKey$$1$$, $startIndex$$2$$) : $endIndex$$2$$ ? (0,D.$JSCompiler_StaticMethods__keys$$)(this, $endIndex$$2$$, this.$_createRangeEndKeyCallback$.bind(this, $startKey$$1$$, $startIndex$$2$$, $callback$$32$$)) : $callback$$32$$.call(this, {startIndex:$startIndex$$2$$, endIndex:$startIndex$$2$$, startKey:$startKey$$1$$, endKey:$startKey$$1$$})
};
D.$DvtDataGrid$$.prototype.$_createRangeEndKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeEndKeyCallback$$($startKey$$2$$, $startIndex$$3$$, $callback$$33$$, $endKey$$1$$, $endIndex$$3$$) {
  $callback$$33$$.call(this, this.createRange($startIndex$$3$$, $endIndex$$3$$, $startKey$$2$$, $endKey$$1$$))
};
D.$DvtDataGrid$$.prototype.$getEndIndex$ = function $$DvtDataGrid$$$$$getEndIndex$$($range$$6$$) {
  return null == $range$$6$$.endIndex ? $range$$6$$.startIndex : $range$$6$$.endIndex
};
D.$JSCompiler_StaticMethods_getElementsInRange$$ = function $$JSCompiler_StaticMethods_getElementsInRange$$$($JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$, $range$$7_rangeEndRow$$, $nodes$$1_startRow$$4$$, $endRow$$1_rows$$6$$) {
  var $j$$8_startIndex$$4$$, $cell$$10_endIndex$$4$$, $columns$$2_rangeStartRow$$, $rangeStartColumn_row$$30$$, $rangeEndColumn$$;
  void 0 == $nodes$$1_startRow$$4$$ && ($nodes$$1_startRow$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startRow$);
  void 0 == $endRow$$1_rows$$6$$ && ($endRow$$1_rows$$6$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_endRow$ + 1);
  $j$$8_startIndex$$4$$ = $range$$7_rangeEndRow$$.startIndex;
  $cell$$10_endIndex$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$getEndIndex$($range$$7_rangeEndRow$$);
  $columns$$2_rangeStartRow$$ = $j$$8_startIndex$$4$$.row;
  $range$$7_rangeEndRow$$ = $cell$$10_endIndex$$4$$.row;
  -1 == $range$$7_rangeEndRow$$ && ($range$$7_rangeEndRow$$ = window.Number.MAX_VALUE);
  if($endRow$$1_rows$$6$$ < $columns$$2_rangeStartRow$$ || $range$$7_rangeEndRow$$ < $nodes$$1_startRow$$4$$ || !(0,window.isNaN)($j$$8_startIndex$$4$$.column) && !(0,window.isNaN)($cell$$10_endIndex$$4$$.column) && ($rangeStartColumn_row$$30$$ = $j$$8_startIndex$$4$$.column, $rangeEndColumn$$ = $cell$$10_endIndex$$4$$.column, -1 == $rangeEndColumn$$ && ($rangeEndColumn$$ = window.Number.MAX_VALUE), $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_endCol$ + 1 < $rangeStartColumn_row$$30$$ || 
  $rangeEndColumn$$ < $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startCol$)) {
    return null
  }
  $nodes$$1_startRow$$4$$ = [];
  $endRow$$1_rows$$6$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_databody$.firstChild.childNodes;
  $columns$$2_rangeStartRow$$ = window.Math.max(0, $columns$$2_rangeStartRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startRow$);
  $range$$7_rangeEndRow$$ = window.Math.min($endRow$$1_rows$$6$$.length, $range$$7_rangeEndRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startRow$ + 1);
  if(!(0,window.isNaN)($rangeStartColumn_row$$30$$) && !(0,window.isNaN)($rangeEndColumn$$)) {
    $rangeStartColumn_row$$30$$ = window.Math.max(0, $rangeStartColumn_row$$30$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startCol$);
    $rangeEndColumn$$ = $rangeEndColumn$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startCol$ + 1;
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ = $columns$$2_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ < $range$$7_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ += 1) {
      $columns$$2_rangeStartRow$$ = $endRow$$1_rows$$6$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$].childNodes;
      for($j$$8_startIndex$$4$$ = $rangeStartColumn_row$$30$$;$j$$8_startIndex$$4$$ < window.Math.min($columns$$2_rangeStartRow$$.length, $rangeEndColumn$$);$j$$8_startIndex$$4$$ += 1) {
        $cell$$10_endIndex$$4$$ = $columns$$2_rangeStartRow$$[$j$$8_startIndex$$4$$], $nodes$$1_startRow$$4$$.push($cell$$10_endIndex$$4$$)
      }
    }
  }else {
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ = $columns$$2_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ < $range$$7_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ += 1) {
      $rangeStartColumn_row$$30$$ = $endRow$$1_rows$$6$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$], $nodes$$1_startRow$$4$$.push($rangeStartColumn_row$$30$$)
    }
  }
  return $nodes$$1_startRow$$4$$
};
D.$JSCompiler_StaticMethods_isReadCurrentContent$$ = function $$JSCompiler_StaticMethods_isReadCurrentContent$$$($JSCompiler_StaticMethods_isReadCurrentContent$self$$, $event$$42$$) {
  return $event$$42$$.altKey && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods_isReadCurrentContent$self$$.$m_utils$, $event$$42$$) && 53 === $event$$42$$.keyCode
};
D.$JSCompiler_StaticMethods_readCurrentContent$$ = function $$JSCompiler_StaticMethods_readCurrentContent$$$($JSCompiler_StaticMethods_readCurrentContent$self$$) {
  var $cell$$11_current$$1_currentCell_range$$8$$, $subid$$, $needToModify$$, $labelledBy$$;
  if(null == $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$) {
    return!1
  }
  if("header" == $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.type) {
    $cell$$11_current$$1_currentCell_range$$8$$ = {}, "row" === $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.axis ? (1 < $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_rowHeaderLevelCount$ && ($cell$$11_current$$1_currentCell_range$$8$$.level = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.level), $cell$$11_current$$1_currentCell_range$$8$$.rowHeader = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.index) : (1 < $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_columnHeaderLevelCount$ && 
    ($cell$$11_current$$1_currentCell_range$$8$$.level = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.level), $cell$$11_current$$1_currentCell_range$$8$$.columnHeader = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.index), $cell$$11_current$$1_currentCell_range$$8$$ = (0,D.$JSCompiler_StaticMethods__getActiveElement$$)($JSCompiler_StaticMethods_readCurrentContent$self$$)
  }else {
    $cell$$11_current$$1_currentCell_range$$8$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.indexes;
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_readCurrentContent$self$$) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_readCurrentContent$self$$) && null != $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_selectionFrontier$ && ($cell$$11_current$$1_currentCell_range$$8$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_selectionFrontier$);
    if(null == $cell$$11_current$$1_currentCell_range$$8$$) {
      return!1
    }
    $cell$$11_current$$1_currentCell_range$$8$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.createRange($cell$$11_current$$1_currentCell_range$$8$$);
    $cell$$11_current$$1_currentCell_range$$8$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, $cell$$11_current$$1_currentCell_range$$8$$);
    if(null == $cell$$11_current$$1_currentCell_range$$8$$ || 0 == $cell$$11_current$$1_currentCell_range$$8$$.length) {
      return!1
    }
    $cell$$11_current$$1_currentCell_range$$8$$ = $cell$$11_current$$1_currentCell_range$$8$$[0]
  }
  (0,D.$JSCompiler_StaticMethods__setAriaProperties$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, (0,D.$JSCompiler_StaticMethods__createActiveObject$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, $cell$$11_current$$1_currentCell_range$$8$$), null, $cell$$11_current$$1_currentCell_range$$8$$);
  $subid$$ = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, "placeHolder");
  $needToModify$$ = !0;
  $labelledBy$$ = $cell$$11_current$$1_currentCell_range$$8$$.getAttribute("aria-labelledby");
  null != $labelledBy$$ && -1 != $labelledBy$$.indexOf($subid$$) && ($needToModify$$ = !1);
  $needToModify$$ ? ($JSCompiler_StaticMethods_readCurrentContent$self$$.$m_placeHolder$.textContent = "\x26nbsp", $labelledBy$$ = $cell$$11_current$$1_currentCell_range$$8$$.getAttribute("aria-labelledby"), $cell$$11_current$$1_currentCell_range$$8$$.setAttribute("aria-labelledby", $labelledBy$$ + " " + $subid$$)) : $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_utils$.empty($JSCompiler_StaticMethods_readCurrentContent$self$$.$m_placeHolder$);
  $cell$$11_current$$1_currentCell_range$$8$$.focus();
  return!0
};
D.$JSCompiler_StaticMethods__handleActionableModeKeyDown$$ = function $$JSCompiler_StaticMethods__handleActionableModeKeyDown$$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, $event$$43$$, $element$$28$$, $isHeader$$) {
  var $keyCode$$, $target$$43$$, $shiftKey$$2$$, $ctrlKey$$2_tagName$$inline_1053$$;
  $keyCode$$ = $event$$43$$.keyCode;
  $shiftKey$$2$$ = $event$$43$$.shiftKey;
  $ctrlKey$$2_tagName$$inline_1053$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$.$m_utils$, $event$$43$$);
  $target$$43$$ = $event$$43$$.target;
  if(27 == $keyCode$$) {
    return(0,D.$JSCompiler_StaticMethods__exitActionableMode$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$), (0,D.$JSCompiler_StaticMethods__highlightActive$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$), !0
  }
  if(9 === $keyCode$$) {
    $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$ = (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, $element$$28$$);
    if(0 < $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$.length && $event$$43$$.target == $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$[$JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$.length - 1]) {
      return $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$[0].focus(), !0
    }
    if(0 < $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$.length && $event$$43$$.target == $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$[0] && $shiftKey$$2$$) {
      return $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$[$JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$.length - 1].focus(), !0
    }
  }else {
    if((0,D.$JSCompiler_StaticMethods_isNavigationKey$$)($keyCode$$) && !$ctrlKey$$2_tagName$$inline_1053$$) {
      $ctrlKey$$2_tagName$$inline_1053$$ = $target$$43$$.tagName;
      if("INPUT" === $ctrlKey$$2_tagName$$inline_1053$$ || "TEXTAREA" === $ctrlKey$$2_tagName$$inline_1053$$ || "SELECT" === $ctrlKey$$2_tagName$$inline_1053$$ || "BUTTON" === $ctrlKey$$2_tagName$$inline_1053$$ || "A" === $ctrlKey$$2_tagName$$inline_1053$$ || null != $target$$43$$.getAttribute("tabIndex") && 0 <= (0,window.parseInt)($target$$43$$.getAttribute("tabIndex"), 10) && (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, 
      $target$$43$$) != $target$$43$$) {
        return!1
      }
      0 < (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, $element$$28$$).length || (0,D.$JSCompiler_StaticMethods__exitActionableMode$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$);
      if($isHeader$$) {
        return(0,D.$JSCompiler_StaticMethods_handleHeaderArrowKeys$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, $keyCode$$, $event$$43$$)
      }
      (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$) && (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, "accessibleStateSelected");
      return(0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, $keyCode$$, $shiftKey$$2$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$), $event$$43$$)
    }
  }
  return!1
};
D.$JSCompiler_StaticMethods__enterActionableMode$$ = function $$JSCompiler_StaticMethods__enterActionableMode$$$($JSCompiler_StaticMethods__enterActionableMode$self$$, $element$$29$$) {
  var $JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$;
  $JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$ = (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($JSCompiler_StaticMethods__enterActionableMode$self$$, $element$$29$$, !0);
  0 < $JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$.length ? ($JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$[0].focus(), $JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$ = !0) : $JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$ = !1;
  if($JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$) {
    (0,D.$JSCompiler_StaticMethods_setActionableMode$$)($JSCompiler_StaticMethods__enterActionableMode$self$$, !0);
    var $i$$inline_1062$$, $tabIndex$$inline_1063$$, $attr$$inline_1064$$;
    $attr$$inline_1064$$ = $JSCompiler_StaticMethods__enterActionableMode$self$$.$m_resources$.getMappedAttribute("tabMod");
    $JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$ = (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($JSCompiler_StaticMethods__enterActionableMode$self$$, $element$$29$$, !1);
    for($i$$inline_1062$$ = 0;$i$$inline_1062$$ < $JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$.length;$i$$inline_1062$$++) {
      $tabIndex$$inline_1063$$ = (0,window.parseInt)($JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$[$i$$inline_1062$$].getAttribute($attr$$inline_1064$$), 10), $JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$[$i$$inline_1062$$].removeAttribute($attr$$inline_1064$$), -1 == $tabIndex$$inline_1063$$ ? $JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$[$i$$inline_1062$$].removeAttribute("tabIndex") : $JSCompiler_inline_result$$60_elems$$inline_1057_focusElems$$inline_1061$$[$i$$inline_1062$$].setAttribute("tabIndex", 
      $tabIndex$$inline_1063$$)
    }
  }
  return!1
};
D.$JSCompiler_StaticMethods__exitActionableMode$$ = function $$JSCompiler_StaticMethods__exitActionableMode$$$($JSCompiler_StaticMethods__exitActionableMode$self$$) {
  var $elem$$18$$;
  (0,D.$JSCompiler_StaticMethods_isActionableMode$$)($JSCompiler_StaticMethods__exitActionableMode$self$$) && ($elem$$18$$ = (0,D.$JSCompiler_StaticMethods__getActiveElement$$)($JSCompiler_StaticMethods__exitActionableMode$self$$), (0,D.$JSCompiler_StaticMethods_setActionableMode$$)($JSCompiler_StaticMethods__exitActionableMode$self$$, !1), (0,D.$JSCompiler_StaticMethods__disableAllFocusableElements$$)($JSCompiler_StaticMethods__exitActionableMode$self$$, $elem$$18$$))
};
D.$JSCompiler_StaticMethods_isNavigationKey$$ = function $$JSCompiler_StaticMethods_isNavigationKey$$$($keyCode$$2$$) {
  return 38 == $keyCode$$2$$ || 40 == $keyCode$$2$$ || 37 == $keyCode$$2$$ || 39 == $keyCode$$2$$ || 36 == $keyCode$$2$$ || 35 == $keyCode$$2$$ || 33 == $keyCode$$2$$ || 34 == $keyCode$$2$$
};
D.$DvtDataGrid$$.prototype.createIndex = function $$DvtDataGrid$$$$createIndex$($row$$31$$, $column$$4$$) {
  return null != $row$$31$$ ? null != $column$$4$$ ? {row:$row$$31$$, column:$column$$4$$} : {row:$row$$31$$} : null
};
D.$JSCompiler_StaticMethods_handleHeaderArrowKeys$$ = function $$JSCompiler_StaticMethods_handleHeaderArrowKeys$$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $keyCode$$5$$, $event$$46$$) {
  var $axis$$23_newCellIndex$$1$$, $index$$71_newIndex$$, $level$$24_newLevel$$, $elem$$20_newElement$$, $depth$$2$$;
  if(!(0,D.$JSCompiler_StaticMethods_isFetchComplete$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$)) {
    return!0
  }
  $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_resources$.isRTLMode() && (37 == $keyCode$$5$$ ? $keyCode$$5$$ = 39 : 39 == $keyCode$$5$$ && ($keyCode$$5$$ = 37));
  $axis$$23_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_active$.axis;
  $index$$71_newIndex$$ = $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_active$.index;
  $level$$24_newLevel$$ = $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_active$.level;
  $elem$$20_newElement$$ = (0,D.$JSCompiler_StaticMethods__getActiveElement$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$);
  $depth$$2$$ = null != $elem$$20_newElement$$ ? (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, "depth") : 1;
  switch($keyCode$$5$$) {
    case 37:
      if("column" === $axis$$23_newCellIndex$$1$$ && 0 < $index$$71_newIndex$$) {
        if(1 === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_columnHeaderLevelCount$) {
          $index$$71_newIndex$$ -= 1, $elem$$20_newElement$$ = $elem$$20_newElement$$.previousSibling
        }else {
          if($elem$$20_newElement$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$ - 1, $level$$24_newLevel$$), $index$$71_newIndex$$ = null != $elem$$20_newElement$$ ? (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start") : $index$$71_newIndex$$ - 1, $level$$24_newLevel$$ = null != $elem$$20_newElement$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
          $elem$$20_newElement$$) : $level$$24_newLevel$$, 0 > $index$$71_newIndex$$) {
            break
          }
        }
        (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$});
        (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$)
      }else {
        "row" === $axis$$23_newCellIndex$$1$$ && 0 < $level$$24_newLevel$$ && ($elem$$20_newElement$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$ - 1), $index$$71_newIndex$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start"), $level$$24_newLevel$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
        $elem$$20_newElement$$), (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$))
      }
      break;
    case 39:
      if("row" === $axis$$23_newCellIndex$$1$$) {
        $level$$24_newLevel$$ + $depth$$2$$ >= $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_rowHeaderLevelCount$ ? ($axis$$23_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.createIndex($index$$71_newIndex$$, 0), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$selectAndFocus$($axis$$23_newCellIndex$$1$$, $event$$46$$) : $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$_setActiveByIndex$($axis$$23_newCellIndex$$1$$, 
        $event$$46$$)) : ($elem$$20_newElement$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$ + $depth$$2$$), $index$$71_newIndex$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start"), $level$$24_newLevel$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
        $elem$$20_newElement$$), (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$))
      }else {
        if(1 === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_columnHeaderLevelCount$ ? ($index$$71_newIndex$$ += 1, $elem$$20_newElement$$ = $elem$$20_newElement$$.nextSibling) : ($index$$71_newIndex$$ = $level$$24_newLevel$$ === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_columnHeaderLevelCount$ - 1 ? $index$$71_newIndex$$ + 1 : null != $elem$$20_newElement$$ ? (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, 
        "start") + (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "extent") : $index$$71_newIndex$$ + 1, $elem$$20_newElement$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$), $level$$24_newLevel$$ = null != $elem$$20_newElement$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
        $elem$$20_newElement$$) : $level$$24_newLevel$$), !($index$$71_newIndex$$ > $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_endColHeader$ && $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_stopColumnHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, "column") || $index$$71_newIndex$$ < $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_dataSource$.getCount("column"))) {
          (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$)
        }
      }
      break;
    case 38:
      if("row" === $axis$$23_newCellIndex$$1$$ && 0 < $index$$71_newIndex$$) {
        if(1 === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_rowHeaderLevelCount$) {
          $index$$71_newIndex$$ -= 1, $elem$$20_newElement$$ = $elem$$20_newElement$$.previousSibling
        }else {
          if($level$$24_newLevel$$ === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_rowHeaderLevelCount$ - 1 ? ($index$$71_newIndex$$ -= 1, $elem$$20_newElement$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$)) : ($elem$$20_newElement$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
          $elem$$20_newElement$$.parentNode, "start") - 1, $level$$24_newLevel$$), $index$$71_newIndex$$ = null != $elem$$20_newElement$$ ? (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start") : $index$$71_newIndex$$ - 1), $level$$24_newLevel$$ = null != $elem$$20_newElement$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$) : 
          $level$$24_newLevel$$, 0 > $index$$71_newIndex$$) {
            break
          }
        }
        (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$});
        (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$)
      }else {
        "column" === $axis$$23_newCellIndex$$1$$ && 0 < $level$$24_newLevel$$ && ($elem$$20_newElement$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$ - 1), $index$$71_newIndex$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start"), $level$$24_newLevel$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
        $elem$$20_newElement$$), (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$))
      }
      break;
    case 40:
      if("column" === $axis$$23_newCellIndex$$1$$) {
        $level$$24_newLevel$$ + $depth$$2$$ >= $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_columnHeaderLevelCount$ ? ($axis$$23_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.createIndex(0, $index$$71_newIndex$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$selectAndFocus$($axis$$23_newCellIndex$$1$$, $event$$46$$) : $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$_setActiveByIndex$($axis$$23_newCellIndex$$1$$, 
        $event$$46$$)) : ($elem$$20_newElement$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$ + $depth$$2$$), $index$$71_newIndex$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start"), $level$$24_newLevel$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
        $elem$$20_newElement$$), (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$))
      }else {
        if(1 === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_rowHeaderLevelCount$ ? ($index$$71_newIndex$$ += 1, $elem$$20_newElement$$ = $elem$$20_newElement$$.nextSibling) : ($index$$71_newIndex$$ = $level$$24_newLevel$$ === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_rowHeaderLevelCount$ - 1 ? $index$$71_newIndex$$ + 1 : null != $elem$$20_newElement$$ ? (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, 
        "start") + (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "extent") : $index$$71_newIndex$$ + 1, $elem$$20_newElement$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$), $level$$24_newLevel$$ = null != $elem$$20_newElement$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
        $elem$$20_newElement$$) : $level$$24_newLevel$$), !($index$$71_newIndex$$ > $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_endRowHeader$ && $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_stopRowHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, "row") || $index$$71_newIndex$$ < $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_dataSource$.getCount("row"))) {
          (0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$)
        }
      }
  }
  return!0
};
D.$JSCompiler_StaticMethods__getHeaderAndParentIds$$ = function $$JSCompiler_StaticMethods__getHeaderAndParentIds$$$($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$, $header$$15_parents$$, $previousHeader$$) {
  var $idString$$ = "", $previousParents$$ = [];
  if(null == $header$$15_parents$$) {
    return""
  }
  $header$$15_parents$$ = (0,D.$JSCompiler_StaticMethods__getHeaderAndParents$$)($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$, $header$$15_parents$$);
  null != $previousHeader$$ && ($previousParents$$ = (0,D.$JSCompiler_StaticMethods__getHeaderAndParents$$)($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$, $previousHeader$$));
  for($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$ = 0;$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$ < $header$$15_parents$$.length;$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$++) {
    if($previousParents$$[$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$] != $header$$15_parents$$[$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$] || $JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$ === $header$$15_parents$$.length - 1) {
      $idString$$ += " " + $header$$15_parents$$[$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$].id
    }
  }
  return $idString$$
};
D.$JSCompiler_StaticMethods__getHeaderAndParents$$ = function $$JSCompiler_StaticMethods__getHeaderAndParents$$$($JSCompiler_StaticMethods__getHeaderAndParents$self$$, $header$$16$$) {
  var $axis$$24_headerLevels$$, $level$$25$$, $headers$$2$$ = [$header$$16$$];
  $axis$$24_headerLevels$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)($JSCompiler_StaticMethods__getHeaderAndParents$self$$, $header$$16$$);
  $level$$25$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods__getHeaderAndParents$self$$, $header$$16$$);
  $axis$$24_headerLevels$$ = "row" === $axis$$24_headerLevels$$ ? $JSCompiler_StaticMethods__getHeaderAndParents$self$$.$m_rowHeaderLevelCount$ : $JSCompiler_StaticMethods__getHeaderAndParents$self$$.$m_columnHeaderLevelCount$;
  if(1 === $axis$$24_headerLevels$$) {
    return $headers$$2$$
  }
  $level$$25$$ === $axis$$24_headerLevels$$ - 1 && ($header$$16$$ = $header$$16$$.parentNode.firstChild, $headers$$2$$.unshift($header$$16$$), $level$$25$$ -= 1);
  for(;0 < $level$$25$$;) {
    $header$$16$$ = $header$$16$$.parentNode.parentNode.firstChild, $headers$$2$$.unshift($header$$16$$), $level$$25$$ -= 1
  }
  return $headers$$2$$
};
D.$JSCompiler_StaticMethods_handleCellArrowKeys$$ = function $$JSCompiler_StaticMethods_handleCellArrowKeys$$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $isExtend$$, $event$$47$$) {
  var $currentCellIndex$$, $row$$32$$, $column$$5$$, $focusFunc$$;
  if(!(0,D.$JSCompiler_StaticMethods_isFetchComplete$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$)) {
    return!0
  }
  $currentCellIndex$$ = $isExtend$$ ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_selectionFrontier$ : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.indexes;
  if(null != $currentCellIndex$$) {
    $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_resources$.isRTLMode() && (37 == $keyCode$$6_newCellIndex$$2$$ ? $keyCode$$6_newCellIndex$$2$$ = 39 : 39 == $keyCode$$6_newCellIndex$$2$$ && ($keyCode$$6_newCellIndex$$2$$ = 37));
    $focusFunc$$ = (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$selectAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$_setActiveByIndex$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$);
    $row$$32$$ = $currentCellIndex$$.row;
    $column$$5$$ = $currentCellIndex$$.column;
    switch($keyCode$$6_newCellIndex$$2$$) {
      case 37:
        0 < $column$$5$$ ? "row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.indexes.row, $column$$5$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$_setActiveByIndex$($keyCode$$6_newCellIndex$$2$$, 
        $event$$47$$)) : ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, $column$$5$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $event$$47$$) : $focusFunc$$($keyCode$$6_newCellIndex$$2$$, 
        $event$$47$$), 0 === $column$$5$$ - 1 && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleFirstColumn")) : $isExtend$$ || ((0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, {axis:"row", index:$row$$32$$, $level$:$JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeaderLevelCount$ - 1}), (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$32$$, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeaderLevelCount$ - 1), $event$$47$$, !0));
        break;
      case 39:
        (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$5$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$47$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$)) : "row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.indexes.row, 
        $column$$5$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$_setActiveByIndex$($keyCode$$6_newCellIndex$$2$$, $event$$47$$)) : ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, $column$$5$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $event$$47$$) : $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$), (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$5$$ + 1) && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        "accessibleLastColumn"));
        break;
      case 38:
        0 < $row$$32$$ ? ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$ - 1, $column$$5$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $event$$47$$) : $focusFunc$$($keyCode$$6_newCellIndex$$2$$, 
        $event$$47$$), 0 === $row$$32$$ - 1 && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleFirstRow")) : $isExtend$$ || ((0,D.$JSCompiler_StaticMethods_scrollToHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, {axis:"column", index:$column$$5$$, $level$:$JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_columnHeaderLevelCount$ - 1}), (0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$5$$, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_columnHeaderLevelCount$ - 1), $event$$47$$, !0));
        break;
      case 40:
        (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$32$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$47$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$)) : ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$ + 1, $column$$5$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $event$$47$$) : $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$), (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$32$$ + 1) && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleLastRow"));
        break;
      case 36:
        $keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, 0);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$);
        $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$);
        break;
      case 35:
        $keyCode$$6_newCellIndex$$2$$ = !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("column") - 1)) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, 
        window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endCol$));
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$);
        $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$);
        break;
      case 33:
        $keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(0, $column$$5$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$);
        $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$);
        break;
      case 34:
        $keyCode$$6_newCellIndex$$2$$ = !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("row") - 1), $column$$5$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, 
        $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endRow$), $column$$5$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$), $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$)
    }
    return!0
  }
};
D.$JSCompiler_StaticMethods_scrollToIndex$$ = function $$JSCompiler_StaticMethods_scrollToIndex$$$($JSCompiler_StaticMethods_scrollToIndex$self$$, $cellLeft_index$$72$$, $isExtend$$1$$) {
  var $cellWidth_row$$33$$, $column$$6_viewportLeft$$2$$, $deltaX$$2_scrollLeft$$10$$, $deltaY$$3_scrollTop$$10$$, $databodyContent$$17_viewportTop$$4$$, $rowElem_rowHeight$$1$$, $viewportBottom$$5$$, $rowTop$$1$$, $cell$$13$$, $scrollRows_viewportRight$$3$$;
  $cellWidth_row$$33$$ = $cellLeft_index$$72$$.row;
  $column$$6_viewportLeft$$2$$ = $cellLeft_index$$72$$.column;
  $deltaY$$3_scrollTop$$10$$ = $deltaX$$2_scrollLeft$$10$$ = 0;
  $cellWidth_row$$33$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ || $cellWidth_row$$33$$ > $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endRow$ ? ($deltaY$$3_scrollTop$$10$$ = $cellWidth_row$$33$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * $cellWidth_row$$33$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * ($cellWidth_row$$33$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), 
  $deltaY$$3_scrollTop$$10$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ - $deltaY$$3_scrollTop$$10$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$72$$, $scrollRows_viewportRight$$3$$ = !0) : ($databodyContent$$17_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$17_viewportTop$$4$$.childNodes[$cellWidth_row$$33$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$], 
  $databodyContent$$17_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$, $viewportBottom$$5$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $rowTop$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowElem_rowHeight$$1$$, "top"), $rowElem_rowHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$, 
  $rowElem_rowHeight$$1$$), $rowTop$$1$$ + $rowElem_rowHeight$$1$$ > $viewportBottom$$5$$ ? $deltaY$$3_scrollTop$$10$$ = $viewportBottom$$5$$ - ($rowTop$$1$$ + $rowElem_rowHeight$$1$$) : $rowTop$$1$$ < $databodyContent$$17_viewportTop$$4$$ && ($deltaY$$3_scrollTop$$10$$ = $databodyContent$$17_viewportTop$$4$$ - $rowTop$$1$$));
  !(0,window.isNaN)($column$$6_viewportLeft$$2$$) && !0 != $scrollRows_viewportRight$$3$$ && ($column$$6_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ || $column$$6_viewportLeft$$2$$ > $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endCol$ ? ($deltaX$$2_scrollLeft$$10$$ = $column$$6_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * $column$$6_viewportLeft$$2$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * 
  ($column$$6_viewportLeft$$2$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $deltaX$$2_scrollLeft$$10$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ - $deltaX$$2_scrollLeft$$10$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$72$$) : ($databodyContent$$17_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = 
  $databodyContent$$17_viewportTop$$4$$.childNodes[$cellWidth_row$$33$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$], $cell$$13$$ = $rowElem_rowHeight$$1$$.childNodes[$column$$6_viewportLeft$$2$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$], $cellLeft_index$$72$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$13$$, "left"), $cellWidth_row$$33$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cell$$13$$), $column$$6_viewportLeft$$2$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$, 
  $scrollRows_viewportRight$$3$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $cellLeft_index$$72$$ < $column$$6_viewportLeft$$2$$ ? $deltaX$$2_scrollLeft$$10$$ = $column$$6_viewportLeft$$2$$ - $cellLeft_index$$72$$ : $cellLeft_index$$72$$ + $cellWidth_row$$33$$ > $scrollRows_viewportRight$$3$$ && ($deltaX$$2_scrollLeft$$10$$ = $scrollRows_viewportRight$$3$$ - 
  ($cellLeft_index$$72$$ + $cellWidth_row$$33$$))));
  0 != $deltaX$$2_scrollLeft$$10$$ || 0 != $deltaY$$3_scrollTop$$10$$ ? (null != $cell$$13$$ && !0 !== $isExtend$$1$$ && ($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_cellToFocus$ = $cell$$13$$), (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_scrollToIndex$self$$, $deltaX$$2_scrollLeft$$10$$, $deltaY$$3_scrollTop$$10$$)) : null != $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ && ($JSCompiler_StaticMethods_scrollToIndex$self$$.$_setActiveByIndex$($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$), 
  $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = null)
};
D.$JSCompiler_StaticMethods_scrollToHeader$$ = function $$JSCompiler_StaticMethods_scrollToHeader$$$($JSCompiler_StaticMethods_scrollToHeader$self$$, $headerInfo$$) {
  var $delta$$2$$, $startIndex$$5$$, $endIndex$$5$$, $averageDiff$$, $diff$$1$$, $currentScroll$$1$$, $headerMin$$, $headerDiff$$, $header$$17$$, $viewportMin$$, $viewportMax$$, $viewportDiff$$, $axis$$25$$, $index$$73$$, $level$$26$$;
  $axis$$25$$ = $headerInfo$$.axis;
  $index$$73$$ = $headerInfo$$.index;
  $level$$26$$ = $headerInfo$$.level;
  $delta$$2$$ = 0;
  "row" === $axis$$25$$ ? ($startIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_startRowHeader$, $endIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_endRowHeader$, $averageDiff$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_avgRowHeight$, $diff$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $currentScroll$$1$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollTop$) : 
  "column" === $axis$$25$$ && ($startIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_startColHeader$, $endIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_endColHeader$, $averageDiff$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_avgColWidth$, $diff$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $currentScroll$$1$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollLeft$);
  $index$$73$$ < $startIndex$$5$$ || $index$$73$$ > $endIndex$$5$$ ? ($delta$$2$$ = $currentScroll$$1$$ - ($index$$73$$ < $startIndex$$5$$ ? $averageDiff$$ * $index$$73$$ : $averageDiff$$ * ($index$$73$$ + 1) - $diff$$1$$), $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_scrollHeaderAfterFetch$ = $headerInfo$$) : ("row" === $axis$$25$$ ? ($header$$17$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_scrollToHeader$self$$, $index$$73$$, $level$$26$$), $viewportMin$$ = 
  $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollTop$, $viewportMax$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $viewportDiff$$ = $viewportMax$$ - $viewportMin$$, $headerMin$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$17$$, "top"), $headerDiff$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($header$$17$$)) : "column" === 
  $axis$$25$$ && ($header$$17$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_scrollToHeader$self$$, $index$$73$$, $level$$26$$), $viewportMin$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollLeft$, $viewportMax$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $viewportDiff$$ = $viewportMax$$ - $viewportMin$$, 
  $headerMin$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$17$$, "left"), $headerDiff$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($header$$17$$)), $viewportDiff$$ > $headerDiff$$ ? $headerMin$$ + $headerDiff$$ > $viewportMax$$ ? $delta$$2$$ = $viewportMax$$ - ($headerMin$$ + $headerDiff$$) : $headerMin$$ < $viewportMin$$ && ($delta$$2$$ = $viewportMin$$ - $headerMin$$) : $delta$$2$$ = $viewportMin$$ - $headerMin$$);
  0 != $delta$$2$$ && (null != $header$$17$$ && ($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_cellToFocus$ = $header$$17$$), "row" === $axis$$25$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_scrollToHeader$self$$, 0, $delta$$2$$) : (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_scrollToHeader$self$$, $delta$$2$$, 0));
  null != $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_scrollHeaderAfterFetch$ && null != $header$$17$$ && ((0,D.$JSCompiler_StaticMethods__setActive$$)($JSCompiler_StaticMethods_scrollToHeader$self$$, $header$$17$$), $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_scrollHeaderAfterFetch$ = null)
};
D.$JSCompiler_StaticMethods_findHeader$$ = function $$JSCompiler_StaticMethods_findHeader$$$($JSCompiler_StaticMethods_findHeader$self$$, $elem$$21$$, $headerCellClassName$$) {
  void 0 == $headerCellClassName$$ && ($headerCellClassName$$ = $JSCompiler_StaticMethods_findHeader$self$$.getMappedStyle("headercell"));
  if(null != $headerCellClassName$$) {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$21$$, $headerCellClassName$$)) {
      return $elem$$21$$
    }
    if($elem$$21$$.parentNode) {
      return(0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_findHeader$self$$, $elem$$21$$.parentNode, $headerCellClassName$$)
    }
  }
  return null
};
D.$JSCompiler_StaticMethods_updateRowBanding$$ = function $$JSCompiler_StaticMethods_updateRowBanding$$$($JSCompiler_StaticMethods_updateRowBanding$self$$) {
  var $rowBandingInterval$$2$$, $rows$$7$$, $i$$39$$, $index$$74$$, $bandingClass$$;
  $rowBandingInterval$$2$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods_updateRowBanding$self$$.$m_options$);
  if(0 < $rowBandingInterval$$2$$) {
    $rows$$7$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_databody$.firstChild.childNodes;
    $bandingClass$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.getMappedStyle("banded");
    for($i$$39$$ = 0;$i$$39$$ < $rows$$7$$.length;$i$$39$$++) {
      $index$$74$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_startRow$ + $i$$39$$, 1 === window.Math.floor($index$$74$$ / $rowBandingInterval$$2$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$7$$[$i$$39$$], $bandingClass$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($rows$$7$$[$i$$39$$], $bandingClass$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$7$$[$i$$39$$], $bandingClass$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($rows$$7$$[$i$$39$$], 
      $bandingClass$$)
    }
  }
};
D.$JSCompiler_StaticMethods__setAccInfoText$$ = function $$JSCompiler_StaticMethods__setAccInfoText$$$($JSCompiler_StaticMethods__setAccInfoText$self$$, $key$$35_text$$13$$, $args$$3$$) {
  $key$$35_text$$13$$ = $JSCompiler_StaticMethods__setAccInfoText$self$$.$m_resources$.getTranslatedText($key$$35_text$$13$$, $args$$3$$);
  null != $key$$35_text$$13$$ && ($JSCompiler_StaticMethods__setAccInfoText$self$$.$m_accInfo$.textContent = $key$$35_text$$13$$)
};
D.$DvtDataGrid$$.prototype.$handleExpandEvent$ = function $$DvtDataGrid$$$$$handleExpandEvent$$($event$$48$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$48$$.rowKey).setAttribute("aria-expanded", !0);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowExpanded");
  (0,D.$JSCompiler_StaticMethods_populateAccInfo$$)(this)
};
D.$DvtDataGrid$$.prototype.$handleCollapseEvent$ = function $$DvtDataGrid$$$$$handleCollapseEvent$$($event$$49$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$49$$.rowKey).setAttribute("aria-expanded", !1);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowCollapsed");
  (0,D.$JSCompiler_StaticMethods_populateAccInfo$$)(this)
};
D.$JSCompiler_StaticMethods__setKey$$ = function $$JSCompiler_StaticMethods__setKey$$$($JSCompiler_StaticMethods__setKey$self$$, $element$$30$$, $key$$36$$) {
  null != $element$$30$$ && ($element$$30$$[$JSCompiler_StaticMethods__setKey$self$$.$m_resources$.getMappedAttribute("key")] = $key$$36$$)
};
D.$JSCompiler_StaticMethods__getKey$$ = function $$JSCompiler_StaticMethods__getKey$$$($JSCompiler_StaticMethods__getKey$self$$, $element$$31$$) {
  return null != $element$$31$$ ? $element$$31$$[$JSCompiler_StaticMethods__getKey$self$$.$m_resources$.getMappedAttribute("key")] : null
};
D.$JSCompiler_StaticMethods__getActiveRowKey$$ = function $$JSCompiler_StaticMethods__getActiveRowKey$$$($JSCompiler_StaticMethods__getActiveRowKey$self$$, $prev$$2$$) {
  if($prev$$2$$ && null != $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$) {
    if("header" == $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.type && "row" === $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.axis) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.key
    }
    if("cell" == $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.type) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.keys.row
    }
  }else {
    if(null != $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$) {
      if("header" == $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.type && "row" === $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.axis) {
        return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.key
      }
      if("cell" == $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.type) {
        return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.keys.row
      }
    }
  }
  return null
};
D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$ = function $$JSCompiler_StaticMethods__handleCutPasteKeydown$$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$50$$) {
  if((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.find($event$$50$$.target, "row"))) {
    if(88 == $event$$50$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$50$$)) {
      return(0,D.$JSCompiler_StaticMethods__handleCut$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$50$$)
    }
    if(86 == $event$$50$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$50$$)) {
      return(0,D.$JSCompiler_StaticMethods__handlePaste$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$50$$)
    }
    if(27 == $event$$50$$.keyCode && null != $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$) {
      return(0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ = null, null !== $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$, 
      $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ = null), !0
    }
  }
  return!1
};
D.$JSCompiler_StaticMethods__handleCut$$ = function $$JSCompiler_StaticMethods__handleCut$$$($JSCompiler_StaticMethods__handleCut$self$$, $event$$51_rowKey$$11$$, $target$$45$$) {
  null == $target$$45$$ && ($target$$45$$ = $event$$51_rowKey$$11$$.target);
  null != $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $event$$51_rowKey$$11$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $JSCompiler_StaticMethods__handleCut$self$$.find($target$$45$$, "row"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $event$$51_rowKey$$11$$);
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $event$$51_rowKey$$11$$);
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  null !== $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  return!0
};
D.$JSCompiler_StaticMethods__handlePaste$$ = function $$JSCompiler_StaticMethods__handlePaste$$$($JSCompiler_StaticMethods__handlePaste$self$$, $event$$52_row$$38$$, $target$$46$$) {
  null == $target$$46$$ && ($target$$46$$ = $event$$52_row$$38$$.target);
  return null != $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), null !== $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), 
  $event$$52_row$$38$$ = $JSCompiler_StaticMethods__handlePaste$self$$.find($target$$46$$, "row"), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ !== $event$$52_row$$38$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handlePaste$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$), (0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)($JSCompiler_StaticMethods__handlePaste$self$$) && (0,D.$JSCompiler_StaticMethods__unhighlightActiveObject$$)($JSCompiler_StaticMethods__handlePaste$self$$, 
  $JSCompiler_StaticMethods__handlePaste$self$$.$m_active$, void 0), $JSCompiler_StaticMethods__handlePaste$self$$.$m_moveActive$ = !0, $JSCompiler_StaticMethods__handlePaste$self$$.$m_dataSource$.move((0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handlePaste$self$$, $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$), (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handlePaste$self$$, $event$$52_row$$38$$))), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ = 
  null, !0) : !1
};
D.$JSCompiler_StaticMethods__handleMove$$ = function $$JSCompiler_StaticMethods__handleMove$$$($JSCompiler_StaticMethods__handleMove$self$$, $event$$53$$) {
  var $deltaY$$4_rowKey$$12$$, $height$$28$$;
  null == $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ && ($deltaY$$4_rowKey$$12$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.find($event$$53$$.target, "row")), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $deltaY$$4_rowKey$$12$$), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ = 
  (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $deltaY$$4_rowKey$$12$$), null != $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.style.height && (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drag")), $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drop")), 
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_databody$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$), 
  null !== $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ && (null != $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$.style.height && (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drag")), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drop")), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_rowHeader$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$)));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_utils$) || ($JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$, $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ = $event$$53$$.pageY);
  $deltaY$$4_rowKey$$12$$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ - $JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$;
  $height$$28$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $deltaY$$4_rowKey$$12$$, "top");
  null !== $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, "top") + $deltaY$$4_rowKey$$12$$, "top");
  null != $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling && $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling != $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling, "top") < (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $height$$28$$ / 2 ? (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  "nextSibling") : null != $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling, "top") > (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") - $height$$28$$ / 2 && (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, "previousSibling")
};
D.$JSCompiler_StaticMethods__moveDropRows$$ = function $$JSCompiler_StaticMethods__moveDropRows$$$($JSCompiler_StaticMethods__moveDropRows$self$$, $sibling$$) {
  var $newTop$$1$$, $databodyScroller$$, $newSiblingTop$$, $headerScroller$$;
  $databodyScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.parentNode;
  "nextSibling" == $sibling$$ ? ($newTop$$1$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ + (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $newSiblingTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$) : ($newTop$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], 
  "top"), $newSiblingTop$$ = $newTop$$1$$ + (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$));
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTarget$, $newTop$$1$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], $newSiblingTop$$, "top");
  null !== $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ && ($headerScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$.parentNode, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTargetHeader$, $newTop$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$], $newSiblingTop$$, "top"));
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ = $newTop$$1$$;
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.previousSibling, $JSCompiler_StaticMethods__moveDropRows$self$$.getMappedStyle("activedrop"));
  "nextSibling" === $sibling$$ ? ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$][$sibling$$]), null !== $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$][$sibling$$])) : ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, 
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), null !== $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$]));
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.previousSibling, $JSCompiler_StaticMethods__moveDropRows$self$$.getMappedStyle("activedrop"))
};
D.$JSCompiler_StaticMethods__isMoveEnabled$$ = function $$JSCompiler_StaticMethods__isMoveEnabled$$$($JSCompiler_StaticMethods__isMoveEnabled$self$$) {
  var $capability$$1$$;
  $capability$$1$$ = $JSCompiler_StaticMethods__isMoveEnabled$self$$.$m_dataSource$.getCapability("move");
  return"enable" === (null != (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isMoveEnabled$self$$.$m_options$, "dnd", "reorder", "row") ? (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isMoveEnabled$self$$.$m_options$, "dnd", "reorder", "row") : !1) && ("full" === $capability$$1$$ || "row" === $capability$$1$$) ? !0 : !1
};
D.$JSCompiler_StaticMethods__handleMoveMouseUp$$ = function $$JSCompiler_StaticMethods__handleMoveMouseUp$$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $validUp$$) {
  null != $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_remove$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.style.zIndex = "", null !== $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_remove$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$), 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$.style.zIndex = ""), null != $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_active$ && "column" != $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_active$.axis && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveActive$ = !0), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$), 
  !0 == $validUp$$ ? $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move((0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), null === $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling ? null : (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling)) : 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move((0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$)), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ = null, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_databodyMove$ = 
  !1)
};
D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$ = function $$JSCompiler_StaticMethods__isMoveOnRowEnabled$$$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$, $row$$39$$) {
  return null == $row$$39$$ || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$39$$.parentNode, $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.getMappedStyle("colheader")) ? !1 : (0,D.$JSCompiler_StaticMethods__isMoveEnabled$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$) && (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$) === (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$, 
  $row$$39$$) ? !0 : !1
};
D.$DvtDataGrid$$.prototype.$handleRootFocus$ = function $$DvtDataGrid$$$$$handleRootFocus$$($event$$55$$) {
  var $newCellIndex$$3$$;
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)(this.$m_root$, this.getMappedStyle("focus"));
  if(!this.$m_root$.contains(window.document.activeElement) || window.document.activeElement === this.$m_root$ && 0 == this.$m_root$.tabIndex) {
    this.$m_externalFocus$ = !0, null == this.$m_active$ && !(0,D.$JSCompiler_StaticMethods__databodyEmpty$$)(this) ? ($newCellIndex$$3$$ = this.createIndex(0, 0), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $newCellIndex$$3$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($newCellIndex$$3$$, $event$$55$$) : this.$_setActiveByIndex$($newCellIndex$$3$$)) : null != this.$m_active$ && (0,D.$JSCompiler_StaticMethods__highlightActive$$)(this)
  }
  this.$m_root$.tabIndex = -1
};
D.$DvtDataGrid$$.prototype.$handleRootBlur$ = function $$DvtDataGrid$$$$$handleRootBlur$$() {
  var $active$$3$$;
  (0,window.setTimeout)(function() {
    this.$m_root$.contains(window.document.activeElement) || (this.$m_root$.tabIndex = 0, $active$$3$$ = (0,D.$JSCompiler_StaticMethods__getActiveElement$$)(this), null != $active$$3$$ && (0,D.$JSCompiler_StaticMethods__unsetAriaProperties$$)($active$$3$$))
  }.bind(this), 100);
  null == this.$m_moveRow$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)(this.$m_root$, this.getMappedStyle("focus"))
};
D.$JSCompiler_StaticMethods_calculateRowHeight$$ = function $$JSCompiler_StaticMethods_calculateRowHeight$$$($JSCompiler_StaticMethods_calculateRowHeight$self$$, $row$$40$$) {
  return"" != $row$$40$$.style.height ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$40$$) : null != $row$$40$$.nextSibling ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$40$$.nextSibling, "top") - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$40$$, "top") : $JSCompiler_StaticMethods_calculateRowHeight$self$$.$m_endRowPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$40$$, "top")
};
D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$ = function $$JSCompiler_StaticMethods_calculateRowHeaderHeight$$$($JSCompiler_StaticMethods_calculateRowHeaderHeight$self$$, $rowHeader$$20$$) {
  return"" != $rowHeader$$20$$.style.height ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$20$$) : null != $rowHeader$$20$$.nextSibling ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$20$$.nextSibling, "top") - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$20$$, "top") : $JSCompiler_StaticMethods_calculateRowHeaderHeight$self$$.$m_endRowHeaderPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$20$$, "top")
};
D.$JSCompiler_StaticMethods_calculateColumnWidth$$ = function $$JSCompiler_StaticMethods_calculateColumnWidth$$$($JSCompiler_StaticMethods_calculateColumnWidth$self$$, $cell$$14$$) {
  if("" != $cell$$14$$.style.width) {
    return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cell$$14$$)
  }
  var $dir$$11$$ = $JSCompiler_StaticMethods_calculateColumnWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  return null != $cell$$14$$.nextSibling ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$14$$.nextSibling, $dir$$11$$) - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$14$$, $dir$$11$$) : $JSCompiler_StaticMethods_calculateColumnWidth$self$$.$m_endColPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$14$$, $dir$$11$$)
};
D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$ = function $$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$$($JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$, $columnHeader$$6$$) {
  if("" != $columnHeader$$6$$.style.width) {
    return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$6$$)
  }
  var $dir$$12$$ = $JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  return null != $columnHeader$$6$$.nextSibling ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$6$$.nextSibling, $dir$$12$$) - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$6$$, $dir$$12$$) : $JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$.$m_endColHeaderPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$6$$, $dir$$12$$)
};
D.$JSCompiler_StaticMethods__databodyEmpty$$ = function $$JSCompiler_StaticMethods__databodyEmpty$$$($JSCompiler_StaticMethods__databodyEmpty$self$$) {
  return null == $JSCompiler_StaticMethods__databodyEmpty$self$$.$m_databody$.firstChild ? !0 : !1
};
D.$JSCompiler_StaticMethods_changeStyleProperty$$ = function $$JSCompiler_StaticMethods_changeStyleProperty$$$($target$$47$$, $prop$$6$$, $value$$48$$, $action$$) {
  "undefined" != typeof $prop$$6$$ && ($target$$47$$.style[$prop$$6$$] = "remove" == $action$$ ? "" : $value$$48$$)
};
D.$JSCompiler_StaticMethods_addTransformMoveStyle$$ = function $$JSCompiler_StaticMethods_addTransformMoveStyle$$$($target$$48$$, $duration$$7$$, $delay$$3$$, $timing$$1$$, $x$$55$$, $y$$36$$) {
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$48$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay"), $delay$$3$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$48$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function"), $timing$$1$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$48$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration"), $duration$$7$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$48$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform"), "translate3d(" + $x$$55$$ + "px," + $y$$36$$ + "px,0px)")
};
D.$JSCompiler_StaticMethods_removeTransformMoveStyle$$ = function $$JSCompiler_StaticMethods_removeTransformMoveStyle$$$($target$$49$$) {
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$49$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay"), null, "remove");
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$49$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function"), null, "remove");
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$49$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration"), null, "remove");
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$49$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform"), null, "remove")
};
D.$JSCompiler_StaticMethods_getCssSupport$$ = function $$JSCompiler_StaticMethods_getCssSupport$$$($cssprop$$) {
  function $toCamel$$($cssprop$$) {
    return $cssprop$$.replace(/\-([a-z])/gi, function($cssprop$$, $toCamel$$) {
      return $toCamel$$.toUpperCase()
    })
  }
  var $vendors$$, $root$$13$$, $i$$42$$, $css3mc$$;
  $vendors$$ = " -moz- -webkit- -o- -ms- -khtml-".split(" ");
  $root$$13$$ = window.document.documentElement;
  for($i$$42$$ = 0;$i$$42$$ < $vendors$$.length;$i$$42$$++) {
    if($css3mc$$ = $toCamel$$($vendors$$[$i$$42$$] + $cssprop$$), "Ms" == $css3mc$$.substr(0, 2) && ($css3mc$$ = "m" + $css3mc$$.substr(1)), $css3mc$$ in $root$$13$$.style) {
      return $css3mc$$
    }
  }
};

/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods_unhighlightSelection$$ = function $$JSCompiler_StaticMethods_unhighlightSelection$$$($JSCompiler_StaticMethods_unhighlightSelection$self$$) {
  var $i$$47$$, $ranges$$;
  $ranges$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$.$GetSelection$();
  for($i$$47$$ = 0;$i$$47$$ < $ranges$$.length;$i$$47$$ += 1) {
    var $JSCompiler_StaticMethods_unhighlightRange$self$$inline_1118$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$, $elems$$inline_1120$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightRange$self$$inline_1118$$, $ranges$$[$i$$47$$]);
    (0,D.$JSCompiler_StaticMethods_unhighlightElems$$)($JSCompiler_StaticMethods_unhighlightRange$self$$inline_1118$$, $elems$$inline_1120$$)
  }
};
D.$JSCompiler_StaticMethods_highlightRange$$ = function $$JSCompiler_StaticMethods_highlightRange$$$($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$10_selection$$inline_1124$$, $JSCompiler_temp$$40_total$$inline_1123_updateAccInfo$$) {
  $elems$$3_range$$10_selection$$inline_1124$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$10_selection$$inline_1124$$);
  (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$10_selection$$inline_1124$$);
  if($JSCompiler_temp$$40_total$$inline_1123_updateAccInfo$$) {
    if(1 == $JSCompiler_StaticMethods_highlightRange$self$$.$GetSelection$().length) {
      $JSCompiler_temp$$40_total$$inline_1123_updateAccInfo$$ = $elems$$3_range$$10_selection$$inline_1124$$.length
    }else {
      var $elems$$inline_1125$$, $i$$inline_1126$$;
      $JSCompiler_temp$$40_total$$inline_1123_updateAccInfo$$ = 0;
      $elems$$3_range$$10_selection$$inline_1124$$ = $JSCompiler_StaticMethods_highlightRange$self$$.$GetSelection$();
      for($i$$inline_1126$$ = 0;$i$$inline_1126$$ < $elems$$3_range$$10_selection$$inline_1124$$.length;$i$$inline_1126$$++) {
        $elems$$inline_1125$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$10_selection$$inline_1124$$[$i$$inline_1126$$]), $JSCompiler_temp$$40_total$$inline_1123_updateAccInfo$$ += $elems$$inline_1125$$.length
      }
    }
    (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_highlightRange$self$$, "accessibleMultiCellSelected", {num:$JSCompiler_temp$$40_total$$inline_1123_updateAccInfo$$})
  }
};
D.$JSCompiler_StaticMethods_unhighlightElems$$ = function $$JSCompiler_StaticMethods_unhighlightElems$$$($JSCompiler_StaticMethods_unhighlightElems$self$$, $elems$$5$$) {
  var $i$$49$$, $elem$$26$$;
  if(!(null == $elems$$5$$ || 0 == $elems$$5$$.length)) {
    for($i$$49$$ = 0;$i$$49$$ < $elems$$5$$.length;$i$$49$$ += 1) {
      $elem$$26$$ = $elems$$5$$[$i$$49$$], (0,D.$JSCompiler_StaticMethods__unhighlightElement$$)($JSCompiler_StaticMethods_unhighlightElems$self$$, $elem$$26$$, ["selected"])
    }
  }
};
D.$JSCompiler_StaticMethods_highlightElems$$ = function $$JSCompiler_StaticMethods_highlightElems$$$($JSCompiler_StaticMethods_highlightElems$self$$, $elems$$6$$) {
  var $i$$50$$, $elem$$27$$;
  if(!(null == $elems$$6$$ || 0 == $elems$$6$$.length)) {
    for($i$$50$$ = 0;$i$$50$$ < $elems$$6$$.length;$i$$50$$ += 1) {
      $elem$$27$$ = $elems$$6$$[$i$$50$$], (0,D.$JSCompiler_StaticMethods__highlightElement$$)($JSCompiler_StaticMethods_highlightElems$self$$, $elem$$27$$, ["selected"])
    }
  }
};
D.$JSCompiler_StaticMethods_applySelection$$ = function $$JSCompiler_StaticMethods_applySelection$$$($JSCompiler_StaticMethods_applySelection$self$$, $startRow$$5$$, $endRow$$2$$) {
  var $i$$51$$, $ranges$$1$$, $elems$$7$$;
  $ranges$$1$$ = $JSCompiler_StaticMethods_applySelection$self$$.$GetSelection$();
  for($i$$51$$ = 0;$i$$51$$ < $ranges$$1$$.length;$i$$51$$ += 1) {
    $elems$$7$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_applySelection$self$$, $ranges$$1$$[$i$$51$$], $startRow$$5$$, $endRow$$2$$), (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_applySelection$self$$, $elems$$7$$)
  }
};
D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$ = function $$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$$($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$63$$) {
  var $cell$$16_index$$81$$;
  $cell$$16_index$$81$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$m_utils$) ? (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, window.document.elementFromPoint($event$$63$$.touches[0].clientX, $event$$63$$.touches[0].clientY)) : (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$63$$.target);
  null != $cell$$16_index$$81$$ && ($cell$$16_index$$81$$ = {row:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getRowIndex$($cell$$16_index$$81$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getCellIndex$($cell$$16_index$$81$$)}, (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $cell$$16_index$$81$$, $event$$63$$))
};
D.$DvtDataGrid$$.prototype.$_isSelected$ = function $$DvtDataGrid$$$$$_isSelected$$($cell$$17$$) {
  var $selectedClassName$$ = this.getMappedStyle("selected");
  return"row" == this.$m_options$.$getSelectionMode$() && null != $selectedClassName$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)(this.find($cell$$17$$, "row"), $selectedClassName$$) : null != $selectedClassName$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($cell$$17$$, $selectedClassName$$) : !1
};
D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickSelection$$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$64$$) {
  var $index$$83$$, $cell$$18_ctrlKey$$5$$, $shiftKey$$3$$;
  $cell$$18_ctrlKey$$5$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$64$$.target);
  null != $cell$$18_ctrlKey$$5$$ && ($index$$83$$ = {row:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getRowIndex$($cell$$18_ctrlKey$$5$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getCellIndex$($cell$$18_ctrlKey$$5$$)});
  if(null != $index$$83$$ && void 0 != $index$$83$$ && (!(0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$) || !(2 === $event$$64$$.button && (0,D.$JSCompiler_StaticMethods__isContainSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$83$$)))) {
    (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$83$$), $cell$$18_ctrlKey$$5$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$, $event$$64$$), $shiftKey$$3$$ = $event$$64$$.shiftKey, (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$) ? (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$) ? 
    ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$), null != $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_active$ && (0,D.$JSCompiler_StaticMethods__unhighlightActiveObject$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_active$, void 0), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$83$$, 
    $event$$64$$, !1)) : !$cell$$18_ctrlKey$$5$$ && !$shiftKey$$3$$ ? $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$83$$, $event$$64$$, !1) : !$cell$$18_ctrlKey$$5$$ && $shiftKey$$3$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$83$$, $event$$64$$) : $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$83$$, $event$$64$$, !0) : $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$83$$, 
    $event$$64$$, !1)
  }
};
D.$JSCompiler_StaticMethods__isContainSelection$$ = function $$JSCompiler_StaticMethods__isContainSelection$$$($JSCompiler_StaticMethods__isContainSelection$self$$, $index$$84$$, $ranges$$3$$) {
  var $endIndex$$7_range$$12_rangeEndColumn$$2$$, $rangeStartColumn$$2_startIndex$$7$$, $rangeStartRow$$2$$, $rangeEndRow$$2$$, $i$$53$$;
  null == $ranges$$3$$ && ($ranges$$3$$ = $JSCompiler_StaticMethods__isContainSelection$self$$.$GetSelection$());
  for($i$$53$$ = 0;$i$$53$$ < $ranges$$3$$.length;$i$$53$$ += 1) {
    if($endIndex$$7_range$$12_rangeEndColumn$$2$$ = $ranges$$3$$[$i$$53$$], $rangeStartColumn$$2_startIndex$$7$$ = $endIndex$$7_range$$12_rangeEndColumn$$2$$.startIndex, $endIndex$$7_range$$12_rangeEndColumn$$2$$ = $JSCompiler_StaticMethods__isContainSelection$self$$.$getEndIndex$($endIndex$$7_range$$12_rangeEndColumn$$2$$), $rangeStartRow$$2$$ = $rangeStartColumn$$2_startIndex$$7$$.row, $rangeEndRow$$2$$ = $endIndex$$7_range$$12_rangeEndColumn$$2$$.row, !($index$$84$$.row < $rangeStartRow$$2$$ || 
    -1 != $rangeEndRow$$2$$ && $index$$84$$.row > $rangeEndRow$$2$$)) {
      if(!(0,window.isNaN)($rangeStartColumn$$2_startIndex$$7$$.column) && !(0,window.isNaN)($endIndex$$7_range$$12_rangeEndColumn$$2$$.column)) {
        if($rangeStartColumn$$2_startIndex$$7$$ = $rangeStartColumn$$2_startIndex$$7$$.column, $endIndex$$7_range$$12_rangeEndColumn$$2$$ = $endIndex$$7_range$$12_rangeEndColumn$$2$$.column, !($index$$84$$.column < $rangeStartColumn$$2_startIndex$$7$$ || -1 != $endIndex$$7_range$$12_rangeEndColumn$$2$$ && $index$$84$$.column > $endIndex$$7_range$$12_rangeEndColumn$$2$$)) {
          return!0
        }
      }else {
        return!0
      }
    }
  }
  return!1
};
D.$JSCompiler_StaticMethods__clearSelection$$ = function $$JSCompiler_StaticMethods__clearSelection$$$($JSCompiler_StaticMethods__clearSelection$self$$) {
  var $previous$$;
  (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__clearSelection$self$$);
  (0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)($JSCompiler_StaticMethods__clearSelection$self$$);
  $previous$$ = $JSCompiler_StaticMethods__clearSelection$self$$.$GetSelection$();
  $JSCompiler_StaticMethods__clearSelection$self$$.$m_selection$ = [];
  (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)($JSCompiler_StaticMethods__clearSelection$self$$, null, $previous$$)
};
D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$ = function $$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$$($JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$, $flag$$5$$) {
  $JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$.$m_discontiguousSelection$ = $flag$$5$$;
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$, $flag$$5$$ ? "accessibleRangeSelectModeOn" : "accessibleRangeSelectModeOff")
};
D.$JSCompiler_StaticMethods__selectEntireRow$$ = function $$JSCompiler_StaticMethods__selectEntireRow$$$($JSCompiler_StaticMethods__selectEntireRow$self$$, $rowStart$$10_startIndex$$8$$, $endIndex$$inline_1133_rowEnd$$1$$, $event$$66$$) {
  $rowStart$$10_startIndex$$8$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($rowStart$$10_startIndex$$8$$, 0);
  $endIndex$$inline_1133_rowEnd$$1$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$inline_1133_rowEnd$$1$$, -1);
  (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__selectEntireRow$self$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods__selectEntireRow$self$$, $rowStart$$10_startIndex$$8$$, $JSCompiler_StaticMethods__selectEntireRow$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$inline_1133_rowEnd$$1$$, $JSCompiler_StaticMethods__selectEntireRow$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $event$$66$$)))
};
D.$JSCompiler_StaticMethods__selectEntireColumn$$ = function $$JSCompiler_StaticMethods__selectEntireColumn$$$($JSCompiler_StaticMethods__selectEntireColumn$self$$, $columnStart$$7_startIndex$$9$$, $columnEnd$$1_endIndex$$inline_1138$$, $event$$67$$) {
  $columnStart$$7_startIndex$$9$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(0, $columnStart$$7_startIndex$$9$$);
  $columnEnd$$1_endIndex$$inline_1138$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(-1, $columnEnd$$1_endIndex$$inline_1138$$);
  (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$, $columnStart$$7_startIndex$$9$$, $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $columnEnd$$1_endIndex$$inline_1138$$, $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $event$$67$$)))
};
D.$DvtDataGrid$$.prototype.$_selectRangeCallback$ = function $$DvtDataGrid$$$$$_selectRangeCallback$$($event$$69$$, $newRange$$) {
  var $selection$$4$$, $previous$$1$$;
  $previous$$1$$ = this.$GetSelection$();
  $selection$$4$$ = [];
  $selection$$4$$.push($newRange$$);
  this.$m_selection$ = $selection$$4$$;
  (0,D.$JSCompiler_StaticMethods_highlightRange$$)(this, $newRange$$);
  (0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)(this) && (this.$m_selectionFrontier$ = this.$m_active$.indexes, (0,D.$JSCompiler_StaticMethods__highlightActive$$)(this));
  (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$69$$, $previous$$1$$)
};
D.$DvtDataGrid$$.prototype.$GetSelection$ = function $$DvtDataGrid$$$$$GetSelection$$() {
  null == this.$m_selection$ && (this.$m_selection$ = []);
  return this.$m_selection$
};
D.$DvtDataGrid$$.prototype.GetSelection = D.$DvtDataGrid$$.prototype.$GetSelection$;
D.$DvtDataGrid$$.prototype.$SetSelection$ = function $$DvtDataGrid$$$$$SetSelection$$($selection$$5$$) {
  void 0 != $selection$$5$$ && (null == $selection$$5$$ && ($selection$$5$$ = []), (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)(this), this.$GetSelection$(), this.$m_selection$ = $selection$$5$$, null != this.$m_databody$ && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, this.$m_startRow$, this.$m_endRow$))
};
D.$DvtDataGrid$$.prototype.SetSelection = D.$DvtDataGrid$$.prototype.$SetSelection$;
D.$DvtDataGrid$$.prototype.$fireSelectionEvent$ = function $$DvtDataGrid$$$$$fireSelectionEvent$$($event$$70$$, $previousSelection$$) {
  var $details$$8$$ = {event:$event$$70$$, ui:{selection:this.$GetSelection$(), previousSelection:$previousSelection$$}};
  this.fireEvent("select", $details$$8$$)
};
D.$JSCompiler_StaticMethods_extendSelection$$ = function $$JSCompiler_StaticMethods_extendSelection$$$($JSCompiler_StaticMethods_extendSelection$self$$, $index$$85$$, $event$$71$$) {
  var $anchor$$;
  $anchor$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_extendSelection$self$$.$m_utils$) ? $JSCompiler_StaticMethods_extendSelection$self$$.$m_touchSelectAnchor$ : $JSCompiler_StaticMethods_extendSelection$self$$.$m_active$.indexes;
  null != $anchor$$ && ((0,D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$)($JSCompiler_StaticMethods_extendSelection$self$$), $JSCompiler_StaticMethods_extendSelection$self$$.$m_selectionFrontier$ = $index$$85$$, "row" == $JSCompiler_StaticMethods_extendSelection$self$$.$m_options$.$getSelectionMode$() && ($index$$85$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createIndex($index$$85$$.row)), (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods_extendSelection$self$$, 
  $anchor$$, $JSCompiler_StaticMethods_extendSelection$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, $index$$85$$, $JSCompiler_StaticMethods_extendSelection$self$$.$_extendSelectionCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, $event$$71$$))))
};
D.$DvtDataGrid$$.prototype.$_extendSelectionCallback$ = function $$DvtDataGrid$$$$$_extendSelectionCallback$$($event$$72$$, $newRange$$1$$) {
  var $selection$$6_startIndexesMatch$$, $previous$$3$$, $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$, $endIndexesMatch$$;
  $previous$$3$$ = this.$GetSelection$();
  $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$ = $previous$$3$$[$previous$$3$$.length - 1];
  $selection$$6_startIndexesMatch$$ = $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$.startIndex.row == $newRange$$1$$.startIndex.row;
  null != $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$.startIndex.column && null != $newRange$$1$$.startIndex.column && ($selection$$6_startIndexesMatch$$ = $selection$$6_startIndexesMatch$$ && $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$.startIndex.column == $newRange$$1$$.startIndex.column);
  $endIndexesMatch$$ = $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$.endIndex.row == $newRange$$1$$.endIndex.row;
  null != $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$.endIndex.column && null != $newRange$$1$$.endIndex.column && ($endIndexesMatch$$ = $endIndexesMatch$$ && $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$.endIndex.column == $newRange$$1$$.endIndex.column);
  if(!$selection$$6_startIndexesMatch$$ || !$endIndexesMatch$$) {
    $selection$$6_startIndexesMatch$$ = $previous$$3$$.slice(0), $selection$$6_startIndexesMatch$$.pop(), $selection$$6_startIndexesMatch$$.push($newRange$$1$$), this.$m_selection$ = $selection$$6_startIndexesMatch$$, $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$), (0,D.$JSCompiler_StaticMethods_unhighlightElems$$)(this, 
    $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$), (0,D.$JSCompiler_StaticMethods_highlightRange$$)(this, $newRange$$1$$, !0), null == this.$m_selectionFrontier$ || (0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)(this) && this.$m_selectionFrontier$.row == this.$m_active$.indexes.row && this.$m_selectionFrontier$.column == this.$m_active$.indexes.column || ((0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)(this) && ($cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$ = 
    this.createRange(this.$m_active$.indexes), $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$), null != $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$ && 0 < $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$.length && 
    (0,D.$JSCompiler_StaticMethods__unsetAriaProperties$$)($cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$[0])), $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$ = this.createRange(this.$m_selectionFrontier$), $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$), 
    null == $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$ || 0 == $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$.length || ((0,D.$JSCompiler_StaticMethods__updateContextInfo$$)(this, this.$m_selectionFrontier$), $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$[0], 
    this.getMappedStyle("row")) ? $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$[0].firstChild : $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$[0], (0,D.$JSCompiler_StaticMethods__setAriaProperties$$)(this, (0,D.$JSCompiler_StaticMethods__createActiveObject$$)(this, $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$), null, $cell$$inline_1156_currentRange_elems$$inline_1151_range$$inline_1154_rowOrCell$$inline_1155$$))), 
    (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$72$$, $previous$$3$$), this.$m_discontiguousSelection$ && !(0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) && (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, !1)
  }
};
D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$ = function $$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$$($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$) {
  var $range$$13$$;
  null == $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_selectionFrontier$ || (0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$) && $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_selectionFrontier$.row == $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_active$.indexes.row && $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_selectionFrontier$.column == 
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_active$.indexes.column || ($range$$13$$ = $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.createRange($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_selectionFrontier$), $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$, $range$$13$$), 
  null != $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$ && 0 < $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.length && (0,D.$JSCompiler_StaticMethods__unsetAriaProperties$$)($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$[0]))
};
D.$DvtDataGrid$$.prototype.$selectAndFocus$ = function $$DvtDataGrid$$$$$selectAndFocus$$($index$$86$$, $event$$73$$, $augment$$) {
  null == $augment$$ && ($augment$$ = !1);
  (0,D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$)(this);
  this.$_setActiveByIndex$($index$$86$$, $event$$73$$) && ("row" == this.$m_options$.$getSelectionMode$() && ($index$$86$$ = this.createIndex($index$$86$$.row)), (0,D.$JSCompiler_StaticMethods__keys$$)(this, $index$$86$$, this.$_createRangeStartKeyCallback$.bind(this, $index$$86$$, this.$_selectAndFocusRangeCallback$.bind(this, $index$$86$$, $event$$73$$, $augment$$))))
};
D.$DvtDataGrid$$.prototype.$_selectAndFocusRangeCallback$ = function $$DvtDataGrid$$$$$_selectAndFocusRangeCallback$$($index$$87$$, $event$$74$$, $augment$$1$$, $range$$15$$) {
  var $selection$$7$$, $previous$$4$$;
  $previous$$4$$ = this.$GetSelection$();
  $selection$$7$$ = $previous$$4$$.slice(0);
  $augment$$1$$ || (this.$m_discontiguousSelection$ ? (0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)(this) && (null != this.$m_prevActive$ && "cell" == this.$m_prevActive$.type && this.$m_selectionFrontier$.row == this.$m_prevActive$.indexes.row && this.$m_selectionFrontier$.column == this.$m_prevActive$.indexes.column && !(0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$)) && ($selection$$7$$.pop(), (0,D.$JSCompiler_StaticMethods__isContainSelection$$)(this, this.$m_prevActive$.indexes, 
  $selection$$7$$) || (0,D.$JSCompiler_StaticMethods__unhighlightElement$$)(this, (0,D.$JSCompiler_StaticMethods__getCellByIndex$$)(this, this.$m_prevActive$.indexes), ["selected"])) : ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)(this), $selection$$7$$ = []));
  this.$m_selectionFrontier$ = $index$$87$$;
  $selection$$7$$.push($range$$15$$);
  this.$m_selection$ = $selection$$7$$;
  (0,D.$JSCompiler_StaticMethods__highlightElement$$)(this, (0,D.$JSCompiler_StaticMethods__getCellByIndex$$)(this, $index$$87$$), ["selected"]);
  (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$74$$, $previous$$4$$)
};
D.$JSCompiler_StaticMethods__compareSelectionAndFire$$ = function $$JSCompiler_StaticMethods__compareSelectionAndFire$$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$75$$, $clone$$1$$) {
  var $JSCompiler_inline_result$$215_selection$$8$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$GetSelection$();
  if((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$) && 0 < $JSCompiler_inline_result$$215_selection$$8$$.length) {
    var $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$, $iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$, $dir$$inline_1167_i$$inline_1171_row$$inline_1164$$;
    null == $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ && null == $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ && ($dir$$inline_1167_i$$inline_1171_row$$inline_1164$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.isRTLMode() ? "right" : "left", $iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$ = (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$), 
    $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ = window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, -$iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$ / 
    2, "top"), $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$ = window.document.createElement("div"), $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancetop"), $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$.setAttribute("role", 
    "button"), $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$.setAttribute("aria-label", $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.getTranslatedText("accessibleSelectionAffordanceTop")), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.appendChild($bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$), 
    $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ = window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, -1 * $iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$ / 
    2, "bottom"), $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$ = window.document.createElement("div"), $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancebottom"), $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$.setAttribute("role", 
    "button"), $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$.setAttribute("aria-label", $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.getTranslatedText("accessibleSelectionAffordanceBottom")), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.appendChild($bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$), 
    $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_options$.$getSelectionMode$(), "row" === $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$ ? ($iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_databody$) / 
    2 + $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_currentScrollLeft$ - $iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$ / 2, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, $iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$, $dir$$inline_1167_i$$inline_1171_row$$inline_1164$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, 
    $iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$, $dir$$inline_1167_i$$inline_1171_row$$inline_1164$$)) : ($bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$75$$.target), $iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$, 
    $dir$$inline_1167_i$$inline_1171_row$$inline_1164$$) - $iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$ / 2, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, $iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$, $dir$$inline_1167_i$$inline_1171_row$$inline_1164$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, 
    $iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$ + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$), $dir$$inline_1167_i$$inline_1171_row$$inline_1164$$)), $dir$$inline_1167_i$$inline_1171_row$$inline_1164$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, 
    $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.createRange($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_active$.indexes))[0].parentNode, $dir$$inline_1167_i$$inline_1171_row$$inline_1164$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), $dir$$inline_1167_i$$inline_1171_row$$inline_1164$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$));
    (0,D.$JSCompiler_StaticMethods__moveTouchSelectionAffordance$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$)
  }
  a: {
    if($JSCompiler_inline_result$$215_selection$$8$$.length !== $clone$$1$$.length) {
      $JSCompiler_inline_result$$215_selection$$8$$ = !1
    }else {
      for($dir$$inline_1167_i$$inline_1171_row$$inline_1164$$ = 0;$dir$$inline_1167_i$$inline_1171_row$$inline_1164$$ < $JSCompiler_inline_result$$215_selection$$8$$.length;$dir$$inline_1167_i$$inline_1171_row$$inline_1164$$ += 1) {
        $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$ = !1;
        for($iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$ = 0;$iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$ < $clone$$1$$.length;$iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$ += 1) {
          $JSCompiler_inline_result$$215_selection$$8$$[$dir$$inline_1167_i$$inline_1171_row$$inline_1164$$].startIndex.row === $clone$$1$$[$iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$].startIndex.row && ($JSCompiler_inline_result$$215_selection$$8$$[$dir$$inline_1167_i$$inline_1171_row$$inline_1164$$].startIndex.column === $clone$$1$$[$iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$].startIndex.column && $JSCompiler_inline_result$$215_selection$$8$$[$dir$$inline_1167_i$$inline_1171_row$$inline_1164$$].endIndex.row === 
          $clone$$1$$[$iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$].endIndex.row && $JSCompiler_inline_result$$215_selection$$8$$[$dir$$inline_1167_i$$inline_1171_row$$inline_1164$$].endIndex.column === $clone$$1$$[$iconSize$$inline_1161_j$$inline_1172_left$$inline_1166$$].endIndex.column) && ($bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$ = !0)
        }
        if(!1 === $bottomIcon$$inline_1163_cell$$inline_1160_foundMatch$$inline_1173_selectionMode$$inline_1165_topIcon$$inline_1162$$) {
          $JSCompiler_inline_result$$215_selection$$8$$ = !1;
          break a
        }
      }
      $JSCompiler_inline_result$$215_selection$$8$$ = !0
    }
  }
  $JSCompiler_inline_result$$215_selection$$8$$ || $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$fireSelectionEvent$($event$$75$$, $clone$$1$$)
};
D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$$($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$) {
  (0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$) && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ && $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode) && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), 
  $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$))
};
D.$JSCompiler_StaticMethods__moveTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__moveTouchSelectionAffordance$$$($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$) {
  var $selection$$9_topIconCell$$, $topRow$$, $bottomRow$$, $dir$$20_selectionMode$$3$$, $bottomIconCell_elementsInRange$$;
  $selection$$9_topIconCell$$ = $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$GetSelection$();
  0 < $selection$$9_topIconCell$$.length && ($dir$$20_selectionMode$$3$$ = $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_options$.$getSelectionMode$(), $topRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, $selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 1].startKey.row), $bottomRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, 
  $selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 1].endKey.row), null != $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ && null != $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$ && ("row" === $dir$$20_selectionMode$$3$$ ? ($topRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), $bottomRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$)) : 
  ($dir$$20_selectionMode$$3$$ = $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_resources$.isRTLMode() ? "right" : "left", $bottomIconCell_elementsInRange$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, $selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 1]), $selection$$9_topIconCell$$ = $bottomIconCell_elementsInRange$$[0], $bottomIconCell_elementsInRange$$ = $bottomIconCell_elementsInRange$$[$bottomIconCell_elementsInRange$$.length - 
  1], $topRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), $bottomRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($selection$$9_topIconCell$$, $dir$$20_selectionMode$$3$$) - (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$) / 
  2, $dir$$20_selectionMode$$3$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($bottomIconCell_elementsInRange$$, $dir$$20_selectionMode$$3$$) + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, $bottomIconCell_elementsInRange$$) - (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$) / 
  2, $dir$$20_selectionMode$$3$$))))
};
D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$$($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$) {
  var $newLeft$$, $dir$$21$$;
  "row" === $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_options$.$getSelectionMode$() && null != $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ && ($dir$$21$$ = $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_resources$.isRTLMode() ? "right" : "left", $newLeft$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_databody$) / 2 + $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_currentScrollLeft$, 
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$, $newLeft$$, $dir$$21$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$, $newLeft$$, $dir$$21$$))
};
D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$ = function $$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$$($JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$) {
  var $div$$1$$, $divWidth$$;
  null == $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ && ($div$$1$$ = window.document.createElement("div"), $div$$1$$.className = $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.getMappedStyle("toucharea"), $div$$1$$.style.visibilty = "hidden", $div$$1$$.style.top = "0px", $div$$1$$.style.visibilty = "0px", $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.appendChild($div$$1$$), $divWidth$$ = $div$$1$$.offsetWidth, 
  $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.removeChild($div$$1$$), $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ = $divWidth$$);
  return $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$
};

/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods_handleResize$$ = function $$JSCompiler_StaticMethods_handleResize$$$($JSCompiler_StaticMethods_handleResize$self$$, $event$$57$$) {
  var $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$;
  if(!1 === $JSCompiler_StaticMethods_handleResize$self$$.$m_isResizing$) {
    if($header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ = $JSCompiler_StaticMethods_handleResize$self$$.find($event$$57$$.target, "header"), null != $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ && ($header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ == $JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeader$ || $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ == 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_colHeader$)) {
      $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ = (0,D.$JSCompiler_StaticMethods_manageHeaderCursor$$)($JSCompiler_StaticMethods_handleResize$self$$, $event$$57$$), null != $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$ && ("default" == $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.style.cursor = "", null != $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$ && ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$.style.cursor = 
      "")) : ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.style.cursor = $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$, null != $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$ && ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$.style.cursor = $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$)))
    }
  }else {
    var $newElementHeight$$inline_1078_newElementWidth$$inline_1076$$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$57$$.pageX;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$57$$.pageY;
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$57$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$57$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$57$$.pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$57$$.pageY);
    $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleResize$self$$.getMappedStyle("colheadercell")) ? "column" : "row";
    "col-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? "column" === $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ ? ($header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ = (0,D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_1078_newElementWidth$$inline_1076$$ = 
    (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$), (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$, $newElementHeight$$inline_1078_newElementWidth$$inline_1076$$)) : "row" === $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ && 
    ($header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_1078_newElementWidth$$inline_1076$$ = (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$), 
    (0,D.$JSCompiler_StaticMethods_resizeRowWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, $newElementHeight$$inline_1078_newElementWidth$$inline_1076$$ - $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$)) : "row-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ && ("row" === $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ ? ($header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ = 
    (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_1078_newElementWidth$$inline_1076$$ = (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$), (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, 
    $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$, $newElementHeight$$inline_1078_newElementWidth$$inline_1076$$)) : "column" === $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ && ($header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), 
    $newElementHeight$$inline_1078_newElementWidth$$inline_1076$$ = (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$), (0,D.$JSCompiler_StaticMethods_resizeColHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, $newElementHeight$$inline_1078_newElementWidth$$inline_1076$$ - $header$$18_oldElementHeight$$inline_1077_oldElementWidth$$inline_1075_resizeHeaderMode$$inline_1074$$)));
    (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_handleResize$self$$);
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods__moveTouchSelectionAffordance$$)($JSCompiler_StaticMethods_handleResize$self$$);
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseX$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseY$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$
  }
};
D.$JSCompiler_StaticMethods_handleResizeMouseDown$$ = function $$JSCompiler_StaticMethods_handleResizeMouseDown$$$($JSCompiler_StaticMethods_handleResizeMouseDown$self$$, $event$$58$$) {
  return"col-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$ || "row-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$ ? ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_isResizing$ = !0, (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = $event$$58$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = 
  $event$$58$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = $event$$58$$.pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = $event$$58$$.pageY), $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeTop$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinTop$ = 
  0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeRight$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeBottom$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_orginalResizeDimensions$ = {width:(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_resizingElement$), height:(0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_resizingElement$)}, 
  !0) : !1
};
D.$JSCompiler_StaticMethods_handleResizeMouseUp$$ = function $$JSCompiler_StaticMethods_handleResizeMouseUp$$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$, $event$$59$$) {
  var $details$$6_newHeight_size$$10$$, $newWidth$$;
  if(!0 === $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$) {
    $newWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$);
    $details$$6_newHeight_size$$10$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$);
    if($newWidth$$ != $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_orginalResizeDimensions$.width || $details$$6_newHeight_size$$10$$ != $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_orginalResizeDimensions$.height) {
      $details$$6_newHeight_size$$10$$ = "col-resize" === $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ ? $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.width : $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.height, $details$$6_newHeight_size$$10$$ = {event:$event$$59$$, ui:{header:(0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods_handleResizeMouseUp$self$$, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$), 
      oldDimensions:{width:$JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_orginalResizeDimensions$.width, height:$JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_orginalResizeDimensions$.height}, newDimensions:{width:(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$), height:(0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$)}, size:$details$$6_newHeight_size$$10$$}}, 
      $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.fireEvent("resize", $details$$6_newHeight_size$$10$$)
    }
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ = !1;
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ = "default";
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.cursor = "";
    null != $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElementSibling$ && ($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElementSibling$.style.cursor = "");
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$ = null;
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElementSibling$ = null;
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_orginalResizeDimensions$ = null
  }
};
D.$JSCompiler_StaticMethods__isDOMElementResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementResizable$$$($JSCompiler_StaticMethods__isDOMElementResizable$self$$, $element$$32$$) {
  return null == $element$$32$$ ? !1 : "true" === $element$$32$$.getAttribute($JSCompiler_StaticMethods__isDOMElementResizable$self$$.$m_resources$.getMappedAttribute("resizable"))
};
D.$JSCompiler_StaticMethods_manageHeaderCursor$$ = function $$JSCompiler_StaticMethods_manageHeaderCursor$$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $event$$60$$) {
  var $elem$$22$$ = $event$$60$$.target, $resizeHeaderMode$$, $edges_targetWidth$$inline_1085$$, $cursorX_rightEdgeCheck$$, $bottomEdgeCheck_cursorY_index$$76$$, $level$$27_offsetPixel$$, $widthResizable$$, $heightResizable$$, $siblingResizable$$, $leftEdge$$inline_1083_rtl$$3$$, $sibling$$1$$, $parent$$3$$, $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$, $elementXY$$inline_1082_topEdge$$inline_1084_topEdgeCheck$$;
  ($elem$$22$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$60$$.target, "colheadercell")) ? $resizeHeaderMode$$ = "column" : ($elem$$22$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$60$$.target, "rowheadercell"), $resizeHeaderMode$$ = "row");
  if(!$elem$$22$$) {
    return"default"
  }
  $bottomEdgeCheck_cursorY_index$$76$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$22$$);
  $level$$27_offsetPixel$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$22$$);
  "column" === $resizeHeaderMode$$ ? ($heightResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).height ? !0 : !1, $widthResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$22$$), $sibling$$1$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $bottomEdgeCheck_cursorY_index$$76$$ - 
  1, $level$$27_offsetPixel$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $sibling$$1$$), $parent$$3$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $bottomEdgeCheck_cursorY_index$$76$$, $level$$27_offsetPixel$$ - 1)) : "row" === $resizeHeaderMode$$ && ($widthResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, 
  $resizeHeaderMode$$).width ? !0 : !1, $heightResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$22$$), $sibling$$1$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $bottomEdgeCheck_cursorY_index$$76$$ - 1, $level$$27_offsetPixel$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
  $sibling$$1$$), $parent$$3$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $bottomEdgeCheck_cursorY_index$$76$$, $level$$27_offsetPixel$$ - 1));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_utils$) ? ($cursorX_rightEdgeCheck$$ = $event$$60$$.touches[0].pageX, $bottomEdgeCheck_cursorY_index$$76$$ = $event$$60$$.touches[0].pageY, $level$$27_offsetPixel$$ = 8) : ($cursorX_rightEdgeCheck$$ = $event$$60$$.pageX, $bottomEdgeCheck_cursorY_index$$76$$ = $event$$60$$.pageY, $level$$27_offsetPixel$$ = 5);
  $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$ = $elem$$22$$;
  $elementXY$$inline_1082_topEdge$$inline_1084_topEdgeCheck$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$);
  $leftEdge$$inline_1083_rtl$$3$$ = $elementXY$$inline_1082_topEdge$$inline_1084_topEdgeCheck$$[0];
  $elementXY$$inline_1082_topEdge$$inline_1084_topEdgeCheck$$ = $elementXY$$inline_1082_topEdge$$inline_1084_topEdgeCheck$$[1];
  (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.getMappedStyle("colheadercell")) ? ($edges_targetWidth$$inline_1085$$ = (0,D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$), $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$)) : 
  ($edges_targetWidth$$inline_1085$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$), $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$));
  $edges_targetWidth$$inline_1085$$ = [$leftEdge$$inline_1083_rtl$$3$$, $elementXY$$inline_1082_topEdge$$inline_1084_topEdgeCheck$$, $leftEdge$$inline_1083_rtl$$3$$ + $edges_targetWidth$$inline_1085$$, $elementXY$$inline_1082_topEdge$$inline_1084_topEdgeCheck$$ + $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$];
  $leftEdge$$inline_1083_rtl$$3$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resources$.isRTLMode();
  $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$ = $cursorX_rightEdgeCheck$$ < $edges_targetWidth$$inline_1085$$[0] + $level$$27_offsetPixel$$;
  $elementXY$$inline_1082_topEdge$$inline_1084_topEdgeCheck$$ = $bottomEdgeCheck_cursorY_index$$76$$ < $edges_targetWidth$$inline_1085$$[1] + $level$$27_offsetPixel$$;
  $cursorX_rightEdgeCheck$$ = $cursorX_rightEdgeCheck$$ > $edges_targetWidth$$inline_1085$$[2] - $level$$27_offsetPixel$$;
  $bottomEdgeCheck_cursorY_index$$76$$ = $bottomEdgeCheck_cursorY_index$$76$$ > $edges_targetWidth$$inline_1085$$[3] - $level$$27_offsetPixel$$;
  if("column" === $resizeHeaderMode$$) {
    if($widthResizable$$ && ($leftEdge$$inline_1083_rtl$$3$$ ? $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$ : $cursorX_rightEdgeCheck$$)) {
      return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$, "col-resize"
    }
    if($siblingResizable$$ && ($leftEdge$$inline_1083_rtl$$3$$ ? $cursorX_rightEdgeCheck$$ : $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$)) {
      if($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $sibling$$1$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$22$$, null !== $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$) {
        return"col-resize"
      }
    }else {
      if($heightResizable$$) {
        if($bottomEdgeCheck_cursorY_index$$76$$) {
          return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$, "row-resize"
        }
        if($elementXY$$inline_1082_topEdge$$inline_1084_topEdgeCheck$$) {
          return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $parent$$3$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$22$$, "row-resize"
        }
      }
    }
  }else {
    if("row" === $resizeHeaderMode$$) {
      if($heightResizable$$ && $bottomEdgeCheck_cursorY_index$$76$$) {
        return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$, "row-resize"
      }
      if($siblingResizable$$ && $elementXY$$inline_1082_topEdge$$inline_1084_topEdgeCheck$$ && ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $sibling$$1$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$22$$, null !== $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$)) {
        return"row-resize"
      }
      if($widthResizable$$) {
        if($leftEdge$$inline_1083_rtl$$3$$ ? $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$ : $cursorX_rightEdgeCheck$$) {
          return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$, "col-resize"
        }
        if($leftEdge$$inline_1083_rtl$$3$$ ? $cursorX_rightEdgeCheck$$ : $elem$$inline_1081_leftEdgeCheck_targetHeight$$inline_1086$$) {
          if($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $parent$$3$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$22$$, null !== $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$) {
            return"col-resize"
          }
        }
      }
    }
  }
  return"default"
};
D.$JSCompiler_StaticMethods_resizeColWidth$$ = function $$JSCompiler_StaticMethods_resizeColWidth$$$($JSCompiler_StaticMethods_resizeColWidth$self$$, $oldElementWidth$$1_widthChange$$, $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$) {
  $oldElementWidth$$1_widthChange$$ = $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ - $oldElementWidth$$1_widthChange$$;
  if(0 != $oldElementWidth$$1_widthChange$$) {
    $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild);
    $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ += $oldElementWidth$$1_widthChange$$;
    (0,D.$JSCompiler_StaticMethods__databodyEmpty$$)($JSCompiler_StaticMethods_resizeColWidth$self$$) || ((0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild, $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild, $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$));
    var $dir$$inline_1090$$, $databodyRows$$inline_1091$$, $i$$inline_1092$$, $newStart$$inline_1093$$, $j$$inline_1094$$, $index$$inline_1095$$, $cells$$inline_1096$$, $cell$$inline_1097$$, $newWidth$$inline_1098$$;
    $dir$$inline_1090$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "none";
    $index$$inline_1095$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods_resizeColWidth$self$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$);
    1 < $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_columnHeaderLevelCount$ && ($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$ === $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode.firstChild && null != $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.nextSibling) && ($index$$inline_1095$$ += (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_resizeColWidth$self$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode, 
    "extent") - 1);
    (0,D.$JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$)($JSCompiler_StaticMethods_resizeColWidth$self$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.firstChild, $index$$inline_1095$$, $oldElementWidth$$1_widthChange$$, $dir$$inline_1090$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.getMappedStyle("colheadercell"), "column");
    if(null != $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild) {
      $databodyRows$$inline_1091$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild.childNodes;
      for($i$$inline_1092$$ = 0;$i$$inline_1092$$ < $databodyRows$$inline_1091$$.length;$i$$inline_1092$$++) {
        $cells$$inline_1096$$ = $databodyRows$$inline_1091$$[$i$$inline_1092$$].childNodes;
        $cell$$inline_1097$$ = $cells$$inline_1096$$[$index$$inline_1095$$ - $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_startCol$];
        null == $newWidth$$inline_1098$$ && ($newWidth$$inline_1098$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cell$$inline_1097$$) + $oldElementWidth$$1_widthChange$$);
        (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($cell$$inline_1097$$, $newWidth$$inline_1098$$);
        for($j$$inline_1094$$ = $index$$inline_1095$$ - $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_startCol$ + 1;$j$$inline_1094$$ < $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endCol$ - $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_startCol$ + 1;$j$$inline_1094$$ += 1) {
          $cell$$inline_1097$$ = $cells$$inline_1096$$[$j$$inline_1094$$], $newStart$$inline_1093$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$inline_1097$$, $dir$$inline_1090$$) + $oldElementWidth$$1_widthChange$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$inline_1097$$, $newStart$$inline_1093$$, $dir$$inline_1090$$)
        }
      }
    }
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColHeaderPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_avgColWidth$ = $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ / $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_dataSource$.getCount("column");
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeColWidth$self$$)
  }
};
D.$JSCompiler_StaticMethods_resizeRowHeight$$ = function $$JSCompiler_StaticMethods_resizeRowHeight$$$($JSCompiler_StaticMethods_resizeRowHeight$self$$, $heightChange_oldElementHeight$$1$$, $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$) {
  $heightChange_oldElementHeight$$1$$ = $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ - $heightChange_oldElementHeight$$1$$;
  if(0 != $heightChange_oldElementHeight$$1$$) {
    $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild);
    $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ += $heightChange_oldElementHeight$$1$$;
    (0,D.$JSCompiler_StaticMethods__databodyEmpty$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$) || ((0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild, $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild, $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$));
    var $databodyRows$$inline_1102$$, $i$$inline_1103_index$$inline_1105$$, $newHeight$$inline_1107_newStart$$inline_1104$$, $row$$inline_1106$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "none";
    $i$$inline_1103_index$$inline_1105$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$);
    1 < $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeaderLevelCount$ && ($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ === $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.firstChild && null != $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.nextSibling) && ($i$$inline_1103_index$$inline_1105$$ += (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode, 
    "extent") - 1);
    (0,D.$JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild, $i$$inline_1103_index$$inline_1105$$, $heightChange_oldElementHeight$$1$$, "top", $JSCompiler_StaticMethods_resizeRowHeight$self$$.getMappedStyle("rowheadercell"), "row");
    if(null != $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild) {
      $databodyRows$$inline_1102$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild.childNodes;
      $row$$inline_1106$$ = $databodyRows$$inline_1102$$[$i$$inline_1103_index$$inline_1105$$ - $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_startRow$];
      $newHeight$$inline_1107_newStart$$inline_1104$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$inline_1106$$) + $heightChange_oldElementHeight$$1$$;
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($row$$inline_1106$$, $newHeight$$inline_1107_newStart$$inline_1104$$);
      for($i$$inline_1103_index$$inline_1105$$ = $i$$inline_1103_index$$inline_1105$$ - $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_startRow$ + 1;$i$$inline_1103_index$$inline_1105$$ < $databodyRows$$inline_1102$$.length;$i$$inline_1103_index$$inline_1105$$++) {
        $row$$inline_1106$$ = $databodyRows$$inline_1102$$[$i$$inline_1103_index$$inline_1105$$], $newHeight$$inline_1107_newStart$$inline_1104$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$inline_1106$$, "top") + $heightChange_oldElementHeight$$1$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($row$$inline_1106$$, $newHeight$$inline_1107_newStart$$inline_1104$$, "top")
      }
    }
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "";
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowHeaderPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_avgRowHeight$ = $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ / $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_dataSource$.getCount("row");
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$)
  }
};
D.$JSCompiler_StaticMethods_resizeColHeight$$ = function $$JSCompiler_StaticMethods_resizeColHeight$$$($JSCompiler_StaticMethods_resizeColHeight$self$$, $heightChange$$1$$) {
  if(0 != $heightChange$$1$$) {
    var $level$$28$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_resizeColHeight$self$$, $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_resizingElement$) + (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_resizeColHeight$self$$, $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_resizingElement$, "depth") - 1;
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_columnHeaderLevelHeights$[$level$$28$$] += $heightChange$$1$$;
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$.style.display = "none";
    (0,D.$JSCompiler_StaticMethods__shiftHeadersDirInContainer$$)($JSCompiler_StaticMethods_resizeColHeight$self$$, $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$.firstChild, $heightChange$$1$$, $level$$28$$, "top", $JSCompiler_StaticMethods_resizeColHeight$self$$.getMappedStyle("colheadercell"), "column");
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$.style.display = "";
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeaderHeight$ += $heightChange$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$, $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeaderHeight$);
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeColHeight$self$$)
  }
};
D.$JSCompiler_StaticMethods_resizeRowWidth$$ = function $$JSCompiler_StaticMethods_resizeRowWidth$$$($JSCompiler_StaticMethods_resizeRowWidth$self$$, $widthChange$$1$$) {
  if(0 != $widthChange$$1$$) {
    var $level$$29$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods_resizeRowWidth$self$$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_resizingElement$) + (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods_resizeRowWidth$self$$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_resizingElement$, "depth") - 1;
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeaderLevelWidths$[$level$$29$$] += $widthChange$$1$$;
    var $dir$$inline_1116$$ = $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$.style.display = "none";
    (0,D.$JSCompiler_StaticMethods__shiftHeadersDirInContainer$$)($JSCompiler_StaticMethods_resizeRowWidth$self$$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$.firstChild, $widthChange$$1$$, $level$$29$$, $dir$$inline_1116$$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.getMappedStyle("rowheadercell"), "row");
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$.style.display = "";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeaderWidth$ += $widthChange$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeaderWidth$);
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeRowWidth$self$$)
  }
};
D.$JSCompiler_StaticMethods_getNewElementWidth$$ = function $$JSCompiler_StaticMethods_getNewElementWidth$$$($JSCompiler_StaticMethods_getNewElementWidth$self$$, $axis$$35$$, $oldElementWidth$$2$$) {
  var $minWidth$$, $deltaWidth$$, $newElementWidth$$3$$, $halfGridWidth$$;
  $minWidth$$ = (0,D.$JSCompiler_StaticMethods__getMinValue$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$, "width", $axis$$35$$);
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_databody$);
  $deltaWidth$$ = $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_resources$.isRTLMode() ? $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$;
  $newElementWidth$$3$$ = $oldElementWidth$$2$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$;
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_scroller$.firstChild);
  $halfGridWidth$$ = window.Math.round($JSCompiler_StaticMethods_getNewElementWidth$self$$.getWidth() / 2);
  $newElementWidth$$3$$ < $minWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ += $deltaWidth$$ - $minWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $minWidth$$) : ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ = 0);
  "row" === $axis$$35$$ && ($newElementWidth$$3$$ > $halfGridWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ += $deltaWidth$$ - $halfGridWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $halfGridWidth$$) : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ = 0);
  return $newElementWidth$$3$$
};
D.$JSCompiler_StaticMethods_getNewElementHeight$$ = function $$JSCompiler_StaticMethods_getNewElementHeight$$$($JSCompiler_StaticMethods_getNewElementHeight$self$$, $axis$$36$$, $oldElementHeight$$2$$) {
  var $minHeight$$, $deltaHeight$$, $newElementHeight$$3$$, $halfGridHeight$$;
  $minHeight$$ = (0,D.$JSCompiler_StaticMethods__getMinValue$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$, "height", $axis$$36$$);
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_databody$);
  $deltaHeight$$ = $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_currentMouseY$ - $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_lastMouseY$;
  $newElementHeight$$3$$ = $oldElementHeight$$2$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$;
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_scroller$.firstChild);
  $halfGridHeight$$ = window.Math.round($JSCompiler_StaticMethods_getNewElementHeight$self$$.getHeight() / 2);
  $newElementHeight$$3$$ < $minHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ += $deltaHeight$$ - $minHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $minHeight$$) : ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ = 0);
  "column" === $axis$$36$$ && ($newElementHeight$$3$$ > $halfGridHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ += $deltaHeight$$ - $halfGridHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $halfGridHeight$$) : $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ = 0);
  return $newElementHeight$$3$$
};
D.$JSCompiler_StaticMethods__getMinValue$$ = function $$JSCompiler_StaticMethods__getMinValue$$$($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $dimension$$, $axis$$37$$) {
  var $index$$77$$, $level$$30$$, $elem$$23$$, $minValue$$, $extent$$1$$, $currentDimensionValue$$, $innerDimensionValue$$, $depth$$3$$;
  $elem$$23$$ = $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_resizingElement$;
  $level$$30$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $elem$$23$$);
  $depth$$3$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $elem$$23$$, "depth");
  $minValue$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_utils$) ? 16 : 10;
  if("column" === $axis$$37$$ && (1 === $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_columnHeaderLevelCount$ || "height" === $dimension$$ && 1 === $depth$$3$$) || "row" === $axis$$37$$ && (1 === $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_rowHeaderLevelCount$ || "width" === $dimension$$ && 1 === $depth$$3$$)) {
    return $minValue$$
  }
  $index$$77$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $elem$$23$$);
  $extent$$1$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_resizingElement$.parentNode, "extent");
  $currentDimensionValue$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($elem$$23$$, $dimension$$);
  "column" === $axis$$37$$ ? "width" === $dimension$$ ? ($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$ = (0,D.$JSCompiler_StaticMethods__getColumnHeaderByIndex$$)($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $index$$77$$ + $extent$$1$$ - 1, $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_columnHeaderLevelCount$ - 1), $innerDimensionValue$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $dimension$$)) : $innerDimensionValue$$ = 
  $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$_getColumnHeaderLevelHeight$($level$$30$$ + $depth$$3$$ - 1, $elem$$23$$) : "row" === $axis$$37$$ && ("height" === $dimension$$ ? ($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$ = (0,D.$JSCompiler_StaticMethods__getRowHeaderByIndex$$)($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $index$$77$$ + $extent$$1$$ - 1, $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_rowHeaderLevelCount$ - 1), $innerDimensionValue$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, 
  $dimension$$)) : $innerDimensionValue$$ = $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$_getRowHeaderLevelWidth$($level$$30$$ + $depth$$3$$ - 1, $elem$$23$$));
  return $currentDimensionValue$$ - ($innerDimensionValue$$ - $minValue$$)
};
D.$JSCompiler_StaticMethods_manageResizeScrollbars$$ = function $$JSCompiler_StaticMethods_manageResizeScrollbars$$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$) {
  var $databodyContentWidth$$1_width$$24$$, $height$$29_scrollerHeight$$3$$, $colHeader$$7$$, $rowHeader$$21$$, $scroller$$10$$, $databody$$14$$, $colHeaderHeight$$4$$, $rowHeaderWidth$$3$$, $databodyWidth$$2$$, $databodyContentHeight$$2$$, $databodyHeight$$2$$, $isDatabodyHorizontalScrollbarRequired$$1$$, $isDatabodyVerticalScrollbarRequired$$1$$, $scrollbarSize$$2$$, $dir$$14$$, $scrollerWidth$$3$$, $deltaX$$3$$ = 0, $deltaY$$5$$ = 0;
  $databodyContentWidth$$1_width$$24$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getWidth();
  $height$$29_scrollerHeight$$3$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getHeight();
  $colHeader$$7$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_colHeader$;
  $rowHeader$$21$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_rowHeader$;
  $scroller$$10$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scroller$;
  $databody$$14$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_databody$;
  $colHeaderHeight$$4$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $rowHeaderWidth$$3$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $height$$29_scrollerHeight$$3$$ -= $colHeaderHeight$$4$$;
  $scrollerWidth$$3$$ = $databodyContentWidth$$1_width$$24$$ - $rowHeaderWidth$$3$$;
  $dir$$14$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  if(!(0,D.$JSCompiler_StaticMethods__databodyEmpty$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$)) {
    $databodyContentWidth$$1_width$$24$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$14$$.firstChild);
    $databodyContentHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$14$$.firstChild);
    $databodyWidth$$2$$ = window.Math.min($databodyContentWidth$$1_width$$24$$, $scrollerWidth$$3$$);
    $databodyHeight$$2$$ = window.Math.min($databodyContentHeight$$2$$, $height$$29_scrollerHeight$$3$$);
    $scrollbarSize$$2$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_utils$);
    ($isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$3$$)) ? $isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $height$$29_scrollerHeight$$3$$ - $scrollbarSize$$2$$) : ($isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, 
    $height$$29_scrollerHeight$$3$$)) && ($isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$3$$ - $scrollbarSize$$2$$));
    !$isDatabodyVerticalScrollbarRequired$$1$$ && (!$isDatabodyHorizontalScrollbarRequired$$1$$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$) && ($scroller$$10$$.style.overflow = "visible");
    if($isDatabodyVerticalScrollbarRequired$$1$$ && $isDatabodyHorizontalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ || $isDatabodyVerticalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ || $isDatabodyHorizontalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$) {
      $scroller$$10$$.style.overflow = "auto"
    }
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ = $isDatabodyHorizontalScrollbarRequired$$1$$;
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$1$$;
    $isDatabodyHorizontalScrollbarRequired$$1$$ && $height$$29_scrollerHeight$$3$$ - $scrollbarSize$$2$$ < $databodyHeight$$2$$ && ($databodyHeight$$2$$ = $height$$29_scrollerHeight$$3$$ - $scrollbarSize$$2$$);
    $isDatabodyVerticalScrollbarRequired$$1$$ && $scrollerWidth$$3$$ - $scrollbarSize$$2$$ < $databodyWidth$$2$$ && ($databodyWidth$$2$$ = $scrollerWidth$$3$$ - $scrollbarSize$$2$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$21$$, $databodyHeight$$2$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$7$$, $databodyWidth$$2$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$14$$, $databodyWidth$$2$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$14$$, $databodyHeight$$2$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$10$$, $scrollerWidth$$3$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$10$$, $height$$29_scrollerHeight$$3$$);
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollWidth$ = $databodyContentWidth$$1_width$$24$$ - $databodyWidth$$2$$;
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollHeight$ = $databodyContentHeight$$2$$ - $databodyHeight$$2$$
  }
  null != $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_empty$ && ((0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_empty$, $colHeaderHeight$$4$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_empty$, $rowHeaderWidth$$3$$, $dir$$14$$));
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$21$$, $colHeaderHeight$$4$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$7$$, $rowHeaderWidth$$3$$, $dir$$14$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$14$$, $colHeaderHeight$$4$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$14$$, $rowHeaderWidth$$3$$, $dir$$14$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$10$$, $colHeaderHeight$$4$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$10$$, $rowHeaderWidth$$3$$, $dir$$14$$);
  (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  if((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_utils$) && ($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_currentScrollLeft$ > $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollWidth$ && ($deltaX$$3$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollWidth$ - $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_currentScrollLeft$), $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_currentScrollTop$ > 
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollHeight$ && ($deltaY$$5$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollHeight$ - $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_currentScrollTop$), 0 != $deltaX$$3$$ || 0 != $deltaY$$5$$)) {
    (0,D.$JSCompiler_StaticMethods__disableTouchScrollAnimation$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$), (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $deltaX$$3$$, $deltaY$$5$$)
  }
};
D.$JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$ = function $$JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$$($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $element$$33_headersContainer$$, $index$$80$$, $dimensionChange$$, $dir$$16$$, $className$$15$$, $axis$$38$$) {
  var $header$$19_headers$$3$$, $isHeader$$1_newStart$$2$$, $groupingContainer$$1_i$$45_newVal$$, $headerStart$$;
  $element$$33_headersContainer$$ = $element$$33_headersContainer$$.lastChild;
  ($isHeader$$1_newStart$$2$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$33_headersContainer$$, $className$$15$$)) ? ($groupingContainer$$1_i$$45_newVal$$ = $element$$33_headersContainer$$.parentNode, $header$$19_headers$$3$$ = $element$$33_headersContainer$$, $headerStart$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $header$$19_headers$$3$$)) : ($groupingContainer$$1_i$$45_newVal$$ = $element$$33_headersContainer$$, 
  $header$$19_headers$$3$$ = $element$$33_headersContainer$$.firstChild, $headerStart$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $groupingContainer$$1_i$$45_newVal$$, "start"));
  for(;$index$$80$$ < $headerStart$$;) {
    if($isHeader$$1_newStart$$2$$) {
      $isHeader$$1_newStart$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$19_headers$$3$$, $dir$$16$$) + $dimensionChange$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($header$$19_headers$$3$$, $isHeader$$1_newStart$$2$$, $dir$$16$$), $element$$33_headersContainer$$ = $element$$33_headersContainer$$.previousSibling, $isHeader$$1_newStart$$2$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$33_headersContainer$$, $className$$15$$), $groupingContainer$$1_i$$45_newVal$$ = 
      $element$$33_headersContainer$$.parentNode, $header$$19_headers$$3$$ = $element$$33_headersContainer$$, $headerStart$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $header$$19_headers$$3$$)
    }else {
      $header$$19_headers$$3$$ = $groupingContainer$$1_i$$45_newVal$$.getElementsByClassName($className$$15$$);
      for($groupingContainer$$1_i$$45_newVal$$ = 0;$groupingContainer$$1_i$$45_newVal$$ < $header$$19_headers$$3$$.length;$groupingContainer$$1_i$$45_newVal$$++) {
        $isHeader$$1_newStart$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$19_headers$$3$$[$groupingContainer$$1_i$$45_newVal$$], $dir$$16$$) + $dimensionChange$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($header$$19_headers$$3$$[$groupingContainer$$1_i$$45_newVal$$], $isHeader$$1_newStart$$2$$, $dir$$16$$)
      }
      $element$$33_headersContainer$$ = $element$$33_headersContainer$$.previousSibling;
      $isHeader$$1_newStart$$2$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$33_headersContainer$$, $className$$15$$);
      $groupingContainer$$1_i$$45_newVal$$ = $element$$33_headersContainer$$;
      $header$$19_headers$$3$$ = $element$$33_headersContainer$$.firstChild;
      $headerStart$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $groupingContainer$$1_i$$45_newVal$$, "start")
    }
  }
  "column" == $axis$$38$$ ? ($groupingContainer$$1_i$$45_newVal$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($header$$19_headers$$3$$) + $dimensionChange$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($header$$19_headers$$3$$, $groupingContainer$$1_i$$45_newVal$$)) : ($groupingContainer$$1_i$$45_newVal$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($header$$19_headers$$3$$) + $dimensionChange$$, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($header$$19_headers$$3$$, $groupingContainer$$1_i$$45_newVal$$));
  !$isHeader$$1_newStart$$2$$ && null != $header$$19_headers$$3$$.nextSibling ? (0,D.$JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $element$$33_headersContainer$$, $index$$80$$, $dimensionChange$$, $dir$$16$$, $className$$15$$, $axis$$38$$) : $JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$.$m_sizingManager$.$setSize$($axis$$38$$, (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, 
  $header$$19_headers$$3$$), $groupingContainer$$1_i$$45_newVal$$)
};
D.$JSCompiler_StaticMethods__shiftHeadersDirInContainer$$ = function $$JSCompiler_StaticMethods__shiftHeadersDirInContainer$$$($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $groupings_headersContainer$$1$$, $dimensionChange$$1$$, $level$$33$$, $dir$$18$$, $className$$16$$, $axis$$39$$) {
  var $i$$46$$, $grouping_headers$$4$$, $headerLevel_isHeader$$2_newDir$$, $headerDepth$$3_j$$12$$;
  $groupings_headersContainer$$1$$ = $groupings_headersContainer$$1$$.childNodes;
  for($i$$46$$ = 0;$i$$46$$ < $groupings_headersContainer$$1$$.length;$i$$46$$++) {
    if($grouping_headers$$4$$ = $groupings_headersContainer$$1$$[$i$$46$$], $headerLevel_isHeader$$2_newDir$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($grouping_headers$$4$$, $className$$16$$)) {
      $headerLevel_isHeader$$2_newDir$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellLevel$$)($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $grouping_headers$$4$$), $headerDepth$$3_j$$12$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $grouping_headers$$4$$, "depth"), $headerLevel_isHeader$$2_newDir$$ <= $level$$33$$ && $level$$33$$ < $headerLevel_isHeader$$2_newDir$$ + $headerDepth$$3_j$$12$$ ? "column" === $axis$$39$$ ? 
      ($headerLevel_isHeader$$2_newDir$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($grouping_headers$$4$$) + $dimensionChange$$1$$, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($grouping_headers$$4$$, $headerLevel_isHeader$$2_newDir$$)) : ($headerLevel_isHeader$$2_newDir$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($grouping_headers$$4$$) + $dimensionChange$$1$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($grouping_headers$$4$$, $headerLevel_isHeader$$2_newDir$$)) : 
      $headerLevel_isHeader$$2_newDir$$ > $level$$33$$ && ($headerLevel_isHeader$$2_newDir$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($grouping_headers$$4$$, $dir$$18$$) + $dimensionChange$$1$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($grouping_headers$$4$$, $headerLevel_isHeader$$2_newDir$$, $dir$$18$$))
    }else {
      if($headerLevel_isHeader$$2_newDir$$ = (0,D.$JSCompiler_StaticMethods__getAttribute$$)($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $grouping_headers$$4$$, "level"), $headerLevel_isHeader$$2_newDir$$ <= $level$$33$$) {
        (0,D.$JSCompiler_StaticMethods__shiftHeadersDirInContainer$$)($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $grouping_headers$$4$$, $dimensionChange$$1$$, $level$$33$$, $dir$$18$$, $className$$16$$, $axis$$39$$)
      }else {
        $grouping_headers$$4$$ = $grouping_headers$$4$$.getElementsByClassName($className$$16$$);
        for($headerDepth$$3_j$$12$$ = 0;$headerDepth$$3_j$$12$$ < $grouping_headers$$4$$.length;$headerDepth$$3_j$$12$$++) {
          $headerLevel_isHeader$$2_newDir$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($grouping_headers$$4$$[$headerDepth$$3_j$$12$$], $dir$$18$$) + $dimensionChange$$1$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($grouping_headers$$4$$[$headerDepth$$3_j$$12$$], $headerLevel_isHeader$$2_newDir$$, $dir$$18$$)
        }
      }
    }
  }
};

/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods__toggleSortIconDirection$$ = function $$JSCompiler_StaticMethods__toggleSortIconDirection$$$($JSCompiler_StaticMethods__toggleSortIconDirection$self$$, $header$$22_icon$$1$$, $direction$$6$$) {
  null != $header$$22_icon$$1$$ && ($header$$22_icon$$1$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$22_icon$$1$$), "descending" === $direction$$6$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$22_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")) ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$22_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$22_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending"))) : "ascending" === $direction$$6$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$22_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")) && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$22_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$22_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending"))))
};
D.$JSCompiler_StaticMethods__showOrHideSortIcon$$ = function $$JSCompiler_StaticMethods__showOrHideSortIcon$$$($JSCompiler_StaticMethods__showOrHideSortIcon$self$$, $header$$23$$, $hide$$) {
  var $icon$$2$$, $sorted$$2$$ = !1;
  null != $header$$23$$ && ($icon$$2$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$23$$), null != $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$ && ($sorted$$2$$ = $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$.key === (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__showOrHideSortIcon$self$$, $header$$23$$)), !1 === $hide$$ && !$sorted$$2$$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default"))) : !0 === $hide$$ && !$sorted$$2$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled"))))
};
D.$JSCompiler_StaticMethods__handleHeaderSort$$ = function $$JSCompiler_StaticMethods__handleHeaderSort$$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$80$$) {
  var $direction$$9$$, $header$$25_target$$52$$;
  (0,D.$JSCompiler_StaticMethods__databodyEmpty$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$) || ($header$$25_target$$52$$ = $event$$80$$.target, $header$$25_target$$52$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $header$$25_target$$52$$), null != $header$$25_target$$52$$ && (null == $direction$$9$$ && ($direction$$9$$ = null != $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$ && $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.key === 
  (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $header$$25_target$$52$$) ? "ascending" === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.direction ? "descending" : "ascending" : "ascending"), (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$80$$, $header$$25_target$$52$$, $direction$$9$$)))
};
D.$JSCompiler_StaticMethods__doHeaderSort$$ = function $$JSCompiler_StaticMethods__doHeaderSort$$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $event$$82_sortedHeader$$inline_1180$$, $header$$27_sortIcon$$inline_1181$$, $direction$$11$$) {
  var $key$$39$$, $axis$$42_criteria$$1$$;
  if(!0 != $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_isSorting$) {
    $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_delayedSort$ = null;
    $key$$39$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $header$$27_sortIcon$$inline_1181$$);
    $axis$$42_criteria$$1$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.$_getAxis$($header$$27_sortIcon$$inline_1181$$);
    var $oldSortedHeader$$inline_1176$$, $oldsortIcon$$inline_1177$$;
    null != $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ && ($oldSortedHeader$$inline_1176$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $oldSortedHeader$$inline_1176$$.removeAttribute($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_resources$.getMappedAttribute("sortDir")), $oldsortIcon$$inline_1177$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($oldSortedHeader$$inline_1176$$), 
    (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $oldSortedHeader$$inline_1176$$, "ascending"), "descending" === $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.direction && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_1177$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortdescending")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_1177$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortascending"))), 
    (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_1177$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_1177$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_1176$$.lastChild, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
    $header$$27_sortIcon$$inline_1181$$.setAttribute($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_resources$.getMappedAttribute("sortDir"), $direction$$11$$);
    $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ = {event:$event$$82_sortedHeader$$inline_1180$$, key:$key$$39$$, axis:$axis$$42_criteria$$1$$, direction:$direction$$11$$};
    (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $header$$27_sortIcon$$inline_1181$$, $direction$$11$$);
    null != $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ && ($event$$82_sortedHeader$$inline_1180$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $header$$27_sortIcon$$inline_1181$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($event$$82_sortedHeader$$inline_1180$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$27_sortIcon$$inline_1181$$, 
    $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$27_sortIcon$$inline_1181$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$27_sortIcon$$inline_1181$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("selected")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$82_sortedHeader$$inline_1180$$.lastChild, 
    $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
    null != $direction$$11$$ && (null != $key$$39$$ && null != $axis$$42_criteria$$1$$) && ($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_isSorting$ = !0, (0,D.$JSCompiler_StaticMethods_showStatusText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$), $axis$$42_criteria$$1$$ = {axis:$axis$$42_criteria$$1$$, key:$key$$39$$, direction:$direction$$11$$}, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_dataSource$.sort($axis$$42_criteria$$1$$, {success:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortSuccess$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$), 
    error:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortError$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$)}));
    (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, "ascending" === $direction$$11$$ ? "accessibleSortAscending" : "accessibleSortDescending", {id:$key$$39$$})
  }else {
    $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_delayedSort$ = {event:$event$$82_sortedHeader$$inline_1180$$, header:$header$$27_sortIcon$$inline_1181$$, direction:$direction$$11$$}
  }
};
D.$DvtDataGrid$$.prototype.$_handleSortError$ = function $$DvtDataGrid$$$$$_handleSortError$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this)
};
D.$DvtDataGrid$$.prototype.$_getAxis$ = function $$DvtDataGrid$$$$$_getAxis$$($header$$28$$) {
  var $columnHeaderCellClassName$$, $rowHeaderCellClassName$$;
  $columnHeaderCellClassName$$ = this.getMappedStyle("colheadercell");
  $rowHeaderCellClassName$$ = this.getMappedStyle("rowheadercell");
  return(0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$28$$, $columnHeaderCellClassName$$) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$28$$, $rowHeaderCellClassName$$) ? "row" : null
};
D.$DvtDataGrid$$.prototype.$_handleSortSuccess$ = function $$DvtDataGrid$$$$$_handleSortSuccess$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  (0,D.$JSCompiler_StaticMethods__isDatabodyCellActive$$)(this) ? (0,D.$JSCompiler_StaticMethods__indexes$$)(this, {row:this.$m_active$.keys.row, column:this.$m_active$.keys.column}, this.$_handlePreSortScrolling$) : (0,D.$JSCompiler_StaticMethods__fetchForSort$$)(this, this.$m_startRow$, this.$m_endRow$ - this.$m_startRow$ + 1, !1)
};
D.$DvtDataGrid$$.prototype.$_handlePreSortScrolling$ = function $$DvtDataGrid$$$$$_handlePreSortScrolling$$($cellTop_indexes$$17_startRow$$6$$) {
  var $cellBottom_startRowPixel$$4$$, $isHighWatermark$$;
  $cellTop_indexes$$17_startRow$$6$$ = (-1 === $cellTop_indexes$$17_startRow$$6$$.row ? 0 : $cellTop_indexes$$17_startRow$$6$$.row) * this.$m_avgRowHeight$;
  $cellBottom_startRowPixel$$4$$ = $cellTop_indexes$$17_startRow$$6$$ + this.$m_avgRowHeight$;
  $isHighWatermark$$ = (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this);
  this.$m_currentScrollTop$ <= $cellTop_indexes$$17_startRow$$6$$ && $cellBottom_startRowPixel$$4$$ <= this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$) || $isHighWatermark$$ ? (0,D.$JSCompiler_StaticMethods__fetchForSort$$)(this, this.$m_startRow$, this.$m_endRow$ - this.$m_startRow$ + 1, !1) : (this.$m_currentScrollTop$ = window.Math.min($cellTop_indexes$$17_startRow$$6$$, (0,D.$JSCompiler_StaticMethods__getMaxScrollHeight$$)(this)), $cellTop_indexes$$17_startRow$$6$$ = 
  window.Math.floor(this.$m_currentScrollTop$ / this.$m_avgRowHeight$), $cellBottom_startRowPixel$$4$$ = $cellTop_indexes$$17_startRow$$6$$ * this.$m_avgRowHeight$, this.$m_startRow$ = $cellTop_indexes$$17_startRow$$6$$, this.$m_endRow$ = -1, this.$m_startRowHeader$ = $cellTop_indexes$$17_startRow$$6$$, this.$m_endRowHeader$ = -1, this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = $cellBottom_startRowPixel$$4$$, (0,D.$JSCompiler_StaticMethods__fetchForSort$$)(this, 
  $cellTop_indexes$$17_startRow$$6$$, null, !0))
};
D.$JSCompiler_StaticMethods__fetchForSort$$ = function $$JSCompiler_StaticMethods__fetchForSort$$$($JSCompiler_StaticMethods__fetchForSort$self$$, $startRow$$7$$, $rowCount$$8$$, $scroll$$) {
  var $rowHeaderFragment$$2$$ = window.document.createDocumentFragment();
  $JSCompiler_StaticMethods__fetchForSort$self$$.fetchHeaders("row", $startRow$$7$$, $rowHeaderFragment$$2$$, $rowCount$$8$$, {success:$JSCompiler_StaticMethods__fetchForSort$self$$.$handleHeadersFetchSuccessForSort$.bind($JSCompiler_StaticMethods__fetchForSort$self$$), error:$JSCompiler_StaticMethods__fetchForSort$self$$.$handleCellsFetchError$});
  $JSCompiler_StaticMethods__fetchForSort$self$$.fetchCells($JSCompiler_StaticMethods__fetchForSort$self$$.$m_databody$, $JSCompiler_StaticMethods__fetchForSort$self$$.$m_scroller$, $startRow$$7$$, $JSCompiler_StaticMethods__fetchForSort$self$$.$m_startCol$, $rowCount$$8$$, $JSCompiler_StaticMethods__fetchForSort$self$$.$m_endCol$ - $JSCompiler_StaticMethods__fetchForSort$self$$.$m_startCol$ + 1, {success:$JSCompiler_StaticMethods__fetchForSort$self$$.$handleCellsFetchSuccessForSort$.bind($JSCompiler_StaticMethods__fetchForSort$self$$, 
  $rowHeaderFragment$$2$$, $scroll$$), error:$JSCompiler_StaticMethods__fetchForSort$self$$.$handleCellsFetchError$})
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccessForSort$$($headerSet$$13$$, $headerFragment_headerRange$$13$$, $rowInsert$$3$$) {
  var $axis$$43_c$$3$$, $start$$19$$, $headerCount$$4$$, $index$$88_returnVal$$12$$, $totalRowHeight$$6$$, $className$$17$$, $renderer$$9$$;
  $axis$$43_c$$3$$ = $headerFragment_headerRange$$13$$.axis;
  $start$$19$$ = $headerFragment_headerRange$$13$$.start;
  $headerFragment_headerRange$$13$$ = $headerFragment_headerRange$$13$$.header;
  $headerCount$$4$$ = $headerSet$$13$$.getCount();
  this.$m_fetching$[$axis$$43_c$$3$$] = !1;
  $axis$$43_c$$3$$ = $totalRowHeight$$6$$ = 0;
  $className$$17$$ = this.getMappedStyle("row") + " " + this.getMappedStyle("headercell") + " " + this.getMappedStyle("rowheadercell");
  for($renderer$$9$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "row");0 < $headerCount$$4$$ - $axis$$43_c$$3$$;) {
    $index$$88_returnVal$$12$$ = $start$$19$$ + $axis$$43_c$$3$$, $index$$88_returnVal$$12$$ = (0,D.$JSCompiler_StaticMethods_buildLevelHeaders$$)(this, $headerFragment_headerRange$$13$$, $index$$88_returnVal$$12$$, 0, 0, this.$m_startRowPixel$ + $totalRowHeight$$6$$, !0, $rowInsert$$3$$, $renderer$$9$$, $headerSet$$13$$, "row", $className$$17$$, this.$m_rowHeaderLevelCount$), $axis$$43_c$$3$$ += $index$$88_returnVal$$12$$.count, $totalRowHeight$$6$$ += $index$$88_returnVal$$12$$.totalHeight
  }
  this.$m_endRowHeader$ = this.$m_startRowHeader$ + $headerCount$$4$$ - 1;
  this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ + $totalRowHeight$$6$$;
  (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)(this)
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForSort$$($newRowHeaderElements$$, $rowKey$$inline_1192_scroll$$1$$, $cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$, $cellRange$$9_newRowElements$$) {
  var $i$$inline_1198_rowStart$$11$$, $oldTop$$inline_1194_rowCount$$9$$, $columnStart$$8_newElementSetClone$$inline_1203$$, $oldRowElements$$, $oldRowHeaderElements$$, $animate_rowsForAppend$$inline_1196$$;
  this.$m_fetching$.cells = !1;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  $i$$inline_1198_rowStart$$11$$ = $cellRange$$9_newRowElements$$[0].start;
  $oldTop$$inline_1194_rowCount$$9$$ = $cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$.getCount("row");
  $columnStart$$8_newElementSetClone$$inline_1203$$ = $cellRange$$9_newRowElements$$[1].start;
  $cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$.getCount("column");
  $cellRange$$9_newRowElements$$ = window.document.createDocumentFragment();
  $cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$ = (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $cellRange$$9_newRowElements$$, !0, this.$m_startRowPixel$, $i$$inline_1198_rowStart$$11$$, $oldTop$$inline_1194_rowCount$$9$$, $columnStart$$8_newElementSetClone$$inline_1203$$, !1, $cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$);
  this.$m_endRow$ = this.$m_startRowHeader$ + $oldTop$$inline_1194_rowCount$$9$$ - 1;
  this.$m_endRowPixel$ = this.$m_startRowPixel$ + $cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$.totalRowHeight;
  $oldRowElements$$ = this.$m_databody$.firstChild;
  $oldRowHeaderElements$$ = this.$m_rowHeader$.firstChild;
  !0 == $rowKey$$inline_1192_scroll$$1$$ && ($animate_rowsForAppend$$inline_1196$$ = (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? ((0,D.$JSCompiler_StaticMethods__disableTouchScrollAnimation$$)(this), this.scrollTo(this.$m_currentScrollLeft$, this.$m_currentScrollTop$)) : (this.$m_silentScroll$ = !0, this.$m_scroller$.scrollTop = this.$m_currentScrollTop$, (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this)));
  if(!(0,D.$JSCompiler_StaticMethods_supportsTransitions$$)() || 1 === $oldTop$$inline_1194_rowCount$$9$$ || 1 < this.$m_rowHeaderLevelCount$ && null != this.$m_rowHeaderLevelCount$ || !1 === $animate_rowsForAppend$$inline_1196$$) {
    (0,D.$JSCompiler_StaticMethods__signalTaskStart$$)(this), this.$_handleSortEnd$($cellRange$$9_newRowElements$$, $newRowHeaderElements$$)
  }else {
    var $self$$inline_1191$$, $animationInformation$$inline_1193$$, $newTop$$inline_1195_oldBottom$$inline_1201$$, $child$$inline_1199$$, $rowHeaderSupport$$inline_1200$$, $newBottom$$inline_1202$$, $newRowHeaderElementsClone$$inline_1204$$, $viewportTop$$inline_1205$$, $viewportBottom$$inline_1206$$, $lastAnimationElement$$inline_1207$$;
    $self$$inline_1191$$ = this;
    (0,D.$JSCompiler_StaticMethods__signalTaskStart$$)(this);
    $animate_rowsForAppend$$inline_1196$$ = [];
    $cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$ = [];
    $rowHeaderSupport$$inline_1200$$ = 1 < $newRowHeaderElements$$.childNodes.length ? !0 : !1;
    $viewportTop$$inline_1205$$ = this.$m_currentScrollTop$;
    $viewportBottom$$inline_1206$$ = $viewportTop$$inline_1205$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$);
    $columnStart$$8_newElementSetClone$$inline_1203$$ = $cellRange$$9_newRowElements$$.cloneNode(!0);
    $newRowHeaderElementsClone$$inline_1204$$ = $newRowHeaderElements$$ ? $newRowHeaderElements$$.cloneNode(!0) : null;
    $animationInformation$$inline_1193$$ = {};
    for($i$$inline_1198_rowStart$$11$$ = 0;$i$$inline_1198_rowStart$$11$$ < $oldRowElements$$.childNodes.length;$i$$inline_1198_rowStart$$11$$++) {
      $child$$inline_1199$$ = $oldRowElements$$.childNodes[$i$$inline_1198_rowStart$$11$$], $rowKey$$inline_1192_scroll$$1$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $child$$inline_1199$$), $oldTop$$inline_1194_rowCount$$9$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($child$$inline_1199$$, "top"), $newTop$$inline_1195_oldBottom$$inline_1201$$ = $oldTop$$inline_1194_rowCount$$9$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($child$$inline_1199$$), $newTop$$inline_1195_oldBottom$$inline_1201$$ = 
      $newTop$$inline_1195_oldBottom$$inline_1201$$ < $viewportTop$$inline_1205$$ || $oldTop$$inline_1194_rowCount$$9$$ > $viewportBottom$$inline_1206$$ ? $oldTop$$inline_1194_rowCount$$9$$ : $viewportBottom$$inline_1206$$, $animationInformation$$inline_1193$$[$rowKey$$inline_1192_scroll$$1$$] = {$oldTop$:$oldTop$$inline_1194_rowCount$$9$$, $newTop$:$newTop$$inline_1195_oldBottom$$inline_1201$$}
    }
    for($i$$inline_1198_rowStart$$11$$ = 0;$i$$inline_1198_rowStart$$11$$ < $cellRange$$9_newRowElements$$.childNodes.length;$i$$inline_1198_rowStart$$11$$++) {
      $child$$inline_1199$$ = $cellRange$$9_newRowElements$$.childNodes[$i$$inline_1198_rowStart$$11$$], $rowKey$$inline_1192_scroll$$1$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $child$$inline_1199$$), $newTop$$inline_1195_oldBottom$$inline_1201$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($child$$inline_1199$$, "top"), (0,D.$JSCompiler_StaticMethods__setKey$$)(this, $columnStart$$8_newElementSetClone$$inline_1203$$.childNodes[$i$$inline_1198_rowStart$$11$$], $rowKey$$inline_1192_scroll$$1$$), 
      (0,D.$JSCompiler_StaticMethods__setKey$$)(this, $newRowHeaderElementsClone$$inline_1204$$.childNodes[$i$$inline_1198_rowStart$$11$$], $rowKey$$inline_1192_scroll$$1$$), $animationInformation$$inline_1193$$.hasOwnProperty($rowKey$$inline_1192_scroll$$1$$) ? $animationInformation$$inline_1193$$[$rowKey$$inline_1192_scroll$$1$$].$newTop$ = $newTop$$inline_1195_oldBottom$$inline_1201$$ : ($oldTop$$inline_1194_rowCount$$9$$ = $viewportBottom$$inline_1206$$, $newBottom$$inline_1202$$ = $newTop$$inline_1195_oldBottom$$inline_1201$$ + 
      (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($child$$inline_1199$$), $animationInformation$$inline_1193$$[$rowKey$$inline_1192_scroll$$1$$] = {$oldTop$:$oldTop$$inline_1194_rowCount$$9$$, $newTop$:$newTop$$inline_1195_oldBottom$$inline_1201$$}, $newBottom$$inline_1202$$ >= $viewportTop$$inline_1205$$ && $newTop$$inline_1195_oldBottom$$inline_1201$$ < $viewportBottom$$inline_1206$$ && ($child$$inline_1199$$ = $columnStart$$8_newElementSetClone$$inline_1203$$.childNodes[$i$$inline_1198_rowStart$$11$$], 
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($child$$inline_1199$$, $animationInformation$$inline_1193$$[$rowKey$$inline_1192_scroll$$1$$].$oldTop$, "top"), $animate_rowsForAppend$$inline_1196$$.push($child$$inline_1199$$), $rowHeaderSupport$$inline_1200$$ && ($child$$inline_1199$$ = $newRowHeaderElementsClone$$inline_1204$$.childNodes[$i$$inline_1198_rowStart$$11$$], (0,D.$JSCompiler_StaticMethods_setElementDir$$)($child$$inline_1199$$, $animationInformation$$inline_1193$$[$rowKey$$inline_1192_scroll$$1$$].$oldTop$, 
      "top"), $cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$.push($child$$inline_1199$$))))
    }
    for($i$$inline_1198_rowStart$$11$$ = 0;$i$$inline_1198_rowStart$$11$$ < $animate_rowsForAppend$$inline_1196$$.length;$i$$inline_1198_rowStart$$11$$++) {
      $oldRowElements$$.appendChild($animate_rowsForAppend$$inline_1196$$[$i$$inline_1198_rowStart$$11$$]), $rowHeaderSupport$$inline_1200$$ && $oldRowHeaderElements$$.appendChild($cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$[$i$$inline_1198_rowStart$$11$$])
    }
    for($i$$inline_1198_rowStart$$11$$ = $oldRowElements$$.childNodes.length - 1;0 <= $i$$inline_1198_rowStart$$11$$;$i$$inline_1198_rowStart$$11$$--) {
      if($child$$inline_1199$$ = $oldRowElements$$.childNodes[$i$$inline_1198_rowStart$$11$$], $rowKey$$inline_1192_scroll$$1$$ = (0,D.$JSCompiler_StaticMethods__getKey$$)(this, $child$$inline_1199$$), 0 != $animationInformation$$inline_1193$$[$rowKey$$inline_1192_scroll$$1$$].$newTop$ - $animationInformation$$inline_1193$$[$rowKey$$inline_1192_scroll$$1$$].$oldTop$) {
        $lastAnimationElement$$inline_1207$$ = $child$$inline_1199$$;
        break
      }
    }
    null != $lastAnimationElement$$inline_1207$$ ? ($lastAnimationElement$$inline_1207$$.addEventListener("transitionend", this.$_handleSortEnd$.bind(this, $cellRange$$9_newRowElements$$, $newRowHeaderElements$$), !1), (0,window.setTimeout)(function() {
      var $newRowHeaderElements$$, $rowKey$$inline_1192_scroll$$1$$, $cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$;
      for($cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$ = 0;$cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$ < $oldRowElements$$.childNodes.length;$cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$++) {
        $rowKey$$inline_1192_scroll$$1$$ = 0 * $cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$ + "ms", $child$$inline_1199$$ = $oldRowElements$$.childNodes[$cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$], $newRowHeaderElements$$ = $animationInformation$$inline_1193$$[(0,D.$JSCompiler_StaticMethods__getKey$$)($self$$inline_1191$$, $child$$inline_1199$$)], $newRowHeaderElements$$ = $newRowHeaderElements$$.$newTop$ - $newRowHeaderElements$$.$oldTop$, 0 != $newRowHeaderElements$$ && 
        ((0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($child$$inline_1199$$, "400ms", $rowKey$$inline_1192_scroll$$1$$, "ease-in", 0, $newRowHeaderElements$$), $rowHeaderSupport$$inline_1200$$ && (0,D.$JSCompiler_StaticMethods_addTransformMoveStyle$$)($oldRowHeaderElements$$.childNodes[$cellSet$$13_returnVal$$13_rowHeadersForAppend$$inline_1197$$], "400ms", $rowKey$$inline_1192_scroll$$1$$, "ease-in", 0, $newRowHeaderElements$$))
      }
    }, 0)) : this.$_handleSortEnd$($cellRange$$9_newRowElements$$, $newRowHeaderElements$$)
  }
  (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)(this)
};
D.$DvtDataGrid$$.prototype.$_handleSortEnd$ = function $$DvtDataGrid$$$$$_handleSortEnd$$($newRowElements$$1$$, $newRowHeaderElements$$1$$) {
  var $cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$;
  1 < $newRowHeaderElements$$1$$.childNodes.length && ($cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$ = this.$m_rowHeader$.firstChild, this.$m_utils$.empty($cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$), $cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$.appendChild($newRowHeaderElements$$1$$));
  $cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$ = this.$m_databody$.firstChild;
  this.$m_utils$.empty($cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$);
  $cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$.appendChild($newRowElements$$1$$);
  var $columnHeader$$inline_1215$$;
  null != this.$m_active$ && ("cell" == this.$m_active$.type ? ($cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, this.$m_active$.keys.row), $columnHeader$$inline_1215$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)(this, this.$m_active$.keys.column), null != $cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$ && null != $columnHeader$$inline_1215$$ ? ($cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$ = 
  this.createIndex(this.$getRowIndex$($cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$), (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)(this, $columnHeader$$inline_1215$$)), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$) : 
  this.$_setActiveByIndex$($cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$)) : ((0,D.$JSCompiler_StaticMethods__setActive$$)(this, null, null, !0), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)(this))) : "row" == this.$m_active$.axis && ($cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)(this, this.$m_active$.key), 
  null != $cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$ ? (0,D.$JSCompiler_StaticMethods__setActive$$)(this, $cellIndex$$inline_1216_databodyContent$$18_headerContent$$3_row$$inline_1214$$) : (0,D.$JSCompiler_StaticMethods__setActive$$)(this, null)));
  this.$m_isSorting$ = !1;
  this.fireEvent("sort", {event:this.$m_sortInfo$.event, ui:{header:this.$m_sortInfo$.key, direction:this.$m_sortInfo$.direction}});
  null != this.$m_delayedSort$ ? (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, this.$m_delayedSort$.event, this.$m_delayedSort$.header, this.$m_delayedSort$.direction) : (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
  (0,D.$JSCompiler_StaticMethods__signalTaskEnd$$)(this)
};
D.$JSCompiler_StaticMethods__getSortIcon$$ = function $$JSCompiler_StaticMethods__getSortIcon$$$($header$$29$$) {
  return $header$$29$$.lastChild.firstChild
};

return D.DvtDataGrid;
});