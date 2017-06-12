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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$44$$) {
  $oj$$44$$.$FlattenedTreeTableDataSource$ = function $$oj$$44$$$$FlattenedTreeTableDataSource$$($data$$161$$, $options$$340$$) {
    $options$$340$$ = $options$$340$$ || {};
    if (!($data$$161$$ instanceof $oj$$44$$.$FlattenedTreeDataSource$)) {
      throw Error($oj$$44$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$44$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$_data$ = $data$$161$$;
    this.$_eventHandlers$ = [];
    this.$_startIndex$ = 0;
    this.$_nodeSetList$ = [];
    null == this.$_data$.$getOption$("fetchSize") && (this.$_data$.$getFetchSize$ = function $this$$_data$$$getFetchSize$$() {
      return-1;
    });
    var $self$$187$$ = this;
    this.$_data$.$insertRows$ = function $this$$_data$$$insertRows$$($insertAtIndex$$2$$, $i$$366_insertAtKey$$1$$, $nodeSet$$33$$) {
      var $row$$49$$, $rowIdx$$40$$, $rowKey$$41$$, $rowArray$$14$$ = [], $keyArray$$6$$ = [], $indexArray$$5$$ = [];
      for ($i$$366_insertAtKey$$1$$ = 0;$i$$366_insertAtKey$$1$$ < $nodeSet$$33$$.$getCount$();$i$$366_insertAtKey$$1$$++) {
        $row$$49$$ = $nodeSet$$33$$.getData($i$$366_insertAtKey$$1$$), $rowKey$$41$$ = $nodeSet$$33$$.getMetadata($i$$366_insertAtKey$$1$$).key, $rowIdx$$40$$ = $insertAtIndex$$2$$ + $i$$366_insertAtKey$$1$$, $self$$187$$.$_nodeSetList$[$rowIdx$$40$$] = {}, $self$$187$$.$_nodeSetList$[$rowIdx$$40$$].nodeSet = $nodeSet$$33$$, $self$$187$$.$_nodeSetList$[$rowIdx$$40$$].startIndex = $insertAtIndex$$2$$, $rowArray$$14$$.push($row$$49$$), $keyArray$$6$$.push($rowKey$$41$$), $indexArray$$5$$.push($rowIdx$$40$$), 
        $self$$187$$.$_rows$.data.splice($rowIdx$$40$$, 0, $row$$49$$), $self$$187$$.$_rows$.keys.splice($rowIdx$$40$$, 0, $rowKey$$41$$), $self$$187$$.$_rows$.indexes.splice($rowIdx$$40$$, 0, $rowIdx$$40$$);
      }
      $self$$187$$.$_pageSize$ || $oj$$44$$.$TableDataSource$.$superclass$.handleEvent.call($self$$187$$, $oj$$44$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$14$$, keys:$keyArray$$6$$, indexes:$indexArray$$5$$});
      $self$$187$$.$_realignRowIndices$();
      $self$$187$$.$_pageSize$ && setTimeout(function() {
        $self$$187$$.$_data$.refresh();
        $self$$187$$.$_rows$ = null;
        $self$$187$$.fetch();
      }, 0);
    };
    this.$_data$.$removeRows$ = function $this$$_data$$$removeRows$$($rowKeys$$2$$) {
      var $i$$367$$, $rowIdx$$41$$, $rowArray$$15$$ = [], $keyArray$$7$$ = [], $indexArray$$6$$ = [];
      for ($i$$367$$ = 0;$i$$367$$ < $rowKeys$$2$$.length;$i$$367$$++) {
        $rowIdx$$41$$ = $rowKeys$$2$$[$i$$367$$].index - $i$$367$$, $rowArray$$15$$.push(""), $keyArray$$7$$.push(""), $indexArray$$6$$.push($rowIdx$$41$$), $self$$187$$.$_rows$.data.splice($rowIdx$$41$$, 1), $self$$187$$.$_rows$.keys.splice($rowIdx$$41$$, 1), $self$$187$$.$_rows$.indexes.splice($rowIdx$$41$$, 1);
      }
      $self$$187$$.$_pageSize$ || $oj$$44$$.$TableDataSource$.$superclass$.handleEvent.call($self$$187$$, $oj$$44$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$15$$, keys:$keyArray$$7$$, indexes:$indexArray$$6$$});
      $self$$187$$.$_realignRowIndices$();
      $self$$187$$.$_pageSize$ && setTimeout(function() {
        $self$$187$$.$_data$.refresh();
        $self$$187$$.$_rows$ = null;
        $self$$187$$.fetch();
      }, 0);
    };
    this.Init();
    if (null != $options$$340$$ && ("enabled" == $options$$340$$.startFetch || null == $options$$340$$.startFetch) || null == $options$$340$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("FlattenedTreeTableDataSource", $oj$$44$$.$FlattenedTreeTableDataSource$, $oj$$44$$);
  $oj$$44$$.$Object$.$createSubclass$($oj$$44$$.$FlattenedTreeTableDataSource$, $oj$$44$$.$TableDataSource$, "oj.FlattenedTreeTableDataSource");
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.Init = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$Init$() {
    $oj$$44$$.$FlattenedTreeTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.Init", {Init:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.Init});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.getCapability = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getCapability", {getCapability:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.getCapability});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$getWrappedDataSource$() {
    return this.$_data$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.fetch = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$fetch$($options$$341$$) {
    $options$$341$$ = $options$$341$$ || {};
    return "init" != $options$$341$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$341$$) : Promise.resolve();
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.fetch", {fetch:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.fetch});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.at = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$at$($index$$222$$) {
    var $row$$51$$;
    $row$$51$$ = 0 > $index$$222$$ || $index$$222$$ >= this.$_rows$.length ? null : {data:this.$_rows$.data[$index$$222$$], index:$index$$222$$, key:this.$_rows$.keys[$index$$222$$]};
    return new Promise(function($resolve$$56$$) {
      $resolve$$56$$($row$$51$$);
    });
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.at", {at:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.at});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.collapse = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$collapse$($rowKey$$42$$) {
    this.$_data$.collapse($rowKey$$42$$);
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.collapse", {collapse:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.collapse});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.expand = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$expand$($rowKey$$43$$) {
    this.$_data$.expand($rowKey$$43$$);
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.expand", {expand:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.expand});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.get = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$get$() {
    $oj$$44$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.get", {get:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.get});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.on = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$on$($eventType$$46$$, $eventHandler$$3$$) {
    if ("expand" == $eventType$$46$$ || "collapse" == $eventType$$46$$) {
      this.$_data$.on($eventType$$46$$, $eventHandler$$3$$);
    } else {
      $oj$$44$$.$FlattenedTreeTableDataSource$.$superclass$.on.call(this, $eventType$$46$$, $eventHandler$$3$$);
    }
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.on", {on:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.on});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.off = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$off$($eventType$$47$$, $eventHandler$$4$$) {
    "expand" == $eventType$$47$$ || "collapse" == $eventType$$47$$ ? this.$_data$.off($eventType$$47$$, $eventHandler$$4$$) : $oj$$44$$.$FlattenedTreeTableDataSource$.$superclass$.off.call(this, $eventType$$47$$, $eventHandler$$4$$);
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.off", {off:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.off});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.sort = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$sort$($criteria$$8$$) {
    if (null == $criteria$$8$$) {
      return Promise.resolve();
    }
    var $self$$189$$ = this;
    $criteria$$8$$.axis = "column";
    return new Promise(function($resolve$$57$$, $reject$$52$$) {
      $self$$189$$.$_data$.getWrappedDataSource().sort($criteria$$8$$, {success:function() {
        setTimeout(function() {
          $self$$189$$.$_data$.refresh();
          $self$$189$$.$_rows$ = null;
          var $result$$73$$ = {header:$criteria$$8$$.key, direction:$criteria$$8$$.direction};
          $oj$$44$$.$TableDataSource$.$superclass$.handleEvent.call($self$$189$$, $oj$$44$$.$TableDataSource$.$EventType$.SORT, $result$$73$$);
          $resolve$$57$$($result$$73$$);
        }, 0);
      }.bind(this), error:function($status$$28$$) {
        $reject$$52$$($status$$28$$);
      }.bind(this)});
    });
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.sort", {sort:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.sort});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.totalSize = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$totalSize$() {
    return-1;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSize", {totalSize:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.totalSize});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.totalSizeConfidence = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$totalSizeConfidence$() {
    return "unknown";
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$44$$.$FlattenedTreeTableDataSource$.prototype.totalSizeConfidence});
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.$_getMetadata$ = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$$_getMetadata$$($index$$223$$) {
    return this.$_nodeSetList$[$index$$223$$].nodeSet.getMetadata($index$$223$$ - this.$_nodeSetList$[$index$$223$$].startIndex);
  };
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$$_fetchInternal$$($options$$344$$) {
    $options$$344$$ = $options$$344$$ || {};
    this.$_startFetch$($options$$344$$);
    this.$_startIndex$ = null == $options$$344$$.startIndex ? this.$_startIndex$ : $options$$344$$.startIndex;
    var $rangeCount$$1_rowArray$$16$$ = Number.MAX_VALUE;
    this.$_pageSize$ = null == $options$$344$$.pageSize ? this.$_pageSize$ : $options$$344$$.pageSize;
    null != this.$_pageSize$ && ($rangeCount$$1_rowArray$$16$$ = this.$_pageSize$);
    var $startIndex$$30$$ = this.$_startIndex$;
    if (null != this.$_rows$) {
      if (null != this.$_pageSize$) {
        var $endIndex$$8_result$$74$$ = this.$_rows$.data.length - 1;
        if (this.$_startIndex$ + this.$_pageSize$ - 1 <= $endIndex$$8_result$$74$$) {
          var $endIndex$$8_result$$74$$ = $oj$$44$$.$FlattenedTreeTableDataSource$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, this.$_pageSize$), $rangeCount$$1_rowArray$$16$$ = [], $keyArray$$8$$ = [], $i$$368$$;
          for ($i$$368$$ = this.$_startIndex$;$i$$368$$ <= $endIndex$$8_result$$74$$;$i$$368$$++) {
            $rangeCount$$1_rowArray$$16$$[$i$$368$$ - this.$_startIndex$] = this.$_rows$.data[$i$$368$$], $keyArray$$8$$[$i$$368$$ - this.$_startIndex$] = this.$_getMetadata$($i$$368$$).key;
          }
          $endIndex$$8_result$$74$$ = {data:$rangeCount$$1_rowArray$$16$$, keys:$keyArray$$8$$, startIndex:this.$_startIndex$};
          this.$_endFetch$($options$$344$$, $endIndex$$8_result$$74$$, null);
          return Promise.resolve($endIndex$$8_result$$74$$);
        }
        this.$_startIndex$ <= $endIndex$$8_result$$74$$ && ($startIndex$$30$$ = $endIndex$$8_result$$74$$ + 1);
      } else {
        this.$_data$.refresh(), this.$_rows$ = null;
      }
    } else {
      $startIndex$$30$$ = 0;
    }
    var $rangeOption$$ = {start:$startIndex$$30$$, count:$rangeCount$$1_rowArray$$16$$}, $self$$190$$ = this;
    return new Promise(function($resolve$$58$$, $reject$$53$$) {
      $self$$190$$.$_data$.$fetchRows$($rangeOption$$, {success:function($endIndex$$9_nodeSet$$35_result$$75$$) {
        $self$$190$$.$_handleFetchRowsSuccess$($endIndex$$9_nodeSet$$35_result$$75$$, $startIndex$$30$$);
        $options$$344$$.refresh = !0;
        $endIndex$$9_nodeSet$$35_result$$75$$ = $oj$$44$$.$FlattenedTreeTableDataSource$.$_getEndIndex$($self$$190$$.$_rows$, $self$$190$$.$_startIndex$, $self$$190$$.$_pageSize$);
        var $rowArray$$17$$ = [], $keyArray$$9$$ = [], $i$$369$$;
        for ($i$$369$$ = $self$$190$$.$_startIndex$;$i$$369$$ <= $endIndex$$9_nodeSet$$35_result$$75$$;$i$$369$$++) {
          $rowArray$$17$$[$i$$369$$ - $self$$190$$.$_startIndex$] = $self$$190$$.$_rows$.data[$i$$369$$], $keyArray$$9$$[$i$$369$$ - $self$$190$$.$_startIndex$] = $self$$190$$.$_getMetadata$($i$$369$$).key;
        }
        $endIndex$$9_nodeSet$$35_result$$75$$ = {data:$rowArray$$17$$, keys:$keyArray$$9$$, startIndex:$self$$190$$.$_startIndex$};
        $self$$190$$.$_endFetch$($options$$344$$, $endIndex$$9_nodeSet$$35_result$$75$$, null);
        $resolve$$58$$($endIndex$$9_nodeSet$$35_result$$75$$);
      }.bind(this), error:function($error$$48$$) {
        $self$$190$$.$_endFetch$($options$$344$$, null, $error$$48$$);
        $reject$$53$$($error$$48$$);
      }.bind(this)});
    });
  };
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$$_handleFetchRowsSuccess$$($nodeSet$$36$$, $startIndex$$31$$) {
    var $i$$370$$, $rowIdx$$42$$;
    for ($i$$370$$ = 0;$i$$370$$ < $nodeSet$$36$$.$getCount$();$i$$370$$++) {
      $rowIdx$$42$$ = $startIndex$$31$$ + $i$$370$$, this.$_nodeSetList$[$rowIdx$$42$$] = {}, this.$_nodeSetList$[$rowIdx$$42$$].nodeSet = $nodeSet$$36$$, this.$_nodeSetList$[$rowIdx$$42$$].startIndex = $startIndex$$31$$;
    }
    this.$_rows$ || (this.$_rows$ = {}, this.$_rows$.data = [], this.$_rows$.keys = [], this.$_rows$.indexes = []);
    $oj$$44$$.$FlattenedTreeTableDataSource$.$_getRowArray$($nodeSet$$36$$, this, this.$_rows$);
  };
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.$_startFetch$ = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$$_startFetch$$($options$$345$$) {
    $options$$345$$.silent || $oj$$44$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$44$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$345$$.startIndex});
  };
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.$_endFetch$ = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$$_endFetch$$($options$$346$$, $result$$76$$, $error$$49$$) {
    null != $error$$49$$ ? $oj$$44$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$44$$.$TableDataSource$.$EventType$.ERROR, $error$$49$$) : $options$$346$$.silent || $oj$$44$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$44$$.$TableDataSource$.$EventType$.SYNC, $result$$76$$);
  };
  $oj$$44$$.$FlattenedTreeTableDataSource$.$_getEndIndex$ = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$_getEndIndex$$($rows$$7$$, $startIndex$$32$$, $pageSize$$12$$) {
    var $endIndex$$10$$ = $rows$$7$$.data.length - 1;
    0 < $pageSize$$12$$ && ($endIndex$$10$$ = $startIndex$$32$$ + $pageSize$$12$$ - 1, $endIndex$$10$$ = $endIndex$$10$$ > $rows$$7$$.data.length - 1 ? $rows$$7$$.data.length - 1 : $endIndex$$10$$);
    return $endIndex$$10$$;
  };
  $oj$$44$$.$FlattenedTreeTableDataSource$.$_getRowArray$ = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$_getRowArray$$($nodeSet$$37$$, $endIndex$$11_rowSet$$, $rows$$8$$) {
    $endIndex$$11_rowSet$$ = $nodeSet$$37$$.$getCount$() - 1;
    var $i$$371$$;
    for ($i$$371$$ = $nodeSet$$37$$.$getStart$();$i$$371$$ <= $endIndex$$11_rowSet$$;$i$$371$$++) {
      var $row$$52$$ = $nodeSet$$37$$.getData($i$$371$$);
      $rows$$8$$.data[$i$$371$$] = $row$$52$$;
      $rows$$8$$.keys[$i$$371$$] = "";
      $rows$$8$$.indexes[$i$$371$$] = $i$$371$$;
    }
  };
  $oj$$44$$.$FlattenedTreeTableDataSource$.prototype.$_realignRowIndices$ = function $$oj$$44$$$$FlattenedTreeTableDataSource$$$$_realignRowIndices$$() {
    for (var $i$$372$$ = 0;$i$$372$$ < this.$_rows$.data.length;$i$$372$$++) {
      this.$_rows$.indexes[$i$$372$$] = $i$$372$$;
    }
  };
});
