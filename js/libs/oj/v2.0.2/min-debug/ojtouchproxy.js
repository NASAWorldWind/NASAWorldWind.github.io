/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 jQuery UI Touch Punch 0.2.3

 Copyright 2011-2014, Dave Furfero
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
define(["ojs/ojcore", "jquery"], function($oj$$77$$, $$$$70$$) {
  $oj$$77$$.$_TouchProxy$ = function $$oj$$77$$$$_TouchProxy$$($elem$$167$$) {
    this._init($elem$$167$$);
  };
  $oj$$77$$.$_TouchProxy$.prototype._init = function $$oj$$77$$$$_TouchProxy$$$_init$($elem$$168$$) {
    this.$_elem$ = $elem$$168$$;
    this.$_touchMoved$ = this.$_touchHandled$ = !1;
    this.$_touchStartHandler$ = $$$$70$$.proxy(this.$_touchStart$, this);
    this.$_touchEndHandler$ = $$$$70$$.proxy(this.$_touchEnd$, this);
    this.$_touchMoveHandler$ = $$$$70$$.proxy(this.$_touchMove$, this);
    this.$_elem$.on({touchstart:this.$_touchStartHandler$, touchend:this.$_touchEndHandler$, touchmove:this.$_touchMoveHandler$, touchcancel:this.$_touchEndHandler$});
  };
  $oj$$77$$.$_TouchProxy$.prototype._destroy = function $$oj$$77$$$$_TouchProxy$$$_destroy$() {
    this.$_elem$ && this.$_touchStartHandler$ && (this.$_elem$.off({touchstart:this.$_touchStartHandler$, touchmove:this.$_touchMoveHandler$, touchend:this.$_touchEndHandler$, touchcancel:this.$_touchEndHandler$}), this.$_touchMoveHandler$ = this.$_touchEndHandler$ = this.$_touchStartHandler$ = void 0);
  };
  $oj$$77$$.$_TouchProxy$.prototype.$_touchHandler$ = function $$oj$$77$$$$_TouchProxy$$$$_touchHandler$$($event$$653$$, $simulatedType$$) {
    if (!(1 < $event$$653$$.originalEvent.touches.length)) {
      "touchstart" != $event$$653$$.type && "touchend" != $event$$653$$.type && $event$$653$$.preventDefault();
      var $touch$$ = $event$$653$$.originalEvent.changedTouches[0], $simulatedEvent$$ = document.createEvent("MouseEvent");
      $simulatedEvent$$.initMouseEvent($simulatedType$$, !0, !0, window, 1, $touch$$.screenX, $touch$$.screenY, $touch$$.clientX, $touch$$.clientY, !1, !1, !1, !1, 0, null);
      $touch$$.target.dispatchEvent($simulatedEvent$$);
    }
  };
  $oj$$77$$.$_TouchProxy$.prototype.$_touchStart$ = function $$oj$$77$$$$_TouchProxy$$$$_touchStart$$($event$$654$$) {
    this.$_touchHandled$ || (this.$_touchHandled$ = !0, this.$_touchMoved$ = !1, this.$_touchHandler$($event$$654$$, "mouseover"), this.$_touchHandler$($event$$654$$, "mousemove"), this.$_touchHandler$($event$$654$$, "mousedown"));
  };
  $oj$$77$$.$_TouchProxy$.prototype.$_touchMove$ = function $$oj$$77$$$$_TouchProxy$$$$_touchMove$$($event$$655$$) {
    this.$_touchHandled$ && (this.$_touchMoved$ = !0, this.$_touchHandler$($event$$655$$, "mousemove"));
  };
  $oj$$77$$.$_TouchProxy$.prototype.$_touchEnd$ = function $$oj$$77$$$$_TouchProxy$$$$_touchEnd$$($event$$656$$) {
    this.$_touchHandled$ && (this.$_touchHandler$($event$$656$$, "mouseup"), this.$_touchHandler$($event$$656$$, "mouseout"), this.$_touchMoved$ || "touchend" != $event$$656$$.type || this.$_touchHandler$($event$$656$$, "click"), this.$_touchHandled$ = !1);
  };
  $oj$$77$$.$_TouchProxy$.$_TOUCH_PROXY_KEY$ = "_ojTouchProxy";
  $oj$$77$$.$_TouchProxy$.$addTouchListeners$ = function $$oj$$77$$$$_TouchProxy$$$addTouchListeners$$($elem$$169_jelem$$9$$) {
    $elem$$169_jelem$$9$$ = $$$$70$$($elem$$169_jelem$$9$$);
    var $proxy$$ = $elem$$169_jelem$$9$$.data($oj$$77$$.$_TouchProxy$.$_TOUCH_PROXY_KEY$);
    $proxy$$ || ($proxy$$ = new $oj$$77$$.$_TouchProxy$($elem$$169_jelem$$9$$), $elem$$169_jelem$$9$$.data($oj$$77$$.$_TouchProxy$.$_TOUCH_PROXY_KEY$, $proxy$$));
    return $proxy$$;
  };
  $oj$$77$$.$_TouchProxy$.$removeTouchListeners$ = function $$oj$$77$$$$_TouchProxy$$$removeTouchListeners$$($elem$$170_jelem$$10$$) {
    $elem$$170_jelem$$10$$ = $$$$70$$($elem$$170_jelem$$10$$);
    var $proxy$$1$$ = $elem$$170_jelem$$10$$.data($oj$$77$$.$_TouchProxy$.$_TOUCH_PROXY_KEY$);
    $proxy$$1$$ && ($proxy$$1$$._destroy(), $elem$$170_jelem$$10$$.removeData($oj$$77$$.$_TouchProxy$.$_TOUCH_PROXY_KEY$));
  };
});
