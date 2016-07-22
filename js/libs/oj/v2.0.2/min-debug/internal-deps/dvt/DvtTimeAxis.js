/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var $JSCompiler_prototypeAlias$$;
function $goog$exportPath_$$($name$$71$$, $opt_object$$) {
  0 == $name$$71$$.indexOf("dvt.") && ($name$$71$$ = $name$$71$$.substring(4));
  var $parts$$ = $name$$71$$.split("."), $cur$$ = eval("dvt");
  $parts$$[0] in $cur$$ || !$cur$$.execScript || $cur$$.execScript("var " + $parts$$[0]);
  for (var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    $parts$$.length || void 0 === $opt_object$$ ? $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {} : $cur$$[$part$$] = $opt_object$$;
  }
}
Math.floor(2147483648 * Math.random()).toString(36);

dvt.$TimeAxis$ = function $dvt$$TimeAxis$$($context$$394$$, $callback$$156$$, $callbackObj$$87$$) {
  this.Init($context$$394$$, $callback$$156$$, $callbackObj$$87$$);
};
dvt.$Obj$.$createSubclass$(dvt.$TimeAxis$, dvt.$BaseComponent$);
dvt.$TimeAxis$.$DEFAULT_INTERVAL_WIDTH$ = 50;
dvt.$TimeAxis$.$DEFAULT_INTERVAL_HEIGHT$ = 21;
dvt.$TimeAxis$.$DEFAULT_INTERVAL_PADDING$ = 2;
dvt.$TimeAxis$.$DEFAULT_BORDER_WIDTH$ = 1;
dvt.$TimeAxis$.$DEFAULT_SEPARATOR_WIDTH$ = 1;
dvt.$TimeAxis$.newInstance = function $dvt$$TimeAxis$$newInstance$($context$$395$$, $callback$$157$$, $callbackObj$$88$$) {
  return new dvt.$TimeAxis$($context$$395$$, $callback$$157$$, $callbackObj$$88$$);
};
dvt.$TimeAxis$.$_VALID_SCALES$ = "seconds minutes hours days weeks months quarters years".split(" ");
$JSCompiler_prototypeAlias$$ = dvt.$TimeAxis$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$396$$) {
  dvt.$TimeAxis$.$superclass$.Init.call(this, $context$$396$$);
  this.$_calendar$ = new $DvtTimeAxisCalendar$$;
  this.$_borderWidth$ = dvt.$TimeAxis$.$DEFAULT_BORDER_WIDTH$;
  this.$_dateToIsoConverter$ = $context$$396$$.$getLocaleHelpers$().dateToIsoConverter;
};
$JSCompiler_prototypeAlias$$.$setScale$ = function $$JSCompiler_prototypeAlias$$$$setScale$$($scale$$54$$) {
  this.$_scale$ = $scale$$54$$;
};
$JSCompiler_prototypeAlias$$.$getTimeAxisWidth$ = function $$JSCompiler_prototypeAlias$$$$getTimeAxisWidth$$() {
  null == this.$_timeAxisWidth$ && (this.$_timeAxisWidth$ = 30);
  return this.$_timeAxisWidth$;
};
$JSCompiler_prototypeAlias$$.$setBorderWidth$ = function $$JSCompiler_prototypeAlias$$$$setBorderWidth$$($borderWidth$$15$$) {
  this.$_borderWidth$ = $borderWidth$$15$$;
};
$JSCompiler_prototypeAlias$$.$getBorderWidth$ = function $$JSCompiler_prototypeAlias$$$$getBorderWidth$$() {
  return this.$_borderWidth$;
};
$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$_contentSize$ + 2 * this.$_borderWidth$;
};
$JSCompiler_prototypeAlias$$.$setType$ = function $$JSCompiler_prototypeAlias$$$$setType$$($type$$192$$, $dateFormatStrings$$) {
  this.$_formatter$ = new $DvtTimeAxisFormatter$$("short" == $type$$192$$ ? $DvtTimeAxisFormatter$$.SHORT : $DvtTimeAxisFormatter$$.$LONG$, $dateFormatStrings$$);
};
$JSCompiler_prototypeAlias$$.$adjustDate$ = function $$JSCompiler_prototypeAlias$$$$adjustDate$$($date$$12$$) {
  return this.$_calendar$.$adjustDate$(new Date($date$$12$$), this.$_scale$);
};
$JSCompiler_prototypeAlias$$.$getNextDate$ = function $$JSCompiler_prototypeAlias$$$$getNextDate$$($time$$13$$) {
  return this.$_calendar$.$getNextDate$($time$$13$$, this.$_scale$);
};
function $JSCompiler_StaticMethods_formatDate$$($JSCompiler_StaticMethods_formatDate$self$$, $date$$13$$) {
  if ($JSCompiler_StaticMethods_formatDate$self$$.$_converter$) {
    var $converter$$9$$;
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$;
    if ($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$13$$) : $date$$13$$);
    }
    if ($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$13$$);
    }
  }
  if ($JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$ && $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$]) {
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$];
    if ($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$13$$) : $date$$13$$);
    }
    if ($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$13$$);
    }
  }
  return $JSCompiler_StaticMethods_formatDate$self$$.$_formatter$.format($date$$13$$, $JSCompiler_StaticMethods_formatDate$self$$.$_scale$, $JSCompiler_StaticMethods_formatDate$self$$.$_timeZoneOffsets$);
}
function $DvtTimeAxisCalendar$$($options$$268$$) {
  this.Init($options$$268$$);
}
dvt.$Obj$.$createSubclass$($DvtTimeAxisCalendar$$, dvt.$Obj$);
$DvtTimeAxisCalendar$$.prototype.Init = function $$DvtTimeAxisCalendar$$$$Init$() {
  this.$_dayInMillis$ = 864E5;
};
$DvtTimeAxisCalendar$$.prototype.$adjustDate$ = function $$DvtTimeAxisCalendar$$$$$adjustDate$$($date$$14$$, $scale$$55$$) {
  var $_adjustedDate$$ = new Date($date$$14$$.getTime());
  if ("weeks" == $scale$$55$$) {
    $_adjustedDate$$.setHours(0, 0, 0);
    var $roll_amt$$ = ($date$$14$$.getDay() - 0 + 7) % 7;
    0 < $roll_amt$$ && $_adjustedDate$$.setTime($_adjustedDate$$.getTime() - $roll_amt$$ * this.$_dayInMillis$);
  } else {
    "months" == $scale$$55$$ ? $_adjustedDate$$.setDate(1) : "days" == $scale$$55$$ ? $_adjustedDate$$.setHours(0, 0, 0) : "hours" == $scale$$55$$ ? $_adjustedDate$$.setMinutes(0, 0, 0) : "minutes" == $scale$$55$$ ? $_adjustedDate$$.setSeconds(0, 0) : "seconds" == $scale$$55$$ ? $_adjustedDate$$.setMilliseconds(0) : "quarters" == $scale$$55$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 2 - ($date$$14$$.getMonth() + 11) % 3, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + 
    $roll_amt$$)) : "halfyears" == $scale$$55$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 5 - ($date$$14$$.getMonth() + 11) % 6, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + $roll_amt$$)) : "years" == $scale$$55$$ ? ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1)) : "twoyears" == $scale$$55$$ && ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1));
  }
  return $_adjustedDate$$;
};
$DvtTimeAxisCalendar$$.prototype.$getNextDate$ = function $$DvtTimeAxisCalendar$$$$$getNextDate$$($time$$14$$, $scale$$56$$) {
  if ("seconds" == $scale$$56$$) {
    return new Date($time$$14$$ + 1E3);
  }
  if ("minutes" == $scale$$56$$) {
    return new Date($time$$14$$ + 6E4);
  }
  if ("hours" == $scale$$56$$) {
    return new Date($time$$14$$ + 36E5);
  }
  var $_nextDate$$ = new Date($time$$14$$);
  "days" == $scale$$56$$ ? $_nextDate$$.setDate($_nextDate$$.getDate() + 1) : "weeks" == $scale$$56$$ ? $_nextDate$$.setDate($_nextDate$$.getDate() + 7) : "months" == $scale$$56$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 1) : "quarters" == $scale$$56$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 3) : "halfyears" == $scale$$56$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 6) : "years" == $scale$$56$$ ? $_nextDate$$.setFullYear($_nextDate$$.getFullYear() + 1) : "twoyears" == $scale$$56$$ ? 
  $_nextDate$$.setFullYear($_nextDate$$.getFullYear() + 2) : $_nextDate$$.setYear($_nextDate$$.getYear() + 1);
  return $_nextDate$$;
};
function $DvtTimeAxisFormatter$$($type$$193$$, $locale$$6$$) {
  this.Init($type$$193$$, $locale$$6$$);
}
dvt.$Obj$.$createSubclass$($DvtTimeAxisFormatter$$, dvt.$Obj$);
$DvtTimeAxisFormatter$$.$LONG$ = 0;
$DvtTimeAxisFormatter$$.SHORT = 1;
$DvtTimeAxisFormatter$$.prototype.Init = function $$DvtTimeAxisFormatter$$$$Init$($type$$194$$, $dateFormatStrings$$1$$) {
  this.$_type$ = $type$$194$$;
  this.$_dateFormatStrings$ = $dateFormatStrings$$1$$;
  this.$_formats$ = [];
  this.$_formats$[0] = {};
  this.$_formats$[0].seconds = "HH:MM:ss";
  this.$_formats$[0].minutes = "HH:MM";
  this.$_formats$[0].hours = "HH:MM";
  this.$_formats$[0].days = "dddd";
  this.$_formats$[0].weeks = "m/dd";
  this.$_formats$[0].months = "mmmm";
  this.$_formats$[0].quarters = "mmmm";
  this.$_formats$[0].halfyears = "yyyy";
  this.$_formats$[0].years = "yyyy";
  this.$_formats$[0].twoyears = "yyyy";
  this.$_formats$[1] = {};
  this.$_formats$[1].seconds = "HH:MM:ss";
  this.$_formats$[1].minutes = "HH:MM";
  this.$_formats$[1].hours = "HH:MM";
  this.$_formats$[1].days = "m/dd";
  this.$_formats$[1].weeks = "m/dd";
  this.$_formats$[1].months = "mmm";
  this.$_formats$[1].quarters = "mmm";
  this.$_formats$[1].halfyears = "yy";
  this.$_formats$[1].years = "yy";
  this.$_formats$[1].twoyears = "yy";
};
$DvtTimeAxisFormatter$$.prototype.format = function $$DvtTimeAxisFormatter$$$$format$($date$$15_timeInMS$$, $mask$$5_scale$$58$$, $newString_timeZoneOffsets$$1$$) {
  $mask$$5_scale$$58$$ = this.$_formats$[this.$_type$][$mask$$5_scale$$58$$];
  if (null != $mask$$5_scale$$58$$) {
    var $dates_isUTC$$ = !1;
    if ($newString_timeZoneOffsets$$1$$) {
      $date$$15_timeInMS$$ = $date$$15_timeInMS$$.getTime();
      for (var $dates_isUTC$$ = Object.keys($newString_timeZoneOffsets$$1$$), $offset$$34$$ = 0, $i$$632$$ = 0;$i$$632$$ < $dates_isUTC$$.length;$i$$632$$++) {
        $date$$15_timeInMS$$ >= parseInt($dates_isUTC$$[$i$$632$$], 10) && ($offset$$34$$ = $newString_timeZoneOffsets$$1$$[$dates_isUTC$$[$i$$632$$]]);
      }
      $date$$15_timeInMS$$ = new Date($date$$15_timeInMS$$ + $offset$$34$$);
      $dates_isUTC$$ = !0;
    }
    if (-1 != $mask$$5_scale$$58$$.indexOf(":")) {
      var $separator$$3$$ = ":"
    } else {
      -1 != $mask$$5_scale$$58$$.indexOf("/") && ($separator$$3$$ = "/");
    }
    if ($separator$$3$$) {
      $mask$$5_scale$$58$$ = $mask$$5_scale$$58$$.split($separator$$3$$);
      $newString_timeZoneOffsets$$1$$ = $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$15_timeInMS$$, $mask$$5_scale$$58$$[0], $dates_isUTC$$);
      for ($i$$632$$ = 1;$i$$632$$ < $mask$$5_scale$$58$$.length;$i$$632$$++) {
        $newString_timeZoneOffsets$$1$$ += $separator$$3$$ + $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$15_timeInMS$$, $mask$$5_scale$$58$$[$i$$632$$], $dates_isUTC$$);
      }
      return $newString_timeZoneOffsets$$1$$;
    }
    return $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$15_timeInMS$$, $mask$$5_scale$$58$$, $dates_isUTC$$);
  }
  return $date$$15_timeInMS$$.toLocaleString();
};
function $JSCompiler_StaticMethods_getDateFormatValue$$($JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$, $date$$16$$, $mask$$6$$, $isUTC$$1$$) {
  if ($isUTC$$1$$) {
    switch($mask$$6$$) {
      case "ss":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getUTCSeconds(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "HH":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getUTCHours(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "MM":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getUTCMinutes(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "dd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getUTCDate(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "dddd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$dayNames$[$date$$16$$.getUTCDay() + 7];
      case "m":
        return $date$$16$$.getUTCMonth() + 1;
      case "mmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$monthNames$[$date$$16$$.getUTCMonth()];
      case "mmmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$monthNames$[$date$$16$$.getUTCMonth() + 12];
      case "yy":
        return $date$$16$$.getUTCFullYear().toString().substring(2, 4);
      default:
        return $date$$16$$.getUTCFullYear();
    }
  } else {
    switch($mask$$6$$) {
      case "ss":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getSeconds(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "HH":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getHours(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "MM":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getMinutes(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "dd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ = $date$$16$$.getDate(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$;
      case "dddd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$dayNames$[$date$$16$$.getDay() + 7];
      case "m":
        return $date$$16$$.getMonth() + 1;
      case "mmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$monthNames$[$date$$16$$.getMonth()];
      case "mmmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$193$$.$_dateFormatStrings$.$monthNames$[$date$$16$$.getMonth() + 12];
      case "yy":
        return $date$$16$$.getFullYear().toString().substring(2, 4);
      default:
        return $date$$16$$.getFullYear();
    }
  }
}
;
  return dvt;
});
