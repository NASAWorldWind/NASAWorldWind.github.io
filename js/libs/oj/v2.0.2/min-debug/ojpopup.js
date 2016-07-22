/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$61$$, $$$$55$$) {
  (function() {
    var $_TAIL_STYLES$$ = "oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "), $_TAIL_ALIGN_RULES$$ = {"right-top":"oj-right oj-top", "right-middle":"oj-right oj-middle", "right-bottom":"oj-right oj-bottom", "left-top":"oj-left oj-top", "left-middle":"oj-left oj-middle", "left-bottom":"oj-left oj-bottom", "center-top":"oj-center oj-top", "center-middle":"oj-center oj-bottom", "center-bottom":"oj-center oj-bottom"};
    $oj$$61$$.$__registerWidget$("oj.ojPopup", $$$$55$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{autoDismiss:"focusLoss", chrome:"default", initialFocus:"auto", position:{my:"start top", at:"start bottom", of:"", collision:"flip"}, tail:"none", modality:"modeless", role:"tooltip", beforeOpen:null, open:null, beforeClose:null, close:null, focus:null}, _ComponentCreate:function() {
      this._super();
      var $rootElement$$1$$ = $$$$55$$("\x3cdiv\x3e");
      this.$_rootElement$ = $rootElement$$1$$.hide().addClass("oj-popup").attr("aria-hidden", "true");
      $rootElement$$1$$.addClass("oj-component");
      var $content$$30$$ = $$$$55$$("\x3cdiv\x3e").addClass("oj-popup-content");
      $content$$30$$.attr("role", "presentation");
      $content$$30$$.appendTo($rootElement$$1$$);
      this.element.after($rootElement$$1$$);
      this.element.appendTo($content$$30$$);
      this.element.show();
      this.$_createTail$();
      this.$_setChrome$();
      this.$_usingCallback$ = $$$$55$$.proxy(this.$_usingHandler$, this);
    }, _destroy:function() {
      this.isOpen() && this.$_closeImplicitly$();
      this.$_destroyTail$();
      delete this.$_usingCallback$;
      delete this.$_popupServiceEvents$;
      $oj$$61$$.$DomUtils$.unwrap(this.element, this.$_rootElement$);
      this.element.hide();
      var $closeDelayTimer$$2$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$2$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$2$$));
      this.$_destroyVoiceOverAssist$();
      this._super();
    }, widget:function() {
      return this.$_rootElement$;
    }, open:function($launcher$$10$$, $position$$33$$) {
      if (this.isOpen() && (this.close(), this.isOpen())) {
        return;
      }
      this.$_setLauncher$($launcher$$10$$);
      var $rootElement$$2$$ = this.$_rootElement$;
      $launcher$$10$$ = this.$_launcher$;
      $oj$$61$$.$StringUtils$.$isEmptyOrUndefined$($rootElement$$2$$.attr("id")) && $rootElement$$2$$.attr("id", this.$_getSubId$("wrapper"));
      if (!1 !== this._trigger("beforeOpen")) {
        this.$_setPosition$($position$$33$$);
        var $options$$379$$ = this.options;
        this.$_setAutoDismiss$($options$$379$$.autoDismiss);
        this.$_addDescribedBy$();
        $rootElement$$2$$.attr("role", $options$$379$$.role);
        $position$$33$$ = $options$$379$$.position;
        var $isRtl$$4_layerClass$$ = "rtl" === this.$_GetReadingDirection$();
        $position$$33$$ = $oj$$61$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$33$$, $isRtl$$4_layerClass$$);
        var $isRtl$$4_layerClass$$ = "oj-popup-layer", $psOptions$$7_tailDecoration$$ = $options$$379$$.tail;
        "none" !== $psOptions$$7_tailDecoration$$ && ($isRtl$$4_layerClass$$ += " " + ["oj-popup-tail", $psOptions$$7_tailDecoration$$].join("-"));
        $psOptions$$7_tailDecoration$$ = {};
        $psOptions$$7_tailDecoration$$[$oj$$61$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$2$$;
        $psOptions$$7_tailDecoration$$[$oj$$61$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$10$$;
        $psOptions$$7_tailDecoration$$[$oj$$61$$.$PopupService$.$OPTION$.$POSITION$] = $position$$33$$;
        $psOptions$$7_tailDecoration$$[$oj$$61$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
        $psOptions$$7_tailDecoration$$[$oj$$61$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = $isRtl$$4_layerClass$$;
        $psOptions$$7_tailDecoration$$[$oj$$61$$.$PopupService$.$OPTION$.$MODALITY$] = $options$$379$$.modality;
        $oj$$61$$.$PopupService$.$getInstance$().open($psOptions$$7_tailDecoration$$);
        this._trigger("open");
        this.$_intialFocus$();
        this.$_initVoiceOverAssist$();
        this._on($rootElement$$2$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
        $launcher$$10$$ && 0 < $launcher$$10$$.length && this._on($launcher$$10$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
      }
    }, close:function() {
      if (this.isOpen() && (!1 !== this._trigger("beforeClose") || this.$_ignoreBeforeCloseResultant$)) {
        this.$_restoreFocus$();
        var $launcher$$11_psOptions$$8$$ = this.$_launcher$, $position$$34_rootElement$$3$$ = this.$_rootElement$;
        this._off($position$$34_rootElement$$3$$, "keydown keyup");
        $launcher$$11_psOptions$$8$$ && 0 < $launcher$$11_psOptions$$8$$.length && this._off($launcher$$11_psOptions$$8$$, "keydown keyup");
        this.$_destroyVoiceOverAssist$();
        $launcher$$11_psOptions$$8$$ = {};
        $launcher$$11_psOptions$$8$$[$oj$$61$$.$PopupService$.$OPTION$.$POPUP$] = $position$$34_rootElement$$3$$;
        $oj$$61$$.$PopupService$.$getInstance$().close($launcher$$11_psOptions$$8$$);
        this.$_removeDescribedBy$();
        this.$_setAutoDismiss$();
        delete this.$_launcher$;
        $position$$34_rootElement$$3$$ = this.options.position;
        $position$$34_rootElement$$3$$._ofo && (delete $position$$34_rootElement$$3$$._ofo, delete $position$$34_rootElement$$3$$.of);
        this._trigger("close");
      }
    }, isOpen:function() {
      return this.$_rootElement$.is(":visible");
    }, refresh:function() {
      this._super();
      this.isOpen() && this.$_reposition$();
      var $rootElement$$4$$ = this.$_rootElement$;
      $oj$$61$$.$PopupService$.$getInstance$().$triggerOnDescendents$($rootElement$$4$$, $oj$$61$$.$PopupService$.$EVENT$.$POPUP_REFRESH$);
    }, _setOption:function($key$$174$$, $value$$305$$) {
      var $options$$380_psOptions$$9$$ = this.options;
      switch($key$$174$$) {
        case "tail":
          $value$$305$$ !== $options$$380_psOptions$$9$$.tail && this.$_setTail$($value$$305$$);
          break;
        case "chrome":
          $value$$305$$ !== $options$$380_psOptions$$9$$.chrome && this.$_setChrome$($value$$305$$);
          break;
        case "position":
          this.$_setPosition$($value$$305$$);
          this.refresh();
          return;
        case "autoDismiss":
          this.isOpen() && $value$$305$$ !== $options$$380_psOptions$$9$$.autoDismiss && this.$_setAutoDismiss$($value$$305$$);
          break;
        case "modality":
          this.isOpen() && ($options$$380_psOptions$$9$$ = {}, $options$$380_psOptions$$9$$[$oj$$61$$.$PopupService$.$OPTION$.$POPUP$] = this.$_rootElement$, $options$$380_psOptions$$9$$[$oj$$61$$.$PopupService$.$OPTION$.$MODALITY$] = $value$$305$$, $oj$$61$$.$PopupService$.$getInstance$().$changeOptions$($options$$380_psOptions$$9$$));
      }
      this._superApply(arguments);
    }, $_getRootStyle$:function() {
      return "oj-popup";
    }, $_setTail$:function($tail$$) {
      this.$_destroyTail$();
      this.$_createTail$($tail$$);
      this.$_reposition$();
    }, $_createTail$:function($tail$$1_tailDecoration$$1_tailStyle$$) {
      $tail$$1_tailDecoration$$1_tailStyle$$ = $tail$$1_tailDecoration$$1_tailStyle$$ ? $tail$$1_tailDecoration$$1_tailStyle$$ : this.options.tail;
      if ("none" !== $tail$$1_tailDecoration$$1_tailStyle$$) {
        $tail$$1_tailDecoration$$1_tailStyle$$ = ["oj-popup-tail", $tail$$1_tailDecoration$$1_tailStyle$$].join("-");
        var $options$$381_tailDom$$ = $$$$55$$("\x3cdiv\x3e").hide();
        $options$$381_tailDom$$.addClass("oj-popup-tail").addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        $options$$381_tailDom$$.attr("role", "presentation");
        this.$_tailId$ = $options$$381_tailDom$$.attr("id", this.$_getSubId$("tail")).attr("id");
        var $rootElement$$6$$ = this.$_rootElement$;
        $options$$381_tailDom$$.appendTo($rootElement$$6$$);
        $rootElement$$6$$.addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        this.isOpen() && ($options$$381_tailDom$$ = {}, $options$$381_tailDom$$[$oj$$61$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$6$$, $options$$381_tailDom$$[$oj$$61$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer " + $tail$$1_tailDecoration$$1_tailStyle$$, $oj$$61$$.$PopupService$.$getInstance$().$changeOptions$($options$$381_tailDom$$));
      }
    }, $_getTail$:function() {
      var $tailId$$ = this.$_tailId$;
      return $tailId$$ ? $$$$55$$(document.getElementById($tailId$$)) : null;
    }, $_destroyTail$:function() {
      var $rootElement$$7_tail$$2$$ = this.$_getTail$();
      $rootElement$$7_tail$$2$$ && $rootElement$$7_tail$$2$$.remove();
      delete this.$_tailId$;
      $rootElement$$7_tail$$2$$ = this.$_rootElement$;
      $rootElement$$7_tail$$2$$.removeClass(["oj-popup-tail", this.options.tail].join("-"));
      if (this.isOpen()) {
        var $options$$382$$ = {};
        $options$$382$$[$oj$$61$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$7_tail$$2$$;
        $options$$382$$[$oj$$61$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer";
        $oj$$61$$.$PopupService$.$getInstance$().$changeOptions$($options$$382$$);
      }
    }, $_setChrome$:function($chrome$$1_chromeDecoration$$) {
      $chrome$$1_chromeDecoration$$ = $chrome$$1_chromeDecoration$$ ? $chrome$$1_chromeDecoration$$ : this.options.chrome;
      var $rootElement$$8$$ = this.$_rootElement$;
      "default" === $chrome$$1_chromeDecoration$$ && $rootElement$$8$$.hasClass("oj-popup-no-chrome") ? $rootElement$$8$$.removeClass("oj-popup-no-chrome") : "none" !== $chrome$$1_chromeDecoration$$ || $rootElement$$8$$.hasClass("oj-popup-no-chrome") || $rootElement$$8$$.addClass("oj-popup-no-chrome");
    }, $_setLauncher$:function($launcher$$12$$) {
      $launcher$$12$$ ? "string" === $$$$55$$.type($launcher$$12$$) ? $launcher$$12$$ = $$$$55$$($launcher$$12$$) : 1 === $launcher$$12$$.nodeType && ($launcher$$12$$ = $$$$55$$($launcher$$12$$)) : $launcher$$12$$ = $$$$55$$(document.activeElement);
      if ($launcher$$12$$ instanceof jQuery && 1 < $launcher$$12$$.length) {
        for (var $rootElement$$9$$ = this.$_rootElement$, $i$$424$$ = 0;$i$$424$$ < $launcher$$12$$.length;$i$$424$$++) {
          var $target$$99$$ = $launcher$$12$$[0];
          if (!$oj$$61$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$9$$[0], $target$$99$$)) {
            $launcher$$12$$ = $$$$55$$($target$$99$$);
            break;
          }
        }
      } else {
        if (!($launcher$$12$$ instanceof jQuery) || $launcher$$12$$ instanceof jQuery && 0 === $launcher$$12$$.length) {
          $launcher$$12$$ = $$$$55$$(document.activeElement);
        }
      }
      this.$_launcher$ = $launcher$$12$$;
    }, $_setPosition$:function($position$$35$$) {
      var $launcher$$13_options$$383_usingCallback$$1$$ = this.options;
      $position$$35$$ && ($launcher$$13_options$$383_usingCallback$$1$$.position = $$$$55$$.extend($launcher$$13_options$$383_usingCallback$$1$$[$position$$35$$], $position$$35$$));
      $position$$35$$ = $launcher$$13_options$$383_usingCallback$$1$$.position;
      $launcher$$13_options$$383_usingCallback$$1$$ = this.$_usingCallback$;
      $$$$55$$.isFunction($position$$35$$.using) && $position$$35$$.using !== $launcher$$13_options$$383_usingCallback$$1$$ && ($position$$35$$.origUsing = $position$$35$$.using);
      $position$$35$$.using = $launcher$$13_options$$383_usingCallback$$1$$;
      $launcher$$13_options$$383_usingCallback$$1$$ = this.$_launcher$;
      $position$$35$$.of || ($position$$35$$.of = $launcher$$13_options$$383_usingCallback$$1$$, $position$$35$$._ofo = !0);
    }, $_usingHandler$:function($pos$$13$$, $props$$27$$) {
      var $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ = $props$$27$$.element.element;
      if ($pos$$13$$.top !== $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$.css("top") || $pos$$13$$.left !== $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$.css("left")) {
        var $options$$384_tail$$3$$ = this.$_getTail$();
        if ($options$$384_tail$$3$$) {
          $options$$384_tail$$3$$.hide();
          for (var $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = 0;$i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ < $_TAIL_STYLES$$.length;$i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$++) {
            $options$$384_tail$$3$$.removeClass($_TAIL_STYLES$$[$i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]), $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$.removeClass($_TAIL_STYLES$$[$i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]);
          }
          $options$$384_tail$$3$$.removeAttr("style");
          if ($props$$27$$.target && 0 === $props$$27$$.target.height && 0 === $props$$27$$.target.width && ($i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = "rtl" === this.$_GetReadingDirection$(), $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $oj$$61$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$).my, !$oj$$61$$.$StringUtils$.$isEmptyOrUndefined$($i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$))) {
            var $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.split(" "), $suggestedHrule$$ = $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[0], $suggestedVrule$$ = "middle";
            1 < $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.length && ($suggestedVrule$$ = "center" === $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1] ? "middle" : $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1]);
            $props$$27$$.horizontal = $suggestedHrule$$;
            $props$$27$$.vertical = $suggestedVrule$$;
          }
          $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $_TAIL_ALIGN_RULES$$[[$props$$27$$.horizontal, $props$$27$$.vertical].join("-")];
          $options$$384_tail$$3$$.addClass($i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
          $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$.addClass($i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
          $options$$384_tail$$3$$.show();
          "left" === $props$$27$$.horizontal ? ($i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$384_tail$$3$$.outerWidth(), $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$61$$.$DomUtils$.$getCSSLengthAsInt$($options$$384_tail$$3$$.css("left")), $pos$$13$$.left += $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2) : "right" === $props$$27$$.horizontal && 
          ($i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$384_tail$$3$$.outerWidth(), $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$61$$.$DomUtils$.$getCSSLengthAsInt$($options$$384_tail$$3$$.css("right")), $pos$$13$$.left -= $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2);
          "top" === $props$$27$$.vertical ? ($i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$384_tail$$3$$.outerHeight(), $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$61$$.$DomUtils$.$getCSSLengthAsInt$($options$$384_tail$$3$$.css($props$$27$$.vertical)), $pos$$13$$.top += $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2) : "bottom" === 
          $props$$27$$.vertical && ($i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$384_tail$$3$$.outerHeight(), $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$61$$.$DomUtils$.$getCSSLengthAsInt$($options$$384_tail$$3$$.css($props$$27$$.vertical)), $pos$$13$$.top -= $i$$425_isRtl$$5_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2);
          $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$.css($pos$$13$$);
          "center" === $props$$27$$.horizontal ? ($leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ = $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$.width(), $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ / 2 - $options$$384_tail$$3$$.outerWidth() / 2) / $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ * 
          100), $options$$384_tail$$3$$.css({left:$leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ + "%"})) : "middle" === $props$$27$$.vertical && ($leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ = $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$.height(), $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ / 
          2 - $options$$384_tail$$3$$.outerHeight() / 2) / $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ * 100), $options$$384_tail$$3$$.css({top:$leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ + "%"}));
        } else {
          $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$.css($pos$$13$$);
        }
        $options$$384_tail$$3$$ = this.options;
        ($leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$ = $options$$384_tail$$3$$.position.origUsing) && $leftPercent_origUsing$$1_rootElement$$10_rootHeight_rootWidth_topPercent$$($pos$$13$$, $props$$27$$);
        "focusLoss" === $options$$384_tail$$3$$.autoDismiss && $oj$$61$$.$PositionUtils$.$isAligningPositionClipped$($props$$27$$) && (this.$_ignoreRestoreFocus$ = !0, this.$_closeDelayTimer$ = this._delay($$$$55$$.proxy(this.$_closeImplicitly$, this), 1));
      }
    }, $_reposition$:function() {
      var $rootElement$$11$$ = this.$_rootElement$, $position$$37$$ = this.options.position, $isRtl$$6$$ = "rtl" === this.$_GetReadingDirection$();
      $rootElement$$11$$.position($oj$$61$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$37$$, $isRtl$$6$$));
    }, $_intialFocus$:function($nodes$$5_waiAriaAssisted$$) {
      var $initialFocus$$1_rootElement$$12$$ = this.$_deriveInitialFocus$();
      $nodes$$5_waiAriaAssisted$$ && "none" === $initialFocus$$1_rootElement$$12$$ && ($initialFocus$$1_rootElement$$12$$ = "popup");
      "firstFocusable" === $initialFocus$$1_rootElement$$12$$ && ($nodes$$5_waiAriaAssisted$$ = this.element.find(":focusable"), 0 < $nodes$$5_waiAriaAssisted$$.length ? ($$$$55$$($nodes$$5_waiAriaAssisted$$[0]).focus(), this._trigger("focus")) : $initialFocus$$1_rootElement$$12$$ = "popup");
      "popup" === $initialFocus$$1_rootElement$$12$$ && ($initialFocus$$1_rootElement$$12$$ = this.$_rootElement$, $initialFocus$$1_rootElement$$12$$.attr("tabindex", "-1"), $initialFocus$$1_rootElement$$12$$.focus(), this._trigger("focus"));
    }, $_deriveInitialFocus$:function() {
      var $options$$385$$ = this.options, $initialFocus$$2$$ = $options$$385$$.initialFocus;
      "auto" === $initialFocus$$2$$ && ($initialFocus$$2$$ = "modal" === $options$$385$$.modality ? $oj$$61$$.$DomUtils$.$isTouchSupported$() ? "popup" : "firstFocusable" : "none");
      return $initialFocus$$2$$;
    }, $_isFocusInPopup$:function($activeElement$$2$$, $includeChildren$$) {
      $activeElement$$2$$ || ($activeElement$$2$$ = document.activeElement);
      if (!$activeElement$$2$$) {
        return!1;
      }
      var $rootElement$$13$$ = this.$_rootElement$;
      $includeChildren$$ && ($rootElement$$13$$ = $rootElement$$13$$.parent());
      return $oj$$61$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$13$$[0], $activeElement$$2$$);
    }, $_isFocusInLauncher$:function($activeElement$$3$$) {
      $activeElement$$3$$ || ($activeElement$$3$$ = document.activeElement);
      return $oj$$61$$.$DomUtils$.$isAncestorOrSelf$(this.$_launcher$[0], $activeElement$$3$$);
    }, $_restoreFocus$:function() {
      this.$_ignoreRestoreFocus$ ? delete this.$_ignoreRestoreFocus$ : this.$_isFocusInPopup$(null, !0) && this.$_launcher$.focus();
    }, $_keyHandler$:function($event$$582_launcher$$16$$) {
      if (!$event$$582_launcher$$16$$.isDefaultPrevented()) {
        var $eventType$$51_firstNode$$ = $event$$582_launcher$$16$$.type, $options$$386_target$$100$$ = $event$$582_launcher$$16$$.target;
        if ("keyup" === $eventType$$51_firstNode$$ && $event$$582_launcher$$16$$.keyCode === $$$$55$$.ui.keyCode.ESCAPE && (this.$_isFocusInPopup$($options$$386_target$$100$$) || this.$_isFocusInLauncher$($options$$386_target$$100$$))) {
          $event$$582_launcher$$16$$.preventDefault(), this.close();
        } else {
          if ("keydown" === $eventType$$51_firstNode$$ && 117 === $event$$582_launcher$$16$$.keyCode) {
            this.$_isFocusInPopup$($options$$386_target$$100$$) ? ($options$$386_target$$100$$ = this.options, "modeless" === $options$$386_target$$100$$.modality ? ($event$$582_launcher$$16$$.preventDefault(), $event$$582_launcher$$16$$ = this.$_launcher$, $event$$582_launcher$$16$$.focus()) : this.close()) : this.$_isFocusInLauncher$($options$$386_target$$100$$) && ($event$$582_launcher$$16$$.preventDefault(), this.$_intialFocus$(!0));
          } else {
            if ("keydown" === $eventType$$51_firstNode$$ && $event$$582_launcher$$16$$.keyCode === $$$$55$$.ui.keyCode.TAB && this.$_isFocusInPopup$($options$$386_target$$100$$)) {
              var $lastNode$$1_nodes$$6$$ = this.element.find(":tabbable");
              if (0 < $lastNode$$1_nodes$$6$$.length) {
                var $eventType$$51_firstNode$$ = $lastNode$$1_nodes$$6$$[0], $lastNode$$1_nodes$$6$$ = $lastNode$$1_nodes$$6$$[$lastNode$$1_nodes$$6$$.length - 1], $rootElement$$14$$ = this.$_rootElement$;
                $eventType$$51_firstNode$$ !== $options$$386_target$$100$$ && $rootElement$$14$$[0] !== $options$$386_target$$100$$ || !$event$$582_launcher$$16$$.shiftKey ? $lastNode$$1_nodes$$6$$ !== $options$$386_target$$100$$ || $event$$582_launcher$$16$$.shiftKey || ($event$$582_launcher$$16$$.preventDefault(), $lastNode$$1_nodes$$6$$ === $eventType$$51_firstNode$$ ? ($rootElement$$14$$.attr("tabindex", "-1"), $rootElement$$14$$.focus()) : $$$$55$$($eventType$$51_firstNode$$).focus()) : ($event$$582_launcher$$16$$.preventDefault(), 
                $eventType$$51_firstNode$$ === $lastNode$$1_nodes$$6$$ && $eventType$$51_firstNode$$ === $options$$386_target$$100$$ ? ($rootElement$$14$$.attr("tabindex", "-1"), $rootElement$$14$$.focus()) : $$$$55$$($lastNode$$1_nodes$$6$$).focus());
              } else {
                $event$$582_launcher$$16$$.preventDefault(), $options$$386_target$$100$$ = this.options, "modeless" === $options$$386_target$$100$$.modality ? ($event$$582_launcher$$16$$ = this.$_launcher$, $event$$582_launcher$$16$$.focus()) : this.close();
              }
            }
          }
        }
      }
    }, $_setAutoDismiss$:function($autoDismiss_options$$387$$) {
      var $focusLossCallback$$ = this.$_focusLossCallback$, $events$$6$$ = this.$_getPopupServiceEvents$();
      $focusLossCallback$$ && (delete $events$$6$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$], delete this.$_focusLossCallback$);
      "focusLoss" === $autoDismiss_options$$387$$ && ($focusLossCallback$$ = this.$_focusLossCallback$ = $$$$55$$.proxy(this.$_dismissalHandler$, this), $events$$6$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $focusLossCallback$$);
      this.isOpen() && ($autoDismiss_options$$387$$ = {}, $autoDismiss_options$$387$$[$oj$$61$$.$PopupService$.$OPTION$.$POPUP$] = this.$_rootElement$, $autoDismiss_options$$387$$[$oj$$61$$.$PopupService$.$OPTION$.$EVENTS$] = $events$$6$$, $oj$$61$$.$PopupService$.$getInstance$().$changeOptions$($autoDismiss_options$$387$$));
    }, $_dismissalHandler$:function($event$$583$$) {
      var $launcher$$17$$ = this.$_launcher$, $layer$$1$$ = this.$_rootElement$.parent(), $target$$101$$ = $event$$583$$.target, $focusSkipLink_link$$1$$ = this.$_focusSkipLink$;
      if ($focusSkipLink_link$$1$$ && ($focusSkipLink_link$$1$$ = $focusSkipLink_link$$1$$.getLink()) && $oj$$61$$.$DomUtils$.$isAncestorOrSelf$($focusSkipLink_link$$1$$[0], $target$$101$$)) {
        return;
      }
      if (!$oj$$61$$.$DomUtils$.$isAncestorOrSelf$($launcher$$17$$[0], $target$$101$$) && !$oj$$61$$.$DomUtils$.$isAncestorOrSelf$($layer$$1$$[0], $target$$101$$)) {
        if ($$$$55$$($target$$101$$).is(":focusable")) {
          if ("mousedown" === $event$$583$$.type || "touchstart" === $event$$583$$.type) {
            return;
          }
          this.$_ignoreRestoreFocus$ = !0;
        }
        this.close();
      }
    }, $_addDescribedBy$:function() {
      var $launcher$$18$$ = this.$_launcher$, $popupId$$ = this.$_rootElement$.attr("id"), $describedby$$2_tokens$$5$$ = $launcher$$18$$.attr("aria-describedby"), $describedby$$2_tokens$$5$$ = $describedby$$2_tokens$$5$$ ? $describedby$$2_tokens$$5$$.split(/\s+/) : [];
      $describedby$$2_tokens$$5$$.push($popupId$$);
      $describedby$$2_tokens$$5$$ = $$$$55$$.trim($describedby$$2_tokens$$5$$.join(" "));
      $launcher$$18$$.attr("aria-describedby", $describedby$$2_tokens$$5$$);
    }, $_removeDescribedBy$:function() {
      var $launcher$$19$$ = this.$_launcher$, $index$$255_popupId$$1$$ = this.$_rootElement$.attr("id"), $describedby$$3_tokens$$6$$ = $launcher$$19$$.attr("aria-describedby"), $describedby$$3_tokens$$6$$ = $describedby$$3_tokens$$6$$ ? $describedby$$3_tokens$$6$$.split(/\s+/) : [], $index$$255_popupId$$1$$ = $$$$55$$.inArray($index$$255_popupId$$1$$, $describedby$$3_tokens$$6$$);
      -1 !== $index$$255_popupId$$1$$ && $describedby$$3_tokens$$6$$.splice($index$$255_popupId$$1$$, 1);
      ($describedby$$3_tokens$$6$$ = $$$$55$$.trim($describedby$$3_tokens$$6$$.join(" "))) ? $launcher$$19$$.attr("aria-describedby", $describedby$$3_tokens$$6$$) : $launcher$$19$$.removeAttr("aria-describedby");
    }, $_initVoiceOverAssist$:function() {
      var $callback$$121_isIOSVOSupported$$ = $oj$$61$$.$AgentUtils$.$getAgentInfo$().os === $oj$$61$$.$AgentUtils$.$OS$.$IOS$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$ = this.$_liveRegion$;
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$ = this.$_liveRegion$ = new $oj$$61$$.$PopupLiveRegion$);
      var $message$$34$$;
      $message$$34$$ = $callback$$121_isIOSVOSupported$$ ? this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNoneTouch" : "ariaLiveRegionInitialFocusFirstFocusableTouch") : this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNone" : "ariaLiveRegionInitialFocusFirstFocusable");
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$.$announce$($message$$34$$);
      if ($callback$$121_isIOSVOSupported$$) {
        if (!this.$_focusSkipLink$) {
          var $closeSkipLinkId_focusSkipLinkId_liveRegion$$ = this.$_getSubId$("focusSkipLink"), $element$$156_launcher$$20$$ = this.$_launcher$, $callback$$121_isIOSVOSupported$$ = $$$$55$$.proxy(this.$_intialFocus$, this, !0);
          $message$$34$$ = this.$getTranslatedString$("ariaFocusSkipLink");
          this.$_focusSkipLink$ = new $oj$$61$$.$PopupSkipLink$($element$$156_launcher$$20$$, $message$$34$$, $callback$$121_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$);
        }
        this.$_closeSkipLink$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$ = this.$_getSubId$("closeSkipLink"), $element$$156_launcher$$20$$ = this.element, $callback$$121_isIOSVOSupported$$ = $$$$55$$.proxy(this.$_closeImplicitly$, this), $message$$34$$ = this.$getTranslatedString$("ariaCloseSkipLink"), this.$_closeSkipLink$ = new $oj$$61$$.$PopupSkipLink$($element$$156_launcher$$20$$, $message$$34$$, $callback$$121_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$));
      }
    }, $_destroyVoiceOverAssist$:function() {
      var $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$ = this.$_liveRegion$;
      $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$ && ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$.destroy(), delete this.$_liveRegion$);
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$ = this.$_focusSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$.destroy(), delete this.$_focusSkipLink$;
      }
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$ = this.$_closeSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$1$$.destroy(), delete this.$_closeSkipLink$;
      }
    }, $_getSubId$:function($sub$$1$$) {
      var $id$$50$$ = this.element.attr("id");
      $oj$$61$$.$StringUtils$.$isEmptyOrUndefined$($id$$50$$) && ($id$$50$$ = this.uuid);
      return[$id$$50$$, $sub$$1$$].join("_");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$7$$ = this.$_popupServiceEvents$ = {};
        $events$$7$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$55$$.proxy(this.$_closeImplicitly$, this);
        $events$$7$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$55$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$7$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$55$$.proxy(this.refresh, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeImplicitly$:function() {
      this.$_ignoreBeforeCloseResultant$ = !0;
      this.close();
      delete this.$_ignoreBeforeCloseResultant$;
    }});
    $oj$$61$$.Components.$setDefaultOptions$({ojPopup:{modality:$oj$$61$$.Components.$createDynamicPropertyGetter$(function() {
      return $oj$$61$$.$ThemeUtils$.$getOptionDefaultMap$("popup").modality;
    })}});
  })();
});
