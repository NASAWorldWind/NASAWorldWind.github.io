/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojoffcanvas"], function($oj$$69$$, $$$$63$$) {
  $oj$$69$$.$SwipeToRevealUtils$ = {};
  $goog$exportPath_$$("SwipeToRevealUtils", $oj$$69$$.$SwipeToRevealUtils$, $oj$$69$$);
  $oj$$69$$.$SwipeToRevealUtils$.$setupSwipeActions$ = function $$oj$$69$$$$SwipeToRevealUtils$$$setupSwipeActions$$($elem$$160$$, $options$$402$$) {
    var $drawer$$22$$, $direction$$14$$, $offcanvas$$26$$, $outerWrapper$$4$$, $threshold$$4$$, $minimum$$2$$, $drawerShown$$, $evt$$30$$, $checkpoint$$, $defaultAction$$, $distance$$2$$;
    $drawer$$22$$ = $$$$63$$($elem$$160$$);
    $drawer$$22$$.hasClass("oj-swipetoreveal") || ($drawer$$22$$.addClass("oj-swipetoreveal"), $direction$$14$$ = $drawer$$22$$.hasClass("oj-offcanvas-start") ? "end" : "start", $offcanvas$$26$$ = {}, $offcanvas$$26$$.selector = $drawer$$22$$, $oj$$69$$.$OffcanvasUtils$.$setupPanToReveal$($offcanvas$$26$$), $outerWrapper$$4$$ = $oj$$69$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$22$$), null != $options$$402$$ && ($threshold$$4$$ = $options$$402$$.threshold), null != $threshold$$4$$ ? ($threshold$$4$$ = 
    parseInt($threshold$$4$$, 10), /%$/.test($options$$402$$.threshold) && ($threshold$$4$$ = $threshold$$4$$ / 100 * $outerWrapper$$4$$.outerWidth())) : $threshold$$4$$ = .55 * $outerWrapper$$4$$.outerWidth(), $minimum$$2$$ = Math.min(.3 * $outerWrapper$$4$$.outerWidth(), $drawer$$22$$.outerWidth()), $drawerShown$$ = !1, $outerWrapper$$4$$.on("click.swipetoreveal", function($event$$623$$) {
      $drawerShown$$ && ($event$$623$$.stopImmediatePropagation(), $drawerShown$$ = !1);
    }), $drawer$$22$$.on("ojpanstart", function($event$$624$$, $ui$$37$$) {
      $ui$$37$$.direction != $direction$$14$$ ? $event$$624$$.preventDefault() : ($drawer$$22$$.children().addClass("oj-swipetoreveal-action"), $defaultAction$$ = $drawer$$22$$.children(".oj-swipetoreveal-default").get(0), $checkpoint$$ = (new Date).getTime());
    }).on("ojpanmove", function($event$$625$$, $ui$$38$$) {
      $drawerShown$$ = !0;
      null != $defaultAction$$ && ($ui$$38$$.distance > $threshold$$4$$ ? $drawer$$22$$.children().each(function() {
        this != $defaultAction$$ && $$$$63$$(this).addClass("oj-swipetoreveal-hide-when-full");
      }) : $drawer$$22$$.children().removeClass("oj-swipetoreveal-hide-when-full"));
    }).on("ojpanend", function($event$$626$$, $ui$$39$$) {
      $distance$$2$$ = $ui$$39$$.distance;
      null != $defaultAction$$ && $distance$$2$$ > $threshold$$4$$ && ($evt$$30$$ = $$$$63$$.Event("ojdefaultaction"), $drawer$$22$$.trigger($evt$$30$$, $offcanvas$$26$$), $event$$626$$.preventDefault());
      $distance$$2$$ < $minimum$$2$$ && (200 < (new Date).getTime() - $checkpoint$$ || 10 > $distance$$2$$) && $event$$626$$.preventDefault();
    }));
  };
  $goog$exportPath_$$("SwipeToRevealUtils.setupSwipeActions", $oj$$69$$.$SwipeToRevealUtils$.$setupSwipeActions$, $oj$$69$$);
  $oj$$69$$.$SwipeToRevealUtils$.$tearDownSwipeActions$ = function $$oj$$69$$$$SwipeToRevealUtils$$$tearDownSwipeActions$$($elem$$161_offcanvas$$27$$) {
    var $drawer$$23_outerWrapper$$5$$;
    $drawer$$23_outerWrapper$$5$$ = $$$$63$$($elem$$161_offcanvas$$27$$);
    $elem$$161_offcanvas$$27$$ = {};
    $elem$$161_offcanvas$$27$$.selector = $drawer$$23_outerWrapper$$5$$;
    $drawer$$23_outerWrapper$$5$$ = $oj$$69$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$23_outerWrapper$$5$$);
    null != $drawer$$23_outerWrapper$$5$$ && $drawer$$23_outerWrapper$$5$$.off("click.swipetoreveal");
    $oj$$69$$.$OffcanvasUtils$.$tearDownPanToReveal$($elem$$161_offcanvas$$27$$);
  };
  $goog$exportPath_$$("SwipeToRevealUtils.tearDownSwipeActions", $oj$$69$$.$SwipeToRevealUtils$.$tearDownSwipeActions$, $oj$$69$$);
});
