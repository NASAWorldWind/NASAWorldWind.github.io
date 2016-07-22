/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$56$$, $$$$50$$, $Hammer$$5$$) {
  $oj$$56$$.$OffcanvasUtils$ = {};
  $goog$exportPath_$$("OffcanvasUtils", $oj$$56$$.$OffcanvasUtils$, $oj$$56$$);
  $oj$$56$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$ = "oj-offcanvasEdge";
  $oj$$56$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$ = "oj-offcanvas";
  $oj$$56$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$ = "oj-mediaQueryListener";
  $oj$$56$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$ = "oj-offcanvasHammer";
  $oj$$56$$.$OffcanvasUtils$.$SELECTOR_KEY$ = "selector";
  $oj$$56$$.$OffcanvasUtils$.$EDGE_START$ = "start";
  $oj$$56$$.$OffcanvasUtils$.$EDGE_END$ = "end";
  $oj$$56$$.$OffcanvasUtils$.$EDGE_TOP$ = "top";
  $oj$$56$$.$OffcanvasUtils$.$EDGE_BOTTOM$ = "bottom";
  $oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$ = "displayMode";
  $oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ = "push";
  $oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ = "overlay";
  $oj$$56$$.$OffcanvasUtils$.$MODALITY_KEY$ = "modality";
  $oj$$56$$.$OffcanvasUtils$.$MODALITY_NONE$ = "none";
  $oj$$56$$.$OffcanvasUtils$.$MODALITY_MODAL$ = "modal";
  $oj$$56$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$ = "_dismissHandler";
  $oj$$56$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$ = "_openPromise";
  $oj$$56$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$ = "_closePromise";
  $oj$$56$$.$OffcanvasUtils$.$GLASS_PANE_KEY$ = "_glassPane";
  $oj$$56$$.$OffcanvasUtils$.$SURROGATE_KEY$ = "_surrogate";
  $oj$$56$$.$OffcanvasUtils$.$SURROGATE_ATTR$ = "data-oj-offcanvas-surrogate-id";
  $oj$$56$$.$OffcanvasUtils$.$OUTER_WRAPPER_SELECTOR$ = "oj-offcanvas-outer-wrapper";
  $oj$$56$$.$OffcanvasUtils$.$OPEN_SELECTOR$ = "oj-offcanvas-open";
  $oj$$56$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$ = "oj-offcanvas-transition";
  $oj$$56$$.$OffcanvasUtils$.$GLASSPANE_SELECTOR$ = "oj-offcanvas-glasspane";
  $oj$$56$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$ = "oj-offcanvas-glasspane-dim";
  $oj$$56$$.$OffcanvasUtils$.$WRAPPER_GENERATED_SELECTOR$ = "oj-offcanvas-generated";
  $oj$$56$$.$OffcanvasUtils$.$VETO_BEFOREOPEN_MSG$ = "ojbeforeopen veto";
  $oj$$56$$.$OffcanvasUtils$.$VETO_BEFORECLOSE_MSG$ = "ojbeforeclose veto";
  $oj$$56$$.$OffcanvasUtils$.$_shiftSelector$ = {start:"oj-offcanvas-shift-start", end:"oj-offcanvas-shift-end", top:"oj-offcanvas-shift-down", bottom:"oj-offcanvas-shift-up"};
  $oj$$56$$.$OffcanvasUtils$.$_drawerSelector$ = {start:"oj-offcanvas-start", end:"oj-offcanvas-end", top:"oj-offcanvas-top", bottom:"oj-offcanvas-bottom"};
  $oj$$56$$.$OffcanvasUtils$.$_getDisplayMode$ = function $$oj$$56$$$$OffcanvasUtils$$$_getDisplayMode$$($displayMode_offcanvas$$) {
    $displayMode_offcanvas$$ = $displayMode_offcanvas$$[$oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$];
    $displayMode_offcanvas$$ !== $oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ && $displayMode_offcanvas$$ !== $oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && ($displayMode_offcanvas$$ = $oj$$56$$.$ThemeUtils$.$getOptionDefaultMap$("offcanvas").displayMode);
    return $displayMode_offcanvas$$;
  };
  $oj$$56$$.$OffcanvasUtils$.$_getDrawer$ = function $$oj$$56$$$$OffcanvasUtils$$$_getDrawer$$($offcanvas$$1$$) {
    return $$$$50$$($offcanvas$$1$$[$oj$$56$$.$OffcanvasUtils$.$SELECTOR_KEY$]);
  };
  $oj$$56$$.$OffcanvasUtils$.$_isModal$ = function $$oj$$56$$$$OffcanvasUtils$$$_isModal$$($offcanvas$$2$$) {
    return $offcanvas$$2$$[$oj$$56$$.$OffcanvasUtils$.$MODALITY_KEY$] === $oj$$56$$.$OffcanvasUtils$.$MODALITY_MODAL$;
  };
  $oj$$56$$.$OffcanvasUtils$.$_isOpen$ = function $$oj$$56$$$$OffcanvasUtils$$$_isOpen$$($drawer$$) {
    return $drawer$$.hasClass($oj$$56$$.$OffcanvasUtils$.$OPEN_SELECTOR$);
  };
  $oj$$56$$.$OffcanvasUtils$.$_getOuterWrapper$ = function $$oj$$56$$$$OffcanvasUtils$$$_getOuterWrapper$$($drawer$$1$$) {
    return $drawer$$1$$.closest("." + $oj$$56$$.$OffcanvasUtils$.$OUTER_WRAPPER_SELECTOR$);
  };
  $oj$$56$$.$OffcanvasUtils$.$_getAnimateWrapper$ = function $$oj$$56$$$$OffcanvasUtils$$$_getAnimateWrapper$$($offcanvas$$3$$) {
    var $wrapper$$2$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$3$$);
    return $offcanvas$$3$$[$oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$] === $oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ ? $wrapper$$2$$.parent() : $wrapper$$2$$;
  };
  $oj$$56$$.$OffcanvasUtils$.$_getShiftSelector$ = function $$oj$$56$$$$OffcanvasUtils$$$_getShiftSelector$$($edge$$2$$) {
    var $selector$$39$$ = $oj$$56$$.$OffcanvasUtils$.$_shiftSelector$[$edge$$2$$];
    if (!$selector$$39$$) {
      throw "Invalid edge: " + $edge$$2$$;
    }
    return $selector$$39$$;
  };
  $oj$$56$$.$OffcanvasUtils$.$_isRTL$ = function $$oj$$56$$$$OffcanvasUtils$$$_isRTL$$() {
    return "rtl" === $oj$$56$$.$DomUtils$.$getReadingDirection$();
  };
  $oj$$56$$.$OffcanvasUtils$.$_setTransform$ = function $$oj$$56$$$$OffcanvasUtils$$$_setTransform$$($wrapper$$3$$, $transform$$2$$) {
    $wrapper$$3$$.css({"-webkit-transform":$transform$$2$$, "-ms-transform":$transform$$2$$, transform:$transform$$2$$});
  };
  $oj$$56$$.$OffcanvasUtils$.$_setTranslationX$ = function $$oj$$56$$$$OffcanvasUtils$$$_setTranslationX$$($wrapper$$4$$, $edge$$3_minus$$, $width$$33$$) {
    $edge$$3_minus$$ = $edge$$3_minus$$ === $oj$$56$$.$OffcanvasUtils$.$EDGE_END$;
    $oj$$56$$.$OffcanvasUtils$.$_isRTL$() && ($edge$$3_minus$$ = !$edge$$3_minus$$);
    $oj$$56$$.$OffcanvasUtils$.$_setTransform$($wrapper$$4$$, "translate3d(" + ($edge$$3_minus$$ ? "-" : "") + $width$$33$$ + ", 0, 0)");
  };
  $oj$$56$$.$OffcanvasUtils$.$_setTranslationY$ = function $$oj$$56$$$$OffcanvasUtils$$$_setTranslationY$$($wrapper$$5$$, $edge$$4$$, $height$$32$$) {
    $oj$$56$$.$OffcanvasUtils$.$_setTransform$($wrapper$$5$$, "translate3d(0, " + ($edge$$4$$ === $oj$$56$$.$OffcanvasUtils$.$EDGE_BOTTOM$ ? "-" : "") + $height$$32$$ + ", 0)");
  };
  $oj$$56$$.$OffcanvasUtils$.$_saveEdge$ = function $$oj$$56$$$$OffcanvasUtils$$$_saveEdge$$($drawer$$2_offcanvas$$4$$) {
    var $edge$$5$$ = $drawer$$2_offcanvas$$4$$.edge;
    $drawer$$2_offcanvas$$4$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($drawer$$2_offcanvas$$4$$);
    $edge$$5$$ && $edge$$5$$.length || ($edge$$5$$ = $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-start") ? $oj$$56$$.$OffcanvasUtils$.$EDGE_START$ : $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-end") ? $oj$$56$$.$OffcanvasUtils$.$EDGE_END$ : $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-top") ? $oj$$56$$.$OffcanvasUtils$.$EDGE_TOP$ : $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-bottom") ? $oj$$56$$.$OffcanvasUtils$.$EDGE_BOTTOM$ : $oj$$56$$.$OffcanvasUtils$.$EDGE_START$);
    $$$$50$$.data($drawer$$2_offcanvas$$4$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$, $edge$$5$$);
    return $edge$$5$$;
  };
  $oj$$56$$.$OffcanvasUtils$.$_getEdge$ = function $$oj$$56$$$$OffcanvasUtils$$$_getEdge$$($drawer$$3$$) {
    return $$$$50$$.data($drawer$$3$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$);
  };
  $oj$$56$$.$OffcanvasUtils$.$_toggleClass$ = function $$oj$$56$$$$OffcanvasUtils$$$_toggleClass$$($oTabIndex_offcanvas$$5$$, $wrapper$$6$$, $isOpen$$2$$) {
    var $displayMode$$1_wrapperClass$$ = $oTabIndex_offcanvas$$5$$[$oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$], $drawer$$4$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($oTabIndex_offcanvas$$5$$), $drawerClass$$ = $oj$$56$$.$OffcanvasUtils$.$OPEN_SELECTOR$, $displayMode$$1_wrapperClass$$ = $displayMode$$1_wrapperClass$$ === $oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ ? $oj$$56$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$ + " oj-offcanvas-overlay" : $oj$$56$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$;
    $isOpen$$2$$ ? ($drawer$$4$$.addClass($drawerClass$$), $wrapper$$6$$.addClass($displayMode$$1_wrapperClass$$)) : ($oTabIndex_offcanvas$$5$$ = $oTabIndex_offcanvas$$5$$.tabindex, void 0 === $oTabIndex_offcanvas$$5$$ ? $drawer$$4$$.removeAttr("tabindex") : $drawer$$4$$.attr("tabindex", $oTabIndex_offcanvas$$5$$), $drawer$$4$$.removeClass($drawerClass$$), $wrapper$$6$$.removeClass($displayMode$$1_wrapperClass$$));
  };
  $oj$$56$$.$OffcanvasUtils$.$_setFocus$ = function $$oj$$56$$$$OffcanvasUtils$$$_setFocus$$($focusNode_offcanvas$$6$$) {
    var $drawer$$5$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($focusNode_offcanvas$$6$$), $nodes$$4_oTabIndex$$1$$ = $drawer$$5$$.find(":focusable");
    0 < $nodes$$4_oTabIndex$$1$$.length ? $focusNode_offcanvas$$6$$ = $nodes$$4_oTabIndex$$1$$[0] : ($nodes$$4_oTabIndex$$1$$ = $drawer$$5$$.attr("tabindex"), void 0 !== $nodes$$4_oTabIndex$$1$$ && ($focusNode_offcanvas$$6$$.tabindex = $nodes$$4_oTabIndex$$1$$), $drawer$$5$$.attr("tabindex", "-1"), $focusNode_offcanvas$$6$$ = $drawer$$5$$);
    $oj$$56$$.$FocusUtils$.$focusElement$($focusNode_offcanvas$$6$$);
  };
  $oj$$56$$.$OffcanvasUtils$.$_isAutoDismiss$ = function $$oj$$56$$$$OffcanvasUtils$$$_isAutoDismiss$$($offcanvas$$7$$) {
    return "none" != $offcanvas$$7$$.autoDismiss;
  };
  $oj$$56$$.$OffcanvasUtils$.$_onTransitionEnd$ = function $$oj$$56$$$$OffcanvasUtils$$$_onTransitionEnd$$($wrapper$$7$$, $handler$$53$$) {
    function $listener$$43$$() {
      $handler$$53$$();
      $wrapper$$7$$.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$43$$);
    }
    $wrapper$$7$$.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$43$$);
  };
  $oj$$56$$.$OffcanvasUtils$.$_closeWithCatch$ = function $$oj$$56$$$$OffcanvasUtils$$$_closeWithCatch$$($offcanvas$$8$$) {
    $oj$$56$$.$OffcanvasUtils$.close($offcanvas$$8$$)["catch"](function($reason$$9$$) {
      $oj$$56$$.$Logger$.warn("Offcancas close failed: " + $reason$$9$$);
    });
  };
  $oj$$56$$.$OffcanvasUtils$.$_registerCloseHandler$ = function $$oj$$56$$$$OffcanvasUtils$$$_registerCloseHandler$$($offcanvas$$9$$) {
    $oj$$56$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$9$$);
    if ($oj$$56$$.$OffcanvasUtils$.$_isAutoDismiss$($offcanvas$$9$$)) {
      var $drawer$$6$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$9$$), $dismisHandler$$ = $offcanvas$$9$$[$oj$$56$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$] = function $$offcanvas$$9$$$$oj$$56$$$$OffcanvasUtils$$$DISMISS_HANDLER_KEY$$($event$$567$$) {
        var $target$$98$$ = $event$$567$$.target;
        $oj$$56$$.$DomUtils$.$isChromeEvent$($event$$567$$) || "focus" === $event$$567$$.type && !$$$$50$$($target$$98$$).is(":focusable") || (null == $$$$50$$.data($drawer$$6$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$) ? $oj$$56$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$9$$) : $oj$$56$$.$DomUtils$.$isLogicalAncestorOrSelf$($drawer$$6$$[0], $target$$98$$) || $oj$$56$$.$OffcanvasUtils$.$_closeWithCatch$($offcanvas$$9$$));
      }, $documentElement$$ = document.documentElement;
      $oj$$56$$.$DomUtils$.$isTouchSupported$() && $documentElement$$.addEventListener("touchstart", $dismisHandler$$, !0);
      $documentElement$$.addEventListener("mousedown", $dismisHandler$$, !0);
      $documentElement$$.addEventListener("focus", $dismisHandler$$, !0);
    }
    $oj$$56$$.$OffcanvasUtils$.$_registerSwipeHandler$($offcanvas$$9$$);
  };
  $oj$$56$$.$OffcanvasUtils$.$_unregisterCloseHandler$ = function $$oj$$56$$$$OffcanvasUtils$$$_unregisterCloseHandler$$($offcanvas$$10$$) {
    var $dismisHandler$$1$$ = $offcanvas$$10$$[$oj$$56$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$];
    if ($dismisHandler$$1$$) {
      var $documentElement$$1$$ = document.documentElement;
      $oj$$56$$.$DomUtils$.$isTouchSupported$() && $documentElement$$1$$.removeEventListener("touchstart", $dismisHandler$$1$$, !0);
      $documentElement$$1$$.removeEventListener("mousedown", $dismisHandler$$1$$, !0);
      $documentElement$$1$$.removeEventListener("focus", $dismisHandler$$1$$, !0);
      delete $offcanvas$$10$$[$oj$$56$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$];
      $offcanvas$$10$$[$oj$$56$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$] = null;
    }
    $oj$$56$$.$OffcanvasUtils$.$_unregisterSwipeHandler$($offcanvas$$10$$);
  };
  $oj$$56$$.$OffcanvasUtils$.$_registerSwipeHandler$ = function $$oj$$56$$$$OffcanvasUtils$$$_registerSwipeHandler$$($offcanvas$$11$$) {
    if ($oj$$56$$.$DomUtils$.$isTouchSupported$()) {
      var $selector$$40$$ = $offcanvas$$11$$[$oj$$56$$.$OffcanvasUtils$.$SELECTOR_KEY$], $drawer$$7_drawerHammer$$ = $$$$50$$($selector$$40$$), $edge$$6$$ = $oj$$56$$.$OffcanvasUtils$.$_getEdge$($drawer$$7_drawerHammer$$), $swipeEvent$$, $options$$367$$;
      $edge$$6$$ === $oj$$56$$.$OffcanvasUtils$.$EDGE_START$ && !$oj$$56$$.$OffcanvasUtils$.$_isRTL$() || $edge$$6$$ === $oj$$56$$.$OffcanvasUtils$.$EDGE_END$ && $oj$$56$$.$OffcanvasUtils$.$_isRTL$() ? ($options$$367$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_LEFT}]]}, $swipeEvent$$ = "swipeleft") : $edge$$6$$ === $oj$$56$$.$OffcanvasUtils$.$EDGE_START$ && $oj$$56$$.$OffcanvasUtils$.$_isRTL$() || $edge$$6$$ === $oj$$56$$.$OffcanvasUtils$.$EDGE_END$ && !$oj$$56$$.$OffcanvasUtils$.$_isRTL$() ? 
      ($options$$367$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_RIGHT}]]}, $swipeEvent$$ = "swiperight") : $edge$$6$$ === $oj$$56$$.$OffcanvasUtils$.$EDGE_TOP$ ? ($options$$367$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_UP}]]}, $swipeEvent$$ = "swipeup") : $edge$$6$$ === $oj$$56$$.$OffcanvasUtils$.$EDGE_BOTTOM$ && ($options$$367$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_DOWN}]]}, $swipeEvent$$ = "swipedown");
      $drawer$$7_drawerHammer$$ = $drawer$$7_drawerHammer$$.$ojHammer$($options$$367$$).on($swipeEvent$$, function($event$$568$$) {
        $event$$568$$.preventDefault();
        $oj$$56$$.$OffcanvasUtils$.$_closeWithCatch$($offcanvas$$11$$);
      });
      $$$$50$$.data($$$$50$$($selector$$40$$)[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$, {event:$swipeEvent$$, hammer:$drawer$$7_drawerHammer$$});
    }
  };
  $oj$$56$$.$OffcanvasUtils$.$_unregisterSwipeHandler$ = function $$oj$$56$$$$OffcanvasUtils$$$_unregisterSwipeHandler$$($dHammer_drawer$$8_offcanvas$$12$$) {
    $dHammer_drawer$$8_offcanvas$$12$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($dHammer_drawer$$8_offcanvas$$12$$);
    0 < $dHammer_drawer$$8_offcanvas$$12$$.length && ($dHammer_drawer$$8_offcanvas$$12$$ = $$$$50$$.data($dHammer_drawer$$8_offcanvas$$12$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$)) && $dHammer_drawer$$8_offcanvas$$12$$.hammer.off($dHammer_drawer$$8_offcanvas$$12$$.event);
  };
  $oj$$56$$.$OffcanvasUtils$.$_afterCloseHandler$ = function $$oj$$56$$$$OffcanvasUtils$$$_afterCloseHandler$$($offcanvas$$13$$) {
    var $drawer$$9$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$13$$);
    if ($$$$50$$.data($drawer$$9$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$) === $offcanvas$$13$$) {
      $oj$$56$$.$OffcanvasUtils$.$_getEdge$($drawer$$9$$);
      var $wrapper$$8$$ = $oj$$56$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$13$$);
      $oj$$56$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$13$$, $wrapper$$8$$, !1);
      $oj$$56$$.$OffcanvasUtils$.$_removeModality$($offcanvas$$13$$);
      $oj$$56$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$13$$);
      $drawer$$9$$.trigger("ojclose", $offcanvas$$13$$);
      $$$$50$$.removeData($drawer$$9$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    }
  };
  $oj$$56$$.$OffcanvasUtils$.$_setVisible$ = function $$oj$$56$$$$OffcanvasUtils$$$_setVisible$$($selector$$41$$, $visible$$1$$, $edge$$8$$) {
    var $drawer$$10$$ = $$$$50$$($selector$$41$$);
    ($visible$$1$$ = !!$visible$$1$$) && $oj$$56$$.$OffcanvasUtils$.$_isOpen$($drawer$$10$$) && $oj$$56$$.$OffcanvasUtils$.$_close$($selector$$41$$, !1);
    $drawer$$10$$.toggleClass($oj$$56$$.$OffcanvasUtils$.$_drawerSelector$[$edge$$8$$], !$visible$$1$$);
  };
  $oj$$56$$.$OffcanvasUtils$.$setupResponsive$ = function $$oj$$56$$$$OffcanvasUtils$$$setupResponsive$$($mqListener_offcanvas$$14$$) {
    var $mqs_query$$11$$ = $mqListener_offcanvas$$14$$.query;
    if (null !== $mqs_query$$11$$) {
      var $selector$$42$$ = $mqListener_offcanvas$$14$$[$oj$$56$$.$OffcanvasUtils$.$SELECTOR_KEY$], $mqs_query$$11$$ = window.matchMedia($mqs_query$$11$$), $edge$$9$$ = $oj$$56$$.$OffcanvasUtils$.$_saveEdge$($mqListener_offcanvas$$14$$);
      $mqListener_offcanvas$$14$$ = function $$mqListener_offcanvas$$14$$$($event$$569$$) {
        $oj$$56$$.$OffcanvasUtils$.$_setVisible$($selector$$42$$, $event$$569$$.matches, $edge$$9$$);
      };
      $mqs_query$$11$$.addListener($mqListener_offcanvas$$14$$);
      $oj$$56$$.$OffcanvasUtils$.$_setVisible$($selector$$42$$, $mqs_query$$11$$.matches, $edge$$9$$);
      $$$$50$$.data($$$$50$$($selector$$42$$)[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$, {mqList:$mqs_query$$11$$, mqListener:$mqListener_offcanvas$$14$$});
    }
  };
  $goog$exportPath_$$("OffcanvasUtils.setupResponsive", $oj$$56$$.$OffcanvasUtils$.$setupResponsive$, $oj$$56$$);
  $oj$$56$$.$OffcanvasUtils$.$tearDownResponsive$ = function $$oj$$56$$$$OffcanvasUtils$$$tearDownResponsive$$($drawer$$11_offcanvas$$15$$) {
    $drawer$$11_offcanvas$$15$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($drawer$$11_offcanvas$$15$$);
    var $mql$$ = $$$$50$$.data($drawer$$11_offcanvas$$15$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$);
    $mql$$ && ($mql$$.mqList.removeListener($mql$$.mqListener), $$$$50$$.removeData($drawer$$11_offcanvas$$15$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$));
  };
  $goog$exportPath_$$("OffcanvasUtils.tearDownResponsive", $oj$$56$$.$OffcanvasUtils$.$tearDownResponsive$, $oj$$56$$);
  $oj$$56$$.$OffcanvasUtils$.open = function $$oj$$56$$$$OffcanvasUtils$$open$($offcanvas$$16$$) {
    var $drawer$$12$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$16$$), $nOffcanvas_oldOffcanvas$$ = $$$$50$$.data($drawer$$12$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($nOffcanvas_oldOffcanvas$$) {
      if ($nOffcanvas_oldOffcanvas$$[$oj$$56$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$]) {
        return $nOffcanvas_oldOffcanvas$$[$oj$$56$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$];
      }
      if ($nOffcanvas_oldOffcanvas$$[$oj$$56$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$]) {
        return $nOffcanvas_oldOffcanvas$$[$oj$$56$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$];
      }
    }
    var $veto$$ = !1, $promise$$7$$ = new Promise(function($resolve$$64$$, $reject$$59$$) {
      $oj$$56$$.$Assert$.$assertPrototype$($drawer$$12$$, jQuery);
      var $edge$$10$$ = $oj$$56$$.$OffcanvasUtils$.$_saveEdge$($offcanvas$$16$$), $displayMode$$2_event$$570$$ = $$$$50$$.Event("ojbeforeopen");
      $drawer$$12$$.trigger($displayMode$$2_event$$570$$, $offcanvas$$16$$);
      if (!1 === $displayMode$$2_event$$570$$.result) {
        return $reject$$59$$($oj$$56$$.$OffcanvasUtils$.$VETO_BEFOREOPEN_MSG$), $veto$$ = !0, $promise$$7$$;
      }
      var $size$$26$$, $displayMode$$2_event$$570$$ = $oj$$56$$.$OffcanvasUtils$.$_getDisplayMode$($offcanvas$$16$$), $myOffcanvas$$ = $$$$50$$.extend({}, $offcanvas$$16$$);
      $myOffcanvas$$[$oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$] = $displayMode$$2_event$$570$$;
      $$$$50$$.data($drawer$$12$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$, $myOffcanvas$$);
      var $wrapper$$9$$;
      $wrapper$$9$$ = $oj$$56$$.$OffcanvasUtils$.$_getAnimateWrapper$($myOffcanvas$$);
      $oj$$56$$.$Assert$.$assertPrototype$($wrapper$$9$$, jQuery);
      $oj$$56$$.$OffcanvasUtils$.$_toggleClass$($myOffcanvas$$, $wrapper$$9$$, !0);
      $edge$$10$$ === $oj$$56$$.$OffcanvasUtils$.$EDGE_START$ || $edge$$10$$ === $oj$$56$$.$OffcanvasUtils$.$EDGE_END$ ? ($size$$26$$ = void 0 === $size$$26$$ ? $drawer$$12$$.outerWidth(!0) + "px" : $size$$26$$, $displayMode$$2_event$$570$$ === $oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $oj$$56$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$9$$, $edge$$10$$, $size$$26$$)) : ($size$$26$$ = void 0 === $size$$26$$ ? $drawer$$12$$.outerHeight(!0) + "px" : $size$$26$$, $displayMode$$2_event$$570$$ === 
      $oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $oj$$56$$.$OffcanvasUtils$.$_setTranslationY$($wrapper$$9$$, $edge$$10$$, $size$$26$$));
      var $outerWrapper$$;
      window.setTimeout(function() {
        $outerWrapper$$ = $oj$$56$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$12$$);
        $oj$$56$$.$Assert$.$assertPrototype$($outerWrapper$$, jQuery);
        $outerWrapper$$.addClass($oj$$56$$.$OffcanvasUtils$.$_getShiftSelector$($edge$$10$$));
      }, 10);
      $oj$$56$$.$OffcanvasUtils$.$_applyModality$($myOffcanvas$$, $drawer$$12$$);
      $oj$$56$$.$OffcanvasUtils$.$_onTransitionEnd$($wrapper$$9$$, function() {
        $wrapper$$9$$.removeClass($oj$$56$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
        $oj$$56$$.$OffcanvasUtils$.$_setFocus$($myOffcanvas$$);
        $drawer$$12$$.trigger("ojopen", $myOffcanvas$$);
        $oj$$56$$.$OffcanvasUtils$.$_registerCloseHandler$($myOffcanvas$$);
        $resolve$$64$$(!0);
      });
    });
    $veto$$ || ($nOffcanvas_oldOffcanvas$$ = $$$$50$$.data($drawer$$12$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$)) && ($nOffcanvas_oldOffcanvas$$[$oj$$56$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$] = $promise$$7$$);
    return $promise$$7$$;
  };
  $goog$exportPath_$$("OffcanvasUtils.open", $oj$$56$$.$OffcanvasUtils$.open, $oj$$56$$);
  $oj$$56$$.$OffcanvasUtils$.close = function $$oj$$56$$$$OffcanvasUtils$$close$($offcanvas$$17$$) {
    return $oj$$56$$.$OffcanvasUtils$.$_close$($offcanvas$$17$$[$oj$$56$$.$OffcanvasUtils$.$SELECTOR_KEY$], !0);
  };
  $goog$exportPath_$$("OffcanvasUtils.close", $oj$$56$$.$OffcanvasUtils$.close, $oj$$56$$);
  $oj$$56$$.$OffcanvasUtils$.$_close$ = function $$oj$$56$$$$OffcanvasUtils$$$_close$$($selector$$43$$, $animation$$2$$) {
    var $drawer$$13$$ = $$$$50$$($selector$$43$$);
    $oj$$56$$.$Assert$.$assertPrototype$($drawer$$13$$, jQuery);
    var $offcanvas$$18$$ = $$$$50$$.data($drawer$$13$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($offcanvas$$18$$ && $offcanvas$$18$$[$oj$$56$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$]) {
      return $offcanvas$$18$$[$oj$$56$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$];
    }
    var $veto$$1$$ = !1, $promise$$8$$ = new Promise(function($resolve$$65$$, $reject$$60$$) {
      if ($oj$$56$$.$OffcanvasUtils$.$_isOpen$($drawer$$13$$)) {
        $selector$$43$$ != $offcanvas$$18$$[$oj$$56$$.$OffcanvasUtils$.$SELECTOR_KEY$] && $resolve$$65$$(!0);
        var $edge$$11_shiftSelector$$ = $oj$$56$$.$OffcanvasUtils$.$_getEdge$($drawer$$13$$), $displayMode$$3$$ = $offcanvas$$18$$[$oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$], $edge$$11_shiftSelector$$ = $oj$$56$$.$OffcanvasUtils$.$_getShiftSelector$($edge$$11_shiftSelector$$), $outerWrapper$$1$$ = $oj$$56$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$13$$);
        $oj$$56$$.$Assert$.$assertPrototype$($outerWrapper$$1$$, jQuery);
        $outerWrapper$$1$$.hasClass($edge$$11_shiftSelector$$) || $resolve$$65$$(!0);
        var $event$$571_wrapper$$10$$ = $$$$50$$.Event("ojbeforeclose");
        $drawer$$13$$.trigger($event$$571_wrapper$$10$$, $offcanvas$$18$$);
        if (!1 === $event$$571_wrapper$$10$$.result) {
          return $reject$$60$$($oj$$56$$.$OffcanvasUtils$.$VETO_BEFORECLOSE_MSG$), $veto$$1$$ = !0, $promise$$8$$;
        }
        $event$$571_wrapper$$10$$ = $oj$$56$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$18$$);
        if ($animation$$2$$) {
          var $rafId$$ = 0, $endHandler$$1$$ = function $$endHandler$$1$$$() {
            $oj$$56$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$18$$);
            0 !== $rafId$$ && window.cancelAnimationFrame($rafId$$);
            $resolve$$65$$(!0);
          }, $checkDetachedHandler$$ = function $$checkDetachedHandler$$$() {
            null == $drawer$$13$$[0].offsetParent ? $endHandler$$1$$() : $rafId$$ = window.requestAnimationFrame($checkDetachedHandler$$);
          };
          $oj$$56$$.$OffcanvasUtils$.$_onTransitionEnd$($event$$571_wrapper$$10$$, $endHandler$$1$$);
          $rafId$$ = window.requestAnimationFrame($checkDetachedHandler$$);
        }
        $displayMode$$3$$ === $oj$$56$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $oj$$56$$.$OffcanvasUtils$.$_setTransform$($event$$571_wrapper$$10$$, "");
        $outerWrapper$$1$$.removeClass($edge$$11_shiftSelector$$);
        $oj$$56$$.$OffcanvasUtils$.$_isModal$($offcanvas$$18$$) && $offcanvas$$18$$[$oj$$56$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].removeClass($oj$$56$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$);
        $animation$$2$$ ? $event$$571_wrapper$$10$$.addClass($oj$$56$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$) : ($oj$$56$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$18$$), $resolve$$65$$(!0));
      } else {
        $resolve$$65$$(!0);
      }
    });
    $veto$$1$$ || ($offcanvas$$18$$ = $$$$50$$.data($drawer$$13$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$)) && ($offcanvas$$18$$[$oj$$56$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$] = $promise$$8$$);
    return $promise$$8$$;
  };
  $oj$$56$$.$OffcanvasUtils$.toggle = function $$oj$$56$$$$OffcanvasUtils$$toggle$($offcanvas$$19$$) {
    var $drawer$$14$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$19$$);
    $oj$$56$$.$Assert$.$assertPrototype$($drawer$$14$$, jQuery);
    return $oj$$56$$.$OffcanvasUtils$.$_isOpen$($drawer$$14$$) ? $oj$$56$$.$OffcanvasUtils$.close($offcanvas$$19$$) : $oj$$56$$.$OffcanvasUtils$.open($offcanvas$$19$$);
  };
  $goog$exportPath_$$("OffcanvasUtils.toggle", $oj$$56$$.$OffcanvasUtils$.toggle, $oj$$56$$);
  $oj$$56$$.$OffcanvasUtils$.$_addGlassPane$ = function $$oj$$56$$$$OffcanvasUtils$$$_addGlassPane$$($drawer$$15$$) {
    var $overlay$$ = $$$$50$$("\x3cdiv\x3e");
    $overlay$$.addClass($oj$$56$$.$OffcanvasUtils$.$GLASSPANE_SELECTOR$);
    $overlay$$.attr("role", "presentation");
    $overlay$$.attr("aria-hidden", "true");
    $overlay$$.appendTo($drawer$$15$$.parent());
    $overlay$$.on("keydown keyup keypress mousedown mouseup mouseover mouseout click focusin focus", function($event$$572$$) {
      $event$$572$$.stopPropagation();
      $event$$572$$.preventDefault();
    });
    return $overlay$$;
  };
  $oj$$56$$.$OffcanvasUtils$.$_createSurrogate$ = function $$oj$$56$$$$OffcanvasUtils$$$_createSurrogate$$($layer$$) {
    var $surrogate$$ = $$$$50$$("\x3cscript\x3e"), $layerId_surrogateId$$ = $layer$$.attr("id");
    $layerId_surrogateId$$ ? ($layerId_surrogateId$$ = [$layerId_surrogateId$$, "surrogate"].join("_"), $surrogate$$.attr("id", $layerId_surrogateId$$)) : $layerId_surrogateId$$ = $surrogate$$.uniqueId();
    $surrogate$$.insertBefore($layer$$);
    $layer$$.attr($oj$$56$$.$OffcanvasUtils$.$SURROGATE_ATTR$, $layerId_surrogateId$$);
    return $surrogate$$;
  };
  $oj$$56$$.$OffcanvasUtils$.$_swapOrder$ = function $$oj$$56$$$$OffcanvasUtils$$$_swapOrder$$($offcanvas$$20$$, $drawer$$16$$) {
    $offcanvas$$20$$[$oj$$56$$.$OffcanvasUtils$.$SURROGATE_KEY$] = $oj$$56$$.$OffcanvasUtils$.$_createSurrogate$($drawer$$16$$);
    $drawer$$16$$.appendTo($drawer$$16$$.parent());
  };
  $oj$$56$$.$OffcanvasUtils$.$_restoreOrder$ = function $$oj$$56$$$$OffcanvasUtils$$$_restoreOrder$$($offcanvas$$21_surrogate$$1$$) {
    var $drawer$$17$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$21_surrogate$$1$$);
    $offcanvas$$21_surrogate$$1$$ = $offcanvas$$21_surrogate$$1$$[$oj$$56$$.$OffcanvasUtils$.$SURROGATE_KEY$];
    $drawer$$17$$ && $offcanvas$$21_surrogate$$1$$ && $drawer$$17$$.attr($oj$$56$$.$OffcanvasUtils$.$SURROGATE_ATTR$) === $offcanvas$$21_surrogate$$1$$.attr("id") && ($drawer$$17$$.insertAfter($offcanvas$$21_surrogate$$1$$), $drawer$$17$$.removeAttr($oj$$56$$.$OffcanvasUtils$.$SURROGATE_ATTR$), $offcanvas$$21_surrogate$$1$$.remove());
  };
  $oj$$56$$.$OffcanvasUtils$.$_applyModality$ = function $$oj$$56$$$$OffcanvasUtils$$$_applyModality$$($offcanvas$$22$$, $drawer$$18$$) {
    $oj$$56$$.$OffcanvasUtils$.$_isModal$($offcanvas$$22$$) && ($offcanvas$$22$$[$oj$$56$$.$OffcanvasUtils$.$GLASS_PANE_KEY$] = $oj$$56$$.$OffcanvasUtils$.$_addGlassPane$($drawer$$18$$), $oj$$56$$.$OffcanvasUtils$.$_swapOrder$($offcanvas$$22$$, $drawer$$18$$), window.setTimeout(function() {
      $offcanvas$$22$$[$oj$$56$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].addClass($oj$$56$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$);
    }, 0));
  };
  $oj$$56$$.$OffcanvasUtils$.$_removeModality$ = function $$oj$$56$$$$OffcanvasUtils$$$_removeModality$$($offcanvas$$23$$) {
    $oj$$56$$.$OffcanvasUtils$.$_isModal$($offcanvas$$23$$) && ($offcanvas$$23$$[$oj$$56$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].remove(), $oj$$56$$.$OffcanvasUtils$.$_restoreOrder$($offcanvas$$23$$));
  };
  $oj$$56$$.$OffcanvasUtils$.$setupPanToReveal$ = function $$oj$$56$$$$OffcanvasUtils$$$setupPanToReveal$$($offcanvas$$24$$) {
    var $drawer$$20$$, $size$$27$$, $outerWrapper$$2$$, $wrapper$$11$$, $mOptions$$, $proceed$$, $direction$$13$$, $ui$$33$$, $evt$$29$$, $delta$$7$$, $edge$$12$$, $listener$$44$$;
    null == $$$$50$$($offcanvas$$24$$).attr("oj-data-pansetup") && ($$$$50$$($offcanvas$$24$$).attr("oj-data-pansetup", "true"), $offcanvas$$24$$.displayMode = "push", $drawer$$20$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$24$$), $size$$27$$ = $offcanvas$$24$$.size, null == $size$$27$$ && ($size$$27$$ = $drawer$$20$$.outerWidth()), $outerWrapper$$2$$ = $oj$$56$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$20$$), $wrapper$$11$$ = $oj$$56$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$24$$), 
    $mOptions$$ = {recognizers:[[$Hammer$$5$$.Pan, {direction:$Hammer$$5$$.DIRECTION_HORIZONTAL}]]}, $proceed$$ = !1, $$$$50$$($outerWrapper$$2$$).$ojHammer$($mOptions$$).on("panstart", function($event$$573$$) {
      $direction$$13$$ = null;
      switch($event$$573$$.gesture.direction) {
        case $Hammer$$5$$.DIRECTION_LEFT:
          Math.abs($event$$573$$.gesture.deltaY) < Math.abs($event$$573$$.gesture.deltaX) && ($direction$$13$$ = $oj$$56$$.$OffcanvasUtils$.$_isRTL$() ? "end" : "start");
          break;
        case $Hammer$$5$$.DIRECTION_RIGHT:
          Math.abs($event$$573$$.gesture.deltaY) < Math.abs($event$$573$$.gesture.deltaX) && ($direction$$13$$ = $oj$$56$$.$OffcanvasUtils$.$_isRTL$() ? "start" : "end");
      }
      null != $direction$$13$$ && ($ui$$33$$ = {direction:$direction$$13$$, distance:Math.abs($event$$573$$.gesture.deltaX)}, $evt$$29$$ = $$$$50$$.Event("ojpanstart"), $drawer$$20$$.trigger($evt$$29$$, $ui$$33$$), $evt$$29$$.isDefaultPrevented() || ($offcanvas$$24$$._closePromise = null, $oj$$56$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$24$$, $wrapper$$11$$, !0), $proceed$$ = !0, $event$$573$$.stopPropagation()));
    }).on("panmove", function($event$$574$$) {
      $proceed$$ && ($delta$$7$$ = Math.abs($event$$574$$.gesture.deltaX), $drawer$$20$$.css("width", $delta$$7$$), $wrapper$$11$$.removeClass($oj$$56$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $oj$$56$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$11$$, "start", $event$$574$$.gesture.deltaX + "px"), $ui$$33$$ = {direction:$direction$$13$$, distance:$delta$$7$$}, $evt$$29$$ = $$$$50$$.Event("ojpanmove"), $drawer$$20$$.trigger($evt$$29$$, $ui$$33$$), $event$$574$$.stopPropagation());
    }).on("panend", function($event$$575$$) {
      $proceed$$ && ($proceed$$ = !1, $delta$$7$$ = Math.abs($event$$575$$.gesture.deltaX), $ui$$33$$ = {distance:$delta$$7$$}, $evt$$29$$ = $$$$50$$.Event("ojpanend"), $drawer$$20$$.trigger($evt$$29$$, $ui$$33$$), $event$$575$$.stopPropagation(), $evt$$29$$.isDefaultPrevented() ? ($listener$$44$$ = function $$listener$$44$$$() {
        $oj$$56$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$24$$, $wrapper$$11$$, !1);
        $wrapper$$11$$.removeClass($oj$$56$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
        $wrapper$$11$$.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$44$$);
      }, $wrapper$$11$$.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$44$$), $wrapper$$11$$.addClass($oj$$56$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $oj$$56$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$11$$, "start", "0px")) : ($wrapper$$11$$.addClass($oj$$56$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $drawer$$20$$.css("width", $size$$27$$ + "px"), $edge$$12$$ = $offcanvas$$24$$.edge, null == $edge$$12$$ && ($edge$$12$$ = $drawer$$20$$.hasClass("oj-offcanvas-start") ? 
      "start" : "end"), $oj$$56$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$11$$, $edge$$12$$, $size$$27$$ + "px"), $$$$50$$.data($drawer$$20$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$, $offcanvas$$24$$), $$$$50$$.data($drawer$$20$$[0], $oj$$56$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$, $edge$$12$$), $oj$$56$$.$OffcanvasUtils$.$_registerCloseHandler$($offcanvas$$24$$)));
    }));
  };
  $goog$exportPath_$$("OffcanvasUtils.setupPanToReveal", $oj$$56$$.$OffcanvasUtils$.$setupPanToReveal$, $oj$$56$$);
  $oj$$56$$.$OffcanvasUtils$.$tearDownPanToReveal$ = function $$oj$$56$$$$OffcanvasUtils$$$tearDownPanToReveal$$($drawer$$21_offcanvas$$25$$) {
    $drawer$$21_offcanvas$$25$$ = $oj$$56$$.$OffcanvasUtils$.$_getDrawer$($drawer$$21_offcanvas$$25$$);
    $$$$50$$($oj$$56$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$21_offcanvas$$25$$)).off("panstart panmove panend");
  };
  $goog$exportPath_$$("OffcanvasUtils.tearDownPanToReveal", $oj$$56$$.$OffcanvasUtils$.$tearDownPanToReveal$, $oj$$56$$);
});
