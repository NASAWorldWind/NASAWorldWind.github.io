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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$70$$) {
  (function() {
    $oj$$70$$.$__registerWidget$("oj.ojSwitch", $.oj.editableValue, {version:"1.1.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:!1, readOnly:!1, required:!1, title:"", value:!1}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$_element2$;
    }, getNodeBySubId:function($locator$$56_subId$$60$$) {
      var $node$$125$$, $rootElement$$19$$ = this.widget();
      $node$$125$$ = null == $locator$$56_subId$$60$$ || null == $locator$$56_subId$$60$$.subId ? $rootElement$$19$$ : null;
      return $node$$125$$ || ($locator$$56_subId$$60$$ = $locator$$56_subId$$60$$.subId, "oj-switch-thumb" !== $locator$$56_subId$$60$$ && "oj-switch-track" !== $locator$$56_subId$$60$$) ? $node$$125$$ || null : $rootElement$$19$$.find("." + $locator$$56_subId$$60$$)[0];
    }, getSubIdByNode:function($node$$126$$) {
      var $originalId$$ = $(this.element).attr("id"), $nodeId$$1$$, $result$$82$$ = null;
      null != $node$$126$$ && ($($node$$126$$).hasClass("oj-switch-track") || $($node$$126$$).hasClass("oj-switch-thumb")) && ($nodeId$$1$$ = $($node$$126$$).parents("div.oj-switch").find("input.oj-component-initnode").attr("id"), $originalId$$ === $nodeId$$1$$ && $($node$$126$$).hasClass("oj-switch-track") ? $result$$82$$ = {subId:"oj-switch-track"} : $originalId$$ === $nodeId$$1$$ && $($node$$126$$).hasClass("oj-switch-thumb") && ($result$$82$$ = {subId:"oj-switch-thumb"}));
      return $result$$82$$;
    }, $_BUNDLE_KEY$:{$_SWITCH_OFF$:"SwitchOFF", $_SWITCH_ON$:"SwitchON"}, $_InitOptions$:function($originalDefaults$$18$$, $constructorOptions$$20$$) {
      var $val$$69$$;
      this._super($originalDefaults$$18$$, $constructorOptions$$20$$);
      $oj$$70$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"readonly", option:"readOnly", $validateOption$:!0}, {$attribute$:"required", $validateOption$:!1, $coerceDomValue$:function() {
        return!1;
      }}, {$attribute$:"checked", option:"value", $validateOption$:!1, $coerceDomValue$:function($domValue$$3$$) {
        return $domValue$$3$$ ? !0 : !1;
      }}, {$attribute$:"title"}], $constructorOptions$$20$$, this);
      $val$$69$$ = this.option("value");
      this.option({required:!1, value:!!$val$$69$$}, {_context:{$writeback$:!0, $internalSet$:!0}});
    }, _ComponentCreate:function() {
      this._super();
      if (!this.element.is("input")) {
        throw Error("ojSwitch can be bound to INPUT only.");
      }
      this.$_inputElementOriginalDisplay$ = this.element.css("display");
      this.element.css("display", "none").attr("type", "checkbox").attr("checked", this.option("value")).attr("tabindex", "-1").attr("disabled", this.option("disabled")).attr("readonly", this.option("readOnly"));
      this.$_element2$ = this.element.wrap("\x3cdiv\x3e\x3c/div\x3e").parent().addClass("oj-switch oj-component oj-form-control");
      this.$_element2$.append("\x3cdiv class\x3d'oj-switch-container'\x3e\x3cdiv class\x3d'oj-switch-track'\x3e\x3cdiv class\x3d'oj-switch-thumb' tabIndex\x3d'0'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
      this.$switchThumb$ = this.$_element2$.find(".oj-switch-thumb");
      this.$switchThumb$.attr("role", "switch checkbox");
      this.$_setAriaLabel$(this.element, this.$switchThumb$);
      this.$_setup$();
    }, $_setAriaLabel$:function($elem$$162$$, $target$$104$$) {
      var $id$$56_switchLabel$$ = $elem$$162$$.prop("id"), $ariaLabelledBy$$ = $elem$$162$$.attr("aria-labelledby"), $ariaLabel$$ = $elem$$162$$.attr("aria-label");
      $ariaLabel$$ ? $target$$104$$.attr("aria-label", $ariaLabel$$) : $ariaLabelledBy$$ ? $target$$104$$.attr("aria-labelledby", $ariaLabelledBy$$) : $id$$56_switchLabel$$ && ($id$$56_switchLabel$$ = $("label[for\x3d'" + $id$$56_switchLabel$$ + "']")) && ($id$$56_switchLabel$$.attr("id") ? $target$$104$$.attr("aria-labelledby", $id$$56_switchLabel$$.attr("id")) : $target$$104$$.attr("aria-label", $($id$$56_switchLabel$$).text()));
    }, $_setup$:function() {
      var $rootElement$$20$$ = $(this.widget()), $thumbTitle$$ = this.option("title");
      this.$_setupEvents$();
      if (void 0 !== $rootElement$$20$$) {
        this.element.attr("checked", this.option("value"));
        $rootElement$$20$$.removeClass("oj-disabled oj-read-only oj-selected oj-hover oj-active");
        $(this.$switchThumb$).attr("tabindex", "0");
        $(this.$switchThumb$).html("");
        if (this.option("disabled") || this.option("readOnly")) {
          this.option("disabled") ? $rootElement$$20$$.addClass("oj-disabled") : ($rootElement$$20$$.addClass("oj-read-only"), $(this.$switchThumb$).html(this.$_setReadOnlyValue$())), $(this.$switchThumb$).removeAttr("tabindex");
        }
        this.option("value") && $rootElement$$20$$.addClass("oj-selected");
        void 0 !== $thumbTitle$$ && $(this.$switchThumb$).attr("title", $thumbTitle$$);
        $(this.$switchThumb$).attr("aria-checked", this.option("value"));
        $(this.$switchThumb$).removeAttr("aria-disabled");
        $rootElement$$20$$.removeAttr("aria-disabled");
        this.$_CanSetValue$() || $(this.$switchThumb$).attr("aria-disabled", "true");
      }
    }, $_setReadOnlyValue$:function() {
      var $strReturn$$ = this.$_BUNDLE_KEY$.$_SWITCH_OFF$;
      this.option("value") && ($strReturn$$ = this.$_BUNDLE_KEY$.$_SWITCH_ON$);
      return this.$getTranslatedString$($strReturn$$);
    }, $_setupEvents$:function() {
      this._off(this.$_element2$, "keydown keyup mousedown mouseup mouseleave mouseenter touchstart");
      this.$_CanSetValue$() && (this._on(this.$_element2$, this.$_switchEvents$), this._hoverable(this.$_element2$));
      this._focusable(this.$_element2$);
    }, $_switchEvents$:{keydown:function($event$$627$$) {
      if ($event$$627$$.which === $.ui.keyCode.ENTER || $event$$627$$.which === $.ui.keyCode.SPACE) {
        $($event$$627$$.currentTarget).addClass("oj-active"), $event$$627$$.preventDefault();
      }
    }, keyup:function($event$$628$$) {
      $event$$628$$.which !== $.ui.keyCode.ENTER && $event$$628$$.which !== $.ui.keyCode.SPACE || this.$_SetValue$(!this.option("value"), $event$$628$$);
    }, mousedown:function($event$$629$$) {
      1 === $event$$629$$.which && $($event$$629$$.currentTarget).addClass("oj-active");
    }, mouseup:function($event$$630$$) {
      1 === $event$$630$$.which && this.$_SetValue$(!this.option("value"), $event$$630$$);
    }, mouseleave:function($event$$631$$) {
      1 === $event$$631$$.which && $($event$$631$$.currentTarget).removeClass("oj-active");
    }, mouseenter:function($event$$632$$) {
      1 === $event$$632$$.which && $($event$$632$$.currentTarget).addClass("oj-active");
    }, $touchstart$:function($event$$633$$) {
      this.$_SetValue$(!this.option("value"), $event$$633$$);
      $event$$633$$.preventDefault();
    }}, _GetDefaultStyleClass:function() {
      return "oj-switch";
    }, $_setSwitchRole$:function() {
      return "switch checkbox";
    }, _destroy:function() {
      this.$_element2$.find(".oj-switch-track").remove();
      $oj$$70$$.$DomUtils$.unwrap(this.element);
      this.$_RestoreAttributes$(this.element);
      return this._super();
    }, $_GetContentElement$:function() {
      return this.$_element2$;
    }, _setOption:function($key$$181$$, $coercedValue$$2_value$$316$$, $flags$$47$$) {
      switch($key$$181$$) {
        case "disabled":
        ;
        case "readOnly":
        ;
        case "value":
          $coercedValue$$2_value$$316$$ = !!$coercedValue$$2_value$$316$$;
          break;
        case "required":
          $coercedValue$$2_value$$316$$ = !1;
          break;
      }
      this._super($key$$181$$, $coercedValue$$2_value$$316$$, $flags$$47$$);
      this.$_setup$();
    }});
  })();
});
