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

(function($dvt$$1$$) {
  function $DvtAxisObjPeer$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$, $DvtAxisAutomation$$, $DvtAxisRenderer$$) {
    this.Init($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$, $DvtAxisAutomation$$, $DvtAxisRenderer$$);
  }
  function $DvtAxisKeyboardHandler$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    this.Init($dvt$$1$$, $DvtAxisObjPeer$$);
  }
  function $DvtAxisEventManager$$($dvt$$1$$) {
    this.Init($dvt$$1$$.$getCtx$(), $dvt$$1$$.$processEvent$, $dvt$$1$$);
    this.$_axis$ = $dvt$$1$$;
  }
  function $DvtAxisDefaults$$() {
    this.Init({skyros:$DvtAxisDefaults$$.$VERSION_1$, alta:$DvtAxisDefaults$$.$SKIN_ALTA$, next:$DvtAxisDefaults$$.$SKIN_NEXT$});
  }
  function $DvtAxisAutomation$$($dvt$$1$$) {
    this.$_axis$ = $dvt$$1$$;
    this.$_options$ = this.$_axis$.$getOptions$();
    this.$_axisInfo$ = this.$_axis$.$getInfo$();
  }
  $dvt$$1$$.$Axis$ = function $$dvt$$1$$$$Axis$$() {
  };
  $dvt$$1$$.$Obj$.$createSubclass$($dvt$$1$$.$Axis$, $dvt$$1$$.$BaseComponent$);
  $dvt$$1$$.$Axis$.newInstance = function $$dvt$$1$$$$Axis$$newInstance$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = new $dvt$$1$$.$Axis$;
    $DvtAxisDefaults$$.Init($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    return $DvtAxisDefaults$$;
  };
  $dvt$$1$$.$Axis$.$getDefaults$ = function $$dvt$$1$$$$Axis$$$getDefaults$$($dvt$$1$$) {
    return (new $DvtAxisDefaults$$).$getDefaults$($dvt$$1$$);
  };
  $dvt$$1$$.$Axis$.prototype.Init = function $$dvt$$1$$$$Axis$$$Init$($DvtAxisObjPeer$$, $DvtAxisConstants$$, $DvtAxisAutomation$$) {
    $dvt$$1$$.$Axis$.$superclass$.Init.call(this, $DvtAxisObjPeer$$, $DvtAxisConstants$$, $DvtAxisAutomation$$);
    this.$Defaults$ = new $DvtAxisDefaults$$;
    this.$EventManager$ = new $DvtAxisEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    $dvt$$1$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(new $DvtAxisKeyboardHandler$$(this.$EventManager$, this));
    this.$_bounds$ = null;
  };
  $dvt$$1$$.$Axis$.$MINIMUM_AXIS_BUFFER$ = 10;
  $dvt$$1$$.$Axis$.prototype.$SetOptions$ = function $$dvt$$1$$$$Axis$$$$SetOptions$$($dvt$$1$$) {
    $dvt$$1$$ ? this.$Options$ = "off" == $dvt$$1$$.rendered ? $dvt$$1$$ : this.$Defaults$.$calcOptions$($dvt$$1$$) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
  };
  $dvt$$1$$.$Axis$.prototype.$getPreferredSize$ = function $$dvt$$1$$$$Axis$$$$getPreferredSize$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    this.$SetOptions$($dvt$$1$$);
    return $DvtAxisRenderer$$.$getPreferredSize$(this, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$);
  };
  $dvt$$1$$.$Axis$.prototype.$render$ = function $$dvt$$1$$$$Axis$$$$render$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$) {
    this.$_cache$.$clearCache$();
    this.$SetOptions$($DvtAxisObjPeer$$);
    this.$_navigablePeers$ = [];
    this.$Width$ = $DvtAxisKeyboardHandler$$;
    this.$Height$ = $DvtAxisEventManager$$;
    this.$removeChildren$();
    $DvtAxisDefaults$$ || ($DvtAxisDefaults$$ = 0);
    $DvtAxisConstants$$ || ($DvtAxisConstants$$ = 0);
    $DvtAxisRenderer$$.$render$(this, new $dvt$$1$$.$Rectangle$($DvtAxisDefaults$$, $DvtAxisConstants$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$));
  };
  $dvt$$1$$.$Axis$.prototype.$__registerObject$ = function $$dvt$$1$$$$Axis$$$$__registerObject$$($dvt$$1$$) {
    (null != $dvt$$1$$.$getDatatip$() || null != $dvt$$1$$.$getAction$() || $dvt$$1$$.$isDrillable$()) && this.$_navigablePeers$.push($dvt$$1$$);
  };
  $dvt$$1$$.$Axis$.prototype.$isNavigable$ = function $$dvt$$1$$$$Axis$$$$isNavigable$$() {
    return 0 < this.$_navigablePeers$.length;
  };
  $dvt$$1$$.$Axis$.prototype.$getKeyboardFocus$ = function $$dvt$$1$$$$Axis$$$$getKeyboardFocus$$() {
    return null != this.$EventManager$ ? this.$EventManager$.$getFocus$() : null;
  };
  $dvt$$1$$.$Axis$.prototype.$setKeyboardFocus$ = function $$dvt$$1$$$$Axis$$$$setKeyboardFocus$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if (null != this.$EventManager$) {
      for (var $DvtAxisEventManager$$ = this.$_navigablePeers$, $DvtAxisDefaults$$ = $DvtAxisObjPeer$$.getId(), $DvtAxisConstants$$ = !1, $DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ < $DvtAxisEventManager$$.length;$DvtAxisAutomation$$++) {
        var $DvtAxisRenderer$$ = $DvtAxisEventManager$$[$DvtAxisAutomation$$].getId();
        if ($DvtAxisDefaults$$ instanceof Array && $DvtAxisRenderer$$ instanceof Array && $dvt$$1$$.$ArrayUtils$.$equals$($DvtAxisDefaults$$, $DvtAxisRenderer$$) || $DvtAxisDefaults$$ === $DvtAxisRenderer$$) {
          this.$EventManager$.$setFocusObj$($DvtAxisEventManager$$[$DvtAxisAutomation$$]);
          $DvtAxisConstants$$ = !0;
          $DvtAxisKeyboardHandler$$ && $DvtAxisEventManager$$[$DvtAxisAutomation$$].$showKeyboardFocusEffect$();
          break;
        }
      }
      $DvtAxisConstants$$ || this.$EventManager$.$setFocusObj$(this.$EventManager$.$KeyboardHandler$.$getDefaultNavigable$($DvtAxisEventManager$$));
      if ($DvtAxisEventManager$$ = this.$getKeyboardFocus$()) {
        $DvtAxisDefaults$$ = $DvtAxisEventManager$$.$getDisplayable$(), $DvtAxisDefaults$$.$setAriaProperty$("label", $DvtAxisEventManager$$.$getAriaLabel$()), this.$getCtx$().$setActiveElement$($DvtAxisDefaults$$);
      }
    }
  };
  $dvt$$1$$.$Axis$.prototype.$processEvent$ = function $$dvt$$1$$$$Axis$$$$processEvent$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    this === $DvtAxisObjPeer$$ && this.dispatchEvent($dvt$$1$$);
  };
  $dvt$$1$$.$Axis$.prototype.$getInfo$ = function $$dvt$$1$$$$Axis$$$$getInfo$$() {
    return this.$Info$;
  };
  $dvt$$1$$.$Axis$.prototype.$__setInfo$ = function $$dvt$$1$$$$Axis$$$$__setInfo$$($dvt$$1$$) {
    this.$Info$ = $dvt$$1$$;
  };
  $dvt$$1$$.$Axis$.prototype.getWidth = function $$dvt$$1$$$$Axis$$$getWidth$() {
    return this.$Width$;
  };
  $dvt$$1$$.$Axis$.prototype.getHeight = function $$dvt$$1$$$$Axis$$$getHeight$() {
    return this.$Height$;
  };
  $dvt$$1$$.$Axis$.prototype.$__setBounds$ = function $$dvt$$1$$$$Axis$$$$__setBounds$$($dvt$$1$$) {
    this.$_bounds$ = $dvt$$1$$;
  };
  $dvt$$1$$.$Axis$.prototype.$getAutomation$ = function $$dvt$$1$$$$Axis$$$$getAutomation$$() {
    return new $DvtAxisAutomation$$(this);
  };
  var $DvtAxisConstants$$ = {};
  $dvt$$1$$.$Obj$.$createSubclass$($DvtAxisConstants$$, $dvt$$1$$.$Obj$);
  $DvtAxisConstants$$.$TICK_LABEL$ = "tickLabel";
  $DvtAxisConstants$$.$TITLE$ = "title";
  $dvt$$1$$.$Obj$.$createSubclass$($DvtAxisAutomation$$, $dvt$$1$$.$Automation$);
  $DvtAxisAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtAxisAutomation$$$$$GetSubIdForDomElement$$($DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = this.$_axis$.$getEventManager$().$GetLogicalObject$($DvtAxisObjPeer$$);
    if ($DvtAxisKeyboardHandler$$ && $DvtAxisKeyboardHandler$$ instanceof $dvt$$1$$.$SimpleObjPeer$) {
      if ($DvtAxisKeyboardHandler$$.$_params$.type == $DvtAxisConstants$$.$TITLE$) {
        return "title";
      }
      if (this.$_options$.groups) {
        $DvtAxisObjPeer$$ = $DvtAxisKeyboardHandler$$.$_params$.level;
        for (var $DvtAxisKeyboardHandler$$ = this.$_axisInfo$.$getStartIndex$($DvtAxisKeyboardHandler$$.$_params$.index, $DvtAxisObjPeer$$), $DvtAxisEventManager$$ = "", $DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ <= $DvtAxisObjPeer$$;$DvtAxisDefaults$$++) {
          for (var $DvtAxisAutomation$$ = this.$_axisInfo$.$getLabels$(this.$_axis$.$getCtx$(), $DvtAxisDefaults$$), $DvtAxisRenderer$$ = 0;$DvtAxisRenderer$$ < $DvtAxisAutomation$$.length;$DvtAxisRenderer$$++) {
            var $index$$101$$ = this.$_axisInfo$.$getLabelIndex$($DvtAxisAutomation$$[$DvtAxisRenderer$$]);
            this.$_axisInfo$.$getStartIndex$($index$$101$$, $DvtAxisDefaults$$) <= $DvtAxisKeyboardHandler$$ && this.$_axisInfo$.$getEndIndex$($index$$101$$, $DvtAxisDefaults$$) >= $DvtAxisKeyboardHandler$$ && ($DvtAxisEventManager$$ += "[" + this.$_axisInfo$.$getPosition$($index$$101$$, $DvtAxisDefaults$$) + "]");
          }
        }
        if (0 < $DvtAxisEventManager$$.length) {
          return "item" + $DvtAxisEventManager$$;
        }
      }
    }
    return null;
  };
  $DvtAxisAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtAxisAutomation$$$$$getDomElementForSubId$$($DvtAxisObjPeer$$) {
    if ("title" == $DvtAxisObjPeer$$) {
      if ($DvtAxisObjPeer$$ = this.$_axisInfo$.$getTitle$()) {
        return $DvtAxisObjPeer$$.$getElem$();
      }
    } else {
      if (this.$_axisInfo$ instanceof $dvt$$1$$.$GroupAxisInfo$) {
        for (var $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$.split("[").length - 1 - 1, $DvtAxisEventManager$$ = 0, $DvtAxisDefaults$$ = 0, $DvtAxisConstants$$ = 0;$DvtAxisConstants$$ <= $DvtAxisKeyboardHandler$$;$DvtAxisConstants$$++) {
          var $DvtAxisAutomation$$ = $DvtAxisObjPeer$$.indexOf("]"), $DvtAxisRenderer$$ = $DvtAxisObjPeer$$.substring($DvtAxisObjPeer$$.indexOf("[") + 1, $DvtAxisAutomation$$);
          $DvtAxisObjPeer$$ = $DvtAxisObjPeer$$.substring($DvtAxisAutomation$$ + 1);
          for (var $DvtAxisAutomation$$ = this.$_axisInfo$.$getLabels$(this.$_axis$.$getCtx$(), $DvtAxisConstants$$), $index$$102$$, $i$$216_j$$30$$ = 0;$i$$216_j$$30$$ < $DvtAxisAutomation$$.length;$i$$216_j$$30$$++) {
            if ($index$$102$$ = this.$_axisInfo$.$getLabelIndex$($DvtAxisAutomation$$[$i$$216_j$$30$$]), this.$_axisInfo$.$getStartIndex$($index$$102$$, $DvtAxisConstants$$) == $DvtAxisDefaults$$) {
              $DvtAxisEventManager$$ = $index$$102$$;
              break;
            }
          }
          for ($i$$216_j$$30$$ = $DvtAxisEventManager$$;$i$$216_j$$30$$ < $DvtAxisAutomation$$.length;$i$$216_j$$30$$++) {
            if ($index$$102$$ = this.$_axisInfo$.$getLabelIndex$($DvtAxisAutomation$$[$i$$216_j$$30$$]), this.$_axisInfo$.$getPosition$($index$$102$$, $DvtAxisConstants$$) == $DvtAxisRenderer$$) {
              if (0 == $DvtAxisObjPeer$$.length) {
                return $DvtAxisAutomation$$[$i$$216_j$$30$$].$getElem$();
              }
              $DvtAxisDefaults$$ = this.$_axisInfo$.$getStartIndex$($index$$102$$, $DvtAxisConstants$$);
              break;
            }
          }
        }
      }
    }
    return null;
  };
  $dvt$$1$$.$Obj$.$createSubclass$($DvtAxisDefaults$$, $dvt$$1$$.$BaseComponentDefaults$);
  $DvtAxisDefaults$$.$SKIN_NEXT$ = {skin:$dvt$$1$$.$CSSStyle$.$SKIN_NEXT$, layout:{titleGap:6}};
  $DvtAxisDefaults$$.$SKIN_ALTA$ = {axisLine:{lineColor:"#9E9E9E"}, majorTick:{lineColor:"rgba(196,206,215,0.4)", baselineColor:"auto"}, minorTick:{lineColor:"rgba(196,206,215,0.2)"}, tickLabel:{style:new $dvt$$1$$.$CSSStyle$($dvt$$1$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$ + "white-space:normal;")}, titleStyle:new $dvt$$1$$.$CSSStyle$($dvt$$1$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$)};
  $DvtAxisDefaults$$.$VERSION_1$ = {position:null, baselineScaling:"zero", axisLine:{lineColor:"#8A8DAC", lineWidth:1, rendered:"on"}, majorTick:{lineColor:"rgba(138,141,172,0.4)", lineWidth:1, rendered:"auto", lineStyle:"solid"}, minorTick:{lineColor:"rgba(138,141,172,0.20)", lineWidth:1, rendered:"off", lineStyle:"solid"}, tickLabel:{scaling:"auto", style:new $dvt$$1$$.$CSSStyle$($dvt$$1$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 11px; color: #333333;"), rotation:"auto", rendered:"on"}, 
  titleStyle:new $dvt$$1$$.$CSSStyle$($dvt$$1$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 11px; color: #737373;"), startGroupOffset:0, endGroupOffset:0, layout:{titleGap:4, radialLabelGap:5, insideLabelGapWidth:4, insideLabelGapHeight:2, hierarchicalLabelGapHeight:8, hierarchicalLabelGapWidth:15}, _locale:"en-us"};
  $DvtAxisDefaults$$.$getGapSize$ = function $$DvtAxisDefaults$$$$getGapSize$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    $DvtAxisObjPeer$$ = Math.min($dvt$$1$$.$TextUtils$.$getTextStringHeight$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$.tickLabel.style) / 14, 1);
    return Math.ceil($DvtAxisEventManager$$ * $DvtAxisObjPeer$$);
  };
  $dvt$$1$$.$Obj$.$createSubclass$($DvtAxisEventManager$$, $dvt$$1$$.$EventManager$);
  $DvtAxisEventManager$$.$getUIParams$ = function $$DvtAxisEventManager$$$$getUIParams$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    return {type:$dvt$$1$$, id:$DvtAxisObjPeer$$, index:$DvtAxisKeyboardHandler$$, level:$DvtAxisEventManager$$};
  };
  $DvtAxisEventManager$$.prototype.$getComponent$ = function $$DvtAxisEventManager$$$$$getComponent$$() {
    return this.$_axis$;
  };
  $DvtAxisEventManager$$.prototype.$OnClick$ = function $$DvtAxisEventManager$$$$$OnClick$$($dvt$$1$$) {
    $DvtAxisEventManager$$.$superclass$.$OnClick$.call(this, $dvt$$1$$);
    var $DvtAxisObjPeer$$ = this.$GetLogicalObject$($dvt$$1$$.target);
    $DvtAxisObjPeer$$ && this.$processActionEvent$($DvtAxisObjPeer$$) && $dvt$$1$$.stopPropagation();
  };
  $DvtAxisEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtAxisEventManager$$$$$HandleTouchClickInternal$$($dvt$$1$$) {
    var $DvtAxisObjPeer$$ = this.$GetLogicalObject$($dvt$$1$$.target);
    $DvtAxisObjPeer$$ && ($dvt$$1$$ = $dvt$$1$$.$touchEvent$, this.$processActionEvent$($DvtAxisObjPeer$$) && $dvt$$1$$ && $dvt$$1$$.preventDefault());
  };
  $DvtAxisEventManager$$.prototype.$processActionEvent$ = function $$DvtAxisEventManager$$$$$processActionEvent$$($DvtAxisKeyboardHandler$$) {
    return $DvtAxisKeyboardHandler$$ && $DvtAxisKeyboardHandler$$.$getAction$ && $DvtAxisKeyboardHandler$$.$getAction$() ? (this.$FireEvent$($dvt$$1$$.$EventFactory$.$newActionEvent$("action", $DvtAxisKeyboardHandler$$.$getAction$(), $DvtAxisKeyboardHandler$$.getId()), this.$_axis$), !0) : $DvtAxisKeyboardHandler$$ instanceof $DvtAxisObjPeer$$ && $DvtAxisKeyboardHandler$$.$isDrillable$() ? (this.$FireEvent$($dvt$$1$$.$EventFactory$.$newChartDrillEvent$($DvtAxisKeyboardHandler$$.getId(), null, $DvtAxisKeyboardHandler$$.$getGroup$()), 
    this.$_axis$), !0) : !1;
  };
  $DvtAxisEventManager$$.prototype.$isDndSupported$ = function $$DvtAxisEventManager$$$$$isDndSupported$$() {
    return !0;
  };
  $DvtAxisEventManager$$.prototype.$GetDragSourceType$ = function $$DvtAxisEventManager$$$$$GetDragSourceType$$() {
    var $dvt$$1$$ = this.$DragSource$.$_dragObj$;
    return $dvt$$1$$ instanceof $DvtAxisObjPeer$$ && null != $dvt$$1$$.$getGroup$() ? "groups" : null;
  };
  $DvtAxisEventManager$$.prototype.$GetDragDataContexts$ = function $$DvtAxisEventManager$$$$$GetDragDataContexts$$() {
    var $dvt$$1$$ = this.$DragSource$.$_dragObj$;
    return $dvt$$1$$ instanceof $DvtAxisObjPeer$$ ? [{id:$dvt$$1$$.getId(), group:$dvt$$1$$.$getGroup$(), label:$dvt$$1$$.$getLabel$().$getTextString$()}] : [];
  };
  $dvt$$1$$.$Obj$.$createSubclass$($DvtAxisKeyboardHandler$$, $dvt$$1$$.$KeyboardHandler$);
  $DvtAxisKeyboardHandler$$.prototype.Init = function $$DvtAxisKeyboardHandler$$$$Init$($dvt$$1$$, $DvtAxisObjPeer$$) {
    $DvtAxisKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$1$$);
    this.$_axis$ = $DvtAxisObjPeer$$;
  };
  $DvtAxisKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtAxisKeyboardHandler$$$$$processKeyDown$$($DvtAxisObjPeer$$) {
    var $DvtAxisEventManager$$ = $DvtAxisObjPeer$$.keyCode, $DvtAxisDefaults$$ = this.$_eventManager$.$getFocus$(), $DvtAxisConstants$$ = null;
    $DvtAxisEventManager$$ == $dvt$$1$$.KeyboardEvent.$TAB$ ? ($DvtAxisDefaults$$ && ($dvt$$1$$.$EventManager$.$consumeEvent$($DvtAxisObjPeer$$), $DvtAxisConstants$$ = $DvtAxisDefaults$$), $DvtAxisEventManager$$ = this.$_axis$.$_navigablePeers$, 0 < $DvtAxisEventManager$$.length && ($dvt$$1$$.$EventManager$.$consumeEvent$($DvtAxisObjPeer$$), $DvtAxisConstants$$ = this.$getDefaultNavigable$($DvtAxisEventManager$$))) : $DvtAxisEventManager$$ == $dvt$$1$$.KeyboardEvent.$ENTER$ ? $DvtAxisDefaults$$ && 
    (this.$_eventManager$.$processActionEvent$($DvtAxisDefaults$$), $dvt$$1$$.$EventManager$.$consumeEvent$($DvtAxisObjPeer$$)) : $DvtAxisConstants$$ = $DvtAxisKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtAxisObjPeer$$);
    return $DvtAxisConstants$$;
  };
  var $DvtAxisRenderer$$ = {};
  $dvt$$1$$.$Obj$.$createSubclass$($DvtAxisRenderer$$, $dvt$$1$$.$Obj$);
  $DvtAxisRenderer$$.$getPreferredSize$ = function $$DvtAxisRenderer$$$$getPreferredSize$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = $DvtAxisRenderer$$.$_createAxisInfo$($DvtAxisObjPeer$$, new $dvt$$1$$.$Rectangle$(0, 0, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$)), $DvtAxisConstants$$ = $DvtAxisObjPeer$$.$getCtx$(), $DvtAxisAutomation$$ = $DvtAxisObjPeer$$.$getOptions$(), $size$$13$$ = 0, $bHoriz$$ = "top" == $DvtAxisAutomation$$.position || "bottom" == $DvtAxisAutomation$$.position;
    if ("off" == $DvtAxisAutomation$$.rendered || 0 >= $DvtAxisKeyboardHandler$$ || 0 >= $DvtAxisEventManager$$) {
      return $bHoriz$$ ? new $dvt$$1$$.$Dimension$($DvtAxisKeyboardHandler$$, 0) : new $dvt$$1$$.$Dimension$(0, $DvtAxisEventManager$$);
    }
    $DvtAxisAutomation$$.title && ($size$$13$$ = $dvt$$1$$.$TextUtils$.$getTextStringHeight$($DvtAxisConstants$$, $DvtAxisAutomation$$.titleStyle) + $DvtAxisRenderer$$.$_getTitleGap$($DvtAxisObjPeer$$));
    "on" == $DvtAxisAutomation$$.tickLabel.rendered && "inside" != $DvtAxisAutomation$$.tickLabel.position && ($bHoriz$$ ? ($DvtAxisAutomation$$ = $dvt$$1$$.$TextUtils$.$getTextStringHeight$($DvtAxisConstants$$, $DvtAxisAutomation$$.tickLabel.style), $DvtAxisDefaults$$ instanceof $dvt$$1$$.$DataAxisInfo$ ? $size$$13$$ += $DvtAxisAutomation$$ : $DvtAxisDefaults$$ instanceof $dvt$$1$$.$TimeAxisInfo$ ? $size$$13$$ += null != $DvtAxisDefaults$$.$getLabels$($DvtAxisConstants$$, 1) ? 2 * $DvtAxisAutomation$$ : 
    $DvtAxisAutomation$$ : $DvtAxisDefaults$$ instanceof $dvt$$1$$.$GroupAxisInfo$ && ($size$$13$$ = $DvtAxisRenderer$$.$_getGroupAxisPreferredSize$($DvtAxisObjPeer$$, $DvtAxisDefaults$$, $size$$13$$, $DvtAxisEventManager$$, $bHoriz$$))) : $DvtAxisDefaults$$ instanceof $dvt$$1$$.$DataAxisInfo$ ? $size$$13$$ += $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($DvtAxisDefaults$$.$getLabels$($DvtAxisConstants$$)).$w$ : $DvtAxisDefaults$$ instanceof $dvt$$1$$.$TimeAxisInfo$ ? ($DvtAxisObjPeer$$ = $DvtAxisDefaults$$.$getLabels$($DvtAxisConstants$$), 
    $DvtAxisObjPeer$$ = $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($DvtAxisObjPeer$$).$w$, $DvtAxisDefaults$$ = $DvtAxisDefaults$$.$getLabels$($DvtAxisConstants$$, 1), $DvtAxisDefaults$$ = null != $DvtAxisDefaults$$ ? $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($DvtAxisDefaults$$).$w$ : 0, $size$$13$$ += Math.max($DvtAxisObjPeer$$, $DvtAxisDefaults$$)) : $DvtAxisDefaults$$ instanceof $dvt$$1$$.$GroupAxisInfo$ && ($size$$13$$ = $DvtAxisRenderer$$.$_getGroupAxisPreferredSize$($DvtAxisObjPeer$$, 
    $DvtAxisDefaults$$, $size$$13$$, $DvtAxisKeyboardHandler$$, $bHoriz$$)));
    return $bHoriz$$ ? new $dvt$$1$$.$Dimension$($DvtAxisKeyboardHandler$$, Math.min($size$$13$$, $DvtAxisEventManager$$)) : new $dvt$$1$$.$Dimension$(Math.min($size$$13$$, $DvtAxisKeyboardHandler$$), $DvtAxisEventManager$$);
  };
  $DvtAxisRenderer$$.$render$ = function $$DvtAxisRenderer$$$$render$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = $DvtAxisRenderer$$.$_createAxisInfo$($dvt$$1$$, $DvtAxisObjPeer$$);
    "off" != $dvt$$1$$.$getOptions$().rendered && ($dvt$$1$$.$__setBounds$($DvtAxisObjPeer$$.clone()), $DvtAxisRenderer$$.$_renderBackground$($dvt$$1$$, $DvtAxisObjPeer$$), $DvtAxisRenderer$$.$_renderTitle$($dvt$$1$$, $DvtAxisKeyboardHandler$$, $DvtAxisObjPeer$$), $DvtAxisRenderer$$.$_renderLabels$($dvt$$1$$, $DvtAxisKeyboardHandler$$, $DvtAxisObjPeer$$));
  };
  $DvtAxisRenderer$$.$_createAxisInfo$ = function $$DvtAxisRenderer$$$$_createAxisInfo$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    var $DvtAxisEventManager$$ = $dvt$$1$$.$AxisInfo$.newInstance($DvtAxisObjPeer$$.$getCtx$(), $DvtAxisObjPeer$$.$getOptions$(), $DvtAxisKeyboardHandler$$);
    $DvtAxisObjPeer$$.$__setInfo$($DvtAxisEventManager$$);
    return $DvtAxisEventManager$$;
  };
  $DvtAxisRenderer$$.$_getTitleGap$ = function $$DvtAxisRenderer$$$$_getTitleGap$$($dvt$$1$$) {
    var $DvtAxisObjPeer$$ = $dvt$$1$$.$getOptions$();
    return $DvtAxisDefaults$$.$getGapSize$($dvt$$1$$.$getCtx$(), $DvtAxisObjPeer$$, $DvtAxisObjPeer$$.layout.titleGap);
  };
  $DvtAxisRenderer$$.$_renderBackground$ = function $$DvtAxisRenderer$$$$_renderBackground$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    var $DvtAxisEventManager$$ = $DvtAxisObjPeer$$.$getOptions$();
    if ($DvtAxisEventManager$$.dnd) {
      var $DvtAxisDefaults$$ = $DvtAxisEventManager$$.dnd.drop;
      if (0 < Object.keys($DvtAxisDefaults$$.xAxis).length || 0 < Object.keys($DvtAxisDefaults$$.yAxis).length || 0 < Object.keys($DvtAxisDefaults$$.y2Axis).length) {
        $DvtAxisEventManager$$ = $DvtAxisEventManager$$.position, $DvtAxisEventManager$$ = ($DvtAxisDefaults$$ = "top" == $DvtAxisEventManager$$ || "bottom" == $DvtAxisEventManager$$) ? 4 : 10, $DvtAxisDefaults$$ = $DvtAxisDefaults$$ ? 10 : 4, $DvtAxisEventManager$$ = new $dvt$$1$$.Rect($DvtAxisObjPeer$$.$getCtx$(), $DvtAxisKeyboardHandler$$.x - $DvtAxisDefaults$$, $DvtAxisKeyboardHandler$$.y - $DvtAxisEventManager$$, $DvtAxisKeyboardHandler$$.$w$ + 2 * $DvtAxisDefaults$$, $DvtAxisKeyboardHandler$$.$h$ + 
        2 * $DvtAxisEventManager$$), $DvtAxisEventManager$$.$setInvisibleFill$(), $DvtAxisObjPeer$$.$addChild$($DvtAxisEventManager$$), $DvtAxisObjPeer$$.$_cache$.$putToCache$("background", $DvtAxisEventManager$$);
      }
    }
  };
  $DvtAxisRenderer$$.$_renderTitle$ = function $$DvtAxisRenderer$$$$_renderTitle$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisDefaults$$) {
    var $DvtAxisAutomation$$ = $DvtAxisObjPeer$$.$getOptions$();
    if ($DvtAxisAutomation$$.title) {
      var $position$$7$$ = $DvtAxisAutomation$$.position;
      if ("radial" != $position$$7$$ && "tangential" != $position$$7$$) {
        var $bHoriz$$1_gap$$2$$ = "top" == $DvtAxisAutomation$$.position || "bottom" == $DvtAxisAutomation$$.position;
        if ($DvtAxisAutomation$$ = $DvtAxisRenderer$$.$_createText$($DvtAxisObjPeer$$.$getEventManager$(), $DvtAxisObjPeer$$, $DvtAxisAutomation$$.title, $DvtAxisAutomation$$.titleStyle, $bHoriz$$1_gap$$2$$ ? $DvtAxisDefaults$$.$w$ : $DvtAxisDefaults$$.$h$, $bHoriz$$1_gap$$2$$ ? $DvtAxisDefaults$$.$h$ : $DvtAxisDefaults$$.$w$, $DvtAxisEventManager$$.$getUIParams$($DvtAxisConstants$$.$TITLE$))) {
          var $bHoriz$$1_gap$$2$$ = $DvtAxisRenderer$$.$_getTitleGap$($DvtAxisObjPeer$$), $overflow$$ = ($DvtAxisKeyboardHandler$$.$getStartOverflow$() - $DvtAxisKeyboardHandler$$.$getEndOverflow$()) / 2;
          $DvtAxisObjPeer$$ = $dvt$$1$$.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$.$getCtx$());
          var $titleHeight$$ = $dvt$$1$$.$TextUtils$.$getTextHeight$($DvtAxisAutomation$$);
          $DvtAxisAutomation$$.$alignCenter$();
          "top" == $position$$7$$ ? ($DvtAxisAutomation$$.$setX$($DvtAxisDefaults$$.x + $overflow$$ + $DvtAxisDefaults$$.$w$ / 2), $DvtAxisAutomation$$.$setY$($DvtAxisDefaults$$.y), $DvtAxisDefaults$$.y += $titleHeight$$ + $bHoriz$$1_gap$$2$$, $DvtAxisDefaults$$.$h$ -= $titleHeight$$ + $bHoriz$$1_gap$$2$$) : "bottom" == $position$$7$$ ? ($DvtAxisAutomation$$.$setX$($DvtAxisDefaults$$.x + $overflow$$ + $DvtAxisDefaults$$.$w$ / 2), $DvtAxisAutomation$$.$setY$($DvtAxisDefaults$$.y + $DvtAxisDefaults$$.$h$ - 
          $titleHeight$$), $DvtAxisDefaults$$.$h$ -= $titleHeight$$ + $bHoriz$$1_gap$$2$$) : "left" == $position$$7$$ ? ($DvtAxisAutomation$$.$alignMiddle$(), $DvtAxisAutomation$$.$setRotation$($DvtAxisObjPeer$$ ? Math.PI / 2 : 3 * Math.PI / 2), $DvtAxisAutomation$$.$setTranslate$($DvtAxisDefaults$$.x + $titleHeight$$ / 2, $DvtAxisDefaults$$.y + $DvtAxisDefaults$$.$h$ / 2), $DvtAxisDefaults$$.x += $titleHeight$$ + $bHoriz$$1_gap$$2$$, $DvtAxisDefaults$$.$w$ -= $titleHeight$$ + $bHoriz$$1_gap$$2$$) : 
          "right" == $position$$7$$ && ($DvtAxisAutomation$$.$alignMiddle$(), $DvtAxisAutomation$$.$setRotation$($DvtAxisObjPeer$$ ? Math.PI / 2 : 3 * Math.PI / 2), $DvtAxisAutomation$$.$setTranslate$($DvtAxisDefaults$$.x + $DvtAxisDefaults$$.$w$ - $titleHeight$$ / 2, $DvtAxisDefaults$$.y + $DvtAxisDefaults$$.$h$ / 2), $DvtAxisDefaults$$.$w$ -= $titleHeight$$ + $bHoriz$$1_gap$$2$$);
          $DvtAxisKeyboardHandler$$.$setTitle$($DvtAxisAutomation$$);
        }
      }
    }
  };
  $DvtAxisRenderer$$.$_renderLabels$ = function $$DvtAxisRenderer$$$$_renderLabels$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    var $DvtAxisEventManager$$ = $dvt$$1$$.$getOptions$();
    "on" == $DvtAxisEventManager$$.tickLabel.rendered && ($DvtAxisEventManager$$ = $DvtAxisEventManager$$.position, "top" == $DvtAxisEventManager$$ || "bottom" == $DvtAxisEventManager$$ ? $DvtAxisRenderer$$.$_renderLabelsHoriz$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) : "tangential" == $DvtAxisEventManager$$ ? $DvtAxisRenderer$$.$_renderLabelsTangent$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) : $DvtAxisRenderer$$.$_renderLabelsVert$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$), 
    $DvtAxisRenderer$$.$_renderGroupSeparators$($dvt$$1$$, $DvtAxisObjPeer$$));
  };
  $DvtAxisRenderer$$.$_renderLabelsHoriz$ = function $$DvtAxisRenderer$$$$_renderLabelsHoriz$$($DvtAxisKeyboardHandler$$, $DvtAxisAutomation$$, $DvtAxisRenderer$$) {
    for (var $context$$78_lv2Labels$$ = $DvtAxisKeyboardHandler$$.$getCtx$(), $offset$$16_options$$20$$ = $DvtAxisKeyboardHandler$$.$getOptions$(), $maxOverflow_position$$9$$ = $offset$$16_options$$20$$.position, $isTickInside_minOverflow$$ = "inside" == $offset$$16_options$$20$$.tickLabel.position, $isRTL$$1$$ = $dvt$$1$$.$Agent$.$isRightToLeft$($context$$78_lv2Labels$$), $isGroupAxis_overflow1_x$$86$$ = $DvtAxisAutomation$$ instanceof $dvt$$1$$.$GroupAxisInfo$, $isHierarchical_overflow2$$ = $isGroupAxis_overflow1_x$$86$$ && 
    1 < $DvtAxisAutomation$$.$getNumLevels$(), $levelIdx$$2$$ = $isHierarchical_overflow2$$ ? 0 : null, $labels$$3$$ = $DvtAxisAutomation$$.$getLabels$($context$$78_lv2Labels$$, $levelIdx$$2$$), $gap$$3$$ = $isHierarchical_overflow2$$ ? $DvtAxisDefaults$$.$getGapSize$($context$$78_lv2Labels$$, $offset$$16_options$$20$$, $offset$$16_options$$20$$.layout.hierarchicalLabelGapHeight) : 0;$labels$$3$$;) {
      for (var $height$$25_index$$104_isMultiline_isRotated$$ = 0, $maxLvlHeight$$ = 0, $i$$217$$ = 0;$i$$217$$ < $labels$$3$$.length;$i$$217$$++) {
        var $label$$22$$ = $labels$$3$$[$i$$217$$];
        if (null != $label$$22$$) {
          $height$$25_index$$104_isMultiline_isRotated$$ = $label$$22$$ instanceof $dvt$$1$$.$MultilineText$ || $label$$22$$ instanceof $dvt$$1$$.$BackgroundMultilineText$;
          if ($DvtAxisAutomation$$.$isLabelRotated$($levelIdx$$2$$)) {
            if ((!$height$$25_index$$104_isMultiline_isRotated$$ || $height$$25_index$$104_isMultiline_isRotated$$ && !$label$$22$$.$isWrapEnabled$()) && !$dvt$$1$$.$TextUtils$.$fitText$($label$$22$$, $DvtAxisRenderer$$.$h$, $DvtAxisRenderer$$.$w$, $DvtAxisKeyboardHandler$$)) {
              continue;
            }
            $isRTL$$1$$ ? $label$$22$$.$alignLeft$() : $label$$22$$.$alignRight$();
            $isHierarchical_overflow2$$ ? ($height$$25_index$$104_isMultiline_isRotated$$ = $dvt$$1$$.$TextUtils$.$getTextWidth$($label$$22$$), $label$$22$$.$setTranslateY$($DvtAxisRenderer$$.$h$ - $height$$25_index$$104_isMultiline_isRotated$$), $maxLvlHeight$$ = Math.max($maxLvlHeight$$, $height$$25_index$$104_isMultiline_isRotated$$)) : $label$$22$$.$setTranslateY$($DvtAxisRenderer$$.y);
          } else {
            if (!$isTickInside_minOverflow$$ && $dvt$$1$$.$TextUtils$.$guessTextDimensions$($label$$22$$).$h$ - 1 > $DvtAxisRenderer$$.$h$) {
              continue;
            }
            $isHierarchical_overflow2$$ && "bottom" == $maxOverflow_position$$9$$ ? $label$$22$$.$setY$($DvtAxisRenderer$$.$h$) : "bottom" == $maxOverflow_position$$9$$ ? $label$$22$$.$setY$($DvtAxisRenderer$$.y) : $label$$22$$.$setY$($DvtAxisRenderer$$.y + $DvtAxisRenderer$$.$h$);
            !$isHierarchical_overflow2$$ && ("bottom" == $maxOverflow_position$$9$$ && !$isTickInside_minOverflow$$ || "top" == $maxOverflow_position$$9$$ && $isTickInside_minOverflow$$) ? $label$$22$$.$alignTop$() : $isHierarchical_overflow2$$ && "top" == $maxOverflow_position$$9$$ ? $label$$22$$.$alignTop$() : $label$$22$$.$alignBottom$();
            if ($isHierarchical_overflow2$$) {
              $maxLvlHeight$$ = Math.max($maxLvlHeight$$, $dvt$$1$$.$TextUtils$.$guessTextDimensions$($label$$22$$).$h$);
            } else {
              if ($isTickInside_minOverflow$$) {
                var $gap$$3$$ = $DvtAxisDefaults$$.$getGapSize$($context$$78_lv2Labels$$, $offset$$16_options$$20$$, $offset$$16_options$$20$$.layout.insideLabelGapWidth);
                $isRTL$$1$$ ? $label$$22$$.$alignRight$() : $label$$22$$.$alignLeft$();
                $label$$22$$.$setX$($label$$22$$.$getX$() + $gap$$3$$ * ($isRTL$$1$$ ? -1 : 1));
              }
            }
          }
          var $height$$25_index$$104_isMultiline_isRotated$$ = $isGroupAxis_overflow1_x$$86$$ ? $DvtAxisAutomation$$.$getLabelIndex$($label$$22$$) : $i$$217$$, $datatip_isOuterLevel$$ = $DvtAxisAutomation$$.$getDatatip$($height$$25_index$$104_isMultiline_isRotated$$, $levelIdx$$2$$), $tooltip$$6$$ = $label$$22$$.$getUntruncatedTextString$(), $action$$9$$ = $DvtAxisAutomation$$.$getAction$($height$$25_index$$104_isMultiline_isRotated$$, $levelIdx$$2$$), $drillable$$ = $DvtAxisAutomation$$.$isDrillable$($height$$25_index$$104_isMultiline_isRotated$$, 
          $levelIdx$$2$$), $group$$6$$ = $DvtAxisAutomation$$.$getGroup$($height$$25_index$$104_isMultiline_isRotated$$, $levelIdx$$2$$);
          $DvtAxisKeyboardHandler$$.$getEventManager$().$associate$($label$$22$$, new $DvtAxisObjPeer$$($DvtAxisKeyboardHandler$$, $label$$22$$, $group$$6$$, $action$$9$$, $drillable$$, $tooltip$$6$$, $datatip_isOuterLevel$$, $DvtAxisEventManager$$.$getUIParams$($DvtAxisConstants$$.$TICK_LABEL$, $label$$22$$.$getTextString$(), $height$$25_index$$104_isMultiline_isRotated$$, $levelIdx$$2$$)));
          $isHierarchical_overflow2$$ ? $DvtAxisAutomation$$.$setLastRenderedLevel$($levelIdx$$2$$) : $maxLvlHeight$$ = Math.max($maxLvlHeight$$, $dvt$$1$$.$TextUtils$.$guessTextDimensions$($label$$22$$).$h$);
          $DvtAxisKeyboardHandler$$.$addChild$($label$$22$$);
        }
      }
      if ($isHierarchical_overflow2$$) {
        for ($i$$217$$ = 0;$i$$217$$ < $labels$$3$$.length;$i$$217$$++) {
          $label$$22$$ = $labels$$3$$[$i$$217$$], null != $label$$22$$ && ($height$$25_index$$104_isMultiline_isRotated$$ = $DvtAxisAutomation$$.$isLabelRotated$($levelIdx$$2$$), $datatip_isOuterLevel$$ = $levelIdx$$2$$ < $DvtAxisAutomation$$.$getNumLevels$() - 1, !$height$$25_index$$104_isMultiline_isRotated$$ && $datatip_isOuterLevel$$ ? ($label$$22$$.$setY$($DvtAxisRenderer$$.$h$ - $maxLvlHeight$$ / 2), $label$$22$$.$alignMiddle$()) : $label$$22$$.$setTranslateY$($DvtAxisRenderer$$.$h$ - $maxLvlHeight$$))
          ;
        }
        $DvtAxisRenderer$$.y += $maxLvlHeight$$ + $gap$$3$$;
        $DvtAxisRenderer$$.$h$ -= $maxLvlHeight$$ + $gap$$3$$;
        $levelIdx$$2$$++;
        $labels$$3$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$(), $levelIdx$$2$$);
      } else {
        $DvtAxisRenderer$$.y += $maxLvlHeight$$, $DvtAxisRenderer$$.$h$ -= $maxLvlHeight$$, $labels$$3$$ = null;
      }
    }
    if ($DvtAxisAutomation$$ instanceof $dvt$$1$$.$TimeAxisInfo$ && ($labels$$3$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$()), $context$$78_lv2Labels$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$(), 1), $offset$$16_options$$20$$ = 0, null != $context$$78_lv2Labels$$)) {
      for ($i$$217$$ = 0;$i$$217$$ < $context$$78_lv2Labels$$.length;$i$$217$$++) {
        $label$$22$$ = $context$$78_lv2Labels$$[$i$$217$$], null == $label$$22$$ || $dvt$$1$$.$TextUtils$.$guessTextDimensions$($label$$22$$).$h$ - 1 > $DvtAxisRenderer$$.$h$ || ($DvtAxisKeyboardHandler$$.$getEventManager$().$associate$($label$$22$$, new $dvt$$1$$.$SimpleObjPeer$(null, null, null, $DvtAxisEventManager$$.$getUIParams$($DvtAxisConstants$$.$TICK_LABEL$, $label$$22$$.$getTextString$()))), $isHierarchical_overflow2$$ = $isGroupAxis_overflow1_x$$86$$ = 0, $maxOverflow_position$$9$$ = $DvtAxisAutomation$$.$getOptions$()._maxOverflowCoord, 
        $isTickInside_minOverflow$$ = $DvtAxisAutomation$$.$getOptions$()._minOverflowCoord, null != $labels$$3$$[$i$$217$$] && ($offset$$16_options$$20$$ = $labels$$3$$[$i$$217$$].$measureDimensions$().$w$ / 2, $isGroupAxis_overflow1_x$$86$$ = $DvtAxisAutomation$$.$_level1Overflow$[$i$$217$$], $isHierarchical_overflow2$$ = $DvtAxisAutomation$$.$_level2Overflow$[$i$$217$$]), 0 == $isGroupAxis_overflow1_x$$86$$ && 0 == $isHierarchical_overflow2$$ ? ($isGroupAxis_overflow1_x$$86$$ = $label$$22$$.$getX$(), 
        $label$$22$$.$setX$($isRTL$$1$$ ? $isGroupAxis_overflow1_x$$86$$ + $offset$$16_options$$20$$ <= $maxOverflow_position$$9$$ ? $isGroupAxis_overflow1_x$$86$$ + $offset$$16_options$$20$$ : $maxOverflow_position$$9$$ : $isGroupAxis_overflow1_x$$86$$ - $offset$$16_options$$20$$ >= $isTickInside_minOverflow$$ ? $isGroupAxis_overflow1_x$$86$$ - $offset$$16_options$$20$$ : $isTickInside_minOverflow$$)) : 0 > $isGroupAxis_overflow1_x$$86$$ ? $label$$22$$.$setX$($isTickInside_minOverflow$$) : 0 < $isGroupAxis_overflow1_x$$86$$ && 
        $label$$22$$.$setX$($maxOverflow_position$$9$$), $label$$22$$.$alignTop$(), $label$$22$$.$setY$($DvtAxisRenderer$$.y), $DvtAxisKeyboardHandler$$.$addChild$($label$$22$$));
      }
    }
  };
  $DvtAxisRenderer$$.$_renderLabelsVert$ = function $$DvtAxisRenderer$$$$_renderLabelsVert$$($DvtAxisKeyboardHandler$$, $DvtAxisAutomation$$, $DvtAxisRenderer$$) {
    function $formatLabelVert$$($gap$$4_lv2Labels$$1$$, $formatLabelVert$$) {
      var $i$$218$$ = $gap$$4_lv2Labels$$1$$ instanceof $dvt$$1$$.$MultilineText$ || $gap$$4_lv2Labels$$1$$ instanceof $dvt$$1$$.$BackgroundMultilineText$, $i$$218$$ = !$i$$218$$ || $i$$218$$ && !$gap$$4_lv2Labels$$1$$.$isWrapEnabled$();
      if (!($isHierarchical$$1$$ && $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$ - 1 > $DvtAxisRenderer$$.$w$) && ($isHierarchical$$1$$ || $isTickInside$$1$$ || !$i$$218$$ || $dvt$$1$$.$TextUtils$.$fitText$($gap$$4_lv2Labels$$1$$, $DvtAxisRenderer$$.$w$, $DvtAxisRenderer$$.$h$, $DvtAxisKeyboardHandler$$))) {
        $formatLabelVert$$ = $isGroupAxis$$1$$ ? $DvtAxisAutomation$$.$getLabelIndex$($gap$$4_lv2Labels$$1$$) : $formatLabelVert$$;
        var $i$$218$$ = $DvtAxisAutomation$$.$getDatatip$($formatLabelVert$$, $levelIdx$$3$$), $label$$23$$ = $gap$$4_lv2Labels$$1$$.$getUntruncatedTextString$(), $action$$10_bbox$$3_cmd$$1_padding$$11$$ = $DvtAxisAutomation$$.$getAction$($formatLabelVert$$, $levelIdx$$3$$), $bgColor$$7_drillable$$1$$ = $DvtAxisAutomation$$.$isDrillable$($formatLabelVert$$, $levelIdx$$3$$), $group$$7$$ = $DvtAxisAutomation$$.$getGroup$($formatLabelVert$$, $levelIdx$$3$$);
        $DvtAxisKeyboardHandler$$.$getEventManager$().$associate$($gap$$4_lv2Labels$$1$$, new $DvtAxisObjPeer$$($DvtAxisKeyboardHandler$$, $gap$$4_lv2Labels$$1$$, $group$$7$$, $action$$10_bbox$$3_cmd$$1_padding$$11$$, $bgColor$$7_drillable$$1$$, $label$$23$$, $i$$218$$, $DvtAxisEventManager$$.$getUIParams$($DvtAxisConstants$$.$TICK_LABEL$, $gap$$4_lv2Labels$$1$$.$getTextString$(), $formatLabelVert$$, $levelIdx$$3$$)));
        $isHierarchical$$1$$ ? ($gap$$4_lv2Labels$$1$$.$alignRight$(), $gap$$4_lv2Labels$$1$$.$setX$($isRTL$$2$$ ? $DvtAxisRenderer$$.$w$ : $DvtAxisRenderer$$.x + $maxLvlWidth$$), $DvtAxisAutomation$$.$setLastRenderedLevel$($levelIdx$$3$$)) : ($gap$$4_lv2Labels$$1$$.$setX$($labelX$$), $isNumerical$$ || "right" != $position$$10$$ ? $gap$$4_lv2Labels$$1$$.$alignRight$() : $gap$$4_lv2Labels$$1$$.$alignLeft$(), $isTickInside$$1$$ && ($gap$$4_lv2Labels$$1$$.$alignBottom$(), $gap$$4_lv2Labels$$1$$.$setY$($gap$$4_lv2Labels$$1$$.$getY$() - 
        $DvtAxisDefaults$$.$getGapSize$($context$$79$$, $options$$21$$, $options$$21$$.layout.insideLabelGapHeight))), "radial" == $position$$10$$ && ($i$$218$$ = $gap$$4_lv2Labels$$1$$.$getY$(), $gap$$4_lv2Labels$$1$$.$setY$($DvtAxisRenderer$$.y + $DvtAxisRenderer$$.$h$ / 2 - $i$$218$$), $label$$23$$ = $gap$$4_lv2Labels$$1$$.$getDimensions$(), $action$$10_bbox$$3_cmd$$1_padding$$11$$ = .15 * $label$$23$$.$h$, $action$$10_bbox$$3_cmd$$1_padding$$11$$ = $dvt$$1$$.$PathUtils$.$roundedRectangle$($label$$23$$.x - 
        $action$$10_bbox$$3_cmd$$1_padding$$11$$, $label$$23$$.y, $label$$23$$.$w$ + 2 * $action$$10_bbox$$3_cmd$$1_padding$$11$$, $label$$23$$.$h$, 2, 2, 2, 2), $action$$10_bbox$$3_cmd$$1_padding$$11$$ = new $dvt$$1$$.$Path$($DvtAxisKeyboardHandler$$.$getCtx$(), $action$$10_bbox$$3_cmd$$1_padding$$11$$), $bgColor$$7_drillable$$1$$ = $gap$$4_lv2Labels$$1$$.$getCSSStyle$().$getStyle$($dvt$$1$$.$CSSStyle$.$BACKGROUND_COLOR$), $i$$218$$ = $i$$218$$ + $label$$23$$.$h$ / 2 > $DvtAxisAutomation$$.$getEndCoord$() && 
        "circle" == $DvtAxisKeyboardHandler$$.$getOptions$().polarGridShape ? 1 : .3, $bgColor$$7_drillable$$1$$ ? $action$$10_bbox$$3_cmd$$1_padding$$11$$.$setSolidFill$($bgColor$$7_drillable$$1$$) : $action$$10_bbox$$3_cmd$$1_padding$$11$$.$setSolidFill$("#FFFFFF", $i$$218$$), $DvtAxisKeyboardHandler$$.$addChild$($action$$10_bbox$$3_cmd$$1_padding$$11$$)));
        $DvtAxisKeyboardHandler$$.$addChild$($gap$$4_lv2Labels$$1$$);
      }
    }
    var $options$$21$$ = $DvtAxisKeyboardHandler$$.$getOptions$(), $position$$10$$ = $options$$21$$.position, $context$$79$$ = $DvtAxisKeyboardHandler$$.$getCtx$(), $isRTL$$2$$ = $dvt$$1$$.$Agent$.$isRightToLeft$($context$$79$$), $isNumerical$$ = $DvtAxisAutomation$$ instanceof $dvt$$1$$.$DataAxisInfo$, $isTickInside$$1$$ = "inside" == $options$$21$$.tickLabel.position, $labels$$4$$, $gap$$4_lv2Labels$$1$$, $maxLvlWidth$$, $isGroupAxis$$1$$ = $DvtAxisAutomation$$ instanceof $dvt$$1$$.$GroupAxisInfo$, 
    $isHierarchical$$1$$ = $isGroupAxis$$1$$ && 1 < $DvtAxisAutomation$$.$getNumLevels$(), $levelIdx$$3$$ = $isHierarchical$$1$$ ? 0 : null;
    $labels$$4$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$(), $levelIdx$$3$$);
    var $labelX$$ = 0;
    $isHierarchical$$1$$ ? ($gap$$4_lv2Labels$$1$$ = $DvtAxisDefaults$$.$getGapSize$($context$$79$$, $options$$21$$, $options$$21$$.layout.hierarchicalLabelGapWidth), $maxLvlWidth$$ = $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$) : "radial" == $position$$10$$ ? ($gap$$4_lv2Labels$$1$$ = $DvtAxisDefaults$$.$getGapSize$($context$$79$$, $options$$21$$, $options$$21$$.layout.radialLabelGap), $labelX$$ = $DvtAxisRenderer$$.x + $DvtAxisRenderer$$.$w$ / 2, $labelX$$ = $isRTL$$2$$ ? $labelX$$ + 
    ($gap$$4_lv2Labels$$1$$ + $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$) : $labelX$$ - $gap$$4_lv2Labels$$1$$) : "left" == $position$$10$$ ? ($labelX$$ = $DvtAxisRenderer$$.x + $DvtAxisRenderer$$.$w$, $isNumerical$$ && $isTickInside$$1$$ && ($labelX$$ += $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$)) : ($labelX$$ = $DvtAxisRenderer$$.x, $isNumerical$$ && !$isTickInside$$1$$ && ($labelX$$ += $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$));
    for (;$labels$$4$$;) {
      for (var $i$$218$$ = 0;$i$$218$$ < $labels$$4$$.length;$i$$218$$++) {
        var $label$$23$$ = $labels$$4$$[$i$$218$$];
        null != $label$$23$$ && $formatLabelVert$$($label$$23$$, $i$$218$$);
      }
      if ($isHierarchical$$1$$) {
        $DvtAxisRenderer$$.x += $maxLvlWidth$$ + $gap$$4_lv2Labels$$1$$, $DvtAxisRenderer$$.$w$ -= $maxLvlWidth$$ + $gap$$4_lv2Labels$$1$$, $levelIdx$$3$$++, $maxLvlWidth$$ = ($labels$$4$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$(), $levelIdx$$3$$)) ? $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$ : null;
      } else {
        break;
      }
    }
    if ($DvtAxisAutomation$$ instanceof $dvt$$1$$.$TimeAxisInfo$ && ($gap$$4_lv2Labels$$1$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$(), 1), null != $gap$$4_lv2Labels$$1$$)) {
      for ($i$$218$$ = 0;$i$$218$$ < $gap$$4_lv2Labels$$1$$.length;$i$$218$$++) {
        $label$$23$$ = $gap$$4_lv2Labels$$1$$[$i$$218$$], null != $label$$23$$ && $formatLabelVert$$($label$$23$$, $i$$218$$);
      }
    }
  };
  $DvtAxisRenderer$$.$_renderLabelsTangent$ = function $$DvtAxisRenderer$$$$_renderLabelsTangent$$($DvtAxisKeyboardHandler$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$) {
    for (var $DvtAxisRenderer$$ = $DvtAxisDefaults$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$()), $i$$219$$ = 0;$i$$219$$ < $DvtAxisRenderer$$.length;$i$$219$$++) {
      var $label$$25$$ = $DvtAxisRenderer$$[$i$$219$$];
      if (null != $label$$25$$) {
        var $index$$106_maxWidth$$7$$ = $DvtAxisAutomation$$.$w$ / 2 - Math.abs($label$$25$$.$getX$()), $datatip$$2_maxHeight$$4$$ = $DvtAxisAutomation$$.$h$ / 2 - Math.abs($label$$25$$.$getY$());
        if ($dvt$$1$$.$TextUtils$.$fitText$($label$$25$$, $index$$106_maxWidth$$7$$, $datatip$$2_maxHeight$$4$$, $DvtAxisKeyboardHandler$$)) {
          var $index$$106_maxWidth$$7$$ = $DvtAxisDefaults$$ instanceof $dvt$$1$$.$GroupAxisInfo$ ? $DvtAxisDefaults$$.$getLabelIndex$($label$$25$$) : $i$$219$$, $datatip$$2_maxHeight$$4$$ = $DvtAxisDefaults$$.$getDatatip$($index$$106_maxWidth$$7$$), $tooltip$$8$$ = $label$$25$$.$getUntruncatedTextString$(), $action$$11$$ = $DvtAxisDefaults$$.$getAction$($index$$106_maxWidth$$7$$), $drillable$$2$$ = $DvtAxisDefaults$$.$isDrillable$($index$$106_maxWidth$$7$$), $group$$8$$ = $DvtAxisDefaults$$.$getGroup$($index$$106_maxWidth$$7$$);
          $DvtAxisKeyboardHandler$$.$getEventManager$().$associate$($label$$25$$, new $DvtAxisObjPeer$$($DvtAxisKeyboardHandler$$, $label$$25$$, $group$$8$$, $action$$11$$, $drillable$$2$$, $tooltip$$8$$, $datatip$$2_maxHeight$$4$$, $DvtAxisEventManager$$.$getUIParams$($DvtAxisConstants$$.$TICK_LABEL$, $label$$25$$.$getTextString$(), $index$$106_maxWidth$$7$$)));
          $label$$25$$.$setTranslateX$($DvtAxisAutomation$$.x + $DvtAxisAutomation$$.$w$ / 2);
          $label$$25$$.$setTranslateY$($DvtAxisAutomation$$.y + $DvtAxisAutomation$$.$h$ / 2);
          $DvtAxisKeyboardHandler$$.$addChild$($label$$25$$);
        }
      }
    }
  };
  $DvtAxisRenderer$$.$_createText$ = function $$DvtAxisRenderer$$$$_createText$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$, $DvtAxisAutomation$$, $DvtAxisRenderer$$) {
    $DvtAxisEventManager$$ = new $dvt$$1$$.$OutputText$($DvtAxisKeyboardHandler$$.$getCtx$(), $DvtAxisEventManager$$, 0, 0);
    $DvtAxisEventManager$$.$setCSSStyle$($DvtAxisDefaults$$);
    return $dvt$$1$$.$TextUtils$.$fitText$($DvtAxisEventManager$$, $DvtAxisConstants$$, $DvtAxisAutomation$$, $DvtAxisKeyboardHandler$$) ? ($DvtAxisObjPeer$$.$associate$($DvtAxisEventManager$$, new $dvt$$1$$.$SimpleObjPeer$($DvtAxisEventManager$$.$getUntruncatedTextString$(), null, null, $DvtAxisRenderer$$)), $DvtAxisEventManager$$) : null;
  };
  $DvtAxisRenderer$$.$_renderGroupSeparators$ = function $$DvtAxisRenderer$$$$_renderGroupSeparators$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if ($DvtAxisKeyboardHandler$$ instanceof $dvt$$1$$.$GroupAxisInfo$ && $DvtAxisKeyboardHandler$$.$_areSeparatorsRendered$ && !(1 >= $DvtAxisKeyboardHandler$$.$getNumLevels$() || 0 >= $DvtAxisKeyboardHandler$$.$_lastRenderedLevel$)) {
      for (var $DvtAxisEventManager$$ = $DvtAxisObjPeer$$.$getOptions$(), $DvtAxisConstants$$ = $DvtAxisEventManager$$.position, $DvtAxisConstants$$ = "top" == $DvtAxisConstants$$ || "bottom" == $DvtAxisConstants$$, $DvtAxisAutomation$$ = $DvtAxisObjPeer$$.$getCtx$(), $isRTL$$3$$ = $dvt$$1$$.$Agent$.$isRightToLeft$($DvtAxisAutomation$$), $lineStroke$$ = new $dvt$$1$$.$SolidStroke$($DvtAxisKeyboardHandler$$.$_separatorColor$, 1, 1), $prevLevelSize$$ = 0, $DvtAxisAutomation$$ = $DvtAxisConstants$$ ? 
      $DvtAxisDefaults$$.$getGapSize$($DvtAxisAutomation$$, $DvtAxisEventManager$$, $DvtAxisEventManager$$.layout.hierarchicalLabelGapHeight) : $DvtAxisDefaults$$.$getGapSize$($DvtAxisAutomation$$, $DvtAxisEventManager$$, $DvtAxisEventManager$$.layout.hierarchicalLabelGapWidth), $startOffset$$ = $DvtAxisEventManager$$.startGroupOffset, $DvtAxisEventManager$$ = $DvtAxisEventManager$$.endGroupOffset, $maxDims_x1$$4$$, $x3_y1$$3$$, $x2$$2$$, $y2$$1_yCoord$$, $start$$27_x4$$, $level$$14$$ = $DvtAxisKeyboardHandler$$.$_lastRenderedLevel$;0 <= 
      $level$$14$$;$level$$14$$--) {
        var $labels$$6$$ = $DvtAxisKeyboardHandler$$.$getLabels$($DvtAxisObjPeer$$.$getCtx$(), $level$$14$$);
        $maxDims_x1$$4$$ = $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($labels$$6$$);
        var $isRotated$$1$$ = $DvtAxisKeyboardHandler$$.$isLabelRotated$($level$$14$$), $levelSize$$ = $isRotated$$1$$ || !$DvtAxisConstants$$ ? $maxDims_x1$$4$$.$w$ : $maxDims_x1$$4$$.$h$;
        if (0 != $levelSize$$) {
          var $nextLabel_prevLabelRendered$$ = !1, $prevLabelEmpty$$ = null;
          if ($level$$14$$ < $DvtAxisKeyboardHandler$$.$_lastRenderedLevel$) {
            for (var $i$$220$$ = 0;$i$$220$$ < $labels$$6$$.length;$i$$220$$++) {
              var $label$$26$$ = $labels$$6$$[$i$$220$$];
              if (null != $label$$26$$) {
                var $index$$107$$ = $DvtAxisKeyboardHandler$$.$getLabelIndex$($label$$26$$), $isEmptyLabel$$ = 0 == $DvtAxisKeyboardHandler$$.$getLabelAt$($index$$107$$, $level$$14$$).length;
                if (!$isEmptyLabel$$) {
                  var $eraseCornerEdge$$ = $isEmptyLabel$$ && 0 == $level$$14$$ && (0 == $index$$107$$ || $index$$107$$ == $labels$$6$$.length - 1), $isFirstLabel$$ = $label$$26$$ && null == $labels$$6$$[$index$$107$$ - 1], $isLastLabel_spacing$$1$$ = $label$$26$$ && null == $labels$$6$$[$index$$107$$ + 1];
                  $start$$27_x4$$ = $DvtAxisKeyboardHandler$$.$getStartIndex$($index$$107$$, $level$$14$$);
                  var $drawLeftLine_end$$9$$ = $DvtAxisKeyboardHandler$$.$getEndIndex$($index$$107$$, $level$$14$$);
                  if ($DvtAxisConstants$$) {
                    if ($label$$26$$ && ($y2$$1_yCoord$$ = $label$$26$$ instanceof $dvt$$1$$.$MultilineText$ || $label$$26$$ instanceof $dvt$$1$$.$BackgroundMultilineText$ ? $label$$26$$.$getYAlignCoord$() : $label$$26$$.$getY$(), $maxDims_x1$$4$$ = $DvtAxisKeyboardHandler$$.$getCoordAt$($start$$27_x4$$ - $startOffset$$), $x3_y1$$3$$ = $isRotated$$1$$ ? $y2$$1_yCoord$$ + .5 * $prevLevelSize$$ : $y2$$1_yCoord$$ - $levelSize$$ / 2 - .5 * $prevLevelSize$$ - $DvtAxisAutomation$$, $x2$$2$$ = $DvtAxisKeyboardHandler$$.$getCoordAt$($drawLeftLine_end$$9$$ + 
                    $DvtAxisEventManager$$), $y2$$1_yCoord$$ = $isRotated$$1$$ ? $y2$$1_yCoord$$ + $levelSize$$ + $prevLevelSize$$ + 2 * $DvtAxisAutomation$$ : $y2$$1_yCoord$$, $isEmptyLabel$$ && $eraseCornerEdge$$ || 0 != $nextLabel_prevLabelRendered$$ || null == $maxDims_x1$$4$$ || $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$, $maxDims_x1$$4$$, $x3_y1$$3$$), null == $x2$$2$$ || $eraseCornerEdge$$ || $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, 
                    $lineStroke$$, $x2$$2$$, $y2$$1_yCoord$$, $x2$$2$$, $x3_y1$$3$$)), !$isEmptyLabel$$) {
                      if ($label$$26$$) {
                        var $labelWidth$$1$$ = $isRotated$$1$$ ? $dvt$$1$$.$TextUtils$.$getTextHeight$($label$$26$$) : $dvt$$1$$.$TextUtils$.$getTextWidth$($label$$26$$)
                      }
                      $maxDims_x1$$4$$ = $isFirstLabel$$ && 0 == $prevLabelEmpty$$ ? $DvtAxisKeyboardHandler$$.$getStartCoord$() : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($start$$27_x4$$ - $startOffset$$);
                      $nextLabel_prevLabelRendered$$ = $DvtAxisKeyboardHandler$$.$getLabelAt$($index$$107$$ + 1, $level$$14$$);
                      $x2$$2$$ = $isLastLabel_spacing$$1$$ && $nextLabel_prevLabelRendered$$ && 0 < $nextLabel_prevLabelRendered$$.length ? $DvtAxisKeyboardHandler$$.$getEndCoord$() : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($drawLeftLine_end$$9$$ + $DvtAxisEventManager$$);
                      $x3_y1$$3$$ = $label$$26$$ ? $isRTL$$3$$ ? $label$$26$$.$getX$() + .5 * $labelWidth$$1$$ : $label$$26$$.$getX$() - .5 * $labelWidth$$1$$ : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($drawLeftLine_end$$9$$ + $DvtAxisEventManager$$);
                      $start$$27_x4$$ = $label$$26$$ ? $isRTL$$3$$ ? $label$$26$$.$getX$() - .5 * $labelWidth$$1$$ : $label$$26$$.$getX$() + .5 * $labelWidth$$1$$ : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($start$$27_x4$$ - $startOffset$$);
                      $label$$26$$ && ($isRotated$$1$$ ? $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$, $x2$$2$$, $y2$$1_yCoord$$) : ($isLastLabel_spacing$$1$$ = $isRTL$$3$$ ? .5 * -$dvt$$1$$.$TextUtils$.$getTextHeight$($label$$26$$) : .5 * $dvt$$1$$.$TextUtils$.$getTextHeight$($label$$26$$), $drawLeftLine_end$$9$$ = $isRTL$$3$$ ? $start$$27_x4$$ + $isLastLabel_spacing$$1$$ > $x2$$2$$ : $start$$27_x4$$ + $isLastLabel_spacing$$1$$ < $x2$$2$$, 
                      ($isRTL$$3$$ ? $maxDims_x1$$4$$ > $x3_y1$$3$$ - $isLastLabel_spacing$$1$$ : $maxDims_x1$$4$$ < $x3_y1$$3$$ - $isLastLabel_spacing$$1$$) && $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$, $x3_y1$$3$$ - $isLastLabel_spacing$$1$$, $y2$$1_yCoord$$), $drawLeftLine_end$$9$$ && $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $start$$27_x4$$ + $isLastLabel_spacing$$1$$, $y2$$1_yCoord$$, $x2$$2$$, $y2$$1_yCoord$$)));
                    }
                  } else {
                    $label$$26$$ && ($maxDims_x1$$4$$ = $isRTL$$3$$ ? $label$$26$$.$getX$() - $levelSize$$ - .5 * $DvtAxisAutomation$$ : $label$$26$$.$getX$() + .5 * $DvtAxisAutomation$$, $x3_y1$$3$$ = $DvtAxisKeyboardHandler$$.$getCoordAt$($start$$27_x4$$ - $startOffset$$), $x2$$2$$ = $isRTL$$3$$ ? $label$$26$$.$getX$() + .5 * $DvtAxisAutomation$$ : $label$$26$$.$getX$() - $levelSize$$ - .5 * $DvtAxisAutomation$$, $y2$$1_yCoord$$ = $DvtAxisKeyboardHandler$$.$getCoordAt$($drawLeftLine_end$$9$$ + 
                    $DvtAxisEventManager$$), (!$isEmptyLabel$$ && 0 == $nextLabel_prevLabelRendered$$ || 0 == $index$$107$$ && $isEmptyLabel$$ && 0 != $level$$14$$) && null != $x3_y1$$3$$ && $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $maxDims_x1$$4$$, $x3_y1$$3$$, $x2$$2$$, $x3_y1$$3$$), null == $y2$$1_yCoord$$ || $eraseCornerEdge$$ || $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $x2$$2$$, $y2$$1_yCoord$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$)), 
                    $isEmptyLabel$$ || ($x3_y1$$3$$ = $isFirstLabel$$ && 0 == $prevLabelEmpty$$ ? 0 : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($start$$27_x4$$ - $startOffset$$), $nextLabel_prevLabelRendered$$ = $DvtAxisKeyboardHandler$$.$getLabelAt$($index$$107$$ + 1, $level$$14$$), $y2$$1_yCoord$$ = $isLastLabel_spacing$$1$$ && $nextLabel_prevLabelRendered$$ && 0 < $nextLabel_prevLabelRendered$$.length ? $DvtAxisKeyboardHandler$$.$getEndCoord$() : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($drawLeftLine_end$$9$$ + 
                    $DvtAxisEventManager$$), $label$$26$$ && $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $x2$$2$$, $x3_y1$$3$$, $x2$$2$$, $y2$$1_yCoord$$));
                  }
                  $nextLabel_prevLabelRendered$$ = !$isEmptyLabel$$ && null != $label$$26$$;
                  $prevLabelEmpty$$ = null != $label$$26$$ || null == $label$$26$$ && $isEmptyLabel$$;
                }
              }
            }
          }
        }
        $prevLevelSize$$ = $levelSize$$;
      }
    }
  };
  $DvtAxisRenderer$$.$_addSeparatorLine$ = function $$DvtAxisRenderer$$$$_addSeparatorLine$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$, $DvtAxisAutomation$$) {
    $DvtAxisEventManager$$ = new $dvt$$1$$.$Line$($DvtAxisObjPeer$$.$getCtx$(), $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$, $DvtAxisAutomation$$);
    $DvtAxisEventManager$$.$setStroke$($DvtAxisKeyboardHandler$$);
    $DvtAxisEventManager$$.$setPixelHinting$();
    $DvtAxisObjPeer$$.$addChild$($DvtAxisEventManager$$);
  };
  $DvtAxisRenderer$$.$_getGroupAxisPreferredSize$ = function $$DvtAxisRenderer$$$$_getGroupAxisPreferredSize$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisConstants$$, $DvtAxisAutomation$$) {
    var $DvtAxisRenderer$$ = $DvtAxisObjPeer$$.$getCtx$(), $gap$$6_options$$23$$ = $DvtAxisObjPeer$$.$getOptions$();
    $DvtAxisObjPeer$$ = $DvtAxisKeyboardHandler$$.$getNumLevels$();
    for (var $gap$$6_options$$23$$ = 1 < $DvtAxisObjPeer$$ ? $DvtAxisDefaults$$.$getGapSize$($DvtAxisRenderer$$, $gap$$6_options$$23$$, $gap$$6_options$$23$$.layout[$DvtAxisAutomation$$ ? "hierarchicalLabelGapHeight" : "hierarchicalLabelGapWidth"]) : 0, $level$$15$$ = 0;$level$$15$$ < $DvtAxisObjPeer$$;$level$$15$$++) {
      var $labelSize_labels$$7_maxDims$$1$$ = $DvtAxisKeyboardHandler$$.$getLabels$($DvtAxisRenderer$$, $level$$15$$);
      $DvtAxisAutomation$$ ? ($labelSize_labels$$7_maxDims$$1$$ = $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($labelSize_labels$$7_maxDims$$1$$), $labelSize_labels$$7_maxDims$$1$$ = $DvtAxisKeyboardHandler$$.$isLabelRotated$($level$$15$$) ? $labelSize_labels$$7_maxDims$$1$$.$w$ : $labelSize_labels$$7_maxDims$$1$$.$h$) : $labelSize_labels$$7_maxDims$$1$$ = $dvt$$1$$.$TextUtils$.$getMaxTextDimensions$($labelSize_labels$$7_maxDims$$1$$).$w$;
      if ($DvtAxisEventManager$$ + $labelSize_labels$$7_maxDims$$1$$ <= $DvtAxisConstants$$) {
        $DvtAxisEventManager$$ += $labelSize_labels$$7_maxDims$$1$$ + $gap$$6_options$$23$$;
      } else {
        0 == $level$$15$$ && ($DvtAxisEventManager$$ = $DvtAxisConstants$$);
        break;
      }
    }
    0 != $level$$15$$ && ($DvtAxisEventManager$$ -= $gap$$6_options$$23$$);
    return $DvtAxisEventManager$$;
  };
  $dvt$$1$$.$AxisInfo$ = function $$dvt$$1$$$$AxisInfo$$() {
  };
  $dvt$$1$$.$Obj$.$createSubclass$($dvt$$1$$.$AxisInfo$, $dvt$$1$$.$Obj$);
  $dvt$$1$$.$AxisInfo$.newInstance = function $$dvt$$1$$$$AxisInfo$$newInstance$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    return $DvtAxisKeyboardHandler$$.timeAxisType && "disabled" != $DvtAxisKeyboardHandler$$.timeAxisType ? new $dvt$$1$$.$TimeAxisInfo$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) : isNaN($DvtAxisKeyboardHandler$$.dataMin) && isNaN($DvtAxisKeyboardHandler$$.dataMax) ? new $dvt$$1$$.$GroupAxisInfo$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) : new $dvt$$1$$.$DataAxisInfo$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
  };
  $dvt$$1$$.$AxisInfo$.prototype.Init = function $$dvt$$1$$$$AxisInfo$$$Init$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    this.$_context$ = $DvtAxisObjPeer$$;
    this.$Position$ = $DvtAxisKeyboardHandler$$.position;
    this.$_radius$ = $DvtAxisKeyboardHandler$$._radius;
    this.$_title$ = null;
    "top" == this.$Position$ || "bottom" == this.$Position$ ? (this.$StartCoord$ = $DvtAxisEventManager$$.x, this.$EndCoord$ = $DvtAxisEventManager$$.x + $DvtAxisEventManager$$.$w$) : "left" == this.$Position$ || "right" == this.$Position$ ? (this.$StartCoord$ = $DvtAxisEventManager$$.y, this.$EndCoord$ = $DvtAxisEventManager$$.y + $DvtAxisEventManager$$.$h$) : "radial" == this.$Position$ ? (this.$StartCoord$ = 0, this.$EndCoord$ = this.$_radius$) : "tangential" == this.$Position$ && ($dvt$$1$$.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$) ? 
    (this.$StartCoord$ = 2 * Math.PI, this.$EndCoord$ = 0) : (this.$StartCoord$ = 0, this.$EndCoord$ = 2 * Math.PI));
    this.$DataMax$ = this.$DataMin$ = this.$GlobalMax$ = this.$GlobalMin$ = this.$MaxValue$ = this.$MinValue$ = null;
    this.$EndOverflow$ = this.$StartOverflow$ = 0;
    null == $DvtAxisKeyboardHandler$$.leftBuffer && ($DvtAxisKeyboardHandler$$.leftBuffer = Infinity);
    null == $DvtAxisKeyboardHandler$$.rightBuffer && ($DvtAxisKeyboardHandler$$.rightBuffer = Infinity);
    this.$Options$ = $DvtAxisKeyboardHandler$$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getCtx$ = function $$dvt$$1$$$$AxisInfo$$$$getCtx$$() {
    return this.$_context$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getOptions$ = function $$dvt$$1$$$$AxisInfo$$$$getOptions$$() {
    return this.$Options$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getLabels$ = function $$dvt$$1$$$$AxisInfo$$$$getLabels$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getTitle$ = function $$dvt$$1$$$$AxisInfo$$$$getTitle$$() {
    return this.$_title$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$setTitle$ = function $$dvt$$1$$$$AxisInfo$$$$setTitle$$($dvt$$1$$) {
    this.$_title$ = $dvt$$1$$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getMajorTickCoords$ = function $$dvt$$1$$$$AxisInfo$$$$getMajorTickCoords$$() {
    return [];
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getMinorTickCoords$ = function $$dvt$$1$$$$AxisInfo$$$$getMinorTickCoords$$() {
    return [];
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getBaselineCoord$ = function $$dvt$$1$$$$AxisInfo$$$$getBaselineCoord$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getValueAt$ = function $$dvt$$1$$$$AxisInfo$$$$getValueAt$$($dvt$$1$$) {
    if (null == $dvt$$1$$) {
      return null;
    }
    var $DvtAxisObjPeer$$ = Math.max(this.$StartCoord$, this.$EndCoord$);
    return $dvt$$1$$ < Math.min(this.$StartCoord$, this.$EndCoord$) || $dvt$$1$$ > $DvtAxisObjPeer$$ ? null : this.$getUnboundedValueAt$($dvt$$1$$);
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getCoordAt$ = function $$dvt$$1$$$$AxisInfo$$$$getCoordAt$$($dvt$$1$$) {
    return null == $dvt$$1$$ ? null : $dvt$$1$$ < this.$MinValue$ || $dvt$$1$$ > this.$MaxValue$ ? null : this.$getUnboundedCoordAt$($dvt$$1$$);
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getBoundedValueAt$ = function $$dvt$$1$$$$AxisInfo$$$$getBoundedValueAt$$($dvt$$1$$) {
    if (null == $dvt$$1$$) {
      return null;
    }
    var $DvtAxisObjPeer$$ = Math.min(this.$StartCoord$, this.$EndCoord$), $DvtAxisKeyboardHandler$$ = Math.max(this.$StartCoord$, this.$EndCoord$);
    $dvt$$1$$ < $DvtAxisObjPeer$$ ? $dvt$$1$$ = $DvtAxisObjPeer$$ : $dvt$$1$$ > $DvtAxisKeyboardHandler$$ && ($dvt$$1$$ = $DvtAxisKeyboardHandler$$);
    return this.$getUnboundedValueAt$($dvt$$1$$);
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getBoundedCoordAt$ = function $$dvt$$1$$$$AxisInfo$$$$getBoundedCoordAt$$($dvt$$1$$) {
    if (null == $dvt$$1$$) {
      return null;
    }
    $dvt$$1$$ < this.$MinValue$ ? $dvt$$1$$ = this.$MinValue$ : $dvt$$1$$ >= this.$MaxValue$ && ($dvt$$1$$ = this.$MaxValue$);
    return this.$getUnboundedCoordAt$($dvt$$1$$);
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getUnboundedValueAt$ = function $$dvt$$1$$$$AxisInfo$$$$getUnboundedValueAt$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getUnboundedCoordAt$ = function $$dvt$$1$$$$AxisInfo$$$$getUnboundedCoordAt$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getDatatip$ = function $$dvt$$1$$$$AxisInfo$$$$getDatatip$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getAction$ = function $$dvt$$1$$$$AxisInfo$$$$getAction$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$isDrillable$ = function $$dvt$$1$$$$AxisInfo$$$$isDrillable$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getBaselineCoord$ = function $$dvt$$1$$$$AxisInfo$$$$getBaselineCoord$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$isLabelRotated$ = function $$dvt$$1$$$$AxisInfo$$$$isLabelRotated$$() {
    return !1;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$CreateLabel$ = function $$dvt$$1$$$$AxisInfo$$$$CreateLabel$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$) {
    if ("tangential" == this.$Position$) {
      $DvtAxisConstants$$ = 16 / 180 * Math.PI;
      var $DvtAxisAutomation$$ = 1 / 180 * Math.PI, $DvtAxisRenderer$$ = .5 * this.$getTickLabelHeight$(), $dist_ycoord$$ = this.$_radius$ + $DvtAxisRenderer$$;
      if ($DvtAxisEventManager$$ < $DvtAxisAutomation$$ || $DvtAxisEventManager$$ > 2 * Math.PI - $DvtAxisAutomation$$) {
        $dist_ycoord$$ += $DvtAxisRenderer$$;
      }
      $DvtAxisRenderer$$ = Math.round($dist_ycoord$$ * Math.sin($DvtAxisEventManager$$));
      $dist_ycoord$$ = Math.round(-$dist_ycoord$$ * Math.cos($DvtAxisEventManager$$));
      $DvtAxisObjPeer$$ = $DvtAxisDefaults$$ ? new $dvt$$1$$.$BackgroundOutputText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisRenderer$$, $dist_ycoord$$, $DvtAxisDefaults$$) : new $dvt$$1$$.$OutputText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisRenderer$$, $dist_ycoord$$);
      $DvtAxisEventManager$$ < $DvtAxisAutomation$$ || Math.abs($DvtAxisEventManager$$ - Math.PI) < $DvtAxisAutomation$$ || $DvtAxisEventManager$$ > 2 * Math.PI - $DvtAxisAutomation$$ ? $DvtAxisObjPeer$$.$alignCenter$() : $DvtAxisEventManager$$ < Math.PI ? $DvtAxisObjPeer$$.$alignLeft$() : $DvtAxisObjPeer$$.$alignRight$();
      Math.abs($DvtAxisEventManager$$ - Math.PI / 2) < $DvtAxisConstants$$ || Math.abs($DvtAxisEventManager$$ - 3 * Math.PI / 2) < $DvtAxisConstants$$ ? $DvtAxisObjPeer$$.$alignMiddle$() : $DvtAxisEventManager$$ < Math.PI / 2 || $DvtAxisEventManager$$ > 3 * Math.PI / 2 ? $DvtAxisObjPeer$$.$alignBottom$() : $DvtAxisObjPeer$$.$alignTop$();
    } else {
      $DvtAxisConstants$$ ? $DvtAxisObjPeer$$ = $DvtAxisDefaults$$ ? new $dvt$$1$$.$BackgroundMultilineText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) : new $dvt$$1$$.$MultilineText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisEventManager$$) : ($DvtAxisObjPeer$$ = $DvtAxisDefaults$$ ? new $dvt$$1$$.$BackgroundOutputText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisEventManager$$, 
      $DvtAxisDefaults$$) : new $dvt$$1$$.$OutputText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisEventManager$$), $DvtAxisObjPeer$$.$alignMiddle$()), $DvtAxisObjPeer$$.$alignCenter$();
    }
    ($DvtAxisObjPeer$$ instanceof $dvt$$1$$.$OutputText$ || $DvtAxisObjPeer$$ instanceof $dvt$$1$$.$MultilineText$) && $DvtAxisObjPeer$$.$setCSSStyle$(this.$Options$.tickLabel.style);
    return $DvtAxisObjPeer$$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$IsOverlapping$ = function $$dvt$$1$$$$AxisInfo$$$$IsOverlapping$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if (!$DvtAxisObjPeer$$ || 0 >= $DvtAxisObjPeer$$.length) {
      return !1;
    }
    for (var $DvtAxisEventManager$$ = "left" == this.$Position$ || "right" == this.$Position$ || "radial" == this.$Position$, $DvtAxisDefaults$$ = $dvt$$1$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtAxisConstants$$ = this.$GetTickLabelGapSize$(), $DvtAxisAutomation$$, $DvtAxisRenderer$$, $pointB1$$, $pointB2$$, $j$$31$$ = 0;$j$$31$$ < $DvtAxisObjPeer$$.length;$j$$31$$ += $DvtAxisKeyboardHandler$$ + 1) {
      if (null != $DvtAxisObjPeer$$[$j$$31$$]) {
        if (null == $DvtAxisAutomation$$ || null == $DvtAxisRenderer$$) {
          $DvtAxisEventManager$$ ? ($DvtAxisAutomation$$ = $DvtAxisObjPeer$$[$j$$31$$].y, $DvtAxisRenderer$$ = $DvtAxisObjPeer$$[$j$$31$$].y + $DvtAxisObjPeer$$[$j$$31$$].$h$) : ($DvtAxisAutomation$$ = $DvtAxisObjPeer$$[$j$$31$$].x, $DvtAxisRenderer$$ = $DvtAxisObjPeer$$[$j$$31$$].x + $DvtAxisObjPeer$$[$j$$31$$].$w$);
        } else {
          if ($DvtAxisEventManager$$) {
            if ($pointB1$$ = $DvtAxisObjPeer$$[$j$$31$$].y, $pointB2$$ = $DvtAxisObjPeer$$[$j$$31$$].y + $DvtAxisObjPeer$$[$j$$31$$].$h$, $pointB1$$ >= $DvtAxisAutomation$$ && $pointB1$$ - $DvtAxisConstants$$ < $DvtAxisRenderer$$ || $pointB1$$ < $DvtAxisAutomation$$ && $pointB2$$ + $DvtAxisConstants$$ > $DvtAxisAutomation$$) {
              return !0;
            }
          } else {
            if ($pointB1$$ = $DvtAxisObjPeer$$[$j$$31$$].x, $pointB2$$ = $DvtAxisObjPeer$$[$j$$31$$].x + $DvtAxisObjPeer$$[$j$$31$$].$w$, !$DvtAxisDefaults$$ && $pointB1$$ - $DvtAxisConstants$$ < $DvtAxisRenderer$$ || $DvtAxisDefaults$$ && $pointB2$$ + $DvtAxisConstants$$ > $DvtAxisAutomation$$) {
              return !0;
            }
          }
          $DvtAxisAutomation$$ = $pointB1$$;
          $DvtAxisRenderer$$ = $pointB2$$;
        }
      }
    }
    return !1;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$IsOverlappingDims$ = function $$dvt$$1$$$$AxisInfo$$$$IsOverlappingDims$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    if (!$dvt$$1$$ || !$DvtAxisObjPeer$$) {
      return !1;
    }
    var $DvtAxisKeyboardHandler$$ = $dvt$$1$$.y, $DvtAxisEventManager$$ = $dvt$$1$$.y + $dvt$$1$$.$h$, $DvtAxisDefaults$$ = $dvt$$1$$.x, $DvtAxisConstants$$ = $dvt$$1$$.x + $dvt$$1$$.$w$, $DvtAxisAutomation$$ = $DvtAxisObjPeer$$.y, $DvtAxisRenderer$$ = $DvtAxisObjPeer$$.y + $DvtAxisObjPeer$$.$h$, $pointB3$$ = $DvtAxisObjPeer$$.x, $pointB4$$ = $DvtAxisObjPeer$$.x + $DvtAxisObjPeer$$.$w$;
    return ($DvtAxisDefaults$$ <= $pointB3$$ && $pointB3$$ <= $DvtAxisConstants$$ || $DvtAxisDefaults$$ <= $pointB4$$ && $pointB4$$ <= $DvtAxisConstants$$ || $pointB3$$ <= $DvtAxisDefaults$$ && $DvtAxisDefaults$$ <= $pointB4$$ || $pointB3$$ <= $DvtAxisConstants$$ && $DvtAxisConstants$$ <= $pointB4$$) && ($DvtAxisAutomation$$ >= $DvtAxisKeyboardHandler$$ && $DvtAxisAutomation$$ < $DvtAxisEventManager$$ || $DvtAxisAutomation$$ <= $DvtAxisKeyboardHandler$$ && $DvtAxisRenderer$$ >= $DvtAxisKeyboardHandler$$);
  };
  $dvt$$1$$.$AxisInfo$.prototype.$GetTickLabelGapSize$ = function $$dvt$$1$$$$AxisInfo$$$$GetTickLabelGapSize$$() {
    var $DvtAxisObjPeer$$ = this.$getTickLabelHeight$(), $DvtAxisKeyboardHandler$$ = this instanceof $dvt$$1$$.$GroupAxisInfo$ ? .24 * $DvtAxisObjPeer$$ : .79 * $DvtAxisObjPeer$$, $DvtAxisObjPeer$$ = this instanceof $dvt$$1$$.$GroupAxisInfo$ ? .08 * $DvtAxisObjPeer$$ : .28 * $DvtAxisObjPeer$$;
    return "left" == this.$Position$ || "right" == this.$Position$ || "radial" == this.$Position$ || this.$isLabelRotated$() ? $DvtAxisObjPeer$$ : $DvtAxisKeyboardHandler$$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getTickLabelHeight$ = function $$dvt$$1$$$$AxisInfo$$$$getTickLabelHeight$$() {
    return $dvt$$1$$.$TextUtils$.$getTextStringHeight$(this.$getCtx$(), this.$Options$.tickLabel.style);
  };
  $dvt$$1$$.$AxisInfo$.prototype.$SkipLabels$ = function $$dvt$$1$$$$AxisInfo$$$$SkipLabels$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    for (var $DvtAxisKeyboardHandler$$ = 0, $DvtAxisEventManager$$ = this.$IsOverlapping$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$);$DvtAxisEventManager$$;) {
      $DvtAxisKeyboardHandler$$++, $DvtAxisEventManager$$ = this.$IsOverlapping$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$);
    }
    if (0 < $DvtAxisKeyboardHandler$$) {
      for (var $DvtAxisEventManager$$ = [], $DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ < $dvt$$1$$.length;$DvtAxisDefaults$$ += $DvtAxisKeyboardHandler$$ + 1) {
        $DvtAxisEventManager$$.push($dvt$$1$$[$DvtAxisDefaults$$]);
      }
      return $DvtAxisEventManager$$;
    }
    return $dvt$$1$$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$SkipTangentialLabels$ = function $$dvt$$1$$$$AxisInfo$$$$SkipTangentialLabels$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = [], $DvtAxisEventManager$$ = $dvt$$1$$.length, $DvtAxisDefaults$$ = null;
    if (1 < $DvtAxisEventManager$$) {
      for (var $DvtAxisConstants$$, $DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ < $DvtAxisEventManager$$;$DvtAxisAutomation$$++) {
        $DvtAxisObjPeer$$[$DvtAxisAutomation$$] && (!$DvtAxisConstants$$ || $DvtAxisConstants$$ && !this.$IsOverlappingDims$($DvtAxisConstants$$, $DvtAxisObjPeer$$[$DvtAxisAutomation$$])) && ($DvtAxisDefaults$$ || ($DvtAxisDefaults$$ = $DvtAxisObjPeer$$[$DvtAxisAutomation$$]), $DvtAxisKeyboardHandler$$.push($dvt$$1$$[$DvtAxisAutomation$$]), $DvtAxisConstants$$ = $DvtAxisObjPeer$$[$DvtAxisAutomation$$]);
      }
      this.$IsOverlappingDims$($DvtAxisConstants$$, $DvtAxisDefaults$$) && $DvtAxisKeyboardHandler$$.pop();
      return $DvtAxisKeyboardHandler$$;
    }
    return $dvt$$1$$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$GetLabelDims$ = function $$dvt$$1$$$$AxisInfo$$$$GetLabelDims$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    for (var $DvtAxisKeyboardHandler$$ = [], $DvtAxisEventManager$$ = 0;$DvtAxisEventManager$$ < $dvt$$1$$.length;$DvtAxisEventManager$$++) {
      var $DvtAxisDefaults$$ = $dvt$$1$$[$DvtAxisEventManager$$];
      null == $DvtAxisDefaults$$ ? $DvtAxisKeyboardHandler$$.push(null) : ($DvtAxisDefaults$$ = $DvtAxisDefaults$$.$measureDimensions$($DvtAxisObjPeer$$), $DvtAxisDefaults$$.$w$ && $DvtAxisDefaults$$.$h$ ? $DvtAxisKeyboardHandler$$.push($DvtAxisDefaults$$) : $DvtAxisKeyboardHandler$$.push(null));
    }
    return $DvtAxisKeyboardHandler$$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$GuessLabelDims$ = function $$dvt$$1$$$$AxisInfo$$$$GuessLabelDims$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    var $DvtAxisConstants$$ = [];
    "undefined" == typeof $DvtAxisEventManager$$ && ($DvtAxisEventManager$$ = 1);
    for (var $DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ < $DvtAxisObjPeer$$.length;$DvtAxisAutomation$$++) {
      var $DvtAxisRenderer$$ = $DvtAxisObjPeer$$[$DvtAxisAutomation$$];
      if (null == $DvtAxisRenderer$$) {
        $DvtAxisConstants$$.push(null);
      } else {
        $DvtAxisKeyboardHandler$$.$addChild$($DvtAxisRenderer$$);
        var $estH_estimatedSize$$ = $dvt$$1$$.$TextUtils$.$guessTextDimensions$($DvtAxisRenderer$$), $estW$$ = $estH_estimatedSize$$.$w$ * $DvtAxisEventManager$$, $estH_estimatedSize$$ = $estH_estimatedSize$$.$h$;
        $DvtAxisKeyboardHandler$$.removeChild($DvtAxisRenderer$$);
        $DvtAxisRenderer$$ = this.$isLabelRotated$($DvtAxisDefaults$$) ? new $dvt$$1$$.$Rectangle$($DvtAxisRenderer$$.$getTranslateX$() - $estH_estimatedSize$$ / 2, $DvtAxisRenderer$$.$getTranslateY$() - $estW$$ / 2, $estH_estimatedSize$$, $estW$$) : new $dvt$$1$$.$Rectangle$($DvtAxisRenderer$$.$getX$() - $estW$$ / 2, $DvtAxisRenderer$$.$getY$() - $estH_estimatedSize$$ / 2, $estW$$, $estH_estimatedSize$$);
        $DvtAxisConstants$$.push($DvtAxisRenderer$$);
      }
    }
    return $DvtAxisConstants$$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getMajorTickCount$ = function $$dvt$$1$$$$AxisInfo$$$$getMajorTickCount$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getMinorTickCount$ = function $$dvt$$1$$$$AxisInfo$$$$getMinorTickCount$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getMajorIncrement$ = function $$dvt$$1$$$$AxisInfo$$$$getMajorIncrement$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getMinimumExtent$ = function $$dvt$$1$$$$AxisInfo$$$$getMinimumExtent$$() {
    return 0;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getStartCoord$ = function $$dvt$$1$$$$AxisInfo$$$$getStartCoord$$() {
    return this.$StartCoord$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getEndCoord$ = function $$dvt$$1$$$$AxisInfo$$$$getEndCoord$$() {
    return this.$EndCoord$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getStartOverflow$ = function $$dvt$$1$$$$AxisInfo$$$$getStartOverflow$$() {
    return this.$StartOverflow$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getEndOverflow$ = function $$dvt$$1$$$$AxisInfo$$$$getEndOverflow$$() {
    return this.$EndOverflow$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getGroupWidth$ = function $$dvt$$1$$$$AxisInfo$$$$getGroupWidth$$() {
    return 0;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$getGroup$ = function $$dvt$$1$$$$AxisInfo$$$$getGroup$$() {
    return null;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$linearToActual$ = function $$dvt$$1$$$$AxisInfo$$$$linearToActual$$($dvt$$1$$) {
    return $dvt$$1$$;
  };
  $dvt$$1$$.$AxisInfo$.prototype.$actualToLinear$ = function $$dvt$$1$$$$AxisInfo$$$$actualToLinear$$($dvt$$1$$) {
    return $dvt$$1$$;
  };
  $dvt$$1$$.$DataAxisInfo$ = function $$dvt$$1$$$$DataAxisInfo$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    this.Init($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$);
  };
  $dvt$$1$$.$Obj$.$createSubclass$($dvt$$1$$.$DataAxisInfo$, $dvt$$1$$.$AxisInfo$);
  $dvt$$1$$.$DataAxisInfo$.$_MAX_NUMBER_OF_GRIDS_AUTO$ = 10;
  $dvt$$1$$.$DataAxisInfo$.$_MINOR_TICK_COUNT$ = 2;
  $dvt$$1$$.$DataAxisInfo$.$_MAX_ZOOM_FACTOR$ = 64;
  $dvt$$1$$.$DataAxisInfo$.prototype.Init = function $$dvt$$1$$$$DataAxisInfo$$$Init$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    $dvt$$1$$.$DataAxisInfo$.$superclass$.Init.call(this, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    "top" == this.$Position$ || "bottom" == this.$Position$ ? ("off" != $DvtAxisKeyboardHandler$$.tickLabel.rendered && "off" != $DvtAxisKeyboardHandler$$.rendered && (this.$StartOverflow$ = Math.max($dvt$$1$$.$Axis$.$MINIMUM_AXIS_BUFFER$ - $DvtAxisKeyboardHandler$$.leftBuffer, 0), this.$EndOverflow$ = Math.max($dvt$$1$$.$Axis$.$MINIMUM_AXIS_BUFFER$ - $DvtAxisKeyboardHandler$$.rightBuffer, 0)), $dvt$$1$$.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$) ? (this.$_minCoord$ = this.$EndCoord$ - this.$EndOverflow$, 
    this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : "tangential" == this.$Position$ || "radial" == this.$Position$ ? (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$) : (this.$_minCoord$ = this.$EndCoord$, this.$_maxCoord$ = this.$StartCoord$);
    this.$DataMin$ = $DvtAxisKeyboardHandler$$.dataMin;
    this.$DataMax$ = $DvtAxisKeyboardHandler$$.dataMax;
    this.$_isLog$ = "log" == $DvtAxisKeyboardHandler$$.scale && 0 < this.$DataMin$ && 0 < this.$DataMax$;
    this.$_globalMin$ = this.$actualToLinear$($DvtAxisKeyboardHandler$$.min);
    this.$_globalMax$ = this.$actualToLinear$($DvtAxisKeyboardHandler$$.max);
    this.$_minValue$ = null == $DvtAxisKeyboardHandler$$.viewportMin ? this.$_globalMin$ : this.$actualToLinear$($DvtAxisKeyboardHandler$$.viewportMin);
    this.$_maxValue$ = null == $DvtAxisKeyboardHandler$$.viewportMax ? this.$_globalMax$ : this.$actualToLinear$($DvtAxisKeyboardHandler$$.viewportMax);
    this.$_dataMin$ = this.$actualToLinear$(this.$DataMin$);
    this.$_dataMax$ = this.$actualToLinear$(this.$DataMax$);
    this.$_majorIncrement$ = this.$actualToLinear$($DvtAxisKeyboardHandler$$.step);
    this.$_minorIncrement$ = this.$actualToLinear$($DvtAxisKeyboardHandler$$.minorStep);
    this.$_minMajorIncrement$ = this.$actualToLinear$($DvtAxisKeyboardHandler$$.minStep);
    this.$_majorTickCount$ = $DvtAxisKeyboardHandler$$._majorTickCount;
    this.$_minorTickCount$ = $DvtAxisKeyboardHandler$$._minorTickCount;
    this.$_zeroBaseline$ = !this.$_isLog$ && "zero" == $DvtAxisKeyboardHandler$$.baselineScaling;
    this.$_converter$ = null;
    null != $DvtAxisKeyboardHandler$$.tickLabel && (this.$_converter$ = $DvtAxisKeyboardHandler$$.tickLabel.converter);
    this.$_calcAxisExtents$();
    this.$GlobalMin$ = this.$linearToActual$(this.$_globalMin$);
    this.$GlobalMax$ = this.$linearToActual$(this.$_globalMax$);
    this.$MinValue$ = this.$linearToActual$(this.$_minValue$);
    this.$MaxValue$ = this.$linearToActual$(this.$_maxValue$);
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getMinLabel$ = function $$dvt$$1$$$$DataAxisInfo$$$$getMinLabel$$() {
    return this.$_zeroBaseline$ || "on" == this.$Options$._continuousExtent && null == this.$Options$.min ? Math.ceil(this.$_minValue$ / this.$_majorIncrement$) * this.$_majorIncrement$ : Math.ceil((this.$_minValue$ - this.$_globalMin$) / this.$_majorIncrement$) * this.$_majorIncrement$ + this.$_globalMin$;
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getLabels$ = function $$dvt$$1$$$$DataAxisInfo$$$$getLabels$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if ($DvtAxisKeyboardHandler$$ && 0 < $DvtAxisKeyboardHandler$$) {
      return null;
    }
    var $DvtAxisEventManager$$ = [], $DvtAxisDefaults$$ = [], $DvtAxisDefaults$$ = $DvtAxisObjPeer$$.$_stage$;
    if (this.$Options$.tickLabel && this.$Options$.tickLabel.scaling) {
      var $DvtAxisConstants$$ = this.$Options$.tickLabel.autoPrecision ? this.$Options$.tickLabel.autoPrecision : "on";
      this.$_axisValueFormatter$ = new $dvt$$1$$.$LinearScaleAxisValueFormatter$($DvtAxisObjPeer$$, this.$_minValue$, this.$_maxValue$, this.$_majorIncrement$, this.$Options$.tickLabel.scaling, $DvtAxisConstants$$);
    }
    for (var $DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ <= this.$_majorTickCount$;$DvtAxisAutomation$$++) {
      var $DvtAxisRenderer$$ = $DvtAxisAutomation$$ * this.$_majorIncrement$ + this.$getMinLabel$();
      if ($DvtAxisRenderer$$ > this.$_maxValue$) {
        break;
      }
      var $coord$$4_text$$42$$ = this.$_getUnboundedCoordAt$($DvtAxisRenderer$$);
      if (this.$Options$._skipHighestTick) {
        if ($DvtAxisRenderer$$ == this.$_maxValue$) {
          continue;
        }
        if ("tangential" != this.$Position$ && Math.abs($coord$$4_text$$42$$ - this.$_maxCoord$) < this.$getTickLabelHeight$()) {
          continue;
        }
      }
      this.$_isLog$ && ($DvtAxisRenderer$$ = this.$linearToActual$($DvtAxisRenderer$$), this.$_axisValueFormatter$ = new $dvt$$1$$.$LinearScaleAxisValueFormatter$($DvtAxisObjPeer$$, $DvtAxisRenderer$$, $DvtAxisRenderer$$, $DvtAxisRenderer$$, this.$Options$.tickLabel.scaling, $DvtAxisConstants$$));
      $DvtAxisRenderer$$ = this.$_formatValue$($DvtAxisRenderer$$);
      $coord$$4_text$$42$$ = this.$CreateLabel$($DvtAxisObjPeer$$, $DvtAxisRenderer$$, $coord$$4_text$$42$$);
      $DvtAxisEventManager$$.push($coord$$4_text$$42$$);
    }
    "tangential" != this.$Position$ && ($DvtAxisDefaults$$ = this.$GetLabelDims$($DvtAxisEventManager$$, $DvtAxisDefaults$$), $DvtAxisEventManager$$ = this.$SkipLabels$($DvtAxisEventManager$$, $DvtAxisDefaults$$));
    return $DvtAxisEventManager$$;
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getMajorTickCoords$ = function $$dvt$$1$$$$DataAxisInfo$$$$getMajorTickCoords$$() {
    for (var $dvt$$1$$ = [], $DvtAxisObjPeer$$ = 0;$DvtAxisObjPeer$$ <= this.$_majorTickCount$;$DvtAxisObjPeer$$++) {
      var $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$ * this.$_majorIncrement$ + this.$getMinLabel$();
      if ($DvtAxisKeyboardHandler$$ > this.$_maxValue$) {
        break;
      }
      this.$Options$._skipHighestTick && $DvtAxisKeyboardHandler$$ == this.$_maxValue$ || $dvt$$1$$.push(this.$_getUnboundedCoordAt$($DvtAxisKeyboardHandler$$));
    }
    return $dvt$$1$$;
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getMinorTickCoords$ = function $$dvt$$1$$$$DataAxisInfo$$$$getMinorTickCoords$$() {
    for (var $DvtAxisObjPeer$$ = [], $DvtAxisKeyboardHandler$$ = -1;$DvtAxisKeyboardHandler$$ <= this.$_majorTickCount$;$DvtAxisKeyboardHandler$$++) {
      var $DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$ * this.$_majorIncrement$ + this.$getMinLabel$();
      if (this.$_isLog$ && 1 == this.$_majorIncrement$ && 1 == this.$_minorIncrement$) {
        for (var $DvtAxisDefaults$$ = 2;9 >= $DvtAxisDefaults$$;$DvtAxisDefaults$$++) {
          var $DvtAxisConstants$$ = $DvtAxisEventManager$$ + $dvt$$1$$.Math.log10($DvtAxisDefaults$$);
          if ($DvtAxisConstants$$ > this.$_maxValue$) {
            break;
          }
          $DvtAxisConstants$$ < this.$_minValue$ || ($DvtAxisConstants$$ = this.$_getUnboundedCoordAt$($DvtAxisConstants$$), $DvtAxisObjPeer$$.push($DvtAxisConstants$$));
        }
      } else {
        for ($DvtAxisDefaults$$ = 1;$DvtAxisDefaults$$ < this.$_minorTickCount$;$DvtAxisDefaults$$++) {
          $DvtAxisConstants$$ = $DvtAxisEventManager$$ + $DvtAxisDefaults$$ * this.$_minorIncrement$;
          if ($DvtAxisConstants$$ > this.$_maxValue$) {
            break;
          }
          $DvtAxisConstants$$ < this.$_minValue$ || ($DvtAxisConstants$$ = this.$_getUnboundedCoordAt$($DvtAxisConstants$$), $DvtAxisObjPeer$$.push($DvtAxisConstants$$));
        }
      }
    }
    return $DvtAxisObjPeer$$;
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getBaselineCoord$ = function $$dvt$$1$$$$DataAxisInfo$$$$getBaselineCoord$$() {
    return this.$_isLog$ ? this.$_minCoord$ : this.$getBoundedCoordAt$(0);
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getUnboundedValueAt$ = function $$dvt$$1$$$$DataAxisInfo$$$$getUnboundedValueAt$$($dvt$$1$$) {
    return null == $dvt$$1$$ ? null : this.$linearToActual$(this.$_minValue$ + ($dvt$$1$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$_maxValue$ - this.$_minValue$));
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getUnboundedCoordAt$ = function $$dvt$$1$$$$DataAxisInfo$$$$getUnboundedCoordAt$$($dvt$$1$$) {
    return this.$_getUnboundedCoordAt$(this.$actualToLinear$($dvt$$1$$));
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$_getUnboundedCoordAt$ = function $$dvt$$1$$$$DataAxisInfo$$$$_getUnboundedCoordAt$$($dvt$$1$$) {
    return null == $dvt$$1$$ ? null : this.$_minCoord$ + ($dvt$$1$$ - this.$_minValue$) / (this.$_maxValue$ - this.$_minValue$) * (this.$_maxCoord$ - this.$_minCoord$);
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$_formatValue$ = function $$dvt$$1$$$$DataAxisInfo$$$$_formatValue$$($DvtAxisObjPeer$$) {
    if (this.$_converter$ && (this.$_converter$.getAsString || this.$_converter$.format)) {
      if (this.$_axisValueFormatter$) {
        return this.$_axisValueFormatter$.format($DvtAxisObjPeer$$, this.$_converter$);
      }
      if (this.$_converter$.getAsString) {
        return this.$_converter$.getAsString($DvtAxisObjPeer$$);
      }
      if (this.$_converter$.format) {
        return this.$_converter$.format($DvtAxisObjPeer$$);
      }
    } else {
      return this.$_axisValueFormatter$ ? this.$_axisValueFormatter$.format($DvtAxisObjPeer$$) : $DvtAxisObjPeer$$.toFixed(Math.max(Math.ceil(-$dvt$$1$$.Math.log10(this.$_majorIncrement$)), 0));
    }
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$_calcMajorMinorIncr$ = function $$dvt$$1$$$$DataAxisInfo$$$$_calcMajorMinorIncr$$($DvtAxisObjPeer$$) {
    this.$_majorIncrement$ || (this.$_majorIncrement$ = this.$_majorTickCount$ ? (this.$_maxValue$ - this.$_minValue$) / this.$_majorTickCount$ : Math.max($DvtAxisObjPeer$$, this.$_minMajorIncrement$));
    this.$_majorTickCount$ || (this.$_majorTickCount$ = (this.$_maxValue$ - this.$_minValue$) / this.$_majorIncrement$);
    this.$_minorTickCount$ || (this.$_minorTickCount$ = this.$_minorIncrement$ ? this.$_majorIncrement$ / this.$_minorIncrement$ : this.$_isLog$ ? this.$_majorIncrement$ : $dvt$$1$$.$DataAxisInfo$.$_MINOR_TICK_COUNT$);
    this.$_minorIncrement$ || (this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$);
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$_calcAxisExtents$ = function $$dvt$$1$$$$DataAxisInfo$$$$_calcAxisExtents$$() {
    var $DvtAxisObjPeer$$ = "on" == this.$Options$._continuousExtent;
    this.$_zeroBaseline$ && (this.$_dataMin$ = Math.min(0, this.$_dataMin$), this.$_dataMax$ = Math.max(0, this.$_dataMax$));
    var $DvtAxisKeyboardHandler$$ = this.$_calcAxisScale$(null != this.$_globalMin$ ? this.$_globalMin$ : this.$_dataMin$, null != this.$_globalMax$ ? this.$_globalMax$ : this.$_dataMax$);
    this.$_dataMin$ == this.$_dataMax$ && (0 == this.$_dataMin$ ? this.$_dataMax$ += 5 * $DvtAxisKeyboardHandler$$ : (this.$_dataMin$ -= 2 * $DvtAxisKeyboardHandler$$, this.$_dataMax$ += 2 * $DvtAxisKeyboardHandler$$));
    if (null == this.$_globalMin$) {
      if (this.$_zeroBaseline$ && 0 <= this.$_dataMin$) {
        this.$_globalMin$ = 0;
      } else {
        if ($DvtAxisObjPeer$$) {
          this.$_globalMin$ = this.$_dataMin$ - .1 * (this.$_dataMax$ - this.$_dataMin$);
        } else {
          if (this.$_zeroBaseline$ || null == this.$_globalMax$) {
            this.$_globalMin$ = (Math.ceil(this.$_dataMin$ / $DvtAxisKeyboardHandler$$) - 1) * $DvtAxisKeyboardHandler$$;
          } else {
            for (this.$_globalMin$ = this.$_globalMax$;this.$_globalMin$ >= this.$_dataMin$;) {
              this.$_globalMin$ -= $DvtAxisKeyboardHandler$$;
            }
          }
        }
      }
      0 <= this.$_dataMin$ && (this.$_globalMin$ = Math.max(this.$_globalMin$, 0));
    }
    if (null == this.$_globalMax$) {
      if (this.$_majorTickCount$) {
        this.$_globalMax$ = this.$_globalMin$ + this.$_majorTickCount$ * $DvtAxisKeyboardHandler$$;
      } else {
        if (this.$_zeroBaseline$ && 0 >= this.$_dataMax$) {
          this.$_globalMax$ = 0;
        } else {
          if ($DvtAxisObjPeer$$) {
            this.$_globalMax$ = this.$_dataMax$ + .1 * (this.$_dataMax$ - this.$_dataMin$);
          } else {
            if (this.$_zeroBaseline$) {
              this.$_globalMax$ = (Math.floor(this.$_dataMax$ / $DvtAxisKeyboardHandler$$) + 1) * $DvtAxisKeyboardHandler$$;
            } else {
              for (this.$_globalMax$ = this.$_globalMin$;this.$_globalMax$ <= this.$_dataMax$;) {
                this.$_globalMax$ += $DvtAxisKeyboardHandler$$;
              }
            }
          }
        }
      }
      0 >= this.$_dataMax$ && (this.$_globalMax$ = Math.min(this.$_globalMax$, 0));
    }
    this.$_globalMax$ == this.$_globalMin$ && (this.$_globalMax$ = 100, this.$_globalMin$ = 0, $DvtAxisKeyboardHandler$$ = (this.$_globalMax$ - this.$_globalMin$) / $dvt$$1$$.$DataAxisInfo$.$_MAX_NUMBER_OF_GRIDS_AUTO$);
    null == this.$_minValue$ && (this.$_minValue$ = this.$_globalMin$);
    null == this.$_maxValue$ && (this.$_maxValue$ = this.$_globalMax$);
    if (this.$_minValue$ != this.$_globalMin$ || this.$_maxValue$ != this.$_globalMax$) {
      $DvtAxisKeyboardHandler$$ = this.$_calcAxisScale$(this.$_minValue$, this.$_maxValue$);
    }
    this.$_globalMin$ > this.$_minValue$ && (this.$_globalMin$ = this.$_minValue$);
    this.$_globalMax$ < this.$_maxValue$ && (this.$_globalMax$ = this.$_maxValue$);
    this.$_calcMajorMinorIncr$($DvtAxisKeyboardHandler$$);
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$_calcAxisScale$ = function $$dvt$$1$$$$DataAxisInfo$$$$_calcAxisScale$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if (this.$_majorIncrement$) {
      return this.$_majorIncrement$;
    }
    var $DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$ - $DvtAxisObjPeer$$;
    if (this.$_isLog$) {
      return Math.floor($DvtAxisEventManager$$ / 8) + 1;
    }
    if (0 == $DvtAxisEventManager$$) {
      return 0 == $DvtAxisObjPeer$$ ? 10 : Math.pow(10, Math.floor($dvt$$1$$.Math.log10($DvtAxisObjPeer$$)) - 1);
    }
    if (this.$_majorTickCount$) {
      var $DvtAxisEventManager$$ = $DvtAxisEventManager$$ / this.$_majorTickCount$, $DvtAxisDefaults$$ = Math.pow(10, Math.ceil($dvt$$1$$.Math.log10($DvtAxisEventManager$$) - 1)), $DvtAxisEventManager$$ = $DvtAxisEventManager$$ / $DvtAxisDefaults$$, $DvtAxisEventManager$$ = 1 < $DvtAxisEventManager$$ && 1.5 >= $DvtAxisEventManager$$ ? 1.5 : 5 < $DvtAxisEventManager$$ ? 10 : Math.ceil($DvtAxisEventManager$$);
      return $DvtAxisEventManager$$ * $DvtAxisDefaults$$;
    }
    $DvtAxisDefaults$$ = Math.pow(10, Math.ceil($dvt$$1$$.Math.log10($DvtAxisEventManager$$)) - 2);
    $DvtAxisEventManager$$ = Math.round($DvtAxisEventManager$$ / $DvtAxisDefaults$$);
    return (10 <= $DvtAxisEventManager$$ && 14 >= $DvtAxisEventManager$$ ? 2 : 15 <= $DvtAxisEventManager$$ && 19 >= $DvtAxisEventManager$$ ? 3 : 20 <= $DvtAxisEventManager$$ && 24 >= $DvtAxisEventManager$$ ? 4 : 25 <= $DvtAxisEventManager$$ && 45 >= $DvtAxisEventManager$$ ? 5 : 46 <= $DvtAxisEventManager$$ && 80 >= $DvtAxisEventManager$$ ? 10 : 20) * $DvtAxisDefaults$$;
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getMajorTickCount$ = function $$dvt$$1$$$$DataAxisInfo$$$$getMajorTickCount$$() {
    return this.$_majorTickCount$;
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getMinorTickCount$ = function $$dvt$$1$$$$DataAxisInfo$$$$getMinorTickCount$$() {
    return this.$_minorTickCount$;
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getMajorIncrement$ = function $$dvt$$1$$$$DataAxisInfo$$$$getMajorIncrement$$() {
    return this.$linearToActual$(this.$_majorIncrement$);
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getMinimumExtent$ = function $$dvt$$1$$$$DataAxisInfo$$$$getMinimumExtent$$() {
    return (this.$_globalMax$ - this.$_globalMin$) / $dvt$$1$$.$DataAxisInfo$.$_MAX_ZOOM_FACTOR$;
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getStartOverflow$ = function $$dvt$$1$$$$DataAxisInfo$$$$getStartOverflow$$() {
    return "top" != this.$Position$ && "bottom" != this.$Position$ || !$dvt$$1$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$StartOverflow$ : this.$EndOverflow$;
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$getEndOverflow$ = function $$dvt$$1$$$$DataAxisInfo$$$$getEndOverflow$$() {
    return "top" != this.$Position$ && "bottom" != this.$Position$ || !$dvt$$1$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$EndOverflow$ : this.$StartOverflow$;
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$linearToActual$ = function $$dvt$$1$$$$DataAxisInfo$$$$linearToActual$$($dvt$$1$$) {
    return null == $dvt$$1$$ ? null : this.$_isLog$ ? Math.pow(10, $dvt$$1$$) : $dvt$$1$$;
  };
  $dvt$$1$$.$DataAxisInfo$.prototype.$actualToLinear$ = function $$dvt$$1$$$$DataAxisInfo$$$$actualToLinear$$($DvtAxisObjPeer$$) {
    return null == $DvtAxisObjPeer$$ ? null : this.$_isLog$ ? 0 < $DvtAxisObjPeer$$ ? $dvt$$1$$.Math.log10($DvtAxisObjPeer$$) : null : $DvtAxisObjPeer$$;
  };
  $dvt$$1$$.$GroupAxisInfo$ = function $$dvt$$1$$$$GroupAxisInfo$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    this.Init($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$);
  };
  $dvt$$1$$.$Obj$.$createSubclass$($dvt$$1$$.$GroupAxisInfo$, $dvt$$1$$.$AxisInfo$);
  $dvt$$1$$.$GroupAxisInfo$.$_MAX_LINE_WRAP$ = 3;
  $dvt$$1$$.$GroupAxisInfo$.$_ROTATE_THRESHOLD$ = 12;
  $dvt$$1$$.$GroupAxisInfo$.prototype.Init = function $$dvt$$1$$$$GroupAxisInfo$$$Init$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    $dvt$$1$$.$GroupAxisInfo$.$superclass$.Init.call(this, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    var $DvtAxisConstants$$ = $dvt$$1$$.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$), $DvtAxisAutomation$$ = "top" == this.$Position$ || "bottom" == this.$Position$;
    if ($DvtAxisAutomation$$ && $DvtAxisConstants$$) {
      var $DvtAxisRenderer$$ = this.$StartCoord$;
      this.$StartCoord$ = this.$EndCoord$;
      this.$EndCoord$ = $DvtAxisRenderer$$;
    }
    this.$_levelsArray$ = [];
    this.$_groupCount$ = this.$_generateLevelsArray$($DvtAxisKeyboardHandler$$.groups, 0, this.$_levelsArray$, 0);
    this.$_numLevels$ = this.$_levelsArray$.length;
    this.$_areSeparatorsRendered$ = "on" == $DvtAxisKeyboardHandler$$.groupSeparators.rendered;
    this.$_separatorColor$ = $DvtAxisKeyboardHandler$$.groupSeparators.color;
    this.$_lastRenderedLevel$ = null;
    this.$_drilling$ = $DvtAxisKeyboardHandler$$.drilling;
    var $DvtAxisRenderer$$ = 0 < $DvtAxisKeyboardHandler$$.endGroupOffset ? Number($DvtAxisKeyboardHandler$$.endGroupOffset) : 0, $startOffset$$1$$ = 0 < $DvtAxisKeyboardHandler$$.startGroupOffset ? Number($DvtAxisKeyboardHandler$$.startGroupOffset) : 0;
    this.$DataMin$ = 0;
    this.$DataMax$ = this.$_groupCount$ - 1;
    this.$GlobalMin$ = null == $DvtAxisKeyboardHandler$$.min ? this.$DataMin$ - $startOffset$$1$$ : $DvtAxisKeyboardHandler$$.min;
    this.$GlobalMax$ = null == $DvtAxisKeyboardHandler$$.max ? this.$DataMax$ + $DvtAxisRenderer$$ : $DvtAxisKeyboardHandler$$.max;
    var $startIndex$$1$$ = this.$getGroupIndex$($DvtAxisKeyboardHandler$$.viewportStartGroup), $endIndex$$ = this.$getGroupIndex$($DvtAxisKeyboardHandler$$.viewportEndGroup);
    -1 != $startIndex$$1$$ && (this.$MinValue$ = $startIndex$$1$$ - $startOffset$$1$$);
    -1 != $endIndex$$ && (this.$MaxValue$ = $endIndex$$ + $DvtAxisRenderer$$);
    null != $DvtAxisKeyboardHandler$$.viewportMin && (this.$MinValue$ = $DvtAxisKeyboardHandler$$.viewportMin);
    null != $DvtAxisKeyboardHandler$$.viewportMax && (this.$MaxValue$ = $DvtAxisKeyboardHandler$$.viewportMax);
    null == this.$MinValue$ && (this.$MinValue$ = this.$GlobalMin$);
    null == this.$MaxValue$ && (this.$MaxValue$ = this.$GlobalMax$);
    this.$GlobalMin$ > this.$MinValue$ && (this.$GlobalMin$ = this.$MinValue$);
    this.$GlobalMax$ < this.$MaxValue$ && (this.$GlobalMax$ = this.$MaxValue$);
    this.$_groupWidthRatios$ = $DvtAxisKeyboardHandler$$._groupWidthRatios;
    this.$_processGroupWidthRatios$();
    this.$_startBuffer$ = $DvtAxisConstants$$ ? $DvtAxisKeyboardHandler$$.rightBuffer : $DvtAxisKeyboardHandler$$.leftBuffer;
    this.$_endBuffer$ = $DvtAxisConstants$$ ? $DvtAxisKeyboardHandler$$.leftBuffer : $DvtAxisKeyboardHandler$$.rightBuffer;
    this.$_isLabelRotated$ = [];
    for ($DvtAxisConstants$$ = 0;$DvtAxisConstants$$ < this.$_numLevels$;$DvtAxisConstants$$++) {
      this.$_isLabelRotated$.push(!1);
    }
    this.$_renderGridAtLabels$ = $DvtAxisKeyboardHandler$$._renderGridAtLabels;
    this.$_labels$ = null;
    this.$_maxSpace$ = $DvtAxisAutomation$$ ? $DvtAxisEventManager$$.$h$ : $DvtAxisEventManager$$.$w$;
    $DvtAxisKeyboardHandler$$.title && (this.$_maxSpace$ -= $dvt$$1$$.$TextUtils$.$getTextStringHeight$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$.titleStyle) + $DvtAxisDefaults$$.$getGapSize$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisKeyboardHandler$$.layout.titleGap));
    this.$_maxLineWrap$ = $dvt$$1$$.$GroupAxisInfo$.$_MAX_LINE_WRAP$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$_processGroupWidthRatios$ = function $$dvt$$1$$$$GroupAxisInfo$$$$_processGroupWidthRatios$$() {
    if (!this.$_groupWidthRatios$ || 2 > this.$_groupWidthRatios$.length) {
      this.$_groupWidthRatios$ = null;
    } else {
      for (var $DvtAxisObjPeer$$ = 0, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ < this.$_groupCount$;$DvtAxisDefaults$$++) {
        $DvtAxisKeyboardHandler$$ = 0 == $DvtAxisDefaults$$ ? this.$MinValue$ : Math.max($DvtAxisDefaults$$ - .5, this.$MinValue$), $DvtAxisEventManager$$ = $DvtAxisDefaults$$ == this.$_groupCount$ - 1 ? this.$MaxValue$ : Math.min($DvtAxisDefaults$$ + .5, this.$MaxValue$), $DvtAxisEventManager$$ > $DvtAxisKeyboardHandler$$ && ($DvtAxisObjPeer$$ += ($DvtAxisEventManager$$ - $DvtAxisKeyboardHandler$$) * this.$_groupWidthRatios$[$DvtAxisDefaults$$]);
      }
      var $DvtAxisConstants$$ = this.$EndCoord$ - this.$StartCoord$;
      this.$_groupWidths$ = $dvt$$1$$.$ArrayUtils$.map(this.$_groupWidthRatios$, function($dvt$$1$$) {
        return $dvt$$1$$ * $DvtAxisConstants$$ / $DvtAxisObjPeer$$;
      });
      this.$_borderValues$ = [];
      for ($DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ < this.$_groupWidthRatios$.length - 1;$DvtAxisDefaults$$++) {
        this.$_borderValues$.push($DvtAxisDefaults$$ + .5);
      }
      this.$_borderCoords$ = [];
      $DvtAxisKeyboardHandler$$ = Math.min(Math.max(Math.round(this.$MinValue$), 0), this.$_borderValues$.length - 1);
      this.$_borderCoords$[$DvtAxisKeyboardHandler$$] = this.$StartCoord$ + (this.$_borderValues$[$DvtAxisKeyboardHandler$$] - this.$MinValue$) * this.$_groupWidths$[$DvtAxisKeyboardHandler$$];
      for ($DvtAxisDefaults$$ = $DvtAxisKeyboardHandler$$ + 1;$DvtAxisDefaults$$ < this.$_borderValues$.length;$DvtAxisDefaults$$++) {
        this.$_borderCoords$[$DvtAxisDefaults$$] = this.$_borderCoords$[$DvtAxisDefaults$$ - 1] + this.$_groupWidths$[$DvtAxisDefaults$$];
      }
      for ($DvtAxisDefaults$$ = $DvtAxisKeyboardHandler$$ - 1;0 <= $DvtAxisDefaults$$;$DvtAxisDefaults$$--) {
        this.$_borderCoords$[$DvtAxisDefaults$$] = this.$_borderCoords$[$DvtAxisDefaults$$ + 1] - this.$_groupWidths$[$DvtAxisDefaults$$ + 1];
      }
    }
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$_rotateLabels$ = function $$dvt$$1$$$$GroupAxisInfo$$$$_rotateLabels$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    var $DvtAxisConstants$$, $DvtAxisAutomation$$ = this.$getCtx$(), $DvtAxisRenderer$$ = $dvt$$1$$.$Agent$.$isRightToLeft$($DvtAxisAutomation$$), $isHierarchical$$2$$ = 1 < this.$_numLevels$;
    null == $DvtAxisDefaults$$ && ($DvtAxisDefaults$$ = this.$_numLevels$ - 1);
    this.$_isLabelRotated$[$DvtAxisDefaults$$] = !0;
    $isHierarchical$$2$$ || this.$_setOverflow$($DvtAxisEventManager$$, $DvtAxisEventManager$$, $DvtAxisObjPeer$$);
    for (var $i$$227$$ = 0;$i$$227$$ < $DvtAxisObjPeer$$.length;$i$$227$$++) {
      if ($DvtAxisEventManager$$ = $DvtAxisObjPeer$$[$i$$227$$], null != $DvtAxisEventManager$$) {
        $DvtAxisConstants$$ = $DvtAxisEventManager$$.$getX$();
        if ($DvtAxisEventManager$$ instanceof $dvt$$1$$.$MultilineText$ || $DvtAxisEventManager$$ instanceof $dvt$$1$$.$BackgroundMultilineText$) {
          var $groupSpan$$ = this.$getGroupWidth$() * (this.$getEndIndex$($i$$227$$, $DvtAxisDefaults$$) - this.$getStartIndex$($i$$227$$, $DvtAxisDefaults$$) + 1);
          2 * $DvtAxisEventManager$$.$getLineHeight$() < $groupSpan$$ ? $DvtAxisEventManager$$.$wrapText$(this.$_maxSpace$, $DvtAxisEventManager$$.$getLineHeight$() * $dvt$$1$$.$GroupAxisInfo$.$_MAX_LINE_WRAP$, 1) : $DvtAxisEventManager$$.$setWrapEnabled$(!1);
        }
        $DvtAxisEventManager$$.$setX$(0);
        $DvtAxisEventManager$$.$setY$(0);
        $DvtAxisRenderer$$ ? $DvtAxisEventManager$$.$setRotation$(Math.PI / 2) : $DvtAxisEventManager$$.$setRotation$(3 * Math.PI / 2);
        $DvtAxisEventManager$$.$setTranslateX$($DvtAxisConstants$$);
      }
    }
    $DvtAxisRenderer$$ = this.$GuessLabelDims$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, null, $DvtAxisDefaults$$);
    "normal" == this.$Options$.tickLabel.style.$getStyle$($dvt$$1$$.$CSSStyle$.$WHITE_SPACE$) && this.$_sanitizeWrappedText$($DvtAxisAutomation$$, $DvtAxisRenderer$$, $DvtAxisObjPeer$$, !0, $isHierarchical$$2$$) && ($DvtAxisRenderer$$ = this.$GuessLabelDims$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, null, $DvtAxisDefaults$$));
    return this.$SkipLabels$($DvtAxisObjPeer$$, $DvtAxisRenderer$$);
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$_sanitizeWrappedText$ = function $$dvt$$1$$$$GroupAxisInfo$$$$_sanitizeWrappedText$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisConstants$$, $DvtAxisAutomation$$) {
    $DvtAxisKeyboardHandler$$ = this.$_calculateMaxWrap$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisConstants$$);
    for (var $DvtAxisRenderer$$ = 0, $i$$228$$ = 0;$i$$228$$ < $DvtAxisEventManager$$.length;$i$$228$$++) {
      var $text$$44$$ = $DvtAxisEventManager$$[$i$$228$$];
      if ($text$$44$$) {
        var $isMultiline$$3$$ = $text$$44$$ instanceof $dvt$$1$$.$MultilineText$ || $text$$44$$ instanceof $dvt$$1$$.$BackgroundMultilineText$;
        $DvtAxisKeyboardHandler$$ && $isMultiline$$3$$ && $text$$44$$.$isWrapEnabled$() && $text$$44$$.$wrapText$(this.$_maxSpace$, $text$$44$$.$getLineHeight$() * this.$_maxLineWrap$, 1);
        $DvtAxisAutomation$$ && ($DvtAxisRenderer$$ = Math.max($DvtAxisRenderer$$, $dvt$$1$$.$TextUtils$.$getTextWidth$($text$$44$$)));
        $text$$44$$.$alignMiddle$();
      }
    }
    $DvtAxisAutomation$$ && (this.$_maxSpace$ -= $DvtAxisRenderer$$ + $DvtAxisDefaults$$.$getGapSize$($DvtAxisObjPeer$$, this.$Options$, $DvtAxisConstants$$ ? this.$Options$.layout.hierarchicalLabelGapHeight : this.$Options$.layout.hierarchicalLabelGapWidth));
    return $DvtAxisKeyboardHandler$$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$_calculateMaxWrap$ = function $$dvt$$1$$$$GroupAxisInfo$$$$_calculateMaxWrap$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    for (var $DvtAxisDefaults$$ = !1;this.$IsOverlapping$($DvtAxisObjPeer$$, 0) && 1 < this.$_maxLineWrap$;) {
      for (var $DvtAxisDefaults$$ = !0, $DvtAxisConstants$$ = 0;$DvtAxisConstants$$ < $DvtAxisKeyboardHandler$$.length;$DvtAxisConstants$$++) {
        var $DvtAxisAutomation$$ = $DvtAxisKeyboardHandler$$[$DvtAxisConstants$$];
        ($DvtAxisAutomation$$ instanceof $dvt$$1$$.$MultilineText$ || $DvtAxisAutomation$$ instanceof $dvt$$1$$.$BackgroundMultilineText$) && $DvtAxisAutomation$$.$getLineCount$() == this.$_maxLineWrap$ && ($DvtAxisAutomation$$ = $DvtAxisAutomation$$.$getLineHeight$(), $DvtAxisEventManager$$ ? $DvtAxisObjPeer$$[$DvtAxisConstants$$].$w$ -= $DvtAxisAutomation$$ : ($DvtAxisObjPeer$$[$DvtAxisConstants$$].y += .5 * $DvtAxisAutomation$$, $DvtAxisObjPeer$$[$DvtAxisConstants$$].$h$ -= $DvtAxisAutomation$$));
      }
      this.$_maxLineWrap$--;
    }
    return $DvtAxisDefaults$$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$isLabelRotated$ = function $$dvt$$1$$$$GroupAxisInfo$$$$isLabelRotated$$($dvt$$1$$) {
    null == $dvt$$1$$ && ($dvt$$1$$ = this.$_numLevels$ - 1);
    return this.$_isLabelRotated$[$dvt$$1$$];
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$_setOverflow$ = function $$dvt$$1$$$$GroupAxisInfo$$$$_setOverflow$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    $DvtAxisObjPeer$$ = Math.max($DvtAxisObjPeer$$ - this.$_startBuffer$, 0);
    $DvtAxisKeyboardHandler$$ = Math.max($DvtAxisKeyboardHandler$$ - this.$_endBuffer$, 0);
    $DvtAxisEventManager$$ = $dvt$$1$$.$Agent$.$isRightToLeft$(this.$getCtx$());
    this.$StartCoord$ += ($DvtAxisObjPeer$$ - this.$StartOverflow$) * ($DvtAxisEventManager$$ ? -1 : 1);
    this.$EndCoord$ -= ($DvtAxisKeyboardHandler$$ - this.$EndOverflow$) * ($DvtAxisEventManager$$ ? -1 : 1);
    this.$_processGroupWidthRatios$();
    for (var $DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ < this.$_numLevels$;$DvtAxisDefaults$$++) {
      $DvtAxisEventManager$$ = this.$_labels$[$DvtAxisDefaults$$];
      for (var $DvtAxisConstants$$ = 0;$DvtAxisConstants$$ < $DvtAxisEventManager$$.length;$DvtAxisConstants$$++) {
        var $DvtAxisAutomation$$ = $DvtAxisEventManager$$[$DvtAxisConstants$$];
        if ($DvtAxisAutomation$$) {
          var $DvtAxisRenderer$$ = this.$_getLabelCoord$($DvtAxisDefaults$$, this.$getLabelIndex$($DvtAxisAutomation$$));
          $DvtAxisAutomation$$.$setX$($DvtAxisRenderer$$);
        }
      }
    }
    this.$StartOverflow$ = $DvtAxisObjPeer$$;
    this.$EndOverflow$ = $DvtAxisKeyboardHandler$$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getLabels$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getLabels$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    null == $DvtAxisObjPeer$$ && ($DvtAxisObjPeer$$ = this.$_numLevels$ - 1);
    this.$_labels$ || this.$_generateLabels$($dvt$$1$$);
    return this.$_labels$[$DvtAxisObjPeer$$];
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$_getLabelCoord$ = function $$dvt$$1$$$$GroupAxisInfo$$$$_getLabelCoord$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = this.$getStartIndex$($DvtAxisObjPeer$$, $dvt$$1$$), $DvtAxisEventManager$$ = this.$getEndIndex$($DvtAxisObjPeer$$, $dvt$$1$$);
    if (null == $DvtAxisKeyboardHandler$$ || null == $DvtAxisEventManager$$) {
      return null;
    }
    $DvtAxisKeyboardHandler$$ < this.$MinValue$ && $DvtAxisEventManager$$ > this.$MinValue$ && ($DvtAxisKeyboardHandler$$ = this.$MinValue$);
    $DvtAxisEventManager$$ > this.$MaxValue$ && $DvtAxisKeyboardHandler$$ < this.$MaxValue$ && ($DvtAxisEventManager$$ = this.$MaxValue$);
    return this.$getCoordAt$($DvtAxisEventManager$$ ? $DvtAxisKeyboardHandler$$ + ($DvtAxisEventManager$$ - $DvtAxisKeyboardHandler$$) / 2 : $DvtAxisKeyboardHandler$$);
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$_generateLabels$ = function $$dvt$$1$$$$GroupAxisInfo$$$$_generateLabels$$($DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = [];
    this.$_labels$ = [];
    for (var $DvtAxisEventManager$$ = $DvtAxisObjPeer$$.$_stage$, $DvtAxisConstants$$ = "top" == this.$Position$ || "bottom" == this.$Position$, $DvtAxisAutomation$$ = $dvt$$1$$.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$), $DvtAxisRenderer$$ = 1 < this.$_numLevels$, $groupWidth_labelDims$$10$$ = this.$getGroupWidth$(), $availSize$$1$$ = this.$_maxSpace$, $gap$$9$$ = $DvtAxisRenderer$$ ? $DvtAxisDefaults$$.$getGapSize$($DvtAxisObjPeer$$, this.$Options$, this.$Options$.layout[$DvtAxisConstants$$ ? "hierarchicalLabelGapHeight" : 
    "hierarchicalLabelGapWidth"]) : 0, $rotationEnabled$$ = "auto" == this.$Options$.tickLabel.rotation && $DvtAxisConstants$$, $autoRotate$$ = !$DvtAxisRenderer$$ && $rotationEnabled$$ && $groupWidth_labelDims$$10$$ < $dvt$$1$$.$GroupAxisInfo$.$_ROTATE_THRESHOLD$, $tickLabelStyle_wrapping$$ = this.$Options$.tickLabel.style, $tickLabelStyle_wrapping$$ = "normal" == $tickLabelStyle_wrapping$$.$getStyle$($dvt$$1$$.$CSSStyle$.$WHITE_SPACE$) && "tangential" != this.$Position$ && $groupWidth_labelDims$$10$$ > 
    $dvt$$1$$.$TextUtils$.$getTextStringHeight$($DvtAxisObjPeer$$, $tickLabelStyle_wrapping$$), $j$$36_label$$30$$, $firstLabel_firstLabelDim$$, $lastLabel_lastLabelDim_maxLabelDims$$, $cssStyle$$26_totalSpace$$1$$, $coord$$9_text$$47$$, $level$$23_startOverflow$$1$$ = 0;$level$$23_startOverflow$$1$$ < this.$_numLevels$;$level$$23_startOverflow$$1$$++) {
      for (var $dims$$29_levels$$1$$ = this.$_levelsArray$[$level$$23_startOverflow$$1$$], $i$$231$$ = 0;$i$$231$$ < $dims$$29_levels$$1$$.length;$i$$231$$++) {
        if ($dims$$29_levels$$1$$[$i$$231$$]) {
          if ($j$$36_label$$30$$ = this.$getLabelAt$($i$$231$$, $level$$23_startOverflow$$1$$), "" == $j$$36_label$$30$$ || !$j$$36_label$$30$$ && 0 != $j$$36_label$$30$$) {
            $DvtAxisKeyboardHandler$$.push(null);
          } else {
            if ($coord$$9_text$$47$$ = this.$_getLabelCoord$($level$$23_startOverflow$$1$$, $i$$231$$), null != $coord$$9_text$$47$$) {
              $cssStyle$$26_totalSpace$$1$$ = this.$getLabelStyleAt$($i$$231$$, $level$$23_startOverflow$$1$$);
              var $bMultiline$$1$$ = !$autoRotate$$ && $tickLabelStyle_wrapping$$ && "number" != typeof $j$$36_label$$30$$ && 0 <= $j$$36_label$$30$$.indexOf(" ");
              $coord$$9_text$$47$$ = this.$CreateLabel$($DvtAxisObjPeer$$, $j$$36_label$$30$$, $coord$$9_text$$47$$, $cssStyle$$26_totalSpace$$1$$, $bMultiline$$1$$);
              var $groupSpan$$1$$ = $groupWidth_labelDims$$10$$ * (this.$getEndIndex$($i$$231$$, $level$$23_startOverflow$$1$$) - this.$getStartIndex$($i$$231$$, $level$$23_startOverflow$$1$$) + 1);
              $bMultiline$$1$$ && this.$_isTextWrapNeeded$($DvtAxisObjPeer$$, $j$$36_label$$30$$, $cssStyle$$26_totalSpace$$1$$, $rotationEnabled$$, $DvtAxisConstants$$ ? $groupSpan$$1$$ : $availSize$$1$$) ? $DvtAxisConstants$$ ? $coord$$9_text$$47$$.$wrapText$($groupSpan$$1$$, $availSize$$1$$, 1, !0) : $coord$$9_text$$47$$.$wrapText$($availSize$$1$$, $coord$$9_text$$47$$.$getLineHeight$() * this.$_maxLineWrap$, 1, !1) : $bMultiline$$1$$ && !$DvtAxisConstants$$ && $coord$$9_text$$47$$.$setWrapEnabled$(!1);
              $coord$$9_text$$47$$.$_index$ = $i$$231$$;
              $DvtAxisKeyboardHandler$$.push($coord$$9_text$$47$$);
              $firstLabel_firstLabelDim$$ || 0 != $level$$23_startOverflow$$1$$ || ($firstLabel_firstLabelDim$$ = $coord$$9_text$$47$$);
              0 == $level$$23_startOverflow$$1$$ && ($lastLabel_lastLabelDim_maxLabelDims$$ = $coord$$9_text$$47$$);
            } else {
              $DvtAxisKeyboardHandler$$.push(null);
            }
          }
        } else {
          $DvtAxisKeyboardHandler$$.push(null);
        }
      }
      if ($tickLabelStyle_wrapping$$ && $DvtAxisRenderer$$) {
        for ($j$$36_label$$30$$ = $cssStyle$$26_totalSpace$$1$$ = 0;$j$$36_label$$30$$ < $DvtAxisKeyboardHandler$$.length;$j$$36_label$$30$$++) {
          $DvtAxisKeyboardHandler$$[$j$$36_label$$30$$] && ($dims$$29_levels$$1$$ = $DvtAxisKeyboardHandler$$[$j$$36_label$$30$$].$measureDimensions$(), $cssStyle$$26_totalSpace$$1$$ = Math.max($cssStyle$$26_totalSpace$$1$$, $DvtAxisConstants$$ ? $dims$$29_levels$$1$$.$h$ : $dims$$29_levels$$1$$.$w$));
        }
        $availSize$$1$$ -= $cssStyle$$26_totalSpace$$1$$ + $gap$$9$$;
      }
      this.$_labels$.push($DvtAxisKeyboardHandler$$);
      $DvtAxisKeyboardHandler$$ = [];
    }
    $DvtAxisKeyboardHandler$$ = this.$_labels$[this.$_numLevels$ - 1];
    $groupWidth_labelDims$$10$$ = [];
    if ($firstLabel_firstLabelDim$$) {
      if ("tangential" == this.$Position$) {
        $groupWidth_labelDims$$10$$ = this.$GetLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$), this.$_labels$[0] = this.$SkipTangentialLabels$($DvtAxisKeyboardHandler$$, $groupWidth_labelDims$$10$$);
      } else {
        for ($firstLabel_firstLabelDim$$ = $firstLabel_firstLabelDim$$.$measureDimensions$(), $DvtAxisConstants$$ && (null != this.$Options$._startOverflow && null != this.$Options$._endOverflow ? ($level$$23_startOverflow$$1$$ = this.$Options$._startOverflow, $DvtAxisAutomation$$ = this.$Options$._endOverflow) : ($lastLabel_lastLabelDim_maxLabelDims$$ = $lastLabel_lastLabelDim_maxLabelDims$$.$measureDimensions$(), $level$$23_startOverflow$$1$$ = $DvtAxisAutomation$$ ? $firstLabel_firstLabelDim$$.$w$ + 
        $firstLabel_firstLabelDim$$.x - this.$StartCoord$ : this.$StartCoord$ - $firstLabel_firstLabelDim$$.x, $DvtAxisAutomation$$ = $DvtAxisAutomation$$ ? this.$EndCoord$ - $lastLabel_lastLabelDim_maxLabelDims$$.x : $lastLabel_lastLabelDim_maxLabelDims$$.$w$ + $lastLabel_lastLabelDim_maxLabelDims$$.x - this.$EndCoord$), !$autoRotate$$ && ($level$$23_startOverflow$$1$$ > this.$_startBuffer$ || $DvtAxisAutomation$$ > this.$_endBuffer$) && this.$_setOverflow$($level$$23_startOverflow$$1$$, $DvtAxisAutomation$$, 
        $DvtAxisKeyboardHandler$$)), $level$$23_startOverflow$$1$$ = 0;$level$$23_startOverflow$$1$$ < this.$_numLevels$;$level$$23_startOverflow$$1$$++) {
          if ($DvtAxisKeyboardHandler$$ = this.$_labels$[$level$$23_startOverflow$$1$$], $autoRotate$$) {
            this.$_labels$[$level$$23_startOverflow$$1$$] = this.$_rotateLabels$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $firstLabel_firstLabelDim$$.$h$ / 2, $level$$23_startOverflow$$1$$);
          } else {
            if ($DvtAxisAutomation$$ = this.$GuessLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, .3, $level$$23_startOverflow$$1$$), $lastLabel_lastLabelDim_maxLabelDims$$ = this.$GuessLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, null, $level$$23_startOverflow$$1$$), this.$IsOverlapping$($lastLabel_lastLabelDim_maxLabelDims$$, 0) || (this.$_labels$[$level$$23_startOverflow$$1$$] = $DvtAxisKeyboardHandler$$), $DvtAxisConstants$$) {
              if ($rotationEnabled$$) {
                if (this.$IsOverlapping$($DvtAxisAutomation$$, 0)) {
                  this.$_labels$[$level$$23_startOverflow$$1$$] = this.$_rotateLabels$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $firstLabel_firstLabelDim$$.$h$ / 2, $level$$23_startOverflow$$1$$);
                } else {
                  if ($groupWidth_labelDims$$10$$ = this.$GetLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$), this.$IsOverlapping$($groupWidth_labelDims$$10$$, 0)) {
                    this.$_labels$[$level$$23_startOverflow$$1$$] = this.$_rotateLabels$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $firstLabel_firstLabelDim$$.$h$ / 2, $level$$23_startOverflow$$1$$);
                  } else {
                    if (this.$_labels$[$level$$23_startOverflow$$1$$] = $DvtAxisKeyboardHandler$$, $DvtAxisRenderer$$) {
                      for ($j$$36_label$$30$$ = $DvtAxisKeyboardHandler$$ = 0;$j$$36_label$$30$$ < $groupWidth_labelDims$$10$$.length;$j$$36_label$$30$$++) {
                        $groupWidth_labelDims$$10$$[$j$$36_label$$30$$] && ($DvtAxisKeyboardHandler$$ = Math.max($DvtAxisKeyboardHandler$$, $groupWidth_labelDims$$10$$[$j$$36_label$$30$$].$h$));
                      }
                      this.$_maxSpace$ -= $DvtAxisKeyboardHandler$$ + $gap$$9$$;
                    }
                  }
                }
              } else {
                $groupWidth_labelDims$$10$$ = this.$GetLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$), this.$_labels$[$level$$23_startOverflow$$1$$] = this.$SkipLabels$($DvtAxisKeyboardHandler$$, $groupWidth_labelDims$$10$$);
              }
            } else {
              $tickLabelStyle_wrapping$$ && this.$_sanitizeWrappedText$($DvtAxisObjPeer$$, $lastLabel_lastLabelDim_maxLabelDims$$, $DvtAxisKeyboardHandler$$, !1, $DvtAxisRenderer$$) && ($lastLabel_lastLabelDim_maxLabelDims$$ = this.$GuessLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, null, $level$$23_startOverflow$$1$$)), this.$_labels$[$level$$23_startOverflow$$1$$] = this.$SkipLabels$($DvtAxisKeyboardHandler$$, $lastLabel_lastLabelDim_maxLabelDims$$);
            }
          }
        }
      }
    }
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getMajorTickCoords$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getMajorTickCoords$$() {
    for (var $dvt$$1$$ = [], $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$ = "tangential" == this.$Position$ ? this.$getGroupCount$() : this.$getGroupCount$() - 1, $DvtAxisEventManager$$ = 0;$DvtAxisEventManager$$ < this.$_levelsArray$[0].length;$DvtAxisEventManager$$++) {
      if (this.$_levelsArray$[0][$DvtAxisEventManager$$]) {
        $DvtAxisObjPeer$$ = this.$getStartIndex$($DvtAxisEventManager$$, 0);
        var $DvtAxisDefaults$$ = this.$getEndIndex$($DvtAxisEventManager$$, 0);
        $DvtAxisObjPeer$$ = this.$_renderGridAtLabels$ ? this.$getCoordAt$($DvtAxisObjPeer$$ + .5 * ($DvtAxisDefaults$$ - $DvtAxisObjPeer$$)) : $DvtAxisDefaults$$ + .5 < $DvtAxisKeyboardHandler$$ ? this.$getCoordAt$($DvtAxisDefaults$$ + .5) : null;
        null != $DvtAxisObjPeer$$ && $dvt$$1$$.push($DvtAxisObjPeer$$);
      }
    }
    return $dvt$$1$$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getMinorTickCoords$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getMinorTickCoords$$() {
    var $dvt$$1$$ = [], $DvtAxisObjPeer$$;
    if (!this.$_levelsArray$[1]) {
      return $dvt$$1$$;
    }
    for (var $DvtAxisKeyboardHandler$$ = 0;$DvtAxisKeyboardHandler$$ < this.$_levelsArray$[1].length;$DvtAxisKeyboardHandler$$++) {
      if (this.$_levelsArray$[1][$DvtAxisKeyboardHandler$$]) {
        $DvtAxisObjPeer$$ = this.$getStartIndex$($DvtAxisKeyboardHandler$$, 1);
        var $DvtAxisEventManager$$ = this.$getEndIndex$($DvtAxisKeyboardHandler$$, 1);
        $DvtAxisObjPeer$$ = this.$_renderGridAtLabels$ ? this.$getCoordAt$($DvtAxisObjPeer$$ + .5 * ($DvtAxisEventManager$$ - $DvtAxisObjPeer$$)) : $DvtAxisEventManager$$ + .5 < this.$getGroupCount$() - 1 ? this.$getCoordAt$($DvtAxisEventManager$$ + .5) : null;
        null != $DvtAxisObjPeer$$ && $dvt$$1$$.push($DvtAxisObjPeer$$);
      }
    }
    return $dvt$$1$$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getUnboundedValueAt$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getUnboundedValueAt$$($dvt$$1$$) {
    if (null == $dvt$$1$$) {
      return null;
    }
    if (this.$_groupWidthRatios$) {
      for (var $DvtAxisObjPeer$$ = this.$_borderCoords$.length, $DvtAxisKeyboardHandler$$ = 0;$DvtAxisKeyboardHandler$$ < this.$_borderCoords$.length;$DvtAxisKeyboardHandler$$++) {
        if ($dvt$$1$$ <= this.$_borderCoords$[$DvtAxisKeyboardHandler$$]) {
          $DvtAxisObjPeer$$ = $DvtAxisKeyboardHandler$$;
          break;
        }
      }
      return 0 == $DvtAxisObjPeer$$ ? this.$_borderValues$[0] - (this.$_borderCoords$[0] - $dvt$$1$$) / this.$_groupWidths$[0] : this.$_borderValues$[$DvtAxisObjPeer$$ - 1] + ($dvt$$1$$ - this.$_borderCoords$[$DvtAxisObjPeer$$ - 1]) / this.$_groupWidths$[$DvtAxisObjPeer$$];
    }
    return this.$MinValue$ + ($dvt$$1$$ - this.$StartCoord$) / ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$));
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getUnboundedCoordAt$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getUnboundedCoordAt$$($dvt$$1$$) {
    if (null == $dvt$$1$$) {
      return null;
    }
    if (this.$_groupWidthRatios$) {
      for (var $DvtAxisObjPeer$$ = this.$_borderValues$.length, $DvtAxisKeyboardHandler$$ = 0;$DvtAxisKeyboardHandler$$ < this.$_borderValues$.length;$DvtAxisKeyboardHandler$$++) {
        if ($dvt$$1$$ <= this.$_borderValues$[$DvtAxisKeyboardHandler$$]) {
          $DvtAxisObjPeer$$ = $DvtAxisKeyboardHandler$$;
          break;
        }
      }
      return 0 == $DvtAxisObjPeer$$ ? this.$_borderCoords$[0] - this.$_groupWidths$[0] * (this.$_borderValues$[0] - $dvt$$1$$) : this.$_borderCoords$[$DvtAxisObjPeer$$ - 1] + this.$_groupWidths$[$DvtAxisObjPeer$$] * ($dvt$$1$$ - this.$_borderValues$[$DvtAxisObjPeer$$ - 1]);
    }
    return this.$StartCoord$ + (this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$) * ($dvt$$1$$ - this.$MinValue$);
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getLabelAt$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getLabelAt$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    null == $DvtAxisObjPeer$$ && ($DvtAxisObjPeer$$ = this.$_numLevels$ - 1);
    $dvt$$1$$ = Math.round($dvt$$1$$);
    if (0 > $dvt$$1$$) {
      return null;
    }
    var $DvtAxisKeyboardHandler$$ = this.$_levelsArray$[$DvtAxisObjPeer$$] && this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$] ? this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$].item : null;
    $DvtAxisKeyboardHandler$$ && ($DvtAxisKeyboardHandler$$.name ? $DvtAxisKeyboardHandler$$ = $DvtAxisKeyboardHandler$$.name : null != $DvtAxisKeyboardHandler$$.id && ($DvtAxisKeyboardHandler$$ = ""));
    return $DvtAxisKeyboardHandler$$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getGroupAt$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getGroupAt$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    null == $DvtAxisObjPeer$$ && ($DvtAxisObjPeer$$ = this.$_numLevels$ - 1);
    $dvt$$1$$ = Math.round($dvt$$1$$);
    if (0 > $dvt$$1$$) {
      return null;
    }
    var $DvtAxisKeyboardHandler$$ = this.$_levelsArray$[$DvtAxisObjPeer$$] && this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$] ? this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$].item : null;
    if ($DvtAxisKeyboardHandler$$) {
      if ($DvtAxisKeyboardHandler$$.id) {
        return $DvtAxisKeyboardHandler$$.id;
      }
      if ($DvtAxisKeyboardHandler$$.name || "" == $DvtAxisKeyboardHandler$$.name) {
        return $DvtAxisKeyboardHandler$$.name;
      }
    }
    return $DvtAxisKeyboardHandler$$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getLabelStyleAt$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getLabelStyleAt$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    var $DvtAxisEventManager$$ = this.$_getGroupAttribute$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, "labelStyle");
    return $DvtAxisEventManager$$ ? ($DvtAxisEventManager$$ = new $dvt$$1$$.$CSSStyle$($DvtAxisEventManager$$), $DvtAxisEventManager$$.$getStyle$("font-size") || $DvtAxisEventManager$$.$setStyle$("font-size", this.$Options$.tickLabel.style.$getStyle$("font-size")), $DvtAxisEventManager$$) : null;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getDatatip$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getDatatip$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    return this.$_getGroupAttribute$($dvt$$1$$, $DvtAxisObjPeer$$, "shortDesc");
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getAction$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getAction$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    return this.$_getGroupAttribute$($dvt$$1$$, $DvtAxisObjPeer$$, "action");
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$isDrillable$ = function $$dvt$$1$$$$GroupAxisInfo$$$$isDrillable$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = this.$_getGroupAttribute$($dvt$$1$$, $DvtAxisObjPeer$$, "drilling");
    return "on" == $DvtAxisKeyboardHandler$$ ? !0 : "off" == $DvtAxisKeyboardHandler$$ ? !1 : "on" == this.$_drilling$ || "groupsOnly" == this.$_drilling$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getGroup$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getGroup$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    if (0 > $dvt$$1$$ || $dvt$$1$$ > this.$getGroupCount$() - 1) {
      return null;
    }
    var $DvtAxisKeyboardHandler$$ = [];
    null == $DvtAxisObjPeer$$ && ($DvtAxisObjPeer$$ = this.$_numLevels$ - 1);
    for (var $DvtAxisEventManager$$ = this.$getStartIndex$($dvt$$1$$, $DvtAxisObjPeer$$), $DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ <= $DvtAxisObjPeer$$;$DvtAxisDefaults$$++) {
      for (var $DvtAxisConstants$$ = this.$_levelsArray$[$DvtAxisDefaults$$], $DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ < $DvtAxisConstants$$.length;$DvtAxisAutomation$$++) {
        this.$getStartIndex$($DvtAxisAutomation$$, $DvtAxisDefaults$$) <= $DvtAxisEventManager$$ && this.$getEndIndex$($DvtAxisAutomation$$, $DvtAxisDefaults$$) >= $DvtAxisEventManager$$ && $DvtAxisKeyboardHandler$$.push(this.$getGroupAt$($DvtAxisAutomation$$, $DvtAxisDefaults$$));
      }
    }
    return 0 < $DvtAxisKeyboardHandler$$.length ? 1 == $DvtAxisKeyboardHandler$$.length ? $DvtAxisKeyboardHandler$$[0] : $DvtAxisKeyboardHandler$$ : null;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getGroupIndex$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getGroupIndex$$($DvtAxisObjPeer$$) {
    if (null == $DvtAxisObjPeer$$) {
      return -1;
    }
    for (var $DvtAxisKeyboardHandler$$ = -1, $DvtAxisEventManager$$ = 0;$DvtAxisEventManager$$ < this.$_groupCount$;$DvtAxisEventManager$$++) {
      var $DvtAxisDefaults$$ = this.$getGroup$($DvtAxisEventManager$$);
      if ($DvtAxisObjPeer$$ instanceof Array && $DvtAxisDefaults$$ instanceof Array ? $dvt$$1$$.$ArrayUtils$.$equals$($DvtAxisObjPeer$$, $DvtAxisDefaults$$) : $DvtAxisObjPeer$$ == $DvtAxisDefaults$$) {
        $DvtAxisKeyboardHandler$$ = $DvtAxisEventManager$$;
        break;
      }
    }
    return $DvtAxisKeyboardHandler$$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getMinimumExtent$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getMinimumExtent$$() {
    return 1;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getGroupWidth$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getGroupWidth$$() {
    return Math.abs(this.$EndCoord$ - this.$StartCoord$) / Math.abs(this.$MaxValue$ - this.$MinValue$);
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getGroupCount$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getGroupCount$$() {
    return this.$_groupCount$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getNumLevels$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getNumLevels$$() {
    return this.$_numLevels$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$_generateLevelsArray$ = function $$dvt$$1$$$$GroupAxisInfo$$$$_generateLevelsArray$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    for (var $DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ < $dvt$$1$$.length;$DvtAxisDefaults$$++) {
      if ($DvtAxisKeyboardHandler$$[$DvtAxisObjPeer$$] || ($DvtAxisKeyboardHandler$$[$DvtAxisObjPeer$$] = []), $DvtAxisKeyboardHandler$$[$DvtAxisObjPeer$$].push({item:$dvt$$1$$[$DvtAxisDefaults$$], start:$DvtAxisEventManager$$, end:$DvtAxisEventManager$$, position:$DvtAxisDefaults$$}), $dvt$$1$$[$DvtAxisDefaults$$] && $dvt$$1$$[$DvtAxisDefaults$$].groups) {
        $DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$[$DvtAxisObjPeer$$].length - 1;
        var $DvtAxisConstants$$ = this.$_generateLevelsArray$($dvt$$1$$[$DvtAxisDefaults$$].groups, $DvtAxisObjPeer$$ + 1, $DvtAxisKeyboardHandler$$, $DvtAxisKeyboardHandler$$[$DvtAxisObjPeer$$][$DvtAxisEventManager$$].start);
        $DvtAxisKeyboardHandler$$[$DvtAxisObjPeer$$][$DvtAxisEventManager$$].end = $DvtAxisConstants$$ - 1;
        $DvtAxisEventManager$$ = $DvtAxisConstants$$;
      } else {
        $DvtAxisEventManager$$++;
      }
    }
    return $DvtAxisEventManager$$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$_getGroupAttribute$ = function $$dvt$$1$$$$GroupAxisInfo$$$$_getGroupAttribute$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    null == $DvtAxisObjPeer$$ && ($DvtAxisObjPeer$$ = this.$_numLevels$ - 1);
    return ($dvt$$1$$ = this.$_levelsArray$[$DvtAxisObjPeer$$] && this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$] ? this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$].item : null) ? $dvt$$1$$[$DvtAxisKeyboardHandler$$] : null;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getStartIndex$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getStartIndex$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    null == $DvtAxisObjPeer$$ && ($DvtAxisObjPeer$$ = this.$_numLevels$ - 1);
    return this.$_levelsArray$[$DvtAxisObjPeer$$] && this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$] ? this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$].start : null;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getEndIndex$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getEndIndex$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    null == $DvtAxisObjPeer$$ && ($DvtAxisObjPeer$$ = this.$_numLevels$ - 1);
    return this.$_levelsArray$[$DvtAxisObjPeer$$] && this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$] ? this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$].end : null;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getPosition$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getPosition$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    null == $DvtAxisObjPeer$$ && ($DvtAxisObjPeer$$ = this.$_numLevels$ - 1);
    return this.$_levelsArray$[$DvtAxisObjPeer$$] && this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$] ? this.$_levelsArray$[$DvtAxisObjPeer$$][$dvt$$1$$].position : null;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$setLastRenderedLevel$ = function $$dvt$$1$$$$GroupAxisInfo$$$$setLastRenderedLevel$$($dvt$$1$$) {
    this.$_lastRenderedLevel$ = $dvt$$1$$;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$getLabelIndex$ = function $$dvt$$1$$$$GroupAxisInfo$$$$getLabelIndex$$($dvt$$1$$) {
    return 0 <= $dvt$$1$$.$_index$ ? $dvt$$1$$.$_index$ : null;
  };
  $dvt$$1$$.$GroupAxisInfo$.prototype.$_isTextWrapNeeded$ = function $$dvt$$1$$$$GroupAxisInfo$$$$_isTextWrapNeeded$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$) {
    $DvtAxisObjPeer$$ = $dvt$$1$$.$TextUtils$.$getTextStringWidth$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    return $DvtAxisObjPeer$$ >= $DvtAxisConstants$$ && ($DvtAxisObjPeer$$ / this.$_maxLineWrap$ < $DvtAxisConstants$$ || !$DvtAxisDefaults$$) ? !0 : !1;
  };
  $dvt$$1$$.$Obj$.$createSubclass$($DvtAxisObjPeer$$, $dvt$$1$$.$SimpleObjPeer$);
  $DvtAxisObjPeer$$.prototype.Init = function $$DvtAxisObjPeer$$$$Init$($dvt$$1$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$, $DvtAxisAutomation$$, $DvtAxisRenderer$$, $params$$8$$) {
    $DvtAxisObjPeer$$.$superclass$.Init.call(this, $DvtAxisAutomation$$, $DvtAxisRenderer$$, null, $params$$8$$);
    this.$_axis$ = $dvt$$1$$;
    this.$_label$ = $DvtAxisKeyboardHandler$$;
    this.$_group$ = $DvtAxisEventManager$$;
    this.$_action$ = $DvtAxisDefaults$$;
    this.$_drillable$ = $DvtAxisConstants$$;
    (this.$_action$ || this.$_drillable$) && $DvtAxisKeyboardHandler$$.setCursor("pointer");
    $dvt$$1$$.$__registerObject$(this);
  };
  $DvtAxisObjPeer$$.prototype.$getLabel$ = function $$DvtAxisObjPeer$$$$$getLabel$$() {
    return this.$_label$;
  };
  $DvtAxisObjPeer$$.prototype.getId = function $$DvtAxisObjPeer$$$$getId$() {
    return this.$_group$;
  };
  $DvtAxisObjPeer$$.prototype.$getAction$ = function $$DvtAxisObjPeer$$$$$getAction$$() {
    return this.$_action$;
  };
  $DvtAxisObjPeer$$.prototype.$isDrillable$ = function $$DvtAxisObjPeer$$$$$isDrillable$$() {
    return this.$_drillable$;
  };
  $DvtAxisObjPeer$$.prototype.$getGroup$ = function $$DvtAxisObjPeer$$$$$getGroup$$() {
    return this.$_group$;
  };
  $DvtAxisObjPeer$$.prototype.$getNextNavigable$ = function $$DvtAxisObjPeer$$$$$getNextNavigable$$($DvtAxisObjPeer$$) {
    return $DvtAxisObjPeer$$.type == $dvt$$1$$.MouseEvent.$CLICK$ ? this : $dvt$$1$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtAxisObjPeer$$, this.$_axis$.$_navigablePeers$);
  };
  $DvtAxisObjPeer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtAxisObjPeer$$$$$getKeyboardBoundingBox$$($DvtAxisObjPeer$$) {
    return this.$_label$ ? this.$_label$.$getDimensions$($DvtAxisObjPeer$$) : new $dvt$$1$$.$Rectangle$(0, 0, 0, 0);
  };
  $DvtAxisObjPeer$$.prototype.$getDisplayable$ = function $$DvtAxisObjPeer$$$$$getDisplayable$$() {
    return this.$_label$;
  };
  $DvtAxisObjPeer$$.prototype.$getTargetElem$ = function $$DvtAxisObjPeer$$$$$getTargetElem$$() {
    return this.$_label$ ? this.$_label$.$getElem$() : null;
  };
  $DvtAxisObjPeer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtAxisObjPeer$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    if (this.$_label$) {
      var $DvtAxisObjPeer$$ = this.$getKeyboardBoundingBox$();
      this.$_overlayRect$ = new $dvt$$1$$.Rect(this.$_axis$.$getCtx$(), $DvtAxisObjPeer$$.x, $DvtAxisObjPeer$$.y, $DvtAxisObjPeer$$.$w$, $DvtAxisObjPeer$$.$h$);
      this.$_overlayRect$.$setSolidStroke$($dvt$$1$$.$Agent$.$getFocusColor$());
      this.$_overlayRect$.$setInvisibleFill$();
      this.$_axis$.$addChild$(this.$_overlayRect$);
    }
  };
  $DvtAxisObjPeer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtAxisObjPeer$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$_label$ && (this.$_axis$.removeChild(this.$_overlayRect$), this.$_overlayRect$ = null);
  };
  $DvtAxisObjPeer$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtAxisObjPeer$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtAxisObjPeer$$.prototype.$getAriaLabel$ = function $$DvtAxisObjPeer$$$$$getAriaLabel$$() {
    var $DvtAxisObjPeer$$;
    this.$isDrillable$() && ($DvtAxisObjPeer$$ = [$dvt$$1$$.$Bundle$.$getTranslation$(this.$_axis$.$getOptions$(), "stateDrillable", $dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE")]);
    if (null != this.$getDatatip$()) {
      return $dvt$$1$$.$Displayable$.$generateAriaLabel$(this.$getDatatip$(), $DvtAxisObjPeer$$);
    }
    if (null != $DvtAxisObjPeer$$) {
      return $dvt$$1$$.$Displayable$.$generateAriaLabel$(this.$getLabel$().$getTextString$(), $DvtAxisObjPeer$$);
    }
  };
  $DvtAxisObjPeer$$.prototype.$isDragAvailable$ = function $$DvtAxisObjPeer$$$$$isDragAvailable$$() {
    return !0;
  };
  $DvtAxisObjPeer$$.prototype.$getDragTransferable$ = function $$DvtAxisObjPeer$$$$$getDragTransferable$$() {
    return [this.getId()];
  };
  $DvtAxisObjPeer$$.prototype.$getDragFeedback$ = function $$DvtAxisObjPeer$$$$$getDragFeedback$$() {
    return [this.$getDisplayable$()];
  };
  $dvt$$1$$.$LinearScaleAxisValueFormatter$ = function $$dvt$$1$$$$LinearScaleAxisValueFormatter$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$) {
    this.Init($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$);
  };
  $dvt$$1$$.$Obj$.$createSubclass$($dvt$$1$$.$LinearScaleAxisValueFormatter$, $dvt$$1$$.$Obj$);
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_NONE$ = "none";
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_AUTO$ = "auto";
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_THOUSAND$ = "thousand";
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_MILLION$ = "million";
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_BILLION$ = "billion";
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_TRILLION$ = "trillion";
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_QUADRILLION$ = "quadrillion";
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALING_FACTOR_DIFFERENCE$ = 3;
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.prototype.Init = function $$dvt$$1$$$$LinearScaleAxisValueFormatter$$$Init$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$) {
    this.$_context$ = $dvt$$1$$;
    this.$_scales$ = {};
    this.$_scalesOrder$ = [];
    this.$_factorToScaleMapping$ = {};
    this.$InitScales$();
    this.$InitFormatter$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$);
  };
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.prototype.$InitScales$ = function $$dvt$$1$$$$LinearScaleAxisValueFormatter$$$$InitScales$$() {
    function $DvtAxisObjPeer$$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
      var $DvtAxisConstants$$;
      $DvtAxisDefaults$$ && ($DvtAxisConstants$$ = $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, $DvtAxisDefaults$$));
      $DvtAxisDefaults$$ = {$scaleFactor$:$DvtAxisEventManager$$, $localizedSuffix$:$DvtAxisConstants$$};
      this.$_scales$[$DvtAxisKeyboardHandler$$] = $DvtAxisDefaults$$;
      this.$_scalesOrder$.push($DvtAxisDefaults$$);
      this.$_factorToScaleMapping$[$DvtAxisEventManager$$] = $DvtAxisDefaults$$;
    }
    var $DvtAxisKeyboardHandler$$ = $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALING_FACTOR_DIFFERENCE$;
    $DvtAxisObjPeer$$.call(this, $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_NONE$, 0 * $DvtAxisKeyboardHandler$$);
    $DvtAxisObjPeer$$.call(this, $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_THOUSAND$, 1 * $DvtAxisKeyboardHandler$$, "SCALING_SUFFIX_THOUSAND");
    $DvtAxisObjPeer$$.call(this, $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_MILLION$, 2 * $DvtAxisKeyboardHandler$$, "SCALING_SUFFIX_MILLION");
    $DvtAxisObjPeer$$.call(this, $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_BILLION$, 3 * $DvtAxisKeyboardHandler$$, "SCALING_SUFFIX_BILLION");
    $DvtAxisObjPeer$$.call(this, $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_TRILLION$, 4 * $DvtAxisKeyboardHandler$$, "SCALING_SUFFIX_TRILLION");
    $DvtAxisObjPeer$$.call(this, $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_QUADRILLION$, 5 * $DvtAxisKeyboardHandler$$, "SCALING_SUFFIX_QUADRILLION");
    this.$_scalesOrder$.sort(function($dvt$$1$$, $DvtAxisObjPeer$$) {
      return $dvt$$1$$.$scaleFactor$ < $DvtAxisObjPeer$$.$scaleFactor$ ? -1 : $dvt$$1$$.$scaleFactor$ > $DvtAxisObjPeer$$.$scaleFactor$ ? 1 : 0;
    });
  };
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.prototype.$InitFormatter$ = function $$dvt$$1$$$$LinearScaleAxisValueFormatter$$$$InitFormatter$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    var $DvtAxisConstants$$ = !1, $DvtAxisAutomation$$, $DvtAxisRenderer$$ = !1;
    "off" !== $DvtAxisDefaults$$ && ($DvtAxisRenderer$$ = !0);
    $DvtAxisEventManager$$ = this.$_getScaleFactor$($DvtAxisEventManager$$);
    "number" !== typeof $DvtAxisEventManager$$ && ($DvtAxisConstants$$ = !0);
    $DvtAxisConstants$$ && ($DvtAxisEventManager$$ = this.$_findNearestLEScaleFactor$(this.$_getPowerOfTen$(Math.max(Math.abs($dvt$$1$$), Math.abs($DvtAxisObjPeer$$)))));
    !0 === $DvtAxisRenderer$$ && (0 == $DvtAxisKeyboardHandler$$ && $dvt$$1$$ == $DvtAxisObjPeer$$ ? ($dvt$$1$$ = $DvtAxisEventManager$$ - this.$_getPowerOfTen$($DvtAxisObjPeer$$), $DvtAxisAutomation$$ = 0 >= $dvt$$1$$ ? Math.max($dvt$$1$$ + 3, 0) : Math.max($dvt$$1$$, 4)) : $DvtAxisAutomation$$ = Math.max($DvtAxisEventManager$$ - this.$_getPowerOfTen$($DvtAxisKeyboardHandler$$), 0));
    this.$_useAutoPrecision$ = $DvtAxisRenderer$$;
    this.$_scaleFactor$ = $DvtAxisEventManager$$;
    this.$_decimalPlaces$ = $DvtAxisAutomation$$;
  };
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.prototype.$_findNearestLEScaleFactor$ = function $$dvt$$1$$$$LinearScaleAxisValueFormatter$$$$_findNearestLEScaleFactor$$($dvt$$1$$) {
    var $DvtAxisObjPeer$$ = 0;
    if ($dvt$$1$$ <= this.$_scalesOrder$[0].$scaleFactor$) {
      $DvtAxisObjPeer$$ = this.$_scalesOrder$[0].$scaleFactor$;
    } else {
      if ($dvt$$1$$ >= this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$) {
        $DvtAxisObjPeer$$ = this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$;
      } else {
        for (var $DvtAxisKeyboardHandler$$ = this.$_scalesOrder$.length - 1;0 <= $DvtAxisKeyboardHandler$$;$DvtAxisKeyboardHandler$$--) {
          if (this.$_scalesOrder$[$DvtAxisKeyboardHandler$$].$scaleFactor$ <= $dvt$$1$$) {
            $DvtAxisObjPeer$$ = this.$_scalesOrder$[$DvtAxisKeyboardHandler$$].$scaleFactor$;
            break;
          }
        }
      }
    }
    return $DvtAxisObjPeer$$;
  };
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.prototype.$_getScaleFactor$ = function $$dvt$$1$$$$LinearScaleAxisValueFormatter$$$$_getScaleFactor$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ || ($DvtAxisObjPeer$$ = $dvt$$1$$.$LinearScaleAxisValueFormatter$.$SCALE_AUTO$);
    var $DvtAxisKeyboardHandler$$;
    if ($DvtAxisObjPeer$$ = this.$_scales$[$DvtAxisObjPeer$$]) {
      $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$.$scaleFactor$;
    }
    return $DvtAxisKeyboardHandler$$;
  };
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.prototype.format = function $$dvt$$1$$$$LinearScaleAxisValueFormatter$$$format$($dvt$$1$$, $DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = parseFloat($dvt$$1$$);
    if (isNaN($DvtAxisKeyboardHandler$$)) {
      return $dvt$$1$$;
    }
    var $DvtAxisEventManager$$;
    if (0 < this.$_scaleFactor$) {
      for ($DvtAxisEventManager$$ = 0;$DvtAxisEventManager$$ < this.$_scaleFactor$;$DvtAxisEventManager$$++) {
        $DvtAxisKeyboardHandler$$ /= 10;
      }
      $DvtAxisEventManager$$ = this.$_factorToScaleMapping$[this.$_scaleFactor$].$localizedSuffix$;
    }
    if ($DvtAxisObjPeer$$ && $DvtAxisObjPeer$$.getAsString) {
      $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$.getAsString($DvtAxisKeyboardHandler$$);
    } else {
      if ($DvtAxisObjPeer$$ && $DvtAxisObjPeer$$.format) {
        $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$.format($DvtAxisKeyboardHandler$$);
      } else {
        var $DvtAxisDefaults$$ = this.$_context$.$getNumberConverter$({minimumFractionDigits:this.$_decimalPlaces$, maximumFractionDigits:this.$_decimalPlaces$});
        $DvtAxisDefaults$$ && $DvtAxisDefaults$$.format ? $DvtAxisKeyboardHandler$$ = $DvtAxisDefaults$$.format($DvtAxisKeyboardHandler$$) : this.$_useAutoPrecision$ && !isNaN(parseFloat($DvtAxisKeyboardHandler$$)) && ($DvtAxisKeyboardHandler$$ = parseFloat((new Number($DvtAxisKeyboardHandler$$)).toFixed(this.$_decimalPlaces$)), $DvtAxisKeyboardHandler$$ = this.$_formatFraction$($DvtAxisKeyboardHandler$$));
      }
    }
    "string" === typeof $DvtAxisEventManager$$ && 0 != $dvt$$1$$ && ($DvtAxisKeyboardHandler$$ += $DvtAxisEventManager$$);
    return $DvtAxisKeyboardHandler$$;
  };
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.prototype.$_formatFraction$ = function $$dvt$$1$$$$LinearScaleAxisValueFormatter$$$$_formatFraction$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ = $DvtAxisObjPeer$$.toString();
    if (-1 != $DvtAxisObjPeer$$.indexOf("e")) {
      return $DvtAxisObjPeer$$;
    }
    var $DvtAxisKeyboardHandler$$ = ".", $DvtAxisKeyboardHandler$$ = $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "NUMBER_FORMAT_DECIMAL_SEPARATOR");
    if (0 < this.$_decimalPlaces$) {
      for ($DvtAxisObjPeer$$ = -1 == $DvtAxisObjPeer$$.indexOf(".") ? $DvtAxisObjPeer$$ + $DvtAxisKeyboardHandler$$ : $DvtAxisObjPeer$$.replace(".", $DvtAxisKeyboardHandler$$), $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$.substring($DvtAxisObjPeer$$.indexOf($DvtAxisKeyboardHandler$$) + 1).length;$DvtAxisKeyboardHandler$$ < this.$_decimalPlaces$;) {
        $DvtAxisObjPeer$$ += "0", $DvtAxisKeyboardHandler$$++;
      }
    }
    return $DvtAxisObjPeer$$;
  };
  $dvt$$1$$.$LinearScaleAxisValueFormatter$.prototype.$_getPowerOfTen$ = function $$dvt$$1$$$$LinearScaleAxisValueFormatter$$$$_getPowerOfTen$$($dvt$$1$$) {
    $dvt$$1$$ = 0 <= $dvt$$1$$ ? $dvt$$1$$ : -$dvt$$1$$;
    var $DvtAxisObjPeer$$ = 0;
    if (1E-15 > $dvt$$1$$) {
      return 0;
    }
    if (Infinity == $dvt$$1$$) {
      return Number.MAX_VALUE;
    }
    if (10 <= $dvt$$1$$) {
      for (;10 <= $dvt$$1$$;) {
        $DvtAxisObjPeer$$ += 1, $dvt$$1$$ /= 10;
      }
    } else {
      if (1 > $dvt$$1$$) {
        for (;1 > $dvt$$1$$;) {
          --$DvtAxisObjPeer$$, $dvt$$1$$ *= 10;
        }
      }
    }
    return $DvtAxisObjPeer$$;
  };
  $dvt$$1$$.$TimeAxisInfo$ = function $$dvt$$1$$$$TimeAxisInfo$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    this.Init($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$);
  };
  $dvt$$1$$.$Obj$.$createSubclass$($dvt$$1$$.$TimeAxisInfo$, $dvt$$1$$.$AxisInfo$);
  $dvt$$1$$.$TimeAxisInfo$.$TIME_SECOND$ = 1E3;
  $dvt$$1$$.$TimeAxisInfo$.$TIME_MINUTE$ = 60 * $dvt$$1$$.$TimeAxisInfo$.$TIME_SECOND$;
  $dvt$$1$$.$TimeAxisInfo$.$TIME_HOUR$ = 60 * $dvt$$1$$.$TimeAxisInfo$.$TIME_MINUTE$;
  $dvt$$1$$.$TimeAxisInfo$.$TIME_DAY$ = 24 * $dvt$$1$$.$TimeAxisInfo$.$TIME_HOUR$;
  $dvt$$1$$.$TimeAxisInfo$.$TIME_MONTH_MIN$ = 28 * $dvt$$1$$.$TimeAxisInfo$.$TIME_DAY$;
  $dvt$$1$$.$TimeAxisInfo$.$TIME_MONTH_MAX$ = 31 * $dvt$$1$$.$TimeAxisInfo$.$TIME_DAY$;
  $dvt$$1$$.$TimeAxisInfo$.$TIME_YEAR_MIN$ = 365 * $dvt$$1$$.$TimeAxisInfo$.$TIME_DAY$;
  $dvt$$1$$.$TimeAxisInfo$.$TIME_YEAR_MAX$ = 366 * $dvt$$1$$.$TimeAxisInfo$.$TIME_DAY$;
  $dvt$$1$$.$TimeAxisInfo$.prototype.Init = function $$dvt$$1$$$$TimeAxisInfo$$$Init$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    $dvt$$1$$.$TimeAxisInfo$.$superclass$.Init.call(this, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    "top" == this.$Position$ || "bottom" == this.$Position$ ? ($DvtAxisKeyboardHandler$$._isOverview || "on" != $DvtAxisKeyboardHandler$$.tickLabel.rendered || (this.$StartOverflow$ = Math.max($dvt$$1$$.$Axis$.$MINIMUM_AXIS_BUFFER$ - $DvtAxisKeyboardHandler$$.leftBuffer, 0), this.$EndOverflow$ = Math.max($dvt$$1$$.$Axis$.$MINIMUM_AXIS_BUFFER$ - $DvtAxisKeyboardHandler$$.rightBuffer, 0)), $dvt$$1$$.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$) ? (this.$_startCoord$ = this.$EndCoord$ - this.$EndOverflow$, 
    this.$_endCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_startCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_endCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : (this.$_startCoord$ = this.$StartCoord$, this.$_endCoord$ = this.$EndCoord$);
    this.$_label1Converter$ = ($DvtAxisEventManager$$ = null != $DvtAxisKeyboardHandler$$.tickLabel ? $DvtAxisKeyboardHandler$$.tickLabel.converter : null) && $DvtAxisEventManager$$[0] ? $DvtAxisEventManager$$[0] : $DvtAxisEventManager$$;
    this.$_label2Converter$ = $DvtAxisEventManager$$ && $DvtAxisEventManager$$[1] ? $DvtAxisEventManager$$[1] : null;
    this.$_dateToIsoConverter$ = $DvtAxisObjPeer$$.$getLocaleHelpers$().dateToIsoConverter;
    this.$_groups$ = $DvtAxisKeyboardHandler$$.groups;
    $DvtAxisObjPeer$$ = $DvtAxisKeyboardHandler$$.timeAxisType;
    this.$_skipGaps$ = "skipGaps" == $DvtAxisObjPeer$$;
    this.$_mixedFrequency$ = "mixedFrequency" == $DvtAxisObjPeer$$;
    this.$DataMin$ = $DvtAxisKeyboardHandler$$.dataMin;
    this.$DataMax$ = $DvtAxisKeyboardHandler$$.dataMax;
    this.$_averageInterval$ = 1 < this.$_groups$.length ? (this.$DataMax$ - this.$DataMin$) / (this.$_groups$.length - 1) : 0 < this.$DataMax$ - this.$DataMin$ ? this.$DataMax$ - this.$DataMin$ : 6 * $dvt$$1$$.$TimeAxisInfo$.$TIME_MINUTE$;
    this.$_step$ = $DvtAxisKeyboardHandler$$.step;
    $DvtAxisObjPeer$$ = 0 < $DvtAxisKeyboardHandler$$.endGroupOffset ? $DvtAxisKeyboardHandler$$.endGroupOffset * this.$_averageInterval$ : 0;
    $DvtAxisEventManager$$ = 0 < $DvtAxisKeyboardHandler$$.startGroupOffset ? $DvtAxisKeyboardHandler$$.startGroupOffset * this.$_averageInterval$ : 0;
    this.$GlobalMin$ = null != $DvtAxisKeyboardHandler$$.min ? $DvtAxisKeyboardHandler$$.min : this.$DataMin$ - $DvtAxisEventManager$$;
    this.$GlobalMax$ = null != $DvtAxisKeyboardHandler$$.max ? $DvtAxisKeyboardHandler$$.max : this.$DataMax$ + $DvtAxisObjPeer$$;
    null != $DvtAxisKeyboardHandler$$.viewportStartGroup && (this.$MinValue$ = $DvtAxisKeyboardHandler$$.viewportStartGroup - $DvtAxisEventManager$$);
    null != $DvtAxisKeyboardHandler$$.viewportEndGroup && (this.$MaxValue$ = $DvtAxisKeyboardHandler$$.viewportEndGroup + $DvtAxisObjPeer$$);
    null != $DvtAxisKeyboardHandler$$.viewportMin && (this.$MinValue$ = $DvtAxisKeyboardHandler$$.viewportMin);
    null != $DvtAxisKeyboardHandler$$.viewportMax && (this.$MaxValue$ = $DvtAxisKeyboardHandler$$.viewportMax);
    null == this.$MinValue$ && (this.$MinValue$ = this.$GlobalMin$);
    null == this.$MaxValue$ && (this.$MaxValue$ = this.$GlobalMax$);
    this.$GlobalMin$ > this.$MinValue$ && (this.$GlobalMin$ = this.$MinValue$);
    this.$GlobalMax$ < this.$MaxValue$ && (this.$GlobalMax$ = this.$MaxValue$);
    this.$_timeRange$ = this.$MaxValue$ - this.$MinValue$;
    this.$_level2Coords$ = this.$_level1Coords$ = this.$_level2Labels$ = this.$_level1Labels$ = null;
    this.$_isOneLevel$ = !0;
    this.$_level1Overflow$ = [];
    this.$_level2Overflow$ = [];
    this.$_locale$ = $DvtAxisKeyboardHandler$$._locale.toLowerCase();
    this.$_monthResources$ = [$dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JANUARY"), $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_FEBRUARY"), $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MARCH"), $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_APRIL"), $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MAY"), 
    $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JUNE"), $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JULY"), $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_AUGUST"), $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_SEPTEMBER"), $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_OCTOBER"), $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, 
    "MONTH_SHORT_NOVEMBER"), $dvt$$1$$.$Bundle$.$getTranslatedString$($dvt$$1$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_DECEMBER")];
  };
  $dvt$$1$$.$TimeAxisInfo$.$_getAMString$ = function $$dvt$$1$$$$TimeAxisInfo$$$_getAMString$$($dvt$$1$$) {
    if ("en-au" == $dvt$$1$$ || "en-ie" == $dvt$$1$$ || "en-ph" == $dvt$$1$$) {
      return "am";
    }
    if ("en-gb" == $dvt$$1$$) {
      return "";
    }
    switch($dvt$$1$$.substring(0, 2)) {
      case "en":
        return "AM";
      case "ar":
        return "\u0635";
      case "el":
        return "\u03c0\u03bc";
      case "ko":
        return "\uc624\uc804";
      case "zh":
        return "\u4e0a\u5348";
      default:
        return "";
    }
  };
  $dvt$$1$$.$TimeAxisInfo$.$_getPMString$ = function $$dvt$$1$$$$TimeAxisInfo$$$_getPMString$$($dvt$$1$$) {
    if ("en-au" == $dvt$$1$$ || "en-ie" == $dvt$$1$$ || "en-ph" == $dvt$$1$$) {
      return "pm";
    }
    if ("en-gb" == $dvt$$1$$) {
      return "";
    }
    switch($dvt$$1$$.substring(0, 2)) {
      case "en":
        return "PM";
      case "ar":
        return "\u0645";
      case "el":
        return "\u03bc\u03bc";
      case "ko":
        return "\uc624\ud6c4";
      case "zh":
        return "\u4e0b\u5348";
      default:
        return "";
    }
  };
  $dvt$$1$$.$TimeAxisInfo$.$_getAMPMBefore$ = function $$dvt$$1$$$$TimeAxisInfo$$$_getAMPMBefore$$($dvt$$1$$) {
    $dvt$$1$$ = $dvt$$1$$.substring(0, 2);
    return "ko" == $dvt$$1$$ || "zh" == $dvt$$1$$ ? !0 : !1;
  };
  $dvt$$1$$.$TimeAxisInfo$.$_getDMYOrder$ = function $$dvt$$1$$$$TimeAxisInfo$$$_getDMYOrder$$($dvt$$1$$) {
    var $DvtAxisObjPeer$$ = $dvt$$1$$.substring(0, 2);
    return "en-us" == $dvt$$1$$ || "en-ph" == $dvt$$1$$ ? "MDY" : "fa" == $DvtAxisObjPeer$$ || "hu" == $DvtAxisObjPeer$$ || "ja" == $DvtAxisObjPeer$$ || "ko" == $DvtAxisObjPeer$$ || "lt" == $DvtAxisObjPeer$$ || "mn" == $DvtAxisObjPeer$$ || "zh" == $DvtAxisObjPeer$$ ? "YMD" : "DMY";
  };
  $dvt$$1$$.$TimeAxisInfo$.$_getYearTrailingCharacters$ = function $$dvt$$1$$$$TimeAxisInfo$$$_getYearTrailingCharacters$$($dvt$$1$$) {
    return 0 == $dvt$$1$$.indexOf("ja") || 0 == $dvt$$1$$.indexOf("zh") ? "\u5e74" : 0 == $dvt$$1$$.indexOf("ko") ? "\ub144" : "";
  };
  $dvt$$1$$.$TimeAxisInfo$.$_getDayTrailingCharacters$ = function $$dvt$$1$$$$TimeAxisInfo$$$_getDayTrailingCharacters$$($dvt$$1$$) {
    return 0 == $dvt$$1$$.indexOf("ja") || 0 == $dvt$$1$$.indexOf("zh") ? "\u65e5" : 0 == $dvt$$1$$.indexOf("ko") ? "\uc77c" : "";
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$formatLabel$ = function $$dvt$$1$$$$TimeAxisInfo$$$$formatLabel$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ = this.$_formatAxisLabel$(new Date($DvtAxisObjPeer$$), null, !0);
    return null != $DvtAxisObjPeer$$[1] ? "YMD" == $dvt$$1$$.$TimeAxisInfo$.$_getDMYOrder$(this.$_locale$) || this.$_timeRange$ < $dvt$$1$$.$TimeAxisInfo$.$TIME_MONTH_MIN$ && this.$_step$ < $dvt$$1$$.$TimeAxisInfo$.$TIME_DAY$ ? $DvtAxisObjPeer$$[1] + " " + $DvtAxisObjPeer$$[0] : $DvtAxisObjPeer$$[0] + " " + $DvtAxisObjPeer$$[1] : $DvtAxisObjPeer$$[0];
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_formatAxisLabelWithConverter$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_formatAxisLabelWithConverter$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if ($DvtAxisKeyboardHandler$$) {
      var $DvtAxisEventManager$$ = null, $DvtAxisDefaults$$ = null;
      $DvtAxisKeyboardHandler$$.getAsString ? ($DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$.getAsString($dvt$$1$$), $DvtAxisDefaults$$ = $DvtAxisKeyboardHandler$$.getAsString($DvtAxisObjPeer$$)) : $DvtAxisKeyboardHandler$$.format && ($DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$.format(this.$_dateToIsoConverter$ ? this.$_dateToIsoConverter$($dvt$$1$$) : $dvt$$1$$), $DvtAxisDefaults$$ = $DvtAxisKeyboardHandler$$.format(this.$_dateToIsoConverter$ ? this.$_dateToIsoConverter$($DvtAxisObjPeer$$) : 
      $DvtAxisObjPeer$$));
      if ($DvtAxisDefaults$$ != $DvtAxisEventManager$$) {
        return $DvtAxisEventManager$$;
      }
    }
    return null;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_formatAxisLabel$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_formatAxisLabel$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = null, $DvtAxisConstants$$ = null, $DvtAxisAutomation$$ = "left" == this.$Position$ || "right" == this.$Position$;
    if (this.$_label1Converter$ || this.$_label2Converter$) {
      return this.$_label1Converter$ && ($DvtAxisDefaults$$ = this.$_formatAxisLabelWithConverter$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, this.$_label1Converter$)), this.$_label2Converter$ && ($DvtAxisConstants$$ = this.$_formatAxisLabelWithConverter$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, this.$_label2Converter$)), [$DvtAxisDefaults$$, $DvtAxisConstants$$];
    }
    if (this.$_step$ >= $dvt$$1$$.$TimeAxisInfo$.$TIME_YEAR_MIN$ || this.$_timeRange$ >= 6 * $dvt$$1$$.$TimeAxisInfo$.$TIME_YEAR_MIN$) {
      $DvtAxisDefaults$$ = this.$_formatDate$($DvtAxisObjPeer$$, !1, !1, !0);
    } else {
      if (this.$_step$ >= $dvt$$1$$.$TimeAxisInfo$.$TIME_MONTH_MIN$ || this.$_timeRange$ >= 6 * $dvt$$1$$.$TimeAxisInfo$.$TIME_MONTH_MIN$) {
        if (null == $DvtAxisKeyboardHandler$$ || $DvtAxisKeyboardHandler$$.getMonth() != $DvtAxisObjPeer$$.getMonth()) {
          $DvtAxisDefaults$$ = this.$_formatDate$($DvtAxisObjPeer$$, !1, !0, !1);
        }
        if (null == $DvtAxisKeyboardHandler$$ || $DvtAxisKeyboardHandler$$.getYear() != $DvtAxisObjPeer$$.getYear()) {
          $DvtAxisConstants$$ = this.$_formatDate$($DvtAxisObjPeer$$, !1, !1, !0);
        }
      } else {
        if (this.$_step$ >= $dvt$$1$$.$TimeAxisInfo$.$TIME_DAY$ || this.$_timeRange$ >= 6 * $dvt$$1$$.$TimeAxisInfo$.$TIME_DAY$) {
          if ($DvtAxisEventManager$$) {
            $DvtAxisDefaults$$ = this.$_formatDate$($DvtAxisObjPeer$$, !0, !0, !0);
          } else {
            if (null == $DvtAxisKeyboardHandler$$ || $DvtAxisKeyboardHandler$$.getDate() != $DvtAxisObjPeer$$.getDate()) {
              $DvtAxisDefaults$$ = this.$_formatDate$($DvtAxisObjPeer$$, !0, !1, !1);
            }
            null == $DvtAxisKeyboardHandler$$ || $DvtAxisKeyboardHandler$$.getYear() != $DvtAxisObjPeer$$.getYear() ? $DvtAxisConstants$$ = this.$_formatDate$($DvtAxisObjPeer$$, !1, !0, !0) : $DvtAxisKeyboardHandler$$.getMonth() != $DvtAxisObjPeer$$.getMonth() && ($DvtAxisConstants$$ = this.$_formatDate$($DvtAxisObjPeer$$, !1, !0, !1));
          }
        } else {
          if (this.$_step$ >= $dvt$$1$$.$TimeAxisInfo$.$TIME_HOUR$ || this.$_timeRange$ >= 6 * $dvt$$1$$.$TimeAxisInfo$.$TIME_HOUR$) {
            if (null == $DvtAxisKeyboardHandler$$ || $DvtAxisKeyboardHandler$$.getHours() != $DvtAxisObjPeer$$.getHours()) {
              $DvtAxisDefaults$$ = this.$_formatTime$($DvtAxisObjPeer$$, !1, !1);
            }
          } else {
            if (this.$_step$ >= $dvt$$1$$.$TimeAxisInfo$.$TIME_MINUTE$ || this.$_timeRange$ >= 6 * $dvt$$1$$.$TimeAxisInfo$.$TIME_MINUTE$) {
              if (null == $DvtAxisKeyboardHandler$$ || $DvtAxisKeyboardHandler$$.getMinutes() != $DvtAxisObjPeer$$.getMinutes()) {
                $DvtAxisDefaults$$ = this.$_formatTime$($DvtAxisObjPeer$$, !0, !1);
              }
            } else {
              if (null == $DvtAxisKeyboardHandler$$ || $DvtAxisKeyboardHandler$$.getSeconds() != $DvtAxisObjPeer$$.getSeconds()) {
                $DvtAxisDefaults$$ = this.$_formatTime$($DvtAxisObjPeer$$, !0, !0);
              }
            }
          }
          if ($DvtAxisAutomation$$) {
            if (null == $DvtAxisKeyboardHandler$$ || $DvtAxisKeyboardHandler$$.getDate() != $DvtAxisObjPeer$$.getDate()) {
              $DvtAxisConstants$$ = this.$_formatDate$($DvtAxisObjPeer$$, !0, !0, !1);
            }
          } else {
            null == $DvtAxisKeyboardHandler$$ || $DvtAxisKeyboardHandler$$.getYear() != $DvtAxisObjPeer$$.getYear() ? $DvtAxisConstants$$ = this.$_formatDate$($DvtAxisObjPeer$$, !0, !0, !0) : $DvtAxisKeyboardHandler$$.getMonth() != $DvtAxisObjPeer$$.getMonth() ? $DvtAxisConstants$$ = this.$_formatDate$($DvtAxisObjPeer$$, !0, !0, !1) : $DvtAxisKeyboardHandler$$.getDate() != $DvtAxisObjPeer$$.getDate() && ($DvtAxisConstants$$ = this.$_formatDate$($DvtAxisObjPeer$$, !0, !1, !1));
          }
        }
      }
    }
    return [$DvtAxisDefaults$$, $DvtAxisConstants$$];
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_formatDate$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_formatDate$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    var $DvtAxisConstants$$ = "th" == this.$_locale$.substring(0, 2) && "jet" != this.$Options$._environment ? $DvtAxisObjPeer$$.getFullYear() + 543 : $DvtAxisObjPeer$$.getFullYear(), $DvtAxisAutomation$$;
    $DvtAxisAutomation$$ = this.$_monthResources$ && 12 <= this.$_monthResources$.length ? this.$_monthResources$[$DvtAxisObjPeer$$.getMonth()] : $DvtAxisObjPeer$$.toString().split(" ")[1];
    $DvtAxisObjPeer$$ = $DvtAxisObjPeer$$.getDate();
    $DvtAxisConstants$$ += $dvt$$1$$.$TimeAxisInfo$.$_getYearTrailingCharacters$(this.$_locale$);
    $DvtAxisObjPeer$$ += $dvt$$1$$.$TimeAxisInfo$.$_getDayTrailingCharacters$(this.$_locale$);
    for (var $DvtAxisRenderer$$ = $dvt$$1$$.$TimeAxisInfo$.$_getDMYOrder$(this.$_locale$), $dateStr$$ = "", $i$$239$$ = 0;$i$$239$$ < $DvtAxisRenderer$$.length;$i$$239$$++) {
      $DvtAxisKeyboardHandler$$ && "D" == $DvtAxisRenderer$$[$i$$239$$] ? $dateStr$$ += $DvtAxisObjPeer$$ + " " : $DvtAxisEventManager$$ && "M" == $DvtAxisRenderer$$[$i$$239$$] ? $dateStr$$ += $DvtAxisAutomation$$ + " " : $DvtAxisDefaults$$ && "Y" == $DvtAxisRenderer$$[$i$$239$$] && ($dateStr$$ += $DvtAxisConstants$$ + " ");
    }
    return 0 < $dateStr$$.length ? $dateStr$$.slice(0, $dateStr$$.length - 1) : $dateStr$$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_formatTime$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_formatTime$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = $DvtAxisObjPeer$$.getHours(), $DvtAxisConstants$$ = $DvtAxisObjPeer$$.getMinutes();
    $DvtAxisObjPeer$$ = $DvtAxisObjPeer$$.getSeconds();
    var $DvtAxisAutomation$$ = $dvt$$1$$.$TimeAxisInfo$.$_getAMString$(this.$_locale$), $DvtAxisRenderer$$ = $dvt$$1$$.$TimeAxisInfo$.$_getPMString$(this.$_locale$), $ampmBefore$$ = $dvt$$1$$.$TimeAxisInfo$.$_getAMPMBefore$(this.$_locale$), $b12HFormat$$ = "" != $DvtAxisAutomation$$ && "" != $DvtAxisRenderer$$, $ampm$$, $timeLabel$$ = "";
    $dvt$$1$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && ($timeLabel$$ = "\u200f");
    if ($b12HFormat$$) {
      if (12 > $DvtAxisDefaults$$ ? ($ampm$$ = $DvtAxisAutomation$$, 0 == $DvtAxisDefaults$$ && ($DvtAxisDefaults$$ = 12)) : ($ampm$$ = $DvtAxisRenderer$$, 12 < $DvtAxisDefaults$$ && ($DvtAxisDefaults$$ -= 12)), $timeLabel$$ += $DvtAxisDefaults$$, $DvtAxisKeyboardHandler$$ || 0 != $DvtAxisConstants$$) {
        $timeLabel$$ += ":" + this.$_doubleDigit$($DvtAxisConstants$$);
      }
    } else {
      $timeLabel$$ += this.$_doubleDigit$($DvtAxisDefaults$$) + ":" + this.$_doubleDigit$($DvtAxisConstants$$);
    }
    $DvtAxisEventManager$$ && ($timeLabel$$ += ":" + this.$_doubleDigit$($DvtAxisObjPeer$$));
    return $b12HFormat$$ ? $ampmBefore$$ ? $ampm$$ + " " + $timeLabel$$ : $timeLabel$$ + " " + $ampm$$ : $timeLabel$$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_doubleDigit$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_doubleDigit$$($dvt$$1$$) {
    return 10 > $dvt$$1$$ ? "0" + $dvt$$1$$ : "" + $dvt$$1$$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_getMixedFrequencyStep$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_getMixedFrequencyStep$$() {
    return this.$_timeRange$ >= 6 * $dvt$$1$$.$TimeAxisInfo$.$TIME_YEAR_MIN$ ? $dvt$$1$$.$TimeAxisInfo$.$TIME_YEAR_MIN$ : this.$_timeRange$ >= 6 * $dvt$$1$$.$TimeAxisInfo$.$TIME_MONTH_MIN$ ? $dvt$$1$$.$TimeAxisInfo$.$TIME_MONTH_MIN$ : this.$_timeRange$ >= 6 * $dvt$$1$$.$TimeAxisInfo$.$TIME_DAY$ ? $dvt$$1$$.$TimeAxisInfo$.$TIME_DAY$ : this.$_timeRange$ >= $dvt$$1$$.$TimeAxisInfo$.$TIME_DAY$ ? 3 * $dvt$$1$$.$TimeAxisInfo$.$TIME_HOUR$ : this.$_timeRange$ >= 6 * $dvt$$1$$.$TimeAxisInfo$.$TIME_HOUR$ ? 
    $dvt$$1$$.$TimeAxisInfo$.$TIME_HOUR$ : this.$_timeRange$ >= $dvt$$1$$.$TimeAxisInfo$.$TIME_HOUR$ ? 15 * $dvt$$1$$.$TimeAxisInfo$.$TIME_MINUTE$ : this.$_timeRange$ >= 30 * $dvt$$1$$.$TimeAxisInfo$.$TIME_MINUTE$ ? 5 * $dvt$$1$$.$TimeAxisInfo$.$TIME_MINUTE$ : this.$_timeRange$ >= 6 * $dvt$$1$$.$TimeAxisInfo$.$TIME_MINUTE$ ? $dvt$$1$$.$TimeAxisInfo$.$TIME_MINUTE$ : this.$_timeRange$ >= $dvt$$1$$.$TimeAxisInfo$.$TIME_MINUTE$ ? 15 * $dvt$$1$$.$TimeAxisInfo$.$TIME_SECOND$ : this.$_timeRange$ >= 30 * 
    $dvt$$1$$.$TimeAxisInfo$.$TIME_SECOND$ ? 5 * $dvt$$1$$.$TimeAxisInfo$.$TIME_SECOND$ : $dvt$$1$$.$TimeAxisInfo$.$TIME_SECOND$;
  };
  $dvt$$1$$.$TimeAxisInfo$.$_getLabelPositions$ = function $$dvt$$1$$$$TimeAxisInfo$$$_getLabelPositions$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = new Date($DvtAxisObjPeer$$);
    $DvtAxisDefaults$$.setMonth(0, 1);
    $DvtAxisDefaults$$.setHours(0, 0, 0, 0);
    var $DvtAxisDefaults$$ = $DvtAxisDefaults$$.getTime(), $DvtAxisConstants$$ = [];
    if ($DvtAxisEventManager$$ >= $dvt$$1$$.$TimeAxisInfo$.$TIME_YEAR_MIN$ && $DvtAxisEventManager$$ <= $dvt$$1$$.$TimeAxisInfo$.$TIME_YEAR_MAX$) {
      for (;$DvtAxisDefaults$$ < $DvtAxisObjPeer$$;) {
        $DvtAxisDefaults$$ = $dvt$$1$$.$TimeAxisInfo$.$_addOneYear$($DvtAxisDefaults$$);
      }
      for (;$DvtAxisDefaults$$ <= $DvtAxisKeyboardHandler$$;) {
        $DvtAxisConstants$$.push($DvtAxisDefaults$$), $DvtAxisDefaults$$ = $dvt$$1$$.$TimeAxisInfo$.$_addOneYear$($DvtAxisDefaults$$);
      }
    } else {
      if ($DvtAxisEventManager$$ >= $dvt$$1$$.$TimeAxisInfo$.$TIME_MONTH_MIN$ && $DvtAxisEventManager$$ <= $dvt$$1$$.$TimeAxisInfo$.$TIME_MONTH_MAX$) {
        for (;$DvtAxisDefaults$$ < $DvtAxisObjPeer$$;) {
          $DvtAxisDefaults$$ = $dvt$$1$$.$TimeAxisInfo$.$_addOneMonth$($DvtAxisDefaults$$);
        }
        for (;$DvtAxisDefaults$$ <= $DvtAxisKeyboardHandler$$;) {
          $DvtAxisConstants$$.push($DvtAxisDefaults$$), $DvtAxisDefaults$$ = $dvt$$1$$.$TimeAxisInfo$.$_addOneMonth$($DvtAxisDefaults$$);
        }
      } else {
        for ($DvtAxisDefaults$$ += Math.ceil(($DvtAxisObjPeer$$ - $DvtAxisDefaults$$) / $DvtAxisEventManager$$) * $DvtAxisEventManager$$;$DvtAxisDefaults$$ <= $DvtAxisKeyboardHandler$$;) {
          $DvtAxisConstants$$.push($DvtAxisDefaults$$), $DvtAxisDefaults$$ += $DvtAxisEventManager$$;
        }
      }
    }
    return $DvtAxisConstants$$;
  };
  $dvt$$1$$.$TimeAxisInfo$.$_addOneYear$ = function $$dvt$$1$$$$TimeAxisInfo$$$_addOneYear$$($dvt$$1$$) {
    $dvt$$1$$ = new Date($dvt$$1$$);
    $dvt$$1$$.setFullYear($dvt$$1$$.getFullYear() + 1);
    return $dvt$$1$$.getTime();
  };
  $dvt$$1$$.$TimeAxisInfo$.$_addOneMonth$ = function $$dvt$$1$$$$TimeAxisInfo$$$_addOneMonth$$($dvt$$1$$) {
    $dvt$$1$$ = new Date($dvt$$1$$);
    $dvt$$1$$.setMonth($dvt$$1$$.getMonth() + 1);
    return $dvt$$1$$.getTime();
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_generateLabels$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_generateLabels$$($DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = [], $DvtAxisEventManager$$ = [], $DvtAxisDefaults$$ = [], $DvtAxisConstants$$ = [], $DvtAxisAutomation$$ = [], $DvtAxisRenderer$$ = null, $c1$$ = 0, $c2$$ = 0, $container$$17$$ = $DvtAxisObjPeer$$.$_stage$, $isRTL$$9$$ = $dvt$$1$$.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$), $isVert$$3$$ = "left" == this.$Position$ || "right" == this.$Position$, $scrollable$$ = "off" != this.$Options$.zoomAndScroll, $first$$3$$ = !0, $levelsGap$$ = 0;
    $isVert$$3$$ && $dvt$$1$$.$Agent$.$isBrowserChrome$() && ($levelsGap$$ = .16 * this.$getTickLabelHeight$());
    var $times$$1$$ = [];
    if (null != this.$_step$) {
      $times$$1$$ = $dvt$$1$$.$TimeAxisInfo$.$_getLabelPositions$(this.$MinValue$, this.$MaxValue$, this.$_step$);
    } else {
      if (this.$_mixedFrequency$) {
        this.$_step$ = this.$_getMixedFrequencyStep$(), $times$$1$$ = $dvt$$1$$.$TimeAxisInfo$.$_getLabelPositions$(this.$MinValue$, this.$MaxValue$, this.$_step$);
      } else {
        for (var $firstLabel$$1_i$$240$$ = 0;$firstLabel$$1_i$$240$$ < this.$_groups$.length;$firstLabel$$1_i$$240$$++) {
          this.$_groups$[$firstLabel$$1_i$$240$$] >= this.$MinValue$ && this.$_groups$[$firstLabel$$1_i$$240$$] <= this.$MaxValue$ && $times$$1$$.push(this.$_groups$[$firstLabel$$1_i$$240$$]);
        }
        this.$_step$ = this.$_averageInterval$;
        this.$_skipGaps$ || ($firstLabel$$1_i$$240$$ = new $dvt$$1$$.$OutputText$($DvtAxisObjPeer$$, this.$_formatAxisLabel$(new Date($times$$1$$[0]))[0], 0, 0), (($isVert$$3$$ ? $dvt$$1$$.$TextUtils$.$guessTextDimensions$($firstLabel$$1_i$$240$$).$h$ : $firstLabel$$1_i$$240$$.$measureDimensions$().$w$) + this.$GetTickLabelGapSize$()) * ($times$$1$$.length - 1) > Math.abs(this.$_endCoord$ - this.$_startCoord$) && (this.$_step$ = this.$_getMixedFrequencyStep$(), $times$$1$$ = $dvt$$1$$.$TimeAxisInfo$.$_getLabelPositions$(this.$MinValue$, 
        this.$MaxValue$, this.$_step$)));
      }
    }
    0 == $times$$1$$.length && ($times$$1$$ = [this.$MinValue$]);
    for ($firstLabel$$1_i$$240$$ = 0;$firstLabel$$1_i$$240$$ < $times$$1$$.length;$firstLabel$$1_i$$240$$++) {
      var $date$$9_time$$3$$ = $times$$1$$[$firstLabel$$1_i$$240$$], $coord$$13$$ = this.$getCoordAt$($date$$9_time$$3$$);
      if (null != $coord$$13$$) {
        var $date$$9_time$$3$$ = new Date($date$$9_time$$3$$), $label2$$1_twoLabels$$1$$ = this.$_formatAxisLabel$($date$$9_time$$3$$, $DvtAxisRenderer$$), $DvtAxisRenderer$$ = $label2$$1_twoLabels$$1$$[0], $label2$$1_twoLabels$$1$$ = $label2$$1_twoLabels$$1$$[1];
        null != $DvtAxisRenderer$$ ? ($DvtAxisDefaults$$.push({text:$DvtAxisRenderer$$, $coord$:null != $label2$$1_twoLabels$$1$$ ? $coord$$13$$ + $levelsGap$$ : $coord$$13$$}), $DvtAxisConstants$$.push($coord$$13$$), $c1$$++) : ($DvtAxisDefaults$$.push(null), $DvtAxisConstants$$.push(null));
        $DvtAxisKeyboardHandler$$.push(null);
        $scrollable$$ && $first$$3$$ && ($coord$$13$$ = this.$MinValue$ ? this.$getCoordAt$(this.$MinValue$) : $coord$$13$$);
        $first$$3$$ = !1;
        null != $label2$$1_twoLabels$$1$$ ? ($DvtAxisRenderer$$ = this.$CreateLabel$($DvtAxisObjPeer$$, $label2$$1_twoLabels$$1$$, null != $label2$$1_twoLabels$$1$$ ? $coord$$13$$ - $levelsGap$$ : $coord$$13$$), $DvtAxisAutomation$$.push($coord$$13$$), $isVert$$3$$ || ($isRTL$$9$$ ? $DvtAxisRenderer$$.$alignRight$() : $DvtAxisRenderer$$.$alignLeft$()), $DvtAxisEventManager$$.push($DvtAxisRenderer$$), this.$_isOneLevel$ = !1, $c2$$++) : ($DvtAxisEventManager$$.push(null), $DvtAxisAutomation$$.push(null));
        $DvtAxisRenderer$$ = $date$$9_time$$3$$;
      }
    }
    $c1$$ = this.$_skipLabelsUniform$($DvtAxisDefaults$$, $DvtAxisKeyboardHandler$$, $container$$17$$);
    if (!$scrollable$$ && 1 < $c2$$ && $c1$$ < 1.5 * $c2$$) {
      $DvtAxisKeyboardHandler$$ = $DvtAxisEventManager$$;
      $DvtAxisEventManager$$ = null;
      for ($DvtAxisObjPeer$$ = 0;$DvtAxisObjPeer$$ < $DvtAxisKeyboardHandler$$.length;$DvtAxisObjPeer$$++) {
        null != $DvtAxisKeyboardHandler$$[$DvtAxisObjPeer$$] && $DvtAxisKeyboardHandler$$[$DvtAxisObjPeer$$].$alignCenter$();
      }
      this.$_skipLabelsGreedy$($DvtAxisKeyboardHandler$$, this.$GetLabelDims$($DvtAxisKeyboardHandler$$, $container$$17$$), !1, $isRTL$$9$$);
    } else {
      $c2$$ = this.$_skipLabelsGreedy$($DvtAxisEventManager$$, this.$GetLabelDims$($DvtAxisEventManager$$, $container$$17$$), !0, $isRTL$$9$$), 0 == $c2$$ && ($DvtAxisEventManager$$ = null);
    }
    $isVert$$3$$ && null != $DvtAxisEventManager$$ && this.$_skipVertLabels$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    this.$_level1Labels$ = $DvtAxisKeyboardHandler$$;
    this.$_level2Labels$ = $DvtAxisEventManager$$;
    this.$_level1Coords$ = $DvtAxisConstants$$;
    this.$_level2Coords$ = $DvtAxisAutomation$$;
  };
  $dvt$$1$$.$TimeAxisInfo$.$_isOverlapping$ = function $$dvt$$1$$$$TimeAxisInfo$$$_isOverlapping$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    return $DvtAxisKeyboardHandler$$ >= $dvt$$1$$ && $DvtAxisKeyboardHandler$$ - $DvtAxisDefaults$$ < $DvtAxisObjPeer$$ || $DvtAxisKeyboardHandler$$ < $dvt$$1$$ && $DvtAxisEventManager$$ + $DvtAxisDefaults$$ > $dvt$$1$$ ? !0 : !1;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_getLabelOverflow$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_getLabelOverflow$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = $dvt$$1$$ - ($DvtAxisKeyboardHandler$$ ? $DvtAxisEventManager$$ ? $DvtAxisObjPeer$$ : 0 : .5 * $DvtAxisObjPeer$$);
    if ($DvtAxisDefaults$$ < this.$Options$._minOverflowCoord) {
      return Math.floor($DvtAxisDefaults$$ - this.$Options$._minOverflowCoord);
    }
    $dvt$$1$$ += $DvtAxisKeyboardHandler$$ ? $DvtAxisEventManager$$ ? 0 : $DvtAxisObjPeer$$ : .5 * $DvtAxisObjPeer$$;
    return $dvt$$1$$ > this.$Options$._maxOverflowCoord ? Math.ceil($dvt$$1$$ - this.$Options$._maxOverflowCoord) : 0;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_skipLabelsGreedy$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_skipLabelsGreedy$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    if (!$DvtAxisKeyboardHandler$$ || 0 >= $DvtAxisKeyboardHandler$$.length) {
      return !1;
    }
    for (var $DvtAxisConstants$$ = "left" == this.$Position$ || "right" == this.$Position$, $DvtAxisAutomation$$ = this.$getTickLabelHeight$(), $DvtAxisAutomation$$ = $DvtAxisConstants$$ ? .08 * $DvtAxisAutomation$$ : .24 * $DvtAxisAutomation$$, $DvtAxisRenderer$$ = 0, $pointA1$$3$$, $pointA2$$3$$, $label$$39$$, $availWidth$$9$$ = Math.abs(this.$_endCoord$ - this.$_startCoord$), $j$$38$$ = 0;$j$$38$$ < $DvtAxisKeyboardHandler$$.length;$j$$38$$++) {
      if (this.$_level2Overflow$.push(0), null != $DvtAxisObjPeer$$[$j$$38$$]) {
        $label$$39$$ = $DvtAxisObjPeer$$[$j$$38$$];
        var $labelLength$$1_overflow$$2$$ = $dvt$$1$$.$TextUtils$.$getTextWidth$($label$$39$$);
        $DvtAxisKeyboardHandler$$[$j$$38$$].$w$ > $availWidth$$9$$ ? $DvtAxisObjPeer$$[$j$$38$$] = null : ($labelLength$$1_overflow$$2$$ = this.$_getLabelOverflow$($label$$39$$.$getX$(), $labelLength$$1_overflow$$2$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$), this.$_level2Overflow$[$j$$38$$] = $labelLength$$1_overflow$$2$$, 0 != $labelLength$$1_overflow$$2$$ && ($label$$39$$.$setX$($label$$39$$.$getX$() - $labelLength$$1_overflow$$2$$), $DvtAxisKeyboardHandler$$[$j$$38$$].x -= $labelLength$$1_overflow$$2$$));
      }
    }
    for ($j$$38$$ = 0;$j$$38$$ < $DvtAxisKeyboardHandler$$.length;$j$$38$$++) {
      null != $DvtAxisKeyboardHandler$$[$j$$38$$] && ($DvtAxisConstants$$ ? ($DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$[$j$$38$$].y, $DvtAxisDefaults$$ = $DvtAxisKeyboardHandler$$[$j$$38$$].y + $DvtAxisKeyboardHandler$$[$j$$38$$].$h$) : ($DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$[$j$$38$$].x, $DvtAxisDefaults$$ = $DvtAxisKeyboardHandler$$[$j$$38$$].x + $DvtAxisKeyboardHandler$$[$j$$38$$].$w$), null != $pointA1$$3$$ && null != $pointA2$$3$$ && $dvt$$1$$.$TimeAxisInfo$.$_isOverlapping$($pointA1$$3$$, 
      $pointA2$$3$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$) && ($DvtAxisObjPeer$$[$j$$38$$] = null), null != $DvtAxisObjPeer$$[$j$$38$$] && ($pointA1$$3$$ = $DvtAxisEventManager$$, $pointA2$$3$$ = $DvtAxisDefaults$$, $DvtAxisRenderer$$++));
    }
    return $DvtAxisRenderer$$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_skipLabelsUniform$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_skipLabelsUniform$$($dvt$$1$$, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    function $DvtAxisEventManager$$($dvt$$1$$) {
      if (null == $DvtAxisConstants$$[$dvt$$1$$]) {
        if ($DvtAxisDefaults$$[$dvt$$1$$].label = $_this$$.$CreateLabel$($DvtAxisKeyboardHandler$$.$getCtx$(), $DvtAxisDefaults$$[$dvt$$1$$].text, $DvtAxisDefaults$$[$dvt$$1$$].$coord$), $DvtAxisConstants$$[$dvt$$1$$] = $DvtAxisDefaults$$[$dvt$$1$$].label.$measureDimensions$($DvtAxisKeyboardHandler$$), $DvtAxisConstants$$[$dvt$$1$$].$w$ > $DvtAxisAutomation$$) {
          $DvtAxisDefaults$$[$dvt$$1$$].label = null, $DvtAxisConstants$$[$dvt$$1$$].$w$ = 0, $DvtAxisConstants$$[$dvt$$1$$].$h$ = 0;
        } else {
          var $DvtAxisObjPeer$$ = $_this$$.$_getLabelOverflow$($DvtAxisDefaults$$[$dvt$$1$$].$coord$, $DvtAxisConstants$$[$dvt$$1$$].$w$, !1, !1);
          0 != $DvtAxisObjPeer$$ && ($DvtAxisDefaults$$[$dvt$$1$$].$coord$ -= $DvtAxisObjPeer$$, $DvtAxisConstants$$[$dvt$$1$$].x -= $DvtAxisObjPeer$$, $DvtAxisDefaults$$[$dvt$$1$$].label.$setX$($DvtAxisDefaults$$[$dvt$$1$$].label.$getX$() - $DvtAxisObjPeer$$), $_this$$.$_level1Overflow$[$dvt$$1$$] = $DvtAxisObjPeer$$);
        }
      }
      return $isVert$$5$$ ? $DvtAxisConstants$$[$dvt$$1$$].$h$ : $DvtAxisConstants$$[$dvt$$1$$].$w$;
    }
    for (var $DvtAxisDefaults$$ = [], $DvtAxisConstants$$ = [], $DvtAxisAutomation$$ = Math.abs(this.$_endCoord$ - this.$_startCoord$), $DvtAxisRenderer$$ = 0;$DvtAxisRenderer$$ < $dvt$$1$$.length;$DvtAxisRenderer$$++) {
      null != $dvt$$1$$[$DvtAxisRenderer$$] && ($DvtAxisDefaults$$.push($dvt$$1$$[$DvtAxisRenderer$$]), $DvtAxisConstants$$.push(null), this.$_level1Overflow$.push(0));
    }
    for (var $isVert$$5$$ = "left" == this.$Position$ || "right" == this.$Position$, $_this$$ = this, $DvtAxisRenderer$$ = ($DvtAxisEventManager$$(0) + this.$GetTickLabelGapSize$()) * ($DvtAxisDefaults$$.length - 1), $count$$14_skip$$ = 0 < $DvtAxisAutomation$$ ? Math.ceil($DvtAxisRenderer$$ / $DvtAxisAutomation$$) - 1 : 0, $DvtAxisRenderer$$ = !0;$DvtAxisRenderer$$;) {
      for ($DvtAxisRenderer$$ = 0;$DvtAxisRenderer$$ < $DvtAxisDefaults$$.length;$DvtAxisRenderer$$++) {
        0 == $DvtAxisRenderer$$ % ($count$$14_skip$$ + 1) ? ($DvtAxisEventManager$$($DvtAxisRenderer$$), $DvtAxisDefaults$$[$DvtAxisRenderer$$].$skipped$ = !1) : $DvtAxisDefaults$$[$DvtAxisRenderer$$].$skipped$ = !0;
      }
      $DvtAxisRenderer$$ = this.$IsOverlapping$($DvtAxisConstants$$, $count$$14_skip$$);
      $count$$14_skip$$++;
    }
    for ($DvtAxisRenderer$$ = $count$$14_skip$$ = 0;$DvtAxisRenderer$$ < $dvt$$1$$.length;$DvtAxisRenderer$$++) {
      null == $dvt$$1$$[$DvtAxisRenderer$$] || $dvt$$1$$[$DvtAxisRenderer$$].$skipped$ || ($DvtAxisObjPeer$$[$DvtAxisRenderer$$] = $dvt$$1$$[$DvtAxisRenderer$$].label, $count$$14_skip$$++);
    }
    return $count$$14_skip$$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_skipVertLabels$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_skipVertLabels$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    function $DvtAxisEventManager$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
      return $dvt$$1$$.$TimeAxisInfo$.$_isOverlapping$($DvtAxisObjPeer$$.y, $DvtAxisObjPeer$$.y + $DvtAxisObjPeer$$.$h$, $DvtAxisKeyboardHandler$$.y, $DvtAxisKeyboardHandler$$.y + $DvtAxisKeyboardHandler$$.$h$, $DvtAxisDefaults$$);
    }
    for (var $DvtAxisDefaults$$ = .08 * this.$getTickLabelHeight$(), $DvtAxisConstants$$ = null, $DvtAxisAutomation$$ = !1, $DvtAxisRenderer$$ = 0;$DvtAxisRenderer$$ < $DvtAxisObjPeer$$.length;$DvtAxisRenderer$$++) {
      if ($DvtAxisObjPeer$$[$DvtAxisRenderer$$] && $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$]) {
        $DvtAxisObjPeer$$[$DvtAxisRenderer$$].$alignTop$();
        $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$].$alignBottom$();
        if ($DvtAxisConstants$$ && $DvtAxisEventManager$$($DvtAxisConstants$$, $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$].$measureDimensions$())) {
          $DvtAxisAutomation$$ = !0;
          break;
        }
        $DvtAxisConstants$$ = $DvtAxisObjPeer$$[$DvtAxisRenderer$$].$measureDimensions$();
      } else {
        if ($DvtAxisObjPeer$$[$DvtAxisRenderer$$] || $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$]) {
          var $label$$40_lastLv2Dims$$ = $DvtAxisObjPeer$$[$DvtAxisRenderer$$] ? $DvtAxisObjPeer$$[$DvtAxisRenderer$$] : $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$];
          if ($DvtAxisConstants$$ && $DvtAxisEventManager$$($DvtAxisConstants$$, $label$$40_lastLv2Dims$$.$measureDimensions$())) {
            $DvtAxisAutomation$$ = !0;
            break;
          }
          $DvtAxisConstants$$ = $label$$40_lastLv2Dims$$.$measureDimensions$();
        }
      }
    }
    if ($DvtAxisAutomation$$) {
      for (var $label$$40_lastLv2Dims$$ = $DvtAxisAutomation$$ = $DvtAxisConstants$$ = null, $dims$$30$$, $DvtAxisRenderer$$ = 0;$DvtAxisRenderer$$ < $DvtAxisObjPeer$$.length;$DvtAxisRenderer$$++) {
        $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$] ? ($DvtAxisObjPeer$$[$DvtAxisRenderer$$] = null, $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$].$alignMiddle$(), $dims$$30$$ = $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$].$measureDimensions$(), $DvtAxisAutomation$$ && $DvtAxisEventManager$$($DvtAxisAutomation$$, $dims$$30$$) && ($DvtAxisObjPeer$$[$DvtAxisConstants$$] = null), $label$$40_lastLv2Dims$$ = $dims$$30$$) : $DvtAxisObjPeer$$[$DvtAxisRenderer$$] && ($dims$$30$$ = $DvtAxisObjPeer$$[$DvtAxisRenderer$$].$measureDimensions$(), 
        $label$$40_lastLv2Dims$$ && $DvtAxisEventManager$$($label$$40_lastLv2Dims$$, $dims$$30$$) ? $DvtAxisObjPeer$$[$DvtAxisRenderer$$] = null : ($DvtAxisAutomation$$ = $dims$$30$$, $DvtAxisConstants$$ = $DvtAxisRenderer$$));
      }
    }
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$getLabels$ = function $$dvt$$1$$$$TimeAxisInfo$$$$getLabels$$($dvt$$1$$, $DvtAxisObjPeer$$) {
    if ($DvtAxisObjPeer$$ && 1 < $DvtAxisObjPeer$$) {
      return null;
    }
    this.$_level1Labels$ || this.$_generateLabels$($dvt$$1$$);
    return 1 == $DvtAxisObjPeer$$ ? this.$_level2Labels$ : this.$_level1Labels$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$getMajorTickCoords$ = function $$dvt$$1$$$$TimeAxisInfo$$$$getMajorTickCoords$$() {
    var $dvt$$1$$ = [];
    if (this.$_isOneLevel$) {
      for (var $DvtAxisObjPeer$$ = 0;$DvtAxisObjPeer$$ < this.$_level1Coords$.length;$DvtAxisObjPeer$$++) {
        null != this.$_level1Coords$[$DvtAxisObjPeer$$] && null != this.$_level1Labels$[$DvtAxisObjPeer$$] && $dvt$$1$$.push(this.$_level1Coords$[$DvtAxisObjPeer$$]);
      }
    } else {
      for ($DvtAxisObjPeer$$ = 1;$DvtAxisObjPeer$$ < this.$_level2Coords$.length;$DvtAxisObjPeer$$++) {
        null != this.$_level2Coords$[$DvtAxisObjPeer$$] && $dvt$$1$$.push(this.$_level2Coords$[$DvtAxisObjPeer$$]);
      }
    }
    return $dvt$$1$$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$getMinorTickCoords$ = function $$dvt$$1$$$$TimeAxisInfo$$$$getMinorTickCoords$$() {
    if (this.$_isOneLevel$) {
      return [];
    }
    for (var $dvt$$1$$ = [], $DvtAxisObjPeer$$ = 0;$DvtAxisObjPeer$$ < this.$_level1Coords$.length;$DvtAxisObjPeer$$++) {
      null != this.$_level1Coords$[$DvtAxisObjPeer$$] && null != this.$_level1Labels$[$DvtAxisObjPeer$$] && $dvt$$1$$.push(this.$_level1Coords$[$DvtAxisObjPeer$$]);
    }
    return $dvt$$1$$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$getUnboundedValueAt$ = function $$dvt$$1$$$$TimeAxisInfo$$$$getUnboundedValueAt$$($dvt$$1$$) {
    if (null == $dvt$$1$$) {
      return null;
    }
    $dvt$$1$$ = ($dvt$$1$$ - this.$_startCoord$) / (this.$_endCoord$ - this.$_startCoord$);
    if (this.$_skipGaps$) {
      var $DvtAxisObjPeer$$ = this.$_timeToIndex$(this.$MinValue$);
      return this.$_indexToTime$($DvtAxisObjPeer$$ + $dvt$$1$$ * (this.$_timeToIndex$(this.$MaxValue$) - $DvtAxisObjPeer$$));
    }
    return this.$MinValue$ + $dvt$$1$$ * (this.$MaxValue$ - this.$MinValue$);
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$getUnboundedCoordAt$ = function $$dvt$$1$$$$TimeAxisInfo$$$$getUnboundedCoordAt$$($dvt$$1$$) {
    if (null == $dvt$$1$$) {
      return null;
    }
    if (this.$_skipGaps$) {
      var $DvtAxisObjPeer$$ = this.$_timeToIndex$(this.$MinValue$);
      $dvt$$1$$ = (this.$_timeToIndex$($dvt$$1$$) - $DvtAxisObjPeer$$) / (this.$_timeToIndex$(this.$MaxValue$) - $DvtAxisObjPeer$$);
    } else {
      $dvt$$1$$ = ($dvt$$1$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$);
    }
    return this.$_startCoord$ + $dvt$$1$$ * (this.$_endCoord$ - this.$_startCoord$);
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$linearToActual$ = function $$dvt$$1$$$$TimeAxisInfo$$$$linearToActual$$($dvt$$1$$) {
    return null == $dvt$$1$$ ? null : this.$_skipGaps$ ? this.$_indexToTime$($dvt$$1$$) : $dvt$$1$$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$actualToLinear$ = function $$dvt$$1$$$$TimeAxisInfo$$$$actualToLinear$$($dvt$$1$$) {
    return null == $dvt$$1$$ ? null : this.$_skipGaps$ ? this.$_timeToIndex$($dvt$$1$$) : $dvt$$1$$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_timeToIndex$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_timeToIndex$$($dvt$$1$$) {
    for (var $DvtAxisObjPeer$$ = this.$_groups$.length, $DvtAxisKeyboardHandler$$ = 0;$DvtAxisKeyboardHandler$$ < this.$_groups$.length;$DvtAxisKeyboardHandler$$++) {
      if ($dvt$$1$$ <= this.$_groups$[$DvtAxisKeyboardHandler$$]) {
        $DvtAxisObjPeer$$ = $DvtAxisKeyboardHandler$$;
        break;
      }
    }
    var $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$ - 1, $DvtAxisEventManager$$ = void 0 !== this.$_groups$[$DvtAxisKeyboardHandler$$] ? this.$_groups$[$DvtAxisKeyboardHandler$$] : this.$_groups$[0] - this.$_averageInterval$;
    return $DvtAxisKeyboardHandler$$ + ($dvt$$1$$ - $DvtAxisEventManager$$) / ((void 0 !== this.$_groups$[$DvtAxisObjPeer$$] ? this.$_groups$[$DvtAxisObjPeer$$] : this.$_groups$[this.$_groups$.length - 1] + this.$_averageInterval$) - $DvtAxisEventManager$$);
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$_indexToTime$ = function $$dvt$$1$$$$TimeAxisInfo$$$$_indexToTime$$($dvt$$1$$) {
    var $DvtAxisObjPeer$$ = Math.min(Math.max(Math.ceil($dvt$$1$$), 0), this.$_groups$.length), $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$ - 1, $DvtAxisEventManager$$ = void 0 !== this.$_groups$[$DvtAxisKeyboardHandler$$] ? this.$_groups$[$DvtAxisKeyboardHandler$$] : this.$_groups$[0] - this.$_averageInterval$;
    return $DvtAxisEventManager$$ + ($dvt$$1$$ - $DvtAxisKeyboardHandler$$) * ((void 0 !== this.$_groups$[$DvtAxisObjPeer$$] ? this.$_groups$[$DvtAxisObjPeer$$] : this.$_groups$[this.$_groups$.length - 1] + this.$_averageInterval$) - $DvtAxisEventManager$$);
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$getGroupWidth$ = function $$dvt$$1$$$$TimeAxisInfo$$$$getGroupWidth$$() {
    return this.$_skipGaps$ ? Math.abs(this.$getUnboundedCoordAt$(this.$_indexToTime$(1)) - this.$getUnboundedCoordAt$(this.$_indexToTime$(0))) : Math.abs(this.$getUnboundedCoordAt$(this.$MinValue$ + this.$_averageInterval$) - this.$getUnboundedCoordAt$(this.$MinValue$));
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$getMinimumExtent$ = function $$dvt$$1$$$$TimeAxisInfo$$$$getMinimumExtent$$() {
    return this.$_skipGaps$ ? 1 : this.$_mixedFrequency$ ? Math.min((this.$GlobalMax$ - this.$GlobalMin$) / 8, this.$_averageInterval$) : this.$_averageInterval$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$getStartOverflow$ = function $$dvt$$1$$$$TimeAxisInfo$$$$getStartOverflow$$() {
    return "top" != this.$Position$ && "bottom" != this.$Position$ || !$dvt$$1$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$StartOverflow$ : this.$EndOverflow$;
  };
  $dvt$$1$$.$TimeAxisInfo$.prototype.$getEndOverflow$ = function $$dvt$$1$$$$TimeAxisInfo$$$$getEndOverflow$$() {
    return "top" != this.$Position$ && "bottom" != this.$Position$ || !$dvt$$1$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$EndOverflow$ : this.$StartOverflow$;
  };
})(dvt);

  return dvt;
});
