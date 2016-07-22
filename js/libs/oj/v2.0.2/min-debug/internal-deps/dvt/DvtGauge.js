/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtAxis'], function(dvt) {
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

(function($dvt$$3$$) {
  function $DvtRatingGaugeEventManager$$($dvt$$3$$) {
    this.Init($dvt$$3$$.$getCtx$(), $dvt$$3$$.dispatchEvent, $dvt$$3$$);
    this.$_gauge$ = $dvt$$3$$;
  }
  function $DvtRatingGaugePeer$$($dvt$$3$$) {
    this.Init();
    this.$_gauge$ = $dvt$$3$$;
  }
  function $DvtRatingGaugeDefaults$$() {
    this.Init({skyros:$DvtRatingGaugeDefaults$$.$VERSION_1$, alta:$DvtRatingGaugeDefaults$$.$SKIN_ALTA$});
  }
  function $DvtDialGaugeIndicator$$($dvt$$3$$) {
    this.Init($dvt$$3$$);
  }
  function $DvtDialGaugeDefaults$$() {
    this.Init({skyros:$DvtDialGaugeDefaults$$.$VERSION_1$, alta:{}});
  }
  function $DvtStatusMeterGaugeCircularIndicator$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    this.Init($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$);
  }
  function $DvtStatusMeterGaugeIndicator$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    this.Init($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$);
  }
  function $DvtStatusMeterGaugeDefaults$$() {
    this.Init({skyros:$DvtStatusMeterGaugeDefaults$$.$VERSION_1$, alta:$DvtStatusMeterGaugeDefaults$$.$SKIN_ALTA$});
  }
  function $DvtLedGaugeDefaults$$() {
    this.Init({skyros:$DvtLedGaugeDefaults$$.$VERSION_1$, alta:{}});
  }
  function $DvtGaugeKeyboardHandler$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    this.Init($dvt$$3$$, $DvtRatingGaugeEventManager$$);
  }
  function $DvtGaugeEventManager$$($dvt$$3$$) {
    this.Init($dvt$$3$$.$getCtx$(), $dvt$$3$$.dispatchEvent, $dvt$$3$$);
    this.$_gauge$ = $dvt$$3$$;
    this.$IsMouseEditing$ = !1;
  }
  function $DvtGaugeDefaults$$() {
  }
  function $DvtGaugeAutomation$$($dvt$$3$$) {
    this.$_gauge$ = $dvt$$3$$;
  }
  function $DvtGauge$$() {
  }
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGauge$$, $dvt$$3$$.$BaseComponent$);
  $DvtGauge$$.$_DEFAULT_MIN_VALUE$ = 0;
  $DvtGauge$$.$_DEFAULT_MAX_VALUE$ = 100;
  $DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $DvtGauge$$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    this.$_bStaticRendering$ = $DvtDialGaugeIndicator$$;
    this.$_bStaticRendering$ || (this.$EventManager$ = this.$CreateEventManager$(), this.$EventManager$.$addListeners$(this), $dvt$$3$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$EventManager$)), this.setId("gauge1000" + Math.floor(1E9 * Math.random())), this.$_editingOverlay$ = new $dvt$$3$$.Rect($DvtRatingGaugeEventManager$$, 0, 0), this.$_editingOverlay$.$setInvisibleFill$(), this.$addChild$(this.$_editingOverlay$));
    this.$_bResizeRender$ = this.$_bEditing$ = !1;
    this.$_oldValue$ = null;
  };
  $DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    this.$Options$ = $DvtRatingGaugeEventManager$$;
    $dvt$$3$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none");
  };
  $DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $DvtRatingGaugeEventManager$$ ? this.$SetOptions$($DvtRatingGaugeEventManager$$) : this.$Options$ || this.$SetOptions$(null);
    this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort($DvtGauge$$.$_thresholdComparator$));
    isNaN($DvtRatingGaugePeer$$) || isNaN($DvtRatingGaugeDefaults$$) || (this.$_bResizeRender$ = 0 != this.$Width$ && this.$Width$ != $DvtRatingGaugePeer$$ || 0 != this.$Height$ && this.$Height$ != $DvtRatingGaugeDefaults$$ ? !0 : !1, this.$Width$ = $DvtRatingGaugePeer$$, this.$Height$ = $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = this.$__shapes$;
    this.$__shapes$ = [];
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$Container$(this.$getCtx$());
    this.$addChildAt$($DvtRatingGaugePeer$$, 0);
    this.$Render$($DvtRatingGaugePeer$$, this.$Width$, this.$Height$);
    this.$_setAnimation$($DvtRatingGaugePeer$$, null != $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, this.$Width$, this.$Height$);
    this.$_editingOverlay$ && (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$), this.$getEventManager$().$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), !0));
    this.$UpdateAriaAttributes$();
    this.$_bStaticRendering$ || this.$Options$.readOnly || ($DvtRatingGaugePeer$$.$setAriaRole$("slider"), $DvtRatingGaugePeer$$.$setAriaProperty$("valuemin", this.$Options$.min), $DvtRatingGaugePeer$$.$setAriaProperty$("valuemax", this.$Options$.max), $DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $DvtRatingGaugePeer$$.$setAriaProperty$("valuenow", $DvtRatingGaugeEventManager$$), $DvtRatingGaugeDefaults$$ = $DvtGaugeRenderer$$.$getTooltipString$(this), 
    $dvt$$3$$.$Agent$.$isTouchDevice$() && (this.$_container$.$setAriaProperty$("live", "assertive"), $DvtRatingGaugeEventManager$$ != $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$ + $dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER") + $DvtRatingGaugeDefaults$$)), $DvtRatingGaugeEventManager$$ != $DvtRatingGaugeDefaults$$ && $DvtRatingGaugePeer$$.$setAriaProperty$("label", $DvtRatingGaugeDefaults$$), this.$_renderCount$ = 
    null != this.$_renderCount$ ? this.$_renderCount$ + 1 : 0, $DvtRatingGaugeEventManager$$ = this.getId() + "_" + this.$_renderCount$, $DvtRatingGaugePeer$$.setId($DvtRatingGaugeEventManager$$), this.$getCtx$().$setActiveElement$($DvtRatingGaugePeer$$));
    this.$Options$._selectingCursor && this.setCursor("pointer");
    this.$Animation$ || this.$RenderComplete$();
  };
  $DvtGauge$$.prototype.$__getLogicalObject$ = function $$DvtGauge$$$$$__getLogicalObject$$() {
    var $DvtRatingGaugeEventManager$$ = this.$Options$.tooltip, $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$ ? $DvtRatingGaugeEventManager$$.renderer : null, $DvtRatingGaugeEventManager$$ = $DvtGaugeStyleUtils$$.$getColor$(this);
    if ($DvtRatingGaugePeer$$) {
      var $DvtRatingGaugeDefaults$$ = {component:this.$Options$._widgetConstructor, label:$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), color:$DvtRatingGaugeEventManager$$};
      return new $dvt$$3$$.$CustomDatatipPeer$(this.$getCtx$().$getTooltipManager$(), $DvtRatingGaugePeer$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    }
    $DvtRatingGaugePeer$$ = $DvtGaugeRenderer$$.$getTooltipString$(this);
    return new $dvt$$3$$.$SimpleObjPeer$(null, $DvtRatingGaugePeer$$, $DvtRatingGaugeEventManager$$);
  };
  $DvtGauge$$.prototype.$Render$ = function $$DvtGauge$$$$$Render$$() {
  };
  $DvtGauge$$.prototype.$_setAnimation$ = function $$DvtGauge$$$$$_setAnimation$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    this.$StopAnimation$();
    var $DvtDialGaugeDefaults$$ = !1, $DvtStatusMeterGaugeIndicator$$ = this.$_bEditing$ || this.$_bResizeRender$ ? "none" : this.$getOptions$().animationOnDataChange, $DvtGaugeKeyboardHandler$$ = this.$_bEditing$ || this.$_bResizeRender$ ? "none" : this.$getOptions$().animationOnDisplay, $DvtDialGaugeRenderer$$ = $dvt$$3$$.$StyleUtils$.$getTimeMilliseconds$(this.$getOptions$().animationDuration) / 1E3;
    if ($DvtGaugeKeyboardHandler$$ || $DvtStatusMeterGaugeIndicator$$) {
      $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$(0, 0, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ = this.$getCtx$(), this.$_container$ || "none" === $DvtGaugeKeyboardHandler$$ || null == this.$__shapes$[0] ? this.$_container$ && "none" != $DvtStatusMeterGaugeIndicator$$ && $DvtRatingGaugePeer$$ && null != this.$__shapes$[0] && ((this.$Animation$ = $dvt$$3$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$($DvtStatusMeterGaugeCircularIndicator$$, 
      $DvtStatusMeterGaugeIndicator$$, this.$_container$, $DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeRenderer$$)) ? $DvtDialGaugeDefaults$$ = !0 : this.$Animation$ = this.$CreateAnimationOnDataChange$($DvtRatingGaugeDefaults$$, this.$__shapes$, $DvtDialGaugeRenderer$$)) : (this.$Animation$ = $dvt$$3$$.$BlackBoxAnimationHandler$.$getInAnimation$($DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$, $DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeRenderer$$), 
      this.$Animation$ || (this.$Animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $DvtGaugeKeyboardHandler$$, $DvtDialGaugeRenderer$$))), !$DvtDialGaugeDefaults$$ && this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$()), this.$Animation$ && (this.$Animation$.play(), this.$Animation$.$setOnEnd$(this.$_onAnimationEnd$, this)), $DvtDialGaugeDefaults$$ && (this.$_oldContainer$ = this.$_container$), this.$_container$ = $DvtRatingGaugeEventManager$$;
    }
  };
  $DvtGauge$$.prototype.$CreateAnimationOnDisplay$ = function $$DvtGauge$$$$$CreateAnimationOnDisplay$$() {
    return null;
  };
  $DvtGauge$$.prototype.$CreateAnimationOnDataChange$ = function $$DvtGauge$$$$$CreateAnimationOnDataChange$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    for (var $DvtDialGaugeIndicator$$ = [], $DvtStatusMeterGaugeCircularIndicator$$ = 0;$DvtStatusMeterGaugeCircularIndicator$$ < $DvtRatingGaugeEventManager$$.length;$DvtStatusMeterGaugeCircularIndicator$$++) {
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugePeer$$[$DvtStatusMeterGaugeCircularIndicator$$], $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeEventManager$$[$DvtStatusMeterGaugeCircularIndicator$$].$getAnimationParams$(), $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeDefaults$$.$getAnimationParams$();
      $DvtDialGaugeDefaults$$.$setAnimationParams$($DvtStatusMeterGaugeIndicator$$);
      $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$CustomAnimation$(this.$getCtx$(), $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$);
      $DvtStatusMeterGaugeIndicator$$.$_animator$.$addProp$($dvt$$3$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$.$getAnimationParams$, $DvtDialGaugeDefaults$$.$setAnimationParams$, $DvtGaugeKeyboardHandler$$);
      $DvtDialGaugeIndicator$$.push($DvtStatusMeterGaugeIndicator$$);
    }
    return new $dvt$$3$$.$ParallelPlayable$(this.$getCtx$(), $DvtDialGaugeIndicator$$);
  };
  $DvtGauge$$.prototype.$GetValueAt$ = function $$DvtGauge$$$$$GetValueAt$$() {
    return null;
  };
  $DvtGauge$$.prototype.$renderUpdate$ = function $$DvtGauge$$$$$renderUpdate$$() {
    this.$render$();
    this.$UpdateAriaLiveValue$(this.$_container$);
  };
  $DvtGauge$$.prototype.$UpdateAriaLiveValue$ = function $$DvtGauge$$$$$UpdateAriaLiveValue$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtRatingGaugePeer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugePeer$$ ? $DvtRatingGaugePeer$$ : this.$Options$.value, this);
    $DvtRatingGaugeEventManager$$.$setAriaProperty$("valuenow", $DvtRatingGaugePeer$$);
    $dvt$$3$$.$Agent$.$isTouchDevice$() && $DvtRatingGaugeEventManager$$.$setAriaProperty$("label", $DvtRatingGaugePeer$$);
  };
  $DvtGauge$$.prototype.$_onAnimationEnd$ = function $$DvtGauge$$$$$_onAnimationEnd$$() {
    this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
    this.$AnimationStopped$ || this.$RenderComplete$();
    this.$Animation$ = null;
    this.$AnimationStopped$ = !1;
  };
  $DvtGauge$$.prototype.$__processValueChangeStart$ = function $$DvtGauge$$$$$__processValueChangeStart$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    this.$_bEditing$ = !0;
    this.$_oldValue$ = this.$Options$.value;
    this.$__processValueChangeMove$($dvt$$3$$, $DvtRatingGaugeEventManager$$);
  };
  $DvtGauge$$.prototype.$__processValueChangeMove$ = function $$DvtGauge$$$$$__processValueChangeMove$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    null != this.$_oldValue$ && (this.$Options$.value = $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$)), this.$renderUpdate$(), this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$(this.$_oldValue$, this.$Options$.value, !1)));
  };
  $DvtGauge$$.prototype.$__processValueChangeEnd$ = function $$DvtGauge$$$$$__processValueChangeEnd$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    this.$__processValueChangeMove$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
    if ($dvt$$3$$.$Agent$.$isTouchDevice$()) {
      var $DvtRatingGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $DvtDialGaugeIndicator$$ = $DvtGaugeRenderer$$.$getTooltipString$(this);
      $DvtRatingGaugeDefaults$$ != $DvtDialGaugeIndicator$$ && ($DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$ + $dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER") + $DvtDialGaugeIndicator$$, this.$_container$.$setAriaProperty$("label", $DvtDialGaugeIndicator$$));
    }
    this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$(this.$_oldValue$, this.$Options$.value, !0));
    this.$_bEditing$ = !1;
    this.$_oldValue$ = null;
  };
  $DvtGauge$$.prototype.$__increaseValue$ = function $$DvtGauge$$$$$__increaseValue$$() {
    if (!this.$Options$.readOnly) {
      var $DvtRatingGaugeEventManager$$ = this.$Options$.value;
      this.$Options$.value = null != this.$Options$.step ? $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$Options$.value + this.$Options$.step) : Math.min(Math.max(this.$Options$.value + (this.$Options$.max - this.$Options$.min) / 100, this.$Options$.min), this.$Options$.max);
      this.$render$();
      this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeEventManager$$, this.$Options$.value, !0));
    }
  };
  $DvtGauge$$.prototype.$__decreaseValue$ = function $$DvtGauge$$$$$__decreaseValue$$() {
    if (!this.$Options$.readOnly) {
      var $DvtRatingGaugeEventManager$$ = this.$Options$.value;
      this.$Options$.value = null != this.$Options$.step ? $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$Options$.value - this.$Options$.step) : Math.min(Math.max(this.$Options$.value - (this.$Options$.max - this.$Options$.min) / 100, this.$Options$.min), this.$Options$.max);
      this.$render$();
      this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeEventManager$$, this.$Options$.value, !0));
    }
  };
  $DvtGauge$$.prototype.$CreateEventManager$ = function $$DvtGauge$$$$$CreateEventManager$$() {
    return new $DvtGaugeEventManager$$(this);
  };
  $DvtGauge$$.$_thresholdComparator$ = function $$DvtGauge$$$$_thresholdComparator$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    return null != $dvt$$3$$.max && null != $DvtRatingGaugeEventManager$$.max ? $dvt$$3$$.max - $DvtRatingGaugeEventManager$$.max : $dvt$$3$$.max ? -Infinity : Infinity;
  };
  $DvtGauge$$.prototype.$getAutomation$ = function $$DvtGauge$$$$$getAutomation$$() {
    return new $DvtGaugeAutomation$$(this);
  };
  $DvtGauge$$.prototype.$CreateKeyboardHandler$ = function $$DvtGauge$$$$$CreateKeyboardHandler$$($dvt$$3$$) {
    return new $DvtGaugeKeyboardHandler$$($dvt$$3$$, this);
  };
  $DvtGauge$$.prototype.$GetComponentDescription$ = function $$DvtGauge$$$$$GetComponentDescription$$() {
    return $dvt$$3$$.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", $dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "GAUGE");
  };
  $DvtGauge$$.prototype.$UpdateAriaAttributes$ = function $$DvtGauge$$$$$UpdateAriaAttributes$$() {
    if (!this.$_bStaticRendering$) {
      var $DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getTooltipString$(this);
      this.$IsParentRoot$() ? this.$Options$.readOnly ? (this.$getCtx$().$setAriaRole$("img"), this.$getCtx$().$setAriaLabel$($dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $dvt$$3$$.$Displayable$.$generateAriaLabel$($dvt$$3$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), $DvtRatingGaugeEventManager$$ ? [$DvtRatingGaugeEventManager$$] : 
      null)]))) : (this.$getCtx$().$setAriaRole$("application"), this.$getCtx$().$setAriaLabel$($dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $dvt$$3$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$())]))) : this.$Options$.readOnly && (this.$setAriaRole$("img"), this.$setAriaProperty$("label", $dvt$$3$$.$Displayable$.$generateAriaLabel$($dvt$$3$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), 
      $DvtRatingGaugeEventManager$$ ? [$DvtRatingGaugeEventManager$$] : null)));
    }
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeAutomation$$, $dvt$$3$$.$Automation$);
  $DvtGaugeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtGaugeAutomation$$$$$getDomElementForSubId$$($DvtRatingGaugeEventManager$$) {
    if ($DvtRatingGaugeEventManager$$ == $dvt$$3$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_gauge$);
    }
    if (0 == $DvtRatingGaugeEventManager$$.indexOf("item")) {
      var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.indexOf("["), $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.indexOf("]");
      if (0 < $DvtRatingGaugePeer$$ && 0 < $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeEventManager$$ = this.$_gauge$.$__getRatingGaugeItem$($DvtRatingGaugeEventManager$$.substring($DvtRatingGaugePeer$$ + 1, $DvtRatingGaugeDefaults$$)))) {
        return $DvtRatingGaugeEventManager$$.$getElem$();
      }
    }
    return null;
  };
  $DvtGaugeAutomation$$.prototype.getValue = function $$DvtGaugeAutomation$$$$getValue$() {
    return this.$_gauge$.$getOptions$().value;
  };
  $DvtGaugeAutomation$$.prototype.$getMetricLabel$ = function $$DvtGaugeAutomation$$$$$getMetricLabel$$() {
    return $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.getValue(), this.$_gauge$);
  };
  $dvt$$3$$.$Bundle$.$addDefaultStrings$($dvt$$3$$.$Bundle$.$GAUGE_PREFIX$, {});
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeDefaults$$, $dvt$$3$$.$BaseComponentDefaults$);
  $DvtGaugeDefaults$$.$SKIN_ALTA$ = {skin:$dvt$$3$$.$CSSStyle$.$SKIN_ALTA$, color:"#393737", metricLabel:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, _statusMessageStyle:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$), title:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, _thresholdColors:["#ed6647", "#fad55c", "#68c182"]};
  $DvtGaugeDefaults$$.$VERSION_1$ = {skin:$dvt$$3$$.$CSSStyle$.$SKIN_SKYROS$, min:0, max:100, center:{}, color:"#313842", borderColor:null, visualEffects:"auto", emptyText:null, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"auto", scaling:"auto", style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), textType:"number"}, _statusMessageStyle:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), 
  title:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), position:"auto"}, _thresholdColors:["#D62800", "#FFCF21", "#84AE31"], __layout:{outerGap:1, labelGap:5}};
  $DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($DvtRatingGaugeEventManager$$) {
    $DvtRatingGaugeEventManager$$ = {skyros:$dvt$$3$$.$JsonUtils$.$merge$($DvtRatingGaugeEventManager$$.skyros, $DvtGaugeDefaults$$.$VERSION_1$), alta:$dvt$$3$$.$JsonUtils$.$merge$($DvtRatingGaugeEventManager$$.alta, $DvtGaugeDefaults$$.$SKIN_ALTA$)};
    $DvtGaugeDefaults$$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$);
  };
  $DvtGaugeDefaults$$.$isSkyrosSkin$ = function $$DvtGaugeDefaults$$$$isSkyrosSkin$$($DvtRatingGaugeEventManager$$) {
    return $DvtRatingGaugeEventManager$$.$getOptions$().skin == $dvt$$3$$.$CSSStyle$.$SKIN_SKYROS$;
  };
  var $DvtGaugeDataUtils$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeDataUtils$$, $dvt$$3$$.$Obj$);
  $DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($dvt$$3$$) {
    var $DvtRatingGaugeEventManager$$ = $dvt$$3$$.$getOptions$();
    return $DvtRatingGaugeEventManager$$ && null != $DvtRatingGaugeEventManager$$.value && $DvtGaugeDataUtils$$.$hasValidData$($dvt$$3$$);
  };
  $DvtGaugeDataUtils$$.$hasValidData$ = function $$DvtGaugeDataUtils$$$$hasValidData$$($dvt$$3$$) {
    $dvt$$3$$ = $dvt$$3$$.$getOptions$();
    return Number($dvt$$3$$.min) < Number($dvt$$3$$.max);
  };
  $DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $dvt$$3$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = null != $DvtRatingGaugeEventManager$$ ? $DvtRatingGaugeEventManager$$ : $DvtRatingGaugePeer$$.value, $DvtRatingGaugePeer$$ = $DvtRatingGaugePeer$$.thresholds;
    if (!$DvtRatingGaugePeer$$) {
      return -1;
    }
    for (var $DvtDialGaugeIndicator$$ = 0;$DvtDialGaugeIndicator$$ < $DvtRatingGaugePeer$$.length;$DvtDialGaugeIndicator$$++) {
      if ($DvtRatingGaugeDefaults$$ <= $DvtRatingGaugePeer$$[$DvtDialGaugeIndicator$$].max) {
        return $DvtDialGaugeIndicator$$;
      }
    }
    return $DvtRatingGaugePeer$$.length - 1;
  };
  $DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $dvt$$3$$.$getOptions$().thresholds;
    return $DvtRatingGaugePeer$$ && 0 <= $DvtRatingGaugeEventManager$$ && $DvtRatingGaugeEventManager$$ < $DvtRatingGaugePeer$$.length ? $DvtRatingGaugePeer$$[$DvtRatingGaugeEventManager$$] : null;
  };
  $DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $dvt$$3$$.$getOptions$().referenceLines;
    return $DvtRatingGaugePeer$$ && 0 <= $DvtRatingGaugeEventManager$$ && $DvtRatingGaugeEventManager$$ < $DvtRatingGaugePeer$$.length ? $DvtRatingGaugePeer$$[$DvtRatingGaugeEventManager$$] : null;
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeEventManager$$, $dvt$$3$$.$EventManager$);
  $DvtGaugeEventManager$$.prototype.$OnMouseDown$ = function $$DvtGaugeEventManager$$$$$OnMouseDown$$($dvt$$3$$) {
    !1 === this.$_gauge$.$getOptions$().readOnly ? (this.$IsMouseEditing$ = !0, this.$hideTooltip$(), $dvt$$3$$ = this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY), this.$_gauge$.$__processValueChangeStart$($dvt$$3$$.x, $dvt$$3$$.y)) : $DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $dvt$$3$$);
  };
  $DvtGaugeEventManager$$.prototype.$OnMouseUp$ = function $$DvtGaugeEventManager$$$$$OnMouseUp$$($dvt$$3$$) {
    this.$IsMouseEditing$ ? (this.$IsMouseEditing$ = !1, $dvt$$3$$ = this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY), this.$_gauge$.$__processValueChangeEnd$($dvt$$3$$.x, $dvt$$3$$.y)) : $DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $dvt$$3$$);
  };
  $DvtGaugeEventManager$$.prototype.$OnMouseMove$ = function $$DvtGaugeEventManager$$$$$OnMouseMove$$($dvt$$3$$) {
    if (this.$IsMouseEditing$) {
      var $DvtRatingGaugeEventManager$$ = this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY);
      this.$_gauge$.$__processValueChangeMove$($DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y);
    }
    !this.$IsShowingTooltipWhileEditing$() && this.$IsMouseEditing$ || $DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $dvt$$3$$);
  };
  $DvtGaugeEventManager$$.prototype.$IsShowingTooltipWhileEditing$ = function $$DvtGaugeEventManager$$$$$IsShowingTooltipWhileEditing$$() {
    return !1;
  };
  $DvtGaugeEventManager$$.prototype.$PreEventBubble$ = function $$DvtGaugeEventManager$$$$$PreEventBubble$$($DvtRatingGaugeEventManager$$) {
    if ($dvt$$3$$.TouchEvent.$TOUCHSTART$ === $DvtRatingGaugeEventManager$$.type && !1 === this.$_gauge$.$getOptions$().readOnly) {
      this.$IsMouseEditing$ = !0;
      var $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($DvtRatingGaugeEventManager$$.touches[0].pageX, $DvtRatingGaugeEventManager$$.touches[0].pageY);
      this.$_gauge$.$__processValueChangeStart$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y);
      $DvtRatingGaugeEventManager$$.preventDefault();
    } else {
      $dvt$$3$$.TouchEvent.$TOUCHMOVE$ === $DvtRatingGaugeEventManager$$.type && this.$IsMouseEditing$ ? ($DvtRatingGaugePeer$$ = this.$GetRelativePosition$($DvtRatingGaugeEventManager$$.touches[0].pageX, $DvtRatingGaugeEventManager$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y), $DvtRatingGaugeEventManager$$.preventDefault()) : $dvt$$3$$.TouchEvent.$TOUCHEND$ === $DvtRatingGaugeEventManager$$.type && this.$IsMouseEditing$ && (this.$IsMouseEditing$ = 
      !1, $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($DvtRatingGaugeEventManager$$.changedTouches[0].pageX, $DvtRatingGaugeEventManager$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y), $DvtRatingGaugeEventManager$$.preventDefault());
    }
    this.$IsMouseEditing$ && !this.$IsShowingTooltipWhileEditing$() || $DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $DvtRatingGaugeEventManager$$);
  };
  $DvtGaugeEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtGaugeEventManager$$$$$ProcessKeyboardEvent$$($DvtRatingGaugeEventManager$$) {
    if (!this.$KeyboardHandler$) {
      return !1;
    }
    this.$KeyboardHandler$.$processKeyDown$($DvtRatingGaugeEventManager$$);
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.keyCode;
    if ($DvtRatingGaugePeer$$ == $dvt$$3$$.KeyboardEvent.$UP_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$3$$.KeyboardEvent.$LEFT_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$3$$.KeyboardEvent.$DOWN_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$3$$.KeyboardEvent.$RIGHT_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$3$$.KeyboardEvent.$TAB$) {
      $DvtRatingGaugePeer$$ = this.$_gauge$.$getCtx$().$getStageAbsolutePosition$(), this.$ProcessObjectTooltip$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y, this.$_gauge$.$__getLogicalObject$(), this.$_gauge$);
    }
    return !1;
  };
  $DvtGaugeEventManager$$.prototype.$OnBlur$ = function $$DvtGaugeEventManager$$$$$OnBlur$$($dvt$$3$$) {
    $DvtGaugeEventManager$$.$superclass$.$OnBlur$.call(this, $dvt$$3$$);
    this.$hideTooltip$();
  };
  $DvtGaugeEventManager$$.prototype.$GetRelativePosition$ = function $$DvtGaugeEventManager$$$$$GetRelativePosition$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = this.$getCtx$().$pageToStageCoords$($dvt$$3$$, $DvtRatingGaugeEventManager$$);
    return this.$_gauge$.$stageToLocal$($DvtRatingGaugePeer$$);
  };
  $DvtGaugeEventManager$$.prototype.$UpdateActiveElement$ = function $$DvtGaugeEventManager$$$$$UpdateActiveElement$$() {
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeKeyboardHandler$$, $dvt$$3$$.$KeyboardHandler$);
  $DvtGaugeKeyboardHandler$$.prototype.Init = function $$DvtGaugeKeyboardHandler$$$$Init$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    $DvtGaugeKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$3$$);
    this.$_gauge$ = $DvtRatingGaugeEventManager$$;
  };
  $DvtGaugeKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtGaugeKeyboardHandler$$$$$processKeyDown$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.keyCode, $DvtRatingGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isRightToLeft$(this.$_gauge$.$getCtx$());
    if ($DvtRatingGaugePeer$$ == $dvt$$3$$.KeyboardEvent.$UP_ARROW$ || $DvtRatingGaugePeer$$ == ($DvtRatingGaugeDefaults$$ ? $dvt$$3$$.KeyboardEvent.$LEFT_ARROW$ : $dvt$$3$$.KeyboardEvent.$RIGHT_ARROW$)) {
      this.$_gauge$.$__increaseValue$(), $dvt$$3$$.$EventManager$.$consumeEvent$($DvtRatingGaugeEventManager$$);
    } else {
      if ($DvtRatingGaugePeer$$ == $dvt$$3$$.KeyboardEvent.$DOWN_ARROW$ || $DvtRatingGaugePeer$$ == ($DvtRatingGaugeDefaults$$ ? $dvt$$3$$.KeyboardEvent.$RIGHT_ARROW$ : $dvt$$3$$.KeyboardEvent.$LEFT_ARROW$)) {
        this.$_gauge$.$__decreaseValue$(), $dvt$$3$$.$EventManager$.$consumeEvent$($DvtRatingGaugeEventManager$$);
      }
    }
  };
  var $DvtGaugeStyleUtils$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeStyleUtils$$, $dvt$$3$$.$Obj$);
  $DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
  $DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
  $DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:80, y:86, width:40, height:34}, indicatorLength:.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ALTA_DOME$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:82, y:133, width:36, height:34}, indicatorLength:.85, tickLabelHeight:20, tickLabelWidth:30, radius:61, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ = {startAngle:195.5, angleExtent:210.8, anchorX:100, anchorY:100, metricLabelBounds:{x:84, y:135, width:32, height:35}, indicatorLength:.98, tickLabelHeight:20, tickLabelWidth:30, radius:63, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ = {startAngle:207.6, angleExtent:235, anchorX:100, anchorY:95.8, metricLabelBounds:{x:83, y:125, width:34, height:40}, indicatorLength:1.05, tickLabelHeight:20, tickLabelWidth:30, radius:64, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:.82, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_LIGHT_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:70, width:41, height:39}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ = {startAngle:211, angleExtent:242, anchorX:100, anchorY:91.445, metricLabelBounds:{x:78, y:75, width:44, height:38}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ = {startAngle:220.5, angleExtent:261.5, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_DARK_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:73, width:40, height:36}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:99.5, metricLabelBounds:{x:80, y:83, width:41, height:36}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ = {anchorX:42, anchorY:510};
  $DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$ = {anchorX:187, anchorY:388};
  $DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ = {anchorX:227, anchorY:425};
  $DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ = {anchorX:227, anchorY:425};
  $DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    return !$DvtDialGaugeIndicator$$ || $DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$ && !($DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$ && "onIndicator" == $DvtRatingGaugePeer$$.thresholdDisplay) ? $DvtRatingGaugePeer$$.color : $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$);
  };
  $DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$);
    return ($DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$)) && $DvtRatingGaugeDefaults$$.borderColor && (!($DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$) || $DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$ && "onIndicator" == $DvtRatingGaugePeer$$.thresholdDisplay) ? $DvtRatingGaugeDefaults$$.borderColor : $DvtRatingGaugePeer$$.borderColor;
  };
  $DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    return !$DvtDialGaugeIndicator$$ || $DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$ && !($DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$ && "onIndicator" != $DvtRatingGaugePeer$$.thresholdDisplay) ? $DvtRatingGaugePeer$$.plotArea.color : $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$);
  };
  $DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaBorderColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtRatingGaugePeer$$.plotArea.borderColor;
    return $DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$ && "circular" != $DvtRatingGaugePeer$$.orientation && null == $DvtRatingGaugeDefaults$$ ? "skyros" == $DvtRatingGaugePeer$$.skin ? "#C6C6C6" : "#D6DFE6" : $DvtRatingGaugeDefaults$$;
  };
  $DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    if ($DvtRatingGaugeEventManager$$.color) {
      return $DvtRatingGaugeEventManager$$.color;
    }
    $dvt$$3$$ = $dvt$$3$$.$getOptions$();
    return $dvt$$3$$._thresholdColors[$DvtRatingGaugePeer$$ % $dvt$$3$$._thresholdColors.length];
  };
  $DvtGaugeStyleUtils$$.$getDialBackground$ = function $$DvtGaugeStyleUtils$$$$getDialBackground$$($dvt$$3$$) {
    return "rectangleAlta" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ : "domeAlta" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ALTA_DOME$ : "circleAntique" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ : "rectangleAntique" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ : "domeAntique" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ : "circleLight" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ : "rectangleLight" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ : 
    "domeLight" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_DOME$ : "circleDark" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ : "rectangleDark" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ : "domeDark" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_DARK_DOME$ : $DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$;
  };
  $DvtGaugeStyleUtils$$.$getDialIndicator$ = function $$DvtGaugeStyleUtils$$$$getDialIndicator$$($dvt$$3$$) {
    return "needleAntique" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ : "needleLight" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ : "needleDark" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ : $DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$;
  };
  $DvtGaugeStyleUtils$$.$hasTitle$ = function $$DvtGaugeStyleUtils$$$$hasTitle$$($dvt$$3$$) {
    return !!$dvt$$3$$.title.text;
  };
  var $DvtGaugeRenderer$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeRenderer$$, $dvt$$3$$.$Obj$);
  $DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeIndicator$$.emptyText;
    $DvtStatusMeterGaugeCircularIndicator$$ || ($DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$Bundle$.$getTranslation$($DvtDialGaugeIndicator$$, "labelNoData", $dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "NO_DATA", null));
    $DvtGaugeDataUtils$$.$hasValidData$($DvtRatingGaugeEventManager$$) || ($DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$Bundle$.$getTranslation$($DvtDialGaugeIndicator$$, "labelInvalidData", $dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "INVALID_DATA", null));
    $DvtDialGaugeIndicator$$ = $DvtDialGaugeIndicator$$._statusMessageStyle;
    $DvtDialGaugeIndicator$$.$getStyle$("font-size") || $DvtDialGaugeIndicator$$.$setStyle$("font-size", "13px");
    if ($DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$) {
      var $DvtDialGaugeDefaults$$ = $DvtDialGaugeIndicator$$.$getStyle$("color");
      $DvtDialGaugeIndicator$$.$setStyle$("color", $DvtDialGaugeDefaults$$ ? $DvtDialGaugeDefaults$$ : "#333333");
    }
    $dvt$$3$$.$TextUtils$.$renderEmptyText$($DvtRatingGaugePeer$$, $DvtStatusMeterGaugeCircularIndicator$$, new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$), $DvtRatingGaugeEventManager$$.$getEventManager$(), $DvtDialGaugeIndicator$$);
  };
  $DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    return $DvtRatingGaugePeer$$.metricLabel.text ? $DvtRatingGaugePeer$$.metricLabel.text : $DvtGaugeRenderer$$.$_formatLabelValue$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$.metricLabel.converter, $DvtRatingGaugePeer$$.metricLabel.scaling, $DvtRatingGaugePeer$$.metricLabel.autoPrecision ? $DvtRatingGaugePeer$$.metricLabel.autoPrecision : "on", "percent" == $DvtRatingGaugePeer$$.metricLabel.textType);
  };
  $DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = null, $DvtDialGaugeIndicator$$ = "percent" == $DvtRatingGaugePeer$$.tickLabel.textType;
    "on" == $DvtRatingGaugePeer$$.tickLabel.rendered && $DvtRatingGaugePeer$$.tickLabel.converter && ($DvtRatingGaugeDefaults$$ = $DvtRatingGaugePeer$$.tickLabel.converter);
    var $DvtStatusMeterGaugeCircularIndicator$$ = null;
    "on" == $DvtRatingGaugePeer$$.tickLabel.rendered && $DvtRatingGaugePeer$$.tickLabel.scaling && ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugePeer$$.tickLabel.scaling);
    return $DvtGaugeRenderer$$.$_formatLabelValue$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugePeer$$.tickLabel.autoPrecision ? $DvtRatingGaugePeer$$.tickLabel.autoPrecision : "on", $DvtDialGaugeIndicator$$);
  };
  $DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeDefaults$$) {
    var $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugePeer$$.$getOptions$(), $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeIndicator$$.min, $DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeIndicator$$.max, $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeRenderer$$ - $DvtGaugeKeyboardHandler$$, $DvtLedGaugeDefaults$$ = null;
    isNaN($DvtStatusMeterGaugeDefaults$$) || ($DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$ / (1E3 > $DvtStatusMeterGaugeDefaults$$ ? 100 : 1E3));
    $DvtDialGaugeDefaults$$ && ($DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getFillPercentage$($DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$, !0));
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$LinearScaleAxisValueFormatter$($DvtRatingGaugePeer$$.$getCtx$(), $DvtGaugeKeyboardHandler$$, $DvtDialGaugeRenderer$$, $DvtLedGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugeEventManager$$ = $DvtRatingGaugeDefaults$$ && $DvtRatingGaugeDefaults$$.getAsString ? $DvtRatingGaugePeer$$.format($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$) : $DvtRatingGaugeDefaults$$ && $DvtRatingGaugeDefaults$$.format ? $DvtRatingGaugePeer$$.format($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$) : $DvtDialGaugeDefaults$$ ? Math.round(100 * $DvtRatingGaugeEventManager$$) : $DvtRatingGaugePeer$$.format($DvtRatingGaugeEventManager$$);
    return $DvtDialGaugeDefaults$$ ? String($DvtRatingGaugeEventManager$$) + "%" : $DvtRatingGaugeEventManager$$;
  };
  $DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $dvt$$3$$ = ($DvtRatingGaugePeer$$ - $DvtRatingGaugeEventManager$$) / ($dvt$$3$$.max - $dvt$$3$$.min);
    return $dvt$$3$$ = $DvtRatingGaugeDefaults$$ ? $dvt$$3$$ : Math.min(Math.max(0, $dvt$$3$$), 1);
  };
  $DvtGaugeRenderer$$.$getTooltipString$ = function $$DvtGaugeRenderer$$$$getTooltipString$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugePeer$$.value, $DvtRatingGaugeEventManager$$);
    return $DvtRatingGaugeDefaults$$ && null != $DvtRatingGaugeDefaults$$.shortDesc ? $DvtRatingGaugeDefaults$$.shortDesc : null != $DvtRatingGaugePeer$$.shortDesc ? $DvtRatingGaugePeer$$.shortDesc : $DvtRatingGaugePeer$$.title.text ? $dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtRatingGaugePeer$$.title.text, $DvtRatingGaugeEventManager$$]) : $DvtRatingGaugeEventManager$$;
  };
  $DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$) {
    var $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeRenderer$$ = !1;
    if ("on" == $DvtGaugeKeyboardHandler$$.metricLabel.rendered || $DvtStatusMeterGaugeIndicator$$ && "off" != $DvtGaugeKeyboardHandler$$.metricLabel.rendered) {
      $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtGaugeKeyboardHandler$$.value, $DvtRatingGaugeEventManager$$);
      var $DvtDialGaugeRenderer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtGaugeKeyboardHandler$$.min, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtGaugeKeyboardHandler$$.max, $DvtRatingGaugeEventManager$$);
      $DvtRatingGaugeEventManager$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
      $DvtRatingGaugeEventManager$$.$setCSSStyle$($DvtGaugeKeyboardHandler$$.metricLabel.style);
      $DvtGaugeKeyboardHandler$$ = ($DvtGaugeKeyboardHandler$$ = $DvtGaugeKeyboardHandler$$.metricLabel.style.$getStyle$("font-size")) ? parseInt($DvtGaugeKeyboardHandler$$) : null;
      $DvtGaugeKeyboardHandler$$ || ($DvtGaugeKeyboardHandler$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtStatusMeterGaugeIndicator$$, $DvtDialGaugeRenderer$$, $DvtStatusMeterGaugeDefaults$$], $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$.$setTextString$($DvtStatusMeterGaugeIndicator$$), $DvtRatingGaugeEventManager$$.$setFontSize$($DvtGaugeKeyboardHandler$$));
      "top" == $DvtDialGaugeDefaults$$ ? ($DvtRatingGaugeEventManager$$.$setY$($DvtRatingGaugeDefaults$$.y), $DvtRatingGaugeEventManager$$.$alignTop$()) : "middle" == $DvtDialGaugeDefaults$$ ? $dvt$$3$$.$TextUtils$.$centerTextVertically$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2) : "bottom" == $DvtDialGaugeDefaults$$ && ($DvtRatingGaugeEventManager$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$), $DvtRatingGaugeEventManager$$.$alignBottom$());
      "center" == $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtRatingGaugeEventManager$$.$alignCenter$() : "left" == $DvtStatusMeterGaugeCircularIndicator$$ ? ($DvtRatingGaugeEventManager$$.$setX$($DvtRatingGaugeDefaults$$.x), $DvtRatingGaugeEventManager$$.$alignLeft$()) : "right" == $DvtStatusMeterGaugeCircularIndicator$$ && ($DvtRatingGaugeEventManager$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$), $DvtRatingGaugeEventManager$$.$alignRight$());
      null != $DvtDialGaugeIndicator$$ && $DvtRatingGaugeEventManager$$.$setSolidFill$($DvtDialGaugeIndicator$$);
      $DvtDialGaugeRenderer$$ = $dvt$$3$$.$TextUtils$.$fitText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugePeer$$);
    }
    return $DvtDialGaugeRenderer$$;
  };
  $DvtGaugeRenderer$$.$renderTitle$ = function $$DvtGaugeRenderer$$$$renderTitle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeIndicator$$ = !1;
    if ($DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeDefaults$$)) {
      var $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$.title.text, $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeDefaults$$.title.style, $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$MultilineText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeIndicator$$), $DvtDialGaugeRenderer$$ = $DvtGaugeKeyboardHandler$$.clone();
      $DvtDialGaugeDefaults$$.$setCSSStyle$($DvtGaugeKeyboardHandler$$);
      var $DvtStatusMeterGaugeDefaults$$ = $DvtGaugeKeyboardHandler$$.$getStyle$("font-size"), $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$ ? parseInt($DvtStatusMeterGaugeDefaults$$) : null;
      $DvtStatusMeterGaugeDefaults$$ || ($DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeIndicator$$, 0, 0), $DvtStatusMeterGaugeIndicator$$.$setCSSStyle$($DvtGaugeKeyboardHandler$$), $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeIndicator$$.$getOptimalFontSize$($DvtRatingGaugeDefaults$$), $DvtDialGaugeRenderer$$.$setFontSize$("font-size", $DvtStatusMeterGaugeDefaults$$.toString()));
      null != $DvtDialGaugeIndicator$$ && $DvtDialGaugeRenderer$$.$setStyle$("color", $DvtDialGaugeIndicator$$);
      $DvtDialGaugeDefaults$$.$setCSSStyle$($DvtDialGaugeRenderer$$);
      $DvtStatusMeterGaugeIndicator$$ = $dvt$$3$$.$TextUtils$.$fitText$($DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugeEventManager$$);
      $DvtRatingGaugeEventManager$$ = $dvt$$3$$.$TextUtils$.$getTextHeight$($DvtDialGaugeDefaults$$);
      "top" == $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtDialGaugeDefaults$$.$setY$($DvtRatingGaugeDefaults$$.y) : "bottom" == $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtDialGaugeDefaults$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ - $DvtRatingGaugeEventManager$$) : $DvtDialGaugeDefaults$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2 - $DvtRatingGaugeEventManager$$ / 2);
      $DvtDialGaugeDefaults$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2);
      $DvtDialGaugeDefaults$$.$alignCenter$();
      $DvtRatingGaugePeer$$.$addChild$($DvtDialGaugeDefaults$$);
    }
    return $DvtStatusMeterGaugeIndicator$$;
  };
  $DvtGaugeRenderer$$.$calcLabelFontSize$ = function $$DvtGaugeRenderer$$$$calcLabelFontSize$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    for (var $DvtRatingGaugeDefaults$$ = 0, $DvtDialGaugeIndicator$$ = null, $DvtStatusMeterGaugeCircularIndicator$$ = 0, $DvtDialGaugeDefaults$$ = 0;$DvtDialGaugeDefaults$$ < $dvt$$3$$.length;$DvtDialGaugeDefaults$$++) {
      $DvtRatingGaugeEventManager$$.$setTextString$($dvt$$3$$[$DvtDialGaugeDefaults$$]), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$measureDimensions$().$w$, $DvtStatusMeterGaugeCircularIndicator$$ > $DvtRatingGaugeDefaults$$ && ($DvtDialGaugeIndicator$$ = $dvt$$3$$[$DvtDialGaugeDefaults$$], $DvtRatingGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$);
    }
    $DvtRatingGaugeEventManager$$.$setTextString$($DvtDialGaugeIndicator$$);
    return $DvtRatingGaugeEventManager$$.$getOptimalFontSize$($DvtRatingGaugePeer$$);
  };
  $DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = Number($dvt$$3$$.step);
    if ($DvtRatingGaugePeer$$ && 0 < $DvtRatingGaugePeer$$) {
      var $DvtRatingGaugeDefaults$$ = ($DvtRatingGaugeEventManager$$ - $dvt$$3$$.min) / $DvtRatingGaugePeer$$;
      return .5 < $DvtRatingGaugeDefaults$$ ? Math.max(Math.min($dvt$$3$$.max, Math.round($DvtRatingGaugeDefaults$$) * $DvtRatingGaugePeer$$ + $dvt$$3$$.min), $dvt$$3$$.min) : $dvt$$3$$.min;
    }
    return $DvtRatingGaugeEventManager$$;
  };
  $dvt$$3$$.$LedGauge$ = function $$dvt$$3$$$$LedGauge$$() {
  };
  $dvt$$3$$.$Obj$.$createSubclass$($dvt$$3$$.$LedGauge$, $DvtGauge$$);
  $dvt$$3$$.$LedGauge$.newInstance = function $$dvt$$3$$$$LedGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    var $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$LedGauge$;
    $DvtStatusMeterGaugeCircularIndicator$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    return $DvtStatusMeterGaugeCircularIndicator$$;
  };
  $dvt$$3$$.$LedGauge$.prototype.Init = function $$dvt$$3$$$$LedGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $dvt$$3$$.$LedGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    this.$Defaults$ = new $DvtLedGaugeDefaults$$;
  };
  $dvt$$3$$.$LedGauge$.prototype.$SetOptions$ = function $$dvt$$3$$$$LedGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    $dvt$$3$$.$LedGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$));
    "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
    "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
    this.$Options$.readOnly = !0;
  };
  $dvt$$3$$.$LedGauge$.prototype.$Render$ = function $$dvt$$3$$$$LedGauge$$$$Render$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtLedGaugeRenderer$$.$render$(this, $dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtLedGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtLedGaugeDefaults$$.$VERSION_1$ = {type:"circle"};
  var $DvtLedGaugeRenderer$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtLedGaugeRenderer$$, $dvt$$3$$.$Obj$);
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z";
  $DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, .1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -.06, -47.59];
  $DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z";
  $DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
  $DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ = "M -0.06059525142297417 -50.86842065108466 C -11.4496388584463 -50.86842065108466 -20.708163169810554 -39.024253028220556 -20.708163169810554 -24.413724255650386 C -20.708163169810554 -9.803195483080515 -11.4496388584463 2.040972139783591 -0.06059525142297417 2.040972139783591 C 11.328499974520241 2.040972139783591 20.586972666964613 -9.803195483080515 20.586972666964613 -24.413724255650386 C 20.586972666964613 -39.024253028220556 11.328499974520241 -50.86842065108466 -0.06059525142297417 -50.86842065108466 z M -23.93434565705865 -2.959610715450779 C -30.908061721494278 3.3998402034127153 -42.00096758564793 18.817121073473572 -38.77478509839983 33.65756051481475 C -20.651382358034887 47.30044101688934 14.372054723529814 49.13162219665128 39.298831093003386 32.85101489300273 C 40.26410489318826 16.477493533721187 32.34060070450674 4.7883891459240715 23.167918656763206 -2.959610715450779 C 11.553661702670112 21.074158341552575 -11.029615708066558 16.237465556670102 -23.93434565705865 -2.959610715450779 z ";
  $DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    if ($DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$)) {
      var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.__layout.outerGap, $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$ && (0 <= $DvtStatusMeterGaugeCircularIndicator$$.size || 1 > $DvtStatusMeterGaugeCircularIndicator$$.size) ? Math.sqrt($DvtStatusMeterGaugeCircularIndicator$$.size) : 1;
      $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$ + ($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeDefaults$$) * (1 - $DvtStatusMeterGaugeIndicator$$) / 2, $DvtDialGaugeDefaults$$ + ($DvtDialGaugeIndicator$$ - 2 * $DvtDialGaugeDefaults$$) * (1 - $DvtStatusMeterGaugeIndicator$$) / 2, ($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeDefaults$$) * $DvtStatusMeterGaugeIndicator$$, ($DvtDialGaugeIndicator$$ - 2 * $DvtDialGaugeDefaults$$) * $DvtStatusMeterGaugeIndicator$$);
      $DvtLedGaugeRenderer$$.$_renderShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
      $DvtLedGaugeRenderer$$.$_renderVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
      $DvtDialGaugeDefaults$$ = !1;
      $DvtRatingGaugeDefaults$$ = $dvt$$3$$.$ColorUtils$.$getContrastingTextColor$($DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$));
      $DvtGaugeStyleUtils$$.$hasTitle$($DvtStatusMeterGaugeCircularIndicator$$) && ($DvtDialGaugeDefaults$$ = "middle", $DvtStatusMeterGaugeIndicator$$ = $DvtLedGaugeRenderer$$.$_getLabelBounds$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$), "on" == $DvtStatusMeterGaugeCircularIndicator$$.metricLabel.rendered && ($DvtStatusMeterGaugeIndicator$$.y += .6 * $DvtStatusMeterGaugeIndicator$$.$h$, $DvtStatusMeterGaugeIndicator$$.$h$ *= .4, $DvtDialGaugeDefaults$$ = "top"), $DvtDialGaugeDefaults$$ = 
      $dvt$$3$$.$Agent$.$isHighContrast$() || null == $DvtStatusMeterGaugeCircularIndicator$$.title.style.$getStyle$("color") ? $DvtGaugeRenderer$$.$renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeDefaults$$) : $DvtGaugeRenderer$$.$renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$, null, $DvtDialGaugeDefaults$$));
      "on" == $DvtStatusMeterGaugeCircularIndicator$$.metricLabel.rendered && ($DvtDialGaugeIndicator$$ = $DvtLedGaugeRenderer$$.$_getLabelBounds$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ = "middle", $DvtDialGaugeDefaults$$ && ($DvtDialGaugeIndicator$$.$h$ *= .55, $DvtStatusMeterGaugeIndicator$$ = "bottom"), $dvt$$3$$.$Agent$.$isHighContrast$() || null == $DvtStatusMeterGaugeCircularIndicator$$.metricLabel.style.$getStyle$("color") ? $DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, 
      $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, "center", $DvtStatusMeterGaugeIndicator$$) : $DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$, null, "center", $DvtStatusMeterGaugeIndicator$$));
    } else {
      $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$));
    }
  };
  $DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.type, $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$), $DvtGaugeKeyboardHandler$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($DvtRatingGaugeEventManager$$), $DvtDialGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 
    2, $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtLedGaugeDefaults$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$) / 2, $DvtStatusMeterGaugeRenderer$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$);
    $DvtLedGaugeRenderer$$.$_cache$ || ($DvtLedGaugeRenderer$$.$_cache$ = new $dvt$$3$$.Cache(50));
    var $DvtRatingGaugeRenderer$$ = Math.min($DvtRatingGaugeDefaults$$.$w$ / 100, $DvtRatingGaugeDefaults$$.$h$ / 100);
    "rectangle" == $DvtDialGaugeDefaults$$ ? $DvtDialGaugeRenderer$$ = new $dvt$$3$$.Rect($DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$) : "diamond" == $DvtDialGaugeDefaults$$ ? $DvtDialGaugeRenderer$$ = new $dvt$$3$$.$Polygon$($DvtDialGaugeIndicator$$, [$DvtDialGaugeRenderer$$ - $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$, $DvtDialGaugeRenderer$$, $DvtStatusMeterGaugeDefaults$$ - $DvtLedGaugeDefaults$$, 
    $DvtDialGaugeRenderer$$ + $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$, $DvtDialGaugeRenderer$$, $DvtStatusMeterGaugeDefaults$$ + $DvtLedGaugeDefaults$$]) : "circle" == $DvtDialGaugeDefaults$$ ? $DvtDialGaugeRenderer$$ = new $dvt$$3$$.$Circle$($DvtDialGaugeIndicator$$, $DvtDialGaugeRenderer$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$) : ("star" == $DvtDialGaugeDefaults$$ ? $DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$ ? $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : 
    $DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ : "triangle" == $DvtDialGaugeDefaults$$ ? $DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$ ? $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : $DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ : "arrow" == $DvtDialGaugeDefaults$$ ? $DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$ ? $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : $DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ : "human" == $DvtDialGaugeDefaults$$ ? $DvtDialGaugeRenderer$$ = 
    $DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ : ($DvtDialGaugeRenderer$$ = $DvtLedGaugeRenderer$$.$_cache$.get($DvtDialGaugeDefaults$$), $DvtDialGaugeRenderer$$ || ($DvtDialGaugeRenderer$$ = new $dvt$$3$$.$Path$($DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$), $DvtDialGaugeRenderer$$ = $dvt$$3$$.$DisplayableUtils$.$getDimForced$($DvtDialGaugeIndicator$$, $DvtDialGaugeRenderer$$), $DvtStatusMeterGaugeDefaults$$ = 100 / Math.max($DvtDialGaugeRenderer$$.$w$, $DvtDialGaugeRenderer$$.$h$), $DvtDialGaugeRenderer$$ = 
    $dvt$$3$$.$PathUtils$.$transformPath$($DvtDialGaugeDefaults$$, -$DvtStatusMeterGaugeDefaults$$ * ($DvtDialGaugeRenderer$$.x + $DvtDialGaugeRenderer$$.$w$ / 2), -$DvtStatusMeterGaugeDefaults$$ * ($DvtDialGaugeRenderer$$.y + $DvtDialGaugeRenderer$$.$h$ / 2), $DvtStatusMeterGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$), $DvtLedGaugeRenderer$$.$_cache$.put($DvtDialGaugeDefaults$$, $DvtDialGaugeRenderer$$))), ($DvtStatusMeterGaugeRenderer$$ || "triangle" != $DvtDialGaugeDefaults$$ && "arrow" != 
    $DvtDialGaugeDefaults$$) && "star" != $DvtDialGaugeDefaults$$ ? ($DvtDialGaugeRenderer$$ = $dvt$$3$$.$PathUtils$.$transformPath$($DvtDialGaugeRenderer$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtRatingGaugeRenderer$$, $DvtRatingGaugeRenderer$$), $DvtDialGaugeRenderer$$ = new $dvt$$3$$.$Path$($DvtDialGaugeIndicator$$, $DvtDialGaugeRenderer$$)) : ($DvtDialGaugeRenderer$$ = $dvt$$3$$.$PolygonUtils$.scale($DvtDialGaugeRenderer$$, 
    $DvtRatingGaugeRenderer$$, $DvtRatingGaugeRenderer$$), $DvtDialGaugeRenderer$$ = $dvt$$3$$.$PolygonUtils$.translate($DvtDialGaugeRenderer$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2), $DvtDialGaugeRenderer$$ = new $dvt$$3$$.$Polygon$($DvtDialGaugeIndicator$$, $DvtDialGaugeRenderer$$)));
    $DvtStatusMeterGaugeRenderer$$ || "none" == $DvtStatusMeterGaugeCircularIndicator$$.visualEffects ? $DvtDialGaugeRenderer$$.$setSolidFill$($DvtStatusMeterGaugeIndicator$$) : ($DvtDialGaugeIndicator$$ = [$dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtStatusMeterGaugeIndicator$$, -.09, .04), $dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtStatusMeterGaugeIndicator$$, -.04, -.05)], $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$ && 0 == $DvtStatusMeterGaugeCircularIndicator$$.rotation % 
    90 ? $DvtStatusMeterGaugeCircularIndicator$$.rotation : 0, $DvtDialGaugeRenderer$$.$setFill$(new $dvt$$3$$.$LinearGradientFill$("arrow" == $DvtDialGaugeDefaults$$ || "star" == $DvtDialGaugeDefaults$$ || "triangle" == $DvtDialGaugeDefaults$$ ? $DvtStatusMeterGaugeIndicator$$ - 90 : 270, $DvtDialGaugeIndicator$$, [1, 1], [0, 1])));
    $DvtGaugeKeyboardHandler$$ && $DvtDialGaugeRenderer$$.$setSolidStroke$($DvtGaugeKeyboardHandler$$);
    ($DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeRenderer$$ ? $DvtStatusMeterGaugeCircularIndicator$$.rotation + 90 : $DvtStatusMeterGaugeCircularIndicator$$.rotation) && ("arrow" == $DvtDialGaugeDefaults$$ || "triangle" == $DvtDialGaugeDefaults$$ || $DvtDialGaugeRenderer$$ instanceof $dvt$$3$$.$Path$ && "human" != $DvtDialGaugeDefaults$$) && ($DvtDialGaugeRenderer$$ = $DvtLedGaugeRenderer$$.$_rotate$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeRenderer$$, $DvtRatingGaugeDefaults$$));
    $DvtRatingGaugePeer$$.$addChild$($DvtDialGaugeRenderer$$);
  };
  $DvtLedGaugeRenderer$$.$_rotate$ = function $$DvtLedGaugeRenderer$$$$_rotate$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    $DvtRatingGaugeEventManager$$ = new $dvt$$3$$.$Container$($DvtRatingGaugeEventManager$$.$getCtx$());
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugeEventManager$$.$addChild$($DvtRatingGaugeDefaults$$);
    $DvtRatingGaugePeer$$ = $DvtStatusMeterGaugeCircularIndicator$$ && 0 == $DvtStatusMeterGaugeCircularIndicator$$.rotation % 90 ? $DvtStatusMeterGaugeCircularIndicator$$.rotation : 0;
    $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$Matrix$;
    $DvtStatusMeterGaugeCircularIndicator$$.rotate(Math.PI * $DvtRatingGaugePeer$$ / 180);
    $DvtRatingGaugeDefaults$$.$setMatrix$($DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getDimensions$();
    $DvtRatingGaugeDefaults$$ = $DvtDialGaugeIndicator$$.x + $DvtDialGaugeIndicator$$.$w$ / 2 - ($DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2);
    $DvtDialGaugeIndicator$$ = $DvtDialGaugeIndicator$$.y + $DvtDialGaugeIndicator$$.$h$ / 2 - ($DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ / 2);
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$Matrix$;
    $DvtRatingGaugePeer$$.translate($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeEventManager$$.$setMatrix$($DvtRatingGaugePeer$$);
    return $DvtRatingGaugeEventManager$$;
  };
  $DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $dvt$$3$$.$getOptions$(), $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.type;
    "none" != $DvtRatingGaugeDefaults$$.visualEffects && $DvtGaugeDefaults$$.$isSkyrosSkin$($dvt$$3$$) && ("circle" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayCircle$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : "diamond" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : "triangle" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($dvt$$3$$, 
    $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : "arrow" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayArrow$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : $DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$));
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = .04 * $DvtRatingGaugeDefaults$$.$w$, $DvtStatusMeterGaugeCircularIndicator$$ = .04 * $DvtRatingGaugeDefaults$$.$h$;
    $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 2 * $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugeEventManager$$ = new $dvt$$3$$.Rect($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$);
    $DvtRatingGaugeEventManager$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$LinearGradientFill$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [.75, .5, .15, 0, .2, .4, .2], [0, .05, .4, .6, .8, .9, 1]);
    $DvtRatingGaugeEventManager$$.$setFill$($DvtRatingGaugePeer$$);
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$w$, $DvtStatusMeterGaugeCircularIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$h$, $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 2 * $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.x + $DvtStatusMeterGaugeCircularIndicator$$.$w$ / 2;
    $DvtDialGaugeIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2;
    $DvtStatusMeterGaugeCircularIndicator$$ = Math.min($DvtStatusMeterGaugeCircularIndicator$$.$w$, $DvtStatusMeterGaugeCircularIndicator$$.$h$) / 2;
    $DvtRatingGaugeEventManager$$ = new $dvt$$3$$.$Polygon$($DvtRatingGaugeEventManager$$.$getCtx$(), [$DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$ - $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$ + $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$ + $DvtStatusMeterGaugeCircularIndicator$$]);
    $DvtRatingGaugeEventManager$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$LinearGradientFill$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [.75, .5, .15, 0, .2, .4, .2], [0, .05, .4, .6, .8, .9, 1]);
    $DvtRatingGaugeEventManager$$.$setFill$($DvtRatingGaugePeer$$);
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$w$, $DvtStatusMeterGaugeCircularIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$h$, $DvtDialGaugeDefaults$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 
    2 * $DvtStatusMeterGaugeCircularIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$, $DvtStatusMeterGaugeIndicator$$ = Math.min($DvtDialGaugeIndicator$$.$w$ / 100, $DvtDialGaugeIndicator$$.$h$ / 100), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$PolygonUtils$.scale($DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$PolygonUtils$.translate($DvtStatusMeterGaugeCircularIndicator$$, 
    $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
    $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Polygon$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtStatusMeterGaugeCircularIndicator$$ = ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$()) && 0 == $DvtStatusMeterGaugeCircularIndicator$$.rotation % 90 ? $DvtStatusMeterGaugeCircularIndicator$$.rotation : 0;
    $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$LinearGradientFill$($DvtDialGaugeDefaults$$ ? $DvtStatusMeterGaugeCircularIndicator$$ - 90 : 360 - $DvtStatusMeterGaugeCircularIndicator$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [.3, .55, 0, .25, .1], [0, .05, .4, .9, 1]);
    $DvtRatingGaugeDefaults$$.$setFill$($DvtDialGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_rotate$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$);
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$w$, $DvtStatusMeterGaugeCircularIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$h$, $DvtDialGaugeDefaults$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 
    2 * $DvtStatusMeterGaugeCircularIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$, $DvtStatusMeterGaugeIndicator$$ = Math.min($DvtDialGaugeIndicator$$.$w$ / 100, $DvtDialGaugeIndicator$$.$h$ / 100), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$PolygonUtils$.scale($DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$PolygonUtils$.translate($DvtStatusMeterGaugeCircularIndicator$$, 
    $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
    $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Polygon$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtStatusMeterGaugeCircularIndicator$$ = ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$()) && 0 == $DvtStatusMeterGaugeCircularIndicator$$.rotation % 90 ? $DvtStatusMeterGaugeCircularIndicator$$.rotation : 0;
    $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$LinearGradientFill$($DvtDialGaugeDefaults$$ ? $DvtStatusMeterGaugeCircularIndicator$$ - 90 : 360 - $DvtStatusMeterGaugeCircularIndicator$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [.3, .55, 0, .25, .1], [0, .05, .4, .9, 1]);
    $DvtRatingGaugeDefaults$$.$setFill$($DvtDialGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_rotate$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$);
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$w$, $DvtStatusMeterGaugeCircularIndicator$$ = .05 * $DvtRatingGaugeDefaults$$.$h$;
    $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 2 * $DvtStatusMeterGaugeCircularIndicator$$);
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtDialGaugeDefaults$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$) / 2, $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$Circle$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeDefaults$$);
    $DvtStatusMeterGaugeIndicator$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeIndicator$$);
    var $DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$RadialGradientFill$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, .25, .5], [.15, .7, .95], $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$ - .6 * $DvtDialGaugeDefaults$$, 1.5 * $DvtDialGaugeDefaults$$, [$DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$]);
    $DvtStatusMeterGaugeIndicator$$.$setFill$($DvtGaugeKeyboardHandler$$);
    $DvtStatusMeterGaugeIndicator$$ = .6 * $DvtDialGaugeDefaults$$;
    $DvtDialGaugeDefaults$$ *= .4;
    $DvtStatusMeterGaugeCircularIndicator$$ -= .3 * $DvtDialGaugeDefaults$$;
    $DvtRatingGaugeEventManager$$ = new $dvt$$3$$.$Oval$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$ - $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtDialGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$RadialGradientFill$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, .2, .5], [.6, .8, 1], $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$, [$DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$]);
    $DvtRatingGaugeEventManager$$.$setFill$($DvtRatingGaugePeer$$);
  };
  $DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.type, $DvtRatingGaugeDefaults$$ = 0 == $DvtRatingGaugeDefaults$$.rotation % 90 ? $DvtRatingGaugeDefaults$$.rotation : 0, $DvtStatusMeterGaugeCircularIndicator$$ = Math.min($DvtRatingGaugePeer$$.$w$, $DvtRatingGaugePeer$$.$h$), $DvtDialGaugeDefaults$$ = $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2 - $DvtStatusMeterGaugeCircularIndicator$$ / 2, $DvtStatusMeterGaugeIndicator$$ = 
    $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ / 2 - $DvtStatusMeterGaugeCircularIndicator$$ / 2, $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeCircularIndicator$$;
    "triangle" == $DvtDialGaugeIndicator$$ ? 0 == $DvtRatingGaugeDefaults$$ ? ($DvtDialGaugeDefaults$$ += .2 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += .25 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$ -= .4 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .3 * $DvtStatusMeterGaugeCircularIndicator$$) : 90 == $DvtRatingGaugeDefaults$$ ? ($DvtDialGaugeDefaults$$ += .05 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += 
    .2 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$ -= .3 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .4 * $DvtStatusMeterGaugeCircularIndicator$$) : 180 == $DvtRatingGaugeDefaults$$ ? ($DvtDialGaugeDefaults$$ += .2 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += .05 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$ -= .4 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .3 * $DvtStatusMeterGaugeCircularIndicator$$) : 
    270 == $DvtRatingGaugeDefaults$$ && ($DvtDialGaugeDefaults$$ += .25 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += .2 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$ -= .3 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .4 * $DvtStatusMeterGaugeCircularIndicator$$) : "arrow" == $DvtDialGaugeIndicator$$ ? 0 == $DvtRatingGaugeDefaults$$ ? ($DvtDialGaugeDefaults$$ += .2 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += 
    .2 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$ -= .4 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .4 * $DvtStatusMeterGaugeCircularIndicator$$) : 90 == $DvtRatingGaugeDefaults$$ ? ($DvtDialGaugeDefaults$$ += .05 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += .2 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$ -= .28 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .4 * $DvtStatusMeterGaugeCircularIndicator$$) : 
    180 == $DvtRatingGaugeDefaults$$ ? ($DvtDialGaugeDefaults$$ += .2 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += .2 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$ -= .4 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .4 * $DvtStatusMeterGaugeCircularIndicator$$) : 270 == $DvtRatingGaugeDefaults$$ && ($DvtDialGaugeDefaults$$ += .23 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += .2 * $DvtStatusMeterGaugeCircularIndicator$$, 
    $DvtGaugeKeyboardHandler$$ -= .28 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .4 * $DvtStatusMeterGaugeCircularIndicator$$) : "star" == $DvtDialGaugeIndicator$$ ? ($DvtDialGaugeDefaults$$ += .25 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += .25 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$ -= .5 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .4 * $DvtStatusMeterGaugeCircularIndicator$$) : 
    "diamond" == $DvtDialGaugeIndicator$$ ? ($DvtDialGaugeDefaults$$ += .15 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += .15 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$ -= .3 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .3 * $DvtStatusMeterGaugeCircularIndicator$$) : "rectangle" == $DvtDialGaugeIndicator$$ ? ($DvtDialGaugeDefaults$$ += .1 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += 
    .1 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$ -= .2 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .2 * $DvtStatusMeterGaugeCircularIndicator$$) : ($DvtDialGaugeDefaults$$ += .15 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$ += .15 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$ -= .3 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeRenderer$$ -= .3 * $DvtStatusMeterGaugeCircularIndicator$$);
    return new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtGaugeKeyboardHandler$$, $DvtDialGaugeRenderer$$);
  };
  $dvt$$3$$.$StatusMeterGauge$ = function $$dvt$$3$$$$StatusMeterGauge$$() {
  };
  $dvt$$3$$.$Obj$.$createSubclass$($dvt$$3$$.$StatusMeterGauge$, $DvtGauge$$);
  $dvt$$3$$.$StatusMeterGauge$.newInstance = function $$dvt$$3$$$$StatusMeterGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$StatusMeterGauge$;
    $DvtDialGaugeIndicator$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    return $DvtDialGaugeIndicator$$;
  };
  $dvt$$3$$.$StatusMeterGauge$.prototype.Init = function $$dvt$$3$$$$StatusMeterGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $dvt$$3$$.$StatusMeterGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    this.$Defaults$ = new $DvtStatusMeterGaugeDefaults$$;
    this.$__axisInfo$ = null;
  };
  $dvt$$3$$.$StatusMeterGauge$.prototype.$SetOptions$ = function $$dvt$$3$$$$StatusMeterGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    $dvt$$3$$.$StatusMeterGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$));
  };
  $dvt$$3$$.$StatusMeterGauge$.prototype.$Render$ = function $$dvt$$3$$$$StatusMeterGauge$$$$Render$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtStatusMeterGaugeRenderer$$.$render$(this, $dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
  };
  $dvt$$3$$.$StatusMeterGauge$.prototype.$CreateAnimationOnDisplay$ = function $$dvt$$3$$$$StatusMeterGauge$$$$CreateAnimationOnDisplay$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $DvtRatingGaugePeer$$ = [];
    for (var $DvtDialGaugeIndicator$$ = 0;$DvtDialGaugeIndicator$$ < $DvtRatingGaugeEventManager$$.length;$DvtDialGaugeIndicator$$++) {
      var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$[$DvtDialGaugeIndicator$$], $DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.$getAnimationParams$();
      "horizontal" == this.$Options$.orientation ? $DvtStatusMeterGaugeCircularIndicator$$.$setAnimationParams$([$DvtDialGaugeDefaults$$[0], $DvtDialGaugeDefaults$$[0], $DvtDialGaugeDefaults$$[2], $DvtDialGaugeDefaults$$[3]]) : "vertical" == this.$Options$.orientation ? $DvtStatusMeterGaugeCircularIndicator$$.$setAnimationParams$([$DvtDialGaugeDefaults$$[0], $DvtDialGaugeDefaults$$[1], $DvtDialGaugeDefaults$$[3], $DvtDialGaugeDefaults$$[3]]) : "circular" == this.$Options$.orientation && $DvtStatusMeterGaugeCircularIndicator$$.$setAnimationParams$([$DvtDialGaugeDefaults$$[0], 
      $DvtDialGaugeDefaults$$[1], 0, $DvtDialGaugeDefaults$$[3], $DvtDialGaugeDefaults$$[4]]);
      var $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$CustomAnimation$(this.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$);
      $DvtStatusMeterGaugeIndicator$$.$_animator$.$addProp$($dvt$$3$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$.$getAnimationParams$, $DvtStatusMeterGaugeCircularIndicator$$.$setAnimationParams$, $DvtDialGaugeDefaults$$);
      $DvtStatusMeterGaugeIndicator$$.$_animator$.$setEasing$(function($DvtRatingGaugeEventManager$$) {
        return $dvt$$3$$.$Easing$.$backOut$($DvtRatingGaugeEventManager$$, .7);
      });
      $DvtRatingGaugePeer$$.push($DvtStatusMeterGaugeIndicator$$);
    }
    return new $dvt$$3$$.$ParallelPlayable$(this.$getCtx$(), $DvtRatingGaugePeer$$);
  };
  $dvt$$3$$.$StatusMeterGauge$.prototype.$GetValueAt$ = function $$dvt$$3$$$$StatusMeterGauge$$$$GetValueAt$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = this.$Options$, $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$(this.$getCtx$());
    if ("horizontal" == $DvtRatingGaugeDefaults$$.orientation) {
      return this.$__axisInfo$.$getBoundedValueAt$($DvtRatingGaugeEventManager$$);
    }
    if ("vertical" == $DvtRatingGaugeDefaults$$.orientation) {
      return this.$__axisInfo$.$getBoundedValueAt$($DvtRatingGaugePeer$$);
    }
    if ("circular" == $DvtRatingGaugeDefaults$$.orientation) {
      var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeDefaults$$.angleExtent, $DvtDialGaugeDefaults$$ = Math.atan2($DvtRatingGaugePeer$$ - this.$cy$, $DvtRatingGaugeEventManager$$ - this.$cx$), $DvtDialGaugeIndicator$$ = $DvtDialGaugeIndicator$$ ? 180 - ($dvt$$3$$.Math.$radsToDegrees$($DvtDialGaugeDefaults$$) - $DvtRatingGaugeDefaults$$.startAngle) : $dvt$$3$$.Math.$radsToDegrees$($DvtDialGaugeDefaults$$) - (360 - $DvtRatingGaugeDefaults$$.startAngle), $DvtDialGaugeIndicator$$ = ($DvtDialGaugeIndicator$$ + 
      720) % 360, $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.min, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.max, $DvtDialGaugeDefaults$$ = $DvtDialGaugeIndicator$$ / $DvtStatusMeterGaugeCircularIndicator$$ * ($DvtRatingGaugeDefaults$$ - $DvtDialGaugeDefaults$$) + $DvtDialGaugeDefaults$$;
      $DvtDialGaugeIndicator$$ > $DvtStatusMeterGaugeCircularIndicator$$ && ($DvtDialGaugeDefaults$$ = .5 < ($DvtDialGaugeIndicator$$ - $DvtStatusMeterGaugeCircularIndicator$$) / (360 - $DvtStatusMeterGaugeCircularIndicator$$) ? 0 : $DvtRatingGaugeDefaults$$);
      return $DvtDialGaugeDefaults$$;
    }
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtStatusMeterGaugeDefaults$$.$SKIN_ALTA$ = {color:"#393737", metricLabel:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, plotArea:{color:"#E4E8EA"}};
  $DvtStatusMeterGaugeDefaults$$.$VERSION_1$ = {angleExtent:360, borderRadius:"auto", color:"#313842", indicatorSize:1, innerRadius:.7, metricLabel:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), position:"auto"}, orientation:"horizontal", plotArea:{color:"#AAAAAA", rendered:"auto", borderRadius:"auto"}, startAngle:90, thresholdDisplay:"onIndicator"};
  var $DvtStatusMeterGaugeRenderer$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeRenderer$$, $dvt$$3$$.$Obj$);
  $DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    if ($DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$)) {
      var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.__layout.outerGap;
      $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeDefaults$$, $DvtDialGaugeIndicator$$ - 2 * $DvtDialGaugeDefaults$$);
      "horizontal" == $DvtStatusMeterGaugeCircularIndicator$$.orientation || "vertical" == $DvtStatusMeterGaugeCircularIndicator$$.orientation ? ($DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($DvtStatusMeterGaugeCircularIndicator$$) && $DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$), $DvtStatusMeterGaugeRenderer$$.$_renderShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$)) : 
      "circular" == $DvtStatusMeterGaugeCircularIndicator$$.orientation && $DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    } else {
      $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$));
    }
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularGauge$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeDefaults$$.clone(), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtStatusMeterGaugeIndicator$$ = 0, $DvtGaugeKeyboardHandler$$ = null, $DvtDialGaugeRenderer$$ = $DvtDialGaugeIndicator$$.value, $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeIndicator$$.innerRadius, $DvtLedGaugeDefaults$$ = $DvtDialGaugeIndicator$$.thresholds, 
    $DvtRatingGaugeRenderer$$, $DvtGaugeEventManager$$ = null, $DvtGaugeDefaults$$ = $dvt$$3$$.Math.$TWO_PI$ - $dvt$$3$$.Math.$degreesToRads$($DvtDialGaugeIndicator$$.startAngle), $DvtGaugeAutomation$$ = $dvt$$3$$.Math.$degreesToRads$($DvtDialGaugeIndicator$$.angleExtent), $DvtGauge$$ = ($DvtGaugeDefaults$$ + $DvtGaugeAutomation$$) % (2 * Math.PI);
    $DvtRatingGaugeEventManager$$.$cx$ = $DvtRatingGaugeDefaults$$.$w$ / 2;
    $DvtRatingGaugeEventManager$$.$cy$ = $DvtRatingGaugeDefaults$$.$h$ / 2;
    $DvtGaugeAutomation$$ != 2 * Math.PI && ($DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$($DvtRatingGaugeEventManager$$, $DvtStatusMeterGaugeDefaults$$, $DvtGaugeDefaults$$, $DvtGaugeAutomation$$, $DvtGauge$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeDefaults$$), $DvtGaugeEventManager$$ = $DvtRatingGaugeEventManager$$.$maxInnerDiameter$);
    $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeRenderer$$ ? $DvtRatingGaugeRenderer$$ : Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$);
    var $DvtDialGaugeDefaults$$ = .5 * $DvtRatingGaugeRenderer$$ * $DvtStatusMeterGaugeDefaults$$, $DvtGauge$$ = .5 * $DvtRatingGaugeRenderer$$, $DvtGaugeDataUtils$$ = $DvtDialGaugeIndicator$$.indicatorSize;
    if ($DvtGaugeDataUtils$$ && 1 < $DvtGaugeDataUtils$$) {
      var $DvtLedGaugeRenderer$$ = (1 - 1 / $DvtGaugeDataUtils$$) / 2 * ($DvtGauge$$ - $DvtDialGaugeDefaults$$), $DvtDialGaugeDefaults$$ = $DvtDialGaugeDefaults$$ + $DvtLedGaugeRenderer$$, $DvtGauge$$ = $DvtGauge$$ - $DvtLedGaugeRenderer$$
    }
    $DvtLedGaugeRenderer$$ = "middle";
    $DvtGaugeKeyboardHandler$$ || ($DvtGaugeEventManager$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$) * $DvtStatusMeterGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2 - 3 / 7 * $DvtGaugeEventManager$$, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeEventManager$$, 6 / 7 * $DvtGaugeEventManager$$, 5 / 7 * $DvtGaugeEventManager$$));
    var $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = !1;
    if ($DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeIndicator$$)) {
      var $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = "middle", $thresholdColor_titleSpace$$3$$ = new $dvt$$3$$.$Rectangle$($DvtGaugeKeyboardHandler$$.x, $DvtGaugeKeyboardHandler$$.y, $DvtGaugeKeyboardHandler$$.$w$, $DvtGaugeKeyboardHandler$$.$h$);
      "off" != $DvtDialGaugeIndicator$$.metricLabel.rendered && ($thresholdColor_titleSpace$$3$$.y += .6 * $thresholdColor_titleSpace$$3$$.$h$, $thresholdColor_titleSpace$$3$$.$h$ *= .4, $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = "top");
      ($bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = $DvtGaugeRenderer$$.$renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $thresholdColor_titleSpace$$3$$, null, $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$)) && "off" != $DvtDialGaugeIndicator$$.metricLabel.rendered && ($DvtGaugeKeyboardHandler$$.$h$ *= .55, $DvtLedGaugeRenderer$$ = "bottom");
    }
    $DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtGaugeKeyboardHandler$$, null, "center", $DvtLedGaugeRenderer$$, !0);
    $DvtLedGaugeRenderer$$ = $DvtGaugeDefaults$$;
    $DvtStatusMeterGaugeIndicator$$ *= $DvtGaugeAutomation$$;
    $DvtGaugeKeyboardHandler$$ = $DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$($DvtRatingGaugeEventManager$$);
    if ($DvtLedGaugeDefaults$$ && "off" != $DvtDialGaugeIndicator$$.plotArea.rendered && "all" == $DvtDialGaugeIndicator$$.thresholdDisplay) {
      for ($bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = 0;$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ < $DvtLedGaugeDefaults$$.length;$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$++) {
        var $thresholdColor_titleSpace$$3$$ = $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $DvtLedGaugeDefaults$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$], $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$), $DvtStatusMeterGaugeIndicator$$ = $DvtLedGaugeDefaults$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].max < $DvtDialGaugeIndicator$$.max ? $DvtLedGaugeDefaults$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].max : 
        $DvtDialGaugeIndicator$$.max, $min$$14_thresholdborderColor$$ = 0 == $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ ? $DvtDialGaugeIndicator$$.min : $DvtLedGaugeDefaults$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ - 1].max, $DvtLedGaugeRenderer$$ = $DvtGaugeDefaults$$ + $DvtGaugeAutomation$$ * $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$.min, $min$$14_thresholdborderColor$$), $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, 
        $min$$14_thresholdborderColor$$, $DvtStatusMeterGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeIndicator$$ * $DvtGaugeAutomation$$, $min$$14_thresholdborderColor$$ = $DvtLedGaugeDefaults$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].borderColor;
        $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtLedGaugeRenderer$$, $DvtStatusMeterGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtGauge$$, $thresholdColor_titleSpace$$3$$, !0, $min$$14_thresholdborderColor$$ ? $min$$14_thresholdborderColor$$ : $DvtGaugeKeyboardHandler$$);
      }
    } else {
      "off" != $DvtDialGaugeIndicator$$.plotArea.rendered && "all" != $DvtDialGaugeIndicator$$.thresholdDisplay && ($DvtLedGaugeDefaults$$ = $DvtGaugeStyleUtils$$.$getPlotAreaColor$($DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$, $DvtGaugeAutomation$$, $DvtDialGaugeDefaults$$, $DvtGauge$$, $DvtLedGaugeDefaults$$, !0, $DvtGaugeKeyboardHandler$$));
    }
    $DvtDialGaugeDefaults$$ = $DvtRatingGaugeRenderer$$ * $DvtStatusMeterGaugeDefaults$$ * .5;
    $DvtGauge$$ = .5 * $DvtRatingGaugeRenderer$$;
    $DvtGaugeDataUtils$$ && 1 > $DvtGaugeDataUtils$$ && ($DvtStatusMeterGaugeDefaults$$ = (1 - $DvtGaugeDataUtils$$) / 2 * ($DvtGauge$$ - $DvtDialGaugeDefaults$$), $DvtDialGaugeDefaults$$ += $DvtStatusMeterGaugeDefaults$$, $DvtGauge$$ -= $DvtStatusMeterGaugeDefaults$$);
    $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$.min, $DvtDialGaugeRenderer$$);
    $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ * $DvtGaugeAutomation$$, $DvtDialGaugeDefaults$$, $DvtGauge$$, $DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$), !1);
    if ($DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeIndicator$$.referenceLines) {
      for ($DvtRatingGaugeRenderer$$ = 0;$DvtRatingGaugeRenderer$$ < $DvtStatusMeterGaugeDefaults$$.length;$DvtRatingGaugeRenderer$$++) {
        $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$[$DvtRatingGaugeRenderer$$].color ? $DvtStatusMeterGaugeDefaults$$[$DvtRatingGaugeRenderer$$].color : "black", $DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$[$DvtRatingGaugeRenderer$$].lineWidth ? $DvtStatusMeterGaugeDefaults$$[$DvtRatingGaugeRenderer$$].lineWidth : 2, $DvtGauge$$ = $DvtStatusMeterGaugeDefaults$$[$DvtRatingGaugeRenderer$$].lineStyle, $DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeDefaults$$[$DvtRatingGaugeRenderer$$].value, 
        $DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$ + $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$.min, $DvtDialGaugeRenderer$$) * $DvtGaugeAutomation$$, $DvtLedGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtGauge$$);
      }
    }
    $DvtDialGaugeIndicator$$.center.renderer && $DvtStatusMeterGaugeRenderer$$.$_renderCenterContent$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeEventManager$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtDialGaugeDefaults$$ = "vertical" == $DvtDialGaugeIndicator$$.orientation, $DvtGaugeKeyboardHandler$$ = {layout:{}};
    $DvtGaugeKeyboardHandler$$.layout.gapRatio = 0;
    $DvtGaugeKeyboardHandler$$.timeAxisType = "disabled";
    $DvtGaugeKeyboardHandler$$.position = $DvtDialGaugeDefaults$$ ? "left" : "bottom";
    $DvtGaugeKeyboardHandler$$.min = $DvtDialGaugeIndicator$$.min;
    $DvtGaugeKeyboardHandler$$.max = $DvtDialGaugeIndicator$$.max;
    $DvtGaugeKeyboardHandler$$.dataMin = $DvtDialGaugeIndicator$$.min;
    $DvtGaugeKeyboardHandler$$.dataMax = $DvtDialGaugeIndicator$$.max;
    $DvtGaugeKeyboardHandler$$.tickLabel = {rendered:"off"};
    $DvtGaugeKeyboardHandler$$ = $dvt$$3$$.$AxisInfo$.newInstance($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeKeyboardHandler$$, $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$.$__axisInfo$ = $DvtGaugeKeyboardHandler$$;
    var $DvtDialGaugeRenderer$$ = 0;
    0 >= $DvtDialGaugeIndicator$$.max ? $DvtDialGaugeRenderer$$ = $DvtDialGaugeIndicator$$.max : 0 <= $DvtDialGaugeIndicator$$.min && ($DvtDialGaugeRenderer$$ = $DvtDialGaugeIndicator$$.min);
    var $DvtStatusMeterGaugeDefaults$$ = $DvtGaugeKeyboardHandler$$.$getCoordAt$($DvtDialGaugeRenderer$$);
    "off" == $DvtDialGaugeIndicator$$.plotArea.rendered || "auto" == $DvtDialGaugeIndicator$$.plotArea.rendered && "onIndicator" == $DvtDialGaugeIndicator$$.thresholdDisplay || ($DvtStatusMeterGaugeDefaults$$ = $DvtGaugeKeyboardHandler$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.min));
    var $DvtLedGaugeDefaults$$ = $DvtGaugeKeyboardHandler$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.value), $DvtLedGaugeDefaults$$ = $DvtDialGaugeDefaults$$ ? Math.max($DvtRatingGaugeDefaults$$.y, Math.min($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$, $DvtLedGaugeDefaults$$)) : Math.max($DvtRatingGaugeDefaults$$.x, Math.min($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$, $DvtLedGaugeDefaults$$)), $DvtRatingGaugeRenderer$$ = $DvtDialGaugeIndicator$$.indicatorSize, 
    $DvtGaugeEventManager$$, $DvtGaugeRenderer$$, $DvtGaugeAutomation$$, $DvtGauge$$, $DvtGaugeDataUtils$$, $DvtLedGaugeRenderer$$, $drawnPlotSize_plotY2$$ = 0, $drawnPlotSize_plotY2$$ = 1 > $DvtRatingGaugeRenderer$$ ? 1 : $DvtRatingGaugeRenderer$$;
    $DvtGaugeAutomation$$ = 1 < $DvtRatingGaugeRenderer$$ ? 1 : $DvtRatingGaugeRenderer$$;
    $DvtDialGaugeDefaults$$ ? ($DvtDialGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.x + (1 - $DvtGaugeAutomation$$) / 2 * $DvtRatingGaugeDefaults$$.$w$ + .5, $DvtGaugeEventManager$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ * (1 + $DvtGaugeAutomation$$) / 2 - .5, $DvtGaugeAutomation$$ = $DvtStatusMeterGaugeDefaults$$ - .5, $DvtGaugeRenderer$$ = $DvtLedGaugeDefaults$$ + .5, $DvtGauge$$ = $DvtRatingGaugeDefaults$$.x + (1 - 1 / $drawnPlotSize_plotY2$$) / 2 * $DvtRatingGaugeDefaults$$.$w$, 
    $DvtGaugeDataUtils$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2, $DvtLedGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.y, $drawnPlotSize_plotY2$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$) : ($DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtStatusMeterGaugeDefaults$$ - .5 : $DvtStatusMeterGaugeDefaults$$ + .5, $DvtGaugeEventManager$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtLedGaugeDefaults$$ + 
    .5 : $DvtLedGaugeDefaults$$ - .5, $DvtGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.y + (1 - $DvtGaugeAutomation$$) / 2 * $DvtRatingGaugeDefaults$$.$h$ + .5, $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ * (1 + $DvtGaugeAutomation$$) / 2 - .5, $DvtGauge$$ = $DvtRatingGaugeDefaults$$.x, $DvtGaugeDataUtils$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$, $DvtLedGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.y + (1 - 1 / $drawnPlotSize_plotY2$$) / 
    2 * $DvtRatingGaugeDefaults$$.$h$, $drawnPlotSize_plotY2$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2);
    $DvtRatingGaugeRenderer$$ = !0;
    $DvtLedGaugeDefaults$$ == $DvtStatusMeterGaugeDefaults$$ && ($DvtDialGaugeDefaults$$ ? $DvtGaugeRenderer$$ = $DvtGaugeAutomation$$ : $DvtDialGaugeRenderer$$ = $DvtGaugeEventManager$$, $DvtRatingGaugeRenderer$$ = !1);
    var $borderColor$$23_refColor_shadow$$2_stroke$$57$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($DvtRatingGaugeEventManager$$), $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ = $DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$($DvtRatingGaugeEventManager$$), $thresholds$$4_value$$171$$ = $DvtDialGaugeIndicator$$.thresholds, $DvtLedGaugeDefaults$$ = $DvtDialGaugeDefaults$$ ? 0 : 270;
    if ($thresholds$$4_value$$171$$ && "off" != $DvtDialGaugeIndicator$$.plotArea.rendered && "all" == $DvtDialGaugeIndicator$$.thresholdDisplay) {
      for ($DvtStatusMeterGaugeDefaults$$ = $thresholds$$4_value$$171$$.length - 1;0 <= $DvtStatusMeterGaugeDefaults$$;$DvtStatusMeterGaugeDefaults$$--) {
        var $currentThresholdIndex$$1$$ = $DvtStatusMeterGaugeDefaults$$, $plotArea$$5_referenceLineSize$$ = $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGauge$$, $DvtGaugeDataUtils$$, $DvtLedGaugeRenderer$$, $drawnPlotSize_plotY2$$), $cp$$2_thresholdBorderColor$$ = new $dvt$$3$$.$ClipPath$("pacp" + $DvtRatingGaugeEventManager$$.getId());
        if ($DvtStatusMeterGaugeDefaults$$ == $thresholds$$4_value$$171$$.length - 1) {
          !$DvtDialGaugeDefaults$$ && $DvtStatusMeterGaugeCircularIndicator$$ ? $cp$$2_thresholdBorderColor$$.$addRect$($DvtGaugeKeyboardHandler$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max) + 1, 0, $DvtRatingGaugeDefaults$$.$w$ + 2, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0) : $cp$$2_thresholdBorderColor$$.$addRect$(0, 0, $DvtRatingGaugeDefaults$$.$w$ + 2, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0);
        } else {
          if ($DvtDialGaugeDefaults$$) {
            $cp$$2_thresholdBorderColor$$.$addRect$(0, $DvtGaugeKeyboardHandler$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), $DvtRatingGaugeDefaults$$.$w$ + 2, 1 * ($DvtDialGaugeIndicator$$.max - $thresholds$$4_value$$171$$[$thresholds$$4_value$$171$$.length - 2 - $currentThresholdIndex$$1$$].max) / Math.abs($DvtDialGaugeIndicator$$.min - $DvtDialGaugeIndicator$$.max) * $DvtRatingGaugeDefaults$$.$h$, 0, 0);
          } else {
            if ($DvtStatusMeterGaugeCircularIndicator$$) {
              var $thresholdMax$$ = null == $thresholds$$4_value$$171$$[$thresholds$$4_value$$171$$.length - 2 - $currentThresholdIndex$$1$$].max ? 100 : $thresholds$$4_value$$171$$[$thresholds$$4_value$$171$$.length - 2 - $currentThresholdIndex$$1$$].max;
              $cp$$2_thresholdBorderColor$$.$addRect$($DvtGaugeKeyboardHandler$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), 0, 1 * ($DvtDialGaugeIndicator$$.max - $thresholdMax$$) / Math.abs($DvtDialGaugeIndicator$$.min - $DvtDialGaugeIndicator$$.max) * $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0);
            } else {
              $cp$$2_thresholdBorderColor$$.$addRect$(0, 0, 1 * ($thresholds$$4_value$$171$$[$currentThresholdIndex$$1$$].max - $DvtDialGaugeIndicator$$.min) / Math.abs($DvtDialGaugeIndicator$$.min - $DvtDialGaugeIndicator$$.max) * $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0);
            }
          }
        }
        $plotArea$$5_referenceLineSize$$.$setClipPath$($cp$$2_thresholdBorderColor$$);
        if ($DvtStatusMeterGaugeCircularIndicator$$ || $DvtDialGaugeDefaults$$) {
          $currentThresholdIndex$$1$$ = $thresholds$$4_value$$171$$.length - 1 - $DvtStatusMeterGaugeDefaults$$;
        }
        $plotArea$$5_referenceLineSize$$.$setSolidFill$($DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $thresholds$$4_value$$171$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
        $cp$$2_thresholdBorderColor$$ = $thresholds$$4_value$$171$$[$currentThresholdIndex$$1$$].borderColor;
        $plotArea$$5_referenceLineSize$$.$setSolidStroke$($cp$$2_thresholdBorderColor$$ ? $cp$$2_thresholdBorderColor$$ : $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$);
        $DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $plotArea$$5_referenceLineSize$$, $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $thresholds$$4_value$$171$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $DvtLedGaugeDefaults$$);
      }
    } else {
      "off" == $DvtDialGaugeIndicator$$.plotArea.rendered || "auto" == $DvtDialGaugeIndicator$$.plotArea.rendered && "onIndicator" == $DvtDialGaugeIndicator$$.thresholdDisplay || "all" == $DvtDialGaugeIndicator$$.thresholdDisplay || ($plotArea$$5_referenceLineSize$$ = $DvtDialGaugeDefaults$$ ? $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGauge$$, $DvtGaugeDataUtils$$, $DvtGaugeKeyboardHandler$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), 
      $DvtGaugeKeyboardHandler$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.min)) : $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeKeyboardHandler$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.min), $DvtGaugeKeyboardHandler$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), $DvtLedGaugeRenderer$$, $drawnPlotSize_plotY2$$), $DvtStatusMeterGaugeDefaults$$ = $DvtGaugeStyleUtils$$.$getPlotAreaColor$($DvtRatingGaugeEventManager$$), 
      $plotArea$$5_referenceLineSize$$.$setSolidFill$($DvtStatusMeterGaugeDefaults$$), $plotArea$$5_referenceLineSize$$.$setSolidStroke$($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$), $DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $plotArea$$5_referenceLineSize$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$));
    }
    $DvtStatusMeterGaugeDefaults$$ = new $DvtStatusMeterGaugeIndicator$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeRenderer$$, $DvtGaugeEventManager$$, $DvtGaugeRenderer$$, $DvtGaugeAutomation$$);
    $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtStatusMeterGaugeDefaults$$);
    $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$);
    $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) || "none" == $DvtDialGaugeIndicator$$.visualEffects ? $DvtStatusMeterGaugeDefaults$$.$setSolidFill$($DvtStatusMeterGaugeCircularIndicator$$) : ($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ = [$dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtStatusMeterGaugeCircularIndicator$$, -.09, .04), $dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtStatusMeterGaugeCircularIndicator$$, -.04, -.05)], $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ = 
    new $dvt$$3$$.$LinearGradientFill$($DvtLedGaugeDefaults$$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$, [1, 1], [0, 1]), $DvtStatusMeterGaugeDefaults$$.$setFill$($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$));
    $borderColor$$23_refColor_shadow$$2_stroke$$57$$ && $DvtStatusMeterGaugeDefaults$$.$setSolidStroke$($borderColor$$23_refColor_shadow$$2_stroke$$57$$);
    $DvtRatingGaugeRenderer$$ && $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeDefaults$$);
    $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeRenderer$$, $DvtGaugeEventManager$$, $DvtGaugeRenderer$$, $DvtGaugeAutomation$$);
    $DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeRenderer$$, $DvtLedGaugeDefaults$$);
    if ($DvtLedGaugeDefaults$$ = $DvtDialGaugeIndicator$$.referenceLines) {
      for ($DvtStatusMeterGaugeDefaults$$ = 0;$DvtStatusMeterGaugeDefaults$$ < $DvtLedGaugeDefaults$$.length;$DvtStatusMeterGaugeDefaults$$++) {
        $borderColor$$23_refColor_shadow$$2_stroke$$57$$ = $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].color ? $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].color : "white", $thresholds$$4_value$$171$$ = $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].value, $DvtRatingGaugeRenderer$$ = $DvtDialGaugeIndicator$$.indicatorSize, $DvtDialGaugeDefaults$$ ? ($plotArea$$5_referenceLineSize$$ = ((1 - $DvtRatingGaugeRenderer$$) / 2 + $DvtRatingGaugeRenderer$$) * $DvtRatingGaugeDefaults$$.$w$, 
        $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ = $DvtRatingGaugeDefaults$$.x + (1 - $DvtRatingGaugeRenderer$$) / 4 * $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeRenderer$$ = $DvtGaugeKeyboardHandler$$.$getUnboundedCoordAt$($thresholds$$4_value$$171$$), $DvtRatingGaugeRenderer$$ = new $dvt$$3$$.$Line$($DvtRatingGaugeEventManager$$.$getCtx$(), $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$, $DvtRatingGaugeRenderer$$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ + 
        $plotArea$$5_referenceLineSize$$, $DvtRatingGaugeRenderer$$)) : ($plotArea$$5_referenceLineSize$$ = ((1 - $DvtRatingGaugeRenderer$$) / 2 + $DvtRatingGaugeRenderer$$) * $DvtRatingGaugeDefaults$$.$h$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ = $DvtGaugeKeyboardHandler$$.$getUnboundedCoordAt$($thresholds$$4_value$$171$$), $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.y + (1 - $DvtRatingGaugeRenderer$$) / 4 * $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugeRenderer$$ = 
        new $dvt$$3$$.$Line$($DvtRatingGaugeEventManager$$.$getCtx$(), $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$, $DvtRatingGaugeRenderer$$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$, $DvtRatingGaugeRenderer$$ + $plotArea$$5_referenceLineSize$$)), $borderColor$$23_refColor_shadow$$2_stroke$$57$$ = new $dvt$$3$$.$SolidStroke$($borderColor$$23_refColor_shadow$$2_stroke$$57$$, 1, $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].lineWidth ? $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].lineWidth : 
        2), $DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].lineStyle && $borderColor$$23_refColor_shadow$$2_stroke$$57$$.$setStyle$($dvt$$3$$.$Stroke$.$convertTypeString$($DvtLedGaugeDefaults$$[$DvtStatusMeterGaugeDefaults$$].lineStyle)), $DvtRatingGaugeRenderer$$.$setStroke$($borderColor$$23_refColor_shadow$$2_stroke$$57$$), $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeRenderer$$), $dvt$$3$$.$Agent$.$isPlatformIE$() || "none" == $DvtDialGaugeIndicator$$.visualEffects || ($borderColor$$23_refColor_shadow$$2_stroke$$57$$ = 
        new $dvt$$3$$.$Shadow$($dvt$$3$$.$ColorUtils$.$makeRGBA$(0, 0, 0, .8), .75, 3, 3, 50, 1, 2, !1, !1, !1), $DvtRatingGaugeRenderer$$.$addDrawEffect$($borderColor$$23_refColor_shadow$$2_stroke$$57$$));
      }
    }
    $DvtDialGaugeDefaults$$ = $DvtDialGaugeIndicator$$.metricLabel.position;
    "on" != $DvtDialGaugeIndicator$$.metricLabel.rendered || $DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($DvtDialGaugeIndicator$$) || $DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeIndicator$$) ? $DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeIndicator$$) && $DvtStatusMeterGaugeRenderer$$.$_renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeDefaults$$) : $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($DvtRatingGaugeEventManager$$, 
    $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeDefaults$$, {$x1$:$DvtDialGaugeRenderer$$, $x2$:$DvtGaugeEventManager$$, $y1$:$DvtGaugeRenderer$$, $y2$:$DvtGaugeAutomation$$}, {$x1$:$DvtGauge$$, $x2$:$DvtGaugeDataUtils$$, $y1$:$DvtLedGaugeRenderer$$, $y2$:$drawnPlotSize_plotY2$$});
  };
  $DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeDefaults$$) {
    var $DvtStatusMeterGaugeIndicator$$ = Math.min($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$), $DvtGaugeKeyboardHandler$$ = Math.min($DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = Math.abs($DvtRatingGaugeDefaults$$ - $DvtDialGaugeIndicator$$);
    $DvtStatusMeterGaugeCircularIndicator$$ = Math.abs($DvtDialGaugeDefaults$$ - $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    $DvtDialGaugeIndicator$$ = "vertical" == $DvtDialGaugeDefaults$$.orientation ? $DvtRatingGaugeDefaults$$ : $DvtStatusMeterGaugeCircularIndicator$$;
    $DvtRatingGaugeEventManager$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) ? "25%" : "15%";
    $DvtStatusMeterGaugeIndicator$$ = $dvt$$3$$.$PathUtils$.$rectangleWithBorderRadius$($DvtStatusMeterGaugeIndicator$$, $DvtGaugeKeyboardHandler$$, $DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, "auto" != $DvtDialGaugeDefaults$$.plotArea.borderRadius ? $DvtDialGaugeDefaults$$.plotArea.borderRadius : $DvtDialGaugeDefaults$$.borderRadius, $DvtDialGaugeIndicator$$, $DvtRatingGaugeEventManager$$);
    return new $dvt$$3$$.$Path$($DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    "none" != $DvtRatingGaugeEventManager$$.$getOptions$().visualEffects && $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) && ($DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$LinearGradientFill$($DvtStatusMeterGaugeCircularIndicator$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [.5, .3125, 0], [0, .3, 1]), $DvtRatingGaugeDefaults$$.$setFill$($DvtStatusMeterGaugeCircularIndicator$$), $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtRatingGaugeDefaults$$), $DvtRatingGaugeDefaults$$.$setMouseEnabled$(!1), 
    $DvtDialGaugeIndicator$$ && $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$));
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    $DvtRatingGaugeDefaults$$.$setMouseEnabled$(!1);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$);
    "none" != $DvtDialGaugeDefaults$$.visualEffects && ($DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) ? ($DvtRatingGaugeEventManager$$ = [$dvt$$3$$.$ColorUtils$.$getDarker$($DvtDialGaugeIndicator$$, .9), $DvtDialGaugeIndicator$$, $dvt$$3$$.$ColorUtils$.$getBrighter$($DvtDialGaugeIndicator$$)], $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$LinearGradientFill$($DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeEventManager$$, [1, 1, 1], [0, .04, .73])) : ($DvtRatingGaugeEventManager$$ = 
    [$dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtDialGaugeIndicator$$, -.04, -.05), $dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtDialGaugeIndicator$$, -.09, .04)], $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$LinearGradientFill$($DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeEventManager$$, [1, 1], [0, 1])), $DvtRatingGaugeDefaults$$.$setFill$($DvtStatusMeterGaugeCircularIndicator$$));
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelOutsidePlotArea$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtDialGaugeDefaults$$ = "vertical" == $DvtDialGaugeIndicator$$.orientation, $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), ""), $DvtGaugeKeyboardHandler$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.value, $DvtRatingGaugeEventManager$$), 
    $DvtDialGaugeRenderer$$ = $DvtDialGaugeIndicator$$.__layout.labelGap, $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeIndicator$$.metricLabel.style, $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$.$getStyle$("color"), $DvtLedGaugeDefaults$$ = $DvtLedGaugeDefaults$$ ? $DvtLedGaugeDefaults$$ : "#333333", $DvtStatusMeterGaugeRenderer$$ = null;
    $DvtStatusMeterGaugeIndicator$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$);
    $DvtStatusMeterGaugeIndicator$$.$setSolidFill$($DvtLedGaugeDefaults$$);
    if ($DvtDialGaugeDefaults$$ && "on" == $DvtDialGaugeIndicator$$.metricLabel.rendered) {
      var $DvtRatingGaugeRenderer$$ = 0 < $DvtDialGaugeIndicator$$.max ? $DvtDialGaugeIndicator$$.max : $DvtDialGaugeIndicator$$.min, $DvtRatingGaugeRenderer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugeRenderer$$, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeRenderer$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtRatingGaugeRenderer$$);
      $DvtStatusMeterGaugeRenderer$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$);
      $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y + .8 * $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugeDefaults$$.$w$, .2 * $DvtRatingGaugeDefaults$$.$h$);
      $DvtDialGaugeDefaults$$ = ($DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$.$getStyle$("font-size")) ? parseInt($DvtDialGaugeDefaults$$) : $DvtStatusMeterGaugeRenderer$$.$getOptimalFontSize$($DvtDialGaugeIndicator$$);
      $DvtStatusMeterGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.$measureDimensions$();
      $DvtRatingGaugeDefaults$$.$h$ -= $DvtStatusMeterGaugeRenderer$$.$h$;
      $DvtRatingGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.$w$;
      $DvtStatusMeterGaugeIndicator$$.$setFontSize$($DvtDialGaugeDefaults$$);
      $DvtStatusMeterGaugeIndicator$$.$setTextString$($DvtGaugeKeyboardHandler$$);
      $DvtStatusMeterGaugeIndicator$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2);
      $DvtStatusMeterGaugeIndicator$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$);
      $DvtRatingGaugeDefaults$$.$h$ -= $DvtDialGaugeRenderer$$;
      $DvtStatusMeterGaugeIndicator$$.$alignCenter$();
      $dvt$$3$$.$TextUtils$.$fitText$($DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugePeer$$);
    } else {
      if (!$DvtDialGaugeDefaults$$ && "on" == $DvtDialGaugeIndicator$$.metricLabel.rendered) {
        $DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$.$getStyle$("font-size");
        $DvtLedGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$);
        $DvtStatusMeterGaugeRenderer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.max, $DvtRatingGaugeEventManager$$);
        void 0 === $DvtDialGaugeDefaults$$ && 18 > $DvtRatingGaugeDefaults$$.$h$ && ($DvtDialGaugeDefaults$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtGaugeKeyboardHandler$$, $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeRenderer$$], $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$));
        $DvtDialGaugeDefaults$$ = $DvtDialGaugeDefaults$$ ? parseInt($DvtDialGaugeDefaults$$) : 13;
        $DvtStatusMeterGaugeIndicator$$.$setFontSize$($DvtDialGaugeDefaults$$);
        var $DvtGaugeEventManager$$;
        if (0 < $DvtDialGaugeIndicator$$.max || "off" != $DvtDialGaugeIndicator$$.plotArea.rendered || "auto" != $DvtDialGaugeIndicator$$.plotArea.rendered || "onIndicator" != $DvtDialGaugeIndicator$$.thresholdDisplay) {
          $DvtRatingGaugeRenderer$$ = 0 < $DvtDialGaugeIndicator$$.max ? $DvtDialGaugeIndicator$$.max : $DvtDialGaugeIndicator$$.min, $DvtRatingGaugeRenderer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugeRenderer$$, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeRenderer$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtRatingGaugeRenderer$$), $DvtStatusMeterGaugeRenderer$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$), $DvtStatusMeterGaugeRenderer$$.$setFontSize$($DvtDialGaugeDefaults$$), 
          $DvtStatusMeterGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.$measureDimensions$(), $DvtStatusMeterGaugeRenderer$$.$w$ = Math.min($DvtStatusMeterGaugeRenderer$$.$w$, $DvtRatingGaugeDefaults$$.$w$), $DvtGaugeEventManager$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtRatingGaugeDefaults$$.x + $DvtStatusMeterGaugeRenderer$$.$w$ : $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.$w$, $DvtStatusMeterGaugeCircularIndicator$$ && 
          ($DvtRatingGaugeDefaults$$.x += $DvtStatusMeterGaugeRenderer$$.$w$ + $DvtDialGaugeRenderer$$), $DvtRatingGaugeDefaults$$.$w$ -= $DvtStatusMeterGaugeRenderer$$.$w$ + $DvtDialGaugeRenderer$$;
        }
        if (0 > $DvtDialGaugeIndicator$$.min && "on" != $DvtDialGaugeIndicator$$.plotArea.rendered && ("auto" != $DvtDialGaugeIndicator$$.plotArea.rendered || "onIndicator" != $DvtDialGaugeIndicator$$.thresholdDisplay)) {
          $DvtStatusMeterGaugeRenderer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$);
          $DvtLedGaugeDefaults$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeRenderer$$);
          $DvtLedGaugeDefaults$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$);
          $DvtLedGaugeDefaults$$.$setFontSize$($DvtDialGaugeDefaults$$);
          $DvtStatusMeterGaugeDefaults$$ = $DvtLedGaugeDefaults$$.$measureDimensions$();
          if (0 > $DvtDialGaugeIndicator$$.value || 0 >= $DvtDialGaugeIndicator$$.max) {
            $DvtGaugeEventManager$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ : $DvtRatingGaugeDefaults$$.x + $DvtStatusMeterGaugeDefaults$$.$w$, $DvtRatingGaugeRenderer$$ = $DvtStatusMeterGaugeDefaults$$.$w$;
          }
          $DvtStatusMeterGaugeCircularIndicator$$ || ($DvtRatingGaugeDefaults$$.x += $DvtStatusMeterGaugeDefaults$$.$w$ + $DvtDialGaugeRenderer$$);
          $DvtRatingGaugeDefaults$$.$w$ -= $DvtStatusMeterGaugeDefaults$$.$w$ + $DvtDialGaugeRenderer$$;
        }
        $DvtStatusMeterGaugeIndicator$$.$setTextString$($DvtGaugeKeyboardHandler$$);
        $DvtStatusMeterGaugeIndicator$$.$setX$($DvtGaugeEventManager$$);
        $dvt$$3$$.$TextUtils$.$centerTextVertically$($DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
        $DvtStatusMeterGaugeIndicator$$.$alignRight$();
        $dvt$$3$$.$TextUtils$.$fitText$($DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeRenderer$$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugePeer$$);
      }
    }
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelInsidePlotArea$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtGaugeKeyboardHandler$$) {
    var $DvtDialGaugeRenderer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtLedGaugeDefaults$$ = "vertical" == $DvtDialGaugeRenderer$$.orientation, $DvtRatingGaugeRenderer$$ = "on" == $DvtDialGaugeRenderer$$.plotArea.rendered, $DvtGaugeEventManager$$ = "center", $DvtGaugeDefaults$$ = "middle", $DvtGaugeAutomation$$ = new $dvt$$3$$.$Rectangle$(Math.min($DvtDialGaugeDefaults$$.$x1$, 
    $DvtDialGaugeDefaults$$.$x2$), Math.min($DvtDialGaugeDefaults$$.$y1$, $DvtDialGaugeDefaults$$.$y2$), Math.abs($DvtDialGaugeDefaults$$.$x2$ - $DvtDialGaugeDefaults$$.$x1$), Math.abs($DvtDialGaugeDefaults$$.$y2$ - $DvtDialGaugeDefaults$$.$y1$)), $DvtDialGaugeRenderer$$ = $DvtDialGaugeRenderer$$.metricLabel.style.$getStyle$("color");
    "center" == $DvtStatusMeterGaugeCircularIndicator$$ ? ($DvtDialGaugeRenderer$$ = $DvtDialGaugeRenderer$$ ? $DvtDialGaugeRenderer$$ : $dvt$$3$$.$ColorUtils$.$getContrastingTextColor$($DvtDialGaugeIndicator$$), $DvtLedGaugeDefaults$$ ? ($DvtGaugeAutomation$$.$h$ -= $DvtGaugeAutomation$$.$w$, $DvtGaugeAutomation$$.y += $DvtGaugeAutomation$$.$w$ / 2) : ($DvtGaugeAutomation$$.$w$ -= $DvtGaugeAutomation$$.$h$, $DvtGaugeAutomation$$.x += $DvtGaugeAutomation$$.$h$ / 2)) : "insideIndicatorEdge" == $DvtStatusMeterGaugeCircularIndicator$$ ? 
    ($DvtDialGaugeRenderer$$ = $DvtDialGaugeRenderer$$ ? $DvtDialGaugeRenderer$$ : $dvt$$3$$.$ColorUtils$.$getContrastingTextColor$($DvtDialGaugeIndicator$$), $DvtLedGaugeDefaults$$ ? ($DvtGaugeAutomation$$.$h$ -= $DvtGaugeAutomation$$.$w$, $DvtGaugeAutomation$$.y += $DvtGaugeAutomation$$.$w$ / 2, $DvtGaugeDefaults$$ = !$DvtRatingGaugeRenderer$$ && $DvtDialGaugeDefaults$$.$y1$ > $DvtDialGaugeDefaults$$.$y2$ ? "bottom" : "top") : ($DvtGaugeAutomation$$.$w$ -= $DvtGaugeAutomation$$.$h$, $DvtGaugeAutomation$$.x += 
    $DvtGaugeAutomation$$.$h$ / 2, $DvtGaugeEventManager$$ = $DvtStatusMeterGaugeDefaults$$ ? !$DvtRatingGaugeRenderer$$ && $DvtDialGaugeDefaults$$.$x1$ < $DvtDialGaugeDefaults$$.$x2$ ? "right" : "left" : !$DvtRatingGaugeRenderer$$ && $DvtDialGaugeDefaults$$.$x1$ > $DvtDialGaugeDefaults$$.$x2$ ? "left" : "right")) : "outsideIndicatorEdge" == $DvtStatusMeterGaugeCircularIndicator$$ && ($DvtLedGaugeDefaults$$ ? ($DvtGaugeAutomation$$.$h$ = Math.abs($DvtStatusMeterGaugeIndicator$$.$y1$ - $DvtDialGaugeDefaults$$.$y1$) - 
    $DvtGaugeAutomation$$.$w$, $DvtGaugeAutomation$$.y = $DvtStatusMeterGaugeIndicator$$.$y1$ + $DvtGaugeAutomation$$.$w$ / 2, $DvtGaugeDefaults$$ = "bottom", !$DvtRatingGaugeRenderer$$ && $DvtDialGaugeDefaults$$.$y1$ > $DvtDialGaugeDefaults$$.$y2$ && ($DvtGaugeAutomation$$.$h$ = Math.abs($DvtStatusMeterGaugeIndicator$$.$y1$ - $DvtDialGaugeDefaults$$.$y1$) - $DvtGaugeAutomation$$.$w$, $DvtGaugeAutomation$$.y = $DvtDialGaugeDefaults$$.$y1$ + $DvtGaugeAutomation$$.$w$ / 2, $DvtGaugeDefaults$$ = "top")) : 
    $DvtStatusMeterGaugeDefaults$$ ? !$DvtRatingGaugeRenderer$$ && $DvtDialGaugeDefaults$$.$x1$ < $DvtDialGaugeDefaults$$.$x2$ ? ($DvtGaugeAutomation$$.$w$ = Math.abs($DvtStatusMeterGaugeIndicator$$.$x2$ - $DvtDialGaugeDefaults$$.$x2$) - $DvtGaugeAutomation$$.$h$, $DvtGaugeAutomation$$.x = $DvtDialGaugeDefaults$$.$x2$ + $DvtGaugeAutomation$$.$h$ / 2, $DvtGaugeEventManager$$ = "left") : ($DvtGaugeAutomation$$.$w$ = Math.abs($DvtStatusMeterGaugeIndicator$$.$x1$ - $DvtDialGaugeDefaults$$.$x2$) - $DvtGaugeAutomation$$.$h$, 
    $DvtGaugeAutomation$$.x = $DvtStatusMeterGaugeIndicator$$.$x1$ + $DvtGaugeAutomation$$.$h$ / 2, $DvtGaugeEventManager$$ = "right") : !$DvtRatingGaugeRenderer$$ && $DvtDialGaugeDefaults$$.$x1$ > $DvtDialGaugeDefaults$$.$x2$ ? ($DvtGaugeAutomation$$.$w$ = Math.abs($DvtStatusMeterGaugeIndicator$$.$x1$ - $DvtDialGaugeDefaults$$.$x2$) - $DvtGaugeAutomation$$.$h$, $DvtGaugeAutomation$$.x = $DvtStatusMeterGaugeIndicator$$.$x1$ + $DvtGaugeAutomation$$.$h$ / 2, $DvtGaugeEventManager$$ = "right") : ($DvtGaugeAutomation$$.$w$ = 
    Math.abs($DvtStatusMeterGaugeIndicator$$.$x2$ - $DvtDialGaugeDefaults$$.$x2$) - $DvtGaugeAutomation$$.$h$, $DvtGaugeAutomation$$.x = $DvtDialGaugeDefaults$$.$x2$ + $DvtGaugeAutomation$$.$h$ / 2, $DvtGaugeEventManager$$ = "left"));
    $DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtGaugeAutomation$$, $DvtDialGaugeRenderer$$, $DvtGaugeEventManager$$, $DvtGaugeDefaults$$) || $DvtGaugeKeyboardHandler$$ || ("outsideIndicatorEdge" == $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, "insideIndicatorEdge", $DvtDialGaugeDefaults$$, 
    $DvtStatusMeterGaugeIndicator$$, !0) : "insideIndicatorEdge" != $DvtStatusMeterGaugeCircularIndicator$$ && "center" != $DvtStatusMeterGaugeCircularIndicator$$ || $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, "outsideIndicatorEdge", $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, !0));
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderTitle$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderTitle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = "vertical" == $DvtStatusMeterGaugeCircularIndicator$$.orientation, $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtDialGaugeDefaults$$ ? $DvtRatingGaugeDefaults$$.$w$ : $DvtRatingGaugeDefaults$$.$w$ - 
    $DvtRatingGaugeDefaults$$.$h$, $DvtDialGaugeDefaults$$ ? $DvtRatingGaugeDefaults$$.$h$ - $DvtRatingGaugeDefaults$$.$w$ : $DvtRatingGaugeDefaults$$.$h$), $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeCircularIndicator$$.title.text;
    if (!$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($DvtStatusMeterGaugeCircularIndicator$$) && "on" == $DvtStatusMeterGaugeCircularIndicator$$.metricLabel.rendered) {
      var $DvtDialGaugeRenderer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtStatusMeterGaugeCircularIndicator$$.value, $DvtRatingGaugeEventManager$$), $DvtGaugeKeyboardHandler$$ = $dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtGaugeKeyboardHandler$$, $DvtDialGaugeRenderer$$])
    }
    var $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.title.style, $DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeDefaults$$.clone(), $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$.$getStyle$("font-size");
    $DvtLedGaugeDefaults$$ || ($DvtLedGaugeDefaults$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeKeyboardHandler$$, 0, 0), $DvtLedGaugeDefaults$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$), $DvtLedGaugeDefaults$$.$setTextString$($DvtGaugeKeyboardHandler$$), $DvtLedGaugeDefaults$$ = $DvtDialGaugeDefaults$$ ? $DvtLedGaugeDefaults$$.$getOptimalFontSize$(new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x, $DvtStatusMeterGaugeIndicator$$.y, $DvtStatusMeterGaugeIndicator$$.$w$, 
    Number.MAX_VALUE)) : $DvtLedGaugeDefaults$$.$getOptimalFontSize$(new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x, $DvtStatusMeterGaugeIndicator$$.y, Number.MAX_VALUE, $DvtStatusMeterGaugeIndicator$$.$h$)));
    $DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$MultilineText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeKeyboardHandler$$);
    $DvtDialGaugeRenderer$$.$setFontSize$("font-size", $DvtLedGaugeDefaults$$.toString());
    $DvtGaugeKeyboardHandler$$.$setCSSStyle$($DvtDialGaugeRenderer$$);
    $dvt$$3$$.$TextUtils$.$fitText$($DvtGaugeKeyboardHandler$$, $DvtStatusMeterGaugeIndicator$$.$w$, $DvtStatusMeterGaugeIndicator$$.$h$, $DvtRatingGaugeEventManager$$);
    "center" == $DvtStatusMeterGaugeCircularIndicator$$.title.position || "auto" == $DvtStatusMeterGaugeCircularIndicator$$.title.position && $DvtDialGaugeDefaults$$ ? ($dvt$$3$$.$TextUtils$.$centerTextVertically$($DvtGaugeKeyboardHandler$$, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2), $DvtGaugeKeyboardHandler$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2), $DvtGaugeKeyboardHandler$$.$alignCenter$()) : ($dvt$$3$$.$TextUtils$.$centerTextVertically$($DvtGaugeKeyboardHandler$$, 
    $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2), !$DvtDialGaugeDefaults$$ && $DvtDialGaugeIndicator$$) ? ($DvtGaugeKeyboardHandler$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ - $DvtStatusMeterGaugeIndicator$$.$h$ / 2), $DvtGaugeKeyboardHandler$$.$alignRight$()) : $DvtDialGaugeDefaults$$ || $DvtDialGaugeIndicator$$ ? $DvtDialGaugeDefaults$$ && ($DvtGaugeKeyboardHandler$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ - $DvtGaugeKeyboardHandler$$.$getDimensions$().$h$ - 
    $DvtStatusMeterGaugeIndicator$$.$w$ / 2), $DvtGaugeKeyboardHandler$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2), $DvtGaugeKeyboardHandler$$.$alignCenter$()) : ($DvtGaugeKeyboardHandler$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtStatusMeterGaugeIndicator$$.$h$ / 2), $DvtGaugeKeyboardHandler$$.$alignLeft$());
    $DvtRatingGaugePeer$$.$addChild$($DvtGaugeKeyboardHandler$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    return {x:Math.cos($DvtRatingGaugePeer$$) * $DvtRatingGaugeEventManager$$ + $dvt$$3$$.$w$ / 2 + $dvt$$3$$.x, y:Math.sin($DvtRatingGaugePeer$$) * $DvtRatingGaugeEventManager$$ + $dvt$$3$$.$h$ / 2 + $dvt$$3$$.y};
  };
  $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtGaugeKeyboardHandler$$, $DvtDialGaugeRenderer$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$) {
    var $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeEventManager$$.$getCtx$();
    $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()) && ($DvtDialGaugeIndicator$$ = Math.PI - $DvtDialGaugeIndicator$$ - $DvtDialGaugeDefaults$$, $DvtDialGaugeIndicator$$ = 0 < $DvtDialGaugeIndicator$$ ? $DvtDialGaugeIndicator$$ : $DvtDialGaugeIndicator$$ + 2 * Math.PI);
    $DvtStatusMeterGaugeDefaults$$ ? $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Path$($DvtRatingGaugeRenderer$$, $DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtGaugeKeyboardHandler$$)) : ($DvtRatingGaugeDefaults$$ = new $DvtStatusMeterGaugeCircularIndicator$$($DvtRatingGaugeRenderer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, 
    $DvtGaugeKeyboardHandler$$), $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtRatingGaugeDefaults$$));
    $DvtRatingGaugeDefaults$$.$setSolidFill$($DvtDialGaugeRenderer$$);
    ($DvtRatingGaugeEventManager$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($DvtRatingGaugeEventManager$$)) && !$DvtStatusMeterGaugeDefaults$$ ? $DvtRatingGaugeDefaults$$.$setSolidStroke$($DvtRatingGaugeEventManager$$) : $DvtStatusMeterGaugeDefaults$$ && $DvtLedGaugeDefaults$$ && $DvtRatingGaugeDefaults$$.$setSolidStroke$($DvtLedGaugeDefaults$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$) {
    var $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeRenderer$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$), $DvtStatusMeterGaugeDefaults$$ = .275 * $DvtDialGaugeRenderer$$, $DvtDialGaugeRenderer$$ = .5 * $DvtDialGaugeRenderer$$;
    $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()) && ($DvtDialGaugeIndicator$$ = Math.PI - $DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$ = 0 < $DvtDialGaugeIndicator$$ ? $DvtDialGaugeIndicator$$ : $DvtDialGaugeIndicator$$ + 2 * Math.PI);
    $DvtRatingGaugeEventManager$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeDefaults$$, $DvtDialGaugeRenderer$$, $DvtDialGaugeIndicator$$);
    $DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Line$($DvtGaugeKeyboardHandler$$, $DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y, $DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y);
    $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$SolidStroke$($DvtStatusMeterGaugeCircularIndicator$$, 1, $DvtDialGaugeDefaults$$);
    $DvtStatusMeterGaugeIndicator$$ && $DvtStatusMeterGaugeCircularIndicator$$.$setStyle$($dvt$$3$$.$Stroke$.$convertTypeString$($DvtStatusMeterGaugeIndicator$$));
    $DvtGaugeKeyboardHandler$$.$setStroke$($DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtGaugeKeyboardHandler$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$ = function $$DvtStatusMeterGaugeRenderer$$$$createCircularPathCmd$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    var $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtGaugeKeyboardHandler$$;
    $DvtRatingGaugeDefaults$$ < $dvt$$3$$.Math.$TWO_PI$ ? ($DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugePeer$$), $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$), $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, 
    $DvtDialGaugeIndicator$$, $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugePeer$$), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$PathUtils$.moveTo($DvtDialGaugeDefaults$$.x, $DvtDialGaugeDefaults$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$, 
    1, $DvtStatusMeterGaugeIndicator$$.x, $DvtStatusMeterGaugeIndicator$$.y) + $dvt$$3$$.$PathUtils$.lineTo($DvtGaugeKeyboardHandler$$.x, $DvtGaugeKeyboardHandler$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, 0, $DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y) + $dvt$$3$$.$PathUtils$.closePath()) : ($DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtStatusMeterGaugeCircularIndicator$$, 
    $DvtRatingGaugePeer$$), $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$ / 2), $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugePeer$$), $DvtRatingGaugeEventManager$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, 
    $DvtDialGaugeIndicator$$, $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$ / 2), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$PathUtils$.moveTo($DvtDialGaugeDefaults$$.x, $DvtDialGaugeDefaults$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$ / 2, 1, $DvtStatusMeterGaugeIndicator$$.x, $DvtStatusMeterGaugeIndicator$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, 
    $DvtRatingGaugeDefaults$$ / 2, 1, $DvtDialGaugeDefaults$$.x, $DvtDialGaugeDefaults$$.y), 0 < $DvtDialGaugeIndicator$$ && ($DvtStatusMeterGaugeCircularIndicator$$ += $dvt$$3$$.$PathUtils$.moveTo($DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$ / 2, 0, $DvtGaugeKeyboardHandler$$.x, $DvtGaugeKeyboardHandler$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$, 
    $DvtRatingGaugeDefaults$$ / 2, 0, $DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y)), $DvtStatusMeterGaugeCircularIndicator$$ += $dvt$$3$$.$PathUtils$.closePath());
    return $DvtStatusMeterGaugeCircularIndicator$$;
  };
  $DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$ = function $$DvtStatusMeterGaugeRenderer$$$$getAngleQuadrant$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = 1;
    if ($DvtRatingGaugePeer$$) {
      $DvtRatingGaugeEventManager$$ >= $dvt$$3$$.Math.$HALF_PI$ && $DvtRatingGaugeEventManager$$ < Math.PI ? $DvtRatingGaugeDefaults$$ = 2 : $DvtRatingGaugeEventManager$$ >= Math.PI && $DvtRatingGaugeEventManager$$ < 1.5 * Math.PI ? $DvtRatingGaugeDefaults$$ = 3 : $DvtRatingGaugeEventManager$$ >= 1.5 * Math.PI && $DvtRatingGaugeEventManager$$ < $dvt$$3$$.Math.$TWO_PI$ && ($DvtRatingGaugeDefaults$$ = 4);
    } else {
      if ($DvtRatingGaugeEventManager$$ > $dvt$$3$$.Math.$HALF_PI$ && $DvtRatingGaugeEventManager$$ <= Math.PI) {
        $DvtRatingGaugeDefaults$$ = 2;
      } else {
        if ($DvtRatingGaugeEventManager$$ > Math.PI && $DvtRatingGaugeEventManager$$ <= 1.5 * Math.PI) {
          $DvtRatingGaugeDefaults$$ = 3;
        } else {
          if ($DvtRatingGaugeEventManager$$ > 1.5 * Math.PI && $DvtRatingGaugeEventManager$$ < $dvt$$3$$.Math.$TWO_PI$ || 0 == $DvtRatingGaugeEventManager$$) {
            $DvtRatingGaugeDefaults$$ = 4;
          }
        }
      }
    }
    return $DvtRatingGaugeDefaults$$;
  };
  $DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_hasMetricLabelOutsidePlotArea$$($dvt$$3$$) {
    var $DvtRatingGaugeEventManager$$ = $dvt$$3$$.metricLabel.position;
    return "auto" == $DvtRatingGaugeEventManager$$ || "outsidePlotArea" == $DvtRatingGaugeEventManager$$ || "withTitle" == $DvtRatingGaugeEventManager$$ && !$DvtGaugeStyleUtils$$.$hasTitle$($dvt$$3$$);
  };
  $DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$ = function $$DvtStatusMeterGaugeRenderer$$$$_adjustCenterAndBounds$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$) {
    var $DvtGaugeKeyboardHandler$$ = null, $DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($DvtRatingGaugeDefaults$$, !0), $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($DvtStatusMeterGaugeCircularIndicator$$, !1), $DvtLedGaugeDefaults$$ = $DvtDialGaugeDefaults$$.$w$, $DvtRatingGaugeRenderer$$ = $DvtDialGaugeDefaults$$.$h$, $DvtGaugeEventManager$$ = $DvtLedGaugeDefaults$$ / 2, $DvtGaugeDefaults$$ = $DvtRatingGaugeRenderer$$ / 2, $DvtGaugeAutomation$$;
    if ($DvtDialGaugeRenderer$$ == $DvtStatusMeterGaugeDefaults$$ && $DvtDialGaugeIndicator$$ <= $dvt$$3$$.Math.$HALF_PI$) {
      if ($DvtRatingGaugeDefaults$$ = 2 * Math.min($DvtDialGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$.$h$), $DvtDialGaugeDefaults$$.$w$ += $DvtRatingGaugeDefaults$$ / 2, $DvtDialGaugeDefaults$$.$h$ += $DvtRatingGaugeDefaults$$ / 2, $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, !$DvtStatusMeterGaugeIndicator$$ && 1 == $DvtDialGaugeRenderer$$ || $DvtStatusMeterGaugeIndicator$$ && 2 == $DvtDialGaugeRenderer$$) {
        $DvtDialGaugeDefaults$$.x -= $DvtRatingGaugeDefaults$$ / 2, $DvtDialGaugeDefaults$$.y -= $DvtRatingGaugeDefaults$$ / 2, $DvtGaugeEventManager$$ = $DvtLedGaugeDefaults$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtGaugeDefaults$$ = $DvtRatingGaugeRenderer$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ / 2 - 1, $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2 - 1, 3 / 7 * $DvtGaugeAutomation$$ - 
        2, 2.5 / 7 * $DvtGaugeAutomation$$ - 2);
      } else {
        if (!$DvtStatusMeterGaugeIndicator$$ && 2 == $DvtDialGaugeRenderer$$ || $DvtStatusMeterGaugeIndicator$$ && 1 == $DvtDialGaugeRenderer$$) {
          $DvtDialGaugeDefaults$$.y -= $DvtRatingGaugeDefaults$$ / 2, $DvtGaugeEventManager$$ = $DvtLedGaugeDefaults$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtGaugeDefaults$$ = $DvtRatingGaugeRenderer$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ / 2 - 3 / 7 * $DvtGaugeAutomation$$ + 1, $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2 - 1, 3 / 7 * $DvtGaugeAutomation$$ - 2, 
          2.5 / 7 * $DvtGaugeAutomation$$ - 2);
        } else {
          if (!$DvtStatusMeterGaugeIndicator$$ && 3 == $DvtDialGaugeRenderer$$ || $DvtStatusMeterGaugeIndicator$$ && 4 == $DvtDialGaugeRenderer$$) {
            $DvtGaugeEventManager$$ = $DvtLedGaugeDefaults$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtGaugeDefaults$$ = $DvtRatingGaugeRenderer$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ / 2 - 3 / 7 * $DvtGaugeAutomation$$ + 1, $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeAutomation$$ + 1, 3 / 7 * $DvtGaugeAutomation$$ - 2, 2.5 / 7 * $DvtGaugeAutomation$$ - 
            2);
          } else {
            if (!$DvtStatusMeterGaugeIndicator$$ && 4 == $DvtDialGaugeRenderer$$ || $DvtStatusMeterGaugeIndicator$$ && 3 == $DvtDialGaugeRenderer$$) {
              $DvtDialGaugeDefaults$$.x -= $DvtRatingGaugeDefaults$$ / 2, $DvtGaugeEventManager$$ = $DvtLedGaugeDefaults$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtGaugeDefaults$$ = $DvtRatingGaugeRenderer$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ / 2 - 1, $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeAutomation$$ + 1, 3 / 7 * $DvtGaugeAutomation$$ - 
              2, 2.5 / 7 * $DvtGaugeAutomation$$ - 2);
            }
          }
        }
      }
    } else {
      $DvtDialGaugeRenderer$$ % 4 + 1 == $DvtStatusMeterGaugeDefaults$$ && $DvtDialGaugeIndicator$$ <= Math.PI ? 1 == $DvtDialGaugeRenderer$$ || 3 == $DvtDialGaugeRenderer$$ ? ($DvtRatingGaugeDefaults$$ = Math.min($DvtDialGaugeDefaults$$.$w$, 2 * $DvtDialGaugeDefaults$$.$h$), $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtDialGaugeDefaults$$.$w$ > $DvtDialGaugeDefaults$$.$h$ && ($DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ / 
      2 - 3 / 7 * $DvtGaugeAutomation$$, $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ - ($DvtDialGaugeDefaults$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2 - 2.75 / 7 * $DvtGaugeAutomation$$, 6 / 7 * $DvtGaugeAutomation$$, 2.5 / 7 * $DvtGaugeAutomation$$), 1 == $DvtDialGaugeRenderer$$ ? ($DvtGaugeKeyboardHandler$$.y = $DvtDialGaugeDefaults$$.y + ($DvtDialGaugeDefaults$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2 + .5 / 7 * $DvtGaugeAutomation$$, $DvtDialGaugeDefaults$$.y -= $DvtRatingGaugeDefaults$$ / 
      2 - ($DvtDialGaugeDefaults$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtGaugeDefaults$$ = $DvtRatingGaugeRenderer$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1) : ($DvtDialGaugeDefaults$$.y += ($DvtDialGaugeDefaults$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtGaugeDefaults$$ = $DvtRatingGaugeRenderer$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1), $DvtDialGaugeDefaults$$.$h$ = $DvtRatingGaugeDefaults$$)) : ($DvtRatingGaugeDefaults$$ = Math.min(2 * $DvtDialGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$.$h$), 
      $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtDialGaugeDefaults$$.$w$ < $DvtDialGaugeDefaults$$.$h$ && ($DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ - ($DvtDialGaugeDefaults$$.$w$ - $DvtRatingGaugeDefaults$$ / 2) / 2 - 3.25 / 7 * $DvtGaugeAutomation$$, $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeAutomation$$, 3 / 7 * $DvtGaugeAutomation$$, 5 / 7 * $DvtGaugeAutomation$$), 
      !$DvtStatusMeterGaugeIndicator$$ && 4 == $DvtDialGaugeRenderer$$ || $DvtStatusMeterGaugeIndicator$$ && 2 == $DvtDialGaugeRenderer$$ ? ($DvtGaugeKeyboardHandler$$.x = $DvtDialGaugeDefaults$$.x + ($DvtDialGaugeDefaults$$.$w$ - $DvtRatingGaugeDefaults$$ / 2) / 2 + .25 / 7 * $DvtGaugeAutomation$$, $DvtDialGaugeDefaults$$.x -= $DvtRatingGaugeDefaults$$ / 2 - ($DvtDialGaugeDefaults$$.$w$ - $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtGaugeEventManager$$ = $DvtLedGaugeDefaults$$ / 2 - $DvtRatingGaugeDefaults$$ / 
      4 + 1) : ($DvtDialGaugeDefaults$$.x += ($DvtDialGaugeDefaults$$.$w$ - $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtGaugeEventManager$$ = $DvtLedGaugeDefaults$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1), $DvtDialGaugeDefaults$$.$w$ = $DvtRatingGaugeDefaults$$)) : $DvtStatusMeterGaugeDefaults$$ % 4 + 1 == $DvtDialGaugeRenderer$$ && $DvtDialGaugeIndicator$$ > Math.PI && (1 == $DvtDialGaugeRenderer$$ && $DvtDialGaugeDefaults$$.$h$ > $DvtDialGaugeDefaults$$.$w$ ? ($DvtRatingGaugeDefaults$$ = Math.min($DvtDialGaugeDefaults$$.$w$ / 
      (Math.cos($DvtRatingGaugeDefaults$$) + 1) * 2, $DvtDialGaugeDefaults$$.$w$ / (Math.sin($DvtStatusMeterGaugeCircularIndicator$$ - 1.5 * Math.PI) + 1) * 2, $DvtDialGaugeDefaults$$.$h$), $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtRatingGaugePeer$$ = 3 / 7 * $DvtGaugeAutomation$$ * (2 * $DvtDialGaugeDefaults$$.$w$ / $DvtRatingGaugeDefaults$$ - 1), $DvtStatusMeterGaugeIndicator$$ ? ($DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + 
      $DvtDialGaugeDefaults$$.$w$ - $DvtRatingGaugeDefaults$$ / 2 - $DvtRatingGaugePeer$$, $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeAutomation$$, 3 / 7 * $DvtGaugeAutomation$$ + $DvtRatingGaugePeer$$, 5 / 7 * $DvtGaugeAutomation$$), $DvtDialGaugeDefaults$$.x -= $DvtRatingGaugeDefaults$$ - $DvtDialGaugeDefaults$$.$w$, $DvtGaugeEventManager$$ = -$DvtRatingGaugeDefaults$$ / 2 + $DvtLedGaugeDefaults$$) : ($DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + 
      $DvtRatingGaugeDefaults$$ / 2 - 3 / 7 * $DvtGaugeAutomation$$, $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeAutomation$$, 3 / 7 * $DvtGaugeAutomation$$ * (1 + (2 * $DvtDialGaugeDefaults$$.$w$ / $DvtRatingGaugeDefaults$$ - 1)), 5 / 7 * $DvtGaugeAutomation$$), $DvtGaugeEventManager$$ = $DvtRatingGaugeDefaults$$ / 2), $DvtDialGaugeDefaults$$.$w$ = $DvtRatingGaugeDefaults$$) : 2 == $DvtDialGaugeRenderer$$ && $DvtDialGaugeDefaults$$.$h$ < $DvtDialGaugeDefaults$$.$w$ ? 
      ($DvtRatingGaugeDefaults$$ = Math.min($DvtDialGaugeDefaults$$.$h$ / (Math.cos($DvtRatingGaugeDefaults$$ - $dvt$$3$$.Math.$HALF_PI$) + 1) * 2, $DvtDialGaugeDefaults$$.$h$ / (Math.sin($DvtStatusMeterGaugeCircularIndicator$$) + 1) * 2, $DvtDialGaugeDefaults$$.$w$), $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ / 2 - 3 / 7 * $DvtGaugeAutomation$$, $DvtDialGaugeDefaults$$.y + 
      $DvtRatingGaugeDefaults$$ / 2 - 2.5 / 7 * $DvtGaugeAutomation$$, 6 / 7 * $DvtGaugeAutomation$$, 2.5 / 7 * $DvtGaugeAutomation$$ * (1 + (2 * $DvtDialGaugeDefaults$$.$h$ / $DvtRatingGaugeDefaults$$ - 1))), $DvtDialGaugeDefaults$$.$h$ = $DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$ = $DvtRatingGaugeDefaults$$ / 2) : 3 == $DvtDialGaugeRenderer$$ && $DvtDialGaugeDefaults$$.$h$ > $DvtDialGaugeDefaults$$.$w$ ? ($DvtRatingGaugeDefaults$$ = Math.min($DvtDialGaugeDefaults$$.$w$ / (Math.cos($DvtRatingGaugeDefaults$$ - 
      Math.PI) + 1) * 2, $DvtDialGaugeDefaults$$.$w$ / (Math.sin($DvtStatusMeterGaugeCircularIndicator$$ - $dvt$$3$$.Math.$HALF_PI$) + 1) * 2, $DvtDialGaugeDefaults$$.$h$), $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtRatingGaugePeer$$ = 3 / 7 * $DvtGaugeAutomation$$ * (2 * $DvtDialGaugeDefaults$$.$w$ / $DvtRatingGaugeDefaults$$ - 1), $DvtStatusMeterGaugeIndicator$$ ? ($DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$ / 
      2 - 3 / 7 * $DvtGaugeAutomation$$, $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeAutomation$$, 3 / 7 * $DvtGaugeAutomation$$ * (1 + (2 * $DvtDialGaugeDefaults$$.$w$ / $DvtRatingGaugeDefaults$$ - 1)), 5 / 7 * $DvtGaugeAutomation$$), $DvtGaugeEventManager$$ = $DvtRatingGaugeDefaults$$ / 2) : ($DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ - $DvtRatingGaugeDefaults$$ / 2 - $DvtRatingGaugePeer$$, 
      $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2 - 2.5 / 7 * $DvtGaugeAutomation$$, 3 / 7 * $DvtGaugeAutomation$$ + $DvtRatingGaugePeer$$, 5 / 7 * $DvtGaugeAutomation$$), $DvtDialGaugeDefaults$$.x -= $DvtRatingGaugeDefaults$$ - $DvtDialGaugeDefaults$$.$w$, $DvtGaugeEventManager$$ = -$DvtRatingGaugeDefaults$$ / 2 + $DvtLedGaugeDefaults$$), $DvtDialGaugeDefaults$$.$w$ = $DvtRatingGaugeDefaults$$) : 4 == $DvtDialGaugeRenderer$$ && $DvtDialGaugeDefaults$$.$h$ < $DvtDialGaugeDefaults$$.$w$ && 
      ($DvtRatingGaugeDefaults$$ = Math.min($DvtDialGaugeDefaults$$.$h$ / (Math.cos($DvtRatingGaugeDefaults$$ - 1.5 * Math.PI) + 1) * 2, $DvtDialGaugeDefaults$$.$h$ / (Math.sin($dvt$$3$$.Math.$TWO_PI$ - $DvtStatusMeterGaugeCircularIndicator$$) + 1) * 2, $DvtDialGaugeDefaults$$.$w$), $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtRatingGaugePeer$$ = 2.5 / 7 * $DvtGaugeAutomation$$ * (2 * $DvtDialGaugeDefaults$$.$h$ / $DvtRatingGaugeDefaults$$ - 1), $DvtGaugeKeyboardHandler$$ = 
      new $dvt$$3$$.$Rectangle$($DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ / 2 - 3 / 7 * $DvtGaugeAutomation$$, $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ - $DvtRatingGaugeDefaults$$ / 2 - $DvtRatingGaugePeer$$, 6 / 7 * $DvtGaugeAutomation$$, 2.5 / 7 * $DvtGaugeAutomation$$ + $DvtRatingGaugePeer$$), $DvtDialGaugeDefaults$$.y -= $DvtRatingGaugeDefaults$$ - $DvtDialGaugeDefaults$$.$h$, $DvtDialGaugeDefaults$$.$h$ = $DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$ = -$DvtRatingGaugeDefaults$$ / 
      2 + $DvtRatingGaugeRenderer$$));
    }
    $DvtRatingGaugeEventManager$$.$cx$ = $DvtGaugeEventManager$$;
    $DvtRatingGaugeEventManager$$.$cy$ = $DvtGaugeDefaults$$;
    $DvtRatingGaugeEventManager$$.$maxInnerDiameter$ = $DvtGaugeAutomation$$;
    return $DvtGaugeKeyboardHandler$$;
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderCenterContent$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCenterContent$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    var $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + .5 * ($DvtRatingGaugeDefaults$$.$w$ - $DvtStatusMeterGaugeCircularIndicator$$), $DvtRatingGaugeDefaults$$.y + .5 * ($DvtRatingGaugeDefaults$$.$h$ - $DvtStatusMeterGaugeCircularIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$), $DvtDialGaugeDefaults$$ = $DvtDialGaugeDefaults$$.$getIntersection$($DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + .5 * ($DvtRatingGaugeDefaults$$.$w$ - $DvtStatusMeterGaugeCircularIndicator$$ / Math.sqrt(2)), $DvtRatingGaugeDefaults$$.y + .5 * ($DvtRatingGaugeDefaults$$.$h$ - $DvtStatusMeterGaugeCircularIndicator$$ / Math.sqrt(2)), $DvtStatusMeterGaugeCircularIndicator$$ / Math.sqrt(2), $DvtStatusMeterGaugeCircularIndicator$$ / Math.sqrt(2));
    $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.$getIntersection$($DvtDialGaugeIndicator$$);
    if ($DvtDialGaugeIndicator$$ = $DvtRatingGaugePeer$$.center.renderer) {
      if ($DvtRatingGaugeDefaults$$ = {outerBounds:{x:$DvtDialGaugeDefaults$$.x, y:$DvtDialGaugeDefaults$$.y, width:$DvtDialGaugeDefaults$$.$w$, height:$DvtDialGaugeDefaults$$.$h$}, innerBounds:{x:$DvtRatingGaugeDefaults$$.x, y:$DvtRatingGaugeDefaults$$.y, width:$DvtRatingGaugeDefaults$$.$w$, height:$DvtRatingGaugeDefaults$$.$h$}, metricLabel:$DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugePeer$$.value, $DvtRatingGaugeEventManager$$), component:$DvtRatingGaugePeer$$._widgetConstructor}, 
      $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeDefaults$$ = $DvtRatingGaugePeer$$.$_parentDiv$, ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$centerDiv$) && $DvtDialGaugeDefaults$$.removeChild($DvtStatusMeterGaugeCircularIndicator$$), $DvtRatingGaugeDefaults$$ = $DvtDialGaugeIndicator$$($DvtRatingGaugeDefaults$$)) {
        $DvtDialGaugeIndicator$$ = $DvtRatingGaugePeer$$.$createOverlayDiv$(), $DvtDialGaugeIndicator$$.appendChild($DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$.$centerDiv$ = $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$.appendChild($DvtDialGaugeIndicator$$), ($DvtRatingGaugeEventManager$$ = $DvtRatingGaugePeer$$.$_overlayAttachedCallback$) && $DvtRatingGaugeEventManager$$($DvtDialGaugeIndicator$$);
      }
    }
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeIndicator$$, $dvt$$3$$.$Path$);
  $DvtStatusMeterGaugeIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeIndicator$$$$Init$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    $DvtStatusMeterGaugeIndicator$$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$);
    this.$_gauge$ = $dvt$$3$$;
    this.$setCoords$($DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$);
  };
  $DvtStatusMeterGaugeIndicator$$.prototype.$setCoords$ = function $$DvtStatusMeterGaugeIndicator$$$$$setCoords$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    this.$_x1$ = $DvtRatingGaugeEventManager$$;
    this.$_x2$ = $DvtRatingGaugePeer$$;
    this.$_y1$ = $DvtRatingGaugeDefaults$$;
    this.$_y2$ = $DvtDialGaugeIndicator$$;
    var $DvtStatusMeterGaugeCircularIndicator$$ = Math.min($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$), $DvtDialGaugeDefaults$$ = Math.min($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeEventManager$$ = Math.abs($DvtRatingGaugeEventManager$$ - $DvtRatingGaugePeer$$);
    $DvtRatingGaugeDefaults$$ = Math.abs($DvtDialGaugeIndicator$$ - $DvtRatingGaugeDefaults$$);
    $DvtDialGaugeIndicator$$ = this.$_gauge$.$getOptions$();
    $DvtRatingGaugePeer$$ = "vertical" == $DvtDialGaugeIndicator$$.orientation ? $DvtRatingGaugeEventManager$$ : $DvtRatingGaugeDefaults$$;
    var $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$(this.$_gauge$) ? "25%" : "15%", $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$PathUtils$.$rectangleWithBorderRadius$($DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$.borderRadius, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$);
    this.$setCmds$($DvtStatusMeterGaugeCircularIndicator$$);
  };
  $DvtStatusMeterGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$getAnimationParams$$() {
    return [this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$];
  };
  $DvtStatusMeterGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$setAnimationParams$$($dvt$$3$$) {
    $dvt$$3$$ && 4 == $dvt$$3$$.length && this.$setCoords$($dvt$$3$$[0], $dvt$$3$$[1], $dvt$$3$$[2], $dvt$$3$$[3]);
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeCircularIndicator$$, $dvt$$3$$.$Path$);
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    $DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $dvt$$3$$);
    this.$setPath$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$);
  };
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.$setPath$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setPath$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    $DvtRatingGaugeEventManager$$ && $DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$Rectangle$ ? this.$_bounds$ = $DvtRatingGaugeEventManager$$ : $DvtRatingGaugeEventManager$$ = this.$_bounds$;
    this.$_startAngle$ = $DvtRatingGaugePeer$$;
    this.$_angleExtent$ = $DvtRatingGaugeDefaults$$;
    this.$_innerRadius$ = $DvtDialGaugeIndicator$$;
    this.$_outerRadius$ = $DvtStatusMeterGaugeCircularIndicator$$;
    this.$setCmds$($DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$));
  };
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
    return [this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$];
  };
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($dvt$$3$$) {
    $dvt$$3$$ && 5 == $dvt$$3$$.length && this.$setPath$($dvt$$3$$[0], $dvt$$3$$[1], $dvt$$3$$[2], $dvt$$3$$[3], $dvt$$3$$[4]);
  };
  $dvt$$3$$.$DialGauge$ = function $$dvt$$3$$$$DialGauge$$() {
  };
  $dvt$$3$$.$Obj$.$createSubclass$($dvt$$3$$.$DialGauge$, $DvtGauge$$);
  $dvt$$3$$.$DialGauge$.newInstance = function $$dvt$$3$$$$DialGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$DialGauge$;
    $DvtDialGaugeIndicator$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    return $DvtDialGaugeIndicator$$;
  };
  $dvt$$3$$.$DialGauge$.prototype.Init = function $$dvt$$3$$$$DialGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $dvt$$3$$.$DialGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    this.$Defaults$ = new $DvtDialGaugeDefaults$$;
    this.$__anchorPt$ = null;
  };
  $dvt$$3$$.$DialGauge$.prototype.$SetOptions$ = function $$dvt$$3$$$$DialGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.background, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.indicator;
    "string" === typeof $DvtRatingGaugePeer$$ && ($DvtRatingGaugeEventManager$$.background = $DvtGaugeStyleUtils$$.$getDialBackground$($DvtRatingGaugePeer$$), $DvtRatingGaugeEventManager$$.background.images = $DvtRatingGaugeEventManager$$._backgroundImages);
    "string" === typeof $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeEventManager$$.indicator = $DvtGaugeStyleUtils$$.$getDialIndicator$($DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$.indicator.images = $DvtRatingGaugeEventManager$$._indicatorImages);
    $dvt$$3$$.$DialGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$));
  };
  $dvt$$3$$.$DialGauge$.prototype.$Render$ = function $$dvt$$3$$$$DialGauge$$$$Render$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtDialGaugeRenderer$$.$render$(this, $dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
  };
  $dvt$$3$$.$DialGauge$.prototype.$renderUpdate$ = function $$dvt$$3$$$$DialGauge$$$$renderUpdate$$() {
    $DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$(this, this.$_container$, this.$Width$, this.$Height$);
    var $dvt$$3$$ = this.$getEventManager$();
    $dvt$$3$$ && $dvt$$3$$.$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), !0);
    this.$UpdateAriaLiveValue$(this.$_container$);
  };
  $dvt$$3$$.$DialGauge$.prototype.$CreateAnimationOnDisplay$ = function $$dvt$$3$$$$DialGauge$$$$CreateAnimationOnDisplay$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $DvtRatingGaugePeer$$ = [];
    for (var $DvtDialGaugeIndicator$$ = 0;$DvtDialGaugeIndicator$$ < $DvtRatingGaugeEventManager$$.length;$DvtDialGaugeIndicator$$++) {
      var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$[$DvtDialGaugeIndicator$$], $DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.$getAnimationParams$(), $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeRenderer$$.$__getStartAngle$(this);
      $DvtStatusMeterGaugeCircularIndicator$$.$setAngle$($DvtStatusMeterGaugeIndicator$$);
      $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$CustomAnimation$(this.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$);
      $DvtStatusMeterGaugeIndicator$$.$_animator$.$addProp$($dvt$$3$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$.$getAnimationParams$, $DvtStatusMeterGaugeCircularIndicator$$.$setAnimationParams$, $DvtDialGaugeDefaults$$);
      $DvtStatusMeterGaugeIndicator$$.$_animator$.$setEasing$(function($DvtRatingGaugeEventManager$$) {
        return $dvt$$3$$.$Easing$.$backOut$($DvtRatingGaugeEventManager$$, .7);
      });
      $DvtRatingGaugePeer$$.push($DvtStatusMeterGaugeIndicator$$);
    }
    return new $dvt$$3$$.$ParallelPlayable$(this.$getCtx$(), $DvtRatingGaugePeer$$);
  };
  $dvt$$3$$.$DialGauge$.prototype.$GetValueAt$ = function $$dvt$$3$$$$DialGauge$$$$GetValueAt$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $dvt$$3$$.Math.$radsToDegrees$(Math.atan2($DvtRatingGaugePeer$$ - this.$__anchorPt$.y, $DvtRatingGaugeEventManager$$ - this.$__anchorPt$.x));
    0 >= $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeDefaults$$ += 360);
    var $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtStatusMeterGaugeCircularIndicator$$ = this.$getOptions$().background, $DvtDialGaugeDefaults$$ = $DvtDialGaugeIndicator$$ ? 180 + $DvtStatusMeterGaugeCircularIndicator$$.startAngle : 360 - $DvtStatusMeterGaugeCircularIndicator$$.startAngle, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$.angleExtent, $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$ + $DvtStatusMeterGaugeCircularIndicator$$;
    if ($DvtDialGaugeIndicator$$) {
      for ($DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$ -= $DvtStatusMeterGaugeCircularIndicator$$;0 > $DvtDialGaugeDefaults$$;) {
        $DvtDialGaugeDefaults$$ += 360, $DvtStatusMeterGaugeIndicator$$ += 360;
      }
    }
    $DvtRatingGaugeDefaults$$ + 360 >= $DvtDialGaugeDefaults$$ && $DvtRatingGaugeDefaults$$ + 360 <= $DvtStatusMeterGaugeIndicator$$ ? $DvtRatingGaugeDefaults$$ += 360 : $DvtRatingGaugeDefaults$$ >= $DvtDialGaugeDefaults$$ && $DvtRatingGaugeDefaults$$ <= $DvtStatusMeterGaugeIndicator$$ || ($DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$ > $DvtStatusMeterGaugeIndicator$$ ? $DvtDialGaugeDefaults$$ + 360 - $DvtRatingGaugeDefaults$$ < $DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeIndicator$$ ? 
    $DvtDialGaugeDefaults$$ : $DvtStatusMeterGaugeIndicator$$ : $DvtDialGaugeDefaults$$ - $DvtRatingGaugeDefaults$$ < $DvtRatingGaugeDefaults$$ + 360 - $DvtStatusMeterGaugeIndicator$$ ? $DvtDialGaugeDefaults$$ : $DvtStatusMeterGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$ = ($DvtRatingGaugeDefaults$$ - $DvtDialGaugeDefaults$$) / $DvtStatusMeterGaugeCircularIndicator$$;
    $DvtDialGaugeIndicator$$ && ($DvtRatingGaugeDefaults$$ = 1 - $DvtRatingGaugeDefaults$$);
    $DvtDialGaugeIndicator$$ = this.$Options$.min;
    return $DvtRatingGaugeDefaults$$ * (this.$Options$.max - $DvtDialGaugeIndicator$$) + $DvtDialGaugeIndicator$$;
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtDialGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtDialGaugeDefaults$$.$VERSION_1$ = {background:{startAngle:180, angleExtent:180, indicatorLength:.7}, metricLabel:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, tickLabel:{scaling:"auto", style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}};
  var $DvtDialGaugeRenderer$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtDialGaugeRenderer$$, $dvt$$3$$.$Obj$);
  $DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$) ? ($DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$), $DvtDialGaugeRenderer$$.$_renderShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$), $DvtDialGaugeRenderer$$.$_renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$)) : $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, 
    new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$));
  };
  $DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$ = function $$DvtDialGaugeRenderer$$$$updateIndicatorAndLabel$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $DvtRatingGaugeEventManager$$.$__indicatorContainer$.$setAngle$($DvtDialGaugeRenderer$$.$_getRotation$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getOptions$().value));
    $DvtRatingGaugePeer$$.removeChild($DvtRatingGaugeEventManager$$.$__label$);
    $DvtDialGaugeRenderer$$.$_renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$));
  };
  $DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $DvtDialGaugeRenderer$$.$_createBackground$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtDialGaugeDefaults$$);
    $DvtStatusMeterGaugeCircularIndicator$$.background.majorTickCount && $DvtStatusMeterGaugeCircularIndicator$$.background.radius && $DvtDialGaugeRenderer$$.$_renderTickLabels$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    var $DvtDialGaugeDefaults$$ = $DvtDialGaugeRenderer$$.$_createIndicator$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$), $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$Container$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtGaugeKeyboardHandler$$ = new $DvtDialGaugeIndicator$$($DvtRatingGaugeEventManager$$.$getCtx$());
    $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeIndicator$$);
    $DvtStatusMeterGaugeIndicator$$.$addChild$($DvtGaugeKeyboardHandler$$);
    $DvtGaugeKeyboardHandler$$.$addChild$($DvtDialGaugeDefaults$$);
    var $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeDefaults$$.$getDimensions$(), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeRenderer$$.$_getRotation$($DvtRatingGaugeEventManager$$, $DvtStatusMeterGaugeCircularIndicator$$.value);
    $DvtRatingGaugePeer$$ = $DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    var $DvtLedGaugeDefaults$$ = $DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($DvtRatingGaugeEventManager$$, $DvtStatusMeterGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = $DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$);
    $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Matrix$;
    $DvtStatusMeterGaugeDefaults$$.translate(-$DvtLedGaugeDefaults$$.x, -$DvtLedGaugeDefaults$$.y);
    $DvtStatusMeterGaugeDefaults$$.scale($DvtRatingGaugeDefaults$$, $DvtRatingGaugeDefaults$$);
    $DvtDialGaugeDefaults$$.$setMatrix$($DvtStatusMeterGaugeDefaults$$);
    $DvtGaugeKeyboardHandler$$.$setAngle$($DvtStatusMeterGaugeCircularIndicator$$);
    $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Matrix$;
    $DvtStatusMeterGaugeDefaults$$.translate($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y);
    $DvtStatusMeterGaugeIndicator$$.$setMatrix$($DvtStatusMeterGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtGaugeKeyboardHandler$$);
    $DvtRatingGaugeEventManager$$.$__indicatorContainer$ = $DvtGaugeKeyboardHandler$$;
    $DvtRatingGaugeEventManager$$.$__anchorPt$ = $DvtRatingGaugePeer$$;
  };
  $DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().background, $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$Agent$.$isTouchDevice$(), $DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? 2 * $DvtRatingGaugePeer$$.$w$ : $DvtRatingGaugePeer$$.$w$, $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? 2 * $DvtRatingGaugePeer$$.$h$ : 
    $DvtRatingGaugePeer$$.$h$, $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeDefaults$$.images;
    if ($DvtGaugeKeyboardHandler$$ && 0 < $DvtGaugeKeyboardHandler$$.length) {
      var $DvtDialGaugeRenderer$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$ = [];
      for ($DvtDialGaugeRenderer$$ = 0;$DvtDialGaugeRenderer$$ < $DvtGaugeKeyboardHandler$$.length;$DvtDialGaugeRenderer$$++) {
        var $DvtStatusMeterGaugeRenderer$$ = "rtl" == $DvtGaugeKeyboardHandler$$[$DvtDialGaugeRenderer$$].dir;
        $DvtDialGaugeIndicator$$ && $DvtStatusMeterGaugeRenderer$$ ? $DvtStatusMeterGaugeCircularIndicator$$.push($DvtGaugeKeyboardHandler$$[$DvtDialGaugeRenderer$$]) : $DvtDialGaugeIndicator$$ || $DvtStatusMeterGaugeRenderer$$ || $DvtStatusMeterGaugeCircularIndicator$$.push($DvtGaugeKeyboardHandler$$[$DvtDialGaugeRenderer$$]);
      }
      $DvtGaugeKeyboardHandler$$ = 0 < $DvtStatusMeterGaugeCircularIndicator$$.length ? $DvtStatusMeterGaugeCircularIndicator$$ : $DvtGaugeKeyboardHandler$$;
      for ($DvtDialGaugeRenderer$$ = 0;$DvtDialGaugeRenderer$$ < $DvtGaugeKeyboardHandler$$.length;$DvtDialGaugeRenderer$$++) {
        var $DvtRatingGaugeRenderer$$ = $DvtGaugeKeyboardHandler$$[$DvtDialGaugeRenderer$$], $DvtStatusMeterGaugeRenderer$$ = $DvtRatingGaugeRenderer$$.src, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeRenderer$$.width, $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeRenderer$$.height, $DvtGaugeEventManager$$ = $DvtStatusMeterGaugeRenderer$$ && -1 < $DvtStatusMeterGaugeRenderer$$.search(".svg");
        0 == $DvtDialGaugeRenderer$$ && ($DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$, $DvtLedGaugeDefaults$$ = $DvtRatingGaugeRenderer$$);
        if ($DvtGaugeEventManager$$ || $DvtStatusMeterGaugeCircularIndicator$$ >= $DvtDialGaugeDefaults$$ && $DvtRatingGaugeRenderer$$ >= $DvtStatusMeterGaugeIndicator$$ || $DvtDialGaugeRenderer$$ == $DvtGaugeKeyboardHandler$$.length - 1) {
          var $DvtDialGaugeDefaults$$ = new $dvt$$3$$.Image($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeRenderer$$, 0, 0, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeRenderer$$), $DvtGaugeDefaults$$ = new $dvt$$3$$.$Matrix$, $DvtStatusMeterGaugeIndicator$$ = Math.min($DvtRatingGaugePeer$$.$w$ / $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugePeer$$.$h$ / $DvtRatingGaugeRenderer$$), $DvtGaugeKeyboardHandler$$ = ($DvtRatingGaugePeer$$.$w$ - $DvtStatusMeterGaugeIndicator$$ * 
          $DvtStatusMeterGaugeCircularIndicator$$) / 2;
          $DvtDialGaugeRenderer$$ = ($DvtRatingGaugePeer$$.$h$ - $DvtStatusMeterGaugeIndicator$$ * $DvtRatingGaugeRenderer$$) / 2;
          $DvtGaugeDefaults$$.scale($DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$);
          $DvtGaugeDefaults$$.translate($DvtGaugeKeyboardHandler$$, $DvtDialGaugeRenderer$$);
          $DvtDialGaugeDefaults$$.$setMatrix$($DvtGaugeDefaults$$);
          $DvtGaugeEventManager$$ && $dvt$$3$$.$Agent$.$isPlatformWebkit$() && ($DvtStatusMeterGaugeRenderer$$ = $dvt$$3$$.$ImageLoader$.$loadImage$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeRenderer$$, $dvt$$3$$.$Obj$.$createCallback$($DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$.$__setDimensions$))) && $DvtDialGaugeDefaults$$.$__setDimensions$($DvtStatusMeterGaugeRenderer$$);
          $DvtRatingGaugePeer$$.x += $DvtGaugeKeyboardHandler$$;
          $DvtRatingGaugePeer$$.y += $DvtDialGaugeRenderer$$;
          $DvtRatingGaugePeer$$.$w$ = $DvtStatusMeterGaugeIndicator$$ * $DvtStatusMeterGaugeCircularIndicator$$;
          $DvtRatingGaugePeer$$.$h$ = $DvtStatusMeterGaugeIndicator$$ * $DvtRatingGaugeRenderer$$;
          isNaN($DvtRatingGaugeDefaults$$.anchorX) || isNaN($DvtRatingGaugeDefaults$$.anchorY) || ($DvtRatingGaugeDefaults$$._anchorX = $DvtDialGaugeIndicator$$ ? $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ - $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.anchorX / $DvtStatusMeterGaugeDefaults$$ : $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.anchorX / $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeDefaults$$._anchorY = $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ * 
          $DvtRatingGaugeDefaults$$.anchorY / $DvtLedGaugeDefaults$$);
          $DvtRatingGaugeDefaults$$.metricLabelBounds && ($DvtStatusMeterGaugeCircularIndicator$$ = {}, $DvtStatusMeterGaugeCircularIndicator$$.width = $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.width / $DvtStatusMeterGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$.height = $DvtRatingGaugePeer$$.$h$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.height / $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$.y = $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ * 
          $DvtRatingGaugeDefaults$$.metricLabelBounds.y / $DvtLedGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$.x = $DvtDialGaugeIndicator$$ ? $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ - $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.x / $DvtStatusMeterGaugeDefaults$$ - $DvtStatusMeterGaugeCircularIndicator$$.width : $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.x / $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeDefaults$$._metricLabelBounds = 
          $DvtStatusMeterGaugeCircularIndicator$$);
          $DvtRatingGaugeDefaults$$._radius = $DvtRatingGaugeDefaults$$.radius * Math.min($DvtRatingGaugePeer$$.$w$ / $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugePeer$$.$h$ / $DvtLedGaugeDefaults$$);
          $DvtRatingGaugeDefaults$$._tickLabelHeight = $DvtRatingGaugeDefaults$$.tickLabelHeight * $DvtRatingGaugePeer$$.$h$ / $DvtLedGaugeDefaults$$;
          $DvtRatingGaugeDefaults$$._tickLabelWidth = $DvtRatingGaugeDefaults$$.tickLabelWidth * $DvtRatingGaugePeer$$.$w$ / $DvtStatusMeterGaugeDefaults$$;
          return $DvtDialGaugeDefaults$$;
        }
      }
    }
    return null;
  };
  $DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().indicator, $DvtDialGaugeIndicator$$ = $DvtDialGaugeRenderer$$.$_getIndicatorLength$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$Agent$.$isTouchDevice$() ? 2 * $DvtDialGaugeIndicator$$ : $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeDefaults$$.images;
    if ($DvtGaugeKeyboardHandler$$ && 0 < $DvtGaugeKeyboardHandler$$.length) {
      for (var $DvtStatusMeterGaugeDefaults$$ = 0;$DvtStatusMeterGaugeDefaults$$ < $DvtGaugeKeyboardHandler$$.length;$DvtStatusMeterGaugeDefaults$$++) {
        var $DvtLedGaugeDefaults$$ = $DvtGaugeKeyboardHandler$$[$DvtStatusMeterGaugeDefaults$$], $DvtDialGaugeIndicator$$ = $DvtLedGaugeDefaults$$.src, $DvtStatusMeterGaugeRenderer$$ = $DvtLedGaugeDefaults$$.width, $DvtLedGaugeDefaults$$ = $DvtLedGaugeDefaults$$.height, $DvtRatingGaugeRenderer$$ = $DvtDialGaugeIndicator$$ && -1 < $DvtDialGaugeIndicator$$.search(".svg");
        0 == $DvtStatusMeterGaugeDefaults$$ && ($DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$, $DvtStatusMeterGaugeIndicator$$ = $DvtLedGaugeDefaults$$);
        if ($DvtRatingGaugeRenderer$$ || $DvtLedGaugeDefaults$$ >= $DvtStatusMeterGaugeCircularIndicator$$ || $DvtStatusMeterGaugeDefaults$$ == $DvtGaugeKeyboardHandler$$.length - 1) {
          return $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.Image($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, 0, 0, $DvtStatusMeterGaugeRenderer$$, $DvtLedGaugeDefaults$$), $DvtRatingGaugeRenderer$$ && $dvt$$3$$.$Agent$.$isPlatformWebkit$() && $dvt$$3$$.$ImageLoader$.$loadImage$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, $dvt$$3$$.$Obj$.$createCallback$($DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$.$__setDimensions$)) && 
          ($DvtStatusMeterGaugeCircularIndicator$$.$setWidth$($DvtStatusMeterGaugeRenderer$$), $DvtStatusMeterGaugeCircularIndicator$$.$setHeight$($DvtLedGaugeDefaults$$)), isNaN($DvtRatingGaugeDefaults$$.anchorX) || isNaN($DvtRatingGaugeDefaults$$.anchorY) || ($DvtRatingGaugeDefaults$$._anchorX = $DvtRatingGaugeDefaults$$.anchorX * $DvtStatusMeterGaugeRenderer$$ / $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$._anchorY = $DvtRatingGaugeDefaults$$.anchorY * $DvtLedGaugeDefaults$$ / $DvtStatusMeterGaugeIndicator$$), 
          $DvtStatusMeterGaugeCircularIndicator$$;
        }
      }
    }
    return null;
  };
  $DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$().background;
    $DvtRatingGaugeEventManager$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()) ? 180 - $DvtRatingGaugePeer$$.startAngle : $DvtRatingGaugePeer$$.startAngle;
    return Math.PI * (90 - $DvtRatingGaugeEventManager$$) / 180;
  };
  $DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.background, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeDefaults$$.min, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.max;
    $DvtRatingGaugePeer$$ = Math.max(Math.min($DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$), $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtStatusMeterGaugeCircularIndicator$$ = ($DvtRatingGaugePeer$$ - $DvtStatusMeterGaugeCircularIndicator$$) / ($DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$());
    return Math.PI * (90 - (($DvtRatingGaugeDefaults$$ ? 180 - $DvtDialGaugeIndicator$$.startAngle : $DvtDialGaugeIndicator$$.startAngle) - $DvtStatusMeterGaugeCircularIndicator$$ * ($DvtRatingGaugeDefaults$$ ? -$DvtDialGaugeIndicator$$.angleExtent : $DvtDialGaugeIndicator$$.angleExtent))) / 180;
  };
  $DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().background, $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$._anchorX, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$._anchorY;
    return isNaN($DvtDialGaugeIndicator$$) || isNaN($DvtRatingGaugeDefaults$$) ? new $dvt$$3$$.$Point$($DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2, $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ / 2) : new $dvt$$3$$.$Point$($DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$);
  };
  $DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = Math.min($DvtRatingGaugeEventManager$$.$w$, $DvtRatingGaugeEventManager$$.$h$) / 2;
    return $dvt$$3$$.$getOptions$().background.indicatorLength * $DvtRatingGaugePeer$$;
  };
  $DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().indicator, $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$._anchorX, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$._anchorY;
    return isNaN($DvtDialGaugeIndicator$$) || isNaN($DvtRatingGaugeDefaults$$) ? new $dvt$$3$$.$Point$($DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2, $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$) : new $dvt$$3$$.$Point$($DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$);
  };
  $DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    return $DvtDialGaugeRenderer$$.$_getIndicatorLength$($dvt$$3$$, $DvtRatingGaugeEventManager$$) / $DvtRatingGaugePeer$$.$h$;
  };
  $DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    if ("on" == $DvtDialGaugeIndicator$$.metricLabel.rendered) {
      var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.value, $DvtRatingGaugeEventManager$$), $DvtDialGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.max, $DvtRatingGaugeEventManager$$), $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 
      2, $DvtDialGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.$w$, $DvtLedGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.$h$, $DvtStatusMeterGaugeRenderer$$ = $DvtDialGaugeIndicator$$.background._metricLabelBounds;
      $DvtStatusMeterGaugeRenderer$$ && ($DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeRenderer$$.x + $DvtStatusMeterGaugeRenderer$$.width / 2, $DvtDialGaugeRenderer$$ = $DvtStatusMeterGaugeRenderer$$.y + $DvtStatusMeterGaugeRenderer$$.height / 2, $DvtRatingGaugeDefaults$$.$w$ = $DvtStatusMeterGaugeRenderer$$.width, $DvtRatingGaugeDefaults$$.$h$ = $DvtStatusMeterGaugeRenderer$$.height);
      $DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$, $DvtGaugeKeyboardHandler$$, $DvtDialGaugeRenderer$$);
      !$DvtDialGaugeIndicator$$.metricLabel.style.$getStyle$("color") && $DvtDialGaugeIndicator$$.background._isDark && $DvtDialGaugeIndicator$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
      $DvtGaugeKeyboardHandler$$.$setCSSStyle$($DvtDialGaugeIndicator$$.metricLabel.style);
      $DvtDialGaugeIndicator$$ = ($DvtDialGaugeIndicator$$ = parseInt($DvtDialGaugeIndicator$$.metricLabel.style.$getFontSize$())) ? parseInt($DvtDialGaugeIndicator$$) : null;
      $DvtDialGaugeIndicator$$ || ($DvtDialGaugeIndicator$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$], $DvtGaugeKeyboardHandler$$, $DvtRatingGaugeDefaults$$), $DvtGaugeKeyboardHandler$$.$setTextString$($DvtStatusMeterGaugeCircularIndicator$$), $DvtGaugeKeyboardHandler$$.$setFontSize$($DvtDialGaugeIndicator$$));
      $DvtGaugeKeyboardHandler$$.$alignCenter$();
      $DvtGaugeKeyboardHandler$$.$alignMiddle$();
      $dvt$$3$$.$TextUtils$.$fitText$($DvtGaugeKeyboardHandler$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$, $DvtRatingGaugePeer$$) && ($DvtRatingGaugeEventManager$$.$__label$ = $DvtGaugeKeyboardHandler$$);
    }
  };
  $DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$());
    if ($DvtDialGaugeIndicator$$.background.radius && $DvtDialGaugeIndicator$$.background.majorTickCount) {
      var $DvtDialGaugeDefaults$$ = $DvtDialGaugeIndicator$$.background._radius, $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeIndicator$$.min, $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeIndicator$$.max, $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeIndicator$$.background.majorTickCount, $DvtLedGaugeDefaults$$ = 12, $DvtStatusMeterGaugeRenderer$$ = new $dvt$$3$$.$Rectangle$($DvtGaugeDefaults$$, $DvtGaugeAutomation$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$), $DvtRatingGaugeRenderer$$ = 
      $DvtDialGaugeIndicator$$.metricLabel.style.$getStyle$("font-size");
      $DvtDialGaugeIndicator$$.background._tickLabelHeight && !$DvtRatingGaugeRenderer$$ && ($DvtStatusMeterGaugeRenderer$$.$h$ = $DvtDialGaugeIndicator$$.background._tickLabelHeight);
      $DvtDialGaugeIndicator$$.background._tickLabelWidth && !$DvtRatingGaugeRenderer$$ && ($DvtStatusMeterGaugeRenderer$$.$w$ = $DvtDialGaugeIndicator$$.background._tickLabelWidth);
      if (!$DvtRatingGaugeRenderer$$) {
        var $DvtGaugeEventManager$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), "", $DvtGaugeDefaults$$, $DvtGaugeAutomation$$), $DvtLedGaugeDefaults$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtGaugeRenderer$$.$formatTickLabelValue$($DvtDialGaugeIndicator$$.max, $DvtRatingGaugeEventManager$$), $DvtGaugeRenderer$$.$formatTickLabelValue$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$)], $DvtGaugeEventManager$$, $DvtStatusMeterGaugeRenderer$$)
      }
      for ($DvtRatingGaugeRenderer$$ = 0;$DvtRatingGaugeRenderer$$ < $DvtStatusMeterGaugeDefaults$$;$DvtRatingGaugeRenderer$$++) {
        var $DvtGaugeDefaults$$ = $DvtStatusMeterGaugeIndicator$$ + Math.abs($DvtGaugeKeyboardHandler$$ - $DvtStatusMeterGaugeIndicator$$) * $DvtRatingGaugeRenderer$$ / ($DvtStatusMeterGaugeDefaults$$ - 1);
        $DvtStatusMeterGaugeCircularIndicator$$ && ($DvtGaugeDefaults$$ = $DvtStatusMeterGaugeIndicator$$ + Math.abs($DvtGaugeKeyboardHandler$$ - $DvtStatusMeterGaugeIndicator$$) * ($DvtStatusMeterGaugeDefaults$$ - 1 - $DvtRatingGaugeRenderer$$) / ($DvtStatusMeterGaugeDefaults$$ - 1));
        var $DvtGaugeEventManager$$ = $DvtGaugeRenderer$$.$formatTickLabelValue$($DvtGaugeDefaults$$, $DvtRatingGaugeEventManager$$), $DvtGaugeAutomation$$ = $DvtDialGaugeRenderer$$.$_getRotation$($DvtRatingGaugeEventManager$$, $DvtGaugeDefaults$$), $DvtGauge$$ = $DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$), $DvtGaugeDefaults$$ = $DvtGauge$$.x + $DvtDialGaugeDefaults$$ * Math.cos($DvtGaugeAutomation$$ - Math.PI / 2), $DvtGaugeAutomation$$ = 
        $DvtGauge$$.y + $DvtDialGaugeDefaults$$ * Math.sin($DvtGaugeAutomation$$ - Math.PI / 2), $DvtGaugeEventManager$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeEventManager$$, $DvtGaugeDefaults$$, $DvtGaugeAutomation$$);
        !$DvtDialGaugeIndicator$$.tickLabel.style.$getStyle$("color") && $DvtDialGaugeIndicator$$.background._isDark && $DvtDialGaugeIndicator$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
        $DvtGaugeEventManager$$.$setCSSStyle$($DvtDialGaugeIndicator$$.tickLabel.style);
        $DvtDialGaugeIndicator$$.tickLabel.style.$getStyle$("font-size") || $DvtGaugeEventManager$$.$setFontSize$($DvtLedGaugeDefaults$$);
        $DvtGaugeEventManager$$.$alignCenter$();
        $DvtGaugeEventManager$$.$alignMiddle$();
        $dvt$$3$$.$TextUtils$.$fitText$($DvtGaugeEventManager$$, $DvtStatusMeterGaugeRenderer$$.$w$ + .5, $DvtStatusMeterGaugeRenderer$$.$h$ + .5, $DvtRatingGaugePeer$$);
      }
    }
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtDialGaugeIndicator$$, $dvt$$3$$.$Container$);
  $DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = new $dvt$$3$$.$Matrix$;
    $DvtRatingGaugePeer$$.rotate($DvtRatingGaugeEventManager$$);
    this.$setMatrix$($DvtRatingGaugePeer$$);
    this.$_angleRads$ = $DvtRatingGaugeEventManager$$;
  };
  $DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
    return [this.$_angleRads$];
  };
  $DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($dvt$$3$$) {
    $dvt$$3$$ && 1 == $dvt$$3$$.length && this.$setAngle$($dvt$$3$$[0]);
  };
  $dvt$$3$$.$RatingGauge$ = function $$dvt$$3$$$$RatingGauge$$() {
  };
  $dvt$$3$$.$Obj$.$createSubclass$($dvt$$3$$.$RatingGauge$, $DvtGauge$$);
  $dvt$$3$$.$RatingGauge$.newInstance = function $$dvt$$3$$$$RatingGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$RatingGauge$;
    $DvtDialGaugeIndicator$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    return $DvtDialGaugeIndicator$$;
  };
  $dvt$$3$$.$RatingGauge$.prototype.Init = function $$dvt$$3$$$$RatingGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$) {
    $dvt$$3$$.$RatingGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
    this.$Defaults$ = new $DvtRatingGaugeDefaults$$;
  };
  $dvt$$3$$.$RatingGauge$.prototype.$SetOptions$ = function $$dvt$$3$$$$RatingGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    $dvt$$3$$.$RatingGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$));
  };
  $dvt$$3$$.$RatingGauge$.prototype.$Render$ = function $$dvt$$3$$$$RatingGauge$$$$Render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = this.$Options$.__layout.outerGap, $DvtStatusMeterGaugeCircularIndicator$$ = this.$Options$.max, $DvtDialGaugeDefaults$$ = "vertical" == this.$Options$.orientation, $DvtStatusMeterGaugeIndicator$$ = "none" != this.$Options$.preserveAspectRatio;
    this.$Options$.selectedState.source && $DvtStatusMeterGaugeIndicator$$ ? $dvt$$3$$.$ImageLoader$.$loadImage$(this.$getCtx$(), this.$Options$.selectedState.source, $dvt$$3$$.$Obj$.$createCallback$(this, function($DvtStatusMeterGaugeIndicator$$) {
      $dvt$$3$$.$Agent$.$isPlatformIE$() && 11 == $dvt$$3$$.$Agent$.$getVersion$() && $DvtStatusMeterGaugeIndicator$$ && 0 == $DvtStatusMeterGaugeIndicator$$.width && 0 == $DvtStatusMeterGaugeIndicator$$.height && ($DvtStatusMeterGaugeIndicator$$.width = 1, $DvtStatusMeterGaugeIndicator$$.height = 1);
      $DvtStatusMeterGaugeIndicator$$ && $DvtStatusMeterGaugeIndicator$$.width && $DvtStatusMeterGaugeIndicator$$.height && ($DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeIndicator$$.width / $DvtStatusMeterGaugeIndicator$$.height, this.$__shapeWidth$ = $DvtDialGaugeDefaults$$ ? Math.min($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$) * $DvtStatusMeterGaugeIndicator$$ / $DvtStatusMeterGaugeCircularIndicator$$) : Math.min(($DvtRatingGaugeDefaults$$ - 
      2 * $DvtDialGaugeIndicator$$) * $DvtStatusMeterGaugeIndicator$$, ($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtStatusMeterGaugeCircularIndicator$$), this.$__shapeHeight$ = this.$__shapeWidth$ / $DvtStatusMeterGaugeIndicator$$, this.$__bounds$ = $DvtDialGaugeDefaults$$ ? new $dvt$$3$$.$Rectangle$($DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - this.$__shapeHeight$ * $DvtStatusMeterGaugeCircularIndicator$$) / 2, $DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$, this.$__shapeHeight$ * 
      $DvtStatusMeterGaugeCircularIndicator$$) : new $dvt$$3$$.$Rectangle$(($DvtRatingGaugePeer$$ - this.$__shapeWidth$ * $DvtStatusMeterGaugeCircularIndicator$$) / 2, $DvtDialGaugeIndicator$$, this.$__shapeWidth$ * $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$), $DvtRatingGaugeRenderer$$.$render$(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$));
    })) : ($DvtStatusMeterGaugeIndicator$$ ? this.$__shapeHeight$ = this.$__shapeWidth$ = $DvtDialGaugeDefaults$$ ? Math.min($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtStatusMeterGaugeCircularIndicator$$) : Math.min($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$, ($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtStatusMeterGaugeCircularIndicator$$) : (this.$__shapeWidth$ = $DvtDialGaugeDefaults$$ ? $DvtRatingGaugePeer$$ - 
    2 * $DvtDialGaugeIndicator$$ : ($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtStatusMeterGaugeCircularIndicator$$, this.$__shapeHeight$ = $DvtDialGaugeDefaults$$ ? ($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtStatusMeterGaugeCircularIndicator$$ : $DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$), this.$__bounds$ = $DvtDialGaugeDefaults$$ ? new $dvt$$3$$.$Rectangle$($DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - this.$__shapeHeight$ * $DvtStatusMeterGaugeCircularIndicator$$) / 
    2, $DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$, this.$__shapeHeight$ * $DvtStatusMeterGaugeCircularIndicator$$) : new $dvt$$3$$.$Rectangle$(($DvtRatingGaugePeer$$ - this.$__shapeWidth$ * $DvtStatusMeterGaugeCircularIndicator$$) / 2, $DvtDialGaugeIndicator$$, this.$__shapeWidth$ * $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$), $DvtRatingGaugeRenderer$$.$render$(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$));
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__getLogicalObject$ = function $$dvt$$3$$$$RatingGauge$$$$__getLogicalObject$$() {
    var $DvtRatingGaugeEventManager$$ = this.$Options$.tooltip, $DvtRatingGaugeEventManager$$ = $DvtRatingGaugeEventManager$$ ? $DvtRatingGaugeEventManager$$.renderer : null, $DvtRatingGaugeDefaults$$ = $DvtGaugeStyleUtils$$.$getColor$(this);
    if ($DvtRatingGaugeEventManager$$) {
      var $DvtDialGaugeIndicator$$ = {component:this.$Options$._widgetConstructor, label:$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), color:$DvtRatingGaugeDefaults$$};
      return new $dvt$$3$$.$CustomDatatipPeer$(this.$getCtx$().$getTooltipManager$(), $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    }
    return new $DvtRatingGaugePeer$$(this);
  };
  $dvt$$3$$.$RatingGauge$.prototype.$GetValueAt$ = function $$dvt$$3$$$$RatingGauge$$$$GetValueAt$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = "vertical" == this.$Options$.orientation ? this.$__shapeHeight$ : this.$__shapeWidth$;
    if ($DvtGaugeDataUtils$$.$hasData$(this)) {
      if ("vertical" == this.$Options$.orientation) {
        $DvtRatingGaugePeer$$ = Math.max(Math.min($DvtRatingGaugePeer$$, this.$__bounds$.y + this.$__bounds$.$h$), this.$__bounds$.y), $DvtDialGaugeIndicator$$ = Math.max((this.$__bounds$.y + this.$__bounds$.$h$ - $DvtRatingGaugePeer$$) / $DvtRatingGaugeDefaults$$, this.$Options$.min);
      } else {
        $DvtRatingGaugeEventManager$$ = Math.max(Math.min($DvtRatingGaugeEventManager$$, this.$__bounds$.x + this.$__bounds$.$w$), this.$__bounds$.x);
        var $DvtDialGaugeIndicator$$ = 0, $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? Math.max((this.$__bounds$.x + this.$__bounds$.$w$ - $DvtRatingGaugeEventManager$$) / $DvtRatingGaugeDefaults$$, this.$Options$.min) : Math.max(($DvtRatingGaugeEventManager$$ - this.$__bounds$.x) / $DvtRatingGaugeDefaults$$, this.$Options$.min);
      }
      return $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $DvtDialGaugeIndicator$$);
    }
    return null;
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__processHoverEnd$ = function $$dvt$$3$$$$RatingGauge$$$$__processHoverEnd$$() {
    this.$__updateClipRects$(this.$Options$.value, "render");
    this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$(this.$Options$.value, this.$Options$.value, !1));
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__processValueChangeStart$ = function $$dvt$$3$$$$RatingGauge$$$$__processValueChangeStart$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    this.$__processValueChangeMove$($dvt$$3$$, $DvtRatingGaugeEventManager$$);
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__processValueChangeMove$ = function $$dvt$$3$$$$RatingGauge$$$$__processValueChangeMove$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = this.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
    this.$__updateClipRects$($DvtRatingGaugeDefaults$$, "hover");
    this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$(this.$Options$.value, $DvtRatingGaugeDefaults$$, !1));
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__processValueChangeEnd$ = function $$dvt$$3$$$$RatingGauge$$$$__processValueChangeEnd$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = this.$Options$.value;
    this.$Options$.value = this.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
    this.$Options$.changed = !0;
    this.$render$();
    this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeDefaults$$, this.$Options$.value, !1));
    this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeDefaults$$, this.$Options$.value, !0));
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__updateClipRects$ = function $$dvt$$3$$$$RatingGauge$$$$__updateClipRects$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    if ($DvtGaugeDataUtils$$.$hasData$(this)) {
      $DvtRatingGaugeDefaults$$ || ($DvtRatingGaugeDefaults$$ = this.$_container$);
      var $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtStatusMeterGaugeCircularIndicator$$ = "vertical" == this.$Options$.orientation, $DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? this.$__shapeHeight$ : this.$__shapeWidth$;
      $DvtRatingGaugeEventManager$$ = Math.max(Math.min($DvtRatingGaugeEventManager$$, this.$Options$.max), 0);
      var $DvtStatusMeterGaugeIndicator$$ = 0, $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeEventManager$$ * $DvtDialGaugeDefaults$$, $DvtDialGaugeRenderer$$ = $DvtRatingGaugeEventManager$$ * $DvtDialGaugeDefaults$$;
      "render" == $DvtRatingGaugePeer$$ && ($DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeEventManager$$ * $DvtDialGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ = 0);
      if ($DvtStatusMeterGaugeCircularIndicator$$) {
        if ($DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(0), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y, this.$__bounds$.$w$, this.$__bounds$.$h$ - $DvtDialGaugeRenderer$$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(1), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, 
        this.$__bounds$.y + this.$__bounds$.$h$ - $DvtStatusMeterGaugeIndicator$$, this.$__bounds$.$w$, $DvtStatusMeterGaugeIndicator$$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(2)) {
          $DvtRatingGaugePeer$$ = new $dvt$$3$$.$ClipPath$, $DvtRatingGaugePeer$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y + this.$__bounds$.$h$ - $DvtGaugeKeyboardHandler$$, this.$__bounds$.$w$, $DvtGaugeKeyboardHandler$$), $DvtStatusMeterGaugeIndicator$$.$setClipPath$($DvtRatingGaugePeer$$);
        }
      } else {
        if ($DvtDialGaugeIndicator$$) {
          if ($DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(0), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y, this.$__bounds$.$w$ - $DvtDialGaugeRenderer$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(1), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x + 
          this.$__bounds$.$w$ - $DvtDialGaugeRenderer$$, this.$__bounds$.y, $DvtStatusMeterGaugeIndicator$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(2)) {
            $DvtRatingGaugePeer$$ = new $dvt$$3$$.$ClipPath$, $DvtRatingGaugePeer$$.$addRect$(this.$__bounds$.x + this.$__bounds$.$w$ - $DvtDialGaugeRenderer$$, this.$__bounds$.y, $DvtGaugeKeyboardHandler$$, this.$__bounds$.$h$), $DvtStatusMeterGaugeIndicator$$.$setClipPath$($DvtRatingGaugePeer$$);
          }
        } else {
          if ($DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(0), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x + $DvtDialGaugeRenderer$$, this.$__bounds$.y, this.$__bounds$.$w$ - $DvtDialGaugeRenderer$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(1), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$, $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, 
          this.$__bounds$.y, $DvtStatusMeterGaugeIndicator$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(2)) {
            $DvtRatingGaugePeer$$ = new $dvt$$3$$.$ClipPath$, $DvtRatingGaugePeer$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y, $DvtGaugeKeyboardHandler$$, this.$__bounds$.$h$), $DvtStatusMeterGaugeIndicator$$.$setClipPath$($DvtRatingGaugePeer$$);
          }
        }
      }
      this.$UpdateAriaLiveValue$($DvtRatingGaugeDefaults$$, $DvtRatingGaugeEventManager$$);
    }
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__getRatingGaugeItem$ = function $$dvt$$3$$$$RatingGauge$$$$__getRatingGaugeItem$$($dvt$$3$$) {
    return this.$_container$.$getChildAt$(0).$getChildAt$($dvt$$3$$);
  };
  $dvt$$3$$.$RatingGauge$.prototype.$CreateEventManager$ = function $$dvt$$3$$$$RatingGauge$$$$CreateEventManager$$() {
    return new $DvtRatingGaugeEventManager$$(this);
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtRatingGaugeDefaults$$.$SKIN_ALTA$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:null}, selectedState:{shape:"star", color:"#F8C15A", borderColor:null}, hoverState:{shape:"star", color:"#007CC8", borderColor:null}, changedState:{shape:"star", color:"#ED2C02", borderColor:null}};
  $DvtRatingGaugeDefaults$$.$VERSION_1$ = {min:0, max:5, orientation:"horizontal", unselectedState:{shape:"star", color:"#F2F2F2", borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, preserveAspectRatio:"meet", step:1};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtRatingGaugePeer$$, $dvt$$3$$.$SimpleObjPeer$);
  $DvtRatingGaugePeer$$.prototype.$getDatatip$ = function $$DvtRatingGaugePeer$$$$$getDatatip$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $dvt$$3$$ = this.$_gauge$.$getOptions$();
    $DvtRatingGaugeEventManager$$ = this.$_gauge$.$getEventManager$().$IsMouseEditing$ ? $DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$, this.$_gauge$.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$)) : $DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$);
    return ($DvtRatingGaugeEventManager$$ = $DvtGaugeDataUtils$$.$getThreshold$(this.$_gauge$, $DvtRatingGaugeEventManager$$)) && $DvtRatingGaugeEventManager$$.shortDesc ? $DvtRatingGaugeEventManager$$.shortDesc : $dvt$$3$$.shortDesc;
  };
  var $DvtRatingGaugeRenderer$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtRatingGaugeRenderer$$, $dvt$$3$$.$Obj$);
  $DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    if ($DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$)) {
      $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
      $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$);
      $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$);
      var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeDefaults$$.selectedState.color, $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.changedState.color, $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.selectedState.borderColor, $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeDefaults$$.changedState.borderColor;
      $DvtDialGaugeIndicator$$ && $DvtDialGaugeIndicator$$.color && ($DvtDialGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeIndicator$$.color);
      $DvtDialGaugeIndicator$$ && $DvtDialGaugeIndicator$$.borderColor && ($DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeIndicator$$.borderColor);
      $DvtDialGaugeIndicator$$ = {value:0, type:$DvtRatingGaugeDefaults$$.unselectedState.shape, color:$DvtRatingGaugeDefaults$$.unselectedState.color, borderColor:$DvtRatingGaugeDefaults$$.unselectedState.borderColor, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.unselectedState.source};
      $DvtStatusMeterGaugeCircularIndicator$$ = {value:0, type:$DvtRatingGaugeDefaults$$.selectedState.shape, color:$DvtStatusMeterGaugeCircularIndicator$$, borderColor:$DvtStatusMeterGaugeIndicator$$, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.selectedState.source};
      $DvtDialGaugeDefaults$$ = {value:0, type:$DvtRatingGaugeDefaults$$.changedState.shape, color:$DvtDialGaugeDefaults$$, borderColor:$DvtGaugeKeyboardHandler$$, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.changedState.source};
      $DvtGaugeKeyboardHandler$$ = {value:0, type:$DvtRatingGaugeDefaults$$.hoverState.shape, color:$DvtRatingGaugeDefaults$$.hoverState.color, borderColor:$DvtRatingGaugeDefaults$$.hoverState.borderColor, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.hoverState.source};
      "dot" == $DvtRatingGaugeDefaults$$.unselectedState.shape && ($DvtDialGaugeIndicator$$.type = "circle", $DvtDialGaugeIndicator$$.visualEffects = "none", $DvtDialGaugeIndicator$$.size = .05);
      $DvtRatingGaugeRenderer$$.$_createShapes$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
      $DvtRatingGaugeRenderer$$.$_createShapes$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$.changed ? $DvtDialGaugeDefaults$$ : $DvtStatusMeterGaugeCircularIndicator$$);
      $DvtRatingGaugeDefaults$$.readOnly || $DvtRatingGaugeRenderer$$.$_createShapes$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtGaugeKeyboardHandler$$);
      $DvtRatingGaugeEventManager$$.$__updateClipRects$($DvtRatingGaugeDefaults$$.value, "render", $DvtRatingGaugePeer$$);
    } else {
      $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$));
    }
  };
  $DvtRatingGaugeRenderer$$.$_createShapes$ = function $$DvtRatingGaugeRenderer$$$$_createShapes$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$Container$($DvtDialGaugeIndicator$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$__bounds$, $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$__shapeWidth$;
    $DvtRatingGaugeEventManager$$ = $DvtRatingGaugeEventManager$$.$__shapeHeight$;
    var $DvtGaugeKeyboardHandler$$;
    $DvtRatingGaugeDefaults$$.source ? ($DvtGaugeKeyboardHandler$$ = new $dvt$$3$$.$ImageMarker$($DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$ / 2, $DvtRatingGaugeEventManager$$ / 2, $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeEventManager$$, null, $DvtRatingGaugeDefaults$$.source), $DvtGaugeKeyboardHandler$$.$setPreserveAspectRatio$("none")) : "none" != $DvtRatingGaugeDefaults$$.type && ($DvtGaugeKeyboardHandler$$ = $dvt$$3$$.$LedGauge$.newInstance($DvtDialGaugeIndicator$$, null, 
    null, !0), $DvtGaugeKeyboardHandler$$.$render$($DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeEventManager$$));
    for ($DvtRatingGaugeDefaults$$ = 0;$DvtRatingGaugeDefaults$$ < $DvtRatingGaugePeer$$.max;$DvtRatingGaugeDefaults$$++) {
      var $DvtDialGaugeRenderer$$, $DvtStatusMeterGaugeDefaults$$;
      "vertical" == $DvtRatingGaugePeer$$.orientation ? ($DvtDialGaugeRenderer$$ = $DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ / 2 - $DvtStatusMeterGaugeIndicator$$ / 2, $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ - ($DvtRatingGaugeDefaults$$ + 1) * $DvtRatingGaugeEventManager$$) : ($DvtDialGaugeRenderer$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtDialGaugeIndicator$$) ? $DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ - ($DvtRatingGaugeDefaults$$ + 
      1) * $DvtStatusMeterGaugeIndicator$$ : $DvtDialGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$ * $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2 - $DvtRatingGaugeEventManager$$ / 2);
      $DvtGaugeKeyboardHandler$$ && ($DvtDialGaugeRenderer$$ = new $dvt$$3$$.$Use$($DvtDialGaugeIndicator$$, $DvtDialGaugeRenderer$$, $DvtStatusMeterGaugeDefaults$$, $DvtGaugeKeyboardHandler$$), $DvtStatusMeterGaugeCircularIndicator$$.$addChild$($DvtDialGaugeRenderer$$));
    }
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtRatingGaugeEventManager$$, $DvtGaugeEventManager$$);
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseOver$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseOver$$($dvt$$3$$) {
    if (!1 === this.$_gauge$.$getOptions$().readOnly) {
      var $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY);
      this.$_gauge$.$__processValueChangeStart$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y);
      this.$IsMouseEditing$ = !0;
    }
    $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $dvt$$3$$);
  };
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseOut$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseOut$$($dvt$$3$$) {
    !1 === this.$_gauge$.$getOptions$().readOnly && (this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY), this.$_gauge$.$__processHoverEnd$(), this.$IsMouseEditing$ = !1);
    $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $dvt$$3$$);
  };
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseMove$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseMove$$($dvt$$3$$) {
    var $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY);
    !1 !== this.$_gauge$.$getOptions$().readOnly || this.$IsMouseEditing$ || this.$_gauge$.$getOptions$().value == this.$_gauge$.$GetValueAt$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y) || (this.$IsMouseEditing$ = !0);
    $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $dvt$$3$$);
  };
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseDown$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseDown$$($dvt$$3$$) {
    $DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $dvt$$3$$);
  };
  $DvtRatingGaugeEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtRatingGaugeEventManager$$$$$ProcessKeyboardEvent$$($dvt$$3$$) {
    this.$IsMouseEditing$ = !1;
    return $DvtRatingGaugeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $dvt$$3$$);
  };
  $DvtRatingGaugeEventManager$$.prototype.$IsShowingTooltipWhileEditing$ = function $$DvtRatingGaugeEventManager$$$$$IsShowingTooltipWhileEditing$$() {
    return !0;
  };
  $dvt$$3$$.$exportProperty$($dvt$$3$$, "DialGauge", $dvt$$3$$.$DialGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$, "LedGauge", $dvt$$3$$.$LedGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$, "RatingGauge", $dvt$$3$$.$RatingGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$, "StatusMeterGauge", $dvt$$3$$.$StatusMeterGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$.$DialGauge$, "DialGauge", $dvt$$3$$.$DialGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$.$DialGauge$, "LedGauge", $dvt$$3$$.$LedGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$.$DialGauge$, "RatingGauge", $dvt$$3$$.$RatingGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$.$DialGauge$, "StatusMeterGauge", $dvt$$3$$.$StatusMeterGauge$);
  $dvt$$3$$.$exportProperty$($DvtGauge$$.prototype, "getAutomation", $DvtGauge$$.prototype.$getAutomation$);
  $dvt$$3$$.$exportProperty$($DvtGauge$$.prototype, "destroy", $DvtGauge$$.prototype.$destroy$);
  $dvt$$3$$.$exportProperty$($DvtGauge$$.prototype, "render", $DvtGauge$$.prototype.$render$);
  $dvt$$3$$.$exportProperty$($DvtGaugeAutomation$$.prototype, "getDomElementForSubId", $DvtGaugeAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$3$$.$exportProperty$($DvtGaugeAutomation$$.prototype, "getValue", $DvtGaugeAutomation$$.prototype.getValue);
  $dvt$$3$$.$exportProperty$($DvtGaugeAutomation$$.prototype, "getMetricLabel", $DvtGaugeAutomation$$.prototype.$getMetricLabel$);
  $dvt$$3$$.$LedGaugeRenderer$ = $DvtLedGaugeRenderer$$;
})(dvt);

  return dvt;
});
