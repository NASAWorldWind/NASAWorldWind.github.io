/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$48$$) {
  $oj$$48$$.$JsonNodeSet$ = function $$oj$$48$$$$JsonNodeSet$$($startNode$$, $endNode$$, $data$$163$$, $currKey$$1$$) {
    $oj$$48$$.$Assert$.$assertNumber$($startNode$$, null);
    $oj$$48$$.$Assert$.$assertNumber$($endNode$$, null);
    this.$m_key$ = $currKey$$1$$;
    this.$m_startNode$ = $startNode$$;
    this.$m_endNode$ = $endNode$$;
    this.$m_nodes$ = $data$$163$$;
  };
  $goog$exportPath_$$("JsonNodeSet", $oj$$48$$.$JsonNodeSet$, $oj$$48$$);
  $oj$$48$$.$JsonNodeSet$.prototype.getParent = function $$oj$$48$$$$JsonNodeSet$$$getParent$() {
    return this.$m_key$;
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getParent", {getParent:$oj$$48$$.$JsonNodeSet$.prototype.getParent});
  $oj$$48$$.$JsonNodeSet$.prototype.$getStart$ = function $$oj$$48$$$$JsonNodeSet$$$$getStart$$() {
    return this.$m_startNode$;
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getStart", {$getStart$:$oj$$48$$.$JsonNodeSet$.prototype.$getStart$});
  $oj$$48$$.$JsonNodeSet$.prototype.$getCount$ = function $$oj$$48$$$$JsonNodeSet$$$$getCount$$() {
    return Math.max(0, this.$m_endNode$ - this.$m_startNode$);
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getCount", {$getCount$:$oj$$48$$.$JsonNodeSet$.prototype.$getCount$});
  $oj$$48$$.$JsonNodeSet$.prototype.getData = function $$oj$$48$$$$JsonNodeSet$$$getData$($index$$229$$) {
    $oj$$48$$.$Assert$.assert($index$$229$$ <= this.$m_endNode$ && $index$$229$$ >= this.$m_startNode$);
    $index$$229$$ -= this.$m_startNode$;
    return this.$m_nodes$[$index$$229$$] ? this.$m_nodes$[$index$$229$$].attr : null;
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getData", {getData:$oj$$48$$.$JsonNodeSet$.prototype.getData});
  $oj$$48$$.$JsonNodeSet$.prototype.getMetadata = function $$oj$$48$$$$JsonNodeSet$$$getMetadata$($index$$230$$) {
    var $metadata$$25$$ = [];
    $oj$$48$$.$Assert$.assert($index$$230$$ <= this.$m_endNode$ && $index$$230$$ >= this.$m_startNode$);
    $index$$230$$ -= this.$m_startNode$;
    $metadata$$25$$.key = this.$m_nodes$[$index$$230$$].id ? this.$m_nodes$[$index$$230$$].id : this.$m_nodes$[$index$$230$$].attr.id;
    $metadata$$25$$.leaf = this.$m_nodes$[$index$$230$$].$leaf$;
    $metadata$$25$$.depth = this.$m_nodes$[$index$$230$$].depth;
    null == $metadata$$25$$.leaf && ($metadata$$25$$.leaf = this.$m_nodes$[$index$$230$$].children && 0 < this.$m_nodes$[$index$$230$$].children.length ? !1 : !0);
    return $metadata$$25$$;
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getMetadata", {getMetadata:$oj$$48$$.$JsonNodeSet$.prototype.getMetadata});
  $oj$$48$$.$JsonNodeSet$.prototype.$_updateDepth$ = function $$oj$$48$$$$JsonNodeSet$$$$_updateDepth$$($currChild$$2$$, $offset$$26$$) {
    var $i$$381$$;
    $offset$$26$$++;
    $currChild$$2$$.depth = $offset$$26$$;
    if ($currChild$$2$$.children && 0 != $currChild$$2$$.children.length) {
      for ($i$$381$$ = 0;$i$$381$$ < $currChild$$2$$.children.length;$i$$381$$++) {
        this.$_updateDepth$($currChild$$2$$.children[$i$$381$$], $offset$$26$$);
      }
    }
  };
  $oj$$48$$.$JsonNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$48$$$$JsonNodeSet$$$$getChildNodeSet$$($index$$231_key$$164$$) {
    var $results$$10$$, $depth$$27$$, $i$$382$$;
    $oj$$48$$.$Assert$.assert($index$$231_key$$164$$ <= this.$m_endNode$ && $index$$231_key$$164$$ >= this.$m_startNode$);
    $index$$231_key$$164$$ -= this.$m_startNode$;
    $depth$$27$$ = this.$m_nodes$[$index$$231_key$$164$$].depth;
    $results$$10$$ = this.$m_nodes$[$index$$231_key$$164$$].children;
    if (0 == $results$$10$$.length) {
      return null;
    }
    $index$$231_key$$164$$ = this.$m_nodes$[$index$$231_key$$164$$].id ? this.$m_nodes$[$index$$231_key$$164$$].id : this.$m_nodes$[$index$$231_key$$164$$].attr.id;
    for ($i$$382$$ = 0;$i$$382$$ < $results$$10$$.length;$i$$382$$++) {
      this.$_updateDepth$($results$$10$$[$i$$382$$], $depth$$27$$);
    }
    return new $oj$$48$$.$JsonNodeSet$(0, $results$$10$$.length, $results$$10$$, $index$$231_key$$164$$);
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$48$$.$JsonNodeSet$.prototype.$getChildNodeSet$});
  $oj$$48$$.$_JsonTreeNodeDataSource$ = function $$oj$$48$$$$_JsonTreeNodeDataSource$$() {
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.$leaf$ = this.attr = this.title = null;
  };
  $oj$$48$$.$_JsonTreeNodeDataSource$.prototype.$_ascending$ = function $$oj$$48$$$$_JsonTreeNodeDataSource$$$$_ascending$$($key$$165$$) {
    return function($a$$120$$, $b$$74$$) {
      return $a$$120$$.attr && $b$$74$$.attr && $a$$120$$.attr[$key$$165$$] && $b$$74$$.attr[$key$$165$$] ? $a$$120$$.attr[$key$$165$$] < $b$$74$$.attr[$key$$165$$] ? -1 : $a$$120$$.attr[$key$$165$$] === $b$$74$$.attr[$key$$165$$] ? 0 : 1 : $a$$120$$[$key$$165$$] < $b$$74$$[$key$$165$$] ? -1 : $a$$120$$[$key$$165$$] === $b$$74$$[$key$$165$$] ? 0 : 1;
    };
  };
  $oj$$48$$.$_JsonTreeNodeDataSource$.prototype.$_descending$ = function $$oj$$48$$$$_JsonTreeNodeDataSource$$$$_descending$$($key$$166$$) {
    return function($a$$121$$, $b$$75$$) {
      return $a$$121$$.attr && $b$$75$$.attr && $a$$121$$.attr[$key$$166$$] && $b$$75$$.attr[$key$$166$$] ? $a$$121$$.attr[$key$$166$$] < $b$$75$$.attr[$key$$166$$] ? 1 : $a$$121$$.attr[$key$$166$$] === $b$$75$$.attr[$key$$166$$] ? 0 : -1 : $a$$121$$[$key$$166$$] < $b$$75$$[$key$$166$$] ? 1 : $a$$121$$[$key$$166$$] === $b$$75$$[$key$$166$$] ? 0 : -1;
    };
  };
  $oj$$48$$.$_JsonTreeNodeDataSource$.prototype.$_sortRecursive$ = function $$oj$$48$$$$_JsonTreeNodeDataSource$$$$_sortRecursive$$($criteria$$9$$) {
    var $i$$383_key$$167$$ = $criteria$$9$$.key;
    "ascending" === $criteria$$9$$.direction ? this.children.sort(this.$_ascending$($i$$383_key$$167$$)) : "descending" === $criteria$$9$$.direction && this.children.sort(this.$_descending$($i$$383_key$$167$$));
    for (var $i$$383_key$$167$$ = 0, $l$$11$$ = this.children.length;$i$$383_key$$167$$ < $l$$11$$;$i$$383_key$$167$$++) {
      this.children[$i$$383_key$$167$$].$_sortRecursive$($criteria$$9$$);
    }
  };
  $oj$$48$$.$JsonTreeDataSource$ = function $$oj$$48$$$$JsonTreeDataSource$$($data$$164$$) {
    var $tree$$;
    $tree$$ = new $oj$$48$$.$_JsonTreeNodeDataSource$;
    $data$$164$$.id || ($tree$$.id = "root");
    this.data = this.$_createTreeDataSource$({count:0}, $tree$$, $data$$164$$);
    $oj$$48$$.$JsonTreeDataSource$.$superclass$.constructor.call(this, $tree$$);
  };
  $goog$exportPath_$$("JsonTreeDataSource", $oj$$48$$.$JsonTreeDataSource$, $oj$$48$$);
  $oj$$48$$.$Object$.$createSubclass$($oj$$48$$.$JsonTreeDataSource$, $oj$$48$$.$TreeDataSource$, "oj.JsonTreeDataSource");
  $oj$$48$$.$JsonTreeDataSource$.prototype.Init = function $$oj$$48$$$$JsonTreeDataSource$$$Init$() {
    $oj$$48$$.$JsonTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.Init", {Init:$oj$$48$$.$JsonTreeDataSource$.prototype.Init});
  $oj$$48$$.$JsonTreeDataSource$.prototype.$_createTreeDataSource$ = function $$oj$$48$$$$JsonTreeDataSource$$$$_createTreeDataSource$$($c$$47$$, $target$$92$$, $source$$12$$, $depth$$28$$) {
    var $children$$12$$, $node$$104$$, $child$$13$$, $prop$$73$$, $propr$$, $prp$$, $j$$45$$;
    $depth$$28$$ || ($depth$$28$$ = 0);
    for ($prop$$73$$ in $source$$12$$) {
      if ("children" == $prop$$73$$ || 0 == $depth$$28$$ && $source$$12$$ instanceof Array) {
        for ($children$$12$$ = 0 == $depth$$28$$ && $source$$12$$ instanceof Array ? $source$$12$$ : $source$$12$$[$prop$$73$$], $depth$$28$$++, $j$$45$$ = 0;$j$$45$$ < $children$$12$$.length;$j$$45$$++) {
          $child$$13$$ = $children$$12$$[$j$$45$$];
          $node$$104$$ = new $oj$$48$$.$_JsonTreeNodeDataSource$;
          $child$$13$$.id || ($c$$47$$.count++, $child$$13$$.attr ? $child$$13$$.attr.id || ($child$$13$$.attr.id = "rid_" + $c$$47$$.count) : $node$$104$$.id = "rid_" + $c$$47$$.count);
          for ($propr$$ in $child$$13$$) {
            for ($prp$$ in $node$$104$$) {
              $propr$$ == $prp$$ && "children" != $propr$$ && ($node$$104$$[$prp$$] = $child$$13$$[$propr$$]), "depth" == $prp$$ && ($node$$104$$[$prp$$] = $depth$$28$$);
            }
          }
          $target$$92$$.children.push($node$$104$$);
          for ($prp$$ in $child$$13$$) {
            "children" == $prp$$ && this.$_createTreeDataSource$($c$$47$$, $target$$92$$.children[$j$$45$$], $child$$13$$, $depth$$28$$);
          }
        }
      }
    }
    return $target$$92$$;
  };
  $oj$$48$$.$JsonTreeDataSource$.prototype.$getChildCount$ = function $$oj$$48$$$$JsonTreeDataSource$$$$getChildCount$$($parent$$43_parentKey$$8$$) {
    $parent$$43_parentKey$$8$$ || ($parent$$43_parentKey$$8$$ = this.data.id);
    $parent$$43_parentKey$$8$$ = this.$_searchTreeById$(this.data, $parent$$43_parentKey$$8$$);
    return $parent$$43_parentKey$$8$$.children ? $parent$$43_parentKey$$8$$.children.length : 0;
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$48$$.$JsonTreeDataSource$.prototype.$getChildCount$});
  $oj$$48$$.$JsonTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$48$$$$JsonTreeDataSource$$$$fetchChildren$$($nodeSet$$38_parentKey$$9$$, $i$$384_range$$20$$, $callbacks$$52$$) {
    var $childStart$$, $childEnd$$, $results$$11$$, $parent$$44$$, $node$$105$$;
    $results$$11$$ = [];
    $nodeSet$$38_parentKey$$9$$ || ($nodeSet$$38_parentKey$$9$$ = this.data.id);
    $parent$$44$$ = this.$_searchTreeById$(this.data, $nodeSet$$38_parentKey$$9$$);
    $i$$384_range$$20$$ || ($i$$384_range$$20$$ = [], $i$$384_range$$20$$.start = 0, $i$$384_range$$20$$.count = $parent$$44$$.children.length);
    $i$$384_range$$20$$.count || ($i$$384_range$$20$$.count = $parent$$44$$.children.length);
    $i$$384_range$$20$$.start || ($i$$384_range$$20$$.start = 0);
    $childStart$$ = $i$$384_range$$20$$.start;
    $childEnd$$ = Math.min($parent$$44$$.children.length, $childStart$$ + $i$$384_range$$20$$.count);
    for ($i$$384_range$$20$$ = $childStart$$;$i$$384_range$$20$$ < $childEnd$$;$i$$384_range$$20$$ += 1) {
      $node$$105$$ = new $oj$$48$$.$_JsonTreeNodeDataSource$, $parent$$44$$.children[$i$$384_range$$20$$].attr && ($node$$105$$.attr = $parent$$44$$.children[$i$$384_range$$20$$].attr), $parent$$44$$.children[$i$$384_range$$20$$].id && ($node$$105$$.id = $parent$$44$$.children[$i$$384_range$$20$$].id), $parent$$44$$.children[$i$$384_range$$20$$].depth && ($node$$105$$.depth = $parent$$44$$.children[$i$$384_range$$20$$].depth), $parent$$44$$.children[$i$$384_range$$20$$].title && ($node$$105$$.title = 
      $parent$$44$$.children[$i$$384_range$$20$$].title), $parent$$44$$.children[$i$$384_range$$20$$].parent && ($node$$105$$.parent = $parent$$44$$.children[$i$$384_range$$20$$].parent), $node$$105$$.$leaf$ = 0 < $parent$$44$$.children[$i$$384_range$$20$$].children.length ? !1 : !0, $results$$11$$.push($node$$105$$);
    }
    $nodeSet$$38_parentKey$$9$$ = new $oj$$48$$.$JsonNodeSet$($childStart$$, $childEnd$$, $results$$11$$, $nodeSet$$38_parentKey$$9$$);
    null != $callbacks$$52$$ && null != $callbacks$$52$$.success && $callbacks$$52$$.success.call(null, $nodeSet$$38_parentKey$$9$$);
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$48$$.$JsonTreeDataSource$.prototype.$fetchChildren$});
  $oj$$48$$.$JsonTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$48$$$$JsonTreeDataSource$$$$fetchDescendants$$($parentKey$$10$$, $callbacks$$53$$) {
    var $childEnd$$1_range$$21$$, $childStart$$1_i$$385$$, $nodeSet$$39_results$$12$$, $parent$$45$$;
    $nodeSet$$39_results$$12$$ = [];
    $parentKey$$10$$ || ($parentKey$$10$$ = this.data.id);
    $parent$$45$$ = this.$_searchTreeById$(this.data, $parentKey$$10$$);
    $childEnd$$1_range$$21$$ = [];
    $childEnd$$1_range$$21$$.start = 0;
    $childEnd$$1_range$$21$$.count = $parent$$45$$.children.length;
    $childStart$$1_i$$385$$ = $childEnd$$1_range$$21$$.start;
    for ($childEnd$$1_range$$21$$ = Math.min($parent$$45$$.children.length, $childStart$$1_i$$385$$ + $childEnd$$1_range$$21$$.count);$childStart$$1_i$$385$$ < $childEnd$$1_range$$21$$;$childStart$$1_i$$385$$ += 1) {
      $parent$$45$$.children[$childStart$$1_i$$385$$].$leaf$ = 0 < $parent$$45$$.children[$childStart$$1_i$$385$$].children.length ? !1 : !0, $nodeSet$$39_results$$12$$.push($parent$$45$$.children[$childStart$$1_i$$385$$]);
    }
    $nodeSet$$39_results$$12$$ = new $oj$$48$$.$JsonNodeSet$(0, $nodeSet$$39_results$$12$$.length, $nodeSet$$39_results$$12$$, $parentKey$$10$$);
    null != $callbacks$$53$$ && null != $callbacks$$53$$.success && $callbacks$$53$$.success.call(null, $nodeSet$$39_results$$12$$);
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$48$$.$JsonTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$48$$.$JsonTreeDataSource$.prototype.$moveOK$ = function $$oj$$48$$$$JsonTreeDataSource$$$$moveOK$$() {
    return "valid";
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$48$$.$JsonTreeDataSource$.prototype.$moveOK$});
  $oj$$48$$.$JsonTreeDataSource$.prototype.move = function $$oj$$48$$$$JsonTreeDataSource$$$move$($moveNode_nodeToMove$$, $refNode$$8_referenceNode$$1$$, $index$$232_position$$26$$, $callbacks$$54$$) {
    var $parent$$46_refNodeKey$$;
    $parent$$46_refNodeKey$$ = $refNode$$8_referenceNode$$1$$;
    if (!$parent$$46_refNodeKey$$ || $parent$$46_refNodeKey$$ == this.data.id) {
      if ("inside" != $index$$232_position$$26$$) {
        $oj$$48$$.$Logger$.log("Error: root can not be the reference node if position equals to " + $index$$232_position$$26$$);
        return;
      }
      $parent$$46_refNodeKey$$ || ($parent$$46_refNodeKey$$ = this.data.id);
    }
    $moveNode_nodeToMove$$ = this.$_searchTreeById$(null, $moveNode_nodeToMove$$);
    this.$_searchTreeById$($moveNode_nodeToMove$$, $parent$$46_refNodeKey$$) ? $oj$$48$$.$Logger$.log("Error: the node to move contains the reference node as its sub-tree.") : ($refNode$$8_referenceNode$$1$$ = this.$_searchTreeById$(null, $parent$$46_refNodeKey$$), $parent$$46_refNodeKey$$ = this.$_getParentById$($parent$$46_refNodeKey$$), this.$_removeFromTree$($moveNode_nodeToMove$$), "inside" == $index$$232_position$$26$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - 
    ($refNode$$8_referenceNode$$1$$.depth + 1)), $refNode$$8_referenceNode$$1$$.children.push($moveNode_nodeToMove$$)) : "before" == $index$$232_position$$26$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $index$$232_position$$26$$ = $parent$$46_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$1$$), -1 < $index$$232_position$$26$$ && (0 != $index$$232_position$$26$$ ? $parent$$46_refNodeKey$$.children.splice($index$$232_position$$26$$ - 
    1, 0, $moveNode_nodeToMove$$) : $parent$$46_refNodeKey$$.children.unshift($moveNode_nodeToMove$$))) : "after" == $index$$232_position$$26$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $index$$232_position$$26$$ = $parent$$46_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$1$$), -1 < $index$$232_position$$26$$ && $parent$$46_refNodeKey$$.children.splice($index$$232_position$$26$$, 0, $moveNode_nodeToMove$$)) : "first" == 
    $index$$232_position$$26$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $parent$$46_refNodeKey$$.children.unshift($moveNode_nodeToMove$$)) : "last" == $index$$232_position$$26$$ && (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $parent$$46_refNodeKey$$.children.push($moveNode_nodeToMove$$)), null != $callbacks$$54$$ && null != $callbacks$$54$$.success && 
    $callbacks$$54$$.success.call(null, this.data));
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.move", {move:$oj$$48$$.$JsonTreeDataSource$.prototype.move});
  $oj$$48$$.$JsonTreeDataSource$.prototype.sort = function $$oj$$48$$$$JsonTreeDataSource$$$sort$($criteria$$10$$, $callbacks$$55$$) {
    var $parent$$47$$;
    $parent$$47$$ = this.$_searchTreeById$(this.data, this.data.id);
    $parent$$47$$.$_sortRecursive$($criteria$$10$$);
    null != $callbacks$$55$$ && null != $callbacks$$55$$.success && $callbacks$$55$$.success.call(null, $parent$$47$$);
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.sort", {sort:$oj$$48$$.$JsonTreeDataSource$.prototype.sort});
  $oj$$48$$.$JsonTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$48$$$$JsonTreeDataSource$$$$getSortCriteria$$() {
    return{key:null, direction:"none"};
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$48$$.$JsonTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$48$$.$JsonTreeDataSource$.prototype.$_getParentById$ = function $$oj$$48$$$$JsonTreeDataSource$$$$_getParentById$$($refNodeKey$$1$$, $currNode$$4$$) {
    var $i$$386$$, $parent$$48$$ = null;
    if ($refNodeKey$$1$$ == this.data.id) {
      return null;
    }
    $currNode$$4$$ || ($currNode$$4$$ = this.data);
    if ($currNode$$4$$.children && 0 < $currNode$$4$$.children.length) {
      for ($i$$386$$ = 0;$i$$386$$ < $currNode$$4$$.children.length;$i$$386$$++) {
        if ($currNode$$4$$.children[$i$$386$$].id && $currNode$$4$$.children[$i$$386$$].id == $refNodeKey$$1$$ || $currNode$$4$$.children[$i$$386$$].attr && $currNode$$4$$.children[$i$$386$$].attr.id == $refNodeKey$$1$$) {
          return $currNode$$4$$;
        }
      }
      for ($i$$386$$ = 0;$i$$386$$ < $currNode$$4$$.children.length && !($parent$$48$$ = this.$_getParentById$($refNodeKey$$1$$, $currNode$$4$$.children[$i$$386$$]));$i$$386$$++) {
      }
    }
    return $parent$$48$$;
  };
  $oj$$48$$.$JsonTreeDataSource$.prototype.$_searchTreeById$ = function $$oj$$48$$$$JsonTreeDataSource$$$$_searchTreeById$$($currChild$$3$$, $parentKey$$12$$) {
    var $i$$387$$, $result$$77$$ = null;
    $currChild$$3$$ || ($currChild$$3$$ = this.data);
    if ($currChild$$3$$.id && $currChild$$3$$.id == $parentKey$$12$$ || $currChild$$3$$.attr && $currChild$$3$$.attr.id == $parentKey$$12$$) {
      return $currChild$$3$$;
    }
    if (null != $currChild$$3$$.children) {
      for ($i$$387$$ = 0;$i$$387$$ < $currChild$$3$$.children.length && !$result$$77$$;$i$$387$$++) {
        $result$$77$$ = $currChild$$3$$.children[$i$$387$$].id && $currChild$$3$$.children[$i$$387$$].id == $parentKey$$12$$ || $currChild$$3$$.children[$i$$387$$].attr && $currChild$$3$$.children[$i$$387$$].attr.id == $parentKey$$12$$ ? $currChild$$3$$.children[$i$$387$$] : this.$_searchTreeById$($currChild$$3$$.children[$i$$387$$], $parentKey$$12$$);
      }
    }
    return $result$$77$$;
  };
  $oj$$48$$.$JsonTreeDataSource$.prototype.$_updateDepth$ = function $$oj$$48$$$$JsonTreeDataSource$$$$_updateDepth$$($currChild$$4$$, $offset$$27$$) {
    var $i$$388$$;
    $currChild$$4$$.depth -= $offset$$27$$;
    if ($currChild$$4$$.children && 0 != $currChild$$4$$.children.length) {
      for ($i$$388$$ = 0;$i$$388$$ < $currChild$$4$$.children.length;$i$$388$$++) {
        this.$_updateDepth$($currChild$$4$$.children[$i$$388$$], $offset$$27$$);
      }
    }
  };
  $oj$$48$$.$JsonTreeDataSource$.prototype.$_removeFromTree$ = function $$oj$$48$$$$JsonTreeDataSource$$$$_removeFromTree$$($currChild$$5_index$$233$$) {
    var $key$$168_parent$$49$$;
    $currChild$$5_index$$233$$.id ? $key$$168_parent$$49$$ = $currChild$$5_index$$233$$.id : $currChild$$5_index$$233$$.attr && ($key$$168_parent$$49$$ = $currChild$$5_index$$233$$.attr.id);
    ($key$$168_parent$$49$$ = this.$_getParentById$($key$$168_parent$$49$$)) || ($key$$168_parent$$49$$ = this.data);
    $currChild$$5_index$$233$$ = $key$$168_parent$$49$$.children.indexOf($currChild$$5_index$$233$$);
    -1 < $currChild$$5_index$$233$$ && $key$$168_parent$$49$$.children.splice($currChild$$5_index$$233$$, 1);
  };
  $oj$$48$$.$JsonTreeDataSource$.prototype.getCapability = function $$oj$$48$$$$JsonTreeDataSource$$$getCapability$($feature$$15$$) {
    return "fetchDescendants" === $feature$$15$$ ? "enable" : "sort" === $feature$$15$$ ? "default" : "batchFetch" === $feature$$15$$ ? "disable" : "move" === $feature$$15$$ ? "full" : null;
  };
  $oj$$48$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getCapability", {getCapability:$oj$$48$$.$JsonTreeDataSource$.prototype.getCapability});
});
