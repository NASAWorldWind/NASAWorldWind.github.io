/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$66$$, $$$$60$$) {
  (function() {
    $oj$$66$$.$__registerWidget$("oj.ojRadioset", $$$$60$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:!1, value:void 0}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$uiRadioset$;
    }, $_InitOptions$:function($originalDefaults$$16$$, $constructorOptions$$18$$) {
      var $checkedRadio_domValue$$2$$;
      this._super($originalDefaults$$16$$, $constructorOptions$$18$$);
      $oj$$66$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"placeholder"}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title"}], $constructorOptions$$18$$, this);
      this.$$radios$ = this.$_findRadiosWithMatchingName$();
      void 0 === $constructorOptions$$18$$.value && ($checkedRadio_domValue$$2$$ = this.$$radios$.filter(":checked"), $checkedRadio_domValue$$2$$ = 0 === $checkedRadio_domValue$$2$$.length ? void 0 : $checkedRadio_domValue$$2$$.val(), void 0 !== $checkedRadio_domValue$$2$$ && this.option("value", $checkedRadio_domValue$$2$$, {_context:{$writeback$:!0, $internalSet$:!0}}), void 0 === this.options.value && (this.options.value = null));
    }, _ComponentCreate:function() {
      var $element$$164$$ = this.element;
      this._super();
      if ($element$$164$$.is("fieldset")) {
        throw Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");
      }
      this.$$radios$._ojRadioCheckbox();
      this.$uiRadioset$ = $element$$164$$.addClass("oj-radioset oj-component").attr("role", "radiogroup").wrapInner("\x3cdiv class\x3d'oj-radioset-wrapper'\x3e\x3c/div\x3e");
      this._on(this.$_events$);
    }, $_AfterCreate$:function() {
      this._super();
      this.$_setup$();
    }, $_ResetComponentState$:function() {
      this.$$radios$ = this.$_findRadiosWithMatchingName$();
      this.$$radios$.filter(".oj-radio").each(function() {
        var $disabledValue$$1$$ = void 0 !== $$$$60$$(this).attr("disabled") ? !!$$$$60$$(this).prop("disabled") : !1;
        $$$$60$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$1$$);
      });
      this.$$radios$.not(".oj-radio")._ojRadioCheckbox();
    }, Focus:function() {
      this.$_GetContentElement$().first().focus();
      return!0;
    }, $_SetDisabledDom$:function() {
    }, $_findRadiosWithMatchingName$:function() {
      var $allradios_element$$165$$ = this.element, $first$$11_name$$146$$ = $allradios_element$$165$$.find("input[type\x3dradio]:first");
      0 === $first$$11_name$$146$$.length && $oj$$66$$.$Logger$.warn("Could not find any input type\x3dradio within this element");
      $first$$11_name$$146$$ = $first$$11_name$$146$$.attr("name");
      return void 0 === $first$$11_name$$146$$ ? ($allradios_element$$165$$ = $allradios_element$$165$$.find("input[type\x3dradio]"), $allradios_element$$165$$.not("[name]")) : $allradios_element$$165$$.find("input[type\x3dradio][name\x3d" + $first$$11_name$$146$$ + "]");
    }, $_NotifyContextMenuGesture$:function($launcher$$25_menu$$24_radios$$, $event$$604$$, $eventType$$54$$) {
      $launcher$$25_menu$$24_radios$$ = this.element.find("input[type\x3dradio]");
      var $checked$$5$$ = $launcher$$25_menu$$24_radios$$.filter(":checked");
      $launcher$$25_menu$$24_radios$$ = $checked$$5$$.length ? $checked$$5$$ : $launcher$$25_menu$$24_radios$$.filter(":enabled").first();
      this.$_OpenContextMenu$($event$$604$$, $eventType$$54$$, {launcher:$launcher$$25_menu$$24_radios$$});
    }, _GetMessagingLauncherElement:function() {
      var $inputElem$$1$$ = this.$_GetContentElement$(), $renderInputAs$$1$$ = $oj$$66$$.$ThemeUtils$.$getOptionDefaultMap$("radioset").renderInputAs;
      return $renderInputAs$$1$$ && "html" !== $renderInputAs$$1$$ ? this.widget() : $inputElem$$1$$;
    }, $_setup$:function() {
      this.$_propagateDisabled$(this.options.disabled);
    }, $_events$:{change:function($event$$605$$) {
      this.$_HandleChangeEvent$($event$$605$$);
    }}, $_HandleChangeEvent$:function($event$$606$$) {
      var $submittedValue$$5$$ = this.$_GetDisplayValue$();
      this.$_SetValue$($submittedValue$$5$$, $event$$606$$, $_sValueChangeCheckFalse$$1$$);
    }, $_GetDisplayValue$:function() {
      return this.$_GetElementValue$();
    }, $_SetDisplayValue$:function($displayValue$$12_radioWithMatchingValue$$) {
      var $notMatchingRadios_valueFilter$$1$$;
      $notMatchingRadios_valueFilter$$1$$ = "[value\x3d'" + $displayValue$$12_radioWithMatchingValue$$ + "']";
      void 0 !== this.$$radios$ && ($displayValue$$12_radioWithMatchingValue$$ = this.$$radios$.filter($notMatchingRadios_valueFilter$$1$$), void 0 !== $displayValue$$12_radioWithMatchingValue$$ && 0 < $displayValue$$12_radioWithMatchingValue$$.length ? ($notMatchingRadios_valueFilter$$1$$ = this.$$radios$.not($notMatchingRadios_valueFilter$$1$$), $displayValue$$12_radioWithMatchingValue$$._ojRadioCheckbox("option", "checked", !0), void 0 !== $notMatchingRadios_valueFilter$$1$$ && 0 < $notMatchingRadios_valueFilter$$1$$.length && 
      $notMatchingRadios_valueFilter$$1$$._ojRadioCheckbox("option", "checked", !1)) : this.$$radios$._ojRadioCheckbox("option", "checked", !1));
    }, $_GetElementValue$:function() {
      var $checkedRadio$$1$$ = this.$$radios$.filter(":checked");
      return 0 === $checkedRadio$$1$$.length ? null : $checkedRadio$$1$$.val();
    }, _GetDefaultStyleClass:function() {
      return "oj-radioset";
    }, $_GetContentElement$:function() {
      return this.$_findRadiosWithMatchingName$();
    }, $_RefreshAriaRequired$:function() {
    }, $_AriaRequiredUnsupported$:function() {
      return!0;
    }, $_propagateDisabled$:function($disabled$$9$$) {
      $disabled$$9$$ = !!$disabled$$9$$;
      this.$$radios$.each(function() {
        $$$$60$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($disabled$$9$$);
      });
      this.$$radios$._ojRadioCheckbox("refreshDisabled");
    }, _setOption:function($key$$179$$, $value$$312$$) {
      this._superApply(arguments);
      "disabled" === $key$$179$$ && this.$_propagateDisabled$($value$$312$$);
    }, getNodeBySubId:function($locator$$52_subId$$56$$) {
      var $node$$121$$ = this._super($locator$$52_subId$$56$$);
      $node$$121$$ || ($locator$$52_subId$$56$$ = $locator$$52_subId$$56$$.subId, "oj-radioset-inputs" === $locator$$52_subId$$56$$ && ($node$$121$$ = this.$$radios$.get()));
      return $node$$121$$ || null;
    }, _destroy:function() {
      var $ret$$55$$ = this._super(), $wrapperDom$$1$$ = this.element[0].firstChild;
      this.$$radios$ && this.$$radios$._ojRadioCheckbox("destroy");
      $$$$60$$($wrapperDom$$1$$).contents().unwrap();
      return $ret$$55$$;
    }});
    var $_sValueChangeCheckFalse$$1$$ = {$doValueChangeCheck$:!1};
  })();
});
