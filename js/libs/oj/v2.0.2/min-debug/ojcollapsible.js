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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$29$$, $$$$28$$) {
  (function() {
    var $uid$$1$$ = 0;
    $oj$$29$$.$__registerWidget$("oj.ojCollapsible", $$$$28$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{expanded:!1, disabled:null, expandOn:"click", expandArea:"header", beforeExpand:null, expand:null, beforeCollapse:null, collapse:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-collapsible oj-component");
      this.$_processPanels$();
      this.$_refresh$();
      this.$_initialRender$ = !0;
      var $elem$$69$$ = this.element[0];
      this.$_expandCollapseHandler$({type:this.options.expanded ? "ojexpand" : "ojcollapse", target:$elem$$69$$, currentTarget:$elem$$69$$, preventDefault:$$$$28$$.noop});
      this.$_initialRender$ = void 0;
    }, $_NotifyContextMenuGesture$:function($menu$$15$$, $event$$385$$, $eventType$$44$$) {
      this.$_OpenContextMenu$($event$$385$$, $eventType$$44$$, {launcher:this.element.find(".oj-collapsible-header-icon").first()});
    }, $_createIcons$:function() {
      var $icon$$6$$ = this.options.expanded ? "oj-collapsible-open-icon" : "oj-collapsible-close-icon";
      (this.$_isDisabled$() ? $$$$28$$("\x3cspan\x3e") : $$$$28$$("\x3ca href\x3d'#'\x3e")).addClass("oj-component-icon oj-clickable-icon-nocontext oj-collapsible-header-icon " + $icon$$6$$).attr("aria-labelledby", this.header.attr("id")).prependTo(this.header);
    }, $_destroyIcons$:function() {
      this.header.children(".oj-collapsible-header-icon").remove();
    }, _destroy:function() {
      this.$_cleanup$();
      this.element.removeClass("oj-collapsible oj-component oj-expanded oj-collapsed oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).removeAttr("tabIndex");
      this.header.removeClass("oj-collapsible-header").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
      this.$_findFirstFocusableInHeader$().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");
      this.$_destroyIcons$();
      this.content.css("display", "").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-component-content oj-collapsible-content").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
    }, $_cleanup$:function() {
      this.$_tearDownEvents$();
      this.content && ($oj$$29$$.$DomUtils$.unwrap(this.content), this.$wrapper$ = null);
    }, $_isDisabled$:function() {
      return this.element.hasClass("oj-disabled");
    }, $_getExpandAreaSelector$:function() {
      return "header" == this.options.expandArea ? "\x3e .oj-collapsible-header" : "\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon";
    }, _setOption:function($key$$141$$, $value$$265$$, $flags$$37$$) {
      "expanded" === $key$$141$$ ? $value$$265$$ !== this.options.expanded && this.$_setExpanded$($value$$265$$) : "disabled" === $key$$141$$ ? (this.header.add(this.header.next()), this.element.toggleClass("oj-disabled", !!$value$$265$$)) : "expandOn" === $key$$141$$ || "expandArea" === $key$$141$$ ? (this.$_tearDownEvents$(), this._super($key$$141$$, $value$$265$$, $flags$$37$$), this.$_setupEvents$()) : this._super($key$$141$$, $value$$265$$, $flags$$37$$);
    }, $_keydown$:function($event$$386$$) {
      if (!$event$$386$$.altKey && !$event$$386$$.ctrlKey) {
        var $keyCode$$18$$ = $$$$28$$.ui.keyCode;
        switch($event$$386$$.keyCode) {
          case $keyCode$$18$$.SPACE:
          ;
          case $keyCode$$18$$.ENTER:
            this.$_toggleHandler$($event$$386$$);
        }
      }
    }, refresh:function() {
      this._super();
      this.$_cleanup$();
      this.$_processPanels$();
      this.$_destroyIcons$();
      this.$_refresh$();
    }, $_processPanels$:function() {
      this.header = this.element.children(":first-child").addClass("oj-collapsible-header");
      this.content = this.header.next().addClass("oj-collapsible-content oj-component-content");
      this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
      this.$wrapper$ = this.content.parent().addClass("oj-collapsible-wrapper");
      this.options.disabled && this.element.addClass("oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).attr("tabIndex", -1);
    }, $_refresh$:function() {
      var $focusable$$3_header$$10$$ = this.header, $content$$21$$ = this.content, $options$$297$$ = this.options, $collapsibleId$$ = "oj-collapsible-" + (this.element.attr("id") || ++$uid$$1$$), $headerId$$ = $focusable$$3_header$$10$$.attr("id"), $contentId$$ = $content$$21$$.attr("id");
      $headerId$$ || $focusable$$3_header$$10$$.attr("id", $collapsibleId$$ + "-header");
      $contentId$$ || ($contentId$$ = $collapsibleId$$ + "-content", $content$$21$$.attr("id", $contentId$$));
      this.$_createIcons$();
      $focusable$$3_header$$10$$ = this.$_findFirstFocusableInHeader$();
      $focusable$$3_header$$10$$.attr("role", "button").attr("aria-controls", $contentId$$).attr("aria-expanded", $options$$297$$.expanded);
      this.$_isDisabled$() && $focusable$$3_header$$10$$.attr("aria-disabled", "true");
      $options$$297$$.expanded ? $content$$21$$.removeAttr("aria-hidden") : (this.$wrapper$.css({"max-height":0, "overflow-y":"hidden", display:"none"}), this.$wrapper$.css("max-height", 0), $content$$21$$.attr("aria-hidden", "true"));
      this.$_setupEvents$();
    }, $_setExpanded$:function($expanded$$12$$) {
      $expanded$$12$$ ? this.expand(!0) : this.collapse(!0);
    }, $_setupEvents$:function() {
      var $events$$3$$ = {keydown:this.$_keydown$}, $event$$387_expandArea$$ = this.options.expandOn;
      if ($event$$387_expandArea$$) {
        var $self$$153$$ = this;
        $$$$28$$.each($event$$387_expandArea$$.split(" "), function($index$$195$$, $eventName$$1$$) {
          $oj$$29$$.$DomUtils$.$isValidIdentifier$($eventName$$1$$) && ($events$$3$$[$eventName$$1$$] = $self$$153$$.$_toggleHandler$);
        });
      }
      $event$$387_expandArea$$ = this.element.find(this.$_getExpandAreaSelector$());
      this._on($event$$387_expandArea$$, $events$$3$$);
      this._on(this.$wrapper$, {transitionend:this.$_transitionEndHandler$, webkitTransitionEnd:this.$_transitionEndHandler$, otransitionend:this.$_transitionEndHandler$, oTransitionEnd:this.$_transitionEndHandler$});
      this.$_isDisabled$() || (this._on(this.element, {ojexpand:this.$_expandCollapseHandler$, ojcollapse:this.$_expandCollapseHandler$, ojfocus:this.$_focusHandler$, ojfocusout:this.$_focusHandler$}), this._hoverable($event$$387_expandArea$$), this._focusable($event$$387_expandArea$$), this.$_activeable$($event$$387_expandArea$$));
    }, $_tearDownEvents$:function() {
      this._off(this.element.find(this.$_getExpandAreaSelector$()));
      this.$wrapper$ && this._off(this.$wrapper$);
      this._off(this.element.add(this.content));
    }, $_toggleHandler$:function($event$$388$$) {
      this.$_isDisabled$() || $event$$388$$.isDefaultPrevented() || (this.options.expanded ? this.collapse(!0, $event$$388$$) : this.expand(!0, $event$$388$$), $event$$388$$.preventDefault(), $event$$388$$.stopPropagation(), this.header.find(".oj-collapsible-header-icon").focus());
    }, $_expandCollapseHandler$:function($event$$389$$) {
      if (!this.$_isDisabled$() && $event$$389$$.target === this.element[0] && (this.$_initialRender$ || !$event$$389$$.isDefaultPrevented())) {
        var $element$$123$$ = this.element, $options$$298$$ = this.options, $content$$22$$ = this.content, $wrapper$$ = this.$wrapper$, $isExpanded$$ = "ojexpand" === $event$$389$$.type;
        $event$$389$$.preventDefault();
        this.$_initialRender$ ? ($options$$298$$.expanded = $isExpanded$$) ? ($element$$123$$.removeClass("oj-collapsed"), $element$$123$$.addClass("oj-expanded"), $oj$$29$$.Components.$subtreeShown$($wrapper$$[0])) : ($element$$123$$.removeClass("oj-expanded"), $element$$123$$.addClass("oj-collapsed"), $wrapper$$.css("max-height", 0), $wrapper$$.hide(), $oj$$29$$.Components.$subtreeHidden$($wrapper$$[0])) : (this.$_changeExpandedOption$($isExpanded$$, $event$$389$$), $wrapper$$.$contentHeight$ = 
        $wrapper$$.outerHeight(), $isExpanded$$ ? ($wrapper$$.show(), setTimeout(function() {
          $wrapper$$.$contentHeight$ += $content$$22$$.outerHeight();
          $wrapper$$.addClass("oj-collapsible-transition").css({"max-height":$wrapper$$.$contentHeight$});
          $element$$123$$.removeClass("oj-collapsed");
          $element$$123$$.addClass("oj-expanded");
          $oj$$29$$.Components.$subtreeShown$($wrapper$$[0]);
        }, 1)) : ($wrapper$$.removeClass("oj-collapsible-transition"), $wrapper$$.css({"max-height":$wrapper$$.$contentHeight$, "overflow-y":"hidden"}), setTimeout(function() {
          $wrapper$$.addClass("oj-collapsible-transition").css({"max-height":0});
          $element$$123$$.removeClass("oj-expanded");
          $element$$123$$.addClass("oj-collapsed");
          $oj$$29$$.Components.$subtreeHidden$($wrapper$$[0]);
        }, 10)));
        this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon", $isExpanded$$).toggleClass("oj-collapsible-close-icon", !$isExpanded$$ || !1).end();
        $isExpanded$$ ? this.content.removeAttr("aria-hidden") : this.content.attr("aria-hidden", "true");
        this.$_findFirstFocusableInHeader$().attr("aria-expanded", $isExpanded$$);
      }
    }, $_focusHandler$:function($event$$390$$) {
      if (this.$_isDisabled$()) {
        return null;
      }
      "ojfocusout" == $event$$390$$.type ? (this.$_findFirstFocusableInHeader$().attr("tabIndex", -1), $event$$390$$.preventDefault(), $event$$390$$.stopPropagation()) : "ojfocus" == $event$$390$$.type && (this.$_findFirstFocusableInHeader$().attr("tabIndex", 0).focus(), $event$$390$$.preventDefault(), $event$$390$$.stopPropagation());
    }, $_findFirstFocusableInHeader$:function() {
      return this.$_findFocusables$(this.header).first();
    }, $_findFocusables$:function($start$$47$$) {
      return this.$_isDisabled$() ? $start$$47$$.find("span") : $start$$47$$.find("a,:input");
    }, expand:function($vetoable$$4$$, $event$$391$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$14$$ = {header:this.header, content:this.content};
        $vetoable$$4$$ && !1 === this._trigger("beforeExpand", $event$$391$$, $eventData$$14$$) || this._trigger("expand", $event$$391$$, $eventData$$14$$);
      }
    }, collapse:function($vetoable$$5$$, $event$$392$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$15$$ = {header:this.header, content:this.content};
        $vetoable$$5$$ && !1 === this._trigger("beforeCollapse", $event$$392$$, $eventData$$15$$) || this._trigger("collapse", $event$$392$$, $eventData$$15$$);
      }
    }, $_transitionEndHandler$:function($event$$393$$) {
      this.$_isDisabled$() || ("max-height" == ($event$$393$$.originalEvent ? $event$$393$$.originalEvent.propertyName : null) && ($event$$393$$.preventDefault(), $event$$393$$.stopPropagation()), this.options.expanded ? this.$wrapper$.css({"max-height":9999, "overflow-y":""}) : this.$wrapper$.hide(), this.$wrapper$.removeClass("oj-collapsible-transition"));
    }, $_changeExpandedOption$:function($value$$266$$, $originalEvent$$1$$) {
      this.option("expanded", $value$$266$$, {_context:{originalEvent:$originalEvent$$1$$, $writeback$:!0, $internalSet$:!0}});
    }, getNodeBySubId:function($locator$$35$$) {
      if (null == $locator$$35$$) {
        return this.element ? this.element[0] : null;
      }
      switch($locator$$35$$.subId) {
        case "oj-collapsible-content":
          return this.content[0];
        case "oj-collapsible-header":
          return this.header[0];
        case "oj-collapsible-disclosure":
        ;
        case "oj-collapsible-header-icon":
          return this.header.find(".oj-collapsible-header-icon")[0];
      }
      return null;
    }, getSubIdByNode:function($currentNode$$1_node$$84$$) {
      for (var $headerIcon$$ = this.getNodeBySubId({subId:"oj-collapsible-disclosure"});$currentNode$$1_node$$84$$;) {
        if ($currentNode$$1_node$$84$$ === this.content[0]) {
          return{subId:"oj-collapsible-content"};
        }
        if ($currentNode$$1_node$$84$$ === this.header[0]) {
          return{subId:"oj-collapsible-header"};
        }
        if ($currentNode$$1_node$$84$$ === $headerIcon$$) {
          return{subId:"oj-collapsible-disclosure"};
        }
        $currentNode$$1_node$$84$$ = $currentNode$$1_node$$84$$.parentElement;
      }
      return null;
    }});
  })();
});
