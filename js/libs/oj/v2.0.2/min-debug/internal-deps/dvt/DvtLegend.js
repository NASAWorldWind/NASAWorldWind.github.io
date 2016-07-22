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

(function($dvt$$4$$) {
  function $DvtLegendObjPeer$$($dvt$$4$$, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendRenderer$$) {
    this.Init($dvt$$4$$, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendRenderer$$);
  }
  function $DvtLegendKeyboardHandler$$($dvt$$4$$, $DvtLegendObjPeer$$) {
    this.Init($dvt$$4$$, $DvtLegendObjPeer$$);
  }
  function $DvtLegendEventManager$$($dvt$$4$$) {
    this.Init($dvt$$4$$.$getCtx$(), $dvt$$4$$.$processEvent$, $dvt$$4$$);
    this.$_legend$ = $dvt$$4$$;
  }
  function $DvtLegendDefaults$$() {
    this.Init({skyros:$DvtLegendDefaults$$.$VERSION_1$, alta:$DvtLegendDefaults$$.$SKIN_ALTA$, next:$DvtLegendDefaults$$.$SKIN_NEXT$});
  }
  function $DvtLegendAutomation$$($dvt$$4$$) {
    this.$_legend$ = $dvt$$4$$;
    this.$_options$ = this.$_legend$.$getOptions$();
  }
  $dvt$$4$$.$Legend$ = function $$dvt$$4$$$$Legend$$() {
  };
  $dvt$$4$$.$Obj$.$createSubclass$($dvt$$4$$.$Legend$, $dvt$$4$$.$BaseComponent$);
  $dvt$$4$$.$Legend$.newInstance = function $$dvt$$4$$$$Legend$$newInstance$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    var $DvtLegendDefaults$$ = new $dvt$$4$$.$Legend$;
    $DvtLegendDefaults$$.Init($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$);
    return $DvtLegendDefaults$$;
  };
  $dvt$$4$$.$Legend$.$getDefaults$ = function $$dvt$$4$$$$Legend$$$getDefaults$$($dvt$$4$$) {
    return (new $DvtLegendDefaults$$).$getDefaults$($dvt$$4$$);
  };
  $dvt$$4$$.$Legend$.prototype.Init = function $$dvt$$4$$$$Legend$$$Init$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendRenderer$$) {
    $dvt$$4$$.$Legend$.$superclass$.Init.call(this, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendRenderer$$);
    this.setId("legend1000" + Math.floor(1E9 * Math.random()));
    this.$Defaults$ = new $DvtLegendDefaults$$;
    this.$EventManager$ = new $DvtLegendEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    this.$_peers$ = [];
    this.$_navigablePeers$ = [];
    this.$_bounds$ = null;
    this.$_titles$ = [];
  };
  $dvt$$4$$.$Legend$.prototype.$SetOptions$ = function $$dvt$$4$$$$Legend$$$$SetOptions$$($dvt$$4$$) {
    this.$_optionsCache$.$clearCache$();
    $dvt$$4$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($dvt$$4$$), this.$_transferVisibilityProperties$(this.$Options$.sections)) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
  };
  $dvt$$4$$.$Legend$.prototype.$getPreferredSize$ = function $$dvt$$4$$$$Legend$$$$getPreferredSize$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    this.$SetOptions$($DvtLegendObjPeer$$);
    this.$getOptions$().isLayout = !0;
    $DvtLegendObjPeer$$ = $DvtLegendRenderer$$.$render$(this, new $dvt$$4$$.$Rectangle$(0, 0, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$));
    this.$getOptions$().isLayout = !1;
    return new $dvt$$4$$.$Dimension$($DvtLegendObjPeer$$.$w$, $DvtLegendObjPeer$$.$h$);
  };
  $dvt$$4$$.$Legend$.prototype.$render$ = function $$dvt$$4$$$$Legend$$$$render$$($DvtLegendObjPeer$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$) {
    this.$_cache$.$clearCache$();
    this.$SetOptions$($DvtLegendObjPeer$$);
    isNaN($DvtLegendEventManager$$) || isNaN($DvtLegendDefaults$$) || (this.$Width$ = $DvtLegendEventManager$$, this.$Height$ = $DvtLegendDefaults$$);
    this.$getOptions$().isLayout = !1;
    this.$removeChildren$();
    this.$_peers$ = [];
    this.$_navigablePeers$ = [];
    this.$_bounds$ = null;
    this.$_titles$ = [];
    $dvt$$4$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(new $DvtLegendKeyboardHandler$$(this.$EventManager$, this));
    this.$UpdateAriaAttributes$();
    this.$_contentDimensions$ = $DvtLegendRenderer$$.$render$(this, new $dvt$$4$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    ($DvtLegendObjPeer$$ = this.$getOptions$().highlightedCategories) && 0 < $DvtLegendObjPeer$$.length && this.$highlight$($DvtLegendObjPeer$$);
    this.$RenderComplete$();
    return this.$_contentDimensions$;
  };
  $dvt$$4$$.$Legend$.prototype.$highlight$ = function $$dvt$$4$$$$Legend$$$$highlight$$($DvtLegendObjPeer$$) {
    this.$getOptions$().highlightedCategories = $DvtLegendObjPeer$$ && 0 < $DvtLegendObjPeer$$.length ? $DvtLegendObjPeer$$.slice() : null;
    $dvt$$4$$.$CategoryRolloverHandler$.$highlight$($DvtLegendObjPeer$$, this.$_peers$, !0);
  };
  $dvt$$4$$.$Legend$.prototype.$processEvent$ = function $$dvt$$4$$$$Legend$$$$processEvent$$($dvt$$4$$, $DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $dvt$$4$$.type;
    if ("categoryHighlight" == $DvtLegendKeyboardHandler$$ && "dim" == this.$getOptions$().hoverBehavior) {
      var $DvtLegendEventManager$$ = this.$_peers$;
      this != $DvtLegendObjPeer$$ && this.$highlight$($dvt$$4$$.categories);
      for (var $DvtLegendDefaults$$ = 0;$DvtLegendDefaults$$ < $DvtLegendEventManager$$.length;$DvtLegendDefaults$$++) {
        if ($DvtLegendEventManager$$[$DvtLegendDefaults$$].getId() == $dvt$$4$$.categories) {
          this.$container$.scrollIntoView($DvtLegendEventManager$$[$DvtLegendDefaults$$].$getDisplayables$()[0]);
          break;
        }
      }
    }
    this != $DvtLegendObjPeer$$ && "adfShowPopup" != $DvtLegendKeyboardHandler$$ && "adfHidePopup" != $DvtLegendKeyboardHandler$$ || this.dispatchEvent($dvt$$4$$);
  };
  $dvt$$4$$.$Legend$.prototype.$__registerObject$ = function $$dvt$$4$$$$Legend$$$$__registerObject$$($DvtLegendObjPeer$$) {
    if ($DvtLegendObjPeer$$.$getDisplayables$()[0] instanceof $dvt$$4$$.$Button$) {
      this.$_navigablePeers$.push($DvtLegendObjPeer$$);
    } else {
      var $DvtLegendKeyboardHandler$$ = this.$getOptions$().hideAndShowBehavior;
      (null != $DvtLegendObjPeer$$.$getDatatip$() || null != $DvtLegendObjPeer$$.$getAction$() || $DvtLegendObjPeer$$.$isDrillable$() || "none" != $DvtLegendKeyboardHandler$$ && "off" != $DvtLegendKeyboardHandler$$) && this.$_navigablePeers$.push($DvtLegendObjPeer$$);
      this.$_peers$.push($DvtLegendObjPeer$$);
    }
  };
  $dvt$$4$$.$Legend$.prototype.$__setBounds$ = function $$dvt$$4$$$$Legend$$$$__setBounds$$($dvt$$4$$) {
    this.$_bounds$ = $dvt$$4$$.clone();
  };
  $dvt$$4$$.$Legend$.prototype.$__registerTitle$ = function $$dvt$$4$$$$Legend$$$$__registerTitle$$($dvt$$4$$) {
    this.$_titles$.push($dvt$$4$$);
  };
  $dvt$$4$$.$Legend$.prototype.$getAutomation$ = function $$dvt$$4$$$$Legend$$$$getAutomation$$() {
    return new $DvtLegendAutomation$$(this);
  };
  $dvt$$4$$.$Legend$.prototype.$getKeyboardFocus$ = function $$dvt$$4$$$$Legend$$$$getKeyboardFocus$$() {
    return null != this.$EventManager$ ? this.$EventManager$.$getFocus$() : null;
  };
  $dvt$$4$$.$Legend$.prototype.$setKeyboardFocus$ = function $$dvt$$4$$$$Legend$$$$setKeyboardFocus$$($dvt$$4$$, $DvtLegendObjPeer$$) {
    if (null != this.$EventManager$) {
      for (var $DvtLegendKeyboardHandler$$ = this.$_navigablePeers$, $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendKeyboardHandler$$.length;$DvtLegendEventManager$$++) {
        if ($DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$].getId() == $dvt$$4$$.getId()) {
          this.$EventManager$.$setFocusObj$($DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$]);
          $DvtLegendObjPeer$$ && $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$].$showKeyboardFocusEffect$();
          break;
        }
      }
      if ($DvtLegendKeyboardHandler$$ = this.$getKeyboardFocus$()) {
        $DvtLegendEventManager$$ = $DvtLegendKeyboardHandler$$.$getDisplayables$()[0], $DvtLegendEventManager$$.$setAriaProperty$("label", $DvtLegendKeyboardHandler$$.$getAriaLabel$()), this.$getCtx$().$setActiveElement$($DvtLegendEventManager$$);
      }
    }
  };
  $dvt$$4$$.$Legend$.prototype.$getDimensions$ = function $$dvt$$4$$$$Legend$$$$getDimensions$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = new $dvt$$4$$.$Rectangle$(0, 0, this.$Width$, this.$Height$);
    return $DvtLegendObjPeer$$ && $DvtLegendObjPeer$$ !== this ? this.$ConvertCoordSpaceRect$($DvtLegendKeyboardHandler$$, $DvtLegendObjPeer$$) : $DvtLegendKeyboardHandler$$;
  };
  $dvt$$4$$.$Legend$.prototype.$getContentDimensions$ = function $$dvt$$4$$$$Legend$$$$getContentDimensions$$($dvt$$4$$) {
    return $dvt$$4$$ && $dvt$$4$$ !== this ? this.$ConvertCoordSpaceRect$(this.$_contentDimensions$, $dvt$$4$$) : this.$_contentDimensions$;
  };
  $dvt$$4$$.$Legend$.prototype.$GetComponentDescription$ = function $$dvt$$4$$$$Legend$$$$GetComponentDescription$$() {
    return $dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "LEGEND");
  };
  $dvt$$4$$.$Legend$.prototype.$_transferVisibilityProperties$ = function $$dvt$$4$$$$Legend$$$$_transferVisibilityProperties$$($DvtLegendObjPeer$$) {
    if ($DvtLegendObjPeer$$ && !(0 >= $DvtLegendObjPeer$$.length)) {
      for (var $DvtLegendKeyboardHandler$$ = this.$getOptions$().hiddenCategories, $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendObjPeer$$.length;$DvtLegendEventManager$$++) {
        var $DvtLegendDefaults$$ = $DvtLegendObjPeer$$[$DvtLegendEventManager$$];
        $DvtLegendDefaults$$.sections && ($DvtLegendKeyboardHandler$$ = this.$_transferVisibilityProperties$($DvtLegendDefaults$$.sections));
        if (($DvtLegendDefaults$$ = $DvtLegendDefaults$$.items) && !(0 >= $DvtLegendDefaults$$.length)) {
          for (var $DvtLegendAutomation$$ = 0;$DvtLegendAutomation$$ < $DvtLegendDefaults$$.length;$DvtLegendAutomation$$++) {
            var $item$$19$$ = $DvtLegendDefaults$$[$DvtLegendAutomation$$], $itemCategory$$ = $DvtLegendRenderer$$.$getItemCategory$($item$$19$$);
            "hidden" == $item$$19$$.categoryVisibility && 0 > $dvt$$4$$.$ArrayUtils$.$getIndex$($DvtLegendKeyboardHandler$$, $itemCategory$$) && $DvtLegendKeyboardHandler$$.push($itemCategory$$);
            $item$$19$$.categoryVisibility = null;
          }
        }
      }
    }
  };
  $dvt$$4$$.$Legend$.prototype.$UpdateAriaAttributes$ = function $$dvt$$4$$$$Legend$$$$UpdateAriaAttributes$$() {
    if (this.$IsParentRoot$()) {
      var $DvtLegendObjPeer$$ = this.$getOptions$(), $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.hideAndShowBehavior;
      if ("off" != $DvtLegendKeyboardHandler$$ && "none" != $DvtLegendKeyboardHandler$$ || "dim" == $DvtLegendObjPeer$$.hoverBehavior) {
        this.$getCtx$().$setAriaRole$("application"), this.$getCtx$().$setAriaLabel$($dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $dvt$$4$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$())]));
      }
    }
  };
  $dvt$$4$$.$Legend$.prototype.$isNavigable$ = function $$dvt$$4$$$$Legend$$$$isNavigable$$() {
    return 0 < this.$_navigablePeers$.length;
  };
  $dvt$$4$$.$Legend$.$getItemCount$ = function $$dvt$$4$$$$Legend$$$getItemCount$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.$_optionsCache$.$getFromCache$("itemsCount");
    if (null != $DvtLegendKeyboardHandler$$) {
      return $DvtLegendKeyboardHandler$$;
    }
    for (var $DvtLegendKeyboardHandler$$ = 0, $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$getOptions$().sections, $DvtLegendDefaults$$ = 0;$DvtLegendDefaults$$ < $DvtLegendEventManager$$.length;$DvtLegendDefaults$$++) {
      $DvtLegendKeyboardHandler$$ += $dvt$$4$$.$Legend$.$getSectionItemsCount$($DvtLegendEventManager$$[$DvtLegendDefaults$$]);
    }
    $DvtLegendObjPeer$$.$_optionsCache$.$putToCache$("itemsCount", $DvtLegendKeyboardHandler$$);
    return $DvtLegendKeyboardHandler$$;
  };
  $dvt$$4$$.$Legend$.$getSectionItemsCount$ = function $$dvt$$4$$$$Legend$$$getSectionItemsCount$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = 0;
    $DvtLegendObjPeer$$.items && ($DvtLegendKeyboardHandler$$ += $DvtLegendObjPeer$$.items.length);
    if ($DvtLegendObjPeer$$.$sections$) {
      $DvtLegendObjPeer$$ = $DvtLegendObjPeer$$.$sections$;
      for (var $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendObjPeer$$.length;$DvtLegendEventManager$$++) {
        $DvtLegendKeyboardHandler$$ += $dvt$$4$$.$Legend$.$getSectionItemsCount$($DvtLegendObjPeer$$[$DvtLegendEventManager$$]);
      }
    }
    return $DvtLegendKeyboardHandler$$;
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtLegendAutomation$$, $dvt$$4$$.$Automation$);
  $DvtLegendAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtLegendAutomation$$$$$GetSubIdForDomElement$$($dvt$$4$$) {
    return ($dvt$$4$$ = this.$_legend$.$getEventManager$().$GetLogicalObject$($dvt$$4$$)) && $dvt$$4$$ instanceof $DvtLegendObjPeer$$ && ($dvt$$4$$ = $dvt$$4$$.getData(), $dvt$$4$$ = this.$_getIndicesFromItem$($dvt$$4$$, this.$_options$)) ? "section" + $dvt$$4$$ : null;
  };
  $DvtLegendAutomation$$.prototype.$_getIndicesFromItem$ = function $$DvtLegendAutomation$$$$$_getIndicesFromItem$$($dvt$$4$$, $DvtLegendObjPeer$$) {
    if ($DvtLegendObjPeer$$.sections && 0 < $DvtLegendObjPeer$$.sections.length) {
      for (var $DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $DvtLegendObjPeer$$.sections.length;$DvtLegendKeyboardHandler$$++) {
        if ($DvtLegendObjPeer$$.sections[$DvtLegendKeyboardHandler$$] == $dvt$$4$$) {
          return "[" + $DvtLegendKeyboardHandler$$ + "]";
        }
        var $DvtLegendEventManager$$ = this.$_getIndicesFromItem$($dvt$$4$$, $DvtLegendObjPeer$$.sections[$DvtLegendKeyboardHandler$$]);
        if ($DvtLegendEventManager$$) {
          return "[" + $DvtLegendKeyboardHandler$$ + "]" + $DvtLegendEventManager$$;
        }
      }
      return null;
    }
    if ($DvtLegendObjPeer$$.items && 0 < $DvtLegendObjPeer$$.items.length) {
      for ($DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $DvtLegendObjPeer$$.items.length;$DvtLegendKeyboardHandler$$++) {
        if ($DvtLegendObjPeer$$.items[$DvtLegendKeyboardHandler$$] == $dvt$$4$$) {
          return ":item[" + $DvtLegendKeyboardHandler$$ + "]";
        }
      }
      return null;
    }
  };
  $DvtLegendAutomation$$.prototype.$getIndicesFromSeries$ = function $$DvtLegendAutomation$$$$$getIndicesFromSeries$$($dvt$$4$$, $DvtLegendObjPeer$$) {
    if ($DvtLegendObjPeer$$.sections && 0 < $DvtLegendObjPeer$$.sections.length) {
      for (var $DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $DvtLegendObjPeer$$.sections.length;$DvtLegendKeyboardHandler$$++) {
        var $DvtLegendEventManager$$ = this.$getIndicesFromSeries$($dvt$$4$$, $DvtLegendObjPeer$$.sections[$DvtLegendKeyboardHandler$$]);
        if ($DvtLegendEventManager$$) {
          return "[" + $DvtLegendKeyboardHandler$$ + "]" + $DvtLegendEventManager$$;
        }
      }
      return null;
    }
    if ($DvtLegendObjPeer$$.items && 0 < $DvtLegendObjPeer$$.items.length) {
      for ($DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $DvtLegendObjPeer$$.items.length;$DvtLegendKeyboardHandler$$++) {
        if ($DvtLegendObjPeer$$.items[$DvtLegendKeyboardHandler$$].text == $dvt$$4$$.name) {
          return ":item[" + $DvtLegendKeyboardHandler$$ + "]";
        }
      }
      return null;
    }
  };
  $DvtLegendAutomation$$.prototype.$getLegendItem$ = function $$DvtLegendAutomation$$$$$getLegendItem$$($dvt$$4$$, $DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.indexOf("["), $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.indexOf("]");
    if (0 <= $DvtLegendKeyboardHandler$$ && 0 <= $DvtLegendEventManager$$) {
      var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.substring($DvtLegendKeyboardHandler$$ + 1, $DvtLegendEventManager$$), $DvtLegendDefaults$$ = $DvtLegendObjPeer$$.indexOf(":");
      $DvtLegendObjPeer$$ = $DvtLegendObjPeer$$.substring($DvtLegendEventManager$$ + 1);
      $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.indexOf("]");
      return 0 <= $DvtLegendObjPeer$$.indexOf("[") && 0 <= $DvtLegendEventManager$$ ? this.$getLegendItem$($dvt$$4$$.sections[$DvtLegendKeyboardHandler$$], $DvtLegendObjPeer$$) : 0 == $DvtLegendDefaults$$ ? $dvt$$4$$.items[$DvtLegendKeyboardHandler$$] : $dvt$$4$$.sections[$DvtLegendKeyboardHandler$$];
    }
  };
  $DvtLegendAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtLegendAutomation$$$$$getDomElementForSubId$$($DvtLegendObjPeer$$) {
    if ($DvtLegendObjPeer$$ == $dvt$$4$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_legend$);
    }
    $DvtLegendObjPeer$$ = this.$getLegendItem$(this.$_options$, $DvtLegendObjPeer$$);
    for (var $DvtLegendKeyboardHandler$$ = this.$_legend$.$_peers$, $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendKeyboardHandler$$.length;$DvtLegendEventManager$$++) {
      var $DvtLegendDefaults$$ = $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$].getData();
      if ($DvtLegendObjPeer$$ == $DvtLegendDefaults$$) {
        return $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$].$getDisplayables$()[0].$getElem$();
      }
    }
    return null;
  };
  $DvtLegendAutomation$$.prototype.$getTitle$ = function $$DvtLegendAutomation$$$$$getTitle$$() {
    return this.$_options$.title;
  };
  $DvtLegendAutomation$$.prototype.getItem = function $$DvtLegendAutomation$$$$getItem$($dvt$$4$$) {
    for (var $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$ = $dvt$$4$$.shift(), $DvtLegendEventManager$$ = this.$_options$;void 0 != $DvtLegendKeyboardHandler$$;) {
      0 < $dvt$$4$$.length ? $DvtLegendEventManager$$ = $DvtLegendEventManager$$.sections[$DvtLegendKeyboardHandler$$] : $DvtLegendObjPeer$$ = $DvtLegendEventManager$$.items[$DvtLegendKeyboardHandler$$], $DvtLegendKeyboardHandler$$ = $dvt$$4$$.shift();
    }
    return $DvtLegendObjPeer$$ ? {text:$DvtLegendObjPeer$$.text ? $DvtLegendObjPeer$$.text : null} : null;
  };
  $DvtLegendAutomation$$.prototype.$getSection$ = function $$DvtLegendAutomation$$$$$getSection$$($dvt$$4$$) {
    for (var $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$ = $dvt$$4$$.shift(), $DvtLegendEventManager$$ = this.$_options$;void 0 != $DvtLegendKeyboardHandler$$;) {
      0 < $dvt$$4$$.length ? $DvtLegendEventManager$$ = $DvtLegendEventManager$$.sections[$DvtLegendKeyboardHandler$$] : $DvtLegendObjPeer$$ = $DvtLegendEventManager$$.sections[$DvtLegendKeyboardHandler$$], $DvtLegendKeyboardHandler$$ = $dvt$$4$$.shift();
    }
    return {title:$DvtLegendObjPeer$$.title ? $DvtLegendObjPeer$$.title : null, items:$DvtLegendObjPeer$$.items ? this.$_generateItemObjects$($DvtLegendObjPeer$$.items) : null, sections:$DvtLegendObjPeer$$.sections ? this.$_generateSectionObjects$($DvtLegendObjPeer$$.sections) : null};
  };
  $DvtLegendAutomation$$.prototype.$_generateItemObjects$ = function $$DvtLegendAutomation$$$$$_generateItemObjects$$($dvt$$4$$) {
    for (var $DvtLegendObjPeer$$ = [], $DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $dvt$$4$$.length;$DvtLegendKeyboardHandler$$++) {
      $DvtLegendObjPeer$$.push({text:$dvt$$4$$[$DvtLegendKeyboardHandler$$].text});
    }
    return $DvtLegendObjPeer$$;
  };
  $DvtLegendAutomation$$.prototype.$_generateSectionObjects$ = function $$DvtLegendAutomation$$$$$_generateSectionObjects$$($dvt$$4$$) {
    for (var $DvtLegendObjPeer$$ = [], $DvtLegendKeyboardHandler$$ = 0;$DvtLegendKeyboardHandler$$ < $dvt$$4$$.length;$DvtLegendKeyboardHandler$$++) {
      $DvtLegendObjPeer$$.push({title:$dvt$$4$$[$DvtLegendKeyboardHandler$$].title ? $dvt$$4$$[$DvtLegendKeyboardHandler$$].title : null, items:$dvt$$4$$[$DvtLegendKeyboardHandler$$].items ? this.$_generateItemObjects$($dvt$$4$$[$DvtLegendKeyboardHandler$$].items) : null, sections:$dvt$$4$$[$DvtLegendKeyboardHandler$$].sections ? this.$_generateSectionObjects$($dvt$$4$$[$DvtLegendKeyboardHandler$$].sections) : null});
    }
    return $DvtLegendObjPeer$$;
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtLegendDefaults$$, $dvt$$4$$.$BaseComponentDefaults$);
  $DvtLegendDefaults$$.$SKIN_NEXT$ = {skin:$dvt$$4$$.$CSSStyle$.$SKIN_NEXT$, titleStyle:new $dvt$$4$$.$CSSStyle$("color: #737373;"), _sectionTitleStyle:new $dvt$$4$$.$CSSStyle$("color: #737373;"), layout:{titleGapWidth:17, titleGapHeight:9, symbolGapWidth:7, symbolGapHeight:4, rowGap:4, columnGap:10, sectionGapHeight:16, sectionGapWidth:24}};
  $DvtLegendDefaults$$.$SKIN_ALTA$ = {skin:$dvt$$4$$.$CSSStyle$.$SKIN_ALTA$, textStyle:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$), titleStyle:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$ + "color: #333333;"), _sectionTitleStyle:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$ + "color: #333333;")};
  $DvtLegendDefaults$$.$VERSION_1$ = {skin:$dvt$$4$$.$CSSStyle$.$SKIN_SKYROS$, orientation:"vertical", position:null, backgroundColor:null, borderColor:null, textStyle:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 11px; color: #333333;"), titleStyle:new $dvt$$4$$.$CSSStyle$($dvt$$4$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 12px; color: #003d5b;"), titleHalign:"start", hiddenCategories:[], hideAndShowBehavior:"off", hoverBehavior:"none", 
  hoverBehaviorDelay:200, scrolling:"asNeeded", halign:"start", valign:"top", drilling:"off", _color:"#a6acb1", _markerShape:"square", _lineWidth:3, layout:{outerGapWidth:3, outerGapHeight:3, titleGapWidth:8, titleGapHeight:3, symbolGapWidth:5, symbolGapHeight:4, rowGap:0, columnGap:8, sectionGapHeight:6, sectionGapWidth:15}, isLayout:!1};
  $DvtLegendDefaults$$.$getGapSize$ = function $$DvtLegendDefaults$$$$getGapSize$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = Math.min($dvt$$4$$.$TextUtils$.$getTextStringHeight$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendObjPeer$$.$getOptions$().textStyle) / 14, 1);
    return Math.ceil($DvtLegendKeyboardHandler$$ * $DvtLegendEventManager$$);
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtLegendEventManager$$, $dvt$$4$$.$EventManager$);
  $DvtLegendEventManager$$.prototype.$OnClick$ = function $$DvtLegendEventManager$$$$$OnClick$$($dvt$$4$$) {
    $DvtLegendEventManager$$.$superclass$.$OnClick$.call(this, $dvt$$4$$);
    var $DvtLegendObjPeer$$ = this.$GetLogicalObject$($dvt$$4$$.target);
    if ($DvtLegendObjPeer$$) {
      var $DvtLegendKeyboardHandler$$ = this.$processHideShowEvent$($DvtLegendObjPeer$$), $DvtLegendObjPeer$$ = this.$handleClick$($DvtLegendObjPeer$$, $dvt$$4$$);
      ($DvtLegendKeyboardHandler$$ || $DvtLegendObjPeer$$) && $dvt$$4$$.stopPropagation();
    }
  };
  $DvtLegendEventManager$$.prototype.$OnMouseOver$ = function $$DvtLegendEventManager$$$$$OnMouseOver$$($DvtLegendObjPeer$$) {
    $DvtLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $DvtLegendObjPeer$$);
    if ($DvtLegendObjPeer$$ = this.$GetLogicalObject$($DvtLegendObjPeer$$.target)) {
      var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$ instanceof $dvt$$4$$.$SimpleObjPeer$ ? $DvtLegendObjPeer$$.$_params$ : null;
      $DvtLegendKeyboardHandler$$ && $DvtLegendKeyboardHandler$$.isCollapsible && $DvtLegendKeyboardHandler$$.button && $DvtLegendKeyboardHandler$$.button.$drawOverState$();
      this.$UpdateActiveElement$($DvtLegendObjPeer$$);
    }
  };
  $DvtLegendEventManager$$.prototype.$OnMouseOut$ = function $$DvtLegendEventManager$$$$$OnMouseOut$$($DvtLegendObjPeer$$) {
    $DvtLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $DvtLegendObjPeer$$);
    ($DvtLegendObjPeer$$ = this.$GetLogicalObject$($DvtLegendObjPeer$$.target)) && ($DvtLegendObjPeer$$ = $DvtLegendObjPeer$$ instanceof $dvt$$4$$.$SimpleObjPeer$ ? $DvtLegendObjPeer$$.$_params$ : null) && $DvtLegendObjPeer$$.isCollapsible && $DvtLegendObjPeer$$.button && $DvtLegendObjPeer$$.button.$drawUpState$();
  };
  $DvtLegendEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtLegendEventManager$$$$$HandleTouchClickInternal$$($dvt$$4$$) {
    var $DvtLegendObjPeer$$ = this.$GetLogicalObject$($dvt$$4$$.target);
    if ($DvtLegendObjPeer$$) {
      var $DvtLegendKeyboardHandler$$ = $dvt$$4$$.$touchEvent$, $DvtLegendEventManager$$ = this.$processHideShowEvent$($DvtLegendObjPeer$$);
      $dvt$$4$$ = this.$handleClick$($DvtLegendObjPeer$$, $dvt$$4$$);
      ($DvtLegendEventManager$$ || $dvt$$4$$) && $DvtLegendKeyboardHandler$$ && $DvtLegendKeyboardHandler$$.preventDefault();
    }
  };
  $DvtLegendEventManager$$.prototype.$processHideShowEvent$ = function $$DvtLegendEventManager$$$$$processHideShowEvent$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = this.$_legend$.$getOptions$().hideAndShowBehavior;
    if ("none" == $DvtLegendKeyboardHandler$$ || "off" == $DvtLegendKeyboardHandler$$) {
      return !1;
    }
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$getCategories$ ? $DvtLegendObjPeer$$.$getCategories$() : null;
    if (!$DvtLegendEventManager$$ || 0 >= $DvtLegendEventManager$$.length) {
      return !1;
    }
    for (var $DvtLegendDefaults$$ = $DvtLegendObjPeer$$.$getCategories$()[0], $DvtLegendKeyboardHandler$$ = this.$_legend$.$getOptions$().hiddenCategories || [], $DvtLegendKeyboardHandler$$ = $DvtLegendKeyboardHandler$$.slice(), $DvtLegendAutomation$$ = $DvtLegendObjPeer$$.$getDisplayables$(), $i$$488$$ = 0;$i$$488$$ < $DvtLegendAutomation$$.length;$i$$488$$++) {
      var $displayable$$41$$ = $DvtLegendAutomation$$[$i$$488$$];
      $displayable$$41$$ instanceof $dvt$$4$$.$SimpleMarker$ ? $displayable$$41$$.$setHollow$($DvtLegendObjPeer$$.$getColor$()) : $displayable$$41$$ instanceof $dvt$$4$$.Rect && $DvtLegendObjPeer$$.$updateAriaLabel$();
    }
    $DvtLegendObjPeer$$ = $DvtLegendEventManager$$[0];
    $DvtLegendRenderer$$.$isCategoryHidden$($DvtLegendDefaults$$, this.$_legend$) ? ($DvtLegendKeyboardHandler$$.splice($dvt$$4$$.$ArrayUtils$.$getIndex$($DvtLegendKeyboardHandler$$, $DvtLegendDefaults$$), 1), $DvtLegendObjPeer$$ = $dvt$$4$$.$EventFactory$.$newCategoryShowEvent$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$)) : ($DvtLegendKeyboardHandler$$.push($DvtLegendDefaults$$), $DvtLegendObjPeer$$ = $dvt$$4$$.$EventFactory$.$newCategoryHideEvent$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$));
    this.$_legend$.$getOptions$().hiddenCategories = $DvtLegendKeyboardHandler$$;
    this.$FireEvent$($DvtLegendObjPeer$$, this.$_legend$);
    return !0;
  };
  $DvtLegendEventManager$$.prototype.$handleClick$ = function $$DvtLegendEventManager$$$$$handleClick$$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    if ($DvtLegendKeyboardHandler$$ && $DvtLegendKeyboardHandler$$.$getAction$ && $DvtLegendKeyboardHandler$$.$getAction$()) {
      return this.$FireEvent$($dvt$$4$$.$EventFactory$.$newActionEvent$("action", $DvtLegendKeyboardHandler$$.$getAction$(), $DvtLegendKeyboardHandler$$.getId()), this.$_legend$), !0;
    }
    if ($DvtLegendKeyboardHandler$$ instanceof $DvtLegendObjPeer$$ && $DvtLegendKeyboardHandler$$.$isDrillable$()) {
      var $DvtLegendDefaults$$ = $DvtLegendKeyboardHandler$$.getId();
      this.$FireEvent$($dvt$$4$$.$EventFactory$.$newChartDrillEvent$($DvtLegendDefaults$$, $DvtLegendDefaults$$, null), this.$_legend$);
      return !0;
    }
    return ($DvtLegendDefaults$$ = $DvtLegendKeyboardHandler$$ instanceof $dvt$$4$$.$SimpleObjPeer$ ? $DvtLegendKeyboardHandler$$.$_params$ : null) && $DvtLegendDefaults$$.isCollapsible ? (this.$toggleSectionCollapse$($DvtLegendEventManager$$, $DvtLegendDefaults$$.id), !0) : !1;
  };
  $DvtLegendEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtLegendEventManager$$$$$ProcessRolloverEvent$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    $DvtLegendObjPeer$$ = this.$_legend$.$getOptions$();
    "none" == $DvtLegendObjPeer$$.hoverBehavior || $DvtLegendKeyboardHandler$$.$getDisplayables$ && $DvtLegendKeyboardHandler$$.$getDisplayables$()[0] instanceof $dvt$$4$$.$Button$ || ($DvtLegendKeyboardHandler$$ = $DvtLegendKeyboardHandler$$.$getCategories$ ? $DvtLegendKeyboardHandler$$.$getCategories$() : [], $DvtLegendObjPeer$$.highlightedCategories = $DvtLegendEventManager$$ ? $DvtLegendKeyboardHandler$$.slice() : null, $DvtLegendEventManager$$ = $dvt$$4$$.$EventFactory$.$newCategoryHighlightEvent$($DvtLegendObjPeer$$.highlightedCategories, 
    $DvtLegendEventManager$$), $DvtLegendObjPeer$$ = $dvt$$4$$.$StyleUtils$.$getTimeMilliseconds$($DvtLegendObjPeer$$.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($DvtLegendEventManager$$, this.$_legend$.$_peers$, $DvtLegendObjPeer$$, !0));
  };
  $DvtLegendEventManager$$.prototype.$onCollapseButtonClick$ = function $$DvtLegendEventManager$$$$$onCollapseButtonClick$$($dvt$$4$$, $DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.getId();
    this.$toggleSectionCollapse$($dvt$$4$$, $DvtLegendKeyboardHandler$$);
  };
  $DvtLegendEventManager$$.prototype.$toggleSectionCollapse$ = function $$DvtLegendEventManager$$$$$toggleSectionCollapse$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    for (var $DvtLegendEventManager$$ = this.$_legend$.$getOptions$(), $DvtLegendDefaults$$ = 0;$DvtLegendDefaults$$ < $DvtLegendKeyboardHandler$$.length;$DvtLegendDefaults$$++) {
      $DvtLegendEventManager$$ = $DvtLegendEventManager$$.sections[$DvtLegendKeyboardHandler$$[$DvtLegendDefaults$$]];
    }
    $DvtLegendEventManager$$.expanded = "off" == $DvtLegendEventManager$$.expanded ? "on" : "off";
    $DvtLegendObjPeer$$.type == $dvt$$4$$.MouseEvent.$CLICK$ && ($DvtLegendEventManager$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtLegendObjPeer$$)), $DvtLegendEventManager$$.$getNextNavigable$ && this.$setFocusObj$($DvtLegendEventManager$$.$getNextNavigable$($DvtLegendObjPeer$$)));
    $DvtLegendDefaults$$ = ($DvtLegendEventManager$$ = this.$_legend$.$getKeyboardFocus$()) ? $DvtLegendEventManager$$.$isShowingKeyboardFocusEffect$() : !1;
    this.$_legend$.$render$();
    $DvtLegendEventManager$$ && this.$_legend$.$setKeyboardFocus$($DvtLegendEventManager$$, $DvtLegendDefaults$$);
    this.$hideTooltip$();
    $DvtLegendEventManager$$ = this.$_legend$.$getContentDimensions$();
    this.$FireEvent$(new $dvt$$4$$.$ResizeEvent$($DvtLegendEventManager$$.$w$, $DvtLegendEventManager$$.$h$, $DvtLegendEventManager$$.x, $DvtLegendEventManager$$.y), this.$_legend$);
  };
  $DvtLegendEventManager$$.prototype.$GetTouchResponse$ = function $$DvtLegendEventManager$$$$$GetTouchResponse$$() {
    return this.$_legend$.$getOptions$()._isScrollingLegend ? $dvt$$4$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : $dvt$$4$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$;
  };
  $DvtLegendEventManager$$.prototype.$getComponent$ = function $$DvtLegendEventManager$$$$$getComponent$$() {
    return this.$_legend$;
  };
  $DvtLegendEventManager$$.prototype.$isDndSupported$ = function $$DvtLegendEventManager$$$$$isDndSupported$$() {
    return !0;
  };
  $DvtLegendEventManager$$.prototype.$GetDragSourceType$ = function $$DvtLegendEventManager$$$$$GetDragSourceType$$() {
    var $dvt$$4$$ = this.$DragSource$.$_dragObj$;
    return $dvt$$4$$ instanceof $DvtLegendObjPeer$$ && null != $dvt$$4$$.getData()._dataContext ? "series" : null;
  };
  $DvtLegendEventManager$$.prototype.$GetDragDataContexts$ = function $$DvtLegendEventManager$$$$$GetDragDataContexts$$() {
    var $dvt$$4$$ = this.$DragSource$.$_dragObj$;
    return $dvt$$4$$ instanceof $DvtLegendObjPeer$$ ? [$dvt$$4$$.getData()._dataContext] : [];
  };
  $DvtLegendEventManager$$.prototype.$GetDropTargetType$ = function $$DvtLegendEventManager$$$$$GetDropTargetType$$($dvt$$4$$) {
    $dvt$$4$$ = this.$_legend$.$stageToLocal$(this.$getCtx$().$pageToStageCoords$($dvt$$4$$.pageX, $dvt$$4$$.pageY));
    return this.$_legend$.$_bounds$.$containsPoint$($dvt$$4$$.x, $dvt$$4$$.y) ? "legend" : null;
  };
  $DvtLegendEventManager$$.prototype.$GetDropEventPayload$ = function $$DvtLegendEventManager$$$$$GetDropEventPayload$$() {
    return {};
  };
  $DvtLegendEventManager$$.prototype.$ShowDropEffect$ = function $$DvtLegendEventManager$$$$$ShowDropEffect$$($dvt$$4$$) {
    if ("legend" == this.$GetDropTargetType$($dvt$$4$$)) {
      $dvt$$4$$ = this.$_legend$.$getOptions$()._dropColor;
      var $DvtLegendObjPeer$$ = this.$_legend$.$_cache$.$getFromCache$("background");
      $DvtLegendObjPeer$$ && $DvtLegendObjPeer$$.$setSolidFill$($dvt$$4$$);
    }
  };
  $DvtLegendEventManager$$.prototype.$ClearDropEffect$ = function $$DvtLegendEventManager$$$$$ClearDropEffect$$() {
    var $dvt$$4$$ = this.$_legend$.$_cache$.$getFromCache$("background");
    if ($dvt$$4$$) {
      var $DvtLegendObjPeer$$ = this.$_legend$.$getOptions$().backgroundColor;
      $DvtLegendObjPeer$$ ? $dvt$$4$$.$setSolidFill$($DvtLegendObjPeer$$) : $dvt$$4$$.$setInvisibleFill$();
    }
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtLegendKeyboardHandler$$, $dvt$$4$$.$KeyboardHandler$);
  $DvtLegendKeyboardHandler$$.prototype.Init = function $$DvtLegendKeyboardHandler$$$$Init$($dvt$$4$$, $DvtLegendObjPeer$$) {
    $DvtLegendKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$4$$);
    this.$_legend$ = $DvtLegendObjPeer$$;
  };
  $DvtLegendKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtLegendKeyboardHandler$$$$$processKeyDown$$($DvtLegendObjPeer$$) {
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.keyCode, $DvtLegendDefaults$$ = this.$_eventManager$.$getFocus$(), $DvtLegendRenderer$$ = $DvtLegendDefaults$$ && $DvtLegendDefaults$$.$getDisplayables$()[0] instanceof $dvt$$4$$.$Button$, $DvtLegendAutomation$$ = null;
    null == $DvtLegendDefaults$$ && $DvtLegendEventManager$$ == $dvt$$4$$.KeyboardEvent.$TAB$ ? ($DvtLegendEventManager$$ = this.$_legend$.$_navigablePeers$, 0 < $DvtLegendEventManager$$.length && ($dvt$$4$$.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$), $DvtLegendAutomation$$ = this.$getDefaultNavigable$($DvtLegendEventManager$$))) : $DvtLegendDefaults$$ && ($DvtLegendEventManager$$ == $dvt$$4$$.KeyboardEvent.$TAB$ ? ($dvt$$4$$.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$), $DvtLegendAutomation$$ = 
    $DvtLegendDefaults$$) : $DvtLegendEventManager$$ == $dvt$$4$$.KeyboardEvent.$ENTER$ || $DvtLegendEventManager$$ == $dvt$$4$$.KeyboardEvent.$SPACE$ ? ($DvtLegendEventManager$$ == $dvt$$4$$.KeyboardEvent.$ENTER$ && this.$_eventManager$.$handleClick$($DvtLegendDefaults$$, $DvtLegendObjPeer$$), $DvtLegendRenderer$$ ? this.$_eventManager$.$onCollapseButtonClick$($DvtLegendObjPeer$$, $DvtLegendDefaults$$.$getDisplayables$()[0]) : this.$_eventManager$.$processHideShowEvent$($DvtLegendDefaults$$), $dvt$$4$$.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$)) : 
    !$DvtLegendRenderer$$ || $DvtLegendEventManager$$ != $dvt$$4$$.KeyboardEvent.$LEFT_ARROW$ && $DvtLegendEventManager$$ != $dvt$$4$$.KeyboardEvent.$RIGHT_ARROW$ ? $DvtLegendAutomation$$ = $DvtLegendKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtLegendObjPeer$$) : (this.$_eventManager$.$onCollapseButtonClick$($DvtLegendObjPeer$$, $DvtLegendDefaults$$.$getDisplayables$()[0]), $dvt$$4$$.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$)));
    $DvtLegendAutomation$$ && this.$_legend$.$container$.scrollIntoView($DvtLegendAutomation$$.$getDisplayables$()[0]);
    return $DvtLegendAutomation$$;
  };
  $dvt$$4$$.$Obj$.$createSubclass$($DvtLegendObjPeer$$, $dvt$$4$$.$Obj$);
  $DvtLegendObjPeer$$.prototype.Init = function $$DvtLegendObjPeer$$$$Init$($dvt$$4$$, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) {
    this.$_legend$ = $dvt$$4$$;
    this.$_displayables$ = $DvtLegendObjPeer$$;
    this.$_item$ = $DvtLegendKeyboardHandler$$;
    this.$_id$ = (this.$_category$ = $DvtLegendRenderer$$.$getItemCategory$(this.$_item$)) ? this.$_category$ : $DvtLegendKeyboardHandler$$.title;
    this.$_action$ = $DvtLegendKeyboardHandler$$.action;
    this.$_drillable$ = $DvtLegendAutomation$$;
    this.$_spb$ = $DvtLegendKeyboardHandler$$._spb;
    this.$_tooltip$ = $DvtLegendEventManager$$;
    this.$_datatip$ = $DvtLegendDefaults$$;
    this.$_isShowingKeyboardFocusEffect$ = !1;
    if (this.$_action$ || this.$_drillable$) {
      for ($dvt$$4$$ = 0;$dvt$$4$$ < this.$_displayables$.length;$dvt$$4$$++) {
        this.$_displayables$[$dvt$$4$$].setCursor("pointer");
      }
    }
  };
  $DvtLegendObjPeer$$.$associate$ = function $$DvtLegendObjPeer$$$$associate$$($dvt$$4$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendRenderer$$, $DvtLegendAutomation$$) {
    if (!$dvt$$4$$ || !$DvtLegendEventManager$$) {
      return null;
    }
    $DvtLegendEventManager$$ = new $DvtLegendObjPeer$$($DvtLegendKeyboardHandler$$, $dvt$$4$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendRenderer$$, $DvtLegendAutomation$$);
    $DvtLegendKeyboardHandler$$.$__registerObject$($DvtLegendEventManager$$);
    for ($DvtLegendDefaults$$ = 0;$DvtLegendDefaults$$ < $dvt$$4$$.length;$DvtLegendDefaults$$++) {
      $DvtLegendKeyboardHandler$$.$getEventManager$().$associate$($dvt$$4$$[$DvtLegendDefaults$$], $DvtLegendEventManager$$);
    }
    return $DvtLegendEventManager$$;
  };
  $DvtLegendObjPeer$$.prototype.getData = function $$DvtLegendObjPeer$$$$getData$() {
    return this.$_item$;
  };
  $DvtLegendObjPeer$$.prototype.$getColor$ = function $$DvtLegendObjPeer$$$$$getColor$$() {
    return this.$_item$.color;
  };
  $DvtLegendObjPeer$$.prototype.getId = function $$DvtLegendObjPeer$$$$getId$() {
    return this.$_id$;
  };
  $DvtLegendObjPeer$$.prototype.$getDisplayables$ = function $$DvtLegendObjPeer$$$$$getDisplayables$$() {
    return this.$_displayables$;
  };
  $DvtLegendObjPeer$$.prototype.$getCategories$ = function $$DvtLegendObjPeer$$$$$getCategories$$() {
    return null != this.$_category$ ? [this.$_category$] : null;
  };
  $DvtLegendObjPeer$$.prototype.$getAction$ = function $$DvtLegendObjPeer$$$$$getAction$$() {
    return this.$_action$;
  };
  $DvtLegendObjPeer$$.prototype.$isDrillable$ = function $$DvtLegendObjPeer$$$$$isDrillable$$() {
    return this.$_drillable$;
  };
  $DvtLegendObjPeer$$.prototype.$getShowPopupBehaviors$ = function $$DvtLegendObjPeer$$$$$getShowPopupBehaviors$$() {
    return this.$_spb$;
  };
  $DvtLegendObjPeer$$.prototype.$getAriaLabel$ = function $$DvtLegendObjPeer$$$$$getAriaLabel$$() {
    var $DvtLegendObjPeer$$ = [], $DvtLegendKeyboardHandler$$ = this.$_legend$.$getOptions$(), $DvtLegendEventManager$$ = this.$_legend$.$getOptions$().hideAndShowBehavior, $DvtLegendDefaults$$ = $DvtLegendRenderer$$.$isCategoryHidden$(this.$_category$, this.$_legend$), $DvtLegendAutomation$$ = this.getData();
    if (this.$_displayables$[0] instanceof $dvt$$4$$.$Button$) {
      return $DvtLegendObjPeer$$.push($dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "off" == $DvtLegendAutomation$$.expanded ? "STATE_COLLAPSED" : "STATE_EXPANDED")), $dvt$$4$$.$Displayable$.$generateAriaLabel$($DvtLegendAutomation$$.title, $DvtLegendObjPeer$$);
    }
    "off" != $DvtLegendEventManager$$ && "none" != $DvtLegendEventManager$$ && $DvtLegendObjPeer$$.push($dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, $DvtLegendDefaults$$ ? "STATE_HIDDEN" : "STATE_VISIBLE"));
    this.$isDrillable$() && $DvtLegendObjPeer$$.push($dvt$$4$$.$Bundle$.$getTranslation$($DvtLegendKeyboardHandler$$, "stateDrillable", $dvt$$4$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    return null != $DvtLegendAutomation$$.shortDesc ? $dvt$$4$$.$Displayable$.$generateAriaLabel$($DvtLegendAutomation$$.shortDesc, $DvtLegendObjPeer$$) : 0 < $DvtLegendObjPeer$$.length ? $dvt$$4$$.$Displayable$.$generateAriaLabel$($DvtLegendAutomation$$.text, $DvtLegendObjPeer$$) : null;
  };
  $DvtLegendObjPeer$$.prototype.$updateAriaLabel$ = function $$DvtLegendObjPeer$$$$$updateAriaLabel$$() {
    !$dvt$$4$$.$Agent$.$deferAriaCreation$() && this.$_displayables$[0] && this.$_displayables$[0].$setAriaProperty$("label", this.$getAriaLabel$());
  };
  $DvtLegendObjPeer$$.prototype.$getNextNavigable$ = function $$DvtLegendObjPeer$$$$$getNextNavigable$$($DvtLegendObjPeer$$) {
    return $DvtLegendObjPeer$$.type == $dvt$$4$$.MouseEvent.$CLICK$ ? this : $dvt$$4$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtLegendObjPeer$$, this.$_legend$.$_navigablePeers$, !0);
  };
  $DvtLegendObjPeer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtLegendObjPeer$$$$$getKeyboardBoundingBox$$($DvtLegendObjPeer$$) {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($DvtLegendObjPeer$$) : new $dvt$$4$$.$Rectangle$(0, 0, 0, 0);
  };
  $DvtLegendObjPeer$$.prototype.$getTargetElem$ = function $$DvtLegendObjPeer$$$$$getTargetElem$$() {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : null;
  };
  $DvtLegendObjPeer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtLegendObjPeer$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$_displayables$[0] && (this.$_displayables$[0] instanceof $dvt$$4$$.$Button$ ? this.$_displayables$[0].$drawOverState$() : this.$_displayables$[0].$setSolidStroke$($dvt$$4$$.$Agent$.$getFocusColor$()));
  };
  $DvtLegendObjPeer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtLegendObjPeer$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$_displayables$[0] && (this.$_displayables$[0] instanceof $dvt$$4$$.$Button$ ? this.$_displayables$[0].$drawUpState$() : this.$_displayables$[0].$setStroke$(null));
  };
  $DvtLegendObjPeer$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtLegendObjPeer$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtLegendObjPeer$$.prototype.$getTooltip$ = function $$DvtLegendObjPeer$$$$$getTooltip$$() {
    return this.$_tooltip$;
  };
  $DvtLegendObjPeer$$.prototype.$getDatatip$ = function $$DvtLegendObjPeer$$$$$getDatatip$$() {
    return this.$_datatip$;
  };
  $DvtLegendObjPeer$$.prototype.$getDatatipColor$ = function $$DvtLegendObjPeer$$$$$getDatatipColor$$() {
    return this.$_item$.color;
  };
  $DvtLegendObjPeer$$.prototype.$isDragAvailable$ = function $$DvtLegendObjPeer$$$$$isDragAvailable$$() {
    return !0;
  };
  $DvtLegendObjPeer$$.prototype.$getDragTransferable$ = function $$DvtLegendObjPeer$$$$$getDragTransferable$$() {
    return [this.getId()];
  };
  $DvtLegendObjPeer$$.prototype.$getDragFeedback$ = function $$DvtLegendObjPeer$$$$$getDragFeedback$$() {
    return this.$getDisplayables$();
  };
  var $DvtLegendRenderer$$ = {};
  $dvt$$4$$.$Obj$.$createSubclass$($DvtLegendRenderer$$, $dvt$$4$$.$Obj$);
  $DvtLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$ = 2;
  $DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$ = .6;
  $DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$ = 10;
  $DvtLegendRenderer$$.$_BUTTON_SIZE$ = 12;
  $DvtLegendRenderer$$.$_FOCUS_GAP$ = 2;
  $DvtLegendRenderer$$.$render$ = function $$DvtLegendRenderer$$$$render$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$getOptions$(), $DvtLegendAutomation$$ = $DvtLegendObjPeer$$.$getCtx$(), $contentDims_isRTL$$32_valign$$11$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtLegendAutomation$$);
    $DvtLegendObjPeer$$.$__setBounds$($DvtLegendKeyboardHandler$$);
    $DvtLegendEventManager$$.isLayout || $DvtLegendRenderer$$.$_renderBackground$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$);
    var $container$$119_translateX$$ = new $dvt$$4$$.$SimpleScrollableContainer$($DvtLegendAutomation$$, $DvtLegendKeyboardHandler$$.$w$, $DvtLegendKeyboardHandler$$.$h$), $contentContainer$$3_i$$492$$ = new $dvt$$4$$.$Container$($DvtLegendAutomation$$);
    $container$$119_translateX$$.$_container$.$addChild$($contentContainer$$3_i$$492$$);
    $DvtLegendObjPeer$$.$addChild$($container$$119_translateX$$);
    $DvtLegendObjPeer$$.$container$ = $container$$119_translateX$$;
    var $gapWidth$$2$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $DvtLegendEventManager$$.layout.outerGapWidth), $gapHeight$$2$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $DvtLegendEventManager$$.layout.outerGapHeight);
    $DvtLegendKeyboardHandler$$.x += $gapWidth$$2$$;
    $DvtLegendKeyboardHandler$$.y += $gapHeight$$2$$;
    $DvtLegendKeyboardHandler$$.$w$ -= 2 * $gapWidth$$2$$;
    $DvtLegendKeyboardHandler$$.$h$ -= 2 * $gapHeight$$2$$;
    if (0 >= $DvtLegendKeyboardHandler$$.$w$ || 0 >= $DvtLegendKeyboardHandler$$.$h$) {
      return new $dvt$$4$$.$Dimension$(0, 0);
    }
    $DvtLegendAutomation$$ = $DvtLegendRenderer$$.$_renderContents$($DvtLegendObjPeer$$, $contentContainer$$3_i$$492$$, new $dvt$$4$$.$Rectangle$($DvtLegendKeyboardHandler$$.x, $DvtLegendKeyboardHandler$$.y, $DvtLegendKeyboardHandler$$.$w$, $DvtLegendKeyboardHandler$$.$h$));
    if (0 == $DvtLegendAutomation$$.$w$ || 0 == $DvtLegendAutomation$$.$h$) {
      return new $dvt$$4$$.$Dimension$(0, 0);
    }
    $container$$119_translateX$$.$prepareContentPane$();
    $DvtLegendAutomation$$.$h$ > $DvtLegendKeyboardHandler$$.$h$ ? ($DvtLegendAutomation$$.$h$ = $DvtLegendKeyboardHandler$$.$h$, $DvtLegendEventManager$$._isScrollingLegend = !0) : $DvtLegendEventManager$$._isScrollingLegend = !1;
    var $translateY$$ = $container$$119_translateX$$ = 0, $halign$$12$$ = null != $DvtLegendEventManager$$.hAlign ? $DvtLegendEventManager$$.hAlign : $DvtLegendEventManager$$.halign;
    "center" == $halign$$12$$ ? $container$$119_translateX$$ = $DvtLegendKeyboardHandler$$.x - $DvtLegendAutomation$$.x + ($DvtLegendKeyboardHandler$$.$w$ - $DvtLegendAutomation$$.$w$) / 2 : "end" == $halign$$12$$ && ($container$$119_translateX$$ = $contentDims_isRTL$$32_valign$$11$$ ? $DvtLegendKeyboardHandler$$.x - $DvtLegendAutomation$$.x : $DvtLegendKeyboardHandler$$.x - $DvtLegendAutomation$$.x + $DvtLegendKeyboardHandler$$.$w$ - $DvtLegendAutomation$$.$w$);
    $contentDims_isRTL$$32_valign$$11$$ = null != $DvtLegendEventManager$$.vAlign ? $DvtLegendEventManager$$.vAlign : $DvtLegendEventManager$$.valign;
    "middle" == $contentDims_isRTL$$32_valign$$11$$ ? $translateY$$ = $DvtLegendKeyboardHandler$$.y - $DvtLegendAutomation$$.y + ($DvtLegendKeyboardHandler$$.$h$ - $DvtLegendAutomation$$.$h$) / 2 : "bottom" == $contentDims_isRTL$$32_valign$$11$$ && ($translateY$$ = $DvtLegendKeyboardHandler$$.y - $DvtLegendAutomation$$.y + $DvtLegendKeyboardHandler$$.$h$ - $DvtLegendAutomation$$.$h$);
    $contentDims_isRTL$$32_valign$$11$$ = new $dvt$$4$$.$Rectangle$($DvtLegendAutomation$$.x + $container$$119_translateX$$ - $gapWidth$$2$$, $DvtLegendAutomation$$.y + $translateY$$ - $gapHeight$$2$$, $DvtLegendAutomation$$.$w$ + 2 * $gapWidth$$2$$, $DvtLegendAutomation$$.$h$ + 2 * $gapHeight$$2$$);
    if ($DvtLegendEventManager$$.isLayout) {
      return $contentDims_isRTL$$32_valign$$11$$;
    }
    ($container$$119_translateX$$ || $translateY$$) && $contentContainer$$3_i$$492$$.$setTranslate$($container$$119_translateX$$, $translateY$$);
    $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$_titles$;
    for ($contentContainer$$3_i$$492$$ = 0;$contentContainer$$3_i$$492$$ < $DvtLegendEventManager$$.length;$contentContainer$$3_i$$492$$++) {
      $dvt$$4$$.$LayoutUtils$.align($DvtLegendAutomation$$, $DvtLegendEventManager$$[$contentContainer$$3_i$$492$$].$halign$, $DvtLegendEventManager$$[$contentContainer$$3_i$$492$$].text, $DvtLegendEventManager$$[$contentContainer$$3_i$$492$$].text.$measureDimensions$().$w$);
    }
    return $contentDims_isRTL$$32_valign$$11$$;
  };
  $DvtLegendRenderer$$.$_renderContents$ = function $$DvtLegendRenderer$$$$_renderContents$$($dvt$$4$$, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $dvt$$4$$.$getOptions$();
    $DvtLegendKeyboardHandler$$ = $DvtLegendKeyboardHandler$$.clone();
    var $DvtLegendAutomation$$ = $DvtLegendRenderer$$.$_renderTitle$($dvt$$4$$, $DvtLegendObjPeer$$, $DvtLegendEventManager$$.title, $DvtLegendKeyboardHandler$$, null, !0);
    if ($DvtLegendAutomation$$) {
      var $titleDim$$ = $DvtLegendAutomation$$.$measureDimensions$(), $titleGap$$ = $DvtLegendDefaults$$.$getGapSize$($dvt$$4$$, $DvtLegendEventManager$$.layout.titleGapHeight);
      $DvtLegendKeyboardHandler$$.y += $titleDim$$.$h$ + $titleGap$$;
      $DvtLegendKeyboardHandler$$.$h$ -= Math.floor($titleDim$$.$h$ + $titleGap$$);
    }
    $dvt$$4$$ = $DvtLegendRenderer$$.$_renderSections$($dvt$$4$$, $DvtLegendObjPeer$$, $DvtLegendEventManager$$.sections, $DvtLegendKeyboardHandler$$, []);
    return $DvtLegendAutomation$$ ? $titleDim$$.$getUnion$($dvt$$4$$) : $dvt$$4$$;
  };
  $DvtLegendRenderer$$.$_renderBackground$ = function $$DvtLegendRenderer$$$$_renderBackground$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$getOptions$(), $DvtLegendDefaults$$ = $DvtLegendEventManager$$.backgroundColor, $DvtLegendRenderer$$ = $DvtLegendEventManager$$.borderColor, $DvtLegendEventManager$$ = $DvtLegendEventManager$$.dnd ? $DvtLegendEventManager$$.dnd.drop.legend : {};
    if ($DvtLegendDefaults$$ || $DvtLegendRenderer$$ || 0 < Object.keys($DvtLegendEventManager$$).length) {
      $DvtLegendEventManager$$ = new $dvt$$4$$.Rect($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendKeyboardHandler$$.x, $DvtLegendKeyboardHandler$$.y, $DvtLegendKeyboardHandler$$.$w$, $DvtLegendKeyboardHandler$$.$h$), $DvtLegendDefaults$$ ? $DvtLegendEventManager$$.$setSolidFill$($DvtLegendDefaults$$) : $DvtLegendEventManager$$.$setInvisibleFill$(), $DvtLegendRenderer$$ && ($DvtLegendEventManager$$.$setSolidStroke$($DvtLegendRenderer$$), $DvtLegendEventManager$$.$setPixelHinting$()), $DvtLegendObjPeer$$.$addChild$($DvtLegendEventManager$$), 
      $DvtLegendObjPeer$$.$_cache$.$putToCache$("background", $DvtLegendEventManager$$);
    }
  };
  $DvtLegendRenderer$$.$_renderTitle$ = function $$DvtLegendRenderer$$$$_renderTitle$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendRenderer$$, $DvtLegendAutomation$$, $id$$123$$, $button$$65$$) {
    var $options$$187$$ = $DvtLegendObjPeer$$.$getOptions$(), $context$$245_titleStyle$$2$$ = $DvtLegendKeyboardHandler$$.$getCtx$(), $isRTL$$33$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($context$$245_titleStyle$$2$$);
    if (!$DvtLegendEventManager$$) {
      return null;
    }
    $DvtLegendEventManager$$ = new $dvt$$4$$.$OutputText$($context$$245_titleStyle$$2$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$.x, $DvtLegendDefaults$$.y);
    $context$$245_titleStyle$$2$$ = $options$$187$$.titleStyle;
    $DvtLegendRenderer$$ && $DvtLegendRenderer$$.titleStyle ? $context$$245_titleStyle$$2$$ = new $dvt$$4$$.$CSSStyle$($DvtLegendRenderer$$.titleStyle) : $DvtLegendRenderer$$ && $options$$187$$._sectionTitleStyle && ($context$$245_titleStyle$$2$$ = $options$$187$$._sectionTitleStyle);
    $DvtLegendEventManager$$.$setCSSStyle$($context$$245_titleStyle$$2$$);
    return $dvt$$4$$.$TextUtils$.$fitText$($DvtLegendEventManager$$, $DvtLegendDefaults$$.$w$, Infinity, $DvtLegendKeyboardHandler$$) ? ($isRTL$$33$$ && $DvtLegendEventManager$$.$setX$($DvtLegendDefaults$$.x + $DvtLegendDefaults$$.$w$ - $DvtLegendEventManager$$.$measureDimensions$().$w$), $options$$187$$.isLayout ? $DvtLegendKeyboardHandler$$.removeChild($DvtLegendEventManager$$) : ($DvtLegendKeyboardHandler$$ = {id:$id$$123$$, button:$button$$65$$}, $DvtLegendKeyboardHandler$$.isCollapsible = $DvtLegendRenderer$$ && 
    ("on" == $DvtLegendRenderer$$.collapsible || 1 == $DvtLegendRenderer$$.collapsible), $DvtLegendObjPeer$$.$getEventManager$().$associate$($DvtLegendEventManager$$, new $dvt$$4$$.$SimpleObjPeer$($DvtLegendEventManager$$.$getUntruncatedTextString$(), null, null, $DvtLegendKeyboardHandler$$)), $DvtLegendAutomation$$ && $DvtLegendObjPeer$$.$__registerTitle$({text:$DvtLegendEventManager$$, $halign$:$DvtLegendRenderer$$ && $DvtLegendRenderer$$.titleHalign ? $DvtLegendRenderer$$.titleHalign : $options$$187$$.titleHalign})), 
    $DvtLegendEventManager$$) : null;
  };
  $DvtLegendRenderer$$.$_renderSections$ = function $$DvtLegendRenderer$$$$_renderSections$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $id$$124$$) {
    var $isHoriz$$16_options$$188$$ = $DvtLegendObjPeer$$.$getOptions$();
    null == $isHoriz$$16_options$$188$$.symbolWidth && null == $isHoriz$$16_options$$188$$.symbolHeight ? ($isHoriz$$16_options$$188$$.symbolWidth = $DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$, $isHoriz$$16_options$$188$$.symbolHeight = $DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$) : (null == $isHoriz$$16_options$$188$$.symbolWidth ? $isHoriz$$16_options$$188$$.symbolWidth = $isHoriz$$16_options$$188$$.symbolHeight : null == $isHoriz$$16_options$$188$$.symbolHeight && ($isHoriz$$16_options$$188$$.symbolHeight = 
    $isHoriz$$16_options$$188$$.symbolWidth), $isHoriz$$16_options$$188$$.symbolWidth = parseInt($isHoriz$$16_options$$188$$.symbolWidth), $isHoriz$$16_options$$188$$.symbolHeight = parseInt($isHoriz$$16_options$$188$$.symbolHeight));
    for (var $sectionGapHeight$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $isHoriz$$16_options$$188$$.layout.sectionGapHeight), $titleGapHeight$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $isHoriz$$16_options$$188$$.layout.titleGapHeight), $gapWidth$$3$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $isHoriz$$16_options$$188$$.layout.sectionGapWidth), $rowHeight$$ = $DvtLegendRenderer$$.$_getRowHeight$($DvtLegendObjPeer$$), $isHoriz$$16_options$$188$$ = "vertical" != 
    $isHoriz$$16_options$$188$$.orientation, $totalDim$$1$$ = null, $horizAvailSpace$$ = $DvtLegendAutomation$$.clone(), $sectionDim$$, $i$$493$$ = 0;$i$$493$$ < $DvtLegendEventManager$$.length;$i$$493$$++) {
      var $sectionId$$2$$ = $id$$124$$.concat([$i$$493$$]), $gapHeight$$3$$ = "off" == $DvtLegendEventManager$$[$i$$493$$].expanded || 0 == $DvtLegendEventManager$$[$i$$493$$].expanded ? $titleGapHeight$$ : $sectionGapHeight$$;
      $isHoriz$$16_options$$188$$ ? ($sectionDim$$ = $DvtLegendRenderer$$.$_renderHorizontalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$493$$], $horizAvailSpace$$, $rowHeight$$), $sectionDim$$.$w$ > $horizAvailSpace$$.$w$ ? ($horizAvailSpace$$.$w$ < $DvtLegendAutomation$$.$w$ && ($DvtLegendAutomation$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $DvtLegendAutomation$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$), $sectionDim$$ = $sectionDim$$.$w$ <= $DvtLegendAutomation$$.$w$ ? 
      $DvtLegendRenderer$$.$_renderHorizontalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$493$$], $DvtLegendAutomation$$, $rowHeight$$) : $DvtLegendRenderer$$.$_renderVerticalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$493$$], $DvtLegendAutomation$$, $rowHeight$$, $sectionId$$2$$, !0), $DvtLegendAutomation$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $DvtLegendAutomation$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$, 
      $horizAvailSpace$$ = $DvtLegendAutomation$$.clone()) : ($horizAvailSpace$$.$w$ -= $sectionDim$$.$w$ + $gapWidth$$3$$, $dvt$$4$$.$Agent$.$isRightToLeft$($DvtLegendObjPeer$$.$getCtx$()) || ($horizAvailSpace$$.x += $sectionDim$$.$w$ + $gapWidth$$3$$))) : ($sectionDim$$ = $DvtLegendRenderer$$.$_renderVerticalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$493$$], $DvtLegendAutomation$$, $rowHeight$$, $sectionId$$2$$, !1), $DvtLegendAutomation$$.y += $sectionDim$$.$h$ + 
      $gapHeight$$3$$, $DvtLegendAutomation$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$);
      $totalDim$$1$$ = $totalDim$$1$$ ? $totalDim$$1$$.$getUnion$($sectionDim$$) : $sectionDim$$;
    }
    return $totalDim$$1$$;
  };
  $DvtLegendRenderer$$.$_createButton$ = function $$DvtLegendRenderer$$$$_createButton$$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $prefix$$3$$, $x$$159$$, $y$$138$$, $tooltip$$21$$, $id$$125$$, $callback$$116$$, $callbackObj$$53$$) {
    var $upState$$12$$ = $DvtLegendRenderer$$.$_createButtonImage$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, $prefix$$3$$ + "Enabled", $x$$159$$, $y$$138$$), $overState$$9$$ = $DvtLegendRenderer$$.$_createButtonImage$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, $prefix$$3$$ + "Over", $x$$159$$, $y$$138$$);
    $DvtLegendAutomation$$ = $DvtLegendRenderer$$.$_createButtonImage$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, $prefix$$3$$ + "Down", $x$$159$$, $y$$138$$);
    $DvtLegendKeyboardHandler$$ = new $dvt$$4$$.$Button$($DvtLegendKeyboardHandler$$, $upState$$12$$, $overState$$9$$, $DvtLegendAutomation$$, null, $id$$125$$, $callback$$116$$, $callbackObj$$53$$);
    $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$associate$([$DvtLegendKeyboardHandler$$], $DvtLegendEventManager$$, $DvtLegendDefaults$$, $tooltip$$21$$, null, !1);
    $DvtLegendKeyboardHandler$$.$setAriaRole$("button");
    $DvtLegendEventManager$$.$updateAriaLabel$();
    return $DvtLegendKeyboardHandler$$;
  };
  $DvtLegendRenderer$$.$_createButtonImage$ = function $$DvtLegendRenderer$$$$_createButtonImage$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) {
    var $suffix$$2$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtLegendObjPeer$$) ? "RTL" : "";
    $DvtLegendObjPeer$$ = new $dvt$$4$$.Image($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$ + $suffix$$2$$] ? $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$ + $suffix$$2$$] : $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$], $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$.$_BUTTON_SIZE$, $DvtLegendRenderer$$.$_BUTTON_SIZE$);
    $DvtLegendObjPeer$$.$setInvisibleFill$();
    return $DvtLegendObjPeer$$;
  };
  $DvtLegendRenderer$$.$_renderVerticalSection$ = function $$DvtLegendRenderer$$$$_renderVerticalSection$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $rowHeight$$1$$, $id$$126_nestedSectionDim_numRows$$, $minimizeNumRows_numCols$$) {
    if ($DvtLegendEventManager$$) {
      var $options$$189_textSpace$$ = $DvtLegendObjPeer$$.$getOptions$(), $currRow_symbolGap$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$189_textSpace$$.layout.symbolGapWidth), $rowGap$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$189_textSpace$$.layout.rowGap), $colGap$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$189_textSpace$$.layout.columnGap), $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$ = $DvtLegendObjPeer$$.$getCtx$(), 
      $isRTL$$34$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$);
      $DvtLegendAutomation$$ = $DvtLegendAutomation$$.clone();
      "off" != $options$$189_textSpace$$.scrolling && ($DvtLegendAutomation$$.$h$ = Infinity);
      var $buttonDim_buttonX_colInitY$$, $colInfo_colWidth_isCollapsible_titleGap$$1$$ = "on" == $DvtLegendEventManager$$.collapsible || 1 == $DvtLegendEventManager$$.collapsible, $button$$67_buttonType_contentWidth$$3_currCol$$;
      if ($colInfo_colWidth_isCollapsible_titleGap$$1$$) {
        $buttonDim_buttonX_colInitY$$ = $isRTL$$34$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ - $DvtLegendRenderer$$.$_BUTTON_SIZE$ : $DvtLegendAutomation$$.x;
        if (!$options$$189_textSpace$$.isLayout) {
          var $buttonTooltip_isCollapsed_numItems$$2$$ = "off" == $DvtLegendEventManager$$.expanded || 0 == $DvtLegendEventManager$$.expanded;
          $button$$67_buttonType_contentWidth$$3_currCol$$ = $buttonTooltip_isCollapsed_numItems$$2$$ ? "closed" : "open";
          var $buttonTooltip_isCollapsed_numItems$$2$$ = $dvt$$4$$.$Bundle$.$getTranslatedString$($dvt$$4$$.$Bundle$.$UTIL_PREFIX$, $buttonTooltip_isCollapsed_numItems$$2$$ ? "EXPAND" : "COLLAPSE", null), $em$$4_i$$494$$ = $DvtLegendObjPeer$$.$getEventManager$();
          $button$$67_buttonType_contentWidth$$3_currCol$$ = $DvtLegendRenderer$$.$_createButton$($buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$, $DvtLegendObjPeer$$, $DvtLegendEventManager$$, $options$$189_textSpace$$._resources, $button$$67_buttonType_contentWidth$$3_currCol$$, $buttonDim_buttonX_colInitY$$, $DvtLegendAutomation$$.y, $buttonTooltip_isCollapsed_numItems$$2$$, $id$$126_nestedSectionDim_numRows$$, $em$$4_i$$494$$.$onCollapseButtonClick$, $em$$4_i$$494$$);
          $DvtLegendKeyboardHandler$$.$addChild$($button$$67_buttonType_contentWidth$$3_currCol$$);
        }
        $buttonDim_buttonX_colInitY$$ = new $dvt$$4$$.$Rectangle$($buttonDim_buttonX_colInitY$$, $DvtLegendAutomation$$.y, $DvtLegendRenderer$$.$_BUTTON_SIZE$, $DvtLegendRenderer$$.$_BUTTON_SIZE$);
        $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$189_textSpace$$.layout.symbolGapWidth);
        $isRTL$$34$$ || ($DvtLegendAutomation$$.x += $DvtLegendRenderer$$.$_BUTTON_SIZE$ + $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$);
        $DvtLegendAutomation$$.$w$ -= $DvtLegendRenderer$$.$_BUTTON_SIZE$ + $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$;
      }
      $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$ = ($buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$ = $DvtLegendRenderer$$.$_renderTitle$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.title, $DvtLegendAutomation$$, $DvtLegendEventManager$$, !$colInfo_colWidth_isCollapsible_titleGap$$1$$ && 1 >= $id$$126_nestedSectionDim_numRows$$.length, $id$$126_nestedSectionDim_numRows$$, $button$$67_buttonType_contentWidth$$3_currCol$$)) ? $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$.$measureDimensions$() : 
      new $dvt$$4$$.$Rectangle$($isRTL$$34$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ : $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, 0, 0);
      $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$ = $buttonDim_buttonX_colInitY$$ ? $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$.$getUnion$($buttonDim_buttonX_colInitY$$) : $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$;
      if (!$DvtLegendEventManager$$.items && !$DvtLegendEventManager$$.sections || "off" == $DvtLegendEventManager$$.expanded || 0 == $DvtLegendEventManager$$.expanded) {
        return $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$;
      }
      0 < $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$.$h$ && ($colInfo_colWidth_isCollapsible_titleGap$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$189_textSpace$$.layout.titleGapHeight), $DvtLegendAutomation$$.y += $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$.$h$ + $colInfo_colWidth_isCollapsible_titleGap$$1$$, $DvtLegendAutomation$$.$h$ -= $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$.$h$ + $colInfo_colWidth_isCollapsible_titleGap$$1$$);
      $DvtLegendEventManager$$.sections && ($id$$126_nestedSectionDim_numRows$$ = $DvtLegendRenderer$$.$_renderSections$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.sections, $DvtLegendAutomation$$, $id$$126_nestedSectionDim_numRows$$), $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$ = $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$.$getUnion$($id$$126_nestedSectionDim_numRows$$));
      if (!$DvtLegendEventManager$$.items) {
        return $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$;
      }
      $colInfo_colWidth_isCollapsible_titleGap$$1$$ = $DvtLegendRenderer$$.$_calcColumns$($DvtLegendObjPeer$$, $DvtLegendAutomation$$, $rowHeight$$1$$, $DvtLegendEventManager$$.items, $minimizeNumRows_numCols$$);
      $minimizeNumRows_numCols$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$.numCols;
      $id$$126_nestedSectionDim_numRows$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$.numRows;
      $colInfo_colWidth_isCollapsible_titleGap$$1$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$.width;
      $buttonDim_buttonX_colInitY$$ = $DvtLegendAutomation$$.y;
      if (0 == $id$$126_nestedSectionDim_numRows$$ || 0 == $minimizeNumRows_numCols$$) {
        return $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$;
      }
      $button$$67_buttonType_contentWidth$$3_currCol$$ = Math.min($minimizeNumRows_numCols$$ * ($colInfo_colWidth_isCollapsible_titleGap$$1$$ + $colGap$$) - $colGap$$, $DvtLegendAutomation$$.$w$);
      $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$ = $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$.$getUnion$(new $dvt$$4$$.$Rectangle$($isRTL$$34$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ - $button$$67_buttonType_contentWidth$$3_currCol$$ : $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, $button$$67_buttonType_contentWidth$$3_currCol$$, $id$$126_nestedSectionDim_numRows$$ * ($rowHeight$$1$$ + $rowGap$$) - $rowGap$$));
      if ($options$$189_textSpace$$.isLayout) {
        return $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$;
      }
      $options$$189_textSpace$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$ - $options$$189_textSpace$$.symbolWidth - $currRow_symbolGap$$;
      $currRow_symbolGap$$ = 0;
      $button$$67_buttonType_contentWidth$$3_currCol$$ = 1;
      $buttonTooltip_isCollapsed_numItems$$2$$ = $DvtLegendEventManager$$.items.length;
      for ($em$$4_i$$494$$ = 0;$em$$4_i$$494$$ < $buttonTooltip_isCollapsed_numItems$$2$$ && ($DvtLegendRenderer$$.$_createLegendItem$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.items[$em$$4_i$$494$$], $DvtLegendAutomation$$, $options$$189_textSpace$$, $rowHeight$$1$$, $em$$4_i$$494$$), $DvtLegendAutomation$$.y += $rowHeight$$1$$ + $rowGap$$, $currRow_symbolGap$$++, $currRow_symbolGap$$ === $id$$126_nestedSectionDim_numRows$$ && $button$$67_buttonType_contentWidth$$3_currCol$$ !== 
      $minimizeNumRows_numCols$$ && ($DvtLegendAutomation$$.y = $buttonDim_buttonX_colInitY$$, $DvtLegendAutomation$$.$w$ -= $colInfo_colWidth_isCollapsible_titleGap$$1$$ + $colGap$$, $isRTL$$34$$ || ($DvtLegendAutomation$$.x += $colInfo_colWidth_isCollapsible_titleGap$$1$$ + $colGap$$), $currRow_symbolGap$$ = 0, $button$$67_buttonType_contentWidth$$3_currCol$$++), $currRow_symbolGap$$ !== $id$$126_nestedSectionDim_numRows$$);$em$$4_i$$494$$++) {
      }
      return $buttonGap_context$$248_sectionDim$$1_title$$17_titleDim$$1$$;
    }
  };
  $DvtLegendRenderer$$.$_renderHorizontalSection$ = function $$DvtLegendRenderer$$$$_renderHorizontalSection$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $rowHeight$$2$$) {
    if ($DvtLegendEventManager$$) {
      var $options$$190$$ = $DvtLegendObjPeer$$.$getOptions$(), $symbolWidth$$ = $options$$190$$.symbolWidth, $symbolGap$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$190$$.layout.symbolGapWidth), $colGap$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$190$$.layout.columnGap), $textWidths_titleGap$$2$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$190$$.layout.titleGapWidth), $numItems$$3$$ = $DvtLegendEventManager$$.items.length, 
      $isRTL$$35$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($DvtLegendObjPeer$$.$getCtx$()), $sectionSpace$$1$$ = $DvtLegendAutomation$$.clone(), $title$$18$$ = $DvtLegendRenderer$$.$_renderTitle$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.title, $DvtLegendAutomation$$, $DvtLegendEventManager$$, !1), $sectionDim$$2_titleDim$$2$$ = $title$$18$$ ? $title$$18$$.$measureDimensions$() : new $dvt$$4$$.$Rectangle$($isRTL$$35$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ : 
      $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, 0, 0);
      if (!$DvtLegendEventManager$$.items) {
        return $sectionDim$$2_titleDim$$2$$;
      }
      0 < $sectionDim$$2_titleDim$$2$$.$w$ && ($sectionSpace$$1$$.$w$ -= $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths_titleGap$$2$$, $isRTL$$35$$ || ($sectionSpace$$1$$.x += $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths_titleGap$$2$$));
      var $textWidths_titleGap$$2$$ = [], $totalWidth$$5$$ = $DvtLegendAutomation$$.$w$ - $sectionSpace$$1$$.$w$, $item$$29_textWidth$$2$$, $i$$495$$;
      for ($i$$495$$ = 0;$i$$495$$ < $numItems$$3$$;$i$$495$$++) {
        $item$$29_textWidth$$2$$ = $DvtLegendEventManager$$.items[$i$$495$$], $item$$29_textWidth$$2$$ = Math.ceil($dvt$$4$$.$TextUtils$.$getTextStringWidth$($DvtLegendObjPeer$$.$getCtx$(), $item$$29_textWidth$$2$$.text, $options$$190$$.textStyle)), $totalWidth$$5$$ += $item$$29_textWidth$$2$$ + $symbolWidth$$ + $symbolGap$$1$$ + $colGap$$1$$, $textWidths_titleGap$$2$$.push($item$$29_textWidth$$2$$);
      }
      0 < $numItems$$3$$ && ($totalWidth$$5$$ -= $colGap$$1$$);
      $sectionDim$$2_titleDim$$2$$ = new $dvt$$4$$.$Rectangle$($isRTL$$35$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ - $totalWidth$$5$$ : $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, $totalWidth$$5$$, Math.max($rowHeight$$2$$, $sectionDim$$2_titleDim$$2$$.$h$));
      if ($options$$190$$.isLayout || $totalWidth$$5$$ > $DvtLegendAutomation$$.$w$) {
        return $DvtLegendKeyboardHandler$$.removeChild($title$$18$$), $sectionDim$$2_titleDim$$2$$;
      }
      for ($i$$495$$ = 0;$i$$495$$ < $numItems$$3$$;$i$$495$$++) {
        $item$$29_textWidth$$2$$ = $DvtLegendEventManager$$.items[$i$$495$$], $DvtLegendRenderer$$.$_createLegendItem$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $item$$29_textWidth$$2$$, $sectionSpace$$1$$, $textWidths_titleGap$$2$$[$i$$495$$], $rowHeight$$2$$, $i$$495$$), $DvtLegendAutomation$$ = $textWidths_titleGap$$2$$[$i$$495$$] + $symbolWidth$$ + $symbolGap$$1$$, $sectionSpace$$1$$.$w$ -= $DvtLegendAutomation$$ + $colGap$$1$$, $isRTL$$35$$ || ($sectionSpace$$1$$.x += $DvtLegendAutomation$$ + 
        $colGap$$1$$);
      }
      return $sectionDim$$2_titleDim$$2$$;
    }
  };
  $DvtLegendRenderer$$.$_calcColumns$ = function $$DvtLegendRenderer$$$$_calcColumns$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendRenderer$$, $DvtLegendAutomation$$) {
    for (var $options$$191$$ = $DvtLegendObjPeer$$.$getOptions$(), $hasLargeItemsCount_symbolWidth$$1$$ = 100 < $dvt$$4$$.$Legend$.$getItemCount$($DvtLegendObjPeer$$), $fullColWidth_textWidth$$3$$ = 0, $i$$496_rowGap$$1$$ = 0;$i$$496_rowGap$$1$$ < $DvtLegendRenderer$$.length;$i$$496_rowGap$$1$$++) {
      var $item$$30_outputText_symbolGap$$2_tempWidth$$ = $DvtLegendRenderer$$[$i$$496_rowGap$$1$$];
      $hasLargeItemsCount_symbolWidth$$1$$ ? ($item$$30_outputText_symbolGap$$2_tempWidth$$ = new $dvt$$4$$.$OutputText$($DvtLegendObjPeer$$.$getCtx$(), $item$$30_outputText_symbolGap$$2_tempWidth$$.text), $item$$30_outputText_symbolGap$$2_tempWidth$$.$setCSSStyle$($options$$191$$.textStyle), $item$$30_outputText_symbolGap$$2_tempWidth$$ = $dvt$$4$$.$TextUtils$.$guessTextDimensions$($item$$30_outputText_symbolGap$$2_tempWidth$$).$w$) : $item$$30_outputText_symbolGap$$2_tempWidth$$ = $dvt$$4$$.$TextUtils$.$getTextStringWidth$($DvtLegendObjPeer$$.$getCtx$(), 
      $item$$30_outputText_symbolGap$$2_tempWidth$$.text, $options$$191$$.textStyle);
      $item$$30_outputText_symbolGap$$2_tempWidth$$ > $fullColWidth_textWidth$$3$$ && ($fullColWidth_textWidth$$3$$ = $item$$30_outputText_symbolGap$$2_tempWidth$$);
    }
    $hasLargeItemsCount_symbolWidth$$1$$ = $options$$191$$.symbolWidth;
    $item$$30_outputText_symbolGap$$2_tempWidth$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$191$$.layout.symbolGapWidth);
    $i$$496_rowGap$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$191$$.layout.rowGap);
    $DvtLegendObjPeer$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$191$$.layout.columnGap);
    $fullColWidth_textWidth$$3$$ = Math.ceil($hasLargeItemsCount_symbolWidth$$1$$ + $item$$30_outputText_symbolGap$$2_tempWidth$$ + $fullColWidth_textWidth$$3$$);
    $DvtLegendAutomation$$ ? ($DvtLegendAutomation$$ = Math.min(Math.floor(($DvtLegendKeyboardHandler$$.$w$ + $DvtLegendObjPeer$$) / ($fullColWidth_textWidth$$3$$ + $DvtLegendObjPeer$$)), $DvtLegendRenderer$$.length), $DvtLegendEventManager$$ = Math.min(Math.floor(($DvtLegendKeyboardHandler$$.$h$ + $i$$496_rowGap$$1$$) / ($DvtLegendEventManager$$ + $i$$496_rowGap$$1$$)), Math.ceil($DvtLegendRenderer$$.length / $DvtLegendAutomation$$)), $DvtLegendAutomation$$ = Math.ceil($DvtLegendRenderer$$.length / 
    $DvtLegendEventManager$$), $DvtLegendEventManager$$ = Math.ceil($DvtLegendRenderer$$.length / $DvtLegendAutomation$$)) : Infinity == $DvtLegendKeyboardHandler$$.$h$ ? ($DvtLegendAutomation$$ = 1, $DvtLegendEventManager$$ = $DvtLegendRenderer$$.length) : ($DvtLegendEventManager$$ = Math.min(Math.floor(($DvtLegendKeyboardHandler$$.$h$ + $i$$496_rowGap$$1$$) / ($DvtLegendEventManager$$ + $i$$496_rowGap$$1$$)), $DvtLegendRenderer$$.length), $DvtLegendAutomation$$ = Math.ceil($DvtLegendRenderer$$.length / 
    $DvtLegendEventManager$$), $DvtLegendEventManager$$ = Math.ceil($DvtLegendRenderer$$.length / $DvtLegendAutomation$$));
    $DvtLegendKeyboardHandler$$ = Math.min($fullColWidth_textWidth$$3$$, ($DvtLegendKeyboardHandler$$.$w$ - $DvtLegendObjPeer$$ * ($DvtLegendAutomation$$ - 1)) / $DvtLegendAutomation$$);
    return $DvtLegendKeyboardHandler$$ < $hasLargeItemsCount_symbolWidth$$1$$ ? {width:0, numCols:0, numRows:0} : {width:$DvtLegendKeyboardHandler$$, numCols:$DvtLegendAutomation$$, numRows:$DvtLegendEventManager$$};
  };
  $DvtLegendRenderer$$.$_getRowHeight$ = function $$DvtLegendRenderer$$$$_getRowHeight$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.$getOptions$(), $DvtLegendEventManager$$ = new $dvt$$4$$.$OutputText$($DvtLegendObjPeer$$.$getCtx$(), "Test");
    $DvtLegendEventManager$$.$setCSSStyle$($DvtLegendKeyboardHandler$$.textStyle);
    $DvtLegendEventManager$$.$alignMiddle$();
    $DvtLegendEventManager$$ = $dvt$$4$$.$TextUtils$.$guessTextDimensions$($DvtLegendEventManager$$).$h$;
    $DvtLegendObjPeer$$ = $DvtLegendKeyboardHandler$$.symbolHeight + $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$.layout.symbolGapHeight);
    return Math.ceil(Math.max($DvtLegendEventManager$$, $DvtLegendObjPeer$$));
  };
  $DvtLegendRenderer$$.$_createLegendItem$ = function $$DvtLegendRenderer$$$$_createLegendItem$$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $availSpace$$95_itemRect$$, $textSpace$$1$$, $rowHeight$$4$$) {
    var $hideAndShow$$4_options$$193$$ = $DvtLegendKeyboardHandler$$.$getOptions$(), $context$$249$$ = $DvtLegendKeyboardHandler$$.$getCtx$(), $isRTL$$36$$ = $dvt$$4$$.$Agent$.$isRightToLeft$($context$$249$$), $symbolWidth$$2$$ = $hideAndShow$$4_options$$193$$.symbolWidth, $symbolGap$$3$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendKeyboardHandler$$, $hideAndShow$$4_options$$193$$.layout.symbolGapWidth), $symbolX$$ = $isRTL$$36$$ ? $availSpace$$95_itemRect$$.x + $availSpace$$95_itemRect$$.$w$ - 
    $symbolWidth$$2$$ : $availSpace$$95_itemRect$$.x, $textX$$ = $isRTL$$36$$ ? $availSpace$$95_itemRect$$.x + $availSpace$$95_itemRect$$.$w$ - $symbolWidth$$2$$ - $symbolGap$$3$$ : $availSpace$$95_itemRect$$.x + $symbolWidth$$2$$ + $symbolGap$$3$$, $marker$$10$$ = $DvtLegendRenderer$$.$_createLegendSymbol$($DvtLegendKeyboardHandler$$, $symbolX$$, $availSpace$$95_itemRect$$.y, $rowHeight$$4$$, $DvtLegendAutomation$$), $label$$57$$ = $DvtLegendAutomation$$.text, $peer$$24_text$$66$$;
    $label$$57$$ && ($peer$$24_text$$66$$ = $DvtLegendRenderer$$.$_createLegendText$($DvtLegendEventManager$$, $textSpace$$1$$, $label$$57$$, $hideAndShow$$4_options$$193$$.textStyle)) && ($peer$$24_text$$66$$.$setX$($textX$$), $dvt$$4$$.$TextUtils$.$centerTextVertically$($peer$$24_text$$66$$, $availSpace$$95_itemRect$$.y + $rowHeight$$4$$ / 2), $isRTL$$36$$ && $peer$$24_text$$66$$.$alignRight$());
    $DvtLegendEventManager$$.$addChild$($marker$$10$$);
    $availSpace$$95_itemRect$$ = new $dvt$$4$$.Rect($context$$249$$, $isRTL$$36$$ ? $textX$$ - $textSpace$$1$$ - $DvtLegendRenderer$$.$_FOCUS_GAP$ : $symbolX$$ - $DvtLegendRenderer$$.$_FOCUS_GAP$, $availSpace$$95_itemRect$$.y - $DvtLegendRenderer$$.$_FOCUS_GAP$, $symbolWidth$$2$$ + $symbolGap$$3$$ + $textSpace$$1$$ + 2 * $DvtLegendRenderer$$.$_FOCUS_GAP$, $rowHeight$$4$$ + 2 * $DvtLegendRenderer$$.$_FOCUS_GAP$);
    $availSpace$$95_itemRect$$.$setInvisibleFill$();
    $hideAndShow$$4_options$$193$$ = $hideAndShow$$4_options$$193$$.hideAndShowBehavior;
    "none" != $hideAndShow$$4_options$$193$$ && "off" != $hideAndShow$$4_options$$193$$ && $availSpace$$95_itemRect$$.setCursor("pointer");
    $DvtLegendEventManager$$.$addChild$($availSpace$$95_itemRect$$);
    $DvtLegendEventManager$$ = [$availSpace$$95_itemRect$$, $marker$$10$$];
    null != $peer$$24_text$$66$$ && $DvtLegendEventManager$$.push($peer$$24_text$$66$$);
    $peer$$24_text$$66$$ = $DvtLegendObjPeer$$.$associate$($DvtLegendEventManager$$, $DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, null != $peer$$24_text$$66$$ ? $peer$$24_text$$66$$.$getUntruncatedTextString$() : null, $DvtLegendAutomation$$.shortDesc, $DvtLegendRenderer$$.$_isItemDrillable$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$));
    $DvtLegendRenderer$$.$isCategoryHidden$($DvtLegendRenderer$$.$getItemCategory$($DvtLegendAutomation$$), $DvtLegendKeyboardHandler$$) && ($marker$$10$$.$setHollow$($peer$$24_text$$66$$.$getColor$()), $marker$$10$$.$setStyle$().$setClassName$());
    if ("none" != $hideAndShow$$4_options$$193$$ && "off" != $hideAndShow$$4_options$$193$$ || null != $DvtLegendAutomation$$.shortDesc) {
      $availSpace$$95_itemRect$$.$setAriaRole$("img"), $peer$$24_text$$66$$.$updateAriaLabel$();
    }
  };
  $DvtLegendRenderer$$.$_isItemDrillable$ = function $$DvtLegendRenderer$$$$_isItemDrillable$$($dvt$$4$$, $DvtLegendObjPeer$$) {
    return "on" == $DvtLegendObjPeer$$.drilling ? !0 : "off" == $DvtLegendObjPeer$$.drilling ? !1 : "on" == $dvt$$4$$.$getOptions$().drilling;
  };
  $DvtLegendRenderer$$.$_createLegendText$ = function $$DvtLegendRenderer$$$$_createLegendText$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$) {
    $DvtLegendEventManager$$ = new $dvt$$4$$.$OutputText$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendEventManager$$);
    $DvtLegendEventManager$$.$setCSSStyle$($DvtLegendDefaults$$);
    return $DvtLegendEventManager$$ = $dvt$$4$$.$TextUtils$.$fitText$($DvtLegendEventManager$$, $DvtLegendKeyboardHandler$$, Infinity, $DvtLegendObjPeer$$) ? $DvtLegendEventManager$$ : null;
  };
  $DvtLegendRenderer$$.$_createLegendSymbol$ = function $$DvtLegendRenderer$$$$_createLegendSymbol$$($dvt$$4$$, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$) {
    var $DvtLegendAutomation$$ = $dvt$$4$$.$getOptions$(), $symbolType$$ = null != $DvtLegendDefaults$$.type ? $DvtLegendDefaults$$.type : $DvtLegendDefaults$$.symbolType;
    $DvtLegendDefaults$$.markerShape || ($DvtLegendDefaults$$.markerShape = $DvtLegendAutomation$$._markerShape);
    $DvtLegendDefaults$$.color || ($DvtLegendDefaults$$.color = $DvtLegendAutomation$$._color);
    $DvtLegendDefaults$$.lineWidth || ($DvtLegendDefaults$$.lineWidth = "lineWithMarker" == $symbolType$$ ? $DvtLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$ : $DvtLegendAutomation$$._lineWidth);
    var $symbolWidth$$3$$ = $DvtLegendAutomation$$.symbolWidth, $DvtLegendAutomation$$ = $DvtLegendAutomation$$.symbolHeight, $cy$$26$$ = $DvtLegendKeyboardHandler$$ + $DvtLegendEventManager$$ / 2, $cx$$25$$ = $DvtLegendObjPeer$$ + $symbolWidth$$3$$ / 2;
    "line" == $symbolType$$ ? $DvtLegendObjPeer$$ = $DvtLegendRenderer$$.$_createLine$($dvt$$4$$.$getCtx$(), $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $symbolWidth$$3$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$) : "lineWithMarker" == $symbolType$$ ? ($DvtLegendObjPeer$$ = $DvtLegendRenderer$$.$_createLine$($dvt$$4$$.$getCtx$(), $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $symbolWidth$$3$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$), $DvtLegendRenderer$$.$isCategoryHidden$($DvtLegendRenderer$$.$getItemCategory$($DvtLegendDefaults$$), 
    $dvt$$4$$) || $DvtLegendObjPeer$$.$addChild$($DvtLegendRenderer$$.$_createMarker$($dvt$$4$$, $cx$$25$$, $cy$$26$$, $symbolWidth$$3$$ * $DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $DvtLegendAutomation$$ * $DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $DvtLegendDefaults$$))) : $DvtLegendObjPeer$$ = "image" == $symbolType$$ ? $DvtLegendRenderer$$.$_createImage$($dvt$$4$$, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $symbolWidth$$3$$, $DvtLegendAutomation$$, $DvtLegendEventManager$$, 
    $DvtLegendDefaults$$) : $DvtLegendRenderer$$.$_createMarker$($dvt$$4$$, $cx$$25$$, $cy$$26$$, $symbolWidth$$3$$, $DvtLegendAutomation$$, $DvtLegendDefaults$$);
    return $DvtLegendObjPeer$$;
  };
  $DvtLegendRenderer$$.$_createImage$ = function $$DvtLegendRenderer$$$$_createImage$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendRenderer$$, $DvtLegendAutomation$$, $item$$34$$) {
    return new $dvt$$4$$.$ImageMarker$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendKeyboardHandler$$ + $DvtLegendDefaults$$ / 2, $DvtLegendEventManager$$ + $DvtLegendAutomation$$ / 2, $DvtLegendDefaults$$, $DvtLegendRenderer$$, null, $item$$34$$.source);
  };
  $DvtLegendRenderer$$.$_createMarker$ = function $$DvtLegendRenderer$$$$_createMarker$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendRenderer$$, $DvtLegendAutomation$$) {
    var $context$$251$$ = $DvtLegendObjPeer$$.$getCtx$(), $legendOptions$$7$$ = $DvtLegendObjPeer$$.$getOptions$();
    $DvtLegendObjPeer$$ = $DvtLegendAutomation$$.markerShape;
    var $color$$45$$ = $DvtLegendAutomation$$.markerColor ? $DvtLegendAutomation$$.markerColor : $DvtLegendAutomation$$.color, $style$$85$$ = $DvtLegendAutomation$$.markerStyle ? $DvtLegendAutomation$$.markerStyle : $DvtLegendAutomation$$.style, $className$$11$$ = $DvtLegendAutomation$$.markerClassName ? $DvtLegendAutomation$$.markerClassName : $DvtLegendAutomation$$.className, $pattern$$6$$ = $DvtLegendAutomation$$.pattern;
    $pattern$$6$$ && "none" != $pattern$$6$$ ? ($DvtLegendDefaults$$ = new $dvt$$4$$.$SimpleMarker$($context$$251$$, $DvtLegendObjPeer$$, $legendOptions$$7$$.skin, 0, 0, $DvtLegendDefaults$$, $DvtLegendRenderer$$, null, null, !0), $DvtLegendDefaults$$.$setFill$(new $dvt$$4$$.$PatternFill$($pattern$$6$$, $color$$45$$, "#FFFFFF")), $DvtLegendDefaults$$.$setTranslate$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$)) : ($DvtLegendDefaults$$ = new $dvt$$4$$.$SimpleMarker$($context$$251$$, $DvtLegendObjPeer$$, 
    $legendOptions$$7$$.skin, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendRenderer$$, null, null, !0), $DvtLegendDefaults$$.$setSolidFill$($color$$45$$));
    $DvtLegendAutomation$$.borderColor && $DvtLegendDefaults$$.$setSolidStroke$($DvtLegendAutomation$$.borderColor, null, $DvtLegendAutomation$$._borderWidth ? $DvtLegendAutomation$$._borderWidth : 1);
    "square" == $DvtLegendObjPeer$$ && $DvtLegendDefaults$$.$setPixelHinting$();
    $DvtLegendDefaults$$.$setClassName$($className$$11$$).$setStyle$($style$$85$$);
    return $DvtLegendDefaults$$;
  };
  $DvtLegendRenderer$$.$_createLine$ = function $$DvtLegendRenderer$$$$_createLine$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendRenderer$$, $DvtLegendAutomation$$) {
    $DvtLegendEventManager$$ += $DvtLegendRenderer$$ / 2;
    $DvtLegendObjPeer$$ = new $dvt$$4$$.$Line$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendKeyboardHandler$$ + $DvtLegendDefaults$$, $DvtLegendEventManager$$);
    $DvtLegendKeyboardHandler$$ = new $dvt$$4$$.$SolidStroke$($DvtLegendAutomation$$.color, 1, $DvtLegendAutomation$$.lineWidth);
    $DvtLegendDefaults$$ = $DvtLegendAutomation$$.lineStyle;
    "dashed" == $DvtLegendDefaults$$ ? $DvtLegendKeyboardHandler$$.$setType$($dvt$$4$$.$Stroke$.$convertTypeString$($DvtLegendDefaults$$), "4,2,4") : "dotted" == $DvtLegendDefaults$$ && $DvtLegendKeyboardHandler$$.$setType$($dvt$$4$$.$Stroke$.$convertTypeString$($DvtLegendDefaults$$), "2");
    $DvtLegendObjPeer$$.$setClassName$($DvtLegendAutomation$$.className).$setStyle$($DvtLegendAutomation$$.style);
    $DvtLegendObjPeer$$.$setStroke$($DvtLegendKeyboardHandler$$);
    $DvtLegendObjPeer$$.$setPixelHinting$();
    return $DvtLegendObjPeer$$;
  };
  $DvtLegendRenderer$$.$getItemCategory$ = function $$DvtLegendRenderer$$$$getItemCategory$$($dvt$$4$$) {
    var $DvtLegendObjPeer$$ = null;
    return $DvtLegendObjPeer$$ = $dvt$$4$$.categories && 0 < $dvt$$4$$.categories.length ? $dvt$$4$$.categories[0] : $dvt$$4$$.id ? $dvt$$4$$.id : $dvt$$4$$.text;
  };
  $DvtLegendRenderer$$.$isCategoryHidden$ = function $$DvtLegendRenderer$$$$isCategoryHidden$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendKeyboardHandler$$.$getOptions$().hiddenCategories;
    return !$DvtLegendEventManager$$ || 0 >= $DvtLegendEventManager$$.length ? !1 : -1 !== $dvt$$4$$.$ArrayUtils$.$getIndex$($DvtLegendEventManager$$, $DvtLegendObjPeer$$);
  };
  $dvt$$4$$.$exportProperty$($dvt$$4$$, "Legend", $dvt$$4$$.$Legend$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$.$Legend$, "newInstance", $dvt$$4$$.$Legend$.newInstance);
  $dvt$$4$$.$exportProperty$($dvt$$4$$.$Legend$.prototype, "destroy", $dvt$$4$$.$Legend$.prototype.$destroy$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$.$Legend$.prototype, "getAutomation", $dvt$$4$$.$Legend$.prototype.$getAutomation$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$.$Legend$.prototype, "getPreferredSize", $dvt$$4$$.$Legend$.prototype.$getPreferredSize$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$.$Legend$.prototype, "highlight", $dvt$$4$$.$Legend$.prototype.$highlight$);
  $dvt$$4$$.$exportProperty$($dvt$$4$$.$Legend$.prototype, "render", $dvt$$4$$.$Legend$.prototype.$render$);
  $dvt$$4$$.$exportProperty$($DvtLegendAutomation$$.prototype, "getDomElementForSubId", $DvtLegendAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$4$$.$exportProperty$($DvtLegendAutomation$$.prototype, "getItem", $DvtLegendAutomation$$.prototype.getItem);
  $dvt$$4$$.$exportProperty$($DvtLegendAutomation$$.prototype, "getSection", $DvtLegendAutomation$$.prototype.$getSection$);
  $dvt$$4$$.$exportProperty$($DvtLegendAutomation$$.prototype, "getTitle", $DvtLegendAutomation$$.prototype.$getTitle$);
})(dvt);

  return dvt;
});
