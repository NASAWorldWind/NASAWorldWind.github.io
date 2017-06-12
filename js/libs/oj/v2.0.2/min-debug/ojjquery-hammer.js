/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs"], function($oj$$47$$, $$$$44$$, $Hammer$$4$$) {
  $Hammer$$4$$ ? ($$$$44$$.fn.$ojHammer$ = function $$$$$44$$$fn$$ojHammer$$($options$$351$$) {
    return "instance" == $options$$351$$ ? this.data("ojHammer") : this.each(function() {
      var $$el$$1$$ = $$$$44$$(this);
      $$el$$1$$.data("ojHammer") || $$el$$1$$.data("ojHammer", new $Hammer$$4$$.Manager($$el$$1$$[0], $options$$351$$));
    });
  }, $goog$exportPath_$$("$.fn.ojHammer", $$$$44$$.fn.$ojHammer$, void 0), $Hammer$$4$$.Manager.prototype.emit = function($originalEmit$$) {
    return function($type$$96$$, $data$$162$$) {
      $originalEmit$$.call(this, $type$$96$$, $data$$162$$);
      $$$$44$$(this.element).trigger({type:$type$$96$$, gesture:$data$$162$$});
    };
  }($Hammer$$4$$.Manager.prototype.emit)) : $oj$$47$$.$Logger$.warn("Hammer jQuery extension loaded without Hammer.");
});
