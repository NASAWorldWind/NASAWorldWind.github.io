/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojknockout", "ojs/ojmessaging"], function($oj$$8$$, $$$$8$$, $ko$$2$$) {
  $oj$$8$$.$InvalidComponentTracker$ = function $$oj$$8$$$$InvalidComponentTracker$$() {
    this.Init();
  };
  $goog$exportPath_$$("InvalidComponentTracker", $oj$$8$$.$InvalidComponentTracker$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$InvalidComponentTracker$, $oj$$8$$.$Object$, "oj.InvalidComponentTracker");
  $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$ = "messagesShown";
  $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_HIDDEN$ = "messagesHidden";
  $oj$$8$$.$InvalidComponentTracker$.$_OPTION_DISABLED$ = "disabled";
  $oj$$8$$.$InvalidComponentTracker$.$_OPTION_READONLY$ = "readOnly";
  $oj$$8$$.$InvalidComponentTracker$.prototype.Init = function $$oj$$8$$$$InvalidComponentTracker$$$Init$() {
    $oj$$8$$.$InvalidComponentTracker$.$superclass$.Init.call(this);
    this.$_tracked$ = [];
    this.$_invalid$ = [];
    this.$_invalidHidden$ = [];
    this.invalidHidden = this.invalidShown = !1;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$focusOnFirstInvalid$ = function $$oj$$8$$$$InvalidComponentTracker$$$$focusOnFirstInvalid$$() {
    var $firstInvalid$$ = null, $self$$52$$ = this, $updateCounter$$ = this.$_updateCounter$;
    this.invalidShown && ($firstInvalid$$ = this.$_getFirstInvalidComponent$());
    setTimeout(function() {
      ($firstInvalid$$ = $updateCounter$$ === $self$$52$$.$_updateCounter$ ? $firstInvalid$$ || $self$$52$$.$_getFirstInvalidComponent$() : $self$$52$$.$_getFirstInvalidComponent$()) && $firstInvalid$$.call($firstInvalid$$, "Focus");
    }, 1);
    return $firstInvalid$$ ? !0 : !1;
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("InvalidComponentTracker.prototype.focusOnFirstInvalid", {$focusOnFirstInvalid$:$oj$$8$$.$InvalidComponentTracker$.prototype.$focusOnFirstInvalid$});
  $oj$$8$$.$InvalidComponentTracker$.prototype.showMessages = function $$oj$$8$$$$InvalidComponentTracker$$$showMessages$() {
    var $tr$$, $len$$13$$, $index$$93$$;
    if (this.invalidHidden) {
      for ($len$$13$$ = this.$_invalidHidden$.length, $index$$93$$ = 0;$index$$93$$ < $len$$13$$;$index$$93$$++) {
        this.$_invalidHidden$[$index$$93$$] && ($tr$$ = this.$_tracked$[$index$$93$$].call($tr$$, "showMessages"));
      }
    }
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("InvalidComponentTracker.prototype.showMessages", {showMessages:$oj$$8$$.$InvalidComponentTracker$.prototype.showMessages});
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_getFirstInvalidComponent$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_getFirstInvalidComponent$$() {
    for (var $firstInvalid$$1$$, $idx$$10$$ = 0, $len$$14$$ = this.$_invalid$.length, $idx$$10$$ = 0;$idx$$10$$ < $len$$14$$;$idx$$10$$++) {
      if ($firstInvalid$$1$$ = this.$_invalid$[$idx$$10$$]) {
        return this.$_tracked$[$idx$$10$$];
      }
    }
    return null;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_remove$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_remove$$($component$$9$$) {
    var $trackedIndex$$ = -1, $mutated$$1$$ = !1;
    $$$$8$$.each(this.$_tracked$, function($index$$94$$, $item$$3$$) {
      0 > $trackedIndex$$ && $item$$3$$ === $component$$9$$ && ($trackedIndex$$ = $index$$94$$);
    });
    0 <= $trackedIndex$$ && (this.$_tracked$.splice($trackedIndex$$, 1), this.$_invalid$.splice($trackedIndex$$, 1), this.$_invalidHidden$.splice($trackedIndex$$, 1), this.$_updateInvalidProperties$(), $mutated$$1$$ = !0);
    return $mutated$$1$$;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_update$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_update$$($component$$10$$, $option$$26$$, $isDisabled$$1_value$$183$$) {
    var $compValid_isReadOnly$$1$$ = $component$$10$$.call($component$$10$$, "isValid"), $trackedIndex$$1$$ = -1, $mutated$$2$$ = !0, $result$$18$$;
    $$$$8$$.each(this.$_tracked$, function($index$$95$$, $item$$5$$) {
      0 > $trackedIndex$$1$$ && $item$$5$$ === $component$$10$$ && ($trackedIndex$$1$$ = $index$$95$$);
    });
    switch($option$$26$$) {
      case $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$:
      ;
      case $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_HIDDEN$:
        $result$$18$$ = !1;
        $isDisabled$$1_value$$183$$ && (0 > $trackedIndex$$1$$ && ($trackedIndex$$1$$ = this.$_tracked$.push($component$$10$$) - 1, this.$_initializeInvalidTrackers$($trackedIndex$$1$$, $result$$18$$)), !$compValid_isReadOnly$$1$$ && $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$($isDisabled$$1_value$$183$$) && ($result$$18$$ = !0, $option$$26$$ === $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$ && ($isDisabled$$1_value$$183$$ = $component$$10$$.call($component$$10$$, "option", 
        $oj$$8$$.$InvalidComponentTracker$.$_OPTION_DISABLED$), $compValid_isReadOnly$$1$$ = $component$$10$$.call($component$$10$$, "option", $oj$$8$$.$InvalidComponentTracker$.$_OPTION_READONLY$), $result$$18$$ = $isDisabled$$1_value$$183$$ || $compValid_isReadOnly$$1$$ ? !1 : !0)), $mutated$$2$$ = this.$_updateInvalidTracker$($option$$26$$, $trackedIndex$$1$$ || 0, $result$$18$$), this.$_updateInvalidProperties$(), $mutated$$2$$ && (void 0 === this.$_updateCounter$ && (this.$_updateCounter$ = 
        0), this.$_updateCounter$++));
        break;
      case $oj$$8$$.$InvalidComponentTracker$.$_OPTION_DISABLED$:
      ;
      case $oj$$8$$.$InvalidComponentTracker$.$_OPTION_READONLY$:
        $mutated$$2$$ = !1, $isDisabled$$1_value$$183$$ && ($mutated$$2$$ = this.$_updateInvalidTracker$($oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$, $trackedIndex$$1$$ || 0, !1), $mutated$$2$$ = this.$_updateInvalidTracker$($oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_HIDDEN$, $trackedIndex$$1$$ || 0, !1) || $mutated$$2$$, this.$_updateInvalidProperties$());
    }
    return $mutated$$2$$;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_initializeInvalidTrackers$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_initializeInvalidTrackers$$($trackedIndex$$2$$, $result$$19$$) {
    void 0 === this.$_invalid$[$trackedIndex$$2$$] && this.$_updateInvalidTracker$($oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$, $trackedIndex$$2$$, $result$$19$$);
    void 0 === this.$_invalidHidden$[$trackedIndex$$2$$] && this.$_updateInvalidTracker$($oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_HIDDEN$, $trackedIndex$$2$$, $result$$19$$);
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_updateInvalidProperties$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_updateInvalidProperties$$() {
    this.invalidShown = 0 <= this.$_invalid$.indexOf(!0);
    this.invalidHidden = 0 <= this.$_invalidHidden$.indexOf(!0);
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_updateInvalidTracker$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_updateInvalidTracker$$($arr$$20_option$$27$$, $trackedIndex$$3$$, $value$$184$$) {
    var $mutated$$3$$ = !1;
    $arr$$20_option$$27$$ = $arr$$20_option$$27$$ === $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_SHOWN$ ? this.$_invalid$ : $arr$$20_option$$27$$ === $oj$$8$$.$InvalidComponentTracker$.$_OPTION_MESSAGES_HIDDEN$ ? this.$_invalidHidden$ : [];
    0 <= $trackedIndex$$3$$ && void 0 !== $arr$$20_option$$27$$[$trackedIndex$$3$$] ? ($mutated$$3$$ = $arr$$20_option$$27$$[$trackedIndex$$3$$] !== $value$$184$$ ? !0 : !1) && $arr$$20_option$$27$$.splice($trackedIndex$$3$$, 1, $value$$184$$) : ($arr$$20_option$$27$$.push($value$$184$$), $mutated$$3$$ = !0);
    return $mutated$$3$$;
  };
  $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$ = function $$oj$$8$$$$InvalidComponentTracker$$$_hasInvalidMessages$$($messages$$13$$) {
    return!$oj$$8$$.$Message$.isValid($messages$$13$$);
  };
  $oj$$8$$.$ValueBinding$ = function $$oj$$8$$$$ValueBinding$$() {
  };
  $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ = "invalidComponentTracker";
  $oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$ = "ojoptionchange";
  $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$ = "messagesShown";
  $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$ = "messagesHidden";
  $oj$$8$$.$ValueBinding$.$_OPTION_DISABLED$ = "disabled";
  $oj$$8$$.$ValueBinding$.$_OPTION_READONLY$ = "readOnly";
  $oj$$8$$.$ValueBinding$.$_update$ = function $$oj$$8$$$$ValueBinding$$$_update$$($name$$113$$, $value$$185$$, $element$$66_updateProps$$1$$, $component$$11$$, $ictObs_valueAccessor$$22$$) {
    $element$$66_updateProps$$1$$ = {};
    $ictObs_valueAccessor$$22$$ = $ictObs_valueAccessor$$22$$.call()[$oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$];
    var $icTracker$$;
    if ($name$$113$$ === $oj$$8$$.$ValueBinding$.$_OPTION_DISABLED$ || $name$$113$$ === $oj$$8$$.$ValueBinding$.$_OPTION_READONLY$) {
      return $icTracker$$ = $ictObs_valueAccessor$$22$$ && $ictObs_valueAccessor$$22$$.peek() || null, null !== $icTracker$$ && $ko$$2$$.isWriteableObservable($ictObs_valueAccessor$$22$$) && $icTracker$$.$_update$.call($icTracker$$, $component$$11$$, $name$$113$$, $value$$185$$) && $ictObs_valueAccessor$$22$$.valueHasMutated(), $element$$66_updateProps$$1$$[$name$$113$$] = $value$$185$$, $element$$66_updateProps$$1$$;
    }
  };
  $oj$$8$$.$ValueBinding$._init = function $$oj$$8$$$$ValueBinding$$_init$($name$$114$$, $value$$186$$) {
    var $initProps$$1$$ = {};
    $initProps$$1$$[$name$$114$$] = $value$$186$$;
    return $initProps$$1$$;
  };
  $oj$$8$$.$ValueBinding$.$_afterCreate$ = function $$oj$$8$$$$ValueBinding$$$_afterCreate$$($property$$18$$, $element$$67$$, $component$$12$$, $optionsSet_valueAccessor$$23$$) {
    $optionsSet_valueAccessor$$23$$ = $optionsSet_valueAccessor$$23$$.call();
    var $isICTOptionSet$$;
    $property$$18$$ === $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ && ($isICTOptionSet$$ = $optionsSet_valueAccessor$$23$$[$property$$18$$] ? !0 : !1) && $oj$$8$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($property$$18$$, $optionsSet_valueAccessor$$23$$, $element$$67$$, $component$$12$$);
    return{};
  };
  $oj$$8$$.$ValueBinding$.$_beforeDestroy$ = function $$oj$$8$$$$ValueBinding$$$_beforeDestroy$$($icTracker$$1_property$$19$$, $element$$68_jelem$$7$$, $component$$13$$, $ictObs$$1_valueAccessor$$24$$) {
    $element$$68_jelem$$7$$ = $$$$8$$($element$$68_jelem$$7$$);
    $ictObs$$1_valueAccessor$$24$$ = $ictObs$$1_valueAccessor$$24$$.call()[$icTracker$$1_property$$19$$];
    $icTracker$$1_property$$19$$ === $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ && $element$$68_jelem$$7$$ && ($element$$68_jelem$$7$$.off($oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$, $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$), $ictObs$$1_valueAccessor$$24$$ && $ko$$2$$.isWriteableObservable($ictObs$$1_valueAccessor$$24$$) && ($icTracker$$1_property$$19$$ = $ictObs$$1_valueAccessor$$24$$.peek(), $icTracker$$1_property$$19$$.$_remove$.call($icTracker$$1_property$$19$$, 
    $component$$13$$) && $ictObs$$1_valueAccessor$$24$$.valueHasMutated()));
  };
  $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$ = function $$oj$$8$$$$ValueBinding$$$_updateInvalidComponentTracker$$($event$$70$$, $JSCompiler_OptimizeArgumentsArray_p0$$) {
    var $ictObs$$2$$ = $event$$70$$.data.$tracker$, $icTracker$$2$$, $component$$14$$ = $event$$70$$.data.$component$, $option$$28$$ = $JSCompiler_OptimizeArgumentsArray_p0$$.option, $msgs$$6$$ = $JSCompiler_OptimizeArgumentsArray_p0$$.value;
    ($option$$28$$ === $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$ || $option$$28$$ === $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$) && $ictObs$$2$$ && $ko$$2$$.isWriteableObservable($ictObs$$2$$) && ($icTracker$$2$$ = $ictObs$$2$$.peek()) && $icTracker$$2$$.$_update$.call($icTracker$$2$$, $component$$14$$, $option$$28$$, $msgs$$6$$) && $ictObs$$2$$.valueHasMutated();
  };
  $oj$$8$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$ = function $$oj$$8$$$$ValueBinding$$$_registerInvalidComponentTrackerWriteback$$($ictObs$$3_property$$20$$, $messagesShown_options$$215$$, $element$$69_jElem$$, $component$$15_eventData$$3$$) {
    $ictObs$$3_property$$20$$ = $messagesShown_options$$215$$[$ictObs$$3_property$$20$$];
    var $messagesHidden$$, $icTracker$$3$$;
    $element$$69_jElem$$ = $$$$8$$($element$$69_jElem$$);
    if ($ko$$2$$.isObservable($ictObs$$3_property$$20$$)) {
      $icTracker$$3$$ = $ictObs$$3_property$$20$$.peek(), null == $icTracker$$3$$ && ($icTracker$$3$$ = new $oj$$8$$.$InvalidComponentTracker$, $ictObs$$3_property$$20$$($icTracker$$3$$));
    } else {
      throw Error("Binding attribute " + $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ + " should be bound to a ko observable.");
    }
    null !== $icTracker$$3$$ && ($ko$$2$$.isWriteableObservable($ictObs$$3_property$$20$$) && ($messagesShown_options$$215$$ = $component$$15_eventData$$3$$.call($component$$15_eventData$$3$$, "option", $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$), $messagesHidden$$ = $component$$15_eventData$$3$$.call($component$$15_eventData$$3$$, "option", $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$), $icTracker$$3$$.$_update$.call($icTracker$$3$$, $component$$15_eventData$$3$$, $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$, 
    $messagesShown_options$$215$$), $icTracker$$3$$.$_update$.call($icTracker$$3$$, $component$$15_eventData$$3$$, $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$, $messagesHidden$$), $ictObs$$3_property$$20$$.valueHasMutated()), $component$$15_eventData$$3$$ = {$tracker$:$ictObs$$3_property$$20$$, $component$:$component$$15_eventData$$3$$}, $element$$69_jElem$$.on($oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$, $component$$15_eventData$$3$$, $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$));
  };
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"editableValue", attributes:[$oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$, $oj$$8$$.$ValueBinding$.$_OPTION_DISABLED$, $oj$$8$$.$ValueBinding$.$_OPTION_READONLY$], init:$oj$$8$$.$ValueBinding$._init, update:$oj$$8$$.$ValueBinding$.$_update$, afterCreate:$oj$$8$$.$ValueBinding$.$_afterCreate$, beforeDestroy:$oj$$8$$.$ValueBinding$.$_beforeDestroy$});
});
