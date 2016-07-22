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

(function($dvt$$8$$) {
  function $DvtPictoChartShapeMarker$$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$, $DvtPictoChartDefaults$$, $DvtPictoChartEventManager$$, $DvtPictoChartAutomation$$, $DvtPictoChartRenderer$$) {
    $DvtPictoChartShapeMarker$$.$superclass$.Init.call(this, $DvtPictoChartKeyboardHandler$$.$getCtx$(), "none" == $DvtPictoChartItem$$ ? null : $DvtPictoChartItem$$, $dvt$$8$$.$CSSStyle$.$SKIN_ALTA$, $DvtPictoChartImageMarker$$, $DvtPictoChartDefaults$$, $DvtPictoChartEventManager$$, $DvtPictoChartAutomation$$, null, !0, $DvtPictoChartRenderer$$);
    this.$_picto$ = $DvtPictoChartKeyboardHandler$$;
  }
  function $DvtPictoChartKeyboardHandler$$($dvt$$8$$) {
    this.Init($dvt$$8$$);
  }
  function $DvtPictoChartItem$$($dvt$$8$$, $DvtPictoChartShapeMarker$$) {
    this.Init($dvt$$8$$, $DvtPictoChartShapeMarker$$);
  }
  function $DvtPictoChartImageMarker$$($dvt$$8$$, $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartDefaults$$, $DvtPictoChartEventManager$$, $DvtPictoChartAutomation$$, $DvtPictoChartRenderer$$, $sourceHoverSelected$$1$$, $id$$155$$) {
    $DvtPictoChartImageMarker$$.$superclass$.Init.call(this, $dvt$$8$$.$getCtx$(), $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartDefaults$$, null, $DvtPictoChartEventManager$$, $DvtPictoChartAutomation$$, $DvtPictoChartRenderer$$, $sourceHoverSelected$$1$$, $id$$155$$);
    this.$_picto$ = $dvt$$8$$;
  }
  function $DvtPictoChartDefaults$$() {
    this.Init({alta:$DvtPictoChartDefaults$$.$VERSION_1$});
  }
  function $DvtPictoChartEventManager$$($dvt$$8$$) {
    this.Init($dvt$$8$$.$getCtx$(), $dvt$$8$$.dispatchEvent, $dvt$$8$$);
    this.$_picto$ = $dvt$$8$$;
  }
  function $DvtPictoChartAutomation$$($dvt$$8$$) {
    this.$_picto$ = $dvt$$8$$;
  }
  $dvt$$8$$.$PictoChart$ = function $$dvt$$8$$$$PictoChart$$($dvt$$8$$, $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) {
    this.Init($dvt$$8$$, $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$);
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$PictoChart$, $dvt$$8$$.$BaseComponent$);
  $dvt$$8$$.$PictoChart$.newInstance = function $$dvt$$8$$$$PictoChart$$newInstance$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$) {
    return new $dvt$$8$$.$PictoChart$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$);
  };
  $dvt$$8$$.$PictoChart$.prototype.Init = function $$dvt$$8$$$$PictoChart$$$Init$($DvtPictoChartShapeMarker$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$) {
    $dvt$$8$$.$PictoChart$.$superclass$.Init.call(this, $DvtPictoChartShapeMarker$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$);
    this.$EventManager$ = new $DvtPictoChartEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    $dvt$$8$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(new $DvtPictoChartKeyboardHandler$$(this.$EventManager$));
    this.$Defaults$ = new $DvtPictoChartDefaults$$;
    this.$_items$ = [];
  };
  $dvt$$8$$.$PictoChart$.prototype.$_getPreferredSize$ = function $$dvt$$8$$$$PictoChart$$$$_getPreferredSize$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) {
    if (!$DvtPictoChartShapeMarker$$ || !$DvtPictoChartKeyboardHandler$$) {
      var $DvtPictoChartItem$$ = $DvtPictoChartRenderer$$.$getInfo$(this, $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$);
      this.$_info$ = $DvtPictoChartItem$$;
      $DvtPictoChartShapeMarker$$ || ($DvtPictoChartShapeMarker$$ = $DvtPictoChartItem$$.items ? $DvtPictoChartItem$$.$colCount$ * $DvtPictoChartItem$$.$colWidth$ : 0);
      $DvtPictoChartKeyboardHandler$$ || ($DvtPictoChartKeyboardHandler$$ = $DvtPictoChartItem$$.items ? $DvtPictoChartItem$$.$rowCount$ * $DvtPictoChartItem$$.$rowHeight$ : 0);
    }
    return new $dvt$$8$$.$Dimension$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$);
  };
  $dvt$$8$$.$PictoChart$.prototype.$render$ = function $$dvt$$8$$$$PictoChart$$$$render$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$) {
    this.$_oldContainer$ = this.$_container$;
    var $DvtPictoChartImageMarker$$ = this.$_markers$, $DvtPictoChartDefaults$$ = this.$Width$ ? this.$Width$ : 0, $DvtPictoChartEventManager$$ = this.$Height$ ? this.$Height$ : 0;
    this.$EventManager$.$hideTooltip$();
    this.$_items$ = [];
    this.$_markers$ = [];
    this.$_info$ = null;
    this.$_emptyText$ && (this.$_container$.removeChild(this.$_emptyText$), this.$_emptyText$ = null);
    this.$StopAnimation$();
    this.$SetOptions$($DvtPictoChartShapeMarker$$);
    var $DvtPictoChartAutomation$$ = this.$getCtx$();
    if ($DvtPictoChartKeyboardHandler$$ || $DvtPictoChartItem$$) {
      this.$Width$ = $DvtPictoChartKeyboardHandler$$, this.$Height$ = $DvtPictoChartItem$$;
    } else {
      if ($DvtPictoChartAutomation$$.$_root$.style.display = "block", $DvtPictoChartKeyboardHandler$$ = this.$_getPreferredSize$(), $dvt$$8$$.$ToolkitUtils$.$setSvgSize$($DvtPictoChartAutomation$$, $DvtPictoChartKeyboardHandler$$.$w$, $DvtPictoChartKeyboardHandler$$.$h$), $DvtPictoChartItem$$ = $dvt$$8$$.$ToolkitUtils$.$getOuterDivSize$($DvtPictoChartAutomation$$), $DvtPictoChartKeyboardHandler$$.$w$ == $DvtPictoChartItem$$.$w$ && $DvtPictoChartKeyboardHandler$$.$h$ != $DvtPictoChartItem$$.$h$ ? 
      (this.$Height$ = $DvtPictoChartItem$$.$h$, $DvtPictoChartKeyboardHandler$$ = this.$_getPreferredSize$(null, this.$Height$), $dvt$$8$$.$ToolkitUtils$.$setSvgSize$($DvtPictoChartAutomation$$, $DvtPictoChartKeyboardHandler$$.$w$, this.$Height$), this.$Width$ = $dvt$$8$$.$ToolkitUtils$.$getOuterDivSize$($DvtPictoChartAutomation$$).$w$) : $DvtPictoChartKeyboardHandler$$.$w$ != $DvtPictoChartItem$$.$w$ && $DvtPictoChartKeyboardHandler$$.$h$ == $DvtPictoChartItem$$.$h$ ? (this.$Width$ = $DvtPictoChartItem$$.$w$, 
      $DvtPictoChartKeyboardHandler$$ = this.$_getPreferredSize$(this.$Width$, null), $dvt$$8$$.$ToolkitUtils$.$setSvgSize$($DvtPictoChartAutomation$$, this.$Width$, $DvtPictoChartKeyboardHandler$$.$h$), this.$Height$ = $dvt$$8$$.$ToolkitUtils$.$getOuterDivSize$($DvtPictoChartAutomation$$).$h$) : (this.$Width$ = $DvtPictoChartItem$$.$w$, this.$Height$ = $DvtPictoChartItem$$.$h$), this.$Width$ != $DvtPictoChartKeyboardHandler$$.$w$ || this.$Height$ != $DvtPictoChartKeyboardHandler$$.$h$) {
        this.$_info$ = null;
      }
    }
    this.$_container$ = new $dvt$$8$$.$Container$($DvtPictoChartAutomation$$);
    this.$addChild$(this.$_container$);
    $DvtPictoChartRenderer$$.$render$(this, this.$_container$, new $dvt$$8$$.$Rectangle$(0, 0, this.$Width$, this.$Height$), this.$_info$);
    this.$_oldContainer$ ? "none" != this.$Options$.animationOnDataChange && $DvtPictoChartShapeMarker$$ && ($DvtPictoChartShapeMarker$$ = new $dvt$$8$$.$DataAnimationHandler$($DvtPictoChartAutomation$$, null), $DvtPictoChartShapeMarker$$.$constructAnimation$($DvtPictoChartImageMarker$$, this.$_markers$), this.$Animation$ = $DvtPictoChartShapeMarker$$.$getAnimation$()) : this.$Animation$ = this.$_getAnimationOnDisplay$();
    this.$Animation$ ? ($dvt$$8$$.$ToolkitUtils$.$setSvgSize$($DvtPictoChartAutomation$$, Math.max($DvtPictoChartDefaults$$, this.$Width$), Math.max($DvtPictoChartEventManager$$, this.$Height$)), this.$EventManager$.$removeListeners$(this), this.$_emptyText$ && this.$_container$.removeChild(this.$_emptyText$), this.$Animation$.$setOnEnd$(this.$_onRenderEnd$, this), this.$Animation$.play()) : this.$_onRenderEnd$();
  };
  $dvt$$8$$.$PictoChart$.prototype.$SetOptions$ = function $$dvt$$8$$$$PictoChart$$$$SetOptions$$($DvtPictoChartShapeMarker$$) {
    $DvtPictoChartShapeMarker$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($DvtPictoChartShapeMarker$$) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
    $dvt$$8$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none");
    $DvtPictoChartShapeMarker$$ = this.$Options$.selectionMode;
    this.$_selectionHandler$ = "single" == $DvtPictoChartShapeMarker$$ ? new $dvt$$8$$.$SelectionHandler$($dvt$$8$$.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $DvtPictoChartShapeMarker$$ ? new $dvt$$8$$.$SelectionHandler$($dvt$$8$$.$SelectionHandler$.$TYPE_MULTIPLE$) : null;
    this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
  };
  $dvt$$8$$.$PictoChart$.prototype.$_onRenderEnd$ = function $$dvt$$8$$$$PictoChart$$$$_onRenderEnd$$() {
    this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
    this.$Animation$ && (this.$EventManager$.$addListeners$(this), this.$_emptyText$ && this.$_container$.$addChild$(this.$_emptyText$));
    $dvt$$8$$.$ToolkitUtils$.$setSvgSize$(this.$getCtx$(), this.$Width$, this.$Height$);
    for (var $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$ = 0;$DvtPictoChartKeyboardHandler$$ < this.$_items$.length && ($DvtPictoChartShapeMarker$$ = this.$_items$[$DvtPictoChartKeyboardHandler$$], "none" == $DvtPictoChartShapeMarker$$.$getShape$());$DvtPictoChartKeyboardHandler$$++) {
    }
    this.$EventManager$.$setFocusObj$($DvtPictoChartShapeMarker$$);
    this.$_selectionHandler$ && this.$_selectionHandler$.$processInitialSelections$(this.$Options$.selection, this.$_items$);
    $dvt$$8$$.$CategoryRolloverHandler$.$highlight$(this.$Options$.highlightedCategories, this.$_items$, "any" == this.$Options$.highlightMatch);
    this.$UpdateAriaAttributes$();
    this.$AnimationStopped$ || this.$RenderComplete$();
    this.$Animation$ = null;
    this.$AnimationStopped$ = !1;
  };
  $dvt$$8$$.$PictoChart$.prototype.$registerItems$ = function $$dvt$$8$$$$PictoChart$$$$registerItems$$($dvt$$8$$) {
    this.$_items$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PictoChart$.prototype.$getItems$ = function $$dvt$$8$$$$PictoChart$$$$getItems$$() {
    return this.$_items$;
  };
  $dvt$$8$$.$PictoChart$.prototype.$registerMarker$ = function $$dvt$$8$$$$PictoChart$$$$registerMarker$$($dvt$$8$$) {
    this.$_markers$.push($dvt$$8$$);
  };
  $dvt$$8$$.$PictoChart$.prototype.$registerEmptyText$ = function $$dvt$$8$$$$PictoChart$$$$registerEmptyText$$($dvt$$8$$) {
    this.$_emptyText$ = $dvt$$8$$;
  };
  $dvt$$8$$.$PictoChart$.prototype.$getTotalCount$ = function $$dvt$$8$$$$PictoChart$$$$getTotalCount$$() {
    for (var $dvt$$8$$ = 0, $DvtPictoChartShapeMarker$$ = 0;$DvtPictoChartShapeMarker$$ < this.$_items$.length;$DvtPictoChartShapeMarker$$++) {
      $dvt$$8$$ += this.$_items$[$DvtPictoChartShapeMarker$$].getCount();
    }
    return $dvt$$8$$;
  };
  $dvt$$8$$.$PictoChart$.prototype.$getAnimationDuration$ = function $$dvt$$8$$$$PictoChart$$$$getAnimationDuration$$() {
    return $dvt$$8$$.$StyleUtils$.$getTimeMilliseconds$(this.$Options$.animationDuration) / 1E3;
  };
  $dvt$$8$$.$PictoChart$.prototype.$_getAnimationOnDisplay$ = function $$dvt$$8$$$$PictoChart$$$$_getAnimationOnDisplay$$() {
    var $DvtPictoChartShapeMarker$$ = this.$Options$.animationOnDisplay, $DvtPictoChartKeyboardHandler$$ = this.$getAnimationDuration$(), $DvtPictoChartItem$$ = this.$getCtx$(), $DvtPictoChartImageMarker$$ = new $dvt$$8$$.$Rectangle$(0, 0, this.$Width$, this.$Height$);
    if ($dvt$$8$$.$BlackBoxAnimationHandler$.isSupported($DvtPictoChartShapeMarker$$)) {
      return $dvt$$8$$.$BlackBoxAnimationHandler$.$getInAnimation$($DvtPictoChartItem$$, $DvtPictoChartShapeMarker$$, this.$_container$, $DvtPictoChartImageMarker$$, $DvtPictoChartKeyboardHandler$$);
    }
    var $DvtPictoChartDefaults$$ = [];
    if ("popIn" == $DvtPictoChartShapeMarker$$) {
      for ($DvtPictoChartShapeMarker$$ = 0;$DvtPictoChartShapeMarker$$ < this.$_markers$.length;$DvtPictoChartShapeMarker$$++) {
        var $DvtPictoChartEventManager$$ = this.$_markers$[$DvtPictoChartShapeMarker$$];
        $DvtPictoChartDefaults$$.push(new $dvt$$8$$.$AnimPopIn$($DvtPictoChartItem$$, $DvtPictoChartEventManager$$, !0, $DvtPictoChartKeyboardHandler$$));
      }
    } else {
      if ("none" != $DvtPictoChartShapeMarker$$) {
        for ($DvtPictoChartShapeMarker$$ = 0;$DvtPictoChartShapeMarker$$ < this.$_markers$.length;$DvtPictoChartShapeMarker$$++) {
          var $DvtPictoChartEventManager$$ = this.$_markers$[$DvtPictoChartShapeMarker$$], $DvtPictoChartAutomation$$ = new $dvt$$8$$.$CustomAnimation$($DvtPictoChartItem$$, $DvtPictoChartEventManager$$, $DvtPictoChartKeyboardHandler$$), $startState$$7$$, $endState$$16$$;
          $DvtPictoChartRenderer$$.$isVertical$(this) ? ($startState$$7$$ = $DvtPictoChartRenderer$$.$isOriginRight$(this) ? this.$Width$ : 0, $endState$$16$$ = $DvtPictoChartEventManager$$.$getCx$(), $DvtPictoChartEventManager$$.$setCx$($startState$$7$$), $DvtPictoChartAutomation$$.$_animator$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtPictoChartEventManager$$, $DvtPictoChartEventManager$$.$getCx$, $DvtPictoChartEventManager$$.$setCx$, $endState$$16$$)) : ($startState$$7$$ = $DvtPictoChartRenderer$$.$isOriginBottom$(this) ? 
          this.$Height$ : 0, $endState$$16$$ = $DvtPictoChartEventManager$$.$getCy$(), $DvtPictoChartEventManager$$.$setCy$($startState$$7$$), $DvtPictoChartAutomation$$.$_animator$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtPictoChartEventManager$$, $DvtPictoChartEventManager$$.$getCy$, $DvtPictoChartEventManager$$.$setCy$, $endState$$16$$));
          $DvtPictoChartDefaults$$.push($DvtPictoChartAutomation$$);
        }
        $DvtPictoChartDefaults$$.push($dvt$$8$$.$BlackBoxAnimationHandler$.$getInAnimation$($DvtPictoChartItem$$, $dvt$$8$$.$BlackBoxAnimationHandler$.$ALPHA_FADE$, this.$_container$, $DvtPictoChartImageMarker$$, $DvtPictoChartKeyboardHandler$$));
      }
    }
    return 0 < $DvtPictoChartDefaults$$.length ? new $dvt$$8$$.$ParallelPlayable$($DvtPictoChartItem$$, $DvtPictoChartDefaults$$) : null;
  };
  $dvt$$8$$.$PictoChart$.prototype.$highlight$ = function $$dvt$$8$$$$PictoChart$$$$highlight$$($DvtPictoChartShapeMarker$$) {
    var $DvtPictoChartKeyboardHandler$$ = this.$getOptions$();
    $DvtPictoChartKeyboardHandler$$.highlightedCategories = $dvt$$8$$.$JsonUtils$.clone($DvtPictoChartShapeMarker$$);
    $dvt$$8$$.$CategoryRolloverHandler$.$highlight$($DvtPictoChartShapeMarker$$, this.$getItems$(), "any" == $DvtPictoChartKeyboardHandler$$.highlightMatch);
  };
  $dvt$$8$$.$PictoChart$.prototype.select = function $$dvt$$8$$$$PictoChart$$$select$($DvtPictoChartShapeMarker$$) {
    this.$getOptions$().selection = $dvt$$8$$.$JsonUtils$.clone($DvtPictoChartShapeMarker$$);
    this.$_selectionHandler$ && this.$_selectionHandler$.$processInitialSelections$($DvtPictoChartShapeMarker$$, this.$getItems$());
  };
  $dvt$$8$$.$PictoChart$.prototype.$GetComponentDescription$ = function $$dvt$$8$$$$PictoChart$$$$GetComponentDescription$$() {
    return $dvt$$8$$.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", $dvt$$8$$.$Bundle$.$UTIL_PREFIX$, "PICTOCHART");
  };
  $dvt$$8$$.$PictoChart$.prototype.$getAutomation$ = function $$dvt$$8$$$$PictoChart$$$$getAutomation$$() {
    this.$_automation$ || (this.$_automation$ = new $DvtPictoChartAutomation$$(this));
    return this.$_automation$;
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPictoChartAutomation$$, $dvt$$8$$.$Automation$);
  $DvtPictoChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtPictoChartAutomation$$$$$GetSubIdForDomElement$$($dvt$$8$$) {
    return ($dvt$$8$$ = this.$_picto$.$getEventManager$().$GetLogicalObject$($dvt$$8$$)) && $dvt$$8$$ instanceof $DvtPictoChartItem$$ ? "item[" + this.$_picto$.$getItems$().indexOf($dvt$$8$$) + "]" : null;
  };
  $DvtPictoChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtPictoChartAutomation$$$$$getDomElementForSubId$$($DvtPictoChartShapeMarker$$) {
    if ($DvtPictoChartShapeMarker$$ == $dvt$$8$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_picto$);
    }
    var $DvtPictoChartKeyboardHandler$$ = $DvtPictoChartShapeMarker$$.indexOf("[");
    return 0 < $DvtPictoChartKeyboardHandler$$ && "item" === $DvtPictoChartShapeMarker$$.substring(0, $DvtPictoChartKeyboardHandler$$) && ($DvtPictoChartShapeMarker$$ = parseInt($DvtPictoChartShapeMarker$$.substring($DvtPictoChartKeyboardHandler$$ + 1, $DvtPictoChartShapeMarker$$.length - 1)), $DvtPictoChartShapeMarker$$ = this.$_picto$.$getItems$()[$DvtPictoChartShapeMarker$$]) ? $DvtPictoChartShapeMarker$$.$getElem$() : null;
  };
  $DvtPictoChartAutomation$$.prototype.getItem = function $$DvtPictoChartAutomation$$$$getItem$($dvt$$8$$) {
    if ($dvt$$8$$ = this.$_picto$.$getItems$()[$dvt$$8$$]) {
      var $DvtPictoChartShapeMarker$$ = {};
      $DvtPictoChartShapeMarker$$.color = $dvt$$8$$.$getDatatipColor$();
      $DvtPictoChartShapeMarker$$.tooltip = $dvt$$8$$.$getShortDesc$();
      $DvtPictoChartShapeMarker$$.id = $dvt$$8$$.getId();
      $DvtPictoChartShapeMarker$$.name = $dvt$$8$$.getName();
      $DvtPictoChartShapeMarker$$.count = $dvt$$8$$.getCount();
      $DvtPictoChartShapeMarker$$.selected = $dvt$$8$$.$isSelected$();
      return $DvtPictoChartShapeMarker$$;
    }
    return null;
  };
  $DvtPictoChartAutomation$$.prototype.$getItemCount$ = function $$DvtPictoChartAutomation$$$$$getItemCount$$() {
    return this.$_picto$.$getItems$().length;
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPictoChartEventManager$$, $dvt$$8$$.$EventManager$);
  $DvtPictoChartEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtPictoChartEventManager$$$$$ProcessRolloverEvent$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$) {
    $DvtPictoChartShapeMarker$$ = this.$_picto$.$getOptions$();
    "none" != $DvtPictoChartShapeMarker$$.hoverBehavior && ($DvtPictoChartKeyboardHandler$$ = $DvtPictoChartKeyboardHandler$$.$getCategories$ ? $DvtPictoChartKeyboardHandler$$.$getCategories$() : [], $DvtPictoChartShapeMarker$$.highlightedCategories = $DvtPictoChartItem$$ ? $DvtPictoChartKeyboardHandler$$.slice() : null, $DvtPictoChartItem$$ = $dvt$$8$$.$EventFactory$.$newCategoryHighlightEvent$($DvtPictoChartShapeMarker$$.highlightedCategories, $DvtPictoChartItem$$), $DvtPictoChartKeyboardHandler$$ = 
    $dvt$$8$$.$StyleUtils$.$getTimeMilliseconds$($DvtPictoChartShapeMarker$$.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($DvtPictoChartItem$$, this.$_picto$.$getItems$(), $DvtPictoChartKeyboardHandler$$, "any" == $DvtPictoChartShapeMarker$$.highlightMatch));
  };
  $DvtPictoChartEventManager$$.prototype.$OnClickInternal$ = function $$DvtPictoChartEventManager$$$$$OnClickInternal$$($dvt$$8$$) {
    ($dvt$$8$$ = this.$GetLogicalObject$($dvt$$8$$.target)) && ($dvt$$8$$.$isSelectable$ && $dvt$$8$$.$isSelectable$() || this.$processDrillEvent$($dvt$$8$$));
  };
  $DvtPictoChartEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtPictoChartEventManager$$$$$OnDblClickInternal$$($dvt$$8$$) {
    ($dvt$$8$$ = this.$GetLogicalObject$($dvt$$8$$.target)) && $dvt$$8$$.$isSelectable$ && $dvt$$8$$.$isSelectable$() && this.$processDrillEvent$($dvt$$8$$);
  };
  $DvtPictoChartEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtPictoChartEventManager$$$$$HandleTouchHoverEndInternal$$($dvt$$8$$) {
    ($dvt$$8$$ = this.$GetLogicalObject$($dvt$$8$$.target)) && ($dvt$$8$$.$isSelectable$ && $dvt$$8$$.$isSelectable$() || this.$processDrillEvent$($dvt$$8$$));
  };
  $DvtPictoChartEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtPictoChartEventManager$$$$$HandleTouchClickInternal$$($dvt$$8$$) {
    ($dvt$$8$$ = this.$GetLogicalObject$($dvt$$8$$.target)) && ($dvt$$8$$.$isSelectable$ && $dvt$$8$$.$isSelectable$() || this.$processDrillEvent$($dvt$$8$$));
  };
  $DvtPictoChartEventManager$$.prototype.$HandleTouchDblClickInternal$ = function $$DvtPictoChartEventManager$$$$$HandleTouchDblClickInternal$$($dvt$$8$$) {
    var $DvtPictoChartShapeMarker$$ = this.$GetLogicalObject$($dvt$$8$$.target);
    $DvtPictoChartShapeMarker$$ && $DvtPictoChartShapeMarker$$.$isSelectable$ && $DvtPictoChartShapeMarker$$.$isSelectable$() && ($dvt$$8$$.preventDefault(), $dvt$$8$$.stopPropagation(), this.$processDrillEvent$($DvtPictoChartShapeMarker$$));
  };
  $DvtPictoChartEventManager$$.prototype.$processDrillEvent$ = function $$DvtPictoChartEventManager$$$$$processDrillEvent$$($DvtPictoChartShapeMarker$$) {
    $DvtPictoChartShapeMarker$$ instanceof $DvtPictoChartItem$$ && $DvtPictoChartShapeMarker$$.$isDrillable$() && this.$FireEvent$($dvt$$8$$.$EventFactory$.$newDrillEvent$($DvtPictoChartShapeMarker$$.getId()));
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPictoChartDefaults$$, $dvt$$8$$.$BaseComponentDefaults$);
  $DvtPictoChartDefaults$$.$VERSION_1$ = {animationOnDisplay:"none", animationOnDataChange:"none", animationDuration:750, drilling:"off", hiddenCategories:[], highlightedCategories:[], highlightMatch:"all", hoverBehavior:"none", hoverBehaviorDelay:200, layout:"horizontal", layoutOrigin:"topStart", selection:[], selectionMode:"none", _defaultColor:"#a6acb1", _noneShapeColor:"rgba(255,255,255,0)", _defaultSize:32, _defaultShape:"rectangle", _gapRatio:.25, _textStyle:new $dvt$$8$$.$CSSStyle$($dvt$$8$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_13$ + 
  "color: #252525;"), _statusMessageStyle:new $dvt$$8$$.$CSSStyle$($dvt$$8$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_13$ + "color: #252525;"), _tooltipStyle:new $dvt$$8$$.$CSSStyle$("border-collapse: separate; border-spacing: 1px"), _tooltipLabelStyle:new $dvt$$8$$.$CSSStyle$("color: #737373; padding: 0px 2px"), _tooltipValueStyle:new $dvt$$8$$.$CSSStyle$("color: #333333; padding: 0px 2px")};
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPictoChartImageMarker$$, $dvt$$8$$.$ImageMarker$);
  $DvtPictoChartImageMarker$$.prototype.$animateUpdate$ = function $$DvtPictoChartImageMarker$$$$$animateUpdate$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) {
    var $DvtPictoChartItem$$ = new $dvt$$8$$.$CustomAnimation$(this.$getCtx$(), this, .75 * this.$_picto$.$getAnimationDuration$()), $DvtPictoChartImageMarker$$ = $DvtPictoChartItem$$.$_animator$, $DvtPictoChartDefaults$$ = this.$_getAnimationParams$();
    this.$_setAnimationParams$($DvtPictoChartKeyboardHandler$$.$_getAnimationParams$());
    $DvtPictoChartImageMarker$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtPictoChartDefaults$$);
    $DvtPictoChartKeyboardHandler$$.$setAlpha$(0);
    $DvtPictoChartShapeMarker$$.add($DvtPictoChartItem$$, 1);
  };
  $DvtPictoChartImageMarker$$.prototype.$animateDelete$ = function $$DvtPictoChartImageMarker$$$$$animateDelete$$($DvtPictoChartShapeMarker$$) {
    $DvtPictoChartShapeMarker$$.add(new $dvt$$8$$.$AnimFadeOut$(this.$getCtx$(), this, .5 * this.$_picto$.$getAnimationDuration$()), 0);
  };
  $DvtPictoChartImageMarker$$.prototype.$animateInsert$ = function $$DvtPictoChartImageMarker$$$$$animateInsert$$($DvtPictoChartShapeMarker$$) {
    this.$setAlpha$(0);
    $DvtPictoChartShapeMarker$$.add(new $dvt$$8$$.$AnimFadeIn$(this.$getCtx$(), this, .5 * this.$_picto$.$getAnimationDuration$()), 2);
  };
  $DvtPictoChartImageMarker$$.prototype.$_getAnimationParams$ = function $$DvtPictoChartImageMarker$$$$$_getAnimationParams$$() {
    return [this.$getCx$(), this.$getCy$(), this.getWidth(), this.getHeight()];
  };
  $DvtPictoChartImageMarker$$.prototype.$_setAnimationParams$ = function $$DvtPictoChartImageMarker$$$$$_setAnimationParams$$($dvt$$8$$) {
    this.$setCx$($dvt$$8$$[0]);
    this.$setCy$($dvt$$8$$[1]);
    this.$setWidth$($dvt$$8$$[2]);
    this.$setHeight$($dvt$$8$$[3]);
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPictoChartItem$$, $dvt$$8$$.$Container$);
  $DvtPictoChartItem$$.$_counter$ = 0;
  $DvtPictoChartItem$$.prototype.Init = function $$DvtPictoChartItem$$$$Init$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) {
    $DvtPictoChartItem$$.$superclass$.Init.call(this, $DvtPictoChartShapeMarker$$.$getCtx$(), null, $DvtPictoChartKeyboardHandler$$.id);
    this.$_picto$ = $DvtPictoChartShapeMarker$$;
    this.$_item$ = $DvtPictoChartKeyboardHandler$$;
    this.$_id$ = null != $DvtPictoChartKeyboardHandler$$.id ? $DvtPictoChartKeyboardHandler$$.id : null != $DvtPictoChartKeyboardHandler$$.name ? $DvtPictoChartKeyboardHandler$$.name : "_defaultId" + $DvtPictoChartItem$$.$_counter$;
    $DvtPictoChartItem$$.$_counter$++;
    this.$_isNoneShape$ = "none" == $DvtPictoChartKeyboardHandler$$.shape;
    this.$_isShowingKeyboardFocusEffect$ = this.$_isSelected$ = !1;
    this.$_keyboardTooltipLocation$ = new $dvt$$8$$.$Point$(0, 0);
    (this.$isSelectable$() || this.$isDrillable$()) && this.setCursor("pointer");
    $DvtPictoChartShapeMarker$$.$getEventManager$().$associate$(this, this);
  };
  $DvtPictoChartItem$$.prototype.$getColSpan$ = function $$DvtPictoChartItem$$$$$getColSpan$$() {
    var $dvt$$8$$ = this.$_item$.columnSpan;
    return null != $dvt$$8$$ && 0 <= $dvt$$8$$ ? $dvt$$8$$ : 1;
  };
  $DvtPictoChartItem$$.prototype.$getRowSpan$ = function $$DvtPictoChartItem$$$$$getRowSpan$$() {
    var $dvt$$8$$ = this.$_item$.rowSpan;
    return null != $dvt$$8$$ && 0 <= $dvt$$8$$ ? $dvt$$8$$ : 1;
  };
  $DvtPictoChartItem$$.prototype.getCount = function $$DvtPictoChartItem$$$$getCount$() {
    var $dvt$$8$$ = this.$_item$.count;
    return null != $dvt$$8$$ ? Math.max($dvt$$8$$, 0) : 1;
  };
  $DvtPictoChartItem$$.prototype.$getShape$ = function $$DvtPictoChartItem$$$$$getShape$$() {
    return this.$_item$.shape || this.$_picto$.$getOptions$()._defaultShape;
  };
  $DvtPictoChartItem$$.prototype.$getColor$ = function $$DvtPictoChartItem$$$$$getColor$$() {
    return this.$_isNoneShape$ ? this.$_picto$.$getOptions$()._noneShapeColor : this.$_item$.color || this.$_picto$.$getOptions$()._defaultColor;
  };
  $DvtPictoChartItem$$.prototype.$getBorderColor$ = function $$DvtPictoChartItem$$$$$getBorderColor$$() {
    return this.$_item$.borderColor;
  };
  $DvtPictoChartItem$$.prototype.$getBorderWidth$ = function $$DvtPictoChartItem$$$$$getBorderWidth$$() {
    return this.$_item$.borderWidth;
  };
  $DvtPictoChartItem$$.prototype.$getSource$ = function $$DvtPictoChartItem$$$$$getSource$$() {
    return this.$_item$.source;
  };
  $DvtPictoChartItem$$.prototype.$getSourceSelected$ = function $$DvtPictoChartItem$$$$$getSourceSelected$$() {
    return this.$_item$.sourceSelected;
  };
  $DvtPictoChartItem$$.prototype.$getSourceHover$ = function $$DvtPictoChartItem$$$$$getSourceHover$$() {
    return this.$_item$.sourceHover;
  };
  $DvtPictoChartItem$$.prototype.$getSourceHoverSelected$ = function $$DvtPictoChartItem$$$$$getSourceHoverSelected$$() {
    return this.$_item$.sourceHoverSelected;
  };
  $DvtPictoChartItem$$.prototype.getName = function $$DvtPictoChartItem$$$$getName$() {
    return this.$_item$.name;
  };
  $DvtPictoChartItem$$.prototype.getId = function $$DvtPictoChartItem$$$$getId$() {
    return this.$_id$;
  };
  $DvtPictoChartItem$$.prototype.$getShortDesc$ = function $$DvtPictoChartItem$$$$$getShortDesc$$() {
    return this.$_item$.shortDesc;
  };
  $DvtPictoChartItem$$.prototype.$isDrillable$ = function $$DvtPictoChartItem$$$$$isDrillable$$() {
    if (this.$_isNoneShape$) {
      return !1;
    }
    var $dvt$$8$$ = this.$_item$.drilling;
    return $dvt$$8$$ && "inherit" != $dvt$$8$$ ? "on" == $dvt$$8$$ : "on" == this.$_picto$.$getOptions$().drilling;
  };
  $DvtPictoChartItem$$.prototype.$isDoubleClickable$ = function $$DvtPictoChartItem$$$$$isDoubleClickable$$() {
    return this.$isSelectable$() && this.$isDrillable$() && !this.$_isNoneShape$;
  };
  $DvtPictoChartItem$$.prototype.$updateAriaAttributes$ = function $$DvtPictoChartItem$$$$$updateAriaAttributes$$() {
    this.$setAriaRole$("img");
    this.$_updateAriaLabel$();
  };
  $DvtPictoChartItem$$.prototype.$getDatatip$ = function $$DvtPictoChartItem$$$$$getDatatip$$() {
    if (this.$_isNoneShape$) {
      return "";
    }
    var $DvtPictoChartShapeMarker$$ = this.$_picto$.$getOptions$(), $DvtPictoChartKeyboardHandler$$ = this.$_picto$.$getOptions$().tooltip;
    if ($DvtPictoChartKeyboardHandler$$ = $DvtPictoChartKeyboardHandler$$ ? $DvtPictoChartKeyboardHandler$$.renderer : null) {
      var $DvtPictoChartShapeMarker$$ = this.$_picto$.$getCtx$().$getTooltipManager$(), $DvtPictoChartItem$$ = {id:this.getId(), name:this.getName(), count:this.getCount(), color:this.$getColor$()};
      return $DvtPictoChartShapeMarker$$.$getCustomTooltip$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$);
    }
    if (null != this.$getShortDesc$()) {
      return this.$getShortDesc$();
    }
    $DvtPictoChartKeyboardHandler$$ = "";
    ($DvtPictoChartItem$$ = this.getName()) && ($DvtPictoChartKeyboardHandler$$ = $dvt$$8$$.$HtmlTooltipManager$.$createStartTag$("td", $DvtPictoChartShapeMarker$$._tooltipLabelStyle) + $DvtPictoChartItem$$ + "\x3c/td\x3e");
    $DvtPictoChartItem$$ = $dvt$$8$$.$Agent$.$isRightToLeft$(this.$_picto$.$getCtx$());
    $DvtPictoChartShapeMarker$$._tooltipLabelStyle.$setStyle$($dvt$$8$$.$CSSStyle$.$TEXT_ALIGN$, $DvtPictoChartItem$$ ? "left" : "right");
    $DvtPictoChartShapeMarker$$._tooltipValueStyle.$setStyle$($dvt$$8$$.$CSSStyle$.$TEXT_ALIGN$, $DvtPictoChartItem$$ ? "right" : "left");
    return $dvt$$8$$.$HtmlTooltipManager$.$createStartTag$("table", $DvtPictoChartShapeMarker$$._tooltipStyle) + "\x3ctr\x3e" + $DvtPictoChartKeyboardHandler$$ + $dvt$$8$$.$HtmlTooltipManager$.$createStartTag$("td", $DvtPictoChartShapeMarker$$._tooltipValueStyle) + this.$_getCountString$() + "\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e";
  };
  $DvtPictoChartItem$$.prototype.$getDatatipColor$ = function $$DvtPictoChartItem$$$$$getDatatipColor$$() {
    return this.$getColor$();
  };
  $DvtPictoChartItem$$.prototype.$_getCountString$ = function $$DvtPictoChartItem$$$$$_getCountString$$() {
    return $dvt$$8$$.$Bundle$.$getTranslation$(this.$_picto$.$getOptions$(), "labelCountWithTotal", $dvt$$8$$.$Bundle$.$UTIL_PREFIX$, "COUNT_WITH_TOTAL", [this.getCount(), this.$_picto$.$getTotalCount$()]);
  };
  $DvtPictoChartItem$$.prototype.$isSelectable$ = function $$DvtPictoChartItem$$$$$isSelectable$$() {
    return "none" != this.$_picto$.$getOptions$().selectionMode && !this.$_isNoneShape$;
  };
  $DvtPictoChartItem$$.prototype.$isSelected$ = function $$DvtPictoChartItem$$$$$isSelected$$() {
    return this.$_isSelected$;
  };
  $DvtPictoChartItem$$.prototype.$setSelected$ = function $$DvtPictoChartItem$$$$$setSelected$$($dvt$$8$$) {
    this.$_isSelected$ = $dvt$$8$$;
    this.$_updateAriaLabel$();
    for (var $DvtPictoChartKeyboardHandler$$ = 0;$DvtPictoChartKeyboardHandler$$ < this.$getNumChildren$();$DvtPictoChartKeyboardHandler$$++) {
      var $DvtPictoChartItem$$ = this.$getChildAt$($DvtPictoChartKeyboardHandler$$);
      ($DvtPictoChartItem$$ instanceof $DvtPictoChartShapeMarker$$ || $DvtPictoChartItem$$ instanceof $DvtPictoChartImageMarker$$) && $DvtPictoChartItem$$.$setSelected$($dvt$$8$$);
    }
  };
  $DvtPictoChartItem$$.prototype.$showHoverEffect$ = function $$DvtPictoChartItem$$$$$showHoverEffect$$() {
    for (var $dvt$$8$$ = 0;$dvt$$8$$ < this.$getNumChildren$();$dvt$$8$$++) {
      var $DvtPictoChartKeyboardHandler$$ = this.$getChildAt$($dvt$$8$$);
      ($DvtPictoChartKeyboardHandler$$ instanceof $DvtPictoChartShapeMarker$$ || $DvtPictoChartKeyboardHandler$$ instanceof $DvtPictoChartImageMarker$$) && $DvtPictoChartKeyboardHandler$$.$showHoverEffect$();
    }
  };
  $DvtPictoChartItem$$.prototype.$hideHoverEffect$ = function $$DvtPictoChartItem$$$$$hideHoverEffect$$() {
    for (var $dvt$$8$$ = 0;$dvt$$8$$ < this.$getNumChildren$();$dvt$$8$$++) {
      var $DvtPictoChartKeyboardHandler$$ = this.$getChildAt$($dvt$$8$$);
      ($DvtPictoChartKeyboardHandler$$ instanceof $DvtPictoChartShapeMarker$$ || $DvtPictoChartKeyboardHandler$$ instanceof $DvtPictoChartImageMarker$$) && $DvtPictoChartKeyboardHandler$$.$hideHoverEffect$();
    }
  };
  $DvtPictoChartItem$$.prototype.$getDisplayables$ = function $$DvtPictoChartItem$$$$$getDisplayables$$() {
    return [this];
  };
  $DvtPictoChartItem$$.prototype.$getAriaLabel$ = function $$DvtPictoChartItem$$$$$getAriaLabel$$() {
    var $DvtPictoChartShapeMarker$$ = [], $DvtPictoChartKeyboardHandler$$ = this.$_picto$.$getOptions$();
    this.$isSelectable$() && $DvtPictoChartShapeMarker$$.push($dvt$$8$$.$Bundle$.$getTranslation$($DvtPictoChartKeyboardHandler$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", $dvt$$8$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    this.$isDrillable$() && $DvtPictoChartShapeMarker$$.push($dvt$$8$$.$Bundle$.$getTranslation$($DvtPictoChartKeyboardHandler$$, "stateDrillable", $dvt$$8$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    $DvtPictoChartKeyboardHandler$$ = this.getName();
    $DvtPictoChartKeyboardHandler$$ = null != this.$getShortDesc$() ? this.$getShortDesc$() : null == $DvtPictoChartKeyboardHandler$$ ? this.$_getCountString$() : $dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtPictoChartKeyboardHandler$$, this.$_getCountString$()]);
    return $dvt$$8$$.$Displayable$.$generateAriaLabel$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartShapeMarker$$);
  };
  $DvtPictoChartItem$$.prototype.$_updateAriaLabel$ = function $$DvtPictoChartItem$$$$$_updateAriaLabel$$() {
    $dvt$$8$$.$Agent$.$deferAriaCreation$() || this.$setAriaProperty$("label", this.$getAriaLabel$());
  };
  $DvtPictoChartItem$$.prototype.$getCategories$ = function $$DvtPictoChartItem$$$$$getCategories$$() {
    return this.$_item$.categories || [this.getId()];
  };
  $DvtPictoChartItem$$.prototype.$getNextNavigable$ = function $$DvtPictoChartItem$$$$$getNextNavigable$$($DvtPictoChartShapeMarker$$) {
    var $DvtPictoChartItem$$ = this.$_picto$.$getEventManager$().$KeyboardHandler$;
    return $DvtPictoChartShapeMarker$$.type == $dvt$$8$$.MouseEvent.$CLICK$ || $DvtPictoChartItem$$.$isMultiSelectEvent$($DvtPictoChartShapeMarker$$) ? this : $DvtPictoChartItem$$.$isNavigationEvent$($DvtPictoChartShapeMarker$$) ? $DvtPictoChartKeyboardHandler$$.$getNextNavigable$(this.$_picto$, this, $DvtPictoChartShapeMarker$$) : null;
  };
  $DvtPictoChartItem$$.prototype.$getKeyboardBoundingBox$ = function $$DvtPictoChartItem$$$$$getKeyboardBoundingBox$$($dvt$$8$$) {
    return this.$getDimensions$($dvt$$8$$);
  };
  $DvtPictoChartItem$$.prototype.$getTargetElem$ = function $$DvtPictoChartItem$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtPictoChartItem$$.prototype.$showKeyboardFocusEffect$ = function $$DvtPictoChartItem$$$$$showKeyboardFocusEffect$$() {
    this.$_isNoneShape$ || (this.$_isShowingKeyboardFocusEffect$ = !0, this.$showHoverEffect$());
  };
  $DvtPictoChartItem$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtPictoChartItem$$$$$hideKeyboardFocusEffect$$() {
    this.$_isNoneShape$ || (this.$_isShowingKeyboardFocusEffect$ = !1, this.$hideHoverEffect$());
  };
  $DvtPictoChartItem$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtPictoChartItem$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtPictoChartItem$$.prototype.$setKeyboardTooltipLocation$ = function $$DvtPictoChartItem$$$$$setKeyboardTooltipLocation$$($dvt$$8$$) {
    this.$_keyboardTooltipLocation$ = $dvt$$8$$;
  };
  $DvtPictoChartItem$$.prototype.$getKeyboardTooltipLocation$ = function $$DvtPictoChartItem$$$$$getKeyboardTooltipLocation$$() {
    return this.$_keyboardTooltipLocation$;
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPictoChartKeyboardHandler$$, $dvt$$8$$.$KeyboardHandler$);
  $DvtPictoChartKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtPictoChartKeyboardHandler$$$$$isSelectionEvent$$($dvt$$8$$) {
    return this.$isNavigationEvent$($dvt$$8$$) && !$dvt$$8$$.ctrlKey;
  };
  $DvtPictoChartKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtPictoChartKeyboardHandler$$$$$isMultiSelectEvent$$($DvtPictoChartShapeMarker$$) {
    return $DvtPictoChartShapeMarker$$.keyCode == $dvt$$8$$.KeyboardEvent.$SPACE$ && $DvtPictoChartShapeMarker$$.ctrlKey;
  };
  $DvtPictoChartKeyboardHandler$$.$getNextNavigable$ = function $$DvtPictoChartKeyboardHandler$$$$getNextNavigable$$($DvtPictoChartShapeMarker$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$, $DvtPictoChartDefaults$$) {
    var $DvtPictoChartEventManager$$ = $DvtPictoChartShapeMarker$$.$getItems$();
    $DvtPictoChartDefaults$$ || ($DvtPictoChartDefaults$$ = $DvtPictoChartItem$$);
    if ("none" == $DvtPictoChartItem$$.$getShape$() && $DvtPictoChartItem$$ != $DvtPictoChartDefaults$$) {
      var $DvtPictoChartAutomation$$ = $dvt$$8$$.$ArrayUtils$.$getIndex$($DvtPictoChartEventManager$$, $DvtPictoChartItem$$);
      if (0 == $DvtPictoChartAutomation$$ || $DvtPictoChartAutomation$$ == $DvtPictoChartEventManager$$.length - 1) {
        return $DvtPictoChartDefaults$$;
      }
    }
    var $isForward_isOriginRight_nextIdx$$ = $DvtPictoChartRenderer$$.$isOriginRight$($DvtPictoChartShapeMarker$$), $isOriginBottom$$ = $DvtPictoChartRenderer$$.$isOriginBottom$($DvtPictoChartShapeMarker$$), $isDirectional_isVertical$$1$$ = $DvtPictoChartRenderer$$.$isVertical$($DvtPictoChartShapeMarker$$), $DvtPictoChartAutomation$$ = $DvtPictoChartItem$$, $isForward_isOriginRight_nextIdx$$ = $DvtPictoChartImageMarker$$.keyCode == $dvt$$8$$.KeyboardEvent.$LEFT_ARROW$ && $isForward_isOriginRight_nextIdx$$ || 
    $DvtPictoChartImageMarker$$.keyCode == $dvt$$8$$.KeyboardEvent.$RIGHT_ARROW$ && !$isForward_isOriginRight_nextIdx$$ || $DvtPictoChartImageMarker$$.keyCode == $dvt$$8$$.KeyboardEvent.$UP_ARROW$ && $isOriginBottom$$ || $DvtPictoChartImageMarker$$.keyCode == $dvt$$8$$.KeyboardEvent.$DOWN_ARROW$ && !$isOriginBottom$$, $isDirectional_isVertical$$1$$ = $DvtPictoChartImageMarker$$.keyCode == $dvt$$8$$.KeyboardEvent.$LEFT_ARROW$ && $isDirectional_isVertical$$1$$ || $DvtPictoChartImageMarker$$.keyCode == 
    $dvt$$8$$.KeyboardEvent.$RIGHT_ARROW$ && $isDirectional_isVertical$$1$$ || $DvtPictoChartImageMarker$$.keyCode == $dvt$$8$$.KeyboardEvent.$UP_ARROW$ && !$isDirectional_isVertical$$1$$ || $DvtPictoChartImageMarker$$.keyCode == $dvt$$8$$.KeyboardEvent.$DOWN_ARROW$ && !$isDirectional_isVertical$$1$$, $isForward_isOriginRight_nextIdx$$ = $dvt$$8$$.$ArrayUtils$.$getIndex$($DvtPictoChartEventManager$$, $DvtPictoChartItem$$) + ($isForward_isOriginRight_nextIdx$$ ? 1 : -1);
    $isDirectional_isVertical$$1$$ ? $DvtPictoChartAutomation$$ = $dvt$$8$$.$KeyboardHandler$.$getNextNavigable$($DvtPictoChartItem$$, $DvtPictoChartImageMarker$$, $DvtPictoChartEventManager$$) : $isForward_isOriginRight_nextIdx$$ < $DvtPictoChartEventManager$$.length && 0 <= $isForward_isOriginRight_nextIdx$$ && ($DvtPictoChartAutomation$$ = $DvtPictoChartEventManager$$[$isForward_isOriginRight_nextIdx$$]);
    "none" == $DvtPictoChartAutomation$$.$getShape$() && ($DvtPictoChartAutomation$$ = $DvtPictoChartAutomation$$ != $DvtPictoChartItem$$ ? $DvtPictoChartKeyboardHandler$$.$getNextNavigable$($DvtPictoChartShapeMarker$$, $DvtPictoChartAutomation$$, $DvtPictoChartImageMarker$$, $DvtPictoChartDefaults$$) : $DvtPictoChartDefaults$$);
    return $DvtPictoChartAutomation$$;
  };
  $DvtPictoChartKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPictoChartKeyboardHandler$$$$$processKeyDown$$($DvtPictoChartShapeMarker$$) {
    var $DvtPictoChartItem$$ = this.$_eventManager$.$getFocus$();
    return $DvtPictoChartItem$$ && $DvtPictoChartShapeMarker$$.keyCode == $dvt$$8$$.KeyboardEvent.$ENTER$ ? (this.$_eventManager$.$processDrillEvent$($DvtPictoChartItem$$), $dvt$$8$$.$EventManager$.$consumeEvent$($DvtPictoChartShapeMarker$$), $DvtPictoChartItem$$) : $DvtPictoChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtPictoChartShapeMarker$$);
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPictoChartShapeMarker$$, $dvt$$8$$.$SimpleMarker$);
  $DvtPictoChartShapeMarker$$.prototype.$animateUpdate$ = function $$DvtPictoChartShapeMarker$$$$$animateUpdate$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) {
    var $DvtPictoChartItem$$ = new $dvt$$8$$.$CustomAnimation$(this.$getCtx$(), this, .75 * this.$_picto$.$getAnimationDuration$()), $DvtPictoChartImageMarker$$ = $DvtPictoChartItem$$.$_animator$, $DvtPictoChartDefaults$$ = this.$getFill$();
    this.$setFill$($DvtPictoChartKeyboardHandler$$.$getFill$().clone());
    $DvtPictoChartImageMarker$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_FILL$, this, this.$getFill$, this.$setFill$, $DvtPictoChartDefaults$$);
    $DvtPictoChartDefaults$$ = this.$_getAnimationParams$();
    this.$_setAnimationParams$($DvtPictoChartKeyboardHandler$$.$_getAnimationParams$());
    $DvtPictoChartImageMarker$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtPictoChartDefaults$$);
    $DvtPictoChartKeyboardHandler$$.$setAlpha$(0);
    $DvtPictoChartShapeMarker$$.add($DvtPictoChartItem$$, 1);
  };
  $DvtPictoChartShapeMarker$$.prototype.$animateDelete$ = function $$DvtPictoChartShapeMarker$$$$$animateDelete$$($DvtPictoChartShapeMarker$$) {
    $DvtPictoChartShapeMarker$$.add(new $dvt$$8$$.$AnimFadeOut$(this.$getCtx$(), this, .5 * this.$_picto$.$getAnimationDuration$()), 0);
  };
  $DvtPictoChartShapeMarker$$.prototype.$animateInsert$ = function $$DvtPictoChartShapeMarker$$$$$animateInsert$$($DvtPictoChartShapeMarker$$) {
    this.$setAlpha$(0);
    $DvtPictoChartShapeMarker$$.add(new $dvt$$8$$.$AnimFadeIn$(this.$getCtx$(), this, .5 * this.$_picto$.$getAnimationDuration$()), 2);
  };
  $DvtPictoChartShapeMarker$$.prototype.$_getAnimationParams$ = function $$DvtPictoChartShapeMarker$$$$$_getAnimationParams$$() {
    return [this.$getCx$(), this.$getCy$(), this.getWidth(), this.getHeight()];
  };
  $DvtPictoChartShapeMarker$$.prototype.$_setAnimationParams$ = function $$DvtPictoChartShapeMarker$$$$$_setAnimationParams$$($dvt$$8$$) {
    this.$setCx$($dvt$$8$$[0]);
    this.$setCy$($dvt$$8$$[1]);
    this.$setWidth$($dvt$$8$$[2]);
    this.$setHeight$($dvt$$8$$[3]);
  };
  var $DvtPictoChartRenderer$$ = {};
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPictoChartRenderer$$, $dvt$$8$$.$Obj$);
  $DvtPictoChartRenderer$$.$render$ = function $$DvtPictoChartRenderer$$$$render$$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartDefaults$$, $DvtPictoChartEventManager$$) {
    var $DvtPictoChartAutomation$$ = $DvtPictoChartKeyboardHandler$$.$getCtx$(), $background$$17_gapRatio$$1$$ = new $dvt$$8$$.Rect($DvtPictoChartAutomation$$, $DvtPictoChartDefaults$$.x, $DvtPictoChartDefaults$$.y, $DvtPictoChartDefaults$$.$w$, $DvtPictoChartDefaults$$.$h$);
    $background$$17_gapRatio$$1$$.$setInvisibleFill$();
    $DvtPictoChartItem$$.$addChild$($background$$17_gapRatio$$1$$);
    $DvtPictoChartEventManager$$ || ($DvtPictoChartEventManager$$ = $DvtPictoChartRenderer$$.$getInfo$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartDefaults$$.$w$, $DvtPictoChartDefaults$$.$h$));
    if ($DvtPictoChartEventManager$$.items) {
      $DvtPictoChartKeyboardHandler$$.$registerItems$($DvtPictoChartEventManager$$.items);
      for (var $background$$17_gapRatio$$1$$ = $DvtPictoChartKeyboardHandler$$.$getOptions$()._gapRatio, $isVert$$12$$ = $DvtPictoChartRenderer$$.$isVertical$($DvtPictoChartKeyboardHandler$$), $isOriginBottom$$1$$ = $DvtPictoChartRenderer$$.$isOriginBottom$($DvtPictoChartKeyboardHandler$$), $isOriginRight$$1$$ = $DvtPictoChartRenderer$$.$isOriginRight$($DvtPictoChartKeyboardHandler$$), $cellMap$$1$$ = new $dvt$$8$$.$Map2D$, $prevColSpan$$ = 0, $prevRowSpan$$ = 0, $remainder$$ = 0, $i$$552$$ = 0;$i$$552$$ < 
      $DvtPictoChartEventManager$$.items.length;$i$$552$$++) {
        for (var $item$$45$$ = $DvtPictoChartEventManager$$.items[$i$$552$$], $colSpan$$1$$ = $item$$45$$.$getColSpan$(), $rowSpan$$1$$ = $item$$45$$.$getRowSpan$(), $w$$35$$ = $colSpan$$1$$ * $DvtPictoChartEventManager$$.$colWidth$, $h$$31$$ = $rowSpan$$1$$ * $DvtPictoChartEventManager$$.$rowHeight$, $count$$25$$ = $item$$45$$.getCount(), $index$$179$$ = 0, $isFirstMarker$$ = !0, $cell$$27$$;0 < $count$$25$$;) {
          if ($colSpan$$1$$ != $prevColSpan$$ || $rowSpan$$1$$ != $prevRowSpan$$) {
            $remainder$$ = 0;
          }
          0 == $remainder$$ && ($cell$$27$$ = $DvtPictoChartRenderer$$.$_findNextAvailableCell$($cellMap$$1$$, $colSpan$$1$$, $rowSpan$$1$$, $DvtPictoChartEventManager$$.$colCount$, $DvtPictoChartEventManager$$.$rowCount$, $isVert$$12$$));
          if (null == $cell$$27$$) {
            break;
          }
          var $x$$180_xOffset$$3$$ = $cell$$27$$.$col$ * $DvtPictoChartEventManager$$.$colWidth$ + $w$$35$$ / 2, $y$$160_yOffset$$6$$ = $cell$$27$$.$row$ * $DvtPictoChartEventManager$$.$rowHeight$ + $h$$31$$ / 2, $x$$180_xOffset$$3$$ = $DvtPictoChartDefaults$$.x + ($isOriginRight$$1$$ ? $DvtPictoChartDefaults$$.$w$ - $x$$180_xOffset$$3$$ : $x$$180_xOffset$$3$$), $y$$160_yOffset$$6$$ = $DvtPictoChartDefaults$$.y + ($isOriginBottom$$1$$ ? $DvtPictoChartDefaults$$.$h$ - $y$$160_yOffset$$6$$ : $y$$160_yOffset$$6$$), 
          $fraction$$1$$ = Math.min(1 - $remainder$$, $count$$25$$), $rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$;
          $isVert$$12$$ ? ($rectX$$ = $x$$180_xOffset$$3$$ - $w$$35$$ / 2, $rectY$$ = $isOriginBottom$$1$$ ? $y$$160_yOffset$$6$$ + $h$$31$$ * (.5 - $fraction$$1$$ - $remainder$$) : $y$$160_yOffset$$6$$ + $h$$31$$ * ($remainder$$ - .5), $rectW$$1$$ = $w$$35$$, $rectH$$1$$ = $h$$31$$ * $fraction$$1$$) : ($rectX$$ = $isOriginRight$$1$$ ? $x$$180_xOffset$$3$$ + $w$$35$$ * (.5 - $fraction$$1$$ - $remainder$$) : $x$$180_xOffset$$3$$ + $w$$35$$ * ($remainder$$ - .5), $rectY$$ = $y$$160_yOffset$$6$$ - $h$$31$$ / 
          2, $rectW$$1$$ = $w$$35$$ * $fraction$$1$$, $rectH$$1$$ = $h$$31$$);
          var $marker$$14_markerId$$;
          1 == $fraction$$1$$ ? ($marker$$14_markerId$$ = $item$$45$$.getId() + "_" + $index$$179$$, $index$$179$$++) : $marker$$14_markerId$$ = Math.random();
          if ($item$$45$$.$getSource$()) {
            $marker$$14_markerId$$ = new $DvtPictoChartImageMarker$$($DvtPictoChartKeyboardHandler$$, $x$$180_xOffset$$3$$, $y$$160_yOffset$$6$$, $w$$35$$, $h$$31$$, $item$$45$$.$getSource$(), $item$$45$$.$getSourceSelected$(), $item$$45$$.$getSourceHover$(), $item$$45$$.$getSourceHoverSelected$(), $marker$$14_markerId$$ + "_I");
          } else {
            var $clipPath$$14_hitArea$$3$$ = new $dvt$$8$$.Rect($DvtPictoChartAutomation$$, $rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$);
            $clipPath$$14_hitArea$$3$$.$setInvisibleFill$();
            $item$$45$$.$addChild$($clipPath$$14_hitArea$$3$$);
            $marker$$14_markerId$$ = new $DvtPictoChartShapeMarker$$($DvtPictoChartKeyboardHandler$$, $item$$45$$.$getShape$(), $x$$180_xOffset$$3$$, $y$$160_yOffset$$6$$, $w$$35$$ - $DvtPictoChartEventManager$$.$colWidth$ * $background$$17_gapRatio$$1$$, $h$$31$$ - $DvtPictoChartEventManager$$.$rowHeight$ * $background$$17_gapRatio$$1$$, $marker$$14_markerId$$ + "_S");
            $marker$$14_markerId$$.$setSolidFill$($item$$45$$.$getColor$());
            $marker$$14_markerId$$.$setSolidStroke$($item$$45$$.$getBorderColor$(), null, $item$$45$$.$getBorderWidth$());
            $marker$$14_markerId$$.$setDataColor$($item$$45$$.$getColor$());
          }
          1 > $fraction$$1$$ && ($clipPath$$14_hitArea$$3$$ = new $dvt$$8$$.$ClipPath$, $clipPath$$14_hitArea$$3$$.$addRect$($rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$), $marker$$14_markerId$$.$setClipPath$($clipPath$$14_hitArea$$3$$));
          $isFirstMarker$$ && ($item$$45$$.$setKeyboardTooltipLocation$(new $dvt$$8$$.$Point$($x$$180_xOffset$$3$$, $y$$160_yOffset$$6$$)), $isFirstMarker$$ = !1);
          $item$$45$$.$addChild$($marker$$14_markerId$$);
          $DvtPictoChartKeyboardHandler$$.$registerMarker$($marker$$14_markerId$$);
          $count$$25$$ -= $fraction$$1$$;
          $remainder$$ = ($remainder$$ + $fraction$$1$$) % 1;
        }
        $DvtPictoChartItem$$.$addChild$($item$$45$$);
        $item$$45$$.$updateAriaAttributes$();
        $prevColSpan$$ = $colSpan$$1$$;
        $prevRowSpan$$ = $rowSpan$$1$$;
      }
    } else {
      $DvtPictoChartRenderer$$.$renderEmptyText$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartDefaults$$);
    }
  };
  $DvtPictoChartRenderer$$.$getInfo$ = function $$DvtPictoChartRenderer$$$$getInfo$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartImageMarker$$) {
    var $DvtPictoChartDefaults$$ = $DvtPictoChartShapeMarker$$.$getOptions$(), $DvtPictoChartEventManager$$ = $DvtPictoChartDefaults$$.items;
    if (!$DvtPictoChartEventManager$$) {
      return {};
    }
    for (var $DvtPictoChartAutomation$$ = $dvt$$8$$.$ArrayUtils$.$createBooleanMap$($DvtPictoChartDefaults$$.hiddenCategories), $items$$29$$ = [], $numCells$$ = 0, $maxColSpan$$ = 1, $maxRowSpan$$ = 1, $colCount$$1_i$$553$$ = 0;$colCount$$1_i$$553$$ < $DvtPictoChartEventManager$$.length;$colCount$$1_i$$553$$++) {
      if (null != $DvtPictoChartEventManager$$[$colCount$$1_i$$553$$]) {
        var $item$$46$$ = new $DvtPictoChartItem$$($DvtPictoChartShapeMarker$$, $DvtPictoChartEventManager$$[$colCount$$1_i$$553$$]);
        if (!$DvtPictoChartAutomation$$ || !$dvt$$8$$.$ArrayUtils$.$hasAnyMapItem$($DvtPictoChartAutomation$$, $item$$46$$.$getCategories$())) {
          var $colSpan$$2$$ = $item$$46$$.$getColSpan$(), $rowSpan$$2$$ = $item$$46$$.$getRowSpan$();
          $colSpan$$2$$ > $maxColSpan$$ && ($maxColSpan$$ = $colSpan$$2$$);
          $rowSpan$$2$$ > $maxRowSpan$$ && ($maxRowSpan$$ = $rowSpan$$2$$);
          $numCells$$ += $colSpan$$2$$ * $rowSpan$$2$$ * $item$$46$$.getCount();
          $items$$29$$.push($item$$46$$);
        }
      }
    }
    if (0 == $numCells$$) {
      return {};
    }
    $DvtPictoChartEventManager$$ = $DvtPictoChartDefaults$$.columnWidth;
    $DvtPictoChartAutomation$$ = $DvtPictoChartDefaults$$.rowHeight;
    $DvtPictoChartKeyboardHandler$$ && $DvtPictoChartImageMarker$$ || ($DvtPictoChartEventManager$$ || ($DvtPictoChartEventManager$$ = $DvtPictoChartAutomation$$ ? $DvtPictoChartAutomation$$ : $DvtPictoChartDefaults$$._defaultSize), $DvtPictoChartAutomation$$ || ($DvtPictoChartAutomation$$ = $DvtPictoChartEventManager$$));
    $DvtPictoChartShapeMarker$$ = $DvtPictoChartRenderer$$.$isVertical$($DvtPictoChartShapeMarker$$);
    $colCount$$1_i$$553$$ = $DvtPictoChartDefaults$$.columnCount;
    $DvtPictoChartDefaults$$ = $DvtPictoChartDefaults$$.rowCount;
    $colCount$$1_i$$553$$ || $DvtPictoChartDefaults$$ || ($DvtPictoChartKeyboardHandler$$ && $DvtPictoChartImageMarker$$ ? $DvtPictoChartShapeMarker$$ ? $DvtPictoChartDefaults$$ = $DvtPictoChartRenderer$$.$_ceil$(Math.sqrt($numCells$$ * $DvtPictoChartImageMarker$$ / $DvtPictoChartKeyboardHandler$$), $maxRowSpan$$) : $colCount$$1_i$$553$$ = $DvtPictoChartRenderer$$.$_ceil$(Math.sqrt($numCells$$ * $DvtPictoChartKeyboardHandler$$ / $DvtPictoChartImageMarker$$), $maxColSpan$$) : $DvtPictoChartKeyboardHandler$$ ? 
    $colCount$$1_i$$553$$ = Math.max(Math.floor($DvtPictoChartKeyboardHandler$$ / $DvtPictoChartEventManager$$), 1) : $DvtPictoChartImageMarker$$ ? $DvtPictoChartDefaults$$ = Math.max(Math.floor($DvtPictoChartImageMarker$$ / $DvtPictoChartAutomation$$), 1) : $DvtPictoChartShapeMarker$$ ? $DvtPictoChartDefaults$$ = $DvtPictoChartRenderer$$.$_ceil$(Math.sqrt($numCells$$), $maxRowSpan$$) : $colCount$$1_i$$553$$ = $DvtPictoChartRenderer$$.$_ceil$(Math.sqrt($numCells$$), $maxColSpan$$));
    $colCount$$1_i$$553$$ ? $DvtPictoChartDefaults$$ || ($DvtPictoChartDefaults$$ = $DvtPictoChartRenderer$$.$_ceil$($numCells$$ / $colCount$$1_i$$553$$, $maxRowSpan$$)) : $colCount$$1_i$$553$$ = $DvtPictoChartRenderer$$.$_ceil$($numCells$$ / $DvtPictoChartDefaults$$, $maxColSpan$$);
    $DvtPictoChartKeyboardHandler$$ && $DvtPictoChartImageMarker$$ && ($DvtPictoChartEventManager$$ || ($DvtPictoChartEventManager$$ = $DvtPictoChartAutomation$$ ? $DvtPictoChartAutomation$$ : Math.min($DvtPictoChartKeyboardHandler$$ / $colCount$$1_i$$553$$, $DvtPictoChartImageMarker$$ / $DvtPictoChartDefaults$$)), $DvtPictoChartAutomation$$ || ($DvtPictoChartAutomation$$ = $DvtPictoChartEventManager$$));
    return 0 >= $colCount$$1_i$$553$$ || 0 >= $DvtPictoChartDefaults$$ || 0 >= $DvtPictoChartEventManager$$ || 0 >= $DvtPictoChartAutomation$$ ? {} : {items:$items$$29$$, $colCount$:$colCount$$1_i$$553$$, $rowCount$:$DvtPictoChartDefaults$$, $colWidth$:$DvtPictoChartEventManager$$, $rowHeight$:$DvtPictoChartAutomation$$};
  };
  $DvtPictoChartRenderer$$.$_ceil$ = function $$DvtPictoChartRenderer$$$$_ceil$$($dvt$$8$$, $DvtPictoChartShapeMarker$$) {
    return Math.ceil($dvt$$8$$ / $DvtPictoChartShapeMarker$$) * $DvtPictoChartShapeMarker$$;
  };
  $DvtPictoChartRenderer$$.$_findNextAvailableCell$ = function $$DvtPictoChartRenderer$$$$_findNextAvailableCell$$($dvt$$8$$, $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$, $DvtPictoChartDefaults$$) {
    if ($DvtPictoChartDefaults$$) {
      return ($dvt$$8$$ = $DvtPictoChartRenderer$$.$_findNextAvailableCell$($dvt$$8$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartShapeMarker$$, $DvtPictoChartImageMarker$$, $DvtPictoChartItem$$, !1)) ? {$col$:$dvt$$8$$.$row$, $row$:$dvt$$8$$.$col$} : null;
    }
    for ($DvtPictoChartDefaults$$ = 0;$DvtPictoChartDefaults$$ < $DvtPictoChartImageMarker$$ - $DvtPictoChartKeyboardHandler$$ + 1;$DvtPictoChartDefaults$$++) {
      for (var $DvtPictoChartEventManager$$ = 0;$DvtPictoChartEventManager$$ < $DvtPictoChartItem$$ - $DvtPictoChartShapeMarker$$ + 1;$DvtPictoChartEventManager$$++) {
        if ($DvtPictoChartRenderer$$.$_areCellsAvailable$($dvt$$8$$, $DvtPictoChartEventManager$$, $DvtPictoChartDefaults$$, $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$)) {
          return $DvtPictoChartRenderer$$.$_occupyCells$($dvt$$8$$, $DvtPictoChartEventManager$$, $DvtPictoChartDefaults$$, $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$), {$col$:$DvtPictoChartEventManager$$, $row$:$DvtPictoChartDefaults$$};
        }
      }
    }
    return null;
  };
  $DvtPictoChartRenderer$$.$_areCellsAvailable$ = function $$DvtPictoChartRenderer$$$$_areCellsAvailable$$($dvt$$8$$, $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$) {
    for (var $DvtPictoChartDefaults$$ = 0;$DvtPictoChartDefaults$$ < $DvtPictoChartImageMarker$$;$DvtPictoChartDefaults$$++) {
      for (var $DvtPictoChartEventManager$$ = 0;$DvtPictoChartEventManager$$ < $DvtPictoChartItem$$;$DvtPictoChartEventManager$$++) {
        if ($dvt$$8$$.get($DvtPictoChartShapeMarker$$ + $DvtPictoChartEventManager$$, $DvtPictoChartKeyboardHandler$$ + $DvtPictoChartDefaults$$)) {
          return !1;
        }
      }
    }
    return !0;
  };
  $DvtPictoChartRenderer$$.$_occupyCells$ = function $$DvtPictoChartRenderer$$$$_occupyCells$$($dvt$$8$$, $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$) {
    for (var $DvtPictoChartDefaults$$ = 0;$DvtPictoChartDefaults$$ < $DvtPictoChartImageMarker$$;$DvtPictoChartDefaults$$++) {
      for (var $DvtPictoChartEventManager$$ = 0;$DvtPictoChartEventManager$$ < $DvtPictoChartItem$$;$DvtPictoChartEventManager$$++) {
        $dvt$$8$$.put($DvtPictoChartShapeMarker$$ + $DvtPictoChartEventManager$$, $DvtPictoChartKeyboardHandler$$ + $DvtPictoChartDefaults$$, !0);
      }
    }
  };
  $DvtPictoChartRenderer$$.$renderEmptyText$ = function $$DvtPictoChartRenderer$$$$renderEmptyText$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$) {
    var $DvtPictoChartImageMarker$$ = $DvtPictoChartShapeMarker$$.$getOptions$(), $DvtPictoChartDefaults$$ = $dvt$$8$$.$Bundle$.$getTranslation$($DvtPictoChartImageMarker$$, "labelNoData", $dvt$$8$$.$Bundle$.$UTIL_PREFIX$, "NO_DATA");
    $DvtPictoChartKeyboardHandler$$ = $dvt$$8$$.$TextUtils$.$renderEmptyText$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartDefaults$$, $DvtPictoChartItem$$.clone(), $DvtPictoChartShapeMarker$$.$getEventManager$(), $DvtPictoChartImageMarker$$._statusMessageStyle);
    $DvtPictoChartShapeMarker$$.$registerEmptyText$($DvtPictoChartKeyboardHandler$$);
  };
  $DvtPictoChartRenderer$$.$isVertical$ = function $$DvtPictoChartRenderer$$$$isVertical$$($dvt$$8$$) {
    return "vertical" == $dvt$$8$$.$getOptions$().layout;
  };
  $DvtPictoChartRenderer$$.$isOriginBottom$ = function $$DvtPictoChartRenderer$$$$isOriginBottom$$($dvt$$8$$) {
    $dvt$$8$$ = $dvt$$8$$.$getOptions$().layoutOrigin;
    return "bottomStart" == $dvt$$8$$ || "bottomEnd" == $dvt$$8$$;
  };
  $DvtPictoChartRenderer$$.$isOriginRight$ = function $$DvtPictoChartRenderer$$$$isOriginRight$$($DvtPictoChartShapeMarker$$) {
    var $DvtPictoChartKeyboardHandler$$ = $DvtPictoChartShapeMarker$$.$getOptions$().layoutOrigin, $DvtPictoChartKeyboardHandler$$ = "topEnd" == $DvtPictoChartKeyboardHandler$$ || "bottomEnd" == $DvtPictoChartKeyboardHandler$$;
    return $dvt$$8$$.$Agent$.$isRightToLeft$($DvtPictoChartShapeMarker$$.$getCtx$()) ? !$DvtPictoChartKeyboardHandler$$ : $DvtPictoChartKeyboardHandler$$;
  };
  $dvt$$8$$.$exportProperty$($dvt$$8$$, "PictoChart", $dvt$$8$$.$PictoChart$);
  $dvt$$8$$.$exportProperty$($dvt$$8$$.$PictoChart$, "newInstance", $dvt$$8$$.$PictoChart$.newInstance);
  $dvt$$8$$.$exportProperty$($dvt$$8$$.$PictoChart$.prototype, "destroy", $dvt$$8$$.$PictoChart$.prototype.$destroy$);
  $dvt$$8$$.$exportProperty$($dvt$$8$$.$PictoChart$.prototype, "getAutomation", $dvt$$8$$.$PictoChart$.prototype.$getAutomation$);
  $dvt$$8$$.$exportProperty$($dvt$$8$$.$PictoChart$.prototype, "highlight", $dvt$$8$$.$PictoChart$.prototype.$highlight$);
  $dvt$$8$$.$exportProperty$($dvt$$8$$.$PictoChart$.prototype, "render", $dvt$$8$$.$PictoChart$.prototype.$render$);
  $dvt$$8$$.$exportProperty$($dvt$$8$$.$PictoChart$.prototype, "select", $dvt$$8$$.$PictoChart$.prototype.select);
  $dvt$$8$$.$exportProperty$($DvtPictoChartAutomation$$.prototype, "getDomElementForSubId", $DvtPictoChartAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$8$$.$exportProperty$($DvtPictoChartAutomation$$.prototype, "getItem", $DvtPictoChartAutomation$$.prototype.getItem);
  $dvt$$8$$.$exportProperty$($DvtPictoChartAutomation$$.prototype, "getItemCount", $DvtPictoChartAutomation$$.prototype.$getItemCount$);
})(dvt);

  return dvt;
});
