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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojinputtext", "ojs/ojvalidation", "ojs/ojpopup", "ojs/ojbutton"], function($oj$$13$$, $$$$13$$) {
  function $coerceIsoString$$($value$$209$$) {
    return this.options.converter.parse($value$$209$$);
  }
  function $getImplicitDateTimeRangeValidator$$($options$$233$$, $converter$$3$$) {
    var $dateTimeRangeTranslations$$ = $options$$233$$.translations.dateTimeRange || {}, $translations$$9$$ = [{category:"hint", entries:["min", "max", "inRange"]}, {category:"messageDetail", entries:["rangeUnderflow", "rangeOverflow"]}, {category:"messageSummary", entries:["rangeUnderflow", "rangeOverflow"]}], $dateTimeRangeOptions$$ = {min:$options$$233$$.min, max:$options$$233$$.max, converter:$converter$$3$$};
    if (!$$$$13$$.isEmptyObject($dateTimeRangeTranslations$$)) {
      for (var $i$$172$$ = 0, $j$$22$$ = $translations$$9$$.length;$i$$172$$ < $j$$22$$;$i$$172$$++) {
        var $category$$ = $dateTimeRangeTranslations$$[$translations$$9$$[$i$$172$$].category];
        if ($category$$) {
          for (var $translatedContent$$ = {}, $entries$$ = $translations$$9$$[$i$$172$$].entries, $k$$12$$ = 0, $l$$10$$ = $entries$$.length;$k$$12$$ < $l$$10$$;$k$$12$$++) {
            $translatedContent$$[$entries$$[$k$$12$$]] = $category$$[$entries$$[$k$$12$$]];
          }
          $dateTimeRangeOptions$$[$translations$$9$$[$i$$172$$].category] = $translatedContent$$;
        }
      }
    }
    return $oj$$13$$.$Validation$.$validatorFactory$($oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE).createValidator($dateTimeRangeOptions$$);
  }
  function $disableEnableSpan$$($children$$6$$, $val$$37$$) {
    var $filteredChildren$$ = $children$$6$$.filter("span");
    $val$$37$$ ? $filteredChildren$$.addClass("oj-disabled").removeClass("oj-enabled oj-default") : $filteredChildren$$.removeClass("oj-disabled").addClass("oj-enabled oj-default");
  }
  function $_getMetaData$$($dayMetaData$$, $position$$6$$, $params$$16$$) {
    if (!$dayMetaData$$ || $position$$6$$ === $params$$16$$.length) {
      return $dayMetaData$$;
    }
    var $nextPos$$ = $position$$6$$ + 1;
    return $_getMetaData$$($dayMetaData$$[$params$$16$$[$position$$6$$]], $nextPos$$, $params$$16$$) || $_getMetaData$$($dayMetaData$$["*"], $nextPos$$, $params$$16$$);
  }
  function $copyTimeOver$$($from$$, $to$$) {
    $to$$.setHours($from$$.getHours());
    $to$$.setMinutes($from$$.getMinutes());
    $to$$.setSeconds($from$$.getSeconds());
    $to$$.setMilliseconds($from$$.getMilliseconds());
    return $to$$;
  }
  function $bindHover$$($dpDiv$$) {
    return $dpDiv$$.delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a", "mouseout", function() {
      $$$$13$$(this).removeClass("oj-hover");
    }).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a", "mouseover", function() {
      $$$$13$$(this).addClass("oj-hover");
    }).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a", "focus", function() {
      $$$$13$$(this).addClass("oj-focus");
    }).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a", "blur", function() {
      $$$$13$$(this).removeClass("oj-focus");
    });
  }
  function $bindActive$$($dateTime$$) {
    var $triggerRootContainer$$ = $$$$13$$($dateTime$$.element[0]).parent().parent();
    $dateTime$$.$_activeable$($triggerRootContainer$$);
  }
  var $yearDisplay$$ = $oj$$13$$.$Validation$.$converterFactory$($oj$$13$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME).createConverter({year:"numeric"});
  $oj$$13$$.$__registerWidget$("oj.ojInputDate", $$$$13$$.oj.inputBase, {version:"1.0.0", widgetEventPrefix:"oj", _CLASS_NAMES:"oj-inputdatetime-input", _WIDGET_CLASS_NAMES:"oj-inputdatetime-date-only oj-component oj-inputdatetime", _ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"", _INPUT_HELPER_KEY:"inputHelp", _ATTR_CHECK:[{attr:"type", setMandatory:"text"}], _GET_INIT_OPTIONS_PROPS:[{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"pattern"}, {$attribute$:"title"}, {$attribute$:"placeholder"}, 
  {$attribute$:"value", $coerceDomValue$:$coerceIsoString$$}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"readonly", option:"readOnly", $validateOption$:!0}, {$attribute$:"min", $coerceDomValue$:$coerceIsoString$$}, {$attribute$:"max", $coerceDomValue$:$coerceIsoString$$}], $_TRIGGER_CLASS$:"oj-inputdatetime-input-trigger", $_TRIGGER_CALENDAR_CLASS$:"oj-inputdatetime-calendar-icon", $_CURRENT_CLASS$:"oj-datepicker-current-day", $_DAYOVER_CLASS$:"oj-datepicker-days-cell-over", 
  $_UNSELECTABLE_CLASS$:"oj-datepicker-unselectable", $_DATEPICKER_DESCRIPTION_ID$:"oj-datepicker-desc", $_CALENDAR_DESCRIPTION_ID$:"oj-datepicker-calendar", $_MAIN_DIV_ID$:"oj-datepicker-div", $_INLINE_CLASS$:"oj-datepicker-inline", $_INPUT_CONTAINER_CLASS$:" oj-inputdatetime-input-container", $_INLINE_WIDGET_CLASS$:" oj-inputdatetime-inline", options:{datePicker:{footerLayout:"", changeMonth:"select", changeYear:"select", currentMonthPos:0, daysOutsideMonth:"hidden", numberOfMonths:1, showOn:"image", 
  stepMonths:"numberOfMonths", stepBigMonths:12, weekDisplay:"none", yearRange:"c-10:c+10"}, converter:$oj$$13$$.$Validation$.$converterFactory$($oj$$13$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit", month:"2-digit", year:"2-digit"}), max:void 0, min:void 0, dayFormatter:null}, $_InitBase$:function __InitBase() {
    this.$_triggerNode$ = null;
    this.$_ignoreShow$ = !1;
    this.$_maxRows$ = 4;
    this.$_drawYear$ = this.$_currentYear$ = this.$_drawMonth$ = this.$_currentMonth$ = this.$_currentDay$ = 0;
    this.$_datePickerDefaultValidators$ = {};
    var $nodeName$$2$$ = this.element[0].nodeName.toLowerCase();
    this.$_isInLine$ = "div" === $nodeName$$2$$ || "span" === $nodeName$$2$$;
    this.$_dpDiv$ = $bindHover$$($$$$13$$("\x3cdiv id\x3d'" + this.$_GetSubId$(this.$_MAIN_DIV_ID$) + "' role\x3d'region' aria-describedby\x3d'" + this.$_GetSubId$(this.$_DATEPICKER_DESCRIPTION_ID$) + "' class\x3d'oj-datepicker-content'\x3e\x3c/div\x3e"));
    $$$$13$$("body").append(this.$_dpDiv$);
    if (this.$_isInLine$) {
      this._WIDGET_CLASS_NAMES += this.$_INLINE_WIDGET_CLASS$, this._CLASS_NAMES = "";
    } else {
      this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES += this.$_INPUT_CONTAINER_CLASS$;
      var $self$$88$$ = this;
      this.$_popUpDpDiv$ = this.$_dpDiv$.ojPopup({initialFocus:"none", modality:"modeless", open:function() {
        $self$$88$$.$_dpDiv$.find(".oj-datepicker-calendar").focus();
      }, rootAttributes:{"class":"oj-datepicker-popup"}});
    }
  }, _ComponentCreate:function __ComponentCreate() {
    this.$_InitBase$();
    var $retVal$$8$$ = this._super();
    this.options.dayMetaData && (this.options.dayFormatter = function($value$$210$$) {
      return function($dateInfo$$) {
        return $_getMetaData$$($value$$210$$, 0, [$dateInfo$$.fullYear, $dateInfo$$.month, $dateInfo$$.date]);
      };
    }(this.options.dayMetaData));
    this.$_setCurrentDate$(this.$_getDate$());
    this.$_isInLine$ ? (this.element.append(this.$_dpDiv$), this.element.addClass(this.$_INLINE_CLASS$), this.$_dpDiv$.css("display", "block")) : this.$_attachTrigger$();
    $bindActive$$(this);
    return $retVal$$8$$;
  }, $_AfterCreate$:function() {
    var $ret$$22$$ = this._superApply(arguments);
    this.$_disableEnable$(this.options.disabled);
    return $ret$$22$$;
  }, _setOption:function __setOption$$1($key$$64$$, $value$$211$$, $flags$$20_updateDatePicker$$) {
    var $retVal$$9$$ = null;
    if ("value" === $key$$64$$) {
      return $value$$211$$ || ($value$$211$$ = null), $retVal$$9$$ = this._super($key$$64$$, $value$$211$$, $flags$$20_updateDatePicker$$), this.$_setCurrentDate$($value$$211$$), this.$_datepickerShowing$() && this.$_updateDatepicker$(!0), $retVal$$9$$;
    }
    if ("dayMetaData" === $key$$64$$) {
      this._setOption("dayFormatter", function($dateInfo$$1$$) {
        return $_getMetaData$$($value$$211$$, 0, [$dateInfo$$1$$.fullYear, $dateInfo$$1$$.month, $dateInfo$$1$$.date]);
      }, $flags$$20_updateDatePicker$$);
    } else {
      return $retVal$$9$$ = this._super($key$$64$$, $value$$211$$, $flags$$20_updateDatePicker$$), "disabled" === $key$$64$$ ? this.$_disableEnable$($value$$211$$) : "max" === $key$$64$$ || "min" === $key$$64$$ ? (this.$_datePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE] = this.$_getValidator$("min"), this.$_AfterSetOptionValidators$()) : "readOnly" === $key$$64$$ && $value$$211$$ ? this.hide() : "dayFormatter" === $key$$64$$ && (this.$_datePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATERESTRICTION] = 
      this.$_getValidator$("dayFormatter"), this.$_AfterSetOptionValidators$()), "datePicker" === $key$$64$$ && "currentMonthPos" === $flags$$20_updateDatePicker$$.subkey && this.$_setCurrentDate$(this.options.value), $flags$$20_updateDatePicker$$ = {max:!0, min:!0, dayFormatter:!0, datePicker:!0, translations:!0}, this.$_datepickerShowing$() && $key$$64$$ in $flags$$20_updateDatePicker$$ && this.$_updateDatepicker$(), $retVal$$9$$;
    }
  }, $_AppendInputHelperParent$:function __AppendInputHelperParent$$1() {
    return this.$_triggerNode$;
  }, _destroy:function __destroy$$1() {
    var $retVal$$10$$ = this._super();
    this.element.off("focus");
    this.$_triggerNode$ && this.$_triggerNode$.remove();
    this.$_isInLine$ && (this.element.removeProp("disabled"), this.element.removeProp("readonly"));
    this.$_dpDiv$.remove();
    return $retVal$$10$$;
  }, $_datepickerShowing$:function() {
    return this.$_isInLine$ || this.$_popUpDpDiv$.ojPopup("isOpen");
  }, $_attachTrigger$:function __attachTrigger() {
    var $showOn_triggerCalendar$$ = this.options.datePicker.showOn, $triggerContainer$$ = $$$$13$$("\x3cspan\x3e").addClass(this.$_TRIGGER_CLASS$);
    if ("focus" === $showOn_triggerCalendar$$) {
      this.element.on("focus", $$$$13$$.proxy(this.show, this));
    }
    $showOn_triggerCalendar$$ = $$$$13$$("\x3cspan title\x3d'" + this.$_getCalendarTitle$() + "'/\x3e").addClass(this.$_TRIGGER_CALENDAR_CLASS$ + " oj-clickable-icon-nocontext oj-component-icon");
    $triggerContainer$$.append($showOn_triggerCalendar$$);
    var $self$$89$$ = this;
    $showOn_triggerCalendar$$.on("click", function() {
      $self$$89$$.$_datepickerShowing$() ? $self$$89$$.hide() : $self$$89$$.show();
      return!1;
    });
    this.$_activeable$($showOn_triggerCalendar$$);
    this._hoverable($showOn_triggerCalendar$$);
    this.$_triggerIcon$ = $showOn_triggerCalendar$$;
    this.$_triggerNode$ = $triggerContainer$$;
    this.element.after($triggerContainer$$);
  }, $_doCalendarKeyDown$:function __doCalendarKeyDown($event$$134$$) {
    var $handled_sel$$1$$;
    $handled_sel$$1$$ = !1;
    var $kc$$ = $$$$13$$.ui.keyCode, $isRTL$$1$$ = this.$_rtl$;
    if (this.$_datepickerShowing$()) {
      switch($event$$134$$.keyCode) {
        case 84:
          $event$$134$$.altKey && $event$$134$$.ctrlKey && (this.$_dpDiv$.find(".oj-datepicker-current").focus(), $handled_sel$$1$$ = !0);
          break;
        case $kc$$.TAB:
          this.hide();
          break;
        case $kc$$.ENTER:
          return $handled_sel$$1$$ = $$$$13$$("td." + this.$_DAYOVER_CLASS$ + ":not(." + this.$_CURRENT_CLASS$ + ")", this.$_dpDiv$), $handled_sel$$1$$[0] && this.$_selectDay$(this.$_currentMonth$, this.$_currentYear$, $handled_sel$$1$$[0], $event$$134$$), $event$$134$$.preventDefault(), $event$$134$$.stopPropagation(), !1;
        case $kc$$.ESCAPE:
          this.hide();
          this.element.focus();
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.PAGE_UP:
          $event$$134$$.ctrlKey && $event$$134$$.altKey ? this.$_adjustDate$(-this.options.datePicker.stepBigMonths, "M", !0) : $event$$134$$.altKey ? this.$_adjustDate$(-1, "Y", !0) : this.$_adjustDate$(-this.$_getStepMonths$(), "M", !0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.PAGE_DOWN:
          $event$$134$$.ctrlKey && $event$$134$$.altKey ? this.$_adjustDate$(+this.options.datePicker.stepBigMonths, "M", !0) : $event$$134$$.altKey ? this.$_adjustDate$(1, "Y", !0) : this.$_adjustDate$(+this.$_getStepMonths$(), "M", !0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.END:
          this.$_currentDay$ = this.$_getDaysInMonth$(this.$_currentYear$, this.$_currentMonth$);
          this.$_updateDatepicker$(!0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.HOME:
          this.$_currentDay$ = 1;
          this.$_updateDatepicker$(!0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.LEFT:
          this.$_adjustDate$($isRTL$$1$$ ? 1 : -1, "D", !0);
          $event$$134$$.originalEvent.altKey && this.$_adjustDate$($event$$134$$.ctrlKey ? -this.options.datePicker.stepBigMonths : -this.$_getStepMonths$(), "M", !0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.UP:
          this.$_adjustDate$(-7, "D", !0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.RIGHT:
          this.$_adjustDate$($isRTL$$1$$ ? -1 : 1, "D", !0);
          $event$$134$$.originalEvent.altKey && this.$_adjustDate$($event$$134$$.ctrlKey ? +this.options.datePicker.stepBigMonths : +this.$_getStepMonths$(), "M", !0);
          $handled_sel$$1$$ = !0;
          break;
        case $kc$$.DOWN:
          this.$_adjustDate$(7, "D", !0), $handled_sel$$1$$ = !0;
      }
    } else {
      $event$$134$$.keyCode === $kc$$.HOME && $event$$134$$.ctrlKey && (this.show(), $handled_sel$$1$$ = !0);
    }
    $handled_sel$$1$$ && ($event$$134$$.preventDefault(), $event$$134$$.stopPropagation());
  }, $_updateDatepicker$:function __updateDatepicker($calendar_focusOnCalendar$$) {
    this.$_maxRows$ = 4;
    var $generatedHtmlContent_numMonths$$ = this.$_generateHTML$();
    this.$_dpDiv$.empty().append($generatedHtmlContent_numMonths$$.html);
    var $buttons_cols$$ = $$$$13$$("button", this.$_dpDiv$);
    0 < $buttons_cols$$.length && (1 === $buttons_cols$$.length && $$$$13$$($buttons_cols$$[0]).addClass("oj-datepicker-single-button"), $$$$13$$.each($buttons_cols$$, function($index$$110$$, $ele$$2$$) {
      $$$$13$$($ele$$2$$).ojButton();
    }));
    this.$_attachHandlers$();
    $generatedHtmlContent_numMonths$$.$dayOverId$ && this.$_dpDiv$.find(".oj-datepicker-calendar").attr("aria-activedescendant", $generatedHtmlContent_numMonths$$.$dayOverId$);
    $generatedHtmlContent_numMonths$$ = this.$_getNumberOfMonths$();
    $buttons_cols$$ = $generatedHtmlContent_numMonths$$[1];
    this.$_dpDiv$.removeClass("oj-datepicker-multi-2 oj-datepicker-multi-3 oj-datepicker-multi-4").width("");
    1 < $buttons_cols$$ && this.$_dpDiv$.addClass("oj-datepicker-multi-" + $buttons_cols$$).css("width", 17 * $buttons_cols$$ + "em");
    this.$_dpDiv$[(1 !== $generatedHtmlContent_numMonths$$[0] || 1 !== $generatedHtmlContent_numMonths$$[1] ? "add" : "remove") + "Class"]("oj-datepicker-multi");
    this.$_datepickerShowing$() && this.element.is(":visible") && !this.element.is(":disabled") && ($calendar_focusOnCalendar$$ ? ($calendar_focusOnCalendar$$ = this.$_dpDiv$.find(".oj-datepicker-calendar"), $calendar_focusOnCalendar$$[0] !== document.activeElement && $calendar_focusOnCalendar$$.focus()) : this.$_isInLine$ || this.element[0] === document.activeElement || this.element.focus());
  }, $_adjustDate$:function __adjustDate($offset$$17$$, $period$$, $focusOnCalendar$$1$$) {
    this.options.disabled || (this.$_adjustInstDate$($offset$$17$$ + ("M" === $period$$ ? this.options.datePicker.currentMonthPos : 0), $period$$), this.$_updateDatepicker$($focusOnCalendar$$1$$));
  }, $_gotoToday$:function __gotoToday() {
    var $date$$8$$ = new Date;
    this.$_currentDay$ = $date$$8$$.getDate();
    this.$_drawMonth$ = this.$_currentMonth$ = $date$$8$$.getMonth();
    this.$_drawYear$ = this.$_currentYear$ = $date$$8$$.getFullYear();
    this.$_adjustDate$();
  }, $_selectMonthYear$:function __selectMonthYear($select$$, $period$$1$$) {
    var $selected$$11$$ = parseInt($select$$.options[$select$$.selectedIndex].value, 10);
    "M" === $period$$1$$ ? this.$_currentMonth$ = this.$_drawMonth$ = $selected$$11$$ : this.$_currentYear$ = this.$_drawYear$ = $selected$$11$$;
    $$$$13$$("#" + this.$_GetSubId$(this.$_CALENDAR_DESCRIPTION_ID$)).html(this.$_EscapeXSS$(this.options.monthWide[this.$_drawMonth$]) + " " + $yearDisplay$$.format($oj$$13$$.$IntlConverterUtils$.dateToLocalIso(new Date(this.$_drawYear$, this.$_drawMonth$, 1))));
    this.$_adjustDate$(0, 0, !0);
  }, $_selectDay$:function __selectDay($converterUtils$$1_isoString$$6_month$$5$$, $formatted$$4_value$$212_year$$5$$, $td_temp$$, $event$$135$$) {
    $$$$13$$($td_temp$$).hasClass(this.$_UNSELECTABLE_CLASS$) || this.options.disabled || (this.$_currentDay$ = $$$$13$$("a", $td_temp$$).html(), this.$_currentMonth$ = $converterUtils$$1_isoString$$6_month$$5$$, this.$_currentYear$ = $formatted$$4_value$$212_year$$5$$, $converterUtils$$1_isoString$$6_month$$5$$ = $oj$$13$$.$IntlConverterUtils$, ($formatted$$4_value$$212_year$$5$$ = this.options.value ? $converterUtils$$1_isoString$$6_month$$5$$.isoToLocalDate(this.options.value) : null) ? ($td_temp$$ = 
    new Date(this.$_currentYear$, this.$_currentMonth$, this.$_currentDay$), $copyTimeOver$$($formatted$$4_value$$212_year$$5$$, $td_temp$$), $formatted$$4_value$$212_year$$5$$ = $td_temp$$) : $formatted$$4_value$$212_year$$5$$ = new Date(this.$_currentYear$, this.$_currentMonth$, this.$_currentDay$), $converterUtils$$1_isoString$$6_month$$5$$ = $converterUtils$$1_isoString$$6_month$$5$$.dateToLocalIso($formatted$$4_value$$212_year$$5$$), $formatted$$4_value$$212_year$$5$$ = this.$_GetConverter$().format($converterUtils$$1_isoString$$6_month$$5$$), 
    this.$_SetDisplayValue$($formatted$$4_value$$212_year$$5$$), this.$_SetValue$($converterUtils$$1_isoString$$6_month$$5$$, $event$$135$$), this.hide());
  }, $_determineDate$:function __determineDate($date$$9$$, $defaultDate$$) {
    return $date$$9$$ ? "string" === typeof $date$$9$$ ? $oj$$13$$.$IntlConverterUtils$.isoToLocalDate($date$$9$$) : new Date($date$$9$$.getTime()) : $defaultDate$$;
  }, $_setCurrentDate$:function __setCurrentDate($date$$10_newDate$$) {
    $date$$10_newDate$$ = this.$_determineDate$($date$$10_newDate$$, this.$_getTodayDate$());
    this.$_currentDay$ = $date$$10_newDate$$.getDate();
    this.$_drawMonth$ = this.$_currentMonth$ = $date$$10_newDate$$.getMonth();
    this.$_drawYear$ = this.$_currentYear$ = $date$$10_newDate$$.getFullYear();
    this.$_adjustInstDate$();
  }, $_getStepMonths$:function __getStepMonths() {
    var $stepMonths$$ = this.options.datePicker.stepMonths;
    return $$$$13$$.isNumeric($stepMonths$$) ? $stepMonths$$ : this.options.datePicker.numberOfMonths;
  }, $_attachHandlers$:function __attachHandlers() {
    var $stepMonths$$1$$ = this.$_getStepMonths$(), $self$$90$$ = this;
    this.$_dpDiv$.find("[data-handler]").map(function() {
      $$$$13$$(this).bind(this.getAttribute("data-event"), {prev:function($evt$$22$$) {
        $self$$90$$.$_adjustDate$(-$stepMonths$$1$$, "M", !0);
        $evt$$22$$.preventDefault();
      }, next:function($evt$$23$$) {
        $self$$90$$.$_adjustDate$(+$stepMonths$$1$$, "M", !0);
        $evt$$23$$.preventDefault();
      }, today:function($evt$$24$$) {
        if ("keyup" === $evt$$24$$.type && 13 === $evt$$24$$.keyCode || "click" === $evt$$24$$.type) {
          $self$$90$$.$_gotoToday$(), $evt$$24$$.preventDefault(), $evt$$24$$.stopPropagation();
        }
      }, selectDay:function($evt$$25$$) {
        $self$$90$$.$_selectDay$(+this.getAttribute("data-month"), +this.getAttribute("data-year"), this, $evt$$25$$);
        return!1;
      }, selectMonth:function() {
        $self$$90$$.$_selectMonthYear$(this, "M");
        return!1;
      }, selectYear:function() {
        $self$$90$$.$_selectMonthYear$(this, "Y");
        return!1;
      }, calendarKey:function($evt$$26$$) {
        $self$$90$$.$_doCalendarKeyDown$($evt$$26$$);
      }}[this.getAttribute("data-handler")]);
    });
  }, $_outSideMinMaxRange$:function __outSideMinMaxRange($printDate$$, $minDate$$, $maxDate$$) {
    $minDate$$ = $minDate$$ ? new Date($minDate$$.getFullYear(), $minDate$$.getMonth(), $minDate$$.getDate()) : null;
    $maxDate$$ = $maxDate$$ ? new Date($maxDate$$.getFullYear(), $maxDate$$.getMonth(), $maxDate$$.getDate()) : null;
    return null !== $minDate$$ && $printDate$$ < $minDate$$ || null !== $maxDate$$ && $printDate$$ > $maxDate$$;
  }, $_generateHTML$:function __generateHTML() {
    var $maxDraw_minDraw_prev$$1_prevText$$, $next$$1_nextText$$, $currentText_daysOutsideMonth_loop$$, $html_todayControl$$, $footerLayout$$, $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$, $dayNames$$ = this.options.dayWide, $dayNamesMin$$ = this.options.dayNarrow, $monthNames$$ = this.options.monthWide, $monthNamesShort$$ = this.options.monthAbbreviated, $firstDay$$ = this.options.firstDayOfWeek, $calculatedWeek_dow_leadDays_monthControl$$, $row$$3$$, $group$$2$$, $col$$, $selected$$12$$, 
    $rowCellId$$, $dayOverClass$$, $dayOverId$$ = "", $calender$$, $curRows_daysInMonth$$3_numRows_thead$$, $day$$3_printDate$$1$$, $dRow$$, $tbody$$, $daySettings$$, $otherMonth$$, $currMetaData_pYear_unselectable$$, $tempDate_today$$1$$ = new Date, $tempDate_today$$1$$ = new Date($tempDate_today$$1$$.getFullYear(), $tempDate_today$$1$$.getMonth(), $tempDate_today$$1$$.getDate()), $isRTL$$2$$ = this.$_rtl$;
    $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$ = this.options.datePicker.footerLayout;
    var $numMonths$$1$$ = this.$_getNumberOfMonths$(), $currentMonthPos_drawMonth$$ = this.options.datePicker.currentMonthPos, $dayFormatter$$1$$ = this.options.dayFormatter;
    $currMetaData_pYear_unselectable$$ = null;
    var $isMultiMonth$$ = 1 !== $numMonths$$1$$[0] || 1 !== $numMonths$$1$$[1], $minDate$$1$$ = this.$_getMinMaxDate$("min"), $maxDate$$1$$ = this.$_getMinMaxDate$("max"), $currentMonthPos_drawMonth$$ = this.$_drawMonth$ - $currentMonthPos_drawMonth$$, $drawYear$$ = this.$_drawYear$, $compareDate$$ = new Date(this.$_currentYear$, this.$_currentMonth$, this.$_currentDay$), $valueDate$$2$$ = new Date(this.$_getDate$()), $selectedDay$$ = $valueDate$$2$$.getDate(), $selectedMonth$$ = $valueDate$$2$$.getMonth(), 
    $selectedYear$$ = $valueDate$$2$$.getFullYear(), $wDisabled$$ = this.options.disabled, $weekText$$ = this.$_EscapeXSS$(this.$getTranslatedString$("weekText")), $converterUtils$$2$$ = $oj$$13$$.$IntlConverterUtils$;
    $valueDate$$2$$.setHours(0);
    $valueDate$$2$$.setMinutes(0);
    $valueDate$$2$$.setSeconds(0);
    $valueDate$$2$$.setMilliseconds(0);
    0 > $currentMonthPos_drawMonth$$ && ($currentMonthPos_drawMonth$$ += 12, $drawYear$$--);
    if ($minDate$$1$$) {
      for ($maxDraw_minDraw_prev$$1_prevText$$ = new Date($minDate$$1$$.getFullYear(), $minDate$$1$$.getMonth(), $minDate$$1$$.getDate()), $maxDraw_minDraw_prev$$1_prevText$$ = $maxDate$$1$$ && $maxDate$$1$$ < $maxDraw_minDraw_prev$$1_prevText$$ ? $maxDate$$1$$ : $maxDraw_minDraw_prev$$1_prevText$$;new Date($drawYear$$, $currentMonthPos_drawMonth$$, this.$_getDaysInMonth$($drawYear$$, $currentMonthPos_drawMonth$$)) < $maxDraw_minDraw_prev$$1_prevText$$;) {
        $currentMonthPos_drawMonth$$++, 11 < $currentMonthPos_drawMonth$$ && ($currentMonthPos_drawMonth$$ = 0, $drawYear$$++);
      }
    }
    if ($maxDate$$1$$) {
      for ($maxDraw_minDraw_prev$$1_prevText$$ = new Date($maxDate$$1$$.getFullYear(), $maxDate$$1$$.getMonth() - $numMonths$$1$$[0] * $numMonths$$1$$[1] + 1, $maxDate$$1$$.getDate()), $maxDraw_minDraw_prev$$1_prevText$$ = $minDate$$1$$ && $maxDraw_minDraw_prev$$1_prevText$$ < $minDate$$1$$ ? $minDate$$1$$ : $maxDraw_minDraw_prev$$1_prevText$$;new Date($drawYear$$, $currentMonthPos_drawMonth$$, 1) > $maxDraw_minDraw_prev$$1_prevText$$;) {
        $currentMonthPos_drawMonth$$--, 0 > $currentMonthPos_drawMonth$$ && ($currentMonthPos_drawMonth$$ = 11, $drawYear$$--);
      }
    }
    this.$_drawMonth$ = $currentMonthPos_drawMonth$$;
    this.$_drawYear$ = $drawYear$$;
    $maxDraw_minDraw_prev$$1_prevText$$ = this.$_EscapeXSS$(this.$getTranslatedString$("prevText"));
    $maxDraw_minDraw_prev$$1_prevText$$ = this.$_canAdjustMonth$(-1, $drawYear$$, $currentMonthPos_drawMonth$$) && !$wDisabled$$ ? "\x3ca href\x3d'#' class\x3d'oj-datepicker-prev-icon oj-enabled oj-default oj-component-icon oj-clickable-icon-nocontext' data-handler\x3d'prev' data-event\x3d'click' title\x3d'" + $maxDraw_minDraw_prev$$1_prevText$$ + "'\x3e\x3c/a\x3e" : "\x3ca class\x3d'oj-datepicker-prev-icon oj-disabled oj-component-icon oj-clickable-icon-nocontext' title\x3d'" + $maxDraw_minDraw_prev$$1_prevText$$ + 
    "'\x3e\x3c/a\x3e";
    $next$$1_nextText$$ = this.$_EscapeXSS$(this.$getTranslatedString$("nextText"));
    $next$$1_nextText$$ = this.$_canAdjustMonth$(1, $drawYear$$, $currentMonthPos_drawMonth$$) && !$wDisabled$$ ? "\x3ca href\x3d'#' class\x3d'oj-datepicker-next-icon oj-enabled oj-default oj-component-icon oj-clickable-icon-nocontext' data-handler\x3d'next' data-event\x3d'click' title\x3d'" + $next$$1_nextText$$ + "'\x3e\x3c/a\x3e" : "\x3ca class\x3d'oj-datepicker-next-icon oj-disabled oj-component-icon oj-clickable-icon-nocontext' title\x3d'" + $next$$1_nextText$$ + "'\x3e\x3c/a\x3e";
    $currentText_daysOutsideMonth_loop$$ = this.$_EscapeXSS$(this.$getTranslatedString$("currentText"));
    $footerLayout$$ = "";
    $html_todayControl$$ = "\x3cbutton type\x3d'button' class\x3d'oj-datepicker-current oj-priority-secondary' data-handler\x3d'today' data-event\x3d'click keyup'\x3e" + $currentText_daysOutsideMonth_loop$$ + "\x3c/button\x3e";
    if (1 < $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$.length) {
      $currentText_daysOutsideMonth_loop$$ = 0;
      $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$ = [{index:$footerLayoutButtons_footerLayoutDisplay_weekDisplay$$.indexOf("today"), content:this.$_isInRange$($tempDate_today$$1$$) ? $html_todayControl$$ : ""}];
      for ($footerLayoutButtons_footerLayoutDisplay_weekDisplay$$.sort(function($a$$102$$, $b$$62$$) {
        return $a$$102$$.index - $b$$62$$.index;
      });$currentText_daysOutsideMonth_loop$$ < $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$.length && 0 > $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$[$currentText_daysOutsideMonth_loop$$].index;) {
        $currentText_daysOutsideMonth_loop$$++;
      }
      for (;$currentText_daysOutsideMonth_loop$$ < $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$.length;) {
        $footerLayout$$ += $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$[$currentText_daysOutsideMonth_loop$$++].content;
      }
      0 < $footerLayout$$.length && ($footerLayout$$ = "\x3cdiv class\x3d'oj-datepicker-buttonpane'\x3e" + $footerLayout$$ + "\x3c/div\x3e");
    }
    $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$ = this.options.datePicker.weekDisplay;
    $currentText_daysOutsideMonth_loop$$ = this.options.datePicker.daysOutsideMonth;
    $html_todayControl$$ = "";
    $calculatedWeek_dow_leadDays_monthControl$$ = "all";
    for ($row$$3$$ = 0;$row$$3$$ < $numMonths$$1$$[0];$row$$3$$++) {
      $group$$2$$ = "";
      this.$_maxRows$ = 4;
      for ($col$$ = 0;$col$$ < $numMonths$$1$$[1];$col$$++) {
        $calculatedWeek_dow_leadDays_monthControl$$ = "all";
        $calender$$ = "";
        if ($isMultiMonth$$) {
          $calender$$ += "\x3cdiv class\x3d'oj-datepicker-group";
          if (1 < $numMonths$$1$$[1]) {
            switch($col$$) {
              case 0:
                $calender$$ += " oj-datepicker-group-first";
                $calculatedWeek_dow_leadDays_monthControl$$ = $isRTL$$2$$ ? "right" : "left";
                break;
              case $numMonths$$1$$[1] - 1:
                $calender$$ += " oj-datepicker-group-last";
                $calculatedWeek_dow_leadDays_monthControl$$ = $isRTL$$2$$ ? "left" : "right";
                break;
              default:
                $calender$$ += " oj-datepicker-group-middle", $calculatedWeek_dow_leadDays_monthControl$$ = "";
            }
          }
          $calender$$ += "'\x3e";
        }
        $calender$$ += "\x3cdiv class\x3d'oj-datepicker-header" + ($wDisabled$$ ? " oj-disabled " : " oj-enabled oj-default ") + "'\x3e" + (/all|left/.test($calculatedWeek_dow_leadDays_monthControl$$) && 0 === $row$$3$$ ? $isRTL$$2$$ ? $next$$1_nextText$$ : $maxDraw_minDraw_prev$$1_prevText$$ : "") + (/all|right/.test($calculatedWeek_dow_leadDays_monthControl$$) && 0 === $row$$3$$ ? $isRTL$$2$$ ? $maxDraw_minDraw_prev$$1_prevText$$ : $next$$1_nextText$$ : "") + this.$_generateMonthYearHeader$($currentMonthPos_drawMonth$$, 
        $drawYear$$, $minDate$$1$$, $maxDate$$1$$, 0 < $row$$3$$ || 0 < $col$$, $monthNames$$, $monthNamesShort$$, $isMultiMonth$$) + "\x3c/div\x3e\x3ctable class\x3d'oj-datepicker-calendar" + ($wDisabled$$ ? " oj-disabled " : " oj-enabled oj-default ") + "' tabindex\x3d-1 data-handler\x3d'calendarKey' data-event\x3d'keydown' aria-readonly\x3d'true' role\x3d'grid' aria-labelledby\x3d'" + this.$_GetSubId$(this.$_CALENDAR_DESCRIPTION_ID$) + "'\x3e\x3cthead role\x3d'presentation'\x3e\x3ctr role\x3d'row'\x3e";
        $curRows_daysInMonth$$3_numRows_thead$$ = "number" === $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$ ? "\x3cth class\x3d'oj-datepicker-week-col'\x3e" + this.$_EscapeXSS$(this.$getTranslatedString$("weekHeader")) + "\x3c/th\x3e" : "";
        for ($calculatedWeek_dow_leadDays_monthControl$$ = 0;7 > $calculatedWeek_dow_leadDays_monthControl$$;$calculatedWeek_dow_leadDays_monthControl$$++) {
          $day$$3_printDate$$1$$ = ($calculatedWeek_dow_leadDays_monthControl$$ + parseInt($firstDay$$, 10)) % 7, $curRows_daysInMonth$$3_numRows_thead$$ += "\x3cth role\x3d'columnheader' aria-label\x3d'" + $dayNames$$[$day$$3_printDate$$1$$] + "'" + (5 <= ($calculatedWeek_dow_leadDays_monthControl$$ + $firstDay$$ + 6) % 7 ? " class\x3d'oj-datepicker-week-end'" : "") + "\x3e\x3cspan title\x3d'" + $dayNames$$[$day$$3_printDate$$1$$] + "'\x3e" + $dayNamesMin$$[$day$$3_printDate$$1$$] + "\x3c/span\x3e\x3c/th\x3e"
          ;
        }
        $calender$$ += $curRows_daysInMonth$$3_numRows_thead$$ + "\x3c/tr\x3e\x3c/thead\x3e\x3ctbody role\x3d'presentation'\x3e";
        $curRows_daysInMonth$$3_numRows_thead$$ = this.$_getDaysInMonth$($drawYear$$, $currentMonthPos_drawMonth$$);
        $drawYear$$ === $selectedYear$$ && $currentMonthPos_drawMonth$$ === $selectedMonth$$ && ($selectedDay$$ = Math.min($selectedDay$$, $curRows_daysInMonth$$3_numRows_thead$$));
        $calculatedWeek_dow_leadDays_monthControl$$ = (this.$_getFirstDayOfMonth$($drawYear$$, $currentMonthPos_drawMonth$$) - $firstDay$$ + 7) % 7;
        $curRows_daysInMonth$$3_numRows_thead$$ = Math.ceil(($calculatedWeek_dow_leadDays_monthControl$$ + $curRows_daysInMonth$$3_numRows_thead$$) / 7);
        this.$_maxRows$ = $curRows_daysInMonth$$3_numRows_thead$$ = $isMultiMonth$$ ? this.$_maxRows$ > $curRows_daysInMonth$$3_numRows_thead$$ ? this.$_maxRows$ : $curRows_daysInMonth$$3_numRows_thead$$ : $curRows_daysInMonth$$3_numRows_thead$$;
        $day$$3_printDate$$1$$ = new Date($drawYear$$, $currentMonthPos_drawMonth$$, 1 - $calculatedWeek_dow_leadDays_monthControl$$);
        for ($dRow$$ = 0;$dRow$$ < $curRows_daysInMonth$$3_numRows_thead$$;$dRow$$++) {
          $calender$$ += "\x3ctr role\x3d'row'\x3e";
          $calculatedWeek_dow_leadDays_monthControl$$ = this.$_GetConverter$().$calculateWeek$($converterUtils$$2$$.dateToLocalIso($day$$3_printDate$$1$$));
          $tbody$$ = "none" === $footerLayoutButtons_footerLayoutDisplay_weekDisplay$$ ? "" : "\x3ctd class\x3d'oj-datepicker-week-col' role\x3d'rowheader' aria-label\x3d'" + $weekText$$ + " " + $calculatedWeek_dow_leadDays_monthControl$$ + "'\x3e" + $calculatedWeek_dow_leadDays_monthControl$$ + "\x3c/td\x3e";
          for ($calculatedWeek_dow_leadDays_monthControl$$ = 0;7 > $calculatedWeek_dow_leadDays_monthControl$$;$calculatedWeek_dow_leadDays_monthControl$$++) {
            $otherMonth$$ = $day$$3_printDate$$1$$.getMonth() !== $currentMonthPos_drawMonth$$;
            $selected$$12$$ = $day$$3_printDate$$1$$.getTime() === $valueDate$$2$$.getTime();
            $rowCellId$$ = "oj-dp-" + this.uuid + "-" + $dRow$$ + "-" + $calculatedWeek_dow_leadDays_monthControl$$ + "-" + $row$$3$$ + "-" + $col$$;
            ($dayOverClass$$ = $day$$3_printDate$$1$$.getTime() === $compareDate$$.getTime() && $currentMonthPos_drawMonth$$ === this.$_currentMonth$) && ($dayOverId$$ = $rowCellId$$);
            $daySettings$$ = [!0, ""];
            $currMetaData_pYear_unselectable$$ = $day$$3_printDate$$1$$.getFullYear();
            var $pMonth_selectedDate$$ = $day$$3_printDate$$1$$.getMonth(), $pDate$$ = $day$$3_printDate$$1$$.getDate();
            $dayFormatter$$1$$ && ($currMetaData_pYear_unselectable$$ = $dayFormatter$$1$$({fullYear:$currMetaData_pYear_unselectable$$, month:$pMonth_selectedDate$$ + 1, date:$pDate$$})) && ($daySettings$$ = [!$currMetaData_pYear_unselectable$$.disabled, $currMetaData_pYear_unselectable$$.className || ""], $currMetaData_pYear_unselectable$$.tooltip && $daySettings$$.push($currMetaData_pYear_unselectable$$.tooltip));
            $pMonth_selectedDate$$ = $day$$3_printDate$$1$$.getTime() === $valueDate$$2$$.getTime();
            $currMetaData_pYear_unselectable$$ = $otherMonth$$ && "selectable" !== $currentText_daysOutsideMonth_loop$$ || !$daySettings$$[0] || this.$_outSideMinMaxRange$($day$$3_printDate$$1$$, $minDate$$1$$, $maxDate$$1$$);
            $tbody$$ += "\x3ctd role\x3d'gridcell' aria-disabled\x3d'" + !!$currMetaData_pYear_unselectable$$ + "' aria-selected\x3d'" + $selected$$12$$ + "' id\x3d'" + $rowCellId$$ + "' class\x3d'" + (5 <= ($calculatedWeek_dow_leadDays_monthControl$$ + $firstDay$$ + 6) % 7 ? " oj-datepicker-week-end" : "") + ($otherMonth$$ ? " oj-datepicker-other-month" : "") + ($dayOverClass$$ ? " " + this.$_DAYOVER_CLASS$ : "") + ($currMetaData_pYear_unselectable$$ || $wDisabled$$ ? " " + this.$_UNSELECTABLE_CLASS$ + 
            " oj-disabled" : " oj-enabled ") + ($otherMonth$$ && "hidden" === $currentText_daysOutsideMonth_loop$$ ? "" : " " + $daySettings$$[1] + ($selected$$12$$ ? " " + this.$_CURRENT_CLASS$ : "") + ($day$$3_printDate$$1$$.getTime() === $tempDate_today$$1$$.getTime() ? " oj-datepicker-today" : "")) + "'" + ($otherMonth$$ && "hidden" === $currentText_daysOutsideMonth_loop$$ || !$daySettings$$[2] ? "" : " title\x3d'" + $daySettings$$[2].replace(/'/g, "\x26#39;") + "'") + ($currMetaData_pYear_unselectable$$ ? 
            "" : " data-handler\x3d'selectDay' data-event\x3d'click' data-month\x3d'" + $day$$3_printDate$$1$$.getMonth() + "' data-year\x3d'" + $day$$3_printDate$$1$$.getFullYear() + "'") + "\x3e" + ($otherMonth$$ && "hidden" === $currentText_daysOutsideMonth_loop$$ ? "\x26#xa0;" : $currMetaData_pYear_unselectable$$ || $wDisabled$$ ? "\x3cspan class\x3d'oj-disabled'\x3e" + $day$$3_printDate$$1$$.getDate() + "\x3c/span\x3e" : "\x3ca class\x3d'oj-enabled" + ($pMonth_selectedDate$$ ? " oj-selected" : 
            "") + ($otherMonth$$ ? " oj-priority-secondary" : "") + "' " + ($pMonth_selectedDate$$ || $dayOverClass$$ ? "" : "tabindex\x3d'-1' ") + " href\x3d'#'\x3e" + $day$$3_printDate$$1$$.getDate() + "\x3c/a\x3e") + "\x3c/td\x3e";
            $day$$3_printDate$$1$$.setDate($day$$3_printDate$$1$$.getDate() + 1);
          }
          $calender$$ += $tbody$$ + "\x3c/tr\x3e";
        }
        $currentMonthPos_drawMonth$$++;
        11 < $currentMonthPos_drawMonth$$ && ($currentMonthPos_drawMonth$$ = 0, $drawYear$$++);
        $calender$$ += "\x3c/tbody\x3e\x3c/table\x3e" + ($isMultiMonth$$ ? "\x3c/div\x3e" + (0 < $numMonths$$1$$[0] && $col$$ === $numMonths$$1$$[1] - 1 ? "\x3cdiv class\x3d'oj-datepicker-row-break'\x3e\x3c/div\x3e" : "") : "");
        $group$$2$$ += $calender$$;
      }
      $html_todayControl$$ += $group$$2$$;
    }
    return{html:$html_todayControl$$ + $footerLayout$$, $dayOverId$:$dayOverId$$};
  }, $_generateMonthYearHeader$:function __generateMonthYearHeader($drawMonth$$1$$, $drawYear$$1$$, $minDate$$2$$, $maxDate$$2$$, $secondary$$, $monthNames$$1$$, $monthNamesShort$$1_year$$6$$, $isMultiMonth$$1$$) {
    var $endYear_inMinYear_years$$, $determineYear_inMaxYear$$, $month$$6$$, $thisYear$$, $changeMonth$$ = this.options.datePicker.changeMonth, $changeYear$$ = this.options.datePicker.changeYear, $positionOfMonthToYear$$ = $oj$$13$$.$LocaleData$.$isMonthPriorToYear$() ? "before" : "after", $html$$1$$ = "\x3cdiv class\x3d'oj-datepicker-title' role\x3d'header'\x3e", $monthHtml$$ = "", $wDisabled$$1$$ = this.options.disabled, $converterUtils$$3$$ = $oj$$13$$.$IntlConverterUtils$;
    if ($secondary$$ || "none" === $changeMonth$$) {
      $monthHtml$$ += "\x3cspan class\x3d'oj-datepicker-month'\x3e" + $monthNames$$1$$[$drawMonth$$1$$] + "\x3c/span\x3e";
    } else {
      $endYear_inMinYear_years$$ = $minDate$$2$$ && $minDate$$2$$.getFullYear() === $drawYear$$1$$;
      $determineYear_inMaxYear$$ = $maxDate$$2$$ && $maxDate$$2$$.getFullYear() === $drawYear$$1$$;
      $monthHtml$$ += "\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-month " + ($wDisabled$$1$$ ? "oj-disabled' disabled" : "oj-enabled'") + " data-handler\x3d'selectMonth' data-event\x3d'change' role\x3d'listbox'\x3e";
      for ($month$$6$$ = 0;12 > $month$$6$$;$month$$6$$++) {
        (!$endYear_inMinYear_years$$ || $month$$6$$ >= $minDate$$2$$.getMonth()) && (!$determineYear_inMaxYear$$ || $month$$6$$ <= $maxDate$$2$$.getMonth()) && ($monthHtml$$ += "\x3coption role\x3d'option' value\x3d'" + $month$$6$$ + "' aria-selected\x3d'" + ($month$$6$$ === $drawMonth$$1$$ ? "true' selected\x3d'selected'" : "false'") + "\x3e" + $monthNamesShort$$1_year$$6$$[$month$$6$$] + "\x3c/option\x3e");
      }
      $monthHtml$$ += "\x3c/select\x3e";
    }
    "before" === $positionOfMonthToYear$$ && ($html$$1$$ += $monthHtml$$ + ($secondary$$ || "select" !== $changeMonth$$ || "select" !== $changeYear$$ ? "\x26#xa0;" : ""));
    if (!this.$yearshtml$) {
      if (this.$yearshtml$ = "", $secondary$$ || "none" === $changeYear$$) {
        $html$$1$$ += "\x3cspan class\x3d'oj-datepicker-year'\x3e" + $yearDisplay$$.format($converterUtils$$3$$.dateToLocalIso(new Date($drawYear$$1$$, $drawMonth$$1$$, 1))) + "\x3c/span\x3e";
      } else {
        $endYear_inMinYear_years$$ = this.options.datePicker.yearRange.split(":");
        $thisYear$$ = (new Date).getFullYear();
        $determineYear_inMaxYear$$ = function $$determineYear_inMaxYear$$$($value$$213_year$$7$$) {
          $value$$213_year$$7$$ = $value$$213_year$$7$$.match(/c[+\-].*/) ? $drawYear$$1$$ + parseInt($value$$213_year$$7$$.substring(1), 10) : $value$$213_year$$7$$.match(/[+\-].*/) ? $thisYear$$ + parseInt($value$$213_year$$7$$, 10) : parseInt($value$$213_year$$7$$, 10);
          return isNaN($value$$213_year$$7$$) ? $thisYear$$ : $value$$213_year$$7$$;
        };
        $monthNamesShort$$1_year$$6$$ = $determineYear_inMaxYear$$($endYear_inMinYear_years$$[0]);
        $endYear_inMinYear_years$$ = Math.max($monthNamesShort$$1_year$$6$$, $determineYear_inMaxYear$$($endYear_inMinYear_years$$[1] || ""));
        $monthNamesShort$$1_year$$6$$ = $minDate$$2$$ ? Math.max($monthNamesShort$$1_year$$6$$, $minDate$$2$$.getFullYear()) : $monthNamesShort$$1_year$$6$$;
        $endYear_inMinYear_years$$ = $maxDate$$2$$ ? Math.min($endYear_inMinYear_years$$, $maxDate$$2$$.getFullYear()) : $endYear_inMinYear_years$$;
        for (this.$yearshtml$ += "\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-year " + ($wDisabled$$1$$ ? "oj-disabled' disabled" : "oj-enabled'") + " data-handler\x3d'selectYear' data-event\x3d'change' role\x3d'listbox'\x3e";$monthNamesShort$$1_year$$6$$ <= $endYear_inMinYear_years$$;$monthNamesShort$$1_year$$6$$++) {
          this.$yearshtml$ += "\x3coption role\x3d'option' value\x3d'" + $monthNamesShort$$1_year$$6$$ + "' aria-selected\x3d'" + ($monthNamesShort$$1_year$$6$$ === $drawYear$$1$$ ? "true' selected\x3d'selected'" : "false'") + "\x3e" + $yearDisplay$$.format($converterUtils$$3$$.dateToLocalIso(new Date($monthNamesShort$$1_year$$6$$, $drawMonth$$1$$, 1))) + "\x3c/option\x3e";
        }
        this.$yearshtml$ += "\x3c/select\x3e";
        $html$$1$$ += this.$yearshtml$;
        this.$yearshtml$ = null;
      }
    }
    "after" === $positionOfMonthToYear$$ && ($html$$1$$ += ($secondary$$ || "select" !== $changeMonth$$ || "select" !== $changeYear$$ ? "\x26#xa0;" : "") + $monthHtml$$);
    $isMultiMonth$$1$$ && $secondary$$ || ($html$$1$$ += "\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'" + this.$_GetSubId$(this.$_CALENDAR_DESCRIPTION_ID$) + "'\x3e" + $monthNames$$1$$[$drawMonth$$1$$] + " " + $yearDisplay$$.format($converterUtils$$3$$.dateToLocalIso(new Date($drawYear$$1$$, $drawMonth$$1$$, 1))) + "\x3c/span\x3e", $html$$1$$ += "\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'" + this.$_GetSubId$(this.$_DATEPICKER_DESCRIPTION_ID$) + "'\x3e" + this.$_EscapeXSS$(this.$getTranslatedString$("datePicker")) + 
    "\x3c/span\x3e");
    return $html$$1$$ + "\x3c/div\x3e";
  }, $_adjustInstDate$:function __adjustInstDate($offset$$18$$, $period$$2$$) {
    var $date$$11_year$$8$$ = this.$_drawYear$ + ("Y" === $period$$2$$ ? $offset$$18$$ : 0), $month$$7$$ = this.$_drawMonth$ + ("M" === $period$$2$$ ? $offset$$18$$ : 0), $day$$4$$ = Math.min(this.$_currentDay$, this.$_getDaysInMonth$($date$$11_year$$8$$, $month$$7$$)) + ("D" === $period$$2$$ ? $offset$$18$$ : 0), $date$$11_year$$8$$ = new Date($date$$11_year$$8$$, $month$$7$$, $day$$4$$);
    this.$_currentDay$ = $date$$11_year$$8$$.getDate();
    this.$_drawMonth$ = this.$_currentMonth$ = $date$$11_year$$8$$.getMonth();
    this.$_drawYear$ = this.$_currentYear$ = $date$$11_year$$8$$.getFullYear();
  }, $_getNumberOfMonths$:function __getNumberOfMonths() {
    var $numMonths$$2$$ = this.options.datePicker.numberOfMonths, $numMonths$$2$$ = "string" === typeof $numMonths$$2$$ ? parseInt($numMonths$$2$$, 10) : $numMonths$$2$$;
    return null == $numMonths$$2$$ ? [1, 1] : "number" === typeof $numMonths$$2$$ ? [1, $numMonths$$2$$] : $numMonths$$2$$;
  }, $_getMinMaxDate$:function __getMinMaxDate($minMax$$1$$) {
    return this.$_determineDate$(this.options[$minMax$$1$$], null);
  }, $_getDaysInMonth$:function __getDaysInMonth($year$$9$$, $month$$8$$) {
    return 32 - (new Date($year$$9$$, $month$$8$$, 32)).getDate();
  }, $_getFirstDayOfMonth$:function __getFirstDayOfMonth($year$$10$$, $month$$9$$) {
    return(new Date($year$$10$$, $month$$9$$, 1)).getDay();
  }, $_canAdjustMonth$:function __canAdjustMonth($offset$$19$$, $curYear_date$$12$$, $curMonth$$) {
    var $numMonths$$3$$ = this.$_getNumberOfMonths$();
    $curYear_date$$12$$ = new Date($curYear_date$$12$$, $curMonth$$ + (0 > $offset$$19$$ ? $offset$$19$$ : $numMonths$$3$$[0] * $numMonths$$3$$[1]), 1);
    0 > $offset$$19$$ && $curYear_date$$12$$.setDate(this.$_getDaysInMonth$($curYear_date$$12$$.getFullYear(), $curYear_date$$12$$.getMonth()));
    return this.$_isInRange$($curYear_date$$12$$);
  }, $_isInRange$:function __isInRange($date$$13$$) {
    var $yearSplit_years$$1$$, $currentYear$$, $minDate$$3$$ = this.$_getMinMaxDate$("min"), $maxDate$$3$$ = this.$_getMinMaxDate$("max"), $minYear$$ = null, $maxYear$$ = null;
    if ($yearSplit_years$$1$$ = this.options.datePicker.yearRange) {
      $yearSplit_years$$1$$ = $yearSplit_years$$1$$.split(":"), $currentYear$$ = (new Date).getFullYear(), $minYear$$ = parseInt($yearSplit_years$$1$$[0], 10), $maxYear$$ = parseInt($yearSplit_years$$1$$[1], 10), $yearSplit_years$$1$$[0].match(/[+\-].*/) && ($minYear$$ += $currentYear$$), $yearSplit_years$$1$$[1].match(/[+\-].*/) && ($maxYear$$ += $currentYear$$);
    }
    return(!$minDate$$3$$ || $date$$13$$.getTime() >= $minDate$$3$$.getTime()) && (!$maxDate$$3$$ || $date$$13$$.getTime() <= $maxDate$$3$$.getTime()) && (!$minYear$$ || $date$$13$$.getFullYear() >= $minYear$$) && (!$maxYear$$ || $date$$13$$.getFullYear() <= $maxYear$$);
  }, $_getCalendarTitle$:function __getCalendarTitle() {
    return this.$_EscapeXSS$(this.$getTranslatedString$("tooltipCalendar" + (this.options.disabled ? "Disabled" : "")));
  }, $_disableEnable$:function __disableEnable($val$$38$$) {
    this.$_triggerNode$ && ($disableEnableSpan$$(this.$_triggerNode$.children(), $val$$38$$), this.$_triggerNode$.find("." + this.$_TRIGGER_CALENDAR_CLASS$).attr("title", this.$_getCalendarTitle$()));
    $val$$38$$ && this.hide();
    this.$_isInLine$ && this.$_updateDatepicker$();
  }, $_AppendInputHelper$:function __AppendInputHelper$$1() {
    this.$_isInLine$ || this._superApply(arguments);
  }, $_onBlurHandler$:function __onBlurHandler$$1($event$$136$$) {
    this.$_isInLine$ || this._superApply(arguments);
  }, $_onKeyDownHandler$:function __onKeyDownHandler$$1($event$$137$$) {
    if (!this.$_isInLine$) {
      this._superApply(arguments);
      var $kc$$1$$ = $$$$13$$.ui.keyCode, $handled$$1$$ = !1;
      if (this.$_datepickerShowing$()) {
        switch($event$$137$$.keyCode) {
          case $kc$$1$$.TAB:
            this.hide();
            break;
          case $kc$$1$$.ESCAPE:
            this.hide();
            $handled$$1$$ = !0;
            break;
          case $kc$$1$$.UP:
          ;
          case $kc$$1$$.DOWN:
            this.$_dpDiv$.find(".oj-datepicker-calendar").focus(), $handled$$1$$ = !0;
        }
      } else {
        switch($event$$137$$.keyCode) {
          case $kc$$1$$.UP:
          ;
          case $kc$$1$$.DOWN:
            this.$_SetValue$(this.$_GetDisplayValue$(), $event$$137$$), this.show(), $handled$$1$$ = !0;
        }
      }
      if ($handled$$1$$) {
        return $event$$137$$.preventDefault(), $event$$137$$.stopPropagation(), !1;
      }
    }
  }, $_SetDisplayValue$:function($displayValue$$8$$) {
    this.$_isInLine$ || this._superApply(arguments);
    this.$_setCurrentDate$(this.$_getDate$());
    this.$_datepickerShowing$() && this.$_updateDatepicker$(!0);
  }, $_GetConverter$:function() {
    return this.options.converter ? this._superApply(arguments) : $$$$13$$.oj.ojInputDate.prototype.options.converter;
  }, $_GetElementValue$:function() {
    return this.options.value || "";
  }, _GetDefaultStyleClass:function() {
    return "oj-inputdate";
  }, $_GetImplicitValidators$:function() {
    var $ret$$23$$ = this._superApply(arguments);
    if (null != this.options.min || null != this.options.max) {
      this.$_datePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE] = this.$_getValidator$("min");
    }
    null != this.options.dayFormatter && (this.$_datePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATERESTRICTION] = this.$_getValidator$("dayFormatter"));
    return $$$$13$$.extend(this.$_datePickerDefaultValidators$, $ret$$23$$);
  }, $_NotifyDetached$:function() {
    this.hide();
  }, $_NotifyHidden$:function() {
    this.hide();
  }, $_getValidator$:function($dateRestrictionOptions_key$$65$$) {
    var $validator$$3$$ = null;
    "min" === $dateRestrictionOptions_key$$65$$ || "max" === $dateRestrictionOptions_key$$65$$ ? $validator$$3$$ = $getImplicitDateTimeRangeValidator$$(this.options, this.$_GetConverter$()) : "dayFormatter" === $dateRestrictionOptions_key$$65$$ && ($dateRestrictionOptions_key$$65$$ = {dayFormatter:this.options.dayFormatter, converter:this.$_GetConverter$()}, $$$$13$$.extend($dateRestrictionOptions_key$$65$$, this.options.translations.dateRestriction || {}), $validator$$3$$ = $oj$$13$$.$Validation$.$validatorFactory$($oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATERESTRICTION).createValidator($dateRestrictionOptions_key$$65$$));
    return $validator$$3$$;
  }, $_getTodayDate$:function __getTodayDate() {
    var $date$$14$$ = new Date;
    $date$$14$$.setHours(0);
    $date$$14$$.setMinutes(0);
    $date$$14$$.setSeconds(0);
    $date$$14$$.setMilliseconds(0);
    return $date$$14$$;
  }, $_getDate$:function __getDate() {
    return this.$_determineDate$(this.options.value, this.$_getTodayDate$());
  }, getNodeBySubId:function($locator$$15$$) {
    var $node$$45$$ = null, $subId$$14$$ = $locator$$15$$ && $locator$$15$$.subId, $dpDiv$$1$$ = this.$_dpDiv$;
    if ($subId$$14$$) {
      switch($subId$$14$$) {
        case "oj-datepicker-content":
          $node$$45$$ = $dpDiv$$1$$[0];
          break;
        case "oj-inputdatetime-calendar-icon":
          $node$$45$$ = $$$$13$$(".oj-inputdatetime-calendar-icon", this.$_triggerNode$)[0];
          break;
        case "oj-datepicker-prev-icon":
          $node$$45$$ = $$$$13$$(".oj-datepicker-prev-icon", $dpDiv$$1$$)[0];
          break;
        case "oj-datepicker-next-icon":
          $node$$45$$ = $$$$13$$(".oj-datepicker-next-icon", $dpDiv$$1$$)[0];
          break;
        case "oj-datepicker-month":
          $node$$45$$ = $$$$13$$(".oj-datepicker-month", $dpDiv$$1$$)[0];
          break;
        case "oj-datepicker-year":
          $node$$45$$ = $$$$13$$(".oj-datepicker-year", $dpDiv$$1$$)[0];
          break;
        case "oj-datepicker-current":
          $node$$45$$ = $$$$13$$(".oj-datepicker-current", $dpDiv$$1$$)[0];
          break;
        case "oj-inputdatetime-date-input":
          $node$$45$$ = this.$_isInLine$ ? null : this.element[0];
          break;
        default:
          $node$$45$$ = null;
      }
    }
    return $node$$45$$ || this._superApply(arguments);
  }, getSubIdByNode:function($node$$46$$) {
    var $dpDiv$$2_i$$173$$ = this.$_dpDiv$, $subId$$15$$ = null, $checks$$ = [{selector:".oj-inputdatetime-calendar-icon", ele:this.$_triggerNode$}, {selector:".oj-datepicker-prev-icon", ele:$dpDiv$$2_i$$173$$}, {selector:".oj-datepicker-next-icon", ele:$dpDiv$$2_i$$173$$}, {selector:".oj-datepicker-month", ele:$dpDiv$$2_i$$173$$}, {selector:".oj-datepicker-year", ele:$dpDiv$$2_i$$173$$}, {selector:".oj-datepicker-current", ele:$dpDiv$$2_i$$173$$}];
    if ($node$$46$$ === $dpDiv$$2_i$$173$$[0]) {
      return "oj-datepicker-content";
    }
    if (!this.$_isInLine$ && $node$$46$$ === this.element[0]) {
      return "oj-inputdatetime-date-input";
    }
    for (var $dpDiv$$2_i$$173$$ = 0, $j$$23$$ = $checks$$.length;$dpDiv$$2_i$$173$$ < $j$$23$$;$dpDiv$$2_i$$173$$++) {
      var $map$$ = $checks$$[$dpDiv$$2_i$$173$$], $entry$$3$$ = $$$$13$$($map$$.selector, $map$$.ele);
      if (1 === $entry$$3$$.length && $entry$$3$$[0] === $node$$46$$) {
        $subId$$15$$ = $map$$.selector.substr(1);
        break;
      }
    }
    return $subId$$15$$ || this._superApply(arguments);
  }, hide:function __hide() {
    this.$_datepickerShowing$() && !this.$_isInLine$ && (this.$_popUpDpDiv$.ojPopup("close"), "focus" === this.options.datePicker.showOn && (this.$_ignoreShow$ = !0), this.element.focus());
    return this;
  }, refresh:function __refresh() {
    this.$_triggerNode$ && this.$_triggerNode$.find("." + this.$_TRIGGER_CALENDAR_CLASS$).attr("title", this.$_getCalendarTitle$());
    return this._superApply(arguments) || this;
  }, show:function __show() {
    if (!(this.$_datepickerShowing$() || this.options.disabled || this.options.readOnly)) {
      if (this.$_ignoreShow$) {
        this.$_ignoreShow$ = !1;
      } else {
        var $position$$7_rtl$$ = this.$_rtl$;
        this.$_dpDiv$.empty();
        this.$_updateDatepicker$();
        $position$$7_rtl$$ = $oj$$13$$.$PositionUtils$.$normalizeHorizontalAlignment$({my:"start top", at:"start bottom", of:this.element, collision:"flipfit flipfit"}, $position$$7_rtl$$);
        this.$_popUpDpDiv$.ojPopup("open", this.$_triggerIcon$, $position$$7_rtl$$);
        return this;
      }
    }
  }});
  $oj$$13$$.Components.$setDefaultOptions$({ojInputDate:{firstDayOfWeek:$oj$$13$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$13$$.$LocaleData$.$getFirstDayOfWeek$();
  }), dayWide:$oj$$13$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$13$$.$LocaleData$.$getDayNames$("wide");
  }), dayNarrow:$oj$$13$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$13$$.$LocaleData$.$getDayNames$("narrow");
  }), monthWide:$oj$$13$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$13$$.$LocaleData$.$getMonthNames$("wide");
  }), monthAbbreviated:$oj$$13$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$13$$.$LocaleData$.$getMonthNames$("abbreviated");
  }), datePicker:$oj$$13$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$13$$.$ThemeUtils$.$getOptionDefaultMap$("inputDate").datePicker;
  })}});
  $oj$$13$$.$__registerWidget$("oj.ojInputTime", $$$$13$$.oj.inputBase, {version:"1.0.0", widgetEventPrefix:"oj", _CLASS_NAMES:"oj-inputdatetime-input", _WIDGET_CLASS_NAMES:"oj-inputdatetime-time-only oj-component oj-inputdatetime", $_INPUT_CONTAINER_CLASS$:"oj-inputdatetime-input-container", _ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"", _INPUT_HELPER_KEY:"inputHelp", _ATTR_CHECK:[{attr:"type", setMandatory:"text"}], _GET_INIT_OPTIONS_PROPS:[{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"pattern"}, 
  {$attribute$:"title"}, {$attribute$:"placeholder"}, {$attribute$:"value", $coerceDomValue$:$coerceIsoString$$}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"readonly", option:"readOnly", $validateOption$:!0}, {$attribute$:"min", $coerceDomValue$:$coerceIsoString$$}, {$attribute$:"max", $coerceDomValue$:$coerceIsoString$$}], $_TIME_PICKER_ID$:"ojInputTime", $_TRIGGER_CLASS$:"oj-inputdatetime-input-trigger", $_TRIGGER_TIME_CLASS$:"oj-inputdatetime-time-icon", 
  options:{converter:$oj$$13$$.$Validation$.$converterFactory$($oj$$13$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME).createConverter({hour:"2-digit", hour12:!0, minute:"2-digit"}), max:void 0, min:void 0, datePickerComp:null, timePicker:{timeIncrement:"00:30:00:00"}}, $_InitOptions$:function($originalDefaults$$9$$, $constructorOptions$$11$$) {
    this._super($originalDefaults$$9$$, $constructorOptions$$11$$);
    null === this.options.datePickerComp && $oj$$13$$.$EditableValueUtils$.$initializeOptionsFromDom$(this._GET_INIT_OPTIONS_PROPS, $constructorOptions$$11$$, this);
  }, $_InitBase$:function __InitBase$$1() {
    this.$_timePickerDefaultValidators$ = {};
    this.$_datePickerComp$ = this.options.datePickerComp;
    this.$_timePickerDisplay$ = $$$$13$$("\x3cdiv id\x3d'" + this.$_GetSubId$(this.$_TIME_PICKER_ID$) + "' class\x3d'oj-listbox-drop' style\x3d'display:none'\x3e\x3c/div\x3e");
    $$$$13$$("body").append(this.$_timePickerDisplay$);
    var $self$$91$$ = this;
    this.$_popUpTimePickerDisplay$ = this.$_timePickerDisplay$.ojPopup({initialFocus:"none", rootAttributes:{"class":"datetimepicker-dropdown"}, chrome:"none", modality:"modeless", open:function() {
      var $selected$$13$$ = $$$$13$$("[aria-selected]", $self$$91$$.$_timePickerDisplay$);
      1 === $selected$$13$$.length && $self$$91$$.$_checkScrollTop$($selected$$13$$.parent(), !0);
      $$$$13$$("ul", $self$$91$$.$_timePickerDisplay$).focus();
    }, beforeClose:function() {
      $self$$91$$.$_timeListBoxScrollTop$ = $$$$13$$("ul", $self$$91$$.$_timePickerDisplay$).scrollTop();
    }});
    this.$_isIndependentInput$() && (this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES += this.$_INPUT_CONTAINER_CLASS$);
  }, $_timepickerShowing$:function() {
    return this.$_popUpTimePickerDisplay$.ojPopup("isOpen");
  }, _ComponentCreate:function __ComponentCreate$$1() {
    this.$_InitBase$();
    var $ret$$24$$ = this._superApply(arguments);
    this.$_isContainedInDateTimePicker$() && !this.$_isDatePickerInline$() ? this._CLASS_NAMES = "" : $bindActive$$(this);
    this.$_attachTrigger$();
    return $ret$$24$$;
  }, $_AfterCreate$:function() {
    var $ret$$25$$ = this._superApply(arguments);
    $disableEnableSpan$$(this.$_triggerNode$.children(), this.options.disabled);
    return $ret$$25$$;
  }, _setOption:function __setOption$$2($key$$66$$, $value$$214$$, $flags$$21$$) {
    var $retVal$$11$$ = null;
    if ("value" === $key$$66$$) {
      return $value$$214$$ || ($value$$214$$ = null), $retVal$$11$$ = this._super($key$$66$$, $value$$214$$, $flags$$21$$), this.$_generateTime$(), $retVal$$11$$;
    }
    $retVal$$11$$ = this._superApply(arguments);
    "disabled" === $key$$66$$ ? ($value$$214$$ && this.hide(), this.$_triggerNode$.find("." + this.$_TRIGGER_TIME_CLASS$).attr("title", this.$_getTimeTitle$()), $disableEnableSpan$$(this.$_triggerNode$.children(), $value$$214$$)) : "max" !== $key$$66$$ && "min" !== $key$$66$$ || this.$_isContainedInDateTimePicker$() ? "readOnly" === $key$$66$$ && $value$$214$$ && this.hide() : (this.$_timePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE] = $getImplicitDateTimeRangeValidator$$(this.options, 
    this.$_GetConverter$()), this.$_AfterSetOptionValidators$());
    $key$$66$$ in {max:!0, min:!0, converter:!0, timePicker:!0} && this.$_generateTime$();
    return $retVal$$11$$;
  }, _destroy:function __destroy$$2() {
    var $retVal$$12$$ = this._super();
    this.$_triggerNode$ && this.$_triggerNode$.remove();
    this.$_timePickerDisplay$.remove();
    return $retVal$$12$$;
  }, $_AppendInputHelper$:function __AppendInputHelper$$2() {
    this.$_isIndependentInput$() && this._superApply(arguments);
  }, $_AppendInputHelperParent$:function __AppendInputHelperParent$$2() {
    return this.$_triggerNode$;
  }, $_onKeyDownHandler$:function __onKeyDownHandler$$2($event$$138$$) {
    if (this.$_isIndependentInput$()) {
      this._superApply(arguments);
      var $kc$$2$$ = $$$$13$$.ui.keyCode, $handled$$2$$ = !1;
      if (this.$_timepickerShowing$()) {
        switch($event$$138$$.keyCode) {
          case $kc$$2$$.TAB:
            this.hide();
            break;
          case $kc$$2$$.ESCAPE:
            this.hide();
            $handled$$2$$ = !0;
            break;
          case $kc$$2$$.UP:
          ;
          case $kc$$2$$.DOWN:
            $$$$13$$("ul", this.$_timePickerDisplay$).focus(), $handled$$2$$ = !0;
        }
      } else {
        switch($event$$138$$.keyCode) {
          case $kc$$2$$.UP:
          ;
          case $kc$$2$$.DOWN:
            this.$_SetValue$(this.$_GetDisplayValue$(), $event$$138$$), this.show(), $handled$$2$$ = !0;
        }
      }
      if ($handled$$2$$ || $event$$138$$.keyCode === $kc$$2$$.ENTER) {
        return $event$$138$$.preventDefault(), $event$$138$$.stopPropagation(), !1;
      }
    }
  }, $_getTimeTitle$:function __getTimeTitle() {
    return this.$_EscapeXSS$(this.$getTranslatedString$("tooltipTime" + (this.options.disabled ? "Disabled" : "")));
  }, $_attachTrigger$:function __attachTrigger$$1() {
    var $createNewSpan$$ = this.$_isIndependentInput$(), $triggerContainer$$1$$ = $createNewSpan$$ ? $$$$13$$("\x3cspan\x3e").addClass(this.$_TRIGGER_CLASS$) : $$$$13$$("+ span", this.element), $triggerTime$$ = $$$$13$$("\x3cspan title\x3d'" + this.$_getTimeTitle$() + "'/\x3e").addClass(this.$_TRIGGER_TIME_CLASS$ + " oj-clickable-icon-nocontext oj-component-icon");
    $triggerContainer$$1$$.append($triggerTime$$);
    var $self$$92$$ = this;
    $triggerTime$$.on("click", function() {
      $self$$92$$.$_timepickerShowing$() ? $self$$92$$.hide() : $self$$92$$.show();
    });
    this.$_activeable$($triggerTime$$);
    this._hoverable($triggerTime$$);
    this.$_triggerIcon$ = $triggerTime$$;
    this.$_triggerNode$ = $triggerContainer$$1$$;
    $createNewSpan$$ && this.element.after($triggerContainer$$1$$);
  }, $_inMinMaxRange$:function __inMinMaxRange($date$$15$$, $minDate$$4$$, $maxDate$$4$$) {
    return null !== $minDate$$4$$ && $date$$15$$ < $minDate$$4$$ || null !== $maxDate$$4$$ && $date$$15$$ > $maxDate$$4$$;
  }, $_getValue$:function __getValue() {
    return this.$_isContainedInDateTimePicker$() ? this.$_datePickerComp$.widget.$getValueForInputTime$() : this.options.value;
  }, $_generateTime$:function __generateTime() {
    var $i$$174_processDate$$ = this.$_getValue$(), $converter$$4_selectedDateFormat$$ = this.$_GetConverter$(), $timeNode$$ = $$$$13$$("\x3cul class\x3d'oj-listbox-results' tabindex\x3d'-1' role\x3d'listbox'\x3e\x3c/ul\x3e"), $converter$$4_selectedDateFormat$$ = $i$$174_processDate$$ ? $converter$$4_selectedDateFormat$$.format($i$$174_processDate$$) : "", $source$$9$$ = [], $j$$24$$, $i$$174_processDate$$ = $i$$174_processDate$$ ? $oj$$13$$.$IntlConverterUtils$.isoToLocalDate($i$$174_processDate$$) : 
    new Date;
    $i$$174_processDate$$.setHours(0);
    $i$$174_processDate$$.setMinutes(0);
    $i$$174_processDate$$.setSeconds(0);
    $i$$174_processDate$$.setMilliseconds(0);
    $source$$9$$ = this.$_getTimeSource$($i$$174_processDate$$);
    $converter$$4_selectedDateFormat$$ = $converter$$4_selectedDateFormat$$ || $source$$9$$[0].value;
    this.$_timePickerDisplay$.empty();
    $i$$174_processDate$$ = 0;
    for ($j$$24$$ = $source$$9$$.length;$i$$174_processDate$$ < $j$$24$$;$i$$174_processDate$$++) {
      var $value$$215$$ = $source$$9$$[$i$$174_processDate$$].value, $minMaxRange_node$$47$$ = $source$$9$$[$i$$174_processDate$$].minMaxRange, $liNode$$ = $$$$13$$("\x3cli class\x3d'oj-listbox-result " + ($minMaxRange_node$$47$$ ? "oj-disabled" : "") + "' role\x3d'presentation'\x3e"), $nodeId$$ = this.uuid + "_sel" + $i$$174_processDate$$, $minMaxRange_node$$47$$ = $$$$13$$("\x3cdiv class\x3d'oj-listbox-result-label' " + ($minMaxRange_node$$47$$ ? "aria-disabled " : "") + "data-value\x3d'" + $value$$215$$ + 
      "' role\x3d'option' id\x3d'" + $nodeId$$ + "'\x3e" + $source$$9$$[$i$$174_processDate$$].label + "\x3c/li\x3e");
      $converter$$4_selectedDateFormat$$ === $value$$215$$ && ($minMaxRange_node$$47$$.attr("aria-selected", "true"), $liNode$$.addClass("oj-hover"), $timeNode$$.attr("aria-activedescendant", $nodeId$$));
      $liNode$$.append($minMaxRange_node$$47$$);
      $timeNode$$.append($liNode$$);
    }
    this.$_timePickerDisplay$.append($timeNode$$);
    $$$$13$$(".oj-listbox-result", $timeNode$$).on("mousemove", function() {
      var $ref$$2$$ = $$$$13$$(this);
      $ref$$2$$.hasClass("oj-disabled") || ($$$$13$$(".oj-hover", $timeNode$$).removeClass("oj-hover"), $ref$$2$$.addClass("oj-hover"), $timeNode$$.attr("aria-activedescendant", $ref$$2$$.children()[0].id));
    });
    var $self$$93$$ = this;
    $timeNode$$.on("click", function($event$$139$$) {
      var $target$$80$$ = $$$$13$$($event$$139$$.target);
      $target$$80$$.hasClass("oj-disabled") || void 0 !== $target$$80$$.attr("aria-disabled") || ($self$$93$$.$_processTimeSelection$($event$$139$$), $self$$93$$.hide());
    }).on("keydown", function($event$$140$$) {
      $self$$93$$.$_timeNodeKeyDown$($event$$140$$);
    });
  }, $_getTimeSource$:function __getTimeSource($date$$16$$) {
    var $source$$10$$ = [], $converter$$5$$ = this.$_GetConverter$();
    if ($date$$16$$) {
      var $JSCompiler_object_inline_millisecondIncr_3_splitted$$1$$ = this.options.timePicker.timeIncrement.split(":"), $converterUtils$$4$$ = $oj$$13$$.$IntlConverterUtils$, $containedInDateTimePicker_maxDate$$5$$ = this.$_isContainedInDateTimePicker$(), $JSCompiler_object_inline_hourIncr_0_valLocalIso$$ = $converterUtils$$4$$.dateToLocalIso($date$$16$$), $minDate$$5$$ = $containedInDateTimePicker_maxDate$$5$$ ? this.$_datePickerComp$.widget.options.min : this.options.min, $containedInDateTimePicker_maxDate$$5$$ = 
      $containedInDateTimePicker_maxDate$$5$$ ? this.$_datePickerComp$.widget.options.max : this.options.max, $minDate$$5$$ = $minDate$$5$$ ? $converterUtils$$4$$.isoToLocalDate($converterUtils$$4$$._minMaxIsoString($minDate$$5$$, $JSCompiler_object_inline_hourIncr_0_valLocalIso$$)) : null, $containedInDateTimePicker_maxDate$$5$$ = $containedInDateTimePicker_maxDate$$5$$ ? $converterUtils$$4$$.isoToLocalDate($converterUtils$$4$$._minMaxIsoString($containedInDateTimePicker_maxDate$$5$$, $JSCompiler_object_inline_hourIncr_0_valLocalIso$$)) : 
      null;
      if (4 === $JSCompiler_object_inline_millisecondIncr_3_splitted$$1$$.length) {
        var $JSCompiler_object_inline_hourIncr_0_valLocalIso$$ = parseInt($JSCompiler_object_inline_millisecondIncr_3_splitted$$1$$[0].substring(0), 10), $JSCompiler_object_inline_minuteIncr_1$$ = parseInt($JSCompiler_object_inline_millisecondIncr_3_splitted$$1$$[1], 10), $JSCompiler_object_inline_secondIncr_2$$ = parseInt($JSCompiler_object_inline_millisecondIncr_3_splitted$$1$$[2], 10), $JSCompiler_object_inline_millisecondIncr_3_splitted$$1$$ = parseInt($JSCompiler_object_inline_millisecondIncr_3_splitted$$1$$[3], 
        10), $processDate$$1$$ = new Date($date$$16$$), $formatted$$5$$ = "";
        do {
          $formatted$$5$$ = $converter$$5$$.format($converterUtils$$4$$.dateToLocalIso($processDate$$1$$)), $source$$10$$.push({label:$formatted$$5$$, value:$formatted$$5$$, minMaxRange:this.$_inMinMaxRange$($processDate$$1$$, $minDate$$5$$, $containedInDateTimePicker_maxDate$$5$$)}), $processDate$$1$$.setHours($processDate$$1$$.getHours() + $JSCompiler_object_inline_hourIncr_0_valLocalIso$$), $processDate$$1$$.setMinutes($processDate$$1$$.getMinutes() + $JSCompiler_object_inline_minuteIncr_1$$), 
          $processDate$$1$$.setSeconds($processDate$$1$$.getSeconds() + $JSCompiler_object_inline_secondIncr_2$$), $processDate$$1$$.setMilliseconds($processDate$$1$$.getMilliseconds() + $JSCompiler_object_inline_millisecondIncr_3_splitted$$1$$);
        } while ($processDate$$1$$.getDate() === $date$$16$$.getDate());
      } else {
        throw Error("timeIncrement value should be in the format of hh:mm:ss:SS");
      }
    }
    return $source$$10$$;
  }, $_timeNodeKeyDown$:function __timeNodeKeyDown($event$$141$$) {
    if (this.$_timepickerShowing$()) {
      var $kc$$3$$ = $$$$13$$.ui.keyCode, $handled$$3$$ = !1;
      switch($event$$141$$.keyCode) {
        case $kc$$3$$.TAB:
          this.hide();
          break;
        case $kc$$3$$.ESCAPE:
          this.hide();
          this.element.focus();
          $handled$$3$$ = !0;
          break;
        case $kc$$3$$.UP:
          this.$_processNextPrevSibling$($event$$141$$, "prev");
          $handled$$3$$ = !0;
          break;
        case $kc$$3$$.DOWN:
          this.$_processNextPrevSibling$($event$$141$$, "next");
          $handled$$3$$ = !0;
          break;
        case $kc$$3$$.ENTER:
          this.$_processTimeSelection$($event$$141$$), $handled$$3$$ = !0;
      }
      if ($handled$$3$$) {
        return $event$$141$$.preventDefault(), $event$$141$$.stopPropagation(), !1;
      }
    }
  }, $_processNextPrevSibling$:function __processNextPrevSibling($event$$142$$, $prevOrNext$$) {
    var $prevActive$$ = $$$$13$$(".oj-hover", this.$_timePickerDisplay$), $ulElement$$ = $$$$13$$("ul", this.$_timePickerDisplay$), $node$$48$$ = null;
    1 === $prevActive$$.length ? ($node$$48$$ = $prevActive$$[$prevOrNext$$](), 1 === $node$$48$$.length && $prevActive$$.removeClass("oj-hover")) : $node$$48$$ = $$$$13$$($ulElement$$.children()[0]);
    $node$$48$$ && 1 === $node$$48$$.length && ($node$$48$$.addClass("oj-hover"), $ulElement$$.attr("aria-activedescendant", $node$$48$$.children()[0].id), this.$_checkScrollTop$($node$$48$$));
  }, $_processTimeSelection$:function __processTimeSelection($event$$143$$) {
    var $selected$$14_timePickerDisplay$$ = this.$_timePickerDisplay$, $prevSelected$$ = $$$$13$$("[aria-selected]", $selected$$14_timePickerDisplay$$), $ulElement$$1$$ = $$$$13$$("ul", $selected$$14_timePickerDisplay$$), $selected$$14_timePickerDisplay$$ = $$$$13$$(".oj-hover div", $selected$$14_timePickerDisplay$$);
    1 === $selected$$14_timePickerDisplay$$.length && (1 === $prevSelected$$.length && ($prevSelected$$.removeAttr("aria-selected"), $prevSelected$$.parent().removeClass("oj-hover")), $selected$$14_timePickerDisplay$$.attr("aria-selected", "true"), $selected$$14_timePickerDisplay$$.parent().addClass("oj-hover"), this.hide(), this.$_SetDisplayValue$($selected$$14_timePickerDisplay$$.attr("data-value")), this.$_SetValue$($selected$$14_timePickerDisplay$$.attr("data-value"), $event$$143$$), $ulElement$$1$$.attr("aria-activedescendant", 
    $selected$$14_timePickerDisplay$$[0].id), this.element.focus(), this.$_isContainedInDateTimePicker$() && this.$_datePickerComp$.widget.hide());
  }, $_onBlurHandler$:function __onBlurHandler$$2($event$$144$$) {
    this.$_isIndependentInput$() && this._superApply(arguments);
  }, show:function __show$$1() {
    if (!this.options.disabled && !this.options.readOnly) {
      this.$_isContainedInDateTimePicker$() && this.$_datePickerComp$.widget.hide();
      this.$_generateTime$();
      var $timePickerDisplay$$1$$ = this.$_timePickerDisplay$, $popUpTimePickerDisplay$$ = this.$_popUpTimePickerDisplay$;
      $timePickerDisplay$$1$$.width(this.element.parent().width());
      $timePickerDisplay$$1$$.css({position:"relative"});
      var $position$$8$$ = $oj$$13$$.$PositionUtils$.$normalizeHorizontalAlignment$({my:"start top", at:"start bottom", of:this.element, collision:"flipfit flipfit"}, this.$_rtl$);
      $popUpTimePickerDisplay$$.ojPopup("open", this.$_triggerIcon$, $position$$8$$);
      $timePickerDisplay$$1$$.find("[aria-selected]").parent().addClass("oj-hover");
    }
  }, hide:function __hide$$1() {
    this.$_timepickerShowing$() && (this.$_popUpTimePickerDisplay$.ojPopup("close"), this.element.focus());
  }, refresh:function __refresh$$1() {
    this.$_triggerNode$ && this.$_triggerNode$.find("." + this.$_TRIGGER_TIME_CLASS$).attr("title", this.$_getTimeTitle$());
    return this._superApply(arguments) || this;
  }, $_SetDisplayValue$:function __setDisplayValue($displayValue$$9$$) {
    this.$_isIndependentInput$() && this._superApply(arguments);
    this.$_timepickerShowing$() && this.$_generateTime$();
  }, $_SetValue$:function __SetValue($newValue$$8$$, $event$$145$$, $options$$234$$) {
    if (this.$_isContainedInDateTimePicker$()) {
      this._super($newValue$$8$$, null, $options$$234$$);
      try {
        var $parsedNewValue$$ = this.$_GetConverter$().parse($newValue$$8$$), $converterUtils$$5$$ = $oj$$13$$.$IntlConverterUtils$, $datePickerCompWidget$$ = this.$_datePickerComp$.widget, $dateTimeValue$$ = $datePickerCompWidget$$.$getValueForInputTime$(), $dateTimeDate$$ = $dateTimeValue$$ ? $converterUtils$$5$$.isoToLocalDate($dateTimeValue$$) : new Date, $newValueDate$$ = $copyTimeOver$$($parsedNewValue$$ ? $converterUtils$$5$$.isoToLocalDate($parsedNewValue$$) : new Date, new Date($dateTimeDate$$)), 
        $isoString$$7$$ = $converterUtils$$5$$.dateToLocalIso($newValueDate$$);
        $dateTimeDate$$.getTime() != $newValueDate$$.getTime() && $datePickerCompWidget$$.$timeSelected$($isoString$$7$$, $event$$145$$);
      } catch ($e$$81$$) {
      }
    } else {
      this._superApply(arguments);
    }
  }, $_DoWrapElement$:function() {
    return this.$_isIndependentInput$();
  }, $_isIndependentInput$:function __isIndependentInput() {
    return!this.$_isContainedInDateTimePicker$() || this.$_isDatePickerInline$();
  }, _GetDefaultStyleClass:function() {
    return "oj-inputtime";
  }, $_GetElementValue$:function() {
    return this.options.value || "";
  }, $_GetImplicitValidators$:function() {
    var $ret$$26$$ = this._superApply(arguments);
    null == this.options.min && null == this.options.max || this.$_isContainedInDateTimePicker$() || (this.$_timePickerDefaultValidators$[$oj$$13$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE] = $getImplicitDateTimeRangeValidator$$(this.options, this.$_GetConverter$()));
    return $$$$13$$.extend(this.$_timePickerDefaultValidators$, $ret$$26$$);
  }, $_GetConverter$:function() {
    return this.options.converter ? this._superApply(arguments) : $$$$13$$.oj.ojInputTime.prototype.options.converter;
  }, $_checkScrollTop$:function($node$$49$$, $opening$$) {
    var $container$$19$$ = $node$$49$$.parent();
    $opening$$ && this.$_timeListBoxScrollTop$ && $$$$13$$($container$$19$$).scrollTop(this.$_timeListBoxScrollTop$);
    var $containerTop$$ = $$$$13$$($container$$19$$).scrollTop(), $containerBottom$$ = $containerTop$$ + $$$$13$$($container$$19$$).height(), $nodeTop$$ = $node$$49$$[0].offsetTop, $nodeBottom$$ = $nodeTop$$ + $$$$13$$($node$$49$$).height();
    $nodeTop$$ < $containerTop$$ ? $$$$13$$($container$$19$$).scrollTop($nodeTop$$) : $nodeBottom$$ > $containerBottom$$ && $$$$13$$($container$$19$$).scrollTop($nodeBottom$$ - $$$$13$$($container$$19$$).height());
  }, $_isContainedInDateTimePicker$:function __isContainedInDateTimePicker() {
    return null !== this.$_datePickerComp$;
  }, $_isDatePickerInline$:function __isDatePickerInline() {
    return this.$_datePickerComp$.inline;
  }, $_NotifyDetached$:function() {
    this.hide();
  }, $_NotifyHidden$:function() {
    this.hide();
  }, getNodeBySubId:function($locator$$16$$) {
    var $node$$50$$ = null, $subId$$16$$ = $locator$$16$$ && $locator$$16$$.subId;
    if ($subId$$16$$) {
      switch($subId$$16$$) {
        case "oj-listbox-drop":
          $node$$50$$ = this.$_timePickerDisplay$[0];
          break;
        case "oj-inputdatetime-time-icon":
          $node$$50$$ = $$$$13$$(".oj-inputdatetime-time-icon", this.$_triggerNode$)[0];
          break;
        case "oj-inputdatetime-time-input":
          $node$$50$$ = this.element[0];
          break;
        default:
          $node$$50$$ = null;
      }
    }
    return $node$$50$$ || this._superApply(arguments);
  }, getSubIdByNode:function($node$$51$$) {
    var $timeIcon$$ = $$$$13$$(".oj-inputdatetime-time-icon", this.$_triggerNode$), $subId$$17$$ = null;
    $node$$51$$ === this.$_timePickerDisplay$[0] ? $subId$$17$$ = "oj-listbox-drop" : $node$$51$$ === $timeIcon$$[0] ? $subId$$17$$ = "oj-inputdatetime-time-icon" : $node$$51$$ === this.element[0] && ($subId$$17$$ = "oj-inputdatetime-time-input");
    return $subId$$17$$ || this._superApply(arguments);
  }, widget:function __widget() {
    return this.$_isIndependentInput$() ? this._super() : this.$_datePickerComp$.widget.widget();
  }});
  $oj$$13$$.$__registerWidget$("oj.ojInputDateTime", $$$$13$$.oj.ojInputDate, {version:"1.0.0", widgetEventPrefix:"oj", _WIDGET_CLASS_NAMES:"oj-inputdatetime-date-time oj-component oj-inputdatetime", _INPUT_HELPER_KEY:"inputHelpBoth", options:{converter:$oj$$13$$.$Validation$.$converterFactory$($oj$$13$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit", month:"2-digit", year:"2-digit", hour:"2-digit", hour12:!0, minute:"2-digit"}), timePicker:{timeIncrement:"00:30:00:00"}}, 
  $_InitBase$:function __InitBase$$2() {
    this._super();
    this.$_timePickerElement$ = this.element;
    this.$_previousValue$ = this.$_timeConverter$ = this.$_timePicker$ = null;
  }, _ComponentCreate:function __ComponentCreate$$2() {
    var $ret$$27$$ = this._super(), $timeConverter$$ = this.$_getTimePickerConverter$(this.$_GetConverter$());
    if (null === $timeConverter$$) {
      throw Error("Please use ojInputDate if you do not have time portion");
    }
    if (this.$_isInLine$) {
      var $input$$3_passOptions$$ = $$$$13$$("\x3cinput type\x3d'text'\x3e");
      $input$$3_passOptions$$.insertAfter(this.element);
      this.$_timePickerElement$ = $input$$3_passOptions$$;
    }
    for (var $input$$3_passOptions$$ = ["title", "placeholder", "disabled", "required", "readOnly"], $passObject$$ = {}, $i$$175$$ = 0, $j$$25$$ = $input$$3_passOptions$$.length;$i$$175$$ < $j$$25$$;$i$$175$$++) {
      $passObject$$[$input$$3_passOptions$$[$i$$175$$]] = this.options[$input$$3_passOptions$$[$i$$175$$]];
    }
    this.$_timePicker$ = this.$_timePickerElement$.ojInputTime($$$$13$$.extend($passObject$$, {converter:$timeConverter$$, displayOptions:{converterHint:"none", title:"none", messages:this.options.displayOptions.messages}, value:$oj$$13$$.$IntlConverterUtils$.dateToLocalIso(this.$_getDate$()), timePicker:this.options.timePicker, datePickerComp:{widget:this, inline:this.$_isInLine$}}));
    return $ret$$27$$;
  }, _setOption:function __setOption$$3($key$$67$$, $value$$216$$, $flags$$22$$) {
    var $retVal$$13$$ = this._superApply(arguments);
    "value" === $key$$67$$ && (this.$_previousValue$ = $value$$216$$);
    this.$_timePicker$ && ($key$$67$$ in {disabled:!0, readOnly:!0} ? this.$_timePicker$.ojInputTime("option", $key$$67$$, $value$$216$$) : "timePicker" === $key$$67$$ ? this.$_timePicker$.ojInputTime("option", "timePicker.timeIncrement", $value$$216$$.timeIncrement) : "converter" === $key$$67$$ && (this.$_timeConverter$ = null, this.$_timePicker$.ojInputTime("option", $key$$67$$, this.$_getTimePickerConverter$(this.$_GetConverter$()))));
    return $retVal$$13$$;
  }, _destroy:function __destroy$$3() {
    var $ret$$28$$ = this._super();
    this.$_timePicker$.ojInputTime("destroy");
    this.$_isInLine$ && this.$_timePickerElement$.remove();
    return $ret$$28$$;
  }, $_getTimePickerConverter$:function __getTimePickerConverter($converter$$6_resolvedOptions$$5_timeConverter$$1$$) {
    if (null !== this.$_timeConverter$) {
      return this.$_timeConverter$;
    }
    $converter$$6_resolvedOptions$$5_timeConverter$$1$$ = $converter$$6_resolvedOptions$$5_timeConverter$$1$$.resolvedOptions();
    var $options$$235$$ = {}, $params$$17$$ = "hour hour12 minute second millisecond timeFormat".split(" "), $i$$176$$, $j$$26$$;
    $i$$176$$ = 0;
    for ($j$$26$$ = $params$$17$$.length;$i$$176$$ < $j$$26$$;$i$$176$$++) {
      $params$$17$$[$i$$176$$] in $converter$$6_resolvedOptions$$5_timeConverter$$1$$ && ("timeFormat" === $params$$17$$[$i$$176$$] && ($options$$235$$.formatType = "time"), $options$$235$$[$params$$17$$[$i$$176$$]] = $converter$$6_resolvedOptions$$5_timeConverter$$1$$[$params$$17$$[$i$$176$$]]);
    }
    if ($$$$13$$.isEmptyObject($options$$235$$)) {
      throw Error("Plase use ojInputDateTime's converter is lacking the time portion");
    }
    return this.$_timeConverter$ = $converter$$6_resolvedOptions$$5_timeConverter$$1$$ = $oj$$13$$.$Validation$.$converterFactory$($oj$$13$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME).createConverter($options$$235$$);
  }, $timeSelected$:function __timeSelected($newValue$$9$$, $event$$146$$) {
    this.$_SetDisplayValue$(this.$_GetConverter$().format($newValue$$9$$));
    this.$_SetValue$($newValue$$9$$, $event$$146$$);
  }, $getValueForInputTime$:function __getValueForInputTime() {
    if (this.isValid()) {
      return this.options.value;
    }
    if (this.$_previousValue$) {
      try {
        return this.$_GetConverter$().parse(this.$_previousValue$);
      } catch ($e$$82$$) {
        return this.options.value;
      }
    } else {
      return null;
    }
  }, $_SetValue$:function __SetValue$$1($newValue$$10$$, $event$$147$$, $options$$236$$) {
    this._superApply(arguments);
    this.$_previousValue$ = $newValue$$10$$;
  }, $_onKeyDownHandler$:function __onKeyDownHandler$$3($event$$148$$) {
    var $kc$$4$$ = $$$$13$$.ui.keyCode, $handled$$4$$ = !1;
    switch($event$$148$$.keyCode) {
      case $kc$$4$$.UP:
      ;
      case $kc$$4$$.DOWN:
        $event$$148$$.shiftKey && (this.$_SetValue$(this.$_GetDisplayValue$(), $event$$148$$), this.$_timePicker$.ojInputTime("show"), $handled$$4$$ = !0);
    }
    return $handled$$4$$ ? ($event$$148$$.preventDefault(), $event$$148$$.stopPropagation(), !1) : this._superApply(arguments);
  }, show:function __show$$2() {
    this.$_timePicker$.ojInputTime("hide");
    return this._super();
  }, showTimePicker:function __showTimePicker() {
    this.hide();
    return this.$_timePicker$.ojInputTime("show");
  }, hideTimePicker:function __hideTimePicker() {
    return this.$_timePicker$.ojInputTime("hide");
  }, refresh:function __refresh$$2() {
    var $retVal$$14$$ = this._superApply(arguments) || this;
    this.$_timePicker$.ojInputTime("refresh");
    return $retVal$$14$$;
  }, getNodeBySubId:function($locator$$17$$) {
    var $subId$$18$$ = $locator$$17$$ && $locator$$17$$.subId, $node$$52$$ = null;
    $subId$$18$$ && ("oj-listbox-drop" === $subId$$18$$ || "oj-inputdatetime-time-icon" === $subId$$18$$ ? $node$$52$$ = this.$_timePicker$.ojInputTime("getNodeBySubId", $locator$$17$$) : "oj-inputdatetime-date-input" === $subId$$18$$ && ($node$$52$$ = this.$_isInLine$ ? this.$_timePickerElement$[0] : this.element[0]));
    return $node$$52$$ || this._superApply(arguments);
  }, getSubIdByNode:function($node$$53$$) {
    var $dateTimeSpecific$$ = null;
    this.$_isInLine$ ? $node$$53$$ === this.$_timePickerElement$[0] && ($dateTimeSpecific$$ = "oj-inputdatetime-date-input") : $node$$53$$ === this.element[0] && ($dateTimeSpecific$$ = "oj-inputdatetime-date-input");
    return $dateTimeSpecific$$ || this.$_timePicker$.ojInputTime("getSubIdByNode", $node$$53$$) || this._superApply(arguments);
  }, $_GetConverter$:function() {
    return this.options.converter ? this._superApply(arguments) : $$$$13$$.oj.ojInputDateTime.prototype.options.converter;
  }, $_NotifyDetached$:function() {
    this._superApply(arguments);
    this.$_timePicker$ && this.hideTimePicker();
  }, $_NotifyHidden$:function() {
    this._superApply(arguments);
    this.$_timePicker$ && this.hideTimePicker();
  }, _GetMessagingLauncherElement:function() {
    return this.$_isInLine$ ? this.$_timePickerElement$ : this._super();
  }, _GetDefaultStyleClass:function() {
    return "oj-inputdatetime";
  }, $_GetTranslationsSectionName$:function() {
    return "oj-ojInputDate";
  }});
});
