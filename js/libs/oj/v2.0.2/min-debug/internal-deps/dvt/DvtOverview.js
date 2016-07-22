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

(function($dvt$$6$$) {
  function $DvtOverviewEventManager$$($dvt$$6$$) {
    this.Init($dvt$$6$$.$getCtx$(), $dvt$$6$$.$processEvent$, $dvt$$6$$);
    this.$_overview$ = $dvt$$6$$;
  }
  function $DvtOverviewParser$$($dvt$$6$$) {
    this.Init($dvt$$6$$);
  }
  $dvt$$6$$.$OverviewUtils$ = {};
  $dvt$$6$$.$OverviewUtils$.$supportsTouch$ = function $$dvt$$6$$$$OverviewUtils$$$supportsTouch$$() {
    return $dvt$$6$$.$Agent$.$isTouchDevice$();
  };
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$OverviewUtils$, $dvt$$6$$.$Obj$);
  $dvt$$6$$.$OverviewUtils$.$getDatePosition$ = function $$dvt$$6$$$$OverviewUtils$$$getDatePosition$$($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $width$$86$$) {
    $DvtOverviewParser$$ = ($DvtOverviewParser$$ - $dvt$$6$$) * $width$$86$$;
    $dvt$$6$$ = $DvtOverviewEventManager$$ - $dvt$$6$$;
    return 0 == $DvtOverviewParser$$ || 0 == $dvt$$6$$ ? 0 : $DvtOverviewParser$$ / $dvt$$6$$;
  };
  $dvt$$6$$.$OverviewUtils$.$getPositionDate$ = function $$dvt$$6$$$$OverviewUtils$$$getPositionDate$$($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $width$$87$$) {
    $DvtOverviewEventManager$$ = $DvtOverviewParser$$ * ($DvtOverviewEventManager$$ - $dvt$$6$$);
    return 0 == $DvtOverviewEventManager$$ || 0 == $width$$87$$ ? $dvt$$6$$ : $DvtOverviewEventManager$$ / $width$$87$$ + $dvt$$6$$;
  };
  $dvt$$6$$.$Overview$ = function $$dvt$$6$$$$Overview$$($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.Init($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$);
  };
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$Overview$, $dvt$$6$$.$Container$);
  $dvt$$6$$.$Overview$.$MIN_WINDOW_SIZE$ = 10;
  $dvt$$6$$.$Overview$.$DEFAULT_VERTICAL_TIMEAXIS_SIZE$ = 40;
  $dvt$$6$$.$Overview$.$DEFAULT_HORIZONTAL_TIMEAXIS_SIZE$ = 20;
  $dvt$$6$$.$Overview$.$HANDLE_PADDING_SIZE$ = 20;
  $dvt$$6$$.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$ = 5;
  $dvt$$6$$.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ = 1;
  $dvt$$6$$.$Overview$.prototype.Init = function $$dvt$$6$$$$Overview$$$Init$($DvtOverviewParser$$, $callback$$125$$, $callbackObj$$60$$) {
    $dvt$$6$$.$Overview$.$superclass$.Init.call(this, $DvtOverviewParser$$);
    this.$_callback$ = $callback$$125$$;
    this.$_callbackObj$ = $callbackObj$$60$$;
    this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
    if (null != this.$_callback$ || null != this.$_callbackObj$) {
      this.$EventManager$ = new $DvtOverviewEventManager$$(this), this.$EventManager$.$addListeners$(this), $dvt$$6$$.$OverviewUtils$.$supportsTouch$() ? (this.$addEvtListener$($dvt$$6$$.TouchEvent.$TOUCHSTART$, this.$HandleTouchStart$, !1, this), this.$addEvtListener$($dvt$$6$$.TouchEvent.$TOUCHMOVE$, this.$HandleTouchMove$, !1, this), this.$addEvtListener$($dvt$$6$$.TouchEvent.$TOUCHEND$, this.$HandleTouchEnd$, !1, this), this.$addEvtListener$($dvt$$6$$.MouseEvent.$CLICK$, this.$HandleShapeClick$, 
      !1, this)) : (this.$addEvtListener$($dvt$$6$$.MouseEvent.$MOUSEOVER$, this.$HandleShapeMouseOver$, !1, this), this.$addEvtListener$($dvt$$6$$.MouseEvent.$MOUSEOUT$, this.$HandleShapeMouseOut$, !1, this), this.$addEvtListener$($dvt$$6$$.MouseEvent.$CLICK$, this.$HandleShapeClick$, !1, this), this.$addEvtListener$($dvt$$6$$.KeyboardEvent.$KEYDOWN$, this.$HandleKeyDown$, !1, this), this.$addEvtListener$($dvt$$6$$.KeyboardEvent.$KEYUP$, this.$HandleKeyUp$, !1, this));
    }
    this.$_initPos$ = 0;
  };
  $dvt$$6$$.$Overview$.prototype.$setViewportRange$ = function $$dvt$$6$$$$Overview$$$$setViewportRange$$($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    null == $DvtOverviewParser$$ && ($DvtOverviewParser$$ = this.$Width$);
    $dvt$$6$$ = this.$getDatePosition$($dvt$$6$$);
    var $slidingWindow_viewportEnd$$ = this.$getDatePosition$($DvtOverviewEventManager$$);
    $dvt$$6$$ < this.$_leftMargin$ || $slidingWindow_viewportEnd$$ > this.$getMaximumPosition$() || ($DvtOverviewEventManager$$ = Math.max($slidingWindow_viewportEnd$$ - $dvt$$6$$, this.$getMinimumWindowSize$()), 0 < $DvtOverviewEventManager$$ && 0 <= $dvt$$6$$ && $slidingWindow_viewportEnd$$ <= $DvtOverviewParser$$ && ($slidingWindow_viewportEnd$$ = this.$getSlidingWindow$(), this.$isHorizontalRTL$() ? this.$setSlidingWindowPos$($slidingWindow_viewportEnd$$, $DvtOverviewParser$$ - ($dvt$$6$$ + $DvtOverviewEventManager$$)) : 
    this.$setSlidingWindowPos$($slidingWindow_viewportEnd$$, $dvt$$6$$), this.$setSlidingWindowSize$($slidingWindow_viewportEnd$$, $DvtOverviewEventManager$$), this.$ScrollTimeAxis$()));
  };
  $dvt$$6$$.$Overview$.prototype.$isFeatureOff$ = function $$dvt$$6$$$$Overview$$$$isFeatureOff$$() {
    return null == this.$_featuresOff$ ? !1 : -1 != $dvt$$6$$.$ArrayUtils$.$getIndex$(this.$_featuresOff$, "zoom");
  };
  $dvt$$6$$.$Overview$.prototype.$isAnimationOnClick$ = function $$dvt$$6$$$$Overview$$$$isAnimationOnClick$$() {
    return "off" !== this.$_animationOnClick$;
  };
  $dvt$$6$$.$Overview$.prototype.$render$ = function $$dvt$$6$$$$Overview$$$$render$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$75$$) {
    if (null == $DvtOverviewEventManager$$) {
      var $start$$37$$ = this.$_start$, $end$$19$$ = this.$_end$, $slidingWindow$$1$$ = this.$getSlidingWindow$(), $slidingWindowPos$$ = this.$getSlidingWindowPos$($slidingWindow$$1$$);
      null != $slidingWindow$$1$$ && 0 != $slidingWindowPos$$ && (this.$_renderStart$ = $dvt$$6$$.$OverviewUtils$.$getPositionDate$($start$$37$$, $end$$19$$, $slidingWindowPos$$, this.$Width$));
      this.$removeChildren$();
    }
    null != $DvtOverviewParser$$ && null != $height$$75$$ && (this.$Width$ = $DvtOverviewParser$$, this.$Height$ = $height$$75$$);
    $DvtOverviewEventManager$$ && ($DvtOverviewEventManager$$ = this.$Parse$($DvtOverviewEventManager$$), this.$_applyParsedProperties$($DvtOverviewEventManager$$));
    $DvtOverviewEventManager$$ = null != this.$_callback$ || null != this.$_callbackObj$;
    this.$createBackground$($DvtOverviewParser$$, $height$$75$$);
    $DvtOverviewEventManager$$ && this.$createSlidingWindow$($DvtOverviewParser$$, $height$$75$$);
    this.$updateTimeAxis$($DvtOverviewParser$$, $height$$75$$);
    this.$parseFilledTimeRanges$($DvtOverviewParser$$, $height$$75$$);
    this.$updateCurrentTime$($DvtOverviewParser$$, $height$$75$$);
    this.$parseDataXML$($DvtOverviewParser$$, $height$$75$$);
    $DvtOverviewEventManager$$ && (this.$createBorderAroundSlidingWindow$($DvtOverviewParser$$, $height$$75$$), this.$isFlashEnvironment$() && (this.$_resizeArrow$ = this.$createResizeArrow$()), this.$updateSlidingWindow$());
    null != this.$_initialFocusTime$ && (this.$_initPos$ = Math.max(0, $dvt$$6$$.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
    0 < this.$_initPos$ && this.$longScrollToPos$(this.$_initPos$);
  };
  $dvt$$6$$.$Overview$.prototype.$getParser$ = function $$dvt$$6$$$$Overview$$$$getParser$$() {
    return new $DvtOverviewParser$$(this);
  };
  $dvt$$6$$.$Overview$.prototype.$Parse$ = function $$dvt$$6$$$$Overview$$$$Parse$$($dvt$$6$$) {
    return this.$getParser$($dvt$$6$$).parse($dvt$$6$$);
  };
  $dvt$$6$$.$Overview$.prototype.$_applyParsedProperties$ = function $$dvt$$6$$$$Overview$$$$_applyParsedProperties$$($dvt$$6$$) {
    this.$_start$ = $dvt$$6$$.start;
    this.$_end$ = $dvt$$6$$.end;
    this.$_width$ = $dvt$$6$$.width;
    this.$_renderStart$ = $dvt$$6$$.$renderStart$;
    this.$_currentTime$ = $dvt$$6$$.currentTime;
    this.$_initialFocusTime$ = $dvt$$6$$.$initialFocusTime$;
    this.$_animationOnClick$ = $dvt$$6$$.$animationOnClick$;
    this.$_leftMargin$ = Math.max(0, $dvt$$6$$.$leftMargin$);
    this.$_rightMargin$ = Math.max(0, $dvt$$6$$.$rightMargin$);
    isNaN(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
    isNaN(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
    this.$_orientation$ = $dvt$$6$$.orientation;
    this.$_overviewPosition$ = $dvt$$6$$.$overviewPosition$;
    this.$_isRtl$ = $dvt$$6$$.$isRtl$;
    null != $dvt$$6$$.$featuresOff$ && (this.$_featuresOff$ = $dvt$$6$$.$featuresOff$.split(" "));
    null != $dvt$$6$$.$minimumWindowSize$ && 0 < $dvt$$6$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $dvt$$6$$.$minimumWindowSize$);
    this.$_borderStyles$ = $dvt$$6$$.$borderStyles$;
    this.$_timeAxisInfo$ = $dvt$$6$$.$timeAxisInfo$;
    null != $dvt$$6$$.$timeAxisInfo$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
    this.$_formattedTimeRanges$ = $dvt$$6$$.$formattedTimeRanges$;
    this.$_borderTopStyle$ = $dvt$$6$$.borderTopStyle;
    this.$_borderTopColor$ = $dvt$$6$$.borderTopColor;
    this.$_windowBackgroundColor$ = $dvt$$6$$.$windowBackgroundColor$;
    this.$_windowBackgroundAlpha$ = $dvt$$6$$.$windowBackgroundAlpha$;
    this.$_windowBorderTopStyle$ = $dvt$$6$$.$windowBorderTopStyle$;
    this.$_windowBorderRightStyle$ = $dvt$$6$$.$windowBorderRightStyle$;
    this.$_windowBorderBottomStyle$ = $dvt$$6$$.$windowBorderBottomStyle$;
    this.$_windowBorderLeftStyle$ = $dvt$$6$$.$windowBorderLeftStyle$;
    this.$_windowBorderTopColor$ = $dvt$$6$$.$windowBorderTopColor$;
    this.$_windowBorderRightColor$ = $dvt$$6$$.$windowBorderRightColor$;
    this.$_windowBorderBottomColor$ = $dvt$$6$$.$windowBorderBottomColor$;
    this.$_windowBorderLeftColor$ = $dvt$$6$$.$windowBorderLeftColor$;
    this.$_handleTextureColor$ = $dvt$$6$$.$handleTextureColor$;
    this.$_handleFillColor$ = $dvt$$6$$.$handleFillColor$;
    this.$_handleBackgroundImage$ = $dvt$$6$$.$handleBackgroundImage$;
    this.$_handleWidth$ = $dvt$$6$$.$handleWidth$;
    this.$_handleHeight$ = $dvt$$6$$.$handleHeight$;
    this.$_overviewBackgroundColor$ = $dvt$$6$$.$overviewBackgroundColor$;
    this.$_currentTimeIndicatorColor$ = $dvt$$6$$.$currentTimeIndicatorColor$;
    this.$_timeIndicatorColor$ = $dvt$$6$$.$timeIndicatorColor$;
    this.$_timeAxisBarColor$ = $dvt$$6$$.$timeAxisBarColor$;
    this.$_timeAxisBarOpacity$ = $dvt$$6$$.$timeAxisBarOpacity$;
    this.$_leftFilterPanelColor$ = $dvt$$6$$.$leftFilterPanelColor$;
    this.$_leftFilterPanelAlpha$ = $dvt$$6$$.$leftFilterPanelAlpha$;
    this.$_rightFilterPanelColor$ = $dvt$$6$$.$rightFilterPanelColor$;
    this.$_rightFilterPanelAlpha$ = $dvt$$6$$.$rightFilterPanelAlpha$;
  };
  $dvt$$6$$.$Overview$.prototype.$getDatePosition$ = function $$dvt$$6$$$$Overview$$$$getDatePosition$$($DvtOverviewEventManager$$) {
    return Math.max(0, $dvt$$6$$.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $DvtOverviewEventManager$$, this.$getOverviewSize$())) + this.$_leftMargin$;
  };
  $dvt$$6$$.$Overview$.prototype.$getPositionDate$ = function $$dvt$$6$$$$Overview$$$$getPositionDate$$($DvtOverviewEventManager$$) {
    return $dvt$$6$$.$OverviewUtils$.$getPositionDate$(this.$_start$, this.$_end$, Math.max(0, $DvtOverviewEventManager$$ - this.$_leftMargin$), this.$getOverviewSize$());
  };
  $dvt$$6$$.$Overview$.prototype.$isRTL$ = function $$dvt$$6$$$$Overview$$$$isRTL$$() {
    return "true" == this.$_isRtl$;
  };
  $dvt$$6$$.$Overview$.prototype.$isHorizontalRTL$ = function $$dvt$$6$$$$Overview$$$$isHorizontalRTL$$() {
    return this.$isRTL$() && !this.$isVertical$();
  };
  $dvt$$6$$.$Overview$.prototype.$isVertical$ = function $$dvt$$6$$$$Overview$$$$isVertical$$() {
    return "vertical" == this.$_orientation$;
  };
  $dvt$$6$$.$Overview$.prototype.$isOverviewAbove$ = function $$dvt$$6$$$$Overview$$$$isOverviewAbove$$() {
    return "above" == this.$_overviewPosition$;
  };
  $dvt$$6$$.$Overview$.prototype.$getOverviewSize$ = function $$dvt$$6$$$$Overview$$$$getOverviewSize$$() {
    return this.$isVertical$() ? this.$Height$ - this.$_leftMargin$ - this.$_rightMargin$ : this.$Width$ - this.$_leftMargin$ - this.$_rightMargin$;
  };
  $dvt$$6$$.$Overview$.prototype.$getMaximumPosition$ = function $$dvt$$6$$$$Overview$$$$getMaximumPosition$$() {
    return this.$isVertical$() ? this.$Height$ - this.$_rightMargin$ : this.$Width$ - this.$_rightMargin$;
  };
  $dvt$$6$$.$Overview$.prototype.$getMinimumWindowSize$ = function $$dvt$$6$$$$Overview$$$$getMinimumWindowSize$$() {
    return null != this.$_minWinSize$ ? this.$_minWinSize$ : null != this.$_minimumWindowSize$ ? this.$_minWinSize$ = $dvt$$6$$.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, this.$_start$ + this.$_minimumWindowSize$, this.$getOverviewSize$()) : $dvt$$6$$.$Overview$.$MIN_WINDOW_SIZE$;
  };
  $dvt$$6$$.$Overview$.prototype.$getHandleStart$ = function $$dvt$$6$$$$Overview$$$$getHandleStart$$() {
    return $dvt$$6$$.$OverviewUtils$.$supportsTouch$() ? this.$getHandleSize$() / 2 : 0;
  };
  $dvt$$6$$.$Overview$.prototype.$getHandleSize$ = function $$dvt$$6$$$$Overview$$$$getHandleSize$$() {
    return $dvt$$6$$.$OverviewUtils$.$supportsTouch$() ? 30 : 10;
  };
  $dvt$$6$$.$Overview$.prototype.$isHandle$ = function $$dvt$$6$$$$Overview$$$$isHandle$$($dvt$$6$$) {
    var $DvtOverviewEventManager$$ = $dvt$$6$$.getId();
    return "lh" == $DvtOverviewEventManager$$ || "rh" == $DvtOverviewEventManager$$ || "lhb" == $DvtOverviewEventManager$$ || "rhb" == $DvtOverviewEventManager$$ || "grpy" == $DvtOverviewEventManager$$ || "lbgrh" == $DvtOverviewEventManager$$ || "rbgrh" == $DvtOverviewEventManager$$ || null != $dvt$$6$$.getParent() && "grpy" == $dvt$$6$$.getParent().getId();
  };
  $dvt$$6$$.$Overview$.prototype.$getTimeAxisWidth$ = function $$dvt$$6$$$$Overview$$$$getTimeAxisWidth$$() {
    if (null == this.$_timeAxisInfo$) {
      return 0;
    }
    if (null == this.$_timeAxisWidth$) {
      var $DvtOverviewEventManager$$ = parseInt(this.$_timeAxisInfo$.width, 10);
      this.$_timeAxisWidth$ = !isNaN($DvtOverviewEventManager$$) && $DvtOverviewEventManager$$ < this.$Width$ ? $DvtOverviewEventManager$$ : $dvt$$6$$.$Overview$.$DEFAULT_VERTICAL_TIMEAXIS_SIZE$;
    }
    return this.$_timeAxisWidth$;
  };
  $dvt$$6$$.$Overview$.prototype.$getTimeAxisHeight$ = function $$dvt$$6$$$$Overview$$$$getTimeAxisHeight$$() {
    if (null == this.$_timeAxisInfo$) {
      return 0;
    }
    if (null == this.$_timeAxisHeight$) {
      var $DvtOverviewEventManager$$ = parseInt(this.$_timeAxisInfo$.height, 10);
      this.$_timeAxisHeight$ = !isNaN($DvtOverviewEventManager$$) && $DvtOverviewEventManager$$ < this.$Height$ ? $DvtOverviewEventManager$$ : $dvt$$6$$.$Overview$.$DEFAULT_HORIZONTAL_TIMEAXIS_SIZE$;
    }
    return this.$_timeAxisHeight$;
  };
  $dvt$$6$$.$Overview$.prototype.$getPageX$ = function $$dvt$$6$$$$Overview$$$$getPageX$$($DvtOverviewEventManager$$) {
    return $dvt$$6$$.$OverviewUtils$.$supportsTouch$() && null != $DvtOverviewEventManager$$.targetTouches ? 0 < $DvtOverviewEventManager$$.targetTouches.length ? $DvtOverviewEventManager$$.targetTouches[0].pageX : null : $DvtOverviewEventManager$$.pageX;
  };
  $dvt$$6$$.$Overview$.prototype.$getPageY$ = function $$dvt$$6$$$$Overview$$$$getPageY$$($DvtOverviewEventManager$$) {
    return $dvt$$6$$.$OverviewUtils$.$supportsTouch$() && null != $DvtOverviewEventManager$$.targetTouches ? 0 < $DvtOverviewEventManager$$.targetTouches.length ? $DvtOverviewEventManager$$.targetTouches[0].pageY : null : $DvtOverviewEventManager$$.pageY;
  };
  $dvt$$6$$.$Overview$.prototype.$isLeftAndRightFilterRendered$ = function $$dvt$$6$$$$Overview$$$$isLeftAndRightFilterRendered$$() {
    return !1;
  };
  $dvt$$6$$.$Overview$.prototype.$getSlidingWindow$ = function $$dvt$$6$$$$Overview$$$$getSlidingWindow$$() {
    return this.$getChildAt$(1);
  };
  $dvt$$6$$.$Overview$.prototype.$getLeftBackground$ = function $$dvt$$6$$$$Overview$$$$getLeftBackground$$() {
    return this.$isLeftAndRightFilterRendered$() ? this.$getChildAt$(3) : null;
  };
  $dvt$$6$$.$Overview$.prototype.$getRightBackground$ = function $$dvt$$6$$$$Overview$$$$getRightBackground$$() {
    return this.$isLeftAndRightFilterRendered$() ? this.$getChildAt$(4) : null;
  };
  $dvt$$6$$.$Overview$.prototype.$getLeftBackgroundHandle$ = function $$dvt$$6$$$$Overview$$$$getLeftBackgroundHandle$$() {
    return this.$isLeftAndRightFilterRendered$() && !this.$isFeatureOff$() ? this.$getChildAt$(5) : null;
  };
  $dvt$$6$$.$Overview$.prototype.$getRightBackgroundHandle$ = function $$dvt$$6$$$$Overview$$$$getRightBackgroundHandle$$() {
    return this.$isLeftAndRightFilterRendered$() && !this.$isFeatureOff$() ? this.$getChildAt$(6) : null;
  };
  $dvt$$6$$.$Overview$.prototype.$getLeftHandle$ = function $$dvt$$6$$$$Overview$$$$getLeftHandle$$() {
    return this.$getChildAt$(this.$getNumChildren$() - this.$_lastChildIndex$);
  };
  $dvt$$6$$.$Overview$.prototype.$getRightHandle$ = function $$dvt$$6$$$$Overview$$$$getRightHandle$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 1));
  };
  $dvt$$6$$.$Overview$.prototype.$getLeftTopBar$ = function $$dvt$$6$$$$Overview$$$$getLeftTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 2));
  };
  $dvt$$6$$.$Overview$.prototype.$getRightTopBar$ = function $$dvt$$6$$$$Overview$$$$getRightTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 3));
  };
  $dvt$$6$$.$Overview$.prototype.$getBottomBar$ = function $$dvt$$6$$$$Overview$$$$getBottomBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 4));
  };
  $dvt$$6$$.$Overview$.prototype.$getTopBar$ = function $$dvt$$6$$$$Overview$$$$getTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 5));
  };
  $dvt$$6$$.$Overview$.prototype.$setLinePos$ = function $$dvt$$6$$$$Overview$$$$setLinePos$$($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$isVertical$() ? (-1 != $DvtOverviewEventManager$$ && $dvt$$6$$.$setY1$($DvtOverviewEventManager$$), -1 != $DvtOverviewParser$$ && $dvt$$6$$.$setY2$($DvtOverviewParser$$)) : (-1 != $DvtOverviewEventManager$$ && $dvt$$6$$.$setX1$($DvtOverviewEventManager$$), -1 != $DvtOverviewParser$$ && $dvt$$6$$.$setX2$($DvtOverviewParser$$));
  };
  $dvt$$6$$.$Overview$.prototype.$getLinePos1$ = function $$dvt$$6$$$$Overview$$$$getLinePos1$$($dvt$$6$$) {
    return this.$isVertical$() ? $dvt$$6$$.$getY1$() : $dvt$$6$$.$getX1$();
  };
  $dvt$$6$$.$Overview$.prototype.$_findDrawable$ = function $$dvt$$6$$$$Overview$$$$_findDrawable$$($dvt$$6$$) {
    $dvt$$6$$ = $dvt$$6$$.target;
    if (null != $dvt$$6$$) {
      var $DvtOverviewEventManager$$ = $dvt$$6$$.getId();
      if (null == $DvtOverviewEventManager$$) {
        return null;
      }
      if ("_border" == $DvtOverviewEventManager$$.substr($DvtOverviewEventManager$$.length - 7)) {
        return this.$getChildAfter$($dvt$$6$$);
      }
      if ("tick" != $DvtOverviewEventManager$$.substr(0, 4) && "ltb" != $DvtOverviewEventManager$$ && "rtb" != $DvtOverviewEventManager$$ && "bb" != $DvtOverviewEventManager$$ && "tab" != $DvtOverviewEventManager$$) {
        return $dvt$$6$$;
      }
    }
    return null;
  };
  $dvt$$6$$.$Overview$.prototype.$isMovable$ = function $$dvt$$6$$$$Overview$$$$isMovable$$($dvt$$6$$) {
    return "window" == $dvt$$6$$.getId() || "ftr" == $dvt$$6$$.getId() || "sta" == $dvt$$6$$.getId() || this.$isHandle$($dvt$$6$$) ? !0 : !1;
  };
  $dvt$$6$$.$Overview$.prototype.$isFlashEnvironment$ = function $$dvt$$6$$$$Overview$$$$isFlashEnvironment$$() {
    return window && window.$isFlashEnvironment$;
  };
  $dvt$$6$$.$Overview$.prototype.$createBackground$ = function $$dvt$$6$$$$Overview$$$$createBackground$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $background$$15$$ = new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $DvtOverviewParser$$, "bg");
    $background$$15$$.$setSolidFill$(this.$_overviewBackgroundColor$);
    $background$$15$$.$setPixelHinting$();
    this.$addChild$($background$$15$$);
    return $background$$15$$;
  };
  $dvt$$6$$.$Overview$.prototype.$createSlidingWindow$ = function $$dvt$$6$$$$Overview$$$$createSlidingWindow$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $leftBackgroundResizeHandle_vertical$$ = this.$isVertical$(), $leftBackground_slidingWindow$$2_timeAxisTopBar$$ = $leftBackgroundResizeHandle_vertical$$ ? new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "window") : new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "window");
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setPixelHinting$();
    if (!this.$isFeatureOff$()) {
      var $handleSize_rightHandleBackground$$ = this.$getHandleSize$(), $handleStart_rightBackgroundResizeHandle$$ = this.$getHandleStart$();
      if ($leftBackgroundResizeHandle_vertical$$) {
        var $handleX_handleY_rightGrippy$$ = ($DvtOverviewEventManager$$ - 36) / 2, $leftHandle_leftHandleCmds$$ = $dvt$$6$$.$PathUtils$.moveTo($handleX_handleY_rightGrippy$$, 0) + $dvt$$6$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 3, 6, $handleX_handleY_rightGrippy$$ + 8, 8) + $dvt$$6$$.$PathUtils$.lineTo($handleX_handleY_rightGrippy$$ + 28, 8) + $dvt$$6$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 33, 6, $handleX_handleY_rightGrippy$$ + 36, 0);
        $dvt$$6$$.$PathUtils$.closePath();
        var $rightHandle_rightHandleCmds$$ = $dvt$$6$$.$PathUtils$.moveTo($handleX_handleY_rightGrippy$$, 0) + $dvt$$6$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 3, -6, $handleX_handleY_rightGrippy$$ + 8, -8) + $dvt$$6$$.$PathUtils$.lineTo($handleX_handleY_rightGrippy$$ + 28, -8) + $dvt$$6$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 33, -6, $handleX_handleY_rightGrippy$$ + 36, 0);
        $dvt$$6$$.$PathUtils$.closePath();
        var $leftHandleBackground_rightBackground$$ = new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleSize_rightHandleBackground$$, "lhb"), $handleSize_rightHandleBackground$$ = new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleSize_rightHandleBackground$$, "rhb"), $cursor$$ = "row-resize";
        if (this.$_handleBackgroundImage$) {
          var $leftGrippy$$ = this.$createGrippyImage$($DvtOverviewEventManager$$, 10), $handleX_handleY_rightGrippy$$ = this.$createGrippyImage$($DvtOverviewEventManager$$, 10)
        } else {
          $leftGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$), $handleX_handleY_rightGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$);
        }
      } else {
        $handleX_handleY_rightGrippy$$ = ($DvtOverviewParser$$ - 36) / 2, $leftHandle_leftHandleCmds$$ = $dvt$$6$$.$PathUtils$.moveTo(0, $handleX_handleY_rightGrippy$$) + $dvt$$6$$.$PathUtils$.$quadTo$(6, $handleX_handleY_rightGrippy$$ + 3, 8, $handleX_handleY_rightGrippy$$ + 8) + $dvt$$6$$.$PathUtils$.lineTo(8, $handleX_handleY_rightGrippy$$ + 28) + $dvt$$6$$.$PathUtils$.$quadTo$(6, $handleX_handleY_rightGrippy$$ + 33, 0, $handleX_handleY_rightGrippy$$ + 36), $dvt$$6$$.$PathUtils$.closePath(), $rightHandle_rightHandleCmds$$ = 
        $dvt$$6$$.$PathUtils$.moveTo(0, $handleX_handleY_rightGrippy$$) + $dvt$$6$$.$PathUtils$.$quadTo$(-6, $handleX_handleY_rightGrippy$$ + 3, -8, $handleX_handleY_rightGrippy$$ + 8) + $dvt$$6$$.$PathUtils$.lineTo(-8, $handleX_handleY_rightGrippy$$ + 28) + $dvt$$6$$.$PathUtils$.$quadTo$(-6, $handleX_handleY_rightGrippy$$ + 33, 0, $handleX_handleY_rightGrippy$$ + 36), $dvt$$6$$.$PathUtils$.closePath(), $leftHandleBackground_rightBackground$$ = new $dvt$$6$$.Rect(this.$getCtx$(), 0 - $handleStart_rightBackgroundResizeHandle$$, 
        0, $handleSize_rightHandleBackground$$, $DvtOverviewParser$$, "lhb"), $handleSize_rightHandleBackground$$ = new $dvt$$6$$.Rect(this.$getCtx$(), $handleStart_rightBackgroundResizeHandle$$, 0, $handleSize_rightHandleBackground$$, $DvtOverviewParser$$, "rhb"), $cursor$$ = "col-resize", this.$_handleBackgroundImage$ ? ($leftGrippy$$ = this.$createGrippyImage$(10, $DvtOverviewParser$$), $handleX_handleY_rightGrippy$$ = this.$createGrippyImage$(10, $DvtOverviewParser$$)) : ($leftGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$), 
        $handleX_handleY_rightGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$));
      }
      $leftHandleBackground_rightBackground$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize_rightHandleBackground$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $leftHandleBackground_rightBackground$$.$setPixelHinting$();
      $handleSize_rightHandleBackground$$.$setPixelHinting$();
      $leftHandle_leftHandleCmds$$ = new $dvt$$6$$.$Path$(this.$getCtx$(), $leftHandle_leftHandleCmds$$, "lh");
      $rightHandle_rightHandleCmds$$ = new $dvt$$6$$.$Path$(this.$getCtx$(), $rightHandle_rightHandleCmds$$, "rh");
      $leftHandle_leftHandleCmds$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle_leftHandleCmds$$.$setSolidStroke$(this.$_handleFillColor$);
      $rightHandle_rightHandleCmds$$.$setSolidFill$(this.$_handleFillColor$);
      $rightHandle_rightHandleCmds$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ($leftHandle_leftHandleCmds$$.$setPixelHinting$(), $rightHandle_rightHandleCmds$$.$setPixelHinting$());
      $leftHandleBackground_rightBackground$$.setCursor($cursor$$);
      $handleSize_rightHandleBackground$$.setCursor($cursor$$);
      $leftHandle_leftHandleCmds$$.setCursor($cursor$$);
      $rightHandle_rightHandleCmds$$.setCursor($cursor$$);
      $leftGrippy$$.setCursor($cursor$$);
      $handleX_handleY_rightGrippy$$.setCursor($cursor$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftHandleBackground_rightBackground$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftHandle_leftHandleCmds$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftGrippy$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($handleSize_rightHandleBackground$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($rightHandle_rightHandleCmds$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($handleX_handleY_rightGrippy$$);
    }
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.setCursor("move");
    this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$ = $leftBackgroundResizeHandle_vertical$$ ? this.$isRTL$() ? new $dvt$$6$$.$Line$(this.$getCtx$(), this.$getTimeAxisWidth$(), 0, this.$getTimeAxisWidth$(), $DvtOverviewParser$$, "tab") : new $dvt$$6$$.$Line$(this.$getCtx$(), $DvtOverviewEventManager$$ - this.$getTimeAxisWidth$(), 0, $DvtOverviewEventManager$$ - this.$getTimeAxisWidth$(), $DvtOverviewParser$$, "tab") : this.$isOverviewAbove$() ? new $dvt$$6$$.$Line$(this.$getCtx$(), 0, this.$getTimeAxisHeight$(), 
    $DvtOverviewEventManager$$, this.$getTimeAxisHeight$(), "tab") : new $dvt$$6$$.$Line$(this.$getCtx$(), 0, $DvtOverviewParser$$ - this.$getTimeAxisHeight$(), $DvtOverviewEventManager$$, $DvtOverviewParser$$ - this.$getTimeAxisHeight$(), "tab");
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setPixelHinting$();
    this.$_timeAxisTopBar$ = $leftBackground_slidingWindow$$2_timeAxisTopBar$$;
    this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$);
    this.$isLeftAndRightFilterRendered$() && ($leftBackgroundResizeHandle_vertical$$ ? ($leftBackground_slidingWindow$$2_timeAxisTopBar$$ = new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "lbg"), $leftHandleBackground_rightBackground$$ = new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "rbg")) : ($leftBackground_slidingWindow$$2_timeAxisTopBar$$ = new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "lbg"), $leftHandleBackground_rightBackground$$ = 
    new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "rbg")), $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$), $leftHandleBackground_rightBackground$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($leftHandleBackground_rightBackground$$), $dvt$$6$$.$OverviewUtils$.$supportsTouch$() && void 0 != 
    $handleStart_rightBackgroundResizeHandle$$ && (this.$getHandleStart$(), $leftBackgroundResizeHandle_vertical$$ ? ($leftBackgroundResizeHandle_vertical$$ = new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleStart_rightBackgroundResizeHandle$$, "lbgrh"), $handleStart_rightBackgroundResizeHandle$$ = new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleStart_rightBackgroundResizeHandle$$, "rbgrh")) : ($leftBackgroundResizeHandle_vertical$$ = new $dvt$$6$$.Rect(this.$getCtx$(), 
    0, 0, $handleStart_rightBackgroundResizeHandle$$, $DvtOverviewParser$$, "lbgrh"), $handleStart_rightBackgroundResizeHandle$$ = new $dvt$$6$$.Rect(this.$getCtx$(), 0, 0, $handleStart_rightBackgroundResizeHandle$$, $DvtOverviewParser$$, "rbgrh")), $leftBackgroundResizeHandle_vertical$$.$setSolidFill$(this.$_leftFilterPanelColor$, 0), this.$addChild$($leftBackgroundResizeHandle_vertical$$), $handleStart_rightBackgroundResizeHandle$$.$setSolidFill$(this.$_rightFilterPanelColor$, 0), this.$addChild$($handleStart_rightBackgroundResizeHandle$$)));
  };
  $dvt$$6$$.$Overview$.prototype.$createGrippyImage$ = function $$dvt$$6$$$$Overview$$$$createGrippyImage$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $grippy$$ = new $dvt$$6$$.Image(this.$getCtx$(), this.$_handleBackgroundImage$, ($DvtOverviewEventManager$$ - this.$_handleWidth$) / 2, ($DvtOverviewParser$$ - this.$_handleHeight$) / 2, this.$_handleWidth$, this.$_handleHeight$, "grpy");
    $grippy$$.$setMouseEnabled$(!1);
    return $grippy$$;
  };
  $dvt$$6$$.$Overview$.prototype.$createGrippy$ = function $$dvt$$6$$$$Overview$$$$createGrippy$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = new $dvt$$6$$.$Container$(this.$getCtx$(), "grpy"), $color$$57$$ = this.$_handleTextureColor$;
    if (this.$isVertical$()) {
      var $startx$$1$$ = 8 + $DvtOverviewEventManager$$;
      $DvtOverviewEventManager$$ = 3;
      for (var $i$$540$$ = 0;9 > $i$$540$$;$i$$540$$++) {
        var $dot$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $startx$$1$$ + 2 * $i$$540$$, $DvtOverviewEventManager$$, $startx$$1$$ + 2 * $i$$540$$ + 1, $DvtOverviewEventManager$$, "dot1" + $i$$540$$);
        $dot$$.$setSolidStroke$($color$$57$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ += 2;
        $dot$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $startx$$1$$ + 1 + 2 * $i$$540$$, $DvtOverviewEventManager$$, $startx$$1$$ + 1 + 2 * $i$$540$$ + 1, $DvtOverviewEventManager$$, "dot2" + $i$$540$$);
        $dot$$.$setSolidStroke$($color$$57$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ += 2;
        $dot$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $startx$$1$$ + 2 * $i$$540$$, $DvtOverviewEventManager$$, $startx$$1$$ + 2 * $i$$540$$ + 1, $DvtOverviewEventManager$$, "dot3" + $i$$540$$);
        $dot$$.$setSolidStroke$($color$$57$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ = 3;
      }
      $dot$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $startx$$1$$ + 18, $DvtOverviewEventManager$$, $startx$$1$$ + 18 + 1, $DvtOverviewEventManager$$, "dot4");
      $dot$$.$setSolidStroke$($color$$57$$);
      $DvtOverviewParser$$.$addChild$($dot$$);
      $DvtOverviewEventManager$$ += 4;
      $dot$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $startx$$1$$ + 18, $DvtOverviewEventManager$$, $startx$$1$$ + 18 + 1, $DvtOverviewEventManager$$, "dot5");
    } else {
      $startx$$1$$ = 3;
      $DvtOverviewEventManager$$ = 8 + $DvtOverviewEventManager$$;
      for ($i$$540$$ = 0;9 > $i$$540$$;$i$$540$$++) {
        $dot$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$540$$, $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$540$$ + 1, "dot1" + $i$$540$$), $dot$$.$setSolidStroke$($color$$57$$), $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 1 + 2 * $i$$540$$, $startx$$1$$, $DvtOverviewEventManager$$ + 1 + 2 * $i$$540$$ + 1, "dot2" + $i$$540$$), $dot$$.$setSolidStroke$($color$$57$$), 
        $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$540$$, $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$540$$ + 1, "dot3" + $i$$540$$), $dot$$.$setSolidStroke$($color$$57$$), $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ = 3;
      }
      $dot$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 18, $startx$$1$$, $DvtOverviewEventManager$$ + 18 + 1, "dot4");
      $dot$$.$setSolidStroke$($color$$57$$);
      $DvtOverviewParser$$.$addChild$($dot$$);
      $startx$$1$$ += 4;
      $dot$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 18, $startx$$1$$, $DvtOverviewEventManager$$ + 18 + 1, "dot5");
    }
    $dot$$.$setSolidStroke$($color$$57$$);
    $DvtOverviewParser$$.$addChild$($dot$$);
    $DvtOverviewParser$$.$setPixelHinting$();
    return $DvtOverviewParser$$;
  };
  $dvt$$6$$.$Overview$.prototype.$updateSlidingWindow$ = function $$dvt$$6$$$$Overview$$$$updateSlidingWindow$$() {
    var $DvtOverviewEventManager$$ = this.$isVertical$(), $DvtOverviewParser$$ = this.$getSlidingWindow$(), $size$$29$$ = this.$getOverviewSize$(), $actualSize$$1_newWidth$$3_rangeEndPos$$ = $DvtOverviewEventManager$$ ? this.$Height$ : this.$Width$, $rangeEndTime_timelineWidth$$ = this.$_width$, $start$$38$$ = this.$_start$, $end$$20$$ = this.$_end$, $DvtOverviewEventManager$$ = this.$_renderStart$, $rangeStartPos_rangeStartTime$$ = $dvt$$6$$.$OverviewUtils$.$getPositionDate$($start$$38$$, $end$$20$$, 
    0, $rangeEndTime_timelineWidth$$), $rangeEndTime_timelineWidth$$ = $dvt$$6$$.$OverviewUtils$.$getPositionDate$($start$$38$$, $end$$20$$, $actualSize$$1_newWidth$$3_rangeEndPos$$, $rangeEndTime_timelineWidth$$), $rangeStartPos_rangeStartTime$$ = this.$getDatePosition$($rangeStartPos_rangeStartTime$$), $actualSize$$1_newWidth$$3_rangeEndPos$$ = Math.min($actualSize$$1_newWidth$$3_rangeEndPos$$, this.$getDatePosition$($rangeEndTime_timelineWidth$$)), $DvtOverviewEventManager$$ = this.$getDatePosition$($DvtOverviewEventManager$$), 
    $actualSize$$1_newWidth$$3_rangeEndPos$$ = $actualSize$$1_newWidth$$3_rangeEndPos$$ - $rangeStartPos_rangeStartTime$$;
    this.$isHorizontalRTL$() ? this.$setSlidingWindowPos$($DvtOverviewParser$$, $size$$29$$ - $DvtOverviewEventManager$$ - $actualSize$$1_newWidth$$3_rangeEndPos$$) : this.$setSlidingWindowPos$($DvtOverviewParser$$, $DvtOverviewEventManager$$);
    this.$setSlidingWindowSize$($DvtOverviewParser$$, $actualSize$$1_newWidth$$3_rangeEndPos$$);
    this.$ScrollTimeAxis$();
    this.$_increment$ = this.$calculateIncrement$($size$$29$$);
  };
  $dvt$$6$$.$Overview$.prototype.$createBorderAroundSlidingWindow$ = function $$dvt$$6$$$$Overview$$$$createBorderAroundSlidingWindow$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $right$$12_slidingWindow$$3$$ = this.$getSlidingWindow$(), $halfBorderWidth_leftHandle$$1$$ = $dvt$$6$$.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ / 2;
    if (this.$isVertical$()) {
      var $top$$9_topBar$$ = $right$$12_slidingWindow$$3$$.$getY$(), $topCenter$$ = $top$$9_topBar$$ + $halfBorderWidth_leftHandle$$1$$, $bottom$$9$$ = $top$$9_topBar$$ + $right$$12_slidingWindow$$3$$.getHeight(), $bottomBar_bottomCenter$$ = $bottom$$9$$ - $halfBorderWidth_leftHandle$$1$$, $left$$12$$ = 0, $leftCenter$$ = $halfBorderWidth_leftHandle$$1$$, $rightCenter$$ = $DvtOverviewEventManager$$ - $halfBorderWidth_leftHandle$$1$$, $halfBorderWidth_leftHandle$$1$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), 
      $left$$12$$, $topCenter$$, $DvtOverviewEventManager$$, $topCenter$$, "lh"), $rightHandle$$1$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $left$$12$$, $bottomBar_bottomCenter$$, $DvtOverviewEventManager$$, $bottomBar_bottomCenter$$, "rh"), $leftTopBar$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $leftCenter$$, 0, $leftCenter$$, $top$$9_topBar$$, "ltb"), $rightTopBar$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $leftCenter$$, $bottom$$9$$, $leftCenter$$, $DvtOverviewParser$$, "rtb"), $bottomBar_bottomCenter$$ = 
      new $dvt$$6$$.$Line$(this.$getCtx$(), $rightCenter$$, $top$$9_topBar$$, $rightCenter$$, $bottom$$9$$, "bb"), $top$$9_topBar$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $leftCenter$$, $top$$9_topBar$$, $leftCenter$$, $bottom$$9$$, "tb")
    } else {
      $top$$9_topBar$$ = 0, $topCenter$$ = $top$$9_topBar$$ + $halfBorderWidth_leftHandle$$1$$, $bottom$$9$$ = $DvtOverviewParser$$, $bottomBar_bottomCenter$$ = $bottom$$9$$ - $halfBorderWidth_leftHandle$$1$$, $left$$12$$ = $right$$12_slidingWindow$$3$$.$getX$(), $leftCenter$$ = $left$$12$$ + $halfBorderWidth_leftHandle$$1$$, $right$$12_slidingWindow$$3$$ = $left$$12$$ + $right$$12_slidingWindow$$3$$.getWidth(), $rightCenter$$ = $right$$12_slidingWindow$$3$$ - $halfBorderWidth_leftHandle$$1$$, $halfBorderWidth_leftHandle$$1$$ = 
      new $dvt$$6$$.$Line$(this.$getCtx$(), $leftCenter$$, $top$$9_topBar$$, $leftCenter$$, $bottom$$9$$, "lh"), $rightHandle$$1$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $rightCenter$$, $top$$9_topBar$$, $rightCenter$$, $bottom$$9$$, "rh"), $leftTopBar$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), 0, $topCenter$$, $left$$12$$ + 1, $topCenter$$, "ltb"), $rightTopBar$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $right$$12_slidingWindow$$3$$ - 1, $topCenter$$, $DvtOverviewEventManager$$, $topCenter$$, "rtb"), 
      $bottomBar_bottomCenter$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $left$$12$$, $bottomBar_bottomCenter$$, $right$$12_slidingWindow$$3$$, $bottomBar_bottomCenter$$, "bb"), $top$$9_topBar$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $left$$12$$, $topCenter$$, $right$$12_slidingWindow$$3$$, $topCenter$$, "tb");
    }
    $halfBorderWidth_leftHandle$$1$$.$setPixelHinting$();
    $rightHandle$$1$$.$setPixelHinting$();
    $leftTopBar$$.$setPixelHinting$();
    $rightTopBar$$.$setPixelHinting$();
    $bottomBar_bottomCenter$$.$setPixelHinting$();
    $top$$9_topBar$$.$setPixelHinting$();
    "none" != this.$_windowBorderLeftStyle$ && $halfBorderWidth_leftHandle$$1$$.$setSolidStroke$(this.$_windowBorderLeftColor$);
    this.$addChild$($halfBorderWidth_leftHandle$$1$$);
    "none" != this.$_windowBorderRightStyle$ && $rightHandle$$1$$.$setSolidStroke$(this.$_windowBorderRightColor$);
    this.$addChild$($rightHandle$$1$$);
    "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($leftTopBar$$.$setSolidStroke$(this.$_borderTopColor$), $rightTopBar$$.$setSolidStroke$(this.$_borderTopColor$));
    this.$addChild$($leftTopBar$$);
    this.$addChild$($rightTopBar$$);
    "none" != this.$_windowBorderBottomStyle$ && $bottomBar_bottomCenter$$.$setSolidStroke$(this.$_windowBorderBottomColor$);
    this.$addChild$($bottomBar_bottomCenter$$);
    "none" != this.$_windowBorderTopStyle$ && $top$$9_topBar$$.$setSolidStroke$(this.$_windowBorderTopColor$);
    this.$addChild$($top$$9_topBar$$);
  };
  $dvt$$6$$.$Overview$.prototype.$createResizeArrow$ = function $$dvt$$6$$$$Overview$$$$createResizeArrow$$() {
    var $DvtOverviewEventManager$$ = this.$isVertical$() ? $dvt$$6$$.$PathUtils$.moveTo(6, 0) + $dvt$$6$$.$PathUtils$.lineTo(0, 5) + $dvt$$6$$.$PathUtils$.lineTo(5, 5) + $dvt$$6$$.$PathUtils$.lineTo(5, 17) + $dvt$$6$$.$PathUtils$.lineTo(0, 17) + $dvt$$6$$.$PathUtils$.lineTo(6, 22) + $dvt$$6$$.$PathUtils$.lineTo(12, 17) + $dvt$$6$$.$PathUtils$.lineTo(7, 17) + $dvt$$6$$.$PathUtils$.lineTo(7, 5) + $dvt$$6$$.$PathUtils$.lineTo(12, 5) + $dvt$$6$$.$PathUtils$.closePath() : $dvt$$6$$.$PathUtils$.moveTo(5, 
    0) + $dvt$$6$$.$PathUtils$.lineTo(0, 6) + $dvt$$6$$.$PathUtils$.lineTo(5, 12) + $dvt$$6$$.$PathUtils$.lineTo(5, 7) + $dvt$$6$$.$PathUtils$.lineTo(17, 7) + $dvt$$6$$.$PathUtils$.lineTo(17, 12) + $dvt$$6$$.$PathUtils$.lineTo(22, 6) + $dvt$$6$$.$PathUtils$.lineTo(17, 0) + $dvt$$6$$.$PathUtils$.lineTo(17, 4) + $dvt$$6$$.$PathUtils$.lineTo(5, 4) + $dvt$$6$$.$PathUtils$.lineTo(5, 0) + $dvt$$6$$.$PathUtils$.closePath(), $DvtOverviewEventManager$$ = new $dvt$$6$$.$Path$(this.$getCtx$(), $DvtOverviewEventManager$$, 
    "arr");
    $DvtOverviewEventManager$$.$setSolidFill$("#ffffff");
    $DvtOverviewEventManager$$.$setSolidStroke$("#000000");
    $DvtOverviewEventManager$$.$setVisible$(!1);
    this.$addChild$($DvtOverviewEventManager$$);
    return $DvtOverviewEventManager$$;
  };
  $dvt$$6$$.$Overview$.prototype.$getRectSize$ = function $$dvt$$6$$$$Overview$$$$getRectSize$$($dvt$$6$$) {
    return this.$isVertical$() ? $dvt$$6$$.getHeight() : $dvt$$6$$.getWidth();
  };
  $dvt$$6$$.$Overview$.prototype.$setRectSize$ = function $$dvt$$6$$$$Overview$$$$setRectSize$$($dvt$$6$$, $DvtOverviewEventManager$$) {
    this.$isVertical$() ? $dvt$$6$$.$setHeight$($DvtOverviewEventManager$$) : $dvt$$6$$.$setWidth$($DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$Overview$.prototype.$getSlidingWindowPos$ = function $$dvt$$6$$$$Overview$$$$getSlidingWindowPos$$($dvt$$6$$) {
    return this.$isVertical$() ? $dvt$$6$$.$getTranslateY$() : $dvt$$6$$.$getTranslateX$();
  };
  $dvt$$6$$.$Overview$.prototype.$setSlidingWindowPos$ = function $$dvt$$6$$$$Overview$$$$setSlidingWindowPos$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    $DvtOverviewParser$$ = Math.max(0, $DvtOverviewParser$$);
    this.$isVertical$() ? $DvtOverviewEventManager$$.$setTranslateY$($DvtOverviewParser$$) : $DvtOverviewEventManager$$.$setTranslateX$($DvtOverviewParser$$);
    if (this.$isLeftAndRightFilterRendered$()) {
      this.$getLeftBackground$().$setWidth$($DvtOverviewParser$$);
      var $rightStart$$ = $DvtOverviewParser$$ + this.$getSlidingWindowSize$($DvtOverviewEventManager$$), $handleStart$$1_rightBackground$$1$$ = this.$getRightBackground$();
      $handleStart$$1_rightBackground$$1$$.$setX$($rightStart$$);
      $handleStart$$1_rightBackground$$1$$.$setWidth$(Math.max(0, this.$Width$ - $rightStart$$));
      $dvt$$6$$.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && ($handleStart$$1_rightBackground$$1$$ = this.$getHandleStart$(), this.$getLeftBackgroundHandle$().$setX$($DvtOverviewParser$$ - $handleStart$$1_rightBackground$$1$$), this.$getRightBackgroundHandle$().$setX$($rightStart$$));
    }
  };
  $dvt$$6$$.$Overview$.prototype.$getSlidingWindowSize$ = function $$dvt$$6$$$$Overview$$$$getSlidingWindowSize$$($dvt$$6$$) {
    return this.$getRectSize$($dvt$$6$$);
  };
  $dvt$$6$$.$Overview$.prototype.$setSlidingWindowSize$ = function $$dvt$$6$$$$Overview$$$$setSlidingWindowSize$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    $DvtOverviewParser$$ = Math.max(this.$getMinimumWindowSize$(), $DvtOverviewParser$$);
    $DvtOverviewParser$$ = Math.min(this.$isVertical$() ? this.$Height$ : this.$Width$, $DvtOverviewParser$$);
    this.$setRectSize$($DvtOverviewEventManager$$, $DvtOverviewParser$$);
    if (this.$isLeftAndRightFilterRendered$()) {
      var $rightHandleBackground$$1_rightStart$$1$$ = this.$getSlidingWindowPos$($DvtOverviewEventManager$$) + $DvtOverviewParser$$, $rightBackground$$2_rightHandle$$2$$ = this.$getRightBackground$();
      $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1$$);
      $rightBackground$$2_rightHandle$$2$$.$setWidth$(Math.max(0, this.$Width$ - $rightHandleBackground$$1_rightStart$$1$$));
      $dvt$$6$$.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && this.$getRightBackgroundHandle$().$setX$($rightHandleBackground$$1_rightStart$$1$$);
    }
    if (!this.$isFeatureOff$()) {
      var $rightHandleBackground$$1_rightStart$$1$$ = $DvtOverviewEventManager$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $DvtOverviewEventManager$$.$getChildAt$(4), $rightGrippy$$1$$ = $DvtOverviewEventManager$$.$getChildAt$(5);
      this.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($DvtOverviewParser$$), $rightHandleBackground$$1_rightStart$$1$$.$setTranslateY$($DvtOverviewParser$$ - this.$getHandleSize$()), $rightGrippy$$1$$.$setTranslateY$($DvtOverviewParser$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($DvtOverviewParser$$), $rightHandleBackground$$1_rightStart$$1$$.$setTranslateX$($DvtOverviewParser$$ - this.$getHandleSize$()), $rightGrippy$$1$$.$setTranslateX$($DvtOverviewParser$$ - 
      10));
    }
  };
  $dvt$$6$$.$Overview$.prototype.$calculateIncrement$ = function $$dvt$$6$$$$Overview$$$$calculateIncrement$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$_width$, $start$$39$$ = this.$_start$, $end$$21$$ = this.$_end$, $day1_pos1$$1$$ = $dvt$$6$$.$OverviewUtils$.$getPositionDate$($start$$39$$, $end$$21$$, 1, $DvtOverviewEventManager$$);
    $DvtOverviewEventManager$$ = $dvt$$6$$.$OverviewUtils$.$getPositionDate$($start$$39$$, $end$$21$$, 2, $DvtOverviewEventManager$$);
    $day1_pos1$$1$$ = $dvt$$6$$.$OverviewUtils$.$getDatePosition$($start$$39$$, $end$$21$$, $day1_pos1$$1$$, $DvtOverviewParser$$);
    return $dvt$$6$$.$OverviewUtils$.$getDatePosition$($start$$39$$, $end$$21$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) - $day1_pos1$$1$$;
  };
  $dvt$$6$$.$Overview$.prototype.$updateTimeAxis$ = function $$dvt$$6$$$$Overview$$$$updateTimeAxis$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if (null != this.$_ticks$) {
      for (var $vertical$$2$$ = this.$isVertical$(), $size$$32$$ = this.$getOverviewSize$(), $i$$541$$ = 0;$i$$541$$ < this.$_ticks$.length;$i$$541$$++) {
        var $child$$59_label$$68$$ = this.$_ticks$[$i$$541$$], $time_pos$$ = this.$getDatePosition$(parseInt($child$$59_label$$68$$.time, 10)), $child$$59_label$$68$$ = $child$$59_label$$68$$.label, $maxWidth$$15$$ = 0, $maxWidth$$15$$ = $i$$541$$ + 1 < this.$_ticks$.length ? this.$getDatePosition$(parseInt(this.$_ticks$[$i$$541$$ + 1].time, 10)) - $time_pos$$ : $size$$32$$ - $time_pos$$;
        this.$isHorizontalRTL$() && ($time_pos$$ = $size$$32$$ - $time_pos$$);
        $vertical$$2$$ && ($maxWidth$$15$$ = this.$Width$);
        $maxWidth$$15$$ -= 2 * $dvt$$6$$.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$;
        this.$addTick$($time_pos$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, "tick" + $i$$541$$);
        this.$addLabel$($time_pos$$, $child$$59_label$$68$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $maxWidth$$15$$, "label" + $i$$541$$);
      }
    }
  };
  $dvt$$6$$.$Overview$.prototype.$addTick$ = function $$dvt$$6$$$$Overview$$$$addTick$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$83$$, $id$$144$$) {
    $DvtOverviewEventManager$$ = this.$isVertical$() ? new $dvt$$6$$.$Line$(this.$getCtx$(), 0, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $DvtOverviewEventManager$$, $id$$144$$) : new $dvt$$6$$.$Line$(this.$getCtx$(), $DvtOverviewEventManager$$, 0, $DvtOverviewEventManager$$, $height$$83$$, $id$$144$$);
    $DvtOverviewParser$$ = new $dvt$$6$$.$SolidStroke$(this.$_timeIndicatorColor$);
    $DvtOverviewParser$$.$setStyle$($dvt$$6$$.$Stroke$.$DASHED$, 3);
    $DvtOverviewEventManager$$.$setStroke$($DvtOverviewParser$$);
    $DvtOverviewEventManager$$.$setPixelHinting$();
    this.$addChild$($DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$Overview$.prototype.$addLabel$ = function $$dvt$$6$$$$Overview$$$$addLabel$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $padding$$23_width$$97$$, $height$$84_y$$152$$, $maxWidth$$16$$, $id$$145$$, $dim$$53_labelStyle$$19$$) {
    $dim$$53_labelStyle$$19$$ = $dim$$53_labelStyle$$19$$ || new $dvt$$6$$.$CSSStyle$("font-weight:bold");
    this.$isVertical$() ? ($DvtOverviewParser$$ = new $dvt$$6$$.$OutputText$(this.$getCtx$(), $DvtOverviewParser$$, 4, $DvtOverviewEventManager$$, $id$$145$$), $DvtOverviewParser$$.$setCSSStyle$($dim$$53_labelStyle$$19$$), this.$isRTL$() && (this.$addChild$($DvtOverviewParser$$), $dim$$53_labelStyle$$19$$ = $DvtOverviewParser$$.$getDimensions$(), this.removeChild($DvtOverviewParser$$), $DvtOverviewParser$$.$setX$(Math.max(4, this.$Width$ - $dim$$53_labelStyle$$19$$.$w$ - 4)))) : ($height$$84_y$$152$$ = 
    this.$isOverviewAbove$() ? 2 : $height$$84_y$$152$$ - this.$getTimeAxisHeight$() + 2, $padding$$23_width$$97$$ = $dvt$$6$$.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$, $DvtOverviewParser$$ = new $dvt$$6$$.$OutputText$(this.$getCtx$(), $DvtOverviewParser$$, $DvtOverviewEventManager$$ + $padding$$23_width$$97$$, $height$$84_y$$152$$, $id$$145$$), $DvtOverviewParser$$.$setCSSStyle$($dim$$53_labelStyle$$19$$), this.$isHorizontalRTL$() && (this.$addChild$($DvtOverviewParser$$), $dim$$53_labelStyle$$19$$ = 
    $DvtOverviewParser$$.$getDimensions$(), this.removeChild($DvtOverviewParser$$), $DvtOverviewParser$$.$setX$($DvtOverviewEventManager$$ - Math.min($dim$$53_labelStyle$$19$$.$w$, $maxWidth$$16$$) - $padding$$23_width$$97$$)));
    $dvt$$6$$.$TextUtils$.$fitText$($DvtOverviewParser$$, $maxWidth$$16$$, Infinity, this);
    $DvtOverviewParser$$.$_rawText$ = $DvtOverviewParser$$.$getUntruncatedTextString$();
  };
  $dvt$$6$$.$Overview$.prototype.$updateCurrentTime$ = function $$dvt$$6$$$$Overview$$$$updateCurrentTime$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if (null != this.$_currentTime$ && !isNaN(this.$_currentTime$)) {
      var $line$$15_time_pos$$1$$ = this.$getDatePosition$(this.$_currentTime$);
      this.$isVertical$() ? $line$$15_time_pos$$1$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), 0, $line$$15_time_pos$$1$$, $DvtOverviewEventManager$$, $line$$15_time_pos$$1$$, "ocd") : (this.$isRTL$() && ($line$$15_time_pos$$1$$ = $DvtOverviewEventManager$$ - $line$$15_time_pos$$1$$), $line$$15_time_pos$$1$$ = new $dvt$$6$$.$Line$(this.$getCtx$(), $line$$15_time_pos$$1$$, 0, $line$$15_time_pos$$1$$, $DvtOverviewParser$$, "ocd"));
      $line$$15_time_pos$$1$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$);
      $line$$15_time_pos$$1$$.$setPixelHinting$();
      this.$addChild$($line$$15_time_pos$$1$$);
    }
  };
  $dvt$$6$$.$Overview$.prototype.$parseFilledTimeRanges$ = function $$dvt$$6$$$$Overview$$$$parseFilledTimeRanges$$($dvt$$6$$, $DvtOverviewEventManager$$) {
    if (null != this.$_formattedTimeRanges$) {
      for (var $DvtOverviewParser$$ = 0;$DvtOverviewParser$$ < this.$_formattedTimeRanges$.length;$DvtOverviewParser$$++) {
        this.$addFilledTimeRange$(this.$_formattedTimeRanges$[$DvtOverviewParser$$], $dvt$$6$$, $DvtOverviewEventManager$$);
      }
    }
  };
  $dvt$$6$$.$Overview$.prototype.$addFilledTimeRange$ = function $$dvt$$6$$$$Overview$$$$addFilledTimeRange$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$87$$) {
    var $rangeStart_rangeStart_pos$$ = parseInt($DvtOverviewEventManager$$.rs, 10), $rangeEnd_rangeWidth$$1$$ = parseInt($DvtOverviewEventManager$$.re, 10);
    $DvtOverviewEventManager$$ = $DvtOverviewEventManager$$.c;
    if (null != $rangeStart_rangeStart_pos$$ && null != $rangeEnd_rangeWidth$$1$$) {
      var $size$$33$$ = this.$getOverviewSize$(), $rangeStart_rangeStart_pos$$ = this.$getDatePosition$($rangeStart_rangeStart_pos$$), $rangeEnd_rangeWidth$$1$$ = this.$getDatePosition$($rangeEnd_rangeWidth$$1$$) - $rangeStart_rangeStart_pos$$;
      this.$isHorizontalRTL$() && ($rangeStart_rangeStart_pos$$ = $size$$33$$ - $rangeStart_rangeStart_pos$$ - $rangeEnd_rangeWidth$$1$$);
      $DvtOverviewParser$$ = this.$isVertical$() ? new $dvt$$6$$.Rect(this.$getCtx$(), 0, $rangeStart_rangeStart_pos$$, $DvtOverviewParser$$ - this.$getTimeAxisWidth$(), $rangeEnd_rangeWidth$$1$$, "ftr") : new $dvt$$6$$.Rect(this.$getCtx$(), $rangeStart_rangeStart_pos$$, this.$isOverviewAbove$() ? this.$getTimeAxisHeight$() : 0, $rangeEnd_rangeWidth$$1$$, $height$$87$$ - this.$getTimeAxisHeight$(), "ftr");
      null != $DvtOverviewEventManager$$ && $DvtOverviewParser$$.$setSolidFill$($DvtOverviewEventManager$$, .4);
      $DvtOverviewParser$$.setCursor("move");
      $DvtOverviewParser$$.$setPixelHinting$();
      this.$addChild$($DvtOverviewParser$$);
    }
  };
  $dvt$$6$$.$Overview$.prototype.$parseDataXML$ = function $$dvt$$6$$$$Overview$$$$parseDataXML$$() {
  };
  $dvt$$6$$.$Overview$.prototype.$animateSlidingWindow$ = function $$dvt$$6$$$$Overview$$$$animateSlidingWindow$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$getSlidingWindow$();
    $DvtOverviewParser$$.$getChildAt$(3);
    $DvtOverviewParser$$.$getChildAt$(4);
    $DvtOverviewParser$$.$getChildAt$(5);
    if ($DvtOverviewEventManager$$ != this.$getSlidingWindowPos$($DvtOverviewParser$$)) {
      var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = this.$getLeftHandle$(), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = this.$getRightHandle$(), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = this.$getLeftTopBar$(), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = this.$getRightTopBar$(), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = this.$getBottomBar$(), $rightBackgroundHandleSetter_topBar$$1$$ = 
      this.$getTopBar$();
      if (this.$isVertical$()) {
        var $posGetter$$ = $DvtOverviewParser$$.$getTranslateY$, $posSetter$$ = $DvtOverviewParser$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, 
        $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, 
        $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY1$, $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY1$, $bottomBarPos2Getter$$ = 
        $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
      } else {
        $posGetter$$ = $DvtOverviewParser$$.$getTranslateX$, $posSetter$$ = $DvtOverviewParser$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, 
        $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, 
        $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX1$, $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX1$, $bottomBarPos2Getter$$ = 
        $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX2$;
      }
      var $animator$$107_minPos$$ = this.$_leftMargin$, $maxPos$$ = this.$getMaximumPosition$(), $rightStart$$2_slidingWindowSize$$ = this.$getSlidingWindowSize$($DvtOverviewParser$$);
      $DvtOverviewEventManager$$ = Math.max($animator$$107_minPos$$, Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $DvtOverviewEventManager$$));
      $animator$$107_minPos$$ = this.$isAnimationOnClick$() ? new $dvt$$6$$.$Animator$(this.$getCtx$(), .5, 0, $dvt$$6$$.$Easing$.$linear$) : null;
      this.$animateProperty$($animator$$107_minPos$$, $DvtOverviewParser$$, $posGetter$$, $posSetter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$107_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$107_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$107_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$107_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$107_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $DvtOverviewEventManager$$ + 1);
      this.$animateProperty$($animator$$107_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$ - 1);
      this.$animateProperty$($animator$$107_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$107_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$107_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$107_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$isLeftAndRightFilterRendered$() && ($DvtOverviewParser$$ = this.$getLeftBackground$(), this.$animateProperty$($animator$$107_minPos$$, $DvtOverviewParser$$, $DvtOverviewParser$$.getWidth, $DvtOverviewParser$$.$setWidth$, $DvtOverviewEventManager$$), $rightStart$$2_slidingWindowSize$$ = $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$, $DvtOverviewParser$$ = this.$getRightBackground$(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $DvtOverviewParser$$.getWidth, 
      $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $DvtOverviewParser$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $DvtOverviewParser$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $DvtOverviewParser$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = this.$isVertical$() ? this.$Height$ : this.$Width$, this.$animateProperty$($animator$$107_minPos$$, $DvtOverviewParser$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, 
      $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ - $rightStart$$2_slidingWindowSize$$), this.$animateProperty$($animator$$107_minPos$$, $DvtOverviewParser$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), $dvt$$6$$.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && ($DvtOverviewParser$$ = 
      this.$getHandleStart$(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = this.$getLeftBackgroundHandle$(), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = this.$getRightBackgroundHandle$(), 
      $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, this.$animateProperty$($animator$$107_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, 
      $DvtOverviewEventManager$$ - $DvtOverviewParser$$), this.$animateProperty$($animator$$107_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
      null != $animator$$107_minPos$$ && $animator$$107_minPos$$.play();
    }
  };
  $dvt$$6$$.$Overview$.prototype.$animateProperty$ = function $$dvt$$6$$$$Overview$$$$animateProperty$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $getter$$, $setter$$, $value$$186$$) {
    null != $DvtOverviewEventManager$$ ? $DvtOverviewEventManager$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtOverviewParser$$, $getter$$, $setter$$, $value$$186$$) : $setter$$.call($DvtOverviewParser$$, $value$$186$$);
  };
  $dvt$$6$$.$Overview$.prototype.$HandleShapeMouseOver$ = function $$dvt$$6$$$$Overview$$$$HandleShapeMouseOver$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if ($DvtOverviewParser$$ && "bg" != $DvtOverviewParser$$.getId() && "ocd" != $DvtOverviewParser$$.getId()) {
      if ("label" == $DvtOverviewParser$$.getId().substr(0, 5) && ($DvtOverviewParser$$ instanceof $dvt$$6$$.$OutputText$ || $DvtOverviewParser$$ instanceof $dvt$$6$$.$BackgroundOutputText$)) {
        $DvtOverviewParser$$.$isTruncated$() && this.$getCtx$().$getTooltipManager$().$showDatatip$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY, $DvtOverviewParser$$.$_rawText$, "#000000");
      } else {
        if (null != this.$_resizeArrow$ && this.$isHandle$($DvtOverviewParser$$) && ($DvtOverviewEventManager$$ = this.$getCtx$().$pageToStageCoords$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY), $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$), this.$isVertical$() ? this.$_resizeArrow$.$setTranslate$($DvtOverviewEventManager$$.x + 6, $DvtOverviewEventManager$$.y - 10) : this.$_resizeArrow$.$setTranslate$($DvtOverviewEventManager$$.x - 6, $DvtOverviewEventManager$$.y - 
        20), this.$_resizeArrow$.$setVisible$(!0)), "window" == $DvtOverviewParser$$.getId() || "ftr" == $DvtOverviewParser$$.getId() || "arr" == $DvtOverviewParser$$.getId() || this.$isHandle$($DvtOverviewParser$$)) {
          this.$isFlashEnvironment$() && this.setCursor("move");
        } else {
          return $DvtOverviewParser$$;
        }
      }
    }
  };
  $dvt$$6$$.$Overview$.prototype.$HandleShapeMouseOut$ = function $$dvt$$6$$$$Overview$$$$HandleShapeMouseOut$$($dvt$$6$$) {
    null == this.$_moveDrawable$ && this.setCursor("default");
    $dvt$$6$$ = this.$_findDrawable$($dvt$$6$$);
    if (null != $dvt$$6$$) {
      return this.$isHandle$($dvt$$6$$) && null != this.$_resizeArrow$ && this.$_resizeArrow$.$setVisible$(!1), $dvt$$6$$;
    }
  };
  $dvt$$6$$.$Overview$.prototype.$HandleShapeClick$ = function $$dvt$$6$$$$Overview$$$$HandleShapeClick$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $evt$$47_pageY$$3_pos$$58$$) {
    $DvtOverviewEventManager$$.stopPropagation();
    var $drawable$$4_newStartTime_size$$34$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if ($drawable$$4_newStartTime_size$$34$$ && "window" != $drawable$$4_newStartTime_size$$34$$.getId() && !this.$isHandle$($drawable$$4_newStartTime_size$$34$$)) {
      if ("bg" == $drawable$$4_newStartTime_size$$34$$.getId() || "label" == $drawable$$4_newStartTime_size$$34$$.getId().substr(0, 5) || "ocd" == $drawable$$4_newStartTime_size$$34$$.getId() || "lbg" == $drawable$$4_newStartTime_size$$34$$.getId() || "rbg" == $drawable$$4_newStartTime_size$$34$$.getId()) {
        void 0 == $DvtOverviewParser$$ && ($DvtOverviewParser$$ = $DvtOverviewEventManager$$.pageX);
        void 0 == $evt$$47_pageY$$3_pos$$58$$ && ($evt$$47_pageY$$3_pos$$58$$ = $DvtOverviewEventManager$$.pageY);
        $DvtOverviewEventManager$$ = this.$getCtx$().$pageToStageCoords$($DvtOverviewParser$$, $evt$$47_pageY$$3_pos$$58$$);
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        this.$isVertical$() ? ($evt$$47_pageY$$3_pos$$58$$ = $DvtOverviewEventManager$$.y, $drawable$$4_newStartTime_size$$34$$ = this.$Height$) : ($evt$$47_pageY$$3_pos$$58$$ = $DvtOverviewEventManager$$.x, $drawable$$4_newStartTime_size$$34$$ = this.$Width$);
        $DvtOverviewEventManager$$ = this.$getSlidingWindow$();
        $DvtOverviewParser$$ = $evt$$47_pageY$$3_pos$$58$$ - this.$getRectSize$($DvtOverviewEventManager$$) / 2;
        this.$animateSlidingWindow$($DvtOverviewParser$$);
        this.$isHorizontalRTL$() && ($evt$$47_pageY$$3_pos$$58$$ = this.$Width$ - $evt$$47_pageY$$3_pos$$58$$);
        var $time$$7$$ = this.$getPositionDate$($evt$$47_pageY$$3_pos$$58$$);
        $evt$$47_pageY$$3_pos$$58$$ = new $dvt$$6$$.$OverviewEvent$($dvt$$6$$.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$);
        $evt$$47_pageY$$3_pos$$58$$.setTime($time$$7$$);
        $DvtOverviewParser$$ = Math.max(0, Math.min($DvtOverviewParser$$, $drawable$$4_newStartTime_size$$34$$ - this.$getRectSize$($DvtOverviewEventManager$$)));
        this.$isHorizontalRTL$() ? ($drawable$$4_newStartTime_size$$34$$ = this.$getPositionDate$(this.$Width$ - ($DvtOverviewParser$$ + this.$getRectSize$($DvtOverviewEventManager$$))), $DvtOverviewEventManager$$ = this.$getPositionDate$(this.$Width$ - $DvtOverviewParser$$)) : ($drawable$$4_newStartTime_size$$34$$ = this.$getPositionDate$($DvtOverviewParser$$), $DvtOverviewEventManager$$ = this.$getPositionDate$($DvtOverviewParser$$ + this.$getRectSize$($DvtOverviewEventManager$$)));
        $evt$$47_pageY$$3_pos$$58$$.$setNewStartTime$($drawable$$4_newStartTime_size$$34$$);
        $evt$$47_pageY$$3_pos$$58$$.$setNewEndTime$($DvtOverviewEventManager$$);
        this.dispatchEvent($evt$$47_pageY$$3_pos$$58$$);
      } else {
        return $drawable$$4_newStartTime_size$$34$$;
      }
    }
  };
  $dvt$$6$$.$Overview$.prototype.$beginDragPan$ = function $$dvt$$6$$$$Overview$$$$beginDragPan$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $compY_drawableId$$) {
    $DvtOverviewEventManager$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if (null != $DvtOverviewEventManager$$ && this.$isMovable$($DvtOverviewEventManager$$)) {
      if ("ftr" == $DvtOverviewEventManager$$.getId() || "sta" == $DvtOverviewEventManager$$.getId()) {
        $DvtOverviewEventManager$$ = this.$getSlidingWindow$();
      }
      this.$_initX$ = $DvtOverviewParser$$;
      this.$_initY$ = $compY_drawableId$$;
      if (this.$isHandle$($DvtOverviewEventManager$$)) {
        $DvtOverviewParser$$ = this.$getSlidingWindow$();
        this.$isHorizontalRTL$() ? (this.$_oldEndPos$ = this.$Width$ - $DvtOverviewParser$$.$getX$(), this.$_oldStartPos$ = this.$_oldEndPos$ - $DvtOverviewParser$$.getWidth()) : (this.$_oldStartPos$ = $DvtOverviewParser$$.$getX$(), this.$_oldEndPos$ = this.$_oldStartPos$ + $DvtOverviewParser$$.getWidth());
        "grpy" == $DvtOverviewEventManager$$.getParent().getId() && ($DvtOverviewEventManager$$ = $DvtOverviewEventManager$$.getParent());
        $compY_drawableId$$ = $DvtOverviewEventManager$$.getId();
        "grpy" == $compY_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildBefore$($DvtOverviewEventManager$$), $compY_drawableId$$ = $DvtOverviewEventManager$$.getId());
        if ("lh" == $compY_drawableId$$ || "rh" == $compY_drawableId$$) {
          $DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildBefore$($DvtOverviewEventManager$$), $compY_drawableId$$ = $DvtOverviewEventManager$$.getId();
        }
        "lbgrh" == $compY_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildAt$(0));
        "rbgrh" == $compY_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildAt$($DvtOverviewParser$$.$getNumChildren$() - 3));
        $dvt$$6$$.$OverviewUtils$.$supportsTouch$() || (this.$isVertical$() ? ($DvtOverviewEventManager$$.$setY$(0 - $dvt$$6$$.$Overview$.$HANDLE_PADDING_SIZE$), $DvtOverviewEventManager$$.$setHeight$(2 * ($DvtOverviewEventManager$$.getHeight() + $dvt$$6$$.$Overview$.$HANDLE_PADDING_SIZE$))) : ($DvtOverviewEventManager$$.$setX$(0 - $dvt$$6$$.$Overview$.$HANDLE_PADDING_SIZE$), $DvtOverviewEventManager$$.$setWidth$(2 * ($DvtOverviewEventManager$$.getWidth() + $dvt$$6$$.$Overview$.$HANDLE_PADDING_SIZE$))));
        this.$overrideCursors$($DvtOverviewEventManager$$.getCursor());
      }
      this.$_moveDrawable$ = $DvtOverviewEventManager$$;
      $DvtOverviewEventManager$$ = new $dvt$$6$$.$OverviewEvent$($dvt$$6$$.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$);
      this.dispatchEvent($DvtOverviewEventManager$$);
      return !0;
    }
    return !1;
  };
  $dvt$$6$$.$Overview$.prototype.$overrideCursors$ = function $$dvt$$6$$$$Overview$$$$overrideCursors$$($dvt$$6$$) {
    var $DvtOverviewEventManager$$ = this.$getSlidingWindow$();
    null != $DvtOverviewEventManager$$ && $DvtOverviewEventManager$$.setCursor($dvt$$6$$);
    if (this.$isLeftAndRightFilterRendered$()) {
      var $DvtOverviewEventManager$$ = this.$getLeftBackground$(), $DvtOverviewParser$$ = this.$getRightBackground$();
      null != $DvtOverviewEventManager$$ && null != $DvtOverviewParser$$ && ($DvtOverviewEventManager$$.setCursor($dvt$$6$$), $DvtOverviewParser$$.setCursor($dvt$$6$$));
    }
  };
  $dvt$$6$$.$Overview$.prototype.$resetCursors$ = function $$dvt$$6$$$$Overview$$$$resetCursors$$() {
    var $dvt$$6$$ = this.$getSlidingWindow$();
    null != $dvt$$6$$ && $dvt$$6$$.setCursor("move");
    if (this.$isLeftAndRightFilterRendered$()) {
      var $dvt$$6$$ = this.$getLeftBackground$(), $DvtOverviewEventManager$$ = this.$getRightBackground$();
      null != $dvt$$6$$ && null != $DvtOverviewEventManager$$ && ($dvt$$6$$.setCursor("default"), $DvtOverviewEventManager$$.setCursor("default"));
    }
  };
  $dvt$$6$$.$Overview$.prototype.$endDragPan$ = function $$dvt$$6$$$$Overview$$$$endDragPan$$() {
    null != this.$_moveDrawable$ && ("window" == this.$_moveDrawable$.getId() ? this.$finishWindowDrag$(0, 0) : this.$isHandle$(this.$_moveDrawable$) && (this.$finishHandleDrag$(), $dvt$$6$$.$OverviewUtils$.$supportsTouch$() || (this.$isVertical$() ? (this.$_moveDrawable$.$setY$(0), this.$_moveDrawable$.$setHeight$(this.$getHandleSize$())) : (this.$_moveDrawable$.$setX$(0), this.$_moveDrawable$.$setWidth$(this.$getHandleSize$()))), this.$resetCursors$()), this.$_moveDrawable$ = null, this.$_initX$ = 
    -1);
  };
  $dvt$$6$$.$Overview$.prototype.$contDragPan$ = function $$dvt$$6$$$$Overview$$$$contDragPan$$($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if (null != this.$_moveDrawable$ && -1 != this.$_initX$) {
      var $diffX$$4$$ = $DvtOverviewEventManager$$ - this.$_initX$, $diffY$$5$$ = $DvtOverviewParser$$ - this.$_initY$;
      this.$_initX$ = $DvtOverviewEventManager$$;
      this.$_initY$ = $DvtOverviewParser$$;
      "window" == this.$_moveDrawable$.getId() ? this.$handleWindowDragPositioning$(0, $diffX$$4$$, $diffY$$5$$) : "lh" == this.$_moveDrawable$.getId() || "lhb" == this.$_moveDrawable$.getId() ? this.$handleLeftHandleDragPositioning$($dvt$$6$$, $diffX$$4$$, $diffY$$5$$) : "rh" != this.$_moveDrawable$.getId() && "rhb" != this.$_moveDrawable$.getId() || this.$handleRightHandleDragPositioning$($dvt$$6$$, $diffX$$4$$, $diffY$$5$$);
    }
  };
  $dvt$$6$$.$Overview$.prototype.$HandleTouchStart$ = function $$dvt$$6$$$$Overview$$$$HandleTouchStart$$($dvt$$6$$) {
    var $DvtOverviewEventManager$$ = $dvt$$6$$.touches;
    this.$_touchStartX$ = $DvtOverviewEventManager$$[0].pageX;
    this.$_touchStartY$ = $DvtOverviewEventManager$$[0].pageY;
    2 == $DvtOverviewEventManager$$.length && ($dvt$$6$$.preventDefault(), this.$_touchStartX2$ = $DvtOverviewEventManager$$[1].pageX, this.$_touchStartY2$ = $DvtOverviewEventManager$$[1].pageY, 20 > Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = null);
  };
  $dvt$$6$$.$Overview$.prototype.$HandleTouchMove$ = function $$dvt$$6$$$$Overview$$$$HandleTouchMove$$($dvt$$6$$) {
    $dvt$$6$$.preventDefault();
    $dvt$$6$$ = $dvt$$6$$.touches;
    if (null != this.$_touchStartX2$ && null != this.$_touchStartY2$) {
      50 > this.$_counter$ ? this.$_counter$++ : (this.$handleRightHandleDragPositioning$(null, $dvt$$6$$[1].pageX - this.$_touchStartX2$, 0), this.$_touchStartX2$ = $dvt$$6$$[1].pageX, this.$_counter$ = 0);
    } else {
      var $DvtOverviewEventManager$$ = Math.abs(this.$_touchStartY$ - $dvt$$6$$[0].pageY);
      if (3 < Math.abs(this.$_touchStartX$ - $dvt$$6$$[0].pageX) || 3 < $DvtOverviewEventManager$$) {
        this.$_touchStartY$ = this.$_touchStartX$ = null;
      }
    }
  };
  $dvt$$6$$.$Overview$.prototype.$HandleTouchEnd$ = function $$dvt$$6$$$$Overview$$$$HandleTouchEnd$$($dvt$$6$$) {
    null != this.$_touchStartX2$ && null != this.$_touchStartY2$ ? this.$finishHandleDrag$() : null != this.$_touchStartX$ && null != this.$_touchStartY$ && this.$HandleShapeClick$($dvt$$6$$, this.$_touchStartX$, this.$_touchStartY$);
    this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = null;
  };
  $dvt$$6$$.$Overview$.prototype.$HandleKeyDown$ = function $$dvt$$6$$$$Overview$$$$HandleKeyDown$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.keyCode;
    if ($DvtOverviewParser$$ === $dvt$$6$$.KeyboardEvent.$LEFT_ARROW$ || $DvtOverviewParser$$ === $dvt$$6$$.KeyboardEvent.$RIGHT_ARROW$) {
      $DvtOverviewParser$$ = $DvtOverviewParser$$ === $dvt$$6$$.KeyboardEvent.$LEFT_ARROW$ ? -1 : 1, ($DvtOverviewEventManager$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $DvtOverviewParser$$);
    }
  };
  $dvt$$6$$.$Overview$.prototype.$HandleKeyUp$ = function $$dvt$$6$$$$Overview$$$$HandleKeyUp$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.keyCode;
    if ($DvtOverviewParser$$ === $dvt$$6$$.KeyboardEvent.$LEFT_ARROW$ || $DvtOverviewParser$$ === $dvt$$6$$.KeyboardEvent.$RIGHT_ARROW$) {
      $DvtOverviewParser$$ = $DvtOverviewParser$$ === $dvt$$6$$.KeyboardEvent.$LEFT_ARROW$ ? -1 : 1, ($DvtOverviewEventManager$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $DvtOverviewParser$$, $DvtOverviewParser$$);
    }
  };
  $dvt$$6$$.$Overview$.prototype.$longScrollToPos$ = function $$dvt$$6$$$$Overview$$$$longScrollToPos$$($dvt$$6$$) {
    $dvt$$6$$ /= this.$_increment$;
    this.$isHorizontalRTL$() && ($dvt$$6$$ = 0 - $dvt$$6$$);
    this.$animateSlidingWindow$($dvt$$6$$);
  };
  $dvt$$6$$.$Overview$.prototype.$handleWindowDragPositioning$ = function $$dvt$$6$$$$Overview$$$$handleWindowDragPositioning$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$7$$) {
    this.$fireScrollEvent$($dvt$$6$$.$OverviewEvent$.$SUBTYPE_SCROLL_POS$, $DvtOverviewParser$$, $deltaY$$7$$);
  };
  $dvt$$6$$.$Overview$.prototype.$finishWindowDrag$ = function $$dvt$$6$$$$Overview$$$$finishWindowDrag$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$fireScrollEvent$($dvt$$6$$.$OverviewEvent$.$SUBTYPE_SCROLL_END$, $DvtOverviewEventManager$$, $DvtOverviewParser$$);
  };
  $dvt$$6$$.$Overview$.prototype.$fireScrollEvent$ = function $$dvt$$6$$$$Overview$$$$fireScrollEvent$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$9$$) {
    var $newEndTime$$1_slidingWindow$$17$$ = this.$getSlidingWindow$(), $pos$$62$$ = this.$getSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$), $newStartTime$$1_scrollTo_size$$35$$ = this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$), $minPos$$1$$ = this.$_leftMargin$, $maxPos$$1$$ = this.$getMaximumPosition$();
    $DvtOverviewParser$$ = this.$isVertical$() ? $deltaY$$9$$ : $DvtOverviewParser$$;
    $pos$$62$$ + $DvtOverviewParser$$ <= $minPos$$1$$ ? (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$35$$ = this.$isHorizontalRTL$() ? $dvt$$6$$.$OverviewEvent$.$END_POS$ : $dvt$$6$$.$OverviewEvent$.$START_POS$) : $pos$$62$$ + $newStartTime$$1_scrollTo_size$$35$$ + $DvtOverviewParser$$ >= $maxPos$$1$$ ? (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$35$$), $newStartTime$$1_scrollTo_size$$35$$ = 
    this.$isHorizontalRTL$() ? $dvt$$6$$.$OverviewEvent$.$START_POS$ : $dvt$$6$$.$OverviewEvent$.$END_POS$) : (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $pos$$62$$ + $DvtOverviewParser$$), $newStartTime$$1_scrollTo_size$$35$$ = this.$isHorizontalRTL$() ? ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$35$$ - $pos$$62$$ - this.$_leftMargin$) * this.$_increment$ : ($pos$$62$$ - this.$_leftMargin$) * this.$_increment$);
    this.$ScrollTimeAxis$();
    $DvtOverviewEventManager$$ = new $dvt$$6$$.$OverviewEvent$($DvtOverviewEventManager$$);
    $DvtOverviewEventManager$$.setPosition($newStartTime$$1_scrollTo_size$$35$$);
    this.$isHorizontalRTL$() ? ($newStartTime$$1_scrollTo_size$$35$$ = this.$getPositionDate$(this.$Width$ - ($pos$$62$$ + this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$))), $newEndTime$$1_slidingWindow$$17$$ = this.$getPositionDate$(this.$Width$ - $pos$$62$$)) : ($newStartTime$$1_scrollTo_size$$35$$ = this.$getPositionDate$($pos$$62$$), $newEndTime$$1_slidingWindow$$17$$ = this.$getPositionDate$($pos$$62$$ + this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$)));
    $DvtOverviewEventManager$$.$setNewStartTime$($newStartTime$$1_scrollTo_size$$35$$);
    $DvtOverviewEventManager$$.$setNewEndTime$($newEndTime$$1_slidingWindow$$17$$);
    this.dispatchEvent($DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$Overview$.prototype.$handleLeftHandleDragPositioning$ = function $$dvt$$6$$$$Overview$$$$handleLeftHandleDragPositioning$$($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$handleLeftOrRightHandleDragPositioning$($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, !0);
  };
  $dvt$$6$$.$Overview$.prototype.$handleRightHandleDragPositioning$ = function $$dvt$$6$$$$Overview$$$$handleRightHandleDragPositioning$$($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$handleLeftOrRightHandleDragPositioning$($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, !1);
  };
  $dvt$$6$$.$Overview$.prototype.$handleLeftOrRightHandleDragPositioning$ = function $$dvt$$6$$$$Overview$$$$handleLeftOrRightHandleDragPositioning$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $delta$$11_deltaY$$12$$, $isLeft$$5_newStartTime$$2$$) {
    var $evt$$50_size$$36$$ = this.$getOverviewSize$();
    $delta$$11_deltaY$$12$$ = this.$isVertical$() ? $delta$$11_deltaY$$12$$ : $DvtOverviewParser$$;
    if (0 != $delta$$11_deltaY$$12$$) {
      $DvtOverviewParser$$ = this.$getSlidingWindow$();
      var $windowPos$$ = this.$getSlidingWindowPos$($DvtOverviewParser$$), $windowSize$$ = this.$getSlidingWindowSize$($DvtOverviewParser$$);
      if ($isLeft$$5_newStartTime$$2$$) {
        if ($windowSize$$ - $delta$$11_deltaY$$12$$ <= this.$getMinimumWindowSize$() || $windowPos$$ + $delta$$11_deltaY$$12$$ <= this.$_leftMargin$) {
          return;
        }
        $DvtOverviewEventManager$$ = this.$isVertical$() ? this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).y : this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).x;
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        if (0 < $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ <= $windowPos$$ || 0 > $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ >= $windowPos$$) {
          return;
        }
        this.$setSlidingWindowPos$($DvtOverviewParser$$, $windowPos$$ + $delta$$11_deltaY$$12$$);
        this.$setSlidingWindowSize$($DvtOverviewParser$$, $windowSize$$ - $delta$$11_deltaY$$12$$);
      } else {
        if ($windowSize$$ + $delta$$11_deltaY$$12$$ <= this.$getMinimumWindowSize$() || $windowPos$$ + $windowSize$$ + $delta$$11_deltaY$$12$$ >= this.$getMaximumPosition$()) {
          return;
        }
        $DvtOverviewEventManager$$ = this.$isVertical$() ? this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).y : this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).x;
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        if (0 < $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ >= $windowPos$$ + $windowSize$$) {
          return;
        }
        this.$setSlidingWindowSize$($DvtOverviewParser$$, $windowSize$$ + $delta$$11_deltaY$$12$$);
      }
      this.$ScrollTimeAxis$();
      $DvtOverviewEventManager$$ = this.$getPositionDate$(this.$getSlidingWindowSize$($DvtOverviewParser$$));
      $DvtOverviewEventManager$$ = $evt$$50_size$$36$$ * (this.$_end$ - this.$_start$) / ($DvtOverviewEventManager$$ - this.$_start$);
      $evt$$50_size$$36$$ = new $dvt$$6$$.$OverviewEvent$($dvt$$6$$.$OverviewEvent$.$SUBTYPE_RANGECHANGING$);
      $evt$$50_size$$36$$.$setNewSize$($DvtOverviewEventManager$$);
      $evt$$50_size$$36$$.$setEndHandle$(this.$isHorizontalRTL$() ? $isLeft$$5_newStartTime$$2$$ : !$isLeft$$5_newStartTime$$2$$);
      $isLeft$$5_newStartTime$$2$$ ? $evt$$50_size$$36$$.$setExpand$(0 > $delta$$11_deltaY$$12$$) : $evt$$50_size$$36$$.$setExpand$(0 < $delta$$11_deltaY$$12$$);
      this.$isHorizontalRTL$() ? ($isLeft$$5_newStartTime$$2$$ = this.$getPositionDate$(this.$Width$ - (this.$getSlidingWindowPos$($DvtOverviewParser$$) + this.$getRectSize$($DvtOverviewParser$$))), $DvtOverviewParser$$ = this.$getPositionDate$(this.$Width$ - this.$getSlidingWindowPos$($DvtOverviewParser$$))) : ($isLeft$$5_newStartTime$$2$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($DvtOverviewParser$$)), $DvtOverviewParser$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($DvtOverviewParser$$) + 
      this.$getRectSize$($DvtOverviewParser$$)));
      $evt$$50_size$$36$$.$setNewStartTime$($isLeft$$5_newStartTime$$2$$);
      $evt$$50_size$$36$$.$setNewEndTime$($DvtOverviewParser$$);
      this.dispatchEvent($evt$$50_size$$36$$);
    }
  };
  $dvt$$6$$.$Overview$.prototype.$finishHandleDrag$ = function $$dvt$$6$$$$Overview$$$$finishHandleDrag$$() {
    var $DvtOverviewEventManager$$ = this.$_start$, $DvtOverviewParser$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$37$$ = this.$getOverviewSize$(), $newEndTime$$3_slidingWindow$$19$$ = this.$getSlidingWindow$(), $newStartTime$$3_time$$10$$ = this.$getPositionDate$(this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$)), $DvtOverviewEventManager$$ = $oldEndTime_size$$37$$ * ($DvtOverviewParser$$ - $DvtOverviewEventManager$$) / ($newStartTime$$3_time$$10$$ - $DvtOverviewEventManager$$), 
    $DvtOverviewParser$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$37$$ = this.$getPositionDate$(this.$_oldEndPos$);
    this.$isHorizontalRTL$() ? ($newStartTime$$3_time$$10$$ = this.$getPositionDate$(this.$Width$ - (this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$) + this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$))), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$(this.$Width$ - this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$))) : ($newStartTime$$3_time$$10$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$)), $newEndTime$$3_slidingWindow$$19$$ = 
    this.$getPositionDate$(this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$) + this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$)));
    var $evt$$51$$ = new $dvt$$6$$.$OverviewEvent$($dvt$$6$$.$OverviewEvent$.$SUBTYPE_RANGECHANGE$);
    $evt$$51$$.$setOldSize$($oldSize$$);
    $evt$$51$$.$setNewSize$($DvtOverviewEventManager$$);
    $evt$$51$$.$setOldStartTime$($DvtOverviewParser$$);
    $evt$$51$$.$setOldEndTime$($oldEndTime_size$$37$$);
    $evt$$51$$.$setNewStartTime$($newStartTime$$3_time$$10$$);
    $evt$$51$$.$setNewEndTime$($newEndTime$$3_slidingWindow$$19$$);
    this.dispatchEvent($evt$$51$$);
  };
  $dvt$$6$$.$Overview$.prototype.$ScrollTimeAxis$ = function $$dvt$$6$$$$Overview$$$$ScrollTimeAxis$$() {
    var $DvtOverviewEventManager$$ = this.$getSlidingWindow$(), $DvtOverviewParser$$ = $dvt$$6$$.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ / 2, $left$$13$$ = this.$getSlidingWindowPos$($DvtOverviewEventManager$$), $leftCenter$$1$$ = $left$$13$$ + $DvtOverviewParser$$, $DvtOverviewEventManager$$ = $left$$13$$ + this.$getSlidingWindowSize$($DvtOverviewEventManager$$) - $DvtOverviewParser$$, $DvtOverviewParser$$ = this.$getLeftHandle$(), $rightHandle$$4$$ = this.$getRightHandle$(), $leftTopBar$$2$$ = 
    this.$getLeftTopBar$(), $rightTopBar$$2$$ = this.$getRightTopBar$(), $bottomBar$$2$$ = this.$getBottomBar$(), $topBar$$2$$ = this.$getTopBar$();
    this.$setLinePos$($DvtOverviewParser$$, $leftCenter$$1$$, $leftCenter$$1$$);
    this.$setLinePos$($rightHandle$$4$$, $DvtOverviewEventManager$$, $DvtOverviewEventManager$$);
    this.$setLinePos$($leftTopBar$$2$$, -1, $left$$13$$);
    this.$setLinePos$($rightTopBar$$2$$, this.$getLinePos1$($rightHandle$$4$$), -1);
    this.$setLinePos$($bottomBar$$2$$, this.$getLinePos1$($DvtOverviewParser$$), this.$getLinePos1$($rightHandle$$4$$));
    this.$setLinePos$($topBar$$2$$, this.$getLinePos1$($DvtOverviewParser$$), this.$getLinePos1$($rightHandle$$4$$));
  };
  $dvt$$6$$.$Overview$.prototype.dispatchEvent = function $$dvt$$6$$$$Overview$$$dispatchEvent$($DvtOverviewEventManager$$) {
    $dvt$$6$$.$EventDispatcher$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$Overview$.prototype.$destroy$ = function $$dvt$$6$$$$Overview$$$$destroy$$() {
    this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = null);
    $dvt$$6$$.$OverviewUtils$.$supportsTouch$() ? (this.$removeEvtListener$($dvt$$6$$.TouchEvent.$TOUCHSTART$, this.$HandleTouchStart$, !1, this), this.$removeEvtListener$($dvt$$6$$.TouchEvent.$TOUCHMOVE$, this.$HandleTouchMove$, !1, this), this.$removeEvtListener$($dvt$$6$$.TouchEvent.$TOUCHEND$, this.$HandleTouchEnd$, !1, this), this.$removeEvtListener$($dvt$$6$$.MouseEvent.$CLICK$, this.$HandleShapeClick$, !1, this)) : (this.$removeEvtListener$($dvt$$6$$.MouseEvent.$MOUSEOVER$, this.$HandleShapeMouseOver$, 
    !1, this), this.$removeEvtListener$($dvt$$6$$.MouseEvent.$MOUSEOUT$, this.$HandleShapeMouseOut$, !1, this), this.$removeEvtListener$($dvt$$6$$.MouseEvent.$CLICK$, this.$HandleShapeClick$, !1, this), this.$removeEvtListener$($dvt$$6$$.KeyboardEvent.$KEYDOWN$, this.$HandleKeyDown$, !1, this), this.$removeEvtListener$($dvt$$6$$.KeyboardEvent.$KEYUP$, this.$HandleKeyUp$, !1, this));
    $dvt$$6$$.$Overview$.$superclass$.$destroy$.call(this);
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtOverviewParser$$, $dvt$$6$$.$Obj$);
  $DvtOverviewParser$$.prototype.Init = function $$DvtOverviewParser$$$$Init$($dvt$$6$$) {
    this.$_view$ = $dvt$$6$$;
  };
  $DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($dvt$$6$$) {
    return this.$ParseRootAttributes$($dvt$$6$$);
  };
  $DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = {};
    $DvtOverviewParser$$.$animationOnClick$ = $DvtOverviewEventManager$$.animationOnClick;
    null != $DvtOverviewEventManager$$.startTime && ($DvtOverviewParser$$.start = $DvtOverviewEventManager$$.startTime);
    null != $DvtOverviewEventManager$$.endTime && ($DvtOverviewParser$$.end = $DvtOverviewEventManager$$.endTime);
    null == $DvtOverviewParser$$.start && ($DvtOverviewParser$$.start = (new Date).getTime());
    if (null == $DvtOverviewParser$$.end || $DvtOverviewParser$$.end <= $DvtOverviewParser$$.start) {
      $DvtOverviewParser$$.end = $DvtOverviewParser$$.start + 864E5;
    }
    null != $DvtOverviewEventManager$$.currentTime && ($DvtOverviewParser$$.currentTime = $DvtOverviewEventManager$$.currentTime);
    null != $DvtOverviewEventManager$$.initialFocusTime && ($DvtOverviewParser$$.$initialFocusTime$ = $DvtOverviewEventManager$$.initialFocusTime);
    $DvtOverviewParser$$.orientation = "horizontal";
    null != $DvtOverviewEventManager$$.orientation && ($DvtOverviewParser$$.orientation = $DvtOverviewEventManager$$.orientation);
    $DvtOverviewParser$$.$featuresOff$ = $DvtOverviewEventManager$$.featuresOff;
    $DvtOverviewParser$$.$minimumWindowSize$ = $DvtOverviewEventManager$$.minimumWindowSize;
    $DvtOverviewParser$$.$leftMargin$ = $DvtOverviewEventManager$$.leftMargin;
    $DvtOverviewParser$$.$rightMargin$ = $DvtOverviewEventManager$$.rightMargin;
    if (null != $DvtOverviewEventManager$$.viewportEndTime) {
      var $viewportEndTime$$ = $DvtOverviewEventManager$$.viewportEndTime, $viewportStartTime$$ = $DvtOverviewParser$$.start;
      null != $DvtOverviewEventManager$$.viewportStartTime && $DvtOverviewEventManager$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $DvtOverviewEventManager$$.viewportStartTime);
      $DvtOverviewParser$$.width = null != $DvtOverviewEventManager$$.viewportEndPos ? this.$calculateWidth$($DvtOverviewParser$$.start, $DvtOverviewParser$$.end, $viewportStartTime$$, $viewportEndTime$$, $DvtOverviewEventManager$$.viewportEndPos) : this.$calculateWidth$($DvtOverviewParser$$.start, $DvtOverviewParser$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
      $DvtOverviewParser$$.$renderStart$ = $viewportStartTime$$;
    } else {
      $DvtOverviewParser$$.$renderStart$ = $DvtOverviewParser$$.start;
    }
    0 == $DvtOverviewParser$$.width && ($DvtOverviewParser$$.width = 1E3);
    $DvtOverviewParser$$.$overviewPosition$ = "below";
    $DvtOverviewParser$$.$selectionMode$ = "none";
    $DvtOverviewParser$$.$isRtl$ = $dvt$$6$$.$Agent$.$isRightToLeft$(this.$_view$.$getCtx$()).toString();
    null != $DvtOverviewEventManager$$.rtl && ($DvtOverviewParser$$.$isRtl$ = $DvtOverviewEventManager$$.rtl.toString());
    $DvtOverviewParser$$.$handleFillColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$handleTextureColor$ = "#B3C6DB";
    $DvtOverviewParser$$.$windowBackgroundColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$windowBackgroundAlpha$ = 1;
    $DvtOverviewParser$$.$windowBorderTopStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderRightStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderBottomStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderLeftStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderTopColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderRightColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderBottomColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderLeftColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$overviewBackgroundColor$ = "#E6ECF3";
    $DvtOverviewParser$$.$currentTimeIndicatorColor$ = "#C000D1";
    $DvtOverviewParser$$.$timeIndicatorColor$ = "#BCC7D2";
    $DvtOverviewParser$$.$timeAxisBarColor$ = "#e5e5e5";
    $DvtOverviewParser$$.$timeAxisBarOpacity$ = 1;
    $DvtOverviewParser$$.$leftFilterPanelColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$leftFilterPanelAlpha$ = .7;
    $DvtOverviewParser$$.$rightFilterPanelColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$rightFilterPanelAlpha$ = .7;
    null != $DvtOverviewEventManager$$.style && (null != $DvtOverviewEventManager$$.style.handleFillColor && ($DvtOverviewParser$$.$handleFillColor$ = $DvtOverviewEventManager$$.style.handleFillColor), null != $DvtOverviewEventManager$$.style.handleTextureColor && ($DvtOverviewParser$$.$handleTextureColor$ = $DvtOverviewEventManager$$.style.handleTextureColor), null != $DvtOverviewEventManager$$.style.handleBackgroundImage && ($DvtOverviewParser$$.$handleBackgroundImage$ = $DvtOverviewEventManager$$.style.handleBackgroundImage), 
    null != $DvtOverviewEventManager$$.style.handleWidth && ($DvtOverviewParser$$.$handleWidth$ = $DvtOverviewEventManager$$.style.handleWidth), null != $DvtOverviewEventManager$$.style.handleHeight && ($DvtOverviewParser$$.$handleHeight$ = $DvtOverviewEventManager$$.style.handleHeight), null != $DvtOverviewEventManager$$.style.windowBackgroundColor && ($DvtOverviewParser$$.$windowBackgroundColor$ = $DvtOverviewEventManager$$.style.windowBackgroundColor), null != $DvtOverviewEventManager$$.style.windowBackgroundAlpha && 
    ($DvtOverviewParser$$.$windowBackgroundAlpha$ = $DvtOverviewEventManager$$.style.windowBackgroundAlpha), null != $DvtOverviewEventManager$$.style.windowBorderTopStyle && ($DvtOverviewParser$$.$windowBorderTopStyle$ = $DvtOverviewEventManager$$.style.windowBorderTopStyle), null != $DvtOverviewEventManager$$.style.windowBorderRightStyle && ($DvtOverviewParser$$.$windowBorderRightStyle$ = $DvtOverviewEventManager$$.style.windowBorderRightStyle), null != $DvtOverviewEventManager$$.style.windowBorderBottomStyle && 
    ($DvtOverviewParser$$.$windowBorderBottomStyle$ = $DvtOverviewEventManager$$.style.windowBorderBottomStyle), null != $DvtOverviewEventManager$$.style.windowBorderLeftStyle && ($DvtOverviewParser$$.$windowBorderLeftStyle$ = $DvtOverviewEventManager$$.style.windowBorderLeftStyle), null != $DvtOverviewEventManager$$.style.windowBorderTopColor && ($DvtOverviewParser$$.$windowBorderTopColor$ = $DvtOverviewEventManager$$.style.windowBorderTopColor), null != $DvtOverviewEventManager$$.style.windowBorderRightColor && 
    ($DvtOverviewParser$$.$windowBorderRightColor$ = $DvtOverviewEventManager$$.style.windowBorderRightColor), null != $DvtOverviewEventManager$$.style.windowBorderBottomColor && ($DvtOverviewParser$$.$windowBorderBottomColor$ = $DvtOverviewEventManager$$.style.windowBorderBottomColor), null != $DvtOverviewEventManager$$.style.windowBorderLeftColor && ($DvtOverviewParser$$.$windowBorderLeftColor$ = $DvtOverviewEventManager$$.style.windowBorderLeftColor), null != $DvtOverviewEventManager$$.style.overviewBackgroundColor && 
    ($DvtOverviewParser$$.$overviewBackgroundColor$ = $DvtOverviewEventManager$$.style.overviewBackgroundColor), null != $DvtOverviewEventManager$$.style.currentTimeIndicatorColor && ($DvtOverviewParser$$.$currentTimeIndicatorColor$ = $DvtOverviewEventManager$$.style.currentTimeIndicatorColor), null != $DvtOverviewEventManager$$.style.timeIndicatorColor && ($DvtOverviewParser$$.$timeIndicatorColor$ = $DvtOverviewEventManager$$.style.timeIndicatorColor), null != $DvtOverviewEventManager$$.style.leftFilterPanelColor && 
    ($DvtOverviewParser$$.$leftFilterPanelColor$ = $DvtOverviewEventManager$$.style.leftFilterPanelColor), null != $DvtOverviewEventManager$$.style.leftFilterPanelAlpha && ($DvtOverviewParser$$.$leftFilterPanelAlpha$ = $DvtOverviewEventManager$$.style.leftFilterPanelAlpha), null != $DvtOverviewEventManager$$.style.rightFilterPanelColor && ($DvtOverviewParser$$.$rightFilterPanelColor$ = $DvtOverviewEventManager$$.style.rightFilterPanelColor), null != $DvtOverviewEventManager$$.style.rightFilterPanelAlpha && 
    ($DvtOverviewParser$$.$rightFilterPanelAlpha$ = $DvtOverviewEventManager$$.style.rightFilterPanelAlpha));
    return $DvtOverviewParser$$;
  };
  $DvtOverviewParser$$.prototype.$calculateWidth$ = function $$DvtOverviewParser$$$$$calculateWidth$$($dvt$$6$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
    $dvt$$6$$ = $viewportEndPos$$ * ($DvtOverviewEventManager$$ - $dvt$$6$$);
    $DvtOverviewParser$$ = $viewportEndTime$$1$$ - $DvtOverviewParser$$;
    return 0 == $dvt$$6$$ || 0 == $DvtOverviewParser$$ ? 0 : $dvt$$6$$ / $DvtOverviewParser$$;
  };
  $dvt$$6$$.$OverviewEvent$ = function $$dvt$$6$$$$OverviewEvent$$($DvtOverviewEventManager$$) {
    this.Init($dvt$$6$$.$OverviewEvent$.$TYPE$);
    this.$_subtype$ = $DvtOverviewEventManager$$;
  };
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$OverviewEvent$, $dvt$$6$$.$BaseComponentEvent$);
  $dvt$$6$$.$OverviewEvent$.$TYPE$ = "overview";
  $dvt$$6$$.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$ = "dropCallback";
  $dvt$$6$$.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$ = "scrollTime";
  $dvt$$6$$.$OverviewEvent$.$SUBTYPE_SCROLL_POS$ = "scrollPos";
  $dvt$$6$$.$OverviewEvent$.$SUBTYPE_SCROLL_END$ = "scrollEnd";
  $dvt$$6$$.$OverviewEvent$.$SUBTYPE_RANGECHANGE$ = "rangeChange";
  $dvt$$6$$.$OverviewEvent$.$SUBTYPE_RANGECHANGING$ = "rangeChanging";
  $dvt$$6$$.$OverviewEvent$.$TIME_KEY$ = "time";
  $dvt$$6$$.$OverviewEvent$.$POS_KEY$ = "pos";
  $dvt$$6$$.$OverviewEvent$.$OLD_SIZE_KEY$ = "oldSize";
  $dvt$$6$$.$OverviewEvent$.$NEW_SIZE_KEY$ = "newSize";
  $dvt$$6$$.$OverviewEvent$.$OLD_START_TIME_KEY$ = "oldStartTime";
  $dvt$$6$$.$OverviewEvent$.$NEW_START_TIME_KEY$ = "newStartTime";
  $dvt$$6$$.$OverviewEvent$.$OLD_END_TIME_KEY$ = "oldEndTime";
  $dvt$$6$$.$OverviewEvent$.$NEW_END_TIME_KEY$ = "newEndTime";
  $dvt$$6$$.$OverviewEvent$.$EXPAND_KEY$ = "expand";
  $dvt$$6$$.$OverviewEvent$.$END_HANDLE_KEY$ = "endHandle";
  $dvt$$6$$.$OverviewEvent$.$START_POS$ = -1;
  $dvt$$6$$.$OverviewEvent$.$END_POS$ = -2;
  $dvt$$6$$.$OverviewEvent$.prototype.$getSubType$ = function $$dvt$$6$$$$OverviewEvent$$$$getSubType$$() {
    return this.$_subtype$;
  };
  $dvt$$6$$.$OverviewEvent$.prototype.setTime = function $$dvt$$6$$$$OverviewEvent$$$setTime$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$6$$.$OverviewEvent$.$TIME_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.getTime = function $$dvt$$6$$$$OverviewEvent$$$getTime$() {
    return this.$getParamValue$($dvt$$6$$.$OverviewEvent$.$TIME_KEY$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.$setOldSize$ = function $$dvt$$6$$$$OverviewEvent$$$$setOldSize$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$6$$.$OverviewEvent$.$OLD_SIZE_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.$setNewSize$ = function $$dvt$$6$$$$OverviewEvent$$$$setNewSize$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$6$$.$OverviewEvent$.$NEW_SIZE_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.$setOldStartTime$ = function $$dvt$$6$$$$OverviewEvent$$$$setOldStartTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$6$$.$OverviewEvent$.$OLD_START_TIME_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.$setNewStartTime$ = function $$dvt$$6$$$$OverviewEvent$$$$setNewStartTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$6$$.$OverviewEvent$.$NEW_START_TIME_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.$getNewStartTime$ = function $$dvt$$6$$$$OverviewEvent$$$$getNewStartTime$$() {
    return this.$getParamValue$($dvt$$6$$.$OverviewEvent$.$NEW_START_TIME_KEY$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.$setOldEndTime$ = function $$dvt$$6$$$$OverviewEvent$$$$setOldEndTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$6$$.$OverviewEvent$.$OLD_END_TIME_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.$setNewEndTime$ = function $$dvt$$6$$$$OverviewEvent$$$$setNewEndTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$6$$.$OverviewEvent$.$NEW_END_TIME_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.$getNewEndTime$ = function $$dvt$$6$$$$OverviewEvent$$$$getNewEndTime$$() {
    return this.$getParamValue$($dvt$$6$$.$OverviewEvent$.$NEW_END_TIME_KEY$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.$setExpand$ = function $$dvt$$6$$$$OverviewEvent$$$$setExpand$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$6$$.$OverviewEvent$.$EXPAND_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.$setEndHandle$ = function $$dvt$$6$$$$OverviewEvent$$$$setEndHandle$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$6$$.$OverviewEvent$.$END_HANDLE_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.setPosition = function $$dvt$$6$$$$OverviewEvent$$$setPosition$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$6$$.$OverviewEvent$.$POS_KEY$, $DvtOverviewEventManager$$);
  };
  $dvt$$6$$.$OverviewEvent$.prototype.$getPosition$ = function $$dvt$$6$$$$OverviewEvent$$$$getPosition$$() {
    return this.$getParamValue$($dvt$$6$$.$OverviewEvent$.$POS_KEY$);
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtOverviewEventManager$$, $dvt$$6$$.$EventManager$);
  $DvtOverviewEventManager$$.prototype.$addListeners$ = function $$DvtOverviewEventManager$$$$$addListeners$$($DvtOverviewParser$$) {
    $DvtOverviewEventManager$$.$superclass$.$addListeners$.call(this, $DvtOverviewParser$$);
    $dvt$$6$$.$SvgDocumentUtils$.$addDragListeners$(this.$_overview$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  };
  $DvtOverviewEventManager$$.prototype.$_onDragStart$ = function $$DvtOverviewEventManager$$$$$_onDragStart$$($DvtOverviewEventManager$$) {
    return $dvt$$6$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($DvtOverviewEventManager$$) : this.$_onMouseDragStart$($DvtOverviewEventManager$$);
  };
  $DvtOverviewEventManager$$.prototype.$_onDragMove$ = function $$DvtOverviewEventManager$$$$$_onDragMove$$($DvtOverviewEventManager$$) {
    return $dvt$$6$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($DvtOverviewEventManager$$) : this.$_onMouseDragMove$($DvtOverviewEventManager$$);
  };
  $DvtOverviewEventManager$$.prototype.$_onDragEnd$ = function $$DvtOverviewEventManager$$$$$_onDragEnd$$($DvtOverviewEventManager$$) {
    return $dvt$$6$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($DvtOverviewEventManager$$) : this.$_onMouseDragEnd$($DvtOverviewEventManager$$);
  };
  $DvtOverviewEventManager$$.prototype.$_getRelativePosition$ = function $$DvtOverviewEventManager$$$$$_getRelativePosition$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
    return new $dvt$$6$$.$Point$($DvtOverviewEventManager$$ - this.$_stageAbsolutePosition$.x, $DvtOverviewParser$$ - this.$_stageAbsolutePosition$.y);
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragStart$ = function $$DvtOverviewEventManager$$$$$_onMouseDragStart$$($DvtOverviewEventManager$$) {
    if ($DvtOverviewEventManager$$.button != $dvt$$6$$.MouseEvent.$RIGHT_CLICK_BUTTON$) {
      var $DvtOverviewParser$$ = this.$_getRelativePosition$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY);
      $dvt$$6$$.$EventManager$.$consumeEvent$($DvtOverviewEventManager$$);
      this.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
      return this.$_overview$.$beginDragPan$($DvtOverviewEventManager$$, $DvtOverviewParser$$.x, $DvtOverviewParser$$.y);
    }
    return !1;
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragMove$ = function $$DvtOverviewEventManager$$$$$_onMouseDragMove$$($dvt$$6$$) {
    var $DvtOverviewEventManager$$ = this.$_getRelativePosition$($dvt$$6$$.pageX, $dvt$$6$$.pageY);
    $dvt$$6$$.stopPropagation();
    this.$_overview$.$contDragPan$($dvt$$6$$, $DvtOverviewEventManager$$.x, $DvtOverviewEventManager$$.y);
    return !0;
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragEnd$ = function $$DvtOverviewEventManager$$$$$_onMouseDragEnd$$($dvt$$6$$) {
    $dvt$$6$$.stopPropagation();
    this.$_overview$.$endDragPan$();
    this.$_stageAbsolutePosition$ = null;
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragStart$ = function $$DvtOverviewEventManager$$$$$_onTouchDragStart$$($dvt$$6$$) {
    var $DvtOverviewEventManager$$ = $dvt$$6$$.touches;
    $dvt$$6$$.stopPropagation();
    return 1 == $DvtOverviewEventManager$$.length ? ($DvtOverviewEventManager$$ = this.$_getRelativePosition$($DvtOverviewEventManager$$[0].pageX, $DvtOverviewEventManager$$[0].pageY), $dvt$$6$$.preventDefault(), this.$_overview$.$beginDragPan$($dvt$$6$$, $DvtOverviewEventManager$$.x, $DvtOverviewEventManager$$.y)) : !1;
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragMove$ = function $$DvtOverviewEventManager$$$$$_onTouchDragMove$$($dvt$$6$$) {
    var $DvtOverviewEventManager$$ = $dvt$$6$$.touches;
    1 == $DvtOverviewEventManager$$.length && ($DvtOverviewEventManager$$ = this.$_getRelativePosition$($DvtOverviewEventManager$$[0].pageX, $DvtOverviewEventManager$$[0].pageY), this.$_overview$.$contDragPan$($dvt$$6$$, $DvtOverviewEventManager$$.x, $DvtOverviewEventManager$$.y), $dvt$$6$$.preventDefault());
    $dvt$$6$$.stopPropagation();
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragEnd$ = function $$DvtOverviewEventManager$$$$$_onTouchDragEnd$$($DvtOverviewEventManager$$) {
    this.$_overview$.$endDragPan$();
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtOverviewEventManager$$);
    this.$_stageAbsolutePosition$ = null;
  };
  $dvt$$6$$.$exportProperty$($dvt$$6$$, "Overview", $dvt$$6$$.$Overview$);
  $dvt$$6$$.$exportProperty$($dvt$$6$$.$Overview$.prototype, "render", $dvt$$6$$.$Overview$.prototype.$render$);
})(dvt);

  return dvt;
});
