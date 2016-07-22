/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$65$$, $$$$59$$) {
  $oj$$65$$.$__registerWidget$("oj._ojRadioCheckbox", $$$$59$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:null, checked:null, type:null}, label:function() {
    void 0 === this.$$label$ && (this.$$label$ = this.$_getLabelsForElement$());
    return this.$$label$;
  }, refresh:function() {
    this._super();
    this.$_setup$();
  }, refreshDisabled:function() {
    this.$_renderDisabled$();
  }, widget:function() {
    return this.$uiRadioCheckbox$;
  }, $_InitOptions$:function($originalDefaults$$15$$, $constructorOptions$$17$$) {
    var $checkedFromDom_disabledFromDom$$;
    this._super($originalDefaults$$15$$, $constructorOptions$$17$$);
    "checked" in $constructorOptions$$17$$ || (this.$initCheckedFromDom$ = !0, $checkedFromDom_disabledFromDom$$ = !!this.element.prop("checked"), this.option("checked", $checkedFromDom_disabledFromDom$$, {_context:{$internalSet$:!0}}));
    if ("boolean" !== typeof this.options.checked) {
      throw Error("checked option must be a boolean");
    }
    "disabled" in $constructorOptions$$17$$ || ($checkedFromDom_disabledFromDom$$ = !!this.element.prop("disabled"), this.option("disabled", $checkedFromDom_disabledFromDom$$, {_context:{$internalSet$:!0}}));
    if ("boolean" !== typeof this.options.disabled) {
      throw Error("disabled option must be a boolean");
    }
    "type" in $constructorOptions$$17$$ || this.option("type", this.element.prop("type"), {_context:{$internalSet$:!0}});
  }, _ComponentCreate:function() {
    this._super();
    var $type$$105$$ = this.options.type;
    "checkbox" == $type$$105$$ ? (this.$uiRadioCheckbox$ = this.element.addClass("oj-checkbox oj-component"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-checkbox-label")) : "radio" == $type$$105$$ && (this.$uiRadioCheckbox$ = this.element.addClass("oj-radio oj-component"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-radio-label"));
    this.$$choiceRow$ = this.$_getChoiceRow$();
    this._focusable(this.element);
    $$$$59$$.each(this.$$label$, function() {
      $$$$59$$(this.childNodes[0]).wrap("\x3cspan class\x3d'oj-radiocheckbox-label-text'\x3e\x3c/span\x3e");
      var $iElem$$ = document.createElement("span");
      $iElem$$.setAttribute("class", "oj-radiocheckbox-icon");
      this.appendChild($iElem$$);
    });
    this.$_setup$();
  }, $_SaveAttributes$:function($element$$163$$) {
    this.$_savedClasses$ = $element$$163$$.attr("class");
  }, $_RestoreAttributes$:function() {
    this.$_savedClasses$ ? this.element.attr("class", this.$_savedClasses$) : this.element.removeAttr("class");
  }, $_setup$:function() {
    this.$_renderDisabled$();
    this.$initCheckedFromDom$ || this.$_setCheckedOnDom$(this.options.checked);
    this.element.toggleClass("oj-selected", this.options.checked);
    this.$$label$.toggleClass("oj-selected", this.options.checked);
  }, $_setCheckedOnDom$:function($checked$$4$$) {
    this.element.prop("checked", !!$checked$$4$$);
  }, $_renderDisabled$:function() {
    this.$_IsEffectivelyDisabled$() ? (this.element.prop("disabled", !0).removeAttr("aria-disabled").removeClass("oj-enabled").addClass("oj-disabled"), this.$$label$.removeClass("oj-enabled").addClass("oj-disabled"), this.$$choiceRow$ && this.$$choiceRow$.removeClass("oj-enabled").addClass("oj-disabled")) : (this.element.prop("disabled", !1).removeAttr("aria-disabled").removeClass("oj-disabled").addClass("oj-enabled"), this.$$label$.addClass("oj-enabled").removeClass("oj-disabled"), this.$$choiceRow$ && 
    this.$$choiceRow$.addClass("oj-enabled").removeClass("oj-disabled"));
  }, _setOption:function($key$$178$$, $value$$309$$) {
    this._superApply(arguments);
    "disabled" === $key$$178$$ && ($value$$309$$ = !!$value$$309$$, this.$_renderDisabled$($value$$309$$));
    "checked" === $key$$178$$ && (this.$_setCheckedOnDom$($value$$309$$), this.element.toggleClass("oj-selected", $value$$309$$), this.$$label$.toggleClass("oj-selected", $value$$309$$), this.$$choiceRow$ && this.$$choiceRow$.toggleClass("oj-selected", $value$$309$$));
  }, $_getLabelsForElement$:function() {
    var $labelClosestParent$$ = this.element.closest("label"), $labelForQuery$$ = "label[for\x3d'" + this.element.prop("id") + "']";
    return $labelClosestParent$$.add($$$$59$$($labelForQuery$$));
  }, $_getChoiceRow$:function() {
    var $choiceRow$$;
    if (this.$$label$ && ($choiceRow$$ = this.$$label$.parent()) && ($choiceRow$$.hasClass("oj-choice-row") || $choiceRow$$.hasClass("oj-choice-row-inline"))) {
      return $choiceRow$$;
    }
    $oj$$65$$.$Logger$.warn("The radioset/checkboxset's input and label dom should be wrapped in a dom node with class 'oj-choice-row' or 'oj-choice-row-inline'");
    return null;
  }, getNodeBySubId:function($locator$$51_subId$$55$$) {
    var $node$$119$$ = this._super($locator$$51_subId$$55$$);
    $node$$119$$ || ($locator$$51_subId$$55$$ = $locator$$51_subId$$55$$.subId, "oj-radiocheckbox-input" === $locator$$51_subId$$55$$ && ($node$$119$$ = this.element[0]), "oj-radiocheckbox-label" === $locator$$51_subId$$55$$ && ($node$$119$$ = this.label()[0]));
    return $node$$119$$ || null;
  }, _destroy:function() {
    var $ret$$54$$ = this._super(), $type$$106$$ = this.options.type;
    "checkbox" == $type$$106$$ ? this.$$label$.removeClass("oj-enabled oj-disabled oj-selected oj-checkbox-label") : "radio" == $type$$106$$ && this.$$label$.removeClass("oj-enabled oj-disabled oj-selected oj-radio-label");
    this.$$choiceRow$ && this.$$choiceRow$.removeClass("oj-enabled oj-disabled oj-selected");
    $$$$59$$.each(this.$$label$, function() {
      this.removeChild(this.getElementsByClassName("oj-radiocheckbox-icon")[0]);
      var $text$$19$$ = this.getElementsByClassName("oj-radiocheckbox-label-text");
      void 0 !== $text$$19$$ && $$$$59$$($text$$19$$[0].childNodes[0]).unwrap();
    });
    return $ret$$54$$;
  }});
});
