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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojconveyorbelt", "ojs/ojmenu", "jqueryui-amd/sortable", "ojs/ojtouchproxy"], function($oj$$72$$, $$$$65$$) {
  (function() {
    var $_arMenuCmdMap$$ = {cut:"ojtabscut", "paste-before":"ojtabspastebefore", "paste-after":"ojtabspasteafter", remove:"ojtabsremove"}, $_arMenuKeyMap$$ = {cut:"labelCut", "paste-before":"labelPasteBefore", "paste-after":"labelPasteAfter", remove:"labelRemove"};
    $oj$$72$$.$__registerWidget$("oj.ojTabs", $$$$65$$.oj.baseComponent, {widgetEventPrefix:"oj", delay:300, options:{selected:0, disabledTabs:null, truncation:"auto", selectOn:"click", orientation:"horizontal", edge:"top", removable:!1, reorderable:!1, beforeSelect:null, select:null, beforeDeselect:null, deselect:null, beforeRemove:null, remove:null, beforeReorder:null, reorder:null, optionChange:null}, _ComponentCreate:function() {
      var $options$$403_selectedIndex$$ = this.options;
      this._super();
      this.$running$ = !1;
      this.$_initialRender$ = !0;
      this.$_setupEdge$($options$$403_selectedIndex$$.edge);
      this.$_isOldMarkup$ = 0 == this.element.children("ul").length;
      this.$_createTabbarFromOldMarkup$();
      this.$_processTabs$();
      this.$_menu$ = {};
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_refresh$();
      $options$$403_selectedIndex$$ = this.$_getIndexByTabOrContentId$($options$$403_selectedIndex$$.selected);
      void 0 === $options$$403_selectedIndex$$ && ($options$$403_selectedIndex$$ = 0);
      this.$_fireSelectEvents$($options$$403_selectedIndex$$);
      this.$_initialRender$ = void 0;
    }, $_fireSelectEvents$:function($selectedIndex$$1$$, $flags$$48$$) {
      this.$_isTabDisabled$($selectedIndex$$1$$) && ($selectedIndex$$1$$ = this.$_getNextEnabledTab$($selectedIndex$$1$$));
      this.$_activate$(void 0 === $selectedIndex$$1$$ ? void 0 : $$$$65$$(this.$tabs$[$selectedIndex$$1$$]), $flags$$48$$);
    }, $_NotifyContextMenuGesture$:function($menu$$25_openOptions$$6$$, $event$$634$$, $eventType$$55$$) {
      if (this.$_isInATab$($event$$634$$.target) && (!this.$_touchProxy$ || !this.$_touchProxy$.$_touchMoved$)) {
        var $disabledState_keyboard$$ = "keyboard" === $eventType$$55$$;
        if ("contextmenu" == $event$$634$$.type || $disabledState_keyboard$$ || "touch" == $eventType$$55$$) {
          var $tab$$ = $$$$65$$($event$$634$$.target).closest("li");
          $menu$$25_openOptions$$6$$ = {launcher:$tab$$};
          this.$_menu$.tab = $disabledState_keyboard$$ ? this.$active$ : $menu$$25_openOptions$$6$$.launcher;
          if (this.$_menu$.tab) {
            if (this.$_menu$.$$elemRemove$) {
              if ($tab$$.hasClass("oj-disabled") && 1 == this.$_menu$.$$container$.children().length) {
                $event$$634$$.preventDefault();
                return;
              }
              $tab$$.hasClass("oj-disabled") ? this.$_menu$.$$elemRemove$.addClass("oj-disabled") : this.$_menu$.$$elemRemove$.removeClass("oj-disabled");
            }
            if (this.$_menu$.$$elemPasteBefore$ || this.$_menu$.$$elemPasteAfter$) {
              $disabledState_keyboard$$ = !this.$_menu$.$cutTab$, this.$_menu$.$$elemPasteBefore$.hasClass("oj-disabled") != $disabledState_keyboard$$ && ($disabledState_keyboard$$ ? (this.$_menu$.$$elemPasteBefore$.addClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.addClass("oj-disabled")) : (this.$_menu$.$$elemPasteBefore$.removeClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.removeClass("oj-disabled")), this.$_menu$.$$container$.ojMenu("refresh"));
            }
            this.$_OpenContextMenu$($event$$634$$, $eventType$$55$$, $menu$$25_openOptions$$6$$);
          } else {
            $event$$634$$.preventDefault();
          }
        }
      }
    }, $_tabKeydown$:function($event$$635$$) {
      if (!this.$_handlePageNav$($event$$635$$)) {
        var $anchor$$3_focusedTab$$ = $$$$65$$(this.document[0].activeElement).closest("li"), $enabledTabs$$ = this.$_getEnabledTabs$(), $selectedIndex$$2$$ = $enabledTabs$$.index($anchor$$3_focusedTab$$), $length$$19$$ = $enabledTabs$$.length;
        switch($event$$635$$.keyCode) {
          case $$$$65$$.ui.keyCode.RIGHT:
          ;
          case $$$$65$$.ui.keyCode.DOWN:
            $selectedIndex$$2$$ = ($selectedIndex$$2$$ + 1) % $length$$19$$;
            break;
          case $$$$65$$.ui.keyCode.UP:
          ;
          case $$$$65$$.ui.keyCode.LEFT:
            $selectedIndex$$2$$ = ((0 == $selectedIndex$$2$$ ? $length$$19$$ : $selectedIndex$$2$$) - 1) % $length$$19$$;
            break;
          case $$$$65$$.ui.keyCode.END:
            $selectedIndex$$2$$ = $length$$19$$ - 1;
            break;
          case $$$$65$$.ui.keyCode.HOME:
            $selectedIndex$$2$$ = 0;
            break;
          case 46:
            this.options.removable && ($anchor$$3_focusedTab$$ = this.$_getCloseIcons$(this.$active$)) && ($event$$635$$.preventDefault(), this.$_removeTabHandler$({target:$anchor$$3_focusedTab$$, currentTarget:$anchor$$3_focusedTab$$, preventDefault:$$$$65$$.noop}, $event$$635$$));
            return;
          default:
            return;
        }
        $event$$635$$.preventDefault();
        clearTimeout(this.$activating$);
        var $selTab$$ = $$$$65$$($enabledTabs$$[$selectedIndex$$2$$]);
        $selTab$$.focus();
        if (!$event$$635$$.ctrlKey) {
          $anchor$$3_focusedTab$$.attr("aria-selected", "false");
          $selTab$$.attr("aria-selected", "true");
          this.$_getTabIdOrIndex$($selTab$$);
          var $self$$215$$ = this;
          this.$activating$ = this._delay(function() {
            $self$$215$$ && $self$$215$$.$tabs$ && $self$$215$$.$_activate$($selTab$$, $event$$635$$);
          }, this.delay);
        }
      }
    }, $_panelKeydown$:function($event$$636$$) {
      $$$$65$$($event$$636$$.target).closest(".oj-tabs-selected").attr("id") === this.element.children(".oj-tabs-selected").attr("id") && !this.$_handlePageNav$($event$$636$$) && $event$$636$$.ctrlKey && $event$$636$$.keyCode === $$$$65$$.ui.keyCode.UP && ($event$$636$$.preventDefault(), this.$active$.focus());
    }, $_handlePageNav$:function($event$$637$$) {
      var $selectedIndex$$3$$ = this.$_getSelectedIndex$();
      if ($event$$637$$.ctrlKey && $event$$637$$.keyCode === $$$$65$$.ui.keyCode.PAGE_UP) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$3$$, !1)), !0;
      }
      if ($event$$637$$.ctrlKey && $event$$637$$.keyCode === $$$$65$$.ui.keyCode.PAGE_DOWN) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$3$$, !0)), !0;
      }
    }, $_isTabDisabled$:function($index$$274$$) {
      return 0 <= $index$$274$$ && $index$$274$$ < this.$tabs$.length ? $$$$65$$(this.$tabs$[$index$$274$$]).hasClass("oj-disabled") : !1;
    }, $_focusNextTab$:function($index$$275$$, $goingForward$$) {
      var $enabledTabs$$1_selTab$$1$$ = this.$_getEnabledTabs$(), $currentIndex$$4$$ = $enabledTabs$$1_selTab$$1$$.index(this.$tabs$[$index$$275$$]), $length$$20$$ = $enabledTabs$$1_selTab$$1$$.length, $enabledTabs$$1_selTab$$1$$ = $$$$65$$($enabledTabs$$1_selTab$$1$$[$goingForward$$ ? ($currentIndex$$4$$ + 1) % $length$$20$$ : ((0 == $currentIndex$$4$$ ? $length$$20$$ : $currentIndex$$4$$) - 1) % $length$$20$$]);
      $enabledTabs$$1_selTab$$1$$.focus();
      return $enabledTabs$$1_selTab$$1$$;
    }, $_getNextEnabledTab$:function($index$$276$$) {
      for (var $next$$10$$ = $index$$276$$ + 1, $lastTabIndex$$ = this.$tabs$.length - 1;$next$$10$$ <= $lastTabIndex$$;) {
        if (!this.$_isTabDisabled$($next$$10$$)) {
          return $next$$10$$;
        }
        $next$$10$$++;
      }
      for ($next$$10$$ = $index$$276$$ - 1;0 <= $next$$10$$;) {
        if (!this.$_isTabDisabled$($next$$10$$)) {
          return $next$$10$$;
        }
        $next$$10$$--;
      }
    }, $_isHorizontal$:function() {
      return "top" == this.options.edge || "bottom" == this.options.edge;
    }, _setOption:function($edge$$13_key$$182_selectedIndex$$4$$, $value$$317$$, $flags$$49$$) {
      "selected" === $edge$$13_key$$182_selectedIndex$$4$$ ? ($value$$317$$ = this.$_getTab$($value$$317$$), void 0 !== $value$$317$$ && this.$_activate$($value$$317$$)) : "disabledTabs" === $edge$$13_key$$182_selectedIndex$$4$$ ? Array.isArray($value$$317$$) && (this.$_setOjDisabledOnTab$($value$$317$$), $edge$$13_key$$182_selectedIndex$$4$$ = this.$_getSelectedIndex$(), this.$_isTabDisabled$($edge$$13_key$$182_selectedIndex$$4$$) && this.$_fireSelectEvents$($edge$$13_key$$182_selectedIndex$$4$$), 
      this.refresh()) : "removable" === $edge$$13_key$$182_selectedIndex$$4$$ || "truncation" === $edge$$13_key$$182_selectedIndex$$4$$ ? $value$$317$$ != this.options[$edge$$13_key$$182_selectedIndex$$4$$] && (this._super($edge$$13_key$$182_selectedIndex$$4$$, $value$$317$$, $flags$$49$$), this.refresh()) : "reorderable" === $edge$$13_key$$182_selectedIndex$$4$$ ? $value$$317$$ !== this.options.reorderable && (this._super($edge$$13_key$$182_selectedIndex$$4$$, $value$$317$$, $flags$$49$$), this.refresh()) : 
      "orientation" === $edge$$13_key$$182_selectedIndex$$4$$ ? this.$_edgeSpecified$ || ($edge$$13_key$$182_selectedIndex$$4$$ = this.$_orientationToEdge$($value$$317$$)) && this.$_setupEdge$($edge$$13_key$$182_selectedIndex$$4$$) && this.refresh() : "edge" === $edge$$13_key$$182_selectedIndex$$4$$ ? this.$_setupEdge$($value$$317$$) && (this.$_edgeSpecified$ = !0, this._super($edge$$13_key$$182_selectedIndex$$4$$, $value$$317$$, $flags$$49$$), this.refresh()) : "selectOn" === $edge$$13_key$$182_selectedIndex$$4$$ ? 
      (this.$_tearDownEvents$(!0), this._super($edge$$13_key$$182_selectedIndex$$4$$, $value$$317$$, $flags$$49$$), this.$_setupEvents$()) : ("contextMenu" === $edge$$13_key$$182_selectedIndex$$4$$ && (this.$_clearMenu$(), $value$$317$$ && this.$_initMenu$($value$$317$$)), this._super($edge$$13_key$$182_selectedIndex$$4$$, $value$$317$$, $flags$$49$$), "translations" === $edge$$13_key$$182_selectedIndex$$4$$ && $flags$$49$$ && "removeCueText" === $flags$$49$$.subkey && this.$tablist$ && this.$_getCloseIcons$(this.$tablist$).attr("aria-label", 
      $value$$317$$ ? $value$$317$$.removeCueText : ""));
    }, refresh:function() {
      this._super();
      this.$_processTabs$();
      this.$_refresh$();
    }, $_refresh$:function() {
      var $selectedPanel$$ = this.element.children(".oj-tabs-selected");
      this.$active$ = $selectedPanel$$.length ? this.$tablist$.children(".oj-selected") : $$$$65$$();
      this.$_createCloseIcons$();
      this.$_setupEvents$();
      this.$tabs$.not(this.$active$).attr({"aria-selected":"false", tabIndex:"-1"});
      this.$panels$.not(this.$_getPanelForTab$(this.$active$)).hide().attr({"aria-expanded":"false", "aria-hidden":"true"});
      this.$active$.length ? (this.$active$.addClass("oj-selected").attr({"aria-selected":"true", tabIndex:"0"}), $selectedPanel$$.show().attr("aria-expanded", "true").removeAttr("aria-hidden")) : $$$$65$$(this.$tabs$[0]).attr("tabIndex", "0");
      this.$_isHorizontal$() && (0 < this.$tabs$.length ? (this.$_truncateBeforeOverflow$(), this.$_addConveyor$()) : this.$_getTabbarWrapper$(), this.$_addFacets$());
      void 0 === this.options.selected || 0 == this.$_getSelectedIndex$() ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected");
      this.$_setupReorder$();
    }, $_addConveyor$:function() {
      var $cparent_tabsId$$ = this.$tablist$.uniqueId().attr("id");
      this.$conveyor$ = this.$_getTabbarWrapper$().parent().ojConveyorBelt({orientation:"horizontal", contentParent:"#" + $cparent_tabsId$$});
      $cparent_tabsId$$ = this.$conveyor$.parent();
      if ($cparent_tabsId$$.hasClass("oj-tabs-conveyorbelt-wrapper")) {
        var $flex$$ = "0 1 " + this.$_getConveyorWrapperMaxWidth$() + "px";
        $cparent_tabsId$$.css("flex", $flex$$);
        $cparent_tabsId$$.css("-webkit-flex", $flex$$);
        $cparent_tabsId$$.css("-ms-flex", $flex$$);
      }
    }, $_processTabs$:function() {
      var $self$$216$$ = this, $edge$$14$$ = this.options.edge;
      this.$_destroyTabBar$();
      this.$_createTabbar$();
      this.$tablist$ = this.element.children("ul").addClass("oj-tabs-nav oj-helper-clearfix").attr("role", "tablist");
      var $tabbarIndex$$ = this.$tablist$.index();
      this.element.children(".oj-tabs-facet").each(function() {
        var $facet$$ = $$$$65$$(this);
        $facet$$.index() < $tabbarIndex$$ ? $facet$$.addClass("oj-start") : $facet$$.removeClass("oj-start");
      });
      var $tabContents$$ = this.element.children(".oj-tabs-panel");
      "start" == $edge$$14$$ || "top" == $edge$$14$$ ? $$$$65$$($tabContents$$[0]).before(this.$tablist$) : $$$$65$$($tabContents$$[$tabContents$$.length - 1]).after(this.$tablist$);
      this.$tabs$ = $$$$65$$();
      this.$panels$ = $$$$65$$();
      this.$tablist$.children("li").each(function() {
        var $tab$$1$$ = $$$$65$$(this).addClass("oj-tabs-tab").attr({role:"tab", tabIndex:"-1"}).removeAttr("aria-hidden"), $anchor$$4_anchorId_div$$6$$ = $tab$$1$$.children();
        $anchor$$4_anchorId_div$$6$$.addClass("oj-tabs-tab-content");
        $anchor$$4_anchorId_div$$6$$ = $anchor$$4_anchorId_div$$6$$.children();
        $anchor$$4_anchorId_div$$6$$.addClass("oj-tabs-anchor").attr({role:"presentation", tabIndex:"-1"});
        $anchor$$4_anchorId_div$$6$$.children().addClass("oj-tabs-title").removeAttr("aria-hidden");
        $self$$216$$.$tabs$ = $self$$216$$.$tabs$.add($tab$$1$$);
        var $anchor$$4_anchorId_div$$6$$ = $anchor$$4_anchorId_div$$6$$.uniqueId().attr("id"), $panelId$$ = $tab$$1$$.attr("data-content"), $panel$$2$$ = $self$$216$$.element.find($self$$216$$.$_sanitizeSelector$("#" + $panelId$$));
        $tab$$1$$.attr({"aria-controls":$panelId$$, "aria-labelledby":$anchor$$4_anchorId_div$$6$$});
        $self$$216$$.$panels$ = $self$$216$$.$panels$.add($panel$$2$$);
        $panel$$2$$.attr("aria-labelledby", $anchor$$4_anchorId_div$$6$$).attr("role", "tabpanel");
      });
      "start" != $edge$$14$$ && "end" != $edge$$14$$ || $self$$216$$.$tablist$.addClass("oj-tabs-nav-root");
      this.$_initialRender$ && this.$_setOjDisabledOnTab$(this.options.disabledTabs);
    }, $_setupEvents$:function() {
      var $events$$17$$ = {keydown:this.$_tabKeydown$}, $enabledTabs$$2_event$$638$$ = this.options.selectOn, $selectOnClick$$ = !1;
      if ($enabledTabs$$2_event$$638$$) {
        var $self$$217$$ = this;
        $$$$65$$.each($enabledTabs$$2_event$$638$$.split(" "), function($index$$278$$, $eventName$$2$$) {
          "click" == $eventName$$2$$ && ($selectOnClick$$ = !0);
          $oj$$72$$.$DomUtils$.$isValidIdentifier$($eventName$$2$$) && ($events$$17$$[$eventName$$2$$] = $self$$217$$.$_eventHandler$);
        });
      }
      $enabledTabs$$2_event$$638$$ = this.$_getEnabledTabs$();
      this._on($enabledTabs$$2_event$$638$$, $events$$17$$);
      $selectOnClick$$ || this._on($enabledTabs$$2_event$$638$$, {click:function($e$$116$$) {
        $e$$116$$.preventDefault();
      }});
      this.$panels$.on("keydown" + this.eventNamespace, this.$_panelKeydown$.bind(this));
      if (this.options.removable) {
        var $revents$$ = {click:this.$_removeTabHandler$};
        this._on(this.$_getCloseIcons$($enabledTabs$$2_event$$638$$), $revents$$);
      }
      this._focusable($enabledTabs$$2_event$$638$$);
      this._hoverable($enabledTabs$$2_event$$638$$);
      this.$_activeable$($enabledTabs$$2_event$$638$$);
    }, $_tearDownEvents$:function($noCloseIcon$$) {
      var $enabledTabs$$3$$ = this.$_getEnabledTabs$();
      $noCloseIcon$$ || this.$_UnregisterChildNode$(this.$_getCloseIcons$($enabledTabs$$3$$));
      this.$_UnregisterChildNode$($enabledTabs$$3$$);
      this.$panels$ && this.$panels$.off("keydown" + this.eventNamespace);
    }, $_eventHandler$:function($event$$639$$, $flags$$50$$) {
      var $active$$2_eventData$$25$$ = this.$active$, $tab$$2$$ = $$$$65$$($event$$639$$.currentTarget).closest("li"), $clickedIsActive$$ = $active$$2_eventData$$25$$ && $tab$$2$$[0] === $active$$2_eventData$$25$$[0], $oToContent$$ = this.$_getPanelForTab$($tab$$2$$), $oFromContent$$ = $active$$2_eventData$$25$$ && $active$$2_eventData$$25$$.length ? this.$_getPanelForTab$($active$$2_eventData$$25$$) : $$$$65$$(), $active$$2_eventData$$25$$ = {fromTab:$active$$2_eventData$$25$$, fromContent:$oFromContent$$, 
      toTab:$tab$$2$$, toContent:$oToContent$$};
      $event$$639$$.preventDefault();
      var $oEvent$$ = $flags$$50$$ ? $flags$$50$$ : $event$$639$$;
      $tab$$2$$.hasClass("oj-disabled") || this.$running$ || $clickedIsActive$$ || $oFromContent$$ && $oFromContent$$.length && !1 === this._trigger("beforeDeselect", $oEvent$$, $active$$2_eventData$$25$$) || !this.$_initialRender$ && !1 === this._trigger("beforeSelect", $oEvent$$, $active$$2_eventData$$25$$) || (this.$_initialRender$ ? this.options.selected = this.$_getTabIdOrIndex$($tab$$2$$) : this.option("selected", this.$_getTabIdOrIndex$($tab$$2$$), {_context:{originalEvent:$oEvent$$, $internalSet$:!0}}), 
      this.$active$ = $tab$$2$$, $oToContent$$.addClass("oj-tabs-selected"), $oFromContent$$ && $oFromContent$$.length && $oFromContent$$.removeClass("oj-tabs-selected"), this.$_toggle$($oEvent$$, $active$$2_eventData$$25$$));
    }, $_toggle$:function($event$$640$$, $eventData$$26$$) {
      var $toTab$$ = $eventData$$26$$.toTab.closest("li"), $toShow$$ = $eventData$$26$$.toContent, $toHide$$ = $eventData$$26$$.fromContent;
      this.$running$ = !0;
      var $fromTab$$ = $eventData$$26$$.fromTab.closest("li").removeClass("oj-selected");
      $toHide$$.hide();
      0 < $toHide$$.length && $oj$$72$$.Components.$subtreeHidden$($toHide$$[0]);
      $toTab$$.addClass("oj-selected");
      this.$_isHorizontal$() && 0 < this.$tabs$.length && (0 == $toTab$$.index() ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected"));
      $toShow$$.show();
      0 < $toShow$$.length && $oj$$72$$.Components.$subtreeShown$($toShow$$[0]);
      this.$running$ = !1;
      this.$_initialRender$ || (this._trigger("deselect", $event$$640$$, $eventData$$26$$), this._trigger("select", $event$$640$$, $eventData$$26$$));
      $toHide$$.attr({"aria-expanded":"false", "aria-hidden":"true"});
      $fromTab$$.attr("aria-selected", "false");
      $toShow$$.length && $toHide$$.length ? $fromTab$$.attr("tabIndex", "-1") : $toShow$$.length && this.$tabs$.filter(function() {
        return "0" === $$$$65$$(this).attr("tabIndex");
      }).attr("tabIndex", "-1");
      $toShow$$.attr("aria-expanded", "true").removeAttr("aria-hidden");
      $toTab$$.attr({"aria-selected":"true", tabIndex:"0"});
    }, $_activate$:function($active$$3$$, $flags$$51$$) {
      if (void 0 !== $active$$3$$) {
        var $anchor$$5$$;
        this.$active$ && $active$$3$$[0] === this.$active$[0] || ($anchor$$5$$ = $active$$3$$.find(".oj-tabs-anchor")[0], this.$_eventHandler$({target:$anchor$$5$$, currentTarget:$anchor$$5$$, preventDefault:$$$$65$$.noop}, $flags$$51$$));
      }
    }, $_createCloseIcons$:function() {
      if (this.options.removable && this.$_isHorizontal$()) {
        var $removeCueText$$ = this.$getTranslatedString$("removeCueText");
        this.$_getEnabledTabs$().each(function($index$$279_rmId$$) {
          var $div$$7$$ = $$$$65$$(this).find("\x3e :first-child");
          $div$$7$$.addClass("oj-removable");
          $index$$279_rmId$$ = "ojtabs-id_rm_" + $index$$279_rmId$$;
          $$$$65$$(this).attr("aria-describedby", $index$$279_rmId$$);
          $$$$65$$("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon-nocontext oj-tabs-close-icon").attr({id:$index$$279_rmId$$, tabIndex:"-1", "aria-label":$removeCueText$$, role:"presentation"}).appendTo($div$$7$$);
        });
      }
    }, $_getEnabledTabs$:function() {
      return $$$$65$$(this.$tabs$.not(".oj-disabled"));
    }, $_getCloseIcons$:function($elem$$163$$) {
      return $elem$$163$$.find(".oj-tabs-close-icon");
    }, $_destroyTabBar$:function() {
      this.$tabs$ && this.$_tearDownEvents$();
      this.$_hasResizeListener$ && ($oj$$72$$.$DomUtils$.$removeResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !1, this.$_originalWidth$ = void 0);
      this.$_sortable$ && ($oj$$72$$.$DomUtils$.$isTouchSupported$() && this.$_tearDownTouchReorder$(), this.$tablist$.sortable("destroy"), this.$_sortable$ = void 0);
      var $navRoot$$ = this.element.children(".oj-tabs-nav-root"), $navRootNotUL$$ = !$navRoot$$.hasClass("oj-tabs-nav");
      if (this.$tabs$ && (this.$_getCloseIcons$(this.$tabs$).remove(), $navRoot$$.length)) {
        var $afterMe$$ = $navRoot$$, $noFacet$$ = !0, $tabbar$$ = this.$tablist$;
        $navRoot$$.children().each(function() {
          var $child$$27$$ = $$$$65$$(this);
          if ($child$$27$$.hasClass("oj-tabs-conveyorbelt-wrapper")) {
            $child$$27$$ = $tabbar$$;
          } else {
            if (!$child$$27$$.hasClass("oj-tabs-facet")) {
              return;
            }
          }
          $noFacet$$ = !1;
          $afterMe$$.after($child$$27$$);
          $afterMe$$ = $child$$27$$;
        });
        $noFacet$$ && $navRootNotUL$$ && $navRoot$$.after($tabbar$$);
      }
      this.$conveyor$ && (this.$conveyor$.ojConveyorBelt("destroy"), this.$conveyor$.remove(), this.$active$ = this.$conveyor$ = null);
      $navRootNotUL$$ && $navRoot$$.remove();
      this.$tablist$ = this.$tabs$ = null;
    }, _destroy:function() {
      this.$_clearMenu$();
      this.$_isHorizontal$() ? this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-tabs-top oj-tabs-bottom oj-first-child-selected") : this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-tabs-start oj-tabs-end oj-helper-clearfix");
      var $self$$219$$ = this, $tab$$3$$, $div$$8$$, $anchor$$6$$, $header$$13$$;
      this.$tabs$.each(function($index$$280$$) {
        $tab$$3$$ = $$$$65$$(this);
        $tab$$3$$.removeAttr("tabIndex").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-controls").removeAttr("aria-disabled").removeAttr("role").removeAttr("data-content").removeClass("oj-active oj-disabled oj-selected oj-tabs-gen-id oj-tabs-tab").removeUniqueId().css("display", "");
        $div$$8$$ = $tab$$3$$.children("div").removeClass("oj-tabs-tab-content");
        $anchor$$6$$ = $div$$8$$.children("a").removeClass("oj-tabs-anchor").removeAttr("tabIndex").removeAttr("role");
        $header$$13$$ = $anchor$$6$$.children();
        $header$$13$$.removeClass("oj-tabs-title").removeAttr("aria-hidden");
        $self$$219$$.$_isOldMarkup$ ? $header$$13$$.prependTo($self$$219$$.$panels$.get($index$$280$$)) : $div$$8$$.hasClass("oj-tabs-gen-div") && $anchor$$6$$.hasClass("oj-tabs-gen-a") ? ($header$$13$$.prependTo($tab$$3$$), $div$$8$$.remove()) : $anchor$$6$$.hasClass("oj-tabs-gen-a") ? ($header$$13$$.prependTo($div$$8$$), $anchor$$6$$.remove()) : $div$$8$$.hasClass("oj-tabs-gen-div") && ($anchor$$6$$.prependTo($tab$$3$$), $div$$8$$.remove());
      });
      var $tabbar$$1$$ = this.$tablist$;
      this.$_destroyTabBar$();
      $tabbar$$1$$.removeAttr("tabIndex").removeAttr("role").removeClass("oj-tabs-nav oj-tabs-nav-root oj-helper-clearfix").removeUniqueId();
      this.$_isOldMarkup$ && $tabbar$$1$$.remove();
      this.$panels$.each(function() {
        $$$$65$$(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-tabs-selected oj-tabs-gen-id oj-tabs-panel").removeUniqueId().css("display", "");
      });
      this.element.children(".oj-tabs-facet").removeClass("oj-start");
    }, $_removeTabHandler$:function($event$$641$$, $flags$$52$$) {
      var $tab$$4$$ = $$$$65$$($event$$641$$.currentTarget).closest("li"), $panel$$4$$ = this.$_getPanelForTab$($tab$$4$$), $eventData$$27$$ = {tab:$tab$$4$$, content:$panel$$4$$}, $oEvent$$1$$ = $flags$$52$$ ? $flags$$52$$ : $event$$641$$;
      if ($tab$$4$$ && !1 !== this._trigger("beforeRemove", $oEvent$$1$$, $eventData$$27$$)) {
        $event$$641$$.preventDefault();
        if ($tab$$4$$.hasClass("oj-selected")) {
          var $nextIndex$$1$$ = this.$_getNextEnabledTab$(this.$tabs$.index($tab$$4$$));
          void 0 === $nextIndex$$1$$ ? (this.$active$ = void 0, this.option("selected", void 0, {_context:{originalEvent:$oEvent$$1$$, $internalSet$:!0}})) : (this.$_fireSelectEvents$($nextIndex$$1$$, $oEvent$$1$$), this.option("selected", this.$_getTabIdOrIndex$($$$$65$$(this.$tabs$[$nextIndex$$1$$])), {_context:{originalEvent:$oEvent$$1$$, $internalSet$:!0}}));
        }
        this.$_tearDownEvents$();
        this.$tabs$ = this.$tabs$.not($tab$$4$$);
        $tab$$4$$.remove();
        $panel$$4$$.remove();
        this.$_updateDisabledTabs$();
        this.refresh();
        this._trigger("remove", $oEvent$$1$$, $eventData$$27$$);
      }
    }, $_wrapLi$:function($header$$14$$, $contentId$$1$$) {
      var $tab$$5$$;
      if ("li" == $header$$14$$.prop("tagName").toLowerCase()) {
        $tab$$5$$ = $header$$14$$;
        var $anchor$$7_div$$9$$ = $tab$$5$$.children("div");
        1 == $anchor$$7_div$$9$$.length && $anchor$$7_div$$9$$.hasClass("oj-tabs-tab-content") ? ($anchor$$7_div$$9$$ = $anchor$$7_div$$9$$.children("a"), 1 != $anchor$$7_div$$9$$.length && ($tab$$5$$.wrapInner("\x3ca href\x3d'#'\x3e\x3c/a\x3e"), $anchor$$7_div$$9$$.addClass("oj-tabs-gen-a"))) : ($anchor$$7_div$$9$$ = $tab$$5$$.wrapInner("\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e").children(), $anchor$$7_div$$9$$.addClass("oj-tabs-gen-div oj-tabs-tab-content"), $anchor$$7_div$$9$$.children().addClass("oj-tabs-gen-a"));
      } else {
        $tab$$5$$ = $header$$14$$.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent().parent().parent(), $tab$$5$$.addClass("oj-tabs-gen-li"), $tab$$5$$.children().addClass("oj-tabs-gen-div oj-tabs-tab-content");
      }
      $contentId$$1$$ && $tab$$5$$.attr("data-content", $contentId$$1$$);
      return $tab$$5$$;
    }, addTab:function($contentAfter_navRoot$$1_newTab_tabbar$$2$$) {
      var $tab$$6$$, $content$$39$$, $index$$282_tabAfter$$ = -1;
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$.tab && $contentAfter_navRoot$$1_newTab_tabbar$$2$$.content ? ($content$$39$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.content, $tab$$6$$ = this.$_wrapLi$($contentAfter_navRoot$$1_newTab_tabbar$$2$$.tab, this.$_getUniqueId$($content$$39$$)), void 0 !== $contentAfter_navRoot$$1_newTab_tabbar$$2$$.index && ($index$$282_tabAfter$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.index)) : ($content$$39$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$, 
      $tab$$6$$ = this.$_wrapLi$($$$$65$$($contentAfter_navRoot$$1_newTab_tabbar$$2$$).find("\x3e :first-child"), this.$_getUniqueId$($content$$39$$)));
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = this.element.children(".oj-tabs-nav-root");
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.hasClass("oj-tabs-nav") ? $contentAfter_navRoot$$1_newTab_tabbar$$2$$ : $contentAfter_navRoot$$1_newTab_tabbar$$2$$.length ? $contentAfter_navRoot$$1_newTab_tabbar$$2$$.find(".oj-tabs-nav") : this.element.children(".oj-tabs-nav");
      var $isNew$$6$$ = !1;
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$.length || ($contentAfter_navRoot$$1_newTab_tabbar$$2$$ = $$$$65$$("\x3cul\x3e"), $isNew$$6$$ = !0);
      $isNew$$6$$ && $contentAfter_navRoot$$1_newTab_tabbar$$2$$.prependTo(this.element);
      0 <= $index$$282_tabAfter$$ && $index$$282_tabAfter$$ < $contentAfter_navRoot$$1_newTab_tabbar$$2$$.children().length ? ($index$$282_tabAfter$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.children(":eq(" + $index$$282_tabAfter$$ + ")"), $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = this.element.children("#" + $index$$282_tabAfter$$.attr("aria-controls")), $index$$282_tabAfter$$.before($tab$$6$$), $contentAfter_navRoot$$1_newTab_tabbar$$2$$.before($content$$39$$)) : ($tab$$6$$.appendTo($contentAfter_navRoot$$1_newTab_tabbar$$2$$), 
      $content$$39$$.appendTo(this.element));
      this.refresh();
      0 == this.$active$.length && this.$_fireSelectEvents$(0);
      var $self$$220$$ = this;
      window.setTimeout(function() {
        $self$$220$$.$tabs$ && $tab$$6$$[0].scrollIntoView(!1);
      }, 0);
    }, $_setupTouchReorder$:function() {
      this.$_touchProxy$ = $oj$$72$$.$_TouchProxy$.$addTouchListeners$(this.$tablist$);
    }, $_tearDownTouchReorder$:function() {
      $oj$$72$$.$_TouchProxy$.$removeTouchListeners$(this.$tablist$);
    }, $_setupReorder$:function() {
      if (this.options.reorderable) {
        var $self$$221$$ = this;
        $oj$$72$$.$DomUtils$.$isTouchSupported$() && this.$_setupTouchReorder$();
        this.$tablist$.sortable({axis:$self$$221$$.$_isHorizontal$() ? "x" : "y", stop:function($event$$642$$, $ui$$40$$) {
          var $mvTab$$ = $ui$$40$$.item;
          $self$$221$$.$_doReorder$($event$$642$$, $mvTab$$, $mvTab$$.prev()) || $self$$221$$.$tablist$.sortable("cancel");
        }});
        this.$_sortable$ = !0;
      } else {
        this.$_tearDownTouchReorder$(), this.$_sortable$ = !1;
      }
    }, $_InitOptions$:function($originalDefaults$$19$$, $constructorOptions$$21$$) {
      var $edge$$15$$ = $constructorOptions$$21$$.edge;
      this.$_edgeSpecified$ = "top" == $edge$$15$$ || "bottom" == $edge$$15$$ || "start" == $edge$$15$$ || "end" == $edge$$15$$;
      this._super($originalDefaults$$19$$, $constructorOptions$$21$$);
    }, $_orientationToEdge$:function($value$$318$$) {
      return "horizontal" == $value$$318$$ ? "top" : "vertical" == $value$$318$$ ? "start" : null;
    }, $_setupEdge$:function($edge$$16$$) {
      if (this.$_initialRender$ && !this.$_edgeSpecified$ || !$edge$$16$$) {
        $edge$$16$$ = this.$_orientationToEdge$(this.options.orientation);
      }
      var $oEdge$$ = this.options.edge;
      this.element.removeClass("oj-tabs-top oj-tabs-bottom oj-tabs-start oj-tabs-end");
      switch($edge$$16$$) {
        case "top":
        ;
        case "bottom":
          !this.$panels$ || "start" != $oEdge$$ && "end" != $oEdge$$ || this.element.removeClass("oj-tabs-vertical oj-helper-clearfix");
          this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");
          "bottom" == $edge$$16$$ ? this.element.addClass("oj-tabs-bottom") : this.element.addClass("oj-tabs-top");
          this.$_initialRender$ ? this.options.orientation = "horizontal" : "horizontal" != this.options.orientation && this.option("orientation", "horizontal", {_context:{$internalSet$:!0}, changed:!0});
          break;
        case "start":
        ;
        case "end":
          !this.$panels$ || "top" != $oEdge$$ && "bottom" != $oEdge$$ || this.element.removeClass("oj-tabs-horizontal");
          this.element.addClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");
          "end" == $edge$$16$$ ? this.element.addClass("oj-tabs-end") : this.element.addClass("oj-tabs-start");
          this.$_initialRender$ ? this.options.orientation = "vertical" : "vertical" != this.options.orientation && this.option("orientation", "vertical", {_context:{$internalSet$:!0}, changed:!0});
          break;
        default:
          return!1;
      }
      this.$_initialRender$ ? this.options.edge = $edge$$16$$ : this.options.edge != $edge$$16$$ && this.option("edge", $edge$$16$$, {_context:{$internalSet$:!0}, changed:!0});
      return!0;
    }, $_getTabbarWrapper$:function() {
      var $ulParent$$ = this.$tablist$.parent();
      $ulParent$$.hasClass("oj-tabs-conveyor") || ($ulParent$$ = this.$tablist$.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"), (0 < this.element.children(".oj-tabs-facet").length ? $ulParent$$.wrap("\x3cdiv\x3e").wrap("\x3cdiv\x3e").parent().parent().addClass("oj-tabs-conveyorbelt-wrapper") : $ulParent$$).wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-nav-root").uniqueId().attr("id"));
      return $ulParent$$;
    }, $_addPrefixId$:function($elem$$164$$) {
      0 > $elem$$164$$.id.indexOf("ojtabs-id_") && $$$$65$$($elem$$164$$).attr("id", "ojtabs-id_" + $elem$$164$$.id);
    }, getNodeBySubId:function($index$$283_locator$$57$$) {
      if (null == $index$$283_locator$$57$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$61$$ = $index$$283_locator$$57$$.subId;
      $index$$283_locator$$57$$ = $index$$283_locator$$57$$.index;
      if ("oj-conveyorbelt" != $subId$$61$$ && ("number" !== typeof $index$$283_locator$$57$$ || 0 > $index$$283_locator$$57$$ || $index$$283_locator$$57$$ >= this.$panels$.length)) {
        return null;
      }
      switch($subId$$61$$) {
        case "oj-conveyorbelt":
          return this.$conveyor$ ? this.$conveyor$[0] : null;
        case "oj-tabs-panel":
          return this.$_getPanelForTab$(this.$tabs$[$index$$283_locator$$57$$])[0];
        case "oj-tabs-tab":
          return this.$tabs$[$index$$283_locator$$57$$];
        case "oj-tabs-title":
          return $$$$65$$(this.$tabs$[$index$$283_locator$$57$$]).find(".oj-tabs-title")[0];
        case "oj-tabs-close-icon":
        ;
        case "oj-tabs-close":
          return $$$$65$$(this.$tabs$[$index$$283_locator$$57$$]).find(".oj-tabs-close-icon")[0];
      }
      return null;
    }, getSubIdByNode:function($node$$127$$) {
      for (var $panels_title$$11$$ = [], $i$$446_tabIndex$$5$$ = 0;$i$$446_tabIndex$$5$$ < this.$tabs$.length;$i$$446_tabIndex$$5$$++) {
        $panels_title$$11$$.push(this.$_getPanelForTab$(this.$tabs$[$i$$446_tabIndex$$5$$])[0]);
      }
      for (var $closeIcon_panelIndex$$ = $i$$446_tabIndex$$5$$ = -1, $currentNode$$4$$ = $node$$127$$;$currentNode$$4$$;) {
        if (this.$conveyor$ && $currentNode$$4$$ === this.$conveyor$[0]) {
          return{subId:"oj-conveyorbelt"};
        }
        $i$$446_tabIndex$$5$$ = Array.prototype.indexOf.call(this.$tabs$, $currentNode$$4$$);
        if (-1 != $i$$446_tabIndex$$5$$) {
          break;
        }
        $closeIcon_panelIndex$$ = $panels_title$$11$$.indexOf($currentNode$$4$$);
        if (-1 != $closeIcon_panelIndex$$) {
          return{subId:"oj-tabs-panel", index:$closeIcon_panelIndex$$};
        }
        $currentNode$$4$$ = $currentNode$$4$$.parentElement;
      }
      if (-1 != $i$$446_tabIndex$$5$$) {
        for ($panels_title$$11$$ = this.getNodeBySubId({subId:"oj-tabs-title", index:$i$$446_tabIndex$$5$$}), $closeIcon_panelIndex$$ = this.getNodeBySubId({subId:"oj-tabs-close", index:$i$$446_tabIndex$$5$$}), $currentNode$$4$$ = $node$$127$$;$currentNode$$4$$;) {
          if ($currentNode$$4$$ === $panels_title$$11$$) {
            return{subId:"oj-tabs-title", index:$i$$446_tabIndex$$5$$};
          }
          if ($currentNode$$4$$ === $closeIcon_panelIndex$$) {
            return{subId:"oj-tabs-close", index:$i$$446_tabIndex$$5$$};
          }
          if ($currentNode$$4$$ === this.$tabs$[$i$$446_tabIndex$$5$$]) {
            return{subId:"oj-tabs-tab", index:$i$$446_tabIndex$$5$$};
          }
          $currentNode$$4$$ = $currentNode$$4$$.parentElement;
        }
      }
      return null;
    }, $_getConveyorWrapperMaxWidth$:function() {
      return this.$_originalWidth$ + 10;
    }, $_getTabsWidth$:function() {
      var $tabbar$$3$$ = this.element.find(".oj-tabs-conveyorbelt-wrapper");
      return $tabbar$$3$$.length ? $tabbar$$3$$[0].clientWidth : this.element[0].clientWidth;
    }, $_isOverflow$:function() {
      return this.$_originalWidth$ > this.$_getTabsWidth$();
    }, $_getTabMaxWidth$:function() {
      var $max$$9$$ = Math.floor(this.$_getTabsWidth$() / this.$tabs$.length);
      this.options.removable && ($max$$9$$ -= 28);
      return $max$$9$$;
    }, $_applyTabMaxWidth$:function() {
      var $maxWidth$$2$$ = this.$_getTabMaxWidth$();
      this.$tablist$.find(".oj-tabs-title").each(function() {
        $$$$65$$(this).css("max-width", "" + $maxWidth$$2$$ + "px").addClass("oj-tabs-title-overflow");
      });
    }, $_removeTabMaxWidth$:function() {
      this.$tablist$.find(".oj-tabs-title").each(function() {
        $$$$65$$(this).css("max-width", "").removeClass("oj-tabs-title-overflow");
      });
    }, $_logMessage$:function() {
    }, $_handleResize$:function() {
      this.$_isProgressive$() && (this.$_isOverflow$() ? this.$_applyTabMaxWidth$() : this.$_removeTabMaxWidth$());
    }, $_isProgressive$:function() {
      return "auto" == this.options.truncation || "progressive" == this.options.truncation;
    }, $_truncateBeforeOverflow$:function() {
      this.$_isHorizontal$() && 0 < this.$tabs$.length && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$72$$.$DomUtils$.$addResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !0, this.$_originalWidth$ = this.$_getTabbarWrapper$()[0].scrollWidth, this.$_isProgressive$() && this.$_isOverflow$() && this.$_applyTabMaxWidth$());
    }, $_NotifyShown$:function() {
      this._super();
      this.refresh();
    }, $_NotifyAttached$:function() {
      this._super();
      this.refresh();
    }, $_buildContextMenuItem$:function($cmd$$1$$) {
      return $$$$65$$("\x3ca\x3e").text(this.$getTranslatedString$($_arMenuKeyMap$$[$cmd$$1$$])).attr("href", "#").wrap("\x3cli\x3e").parent().attr("id", $_arMenuCmdMap$$[$cmd$$1$$]).addClass("oj-menu-item");
    }, $_menu_cut$:function($obj$$58$$) {
      if (!$obj$$58$$ || !$obj$$58$$.length) {
        return!1;
      }
      this.$_menu$.$cutTab$ = $obj$$58$$;
    }, $_menu_paste$:function($event$$643$$, $obj$$59$$, $pasteBefore$$2$$) {
      if (!$obj$$59$$ || !$obj$$59$$.length || !this.$_menu$.$cutTab$) {
        return!1;
      }
      var $mvTab$$1$$ = this.$_menu$.$cutTab$;
      this.$_menu$.$cutTab$ = !1;
      this.$_doReorder$($event$$643$$, $mvTab$$1$$, $obj$$59$$, $pasteBefore$$2$$);
    }, $_menu_remove$:function($event$$644$$, $obj$$60$$) {
      if (!$obj$$60$$ || !$obj$$60$$.length) {
        return!1;
      }
      var $anchor$$8$$ = this.$_getCloseIcons$($obj$$60$$);
      this.$_removeTabHandler$({target:$anchor$$8$$, currentTarget:$anchor$$8$$, preventDefault:$$$$65$$.noop}, $event$$644$$);
    }, $_handleContextMenuSelect$:function($ev$$5$$, $ui$$41$$) {
      var $id$$57$$ = $ui$$41$$ ? $ui$$41$$.item.attr("id") : void 0;
      "ojtabscut" === $id$$57$$ ? this.$_menu_cut$(this.$_menu$.tab) : "ojtabspastebefore" === $id$$57$$ ? this.$_menu_paste$($ev$$5$$, this.$_menu$.tab, !0) : "ojtabspasteafter" === $id$$57$$ ? this.$_menu_paste$($ev$$5$$, this.$_menu$.tab, !1) : "ojtabsremove" === $id$$57$$ && this.$_menu_remove$($ev$$5$$, this.$_menu$.tab);
    }, $_initMenu$:function($menu$$26_newVal$$5$$) {
      if ($menu$$26_newVal$$5$$ = $menu$$26_newVal$$5$$ || this.options.contextMenu) {
        var $t$$2$$ = $$$$65$$.type($menu$$26_newVal$$5$$);
        if ("function" == $t$$2$$) {
          try {
            $menu$$26_newVal$$5$$ = $menu$$26_newVal$$5$$();
          } catch ($e$$117$$) {
            $menu$$26_newVal$$5$$ = null;
          }
          $t$$2$$ = $$$$65$$.type($menu$$26_newVal$$5$$);
        }
        "string" == $t$$2$$ && $menu$$26_newVal$$5$$ && $$$$65$$($menu$$26_newVal$$5$$).length && (this.options.contextMenu = $menu$$26_newVal$$5$$);
      }
      this.$_addContextMenu$();
    }, $_addIfNotExist$:function($$ul$$, $itemList_menuItem$$3$$, $command$$13$$) {
      -1 == $itemList_menuItem$$3$$.indexOf($command$$13$$) && ($itemList_menuItem$$3$$ = this.$_buildContextMenuItem$($command$$13$$), $$ul$$.append($itemList_menuItem$$3$$));
    }, $_addContextMenu$:function() {
      var $$menuContainer$$1$$ = $$$$65$$(this.options.contextMenu);
      if ($$menuContainer$$1$$ || this.options.reorderable || this.options.removable) {
        var $self$$222$$ = this;
        if (0 == $$menuContainer$$1$$.length) {
          var $key$$183$$ = this.options.reorderable ? "labelReorder" : $_arMenuKeyMap$$.remove, $menuId$$ = this.element.uniqueId().attr("id") + "contextmenu", $$menuContainer$$1$$ = $$$$65$$("\x3cul\x3e");
          $$menuContainer$$1$$.css("display", "none").attr("id", $menuId$$).attr("aria-label", this.$getTranslatedString$($key$$183$$));
          $$$$65$$(document.body).append($$menuContainer$$1$$);
          $$menuContainer$$1$$.ojMenu();
          this.options.contextMenu = "#" + $menuId$$;
        }
        var $itemList$$1$$ = [];
        $$menuContainer$$1$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$65$$(this).children("a").length) {
            var $command$$14$$ = $$$$65$$(this).attr("data-oj-command").slice(8);
            $$$$65$$(this).replaceWith($self$$222$$.$_buildContextMenuItem$($command$$14$$));
            $$$$65$$(this).addClass("oj-menu-item");
            $itemList$$1$$.push($command$$14$$);
          }
        });
        this.options.reorderable && (this.$_addIfNotExist$($$menuContainer$$1$$, $itemList$$1$$, "cut"), this.$_addIfNotExist$($$menuContainer$$1$$, $itemList$$1$$, "paste-before"), this.$_addIfNotExist$($$menuContainer$$1$$, $itemList$$1$$, "paste-after"), this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$1$$.find("#ojtabspastebefore"), this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$1$$.find("#ojtabspasteafter"));
        this.options.removable && (this.$_addIfNotExist$($$menuContainer$$1$$, $itemList$$1$$, "remove"), this.$_menu$.$$elemRemove$ = $$menuContainer$$1$$.find("#ojtabsremove"));
        this.$_menu$.$$container$ = $$menuContainer$$1$$;
        $$menuContainer$$1$$.ojMenu("refresh");
        $$menuContainer$$1$$.on("ojselect", $$$$65$$.proxy(this.$_handleContextMenuSelect$, this));
      }
    }, $_clearMenu$:function() {
      var $menu$$27$$ = this.$_menu$;
      $menu$$27$$ && ($menu$$27$$.$$container$.off("ojselect"), $menu$$27$$.$$container$ = null);
    }, $_doReorder$:function($event$$645$$, $mvTab$$2$$, $prevTab$$, $pasteBefore$$3$$) {
      var $mvContent$$ = this.$_getPanelForTab$($mvTab$$2$$), $eventData$$28$$ = {tab:$mvTab$$2$$, content:$mvContent$$};
      if (!1 === this._trigger("beforeReorder", $event$$645$$, $eventData$$28$$)) {
        return!1;
      }
      var $mvInd_prevContent$$ = this.$tabs$.index($mvTab$$2$$);
      if ($prevTab$$.length) {
        if (this.$tabs$.index($prevTab$$) == $mvInd_prevContent$$) {
          return!0;
        }
        $mvInd_prevContent$$ = this.$_getPanelForTab$($prevTab$$);
        $pasteBefore$$3$$ ? ($prevTab$$.before($mvTab$$2$$), $mvInd_prevContent$$.before($mvContent$$)) : ($prevTab$$.after($mvTab$$2$$), $mvInd_prevContent$$.after($mvContent$$));
      } else {
        if (0 < this.$tabs$.length) {
          if (0 == $mvInd_prevContent$$) {
            return!0;
          }
          this.$tabs$.first().before($mvTab$$2$$);
          this.$panels$.first().before($mvContent$$);
        }
      }
      this.$_updateDisabledTabs$();
      this.refresh();
      $mvTab$$2$$.focus();
      this._trigger("reorder", $event$$645$$, $eventData$$28$$);
      return!0;
    }, $_sanitizeSelector$:function($hash$$7$$) {
      return $hash$$7$$ ? $hash$$7$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "";
    }, $_getPanelForTab$:function($tab$$7$$) {
      return this.element.find(this.$_sanitizeSelector$("#" + $$$$65$$($tab$$7$$).attr("aria-controls")));
    }, $_getUniqueId$:function($panel$$5$$) {
      var $id$$58$$ = $panel$$5$$.attr("id");
      $id$$58$$ || ($id$$58$$ = $panel$$5$$.uniqueId().attr("id"), $panel$$5$$.addClass("oj-tabs-gen-id"));
      return $id$$58$$;
    }, $_getTab$:function($idOrIndex$$1_index$$286$$) {
      $idOrIndex$$1_index$$286$$ = this.$_getIndexByTabOrContentId$($idOrIndex$$1_index$$286$$);
      if (-1 !== $idOrIndex$$1_index$$286$$) {
        return $$$$65$$(this.$tabs$[$idOrIndex$$1_index$$286$$]);
      }
    }, $_getIndexByTabOrContentId$:function($idOrIndex$$2_selector$$45_tabOrContent$$) {
      var $index$$287$$ = -1;
      "number" === typeof $idOrIndex$$2_selector$$45_tabOrContent$$ ? 0 <= $idOrIndex$$2_selector$$45_tabOrContent$$ && $idOrIndex$$2_selector$$45_tabOrContent$$ < this.$tabs$.length && ($index$$287$$ = $idOrIndex$$2_selector$$45_tabOrContent$$) : "string" === typeof $idOrIndex$$2_selector$$45_tabOrContent$$ && ($idOrIndex$$2_selector$$45_tabOrContent$$ = this.$_sanitizeSelector$($idOrIndex$$2_selector$$45_tabOrContent$$), $oj$$72$$.$DomUtils$.$isValidIdentifier$($idOrIndex$$2_selector$$45_tabOrContent$$) && 
      ($idOrIndex$$2_selector$$45_tabOrContent$$ = this.element.find("#" + $idOrIndex$$2_selector$$45_tabOrContent$$), $idOrIndex$$2_selector$$45_tabOrContent$$.length && ($index$$287$$ = this.$tabs$.index($idOrIndex$$2_selector$$45_tabOrContent$$), -1 == $index$$287$$ && ($index$$287$$ = this.$panels$.index($idOrIndex$$2_selector$$45_tabOrContent$$)))));
      return $index$$287$$;
    }, $_getSelectedIndex$:function() {
      var $selected$$24$$ = this.options.selected;
      return "number" === typeof $selected$$24$$ ? $selected$$24$$ : this.$tabs$.index($$$$65$$("#" + $selected$$24$$));
    }, $_getTabIdOrIndex$:function($tab$$8$$) {
      if ($tab$$8$$) {
        var $id$$59$$ = $tab$$8$$.attr("id");
        return $id$$59$$ ? $id$$59$$ : this.$tabs$.index($tab$$8$$);
      }
    }, $_setOjDisabledOnTab$:function($disTabs$$) {
      var $children$$32$$ = (this.$tablist$ ? this.$tablist$ : this.element.children("ul")).children("li");
      $children$$32$$.removeClass("oj-disabled").removeAttr("aria-disabled");
      var $arr$$23$$ = [];
      if ($disTabs$$ && 0 < $disTabs$$.length) {
        for (var $id$$60$$, $tab$$9$$, $i$$447$$ = 0;$i$$447$$ < $disTabs$$.length;$i$$447$$++) {
          if ($tab$$9$$ = this.$_getTab$($disTabs$$[$i$$447$$])) {
            $tab$$9$$.addClass("oj-disabled"), $tab$$9$$.attr("aria-disabled", "true"), $tab$$9$$.find(".oj-tabs-anchor").removeAttr("href"), $id$$60$$ = $tab$$9$$.attr("id"), $arr$$23$$.push($id$$60$$ ? $id$$60$$ : $children$$32$$.index($tab$$9$$));
          }
        }
      }
      this.$_updateDisabledTabs$($arr$$23$$);
    }, $_updateDisabledTabs$:function($arr$$24$$) {
      if (!$arr$$24$$) {
        $arr$$24$$ = [];
        var $self$$223$$ = this;
        this.$tablist$.children().each(function() {
          var $tab$$10$$ = $$$$65$$(this);
          $tab$$10$$.hasClass("oj-disabled") && $arr$$24$$.push($self$$223$$.$_getTabIdOrIndex$($tab$$10$$));
        });
      }
      $oj$$72$$.$Object$.$_compareSet$(this.options.disabledTabs, $arr$$24$$) || (this.$_initialRender$ ? this.options.disabledTabs = $arr$$24$$ : this.option({disabledTabs:$arr$$24$$}, {_context:{$internalSet$:!0, $writeback$:!0}, changed:!0}));
    }, $_isInATab$:function($element$$166$$) {
      var $found$$8$$ = !1;
      this.$tabs$.each(function() {
        if (this === $element$$166$$ || $$$$65$$.contains(this, $element$$166$$)) {
          return $found$$8$$ = !0, !1;
        }
      });
      return $found$$8$$;
    }, $_createTabbar$:function() {
      var $contentIds$$ = this.$_getContentIds$(), $self$$224$$ = this, $tabbar$$5$$ = this.element.children("ul");
      0 < $tabbar$$5$$.length && $tabbar$$5$$.children("li").each(function($index$$289$$) {
        $self$$224$$.$_wrapLi$($$$$65$$(this), $contentIds$$[$index$$289$$]);
      });
    }, $_createTabbarFromOldMarkup$:function() {
      var $tabbar$$6$$ = this.element.children("ul");
      if (0 == $tabbar$$6$$.length) {
        var $self$$225$$ = this, $contentIds$$1$$ = this.$_getContentIds$(), $tabbar$$6$$ = $$$$65$$("\x3cul\x3e");
        this.element.children().each(function($index$$290$$) {
          $self$$225$$.$_wrapLi$($$$$65$$(this).find("\x3e :first-child"), $contentIds$$1$$[$index$$290$$]).appendTo($tabbar$$6$$);
        });
        $tabbar$$6$$.prependTo(this.element);
      }
    }, $_addFacets$:function() {
      var $navRoot$$3$$ = this.element.children(".oj-tabs-nav-root"), $self$$226$$ = this, $tabbarWrapper$$ = $navRoot$$3$$.children(".oj-tabs-conveyorbelt-wrapper");
      $navRoot$$3$$.index();
      this.element.children(".oj-tabs-facet").each(function() {
        var $facet$$1$$ = $$$$65$$(this), $facetId$$ = $self$$226$$.$_getUniqueId$($facet$$1$$);
        0 == $navRoot$$3$$.find("#" + $facetId$$).length && ($facet$$1$$.hasClass("oj-start") ? $tabbarWrapper$$.before($facet$$1$$) : $facet$$1$$.appendTo($navRoot$$3$$));
      });
    }, $_getContentIds$:function() {
      var $contentIds$$2$$ = [], $self$$227$$ = this;
      this.element.children(":not(ul):not(.oj-tabs-facet)").each(function() {
        var $panel$$6$$ = $$$$65$$(this);
        $panel$$6$$.addClass("oj-tabs-panel");
        $contentIds$$2$$.push($self$$227$$.$_getUniqueId$($panel$$6$$));
      });
      return $contentIds$$2$$;
    }});
  })();
});
