/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojL10n!ojtranslations/nls/localeElements", "ojs/ojmessaging"], function($oj$$6$$, $$$$6$$, $ojld$$1$$) {
  $oj$$6$$.$LocaleData$ = {};
  $goog$exportPath_$$("LocaleData", $oj$$6$$.$LocaleData$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$setBundle$ = function $$oj$$6$$$$LocaleData$$$setBundle$$($bundle$$3$$) {
    $oj$$6$$.$LocaleData$.$_bundle$ = $bundle$$3$$;
  };
  $goog$exportPath_$$("LocaleData.setBundle", $oj$$6$$.$LocaleData$.$setBundle$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getFirstDayOfWeek$ = function $$oj$$6$$$$LocaleData$$$getFirstDayOfWeek$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("firstDay");
  };
  $goog$exportPath_$$("LocaleData.getFirstDayOfWeek", $oj$$6$$.$LocaleData$.$getFirstDayOfWeek$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getWeekendStart$ = function $$oj$$6$$$$LocaleData$$$getWeekendStart$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("weekendStart");
  };
  $goog$exportPath_$$("LocaleData.getWeekendStart", $oj$$6$$.$LocaleData$.$getWeekendStart$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getWeekendEnd$ = function $$oj$$6$$$$LocaleData$$$getWeekendEnd$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("weekendEnd");
  };
  $goog$exportPath_$$("LocaleData.getWeekendEnd", $oj$$6$$.$LocaleData$.$getWeekendEnd$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getDayNames$ = function $$oj$$6$$$$LocaleData$$$getDayNames$$($days_type$$69$$) {
    if (null == $days_type$$69$$ || "abbreviated" !== $days_type$$69$$ && "narrow" !== $days_type$$69$$) {
      $days_type$$69$$ = "wide";
    }
    $days_type$$69$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().days["stand-alone"][$days_type$$69$$];
    return[$days_type$$69$$.sun, $days_type$$69$$.mon, $days_type$$69$$.tue, $days_type$$69$$.wed, $days_type$$69$$.thu, $days_type$$69$$.fri, $days_type$$69$$.sat];
  };
  $goog$exportPath_$$("LocaleData.getDayNames", $oj$$6$$.$LocaleData$.$getDayNames$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getMonthNames$ = function $$oj$$6$$$$LocaleData$$$getMonthNames$$($months_type$$70$$) {
    if (null == $months_type$$70$$ || "abbreviated" !== $months_type$$70$$ && "narrow" !== $months_type$$70$$) {
      $months_type$$70$$ = "wide";
    }
    $months_type$$70$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().months["stand-alone"][$months_type$$70$$];
    return[$months_type$$70$$["1"], $months_type$$70$$["2"], $months_type$$70$$["3"], $months_type$$70$$["4"], $months_type$$70$$["5"], $months_type$$70$$["6"], $months_type$$70$$["7"], $months_type$$70$$["8"], $months_type$$70$$["9"], $months_type$$70$$["10"], $months_type$$70$$["11"], $months_type$$70$$["12"]];
  };
  $goog$exportPath_$$("LocaleData.getMonthNames", $oj$$6$$.$LocaleData$.$getMonthNames$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$isMonthPriorToYear$ = function $$oj$$6$$$$LocaleData$$$isMonthPriorToYear$$() {
    var $longDateFormat_yearIndex$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().dateFormats["long"].toUpperCase(), $monthIndex$$ = $longDateFormat_yearIndex$$.indexOf("M"), $longDateFormat_yearIndex$$ = $longDateFormat_yearIndex$$.indexOf("Y");
    return $monthIndex$$ < $longDateFormat_yearIndex$$;
  };
  $goog$exportPath_$$("LocaleData.isMonthPriorToYear", $oj$$6$$.$LocaleData$.$isMonthPriorToYear$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$_getWeekData$ = function $$oj$$6$$$$LocaleData$$$_getWeekData$$($data$$51_key$$39$$) {
    var $b$$55$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $region_val$$22$$ = $oj$$6$$.$LocaleData$.$_getRegion$() || "001";
    $data$$51_key$$39$$ = $b$$55$$.supplemental.weekData[$data$$51_key$$39$$];
    $region_val$$22$$ = $data$$51_key$$39$$[$region_val$$22$$];
    void 0 === $region_val$$22$$ && ($region_val$$22$$ = $data$$51_key$$39$$["001"]);
    return $region_val$$22$$;
  };
  $oj$$6$$.$LocaleData$.$_getCalendarData$ = function $$oj$$6$$$$LocaleData$$$_getCalendarData$$() {
    var $main$$ = $oj$$6$$.$LocaleData$.$__getBundle$().main, $data$$52$$, $p$$1$$;
    for ($p$$1$$ in $main$$) {
      if ($main$$.hasOwnProperty($p$$1$$)) {
        $data$$52$$ = $main$$[$p$$1$$];
        break;
      }
    }
    return $data$$52$$.dates.calendars.gregorian;
  };
  $oj$$6$$.$LocaleData$.$_getRegion$ = function $$oj$$6$$$$LocaleData$$$_getRegion$$() {
    var $locale$$1_tokens$$3$$ = $oj$$6$$.$Config$.$getLocale$();
    if ($locale$$1_tokens$$3$$ && ($locale$$1_tokens$$3$$ = $locale$$1_tokens$$3$$.toUpperCase().split(/-|_/), 2 <= $locale$$1_tokens$$3$$.length)) {
      var $tag$$ = $locale$$1_tokens$$3$$[1];
      if (4 == $tag$$.length) {
        if (3 <= $locale$$1_tokens$$3$$.length) {
          return $locale$$1_tokens$$3$$[2];
        }
      } else {
        return $tag$$;
      }
    }
    return null;
  };
  $oj$$6$$.$LocaleData$.$__getBundle$ = function $$oj$$6$$$$LocaleData$$$__getBundle$$() {
    var $b$$57$$ = $oj$$6$$.$LocaleData$.$_bundle$;
    return $b$$57$$ ? $b$$57$$ : $oj$$6$$.$__isAmdLoaderPresent$() ? ($oj$$6$$.$Assert$.assert(void 0 !== $ojld$$1$$, "LocaleElements module must be loaded"), $ojld$$1$$) : {};
  };
  $oj$$6$$.$LocaleData$.$__updateBundle$ = function $$oj$$6$$$$LocaleData$$$__updateBundle$$($bundle$$4$$) {
    $ojld$$1$$ = $bundle$$4$$;
  };
  $oj$$6$$.$Validation$ = {};
  $goog$exportPath_$$("Validation", $oj$$6$$.$Validation$, $oj$$6$$);
  $oj$$6$$.$Validation$.$_converterFactories$ = {};
  $oj$$6$$.$Validation$.$_validatorFactories$ = {};
  $oj$$6$$.$Validation$.$_defaultConverterFactories$ = {};
  $oj$$6$$.$Validation$.$_defaultValidatorFactories$ = {};
  $oj$$6$$.$Validation$.$_CONTRACTS$ = {converter:{name:"oj.ConverterFactory", type:$oj$$6$$.$ConverterFactory$}, validator:{name:"oj.ValidatorFactory", type:$oj$$6$$.$ValidatorFactory$}};
  $oj$$6$$.$Validation$.$converterFactory$ = function $$oj$$6$$$$Validation$$$converterFactory$$($type$$71$$, $instance$$6$$) {
    var $retValue$$;
    $type$$71$$ && !$instance$$6$$ ? $retValue$$ = $oj$$6$$.$Validation$.$_getFactory$($type$$71$$, $oj$$6$$.$Validation$.$_converterFactories$) : $type$$71$$ && $instance$$6$$ && ($retValue$$ = $oj$$6$$.$Validation$.$_registerFactory$($type$$71$$, $instance$$6$$, $oj$$6$$.$Validation$.$_converterFactories$, $oj$$6$$.$Validation$.$_CONTRACTS$.converter));
    return $retValue$$;
  };
  $goog$exportPath_$$("Validation.converterFactory", $oj$$6$$.$Validation$.$converterFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$validatorFactory$ = function $$oj$$6$$$$Validation$$$validatorFactory$$($type$$72$$, $instance$$7$$) {
    var $retValue$$1$$;
    $type$$72$$ && !$instance$$7$$ ? $retValue$$1$$ = $oj$$6$$.$Validation$.$_getFactory$($type$$72$$, $oj$$6$$.$Validation$.$_validatorFactories$) : $type$$72$$ && $instance$$7$$ && ($retValue$$1$$ = $oj$$6$$.$Validation$.$_registerFactory$($type$$72$$, $instance$$7$$, $oj$$6$$.$Validation$.$_validatorFactories$, $oj$$6$$.$Validation$.$_CONTRACTS$.validator));
    return $retValue$$1$$;
  };
  $goog$exportPath_$$("Validation.validatorFactory", $oj$$6$$.$Validation$.$validatorFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$getDefaultConverterFactory$ = function $$oj$$6$$$$Validation$$$getDefaultConverterFactory$$($type$$73$$) {
    return $oj$$6$$.$Validation$.$_getFactory$($type$$73$$, $oj$$6$$.$Validation$.$_defaultConverterFactories$);
  };
  $goog$exportPath_$$("Validation.getDefaultConverterFactory", $oj$$6$$.$Validation$.$getDefaultConverterFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$getDefaultValidatorFactory$ = function $$oj$$6$$$$Validation$$$getDefaultValidatorFactory$$($type$$74$$) {
    return $oj$$6$$.$Validation$.$_getFactory$($type$$74$$, $oj$$6$$.$Validation$.$_defaultValidatorFactories$);
  };
  $goog$exportPath_$$("Validation.getDefaultValidatorFactory", $oj$$6$$.$Validation$.$getDefaultValidatorFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$ = function $$oj$$6$$$$Validation$$$__registerDefaultConverterFactory$$($name$$73$$, $instance$$8$$) {
    var $contractDef$$ = $oj$$6$$.$Validation$.$_CONTRACTS$.converter;
    $oj$$6$$.$Validation$.$_registerFactory$($name$$73$$, $instance$$8$$, $oj$$6$$.$Validation$.$_defaultConverterFactories$, $contractDef$$);
    $oj$$6$$.$Validation$.$_registerFactory$($name$$73$$, $instance$$8$$, $oj$$6$$.$Validation$.$_converterFactories$, $contractDef$$);
  };
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$ = function $$oj$$6$$$$Validation$$$__registerDefaultValidatorFactory$$($name$$74$$, $instance$$9$$) {
    var $contractDef$$1$$ = $oj$$6$$.$Validation$.$_CONTRACTS$.validator;
    $oj$$6$$.$Validation$.$_registerFactory$($name$$74$$, $instance$$9$$, $oj$$6$$.$Validation$.$_defaultValidatorFactories$, $contractDef$$1$$);
    $oj$$6$$.$Validation$.$_registerFactory$($name$$74$$, $instance$$9$$, $oj$$6$$.$Validation$.$_validatorFactories$, $contractDef$$1$$);
  };
  $oj$$6$$.$Validation$.$_doImplementsCheck$ = function $$oj$$6$$$$Validation$$$_doImplementsCheck$$($instance$$10$$, $type$$75$$, $typeName$$3$$) {
    if ($type$$75$$ && !$oj$$6$$.$Validation$.$_quacksLike$($instance$$10$$, $type$$75$$)) {
      throw Error("Factory instance does not implement the methods expected by the factory of type " + $typeName$$3$$);
    }
  };
  $oj$$6$$.$Validation$.$_getFactory$ = function $$oj$$6$$$$Validation$$$_getFactory$$($name$$75$$, $factories$$) {
    $oj$$6$$.$Assert$.$assertString$($name$$75$$);
    var $cachedInstance$$ = null;
    $name$$75$$ && ($name$$75$$ = $name$$75$$.toLowerCase(), $cachedInstance$$ = ($factories$$[$name$$75$$] || {}).instance || null);
    return $cachedInstance$$;
  };
  $oj$$6$$.$Validation$.$_quacksLike$ = function $$oj$$6$$$$Validation$$$_quacksLike$$($thingie$$, $duck$$) {
    var $valid$$6$$ = !0, $property$$12$$;
    $oj$$6$$.$Assert$.$assertObject$($thingie$$);
    $oj$$6$$.$Assert$.$assertObject$($duck$$);
    for ($property$$12$$ in $duck$$) {
      if ($duck$$.hasOwnProperty($property$$12$$) && "function" === typeof $duck$$[$property$$12$$] && !$thingie$$[$property$$12$$] && "function" !== typeof $thingie$$[$property$$12$$]) {
        $valid$$6$$ = !1;
        break;
      }
    }
    return $valid$$6$$;
  };
  $oj$$6$$.$Validation$.$_registerFactory$ = function $$oj$$6$$$$Validation$$$_registerFactory$$($name$$76$$, $instance$$11$$, $factories$$1$$, $contractDef$$2$$) {
    $oj$$6$$.$Assert$.$assertString$($name$$76$$);
    $oj$$6$$.$Assert$.$assertObject$($instance$$11$$);
    if ($name$$76$$) {
      var $props$$6$$ = {};
      $props$$6$$.instance = $instance$$11$$;
      $oj$$6$$.$Validation$.$_doImplementsCheck$($instance$$11$$, $contractDef$$2$$.type, $contractDef$$2$$.name);
      $factories$$1$$[$name$$76$$.toLowerCase()] = $props$$6$$;
    }
  };
  $oj$$6$$.$ConverterFactory$ = {CONVERTER_TYPE_NUMBER:"number", CONVERTER_TYPE_DATETIME:"datetime", createConverter:function $$oj$$6$$$$ConverterFactory$$createConverter$() {
  }};
  $goog$exportPath_$$("ConverterFactory", $oj$$6$$.$ConverterFactory$, $oj$$6$$);
  $oj$$6$$.$ValidatorFactory$ = {VALIDATOR_TYPE_REQUIRED:"required", VALIDATOR_TYPE_REGEXP:"regexp", VALIDATOR_TYPE_NUMBERRANGE:"numberRange", VALIDATOR_TYPE_LENGTH:"length", VALIDATOR_TYPE_DATETIMERANGE:"dateTimeRange", VALIDATOR_TYPE_DATERESTRICTION:"dateRestriction", createValidator:function $$oj$$6$$$$ValidatorFactory$$createValidator$() {
  }};
  $goog$exportPath_$$("ValidatorFactory", $oj$$6$$.$ValidatorFactory$, $oj$$6$$);
  $oj$$6$$.$Converter$ = function $$oj$$6$$$$Converter$$($options$$138$$) {
    this.Init($options$$138$$);
  };
  $goog$exportPath_$$("Converter", $oj$$6$$.$Converter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$Converter$, $oj$$6$$.$Object$, "oj.Converter");
  $oj$$6$$.$Converter$.prototype.Init = function $$oj$$6$$$$Converter$$$Init$($options$$139$$) {
    $oj$$6$$.$Converter$.$superclass$.Init.call(this);
    this.$_options$ = $options$$139$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.Init", {Init:$oj$$6$$.$Converter$.prototype.Init});
  $oj$$6$$.$Converter$.prototype.$getHint$ = function $$oj$$6$$$$Converter$$$$getHint$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.getHint", {$getHint$:$oj$$6$$.$Converter$.prototype.$getHint$});
  $oj$$6$$.$Converter$.prototype.$getOptions$ = function $$oj$$6$$$$Converter$$$$getOptions$$() {
    return this.$_options$ || {};
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.getOptions", {$getOptions$:$oj$$6$$.$Converter$.prototype.$getOptions$});
  $oj$$6$$.$Converter$.prototype.parse = function $$oj$$6$$$$Converter$$$parse$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.parse", {parse:$oj$$6$$.$Converter$.prototype.parse});
  $oj$$6$$.$Converter$.prototype.format = function $$oj$$6$$$$Converter$$$format$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.format", {format:$oj$$6$$.$Converter$.prototype.format});
  $oj$$6$$.$Converter$.prototype.resolvedOptions = function $$oj$$6$$$$Converter$$$resolvedOptions$() {
    var $resolved$$ = {};
    $$$$6$$.extend($resolved$$, this.$_options$);
    return $resolved$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$Converter$.prototype.resolvedOptions});
  $oj$$6$$.$ConverterError$ = function $$oj$$6$$$$ConverterError$$($summary$$8$$, $detail$$11$$) {
    var $message$$30$$ = new $oj$$6$$.$Message$($summary$$8$$, $detail$$11$$, $oj$$6$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    this.Init($message$$30$$);
  };
  $goog$exportPath_$$("ConverterError", $oj$$6$$.$ConverterError$, $oj$$6$$);
  $oj$$6$$.$ConverterError$.prototype = Error();
  $oj$$6$$.$ConverterError$.prototype.Init = function $$oj$$6$$$$ConverterError$$$Init$($message$$31$$) {
    var $detail$$12$$ = $message$$31$$.detail, $summary$$9$$ = $message$$31$$.summary;
    this.$_message$ = $message$$31$$;
    this.name = "Converter Error";
    this.message = $detail$$12$$ || $summary$$9$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ConverterError.prototype.Init", {Init:$oj$$6$$.$ConverterError$.prototype.Init});
  $oj$$6$$.$ConverterError$.prototype.$getMessage$ = function $$oj$$6$$$$ConverterError$$$$getMessage$$() {
    return this.$_message$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ConverterError.prototype.getMessage", {$getMessage$:$oj$$6$$.$ConverterError$.prototype.$getMessage$});
  $oj$$6$$.$NumberConverter$ = function $$oj$$6$$$$NumberConverter$$() {
    this.Init();
  };
  $goog$exportPath_$$("NumberConverter", $oj$$6$$.$NumberConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$NumberConverter$, $oj$$6$$.$Converter$, "oj.NumberConverter");
  $oj$$6$$.$NumberConverter$.prototype.Init = function $$oj$$6$$$$NumberConverter$$$Init$($options$$140$$) {
    $oj$$6$$.$NumberConverter$.$superclass$.Init.call(this, $options$$140$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.Init", {Init:$oj$$6$$.$NumberConverter$.prototype.Init});
  $oj$$6$$.$NumberConverter$.prototype.format = function $$oj$$6$$$$NumberConverter$$$format$($value$$101$$) {
    return $oj$$6$$.$NumberConverter$.$superclass$.format.call(this, $value$$101$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.format", {format:$oj$$6$$.$NumberConverter$.prototype.format});
  $oj$$6$$.$NumberConverter$.prototype.parse = function $$oj$$6$$$$NumberConverter$$$parse$($value$$102$$) {
    return $oj$$6$$.$NumberConverter$.$superclass$.parse.call(this, $value$$102$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.parse", {parse:$oj$$6$$.$NumberConverter$.prototype.parse});
  $oj$$6$$.$DateTimeConverter$ = function $$oj$$6$$$$DateTimeConverter$$($options$$141$$) {
    this.Init($options$$141$$);
  };
  $goog$exportPath_$$("DateTimeConverter", $oj$$6$$.$DateTimeConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateTimeConverter$, $oj$$6$$.$Converter$, "oj.DateTimeConverter");
  $oj$$6$$.$DateTimeConverter$.prototype.Init = function $$oj$$6$$$$DateTimeConverter$$$Init$($options$$142$$) {
    $oj$$6$$.$DateTimeConverter$.$superclass$.Init.call(this, $options$$142$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.Init", {Init:$oj$$6$$.$DateTimeConverter$.prototype.Init});
  $oj$$6$$.$DateTimeConverter$.prototype.format = function $$oj$$6$$$$DateTimeConverter$$$format$($value$$103$$) {
    return $oj$$6$$.$DateTimeConverter$.$superclass$.format.call(this, $value$$103$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.format", {format:$oj$$6$$.$DateTimeConverter$.prototype.format});
  $oj$$6$$.$DateTimeConverter$.prototype.$isHourInDaySet$ = function $$oj$$6$$$$DateTimeConverter$$$$isHourInDaySet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isHourInDaySet", {$isHourInDaySet$:$oj$$6$$.$DateTimeConverter$.prototype.$isHourInDaySet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isHourInAMPMSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isHourInAMPMSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isHourInAMPMSet", {$isHourInAMPMSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isHourInAMPMSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMinuteSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMinuteSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMinuteSet", {$isMinuteSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMinuteSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isSecondSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isSecondSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isSecondSet", {$isSecondSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isSecondSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMilliSecondSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMilliSecondSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMilliSecondSet", {$isMilliSecondSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMilliSecondSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isYearSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isYearSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isYearSet", {$isYearSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isYearSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMonthSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMonthSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMonthSet", {$isMonthSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMonthSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isDaySet$ = function $$oj$$6$$$$DateTimeConverter$$$$isDaySet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isDaySet", {$isDaySet$:$oj$$6$$.$DateTimeConverter$.prototype.$isDaySet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isDayNameSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isDayNameSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isDayNameSet", {$isDayNameSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isDayNameSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$calculateWeek$ = function $$oj$$6$$$$DateTimeConverter$$$$calculateWeek$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.calculateWeek", {$calculateWeek$:$oj$$6$$.$DateTimeConverter$.prototype.$calculateWeek$});
  $oj$$6$$.$DateTimeConverter$.prototype.parse = function $$oj$$6$$$$DateTimeConverter$$$parse$($value$$104$$) {
    return $oj$$6$$.$DateTimeConverter$.$superclass$.parse.call(this, $value$$104$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.parse", {parse:$oj$$6$$.$DateTimeConverter$.prototype.parse});
  $oj$$6$$.$Validator$ = function $$oj$$6$$$$Validator$$() {
    this.Init();
  };
  $goog$exportPath_$$("Validator", $oj$$6$$.$Validator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$Validator$, $oj$$6$$.$Object$, "oj.Validator");
  $oj$$6$$.$Validator$.prototype.Init = function $$oj$$6$$$$Validator$$$Init$() {
    $oj$$6$$.$Validator$.$superclass$.Init.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.Init", {Init:$oj$$6$$.$Validator$.prototype.Init});
  $oj$$6$$.$Validator$.prototype.validate = function $$oj$$6$$$$Validator$$$validate$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.validate", {validate:$oj$$6$$.$Validator$.prototype.validate});
  $oj$$6$$.$Validator$.prototype.$getHint$ = function $$oj$$6$$$$Validator$$$$getHint$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.getHint", {$getHint$:$oj$$6$$.$Validator$.prototype.$getHint$});
  $oj$$6$$.$ValidatorError$ = function $$oj$$6$$$$ValidatorError$$($summary$$10$$, $detail$$13$$) {
    var $message$$32$$ = new $oj$$6$$.$Message$($summary$$10$$, $detail$$13$$, $oj$$6$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    this.Init($message$$32$$);
  };
  $goog$exportPath_$$("ValidatorError", $oj$$6$$.$ValidatorError$, $oj$$6$$);
  $oj$$6$$.$ValidatorError$.prototype = Error();
  $oj$$6$$.$ValidatorError$.prototype.Init = function $$oj$$6$$$$ValidatorError$$$Init$($message$$33$$) {
    var $detail$$14$$ = $message$$33$$.detail, $summary$$11$$ = $message$$33$$.summary;
    this.$_message$ = $message$$33$$;
    this.name = "Validator Error";
    this.message = $detail$$14$$ || $summary$$11$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ValidatorError.prototype.Init", {Init:$oj$$6$$.$ValidatorError$.prototype.Init});
  $oj$$6$$.$ValidatorError$.prototype.$getMessage$ = function $$oj$$6$$$$ValidatorError$$$$getMessage$$() {
    return this.$_message$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ValidatorError.prototype.getMessage", {$getMessage$:$oj$$6$$.$ValidatorError$.prototype.$getMessage$});
  $oj$$6$$.$DateRestrictionValidator$ = function _DateRestrictionValidator($options$$143$$) {
    this.Init($options$$143$$);
  };
  $goog$exportPath_$$("DateRestrictionValidator", $oj$$6$$.$DateRestrictionValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateRestrictionValidator$, $oj$$6$$.$Validator$, "oj.DateRestrictionValidator");
  $oj$$6$$.$DateRestrictionValidator$.prototype.Init = function $$oj$$6$$$$DateRestrictionValidator$$$Init$($options$$144$$) {
    $oj$$6$$.$DateRestrictionValidator$.$superclass$.Init.call(this);
    this.$_dayFormatter$ = $options$$144$$.dayFormatter;
    this.$_converter$ = $oj$$6$$.$IntlConverterUtils$.getConverterInstance($options$$144$$.converter);
    $options$$144$$ && (this.$_messageSummary$ = $options$$144$$.messageSummary || null, this.$_messageDetail$ = $options$$144$$.messageDetail || null);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateRestrictionValidator.prototype.Init", {Init:$oj$$6$$.$DateRestrictionValidator$.prototype.Init});
  $oj$$6$$.$DateRestrictionValidator$.prototype.$_inDisabled$ = function $$oj$$6$$$$DateRestrictionValidator$$$$_inDisabled$$($date$$2_valueDate$$) {
    var $dayFormatter_metaData$$ = this.$_dayFormatter$;
    if ($dayFormatter_metaData$$) {
      var $fullYear$$ = $date$$2_valueDate$$.getFullYear(), $month$$1$$ = $date$$2_valueDate$$.getMonth() + 1;
      $date$$2_valueDate$$ = $date$$2_valueDate$$.getDate();
      return($dayFormatter_metaData$$ = $dayFormatter_metaData$$({fullYear:$fullYear$$, month:$month$$1$$, date:$date$$2_valueDate$$})) && $dayFormatter_metaData$$.disabled;
    }
    return!1;
  };
  $oj$$6$$.$DateRestrictionValidator$.prototype.validate = function $$oj$$6$$$$DateRestrictionValidator$$$validate$($value$$106$$) {
    var $messageSummary_summary$$12$$ = "", $detail$$15_translations$$2$$ = "", $detail$$15_translations$$2$$ = $oj$$6$$.$Translations$, $messageSummary_summary$$12$$ = this.$_messageSummary$, $messageDetail$$ = this.$_messageDetail$, $valueStr$$ = $value$$106$$ ? this.$_converter$.format($value$$106$$) : $value$$106$$, $valueDate$$1$$ = $value$$106$$ ? $oj$$6$$.$IntlConverterUtils$.isoToLocalDate($value$$106$$) : null;
    if (null === $value$$106$$) {
      return $value$$106$$;
    }
    if (this.$_inDisabled$($valueDate$$1$$)) {
      throw $messageSummary_summary$$12$$ = $messageSummary_summary$$12$$ ? $detail$$15_translations$$2$$.$applyParameters$($messageSummary_summary$$12$$, {value:$valueStr$$}) : $detail$$15_translations$$2$$.$getTranslatedString$("oj-validator.restriction.date.messageSummary", {value:$valueStr$$}), $detail$$15_translations$$2$$ = $messageDetail$$ ? $detail$$15_translations$$2$$.$applyParameters$($messageDetail$$, {value:$valueStr$$}) : $detail$$15_translations$$2$$.$getTranslatedString$("oj-validator.restriction.date.messageDetail", 
      {value:$valueStr$$}), new $oj$$6$$.$ValidatorError$($messageSummary_summary$$12$$, $detail$$15_translations$$2$$);
    }
    return $value$$106$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateRestrictionValidator.prototype.validate", {validate:$oj$$6$$.$DateRestrictionValidator$.prototype.validate});
  $oj$$6$$.$DateRestrictionValidator$.prototype.$getHint$ = function $$oj$$6$$$$DateRestrictionValidator$$$$getHint$$() {
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateRestrictionValidator.prototype.getHint", {$getHint$:$oj$$6$$.$DateRestrictionValidator$.prototype.$getHint$});
  $oj$$6$$.$DateTimeRangeValidator$ = function _DateTimeRangeValidator($options$$145$$) {
    this.Init($options$$145$$);
  };
  $goog$exportPath_$$("DateTimeRangeValidator", $oj$$6$$.$DateTimeRangeValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateTimeRangeValidator$, $oj$$6$$.$Validator$, "oj.DateTimeRangeValidator");
  $oj$$6$$.$DateTimeRangeValidator$.prototype.Init = function $$oj$$6$$$$DateTimeRangeValidator$$$Init$($options$$146$$) {
    $oj$$6$$.$DateTimeRangeValidator$.$superclass$.Init.call(this);
    this.$_converter$ = $oj$$6$$.$IntlConverterUtils$.getConverterInstance($options$$146$$.converter);
    this.$_min$ = $options$$146$$.min || null;
    this.$_max$ = $options$$146$$.max || null;
    $options$$146$$ && (this.$_hint$ = $options$$146$$.hint || {}, this.$_customMessageSummary$ = $options$$146$$.messageSummary || {}, this.$_customMessageDetail$ = $options$$146$$.messageDetail || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.Init", {Init:$oj$$6$$.$DateTimeRangeValidator$.prototype.Init});
  $oj$$6$$.$DateTimeRangeValidator$.prototype.validate = function $$oj$$6$$$$DateTimeRangeValidator$$$validate$($value$$107$$) {
    var $customMessageSummary_messageSummaryRangeUnderflow$$ = this.$_customMessageSummary$, $customMessageDetail_messageDetailRangeUnderflow$$ = this.$_customMessageDetail$, $messageDetailRangeOverflow$$ = $customMessageDetail_messageDetailRangeUnderflow$$.rangeOverflow, $customMessageDetail_messageDetailRangeUnderflow$$ = $customMessageDetail_messageDetailRangeUnderflow$$.rangeUnderflow, $messageSummaryRangeOverflow$$ = $customMessageSummary_messageSummaryRangeUnderflow$$.rangeOverflow, $customMessageSummary_messageSummaryRangeUnderflow$$ = 
    $customMessageSummary_messageSummaryRangeUnderflow$$.rangeUnderflow, $converterUtils$$ = $oj$$6$$.$IntlConverterUtils$, $min$$1$$ = this.$_min$, $max$$1$$ = this.$_max$, $summary$$13$$ = "", $detail$$16$$ = "", $translations$$3$$ = $oj$$6$$.$Translations$, $params$$6_valStr$$ = null, $valDate$$, $minStr$$, $maxStr$$;
    if (null === $value$$107$$) {
      return $value$$107$$;
    }
    $params$$6_valStr$$ = this.$_converter$.format($value$$107$$);
    $valDate$$ = $converterUtils$$.isoToLocalDate($value$$107$$);
    $min$$1$$ && ($minStr$$ = this.$_converter$ ? this.$_converter$.format($min$$1$$) : $min$$1$$, $min$$1$$ = $converterUtils$$.isoToLocalDate($converterUtils$$._minMaxIsoString($min$$1$$, $value$$107$$)));
    $max$$1$$ && ($maxStr$$ = this.$_converter$ ? this.$_converter$.format($max$$1$$) : $max$$1$$, $max$$1$$ = $converterUtils$$.isoToLocalDate($converterUtils$$._minMaxIsoString($max$$1$$, $value$$107$$)));
    if (null !== $min$$1$$ && null !== $max$$1$$) {
      if ($valDate$$ >= $min$$1$$ && $valDate$$ <= $max$$1$$ || $min$$1$$ > $max$$1$$) {
        return $value$$107$$;
      }
    } else {
      if (null !== $min$$1$$) {
        if ($valDate$$ >= $min$$1$$) {
          return $value$$107$$;
        }
      } else {
        if (null === $max$$1$$ || $valDate$$ <= $max$$1$$) {
          return $value$$107$$;
        }
      }
    }
    null !== $max$$1$$ && $valDate$$ > $max$$1$$ ? ($params$$6_valStr$$ = {value:$params$$6_valStr$$, max:$maxStr$$}, $summary$$13$$ = $messageSummaryRangeOverflow$$ ? $messageSummaryRangeOverflow$$ : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageSummary.rangeOverflow"), $detail$$16$$ = $messageDetailRangeOverflow$$ ? $translations$$3$$.$applyParameters$($messageDetailRangeOverflow$$, $params$$6_valStr$$) : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageDetail.rangeOverflow", 
    $params$$6_valStr$$)) : null !== $min$$1$$ && $valDate$$ < $min$$1$$ && ($params$$6_valStr$$ = {value:$params$$6_valStr$$, min:$minStr$$}, $summary$$13$$ = $customMessageSummary_messageSummaryRangeUnderflow$$ ? $customMessageSummary_messageSummaryRangeUnderflow$$ : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageSummary.rangeUnderflow"), $detail$$16$$ = $customMessageDetail_messageDetailRangeUnderflow$$ ? $translations$$3$$.$applyParameters$($customMessageDetail_messageDetailRangeUnderflow$$, 
    $params$$6_valStr$$) : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageDetail.rangeUnderflow", $params$$6_valStr$$));
    throw new $oj$$6$$.$ValidatorError$($summary$$13$$, $detail$$16$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.validate", {validate:$oj$$6$$.$DateTimeRangeValidator$.prototype.validate});
  $oj$$6$$.$DateTimeRangeValidator$.prototype.$getHint$ = function $$oj$$6$$$$DateTimeRangeValidator$$$$getHint$$() {
    var $hint$$3$$ = null, $hintMaximum_hints$$4$$ = this.$_hint$, $hintInRange$$ = $hintMaximum_hints$$4$$.inRange, $hintMinimum$$ = $hintMaximum_hints$$4$$.min, $hintMaximum_hints$$4$$ = $hintMaximum_hints$$4$$.max, $min$$2$$ = this.$_min$, $max$$2$$ = this.$_max$, $minStr$$1$$ = $min$$2$$ && this.$_converter$ ? this.$_converter$.format($min$$2$$) : $min$$2$$, $maxStr$$1$$ = $max$$2$$ && this.$_converter$ ? this.$_converter$.format($max$$2$$) : $max$$2$$, $params$$7$$ = null, $translations$$4$$ = 
    $oj$$6$$.$Translations$;
    null !== $min$$2$$ && null !== $max$$2$$ ? ($params$$7$$ = {min:$minStr$$1$$, max:$maxStr$$1$$}, $hint$$3$$ = $hintInRange$$ ? $translations$$4$$.$applyParameters$($hintInRange$$, $params$$7$$) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.hint.inRange", $params$$7$$)) : null !== $min$$2$$ ? ($params$$7$$ = {min:$minStr$$1$$}, $hint$$3$$ = $hintMinimum$$ ? $translations$$4$$.$applyParameters$($hintMinimum$$, $params$$7$$) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.hint.min", 
    $params$$7$$)) : null !== $max$$2$$ && ($params$$7$$ = {max:$maxStr$$1$$}, $hint$$3$$ = $hintMaximum_hints$$4$$ ? $translations$$4$$.$applyParameters$($hintMaximum_hints$$4$$, $params$$7$$) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.hint.max", $params$$7$$));
    return $hint$$3$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.getHint", {$getHint$:$oj$$6$$.$DateTimeRangeValidator$.prototype.$getHint$});
  $oj$$6$$.$IntlConverterUtils$ = {};
  $goog$exportPath_$$("IntlConverterUtils", $oj$$6$$.$IntlConverterUtils$, $oj$$6$$);
  $oj$$6$$.$IntlConverterUtils$.isoToLocalDate = function $$oj$$6$$$$IntlConverterUtils$$isoToLocalDate$($isoString$$) {
    return $OraI18nUtils$$.isoToLocalDate($isoString$$);
  };
  $oj$$6$$.$IntlConverterUtils$.dateToLocalIso = function $$oj$$6$$$$IntlConverterUtils$$dateToLocalIso$($date$$3$$) {
    return $OraI18nUtils$$.dateToLocalIso($date$$3$$);
  };
  $oj$$6$$.$IntlConverterUtils$._isoToLocalDateIgnoreTimezone = function $$oj$$6$$$$IntlConverterUtils$$_isoToLocalDateIgnoreTimezone$($isoString$$1$$) {
    return $OraI18nUtils$$._isoToLocalDateIgnoreTimezone($isoString$$1$$);
  };
  $oj$$6$$.$IntlConverterUtils$.$_getTimeZone$ = function $$oj$$6$$$$IntlConverterUtils$$$_getTimeZone$$($isoString$$2$$) {
    return $OraI18nUtils$$.$_getTimeZone$($isoString$$2$$);
  };
  $oj$$6$$.$IntlConverterUtils$.getConverterInstance = function $$oj$$6$$$$IntlConverterUtils$$getConverterInstance$($cf_converterOption$$1$$) {
    var $cTypeStr$$ = "", $cOptions$$ = {}, $converterInstance$$ = null;
    $cf_converterOption$$1$$ && ("object" === typeof $cf_converterOption$$1$$ && ($cf_converterOption$$1$$ instanceof $oj$$6$$.$Converter$ || $cf_converterOption$$1$$.parse && "function" === typeof $cf_converterOption$$1$$.parse || $cf_converterOption$$1$$.format && "function" === typeof $cf_converterOption$$1$$.format ? $converterInstance$$ = $cf_converterOption$$1$$ : ($cTypeStr$$ = $cf_converterOption$$1$$.type, $cOptions$$ = $cf_converterOption$$1$$.options || {})), $converterInstance$$ || ($cTypeStr$$ = 
    $cTypeStr$$ || $cf_converterOption$$1$$) && "string" === typeof $cTypeStr$$ && ($cf_converterOption$$1$$ = $oj$$6$$.$Validation$.$converterFactory$($cTypeStr$$), $converterInstance$$ = $cf_converterOption$$1$$.createConverter($cOptions$$)));
    return $converterInstance$$;
  };
  $oj$$6$$.$IntlConverterUtils$._minMaxIsoString = function $$oj$$6$$$$IntlConverterUtils$$_minMaxIsoString$($minMax$$, $value$$108$$) {
    if ($minMax$$) {
      $value$$108$$ = $value$$108$$ || this.dateToLocalIso(new Date);
      var $vTindex$$ = $value$$108$$.indexOf("T");
      0 === $minMax$$.indexOf("T") && 0 < $vTindex$$ && ($minMax$$ = $value$$108$$.substring(0, $vTindex$$) + $minMax$$);
    }
    return $minMax$$;
  };
  $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$ = function $$oj$$6$$$$IntlConverterUtils$$$__getConverterOptionError$$($errorCode$$, $parameterMap$$) {
    $oj$$6$$.$Assert$.$assertObject$($parameterMap$$);
    var $summary$$14$$ = "", $detail$$17_reqPropName$$ = "", $propName$$ = $parameterMap$$.propertyName, $propValueValid$$;
    "optionTypesMismatch" === $errorCode$$ ? ($detail$$17_reqPropName$$ = $parameterMap$$.requiredPropertyName, $propValueValid$$ = $parameterMap$$.requiredPropertyValueValid, $summary$$14$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionTypesMismatch.summary", {propertyName:$propName$$, propertyValue:$parameterMap$$.propertyValue, requiredPropertyName:$detail$$17_reqPropName$$}), $detail$$17_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($detail$$17_reqPropName$$, 
    $propValueValid$$)) : "optionTypeInvalid" === $errorCode$$ ? ($propName$$ = $parameterMap$$.propertyName, $propValueValid$$ = $parameterMap$$.propertyValueValid, $summary$$14$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionTypeInvalid.summary", {propertyName:$propName$$}), $detail$$17_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$, $propValueValid$$)) : "optionOutOfRange" === $errorCode$$ ? ($summary$$14$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionOutOfRange.summary", 
    {propertyName:$propName$$, propertyValue:$parameterMap$$.propertyValue}), $propValueValid$$ = $parameterMap$$.propertyValueValid, $detail$$17_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$, $propValueValid$$)) : "optionValueInvalid" === $errorCode$$ && ($summary$$14$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionValueInvalid.summary", {propertyName:$propName$$, propertyValue:$parameterMap$$.propertyValue}), $propValueValid$$ = $parameterMap$$.propertyValueHint, 
    $detail$$17_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$, $propValueValid$$));
    return new $oj$$6$$.$ConverterError$($summary$$14$$, $detail$$17_reqPropName$$);
  };
  $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$ = function $$oj$$6$$$$IntlConverterUtils$$$_getOptionValueDetailMessage$$($propName$$1$$, $propValueValid$$1$$) {
    var $resourceKey$$;
    return $propValueValid$$1$$ ? ("string" === typeof $propValueValid$$1$$ ? $resourceKey$$ = "oj-converter.optionHint.detail" : ($resourceKey$$ = "oj-converter.optionHint.detail-plural", $propValueValid$$1$$ = $propValueValid$$1$$.join($oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.plural-separator"))), $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$, {propertyName:$propName$$1$$, propertyValueValid:$propValueValid$$1$$})) : "";
  };
  $oj$$6$$.$IntlConverterUtils$.$__getNullFormattedValue$ = function $$oj$$6$$$$IntlConverterUtils$$$__getNullFormattedValue$$() {
    return "";
  };
  $oj$$6$$.$IntlDateTimeConverter$ = function $$oj$$6$$$$IntlDateTimeConverter$$($options$$147$$) {
    this.Init($options$$147$$);
  };
  $goog$exportPath_$$("IntlDateTimeConverter", $oj$$6$$.$IntlDateTimeConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$IntlDateTimeConverter$, $oj$$6$$.$DateTimeConverter$, "oj.IntlDateTimeConverter");
  $oj$$6$$.$IntlDateTimeConverter$.$_DEFAULT_DATE$ = new Date(1998, 10, 29, 15, 45, 31);
  $oj$$6$$.$IntlDateTimeConverter$.prototype.Init = function $$oj$$6$$$$IntlDateTimeConverter$$$Init$($options$$148$$) {
    $oj$$6$$.$IntlDateTimeConverter$.$superclass$.Init.call(this, $options$$148$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.Init", {Init:$oj$$6$$.$IntlDateTimeConverter$.prototype.Init});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_getWrapped$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_getWrapped$$() {
    this.$_wrapped$ || (this.$_wrapped$ = $OraDateTimeConverter$$.$getInstance$());
    return this.$_wrapped$;
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.format = function $$oj$$6$$$$IntlDateTimeConverter$$$format$($converterError_value$$109$$) {
    var $localeElements$$1$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$2$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$ = this.resolvedOptions();
    if (null == $converterError_value$$109$$ || "string" === typeof $converterError_value$$109$$ && 0 === $oj$$6$$.$StringUtils$.trim("" + $converterError_value$$109$$).length) {
      return "";
    }
    try {
      return this.$_getWrapped$().format($converterError_value$$109$$, $localeElements$$1$$, $resolvedOptions$$, $locale$$2$$);
    } catch ($e$$38$$) {
      throw $converterError_value$$109$$ = this.$_processConverterError$($e$$38$$, $converterError_value$$109$$), $converterError_value$$109$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.format", {format:$oj$$6$$.$IntlDateTimeConverter$.prototype.format});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$formatRelative$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$formatRelative$$($value$$110$$, $relativeOptions$$) {
    var $converterError$$1_localeElements$$2$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$3$$ = $oj$$6$$.$Config$.$getLocale$();
    try {
      return this.$_getWrapped$().$formatRelative$($value$$110$$, $converterError$$1_localeElements$$2$$, $relativeOptions$$, $locale$$3$$);
    } catch ($e$$39$$) {
      throw $converterError$$1_localeElements$$2$$ = this.$_processConverterError$($e$$39$$, $value$$110$$), $converterError$$1_localeElements$$2$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.formatRelative", {$formatRelative$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$formatRelative$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$getHint$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$getHint$$() {
    var $patternFromOptions$$ = this.resolvedOptions().patternFromOptions || this.$getOptions$().pattern;
    return $patternFromOptions$$ ? $patternFromOptions$$.toLowerCase() : "";
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.getHint", {$getHint$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$getHint$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_getHintValue$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_getHintValue$$() {
    var $value$$111$$ = "";
    try {
      $value$$111$$ = this.format($oj$$6$$.$IntlConverterUtils$.dateToLocalIso($oj$$6$$.$IntlDateTimeConverter$.$_DEFAULT_DATE$));
    } catch ($e$$40$$) {
      $e$$40$$ instanceof $oj$$6$$.$ConverterError$ && ($value$$111$$ = "");
    } finally {
      return $value$$111$$;
    }
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$getOptions$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$getOptions$$() {
    return $oj$$6$$.$IntlDateTimeConverter$.$superclass$.$getOptions$.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.getOptions", {$getOptions$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$getOptions$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.resolvedOptions = function $$oj$$6$$$$IntlDateTimeConverter$$$resolvedOptions$() {
    var $converterError$$2_localeElements$$3$$, $locale$$4$$ = $oj$$6$$.$Config$.$getLocale$(), $options$$149$$ = this.$getOptions$();
    if ($locale$$4$$ !== this.$_locale$ || !this.$_resolvedOptions$) {
      $converterError$$2_localeElements$$3$$ = $oj$$6$$.$LocaleData$.$__getBundle$();
      try {
        if (!$converterError$$2_localeElements$$3$$) {
          return $oj$$6$$.$Logger$.error("locale bundle for the current locale %s is unavailable", $locale$$4$$), {};
        }
        this.$_resolvedOptions$ = this.$_getWrapped$().resolvedOptions($converterError$$2_localeElements$$3$$, $options$$149$$, $locale$$4$$);
        this.$_locale$ = $locale$$4$$;
      } catch ($e$$41$$) {
        throw $converterError$$2_localeElements$$3$$ = this.$_processConverterError$($e$$41$$), $converterError$$2_localeElements$$3$$;
      }
    }
    return this.$_resolvedOptions$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$IntlDateTimeConverter$.prototype.resolvedOptions});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInDaySet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isHourInDaySet$$() {
    var $ro$$ = this.resolvedOptions(), $hour12$$ = $ro$$.hour12;
    return $ro$$.hour && !$hour12$$ ? !0 : !1;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isHourInDaySet", {$isHourInDaySet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInDaySet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInAMPMSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isHourInAMPMSet$$() {
    var $ro$$1$$ = this.resolvedOptions(), $hour12$$1$$ = $ro$$1$$.hour12;
    return $ro$$1$$.hour && $hour12$$1$$ ? !0 : !1;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isHourInAMPMSet", {$isHourInAMPMSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInAMPMSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMinuteSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMinuteSet$$() {
    return this.$_isOptionSet$("minute");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMinuteSet", {$isMinuteSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMinuteSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isSecondSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isSecondSet$$() {
    return this.$_isOptionSet$("second");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isSecondSet", {$isSecondSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isSecondSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMilliSecondSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMilliSecondSet$$() {
    return this.$_isOptionSet$("millisecond");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMilliSecondSet", {$isMilliSecondSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMilliSecondSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isYearSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isYearSet$$() {
    return this.$_isOptionSet$("year");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isYearSet", {$isYearSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isYearSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMonthSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMonthSet$$() {
    return this.$_isOptionSet$("month");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMonthSet", {$isMonthSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMonthSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isDaySet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isDaySet$$() {
    return this.$_isOptionSet$("day");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isDaySet", {$isDaySet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isDaySet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isDayNameSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isDayNameSet$$() {
    return this.$_isOptionSet$("weekday");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isDayNameSet", {$isDayNameSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isDayNameSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$calculateWeek$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$calculateWeek$$($value$$112$$) {
    return this.$_getWrapped$().$calculateWeek$($value$$112$$, $oj$$6$$.$LocaleData$.$__getBundle$(), $oj$$6$$.$Config$.$getLocale$());
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.calculateWeek", {$calculateWeek$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$calculateWeek$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.parse = function $$oj$$6$$$$IntlDateTimeConverter$$$parse$($converterError$$3_value$$113$$) {
    var $result$$7$$, $parsed$$1$$;
    if (null == $converterError$$3_value$$113$$ || "" === $converterError$$3_value$$113$$) {
      return null;
    }
    var $localeElements$$4$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$5$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$2$$ = this.resolvedOptions();
    try {
      return $result$$7$$ = this.$_getWrapped$().parse($converterError$$3_value$$113$$, $localeElements$$4$$, $resolvedOptions$$2$$, $locale$$5$$), ($parsed$$1$$ = $result$$7$$.value) && $result$$7$$.warning && $oj$$6$$.$Logger$.warn("The value " + $converterError$$3_value$$113$$ + " was leniently parsed to represent a date " + $parsed$$1$$.toString ? $parsed$$1$$.toString() : $parsed$$1$$), $parsed$$1$$;
    } catch ($e$$42$$) {
      throw $converterError$$3_value$$113$$ = this.$_processConverterError$($e$$42$$, $converterError$$3_value$$113$$), $converterError$$3_value$$113$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.parse", {parse:$oj$$6$$.$IntlDateTimeConverter$.prototype.parse});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_processConverterError$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_processConverterError$$($e$$43$$, $value$$114$$) {
    var $errorInfo_parameterMap$$1$$ = $e$$43$$.errorInfo, $errorCode$$1_summary$$15$$, $converterError$$4_detail$$18$$, $propName$$2$$, $resourceKey$$1$$;
    if ($errorInfo_parameterMap$$1$$) {
      if ($errorCode$$1_summary$$15$$ = $errorInfo_parameterMap$$1$$.errorCode, $errorInfo_parameterMap$$1$$ = $errorInfo_parameterMap$$1$$.parameterMap, $oj$$6$$.$Assert$.$assertObject$($errorInfo_parameterMap$$1$$), $propName$$2$$ = $errorInfo_parameterMap$$1$$.propertyName, $e$$43$$ instanceof TypeError) {
        if ("optionTypesMismatch" === $errorCode$$1_summary$$15$$ || "optionTypeInvalid" === $errorCode$$1_summary$$15$$) {
          $converterError$$4_detail$$18$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$15$$, $errorInfo_parameterMap$$1$$);
        }
      } else {
        $e$$43$$ instanceof RangeError ? "optionOutOfRange" === $errorCode$$1_summary$$15$$ ? $converterError$$4_detail$$18$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$15$$, $errorInfo_parameterMap$$1$$) : "datetimeOutOfRange" === $errorCode$$1_summary$$15$$ && ($errorCode$$1_summary$$15$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.datetimeOutOfRange.summary", {propertyName:$propName$$2$$, value:$errorInfo_parameterMap$$1$$.value}), 
        $converterError$$4_detail$$18$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.datetimeOutOfRange.detail", {minValue:$errorInfo_parameterMap$$1$$.minValue, maxValue:$errorInfo_parameterMap$$1$$.maxValue}), $converterError$$4_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$15$$, $converterError$$4_detail$$18$$)) : $e$$43$$ instanceof SyntaxError ? "optionValueInvalid" === $errorCode$$1_summary$$15$$ && ($converterError$$4_detail$$18$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$15$$, 
        $errorInfo_parameterMap$$1$$)) : $e$$43$$ instanceof Error && ("dateFormatMismatch" === $errorCode$$1_summary$$15$$ ? $resourceKey$$1$$ = "oj-converter.datetime.dateFormatMismatch.summary" : "timeFormatMismatch" === $errorCode$$1_summary$$15$$ ? $resourceKey$$1$$ = "oj-converter.datetime.timeFormatMismatch.summary" : "datetimeFormatMismatch" === $errorCode$$1_summary$$15$$ ? $resourceKey$$1$$ = "oj-converter.datetime.datetimeFormatMismatch.summary" : "dateToWeekdayMismatch" === $errorCode$$1_summary$$15$$ && 
        ($errorCode$$1_summary$$15$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.dateToWeekdayMismatch.summary", {date:$errorInfo_parameterMap$$1$$.date, weekday:$errorInfo_parameterMap$$1$$.weekday}), $converterError$$4_detail$$18$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.dateToWeekdayMismatch.detail"), $converterError$$4_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$15$$, $converterError$$4_detail$$18$$)), $resourceKey$$1$$ && 
        ($errorCode$$1_summary$$15$$ = $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$1$$, {value:$value$$114$$ || $errorInfo_parameterMap$$1$$.value, format:$errorInfo_parameterMap$$1$$.format}), $converterError$$4_detail$$18$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.hint.detail", {exampleValue:this.$_getHintValue$()}), $converterError$$4_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$15$$, $converterError$$4_detail$$18$$)));
      }
    }
    $converterError$$4_detail$$18$$ || ($converterError$$4_detail$$18$$ = $errorCode$$1_summary$$15$$ = $e$$43$$.message, $converterError$$4_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$15$$, $converterError$$4_detail$$18$$));
    return $converterError$$4_detail$$18$$;
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_isOptionSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_isOptionSet$$($optionName$$1$$) {
    return this.resolvedOptions()[$optionName$$1$$] ? !0 : !1;
  };
  $oj$$6$$.$IntlNumberConverter$ = function $$oj$$6$$$$IntlNumberConverter$$($options$$150$$) {
    this.Init($options$$150$$);
  };
  $goog$exportPath_$$("IntlNumberConverter", $oj$$6$$.$IntlNumberConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$IntlNumberConverter$, $oj$$6$$.$NumberConverter$, "oj.IntlNumberConverter");
  $oj$$6$$.$IntlNumberConverter$.prototype.Init = function $$oj$$6$$$$IntlNumberConverter$$$Init$($options$$151$$) {
    $oj$$6$$.$IntlNumberConverter$.$superclass$.Init.call(this, $options$$151$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.Init", {Init:$oj$$6$$.$IntlNumberConverter$.prototype.Init});
  $oj$$6$$.$IntlNumberConverter$.prototype.$_getWrapped$ = function $$oj$$6$$$$IntlNumberConverter$$$$_getWrapped$$() {
    this.$_wrapped$ || (this.$_wrapped$ = $OraNumberConverter$$.$getInstance$());
    return this.$_wrapped$;
  };
  $oj$$6$$.$IntlNumberConverter$.prototype.format = function $$oj$$6$$$$IntlNumberConverter$$$format$($converterError$$5_value$$115$$) {
    if (null == $converterError$$5_value$$115$$ || "string" === typeof $converterError$$5_value$$115$$ && 0 === $oj$$6$$.$StringUtils$.trim("" + $converterError$$5_value$$115$$).length || "number" === typeof $converterError$$5_value$$115$$ && isNaN($converterError$$5_value$$115$$)) {
      return "";
    }
    var $localeElements$$5$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$6$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$3$$ = this.resolvedOptions();
    try {
      return this.$_getWrapped$().format($converterError$$5_value$$115$$, $localeElements$$5$$, $resolvedOptions$$3$$, $locale$$6$$);
    } catch ($e$$44$$) {
      throw $converterError$$5_value$$115$$ = this.$_processConverterError$($e$$44$$, $converterError$$5_value$$115$$), $converterError$$5_value$$115$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.format", {format:$oj$$6$$.$IntlNumberConverter$.prototype.format});
  $oj$$6$$.$IntlNumberConverter$.prototype.$getHint$ = function $$oj$$6$$$$IntlNumberConverter$$$$getHint$$() {
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.getHint", {$getHint$:$oj$$6$$.$IntlNumberConverter$.prototype.$getHint$});
  $oj$$6$$.$IntlNumberConverter$.prototype.$getOptions$ = function $$oj$$6$$$$IntlNumberConverter$$$$getOptions$$() {
    return $oj$$6$$.$IntlNumberConverter$.$superclass$.$getOptions$.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.getOptions", {$getOptions$:$oj$$6$$.$IntlNumberConverter$.prototype.$getOptions$});
  $oj$$6$$.$IntlNumberConverter$.prototype.parse = function $$oj$$6$$$$IntlNumberConverter$$$parse$($converterError$$6_value$$116$$) {
    var $localeElements$$6$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$7$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$4$$ = this.resolvedOptions();
    if (null == $converterError$$6_value$$116$$ || "" === $converterError$$6_value$$116$$) {
      return null;
    }
    try {
      return this.$_getWrapped$().parse($oj$$6$$.$StringUtils$.trim($converterError$$6_value$$116$$), $localeElements$$6$$, $resolvedOptions$$4$$, $locale$$7$$);
    } catch ($e$$45$$) {
      throw $converterError$$6_value$$116$$ = this.$_processConverterError$($e$$45$$, $converterError$$6_value$$116$$), $converterError$$6_value$$116$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.parse", {parse:$oj$$6$$.$IntlNumberConverter$.prototype.parse});
  $oj$$6$$.$IntlNumberConverter$.prototype.resolvedOptions = function $$oj$$6$$$$IntlNumberConverter$$$resolvedOptions$() {
    var $converterError$$7_localeElements$$7$$, $locale$$8$$ = $oj$$6$$.$Config$.$getLocale$();
    if ($locale$$8$$ !== this.$_locale$ || !this.$_resolvedOptions$) {
      $converterError$$7_localeElements$$7$$ = $oj$$6$$.$LocaleData$.$__getBundle$();
      try {
        if (!$converterError$$7_localeElements$$7$$) {
          return $oj$$6$$.$Logger$.error("locale bundle for the current locale %s is unavailable", $locale$$8$$), {};
        }
        this.$_resolvedOptions$ = this.$_getWrapped$().resolvedOptions($converterError$$7_localeElements$$7$$, this.$getOptions$(), $locale$$8$$);
        this.$_locale$ = $locale$$8$$;
      } catch ($e$$46$$) {
        throw $converterError$$7_localeElements$$7$$ = this.$_processConverterError$($e$$46$$), $converterError$$7_localeElements$$7$$;
      }
    }
    return this.$_resolvedOptions$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$IntlNumberConverter$.prototype.resolvedOptions});
  $oj$$6$$.$IntlNumberConverter$.prototype.$_processConverterError$ = function $$oj$$6$$$$IntlNumberConverter$$$$_processConverterError$$($e$$47$$, $value$$117$$) {
    var $errorInfo$$1_parameterMap$$2$$ = $e$$47$$.errorInfo, $errorCode$$2_summary$$16$$, $converterError$$8_detail$$19$$, $resourceKey$$2$$;
    if ($errorInfo$$1_parameterMap$$2$$) {
      if ($errorCode$$2_summary$$16$$ = $errorInfo$$1_parameterMap$$2$$.errorCode, $errorInfo$$1_parameterMap$$2$$ = $errorInfo$$1_parameterMap$$2$$.parameterMap, $oj$$6$$.$Assert$.$assertObject$($errorInfo$$1_parameterMap$$2$$), $e$$47$$ instanceof TypeError) {
        if ("optionTypesMismatch" === $errorCode$$2_summary$$16$$ || "optionTypeInvalid" === $errorCode$$2_summary$$16$$) {
          $converterError$$8_detail$$19$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$2_summary$$16$$, $errorInfo$$1_parameterMap$$2$$);
        }
      } else {
        $e$$47$$ instanceof RangeError ? "optionOutOfRange" === $errorCode$$2_summary$$16$$ && ($converterError$$8_detail$$19$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$2_summary$$16$$, $errorInfo$$1_parameterMap$$2$$)) : $e$$47$$ instanceof SyntaxError ? "optionValueInvalid" === $errorCode$$2_summary$$16$$ && ($converterError$$8_detail$$19$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$2_summary$$16$$, $errorInfo$$1_parameterMap$$2$$)) : 
        $e$$47$$ instanceof Error && ("decimalFormatMismatch" === $errorCode$$2_summary$$16$$ ? $resourceKey$$2$$ = "oj-converter.number.decimalFormatMismatch.summary" : "currencyFormatMismatch" === $errorCode$$2_summary$$16$$ ? $resourceKey$$2$$ = "oj-converter.number.currencyFormatMismatch.summary" : "percentFormatMismatch" === $errorCode$$2_summary$$16$$ ? $resourceKey$$2$$ = "oj-converter.number.percentFormatMismatch.summary" : "unsupportedParseFormat" === $errorCode$$2_summary$$16$$ && ($errorCode$$2_summary$$16$$ = 
        $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.number.decimalFormatUnsupportedParse.summary"), $converterError$$8_detail$$19$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.number.decimalFormatUnsupportedParse.detail"), $converterError$$8_detail$$19$$ = new $oj$$6$$.$ConverterError$($errorCode$$2_summary$$16$$, $converterError$$8_detail$$19$$)), $resourceKey$$2$$ && ($errorCode$$2_summary$$16$$ = $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$2$$, 
        {value:$value$$117$$ || $errorInfo$$1_parameterMap$$2$$.value, format:$errorInfo$$1_parameterMap$$2$$.format}), $converterError$$8_detail$$19$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.hint.detail", {exampleValue:this.$_getHintValue$()}), $converterError$$8_detail$$19$$ = new $oj$$6$$.$ConverterError$($errorCode$$2_summary$$16$$, $converterError$$8_detail$$19$$)));
      }
    }
    $converterError$$8_detail$$19$$ || ($converterError$$8_detail$$19$$ = $errorCode$$2_summary$$16$$ = $e$$47$$.message, $converterError$$8_detail$$19$$ = new $oj$$6$$.$ConverterError$($errorCode$$2_summary$$16$$, $converterError$$8_detail$$19$$));
    return $converterError$$8_detail$$19$$;
  };
  $oj$$6$$.$IntlNumberConverter$.prototype.$_getHintValue$ = function $$oj$$6$$$$IntlNumberConverter$$$$_getHintValue$$() {
    var $value$$118$$ = "";
    try {
      $value$$118$$ = this.format(12345.98765);
    } catch ($e$$48$$) {
      $e$$48$$ instanceof $oj$$6$$.$ConverterError$ && ($value$$118$$ = "");
    } finally {
      return $value$$118$$;
    }
  };
  $oj$$6$$.$LengthValidator$ = function $$oj$$6$$$$LengthValidator$$($options$$152$$) {
    this.Init($options$$152$$);
  };
  $goog$exportPath_$$("LengthValidator", $oj$$6$$.$LengthValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$LengthValidator$, $oj$$6$$.$Validator$, "oj.LengthValidator");
  $oj$$6$$.$LengthValidator$.prototype.Init = function $$oj$$6$$$$LengthValidator$$$Init$($options$$153$$) {
    $oj$$6$$.$LengthValidator$.$superclass$.Init.call(this);
    this.$_min$ = $options$$153$$.min;
    this.$_max$ = $options$$153$$.max;
    $options$$153$$ && (this.$_hint$ = $options$$153$$.hint || {}, this.$_customMessageSummary$ = $options$$153$$.messageSummary || {}, this.$_customMessageDetail$ = $options$$153$$.messageDetail || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("LengthValidator.prototype.Init", {Init:$oj$$6$$.$LengthValidator$.prototype.Init});
  $oj$$6$$.$LengthValidator$.prototype.$getHint$ = function $$oj$$6$$$$LengthValidator$$$$getHint$$() {
    var $hint$$4_params$$8$$ = null, $hintExact_hints$$5$$ = this.$_hint$, $hintInRange$$1$$ = $hintExact_hints$$5$$.inRange, $hintMinimum$$1$$ = $hintExact_hints$$5$$.min, $hintMaximum$$1$$ = $hintExact_hints$$5$$.max, $hintExact_hints$$5$$ = $hintExact_hints$$5$$.exact, $translations$$5$$ = $oj$$6$$.$Translations$, $min$$3$$ = void 0 !== this.$_min$ ? parseInt(this.$_min$, 10) : null, $max$$3$$ = void 0 !== this.$_max$ ? parseInt(this.$_max$, 10) : null;
    null !== $min$$3$$ && null !== $max$$3$$ ? $min$$3$$ !== $max$$3$$ ? ($hint$$4_params$$8$$ = {min:$min$$3$$, max:$max$$3$$}, $hint$$4_params$$8$$ = $hintInRange$$1$$ ? $translations$$5$$.$applyParameters$($hintInRange$$1$$, $hint$$4_params$$8$$) : $translations$$5$$.$getTranslatedString$("oj-validator.length.hint.inRange", $hint$$4_params$$8$$)) : ($hint$$4_params$$8$$ = {length:$min$$3$$}, $hint$$4_params$$8$$ = $hintExact_hints$$5$$ ? $translations$$5$$.$applyParameters$($hintExact_hints$$5$$, 
    $hint$$4_params$$8$$) : $translations$$5$$.$getTranslatedString$("oj-validator.length.hint.exact", $hint$$4_params$$8$$)) : null !== $min$$3$$ ? ($hint$$4_params$$8$$ = {min:$min$$3$$}, $hint$$4_params$$8$$ = $hintMinimum$$1$$ ? $translations$$5$$.$applyParameters$($hintMinimum$$1$$, $hint$$4_params$$8$$) : $translations$$5$$.$getTranslatedString$("oj-validator.length.hint.min", $hint$$4_params$$8$$)) : null !== $max$$3$$ && ($hint$$4_params$$8$$ = {max:$max$$3$$}, $hint$$4_params$$8$$ = $hintMaximum$$1$$ ? 
    $translations$$5$$.$applyParameters$($hintMaximum$$1$$, $hint$$4_params$$8$$) : $translations$$5$$.$getTranslatedString$("oj-validator.length.hint.max", $hint$$4_params$$8$$));
    return $hint$$4_params$$8$$;
  };
  $oj$$6$$.$LengthValidator$.prototype.validate = function $$oj$$6$$$$LengthValidator$$$validate$($params$$9_value$$119$$) {
    var $string$$1_summary$$17$$ = "", $detail$$20_messageTooShort$$ = "", $string$$1_summary$$17$$ = "" + $params$$9_value$$119$$, $length$$12$$ = $string$$1_summary$$17$$.length, $customMessageDetail$$1_messageTooLong$$ = this.$_customMessageDetail$, $customMessageSummary$$1_translations$$6$$ = this.$_customMessageSummary$, $detail$$20_messageTooShort$$ = $customMessageDetail$$1_messageTooLong$$.tooShort, $customMessageDetail$$1_messageTooLong$$ = $customMessageDetail$$1_messageTooLong$$.tooLong, 
    $messageSummaryTooShort$$ = $customMessageSummary$$1_translations$$6$$.tooShort, $messageSummaryTooLong$$ = $customMessageSummary$$1_translations$$6$$.tooLong, $customMessageSummary$$1_translations$$6$$ = $oj$$6$$.$Translations$, $min$$4$$ = void 0 !== this.$_min$ ? parseInt(this.$_min$, 10) : null, $max$$4$$ = void 0 !== this.$_max$ ? parseInt(this.$_max$, 10) : null;
    if ((null === $min$$4$$ || $length$$12$$ >= this.$_min$) && (null === $max$$4$$ || $length$$12$$ <= this.$_max$)) {
      return $string$$1_summary$$17$$;
    }
    $length$$12$$ < this.$_min$ ? ($params$$9_value$$119$$ = {value:$params$$9_value$$119$$, min:$min$$4$$}, $string$$1_summary$$17$$ = $messageSummaryTooShort$$ ? $customMessageSummary$$1_translations$$6$$.$applyParameters$($messageSummaryTooShort$$, $params$$9_value$$119$$) : $customMessageSummary$$1_translations$$6$$.$getTranslatedString$("oj-validator.length.messageSummary.tooShort"), $detail$$20_messageTooShort$$ = $detail$$20_messageTooShort$$ ? $customMessageSummary$$1_translations$$6$$.$applyParameters$($detail$$20_messageTooShort$$, 
    $params$$9_value$$119$$) : $customMessageSummary$$1_translations$$6$$.$getTranslatedString$("oj-validator.length.messageDetail.tooShort", $params$$9_value$$119$$)) : ($params$$9_value$$119$$ = {value:$params$$9_value$$119$$, max:$max$$4$$}, $string$$1_summary$$17$$ = $messageSummaryTooLong$$ ? $customMessageSummary$$1_translations$$6$$.$applyParameters$($messageSummaryTooLong$$, $params$$9_value$$119$$) : $customMessageSummary$$1_translations$$6$$.$getTranslatedString$("oj-validator.length.messageSummary.tooLong"), 
    $detail$$20_messageTooShort$$ = $customMessageDetail$$1_messageTooLong$$ ? $customMessageSummary$$1_translations$$6$$.$applyParameters$($customMessageDetail$$1_messageTooLong$$, $params$$9_value$$119$$) : $customMessageSummary$$1_translations$$6$$.$getTranslatedString$("oj-validator.length.messageDetail.tooLong", $params$$9_value$$119$$));
    throw new $oj$$6$$.$ValidatorError$($string$$1_summary$$17$$, $detail$$20_messageTooShort$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("LengthValidator.prototype.validate", {validate:$oj$$6$$.$LengthValidator$.prototype.validate});
  $oj$$6$$.$NumberRangeValidator$ = function _NumberRangeValidator($options$$154$$) {
    this.Init($options$$154$$);
  };
  $goog$exportPath_$$("NumberRangeValidator", $oj$$6$$.$NumberRangeValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$NumberRangeValidator$, $oj$$6$$.$Validator$, "oj.NumberRangeValidator");
  $oj$$6$$.$NumberRangeValidator$.prototype.Init = function $$oj$$6$$$$NumberRangeValidator$$$Init$($options$$155$$) {
    $oj$$6$$.$NumberRangeValidator$.$superclass$.Init.call(this);
    $options$$155$$ && (this.$_min$ = $options$$155$$.min, this.$_max$ = $options$$155$$.max, this.$_converter$ = $oj$$6$$.$IntlConverterUtils$.getConverterInstance($options$$155$$.converter), this.$_hint$ = $options$$155$$.hint || {}, this.$_customMessageSummary$ = $options$$155$$.messageSummary || {}, this.$_customMessageDetail$ = $options$$155$$.messageDetail || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.Init", {Init:$oj$$6$$.$NumberRangeValidator$.prototype.Init});
  $oj$$6$$.$NumberRangeValidator$.prototype.validate = function $$oj$$6$$$$NumberRangeValidator$$$validate$($value$$120$$) {
    var $string$$2$$ = $value$$120$$ ? $value$$120$$.toString() : $value$$120$$, $numberValue$$ = parseFloat($string$$2$$), $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$ = this.$_customMessageSummary$, $customMessageDetail$$2_messageDetailRangeUnderflow$$1$$ = this.$_customMessageDetail$, $messageDetailRangeOverflow$$1$$ = $customMessageDetail$$2_messageDetailRangeUnderflow$$1$$.rangeOverflow, $customMessageDetail$$2_messageDetailRangeUnderflow$$1$$ = $customMessageDetail$$2_messageDetailRangeUnderflow$$1$$.rangeUnderflow, 
    $messageSummaryRangeOverflow$$1$$ = $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$.rangeOverflow, $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$ = $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$.rangeUnderflow, $min$$5$$ = void 0 !== this.$_min$ ? parseFloat(this.$_min$) : null, $max$$5$$ = void 0 !== this.$_max$ ? parseFloat(this.$_max$) : null, $minStr$$2$$ = $min$$5$$ && this.$_converter$ ? this.$_converter$.format($min$$5$$) : $min$$5$$, $maxStr$$2$$ = $max$$5$$ && 
    this.$_converter$ ? this.$_converter$.format($max$$5$$) : $max$$5$$, $summary$$18$$ = "", $detail$$21$$ = "", $params$$10$$ = null, $translations$$7$$ = $oj$$6$$.$Translations$;
    if (null === $value$$120$$) {
      return $value$$120$$;
    }
    if (null !== $min$$5$$ && null !== $max$$5$$) {
      if ($numberValue$$ >= $min$$5$$ && $numberValue$$ <= $max$$5$$ || $min$$5$$ > $max$$5$$) {
        return $string$$2$$;
      }
    } else {
      if (null !== $min$$5$$) {
        if ($numberValue$$ >= $min$$5$$) {
          return $string$$2$$;
        }
      } else {
        if (null === $max$$5$$ || $numberValue$$ <= $max$$5$$) {
          return $string$$2$$;
        }
      }
    }
    null !== $max$$5$$ && $numberValue$$ > $max$$5$$ ? ($params$$10$$ = {value:$value$$120$$, max:$maxStr$$2$$}, $summary$$18$$ = $messageSummaryRangeOverflow$$1$$ ? $messageSummaryRangeOverflow$$1$$ : $translations$$7$$.$getTranslatedString$("oj-validator.range.number.messageSummary.rangeOverflow"), $detail$$21$$ = $messageDetailRangeOverflow$$1$$ ? $translations$$7$$.$applyParameters$($messageDetailRangeOverflow$$1$$, $params$$10$$) : $translations$$7$$.$getTranslatedString$("oj-validator.range.number.messageDetail.rangeOverflow", 
    $params$$10$$)) : null !== $min$$5$$ && $numberValue$$ < $min$$5$$ && ($params$$10$$ = {value:$value$$120$$, min:$minStr$$2$$}, $summary$$18$$ = $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$ ? $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$ : $translations$$7$$.$getTranslatedString$("oj-validator.range.number.messageSummary.rangeUnderflow"), $detail$$21$$ = $customMessageDetail$$2_messageDetailRangeUnderflow$$1$$ ? $translations$$7$$.$applyParameters$($customMessageDetail$$2_messageDetailRangeUnderflow$$1$$, 
    $params$$10$$) : $translations$$7$$.$getTranslatedString$("oj-validator.range.number.messageDetail.rangeUnderflow", $params$$10$$));
    throw new $oj$$6$$.$ValidatorError$($summary$$18$$, $detail$$21$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.validate", {validate:$oj$$6$$.$NumberRangeValidator$.prototype.validate});
  $oj$$6$$.$NumberRangeValidator$.prototype.$getHint$ = function $$oj$$6$$$$NumberRangeValidator$$$$getHint$$() {
    var $hint$$5$$ = null, $hintMaximum$$2_hints$$6$$ = this.$_hint$, $hintInRange$$2$$ = $hintMaximum$$2_hints$$6$$.inRange, $hintMinimum$$2$$ = $hintMaximum$$2_hints$$6$$.min, $hintMaximum$$2_hints$$6$$ = $hintMaximum$$2_hints$$6$$.max, $translations$$8$$ = $oj$$6$$.$Translations$, $min$$6$$ = void 0 !== this.$_min$ ? parseFloat(this.$_min$) : null, $max$$6$$ = void 0 !== this.$_max$ ? parseFloat(this.$_max$) : null, $minStr$$3$$ = $min$$6$$ && this.$_converter$ ? this.$_converter$.format($min$$6$$) : 
    $min$$6$$, $maxStr$$3$$ = $max$$6$$ && this.$_converter$ ? this.$_converter$.format($max$$6$$) : $max$$6$$;
    null !== $min$$6$$ && null !== $max$$6$$ ? $hint$$5$$ = $hintInRange$$2$$ ? $translations$$8$$.$applyParameters$($hintInRange$$2$$, {min:$minStr$$3$$, max:$maxStr$$3$$}) : $translations$$8$$.$getTranslatedString$("oj-validator.range.number.hint.inRange", {min:$minStr$$3$$, max:$maxStr$$3$$}) : null !== $min$$6$$ ? $hint$$5$$ = $hintMinimum$$2$$ ? $translations$$8$$.$applyParameters$($hintMinimum$$2$$, {min:$minStr$$3$$}) : $translations$$8$$.$getTranslatedString$("oj-validator.range.number.hint.min", 
    {min:$minStr$$3$$}) : null !== $max$$6$$ && ($hint$$5$$ = $hintMaximum$$2_hints$$6$$ ? $translations$$8$$.$applyParameters$($hintMaximum$$2_hints$$6$$, {max:$maxStr$$3$$}) : $translations$$8$$.$getTranslatedString$("oj-validator.range.number.hint.max", {max:$maxStr$$3$$}));
    return $hint$$5$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.getHint", {$getHint$:$oj$$6$$.$NumberRangeValidator$.prototype.$getHint$});
  var $OraDateTimeConverter$$;
  $OraDateTimeConverter$$ = function() {
    function $_init$$() {
      return{format:function($value$$121$$, $localeElements$$8$$, $options$$156$$, $locale$$9$$) {
        var $ret$$8_val$$23$$;
        if ("number" === typeof $value$$121$$) {
          $ret$$8_val$$23$$ = new Date($value$$121$$);
        } else {
          if ("string" === typeof $value$$121$$) {
            if ("" === $OraI18nUtils$$.trim($value$$121$$)) {
              return null;
            }
            $ret$$8_val$$23$$ = $OraI18nUtils$$.isoToLocalDate($value$$121$$);
          } else {
            return null;
          }
        }
        if (2 >= arguments.length || void 0 === $options$$156$$) {
          $options$$156$$ = {year:"numeric", month:"numeric", day:"numeric"};
        }
        $ret$$8_val$$23$$ = $_formatImpl$$($ret$$8_val$$23$$, $localeElements$$8$$, $options$$156$$);
        var $numberingSystemKey$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$9$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$] && ($numberingSystemKey$$ = "latn");
        if ("latn" !== $numberingSystemKey$$) {
          var $idx$$2$$, $nativeRet$$ = [];
          for ($idx$$2$$ = 0;$idx$$2$$ < $ret$$8_val$$23$$.length;$idx$$2$$++) {
            "0" <= $ret$$8_val$$23$$[$idx$$2$$] && "9" >= $ret$$8_val$$23$$[$idx$$2$$] ? $nativeRet$$.push($OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$][$ret$$8_val$$23$$[$idx$$2$$]]) : $nativeRet$$.push($ret$$8_val$$23$$[$idx$$2$$]);
          }
          return $nativeRet$$.join("");
        }
        return $ret$$8_val$$23$$;
      }, $formatRelative$:function($value$$122$$, $localeElements$$9$$, $options$$157$$) {
        return $_formatRelativeImpl$$($value$$122$$, $localeElements$$9$$, $options$$157$$);
      }, parse:function($str$$13$$, $localeElements$$10$$, $options$$158$$, $locale$$10$$) {
        return $_parseImpl$$($str$$13$$, $localeElements$$10$$, $options$$158$$, $locale$$10$$);
      }, resolvedOptions:function($localeElements$$11$$, $options$$159$$, $locale$$11$$) {
        if (3 > arguments.length || void 0 === $locale$$11$$) {
          $locale$$11$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$11$$);
        }
        if (2 > arguments.length || void 0 === $options$$159$$) {
          $options$$159$$ = {year:"numeric", month:"numeric", day:"numeric"};
        }
        var $ecma_format$$7$$ = !1, $numberingSystemKey$$1_result$$8$$;
        $numberingSystemKey$$1_result$$8$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$11$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$1_result$$8$$] && ($numberingSystemKey$$1_result$$8$$ = "latn");
        if (void 0 !== $options$$159$$ && void 0 !== $options$$159$$.pattern) {
          return $numberingSystemKey$$1_result$$8$$ = $_getResolvedOptionsFromPattern$$($locale$$11$$, $numberingSystemKey$$1_result$$8$$, $options$$159$$.pattern), $numberingSystemKey$$1_result$$8$$.pattern = $options$$159$$.pattern, $numberingSystemKey$$1_result$$8$$;
        }
        if (void 0 !== $options$$159$$) {
          $numberingSystemKey$$1_result$$8$$ = {locale:$locale$$11$$, numberingSystem:$numberingSystemKey$$1_result$$8$$, calendar:"gregorian"};
          var $count$$23_getOption_patternFromOptions$$1_tStyle$$ = 0;
          for ($count$$23_getOption_patternFromOptions$$1_tStyle$$ in $options$$159$$) {
            $count$$23_getOption_patternFromOptions$$1_tStyle$$++;
          }
          if (0 == $count$$23_getOption_patternFromOptions$$1_tStyle$$) {
            return $numberingSystemKey$$1_result$$8$$.year = "numeric", $numberingSystemKey$$1_result$$8$$.month = "numeric", $numberingSystemKey$$1_result$$8$$.day = "numeric", $numberingSystemKey$$1_result$$8$$;
          }
          var $count$$23_getOption_patternFromOptions$$1_tStyle$$ = $OraI18nUtils$$.$getGetOption$($options$$159$$, "OraDateTimeConverter.resolvedOptions"), $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("year", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$8$$.year = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("era", "string", ["narrow", "short", "long"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$8$$.era = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$8$$.month = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("day", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$8$$.day = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("weekday", "string", ["narrow", "short", "long"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$8$$.weekday = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("hour", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$8$$.hour = $fmtType_option$$14$$, $ecma_format$$7$$ = !0, $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("hour12", "boolean", [!0, !1]), void 0 === $fmtType_option$$14$$ && ($fmtType_option$$14$$ = $_isHour12$$($localeElements$$11$$)), $numberingSystemKey$$1_result$$8$$.hour12 = $fmtType_option$$14$$);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("minute", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$8$$.minute = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("second", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$8$$.second = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $numberingSystemKey$$1_result$$8$$["two-digit-year-start"] = $_get2DigitYearStart$$($options$$159$$);
          if (!$ecma_format$$7$$) {
            var $ecma_format$$7$$ = $_expandPredefinedStylesFormat$$($options$$159$$, $localeElements$$11$$, $OraDateTimeConverter$$.resolvedOptions), $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("formatType", "string", ["date", "time", "datetime"], "date"), $dStyle$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("dateFormat", "string", ["short", "medium", "long", "full"], "short"), $count$$23_getOption_patternFromOptions$$1_tStyle$$ = $count$$23_getOption_patternFromOptions$$1_tStyle$$("timeFormat", 
            "string", ["short", "medium", "long", "full"], "short");
            $numberingSystemKey$$1_result$$8$$.formatType = $fmtType_option$$14$$;
            if ("datetime" === $fmtType_option$$14$$ || "date" === $fmtType_option$$14$$) {
              $numberingSystemKey$$1_result$$8$$.dateFormat = $dStyle$$;
            }
            if ("datetime" === $fmtType_option$$14$$ || "time" === $fmtType_option$$14$$) {
              $numberingSystemKey$$1_result$$8$$.timeFormat = $count$$23_getOption_patternFromOptions$$1_tStyle$$;
            }
            $numberingSystemKey$$1_result$$8$$.patternFromOptions = $ecma_format$$7$$;
            return $numberingSystemKey$$1_result$$8$$;
          }
          $numberingSystemKey$$1_result$$8$$.patternFromOptions = $_expandFormat$$($options$$159$$, $localeElements$$11$$, "OraDateTimeConverter.resolvedOptions");
          return $numberingSystemKey$$1_result$$8$$;
        }
        $count$$23_getOption_patternFromOptions$$1_tStyle$$ = $_expandFormat$$({year:"numeric", month:"numeric", day:"numeric"}, $localeElements$$11$$, "OraDateTimeConverter.resolvedOptions");
        return{calendar:"gregorian", locale:$locale$$11$$, numberingSystem:$numberingSystemKey$$1_result$$8$$, year:"numeric", month:"numeric", day:"numeric", patternFromOptions:$count$$23_getOption_patternFromOptions$$1_tStyle$$};
      }, $calculateWeek$:function($d$$1_date$$4_time$$) {
        $d$$1_date$$4_time$$ = $OraI18nUtils$$.isoToLocalDate($d$$1_date$$4_time$$);
        var $checkDate$$ = new Date($d$$1_date$$4_time$$.getTime());
        $checkDate$$.setDate($checkDate$$.getDate() + 4 - ($checkDate$$.getDay() || 7));
        $d$$1_date$$4_time$$ = $checkDate$$.getTime();
        $checkDate$$.setMonth(0);
        $checkDate$$.setDate(1);
        return Math.floor(Math.round(($d$$1_date$$4_time$$ - $checkDate$$) / 864E5) / 7) + 1;
      }};
    }
    var $_appendPreOrPostMatch$$, $_expandFormat$$, $_parseExact$$, $_formatImpl$$, $_parseImpl$$, $_formatRelativeImpl$$, $_throwInvalidDateFormat$$, $_getResolvedOptionsFromPattern$$, $_dateTimeStyle$$, $_get2DigitYearStart$$, $_isHour12$$, $_dateTimeStyleFromPattern$$, $_expandPredefinedStylesFormat$$, $_localeDataCache$$ = {}, $_isLeapYear$$, $_getDaysInMonth$$, $instance$$12$$, $_toAvailableFormatsKeys$$, $_expandAvailableDateFormatsPattern$$, $_expandAvailableTimeFormatsPattern$$, $_basicFormatMatcher$$, 
    $_appendToKey$$, $_getDaysDif$$, $_getDayIndex$$, $_isSameYear$$, $_isNextYear$$, $_isPrevYear$$, $_isSameMonth$$, $_isNextMonth$$, $_isPrevMonth$$, $_isSameWeek$$, $_isNextWeek$$, $_isPrevWeek$$, $_isSameDay$$, $_isNextDay$$, $_isPrevDay$$, $_expandYear$$, $_getTokenIndex$$, $_parseLenient$$, $_parseLenientyMEd$$, $_parseLenientyMMMEd$$, $_parseLenienthms$$, $_getDayIndex1$$, $_getMonthIndex$$, $_getParseRegExp$$, $_validateRange$$, $_arrayIndexOfDay$$, $_arrayIndexOfMonth$$, $_throwDateFormatMismatch$$, 
    $_getPatternFromSingleToken$$, $_throwWeekdayMismatch$$, $_createParseISOString$$, $_getTimePart$$, $_getNameIndex$$, $_getWeekdayName$$, $_YEAR_AND_DATE_REGEXP$$ = /(\d{1,4})\D+?(\d{1,4})/g, $_YMD_REGEXP$$ = /(\d{1,4})\D+?(\d{1,4})\D+?(\d{1,4})/g, $_MONTH_REGEXP_FMT$$ = /^[M][^M]|[^M]M[^M]/g, $_MONTH_REGEXP_STD$$ = /^[L][^L]|[^L]L[^L]/g, $_DAY_REGEXP$$ = /^[d][^d]|[^d]d[^d]/g, $_HOUR_REGEXP$$ = /(?:^|[^h])h[^h]|[^H]H[^H]|[^k]k[^k]|[^K]K[^K]/, $_TIME_REGEXP$$ = /(\d{1,2})(?:\D+?(\d{1,2}))?(?:\D+?(\d{1,2}))?(?:\D+?(\d{1,3}))?/g, 
    $_TIME_FORMAT_REGEXP$$ = /h|H|K|k/g, $_ESCAPE_REGEXP$$ = /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, $_TOKEN_REGEXP$$ = /ccccc|cccc|ccc|cc|c|EEEEE|EEEE|EEE|EE|E|dd|d|MMMMM|MMMM|MMM|MM|M|LLLLL|LLLL|LLL|LL|L|yyyy|yy|y|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|aa|a|SSS|SS|S|zzzz|zzz|zz|z|GGGGG|GGGG|GGG|GG|G/g, $_TIME_FORMATS_Z_TOKENS$$ = /\s?(?:\(|\[)??z{1,4}(?:\)|\])?/g, $_DAYS_INDEXES$$ = {0:"sun", 1:"mon", 2:"tue", 3:"wed", 4:"thu", 5:"fri", 6:"sat"}, $_PROPERTIES_MAP$$ = {MMM:{token:"months", style:"format", mLen:"abbreviated", 
    matchIndex:0, key:"month", value:"short", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, MMMM:{token:"months", style:"format", mLen:"wide", matchIndex:0, key:"month", value:"long", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, MMMMM:{token:"months", style:"format", mLen:"narrow", matchIndex:0, key:"month", value:"narrow", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, LLL:{token:"months", style:"stand-alone", mLen:"abbreviated", matchIndex:1, key:"month", value:"short", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, 
    LLLL:{token:"months", style:"stand-alone", mLen:"wide", matchIndex:1, key:"month", value:"long", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, LLLLL:{token:"months", style:"stand-alone", mLen:"narrow", matchIndex:1, key:"month", value:"narrow", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, E:{token:"days", style:"format", dLen:"abbreviated", matchIndex:0, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EE:{token:"days", style:"format", dLen:"abbreviated", matchIndex:0, key:"weekday", 
    value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EEE:{token:"days", style:"format", dLen:"abbreviated", matchIndex:0, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EEEE:{token:"days", style:"format", dLen:"wide", matchIndex:0, key:"weekday", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, EEEEE:{token:"days", style:"format", dLen:"narrow", matchIndex:0, key:"weekday", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, c:{token:"days", style:"stand-alone", dLen:"abbreviated", matchIndex:1, key:"weekday", 
    value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, cc:{token:"days", style:"stand-alone", dLen:"abbreviated", matchIndex:1, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, ccc:{token:"days", style:"stand-alone", dLen:"abbreviated", matchIndex:1, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, cccc:{token:"days", style:"stand-alone", dLen:"wide", matchIndex:1, key:"weekday", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, ccccc:{token:"days", style:"stand-alone", dLen:"narrow", matchIndex:1, 
    key:"weekday", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, h:{token:"time", timePart:"hour", start1:0, end1:11, start2:1, end2:12, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, hh:{token:"time", timePart:"hour", start1:0, end1:11, start2:1, end2:12, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, K:{token:"time", timePart:"hour", start1:0, end1:11, start2:0, end2:11, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, KK:{token:"time", timePart:"hour", start1:0, end1:11, start2:0, end2:11, 
    key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, H:{token:"time", timePart:"hour", start1:0, end1:23, start2:0, end2:23, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, HH:{token:"time", timePart:"hour", start1:0, end1:23, start2:0, end2:23, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, k:{token:"time", timePart:"hour", start1:0, end1:23, start2:1, end2:24, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, kk:{token:"time", timePart:"hour", start1:0, end1:23, start2:1, end2:24, key:"hour", 
    value:"2-digit", regExp:"(\\d\\d?)"}, m:{token:"time", timePart:"minute", start1:0, end1:59, start2:0, end2:59, key:"minute", value:"numeric", regExp:"(\\d\\d?)"}, mm:{token:"time", timePart:"minute", start1:0, end1:59, start2:0, end2:59, key:"minute", value:"2-digit", regExp:"(\\d\\d?)"}, s:{token:"time", timePart:"second", start1:0, end1:59, start2:0, end2:59, key:"second", value:"numeric", regExp:"(\\d\\d?)"}, ss:{token:"time", timePart:"second", start1:0, end1:59, start2:0, end2:59, key:"second", 
    value:"2-digit", regExp:"(\\d\\d?)"}, S:{token:"time", timePart:"millisec", start1:0, end1:999, start2:0, end2:999, key:"millisecond", value:"numeric", regExp:"(\\d{1,3})"}, SS:{token:"time", timePart:"millisec", start1:0, end1:999, start2:0, end2:999, key:"millisecond", value:"numeric", regExp:"(\\d{1,3})"}, SSS:{token:"time", timePart:"millisec", start1:0, end1:999, start2:0, end2:999, key:"millisecond", value:"numeric", regExp:"(\\d{1,3})"}, d:{token:"dayOfMonth", key:"day", value:"numeric", 
    getPartIdx:2, regExp:"(\\d\\d?)"}, dd:{token:"dayOfMonth", key:"day", value:"2-digit", getPartIdx:2, regExp:"(\\d\\d?)"}, M:{token:"monthIndex", key:"month", value:"numeric", getPartIdx:1, regExp:"(\\d\\d?)"}, MM:{token:"monthIndex", key:"month", value:"2-digit", getPartIdx:1, regExp:"(\\d\\d?)"}, L:{token:"monthIndex", key:"month", value:"numeric", getPartIdx:1, regExp:"(\\d\\d?)"}, LL:{token:"monthIndex", key:"month", value:"2-digit", getPartIdx:1, regExp:"(\\d\\d?)"}, y:{token:"year", key:"year", 
    value:"numeric", regExp:"(\\d{1,4})"}, yy:{token:"year", key:"year", value:"2-digit", regExp:"(\\d\\d?)"}, yyyy:{token:"year", key:"year", value:"numeric", regExp:"(\\d{1,4})"}, a:{token:"ampm", key:"hour12", value:!0, regExp:"(\\D*)"}, z:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, zz:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, zzz:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, zzzz:{token:"tz", key:"timeZoneName", 
    value:"long", regExp:"([+-]?\\d{1,4})"}, G:{token:"era", key:"era", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, GG:{token:"era", key:"era", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, GGG:{token:"era", key:"era", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, GGGG:{token:"era", key:"era", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, GGGGG:{token:"era", key:"era", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, "/":{token:"slash", regExp:"(\\/)"}};
    $_get2DigitYearStart$$ = function $$_get2DigitYearStart$$$($option$$15_options$$160$$) {
      $option$$15_options$$160$$ = $option$$15_options$$160$$["two-digit-year-start"];
      if (void 0 === $option$$15_options$$160$$ || isNaN($option$$15_options$$160$$)) {
        $option$$15_options$$160$$ = 1950;
      }
      return $option$$15_options$$160$$ = parseInt($option$$15_options$$160$$, 10);
    };
    $_isHour12$$ = function $$_isHour12$$$($localeElements$$12$$) {
      var $territory$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$12$$)).region || "001";
      return "h" === $localeElements$$12$$.supplemental.prefferedHours[$territory$$];
    };
    $_isLeapYear$$ = function $$_isLeapYear$$$($y$$35$$) {
      return 0 == $y$$35$$ % 400 ? !0 : 0 == $y$$35$$ % 100 ? !1 : 0 == $y$$35$$ % 4 ? !0 : !1;
    };
    $_getDaysInMonth$$ = function $$_getDaysInMonth$$$($y$$36$$, $m$$11$$) {
      switch($m$$11$$) {
        case 0:
        ;
        case 2:
        ;
        case 4:
        ;
        case 6:
        ;
        case 7:
        ;
        case 9:
        ;
        case 11:
          return 31;
        case 1:
          return $_isLeapYear$$($y$$36$$) ? 29 : 28;
        default:
          return 30;
      }
    };
    $_expandPredefinedStylesFormat$$ = function $$_expandPredefinedStylesFormat$$$($fmtType$$1_options$$161$$, $dateFormats_localeElements$$13_mainNode$$1$$, $caller$$1_dStyle$$1$$) {
      $dateFormats_localeElements$$13_mainNode$$1$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($dateFormats_localeElements$$13_mainNode$$1$$);
      var $getOption$$1_tStyle$$1$$ = $OraI18nUtils$$.$getGetOption$($fmtType$$1_options$$161$$, $caller$$1_dStyle$$1$$);
      $fmtType$$1_options$$161$$ = $getOption$$1_tStyle$$1$$("formatType", "string", ["date", "time", "datetime"], "date");
      $caller$$1_dStyle$$1$$ = $getOption$$1_tStyle$$1$$("dateFormat", "string", ["short", "medium", "long", "full"], "short");
      var $getOption$$1_tStyle$$1$$ = $getOption$$1_tStyle$$1$$("timeFormat", "string", ["short", "medium", "long", "full"], "short"), $cal_timeFormats$$ = $dateFormats_localeElements$$13_mainNode$$1$$.dates.calendars.gregorian;
      $dateFormats_localeElements$$13_mainNode$$1$$ = $cal_timeFormats$$.dateFormats;
      var $cal_timeFormats$$ = $cal_timeFormats$$.timeFormats, $dStyleFmt$$, $tStyleFmt$$, $format$$8$$;
      switch($caller$$1_dStyle$$1$$) {
        case "full":
          $dStyleFmt$$ = $dateFormats_localeElements$$13_mainNode$$1$$.full;
          break;
        case "long":
          $dStyleFmt$$ = $dateFormats_localeElements$$13_mainNode$$1$$["long"];
          break;
        case "medium":
          $dStyleFmt$$ = $dateFormats_localeElements$$13_mainNode$$1$$.medium;
          break;
        case "short":
          $dStyleFmt$$ = $dateFormats_localeElements$$13_mainNode$$1$$["short"];
      }
      switch($getOption$$1_tStyle$$1$$) {
        case "full":
          $tStyleFmt$$ = $cal_timeFormats$$.full;
          break;
        case "long":
          $tStyleFmt$$ = $cal_timeFormats$$["long"];
          break;
        case "medium":
          $tStyleFmt$$ = $cal_timeFormats$$.medium;
          break;
        case "short":
          $tStyleFmt$$ = $cal_timeFormats$$["short"];
      }
      void 0 === $dStyleFmt$$ || "datetime" !== $fmtType$$1_options$$161$$ && "date" !== $fmtType$$1_options$$161$$ || ($format$$8$$ = $dStyleFmt$$);
      void 0 === $tStyleFmt$$ || "datetime" !== $fmtType$$1_options$$161$$ && "time" !== $fmtType$$1_options$$161$$ || ($tStyleFmt$$ = $tStyleFmt$$.replace($_TIME_FORMATS_Z_TOKENS$$, ""), $format$$8$$ = $format$$8$$ ? $format$$8$$ + " " + $tStyleFmt$$ : $tStyleFmt$$);
      return $format$$8$$;
    };
    $_appendPreOrPostMatch$$ = function $$_appendPreOrPostMatch$$$($preMatch$$, $strings$$) {
      for (var $quoteCount$$ = 0, $escaped$$2$$ = !1, $i$$110$$ = 0, $il$$ = $preMatch$$.length;$i$$110$$ < $il$$;$i$$110$$++) {
        var $c$$32$$ = $preMatch$$.charAt($i$$110$$);
        switch($c$$32$$) {
          case "'":
            $escaped$$2$$ ? $strings$$.push("'") : $quoteCount$$++;
            $escaped$$2$$ = !1;
            break;
          case "\\":
            $escaped$$2$$ && $strings$$.push("\\");
            $escaped$$2$$ = !$escaped$$2$$;
            break;
          default:
            $strings$$.push($c$$32$$), $escaped$$2$$ = !1;
        }
      }
      return $quoteCount$$;
    };
    $_throwInvalidDateFormat$$ = function $$_throwInvalidDateFormat$$$($format$$9$$, $isTime_options$$162$$, $error$$17_m$$12$$) {
      var $isDate_samplePattern$$;
      $isDate_samplePattern$$ = void 0 !== $isTime_options$$162$$.year || void 0 !== $isTime_options$$162$$.month || void 0 !== $isTime_options$$162$$.weekday || void 0 !== $isTime_options$$162$$.day;
      $isTime_options$$162$$ = void 0 !== $isTime_options$$162$$.hour || void 0 !== $isTime_options$$162$$.minute || void 0 !== $isTime_options$$162$$.second;
      $isDate_samplePattern$$ = $isDate_samplePattern$$ && $isTime_options$$162$$ ? "MM/dd/yy hh:mm:ss a" : $isDate_samplePattern$$ ? "MM/dd/yy" : "hh:mm:ss a";
      $error$$17_m$$12$$ = new SyntaxError("Unexpected character(s) " + $error$$17_m$$12$$ + ' encountered in the pattern "' + $format$$9$$ + ' An example of a valid pattern is "' + $isDate_samplePattern$$ + '".');
      $error$$17_m$$12$$.errorInfo = {errorCode:"optionValueInvalid", parameterMap:{propertyName:"pattern", propertyValue:$format$$9$$, "propertyValueHint ":$isDate_samplePattern$$}};
      throw $error$$17_m$$12$$;
    };
    $_basicFormatMatcher$$ = function $$_basicFormatMatcher$$$($dateTimeKeys$$, $availableFormats_localeElements$$14$$, $dateTimeFormats_isDate$$1$$, $hour12$$3$$) {
      $availableFormats_localeElements$$14$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($availableFormats_localeElements$$14$$).dates.calendars.gregorian.dateTimeFormats.availableFormats;
      $dateTimeFormats_isDate$$1$$ = "weekday era year month day hour minute second timeZoneName".split(" ");
      var $values$$6$$ = {"2-digit":0, numeric:1, narrow:2, "short":3, "long":4}, $bestScore$$ = -Infinity, $bestFormat$$ = void 0, $formatProp_m$$13_match$$1$$, $delta$$2_optionsProp_skip$$, $f$$1$$;
      for ($f$$1$$ in $availableFormats_localeElements$$14$$) {
        $delta$$2_optionsProp_skip$$ = !1;
        var $format$$10$$ = {};
        $format$$10$$.pattern = $availableFormats_localeElements$$14$$[$f$$1$$];
        for (var $score$$ = 0;null !== ($formatProp_m$$13_match$$1$$ = $_TOKEN_REGEXP$$.exec($f$$1$$));) {
          $formatProp_m$$13_match$$1$$ = $formatProp_m$$13_match$$1$$[0], "h" !== $formatProp_m$$13_match$$1$$ && "hh" !== $formatProp_m$$13_match$$1$$ || $hour12$$3$$ ? "H" !== $formatProp_m$$13_match$$1$$ && "HH" !== $formatProp_m$$13_match$$1$$ || !$hour12$$3$$ ? void 0 !== $_PROPERTIES_MAP$$[$formatProp_m$$13_match$$1$$] && ($format$$10$$[$_PROPERTIES_MAP$$[$formatProp_m$$13_match$$1$$].key] = $_PROPERTIES_MAP$$[$formatProp_m$$13_match$$1$$].value) : $delta$$2_optionsProp_skip$$ = !0 : $delta$$2_optionsProp_skip$$ = 
          !0;
        }
        if (!$delta$$2_optionsProp_skip$$) {
          for (var $property$$13$$ in $dateTimeFormats_isDate$$1$$) {
            $delta$$2_optionsProp_skip$$ = $dateTimeKeys$$[$dateTimeFormats_isDate$$1$$[$property$$13$$]], $formatProp_m$$13_match$$1$$ = $format$$10$$[$dateTimeFormats_isDate$$1$$[$property$$13$$]], void 0 === $delta$$2_optionsProp_skip$$ && void 0 !== $formatProp_m$$13_match$$1$$ ? $score$$ -= 20 : void 0 !== $delta$$2_optionsProp_skip$$ && void 0 === $formatProp_m$$13_match$$1$$ ? $score$$ -= 120 : void 0 !== $delta$$2_optionsProp_skip$$ && void 0 !== $formatProp_m$$13_match$$1$$ && ($delta$$2_optionsProp_skip$$ = 
            Math.max(Math.min($values$$6$$[$formatProp_m$$13_match$$1$$] - $values$$6$$[$delta$$2_optionsProp_skip$$], 2), -2), 2 === $delta$$2_optionsProp_skip$$ ? $score$$ -= 6 : 1 === $delta$$2_optionsProp_skip$$ ? $score$$ -= 3 : -1 === $delta$$2_optionsProp_skip$$ ? $score$$ -= 6 : -2 === $delta$$2_optionsProp_skip$$ && ($score$$ -= 8));
          }
          $score$$ > $bestScore$$ && ($bestScore$$ = $score$$, $bestFormat$$ = $format$$10$$);
        }
      }
      return void 0 !== $bestFormat$$ ? $bestFormat$$.pattern : null;
    };
    $_toAvailableFormatsKeys$$ = function $$_toAvailableFormatsKeys$$$($getOption$$2_options$$163$$, $localeElements$$15$$, $caller$$2_option$$16$$) {
      var $dateKey$$ = "", $timeKey$$ = "", $dateOptions$$ = {}, $timeOptions$$ = {};
      $getOption$$2_options$$163$$ = $OraI18nUtils$$.$getGetOption$($getOption$$2_options$$163$$, $caller$$2_option$$16$$);
      $caller$$2_option$$16$$ = $getOption$$2_options$$163$$("era", "string", ["narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "era", $caller$$2_option$$16$$, {narrow:"GGGGG", "short":"GGG", "long":"GGGG"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$163$$("year", "string", ["2-digit", "numeric"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "year", $caller$$2_option$$16$$, {"2-digit":"yy", numeric:"y"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$163$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "month", $caller$$2_option$$16$$, {"2-digit":"MM", numeric:"M", narrow:"MMMMM", "short":"MMM", "long":"MMMM"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$163$$("weekday", "string", ["narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "weekday", $caller$$2_option$$16$$, {narrow:"EEEEE", "short":"E", "long":"EEEE"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$163$$("day", "string", ["2-digit", "numeric"]);
      var $dateKey$$ = $dateKey$$ + $_appendToKey$$($dateOptions$$, "day", $caller$$2_option$$16$$, {"2-digit":"dd", numeric:"d"}), $hr12$$ = $getOption$$2_options$$163$$("hour12", "boolean", [!0, !1]);
      void 0 === $hr12$$ && ($hr12$$ = $_isHour12$$($localeElements$$15$$));
      $caller$$2_option$$16$$ = $getOption$$2_options$$163$$("hour", "string", ["2-digit", "numeric"]);
      $timeKey$$ = !0 === $hr12$$ ? $timeKey$$ + $_appendToKey$$($timeOptions$$, "hour", $caller$$2_option$$16$$, {"2-digit":"hh", numeric:"h"}) : $timeKey$$ + $_appendToKey$$($timeOptions$$, "hour", $caller$$2_option$$16$$, {"2-digit":"HH", numeric:"H"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$163$$("minute", "string", ["2-digit", "numeric"]);
      $timeKey$$ += $_appendToKey$$($timeOptions$$, "minute", $caller$$2_option$$16$$, {"2-digit":"mm", numeric:"m"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$163$$("second", "string", ["2-digit", "numeric"]);
      $timeKey$$ += $_appendToKey$$($timeOptions$$, "second", $caller$$2_option$$16$$, {"2-digit":"ss", numeric:"s"});
      return[$dateKey$$, $timeKey$$, $dateOptions$$, $timeOptions$$];
    };
    $_appendToKey$$ = function $$_appendToKey$$$($obj$$49$$, $prop$$54$$, $option$$17$$, $pairs$$) {
      return void 0 !== $option$$17$$ ? ($obj$$49$$[$prop$$54$$] = $option$$17$$, $pairs$$[$option$$17$$]) : "";
    };
    $_expandAvailableDateFormatsPattern$$ = function $$_expandAvailableDateFormatsPattern$$$($formatTemplate$$, $getOption$$3_options$$164$$, $caller$$3_match$$2_option$$18$$) {
      var $datePat$$ = $formatTemplate$$;
      $getOption$$3_options$$164$$ = $OraI18nUtils$$.$getGetOption$($getOption$$3_options$$164$$, $caller$$3_match$$2_option$$18$$);
      $caller$$3_match$$2_option$$18$$ = $getOption$$3_options$$164$$("year", "string", ["2-digit", "numeric"]);
      var $pairs$$1$$ = {"2-digit":"yy", numeric:"yyyy"};
      void 0 !== $caller$$3_match$$2_option$$18$$ && ($datePat$$ = $datePat$$.replace(/y{1,4}/, $pairs$$1$$[$caller$$3_match$$2_option$$18$$]));
      $caller$$3_match$$2_option$$18$$ = $getOption$$3_options$$164$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
      if (void 0 !== $caller$$3_match$$2_option$$18$$) {
        var $pairs$$1$$ = {"2-digit":"MM", numeric:"M", narrow:"MMMMM", "short":"MMM", "long":"MMMM"}, $pairsL$$ = {"2-digit":"LL", numeric:"L", narrow:"LLLLL", "short":"LLL", "long":"LLLL"};
        void 0 !== $pairs$$1$$[$caller$$3_match$$2_option$$18$$] && 2 < $pairs$$1$$[$caller$$3_match$$2_option$$18$$].length ? ($datePat$$ = $datePat$$.replace(/M{3,5}/, $pairs$$1$$[$caller$$3_match$$2_option$$18$$]), $datePat$$ = $datePat$$.replace(/L{3,5}/, $pairsL$$[$caller$$3_match$$2_option$$18$$])) : "2-digit" === $caller$$3_match$$2_option$$18$$ && ($_MONTH_REGEXP_FMT$$.lastIndex = 0, ($caller$$3_match$$2_option$$18$$ = $_MONTH_REGEXP_FMT$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("M", 
        "MM")), ($caller$$3_match$$2_option$$18$$ = $_MONTH_REGEXP_STD$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("L", "LL")));
      }
      $caller$$3_match$$2_option$$18$$ = $getOption$$3_options$$164$$("weekday", "string", ["narrow", "short", "long"]);
      void 0 !== $caller$$3_match$$2_option$$18$$ && ($datePat$$ = $datePat$$.replace(/E{1,5}/, {narrow:"EEEEE", "short":"EEE", "long":"EEEE"}[$caller$$3_match$$2_option$$18$$]), $datePat$$ = $datePat$$.replace(/c{1,5}/, {narrow:"ccccc", "short":"ccc", "long":"cccc"}[$caller$$3_match$$2_option$$18$$]));
      $caller$$3_match$$2_option$$18$$ = $getOption$$3_options$$164$$("day", "string", ["2-digit", "numeric"]);
      void 0 !== $caller$$3_match$$2_option$$18$$ && "2-digit" === $caller$$3_match$$2_option$$18$$ && ($_DAY_REGEXP$$.lastIndex = 0, ($caller$$3_match$$2_option$$18$$ = $_DAY_REGEXP$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("d", "dd")));
      return $datePat$$;
    };
    $_expandAvailableTimeFormatsPattern$$ = function $$_expandAvailableTimeFormatsPattern$$$($formatTemplate$$1$$, $match$$3_options$$165$$, $caller$$4$$) {
      var $len$$7_timePat$$ = $formatTemplate$$1$$;
      "2-digit" === $OraI18nUtils$$.$getGetOption$($match$$3_options$$165$$, $caller$$4$$)("hour", "string", ["2-digit", "numeric"]) && ($_HOUR_REGEXP$$.lastIndex = 0, $match$$3_options$$165$$ = $_HOUR_REGEXP$$.exec($formatTemplate$$1$$), null !== $match$$3_options$$165$$ && ($len$$7_timePat$$ = $match$$3_options$$165$$[0].length - 2, $len$$7_timePat$$ = $formatTemplate$$1$$.replace($match$$3_options$$165$$[0][$len$$7_timePat$$], $match$$3_options$$165$$[0][$len$$7_timePat$$] + $match$$3_options$$165$$[0][$len$$7_timePat$$])));
      return $len$$7_timePat$$;
    };
    $_getPatternFromSingleToken$$ = function $$_getPatternFromSingleToken$$$($token$$5$$, $pattern$$3_tokenObj$$, $availableFormats$$1$$) {
      var $i$$111$$, $count$$24$$ = 0;
      for ($i$$111$$ in $pattern$$3_tokenObj$$) {
        $count$$24$$++;
      }
      if (1 < $count$$24$$) {
        return null;
      }
      for ($i$$111$$ = $token$$5$$.length;0 < $i$$111$$;$i$$111$$--) {
        if ($pattern$$3_tokenObj$$ = $availableFormats$$1$$[$token$$5$$.substr(0, $i$$111$$)], void 0 !== $pattern$$3_tokenObj$$) {
          return $pattern$$3_tokenObj$$;
        }
      }
      return $token$$5$$;
    };
    $_expandFormat$$ = function $$_expandFormat$$$($options$$166_pattern$$4$$, $localeElements$$16$$, $caller$$5$$) {
      var $availableFormats$$2_mainNode$$3$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$16$$), $locale$$12$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$16$$), $getOption$$5_timePattern$$ = $OraI18nUtils$$.$getGetOption$($options$$166_pattern$$4$$, $caller$$5$$), $matcher$$ = $getOption$$5_timePattern$$("formatMatcher", "string", ["basic", "munger"], "munger"), $count$$25_dateTimeKeys$$1$$ = 0;
      for ($count$$25_dateTimeKeys$$1$$ in $options$$166_pattern$$4$$) {
        $count$$25_dateTimeKeys$$1$$++;
      }
      0 == $count$$25_dateTimeKeys$$1$$ && ($options$$166_pattern$$4$$ = {year:"numeric", month:"numeric", day:"numeric"});
      $count$$25_dateTimeKeys$$1$$ = $_toAvailableFormatsKeys$$($options$$166_pattern$$4$$, $localeElements$$16$$, $caller$$5$$);
      if (void 0 !== $_localeDataCache$$[$locale$$12$$]) {
        var $cachedPattern_datePattern$$ = $_localeDataCache$$[$locale$$12$$].dates.calendars.gregorian.dateTimeFormats[$count$$25_dateTimeKeys$$1$$[0] + $count$$25_dateTimeKeys$$1$$[1]];
        if (void 0 !== $cachedPattern_datePattern$$) {
          return $cachedPattern_datePattern$$;
        }
      }
      if ("" === $count$$25_dateTimeKeys$$1$$[0] && "" === $count$$25_dateTimeKeys$$1$$[1]) {
        return $_expandPredefinedStylesFormat$$($options$$166_pattern$$4$$, $localeElements$$16$$, $caller$$5$$);
      }
      var $availableFormats$$2_mainNode$$3$$ = $availableFormats$$2_mainNode$$3$$.dates.calendars.gregorian.dateTimeFormats.availableFormats, $cachedPattern_datePattern$$ = $availableFormats$$2_mainNode$$3$$[$count$$25_dateTimeKeys$$1$$[0]], $hour12$$4$$ = $getOption$$5_timePattern$$("hour12", "boolean", [!0, !1]);
      void 0 === $hour12$$4$$ && ($hour12$$4$$ = $_isHour12$$($localeElements$$16$$));
      void 0 === $cachedPattern_datePattern$$ && "" !== $count$$25_dateTimeKeys$$1$$[0] && ($cachedPattern_datePattern$$ = $_getPatternFromSingleToken$$($count$$25_dateTimeKeys$$1$$[0], $count$$25_dateTimeKeys$$1$$[2], $availableFormats$$2_mainNode$$3$$), null === $cachedPattern_datePattern$$ && ($cachedPattern_datePattern$$ = $_basicFormatMatcher$$($count$$25_dateTimeKeys$$1$$[2], $localeElements$$16$$, 0, $hour12$$4$$)), null !== $cachedPattern_datePattern$$ ? "basic" !== $matcher$$ && ($cachedPattern_datePattern$$ = 
      $_expandAvailableDateFormatsPattern$$($cachedPattern_datePattern$$, $options$$166_pattern$$4$$, $caller$$5$$)) : $cachedPattern_datePattern$$ = $count$$25_dateTimeKeys$$1$$[0]);
      $getOption$$5_timePattern$$ = $availableFormats$$2_mainNode$$3$$[$count$$25_dateTimeKeys$$1$$[1]];
      void 0 === $getOption$$5_timePattern$$ && "" !== $count$$25_dateTimeKeys$$1$$[1] && ($getOption$$5_timePattern$$ = $_getPatternFromSingleToken$$($count$$25_dateTimeKeys$$1$$[1], $count$$25_dateTimeKeys$$1$$[3], $availableFormats$$2_mainNode$$3$$), null === $getOption$$5_timePattern$$ && ($getOption$$5_timePattern$$ = $_basicFormatMatcher$$($count$$25_dateTimeKeys$$1$$[3], $localeElements$$16$$, 0, $hour12$$4$$)), null !== $getOption$$5_timePattern$$ ? "basic" !== $matcher$$ && ($getOption$$5_timePattern$$ = 
      $_expandAvailableTimeFormatsPattern$$($getOption$$5_timePattern$$, $options$$166_pattern$$4$$, $caller$$5$$)) : $getOption$$5_timePattern$$ = $count$$25_dateTimeKeys$$1$$[1]);
      $options$$166_pattern$$4$$ = $cachedPattern_datePattern$$ || "";
      void 0 !== $getOption$$5_timePattern$$ && ($options$$166_pattern$$4$$ = "" !== $options$$166_pattern$$4$$ ? $options$$166_pattern$$4$$ + (" " + $getOption$$5_timePattern$$) : $getOption$$5_timePattern$$);
      void 0 === $_localeDataCache$$[$locale$$12$$] && ($_localeDataCache$$[$locale$$12$$] = {}, $_localeDataCache$$[$locale$$12$$].dates = {}, $_localeDataCache$$[$locale$$12$$].dates.calendars = {}, $_localeDataCache$$[$locale$$12$$].dates.calendars.gregorian = {}, $_localeDataCache$$[$locale$$12$$].dates.calendars.gregorian.dateTimeFormats = {});
      return $_localeDataCache$$[$locale$$12$$].dates.calendars.gregorian.dateTimeFormats[$count$$25_dateTimeKeys$$1$$[0] + $count$$25_dateTimeKeys$$1$$[1]] = $options$$166_pattern$$4$$;
    };
    $_formatImpl$$ = function $$_formatImpl$$$($value$$123$$, $localeElements$$17_ret$$9$$, $options$$167$$) {
      function $_getPart$$($date$$5$$, $part$$3$$) {
        switch($part$$3$$) {
          case 0:
            return $date$$5$$.getFullYear();
          case 1:
            return $date$$5$$.getMonth() + 1;
          case 2:
            return $date$$5$$.getDate();
          case 3:
            return $_DAYS_INDEXES$$[$date$$5$$.getDay()];
        }
      }
      function $_getPaddedPart$$($ret$$10$$, $val$$24_value$$124$$, $idx$$3$$, $len$$8$$) {
        $val$$24_value$$124$$ = $_getPart$$($val$$24_value$$124$$, $idx$$3$$);
        $ret$$10$$.push(1 < $len$$8$$ ? $OraI18nUtils$$.$padZeros$($val$$24_value$$124$$, $len$$8$$) : $val$$24_value$$124$$);
      }
      function $_getTimeParts$$($ret$$11$$, $value$$125$$, $len$$9$$, $currentPart$$1$$, $current$$2$$) {
        var $val$$25$$;
        switch($currentPart$$1$$.timePart) {
          case "hour":
            $val$$25$$ = 11 === $currentPart$$1$$.end1 ? $value$$125$$.getHours() % 12 : $value$$125$$.getHours();
            "h" === $current$$2$$ || "hh" === $current$$2$$ ? 0 === $val$$25$$ && ($val$$25$$ = 12) : "k" !== $current$$2$$ && "kk" !== $current$$2$$ || 0 !== $val$$25$$ || ($val$$25$$ = 24);
            break;
          case "minute":
            $val$$25$$ = $value$$125$$.getMinutes();
            break;
          case "second":
            $val$$25$$ = $value$$125$$.getSeconds();
            break;
          case "millisec":
            $val$$25$$ = $value$$125$$.getMilliseconds();
        }
        $ret$$11$$.push(1 < $len$$9$$ ? $OraI18nUtils$$.$padZeros$($val$$25$$, $len$$9$$) : $val$$25$$);
      }
      var $cal$$1_mainNode$$4$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$17_ret$$9$$), $format$$11$$ = $options$$167$$.pattern || $_expandFormat$$($options$$167$$, $localeElements$$17_ret$$9$$, "OraDateTimeConverter.format");
      $localeElements$$17_ret$$9$$ = [];
      for (var $current$$1_index$$89_part$$2_preMatch$$1$$, $quoteCount$$1$$ = 0, $cal$$1_mainNode$$4$$ = $cal$$1_mainNode$$4$$.dates.calendars.gregorian;;) {
        $current$$1_index$$89_part$$2_preMatch$$1$$ = $_TOKEN_REGEXP$$.lastIndex;
        var $ar_clength$$ = $_TOKEN_REGEXP$$.exec($format$$11$$);
        $current$$1_index$$89_part$$2_preMatch$$1$$ = $format$$11$$.slice($current$$1_index$$89_part$$2_preMatch$$1$$, $ar_clength$$ ? $ar_clength$$.index : $format$$11$$.length);
        $quoteCount$$1$$ += $_appendPreOrPostMatch$$($current$$1_index$$89_part$$2_preMatch$$1$$, $localeElements$$17_ret$$9$$);
        if (!$ar_clength$$) {
          break;
        }
        if ($quoteCount$$1$$ % 2) {
          $localeElements$$17_ret$$9$$.push($ar_clength$$[0]);
        } else {
          $current$$1_index$$89_part$$2_preMatch$$1$$ = $ar_clength$$[0];
          var $ar_clength$$ = $current$$1_index$$89_part$$2_preMatch$$1$$.length, $currentPart$$ = $_PROPERTIES_MAP$$[$current$$1_index$$89_part$$2_preMatch$$1$$];
          switch($currentPart$$.token) {
            case "days":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$4$$[$currentPart$$.token][$currentPart$$.style][$currentPart$$.dLen];
              $localeElements$$17_ret$$9$$.push($current$$1_index$$89_part$$2_preMatch$$1$$[$_getPart$$($value$$123$$, 3)]);
              break;
            case "months":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$4$$[$currentPart$$.token][$currentPart$$.style][$currentPart$$.mLen];
              $localeElements$$17_ret$$9$$.push($current$$1_index$$89_part$$2_preMatch$$1$$[$_getPart$$($value$$123$$, 1)]);
              break;
            case "dayOfMonth":
            ;
            case "monthIndex":
              $localeElements$$17_ret$$9$$.push($_getPaddedPart$$($localeElements$$17_ret$$9$$, $value$$123$$, $currentPart$$.getPartIdx, $ar_clength$$));
              break;
            case "year":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $value$$123$$.getFullYear();
              2 == $ar_clength$$ && ($current$$1_index$$89_part$$2_preMatch$$1$$ %= 100);
              $localeElements$$17_ret$$9$$.push($OraI18nUtils$$.$padZeros$($current$$1_index$$89_part$$2_preMatch$$1$$, $ar_clength$$));
              break;
            case "time":
              $_getTimeParts$$($localeElements$$17_ret$$9$$, $value$$123$$, $ar_clength$$, $currentPart$$, $current$$1_index$$89_part$$2_preMatch$$1$$);
              break;
            case "ampm":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = 12 > $value$$123$$.getHours() ? $cal$$1_mainNode$$4$$.dayPeriods.format.wide.am : $cal$$1_mainNode$$4$$.dayPeriods.format.wide.pm;
              $localeElements$$17_ret$$9$$.push($current$$1_index$$89_part$$2_preMatch$$1$$);
              break;
            case "tz":
              break;
            case "era":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$4$$.eras.eraAbbr;
              $localeElements$$17_ret$$9$$.push($current$$1_index$$89_part$$2_preMatch$$1$$["1"]);
              break;
            case "slash":
              $localeElements$$17_ret$$9$$.push("/");
              break;
            default:
              $_throwInvalidDateFormat$$($format$$11$$, $options$$167$$, $current$$1_index$$89_part$$2_preMatch$$1$$);
          }
        }
      }
      return $localeElements$$17_ret$$9$$.join("");
    };
    $_isSameYear$$ = function $$_isSameYear$$$($d1$$, $d2$$) {
      return $d1$$.getFullYear() == $d2$$.getFullYear();
    };
    $_isNextYear$$ = function $$_isNextYear$$$($d1$$1$$, $d2$$1$$) {
      return 1 == $d2$$1$$.getFullYear() - $d1$$1$$.getFullYear();
    };
    $_isPrevYear$$ = function $$_isPrevYear$$$($d1$$2$$, $d2$$2$$) {
      return $_isNextYear$$($d2$$2$$, $d1$$2$$);
    };
    $_isSameMonth$$ = function $$_isSameMonth$$$($d1$$3$$, $d2$$3$$) {
      return $_isSameYear$$($d1$$3$$, $d2$$3$$) && $d1$$3$$.getMonth() === $d2$$3$$.getMonth();
    };
    $_isNextMonth$$ = function $$_isNextMonth$$$($d1$$4$$, $d2$$4$$) {
      return $_isSameYear$$($d1$$4$$, $d2$$4$$) ? 1 == $d2$$4$$.getMonth() - $d1$$4$$.getMonth() : $_isNextYear$$($d1$$4$$, $d2$$4$$) ? 11 == $d1$$4$$.getMonth() && 0 == $d2$$4$$.getMonth() : !1;
    };
    $_isPrevMonth$$ = function $$_isPrevMonth$$$($d1$$5$$, $d2$$5$$) {
      return $_isNextMonth$$($d2$$5$$, $d1$$5$$);
    };
    $_getDaysDif$$ = function $$_getDaysDif$$$($d1$$6$$, $d2$$6$$) {
      var $day1$$ = $d1$$6$$.getDate(), $day2$$ = $d2$$6$$.getDate();
      $_isNextMonth$$($d1$$6$$, $d2$$6$$) && ($day2$$ += $_getDaysInMonth$$($d1$$6$$.getFullYear, $d1$$6$$.getMonth()));
      return $day2$$ - $day1$$;
    };
    $_getDayIndex$$ = function $$_getDayIndex$$$($localeElements$$18$$, $idx$$4$$) {
      var $ret$$12_territory$$1$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$18$$)).region || "001", $ret$$12_territory$$1$$ = $idx$$4$$ - $localeElements$$18$$.supplemental.weekData.firstDay[$ret$$12_territory$$1$$];
      0 > $ret$$12_territory$$1$$ && ($ret$$12_territory$$1$$ += 7);
      return $ret$$12_territory$$1$$;
    };
    $_isSameWeek$$ = function $$_isSameWeek$$$($dif_localeElements$$19$$, $d1$$7$$, $d2$$7$$) {
      if ($d1$$7$$ > $d2$$7$$) {
        var $tmp$$ = $d1$$7$$;
        $d1$$7$$ = $d2$$7$$;
        $d2$$7$$ = $tmp$$;
      }
      if (!$_isSameMonth$$($d1$$7$$, $d2$$7$$) && !$_isNextMonth$$($d1$$7$$, $d2$$7$$)) {
        return!1;
      }
      $dif_localeElements$$19$$ = $_getDaysDif$$($d1$$7$$, $d2$$7$$) + $_getDayIndex$$($dif_localeElements$$19$$, $d1$$7$$.getDay());
      return 0 <= $dif_localeElements$$19$$ && 6 >= $dif_localeElements$$19$$;
    };
    $_isNextWeek$$ = function $$_isNextWeek$$$($dif$$1_localeElements$$20$$, $d1$$8$$, $d2$$8$$) {
      if (!$_isSameMonth$$($d1$$8$$, $d2$$8$$) && !$_isNextMonth$$($d1$$8$$, $d2$$8$$)) {
        return!1;
      }
      $dif$$1_localeElements$$20$$ = $_getDaysDif$$($d1$$8$$, $d2$$8$$) + $_getDayIndex$$($dif$$1_localeElements$$20$$, $d1$$8$$.getDay());
      return 7 <= $dif$$1_localeElements$$20$$ && 13 >= $dif$$1_localeElements$$20$$;
    };
    $_isPrevWeek$$ = function $$_isPrevWeek$$$($localeElements$$21$$, $d1$$9$$, $d2$$9$$) {
      return $_isNextWeek$$($localeElements$$21$$, $d2$$9$$, $d1$$9$$);
    };
    $_isSameDay$$ = function $$_isSameDay$$$($d1$$10$$, $d2$$10$$) {
      return $_isSameYear$$($d1$$10$$, $d2$$10$$) && $_isSameMonth$$($d1$$10$$, $d2$$10$$) && $d1$$10$$.getDate() === $d2$$10$$.getDate();
    };
    $_isNextDay$$ = function $$_isNextDay$$$($d1$$11$$, $d2$$11$$) {
      return $_isSameMonth$$($d1$$11$$, $d2$$11$$) || $_isNextMonth$$($d1$$11$$, $d2$$11$$) ? 1 === $_getDaysDif$$($d1$$11$$, $d2$$11$$) : !1;
    };
    $_isPrevDay$$ = function $$_isPrevDay$$$($d1$$12$$, $d2$$12$$) {
      return $_isNextDay$$($d2$$12$$, $d1$$12$$);
    };
    $_formatRelativeImpl$$ = function $$_formatRelativeImpl$$$($value$$126$$, $localeElements$$22$$, $getOption$$6_option$$20_options$$168$$) {
      if ("number" === typeof $value$$126$$) {
        $value$$126$$ = new Date($value$$126$$);
      } else {
        if ("string" === typeof $value$$126$$) {
          if ("" === $OraI18nUtils$$.trim($value$$126$$)) {
            return null;
          }
          $value$$126$$ = $OraI18nUtils$$.isoToLocalDate($value$$126$$);
        } else {
          return null;
        }
      }
      var $fields$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$22$$).dates.fields;
      $getOption$$6_option$$20_options$$168$$ = $OraI18nUtils$$.$getGetOption$($getOption$$6_option$$20_options$$168$$, "OraDateTimeConverter.formatRelative");
      $getOption$$6_option$$20_options$$168$$("formatUsing", "string", ["displayName"]);
      $getOption$$6_option$$20_options$$168$$ = $getOption$$6_option$$20_options$$168$$("dateField", "string", ["day", "week", "month", "year"]);
      var $now$$ = new Date;
      switch($getOption$$6_option$$20_options$$168$$) {
        case "day":
          if ($_isSameDay$$($now$$, $value$$126$$)) {
            return $fields$$.day["relative-type-0"];
          }
          if ($_isNextDay$$($now$$, $value$$126$$)) {
            return $fields$$.day["relative-type-1"];
          }
          if ($_isPrevDay$$($now$$, $value$$126$$)) {
            return $fields$$.day["relative-type--1"];
          }
          break;
        case "week":
          if ($_isSameWeek$$($localeElements$$22$$, $now$$, $value$$126$$)) {
            return $fields$$.week["relative-type-0"];
          }
          if ($_isNextWeek$$($localeElements$$22$$, $now$$, $value$$126$$)) {
            return $fields$$.week["relative-type-1"];
          }
          if ($_isPrevWeek$$($localeElements$$22$$, $now$$, $value$$126$$)) {
            return $fields$$.week["relative-type--1"];
          }
          break;
        case "month":
          if ($_isSameMonth$$($now$$, $value$$126$$)) {
            return $fields$$.month["relative-type-0"];
          }
          if ($_isNextMonth$$($now$$, $value$$126$$)) {
            return $fields$$.month["relative-type-1"];
          }
          if ($_isPrevMonth$$($now$$, $value$$126$$)) {
            return $fields$$.month["relative-type--1"];
          }
          break;
        case "year":
          if ($_isSameYear$$($now$$, $value$$126$$)) {
            return $fields$$.year["relative-type-0"];
          }
          if ($_isNextYear$$($now$$, $value$$126$$)) {
            return $fields$$.year["relative-type-1"];
          }
          if ($_isPrevYear$$($now$$, $value$$126$$)) {
            return $fields$$.year["relative-type--1"];
          }
        ;
      }
      return null;
    };
    $_throwWeekdayMismatch$$ = function $$_throwWeekdayMismatch$$$($weekday$$, $day$$) {
      var $error$$18$$;
      $error$$18$$ = Error("The weekday " + $weekday$$ + " does not match the date " + $day$$);
      $error$$18$$.errorInfo = {errorCode:"dateToWeekdayMismatch", parameterMap:{weekday:$weekday$$, date:$day$$}};
      throw $error$$18$$;
    };
    $_throwDateFormatMismatch$$ = function $$_throwDateFormatMismatch$$$($value$$127$$, $format$$12$$, $errorCodeType_style$$1$$) {
      var $error$$19_msg$$13$$;
      2 === $errorCodeType_style$$1$$ ? ($error$$19_msg$$13$$ = 'The value "' + $value$$127$$ + '" does not match the expected date-time format "' + $format$$12$$ + '"', $errorCodeType_style$$1$$ = "datetimeFormatMismatch") : 0 === $errorCodeType_style$$1$$ ? ($error$$19_msg$$13$$ = 'The value "' + $value$$127$$ + '" does not match the expected date format "' + $format$$12$$ + '"', $errorCodeType_style$$1$$ = "dateFormatMismatch") : ($error$$19_msg$$13$$ = 'The value "' + $value$$127$$ + '" does not match the expected time format "' + 
      $format$$12$$ + '"', $errorCodeType_style$$1$$ = "timeFormatMismatch");
      $error$$19_msg$$13$$ = Error($error$$19_msg$$13$$);
      $error$$19_msg$$13$$.errorInfo = {errorCode:$errorCodeType_style$$1$$, parameterMap:{value:$value$$127$$, format:$format$$12$$}};
      throw $error$$19_msg$$13$$;
    };
    $_expandYear$$ = function $$_expandYear$$$($start2DigitYear$$, $year$$1$$) {
      100 > $year$$1$$ && ($year$$1$$ += 100 * Math.floor($start2DigitYear$$ / 100) + ($year$$1$$ < $start2DigitYear$$ % 100 ? 100 : 0));
      return $year$$1$$;
    };
    $_arrayIndexOfDay$$ = function $$_arrayIndexOfDay$$$($daysObj$$, $item$$1$$) {
      var $days$$1$$ = {sun:0, mon:1, tue:2, wed:3, thu:4, fri:5, sat:6}, $d$$2$$;
      for ($d$$2$$ in $daysObj$$) {
        if ($OraI18nUtils$$.trim($OraI18nUtils$$.$toUpper$($daysObj$$[$d$$2$$])) == $OraI18nUtils$$.trim($item$$1$$)) {
          return $days$$1$$[$d$$2$$];
        }
      }
      return-1;
    };
    $_arrayIndexOfMonth$$ = function $$_arrayIndexOfMonth$$$($monthsObj$$, $item$$2$$) {
      for (var $m$$14$$ in $monthsObj$$) {
        if ($OraI18nUtils$$.trim($OraI18nUtils$$.$toUpper$($monthsObj$$[$m$$14$$])) === $OraI18nUtils$$.trim($item$$2$$)) {
          return $m$$14$$ - 1;
        }
      }
      return-1;
    };
    $_getDayIndex1$$ = function $$_getDayIndex1$$$($calDaysFmt_localeElements$$23$$, $value$$128$$, $fmt_ret$$13$$) {
      var $calDaysStdAlone_mainNode$$7$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($calDaysFmt_localeElements$$23$$), $days$$2$$;
      $calDaysFmt_localeElements$$23$$ = $calDaysStdAlone_mainNode$$7$$.dates.calendars.gregorian.days.format;
      $calDaysStdAlone_mainNode$$7$$ = $calDaysStdAlone_mainNode$$7$$.dates.calendars.gregorian.days["stand-alone"];
      switch($fmt_ret$$13$$) {
        case 0:
          $days$$2$$ = [$calDaysFmt_localeElements$$23$$.abbreviated, $calDaysFmt_localeElements$$23$$.wide];
          break;
        case 1:
          $days$$2$$ = [$calDaysStdAlone_mainNode$$7$$.abbreviated, $calDaysStdAlone_mainNode$$7$$.wide];
      }
      $value$$128$$ = $OraI18nUtils$$.$toUpper$($value$$128$$);
      $fmt_ret$$13$$ = $_arrayIndexOfDay$$($days$$2$$[0], $value$$128$$);
      -1 === $fmt_ret$$13$$ && ($fmt_ret$$13$$ = $_arrayIndexOfDay$$($days$$2$$[1], $value$$128$$));
      return $fmt_ret$$13$$;
    };
    $_getMonthIndex$$ = function $$_getMonthIndex$$$($calMonthsFmt_localeElements$$24$$, $value$$129$$, $fmt$$1_months$$1$$) {
      var $ret$$14$$ = -1, $calMonthsStdAlone_mainNode$$8$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($calMonthsFmt_localeElements$$24$$);
      $calMonthsFmt_localeElements$$24$$ = $calMonthsStdAlone_mainNode$$8$$.dates.calendars.gregorian.months.format;
      $calMonthsStdAlone_mainNode$$8$$ = $calMonthsStdAlone_mainNode$$8$$.dates.calendars.gregorian.months["stand-alone"];
      switch($fmt$$1_months$$1$$) {
        case 0:
          $fmt$$1_months$$1$$ = [$calMonthsFmt_localeElements$$24$$.wide, $calMonthsFmt_localeElements$$24$$.abbreviated];
          break;
        case 1:
          $fmt$$1_months$$1$$ = [$calMonthsStdAlone_mainNode$$8$$.wide, $calMonthsStdAlone_mainNode$$8$$.abbreviated];
          break;
        case 2:
          $fmt$$1_months$$1$$ = [$calMonthsFmt_localeElements$$24$$.wide, $calMonthsFmt_localeElements$$24$$.abbreviated, $calMonthsStdAlone_mainNode$$8$$.wide, $calMonthsStdAlone_mainNode$$8$$.abbreviated];
          break;
        default:
          return-1;
      }
      $value$$129$$ = $OraI18nUtils$$.$toUpper$($value$$129$$);
      for (var $m$$15$$ in $fmt$$1_months$$1$$) {
        if ($ret$$14$$ = $_arrayIndexOfMonth$$($fmt$$1_months$$1$$[$m$$15$$], $value$$129$$), -1 !== $ret$$14$$) {
          break;
        }
      }
      return $ret$$14$$;
    };
    $_getParseRegExp$$ = function $$_getParseRegExp$$$($format$$13$$, $options$$169$$) {
      for (var $expFormat_parseRegExp$$ = $format$$13$$.replace($_ESCAPE_REGEXP$$, "\\\\$1"), $regexp$$4$$ = ["^"], $groups$$ = [], $index$$90$$ = 0, $quoteCount$$2$$ = 0, $match$$4$$;null !== ($match$$4$$ = $_TOKEN_REGEXP$$.exec($expFormat_parseRegExp$$));) {
        var $m$$16_preMatch$$2$$ = $expFormat_parseRegExp$$.slice($index$$90$$, $match$$4$$.index), $index$$90$$ = $_TOKEN_REGEXP$$.lastIndex, $quoteCount$$2$$ = $quoteCount$$2$$ + $_appendPreOrPostMatch$$($m$$16_preMatch$$2$$, $regexp$$4$$);
        if ($quoteCount$$2$$ % 2) {
          $regexp$$4$$.push($match$$4$$[0]);
        } else {
          var $m$$16_preMatch$$2$$ = $match$$4$$[0], $add$$6$$;
          void 0 !== $_PROPERTIES_MAP$$[$m$$16_preMatch$$2$$] ? $add$$6$$ = $_PROPERTIES_MAP$$[$m$$16_preMatch$$2$$].regExp : $_throwInvalidDateFormat$$($format$$13$$, $options$$169$$, $m$$16_preMatch$$2$$);
          $add$$6$$ && $regexp$$4$$.push($add$$6$$);
          $groups$$.push($match$$4$$[0]);
        }
      }
      $_appendPreOrPostMatch$$($expFormat_parseRegExp$$.slice($index$$90$$), $regexp$$4$$);
      $regexp$$4$$.push("$");
      $expFormat_parseRegExp$$ = {regExp:$regexp$$4$$.join("").replace(/\s+/g, "\\s+"), groups:$groups$$};
      return{}[$format$$13$$] = $expFormat_parseRegExp$$;
    };
    $_validateRange$$ = function $$_validateRange$$$($name$$77$$, $rangeError_value$$130$$, $low$$, $high$$, $displayValue$$2$$, $displayLow$$, $displayHigh$$) {
      if ($rangeError_value$$130$$ < $low$$ || $rangeError_value$$130$$ > $high$$) {
        throw $rangeError_value$$130$$ = new RangeError($displayValue$$2$$ + " is out of range.  Enter a value between " + $displayLow$$ + " and " + $displayHigh$$ + " for " + $name$$77$$), $rangeError_value$$130$$.errorInfo = {errorCode:"datetimeOutOfRange", parameterMap:{value:$displayValue$$2$$, minValue:$displayLow$$, maxValue:$displayHigh$$, propertyName:$name$$77$$}}, $rangeError_value$$130$$;
      }
    };
    $_getTokenIndex$$ = function $$_getTokenIndex$$$($arr$$19$$, $token$$6$$) {
      for (var $i$$112$$ in $arr$$19$$) {
        for (var $n$$13$$ in $arr$$19$$[$i$$112$$]) {
          if ($n$$13$$ === $token$$6$$) {
            return parseInt($i$$112$$, 10);
          }
        }
      }
      return 0;
    };
    $_parseLenienthms$$ = function $$_parseLenienthms$$$($result$$9$$, $idx$$5_timepart$$, $format$$14$$, $hour$$2_localeElements$$25$$, $dtype$$) {
      var $calPM$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($hour$$2_localeElements$$25$$).dates.calendars.gregorian.dayPeriods.format.wide.pm, $minute$$ = $hour$$2_localeElements$$25$$ = $_TIME_REGEXP$$.lastIndex = 0, $second$$2$$ = 0, $msec$$ = 0, $match$$5$$ = $_TIME_REGEXP$$.exec($idx$$5_timepart$$);
      null === $match$$5$$ && $_throwDateFormatMismatch$$($idx$$5_timepart$$, $format$$14$$, $dtype$$);
      void 0 !== $match$$5$$[1] && ($hour$$2_localeElements$$25$$ = parseInt($match$$5$$[1], 10));
      void 0 !== $match$$5$$[2] && ($minute$$ = parseInt($match$$5$$[2], 10));
      void 0 !== $match$$5$$[3] && ($second$$2$$ = parseInt($match$$5$$[3], 10));
      void 0 !== $match$$5$$[4] && ($msec$$ = parseInt($match$$5$$[4], 10));
      $_TIME_FORMAT_REGEXP$$.lastIndex = 0;
      $match$$5$$ = $_TIME_FORMAT_REGEXP$$.exec($format$$14$$);
      switch($match$$5$$[0]) {
        case "h":
          12 === $hour$$2_localeElements$$25$$ && ($hour$$2_localeElements$$25$$ = 0);
          $_validateRange$$("hour", $hour$$2_localeElements$$25$$, 0, 11, $hour$$2_localeElements$$25$$, 1, 12);
          $idx$$5_timepart$$ = $OraI18nUtils$$.$toUpper$($idx$$5_timepart$$).indexOf($OraI18nUtils$$.$toUpper$($calPM$$));
          -1 !== $idx$$5_timepart$$ && 12 > $hour$$2_localeElements$$25$$ && ($hour$$2_localeElements$$25$$ += 12);
          break;
        case "K":
          $_validateRange$$("hour", $hour$$2_localeElements$$25$$, 0, 11, $hour$$2_localeElements$$25$$, 0, 11);
          $idx$$5_timepart$$ = $OraI18nUtils$$.$toUpper$($idx$$5_timepart$$).indexOf($OraI18nUtils$$.$toUpper$($calPM$$));
          -1 !== $idx$$5_timepart$$ && 12 > $hour$$2_localeElements$$25$$ && ($hour$$2_localeElements$$25$$ += 12);
          break;
        case "H":
          $_validateRange$$("hour", $hour$$2_localeElements$$25$$, 0, 23, $hour$$2_localeElements$$25$$, 0, 23);
          break;
        case "k":
          24 === $hour$$2_localeElements$$25$$ && ($hour$$2_localeElements$$25$$ = 0), $_validateRange$$("hour", $hour$$2_localeElements$$25$$, 0, 23, $hour$$2_localeElements$$25$$, 1, 24);
      }
      $_validateRange$$("minute", $minute$$, 0, 59, $minute$$, 0, 59);
      $_validateRange$$("second", $second$$2$$, 0, 59, $second$$2$$, 0, 59);
      $_validateRange$$("millisec", $msec$$, 0, 999, $msec$$, 0, 999);
      $result$$9$$.setHours($hour$$2_localeElements$$25$$, $minute$$, $second$$2$$, $msec$$);
    };
    $_getWeekdayName$$ = function $$_getWeekdayName$$$($value$$131$$, $localeElements$$26$$) {
      var $calDaysStandAlone_foundMatch_mainNode$$10$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$26$$), $calDaysFmt$$1_days$$3$$ = $calDaysStandAlone_foundMatch_mainNode$$10$$.dates.calendars.gregorian.days.format, $calDaysStandAlone_foundMatch_mainNode$$10$$ = $calDaysStandAlone_foundMatch_mainNode$$10$$.dates.calendars.gregorian.days["stand-alone"], $calDaysFmt$$1_days$$3$$ = [$calDaysFmt$$1_days$$3$$.wide, $calDaysFmt$$1_days$$3$$.abbreviated, $calDaysStandAlone_foundMatch_mainNode$$10$$.wide, 
      $calDaysStandAlone_foundMatch_mainNode$$10$$.abbreviated], $calDaysStandAlone_foundMatch_mainNode$$10$$ = !1, $dName$$, $i$$113$$, $j$$12$$;
      for ($i$$113$$ in $calDaysFmt$$1_days$$3$$) {
        for ($j$$12$$ in $calDaysFmt$$1_days$$3$$[$i$$113$$]) {
          if ($dName$$ = $calDaysFmt$$1_days$$3$$[$i$$113$$][$j$$12$$], (new RegExp($dName$$ + "\\b", "i")).test($value$$131$$)) {
            $calDaysStandAlone_foundMatch_mainNode$$10$$ = !0;
            break;
          }
        }
        if ($calDaysStandAlone_foundMatch_mainNode$$10$$) {
          break;
        }
        $dName$$ = null;
      }
      return $dName$$;
    };
    $_parseLenientyMEd$$ = function $$_parseLenientyMEd$$$($timepart$$1_value$$132$$, $format$$15$$, $options$$170_parsedDate_result$$10$$, $localeElements$$27$$, $isDateTime$$) {
      $_YMD_REGEXP$$.lastIndex = 0;
      var $daysInMonth_match$$6$$ = $_YMD_REGEXP$$.exec($timepart$$1_value$$132$$);
      null === $daysInMonth_match$$6$$ && $_throwDateFormatMismatch$$($timepart$$1_value$$132$$, $format$$15$$, $isDateTime$$ ? 2 : 0);
      var $tokenIndexes$$ = [{y:$format$$15$$.indexOf("y")}, {M:$format$$15$$.indexOf("M")}, {d:$format$$15$$.indexOf("d")}];
      $tokenIndexes$$.sort(function($a$$98$$, $b$$58$$) {
        for (var $n1$$ in $a$$98$$) {
          break;
        }
        for (var $n2$$ in $b$$58$$) {
          break;
        }
        return $a$$98$$[$n1$$] - $b$$58$$[$n2$$];
      });
      var $dName$$1_year$$2$$, $month$$2_weekDay$$, $day$$1$$, $yearIndex$$1$$, $foundDayIndex$$, $i$$114$$, $dayIndex$$ = $_getTokenIndex$$($tokenIndexes$$, "d"), $foundYear$$ = !1, $foundDay$$ = !1;
      for ($i$$114$$ = 1;3 >= $i$$114$$;$i$$114$$++) {
        var $tokenMatch$$ = $daysInMonth_match$$6$$[$i$$114$$];
        2 < $tokenMatch$$.length && ($dName$$1_year$$2$$ = $tokenMatch$$, $foundYear$$ = !0, $yearIndex$$1$$ = $i$$114$$ - 1);
      }
      $foundYear$$ || ($yearIndex$$1$$ = $_getTokenIndex$$($tokenIndexes$$, "y"), $dName$$1_year$$2$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1]);
      for ($i$$114$$ = 0;3 > $i$$114$$;$i$$114$$++) {
        if ($i$$114$$ !== $yearIndex$$1$$ && 12 < $daysInMonth_match$$6$$[$i$$114$$ + 1]) {
          $day$$1$$ = $daysInMonth_match$$6$$[$i$$114$$ + 1];
          $foundDay$$ = !0;
          $foundDayIndex$$ = $i$$114$$;
          break;
        }
      }
      if ($foundDay$$) {
        for ($i$$114$$ = 0;3 > $i$$114$$;$i$$114$$++) {
          if ($i$$114$$ !== $foundDayIndex$$ && $i$$114$$ !== $yearIndex$$1$$) {
            $month$$2_weekDay$$ = $daysInMonth_match$$6$$[$i$$114$$ + 1];
            break;
          }
        }
        void 0 === $month$$2_weekDay$$ && ($month$$2_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]);
      } else {
        $yearIndex$$1$$ === $_getTokenIndex$$($tokenIndexes$$, "d") ? ($day$$1$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1], $month$$2_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]) : $yearIndex$$1$$ === $_getTokenIndex$$($tokenIndexes$$, "M") ? ($day$$1$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "d") + 1], $month$$2_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1]) : ($day$$1$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, 
        "d") + 1], $month$$2_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]);
      }
      $month$$2_weekDay$$ -= 1;
      $daysInMonth_match$$6$$ = $_getDaysInMonth$$($dName$$1_year$$2$$, $month$$2_weekDay$$);
      $foundDay$$ && $dayIndex$$ !== $foundDayIndex$$ && 12 < $month$$2_weekDay$$ && $_validateRange$$("month", $day$$1$$, 0, 11, $day$$1$$, 1, 12);
      $_validateRange$$("month", $month$$2_weekDay$$, 0, 11, $month$$2_weekDay$$ + 1, 1, 12);
      $_validateRange$$("day", $day$$1$$, 1, $daysInMonth_match$$6$$, $day$$1$$, 1, $daysInMonth_match$$6$$);
      $dName$$1_year$$2$$ = $_expandYear$$($_get2DigitYearStart$$($options$$170_parsedDate_result$$10$$), parseInt($dName$$1_year$$2$$, 10));
      $_validateRange$$("year", $dName$$1_year$$2$$, 0, 9999, $dName$$1_year$$2$$, 0, 9999);
      $options$$170_parsedDate_result$$10$$ = new Date($dName$$1_year$$2$$, $month$$2_weekDay$$, $day$$1$$);
      $dName$$1_year$$2$$ = $_getWeekdayName$$($timepart$$1_value$$132$$, $localeElements$$27$$);
      null !== $dName$$1_year$$2$$ && ($month$$2_weekDay$$ = $_getDayIndex1$$($localeElements$$27$$, $dName$$1_year$$2$$, 0), $options$$170_parsedDate_result$$10$$.getDay() !== $month$$2_weekDay$$ && $_throwWeekdayMismatch$$($dName$$1_year$$2$$, $options$$170_parsedDate_result$$10$$.getDate()));
      $options$$170_parsedDate_result$$10$$ = {value:$options$$170_parsedDate_result$$10$$, warning:"lenient parsing was used"};
      $isDateTime$$ && ($timepart$$1_value$$132$$ = $timepart$$1_value$$132$$.substr($_YMD_REGEXP$$.lastIndex), 0 === $timepart$$1_value$$132$$.length ? $options$$170_parsedDate_result$$10$$.value.setHours(0, 0, 0, 0) : $_parseLenienthms$$($options$$170_parsedDate_result$$10$$.value, $timepart$$1_value$$132$$, $format$$15$$, $localeElements$$27$$, 2));
      return $options$$170_parsedDate_result$$10$$;
    };
    $_parseLenientyMMMEd$$ = function $$_parseLenientyMMMEd$$$($timepart$$2_value$$133$$, $format$$16$$, $options$$171_parsedDate$$1$$, $localeElements$$28$$, $isDateTime$$1$$) {
      var $origValue_tokenIndexes$$1$$ = $timepart$$2_value$$133$$;
      $timepart$$2_value$$133$$ = $OraI18nUtils$$.$toUpper$($timepart$$2_value$$133$$);
      var $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$28$$), $calMonthsFmt$$1_match$$7_months$$2$$ = $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.dates.calendars.gregorian.months.format, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.dates.calendars.gregorian.months["stand-alone"], $calMonthsFmt$$1_match$$7_months$$2$$ = 
      [$calMonthsFmt$$1_match$$7_months$$2$$.wide, $calMonthsFmt$$1_match$$7_months$$2$$.abbreviated, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.wide, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.abbreviated], $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !1, $reverseMonth_tokenMatch$$1$$, $dRegExp$$1_i$$115_weekDay$$1$$, $j$$14_month$$3$$, $dName$$2_mName$$;
      for ($dRegExp$$1_i$$115_weekDay$$1$$ in $calMonthsFmt$$1_match$$7_months$$2$$) {
        $reverseMonth_tokenMatch$$1$$ = [];
        for ($j$$14_month$$3$$ in $calMonthsFmt$$1_match$$7_months$$2$$[$dRegExp$$1_i$$115_weekDay$$1$$]) {
          $dName$$2_mName$$ = $OraI18nUtils$$.$toUpper$($calMonthsFmt$$1_match$$7_months$$2$$[$dRegExp$$1_i$$115_weekDay$$1$$][$j$$14_month$$3$$]), $reverseMonth_tokenMatch$$1$$.push({idx:$j$$14_month$$3$$, name:$dName$$2_mName$$});
        }
        $reverseMonth_tokenMatch$$1$$.sort(function($a$$99$$, $b$$59$$) {
          return $b$$59$$.idx - $a$$99$$.idx;
        });
        for ($j$$14_month$$3$$ in $reverseMonth_tokenMatch$$1$$) {
          if ($dName$$2_mName$$ = $reverseMonth_tokenMatch$$1$$[$j$$14_month$$3$$].name, -1 != $timepart$$2_value$$133$$.indexOf($dName$$2_mName$$)) {
            $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !0;
            $timepart$$2_value$$133$$ = $timepart$$2_value$$133$$.replace($dName$$2_mName$$, "");
            break;
          }
        }
        if ($calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$) {
          break;
        }
      }
      if (!$calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$) {
        return $_parseLenientyMEd$$($origValue_tokenIndexes$$1$$, $format$$16$$, $options$$171_parsedDate$$1$$, $localeElements$$28$$, $isDateTime$$1$$);
      }
      $j$$14_month$$3$$ = $_getMonthIndex$$($localeElements$$28$$, $dName$$2_mName$$, 2);
      $_validateRange$$("month", $j$$14_month$$3$$, 0, 11, $j$$14_month$$3$$, 1, 12);
      $dName$$2_mName$$ = $_getWeekdayName$$($origValue_tokenIndexes$$1$$, $localeElements$$28$$);
      $dRegExp$$1_i$$115_weekDay$$1$$ = new RegExp($dName$$2_mName$$ + "\\W", "i");
      null !== $dName$$2_mName$$ && ($timepart$$2_value$$133$$ = $timepart$$2_value$$133$$.replace($dRegExp$$1_i$$115_weekDay$$1$$, ""));
      $_YEAR_AND_DATE_REGEXP$$.lastIndex = 0;
      $calMonthsFmt$$1_match$$7_months$$2$$ = $_YEAR_AND_DATE_REGEXP$$.exec($timepart$$2_value$$133$$);
      null === $calMonthsFmt$$1_match$$7_months$$2$$ && $_throwDateFormatMismatch$$($origValue_tokenIndexes$$1$$, $format$$16$$, $isDateTime$$1$$ ? 2 : 0);
      $origValue_tokenIndexes$$1$$ = [{y:$format$$16$$.indexOf("y")}, {d:$format$$16$$.indexOf("d")}];
      $origValue_tokenIndexes$$1$$.sort(function($a$$100$$, $b$$60$$) {
        for (var $n1$$1$$ in $a$$100$$) {
          break;
        }
        for (var $n2$$1$$ in $b$$60$$) {
          break;
        }
        return $a$$100$$[$n1$$1$$] - $b$$60$$[$n2$$1$$];
      });
      var $daysInMonth$$1_result$$11_year$$3$$, $day$$2_yearIndex$$2$$, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !1;
      for ($dRegExp$$1_i$$115_weekDay$$1$$ = 1;2 >= $dRegExp$$1_i$$115_weekDay$$1$$;$dRegExp$$1_i$$115_weekDay$$1$$++) {
        $reverseMonth_tokenMatch$$1$$ = $calMonthsFmt$$1_match$$7_months$$2$$[$dRegExp$$1_i$$115_weekDay$$1$$], 2 < $reverseMonth_tokenMatch$$1$$.length && ($daysInMonth$$1_result$$11_year$$3$$ = $reverseMonth_tokenMatch$$1$$, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !0, $day$$2_yearIndex$$2$$ = $dRegExp$$1_i$$115_weekDay$$1$$ - 1);
      }
      $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ || ($day$$2_yearIndex$$2$$ = $_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y"), $daysInMonth$$1_result$$11_year$$3$$ = $calMonthsFmt$$1_match$$7_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y") + 1]);
      $day$$2_yearIndex$$2$$ = $day$$2_yearIndex$$2$$ === $_getTokenIndex$$($origValue_tokenIndexes$$1$$, "d") ? $calMonthsFmt$$1_match$$7_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y") + 1] : $calMonthsFmt$$1_match$$7_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "d") + 1];
      $daysInMonth$$1_result$$11_year$$3$$ = $_expandYear$$($_get2DigitYearStart$$($options$$171_parsedDate$$1$$), parseInt($daysInMonth$$1_result$$11_year$$3$$, 10));
      $_validateRange$$("year", $daysInMonth$$1_result$$11_year$$3$$, 0, 9999, $daysInMonth$$1_result$$11_year$$3$$, 0, 9999);
      $options$$171_parsedDate$$1$$ = new Date($daysInMonth$$1_result$$11_year$$3$$, $j$$14_month$$3$$, $day$$2_yearIndex$$2$$);
      null !== $dName$$2_mName$$ && ($dRegExp$$1_i$$115_weekDay$$1$$ = $_getDayIndex1$$($localeElements$$28$$, $dName$$2_mName$$, 0), $options$$171_parsedDate$$1$$.getDay() !== $dRegExp$$1_i$$115_weekDay$$1$$ && $_throwWeekdayMismatch$$($dName$$2_mName$$, $options$$171_parsedDate$$1$$.getDate()));
      $daysInMonth$$1_result$$11_year$$3$$ = $_getDaysInMonth$$($daysInMonth$$1_result$$11_year$$3$$, $j$$14_month$$3$$);
      $_validateRange$$("day", $day$$2_yearIndex$$2$$, 1, $daysInMonth$$1_result$$11_year$$3$$, $day$$2_yearIndex$$2$$, 1, $daysInMonth$$1_result$$11_year$$3$$);
      $daysInMonth$$1_result$$11_year$$3$$ = {value:$options$$171_parsedDate$$1$$, warning:"lenient parsing was used"};
      $isDateTime$$1$$ && ($timepart$$2_value$$133$$ = $timepart$$2_value$$133$$.substr($_YEAR_AND_DATE_REGEXP$$.lastIndex), 0 === $timepart$$2_value$$133$$.length ? $daysInMonth$$1_result$$11_year$$3$$.value.setHours(0, 0, 0, 0) : $_parseLenienthms$$($daysInMonth$$1_result$$11_year$$3$$.value, $timepart$$2_value$$133$$, $format$$16$$, $localeElements$$28$$, 2));
      return $daysInMonth$$1_result$$11_year$$3$$;
    };
    $_parseLenient$$ = function $$_parseLenient$$$($value$$134$$, $format$$17$$, $d$$3_options$$172$$, $localeElements$$29$$) {
      switch($_dateTimeStyle$$($d$$3_options$$172$$, "OraDateTimeConverter.parse")) {
        case 0:
          return $_parseLenientyMMMEd$$($value$$134$$, $format$$17$$, $d$$3_options$$172$$, $localeElements$$29$$, !1);
        case 1:
          return $d$$3_options$$172$$ = new Date, $_parseLenienthms$$($d$$3_options$$172$$, $value$$134$$, $format$$17$$, $localeElements$$29$$, 1), {value:$d$$3_options$$172$$, warning:"lenient parsing was used"};
        case 2:
          return $_parseLenientyMMMEd$$($value$$134$$, $format$$17$$, $d$$3_options$$172$$, $localeElements$$29$$, !0);
      }
      return null;
    };
    $_getNameIndex$$ = function $$_getNameIndex$$$($index$$91_localeElements$$30$$, $datePart$$, $matchGroup$$, $mLength$$, $monthsFormat_style$$2$$, $matchIndex$$, $start1$$, $end1$$, $start2$$, $end2$$, $name$$78$$) {
      $monthsFormat_style$$2$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($index$$91_localeElements$$30$$).dates.calendars.gregorian[$datePart$$][$monthsFormat_style$$2$$];
      $index$$91_localeElements$$30$$ = "months" === $datePart$$ ? $_getMonthIndex$$($index$$91_localeElements$$30$$, $matchGroup$$, $matchIndex$$) : $_getDayIndex1$$($index$$91_localeElements$$30$$, $matchGroup$$, $matchIndex$$);
      $_validateRange$$($name$$78$$, $index$$91_localeElements$$30$$, $start1$$, $end1$$, $matchGroup$$, $monthsFormat_style$$2$$[$mLength$$][$start2$$], $monthsFormat_style$$2$$[$mLength$$][$end2$$]);
      return $index$$91_localeElements$$30$$;
    };
    $_getTimePart$$ = function $$_getTimePart$$$($matchInt$$, $timeObj$$, $objMap$$, $clength$$1$$, $timeToken$$) {
      $timeObj$$[$objMap$$.timePart] = $matchInt$$;
      "h" === $timeToken$$ || "hh" === $timeToken$$ ? 12 === $matchInt$$ && ($timeObj$$[$objMap$$.timePart] = 0) : "k" === $timeToken$$ || "kk" === $timeToken$$ ? 24 === $matchInt$$ && ($timeObj$$[$objMap$$.timePart] = 0) : "S" === $timeToken$$ && ($timeObj$$[$objMap$$.timePart] = $matchInt$$ * Math.pow(10, 3 - $clength$$1$$));
      $_validateRange$$($objMap$$.timePart, $timeObj$$[$objMap$$.timePart], $objMap$$.start1, $objMap$$.end1, $matchInt$$, $objMap$$.start2, $objMap$$.end2);
    };
    $_parseExact$$ = function $$_parseExact$$$($parsedDate$$2_value$$135$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$173$$, $localeElements$$31$$) {
      var $calPM$$1_mainNode$$13$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$31$$);
      $parsedDate$$2_value$$135$$ = $OraI18nUtils$$.trim($parsedDate$$2_value$$135$$);
      var $eraPart_parseInfo_year$$4$$ = $calPM$$1_mainNode$$13$$.dates.calendars.gregorian.eras.eraAbbr["1"], $month$$4_trimEraPart$$ = $OraI18nUtils$$.$trimNumber$($eraPart_parseInfo_year$$4$$);
      $parsedDate$$2_value$$135$$ = $parsedDate$$2_value$$135$$.replace($eraPart_parseInfo_year$$4$$, $month$$4_trimEraPart$$);
      var $eraPart_parseInfo_year$$4$$ = $_getParseRegExp$$($daysInMonth$$2_defaultYear_format$$18$$, $options$$173$$), $match$$8$$ = (new RegExp($eraPart_parseInfo_year$$4$$.regExp)).exec($parsedDate$$2_value$$135$$);
      if (null === $match$$8$$) {
        return $_parseLenient$$($parsedDate$$2_value$$135$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$173$$, $localeElements$$31$$);
      }
      var $groups$$1$$ = $eraPart_parseInfo_year$$4$$.groups, $date$$6$$ = $month$$4_trimEraPart$$ = $eraPart_parseInfo_year$$4$$ = null, $weekDay$$2$$ = null, $hourOffset_tzMinOffset$$;
      $hourOffset_tzMinOffset$$ = null;
      for (var $pmHour$$ = !1, $matchInt$$1_minOffset$$, $adjustedMin_weekDayName$$, $timeObj$$1$$ = {hour:0, minute:0, second:0, millisec:0}, $calPM$$1_mainNode$$13$$ = $calPM$$1_mainNode$$13$$.dates.calendars.gregorian.dayPeriods.format.wide.pm, $start2DigitYear$$3$$ = $_get2DigitYearStart$$($options$$173$$), $j$$15$$ = 0, $jl$$ = $groups$$1$$.length;$j$$15$$ < $jl$$;$j$$15$$++) {
        var $matchGroup$$1$$ = $match$$8$$[$j$$15$$ + 1];
        if ($matchGroup$$1$$) {
          var $current$$3$$ = $groups$$1$$[$j$$15$$], $clength$$2$$ = $current$$3$$.length;
          $matchInt$$1_minOffset$$ = parseInt($matchGroup$$1$$, 10);
          var $currentGroup$$ = $_PROPERTIES_MAP$$[$current$$3$$];
          switch($currentGroup$$.token) {
            case "months":
              $month$$4_trimEraPart$$ = $_getNameIndex$$($localeElements$$31$$, $currentGroup$$.token, $matchGroup$$1$$, $currentGroup$$.mLen, $currentGroup$$.style, $currentGroup$$.matchIndex, 0, 11, "1", "12", "month name");
              break;
            case "days":
              $adjustedMin_weekDayName$$ = $matchGroup$$1$$;
              $weekDay$$2$$ = $_getNameIndex$$($localeElements$$31$$, $currentGroup$$.token, $matchGroup$$1$$, $currentGroup$$.dLen, $currentGroup$$.style, $currentGroup$$.matchIndex, 0, 6, "sun", "sat", "weekday");
              break;
            case "time":
              $_getTimePart$$($matchInt$$1_minOffset$$, $timeObj$$1$$, $currentGroup$$, $clength$$2$$, $current$$3$$);
              break;
            case "dayOfMonth":
              $date$$6$$ = $matchInt$$1_minOffset$$;
              if (31 < $date$$6$$) {
                return $_parseLenient$$($parsedDate$$2_value$$135$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$173$$, $localeElements$$31$$);
              }
              break;
            case "monthIndex":
              $month$$4_trimEraPart$$ = $matchInt$$1_minOffset$$ - 1;
              if (11 < $month$$4_trimEraPart$$) {
                return $_parseLenient$$($parsedDate$$2_value$$135$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$173$$, $localeElements$$31$$);
              }
              break;
            case "year":
              $eraPart_parseInfo_year$$4$$ = $_expandYear$$($start2DigitYear$$3$$, $matchInt$$1_minOffset$$);
              $_validateRange$$("year", $eraPart_parseInfo_year$$4$$, 0, 9999, $eraPart_parseInfo_year$$4$$, 0, 9999);
              break;
            case "ampm":
              $pmHour$$ = $OraI18nUtils$$.$toUpper$($matchGroup$$1$$) === $OraI18nUtils$$.$toUpper$($calPM$$1_mainNode$$13$$);
              break;
            case "tz":
              $hourOffset_tzMinOffset$$ = $matchInt$$1_minOffset$$ / 100 << 0, $_validateRange$$("TZ Offset", $hourOffset_tzMinOffset$$, -12, 13, $matchInt$$1_minOffset$$, -12, 13), $matchInt$$1_minOffset$$ = Math.abs($matchInt$$1_minOffset$$ % 100), $_validateRange$$("TZ Offset", $matchInt$$1_minOffset$$, 0, 59, $matchInt$$1_minOffset$$, 0, 59), $hourOffset_tzMinOffset$$ = 60 * $hourOffset_tzMinOffset$$ + ($OraI18nUtils$$.$startsWith$($matchGroup$$1$$, "-") ? -$matchInt$$1_minOffset$$ : $matchInt$$1_minOffset$$);
          }
        }
      }
      $parsedDate$$2_value$$135$$ = new Date;
      $daysInMonth$$2_defaultYear_format$$18$$ = $parsedDate$$2_value$$135$$.getFullYear();
      null === $eraPart_parseInfo_year$$4$$ && ($eraPart_parseInfo_year$$4$$ = $daysInMonth$$2_defaultYear_format$$18$$);
      null === $month$$4_trimEraPart$$ && null === $date$$6$$ ? ($month$$4_trimEraPart$$ = $parsedDate$$2_value$$135$$.getMonth(), $date$$6$$ = $parsedDate$$2_value$$135$$.getDate()) : null === $date$$6$$ && ($date$$6$$ = 1);
      $daysInMonth$$2_defaultYear_format$$18$$ = $_getDaysInMonth$$($eraPart_parseInfo_year$$4$$, $month$$4_trimEraPart$$);
      $_validateRange$$("day", $date$$6$$, 1, $daysInMonth$$2_defaultYear_format$$18$$, $date$$6$$, 1, $daysInMonth$$2_defaultYear_format$$18$$);
      $parsedDate$$2_value$$135$$.setFullYear($eraPart_parseInfo_year$$4$$, $month$$4_trimEraPart$$, $date$$6$$);
      null !== $weekDay$$2$$ && $parsedDate$$2_value$$135$$.getDay() !== $weekDay$$2$$ && $_throwWeekdayMismatch$$($adjustedMin_weekDayName$$, $parsedDate$$2_value$$135$$.getDate());
      $pmHour$$ && 12 > $timeObj$$1$$.hour && ($timeObj$$1$$.hour += 12);
      $parsedDate$$2_value$$135$$.setHours($timeObj$$1$$.hour, $timeObj$$1$$.minute, $timeObj$$1$$.second, $timeObj$$1$$.millisec);
      null !== $hourOffset_tzMinOffset$$ && ($adjustedMin_weekDayName$$ = $parsedDate$$2_value$$135$$.getMinutes() - ($hourOffset_tzMinOffset$$ + $parsedDate$$2_value$$135$$.getTimezoneOffset()), $parsedDate$$2_value$$135$$.setHours($parsedDate$$2_value$$135$$.getHours() + ($adjustedMin_weekDayName$$ / 60 << 0), $adjustedMin_weekDayName$$ % 60));
      return{value:$parsedDate$$2_value$$135$$};
    };
    $_getResolvedOptionsFromPattern$$ = function $$_getResolvedOptionsFromPattern$$$($locale$$13_result$$14$$, $m$$17_match$$9_numberingSystemKey$$2$$, $pattern$$5$$) {
      var $expFormat$$1$$ = $pattern$$5$$.replace($_ESCAPE_REGEXP$$, "\\\\$1"), $regexp$$5$$ = ["^"], $quoteCount$$3$$ = 0, $index$$92$$ = 0;
      for ($locale$$13_result$$14$$ = {locale:$locale$$13_result$$14$$, numberingSystem:$m$$17_match$$9_numberingSystemKey$$2$$, calendar:"gregorian"};null !== ($m$$17_match$$9_numberingSystemKey$$2$$ = $_TOKEN_REGEXP$$.exec($expFormat$$1$$));) {
        var $preMatch$$3$$ = $expFormat$$1$$.slice($index$$92$$, $m$$17_match$$9_numberingSystemKey$$2$$.index), $index$$92$$ = $_TOKEN_REGEXP$$.lastIndex, $quoteCount$$3$$ = $quoteCount$$3$$ + $_appendPreOrPostMatch$$($preMatch$$3$$, $regexp$$5$$);
        if (!($quoteCount$$3$$ % 2) && ($m$$17_match$$9_numberingSystemKey$$2$$ = $m$$17_match$$9_numberingSystemKey$$2$$[0], "/" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "zzzz" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "zzz" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "zz" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "z" !== $m$$17_match$$9_numberingSystemKey$$2$$)) {
          if (void 0 !== $_PROPERTIES_MAP$$[$m$$17_match$$9_numberingSystemKey$$2$$]) {
            if ($locale$$13_result$$14$$[$_PROPERTIES_MAP$$[$m$$17_match$$9_numberingSystemKey$$2$$].key] = $_PROPERTIES_MAP$$[$m$$17_match$$9_numberingSystemKey$$2$$].value, "kk" === $m$$17_match$$9_numberingSystemKey$$2$$ || "HH" === $m$$17_match$$9_numberingSystemKey$$2$$ || "H" === $m$$17_match$$9_numberingSystemKey$$2$$ || "k" === $m$$17_match$$9_numberingSystemKey$$2$$) {
              $locale$$13_result$$14$$.hour12 = !1;
            } else {
              if ("KK" === $m$$17_match$$9_numberingSystemKey$$2$$ || "hh" === $m$$17_match$$9_numberingSystemKey$$2$$ || "h" === $m$$17_match$$9_numberingSystemKey$$2$$ || "K" === $m$$17_match$$9_numberingSystemKey$$2$$) {
                $locale$$13_result$$14$$.hour12 = !0;
              }
            }
          } else {
            $_throwInvalidDateFormat$$($pattern$$5$$, $locale$$13_result$$14$$, $m$$17_match$$9_numberingSystemKey$$2$$);
          }
        }
      }
      return $locale$$13_result$$14$$;
    };
    $_dateTimeStyleFromPattern$$ = function $$_dateTimeStyleFromPattern$$$($pattern$$6_result$$15$$) {
      $pattern$$6_result$$15$$ = $_getResolvedOptionsFromPattern$$("", "", $pattern$$6_result$$15$$);
      var $isTime$$1$$ = void 0 !== $pattern$$6_result$$15$$.hour || void 0 !== $pattern$$6_result$$15$$.minute || void 0 !== $pattern$$6_result$$15$$.second;
      return void 0 === $pattern$$6_result$$15$$.year && void 0 === $pattern$$6_result$$15$$.month && void 0 === $pattern$$6_result$$15$$.weekday && void 0 === $pattern$$6_result$$15$$.day || !$isTime$$1$$ ? $isTime$$1$$ ? 1 : 0 : 2;
    };
    $_dateTimeStyle$$ = function $$_dateTimeStyle$$$($options$$174$$, $caller$$6$$) {
      if (void 0 !== $options$$174$$.pattern) {
        return $_dateTimeStyleFromPattern$$($options$$174$$.pattern);
      }
      var $getOption$$7_option$$21$$ = $OraI18nUtils$$.$getGetOption$($options$$174$$, $caller$$6$$), $isTime$$2$$ = void 0 !== $getOption$$7_option$$21$$("hour", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$21$$("minute", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$21$$("second", "string", ["2-digit", "numeric"]), $isDate$$3$$ = void 0 !== $getOption$$7_option$$21$$("year", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$21$$("month", 
      "string", ["2-digit", "numeric", "narrow", "short", "long"]) || void 0 !== $getOption$$7_option$$21$$("day", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$21$$("weekday", "string", ["narrow", "short", "long"]);
      if ($isDate$$3$$ && $isTime$$2$$) {
        return 2;
      }
      if ($isTime$$2$$) {
        return 1;
      }
      if ($isDate$$3$$) {
        return 0;
      }
      $getOption$$7_option$$21$$ = $getOption$$7_option$$21$$("formatType", "string", ["date", "time", "datetime"], "date");
      return "datetime" === $getOption$$7_option$$21$$ ? 2 : "time" === $getOption$$7_option$$21$$ ? 1 : 0;
    };
    $_createParseISOString$$ = function $$_createParseISOString$$$($dtStyle$$1$$, $d$$4$$) {
      var $ms$$, $val$$26$$;
      switch($dtStyle$$1$$) {
        case 0:
          $val$$26$$ = $OraI18nUtils$$.$padZeros$($d$$4$$.getFullYear(), 4) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMonth() + 1, 2) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getDate(), 2);
          break;
        case 1:
          $val$$26$$ = "T" + $OraI18nUtils$$.$padZeros$($d$$4$$.getHours(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMinutes(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getSeconds(), 2);
          $ms$$ = $d$$4$$.getMilliseconds();
          0 < $ms$$ && ($val$$26$$ += "." + $ms$$);
          break;
        default:
          $val$$26$$ = $OraI18nUtils$$.$padZeros$($d$$4$$.getFullYear(), 4) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMonth() + 1, 2) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getDate(), 2) + "T" + $OraI18nUtils$$.$padZeros$($d$$4$$.getHours(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMinutes(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getSeconds(), 2), $ms$$ = $d$$4$$.getMilliseconds(), 0 < $ms$$ && ($val$$26$$ += "." + $ms$$);
      }
      return $val$$26$$;
    };
    $_parseImpl$$ = function $$_parseImpl$$$($str$$14$$, $localeElements$$32$$, $options$$175$$, $locale$$14$$) {
      var $dtStyle$$2_numberingSystemKey$$3$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$14$$, "nu");
      void 0 === $OraI18nUtils$$.$numeringSystems$[$dtStyle$$2_numberingSystemKey$$3$$] && ($dtStyle$$2_numberingSystemKey$$3$$ = "latn");
      if ("latn" !== $dtStyle$$2_numberingSystemKey$$3$$) {
        var $dateObj_idx$$6$$, $dateFromISOStr_formats_latnStr_parsedDateObj$$ = [];
        for ($dateObj_idx$$6$$ = 0;$dateObj_idx$$6$$ < $str$$14$$.length;$dateObj_idx$$6$$++) {
          var $d$$5_pos$$1$$ = $OraI18nUtils$$.$numeringSystems$[$dtStyle$$2_numberingSystemKey$$3$$].indexOf($str$$14$$[$dateObj_idx$$6$$]);
          -1 != $d$$5_pos$$1$$ ? $dateFromISOStr_formats_latnStr_parsedDateObj$$.push($d$$5_pos$$1$$) : $dateFromISOStr_formats_latnStr_parsedDateObj$$.push($str$$14$$[$dateObj_idx$$6$$]);
        }
        $str$$14$$ = $dateFromISOStr_formats_latnStr_parsedDateObj$$.join("");
      }
      if (2 >= arguments.length || void 0 === $options$$175$$) {
        $options$$175$$ = {year:"numeric", month:"numeric", day:"numeric"};
      }
      $dtStyle$$2_numberingSystemKey$$3$$ = $_dateTimeStyle$$($options$$175$$, "OraDateTimeConverter.parse");
      $dateFromISOStr_formats_latnStr_parsedDateObj$$ = $options$$175$$.pattern || $_expandFormat$$($options$$175$$, $localeElements$$32$$, "OraDateTimeConverter.parse");
      $dateObj_idx$$6$$ = {};
      if (!0 === $OraI18nUtils$$.$_ISO_DATE_REGEXP$.test($str$$14$$)) {
        return $dateFromISOStr_formats_latnStr_parsedDateObj$$ = $OraI18nUtils$$.isoToLocalDate($str$$14$$), $dateObj_idx$$6$$.value = $_createParseISOString$$($dtStyle$$2_numberingSystemKey$$3$$, $dateFromISOStr_formats_latnStr_parsedDateObj$$), $dateObj_idx$$6$$;
      }
      $dateFromISOStr_formats_latnStr_parsedDateObj$$ = $_parseExact$$($str$$14$$, $dateFromISOStr_formats_latnStr_parsedDateObj$$, $options$$175$$, $localeElements$$32$$);
      $d$$5_pos$$1$$ = $dateFromISOStr_formats_latnStr_parsedDateObj$$.value;
      $dateObj_idx$$6$$.warning = $dateFromISOStr_formats_latnStr_parsedDateObj$$.warning;
      $dateObj_idx$$6$$.value = $_createParseISOString$$($dtStyle$$2_numberingSystemKey$$3$$, $d$$5_pos$$1$$);
      return $dateObj_idx$$6$$;
    };
    return{$getInstance$:function() {
      $instance$$12$$ || ($instance$$12$$ = $_init$$());
      return $instance$$12$$;
    }};
  }();
  var $OraI18nUtils$$ = {$numeringSystems$:{latn:"0123456789", arab:"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669", thai:"\u0e50\u0e51\u0e52\u0e53\u0e54\u0e55\u0e56\u0e57\u0e58\u0e59"}, $BCP47RE$:/^(?:(en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(art-lojban|cel-gaulish|no-(?:bok|nyn)|zh-(?:guoyu|hakka|min|min-nan|xiang)))$|^(x(?:-[0-9a-z]{1,8})+)$|^(?:((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|[0-9]{3}))?((?:-(?:[a-z0-9]{5,8}|[0-9][a-z0-9]{3}))*)?((?:-[0-9a-wy-z](?:-[a-z0-9]{2,8}){1,})*)?(-x(?:-[0-9a-z]{1,8})+)?)$/i, 
  $regexTrim$:/^\s+|\s+$|\u200f|\u200e/g, $regexTrimNumber$:/\s+|\u200f|\u200e/g, $zeros$:["0", "00", "000"], $_ISO_DATE_REGEXP$:/^\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?)?$|^T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?$/, $_getTimeZone$:function($isoString$$3$$) {
    if (!$isoString$$3$$ || "string" !== typeof $isoString$$3$$) {
      return null;
    }
    var $match$$10$$ = $OraI18nUtils$$.$_ISO_DATE_REGEXP$.exec($isoString$$3$$);
    null === $match$$10$$ && $OraI18nUtils$$.$_throwInvalidISOString$($isoString$$3$$);
    return void 0 !== $match$$10$$[1] ? $match$$10$$[1] : null;
  }, dateToLocalIso:function($date$$7$$) {
    return $OraI18nUtils$$.$padZeros$($date$$7$$.getFullYear(), 4) + "-" + $OraI18nUtils$$.$padZeros$($date$$7$$.getMonth() + 1, 2) + "-" + $OraI18nUtils$$.$padZeros$($date$$7$$.getDate(), 2) + "T" + $OraI18nUtils$$.$padZeros$($date$$7$$.getHours(), 2) + ":" + $OraI18nUtils$$.$padZeros$($date$$7$$.getMinutes(), 2) + ":" + $OraI18nUtils$$.$padZeros$($date$$7$$.getSeconds(), 2) + "." + $OraI18nUtils$$.$padZeros$($date$$7$$.getMilliseconds(), 3);
  }, isoToLocalDate:function($isoString$$4$$) {
    if (!$isoString$$4$$ || "string" !== typeof $isoString$$4$$) {
      return null;
    }
    null !== $OraI18nUtils$$.$_getTimeZone$($isoString$$4$$) && $OraI18nUtils$$.$_throwTimeZoneNotSupported$();
    return this._isoToLocalDateIgnoreTimezone($isoString$$4$$);
  }, _isoToLocalDateIgnoreTimezone:function($i$$116_isoString$$5_today$$) {
    var $milliSecSplitted_splitted$$ = $i$$116_isoString$$5_today$$.split("T"), $tIndex_timeSplitted$$ = $i$$116_isoString$$5_today$$.indexOf("T");
    $i$$116_isoString$$5_today$$ = new Date;
    var $datetime$$ = [$i$$116_isoString$$5_today$$.getFullYear(), $i$$116_isoString$$5_today$$.getMonth(), $i$$116_isoString$$5_today$$.getDate(), 0, 0, 0, 0];
    if ("" !== $milliSecSplitted_splitted$$[0]) {
      var $dateSplitted$$ = $milliSecSplitted_splitted$$[0].split("-");
      for ($i$$116_isoString$$5_today$$ = 0;$i$$116_isoString$$5_today$$ < $dateSplitted$$.length;$i$$116_isoString$$5_today$$++) {
        $datetime$$[$i$$116_isoString$$5_today$$] = parseInt($dateSplitted$$[$i$$116_isoString$$5_today$$], 10), 1 === $i$$116_isoString$$5_today$$ && $datetime$$[$i$$116_isoString$$5_today$$]--;
      }
    }
    if (-1 !== $tIndex_timeSplitted$$) {
      $milliSecSplitted_splitted$$ = $milliSecSplitted_splitted$$[1].split(".");
      $tIndex_timeSplitted$$ = $milliSecSplitted_splitted$$[0].split(":");
      for ($i$$116_isoString$$5_today$$ = 0;$i$$116_isoString$$5_today$$ < $tIndex_timeSplitted$$.length;$i$$116_isoString$$5_today$$++) {
        $datetime$$[3 + $i$$116_isoString$$5_today$$] = parseInt($tIndex_timeSplitted$$[$i$$116_isoString$$5_today$$], 10);
      }
      2 === $milliSecSplitted_splitted$$.length && $milliSecSplitted_splitted$$[1] && ($datetime$$[6] = parseInt($milliSecSplitted_splitted$$[1], 10));
    }
    return new Date($datetime$$[0], $datetime$$[1], $datetime$$[2], $datetime$$[3], $datetime$$[4], $datetime$$[5], $datetime$$[6]);
  }, $_throwTimeZoneNotSupported$:function() {
    var $error$$20$$;
    $error$$20$$ = Error("time zone is not supported");
    $error$$20$$.errorInfo = {errorCode:"timeZoneNotSupported"};
    throw $error$$20$$;
  }, $_throwInvalidISOString$:function($str$$15$$) {
    var $error$$21$$;
    $error$$21$$ = Error("The string " + $str$$15$$ + " is not a valid ISO 8601 string.");
    $error$$21$$.errorInfo = {errorCode:"invalidISOString", parameterMap:{isoStr:$str$$15$$}};
    throw $error$$21$$;
  }, trim:function($value$$136$$) {
    return($value$$136$$ + "").replace($OraI18nUtils$$.$regexTrim$, "");
  }, $trimNumber$:function($value$$137$$) {
    return($value$$137$$ + "").replace($OraI18nUtils$$.$regexTrimNumber$, "");
  }, $startsWith$:function($value$$138$$, $pattern$$7$$) {
    return 0 === $value$$138$$.indexOf($pattern$$7$$);
  }, $toUpper$:function($value$$139$$) {
    return $value$$139$$.split("\u00a0").join(" ").toUpperCase();
  }, $padZeros$:function($num$$5$$, $c$$33$$) {
    var $r_s$$4$$;
    $r_s$$4$$ = $num$$5$$ + "";
    return 1 < $c$$33$$ && $r_s$$4$$.length < $c$$33$$ ? ($r_s$$4$$ = $OraI18nUtils$$.$zeros$[$c$$33$$ - 2] + $r_s$$4$$, $r_s$$4$$.substr($r_s$$4$$.length - $c$$33$$, $c$$33$$)) : $r_s$$4$$;
  }, $getNumberingSystemKey$:function($localeElements$$33$$, $locale$$15$$) {
    if (void 0 === $locale$$15$$) {
      return "latn";
    }
    var $numberingSystemKey$$4$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$15$$, "nu") || "";
    void 0 === $localeElements$$33$$.numbers["symbols-numberSystem-" + $numberingSystemKey$$4$$] && ($numberingSystemKey$$4$$ = "latn");
    return $numberingSystemKey$$4$$;
  }, $parseBCP47$:function($match$$11_tag$$1$$) {
    $match$$11_tag$$1$$ = $OraI18nUtils$$.$BCP47RE$.exec($match$$11_tag$$1$$);
    if (!$match$$11_tag$$1$$) {
      return null;
    }
    var $match4$$ = $match$$11_tag$$1$$[4], $match4$$ = $match4$$ ? $match4$$.split("-") : null, $language$$ = null;
    $match4$$ && ($language$$ = $match4$$.shift());
    var $match7$$ = $match$$11_tag$$1$$[7];
    ($match7$$ = $match7$$ ? $match7$$.split("-") : null) && $match7$$.shift();
    var $match9$$ = $match$$11_tag$$1$$[9];
    if ($match9$$ = $match9$$ ? $match9$$.split("-") : null) {
      $match9$$.shift(), $match9$$.shift();
    }
    var $match3$$ = $match$$11_tag$$1$$[3];
    ($match3$$ = $match3$$ ? $match3$$.split("-") : null) && $match3$$.shift();
    return{language:{language:$language$$, $extlang$:$match4$$ || []}, $script$:$match$$11_tag$$1$$[5] || null, region:$match$$11_tag$$1$$[6] || null, variant:$match7$$ || null, $extension$:$OraI18nUtils$$.$parseExtension$($match$$11_tag$$1$$[8]), $privateuse$:$match9$$ || $match3$$ || [], $grandfathered$:{$irregular$:$match$$11_tag$$1$$[1] || null, $regular$:$match$$11_tag$$1$$[2] || null}};
  }, $parseExtension$:function($tag$$2$$) {
    if (!$tag$$2$$) {
      return[];
    }
    for (var $extensions$$ = [], $e$$49$$, $c$$34$$, $newExtension$$ = !1, $singleton$$ = !1, $extension$$ = "", $parsingExtension$$ = !1, $i$$117$$ = 0, $len$$10$$ = $tag$$2$$.length;$i$$117$$ < $len$$10$$;$i$$117$$++) {
      $c$$34$$ = $tag$$2$$[$i$$117$$], "-" !== $c$$34$$ || $newExtension$$ ? $newExtension$$ && !$singleton$$ ? ($singleton$$ = !0, $e$$49$$.singleton = $c$$34$$) : "-" === $c$$34$$ ? $parsingExtension$$ ? 1 === $extension$$.length ? ($singleton$$ = $parsingExtension$$ = !1, $extensions$$.push($e$$49$$), $e$$49$$ = {singleton:null, extension:[]}) : ($e$$49$$.extension.push($extension$$), $extension$$ = "") : ($extension$$ = "", $parsingExtension$$ = !0) : $extension$$ += $c$$34$$ : ($newExtension$$ = 
      !0, $e$$49$$ = {singleton:null, extension:[]});
    }
    $e$$49$$.extension.push($extension$$);
    $extensions$$.push($e$$49$$);
    return $extensions$$;
  }, $getLanguageExtension$:function($locale$$16$$, $token$$7$$) {
    var $ext$$1_parsedLang$$ = $OraI18nUtils$$.$parseBCP47$($locale$$16$$ || "en-US");
    if (null === $ext$$1_parsedLang$$ || void 0 === $ext$$1_parsedLang$$) {
      return null;
    }
    var $ext$$1_parsedLang$$ = $ext$$1_parsedLang$$.extension, $localeExtension$$, $i$$118$$;
    for ($i$$118$$ in $ext$$1_parsedLang$$) {
      if ("u" === $ext$$1_parsedLang$$[$i$$118$$].singleton) {
        for (var $j$$16$$ in $ext$$1_parsedLang$$[$i$$118$$].extension) {
          if ($ext$$1_parsedLang$$[$i$$118$$].extension[$j$$16$$] === $token$$7$$) {
            $j$$16$$++;
            $localeExtension$$ = $ext$$1_parsedLang$$[$i$$118$$].extension[$j$$16$$];
            break;
          }
        }
        break;
      }
    }
    return $localeExtension$$;
  }, $haveSamePropertiesLength$:function($obj$$50$$) {
    var $count$$26$$ = 0, $n$$14$$;
    for ($n$$14$$ in $obj$$50$$) {
      $count$$26$$++;
    }
    return $count$$26$$;
  }, $getLocaleElementsMainNode$:function($bundle$$5_mainNode$$14$$) {
    $bundle$$5_mainNode$$14$$ = $bundle$$5_mainNode$$14$$.main;
    var $subnode$$, $n$$15$$;
    for ($n$$15$$ in $bundle$$5_mainNode$$14$$) {
      $subnode$$ = $n$$15$$;
      break;
    }
    return $bundle$$5_mainNode$$14$$[$subnode$$];
  }, $getLocaleElementsMainNodeKey$:function($bundle$$6_mainNode$$15$$) {
    $bundle$$6_mainNode$$15$$ = $bundle$$6_mainNode$$15$$.main;
    var $subnode$$1$$, $n$$16$$;
    for ($n$$16$$ in $bundle$$6_mainNode$$15$$) {
      $subnode$$1$$ = $n$$16$$;
      break;
    }
    return $subnode$$1$$;
  }, $getGetOption$:function($options$$176$$, $getOptionCaller$$) {
    if (void 0 === $options$$176$$) {
      throw Error("Internal " + $getOptionCaller$$ + " error. Default options missing.");
    }
    return function getOption$$9($property$$14$$, $expectedValues_type$$76$$, $rangeError$$1_values$$7$$, $defaultValue$$2_i$$119_value$$140$$) {
      if (void 0 !== $options$$176$$[$property$$14$$]) {
        $defaultValue$$2_i$$119_value$$140$$ = $options$$176$$[$property$$14$$];
        switch($expectedValues_type$$76$$) {
          case "boolean":
            $defaultValue$$2_i$$119_value$$140$$ = Boolean($defaultValue$$2_i$$119_value$$140$$);
            break;
          case "string":
            $defaultValue$$2_i$$119_value$$140$$ = String($defaultValue$$2_i$$119_value$$140$$);
            break;
          case "number":
            $defaultValue$$2_i$$119_value$$140$$ = Number($defaultValue$$2_i$$119_value$$140$$);
            break;
          default:
            throw Error("Internal error. Wrong value type.");;
        }
        if (void 0 !== $rangeError$$1_values$$7$$ && -1 === $rangeError$$1_values$$7$$.indexOf($defaultValue$$2_i$$119_value$$140$$)) {
          $expectedValues_type$$76$$ = [];
          for ($defaultValue$$2_i$$119_value$$140$$ = 0;$defaultValue$$2_i$$119_value$$140$$ < $rangeError$$1_values$$7$$.length;$defaultValue$$2_i$$119_value$$140$$++) {
            $expectedValues_type$$76$$.push($rangeError$$1_values$$7$$[$defaultValue$$2_i$$119_value$$140$$]);
          }
          $rangeError$$1_values$$7$$ = new RangeError("The value '" + $options$$176$$[$property$$14$$] + "' is out of range for '" + $getOptionCaller$$ + "' options property '" + $property$$14$$ + "'. Valid values: " + $expectedValues_type$$76$$);
          $rangeError$$1_values$$7$$.errorInfo = {errorCode:"optionOutOfRange", parameterMap:{propertyName:$property$$14$$, propertyValue:$options$$176$$[$property$$14$$], propertyValueValid:$expectedValues_type$$76$$, caller:$getOptionCaller$$}};
          throw $rangeError$$1_values$$7$$;
        }
      }
      return $defaultValue$$2_i$$119_value$$140$$;
    };
  }}, $OraNumberConverter$$;
  $OraNumberConverter$$ = function() {
    function $_init$$1$$() {
      return{format:function($value$$141$$, $localeElements$$34$$, $options$$177$$, $locale$$17$$) {
        if (2 >= arguments.length || void 0 === $options$$177$$) {
          $options$$177$$ = {useGrouping:!0, style:"decimal"};
        }
        $_validateNumberOptions$$($options$$177$$, "OraNumberConverter.format");
        var $numberSettings$$ = {};
        $_getNumberSettings$$($localeElements$$34$$, $numberSettings$$, $options$$177$$, $locale$$17$$);
        return $_formatNumberImpl$$($value$$141$$, $options$$177$$, $localeElements$$34$$, $numberSettings$$, $locale$$17$$);
      }, parse:function($str$$16$$, $localeElements$$35$$, $options$$178$$, $locale$$18$$) {
        if ("number" === typeof $str$$16$$) {
          return $str$$16$$;
        }
        if ("[object Number]" === Object.prototype.toString.call($str$$16$$)) {
          return Number($str$$16$$);
        }
        if (2 >= arguments.length || void 0 === $options$$178$$) {
          $options$$178$$ = {useGrouping:!0, style:"decimal"};
        }
        var $errStr$$ = $str$$16$$;
        $_validateNumberOptions$$($options$$178$$, "OraNumberConverter.parse");
        var $localeElementsMainNode$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$35$$), $numberSettings$$1$$ = {}, $groupingSeparator_numberingSystemKey$$5_p$$2$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$18$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$groupingSeparator_numberingSystemKey$$5_p$$2$$] && ($groupingSeparator_numberingSystemKey$$5_p$$2$$ = "latn");
        if ("latn" !== $groupingSeparator_numberingSystemKey$$5_p$$2$$) {
          var $decimalSeparator_expSignInfo_fraction_idx$$7$$, $latnStr$$1_ret$$15_sign_value1$$8$$ = [];
          for ($decimalSeparator_expSignInfo_fraction_idx$$7$$ = 0;$decimalSeparator_expSignInfo_fraction_idx$$7$$ < $str$$16$$.length;$decimalSeparator_expSignInfo_fraction_idx$$7$$++) {
            var $exponent_num$$6_pos$$2$$ = $OraI18nUtils$$.$numeringSystems$[$groupingSeparator_numberingSystemKey$$5_p$$2$$].indexOf($str$$16$$[$decimalSeparator_expSignInfo_fraction_idx$$7$$]);
            -1 !== $exponent_num$$6_pos$$2$$ ? $latnStr$$1_ret$$15_sign_value1$$8$$.push($exponent_num$$6_pos$$2$$) : $latnStr$$1_ret$$15_sign_value1$$8$$.push($str$$16$$[$decimalSeparator_expSignInfo_fraction_idx$$7$$]);
          }
          $str$$16$$ = $latnStr$$1_ret$$15_sign_value1$$8$$.join("");
        }
        $_getNumberSettings$$($localeElements$$35$$, $numberSettings$$1$$, $options$$178$$, $locale$$18$$);
        $decimalSeparator_expSignInfo_fraction_idx$$7$$ = $localeElementsMainNode$$.numbers[$numberSettings$$1$$.numberingSystem].decimal;
        $groupingSeparator_numberingSystemKey$$5_p$$2$$ = $localeElementsMainNode$$.numbers[$numberSettings$$1$$.numberingSystem].group;
        $latnStr$$1_ret$$15_sign_value1$$8$$ = NaN;
        $latnStr$$1_ret$$15_sign_value1$$8$$ = $str$$16$$.replace(/ /g, "");
        if ($_REGEX_INFINITY$$.test($latnStr$$1_ret$$15_sign_value1$$8$$)) {
          return $latnStr$$1_ret$$15_sign_value1$$8$$ = parseFloat($str$$16$$);
        }
        var $altGroupSep_intAndFraction_signInfo$$ = $_parseNegativePattern$$($str$$16$$, $options$$178$$, $numberSettings$$1$$, $localeElementsMainNode$$), $latnStr$$1_ret$$15_sign_value1$$8$$ = $altGroupSep_intAndFraction_signInfo$$[0], $exponent_num$$6_pos$$2$$ = $altGroupSep_intAndFraction_signInfo$$[1], $latnStr$$1_ret$$15_sign_value1$$8$$ = $latnStr$$1_ret$$15_sign_value1$$8$$ || "+";
        if ($altGroupSep_intAndFraction_signInfo$$[2]) {
          return $latnStr$$1_ret$$15_sign_value1$$8$$ = parseFloat($latnStr$$1_ret$$15_sign_value1$$8$$ + $exponent_num$$6_pos$$2$$), $_throwNaNException$$($latnStr$$1_ret$$15_sign_value1$$8$$, $options$$178$$, $numberSettings$$1$$, $errStr$$);
        }
        var $exponent_num$$6_pos$$2$$ = $exponent_num$$6_pos$$2$$.replace(/ /g, ""), $exponentSymbol_integer$$ = $numberSettings$$1$$.exponential, $decimalPos_exponentPos$$ = $exponent_num$$6_pos$$2$$.indexOf($exponentSymbol_integer$$.toLowerCase());
        0 > $decimalPos_exponentPos$$ && ($decimalPos_exponentPos$$ = $exponent_num$$6_pos$$2$$.indexOf($OraI18nUtils$$.$toUpper$($exponentSymbol_integer$$)));
        0 > $decimalPos_exponentPos$$ ? ($altGroupSep_intAndFraction_signInfo$$ = $exponent_num$$6_pos$$2$$, $exponent_num$$6_pos$$2$$ = null) : ($altGroupSep_intAndFraction_signInfo$$ = $exponent_num$$6_pos$$2$$.substr(0, $decimalPos_exponentPos$$), $exponent_num$$6_pos$$2$$ = $exponent_num$$6_pos$$2$$.substr($decimalPos_exponentPos$$ + $exponentSymbol_integer$$.length));
        $decimalPos_exponentPos$$ = $altGroupSep_intAndFraction_signInfo$$.indexOf($decimalSeparator_expSignInfo_fraction_idx$$7$$);
        0 > $decimalPos_exponentPos$$ ? ($exponentSymbol_integer$$ = $altGroupSep_intAndFraction_signInfo$$, $decimalSeparator_expSignInfo_fraction_idx$$7$$ = null) : ($exponentSymbol_integer$$ = $altGroupSep_intAndFraction_signInfo$$.substr(0, $decimalPos_exponentPos$$), $decimalSeparator_expSignInfo_fraction_idx$$7$$ = $altGroupSep_intAndFraction_signInfo$$.substr($decimalPos_exponentPos$$ + $decimalSeparator_expSignInfo_fraction_idx$$7$$.length));
        $exponentSymbol_integer$$ = $exponentSymbol_integer$$.split($groupingSeparator_numberingSystemKey$$5_p$$2$$).join("");
        $altGroupSep_intAndFraction_signInfo$$ = $groupingSeparator_numberingSystemKey$$5_p$$2$$.replace(/\u00A0/g, " ");
        $groupingSeparator_numberingSystemKey$$5_p$$2$$ !== $altGroupSep_intAndFraction_signInfo$$ && ($exponentSymbol_integer$$ = $exponentSymbol_integer$$.split($altGroupSep_intAndFraction_signInfo$$).join(""));
        $groupingSeparator_numberingSystemKey$$5_p$$2$$ = $latnStr$$1_ret$$15_sign_value1$$8$$ + $exponentSymbol_integer$$;
        null !== $decimalSeparator_expSignInfo_fraction_idx$$7$$ && ($groupingSeparator_numberingSystemKey$$5_p$$2$$ += "." + $decimalSeparator_expSignInfo_fraction_idx$$7$$);
        null !== $exponent_num$$6_pos$$2$$ && ($decimalSeparator_expSignInfo_fraction_idx$$7$$ = $_parseNegativeExponent$$($exponent_num$$6_pos$$2$$, $localeElementsMainNode$$, $numberSettings$$1$$), $groupingSeparator_numberingSystemKey$$5_p$$2$$ += "e" + ($decimalSeparator_expSignInfo_fraction_idx$$7$$[0] || "+") + $decimalSeparator_expSignInfo_fraction_idx$$7$$[1]);
        $_REGEX_PARSE_FLOAT$$.test($groupingSeparator_numberingSystemKey$$5_p$$2$$) ? $latnStr$$1_ret$$15_sign_value1$$8$$ = parseFloat($groupingSeparator_numberingSystemKey$$5_p$$2$$) : ($groupingSeparator_numberingSystemKey$$5_p$$2$$ = $_lenientParseNumber$$($str$$16$$, $numberSettings$$1$$, $localeElementsMainNode$$), $latnStr$$1_ret$$15_sign_value1$$8$$ = parseFloat($groupingSeparator_numberingSystemKey$$5_p$$2$$[0] + $groupingSeparator_numberingSystemKey$$5_p$$2$$[1]));
        return $_throwNaNException$$($latnStr$$1_ret$$15_sign_value1$$8$$, $options$$178$$, $numberSettings$$1$$, $errStr$$);
      }, resolvedOptions:function($localeElements$$36$$, $options$$179$$, $locale$$19$$) {
        if (3 > arguments.length || void 0 === $locale$$19$$) {
          $locale$$19$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$36$$);
        }
        if (2 > arguments.length || void 0 === $options$$179$$) {
          $options$$179$$ = {useGrouping:!0, style:"decimal"};
        }
        var $numberSettings$$2_resOptions$$ = {};
        $_validateNumberOptions$$($options$$179$$, "OraNumberConverter.resolvedOptions");
        $_getNumberSettings$$($localeElements$$36$$, $numberSettings$$2_resOptions$$, $options$$179$$, $locale$$19$$);
        $numberSettings$$2_resOptions$$.numberingSystemKey = $OraI18nUtils$$.$getLanguageExtension$($locale$$19$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberSettings$$2_resOptions$$.numberingSystemKey] && ($numberSettings$$2_resOptions$$.numberingSystemKey = "latn");
        $numberSettings$$2_resOptions$$ = {locale:$locale$$19$$, style:void 0 === $options$$179$$.style ? "decimal" : $options$$179$$.style, useGrouping:void 0 === $options$$179$$.useGrouping ? !0 : $options$$179$$.useGrouping, minimumIntegerDigits:$numberSettings$$2_resOptions$$.minimumIntegerDigits, minimumFractionDigits:$numberSettings$$2_resOptions$$.minimumFractionDigits, maximumFractionDigits:$numberSettings$$2_resOptions$$.maximumFractionDigits, numberingSystem:$numberSettings$$2_resOptions$$.numberingSystemKey};
        "decimal" === $options$$179$$.style && void 0 !== $options$$179$$.decimalFormat && ($numberSettings$$2_resOptions$$.decimalFormat = $options$$179$$.decimalFormat);
        "currency" === $options$$179$$.style && ($numberSettings$$2_resOptions$$.currency = $options$$179$$.currency, $numberSettings$$2_resOptions$$.currencyDisplay = void 0 === $options$$179$$.currencyDisplay ? "symbol" : $options$$179$$.currencyDisplay);
        void 0 !== $options$$179$$.pattern && ($numberSettings$$2_resOptions$$.pattern = $options$$179$$.pattern);
        return $numberSettings$$2_resOptions$$;
      }};
    }
    var $_zeroPad$$, $_formatNumberImpl$$, $_applyPatternImpl$$, $_parseNegativePattern$$, $_lenientParseNumber$$, $_parseNegativeExponent$$, $_getNumberSettings$$, $_validateNumberOptions$$, $_throwMissingCurrency$$, $_throwNumberOutOfRange$$, $_getNumberOption$$, $_throwNaNException$$, $_throwUnsupportedParseOption$$, $_toRawFixed$$, $_toExponentialPrecision$$, $_toCompactNumber$$, $instance$$13$$, $_regionMatches$$, $_expandAffix$$, $_expandAffixes$$, $_throwSyntaxError$$, $_REGEX_INFINITY$$ = 
    /^[+\-]?infinity$/i, $_REGEX_PARSE_FLOAT$$ = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/, $_LENIENT_REGEX_PARSE_FLOAT$$ = /([^+-.0-9]*)([+\-]?\d*\.?\d*(E[+\-]?\d+)?).*$/, $_ESCAPE_REGEXP$$1$$ = /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, $_REGEX_TRIM_ZEROS$$ = /(^0\.0*)([^0].*$)/, $_decimalTypeValues$$ = {trillion:[1E14, 1E13, 1E12], billion:[1E11, 1E10, 1E9], million:[1E8, 1E7, 1E6], thousand:[1E5, 1E4, 1E3]}, $_decimalTypeValuesMap$$ = {trillion:1E12, billion:1E9, million:1E6, thousand:1E3};
    $_zeroPad$$ = function $$_zeroPad$$$($str$$17$$, $count$$27$$, $left$$4$$) {
      var $l$$1$$;
      for ($l$$1$$ = $str$$17$$.length;$l$$1$$ < $count$$27$$;$l$$1$$ += 1) {
        $str$$17$$ = $left$$4$$ ? "0" + $str$$17$$ : $str$$17$$ + "0";
      }
      return $str$$17$$;
    };
    $_throwNumberOutOfRange$$ = function $$_throwNumberOutOfRange$$$($value$$142$$, $minimum$$, $maximum$$, $property$$15$$) {
      var $rangeError$$2$$ = new RangeError($value$$142$$ + " is out of range.  Enter a value between " + $minimum$$ + " and " + $maximum$$ + " for " + $property$$15$$);
      $rangeError$$2$$.errorInfo = {errorCode:"numberOptionOutOfRange", parameterMap:{value:$value$$142$$, minValue:$minimum$$, maxValue:$maximum$$, propertyName:$property$$15$$}};
      throw $rangeError$$2$$;
    };
    $_getNumberOption$$ = function $$_getNumberOption$$$($options$$180_value$$143$$, $property$$16$$, $minimum$$1$$, $maximum$$1$$, $fallback$$) {
      $options$$180_value$$143$$ = $options$$180_value$$143$$[$property$$16$$];
      return void 0 !== $options$$180_value$$143$$ ? ($options$$180_value$$143$$ = Number($options$$180_value$$143$$), (isNaN($options$$180_value$$143$$) || $options$$180_value$$143$$ < $minimum$$1$$ || $options$$180_value$$143$$ > $maximum$$1$$) && $_throwNumberOutOfRange$$($options$$180_value$$143$$, $minimum$$1$$, $maximum$$1$$, $property$$16$$), Math.floor($options$$180_value$$143$$)) : $fallback$$;
    };
    $_getNumberSettings$$ = function $$_getNumberSettings$$$($localeElements$$37$$, $numberSettings$$3$$, $options$$181$$, $locale$$20_numberingSystemKey$$6_pat$$) {
      var $localeElementsMainNode$$1$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$37$$);
      $locale$$20_numberingSystemKey$$6_pat$$ = $OraI18nUtils$$.$getNumberingSystemKey$($localeElementsMainNode$$1$$, $locale$$20_numberingSystemKey$$6_pat$$);
      $numberSettings$$3$$.numberingSystemKey = $locale$$20_numberingSystemKey$$6_pat$$;
      $numberSettings$$3$$.numberingSystem = "symbols-numberSystem-" + $locale$$20_numberingSystemKey$$6_pat$$;
      if (void 0 !== $options$$181$$.pattern && 0 < $options$$181$$.pattern.length) {
        $locale$$20_numberingSystemKey$$6_pat$$ = $options$$181$$.pattern;
      } else {
        var $key$$40_lang$$;
        switch($options$$181$$.style) {
          case "decimal":
            $key$$40_lang$$ = "decimalFormats-numberSystem-";
            break;
          case "currency":
            $key$$40_lang$$ = "currencyFormats-numberSystem-";
            break;
          case "percent":
            $key$$40_lang$$ = "percentFormats-numberSystem-";
            break;
          default:
            $key$$40_lang$$ = "decimalFormats-numberSystem-";
        }
        $key$$40_lang$$ += $numberSettings$$3$$.numberingSystemKey;
        $locale$$20_numberingSystemKey$$6_pat$$ = $localeElementsMainNode$$1$$.numbers[$key$$40_lang$$].standard;
        var $decFormatLength$$ = $options$$181$$.decimalFormat;
        void 0 !== $decFormatLength$$ && ($numberSettings$$3$$.shortDecimalFormat = $localeElementsMainNode$$1$$.numbers[$key$$40_lang$$][$decFormatLength$$].decimalFormat);
      }
      $key$$40_lang$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$37$$)).language.language;
      $numberSettings$$3$$.plurals = $localeElements$$37$$.supplemental.plurals;
      $numberSettings$$3$$.lang = $key$$40_lang$$;
      $numberSettings$$3$$.pat = $locale$$20_numberingSystemKey$$6_pat$$;
      $numberSettings$$3$$.minusSign = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].minusSign;
      $numberSettings$$3$$.decimalSeparator = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].decimal;
      $numberSettings$$3$$.exponential = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].exponential;
      $numberSettings$$3$$.groupingSeparator = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].group;
      $numberSettings$$3$$.currencyDisplay = $options$$181$$.currencyDisplay;
      void 0 !== $options$$181$$.currency && ($numberSettings$$3$$.currencyCode = $options$$181$$.currency.toUpperCase());
      $numberSettings$$3$$.style = $options$$181$$.style;
      $_applyPatternImpl$$($options$$181$$, $locale$$20_numberingSystemKey$$6_pat$$, $localeElementsMainNode$$1$$, $numberSettings$$3$$);
      void 0 === $options$$181$$.pattern && ($numberSettings$$3$$.minimumIntegerDigits = $_getNumberOption$$($options$$181$$, "minimumIntegerDigits", 1, 21, $numberSettings$$3$$.minimumIntegerDigits), void 0 !== $options$$181$$.maximumFractionDigits && ($numberSettings$$3$$.maximumFractionDigits = $_getNumberOption$$($options$$181$$, "maximumFractionDigits", 0, 20, $numberSettings$$3$$.maximumFractionDigits), $numberSettings$$3$$.maximumFractionDigits < $numberSettings$$3$$.minimumFractionDigits && 
      ($numberSettings$$3$$.minimumFractionDigits = $numberSettings$$3$$.maximumFractionDigits)), void 0 !== $options$$181$$.minimumFractionDigits && ($numberSettings$$3$$.minimumFractionDigits = $_getNumberOption$$($options$$181$$, "minimumFractionDigits", 0, 20, $numberSettings$$3$$.minimumFractionDigits)), $numberSettings$$3$$.maximumFractionDigits < $numberSettings$$3$$.minimumFractionDigits && ($numberSettings$$3$$.maximumFractionDigits = $numberSettings$$3$$.minimumFractionDigits));
    };
    $_throwMissingCurrency$$ = function $$_throwMissingCurrency$$$($prop$$55$$) {
      var $typeError$$ = new TypeError('The property "currency" is required whenthe property "' + $prop$$55$$ + '" is "currency". An accepted value is a three-letter ISO 4217 currency code.');
      $typeError$$.errorInfo = {errorCode:"optionTypesMismatch", parameterMap:{propertyName:$prop$$55$$, propertyValue:"currency", requiredPropertyName:"currency", requiredPropertyValueValid:"a three-letter ISO 4217 currency code"}};
      throw $typeError$$;
    };
    $_throwUnsupportedParseOption$$ = function $$_throwUnsupportedParseOption$$$() {
      var $error$$22$$;
      $error$$22$$ = Error("long and short decimalFormats are not supported for parsing");
      $error$$22$$.errorInfo = {errorCode:"unsupportedParseFormat", parameterMap:{value:"decimal"}};
      throw $error$$22$$;
    };
    $_validateNumberOptions$$ = function $$_validateNumberOptions$$$($options$$182$$, $caller$$7$$) {
      var $c$$35_getOption$$10$$ = $OraI18nUtils$$.$getGetOption$($options$$182$$, $caller$$7$$), $s$$5$$ = $c$$35_getOption$$10$$("style", "string", ["currency", "decimal", "percent", "perMill"], "decimal");
      "decimal" === $s$$5$$ && ($s$$5$$ = $c$$35_getOption$$10$$("decimalFormat", "string", ["standard", "short", "long"]), "OraNumberConverter.parse" === $caller$$7$$ && void 0 !== $s$$5$$ && "standard" !== $s$$5$$ && $_throwUnsupportedParseOption$$());
      $c$$35_getOption$$10$$ = $c$$35_getOption$$10$$("currency", "string");
      "currency" === $s$$5$$ && void 0 === $c$$35_getOption$$10$$ && $_throwMissingCurrency$$("style");
    };
    $_toCompactNumber$$ = function $$_toCompactNumber$$$($number$$, $options$$183$$, $numberSettings$$4$$) {
      function $_getzerosInPattern$$($s$$7$$) {
        var $i$$121$$ = 0, $n$$17$$ = 0, $idx$$8$$ = 0, $prefix$$15$$ = "";
        if ("0" !== $s$$7$$[0]) {
          for (;"0" !== $s$$7$$[$i$$121$$] && $i$$121$$ < $s$$7$$.length;) {
            $i$$121$$++;
          }
          $prefix$$15$$ = $s$$7$$.substr(0, $i$$121$$);
          $idx$$8$$ = $i$$121$$;
        }
        for ($i$$121$$ = $idx$$8$$;$i$$121$$ < $s$$7$$.length;$i$$121$$++) {
          if ("0" === $s$$7$$[$i$$121$$]) {
            $n$$17$$++;
          } else {
            break;
          }
        }
        return[$prefix$$15$$, $n$$17$$];
      }
      var $s$$6_typeVal$$ = function _matchTypeValue($n$$18$$) {
        var $i$$122$$, $j$$17$$, $len$$11$$;
        for ($i$$122$$ in $_decimalTypeValues$$) {
          for ($len$$11$$ = $_decimalTypeValues$$[$i$$122$$].length, $j$$17$$ = 0;$j$$17$$ < $len$$11$$;$j$$17$$++) {
            if ($_decimalTypeValues$$[$i$$122$$][$j$$17$$] <= $n$$18$$) {
              return[$i$$122$$, $_decimalTypeValues$$[$i$$122$$][$j$$17$$]];
            }
          }
        }
        return[$n$$18$$, null];
      }($number$$), $plural_prefix$$14$$ = "";
      if (null !== $s$$6_typeVal$$[1]) {
        var $plural_prefix$$14$$ = $numberSettings$$4$$.plurals[$numberSettings$$4$$.lang](Math.floor($number$$ / $_decimalTypeValuesMap$$[$s$$6_typeVal$$[0]])), $decimalFormatType$$ = "" + $s$$6_typeVal$$[1] + "-count-" + $plural_prefix$$14$$, $decimalFormatType$$ = $numberSettings$$4$$.shortDecimalFormat[$decimalFormatType$$];
        void 0 === $decimalFormatType$$ && ($decimalFormatType$$ = "" + $s$$6_typeVal$$[1] + "-count-other", $decimalFormatType$$ = $numberSettings$$4$$.shortDecimalFormat[$decimalFormatType$$]);
        var $tokens$$4$$ = $_getzerosInPattern$$($decimalFormatType$$), $zeros$$ = $tokens$$4$$[1], $plural_prefix$$14$$ = $tokens$$4$$[0];
        if ($zeros$$ < $decimalFormatType$$.length) {
          var $i$$120$$ = 1 * Math.pow(10, $zeros$$), $i$$120$$ = $s$$6_typeVal$$[1] / $i$$120$$ * 10;
          $number$$ /= $i$$120$$;
        }
      }
      $s$$6_typeVal$$ = "";
      void 0 !== $decimalFormatType$$ && ($s$$6_typeVal$$ = $decimalFormatType$$.substr($zeros$$ + $tokens$$4$$[0].length));
      return $s$$6_typeVal$$ = $plural_prefix$$14$$ + $_toRawFixed$$($number$$, $options$$183$$, $numberSettings$$4$$) + $s$$6_typeVal$$;
    };
    $_toExponentialPrecision$$ = function $$_toExponentialPrecision$$$($number$$1$$, $numberSettings$$5$$) {
      var $numStr0_posExp$$ = $number$$1$$ + "", $str1_trimExp$$ = 0, $numStr1_split$$ = $numStr0_posExp$$.split(/e/i), $numStr$$ = $numStr1_split$$[0];
      $_REGEX_TRIM_ZEROS$$.lastIndex = 0;
      var $exponent$$1_match$$12$$ = $_REGEX_TRIM_ZEROS$$.exec($numStr$$);
      null !== $exponent$$1_match$$12$$ ? ($str1_trimExp$$ = $exponent$$1_match$$12$$[1].length - 1, $numStr$$ = $exponent$$1_match$$12$$[2]) : $numStr$$ = $numStr$$.replace(".", "");
      var $exponent$$1_match$$12$$ = 1 < $numStr1_split$$.length ? parseInt($numStr1_split$$[1], 10) : 0, $numStr1_split$$ = parseInt($numStr$$, 10), $len$$12_padLen$$ = $numberSettings$$5$$.minimumIntegerDigits + $numberSettings$$5$$.maximumFractionDigits;
      $numStr$$.length > $len$$12_padLen$$ && ($len$$12_padLen$$ -= $numStr$$.length, $numStr1_split$$ = Math.round($numStr1_split$$ * Math.pow(10, $len$$12_padLen$$)));
      $len$$12_padLen$$ = $numberSettings$$5$$.minimumIntegerDigits + $numberSettings$$5$$.minimumFractionDigits;
      $numStr1_split$$ = $_zeroPad$$($numStr1_split$$ + "", $len$$12_padLen$$, !1);
      $exponent$$1_match$$12$$ = -1 !== $numStr0_posExp$$.indexOf(".") ? $exponent$$1_match$$12$$ - ($numberSettings$$5$$.minimumIntegerDigits - $numStr0_posExp$$.indexOf(".") + $str1_trimExp$$) : $exponent$$1_match$$12$$ - ($len$$12_padLen$$ - $numStr$$.length - $numberSettings$$5$$.minimumFractionDigits);
      $numStr0_posExp$$ = Math.abs($exponent$$1_match$$12$$);
      $numStr0_posExp$$ = $_zeroPad$$($numStr0_posExp$$ + "", $numberSettings$$5$$.minExponentDigits, !0);
      0 > $exponent$$1_match$$12$$ && ($numStr0_posExp$$ = $numberSettings$$5$$.minusSign + $numStr0_posExp$$);
      $str1_trimExp$$ = $numStr1_split$$.slice(0, $numberSettings$$5$$.minimumIntegerDigits);
      return $str1_trimExp$$ = 0 < $numStr1_split$$.slice($numberSettings$$5$$.minimumIntegerDigits).length ? $str1_trimExp$$ + ($numberSettings$$5$$.decimalSeparator + $numStr1_split$$.slice($numberSettings$$5$$.minimumIntegerDigits) + $numberSettings$$5$$.exponential + $numStr0_posExp$$) : $str1_trimExp$$ + ($numberSettings$$5$$.exponential + $numStr0_posExp$$);
    };
    $_toRawFixed$$ = function $$_toRawFixed$$$($number$$2_sep$$, $options$$184_stringIndex$$, $numberSettings$$6_rets$$) {
      var $curSize$$ = $numberSettings$$6_rets$$.groupingSize, $curSize0$$ = $numberSettings$$6_rets$$.groupingSize0, $factor$$2_numberString_rounded$$, $split$$1$$ = ($number$$2_sep$$ + "").split(/e/i), $exponent$$2$$ = 1 < $split$$1$$.length ? parseInt($split$$1$$[1], 10) : 0;
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      var $split$$1$$ = $factor$$2_numberString_rounded$$.split("."), $right$$4$$ = 1 < $split$$1$$.length ? $split$$1$$[1] : "";
      if (1 < $split$$1$$.length && $right$$4$$.length > $exponent$$2$$) {
        var $precision_ret$$16$$ = Math.min($numberSettings$$6_rets$$.maximumFractionDigits, $right$$4$$.length - $exponent$$2$$);
        $factor$$2_numberString_rounded$$ = Math.pow(10, $precision_ret$$16$$);
        $factor$$2_numberString_rounded$$ = Math.round($number$$2_sep$$ * $factor$$2_numberString_rounded$$) / $factor$$2_numberString_rounded$$;
        isFinite($factor$$2_numberString_rounded$$) || ($factor$$2_numberString_rounded$$ = $number$$2_sep$$);
        $number$$2_sep$$ = $factor$$2_numberString_rounded$$;
      }
      $split$$1$$ = ($number$$2_sep$$ + "").split(/e/i);
      $exponent$$2$$ = 1 < $split$$1$$.length ? parseInt($split$$1$$[1], 10) : 0;
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      $split$$1$$ = $factor$$2_numberString_rounded$$.split(".");
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      $right$$4$$ = 1 < $split$$1$$.length ? $split$$1$$[1] : "";
      0 < $exponent$$2$$ ? ($right$$4$$ = $_zeroPad$$($right$$4$$, $exponent$$2$$, !1), $factor$$2_numberString_rounded$$ += $right$$4$$.slice(0, $exponent$$2$$), $right$$4$$ = $right$$4$$.substr($exponent$$2$$)) : 0 > $exponent$$2$$ && ($exponent$$2$$ = -$exponent$$2$$, $factor$$2_numberString_rounded$$ = $_zeroPad$$($factor$$2_numberString_rounded$$, $exponent$$2$$ + 1, !0), $right$$4$$ = $factor$$2_numberString_rounded$$.slice(-$exponent$$2$$, $factor$$2_numberString_rounded$$.length) + $right$$4$$, 
      $factor$$2_numberString_rounded$$ = $factor$$2_numberString_rounded$$.slice(0, -$exponent$$2$$));
      $right$$4$$ = 0 < $precision_ret$$16$$ ? $numberSettings$$6_rets$$.decimalSeparator + ($right$$4$$.length > $precision_ret$$16$$ ? $right$$4$$.slice(0, $precision_ret$$16$$) : $_zeroPad$$($right$$4$$, $precision_ret$$16$$, !1)) : 0 < $numberSettings$$6_rets$$.minimumFractionDigits ? $numberSettings$$6_rets$$.decimalSeparator : "";
      $right$$4$$ = $_zeroPad$$($right$$4$$, $numberSettings$$6_rets$$.decimalSeparator.length + $numberSettings$$6_rets$$.minimumFractionDigits, !1);
      $number$$2_sep$$ = $numberSettings$$6_rets$$.groupingSeparator;
      $precision_ret$$16$$ = "";
      !1 === $options$$184_stringIndex$$.useGrouping && void 0 === $options$$184_stringIndex$$.pattern && ($number$$2_sep$$ = "");
      $factor$$2_numberString_rounded$$ = $_zeroPad$$($factor$$2_numberString_rounded$$, $numberSettings$$6_rets$$.minimumIntegerDigits, !0);
      $options$$184_stringIndex$$ = $factor$$2_numberString_rounded$$.length - 1;
      for ($right$$4$$ = 1 < $right$$4$$.length ? $right$$4$$ : "";0 <= $options$$184_stringIndex$$;) {
        if (0 === $curSize$$ || $curSize$$ > $options$$184_stringIndex$$) {
          return $numberSettings$$6_rets$$ = $factor$$2_numberString_rounded$$.slice(0, $options$$184_stringIndex$$ + 1) + ($precision_ret$$16$$.length ? $number$$2_sep$$ + $precision_ret$$16$$ + $right$$4$$ : $right$$4$$);
        }
        $precision_ret$$16$$ = $factor$$2_numberString_rounded$$.slice($options$$184_stringIndex$$ - $curSize$$ + 1, $options$$184_stringIndex$$ + 1) + ($precision_ret$$16$$.length ? $number$$2_sep$$ + $precision_ret$$16$$ : "");
        $options$$184_stringIndex$$ -= $curSize$$;
        0 < $curSize0$$ && ($curSize$$ = $numberSettings$$6_rets$$.groupingSize0);
      }
      return $numberSettings$$6_rets$$ = $factor$$2_numberString_rounded$$.slice(0, $options$$184_stringIndex$$ + 1) + $number$$2_sep$$ + $precision_ret$$16$$ + $right$$4$$;
    };
    $_formatNumberImpl$$ = function $$_formatNumberImpl$$$($numberingSystemKey$$7_value$$144$$, $options$$185_ret$$17$$, $localeElements$$38_localeElementsMainNode$$2_number$$3$$, $idx$$9_numberSettings$$7$$, $locale$$21_nativeRet$$1$$) {
      $localeElements$$38_localeElementsMainNode$$2_number$$3$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$38_localeElementsMainNode$$2_number$$3$$);
      if (!isFinite($numberingSystemKey$$7_value$$144$$)) {
        return Infinity === $numberingSystemKey$$7_value$$144$$ || -Infinity === $numberingSystemKey$$7_value$$144$$ ? $localeElements$$38_localeElementsMainNode$$2_number$$3$$.numbers[$idx$$9_numberSettings$$7$$.numberingSystem].infinity : $localeElements$$38_localeElementsMainNode$$2_number$$3$$.numbers[$idx$$9_numberSettings$$7$$.numberingSystem].nan;
      }
      $localeElements$$38_localeElementsMainNode$$2_number$$3$$ = Math.abs($numberingSystemKey$$7_value$$144$$);
      !0 === $idx$$9_numberSettings$$7$$.isPercent || "percent" === $options$$185_ret$$17$$.style ? $localeElements$$38_localeElementsMainNode$$2_number$$3$$ *= 100 : !0 === $idx$$9_numberSettings$$7$$.isPerMill && ($localeElements$$38_localeElementsMainNode$$2_number$$3$$ *= 1E3);
      $localeElements$$38_localeElementsMainNode$$2_number$$3$$ = "decimal" === $options$$185_ret$$17$$.style && void 0 !== $options$$185_ret$$17$$.decimalFormat && "standard" !== $options$$185_ret$$17$$.decimalFormat ? $_toCompactNumber$$($localeElements$$38_localeElementsMainNode$$2_number$$3$$, $options$$185_ret$$17$$, $idx$$9_numberSettings$$7$$) : !0 === $idx$$9_numberSettings$$7$$.useExponentialNotation ? $_toExponentialPrecision$$($localeElements$$38_localeElementsMainNode$$2_number$$3$$, 
      $idx$$9_numberSettings$$7$$) : $_toRawFixed$$($localeElements$$38_localeElementsMainNode$$2_number$$3$$, $options$$185_ret$$17$$, $idx$$9_numberSettings$$7$$);
      $options$$185_ret$$17$$ = "";
      $options$$185_ret$$17$$ = 0 > $numberingSystemKey$$7_value$$144$$ ? $options$$185_ret$$17$$ + ($idx$$9_numberSettings$$7$$.negativePrefix + $localeElements$$38_localeElementsMainNode$$2_number$$3$$ + $idx$$9_numberSettings$$7$$.negativeSuffix) : $options$$185_ret$$17$$ + ($idx$$9_numberSettings$$7$$.positivePrefix + $localeElements$$38_localeElementsMainNode$$2_number$$3$$ + $idx$$9_numberSettings$$7$$.positiveSuffix);
      $numberingSystemKey$$7_value$$144$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$21_nativeRet$$1$$, "nu");
      void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$7_value$$144$$] && ($numberingSystemKey$$7_value$$144$$ = "latn");
      if ("latn" !== $numberingSystemKey$$7_value$$144$$) {
        $locale$$21_nativeRet$$1$$ = [];
        for ($idx$$9_numberSettings$$7$$ = 0;$idx$$9_numberSettings$$7$$ < $options$$185_ret$$17$$.length;$idx$$9_numberSettings$$7$$++) {
          "0" <= $options$$185_ret$$17$$[$idx$$9_numberSettings$$7$$] && "9" >= $options$$185_ret$$17$$[$idx$$9_numberSettings$$7$$] ? $locale$$21_nativeRet$$1$$.push($OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$7_value$$144$$][$options$$185_ret$$17$$[$idx$$9_numberSettings$$7$$]]) : $locale$$21_nativeRet$$1$$.push($options$$185_ret$$17$$[$idx$$9_numberSettings$$7$$]);
        }
        return $locale$$21_nativeRet$$1$$.join("");
      }
      return $options$$185_ret$$17$$;
    };
    $_parseNegativePattern$$ = function $$_parseNegativePattern$$$($num$$7_value$$145$$, $options$$186_symbol$$1$$, $numberSettings$$8_ret$$18$$, $localeElements$$39$$) {
      $num$$7_value$$145$$ = $OraI18nUtils$$.$trimNumber$($num$$7_value$$145$$);
      var $sign$$1$$ = "", $exactMatch$$ = !1, $nbSettingNegSuffix_posSignRegExp$$ = new RegExp("^" + $localeElements$$39$$.numbers[$numberSettings$$8_ret$$18$$.numberingSystem].plusSign.replace($_ESCAPE_REGEXP$$1$$, "\\$1"));
      $num$$7_value$$145$$ = $num$$7_value$$145$$.replace($nbSettingNegSuffix_posSignRegExp$$, "");
      var $nbSettingPosPrefix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$18$$.positivePrefix), $nbSettingPosSuffix_posSuffix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$18$$.positiveSuffix), $nbSettingNegPrefix_negPrefix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$18$$.negativePrefix), $nbSettingNegSuffix_posSignRegExp$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$18$$.negativeSuffix), $code$$4_posPrefRegexp_posPrefix$$ = new RegExp("^" + ($nbSettingPosPrefix$$ || 
      "").replace($_ESCAPE_REGEXP$$1$$, "\\$1")), $posSuffRegexp$$ = new RegExp(($nbSettingPosSuffix_posSuffix$$ || "").replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$"), $negPrefRegexp$$ = new RegExp("^" + ($nbSettingNegPrefix_negPrefix$$ || "").replace($_ESCAPE_REGEXP$$1$$, "\\$1")), $negSuffRegexp$$ = new RegExp(($nbSettingNegSuffix_posSignRegExp$$ || "").replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$");
      if (!0 === $negPrefRegexp$$.test($num$$7_value$$145$$) && !0 === $negSuffRegexp$$.test($num$$7_value$$145$$)) {
        $num$$7_value$$145$$ = $num$$7_value$$145$$.replace($negPrefRegexp$$, ""), $num$$7_value$$145$$ = $num$$7_value$$145$$.replace($negSuffRegexp$$, ""), $sign$$1$$ = "-", $exactMatch$$ = !0;
      } else {
        if (!0 === $code$$4_posPrefRegexp_posPrefix$$.test($num$$7_value$$145$$) && !0 === $posSuffRegexp$$.test($num$$7_value$$145$$)) {
          $num$$7_value$$145$$ = $num$$7_value$$145$$.replace($code$$4_posPrefRegexp_posPrefix$$, ""), $num$$7_value$$145$$ = $num$$7_value$$145$$.replace($posSuffRegexp$$, ""), $sign$$1$$ = "+", $exactMatch$$ = !0;
        } else {
          if ("currency" === $options$$186_symbol$$1$$.style) {
            $options$$186_symbol$$1$$ = $code$$4_posPrefRegexp_posPrefix$$ = $numberSettings$$8_ret$$18$$.currencyCode;
            var $negSuffix_repStr$$;
            void 0 !== $localeElements$$39$$.numbers.currencies[$code$$4_posPrefRegexp_posPrefix$$] && ($options$$186_symbol$$1$$ = $localeElements$$39$$.numbers.currencies[$code$$4_posPrefRegexp_posPrefix$$].symbol);
            void 0 === $numberSettings$$8_ret$$18$$.currencyDisplay || "symbol" === $numberSettings$$8_ret$$18$$.currencyDisplay ? $negSuffix_repStr$$ = $options$$186_symbol$$1$$ : "code" === $numberSettings$$8_ret$$18$$.currencyDisplay && ($negSuffix_repStr$$ = $code$$4_posPrefRegexp_posPrefix$$);
            void 0 !== $negSuffix_repStr$$ && ($code$$4_posPrefRegexp_posPrefix$$ = ($nbSettingPosPrefix$$ || "").replace($negSuffix_repStr$$, ""), $nbSettingPosSuffix_posSuffix$$ = ($nbSettingPosSuffix_posSuffix$$ || "").replace($negSuffix_repStr$$, ""), $nbSettingNegPrefix_negPrefix$$ = ($nbSettingNegPrefix_negPrefix$$ || "").replace($negSuffix_repStr$$, ""), $negSuffix_repStr$$ = ($nbSettingNegSuffix_posSignRegExp$$ || "").replace($negSuffix_repStr$$, ""), $code$$4_posPrefRegexp_posPrefix$$ = 
            new RegExp(("^" + $code$$4_posPrefRegexp_posPrefix$$).replace($_ESCAPE_REGEXP$$1$$, "\\$1")), $posSuffRegexp$$ = new RegExp($nbSettingPosSuffix_posSuffix$$.replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$"), $negPrefRegexp$$ = new RegExp(("^" + $nbSettingNegPrefix_negPrefix$$).replace($_ESCAPE_REGEXP$$1$$, "\\$1")), $negSuffRegexp$$ = new RegExp($negSuffix_repStr$$.replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$"), !0 === $negPrefRegexp$$.test($num$$7_value$$145$$) && !0 === $negSuffRegexp$$.test($num$$7_value$$145$$) ? 
            ($num$$7_value$$145$$ = $num$$7_value$$145$$.replace($negPrefRegexp$$, ""), $num$$7_value$$145$$ = $num$$7_value$$145$$.replace($negSuffRegexp$$, ""), $sign$$1$$ = "-", $exactMatch$$ = !0) : !0 === $code$$4_posPrefRegexp_posPrefix$$.test($num$$7_value$$145$$) && !0 === $posSuffRegexp$$.test($num$$7_value$$145$$) && ($num$$7_value$$145$$ = $num$$7_value$$145$$.replace($code$$4_posPrefRegexp_posPrefix$$, ""), $num$$7_value$$145$$ = $num$$7_value$$145$$.replace($posSuffRegexp$$, ""), $sign$$1$$ = 
            "+", $exactMatch$$ = !0));
          }
        }
      }
      $exactMatch$$ ? $numberSettings$$8_ret$$18$$ = [$sign$$1$$, $num$$7_value$$145$$] : ($numberSettings$$8_ret$$18$$ = $_lenientParseNumber$$($num$$7_value$$145$$, $numberSettings$$8_ret$$18$$, $localeElements$$39$$), $numberSettings$$8_ret$$18$$[2] = !0);
      return $numberSettings$$8_ret$$18$$;
    };
    $_lenientParseNumber$$ = function $$_lenientParseNumber$$$($num$$8$$, $altGroupSep$$1_exponential_numberSettings$$9$$, $localeElements$$40$$) {
      var $groupingSeparator$$1_match$$13$$ = $localeElements$$40$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].group, $decimalSeparator$$1$$ = $localeElements$$40$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].decimal, $localeMinusSign$$ = $localeElements$$40$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].minusSign, $sign$$2$$ = "", $dot_resNum$$ = "";
      $altGroupSep$$1_exponential_numberSettings$$9$$ = $OraI18nUtils$$.$toUpper$($localeElements$$40$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].exponential);
      $num$$8$$ = $OraI18nUtils$$.$toUpper$($num$$8$$);
      $num$$8$$ = $num$$8$$.split($altGroupSep$$1_exponential_numberSettings$$9$$).join("E");
      $num$$8$$ = $num$$8$$.split($groupingSeparator$$1_match$$13$$).join("");
      $altGroupSep$$1_exponential_numberSettings$$9$$ = $groupingSeparator$$1_match$$13$$.replace(/\u00A0/g, " ");
      $groupingSeparator$$1_match$$13$$ !== $altGroupSep$$1_exponential_numberSettings$$9$$ && ($num$$8$$ = $num$$8$$.split($altGroupSep$$1_exponential_numberSettings$$9$$).join(""));
      $num$$8$$ = $num$$8$$.split($decimalSeparator$$1$$).join(".");
      "." === $num$$8$$.charAt(0) && ($num$$8$$ = $num$$8$$.substr(1), $dot_resNum$$ = ".");
      $num$$8$$ = $num$$8$$.replace($localeMinusSign$$, "-");
      $groupingSeparator$$1_match$$13$$ = $_LENIENT_REGEX_PARSE_FLOAT$$.exec($num$$8$$);
      $dot_resNum$$ += $groupingSeparator$$1_match$$13$$[2];
      $OraI18nUtils$$.$startsWith$($dot_resNum$$, "-") ? ($dot_resNum$$ = $dot_resNum$$.substr(1), $sign$$2$$ = "-") : $OraI18nUtils$$.$startsWith$($num$$8$$, "+") && ($dot_resNum$$ = $dot_resNum$$.substr(1), $sign$$2$$ = "+");
      return[$sign$$2$$, $dot_resNum$$];
    };
    $_parseNegativeExponent$$ = function $$_parseNegativeExponent$$$($value$$146$$, $localeElements$$41_pos$$3$$, $numberSettings$$10$$) {
      var $neg$$ = $localeElements$$41_pos$$3$$.numbers[$numberSettings$$10$$.numberingSystem].minusSign;
      $localeElements$$41_pos$$3$$ = $localeElements$$41_pos$$3$$.numbers[$numberSettings$$10$$.numberingSystem].plusSign;
      var $ret$$19$$;
      $value$$146$$ = $OraI18nUtils$$.$trimNumber$($value$$146$$);
      $neg$$ = $OraI18nUtils$$.$trimNumber$($neg$$);
      $localeElements$$41_pos$$3$$ = $OraI18nUtils$$.$trimNumber$($localeElements$$41_pos$$3$$);
      $OraI18nUtils$$.$startsWith$($value$$146$$, $neg$$) ? $ret$$19$$ = ["-", $value$$146$$.substr($neg$$.length)] : $OraI18nUtils$$.$startsWith$($value$$146$$, $OraI18nUtils$$.$trimNumber$($localeElements$$41_pos$$3$$)) && ($ret$$19$$ = ["+", $value$$146$$.substr($localeElements$$41_pos$$3$$.length)]);
      return $ret$$19$$ || ["", $value$$146$$];
    };
    var $posPrefixPattern$$, $posSuffixPattern$$, $negPrefixPattern$$, $negSuffixPattern$$;
    $_throwSyntaxError$$ = function $$_throwSyntaxError$$$($pattern$$8$$) {
      var $syntaxError$$;
      $syntaxError$$ = new SyntaxError('Unexpected character(s) encountered in the pattern "' + $pattern$$8$$ + ' An example of a valid pattern is "#,##0.###".');
      $syntaxError$$.errorInfo = {errorCode:"optionValueInvalid", parameterMap:{propertyName:"pattern", propertyValue:$pattern$$8$$, propertyValueHint:"#,##0.###"}};
      throw $syntaxError$$;
    };
    $_regionMatches$$ = function $$_regionMatches$$$($str1$$1$$, $offset1$$, $str2$$1$$) {
      return null !== (new RegExp($str2$$1$$, "i")).exec($str1$$1$$.substr($offset1$$, $str2$$1$$.length));
    };
    $_expandAffixes$$ = function $$_expandAffixes$$$($localeElements$$42$$, $numberSettings$$11$$) {
      var $curDisplay$$ = {};
      null !== $posPrefixPattern$$ && ($numberSettings$$11$$.positivePrefix = $_expandAffix$$($posPrefixPattern$$, $localeElements$$42$$, $numberSettings$$11$$, $curDisplay$$));
      null !== $posSuffixPattern$$ && ($numberSettings$$11$$.positiveSuffix = $_expandAffix$$($posSuffixPattern$$, $localeElements$$42$$, $numberSettings$$11$$, $curDisplay$$));
      null !== $negPrefixPattern$$ && ($numberSettings$$11$$.negativePrefix = $_expandAffix$$($negPrefixPattern$$, $localeElements$$42$$, $numberSettings$$11$$, $curDisplay$$));
      null !== $negSuffixPattern$$ && ($numberSettings$$11$$.negativeSuffix = $_expandAffix$$($negSuffixPattern$$, $localeElements$$42$$, $numberSettings$$11$$, $curDisplay$$));
      void 0 !== $curDisplay$$.name && ($numberSettings$$11$$.positiveSuffix = "\u00a0" + $curDisplay$$.name, $numberSettings$$11$$.positivePrefix = "", "ar" === $numberSettings$$11$$.lang ? ($numberSettings$$11$$.negativeSuffix = $localeElements$$42$$.numbers[$numberSettings$$11$$.numberingSystem].minusSign + "\u00a0" + $curDisplay$$.name, $numberSettings$$11$$.negativePrefix = "") : ($numberSettings$$11$$.negativeSuffix = "\u00a0" + $curDisplay$$.name, $numberSettings$$11$$.negativePrefix = $localeElements$$42$$.numbers[$numberSettings$$11$$.numberingSystem].minusSign));
    };
    $_expandAffix$$ = function $$_expandAffix$$$($pattern$$9$$, $localeElements$$43$$, $numberSettings$$12$$, $currencyDisplay$$) {
      for (var $buffer$$9$$ = "", $i$$123$$ = 0;$i$$123$$ < $pattern$$9$$.length;) {
        var $c$$36_code$$5$$ = $pattern$$9$$.charAt($i$$123$$++);
        if ("'" !== $c$$36_code$$5$$) {
          switch($c$$36_code$$5$$) {
            case "\u00a4":
              var $name$$79$$ = $c$$36_code$$5$$ = $numberSettings$$12$$.currencyCode, $symbol$$2$$ = $c$$36_code$$5$$;
              void 0 !== $localeElements$$43$$.numbers.currencies[$c$$36_code$$5$$] && ($name$$79$$ = $localeElements$$43$$.numbers.currencies[$c$$36_code$$5$$].displayName, $symbol$$2$$ = $localeElements$$43$$.numbers.currencies[$c$$36_code$$5$$].symbol);
              void 0 === $numberSettings$$12$$.currencyDisplay || "symbol" === $numberSettings$$12$$.currencyDisplay ? $c$$36_code$$5$$ = $symbol$$2$$ : "code" !== $numberSettings$$12$$.currencyDisplay && ($c$$36_code$$5$$ = $name$$79$$, $currencyDisplay$$.name = $c$$36_code$$5$$);
              break;
            case "%":
              $c$$36_code$$5$$ = $localeElements$$43$$.numbers[$numberSettings$$12$$.numberingSystem].percentSign;
              break;
            case "\u2030":
              $c$$36_code$$5$$ = $localeElements$$43$$.numbers[$numberSettings$$12$$.numberingSystem].perMille;
              break;
            case "-":
              $c$$36_code$$5$$ = $localeElements$$43$$.numbers[$numberSettings$$12$$.numberingSystem].minusSign;
          }
          $buffer$$9$$ = $buffer$$9$$.concat($c$$36_code$$5$$);
        }
      }
      return $buffer$$9$$;
    };
    $_applyPatternImpl$$ = function $$_applyPatternImpl$$$($options$$187$$, $pattern$$10$$, $localeElements$$44$$, $numberSettings$$13$$) {
      for (var $gotNegative$$ = !1, $useExponentialNotation$$ = !1, $phaseOneLength$$ = 0, $start$$26$$ = 0, $isPrefix$$ = !0, $j$$18$$ = 1;0 <= $j$$18$$ && $start$$26$$ < $pattern$$10$$.length;--$j$$18$$) {
        for (var $digitTotalCount_inQuote$$ = !1, $prefix$$16$$ = "", $suffix$$ = "", $decimalPos$$1$$ = -1, $multiplier$$ = 1, $digitLeftCount$$ = 0, $n$$19_zeroDigitCount$$ = 0, $digitRightCount$$ = 0, $groupingCount$$ = -1, $groupingCount0$$ = -1, $minExponentDigits$$, $phase$$ = 0, $isPrefix$$ = !0, $pos$$4$$ = $start$$26$$;$pos$$4$$ < $pattern$$10$$.length;++$pos$$4$$) {
          var $ch$$1_doubled$$ = $pattern$$10$$.charAt($pos$$4$$);
          switch($phase$$) {
            case 0:
            ;
            case 2:
              if ($digitTotalCount_inQuote$$) {
                if ("'" === $ch$$1_doubled$$) {
                  $pos$$4$$ + 1 < $pattern$$10$$.length && "'" === $pattern$$10$$.charAt($pos$$4$$ + 1) ? (++$pos$$4$$, $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("''") : $suffix$$ = $suffix$$.concat("''")) : $digitTotalCount_inQuote$$ = !1;
                  continue;
                }
              } else {
                if ("#" === $ch$$1_doubled$$ || "0" === $ch$$1_doubled$$ || "," === $ch$$1_doubled$$ || "." === $ch$$1_doubled$$) {
                  $phase$$ = 1;
                  --$pos$$4$$;
                  continue;
                } else {
                  if ("\u00a4" === $ch$$1_doubled$$) {
                    void 0 === $options$$187$$.currency && $_throwMissingCurrency$$("pattern");
                    $options$$187$$.style = "currency";
                    ($ch$$1_doubled$$ = $pos$$4$$ + 1 < $pattern$$10$$.length && "\u00a4" === $pattern$$10$$.charAt($pos$$4$$ + 1)) && ++$pos$$4$$;
                    $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat($ch$$1_doubled$$ ? "'\u00a4\u00a4" : "'\u00a4") : $suffix$$ = $suffix$$.concat($ch$$1_doubled$$ ? "'\u00a4\u00a4" : "'\u00a4");
                    continue;
                  } else {
                    if ("'" === $ch$$1_doubled$$) {
                      if ("'" === $ch$$1_doubled$$) {
                        $pos$$4$$ + 1 < $pattern$$10$$.length && "'" === $pattern$$10$$.charAt($pos$$4$$ + 1) ? (++$pos$$4$$, $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("''") : $suffix$$ = $suffix$$.concat("''")) : $digitTotalCount_inQuote$$ = !0;
                        continue;
                      }
                    } else {
                      if (";" === $ch$$1_doubled$$) {
                        0 !== $phase$$ && 0 !== $j$$18$$ || $_throwSyntaxError$$($pattern$$10$$);
                        $start$$26$$ = $pos$$4$$ + 1;
                        $pos$$4$$ = $pattern$$10$$.length;
                        continue;
                      } else {
                        if ("%" === $ch$$1_doubled$$) {
                          $options$$187$$.style = "percent";
                          1 !== $multiplier$$ && $_throwSyntaxError$$($pattern$$10$$);
                          $numberSettings$$13$$.isPercent = !0;
                          $multiplier$$ = 100;
                          $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("'%") : $suffix$$ = $suffix$$.concat("'%");
                          continue;
                        } else {
                          if ("\u2030" === $ch$$1_doubled$$) {
                            1 !== $multiplier$$ && $_throwSyntaxError$$($pattern$$10$$);
                            $options$$187$$.style = "perMill";
                            $numberSettings$$13$$.isPerMill = !0;
                            $multiplier$$ = 1E3;
                            $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("'\u2030") : $suffix$$ = $suffix$$.concat("'\u2030");
                            continue;
                          } else {
                            if ("-" === $ch$$1_doubled$$) {
                              $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("'-") : $suffix$$ = $suffix$$.concat("'-");
                              continue;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat($ch$$1_doubled$$) : $suffix$$ = $suffix$$.concat($ch$$1_doubled$$);
              break;
            case 1:
              if (1 === $j$$18$$) {
                ++$phaseOneLength$$;
              } else {
                0 === --$phaseOneLength$$ && ($phase$$ = 2, $isPrefix$$ = !1);
                continue;
              }
              if ("#" === $ch$$1_doubled$$) {
                0 < $n$$19_zeroDigitCount$$ ? ++$digitRightCount$$ : ++$digitLeftCount$$, 0 <= $groupingCount$$ && 0 > $decimalPos$$1$$ && ++$groupingCount$$;
              } else {
                if ("0" === $ch$$1_doubled$$) {
                  0 < $digitRightCount$$ && $_throwSyntaxError$$($pattern$$10$$), ++$n$$19_zeroDigitCount$$, 0 <= $groupingCount$$ && 0 > $decimalPos$$1$$ && ++$groupingCount$$;
                } else {
                  if ("," === $ch$$1_doubled$$) {
                    $groupingCount0$$ = $groupingCount$$, $groupingCount$$ = 0;
                  } else {
                    if ("." === $ch$$1_doubled$$) {
                      0 <= $decimalPos$$1$$ && $_throwSyntaxError$$($pattern$$10$$), $decimalPos$$1$$ = $digitLeftCount$$ + $n$$19_zeroDigitCount$$ + $digitRightCount$$;
                    } else {
                      if ($_regionMatches$$($pattern$$10$$, $pos$$4$$, "E")) {
                        $useExponentialNotation$$ && $_throwSyntaxError$$($pattern$$10$$);
                        $useExponentialNotation$$ = !0;
                        $minExponentDigits$$ = 0;
                        for ($pos$$4$$ += 1;$pos$$4$$ < $pattern$$10$$.length && "0" === $pattern$$10$$.charAt($pos$$4$$);) {
                          ++$minExponentDigits$$, ++$phaseOneLength$$, ++$pos$$4$$;
                        }
                        (1 > $digitLeftCount$$ + $n$$19_zeroDigitCount$$ || 1 > $minExponentDigits$$) && $_throwSyntaxError$$($pattern$$10$$);
                        $phase$$ = 2;
                        $isPrefix$$ = !1;
                        --$pos$$4$$;
                      } else {
                        $phase$$ = 2, $isPrefix$$ = !1, --$pos$$4$$, --$phaseOneLength$$;
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        0 === $n$$19_zeroDigitCount$$ && 0 < $digitLeftCount$$ && 0 <= $decimalPos$$1$$ && ($n$$19_zeroDigitCount$$ = $decimalPos$$1$$, 0 === $n$$19_zeroDigitCount$$ && ++$n$$19_zeroDigitCount$$, $digitRightCount$$ = $digitLeftCount$$ - $n$$19_zeroDigitCount$$, $digitLeftCount$$ = $n$$19_zeroDigitCount$$ - 1, $n$$19_zeroDigitCount$$ = 1);
        (0 > $decimalPos$$1$$ && 0 < $digitRightCount$$ || 0 <= $decimalPos$$1$$ && ($decimalPos$$1$$ < $digitLeftCount$$ || $decimalPos$$1$$ > $digitLeftCount$$ + $n$$19_zeroDigitCount$$) || 0 === $groupingCount$$ || $digitTotalCount_inQuote$$) && $_throwSyntaxError$$($pattern$$10$$);
        1 === $j$$18$$ ? ($posPrefixPattern$$ = $prefix$$16$$, $posSuffixPattern$$ = $suffix$$, $negPrefixPattern$$ = $posPrefixPattern$$, $negSuffixPattern$$ = $posSuffixPattern$$, $digitTotalCount_inQuote$$ = $digitLeftCount$$ + $n$$19_zeroDigitCount$$ + $digitRightCount$$, $numberSettings$$13$$.minimumIntegerDigits = (0 <= $decimalPos$$1$$ ? $decimalPos$$1$$ : $digitTotalCount_inQuote$$) - $digitLeftCount$$, $numberSettings$$13$$.maximumIntegerDigits = $useExponentialNotation$$ ? $digitLeftCount$$ + 
        $numberSettings$$13$$.minimumIntegerDigits : 2147483647, $numberSettings$$13$$.maximumFractionDigits = 0 <= $decimalPos$$1$$ ? $digitTotalCount_inQuote$$ - $decimalPos$$1$$ : 0, $numberSettings$$13$$.minimumFractionDigits = 0 <= $decimalPos$$1$$ ? $digitLeftCount$$ + $n$$19_zeroDigitCount$$ - $decimalPos$$1$$ : 0, $numberSettings$$13$$.groupingSize = 0 < $groupingCount$$ ? $groupingCount$$ : 0, $numberSettings$$13$$.groupingSize0 = $groupingCount0$$) : ($negPrefixPattern$$ = $prefix$$16$$, 
        $negSuffixPattern$$ = $suffix$$, $gotNegative$$ = !0);
      }
      0 === $pattern$$10$$.length && ($posPrefixPattern$$ = $posSuffixPattern$$ = "", $numberSettings$$13$$.minimumIntegerDigits = 0, $numberSettings$$13$$.maximumIntegerDigits = 2147483647, $numberSettings$$13$$.minimumFractionDigits = 0, $numberSettings$$13$$.maximumFractionDigits = 2147483647);
      $numberSettings$$13$$.useExponentialNotation = $useExponentialNotation$$;
      $numberSettings$$13$$.minExponentDigits = $minExponentDigits$$;
      if (!$gotNegative$$ || 0 === $negPrefixPattern$$.localeCompare($posPrefixPattern$$) && 0 === $negSuffixPattern$$.localeCompare($posSuffixPattern$$)) {
        "currency" === $options$$187$$.style && "ar" === $numberSettings$$13$$.lang ? ($negSuffixPattern$$ = $posSuffixPattern$$ + "'\u200f-", $negPrefixPattern$$ = $posPrefixPattern$$) : ($negSuffixPattern$$ = $posSuffixPattern$$, $negPrefixPattern$$ = "'-" + $posPrefixPattern$$);
      }
      $_expandAffixes$$($localeElements$$44$$, $numberSettings$$13$$);
    };
    $_throwNaNException$$ = function $$_throwNaNException$$$($msg$$21_ret$$20$$, $error$$23_options$$188$$, $numberSettings$$14$$, $errStr$$1$$) {
      if (isNaN($msg$$21_ret$$20$$)) {
        var $code$$6$$;
        $msg$$21_ret$$20$$ = "Unparsable number " + $errStr$$1$$ + " The expected number pattern is " + $numberSettings$$14$$.pat;
        switch($error$$23_options$$188$$.style) {
          case "decimal":
            $code$$6$$ = "decimalFormatMismatch";
            break;
          case "currency":
            $code$$6$$ = "currencyFormatMismatch";
            break;
          case "percent":
            $code$$6$$ = "percentFormatMismatch";
        }
        $error$$23_options$$188$$ = Error($msg$$21_ret$$20$$);
        $error$$23_options$$188$$.errorInfo = {errorCode:$code$$6$$, parameterMap:{value:$errStr$$1$$, format:$numberSettings$$14$$.pat}};
        throw $error$$23_options$$188$$;
      }
      !0 === $numberSettings$$14$$.isPercent || "percent" === $error$$23_options$$188$$.style ? $msg$$21_ret$$20$$ /= 100 : !0 === $numberSettings$$14$$.isPerMill && ($msg$$21_ret$$20$$ /= 1E3);
      return $msg$$21_ret$$20$$;
    };
    return{$getInstance$:function() {
      $instance$$13$$ || ($instance$$13$$ = $_init$$1$$());
      return $instance$$13$$;
    }};
  }();
  $oj$$6$$.$RegExpValidator$ = function $$oj$$6$$$$RegExpValidator$$($options$$189$$) {
    this.Init($options$$189$$);
  };
  $goog$exportPath_$$("RegExpValidator", $oj$$6$$.$RegExpValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$RegExpValidator$, $oj$$6$$.$Validator$, "oj.RegExpValidator");
  $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_DETAIL$ = "oj-validator.regExp.detail";
  $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_SUMMARY$ = "oj-validator.regExp.summary";
  $oj$$6$$.$RegExpValidator$.prototype.Init = function $$oj$$6$$$$RegExpValidator$$$Init$($options$$190$$) {
    $oj$$6$$.$RegExpValidator$.$superclass$.Init.call(this);
    this.$_options$ = $options$$190$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.Init", {Init:$oj$$6$$.$RegExpValidator$.prototype.Init});
  $oj$$6$$.$RegExpValidator$.prototype.validate = function $$oj$$6$$$$RegExpValidator$$$validate$($params$$11_value$$147$$) {
    var $pattern$$11$$ = this.$_options$ && this.$_options$.pattern || "", $label$$2$$, $localizedSummary_summary$$19$$, $detail$$22_localizedDetail$$;
    if (null === $params$$11_value$$147$$ || void 0 === $params$$11_value$$147$$ || "" === $params$$11_value$$147$$) {
      return!0;
    }
    $params$$11_value$$147$$ = $params$$11_value$$147$$ ? $params$$11_value$$147$$.toString() : $params$$11_value$$147$$;
    var $matchArr$$;
    $matchArr$$ = $params$$11_value$$147$$.match("^(" + $pattern$$11$$ + ")$");
    if (null === $matchArr$$ || $matchArr$$[0] !== $params$$11_value$$147$$) {
      throw this.$_options$ && ($localizedSummary_summary$$19$$ = this.$_options$.messageSummary || null, $detail$$22_localizedDetail$$ = this.$_options$.messageDetail || null, $label$$2$$ = this.$_options$ && this.$_options$.label || ""), $params$$11_value$$147$$ = {label:$label$$2$$, pattern:$pattern$$11$$, value:$params$$11_value$$147$$}, $localizedSummary_summary$$19$$ = $localizedSummary_summary$$19$$ ? $oj$$6$$.$Translations$.$applyParameters$($localizedSummary_summary$$19$$, $params$$11_value$$147$$) : 
      $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getSummaryKey$(), $params$$11_value$$147$$), $detail$$22_localizedDetail$$ = $detail$$22_localizedDetail$$ ? $oj$$6$$.$Translations$.$applyParameters$($detail$$22_localizedDetail$$, $params$$11_value$$147$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getDetailKey$(), $params$$11_value$$147$$), new $oj$$6$$.$ValidatorError$($localizedSummary_summary$$19$$, $detail$$22_localizedDetail$$);
    }
    return!0;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.validate", {validate:$oj$$6$$.$RegExpValidator$.prototype.validate});
  $oj$$6$$.$RegExpValidator$.prototype.$getHint$ = function $$oj$$6$$$$RegExpValidator$$$$getHint$$() {
    var $hint$$6$$ = null, $params$$12$$ = {};
    this.$_options$ && this.$_options$.hint && ($params$$12$$ = {pattern:this.$_options$.pattern}, $hint$$6$$ = $oj$$6$$.$Translations$.$applyParameters$(this.$_options$.hint, $params$$12$$));
    return $hint$$6$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.getHint", {$getHint$:$oj$$6$$.$RegExpValidator$.prototype.$getHint$});
  $oj$$6$$.$RegExpValidator$.prototype.$_getSummaryKey$ = function $$oj$$6$$$$RegExpValidator$$$$_getSummaryKey$$() {
    return $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_SUMMARY$;
  };
  $oj$$6$$.$RegExpValidator$.prototype.$_getDetailKey$ = function $$oj$$6$$$$RegExpValidator$$$$_getDetailKey$$() {
    return $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_DETAIL$;
  };
  $oj$$6$$.$RequiredValidator$ = function $$oj$$6$$$$RequiredValidator$$($options$$191$$) {
    this.Init($options$$191$$);
  };
  $goog$exportPath_$$("RequiredValidator", $oj$$6$$.$RequiredValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$RequiredValidator$, $oj$$6$$.$Validator$, "oj.RequiredValidator");
  $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_DETAIL$ = "oj-validator.required.detail";
  $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_SUMMARY$ = "oj-validator.required.summary";
  $oj$$6$$.$RequiredValidator$.prototype.Init = function $$oj$$6$$$$RequiredValidator$$$Init$($options$$192$$) {
    $oj$$6$$.$RequiredValidator$.$superclass$.Init.call(this);
    this.$_options$ = $options$$192$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.Init", {Init:$oj$$6$$.$RequiredValidator$.prototype.Init});
  $oj$$6$$.$RequiredValidator$.prototype.validate = function $$oj$$6$$$$RequiredValidator$$$validate$($localizedSummary$$1_value$$148$$) {
    var $detail$$23_localizedDetail$$1$$, $summary$$20$$, $label$$3_params$$13$$ = {}, $label$$3_params$$13$$ = "";
    if ("number" === typeof $localizedSummary$$1_value$$148$$ && 0 === $localizedSummary$$1_value$$148$$ || $localizedSummary$$1_value$$148$$ && 0 !== $localizedSummary$$1_value$$148$$.length) {
      return!0;
    }
    this.$_options$ && ($detail$$23_localizedDetail$$1$$ = this.$_options$.messageDetail || this.$_options$.message || null, $summary$$20$$ = this.$_options$.messageSummary || null, $label$$3_params$$13$$ = this.$_options$.label || "");
    $label$$3_params$$13$$ = {label:$label$$3_params$$13$$};
    $localizedSummary$$1_value$$148$$ = $summary$$20$$ ? $oj$$6$$.$Translations$.$applyParameters$($summary$$20$$, $label$$3_params$$13$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getSummaryKey$(), $label$$3_params$$13$$);
    $detail$$23_localizedDetail$$1$$ = $detail$$23_localizedDetail$$1$$ ? $oj$$6$$.$Translations$.$applyParameters$($detail$$23_localizedDetail$$1$$, $label$$3_params$$13$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getDetailKey$(), $label$$3_params$$13$$);
    throw new $oj$$6$$.$ValidatorError$($localizedSummary$$1_value$$148$$, $detail$$23_localizedDetail$$1$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.validate", {validate:$oj$$6$$.$RequiredValidator$.prototype.validate});
  $oj$$6$$.$RequiredValidator$.prototype.$getHint$ = function $$oj$$6$$$$RequiredValidator$$$$getHint$$() {
    var $hint$$7$$ = "";
    this.$_options$ && this.$_options$.hint && ($hint$$7$$ = $oj$$6$$.$Translations$.$getTranslatedString$(this.$_options$.hint));
    return $hint$$7$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.getHint", {$getHint$:$oj$$6$$.$RequiredValidator$.prototype.$getHint$});
  $oj$$6$$.$RequiredValidator$.prototype.$_getSummaryKey$ = function $$oj$$6$$$$RequiredValidator$$$$_getSummaryKey$$() {
    return $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_SUMMARY$;
  };
  $oj$$6$$.$RequiredValidator$.prototype.$_getDetailKey$ = function $$oj$$6$$$$RequiredValidator$$$$_getDetailKey$$() {
    return $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_DETAIL$;
  };
  $oj$$6$$.$NumberConverterFactory$ = function() {
    return{createConverter:function($options$$194$$) {
      return new $oj$$6$$.$IntlNumberConverter$($options$$194$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$($oj$$6$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER, $oj$$6$$.$NumberConverterFactory$);
  $oj$$6$$.$DateTimeConverterFactory$ = function() {
    return{createConverter:function($options$$196$$) {
      return new $oj$$6$$.$IntlDateTimeConverter$($options$$196$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$($oj$$6$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME, $oj$$6$$.$DateTimeConverterFactory$);
  $oj$$6$$.$RequiredValidatorFactory$ = function() {
    return{createValidator:function($options$$198$$) {
      return new $oj$$6$$.$RequiredValidator$($options$$198$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_REQUIRED, $oj$$6$$.$RequiredValidatorFactory$);
  $oj$$6$$.$RegExpValidatorFactory$ = function() {
    return{createValidator:function($options$$200$$) {
      return new $oj$$6$$.$RegExpValidator$($options$$200$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP, $oj$$6$$.$RegExpValidatorFactory$);
  $oj$$6$$.$DateTimeRangeValidatorFactory$ = function() {
    return{createValidator:function($options$$202$$) {
      return new $oj$$6$$.$DateTimeRangeValidator$($options$$202$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE, $oj$$6$$.$DateTimeRangeValidatorFactory$);
  $oj$$6$$.$DateRestrictionValidatorFactory$ = function() {
    return{createValidator:function($options$$204$$) {
      return new $oj$$6$$.$DateRestrictionValidator$($options$$204$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_DATERESTRICTION, $oj$$6$$.$DateRestrictionValidatorFactory$);
  $oj$$6$$.$NumberRangeValidatorFactory$ = function() {
    return{createValidator:function($options$$206$$) {
      return new $oj$$6$$.$NumberRangeValidator$($options$$206$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE, $oj$$6$$.$NumberRangeValidatorFactory$);
  $oj$$6$$.$LengthValidatorFactory$ = function() {
    return{createValidator:function($options$$208$$) {
      return new $oj$$6$$.$LengthValidator$($options$$208$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_LENGTH, $oj$$6$$.$LengthValidatorFactory$);
});
