/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel"], function($oj$$30$$) {
  $oj$$30$$.$CollectionCellSet$ = function $$oj$$30$$$$CollectionCellSet$$($startRow$$2$$, $endRow$$1$$, $startColumn$$2$$, $endColumn$$1$$, $columns$$23$$) {
    $oj$$30$$.$Assert$.$assertArrayOrNull$($columns$$23$$);
    this.$m_startRow$ = $startRow$$2$$;
    this.$m_endRow$ = $endRow$$1$$;
    this.$m_startColumn$ = $startColumn$$2$$;
    this.$m_endColumn$ = $endColumn$$1$$;
    this.$m_columns$ = $columns$$23$$;
  };
  $goog$exportPath_$$("CollectionCellSet", $oj$$30$$.$CollectionCellSet$, $oj$$30$$);
  $oj$$30$$.$CollectionCellSet$.prototype.$setModels$ = function $$oj$$30$$$$CollectionCellSet$$$$setModels$$($models$$15$$) {
    $oj$$30$$.$Assert$.$assertArray$($models$$15$$);
    null != $models$$15$$ && $models$$15$$.length === this.$getCount$("row") && (this.$m_models$ = $models$$15$$);
  };
  $oj$$30$$.$CollectionCellSet$.prototype.getData = function $$oj$$30$$$$CollectionCellSet$$$getData$($indexes$$12$$) {
    var $model$$61$$;
    $model$$61$$ = this.$_getModel$($indexes$$12$$);
    return null == $model$$61$$ ? null : $model$$61$$.get(this.$m_columns$[$indexes$$12$$.column]);
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getData", {getData:$oj$$30$$.$CollectionCellSet$.prototype.getData});
  $oj$$30$$.$CollectionCellSet$.prototype.getMetadata = function $$oj$$30$$$$CollectionCellSet$$$getMetadata$($indexes$$13$$) {
    var $model$$62$$;
    $model$$62$$ = this.$_getModel$($indexes$$13$$);
    return null == $model$$62$$ ? null : {keys:{row:$oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$62$$), column:this.$m_columns$[$indexes$$13$$.column]}};
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getMetadata", {getMetadata:$oj$$30$$.$CollectionCellSet$.prototype.getMetadata});
  $oj$$30$$.$CollectionCellSet$.prototype.$_getModel$ = function $$oj$$30$$$$CollectionCellSet$$$$_getModel$$($column$$25_indexes$$14$$) {
    var $row$$42$$;
    if (null == this.$m_models$) {
      return null;
    }
    $oj$$30$$.$Assert$.$assertObject$($column$$25_indexes$$14$$);
    $row$$42$$ = $column$$25_indexes$$14$$.row;
    $column$$25_indexes$$14$$ = $column$$25_indexes$$14$$.column;
    $oj$$30$$.$Assert$.assert($row$$42$$ >= this.$m_startRow$ && $row$$42$$ <= this.$m_endRow$ && $column$$25_indexes$$14$$ >= this.$m_startColumn$ && $column$$25_indexes$$14$$ <= this.$m_endColumn$);
    return this.$m_models$[$row$$42$$ - this.$m_startRow$];
  };
  $oj$$30$$.$CollectionCellSet$.prototype.$getCount$ = function $$oj$$30$$$$CollectionCellSet$$$$getCount$$($axis$$36$$) {
    return "row" === $axis$$36$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$36$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionCellSet$.prototype.$getCount$});
  $oj$$30$$.$CollectionCellSet$.prototype.getStartRow = function $$oj$$30$$$$CollectionCellSet$$$getStartRow$() {
    return this.$m_startRow$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartRow", {getStartRow:$oj$$30$$.$CollectionCellSet$.prototype.getStartRow});
  $oj$$30$$.$CollectionCellSet$.prototype.$getEndRow$ = function $$oj$$30$$$$CollectionCellSet$$$$getEndRow$$() {
    return this.$m_endRow$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndRow", {$getEndRow$:$oj$$30$$.$CollectionCellSet$.prototype.$getEndRow$});
  $oj$$30$$.$CollectionCellSet$.prototype.getStartColumn = function $$oj$$30$$$$CollectionCellSet$$$getStartColumn$() {
    return this.$m_startColumn$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartColumn", {getStartColumn:$oj$$30$$.$CollectionCellSet$.prototype.getStartColumn});
  $oj$$30$$.$CollectionCellSet$.prototype.$getEndColumn$ = function $$oj$$30$$$$CollectionCellSet$$$$getEndColumn$$() {
    return this.$m_endColumn$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndColumn", {$getEndColumn$:$oj$$30$$.$CollectionCellSet$.prototype.$getEndColumn$});
  $oj$$30$$.$CollectionCellSet$.prototype.$getColumns$ = function $$oj$$30$$$$CollectionCellSet$$$$getColumns$$() {
    return this.$m_columns$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getColumns", {$getColumns$:$oj$$30$$.$CollectionCellSet$.prototype.$getColumns$});
  $oj$$30$$.$CollectionDataGridDataSource$ = function $$oj$$30$$$$CollectionDataGridDataSource$$($collection$$31$$, $options$$299$$) {
    this.$collection$ = $collection$$31$$;
    null != $options$$299$$ && (this.$rowHeader$ = $options$$299$$.rowHeader, this.columns = $options$$299$$.columns);
    this.$_setSortInfo$();
    $oj$$30$$.$CollectionDataGridDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionDataGridDataSource", $oj$$30$$.$CollectionDataGridDataSource$, $oj$$30$$);
  $oj$$30$$.$Object$.$createSubclass$($oj$$30$$.$CollectionDataGridDataSource$, $oj$$30$$.$DataGridDataSource$, "oj.CollectionDataGridDataSource");
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.Init = function $$oj$$30$$$$CollectionDataGridDataSource$$$Init$() {
    $oj$$30$$.$CollectionDataGridDataSource$.$superclass$.Init.call(this);
    this.$pendingHeaderCallback$ = {};
    this.$_registerEventListeners$();
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.Init", {Init:$oj$$30$$.$CollectionDataGridDataSource$.prototype.Init});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_registerEventListeners$$() {
    this.$collection$.on("add", this.$_handleModelAdded$.bind(this));
    this.$collection$.on("remove", this.$_handleModelDeleted$.bind(this));
    this.$collection$.on("change", this.$_handleModelChanged$.bind(this));
    this.$collection$.on("refresh", this.$_handleCollectionRefresh$.bind(this));
    this.$collection$.on("reset", this.$_handleCollectionReset$.bind(this));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_isDataAvailable$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_isDataAvailable$$() {
    return null != this.data;
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCount$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getCount$$($axis$$37$$) {
    var $totalSize$$1$$;
    void 0 == this.precision && (this.precision = {});
    if ("row" == $axis$$37$$) {
      $totalSize$$1$$ = this.$_totalSize$();
      if (-1 === $totalSize$$1$$ || 0 === $totalSize$$1$$ && (!this.$_isDataAvailable$() || 0 < this.$_size$())) {
        return this.precision[$axis$$37$$] = "estimate", -1;
      }
      this.precision[$axis$$37$$] = "exact";
      return this.$_size$();
    }
    if ("column" == $axis$$37$$) {
      if (null != this.columns) {
        return this.precision[$axis$$37$$] = "exact", this.columns.length;
      }
      this.precision[$axis$$37$$] = "estimate";
      return-1;
    }
    return 0;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCount$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getCountPrecision$$($axis$$38$$) {
    null != this.precision && null != this.precision[$axis$$38$$] || this.$getCount$($axis$$38$$);
    return this.precision[$axis$$38$$];
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$fetchHeaders$$($headerRange$$2$$, $callbacks$$23$$, $callbackObjects$$9$$) {
    var $axis$$39$$, $callback$$107$$;
    null != $callbacks$$23$$ && ($axis$$39$$ = $headerRange$$2$$.axis, $callback$$107$$ = {}, $callback$$107$$.$headerRange$ = $headerRange$$2$$, $callback$$107$$.callbacks = $callbacks$$23$$, $callback$$107$$.$callbackObjects$ = $callbackObjects$$9$$, this.$pendingHeaderCallback$[$axis$$39$$] = $callback$$107$$);
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleHeaderFetchSuccess$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleHeaderFetchSuccess$$($headerRange$$3$$, $callbacks$$24$$, $callbackObjects$$10$$, $actualRange_end$$17$$) {
    var $axis$$40$$, $start$$48$$, $count$$51$$, $headerSet$$1$$;
    $axis$$40$$ = $headerRange$$3$$.axis;
    $start$$48$$ = $headerRange$$3$$.start;
    $count$$51$$ = $headerRange$$3$$.count;
    if ("column" === $axis$$40$$) {
      null != this.columns ? ($actualRange_end$$17$$ = Math.min(this.columns.length, $start$$48$$ + $count$$51$$), $headerSet$$1$$ = new $oj$$30$$.$CollectionHeaderSet$($start$$48$$, $actualRange_end$$17$$, this.columns, void 0, this.$_sortInfo$)) : $headerSet$$1$$ = new $oj$$30$$.$ArrayHeaderSet$($start$$48$$, $start$$48$$, $axis$$40$$, null);
    } else {
      if ("row" === $axis$$40$$) {
        if (null != this.$rowHeader$) {
          null != $actualRange_end$$17$$ && ($count$$51$$ = $actualRange_end$$17$$.count);
          $actualRange_end$$17$$ = Math.min(this.$_size$(), $start$$48$$ + $count$$51$$);
          $headerSet$$1$$ = new $oj$$30$$.$CollectionHeaderSet$($start$$48$$, $actualRange_end$$17$$, this.columns, this.$rowHeader$);
          this.$_resolveModels$($start$$48$$, $actualRange_end$$17$$, $headerSet$$1$$, $headerRange$$3$$, $callbacks$$24$$, $callbackObjects$$10$$);
          return;
        }
        $headerSet$$1$$ = new $oj$$30$$.$ArrayHeaderSet$($start$$48$$, $start$$48$$, $axis$$40$$, null);
      }
    }
    null != $callbacks$$24$$ && $callbacks$$24$$.success && $callbacks$$24$$.success.call($callbackObjects$$10$$.success, $headerSet$$1$$, $headerRange$$3$$);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_getRanges$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_getRanges$$($cellRanges$$1$$) {
    var $i$$323$$, $cellRange$$3$$, $rowStart$$2$$, $rowCount$$6$$, $colStart$$1$$, $colCount$$1$$;
    for ($i$$323$$ = 0;$i$$323$$ < $cellRanges$$1$$.length;$i$$323$$ += 1) {
      $cellRange$$3$$ = $cellRanges$$1$$[$i$$323$$], "row" === $cellRange$$3$$.axis ? ($rowStart$$2$$ = $cellRange$$3$$.start, $rowCount$$6$$ = $cellRange$$3$$.count) : "column" === $cellRange$$3$$.axis && ($colStart$$1$$ = $cellRange$$3$$.start, $colCount$$1$$ = $cellRange$$3$$.count);
    }
    return{rowStart:$rowStart$$2$$, rowCount:$rowCount$$6$$, colStart:$colStart$$1$$, colCount:$colCount$$1$$};
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleCellFetchSuccess$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleCellFetchSuccess$$($cellRanges$$2$$, $callbacks$$25$$, $callbackObjects$$11$$, $actualRange$$1_rowEnd$$1$$) {
    var $cellSet$$1_colEnd$$1_ranges$$, $rowStart$$3$$, $colStart$$2$$;
    $cellSet$$1_colEnd$$1_ranges$$ = this.$_getRanges$($cellRanges$$2$$);
    $rowStart$$3$$ = $cellSet$$1_colEnd$$1_ranges$$.rowStart;
    $actualRange$$1_rowEnd$$1$$ = null != $actualRange$$1_rowEnd$$1$$ ? Math.min(this.$_size$(), $rowStart$$3$$ + $actualRange$$1_rowEnd$$1$$.count) : Math.min(this.$_size$(), $rowStart$$3$$ + $cellSet$$1_colEnd$$1_ranges$$.rowCount);
    $colStart$$2$$ = $cellSet$$1_colEnd$$1_ranges$$.colStart;
    $cellSet$$1_colEnd$$1_ranges$$ = Math.min(null == this.columns ? 0 : this.columns.length, $colStart$$2$$ + $cellSet$$1_colEnd$$1_ranges$$.colCount);
    $cellSet$$1_colEnd$$1_ranges$$ = new $oj$$30$$.$CollectionCellSet$($rowStart$$3$$, $actualRange$$1_rowEnd$$1$$, $colStart$$2$$, $cellSet$$1_colEnd$$1_ranges$$, this.columns);
    this.$_resolveModels$($rowStart$$3$$, $actualRange$$1_rowEnd$$1$$, $cellSet$$1_colEnd$$1_ranges$$, $cellRanges$$2$$, $callbacks$$25$$, $callbackObjects$$11$$);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_resolveModels$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_resolveModels$$($i$$324_rowStart$$4$$, $rowEnd$$2$$, $set$$4$$, $ranges$$1$$, $callbacks$$26$$, $callbackObjects$$12$$) {
    var $promises$$;
    for ($promises$$ = [];$i$$324_rowStart$$4$$ < $rowEnd$$2$$;$i$$324_rowStart$$4$$++) {
      $promises$$.push(this.$collection$.at($i$$324_rowStart$$4$$, {deferred:!0}));
    }
    Promise.all($promises$$).then(function($models$$16$$) {
      $set$$4$$.$setModels$($models$$16$$);
      $callbacks$$26$$.success.call($callbackObjects$$12$$.success, $set$$4$$, $ranges$$1$$);
    });
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$fetchCells$$($cellRanges$$3$$, $callbacks$$27$$, $callbackObjects$$13$$) {
    null != $callbacks$$27$$ && (this.$pendingCellCallback$ = {}, this.$pendingCellCallback$.$cellRanges$ = $cellRanges$$3$$, this.$pendingCellCallback$.callbacks = $callbacks$$27$$, this.$pendingCellCallback$.$callbackObjects$ = $callbackObjects$$13$$);
    this.$_fetchCells$($cellRanges$$3$$);
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$fetchCells$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderCallbacks$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_processPendingHeaderCallbacks$$($axis$$41$$) {
    var $pendingCallback$$, $headerRange$$4$$, $callbacks$$28$$, $callbackObjects$$14$$, $actualRange$$2$$;
    $pendingCallback$$ = this.$pendingHeaderCallback$[$axis$$41$$];
    null != $pendingCallback$$ && ($headerRange$$4$$ = $pendingCallback$$.$headerRange$, $callbacks$$28$$ = $pendingCallback$$.callbacks, $callbackObjects$$14$$ = $pendingCallback$$.$callbackObjects$, "row" === $axis$$41$$ && ($actualRange$$2$$ = $pendingCallback$$.$actualRange$), this.$_handleHeaderFetchSuccess$($headerRange$$4$$, $callbacks$$28$$, $callbackObjects$$14$$, $actualRange$$2$$), this.$pendingHeaderCallback$[$axis$$41$$] = null);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellCallbacks$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_processPendingCellCallbacks$$() {
    this.$_handleCellFetchSuccess$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$, this.$pendingCellCallback$.$actualRange$);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_fetchCells$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_fetchCells$$($cellRanges$$5_ranges$$2$$) {
    var $rowStart$$5$$;
    $cellRanges$$5_ranges$$2$$ = this.$_getRanges$($cellRanges$$5_ranges$$2$$);
    $rowStart$$5$$ = $cellRanges$$5_ranges$$2$$.rowStart;
    this.$collection$.$setRangeLocal$($rowStart$$5$$, $cellRanges$$5_ranges$$2$$.rowCount).then(function($actual$$5$$) {
      this.data = !0;
      this.$_setActualCallbackRanges$($actual$$5$$.start, $actual$$5$$.count);
      void 0 === this.columns ? this.$collection$.at($rowStart$$5$$, {deferred:!0}).then(function($model$$63$$) {
        null != $model$$63$$ && this.$_setupColumns$($model$$63$$);
        this.$_fetchCellsComplete$();
      }.bind(this)) : this.$_fetchCellsComplete$();
    }.bind(this), function($e$$94$$) {
      this.$_fetchCellsError$($e$$94$$);
    }.bind(this));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsError$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_fetchCellsError$$($error$$39$$) {
    $oj$$30$$.$Logger$.error($error$$39$$);
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderErrorCallbacks$("column", $error$$39$$), this.$_processPendingHeaderErrorCallbacks$("row", $error$$39$$));
    null != this.$pendingCellCallback$ && this.$_processPendingCellErrorCallbacks$($error$$39$$);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderErrorCallbacks$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_processPendingHeaderErrorCallbacks$$($axis$$42$$, $error$$40$$) {
    var $headerRange$$5_pendingCallback$$1$$, $callbacks$$30$$, $callbackObjects$$16$$;
    $headerRange$$5_pendingCallback$$1$$ = this.$pendingHeaderCallback$[$axis$$42$$];
    null != $headerRange$$5_pendingCallback$$1$$ && ($callbacks$$30$$ = $headerRange$$5_pendingCallback$$1$$.callbacks, $callbackObjects$$16$$ = $headerRange$$5_pendingCallback$$1$$.$callbackObjects$, $headerRange$$5_pendingCallback$$1$$ = $headerRange$$5_pendingCallback$$1$$.$headerRange$, $callbacks$$30$$.error && $callbacks$$30$$.error.call($callbackObjects$$16$$.error, $error$$40$$, $headerRange$$5_pendingCallback$$1$$), this.$pendingHeaderCallback$[$axis$$42$$] = null);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellErrorCallbacks$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_processPendingCellErrorCallbacks$$($error$$41$$) {
    var $callbacks$$31$$, $callbackObjects$$17$$, $cellRanges$$6$$;
    $callbacks$$31$$ = this.$pendingCellCallback$.callbacks;
    $callbackObjects$$17$$ = this.$pendingCellCallback$.$callbackObjects$;
    $cellRanges$$6$$ = this.$pendingCellCallback$.$cellRanges$;
    $callbacks$$31$$.error && $callbacks$$31$$.error.call($callbackObjects$$17$$.error, $error$$41$$, $cellRanges$$6$$);
    this.$pendingCellCallback$ = null;
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsComplete$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_fetchCellsComplete$$() {
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderCallbacks$("column"), this.$_processPendingHeaderCallbacks$("row"));
    null != this.$pendingCellCallback$ && this.$_processPendingCellCallbacks$();
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_setActualCallbackRanges$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_setActualCallbackRanges$$($start$$49$$, $count$$52$$) {
    var $actualRange$$4$$ = {start:$start$$49$$, count:$count$$52$$};
    null != this.$pendingHeaderCallback$.row && (this.$pendingHeaderCallback$.row.$actualRange$ = $actualRange$$4$$);
    null != this.$pendingCellCallback$ && (this.$pendingCellCallback$.$actualRange$ = $actualRange$$4$$);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_setupColumns$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_setupColumns$$($model$$64$$) {
    this.columns = $model$$64$$.keys();
    -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.keys = function $$oj$$30$$$$CollectionDataGridDataSource$$$keys$($indexes$$15$$) {
    var $rowIndex$$9$$, $columnIndex$$4$$, $rowKey$$33$$, $columnKey$$3$$, $self$$154$$;
    $rowIndex$$9$$ = $indexes$$15$$.row;
    $columnIndex$$4$$ = $indexes$$15$$.column;
    $self$$154$$ = this;
    return new Promise(function($resolve$$39$$) {
      $self$$154$$.$collection$.at($rowIndex$$9$$, {deferred:!0}).then(function($rowModel$$) {
        null == $rowModel$$ ? $resolve$$39$$({row:null, column:null}) : ($rowKey$$33$$ = $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($rowModel$$), null == $self$$154$$.columns && $self$$154$$.$_setupColumns$($rowModel$$), $columnKey$$3$$ = $self$$154$$.columns[$columnIndex$$4$$], $resolve$$39$$({row:$rowKey$$33$$, column:$columnKey$$3$$}));
      }.bind($self$$154$$));
    });
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.keys", {keys:$oj$$30$$.$CollectionDataGridDataSource$.prototype.keys});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$indexes$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$indexes$$($keys$$39$$) {
    var $rowKey$$34$$, $columnKey$$4$$, $columnIndex$$5$$, $self$$155$$;
    $rowKey$$34$$ = $keys$$39$$.row;
    $columnKey$$4$$ = $keys$$39$$.column;
    $self$$155$$ = this;
    return new Promise(function($resolve$$40$$) {
      $self$$155$$.$collection$.indexOf($rowKey$$34$$, {deferred:!0}).then(function($rowIndex$$10$$) {
        -1 === $rowIndex$$10$$ ? $resolve$$40$$({row:-1, column:-1}) : null == $self$$155$$.columns ? $self$$155$$.$collection$.at($rowIndex$$10$$, {deferred:!0}).then(function($model$$65$$) {
          $self$$155$$.$_setupColumns$($model$$65$$);
          $columnIndex$$5$$ = $self$$155$$.columns.indexOf($columnKey$$4$$);
          -1 === $columnIndex$$5$$ && ($rowIndex$$10$$ = -1);
          $resolve$$40$$({row:$rowIndex$$10$$, column:$columnIndex$$5$$});
        }.bind($self$$155$$)) : ($columnIndex$$5$$ = $self$$155$$.columns.indexOf($columnKey$$4$$), -1 === $columnIndex$$5$$ && ($rowIndex$$10$$ = -1), $resolve$$40$$({row:$rowIndex$$10$$, column:$columnIndex$$5$$}));
      }.bind($self$$155$$));
    });
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.indexes", {$indexes$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$indexes$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.getCapability = function $$oj$$30$$$$CollectionDataGridDataSource$$$getCapability$($feature$$9$$) {
    return "sort" === $feature$$9$$ ? "column" : "move" === $feature$$9$$ ? "row" : null;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCapability", {getCapability:$oj$$30$$.$CollectionDataGridDataSource$.prototype.getCapability});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.sort = function $$oj$$30$$$$CollectionDataGridDataSource$$$sort$($axis$$43_criteria$$3$$, $callbacks$$32$$, $callbackObjects$$18$$) {
    var $comparator$$13$$, $direction$$9$$, $key$$142$$;
    null == $callbackObjects$$18$$ && ($callbackObjects$$18$$ = {});
    null == $axis$$43_criteria$$3$$ ? this.$_resetSortOrder$($callbacks$$32$$, $callbackObjects$$18$$) : ($direction$$9$$ = $axis$$43_criteria$$3$$.direction, $key$$142$$ = $axis$$43_criteria$$3$$.key, $axis$$43_criteria$$3$$ = $axis$$43_criteria$$3$$.axis, "column" === $axis$$43_criteria$$3$$ ? (this.$collection$.$IsVirtual$() ? (this.$collection$.comparator = $key$$142$$, this.$collection$.sortDirection = "ascending" === $direction$$9$$ ? 1 : -1) : ("ascending" === $direction$$9$$ && ($comparator$$13$$ = 
    function $$comparator$$13$$$($a$$113$$, $b$$70$$) {
      var $as$$2$$, $bs$$2$$;
      $a$$113$$ = $a$$113$$.get($key$$142$$);
      $b$$70$$ = $b$$70$$.get($key$$142$$);
      $as$$2$$ = isNaN($a$$113$$);
      $bs$$2$$ = isNaN($b$$70$$);
      $a$$113$$ instanceof Date && ($a$$113$$ = $a$$113$$.toISOString(), $as$$2$$ = !0);
      $b$$70$$ instanceof Date && ($b$$70$$ = $b$$70$$.toISOString(), $bs$$2$$ = !0);
      return $as$$2$$ && $bs$$2$$ ? $a$$113$$ < $b$$70$$ ? -1 : $a$$113$$ === $b$$70$$ ? 0 : 1 : $as$$2$$ ? 1 : $bs$$2$$ ? -1 : $a$$113$$ - $b$$70$$;
    }), "descending" === $direction$$9$$ && ($comparator$$13$$ = function $$comparator$$13$$$($a$$114$$, $b$$71$$) {
      var $as$$3$$, $bs$$3$$;
      $a$$114$$ = $a$$114$$.get($key$$142$$);
      $b$$71$$ = $b$$71$$.get($key$$142$$);
      $as$$3$$ = isNaN($a$$114$$);
      $bs$$3$$ = isNaN($b$$71$$);
      $a$$114$$ instanceof Date && ($a$$114$$ = $a$$114$$.toISOString());
      $b$$71$$ instanceof Date && ($b$$71$$ = $b$$71$$.toISOString());
      return $as$$3$$ && $bs$$3$$ ? $a$$114$$ > $b$$71$$ ? -1 : $a$$114$$ === $b$$71$$ ? 0 : 1 : $as$$3$$ ? -1 : $bs$$3$$ ? 1 : $b$$71$$ - $a$$114$$;
    }), this.$collection$.comparator = $comparator$$13$$), this.$collection$.sort(), this.$_setSortInfo$($key$$142$$), null != $callbacks$$32$$ && null != $callbacks$$32$$.success && $callbacks$$32$$.success.call($callbackObjects$$18$$.success)) : null != $callbacks$$32$$ && null != $callbacks$$32$$.error && $callbacks$$32$$.error.call($callbackObjects$$18$$.error, "Axis value not supported"));
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.sort", {sort:$oj$$30$$.$CollectionDataGridDataSource$.prototype.sort});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_resetSortOrder$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_resetSortOrder$$($callbacks$$33$$, $callbackObjects$$19$$) {
    this.$collection$.comparator = null;
    this.$collection$.reset();
    null != $callbacks$$33$$ && null != $callbacks$$33$$.success && $callbacks$$33$$.success.call($callbackObjects$$19$$.success);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_setSortInfo$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_setSortInfo$$($key$$143$$) {
    var $comparator$$14$$, $direction$$10$$;
    $comparator$$14$$ = this.$collection$.comparator;
    $direction$$10$$ = -1 === this.$collection$.sortDirection ? "descending" : "ascending";
    null == $key$$143$$ && "function" === typeof $comparator$$14$$ ? this.$_sortInfo$ = {} : (this.$_sortInfo$ = {}, this.$_sortInfo$.axis = "column", this.$_sortInfo$.direction = $direction$$10$$, this.$_sortInfo$.key = null == $key$$143$$ ? $comparator$$14$$ : null);
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.move = function $$oj$$30$$$$CollectionDataGridDataSource$$$move$($moveKey$$1$$, $atKey$$1$$, $position$$17$$, $callbacks$$34$$, $callbackObjects$$20$$) {
    var $indexPromise$$;
    this.$collection$.get($moveKey$$1$$, {deferred:!0}).then(function($moveModel$$) {
      null == $atKey$$1$$ ? (this.$collection$.remove($moveModel$$), this.$collection$.add($moveModel$$), null != $callbacks$$34$$ && null != $callbacks$$34$$.success && $callbacks$$34$$.success.call($callbackObjects$$20$$.success)) : ($moveKey$$1$$ === $atKey$$1$$ ? ($indexPromise$$ = this.$collection$.indexOf($atKey$$1$$, {deferred:!0}), this.$collection$.remove($moveModel$$)) : (this.$collection$.remove($moveModel$$), $indexPromise$$ = this.$collection$.indexOf($atKey$$1$$, {deferred:!0})), $indexPromise$$.then(function($newIndex$$2$$) {
        this.$collection$.add($moveModel$$, {at:$newIndex$$2$$, $force$:!0});
        null != $callbacks$$34$$ && null != $callbacks$$34$$.success && $callbacks$$34$$.success.call($callbackObjects$$20$$.success);
      }.bind(this)));
    }.bind(this));
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.move", {move:$oj$$30$$.$CollectionDataGridDataSource$.prototype.move});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$moveOK$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$moveOK$$() {
    return "valid";
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.moveOK", {$moveOK$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$moveOK$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_getModelEvent$$($operation$$5$$, $rowKey$$35$$, $columnKey$$5$$, $rowIndex$$11$$, $columnIndex$$6$$) {
    var $event$$394$$ = {source:this};
    $event$$394$$.operation = $operation$$5$$;
    $event$$394$$.keys = {row:$rowKey$$35$$, column:$columnKey$$5$$};
    $event$$394$$.indexes = {row:$rowIndex$$11$$, column:$columnIndex$$6$$};
    return $event$$394$$;
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleModelAdded$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleModelAdded$$($model$$66$$) {
    this.handleEvent("change", this.$_getModelEvent$("insert", $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$66$$), null, $model$$66$$.index, -1));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleModelDeleted$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleModelDeleted$$($model$$67$$, $collection$$33$$, $args$$20$$) {
    this.handleEvent("change", this.$_getModelEvent$("delete", $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$67$$), null, $args$$20$$.index, -1));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleModelChanged$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleModelChanged$$($model$$68$$) {
    this.handleEvent("change", this.$_getModelEvent$("update", $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($model$$68$$), null, $model$$68$$.index, -1));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionRefresh$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleCollectionRefresh$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("refresh", null, null));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionReset$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_handleCollectionReset$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("reset", null, null));
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_size$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_size$$() {
    return this.$collection$.size();
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$_totalSize$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$_totalSize$$() {
    return void 0 === this.$collection$.totalResults ? -1 : this.$collection$.totalResults;
  };
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCollection$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getCollection$$() {
    return this.$collection$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCollection", {$getCollection$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getCollection$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getColumns$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getColumns$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$ = function $$oj$$30$$$$CollectionDataGridDataSource$$$$getRowHeader$$() {
    return this.$rowHeader$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getRowHeader", {$getRowHeader$:$oj$$30$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$});
  $oj$$30$$.$CollectionDataGridDataSource$.prototype.getData = function $$oj$$30$$$$CollectionDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getData", {getData:$oj$$30$$.$CollectionDataGridDataSource$.prototype.getData});
  $oj$$30$$.$CollectionDataGridUtils$ = function $$oj$$30$$$$CollectionDataGridUtils$$() {
  };
  $oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$ = function $$oj$$30$$$$CollectionDataGridUtils$$$_getModelKey$$($model$$69$$) {
    var $key$$144$$;
    $key$$144$$ = $model$$69$$.$GetId$();
    null == $key$$144$$ && ($key$$144$$ = $model$$69$$.$GetCid$());
    return $key$$144$$;
  };
  $oj$$30$$.$CollectionHeaderSet$ = function $$oj$$30$$$$CollectionHeaderSet$$($start$$50$$, $end$$18$$, $headers$$4$$, $rowHeader$$1$$, $sortInfo$$) {
    $oj$$30$$.$Assert$.$assertArrayOrNull$($headers$$4$$);
    this.$m_start$ = $start$$50$$;
    this.$m_end$ = $end$$18$$;
    this.$m_headers$ = $headers$$4$$;
    this.$m_rowHeader$ = $rowHeader$$1$$;
    this.$m_sortInfo$ = $sortInfo$$;
  };
  $goog$exportPath_$$("CollectionHeaderSet", $oj$$30$$.$CollectionHeaderSet$, $oj$$30$$);
  $oj$$30$$.$CollectionHeaderSet$.prototype.$setModels$ = function $$oj$$30$$$$CollectionHeaderSet$$$$setModels$$($models$$17$$) {
    $oj$$30$$.$Assert$.$assertArray$($models$$17$$);
    null != $models$$17$$ && $models$$17$$.length === this.$getCount$() && (this.$m_models$ = $models$$17$$);
  };
  $oj$$30$$.$CollectionHeaderSet$.prototype.getData = function $$oj$$30$$$$CollectionHeaderSet$$$getData$($index$$196$$, $level$$30$$) {
    var $model$$70$$;
    $oj$$30$$.$Assert$.assert($index$$196$$ <= this.$m_end$ && $index$$196$$ >= this.$m_start$, "index out of bounds");
    $oj$$30$$.$Assert$.assert(null == $level$$30$$ || 0 == $level$$30$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $model$$70$$ = this.$m_models$[$index$$196$$ - this.$m_start$];
      return $model$$70$$.get(this.$m_rowHeader$);
    }
    return this.$m_headers$[$index$$196$$];
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getData", {getData:$oj$$30$$.$CollectionHeaderSet$.prototype.getData});
  $oj$$30$$.$CollectionHeaderSet$.prototype.getMetadata = function $$oj$$30$$$$CollectionHeaderSet$$$getMetadata$($index$$197$$, $level$$31$$) {
    var $data$$150_model$$71$$;
    $oj$$30$$.$Assert$.assert($index$$197$$ <= this.$m_end$ && $index$$197$$ >= this.$m_start$, "index out of bounds");
    $oj$$30$$.$Assert$.assert(null == $level$$31$$ || 0 == $level$$31$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $data$$150_model$$71$$ = this.$m_models$[$index$$197$$ - this.$m_start$];
      return{key:$oj$$30$$.$CollectionDataGridUtils$.$_getModelKey$($data$$150_model$$71$$)};
    }
    $data$$150_model$$71$$ = this.getData($index$$197$$, $level$$31$$);
    return this.$m_sortInfo$.key === $data$$150_model$$71$$ ? {key:$data$$150_model$$71$$, sortDirection:this.$m_sortInfo$.direction} : {key:$data$$150_model$$71$$};
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getMetadata", {getMetadata:$oj$$30$$.$CollectionHeaderSet$.prototype.getMetadata});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getLevelCount$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getLevelCount$$() {
    return 0 < this.$getCount$() ? 1 : 0;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getLevelCount", {$getLevelCount$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getLevelCount$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getExtent$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getExtent$$($index$$198$$, $level$$32$$) {
    $oj$$30$$.$Assert$.assert($index$$198$$ <= this.$m_end$ && $index$$198$$ >= this.$m_start$, "index out of bounds");
    $oj$$30$$.$Assert$.assert(null == $level$$32$$ || 0 == $level$$32$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getExtent", {$getExtent$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getExtent$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getDepth$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getDepth$$($index$$199$$, $level$$33$$) {
    $oj$$30$$.$Assert$.assert($index$$199$$ <= this.$m_end$ && $index$$199$$ >= this.$m_start$, "index out of bounds");
    $oj$$30$$.$Assert$.assert(null == $level$$33$$ || 0 == $level$$33$$, "level out of bounds");
    return 1;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getDepth", {$getDepth$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getDepth$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getCount$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getCount$$() {
    return Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getCount$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getStart$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getStart", {$getStart$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getStart$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getEnd$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getEnd$$() {
    return this.$m_end$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getEnd", {$getEnd$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getEnd$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getHeaders$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getHeaders$$() {
    return this.$m_headers$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getHeaders", {$getHeaders$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getHeaders$});
  $oj$$30$$.$CollectionHeaderSet$.prototype.$getRowHeader$ = function $$oj$$30$$$$CollectionHeaderSet$$$$getRowHeader$$() {
    return this.$m_rowHeader$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getRowHeader", {$getRowHeader$:$oj$$30$$.$CollectionHeaderSet$.prototype.$getRowHeader$});
});
