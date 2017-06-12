/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$23$$) {
  $oj$$23$$.$ArrayCellSet$ = function $$oj$$23$$$$ArrayCellSet$$($startRow$$1$$, $endRow$$, $startColumn$$1$$, $endColumn$$, $callback$$103$$) {
    this.$m_startRow$ = $startRow$$1$$;
    this.$m_endRow$ = $endRow$$;
    this.$m_startColumn$ = $startColumn$$1$$;
    this.$m_endColumn$ = $endColumn$$;
    this.$m_callback$ = $callback$$103$$;
  };
  $goog$exportPath_$$("ArrayCellSet", $oj$$23$$.$ArrayCellSet$, $oj$$23$$);
  $oj$$23$$.$ArrayCellSet$.prototype.getData = function $$oj$$23$$$$ArrayCellSet$$$getData$($indexes$$8$$) {
    return this.$m_callback$.$_getCellData$($indexes$$8$$.row, $indexes$$8$$.column);
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getData", {getData:$oj$$23$$.$ArrayCellSet$.prototype.getData});
  $oj$$23$$.$ArrayCellSet$.prototype.getMetadata = function $$oj$$23$$$$ArrayCellSet$$$getMetadata$($indexes$$9$$) {
    return this.$m_callback$.$_getCellMetadata$($indexes$$9$$.row, $indexes$$9$$.column);
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getMetadata", {getMetadata:$oj$$23$$.$ArrayCellSet$.prototype.getMetadata});
  $oj$$23$$.$ArrayCellSet$.prototype.$getStart$ = function $$oj$$23$$$$ArrayCellSet$$$$getStart$$($axis$$27$$) {
    return "row" == $axis$$27$$ ? this.$m_startRow$ : "column" == $axis$$27$$ ? this.$m_startColumn$ : -1;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStart", {$getStart$:$oj$$23$$.$ArrayCellSet$.prototype.$getStart$});
  $oj$$23$$.$ArrayCellSet$.prototype.$getCount$ = function $$oj$$23$$$$ArrayCellSet$$$$getCount$$($axis$$28$$) {
    return "row" === $axis$$28$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$28$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getCount", {$getCount$:$oj$$23$$.$ArrayCellSet$.prototype.$getCount$});
  $oj$$23$$.$ArrayCellSet$.prototype.getStartRow = function $$oj$$23$$$$ArrayCellSet$$$getStartRow$() {
    return this.$m_startRow$;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartRow", {getStartRow:$oj$$23$$.$ArrayCellSet$.prototype.getStartRow});
  $oj$$23$$.$ArrayCellSet$.prototype.getStartColumn = function $$oj$$23$$$$ArrayCellSet$$$getStartColumn$() {
    return this.$m_startColumn$;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartColumn", {getStartColumn:$oj$$23$$.$ArrayCellSet$.prototype.getStartColumn});
  $oj$$23$$.$ArrayDataGridDataSource$ = function $$oj$$23$$$$ArrayDataGridDataSource$$($data$$138$$, $options$$275$$) {
    if (!($data$$138$$ instanceof Array) && "function" != typeof $data$$138$$ && "function" != typeof $data$$138$$.$subscribe$) {
      throw Error("_ERR_DATA_INVALID_TYPE_SUMMARY\n_ERR_DATA_INVALID_TYPE_DETAIL");
    }
    this.$rowHeaderKey$ = this.$_getRowHeaderFromOptions$($options$$275$$);
    null != $options$$275$$ && (this.columns = $options$$275$$.columns, this.$_sortInfo$ = $options$$275$$.initialSort);
    $oj$$23$$.$ArrayDataGridDataSource$.$superclass$.constructor.call(this, $data$$138$$);
  };
  $goog$exportPath_$$("ArrayDataGridDataSource", $oj$$23$$.$ArrayDataGridDataSource$, $oj$$23$$);
  $oj$$23$$.$Object$.$createSubclass$($oj$$23$$.$ArrayDataGridDataSource$, $oj$$23$$.$DataGridDataSource$, "oj.ArrayDataGridDataSource");
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.Init = function $$oj$$23$$$$ArrayDataGridDataSource$$$Init$() {
    null == this.columns && (this.columns = this.$_getColumnsForScaffolding$(this.$getDataArray$()));
    this.$_initializeRowKeys$();
    "function" == typeof this.data && this.data.subscribe(this.$_subscribe$.bind(this), null, "arrayChange");
    $oj$$23$$.$ArrayDataGridDataSource$.$superclass$.Init.call(this);
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.Init", {Init:$oj$$23$$.$ArrayDataGridDataSource$.prototype.Init});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_getRowHeaderFromOptions$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_getRowHeaderFromOptions$$($option$$32_options$$276$$) {
    if (null != $option$$32_options$$276$$ && null != $option$$32_options$$276$$.rowHeader) {
      if ($option$$32_options$$276$$ = $option$$32_options$$276$$.rowHeader, "object" === typeof $option$$32_options$$276$$) {
        if (null != $option$$32_options$$276$$["default"] && "none" == $option$$32_options$$276$$["default"]) {
          return;
        }
      } else {
        if (null != $option$$32_options$$276$$) {
          return $option$$32_options$$276$$;
        }
      }
    }
    return "m_defaultIndex";
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_initializeRowKeys$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_initializeRowKeys$$() {
    var $data$$139$$;
    $data$$139$$ = this.$getDataArray$();
    for (this.$lastKey$ = 0;this.$lastKey$ < $data$$139$$.length;this.$lastKey$ += 1) {
      $data$$139$$[this.$lastKey$].ojKey = this.$lastKey$.toString();
    }
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_getColumnsForScaffolding$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_getColumnsForScaffolding$$($data$$140$$) {
    var $propertyName$$8$$, $columns$$22$$;
    if ("number" !== typeof $data$$140$$.length || 0 === $data$$140$$.length) {
      return[];
    }
    $columns$$22$$ = [];
    for ($propertyName$$8$$ in $data$$140$$[0]) {
      $data$$140$$[0].hasOwnProperty($propertyName$$8$$) && (void 0 != this.$rowHeaderKey$ && $propertyName$$8$$ == this.$rowHeaderKey$ || $columns$$22$$.push($propertyName$$8$$));
    }
    return $columns$$22$$;
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$getCount$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$getCount$$($axis$$29$$) {
    return "row" === $axis$$29$$ ? this.$_size$() : "column" === $axis$$29$$ ? this.columns.length : 0;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCount", {$getCount$:$oj$$23$$.$ArrayDataGridDataSource$.prototype.$getCount$});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$getCountPrecision$$() {
    return "exact";
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$23$$.$ArrayDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_getHeaderData$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_getHeaderData$$($axis$$31$$, $index$$180$$) {
    var $data$$141$$;
    if ("row" === $axis$$31$$) {
      if (void 0 == this.$rowHeaderKey$) {
        return null;
      }
      if ("m_defaultIndex" == this.$rowHeaderKey$) {
        return this.$_getRowKeyByIndex$($index$$180$$);
      }
      $data$$141$$ = this.$getDataArray$();
      return $data$$141$$[$index$$180$$][this.$rowHeaderKey$];
    }
    if ("column" === $axis$$31$$) {
      return this.columns[$index$$180$$];
    }
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_getHeaderMetadata$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_getHeaderMetadata$$($axis$$32$$, $index$$181$$) {
    var $key$$130$$;
    if ("row" === $axis$$32$$) {
      return{key:this.$_getRowKeyByIndex$($index$$181$$)};
    }
    if ("column" === $axis$$32$$) {
      return $key$$130$$ = this.$_getHeaderData$($axis$$32$$, $index$$181$$), null != this.$_sortInfo$ && this.$_sortInfo$.key === $key$$130$$ ? {key:this.$_getHeaderData$($axis$$32$$, $index$$181$$), sortDirection:this.$_sortInfo$.direction} : {key:$key$$130$$};
    }
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$fetchHeaders$$($headerRange$$1$$, $callbacks$$18$$, $callbackObjects$$4$$) {
    var $axis$$33_headerSet$$, $start$$45$$, $count$$50_end$$15$$, $data$$142$$;
    $axis$$33_headerSet$$ = $headerRange$$1$$.axis;
    $start$$45$$ = $headerRange$$1$$.start;
    $count$$50_end$$15$$ = $headerRange$$1$$.count;
    $start$$45$$ = Math.max(0, $start$$45$$);
    "column" === $axis$$33_headerSet$$ ? $count$$50_end$$15$$ = Math.min(this.columns.length, $start$$45$$ + $count$$50_end$$15$$) : ($data$$142$$ = this.$getDataArray$(), $count$$50_end$$15$$ = void 0 === this.$rowHeaderKey$ ? $start$$45$$ : Math.min($data$$142$$.length, $start$$45$$ + $count$$50_end$$15$$));
    $axis$$33_headerSet$$ = new $oj$$23$$.$ArrayHeaderSet$($start$$45$$, $count$$50_end$$15$$, $axis$$33_headerSet$$, this);
    null != $callbacks$$18$$ && null != $callbacks$$18$$.success && (null == $callbackObjects$$4$$ && ($callbackObjects$$4$$ = {}), $callbacks$$18$$.success.call($callbackObjects$$4$$.success, $axis$$33_headerSet$$, $headerRange$$1$$));
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$23$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_getCellData$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_getCellData$$($row$$31$$, $column$$21$$) {
    var $col$$2$$ = this.columns[$column$$21$$];
    return this.$getDataArray$()[$row$$31$$][$col$$2$$];
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_getCellMetadata$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_getCellMetadata$$($row$$32$$, $column$$22$$) {
    return{keys:{row:this.$_getRowKeyByIndex$($row$$32$$), column:this.columns[$column$$22$$]}};
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$fetchCells$$($cellRanges$$, $callbacks$$19$$, $callbackObjects$$5$$) {
    var $cellSet_i$$303$$, $cellRange$$2$$, $rowStart$$1$$, $rowEnd$$, $colStart$$, $colEnd$$;
    for ($cellSet_i$$303$$ = 0;$cellSet_i$$303$$ < $cellRanges$$.length;$cellSet_i$$303$$ += 1) {
      $cellRange$$2$$ = $cellRanges$$[$cellSet_i$$303$$], "row" === $cellRange$$2$$.axis ? ($rowStart$$1$$ = $cellRange$$2$$.start, $rowEnd$$ = Math.min(this.$_size$(), $rowStart$$1$$ + $cellRange$$2$$.count)) : "column" === $cellRange$$2$$.axis && ($colStart$$ = $cellRange$$2$$.start, $colEnd$$ = Math.min(this.columns.length, $colStart$$ + $cellRange$$2$$.count));
    }
    void 0 === $rowEnd$$ || void 0 === $colEnd$$ ? null != $callbacks$$19$$ && null != $callbacks$$19$$.error && (null == $callbackObjects$$5$$ && ($callbackObjects$$5$$ = {}), $callbacks$$19$$.error.call($callbackObjects$$5$$.error)) : ($cellSet_i$$303$$ = new $oj$$23$$.$ArrayCellSet$($rowStart$$1$$, $rowEnd$$, $colStart$$, $colEnd$$, this), null != $callbacks$$19$$ && null != $callbacks$$19$$.success && (null == $callbackObjects$$5$$ && ($callbackObjects$$5$$ = {}), $callbacks$$19$$.success.call($callbackObjects$$5$$.success, 
    $cellSet_i$$303$$, $cellRanges$$)));
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$23$$.$ArrayDataGridDataSource$.prototype.$fetchCells$});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.keys = function $$oj$$23$$$$ArrayDataGridDataSource$$$keys$($indexes$$10$$) {
    var $rowIndex$$6$$ = $indexes$$10$$.row, $columnIndex$$2$$ = $indexes$$10$$.column;
    return new Promise(function($resolve$$34$$) {
      $resolve$$34$$({row:this.$_getRowKeyByIndex$($rowIndex$$6$$), column:this.columns[$columnIndex$$2$$]});
    }.bind(this));
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.keys", {keys:$oj$$23$$.$ArrayDataGridDataSource$.prototype.keys});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$indexes$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$indexes$$($keys$$36$$) {
    var $rowKey$$30$$ = $keys$$36$$.row, $columnKey$$1$$ = $keys$$36$$.column;
    return new Promise(function($resolve$$35$$) {
      $resolve$$35$$({row:this.$_getRowIndexByKey$($rowKey$$30$$), column:this.columns.indexOf($columnKey$$1$$)});
    }.bind(this));
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.indexes", {$indexes$:$oj$$23$$.$ArrayDataGridDataSource$.prototype.$indexes$});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.sort = function $$oj$$23$$$$ArrayDataGridDataSource$$$sort$($criteria$$1_direction$$5$$, $callbacks$$20$$, $callbackObjects$$6$$) {
    var $sortArray$$ = [], $newColumns$$ = [], $axis$$34_i$$304$$, $headerIndex$$1_headerKey$$;
    null != $callbacks$$20$$ && null == $callbackObjects$$6$$ && ($callbackObjects$$6$$ = {});
    if (null == $criteria$$1_direction$$5$$) {
      this.$_resetSortOrder$($callbacks$$20$$, $callbackObjects$$6$$);
    } else {
      if ($axis$$34_i$$304$$ = $criteria$$1_direction$$5$$.axis, $headerIndex$$1_headerKey$$ = $criteria$$1_direction$$5$$.key, $criteria$$1_direction$$5$$ = $criteria$$1_direction$$5$$.direction, "column" === $axis$$34_i$$304$$) {
        void 0 == this.$origData$ && (this.$_origSortInfo$ = this.$_sortInfo$, this.$origData$ = this.data.slice()), this.$_sortInfo$ = {key:$headerIndex$$1_headerKey$$, direction:$criteria$$1_direction$$5$$}, this.$getDataArray$().sort(this.$_naturalSort$($criteria$$1_direction$$5$$, $headerIndex$$1_headerKey$$)), null != $callbacks$$20$$ && null != $callbacks$$20$$.success && $callbacks$$20$$.success.call($callbackObjects$$6$$.success);
      } else {
        if ("row" === $axis$$34_i$$304$$) {
          $headerIndex$$1_headerKey$$ = this.$_getRowIndexByKey$($headerIndex$$1_headerKey$$);
          for ($axis$$34_i$$304$$ = 0;$axis$$34_i$$304$$ < this.columns.length;$axis$$34_i$$304$$ += 1) {
            $sortArray$$[$axis$$34_i$$304$$] = this.$getDataArray$()[$headerIndex$$1_headerKey$$][this.columns[$axis$$34_i$$304$$]];
          }
          $sortArray$$.sort(this.$_naturalSort$($criteria$$1_direction$$5$$));
          for ($axis$$34_i$$304$$ = 0;$axis$$34_i$$304$$ < this.columns.length;$axis$$34_i$$304$$ += 1) {
            $newColumns$$[$axis$$34_i$$304$$] = this.columns[$sortArray$$.indexOf(this.$getDataArray$()[$headerIndex$$1_headerKey$$][this.columns[$axis$$34_i$$304$$]])];
          }
          this.$origColumns$ = this.columns;
          this.columns = $newColumns$$;
          null != $callbacks$$20$$ && null != $callbacks$$20$$.success && $callbacks$$20$$.success.call($callbackObjects$$6$$.success);
        } else {
          null !== $callbacks$$20$$ && null != $callbacks$$20$$.error && $callbacks$$20$$.error.call($callbackObjects$$6$$.error, "Invalid axis value");
        }
      }
    }
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.sort", {sort:$oj$$23$$.$ArrayDataGridDataSource$.prototype.sort});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_resetSortOrder$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_resetSortOrder$$($callbacks$$21$$, $callbackObjects$$7$$) {
    null != this.$origData$ && (this.data = this.$origData$, this.$_sortInfo$ = this.$_origSortInfo$);
    null != this.$origColumns$ && (this.columns = this.$origColumns$);
    null != $callbacks$$21$$ && null != $callbacks$$21$$.success && $callbacks$$21$$.success.call($callbackObjects$$7$$.success);
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.getCapability = function $$oj$$23$$$$ArrayDataGridDataSource$$$getCapability$($feature$$6$$) {
    return "sort" === $feature$$6$$ ? "column" : "move" === $feature$$6$$ ? "row" : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCapability", {getCapability:$oj$$23$$.$ArrayDataGridDataSource$.prototype.getCapability});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_naturalSort$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_naturalSort$$($direction$$6$$, $key$$131$$) {
    if ("ascending" === $direction$$6$$) {
      return function($a$$107$$, $b$$64$$) {
        var $as$$, $bs$$;
        void 0 != $key$$131$$ && ($a$$107$$ instanceof Array ? ($a$$107$$ = $a$$107$$[parseInt($key$$131$$, 10)], $b$$64$$ = $b$$64$$[parseInt($key$$131$$, 10)]) : ($a$$107$$ = $a$$107$$[$key$$131$$], $b$$64$$ = $b$$64$$[$key$$131$$]));
        $as$$ = isNaN($a$$107$$);
        $bs$$ = isNaN($b$$64$$);
        $a$$107$$ instanceof Date && ($a$$107$$ = $a$$107$$.toISOString(), $as$$ = !0);
        $b$$64$$ instanceof Date && ($b$$64$$ = $b$$64$$.toISOString(), $bs$$ = !0);
        return $as$$ && $bs$$ ? $a$$107$$ < $b$$64$$ ? -1 : $a$$107$$ === $b$$64$$ ? 0 : 1 : $as$$ ? 1 : $bs$$ ? -1 : $a$$107$$ - $b$$64$$;
      };
    }
    if ("descending" === $direction$$6$$) {
      return function($a$$108$$, $b$$65$$) {
        var $as$$1$$, $bs$$1$$;
        void 0 != $key$$131$$ && ($a$$108$$ instanceof Array ? ($a$$108$$ = $a$$108$$[parseInt($key$$131$$, 10)], $b$$65$$ = $b$$65$$[parseInt($key$$131$$, 10)]) : ($a$$108$$ = $a$$108$$[$key$$131$$], $b$$65$$ = $b$$65$$[$key$$131$$]));
        $as$$1$$ = isNaN($a$$108$$);
        $bs$$1$$ = isNaN($b$$65$$);
        $a$$108$$ instanceof Date && ($a$$108$$ = $a$$108$$.toISOString(), $as$$1$$ = !0);
        $b$$65$$ instanceof Date && ($b$$65$$ = $b$$65$$.toISOString(), $bs$$1$$ = !0);
        return $as$$1$$ && $bs$$1$$ ? $a$$108$$ > $b$$65$$ ? -1 : $a$$108$$ === $b$$65$$ ? 0 : 1 : $as$$1$$ ? -1 : $bs$$1$$ ? 1 : $b$$65$$ - $a$$108$$;
      };
    }
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.move = function $$oj$$23$$$$ArrayDataGridDataSource$$$move$($moveKey$$, $atKey$$) {
    var $atKeyIndex_event$$355_moveKeyIndex$$, $moveData$$;
    $atKeyIndex_event$$355_moveKeyIndex$$ = this.$_getRowIndexByKey$($moveKey$$);
    $moveData$$ = this.data.splice($atKeyIndex_event$$355_moveKeyIndex$$, 1)[0];
    this.data instanceof Array && ($atKeyIndex_event$$355_moveKeyIndex$$ = this.$_getModelEvent$("delete", $moveKey$$, null, $atKeyIndex_event$$355_moveKeyIndex$$, -1, !0), this.handleEvent("change", $atKeyIndex_event$$355_moveKeyIndex$$));
    null === $atKey$$ ? (this.data.push($moveData$$), $atKeyIndex_event$$355_moveKeyIndex$$ = this.data.length - 1) : ($atKeyIndex_event$$355_moveKeyIndex$$ = this.$_getRowIndexByKey$($atKey$$), this.data.splice($atKeyIndex_event$$355_moveKeyIndex$$, 0, $moveData$$));
    this.data instanceof Array && ($atKeyIndex_event$$355_moveKeyIndex$$ = this.$_getModelEvent$("insert", $moveKey$$, null, $atKeyIndex_event$$355_moveKeyIndex$$, -1), this.handleEvent("change", $atKeyIndex_event$$355_moveKeyIndex$$));
    null != this.$origData$ && (this.$origData$ = this.data.slice());
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.move", {move:$oj$$23$$.$ArrayDataGridDataSource$.prototype.move});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$moveOK$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$moveOK$$() {
    return "valid";
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.moveOK", {$moveOK$:$oj$$23$$.$ArrayDataGridDataSource$.prototype.$moveOK$});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$getDataArray$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$getDataArray$$() {
    return "function" === typeof this.data ? this.data() : this.data;
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_getRowIndexByKey$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_getRowIndexByKey$$($key$$132$$) {
    var $i$$305$$, $data$$144$$ = this.$getDataArray$();
    for ($i$$305$$ = 0;$i$$305$$ < $data$$144$$.length;$i$$305$$++) {
      if ($data$$144$$[$i$$305$$].ojKey === $key$$132$$) {
        return $i$$305$$;
      }
    }
    return-1;
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_getRowKeyByIndex$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_getRowKeyByIndex$$($index$$182$$) {
    var $data$$145$$ = this.$getDataArray$();
    return $data$$145$$[$index$$182$$] ? $data$$145$$[$index$$182$$].ojKey : null;
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_getModelEvent$$($operation$$4$$, $rowKey$$31$$, $columnKey$$2$$, $rowIndex$$7$$, $columnIndex$$3$$, $silent$$22$$) {
    var $event$$356$$ = {source:this};
    $event$$356$$.operation = $operation$$4$$;
    $event$$356$$.keys = {row:$rowKey$$31$$, column:$columnKey$$2$$};
    $event$$356$$.indexes = {row:$rowIndex$$7$$, column:$columnIndex$$3$$};
    $event$$356$$.silent = $silent$$22$$;
    return $event$$356$$;
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_subscribe$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_subscribe$$($changes$$5$$) {
    var $i$$306$$, $move_rowData$$4_rowKey$$32$$, $change$$5_event$$357_rowIndex$$8$$, $added$$1$$ = !1;
    $move_rowData$$4_rowKey$$32$$ = !1;
    var $keys$$37$$ = [], $indexes$$11$$ = [];
    for ($i$$306$$ = 0;$i$$306$$ < $changes$$5$$.length;$i$$306$$++) {
      $change$$5_event$$357_rowIndex$$8$$ = $changes$$5$$[$i$$306$$];
      if (void 0 !== $change$$5_event$$357_rowIndex$$8$$.moved) {
        $move_rowData$$4_rowKey$$32$$ = !0;
        $change$$5_event$$357_rowIndex$$8$$ = this.$_getModelEvent$("refresh", null, null);
        this.handleEvent("change", $change$$5_event$$357_rowIndex$$8$$);
        break;
      }
      "added" === $change$$5_event$$357_rowIndex$$8$$.status && ($added$$1$$ = !0);
    }
    if (!$move_rowData$$4_rowKey$$32$$) {
      for ($i$$306$$ = 0;$i$$306$$ < $changes$$5$$.length;$i$$306$$++) {
        $change$$5_event$$357_rowIndex$$8$$ = $changes$$5$$[$i$$306$$], "deleted" === $change$$5_event$$357_rowIndex$$8$$.status && ($move_rowData$$4_rowKey$$32$$ = $change$$5_event$$357_rowIndex$$8$$.value, $change$$5_event$$357_rowIndex$$8$$ = $change$$5_event$$357_rowIndex$$8$$.index, $move_rowData$$4_rowKey$$32$$ = $move_rowData$$4_rowKey$$32$$.ojKey, $keys$$37$$.push({row:$move_rowData$$4_rowKey$$32$$, column:-1}), $indexes$$11$$.push({row:$change$$5_event$$357_rowIndex$$8$$, column:-1}));
      }
      0 < $keys$$37$$.length && ($change$$5_event$$357_rowIndex$$8$$ = {source:this, operation:"delete", keys:$keys$$37$$, indexes:$indexes$$11$$, silent:$added$$1$$}, this.handleEvent("change", $change$$5_event$$357_rowIndex$$8$$));
      for ($i$$306$$ = 0;$i$$306$$ < $changes$$5$$.length;$i$$306$$++) {
        $change$$5_event$$357_rowIndex$$8$$ = $changes$$5$$[$i$$306$$], "added" === $change$$5_event$$357_rowIndex$$8$$.status && ($move_rowData$$4_rowKey$$32$$ = $change$$5_event$$357_rowIndex$$8$$.value, $change$$5_event$$357_rowIndex$$8$$ = $change$$5_event$$357_rowIndex$$8$$.index, null == $move_rowData$$4_rowKey$$32$$.ojKey && ($move_rowData$$4_rowKey$$32$$.ojKey = this.$lastKey$.toString(), this.$lastKey$++), $move_rowData$$4_rowKey$$32$$ = $move_rowData$$4_rowKey$$32$$.ojKey, $change$$5_event$$357_rowIndex$$8$$ = 
        this.$_getModelEvent$("insert", $move_rowData$$4_rowKey$$32$$, null, $change$$5_event$$357_rowIndex$$8$$, -1), this.handleEvent("change", $change$$5_event$$357_rowIndex$$8$$));
      }
    }
    null != this.$origData$ && (this.$origData$ = this.data.slice());
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$_size$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$_size$$() {
    return this.$getDataArray$().length;
  };
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$getRowHeaderKey$$() {
    return this.$rowHeaderKey$;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowHeaderKey", {$getRowHeaderKey$:$oj$$23$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.$getColumns$ = function $$oj$$23$$$$ArrayDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$23$$.$ArrayDataGridDataSource$.prototype.$getColumns$});
  $oj$$23$$.$ArrayDataGridDataSource$.prototype.getData = function $$oj$$23$$$$ArrayDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getData", {getData:$oj$$23$$.$ArrayDataGridDataSource$.prototype.getData});
  $oj$$23$$.$ArrayHeaderSet$ = function $$oj$$23$$$$ArrayHeaderSet$$($start$$46$$, $end$$16$$, $axis$$35$$, $callback$$104$$) {
    this.$m_start$ = $start$$46$$;
    this.$m_end$ = $end$$16$$;
    this.$m_axis$ = $axis$$35$$;
    this.$m_callback$ = $callback$$104$$;
  };
  $goog$exportPath_$$("ArrayHeaderSet", $oj$$23$$.$ArrayHeaderSet$, $oj$$23$$);
  $oj$$23$$.$ArrayHeaderSet$.prototype.getData = function $$oj$$23$$$$ArrayHeaderSet$$$getData$($index$$183$$, $level$$26$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$23$$.$Assert$.assert($index$$183$$ <= this.$m_end$ && $index$$183$$ >= this.$m_start$, "index out of bounds");
    $oj$$23$$.$Assert$.assert(null == $level$$26$$ || 0 == $level$$26$$, "level out of bounds");
    return this.$m_callback$.$_getHeaderData$(this.$m_axis$, $index$$183$$);
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getData", {getData:$oj$$23$$.$ArrayHeaderSet$.prototype.getData});
  $oj$$23$$.$ArrayHeaderSet$.prototype.getMetadata = function $$oj$$23$$$$ArrayHeaderSet$$$getMetadata$($index$$184$$, $level$$27$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$23$$.$Assert$.assert($index$$184$$ <= this.$m_end$ && $index$$184$$ >= this.$m_start$, "index out of bounds");
    $oj$$23$$.$Assert$.assert(null == $level$$27$$ || 0 == $level$$27$$, "level out of bounds");
    return this.$m_callback$.$_getHeaderMetadata$(this.$m_axis$, $index$$184$$);
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getMetadata", {getMetadata:$oj$$23$$.$ArrayHeaderSet$.prototype.getMetadata});
  $oj$$23$$.$ArrayHeaderSet$.prototype.$getLevelCount$ = function $$oj$$23$$$$ArrayHeaderSet$$$$getLevelCount$$() {
    return 0 < this.$getCount$() ? 1 : 0;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$23$$.$ArrayHeaderSet$.prototype.$getLevelCount$});
  $oj$$23$$.$ArrayHeaderSet$.prototype.$getExtent$ = function $$oj$$23$$$$ArrayHeaderSet$$$$getExtent$$($index$$185$$, $level$$28$$) {
    $oj$$23$$.$Assert$.assert($index$$185$$ <= this.$m_end$ && $index$$185$$ >= this.$m_start$, "index out of bounds");
    $oj$$23$$.$Assert$.assert(null == $level$$28$$ || 0 == $level$$28$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getExtent", {$getExtent$:$oj$$23$$.$ArrayHeaderSet$.prototype.$getExtent$});
  $oj$$23$$.$ArrayHeaderSet$.prototype.$getDepth$ = function $$oj$$23$$$$ArrayHeaderSet$$$$getDepth$$($index$$186$$, $level$$29$$) {
    $oj$$23$$.$Assert$.assert($index$$186$$ <= this.$m_end$ && $index$$186$$ >= this.$m_start$, "index out of bounds");
    $oj$$23$$.$Assert$.assert(null == $level$$29$$ || 0 == $level$$29$$, "level out of bounds");
    return 1;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getDepth", {$getDepth$:$oj$$23$$.$ArrayHeaderSet$.prototype.$getDepth$});
  $oj$$23$$.$ArrayHeaderSet$.prototype.$getCount$ = function $$oj$$23$$$$ArrayHeaderSet$$$$getCount$$() {
    return null == this.$m_callback$ ? 0 : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getCount", {$getCount$:$oj$$23$$.$ArrayHeaderSet$.prototype.$getCount$});
  $oj$$23$$.$ArrayHeaderSet$.prototype.$getStart$ = function $$oj$$23$$$$ArrayHeaderSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getStart", {$getStart$:$oj$$23$$.$ArrayHeaderSet$.prototype.$getStart$});
});
