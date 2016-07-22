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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojbutton"], function($oj$$46$$, $$$$43$$) {
  $oj$$46$$.$__registerWidget$("oj.ojInputNumber", $$$$43$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:$oj$$46$$.$Validation$.$converterFactory$($oj$$46$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER).createConverter(), max:null, min:null, placeholder:void 0, rawValue:void 0, readOnly:!1, step:1, value:null}, getNodeBySubId:function($locator$$42$$) {
    var $node$$101$$ = this._superApply(arguments), $subId$$47$$;
    $node$$101$$ || ($subId$$47$$ = $locator$$42$$.subId, "oj-inputnumber-up" === $subId$$47$$ && ($node$$101$$ = this.widget().find(".oj-inputnumber-up")[0]), "oj-inputnumber-down" === $subId$$47$$ && ($node$$101$$ = this.widget().find(".oj-inputnumber-down")[0]), "oj-inputnumber-input" === $subId$$47$$ && ($node$$101$$ = this.widget().find(".oj-inputnumber-input")[0]));
    return $node$$101$$ || null;
  }, getSubIdByNode:function($node$$102$$) {
    var $subId$$48$$ = null;
    null != $node$$102$$ && ($node$$102$$ === this.widget().find(".oj-inputnumber-up")[0] ? $subId$$48$$ = {subId:"oj-inputnumber-up"} : $node$$102$$ === this.widget().find(".oj-inputnumber-down")[0] ? $subId$$48$$ = {subId:"oj-inputnumber-down"} : $node$$102$$ === this.widget().find(".oj-inputnumber-input")[0] && ($subId$$48$$ = {subId:"oj-inputnumber-input"}));
    return $subId$$48$$ || this._superApply(arguments);
  }, refresh:function() {
    this._super();
    this.$_setup$();
  }, stepDown:function($steps$$) {
    this.$_step$($steps$$, !1);
  }, stepUp:function($steps$$1$$) {
    this.$_step$($steps$$1$$, !0);
  }, widget:function() {
    return this.$uiInputNumber$;
  }, $_InitOptions$:function($originalDefaults$$13$$, $constructorOptions$$15$$) {
    var $opts$$35$$ = this.options, $self$$196$$ = this;
    this._superApply(arguments);
    $oj$$46$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"placeholder"}, {$attribute$:"value"}, {$attribute$:"readonly", option:"readOnly", $validateOption$:!0}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title"}, {$attribute$:"min"}, {$attribute$:"max"}, {$attribute$:"step"}], $constructorOptions$$15$$, this, function($initializedOptions$$1$$) {
      for (var $toParse$$ = ["value", "step", "min", "max"], $i$$379$$ = 0;$i$$379$$ < $toParse$$.length;$i$$379$$++) {
        var $opt$$20$$ = $toParse$$[$i$$379$$], $value$$288$$ = $opt$$20$$ in $initializedOptions$$1$$ ? $initializedOptions$$1$$[$opt$$20$$] : $opts$$35$$[$opt$$20$$];
        null != $value$$288$$ && ($initializedOptions$$1$$[$opt$$20$$] = "step" === $opt$$20$$ ? $self$$196$$.$_parseStep$($value$$288$$) : $self$$196$$.$_parse$($opt$$20$$, $value$$288$$));
      }
    });
    if (void 0 === $opts$$35$$.value) {
      throw Error("ojInputNumber has no value");
    }
    if (null != $opts$$35$$.min && null != $opts$$35$$.max && $opts$$35$$.max < $opts$$35$$.min) {
      throw Error("ojInputNumber's max must not be less than min");
    }
  }, _ComponentCreate:function() {
    var $node$$103$$ = this.element;
    this._super();
    this.$_draw$();
    $node$$103$$.removeAttr("pattern");
    this.$_inputNumberDefaultValidators$ = {};
    this.$_setup$();
    this._on(this.$_events$);
    this._focusable(this.$uiInputNumber$);
    this.$_activeable$(this.$uiInputNumber$);
  }, $_AfterSetOption$:function($option$$34$$, $previous$$1$$, $flags$$41$$) {
    this._superApply(arguments);
    switch($option$$34$$) {
      case "min":
      ;
      case "max":
        this.$_Refresh$($option$$34$$, this.options[$option$$34$$]);
    }
  }, _setOption:function($key$$163$$, $value$$289$$, $flags$$42$$) {
    var $coercedValue$$;
    $coercedValue$$ = "value" === $key$$163$$ || "max" === $key$$163$$ || "min" === $key$$163$$ ? this.$_parse$($key$$163$$, $value$$289$$) : "step" === $key$$163$$ ? this.$_parseStep$($value$$289$$) : $value$$289$$;
    this._super($key$$163$$, $coercedValue$$, $flags$$42$$);
    if ("max" === $key$$163$$ || "min" === $key$$163$$) {
      this.$_createRangeValidator$(), this.$_AfterSetOptionValidators$();
    }
    "disabled" === $key$$163$$ && this.element.prop("disabled", !!$value$$289$$);
    "readOnly" === $key$$163$$ && (this.element.prop("readonly", !!$value$$289$$), this.$_refreshStateTheming$("readOnly", this.options.readOnly), this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly));
  }, _destroy:function() {
    var $ret$$42$$ = this._super();
    this.$upButton$.ojButton("destroy");
    this.$downButton$.ojButton("destroy");
    this.$upButton$.remove();
    this.$downButton$.remove();
    this.$downButton$ = this.$upButton$ = null;
    $oj$$46$$.$DomUtils$.unwrap(this.element, this.$uiInputNumber$);
    clearTimeout(this.$timer$);
    return $ret$$42$$;
  }, $_Refresh$:function($name$$143$$, $value$$290$$, $forceDisplayValueRefresh$$1$$) {
    this._superApply(arguments);
    var $valueMinMax$$ = "value" === $name$$143$$ || "max" === $name$$143$$ || "min" === $name$$143$$, $valueMinMaxDisabled$$ = $valueMinMax$$ || "disabled" === $name$$143$$, $valuenow$$;
    $valueMinMaxDisabled$$ && ($valuenow$$ = this.$_getConvertedDisplayValue$());
    $valueMinMax$$ && this.$_refreshAriaMinMaxValue$($valuenow$$);
    "converter" === $name$$143$$ && this.$_refreshAriaText$($valuenow$$);
    $valueMinMaxDisabled$$ && this.$_updateButtons$($valuenow$$);
  }, $_GetConverter$:function() {
    return this.options.converter ? this._superApply(arguments) : $$$$43$$.oj.ojInputNumber.prototype.options.converter;
  }, $_GetImplicitValidators$:function() {
    var $ret$$43$$ = this._superApply(arguments);
    null == this.options.min && null == this.options.max || this.$_createRangeValidator$();
    return $$$$43$$.extend(this.$_inputNumberDefaultValidators$, $ret$$43$$);
  }, _GetDefaultStyleClass:function() {
    return "oj-inputnumber";
  }, $_events$:{input:function($event$$502$$) {
    this.$_SetRawValue$(this.element.val(), $event$$502$$);
  }, keydown:function($event$$503$$) {
    $event$$503$$.keyCode === $$$$43$$.ui.keyCode.ENTER ? (this.$_blurEnterSetValue$($event$$503$$), $event$$503$$.preventDefault()) : this.$_start$() && this.$_keydown$($event$$503$$) && $event$$503$$.preventDefault();
  }, keyup:function($event$$504$$) {
    this.$_stop$($event$$504$$);
  }, focus:function() {
    this.$previous$ = this.element.val();
  }, blur:function($event$$505$$) {
    this.$cancelBlur$ ? delete this.$cancelBlur$ : this.$_blurEnterSetValue$($event$$505$$);
  }, "mousedown .oj-inputnumber-button":function($event$$506$$) {
    function $checkFocus$$1$$() {
      this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.$previous$ = $previous$$2$$, this._delay(function() {
        this.$previous$ = $previous$$2$$;
      }));
    }
    var $previous$$2$$;
    $previous$$2$$ = this.element[0] === this.document[0].activeElement ? this.$previous$ : this.element.val();
    $event$$506$$.preventDefault();
    $checkFocus$$1$$.call(this);
    this.$cancelBlur$ = !0;
    this._delay(function() {
      delete this.$cancelBlur$;
      $checkFocus$$1$$.call(this);
    });
    this.$_start$();
    this.$_repeat$(null, $$$$43$$($event$$506$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$506$$);
  }, "mouseup .oj-inputnumber-button":function($event$$507$$) {
    this.$_stop$($event$$507$$);
  }, "mouseenter .oj-inputnumber-button":function($event$$508$$) {
    $$$$43$$($event$$508$$.currentTarget).hasClass("oj-active") && (this.$_start$(), this.$_repeat$(null, $$$$43$$($event$$508$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$508$$));
  }, "mouseleave .oj-inputnumber-button":function($event$$509$$) {
    this.$_stop$($event$$509$$);
  }}, $_BUNDLE_KEY$:{$_TOOLTIP_DECREMENT$:"tooltipDecrement", $_TOOLTIP_INCREMENT$:"tooltipIncrement"}, $_OPTION_TO_CSS_MAPPING$:{readOnly:"oj-read-only"}, $_setup$:function() {
    var $incrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_INCREMENT$), $decrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_DECREMENT$), $valuenow$$1$$ = this.$_getConvertedDisplayValue$();
    this.$upButton$.ojButton({label:$incrementString$$});
    this.$downButton$.ojButton({label:$decrementString$$});
    this.$_refreshAriaMinMaxValue$($valuenow$$1$$);
    this.$_updateButtons$($valuenow$$1$$);
    "boolean" === typeof this.options.readOnly && this.element.prop("readonly", this.options.readOnly);
    this.$_refreshStateTheming$("readOnly", this.options.readOnly);
    this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly);
  }, $_createOjButton$:function() {
    this.$upButton$ = this.$uiInputNumber$.find(".oj-inputnumber-up").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-up-icon"}});
    this.$downButton$ = this.$uiInputNumber$.find(".oj-inputnumber-down").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-down-icon"}});
  }, $_draw$:function() {
    var $element$$147$$ = this.element, $uiInputNumber$$ = this.$uiInputNumber$ = $element$$147$$.addClass("oj-inputnumber-input").wrap("\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e").parent().append("\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e").wrap("\x3cdiv class\x3d'oj-inputnumber oj-component'\x3e\x3c/div\x3e").parent();
    this.saveType = $element$$147$$.prop("type");
    $element$$147$$.attr("type", "text");
    $uiInputNumber$$.find(".oj-inputnumber-button").attr("tabIndex", "-1").attr("aria-hidden", !0);
    this.$_createOjButton$();
  }, $_keydown$:function($event$$510$$) {
    var $keyCode$$20$$ = $$$$43$$.ui.keyCode;
    switch($event$$510$$.keyCode) {
      case $keyCode$$20$$.UP:
        return this.$_repeat$(null, 1, $event$$510$$), !0;
      case $keyCode$$20$$.DOWN:
        return this.$_repeat$(null, -1, $event$$510$$), !0;
    }
    return!1;
  }, $_uiInputNumberHtml$:function() {
    return "\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e";
  }, $_buttonHtml$:function() {
    return "\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e";
  }, $_start$:function() {
    return this.$spinning$ = !0;
  }, $_repeat$:function($i$$380$$, $steps$$2$$, $event$$511$$) {
    $i$$380$$ = $i$$380$$ || 500;
    clearTimeout(this.$timer$);
    this.$timer$ = this._delay(function() {
      this.$_repeat$(40, $steps$$2$$, $event$$511$$);
    }, $i$$380$$);
    this.$_spin$($steps$$2$$ * this.options.step, $event$$511$$);
  }, $_spin$:function($step$$, $event$$512$$) {
    var $value$$291$$ = this.$_getConvertedDisplayValue$(), $value$$291$$ = this.$_adjustValue$($value$$291$$, $step$$);
    this.$_SetValue$($value$$291$$, $event$$512$$, this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$);
  }, $_precision$:function() {
    var $opts$$36_precision$$1$$ = this.options, $minOpt$$ = $opts$$36_precision$$1$$.min, $opts$$36_precision$$1$$ = this.$_precisionOf$($opts$$36_precision$$1$$.step);
    null != $minOpt$$ && ($opts$$36_precision$$1$$ = Math.max($opts$$36_precision$$1$$, this.$_precisionOf$($minOpt$$)));
    return $opts$$36_precision$$1$$;
  }, $_precisionOf$:function($num$$9_str$$20$$) {
    $num$$9_str$$20$$ = $num$$9_str$$20$$.toString();
    var $decimal$$ = $num$$9_str$$20$$.indexOf(".");
    return-1 === $decimal$$ ? 0 : $num$$9_str$$20$$.length - $decimal$$ - 1;
  }, $_adjustValue$:function($value$$292$$, $step$$1$$) {
    var $aboveMin_newValue$$21$$, $stepBase$$, $options$$348_precision$$2$$ = this.options, $minOpt$$1_validMax$$ = $options$$348_precision$$2$$.min, $stepOpt$$ = $options$$348_precision$$2$$.step, $maxOpt$$ = $options$$348_precision$$2$$.max, $options$$348_precision$$2$$ = this.$_precision$();
    $stepBase$$ = null != $minOpt$$1_validMax$$ ? $minOpt$$1_validMax$$ : 0;
    $aboveMin_newValue$$21$$ = $value$$292$$ - $stepBase$$;
    var $rounded$$1$$ = Math.round($aboveMin_newValue$$21$$ / $stepOpt$$) * $stepOpt$$, $rounded$$1$$ = parseFloat($rounded$$1$$.toFixed($options$$348_precision$$2$$));
    $rounded$$1$$ !== $aboveMin_newValue$$21$$ ? ($aboveMin_newValue$$21$$ = 0 > $step$$1$$ ? Math.ceil($aboveMin_newValue$$21$$ / $stepOpt$$) * $stepOpt$$ : Math.floor($aboveMin_newValue$$21$$ / $stepOpt$$) * $stepOpt$$, $aboveMin_newValue$$21$$ = $stepBase$$ + $aboveMin_newValue$$21$$ + $step$$1$$) : $aboveMin_newValue$$21$$ = $value$$292$$ + $step$$1$$;
    $aboveMin_newValue$$21$$ = parseFloat($aboveMin_newValue$$21$$.toFixed($options$$348_precision$$2$$));
    return null != $minOpt$$1_validMax$$ && $aboveMin_newValue$$21$$ < $minOpt$$1_validMax$$ ? $minOpt$$1_validMax$$ : null != $maxOpt$$ && $aboveMin_newValue$$21$$ > $maxOpt$$ ? ($minOpt$$1_validMax$$ = Math.floor(($maxOpt$$ - $stepBase$$) / $stepOpt$$) * $stepOpt$$ + $stepBase$$, $minOpt$$1_validMax$$ = parseFloat($minOpt$$1_validMax$$.toFixed($options$$348_precision$$2$$))) : $aboveMin_newValue$$21$$;
  }, $_stop$:function() {
    this.$spinning$ && (clearTimeout(this.$timer$), this.$spinning$ = !1);
  }, $_updateButtons$:function($valuenow$$2$$) {
    var $options$$349$$ = this.options, $minOpt$$2$$ = $options$$349$$.min, $maxOpt$$1$$ = $options$$349$$.max;
    if (this.$uiInputNumber$) {
      var $downButton$$ = this.$downButton$, $upButton$$ = this.$upButton$;
      $options$$349$$.disabled || void 0 === $valuenow$$2$$ ? ($downButton$$.ojButton("disable"), $upButton$$.ojButton("disable")) : null != $maxOpt$$1$$ && $valuenow$$2$$ >= $maxOpt$$1$$ ? ($downButton$$.ojButton("enable"), $upButton$$.ojButton("disable")) : (null != $minOpt$$2$$ && $valuenow$$2$$ <= $minOpt$$2$$ ? $downButton$$.ojButton("disable") : $downButton$$.ojButton("enable"), $upButton$$.ojButton("enable"));
    }
  }, $_getConvertedDisplayValue$:function() {
    var $value$$293$$, $displayValue$$11$$;
    try {
      $displayValue$$11$$ = this.$_GetDisplayValue$() || 0, $value$$293$$ = this.$_parseValue$($displayValue$$11$$);
    } catch ($e$$102$$) {
      $value$$293$$ = void 0;
    }
    return $value$$293$$;
  }, $_blurEnterSetValue$:function($event$$514$$) {
    var $val$$56$$ = this.element.val();
    this.$_stop$();
    var $valuenow$$3$$ = this.$_getConvertedDisplayValue$();
    this.$_refreshAriaMinMaxValue$($valuenow$$3$$);
    this.$_updateButtons$($valuenow$$3$$);
    this.$_SetValue$($val$$56$$, $event$$514$$);
  }, $_createRangeValidator$:function() {
    var $hint$$8_options$$350_translations$$15$$ = this.options, $minOpt$$3_numberRangeOptions$$ = $hint$$8_options$$350_translations$$15$$.min, $maxOpt$$2$$ = $hint$$8_options$$350_translations$$15$$.max, $messageSummary$$1_reqTrans$$1$$ = ($hint$$8_options$$350_translations$$15$$ = $hint$$8_options$$350_translations$$15$$.translations) ? $hint$$8_options$$350_translations$$15$$.numberRange || {} : {}, $hintMin$$, $hintMax$$, $hintInRange$$3$$, $messageDetailRangeOverflow$$2$$, $messageDetailRangeUnderflow$$2$$, 
    $messageSummaryRangeOverflow$$2$$, $messageSummaryRangeUnderflow$$2$$, $hint$$8_options$$350_translations$$15$$ = $messageSummary$$1_reqTrans$$1$$.hint || {}, $messageDetail$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageDetail || {}, $messageSummary$$1_reqTrans$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageSummary || {};
    null !== $hint$$8_options$$350_translations$$15$$ && ($hintMin$$ = $hint$$8_options$$350_translations$$15$$.min || null, $hintMax$$ = $hint$$8_options$$350_translations$$15$$.max || null, $hintInRange$$3$$ = $hint$$8_options$$350_translations$$15$$.inRange || null);
    null !== $messageDetail$$1$$ && ($messageDetailRangeOverflow$$2$$ = $messageDetail$$1$$.rangeOverflow || null, $messageDetailRangeUnderflow$$2$$ = $messageDetail$$1$$.rangeUnderflow || null);
    null !== $messageSummary$$1_reqTrans$$1$$ && ($messageSummaryRangeOverflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeOverflow || null, $messageSummaryRangeUnderflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeUnderflow || null);
    $minOpt$$3_numberRangeOptions$$ = {min:null != $minOpt$$3_numberRangeOptions$$ ? $minOpt$$3_numberRangeOptions$$ : void 0, max:null != $maxOpt$$2$$ ? $maxOpt$$2$$ : void 0, hint:{min:$hintMin$$ || null, max:$hintMax$$ || null, inRange:$hintInRange$$3$$ || null}, messageDetail:{rangeOverflow:$messageDetailRangeOverflow$$2$$ || null, rangeUnderflow:$messageDetailRangeUnderflow$$2$$ || null}, messageSummary:{rangeOverflow:$messageSummaryRangeOverflow$$2$$ || null, rangeUnderflow:$messageSummaryRangeUnderflow$$2$$ || 
    null}, converter:this.$_GetConverter$()};
    this.$_inputNumberDefaultValidators$[$oj$$46$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE] = $oj$$46$$.$Validation$.$validatorFactory$($oj$$46$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE).createValidator($minOpt$$3_numberRangeOptions$$);
  }, $_parse$:function($option$$35$$, $val$$57$$) {
    var $returnValue$$7$$;
    $returnValue$$7$$ = null !== $val$$57$$ ? +$val$$57$$ : $val$$57$$;
    if (isNaN($returnValue$$7$$)) {
      throw Error("ojInputNumber's " + $option$$35$$ + " option is not a number");
    }
    return $returnValue$$7$$;
  }, $_parseStep$:function($parsedStep_val$$58$$) {
    if (null === $parsedStep_val$$58$$) {
      return 1;
    }
    $parsedStep_val$$58$$ = this.$_parse$("step", $parsedStep_val$$58$$);
    if (0 >= $parsedStep_val$$58$$) {
      throw Error("Invalid step for ojInputNumber; step must be \x3e 0");
    }
    if (null === $parsedStep_val$$58$$ || 0 >= $parsedStep_val$$58$$) {
      $parsedStep_val$$58$$ = 1;
    }
    return $parsedStep_val$$58$$;
  }, $_refreshStateTheming$:function($option$$36$$, $value$$294$$) {
    -1 != Object.keys(this.$_OPTION_TO_CSS_MAPPING$).indexOf($option$$36$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$36$$], !!$value$$294$$);
  }, $_refreshRoleSpinbutton$:function($option$$37$$, $readOnly$$3$$) {
    $readOnly$$3$$ ? this.element.removeAttr("role") : this.element.attr("role", "spinbutton");
  }, $_refreshAriaMinMaxValue$:function($valuenow$$4$$) {
    this.element.attr({"aria-valuemin":this.options.min, "aria-valuemax":this.options.max, "aria-valuenow":$valuenow$$4$$});
    this.$_refreshAriaText$($valuenow$$4$$);
  }, $_refreshAriaText$:function($valuenow$$5$$) {
    var $element$$149$$ = this.element, $valuetext$$ = $element$$149$$.val();
    this.$_CompareOptionValues$("value", "" + $valuenow$$5$$, $valuetext$$) || $element$$149$$.attr({"aria-valuetext":$valuetext$$});
  }, $_step$:function($steps$$3$$, $up$$) {
    this.$_start$();
    $up$$ ? this.$_spin$(($steps$$3$$ || 1) * this.options.step) : this.$_spin$(($steps$$3$$ || 1) * -this.options.step);
    this.$_stop$();
  }});
});
