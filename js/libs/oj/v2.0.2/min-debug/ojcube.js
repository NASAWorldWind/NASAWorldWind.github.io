/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "promise", "ojs/ojdatasource-common"], function($oj$$18$$, $$$$17$$) {
  $oj$$18$$.$Cube$ = function $$oj$$18$$$$Cube$$($rowset$$, $layout$$) {
    this.Init();
    this.$_rows$ = $rowset$$;
    this.$_layout$ = $layout$$;
    this.$BuildCube$();
  };
  $goog$exportPath_$$("Cube", $oj$$18$$.$Cube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$Cube$, $oj$$18$$.$Object$, "oj.Cube");
  $oj$$18$$.$Cube$.prototype.Init = function $$oj$$18$$$$Cube$$$Init$() {
    $oj$$18$$.$Cube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$Cube$.prototype.$getAxes$ = function $$oj$$18$$$$Cube$$$$getAxes$$() {
    var $cube_i$$259$$ = this.$_getPinnedCube$(), $axes$$ = [];
    Array.prototype.push.apply($axes$$, $cube_i$$259$$ ? $cube_i$$259$$.$getAxes$() : this.$_axes$);
    for ($cube_i$$259$$ = 2;$cube_i$$259$$ < this.$_axes$.length;$cube_i$$259$$++) {
      $axes$$.push(this.$_axes$[$cube_i$$259$$]);
    }
    return $axes$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getAxes", {$getAxes$:$oj$$18$$.$Cube$.prototype.$getAxes$});
  $oj$$18$$.$Cube$.prototype.$_getNonPageLayout$ = function $$oj$$18$$$$Cube$$$$_getNonPageLayout$$() {
    return this.$_axes$;
  };
  $oj$$18$$.$Cube$.prototype.$getValues$ = function $$oj$$18$$$$Cube$$$$getValues$$($ind_indices$$1_val$$40$$) {
    var $cube$$1_origRet$$ = this.$_getPinnedCube$();
    $ind_indices$$1_val$$40$$ = $cube$$1_origRet$$.$_normalizeIndices$($ind_indices$$1_val$$40$$);
    for ($ind_indices$$1_val$$40$$ = $cube$$1_origRet$$ = $cube$$1_origRet$$.$_walkIndex$($ind_indices$$1_val$$40$$, 0, []);Array.isArray($ind_indices$$1_val$$40$$) && 1 === $ind_indices$$1_val$$40$$.length;) {
      if ($ind_indices$$1_val$$40$$ = $ind_indices$$1_val$$40$$[0], !Array.isArray($ind_indices$$1_val$$40$$)) {
        return $ind_indices$$1_val$$40$$;
      }
    }
    return $cube$$1_origRet$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getValues", {$getValues$:$oj$$18$$.$Cube$.prototype.$getValues$});
  $oj$$18$$.$Cube$.prototype.setPage = function $$oj$$18$$$$Cube$$$setPage$($pin$$) {
    this.$_pin$ = $pin$$ instanceof Array ? $pin$$ : [$pin$$];
  };
  $oj$$18$$.$Cube$.prototype.$pivot$ = function $$oj$$18$$$$Cube$$$$pivot$$($axisFrom_axisToObj_levelFromObj$$, $levelFrom$$, $axisTo_levelsFrom$$, $levelTo$$, $type$$85$$) {
    var $layout$$1_levelsTo$$ = this.$_layout$, $axisFromObj$$ = this.$_findAxisInLayout$($axisFrom_axisToObj_levelFromObj$$);
    if (!$axisFromObj$$) {
      return!1;
    }
    $axisFrom_axisToObj_levelFromObj$$ = null;
    $axisTo_levelsFrom$$ < $layout$$1_levelsTo$$.length ? $axisFrom_axisToObj_levelFromObj$$ = this.$_findAxisInLayout$($axisTo_levelsFrom$$) : ($axisFrom_axisToObj_levelFromObj$$ = {axis:$axisTo_levelsFrom$$, levels:[]}, $layout$$1_levelsTo$$.push($axisFrom_axisToObj_levelFromObj$$));
    $axisTo_levelsFrom$$ = $axisFromObj$$.levels;
    $layout$$1_levelsTo$$ = $axisFrom_axisToObj_levelFromObj$$.levels;
    $axisFrom_axisToObj_levelFromObj$$ = $levelFrom$$ < $axisTo_levelsFrom$$.length ? $axisTo_levelsFrom$$[$levelFrom$$] : null;
    if (!$axisFrom_axisToObj_levelFromObj$$) {
      return!1;
    }
    $levelTo$$ >= $layout$$1_levelsTo$$.length ? ($layout$$1_levelsTo$$.push($axisFrom_axisToObj_levelFromObj$$), $axisTo_levelsFrom$$.splice($levelFrom$$, 1)) : $type$$85$$ === $oj$$18$$.$Cube$.$PivotType$.SWAP ? ($axisTo_levelsFrom$$[$levelFrom$$] = $layout$$1_levelsTo$$[$levelTo$$], $layout$$1_levelsTo$$[$levelTo$$] = $axisFrom_axisToObj_levelFromObj$$) : ($type$$85$$ === $oj$$18$$.$Cube$.$PivotType$.AFTER && $levelTo$$++, $layout$$1_levelsTo$$.splice($levelTo$$, 0, $axisFrom_axisToObj_levelFromObj$$), 
    $layout$$1_levelsTo$$ === $axisTo_levelsFrom$$ && $levelTo$$ < $levelFrom$$ && $levelFrom$$++, $axisTo_levelsFrom$$.splice($levelFrom$$, 1));
    this.$BuildCube$();
    return!0;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.pivot", {$pivot$:$oj$$18$$.$Cube$.prototype.$pivot$});
  $oj$$18$$.$Cube$.prototype.$_findAxisInLayout$ = function $$oj$$18$$$$Cube$$$$_findAxisInLayout$$($axis$$3$$) {
    for (var $i$$260$$ = 0;$i$$260$$ < this.$_layout$.length;$i$$260$$++) {
      if (this.$_layout$[$i$$260$$].axis === $axis$$3$$) {
        return this.$_layout$[$i$$260$$];
      }
    }
    return null;
  };
  $oj$$18$$.$Cube$.prototype.$getLayout$ = function $$oj$$18$$$$Cube$$$$getLayout$$() {
    return this.$_layout$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getLayout", {$getLayout$:$oj$$18$$.$Cube$.prototype.$getLayout$});
  $oj$$18$$.$Cube$.$PivotType$ = {BEFORE:"before", AFTER:"after", SWAP:"swap"};
  $goog$exportPath_$$("Cube.PivotType", $oj$$18$$.$Cube$.$PivotType$, $oj$$18$$);
  $oj$$18$$.$Cube$.prototype.$_walkIndex$ = function $$oj$$18$$$$Cube$$$$_walkIndex$$($count$$31_indices$$2$$, $depth$$8_loc$$3$$, $location$$24$$) {
    var $returnValue$$6$$ = [];
    if (0 === $count$$31_indices$$2$$.length) {
      return $depth$$8_loc$$3$$ = $location$$24$$.slice(0), this.$_getValue$($depth$$8_loc$$3$$);
    }
    var $remaining$$ = $count$$31_indices$$2$$.slice(1), $start$$30$$ = $count$$31_indices$$2$$[0].start;
    $count$$31_indices$$2$$ = $count$$31_indices$$2$$[0].count;
    for ($location$$24$$[$depth$$8_loc$$3$$] = $start$$30$$;$location$$24$$[$depth$$8_loc$$3$$] < $start$$30$$ + $count$$31_indices$$2$$;$location$$24$$[$depth$$8_loc$$3$$]++) {
      $returnValue$$6$$.push(this.$_walkIndex$($remaining$$, $depth$$8_loc$$3$$ + 1, $location$$24$$));
    }
    return $returnValue$$6$$;
  };
  $oj$$18$$.$Cube$.prototype.$_normalizeIndices$ = function $$oj$$18$$$$Cube$$$$_normalizeIndices$$($indices$$3$$) {
    var $ind$$1$$ = [];
    if (!$indices$$3$$) {
      return $ind$$1$$;
    }
    for (var $numAxes$$ = Math.min($indices$$3$$.length, this.$_axes$.length), $a$$104$$ = 0;$a$$104$$ < $numAxes$$;$a$$104$$++) {
      var $index$$113$$ = $indices$$3$$[$a$$104$$];
      $index$$113$$ instanceof Object && ($index$$113$$.hasOwnProperty("start") || $index$$113$$.hasOwnProperty("count")) ? $index$$113$$.hasOwnProperty("start") ? $index$$113$$.hasOwnProperty("count") ? $ind$$1$$.push(this.$_generateIndex$($index$$113$$.start, $index$$113$$.count, $a$$104$$)) : $ind$$1$$.push(this.$_generateIndex$($index$$113$$.start, 1, $a$$104$$)) : $ind$$1$$.push(this.$_generateIndex$(0, $index$$113$$.count, $a$$104$$)) : $ind$$1$$.push(this.$_generateIndex$($index$$113$$, 1, 
      $a$$104$$));
    }
    return $ind$$1$$;
  };
  $oj$$18$$.$Cube$.prototype.$_generateIndex$ = function $$oj$$18$$$$Cube$$$$_generateIndex$$($start$$31$$, $count$$32$$, $axis$$4_trueCount$$) {
    $axis$$4_trueCount$$ = this.$getAxes$()[$axis$$4_trueCount$$].$getExtent$();
    if ($start$$31$$ >= $axis$$4_trueCount$$ || 0 > $start$$31$$) {
      $start$$31$$ = 0;
    }
    $count$$32$$ = Math.min($count$$32$$, $axis$$4_trueCount$$ - $start$$31$$);
    return{start:$start$$31$$, index:$start$$31$$, count:$count$$32$$};
  };
  $oj$$18$$.$Cube$.prototype.$_getValue$ = function $$oj$$18$$$$Cube$$$$_getValue$$($indices$$4$$) {
    var $hash$$2_key$$79_obj$$51$$ = this.$_createCubeKeys$($indices$$4$$);
    return $hash$$2_key$$79_obj$$51$$ && ($hash$$2_key$$79_obj$$51$$ = $hash$$2_key$$79_obj$$51$$.$GetHashCodes$(), 0 < $hash$$2_key$$79_obj$$51$$.length && ($hash$$2_key$$79_obj$$51$$ = this.$_data$[$hash$$2_key$$79_obj$$51$$[0].key])) ? new $oj$$18$$.$CubeDataValue$($hash$$2_key$$79_obj$$51$$.value, $indices$$4$$, $hash$$2_key$$79_obj$$51$$.$aggType$, $hash$$2_key$$79_obj$$51$$.rows, $hash$$2_key$$79_obj$$51$$.$square$) : new $oj$$18$$.$CubeDataValue$(null, $indices$$4$$, void 0, []);
  };
  $oj$$18$$.$Cube$.prototype.$GenerateAxes$ = function $$oj$$18$$$$Cube$$$$GenerateAxes$$() {
    var $nonPageLayout_pageLayout$$ = this.$_getPageLayout$();
    this.$_pin$ = [];
    for (var $i$$261$$ = 0;$i$$261$$ < $nonPageLayout_pageLayout$$.length;$i$$261$$++) {
      this.$_getAxis$($nonPageLayout_pageLayout$$[$i$$261$$].axis, $nonPageLayout_pageLayout$$[$i$$261$$].levels), this.$_pin$.push({axis:$nonPageLayout_pageLayout$$[$i$$261$$].axis, index:0});
    }
    if (0 === $nonPageLayout_pageLayout$$.length) {
      for ($nonPageLayout_pageLayout$$ = this.$_getNonPageLayout$(), $i$$261$$ = 0;$i$$261$$ < $nonPageLayout_pageLayout$$.length;$i$$261$$++) {
        this.$_getAxis$($nonPageLayout_pageLayout$$[$i$$261$$].axis, $nonPageLayout_pageLayout$$[$i$$261$$].levels);
      }
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getPageLayout$ = function $$oj$$18$$$$Cube$$$$_getPageLayout$$() {
    for (var $pageOnlyLayout$$ = [], $i$$262$$ = 0;$i$$262$$ < this.$_layout$.length;$i$$262$$++) {
      1 < this.$_layout$[$i$$262$$].axis && $pageOnlyLayout$$.push(this.$_layout$[$i$$262$$]);
    }
    return $pageOnlyLayout$$;
  };
  $oj$$18$$.$Cube$.prototype.$_getNonPageLayout$ = function $$oj$$18$$$$Cube$$$$_getNonPageLayout$$() {
    for (var $nonPageLayout$$1$$ = [], $i$$263$$ = 0;$i$$263$$ < this.$_layout$.length;$i$$263$$++) {
      2 > this.$_layout$[$i$$263$$].axis && $nonPageLayout$$1$$.push(this.$_layout$[$i$$263$$]);
    }
    return $nonPageLayout$$1$$;
  };
  $oj$$18$$.$Cube$.prototype.$BuildCube$ = function $$oj$$18$$$$Cube$$$$BuildCube$$() {
    this.$_axes$ = [];
    this.$_data$ = [];
    this.$_cubes$ = [];
    this.$GenerateAxes$();
    if (null !== this.$_rows$) {
      for (var $row$$20$$ = 0;$row$$20$$ < this.$_rows$.length;$row$$20$$++) {
        for (var $pageHashObj_pageKey$$ = new $oj$$18$$.$CubeKeys$, $axis$$7_hash$$3_pageHash$$ = 2;$axis$$7_hash$$3_pageHash$$ < this.$_axes$.length;$axis$$7_hash$$3_pageHash$$++) {
          $pageHashObj_pageKey$$ = this.$_axes$[$axis$$7_hash$$3_pageHash$$].$ProcessRow$(this.$_rows$[$row$$20$$], $pageHashObj_pageKey$$);
        }
        for (var $pageHashObj_pageKey$$ = $pageHashObj_pageKey$$.$GetHashCodes$(), $ph$$ = 0;$ph$$ < $pageHashObj_pageKey$$.length;$ph$$++) {
          var $axis$$7_hash$$3_pageHash$$ = $pageHashObj_pageKey$$[$ph$$].key, $cube$$2$$ = this.$_cubes$[$axis$$7_hash$$3_pageHash$$];
          $cube$$2$$ || ($cube$$2$$ = this.$_cubes$[$axis$$7_hash$$3_pageHash$$] = this.$GenerateCube$(this.$_getNonPageLayout$()));
          for (var $dataHash_keys$$12$$ = new $oj$$18$$.$CubeKeys$, $h$$5_maxAxes$$ = $cube$$2$$.$_axes$.length, $axis$$7_hash$$3_pageHash$$ = 0;$axis$$7_hash$$3_pageHash$$ < $h$$5_maxAxes$$;$axis$$7_hash$$3_pageHash$$++) {
            $dataHash_keys$$12$$ = $cube$$2$$.$_axes$[$axis$$7_hash$$3_pageHash$$].$ProcessRow$(this.$_rows$[$row$$20$$], $dataHash_keys$$12$$);
          }
          $dataHash_keys$$12$$ = $axis$$7_hash$$3_pageHash$$ = $dataHash_keys$$12$$.$GetHashCodes$();
          if (void 0 !== $pageHashObj_pageKey$$[$ph$$].$dataValue$) {
            for ($dataHash_keys$$12$$ = [], $h$$5_maxAxes$$ = 0;$h$$5_maxAxes$$ < $axis$$7_hash$$3_pageHash$$.length;$h$$5_maxAxes$$++) {
              $dataHash_keys$$12$$.push($pageHashObj_pageKey$$[$ph$$]);
            }
          }
          $cube$$2$$.$_storeData$($axis$$7_hash$$3_pageHash$$, $dataHash_keys$$12$$, this.$_rows$[$row$$20$$]);
        }
      }
    }
  };
  $oj$$18$$.$Cube$.prototype.$_storeData$ = function $$oj$$18$$$$Cube$$$$_storeData$$($hash$$4$$, $dataHash$$1$$, $row$$21$$) {
    for (var $i$$264$$ = 0;$i$$264$$ < $hash$$4$$.length;$i$$264$$++) {
      this.$_data$[$hash$$4$$[$i$$264$$].key] = this.$_aggregate$($dataHash$$1$$[$i$$264$$], this.$_data$[$hash$$4$$[$i$$264$$].key], $row$$21$$);
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getPinnedCube$ = function $$oj$$18$$$$Cube$$$$_getPinnedCube$$() {
    return this.$_cubes$[this.$_getHashFromPin$(this.$_pin$)];
  };
  $oj$$18$$.$Cube$.prototype.$_getHashFromPin$ = function $$oj$$18$$$$Cube$$$$_getHashFromPin$$($pin$$1$$) {
    var $keys$$13$$ = new $oj$$18$$.$CubeKeys$;
    if ($pin$$1$$ && 0 < $pin$$1$$.length) {
      $pin$$1$$.sort(function($a$$105$$, $b$$63$$) {
        return $a$$105$$.axis - $b$$63$$.axis;
      });
      for (var $axes$$1$$ = this.$_axes$, $i$$265$$ = 0;$i$$265$$ < $pin$$1$$.length;$i$$265$$++) {
        $keys$$13$$ = $axes$$1$$[$pin$$1$$[$i$$265$$].axis].$GetCubeKeys$($pin$$1$$[$i$$265$$].index, $keys$$13$$);
      }
    }
    return $keys$$13$$.$GetHashCodes$()[0].key;
  };
  $oj$$18$$.$Cube$.$_isValid$ = function $$oj$$18$$$$Cube$$$_isValid$$($value$$237$$) {
    return $value$$237$$ ? void 0 !== $value$$237$$.value && null !== $value$$237$$.value : !1;
  };
  $oj$$18$$.$Cube$.prototype.$_createAggValue$ = function $$oj$$18$$$$Cube$$$$_createAggValue$$($value$$238$$, $aggType$$, $rows$$4$$, $retObj$$12_row$$22$$, $props$$14$$) {
    $rows$$4$$.push($retObj$$12_row$$22$$);
    $retObj$$12_row$$22$$ = {};
    for (var $p$$4$$ in $props$$14$$) {
      $props$$14$$.hasOwnProperty($p$$4$$) && ($retObj$$12_row$$22$$[$p$$4$$] = $props$$14$$[$p$$4$$]);
    }
    $retObj$$12_row$$22$$.value = $value$$238$$;
    $retObj$$12_row$$22$$.$aggType$ = $aggType$$;
    $retObj$$12_row$$22$$.rows = $rows$$4$$;
    return $retObj$$12_row$$22$$;
  };
  $oj$$18$$.$Cube$.$_isNumber$ = function $$oj$$18$$$$Cube$$$_isNumber$$($value$$239$$) {
    return $oj$$18$$.$StringUtils$.$isString$($value$$239$$.value) ? !1 : !isNaN($value$$239$$.value);
  };
  $oj$$18$$.$Cube$.prototype.$_aggregate$ = function $$oj$$18$$$$Cube$$$$_aggregate$$($hash$$5_val$$41$$, $currValue$$2$$, $row$$23$$) {
    var $aggObj$$ = this.$GetAggType$($hash$$5_val$$41$$.$dataValue$), $aggType$$1$$ = $aggObj$$.$aggregation$, $avg_validCurr$$ = $oj$$18$$.$Cube$.$_isValid$($currValue$$2$$), $validHash$$ = $oj$$18$$.$Cube$.$_isValid$($hash$$5_val$$41$$), $isNumCurr$$ = $avg_validCurr$$ && $oj$$18$$.$Cube$.$_isNumber$($currValue$$2$$), $isNumHash$$ = $validHash$$ && $oj$$18$$.$Cube$.$_isNumber$($hash$$5_val$$41$$);
    switch($aggType$$1$$) {
      case $oj$$18$$.$CubeAggType$.SUM:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$($currValue$$2$$.value + $hash$$5_val$$41$$.value, $aggType$$1$$, $currValue$$2$$.rows, $row$$23$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$23$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$41$$.value, $aggType$$1$$, [], $row$$23$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$23$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.AVERAGE:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(($currValue$$2$$.$sum$ + $hash$$5_val$$41$$.value) / ($currValue$$2$$.rows.length + 1), $aggType$$1$$, $currValue$$2$$.rows, $row$$23$$, {$sum$:$currValue$$2$$.$sum$ + $hash$$5_val$$41$$.value}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$23$$, {$sum$:$currValue$$2$$.$sum$}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$41$$.value, 
        $aggType$$1$$, [], $row$$23$$, {$sum$:$hash$$5_val$$41$$.value}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$23$$, {$sum$:NaN}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.VARIANCE:
      ;
      case $oj$$18$$.$CubeAggType$.STDDEV:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? ($avg_validCurr$$ = $currValue$$2$$.value + ($hash$$5_val$$41$$.value - $currValue$$2$$.value) / ($currValue$$2$$.rows.length + 1), this.$_createAggValue$($avg_validCurr$$, $aggType$$1$$, $currValue$$2$$.rows, $row$$23$$, {$square$:$currValue$$2$$.$square$ + ($hash$$5_val$$41$$.value - $currValue$$2$$.value) * ($hash$$5_val$$41$$.value - $avg_validCurr$$)})) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, 
        $row$$23$$, {$square$:NaN}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$41$$.value, $aggType$$1$$, [], $row$$23$$, {$square$:0}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$23$$, {$square$:NaN}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.NONE:
        return this.$_createAggValue$(null, $aggType$$1$$, $avg_validCurr$$ ? $currValue$$2$$.rows : [], $row$$23$$, {});
      case $oj$$18$$.$CubeAggType$.FIRST:
        return $avg_validCurr$$ ? this.$_createAggValue$($currValue$$2$$.value, $aggType$$1$$, $currValue$$2$$.rows, $row$$23$$, {}) : $validHash$$ ? this.$_createAggValue$($hash$$5_val$$41$$.value, $aggType$$1$$, [], $row$$23$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.MIN:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(Math.min($currValue$$2$$.value, $hash$$5_val$$41$$.value), $aggType$$1$$, $currValue$$2$$.rows, $row$$23$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$23$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$41$$.value, $aggType$$1$$, [], $row$$23$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$23$$, {}) : 
        $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.MAX:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(Math.max($currValue$$2$$.value, $hash$$5_val$$41$$.value), $aggType$$1$$, $currValue$$2$$.rows, $row$$23$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$23$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$41$$.value, $aggType$$1$$, [], $row$$23$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$23$$, {}) : 
        $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.COUNT:
        return $avg_validCurr$$ && $validHash$$ ? this.$_createAggValue$($currValue$$2$$.value + 1, $aggType$$1$$, $currValue$$2$$.rows, $row$$23$$, {}) : $validHash$$ && !$avg_validCurr$$ ? this.$_createAggValue$(1, $aggType$$1$$, [], $row$$23$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.CUSTOM:
        return $hash$$5_val$$41$$ = $aggObj$$.$callback$.call(this, $avg_validCurr$$ ? $currValue$$2$$.value : void 0, $validHash$$ ? $hash$$5_val$$41$$.value : void 0), this.$_createAggValue$($hash$$5_val$$41$$, $aggType$$1$$, $avg_validCurr$$ ? $currValue$$2$$.rows : [], $row$$23$$, {});
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getAxis$ = function $$oj$$18$$$$Cube$$$$_getAxis$$($axis$$8$$, $levels$$) {
    $axis$$8$$ >= this.$_axes$.length && Array.prototype.push.apply(this.$_axes$, Array($axis$$8$$ - this.$_axes$.length + 1));
    this.$_axes$[$axis$$8$$] || (this.$_axes$[$axis$$8$$] = new $oj$$18$$.$CubeAxis$($levels$$, $axis$$8$$, this));
    return this.$_axes$[$axis$$8$$];
  };
  $oj$$18$$.$Cube$.prototype.$_createCubeKeys$ = function $$oj$$18$$$$Cube$$$$_createCubeKeys$$($indices$$5$$) {
    for (var $axes$$2$$ = this.$getAxes$(), $keys$$14$$ = new $oj$$18$$.$CubeKeys$, $a$$106$$ = 0;$a$$106$$ < $indices$$5$$.length;$a$$106$$++) {
      $keys$$14$$ = $axes$$2$$[$a$$106$$].$GetCubeKeys$($indices$$5$$[$a$$106$$], $keys$$14$$);
    }
    return $keys$$14$$;
  };
  $oj$$18$$.$Cube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$Cube$$$$ProcessLevel$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GenerateCube$ = function $$oj$$18$$$$Cube$$$$GenerateCube$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$Cube$$$$GenerateLevel$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GetAggType$ = function $$oj$$18$$$$Cube$$$$GetAggType$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
    return{};
  };
  $oj$$18$$.$CubeAggType$ = {SUM:"sum", AVERAGE:"avg", STDDEV:"stddev", VARIANCE:"variance", NONE:"none", FIRST:"first", MIN:"min", MAX:"max", COUNT:"count", CUSTOM:"custom"};
  $goog$exportPath_$$("CubeAggType", $oj$$18$$.$CubeAggType$, $oj$$18$$);
  $oj$$18$$.$CubeAxisValue$ = function $$oj$$18$$$$CubeAxisValue$$($value$$240$$, $label$$10$$, $level$$14$$, $parent$$12$$) {
    this.Init();
    this.$_children$ = [];
    this.$_parent$ = $parent$$12$$;
    this.$_cubeLevel$ = $level$$14$$;
    this.$_data$ = {};
    this.$_data$.value = $value$$240$$;
    this.$_data$.label = $label$$10$$;
  };
  $goog$exportPath_$$("CubeAxisValue", $oj$$18$$.$CubeAxisValue$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeAxisValue$, $oj$$18$$.$Object$, "oj.CubeAxisValue");
  $oj$$18$$.$CubeAxisValue$.prototype.Init = function $$oj$$18$$$$CubeAxisValue$$$Init$() {
    $oj$$18$$.$CubeAxisValue$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$getLevel$ = function $$oj$$18$$$$CubeAxisValue$$$$getLevel$$() {
    return this.$_cubeLevel$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getLevel", {$getLevel$:$oj$$18$$.$CubeAxisValue$.prototype.$getLevel$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getDepth$ = function $$oj$$18$$$$CubeAxisValue$$$$getDepth$$() {
    return 1;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getDepth", {$getDepth$:$oj$$18$$.$CubeAxisValue$.prototype.$getDepth$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getParents$ = function $$oj$$18$$$$CubeAxisValue$$$$getParents$$() {
    for (var $parents$$2$$ = [], $parent$$13$$ = this.$_parent$;$parent$$13$$ && $parent$$13$$.$_parent$;) {
      $parents$$2$$.unshift($parent$$13$$), $parent$$13$$ = $parent$$13$$.$_parent$;
    }
    return $parents$$2$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getParents", {$getParents$:$oj$$18$$.$CubeAxisValue$.prototype.$getParents$});
  $oj$$18$$.$CubeAxisValue$.prototype.getChildren = function $$oj$$18$$$$CubeAxisValue$$$getChildren$() {
    return this.$_children$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getChildren", {getChildren:$oj$$18$$.$CubeAxisValue$.prototype.getChildren});
  $oj$$18$$.$CubeAxisValue$.prototype.$getExtent$ = function $$oj$$18$$$$CubeAxisValue$$$$getExtent$$() {
    if (-1 < this.$_extent$) {
      return this.$_extent$;
    }
    if (this.$_children$ && 0 !== this.$_children$.length) {
      for (var $c$$40$$ = this.$_extent$ = 0;$c$$40$$ < this.getChildren().length;$c$$40$$++) {
        this.$_extent$ += this.getChildren()[$c$$40$$].$getExtent$();
      }
    } else {
      this.$_extent$ = 1;
    }
    return this.$_extent$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getExtent", {$getExtent$:$oj$$18$$.$CubeAxisValue$.prototype.$getExtent$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getStart$ = function $$oj$$18$$$$CubeAxisValue$$$$getStart$$() {
    if (-1 < this.$_start$) {
      return this.$_start$;
    }
    if (!this.$_parent$) {
      return 0;
    }
    for (var $start$$32$$ = this.$_parent$.$getStart$(), $currChild$$ = this.$_parent$.$_getPrevChild$(this);$currChild$$;) {
      $start$$32$$ += $currChild$$.$getExtent$(), $currChild$$ = this.$_parent$.$_getPrevChild$($currChild$$);
    }
    return this.$_start$ = $start$$32$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getStart", {$getStart$:$oj$$18$$.$CubeAxisValue$.prototype.$getStart$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getValue$ = function $$oj$$18$$$$CubeAxisValue$$$$getValue$$() {
    return this.$_data$.value;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getValue", {$getValue$:$oj$$18$$.$CubeAxisValue$.prototype.$getValue$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getLabel$ = function $$oj$$18$$$$CubeAxisValue$$$$getLabel$$() {
    return this.$_data$.label ? this.$_data$.label : this.$getValue$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getLabel", {$getLabel$:$oj$$18$$.$CubeAxisValue$.prototype.$getLabel$});
  $oj$$18$$.$CubeAxisValue$.prototype.$GetChild$ = function $$oj$$18$$$$CubeAxisValue$$$$GetChild$$($key$$80_val$$42$$) {
    var $c$$41_childLevel$$ = this.$_getChildLevel$();
    if (null === $c$$41_childLevel$$) {
      return null;
    }
    if ($c$$41_childLevel$$.$isDataValue$()) {
      return this.$_getDataValueChild$($key$$80_val$$42$$);
    }
    if ($key$$80_val$$42$$ = $key$$80_val$$42$$[$c$$41_childLevel$$.attribute]) {
      for ($c$$41_childLevel$$ = 0;$c$$41_childLevel$$ < this.$_children$.length;$c$$41_childLevel$$++) {
        if (this.$_children$[$c$$41_childLevel$$].$getValue$() === $key$$80_val$$42$$) {
          return this.$_children$[$c$$41_childLevel$$];
        }
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getDataValueChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_getDataValueChild$$($key$$81$$) {
    for (var $c$$42$$ = 0;$c$$42$$ < this.$_children$.length;$c$$42$$++) {
      var $val$$43$$ = this.$_children$[$c$$42$$].$getValue$();
      if ($key$$81$$.hasOwnProperty($val$$43$$) && $key$$81$$[$val$$43$$] === $val$$43$$) {
        return this.$_children$[$c$$42$$];
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getChildLevel$ = function $$oj$$18$$$$CubeAxisValue$$$$_getChildLevel$$() {
    return this.$_children$ && 0 < this.$_children$.length ? this.$_children$[0].$getLevel$() : null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$GetChildAt$ = function $$oj$$18$$$$CubeAxisValue$$$$GetChildAt$$($index$$114$$) {
    return this.$_findChild$($index$$114$$, 0, this.$_children$.length - 1);
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_findChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_findChild$$($index$$115$$, $start$$33$$, $end$$10$$) {
    if ($start$$33$$ > $end$$10$$) {
      return null;
    }
    var $mid$$1$$ = Math.floor(($start$$33$$ + $end$$10$$) / 2), $value$$241$$ = this.$_children$[$mid$$1$$], $valStart$$ = $value$$241$$.$getStart$();
    return $valStart$$ > $index$$115$$ ? this.$_findChild$($index$$115$$, $start$$33$$, $mid$$1$$ - 1) : $valStart$$ + $value$$241$$.$getExtent$() - 1 < $index$$115$$ ? this.$_findChild$($index$$115$$, $mid$$1$$ + 1, $end$$10$$) : $value$$241$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$AddNode$ = function $$oj$$18$$$$CubeAxisValue$$$$AddNode$$($newValue$$19_value$$242$$, $label$$11$$, $level$$15$$) {
    for (var $c$$43$$ = 0;$c$$43$$ < this.$_children$.length;$c$$43$$++) {
      if (this.$_children$[$c$$43$$].$getValue$() === $newValue$$19_value$$242$$) {
        return this.$_children$[$c$$43$$];
      }
    }
    $newValue$$19_value$$242$$ = new $oj$$18$$.$CubeAxisValue$($newValue$$19_value$$242$$, $label$$11$$, $level$$15$$, this);
    this.$_children$.push($newValue$$19_value$$242$$);
    return $newValue$$19_value$$242$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$GetHashCode$ = function $$oj$$18$$$$CubeAxisValue$$$$GetHashCode$$() {
    var $obj$$52$$ = {};
    $obj$$52$$[this.$getLevel$().attribute] = this.$getValue$();
    return $obj$$52$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getPrevChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_getPrevChild$$($currChild$$1$$) {
    for (var $c$$44$$ = 0;$c$$44$$ < this.$_children$.length;$c$$44$$++) {
      if (this.$_children$[$c$$44$$] === $currChild$$1$$) {
        if (0 < $c$$44$$) {
          return this.$_children$[$c$$44$$ - 1];
        }
        break;
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxis$ = function $$oj$$18$$$$CubeAxis$$($levels$$2$$, $axis$$10_i$$266$$, $cube$$3$$) {
    this.Init();
    this.axis = $axis$$10_i$$266$$;
    this.$_levels$ = [];
    for ($axis$$10_i$$266$$ = 0;$axis$$10_i$$266$$ < $levels$$2$$.length;$axis$$10_i$$266$$++) {
      this.$_levels$.push($cube$$3$$.$GenerateLevel$($levels$$2$$[$axis$$10_i$$266$$], this));
    }
    this.$_cube$ = $cube$$3$$;
    this.$_values$ = new $oj$$18$$.$CubeAxisValue$(null, null, null, null);
  };
  $goog$exportPath_$$("CubeAxis", $oj$$18$$.$CubeAxis$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeAxis$, $oj$$18$$.$Object$, "oj.CubeAxis");
  $oj$$18$$.$CubeAxis$.prototype.Init = function $$oj$$18$$$$CubeAxis$$$Init$() {
    $oj$$18$$.$CubeAxis$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeAxis$.prototype.$getLevels$ = function $$oj$$18$$$$CubeAxis$$$$getLevels$$() {
    return this.$_levels$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getLevels", {$getLevels$:$oj$$18$$.$CubeAxis$.prototype.$getLevels$});
  $oj$$18$$.$CubeAxis$.prototype.$getExtent$ = function $$oj$$18$$$$CubeAxis$$$$getExtent$$() {
    return this.$_values$.$getExtent$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getExtent", {$getExtent$:$oj$$18$$.$CubeAxis$.prototype.$getExtent$});
  $oj$$18$$.$CubeAxis$.prototype.$getValues$ = function $$oj$$18$$$$CubeAxis$$$$getValues$$($index$$116$$) {
    for (var $values$$8$$ = [], $node$$61$$ = this.$_values$;$node$$61$$;) {
      ($node$$61$$ = $node$$61$$.$GetChildAt$($index$$116$$)) && $values$$8$$.push($node$$61$$);
    }
    return $values$$8$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getValues", {$getValues$:$oj$$18$$.$CubeAxis$.prototype.$getValues$});
  $oj$$18$$.$CubeAxis$.prototype.$getIndex$ = function $$oj$$18$$$$CubeAxis$$$$getIndex$$($key$$82_keyVal$$) {
    $key$$82_keyVal$$ = $key$$82_keyVal$$ ? JSON.parse($key$$82_keyVal$$) : {};
    for (var $node$$62$$ = this.$_values$, $lastNode$$ = null;$node$$62$$;) {
      $lastNode$$ = $node$$62$$, $node$$62$$ = $node$$62$$.$GetChild$($key$$82_keyVal$$);
    }
    return $lastNode$$ ? $lastNode$$.$getStart$() : -1;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getIndex", {$getIndex$:$oj$$18$$.$CubeAxis$.prototype.$getIndex$});
  $oj$$18$$.$CubeAxis$.prototype.$GetCubeKeys$ = function $$oj$$18$$$$CubeAxis$$$$GetCubeKeys$$($index$$117$$, $keys$$16$$) {
    return this.$GetPartialCubeKeys$($index$$117$$, this.$getLevels$().length - 1, $keys$$16$$);
  };
  $oj$$18$$.$CubeAxis$.prototype.$GetPartialCubeKeys$ = function $$oj$$18$$$$CubeAxis$$$$GetPartialCubeKeys$$($index$$118_values$$9$$, $level$$16_stopLevel$$, $keys$$17$$) {
    $index$$118_values$$9$$ = this.$getValues$($index$$118_values$$9$$);
    $level$$16_stopLevel$$ = this.$getLevels$()[$level$$16_stopLevel$$];
    for (var $v$$ = 0;$v$$ < $index$$118_values$$9$$.length;$v$$++) {
      var $val$$44$$ = $index$$118_values$$9$$[$v$$];
      $val$$44$$.$getLevel$().$isDataValue$() ? $keys$$17$$.$AddDataValue$($val$$44$$.$getValue$()) : $keys$$17$$.$UpdateKeys$($val$$44$$);
      if ($val$$44$$.$getLevel$() === $level$$16_stopLevel$$) {
        break;
      }
    }
    return $keys$$17$$;
  };
  $oj$$18$$.$CubeAxis$.prototype.$ProcessRow$ = function $$oj$$18$$$$CubeAxis$$$$ProcessRow$$($row$$25$$, $keys$$18$$) {
    return this.$_cube$.$ProcessLevel$(this, 0, this.$_values$, $row$$25$$, $keys$$18$$, !0);
  };
  $oj$$18$$.$CubeCellSet$ = function $$oj$$18$$$$CubeCellSet$$($cube$$4$$, $cellRange$$) {
    var $startRow$$ = $cellRange$$.row ? $cellRange$$.row.start : 0, $rowCount$$4$$ = $cellRange$$.row ? $cellRange$$.row.count : 0, $startColumn$$ = $cellRange$$.column ? $cellRange$$.column.start : 0, $colCount$$ = $cellRange$$.column ? $cellRange$$.column.count : 0;
    $oj$$18$$.$Assert$.$assertNumber$($startRow$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($rowCount$$4$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($startColumn$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($colCount$$, null);
    this.$_cube$ = $cube$$4$$;
    this.$_starts$ = {row:$startRow$$, column:$startColumn$$};
    this.$_values$ = this.$_cube$.$getValues$([{start:$startColumn$$, count:$colCount$$}, {start:$startRow$$, count:$rowCount$$4$$}]);
    $colCount$$ = this.$_values$.length;
    0 < $colCount$$ && ($rowCount$$4$$ = this.$_values$[0].length);
    this.$_counts$ = {row:$rowCount$$4$$, column:$colCount$$};
  };
  $goog$exportPath_$$("CubeCellSet", $oj$$18$$.$CubeCellSet$, $oj$$18$$);
  $oj$$18$$.$CubeCellSet$.prototype.getData = function $$oj$$18$$$$CubeCellSet$$$getData$($cell$$3_indexes$$1$$) {
    return($cell$$3_indexes$$1$$ = this.$_values$[$cell$$3_indexes$$1$$.column - this.$_starts$.column][$cell$$3_indexes$$1$$.row - this.$_starts$.row]) ? $cell$$3_indexes$$1$$.$getValue$() : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getData", {getData:$oj$$18$$.$CubeCellSet$.prototype.getData});
  $oj$$18$$.$CubeCellSet$.prototype.getMetadata = function $$oj$$18$$$$CubeCellSet$$$getMetadata$($indexes$$2$$) {
    var $obj$$53$$ = {keys:{}};
    $obj$$53$$.keys.row = this.$_getAxisMetadata$($indexes$$2$$, "row", 2);
    $obj$$53$$.keys.column = this.$_getAxisMetadata$($indexes$$2$$, "column", 1);
    return $obj$$53$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getMetadata", {getMetadata:$oj$$18$$.$CubeCellSet$.prototype.getMetadata});
  $oj$$18$$.$CubeCellSet$.prototype.$_getAxisMetadata$ = function $$oj$$18$$$$CubeCellSet$$$$_getAxisMetadata$$($indexes$$3$$, $axis$$11$$, $keys$$19_len$$18$$) {
    var $axes$$3$$ = this.$_cube$.$getAxes$();
    return void 0 !== $indexes$$3$$[$axis$$11$$] && $axes$$3$$.length >= $keys$$19_len$$18$$ ? ($keys$$19_len$$18$$ = new $oj$$18$$.$CubeKeys$, $keys$$19_len$$18$$ = $axes$$3$$[$oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$($axis$$11$$)].$GetCubeKeys$($indexes$$3$$[$axis$$11$$], $keys$$19_len$$18$$), $keys$$19_len$$18$$.$GetHashCodes$()[0].key) : null;
  };
  $oj$$18$$.$CubeCellSet$.prototype.$getStart$ = function $$oj$$18$$$$CubeCellSet$$$$getStart$$($axis$$12$$) {
    return this.$_starts$[$axis$$12$$];
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getStart", {$getStart$:$oj$$18$$.$CubeCellSet$.prototype.$getStart$});
  $oj$$18$$.$CubeCellSet$.prototype.$getCount$ = function $$oj$$18$$$$CubeCellSet$$$$getCount$$($axis$$13$$) {
    return this.$_counts$[$axis$$13$$];
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getCount", {$getCount$:$oj$$18$$.$CubeCellSet$.prototype.$getCount$});
  $oj$$18$$.$CubeDataGridDataSource$ = function $$oj$$18$$$$CubeDataGridDataSource$$($cube$$5$$) {
    $oj$$18$$.$CubeDataGridDataSource$.$superclass$.constructor.call(this, $cube$$5$$);
  };
  $goog$exportPath_$$("CubeDataGridDataSource", $oj$$18$$.$CubeDataGridDataSource$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeDataGridDataSource$, $oj$$18$$.$DataGridDataSource$, "oj.CubeDataGridDataSource");
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$setCube$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$setCube$$($cube$$6$$) {
    this.data = $cube$$6$$;
    this.$_fireRefresh$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.setCube", {$setCube$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$setCube$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.setPage = function $$oj$$18$$$$CubeDataGridDataSource$$$setPage$($indices$$6$$) {
    this.data.setPage($indices$$6$$);
    this.$_fireRefresh$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.setPage", {setPage:$oj$$18$$.$CubeDataGridDataSource$.prototype.setPage});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_fireRefresh$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_fireRefresh$$() {
    this.handleEvent("change", {source:this, operation:"refresh"});
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$getCount$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$getCount$$($axis$$14_axisObj$$) {
    return($axis$$14_axisObj$$ = this.$_getAxis$($axis$$14_axisObj$$)) ? $axis$$14_axisObj$$.$getExtent$() : 0;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCount", {$getCount$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$getCount$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$getCountPrecision$$() {
    return "exact";
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$fetchHeaders$$($headerRange$$, $callbacks$$4$$, $callbackObjects$$) {
    var $cubeheaders$$ = new $oj$$18$$.$CubeHeaderSet$(this.$_getAxis$($headerRange$$.axis), this.data, $headerRange$$.start, $headerRange$$.count);
    $callbacks$$4$$.success.call($callbackObjects$$ ? $callbackObjects$$.success : void 0, $cubeheaders$$, $headerRange$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$fetchCells$$($cellRange$$1$$, $callbacks$$5$$, $callbackObjects$$1$$) {
    for (var $cubecells_obj$$54$$ = {}, $i$$267$$ = 0;$i$$267$$ < $cellRange$$1$$.length;$i$$267$$++) {
      var $start$$34$$ = void 0 === $cellRange$$1$$[$i$$267$$].start ? 0 : $cellRange$$1$$[$i$$267$$].start;
      if ("row" === $cellRange$$1$$[$i$$267$$].axis) {
        var $count$$33$$ = void 0 === $cellRange$$1$$[$i$$267$$].count ? this.data.$getAxes$()[1].$getExtent$() : $cellRange$$1$$[$i$$267$$].count;
        $cubecells_obj$$54$$.row = {start:$start$$34$$, count:$count$$33$$};
      }
      "column" === $cellRange$$1$$[$i$$267$$].axis && ($count$$33$$ = void 0 === $cellRange$$1$$[$i$$267$$].count ? this.data.$getAxes$()[0].$getExtent$() : $cellRange$$1$$[$i$$267$$].count, $cubecells_obj$$54$$.column = {start:$start$$34$$, count:$count$$33$$});
    }
    $cubecells_obj$$54$$ = new $oj$$18$$.$CubeCellSet$(this.data, $cubecells_obj$$54$$);
    $callbacks$$5$$.success.call($callbackObjects$$1$$ ? $callbackObjects$$1$$.success : void 0, $cubecells_obj$$54$$, $cellRange$$1$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$fetchCells$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.keys = function $$oj$$18$$$$CubeDataGridDataSource$$$keys$($indexes$$4$$) {
    var $retObj$$13$$ = {}, $retObj$$13$$ = this.$_getKey$($indexes$$4$$, "row", $retObj$$13$$), $retObj$$13$$ = this.$_getKey$($indexes$$4$$, "column", $retObj$$13$$);
    return Promise.resolve($retObj$$13$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.keys", {keys:$oj$$18$$.$CubeDataGridDataSource$.prototype.keys});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getKey$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getKey$$($indexes$$5_item$$14$$, $axis$$16$$, $retObj$$14$$) {
    var $axisObj$$1$$ = this.$_getAxis$($axis$$16$$);
    $indexes$$5_item$$14$$ = $indexes$$5_item$$14$$[$axis$$16$$];
    var $keys$$20$$ = new $oj$$18$$.$CubeKeys$, $keys$$20$$ = $axisObj$$1$$ ? $axisObj$$1$$.$GetCubeKeys$($indexes$$5_item$$14$$, $keys$$20$$) : "";
    $retObj$$14$$[$axis$$16$$] = $keys$$20$$.$GetHashCodes$()[0].key;
    return $retObj$$14$$;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$indexes$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$indexes$$($keys$$21$$) {
    var $retObj$$15$$ = {}, $retObj$$15$$ = this.$_getIndex$($keys$$21$$, "row", $retObj$$15$$), $retObj$$15$$ = this.$_getIndex$($keys$$21$$, "column", $retObj$$15$$);
    return Promise.resolve($retObj$$15$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.indexes", {$indexes$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$indexes$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getIndex$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getIndex$$($keys$$22$$, $axis$$17$$, $retObj$$16$$) {
    $retObj$$16$$[$axis$$17$$] = this.$_getAxis$($axis$$17$$).$getIndex$($keys$$22$$[$axis$$17$$]);
    return $retObj$$16$$;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.sort = function $$oj$$18$$$$CubeDataGridDataSource$$$sort$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.sort", {sort:$oj$$18$$.$CubeDataGridDataSource$.prototype.sort});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.move = function $$oj$$18$$$$CubeDataGridDataSource$$$move$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.move", {move:$oj$$18$$.$CubeDataGridDataSource$.prototype.move});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$moveOK$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$moveOK$$() {
    return "invalid";
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.moveOK", {$moveOK$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$moveOK$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.getCapability = function $$oj$$18$$$$CubeDataGridDataSource$$$getCapability$($feature$$4$$) {
    switch($feature$$4$$) {
      case "sort":
        return "none";
      case "move":
        return "none";
    }
    return null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCapability", {getCapability:$oj$$18$$.$CubeDataGridDataSource$.prototype.getCapability});
  $oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$ = function $$oj$$18$$$$CubeDataGridDataSource$$$_convertAxes$$($axis$$18$$) {
    return "row" === $axis$$18$$ ? 1 : 0;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getAxis$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getAxis$$($axis$$19_axisNum$$) {
    $axis$$19_axisNum$$ = $oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$($axis$$19_axisNum$$);
    var $axes$$4$$ = this.data.$getAxes$();
    return $axes$$4$$.length > $axis$$19_axisNum$$ ? $axes$$4$$[$axis$$19_axisNum$$] : null;
  };
  $oj$$18$$.$CubeDataValue$ = function $$oj$$18$$$$CubeDataValue$$($value$$243$$, $indices$$7$$, $aggType$$2$$, $rows$$5$$, $square$$) {
    this.Init();
    this.$_data$ = {};
    this.$_data$.value = $value$$243$$;
    this.$_data$.$indices$ = $indices$$7$$;
    this.$_data$.$aggType$ = $aggType$$2$$;
    this.$_data$.rows = $rows$$5$$;
    this.$_data$.$square$ = $square$$;
  };
  $goog$exportPath_$$("CubeDataValue", $oj$$18$$.$CubeDataValue$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeDataValue$, $oj$$18$$.$Object$, "oj.CubeDataValue");
  $oj$$18$$.$CubeDataValue$.prototype.Init = function $$oj$$18$$$$CubeDataValue$$$Init$() {
    $oj$$18$$.$CubeDataValue$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeDataValue$.prototype.$getValue$ = function $$oj$$18$$$$CubeDataValue$$$$getValue$$() {
    switch(this.$_data$.$aggType$) {
      case $oj$$18$$.$CubeAggType$.STDDEV:
        return Math.sqrt(this.$_getVariance$());
      case $oj$$18$$.$CubeAggType$.VARIANCE:
        return this.$_getVariance$();
      default:
        return this.$_data$.value;
    }
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getValue", {$getValue$:$oj$$18$$.$CubeDataValue$.prototype.$getValue$});
  $oj$$18$$.$CubeDataValue$.prototype.$getIndices$ = function $$oj$$18$$$$CubeDataValue$$$$getIndices$$() {
    return this.$_data$.$indices$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getIndices", {$getIndices$:$oj$$18$$.$CubeDataValue$.prototype.$getIndices$});
  $oj$$18$$.$CubeDataValue$.prototype.$getRows$ = function $$oj$$18$$$$CubeDataValue$$$$getRows$$() {
    return this.$_data$.rows;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getRows", {$getRows$:$oj$$18$$.$CubeDataValue$.prototype.$getRows$});
  $oj$$18$$.$CubeDataValue$.prototype.$getAggregation$ = function $$oj$$18$$$$CubeDataValue$$$$getAggregation$$() {
    return this.$_data$.$aggType$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getAggregation", {$getAggregation$:$oj$$18$$.$CubeDataValue$.prototype.$getAggregation$});
  $oj$$18$$.$CubeDataValue$.prototype.$_getVariance$ = function $$oj$$18$$$$CubeDataValue$$$$_getVariance$$() {
    if (isNaN(this.$_data$.$square$)) {
      return NaN;
    }
    var $count$$34$$ = this.$_data$.rows.length;
    return 1 < $count$$34$$ ? this.$_data$.$square$ / ($count$$34$$ - 1) : 0;
  };
  $oj$$18$$.$CubeHeaderSet$ = function $$oj$$18$$$$CubeHeaderSet$$($axis$$20$$, $cube$$7$$, $start$$35$$, $count$$35$$) {
    this.$_cube$ = $cube$$7$$;
    this.$_axis$ = $axis$$20$$;
    this.$_start$ = void 0 === $start$$35$$ ? 0 : $start$$35$$;
    this.$_count$ = void 0 === $count$$35$$ ? this.$_axis$.$getExtent$() : Math.min($count$$35$$, this.$_axis$.$getExtent$() - $start$$35$$);
    this.$_end$ = $start$$35$$ + $count$$35$$ - 1;
  };
  $goog$exportPath_$$("CubeHeaderSet", $oj$$18$$.$CubeHeaderSet$, $oj$$18$$);
  $oj$$18$$.$CubeHeaderSet$.prototype.getData = function $$oj$$18$$$$CubeHeaderSet$$$getData$($index$$119$$, $level$$17$$) {
    var $val$$45$$ = this.$_getValue$($index$$119$$, $level$$17$$);
    return $val$$45$$ ? $val$$45$$.$getLabel$() : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getData", {getData:$oj$$18$$.$CubeHeaderSet$.prototype.getData});
  $oj$$18$$.$CubeHeaderSet$.prototype.getMetadata = function $$oj$$18$$$$CubeHeaderSet$$$getMetadata$($index$$120$$, $level$$18$$) {
    var $hash$$6_keys$$23$$ = new $oj$$18$$.$CubeKeys$, $hash$$6_keys$$23$$ = this.$_axis$.$GetPartialCubeKeys$($index$$120$$, $level$$18$$, $hash$$6_keys$$23$$);
    return($hash$$6_keys$$23$$ = $hash$$6_keys$$23$$.$GetHashCodes$()) && 0 < $hash$$6_keys$$23$$.length ? {key:$hash$$6_keys$$23$$[0].key} : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$18$$.$CubeHeaderSet$.prototype.getMetadata});
  $oj$$18$$.$CubeHeaderSet$.prototype.$getLevelCount$ = function $$oj$$18$$$$CubeHeaderSet$$$$getLevelCount$$() {
    return this.$_axis$.$getLevels$().length;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$18$$.$CubeHeaderSet$.prototype.$getLevelCount$});
  $oj$$18$$.$CubeHeaderSet$.prototype.$getExtent$ = function $$oj$$18$$$$CubeHeaderSet$$$$getExtent$$($index$$121$$, $level$$19$$) {
    var $start$$36_val$$46$$ = this.$_getValue$($index$$121$$, $level$$19$$), $extent$$ = $start$$36_val$$46$$.$getExtent$(), $start$$36_val$$46$$ = $start$$36_val$$46$$.$getStart$(), $end$$11$$ = $start$$36_val$$46$$ + $extent$$ - 1, $after$$ = $index$$121$$ < $start$$36_val$$46$$ + $extent$$ - 1;
    $start$$36_val$$46$$ < this.$_start$ && ($extent$$ -= this.$_start$ - $start$$36_val$$46$$);
    $end$$11$$ > this.$_end$ && ($extent$$ -= $end$$11$$ - this.$_end$);
    return{extent:$extent$$, more:{before:$index$$121$$ > $start$$36_val$$46$$, after:$after$$}};
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getExtent", {$getExtent$:$oj$$18$$.$CubeHeaderSet$.prototype.$getExtent$});
  $oj$$18$$.$CubeHeaderSet$.prototype.$getDepth$ = function $$oj$$18$$$$CubeHeaderSet$$$$getDepth$$($index$$122$$, $level$$20$$) {
    return this.$_getValue$($index$$122$$, $level$$20$$).$getDepth$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getDepth", {$getDepth$:$oj$$18$$.$CubeHeaderSet$.prototype.$getDepth$});
  $oj$$18$$.$CubeHeaderSet$.prototype.$getCount$ = function $$oj$$18$$$$CubeHeaderSet$$$$getCount$$() {
    return this.$_count$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getCount", {$getCount$:$oj$$18$$.$CubeHeaderSet$.prototype.$getCount$});
  $oj$$18$$.$CubeHeaderSet$.prototype.$getStart$ = function $$oj$$18$$$$CubeHeaderSet$$$$getStart$$() {
    return this.$_start$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getStart", {$getStart$:$oj$$18$$.$CubeHeaderSet$.prototype.$getStart$});
  $oj$$18$$.$CubeHeaderSet$.prototype.$_getValue$ = function $$oj$$18$$$$CubeHeaderSet$$$$_getValue$$($index$$123$$, $level$$21$$) {
    void 0 === $level$$21$$ && ($level$$21$$ = 0);
    var $values$$10$$ = this.$_axis$.$getValues$($index$$123$$);
    return $values$$10$$ && $values$$10$$.length > $level$$21$$ ? $values$$10$$[$level$$21$$] : null;
  };
  $oj$$18$$.$CubeKeys$ = function $$oj$$18$$$$CubeKeys$$() {
    this.$_key$ = [];
    this.$_data$ = [];
  };
  $oj$$18$$.$CubeKeys$.prototype.$UpdateKeys$ = function $$oj$$18$$$$CubeKeys$$$$UpdateKeys$$($node$$63$$) {
    this.$_key$.push($node$$63$$);
  };
  $oj$$18$$.$CubeKeys$.prototype.$AddDataValue$ = function $$oj$$18$$$$CubeKeys$$$$AddDataValue$$($name$$118$$, $value$$244$$) {
    this.$_data$.push({name:$name$$118$$, value:$value$$244$$});
  };
  $oj$$18$$.$CubeKeys$.prototype.$GetHashCodes$ = function $$oj$$18$$$$CubeKeys$$$$GetHashCodes$$() {
    var $codes$$ = [], $keyHash$$ = this.$_buildKeyHash$();
    if (0 === this.$_data$.length) {
      $codes$$.push({key:JSON.stringify($keyHash$$)});
    } else {
      for (var $d$$6$$ = 0;$d$$6$$ < this.$_data$.length;$d$$6$$++) {
        var $copy$$ = $$$$17$$.extend(!0, {}, $keyHash$$);
        $copy$$[this.$_data$[$d$$6$$].name] = this.$_data$[$d$$6$$].name;
        $codes$$.push({key:JSON.stringify($copy$$), $dataValue$:this.$_data$[$d$$6$$].name, value:this.$_data$[$d$$6$$].value});
      }
    }
    return $codes$$;
  };
  $oj$$18$$.$CubeKeys$.prototype.$_buildKeyHash$ = function $$oj$$18$$$$CubeKeys$$$$_buildKeyHash$$() {
    for (var $keyHash$$1$$ = {}, $k$$13$$ = 0;$k$$13$$ < this.$_key$.length;$k$$13$$++) {
      var $hc$$ = this.$_key$[$k$$13$$].$GetHashCode$(), $p$$5$$;
      for ($p$$5$$ in $hc$$) {
        $hc$$.hasOwnProperty($p$$5$$) && ($keyHash$$1$$[$p$$5$$] = $hc$$[$p$$5$$]);
      }
    }
    return $keyHash$$1$$;
  };
  $oj$$18$$.$CubeLevel$ = function $$oj$$18$$$$CubeLevel$$($attribute$$4$$, $axis$$21$$, $dataValue$$1$$) {
    this.Init();
    this.attribute = $attribute$$4$$;
    this.$_axisObj$ = $axis$$21$$;
    this.axis = $axis$$21$$.axis;
    this.$_dataValue$ = $dataValue$$1$$;
  };
  $goog$exportPath_$$("CubeLevel", $oj$$18$$.$CubeLevel$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeLevel$, $oj$$18$$.$Object$, "oj.CubeLevel");
  $oj$$18$$.$CubeLevel$.prototype.Init = function $$oj$$18$$$$CubeLevel$$$Init$() {
    $oj$$18$$.$CubeLevel$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeLevel$.prototype.$getValue$ = function $$oj$$18$$$$CubeLevel$$$$getValue$$($index$$124_values$$11$$) {
    if ($index$$124_values$$11$$ = this.$_axisObj$.$getValues$($index$$124_values$$11$$)) {
      for (var $v$$1$$ = 0;$v$$1$$ < $index$$124_values$$11$$.length;$v$$1$$++) {
        if ($index$$124_values$$11$$[$v$$1$$].$getLevel$() === this) {
          return $index$$124_values$$11$$[$v$$1$$];
        }
      }
    }
    return null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeLevel.prototype.getValue", {$getValue$:$oj$$18$$.$CubeLevel$.prototype.$getValue$});
  $oj$$18$$.$CubeLevel$.prototype.$isDataValue$ = function $$oj$$18$$$$CubeLevel$$$$isDataValue$$() {
    return this.$_dataValue$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeLevel.prototype.isDataValue", {$isDataValue$:$oj$$18$$.$CubeLevel$.prototype.$isDataValue$});
  $oj$$18$$.$CubeLevel$.prototype.$_dataValue$ = !1;
  $oj$$18$$.$CubeLevel$.prototype.$_axisObj$ = null;
  $oj$$18$$.$DataColumnCube$ = function $$oj$$18$$$$DataColumnCube$$($rowset$$1$$, $layout$$3$$, $dataValues$$) {
    this.Init();
    this.$_dataValues$ = $dataValues$$;
    this.$_valueAttr$ = $dataValues$$.valueAttr;
    this.$_labelAttr$ = $dataValues$$.labelAttr;
    var $defAgg$$ = $dataValues$$.defaultAggregation;
    this.$_defaultAggregation$ = $defAgg$$ ? $oj$$18$$.$DataColumnCube$.$_getDefaultAgg$($defAgg$$) : {$aggregation$:$oj$$18$$.$CubeAggType$.SUM};
    this.$_aggregation$ = $dataValues$$.aggregation;
    this.$_buildAggTypeLookup$();
    $oj$$18$$.$DataColumnCube$.$superclass$.constructor.call(this, $rowset$$1$$, $layout$$3$$);
  };
  $goog$exportPath_$$("DataColumnCube", $oj$$18$$.$DataColumnCube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$DataColumnCube$, $oj$$18$$.$Cube$, "oj.DataColumnCube");
  $oj$$18$$.$DataColumnCube$.prototype.Init = function $$oj$$18$$$$DataColumnCube$$$Init$() {
    $oj$$18$$.$DataColumnCube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$BuildCube$ = function $$oj$$18$$$$DataColumnCube$$$$BuildCube$$() {
    $oj$$18$$.$DataColumnCube$.$superclass$.$BuildCube$.call(this);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GetAggType$ = function $$oj$$18$$$$DataColumnCube$$$$GetAggType$$($dataValue$$2$$) {
    return this.$_dataValueAggType$[$dataValue$$2$$] ? this.$_dataValueAggType$[$dataValue$$2$$] : this.$_defaultAggregation$;
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GenerateCube$ = function $$oj$$18$$$$DataColumnCube$$$$GenerateCube$$($layout$$4$$) {
    return new $oj$$18$$.$DataColumnCube$(null, $layout$$4$$, this.$_dataValues$);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$DataColumnCube$$$$GenerateLevel$$($level$$22$$, $axis$$22$$) {
    return $level$$22$$.attribute === this.$_labelAttr$ ? new $oj$$18$$.$CubeLevel$($level$$22$$.attribute, $axis$$22$$, !0) : new $oj$$18$$.$CubeLevel$($level$$22$$.attribute, $axis$$22$$, !1);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$DataColumnCube$$$$ProcessLevel$$($axis$$23$$, $levelNum$$1$$, $currNode$$1_node$$64$$, $row$$27$$, $keys$$24$$, $addKeys$$1$$) {
    if ($levelNum$$1$$ >= $axis$$23$$.$getLevels$().length) {
      return $keys$$24$$;
    }
    var $level$$23$$ = $axis$$23$$.$getLevels$()[$levelNum$$1$$], $value$$245$$ = $row$$27$$[$level$$23$$.attribute];
    $currNode$$1_node$$64$$ = $currNode$$1_node$$64$$.$AddNode$($value$$245$$, null, $level$$23$$);
    $level$$23$$.$isDataValue$() ? $keys$$24$$.$AddDataValue$($value$$245$$, $row$$27$$[this.$_valueAttr$]) : $keys$$24$$.$UpdateKeys$($currNode$$1_node$$64$$);
    return this.$ProcessLevel$($axis$$23$$, $levelNum$$1$$ + 1, $currNode$$1_node$$64$$, $row$$27$$, $keys$$24$$, $addKeys$$1$$);
  };
  $oj$$18$$.$DataColumnCube$.$_getDefaultAgg$ = function $$oj$$18$$$$DataColumnCube$$$_getDefaultAgg$$($agg$$) {
    return $oj$$18$$.$StringUtils$.$isString$($agg$$) ? {$aggregation$:$agg$$} : {$aggregation$:$agg$$.aggregation, $callback$:$agg$$.callback};
  };
  $oj$$18$$.$DataColumnCube$.prototype.$_buildAggTypeLookup$ = function $$oj$$18$$$$DataColumnCube$$$$_buildAggTypeLookup$$() {
    this.$_dataValueAggType$ = [];
    if (this.$_aggregation$) {
      for (var $i$$268$$ = 0;$i$$268$$ < this.$_aggregation$.length;$i$$268$$++) {
        var $dv$$ = this.$_aggregation$[$i$$268$$], $agg$$1$$ = $dv$$.aggregation;
        this.$_dataValueAggType$[$dv$$.value] = $agg$$1$$ ? {$aggregation$:$agg$$1$$, $callback$:$dv$$.callback} : this.$_defaultAggregation$;
      }
    }
  };
  $oj$$18$$.$DataValueAttributeCube$ = function $$oj$$18$$$$DataValueAttributeCube$$($rowset$$2$$, $layout$$5$$, $dataValues$$1$$) {
    this.Init();
    this.$_dataValues$ = $dataValues$$1$$;
    this.$_buildAggTypeLookup$();
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.constructor.call(this, $rowset$$2$$, $layout$$5$$);
  };
  $goog$exportPath_$$("DataValueAttributeCube", $oj$$18$$.$DataValueAttributeCube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$DataValueAttributeCube$, $oj$$18$$.$Cube$, "oj.DataValueAttributeCube");
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_rows$ = null;
  $oj$$18$$.$DataValueAttributeCube$.prototype.Init = function $$oj$$18$$$$DataValueAttributeCube$$$Init$() {
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$BuildCube$ = function $$oj$$18$$$$DataValueAttributeCube$$$$BuildCube$$() {
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.$BuildCube$.call(this);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GetAggType$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GetAggType$$($dataValue$$3$$) {
    return this.$_dataValueAggType$[$dataValue$$3$$];
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GenerateLevel$$($level$$24$$, $axis$$24$$) {
    return $level$$24$$.dataValue ? new $oj$$18$$.$CubeLevel$(null, $axis$$24$$, !0) : new $oj$$18$$.$CubeLevel$($level$$24$$.attribute, $axis$$24$$, !1);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GenerateCube$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GenerateCube$$($layout$$6$$) {
    return new $oj$$18$$.$DataValueAttributeCube$(null, $layout$$6$$, this.$_dataValues$);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$DataValueAttributeCube$$$$ProcessLevel$$($axis$$25$$, $levelNum$$2$$, $currNode$$2_node$$65$$, $row$$28$$, $keys$$25$$, $addKeys$$2$$) {
    if ($levelNum$$2$$ >= $axis$$25$$.$getLevels$().length) {
      return $keys$$25$$;
    }
    var $level$$25$$ = $axis$$25$$.$getLevels$()[$levelNum$$2$$];
    if ($level$$25$$.$isDataValue$()) {
      return this.$_processDataValue$($axis$$25$$, $currNode$$2_node$$65$$, $row$$28$$, $levelNum$$2$$, $keys$$25$$);
    }
    $currNode$$2_node$$65$$ = $currNode$$2_node$$65$$.$AddNode$($row$$28$$[$level$$25$$.attribute], null, $level$$25$$);
    $addKeys$$2$$ && $keys$$25$$.$UpdateKeys$($currNode$$2_node$$65$$);
    return this.$ProcessLevel$($axis$$25$$, $levelNum$$2$$ + 1, $currNode$$2_node$$65$$, $row$$28$$, $keys$$25$$, $addKeys$$2$$);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_processDataValue$ = function $$oj$$18$$$$DataValueAttributeCube$$$$_processDataValue$$($axis$$26$$, $node$$66$$, $row$$29$$, $levelNum$$3$$, $keys$$26$$) {
    for (var $dsKeysAdded$$ = !0, $d$$7$$ = 0;$d$$7$$ < this.$_dataValues$.length;$d$$7$$++) {
      var $dvAttr$$ = this.$_dataValues$[$d$$7$$].attribute, $currNode$$3_dvLabel$$ = this.$_dataValues$[$d$$7$$].label;
      $row$$29$$.hasOwnProperty($dvAttr$$) && ($currNode$$3_dvLabel$$ = $node$$66$$.$AddNode$($dvAttr$$, $currNode$$3_dvLabel$$, $axis$$26$$.$getLevels$()[$levelNum$$3$$]), $keys$$26$$.$AddDataValue$($dvAttr$$, $row$$29$$[$dvAttr$$]), this.$ProcessLevel$($axis$$26$$, $levelNum$$3$$ + 1, $currNode$$3_dvLabel$$, $row$$29$$, $keys$$26$$, $dsKeysAdded$$), $dsKeysAdded$$ = !1);
    }
    return $keys$$26$$;
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_buildAggTypeLookup$ = function $$oj$$18$$$$DataValueAttributeCube$$$$_buildAggTypeLookup$$() {
    this.$_dataValueAggType$ = [];
    for (var $i$$269$$ = 0;$i$$269$$ < this.$_dataValues$.length;$i$$269$$++) {
      var $dv$$1$$ = this.$_dataValues$[$i$$269$$];
      this.$_dataValueAggType$[$dv$$1$$.attribute] = $dv$$1$$.aggregation ? {$aggregation$:$dv$$1$$.aggregation, $callback$:$dv$$1$$.callback} : {$aggregation$:$oj$$18$$.$CubeAggType$.SUM, $callback$:$dv$$1$$.callback};
    }
  };
});
