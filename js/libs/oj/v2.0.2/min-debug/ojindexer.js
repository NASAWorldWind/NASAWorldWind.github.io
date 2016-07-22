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
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$45$$, $$$$42$$, $Hammer$$3$$) {
  $oj$$45$$.$IndexerModel$ = function $$oj$$45$$$$IndexerModel$$() {
  };
  $goog$exportPath_$$("IndexerModel", $oj$$45$$.$IndexerModel$, $oj$$45$$);
  $oj$$45$$.$IndexerModel$.PREFIX_OTHERS = "__others__";
  $goog$exportPath_$$("IndexerModel.PREFIX_OTHERS", $oj$$45$$.$IndexerModel$.PREFIX_OTHERS, $oj$$45$$);
  $oj$$45$$.$IndexerModel$.$EventType$ = {CHANGE:"change"};
  $goog$exportPath_$$("IndexerModel.EventType", $oj$$45$$.$IndexerModel$.$EventType$, $oj$$45$$);
  $oj$$45$$.$IndexerModel$.prototype.setPrefix = function $$oj$$45$$$$IndexerModel$$$setPrefix$() {
  };
  $oj$$45$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.setPrefix", {setPrefix:$oj$$45$$.$IndexerModel$.prototype.setPrefix});
  $oj$$45$$.$IndexerModel$.prototype.getIndexablePrefixes = function $$oj$$45$$$$IndexerModel$$$getIndexablePrefixes$() {
  };
  $oj$$45$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.getIndexablePrefixes", {getIndexablePrefixes:$oj$$45$$.$IndexerModel$.prototype.getIndexablePrefixes});
  $oj$$45$$.$IndexerModel$.prototype.getPrefixes = function $$oj$$45$$$$IndexerModel$$$getPrefixes$() {
  };
  $oj$$45$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.getPrefixes", {getPrefixes:$oj$$45$$.$IndexerModel$.prototype.getPrefixes});
  $oj$$45$$.$ListViewIndexerModel$ = function $$oj$$45$$$$ListViewIndexerModel$$($listview$$) {
    this.$listview$ = $listview$$;
    this.Init();
  };
  $goog$exportPath_$$("ListViewIndexerModel", $oj$$45$$.$ListViewIndexerModel$, $oj$$45$$);
  $oj$$45$$.$Object$.$createSubclass$($oj$$45$$.$ListViewIndexerModel$, $oj$$45$$.$EventSource$, "oj.ListViewIndexerModel");
  $oj$$45$$.$ListViewIndexerModel$.prototype.getIndexablePrefixes = function $$oj$$45$$$$ListViewIndexerModel$$$getIndexablePrefixes$() {
    return this.$listview$.$ojContext$.$getTranslatedString$("indexerCharacters").split("|");
  };
  $oj$$45$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.getIndexablePrefixes", {getIndexablePrefixes:$oj$$45$$.$ListViewIndexerModel$.prototype.getIndexablePrefixes});
  $oj$$45$$.$ListViewIndexerModel$.prototype.getPrefixes = function $$oj$$45$$$$ListViewIndexerModel$$$getPrefixes$() {
    null == this.$availablePrefixes$ && (this.$availablePrefixes$ = this.$_getAvailablePrefixes$());
    return this.$availablePrefixes$;
  };
  $oj$$45$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.getPrefixes", {getPrefixes:$oj$$45$$.$ListViewIndexerModel$.prototype.getPrefixes});
  $oj$$45$$.$ListViewIndexerModel$.prototype.$_getAvailablePrefixes$ = function $$oj$$45$$$$ListViewIndexerModel$$$$_getAvailablePrefixes$$() {
    var $results$$9$$ = [], $groupItems$$5$$ = this.$listview$.$_getGroupItemsCache$();
    if (null != $groupItems$$5$$) {
      for (var $prefixes$$1$$ = this.getIndexablePrefixes(), $i$$373$$ = 0;$i$$373$$ < $prefixes$$1$$.length;$i$$373$$++) {
        var $prefix$$19$$ = $prefixes$$1$$[$i$$373$$];
        $groupItems$$5$$.each(function() {
          if (0 == $$$$42$$(this).text().indexOf($prefix$$19$$)) {
            return $results$$9$$.push($prefix$$19$$), !1;
          }
        });
      }
    }
    return $results$$9$$;
  };
  $oj$$45$$.$ListViewIndexerModel$.prototype.setPrefix = function $$oj$$45$$$$ListViewIndexerModel$$$setPrefix$($prefix$$20$$) {
    return $prefix$$20$$ == $oj$$45$$.$IndexerModel$.PREFIX_OTHERS ? this.$_setOtherPrefix$() : this.$_setPrefix$($prefix$$20$$);
  };
  $oj$$45$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.setPrefix", {setPrefix:$oj$$45$$.$ListViewIndexerModel$.prototype.setPrefix});
  $oj$$45$$.$ListViewIndexerModel$.prototype.$_setOtherPrefix$ = function $$oj$$45$$$$ListViewIndexerModel$$$$_setOtherPrefix$$() {
    var $prefixes$$2$$, $self$$191$$ = this, $match$$24$$, $groupItems$$6$$, $content$$26$$, $i$$374$$, $prefix$$21$$;
    $prefixes$$2$$ = this.getIndexablePrefixes();
    return new Promise(function($resolve$$59$$) {
      $match$$24$$ = null;
      $groupItems$$6$$ = $self$$191$$.$listview$.$_getGroupItemsCache$();
      null != $groupItems$$6$$ && $groupItems$$6$$.each(function() {
        $content$$26$$ = $$$$42$$(this).text();
        for ($i$$374$$ = 0;$i$$374$$ < $prefixes$$2$$.length;$i$$374$$++) {
          if ($prefix$$21$$ = $prefixes$$2$$[$i$$374$$], 0 == $content$$26$$.indexOf($prefix$$21$$)) {
            return!0;
          }
        }
        $match$$24$$ = this;
        return!1;
      });
      $match$$24$$ ? ($self$$191$$.$listview$.$_scrollToGroupHeader$($match$$24$$), $resolve$$59$$($oj$$45$$.$IndexerModel$.PREFIX_OTHERS)) : $resolve$$59$$(null);
    });
  };
  $oj$$45$$.$ListViewIndexerModel$.prototype.$_setPrefix$ = function $$oj$$45$$$$ListViewIndexerModel$$$$_setPrefix$$($prefix$$22$$) {
    var $prefixes$$3$$, $index$$226$$, $self$$192$$ = this, $match$$25$$ = null, $groupHeader$$2$$;
    $prefixes$$3$$ = this.getIndexablePrefixes();
    $index$$226$$ = $prefixes$$3$$.indexOf($prefix$$22$$);
    return new Promise(function($resolve$$60$$) {
      if (-1 == $index$$226$$) {
        $resolve$$60$$(null);
      } else {
        for (;$index$$226$$ < $prefixes$$3$$.length;) {
          $prefix$$22$$ = $prefixes$$3$$[$index$$226$$];
          $groupHeader$$2$$ = $self$$192$$.$_findGroupHeader$($prefix$$22$$);
          if (null != $groupHeader$$2$$) {
            $self$$192$$.$listview$.$_scrollToGroupHeader$($groupHeader$$2$$);
            $match$$25$$ = $prefix$$22$$;
            break;
          }
          $index$$226$$++;
        }
        $resolve$$60$$($match$$25$$);
      }
    });
  };
  $oj$$45$$.$ListViewIndexerModel$.prototype.$_findGroupHeader$ = function $$oj$$45$$$$ListViewIndexerModel$$$$_findGroupHeader$$($prefix$$23$$) {
    var $match$$26$$, $groupItems$$7$$, $content$$27$$;
    $groupItems$$7$$ = this.$listview$.$_getGroupItemsCache$();
    null != $groupItems$$7$$ && $groupItems$$7$$.each(function() {
      $content$$27$$ = $$$$42$$(this).text();
      if (0 == $content$$27$$.indexOf($prefix$$23$$)) {
        return $match$$26$$ = this, !1;
      }
    });
    return $match$$26$$;
  };
  $oj$$45$$.$ListViewIndexerModel$.prototype.$fireChangeEvent$ = function $$oj$$45$$$$ListViewIndexerModel$$$$fireChangeEvent$$() {
    this.$availablePrefixes$ = null;
    this.handleEvent($oj$$45$$.$IndexerModel$.$EventType$.CHANGE, {});
  };
  (function() {
    $oj$$45$$.$__registerWidget$("oj.ojIndexer", $$$$42$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", version:"1.2", widgetEventPrefix:"oj", options:{data:null}, _ComponentCreate:function() {
      this._super();
      this.$_setup$();
    }, $_AfterCreate$:function() {
      var $container$$28$$;
      this._super();
      this.$_createIndexerContent$();
      this.$_setAriaProperties$();
      this.$_createInstructionText$();
      $container$$28$$ = this.$_getIndexerContainer$()[0];
      this.$_registerResizeListener$($container$$28$$);
      this.$_registerTouchHandler$($container$$28$$);
    }, _destroy:function() {
      var $container$$29$$, $model$$92$$;
      this._super();
      this.$_unsetAriaProperties$();
      this.element.removeClass("oj-component-initnode");
      $container$$29$$ = this.$_getIndexerContainer$()[0];
      this.$_unregisterResizeListener$($container$$29$$);
      this.$_unregisterTouchHandler$($container$$29$$);
      $model$$92$$ = this.$_getIndexerModel$();
      null != $model$$92$$ && this.$m_indexerModelListener$ && $model$$92$$.off($oj$$45$$.$IndexerModel$.$EventType$.$CHANGE$, this.$m_indexerModelListener$);
      $oj$$45$$.$DomUtils$.unwrap(this.element, $$$$42$$($container$$29$$));
    }, _setOption:function($key$$161$$, $value$$286$$) {
      this._superApply(arguments);
      "data" == $key$$161$$ && this.refresh();
    }, widget:function() {
      return this.$_getIndexerContainer$();
    }, refresh:function() {
      this._super();
      this.element.empty();
      this.$_createIndexerContent$();
      this.$_setAriaProperties$();
      this.$m_current$ = null;
    }, getNodeBySubId:function($locator$$41_prefix$$24$$) {
      var $prefixes$$4$$, $i$$375$$, $j$$44$$, $node$$99$$, $includes$$;
      if (null == $locator$$41_prefix$$24$$) {
        return this.element ? this.element[0] : null;
      }
      if ("oj-indexer-prefix" === $locator$$41_prefix$$24$$.subId) {
        for ($locator$$41_prefix$$24$$ = $locator$$41_prefix$$24$$.prefix, $prefixes$$4$$ = this.element.children("li"), $i$$375$$ = 0;$i$$375$$ < $prefixes$$4$$.length;$i$$375$$++) {
          $node$$99$$ = $prefixes$$4$$.get($i$$375$$);
          if ($$$$42$$($node$$99$$).attr("data-range") == $locator$$41_prefix$$24$$) {
            return $node$$99$$;
          }
          $includes$$ = $$$$42$$($node$$99$$).attr("data-includes");
          if (null != $includes$$) {
            for ($includes$$ = $includes$$.split("|"), $j$$44$$ = 0;$j$$44$$ < $includes$$.length;$j$$44$$++) {
              if ($includes$$[$j$$44$$] == $locator$$41_prefix$$24$$) {
                return $node$$99$$;
              }
            }
          }
        }
      }
      return null;
    }, getSubIdByNode:function($node$$100_prefix$$25$$) {
      return null != $node$$100_prefix$$25$$ && ($node$$100_prefix$$25$$ = $$$$42$$($node$$100_prefix$$25$$).attr("data-range"), null != $node$$100_prefix$$25$$) ? {subId:"oj-indexer-prefix", prefix:$node$$100_prefix$$25$$} : null;
    }, $_setAriaProperties$:function() {
      this.element.attr("role", "slider").attr("aria-orientation", "vertical").attr("aria-describedby", this.element.prop("id") + ":desc").attr("aria-valuemin", 0).attr("aria-valuemax", Math.max(0, this.element.children().length - 1));
    }, $_unsetAriaProperties$:function() {
      this.element.removeAttr("role").removeAttr("aria-orientation").removeAttr("aria-describedby").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuetext");
    }, $_createInstructionText$:function() {
      var $key$$162$$, $text$$18$$;
      $key$$162$$ = $oj$$45$$.$DomUtils$.$isTouchSupported$() ? "ariaTouchInstructionText" : "ariaKeyboardInstructionText";
      $text$$18$$ = $$$$42$$(document.createElement("div"));
      $text$$18$$.prop("id", this.element.prop("id") + ":desc");
      $text$$18$$.addClass("oj-helper-hidden-accessible").text(this.$getTranslatedString$($key$$162$$));
      this.$_getIndexerContainer$().append($text$$18$$);
    }, $_getIndexerContainer$:function() {
      null == this.$m_container$ && (this.$m_container$ = this.$_createIndexerContainer$());
      return this.$m_container$;
    }, $_createIndexerContainer$:function() {
      var $container$$30$$ = $$$$42$$(document.createElement("div"));
      $container$$30$$.addClass("oj-indexer oj-component");
      this.element.parent()[0].replaceChild($container$$30$$[0], this.element[0]);
      $container$$30$$.prepend(this.element);
      return $container$$30$$;
    }, $_createIndexerContent$:function() {
      var $model$$93_prefixOthers$$, $root$$13$$, $last$$5_others_prefixes$$5$$, $availablePrefixes$$, $height$$28_max$$8_skip$$2$$, $first$$8_i$$376_itemHeight$$, $item$$115_prefix$$26$$;
      $model$$93_prefixOthers$$ = this.$_getIndexerModel$();
      if (null != $model$$93_prefixOthers$$) {
        $root$$13$$ = this.element;
        $last$$5_others_prefixes$$5$$ = $model$$93_prefixOthers$$.getIndexablePrefixes();
        $availablePrefixes$$ = $model$$93_prefixOthers$$.getPrefixes();
        $model$$93_prefixOthers$$ = this.$getTranslatedString$("indexerOthers");
        $height$$28_max$$8_skip$$2$$ = this.widget().outerHeight();
        $first$$8_i$$376_itemHeight$$ = this.$_createItem$($last$$5_others_prefixes$$5$$[0], $availablePrefixes$$);
        $root$$13$$.append($first$$8_i$$376_itemHeight$$);
        $first$$8_i$$376_itemHeight$$ = $first$$8_i$$376_itemHeight$$.outerHeight();
        $height$$28_max$$8_skip$$2$$ = Math.floor($height$$28_max$$8_skip$$2$$ / $first$$8_i$$376_itemHeight$$);
        this.$_getIndexerContainer$().removeClass("oj-indexer-abbr");
        $height$$28_max$$8_skip$$2$$ = Math.floor(($last$$5_others_prefixes$$5$$.length + 1) / $height$$28_max$$8_skip$$2$$) + 1;
        1 < $height$$28_max$$8_skip$$2$$ && this.$_getIndexerContainer$().addClass("oj-indexer-abbr");
        for ($first$$8_i$$376_itemHeight$$ = 1 + $height$$28_max$$8_skip$$2$$;$first$$8_i$$376_itemHeight$$ < $last$$5_others_prefixes$$5$$.length;$first$$8_i$$376_itemHeight$$ = $first$$8_i$$376_itemHeight$$ + $height$$28_max$$8_skip$$2$$ + 1) {
          1 < $height$$28_max$$8_skip$$2$$ ? ($item$$115_prefix$$26$$ = this.$_createSeparator$($last$$5_others_prefixes$$5$$, $first$$8_i$$376_itemHeight$$ - $height$$28_max$$8_skip$$2$$, $first$$8_i$$376_itemHeight$$ - 1), $root$$13$$.append($item$$115_prefix$$26$$)) : $first$$8_i$$376_itemHeight$$--, $item$$115_prefix$$26$$ = $last$$5_others_prefixes$$5$$[$first$$8_i$$376_itemHeight$$], $item$$115_prefix$$26$$ = this.$_createItem$($item$$115_prefix$$26$$, $availablePrefixes$$), $root$$13$$.append($item$$115_prefix$$26$$)
          ;
        }
        $last$$5_others_prefixes$$5$$ = this.$_createItem$($last$$5_others_prefixes$$5$$[$last$$5_others_prefixes$$5$$.length - 1], $availablePrefixes$$);
        $root$$13$$.append($last$$5_others_prefixes$$5$$);
        $last$$5_others_prefixes$$5$$ = this.$_createItem$($model$$93_prefixOthers$$);
        $last$$5_others_prefixes$$5$$.attr("data-others", "true");
        $root$$13$$.append($last$$5_others_prefixes$$5$$);
      }
    }, $_createItem$:function($prefix$$27$$, $availablePrefixes$$1$$) {
      var $item$$116$$ = $$$$42$$(document.createElement("li"));
      $item$$116$$.attr("data-range", $prefix$$27$$).text($prefix$$27$$);
      null != $availablePrefixes$$1$$ && -1 == $availablePrefixes$$1$$.indexOf($prefix$$27$$) && $item$$116$$.addClass("oj-disabled");
      return $item$$116$$;
    }, $_createSeparator$:function($indexString$$, $from$$3_i$$377$$, $to$$3$$) {
      var $item$$117$$, $includes$$1$$ = "";
      $item$$117$$ = $$$$42$$(document.createElement("li"));
      for ($item$$117$$.addClass("oj-indexer-ellipsis").attr("data-range", $indexString$$[$from$$3_i$$377$$ + Math.round(($to$$3$$ - $from$$3_i$$377$$) / 2)]);$from$$3_i$$377$$ < $to$$3$$;$from$$3_i$$377$$++) {
        $includes$$1$$ = $includes$$1$$ + $indexString$$[$from$$3_i$$377$$] + "|";
      }
      $includes$$1$$ += $indexString$$[$to$$3$$];
      $item$$117$$.attr("data-includes", $includes$$1$$);
      return $item$$117$$;
    }, $_setup$:function() {
      var $self$$193$$ = this, $model$$94$$;
      this.element.uniqueId().addClass("oj-component-initnode").attr("tabIndex", 0);
      this._on(this.element, {click:function($event$$491$$) {
        $self$$193$$.$_handleClick$($event$$491$$);
      }, keydown:function($event$$492$$) {
        $self$$193$$.$_handleKeyDown$($event$$492$$);
      }, focus:function($event$$493$$) {
        $self$$193$$.$_handleFocus$($event$$493$$);
      }, blur:function($event$$494$$) {
        $self$$193$$.$_handleBlur$($event$$494$$);
      }});
      $model$$94$$ = this.$_getIndexerModel$();
      null != $model$$94$$ && (this.$m_indexerModelListener$ = function $this$$m_indexerModelListener$$() {
        $self$$193$$.refresh();
      }, $model$$94$$.on($oj$$45$$.$IndexerModel$.$EventType$.$CHANGE$, this.$m_indexerModelListener$));
    }, $_handleClick$:function($event$$495_target$$90$$) {
      0 === $event$$495_target$$90$$.button && ($event$$495_target$$90$$ = $$$$42$$($event$$495_target$$90$$.target), this.$_setCurrent$($event$$495_target$$90$$));
    }, $_handleFocus$:function() {
      this.$_getIndexerContainer$().addClass("oj-focus-ancestor");
      null == this.$m_current$ && this.$_setFocus$(this.element.children("li").first());
    }, $_handleBlur$:function() {
      this.$_getIndexerContainer$().removeClass("oj-focus-ancestor");
    }, $_handleKeyDown$:function($event$$498$$) {
      var $next$$6$$, $processed$$7$$ = !1;
      switch($event$$498$$.keyCode) {
        case 38:
          $next$$6$$ = this.$m_current$.prev();
          break;
        case 40:
          $next$$6$$ = this.$m_current$.next();
          break;
        case 13:
          this.$_setCurrent$(this.$m_current$), $processed$$7$$ = !0;
      }
      null != $next$$6$$ && 0 < $next$$6$$.length && ($processed$$7$$ = !0, this.$_setFocus$($next$$6$$));
      $processed$$7$$ && $event$$498$$.preventDefault();
    }, $_setFocus$:function($item$$118$$) {
      null != this.$m_current$ && this.$m_current$.removeClass("oj-focus");
      $item$$118$$.addClass("oj-focus");
      this.$_updateAriaProperties$($item$$118$$);
      this.$m_current$ = $item$$118$$;
    }, $_getIndexerModel$:function() {
      var $model$$95$$ = this.option("data");
      if (null != $model$$95$$ && (void 0 == $model$$95$$.setPrefix || void 0 == $model$$95$$.getIndexablePrefixes || void 0 == $model$$95$$.getPrefixes)) {
        throw "Invalid IndexerModel";
      }
      return $model$$95$$;
    }, $_setCurrent$:function($item$$119$$) {
      var $prefix$$28$$ = $item$$119$$.attr("data-range");
      $item$$119$$.attr("data-others") && ($prefix$$28$$ = $oj$$45$$.$IndexerModel$.PREFIX_OTHERS);
      this.$_setCurrentPrefix$($prefix$$28$$);
    }, $_setCurrentPrefix$:function($prefix$$29$$) {
      var $self$$194$$ = this, $item$$120$$;
      this.$_getIndexerModel$().setPrefix($prefix$$29$$).then(function($val$$54$$) {
        null != $val$$54$$ && ($item$$120$$ = $self$$194$$.$_findItem$($val$$54$$), null != $item$$120$$ && $self$$194$$.$_setFocus$($item$$120$$));
      });
    }, $_updateAriaProperties$:function($item$$121$$) {
      var $includes$$2_val$$55$$, $valueText$$ = "";
      $includes$$2_val$$55$$ = $item$$121$$.attr("data-includes");
      null != $includes$$2_val$$55$$ ? ($includes$$2_val$$55$$ = $includes$$2_val$$55$$.split("|"), 0 < $includes$$2_val$$55$$.length && ($valueText$$ = this.$getTranslatedString$("ariaInBetweenText", {first:$includes$$2_val$$55$$[0], second:$includes$$2_val$$55$$[$includes$$2_val$$55$$.length - 1]}))) : ($includes$$2_val$$55$$ = $item$$121$$.attr("data-range"), $valueText$$ = $includes$$2_val$$55$$ === $oj$$45$$.$IndexerModel$.PREFIX_OTHERS ? this.$getTranslatedString$("ariaOthersLabel") : $includes$$2_val$$55$$);
      $item$$121$$.hasClass("oj-disabled") && ($valueText$$ = $valueText$$ + ". " + this.$getTranslatedString$("ariaDisabledLabel"));
      this.element.attr("aria-valuetext", $valueText$$);
      this.element.attr("aria-valuenow", $item$$121$$.index());
    }, $_findItem$:function($prefix$$30$$) {
      var $children$$11$$, $i$$378$$, $item$$122$$, $value$$287$$, $includes$$3$$;
      $children$$11$$ = this.element.children();
      for ($i$$378$$ = 0;$i$$378$$ < $children$$11$$.length;$i$$378$$++) {
        if ($item$$122$$ = $children$$11$$.get($i$$378$$), $value$$287$$ = $$$$42$$($item$$122$$).attr("data-range"), $includes$$3$$ = $$$$42$$($item$$122$$).attr("data-includes"), null != $value$$287$$ && $value$$287$$ == $prefix$$30$$ || null != $includes$$3$$ && -1 < $includes$$3$$.indexOf($prefix$$30$$)) {
          return $$$$42$$($item$$122$$);
        }
      }
      return null;
    }, $_unregisterResizeListener$:function($element$$143$$) {
      $element$$143$$ && this.$_resizeHandler$ && $oj$$45$$.$DomUtils$.$removeResizeListener$($element$$143$$, this.$_resizeHandler$);
    }, $_registerResizeListener$:function($element$$144$$) {
      $element$$144$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$45$$.$DomUtils$.$addResizeListener$($element$$144$$, this.$_resizeHandler$));
    }, $_unregisterTouchHandler$:function($element$$145$$) {
      $$$$42$$($element$$145$$).off("panstart panmove panend");
    }, $_registerTouchHandler$:function($element$$146$$) {
      var $self$$195$$ = this, $options$$347$$, $target$$91$$, $x$$55$$, $y$$39$$, $currentTarget$$, $currentPrefix$$, $currentY$$, $previousY$$, $delta$$6$$, $range$$19$$, $index$$228$$, $prefix$$31$$;
      $options$$347$$ = {recognizers:[[$Hammer$$3$$.Pan, {direction:$Hammer$$3$$.DIRECTION_VERTICAL}]]};
      $$$$42$$($element$$146$$).$ojHammer$($options$$347$$).on("panstart", function($event$$499$$) {
        $target$$91$$ = $event$$499$$.gesture.target;
        $x$$55$$ = $self$$195$$.element[0].getBoundingClientRect().left + 5;
        $y$$39$$ = $target$$91$$.getBoundingClientRect().top;
        $self$$195$$.$_setCurrent$($$$$42$$($target$$91$$));
        $currentTarget$$ = $target$$91$$;
        $currentPrefix$$ = $target$$91$$.getAttribute("data-range");
        $currentY$$ = $y$$39$$;
      }).on("panmove", function($event$$500$$) {
        $previousY$$ = $currentY$$;
        $currentY$$ = $y$$39$$ + $event$$500$$.gesture.deltaY;
        $target$$91$$ = document.elementFromPoint($x$$55$$, $currentY$$);
        null != $target$$91$$ && ($delta$$6$$ = $currentY$$ - $previousY$$, $currentTarget$$ == $target$$91$$ ? ($range$$19$$ = $target$$91$$.getAttribute("data-includes"), null != $range$$19$$ && ($range$$19$$ = $range$$19$$.split("|"), $index$$228$$ = $range$$19$$.indexOf($currentPrefix$$), $prefix$$31$$ = null, 0 < $delta$$6$$ && $index$$228$$ < $range$$19$$.length - 1 ? $prefix$$31$$ = $range$$19$$[$index$$228$$ + 1] : 0 > $delta$$6$$ && 0 < $index$$228$$ && ($prefix$$31$$ = $range$$19$$[$index$$228$$ - 
        1]), null != $prefix$$31$$ && ($currentPrefix$$ = $prefix$$31$$, $self$$195$$.$_setCurrentPrefix$($prefix$$31$$)))) : $target$$91$$.hasAttribute("data-range") && ($range$$19$$ = $target$$91$$.getAttribute("data-includes"), $prefix$$31$$ = null, null != $range$$19$$ && (0 < $delta$$6$$ && $target$$91$$ == $currentTarget$$.nextElementSibling ? $prefix$$31$$ = $range$$19$$[0] : 0 > $delta$$6$$ && $target$$91$$ == $currentTarget$$.previousElementSibling && ($prefix$$31$$ = $range$$19$$[$range$$19$$.length - 
        1])), null == $prefix$$31$$ && ($prefix$$31$$ = $target$$91$$.getAttribute("data-range")), $currentTarget$$ = $target$$91$$, $currentPrefix$$ = $prefix$$31$$, $self$$195$$.$_setCurrentPrefix$($currentPrefix$$)));
      }).on("panend", function() {
        $prefix$$31$$ = $currentY$$ = $currentPrefix$$ = $currentTarget$$ = null;
      });
    }, $_handleResize$:function($width$$30$$, $height$$29$$) {
      0 < $width$$30$$ && 0 < $height$$29$$ && this.refresh();
    }});
  })();
});
