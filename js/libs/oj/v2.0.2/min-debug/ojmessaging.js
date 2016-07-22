/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery"], function($oj$$2$$, $$$$2$$) {
  $oj$$2$$.$Message$ = function $$oj$$2$$$$Message$$($summary$$, $detail$$3$$, $severity$$) {
    this.Init($summary$$, $detail$$3$$, $severity$$);
  };
  $goog$exportPath_$$("Message", $oj$$2$$.$Message$, $oj$$2$$);
  $oj$$2$$.$Message$.$SEVERITY_TYPE$ = {CONFIRMATION:"confirmation", INFO:"info", WARNING:"warning", ERROR:"error", FATAL:"fatal"};
  $goog$exportPath_$$("Message.SEVERITY_TYPE", $oj$$2$$.$Message$.$SEVERITY_TYPE$, $oj$$2$$);
  $oj$$2$$.$Message$.$SEVERITY_LEVEL$ = {FATAL:5, ERROR:4, WARNING:3, INFO:2, CONFIRMATION:1};
  $goog$exportPath_$$("Message.SEVERITY_LEVEL", $oj$$2$$.$Message$.$SEVERITY_LEVEL$, $oj$$2$$);
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.$Message$, $oj$$2$$.$Object$, "oj.Message");
  $oj$$2$$.$Message$.prototype.Init = function $$oj$$2$$$$Message$$$Init$($summary$$1$$, $detail$$4$$, $severity$$1$$) {
    $oj$$2$$.$Message$.$superclass$.Init.call(this);
    this.summary = $summary$$1$$;
    this.detail = $detail$$4$$;
    this.severity = $severity$$1$$ || $oj$$2$$.$Message$.$SEVERITY_TYPE$.ERROR;
  };
  $oj$$2$$.$Object$.$exportPrototypeSymbol$("Message.prototype.Init", {Init:$oj$$2$$.$Message$.prototype.Init});
  $oj$$2$$.$Message$.prototype.$canDisplay$ = function $$oj$$2$$$$Message$$$$canDisplay$$() {
    return!0;
  };
  $oj$$2$$.$Message$.prototype.$equals$ = function $$oj$$2$$$$Message$$$$equals$$($msg$$1$$) {
    return $msg$$1$$ && $oj$$2$$.$Message$.$getSeverityLevel$(this.severity) === $oj$$2$$.$Message$.$getSeverityLevel$($msg$$1$$.severity) && this.summary === $msg$$1$$.summary && this.detail === $msg$$1$$.detail ? !0 : !1;
  };
  $oj$$2$$.$Object$.$exportPrototypeSymbol$("Message.prototype.equals", {$equals$:$oj$$2$$.$Message$.prototype.$equals$});
  $oj$$2$$.$Message$.prototype.clone = function $$oj$$2$$$$Message$$$clone$() {
    return new $oj$$2$$.$Message$(this.summary, this.detail, this.severity);
  };
  $oj$$2$$.$Object$.$exportPrototypeSymbol$("Message.prototype.clone", {clone:$oj$$2$$.$Message$.prototype.clone});
  $oj$$2$$.$Message$.$getSeverityLevel$ = function $$oj$$2$$$$Message$$$getSeverityLevel$$($index$$74_severity$$2$$) {
    $index$$74_severity$$2$$ && ("string" === typeof $index$$74_severity$$2$$ ? ($index$$74_severity$$2$$ = $oj$$2$$.$Message$.$_LEVEL_TO_TYPE$.indexOf($index$$74_severity$$2$$, 1), $index$$74_severity$$2$$ = -1 === $index$$74_severity$$2$$ ? $oj$$2$$.$Message$.$SEVERITY_LEVEL$.ERROR : $index$$74_severity$$2$$) : "number" === typeof $index$$74_severity$$2$$ && $index$$74_severity$$2$$ < $oj$$2$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION && $index$$74_severity$$2$$ > $oj$$2$$.$Message$.$SEVERITY_LEVEL$.FATAL && 
    ($index$$74_severity$$2$$ = $oj$$2$$.$Message$.$SEVERITY_LEVEL$.ERROR));
    return $index$$74_severity$$2$$ ? $index$$74_severity$$2$$ : $oj$$2$$.$Message$.$SEVERITY_LEVEL$.ERROR;
  };
  $goog$exportPath_$$("Message.getSeverityLevel", $oj$$2$$.$Message$.$getSeverityLevel$, $oj$$2$$);
  $oj$$2$$.$Message$.$getSeverityType$ = function $$oj$$2$$$$Message$$$getSeverityType$$($level$$8$$) {
    var $index$$75$$;
    $level$$8$$ && ("string" === typeof $level$$8$$ ? ($index$$75$$ = $oj$$2$$.$Message$.$_LEVEL_TO_TYPE$.indexOf($level$$8$$, 1), -1 === $index$$75$$ && ($level$$8$$ = $oj$$2$$.$Message$.$SEVERITY_TYPE$.ERROR)) : "number" === typeof $level$$8$$ && ($level$$8$$ = $level$$8$$ < $oj$$2$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION && $level$$8$$ > $oj$$2$$.$Message$.$SEVERITY_LEVEL$.FATAL ? $oj$$2$$.$Message$.$SEVERITY_TYPE$.ERROR : $oj$$2$$.$Message$.$_LEVEL_TO_TYPE$[$level$$8$$]));
    return $level$$8$$ || $oj$$2$$.$Message$.$SEVERITY_TYPE$.ERROR;
  };
  $goog$exportPath_$$("Message.getSeverityType", $oj$$2$$.$Message$.$getSeverityType$, $oj$$2$$);
  $oj$$2$$.$Message$.$getMaxSeverity$ = function $$oj$$2$$$$Message$$$getMaxSeverity$$($messages$$) {
    var $maxLevel$$ = -1, $currLevel$$;
    $messages$$ && 0 < $messages$$.length && $$$$2$$.each($messages$$, function($i$$77$$, $message$$28$$) {
      $message$$28$$ && ($currLevel$$ = $oj$$2$$.$Message$.$getSeverityLevel$($message$$28$$.severity));
      $maxLevel$$ = $maxLevel$$ < $currLevel$$ ? $currLevel$$ : $maxLevel$$;
    });
    return $maxLevel$$;
  };
  $goog$exportPath_$$("Message.getMaxSeverity", $oj$$2$$.$Message$.$getMaxSeverity$, $oj$$2$$);
  $oj$$2$$.$Message$.isValid = function $$oj$$2$$$$Message$$isValid$($messages$$1$$) {
    return $oj$$2$$.$Message$.$getMaxSeverity$($messages$$1$$) >= $oj$$2$$.$Message$.$SEVERITY_LEVEL$.ERROR ? !1 : !0;
  };
  $goog$exportPath_$$("Message.isValid", $oj$$2$$.$Message$.isValid, $oj$$2$$);
  $oj$$2$$.$Message$.$_LEVEL_TO_TYPE$ = ["none", $oj$$2$$.$Message$.$SEVERITY_TYPE$.CONFIRMATION, $oj$$2$$.$Message$.$SEVERITY_TYPE$.INFO, $oj$$2$$.$Message$.$SEVERITY_TYPE$.WARNING, $oj$$2$$.$Message$.$SEVERITY_TYPE$.ERROR, $oj$$2$$.$Message$.$SEVERITY_TYPE$.FATAL];
  $oj$$2$$.$ComponentMessage$ = function $$oj$$2$$$$ComponentMessage$$($summary$$2$$, $detail$$5$$, $severity$$3$$, $options$$114$$) {
    this.Init($summary$$2$$, $detail$$5$$, $severity$$3$$, $options$$114$$);
  };
  $oj$$2$$.$Object$.$createSubclass$($oj$$2$$.$ComponentMessage$, $oj$$2$$.$Message$, "oj.ComponentMessage");
  $oj$$2$$.$ComponentMessage$.$DISPLAY$ = {$SHOWN$:"shown", $HIDDEN$:"hidden"};
  $oj$$2$$.$ComponentMessage$.$_DEFAULT_OPTIONS$ = {display:$oj$$2$$.$ComponentMessage$.$DISPLAY$.$SHOWN$, context:""};
  $oj$$2$$.$ComponentMessage$.prototype.Init = function $$oj$$2$$$$ComponentMessage$$$Init$($summary$$3$$, $detail$$6$$, $severity$$4$$, $options$$115$$) {
    $oj$$2$$.$ComponentMessage$.$superclass$.Init.call(this, $summary$$3$$, $detail$$6$$, $severity$$4$$);
    this.$_options$ = $$$$2$$.extend({}, $oj$$2$$.$ComponentMessage$.$_DEFAULT_OPTIONS$, $options$$115$$);
  };
  $oj$$2$$.$ComponentMessage$.prototype.$equals$ = function $$oj$$2$$$$ComponentMessage$$$$equals$$($msg$$2$$) {
    return $oj$$2$$.$ComponentMessage$.$superclass$.$equals$.call(this, $msg$$2$$) && this.$_options$.display === $msg$$2$$.$_options$.display;
  };
  $oj$$2$$.$ComponentMessage$.prototype.clone = function $$oj$$2$$$$ComponentMessage$$$clone$() {
    return new $oj$$2$$.$ComponentMessage$(this.summary, this.detail, this.severity, this.$_options$);
  };
  $oj$$2$$.$ComponentMessage$.prototype.$canDisplay$ = function $$oj$$2$$$$ComponentMessage$$$$canDisplay$$() {
    return!(this.$_options$ && this.$_options$.display && this.$_options$.display === $oj$$2$$.$ComponentMessage$.$DISPLAY$.$HIDDEN$);
  };
  $oj$$2$$.$ComponentMessage$.prototype.$_forceDisplayToShown$ = function $$oj$$2$$$$ComponentMessage$$$$_forceDisplayToShown$$() {
    this.$_options$ && $oj$$2$$.$ComponentMessage$.$DISPLAY$.$HIDDEN$ === this.$_options$.display && (this.$_options$.display = $oj$$2$$.$ComponentMessage$.$DISPLAY$.$SHOWN$);
  };
  $oj$$2$$.$ComponentMessage$.prototype.$_isMessageAddedByComponent$ = function $$oj$$2$$$$ComponentMessage$$$$_isMessageAddedByComponent$$() {
    return this.$_options$ && this.$_options$.context ? !0 : !1;
  };
});
