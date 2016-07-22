/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "jqueryui-amd/position"], function($oj$$62$$, $$$$56$$) {
  $oj$$62$$.$PopupService$ = function $$oj$$62$$$$PopupService$$() {
    this.Init();
  };
  $oj$$62$$.$Object$.$createSubclass$($oj$$62$$.$PopupService$, $oj$$62$$.$Object$, "oj.PopupService");
  $oj$$62$$.$PopupService$.prototype.Init = function $$oj$$62$$$$PopupService$$$Init$() {
    $oj$$62$$.$PopupService$.$superclass$.Init.call(this);
  };
  $oj$$62$$.$PopupService$.$getInstance$ = function $$oj$$62$$$$PopupService$$$getInstance$$() {
    $oj$$62$$.$PopupService$.$_popupService$ || ($oj$$62$$.$PopupService$.$_popupService$ = new $oj$$62$$.$PopupServiceImpl$);
    return $oj$$62$$.$PopupService$.$_popupService$;
  };
  $oj$$62$$.$PopupService$.prototype.open = function $$oj$$62$$$$PopupService$$$open$() {
    $oj$$62$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$62$$.$PopupService$.prototype.close = function $$oj$$62$$$$PopupService$$$close$() {
    $oj$$62$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$62$$.$PopupService$.prototype.$changeOptions$ = function $$oj$$62$$$$PopupService$$$$changeOptions$$() {
    $oj$$62$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$62$$.$PopupService$.prototype.$triggerOnDescendents$ = function $$oj$$62$$$$PopupService$$$$triggerOnDescendents$$() {
    $oj$$62$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$62$$.$PopupService$.prototype.destroy = function $$oj$$62$$$$PopupService$$$destroy$() {
    delete $oj$$62$$.$PopupService$.$_popupService$;
  };
  $oj$$62$$.$PopupService$.$MODALITY$ = {NONE:"none", $MODAL$:"modal", $MODELESS$:"modeless"};
  $oj$$62$$.$PopupService$.$EVENT$ = {$POPUP_REMOVE$:"ojPopupRemove", $POPUP_CLOSE$:"ojPopupClose", $POPUP_REFRESH$:"ojPopupRefresh", $POPUP_AUTODISMISS$:"ojPopupAutoDismiss"};
  $oj$$62$$.$PopupService$.$LAYER_LEVEL$ = {$TOP_LEVEL$:"topLevel", $NEAREST_ANCESTOR$:"nearestAncestor"};
  $oj$$62$$.$PopupService$.$OPTION$ = {$POPUP$:"popup", $EVENTS$:"events", $MODALITY$:"modality", $LAUNCHER$:"launcher", $POSITION$:"position", $LAYER_SELECTORS$:"layerSelectors", $LAYER_LEVEL$:"layerLevel"};
  $oj$$62$$.$PopupServiceImpl$ = function $$oj$$62$$$$PopupServiceImpl$$() {
    this.Init();
  };
  $oj$$62$$.$Object$.$createSubclass$($oj$$62$$.$PopupServiceImpl$, $oj$$62$$.$PopupService$, "oj.PopupServiceImpl");
  $oj$$62$$.$PopupServiceImpl$.prototype.open = function $$oj$$62$$$$PopupServiceImpl$$$open$($layerLevel_options$$392$$) {
    $oj$$62$$.$Assert$.$assertObject$($layerLevel_options$$392$$);
    var $popup$$4$$ = $layerLevel_options$$392$$[$oj$$62$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$62$$.$Assert$.$assertPrototype$($popup$$4$$, jQuery);
    var $launcher$$21$$ = $layerLevel_options$$392$$[$oj$$62$$.$PopupService$.$OPTION$.$LAUNCHER$];
    $oj$$62$$.$Assert$.$assertPrototype$($launcher$$21$$, jQuery);
    var $position$$38$$ = $layerLevel_options$$392$$[$oj$$62$$.$PopupService$.$OPTION$.$POSITION$];
    $oj$$62$$.$Assert$.$assertObjectOrNull$($position$$38$$);
    var $events$$8$$ = $layerLevel_options$$392$$[$oj$$62$$.$PopupService$.$OPTION$.$EVENTS$];
    $oj$$62$$.$Assert$.$assertObject$($events$$8$$);
    var $modality$$1$$ = $layerLevel_options$$392$$[$oj$$62$$.$PopupService$.$OPTION$.$MODALITY$];
    if (!$modality$$1$$ || $oj$$62$$.$PopupService$.$MODALITY$.$MODELESS$ !== $modality$$1$$ && $oj$$62$$.$PopupService$.$MODALITY$.$MODAL$ !== $modality$$1$$) {
      $modality$$1$$ = $oj$$62$$.$PopupService$.$MODALITY$.NONE;
    }
    var $layerClass$$3$$ = $layerLevel_options$$392$$[$oj$$62$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$62$$.$Assert$.$assertString$($layerClass$$3$$);
    $layerLevel_options$$392$$ = $layerLevel_options$$392$$[$oj$$62$$.$PopupService$.$OPTION$.$LAYER_LEVEL$];
    if (!$layerLevel_options$$392$$ || $oj$$62$$.$PopupService$.$LAYER_LEVEL$.$TOP_LEVEL$ !== $layerLevel_options$$392$$ && $oj$$62$$.$PopupService$.$LAYER_LEVEL$.$NEAREST_ANCESTOR$ !== $layerLevel_options$$392$$) {
      $layerLevel_options$$392$$ = $oj$$62$$.$PopupService$.$LAYER_LEVEL$.$NEAREST_ANCESTOR$;
    }
    $oj$$62$$.$DomUtils$.$setLogicalParent$($popup$$4$$, $launcher$$21$$);
    $oj$$62$$.$ZOrderUtils$.$addToAncestorLayer$($popup$$4$$, $launcher$$21$$, $events$$8$$, $modality$$1$$, $layerClass$$3$$, $layerLevel_options$$392$$);
    $popup$$4$$.show();
    $popup$$4$$.removeAttr("aria-hidden");
    $position$$38$$ && $popup$$4$$.position($position$$38$$);
    this.$_assertEventSink$();
    $oj$$62$$.Components.$subtreeShown$($popup$$4$$[0]);
  };
  $oj$$62$$.$PopupServiceImpl$.prototype.close = function $$oj$$62$$$$PopupServiceImpl$$$close$($options$$393_popup$$5$$) {
    $oj$$62$$.$Assert$.$assertObject$($options$$393_popup$$5$$);
    $options$$393_popup$$5$$ = $options$$393_popup$$5$$[$oj$$62$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$62$$.$Assert$.$assertPrototype$($options$$393_popup$$5$$, jQuery);
    $oj$$62$$.$ZOrderUtils$.$removeFromAncestorLayer$($options$$393_popup$$5$$);
    $options$$393_popup$$5$$.hide();
    $options$$393_popup$$5$$.attr("aria-hidden", "true");
    $oj$$62$$.$DomUtils$.$setLogicalParent$($options$$393_popup$$5$$, null);
    this.$_assertEventSink$();
    $oj$$62$$.Components.$subtreeHidden$($options$$393_popup$$5$$[0]);
  };
  $oj$$62$$.$PopupServiceImpl$.prototype.$changeOptions$ = function $$oj$$62$$$$PopupServiceImpl$$$$changeOptions$$($layerClass$$4_options$$394$$) {
    $oj$$62$$.$Assert$.$assertObject$($layerClass$$4_options$$394$$);
    var $layer$$2_popup$$6$$ = $layerClass$$4_options$$394$$[$oj$$62$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$62$$.$Assert$.$assertPrototype$($layer$$2_popup$$6$$, jQuery);
    $layer$$2_popup$$6$$ = $oj$$62$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$2_popup$$6$$);
    $oj$$62$$.$Assert$.$assertPrototype$($layer$$2_popup$$6$$, jQuery);
    var $events$$9_modality$$2$$ = $layerClass$$4_options$$394$$[$oj$$62$$.$PopupService$.$OPTION$.$EVENTS$];
    $events$$9_modality$$2$$ && $oj$$62$$.$ZOrderUtils$.$applyEvents$($layer$$2_popup$$6$$, $events$$9_modality$$2$$);
    ($events$$9_modality$$2$$ = $layerClass$$4_options$$394$$[$oj$$62$$.$PopupService$.$OPTION$.$MODALITY$]) && $oj$$62$$.$ZOrderUtils$.$applyModality$($layer$$2_popup$$6$$, $events$$9_modality$$2$$);
    $layerClass$$4_options$$394$$ = $layerClass$$4_options$$394$$[$oj$$62$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$62$$.$StringUtils$.$isEmptyOrUndefined$($layerClass$$4_options$$394$$) || $layer$$2_popup$$6$$.attr("class", $layerClass$$4_options$$394$$);
  };
  $oj$$62$$.$PopupServiceImpl$.prototype.$triggerOnDescendents$ = function $$oj$$62$$$$PopupServiceImpl$$$$triggerOnDescendents$$($layer$$3_popup$$7$$, $event$$585$$, $argsArray$$1$$) {
    var $context$$146$$ = {};
    $context$$146$$.event = $event$$585$$;
    $context$$146$$.argsArray = $argsArray$$1$$;
    $layer$$3_popup$$7$$ = $oj$$62$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$3_popup$$7$$);
    $oj$$62$$.$ZOrderUtils$.$postOrderVisit$($layer$$3_popup$$7$$, this.$_triggerOnDescendentsVisitCallback$, $context$$146$$);
  };
  $oj$$62$$.$PopupServiceImpl$.prototype.$_triggerOnDescendentsVisitCallback$ = function $$oj$$62$$$$PopupServiceImpl$$$$_triggerOnDescendentsVisitCallback$$($layer$$4$$, $context$$147$$) {
    var $event$$586$$ = $context$$147$$.event, $argsArray$$2$$ = $context$$147$$.argsArray, $events$$10$$ = $oj$$62$$.$ZOrderUtils$.$getEvents$($layer$$4$$);
    $events$$10$$ && $$$$56$$.isFunction($events$$10$$[$event$$586$$]) && $events$$10$$[$event$$586$$].apply(this, $argsArray$$2$$);
    return $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$62$$.$PopupServiceImpl$.prototype.$_assertEventSink$ = function $$oj$$62$$$$PopupServiceImpl$$$$_assertEventSink$$() {
    var $docElement_hasPopupsOpen$$ = $oj$$62$$.$ZOrderUtils$.$hasPopupsOpen$(), $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$;
    if (!$docElement_hasPopupsOpen$$ && $callbackEventFilter_simpleTapRecognizer$$) {
      window.removeEventListener("resize", $oj$$62$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      window.removeEventListener("scroll", $oj$$62$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$ = document.documentElement;
      $docElement_hasPopupsOpen$$.removeEventListener("mousewheel", $oj$$62$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$.removeEventListener("DOMMouseScroll", $oj$$62$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      delete this.$_callbackEventFilter$;
      for (var $i$$426$$ = 0;$i$$426$$ < $oj$$62$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$426$$++) {
        var $event$$587$$ = $oj$$62$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$426$$];
        $docElement_hasPopupsOpen$$.removeEventListener($event$$587$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
      }
      if ($callbackEventFilter_simpleTapRecognizer$$ = this.$_simpleTapRecognizer$) {
        $callbackEventFilter_simpleTapRecognizer$$.destroy(), delete this.$_simpleTapRecognizer$;
      }
    } else {
      if ($docElement_hasPopupsOpen$$ && !$callbackEventFilter_simpleTapRecognizer$$) {
        window.addEventListener("resize", $oj$$62$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        window.addEventListener("scroll", $oj$$62$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$ = document.documentElement;
        $docElement_hasPopupsOpen$$.addEventListener("mousewheel", $oj$$62$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$.addEventListener("DOMMouseScroll", $oj$$62$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$ = $$$$56$$.proxy(this.$_eventFilterCallback$, this);
        for ($i$$426$$ = 0;$i$$426$$ < $oj$$62$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$426$$++) {
          $event$$587$$ = $oj$$62$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$426$$], $docElement_hasPopupsOpen$$.addEventListener($event$$587$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
        }
        $oj$$62$$.$DomUtils$.$isTouchSupported$() && (this.$_simpleTapRecognizer$ = new $oj$$62$$.$SimpleTapRecognizer$($callbackEventFilter_simpleTapRecognizer$$));
      }
    }
  };
  $oj$$62$$.$PopupServiceImpl$.prototype.$_eventFilterCallback$ = function $$oj$$62$$$$PopupServiceImpl$$$$_eventFilterCallback$$($event$$588$$) {
    var $context$$148_target$$102$$ = $$$$56$$($event$$588$$.target);
    if (!$oj$$62$$.$ZOrderUtils$.$hasPopupsOpen$()) {
      this.$_assertEventSink$();
    } else {
      if (!$oj$$62$$.$DomUtils$.$isChromeEvent$($event$$588$$) && ("focus" !== $event$$588$$.type || $context$$148_target$$102$$.is(":focusable"))) {
        var $defaultLayer$$ = $oj$$62$$.$ZOrderUtils$.$getDefaultLayer$();
        if ("keydown" === $event$$588$$.type && $oj$$62$$.$ZOrderUtils$.$hasModalDialogOpen$() && !$oj$$62$$.$DomUtils$.$isAncestor$($defaultLayer$$[0], $context$$148_target$$102$$[0])) {
          $oj$$62$$.$ZOrderUtils$.$eatEvent$($$$$56$$.Event($event$$588$$));
        } else {
          var $props$$28_targetWitinLayer$$ = $oj$$62$$.$ZOrderUtils$.$getFirstAncestorLayer$($context$$148_target$$102$$);
          if ($defaultLayer$$[0] !== $props$$28_targetWitinLayer$$[0]) {
            if (!$props$$28_targetWitinLayer$$.hasClass($oj$$62$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$)) {
              var $lastFocusLayer$$ = this.$_lastFocusLayer$;
              $lastFocusLayer$$ && $lastFocusLayer$$.removeClass($oj$$62$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              $props$$28_targetWitinLayer$$.addClass($oj$$62$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              this.$_lastFocusLayer$ = $props$$28_targetWitinLayer$$;
            }
          } else {
            if ($lastFocusLayer$$ = this.$_lastFocusLayer$) {
              $lastFocusLayer$$.removeClass($oj$$62$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$), delete this.$_lastFocusLayer$;
            }
          }
          if ("focus" !== $event$$588$$.type || "-1" !== $context$$148_target$$102$$.attr("tabindex")) {
            var $context$$148_target$$102$$ = {}, $props$$28_targetWitinLayer$$ = {}, $key$$175$$;
            for ($key$$175$$ in $event$$588$$) {
              $oj$$62$$.$PopupServiceImpl$.$_COPY_SAFE_EVENT_PROPERTIES$[$key$$175$$] && !$$$$56$$.isFunction($event$$588$$[$key$$175$$]) && ($props$$28_targetWitinLayer$$[$key$$175$$] = $event$$588$$[$key$$175$$]);
            }
            $context$$148_target$$102$$.event = $$$$56$$.Event($event$$588$$, $props$$28_targetWitinLayer$$);
            $oj$$62$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$, $oj$$62$$.$PopupServiceImpl$.$_redistributeVisitCallback$, $context$$148_target$$102$$);
          }
        }
      }
    }
  };
  $oj$$62$$.$PopupServiceImpl$.$_redistributeVisitCallback$ = function $$oj$$62$$$$PopupServiceImpl$$$_redistributeVisitCallback$$($layer$$5$$, $context$$149$$) {
    var $events$$11$$ = $oj$$62$$.$ZOrderUtils$.$getEvents$($layer$$5$$), $event$$589$$ = $context$$149$$.event;
    if ($events$$11$$ && $$$$56$$.isFunction($events$$11$$[$oj$$62$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$])) {
      $events$$11$$[$oj$$62$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$]($event$$589$$);
    }
    return $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$62$$.$PopupServiceImpl$.$_refreshCallback$ = function $$oj$$62$$$$PopupServiceImpl$$$_refreshCallback$$() {
    isNaN($oj$$62$$.$PopupServiceImpl$.$_refreshTimmer$) && ($oj$$62$$.$PopupServiceImpl$.$_refreshTimmer$ = window.setTimeout(function() {
      delete $oj$$62$$.$PopupServiceImpl$.$_refreshTimmer$;
      var $defaultLayer$$1$$ = $oj$$62$$.$ZOrderUtils$.$getDefaultLayer$();
      $oj$$62$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$1$$, $oj$$62$$.$PopupServiceImpl$.$_refreshVisitCallback$);
    }, $oj$$62$$.$PopupServiceImpl$.$_REFRESH_DELAY$));
  };
  $oj$$62$$.$PopupServiceImpl$.$_refreshVisitCallback$ = function $$oj$$62$$$$PopupServiceImpl$$$_refreshVisitCallback$$($layer$$6$$, $context$$150$$) {
    if (0 < $context$$150$$.level) {
      return $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$12$$ = $oj$$62$$.$ZOrderUtils$.$getEvents$($layer$$6$$);
    if ($events$$12$$ && $$$$56$$.isFunction($events$$12$$[$oj$$62$$.$PopupService$.$EVENT$.$POPUP_REFRESH$])) {
      $events$$12$$[$oj$$62$$.$PopupService$.$EVENT$.$POPUP_REFRESH$]();
    }
    return $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$62$$.$PopupServiceImpl$.prototype.destroy = function $$oj$$62$$$$PopupServiceImpl$$$destroy$() {
    $oj$$62$$.$PopupServiceImpl$.$superclass$.destroy.call(this);
  };
  $oj$$62$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$ = "oj-focus-within";
  $oj$$62$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$ = ["focus", "mousedown", "keydown"];
  $oj$$62$$.$PopupServiceImpl$.$_COPY_SAFE_EVENT_PROPERTIES$ = {altKey:!0, bubbles:!0, cancelable:!0, ctrlKey:!0, currentTarget:!0, eventPhase:!0, metaKey:!0, relatedTarget:!0, shiftKey:!0, target:!0, timeStamp:!0, view:!0, which:!0, button:!0, buttons:!0, clientX:!0, clientY:!0, offsetX:!0, offsetY:!0, pageX:!0, pageY:!0, screenX:!0, screenY:!0, toElement:!0, "char":!0, charCode:!0, key:!0, keyCode:!0};
  $oj$$62$$.$PopupServiceImpl$.$_REFRESH_DELAY$ = 100;
  $oj$$62$$.$ZOrderUtils$ = {};
  $oj$$62$$.$ZOrderUtils$.$getFirstAncestorLayer$ = function $$oj$$62$$$$ZOrderUtils$$$getFirstAncestorLayer$$($launcher$$22_parent$$51$$) {
    if (!$launcher$$22_parent$$51$$) {
      return $oj$$62$$.$ZOrderUtils$.$getDefaultLayer$();
    }
    for (;$launcher$$22_parent$$51$$ && 0 < $launcher$$22_parent$$51$$.length && $launcher$$22_parent$$51$$.attr("oj.ZOrderUtils._SURROGATE_ATTR") !== $oj$$62$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$;) {
      if ($oj$$62$$.$ZOrderUtils$.$_hasSurrogate$($launcher$$22_parent$$51$$[0])) {
        return $launcher$$22_parent$$51$$;
      }
      $launcher$$22_parent$$51$$ = $launcher$$22_parent$$51$$.parent();
    }
    return $oj$$62$$.$ZOrderUtils$.$getDefaultLayer$();
  };
  $oj$$62$$.$ZOrderUtils$.$getDefaultLayer$ = function $$oj$$62$$$$ZOrderUtils$$$getDefaultLayer$$() {
    var $defaultLayer$$2$$ = $$$$56$$(document.getElementById($oj$$62$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$));
    if (0 < $defaultLayer$$2$$.length) {
      return $defaultLayer$$2$$;
    }
    $defaultLayer$$2$$ = $$$$56$$("\x3cdiv\x3e");
    $defaultLayer$$2$$.attr("role", "presentation");
    $defaultLayer$$2$$.attr("id", $oj$$62$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$);
    $defaultLayer$$2$$.prependTo($$$$56$$(document.body));
    return $defaultLayer$$2$$;
  };
  $oj$$62$$.$ZOrderUtils$.$addToAncestorLayer$ = function $$oj$$62$$$$ZOrderUtils$$$addToAncestorLayer$$($popup$$8$$, $ancestorLayer_launcher$$23$$, $events$$13$$, $modality$$3$$, $layerClass$$5_surrogate$$2$$, $layer$$7_layerLevel$$1$$) {
    var $popupDom$$ = $popup$$8$$[0];
    if ($oj$$62$$.$ZOrderUtils$.$_hasSurrogate$($popupDom$$.parentNode)) {
      throw Error("JET Popup is already open - id: " + $popupDom$$.getAttribute("id"));
    }
    $ancestorLayer_launcher$$23$$ = $oj$$62$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$7_layerLevel$$1$$ === $oj$$62$$.$PopupService$.$LAYER_LEVEL$.$TOP_LEVEL$ ? null : $ancestorLayer_launcher$$23$$);
    $layer$$7_layerLevel$$1$$ = $$$$56$$("\x3cdiv\x3e");
    var $popupId$$2$$ = $popup$$8$$.attr("id");
    $oj$$62$$.$StringUtils$.$isEmptyOrUndefined$($popupId$$2$$) ? $layer$$7_layerLevel$$1$$.uniqueId() : $layer$$7_layerLevel$$1$$.attr("id", [$popupId$$2$$, "layer"].join("_"));
    $layer$$7_layerLevel$$1$$.attr("role", "presentation");
    $layer$$7_layerLevel$$1$$.addClass($layerClass$$5_surrogate$$2$$);
    $popup$$8$$.after($layer$$7_layerLevel$$1$$);
    $layerClass$$5_surrogate$$2$$ = $oj$$62$$.$ZOrderUtils$.$_createSurrogate$($layer$$7_layerLevel$$1$$);
    $oj$$62$$.Components.$subtreeDetached$($popupDom$$);
    $popup$$8$$.appendTo($layer$$7_layerLevel$$1$$);
    $layer$$7_layerLevel$$1$$.appendTo($ancestorLayer_launcher$$23$$);
    $oj$$62$$.Components.$subtreeAttached$($popupDom$$);
    $oj$$62$$.$ZOrderUtils$.$applyModality$($layer$$7_layerLevel$$1$$, $modality$$3$$);
    $oj$$62$$.$ZOrderUtils$.$applyEvents$($layer$$7_layerLevel$$1$$, $events$$13$$, $layerClass$$5_surrogate$$2$$);
  };
  $oj$$62$$.$ZOrderUtils$.$applyEvents$ = function $$oj$$62$$$$ZOrderUtils$$$applyEvents$$($layer$$8$$, $events$$14$$, $surrogate$$3$$) {
    if (!$surrogate$$3$$) {
      var $surrogateId$$1$$ = $layer$$8$$.attr($oj$$62$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
      $surrogateId$$1$$ && ($surrogate$$3$$ = $$$$56$$(document.getElementById($surrogateId$$1$$)));
    }
    $layer$$8$$.data($oj$$62$$.$ZOrderUtils$.$_EVENTS_DATA$, $events$$14$$);
    $surrogate$$3$$ && $events$$14$$ && $$$$56$$.isFunction($events$$14$$[$oj$$62$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]) && ($surrogate$$3$$.surrogate(), $surrogate$$3$$.surrogate("option", "beforeDestroy", $events$$14$$[$oj$$62$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]));
  };
  $oj$$62$$.$ZOrderUtils$.$getEvents$ = function $$oj$$62$$$$ZOrderUtils$$$getEvents$$($layer$$9$$) {
    return $layer$$9$$.data($oj$$62$$.$ZOrderUtils$.$_EVENTS_DATA$);
  };
  $oj$$62$$.$ZOrderUtils$.$_createSurrogate$ = function $$oj$$62$$$$ZOrderUtils$$$_createSurrogate$$($layer$$10$$) {
    var $surrogate$$4$$ = $$$$56$$("\x3cscript\x3e"), $layerId$$1_surrogateId$$2$$ = $layer$$10$$.attr("id");
    $oj$$62$$.$StringUtils$.$isEmptyOrUndefined$($layerId$$1_surrogateId$$2$$) ? $surrogate$$4$$.uniqueId() : $surrogate$$4$$.attr("id", [$layerId$$1_surrogateId$$2$$, "surrogate"].join("_"));
    $surrogate$$4$$.insertBefore($layer$$10$$);
    $layerId$$1_surrogateId$$2$$ = $surrogate$$4$$.attr("id");
    $layer$$10$$.attr($oj$$62$$.$ZOrderUtils$.$_SURROGATE_ATTR$, $layerId$$1_surrogateId$$2$$);
    return $surrogate$$4$$;
  };
  $oj$$62$$.$ZOrderUtils$.$_removeSurrogate$ = function $$oj$$62$$$$ZOrderUtils$$$_removeSurrogate$$($layer$$11$$) {
    var $surrogate$$5_surrogateId$$3$$ = $layer$$11$$.attr($oj$$62$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $layer$$11$$.removeAttr($oj$$62$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $surrogate$$5_surrogateId$$3$$ = $$$$56$$(document.getElementById($surrogate$$5_surrogateId$$3$$));
    $layer$$11$$.insertAfter($surrogate$$5_surrogateId$$3$$);
    $surrogate$$5_surrogateId$$3$$.surrogate("option", "beforeDestroy", null);
    $surrogate$$5_surrogateId$$3$$.remove();
  };
  $oj$$62$$.$ZOrderUtils$.$removeFromAncestorLayer$ = function $$oj$$62$$$$ZOrderUtils$$$removeFromAncestorLayer$$($popup$$9$$) {
    var $layer$$12$$ = $oj$$62$$.$ZOrderUtils$.$getFirstAncestorLayer$($popup$$9$$);
    $oj$$62$$.$ZOrderUtils$.$preOrderVisit$($layer$$12$$, $oj$$62$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$);
    $oj$$62$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$12$$);
    $layer$$12$$.removeData($oj$$62$$.$ZOrderUtils$.$_EVENTS_DATA$);
    $layer$$12$$.removeData($oj$$62$$.$ZOrderUtils$.$_MODALITY_DATA$);
    var $popupDom$$1$$ = $popup$$9$$[0];
    $oj$$62$$.Components.$subtreeDetached$($popupDom$$1$$);
    $oj$$62$$.$ZOrderUtils$.$_removeSurrogate$($layer$$12$$);
    $oj$$62$$.$DomUtils$.unwrap($popup$$9$$, $layer$$12$$);
    $oj$$62$$.Components.$subtreeAttached$($popupDom$$1$$);
  };
  $oj$$62$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$ = function $$oj$$62$$$$ZOrderUtils$$$_closeDescendantPopupsCallback$$($layer$$13$$, $context$$151$$) {
    if (0 < $context$$151$$.level) {
      return $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$16$$ = $layer$$13$$.data($oj$$62$$.$ZOrderUtils$.$_EVENTS_DATA$);
    if ($events$$16$$ && $$$$56$$.isFunction($events$$16$$[$oj$$62$$.$PopupService$.$EVENT$.$POPUP_CLOSE$])) {
      $events$$16$$[$oj$$62$$.$PopupService$.$EVENT$.$POPUP_CLOSE$]();
    }
    return $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$62$$.$ZOrderUtils$.$applyModality$ = function $$oj$$62$$$$ZOrderUtils$$$applyModality$$($layer$$14$$, $modality$$4$$) {
    var $currModality$$ = $layer$$14$$.data($oj$$62$$.$ZOrderUtils$.$_MODALITY_DATA$);
    $layer$$14$$.data($oj$$62$$.$ZOrderUtils$.$_MODALITY_DATA$, $modality$$4$$);
    $oj$$62$$.$StringUtils$.$isEmptyOrUndefined$($currModality$$) ? $oj$$62$$.$PopupService$.$MODALITY$.$MODAL$ === $modality$$4$$ ? $oj$$62$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$14$$) : $oj$$62$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$14$$) : $currModality$$ !== $modality$$4$$ && ($modality$$4$$ !== $currModality$$ && $modality$$4$$ === $oj$$62$$.$PopupService$.$MODALITY$.$MODAL$ ? $oj$$62$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$14$$) : $oj$$62$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$14$$));
  };
  $oj$$62$$.$ZOrderUtils$.$hasModalDialogOpen$ = function $$oj$$62$$$$ZOrderUtils$$$hasModalDialogOpen$$() {
    for (var $children$$30$$ = $oj$$62$$.$ZOrderUtils$.$getDefaultLayer$().children(), $i$$427$$ = $children$$30$$.length - 1;-1 < $i$$427$$;$i$$427$$--) {
      if ($$$$56$$($children$$30$$[$i$$427$$]).hasClass($oj$$62$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$)) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$62$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$ = function $$oj$$62$$$$ZOrderUtils$$$_addOverlayToAncestorLayer$$($layer$$15$$) {
    var $overlay$$1_overlayId$$ = $$$$56$$("\x3cdiv\x3e");
    $overlay$$1_overlayId$$.addClass($oj$$62$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$);
    $overlay$$1_overlayId$$.addClass($layer$$15$$[0].className);
    $overlay$$1_overlayId$$.attr("role", "presentation");
    var $layerId$$2$$ = $layer$$15$$.attr("id");
    $oj$$62$$.$StringUtils$.$isEmptyOrUndefined$($layerId$$2$$) ? $overlay$$1_overlayId$$.uniqueId() : $overlay$$1_overlayId$$.attr("id", [$layerId$$2$$, "overlay"].join("_"));
    $layer$$15$$.before($overlay$$1_overlayId$$);
    $overlay$$1_overlayId$$ = $overlay$$1_overlayId$$.attr("id");
    $layer$$15$$.attr($oj$$62$$.$ZOrderUtils$.$_OVERLAY_ATTR$, $overlay$$1_overlayId$$);
  };
  $oj$$62$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$ = function $$oj$$62$$$$ZOrderUtils$$$_removeOverlayFromAncestorLayer$$($layer$$16$$) {
    var $overlayId$$1$$ = $layer$$16$$.attr($oj$$62$$.$ZOrderUtils$.$_OVERLAY_ATTR$);
    $oj$$62$$.$StringUtils$.$isEmptyOrUndefined$($overlayId$$1$$) || ($layer$$16$$.removeAttr($oj$$62$$.$ZOrderUtils$.$_OVERLAY_ATTR$), $$$$56$$(document.getElementById($overlayId$$1$$)).remove());
  };
  $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$ = {$ACCEPT$:0, $REJECT$:1, $COMPLETE$:2};
  $oj$$62$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$ = {$PRE_ORDER$:0, $POST_ORDER$:1};
  $oj$$62$$.$ZOrderUtils$.$postOrderVisit$ = function $$oj$$62$$$$ZOrderUtils$$$postOrderVisit$$($layer$$17$$, $callback$$122$$, $context$$152$$) {
    $context$$152$$ || ($context$$152$$ = {});
    $context$$152$$.level = 0;
    $context$$152$$.type = $oj$$62$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$;
    $oj$$62$$.$ZOrderUtils$.$_visitTree$($layer$$17$$, $callback$$122$$, $context$$152$$);
  };
  $oj$$62$$.$ZOrderUtils$.$preOrderVisit$ = function $$oj$$62$$$$ZOrderUtils$$$preOrderVisit$$($layer$$18$$, $callback$$123$$, $context$$153$$) {
    $context$$153$$ || ($context$$153$$ = {});
    $context$$153$$.level = 0;
    $context$$153$$.type = $oj$$62$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$;
    $oj$$62$$.$ZOrderUtils$.$_visitTree$($layer$$18$$, $callback$$123$$, $context$$153$$);
  };
  $oj$$62$$.$ZOrderUtils$.$_visitTree$ = function $$oj$$62$$$$ZOrderUtils$$$_visitTree$$($children$$31_layer$$19$$, $callback$$124$$, $context$$154$$) {
    var $level$$44$$ = $context$$154$$.level;
    $children$$31_layer$$19$$ = $children$$31_layer$$19$$.children();
    for (var $i$$428$$ = $children$$31_layer$$19$$.length - 1;-1 < $i$$428$$;$i$$428$$--) {
      var $child$$26$$ = $$$$56$$($children$$31_layer$$19$$[$i$$428$$]);
      if ($oj$$62$$.$ZOrderUtils$.$_hasSurrogate$($child$$26$$[0])) {
        var $vrtn$$;
        if ($context$$154$$.type === $oj$$62$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$) {
          $vrtn$$ = $callback$$124$$($child$$26$$, $context$$154$$);
          if ($vrtn$$ === $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
        $context$$154$$.level = $level$$44$$ + 1;
        $vrtn$$ = $oj$$62$$.$ZOrderUtils$.$_visitTree$($child$$26$$, $callback$$124$$, $context$$154$$);
        $context$$154$$.level = $level$$44$$;
        if ($vrtn$$ === $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
          return $vrtn$$;
        }
        if ($context$$154$$.type === $oj$$62$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$) {
          $vrtn$$ = $callback$$124$$($child$$26$$, $context$$154$$);
          if ($vrtn$$ === $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
      }
    }
    return $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$62$$.$ZOrderUtils$.$_hasSurrogate$ = function $$oj$$62$$$$ZOrderUtils$$$_hasSurrogate$$($element$$158$$) {
    return 1 === $element$$158$$.nodeType && $element$$158$$.hasAttribute($oj$$62$$.$ZOrderUtils$.$_SURROGATE_ATTR$) ? !0 : !1;
  };
  $oj$$62$$.$ZOrderUtils$.$hasPopupsOpen$ = function $$oj$$62$$$$ZOrderUtils$$$hasPopupsOpen$$() {
    return 0 < $oj$$62$$.$ZOrderUtils$.$getDefaultLayer$().children().length;
  };
  $oj$$62$$.$ZOrderUtils$.$getOpenPopupCount$ = function $$oj$$62$$$$ZOrderUtils$$$getOpenPopupCount$$() {
    var $context$$155$$ = {popupCount:0}, $defaultLayer$$5$$ = $oj$$62$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$62$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$5$$, $oj$$62$$.$ZOrderUtils$.$_openPopupCountCallback$, $context$$155$$);
    return $context$$155$$.popupCount;
  };
  $oj$$62$$.$ZOrderUtils$.$_openPopupCountCallback$ = function $$oj$$62$$$$ZOrderUtils$$$_openPopupCountCallback$$($layer$$20$$, $context$$156$$) {
    $context$$156$$.popupCount += 1;
    return $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$62$$.$ZOrderUtils$.$findOpenPopups$ = function $$oj$$62$$$$ZOrderUtils$$$findOpenPopups$$() {
    var $context$$157$$ = {}, $defaultLayer$$6_popups$$2$$ = [];
    $context$$157$$.popups = $defaultLayer$$6_popups$$2$$;
    $defaultLayer$$6_popups$$2$$ = $oj$$62$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$62$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$6_popups$$2$$, $oj$$62$$.$ZOrderUtils$.$_openPopupsCallback$, $context$$157$$);
    $defaultLayer$$6_popups$$2$$ = $context$$157$$.popups;
    return $$$$56$$($defaultLayer$$6_popups$$2$$);
  };
  $oj$$62$$.$ZOrderUtils$.$_openPopupsCallback$ = function $$oj$$62$$$$ZOrderUtils$$$_openPopupsCallback$$($layer$$21$$, $context$$158$$) {
    $context$$158$$.popups.push($layer$$21$$[0]);
    return $oj$$62$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$62$$.$ZOrderUtils$.$compareStackingContexts$ = function $$oj$$62$$$$ZOrderUtils$$$compareStackingContexts$$($el1$$1$$, $el2$$1$$) {
    function $describeStackingContext$$($element$$159$$, $allLevels$$) {
      for (var $positions$$ = ["absolute", "relative", "fixed"], $parents$$7$$ = $element$$159$$.parents(), $stack_tmp$$2$$ = [], $i$$430$$ = $parents$$7$$.length - 1;-1 < $i$$430$$;$i$$430$$--) {
        $stack_tmp$$2$$.push($$$$56$$($parents$$7$$[$i$$430$$]));
      }
      $parents$$7$$ = $stack_tmp$$2$$;
      $parents$$7$$.push($element$$159$$);
      for (var $stack_tmp$$2$$ = [], $level$$45$$ = 0, $i$$430$$ = 0;$i$$430$$ < $parents$$7$$.length;$i$$430$$++) {
        var $order_parent$$52$$ = $parents$$7$$[$i$$430$$], $position$$39$$ = $order_parent$$52$$.css("position"), $opacity$$1$$ = $oj$$62$$.$DomUtils$.$getCSSLengthAsFloat$($order_parent$$52$$.css("opacity")), $zindex$$ = $oj$$62$$.$DomUtils$.$getCSSLengthAsInt$($order_parent$$52$$.css("z-index")), $order_parent$$52$$ = $$$$56$$.inArray($order_parent$$52$$[0], $order_parent$$52$$.parent().children());
        -1 < $$$$56$$.inArray($position$$39$$, $positions$$) ? $stack_tmp$$2$$.push({weight:[$level$$45$$++, $zindex$$, $order_parent$$52$$], order:[$order_parent$$52$$]}) : 1 > $opacity$$1$$ ? $stack_tmp$$2$$.push({weight:[$level$$45$$++, 1, $order_parent$$52$$], order:[$order_parent$$52$$]}) : $allLevels$$ && $stack_tmp$$2$$.push({weight:[0, 0, $order_parent$$52$$], order:[$order_parent$$52$$]});
      }
      return $stack_tmp$$2$$;
    }
    function $compareSets$$($n1$$3$$, $n2$$3$$) {
      for (var $maxLen$$1$$ = Math.max($n1$$3$$.length, $n2$$3$$.length), $i$$431$$ = 0;$i$$431$$ < $maxLen$$1$$;$i$$431$$++) {
        var $e1$$1$$ = $i$$431$$ < $n1$$3$$.length ? $n1$$3$$[$i$$431$$] : -1, $e2$$1$$ = $i$$431$$ < $n2$$3$$.length ? $n2$$3$$[$i$$431$$] : -1;
        if ($e1$$1$$ !== $e2$$1$$) {
          return $e1$$1$$ < $e2$$1$$ ? -1 : 1;
        }
      }
      return 0;
    }
    $oj$$62$$.$Assert$.$assertPrototype$($el1$$1$$, jQuery);
    $oj$$62$$.$Assert$.$assertPrototype$($el2$$1$$, jQuery);
    for (var $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !1), $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !1), $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length), $i$$429$$ = 0;$i$$429$$ < $maxLen$$;$i$$429$$++) {
      var $c$$51_e1$$ = $i$$429$$ < $n1$$2$$.length ? $n1$$2$$[$i$$429$$].weight : [-1], $e2$$ = $i$$429$$ < $n2$$2$$.length ? $n2$$2$$[$i$$429$$].weight : [-1], $c$$51_e1$$ = $compareSets$$($c$$51_e1$$, $e2$$);
      if (0 !== $c$$51_e1$$) {
        return $c$$51_e1$$;
      }
    }
    $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !0);
    $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !0);
    $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length);
    for ($i$$429$$ = 0;$i$$429$$ < $maxLen$$;$i$$429$$++) {
      if ($c$$51_e1$$ = $i$$429$$ < $n1$$2$$.length ? $n1$$2$$[$i$$429$$].order : [-1], $e2$$ = $i$$429$$ < $n2$$2$$.length ? $n2$$2$$[$i$$429$$].order : [-1], $c$$51_e1$$ = $compareSets$$($c$$51_e1$$, $e2$$), 0 !== $c$$51_e1$$) {
        return $c$$51_e1$$;
      }
    }
    return 0;
  };
  $oj$$62$$.$ZOrderUtils$.$eatEvent$ = function $$oj$$62$$$$ZOrderUtils$$$eatEvent$$($event$$591$$) {
    $event$$591$$.stopPropagation();
    $event$$591$$.preventDefault();
  };
  $oj$$62$$.$ZOrderUtils$.$_EVENTS_DATA$ = "oj-popup-events";
  $oj$$62$$.$ZOrderUtils$.$_MODALITY_DATA$ = "oj-popup-modality";
  $oj$$62$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$ = "__oj_zorder_container";
  $oj$$62$$.$ZOrderUtils$.$_SURROGATE_ATTR$ = "data-oj-surrogate-id";
  $oj$$62$$.$ZOrderUtils$.$_OVERLAY_ATTR$ = "data-oj-overlayid";
  $oj$$62$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$ = "oj-component-overlay";
  $$$$56$$.widget("oj.surrogate", {options:{create:null, beforeDestroy:null}, _create:function() {
    this._super();
    this.element.uniqueId();
  }, _destroy:function() {
    this._trigger("beforeDestroy");
    this.element.removeUniqueId();
    this._super();
  }});
  $oj$$62$$.$SimpleTapRecognizer$ = function $$oj$$62$$$$SimpleTapRecognizer$$($tapCallback$$) {
    this.$_tapCallback$ = $tapCallback$$;
    this.Init();
  };
  $oj$$62$$.$Object$.$createSubclass$($oj$$62$$.$SimpleTapRecognizer$, $oj$$62$$.$Object$, "oj.SimpleTapRecognizer");
  $oj$$62$$.$SimpleTapRecognizer$.prototype.Init = function $$oj$$62$$$$SimpleTapRecognizer$$$Init$() {
    $oj$$62$$.$SimpleTapRecognizer$.$superclass$.Init.call(this);
    for (var $eventHandlerCallback$$ = this.$_eventHandlerCallback$ = $$$$56$$.proxy(this.$_eventHandler$, this), $docElement$$1$$ = document.documentElement, $i$$432$$ = 0;$i$$432$$ < $oj$$62$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$432$$++) {
      $docElement$$1$$.addEventListener($oj$$62$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$432$$], $eventHandlerCallback$$, !0);
    }
  };
  $oj$$62$$.$SimpleTapRecognizer$.prototype.$_eventHandler$ = function $$oj$$62$$$$SimpleTapRecognizer$$$$_eventHandler$$($event$$592_tapStart$$) {
    var $tapCallback$$1$$ = this.$_tapCallback$, $eventType$$53$$ = $event$$592_tapStart$$.type;
    "touchstart" === $eventType$$53$$ ? (this.$_touchStartEvent$ = $event$$592_tapStart$$, this.$_touchStartEvent$.$_tapStart$ = (new Date).getTime()) : "touchmove" === $eventType$$53$$ || "touchcancel" === $eventType$$53$$ ? delete this.$_touchStartEvent$ : "touchend" === $eventType$$53$$ && (this.$_touchStartEvent$ && ($event$$592_tapStart$$ = this.$_touchStartEvent$.$_tapStart$, isNaN($event$$592_tapStart$$) ? $tapCallback$$1$$(this.$_touchStartEvent$) : (new Date).getTime() - $event$$592_tapStart$$ < 
    $oj$$62$$.$SimpleTapRecognizer$.$_PRESSHOLDTHRESSHOLD$ && $tapCallback$$1$$(this.$_touchStartEvent$)), delete this.$_touchStartEvent$);
  };
  $oj$$62$$.$SimpleTapRecognizer$.prototype.destroy = function $$oj$$62$$$$SimpleTapRecognizer$$$destroy$() {
    delete this.$_tapCallback$;
    var $eventHandlerCallback$$1$$ = this.$_eventHandlerCallback$;
    delete this.$_eventHandlerCallback$;
    for (var $docElement$$2$$ = document.documentElement, $i$$433$$ = 0;$i$$433$$ < $oj$$62$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$433$$++) {
      $docElement$$2$$.removeEventListener($oj$$62$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$433$$], $eventHandlerCallback$$1$$, !0);
    }
  };
  $oj$$62$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$ = ["touchstart", "touchmove", "touchcancel", "touchend"];
  $oj$$62$$.$SimpleTapRecognizer$.$_PRESSHOLDTHRESSHOLD$ = 700;
  $oj$$62$$.$PopupLiveRegion$ = function $$oj$$62$$$$PopupLiveRegion$$() {
    this.Init();
  };
  $oj$$62$$.$Object$.$createSubclass$($oj$$62$$.$PopupLiveRegion$, $oj$$62$$.$Object$, "oj.PopupLiveRegion");
  $oj$$62$$.$PopupLiveRegion$.prototype.Init = function $$oj$$62$$$$PopupLiveRegion$$$Init$() {
    $oj$$62$$.$PopupLiveRegion$.$superclass$.Init.call(this);
    isNaN($oj$$62$$.$PopupLiveRegion$.$_refCounter$) ? $oj$$62$$.$PopupLiveRegion$.$_refCounter$ = 1 : ++$oj$$62$$.$PopupLiveRegion$.$_refCounter$;
  };
  $oj$$62$$.$PopupLiveRegion$.prototype.destroy = function $$oj$$62$$$$PopupLiveRegion$$$destroy$() {
    if (!isNaN($oj$$62$$.$PopupLiveRegion$.$_refCounter$) && (--$oj$$62$$.$PopupLiveRegion$.$_refCounter$, 1 > $oj$$62$$.$PopupLiveRegion$.$_refCounter$)) {
      var $liveRegion$$2$$ = $$$$56$$(document.getElementById($oj$$62$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$));
      0 < $liveRegion$$2$$.length && $liveRegion$$2$$.remove();
    }
  };
  $oj$$62$$.$PopupLiveRegion$.prototype.$announce$ = function $$oj$$62$$$$PopupLiveRegion$$$$announce$$($message$$35$$) {
    if (!$oj$$62$$.$StringUtils$.$isEmpty$($message$$35$$)) {
      var $liveRegion$$3$$ = $oj$$62$$.$PopupLiveRegion$.$_getLiveRegion$();
      $liveRegion$$3$$.children().remove();
      $$$$56$$("\x3cdiv\x3e").text($message$$35$$).appendTo($liveRegion$$3$$);
    }
  };
  $oj$$62$$.$PopupLiveRegion$.$_getLiveRegion$ = function $$oj$$62$$$$PopupLiveRegion$$$_getLiveRegion$$() {
    var $liveRegion$$4$$ = $$$$56$$(document.getElementById($oj$$62$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$));
    0 === $liveRegion$$4$$.length && ($liveRegion$$4$$ = $$$$56$$("\x3cdiv\x3e"), $liveRegion$$4$$.attr({id:$oj$$62$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$, role:"log", "aria-live":"polite", "aria-relevant":"additions"}), $liveRegion$$4$$.addClass("oj-helper-hidden-accessible"), $liveRegion$$4$$.appendTo(document.body));
    return $liveRegion$$4$$;
  };
  $oj$$62$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$ = "__oj_popup_arialiveregion";
  $oj$$62$$.$PopupSkipLink$ = function $$oj$$62$$$$PopupSkipLink$$($sibling$$, $message$$36$$, $callback$$125$$, $id$$51$$) {
    $oj$$62$$.$Assert$.$assertPrototype$($sibling$$, jQuery);
    $oj$$62$$.$Assert$.$assertString$($message$$36$$);
    $oj$$62$$.$Assert$.$assertFunction$($callback$$125$$);
    $oj$$62$$.$Assert$.$assertStringOrNull$($id$$51$$);
    this.$_sibling$ = $sibling$$;
    this.$_message$ = $message$$36$$;
    this.$_callback$ = $callback$$125$$;
    this.$_id$ = $id$$51$$ ? $id$$51$$ : "";
    this.Init();
  };
  $oj$$62$$.$Object$.$createSubclass$($oj$$62$$.$PopupSkipLink$, $oj$$62$$.$Object$, "oj.PopupSkipLink");
  $oj$$62$$.$PopupSkipLink$.prototype.Init = function $$oj$$62$$$$PopupSkipLink$$$Init$() {
    $oj$$62$$.$PopupSkipLink$.$superclass$.Init.call(this);
    var $sibling$$1$$ = this.$_sibling$, $callback$$126$$ = this.$_callback$, $message$$37$$ = this.$_message$;
    delete this.$_message$;
    var $id$$52$$ = this.$_id$;
    delete this.$_id$;
    var $link$$2$$ = $$$$56$$("\x3ca\x3e").attr({tabindex:"-1", href:"#"});
    $oj$$62$$.$StringUtils$.$isEmpty$($id$$52$$) || $link$$2$$.attr("id", $id$$52$$);
    $link$$2$$.addClass("oj-helper-hidden-accessible");
    $link$$2$$.text($message$$37$$);
    $link$$2$$.insertAfter($sibling$$1$$);
    $link$$2$$.on("click", $callback$$126$$);
    $sibling$$1$$.data($oj$$62$$.$PopupSkipLink$.$_SKIPLINK_ATTR$, $link$$2$$);
  };
  $oj$$62$$.$PopupSkipLink$.prototype.destroy = function $$oj$$62$$$$PopupSkipLink$$$destroy$() {
    var $sibling$$2$$ = this.$_sibling$;
    delete this.$_sibling$;
    var $callback$$127$$ = this.$_callback$;
    delete this.$_callback$;
    if ($sibling$$2$$) {
      var $link$$3$$ = $sibling$$2$$.data($oj$$62$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $sibling$$2$$.removeData($oj$$62$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $link$$3$$ && ($link$$3$$.off("click", $callback$$127$$), $link$$3$$.remove());
    }
  };
  $oj$$62$$.$PopupSkipLink$.prototype.getLink = function $$oj$$62$$$$PopupSkipLink$$$getLink$() {
    var $sibling$$3$$ = this.$_sibling$, $link$$4$$;
    $sibling$$3$$ && ($link$$4$$ = $sibling$$3$$.data($oj$$62$$.$PopupSkipLink$.$_SKIPLINK_ATTR$));
    return $link$$4$$;
  };
  $oj$$62$$.$PopupSkipLink$.$_SKIPLINK_ATTR$ = "oj-skiplink";
  $oj$$62$$.$PositionUtils$ = {};
  $oj$$62$$.$PositionUtils$.$normalizeHorizontalAlignment$ = function $$oj$$62$$$$PositionUtils$$$normalizeHorizontalAlignment$$($position$$40$$, $isRtl$$7$$) {
    for (var $target$$103$$ = $$$$56$$.extend({}, $position$$40$$), $i$$434$$ = 0;$i$$434$$ < $oj$$62$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$.length;$i$$434$$++) {
      var $propName$$11$$ = $oj$$62$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$[$i$$434$$], $align$$ = $target$$103$$[$propName$$11$$];
      $align$$ && ($target$$103$$[$propName$$11$$] = $align$$.replace("start", $isRtl$$7$$ ? "right" : "left").replace("end", $isRtl$$7$$ ? "left" : "right").replace("\x3c", $isRtl$$7$$ ? "+" : "-").replace("\x3e", $isRtl$$7$$ ? "-" : "+"));
    }
    return $target$$103$$;
  };
  $oj$$62$$.$PositionUtils$.$normalizePositionOf$ = function $$oj$$62$$$$PositionUtils$$$normalizePositionOf$$($of$$, $launcher$$24$$, $event$$593$$) {
    return "event" === $of$$ ? $event$$593$$ : null == $of$$ || "launcher" === $of$$ ? $launcher$$24$$ : $of$$;
  };
  $oj$$62$$.$PositionUtils$.$_normalizeEventForPosition$ = function $$oj$$62$$$$PositionUtils$$$_normalizeEventForPosition$$($event$$594$$) {
    $$$$56$$.each(["pageX", "pageY"], function($index$$256$$, $pagePos$$) {
      if ($event$$594$$ && void 0 === $event$$594$$[$pagePos$$] && $event$$594$$.originalEvent) {
        var $firstTouch$$6_originalEvent$$11$$ = $event$$594$$.originalEvent, $touchList_type$$104$$ = $firstTouch$$6_originalEvent$$11$$.type;
        ($touchList_type$$104$$ = "touchstart" === $touchList_type$$104$$ || "touchmove" === $touchList_type$$104$$ ? "touches" : "touchend" === $touchList_type$$104$$ ? "changedTouches" : null) && ($firstTouch$$6_originalEvent$$11$$ = $firstTouch$$6_originalEvent$$11$$[$touchList_type$$104$$][0]) && ($event$$594$$[$pagePos$$] = $firstTouch$$6_originalEvent$$11$$[$pagePos$$]);
      }
    });
  };
  $oj$$62$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$ = ["my", "at"];
  $oj$$62$$.$PositionUtils$.$isAligningPositionClipped$ = function $$oj$$62$$$$PositionUtils$$$isAligningPositionClipped$$($props$$29$$) {
    return $props$$29$$.target && 0 < $props$$29$$.target.height && 0 < $props$$29$$.target.width ? !$oj$$62$$.$DomUtils$.$isWithinViewport$($props$$29$$.target.element) : !1;
  };
  $$$$56$$.ui.position.flipcenter = {left:function $$$$$56$$$ui$position$flipcenter$left$($position$$41$$, $data$$168$$) {
    var $posLeft$$ = $position$$41$$.left;
    $$$$56$$.ui.position.flip.left.call(this, $position$$41$$, $data$$168$$);
    var $overRight_within$$ = $data$$168$$.within, $dirFactor_withinOffset$$ = $overRight_within$$.isWindow ? $overRight_within$$.scrollLeft : $overRight_within$$.offset.left, $collisionPosLeft$$ = $position$$41$$.left - $data$$168$$.collisionPosition.marginLeft, $overRight_within$$ = $collisionPosLeft$$ + $data$$168$$.collisionWidth - $overRight_within$$.width - $dirFactor_withinOffset$$;
    if (0 < $dirFactor_withinOffset$$ - $collisionPosLeft$$ || 0 < $overRight_within$$) {
      "right" === $data$$168$$.at[0] ? $posLeft$$ -= $data$$168$$.targetWidth / 2 : "left" === $data$$168$$.at[0] && ($posLeft$$ += $data$$168$$.targetWidth / 2), $dirFactor_withinOffset$$ = "rtl" === $oj$$62$$.$DomUtils$.$getReadingDirection$() ? -1 : 1, $posLeft$$ -= $data$$168$$.elemWidth / 2 * $dirFactor_withinOffset$$, $position$$41$$.left = $posLeft$$;
    }
  }, top:function $$$$$56$$$ui$position$flipcenter$top$($position$$42$$, $data$$169$$) {
    var $posTop$$ = $position$$42$$.top;
    $$$$56$$.ui.position.flip.top.call(this, $position$$42$$, $data$$169$$);
    var $within$$1_withinOffset$$1$$ = $data$$169$$.within, $within$$1_withinOffset$$1$$ = $within$$1_withinOffset$$1$$.isWindow ? $within$$1_withinOffset$$1$$.scrollTop : $within$$1_withinOffset$$1$$.offset.top, $collisionPosTop$$ = $position$$42$$.top - $data$$169$$.collisionPosition.marginTop, $overBottom$$ = $collisionPosTop$$ + $data$$169$$.collisionHeight - $data$$169$$.within.height - $within$$1_withinOffset$$1$$;
    if (0 < $within$$1_withinOffset$$1$$ - $collisionPosTop$$ || 0 < $overBottom$$) {
      "top" === $data$$169$$.at[1] ? $posTop$$ += $data$$169$$.targetHeight / 2 : "bottom" === $data$$169$$.at[1] && ($posTop$$ -= $data$$169$$.targetHeight / 2), $posTop$$ += $data$$169$$.elemHeight / 2, $position$$42$$.top = $posTop$$;
    }
  }};
  $$$$56$$.ui.position.flip = {left:function $$$$$56$$$ui$position$flip$left$($position$$43$$, $data$$170$$) {
    var $offsetLeft_within$$2$$ = $data$$170$$.within, $withinOffset$$2$$ = $offsetLeft_within$$2$$.offset.left + $offsetLeft_within$$2$$.scrollLeft, $outerWidth$$1$$ = $offsetLeft_within$$2$$.width, $offsetLeft_within$$2$$ = $offsetLeft_within$$2$$.isWindow ? $offsetLeft_within$$2$$.scrollLeft : $offsetLeft_within$$2$$.offset.left, $collisionPosLeft$$1_overRight$$1$$ = $position$$43$$.left - $data$$170$$.collisionPosition.marginLeft, $overLeft$$1$$ = $collisionPosLeft$$1_overRight$$1$$ - $offsetLeft_within$$2$$, 
    $collisionPosLeft$$1_overRight$$1$$ = $collisionPosLeft$$1_overRight$$1$$ + $data$$170$$.collisionWidth - $outerWidth$$1$$ - $offsetLeft_within$$2$$, $myOffset$$ = "left" === $data$$170$$.my[0] ? -$data$$170$$.elemWidth : "right" === $data$$170$$.my[0] ? $data$$170$$.elemWidth : 0, $atOffset$$ = "left" === $data$$170$$.at[0] ? $data$$170$$.targetWidth : "right" === $data$$170$$.at[0] ? -$data$$170$$.targetWidth : 0, $offset$$31$$ = -2 * $data$$170$$.offset[0], $newOverRight$$, $newOverLeft$$;
    if (0 > $overLeft$$1$$ && Math.abs($newOverRight$$) < Math.abs($newOverLeft$$)) {
      if ($newOverRight$$ = $position$$43$$.left + $myOffset$$ + $atOffset$$ + $offset$$31$$ + $data$$170$$.collisionWidth - $outerWidth$$1$$ - $withinOffset$$2$$, 0 > $newOverRight$$ || $newOverRight$$ < Math.abs($overLeft$$1$$)) {
        $position$$43$$.left += $myOffset$$ + $atOffset$$ + $offset$$31$$;
      }
    } else {
      0 < $collisionPosLeft$$1_overRight$$1$$ && ($newOverLeft$$ = $position$$43$$.left - $data$$170$$.collisionPosition.marginLeft + $myOffset$$ + $atOffset$$ + $offset$$31$$ - $offsetLeft_within$$2$$, 0 < $newOverLeft$$ || Math.abs($newOverLeft$$) < $collisionPosLeft$$1_overRight$$1$$) && ($position$$43$$.left += $myOffset$$ + $atOffset$$ + $offset$$31$$);
    }
  }, top:function $$$$$56$$$ui$position$flip$top$($position$$44$$, $data$$171$$) {
    var $overTop$$1_within$$3$$ = $data$$171$$.within, $newOverBottom_newOverTop_withinOffset$$3$$ = $overTop$$1_within$$3$$.offset.top + $overTop$$1_within$$3$$.scrollTop, $outerHeight$$1$$ = $overTop$$1_within$$3$$.height, $offsetTop$$ = $overTop$$1_within$$3$$.isWindow ? $overTop$$1_within$$3$$.scrollTop : $overTop$$1_within$$3$$.offset.top, $collisionPosTop$$1_overBottom$$1$$ = $position$$44$$.top - $data$$171$$.collisionPosition.marginTop, $overTop$$1_within$$3$$ = $collisionPosTop$$1_overBottom$$1$$ - 
    $offsetTop$$, $collisionPosTop$$1_overBottom$$1$$ = $collisionPosTop$$1_overBottom$$1$$ + $data$$171$$.collisionHeight - $outerHeight$$1$$ - $offsetTop$$, $myOffset$$1$$ = "top" === $data$$171$$.my[1] ? -$data$$171$$.elemHeight : "bottom" === $data$$171$$.my[1] ? $data$$171$$.elemHeight : 0, $atOffset$$1$$ = "top" === $data$$171$$.at[1] ? $data$$171$$.targetHeight : "bottom" === $data$$171$$.at[1] ? -$data$$171$$.targetHeight : 0, $offset$$32$$ = -2 * $data$$171$$.offset[1];
    0 > $overTop$$1_within$$3$$ ? ($newOverBottom_newOverTop_withinOffset$$3$$ = $position$$44$$.top + $myOffset$$1$$ + $atOffset$$1$$ + $offset$$32$$ + $data$$171$$.collisionHeight - $outerHeight$$1$$ - $newOverBottom_newOverTop_withinOffset$$3$$, (0 > $newOverBottom_newOverTop_withinOffset$$3$$ || $newOverBottom_newOverTop_withinOffset$$3$$ < Math.abs($overTop$$1_within$$3$$)) && 0 > $collisionPosTop$$1_overBottom$$1$$ && $overTop$$1_within$$3$$ < $collisionPosTop$$1_overBottom$$1$$ && ($position$$44$$.top += 
    $myOffset$$1$$ + $atOffset$$1$$ + $offset$$32$$)) : 0 < $collisionPosTop$$1_overBottom$$1$$ && ($newOverBottom_newOverTop_withinOffset$$3$$ = $position$$44$$.top - $data$$171$$.collisionPosition.marginTop + $myOffset$$1$$ + $atOffset$$1$$ + $offset$$32$$ - $offsetTop$$, 0 < $newOverBottom_newOverTop_withinOffset$$3$$ || Math.abs($newOverBottom_newOverTop_withinOffset$$3$$) < $collisionPosTop$$1_overBottom$$1$$) && ($position$$44$$.top += $myOffset$$1$$ + $atOffset$$1$$ + $offset$$32$$);
  }};
});
