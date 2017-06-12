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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "jqueryui-amd/draggable", "ojs/ojtouchproxy"], function($oj$$67$$, $$$$61$$) {
  (function() {
    $oj$$67$$.$__registerWidget$("oj.ojSlider", $$$$61$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", version:"1.0.1", widgetEventPrefix:"oj", options:{distance:0, max:100, min:0, orientation:"horizontal", readOnly:!1, disabled:!1, step:1, type:"fromMin", value:0, rawValue:void 0}, $_numPages$:5, $_sliderDisplayValue$:null, $_isRTL$:function() {
      return "rtl" === $oj$$67$$.$DomUtils$.$getReadingDirection$();
    }, _ComponentCreate:function() {
      this._super();
      this.element.removeAttr("pattern");
      this.$_inputtag$ = !1;
      this.element.is("INPUT") ? (this.$_inputtag$ = !0, this.element[0].style && (this.$_styleFromInputTag$ = this.element[0].style.cssText), this.$_inputElementOriginalDisplay$ = this.element.css("display"), this.element.css("display", "none"), this.$_elementWrapped$ = $$$$61$$(this.element).wrap("\x3cdiv\x3e \x3c/div\x3e").parent()) : this.$_elementWrapped$ = this.element;
      this.$_componentSetup$();
    }, $_componentSetup$:function() {
      this.$_newMultiValue$ = [];
      this.$_thumbIndex$ = null;
      var $classes$$1$$ = "oj-slider ", $classes$$1$$ = this.$_isVertical$() ? $classes$$1$$ + "oj-slider-vertical" : $classes$$1$$ + "oj-slider-horizontal", $classes$$1$$ = $classes$$1$$ + " oj-component oj-form-control";
      this.options.$readonly$ && ($classes$$1$$ += " oj-read-only");
      this.options.disabled && ($classes$$1$$ += " oj-disabled");
      this.$_elementWrapped$.removeClass();
      this.$_elementWrapped$.addClass($classes$$1$$);
      this.$_multipleThumbs$ = "range" === this.options.type ? !0 : !1;
      this.$_calculateNewMax$();
      this.$_createSliderContainer$();
      this.$_createBarBackground$();
      this.$_buildValueOption$();
      this.$_createRange$();
      this.$_createThumbs$();
      this.$_updateUI$();
      this.$_setupEvents$();
    }, $_AfterCreate$:function() {
      this._super();
      this.$_makeDraggable$();
      var $ariaLabelString_label$$17$$ = this.$_GetLabelElementLocal$();
      if ($ariaLabelString_label$$17$$) {
        var $thumb$$ = this.$_elementWrapped$.find(".oj-slider-thumb"), $labelId$$ = $ariaLabelString_label$$17$$.attr("id");
        $labelId$$ || ($labelId$$ = $ariaLabelString_label$$17$$.attr("for"));
        $thumb$$.attr("aria-labelledby", $labelId$$);
        1 < $ariaLabelString_label$$17$$.length && 1 < $thumb$$.length && $thumb$$[1].attr("aria-labelledby", String($labelId$$));
      } else {
        if ($ariaLabelString_label$$17$$ = this.element.attr("aria-label")) {
          $thumb$$ = this.$_elementWrapped$.find(".oj-slider-thumb"), $thumb$$.attr("aria-label", $ariaLabelString_label$$17$$);
        }
      }
    }, $_GetLabelElementLocal$:function() {
      var $queryResult$$7$$ = this.$_getAriaLabelledByElementLocal$();
      if (null !== $queryResult$$7$$ && 0 !== $queryResult$$7$$.length) {
        return $queryResult$$7$$;
      }
      $queryResult$$7$$ = this.$_getAriaLabelForElementLocal$();
      if (null !== $queryResult$$7$$ && 0 !== $queryResult$$7$$.length) {
        return $queryResult$$7$$;
      }
    }, $_getAriaLabelForElementLocal$:function() {
      var $id$$54_spanQuery$$ = this.element.prop("id");
      if (void 0 !== $id$$54_spanQuery$$) {
        var $jqLabelQuery$$ = $$$$61$$("label[for\x3d'" + $id$$54_spanQuery$$ + "']");
        if (0 < $jqLabelQuery$$.length) {
          return $jqLabelQuery$$;
        }
        $id$$54_spanQuery$$ = "span[for\x3d'" + $id$$54_spanQuery$$ + "']";
        if (0 !== $$$$61$$($id$$54_spanQuery$$).length) {
          return $$$$61$$($id$$54_spanQuery$$);
        }
      }
      return null;
    }, $_getAriaLabelledByElementLocal$:function() {
      var $ariaId$$1_jqSpanQuery$$ = this.element.attr("aria-labelledby");
      if (void 0 !== $ariaId$$1_jqSpanQuery$$) {
        var $jqLabelQuery$$1$$ = $$$$61$$("label[id\x3d'" + $ariaId$$1_jqSpanQuery$$ + "']");
        if (0 < $jqLabelQuery$$1$$.length) {
          return $jqLabelQuery$$1$$;
        }
        $ariaId$$1_jqSpanQuery$$ = $$$$61$$("span[id\x3d'" + $ariaId$$1_jqSpanQuery$$ + "']");
        if (0 < $ariaId$$1_jqSpanQuery$$.length) {
          return $ariaId$$1_jqSpanQuery$$;
        }
      } else {
        return null;
      }
    }, widget:function() {
      return this.$_elementWrapped$;
    }, $_SetDisplayValue$:function($displayValue$$13$$) {
      this.$_sliderDisplayValue$ = $displayValue$$13$$;
    }, $_GetDisplayValue$:function() {
      return this.$_sliderDisplayValue$;
    }, $_getElementId$:function() {
      return this.element[0].id;
    }, $_getThumbId$:function($index$$257$$) {
      return this.$_getElementId$() + "-thumb" + $index$$257$$;
    }, $_getBarValueId$:function() {
      return this.$_getElementId$() + "-barValue";
    }, $_getBarBackgroundId$:function() {
      return this.$_getElementId$() + "-barBack";
    }, $_getSliderWrapperId$:function() {
      return this.$_getElementId$() + "-sliderWrapper";
    }, $_createThumbs$:function() {
      var $i$$435$$, $thumbCount$$, $thumb$$1$$ = "", $thumbClasses$$ = "class\x3d'oj-slider-thumb ui-state-default' tabindex\x3d'0' role\x3d'slider'" + ("aria-valuemin \x3d '" + this.$_valueMin$() + "' ") + ("aria-valuemax \x3d '" + this.$_valueMax$() + "' ") + "\x3e\x3c/span\x3e", $thumbs$$ = [];
      $thumbCount$$ = this.$_multipleThumbs$ ? this.options.value.length : 1;
      for ($i$$435$$ = 0;$i$$435$$ < $thumbCount$$;$i$$435$$++) {
        $thumb$$1$$ = "\x3cspan " + ("id\x3d'" + this.$_getThumbId$($i$$435$$) + "' ") + $thumbClasses$$, $thumbs$$.push($thumb$$1$$);
      }
      this.$_thumbs$ = $$$$61$$($thumbs$$.join("")).appendTo(this.$_sliderContainer$);
      this.$_thumb$ = this.$_thumbs$.eq(0);
      var $that$$11$$ = this;
      this.$_thumbs$.each(function($i$$436$$) {
        $$$$61$$(this).data("oj-slider-thumb-index", $i$$436$$);
        $that$$11$$.$_isVertical$() && $$$$61$$(this).attr("aria-orientation", "vertical");
        $that$$11$$.options.disabled ? ($$$$61$$(this).attr("aria-disabled", "true"), $$$$61$$(this).removeAttr("tabindex")) : $$$$61$$(this).removeAttr("aria-disabled");
        $that$$11$$.options.readOnly ? $$$$61$$(this).attr("title", "read only") : $$$$61$$(this).removeAttr("title");
      });
    }, $_createSliderContainer$:function() {
      var $sliderWrapperId$$1$$ = this.$_getSliderWrapperId$(), $existingSliderWrapper$$ = this.$_elementWrapped$.find("#" + $sliderWrapperId$$1$$);
      $existingSliderWrapper$$.length && $existingSliderWrapper$$.remove();
      this.$_sliderContainer$ = $$$$61$$("\x3cdiv\x3e\x3c/div\x3e");
      $$$$61$$(this.$_sliderContainer$).attr("id", $sliderWrapperId$$1$$);
      this.$_sliderContainer$.addClass("oj-slider-container");
      this.element.after(this.$_sliderContainer$);
      this.$_sliderContainer$[0].style.cssText = this.$_styleFromInputTag$;
      this.$_isVertical$() && "" == this.$_sliderContainer$[0].style.height && (this.$_sliderContainer$[0].style.height = "150px");
    }, $_createBarBackground$:function() {
      var $barId$$ = this.$_getBarBackgroundId$(), $classes$$2_existingBarBack$$ = this.$_elementWrapped$.find("#" + $barId$$);
      $classes$$2_existingBarBack$$.length && $classes$$2_existingBarBack$$.remove();
      this.$_barback$ = $$$$61$$("\x3cdiv\x3e\x3c/div\x3e");
      $classes$$2_existingBarBack$$ = "oj-slider-bar";
      $classes$$2_existingBarBack$$ = this.$_isVertical$() ? $classes$$2_existingBarBack$$ + " oj-slider-vertical" : $classes$$2_existingBarBack$$ + " oj-slider-horizontal";
      $$$$61$$(this.$_barback$).attr("id", $barId$$);
      this.$_barback$.addClass($classes$$2_existingBarBack$$);
      this.$_sliderContainer$.append(this.$_barback$);
      var $that$$12$$ = this;
      this.$_barback$.on("mousedown" + $that$$12$$.eventNamespace, function($event$$607$$) {
        $that$$12$$.$_repositionThumb$($event$$607$$);
        $that$$12$$.$_mouseStop$($event$$607$$);
        $that$$12$$.$_getActiveThumb$().focus();
      });
    }, $_buildValueOption$:function() {
      this.options.type && (this.options.value ? this.$_multipleThumbs$ && 2 != this.options.value.length && (this.options.value = [0 < this.options.value.length ? this.options.value[0] : this.$_valueMin$(), this.$_valueMax$()], this.option("value", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}})) : (this.options.value = this.$_multipleThumbs$ ? [this.$_valueMin$(), this.$_valueMax$()] : this.$_valueMin$(), this.option("value", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}})));
    }, $_createRange$:function() {
      var $options$$401$$ = this.options, $classes$$3$$ = "";
      if ($options$$401$$.type) {
        this.$_range$ = $$$$61$$("\x3cdiv\x3e\x3c/div\x3e");
        $$$$61$$(this.$_range$).attr("id", this.$_getBarValueId$());
        this.$_sliderContainer$.append(this.$_range$);
        var $classes$$3$$ = "oj-slider-range oj-slider-bar-value", $that$$13$$ = this;
        this.$_range$.on("mousedown" + $that$$13$$.eventNamespace, function($event$$608$$) {
          $that$$13$$.$_repositionThumb$($event$$608$$);
          $that$$13$$.$_mouseStop$($event$$608$$);
          $that$$13$$.$_getActiveThumb$().focus();
        });
        this.$_range$ = this.$_sliderContainer$.find("#" + this.$_getBarValueId$());
        var $newClass$$ = "";
        "fromMin" === $options$$401$$.type ? $newClass$$ = " oj-slider-range-min" : "fromMax" === $options$$401$$.type && ($newClass$$ = " oj-slider-range-max");
        this.$_range$.addClass($classes$$3$$ + $newClass$$);
      } else {
        this.$_range$ && this.$_range$.remove(), this.$_range$ = null;
      }
    }, $_setupTouch$:function($e$$114$$) {
      this.$_touchProxy$ = $oj$$67$$.$_TouchProxy$.$addTouchListeners$($e$$114$$);
    }, $_tearDownTouch$:function($e$$115$$) {
      $oj$$67$$.$_TouchProxy$.$removeTouchListeners$($e$$115$$);
    }, $_setupEvents$:function() {
      this.$_CanSetValue$() && this._hoverable(this.$_elementWrapped$);
      this._focusable(this.$_elementWrapped$);
      this.$_thumbs$.toArray().forEach(function($current$$20_thumb$$4$$) {
        $current$$20_thumb$$4$$ = $$$$61$$($current$$20_thumb$$4$$);
        this.$_UnregisterChildNode$($current$$20_thumb$$4$$);
        this._on($current$$20_thumb$$4$$, this.$_thumbEvents$);
        this.$_setupTouch$($current$$20_thumb$$4$$);
      }, this);
    }, $_GetContentElement$:function() {
      return this.$_elementWrapped$;
    }, $_destroySliderDom$:function() {
      this.$_thumbs$.toArray().forEach(function($current$$21_thumb$$5$$) {
        $current$$21_thumb$$5$$ = $$$$61$$($current$$21_thumb$$5$$);
        this.$_tearDownTouch$($current$$21_thumb$$5$$);
      }, this);
      this.$_range$ && this.$_range$.remove();
      this.$_sliderContainer$ && this.$_sliderContainer$.remove();
    }, $_unwrapSlider$:function() {
      $oj$$67$$.$DomUtils$.unwrap(this.element, this.$_elementWrapped$);
      this.element.css("display", this.$_inputElementOriginalDisplay$);
      this.$_RestoreAttributes$(this.element);
    }, _destroy:function() {
      this.$_destroySliderDom$();
      this.$_unwrapSlider$();
      return this._super();
    }, $_repositionThumb$:function($event$$609$$) {
      var $normValue$$, $distance$$1$$, $index$$261$$, $that$$14$$ = this, $o$$11$$ = this.options;
      $index$$261$$ = 0;
      this.$_closestThumb$ = this.$_thumb$;
      if ($o$$11$$.disabled || $o$$11$$.readOnly) {
        return!1;
      }
      $normValue$$ = this.$_getNormValueFromMouse$({x:$event$$609$$.pageX, y:$event$$609$$.pageY});
      $distance$$1$$ = this.$_valueMax$() - this.$_valueMin$() + 1;
      this.$_multipleThumbs$ && this.$_thumbs$.each(function($i$$439$$) {
        var $thisDistance$$ = Math.abs($normValue$$ - $that$$14$$.$_getMultiValues$($i$$439$$));
        if ($distance$$1$$ > $thisDistance$$ || $distance$$1$$ === $thisDistance$$ && ($i$$439$$ === $that$$14$$.$_lastChangedValueIndex$ || $that$$14$$.$_getMultiValues$($i$$439$$) === $o$$11$$.min)) {
          $distance$$1$$ = $thisDistance$$, this.$_closestThumb$ = $$$$61$$(this), $index$$261$$ = $i$$439$$;
        }
      });
      this.$_thumbIndex$ = $index$$261$$;
      if (this.$_closestThumb$) {
        return this.$_thumbs$.hasClass("ui-state-hover") || this.$_slide$($event$$609$$, $index$$261$$, $normValue$$), this.$_getActiveThumb$().addClass("oj-active").focus(), this.$_range$.addClass("oj-active"), !0;
      }
    }, $_initDragging$:function($event$$610$$, $thumb$$7$$) {
      var $o$$12$$ = this.options;
      if ($o$$12$$.disabled || $o$$12$$.readOnly) {
        return!1;
      }
      $thumb$$7$$.addClass("oj-active").focus();
      this.$_range$.addClass("oj-active");
      return!0;
    }, $_mouseDragInternal$:function($event$$611$$, $thumb$$8$$) {
      var $normValue$$1_pct$$ = this.$_getNormValueFromThumb$($thumb$$8$$);
      this.$_slide$($event$$611$$, this.$_thumbIndex$, $normValue$$1_pct$$, !0);
      $normValue$$1_pct$$ = 100 * this.$_getFracFromThumb$($thumb$$8$$);
      this.$_multipleThumbs$ ? this.$_setRangeMultiThumb$($normValue$$1_pct$$, this.$_thumbIndex$) : this.$_setRange$($normValue$$1_pct$$);
      return!1;
    }, $_mouseStop$:function($event$$612$$, $thumb$$9$$) {
      this.$_thumbs$.removeClass("oj-active");
      this.$_range$.removeClass("oj-active");
      var $normValue$$2$$ = this.$_getNormValueFromThumb$($thumb$$9$$);
      this.$_slide$($event$$612$$, this.$_thumbIndex$, $normValue$$2$$);
      this.$_change$($event$$612$$, this.$_thumbIndex$, !1);
      this.$_thumbIndex$ = null;
      return!1;
    }, $_isVertical$:function() {
      return "vertical" === this.options.orientation;
    }, $_getOrientationAdjustedFrac$:function($frac$$) {
      1 < $frac$$ && ($frac$$ = 1);
      0 > $frac$$ && ($frac$$ = 0);
      this.$_isVertical$() && ($frac$$ = 1 - $frac$$);
      return $frac$$;
    }, $_getNormValueFromMouse$:function($position$$46_valueTotal$$) {
      var $fracMouse$$ = this.$_getFracFromMouse$($position$$46_valueTotal$$);
      $position$$46_valueTotal$$ = this.$_valueMax$() - this.$_valueMin$();
      this.$_isRTL$() && !this.$_isVertical$() && ($fracMouse$$ = 1 - $fracMouse$$);
      return this.$_trimAlignValue$(this.$_valueMin$() + $fracMouse$$ * $position$$46_valueTotal$$);
    }, $_getFracFromMouse$:function($pixelMouse$$1_position$$47$$) {
      var $fracMouse$$1_pixelTotal$$1$$;
      this.$_isVertical$() ? ($fracMouse$$1_pixelTotal$$1$$ = this.$_barback$.height(), $pixelMouse$$1_position$$47$$ = $pixelMouse$$1_position$$47$$.y - this.$_barback$.offset().top) : ($fracMouse$$1_pixelTotal$$1$$ = this.$_barback$.width(), $pixelMouse$$1_position$$47$$ = $pixelMouse$$1_position$$47$$.x - this.$_barback$.offset().left);
      return 0 == $fracMouse$$1_pixelTotal$$1$$ ? 1 : $fracMouse$$1_pixelTotal$$1$$ = this.$_getOrientationAdjustedFrac$($pixelMouse$$1_position$$47$$ / $fracMouse$$1_pixelTotal$$1$$);
    }, $_getActiveThumb$:function() {
      return this.$_multipleThumbs$ ? $$$$61$$(this.$_thumbs$[this.$_thumbIndex$]) : this.$_thumb$;
    }, $_getFracFromThumb$:function($fracThumb_pixelTotal$$2_thumb$$10$$) {
      var $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$14$$;
      $fracThumb_pixelTotal$$2_thumb$$10$$ || ($fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_getActiveThumb$());
      this.$_isVertical$() ? ($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$14$$ = $fracThumb_pixelTotal$$2_thumb$$10$$.outerHeight() / 2, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$14$$ = $fracThumb_pixelTotal$$2_thumb$$10$$.offset().top + $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$14$$, $fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_barback$.height(), $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$14$$ -= this.$_barback$.offset().top) : ($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$14$$ = 
      $fracThumb_pixelTotal$$2_thumb$$10$$.outerWidth() / 2, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$14$$ = $fracThumb_pixelTotal$$2_thumb$$10$$.offset().left + $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$14$$, $fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_barback$.width(), $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$14$$ -= this.$_barback$.offset().left);
      return 0 == $fracThumb_pixelTotal$$2_thumb$$10$$ ? 1 : $fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_getOrientationAdjustedFrac$($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$14$$ / $fracThumb_pixelTotal$$2_thumb$$10$$);
    }, $_getNormValueFromThumb$:function($fracThumb$$1_thumb$$11$$) {
      var $valueTotal$$1$$;
      $fracThumb$$1_thumb$$11$$ = this.$_getFracFromThumb$($fracThumb$$1_thumb$$11$$);
      $valueTotal$$1$$ = this.$_valueMax$() - this.$_valueMin$();
      this.$_isRTL$() && !this.$_isVertical$() && ($fracThumb$$1_thumb$$11$$ = 1 - $fracThumb$$1_thumb$$11$$);
      return this.$_trimAlignValue$(this.$_valueMin$() + $fracThumb$$1_thumb$$11$$ * $valueTotal$$1$$);
    }, $_getOtherThumbValue$:function($index$$262$$) {
      return this.$_getMultiValues$($index$$262$$ ? 0 : 1);
    }, $_getNewThumbValueLimited$:function($index$$263$$, $newVal$$2$$, $otherVal$$) {
      return 2 === this.options.value.length && (0 === $index$$263$$ && $newVal$$2$$ > $otherVal$$ || 1 === $index$$263$$ && $newVal$$2$$ < $otherVal$$) ? $otherVal$$ : $newVal$$2$$;
    }, $_slide$:function($event$$613$$, $index$$264$$, $newVal$$3$$, $rawOnly$$) {
      var $otherVal$$1$$;
      this.$_multipleThumbs$ ? ($otherVal$$1$$ = this.$_getOtherThumbValue$($index$$264$$), $newVal$$3$$ = this.$_getNewThumbValueLimited$($index$$264$$, $newVal$$3$$, $otherVal$$1$$), $newVal$$3$$ !== this.$_getMultiValues$($index$$264$$) && this.$_setMultiValue$($event$$613$$, $index$$264$$, $newVal$$3$$, $rawOnly$$)) : $newVal$$3$$ !== this.$_getSingleValue$() && (this.$_setSingleValue$($event$$613$$, $newVal$$3$$, $rawOnly$$), $rawOnly$$ || this.$_inputtag$ && this.element.val($newVal$$3$$));
    }, $_setSingleValue$:function($event$$614$$, $newValue$$23$$, $rawOnly$$1$$) {
      this.$_newValue$ = this.$_trimAlignValue$($newValue$$23$$);
      $rawOnly$$1$$ || (this.$_SetValue$(this.$_newValue$, $event$$614$$), this.$_updateUI$());
      this.$_SetRawValue$(this.$_newValue$, $event$$614$$);
    }, $_change$:function($event$$615$$, $index$$265$$, $rawOnly$$2$$) {
      this.$_multipleThumbs$ ? (this.$_lastChangedValues$ = this.$_getNewValues$($index$$265$$, this.$_newMultiValue$[$index$$265$$]), this.$_SetRawValue$(this.$_lastChangedValues$, $event$$615$$), $rawOnly$$2$$ || this.$_SetValue$(this.$_lastChangedValues$, $event$$615$$)) : (this.$_SetRawValue$(this.$_newValue$, $event$$615$$), $rawOnly$$2$$ || this.$_SetValue$(this.$_newValue$, $event$$615$$));
      this.$_lastChangedValueIndex$ = $index$$265$$;
    }, $_getNewValues$:function($index$$266$$, $newValue$$24$$) {
      var $vals$$, $i$$440$$;
      $vals$$ = this.options.value.slice();
      for ($i$$440$$ = 0;$i$$440$$ < $vals$$.length;$i$$440$$ += 1) {
        $vals$$[$i$$440$$] = this.$_trimAlignValue$($vals$$[$i$$440$$]);
      }
      $index$$266$$ === this.$_thumbIndex$ && ($vals$$[$index$$266$$] = $newValue$$24$$);
      return $vals$$;
    }, $_getSingleValue$:function() {
      return this.$_getValueAligned$();
    }, $_getMultiValues$:function($index$$267$$) {
      return this.$_getValuesAligned$($index$$267$$);
    }, $_setMultiValue$:function($event$$616$$, $index$$268$$, $newValue$$25$$, $rawOnly$$3$$) {
      this.$_newMultiValue$[$index$$268$$] = this.$_trimAlignValue$($newValue$$25$$);
      this.$_change$($event$$616$$, $index$$268$$, $rawOnly$$3$$);
      $rawOnly$$3$$ || this.$_updateUI$();
    }, _setOption:function($key$$180$$, $coercedValue$$1_value$$313$$, $flags$$46$$) {
      "value" === $key$$180$$ && (Array.isArray($coercedValue$$1_value$$313$$) ? isNaN($coercedValue$$1_value$$313$$[0]) ? (this.$_multipleThumbs$ = !1, this.$_parse$($key$$180$$, $coercedValue$$1_value$$313$$[0])) : this.$_multipleThumbs$ = !0 : (this.$_multipleThumbs$ = !1, this.$_parse$($key$$180$$, $coercedValue$$1_value$$313$$)));
      $coercedValue$$1_value$$313$$ = "max" === $key$$180$$ || "min" === $key$$180$$ ? this.$_parse$($key$$180$$, $coercedValue$$1_value$$313$$) : "step" === $key$$180$$ ? this.$_parseStep$($coercedValue$$1_value$$313$$) : $coercedValue$$1_value$$313$$;
      "disabled" != $key$$180$$ && this._super($key$$180$$, $coercedValue$$1_value$$313$$, $flags$$46$$);
      "readOnly" === $key$$180$$ && (this.options.$readonly$ = $coercedValue$$1_value$$313$$);
      "disabled" === $key$$180$$ && (this.options.disabled = $coercedValue$$1_value$$313$$);
      switch($key$$180$$) {
        case "value":
          this.$_updateUI$();
          this.$_makeDraggable$();
          break;
        case "min":
        ;
        case "max":
          this.$_calculateNewMax$();
          this.$_updateUI$();
          this.$_makeDraggable$();
          break;
        case "orientation":
        ;
        case "readonly":
        ;
        case "step":
        ;
        case "type":
        ;
        case "disabled":
          this.$_reCreate$();
      }
    }, $_reCreate$:function() {
      this.$_destroySliderDom$();
      this.$_componentSetup$();
      this.$_AfterCreate$();
    }, $_getValueAligned$:function() {
      var $val$$62$$ = this.options.value;
      return $val$$62$$ = this.$_trimAlignValue$($val$$62$$);
    }, $_getValuesAligned$:function($index$$269$$) {
      return this.$_trimAlignValue$(this.options.value[$index$$269$$]);
    }, $_trimAlignValue$:function($alignValue_val$$64$$) {
      if ($alignValue_val$$64$$ <= this.$_valueMin$()) {
        return this.$_valueMin$();
      }
      if ($alignValue_val$$64$$ >= this.$_valueMax$()) {
        return this.$_valueMax$();
      }
      var $step$$2$$ = 0 < this.options.step ? this.options.step : 1, $valModStep$$ = ($alignValue_val$$64$$ - this.$_valueMin$()) % $step$$2$$;
      $alignValue_val$$64$$ -= $valModStep$$;
      2 * Math.abs($valModStep$$) >= $step$$2$$ && ($alignValue_val$$64$$ += 0 < $valModStep$$ ? $step$$2$$ : -$step$$2$$);
      return parseFloat($alignValue_val$$64$$.toFixed(5));
    }, $_calculateNewMax$:function() {
      var $min$$7$$ = this.$_valueMin$();
      this.max = 0 !== (this.options.max - $min$$7$$) / this.options.step % 1 ? this.options.max - (this.options.max - $min$$7$$) % this.options.step : this.options.max;
    }, $_valueMin$:function() {
      return this.options.min;
    }, $_valueMax$:function() {
      return this.max;
    }, $_getGrid$:function() {
      var $numIntervals_pixelInterval$$;
      $numIntervals_pixelInterval$$ = 0 < this.options.step ? (this.$_valueMax$() - this.$_valueMin$()) / this.options.step : 100;
      $numIntervals_pixelInterval$$ = (this.$_isVertical$() ? this.$_barback$.height() : this.$_barback$.width()) / $numIntervals_pixelInterval$$;
      1 > $numIntervals_pixelInterval$$ && ($numIntervals_pixelInterval$$ = 1);
      return this.$_isVertical$() ? [1, $numIntervals_pixelInterval$$] : [$numIntervals_pixelInterval$$, 1];
    }, $_getThumbsValueFrac$:function($index$$270$$) {
      return(this.$_getMultiValues$($index$$270$$) - this.$_valueMin$()) / (this.$_valueMax$() - this.$_valueMin$());
    }, $_updateUI$:function() {
      var $valPercent$$, $value$$314$$, $valueMin$$, $valueMax$$;
      this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$22$$, $i$$442$$) {
        var $thumb$$12$$ = $$$$61$$($current$$22$$);
        $valPercent$$ = 100 * this.$_getThumbsValueFrac$($i$$442$$);
        this.$_isRTL$() && !this.$_isVertical$() && ($valPercent$$ = 100 - $valPercent$$);
        this.$_isVertical$() ? $$$$61$$($thumb$$12$$).css({top:100 - $valPercent$$ + "%"}) : $$$$61$$($thumb$$12$$).css({left:$valPercent$$ + "%"});
        $$$$61$$($thumb$$12$$).attr("aria-valuenow", this.$_getMultiValues$($i$$442$$));
        this.$_setRangeMultiThumb$($valPercent$$, $i$$442$$);
      }, this) : ($value$$314$$ = this.$_getValueAligned$(), $valueMin$$ = this.$_valueMin$(), $valueMax$$ = this.$_valueMax$(), $valPercent$$ = $valueMax$$ !== $valueMin$$ ? ($value$$314$$ - $valueMin$$) / ($valueMax$$ - $valueMin$$) * 100 : 0, this.$_isRTL$() && !this.$_isVertical$() && ($valPercent$$ = 100 - $valPercent$$), this.$_isVertical$() ? this.$_thumb$.css({top:100 - $valPercent$$ + "%"}) : this.$_thumb$.css({left:$valPercent$$ + "%"}), $$$$61$$(this.$_thumb$).attr("aria-valuenow", $value$$314$$), 
      this.$_setRange$($valPercent$$));
    }, $_setRange$:function($val$$65$$) {
      var $oRange$$ = this.options.type;
      this.$_isVertical$() ? ("fromMin" === $oRange$$ && this.$_range$.css({height:$val$$65$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({height:100 - $val$$65$$ + "%"})) : this.$_isRTL$() ? ("fromMin" === $oRange$$ && this.$_range$.css({width:100 - $val$$65$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({width:$val$$65$$ + "%"})) : ("fromMin" === $oRange$$ && this.$_range$.css({width:$val$$65$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({width:100 - $val$$65$$ + "%"}));
    }, $_setRangeMultiThumb$:function($val$$66$$, $index$$271$$) {
      var $id$$55_thumb1Pct$$ = this.$_range$.attr("id");
      if (0 == $index$$271$$) {
        switch($id$$55_thumb1Pct$$ = 100 * this.$_getThumbsValueFrac$(1), this.options.type) {
          case "fromMin":
            this.$_isVertical$() ? this.$_range$.css({height:$val$$66$$ + "%"}) : this.$_range$.css({width:$val$$66$$ + "%"});
            break;
          case "range":
            this.$_isVertical$() ? (this.$_range$.css({top:100 - $id$$55_thumb1Pct$$ + "%"}), this.$_range$.css({height:$id$$55_thumb1Pct$$ - $val$$66$$ + "%"})) : this.$_isRTL$() ? (this.$_range$.css({left:100 - $id$$55_thumb1Pct$$ + "%"}), this.$_range$.css({width:$id$$55_thumb1Pct$$ - (100 - $val$$66$$) + "%"})) : (this.$_range$.css({left:$val$$66$$ + "%"}), this.$_range$.css({width:$id$$55_thumb1Pct$$ - $val$$66$$ + "%"}));
        }
      } else {
        var $thumb0Pct$$ = 100 * this.$_getThumbsValueFrac$(0);
        switch(this.options.type) {
          case "fromMax":
            this.$_isVertical$() ? this.$_range$.css({height:100 - $val$$66$$ + "%"}) : this.$_range$.css({width:100 - $val$$66$$ + "%"});
            break;
          case "range":
            this.$_isVertical$() ? document.getElementById($id$$55_thumb1Pct$$) && (this.$_range$.css({top:100 - $val$$66$$ + "%"}), this.$_range$.css({height:$val$$66$$ - $thumb0Pct$$ + "%"})) : this.$_isRTL$() ? document.getElementById($id$$55_thumb1Pct$$) && (this.$_range$.css({left:$val$$66$$ + "%"}), this.$_range$.css({width:-$val$$66$$ + 100 - $thumb0Pct$$ + "%"})) : document.getElementById($id$$55_thumb1Pct$$) && this.$_range$.css({width:$val$$66$$ - parseInt(document.getElementById($id$$55_thumb1Pct$$).style.left, 
            10) + "%"});
        }
      }
    }, $_thumbEvents$:{keydown:function($event$$617$$) {
      var $curVal_tempVal$$, $newVal$$4$$, $step$$3$$, $index$$272$$ = $$$$61$$($event$$617$$.target).data("oj-slider-thumb-index");
      this.$_thumbIndex$ = $index$$272$$;
      switch($event$$617$$.keyCode) {
        case $$$$61$$.ui.keyCode.HOME:
        ;
        case $$$$61$$.ui.keyCode.END:
        ;
        case $$$$61$$.ui.keyCode.PAGE_UP:
        ;
        case $$$$61$$.ui.keyCode.PAGE_DOWN:
        ;
        case $$$$61$$.ui.keyCode.UP:
        ;
        case $$$$61$$.ui.keyCode.RIGHT:
        ;
        case $$$$61$$.ui.keyCode.DOWN:
        ;
        case $$$$61$$.ui.keyCode.LEFT:
          $event$$617$$.preventDefault(), $$$$61$$($event$$617$$.target).addClass("oj-active");
      }
      $step$$3$$ = this.options.step;
      $curVal_tempVal$$ = this.$_multipleThumbs$ ? $newVal$$4$$ = this.$_getMultiValues$($index$$272$$) : $newVal$$4$$ = this.$_getSingleValue$();
      switch($event$$617$$.keyCode) {
        case $$$$61$$.ui.keyCode.HOME:
          $newVal$$4$$ = this.$_valueMin$();
          break;
        case $$$$61$$.ui.keyCode.END:
          $newVal$$4$$ = this.$_valueMax$();
          break;
        case $$$$61$$.ui.keyCode.PAGE_UP:
          $newVal$$4$$ = this.$_trimAlignValue$($curVal_tempVal$$ + (this.$_valueMax$() - this.$_valueMin$()) / this.$_numPages$);
          break;
        case $$$$61$$.ui.keyCode.PAGE_DOWN:
          $newVal$$4$$ = this.$_trimAlignValue$($curVal_tempVal$$ - (this.$_valueMax$() - this.$_valueMin$()) / this.$_numPages$);
          break;
        case $$$$61$$.ui.keyCode.UP:
          if ($curVal_tempVal$$ === this.$_valueMax$()) {
            return;
          }
          $newVal$$4$$ = this.$_trimAlignValue$($curVal_tempVal$$ + $step$$3$$);
          break;
        case $$$$61$$.ui.keyCode.RIGHT:
          if (!this.$_isRTL$() || this.$_isVertical$()) {
            if ($curVal_tempVal$$ === this.$_valueMax$()) {
              return;
            }
            $curVal_tempVal$$ += $step$$3$$;
          } else {
            if ($curVal_tempVal$$ === this.$_valueMin$()) {
              return;
            }
            $curVal_tempVal$$ -= $step$$3$$;
          }
          $newVal$$4$$ = this.$_trimAlignValue$($curVal_tempVal$$);
          break;
        case $$$$61$$.ui.keyCode.DOWN:
          if ($curVal_tempVal$$ === this.$_valueMin$()) {
            return;
          }
          $newVal$$4$$ = this.$_trimAlignValue$($curVal_tempVal$$ - $step$$3$$);
          break;
        case $$$$61$$.ui.keyCode.LEFT:
          if (!this.$_isRTL$() || this.$_isVertical$()) {
            if ($curVal_tempVal$$ === this.$_valueMin$()) {
              return;
            }
            $curVal_tempVal$$ -= $step$$3$$;
          } else {
            if ($curVal_tempVal$$ === this.$_valueMax$()) {
              return;
            }
            $curVal_tempVal$$ += $step$$3$$;
          }
          $newVal$$4$$ = this.$_trimAlignValue$($curVal_tempVal$$);
      }
      this.$_slide$($event$$617$$, $index$$272$$, $newVal$$4$$);
    }, keyup:function($event$$618$$) {
      var $index$$273$$ = $$$$61$$($event$$618$$.target).data("oj-slider-thumb-index");
      this.$_thumbIndex$ = $index$$273$$;
      this.$_change$($event$$618$$, $index$$273$$, !1);
      $$$$61$$($event$$618$$.target).removeClass("oj-active");
      this.$_thumbIndex$ = null;
    }}, $_InitOptions$:function($originalDefaults$$17$$, $constructorOptions$$19$$) {
      var $opts$$37$$ = this.options, $self$$213$$ = this;
      this._superApply(arguments);
      $oj$$67$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"value"}, {$attribute$:"title"}, {$attribute$:"min"}, {$attribute$:"max"}, {$attribute$:"step"}], $constructorOptions$$19$$, this, function($initializedOptions$$2$$) {
        for (var $toParse$$1$$ = ["value", "step", "min", "max"], $i$$443$$ = 0;$i$$443$$ < $toParse$$1$$.length;$i$$443$$++) {
          var $opt$$21$$ = $toParse$$1$$[$i$$443$$], $value$$315$$ = $opt$$21$$ in $initializedOptions$$2$$ ? $initializedOptions$$2$$[$opt$$21$$] : $opts$$37$$[$opt$$21$$];
          null != $value$$315$$ && ("step" === $opt$$21$$ ? $initializedOptions$$2$$[$opt$$21$$] = $self$$213$$.$_parseStep$($value$$315$$) : "min" === $opt$$21$$ || "max" === $opt$$21$$ ? $initializedOptions$$2$$[$opt$$21$$] = $self$$213$$.$_parse$($opt$$21$$, $value$$315$$) : "value" === $opt$$21$$ && (Array.isArray($value$$315$$) ? $initializedOptions$$2$$[$opt$$21$$] = $value$$315$$ : $initializedOptions$$2$$[$opt$$21$$] = $self$$213$$.$_parse$($opt$$21$$, $value$$315$$)));
        }
      });
      if (void 0 === $opts$$37$$.value) {
        throw Error(this.$getTranslatedString$("noValue"));
      }
      if (null != $opts$$37$$.min && null != $opts$$37$$.max) {
        if ($opts$$37$$.max < $opts$$37$$.min) {
          throw Error(this.$getTranslatedString$("maxMin"));
        }
        if ($opts$$37$$.value < $opts$$37$$.min || $opts$$37$$.value > $opts$$37$$.max) {
          throw Error(this.$getTranslatedString$("valueRange"));
        }
      }
    }, getNodeBySubId:function($locator$$53_subId$$57$$) {
      if (null == $locator$$53_subId$$57$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$53_subId$$57$$ = $locator$$53_subId$$57$$.subId;
      return "oj-slider-thumb-0" === $locator$$53_subId$$57$$ ? this.widget().find(".oj-slider-thumb")[0] : "oj-slider-thumb-1" === $locator$$53_subId$$57$$ ? this.widget().find(".oj-slider-thumb")[1] : "oj-slider-bar" === $locator$$53_subId$$57$$ ? this.widget().find("." + $locator$$53_subId$$57$$)[0] : "oj-slider-bar-value" === $locator$$53_subId$$57$$ ? this.widget().find("." + $locator$$53_subId$$57$$)[0] : null;
    }, getSubIdByNode:function($node$$123$$) {
      if (null != $node$$123$$) {
        if ($node$$123$$.id === this.$_getThumbId$(0) && $$$$61$$($node$$123$$).hasClass("oj-slider-thumb")) {
          return{subId:"oj-slider-thumb-0"};
        }
        if ($node$$123$$.id === this.$_getThumbId$(1) && $$$$61$$($node$$123$$).hasClass("oj-slider-thumb")) {
          return{subId:"oj-slider-thumb-1"};
        }
        if ($$$$61$$($node$$123$$).hasClass("oj-slider-bar")) {
          return{subId:"oj-slider-bar"};
        }
        if ($$$$61$$($node$$123$$).hasClass("oj-slider-bar-value")) {
          return{subId:"oj-slider-bar-value"};
        }
      }
      return null;
    }, _GetDefaultStyleClass:function() {
      return "oj-slider";
    }, $_parse$:function($option$$38$$, $val$$67$$) {
      var $returnValue$$8$$;
      $returnValue$$8$$ = null !== $val$$67$$ ? +$val$$67$$ : $val$$67$$;
      if (isNaN($returnValue$$8$$)) {
        throw Error(this.$getTranslatedString$("optionNum", {option:$option$$38$$}));
      }
      return $returnValue$$8$$;
    }, $_parseStep$:function($parsedStep$$1_val$$68$$) {
      if (null === $parsedStep$$1_val$$68$$) {
        return 1;
      }
      $parsedStep$$1_val$$68$$ = this.$_parse$("step", $parsedStep$$1_val$$68$$);
      if (0 >= $parsedStep$$1_val$$68$$) {
        throw Error(this.$getTranslatedString$("invalidStep"));
      }
      if (null === $parsedStep$$1_val$$68$$ || 0 >= $parsedStep$$1_val$$68$$) {
        $parsedStep$$1_val$$68$$ = 1;
      }
      return $parsedStep$$1_val$$68$$;
    }, $_getEndInterval$:function() {
      return this.$_barback$.offset().left + this.$_barback$.width();
    }, $_getStartInterval$:function() {
      return this.$_barback$.offset().left;
    }, $_callDraggable$:function($thumbParam$$) {
      var $g$$1$$ = this.$_getGrid$(), $cachedStyle$$ = $thumbParam$$[0].style, $that$$15$$ = this;
      $thumbParam$$.draggable({axis:this.$_isVertical$() ? "y" : "x", grid:$g$$1$$, disabled:!1, start:function($event$$619$$) {
        $thumbParam$$[0] == $$$$61$$($that$$15$$.$_thumbs$)[0] ? $that$$15$$.$_thumbIndex$ = 0 : $thumbParam$$[0] == $$$$61$$($that$$15$$.$_thumbs$)[1] && ($that$$15$$.$_thumbIndex$ = 1);
        $that$$15$$.$_initDragging$($event$$619$$, $thumbParam$$);
      }, drag:function($event$$620$$, $ui$$35$$) {
        var $pos$$15$$ = $ui$$35$$.position;
        $that$$15$$.$_isVertical$() ? ($cachedStyle$$.left = "", $pos$$15$$.left = "") : ($cachedStyle$$.top = "", $pos$$15$$.top = "");
        $that$$15$$.$_mouseDragInternal$($event$$620$$, $thumbParam$$);
        $that$$15$$.$_isVertical$() ? (0 > $pos$$15$$.top && ($pos$$15$$.top = 0), $pos$$15$$.top > $that$$15$$.$_barback$.height() && ($pos$$15$$.top = $that$$15$$.$_barback$.height())) : (0 > $pos$$15$$.left && ($pos$$15$$.left = 0), $pos$$15$$.left > $that$$15$$.$_barback$.width() && ($pos$$15$$.left = $that$$15$$.$_barback$.width()));
        if ($that$$15$$.$_multipleThumbs$) {
          var $otherThumb_pos2$$1$$;
          $otherThumb_pos2$$1$$ = 0 == $that$$15$$.$_thumbIndex$ ? $$$$61$$($that$$15$$.$_thumbs$[1]) : $$$$61$$($that$$15$$.$_thumbs$[0]);
          if ($that$$15$$.$_isVertical$()) {
            var $halfThumbHeight$$1_halfThumbWidth$$1$$ = $thumbParam$$.outerHeight() / 2, $parentLeft_parentTop$$ = $that$$15$$.$_barback$.offsetParent().offset().top;
            $thumbParam$$.offset();
            $otherThumb_pos2$$1$$ = $otherThumb_pos2$$1$$.offset().top + $halfThumbHeight$$1_halfThumbWidth$$1$$ - $parentLeft_parentTop$$;
          } else {
            $halfThumbHeight$$1_halfThumbWidth$$1$$ = $thumbParam$$.outerWidth() / 2, $parentLeft_parentTop$$ = $that$$15$$.$_barback$.offsetParent().offset().left, $thumbParam$$.offset(), $otherThumb_pos2$$1$$ = $otherThumb_pos2$$1$$.offset().left + $halfThumbHeight$$1_halfThumbWidth$$1$$ - $parentLeft_parentTop$$;
          }
          0 == $that$$15$$.$_thumbIndex$ ? $that$$15$$.$_isVertical$() ? $pos$$15$$.top < $otherThumb_pos2$$1$$ && ($pos$$15$$.top = $otherThumb_pos2$$1$$) : $that$$15$$.$_isRTL$() ? $pos$$15$$.left < $otherThumb_pos2$$1$$ && ($pos$$15$$.left = $otherThumb_pos2$$1$$) : $pos$$15$$.left > $otherThumb_pos2$$1$$ && ($pos$$15$$.left = $otherThumb_pos2$$1$$) : $that$$15$$.$_isVertical$() ? $pos$$15$$.top > $otherThumb_pos2$$1$$ && ($pos$$15$$.top = $otherThumb_pos2$$1$$) : $that$$15$$.$_isRTL$() ? $pos$$15$$.left > 
          $otherThumb_pos2$$1$$ && ($pos$$15$$.left = $otherThumb_pos2$$1$$) : $pos$$15$$.left < $otherThumb_pos2$$1$$ && ($pos$$15$$.left = $otherThumb_pos2$$1$$);
        }
      }, stop:function($event$$621$$) {
        this.style.width = "";
        this.style.height = "";
        $that$$15$$.$_mouseStop$($event$$621$$, $thumbParam$$);
      }});
    }, $_makeDraggable$:function() {
      this.options.disabled || (this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$23_thumb$$13$$) {
        $current$$23_thumb$$13$$ = $$$$61$$($current$$23_thumb$$13$$);
        this.$_callDraggable$($current$$23_thumb$$13$$);
      }, this) : this.$_callDraggable$(this.$_thumb$));
    }, $_disableDraggable$:function() {
      this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$24_thumb$$14$$) {
        $current$$24_thumb$$14$$ = $$$$61$$($current$$24_thumb$$14$$);
        $current$$24_thumb$$14$$.is(".ui-draggable") && $current$$24_thumb$$14$$.draggable("disable");
      }, this) : this.$_thumb$.is(".ui-draggable") && this.$_thumb$.draggable("disable");
    }});
  })();
});
