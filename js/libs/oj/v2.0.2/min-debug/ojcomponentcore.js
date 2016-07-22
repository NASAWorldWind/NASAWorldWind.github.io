/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "jqueryui-amd/core", "jqueryui-amd/widget", "ojs/ojmessaging"], function($oj$$3$$, $$$$3$$) {
  function $_applyToComponents$$($subtreeRoot$$, $callback$$76$$) {
    function $processFunc$$() {
      var $jelem$$ = $$$$3$$(this), $names$$ = $jelem$$.data($_OJ_WIDGET_NAMES_DATA$$);
      if (null != $names$$) {
        for (var $i$$78$$ = 0;$i$$78$$ < $names$$.length;$i$$78$$++) {
          var $instance$$1$$ = $jelem$$.data("oj-" + $names$$[$i$$78$$]);
          null != $instance$$1$$ && $callback$$76$$($instance$$1$$);
        }
      }
    }
    var $locator$$ = $$$$3$$($subtreeRoot$$);
    $locator$$.hasClass($_OJ_COMPONENT_NODE_CLASS$$) && $processFunc$$.call($subtreeRoot$$);
    $locator$$.find("." + $_OJ_COMPONENT_NODE_CLASS$$).each($processFunc$$);
  }
  function $__ojDynamicGetter$$($callback$$77$$) {
    this.$getCallback$ = function $this$$getCallback$$() {
      return $callback$$77$$;
    };
  }
  function $_defineDynamicProperty$$($self$$39$$, $originalDefaultValue$$, $constructorValue$$, $options$$116$$, $prop$$50$$, $getter$$, $contextCallback$$) {
    var $override$$ = $constructorValue$$, $replaced$$ = !1, $overriddenSubkeys$$ = {};
    delete $options$$116$$[$prop$$50$$];
    Object.defineProperty($options$$116$$, $prop$$50$$, {get:function() {
      if ($replaced$$ || null != $self$$39$$.$_settingNestedKey$) {
        return $override$$;
      }
      var $defaultVal$$ = $getter$$($contextCallback$$ ? $contextCallback$$() : $prop$$50$$);
      return $_mergeOptionLayers$$([$originalDefaultValue$$, $defaultVal$$, $override$$], $overriddenSubkeys$$);
    }, set:function($value$$67$$) {
      $override$$ = $value$$67$$;
      null != $self$$39$$.$_settingNestedKey$ ? $overriddenSubkeys$$[$self$$39$$.$_settingNestedKey$] = !0 : $replaced$$ = !0;
    }, enumerable:!0});
  }
  function $_mergeOptionLayers$$($values$$5$$, $overriddenSubkeys$$1$$) {
    for (var $result$$3$$ = void 0, $i$$79$$ = 0;$i$$79$$ < $values$$5$$.length;$i$$79$$++) {
      var $value$$68$$ = $values$$5$$[$i$$79$$];
      void 0 !== $value$$68$$ && ($result$$3$$ = $$$$3$$.isPlainObject($value$$68$$) ? $_mergeObjectsWithExclusions$$($$$$3$$.isPlainObject($result$$3$$) ? [$result$$3$$, $value$$68$$] : [$value$$68$$], $i$$79$$ == $values$$5$$.length - 1 ? null : $overriddenSubkeys$$1$$, null) : $value$$68$$);
    }
    return $result$$3$$;
  }
  function $_mergeObjectsWithExclusions$$($input$$1$$, $ignoreSubkeys$$, $basePath$$) {
    for (var $target$$72$$ = {}, $inputLength$$ = $input$$1$$.length, $inputIndex$$ = 0;$inputIndex$$ < $inputLength$$;$inputIndex$$++) {
      for (var $source$$7$$ = $input$$1$$[$inputIndex$$], $keys$$4$$ = Object.keys($source$$7$$), $i$$80$$ = 0;$i$$80$$ < $keys$$4$$.length;$i$$80$$++) {
        var $key$$26$$ = $keys$$4$$[$i$$80$$], $path$$6$$ = null == $ignoreSubkeys$$ ? null : null == $basePath$$ ? $key$$26$$ : $basePath$$ + "." + $key$$26$$;
        if (null == $ignoreSubkeys$$ || !$ignoreSubkeys$$[$path$$6$$]) {
          var $value$$69$$ = $source$$7$$[$key$$26$$];
          void 0 !== $value$$69$$ && ($target$$72$$[$key$$26$$] = $$$$3$$.isPlainObject($value$$69$$) ? $_mergeObjectsWithExclusions$$($$$$3$$.isPlainObject($target$$72$$[$key$$26$$]) ? [$target$$72$$[$key$$26$$], $value$$69$$] : [$value$$69$$], $ignoreSubkeys$$, $path$$6$$) : $value$$69$$);
        }
      }
    }
    return $target$$72$$;
  }
  function $_returnTrue$$() {
    return!0;
  }
  $oj$$3$$.Components = {};
  $goog$exportPath_$$("Components", $oj$$3$$.Components, $oj$$3$$);
  $oj$$3$$.Components.$setDefaultOptions$ = function $$oj$$3$$$Components$$setDefaultOptions$$($options$$117$$) {
    $oj$$3$$.Components.$_defaultProperties$ = $$$$3$$.widget.extend($oj$$3$$.Components.$_defaultProperties$ || {}, $options$$117$$);
  };
  $goog$exportPath_$$("Components.setDefaultOptions", $oj$$3$$.Components.$setDefaultOptions$, $oj$$3$$);
  $oj$$3$$.Components.$getDefaultOptions$ = function $$oj$$3$$$Components$$getDefaultOptions$$() {
    return $oj$$3$$.Components.$_defaultProperties$ || {};
  };
  $goog$exportPath_$$("Components.getDefaultOptions", $oj$$3$$.Components.$getDefaultOptions$, $oj$$3$$);
  $oj$$3$$.Components.$createDynamicPropertyGetter$ = function $$oj$$3$$$Components$$createDynamicPropertyGetter$$($callback$$78$$) {
    return new $__ojDynamicGetter$$($callback$$78$$);
  };
  $goog$exportPath_$$("Components.createDynamicPropertyGetter", $oj$$3$$.Components.$createDynamicPropertyGetter$, $oj$$3$$);
  $oj$$3$$.Components.$getWidgetConstructor$ = function $$oj$$3$$$Components$$getWidgetConstructor$$($element$$12$$, $widgetName$$2$$) {
    var $jelem$$1$$ = $$$$3$$($element$$12$$), $data$$48_func$$5$$ = $jelem$$1$$.data($_OJ_WIDGET_NAMES_DATA$$);
    return $data$$48_func$$5$$ && (null == $widgetName$$2$$ ? $widgetName$$2$$ = $data$$48_func$$5$$[0] : 0 > $data$$48_func$$5$$.indexOf($widgetName$$2$$) && ($widgetName$$2$$ = void 0), null != $widgetName$$2$$ && ($data$$48_func$$5$$ = $jelem$$1$$[$widgetName$$2$$], "function" === typeof $data$$48_func$$5$$)) ? $data$$48_func$$5$$.bind($jelem$$1$$) : null;
  };
  $goog$exportPath_$$("Components.getWidgetConstructor", $oj$$3$$.Components.$getWidgetConstructor$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeAttached$ = function $$oj$$3$$$Components$$subtreeAttached$$($node$$6$$) {
    $oj$$3$$.$DomUtils$.$fixResizeListeners$($node$$6$$);
    $_applyToComponents$$($node$$6$$, function($instance$$2$$) {
      $instance$$2$$.$_NotifyAttached$();
    });
  };
  $goog$exportPath_$$("Components.subtreeAttached", $oj$$3$$.Components.$subtreeAttached$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeDetached$ = function $$oj$$3$$$Components$$subtreeDetached$$($node$$7$$) {
    $_applyToComponents$$($node$$7$$, function($instance$$3$$) {
      $instance$$3$$.$_NotifyDetached$();
    });
  };
  $goog$exportPath_$$("Components.subtreeDetached", $oj$$3$$.Components.$subtreeDetached$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeShown$ = function $$oj$$3$$$Components$$subtreeShown$$($node$$8$$) {
    $oj$$3$$.$DomUtils$.$fixResizeListeners$($node$$8$$);
    $_applyToComponents$$($node$$8$$, function($instance$$4$$) {
      $instance$$4$$.$_NotifyShown$();
    });
  };
  $goog$exportPath_$$("Components.subtreeShown", $oj$$3$$.Components.$subtreeShown$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeHidden$ = function $$oj$$3$$$Components$$subtreeHidden$$($node$$9$$) {
    $_applyToComponents$$($node$$9$$, function($instance$$5$$) {
      $instance$$5$$.$_NotifyHidden$();
    });
  };
  $goog$exportPath_$$("Components.subtreeHidden", $oj$$3$$.Components.$subtreeHidden$, $oj$$3$$);
  $oj$$3$$.Components.$isComponentInitialized$ = function $$oj$$3$$$Components$$isComponentInitialized$$($jelement$$) {
    var $widgets$$ = $jelement$$.data($_OJ_WIDGET_NAMES_DATA$$);
    return $$$$3$$.isArray($widgets$$) && -1 < $widgets$$.indexOf("ojPopup") && $jelement$$.is("." + $_OJ_COMPONENT_NODE_CLASS$$) ? !0 : !1;
  };
  $oj$$3$$.Components.$_OJ_CONTAINER_ATTR$ = "data-oj-container";
  var $_OJ_WIDGET_NAMES_DATA$$ = "oj-component-names", $_OJ_COMPONENT_NODE_CLASS$$ = "oj-component-initnode";
  $$$$3$$.widget("oj.baseComponent", {options:{contextMenu:null, rootAttributes:null, optionChange:void 0, destroy:void 0}, refresh:function() {
    this.$_propertyContext$ = null;
  }, _createWidget:function($options$$118$$, $element$$13$$) {
    this.$_originalDefaults$ = this.options || {};
    this.$_constructorOptions$ = $options$$118$$ || {};
    this._super($options$$118$$, $element$$13$$);
    this.$_AfterCreateEvent$();
  }, $_SetRootAttributes$:function() {
    var $unsupportedAttrs_value$$70$$ = this.options.rootAttributes;
    if ($unsupportedAttrs_value$$70$$) {
      var $widget$$ = this.widget();
      if (null != $widget$$) {
        var $classValue_styleValue$$ = $unsupportedAttrs_value$$70$$["class"];
        $classValue_styleValue$$ && $widget$$.addClass($classValue_styleValue$$);
        if ($classValue_styleValue$$ = $unsupportedAttrs_value$$70$$.style) {
          var $currStyle$$ = $widget$$.attr("style");
          $currStyle$$ ? $widget$$.attr("style", $currStyle$$ + ";" + $classValue_styleValue$$) : $widget$$.attr("style", $classValue_styleValue$$);
        }
        $unsupportedAttrs_value$$70$$ = $$$$3$$.extend({}, $unsupportedAttrs_value$$70$$);
        delete $unsupportedAttrs_value$$70$$["class"];
        delete $unsupportedAttrs_value$$70$$.style;
        $widget$$.attr($unsupportedAttrs_value$$70$$);
        delete $unsupportedAttrs_value$$70$$.id;
        $unsupportedAttrs_value$$70$$ = Object.keys($unsupportedAttrs_value$$70$$);
        if ($unsupportedAttrs_value$$70$$.length) {
          throw Error("Unsupported values passed to rootAttributes option: " + $unsupportedAttrs_value$$70$$.toString());
        }
      }
    }
  }, _create:function() {
    this.$_SaveAttributes$(this.element);
    this.$_InitOptions$(this.$_originalDefaults$, this.$_constructorOptions$);
    delete this.$_originalDefaults$;
    delete this.$_constructorOptions$;
    this._ComponentCreate();
    this.$_AfterCreate$();
    this.element.addClass($_OJ_COMPONENT_NODE_CLASS$$);
  }, $_InitOptions$:function($originalDefaults$$, $constructorOptions$$) {
    this.$_setupDefaultOptions$($originalDefaults$$, $constructorOptions$$);
    this.$_initContextMenuOption$($constructorOptions$$);
  }, _ComponentCreate:function() {
    var $element$$inline_453$$ = this.element, $widgetName$$inline_454$$ = this.widgetName, $data$$inline_455$$ = $element$$inline_453$$.data($_OJ_WIDGET_NAMES_DATA$$);
    $data$$inline_455$$ || ($data$$inline_455$$ = [], $element$$inline_453$$.data($_OJ_WIDGET_NAMES_DATA$$, $data$$inline_455$$));
    0 > $data$$inline_455$$.indexOf($widgetName$$inline_454$$) && $data$$inline_455$$.push($widgetName$$inline_454$$);
  }, $_AfterCreate$:function() {
    this.$_SetRootAttributes$();
    this.$contextMenuEventNamespace$ = this.eventNamespace + "contextMenu";
    this.$_setupContextMenu$(!0);
  }, $_AfterCreateEvent$:$$$$3$$.noop, $_SaveAttributes$:function() {
  }, $_SaveAllAttributes$:function($element$$15$$) {
    var $self$$40$$ = this;
    this.$_savedAttributes$ = [];
    $$$$3$$.each($element$$15$$, function($index$$77$$, $ele$$) {
      var $saveAttributes$$ = {}, $attributes$$10$$ = $ele$$.attributes;
      $self$$40$$.$_savedAttributes$.push({element:$ele$$, attributes:$saveAttributes$$});
      $$$$3$$.each($attributes$$10$$, function($index$$78$$, $attr$$10$$) {
        var $attrName$$ = $attr$$10$$.name;
        $saveAttributes$$[$attrName$$] = {attr:$attr$$10$$.value, prop:$$$$3$$($ele$$).prop($attrName$$)};
      });
    });
  }, $_GetSavedAttributes$:function($element$$16$$) {
    var $savedAttributes$$ = this.$_savedAttributes$;
    if (void 0 === $savedAttributes$$) {
      return null;
    }
    $element$$16$$ = $element$$16$$[0];
    for (var $i$$81$$ = 0, $j$$5$$ = $savedAttributes$$.length;$i$$81$$ < $j$$5$$;$i$$81$$++) {
      var $curr$$ = $savedAttributes$$[$i$$81$$];
      if ($curr$$.element === $element$$16$$) {
        return $curr$$.attributes;
      }
    }
    return{};
  }, $_RestoreAttributes$:function() {
  }, $_RestoreAllAttributes$:function() {
    $$$$3$$.each(this.$_savedAttributes$, function($index$$79$$, $savedAttr$$) {
      var $element$$17$$ = $$$$3$$($savedAttr$$.element), $attributes$$11$$ = $savedAttr$$.attributes;
      if (1 === $element$$17$$.length) {
        for (var $currAttr$$ = $savedAttr$$.element.attributes, $removeAttr$$ = [], $i$$82$$ = 0, $j$$6$$ = $currAttr$$.length;$i$$82$$ < $j$$6$$;$i$$82$$++) {
          $currAttr$$[$i$$82$$].name in $attributes$$11$$ || $removeAttr$$.push($currAttr$$[$i$$82$$].name);
        }
        $i$$82$$ = 0;
        for ($j$$6$$ = $removeAttr$$.length;$i$$82$$ < $j$$6$$;$i$$82$$++) {
          $element$$17$$.removeAttr($removeAttr$$[$i$$82$$]);
        }
        for (var $attribute$$1$$ in $attributes$$11$$) {
          $element$$17$$.attr($attribute$$1$$, $attributes$$11$$[$attribute$$1$$].attr);
        }
      }
    });
  }, $_GetTranslationsSectionName$:function() {
    return this.widgetFullName;
  }, $_CompareOptionValues$:function($option$$, $value1$$6$$, $value2$$6$$) {
    return $value1$$6$$ == $value2$$6$$;
  }, $getTranslatedString$:function($key$$27$$, $var_args$$48$$) {
    var $params$$5$$ = {}, $pattern$$2$$;
    2 < arguments.length ? $params$$5$$ = Array.prototype.slice.call(arguments, 1) : 2 == arguments.length && ($params$$5$$ = arguments[1], "object" === typeof $params$$5$$ || $params$$5$$ instanceof Array || ($params$$5$$ = [$params$$5$$]));
    $pattern$$2$$ = this.option($_OJ_TRANSLATIONS_PREFIX$$ + $key$$27$$);
    return null == $pattern$$2$$ ? $key$$27$$ : $oj$$3$$.$Translations$.$applyParameters$($pattern$$2$$.toString(), $params$$5$$);
  }, getNodeBySubId:function($locator$$1$$) {
    return null == $locator$$1$$ || null == $locator$$1$$.subId ? this.element ? this.element[0] : null : null;
  }, getSubIdByNode:function() {
    return null;
  }, destroy:function() {
    this._trigger("destroy");
    this.element[0].dispatchEvent(new CustomEvent("_ojDestroy", {bubbles:!1}));
    this._super();
    this.$_removeContextMenuBehavior$();
    this.element.removeClass($_OJ_COMPONENT_NODE_CLASS$$);
    this.widget().removeClass("oj-disabled");
    this.$_removeStateClasses$(this.element);
    var $element$$inline_457$$ = this.element, $index$$inline_460_widgetName$$inline_458$$ = this.widgetName, $data$$inline_459$$ = $element$$inline_457$$.data($_OJ_WIDGET_NAMES_DATA$$);
    $data$$inline_459$$ && ($index$$inline_460_widgetName$$inline_458$$ = $data$$inline_459$$.indexOf($index$$inline_460_widgetName$$inline_458$$), 0 <= $index$$inline_460_widgetName$$inline_458$$ && ($data$$inline_459$$.splice($index$$inline_460_widgetName$$inline_458$$, 1), 0 === $data$$inline_459$$.length && $element$$inline_457$$.removeData($_OJ_WIDGET_NAMES_DATA$$)));
    this.$_RestoreAttributes$();
    this.$_initialCmDomAttr$ ? this.element.attr("contextmenu", this.$_initialCmDomAttr$) : this.element.removeAttr("contextmenu");
    this.$_propertyContext$ = null;
  }, option:function($optionName$$, $value$$71$$) {
    if (0 === arguments.length) {
      return $$$$3$$.widget.extend({}, this.options);
    }
    var $i$$83_key$$28$$ = arguments[0], $options$$119$$ = $i$$83_key$$28$$, $context$$32_subkey$$1$$ = null, $flags$$3$$ = {};
    if ("string" === typeof $i$$83_key$$28$$) {
      var $options$$119$$ = {}, $parts$$3$$ = $i$$83_key$$28$$.split("."), $i$$83_key$$28$$ = $parts$$3$$.shift();
      if ($parts$$3$$.length) {
        var $context$$32_subkey$$1$$ = $parts$$3$$.join("."), $curOption$$;
        try {
          1 < arguments.length && (this.$_settingNestedKey$ = $context$$32_subkey$$1$$), $curOption$$ = $options$$119$$[$i$$83_key$$28$$] = $$$$3$$.widget.extend({}, this.options[$i$$83_key$$28$$]);
        } finally {
          this.$_settingNestedKey$ = null;
        }
        for ($i$$83_key$$28$$ = 0;$i$$83_key$$28$$ < $parts$$3$$.length - 1;$i$$83_key$$28$$++) {
          $curOption$$[$parts$$3$$[$i$$83_key$$28$$]] = $curOption$$[$parts$$3$$[$i$$83_key$$28$$]] || {}, $curOption$$ = $curOption$$[$parts$$3$$[$i$$83_key$$28$$]];
        }
        $i$$83_key$$28$$ = $parts$$3$$.pop();
        if (1 === arguments.length) {
          return void 0 === $curOption$$[$i$$83_key$$28$$] ? null : $curOption$$[$i$$83_key$$28$$];
        }
        $curOption$$[$i$$83_key$$28$$] = $value$$71$$;
      } else {
        if (1 === arguments.length) {
          return void 0 === this.options[$i$$83_key$$28$$] ? null : this.options[$i$$83_key$$28$$];
        }
        $options$$119$$[$i$$83_key$$28$$] = $value$$71$$;
      }
      $flags$$3$$ = arguments[2] || $flags$$3$$;
    } else {
      $flags$$3$$ = arguments[1] || $flags$$3$$;
    }
    null != $context$$32_subkey$$1$$ && ($flags$$3$$ = $$$$3$$.widget.extend({}, $flags$$3$$, {subkey:$context$$32_subkey$$1$$}));
    ($context$$32_subkey$$1$$ = $flags$$3$$ ? $flags$$3$$._context : null) && $context$$32_subkey$$1$$.$internalSet$ ? this.$_internalSetOptions$($options$$119$$, $flags$$3$$) : this._setOptions($options$$119$$, $flags$$3$$);
    return this;
  }, $_internalSetOptions$:function($options$$120$$, $flags$$4$$) {
    for (var $key$$29$$ in $options$$120$$) {
      var $value$$72$$ = $options$$120$$[$key$$29$$], $oldValue$$ = this.options[$key$$29$$];
      this.options[$key$$29$$] = $value$$72$$;
      this.$_optionChanged$($key$$29$$, $value$$72$$, $oldValue$$, $flags$$4$$);
    }
  }, _setOptions:function($options$$121$$, $flags$$5$$) {
    for (var $key$$30$$ in $options$$121$$) {
      this._setOption($key$$30$$, $options$$121$$[$key$$30$$], $flags$$5$$);
    }
    return this;
  }, _setOption:function($key$$31$$, $value$$73$$, $flags$$6$$) {
    var $originalValue$$ = this.options[$key$$31$$];
    if ("disabled" === $key$$31$$) {
      this.options[$key$$31$$] = $value$$73$$, this.widget().toggleClass("oj-disabled", !!$value$$73$$).attr("aria-disabled", $value$$73$$), $value$$73$$ && this.$_removeStateClasses$(this.widget());
    } else {
      try {
        var $subkey$$2$$ = null == $flags$$6$$ ? null : $flags$$6$$.subkey;
        null != $subkey$$2$$ && (this.$_settingNestedKey$ = $subkey$$2$$);
        this._super($key$$31$$, $value$$73$$);
      } finally {
        this.$_settingNestedKey$ = null;
      }
      "contextMenu" === $key$$31$$ && this.$_setupContextMenu$(!1);
    }
    this.$_optionChanged$($key$$31$$, $value$$73$$, $originalValue$$, $flags$$6$$);
    return this;
  }, $_optionChanged$:function($key$$32_optionChangeData$$, $value$$74$$, $originalValue$$1$$, $flags$$7$$) {
    var $changed$$ = !1, $context$$33$$ = null, $writeback$$ = !1, $originalEvent$$ = null, $optionMetadata$$ = null, $extraData$$;
    $flags$$7$$ && ($changed$$ = $flags$$7$$.changed, $context$$33$$ = $flags$$7$$._context) && ($originalEvent$$ = $context$$33$$.originalEvent, $writeback$$ = void 0 === $context$$33$$.$writeback$ ? null != $originalEvent$$ : $context$$33$$.$writeback$, $optionMetadata$$ = $context$$33$$.$optionMetadata$, $extraData$$ = $context$$33$$.$extraData$);
    if ($changed$$ || !this.$_CompareOptionValues$($key$$32_optionChangeData$$, $originalValue$$1$$, $value$$74$$)) {
      $optionMetadata$$ = $optionMetadata$$ || {}, $optionMetadata$$.writeback = $writeback$$ ? "shouldWrite" : "shouldNotWrite", $key$$32_optionChangeData$$ = {option:$key$$32_optionChangeData$$, previousValue:$originalValue$$1$$, value:$value$$74$$, optionMetadata:$optionMetadata$$}, null != $extraData$$ && ($key$$32_optionChangeData$$ = $$$$3$$.extend({}, $extraData$$, $key$$32_optionChangeData$$)), this._trigger("optionChange", $originalEvent$$, $key$$32_optionChangeData$$);
    }
  }, _trigger:function($type$$63$$, $event$$16$$, $data$$49$$) {
    return this.$_trigger2$($type$$63$$, $event$$16$$, $data$$49$$).proceed;
  }, $_trigger2$:function($type$$64$$, $event$$17$$, $data$$50$$) {
    var $callback$$79$$ = this.options[$type$$64$$];
    $data$$50$$ = $data$$50$$ || {};
    $event$$17$$ = $$$$3$$.Event($event$$17$$, $_OJ_COMPONENT_EVENT_OVERRIDES$$);
    $event$$17$$.type = (this.widgetEventPrefix + $type$$64$$).toLowerCase();
    $event$$17$$.target = this.element[0];
    this.element.trigger($event$$17$$, $data$$50$$);
    return{proceed:!($$$$3$$.isFunction($callback$$79$$) && !1 === $callback$$79$$.apply(this.element[0], [$event$$17$$].concat($data$$50$$)) || $event$$17$$.isDefaultPrevented()), event:$event$$17$$};
  }, $_initContextMenuOption$:function($constructorOptions$$1$$) {
    var $contextMenu$$ = this.element.attr("contextmenu");
    this.$_initialCmDomAttr$ = $contextMenu$$;
    !$contextMenu$$ || "contextMenu" in $constructorOptions$$1$$ || this.option("contextMenu", "#" + $contextMenu$$, {_context:{$internalSet$:!0}});
  }, $_setupContextMenu$:function($id$$12_isCreateTime$$) {
    this.$_removeContextMenuBehavior$();
    if (this.options.contextMenu) {
      var $rootNode$$ = this.widget(), $initNode$$ = this.element;
      $id$$12_isCreateTime$$ && !$initNode$$.is($rootNode$$) && $initNode$$.removeAttr("contextmenu");
      ($id$$12_isCreateTime$$ = $$$$3$$(this.options.contextMenu).attr("id")) && $rootNode$$.attr("contextmenu", $id$$12_isCreateTime$$);
      var $self$$41$$ = this;
      this.$_preventKeyUpEventIfMenuOpen$ = function $this$$_preventKeyUpEventIfMenuOpen$$($event$$18$$) {
        121 == $event$$18$$.which && $event$$18$$.shiftKey && $self$$41$$.$_getContextMenuNode$().is(":visible") && $event$$18$$.preventDefault();
      };
      var $isPressHold$$ = !1, $touchInProgress$$ = !1, $touchPageX$$, $touchPageY$$, $doubleOpenTimer$$, $doubleOpenType$$ = null, $launch$$ = function $$launch$$$($event$$19$$, $eventType$$25$$, $pressHold$$) {
        $isPressHold$$ = $pressHold$$;
        var $menu$$ = $self$$41$$.$_getContextMenu$();
        if ($isPressHold$$) {
          $rootNode$$.one("touchend" + $self$$41$$.$contextMenuEventNamespace$, function() {
            $menu$$.$__contextMenuPressHoldJustEnded$(!0);
            setTimeout(function() {
              $menu$$.$__contextMenuPressHoldJustEnded$(!1);
            }, 50);
          });
        }
        "touchstart" === $doubleOpenType$$ && "contextmenu" === $event$$19$$.type || "contextmenu" === $doubleOpenType$$ && "touchstart" === $event$$19$$.type ? ($doubleOpenType$$ = null, clearTimeout($doubleOpenTimer$$)) : $event$$19$$.isDefaultPrevented() || $event$$19$$.originalEvent && $event$$19$$.originalEvent.defaultPrevented || $self$$41$$.$_IsEffectivelyDisabled$() || ($self$$41$$.$_NotifyContextMenuGesture$($menu$$, $event$$19$$, $eventType$$25$$), !$self$$41$$.$_getContextMenuNode$().is(":visible") || 
        ($event$$19$$.preventDefault(), document.addEventListener("keyup", $self$$41$$.$_preventKeyUpEventIfMenuOpen$), "touchstart" !== $event$$19$$.type && "contextmenu" !== $event$$19$$.type)) || ($doubleOpenType$$ = $event$$19$$.type, $doubleOpenTimer$$ = setTimeout(function() {
          $doubleOpenType$$ = null;
        }, 300));
      };
      this.$_clickListener$ = function $this$$_clickListener$$($event$$21$$) {
        $isPressHold$$ && ($event$$21$$.preventDefault(), $event$$21$$.stopPropagation(), $isPressHold$$ = !1);
      };
      $rootNode$$[0].addEventListener("click", this.$_clickListener$, !0);
      $rootNode$$.on("touchstart" + this.$contextMenuEventNamespace$ + " mousedown" + this.$contextMenuEventNamespace$ + " keydown" + this.$contextMenuEventNamespace$ + " ", function($event$$22$$) {
        if ("mousedown" !== $event$$22$$.type || !$self$$41$$.$_getContextMenu$().$__contextMenuPressHoldJustEnded$()) {
          $isPressHold$$ = !1;
          if ("touchstart" === $event$$22$$.type && 1 === $event$$22$$.originalEvent.touches.length) {
            var $firstTouch$$ = $event$$22$$.originalEvent.touches[0];
            $touchPageX$$ = $firstTouch$$.pageX;
            $touchPageY$$ = $firstTouch$$.pageY;
            $touchInProgress$$ = !0;
            this.$_contextMenuPressHoldTimer$ = setTimeout($launch$$.bind(void 0, $event$$22$$, "touch", !0), 750);
          }
          return!0;
        }
      }).on("touchmove" + this.$contextMenuEventNamespace$, function($event$$23_firstTouch$$1$$) {
        $event$$23_firstTouch$$1$$ = $event$$23_firstTouch$$1$$.originalEvent.touches[0];
        if (5 < Math.abs($touchPageX$$ - $event$$23_firstTouch$$1$$.pageX) || 5 < Math.abs($touchPageY$$ - $event$$23_firstTouch$$1$$.pageY)) {
          $touchInProgress$$ = !1, clearTimeout(this.$_contextMenuPressHoldTimer$);
        }
        return!0;
      }).on("touchend" + this.$contextMenuEventNamespace$ + " touchcancel" + this.$contextMenuEventNamespace$, function() {
        $touchInProgress$$ = !1;
        clearTimeout(this.$_contextMenuPressHoldTimer$);
        return!0;
      }).on("keydown" + this.$contextMenuEventNamespace$ + " contextmenu" + this.$contextMenuEventNamespace$, function($event$$25$$) {
        ("contextmenu" === $event$$25$$.type || 121 == $event$$25$$.which && $event$$25$$.shiftKey) && $launch$$($event$$25$$, $touchInProgress$$ ? "touch" : "keydown" === $event$$25$$.type ? "keyboard" : "mouse", !1);
        return!0;
      }).addClass($oj$$3$$.$DomUtils$.$isTouchSupported$() ? "oj-menu-context-menu-launcher" : void 0);
    }
  }, $_setContextMenuIvars$:function() {
    this.$_contextMenuNode$ = $$$$3$$(this.options.contextMenu).first();
    this.$_contextMenu$ = this.$_contextMenuNode$.data("oj-ojMenu");
    if (!this.$_contextMenu$) {
      throw Error('"contextMenu" option set to "' + this.options.contextMenu + '", which does not reference a valid JET Menu.');
    }
    var $self$$42$$ = this;
    this.$_contextMenuNode$.on("ojclose" + this.$contextMenuEventNamespace$, function() {
      document.removeEventListener("keyup", $self$$42$$.$_preventKeyUpEventIfMenuOpen$);
    });
  }, $_getContextMenu$:function() {
    this.$_contextMenu$ || this.$_setContextMenuIvars$();
    return this.$_contextMenu$;
  }, $_getContextMenuNode$:function() {
    this.$_contextMenuNode$ || this.$_setContextMenuIvars$();
    return this.$_contextMenuNode$;
  }, $_removeContextMenuBehavior$:function() {
    this.widget().removeAttr("contextmenu").off(this.$contextMenuEventNamespace$).removeClass("oj-menu-context-menu-launcher")[0].removeEventListener("click", this.$_clickListener$, !0);
    this.$_contextMenuNode$ && this.$_contextMenuNode$.off(this.$contextMenuEventNamespace$);
    clearTimeout(this.$_contextMenuPressHoldTimer$);
    this.$_contextMenuNode$ = this.$_contextMenu$ = void 0;
  }, $_NotifyContextMenuGesture$:function($menu$$1$$, $event$$27$$, $eventType$$27$$) {
    this.$_OpenContextMenu$($event$$27$$, $eventType$$27$$);
  }, $_OpenContextMenu$:function($event$$28$$, $defaults_eventType$$28$$, $openOptions$$, $submenuOpenOptions$$, $menu$$2_shallow$$) {
    $defaults_eventType$$28$$ = {launcher:this.element, position:{mouse:{my:"start top", at:"start bottom", of:$event$$28$$, collision:"flipfit"}, touch:{my:"start\x3e40 center", at:"start bottom", of:$event$$28$$, collision:"flipfit"}, keyboard:{my:"start top", at:"start bottom", of:"launcher", collision:"flipfit"}}[$defaults_eventType$$28$$]};
    var $forcedOptions$$ = {initialFocus:"menu"};
    $openOptions$$ = $menu$$2_shallow$$ ? $$$$3$$.extend($defaults_eventType$$28$$, $openOptions$$, $forcedOptions$$) : $$$$3$$.extend(!0, $defaults_eventType$$28$$, $openOptions$$, $forcedOptions$$);
    $menu$$2_shallow$$ = this.$_getContextMenu$();
    $menu$$2_shallow$$.$__openingContextMenu$ = !0;
    $menu$$2_shallow$$.open($event$$28$$, $openOptions$$, $submenuOpenOptions$$);
    $menu$$2_shallow$$.$__openingContextMenu$ = !1;
  }, $_removeStateClasses$:function($element$$18$$) {
    $element$$18$$.removeClass("oj-hover oj-focus oj-active");
    $element$$18$$.find(".oj-hover").removeClass("oj-hover");
    $element$$18$$.find(".oj-focus").removeClass("oj-focus");
    $element$$18$$.find(".oj-active").removeClass("oj-active");
  }, _hoverable:function($element$$19$$) {
    this._on($element$$19$$, {mouseenter:function($event$$29$$) {
      $$$$3$$($event$$29$$.currentTarget).hasClass("oj-disabled") || $$$$3$$($event$$29$$.currentTarget).addClass("oj-hover");
    }, mouseleave:function($event$$30$$) {
      $$$$3$$($event$$30$$.currentTarget).removeClass("oj-hover");
    }});
  }, _focusable:function($element$$20$$) {
    this._on($element$$20$$, {focusin:function($event$$31$$) {
      $$$$3$$($event$$31$$.currentTarget).addClass("oj-focus");
    }, focusout:function($event$$32$$) {
      $$$$3$$($event$$32$$.currentTarget).removeClass("oj-focus");
    }});
  }, $_activeable$:function($element$$21$$) {
    this._on($element$$21$$, {mousedown:function($event$$33$$) {
      $$$$3$$($event$$33$$.currentTarget).addClass("oj-active");
    }, mouseup:function($event$$34$$) {
      $$$$3$$($event$$34$$.currentTarget).removeClass("oj-active");
    }});
  }, $_UnregisterChildNode$:function($element$$22$$) {
    if ($element$$22$$) {
      $$$$3$$($element$$22$$).off(this.eventNamespace);
      var $bindings$$ = this.bindings;
      $bindings$$ && (this.bindings = $$$$3$$($bindings$$.not($element$$22$$)));
    }
  }, $getResource$:function($key$$33$$) {
    return this.option($_OJ_TRANSLATIONS_PREFIX$$ + $key$$33$$);
  }, $_GetReadingDirection$:function() {
    return $oj$$3$$.$DomUtils$.$getReadingDirection$();
  }, $_NotifyAttached$:function() {
    this.$_propertyContext$ = null;
  }, $_NotifyDetached$:function() {
    this.$_propertyContext$ = null;
    this.$_removeStateClasses$(this.widget());
  }, $_NotifyShown$:function() {
  }, $_NotifyHidden$:function() {
  }, $_IsEffectivelyDisabled$:function() {
    return this.options.disabled || this.$_ancestorDisabled$ ? !0 : !1;
  }, $__setAncestorComponentDisabled$:function($disabled$$) {
    this.$_ancestorDisabled$ = $disabled$$;
  }, $_getTranslationSectionLoader$:function() {
    var $sectionNames$$ = [], $self$$43$$ = this, $index$$80$$ = 0;
    this.$_traverseWidgetHierarchy$(function($name$$66_proto$$1$$) {
      $name$$66_proto$$1$$ = 0 == $index$$80$$ ? $self$$43$$.$_GetTranslationsSectionName$() : $name$$66_proto$$1$$.widgetFullName;
      $index$$80$$++;
      var $section$$ = $oj$$3$$.$Translations$.$getComponentTranslations$($name$$66_proto$$1$$);
      null == $section$$ || $$$$3$$.isEmptyObject($section$$) || $sectionNames$$.push($name$$66_proto$$1$$);
    });
    var $count$$21$$ = $sectionNames$$.length;
    return 0 < $count$$21$$ ? function() {
      if (1 == $count$$21$$) {
        return $oj$$3$$.$Translations$.$getComponentTranslations$($sectionNames$$[0]);
      }
      for (var $trs$$ = {}, $i$$84$$ = $count$$21$$ - 1;0 <= $i$$84$$;$i$$84$$--) {
        $$$$3$$.widget.extend($trs$$, $oj$$3$$.$Translations$.$getComponentTranslations$($sectionNames$$[$i$$84$$]));
      }
      return $trs$$;
    } : null;
  }, $_getDynamicPropertyContext$:function() {
    if (!this.$_propertyContext$) {
      var $c$$31$$ = {};
      this.$_propertyContext$ = $c$$31$$;
      for (var $element$$23$$ = this.element[0], $elem$$inline_462$$ = $element$$23$$, $containers$$inline_463$$ = [];$elem$$inline_462$$;) {
        var $ga$$inline_464_name$$inline_465$$ = $elem$$inline_462$$.getAttribute, $ga$$inline_464_name$$inline_465$$ = $ga$$inline_464_name$$inline_465$$ ? $ga$$inline_464_name$$inline_465$$.call($elem$$inline_462$$, $oj$$3$$.Components.$_OJ_CONTAINER_ATTR$) : null;
        null != $ga$$inline_464_name$$inline_465$$ && $containers$$inline_463$$.push($ga$$inline_464_name$$inline_465$$);
        $elem$$inline_462$$ = $elem$$inline_462$$.parentNode;
      }
      $c$$31$$.containers = $containers$$inline_463$$;
      $c$$31$$.element = $element$$23$$;
    }
    return this.$_propertyContext$;
  }, $_setupDefaultOptions$:function($originalDefaults$$1$$, $constructorOptions$$2$$) {
    var $options$$122$$ = this.options, $translationLoader$$ = this.$_getTranslationSectionLoader$(), $currVal$$ = $constructorOptions$$2$$[$_OJ_TRANSLATIONS_OPTION$$];
    null == $translationLoader$$ || void 0 !== $currVal$$ && !$$$$3$$.isPlainObject($currVal$$) || $_defineDynamicProperty$$(this, void 0, $constructorOptions$$2$$[$_OJ_TRANSLATIONS_OPTION$$], $options$$122$$, $_OJ_TRANSLATIONS_OPTION$$, $translationLoader$$);
    this.$_loadGlobalDefaultOptions$($originalDefaults$$1$$, $constructorOptions$$2$$);
  }, $_loadGlobalDefaultOptions$:function($originalDefaults$$2$$, $constructorOptions$$3$$) {
    var $options$$123$$ = this.options, $defaults$$1$$ = {}, $widgetHierNames$$ = [];
    this.$_traverseWidgetHierarchy$(function($proto$$2$$) {
      $widgetHierNames$$.push($proto$$2$$.widgetName);
    });
    var $allProperties_contextCallback$$1$$ = $oj$$3$$.Components.$getDefaultOptions$();
    $widgetHierNames$$.push("default");
    for (var $i$$85_val$$19$$ = $widgetHierNames$$.length - 1;0 <= $i$$85_val$$19$$;$i$$85_val$$19$$--) {
      var $callback$$80_defaultVal$$1_props$$4$$ = $allProperties_contextCallback$$1$$[$widgetHierNames$$[$i$$85_val$$19$$]];
      void 0 !== $callback$$80_defaultVal$$1_props$$4$$ && ($defaults$$1$$ = $$$$3$$.widget.extend($defaults$$1$$, $callback$$80_defaultVal$$1_props$$4$$));
    }
    if (!$$$$3$$.isEmptyObject($defaults$$1$$)) {
      var $self$$44$$ = this, $allProperties_contextCallback$$1$$ = function $$allProperties_contextCallback$$1$$$() {
        return $self$$44$$.$_getDynamicPropertyContext$();
      }, $prop$$52$$;
      for ($prop$$52$$ in $defaults$$1$$) {
        if ($i$$85_val$$19$$ = $constructorOptions$$3$$[$prop$$52$$], void 0 === $i$$85_val$$19$$ || $$$$3$$.isPlainObject($i$$85_val$$19$$)) {
          $callback$$80_defaultVal$$1_props$$4$$ = $defaults$$1$$[$prop$$52$$], null != $callback$$80_defaultVal$$1_props$$4$$ && $callback$$80_defaultVal$$1_props$$4$$ instanceof $__ojDynamicGetter$$ ? ($callback$$80_defaultVal$$1_props$$4$$ = $callback$$80_defaultVal$$1_props$$4$$.$getCallback$(), $$$$3$$.isFunction($callback$$80_defaultVal$$1_props$$4$$) ? $_defineDynamicProperty$$(this, $originalDefaults$$2$$[$prop$$52$$], $i$$85_val$$19$$, $options$$123$$, $prop$$52$$, $callback$$80_defaultVal$$1_props$$4$$, 
          $allProperties_contextCallback$$1$$) : $oj$$3$$.$Logger$.error("Dynamic getter for property %s is not a function", $prop$$52$$)) : $options$$123$$[$prop$$52$$] = $_mergeOptionLayers$$([$originalDefaults$$2$$[$prop$$52$$], $callback$$80_defaultVal$$1_props$$4$$, $i$$85_val$$19$$]);
        }
      }
    }
  }, $_traverseWidgetHierarchy$:function($callback$$81$$) {
    for (var $proto$$3$$ = this.constructor.prototype;null != $proto$$3$$ && "oj" === $proto$$3$$.namespace;) {
      $callback$$81$$($proto$$3$$), $proto$$3$$ = Object.getPrototypeOf($proto$$3$$);
    }
  }});
  delete $$$$3$$.fn.baseComponent;
  $oj$$3$$.$__registerWidget$ = function $$oj$$3$$$$__registerWidget$$($name$$68_namespace$$3$$, $base$$3_nameArray_simpleName$$, $prototype$$1$$, $isHidden$$) {
    $$$$3$$.widget($name$$68_namespace$$3$$, $base$$3_nameArray_simpleName$$, $prototype$$1$$);
    $isHidden$$ && delete $$$$3$$.fn[$name$$68_namespace$$3$$.split(".")[1]];
    if ("oj.oj" === $name$$68_namespace$$3$$.substring(0, 5) || "oj._oj" === $name$$68_namespace$$3$$.substring(0, 6)) {
      $base$$3_nameArray_simpleName$$ = $name$$68_namespace$$3$$.split(".");
      $name$$68_namespace$$3$$ = $base$$3_nameArray_simpleName$$[0];
      $base$$3_nameArray_simpleName$$ = $base$$3_nameArray_simpleName$$[1];
      var $fullName$$ = $name$$68_namespace$$3$$ + "-" + $base$$3_nameArray_simpleName$$;
      $$$$3$$.expr[":"][("_" === $base$$3_nameArray_simpleName$$.substring(0, 1) ? "_" + $name$$68_namespace$$3$$ + "-" + $base$$3_nameArray_simpleName$$.substring(3) : $name$$68_namespace$$3$$ + "-" + $base$$3_nameArray_simpleName$$.substring(2)).toLowerCase()] = function $$$$$3$$$expr$__1$_$$base$$3_nameArray_simpleName$$$substring$_$$name$$68_namespace$$3$$$__2$$base$$3_nameArray_simpleName$$$substring$$name$$68_namespace$$3$$$__3$$base$$3_nameArray_simpleName$$$substring$toLowerCase$($elem$$15$$) {
        return!!$$$$3$$.data($elem$$15$$, $fullName$$);
      };
    }
  };
  var $_OJ_TRANSLATIONS_OPTION$$ = "translations", $_OJ_TRANSLATIONS_PREFIX$$ = $_OJ_TRANSLATIONS_OPTION$$ + ".", $_OJ_COMPONENT_EVENT_OVERRIDES$$ = {preventDefault:function() {
    this.isDefaultPrevented = $_returnTrue$$;
  }, stopPropagation:function() {
    this.isPropagationStopped = $_returnTrue$$;
  }, stopImmediatePropagation:function() {
    this.isImmediatePropagationStopped = $_returnTrue$$;
  }};
  $oj$$3$$.$ComponentMessaging$ = function $$oj$$3$$$$ComponentMessaging$$($component$$) {
    this.Init($component$$);
  };
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$ComponentMessaging$, $oj$$3$$.$Object$, "oj.ComponentMessaging");
  $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$ = {NONE:"none", $NOTEWINDOW$:"notewindow", $PLACEHOLDER$:"placeholder", $INLINE$:"inline"};
  $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$ = {};
  $oj$$3$$.$ComponentMessaging$.$registerMessagingStrategy$ = function $$oj$$3$$$$ComponentMessaging$$$registerMessagingStrategy$$($type$$65$$, $strategyConstructorCallback$$) {
    $type$$65$$ && "function" === typeof $strategyConstructorCallback$$ && ($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$[$type$$65$$] = $strategyConstructorCallback$$);
  };
  $oj$$3$$.$ComponentMessaging$.prototype.Init = function $$oj$$3$$$$ComponentMessaging$$$Init$($component$$1$$) {
    $oj$$3$$.$ComponentMessaging$.$superclass$.Init.call(this);
    this.$_component$ = $component$$1$$;
    this.$_activated$ = !1;
    this.$_initializeMessagingStrategies$();
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$activate$ = function $$oj$$3$$$$ComponentMessaging$$$$activate$$($launcher$$, $content$$4$$) {
    var $that$$ = this;
    $oj$$3$$.$Assert$.$assertObject$($content$$4$$);
    this.$_launcher$ = $launcher$$;
    this.$_messagingContent$ = $oj$$3$$.$CollectionUtils$.$copyInto$(this.$_messagingContent$ || {}, $content$$4$$);
    this.$_activated$ ? this.$_reactivate$() : ($$$$3$$.each(this.$_strategies$, function($i$$86$$, $strategy$$) {
      $strategy$$.$activate$($that$$);
    }), this.$_activated$ = !0);
  };
  $oj$$3$$.$ComponentMessaging$.prototype.update = function $$oj$$3$$$$ComponentMessaging$$$update$($content$$5$$) {
    $oj$$3$$.$Assert$.$assertObject$($content$$5$$);
    $oj$$3$$.$Assert$.$assertBoolean$(this.$_activated$);
    this.$_messagingContent$ = $oj$$3$$.$CollectionUtils$.$copyInto$(this.$_messagingContent$ || {}, $content$$5$$);
    this.$_activated$ && $$$$3$$.each(this.$_strategies$, function($i$$87$$, $strategy$$1$$) {
      $strategy$$1$$.$shouldUpdate$($content$$5$$) && $strategy$$1$$.update();
    });
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$deactivate$ = function $$oj$$3$$$$ComponentMessaging$$$$deactivate$$() {
    $$$$3$$.each(this.$_strategies$, function($i$$88$$, $strategy$$2$$) {
      $strategy$$2$$.$deactivate$();
    });
    this.$_activated$ = !1;
    this.$_launcher$ = this.$_component$ = null;
    this.$_strategies$ = {};
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_createMessagingStrategy$ = function $$oj$$3$$$$ComponentMessaging$$$$_createMessagingStrategy$$($type$$66$$, $artifactsForType$$) {
    return new ($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$[$type$$66$$] || $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE])($artifactsForType$$);
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getComponent$ = function $$oj$$3$$$$ComponentMessaging$$$$_getComponent$$() {
    return this.$_component$ || null;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getLauncher$ = function $$oj$$3$$$$ComponentMessaging$$$$_getLauncher$$() {
    return this.$_launcher$ || null;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getMessagingContent$ = function $$oj$$3$$$$ComponentMessaging$$$$_getMessagingContent$$() {
    return this.$_messagingContent$ || {};
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getResolvedMessagingDisplayOptions$ = function $$oj$$3$$$$ComponentMessaging$$$$_getResolvedMessagingDisplayOptions$$() {
    var $artifactsByDisplayType$$ = {}, $artifactDisplayTypeResolved$$ = !1, $displayTypes$$, $displayType_key$$34$$, $compPH$$ = this.$_component$.options.placeholder, $artifact$$, $keys$$5$$, $i$$89$$, $j$$7$$, $messagingPreferences$$ = this.$_component$.options.displayOptions || {}, $$messagingPreferences$$ = {};
    $keys$$5$$ = Object.keys($messagingPreferences$$);
    for ($i$$89$$ = 0;$i$$89$$ < $keys$$5$$.length;$i$$89$$++) {
      $displayType_key$$34$$ = $keys$$5$$[$i$$89$$];
      $displayTypes$$ = $messagingPreferences$$[$displayType_key$$34$$];
      $artifactDisplayTypeResolved$$ = !1;
      $artifact$$ = $displayType_key$$34$$ + "";
      if (Array.isArray($displayTypes$$)) {
        for ($j$$7$$ = 0;$j$$7$$ < $displayTypes$$.length;$j$$7$$++) {
          $displayType_key$$34$$ = $displayTypes$$[$j$$7$$], $artifactDisplayTypeResolved$$ || ($artifactDisplayTypeResolved$$ = this.$_resolveDisplayTypeForArtifact$($artifact$$, $displayType_key$$34$$, $compPH$$, $$messagingPreferences$$));
        }
      } else {
        "string" === typeof $displayTypes$$ && ($artifactDisplayTypeResolved$$ || ($artifactDisplayTypeResolved$$ = this.$_resolveDisplayTypeForArtifact$($artifact$$, $displayTypes$$, $compPH$$, $$messagingPreferences$$)));
      }
      $artifactDisplayTypeResolved$$ || ($$messagingPreferences$$[$artifact$$] = $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE);
    }
    $$$$3$$.each($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$, function($type$$67$$, $name$$69$$) {
      $artifactsByDisplayType$$[$name$$69$$] = [];
    });
    $$$$3$$.each($$messagingPreferences$$, function($artifact$$1$$, $displayType$$1$$) {
      $artifactsByDisplayType$$[$displayType$$1$$].push($artifact$$1$$);
    });
    return $artifactsByDisplayType$$;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_resolveDisplayTypeForArtifact$ = function $$oj$$3$$$$ComponentMessaging$$$$_resolveDisplayTypeForArtifact$$($artifact$$2$$, $displayType$$2$$, $compPH$$1$$, $$messagingPreferences$$1$$) {
    var $artifactDisplayTypeResolved$$1$$ = !1;
    switch($displayType$$2$$) {
      case $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$:
        "converterHint" !== $artifact$$2$$ || $artifactDisplayTypeResolved$$1$$ || $compPH$$1$$ || ($$messagingPreferences$$1$$[$artifact$$2$$] = $displayType$$2$$, $artifactDisplayTypeResolved$$1$$ = !0);
        break;
      case $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$INLINE$:
        "messages" !== $artifact$$2$$ || $artifactDisplayTypeResolved$$1$$ || ($$messagingPreferences$$1$$[$artifact$$2$$] = $displayType$$2$$, $artifactDisplayTypeResolved$$1$$ = !0);
        break;
      default:
        $artifactDisplayTypeResolved$$1$$ || ($$messagingPreferences$$1$$[$artifact$$2$$] = $displayType$$2$$, $artifactDisplayTypeResolved$$1$$ = !0);
    }
    return $artifactDisplayTypeResolved$$1$$;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_initializeMessagingStrategies$ = function $$oj$$3$$$$ComponentMessaging$$$$_initializeMessagingStrategies$$() {
    var $artifactsByDisplayType$$1_displayInline$$ = this.$_getResolvedMessagingDisplayOptions$(), $displayInNoteWindow$$ = $artifactsByDisplayType$$1_displayInline$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$], $displayNone$$ = $artifactsByDisplayType$$1_displayInline$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE], $displayInPlaceholder$$ = $artifactsByDisplayType$$1_displayInline$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$], $artifactsByDisplayType$$1_displayInline$$ = 
    $artifactsByDisplayType$$1_displayInline$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$INLINE$], $messagingStrategies$$ = {};
    0 < $displayInNoteWindow$$.length && ($messagingStrategies$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$] = this.$_createMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$, $displayInNoteWindow$$));
    0 < $displayInPlaceholder$$.length && ($messagingStrategies$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$] = this.$_createMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$, $displayInPlaceholder$$));
    0 < $artifactsByDisplayType$$1_displayInline$$.length && ($messagingStrategies$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$INLINE$] = this.$_createMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$INLINE$, $artifactsByDisplayType$$1_displayInline$$));
    $messagingStrategies$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE] = this.$_createMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE, $displayNone$$);
    this.$_strategies$ = $messagingStrategies$$;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_reactivate$ = function $$oj$$3$$$$ComponentMessaging$$$$_reactivate$$() {
    var $artifactsByDisplayType$$2$$ = this.$_getResolvedMessagingDisplayOptions$(), $strategy$$3$$, $cm$$ = this;
    $$$$3$$.each($artifactsByDisplayType$$2$$, function($type$$68$$, $artifactsForType$$1$$) {
      $type$$68$$ += "";
      $strategy$$3$$ = $cm$$.$_strategies$[$type$$68$$];
      $artifactsForType$$1$$ && 0 < $artifactsForType$$1$$.length ? $strategy$$3$$ ? $strategy$$3$$ && $strategy$$3$$.$reactivate$($artifactsForType$$1$$) : ($strategy$$3$$ = $cm$$.$_createMessagingStrategy$($type$$68$$, $artifactsForType$$1$$), $cm$$.$_strategies$[$type$$68$$] = $strategy$$3$$, $strategy$$3$$.$activate$($cm$$)) : $strategy$$3$$ && $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE !== $type$$68$$ && ($strategy$$3$$.$deactivate$(), delete $cm$$.$_strategies$[$type$$68$$]);
    });
  };
  $oj$$3$$.$MessagingStrategy$ = function $$oj$$3$$$$MessagingStrategy$$($displayOptions$$) {
    this.Init($displayOptions$$);
  };
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$MessagingStrategy$, $oj$$3$$.$Object$, "oj.MessagingStrategy");
  $oj$$3$$.$MessagingStrategy$.prototype.Init = function $$oj$$3$$$$MessagingStrategy$$$Init$($displayOptions$$1$$) {
    $oj$$3$$.$Assert$.$assertArray$($displayOptions$$1$$);
    $oj$$3$$.$MessagingStrategy$.$superclass$.Init.call(this);
    this.$_displayOptions$ = $displayOptions$$1$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$activate$ = function $$oj$$3$$$$MessagingStrategy$$$$activate$$($cm$$1$$) {
    this.$_componentMessaging$ = $cm$$1$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$deactivate$ = function $$oj$$3$$$$MessagingStrategy$$$$deactivate$$() {
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$reactivate$ = function $$oj$$3$$$$MessagingStrategy$$$$reactivate$$($newDisplayOptions$$) {
    this.Init($newDisplayOptions$$);
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$shouldUpdate$ = function $$oj$$3$$$$MessagingStrategy$$$$shouldUpdate$$() {
    return!0;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.update = function $$oj$$3$$$$MessagingStrategy$$$update$() {
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetLauncher$ = function $$oj$$3$$$$MessagingStrategy$$$$GetLauncher$$() {
    return this.$_componentMessaging$.$_getLauncher$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetComponent$ = function $$oj$$3$$$$MessagingStrategy$$$$GetComponent$$() {
    return this.$_componentMessaging$.$_getComponent$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetMessages$ = function $$oj$$3$$$$MessagingStrategy$$$$GetMessages$$() {
    return this.$GetValidityState$().$_messages$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetMaxSeverity$ = function $$oj$$3$$$$MessagingStrategy$$$$GetMaxSeverity$$() {
    return this.$GetValidityState$().$getMaxSeverity$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetConverterHint$ = function $$oj$$3$$$$MessagingStrategy$$$$GetConverterHint$$() {
    var $hints$$ = [], $converterHint_mc$$ = this.$_getMessagingContent$();
    ($converterHint_mc$$ = $converterHint_mc$$ && $converterHint_mc$$.$converterHint$) && $hints$$.push($converterHint_mc$$);
    return $hints$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetValidatorHints$ = function $$oj$$3$$$$MessagingStrategy$$$$GetValidatorHints$$() {
    var $hints$$1$$ = [], $mc$$1$$ = this.$_getMessagingContent$();
    $$$$3$$.each($mc$$1$$ && $mc$$1$$.$validatorHint$ || [], function($index$$82$$, $hint$$1$$) {
      $hints$$1$$.push($hint$$1$$);
    });
    return $hints$$1$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetTitle$ = function $$oj$$3$$$$MessagingStrategy$$$$GetTitle$$() {
    var $mc$$2$$ = this.$_getMessagingContent$();
    return $mc$$2$$ && $mc$$2$$.title || "";
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetValidityState$ = function $$oj$$3$$$$MessagingStrategy$$$$GetValidityState$$() {
    var $mc$$3$$ = this.$_getMessagingContent$();
    return $mc$$3$$ && $mc$$3$$.$validityState$ || null;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$HasMessages$ = function $$oj$$3$$$$MessagingStrategy$$$$HasMessages$$() {
    var $messages$$2$$ = this.$GetMessages$();
    return $messages$$2$$ && 0 < $messages$$2$$.length ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowMessages$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowMessages$$() {
    return-1 !== this.$_displayOptions$.indexOf("messages") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowConverterHint$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowConverterHint$$() {
    return-1 !== this.$_displayOptions$.indexOf("converterHint") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowValidatorHint$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowValidatorHint$$() {
    return-1 !== this.$_displayOptions$.indexOf("validatorHint") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowTitle$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowTitle$$() {
    return-1 !== this.$_displayOptions$.indexOf("title") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$IsInvalid$ = function $$oj$$3$$$$MessagingStrategy$$$$IsInvalid$$() {
    return this.$GetValidityState$().$isInvalid$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$_getMessagingContent$ = function $$oj$$3$$$$MessagingStrategy$$$$_getMessagingContent$$() {
    return this.$_componentMessaging$ ? this.$_componentMessaging$.$_getMessagingContent$() : {};
  };
  $oj$$3$$.$DefaultMessagingStrategy$ = function $$oj$$3$$$$DefaultMessagingStrategy$$($displayOptions$$2$$) {
    this.Init($displayOptions$$2$$);
  };
  $oj$$3$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE, $oj$$3$$.$DefaultMessagingStrategy$);
  $oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$ = "oj-invalid";
  $oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$ = "oj-warning";
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$DefaultMessagingStrategy$, $oj$$3$$.$MessagingStrategy$, "oj.DefaultMessagingStrategy");
  $oj$$3$$.$DefaultMessagingStrategy$.prototype.update = function $$oj$$3$$$$DefaultMessagingStrategy$$$update$() {
    $oj$$3$$.$DefaultMessagingStrategy$.$superclass$.update.call(this);
    var $launcher$$1$$ = this.$GetLauncher$(), $maxSeverity$$1$$ = this.$GetMaxSeverity$(), $removeClasses$$ = [], $addClasses$$ = [], $invalid$$ = !1, $jqRoot$$ = this.$GetComponent$().widget();
    $launcher$$1$$ && (this.$IsInvalid$() ? ($removeClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$), $addClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$), $invalid$$ = !0) : this.$HasMessages$() && $maxSeverity$$1$$ === $oj$$3$$.$Message$.$SEVERITY_LEVEL$.WARNING ? ($removeClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$), $addClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$)) : ($removeClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$), 
    $removeClasses$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$)), $jqRoot$$.removeClass($removeClasses$$.join(" ")).addClass($addClasses$$.join(" ")), $launcher$$1$$.attr({"aria-invalid":$invalid$$}));
  };
  $oj$$3$$.$DefaultMessagingStrategy$.prototype.$deactivate$ = function $$oj$$3$$$$DefaultMessagingStrategy$$$$deactivate$$() {
    this.$GetComponent$().widget().removeClass($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$).removeClass($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$);
    this.$GetLauncher$().removeAttr("aria-invalid");
    $oj$$3$$.$DefaultMessagingStrategy$.$superclass$.$deactivate$.call(this);
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$($displayOptions$$3$$) {
    this.Init($displayOptions$$3$$);
  };
  $oj$$3$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$, $oj$$3$$.$PlaceholderMessagingStrategy$);
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$PlaceholderMessagingStrategy$, $oj$$3$$.$MessagingStrategy$, "oj.PlaceholderMessagingStrategy");
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.Init = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$Init$($displayOptions$$4$$) {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.Init.call(this, $displayOptions$$4$$);
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$activate$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$activate$$($cm$$2$$) {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.$activate$.call(this, $cm$$2$$);
    this.$_refreshPlaceholder$();
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$reactivate$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$reactivate$$($newDisplayOptions$$1$$) {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.$reactivate$.call(this, $newDisplayOptions$$1$$);
    this.$_refreshPlaceholder$();
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$shouldUpdate$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$shouldUpdate$$($content$$7$$) {
    return $content$$7$$ && void 0 !== $content$$7$$.$converterHint$ ? !0 : !1;
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.update = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$update$() {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.update.call(this);
    this.$_refreshPlaceholder$();
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$_refreshPlaceholder$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$_refreshPlaceholder$$() {
    var $content$$8_hints$$2_launcher$$2$$ = this.$GetLauncher$();
    this.$ShowPlaceholderContent$() && $content$$8_hints$$2_launcher$$2$$ && ($content$$8_hints$$2_launcher$$2$$ = this.$GetConverterHint$(), $content$$8_hints$$2_launcher$$2$$ = $content$$8_hints$$2_launcher$$2$$.length ? $content$$8_hints$$2_launcher$$2$$[0] : "", this.$GetComponent$().option({placeholder:$content$$8_hints$$2_launcher$$2$$}, {_context:{$internalMessagingSet$:!0}}));
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$ShowPlaceholderContent$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$ShowPlaceholderContent$$() {
    return this.$ShowConverterHint$();
  };
  $oj$$3$$.$ComponentValidity$ = function $$oj$$3$$$$ComponentValidity$$($valid$$1$$, $messages$$3$$) {
    this.Init($valid$$1$$, $messages$$3$$);
  };
  $oj$$3$$.$ComponentValidity$.$isInvalid$ = function $$oj$$3$$$$ComponentValidity$$$isInvalid$$($messages$$4$$) {
    return $oj$$3$$.$Message$.$getMaxSeverity$($messages$$4$$) >= $oj$$3$$.$Message$.$SEVERITY_LEVEL$.ERROR ? !0 : !1;
  };
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$ComponentValidity$, $oj$$3$$.$Object$, "oj.ComponentValidity");
  $oj$$3$$.$ComponentValidity$.prototype.Init = function $$oj$$3$$$$ComponentValidity$$$Init$($valid$$2$$, $messages$$5$$) {
    $oj$$3$$.$ComponentValidity$.$superclass$.Init.call(this);
    this.$_initialize$($messages$$5$$);
  };
  $oj$$3$$.$ComponentValidity$.prototype.$isInvalid$ = function $$oj$$3$$$$ComponentValidity$$$$isInvalid$$() {
    return this.$_invalid$;
  };
  $oj$$3$$.$ComponentValidity$.prototype.$getMaxSeverity$ = function $$oj$$3$$$$ComponentValidity$$$$getMaxSeverity$$() {
    return this.$_maxSeverity$;
  };
  $oj$$3$$.$ComponentValidity$.prototype.update = function $$oj$$3$$$$ComponentValidity$$$update$($valid$$3$$, $messages$$6$$) {
    this.$_initialize$($messages$$6$$);
  };
  $oj$$3$$.$ComponentValidity$.prototype.$_initialize$ = function $$oj$$3$$$$ComponentValidity$$$$_initialize$$($messages$$7$$) {
    this.$_compMessages$ = $messages$$7$$;
    this.$_messages$ = this.$_getImmediateMessages$();
    this.$_maxSeverity$ = $oj$$3$$.$Message$.$getMaxSeverity$(this.$_messages$);
    this.$_invalid$ = $oj$$3$$.$ComponentValidity$.$isInvalid$(this.$_messages$);
  };
  $oj$$3$$.$ComponentValidity$.prototype.$_getImmediateMessages$ = function $$oj$$3$$$$ComponentValidity$$$$_getImmediateMessages$$() {
    for (var $messages$$8$$ = this.$_compMessages$ || [], $immediateMsgs$$ = [], $msg$$3$$, $index$$83$$ = 0;$index$$83$$ < $messages$$8$$.length;$index$$83$$++) {
      $msg$$3$$ = $messages$$8$$[$index$$83$$], $msg$$3$$ instanceof $oj$$3$$.$ComponentMessage$ && !$msg$$3$$.$canDisplay$() || $immediateMsgs$$.push($msg$$3$$);
    }
    return $immediateMsgs$$;
  };
  $oj$$3$$.$DomUtils$ = {};
  $oj$$3$$.$DomUtils$.$_HTML_START_TAG$ = "\x3chtml\x3e";
  $oj$$3$$.$DomUtils$.$_HTML_END_TAG$ = "\x3c/html\x3e";
  $oj$$3$$.$DomUtils$.$_LEGAL_ELEMENTS$ = {SPAN:1, B:1, I:1, EM:1, BR:1, HR:1, LI:1, OL:1, UL:1, P:1, TT:1, BIG:1, SMALL:1, PRE:1};
  $oj$$3$$.$DomUtils$.$_LEGAL_ATTRIBUTES$ = {"class":1, style:1};
  $oj$$3$$.$DomUtils$.$isHTMLContent$ = function $$oj$$3$$$$DomUtils$$$isHTMLContent$$($content$$9$$) {
    return 0 === $content$$9$$.indexOf($oj$$3$$.$DomUtils$.$_HTML_START_TAG$) && $content$$9$$.lastIndexOf($oj$$3$$.$DomUtils$.$_HTML_END_TAG$) === $content$$9$$.length - 7 ? !0 : !1;
  };
  $oj$$3$$.$DomUtils$.$cleanHtml$ = function $$oj$$3$$$$DomUtils$$$cleanHtml$$($value$$75$$) {
    var $offSpan$$ = $$$$3$$(document.createElement("span")).get(0);
    ($offSpan$$.innerHTML = $value$$75$$) && 0 <= $value$$75$$.indexOf("\x3c") && $oj$$3$$.$DomUtils$.$_cleanElementHtml$($offSpan$$);
    return $offSpan$$;
  };
  $oj$$3$$.$DomUtils$.$_cleanElementHtml$ = function $$oj$$3$$$$DomUtils$$$_cleanElementHtml$$($node$$11$$) {
    for (var $children$$ = $node$$11$$.childNodes, $child$$1$$, $attrs$$19$$, $attr$$11$$, $childHasAttr$$, $i$$90$$, $count$$22$$ = $children$$.length - 1;0 <= $count$$22$$;) {
      if (($child$$1$$ = $children$$.item($count$$22$$)) && 1 === $child$$1$$.nodeType) {
        if ($oj$$3$$.$DomUtils$.$_LEGAL_ELEMENTS$[$child$$1$$.nodeName]) {
          $attrs$$19$$ = $child$$1$$.attributes;
          for ($i$$90$$ = $attrs$$19$$.length - 1;0 <= $i$$90$$;$i$$90$$--) {
            $attr$$11$$ = $attrs$$19$$[$i$$90$$], ($childHasAttr$$ = void 0 !== $$$$3$$($child$$1$$).attr($attr$$11$$.name)) && ($oj$$3$$.$DomUtils$.$_LEGAL_ATTRIBUTES$[$attr$$11$$.name] || $child$$1$$.removeAttribute($attr$$11$$.nodeName));
          }
          $oj$$3$$.$DomUtils$.$_cleanElementHtml$($child$$1$$);
        } else {
          $child$$1$$ && $node$$11$$.removeChild($child$$1$$);
        }
      }
      $count$$22$$--;
    }
  };
  $oj$$3$$.$DomUtils$.$isAncestor$ = function $$oj$$3$$$$DomUtils$$$isAncestor$$($ancestorNode$$, $node$$12$$) {
    for (var $parentNode$$1$$ = $node$$12$$.parentNode;$parentNode$$1$$;) {
      if ($parentNode$$1$$ == $ancestorNode$$) {
        return!0;
      }
      $parentNode$$1$$ = $parentNode$$1$$.parentNode;
    }
    return!1;
  };
  $oj$$3$$.$DomUtils$.$isAncestorOrSelf$ = function $$oj$$3$$$$DomUtils$$$isAncestorOrSelf$$($ancestorNode$$1$$, $node$$13$$) {
    return $node$$13$$ == $ancestorNode$$1$$ ? !0 : $oj$$3$$.$DomUtils$.$isAncestor$($ancestorNode$$1$$, $node$$13$$);
  };
  $oj$$3$$.$DomUtils$.$addResizeListener$ = function $$oj$$3$$$$DomUtils$$$addResizeListener$$($elem$$16$$, $listener$$32$$, $collapseEventTimeout$$) {
    var $jelem$$2$$ = $$$$3$$($elem$$16$$), $tracker$$ = $jelem$$2$$.data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
    null == $tracker$$ && ($tracker$$ = new $oj$$3$$.$DomUtils$.$_ResizeTracker$($elem$$16$$), $jelem$$2$$.data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$, $tracker$$), $tracker$$.start());
    $tracker$$.addListener($listener$$32$$, $collapseEventTimeout$$);
  };
  $oj$$3$$.$DomUtils$.$removeResizeListener$ = function $$oj$$3$$$$DomUtils$$$removeResizeListener$$($elem$$17$$, $listener$$33$$) {
    var $jelem$$3$$ = $$$$3$$($elem$$17$$), $tracker$$1$$ = $jelem$$3$$.data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
    null != $tracker$$1$$ && ($tracker$$1$$.removeListener($listener$$33$$), $tracker$$1$$.$isEmpty$() && ($tracker$$1$$.stop(), $jelem$$3$$.removeData($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$)));
  };
  $oj$$3$$.$DomUtils$.$fixResizeListeners$ = function $$oj$$3$$$$DomUtils$$$fixResizeListeners$$($subtreeRoot$$1$$) {
    $$$$3$$($subtreeRoot$$1$$).find(".oj-helper-detect-expansion").parent().each(function($index$$84$$, $div$$1$$) {
      var $tracker$$2$$ = $$$$3$$($div$$1$$).data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
      null != $tracker$$2$$ && $tracker$$2$$.$init$(!0);
    });
  };
  $oj$$3$$.$DomUtils$.$isMetaKeyPressed$ = function $$oj$$3$$$$DomUtils$$$isMetaKeyPressed$$($evt$$17$$) {
    var $agentInfo$$ = $oj$$3$$.$AgentUtils$.$getAgentInfo$();
    return $oj$$3$$.$AgentUtils$.$OS$.$MAC$ === $agentInfo$$.os ? $evt$$17$$.metaKey : $evt$$17$$.ctrlKey;
  };
  $oj$$3$$.$DomUtils$.$_invokeAfterPaint$ = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function($fn$$5$$) {
    return window.setTimeout($fn$$5$$, 0);
  }).bind(window);
  $oj$$3$$.$DomUtils$.$_cancelInvokeAfterPaint$ = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function($id$$13$$) {
    return window.clearTimeout($id$$13$$);
  }).bind(window);
  $oj$$3$$.$DomUtils$.$_ResizeTracker$ = function $$oj$$3$$$$DomUtils$$$_ResizeTracker$$($div$$2$$) {
    function $_checkSize$$($fireEvent$$) {
      var $adjusted$$ = !1;
      if (null != $_detectExpansion$$.offsetParent) {
        var $newWidth$$ = $_detectExpansion$$.offsetWidth, $newHeight$$ = $_detectExpansion$$.offsetHeight;
        if ($_oldWidth$$ !== $newWidth$$ || $_oldHeight$$ !== $newHeight$$) {
          $_retrySetScroll$$ = $_RETRY_MAX_COUNT$$, $_adjust$$($newWidth$$, $newHeight$$), $adjusted$$ = !0, $fireEvent$$ && $_notifyListeners$$(!0);
        }
      }
      return $adjusted$$;
    }
    function $_notifyListeners$$($i$$91_useAfterPaint$$) {
      var $newWidth$$1$$ = $div$$2$$.offsetWidth, $newHeight$$1$$ = $div$$2$$.offsetHeight;
      $_listeners$$.has() && ($i$$91_useAfterPaint$$ ? (null !== $_invokeId$$ && $oj$$3$$.$DomUtils$.$_cancelInvokeAfterPaint$($_invokeId$$), $_invokeId$$ = $oj$$3$$.$DomUtils$.$_invokeAfterPaint$(function() {
        $_invokeId$$ = null;
        $_listeners$$.fire($newWidth$$1$$, $newHeight$$1$$);
      })) : $_listeners$$.fire($newWidth$$1$$, $newHeight$$1$$));
      for ($i$$91_useAfterPaint$$ = 0;$i$$91_useAfterPaint$$ < $_collapsingManagers$$.length;$i$$91_useAfterPaint$$++) {
        $_collapsingManagers$$[$i$$91_useAfterPaint$$].$getCallback$()($newWidth$$1$$, $newHeight$$1$$);
      }
    }
    function $_handleScroll$$($evt$$18$$) {
      $evt$$18$$.stopPropagation();
      !$_checkSize$$(!0) && 0 < $_retrySetScroll$$ && null != $_detectExpansion$$.offsetParent && (0 == $_detectExpansion$$.scrollLeft || 0 == $_detectExpansion$$.scrollTop) && ($_retrySetScroll$$--, $_adjust$$($_oldWidth$$, $_oldHeight$$));
    }
    function $_handleResize$$() {
      $_notifyListeners$$(!1);
    }
    function $_adjust$$($width$$12$$, $height$$11$$) {
      $_oldWidth$$ = $width$$12$$;
      $_oldHeight$$ = $height$$11$$;
      var $expansionChildStyle$$ = $_detectExpansion$$.firstChild.style, $delta$$1$$ = 1;
      do {
        $expansionChildStyle$$.width = $width$$12$$ + $delta$$1$$ + "px", $expansionChildStyle$$.height = $height$$11$$ + $delta$$1$$ + "px", $_detectExpansion$$.scrollLeft = $_detectExpansion$$.scrollTop = $delta$$1$$, $delta$$1$$++;
      } while ((0 == $_detectExpansion$$.scrollTop || 0 == $_detectExpansion$$.scrollLeft) && 5 >= $delta$$1$$);
      $_detectContraction$$.scrollLeft = $width$$12$$;
      $_detectContraction$$.scrollTop = $height$$11$$;
    }
    var $_listeners$$ = $$$$3$$.Callbacks(), $_collapsingManagers$$ = [], $_collapsingListeners$$ = [], $_RETRY_MAX_COUNT$$ = 2, $_retrySetScroll$$ = 0, $_invokeId$$ = null, $_oldWidth$$ = null, $_oldHeight$$ = null, $_detectExpansion$$ = null, $_detectContraction$$ = null, $_resizeListener$$ = null, $_scrollListener$$ = null;
    this.addListener = function $this$addListener$($listener$$34$$, $collapseEventTimeout$$1$$) {
      void 0 === $collapseEventTimeout$$1$$ || 0 === $collapseEventTimeout$$1$$ ? $_listeners$$.add($listener$$34$$) : ($_collapsingManagers$$.push(new $oj$$3$$.$DomUtils$.$_collapsingListenerManager$($listener$$34$$, $collapseEventTimeout$$1$$)), $_collapsingListeners$$.push($listener$$34$$));
    };
    this.removeListener = function $this$removeListener$($listener$$35$$) {
      var $index$$85$$ = $_collapsingListeners$$.indexOf($listener$$35$$);
      0 <= $index$$85$$ ? ($_collapsingListeners$$.splice($index$$85$$, 1), $_collapsingManagers$$.splice($index$$85$$, 1)[0].stop()) : $_listeners$$.remove($listener$$35$$);
    };
    this.$isEmpty$ = function $this$$isEmpty$$() {
      return!$_listeners$$.has() && 0 == $_collapsingListeners$$.length;
    };
    this.start = function $this$start$() {
      $_scrollListener$$ = $_handleScroll$$.bind(this);
      if ($div$$2$$.attachEvent) {
        $_resizeListener$$ = $_handleResize$$.bind(this), $div$$2$$.attachEvent("onresize", $_resizeListener$$);
      } else {
        var $contractionChild_firstChild$$ = $div$$2$$.childNodes[0];
        $_detectExpansion$$ = document.createElement("div");
        $_detectExpansion$$.className = "oj-helper-detect-expansion";
        var $expansionChild$$ = document.createElement("div");
        $_detectExpansion$$.appendChild($expansionChild$$);
        null != $contractionChild_firstChild$$ ? $div$$2$$.insertBefore($_detectExpansion$$, $contractionChild_firstChild$$) : $div$$2$$.appendChild($_detectExpansion$$);
        $_detectExpansion$$.addEventListener("scroll", $_scrollListener$$, !1);
        $_detectContraction$$ = document.createElement("div");
        $_detectContraction$$.className = "oj-helper-detect-contraction";
        $contractionChild_firstChild$$ = document.createElement("div");
        $contractionChild_firstChild$$.style.width = "200%";
        $contractionChild_firstChild$$.style.height = "200%";
        $_detectContraction$$.appendChild($contractionChild_firstChild$$);
        $div$$2$$.insertBefore($_detectContraction$$, $_detectExpansion$$);
        $_detectContraction$$.addEventListener("scroll", $_scrollListener$$, !1);
        this.$init$(!1);
      }
    };
    this.stop = function $this$stop$() {
      null != $_invokeId$$ && ($oj$$3$$.$DomUtils$.$_cancelInvokeAfterPaint$($_invokeId$$), $_invokeId$$ = null);
      null != $_detectExpansion$$ ? ($_detectExpansion$$.removeEventListener("scroll", $_scrollListener$$), $_detectContraction$$.removeEventListener("scroll", $_scrollListener$$), $div$$2$$.removeChild($_detectExpansion$$), $div$$2$$.removeChild($_detectContraction$$)) : $div$$2$$.detachEvent("onresize", $_resizeListener$$);
    };
    this.$init$ = function $this$$init$$($isFixup$$) {
      var $adjusted$$1$$ = $_checkSize$$($isFixup$$);
      $isFixup$$ && !$adjusted$$1$$ && null != $_detectExpansion$$.offsetParent && $_adjust$$($_oldWidth$$, $_oldHeight$$);
    };
  };
  $oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$ = "_ojResizeTracker";
  $oj$$3$$.$DomUtils$.$isValidIdentifier$ = function $$oj$$3$$$$DomUtils$$$isValidIdentifier$$($name$$70$$) {
    return/^[A-Za-z][0-9A-Z_a-z-]*$/.test($name$$70$$);
  };
  $oj$$3$$.$DomUtils$.$_collapsingListenerManager$ = function $$oj$$3$$$$DomUtils$$$_collapsingListenerManager$$($originalCallback$$, $timeout$$) {
    function $_callback$$() {
      $_lastArgs$$ = Array.prototype.slice.call(arguments);
      null == $_timerId$$ && ($_timerId$$ = window.setTimeout($_timerCallback$$, $timeout$$));
    }
    function $_timerCallback$$() {
      $originalCallback$$.apply(null, $_lastArgs$$);
      $_timerId$$ = null;
    }
    var $_lastArgs$$ = null, $_timerId$$ = null;
    this.$getCallback$ = function $this$$getCallback$$() {
      return $_callback$$;
    };
    this.stop = function $this$stop$() {
      null != $_timerId$$ && (window.clearTimeout($_timerId$$), $_timerId$$ = null);
    };
  };
  $oj$$3$$.$DomUtils$.$isTouchSupported$ = function $$oj$$3$$$$DomUtils$$$isTouchSupported$$() {
    return "ontouchstart" in window || 0 < navigator.msMaxTouchPoints || 0 < navigator.maxTouchPoints;
  };
  $oj$$3$$.$DomUtils$.$setInKoRemoveNode$ = function $$oj$$3$$$$DomUtils$$$setInKoRemoveNode$$($node$$14$$) {
    $oj$$3$$.$DomUtils$.$_koRemoveNode$ = $node$$14$$;
  };
  $oj$$3$$.$DomUtils$.unwrap = function $$oj$$3$$$$DomUtils$$unwrap$($locator$$2$$, $replaceLocator$$) {
    var $koRemoveNode$$ = $oj$$3$$.$DomUtils$.$_koRemoveNode$;
    $koRemoveNode$$ && $koRemoveNode$$ == $locator$$2$$.parent().get(0) || (1 < arguments.length ? $replaceLocator$$.replaceWith($locator$$2$$) : $locator$$2$$.unwrap());
  };
  $oj$$3$$.$DomUtils$.$isChromeEvent$ = function $$oj$$3$$$$DomUtils$$$isChromeEvent$$($JSCompiler_temp$$13_event$$35$$) {
    function $_isChromeEventWebkit$$($event$$38$$) {
      var $domTarget$$ = $event$$38$$.target, $target$$73$$ = $$$$3$$($domTarget$$), $pos$$ = $domTarget$$.getBoundingClientRect(), $sbw$$ = $oj$$3$$.$DomUtils$.$getScrollBarWidth$(), $isLTR$$ = "ltr" === $oj$$3$$.$DomUtils$.$getReadingDirection$();
      return $isLTR$$ && ("HTML" === $domTarget$$.nodeName || "visible" !== $target$$73$$.css("overflow-x")) && $event$$38$$.clientX > $pos$$.right - $sbw$$ ? !0 : !$isLTR$$ && "HTML" === $domTarget$$.nodeName && $event$$38$$.clientX > $pos$$.left - $sbw$$ ? !0 : !$isLTR$$ && "visible" !== $target$$73$$.css("overflow-x") && $event$$38$$.clientX < $pos$$.left + $sbw$$ ? !0 : ("HTML" === $domTarget$$.nodeName || "visible" !== $target$$73$$.css("overflow-y")) && $event$$38$$.clientY > $pos$$.bottom - 
      $sbw$$ ? !0 : !1;
    }
    if (!("clientX" in $JSCompiler_temp$$13_event$$35$$ && "clientY" in $JSCompiler_temp$$13_event$$35$$)) {
      return!1;
    }
    var $agentInfo$$1$$ = $oj$$3$$.$AgentUtils$.$getAgentInfo$();
    if ($oj$$3$$.$AgentUtils$.$OS$.$ANDROID$ === $agentInfo$$1$$.os || $oj$$3$$.$AgentUtils$.$OS$.$IOS$ === $agentInfo$$1$$.os) {
      $JSCompiler_temp$$13_event$$35$$ = !1;
    } else {
      var $JSCompiler_temp$$14$$;
      if ($oj$$3$$.$AgentUtils$.$ENGINE$.$GECKO$ === $agentInfo$$1$$.engine) {
        try {
          $JSCompiler_temp$$14$$ = $JSCompiler_temp$$13_event$$35$$.originalTarget.localName ? !1 : !0;
        } catch ($e$$inline_468$$) {
          $JSCompiler_temp$$14$$ = !0;
        }
      } else {
        $JSCompiler_temp$$14$$ = $oj$$3$$.$AgentUtils$.$ENGINE$.$WEBKIT$ === $agentInfo$$1$$.engine ? $_isChromeEventWebkit$$($JSCompiler_temp$$13_event$$35$$) : $oj$$3$$.$AgentUtils$.$BROWSER$.$IE$ === $agentInfo$$1$$.browser ? $_isChromeEventWebkit$$($JSCompiler_temp$$13_event$$35$$) : !1;
      }
      $JSCompiler_temp$$13_event$$35$$ = $JSCompiler_temp$$14$$;
    }
    return $JSCompiler_temp$$13_event$$35$$;
  };
  $oj$$3$$.$DomUtils$.$getScrollBarWidth$ = function $$oj$$3$$$$DomUtils$$$getScrollBarWidth$$() {
    var $scrollBarMeasure_scrollBarWidth$$ = $oj$$3$$.$DomUtils$.$_scrollBarWidth$;
    if ($$$$3$$.isNumeric($scrollBarMeasure_scrollBarWidth$$)) {
      return $scrollBarMeasure_scrollBarWidth$$;
    }
    $scrollBarMeasure_scrollBarWidth$$ = $$$$3$$("\x3cdiv /\x3e");
    $$$$3$$(document.body).append($scrollBarMeasure_scrollBarWidth$$);
    $scrollBarMeasure_scrollBarWidth$$.width(50).height(50).css({overflow:"scroll", visibility:"hidden", position:"absolute"});
    var $insideWidth_scrollBarMeasureContent$$ = $$$$3$$("\x3cdiv /\x3e");
    $insideWidth_scrollBarMeasureContent$$.height(1);
    $scrollBarMeasure_scrollBarWidth$$.append($insideWidth_scrollBarMeasureContent$$);
    var $insideWidth_scrollBarMeasureContent$$ = $insideWidth_scrollBarMeasureContent$$.width(), $outsideWitdh$$ = $scrollBarMeasure_scrollBarWidth$$.width();
    $scrollBarMeasure_scrollBarWidth$$.remove();
    return $scrollBarMeasure_scrollBarWidth$$ = $oj$$3$$.$DomUtils$.$_scrollBarWidth$ = $outsideWitdh$$ - $insideWidth_scrollBarMeasureContent$$;
  };
  $oj$$3$$.$DomUtils$.$getReadingDirection$ = function $$oj$$3$$$$DomUtils$$$getReadingDirection$$() {
    var $dir$$ = document.documentElement.getAttribute("dir");
    $dir$$ && ($dir$$ = $dir$$.toLowerCase());
    return "rtl" === $dir$$ ? "rtl" : "ltr";
  };
  $oj$$3$$.$DomUtils$.$getCSSLengthAsInt$ = function $$oj$$3$$$$DomUtils$$$getCSSLengthAsInt$$($cssLength_intLength$$) {
    return isNaN($cssLength_intLength$$) ? $cssLength_intLength$$ && 0 < $cssLength_intLength$$.length && "auto" != $cssLength_intLength$$ ? ($cssLength_intLength$$ = parseInt($cssLength_intLength$$, 10), isNaN($cssLength_intLength$$) && ($cssLength_intLength$$ = 0), $cssLength_intLength$$) : 0 : $cssLength_intLength$$;
  };
  $oj$$3$$.$DomUtils$.$getCSSLengthAsFloat$ = function $$oj$$3$$$$DomUtils$$$getCSSLengthAsFloat$$($cssLength$$1_floatLength$$) {
    return isNaN($cssLength$$1_floatLength$$) ? $cssLength$$1_floatLength$$ && 0 < $cssLength$$1_floatLength$$.length ? ($cssLength$$1_floatLength$$ = parseFloat($cssLength$$1_floatLength$$), isNaN($cssLength$$1_floatLength$$) && ($cssLength$$1_floatLength$$ = 0), $cssLength$$1_floatLength$$) : 0 : $cssLength$$1_floatLength$$;
  };
  $oj$$3$$.$DomUtils$.$isWithinViewport$ = function $$oj$$3$$$$DomUtils$$$isWithinViewport$$($element$$24_parent$$2$$) {
    function $isVisible$$($alignBox$$1$$, $containerBox$$) {
      if (-1 < ["hidden", "scroll", "auto"].indexOf($containerBox$$.overflowY)) {
        if (-1 > $alignBox$$1$$.bottom - $containerBox$$.top) {
          return!1;
        }
        var $scrollBarWidth$$1$$ = "auto" === $containerBox$$.overflowX || "scroll" === $containerBox$$.overflowX ? $oj$$3$$.$DomUtils$.$getScrollBarWidth$() : 0;
        if (1 > $containerBox$$.bottom - $scrollBarWidth$$1$$ - $alignBox$$1$$.top) {
          return!1;
        }
      }
      if (-1 < ["hidden", "scroll", "auto"].indexOf($containerBox$$.overflowX)) {
        $scrollBarWidth$$1$$ = "auto" !== $containerBox$$.overflowY && "scroll" !== $containerBox$$.overflowY || "rtl" !== $oj$$3$$.$DomUtils$.$getReadingDirection$() ? 0 : $oj$$3$$.$DomUtils$.$getScrollBarWidth$();
        if (-1 > $alignBox$$1$$.right - ($containerBox$$.left + $scrollBarWidth$$1$$)) {
          return!1;
        }
        $scrollBarWidth$$1$$ = "auto" !== $containerBox$$.overflowX && "scroll" !== $containerBox$$.overflowX || "ltr" !== $oj$$3$$.$DomUtils$.$getReadingDirection$() ? 0 : $oj$$3$$.$DomUtils$.$getScrollBarWidth$();
        if (-1 < $alignBox$$1$$.left - ($containerBox$$.right - $scrollBarWidth$$1$$)) {
          return!1;
        }
      }
      return!0;
    }
    function $hasOverflow$$($element$$25$$) {
      return "visible" !== $element$$25$$.css("overflow-x") || "visible" !== $element$$25$$.css("overflow-y");
    }
    function $getRect$$($element$$26$$) {
      var $domElement_rec$$ = $element$$26$$[0];
      return 1 === $domElement_rec$$.nodeType ? ($domElement_rec$$ = $$$$3$$.extend({}, $domElement_rec$$.getBoundingClientRect()), $domElement_rec$$.overflowX = $element$$26$$.css("overflow-x"), $domElement_rec$$.overflowY = $element$$26$$.css("overflow-y"), $domElement_rec$$) : $$$$3$$.isWindow($domElement_rec$$) ? $domElement_rec$$ = {width:$domElement_rec$$.innerWidth, height:$domElement_rec$$.innerHeight, top:0, bottom:$domElement_rec$$.innerHeight, left:0, right:$domElement_rec$$.innerWidth} : 
      {height:0, width:0};
    }
    function $isPositioned$$($element$$27$$) {
      return-1 < ["fixed", "absolute", "relative"].indexOf($element$$27$$.css("position")) && (0 < Math.abs($oj$$3$$.$DomUtils$.$getCSSLengthAsInt$($element$$27$$.css("top"))) || 0 < Math.abs($oj$$3$$.$DomUtils$.$getCSSLengthAsInt$($element$$27$$.css("bottom"))) || 0 < Math.abs($oj$$3$$.$DomUtils$.$getCSSLengthAsInt$($element$$27$$.css("left"))) || 0 < Math.abs($oj$$3$$.$DomUtils$.$getCSSLengthAsInt$($element$$27$$.css("right"))));
    }
    if (!$element$$24_parent$$2$$) {
      return!1;
    }
    if ($$$$3$$.isWindow($element$$24_parent$$2$$[0]) || $isPositioned$$($element$$24_parent$$2$$)) {
      return!0;
    }
    var $alignBox$$ = $getRect$$($element$$24_parent$$2$$), $isWithinViewPort$$ = !0;
    for ($element$$24_parent$$2$$ = $element$$24_parent$$2$$.parent();$isWithinViewPort$$ && $element$$24_parent$$2$$ && 0 < $element$$24_parent$$2$$.length && "BODY" !== $element$$24_parent$$2$$[0].nodeName && 1 === $element$$24_parent$$2$$[0].nodeType && !$isPositioned$$($element$$24_parent$$2$$);) {
      if ($hasOverflow$$($element$$24_parent$$2$$)) {
        var $parentBox$$ = $getRect$$($element$$24_parent$$2$$);
        0 < $parentBox$$.height && 0 < $parentBox$$.width && ($isWithinViewPort$$ = $isVisible$$($alignBox$$, $parentBox$$));
      }
      $element$$24_parent$$2$$ = $element$$24_parent$$2$$.parent();
    }
    return $isWithinViewPort$$;
  };
  $oj$$3$$.$DomUtils$.$_LOGICAL_PARENT_DATA$ = "oj-logical-parent";
  $oj$$3$$.$DomUtils$.$getLogicalParent$ = function $$oj$$3$$$$DomUtils$$$getLogicalParent$$($element$$28$$) {
    if ($element$$28$$) {
      return $element$$28$$.data($oj$$3$$.$DomUtils$.$_LOGICAL_PARENT_DATA$);
    }
  };
  $oj$$3$$.$DomUtils$.$setLogicalParent$ = function $$oj$$3$$$$DomUtils$$$setLogicalParent$$($element$$29$$, $parent$$3$$) {
    $element$$29$$ && (null === $parent$$3$$ ? $element$$29$$.removeData($oj$$3$$.$DomUtils$.$_LOGICAL_PARENT_DATA$) : $element$$29$$.data($oj$$3$$.$DomUtils$.$_LOGICAL_PARENT_DATA$, $parent$$3$$));
  };
  $oj$$3$$.$DomUtils$.$isLogicalAncestorOrSelf$ = function $$oj$$3$$$$DomUtils$$$isLogicalAncestorOrSelf$$($ancestorNode$$2$$, $node$$15$$) {
    $oj$$3$$.$Assert$.$assertDomElement$($ancestorNode$$2$$);
    $oj$$3$$.$Assert$.$assertDomElement$($node$$15$$);
    for (var $parentNode$$2$$ = $node$$15$$;$parentNode$$2$$;) {
      if ($parentNode$$2$$ == $ancestorNode$$2$$) {
        return!0;
      }
      var $logicalParent$$ = $oj$$3$$.$DomUtils$.$getLogicalParent$($$$$3$$($parentNode$$2$$)), $parentNode$$2$$ = $logicalParent$$ ? $logicalParent$$[0] : $parentNode$$2$$.parentNode;
    }
    return!1;
  };
  $oj$$3$$.$DomUtils$.$validateURL$ = function $$oj$$3$$$$DomUtils$$$validateURL$$($href_protocol$$1$$) {
    var $link$$ = document.createElement("a");
    $link$$.href = $href_protocol$$1$$;
    $href_protocol$$1$$ = $link$$.protocol;
    null != $href_protocol$$1$$ && ($href_protocol$$1$$ = $href_protocol$$1$$.toLowerCase());
    if (0 > ["http:", "https:"].indexOf($href_protocol$$1$$)) {
      throw $href_protocol$$1$$ + " is not a valid URL protocol";
    }
  };
  $oj$$3$$.$DomUtils$.$_supressNativeContextMenu$ = function $$oj$$3$$$$DomUtils$$$_supressNativeContextMenu$$() {
    $$$$3$$(document.body).hasClass("oj-hybrid") && document.body.addEventListener("contextmenu", function($event$$39$$) {
      $event$$39$$.preventDefault();
    }, !0);
  };
  $oj$$3$$.$DomUtils$.$_supressNativeContextMenu$();
  $oj$$3$$.$FocusUtils$ = {};
  $oj$$3$$.$FocusUtils$.$_TABBABLE$ = ":tabbable";
  $oj$$3$$.$FocusUtils$.$containsFocus$ = function $$oj$$3$$$$FocusUtils$$$containsFocus$$($element$$30$$) {
    var $activeElem$$ = document.activeElement;
    return $element$$30$$ && $activeElem$$ ? $oj$$3$$.$DomUtils$.$isAncestorOrSelf$($element$$30$$, $activeElem$$) : !1;
  };
  $oj$$3$$.$FocusUtils$.$focusElement$ = function $$oj$$3$$$$FocusUtils$$$focusElement$$($element$$31$$) {
    $element$$31$$.focus();
  };
  $oj$$3$$.$FocusUtils$.$focusFirstTabStop$ = function $$oj$$3$$$$FocusUtils$$$focusFirstTabStop$$($element$$32_focusElement$$) {
    ($element$$32_focusElement$$ = $oj$$3$$.$FocusUtils$.$getFirstTabStop$($element$$32_focusElement$$)) && $oj$$3$$.$FocusUtils$.$focusElement$($element$$32_focusElement$$);
  };
  $oj$$3$$.$FocusUtils$.$getFirstTabStop$ = function $$oj$$3$$$$FocusUtils$$$getFirstTabStop$$($element$$33_jqFocusables$$) {
    var $jqElem$$ = $$$$3$$($element$$33_jqFocusables$$);
    return $jqElem$$.is($oj$$3$$.$FocusUtils$.$_TABBABLE$) ? $element$$33_jqFocusables$$ : ($element$$33_jqFocusables$$ = $jqElem$$.find($oj$$3$$.$FocusUtils$.$_TABBABLE$)) && 0 < $element$$33_jqFocusables$$.length ? $element$$33_jqFocusables$$[0] : null;
  };
  $$$$3$$(document).ready(function() {
    var $div$$inline_470$$ = $$$$3$$("\x3cdiv style\x3d'border: 1px solid;border-color:red green;position: absolute;top: -999px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs\x3d);'\x3e\x3c/div\x3e"), $bki$$inline_471$$;
    $div$$inline_470$$.appendTo("body");
    $bki$$inline_471$$ = $div$$inline_470$$.css("backgroundImage");
    $div$$inline_470$$.css("borderTopColor") != $div$$inline_470$$.css("borderRightColor") && (null == $bki$$inline_471$$ || "none" != $bki$$inline_471$$ && "url (invalid-url:)" != $bki$$inline_471$$) || $$$$3$$("body").addClass("oj-hicontrast");
    $div$$inline_470$$.remove();
  });
  $$$$3$$(document).ready(function() {
    "Microsoft Internet Explorer" == navigator.appName && $$$$3$$("html").addClass("oj-slow-borderradius oj-slow-cssgradients oj-slow-boxshadow");
  });
  $oj$$3$$.$Test$ = {};
  $goog$exportPath_$$("Test", $oj$$3$$.$Test$, $oj$$3$$);
  $oj$$3$$.$Test$.ready = !1;
  $goog$exportPath_$$("Test.ready", $oj$$3$$.$Test$.ready, $oj$$3$$);
  $oj$$3$$.$Test$.$domNodeForLocator$ = function $$oj$$3$$$$Test$$$domNodeForLocator$$($element$$34_locator$$3_widgetConst$$) {
    var $locObj$$ = $element$$34_locator$$3_widgetConst$$;
    if ($oj$$3$$.$StringUtils$.$isString$($element$$34_locator$$3_widgetConst$$)) {
      try {
        $locObj$$ = $$$$3$$.parseJSON($element$$34_locator$$3_widgetConst$$);
      } catch ($e$$30$$) {
        return null;
      }
    }
    return $locObj$$ && $locObj$$.element && ($element$$34_locator$$3_widgetConst$$ = $$$$3$$($locObj$$.element)) ? ($element$$34_locator$$3_widgetConst$$ = $oj$$3$$.Components.$getWidgetConstructor$($element$$34_locator$$3_widgetConst$$[0], $locObj$$.component), delete $locObj$$.element, $element$$34_locator$$3_widgetConst$$("getNodeBySubId", $locObj$$)) : null;
  };
  $goog$exportPath_$$("Test.domNodeForLocator", $oj$$3$$.$Test$.$domNodeForLocator$, $oj$$3$$);
  $oj$$3$$.$Test$.$getOpenPopupCount$ = function $$oj$$3$$$$Test$$$getOpenPopupCount$$() {
    return $oj$$3$$.$ZOrderUtils$.$getOpenPopupCount$();
  };
  $goog$exportPath_$$("Test.getOpenPopupCount", $oj$$3$$.$Test$.$getOpenPopupCount$, $oj$$3$$);
  $oj$$3$$.$Test$.$findOpenPopups$ = function $$oj$$3$$$$Test$$$findOpenPopups$$() {
    return $oj$$3$$.$ZOrderUtils$.$findOpenPopups$();
  };
  $goog$exportPath_$$("Test.findOpenPopups", $oj$$3$$.$Test$.$findOpenPopups$, $oj$$3$$);
  $oj$$3$$.$Test$.$compareStackingContexts$ = function $$oj$$3$$$$Test$$$compareStackingContexts$$($el1$$, $el2$$) {
    return $oj$$3$$.$ZOrderUtils$.$compareStackingContexts$($el1$$, $el2$$);
  };
  $goog$exportPath_$$("Test.compareStackingContexts", $oj$$3$$.$Test$.$compareStackingContexts$, $oj$$3$$);
});
