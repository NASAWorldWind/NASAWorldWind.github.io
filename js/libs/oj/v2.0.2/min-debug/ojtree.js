/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojdnd"], function($oj$$79$$, $$$$72$$) {
  function $TreeUtils$$() {
  }
  (function() {
    function $_addKeyFilter$$($obj$$61$$) {
      $_aKeyHandlerStack$$.push($obj$$61$$);
      $$$$72$$($obj$$61$$.$_selector$).keydown($_KeyFilterHandler$$);
    }
    function $_KeyFilterHandler$$($e$$118$$) {
      var $s$$10$$ = "";
      $oj$$79$$.$DomUtils$.$isMetaKeyPressed$($e$$118$$) ? $s$$10$$ += "ctrl+" : $e$$118$$.shiftKey && ($s$$10$$ += "shift+");
      var $key$$187$$ = $e$$118$$.which;
      switch($key$$187$$) {
        case 32:
          $s$$10$$ += "space";
          break;
        case 37:
          $s$$10$$ += "left";
          break;
        case 38:
          $s$$10$$ += "up";
          break;
        case 39:
          $s$$10$$ += "right";
          break;
        case 40:
          $s$$10$$ += "down";
          break;
        case 46:
          $s$$10$$ += "del";
          break;
        case 33:
          $s$$10$$ += "pgup";
          break;
        case 34:
          $s$$10$$ += "pgdn";
          break;
        case 35:
          $s$$10$$ += "end";
          break;
        case 36:
          $s$$10$$ += "home";
          break;
        case 56:
          $s$$10$$ = "*";
          break;
        case 113:
        ;
        case 121:
          $s$$10$$ += "f" + (1 - (112 - $key$$187$$));
      }
      if (0 === $s$$10$$.length || "shift+" == $s$$10$$ || "ctrl+" == $s$$10$$) {
        return!0;
      }
      var $retHandler$$ = null;
      $$$$72$$.each($_aKeyHandlerStack$$, function($i$$460$$, $obj$$62$$) {
        if ($obj$$62$$.$_this$.$_data$.ui.$focused$) {
          return $obj$$62$$.$_this$.$_data$.ui.$touchEvent$ = !1, "shift+f10" == $s$$10$$ ? $obj$$62$$.$_this$.$_data$.menu.$activenode$ = $obj$$62$$.$_this$.$_data$.ui.$hovered$ : $obj$$62$$.$_handler$[$s$$10$$] && ($e$$118$$.preventDefault(), $retHandler$$ = $obj$$62$$.$_handler$[$s$$10$$].call($obj$$62$$.$_this$, $e$$118$$)), !1;
        }
      });
      if (null != $retHandler$$) {
        return $retHandler$$;
      }
    }
    function $_removeKeyFilter$$($selector$$47$$) {
      $$$$72$$.each($_aKeyHandlerStack$$, function($i$$461$$) {
        if ($_aKeyHandlerStack$$[$i$$461$$].$_selector$ === $selector$$47$$) {
          return $$$$72$$($selector$$47$$).off("keydown"), $_aKeyHandlerStack$$[$i$$461$$] = null, $_aKeyHandlerStack$$.splice($i$$461$$, 1), !1;
        }
      });
    }
    function $isPureObjEmpty$$($o$$13$$) {
      var $ret$$63$$ = !0, $prop$$76$$;
      for ($prop$$76$$ in $o$$13$$) {
        if ($o$$13$$.hasOwnProperty($prop$$76$$)) {
          $ret$$63$$ = !1;
          break;
        }
      }
      return $ret$$63$$;
    }
    function $_addSheet$$($opts$$38$$) {
      var $tmp$$3$$ = !1, $isNew$$7$$ = !0;
      $opts$$38$$.$str$ && ($opts$$38$$.title && ($tmp$$3$$ = $$$$72$$("style[id\x3d'" + $opts$$38$$.title + "-stylesheet']")[0]), $tmp$$3$$ ? $isNew$$7$$ = !1 : ($tmp$$3$$ = document.createElement("style"), $tmp$$3$$.setAttribute("type", "text/css"), $opts$$38$$.title && $tmp$$3$$.setAttribute("id", $opts$$38$$.title + "-stylesheet")), $tmp$$3$$.styleSheet ? $isNew$$7$$ ? (document.getElementsByTagName("head")[0].appendChild($tmp$$3$$), $tmp$$3$$.styleSheet.cssText = $opts$$38$$.$str$) : $tmp$$3$$.styleSheet.cssText = 
      $tmp$$3$$.styleSheet.cssText + " " + $opts$$38$$.$str$ : ($tmp$$3$$.appendChild(document.createTextNode($opts$$38$$.$str$)), document.getElementsByTagName("head")[0].appendChild($tmp$$3$$)));
    }
    var $_arMenuCmdMap$$1$$ = {cut:"ojtreecut", copy:"ojtreecopy", paste:"ojtreepaste", remove:"ojtreeremove", rename:"ojtreerename"}, $_arMenuKeyMap$$1$$ = {cut:"labelCut", copy:"labelCopy", paste:"labelPaste", remove:"labelRemove", rename:"labelRename"}, $scrollbar_width$$, $e1$$2$$, $e2$$2$$;
    $$$$72$$(function() {
      /msie/.test(navigator.userAgent.toLowerCase()) ? ($e1$$2$$ = $$$$72$$('\x3ctextarea cols\x3d"10" rows\x3d"2"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $e2$$2$$ = $$$$72$$('\x3ctextarea cols\x3d"10" rows\x3d"2" style\x3d"overflow: hidden;"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $scrollbar_width$$ = $e1$$2$$.width() - $e2$$2$$.width(), $e1$$2$$.add($e2$$2$$).remove()) : ($e1$$2$$ = $$$$72$$("\x3cdiv /\x3e").css({width:100, 
      height:100, overflow:"auto", position:"absolute", top:-1E3, left:0}).prependTo("body").append("\x3cdiv /\x3e").find("div").css({width:"100%", height:200}), $scrollbar_width$$ = 100 - $e1$$2$$.width(), $e1$$2$$.parent().remove());
    });
    var $_aKeyHandlerStack$$ = [], $_instance$$ = -1;
    $oj$$79$$.$__registerWidget$("oj.ojTree", $$$$72$$.oj.baseComponent, {widgetEventPrefix:"oj", defaultElement:"\x3cdiv\x3e", options:{dnd:{reorder:"disable"}, expandParents:!1, initExpanded:null, $initLoaded$:[], selection:[], selectionMode:"single", selectedParentCollapse:!1, selectedParentExpand:!0, selectPrevOnDelete:!1, data:null, emptyText:null, icons:!0, types:null, before:null, collapse:null, create:null, collapseAll:null, cut:null, dehover:null, remove:null, destroy:null, expand:null, 
    expandAll:null, hover:null, loaded:null, move:null, optionChange:null, paste:null, refresh:null, rename:null}, collapse:function($node$$132$$, $skipAnim$$) {
      var $dur$$ = ($skipAnim$$ = $skipAnim$$ || !1) ? 0 : this.$_animDuration$;
      $node$$132$$ = this.$_getNode$($node$$132$$);
      if (!$node$$132$$.length || -1 === $node$$132$$ || !$node$$132$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) || this.$_data$.$core$.locked || $node$$132$$.hasClass($TreeUtils$$.$_OJ_DISABLED$)) {
        return!1;
      }
      var $rslt$$ = this.$_emitEvent$({obj:$node$$132$$, func:"collapse"}, "before");
      if ("boolean" != typeof $rslt$$ || $rslt$$) {
        $node$$132$$.removeClass($TreeUtils$$.$_OJ_EXPANDED$).addClass($TreeUtils$$.$_OJ_COLLAPSED$).attr("aria-expanded", "false"), $$$$72$$($node$$132$$.children()[0]).removeClass($TreeUtils$$.$_OJ_SELECTED$).addClass("oj-default"), !$skipAnim$$ && $dur$$ ? this.$_slide$($node$$132$$, !0) : this.$_transitionEnd$($$$$72$$($node$$132$$.children("UL")[0]), $node$$132$$);
      }
    }, $_slide$:function($node$$133$$, $bSlideUp$$) {
      var $$ul$$1$$, $hNow$$, $hFinal$$;
      $$ul$$1$$ = $$$$72$$($node$$133$$.children("ul"));
      this.$_isSafari$ ? $$ul$$1$$[0].addEventListener("webkitTransitionEnd", this.$_proxyTransitionEndHandler$) : $$ul$$1$$[0].addEventListener("transitionend", this.$_proxyTransitionEndHandler$);
      $bSlideUp$$ ? ($hNow$$ = $$ul$$1$$[0].offsetHeight, $hFinal$$ = 0) : ($hNow$$ = 0, $hFinal$$ = this.$_getElemHeight$($$ul$$1$$[0]));
      $$ul$$1$$.css("max-height", $hNow$$ + "px");
      $$ul$$1$$.css("overflow", "hidden");
      $bSlideUp$$ || ($$ul$$1$$[0].style.display = "block");
      setTimeout(function() {
        $$ul$$1$$.addClass("oj-tree-transition");
        $$ul$$1$$.css("max-height", $hFinal$$ + "px");
      }, 20);
    }, $_getElemHeight$:function($el$$17$$) {
      var $parent$$53$$, $nextSib$$, $h$$8$$, $disp$$, $div$$10$$ = $$$$72$$("\x3cdiv style\x3d'position: absolute'\x3e");
      $parent$$53$$ = $el$$17$$.parentNode;
      $nextSib$$ = $el$$17$$.nextSibling;
      $parent$$53$$.removeChild($el$$17$$);
      $disp$$ = $el$$17$$.style.display;
      $el$$17$$.style.display = "block";
      $div$$10$$.append($el$$17$$);
      this.$_$container$[0].appendChild($div$$10$$[0]);
      $h$$8$$ = $el$$17$$.offsetHeight || $el$$17$$.scrollHeight;
      $el$$17$$.style.display = $disp$$;
      this.$_$container$[0].removeChild($div$$10$$[0]);
      $div$$10$$[0].removeChild($el$$17$$);
      $nextSib$$ ? $parent$$53$$.insertBefore($el$$17$$, $nextSib$$) : $parent$$53$$.appendChild($el$$17$$);
      return $h$$8$$ + 10;
    }, $_transitionEndHandler$:function($$ul$$2_e$$119$$) {
      $$ul$$2_e$$119$$ = $$$$72$$($$ul$$2_e$$119$$.target);
      var $node$$134$$ = $$ul$$2_e$$119$$.closest("li");
      this.$_isSafari$ ? $$ul$$2_e$$119$$[0].removeEventListener("webkitTransitionEnd", this.$_proxyTransitionEndHandler$) : $$ul$$2_e$$119$$[0].removeEventListener("transitionend", this.$_proxyTransitionEndHandler$);
      $$ul$$2_e$$119$$.removeClass("oj-tree-transition");
      this.$_transitionEnd$($$ul$$2_e$$119$$, $node$$134$$);
    }, $_transitionEnd$:function($$ul$$3$$, $node$$135$$) {
      $node$$135$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? ($$ul$$3$$[0].style.display = "none", $$ul$$3$$.css("max-height", ""), this.$_emitEvent$({obj:$node$$135$$}, "collapse"), this.after_close($node$$135$$)) : ($$ul$$3$$[0].style.display = "block", $$ul$$3$$.css("max-height", ""), this.$_emitEvent$({obj:$node$$135$$}, "expand"));
    }, collapseAll:function($node$$136$$, $anim$$) {
      var $origTarg$$ = $node$$136$$ ? $node$$136$$ : -1, $_this$$1$$ = this;
      if (!this.$_data$.$core$.locked && (($node$$136$$ = $node$$136$$ ? this.$_getNode$($node$$136$$) : this.$_$container$) && -1 !== $origTarg$$ && ($origTarg$$ = $node$$136$$), $node$$136$$ && -1 !== $origTarg$$ || ($node$$136$$ = this.$_$container_ul$), !$node$$136$$.hasClass($TreeUtils$$.$_OJ_DISABLED$))) {
        var $subject$$;
        -1 !== $origTarg$$ && this.isExpanded($node$$136$$) && ($subject$$ = $node$$136$$[0]);
        var $objs$$ = $node$$136$$.find("li.oj-expanded");
        $objs$$.length && $objs$$.each(function() {
          $_this$$1$$.collapse(this, !$anim$$);
        });
        $subject$$ && (this.collapse($subject$$, !$anim$$), $objs$$.splice(0, 0, $subject$$));
        $objs$$.length && this.$_emitEvent$({obj:$objs$$, targ:$origTarg$$}, "collapseAll");
      }
    }, expand:function($node$$137$$, $skipAnim$$1$$) {
      this.$_expand$($node$$137$$, !1, $skipAnim$$1$$);
    }, expanded:function($nodes$$7$$, $skipAnim$$2$$) {
      var $exlr$$, $exlen$$, $_this$$2$$ = this;
      if ($nodes$$7$$ && "array" === $$$$72$$.type($nodes$$7$$)) {
        if (this.$_data$.$core$.locked) {
          return null;
        }
        $exlen$$ = $nodes$$7$$.length;
        $$$$72$$.each($nodes$$7$$, function($i$$462$$, $val$$70$$) {
          $_this$$2$$.$_expand$($val$$70$$, !1, $skipAnim$$2$$);
        });
        return null;
      }
      $nodes$$7$$ = this.$_$container_ul$.find("li.oj-expanded");
      $exlen$$ = $nodes$$7$$.length;
      $exlr$$ = [];
      for (var $n$$28$$ = 0;$n$$28$$ < $exlen$$;$n$$28$$++) {
        $exlr$$.push($nodes$$7$$[$n$$28$$]);
      }
      return $$$$72$$($exlr$$);
    }, expandAll:function($node$$138$$, $anim$$1$$) {
      this.$_expandAll$($node$$138$$, $anim$$1$$);
    }, toggleExpand:function($node$$139$$, $skipAnim$$3$$) {
      if (($node$$139$$ = this.$_getNode$($node$$139$$)) && $node$$139$$.length && -1 !== $node$$139$$ && !$node$$139$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
        if ($node$$139$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$)) {
          return this.expand($node$$139$$, $skipAnim$$3$$);
        }
        if ($node$$139$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$)) {
          return this.collapse($node$$139$$, $skipAnim$$3$$);
        }
      }
    }, deselect:function($node$$140$$) {
      var $prevSelections$$ = this.options.selection.slice(0);
      this.$_deselect$($node$$140$$);
      this.$_fireOptionChangeEvent$("selection", $prevSelections$$, null, null);
    }, deselectAll:function($context$$174$$) {
      if (!this.$_data$.$core$.locked) {
        var $prevSelections$$1$$ = this.options.selection.slice(0);
        this.$_deselectAll$($context$$174$$);
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$1$$, null, null);
      }
    }, select:function($node$$141$$) {
      this.$_select$($node$$141$$, !0);
    }, toggleSelect:function($node$$142$$) {
      $node$$142$$ = this.$_getNode$($node$$142$$);
      if (!$node$$142$$.length || $node$$142$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked) {
        return!1;
      }
      this.isSelected($node$$142$$) ? this.deselect($node$$142$$) : this.$_select$($node$$142$$, !0);
      return!0;
    }, isCollapsed:function($node$$143$$) {
      return($node$$143$$ = this.$_getNode$($node$$143$$)) && -1 !== $node$$143$$ && $node$$143$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$);
    }, isExpanded:function($node$$144$$) {
      return($node$$144$$ = this.$_getNode$($node$$144$$)) && -1 !== $node$$144$$ && $node$$144$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$);
    }, isLeaf:function($node$$145$$) {
      return this.$_isLeaf$($node$$145$$);
    }, isSelected:function($n$$29_node$$146$$) {
      $n$$29_node$$146$$ = this.$_getNode$($n$$29_node$$146$$);
      var $r$$4$$ = !1;
      $n$$29_node$$146$$ && $n$$29_node$$146$$.length && this.$_data$.ui.selected && ($r$$4$$ = 0 <= this.$_data$.ui.selected.index($n$$29_node$$146$$));
      return $r$$4$$;
    }, create:function($refnode$$, $position$$48$$, $data$$173$$) {
      var $node$$147$$, $ar$$1$$, $i$$463$$;
      $ar$$1$$ = $$$$72$$.isArray($data$$173$$);
      if (!$ar$$1$$ || 1 == $data$$173$$.length) {
        return $node$$147$$ = this.$_createNode$($refnode$$, $position$$48$$, $ar$$1$$ ? $data$$173$$[0] : $data$$173$$), this.$_getDndContext$().$_dndFinishSelection$($node$$147$$), $node$$147$$;
      }
      $ar$$1$$ = [];
      if ("before" != $position$$48$$) {
        for ($i$$463$$ = $data$$173$$.length - 1;0 <= $i$$463$$;$i$$463$$--) {
          $node$$147$$ = this.$_createNode$($refnode$$, $position$$48$$, $data$$173$$[$i$$463$$]), $ar$$1$$.unshift($node$$147$$[0]), this.$_getDndContext$().$_dndFinishSelection$($node$$147$$);
        }
      } else {
        for ($i$$463$$ = 0;$i$$463$$ < $data$$173$$.length;$i$$463$$++) {
          $node$$147$$ = this.$_createNode$($refnode$$, $position$$48$$, $data$$173$$[$i$$463$$]), $ar$$1$$.push($node$$147$$[0]), this.$_getDndContext$().$_dndFinishSelection$($node$$147$$);
        }
      }
      return $$$$72$$($ar$$1$$);
    }, remove:function($node$$148$$) {
      $node$$148$$ = this.$_getNode$($node$$148$$);
      if (!$node$$148$$.length || $node$$148$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked) {
        return!1;
      }
      var $p$$7_rslt$$1$$ = this.$_emitEvent$({obj:$node$$148$$, func:"remove"}, "before");
      if ("boolean" == typeof $p$$7_rslt$$1$$ && !$p$$7_rslt$$1$$) {
        return!1;
      }
      this.$__rollback$();
      var $p$$7_rslt$$1$$ = this.$_getParent$($node$$148$$), $prev$$3$$ = $$$$72$$([]), $t$$3$$ = this, $sib$$ = this.$_getPrev$($node$$148$$);
      $node$$148$$.each(function() {
        $prev$$3$$ = $prev$$3$$.add($t$$3$$.$_getPrev$(this));
      });
      $node$$148$$ = $node$$148$$.detach();
      -1 !== $p$$7_rslt$$1$$ && 0 === $p$$7_rslt$$1$$.find("\x3e ul \x3e li").length && $p$$7_rslt$$1$$.removeClass("oj-expanded oj-collapsed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
      this.$_cleanNode$($p$$7_rslt$$1$$);
      this.$_emitEvent$({obj:$node$$148$$, prev:$sib$$, parent:$p$$7_rslt$$1$$}, "remove");
      return $node$$148$$;
    }, getText:function($node$$149$$) {
      $node$$149$$ = this.$_getNode$($node$$149$$);
      if (!$node$$149$$.length) {
        return!1;
      }
      $node$$149$$ = $node$$149$$.children("a:eq(0)");
      $node$$149$$ = $node$$149$$.find("span:eq(0)");
      return $node$$149$$[0].textContent;
    }, rename:function($node$$150$$, $text$$20$$) {
      this.$_renameNode$($node$$150$$, $text$$20$$);
    }, hover:function($node$$151$$) {
      if (!this.$_data$.menu.$activenode$ && ($node$$151$$ = this.$_getNode$($node$$151$$), $node$$151$$.length && !$node$$151$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked && !$node$$151$$.hasClass($TreeUtils$$.$_OJ_HOVER$))) {
        var $rslt$$2$$ = this.$_emitEvent$({obj:$node$$151$$, func:"hover"}, "before");
        if ("boolean" != typeof $rslt$$2$$ || $rslt$$2$$) {
          $node$$151$$.hasClass($TreeUtils$$.$_OJ_HOVER$) || this.dehover(), this.$_data$.ui.$hovered$ = $node$$151$$.children("a").addClass($TreeUtils$$.$_OJ_HOVER$).parent(), this.$_$container_ul$.attr("aria-activedescendant", this.$_data$.ui.$hovered$.attr("id")), this.$_fix_scroll$($node$$151$$), this.$_emitEvent$({obj:$node$$151$$}, "hover");
        }
      }
    }, dehover:function() {
      if (!this.$_data$.menu.$activenode$) {
        var $obj$$63$$ = this.$_data$.ui.$hovered$, $p$$8$$;
        if ($obj$$63$$ && $obj$$63$$.length && !$obj$$63$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
          $p$$8$$ = $obj$$63$$.find("a.oj-hover");
          if (!$p$$8$$.length && ($p$$8$$ = this.$_$container_ul$.find("a.oj-hover"), !$p$$8$$.length)) {
            return;
          }
          $p$$8$$.removeClass($TreeUtils$$.$_OJ_HOVER$).parent();
          this.$_$container_ul$.removeAttr("aria-activedescendant");
          this.$_data$.ui.$hovered$ = null;
          void 0 != $obj$$63$$.attr("id") && this.$_emitEvent$({obj:$obj$$63$$}, "dehover");
        }
      }
    }, getPath:function($node$$152$$, $idMode$$) {
      var $p$$9$$ = [], $_this$$3$$ = this;
      $node$$152$$ = this.$_getNode$($node$$152$$);
      if (-1 === $node$$152$$ || !$node$$152$$ || !$node$$152$$.length) {
        return!1;
      }
      $node$$152$$.parentsUntil(".oj-tree", "li").each(function() {
        $p$$9$$.push($idMode$$ ? this.id : $_this$$3$$.getText(this));
      });
      $p$$9$$.reverse();
      $p$$9$$.push($idMode$$ ? $node$$152$$.attr("id") : this.getText($node$$152$$));
      return $p$$9$$;
    }, getRoot:function() {
      return this.$_$container$.children("ul:eq(0)");
    }, refresh:function($node$$153$$) {
      this._super();
      this.$_data$.$core$.locked || this.$_refresh$($node$$153$$ ? $node$$153$$ : -1);
    }, move:function($node$$154$$, $refnode$$1$$, $position$$49$$, $iscopy$$) {
      this.$_moveNode$($node$$154$$, $refnode$$1$$, $position$$49$$, $iscopy$$);
    }, getType:function($node$$155$$) {
      return this.$_getType$($node$$155$$);
    }, setType:function($node$$156$$, $str$$22$$) {
      return this.$_setType$($node$$156$$, $str$$22$$);
    }, getNodeBySubId:function($locator$$65$$) {
      return $locator$$65$$ ? this.$_processSubId$($locator$$65$$) : this.element ? this.element[0] : null;
    }, getSubIdByNode:function($node$$157$$) {
      return this.$_getSubIdFromNodeElem$($node$$157$$);
    }, getContextByNode:function($node$$158$$) {
      var $bNode$$, $bTree$$;
      $node$$158$$ = this.$_getNode$(null == $node$$158$$ || void 0 == $node$$158$$ ? 0 : $node$$158$$);
      $bNode$$ = -1 != $node$$158$$ && 0 < $node$$158$$.length;
      $bTree$$ = -1 == $node$$158$$;
      return $bNode$$ || $bTree$$ ? {subId:$bNode$$ ? "oj-tree-node" : "oj-tree", node:$bNode$$ ? $node$$158$$ : !1, leaf:$bNode$$ ? this.$_isLeaf$($node$$158$$) : !1} : null;
    }, getParent:function($l$$12_node$$159$$) {
      return($l$$12_node$$159$$ = this.$_getParent$($l$$12_node$$159$$)) && 0 < $l$$12_node$$159$$.length ? $l$$12_node$$159$$ : null;
    }, getPrevSibling:function($l$$13_node$$160$$) {
      return($l$$13_node$$160$$ = this.$_getPrev$($l$$13_node$$160$$, !0)) && 0 < $l$$13_node$$160$$.length ? $l$$13_node$$160$$ : null;
    }, getNextSibling:function($l$$14_node$$161$$) {
      return($l$$14_node$$161$$ = this.$_getNext$($l$$14_node$$161$$, !0)) && 0 < $l$$14_node$$161$$.length ? $l$$14_node$$161$$ : null;
    }, getChildren:function($c$$52_node$$162$$) {
      return($c$$52_node$$162$$ = ($c$$52_node$$162$$ = this.$_getChildren$($c$$52_node$$162$$ ? $c$$52_node$$162$$ : -1)) && $c$$52_node$$162$$.length ? $c$$52_node$$162$$.not("." + $TreeUtils$$.$_OJ_TEMPNODE$) : $c$$52_node$$162$$) && 0 < $c$$52_node$$162$$.length ? $c$$52_node$$162$$ : null;
    }, scrollIntoView:function($node$$163_obj$$64$$, $alignTo_toTop$$, $setActive$$) {
      $node$$163_obj$$64$$ ? ($node$$163_obj$$64$$ = $node$$163_obj$$64$$.node, $node$$163_obj$$64$$ = this.$_getNode$($node$$163_obj$$64$$)) : $node$$163_obj$$64$$ = -1;
      -1 == $node$$163_obj$$64$$ && ($node$$163_obj$$64$$ = this.$_$container$.find("\x3e ul \x3e li:first-child"));
      if ($node$$163_obj$$64$$ && $node$$163_obj$$64$$.length) {
        return $alignTo_toTop$$ = "top" == $alignTo_toTop$$, $setActive$$ && (this.$_$container_ul$.focus(), this.hover($node$$163_obj$$64$$)), $node$$163_obj$$64$$[0].scrollIntoView($alignTo_toTop$$), this;
      }
    }, _ComponentCreate:function() {
      this._super();
      this.$_index$ = this.$_newIndex$();
      this.$_elemId$ = this.element.attr("id");
      void 0 === this.$_elemId$ && (this.$_elemId$ = "oj-tree-" + this.$_getIndex$(), this.element.attr("id", this.$_elemId$));
      this.$_elemId$ = "#" + this.$_elemId$;
      this.$_$container$ = this.element;
      this.$_$container_ul$ = null;
      this.$_data$ = {};
      this.$_tds$ = null;
      this.$_isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_isTouch$ = $oj$$79$$.$DomUtils$.$isTouchSupported$();
      this.$_initTree$();
      if (this.$_animDuration$ = this.$_getAnimDuration$()) {
        this.$_isSafari$ = $oj$$79$$.$AgentUtils$.$getAgentInfo$().browser === $oj$$79$$.$AgentUtils$.$BROWSER$.$SAFARI$, this.$_proxyTransitionEndHandler$ = $$$$72$$.proxy(this.$_transitionEndHandler$, this);
      }
      this.$_start$();
    }, _destroy:function() {
      this.$_clearTree$();
      this.$_data$.html.$markup_ul$ && (this.$_$container$.append(this.$_data$.html.$markup_ul$), this.$_data$.html.$markup_div$.remove(), this.$_data$.html.$markup_div$ = !1, this.$_data$.html.$useExistingMarkup$ = !1);
      this.$_data$.$ds$.type = 0;
      this._super();
    }, _setOption:function($key$$188$$, $newval$$, $flags$$55$$) {
      var $val$$71$$;
      if ("selection" === $key$$188$$) {
        $newval$$ = "string" == typeof $newval$$ ? [$newval$$] : $newval$$ && $newval$$.length ? $newval$$ : [], this.$_data$.$core$.$suppressSelectEvent$ = !0, this.$_handleSelectionOptionChange$($newval$$), this.$_data$.$core$.$suppressSelectEvent$ = !1, $newval$$ = this.$_getSelected$();
      } else {
        if ("selectionMode" === $key$$188$$) {
          "none" === $newval$$ ? $val$$71$$ = 0 : "single" === $newval$$ ? $val$$71$$ = 1 : "multiple" === $newval$$ ? $val$$71$$ = -1 : ($val$$71$$ = 0, $newval$$ = "none"), $val$$71$$ != this.$_data$.$core$.$selectMode$ && (this.$_data$.$core$.$selectMode$ = $val$$71$$);
        } else {
          if ("icons" === $key$$188$$) {
            "boolean" == $$$$72$$.type($newval$$) && $newval$$ != this.$_data$.$themes$.icons && ((this.$_data$.$themes$.icons = $newval$$) ? this.$_showIcons$() : this.$_hideIcons$());
          } else {
            if ("contextMenu" === $key$$188$$) {
              this.$_clearMenu$(), $newval$$ && this.$_initMenu$($newval$$);
            } else {
              if ("disabled" === $key$$188$$) {
                this.$_handleDisabledChanged$($newval$$);
              } else {
                if ("data" === $key$$188$$) {
                  this._super($key$$188$$, $newval$$, $flags$$55$$);
                  this.$_initDSOpts$();
                  this.$_initDataSource$();
                  this.$_initExpandedOpts$();
                  this.$_loadNodes$();
                  return;
                }
                if ("dnd" === $key$$188$$) {
                  this._super($key$$188$$, $newval$$, $flags$$55$$);
                  this.$_getDndContext$().$handleDnDOptionChange$();
                  return;
                }
                "emptyText" == $key$$188$$ && ($newval$$ = this.$_escapeHtml$($newval$$));
              }
            }
          }
        }
      }
      this._super($key$$188$$, $newval$$, $flags$$55$$);
    }, $_CompareOptionValues$:function($option$$39$$, $value1$$10$$, $value2$$9$$) {
      return "selection" === $option$$39$$ ? this.$_compareSelectionValues$($value1$$10$$, $value2$$9$$) : this._superApply(arguments);
    }, $_compareSelectionValues$:function($value1$$11$$, $value2$$10$$) {
      var $i$$464$$, $j$$46$$, $id$$66$$, $len$$21$$, $len2$$, $bDiff$$ = !1, $bInList$$ = !1;
      $len$$21$$ = $value1$$11$$ && $value1$$11$$.length ? $value1$$11$$.length : 0;
      $len2$$ = $value2$$10$$ && $value2$$10$$.length ? $value2$$10$$.length : 0;
      if ($len$$21$$ !== $len2$$) {
        $bDiff$$ = !0;
      } else {
        if (0 == $len$$21$$ && 0 === $len2$$) {
          $bDiff$$ = !1;
        } else {
          for ($i$$464$$ = 0;$i$$464$$ < $len$$21$$;$i$$464$$++) {
            $id$$66$$ = $$$$72$$($value1$$11$$[$i$$464$$]).attr("id");
            $bInList$$ = !1;
            for ($j$$46$$ = 0;$j$$46$$ < $len2$$;$j$$46$$++) {
              if ($id$$66$$ == $$$$72$$($value2$$10$$[$j$$46$$]).attr("id")) {
                $bInList$$ = !0;
                break;
              }
            }
            if (!$bInList$$) {
              $bDiff$$ = !0;
              break;
            }
          }
        }
      }
      return!$bDiff$$;
    }, $_clearTree$:function() {
      this.$_TreeDndContext$ && (this.$_TreeDndContext$.$_closedown$(), this.$_TreeDndContext$ = null);
      var $n$$30$$ = this.$_getIndex$();
      this.$_$container$.unbind(".oj-tree").undelegate(".oj-tree").removeData("oj-tree-instance-id").find("[class^\x3d'oj-tree']").addBack().attr("class", function() {
        return this.className.replace(/oj-tree[^ ]*|$/ig, "");
      });
      var $cl$$ = this.$_$container$.attr("class"), $cl$$ = $cl$$.trim();
      0 === $cl$$.length && this.$_$container$.removeAttr("class");
      $_removeKeyFilter$$(this.$_$container_ul$);
      $$$$72$$(document).unbind(".oj-tree-" + $n$$30$$).undelegate(".oj-tree-" + $n$$30$$);
      this.$_$container_ul$.remove();
      this.$_$container_ul$ = null;
    }, $_getNode$:function($obj$$65$$, $allowMultiple$$) {
      if ("undefined" === typeof $obj$$65$$ || null === $obj$$65$$) {
        return $allowMultiple$$ ? this.$_data$.ui.selected : this.$_data$.ui.$lastSelected$;
      }
      var $$obj$$ = $$$$72$$($obj$$65$$, this.$_$container$);
      if ($$obj$$.is(".oj-tree") || -1 === $obj$$65$$) {
        return-1;
      }
      $$obj$$ = $$obj$$.closest("li", this.$_$container$);
      return $$obj$$.length ? $$obj$$ : !1;
    }, $_getPrev$:function($obj$$66$$, $strict$$) {
      $obj$$66$$ = this.$_getNode$($obj$$66$$);
      if (-1 === $obj$$66$$) {
        return this.$_$container$.find("\x3e ul \x3e li:last-child");
      }
      if (!$obj$$66$$.length) {
        return!1;
      }
      if ($strict$$) {
        return 0 < $obj$$66$$.prevAll("li").length ? $obj$$66$$.prevAll("li:eq(0)") : !1;
      }
      if ($obj$$66$$.prev("li").length) {
        for ($obj$$66$$ = $obj$$66$$.prev("li").eq(0);$obj$$66$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$);) {
          $obj$$66$$ = $obj$$66$$.children("ul:eq(0)").children("li:last");
        }
        return $obj$$66$$;
      }
      var $o$$14$$ = $obj$$66$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$14$$.length ? $o$$14$$ : !1;
    }, $_getNext$:function($obj$$67$$, $strict$$1$$) {
      $obj$$67$$ = this.$_getNode$($obj$$67$$);
      return-1 === $obj$$67$$ ? this.$_$container$.find("\x3e ul \x3e li:first-child") : $obj$$67$$.length ? $strict$$1$$ ? 0 < $obj$$67$$.nextAll("li").size() ? $obj$$67$$.nextAll("li:eq(0)") : !1 : $obj$$67$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? $obj$$67$$.find("li:eq(0)") : 0 < $obj$$67$$.nextAll("li").size() ? $obj$$67$$.nextAll("li:eq(0)") : $obj$$67$$.parentsUntil(".oj-tree", "li").next("li").eq(0) : !1;
    }, $_getParent$:function($o$$15_obj$$68$$) {
      $o$$15_obj$$68$$ = this.$_getNode$($o$$15_obj$$68$$);
      if (-1 == $o$$15_obj$$68$$ || !$o$$15_obj$$68$$.length) {
        return!1;
      }
      $o$$15_obj$$68$$ = $o$$15_obj$$68$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$15_obj$$68$$.length ? $o$$15_obj$$68$$ : -1;
    }, $_getChildren$:function($obj$$69$$) {
      $obj$$69$$ = this.$_getNode$($obj$$69$$);
      return-1 === $obj$$69$$ ? this.$_$container$.children("ul:eq(0)").children("li") : $obj$$69$$.length ? $obj$$69$$.children("ul:eq(0)").children("li") : !1;
    }, $_isLeaf$:function($node$$164$$) {
      return($node$$164$$ = this.$_getNode$($node$$164$$)) && -1 !== $node$$164$$ && $node$$164$$.hasClass("oj-tree-leaf");
    }, $_getNodeElem$:function($el$$18_node$$165$$) {
      $el$$18_node$$165$$ = this.$_$container_ul$.find($el$$18_node$$165$$);
      var $ret$$64$$ = !1;
      $el$$18_node$$165$$ && $el$$18_node$$165$$.length && 0 < $el$$18_node$$165$$.length && $$$$72$$($el$$18_node$$165$$).is("li") && ($ret$$64$$ = $el$$18_node$$165$$);
      return $ret$$64$$;
    }, $_reference$:function($node$$166$$, $o$$16$$) {
      var $ctor$$2_div$$11$$ = $node$$166$$.parents("div").eq(0);
      ($ctor$$2_div$$11$$ = $oj$$79$$.Components.$getWidgetConstructor$($ctor$$2_div$$11$$)) && $o$$16$$ && $ctor$$2_div$$11$$("getCI", $o$$16$$);
      return this;
    }, getCI:function($o$$17$$) {
      $o$$17$$.$ot$ = this;
    }, $_applyDefaults$:function($to$$4$$, $from$$4$$) {
      void 0 != $to$$4$$ && void 0 != $from$$4$$ && $$$$72$$.each($from$$4$$, function($prop$$77$$, $val$$72$$) {
        void 0 == $to$$4$$[$prop$$77$$] && ($to$$4$$[$prop$$77$$] = $val$$72$$);
      });
    }, $_handleDisabledChanged$:function($newval$$1$$) {
      var $curState$$;
      "undefined" !== typeof $newval$$1$$ && (($curState$$ = this.$_$container_ul$.hasClass($TreeUtils$$.$_OJ_DISABLED$)) || ($curState$$ = !1), $curState$$ != $newval$$1$$ && ($newval$$1$$ ? (this.$_$container_ul$.addClass($TreeUtils$$.$_OJ_DISABLED$), this.$_$container_ul$.prop("disabled", !0)) : (this.$_$container_ul$.removeClass($TreeUtils$$.$_OJ_DISABLED$), this.$_$container_ul$.prop("disabled", !1)), this.$_treeDisable$($newval$$1$$)));
    }, $_treeDisable$:function($lstate$$) {
      $lstate$$ ? (this.$_data$.$core$.locked = !0, this.$_data$.ui.opacity = this.$_$container$.children("ul").css("opacity"), this.$_$container_ul$.addClass($TreeUtils$$.$_OJ_DISABLED$).css("opacity", "0.9")) : (this.$_data$.$core$.locked = !1, this.$_$container_ul$.removeClass($TreeUtils$$.$_OJ_DISABLED$).css("opacity", this.$_data$.ui.opacity));
    }, $_isTreeDisabled$:function() {
      return this.$_data$.$core$.locked;
    }, $_handleSelectionOptionChange$:function($aSelected_newSels$$) {
      var $sels$$ = $aSelected_newSels$$.slice(0), $cur$$2$$ = [], $_this$$5$$ = this, $$elem$$3$$, $id$$67$$, $inList$$, $len$$22$$;
      $$$$72$$.grep($sels$$, function($node$$167$$, $i$$465$$) {
        if ($$elem$$3$$ = $_this$$5$$.$_getNodeElem$($node$$167$$)) {
          $cur$$2$$.push($$elem$$3$$), $sels$$[$i$$465$$] = $$elem$$3$$[0];
        } else {
          return!1;
        }
        return!0;
      });
      $aSelected_newSels$$ = this.$_getSelected$();
      $$$$72$$.each($aSelected_newSels$$, function($i$$466$$, $node$$168$$) {
        $len$$22$$ = $cur$$2$$.length;
        $id$$67$$ = $$$$72$$($node$$168$$).attr("id");
        $inList$$ = !1;
        for ($i$$466$$ = 0;$i$$466$$ < $len$$22$$;$i$$466$$++) {
          if ($id$$67$$ == $cur$$2$$[$i$$466$$].attr("id")) {
            $inList$$ = !0;
            break;
          }
        }
        $inList$$ || $_this$$5$$.$_deselect$($node$$168$$);
      });
      this.$_setSelected$($cur$$2$$, null);
    }, $_prepare_move$:function($o$$18$$, $r$$5$$, $pos$$16$$, $cb$$1$$, $is_cb$$) {
      var $p$$10$$ = {};
      $r$$5$$ = -1 !== $r$$5$$ && $r$$5$$ ? this.$_getNode$($r$$5$$) : -1;
      this.$_reference$($o$$18$$, $p$$10$$);
      $p$$10$$.$rt$ = this;
      $p$$10$$.$o$ = $p$$10$$.$ot$.$_getNode$($o$$18$$);
      $p$$10$$.$r$ = $r$$5$$;
      $p$$10$$.$p$ = "undefined" === typeof $pos$$16$$ || !1 === $pos$$16$$ ? "last" : $pos$$16$$;
      if (!$is_cb$$ && this.$_data$.$core$.$prepMoveBlk$.$o$ && this.$_data$.$core$.$prepMoveBlk$.$o$[0] === $p$$10$$.$o$[0] && this.$_data$.$core$.$prepMoveBlk$.$r$[0] === $p$$10$$.$r$[0] && this.$_data$.$core$.$prepMoveBlk$.$p$ === $p$$10$$.$p$) {
        $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepMoveBlk$);
      } else {
        if (-1 !== $p$$10$$.$r$ && $p$$10$$.$r$) {
          if (!/^(before|after)$/.test($p$$10$$.$p$) && !this.$_is_loaded$($p$$10$$.$r$)) {
            return this.$_load_node$($p$$10$$.$r$, function() {
              this.$_prepare_move$($o$$18$$, $r$$5$$, $pos$$16$$, $cb$$1$$, !0);
            });
          }
          switch($p$$10$$.$p$) {
            case "before":
              $p$$10$$.$cp$ = $p$$10$$.$r$.index();
              $p$$10$$.$cr$ = $p$$10$$.$rt$.$_getParent$($p$$10$$.$r$);
              break;
            case "after":
              $p$$10$$.$cp$ = $p$$10$$.$r$.index() + 1;
              $p$$10$$.$cr$ = $p$$10$$.$rt$.$_getParent$($p$$10$$.$r$);
              break;
            case "inside":
            ;
            case "first":
              $p$$10$$.$cp$ = 0;
              $p$$10$$.$cr$ = $p$$10$$.$r$;
              break;
            case "last":
              $p$$10$$.$cp$ = $p$$10$$.$r$.find(" \x3e ul \x3e li").length;
              $p$$10$$.$cr$ = $p$$10$$.$r$;
              break;
            default:
              $p$$10$$.$cp$ = $p$$10$$.$p$, $p$$10$$.$cr$ = $p$$10$$.$r$;
          }
        } else {
          switch($p$$10$$.$cr$ = -1, $p$$10$$.$p$) {
            case "first":
            ;
            case "before":
            ;
            case "inside":
              $p$$10$$.$cp$ = 0;
              break;
            case "after":
            ;
            case "last":
              $p$$10$$.$cp$ = $p$$10$$.$rt$.$_$container$.find(" \x3e ul \x3e li").length;
              break;
            default:
              $p$$10$$.$cp$ = $p$$10$$.$p$;
          }
        }
        $p$$10$$.$np$ = -1 == $p$$10$$.$cr$ ? $p$$10$$.$rt$.$_$container$ : $p$$10$$.$cr$;
        $p$$10$$.$op$ = $p$$10$$.$ot$.$_getParent$($p$$10$$.$o$);
        $p$$10$$.$cop$ = $p$$10$$.$o$.index();
        -1 === $p$$10$$.$op$ && ($p$$10$$.$op$ = $p$$10$$.$ot$ ? $p$$10$$.$ot$.$_$container$ : this.$_$container$);
        !/^(before|after)$/.test($p$$10$$.$p$) && $p$$10$$.$op$ && $p$$10$$.$np$ && $p$$10$$.$op$[0] === $p$$10$$.$np$[0] && $p$$10$$.$o$.index() < $p$$10$$.$cp$ && $p$$10$$.$cp$++;
        $p$$10$$.$or$ = $p$$10$$.$np$.find(" \x3e ul \x3e li:nth-child(" + ($p$$10$$.$cp$ + 1) + ")");
        this.$_data$.$core$.$prepMoveBlk$ = $p$$10$$;
        $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepMoveBlk$, "prepare_move");
      }
    }, $_checkMove$:function() {
      var $obj$$70$$ = this.$_data$.$core$.$prepMoveBlk$, $ret$$65$$ = !0, $r$$6$$;
      $r$$6$$ = -1 === $obj$$70$$.$r$ ? this.$_$container$ : $obj$$70$$.$r$;
      if (!$obj$$70$$ || !$obj$$70$$.$o$ || $obj$$70$$.$or$[0] === $obj$$70$$.$o$[0] || !$obj$$70$$.$r$) {
        return!1;
      }
      if (!$obj$$70$$.$cy$) {
        if ($obj$$70$$.$op$ && $obj$$70$$.$np$ && $obj$$70$$.$op$[0] === $obj$$70$$.$np$[0] && $obj$$70$$.$cp$ - 1 === $obj$$70$$.$o$.index()) {
          return!1;
        }
        $obj$$70$$.$o$.each(function() {
          if (-1 !== $r$$6$$.parentsUntil(".oj-tree", "li").addBack().index(this)) {
            return $ret$$65$$ = !1;
          }
        });
      }
      return $ret$$65$$;
    }, $_renameNode$:function($node$$169$$, $text$$21$$) {
      var $t$$4$$;
      $node$$169$$ = this.$_getNode$($node$$169$$);
      this.$__rollback$();
      $t$$4$$ = this.getText($node$$169$$);
      if ($node$$169$$ && $node$$169$$.length) {
        var $rslt$$3$$ = this.$_emitEvent$({obj:$node$$169$$, func:"rename", title:$text$$21$$, prevTitle:$t$$4$$}, "before");
        if ("boolean" == typeof $rslt$$3$$ && !$rslt$$3$$) {
          return;
        }
      }
      $node$$169$$ && $node$$169$$.length && this.$_set_text$.apply(this, Array.prototype.slice.call(arguments)) && this.$_emitEvent$({obj:$node$$169$$, title:$text$$21$$, prevTitle:$t$$4$$}, "rename");
    }, $_moveNode$:function($obj$$71$$, $d$$8_o$$19_ref$$3$$, $position$$50$$, $is_copy$$, $is_prepared$$, $skip_check$$) {
      $is_prepared$$ || ($obj$$71$$ = this.$_getNode$($obj$$71$$));
      if (!($obj$$71$$.hasClass && $obj$$71$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked)) {
        if (!$is_prepared$$) {
          return this.$_prepare_move$($obj$$71$$, $d$$8_o$$19_ref$$3$$, $position$$50$$, function($p$$11$$) {
            $p$$11$$.$ot$ === $p$$11$$.$rt$ || $p$$11$$.$cy$ || $p$$11$$.$ot$.deselect($p$$11$$.$o$);
            this.$_moveNode$($p$$11$$, !1, !1, $is_copy$$, !0, $skip_check$$);
          });
        }
        $is_copy$$ && (this.$_data$.$core$.$prepMoveBlk$.$cy$ = !0);
        if (!$skip_check$$ && !this.$_checkMove$()) {
          return!1;
        }
        this.$__rollback$();
        $d$$8_o$$19_ref$$3$$ = !1;
        $is_copy$$ ? ($d$$8_o$$19_ref$$3$$ = $obj$$71$$.$o$.clone(!0), $d$$8_o$$19_ref$$3$$.find("*[id]").addBack().each(function() {
          this.id && (this.id = "copy_" + this.id);
        })) : $d$$8_o$$19_ref$$3$$ = $obj$$71$$.$o$;
        $obj$$71$$.$or$.length ? $obj$$71$$.$or$.before($d$$8_o$$19_ref$$3$$) : ($obj$$71$$.$np$.children("ul").length || $$$$72$$("\x3cul /\x3e").appendTo($obj$$71$$.$np$), $obj$$71$$.$np$.children("ul:eq(0)").append($d$$8_o$$19_ref$$3$$));
        try {
          $obj$$71$$.$ot$.$_cleanNode$($obj$$71$$.$op$), $obj$$71$$.$rt$.$_cleanNode$($obj$$71$$.$np$), $obj$$71$$.$op$.find("\x3e ul \x3e li").length || $obj$$71$$.$op$.removeClass("oj-expanded oj-collapsed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
        } catch ($e$$120$$) {
        }
        $is_copy$$ && (this.$_data$.$core$.$prepMoveBlk$.$cy$ = !0, this.$_data$.$core$.$prepMoveBlk$.$oc$ = $d$$8_o$$19_ref$$3$$);
        $d$$8_o$$19_ref$$3$$ = $$$$72$$.extend(!0, {}, this.$_data$.$core$.$prepMoveBlk$);
        $d$$8_o$$19_ref$$3$$.obj = $obj$$71$$.$o$;
        this.$_emitEvent$($d$$8_o$$19_ref$$3$$, "move");
        return this.$_data$.$core$.$prepMoveBlk$;
      }
    }, $_getMoveBlk$:function() {
      return this.$_data$.$crrm$.$prepMoveBlk$;
    }, $_getType$:function($node$$170$$) {
      var $n$$31$$ = null;
      this.options.types && ($n$$31$$ = this.$_getNode$($node$$170$$));
      return $n$$31$$ && $n$$31$$.length ? $n$$31$$.attr(this.options.types.attr) || "default" : !1;
    }, $_setType$:function($node$$171$$, $str$$23$$) {
      var $s$$11$$ = this.options.types, $tattr$$, $ret$$66$$ = !1;
      $node$$171$$ = this.$_getNode$($node$$171$$);
      $s$$11$$ && $node$$171$$ && -1 != $node$$171$$ && $node$$171$$.length && $str$$23$$ && ($tattr$$ = $s$$11$$.attr) && $s$$11$$[$str$$23$$] && ($node$$171$$.attr($tattr$$, $str$$23$$), $node$$171$$.addClass("oj-tree-type"), $ret$$66$$ = !0);
      return $ret$$66$$;
    }, $_check$:function($rule$$3$$, $obj$$72$$) {
      $obj$$72$$ = this.$_getNode$($obj$$72$$);
      var $v$$2$$ = !1, $ty$$ = this.$_getType$($obj$$72$$), $s$$12$$ = this.$_getOptions$().types, $data$$174$$ = !1;
      if (-1 === $obj$$72$$) {
        if ($s$$12$$[$rule$$3$$]) {
          $v$$2$$ = $s$$12$$[$rule$$3$$];
        } else {
          return;
        }
      } else {
        if (!1 === $ty$$) {
          return;
        }
        ($data$$174$$ = this.$_data$.types.$defaults$.useData ? $obj$$72$$.data("oj-tree") : !1) && $data$$174$$.types && "undefined" !== typeof $data$$174$$.types[$rule$$3$$] ? $v$$2$$ = $data$$174$$.types[$rule$$3$$] : $s$$12$$.types[$ty$$] && "undefined" !== typeof $s$$12$$.types[$ty$$][$rule$$3$$] ? $v$$2$$ = $s$$12$$.types[$ty$$][$rule$$3$$] : $s$$12$$.types["default"] && "undefined" !== typeof $s$$12$$.types["default"][$rule$$3$$] && ($v$$2$$ = $s$$12$$.types["default"][$rule$$3$$]);
      }
      $$$$72$$.isFunction($v$$2$$) && ($v$$2$$ = $v$$2$$.call(this, $obj$$72$$));
      return $v$$2$$;
    }, $_cleanNode$:function($obj$$73$$) {
      var $dndClasses$$, $draggableAttr$$, $draggableAttrVal$$, $dndContext$$ = this.$_getDndContext$(), $cons$$ = $oj$$79$$.$TreeDndContext$;
      $dndContext$$.$isDragEnabled$() && ($dndClasses$$ = $cons$$.$_OJ_DRAGGABLE$, $draggableAttr$$ = "draggable", $draggableAttrVal$$ = !0);
      $dndContext$$.$isDropEnabled$() && ($dndClasses$$ += " " + $cons$$.$_OJ_VALID_DROP$);
      $obj$$73$$ = $obj$$73$$ && -1 != $obj$$73$$ ? $$$$72$$($obj$$73$$) : this.$_$container_ul$;
      $obj$$73$$ = $obj$$73$$.is("li") ? $obj$$73$$.find("li").addBack() : $obj$$73$$.find("li");
      $obj$$73$$.removeClass("oj-tree-last").addClass("oj-tree-node").addClass($dndClasses$$).attr($draggableAttr$$, $draggableAttrVal$$).filter("li:last-child").addClass("oj-tree-last").end().filter(":has(li)").not(".oj-expanded").removeClass("oj-tree-leaf").addClass($TreeUtils$$.$_OJ_COLLAPSED$).attr("aria-expanded", "false");
      $obj$$73$$.not(".oj-expanded, .oj-collapsed").addClass("oj-tree-leaf").children("ul").remove();
      var $typeAttr$$ = this.options.types ? this.options.types.attr : !1;
      $obj$$73$$.find("li");
      var $disc$$, $t$$6$$;
      $$$$72$$.each($obj$$73$$, function() {
        $t$$6$$ = $$$$72$$(this);
        $disc$$ = $t$$6$$.find("\x3e ins");
        1 < $disc$$.length && ($disc$$ = $$$$72$$($disc$$[0]));
        $t$$6$$.hasClass("oj-tree-leaf") ? ($disc$$.removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), $disc$$.addClass("oj-tree-icon")) : ($disc$$.addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), $disc$$.removeClass("oj-tree-node-icon"));
        $typeAttr$$ && $t$$6$$.attr($typeAttr$$) && $t$$6$$.addClass("oj-tree-type");
      });
    }, $_createNode$:function($obj$$74$$, $position$$51$$, $js$$, $callback$$132$$, $d$$10_is_loaded$$) {
      $obj$$74$$ = $obj$$74$$ || -1;
      $obj$$74$$ = this.$_getNode$($obj$$74$$);
      if (-1 !== $obj$$74$$ && !$obj$$74$$.length) {
        return null;
      }
      var $tmp$$4$$;
      $position$$51$$ = "undefined" === typeof $position$$51$$ ? "last" : $position$$51$$;
      if (!$d$$10_is_loaded$$ && !this.$_is_loaded$($obj$$74$$)) {
        return this.$_load_node$($obj$$74$$, function() {
          this.$_createNode$($obj$$74$$, $position$$51$$, $js$$, $callback$$132$$, !0);
        }), null;
      }
      this.$__rollback$();
      $js$$ = this.$_parseJson$($js$$);
      if (!$js$$) {
        return null;
      }
      $js$$ = $js$$.children();
      $d$$10_is_loaded$$ = $$$$72$$($js$$[0]);
      -1 === $obj$$74$$ && ($obj$$74$$ = this.$_$container$, "before" === $position$$51$$ && ($position$$51$$ = "first"), "after" === $position$$51$$ && ($position$$51$$ = "last"));
      switch($position$$51$$) {
        case "before":
          $obj$$74$$.before($d$$10_is_loaded$$);
          $tmp$$4$$ = this.$_getParent$($obj$$74$$);
          break;
        case "after":
          $obj$$74$$.after($d$$10_is_loaded$$);
          $tmp$$4$$ = this.$_getParent$($obj$$74$$);
          break;
        case "inside":
        ;
        case "first":
          $obj$$74$$.children("ul").length || $obj$$74$$.append("\x3cul /\x3e");
          $obj$$74$$.children("ul").prepend($d$$10_is_loaded$$);
          $tmp$$4$$ = $obj$$74$$;
          break;
        case "last":
          $obj$$74$$.children("ul").length || $obj$$74$$.append("\x3cul /\x3e");
          $obj$$74$$.children("ul").append($d$$10_is_loaded$$);
          $tmp$$4$$ = $obj$$74$$;
          break;
        default:
          $obj$$74$$.children("ul").length || $obj$$74$$.append("\x3cul /\x3e"), $position$$51$$ || ($position$$51$$ = 0), $tmp$$4$$ = $obj$$74$$.children("ul").children("li").eq($position$$51$$), $tmp$$4$$.length ? $tmp$$4$$.before($d$$10_is_loaded$$) : $obj$$74$$.children("ul").append($d$$10_is_loaded$$), $tmp$$4$$ = $obj$$74$$;
      }
      if (-1 === $tmp$$4$$ || $tmp$$4$$.get(0) === this.$_$container$.get(0)) {
        $tmp$$4$$ = -1;
      }
      this.$_cleanNode$($tmp$$4$$);
      this.$_emitEvent$({obj:$d$$10_is_loaded$$, parent:$tmp$$4$$}, "create");
      $callback$$132$$ && $callback$$132$$.call(this, $d$$10_is_loaded$$);
      1 < this.$_$container_ul$[0].childNodes.length && this.$_$container_ul$.find("." + $TreeUtils$$.$_OJ_TEMPNODE$).remove();
      return $d$$10_is_loaded$$;
    }, $_expand$:function($obj$$75$$, $callback$$133$$, $skipAnim$$4$$) {
      $obj$$75$$ = this.$_getNode$($obj$$75$$);
      if (!$obj$$75$$ || !$obj$$75$$.length) {
        return!1;
      }
      $skipAnim$$4$$ = $skipAnim$$4$$ || !1;
      if (!$obj$$75$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
        if (!$obj$$75$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$)) {
          return $callback$$133$$ && $callback$$133$$.call(), !1;
        }
        var $dur$$1_rslt$$4$$ = this.$_emitEvent$({obj:$obj$$75$$, func:"expand"}, "before");
        if ("boolean" != typeof $dur$$1_rslt$$4$$ || $dur$$1_rslt$$4$$) {
          var $dur$$1_rslt$$4$$ = $skipAnim$$4$$ ? 0 : this.$_animDuration$, $t$$7$$ = this;
          this.$_is_loaded$($obj$$75$$) ? (this.options.expandParents && $obj$$75$$.parentsUntil(".oj-tree", ".oj-collapsed").each(function() {
            $t$$7$$.$_expand$(this, !1, !0);
          }), $obj$$75$$.removeClass($TreeUtils$$.$_OJ_COLLAPSED$).addClass($TreeUtils$$.$_OJ_EXPANDED$).attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading"), $$$$72$$($obj$$75$$.children()[0]).removeClass($TreeUtils$$.$_OJ_SELECTED$).addClass("oj-default"), !$skipAnim$$4$$ && $dur$$1_rslt$$4$$ ? this.$_slide$($obj$$75$$, !1) : this.$_transitionEnd$($$$$72$$($obj$$75$$.children("UL")[0]), $obj$$75$$), $callback$$133$$ && $callback$$133$$.call()) : ($obj$$75$$.children("a").addClass("oj-tree-loading"), 
          this.$_load_node$($obj$$75$$, function() {
            $t$$7$$.$_expand$($obj$$75$$, $callback$$133$$, $skipAnim$$4$$);
          }, $callback$$133$$));
        }
      }
    }, $_expandAll$:function($obj$$76$$, $animate$$13$$, $original_obj$$) {
      var $origTarg$$1$$ = $obj$$76$$ ? $obj$$76$$ : -1;
      ($obj$$76$$ = $obj$$76$$ ? this.$_getNode$($obj$$76$$) : -1) && -1 !== $obj$$76$$ ? $origTarg$$1$$ = $obj$$76$$ : $obj$$76$$ = this.$_$container_ul$;
      $original_obj$$ ? $obj$$76$$ = $obj$$76$$.find("li.oj-collapsed") : ($original_obj$$ = $obj$$76$$, $obj$$76$$ = $obj$$76$$.is(".oj-collapsed") ? $obj$$76$$.find("li.oj-collapsed").addBack() : $obj$$76$$.find("li.oj-collapsed"));
      var $_this$$7$$ = this;
      $obj$$76$$.each(function() {
        var $__this$$ = this;
        $_this$$7$$.$_is_loaded$(this) ? $_this$$7$$.$_expand$(this, !1, !$animate$$13$$) : $_this$$7$$.expand(this, function() {
          $_this$$7$$.$_expandAll$($__this$$, $animate$$13$$, $original_obj$$);
        }, !$animate$$13$$);
      });
      0 === $original_obj$$.find("li.oj-collapsed").length && this.$_emitEvent$({obj:$obj$$76$$, targ:$origTarg$$1$$}, "expandAll");
    }, $_select$:function($node$$172$$, $bRet_check$$, $e$$121$$) {
      var $core$$ = this.$_data$.$core$, $ui$$42$$ = this.$_data$.ui, $selectMode$$ = $core$$.$selectMode$;
      if (0 == $selectMode$$) {
        return!1;
      }
      $node$$172$$ = this.$_getNode$($node$$172$$);
      if (-1 == $node$$172$$ || !$node$$172$$ || !$node$$172$$.length || $node$$172$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || $core$$.locked) {
        return!1;
      }
      $e$$121$$ && "touchend" == $e$$121$$.type || ($ui$$42$$.$touchEvent$ = !1);
      var $isSelected$$ = this.isSelected($node$$172$$);
      if (!$isSelected$$) {
        var $prevSelections$$2_rslt$$5$$ = this.$_emitEvent$({obj:$node$$172$$, func:"select"}, "before");
        if ("boolean" == typeof $prevSelections$$2_rslt$$5$$ && !$prevSelections$$2_rslt$$5$$) {
          return!1;
        }
      }
      var $prevSelections$$2_rslt$$5$$ = this.options.selection.slice(0), $s$$14$$ = this.options, $isMultiple_selMultMod$$ = $ui$$42$$.$defaults$.selectMultipleModifier, $isRange_selRangeMod$$ = $ui$$42$$.$defaults$.selectRangeModifier, $disSelChildren$$ = $ui$$42$$.$defaults$.disableSelectingChildren, $isMultiple_selMultMod$$ = "on" == $isMultiple_selMultMod$$ || !1 !== $isMultiple_selMultMod$$ && $e$$121$$ && $oj$$79$$.$DomUtils$.$isMetaKeyPressed$($e$$121$$), $isRange_selRangeMod$$ = !1 !== $isRange_selRangeMod$$ && 
      $e$$121$$ && $e$$121$$[$isRange_selRangeMod$$ + "Key"] && $ui$$42$$.$lastSelected$ && this.$_data$.ui.$lastSelected$[0] !== $node$$172$$[0] && $ui$$42$$.$lastSelected$.parent()[0] === $node$$172$$.parent()[0], $proceed$$1$$ = !0, $t$$8$$ = this;
      if ($bRet_check$$) {
        if ($disSelChildren$$ && $isMultiple_selMultMod$$ && ($node$$172$$.parentsUntil(".oj-tree", "li").children("a.oj-selected").length || $node$$172$$.children("ul").find("a.oj-selected:eq(0)").length)) {
          return!1;
        }
        $proceed$$1$$ = !1;
        switch(!0) {
          case $isRange_selRangeMod$$:
            $ui$$42$$.$lastSelected$.addClass("oj-tree-last-selected");
            $node$$172$$ = $node$$172$$[$node$$172$$.index() < $ui$$42$$.$lastSelected$.index() ? "nextUntil" : "prevUntil"](".oj-tree-last-selected").addBack();
            -1 == $selectMode$$ || $node$$172$$.length < $selectMode$$ ? ($ui$$42$$.$lastSelected$.removeClass("oj-tree-last-selected"), $ui$$42$$.selected.each(function() {
              this !== $ui$$42$$.$lastSelected$[0] && $t$$8$$.$_deselect$(this);
            }), $isSelected$$ = !1, $proceed$$1$$ = !0) : $proceed$$1$$ = !1;
            break;
          case $ui$$42$$.$touchEvent$ && -1 == $selectMode$$:
            $ui$$42$$.$touchEvent$ = !1;
            this.toggleSelect($node$$172$$);
            $proceed$$1$$ = !1;
            break;
          case $isSelected$$ && !$isMultiple_selMultMod$$:
            if (!$e$$121$$) {
              break;
            }
            this.$_deselectAll$();
            $ui$$42$$.$spacebar$ || ($isSelected$$ = !1);
            $proceed$$1$$ = !0;
            break;
          case !$isSelected$$ && !$isMultiple_selMultMod$$:
            $e$$121$$ ? $ui$$42$$.selected && 1 == $ui$$42$$.selected.length ? this.$_deselect$($ui$$42$$.selected) : this.$_deselectAll$($ui$$42$$.selected) : 1 === $selectMode$$ ? this.$_deselect$($ui$$42$$.selected) : 1 < $selectMode$$ && this.$_deselectAll$();
            $proceed$$1$$ = !0;
            break;
          case $isSelected$$ && $isMultiple_selMultMod$$:
            this.deselect($node$$172$$);
            break;
          case !$isSelected$$ && $isMultiple_selMultMod$$:
            if (-1 == $selectMode$$ || $ui$$42$$.selected.length + 1 <= $selectMode$$) {
              $proceed$$1$$ = !0;
            }
          ;
        }
      }
      $bRet_check$$ = !1;
      $proceed$$1$$ && !$isSelected$$ && ($isRange_selRangeMod$$ || ($ui$$42$$.$lastSelected$ = $node$$172$$), $node$$172$$.children("a").addClass($TreeUtils$$.$_OJ_SELECTED$), $node$$172$$.attr("aria-selected", "true"), $bRet_check$$ = !0, $s$$14$$.selectedParentExpand && $node$$172$$.parents(".oj-collapsed").each(function() {
        $t$$8$$.$_expand$(this, !1, !0);
      }), $ui$$42$$.selected = $ui$$42$$.selected.add($node$$172$$), this.$_fix_scroll$($node$$172$$.eq(0)), $core$$.$suppressSelectEvent$ || this.$_fireOptionChangeEvent$("selection", $prevSelections$$2_rslt$$5$$, null, $e$$121$$));
      return $bRet_check$$;
    }, $_deselect$:function($node$$173$$) {
      $node$$173$$ = this.$_getNode$($node$$173$$);
      if (!$node$$173$$.length) {
        return!1;
      }
      $node$$173$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked || !this.isSelected($node$$173$$) || ($node$$173$$.children("a").removeClass($TreeUtils$$.$_OJ_SELECTED$), $node$$173$$.removeAttr("aria-selected"), this.$_data$.ui.selected = this.$_data$.ui.selected.not($node$$173$$), this.$_data$.ui.$lastSelected$ && this.$_data$.ui.$lastSelected$.length && this.$_data$.ui.$lastSelected$.get(0) === $node$$173$$.get(0) && (this.$_data$.ui.$lastSelected$ = this.$_data$.ui.selected.eq(0)));
    }, $_deselectAll$:function($context$$175_ret$$67$$) {
      if (!this.$_data$.$core$.locked && ($context$$175_ret$$67$$ = $context$$175_ret$$67$$ ? $$$$72$$($context$$175_ret$$67$$).find("a.oj-selected").parent() : this.$_$container$.find("a.oj-selected").parent(), $context$$175_ret$$67$$.not(".oj-disabled"), 0 !== $context$$175_ret$$67$$.length)) {
        var $_this$$8$$ = this;
        $$$$72$$.each($context$$175_ret$$67$$, function() {
          $_this$$8$$.$_deselect$(this);
        });
      }
    }, $_setSelected$:function($nodes$$9$$, $e$$122$$) {
      if (this.$_data$.$core$.locked) {
        return null;
      }
      if ($nodes$$9$$ && 0 < $nodes$$9$$.length) {
        var $_this$$9$$ = this;
        $$$$72$$.each($nodes$$9$$, function($i$$468$$, $val$$74$$) {
          $val$$74$$ && $_this$$9$$.$_select$($val$$74$$, !0, $e$$122$$);
        });
      }
    }, $_handleNodeTapClick$:function($event$$660$$) {
      $event$$660$$.preventDefault();
      $event$$660$$.currentTarget.blur();
      $$$$72$$($event$$660$$.currentTarget).hasClass("oj-tree-loading") || (this.$_setFocus$(), this.$_select$($event$$660$$.currentTarget, !0, $event$$660$$) && this.$_$container_ul$.focus());
      this.$_data$.ui.$touchEvent$ = !1;
    }, $_disclosureHover$:function($elem$$171$$, $bHover$$) {
      $elem$$171$$ = $$$$72$$($elem$$171$$);
      if (!$elem$$171$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
        var $par$$ = $elem$$171$$.parent(), $bClosed$$ = $par$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$);
        if ($par$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) || $bClosed$$) {
          $bHover$$ ? ($elem$$171$$.addClass($TreeUtils$$.$_OJ_HOVER$), $elem$$171$$.removeClass("oj-default"), $elem$$171$$.removeClass($TreeUtils$$.$_OJ_SELECTED$)) : ($elem$$171$$.removeClass($TreeUtils$$.$_OJ_HOVER$), $elem$$171$$.addClass("oj-default"));
        }
      }
    }, $_refresh$:function($node$$174$$) {
      this.$_refresh_core$($node$$174$$);
    }, $_refresh_core$:function($node$$175$$) {
      var $origTarg$$3$$ = $node$$175$$ ? $node$$175$$ : -1, $_this$$10$$ = this;
      this.$_save_opened$();
      $node$$175$$ || ($node$$175$$ = -1);
      ($node$$175$$ = this.$_getNode$($node$$175$$)) ? $origTarg$$3$$ = $node$$175$$ : $node$$175$$ = -1;
      -1 !== $node$$175$$ ? $node$$175$$.children("UL").remove() : (this.$_$container_ul$.empty(), this.$_processExistingMarkup$());
      this.$_load_node$($node$$175$$, function() {
        $_this$$10$$.$_emitEvent$({obj:$origTarg$$3$$}, "refresh");
        $_this$$10$$.$_reload_nodes$();
      });
    }, $_refresh_ui$:function($obj$$77$$) {
      this.saveSelected();
      this.$_refresh_core$($obj$$77$$);
    }, after_close:function($obj$$78$$) {
      this.$_emitEvent$({obj:$obj$$78$$}, "after_close", !0);
    }, $_reopen$:function() {
      var $_this$$11$$ = this;
      this.$_data$.$core$.$toExpand$.length && $$$$72$$.each(this.$_data$.$core$.$toExpand$, function($i$$469$$, $val$$75$$) {
        $_this$$11$$.$_expand$($val$$75$$, !1, !0);
      });
      this.$_emitEvent$({}, "reopen", !0);
    }, $_getSelected$:function($context$$176_sel$$2$$) {
      var $ar$$2$$, $i$$470$$, $len$$23$$;
      $context$$176_sel$$2$$ = $context$$176_sel$$2$$ ? $$$$72$$($context$$176_sel$$2$$).find("a.oj-selected").parent() : this.$_data$.ui.selected;
      $ar$$2$$ = [];
      $len$$23$$ = $context$$176_sel$$2$$.length;
      for ($i$$470$$ = 0;$i$$470$$ < $len$$23$$;$i$$470$$++) {
        $ar$$2$$.push($context$$176_sel$$2$$[$i$$470$$]);
      }
      return $ar$$2$$;
    }, $_set_text$:function($obj$$79$$, $val$$76$$) {
      $obj$$79$$ = this.$_getNode$($obj$$79$$);
      if (!$obj$$79$$.length) {
        return!1;
      }
      $obj$$79$$ = $obj$$79$$.children("a:eq(0)");
      $obj$$79$$ = $obj$$79$$.find("span:eq(0)");
      this.$_emitEvent$({obj:$obj$$79$$, name:$val$$76$$}, "set_text", !0);
      return $obj$$79$$[0].textContent = $val$$76$$;
    }, $_loadNodes$:function() {
      0 !== this.$_data$.$ds$.type && -1 !== this.$_data$.$ds$.type ? this.$_load_node$(-1, function() {
        this.$_loaded$();
        this.$_reload_nodes$();
      }) : (this.$_applyEmptyText$(), this.$_loaded$());
    }, $_load_node$:function($obj$$80$$) {
      this.$_emitEvent$({obj:$obj$$80$$}, "load_node", !0);
    }, $_is_loaded$:function() {
      return!0;
    }, $_load_node_DS$:function($obj$$82$$, $s_call$$, $e_call$$) {
      var $_this$$12$$ = this;
      this.$_load_node_tree$($obj$$82$$, function() {
        $_this$$12$$.$_emitEvent$({obj:$_this$$12$$.$_getNode$($obj$$82$$)}, "load_node", !0);
        $s_call$$.call(this);
      }, $e_call$$);
    }, $_is_loaded_DS$:function($obj$$83$$) {
      $obj$$83$$ = this.$_getNode$($obj$$83$$);
      return-1 === $obj$$83$$ || !$obj$$83$$ || $obj$$83$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$83$$.children("ul").children("li").length;
    }, $_refresh_DS$:function($obj$$84$$) {
      ($obj$$84$$ = this.$_getNode$($obj$$84$$)) && -1 !== $obj$$84$$ && $obj$$84$$.removeData("oj-tree-children");
      return this.$_refresh_ui$($obj$$84$$);
    }, $_load_node_J$:function($obj$$85$$, $s_call$$1$$, $e_call$$1$$) {
      var $_this$$13$$ = this;
      this.$_loadNodeJson$($obj$$85$$, function() {
        $_this$$13$$.$_emitEvent$({obj:$_this$$13$$.$_getNode$($obj$$85$$)}, "load_node", !0);
        $s_call$$1$$.call(this);
      }, $e_call$$1$$);
    }, $_is_loaded_J$:function($obj$$86$$) {
      var $s$$15$$ = this.options.data;
      $obj$$86$$ = this.$_getNode$($obj$$86$$);
      return-1 == $obj$$86$$ || !$obj$$86$$ || !$s$$15$$.ajax && !this.$_data$.$ds$.$progressiveRender$ && !$$$$72$$.isFunction($s$$15$$.data) || $obj$$86$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$86$$.children("ul").children("li").length;
    }, $_load_node_H$:function($obj$$87$$, $s_call$$2$$, $e_call$$2$$) {
      var $_this$$14$$ = this;
      this.$_loadNodeHtml$($obj$$87$$, function() {
        $_this$$14$$.$_emitEvent$({obj:$_this$$14$$.$_getNode$($obj$$87$$)}, "load_node", !0);
        $s_call$$2$$.call(this);
      }, $e_call$$2$$);
    }, $_is_loaded_H$:function($obj$$88$$) {
      var $s$$16$$ = this.options.data, $data$$175$$ = null, $ajax$$ = null;
      $s$$16$$ && ($data$$175$$ = $s$$16$$.data || null, $ajax$$ = $s$$16$$.ajax || null);
      $obj$$88$$ = this.$_getNode$($obj$$88$$);
      return-1 == $obj$$88$$ || !$obj$$88$$ || !$ajax$$ && !$$$$72$$.isFunction($data$$175$$) || $obj$$88$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$88$$.children("ul").children("li").size();
    }, reselect:function() {
      var $_this$$15$$ = this, $s$$17$$ = this.$_data$.ui.$to_select$, $s$$17$$ = $$$$72$$.map($$$$72$$.makeArray($s$$17$$), function($n$$32$$) {
        return "#" + $n$$32$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      $$$$72$$.each($s$$17$$, function($i$$471$$, $val$$77$$) {
        $val$$77$$ && "#" !== $val$$77$$ && $_this$$15$$.select($val$$77$$);
      });
      this.$_data$.ui.selected = this.$_data$.ui.selected.filter(function() {
        return this.parentNode;
      });
      this.$_emitEvent$(null, "reselect", !0);
    }, saveSelected:function() {
      var $ui$$43$$ = this.$_data$.ui;
      $ui$$43$$.$to_select$ = [];
      $ui$$43$$.selected.each(function() {
        this.id && $ui$$43$$.$to_select$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
      this.$_emitEvent$($ui$$43$$.$to_select$, "savedselected", !0);
    }, rollback:function($rb$$1$$) {
      $rb$$1$$ && $$$$72$$.isArray($rb$$1$$);
    }, get_rollback:function() {
      this.$_emitEvent$(null, "get_rollback", !0);
      return{$i$:this.$_getIndex$(), $h$:this.$_$container$.children("ul").clone(!0), $d$:this.data};
    }, $_load_node_tree$:function($obj$$89$$, $s_call$$3$$) {
      var $d$$11_rslt$$6$$ = this.$_JsonDSToJson$($obj$$89$$ && -1 != $obj$$89$$ ? $obj$$89$$[0].id : $obj$$89$$ ? $obj$$89$$ : -1, $obj$$89$$);
      if ($d$$11_rslt$$6$$.success && $d$$11_rslt$$6$$.$js$) {
        var $$u_bTree$$1$$ = !$obj$$89$$ || -1 === $obj$$89$$, $s$$18$$ = this.options.data;
        if ($s$$18$$.data && !$s$$18$$.ajax || $s$$18$$.data && $s$$18$$.ajax && $$u_bTree$$1$$) {
          $$u_bTree$$1$$ && (($d$$11_rslt$$6$$ = this.$_parseJson$($d$$11_rslt$$6$$.$js$, $obj$$89$$)) ? (this.$_$container_ul$.empty().append($d$$11_rslt$$6$$.children()), this.$_cleanNode$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty()), $s_call$$3$$ && $s_call$$3$$.call(this);
        } else {
          if (!$s$$18$$.data && $s$$18$$.ajax || $s$$18$$.data && $s$$18$$.ajax && !$$u_bTree$$1$$) {
            ($d$$11_rslt$$6$$ = this.$_parseJson$($d$$11_rslt$$6$$.$js$, $obj$$89$$)) ? ($$u_bTree$$1$$ ? ($$u_bTree$$1$$ = this.$_$container_ul$, $$u_bTree$$1$$.empty().append($d$$11_rslt$$6$$.children()), $$u_bTree$$1$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u_bTree$$1$$.attr("aria-multiselectable", !0)) : ($obj$$89$$.append($d$$11_rslt$$6$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$89$$.removeData("oj-tree-is-loading")), 
            this.$_cleanNode$($obj$$89$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : $$u_bTree$$1$$ ? this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$3$$ && $s_call$$3$$.call(this)) : ($obj$$89$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$89$$.removeData("oj-tree-is-loading"), $s$$18$$.correct_state && (this.$_correct_state$($obj$$89$$), $s_call$$3$$ && $s_call$$3$$.call(this)));
          }
        }
      }
    }, $_JsonDSToJson$:function($parentKey$$14$$, $node$$176$$) {
      var $arJson$$ = [], $ds$$ = this.$_tds$, $cc$$, $range$$22$$ = {}, $rslt$$7$$ = {success:!1, $js$:null};
      -1 == $parentKey$$14$$ && ($parentKey$$14$$ = null, $range$$22$$.start = 0);
      $cc$$ = $ds$$.$getChildCount$($parentKey$$14$$);
      0 < $cc$$ && ($range$$22$$.count = $cc$$, $ds$$.$fetchChildren$($parentKey$$14$$, $range$$22$$, {success:$$$$72$$.proxy(function($jns$$) {
        for (var $c$$53$$ = $jns$$.$getCount$(), $attr$$20_n$$33_r$$7$$, $i$$472$$ = 0;$i$$472$$ < $c$$53$$;$i$$472$$++) {
          $node$$176$$ = {};
          ($attr$$20_n$$33_r$$7$$ = $jns$$.getData($i$$472$$)) && ($node$$176$$.attr = $attr$$20_n$$33_r$$7$$);
          $node$$176$$.title = $jns$$.$m_nodes$[$i$$472$$].title;
          $attr$$20_n$$33_r$$7$$.$metadata$ && ($node$$176$$.metadata = $jns$$.$m_nodes$[$i$$472$$].metadata);
          var $key$$189$$ = $node$$176$$.attr.id;
          $attr$$20_n$$33_r$$7$$ = $ds$$.$getChildCount$($key$$189$$);
          0 < $attr$$20_n$$33_r$$7$$ && ($attr$$20_n$$33_r$$7$$ = this.$_JsonDSToJson$($key$$189$$, $node$$176$$), $node$$176$$.children = $attr$$20_n$$33_r$$7$$.$js$);
          $arJson$$.push($node$$176$$);
        }
        $rslt$$7$$.success = !0;
        $rslt$$7$$.$js$ = $arJson$$;
      }, this), error:function() {
        $rslt$$7$$.success = !1;
      }}));
      return $rslt$$7$$;
    }, $_refresh_json$:function($obj$$90$$) {
      $obj$$90$$ = this.$_getNode$($obj$$90$$);
      if (!this.$_data$.$core$.locked) {
        var $bTree$$2$$ = !$obj$$90$$ || -1 !== $obj$$90$$ || !$obj$$90$$.length;
        if ($bTree$$2$$ || !$obj$$90$$.hasClass($TreeUtils$$.$_OJ_DISABLED$)) {
          var $s$$19$$ = this.options.data.json;
          !$bTree$$2$$ && this.$_data$.$ds$.$progressiveUnload$ && ($$$$72$$.isFunction($s$$19$$.data) || $s$$19$$.ajax) && $obj$$90$$.removeData("oj-tree-children");
          return this.$_refresh_ui$($obj$$90$$);
        }
      }
    }, $_loadNodeJson$:function($obj$$91$$, $s_call$$4$$, $e_call$$4$$) {
      function $success_func$$() {
      }
      function $error_func$$() {
      }
      var $d$$12_s$$20$$ = this.$_getOptions$().data, $data$$176$$ = $d$$12_s$$20$$ && $d$$12_s$$20$$.data || null, $ajax$$1$$ = $d$$12_s$$20$$ && $d$$12_s$$20$$.ajax || null;
      !$d$$12_s$$20$$ || $data$$176$$ || $ajax$$1$$ || ($data$$176$$ = $d$$12_s$$20$$);
      if (($obj$$91$$ = this.$_getNode$($obj$$91$$)) && -1 !== $obj$$91$$ && (this.$_data$.$ds$.$progressiveRender$ || this.$_data$.$ds$.$progressiveUnload$) && !$obj$$91$$.is(".oj-expanded, .oj-tree-leaf") && 0 === $obj$$91$$.children("ul").children("li").length && $obj$$91$$.data("oj-tree-children")) {
        if ($d$$12_s$$20$$ = this.$_parseJson$($obj$$91$$.data("oj-tree-children"), $obj$$91$$)) {
          $obj$$91$$.append($d$$12_s$$20$$), this.$_data$.$ds$.$progressiveUnload$ || $obj$$91$$.removeData("oj-tree-children");
        }
        this.$_cleanNode$($obj$$91$$);
        $s_call$$4$$ && $s_call$$4$$.call(this);
      } else {
        if ($obj$$91$$ && -1 !== $obj$$91$$) {
          if ($obj$$91$$.data("oj-tree-is-loading")) {
            return;
          }
          $obj$$91$$.data("oj-tree-is-loading", !0);
        }
        switch(!0) {
          case !$data$$176$$ && !$ajax$$1$$:
            throw "ojTree - neither data nor ajax settings supplied.";;
          case $$$$72$$.isFunction($data$$176$$):
            $data$$176$$.call(this, $obj$$91$$, $$$$72$$.proxy(function($d$$13$$) {
              ($d$$13$$ = this.$_parseJson$($d$$13$$, $obj$$91$$)) ? (-1 !== $obj$$91$$ && $obj$$91$$ ? ($obj$$91$$.append($d$$13$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$91$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($d$$13$$.children()), this.$_cleanNode$($obj$$91$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : (-1 !== $obj$$91$$ && $obj$$91$$ ? ($obj$$91$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$91$$.removeData("oj-tree-is-loading"), 
              this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$91$$)) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty(), $e_call$$4$$ && $e_call$$4$$.call(this));
            }, this));
            break;
          case !!$data$$176$$ && !$ajax$$1$$ || !!$data$$176$$ && !!$ajax$$1$$ && (!$obj$$91$$ || -1 === $obj$$91$$):
            $obj$$91$$ && -1 != $obj$$91$$ || (($d$$12_s$$20$$ = this.$_parseJson$($data$$176$$, $obj$$91$$)) ? (this.$_$container_ul$.empty().append($d$$12_s$$20$$.children()), this.$_cleanNode$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty());
            $s_call$$4$$ && $s_call$$4$$.call(this);
            break;
          case !$data$$176$$ && !!$ajax$$1$$ || !!$data$$176$$ && !!$ajax$$1$$ && $obj$$91$$ && -1 !== $obj$$91$$:
            $error_func$$ = function $$error_func$$$($x$$57$$, $status$$32$$, $e$$123$$) {
              var $ef$$ = this.$_getOptions$().data.ajax.error;
              $ef$$ && $ef$$.call(this, $status$$32$$, $e$$123$$, $x$$57$$);
              -1 != $obj$$91$$ && $obj$$91$$.length ? ($obj$$91$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$91$$.removeData("oj-tree-is-loading"), "success" === $status$$32$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$91$$)) : ("error" == $status$$32$$ || "success" === $status$$32$$ && this.$_data$.$ds$.$correctState$) && this.$_$container_ul$.empty();
              $e_call$$4$$ && $e_call$$4$$.call(this);
            }, $success_func$$ = function $$success_func$$$($d$$14$$, $status$$33_tempd$$, $$u$$1_x$$58$$) {
              var $sf$$ = this.$_getOptions$().data.ajax.success;
              $sf$$ && ($d$$14$$ = $sf$$.call(this, $d$$14$$, $status$$33_tempd$$, $$u$$1_x$$58$$) || $d$$14$$);
              if ("string" == typeof $d$$14$$) {
                $status$$33_tempd$$ = $d$$14$$.replace(/^[\s\n]+$/, "");
                try {
                  $status$$33_tempd$$ = $$$$72$$.parseJSON($status$$33_tempd$$);
                } catch ($err$$26$$) {
                  $status$$33_tempd$$ = null;
                }
                if (!$status$$33_tempd$$) {
                  return $error_func$$.call(this, $$u$$1_x$$58$$, "Bad JSON", "");
                }
              }
              ($d$$14$$ = this.$_parseJson$($d$$14$$, $obj$$91$$)) ? (-1 !== $obj$$91$$ && $obj$$91$$ ? ($obj$$91$$.append($d$$14$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$91$$.removeData("oj-tree-is-loading")) : ($$u$$1_x$$58$$ = this.$_$container_ul$, $$u$$1_x$$58$$.empty().append($d$$14$$.children()), $$u$$1_x$$58$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u$$1_x$$58$$.attr("aria-multiselectable", 
              !0)), this.$_cleanNode$($obj$$91$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : -1 !== $obj$$91$$ && $obj$$91$$ ? ($obj$$91$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$91$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$91$$), $s_call$$4$$ && $s_call$$4$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$4$$ && $s_call$$4$$.call(this));
            }, $d$$12_s$$20$$.ajax.context = this, $d$$12_s$$20$$.ajax.error = $error_func$$, $d$$12_s$$20$$.ajax.success = $success_func$$, $d$$12_s$$20$$.dataType || ($d$$12_s$$20$$.ajax.dataType = "json"), $$$$72$$.isFunction($d$$12_s$$20$$.ajax.url) && ($d$$12_s$$20$$.ajax.url = $d$$12_s$$20$$.ajax.url.call(this, $obj$$91$$)), $$$$72$$.isFunction($d$$12_s$$20$$.ajax.data) && ($d$$12_s$$20$$.ajax.data = $d$$12_s$$20$$.ajax.data.call(this, $obj$$91$$)), $$$$72$$.ajax($d$$12_s$$20$$.ajax);
        }
      }
    }, $_parseJson$:function($js$$1$$, $obj$$92_ul2$$, $isRecurse_ul1$$) {
      var $d$$15$$ = !1, $tmp$$5$$, $i$$473$$, $j$$47$$, $title$$12$$;
      if (!$js$$1$$) {
        return $d$$15$$;
      }
      this.$_data$.$ds$.$progressiveUnload$ && $obj$$92_ul2$$ && -1 !== $obj$$92_ul2$$ && $obj$$92_ul2$$.data("oj-tree-children", $d$$15$$);
      if ("string" == typeof $js$$1$$) {
        try {
          $js$$1$$ = $$$$72$$.parseJSON($js$$1$$);
        } catch ($err$$27$$) {
          $js$$1$$ = [];
        }
      }
      if ($$$$72$$.isArray($js$$1$$)) {
        $d$$15$$ = $$$$72$$("\x3cul\x3e");
        if (!$js$$1$$.length) {
          return!1;
        }
        $i$$473$$ = 0;
        for ($j$$47$$ = $js$$1$$.length;$i$$473$$ < $j$$47$$;$i$$473$$++) {
          $tmp$$5$$ = this.$_parseJson$($js$$1$$[$i$$473$$], $obj$$92_ul2$$, !0), $tmp$$5$$.length && ($d$$15$$ = $d$$15$$.append($tmp$$5$$));
        }
        $d$$15$$ = $d$$15$$.children();
      } else {
        "string" == typeof $js$$1$$ && ($js$$1$$ = {data:$js$$1$$});
        $title$$12$$ = "string" == typeof $js$$1$$.title ? $js$$1$$.title : " ";
        $d$$15$$ = $$$$72$$("\x3cli role\x3d'treeitem' /\x3e");
        $js$$1$$.attr && (this.$_data$.types.$defType$ && !$js$$1$$.attr.type && ($js$$1$$.attr.type = "oj-tree-deftype", $d$$15$$.addClass("oj-tree-type")), $d$$15$$.attr($js$$1$$.attr));
        $js$$1$$.metadata && $d$$15$$.data($js$$1$$.metadata);
        $js$$1$$.children && 0 === $js$$1$$.children.length && $d$$15$$.addClass($TreeUtils$$.$_OJ_COLLAPSED$);
        $js$$1$$.state && "s" === $js$$1$$.state && $d$$15$$.addClass($TreeUtils$$.$_OJ_SELECTED$);
        $js$$1$$.data || ($js$$1$$.data = {dummy:0});
        var $bIns$$ = !1, $sp$$2$$;
        $tmp$$5$$ = $$$$72$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$72$$.each($js$$1$$.data, function($i$$474$$, $m$$25$$) {
          $$$$72$$.isFunction($m$$25$$) && ($m$$25$$ = $m$$25$$.call(this, $js$$1$$));
          "string" != typeof $m$$25$$ && ("attr" == $i$$474$$ ? $tmp$$5$$.attr($m$$25$$) : "style" == $i$$474$$ && $tmp$$5$$.css($m$$25$$), "language" == $i$$474$$ && $tmp$$5$$.addClass($m$$25$$));
          $bIns$$ || ($sp$$2$$ = $$$$72$$("\x3cspan class\x3d'oj-tree-title'\x3e"), $sp$$2$$[0].textContent = $title$$12$$, $tmp$$5$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-node-icon oj-component-icon'\x3e\x26#160;\x3c/ins\x3e", $sp$$2$$), $bIns$$ = !0);
          !$m$$25$$.icon && $js$$1$$.icon && ($m$$25$$.icon = $js$$1$$.icon);
          $m$$25$$.icon && (-1 === $m$$25$$.icon.indexOf("/") ? $tmp$$5$$.children("ins").addClass($m$$25$$.icon) : $tmp$$5$$.children("ins").css("background", "url('" + $m$$25$$.icon + "') center center no-repeat"));
        });
        $d$$15$$.append($tmp$$5$$);
        $d$$15$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default'\x3e\x26#160;\x3c/ins\x3e");
        $js$$1$$.children && (this.$_data$.$ds$.$progressiveRender$ && "expanded" !== $js$$1$$.state ? $d$$15$$.addClass($TreeUtils$$.$_OJ_COLLAPSED$).attr("aria-expanded", "false").data("oj-tree-children", $js$$1$$.children) : (this.$_data$.$ds$.$progressiveUnload$ && $d$$15$$.data("oj-tree-children", $js$$1$$.children), $$$$72$$.isArray($js$$1$$.children) && $js$$1$$.children.length && ($tmp$$5$$ = this.$_parseJson$($js$$1$$.children, $obj$$92_ul2$$, !0), $tmp$$5$$.length && ($obj$$92_ul2$$ = $$$$72$$("\x3cul role\x3d'group' /\x3e"), 
        $obj$$92_ul2$$.append($tmp$$5$$), $d$$15$$.append($obj$$92_ul2$$)))));
      }
      $isRecurse_ul1$$ || ($isRecurse_ul1$$ = $$$$72$$("\x3cul /\x3e"), $isRecurse_ul1$$.append($d$$15$$), $d$$15$$ = $isRecurse_ul1$$);
      return $d$$15$$;
    }, $__getJson$:function($obj$$93$$, $li_attr$$, $a_attr$$, $isCallback$$) {
      var $result$$83$$ = [], $s$$21$$ = this.options, $_this$$17$$ = this, $tmp1$$, $tmp2$$, $val$$78$$, $li$$3$$, $a$$126$$, $t$$9$$, $sAttr$$, $title$$13$$;
      ($obj$$93$$ = this.$_getNode$($obj$$93$$)) && -1 !== $obj$$93$$ || ($obj$$93$$ = this.$_$container$.find("\x3e ul \x3e li"));
      $li_attr$$ = $$$$72$$.isArray($li_attr$$) ? $li_attr$$ : ["id", "class"];
      !$isCallback$$ && $s$$21$$.types && $li_attr$$.push($s$$21$$.types.attr);
      $a_attr$$ = $$$$72$$.isArray($a_attr$$) ? $a_attr$$ : [];
      $obj$$93$$.each(function() {
        $li$$3$$ = $$$$72$$(this);
        $tmp1$$ = {};
        $li_attr$$.length && ($tmp1$$.attr = {});
        $$$$72$$.each($li_attr$$, function($i$$475$$, $v$$3$$) {
          ($tmp2$$ = $li$$3$$.attr($v$$3$$)) && $tmp2$$.length && $tmp2$$.replace(/oj-tree[^ ]*/ig, "").length && ($tmp2$$ = (" " + $tmp2$$).replace(/ oj-tree[^ ]*/ig, "").replace(/ oj-[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, ""), $tmp2$$.length && ($tmp1$$.attr[$v$$3$$] = $tmp2$$));
        });
        $_this$$17$$.$_getDndContext$().$isDragEnabled$() && $_this$$17$$.isSelected($li$$3$$) && ($tmp1$$.state = "s");
        $val$$78$$ = $li$$3$$.data();
        $isPureObjEmpty$$($val$$78$$) || ($tmp1$$.metadata = $val$$78$$);
        $a$$126$$ = $li$$3$$.children("a");
        $tmp2$$ = null;
        $a$$126$$.each(function() {
          $t$$9$$ = $$$$72$$(this);
          $a_attr$$.length || $t$$9$$.children("ins").get(0).style.backgroundImage.length || $t$$9$$.children("ins").get(0).className && $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").length ? ($title$$13$$ = $_this$$17$$.getText($t$$9$$), $$$$72$$.each($a_attr$$, function($k$$14$$, $z$$2$$) {
            $sAttr$$ = (" " + ($t$$9$$.attr($z$$2$$) || "")).replace(/ oj-tree[^ ]*/ig, "").replace(/ oj-[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "");
            $sAttr$$.length && ($tmp2$$ || ($tmp2$$ = {attr:{}}), $tmp2$$.attr[$z$$2$$] = $sAttr$$);
          }), $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/^\s+$/ig, "").length && ($sAttr$$ = $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/ oj-[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, ""), $sAttr$$.length && ($tmp2$$ || ($tmp2$$ = {}), $tmp2$$.icon = $sAttr$$)), $t$$9$$.children("ins").get(0).style.backgroundImage.length && ($sAttr$$ = $t$$9$$.children("ins").get(0).style.backgroundImage.replace("url(", 
          "").replace(")", ""), $sAttr$$.length && ($tmp2$$ || ($tmp2$$ = {}), $tmp2$$.icon = $sAttr$$))) : $title$$13$$ = $_this$$17$$.getText($t$$9$$);
          null != $tmp2$$ && ($tmp1$$.data || ($tmp1$$.data = []), 1 < $a$$126$$.length ? $tmp1$$.data.push($tmp2$$) : $tmp1$$.data = $tmp2$$);
          $tmp1$$.title = $title$$13$$;
        });
        $li$$3$$ = $li$$3$$.find("\x3e ul \x3e li");
        $li$$3$$.length && ($tmp1$$.children = $_this$$17$$.$__getJson$($li$$3$$, $li_attr$$, $a_attr$$, !0));
        $result$$83$$.push($tmp1$$);
      });
      return $result$$83$$;
    }, $_correct_state$:function($obj$$94$$) {
      $obj$$94$$ = this.$_getNode$($obj$$94$$);
      if (!$obj$$94$$ || -1 === $obj$$94$$) {
        return!1;
      }
      $obj$$94$$.removeClass("oj-collapsed oj-expanded").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
      $obj$$94$$.find("ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").addClass("oj-tree-icon");
      this.$_emitEvent$({obj:$obj$$94$$}, "correct_state", !0);
    }, $_loaded$:function() {
      this.$_emitEvent$(null, "loaded");
    }, $_loadNodeHtml$:function($obj$$95$$, $s_call$$5$$, $e_call$$5$$) {
      function $success_func$$1$$() {
      }
      function $error_func$$1$$() {
      }
      var $d$$16_s$$22$$ = this.$_getOptions$().data, $data$$177$$ = $d$$16_s$$22$$ && $d$$16_s$$22$$.data || null, $ajax$$2$$ = $d$$16_s$$22$$ && $d$$16_s$$22$$.ajax || null;
      if (($obj$$95$$ = this.$_getNode$($obj$$95$$)) && -1 !== $obj$$95$$) {
        if ($obj$$95$$.data("oj-tree-is-loading")) {
          return;
        }
        $obj$$95$$.data("oj-tree-is-loading", !0);
      }
      switch(!0) {
        case !$data$$177$$ && !$ajax$$2$$ && $d$$16_s$$22$$ && "string" === typeof $d$$16_s$$22$$:
          this.$_loadHtmlString$($d$$16_s$$22$$, $obj$$95$$, $s_call$$5$$, $e_call$$5$$);
          break;
        case $$$$72$$.isFunction($data$$177$$):
          $data$$177$$.call(this, $obj$$95$$, $$$$72$$.proxy(function($d$$17$$) {
            this.$_loadHtmlString$($d$$17$$, $obj$$95$$, $s_call$$5$$, $e_call$$5$$);
          }, this));
          break;
        case !$data$$177$$ && !$ajax$$2$$:
          $obj$$95$$ && -1 != $obj$$95$$ || (this.$_$container_ul$.empty().append(this.$_data$.html.$cloneMarkup$).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon' \x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li").children("ins:first-child").addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && this.$_addDefType$(this.$_$container_ul$), this.$_cleanNode$(), 
          this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", -1));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !!$data$$177$$ && !$ajax$$2$$ || !!$data$$177$$ && !!$ajax$$2$$ && (!$obj$$95$$ || -1 === $obj$$95$$):
          $obj$$95$$ && -1 != $obj$$95$$ || ($d$$16_s$$22$$ = $$$$72$$($data$$177$$), $d$$16_s$$22$$.is("ul") || ($d$$16_s$$22$$ = $$$$72$$("\x3cul /\x3e").append($d$$16_s$$22$$)), this.$_$container_ul$.empty().append($d$$16_s$$22$$.children()).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && 
          this.$_addDefType$(this.$_$container_ul$), this.$_cleanNode$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", "-1"));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !$data$$177$$ && !!$ajax$$2$$ || !!$data$$177$$ && !!$ajax$$2$$ && $obj$$95$$ && -1 !== $obj$$95$$:
          $obj$$95$$ = this.$_getNode$($obj$$95$$), $error_func$$1$$ = function $$error_func$$1$$$($x$$59$$, $t$$10$$, $e$$124$$) {
            var $ef$$1$$ = this.$_getOptions$().data.ajax.error;
            $ef$$1$$ && $ef$$1$$.call(this, $x$$59$$, $t$$10$$, $e$$124$$);
            -1 != $obj$$95$$ && $obj$$95$$.length ? ($obj$$95$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$95$$.removeData("oj-tree-is-loading"), "success" === $t$$10$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$95$$)) : "success" === $t$$10$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
            $e_call$$5$$ && $e_call$$5$$.call(this);
          }, $success_func$$1$$ = function $$success_func$$1$$$($d$$18_parent$$54$$, $nodes$$10_t$$11$$, $x$$60$$) {
            var $sf$$1$$ = this.$_getOptions$().data.ajax.success;
            $sf$$1$$ && ($d$$18_parent$$54$$ = $sf$$1$$.call(this, $d$$18_parent$$54$$, $nodes$$10_t$$11$$, $x$$60$$) || $d$$18_parent$$54$$);
            if ("" === $d$$18_parent$$54$$ || $d$$18_parent$$54$$ && $d$$18_parent$$54$$.toString && "" === $d$$18_parent$$54$$.toString().replace(/^[\s\n]+$/, "")) {
              return $error_func$$1$$.call(this, $x$$60$$, $nodes$$10_t$$11$$, "");
            }
            if ($d$$18_parent$$54$$) {
              $d$$18_parent$$54$$ = $$$$72$$($d$$18_parent$$54$$);
              $d$$18_parent$$54$$.is("ul") || ($d$$18_parent$$54$$ = $$$$72$$("\x3cul /\x3e").append($d$$18_parent$$54$$));
              -1 != $obj$$95$$ && $obj$$95$$ ? ($obj$$95$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), this.$_removeEmptyUL$($obj$$95$$), $obj$$95$$.append($d$$18_parent$$54$$).children("ul").find("li, a").filter(function() {
                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
              }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$95$$.removeData("oj-tree-is-loading"), $obj$$95$$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$18_parent$$54$$ = $obj$$95$$) : 
              (this.$_$container_ul$.empty().append($d$$18_parent$$54$$.children()).find("li, a").filter(function() {
                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
              }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$18_parent$$54$$ = this.$_$container_ul$);
              this.$_handleHtmlParentNoChildren$($d$$18_parent$$54$$);
              this.$_insertHtmlTextSpan$($d$$18_parent$$54$$);
              $nodes$$10_t$$11$$ = $d$$18_parent$$54$$.children("UL");
              if (1 <= $nodes$$10_t$$11$$.length) {
                $nodes$$10_t$$11$$ = $nodes$$10_t$$11$$.first().find("span.oj-tree-title");
                var $_this$$18$$ = this;
                $$$$72$$.each($nodes$$10_t$$11$$, function() {
                  this.textContent = $_this$$18$$.$_escapeHtml$(this.textContent);
                });
              }
              this.$_data$.types.$defType$ && $d$$18_parent$$54$$ && this.$_addDefType$(this.$_$container_ul$);
              this.$_cleanNode$($obj$$95$$);
              $s_call$$5$$ && $s_call$$5$$.call(this);
            } else {
              $obj$$95$$ && -1 !== $obj$$95$$ ? ($obj$$95$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$95$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$95$$), $s_call$$5$$ && $s_call$$5$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$5$$ && $s_call$$5$$.call(this)), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem")
              ;
            }
          }, $d$$16_s$$22$$.ajax.context = this, $d$$16_s$$22$$.ajax.error = $error_func$$1$$, $d$$16_s$$22$$.ajax.success = $success_func$$1$$, $d$$16_s$$22$$.ajax.dataType || ($d$$16_s$$22$$.ajax.dataType = "html"), $$$$72$$.isFunction($d$$16_s$$22$$.ajax.url) && ($d$$16_s$$22$$.ajax.url = $d$$16_s$$22$$.ajax.url.call(this, $obj$$95$$)), $$$$72$$.isFunction($d$$16_s$$22$$.ajax.data) && ($d$$16_s$$22$$.ajax.data = $d$$16_s$$22$$.ajax.data.call(this, $obj$$95$$)), $$$$72$$.ajax($d$$16_s$$22$$.ajax);
      }
    }, $_handleHtmlParentNoChildren$:function($lazy$$1_parent$$55$$) {
      $lazy$$1_parent$$55$$ = $lazy$$1_parent$$55$$.find($lazy$$1_parent$$55$$.is("ul") ? "li ul" : "ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      $$$$72$$.each($lazy$$1_parent$$55$$, function() {
        $$$$72$$(this).closest("li").addClass($TreeUtils$$.$_OJ_COLLAPSED$);
      });
    }, $_removeEmptyUL$:function($l$$15_parent$$56$$) {
      $l$$15_parent$$56$$ = $l$$15_parent$$56$$.find("ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      0 < $l$$15_parent$$56$$.length && $l$$15_parent$$56$$.remove();
    }, $_loadHtmlString$:function($nodes$$11_parent$$57_s$$23$$, $obj$$96$$, $s_call$$6$$) {
      if ($nodes$$11_parent$$57_s$$23$$ && "" !== $nodes$$11_parent$$57_s$$23$$ && $nodes$$11_parent$$57_s$$23$$.toString && "" !== $nodes$$11_parent$$57_s$$23$$.toString().replace(/^[\s\n]+$/, "")) {
        $nodes$$11_parent$$57_s$$23$$ = $$$$72$$($nodes$$11_parent$$57_s$$23$$);
        $nodes$$11_parent$$57_s$$23$$.is("ul") || ($nodes$$11_parent$$57_s$$23$$ = $$$$72$$("\x3cul /\x3e").append($nodes$$11_parent$$57_s$$23$$));
        -1 != $obj$$96$$ && $obj$$96$$ ? ($obj$$96$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$96$$.append($nodes$$11_parent$$57_s$$23$$).children("ul").find("li, a").filter(function() {
          return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
        }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$96$$.removeData("oj-tree-is-loading"), $nodes$$11_parent$$57_s$$23$$ = $obj$$96$$, this.$_addDefType$(this.$obj$)) : (this.$_$container_ul$.empty().append($nodes$$11_parent$$57_s$$23$$.children()).find("li, a").filter(function() {
          return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
        }).prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $nodes$$11_parent$$57_s$$23$$ = this.$_$container_ul$, 
        this.$_addDefType$(this.$_$container_ul$));
        $nodes$$11_parent$$57_s$$23$$ && this.$_insertHtmlTextSpan$($nodes$$11_parent$$57_s$$23$$);
        $nodes$$11_parent$$57_s$$23$$ = $nodes$$11_parent$$57_s$$23$$.children("UL");
        if (1 <= $nodes$$11_parent$$57_s$$23$$.length) {
          $nodes$$11_parent$$57_s$$23$$ = $nodes$$11_parent$$57_s$$23$$.first().find("span.oj-tree-title");
          var $_this$$19$$ = this;
          $$$$72$$.each($nodes$$11_parent$$57_s$$23$$, function() {
            this.textContent = $_this$$19$$.$_escapeHtml$(this.textContent);
          });
        }
        this.$_cleanNode$($obj$$96$$);
        $s_call$$6$$ && $s_call$$6$$.call(this);
      } else {
        $obj$$96$$ && -1 !== $obj$$96$$ ? ($obj$$96$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$96$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$96$$), $s_call$$6$$ && $s_call$$6$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$6$$ && $s_call$$6$$.call(this));
      }
    }, $_insertHtmlTextSpan$:function($elem$$172$$) {
      $$$$72$$.each($elem$$172$$.find("li a"), function($i$$476$$, $val$$79$$) {
        var $ih$$ = $val$$79$$.innerHTML, $ih$$ = $ih$$.replace("ins\x3e", "ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e");
        $val$$79$$.innerHTML = $ih$$ + "\x3c/span\x3e";
      });
    }, $_addDefType$:function($obj$$97$$) {
      var $s$$24$$, $typeAttr$$1$$;
      this.$_data$.types.$defType$ && ($typeAttr$$1$$ = ($s$$24$$ = this.options.types) ? $s$$24$$.attr : this.$_data$.types.$defaults$.attr, $$$$72$$.each($obj$$97$$.find("li"), function($i$$477$$, $val$$80$$) {
        $val$$80$$ = $$$$72$$($val$$80$$);
        $val$$80$$.attr($typeAttr$$1$$) || $val$$80$$.attr($typeAttr$$1$$, "oj-tree-deftype").addClass("oj-tree-type");
      }));
    }, $_save_opened$:function() {
      var $_this$$20$$ = this;
      this.$_data$.$core$.$toExpand$ = [];
      this.$_$container_ul$.find("li.oj-expanded").each(function() {
        this.id && $_this$$20$$.$_data$.$core$.$toExpand$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
    }, $_reload_nodes$:function($bIsCallback$$) {
      var $_this$$21$$ = this, $bDone$$ = !0, $current$$25$$ = [], $remaining$$1$$ = [], $n$$34$$, $id$$68$$;
      $bIsCallback$$ || (this.$_data$.$core$.$reopen$ = !1, this.$_data$.$core$.$refreshing$ = !0);
      this.$_isOptExpandAll$() && (this.$_data$.$core$.$toExpand$ = [], this.$_$container_ul$.find("li.oj-collapsed").each(function() {
        $id$$68$$ = "#" + $$$$72$$(this).attr("id");
        $_this$$21$$.isExpanded($id$$68$$) || $_this$$21$$.$_data$.$core$.$toExpand$.push($id$$68$$);
      }));
      this.$_data$.$core$.$toExpand$ = $$$$72$$.map($$$$72$$.makeArray(this.$_data$.$core$.$toExpand$), function($n$$35$$) {
        return "#" + $n$$35$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      this.$_data$.$core$.$toLoad$ = $$$$72$$.map($$$$72$$.makeArray(this.$_data$.$core$.$toLoad$), function($n$$36$$) {
        return "#" + $n$$36$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      this.$_data$.$core$.$toExpand$.length && (this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.concat(this.$_data$.$core$.$toExpand$), this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.reduce(function($a$$127$$, $b$$80$$) {
        0 > $a$$127$$.indexOf($b$$80$$) && $a$$127$$.push($b$$80$$);
        return $a$$127$$;
      }, []));
      this.$_data$.$core$.$toLoad$.length && ($$$$72$$.each(this.$_data$.$core$.$toLoad$, function($i$$478$$, $val$$81$$) {
        if ("#" == $val$$81$$) {
          return!0;
        }
        $n$$34$$ = $_this$$21$$.$_$container$.find($val$$81$$);
        $n$$34$$.length ? $_this$$21$$.isExpanded($val$$81$$) || $current$$25$$.push($val$$81$$) : $remaining$$1$$.push($val$$81$$);
      }), $current$$25$$.length && (this.$_data$.$core$.$toLoad$ = $remaining$$1$$, $$$$72$$.each($current$$25$$, function($i$$479$$, $val$$82$$) {
        $_this$$21$$.$_is_loaded$($val$$82$$) || ($_this$$21$$.$_load_node$($val$$82$$, function() {
          $_this$$21$$.$_reload_nodes$(!0);
        }, function() {
          $_this$$21$$.$_reload_nodes$(!0);
        }), $bDone$$ = !1);
      })));
      this.$_data$.$core$.$toExpand$.length && $$$$72$$.each(this.$_data$.$core$.$toExpand$, function($i$$480$$, $val$$83$$) {
        $_this$$21$$.isExpanded($val$$83$$) || $_this$$21$$.$_expand$($val$$83$$, !1, !0);
      });
      $bDone$$ && (this.$_data$.$core$.$reopen$ && clearTimeout(this.$_data$.$core$.$reopen$), this.$_data$.$core$.$reopen$ = setTimeout(function() {
        $_this$$21$$.$_emitEvent$({}, "reload_nodes", !0);
      }, 50), this.$_data$.$core$.$refreshing$ = !1, this.$_reopen$());
    }, setTheme:function($theme_name$$, $theme_url$$) {
      if (!$theme_name$$) {
        return!1;
      }
      $theme_url$$ || ($theme_url$$ = this.$_data$.$themes$.$_themes$ + $theme_name$$ + "/style.css");
      -1 == $$$$72$$.inArray($theme_url$$, this.$_data$.$themes$.$themes_loaded$) && ($_addSheet$$({url:$theme_url$$}), this.$_data$.$themes$.$themes_loaded$.push($theme_url$$));
      this.$_data$.$themes$.$theme$ != $theme_name$$ && (this.$_$container$.removeClass("oj-tree-" + this.$_data$.$themes$.$theme$), this.$_data$.$themes$.$theme$ = $theme_name$$);
      this.$_$container$.addClass("oj-tree-" + $theme_name$$);
      this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
      this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
    }, $_isTheme$:function() {
      return null != this.$_data$.$themes$;
    }, $_getTheme$:function() {
      return this.$_data$.$themes$.$theme$;
    }, isIcons:function() {
      return this.$_data$.$themes$.icons;
    }, $_showIcons$:function() {
      this.$_data$.$themes$.icons = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-icons");
    }, $_hideIcons$:function() {
      this.$_data$.$themes$.icons = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-icons");
    }, toggleIcons:function() {
    }, $_enableKeys$:function() {
      this.$_data$.keys.$enabled$ = !0;
    }, $_initTree$:function() {
      this.$_initData$();
      this.$_initCoreOpts$();
      this.$_initDSOpts$(!0);
      this.$_initTypeOpts$();
      this.$_getDndContext$().$initDnDOpts$();
      this.$_initCore$();
      this.$_initUI$();
      this.$_initThemes$();
      this.$_initDataSource$();
      this.$_initTypes$();
      this.$_getDndContext$().$initDnD$();
      this.$_initMenu$();
    }, $_emitEvent$:function($data$$178$$, $evname$$, $bInternal$$) {
      if ($evname$$ && "string" === $$$$72$$.type($evname$$) && (!0 !== this.$_data$.$core$.locked || "unlock" === $evname$$ || "isLocked" === $evname$$ || "lock" === $evname$$)) {
        var $func$$12_inst$$, $args$$23_bContinue$$ = Array.prototype.slice.call(arguments);
        $func$$12_inst$$ = this.$_$container$;
        var $isBefore$$ = "before" === $evname$$, $isPublic$$ = $bInternal$$ ? !1 : !0;
        $isPublic$$ || ($evname$$ = "_tree" + $evname$$);
        var $eventdata$$ = {};
        $eventdata$$.item = $data$$178$$ ? $data$$178$$.obj : void 0;
        $eventdata$$.inst = $func$$12_inst$$;
        $isBefore$$ ? ($func$$12_inst$$ = $data$$178$$.func, $eventdata$$.func = $func$$12_inst$$, $eventdata$$.args = $args$$23_bContinue$$, "rename" === $func$$12_inst$$ && ($eventdata$$.title = $data$$178$$.title, $eventdata$$.prevTitle = $data$$178$$.prevTitle)) : $isPublic$$ && ("move" == $evname$$ ? ($eventdata$$.position = $data$$178$$.$p$, $eventdata$$.reference = $data$$178$$.$r$, $eventdata$$.data = $data$$178$$) : "rename" == $evname$$ ? ($eventdata$$.title = $data$$178$$.title, $eventdata$$.prevTitle = 
        $data$$178$$.prevTitle) : "remove" == $evname$$ ? ($eventdata$$.parent = $data$$178$$.parent, $eventdata$$.prev = $data$$178$$.prev) : "delete" == $evname$$ ? ($eventdata$$.prev = $data$$178$$.prev, $eventdata$$.parent = $data$$178$$.parent) : "expandAll" === $evname$$ || "collapseAll" === $evname$$ || "deselectAll" === $evname$$ ? $eventdata$$.targ = $data$$178$$.targ : "loaded" === $evname$$ && ($eventdata$$.item = -1));
        if ($isPublic$$) {
          if ($args$$23_bContinue$$ = this._trigger($evname$$, new $$$$72$$.Event("oj" + $evname$$), $eventdata$$), $isBefore$$) {
            return "undefined" != typeof $args$$23_bContinue$$ && ($args$$23_bContinue$$ = $args$$23_bContinue$$ ? !0 : !1), $args$$23_bContinue$$;
          }
        } else {
          this.$_$container$.trigger($evname$$, $eventdata$$);
        }
      }
    }, $_fireOptionChangeEvent$:function($key$$190$$, $prevVal$$, $newVal$$6$$, $origEvent$$) {
      "selection" === $key$$190$$ && (null == $newVal$$6$$ && ($newVal$$6$$ = this.$_getSelected$()), this.$_compareSelectionValues$($prevVal$$, $newVal$$6$$) || this.option($key$$190$$, $newVal$$6$$, {_context:{originalEvent:$origEvent$$, $internalSet$:!0}, changed:!0}));
    }, $__rollback$:function() {
      return this.get_rollback();
    }, $_start$:function() {
      this.$_isRtl$ && this.$_$container$.addClass("oj-tree-rtl").css("direction", "rtl");
      this.$_$container$.html("\x3cul role\x3d'tree' tabindex\x3d'0' class\x3d'oj-tree-list' style\x3d'outline:none'" + (-1 === this.$_data$.$core$.$selectMode$ ? " aria-multiselectable\x3d'true'" : "") + "\x3e\x3cli class\x3d'oj-tree-last oj-tree-leaf'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e\x3ca class\x3d'oj-tree-loading' href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e" + this.$_getString$("stateLoading") + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e");
      this.$_$container_ul$ = this.$_$container$.children("ul:eq(0)");
      this.$_$container$.data("oj-tree-instance-id", this.$_getIndex$());
      this.$_data$.$core$.$li_height$ = this.$_$container_ul$.find("li.oj-collapsed, li.oj-tree-leaf").eq(0).height() || 18;
      this.$_isTouch$ && this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "touchend.ojtree", $$$$72$$.proxy(function($event$$661_trgt$$) {
        $event$$661_trgt$$.preventDefault();
        $event$$661_trgt$$ = $$$$72$$($event$$661_trgt$$.target);
        this.toggleExpand($event$$661_trgt$$);
      }, this));
      this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "click.ojtree", $$$$72$$.proxy(function($event$$662_trgt$$1$$) {
        $event$$662_trgt$$1$$ = $$$$72$$($event$$662_trgt$$1$$.target);
        this.toggleExpand($event$$662_trgt$$1$$);
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mousedown", $$$$72$$.proxy(function($event$$663$$) {
        this.$_data$.ui.$disclosureClick$ = !0;
        $$$$72$$($event$$663$$.target).removeClass("oj-default").removeClass($TreeUtils$$.$_OJ_HOVER$).addClass($TreeUtils$$.$_OJ_SELECTED$);
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mouseup", $$$$72$$.proxy(function($event$$664$$) {
        $$$$72$$($event$$664$$.target).removeClass($TreeUtils$$.$_OJ_SELECTED$).addClass("oj-default");
      }, this)).bind("mousedown.ojtree", $$$$72$$.proxy(function() {
        this.$_setFocus$();
      }, this)).bind("dblclick.ojtree", function() {
        var $sel$$3$$;
        if (document.selection && document.selection.empty) {
          document.selection.empty();
        } else {
          if (window.getSelection) {
            $sel$$3$$ = window.getSelection();
            try {
              $sel$$3$$.removeAllRanges(), $sel$$3$$.collapse(document.getElementsByTagName("body")[0], 0);
            } catch ($err$$28$$) {
            }
          }
        }
      });
      this.$_$container_ul$.focus($$$$72$$.proxy(function() {
        if (this.$_data$.ui.$disclosureClick$) {
          this.$_data$.ui.$disclosureClick$ = !1;
        } else {
          this.$_data$.ui.$focused$ = !0;
          var $n$$37$$;
          this.$_data$.ui.$lastHovered$ ? (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastHovered$, $n$$37$$ = this.$_data$.ui.$hovered$) : this.$_data$.ui.$lastSelected$ && 0 < this.$_data$.ui.$lastSelected$.length ? (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastSelected$, $n$$37$$ = this.$_data$.ui.$hovered$) : $n$$37$$ = this.$_$container_ul$.find("li:first");
          $n$$37$$ && (this.hover($n$$37$$), this.$_data$.ui.$lastHovered$ = null, this.$_$container_ul$.find("a.oj-selected").removeClass("oj-tree-inactive"));
        }
      }, this)).blur($$$$72$$.proxy(function() {
        this.$_data$.ui.$focused$ = !1;
        this.$_data$.ui.$lastHovered$ = this.$_data$.ui.$hovered$;
        this.$_data$.ui.$lastHovered$ && this.dehover(this.$_data$.ui.$hovered$);
        this.$_$container_ul$.find("a.oj-selected").addClass("oj-tree-inactive");
      }, this));
      this.$_emitEvent$({}, "init", !0);
      this.$_loadNodes$();
      this.$_data$.menu.$usermenu$ && this.$_applyMenu$();
      $_addKeyFilter$$({$_handler$:this.$_keyHandler$, $_selector$:this.$_$container_ul$, $_this$:this});
      this.$_enableKeys$();
    }, $_initCore$:function() {
      this.$_data$.$core$.locked = !1;
      this.$_$container$.addClass("oj-tree oj-tree-" + this.$_getIndex$());
      this.$_$container$.css("outline", "none");
      this.$_$container$.css("MozUserSelect", "none");
      this.$_$container$.css("WebkitTouchCallout", "none");
      this.$_$container$.css("WebkitUserSelect", "none");
      this.$_$container$.css("WebkitTapHighlightColor", "rgba(0,0,0,0)");
    }, $_initUI$:function() {
      this.$_data$.ui.selected = $$$$72$$();
      this.$_data$.ui.$lastSelected$ = !1;
      this.$_data$.ui.$hovered$ = null;
      var $a$$128$$ = this.options.selection;
      $a$$128$$ && "array" === $$$$72$$.type($a$$128$$) && 0 < $a$$128$$.length && (this.$_data$.ui.$to_select$ = $a$$128$$, this.options.selection = []);
      this.$_isTouch$ && this.$_$container$.delegate(".oj-tree-list a", "touchend.ojtree", $$$$72$$.proxy(function($event$$666$$) {
        this.$_data$.ui.$touchEvent$ = !0;
        this.$_handleNodeTapClick$($event$$666$$);
        $$$$72$$($event$$666$$.currentTarget).hasClass("oj-tree-loading") || this.dehover();
      }, this));
      this.$_$container$.delegate(".oj-tree-list a", "click.ojtree", $$$$72$$.proxy(function($event$$667$$) {
        this.$_data$.ui.$touchEvent$ = !1;
        this.$_handleNodeTapClick$($event$$667$$);
      }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$72$$.proxy(function($event$$668$$) {
        $$$$72$$($event$$668$$.currentTarget).hasClass("oj-tree-loading") || this.hover($event$$668$$.target);
      }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$72$$.proxy(function($event$$669$$) {
        $$$$72$$($event$$669$$.currentTarget).hasClass("oj-tree-loading") || this.dehover($event$$669$$.target);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseenter.ojtree", $$$$72$$.proxy(function($event$$670$$) {
        $$$$72$$($event$$670$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$670$$.target, !0);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseleave.ojtree", $$$$72$$.proxy(function($event$$671$$) {
        $$$$72$$($event$$671$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$671$$.target, !1);
      }, this)).bind("_treereopen", $$$$72$$.proxy(function() {
        this.reselect();
      }, this)).bind("_treeget_rollback", $$$$72$$.proxy(function() {
        this.dehover();
        this.saveSelected();
      }, this)).bind("ojcollapse", $$$$72$$.proxy(function($event$$672$$, $ui$$44$$) {
        var $obj$$98$$ = this.$_getNode$($ui$$44$$.item), $clk$$ = $obj$$98$$ && $obj$$98$$.length ? $obj$$98$$.children("ul").find("a.oj-selected") : $$$$72$$();
        !1 !== this.options.selectedParentCollapse && $clk$$.length && $clk$$.each(function() {
          this.deselect(this);
          "selectParent" === this.options.selectedParentCollapse && this.select($obj$$98$$);
        });
      }, this)).bind("ojremove", $$$$72$$.proxy(function($event$$673$$, $ui$$45$$) {
        var $s$$25$$ = this.options.selectPrevOnDelete, $clk$$1_obj$$99$$ = this.$_getNode$($ui$$45$$.item), $clk$$1_obj$$99$$ = $clk$$1_obj$$99$$ && $clk$$1_obj$$99$$.length ? $clk$$1_obj$$99$$.find("a.oj-selected") : [], $_this$$23$$ = this, $n$$38$$;
        $clk$$1_obj$$99$$.each(function() {
          $_this$$23$$.deselect(this);
          $_this$$23$$.$_data$.ui.$lastHovered$ && ($n$$38$$ = $_this$$23$$.$_getNode$(this)) && $_this$$23$$.$_data$.ui.$lastHovered$.attr("id") == $n$$38$$.attr("id") && ($_this$$23$$.$_data$.ui.$lastHovered$ = null);
        });
        $s$$25$$ && $clk$$1_obj$$99$$.length && $ui$$45$$.prev && $ui$$45$$.prev.each(function() {
          if (this.parentNode) {
            return $_this$$23$$.select(this), !1;
          }
        });
      }, this)).bind("ojmove", $$$$72$$.proxy(function($event$$674$$, $ui$$46$$) {
        var $data$$179$$ = $ui$$46$$.data, $copy$$1_p$$12$$ = $data$$179$$.$cy$;
        $copy$$1_p$$12$$ && $data$$179$$.$oc$ && ($data$$179$$.$oc$.find("a.oj-selected").removeClass($TreeUtils$$.$_OJ_SELECTED$), $data$$179$$.$oc$.removeAttr("aria-selected"));
        $data$$179$$.$ot$ === $data$$179$$.$rt$ || $copy$$1_p$$12$$ || ($copy$$1_p$$12$$ = $data$$179$$.$ot$.$_data$.ui, $copy$$1_p$$12$$.$lastHovered$ && ($data$$179$$.$o$.attr("id") == $copy$$1_p$$12$$.$lastHovered$.attr("id") && ($copy$$1_p$$12$$.$lastHovered$ = null), $copy$$1_p$$12$$.$lastSelected$ && $data$$179$$.$o$.attr("id") == $copy$$1_p$$12$$.$lastSelected$.attr("id") && ($copy$$1_p$$12$$.$lastSelected$ = null)));
      }, this));
    }, $_initDataSource$:function() {
      this.$_initTreeData$();
      this.$_initJsonData$();
      this.$_initHtmlData$();
    }, $_initTreeData$:function() {
      1 === this.$_data$.$ds$.type && (this.$_tds$ = this.options.data || null, this.$_load_node$ = this.$_load_node_DS$, this.$_is_loaded$ = this.$_is_loaded_DS$, this.$_refresh$ = this.$_refresh_DS$);
    }, $_initJsonData$:function() {
      3 === this.$_data$.$ds$.type && (this.$_data$.$ds$.$progressiveUnload$ && this.$_$container$.bind("_treeafter_close", function($e$$127$$, $ui$$47$$) {
        $ui$$47$$.item.children("ul").remove();
      }), this.$_load_node$ = this.$_load_node_J$, this.$_is_loaded$ = this.$_is_loaded_J$, this.$_refresh$ = this.$_refresh_json$);
    }, $_initHtmlData$:function() {
      4 === this.$_data$.$ds$.type && (this.$_processExistingMarkup$(), this.$_load_node$ = this.$_load_node_H$, this.$_is_loaded$ = this.$_is_loaded_H$, this.$_refresh$ = this.$_refresh_ui$);
    }, $_processExistingMarkup$:function() {
      this.$_data$.html.$useExistingMarkup$ && (this.$_data$.html.$markup_ul$ || (this.$_data$.html.$markup_ul$ = this.$_$container$.find(" \x3e ul"), this.$_data$.html.$markup_div$ = $$$$72$$("\x3cdiv id\x3d'oj-tree-existing-markup-" + this.$_getIndex$() + "' style\x3d'display:none'\x3e").append(this.$_data$.html.$markup_ul$), this.$_$container$.after(this.$_data$.html.$markup_div$)), this.$_data$.html.$markup$ = this.$_data$.html.$markup_ul$.find(" \x3e li"), this.$_data$.html.$cloneMarkup$ = this.$_data$.html.$markup$.clone(!0), 
      this.$_data$.html.$cloneMarkup$.find("li").addBack().contents().filter(function() {
        return 3 == this.nodeType;
      }).remove());
    }, $_initThemes$:function() {
      !1 === this.$_data$.$themes$.$_themes$ && $$$$72$$("script").each(function() {
        if (this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/)) {
          return this.$_data$.$themes$.$_themes$ = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1;
        }
      });
      !1 === this.$_data$.$themes$.$_themes$ && (this.$_data$.$themes$.$_themes$ = "themes/");
      this.$_$container$.bind("_treeinit", $$$$72$$.proxy(function() {
        var $s$$26$$ = this.options;
        this.$_data$.$themes$.$dots$ = $s$$26$$.dots;
        this.$_data$.$themes$.icons = $s$$26$$.icons;
        this.setTheme(this.$_data$.$themes$.$theme$, this.$_data$.$themes$.url);
      }, this)).bind("ojloaded", $$$$72$$.proxy(function() {
        this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
        this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
      }, this));
    }, $_initTypes$:function() {
      var $s$$27$$ = this.options.types;
      $s$$27$$ && this.$_$container$.bind("_treeinit", $$$$72$$.proxy(function() {
        var $types$$ = $$$$72$$.extend(!0, {}, $s$$27$$.types), $attr$$21$$ = $s$$27$$.attr || this.$_data$.types.$defaults$.attr, $icons_css$$ = "", $_this$$24$$ = this;
        $$$$72$$.each($types$$, function($i$$481$$, $tp$$) {
          $$$$72$$.each($tp$$, function($k$$15$$) {
            /^(maxDepth|maxChildren|icon|validChildren)$/.test($k$$15$$) || $_this$$24$$.$_data$.types.$attachTo$.push($k$$15$$);
          });
          var $ot$$ = typeof $tp$$.icon;
          if ("undefined" === $ot$$) {
            $ot$$ = typeof $tp$$.image;
            if ("boolean" === $ot$$ && !$tp$$.image) {
              $tp$$.image = "ojt$none";
            } else {
              if (!$tp$$.image && !$tp$$.position) {
                return!0;
              }
            }
            $tp$$.icon = {};
            $tp$$.image && ($tp$$.icon.image = $tp$$.image, delete $tp$$.image);
            void 0 !== $tp$$.position && ($tp$$.icon.position = $tp$$.position, delete $tp$$.position);
          }
          if ($tp$$.icon.image || $tp$$.icon.position) {
            "default" == $i$$481$$ ? ($_this$$24$$.$_data$.types.$defType$ = !0, $icons_css$$ += ".oj-tree-" + $_this$$24$$.$_getIndex$() + " .oj-tree-list li.oj-tree-type a \x3e .oj-tree-node-icon { ", $icons_css$$ += $_this$$24$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ", $icons_css$$ += ".oj-tree-" + $_this$$24$$.$_getIndex$() + " .oj-tree-list li[" + $attr$$21$$ + '\x3d"oj-tree-deftype"].oj-tree-type \x3e a ins.oj-tree-node-icon { ') : $tp$$.icon.image && ($icons_css$$ += ".oj-tree-" + 
            $_this$$24$$.$_getIndex$() + " .oj-tree-list li[" + $attr$$21$$ + '\x3d"' + $i$$481$$ + '"].oj-tree-type \x3e a \x3e ins.oj-tree-node-icon { '), $icons_css$$ += $_this$$24$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ";
          }
        });
        "" !== $icons_css$$ && $_addSheet$$({$str$:$icons_css$$, title:"oj-tree-types"});
      }, this)).bind("ojbefore", $$$$72$$.proxy(function($e$$128$$, $data$$180$$) {
        var $d$$19_o$$20_s$$28$$, $ty$$1$$, $func$$13$$ = $data$$180$$.func, $item$$130$$ = $data$$180$$.item;
        if (($d$$19_o$$20_s$$28$$ = ($d$$19_o$$20_s$$28$$ = this.$_data$.types.$defaults$.useData ? this.$_getNode$($item$$130$$) : !1) && -1 !== $d$$19_o$$20_s$$28$$ && $d$$19_o$$20_s$$28$$.length ? $d$$19_o$$20_s$$28$$.data("oj-tree") : !1) && $d$$19_o$$20_s$$28$$.types && !1 === $d$$19_o$$20_s$$28$$[$func$$13$$] || -1 !== $$$$72$$.inArray($func$$13$$, this.$_data$.types.$attachTo$) && $data$$180$$.item && ($data$$180$$.item.tagName || $data$$180$$.item.jquery) && ($d$$19_o$$20_s$$28$$ = this.options.types.types, 
        $ty$$1$$ = this.$_getType$($item$$130$$), ($d$$19_o$$20_s$$28$$[$ty$$1$$] && "undefined" !== typeof $d$$19_o$$20_s$$28$$[$ty$$1$$][$func$$13$$] || $d$$19_o$$20_s$$28$$["default"] && "undefined" !== typeof $d$$19_o$$20_s$$28$$["default"][$func$$13$$]) && !1 === this.$_check$($func$$13$$, $item$$130$$))) {
          return $e$$128$$.stopImmediatePropagation(), !1;
        }
      }, this));
    }, $_addTypeCss$:function($tp$$1$$) {
      var $css$$2$$ = "", $css$$2$$ = "ojt$none" !== $tp$$1$$.icon.image ? $css$$2$$ + (" background-image:url(" + $tp$$1$$.icon.image + "); ") : $css$$2$$ + " background-image:none; ";
      return $css$$2$$ = $tp$$1$$.icon.position ? $css$$2$$ + (" background-position:" + $tp$$1$$.icon.position + "; ") : $css$$2$$ + " background-position:0 0; ";
    }, $_getDndContext$:function() {
      this.$_TreeDndContext$ || (this.$_TreeDndContext$ = new $oj$$79$$.$TreeDndContext$(this));
      return this.$_TreeDndContext$;
    }, $_initKeys$:function() {
    }, $_initMenu$:function($newVal$$7$$) {
      var $$m$$2_menu$$29$$, $dm$$1_t$$12$$;
      $newVal$$7$$ || this.options.contextMenu || ($$m$$2_menu$$29$$ = this.$_$container$.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m$$2_menu$$29$$);
      if ($newVal$$7$$ || this.options.contextMenu) {
        $$m$$2_menu$$29$$ = $newVal$$7$$ || this.options.contextMenu;
        $dm$$1_t$$12$$ = $$$$72$$.type($$m$$2_menu$$29$$);
        if ("function" == $dm$$1_t$$12$$) {
          try {
            $$m$$2_menu$$29$$ = $$m$$2_menu$$29$$();
          } catch ($e$$129$$) {
            $$m$$2_menu$$29$$ = null;
          }
          $dm$$1_t$$12$$ = $$$$72$$.type($$m$$2_menu$$29$$);
        }
        if ("string" === $dm$$1_t$$12$$) {
          if ($$m$$2_menu$$29$$ = $$$$72$$($$m$$2_menu$$29$$)) {
            $$m$$2_menu$$29$$.css("display", "none"), $dm$$1_t$$12$$ = this.$_data$.menu, $dm$$1_t$$12$$.$$container$ = $$m$$2_menu$$29$$, $dm$$1_t$$12$$.$usermenu$ = !0;
          }
          this.$_data$.menu.$usermenu$ && $newVal$$7$$ && this.$_applyMenu$();
        }
      }
    }, $_handleContextMenuSelect$:function($ev$$6$$, $ui$$48$$) {
      if (!$ui$$48$$.inst && this.$_data$.menu.$treeDivId$ == this.$_elemId$.substr(1)) {
        var $id$$69$$ = $ui$$48$$ ? $ui$$48$$.item.attr("id") : void 0;
        "ojtreecopy" === $id$$69$$ ? this.$_crrm_copy$(this.$_data$.menu.$node$) : "ojtreecut" === $id$$69$$ ? this.$_crrm_cut$(this.$_data$.menu.$node$) : "ojtreepaste" === $id$$69$$ ? this.$_crrm_paste$(this.$_data$.menu.$node$) : "ojtreeremove" === $id$$69$$ ? this.isSelected(this.$_data$.menu.$node$) ? this.$_crrm_remove$() : this.$_crrm_remove$(this.$_data$.menu.$node$) : "ojtreerename" === $id$$69$$ ? this.$_crrm_rename$(this.$_data$.menu.$node$) : "ojtreecreate" === $id$$69$$ && this.$_crrm_create$(this.$_data$.menu.$node$);
      }
    }, $_NotifyContextMenuGesture$:function($menu$$30_openOptions$$7$$, $event$$675$$, $eventType$$57$$) {
      var $disabledState$$1_keyboard$$1$$ = "keyboard" === $eventType$$57$$;
      if ("contextmenu" == $event$$675$$.type || $disabledState$$1_keyboard$$1$$ || "touch" == $eventType$$57$$) {
        this.$_data$.menu.$node$ = $disabledState$$1_keyboard$$1$$ ? this.$_data$.ui.$hovered$ : $$$$72$$($event$$675$$.target);
        var $textElem$$ = this.$_data$.menu.$node$.find(".oj-tree-title")[0];
        this.$_data$.menu.$activenode$ = null;
        this.$_data$.menu.$node$ ? (this.$_data$.menu.$treeDivId$ = this.$_data$.menu.$node$.closest("div").attr("id"), $menu$$30_openOptions$$7$$ = {launcher:this.$_$container_ul$}, $disabledState$$1_keyboard$$1$$ && ($menu$$30_openOptions$$7$$.position = {of:$textElem$$}), this.$_data$.menu.$usermenu$ && this.$_data$.menu.$$elemPaste$ && ($disabledState$$1_keyboard$$1$$ = !this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$, !!this.$_data$.menu.$$elemPaste$.hasClass($TreeUtils$$.$_OJ_DISABLED$) != 
        $disabledState$$1_keyboard$$1$$ && ($disabledState$$1_keyboard$$1$$ ? this.$_data$.menu.$$elemPaste$.addClass($TreeUtils$$.$_OJ_DISABLED$) : this.$_data$.menu.$$elemPaste$.removeClass($TreeUtils$$.$_OJ_DISABLED$), this.$_data$.menu.$$container$.ojMenu("refresh"))), this.$_OpenContextMenu$($event$$675$$, $eventType$$57$$, $menu$$30_openOptions$$7$$)) : $event$$675$$.preventDefault();
      }
    }, $_initCoreOpts$:function() {
      var $val$$84$$ = this.options.selectionMode, $val$$84$$ = void 0 == $val$$84$$ ? "single" : $val$$84$$;
      "none" === $val$$84$$ ? $val$$84$$ = 0 : "single" === $val$$84$$ ? $val$$84$$ = 1 : "multiple" === $val$$84$$ && ($val$$84$$ = -1);
      this.$_data$.$core$.$selectMode$ = $val$$84$$;
      this.$_data$.$themes$.icons = this.options.icons;
      this.$_initExpandedOpts$();
      this.$_data$.$core$.$toLoad$ = this.options.initLoaded;
    }, $_initUIOpts$:function() {
    }, $_initDSOpts$:function($bInit$$2$$) {
      var $s$$29$$ = this.options.data, $dt_ot$$1$$;
      this.$_data$.$ds$.type = 0;
      this.$_data$.html.$useExistingMarkup$ = !1;
      this.$_data$.html.$cloneMarkup$ = !1;
      if ($s$$29$$) {
        if ($dt_ot$$1$$ = $$$$72$$.type($s$$29$$), "string" === $dt_ot$$1$$) {
          this.$_isHtml$($s$$29$$) ? this.$_data$.$ds$.type = 4 : this.$_data$.$ds$.type = 3;
        } else {
          if ("array" === $dt_ot$$1$$) {
            this.$_data$.$ds$.type = 3;
          } else {
            if ("object" === $dt_ot$$1$$) {
              try {
                $s$$29$$ instanceof $oj$$79$$.$JsonTreeDataSource$ && (this.$_data$.$ds$.type = 1);
              } catch ($e$$130$$) {
                this.$_data$.$ds$.type = -1;
              }
              if (1 !== this.$_data$.$ds$.type) {
                try {
                  $s$$29$$ instanceof $oj$$79$$.$CollectionTreeDataSource$ && (this.$_data$.$ds$.type = 2);
                } catch ($e$$131$$) {
                  this.$_data$.$ds$.type = -1;
                }
              }
              1 !== this.$_data$.$ds$.type && 2 !== this.$_data$.$ds$.type && ($s$$29$$.data || $s$$29$$.ajax) && (($dt_ot$$1$$ = $s$$29$$.dataType) ? "json" === $dt_ot$$1$$ ? this.$_data$.$ds$.type = 3 : "html" === $dt_ot$$1$$ && (this.$_data$.$ds$.type = 4) : ($s$$29$$.dataType = "json", this.$_data$.$ds$.type = 3));
            }
          }
        }
      }
      $bInit$$2$$ && 0 == this.$_data$.$ds$.type && 0 < this.$_$container$.find("ul").length && (this.$_data$.$ds$.type = 4, this.$_data$.html.$useExistingMarkup$ = !0);
    }, $_initTreeDSOpts$:function() {
    }, $_initJsonOpts$:function() {
    }, $_initHtmlOpts$:function() {
    }, $_initMenuOpts$:function() {
    }, $_initTypeOpts$:function() {
      var $o$$21$$ = this.options.types;
      "object" === typeof $o$$21$$ && this.$_applyDefaults$($o$$21$$, {attr:this.$_data$.types.$defaults$.attr});
    }, $_initExpandedOpts$:function() {
      this.$_data$.$core$.$toExpand$ = this.$_varCopy$(this.options, "initExpanded");
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
    }, $_initData$:function() {
      var $data$$181$$ = this.$_data$;
      $data$$181$$.$core$ = {$initLoaded$:[], $selectMode$:1, $load_open$:!1, $li_height$:0, $toExpand$:!1, $toLoad$:!1, $prepMoveBlk$:{}, $suppressSelectEvent$:!1, $strings$:{}};
      $data$$181$$.ui = {selected:$$$$72$$(), $lastSelected$:!1, $hovered$:null, $lastHovered$:null, $disclosureClick$:!1, $to_select$:null, opacity:1, $spacebar$:!1, $focused$:!1, $animDurDiv$:null, $touchEvent$:!1};
      $data$$181$$.ui.$defaults$ = {selectMultipleModifier:"ctrl", selectRangeModifier:"shift", disableSelectingChildren:!1};
      $data$$181$$.$crrm$ = {};
      $data$$181$$.$crrm$.$cp_nodes$ = !1;
      $data$$181$$.$crrm$.$ct_nodes$ = !1;
      $data$$181$$.$crrm$.$defaults$ = {inputWidthLimit:200, move:{alwaysCopy:!1, openOnMove:!0, defaultPosition:"last", checkMove:function $$data$$181$$$$crrm$$$defaults$$move$checkMove$() {
        return!0;
      }}};
      $data$$181$$.$crrm$.$prepMoveBlk$ = {};
      $data$$181$$.$ds$ = {};
      $data$$181$$.$ds$.$progressiveRender$ = !1;
      $data$$181$$.$ds$.$progressiveUnload$ = !1;
      $data$$181$$.$ds$.$correctState$ = !0;
      $data$$181$$.$ds$.type = 0;
      $data$$181$$.$json$ = {};
      $data$$181$$.$json$.$defaults$ = {data:!1, ajax:!1};
      $data$$181$$.html = {};
      $data$$181$$.html.$defaults$ = {data:!1, ajax:!1};
      $data$$181$$.html.$useExistingMarkup$ = !1;
      $data$$181$$.html.$markup_ul$ = !1;
      $data$$181$$.html.$markup_div$ = !1;
      $data$$181$$.html.$markup$ = !1;
      $data$$181$$.html.$cloneMarkup$ = !1;
      $data$$181$$.$themes$ = {};
      $data$$181$$.$themes$.icons = !0;
      $data$$181$$.$themes$.$dots$ = !1;
      $data$$181$$.$themes$.$theme$ = "default";
      $data$$181$$.$themes$.url = !1;
      $data$$181$$.$themes$.$themes_loaded$ = [];
      $data$$181$$.$themes$.$_themes$ = !1;
      $data$$181$$.types = {};
      $data$$181$$.types.$attachTo$ = [];
      $data$$181$$.types.$defType$ = !1;
      $data$$181$$.types.$defaults$ = {maxChildren:-1, maxDepth:-1, validChildren:"all", useData:!1, attr:"type", types:{"default":{maxChildren:-1, maxDepth:-1, validChildren:"all"}}};
      $data$$181$$.menu = {};
      $data$$181$$.menu.$usermenu$ = !1;
      $data$$181$$.menu.$$container$ = !1;
      $data$$181$$.menu.$$elemPaste$ = !1;
      $data$$181$$.menu.$node$ = !1;
      $data$$181$$.menu.$activenode$ = !1;
      $data$$181$$.keys = {};
      $data$$181$$.keys.$enabled$ = !0;
      $data$$181$$.keys.bound = [];
    }, $_fix_scroll$:function($obj$$100_t$$13$$) {
      var $c$$54$$ = this.$_$container$[0];
      $c$$54$$.scrollHeight > $c$$54$$.offsetHeight && ($obj$$100_t$$13$$ = this.$_getNode$($obj$$100_t$$13$$)) && -1 !== $obj$$100_t$$13$$ && $obj$$100_t$$13$$.length && $obj$$100_t$$13$$.is(":visible") && ($obj$$100_t$$13$$ = $obj$$100_t$$13$$.offset().top - this.$_$container$.offset().top, 0 > $obj$$100_t$$13$$ && ($c$$54$$.scrollTop = $c$$54$$.scrollTop + $obj$$100_t$$13$$ - 1), $obj$$100_t$$13$$ + this.$_data$.$core$.$li_height$ + ($c$$54$$.scrollWidth > $c$$54$$.offsetWidth ? $scrollbar_width$$ : 
      0) > $c$$54$$.offsetHeight && ($c$$54$$.scrollTop += $obj$$100_t$$13$$ - $c$$54$$.offsetHeight + this.$_data$.$core$.$li_height$ + 1 + ($c$$54$$.scrollWidth > $c$$54$$.offsetWidth ? $scrollbar_width$$ : 0)));
    }, $_setFocus$:function() {
    }, $_unsetFocus$:function() {
    }, $_newIndex$:function() {
      return++$_instance$$;
    }, $_getIndex$:function() {
      return this.$_index$;
    }, $_getOptions$:function() {
      return $$$$72$$.extend(!0, {}, this.options);
    }, $_getContainer$:function() {
      return this.$_$container$;
    }, $_getContainerList$:function() {
      return this.$_$container_ul$;
    }, $_keyHandler$:{up:function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "ctrl+up":function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "shift+up":function() {
      this.select(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, down:function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "ctrl+down":function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "shift+down":function() {
      this.select(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, left:function() {
      var $o$$28$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$28$$ && ($o$$28$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? this.collapse($o$$28$$) : this.hover(this.$_getPrev$($o$$28$$)));
      return!1;
    }, "ctrl+left":function() {
      var $o$$29$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$29$$ && ($o$$29$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? this.collapse($o$$29$$) : this.hover(this.$_getPrev$($o$$29$$)));
      return!1;
    }, "shift+left":function() {
      var $o$$30$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$30$$ && ($o$$30$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? this.collapse($o$$30$$) : this.hover(this.$_getPrev$($o$$30$$)));
      return!1;
    }, right:function() {
      var $o$$31$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$31$$ && $o$$31$$.length && ($o$$31$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? this.expand($o$$31$$) : this.hover(this.$_getNext$($o$$31$$)));
      return!1;
    }, "ctrl+right":function() {
      var $o$$32$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$32$$ && $o$$32$$.length && ($o$$32$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? this.expand($o$$32$$) : this.hover(this.$_getNext$($o$$32$$)));
      return!1;
    }, "shift+right":function() {
      var $o$$33$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$33$$ && $o$$33$$.length && ($o$$33$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? this.expand($o$$33$$) : this.hover(this.$_getNext$($o$$33$$)));
      return!1;
    }, space:function() {
      this.$_data$.ui.$hovered$ && (this.$_data$.ui.$spacebar$ = !0, this.$_data$.ui.$hovered$.children("a:eq(0)").click(), this.$_data$.ui.$spacebar$ = !1);
      return!1;
    }, home:function() {
      this.hover(this.$_$container_ul$.find("li:first"));
      return!1;
    }, end:function() {
      var $a$$129$$ = this.$_$container_ul$.find("li.oj-tree-last:visible");
      $a$$129$$ && $a$$129$$.length && this.hover($a$$129$$[$a$$129$$.length - 1]);
      return!1;
    }, "*":function() {
      this.$_$container_ul$.find("a");
      this.$_expandAll$(-1, !1);
      return!1;
    }, "ctrl+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$7$$ = $$$$72$$.Event("click");
        $ev$$7$$.ctrlKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$7$$);
      }
      return!1;
    }, "shift+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$8$$ = $$$$72$$.Event("click");
        $ev$$8$$.shiftKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$8$$);
      }
      return!1;
    }, "shift+home":function($event$$678$$) {
      var $prevSelections$$3$$, $hover$$1$$ = this.$_data$.ui.$hovered$;
      if ($hover$$1$$) {
        var $bContinue$$1$$ = !0, $_this$$25$$ = this, $nodes$$12$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$3$$ = this.options.selection.slice(0);
        $hover$$1$$ = $hover$$1$$[0];
        $$$$72$$.each($nodes$$12$$, function($i$$482$$, $node$$177$$) {
          $node$$177$$ == $hover$$1$$ && ($bContinue$$1$$ = !1);
          $_this$$25$$.$_select$($node$$177$$, !0);
          return $bContinue$$1$$;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$3$$, null, $event$$678$$);
      }
      return!1;
    }, "shift+pgdn":function($event$$679$$) {
      var $prevSelections$$4$$, $hover$$2$$ = this.$_data$.ui.$lastSelected$ || this.$_data$.ui.$hovered$;
      if ($hover$$2$$) {
        var $bFound$$ = !1, $_this$$26$$ = this, $l$$17$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$4$$ = this.options.selection.slice(0);
        $hover$$2$$ = $hover$$2$$[0];
        $$$$72$$.each($l$$17$$, function($i$$483$$, $node$$178$$) {
          $bFound$$ || ($bFound$$ = $node$$178$$ == $hover$$2$$);
          $bFound$$ && !$_this$$26$$.isSelected($node$$178$$) && $_this$$26$$.$_select$($node$$178$$, !0);
          return!0;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$4$$, null, $event$$679$$);
      }
      return!1;
    }, f2:function() {
      this.$_crrm_rename$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$);
      return!1;
    }, del:function() {
      this.remove(this.$_data$.ui.$hovered$ || this.$_getNode$(null));
      return!1;
    }}, $_applyMenu$:function() {
      if (this.$_data$.menu.$usermenu$) {
        var $$menuContainer$$2$$ = this.$_data$.menu.$$container$, $_this$$27$$ = this;
        $$menuContainer$$2$$.on("ojselect", $$$$72$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$1$$ = !1;
        $$menuContainer$$2$$.find("[data-oj-command]").each(function() {
          var $cmd$$2$$;
          0 === $$$$72$$(this).children("a").length && ($cmd$$2$$ = $$$$72$$(this).attr("data-oj-command").split("oj-tree-"), $$$$72$$(this).replaceWith($_this$$27$$.$_buildContextMenuItem$($cmd$$2$$[$cmd$$2$$.length - 1])), $$$$72$$(this).hasClass("oj-menu-divider") && $$$$72$$(this).removeClass("oj-menu-divider").addClass("oj-menu-item"), $bChanged$$1$$ = !0);
        });
        $bChanged$$1$$ && $$menuContainer$$2$$.ojMenu("refresh");
        this.$_data$.menu.$$elemPaste$ = $$menuContainer$$2$$.find("#ojtreepaste");
      }
    }, $_clearMenu$:function() {
      var $um$$ = this.$_data$.menu;
      $um$$.$usermenu$ && ($um$$.$usermenu$ = !1, $um$$.$$container$.off("ojselect"), $um$$.$$container$ = null);
    }, $_buildContextMenuItem$:function($cmd$$3$$) {
      return $$$$72$$(this.$_buildContextMenuListItem$($cmd$$3$$));
    }, $_buildContextMenuListItem$:function($cmd$$4$$) {
      return "\x3cli id\x3d" + $_arMenuCmdMap$$1$$[$cmd$$4$$] + "\x3e" + this.$_buildContextMenuLabel$($cmd$$4$$) + "\x3c/li\x3e";
    }, $_buildContextMenuLabel$:function($cmd$$5$$) {
      return'\x3ca href\x3d"#"\x3e' + this.$_getString$($_arMenuKeyMap$$1$$[$cmd$$5$$]) + "\x3c/a\x3e";
    }, $_crrm_cut$:function($obj$$101$$) {
      $obj$$101$$ = this.$_getNode$($obj$$101$$, !0);
      if (!$obj$$101$$ || !$obj$$101$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$cp_nodes$ = !1;
      this.$_data$.$crrm$.$ct_nodes$ = $obj$$101$$;
      this.$_emitEvent$({obj:$obj$$101$$}, "cut");
    }, $_crrm_copy$:function($obj$$102$$) {
      $obj$$102$$ = this.$_getNode$($obj$$102$$, !0);
      if (!$obj$$102$$ || !$obj$$102$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ = !1;
      this.$_data$.$crrm$.$cp_nodes$ = $obj$$102$$;
      this.$_emitEvent$({obj:$obj$$102$$}, "copy");
    }, $_crrm_paste$:function($obj$$103$$) {
      $obj$$103$$ = this.$_getNode$($obj$$103$$);
      if (!$obj$$103$$ || !$obj$$103$$.length) {
        return!1;
      }
      var $nodes$$13$$ = this.$_data$.$crrm$.$ct_nodes$ ? this.$_data$.$crrm$.$ct_nodes$ : this.$_data$.$crrm$.$cp_nodes$;
      if (!this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$103$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$103$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$cp_nodes$ && this.$_crrm_move_node$(this.$_data$.$crrm$.$cp_nodes$, $obj$$103$$, !1, !0);
      this.$_emitEvent$({obj:$obj$$103$$, nodes:$nodes$$13$$}, "paste");
    }, $_crrm_move_node$:function($obj$$104$$, $ref$$4$$, $position$$52$$, $is_copy$$1$$, $is_prepared$$1$$, $skip_check$$1$$) {
      var $s$$30$$ = this.$_data$.$crrm$.$defaults$.move;
      if (!$is_prepared$$1$$) {
        return "undefined" === typeof $position$$52$$ && ($position$$52$$ = $s$$30$$.defaultPosition), "inside" !== $position$$52$$ || $s$$30$$.defaultPosition.match(/^(before|after)$/) || ($position$$52$$ = $s$$30$$.defaultPosition), this.$_moveNode$($obj$$104$$, $ref$$4$$, $position$$52$$, $is_copy$$1$$, !1, $skip_check$$1$$);
      }
      if (!0 === $s$$30$$.alwaysCopy || "multitree" === $s$$30$$.alwaysCopy && $obj$$104$$.$rt$.$_getIndex$() !== $obj$$104$$.$ot$.$_getIndex$()) {
        $is_copy$$1$$ = !0;
      }
      this.$_moveNode$($obj$$104$$, $ref$$4$$, $position$$52$$, $is_copy$$1$$, !0, $skip_check$$1$$);
    }, $_crrm_remove$:function($obj$$105$$) {
      $obj$$105$$ = this.$_getNode$($obj$$105$$, !0);
      this.$__rollback$();
      this.remove($obj$$105$$);
    }, $_crrm_rename$:function($obj$$106$$) {
      $obj$$106$$ = this.$_getNode$($obj$$106$$);
      this.$__rollback$();
      this.$_crrm_showInput$($obj$$106$$, function() {
      });
    }, $_crrm_showInput$:function($obj$$108$$, $callback$$134$$) {
      $obj$$108$$ = this.$_getNode$($obj$$108$$);
      var $rtl$$4$$ = this.$_isRtl$, $w$$9$$ = this.$_data$.$crrm$.$defaults$.inputWidthLimit, $w1$$ = $obj$$108$$.children("ins").width(), $w2$$ = $obj$$108$$.find("\x3e a:visible \x3e ins").width() * $obj$$108$$.find("\x3e a:visible \x3e ins").length, $t$$15$$ = this.getText($obj$$108$$), $_this$$28$$ = this, $h1$$ = $$$$72$$("\x3cdiv /\x3e", {css:{position:"absolute", top:"-200px", left:$rtl$$4$$ ? "0px" : "-1000px", visibility:"hidden"}}).appendTo("body"), $h2$$ = $obj$$108$$.css("position", 
      "relative").append($$$$72$$("\x3cinput /\x3e", {value:$t$$15$$, "class":"oj-tree-rename-input", css:{padding:"0", border:"1px solid silver", position:"absolute", left:$rtl$$4$$ ? "auto" : $w1$$ + $w2$$ + 4 + "px", right:$rtl$$4$$ ? $w1$$ + $w2$$ + 4 + "px" : "auto", top:"0px", height:this.$_data$.$core$.$li_height$ - 2 + "px", lineHeight:this.$_data$.$core$.$li_height$ - 2 + "px", width:"150px"}, blur:$$$$72$$.proxy(function() {
        var $i$$484$$ = $obj$$108$$.children(".oj-tree-rename-input"), $v$$5$$ = $i$$484$$.val();
        "" === $v$$5$$ && ($v$$5$$ = $t$$15$$);
        $h1$$.remove();
        $i$$484$$.remove();
        this.$_set_text$($obj$$108$$, $t$$15$$);
        this.$_renameNode$($obj$$108$$, $v$$5$$);
        $callback$$134$$.call(this, $obj$$108$$, $v$$5$$, $t$$15$$);
        $obj$$108$$.css("position", "");
      }, this), keyup:function($event$$680_key$$192$$) {
        $event$$680_key$$192$$ = $event$$680_key$$192$$.keyCode || $event$$680_key$$192$$.which;
        if (!$_this$$28$$.$_done$) {
          return $_this$$28$$.$_done$ = !0, !1;
        }
        27 == $event$$680_key$$192$$ ? ($_this$$28$$.$_done$ = !1, this.value = $t$$15$$, this.blur()) : 13 == $event$$680_key$$192$$ ? ($_this$$28$$.$_done$ = !1, this.blur()) : $h2$$.width(Math.min($h1$$.text("pW" + this.value).width(), $w$$9$$));
      }, keypress:function($event$$681$$) {
        if (13 == ($event$$681$$.keyCode || $event$$681$$.which)) {
          return!1;
        }
      }})).children(".oj-tree-rename-input");
      this.$_set_text$($obj$$108$$, "");
      $h1$$.css({fontFamily:$h2$$.css("fontFamily") || "", fontSize:$h2$$.css("fontSize") || "", fontWeight:$h2$$.css("fontWeight") || "", fontStyle:$h2$$.css("fontStyle") || "", fontStretch:$h2$$.css("fontStretch") || "", fontVariant:$h2$$.css("fontVariant") || "", letterSpacing:$h2$$.css("letterSpacing") || "", wordSpacing:$h2$$.css("wordSpacing") || ""});
      $h2$$.width(Math.min($h1$$.text("pW" + $h2$$[0].value).width(), $w$$9$$))[0].select();
    }, $_crrm_create$:function($obj$$109$$, $position$$53$$, $js$$2$$, $callback$$135$$, $skip_rename$$) {
      var $_this$$29$$ = this;
      ($obj$$109$$ = this.$_getNode$($obj$$109$$)) || ($obj$$109$$ = -1);
      this.$__rollback$();
      return this.$_createNode$($obj$$109$$, $position$$53$$, $js$$2$$, function($t$$17$$) {
        var $p$$13$$ = this.$_getParent$($t$$17$$), $pos$$17$$ = $$$$72$$($t$$17$$).index();
        $callback$$135$$ && $callback$$135$$.call(this, $t$$17$$);
        $p$$13$$.length && $p$$13$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) && this.expand($p$$13$$, !1, !0);
        $skip_rename$$ ? $_this$$29$$.$_emitEvent$({obj:$t$$17$$, name:this.getText($t$$17$$), parent:$p$$13$$, position:$pos$$17$$}) : this.$_crrm_showInput$($t$$17$$, function($obj$$110$$, $new_name$$1$$) {
          $_this$$29$$.$_emitEvent$({obj:$obj$$110$$, name:$new_name$$1$$, parent:$p$$13$$, position:$pos$$17$$});
        });
      });
    }, $_isHtml$:function($s$$31$$) {
      var $ret$$68$$ = !1;
      $s$$31$$ && 3 <= $s$$31$$.length && ($s$$31$$ = $s$$31$$.trim(), $ret$$68$$ = "\x3c" === $s$$31$$.charAt(0));
      return $ret$$68$$;
    }, $_applyEmptyText$:function() {
      var $txt$$ = this.options.emptyText;
      "string" !== typeof $txt$$ && ($txt$$ = this.$_getString$("labelNoData"));
      if ($txt$$ && 0 < $txt$$.length) {
        var $$u$$2$$ = this.$_$container_ul$, $$d$$ = $$$$72$$("\x3cli class\x3d'oj-tree-empty'\x3e\x3c/li\x3e");
        $$d$$[0].textContent = $txt$$;
        $$u$$2$$.empty().append($$d$$);
      }
    }, $_processSubId$:function($locator$$66_sNode$$) {
      var $c$$55_i$$485_subId$$69$$, $node$$179$$, $a$$130_sKey$$;
      $a$$130_sKey$$ = null;
      var $ret$$69$$;
      $locator$$66_sNode$$ && ($c$$55_i$$485_subId$$69$$ = $locator$$66_sNode$$.subId);
      if (!$c$$55_i$$485_subId$$69$$) {
        return null;
      }
      $a$$130_sKey$$ = $c$$55_i$$485_subId$$69$$.split("[");
      if (3 === $a$$130_sKey$$.length && ($a$$130_sKey$$[0] = $a$$130_sKey$$[0].trim(), "oj-tree-node" === $a$$130_sKey$$[0] && ($a$$130_sKey$$[1] = $a$$130_sKey$$[1].trim(), $c$$55_i$$485_subId$$69$$ = $a$$130_sKey$$[1].charAt(0), $c$$55_i$$485_subId$$69$$ = $a$$130_sKey$$[1].indexOf($c$$55_i$$485_subId$$69$$, 1), 0 <= $c$$55_i$$485_subId$$69$$ && ($locator$$66_sNode$$ = $a$$130_sKey$$[1].substring(1, $c$$55_i$$485_subId$$69$$).trim(), $a$$130_sKey$$[2] = $a$$130_sKey$$[2].trim(), $c$$55_i$$485_subId$$69$$ = 
      $a$$130_sKey$$[2].charAt(0), $c$$55_i$$485_subId$$69$$ = $a$$130_sKey$$[2].indexOf($c$$55_i$$485_subId$$69$$, 1), 0 <= $c$$55_i$$485_subId$$69$$)))) {
        $a$$130_sKey$$ = $a$$130_sKey$$[2].substring(1, $c$$55_i$$485_subId$$69$$).trim();
        try {
          $node$$179$$ = this.$_getNode$($locator$$66_sNode$$);
        } catch ($e$$132$$) {
          $node$$179$$ = null;
        }
        if ($a$$130_sKey$$ && $node$$179$$ && -1 !== $node$$179$$) {
          switch($a$$130_sKey$$) {
            case "icon":
              this.$_data$.$themes$.icons && ($ret$$69$$ = $node$$179$$.find(" \x3e a \x3e ins:eq(0)"));
              break;
            case "link":
              $ret$$69$$ = $node$$179$$.find(" \x3e a:eq(0)");
              break;
            case "disclosure":
              this.$_isLeaf$($node$$179$$) || ($ret$$69$$ = $node$$179$$.find(" \x3e ins:eq(0)"));
              break;
            case "title":
              $ret$$69$$ = $node$$179$$.find(" \x3e a \x3e span");
          }
        }
      }
      return $ret$$69$$ ? $ret$$69$$.length ? $ret$$69$$[0] : null : null;
    }, $_getSubIdFromNodeElem$:function($elem$$173$$) {
      var $node$$180_type$$113$$ = $elem$$173$$ ? this.$_getNode$($elem$$173$$) : null, $parent$$58_parentType$$, $subid$$ = null;
      $node$$180_type$$113$$ && -1 != $node$$180_type$$113$$ && $node$$180_type$$113$$.length && $node$$180_type$$113$$.hasClass("oj-tree-node") && $elem$$173$$.tagName && $elem$$173$$.parentNode && ($node$$180_type$$113$$ = $elem$$173$$.tagName, $parent$$58_parentType$$ = $elem$$173$$.parentNode, $parent$$58_parentType$$ = $parent$$58_parentType$$.tagName, "SPAN" === $node$$180_type$$113$$ ? $subid$$ = "title" : "A" === $node$$180_type$$113$$ ? $subid$$ = "link" : "INS" === $node$$180_type$$113$$ && 
      ($elem$$173$$ = $$$$72$$($elem$$173$$), "LI" === $parent$$58_parentType$$ && $elem$$173$$.hasClass("oj-tree-disclosure-icon") ? $subid$$ = "disclosure" : "A" === $parent$$58_parentType$$ && $elem$$173$$.hasClass("oj-tree-node-icon") && ($subid$$ = "icon")));
      return $subid$$;
    }, $_hideDots$:function() {
      this.$_data$.$themes$.$dots$ = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-dots");
    }, $_showDots$:function() {
      this.$_data$.$themes$.$dots$ = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-dots");
    }, $_isOptExpandAll$:function() {
      var $s$$32$$ = this.options.initExpanded;
      return $s$$32$$ && "all" == $s$$32$$ || $$$$72$$.isArray($s$$32$$) && $s$$32$$.length && "all" == $s$$32$$[0];
    }, $_getString$:function($key$$194$$) {
      var $oStrings$$ = this.$_data$.$core$.$strings$, $s$$33$$;
      $s$$33$$ = $oStrings$$[$key$$194$$];
      $s$$33$$ || ($s$$33$$ = this.$getTranslatedString$($key$$194$$), $s$$33$$ = this.$_escapeHtml$($s$$33$$), $oStrings$$[$key$$194$$] = $s$$33$$);
      return $s$$33$$;
    }, $_escapeHtml$:function($text$$22$$) {
      var $div$$12$$ = document.createElement("div");
      $$$$72$$($div$$12$$).text($text$$22$$);
      return $div$$12$$.textContent;
    }, $_getNodeHeight$:function() {
      return this.$_data$.$core$.$li_height$;
    }, $_getAnimDuration$:function() {
      var $ret$$70$$ = 0, $span$$3_val$$85$$, $$div_c$$56_s$$34$$;
      window.getComputedStyle && ($$div_c$$56_s$$34$$ = this.$_data$.ui.$animDurDiv$, $$div_c$$56_s$$34$$ || ($$div_c$$56_s$$34$$ = $$$$72$$("\x3cdiv id\x3d'ojtree-comp-animduration'\x3e\x3cspan class\x3d'oj-tree-transition'\x3edummy\x3c/span\x3e\x3c/div\x3e"), this.$_data$.ui.$animDurDiv$ = $$div_c$$56_s$$34$$, $$$$72$$("body").append($$div_c$$56_s$$34$$)), $span$$3_val$$85$$ = $$div_c$$56_s$$34$$[0].childNodes[0], $span$$3_val$$85$$ = window.getComputedStyle($span$$3_val$$85$$), $span$$3_val$$85$$ = 
      $span$$3_val$$85$$.transitionDuration ? $span$$3_val$$85$$.transitionDuration : $span$$3_val$$85$$["-webkit-transition-duration"] ? $span$$3_val$$85$$["-webkit-transition-duration"] : 0, $$div_c$$56_s$$34$$.detach(), "string" == typeof $span$$3_val$$85$$ && 1 < $span$$3_val$$85$$.length && ($$div_c$$56_s$$34$$ = $span$$3_val$$85$$.charAt($span$$3_val$$85$$.length - 1).toLowerCase(), "s" == $$div_c$$56_s$$34$$ ? ($span$$3_val$$85$$ = $span$$3_val$$85$$.substring(0, $span$$3_val$$85$$.length - 
      1), $span$$3_val$$85$$ = parseFloat($span$$3_val$$85$$), isNaN($span$$3_val$$85$$) || ($ret$$70$$ = 1E3 * $span$$3_val$$85$$)) : 2 < $span$$3_val$$85$$.length && ($$div_c$$56_s$$34$$ = $span$$3_val$$85$$.substring($span$$3_val$$85$$.length - 2).toLowerCase(), "ms" == $$div_c$$56_s$$34$$ && ($span$$3_val$$85$$ = parseFloat($span$$3_val$$85$$), isNaN($span$$3_val$$85$$) || ($ret$$70$$ = $span$$3_val$$85$$)))));
      return $ret$$70$$;
    }, $_varCopy$:function($obj$$111$$, $s$$35$$) {
      var $o$$34$$ = {};
      $o$$34$$[$s$$35$$] = $obj$$111$$[$s$$35$$];
      return $$$$72$$.extend(!0, {}, $o$$34$$)[$s$$35$$];
    }, $_trace$:function($s$$36$$) {
      this.$_emitEvent$({obj:{msg:$s$$36$$}}, "trace", !0);
    }});
  })();
  $oj$$79$$.$TreeDndContext$ = function $$oj$$79$$$$TreeDndContext$$($component$$28$$) {
    this.Init($component$$28$$);
  };
  $oj$$79$$.$Object$.$createSubclass$($oj$$79$$.$TreeDndContext$, $oj$$79$$.$Object$, "oj.TreeDndContext");
  $oj$$79$$.$TreeDndContext$.prototype.Init = function $$oj$$79$$$$TreeDndContext$$$Init$($component$$29$$) {
    $oj$$79$$.$TreeDndContext$.$superclass$.Init.call(this);
    this.$component$ = $component$$29$$;
    this.options = $component$$29$$.options;
    this.$_reset$();
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("TreeDndContext.prototype.Init", {Init:$oj$$79$$.$TreeDndContext$.prototype.Init});
  $oj$$79$$.$TreeDndContext$.prototype.$isDragEnabled$ = function $$oj$$79$$$$TreeDndContext$$$$isDragEnabled$$() {
    var $dnd$$ = this.$_dnd$;
    return $dnd$$.reorder || $dnd$$.$dragFromEnabled$;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$isDropEnabled$ = function $$oj$$79$$$$TreeDndContext$$$$isDropEnabled$$() {
    var $dnd$$1$$ = this.$_dnd$;
    return $dnd$$1$$.reorder || $dnd$$1$$.$dropToEnabled$;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$handleDnDOptionChange$ = function $$oj$$79$$$$TreeDndContext$$$$handleDnDOptionChange$$() {
    var $dnd$$2$$ = this.$_dnd$, $cons$$1$$ = $oj$$79$$.$TreeDndContext$, $reorder$$2$$ = $dnd$$2$$.reorder, $dragFromEnabled$$ = $dnd$$2$$.$dragFromEnabled$;
    this.$_dndCleanAll$();
    this.$initDnDOpts$();
    $dnd$$2$$ = this.$_dnd$;
    if ($reorder$$2$$ != $dnd$$2$$.reorder || $dragFromEnabled$$ != $dnd$$2$$.$dragFromEnabled$) {
      $dnd$$2$$.reorder || $dnd$$2$$.$dragFromEnabled$ || this.$component$.$_$container_ul$.find("li").removeClass($cons$$1$$.$_OJ_DRAGGABLE$).removeClass($cons$$1$$.$_OJ_DRAG$).removeClass($cons$$1$$.$_OJ_VALID_DROP$).removeAttr("draggable");
    }
    this.$initDnD$();
  };
  $oj$$79$$.$TreeDndContext$.prototype.$initDnDOpts$ = function $$oj$$79$$$$TreeDndContext$$$$initDnDOpts$$() {
    var $odnd$$ = this.options.dnd, $dnd$$3$$ = this.$_dnd$, $cons$$2$$ = $oj$$79$$.$TreeDndContext$, $bSetDisable_cb$$2$$ = !0, $n$$39_opts$$41$$;
    $dnd$$3$$.reorder = !1;
    "object" != typeof $odnd$$ ? this.options.dnd = {reorder:"disable"} : ($n$$39_opts$$41$$ = $odnd$$[$cons$$2$$.$_DND_REORDER$], "string" === typeof $n$$39_opts$$41$$ && ("enable" === $n$$39_opts$$41$$ ? ($dnd$$3$$.reorder = !0, $bSetDisable_cb$$2$$ = !1) : "disable" == $n$$39_opts$$41$$ && ($bSetDisable_cb$$2$$ = !1)), $bSetDisable_cb$$2$$ && (this.options.dnd.reorder = "disable"), $n$$39_opts$$41$$ = $odnd$$[$cons$$2$$.$_DND_DRAG$], "object" == typeof $n$$39_opts$$41$$ && ($n$$39_opts$$41$$ = 
    $n$$39_opts$$41$$[$cons$$2$$.$_DND_NODE$], "object" == typeof $n$$39_opts$$41$$ && ($bSetDisable_cb$$2$$ = $n$$39_opts$$41$$[$cons$$2$$.$_DND_DRAGSTART_CB$], "function" == typeof $bSetDisable_cb$$2$$ && ($dnd$$3$$.$dragStartCallback$ = $bSetDisable_cb$$2$$, $dnd$$3$$.$dragFromEnabled$ = !0), $bSetDisable_cb$$2$$ = $n$$39_opts$$41$$[$cons$$2$$.$_DND_DRAGDRAG_CB$], "function" == typeof $bSetDisable_cb$$2$$ && ($dnd$$3$$.$dragDragCallback$ = $bSetDisable_cb$$2$$, $dnd$$3$$.$dragFromEnabled$ = !0), 
    $bSetDisable_cb$$2$$ = $n$$39_opts$$41$$[$cons$$2$$.$_DND_DRAGEND_CB$], "function" == typeof $bSetDisable_cb$$2$$ && ($dnd$$3$$.$dragEndCallback$ = $bSetDisable_cb$$2$$, $dnd$$3$$.$dragFromEnabled$ = !0), $bSetDisable_cb$$2$$ = $n$$39_opts$$41$$[$cons$$2$$.$_DND_DATATYPES$], $$$$72$$.isArray($bSetDisable_cb$$2$$) ? ($dnd$$3$$.$dragDataTypes$ = $bSetDisable_cb$$2$$.slice(), $dnd$$3$$.$dragFromEnabled$ = !0) : "string" == typeof $bSetDisable_cb$$2$$ && ($dnd$$3$$.$dragDataTypes$ = [$bSetDisable_cb$$2$$], 
    $dnd$$3$$.$dragFromEnabled$ = !0))), $n$$39_opts$$41$$ = $odnd$$[$cons$$2$$.$_DND_DROP$], "object" == typeof $n$$39_opts$$41$$ && ($n$$39_opts$$41$$ = $n$$39_opts$$41$$[$cons$$2$$.$_DND_NODE$], "object" == typeof $n$$39_opts$$41$$ && ($bSetDisable_cb$$2$$ = $n$$39_opts$$41$$[$cons$$2$$.$_DND_DROPDRAGENTER_CB$], "function" == typeof $bSetDisable_cb$$2$$ && ($dnd$$3$$.$dropDragEnterCallback$ = $bSetDisable_cb$$2$$, $dnd$$3$$.$dropToEnabled$ = !0), $bSetDisable_cb$$2$$ = $n$$39_opts$$41$$[$cons$$2$$.$_DND_DROPDRAGOVER_CB$], 
    "function" == typeof $bSetDisable_cb$$2$$ && ($dnd$$3$$.$dropDragOverCallback$ = $bSetDisable_cb$$2$$, $dnd$$3$$.$dropToEnabled$ = !0), $bSetDisable_cb$$2$$ = $n$$39_opts$$41$$[$cons$$2$$.$_DND_DROPDRAGLEAVE_CB$], "function" == typeof $bSetDisable_cb$$2$$ && ($dnd$$3$$.$dropDragLeaveCallback$ = $bSetDisable_cb$$2$$, $dnd$$3$$.$dropToEnabled$ = !0), $bSetDisable_cb$$2$$ = $n$$39_opts$$41$$[$cons$$2$$.$_DND_DROPDROP_CB$], "function" == typeof $bSetDisable_cb$$2$$ && ($dnd$$3$$.$dropDropCallback$ = 
    $bSetDisable_cb$$2$$, $dnd$$3$$.$dropToEnabled$ = !0), $bSetDisable_cb$$2$$ = $n$$39_opts$$41$$[$cons$$2$$.$_DND_DATATYPES$], $$$$72$$.isArray($bSetDisable_cb$$2$$) ? ($dnd$$3$$.$dropDataTypes$ = $bSetDisable_cb$$2$$.slice(), $dnd$$3$$.$dropToEnabled$ = !0) : "string" == typeof $bSetDisable_cb$$2$$ && ($dnd$$3$$.$dropDataTypes$ = [$bSetDisable_cb$$2$$], $dnd$$3$$.$dropToEnabled$ = !0))), $dnd$$3$$.reorder || ($dnd$$3$$.$dragDataTypes$ || $dnd$$3$$.$dragStartCallback$ || ($dnd$$3$$.$dragFromEnabled$ = 
    !1, $dnd$$3$$.$dragStartCallback$ = $dnd$$3$$.$dragDragCallback$ = $dnd$$3$$.$dragEndCallback$ = $dnd$$3$$.$dragDataTypes$ = null), $dnd$$3$$.$dropDropCallback$ || ($dnd$$3$$.$dropToEnabled$ = !1, $dnd$$3$$.$dropDragEnterCallback$ = $dnd$$3$$.$dropDragOverCallback$ = $dnd$$3$$.$dropDragLeaveCallback$ = $dnd$$3$$.$dropDropCallback$ = $dnd$$3$$.$dropDataTypes$ = null)), $dnd$$3$$.$pureReorder$ = $dnd$$3$$.reorder && !$dnd$$3$$.$dragFromEnabled$);
  };
  $oj$$79$$.$TreeDndContext$.prototype.$initDnD$ = function $$oj$$79$$$$TreeDndContext$$$$initDnD$$() {
    var $dnd$$4$$ = this.$_dnd$, $div$$13_vars$$ = $dnd$$4$$.$vars$, $cons$$3$$ = $oj$$79$$.$TreeDndContext$;
    if ($dnd$$4$$.$dragFromEnabled$ || $dnd$$4$$.$dropToEnabled$ || $dnd$$4$$.reorder) {
      $oj$$79$$.$TreeDndContext$.$_dragMarker$ ? ($div$$13_vars$$.$m$ = $oj$$79$$.$TreeDndContext$.$_dragMarker$, $div$$13_vars$$.$ml$ = $oj$$79$$.$TreeDndContext$.$_dragMarkerLine$) : ($div$$13_vars$$.$m$ = $$$$72$$("\x3cdiv class\x3d'oj-tree-drop-marker'\x3e\x3cspan class\x3d'oj-tree-drop-ptr oj-component-icon'\x3e\x26#160;\x3c/span\x3e\x3c/div\x3e").css("pointer-events", "none").hide().appendTo("body"), $div$$13_vars$$.$ml$ = $$$$72$$("\x3cdiv /\x3e").addClass($cons$$3$$.$_OJT_DROP_MARKER_LINE$).css("pointer-events", 
      "none").hide().appendTo("body"), $oj$$79$$.$TreeDndContext$.$_dragMarker$ = $div$$13_vars$$.$m$, $oj$$79$$.$TreeDndContext$.$_dragMarkerLine$ = $div$$13_vars$$.$ml$);
      $dnd$$4$$.$ml_width$ = $div$$13_vars$$.$ml$.width();
      var $div$$13_vars$$ = this.$component$.element[0], $$ul$$4$$ = $$$$72$$($div$$13_vars$$).children("ul:eq(0)");
      if ($dnd$$4$$.reorder || $dnd$$4$$.$dragFromEnabled$) {
        $dnd$$4$$.$fnDragStart$ = this.$_dragStart$.bind(this), $dnd$$4$$.$fnDragEnd$ = this.$_dragEnd$.bind(this), $$$$72$$($div$$13_vars$$).on("dragstart", $dnd$$4$$.$fnDragStart$), $$$$72$$($div$$13_vars$$).on("dragend", $dnd$$4$$.$fnDragEnd$), $$ul$$4$$.length && $$ul$$4$$.find("li").addClass($cons$$3$$.$_OJ_DRAGGABLE$).addClass($cons$$3$$.$_OJ_DRAG$).addClass($cons$$3$$.$_OJ_VALID_DROP$).attr("draggable", "true");
      }
      if ($dnd$$4$$.reorder || $dnd$$4$$.$dropToEnabled$) {
        $dnd$$4$$.$fnDrag$ = this.$_drag$.bind(this), $dnd$$4$$.$fnDragEnter$ = this.$_dragEnter$.bind(this), $dnd$$4$$.$fnDragOver$ = this.$_dragOver$.bind(this), $dnd$$4$$.$fnDragLeave$ = this.$_dragLeave$.bind(this), $dnd$$4$$.$fnDragDrop$ = this.$_dragDrop$.bind(this), $$$$72$$($div$$13_vars$$).on("drag", $dnd$$4$$.$fnDrag$), $$$$72$$($div$$13_vars$$).on("dragenter", $dnd$$4$$.$fnDragEnter$), $$$$72$$($div$$13_vars$$).on("dragover", $dnd$$4$$.$fnDragOver$), $$$$72$$($div$$13_vars$$).on("dragleave", 
        $dnd$$4$$.$fnDragLeave$), $$$$72$$($div$$13_vars$$).on("drop", $dnd$$4$$.$fnDragDrop$);
      }
    }
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_closedown$ = function $$oj$$79$$$$TreeDndContext$$$$_closedown$$() {
    this.$_dndCleanAll$();
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dragStart$ = function $$oj$$79$$$$TreeDndContext$$$$_dragStart$$($e$$133$$) {
    var $dnd$$5$$, $$nodes_vars$$1$$, $$node$$ = $$$$72$$($e$$133$$.target).closest("li"), $dt$$1$$ = $e$$133$$.originalEvent.dataTransfer, $ret$$71$$;
    $dnd$$5$$ = this.$_dnd$;
    $$nodes_vars$$1$$ = $dnd$$5$$.$vars$;
    $$nodes_vars$$1$$.$o$ = null;
    $$nodes_vars$$1$$.$r$ = null;
    $dnd$$5$$.$nodeLastEnter$ = null;
    $dnd$$5$$.$nodeLastLeft$ = null;
    $dnd$$5$$.$nodeDraggedId$ = null;
    $dnd$$5$$.$dragStarted$ = !1;
    if (!$dnd$$5$$.reorder && !$dnd$$5$$.$dragFromEnabled$ || $$node$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$component$.$_data$.$core$.locked) {
      $e$$133$$.preventDefault();
    } else {
      $$nodes_vars$$1$$ = this.$component$.isSelected($$node$$) ? this.$component$.$_getNode$(null, !0) : $$nodes_vars$$1$$ = $$node$$;
      ($dnd$$5$$.$dragFromEnabled$ || $dnd$$5$$.$pureReorder$) && this.$_setDataTypes$($dt$$1$$, $$nodes_vars$$1$$);
      if ($dnd$$5$$.$dragStartCallback$) {
        $ret$$71$$ = $dnd$$5$$.$dragStartCallback$($e$$133$$, {item:void 0});
        if ($e$$133$$.isDefaultPrevented() || "boolean" === typeof $ret$$71$$ && !$ret$$71$$) {
          return $ret$$71$$;
        }
        if (!$dnd$$5$$.$dragDataTypes$ && !this.$_checkAddedDataTypes$($dt$$1$$) && !$dnd$$5$$.reorder) {
          return $e$$133$$.preventDefault(), !1;
        }
      }
      "uninitialized" === $dt$$1$$.effectAllowed && ($dt$$1$$.effectAllowed = $dnd$$5$$.$pureReorder$ ? "move" : $oj$$79$$.$DomUtils$.$isMetaKeyPressed$($e$$133$$) ? "copy" : "move");
      this.$_dndStartDrag$($$nodes_vars$$1$$, $$node$$, $e$$133$$);
    }
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_drag$ = function $$oj$$79$$$$TreeDndContext$$$$_drag$$($e$$134$$) {
    var $dnd$$6$$ = this.$_dnd$;
    $dnd$$6$$.$dragDragCallback$ && $dnd$$6$$.$dragDragCallback$($e$$134$$);
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dragEnter$ = function $$oj$$79$$$$TreeDndContext$$$$_dragEnter$$($e$$135$$) {
    this.$component$.$_$container_ul$[0].firstChild || this.$_addInternalNode$();
    var $$targ$$1$$ = $$$$72$$($e$$135$$.target), $$node$$1$$ = this.$component$.$_getNode$($$targ$$1$$), $dnd$$7$$ = this.$_dnd$, $vars$$2$$ = $dnd$$7$$.$vars$, $bNode$$1$$ = $$node$$1$$ && 0 < $$node$$1$$.length && $$node$$1$$.hasClass("oj-tree-node"), $dt$$2$$ = $e$$135$$.originalEvent.dataTransfer, $cons$$5$$ = $oj$$79$$.$TreeDndContext$, $bForeignTree$$ = !1, $bClean$$ = !1, $ret$$72$$;
    $bNode$$1$$ && $$node$$1$$.hasClass($TreeUtils$$.$_OJ_TEMPNODE$) && ($dnd$$7$$.$bInternalNode$ = !0);
    if (!$bNode$$1$$ || "UL" != $e$$135$$.target.tagName || "group" != $e$$135$$.target.getAttribute("role")) {
      if ($dnd$$7$$.$foreign$ = !$dnd$$7$$.$dragStarted$, !$dnd$$7$$.$foreign$ && !$dnd$$7$$.reorder || $dnd$$7$$.$foreign$ && this.$_isDtType$($dt$$2$$, $cons$$5$$.$_DND_INTERNAL_DT_REORDER$)) {
        this.$_dndClean$();
      } else {
        if ($dnd$$7$$.$foreign$ && ($bForeignTree$$ = this.$_isDtType$($dt$$2$$, $cons$$5$$.$_DND_INTERNAL_DT$), !$dnd$$7$$.$dropToEnabled$)) {
          this.$_dndClean$();
          return;
        }
        $vars$$2$$.$r$ = !1;
        $dnd$$7$$.$nodeLastEnter$ && this.$_clearDropClasses$($dnd$$7$$.$nodeLastEnter$);
        $$targ$$1$$.hasClass("oj-tree") && ($$node$$1$$ = $dnd$$7$$.$nodeLastEnter$);
        if (!$$node$$1$$ || !$$node$$1$$.length || $$node$$1$$.attr("id") != $dnd$$7$$.$nodeDraggedId$) {
          $bForeignTree$$ && $bNode$$1$$ && ($dnd$$7$$.$nodeLastEnter$ = null, $vars$$2$$.$o$ = 2);
          $dnd$$7$$.$foreign$ && !$bForeignTree$$ && ($vars$$2$$.$o$ = 1);
          $vars$$2$$.$r$ = $$node$$1$$;
          $dnd$$7$$.$nodeLastEnter$ = $$node$$1$$;
          this.$_dndPlacement$($e$$135$$, $$node$$1$$);
          if (this.$_dndEnter$()) {
            $vars$$2$$.$r$.removeClass($cons$$5$$.$_OJ_INVALID_DROP$).addClass($cons$$5$$.$_OJ_VALID_DROP$).addClass($cons$$5$$.$_OJ_ACTIVE_DROP$);
            $dnd$$7$$.$dropDragEnterCallback$ && ($ret$$72$$ = $dnd$$7$$.$dropDragEnterCallback$($e$$135$$, {item:$dnd$$7$$.$bInternalNode$ ? null : $$node$$1$$, position:$dnd$$7$$.$bInternalNode$ ? "first" : $dnd$$7$$.$place$, reference:$dnd$$7$$.$bInternalNode$ ? null : $vars$$2$$.$r$}));
            if (void 0 === $ret$$72$$) {
              this.$_isDtAcceptDataTypes$($dt$$2$$) ? ($e$$135$$.preventDefault(), $e$$135$$.stopPropagation()) : $bClean$$ = $dnd$$7$$.$foreign$ || !$dnd$$7$$.reorder;
            } else {
              if (!1 === $ret$$72$$ || $e$$135$$.isDefaultPrevented()) {
                $e$$135$$.preventDefault(), $e$$135$$.stopPropagation();
              } else {
                if ($dnd$$7$$.$foreign$ || !$dnd$$7$$.reorder) {
                  $bClean$$ = $dnd$$7$$.$foreign$ || !$dnd$$7$$.reorder;
                }
              }
            }
            $bClean$$ && this.$_dndClean$();
            return $ret$$72$$;
          }
          this.$_clearDropClasses$($vars$$2$$.$r$);
          $vars$$2$$.$r$ = null;
        }
        this.$_dndHideMarker$();
      }
    }
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dragOver$ = function $$oj$$79$$$$TreeDndContext$$$$_dragOver$$($e$$136$$) {
    var $dnd$$8$$ = this.$_dnd$, $vars$$3$$ = $dnd$$8$$.$vars$, $dt$$3$$ = $e$$136$$.originalEvent.dataTransfer, $bClean$$1$$ = !1, $elemId$$2$$, $$node$$2$$, $ret$$73$$;
    if ($vars$$3$$.$r$ && $vars$$3$$.$r$.length && ($$node$$2$$ = $vars$$3$$.$r$, $$node$$2$$.hasClass("oj-tree-node") && ($elemId$$2$$ = $$node$$2$$.attr("id"), $elemId$$2$$ != $dnd$$8$$.$nodeDraggedId$ && (this.$_dndPlacement$($e$$136$$, $$node$$2$$), this.$_dndPrepare$())))) {
      $dnd$$8$$.$dropDragOverCallback$ && ($ret$$73$$ = $dnd$$8$$.$dropDragOverCallback$($e$$136$$, {item:$dnd$$8$$.$bInternalNode$ ? null : $$node$$2$$, reference:$dnd$$8$$.$bInternalNode$ ? null : $vars$$3$$.$r$, position:$dnd$$8$$.$bInternalNode$ ? "first" : $vars$$3$$.$last_pos$}));
      if (void 0 === $ret$$73$$) {
        this.$_isDtAcceptDataTypes$($dt$$3$$) ? ($e$$136$$.preventDefault(), $e$$136$$.stopPropagation()) : $bClean$$1$$ = $dnd$$8$$.$foreign$ || !$dnd$$8$$.reorder;
      } else {
        if (!1 === $ret$$73$$ || $e$$136$$.isDefaultPrevented()) {
          $e$$136$$.preventDefault(), $e$$136$$.stopPropagation();
        } else {
          if ($dnd$$8$$.$foreign$ || !$dnd$$8$$.reorder) {
            $bClean$$1$$ = $dnd$$8$$.$foreign$ || !$dnd$$8$$.reorder;
          }
        }
      }
      $bClean$$1$$ && this.$_dndClean$();
      return $ret$$73$$;
    }
    this.$_dndHideMarker$();
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dragDrop$ = function $$oj$$79$$$$TreeDndContext$$$$_dragDrop$$($e$$137$$) {
    var $dnd$$9$$ = this.$_dnd$, $vars$$4$$ = $dnd$$9$$.$vars$, $veto$$2$$ = !1, $ret$$74$$;
    if ($vars$$4$$.$r$) {
      if ($dnd$$9$$.$dropDropCallback$) {
        $ret$$74$$ = $dnd$$9$$.$dropDropCallback$($e$$137$$, {reference:$dnd$$9$$.$bInternalNode$ ? null : $vars$$4$$.$r$, position:$dnd$$9$$.$bInternalNode$ ? "first" : $vars$$4$$.$last_pos$, reorder:!$dnd$$9$$.$foreign$ && $dnd$$9$$.reorder});
      } else {
        if ($dnd$$9$$.$foreign$ || !$dnd$$9$$.reorder) {
          $veto$$2$$ = !0;
        }
      }
      $veto$$2$$ || $ret$$74$$ && !$e$$137$$.isDefaultPrevented() || this.$_dndFinishReorder$($e$$137$$);
    }
    $dnd$$9$$.$foreign$ && this.$_dndClean$();
    $veto$$2$$ || ($e$$137$$.preventDefault(), $e$$137$$.stopPropagation());
    $dnd$$9$$.$nodeLastLeft$ = null;
    return $ret$$74$$;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dragEnd$ = function $$oj$$79$$$$TreeDndContext$$$$_dragEnd$$($e$$138$$) {
    var $dnd$$10$$ = this.$_dnd$, $vars$$5$$ = $dnd$$10$$.$vars$;
    $dnd$$10$$.$dragEndCallback$ && $dnd$$10$$.$dragEndCallback$($e$$138$$, {reorder:$dnd$$10$$.reorder && !1 === $vars$$5$$.$o$});
    this.$_dndStopDrag$();
    this.$_dndClean$();
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_addInternalNode$ = function $$oj$$79$$$$TreeDndContext$$$$_addInternalNode$$() {
    this.$_internalNode$ || (this.$_internalNode$ = $$$$72$$("\x3cli class\x3d'" + $TreeUtils$$.$_OJ_TEMPNODE$ + " oj-tree-node oj-tree-leaf oj-valid-drop' id\x3d'" + $TreeUtils$$.$_OJ_TEMPNODE$ + "'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e\x3ca href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e"));
    this.$component$.$_$container_ul$.append(this.$_internalNode$);
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dragLeave$ = function $$oj$$79$$$$TreeDndContext$$$$_dragLeave$$($e$$139$$) {
    var $dnd$$11$$ = this.$_dnd$, $vars$$6$$ = $dnd$$11$$.$vars$, $$targ$$2$$ = $$$$72$$($e$$139$$.target), $$node$$3$$ = $$targ$$2$$.closest("li"), $bNode$$2$$ = $$node$$3$$ && 0 < $$node$$3$$.length && $$node$$3$$.hasClass("oj-tree-node");
    $$node$$3$$.attr("id");
    var $dt$$5$$ = $e$$139$$.originalEvent.dataTransfer;
    $dnd$$11$$.$dropDragLeaveCallback$ && $dnd$$11$$.$dropDragLeaveCallback$($e$$139$$, {item:$dnd$$11$$.$bInternalNode$ ? null : $$node$$3$$});
    $$targ$$2$$.hasClass("oj-tree") || !$bNode$$2$$ || "none" == $dt$$5$$.dropEffect ? this.$_dndLeave$($e$$139$$) : $dnd$$11$$.$nodeLastLeft$ = $$node$$3$$;
    $vars$$6$$.$r$ && this.$_clearDropClasses$($vars$$6$$.$r$);
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndEnter$ = function $$oj$$79$$$$TreeDndContext$$$$_dndEnter$$() {
    var $dnd$$12_t$$18$$ = this.$_dnd$, $vars$$7$$ = $dnd$$12_t$$18$$.$vars$, $ret$$76$$;
    $dnd$$12_t$$18$$.$prepared$ = !1;
    $ret$$76$$ = this.$_dndPrepare$();
    var $ms$$1$$ = $dnd$$12_t$$18$$.$openTimeoutMs$;
    $ms$$1$$ && ($dnd$$12_t$$18$$.$openTimer_Id$ && clearTimeout($dnd$$12_t$$18$$.$openTimerId$), $vars$$7$$.$r$ && $vars$$7$$.$r$.length && $vars$$7$$.$r$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) && ($dnd$$12_t$$18$$.$openTimerId$ = setTimeout(this.$_dndOpen$.bind(this), $ms$$1$$)));
    $dnd$$12_t$$18$$ = typeof $ret$$76$$;
    return "boolean" == $dnd$$12_t$$18$$ && $ret$$76$$ || "string" == $dnd$$12_t$$18$$;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndOpen$ = function $$oj$$79$$$$TreeDndContext$$$$_dndOpen$$() {
    var $dnd$$13$$ = this.$_dnd$, $vars$$8$$ = $dnd$$13$$.$vars$;
    $dnd$$13$$.$openTimerId$ = !1;
    this.$component$.$_expand$($vars$$8$$.$r$, this.$_dndPrepare$.bind(this), !0);
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndFinishReorder$ = function $$oj$$79$$$$TreeDndContext$$$$_dndFinishReorder$$($e$$140$$) {
    var $dnd$$14$$ = this.$_dnd$, $vars$$9$$ = $dnd$$14$$.$vars$;
    $dnd$$14$$.$dragStarted$ && $dnd$$14$$.reorder && "object" == typeof $vars$$9$$.$o$ && 0 < $vars$$9$$.$o$.length && (this.$component$.$_moveNode$($vars$$9$$.$o$, $vars$$9$$.$r$, $vars$$9$$.$last_pos$, $oj$$79$$.$DomUtils$.$isMetaKeyPressed$($e$$140$$)), $vars$$9$$.$o$ = !1);
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndFinishSelection$ = function $$oj$$79$$$$TreeDndContext$$$$_dndFinishSelection$$($children$$33_node$$181$$) {
    $children$$33_node$$181$$.hasClass($TreeUtils$$.$_OJ_SELECTED$) && ($children$$33_node$$181$$.removeClass($TreeUtils$$.$_OJ_SELECTED$), this.$component$.$_select$($children$$33_node$$181$$, !0));
    var $len$$24$$ = ($children$$33_node$$181$$ = this.$component$.getChildren($children$$33_node$$181$$)) && $children$$33_node$$181$$.length ? $children$$33_node$$181$$.length : 0, $i$$488$$;
    for ($i$$488$$ = 0;$i$$488$$ < $len$$24$$;$i$$488$$++) {
      this.$_dndFinishSelection$($$$$72$$($children$$33_node$$181$$[$i$$488$$]));
    }
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndPlacement$ = function $$oj$$79$$$$TreeDndContext$$$$_dndPlacement$$($e$$141$$, $$node$$4$$) {
    var $dnd$$15$$ = this.$_dnd$;
    $$node$$4$$ && ($$node$$4$$.hasClass($TreeUtils$$.$_OJ_TEMPNODE$) ? $dnd$$15$$.$place$ = "after" : ($e$$141$$ = $e$$141$$.originalEvent, $dnd$$15$$.off = $$node$$4$$.offset(), $dnd$$15$$.$place$ = $e$$141$$.pageY - ($dnd$$15$$.off.top || 0), $dnd$$15$$.$place$ = $dnd$$15$$.$place$ >= this.$component$.$_data$.$core$.$li_height$ ? "after" : 0 > $dnd$$15$$.$place$ ? "before" : "inside", "after" === $dnd$$15$$.$place$ && $$node$$4$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) && ($dnd$$15$$.$place$ = "first")));
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndLeave$ = function $$oj$$79$$$$TreeDndContext$$$$_dndLeave$$($e$$142$$) {
    var $dnd$$16$$ = this.$_dnd$, $vars$$10$$ = $dnd$$16$$.$vars$;
    $dnd$$16$$.after = !1;
    $dnd$$16$$.before = !1;
    $dnd$$16$$.$inside$ = !1;
    $dnd$$16$$.$lastNodeEnter$ = null;
    this.$_dndHideMarker$();
    $vars$$10$$.$r$ && $vars$$10$$.$r$[0] === $e$$142$$.target.parentNode && $dnd$$16$$.$openTimerId$ && (clearTimeout($dnd$$16$$.$openTimerId$), $dnd$$16$$.$openTimerId$ = !1);
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndClean$ = function $$oj$$79$$$$TreeDndContext$$$$_dndClean$$() {
    this.$_dndHideMarker$();
    var $dnd$$17$$ = this.$_dnd$, $vars$$11$$ = $dnd$$17$$.$vars$;
    $vars$$11$$.$o$ = !1;
    $vars$$11$$.$r$ = !1;
    $dnd$$17$$.$openTimerId$ && clearTimeout($dnd$$17$$.$openTimerId$);
    $dnd$$17$$.$nodeDraggedId$ = null;
    $dnd$$17$$.$foreign$ = !1;
    $dnd$$17$$.$nodeLastEnter$ = null;
    $dnd$$17$$.$nodeLastLeft$ = null;
    $dnd$$17$$.after = !1;
    $dnd$$17$$.before = !1;
    $dnd$$17$$.$inside$ = !1;
    $dnd$$17$$.off = !1;
    $dnd$$17$$.$prepared$ = !1;
    $dnd$$17$$.$openTimerId$ = !1;
    $dnd$$17$$.$foreign$ = !1;
    $dnd$$17$$.$bInternalNode$ = !1;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndCleanAll$ = function $$oj$$79$$$$TreeDndContext$$$$_dndCleanAll$$() {
    var $dnd$$18$$ = this.$_dnd$, $$div$$1$$;
    $$div$$1$$ = $$$$72$$(this.$component$.$_$container$[0]);
    $$div$$1$$.off("dragstart", $dnd$$18$$.$fnDragStart$);
    $$div$$1$$.off("dragend", $dnd$$18$$.$fnDragEnd$);
    $$div$$1$$.off("drag", $dnd$$18$$.$fnDrag$);
    $$div$$1$$.off("dragenter", $dnd$$18$$.$fnDragEnter$);
    $$div$$1$$.off("dragover", $dnd$$18$$.$fnDragOver$);
    $$div$$1$$.off("dragleave", $dnd$$18$$.$fnDragLeave$);
    $$div$$1$$.off("drop", $dnd$$18$$.$fnDragDrop$);
    this.$_dndClean$();
    this.$_reset$();
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndPrepare$ = function $$oj$$79$$$$TreeDndContext$$$$_dndPrepare$$() {
    var $dnd$$19$$ = this.$_dnd$, $vars$$12$$ = $dnd$$19$$.$vars$, $tree$$1$$ = this.$component$, $foreignObj$$1$$ = !1;
    if (!$vars$$12$$.$r$ || !$vars$$12$$.$r$.length) {
      return!1;
    }
    if ("number" == typeof $vars$$12$$.$o$ && (1 === $vars$$12$$.$o$ || 2 === $vars$$12$$.$o$)) {
      $foreignObj$$1$$ = !0;
    } else {
      if (!$vars$$12$$.$o$) {
        return!1;
      }
    }
    $dnd$$19$$.off = $vars$$12$$.$r$.offset();
    this.$component$.$_isRtl$ && ($dnd$$19$$.off.right = $dnd$$19$$.off.left + $vars$$12$$.$r$.width() - $vars$$12$$.$r$.find("\x3ea").width() - 30);
    $dnd$$19$$.$targ_ml_width$ = $vars$$12$$.$r$.find("a").width();
    $foreignObj$$1$$ ? ($dnd$$19$$.before = "before" == $dnd$$19$$.$place$, $dnd$$19$$.after = "after" == $dnd$$19$$.$place$, $dnd$$19$$.$inside$ = "inside" == $dnd$$19$$.$place$) : ($tree$$1$$.$_prepare_move$($vars$$12$$.$o$, $vars$$12$$.$r$, "before"), $dnd$$19$$.before = $tree$$1$$.$_checkMove$(), $tree$$1$$.$_prepare_move$($vars$$12$$.$o$, $vars$$12$$.$r$, "after"), $dnd$$19$$.after = $tree$$1$$.$_checkMove$(), this.$component$.$_is_loaded$($vars$$12$$.$r$) ? ($tree$$1$$.$_prepare_move$($vars$$12$$.$o$, 
    $vars$$12$$.$r$, "inside"), $dnd$$19$$.$inside$ = $tree$$1$$.$_checkMove$()) : $dnd$$19$$.$inside$ = !1);
    $dnd$$19$$.$prepared$ = !0;
    return this.$_dndShowMarker$();
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndShowMarker$ = function $$oj$$79$$$$TreeDndContext$$$$_dndShowMarker$$() {
    var $dnd$$20$$ = this.$_dnd$, $fc_isParent$$1$$ = !1, $cons$$8$$ = $oj$$79$$.$TreeDndContext$, $vars$$13$$ = $dnd$$20$$.$vars$, $rtl$$5$$ = this.$component$.$_isRtl$, $mLeft$$, $mlLeft_pos$$19$$, $lineTop$$, $nodeHeight$$ = this.$component$.$_data$.$core$.$li_height$, $r$$8$$ = !1;
    if (!$dnd$$20$$.$prepared$) {
      return this.$_dndHideMarker$(), $r$$8$$;
    }
    if ("after" == $dnd$$20$$.$place$ && $dnd$$20$$.after || "inside" == $dnd$$20$$.$place$ && $dnd$$20$$.$inside$ || "before" == $dnd$$20$$.$place$ && $dnd$$20$$.before || "first" == $dnd$$20$$.$place$) {
      $r$$8$$ = $dnd$$20$$.$place$;
    }
    "first" === $r$$8$$ && ($fc_isParent$$1$$ = $vars$$13$$.$r$.find("li:eq(0)"), $dnd$$20$$.off = $fc_isParent$$1$$.offset());
    $mlLeft_pos$$19$$ = $rtl$$5$$ ? $dnd$$20$$.off.right - 18 : $dnd$$20$$.off.left + 5;
    $fc_isParent$$1$$ = !this.$component$.isLeaf($vars$$13$$.$r$);
    $mLeft$$ = $rtl$$5$$ ? $mlLeft_pos$$19$$ + $dnd$$20$$.$targ_ml_width$ + 18 : $mlLeft_pos$$19$$;
    $mlLeft_pos$$19$$ = $rtl$$5$$ ? $mLeft$$ - $dnd$$20$$.$ml_width$ : $mlLeft_pos$$19$$ + 8;
    $lineTop$$ = $dnd$$20$$.off.top - 3;
    switch($r$$8$$) {
      case "before":
      ;
      case "first":
        this.$_moveMarkerUI$($vars$$13$$.$m$, {left:$mLeft$$, top:$lineTop$$ - 7});
        $vars$$13$$.$ml$ && this.$_moveMarkerUI$($vars$$13$$.$ml$, {left:$mlLeft_pos$$19$$, top:$lineTop$$});
        break;
      case "after":
        $lineTop$$ += $nodeHeight$$;
        this.$_moveMarkerUI$($vars$$13$$.$m$, {left:$mLeft$$, top:$lineTop$$ - 2});
        $vars$$13$$.$ml$ && this.$_moveMarkerUI$($vars$$13$$.$ml$, {left:$mlLeft_pos$$19$$, top:$lineTop$$ + 6});
        break;
      case "inside":
        this.$_moveMarkerUI$($vars$$13$$.$m$, {left:$mLeft$$ + ($rtl$$5$$ ? $fc_isParent$$1$$ ? -4 : 0 : 4), top:$dnd$$20$$.off.top + $nodeHeight$$ / 2 - 8});
        $vars$$13$$.$ml$ && $vars$$13$$.$ml$.hide();
        break;
      default:
        this.$_dndHideMarker$();
    }
    $r$$8$$ ? $vars$$13$$.$r$.removeClass($cons$$8$$.$_OJ_INVALID_DROP$).addClass($cons$$8$$.$_OJ_VALID_DROP$) : $vars$$13$$.$r$.removeClass($cons$$8$$.$_OJ_VALID_DROP$).removeClass($cons$$8$$.$_OJ_VALID_DROP$);
    return $vars$$13$$.$last_pos$ = $r$$8$$;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndHideMarker$ = function $$oj$$79$$$$TreeDndContext$$$$_dndHideMarker$$() {
    var $vars$$14$$ = this.$_dnd$.$vars$;
    $vars$$14$$ && ($vars$$14$$.$m$ && $vars$$14$$.$m$.hide(), $vars$$14$$.$ml$ && $vars$$14$$.$ml$.hide(), $vars$$14$$.$r$ && this.$_clearDropClasses$($vars$$14$$.$r$));
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_moveMarkerUI$ = function $$oj$$79$$$$TreeDndContext$$$$_moveMarkerUI$$($$obj$$1$$, $styles$$3$$) {
    $styles$$3$$.left += "px";
    $styles$$3$$.top += "px";
    $$obj$$1$$.css($styles$$3$$).show();
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndStartDrag$ = function $$oj$$79$$$$TreeDndContext$$$$_dndStartDrag$$($$cnt_$nodes$$1$$, $$node$$5$$, $e$$143$$) {
    var $dnd$$21$$ = this.$_dnd$, $vars$$16$$ = $dnd$$21$$.$vars$, $cons$$10$$ = $oj$$79$$.$TreeDndContext$;
    $vars$$16$$.$o$ = $$cnt_$nodes$$1$$;
    $vars$$16$$.$o$.addClass($cons$$10$$.$_OJ_DRAG$);
    $dnd$$21$$.$nodeDraggedId$ = $$node$$5$$.attr("id");
    try {
      $e$$143$$.currentTarget.unselectable = "on", $e$$143$$.currentTarget.onselectstart = function $$e$$143$$$currentTarget$onselectstart$() {
        return!1;
      }, $e$$143$$.currentTarget.style && ($e$$143$$.currentTarget.style.MozUserSelect = "none");
    } catch ($err$$29$$) {
    }
    this.$component$.$_isTheme$() && $vars$$16$$.$m$ && $vars$$16$$.$m$.addClass("oj-tree-" + this.$component$.$_data$.$themes$.$theme$);
    $$cnt_$nodes$$1$$ = this.$component$.$_$container$;
    $dnd$$21$$.$cof$ = $$cnt_$nodes$$1$$.offset();
    $dnd$$21$$.$cw$ = parseInt($$cnt_$nodes$$1$$.width(), 10);
    $dnd$$21$$.ch = parseInt($$cnt_$nodes$$1$$.height(), 10);
    $dnd$$21$$.$dragStarted$ = !0;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_dndStopDrag$ = function $$oj$$79$$$$TreeDndContext$$$$_dndStopDrag$$() {
    var $dnd$$22$$ = this.$_dnd$, $vars$$17$$ = $dnd$$22$$.$vars$, $cons$$11$$ = $oj$$79$$.$TreeDndContext$;
    $vars$$17$$.$r$ && this.$_clearDropClasses$($vars$$17$$.$r$);
    "number" != typeof $vars$$17$$.$o$ && $vars$$17$$.$o$ && $vars$$17$$.$o$.removeClass($cons$$11$$.$_OJ_DRAG$);
    $dnd$$22$$.$dragStarted$ = !1;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_setDataTypes$ = function $$oj$$79$$$$TreeDndContext$$$$_setDataTypes$$($dt$$6$$, $$nodes$$2$$) {
    var $dnd$$23$$ = this.$_dnd$, $cons$$12$$ = $oj$$79$$.$TreeDndContext$, $adata$$1_i$$489$$, $data$$183$$;
    ($adata$$1_i$$489$$ = this.$component$.$__getJson$($$nodes$$2$$)) && ($data$$183$$ = JSON.stringify($adata$$1_i$$489$$));
    if ($dnd$$23$$.$dragDataTypes$) {
      for ($adata$$1_i$$489$$ = 0;$adata$$1_i$$489$$ < $dnd$$23$$.$dragDataTypes$.length;$adata$$1_i$$489$$++) {
        $dt$$6$$.setData($dnd$$23$$.$dragDataTypes$[$adata$$1_i$$489$$], $data$$183$$);
      }
    }
    $dt$$6$$.setData($cons$$12$$.$_DND_INTERNAL_DT$, "0");
    $dnd$$23$$.$pureReorder$ && $dt$$6$$.setData($cons$$12$$.$_DND_INTERNAL_DT_REORDER$, "0");
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_isDtType$ = function $$oj$$79$$$$TreeDndContext$$$$_isDtType$$($dt$$7$$, $type$$114$$) {
    var $aTypes$$ = $dt$$7$$.types, $len$$25$$ = $aTypes$$.length, $i$$490$$;
    for ($i$$490$$ = 0;$i$$490$$ < $len$$25$$;$i$$490$$++) {
      if ($type$$114$$ == $aTypes$$[$i$$490$$]) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_isDtAcceptDataTypes$ = function $$oj$$79$$$$TreeDndContext$$$$_isDtAcceptDataTypes$$($dt$$8$$) {
    var $comps$$1$$ = this.$_dnd$.$dropDataTypes$, $ret$$77$$ = !1, $i$$491$$;
    if ($comps$$1$$) {
      for ($ret$$77$$ = !(0 < $comps$$1$$.length), $i$$491$$ = 0;$i$$491$$ < $comps$$1$$.length;$i$$491$$++) {
        if (this.$_isDtType$($dt$$8$$, $comps$$1$$[$i$$491$$])) {
          $ret$$77$$ = !0;
          break;
        }
      }
    } else {
      $ret$$77$$ = !0;
    }
    return $ret$$77$$;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_checkAddedDataTypes$ = function $$oj$$79$$$$TreeDndContext$$$$_checkAddedDataTypes$$($aTypes$$1_dt$$9$$) {
    var $len$$26$$ = ($aTypes$$1_dt$$9$$ = $aTypes$$1_dt$$9$$.types) && $aTypes$$1_dt$$9$$.length ? $aTypes$$1_dt$$9$$.length : 0, $cons$$13$$ = $oj$$79$$.$TreeDndContext$, $ret$$78$$ = !1, $type$$115$$, $i$$492$$;
    for ($i$$492$$ = 0;$i$$492$$ < $len$$26$$;$i$$492$$++) {
      if ($type$$115$$ = $aTypes$$1_dt$$9$$[$i$$492$$], $type$$115$$ != $cons$$13$$.$_DND_INTERNAL_DT$ && $type$$115$$ != $cons$$13$$.$_DND_INTERNAL_DT_REORDER$) {
        $ret$$78$$ = !0;
        break;
      }
    }
    return $ret$$78$$;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_clearDropClasses$ = function $$oj$$79$$$$TreeDndContext$$$$_clearDropClasses$$($$var$$) {
    var $cons$$14$$ = $oj$$79$$.$TreeDndContext$;
    $$var$$ && $$var$$.removeClass($cons$$14$$.$_OJ_VALID_DROP$).removeClass($cons$$14$$.$_OJ_INVALID_DROP$).removeClass($cons$$14$$.$_OJ_ACTIVE_DROP$);
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_reset$ = function $$oj$$79$$$$TreeDndContext$$$$_reset$$() {
    var $_dnd$$ = {};
    this.$_dnd$ = $_dnd$$;
    $_dnd$$.reorder = !1;
    $_dnd$$.$pureReorder$ = !1;
    $_dnd$$.$foreign$ = !1;
    $_dnd$$.$dragStarted$ = !1;
    $_dnd$$.$nodeDraggedId$ = null;
    $_dnd$$.$nodeLastEnter$ = null;
    $_dnd$$.$fnDragStart$ = null;
    $_dnd$$.$fnDragEnd$ = null;
    $_dnd$$.$fnDrag$ = null;
    $_dnd$$.$fnDragEnter$ = null;
    $_dnd$$.$fnDragOver$ = null;
    $_dnd$$.$fnDragLeave$ = null;
    $_dnd$$.$fnDragDrop$ = null;
    $_dnd$$.$dragFromEnabled$ = !1;
    $_dnd$$.$dropToEnabled$ = !1;
    $_dnd$$.$dragStartCallback$ = null;
    $_dnd$$.$dragDragCallback$ = null;
    $_dnd$$.$dragDragEndCallback$ = null;
    $_dnd$$.$dropDragEnterCallback$ = null;
    $_dnd$$.$dropDragOverCallback$ = null;
    $_dnd$$.$dropDragLeaveCallback$ = null;
    $_dnd$$.$dragDropCallback$ = null;
    $_dnd$$.$dropDataTypes$ = null;
    $_dnd$$.after = !1;
    $_dnd$$.$inside$ = !1;
    $_dnd$$.before = !1;
    $_dnd$$.off = !1;
    $_dnd$$.$prepared$ = !1;
    $_dnd$$.$openTimerId$ = !1;
    $_dnd$$.$cof$ = !1;
    $_dnd$$.$cw$ = !1;
    $_dnd$$.ch = !1;
    $_dnd$$.$ml_width$ = 100;
    $_dnd$$.$targ_ml_width$ = 100;
    $_dnd$$.$openTimeoutMs$ = 500;
    $_dnd$$.$vars$ = {};
    $_dnd$$.$vars$.$o$ = !1;
    $_dnd$$.$vars$.$r$ = !1;
    $_dnd$$.$vars$.$m$ = !1;
    $_dnd$$.$vars$.$ml$ = !1;
  };
  $oj$$79$$.$TreeDndContext$.prototype.$_trace$ = function $$oj$$79$$$$TreeDndContext$$$$_trace$$($s$$37$$) {
    this.$component$.$_trace$($s$$37$$);
  };
  $oj$$79$$.$TreeDndContext$.$_OJ_DRAGGABLE$ = "oj-draggable";
  $oj$$79$$.$TreeDndContext$.$_OJ_DRAG$ = "oj-drag";
  $oj$$79$$.$TreeDndContext$.$_OJ_ACTIVE_DROP$ = "oj-active-drop";
  $oj$$79$$.$TreeDndContext$.$_OJ_VALID_DROP$ = "oj-valid-drop";
  $oj$$79$$.$TreeDndContext$.$_OJ_INVALID_DROP$ = "oj-invalid-drop";
  $oj$$79$$.$TreeDndContext$.$_OJ_DROP$ = "oj-drop";
  $oj$$79$$.$TreeDndContext$.$_OJT_DROP_MARKER$ = "oj-tree-drop-marker";
  $oj$$79$$.$TreeDndContext$.$_OJT_DROP_MARKER_LINE$ = "oj-tree-drop-marker-line";
  $oj$$79$$.$TreeDndContext$.$_DND_REORDER$ = "reorder";
  $oj$$79$$.$TreeDndContext$.$_DND_DRAG$ = "drag";
  $oj$$79$$.$TreeDndContext$.$_DND_DROP$ = "drop";
  $oj$$79$$.$TreeDndContext$.$_DND_NODE$ = "node";
  $oj$$79$$.$TreeDndContext$.$_DND_DATATYPES$ = "dataTypes";
  $oj$$79$$.$TreeDndContext$.$_DND_DRAGSTART_CB$ = "dragStart";
  $oj$$79$$.$TreeDndContext$.$_DND_DRAGDRAG_CB$ = "drag";
  $oj$$79$$.$TreeDndContext$.$_DND_DRAGEND_CB$ = "dragEnd";
  $oj$$79$$.$TreeDndContext$.$_DND_DROPDRAGENTER_CB$ = "dragEnter";
  $oj$$79$$.$TreeDndContext$.$_DND_DROPDRAGOVER_CB$ = "dragOver";
  $oj$$79$$.$TreeDndContext$.$_DND_DROPDRAGLEAVE_CB$ = "dragLeave";
  $oj$$79$$.$TreeDndContext$.$_DND_DROPDROP_CB$ = "drop";
  $oj$$79$$.$TreeDndContext$.$_DND_INTERNAL_DT$ = "_ojtree";
  $oj$$79$$.$TreeDndContext$.$_DND_INTERNAL_DT_REORDER$ = "_ojtreereorder";
  $TreeUtils$$.$_OJ_EXPANDED$ = "oj-expanded";
  $TreeUtils$$.$_OJ_COLLAPSED$ = "oj-collapsed";
  $TreeUtils$$.$_OJ_HOVER$ = "oj-hover";
  $TreeUtils$$.$_OJ_SELECTED$ = "oj-selected";
  $TreeUtils$$.$_OJ_DISABLED$ = "oj-disabled";
  $TreeUtils$$.$_OJ_DEFAULT$ = "oj-default";
  $TreeUtils$$.$_OJ_TEMPNODE$ = "oj-treenode-temp";
});
