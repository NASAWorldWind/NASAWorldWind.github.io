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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$52$$, $$$$48$$) {
  (function() {
    $oj$$52$$.$__registerWidget$("oj.ojMenu", $$$$48$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", options:{menuSelector:"ul", openOptions:{initialFocus:"menu", launcher:null, position:{my:"start top", at:"start bottom", collision:"flipfit"}}, submenuOpenOptions:{position:{my:"start top", at:"end top", collision:"flipfit"}}, beforeOpen:null, close:null, open:null, select:null}, _ComponentCreate:function() {
      this._super();
      this._focusForTesting = this.$_focus$;
      this._nextForTesting = this.$_next$;
      this._selectForTesting = this.$_select$;
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$535$$) {
        this.options.disabled && $event$$535$$.preventDefault();
      }, click:function($event$$536$$) {
        this.options.disabled && $event$$536$$.preventDefault();
      }, keydown:function($event$$537$$) {
        !this.options.disabled || $event$$537$$.keyCode !== $$$$48$$.ui.keyCode.ESCAPE && $event$$537$$.keyCode !== $$$$48$$.ui.keyCode.TAB || ($event$$537$$.keyCode === $$$$48$$.ui.keyCode.TAB && $event$$537$$.preventDefault(), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$537$$));
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      var $handleMouseEnterMenuItem$$ = function($event$$538$$) {
        if (!this.$focusHandled$) {
          this.$focusHandled$ = !0;
          var $target$$95$$ = $$$$48$$($event$$538$$.currentTarget);
          $target$$95$$.siblings().removeClass("oj-focus-ancestor");
          this.$_focus$($event$$538$$, $target$$95$$);
        }
      }.bind(this);
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$539$$) {
        $event$$539$$.preventDefault();
      }, "click .oj-disabled \x3e a":function($event$$540$$) {
        $event$$540$$.preventDefault();
      }, click:function() {
        this.$mouseHandled$ = !1;
      }, touchstart:function() {
        this.$focusHandled$ = !1;
      }, mouseover:function() {
        this.$focusHandled$ = !1;
      }, "click .oj-menu-item:has(a)":function($event$$544$$) {
        var $target$$96$$ = $$$$48$$($event$$544$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$96$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, $event$$544$$.preventDefault(), this.$active$ && this.$active$.closest($target$$96$$).length && this.$active$.get(0) != $target$$96$$.get(0) || ($target$$96$$.has(".oj-menu").length ? this.$_expand$($event$$544$$) : (this.$_select$($event$$544$$), this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.$active$ && 1 === this.$active$.parents(".oj-menu").length && clearTimeout(this.$timer$)))));
      }, "mouseenter .oj-menu-item":$handleMouseEnterMenuItem$$, "touchstart .oj-menu-item":$handleMouseEnterMenuItem$$, mouseleave:function($event$$545$$) {
        this.$_collapse$($event$$545$$, "eventSubtree");
      }, "mouseleave .oj-menu":function($event$$546$$) {
        this.$_collapse$($event$$546$$, "eventSubtree");
      }, focus:function($event$$547$$, $keepActiveItem$$) {
        if (!$keepActiveItem$$) {
          var $item$$125$$ = this.$active$ || this.element.children(".oj-menu-item").eq(0);
          this.$_focus$($event$$547$$, $item$$125$$);
        }
      }, keydown:this.$_keydown$, keyup:function($event$$548$$) {
        if ($event$$548$$.keyCode == $$$$48$$.ui.keyCode.ENTER || $event$$548$$.keyCode == $$$$48$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1;
        }
      }});
      this.$_usingCallback$ = $$$$48$$.proxy(this.$_usingHandler$, this);
      this.$_setup$();
    }, $__contextMenuPressHoldJustEnded$:function($val$$60$$) {
      if (arguments.length) {
        $_contextMenuPressHoldJustEnded$$ = $val$$60$$;
      } else {
        return $_contextMenuPressHoldJustEnded$$;
      }
    }, $_clickAwayHandler$:function($event$$549$$) {
      if (("focus" === $event$$549$$.type || "mousedown" === $event$$549$$.type || "touchstart" === $event$$549$$.type || 93 == $event$$549$$.which || 121 == $event$$549$$.which && $event$$549$$.shiftKey || 93 == $event$$549$$.keyCode) && ("mousedown" !== $event$$549$$.type || !$_contextMenuPressHoldJustEnded$$)) {
        var $openPopupMenus$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
        $$$$48$$.each($openPopupMenus$$, function($index$$245$$, $menu$$19$$) {
          !$$$$48$$($event$$549$$.target).closest($menu$$19$$.element).length && ("keydown" === $event$$549$$.type || "mousedown" === $event$$549$$.type && 3 === $event$$549$$.which || !$$$$48$$($event$$549$$.target).closest($menu$$19$$.$_launcher$).length || $menu$$19$$.$_launcherClickShouldDismiss$ && ("mousedown" === $event$$549$$.type && 3 !== $event$$549$$.which || "touchstart" === $event$$549$$.type)) && ($menu$$19$$.$_collapse$($event$$549$$, "eventSubtree"), $menu$$19$$.$_launcher$ && $menu$$19$$.$__dismiss$($event$$549$$));
        });
      }
    }, _setOption:function($key$$170$$, $value$$298$$) {
      this._superApply(arguments);
      this.$_launcher$ || ("submenuOpenOptions" === $key$$170$$ ? this.$_submenuPosition$ = $oj$$52$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$298$$.position, this.$isRtl$) : "submenuOpenOptions.position" === $key$$170$$ && (this.$_submenuPosition$ = $oj$$52$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$298$$, this.$isRtl$)));
    }, _destroy:function() {
      this.element.is(":visible") && this.$__dismiss$();
      clearTimeout(this.$timer$);
      delete this.$timer$;
      this.element.removeAttr("aria-activedescendant").removeClass("oj-component").find(".oj-menu").addBack().removeClass("oj-menu oj-menu-submenu oj-menu-icons oj-menu-text-only").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$159$$ = $$$$48$$(this);
        $elem$$159$$.data("oj-ojMenu-submenu-icon") && $elem$$159$$.remove();
      });
      this.element.find("a").removeAttr("aria-expanded");
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
      delete this.$_popupServiceEvents$;
      delete this.$_usingCallback$;
      var $closeDelayTimer$$1$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$1$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$1$$));
      this._super();
    }, $_keydown$:function($event$$550$$) {
      function $escape$$1$$($value$$299$$) {
        return $value$$299$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26");
      }
      var $match$$27_prev$$2$$, $activeItemId_character$$1$$, $skip$$3_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$550$$.keyCode) {
        case $$$$48$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$550$$);
          break;
        case $$$$48$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$550$$);
          break;
        case $$$$48$$.ui.keyCode.UP:
          this.$_previous$($event$$550$$);
          break;
        case $$$$48$$.ui.keyCode.DOWN:
          this.$_next$($event$$550$$);
          break;
        case $$$$48$$.ui.keyCode.LEFT:
        ;
        case $$$$48$$.ui.keyCode.RIGHT:
          $event$$550$$.keyCode === $$$$48$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.$active$ && !this.$active$.is(".oj-disabled") && this.$_expand$($event$$550$$) : this.$_collapse$($event$$550$$, "active");
          break;
        case $$$$48$$.ui.keyCode.ENTER:
        ;
        case $$$$48$$.ui.keyCode.SPACE:
          this.$_handleEnterSpace$($event$$550$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$203$$ = this;
          setTimeout(function() {
            $self$$203$$.$__spaceEnterDownInMenu$ = !1;
          }, 100);
          break;
        case $$$$48$$.ui.keyCode.TAB:
          $event$$550$$.preventDefault();
          this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$550$$);
          break;
        case $$$$48$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$1$$ = this.element.attr("aria-activedescendant"), $skip$$3_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$1$$ && !$$$$48$$("#" + $activeItemId_character$$1$$).is($skip$$3_topLevelAnchorSelector$$) ? this.$_collapse$($event$$550$$, "active") : this.$_focusLauncherAndDismiss$($event$$550$$)) : this.$_collapse$($event$$550$$, "active");
          break;
        default:
          $preventDefault$$ = !1, $match$$27_prev$$2$$ = this.$previousFilter$ || "", $activeItemId_character$$1$$ = String.fromCharCode($event$$550$$.keyCode), $skip$$3_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$1$$ === $match$$27_prev$$2$$ ? $skip$$3_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$1$$ = $match$$27_prev$$2$$ + $activeItemId_character$$1$$, $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$27_prev$$2$$ = 
          this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$48$$(this).children("a").text());
          }), $match$$27_prev$$2$$ = $skip$$3_topLevelAnchorSelector$$ && -1 !== $match$$27_prev$$2$$.index(this.$active$.next()) ? this.$active$.nextAll(".oj-menu-item") : $match$$27_prev$$2$$, $match$$27_prev$$2$$.length || ($activeItemId_character$$1$$ = String.fromCharCode($event$$550$$.keyCode), $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$27_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$48$$(this).children("a").text());
          })), $match$$27_prev$$2$$.length ? (this.$_focus$($event$$550$$, $match$$27_prev$$2$$), 1 < $match$$27_prev$$2$$.length ? (this.$previousFilter$ = $activeItemId_character$$1$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$;
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$;
      }
      $preventDefault$$ && $event$$550$$.preventDefault();
    }, $_handleEnterSpace$:function($event$$551$$) {
      this.$active$ && !this.$active$.is(".oj-disabled") && (this.$active$.children("a[aria-haspopup\x3d'true']").length ? this.$_expand$($event$$551$$) : this.$_select$($event$$551$$));
    }, refresh:function() {
      this._super();
      this.$_setup$();
      var $element$$150$$ = this.element;
      if ($element$$150$$.is(":visible")) {
        var $position$$27$$ = $element$$150$$.data("oj-menu-position");
        $position$$27$$ && $element$$150$$.position($position$$27$$);
        $element$$150$$.find(".oj-menu").each(function() {
          var $menu$$20$$ = $$$$48$$(this);
          $menu$$20$$.is(":visible") && ($position$$27$$ = $menu$$20$$.data("oj-menu-position")) && $menu$$20$$.position($position$$27$$);
        });
      }
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_submenuPosition$ = $oj$$52$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.submenuOpenOptions.position, this.$isRtl$);
      var $self$$204$$ = this, $submenus$$ = this.element.find(this.options.menuSelector), $menus$$ = $submenus$$.add(this.element), $children$$28$$ = $menus$$.children();
      $children$$28$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$28$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$28$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$126$$ = $$$$48$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$126$$.text()) || $item$$126$$.addClass("oj-menu-divider").attr("role", "separator");
      });
      $children$$28$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$28$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      $submenus$$.filter(":not(.oj-menu)").addClass("oj-menu oj-menu-submenu").hide().attr({role:this.role, "aria-hidden":"true"}).each(function() {
        var $menu$$21$$ = $$$$48$$(this), $item$$127_itemId$$1$$ = $self$$204$$.$_getSubmenuAnchor$($menu$$21$$), $submenuIcon$$ = $$$$48$$("\x3cspan\x3e");
        $submenuIcon$$.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon", !0);
        $item$$127_itemId$$1$$.attr("aria-haspopup", "true").attr("aria-expanded", "false").append($submenuIcon$$);
        $item$$127_itemId$$1$$ = $item$$127_itemId$$1$$.attr("id");
        $menu$$21$$.attr("aria-labelledby", $item$$127_itemId$$1$$);
      });
      $menus$$.each(function() {
        var $menu$$22$$ = $$$$48$$(this), $iconCount$$ = $menu$$22$$.children().children().children(".oj-menu-item-icon").length;
        $menu$$22$$.toggleClass("oj-menu-icons", !!$iconCount$$).toggleClass("oj-menu-text-only", !$iconCount$$);
      });
      this.$active$ && !$$$$48$$.contains(this.element[0], this.$active$[0]) && this.$_blur$();
    }, $_getSubmenuAnchor$:function($submenu$$) {
      return $submenu$$.prev("a");
    }, $_itemRole$:function() {
      return "menuitem";
    }, $_addDividers$:function($menuItem$$1$$) {
      return $menuItem$$1$$.add($menuItem$$1$$.prev(".oj-menu-divider")).add($menuItem$$1$$.next(".oj-menu-divider"));
    }, $_focus$:function($event$$552$$, $item$$128$$) {
      $event$$552$$ && "focus" === $event$$552$$.type || clearTimeout(this.$timer$);
      $item$$128$$ = $item$$128$$.first();
      this.$_makeActive$($item$$128$$, $event$$552$$);
      var $nested$$1_parentMenuItem$$ = $item$$128$$.parent().closest(".oj-menu-item");
      this.$_addDividers$($nested$$1_parentMenuItem$$).addClass("oj-focus-ancestor");
      $event$$552$$ && "keydown" === $event$$552$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
      }, this.delay);
      $nested$$1_parentMenuItem$$ = $item$$128$$.children(".oj-menu");
      $nested$$1_parentMenuItem$$.length && $event$$552$$ && /^mouse/.test($event$$552$$.type) && !this.$active$.hasClass("oj-disabled") && this.$_startOpening$($nested$$1_parentMenuItem$$);
      this.$activeMenu$ = $item$$128$$.parent();
    }, $_makeActive$:function($item$$129$$, $event$$553$$) {
      if (!$item$$129$$.is(this.$active$)) {
        var $previousItem$$2$$ = this.$active$ ? this.$active$ : $$$$48$$(), $anchor$$2$$ = $item$$129$$.children("a");
        this.$active$ = $item$$129$$;
        this.element.attr("aria-activedescendant", $anchor$$2$$.attr("id"));
        this.$_addDividers$($previousItem$$2$$).removeClass("oj-focus");
        this.$_addDividers$($item$$129$$).addClass("oj-focus");
        this._trigger("_activeItem", $event$$553$$, {previousItem:$previousItem$$2$$, item:$item$$129$$, privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_removeActive$:function($event$$554$$) {
      if (this.$active$) {
        var $previousItem$$3$$ = this.$active$;
        this.$active$ = null;
        this.element.removeAttr("aria-activedescendant");
        this.$_addDividers$($previousItem$$3$$).removeClass("oj-focus");
        this._trigger("_activeItem", $event$$554$$, {previousItem:$previousItem$$3$$, item:$$$$48$$(), privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_blur$:function($event$$555$$) {
      clearTimeout(this.$timer$);
      this.$_removeActive$($event$$555$$);
    }, $_focusLauncherAndDismiss$:function($event$$556$$, $selectUi$$) {
      this.$_launcher$.focus();
      this.$__dismiss$($event$$556$$, $selectUi$$);
    }, $__dismiss$:function($event$$557$$, $selectUi$$1$$) {
      var $isOpen$$1$$ = this.element.is(":visible"), $psOptions$$5$$ = {};
      $psOptions$$5$$[$oj$$52$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
      $oj$$52$$.$PopupService$.$getInstance$().close($psOptions$$5$$);
      this.element.removeData("oj-menu-position");
      this.$_launcher$ = void 0;
      $selectUi$$1$$ && ($event$$557$$ = this.$_trigger2$("select", $event$$557$$, $selectUi$$1$$).event);
      $isOpen$$1$$ && this._trigger("close", $event$$557$$, {});
      this.$_currentOpenOptions$ = null;
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, getCurrentOpenOptions:function() {
      return $$$$48$$.extend(!0, {}, this.$_currentOpenOptions$ || this.options.openOptions);
    }, open:function($event$$558$$, $initialFocus_openOptions$$5$$, $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$) {
      $initialFocus_openOptions$$5$$ = $$$$48$$.extend({}, this.options.openOptions, $initialFocus_openOptions$$5$$);
      $initialFocus_openOptions$$5$$.position = $$$$48$$.extend({}, $initialFocus_openOptions$$5$$.position);
      $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$ = $$$$48$$.extend({}, this.options.submenuOpenOptions, $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$);
      var $launcher$$9_oldOpenOptions$$ = this.$_currentOpenOptions$;
      this.$_currentOpenOptions$ = $initialFocus_openOptions$$5$$;
      $oj$$52$$.$PositionUtils$.$_normalizeEventForPosition$($event$$558$$);
      this.$_launcherClickShouldDismiss$ = this.$__openingContextMenu$;
      var $beforeOpenResults_position$$28$$ = !this.$_trigger2$("beforeOpen", $event$$558$$, {openOptions:$initialFocus_openOptions$$5$$});
      if ($beforeOpenResults_position$$28$$.proceed) {
        this.$_currentOpenOptions$ = $launcher$$9_oldOpenOptions$$;
      } else {
        if (this.element.is(":visible") && (this.$_currentOpenOptions$ = $launcher$$9_oldOpenOptions$$, this.$__dismiss$($beforeOpenResults_position$$28$$.event), this.$_currentOpenOptions$ = $initialFocus_openOptions$$5$$), $launcher$$9_oldOpenOptions$$ = $initialFocus_openOptions$$5$$.launcher, ($launcher$$9_oldOpenOptions$$ = "string" === $$$$48$$.type($launcher$$9_oldOpenOptions$$) ? $$$$48$$($launcher$$9_oldOpenOptions$$) : $launcher$$9_oldOpenOptions$$) && $launcher$$9_oldOpenOptions$$.length) {
          if ($beforeOpenResults_position$$28$$ = $oj$$52$$.$PositionUtils$.$normalizeHorizontalAlignment$($initialFocus_openOptions$$5$$.position, this.$isRtl$), $beforeOpenResults_position$$28$$.of = $oj$$52$$.$PositionUtils$.$normalizePositionOf$($beforeOpenResults_position$$28$$.of, $launcher$$9_oldOpenOptions$$, $event$$558$$), null == $beforeOpenResults_position$$28$$.of) {
            $oj$$52$$.$Logger$.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call."), this.$_currentOpenOptions$ = null;
          } else {
            var $currentMenu$$ = this.element[0], $openPopupMenus$$1$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
            $$$$48$$.each($openPopupMenus$$1$$, function($index$$246$$, $menu$$23$$) {
              $menu$$23$$.element[0] !== $currentMenu$$ && ($menu$$23$$.$_collapse$($event$$558$$, "eventSubtree"), $menu$$23$$.$_launcher$ && $menu$$23$$.$__dismiss$($event$$558$$));
            });
            this.$_submenuPosition$ = $oj$$52$$.$PositionUtils$.$normalizeHorizontalAlignment$($focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$.position, this.$isRtl$);
            $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$ = this.$_usingCallback$;
            $$$$48$$.isFunction($beforeOpenResults_position$$28$$.using) && $beforeOpenResults_position$$28$$.using !== $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$ && ($beforeOpenResults_position$$28$$.origUsing = $beforeOpenResults_position$$28$$.using);
            $beforeOpenResults_position$$28$$.using = $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$;
            $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$ = {};
            $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$[$oj$$52$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
            $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$[$oj$$52$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$9_oldOpenOptions$$;
            $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$[$oj$$52$$.$PopupService$.$OPTION$.$POSITION$] = $beforeOpenResults_position$$28$$;
            $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$[$oj$$52$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
            $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$[$oj$$52$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-menu-layer";
            $oj$$52$$.$PopupService$.$getInstance$().open($focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$);
            this.element.data("oj-menu-position", $beforeOpenResults_position$$28$$);
            $initialFocus_openOptions$$5$$ = $initialFocus_openOptions$$5$$.initialFocus;
            (($focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$ = "firstItem" === $initialFocus_openOptions$$5$$) || "menu" === $initialFocus_openOptions$$5$$) && this.element.focus();
            $focusFirstItem_psOptions$$6_submenuOpenOptions$$1_usingCallback$$ ? this.$_focus$($event$$558$$, this.element.children().first()) : this.$_blur$($event$$558$$);
            this.$_launcher$ = $launcher$$9_oldOpenOptions$$;
            $_openPopupMenus$$.push(this);
            this._trigger("open", $event$$558$$, {});
          }
        } else {
          $oj$$52$$.$Logger$.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call."), this.$_currentOpenOptions$ = null;
        }
      }
    }, $_startOpening$:function($submenu$$1$$) {
      clearTimeout(this.$timer$);
      "true" === $submenu$$1$$.attr("aria-hidden") && (this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
        this.$_open$($submenu$$1$$);
      }, this.delay));
    }, $_open$:function($submenu$$2$$) {
      var $position$$29$$ = $$$$48$$.extend({of:this.$active$}, this.$_submenuPosition$);
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$2$$.parents(".oj-menu")).hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      $submenu$$2$$.show().removeAttr("aria-hidden").position($position$$29$$).data("oj-menu-position", $position$$29$$);
      this.$_getSubmenuAnchor$($submenu$$2$$).attr("aria-expanded", "true");
      !this.$_launcher$ && 0 > $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.push(this);
    }, $__collapseAll$:function($event$$559$$, $all$$1$$, $delay$$3$$) {
      function $collapseMenu$$() {
        delete $self$$205$$.$timer$;
        var $currentMenu$$1$$ = $all$$1$$ ? $self$$205$$.element : $$$$48$$($event$$559$$ && $event$$559$$.target).closest($self$$205$$.element.find(".oj-menu"));
        $currentMenu$$1$$.length || ($currentMenu$$1$$ = $self$$205$$.element);
        $self$$205$$.$_close$($currentMenu$$1$$);
        $self$$205$$.$_blur$($event$$559$$);
        $self$$205$$.$activeMenu$ = $currentMenu$$1$$;
      }
      clearTimeout(this.$timer$);
      var $self$$205$$ = this;
      $delay$$3$$ ? this.$timer$ = this._delay($collapseMenu$$, $delay$$3$$) : $collapseMenu$$();
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.$active$ ? this.$active$.parent() : this.element);
      var $menus$$1$$ = $startMenu$$.find(".oj-menu");
      $menus$$1$$.hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      this.$_getSubmenuAnchor$($menus$$1$$).attr("aria-expanded", "false");
      $startMenu$$.find("oj-focus-ancestor").removeClass("oj-focus-ancestor");
      this.$_launcher$ || 0 <= $_openPopupMenus$$.indexOf(this) && $startMenu$$ === this.element && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_collapse$:function($event$$560$$, $which$$) {
      if (null == $which$$ || "active" === $which$$) {
        var $newItem$$ = this.$activeMenu$ && this.$activeMenu$.closest(".oj-menu-item", this.element);
        $newItem$$ && $newItem$$.length && (this.$_close$(), this.$_focus$($event$$560$$, $newItem$$));
      } else {
        "all" === $which$$ || "eventSubtree" === $which$$ ? this.$__collapseAll$($event$$560$$, "all" === $which$$, this.delay) : $oj$$52$$.$Logger$.warn("Invalid param " + $which$$ + " passed to Menu._collapse().  Ignoring the call.");
      }
    }, $_expand$:function($event$$561$$) {
      var $newItem$$1$$ = this.$active$ && this.$active$.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_focus$($event$$561$$, $newItem$$1$$);
      }));
    }, $_next$:function($event$$562$$) {
      this.$_move$("next", "first", $event$$562$$);
    }, $_previous$:function($event$$563$$) {
      this.$_move$("prev", "last", $event$$563$$);
    }, $_isFirstItem$:function() {
      return this.$active$ && !this.$active$.prevAll(".oj-menu-item").length;
    }, $_isLastItem$:function() {
      return this.$active$ && !this.$active$.nextAll(".oj-menu-item").length;
    }, $_move$:function($direction$$12$$, $filter$$5$$, $event$$564$$) {
      var $next$$8$$;
      this.$active$ && ($next$$8$$ = "first" === $direction$$12$$ || "last" === $direction$$12$$ ? this.$active$["first" === $direction$$12$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.$active$[$direction$$12$$ + "All"](".oj-menu-item").eq(0));
      $next$$8$$ && $next$$8$$.length && this.$active$ || ($next$$8$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$5$$]());
      this.$_focus$($event$$564$$, $next$$8$$);
    }, $_select$:function($event$$565$$) {
      if (!this.$active$ && $event$$565$$ && $event$$565$$.target) {
        var $menuItem$$2_ui$$32$$ = $$$$48$$($event$$565$$.target).closest(".oj-menu-item");
        $menuItem$$2_ui$$32$$.closest(this.element).length && this.$_makeActive$($menuItem$$2_ui$$32$$, $event$$565$$);
      }
      this.$active$ ? this.$active$.has(".oj-menu").length || this.$active$.is(".oj-disabled") ? $oj$$52$$.$Logger$.warn("Selecting a disabled menu item or parent menu item is not allowed.") : ($menuItem$$2_ui$$32$$ = {item:this.$active$}, this.$__collapseAll$($event$$565$$, !0), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$565$$, $menuItem$$2_ui$$32$$)) : $oj$$52$$.$Logger$.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$5$$ = this.$_popupServiceEvents$ = {};
        $events$$5$$[$oj$$52$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$48$$.proxy(this.$_closeAll$, this);
        $events$$5$$[$oj$$52$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$48$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$5$$[$oj$$52$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$48$$.proxy(this.refresh, this);
        $events$$5$$[$oj$$52$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $$$$48$$.proxy(this.$_clickAwayHandler$, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeAll$:function() {
      this.$_close$(this.element);
      this.$__dismiss$(null);
    }, $_usingHandler$:function($pos$$12$$, $props$$26$$) {
      var $origUsing_position$$30_rootMenu$$ = $props$$26$$.element.element;
      $origUsing_position$$30_rootMenu$$.css($pos$$12$$);
      ($origUsing_position$$30_rootMenu$$ = $origUsing_position$$30_rootMenu$$.data("oj-menu-position")) && ($origUsing_position$$30_rootMenu$$ = $origUsing_position$$30_rootMenu$$.origUsing) && $origUsing_position$$30_rootMenu$$($pos$$12$$, $props$$26$$);
      $oj$$52$$.$PositionUtils$.$isAligningPositionClipped$($props$$26$$) && (this.$_closeDelayTimer$ = this._delay($$$$48$$.proxy(this.$_closeAll$, this), 1));
    }});
    var $_openPopupMenus$$ = [], $_contextMenuPressHoldJustEnded$$ = !1;
  })();
});
