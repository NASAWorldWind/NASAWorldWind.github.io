/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$28$$, $$$$27$$) {
  (function() {
    $oj$$28$$.$__registerWidget$("oj.ojCheckboxset", $$$$27$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:!1, value:void 0}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$uiCheckboxset$;
    }, $_InitOptions$:function($originalDefaults$$12$$, $constructorOptions$$14$$) {
      var $checkedValues$$ = [], $selectedCheckbox$$;
      this._super($originalDefaults$$12$$, $constructorOptions$$14$$);
      $oj$$28$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"title"}, {$attribute$:"placeholder"}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}], $constructorOptions$$14$$, this);
      this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$();
      void 0 === $constructorOptions$$14$$.value && ($selectedCheckbox$$ = this.$$checkboxes$.filter(":checked"), 0 < $selectedCheckbox$$.length && ($selectedCheckbox$$.each(function() {
        $checkedValues$$.push($$$$27$$(this).val());
      }), this.option("value", $checkedValues$$, {_context:{$writeback$:!0, $internalSet$:!0}})), void 0 === this.options.value && (this.options.value = []));
    }, _ComponentCreate:function() {
      this._super();
      if (this.element.is("fieldset")) {
        throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");
      }
      this.$$checkboxes$._ojRadioCheckbox();
      this.$uiCheckboxset$ = this.element.addClass("oj-checkboxset oj-component").attr("role", "group").wrapInner("\x3cdiv class\x3d'oj-checkboxset-wrapper'\x3e\x3c/div\x3e");
      this._on(this.$_events$);
      this.$_setup$();
    }, $_ResetComponentState$:function() {
      this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$();
      this.$$checkboxes$.filter(".oj-checkbox").each(function() {
        var $disabledValue$$ = void 0 !== $$$$27$$(this).attr("disabled") ? !!$$$$27$$(this).prop("disabled") : !1;
        $$$$27$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$);
      });
      this.$$checkboxes$.not(".oj-checkbox")._ojRadioCheckbox();
    }, Focus:function() {
      this.$_GetContentElement$().first().focus();
      return!0;
    }, $_SetDisabledDom$:function() {
    }, $_findCheckboxesWithMatchingName$:function() {
      var $allcheckboxes_first$$6_name$$123$$ = this.element.find("input[type\x3dcheckbox]:first");
      0 === $allcheckboxes_first$$6_name$$123$$.length && $oj$$28$$.$Logger$.warn("Could not find any input type\x3dcheckbox within this element");
      $allcheckboxes_first$$6_name$$123$$ = $allcheckboxes_first$$6_name$$123$$.attr("name");
      return void 0 === $allcheckboxes_first$$6_name$$123$$ ? ($allcheckboxes_first$$6_name$$123$$ = this.element.find("input[type\x3dcheckbox]"), $allcheckboxes_first$$6_name$$123$$.not("[name]")) : this.element.find("input[type\x3dcheckbox][name\x3d" + $allcheckboxes_first$$6_name$$123$$ + "]");
    }, $_NotifyContextMenuGesture$:function($launcher$$8_menu$$14$$, $event$$382$$, $eventType$$43$$) {
      $launcher$$8_menu$$14$$ = this.element.find("input[type\x3dcheckbox]:tabbable").first();
      this.$_OpenContextMenu$($event$$382$$, $eventType$$43$$, {launcher:$launcher$$8_menu$$14$$});
    }, _GetMessagingLauncherElement:function() {
      var $inputElem$$ = this.$_GetContentElement$(), $renderInputAs$$ = $oj$$28$$.$ThemeUtils$.$getOptionDefaultMap$("radioset").renderInputAs;
      return $renderInputAs$$ && "html" !== $renderInputAs$$ ? this.widget() : $inputElem$$;
    }, $_setup$:function() {
      this.$_propagateDisabled$(this.options.disabled);
    }, $_events$:{change:function($event$$383$$) {
      this.$_HandleChangeEvent$($event$$383$$);
    }}, $_HandleChangeEvent$:function($event$$384$$) {
      var $submittedValue$$4$$ = this.$_GetDisplayValue$();
      this.$_SetValue$($submittedValue$$4$$, $event$$384$$, $_sValueChangeCheckFalse$$);
    }, $_GetDisplayValue$:function() {
      return this.$_GetElementValue$();
    }, $_SetDisplayValue$:function($checkedBoxes$$) {
      var $checkboxWithMatchingValue_displayValue$$10_valueFilter$$;
      this.$$checkboxes$._ojRadioCheckbox("option", "checked", !1);
      if (null != $checkedBoxes$$) {
        for (var $i$$322$$ = 0;$i$$322$$ < $checkedBoxes$$.length;$i$$322$$++) {
          $checkboxWithMatchingValue_displayValue$$10_valueFilter$$ = $checkedBoxes$$[$i$$322$$], $checkboxWithMatchingValue_displayValue$$10_valueFilter$$ = "[value\x3d'" + $checkboxWithMatchingValue_displayValue$$10_valueFilter$$ + "']", $checkboxWithMatchingValue_displayValue$$10_valueFilter$$ = this.$$checkboxes$.filter($checkboxWithMatchingValue_displayValue$$10_valueFilter$$), void 0 !== $checkboxWithMatchingValue_displayValue$$10_valueFilter$$ && 0 < $checkboxWithMatchingValue_displayValue$$10_valueFilter$$.length && 
          ($checkboxWithMatchingValue_displayValue$$10_valueFilter$$.prop("checked") || $checkboxWithMatchingValue_displayValue$$10_valueFilter$$._ojRadioCheckbox("option", "checked", !0));
        }
      }
    }, $_GetElementValue$:function() {
      var $checkedValues$$1$$ = [], $selectedCheckbox$$1$$ = this.$$checkboxes$.filter(":checked");
      if (0 === $selectedCheckbox$$1$$.length) {
        return[];
      }
      $selectedCheckbox$$1$$.each(function() {
        $checkedValues$$1$$.push($$$$27$$(this).val());
      });
      return $checkedValues$$1$$;
    }, _GetDefaultStyleClass:function() {
      return "oj-checkboxset";
    }, $_GetContentElement$:function() {
      return this.$_findCheckboxesWithMatchingName$();
    }, $_RefreshAriaRequired$:function() {
    }, $_AriaRequiredUnsupported$:function() {
      return!0;
    }, $_propagateDisabled$:function($disabled$$8$$) {
      $disabled$$8$$ = !!$disabled$$8$$;
      this.$$checkboxes$.each(function() {
        $$$$27$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($disabled$$8$$);
      });
      this.$$checkboxes$._ojRadioCheckbox("refreshDisabled");
    }, _setOption:function($key$$140$$, $value$$264$$, $flags$$36$$) {
      this._super($key$$140$$, $value$$264$$, $flags$$36$$);
      "disabled" === $key$$140$$ && this.$_propagateDisabled$($value$$264$$);
    }, getNodeBySubId:function($locator$$34_subId$$39$$) {
      var $node$$83$$ = this._super($locator$$34_subId$$39$$);
      return $node$$83$$ || ($locator$$34_subId$$39$$ = $locator$$34_subId$$39$$.subId, "oj-checkboxset-inputs" !== $locator$$34_subId$$39$$) ? $node$$83$$ || null : this.$$checkboxes$.get();
    }, _destroy:function() {
      var $ret$$40$$ = this._super(), $wrapperDom$$ = this.element[0].firstChild;
      this.$$checkboxes$ && this.$$checkboxes$._ojRadioCheckbox("destroy");
      $$$$27$$($wrapperDom$$).contents().unwrap();
      return $ret$$40$$;
    }});
    var $_sValueChangeCheckFalse$$ = {$doValueChangeCheck$:!1};
  })();
});
