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
  return dvt;
});
