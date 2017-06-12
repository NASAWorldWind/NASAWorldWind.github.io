/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var $JSCompiler_prototypeAlias$$;
function $goog$exportPath_$$($name$$71$$, $opt_object$$) {
  0 == $name$$71$$.indexOf("dvt.") && ($name$$71$$ = $name$$71$$.substring(4));
  var $parts$$ = $name$$71$$.split("."), $cur$$ = eval("dvt");
  $parts$$[0] in $cur$$ || !$cur$$.execScript || $cur$$.execScript("var " + $parts$$[0]);
  for (var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    $parts$$.length || void 0 === $opt_object$$ ? $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {} : $cur$$[$part$$] = $opt_object$$;
  }
}
Math.floor(2147483648 * Math.random()).toString(36);

(function($dvt$$10$$) {
  function $DvtTagCloudKeyboardHandler$$($dvt$$10$$) {
    this.Init($dvt$$10$$);
  }
  function $DvtTagCloudEventManager$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$) {
    this.Init($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$);
    this.$_view$ = $dvt$$10$$;
  }
  function $DvtTagCloudLayoutUtils$$() {
  }
  function $DvtTagCloudDefaults$$() {
    this.Init({alta:$DvtTagCloudDefaults$$.$VERSION_1$});
  }
  function $DvtTagCloudObjPeer$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$) {
    this.Init($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$);
  }
  function $DvtTagCloudItem$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$, $DvtTagCloudDefaults$$, $DvtTagCloudObjPeer$$, $DvtTagCloudItem$$) {
    this.Init($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$, $DvtTagCloudDefaults$$, $DvtTagCloudObjPeer$$, $DvtTagCloudItem$$);
  }
  function $DvtTagCloudAutomation$$($dvt$$10$$) {
    this.$_tagCloud$ = $dvt$$10$$;
  }
  $dvt$$10$$.$TagCloud$ = function $$dvt$$10$$$$TagCloud$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$) {
    this.Init($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$);
  };
  $dvt$$10$$.$Obj$.$createSubclass$($dvt$$10$$.$TagCloud$, $dvt$$10$$.$BaseComponent$);
  $dvt$$10$$.$TagCloud$.newInstance = function $$dvt$$10$$$$TagCloud$$newInstance$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$) {
    return new $dvt$$10$$.$TagCloud$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$);
  };
  $dvt$$10$$.$TagCloud$.prototype.Init = function $$dvt$$10$$$$TagCloud$$$Init$($DvtTagCloudLayoutUtils$$, $DvtTagCloudObjPeer$$, $DvtTagCloudItem$$) {
    $dvt$$10$$.$TagCloud$.$superclass$.Init.call(this, $DvtTagCloudLayoutUtils$$, $DvtTagCloudObjPeer$$, $DvtTagCloudItem$$);
    this.$getCtx$().$_stage$.$getElem$().setAttributeNS(null, "text-rendering", "geometricPrecision");
    this.$EventManager$ = new $DvtTagCloudEventManager$$(this, $DvtTagCloudLayoutUtils$$, this.$processEvent$, this);
    this.$EventManager$.$addListeners$(this);
    $dvt$$10$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(new $DvtTagCloudKeyboardHandler$$(this.$EventManager$));
    this.$Defaults$ = new $DvtTagCloudDefaults$$;
    this.$_items$ = [];
    this.$_peers$ = [];
    this.$legend$ = null;
    this.$_dragSource$ = new $dvt$$10$$.$DragSource$(this.$getCtx$());
    this.$EventManager$.$setDragSource$(this.$_dragSource$);
  };
  $dvt$$10$$.$TagCloud$.prototype.$render$ = function $$dvt$$10$$$$TagCloud$$$$render$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$) {
    isNaN($DvtTagCloudEventManager$$) || isNaN($DvtTagCloudLayoutUtils$$) || (this.$Width$ = $DvtTagCloudEventManager$$, this.$Height$ = $DvtTagCloudLayoutUtils$$);
    this.$__cleanUp$();
    this.$SetOptions$($DvtTagCloudKeyboardHandler$$);
    this.$StopAnimation$();
    this.$_oldContainer$ = this.$_container$;
    this.$_oldItems$ = this.$_items$;
    this.$_items$ = [];
    this.$_itemCollection$ = [];
    this.$_container$ = new $dvt$$10$$.$Container$(this.$getCtx$());
    this.$addChild$(this.$_container$);
    $DvtTagCloudRenderer$$.$render$(this, this.$_container$, new $dvt$$10$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    this.$SelectionHandler$ && this.$SelectionHandler$.$processInitialSelections$(this.$Options$.selection, this.$getObjects$());
    $DvtTagCloudEventManager$$ = this.$Options$.animationDuration;
    $DvtTagCloudLayoutUtils$$ = new $dvt$$10$$.$Rectangle$(0, 0, this.$Width$, this.$Height$);
    this.$_oldContainer$ ? "none" !== this.$Options$.animationOnDataChange && $DvtTagCloudKeyboardHandler$$ && (this.$_deleteContainer$ = new $dvt$$10$$.$Container$(this.$getCtx$()), this.$addChild$(this.$_deleteContainer$), $DvtTagCloudKeyboardHandler$$ = new $dvt$$10$$.$DataAnimationHandler$(this.$getCtx$(), this.$_deleteContainer$), $DvtTagCloudKeyboardHandler$$.$constructAnimation$(this.$_oldItems$, this.$_items$), this.$Animation$ = $DvtTagCloudKeyboardHandler$$.$getAnimation$()) : "none" !== 
    this.$Options$.animationOnDisplay && (this.$Animation$ = $dvt$$10$$.$BlackBoxAnimationHandler$.$getInAnimation$(this.$getCtx$(), $dvt$$10$$.$BlackBoxAnimationHandler$.$ALPHA_FADE$, this.$_container$, $DvtTagCloudLayoutUtils$$, $DvtTagCloudEventManager$$));
    this.$Animation$ ? (this.$EventManager$.$hideTooltip$(), this.$EventManager$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnRenderEnd$, this), this.$Animation$.play()) : this.$OnRenderEnd$();
    this.$UpdateAriaAttributes$();
  };
  $dvt$$10$$.$TagCloud$.prototype.$registerItems$ = function $$dvt$$10$$$$TagCloud$$$$registerItems$$($dvt$$10$$) {
    this.$_items$ = $dvt$$10$$;
  };
  $dvt$$10$$.$TagCloud$.prototype.$getAutomation$ = function $$dvt$$10$$$$TagCloud$$$$getAutomation$$() {
    this.$Automation$ || (this.$Automation$ = new $DvtTagCloudAutomation$$(this));
    return this.$Automation$;
  };
  $dvt$$10$$.$TagCloud$.prototype.$registerObject$ = function $$dvt$$10$$$$TagCloud$$$$registerObject$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$) {
    this.$_peers$.push($dvt$$10$$);
    this.$_itemCollection$[$DvtTagCloudKeyboardHandler$$] = $dvt$$10$$;
  };
  $dvt$$10$$.$TagCloud$.prototype.$getObjects$ = function $$dvt$$10$$$$TagCloud$$$$getObjects$$() {
    return this.$_peers$;
  };
  $dvt$$10$$.$TagCloud$.prototype.$getItems$ = function $$dvt$$10$$$$TagCloud$$$$getItems$$() {
    return this.$_itemCollection$;
  };
  $dvt$$10$$.$TagCloud$.prototype.$highlight$ = function $$dvt$$10$$$$TagCloud$$$$highlight$$($DvtTagCloudKeyboardHandler$$) {
    this.$Options$.highlightedCategories = $dvt$$10$$.$JsonUtils$.clone($DvtTagCloudKeyboardHandler$$);
    $dvt$$10$$.$CategoryRolloverHandler$.$highlight$($DvtTagCloudKeyboardHandler$$, this.$getObjects$(), "any" === this.$Options$.highlightMatch);
    this.$legend$ && this.$legend$.$highlight$($DvtTagCloudKeyboardHandler$$);
  };
  $dvt$$10$$.$TagCloud$.prototype.select = function $$dvt$$10$$$$TagCloud$$$select$($DvtTagCloudKeyboardHandler$$) {
    this.$Options$.selection = $dvt$$10$$.$JsonUtils$.clone($DvtTagCloudKeyboardHandler$$);
    this.$SelectionHandler$ && this.$SelectionHandler$.$processInitialSelections$(this.$Options$.selection, this.$getObjects$());
  };
  $dvt$$10$$.$TagCloud$.prototype.$SetOptions$ = function $$dvt$$10$$$$TagCloud$$$$SetOptions$$($DvtTagCloudKeyboardHandler$$) {
    $DvtTagCloudKeyboardHandler$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($DvtTagCloudKeyboardHandler$$) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
    $DvtTagCloudKeyboardHandler$$ = this.$Options$.selectionMode;
    this.$SelectionHandler$ = "single" === $DvtTagCloudKeyboardHandler$$ ? new $dvt$$10$$.$SelectionHandler$($dvt$$10$$.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" === $DvtTagCloudKeyboardHandler$$ ? new $dvt$$10$$.$SelectionHandler$($dvt$$10$$.$SelectionHandler$.$TYPE_MULTIPLE$) : null;
    this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
    $dvt$$10$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none");
  };
  $dvt$$10$$.$TagCloud$.prototype.$GetComponentDescription$ = function $$dvt$$10$$$$TagCloud$$$$GetComponentDescription$$() {
    return $dvt$$10$$.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", $dvt$$10$$.$Bundle$.$UTIL_PREFIX$, "TAG_CLOUD");
  };
  $dvt$$10$$.$TagCloud$.prototype.$OnRenderEnd$ = function $$dvt$$10$$$$TagCloud$$$$OnRenderEnd$$() {
    this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
    this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$(), this.$_deleteContainer$ = null);
    this.$Animation$ && this.$EventManager$.$addListeners$(this);
    this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories);
    this.$AnimationStopped$ || this.$RenderComplete$();
    this.$Animation$ = null;
    this.$AnimationStopped$ = !1;
  };
  $dvt$$10$$.$TagCloud$.prototype.$__cleanUp$ = function $$dvt$$10$$$$TagCloud$$$$__cleanUp$$() {
    this.$EventManager$.$hideTooltip$();
    this.$_peers$.length = 0;
  };
  $dvt$$10$$.$TagCloud$.prototype.$processEvent$ = function $$dvt$$10$$$$TagCloud$$$$processEvent$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$) {
    var $DvtTagCloudLayoutUtils$$ = $DvtTagCloudKeyboardHandler$$.type;
    if ("categoryHide" == $DvtTagCloudLayoutUtils$$ || "categoryShow" == $DvtTagCloudLayoutUtils$$) {
      var $DvtTagCloudDefaults$$ = $DvtTagCloudKeyboardHandler$$.category, $DvtTagCloudObjPeer$$ = $dvt$$10$$.$ArrayUtils$.$getIndex$(this.$Options$.hiddenCategories, $DvtTagCloudDefaults$$);
      "categoryHide" == $DvtTagCloudLayoutUtils$$ && 0 > $DvtTagCloudObjPeer$$ && this.$Options$.hiddenCategories.push($DvtTagCloudDefaults$$);
      "categoryShow" == $DvtTagCloudLayoutUtils$$ && 0 <= $DvtTagCloudObjPeer$$ && this.$Options$.hiddenCategories.splice($DvtTagCloudObjPeer$$, 1);
      this.$render$(this.$Options$, this.$Width$, this.$Height$);
    } else {
      "categoryHighlight" == $DvtTagCloudLayoutUtils$$ && (this != $DvtTagCloudEventManager$$ ? this.$highlight$($DvtTagCloudKeyboardHandler$$.categories) : this.$legend$ && this.$legend$ != $DvtTagCloudEventManager$$ && this.$legend$.$processEvent$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$));
    }
    $DvtTagCloudKeyboardHandler$$ && this.dispatchEvent($DvtTagCloudKeyboardHandler$$);
  };
  $dvt$$10$$.$TagCloud$.prototype.$isDragSupported$ = function $$dvt$$10$$$$TagCloud$$$$isDragSupported$$($dvt$$10$$) {
    return this.$SelectionHandler$ ? $dvt$$10$$[0] : null;
  };
  $dvt$$10$$.$TagCloud$.prototype.$getDragRowKeys$ = function $$dvt$$10$$$$TagCloud$$$$getDragRowKeys$$($dvt$$10$$) {
    $dvt$$10$$.$isSelected$() || (this.$SelectionHandler$.$processClick$($dvt$$10$$, !1), this.$EventManager$.$fireSelectionEvent$());
    $dvt$$10$$ = [];
    for (var $DvtTagCloudKeyboardHandler$$ = this.$SelectionHandler$.getSelection(), $DvtTagCloudEventManager$$ = 0;$DvtTagCloudEventManager$$ < $DvtTagCloudKeyboardHandler$$.length;$DvtTagCloudEventManager$$++) {
      var $DvtTagCloudLayoutUtils$$ = $DvtTagCloudKeyboardHandler$$[$DvtTagCloudEventManager$$];
      $DvtTagCloudLayoutUtils$$ instanceof $DvtTagCloudObjPeer$$ && $dvt$$10$$.push($DvtTagCloudLayoutUtils$$.getId());
    }
    return $dvt$$10$$;
  };
  $dvt$$10$$.$TagCloud$.prototype.$getDragFeedback$ = function $$dvt$$10$$$$TagCloud$$$$getDragFeedback$$() {
    for (var $dvt$$10$$ = [], $DvtTagCloudKeyboardHandler$$ = this.$SelectionHandler$.getSelection(), $DvtTagCloudEventManager$$ = 0;$DvtTagCloudEventManager$$ < $DvtTagCloudKeyboardHandler$$.length;$DvtTagCloudEventManager$$++) {
      $dvt$$10$$ = $dvt$$10$$.concat($DvtTagCloudKeyboardHandler$$[$DvtTagCloudEventManager$$].$getDisplayables$());
    }
    return $dvt$$10$$;
  };
  $dvt$$10$$.$TagCloud$.prototype.$isDragAvailable$ = function $$dvt$$10$$$$TagCloud$$$$isDragAvailable$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$) {
    return this.$_dragSource$.$isDragAvailable$($DvtTagCloudEventManager$$);
  };
  $dvt$$10$$.$TagCloud$.prototype.$getDragTransferable$ = function $$dvt$$10$$$$TagCloud$$$$getDragTransferable$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$) {
    return this.$_dragSource$.$getDragTransferable$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$);
  };
  $dvt$$10$$.$TagCloud$.prototype.$getDragOverFeedback$ = function $$dvt$$10$$$$TagCloud$$$$getDragOverFeedback$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$) {
    return this.$_dragSource$.$getDragOverFeedback$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$);
  };
  $dvt$$10$$.$TagCloud$.prototype.$getDragOffset$ = function $$dvt$$10$$$$TagCloud$$$$getDragOffset$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$) {
    return this.$_dragSource$.$getDragOffset$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$);
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTagCloudAutomation$$, $dvt$$10$$.$Automation$);
  $DvtTagCloudAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTagCloudAutomation$$$$$GetSubIdForDomElement$$($dvt$$10$$) {
    return ($dvt$$10$$ = this.$_tagCloud$.$EventManager$.$GetLogicalObject$($dvt$$10$$)) && $dvt$$10$$ instanceof $DvtTagCloudObjPeer$$ ? "item[" + this.$_tagCloud$.$getItems$().indexOf($dvt$$10$$) + "]" : null;
  };
  $DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTagCloudAutomation$$$$$getDomElementForSubId$$($DvtTagCloudKeyboardHandler$$) {
    if ($DvtTagCloudKeyboardHandler$$ == $dvt$$10$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_tagCloud$);
    }
    var $DvtTagCloudEventManager$$ = $DvtTagCloudKeyboardHandler$$.indexOf("[");
    return 0 < $DvtTagCloudEventManager$$ && "item" === $DvtTagCloudKeyboardHandler$$.substring(0, $DvtTagCloudEventManager$$) && ($DvtTagCloudKeyboardHandler$$ = parseInt($DvtTagCloudKeyboardHandler$$.substring($DvtTagCloudEventManager$$ + 1, $DvtTagCloudKeyboardHandler$$.length - 1)), $DvtTagCloudKeyboardHandler$$ = this.$_tagCloud$.$getItems$()[$DvtTagCloudKeyboardHandler$$]) ? $DvtTagCloudKeyboardHandler$$.$getDisplayables$()[0].$getElem$() : null;
  };
  $DvtTagCloudAutomation$$.prototype.getItem = function $$DvtTagCloudAutomation$$$$getItem$($dvt$$10$$) {
    if ($dvt$$10$$ = this.$_tagCloud$.$getItems$()[$dvt$$10$$]) {
      var $DvtTagCloudKeyboardHandler$$ = {};
      $DvtTagCloudKeyboardHandler$$.color = $dvt$$10$$.$getDatatipColor$();
      $DvtTagCloudKeyboardHandler$$.tooltip = $dvt$$10$$.$getShortDesc$();
      $DvtTagCloudKeyboardHandler$$.label = $dvt$$10$$.$getLabel$();
      $DvtTagCloudKeyboardHandler$$.value = $dvt$$10$$.getValue();
      $DvtTagCloudKeyboardHandler$$.selected = $dvt$$10$$.$isSelected$();
      return $DvtTagCloudKeyboardHandler$$;
    }
    return null;
  };
  $DvtTagCloudAutomation$$.prototype.$getItemCount$ = function $$DvtTagCloudAutomation$$$$$getItemCount$$() {
    return this.$_tagCloud$.$getObjects$().length;
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTagCloudItem$$, $dvt$$10$$.$BackgroundOutputText$);
  $DvtTagCloudItem$$.$_HOVER_OPACITY$ = .3;
  $DvtTagCloudItem$$.$_HOVER_SELECTED_OPACITY$ = .6;
  $DvtTagCloudItem$$.$ANIMATION_DELETE_PRIORITY$ = 0;
  $DvtTagCloudItem$$.$ANIMATION_UPDATE_PRIORITY$ = 1;
  $DvtTagCloudItem$$.$ANIMATION_INSERT_PRIORITY$ = 2;
  $DvtTagCloudItem$$.prototype.Init = function $$DvtTagCloudItem$$$$Init$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$, $DvtTagCloudDefaults$$, $DvtTagCloudObjPeer$$, $DvtTagCloudAutomation$$) {
    $DvtTagCloudItem$$.$superclass$.Init.call(this, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$, $DvtTagCloudDefaults$$, $DvtTagCloudObjPeer$$, $DvtTagCloudAutomation$$);
    this.$_tagCloud$ = $dvt$$10$$;
    this.$alignAuto$();
    $DvtTagCloudObjPeer$$ && this.$_createFeedbackStyles$($DvtTagCloudObjPeer$$);
  };
  $DvtTagCloudItem$$.prototype.$setSelected$ = function $$DvtTagCloudItem$$$$$setSelected$$($dvt$$10$$) {
    this.$_isSelected$ != $dvt$$10$$ && ((this.$_isSelected$ = $dvt$$10$$) ? this.$_isShowingHoverEffect$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$));
  };
  $DvtTagCloudItem$$.prototype.$showHoverEffect$ = function $$DvtTagCloudItem$$$$$showHoverEffect$$() {
    this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = !0, this.$_isSelected$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_hoverStyle$));
  };
  $DvtTagCloudItem$$.prototype.$hideHoverEffect$ = function $$DvtTagCloudItem$$$$$hideHoverEffect$$() {
    this.$_isSelected$ ? this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$);
    this.$_isShowingHoverEffect$ = !1;
  };
  $DvtTagCloudItem$$.prototype.$animateUpdate$ = function $$DvtTagCloudItem$$$$$animateUpdate$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$) {
    var $DvtTagCloudLayoutUtils$$ = new $dvt$$10$$.$CustomAnimation$(this.$getCtx$(), this, $DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), $DvtTagCloudDefaults$$ = this.$getCSSStyle$(), $DvtTagCloudObjPeer$$ = $DvtTagCloudEventManager$$.$getCSSStyle$(), $DvtTagCloudAutomation$$ = !1, $DvtTagCloudRenderer$$ = $DvtTagCloudObjPeer$$.$getStyle$($dvt$$10$$.$CSSStyle$.$COLOR$), $endAlign_endColor$$17$$ = $DvtTagCloudDefaults$$.$getStyle$($dvt$$10$$.$CSSStyle$.$COLOR$);
    if ($DvtTagCloudRenderer$$ != $endAlign_endColor$$17$$) {
      var $tag$$ = this;
      this.$setCSSStyle$($DvtTagCloudDefaults$$.$setStyle$($dvt$$10$$.$CSSStyle$.$COLOR$, $DvtTagCloudRenderer$$));
      $DvtTagCloudLayoutUtils$$.$_animator$.$addProp$($dvt$$10$$.$Animator$.$TYPE_COLOR$, this, function() {
        return $tag$$.$getCSSStyle$().$getStyle$($dvt$$10$$.$CSSStyle$.$COLOR$);
      }, function($DvtTagCloudKeyboardHandler$$) {
        $tag$$.$setCSSStyle$($tag$$.$getCSSStyle$().$setStyle$($dvt$$10$$.$CSSStyle$.$COLOR$, $DvtTagCloudKeyboardHandler$$));
      }, $endAlign_endColor$$17$$);
    }
    $DvtTagCloudObjPeer$$ = parseFloat($DvtTagCloudObjPeer$$.$getStyle$($dvt$$10$$.$CSSStyle$.$FONT_SIZE$));
    $DvtTagCloudDefaults$$ = parseFloat($DvtTagCloudDefaults$$.$getStyle$($dvt$$10$$.$CSSStyle$.$FONT_SIZE$));
    $DvtTagCloudObjPeer$$ != $DvtTagCloudDefaults$$ && ($DvtTagCloudAutomation$$ = !0, $tag$$ = this, this.$setFontSize$($DvtTagCloudObjPeer$$), $DvtTagCloudLayoutUtils$$.$_animator$.$addProp$($dvt$$10$$.$Animator$.$TYPE_NUMBER$, this, function() {
      return parseFloat($tag$$.$getCSSStyle$().$getStyle$($dvt$$10$$.$CSSStyle$.$FONT_SIZE$));
    }, this.$setFontSize$, $DvtTagCloudDefaults$$));
    $DvtTagCloudDefaults$$ = $DvtTagCloudEventManager$$.$getX$();
    $DvtTagCloudObjPeer$$ = this.$getX$();
    $DvtTagCloudRenderer$$ = $DvtTagCloudEventManager$$.$getHorizAlignment$();
    $endAlign_endColor$$17$$ = this.$getHorizAlignment$();
    if ($DvtTagCloudObjPeer$$ != $DvtTagCloudDefaults$$ || $DvtTagCloudAutomation$$ && $endAlign_endColor$$17$$ != $DvtTagCloudRenderer$$) {
      $endAlign_endColor$$17$$ != $DvtTagCloudRenderer$$ && ($DvtTagCloudDefaults$$ = $DvtTagCloudItem$$.$_adjustX$($DvtTagCloudEventManager$$, $DvtTagCloudDefaults$$, $DvtTagCloudRenderer$$)), this.$setX$($DvtTagCloudDefaults$$), $DvtTagCloudLayoutUtils$$.$_animator$.$addProp$($dvt$$10$$.$Animator$.$TYPE_NUMBER$, this, this.$getX$, this.$setX$, $DvtTagCloudObjPeer$$);
    }
    $DvtTagCloudAutomation$$ = $DvtTagCloudEventManager$$.$getY$();
    $DvtTagCloudDefaults$$ = this.$getY$();
    $DvtTagCloudDefaults$$ != $DvtTagCloudAutomation$$ && (this.$setY$($DvtTagCloudAutomation$$), $DvtTagCloudLayoutUtils$$.$_animator$.$addProp$($dvt$$10$$.$Animator$.$TYPE_NUMBER$, this, this.$getY$, this.$setY$, $DvtTagCloudDefaults$$));
    $DvtTagCloudEventManager$$.$setAlpha$(0);
    $DvtTagCloudKeyboardHandler$$.add($DvtTagCloudLayoutUtils$$, $DvtTagCloudItem$$.$ANIMATION_UPDATE_PRIORITY$);
  };
  $DvtTagCloudItem$$.prototype.$animateDelete$ = function $$DvtTagCloudItem$$$$$animateDelete$$($DvtTagCloudKeyboardHandler$$) {
    $DvtTagCloudKeyboardHandler$$.add(new $dvt$$10$$.$AnimFadeOut$(this.$getCtx$(), this, $DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), $DvtTagCloudItem$$.$ANIMATION_DELETE_PRIORITY$);
  };
  $DvtTagCloudItem$$.prototype.$animateInsert$ = function $$DvtTagCloudItem$$$$$animateInsert$$($DvtTagCloudKeyboardHandler$$) {
    this.$setAlpha$(0);
    $DvtTagCloudKeyboardHandler$$.add(new $dvt$$10$$.$AnimFadeIn$(this.$getCtx$(), this, $DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), $DvtTagCloudItem$$.$ANIMATION_INSERT_PRIORITY$);
  };
  $DvtTagCloudItem$$.prototype.$setFontSize$ = function $$DvtTagCloudItem$$$$$setFontSize$$($dvt$$10$$) {
    $DvtTagCloudItem$$.$superclass$.$setFontSize$.call(this, $dvt$$10$$);
    this.$_createFeedbackStyles$(this.$getCSSStyle$());
  };
  $DvtTagCloudItem$$.prototype.$_createFeedbackStyles$ = function $$DvtTagCloudItem$$$$$_createFeedbackStyles$$($DvtTagCloudKeyboardHandler$$) {
    this.$_normalStyle$ = $DvtTagCloudKeyboardHandler$$.clone();
    $DvtTagCloudKeyboardHandler$$ = this.$_normalStyle$.$getStyle$($dvt$$10$$.$CSSStyle$.$COLOR$);
    this.$_normalStyle$.$setStyle$($dvt$$10$$.$CSSStyle$.$BACKGROUND_COLOR$, null);
    this.$_hoverStyle$ = this.$_normalStyle$.clone();
    var $DvtTagCloudEventManager$$ = $DvtTagCloudItem$$.$_lightenColor$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudItem$$.$_HOVER_OPACITY$);
    this.$_hoverStyle$.$setStyle$($dvt$$10$$.$CSSStyle$.$BACKGROUND_COLOR$, $DvtTagCloudEventManager$$);
    this.$_hoverStyle$.$setStyle$($dvt$$10$$.$CSSStyle$.$COLOR$, $dvt$$10$$.$ColorUtils$.$getContrastingTextColor$($DvtTagCloudEventManager$$));
    this.$_selectedStyle$ = this.$_normalStyle$.clone();
    this.$_selectedStyle$.$setStyle$($dvt$$10$$.$CSSStyle$.$BACKGROUND_COLOR$, $DvtTagCloudKeyboardHandler$$);
    this.$_selectedStyle$.$setStyle$($dvt$$10$$.$CSSStyle$.$COLOR$, $dvt$$10$$.$ColorUtils$.$getContrastingTextColor$($DvtTagCloudKeyboardHandler$$));
    this.$_hoverSelectedStyle$ = this.$_normalStyle$.clone();
    $DvtTagCloudKeyboardHandler$$ = $DvtTagCloudItem$$.$_lightenColor$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudItem$$.$_HOVER_SELECTED_OPACITY$);
    this.$_hoverSelectedStyle$.$setStyle$($dvt$$10$$.$CSSStyle$.$BACKGROUND_COLOR$, $DvtTagCloudKeyboardHandler$$);
    this.$_hoverSelectedStyle$.$setStyle$($dvt$$10$$.$CSSStyle$.$COLOR$, $dvt$$10$$.$ColorUtils$.$getContrastingTextColor$($DvtTagCloudKeyboardHandler$$));
  };
  $DvtTagCloudItem$$.$_adjustX$ = function $$DvtTagCloudItem$$$$_adjustX$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$) {
    $DvtTagCloudKeyboardHandler$$ = $DvtTagCloudKeyboardHandler$$.$getTextDimensions$();
    return $DvtTagCloudLayoutUtils$$ == $dvt$$10$$.$OutputText$.$H_ALIGN_LEFT$ ? $DvtTagCloudEventManager$$ + $DvtTagCloudKeyboardHandler$$.$w$ : $DvtTagCloudLayoutUtils$$ == $dvt$$10$$.$OutputText$.$H_ALIGN_RIGHT$ ? $DvtTagCloudEventManager$$ - $DvtTagCloudKeyboardHandler$$.$w$ : $DvtTagCloudEventManager$$;
  };
  $DvtTagCloudItem$$.$_lightenColor$ = function $$DvtTagCloudItem$$$$_lightenColor$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$) {
    var $DvtTagCloudLayoutUtils$$ = $dvt$$10$$.$ColorUtils$.$getRed$($DvtTagCloudKeyboardHandler$$), $DvtTagCloudDefaults$$ = $dvt$$10$$.$ColorUtils$.$getGreen$($DvtTagCloudKeyboardHandler$$), $DvtTagCloudObjPeer$$ = $dvt$$10$$.$ColorUtils$.$getBlue$($DvtTagCloudKeyboardHandler$$);
    return $dvt$$10$$.$ColorUtils$.$makeRGB$(Math.floor(255 * (1 - $DvtTagCloudEventManager$$) + $DvtTagCloudEventManager$$ * $DvtTagCloudLayoutUtils$$), Math.floor(255 * (1 - $DvtTagCloudEventManager$$) + $DvtTagCloudEventManager$$ * $DvtTagCloudDefaults$$), Math.floor(255 * (1 - $DvtTagCloudEventManager$$) + $DvtTagCloudEventManager$$ * $DvtTagCloudObjPeer$$));
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTagCloudObjPeer$$, $dvt$$10$$.$Obj$);
  $DvtTagCloudObjPeer$$.prototype.Init = function $$DvtTagCloudObjPeer$$$$Init$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$) {
    this.$_view$ = $DvtTagCloudKeyboardHandler$$;
    this.$_displayable$ = $DvtTagCloudEventManager$$;
    this.$_data$ = $DvtTagCloudLayoutUtils$$;
    this.$_bSelectable$ = this.$_isSelected$ = !1;
    $DvtTagCloudLayoutUtils$$.url ? ($DvtTagCloudEventManager$$.$setAriaRole$("link"), this.$_linkCallback$ = $dvt$$10$$.$ToolkitUtils$.$getLinkCallback$("_blank", $DvtTagCloudLayoutUtils$$.url)) : $DvtTagCloudEventManager$$.$setAriaRole$("img");
    this.$_updateAriaLabel$();
  };
  $DvtTagCloudObjPeer$$.prototype.getId = function $$DvtTagCloudObjPeer$$$$getId$() {
    return this.$_data$.id;
  };
  $DvtTagCloudObjPeer$$.prototype.$getLabel$ = function $$DvtTagCloudObjPeer$$$$$getLabel$$() {
    return this.$_data$.label;
  };
  $DvtTagCloudObjPeer$$.prototype.getValue = function $$DvtTagCloudObjPeer$$$$getValue$() {
    return this.$_data$.value;
  };
  $DvtTagCloudObjPeer$$.prototype.$getShortDesc$ = function $$DvtTagCloudObjPeer$$$$$getShortDesc$$() {
    return this.$_data$.shortDesc;
  };
  $DvtTagCloudObjPeer$$.prototype.$getAction$ = function $$DvtTagCloudObjPeer$$$$$getAction$$() {
    return this.$_data$.action;
  };
  $DvtTagCloudObjPeer$$.prototype.$getDatatip$ = function $$DvtTagCloudObjPeer$$$$$getDatatip$$() {
    var $dvt$$10$$ = this.$_view$.$getOptions$().tooltip;
    return ($dvt$$10$$ = $dvt$$10$$ ? $dvt$$10$$.renderer : null) ? this.$_view$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($dvt$$10$$, this.$getDataContext$()) : this.$getShortDesc$();
  };
  $DvtTagCloudObjPeer$$.prototype.$getDataContext$ = function $$DvtTagCloudObjPeer$$$$$getDataContext$$() {
    return {id:this.getId(), label:this.$getLabel$(), color:this.$getDatatipColor$(), value:this.getValue()};
  };
  $DvtTagCloudObjPeer$$.prototype.$getLinkCallback$ = function $$DvtTagCloudObjPeer$$$$$getLinkCallback$$() {
    return this.$_linkCallback$;
  };
  $DvtTagCloudObjPeer$$.prototype.$getDatatipColor$ = function $$DvtTagCloudObjPeer$$$$$getDatatipColor$$() {
    this.$_dataColor$ || (this.$_dataColor$ = (new $dvt$$10$$.$CSSStyle$(this.$_data$.style)).$getStyle$($dvt$$10$$.$CSSStyle$.$COLOR$));
    return this.$_dataColor$;
  };
  $DvtTagCloudObjPeer$$.prototype.$setSelectable$ = function $$DvtTagCloudObjPeer$$$$$setSelectable$$($dvt$$10$$) {
    this.$_bSelectable$ = $dvt$$10$$;
  };
  $DvtTagCloudObjPeer$$.prototype.$isSelectable$ = function $$DvtTagCloudObjPeer$$$$$isSelectable$$() {
    return this.$_bSelectable$;
  };
  $DvtTagCloudObjPeer$$.prototype.$isSelected$ = function $$DvtTagCloudObjPeer$$$$$isSelected$$() {
    return this.$_isSelected$;
  };
  $DvtTagCloudObjPeer$$.prototype.$setSelected$ = function $$DvtTagCloudObjPeer$$$$$setSelected$$($dvt$$10$$) {
    this.$_isSelected$ = $dvt$$10$$;
    this.$_displayable$.$setSelected$($dvt$$10$$);
    this.$_updateAriaLabel$();
  };
  $DvtTagCloudObjPeer$$.prototype.$showHoverEffect$ = function $$DvtTagCloudObjPeer$$$$$showHoverEffect$$() {
    this.$_displayable$.$showHoverEffect$();
  };
  $DvtTagCloudObjPeer$$.prototype.$hideHoverEffect$ = function $$DvtTagCloudObjPeer$$$$$hideHoverEffect$$() {
    this.$_displayable$.$hideHoverEffect$();
  };
  $DvtTagCloudObjPeer$$.prototype.$getNextNavigable$ = function $$DvtTagCloudObjPeer$$$$$getNextNavigable$$($DvtTagCloudEventManager$$) {
    var $DvtTagCloudLayoutUtils$$ = this.$_view$.$EventManager$.$KeyboardHandler$;
    return $DvtTagCloudEventManager$$.type == $dvt$$10$$.MouseEvent.$CLICK$ || $DvtTagCloudLayoutUtils$$.$isMultiSelectEvent$($DvtTagCloudEventManager$$) ? this : $DvtTagCloudLayoutUtils$$.$isNavigationEvent$($DvtTagCloudEventManager$$) ? $DvtTagCloudKeyboardHandler$$.$getNextNavigable$(this, $DvtTagCloudEventManager$$, this.$_view$.$getObjects$()) : null;
  };
  $DvtTagCloudObjPeer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtTagCloudObjPeer$$$$$getKeyboardBoundingBox$$($dvt$$10$$) {
    return this.$_displayable$.$getDimensions$($dvt$$10$$);
  };
  $DvtTagCloudObjPeer$$.prototype.$getTargetElem$ = function $$DvtTagCloudObjPeer$$$$$getTargetElem$$() {
    return this.$_displayable$.$getElem$();
  };
  $DvtTagCloudObjPeer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtTagCloudObjPeer$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$showHoverEffect$();
  };
  $DvtTagCloudObjPeer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtTagCloudObjPeer$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = !1, this.$hideHoverEffect$());
  };
  $DvtTagCloudObjPeer$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtTagCloudObjPeer$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtTagCloudObjPeer$$.prototype.$getDisplayables$ = function $$DvtTagCloudObjPeer$$$$$getDisplayables$$() {
    return [this.$_displayable$];
  };
  $DvtTagCloudObjPeer$$.prototype.$getAriaLabel$ = function $$DvtTagCloudObjPeer$$$$$getAriaLabel$$() {
    var $DvtTagCloudKeyboardHandler$$ = [];
    this.$isSelectable$() && $DvtTagCloudKeyboardHandler$$.push($dvt$$10$$.$Bundle$.$getTranslatedString$($dvt$$10$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    return $dvt$$10$$.$Displayable$.$generateAriaLabel$(this.$getShortDesc$(), $DvtTagCloudKeyboardHandler$$);
  };
  $DvtTagCloudObjPeer$$.prototype.$getCategories$ = function $$DvtTagCloudObjPeer$$$$$getCategories$$() {
    return this.$_data$.categories;
  };
  $DvtTagCloudObjPeer$$.prototype.$_updateAriaLabel$ = function $$DvtTagCloudObjPeer$$$$$_updateAriaLabel$$() {
    $dvt$$10$$.$Agent$.$deferAriaCreation$() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$());
  };
  $DvtTagCloudObjPeer$$.prototype.$getShowPopupBehaviors$ = function $$DvtTagCloudObjPeer$$$$$getShowPopupBehaviors$$() {
    if (!this.$_showPopupBehaviors$ && (this.$_showPopupBehaviors$ = [], this.$_data$.showPopupBehaviors)) {
      for (var $DvtTagCloudKeyboardHandler$$ = this.$_data$.showPopupBehaviors, $DvtTagCloudEventManager$$ = 0;$DvtTagCloudEventManager$$ < $DvtTagCloudKeyboardHandler$$.length;$DvtTagCloudEventManager$$++) {
        this.$_showPopupBehaviors$.push(new $dvt$$10$$.$ShowPopupBehavior$($DvtTagCloudKeyboardHandler$$[$DvtTagCloudEventManager$$].popupId, $DvtTagCloudKeyboardHandler$$[$DvtTagCloudEventManager$$].triggerType, $DvtTagCloudKeyboardHandler$$[$DvtTagCloudEventManager$$].alignId, $DvtTagCloudKeyboardHandler$$[$DvtTagCloudEventManager$$].align));
      }
    }
    return this.$_showPopupBehaviors$;
  };
  $DvtTagCloudObjPeer$$.prototype.$isDragAvailable$ = function $$DvtTagCloudObjPeer$$$$$isDragAvailable$$($dvt$$10$$) {
    return this.$_view$.$isDragSupported$($dvt$$10$$);
  };
  $DvtTagCloudObjPeer$$.prototype.$getDragTransferable$ = function $$DvtTagCloudObjPeer$$$$$getDragTransferable$$() {
    return this.$_view$.$getDragRowKeys$(this);
  };
  $DvtTagCloudObjPeer$$.prototype.$getDragFeedback$ = function $$DvtTagCloudObjPeer$$$$$getDragFeedback$$() {
    return this.$_view$.$getDragFeedback$();
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTagCloudDefaults$$, $dvt$$10$$.$BaseComponentDefaults$);
  $DvtTagCloudDefaults$$.$VERSION_1$ = {animationOnDisplay:"none", animationOnDataChange:"none", emptyText:null, hiddenCategories:[], hideAndShowBehavior:"none", highlightedCategories:[], highlightMatch:"all", hoverBehavior:"none", layout:"rectangular", selectionMode:"none", _statusMessageStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$ + "color: #333333;"), styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, style:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$ + 
  "color: #333333;")}, touchResponse:"auto"};
  var $DvtTagCloudRenderer$$ = {};
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTagCloudRenderer$$, $dvt$$10$$.$Obj$);
  $DvtTagCloudRenderer$$.$render$ = function $$DvtTagCloudRenderer$$$$render$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$) {
    $DvtTagCloudRenderer$$.$_renderBackground$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$);
    $DvtTagCloudRenderer$$.$_renderLegend$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$);
    $DvtTagCloudRenderer$$.$_adjustAvailSpace$($DvtTagCloudEventManager$$);
    var $DvtTagCloudLayoutUtils$$ = $dvt$$10$$.$getOptions$();
    $DvtTagCloudLayoutUtils$$.items && 0 < $DvtTagCloudLayoutUtils$$.items.length ? ($DvtTagCloudLayoutUtils$$ = $DvtTagCloudRenderer$$.$_renderItems$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$), 0 < $DvtTagCloudLayoutUtils$$.length ? ($dvt$$10$$.$registerItems$($DvtTagCloudLayoutUtils$$), $dvt$$10$$.$EventManager$.$setFocusObj$($dvt$$10$$.$getObjects$()[0])) : $DvtTagCloudRenderer$$.$_renderEmptyText$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$)) : 
    $DvtTagCloudRenderer$$.$_renderEmptyText$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$);
  };
  $DvtTagCloudRenderer$$.$_renderEmptyText$ = function $$DvtTagCloudRenderer$$$$_renderEmptyText$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$) {
    var $DvtTagCloudDefaults$$ = $DvtTagCloudKeyboardHandler$$.$getOptions$(), $DvtTagCloudObjPeer$$ = $DvtTagCloudDefaults$$.emptyText;
    $DvtTagCloudObjPeer$$ || ($DvtTagCloudObjPeer$$ = $dvt$$10$$.$Bundle$.$getTranslation$($DvtTagCloudDefaults$$, "labelNoData", $dvt$$10$$.$Bundle$.$UTIL_PREFIX$, "NO_DATA", null));
    $dvt$$10$$.$TextUtils$.$renderEmptyText$($DvtTagCloudEventManager$$, $DvtTagCloudObjPeer$$, new $dvt$$10$$.$Rectangle$($DvtTagCloudLayoutUtils$$.x, $DvtTagCloudLayoutUtils$$.y, $DvtTagCloudLayoutUtils$$.$w$, $DvtTagCloudLayoutUtils$$.$h$), $DvtTagCloudKeyboardHandler$$.$EventManager$, $DvtTagCloudDefaults$$._statusMessageStyle);
  };
  $DvtTagCloudRenderer$$.$_renderBackground$ = function $$DvtTagCloudRenderer$$$$_renderBackground$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$) {
    $DvtTagCloudKeyboardHandler$$ = new $dvt$$10$$.Rect($DvtTagCloudKeyboardHandler$$.$getCtx$(), $DvtTagCloudLayoutUtils$$.x, $DvtTagCloudLayoutUtils$$.y, $DvtTagCloudLayoutUtils$$.$w$, $DvtTagCloudLayoutUtils$$.$h$);
    $DvtTagCloudKeyboardHandler$$.$setInvisibleFill$();
    $DvtTagCloudEventManager$$.$addChild$($DvtTagCloudKeyboardHandler$$);
  };
  $DvtTagCloudRenderer$$.$_renderItems$ = function $$DvtTagCloudRenderer$$$$_renderItems$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudDefaults$$) {
    for (var $DvtTagCloudAutomation$$ = $DvtTagCloudKeyboardHandler$$.$getOptions$(), $DvtTagCloudRenderer$$ = [], $DvtTagCloudStyleUtils$$ = $DvtTagCloudAutomation$$.items, $fontSizeFunction_minValue$$12$$ = Number.MAX_VALUE, $categoryMap$$2_maxValue$$13$$ = -Number.MAX_VALUE, $i$$573$$ = 0;$i$$573$$ < $DvtTagCloudStyleUtils$$.length;$i$$573$$++) {
      $fontSizeFunction_minValue$$12$$ = Math.min($fontSizeFunction_minValue$$12$$, $DvtTagCloudStyleUtils$$[$i$$573$$].value), $categoryMap$$2_maxValue$$13$$ = Math.max($categoryMap$$2_maxValue$$13$$, $DvtTagCloudStyleUtils$$[$i$$573$$].value);
    }
    $fontSizeFunction_minValue$$12$$ = $DvtTagCloudLayoutUtils$$.$getFontSizeFunction$($fontSizeFunction_minValue$$12$$, $categoryMap$$2_maxValue$$13$$);
    $categoryMap$$2_maxValue$$13$$ = $dvt$$10$$.$ArrayUtils$.$createBooleanMap$($DvtTagCloudAutomation$$.hiddenCategories);
    for ($i$$573$$ = 0;$i$$573$$ < $DvtTagCloudStyleUtils$$.length;$i$$573$$++) {
      var $data$$104$$ = $DvtTagCloudStyleUtils$$[$i$$573$$];
      $data$$104$$.categories || ($data$$104$$.categories = [$data$$104$$.label]);
      if (!$categoryMap$$2_maxValue$$13$$ || !$dvt$$10$$.$ArrayUtils$.$hasAnyMapItem$($categoryMap$$2_maxValue$$13$$, $data$$104$$.categories)) {
        var $item$$48_style$$100$$ = $DvtTagCloudAutomation$$.styleDefaults.style.clone(), $color$$68_peer$$32$$ = $data$$104$$.color;
        $color$$68_peer$$32$$ && $item$$48_style$$100$$.$setStyle$($dvt$$10$$.$CSSStyle$.$COLOR$, $color$$68_peer$$32$$);
        $item$$48_style$$100$$.$parseInlineStyle$($data$$104$$.style);
        $item$$48_style$$100$$.$setStyle$($dvt$$10$$.$CSSStyle$.$FONT_SIZE$, $fontSizeFunction_minValue$$12$$.call(null, $data$$104$$.value).toString());
        $item$$48_style$$100$$ = new $DvtTagCloudItem$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudKeyboardHandler$$.$getCtx$(), $data$$104$$.label, 0, 0, $item$$48_style$$100$$, $data$$104$$.id);
        $color$$68_peer$$32$$ = new $DvtTagCloudObjPeer$$($DvtTagCloudKeyboardHandler$$, $item$$48_style$$100$$, $data$$104$$);
        $DvtTagCloudKeyboardHandler$$.$EventManager$.$associate$($item$$48_style$$100$$, $color$$68_peer$$32$$);
        $DvtTagCloudKeyboardHandler$$.$registerObject$($color$$68_peer$$32$$, $i$$573$$);
        "none" !== $DvtTagCloudAutomation$$.selectionMode && $color$$68_peer$$32$$.$setSelectable$(!0);
        ($color$$68_peer$$32$$.$isSelectable$() || $data$$104$$.url || $color$$68_peer$$32$$.$getAction$()) && $item$$48_style$$100$$.setCursor("pointer");
        $DvtTagCloudRenderer$$.push($item$$48_style$$100$$);
        $DvtTagCloudEventManager$$.$addChild$($item$$48_style$$100$$);
      }
    }
    0 < $DvtTagCloudRenderer$$.length && ("cloud" === $DvtTagCloudAutomation$$.layout ? $DvtTagCloudLayoutUtils$$.$cloudLayout$($DvtTagCloudDefaults$$, $DvtTagCloudRenderer$$) : $DvtTagCloudLayoutUtils$$.$rectangleLayout$($DvtTagCloudDefaults$$, $DvtTagCloudRenderer$$, $dvt$$10$$.$Agent$.$isRightToLeft$($DvtTagCloudKeyboardHandler$$.$getCtx$())));
    return $DvtTagCloudRenderer$$;
  };
  $DvtTagCloudRenderer$$.$_renderLegend$ = function $$DvtTagCloudRenderer$$$$_renderLegend$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$) {
    var $DvtTagCloudDefaults$$ = $DvtTagCloudKeyboardHandler$$.$getOptions$(), $DvtTagCloudObjPeer$$ = $DvtTagCloudDefaults$$.legend;
    if ($DvtTagCloudObjPeer$$ && $DvtTagCloudObjPeer$$.sections) {
      $DvtTagCloudObjPeer$$ = $dvt$$10$$.$JsonUtils$.clone($DvtTagCloudObjPeer$$);
      $DvtTagCloudObjPeer$$.orientation = "horizontal";
      $DvtTagCloudObjPeer$$.halign = "center";
      $DvtTagCloudObjPeer$$.hoverBehavior = $DvtTagCloudDefaults$$.hoverBehavior;
      $DvtTagCloudObjPeer$$.hideAndShowBehavior = $DvtTagCloudDefaults$$.hideAndShowBehavior;
      $DvtTagCloudObjPeer$$.hiddenCategories = $DvtTagCloudDefaults$$.hiddenCategories;
      $DvtTagCloudDefaults$$ = $dvt$$10$$.$Legend$.newInstance($DvtTagCloudKeyboardHandler$$.$getCtx$(), $DvtTagCloudKeyboardHandler$$.$processEvent$, $DvtTagCloudKeyboardHandler$$);
      $DvtTagCloudEventManager$$.$addChild$($DvtTagCloudDefaults$$);
      var $DvtTagCloudItem$$ = $DvtTagCloudDefaults$$.$getPreferredSize$($DvtTagCloudObjPeer$$, $DvtTagCloudLayoutUtils$$.$w$, $DvtTagCloudLayoutUtils$$.$h$ / 3);
      $DvtTagCloudDefaults$$.$render$($DvtTagCloudObjPeer$$, $DvtTagCloudItem$$.$w$, $DvtTagCloudItem$$.$h$);
      $dvt$$10$$.$LayoutUtils$.position($DvtTagCloudLayoutUtils$$, "bottom", $DvtTagCloudDefaults$$, $DvtTagCloudItem$$.$w$, $DvtTagCloudItem$$.$h$, 0);
      $DvtTagCloudKeyboardHandler$$.$legend$ && ($DvtTagCloudKeyboardHandler$$.$legend$.$destroy$(), $DvtTagCloudEventManager$$.removeChild($DvtTagCloudKeyboardHandler$$.$legend$));
      $DvtTagCloudKeyboardHandler$$.$legend$ = $DvtTagCloudDefaults$$;
    }
  };
  $DvtTagCloudRenderer$$.$_adjustAvailSpace$ = function $$DvtTagCloudRenderer$$$$_adjustAvailSpace$$($dvt$$10$$) {
    $dvt$$10$$.x = Math.round($dvt$$10$$.x);
    $dvt$$10$$.y = Math.round($dvt$$10$$.y);
    $dvt$$10$$.$w$ = Math.round($dvt$$10$$.$w$);
    $dvt$$10$$.$h$ = Math.round($dvt$$10$$.$h$);
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTagCloudLayoutUtils$$, $dvt$$10$$.$Obj$);
  $DvtTagCloudLayoutUtils$$.$getFontSizeFunction$ = function $$DvtTagCloudLayoutUtils$$$$getFontSizeFunction$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$) {
    return function($DvtTagCloudEventManager$$) {
      return 12 + Math.ceil(2 * ($DvtTagCloudEventManager$$ - $dvt$$10$$) / ($DvtTagCloudKeyboardHandler$$ - $dvt$$10$$) * 12);
    };
  };
  $DvtTagCloudLayoutUtils$$.$cloudLayout$ = function $$DvtTagCloudLayoutUtils$$$$cloudLayout$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$) {
    var $DvtTagCloudLayoutUtils$$ = [], $DvtTagCloudDefaults$$ = 10 / 180, $DvtTagCloudObjPeer$$ = 10 / 180;
    $DvtTagCloudKeyboardHandler$$.$w$ > $DvtTagCloudKeyboardHandler$$.$h$ ? $DvtTagCloudDefaults$$ *= $DvtTagCloudKeyboardHandler$$.$w$ / $DvtTagCloudKeyboardHandler$$.$h$ : $DvtTagCloudObjPeer$$ *= $DvtTagCloudKeyboardHandler$$.$h$ / $DvtTagCloudKeyboardHandler$$.$w$;
    for (var $DvtTagCloudItem$$ = 2 * Math.PI / 180, $DvtTagCloudAutomation$$ = null, $DvtTagCloudRenderer$$ = 0, $DvtTagCloudStyleUtils$$ = [], $sinCache$$ = [], $i$$574$$ = 0;$i$$574$$ < $DvtTagCloudEventManager$$.length;$i$$574$$++) {
      for (var $placed$$ = !1, $step$$4$$ = 0, $stepIncrement$$ = 4, $tag$$2$$ = $DvtTagCloudEventManager$$[$i$$574$$], $dims$$53$$ = $tag$$2$$.$getDimensions$(), $DvtTagCloudRenderer$$ = Math.max($DvtTagCloudRenderer$$, parseFloat($tag$$2$$.$getCSSStyle$().$getStyle$($dvt$$10$$.$CSSStyle$.$FONT_SIZE$))), $lastCollisionIndex$$ = -1;!$placed$$;) {
        var $j$$80_lookup$$ = $step$$4$$ % 180;
        void 0 === $DvtTagCloudStyleUtils$$[$j$$80_lookup$$] && ($DvtTagCloudStyleUtils$$[$j$$80_lookup$$] = Math.cos($step$$4$$ * $DvtTagCloudItem$$));
        void 0 === $sinCache$$[$j$$80_lookup$$] && ($sinCache$$[$j$$80_lookup$$] = Math.sin($step$$4$$ * $DvtTagCloudItem$$));
        var $x$$189$$ = $DvtTagCloudDefaults$$ * $step$$4$$ * $DvtTagCloudStyleUtils$$[$j$$80_lookup$$], $y$$166$$ = $DvtTagCloudObjPeer$$ * $step$$4$$ * $sinCache$$[$j$$80_lookup$$], $rect$$37$$ = new $dvt$$10$$.$Rectangle$($x$$189$$, $y$$166$$, $dims$$53$$.$w$, $dims$$53$$.$h$), $placed$$ = !0;
        -1 != $lastCollisionIndex$$ && $DvtTagCloudLayoutUtils$$[$lastCollisionIndex$$].$intersects$($rect$$37$$) && ($placed$$ = !1);
        if ($placed$$) {
          for ($j$$80_lookup$$ = 0;$j$$80_lookup$$ < $i$$574$$;$j$$80_lookup$$++) {
            if ($DvtTagCloudLayoutUtils$$[$j$$80_lookup$$].$intersects$($rect$$37$$)) {
              $lastCollisionIndex$$ = $j$$80_lookup$$;
              $placed$$ = !1;
              break;
            }
          }
        }
        $placed$$ && ($DvtTagCloudAutomation$$ = $DvtTagCloudAutomation$$ ? $DvtTagCloudAutomation$$.$getUnion$($rect$$37$$) : $rect$$37$$, $lastCollisionIndex$$ = -1, $DvtTagCloudLayoutUtils$$[$i$$574$$] = $rect$$37$$, $tag$$2$$.$setX$($x$$189$$), $tag$$2$$.$setY$(-$dims$$53$$.y + $y$$166$$));
        3600 === $step$$4$$ ? $stepIncrement$$ = 3 : 5400 === $step$$4$$ ? $stepIncrement$$ = 2 : 10800 === $step$$4$$ && ($stepIncrement$$ = 1);
        $step$$4$$ += $stepIncrement$$;
      }
    }
    $DvtTagCloudLayoutUtils$$ = Math.max($DvtTagCloudAutomation$$.$w$ / $DvtTagCloudKeyboardHandler$$.$w$, $DvtTagCloudAutomation$$.$h$ / $DvtTagCloudKeyboardHandler$$.$h$);
    $DvtTagCloudDefaults$$ = $DvtTagCloudAutomation$$.x + $DvtTagCloudAutomation$$.$w$ / 2;
    $DvtTagCloudAutomation$$ = $DvtTagCloudAutomation$$.y + $DvtTagCloudAutomation$$.$h$ / 2;
    for ($j$$80_lookup$$ = 0;$j$$80_lookup$$ < $DvtTagCloudEventManager$$.length;$j$$80_lookup$$++) {
      $tag$$2$$ = $DvtTagCloudEventManager$$[$j$$80_lookup$$], $tag$$2$$.$setX$($DvtTagCloudKeyboardHandler$$.x + $tag$$2$$.$getX$() / $DvtTagCloudLayoutUtils$$ + ($DvtTagCloudKeyboardHandler$$.$w$ / 2 - $DvtTagCloudDefaults$$ / $DvtTagCloudLayoutUtils$$)), $tag$$2$$.$setY$($DvtTagCloudKeyboardHandler$$.y + $tag$$2$$.$getY$() / $DvtTagCloudLayoutUtils$$ + ($DvtTagCloudKeyboardHandler$$.$h$ / 2 - $DvtTagCloudAutomation$$ / $DvtTagCloudLayoutUtils$$)), $DvtTagCloudObjPeer$$ = parseFloat($tag$$2$$.$getCSSStyle$().$getStyle$($dvt$$10$$.$CSSStyle$.$FONT_SIZE$)), 
      $tag$$2$$.$setFontSize$($DvtTagCloudObjPeer$$ / $DvtTagCloudLayoutUtils$$);
    }
  };
  $DvtTagCloudLayoutUtils$$.$rectangleLayout$ = function $$DvtTagCloudLayoutUtils$$$$rectangleLayout$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudDefaults$$) {
    for (var $DvtTagCloudObjPeer$$ = [], $DvtTagCloudItem$$ = 0, $DvtTagCloudAutomation$$ = 0, $DvtTagCloudRenderer$$ = 0, $DvtTagCloudStyleUtils$$ = 0;$DvtTagCloudStyleUtils$$ < $DvtTagCloudEventManager$$.length;$DvtTagCloudStyleUtils$$++) {
      var $lineWidth$$7_maxScale_tag$$3$$ = $DvtTagCloudEventManager$$[$DvtTagCloudStyleUtils$$], $dims$$54_lineStart$$ = $lineWidth$$7_maxScale_tag$$3$$.$getDimensions$(), $DvtTagCloudItem$$ = Math.max($DvtTagCloudItem$$, $dims$$54_lineStart$$.$w$), $DvtTagCloudAutomation$$ = Math.max($DvtTagCloudAutomation$$, $dims$$54_lineStart$$.$h$), $DvtTagCloudRenderer$$ = Math.max($DvtTagCloudRenderer$$, parseFloat($lineWidth$$7_maxScale_tag$$3$$.$getCSSStyle$().$getStyle$($dvt$$10$$.$CSSStyle$.$FONT_SIZE$)));
      $DvtTagCloudObjPeer$$.push(new $dvt$$10$$.$Dimension$($dims$$54_lineStart$$.$w$, $dims$$54_lineStart$$.$h$));
    }
    $DvtTagCloudStyleUtils$$ = 0;
    for ($lineWidth$$7_maxScale_tag$$3$$ = ($DvtTagCloudKeyboardHandler$$.$w$ - 10) / $DvtTagCloudItem$$;.001 < $lineWidth$$7_maxScale_tag$$3$$ - $DvtTagCloudStyleUtils$$;) {
      $DvtTagCloudItem$$ = ($DvtTagCloudStyleUtils$$ + $lineWidth$$7_maxScale_tag$$3$$) / 2, $DvtTagCloudRenderer$$ = $DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($DvtTagCloudObjPeer$$, ($DvtTagCloudKeyboardHandler$$.$w$ - 10) / $DvtTagCloudItem$$), $DvtTagCloudRenderer$$.length * ($DvtTagCloudItem$$ * $DvtTagCloudAutomation$$ + 2) - 2 > $DvtTagCloudKeyboardHandler$$.$h$ - 10 ? $lineWidth$$7_maxScale_tag$$3$$ = $DvtTagCloudItem$$ : $DvtTagCloudStyleUtils$$ = $DvtTagCloudItem$$;
    }
    $DvtTagCloudItem$$ = $DvtTagCloudStyleUtils$$;
    $DvtTagCloudRenderer$$ = $DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($DvtTagCloudObjPeer$$, ($DvtTagCloudKeyboardHandler$$.$w$ - 10) / $DvtTagCloudItem$$);
    $DvtTagCloudRenderer$$.push($DvtTagCloudEventManager$$.length);
    for ($DvtTagCloudStyleUtils$$ = 0;$DvtTagCloudStyleUtils$$ < $DvtTagCloudRenderer$$.length - 1;$DvtTagCloudStyleUtils$$++) {
      var $dims$$54_lineStart$$ = $DvtTagCloudRenderer$$[$DvtTagCloudStyleUtils$$], $lineEnd$$ = $DvtTagCloudRenderer$$[$DvtTagCloudStyleUtils$$ + 1], $hPadding$$1$$ = 0, $bottomY$$1_maxLineHeight$$ = 0, $justified$$ = !0;
      if (1 < $lineEnd$$ - $dims$$54_lineStart$$) {
        for (var $lineWidth$$7_maxScale_tag$$3$$ = 0, $flowPadding_j$$81$$ = $dims$$54_lineStart$$;$flowPadding_j$$81$$ < $lineEnd$$;$flowPadding_j$$81$$++) {
          $lineWidth$$7_maxScale_tag$$3$$ += $DvtTagCloudObjPeer$$[$flowPadding_j$$81$$].$w$ * $DvtTagCloudItem$$, $bottomY$$1_maxLineHeight$$ = Math.max($bottomY$$1_maxLineHeight$$, $DvtTagCloudObjPeer$$[$flowPadding_j$$81$$].$h$ * $DvtTagCloudItem$$);
        }
        $hPadding$$1$$ = ($DvtTagCloudKeyboardHandler$$.$w$ - 10 - $lineWidth$$7_maxScale_tag$$3$$) / ($lineEnd$$ - $dims$$54_lineStart$$ - 1);
        $DvtTagCloudStyleUtils$$ == $DvtTagCloudRenderer$$.length - 2 && ($flowPadding_j$$81$$ = .5 * $bottomY$$1_maxLineHeight$$, $flowPadding_j$$81$$ < $hPadding$$1$$ && $lineWidth$$7_maxScale_tag$$3$$ + ($lineEnd$$ - $dims$$54_lineStart$$) * $flowPadding_j$$81$$ < .9 * ($DvtTagCloudKeyboardHandler$$.$w$ - 10) && ($hPadding$$1$$ = $flowPadding_j$$81$$, $justified$$ = !1));
      }
      for (var $bottomY$$1_maxLineHeight$$ = 5 + ($DvtTagCloudStyleUtils$$ + 1) * ($DvtTagCloudAutomation$$ * $DvtTagCloudItem$$ + 2) - 2, $curX$$2$$ = $DvtTagCloudDefaults$$ ? $DvtTagCloudKeyboardHandler$$.$w$ - 5 : 5, $flowPadding_j$$81$$ = $dims$$54_lineStart$$;$flowPadding_j$$81$$ < $lineEnd$$;$flowPadding_j$$81$$++) {
        var $lineWidth$$7_maxScale_tag$$3$$ = $DvtTagCloudEventManager$$[$flowPadding_j$$81$$], $fontSize$$9$$ = parseFloat($lineWidth$$7_maxScale_tag$$3$$.$getCSSStyle$().$getStyle$($dvt$$10$$.$CSSStyle$.$FONT_SIZE$));
        $lineWidth$$7_maxScale_tag$$3$$.$setFontSize$($fontSize$$9$$ * $DvtTagCloudItem$$);
        $lineWidth$$7_maxScale_tag$$3$$.$setY$($DvtTagCloudKeyboardHandler$$.y + $bottomY$$1_maxLineHeight$$);
        $justified$$ && $flowPadding_j$$81$$ == $lineEnd$$ - 1 && $flowPadding_j$$81$$ != $dims$$54_lineStart$$ ? $DvtTagCloudDefaults$$ ? ($lineWidth$$7_maxScale_tag$$3$$.$alignLeft$(), $lineWidth$$7_maxScale_tag$$3$$.$setX$($DvtTagCloudKeyboardHandler$$.x + 5)) : ($lineWidth$$7_maxScale_tag$$3$$.$alignRight$(), $lineWidth$$7_maxScale_tag$$3$$.$setX$($DvtTagCloudKeyboardHandler$$.x + $DvtTagCloudKeyboardHandler$$.$w$ - 5)) : ($lineWidth$$7_maxScale_tag$$3$$.$setX$($DvtTagCloudKeyboardHandler$$.x + 
        $curX$$2$$), $DvtTagCloudDefaults$$ ? ($lineWidth$$7_maxScale_tag$$3$$.$alignRight$(), $curX$$2$$ -= $DvtTagCloudObjPeer$$[$flowPadding_j$$81$$].$w$ * $DvtTagCloudItem$$ + $hPadding$$1$$) : ($lineWidth$$7_maxScale_tag$$3$$.$alignLeft$(), $curX$$2$$ += $DvtTagCloudObjPeer$$[$flowPadding_j$$81$$].$w$ * $DvtTagCloudItem$$ + $hPadding$$1$$));
      }
    }
  };
  $DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$ = function $$DvtTagCloudLayoutUtils$$$$_calculateLineBreaks$$($dvt$$10$$, $DvtTagCloudKeyboardHandler$$) {
    var $DvtTagCloudEventManager$$ = [0], $DvtTagCloudLayoutUtils$$ = $dvt$$10$$[0].$w$ + 2;
    if (1 < $dvt$$10$$.length) {
      for (var $DvtTagCloudDefaults$$ = 1;$DvtTagCloudDefaults$$ < $dvt$$10$$.length;$DvtTagCloudDefaults$$++) {
        $DvtTagCloudLayoutUtils$$ + $dvt$$10$$[$DvtTagCloudDefaults$$].$w$ > $DvtTagCloudKeyboardHandler$$ && ($DvtTagCloudEventManager$$.push($DvtTagCloudDefaults$$), $DvtTagCloudLayoutUtils$$ = 0), $DvtTagCloudLayoutUtils$$ += $dvt$$10$$[$DvtTagCloudDefaults$$].$w$ + 2;
      }
    }
    return $DvtTagCloudEventManager$$;
  };
  var $DvtTagCloudStyleUtils$$ = {};
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTagCloudStyleUtils$$, $dvt$$10$$.$Obj$);
  $DvtTagCloudStyleUtils$$.$getAnimationDuration$ = function $$DvtTagCloudStyleUtils$$$$getAnimationDuration$$($dvt$$10$$) {
    return $dvt$$10$$.$getOptions$().styleDefaults.animationDuration / 1E3;
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTagCloudEventManager$$, $dvt$$10$$.$EventManager$);
  $DvtTagCloudEventManager$$.prototype.$OnClickInternal$ = function $$DvtTagCloudEventManager$$$$$OnClickInternal$$($dvt$$10$$) {
    $dvt$$10$$ = this.$GetLogicalObject$($dvt$$10$$.target);
    this.$_handleLinkCallback$($dvt$$10$$);
    this.$_processActionEvent$($dvt$$10$$);
  };
  $DvtTagCloudEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtTagCloudEventManager$$$$$HandleTouchHoverEndInternal$$($dvt$$10$$) {
    $dvt$$10$$ = this.$GetLogicalObject$($dvt$$10$$.target);
    this.$_processActionEvent$($dvt$$10$$);
  };
  $DvtTagCloudEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtTagCloudEventManager$$$$$HandleTouchClickInternal$$($dvt$$10$$) {
    $dvt$$10$$ = this.$GetLogicalObject$($dvt$$10$$.target);
    this.$_handleLinkCallback$($dvt$$10$$);
    this.$_processActionEvent$($dvt$$10$$);
  };
  $DvtTagCloudEventManager$$.prototype.$_handleLinkCallback$ = function $$DvtTagCloudEventManager$$$$$_handleLinkCallback$$($dvt$$10$$) {
    $dvt$$10$$ instanceof $DvtTagCloudObjPeer$$ && ($dvt$$10$$ = $dvt$$10$$.$getLinkCallback$()) && $dvt$$10$$.call();
  };
  $DvtTagCloudEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTagCloudEventManager$$$$$ProcessKeyboardEvent$$($DvtTagCloudKeyboardHandler$$) {
    var $DvtTagCloudLayoutUtils$$ = !0, $DvtTagCloudDefaults$$ = this.$getFocus$();
    $DvtTagCloudKeyboardHandler$$.keyCode == $dvt$$10$$.KeyboardEvent.$ENTER$ ? this.$_handleLinkCallback$($DvtTagCloudDefaults$$) : $DvtTagCloudLayoutUtils$$ = $DvtTagCloudEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtTagCloudKeyboardHandler$$);
    return $DvtTagCloudLayoutUtils$$;
  };
  $DvtTagCloudEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtTagCloudEventManager$$$$$ProcessRolloverEvent$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$) {
    $DvtTagCloudKeyboardHandler$$ = this.$_view$.$getOptions$();
    "dim" == $DvtTagCloudKeyboardHandler$$.hoverBehavior && ($DvtTagCloudEventManager$$ = $DvtTagCloudEventManager$$.$getCategories$ ? $DvtTagCloudEventManager$$.$getCategories$() : [], $DvtTagCloudKeyboardHandler$$.highlightedCategories = $DvtTagCloudLayoutUtils$$ ? $DvtTagCloudEventManager$$.slice() : null, $DvtTagCloudLayoutUtils$$ = $dvt$$10$$.$EventFactory$.$newCategoryHighlightEvent$($DvtTagCloudKeyboardHandler$$.highlightedCategories, $DvtTagCloudLayoutUtils$$), $DvtTagCloudEventManager$$ = 
    $dvt$$10$$.$StyleUtils$.$getTimeMilliseconds$($DvtTagCloudKeyboardHandler$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($DvtTagCloudLayoutUtils$$, this.$_view$.$getObjects$(), $DvtTagCloudEventManager$$, "any" == $DvtTagCloudKeyboardHandler$$.highlightMatch));
  };
  $DvtTagCloudEventManager$$.prototype.$_processActionEvent$ = function $$DvtTagCloudEventManager$$$$$_processActionEvent$$($DvtTagCloudKeyboardHandler$$) {
    $DvtTagCloudKeyboardHandler$$ && $DvtTagCloudKeyboardHandler$$.$getAction$ && $DvtTagCloudKeyboardHandler$$.$getAction$() && this.$FireEvent$($dvt$$10$$.$EventFactory$.$newActionEvent$("action", $DvtTagCloudKeyboardHandler$$.$getAction$(), $DvtTagCloudKeyboardHandler$$.getId()));
  };
  $DvtTagCloudEventManager$$.prototype.$GetTouchResponse$ = function $$DvtTagCloudEventManager$$$$$GetTouchResponse$$() {
    return this.$_view$.$getOptions$().touchResponse;
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTagCloudKeyboardHandler$$, $dvt$$10$$.$KeyboardHandler$);
  $DvtTagCloudKeyboardHandler$$.prototype.Init = function $$DvtTagCloudKeyboardHandler$$$$Init$($dvt$$10$$) {
    $DvtTagCloudKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$10$$);
  };
  $DvtTagCloudKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isSelectionEvent$$($dvt$$10$$) {
    return this.$isNavigationEvent$($dvt$$10$$) && !$dvt$$10$$.ctrlKey;
  };
  $DvtTagCloudKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isMultiSelectEvent$$($DvtTagCloudKeyboardHandler$$) {
    return $DvtTagCloudKeyboardHandler$$.keyCode == $dvt$$10$$.KeyboardEvent.$SPACE$ && $DvtTagCloudKeyboardHandler$$.ctrlKey;
  };
  $DvtTagCloudKeyboardHandler$$.$getNextNavigable$ = function $$DvtTagCloudKeyboardHandler$$$$getNextNavigable$$($DvtTagCloudKeyboardHandler$$, $DvtTagCloudEventManager$$, $DvtTagCloudLayoutUtils$$) {
    $DvtTagCloudEventManager$$ = $DvtTagCloudEventManager$$.keyCode == $dvt$$10$$.KeyboardEvent.$RIGHT_ARROW$ || $DvtTagCloudEventManager$$.keyCode == $dvt$$10$$.KeyboardEvent.$DOWN_ARROW$ ? !0 : !1;
    $DvtTagCloudKeyboardHandler$$ = $dvt$$10$$.$ArrayUtils$.$getIndex$($DvtTagCloudLayoutUtils$$, $DvtTagCloudKeyboardHandler$$) + ($DvtTagCloudEventManager$$ ? 1 : -1);
    return $DvtTagCloudKeyboardHandler$$ < $DvtTagCloudLayoutUtils$$.length && 0 <= $DvtTagCloudKeyboardHandler$$ ? $DvtTagCloudLayoutUtils$$[$DvtTagCloudKeyboardHandler$$] : null;
  };
  $dvt$$10$$.$Obj$.$createSubclass$(function() {
  }, $dvt$$10$$.$DropTarget$);
  $dvt$$10$$.$exportProperty$($dvt$$10$$, "TagCloud", $dvt$$10$$.$TagCloud$);
  $dvt$$10$$.$exportProperty$($dvt$$10$$.$TagCloud$, "newInstance", $dvt$$10$$.$TagCloud$.newInstance);
  $dvt$$10$$.$exportProperty$($dvt$$10$$.$TagCloud$.prototype, "render", $dvt$$10$$.$TagCloud$.prototype.$render$);
  $dvt$$10$$.$exportProperty$($dvt$$10$$.$TagCloud$.prototype, "getAutomation", $dvt$$10$$.$TagCloud$.prototype.$getAutomation$);
  $dvt$$10$$.$exportProperty$($dvt$$10$$.$TagCloud$.prototype, "highlight", $dvt$$10$$.$TagCloud$.prototype.$highlight$);
  $dvt$$10$$.$exportProperty$($dvt$$10$$.$TagCloud$.prototype, "select", $dvt$$10$$.$TagCloud$.prototype.select);
  $dvt$$10$$.$exportProperty$($DvtTagCloudAutomation$$.prototype, "getDomElementForSubId", $DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$10$$.$exportProperty$($DvtTagCloudAutomation$$.prototype, "getItem", $DvtTagCloudAutomation$$.prototype.getItem);
  $dvt$$10$$.$exportProperty$($DvtTagCloudAutomation$$.prototype, "getItemCount", $DvtTagCloudAutomation$$.prototype.$getItemCount$);
})(dvt);

  return dvt;
});
