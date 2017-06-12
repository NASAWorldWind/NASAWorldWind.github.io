/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore", "jqueryui-amd/draggable", "jqueryui-amd/mouse"], function($oj$$40$$, $$$$37$$) {
  (function() {
    $oj$$40$$.$__registerWidget$("oj.ojDialog", $$$$37$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancelBehavior:"icon", dragAffordance:"title-bar", initialVisibility:"hide", modality:"modal", position:{my:"center", at:"center", of:window, collision:"fit", $using$:function($pos$$9$$) {
      var $topOffset$$ = $$$$37$$(this).css($pos$$9$$).offset().top;
      0 > $topOffset$$ && $$$$37$$(this).css("top", $pos$$9$$.top - $topOffset$$);
    }}, resizeBehavior:"resizable", role:"dialog", title:null, beforeClose:null, beforeOpen:null, close:null, focus:null, open:null, resize:null, resizeStart:null, resizeStop:null}, _ComponentCreate:function() {
      this._super();
      this.$originalCss$ = {display:this.element[0].style.display, width:this.element[0].style.width, height:this.element[0].style.height};
      this.$originalPosition$ = {parent:this.element.parent(), index:this.element.parent().children().index(this.element)};
      this.$originalTitle$ = this.element.attr("title");
      this.options.title = this.options.title || this.$originalTitle$;
      this.$_createWrapper$();
      this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.$uiDialog$);
      this.$userDefinedDialogHeader$ = !1;
      if (this.element.find(".oj-dialog").length) {
        var $that$$1$$ = this;
        this.element.find(".oj-dialog-header").each(function($index$$216$$, $li$$2$$) {
          var $dialogHeader$$ = $$$$37$$($li$$2$$);
          if (!$dialogHeader$$.closest(".oj-dialog-body").length) {
            return $that$$1$$.$_userDefinedHeader$ = $dialogHeader$$, $that$$1$$.$userDefinedDialogHeader$ = !0, !1;
          }
        });
      } else {
        this.$_userDefinedHeader$ = this.element.find(".oj-dialog-header"), this.$_userDefinedHeader$.length && (this.$userDefinedDialogHeader$ = !0);
      }
      this.$userDefinedDialogHeader$ ? (this.$_createPlaceHolderHeader$(this.$_userDefinedHeader$), this.$_userDefinedHeader$.prependTo(this.$uiDialog$), "icon" === this.options.cancelBehavior && (this.$_createCloseButton$(this.$_userDefinedHeader$), this.$_userDefinedTitle$ = this.$_userDefinedHeader$.find(".oj-dialog-title"), this.$_userDefinedTitle$.length && this.$_userDefinedTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$))) : this.$_createTitlebar$();
      this.$uiDialogFooter$ = this.element.children(".oj-dialog-footer");
      this.$_createPlaceHolderFooter$(this.$uiDialogFooter$);
      this.$uiDialogFooter$.length && (this.$uiDialogFooter$.addClass("oj-helper-clearfix"), this.$uiDialogFooter$.appendTo(this.$uiDialog$));
      "title-bar" === this.options.dragAffordance && $$$$37$$.fn.draggable && this.$_makeDraggable$();
      this.$_isOpen$ = !1;
    }, $_AfterCreateEvent$:function() {
      "show" === this.options.initialVisibility && this.open();
    }, _destroy:function() {
      this.$_delayId$ && window.clearTimeout(this.$_delayId$);
      this.isOpen() && this.$_closeImplicitly$();
      this.$_resizableComponent$ && (this.$_resizableComponent$("instance") && this.$_resizableComponent$("destroy"), this.$_resizableComponent$ = null);
      this.$uiDialogFooter$.length && (this.$uiDialogFooter$.removeClass("oj-helper-clearfix"), $$$$37$$("#" + this.$_placeHolderFooterId$).replaceWith(this.$uiDialogFooter$));
      this.$_destroyCloseButton$();
      if (this.$userDefinedDialogHeader$) {
        var $header$$11$$ = this.$uiDialog$.find(".oj-dialog-header");
        $header$$11$$ && $$$$37$$("#" + this.$_placeHolderHeaderId$).replaceWith($header$$11$$);
      }
      this.$uiDialogTitle$ && (this.$uiDialogTitle$.remove(), this.$uiDialogTitle$ = null);
      this.element.removeUniqueId().removeClass("oj-dialog-content oj-dialog-default-content").css(this.$originalCss$);
      this.$uiDialog$ && this.$uiDialog$.stop(!0, !0);
      this.element.unwrap();
      this.$originalTitle$ && this.element.attr("title", this.$originalTitle$);
      this.$uiDialogTitlebar$ && (this.$uiDialogTitlebar$.remove(), this.$uiDialogTitlebar$ = null);
      delete this.$_popupServiceEvents$;
      delete this.$_isOpen$;
      this._super();
    }, widget:function() {
      return this.$uiDialog$;
    }, disable:$$$$37$$.noop, enable:$$$$37$$.noop, close:function($event$$430$$) {
      if (this.isOpen() && (!1 !== this._trigger("beforeClose", $event$$430$$) || this.$_ignoreBeforeCloseResultant$)) {
        this.$_isOpen$ = !1;
        this.$_focusedElement$ = null;
        this.opener.filter(":focusable").focus().length || $$$$37$$(this.document[0].activeElement).blur();
        var $psOptions$$2$$ = {};
        $psOptions$$2$$[$oj$$40$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$;
        $oj$$40$$.$PopupService$.$getInstance$().close($psOptions$$2$$);
        this._trigger("close", $event$$430$$);
      }
    }, isOpen:function() {
      return this.$_isOpen$;
    }, open:function($event$$431_isRtl$$2_position$$21$$) {
      if (!1 !== this._trigger("beforeOpen", $event$$431_isRtl$$2_position$$21$$)) {
        if (!this.isOpen()) {
          this.$_isOpen$ = !0;
          this.opener = $$$$37$$(this.document[0].activeElement);
          "resizable" === this.options.resizeBehavior && this.$_makeResizable$();
          $event$$431_isRtl$$2_position$$21$$ = "rtl" === this.$_GetReadingDirection$();
          $event$$431_isRtl$$2_position$$21$$ = $oj$$40$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $event$$431_isRtl$$2_position$$21$$);
          var $psOptions$$3$$ = {};
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$;
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$LAUNCHER$] = this.opener;
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$POSITION$] = $event$$431_isRtl$$2_position$$21$$;
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$MODALITY$] = this.options.modality;
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-dialog-layer";
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$LAYER_LEVEL$] = $oj$$40$$.$PopupService$.$LAYER_LEVEL$.$TOP_LEVEL$;
          $oj$$40$$.$PopupService$.$getInstance$().open($psOptions$$3$$);
          this._trigger("open");
        }
        this.$_focusTabbable$();
      }
    }, refresh:function() {
      this._super();
    }, $_focusTabbable$:function() {
      var $hasFocus$$ = this.$_focusedElement$;
      $hasFocus$$ && 0 < $hasFocus$$.length && $oj$$40$$.$DomUtils$.$isAncestorOrSelf$(this.$uiDialog$[0], $hasFocus$$[0]) || ($hasFocus$$ || ($hasFocus$$ = this.element.find("[autofocus]")), $hasFocus$$.length || ($hasFocus$$ = this.element.find(":tabbable")), $hasFocus$$.length || this.$uiDialogFooter$.length && ($hasFocus$$ = this.$uiDialogFooter$.find(":tabbable")), $hasFocus$$.length || this.$uiDialogTitlebarClose$ && ($hasFocus$$ = this.$uiDialogTitlebarClose$.filter(":tabbable")), $hasFocus$$.length || 
      ($hasFocus$$ = this.$uiDialog$), $hasFocus$$.eq(0).focus(), this._trigger("focus"));
    }, _keepFocus:function($activeElement$$inline_905_event$$432$$) {
      $activeElement$$inline_905_event$$432$$.preventDefault();
      $activeElement$$inline_905_event$$432$$ = this.document[0].activeElement;
      this.$uiDialog$[0] === $activeElement$$inline_905_event$$432$$ || $$$$37$$.contains(this.$uiDialog$[0], $activeElement$$inline_905_event$$432$$) || this.$_focusTabbable$();
    }, $_isNumber$:function($value$$281$$) {
      return!isNaN(parseInt($value$$281$$, 10));
    }, $_createWrapper$:function() {
      this.$_isResizing$ = !1;
      this.element.uniqueId();
      this.$_elementId$ = this.element.attr("id");
      this.$_wrapperId$ = "ojDialogWrapper-" + this.$_elementId$;
      this.$uiDialog$ = $$$$37$$("\x3cdiv\x3e");
      this.$uiDialog$.addClass("oj-dialog oj-component").hide().attr({tabIndex:-1, role:this.options.role, id:this.$_wrapperId$});
      this.$uiDialog$.insertBefore(this.element);
      this._on(this.$uiDialog$, {keyup:function() {
      }, keydown:function($event$$434$$) {
        if ("none" != this.options.cancelBehavior && !$event$$434$$.isDefaultPrevented() && $event$$434$$.keyCode && $event$$434$$.keyCode === $$$$37$$.ui.keyCode.ESCAPE) {
          $event$$434$$.preventDefault(), $event$$434$$.stopImmediatePropagation(), this.close($event$$434$$);
        } else {
          if ($event$$434$$.keyCode === $$$$37$$.ui.keyCode.TAB && "modeless" !== this.options.modality) {
            var $tabbables$$ = this.$uiDialog$.find(":tabbable"), $first$$7_index$$217$$ = $tabbables$$.filter(":first"), $last$$4$$ = $tabbables$$.filter(":last");
            $event$$434$$.shiftKey ? $event$$434$$.shiftKey && ($event$$434$$.target === $first$$7_index$$217$$[0] || $event$$434$$.target === this.$uiDialog$[0] ? ($last$$4$$.focus(), $event$$434$$.preventDefault()) : ($first$$7_index$$217$$ = $tabbables$$.index(document.activeElement), 1 == $first$$7_index$$217$$ && $tabbables$$[0] && ($tabbables$$[0].focus(), $event$$434$$.preventDefault()))) : $event$$434$$.target === $last$$4$$[0] || $event$$434$$.target === this.$uiDialog$[0] ? ($first$$7_index$$217$$.focus(), 
            $event$$434$$.preventDefault()) : ($first$$7_index$$217$$ = $tabbables$$.index(document.activeElement), 0 == $first$$7_index$$217$$ && $tabbables$$[1] && ($tabbables$$[1].focus(), $event$$434$$.preventDefault()));
          }
        }
      }});
      this.element.find("[aria-describedby]").length || this.$uiDialog$.attr({"aria-describedby":this.element.uniqueId().attr("id")});
    }, $_destroyCloseButton$:function() {
      this.$uiDialogTitlebarCloseWrapper$ && (this.$uiDialogTitlebarCloseWrapper$.remove(), this.$uiDialogTitlebarClose$ = this.$uiDialogTitlebarCloseWrapper$ = null);
    }, $_createCloseButton$:function($domDestination$$) {
      this.$uiDialogTitlebarCloseWrapper$ = $$$$37$$("\x3cdiv\x3e").addClass("oj-dialog-header-close-wrapper").attr("tabindex", "1").attr("aria-label", "close").attr("role", "button").appendTo($domDestination$$);
      this.$uiDialogTitlebarClose$ = $$$$37$$("\x3cspan\x3e").addClass("oj-component-icon oj-clickable-icon oj-dialog-close-icon").attr("alt", "close icon").prependTo(this.$uiDialogTitlebarCloseWrapper$);
      this._on(this.$uiDialogTitlebarCloseWrapper$, {click:function($event$$435$$) {
        $event$$435$$.preventDefault();
        $event$$435$$.stopImmediatePropagation();
        this.close($event$$435$$);
      }, mousedown:function($event$$436$$) {
        $$$$37$$($event$$436$$.currentTarget).addClass("oj-active");
      }, mouseup:function($event$$437$$) {
        $$$$37$$($event$$437$$.currentTarget).removeClass("oj-active");
      }, mouseenter:function($event$$438$$) {
        $$$$37$$($event$$438$$.currentTarget).addClass("oj-hover");
      }, mouseleave:function($currTarget$$7_event$$439$$) {
        $currTarget$$7_event$$439$$ = $currTarget$$7_event$$439$$.currentTarget;
        $$$$37$$($currTarget$$7_event$$439$$).removeClass("oj-hover");
        $$$$37$$($currTarget$$7_event$$439$$).removeClass("oj-active");
      }, keyup:function($event$$440$$) {
        if ($event$$440$$.keyCode && $event$$440$$.keyCode === $$$$37$$.ui.keyCode.SPACE || $event$$440$$.keyCode === $$$$37$$.ui.keyCode.ENTER) {
          $event$$440$$.preventDefault(), $event$$440$$.stopImmediatePropagation(), this.close($event$$440$$);
        }
      }});
    }, $_createTitlebar$:function() {
      var $uiDialogTitle$$;
      this.$uiDialogTitlebar$ = $$$$37$$("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.$uiDialog$);
      this._on(this.$uiDialogTitlebar$, {mousedown:function($event$$441$$) {
        $$$$37$$($event$$441$$.target).closest(".oj-dialog-close-icon") || this.$uiDialog$.focus();
      }});
      "icon" === this.options.cancelBehavior && this.$_createCloseButton$(this.$uiDialogTitlebar$);
      $uiDialogTitle$$ = $$$$37$$("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").appendTo(this.$uiDialogTitlebar$);
      this.$_title$($uiDialogTitle$$);
      this.$uiDialog$.attr({"aria-labelledby":$uiDialogTitle$$.attr("id")});
    }, $_title$:function($title$$9$$) {
      this.options.title || $title$$9$$.html("\x26#160;");
      $title$$9$$.text(this.options.title);
    }, $_makeDraggable$:function() {
      function $filteredUi$$($ui$$21$$) {
        return{position:$ui$$21$$.position, offset:$ui$$21$$.offset};
      }
      var $that$$2$$ = this, $options$$321$$ = this.options;
      this.$uiDialog$.draggable({$addClasses$:!1, cancel:".oj-dialog-content, .oj-dialog-header-close", handle:".oj-dialog-header", containment:"document", start:function($event$$442$$, $ui$$22$$) {
        $$$$37$$(this).addClass("oj-dialog-dragging");
        $that$$2$$.$_blockFrames$();
        $that$$2$$._trigger("dragStart", $event$$442$$, $filteredUi$$($ui$$22$$));
      }, drag:function($event$$443$$, $ui$$23$$) {
        $that$$2$$._trigger("drag", $event$$443$$, $filteredUi$$($ui$$23$$));
      }, stop:function($event$$444$$, $ui$$24$$) {
        $options$$321$$.position = [$ui$$24$$.position.left - $that$$2$$.document.scrollLeft(), $ui$$24$$.position.top - $that$$2$$.document.scrollTop()];
        $$$$37$$(this).removeClass("oj-dialog-dragging");
        $that$$2$$.$_unblockFrames$();
        $that$$2$$._trigger("dragStop", $event$$444$$, $filteredUi$$($ui$$24$$));
      }});
      this.$uiDialog$.addClass("oj-draggable");
    }, $_makeResizable$:function() {
      function $filteredUi$$1$$($ui$$25$$) {
        return{originalPosition:$ui$$25$$.$originalPosition$, originalSize:$ui$$25$$.$originalSize$, position:$ui$$25$$.position, size:$ui$$25$$.size};
      }
      var $that$$3$$ = this;
      this.$uiDialog$.css("position");
      this.$_resizableComponent$ = this.$uiDialog$.ojResizable.bind(this.$uiDialog$);
      this.$_resizableComponent$({cancel:".oj-dialog-content", containment:"document", handles:"n,e,s,w,se,sw,ne,nw", start:function($event$$445$$, $ui$$26$$) {
        $that$$3$$.$_isResizing$ = !0;
        $$$$37$$(this).addClass("oj-dialog-resizing");
        $that$$3$$.$_blockFrames$();
        $that$$3$$._trigger("resizeStart", $event$$445$$, $filteredUi$$1$$($ui$$26$$));
      }, resize:function($event$$446$$, $ui$$27$$) {
        $that$$3$$._trigger("resize", $event$$446$$, $filteredUi$$1$$($ui$$27$$));
      }, stop:function($event$$447$$, $ui$$28$$) {
        $that$$3$$.$_isResizing$ = !1;
        $$$$37$$(this).removeClass("oj-dialog-resizing");
        $that$$3$$.$_unblockFrames$();
        $that$$3$$._trigger("resizeStop", $event$$447$$, $filteredUi$$1$$($ui$$28$$));
      }});
    }, $_position$:function() {
      var $isRtl$$3_position$$23$$ = "rtl" === this.$_GetReadingDirection$(), $isRtl$$3_position$$23$$ = $oj$$40$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $isRtl$$3_position$$23$$);
      this.$uiDialog$.position($isRtl$$3_position$$23$$);
      this.$_positionDescendents$();
    }, $_positionDescendents$:function() {
      $oj$$40$$.$PopupService$.$getInstance$().$triggerOnDescendents$(this.$uiDialog$, $oj$$40$$.$PopupService$.$EVENT$.$POPUP_REFRESH$);
    }, _setOption:function($isDraggable$$1_key$$158$$, $value$$282$$, $flags$$39$$) {
      var $isResizable_psOptions$$4_uiDialog$$;
      $isResizable_psOptions$$4_uiDialog$$ = this.$uiDialog$;
      if ("disabled" !== $isDraggable$$1_key$$158$$) {
        switch(this._super($isDraggable$$1_key$$158$$, $value$$282$$, $flags$$39$$), $isDraggable$$1_key$$158$$) {
          case "dragAffordance":
            ($isDraggable$$1_key$$158$$ = $isResizable_psOptions$$4_uiDialog$$.hasClass("oj-draggable")) && "none" === $value$$282$$ && ($isResizable_psOptions$$4_uiDialog$$.draggable("destroy"), this.$uiDialog$.removeClass("oj-draggable"));
            $isDraggable$$1_key$$158$$ || "title-bar" !== $value$$282$$ || this.$_makeDraggable$();
            break;
          case "position":
            this.$_position$();
            break;
          case "resizeBehavior":
            $isResizable_psOptions$$4_uiDialog$$ = !1;
            this.$_resizableComponent$ && ($isResizable_psOptions$$4_uiDialog$$ = !0);
            $isResizable_psOptions$$4_uiDialog$$ && "resizable" != $value$$282$$ && (this.$_resizableComponent$("instance") && this.$_resizableComponent$("destroy"), this.$_resizableComponent$ = null);
            $isResizable_psOptions$$4_uiDialog$$ || "resizable" !== $value$$282$$ || this.$_makeResizable$();
            break;
          case "title":
            this.$_title$(this.$uiDialogTitlebar$.find(".oj-dialog-title"));
            break;
          case "role":
            $isResizable_psOptions$$4_uiDialog$$.attr("role", $value$$282$$);
            break;
          case "modality":
            this.isOpen() && ($isResizable_psOptions$$4_uiDialog$$ = {}, $isResizable_psOptions$$4_uiDialog$$[$oj$$40$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$, $isResizable_psOptions$$4_uiDialog$$[$oj$$40$$.$PopupService$.$OPTION$.$MODALITY$] = $value$$282$$, $oj$$40$$.$PopupService$.$getInstance$().$changeOptions$($isResizable_psOptions$$4_uiDialog$$));
            break;
          case "cancelBehavior":
            "none" === $value$$282$$ || "escape" === $value$$282$$ ? this.$_destroyCloseButton$() : "icon" === $value$$282$$ && (this.$userDefinedDialogHeader$ ? (this.$_destroyCloseButton$(), this.$_createCloseButton$(this.$_userDefinedHeader$), this.$_userDefinedTitle$ = this.$_userDefinedHeader$.find(".oj-dialog-title"), this.$_userDefinedTitle$.length && this.$_userDefinedTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$)) : (this.$_destroyCloseButton$(), this.$_createCloseButton$(this.$uiDialogTitlebar$), 
            this.$standardTitle$ = this.$uiDialogTitlebar$.find(".oj-dialog-title"), this.$standardTitle$.length && this.$standardTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$)));
        }
      }
    }, $_blockFrames$:function() {
      this.$iframeBlocks$ = this.document.find("iframe").map(function() {
        var $iframe$$ = $$$$37$$(this), $offset$$25$$ = $iframe$$.offset();
        return $$$$37$$("\x3cdiv\x3e").css({width:$iframe$$.outerWidth(), height:$iframe$$.outerHeight()}).appendTo($iframe$$.parent()).offset($offset$$25$$)[0];
      });
    }, $_unblockFrames$:function() {
      this.$iframeBlocks$ && (this.$iframeBlocks$.remove(), delete this.$iframeBlocks$);
    }, $_createPlaceHolderFooter$:function($domElement$$1$$) {
      this.$_placeHolderFooterId$ = "ojDialogPlaceHolderFooter-" + this.$_elementId$;
      this.$_placeHolderFooter$ = $$$$37$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderFooterId$});
      this.$_placeHolderFooter$.insertBefore($domElement$$1$$);
    }, $_createPlaceHolderHeader$:function($domElement$$2$$) {
      this.$_placeHolderHeaderId$ = "ojDialogPlaceHolderHeader-" + this.$_elementId$;
      this.$_placeHolderHeader$ = $$$$37$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderHeaderId$});
      this.$_placeHolderHeader$.insertBefore($domElement$$2$$);
    }, getNodeBySubId:function($dotSubId_locator$$39_subId$$44$$) {
      if (null == $dotSubId_locator$$39_subId$$44$$) {
        return this.element ? this.element[0] : null;
      }
      $dotSubId_locator$$39_subId$$44$$ = $dotSubId_locator$$39_subId$$44$$.subId;
      switch($dotSubId_locator$$39_subId$$44$$) {
        case "oj-dialog-header":
        ;
        case "oj-dialog-body":
        ;
        case "oj-dialog-footer":
        ;
        case "oj-dialog-content":
        ;
        case "oj-dialog-header-close-wrapper":
        ;
        case "oj-resizable-n":
        ;
        case "oj-resizable-e":
        ;
        case "oj-resizable-s":
        ;
        case "oj-resizable-w":
        ;
        case "oj-resizable-se":
        ;
        case "oj-resizable-sw":
        ;
        case "oj-resizable-ne":
        ;
        case "oj-resizable-nw":
          $dotSubId_locator$$39_subId$$44$$ = "." + $dotSubId_locator$$39_subId$$44$$;
          if (!this.widget().find($dotSubId_locator$$39_subId$$44$$)) {
            break;
          }
          return this.widget().find($dotSubId_locator$$39_subId$$44$$)[0];
        case "oj-dialog-close-icon":
        ;
        case "oj-dialog-close":
          if (!this.widget().find(".oj-dialog-close-icon")) {
            break;
          }
          return this.widget().find(".oj-dialog-close-icon")[0];
      }
      return null;
    }, getSubIdByNode:function($node$$97_nodeCached$$3$$) {
      if (null != $node$$97_nodeCached$$3$$) {
        $node$$97_nodeCached$$3$$ = $$$$37$$($node$$97_nodeCached$$3$$);
        if ($node$$97_nodeCached$$3$$.hasClass("oj-dialog-header")) {
          return{subId:"oj-dialog-header"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-dialog-footer")) {
          return{subId:"oj-dialog-footer"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-dialog-content")) {
          return{subId:"oj-dialog-content"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-dialog-header-close-wrapper")) {
          return{subId:"oj-dialog-header-close-wrapper"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-dialog-close-icon")) {
          return{subId:"oj-dialog-close"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-n")) {
          return{subId:"oj-resizable-n"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-e")) {
          return{subId:"oj-resizable-e"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-s")) {
          return{subId:"oj-resizable-s"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-w")) {
          return{subId:"oj-resizable-w"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-se")) {
          return{subId:"oj-resizable-se"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-sw")) {
          return{subId:"oj-resizable-sw"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-ne")) {
          return{subId:"oj-resizable-ne"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-nw")) {
          return{subId:"oj-resizable-nw"};
        }
      }
      return null;
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$4$$ = this.$_popupServiceEvents$ = {};
        $events$$4$$[$oj$$40$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$37$$.proxy(this.$_closeImplicitly$, this);
        $events$$4$$[$oj$$40$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$37$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$4$$[$oj$$40$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$37$$.proxy(this.$_positionDescendents$, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeImplicitly$:function() {
      this.$_ignoreBeforeCloseResultant$ = !0;
      this.close();
      delete this.$_ignoreBeforeCloseResultant$;
    }});
  })();
  (function() {
    $oj$$40$$.$__registerWidget$("oj.ojResizable", $$$$37$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancel:"input,textarea,button,select,option", distance:1, delay:0, maxHeight:null, maxWidth:null, minHeight:10, minWidth:10, alsoResize:!1, animate:!1, animateDuration:"slow", animateEasing:"swing", containment:!1, ghost:!1, grid:!1, handles:"e,s,se", helper:!1, resize:null, start:null, stop:null}, $_num$:function($value$$283$$) {
      return parseInt($value$$283$$, 10) || 0;
    }, $_isNumber$:function($value$$284$$) {
      return!isNaN(parseInt($value$$284$$, 10));
    }, $_hasScroll$:function($el$$10$$, $a$$116$$) {
      if ("hidden" === $$$$37$$($el$$10$$).css("overflow")) {
        return!1;
      }
      var $scroll$$12$$ = $a$$116$$ && "left" === $a$$116$$ ? "scrollLeft" : "scrollTop", $has$$ = !1;
      if (0 < $el$$10$$[$scroll$$12$$]) {
        return!0;
      }
      $el$$10$$[$scroll$$12$$] = 1;
      $has$$ = 0 < $el$$10$$[$scroll$$12$$];
      $el$$10$$[$scroll$$12$$] = 0;
      return $has$$;
    }, _ComponentCreate:function() {
      this._super();
      var $n$$24_o$$, $i$$348_mouseConstructor$$, $handle$$19$$, $axis$$44$$, $hname$$, $that$$4$$ = this;
      $n$$24_o$$ = this.options;
      $i$$348_mouseConstructor$$ = this.element.mouse.bind(this.element);
      $i$$348_mouseConstructor$$();
      this.$mouse$ = $i$$348_mouseConstructor$$("instance");
      this.$mouse$._mouseCapture = function $this$$mouse$$_mouseCapture$($event$$448$$) {
        return $that$$4$$.$_mouseCapture$($event$$448$$);
      };
      this.$mouse$._mouseStart = function $this$$mouse$$_mouseStart$($event$$449$$) {
        return $that$$4$$.$_mouseStart$($event$$449$$);
      };
      this.$mouse$._mouseDrag = function $this$$mouse$$_mouseDrag$($event$$450$$) {
        return $that$$4$$.$_mouseDrag$($event$$450$$);
      };
      this.$mouse$._mouseStop = function $this$$mouse$$_mouseStop$($event$$451$$) {
        return $that$$4$$.$_mouseStop$($event$$451$$);
      };
      this.element.addClass("oj-resizable");
      $$$$37$$.extend(this, {$originalElement$:this.element, $_proportionallyResizeElements$:[], $_helper$:null});
      this.handles = $n$$24_o$$.handles || ($$$$37$$(".oj-resizable-handle", this.element).length ? {$n$:".oj-resizable-n", $e$:".oj-resizable-e", $s$:".oj-resizable-s", $w$:".oj-resizable-w", $se$:".oj-resizable-se", $sw$:".oj-resizable-sw", $ne$:".oj-resizable-ne", $nw$:".oj-resizable-nw"} : "e,s,se");
      if (this.handles.constructor === String) {
        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), $n$$24_o$$ = this.handles.split(","), this.handles = {}, $i$$348_mouseConstructor$$ = 0;$i$$348_mouseConstructor$$ < $n$$24_o$$.length;$i$$348_mouseConstructor$$++) {
          $handle$$19$$ = $$$$37$$.trim($n$$24_o$$[$i$$348_mouseConstructor$$]), $hname$$ = "oj-resizable-" + $handle$$19$$, $axis$$44$$ = $$$$37$$("\x3cdiv class\x3d'oj-resizable-handle " + $hname$$ + "'\x3e\x3c/div\x3e"), this.handles[$handle$$19$$] = ".oj-resizable-" + $handle$$19$$, this.element.append($axis$$44$$);
        }
      }
      this.$_renderAxis$ = function $this$$_renderAxis$$() {
        for (var $i$$349$$ in this.handles) {
          this.handles[$i$$349$$].constructor === String && (this.handles[$i$$349$$] = this.element.children(this.handles[$i$$349$$]).first().show());
        }
      };
      this.$_renderAxis$();
      this.$_handles$ = $$$$37$$(".oj-resizable-handle", this.element);
      this.$_handles$.mouseover(function() {
        $that$$4$$.$resizing$ || (this.className && ($axis$$44$$ = this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)), $that$$4$$.axis = $axis$$44$$ && $axis$$44$$[1] ? $axis$$44$$[1] : "se");
      });
      this.$mouse$._mouseInit();
    }, _destroy:function() {
      this.$mouse$ && this.$mouse$._mouseDestroy();
      try {
        this.$mouse$.destroy(), this.$mouse$ = null;
      } catch ($e$$99$$) {
      }
      $$$$37$$(this.$originalElement$).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();
      return this;
    }, $_mouseCapture$:function($event$$452$$) {
      var $i$$350$$, $handle$$20$$, $capture$$ = !1;
      for ($i$$350$$ in this.handles) {
        if ($handle$$20$$ = $$$$37$$(this.handles[$i$$350$$])[0], $handle$$20$$ === $event$$452$$.target || $$$$37$$.contains($handle$$20$$, $event$$452$$.target)) {
          $capture$$ = !0;
        }
      }
      return!this.options.disabled && $capture$$;
    }, $_mouseStart$:function($event$$453$$) {
      var $curleft_iniPos$$, $curtop$$, $cursor_o$$1$$;
      $cursor_o$$1$$ = this.options;
      $curleft_iniPos$$ = this.element.position();
      var $el$$11$$ = this.element;
      this.$resizing$ = !0;
      /absolute/.test($el$$11$$.css("position")) ? $el$$11$$.css({position:"absolute", top:$el$$11$$.css("top"), left:$el$$11$$.css("left")}) : $el$$11$$.is(".oj-draggable") && $el$$11$$.css({position:"absolute", top:$curleft_iniPos$$.top, left:$curleft_iniPos$$.left});
      this.$_renderProxy$();
      $curleft_iniPos$$ = this.$_num$(this.helper.css("left"));
      $curtop$$ = this.$_num$(this.helper.css("top"));
      $cursor_o$$1$$.containment && ($curleft_iniPos$$ += $$$$37$$($cursor_o$$1$$.containment).scrollLeft() || 0, $curtop$$ += $$$$37$$($cursor_o$$1$$.containment).scrollTop() || 0);
      this.offset = this.helper.offset();
      this.position = {left:$curleft_iniPos$$, top:$curtop$$};
      this.size = {width:$el$$11$$.width(), height:$el$$11$$.height()};
      this.$originalSize$ = {width:$el$$11$$.width(), height:$el$$11$$.height()};
      this.$originalPosition$ = {left:$curleft_iniPos$$, top:$curtop$$};
      this.$sizeDiff$ = {width:$el$$11$$.outerWidth() - $el$$11$$.width(), height:$el$$11$$.outerHeight() - $el$$11$$.height()};
      this.$originalMousePosition$ = {left:$event$$453$$.pageX, top:$event$$453$$.pageY};
      this.$aspectRatio$ = this.$originalSize$.width / this.$originalSize$.height || 1;
      $cursor_o$$1$$ = $$$$37$$(".oj-resizable-" + this.axis).css("cursor");
      $$$$37$$("body").css("cursor", "auto" === $cursor_o$$1$$ ? this.axis + "-resize" : $cursor_o$$1$$);
      $el$$11$$.addClass("oj-resizable-resizing");
      this.$_propagate$("start", $event$$453$$);
      this.$_alsoresize_start$($event$$453$$);
      this.$_containment_start$($event$$453$$);
      return!0;
    }, $_mouseDrag$:function($event$$454$$) {
      var $data$$154_dx$$4$$, $el$$12$$ = this.helper, $props$$24$$ = {}, $dy$$4_smp$$ = this.$originalMousePosition$;
      $data$$154_dx$$4$$ = $event$$454$$.pageX - $dy$$4_smp$$.left || 0;
      var $dy$$4_smp$$ = $event$$454$$.pageY - $dy$$4_smp$$.top || 0, $trigger$$4$$ = this.$_change$[this.axis];
      this.$prevPosition$ = {top:this.position.top, left:this.position.left};
      this.$prevSize$ = {width:this.size.width, height:this.size.height};
      if (!$trigger$$4$$) {
        return!1;
      }
      $data$$154_dx$$4$$ = $trigger$$4$$.apply(this, [$event$$454$$, $data$$154_dx$$4$$, $dy$$4_smp$$]);
      this.$_updateVirtualBoundaries$($event$$454$$.shiftKey);
      $event$$454$$.shiftKey && ($data$$154_dx$$4$$ = this.$_updateRatio$($data$$154_dx$$4$$, $event$$454$$));
      $data$$154_dx$$4$$ = this.$_respectSize$($data$$154_dx$$4$$, $event$$454$$);
      this.$_updateCache$($data$$154_dx$$4$$);
      this.$_propagate$("resize", $event$$454$$);
      this.$_alsoresize_resize$($event$$454$$, this.ui());
      this.$_containment_resize$($event$$454$$, this.ui());
      this.position.top !== this.$prevPosition$.top && ($props$$24$$.top = this.position.top + "px");
      this.position.left !== this.$prevPosition$.left && ($props$$24$$.left = this.position.left + "px");
      this.size.width !== this.$prevSize$.width && ($props$$24$$.width = this.size.width + "px");
      this.size.height !== this.$prevSize$.height && ($props$$24$$.height = this.size.height + "px");
      $el$$12$$.css($props$$24$$);
      !this.$_helper$ && this.$_proportionallyResizeElements$.length && this.$_proportionallyResize$();
      $$$$37$$.isEmptyObject($props$$24$$) || this._trigger("resize", $event$$454$$, this.ui());
      return!1;
    }, $_mouseStop$:function($event$$455$$) {
      this.$resizing$ = !1;
      $$$$37$$("body").css("cursor", "auto");
      this.element.removeClass("oj-resizable-resizing");
      this.$_propagate$("stop", $event$$455$$);
      this.$_alsoresize_stop$($event$$455$$);
      this.$_containment_stop$($event$$455$$);
      return!1;
    }, $_updateVirtualBoundaries$:function($forceAspectRatio_pMinWidth$$) {
      var $pMaxWidth$$, $pMinHeight$$, $pMaxHeight$$, $b$$73_o$$3$$;
      $b$$73_o$$3$$ = this.options;
      $b$$73_o$$3$$ = {minWidth:this.$_isNumber$($b$$73_o$$3$$.minWidth) ? $b$$73_o$$3$$.minWidth : 0, maxWidth:this.$_isNumber$($b$$73_o$$3$$.maxWidth) ? $b$$73_o$$3$$.maxWidth : Infinity, minHeight:this.$_isNumber$($b$$73_o$$3$$.minHeight) ? $b$$73_o$$3$$.minHeight : 0, maxHeight:this.$_isNumber$($b$$73_o$$3$$.maxHeight) ? $b$$73_o$$3$$.maxHeight : Infinity};
      $forceAspectRatio_pMinWidth$$ && ($forceAspectRatio_pMinWidth$$ = $b$$73_o$$3$$.minHeight * this.$aspectRatio$, $pMinHeight$$ = $b$$73_o$$3$$.minWidth / this.$aspectRatio$, $pMaxWidth$$ = $b$$73_o$$3$$.maxHeight * this.$aspectRatio$, $pMaxHeight$$ = $b$$73_o$$3$$.maxWidth / this.$aspectRatio$, $forceAspectRatio_pMinWidth$$ > $b$$73_o$$3$$.minWidth && ($b$$73_o$$3$$.minWidth = $forceAspectRatio_pMinWidth$$), $pMinHeight$$ > $b$$73_o$$3$$.minHeight && ($b$$73_o$$3$$.minHeight = $pMinHeight$$), 
      $pMaxWidth$$ < $b$$73_o$$3$$.maxWidth && ($b$$73_o$$3$$.maxWidth = $pMaxWidth$$), $pMaxHeight$$ < $b$$73_o$$3$$.maxHeight && ($b$$73_o$$3$$.maxHeight = $pMaxHeight$$));
      this.$_vBoundaries$ = $b$$73_o$$3$$;
    }, $_updateCache$:function($data$$155$$) {
      this.offset = this.helper.offset();
      this.$_isNumber$($data$$155$$.left) && (this.position.left = $data$$155$$.left);
      this.$_isNumber$($data$$155$$.top) && (this.position.top = $data$$155$$.top);
      this.$_isNumber$($data$$155$$.height) && (this.size.height = $data$$155$$.height);
      this.$_isNumber$($data$$155$$.width) && (this.size.width = $data$$155$$.width);
    }, $_updateRatio$:function($data$$156$$) {
      var $cpos$$ = this.position, $csize$$ = this.size, $a$$118$$ = this.axis;
      this.$_isNumber$($data$$156$$.height) ? $data$$156$$.width = $data$$156$$.height * this.$aspectRatio$ : this.$_isNumber$($data$$156$$.width) && ($data$$156$$.height = $data$$156$$.width / this.$aspectRatio$);
      "sw" === $a$$118$$ && ($data$$156$$.left = $cpos$$.left + ($csize$$.width - $data$$156$$.width), $data$$156$$.top = null);
      "nw" === $a$$118$$ && ($data$$156$$.top = $cpos$$.top + ($csize$$.height - $data$$156$$.height), $data$$156$$.left = $cpos$$.left + ($csize$$.width - $data$$156$$.width));
      return $data$$156$$;
    }, $_respectSize$:function($data$$157$$) {
      var $o$$4$$ = this.$_vBoundaries$, $a$$119_ch$$2$$ = this.axis, $ismaxw$$ = this.$_isNumber$($data$$157$$.width) && $o$$4$$.maxWidth && $o$$4$$.maxWidth < $data$$157$$.width, $ismaxh$$ = this.$_isNumber$($data$$157$$.height) && $o$$4$$.maxHeight && $o$$4$$.maxHeight < $data$$157$$.height, $isminw$$ = this.$_isNumber$($data$$157$$.width) && $o$$4$$.minWidth && $o$$4$$.minWidth > $data$$157$$.width, $isminh$$ = this.$_isNumber$($data$$157$$.height) && $o$$4$$.minHeight && $o$$4$$.minHeight > 
      $data$$157$$.height, $dw$$ = this.$originalPosition$.left + this.$originalSize$.width, $dh$$ = this.position.top + this.size.height, $cw$$ = /sw|nw|w/.test($a$$119_ch$$2$$), $a$$119_ch$$2$$ = /nw|ne|n/.test($a$$119_ch$$2$$);
      $isminw$$ && ($data$$157$$.width = $o$$4$$.minWidth);
      $isminh$$ && ($data$$157$$.height = $o$$4$$.minHeight);
      $ismaxw$$ && ($data$$157$$.width = $o$$4$$.maxWidth);
      $ismaxh$$ && ($data$$157$$.height = $o$$4$$.maxHeight);
      $isminw$$ && $cw$$ && ($data$$157$$.left = $dw$$ - $o$$4$$.minWidth);
      $ismaxw$$ && $cw$$ && ($data$$157$$.left = $dw$$ - $o$$4$$.maxWidth);
      $isminh$$ && $a$$119_ch$$2$$ && ($data$$157$$.top = $dh$$ - $o$$4$$.minHeight);
      $ismaxh$$ && $a$$119_ch$$2$$ && ($data$$157$$.top = $dh$$ - $o$$4$$.maxHeight);
      $data$$157$$.width || $data$$157$$.height || $data$$157$$.left || !$data$$157$$.top ? $data$$157$$.width || $data$$157$$.height || $data$$157$$.top || !$data$$157$$.left || ($data$$157$$.left = null) : $data$$157$$.top = null;
      return $data$$157$$;
    }, $_proportionallyResize$:function() {
      if (this.$_proportionallyResizeElements$.length) {
        var $i$$351$$, $j$$43$$, $borders$$, $paddings$$, $prel$$, $element$$139$$ = this.helper || this.element;
        for ($i$$351$$ = 0;$i$$351$$ < this.$_proportionallyResizeElements$.length;$i$$351$$++) {
          $prel$$ = this.$_proportionallyResizeElements$[$i$$351$$];
          if (!this.$borderDif$) {
            for (this.$borderDif$ = [], $borders$$ = [$prel$$.css("borderTopWidth"), $prel$$.css("borderRightWidth"), $prel$$.css("borderBottomWidth"), $prel$$.css("borderLeftWidth")], $paddings$$ = [$prel$$.css("paddingTop"), $prel$$.css("paddingRight"), $prel$$.css("paddingBottom"), $prel$$.css("paddingLeft")], $j$$43$$ = 0;$j$$43$$ < $borders$$.length;$j$$43$$++) {
              this.$borderDif$[$j$$43$$] = (parseInt($borders$$[$j$$43$$], 10) || 0) + (parseInt($paddings$$[$j$$43$$], 10) || 0);
            }
          }
          $prel$$.css({height:$element$$139$$.height() - this.$borderDif$[0] - this.$borderDif$[2] || 0, width:$element$$139$$.width() - this.$borderDif$[1] - this.$borderDif$[3] || 0});
        }
      }
    }, $_renderProxy$:function() {
      this.element.offset();
      this.helper = this.element;
    }, $_change$:{e:function($event$$456$$, $dx$$5$$) {
      return{width:this.$originalSize$.width + $dx$$5$$};
    }, w:function($event$$457$$, $dx$$6$$) {
      return{left:this.$originalPosition$.left + $dx$$6$$, width:this.$originalSize$.width - $dx$$6$$};
    }, n:function($event$$458$$, $dx$$7$$, $dy$$5$$) {
      return{top:this.$originalPosition$.top + $dy$$5$$, height:this.$originalSize$.height - $dy$$5$$};
    }, s:function($event$$459$$, $dx$$8$$, $dy$$6$$) {
      return{height:this.$originalSize$.height + $dy$$6$$};
    }, se:function($event$$460$$, $dx$$9$$, $dy$$7$$) {
      return $$$$37$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.e.apply(this, [$event$$460$$, $dx$$9$$, $dy$$7$$]));
    }, sw:function($event$$461$$, $dx$$10$$, $dy$$8$$) {
      return $$$$37$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.w.apply(this, [$event$$461$$, $dx$$10$$, $dy$$8$$]));
    }, ne:function($event$$462$$, $dx$$11$$, $dy$$9$$) {
      return $$$$37$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.e.apply(this, [$event$$462$$, $dx$$11$$, $dy$$9$$]));
    }, nw:function($event$$463$$, $dx$$12$$, $dy$$10$$) {
      return $$$$37$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.w.apply(this, [$event$$463$$, $dx$$12$$, $dy$$10$$]));
    }}, $_propagate$:function($n$$25$$, $event$$464$$) {
      "resize" !== $n$$25$$ && this._trigger($n$$25$$, $event$$464$$, this.ui());
    }, $_alsoresize_start$:function() {
      function $_store$$($exp$$4$$) {
        $$$$37$$($exp$$4$$).each(function() {
          var $el$$14$$ = $$$$37$$(this);
          $el$$14$$.data("oj-resizable-alsoresize", {width:parseInt($el$$14$$.width(), 10), height:parseInt($el$$14$$.height(), 10), left:parseInt($el$$14$$.css("left"), 10), top:parseInt($el$$14$$.css("top"), 10)});
        });
      }
      var $o$$6$$ = this.options;
      "object" !== typeof $o$$6$$.alsoResize || $o$$6$$.alsoResize.parentNode ? $_store$$($o$$6$$.alsoResize) : $o$$6$$.alsoResize.length ? ($o$$6$$.alsoResize = $o$$6$$.alsoResize[0], $_store$$($o$$6$$.alsoResize)) : $$$$37$$.each($o$$6$$.alsoResize, function($exp$$5$$) {
        $_store$$($exp$$5$$);
      });
    }, $_alsoresize_resize$:function($event$$465$$, $ui$$29$$) {
      function $_alsoResize$$($exp$$6$$, $c$$45$$) {
        $$$$37$$($exp$$6$$).each(function() {
          var $el$$15$$ = $$$$37$$(this), $start$$55$$ = $$$$37$$(this).data("oj-resizable-alsoresize"), $style$$19$$ = {};
          $$$$37$$.each($c$$45$$ && $c$$45$$.length ? $c$$45$$ : $el$$15$$.parents($ui$$29$$.$originalElement$[0]).length ? ["width", "height"] : ["width", "height", "top", "left"], function($i$$352$$, $prop$$72$$) {
            var $sum$$ = ($start$$55$$[$prop$$72$$] || 0) + ($delta$$5$$[$prop$$72$$] || 0);
            $sum$$ && 0 <= $sum$$ && ($style$$19$$[$prop$$72$$] = $sum$$ || null);
          });
          $el$$15$$.css($style$$19$$);
        });
      }
      var $o$$7$$ = this.options, $os$$1$$ = this.$originalSize$, $op$$ = this.$originalPosition$, $delta$$5$$ = {height:this.size.height - $os$$1$$.height || 0, width:this.size.width - $os$$1$$.width || 0, top:this.position.top - $op$$.top || 0, left:this.position.left - $op$$.left || 0};
      "object" !== typeof $o$$7$$.alsoResize || $o$$7$$.alsoResize.nodeType ? $_alsoResize$$($o$$7$$.alsoResize, null) : $$$$37$$.each($o$$7$$.alsoResize, function($exp$$7$$, $c$$46$$) {
        $_alsoResize$$($exp$$7$$, $c$$46$$);
      });
    }, $_alsoresize_stop$:function() {
      $$$$37$$(this).removeData("oj-resizable-alsoresize");
    }, $_containment_start$:function() {
      var $element$$140$$, $p$$6$$, $co_oc$$, $ch$$3_height$$26$$, $cw$$1_width$$28$$, $that$$8$$ = this, $ce_el$$16$$ = $that$$8$$.element;
      $co_oc$$ = $that$$8$$.options.containment;
      if ($ce_el$$16$$ = $co_oc$$ instanceof $$$$37$$ ? $co_oc$$.get(0) : /parent/.test($co_oc$$) ? $ce_el$$16$$.parent().get(0) : $co_oc$$) {
        $that$$8$$.$containerElement$ = $$$$37$$($ce_el$$16$$), /document/.test($co_oc$$) || $co_oc$$ === document ? ($that$$8$$.$containerOffset$ = {left:0, top:0}, $that$$8$$.$containerPosition$ = {left:0, top:0}, $that$$8$$.$parentData$ = {element:$$$$37$$(document), left:0, top:0, width:$$$$37$$(document).width(), height:$$$$37$$(document).height() || document.body.parentNode.scrollHeight}) : ($element$$140$$ = $$$$37$$($ce_el$$16$$), $p$$6$$ = [], $$$$37$$(["Top", "Right", "Left", "Bottom"]).each(function($i$$353$$, 
        $name$$142$$) {
          $p$$6$$[$i$$353$$] = $that$$8$$.$_num$($element$$140$$.css("padding" + $name$$142$$));
        }), $that$$8$$.$containerOffset$ = $element$$140$$.offset(), $that$$8$$.$containerPosition$ = $element$$140$$.position(), $that$$8$$.$containerSize$ = {height:$element$$140$$.innerHeight() - $p$$6$$[3], width:$element$$140$$.innerWidth() - $p$$6$$[1]}, $co_oc$$ = $that$$8$$.$containerOffset$, $ch$$3_height$$26$$ = $that$$8$$.$containerSize$.height, $cw$$1_width$$28$$ = $that$$8$$.$containerSize$.width, $cw$$1_width$$28$$ = $that$$8$$.$_hasScroll$($ce_el$$16$$, "left") ? $ce_el$$16$$.scrollWidth : 
        $cw$$1_width$$28$$, $ch$$3_height$$26$$ = $that$$8$$.$_hasScroll$($ce_el$$16$$) ? $ce_el$$16$$.scrollHeight : $ch$$3_height$$26$$, $that$$8$$.$parentData$ = {element:$ce_el$$16$$, left:$co_oc$$.left, top:$co_oc$$.top, width:$cw$$1_width$$28$$, height:$ch$$3_height$$26$$});
      }
    }, $_containment_resize$:function($event$$466$$, $ui$$30$$) {
      var $o$$9_woset$$, $co$$1_hoset$$, $cop_isParent$$, $cp_isOffsetRelative$$;
      $o$$9_woset$$ = this.options;
      $co$$1_hoset$$ = this.$containerOffset$;
      $cp_isOffsetRelative$$ = this.position;
      var $pRatio$$ = $event$$466$$.shiftKey;
      $cop_isParent$$ = {top:0, left:0};
      var $ce$$1$$ = this.$containerElement$, $continueResize$$ = !0;
      $ce$$1$$[0] !== document && /static/.test($ce$$1$$.css("position")) && ($cop_isParent$$ = $co$$1_hoset$$);
      $cp_isOffsetRelative$$.left < (this.$_helper$ ? $co$$1_hoset$$.left : 0) && (this.size.width += this.$_helper$ ? this.position.left - $co$$1_hoset$$.left : this.position.left - $cop_isParent$$.left, $pRatio$$ && (this.size.height = this.size.width / this.$aspectRatio$, $continueResize$$ = !1), this.position.left = $o$$9_woset$$.helper ? $co$$1_hoset$$.left : 0);
      $cp_isOffsetRelative$$.top < (this.$_helper$ ? $co$$1_hoset$$.top : 0) && (this.size.height += this.$_helper$ ? this.position.top - $co$$1_hoset$$.top : this.position.top, $pRatio$$ && (this.size.width = this.size.height * this.$aspectRatio$, $continueResize$$ = !1), this.position.top = this.$_helper$ ? $co$$1_hoset$$.top : 0);
      this.offset.left = this.$parentData$.left + this.position.left;
      this.offset.top = this.$parentData$.top + this.position.top;
      $o$$9_woset$$ = Math.abs((this.$_helper$ ? this.offset.left - $cop_isParent$$.left : this.offset.left - $co$$1_hoset$$.left) + this.$sizeDiff$.width);
      $co$$1_hoset$$ = Math.abs((this.$_helper$ ? this.offset.top - $cop_isParent$$.top : this.offset.top - $co$$1_hoset$$.top) + this.$sizeDiff$.height);
      $cop_isParent$$ = this.$containerElement$.get(0) === this.element.parent().get(0);
      $cp_isOffsetRelative$$ = /relative|absolute/.test(this.$containerElement$.css("position"));
      $cop_isParent$$ && $cp_isOffsetRelative$$ && ($o$$9_woset$$ -= Math.abs(this.$parentData$.left));
      $o$$9_woset$$ + this.size.width >= this.$parentData$.width && (this.size.width = this.$parentData$.width - $o$$9_woset$$, $pRatio$$ && (this.size.height = this.size.width / this.$aspectRatio$, $continueResize$$ = !1));
      $co$$1_hoset$$ + this.size.height >= this.$parentData$.height && (this.size.height = this.$parentData$.height - $co$$1_hoset$$, $pRatio$$ && (this.size.width = this.size.height * this.$aspectRatio$, $continueResize$$ = !1));
      $continueResize$$ || (this.position.left = $ui$$30$$.$prevPosition$.left, this.position.top = $ui$$30$$.$prevPosition$.top, this.size.width = $ui$$30$$.$prevSize$.width, this.size.height = $ui$$30$$.$prevSize$.height);
    }, $_containment_stop$:function() {
      var $o$$10$$ = this.options, $co$$2$$ = this.$containerOffset$, $cop$$1$$ = this.$containerPosition$, $ce$$2$$ = this.$containerElement$, $h$$7_helper$$ = $$$$37$$(this.helper), $ho$$ = $h$$7_helper$$.offset(), $w$$8$$ = $h$$7_helper$$.outerWidth() - this.$sizeDiff$.width, $h$$7_helper$$ = $h$$7_helper$$.outerHeight() - this.$sizeDiff$.height;
      this.$_helper$ && !$o$$10$$.animate && /relative/.test($ce$$2$$.css("position")) && $$$$37$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$8$$, height:$h$$7_helper$$});
      this.$_helper$ && !$o$$10$$.animate && /static/.test($ce$$2$$.css("position")) && $$$$37$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$8$$, height:$h$$7_helper$$});
    }, ui:function() {
      return{$originalElement$:this.$originalElement$, element:this.element, helper:this.helper, position:this.position, size:this.size, $originalSize$:this.$originalSize$, $originalPosition$:this.$originalPosition$, $prevSize$:this.$prevSize$, $prevPosition$:this.$prevPosition$};
    }});
  })();
});
