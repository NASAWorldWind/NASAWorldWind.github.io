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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$59$$) {
  $oj$$59$$.$PagingModel$ = function $$oj$$59$$$$PagingModel$$() {
  };
  $goog$exportPath_$$("PagingModel", $oj$$59$$.$PagingModel$, $oj$$59$$);
  $oj$$59$$.$PagingModel$.prototype.getPage = function $$oj$$59$$$$PagingModel$$$getPage$() {
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPage", {getPage:$oj$$59$$.$PagingModel$.prototype.getPage});
  $oj$$59$$.$PagingModel$.prototype.setPage = function $$oj$$59$$$$PagingModel$$$setPage$() {
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.setPage", {setPage:$oj$$59$$.$PagingModel$.prototype.setPage});
  $oj$$59$$.$PagingModel$.prototype.getStartItemIndex = function $$oj$$59$$$$PagingModel$$$getStartItemIndex$() {
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getStartItemIndex", {getStartItemIndex:$oj$$59$$.$PagingModel$.prototype.getStartItemIndex});
  $oj$$59$$.$PagingModel$.prototype.getEndItemIndex = function $$oj$$59$$$$PagingModel$$$getEndItemIndex$() {
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getEndItemIndex", {getEndItemIndex:$oj$$59$$.$PagingModel$.prototype.getEndItemIndex});
  $oj$$59$$.$PagingModel$.prototype.getPageCount = function $$oj$$59$$$$PagingModel$$$getPageCount$() {
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPageCount", {getPageCount:$oj$$59$$.$PagingModel$.prototype.getPageCount});
  $oj$$59$$.$PagingModel$.prototype.totalSize = function $$oj$$59$$$$PagingModel$$$totalSize$() {
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.totalSize", {totalSize:$oj$$59$$.$PagingModel$.prototype.totalSize});
  $oj$$59$$.$PagingModel$.prototype.totalSizeConfidence = function $$oj$$59$$$$PagingModel$$$totalSizeConfidence$() {
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$59$$.$PagingModel$.prototype.totalSizeConfidence});
  $oj$$59$$.$PagingModel$.$EventType$ = {BEFOREPAGE:"beforePage", PAGE:"page", PAGECOUNT:"pageCount"};
  $goog$exportPath_$$("PagingModel.EventType", $oj$$59$$.$PagingModel$.$EventType$, $oj$$59$$);
  $oj$$59$$.$PagingTableDataSource$ = function $$oj$$59$$$$PagingTableDataSource$$($dataSource$$7$$) {
    if (!($dataSource$$7$$ instanceof $oj$$59$$.$TableDataSource$)) {
      throw Error($oj$$59$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$59$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$dataSource$ = $dataSource$$7$$;
    this.$_startIndex$ = 0;
    this.$_endIndex$ = -1;
    this.Init();
  };
  $goog$exportPath_$$("PagingTableDataSource", $oj$$59$$.$PagingTableDataSource$, $oj$$59$$);
  $oj$$59$$.$Object$.$createSubclass$($oj$$59$$.$PagingTableDataSource$, $oj$$59$$.$TableDataSource$, "oj.PagingTableDataSource");
  $oj$$59$$.$PagingTableDataSource$.prototype.Init = function $$oj$$59$$$$PagingTableDataSource$$$Init$() {
    $oj$$59$$.$PagingTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.Init", {Init:$oj$$59$$.$PagingTableDataSource$.prototype.Init});
  $oj$$59$$.$PagingTableDataSource$.prototype.getWrappedDataSource = function $$oj$$59$$$$PagingTableDataSource$$$getWrappedDataSource$() {
    return this.$dataSource$;
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$59$$.$PagingTableDataSource$.prototype.getWrappedDataSource});
  $oj$$59$$.$PagingTableDataSource$.prototype.getPage = function $$oj$$59$$$$PagingTableDataSource$$$getPage$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_getPageFromStartIndex$();
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPage", {getPage:$oj$$59$$.$PagingTableDataSource$.prototype.getPage});
  $oj$$59$$.$PagingTableDataSource$.prototype.setPage = function $$oj$$59$$$$PagingTableDataSource$$$setPage$($value$$304$$, $options$$375$$) {
    $options$$375$$ = $options$$375$$ || {};
    $value$$304$$ = parseInt($value$$304$$, 10);
    try {
      $oj$$59$$.$PagingTableDataSource$.$superclass$.handleEvent.call(this, $oj$$59$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$304$$, previousPage:this.$_getPageFromStartIndex$()});
    } catch ($err$$24$$) {
      return Promise.reject(null);
    }
    var $previousPage$$4$$ = this.$_getPageFromStartIndex$();
    this.$_pageSize$ = null != $options$$375$$.pageSize ? $options$$375$$.pageSize : this.$_pageSize$;
    $options$$375$$.pageSize = this.$_pageSize$;
    $options$$375$$.startIndex = $value$$304$$ * this.$_pageSize$;
    this.$_startIndex$ = null == $options$$375$$.startIndex ? this.$_startIndex$ : $options$$375$$.startIndex;
    this.$_fetchType$ = "page";
    var $self$$208$$ = this;
    return new Promise(function($resolve$$68$$, $reject$$63$$) {
      0 < $self$$208$$.$_pageSize$ ? $self$$208$$.$dataSource$.fetch($options$$375$$).then(function($result$$80$$) {
        $result$$80$$.startIndex = 0;
        $self$$208$$.$_updateEndIndex$($result$$80$$.data.length);
        $oj$$59$$.$PagingTableDataSource$.$superclass$.handleEvent.call($self$$208$$, $oj$$59$$.$PagingModel$.$EventType$.PAGE, {page:$self$$208$$.$_getPageFromStartIndex$(), previousPage:$previousPage$$4$$});
        $resolve$$68$$(null);
      }, function() {
        $self$$208$$.$_startIndex$ = $previousPage$$4$$ * $self$$208$$.$_pageSize$;
        $reject$$63$$(null);
      }) : $resolve$$68$$(null);
    });
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.setPage", {setPage:$oj$$59$$.$PagingTableDataSource$.prototype.setPage});
  $oj$$59$$.$PagingTableDataSource$.prototype.getStartItemIndex = function $$oj$$59$$$$PagingTableDataSource$$$getStartItemIndex$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_startIndex$;
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$59$$.$PagingTableDataSource$.prototype.getStartItemIndex});
  $oj$$59$$.$PagingTableDataSource$.prototype.getEndItemIndex = function $$oj$$59$$$$PagingTableDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$59$$.$PagingTableDataSource$.prototype.getEndItemIndex});
  $oj$$59$$.$PagingTableDataSource$.prototype.getPageCount = function $$oj$$59$$$$PagingTableDataSource$$$getPageCount$() {
    var $totalSize$$9$$ = this.totalSize();
    return-1 == $totalSize$$9$$ ? -1 : Math.ceil($totalSize$$9$$ / this.$_pageSize$);
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPageCount", {getPageCount:$oj$$59$$.$PagingTableDataSource$.prototype.getPageCount});
  $oj$$59$$.$PagingTableDataSource$.prototype.at = function $$oj$$59$$$$PagingTableDataSource$$$at$($index$$253$$, $options$$376$$) {
    return this.$dataSource$.at($index$$253$$, $options$$376$$);
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.at", {at:$oj$$59$$.$PagingTableDataSource$.prototype.at});
  $oj$$59$$.$PagingTableDataSource$.prototype.fetch = function $$oj$$59$$$$PagingTableDataSource$$$fetch$($options$$377$$) {
    $options$$377$$ = $options$$377$$ || {};
    if (null == $options$$377$$.startIndex) {
      return this.setPage(this.getPage());
    }
    this.$_fetchType$ = "loadMore";
    this.$_startIndex$ = null == $options$$377$$.startIndex ? this.$_startIndex$ : $options$$377$$.startIndex;
    var $pageSize$$13$$ = null != $options$$377$$.pageSize ? $options$$377$$.pageSize : this.$_pageSize$;
    $options$$377$$.pageSize = $pageSize$$13$$;
    $options$$377$$.startIndex = this.$_startIndex$;
    var $self$$209$$ = this;
    return new Promise(function($resolve$$69$$, $reject$$64$$) {
      0 < $pageSize$$13$$ ? $self$$209$$.$dataSource$.fetch($options$$377$$).then(function($result$$81$$) {
        $self$$209$$.$_updateEndIndex$($result$$81$$.data.length);
        $resolve$$69$$($result$$81$$);
      }, function($e$$113$$) {
        $reject$$64$$($e$$113$$);
      }) : $resolve$$69$$(null);
    });
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.fetch", {fetch:$oj$$59$$.$PagingTableDataSource$.prototype.fetch});
  $oj$$59$$.$PagingTableDataSource$.prototype.get = function $$oj$$59$$$$PagingTableDataSource$$$get$($id$$49$$, $options$$378$$) {
    return this.$dataSource$.get($id$$49$$, $options$$378$$);
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.get", {get:$oj$$59$$.$PagingTableDataSource$.prototype.get});
  $oj$$59$$.$PagingTableDataSource$.prototype.getCapability = function $$oj$$59$$$$PagingTableDataSource$$$getCapability$($feature$$17$$) {
    return this.$dataSource$.getCapability($feature$$17$$);
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getCapability", {getCapability:$oj$$59$$.$PagingTableDataSource$.prototype.getCapability});
  $oj$$59$$.$PagingTableDataSource$.prototype.on = function $$oj$$59$$$$PagingTableDataSource$$$on$($eventType$$49$$, $eventHandler$$5$$) {
    var $self$$210$$ = this, $dataSource$$8$$ = this.$dataSource$;
    if ($eventType$$49$$ == $oj$$59$$.$TableDataSource$.$EventType$.SYNC) {
      var $ev$$4$$ = function $$ev$$4$$$($event$$576$$) {
        $self$$210$$.$_handleSyncEvent$($event$$576$$, $eventHandler$$5$$);
      };
      $dataSource$$8$$.on($eventType$$49$$, $ev$$4$$);
      return $ev$$4$$;
    }
    if ($eventType$$49$$ == $oj$$59$$.$TableDataSource$.$EventType$.ADD || $eventType$$49$$ == $oj$$59$$.$TableDataSource$.$EventType$.REMOVE || $eventType$$49$$ == $oj$$59$$.$TableDataSource$.$EventType$.CHANGE) {
      return $ev$$4$$ = function $$ev$$4$$$($event$$577$$) {
        $self$$210$$.$_handleRowEvent$($event$$577$$, $eventHandler$$5$$);
      }, $dataSource$$8$$.on($eventType$$49$$, $ev$$4$$), $ev$$4$$;
    }
    if ($eventType$$49$$ == $oj$$59$$.$TableDataSource$.$EventType$.REFRESH || $eventType$$49$$ == $oj$$59$$.$TableDataSource$.$EventType$.RESET) {
      return $ev$$4$$ = function $$ev$$4$$$($event$$578$$) {
        $self$$210$$.$_startIndex$ = 0;
        $eventHandler$$5$$($event$$578$$);
      }, $dataSource$$8$$.on($eventType$$49$$, $ev$$4$$), $ev$$4$$;
    }
    if ($eventType$$49$$ == $oj$$59$$.$PagingModel$.$EventType$.PAGE || $eventType$$49$$ == $oj$$59$$.$PagingModel$.$EventType$.PAGECOUNT) {
      $oj$$59$$.$PagingTableDataSource$.$superclass$.on.call(this, $eventType$$49$$, $eventHandler$$5$$);
    } else {
      $dataSource$$8$$.on($eventType$$49$$, $eventHandler$$5$$);
    }
    return $eventHandler$$5$$;
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.on", {on:$oj$$59$$.$PagingTableDataSource$.prototype.on});
  $oj$$59$$.$PagingTableDataSource$.prototype.off = function $$oj$$59$$$$PagingTableDataSource$$$off$($eventType$$50$$, $eventHandler$$6$$) {
    return $eventType$$50$$ == $oj$$59$$.$PagingModel$.$EventType$.PAGE || $eventType$$50$$ == $oj$$59$$.$PagingModel$.$EventType$.PAGECOUNT ? ($oj$$59$$.$PagingTableDataSource$.$superclass$.off.call(this, $eventType$$50$$, $eventHandler$$6$$), $eventHandler$$6$$) : this.$dataSource$.off($eventType$$50$$, $eventHandler$$6$$);
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.off", {off:$oj$$59$$.$PagingTableDataSource$.prototype.off});
  $oj$$59$$.$PagingTableDataSource$.prototype.sort = function $$oj$$59$$$$PagingTableDataSource$$$sort$($criteria$$12$$) {
    return this.$dataSource$.sort($criteria$$12$$);
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.sort", {sort:$oj$$59$$.$PagingTableDataSource$.prototype.sort});
  $oj$$59$$.$PagingTableDataSource$.prototype.totalSize = function $$oj$$59$$$$PagingTableDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize();
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSize", {totalSize:$oj$$59$$.$PagingTableDataSource$.prototype.totalSize});
  $oj$$59$$.$PagingTableDataSource$.prototype.totalSizeConfidence = function $$oj$$59$$$$PagingTableDataSource$$$totalSizeConfidence$() {
    return this.$dataSource$.totalSizeConfidence();
  };
  $oj$$59$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$59$$.$PagingTableDataSource$.prototype.totalSizeConfidence});
  $oj$$59$$.$PagingTableDataSource$.prototype.$_getPageFromStartIndex$ = function $$oj$$59$$$$PagingTableDataSource$$$$_getPageFromStartIndex$$() {
    return 0 < this.$_pageSize$ ? Math.floor(this.$_startIndex$ / this.$_pageSize$) : 0;
  };
  $oj$$59$$.$PagingTableDataSource$.prototype.$_handleRowEvent$ = function $$oj$$59$$$$PagingTableDataSource$$$$_handleRowEvent$$($event$$579$$, $eventHandler$$7$$) {
    var $ignoreRows$$ = [], $i$$423$$;
    for ($i$$423$$ = 0;$i$$423$$ < $event$$579$$.indexes.length;$i$$423$$++) {
      var $rowIdx$$43$$ = $event$$579$$.indexes[$i$$423$$];
      void 0 !== $rowIdx$$43$$ && ($rowIdx$$43$$ -= this.$_startIndex$, (0 > $rowIdx$$43$$ || $rowIdx$$43$$ >= this.$_startIndex$ + this.$_pageSize$) && $ignoreRows$$.push($i$$423$$));
    }
    if (0 < $ignoreRows$$.length) {
      for ($ignoreRows$$.sort(function($a$$125$$, $b$$79$$) {
        return $a$$125$$ - $b$$79$$;
      }), $i$$423$$ = $ignoreRows$$.length - 1;0 <= $i$$423$$;$i$$423$$--) {
        $event$$579$$.data.splice($ignoreRows$$[$i$$423$$], 1), $event$$579$$.indexes.splice($ignoreRows$$[$i$$423$$], 1), $event$$579$$.keys.splice($ignoreRows$$[$i$$423$$], 1);
      }
    }
    this.$_updateEndIndex$($event$$579$$.data.length);
    $event$$579$$.startIndex = this.$_startIndex$;
    $eventHandler$$7$$($event$$579$$);
  };
  $oj$$59$$.$PagingTableDataSource$.prototype.$_handleSyncEvent$ = function $$oj$$59$$$$PagingTableDataSource$$$$_handleSyncEvent$$($event$$580$$, $eventHandler$$8$$) {
    $event$$580$$.startIndex != this.$_startIndex$ && (this.$_startIndex$ = $event$$580$$.startIndex);
    this.$_updateEndIndex$($event$$580$$.data.length);
    if ("page" == this.$_fetchType$) {
      var $clonedEvent$$ = {};
      $oj$$59$$.$CollectionUtils$.$copyInto$($clonedEvent$$, $event$$580$$);
      $clonedEvent$$.startIndex = 0;
      $eventHandler$$8$$($clonedEvent$$);
    } else {
      $eventHandler$$8$$($event$$580$$);
    }
  };
  $oj$$59$$.$PagingTableDataSource$.prototype.$_updateEndIndex$ = function $$oj$$59$$$$PagingTableDataSource$$$$_updateEndIndex$$($resultSize$$) {
    var $totalSize$$10$$ = this.totalSize();
    0 < $totalSize$$10$$ ? (this.$_endIndex$ = this.$_startIndex$ + this.$_pageSize$ - 1, this.$_endIndex$ = this.$_endIndex$ > $totalSize$$10$$ - 1 ? $totalSize$$10$$ - 1 : this.$_endIndex$) : this.$_endIndex$ = 0 < $resultSize$$ ? this.$_startIndex$ + $resultSize$$ - 1 : -1;
  };
  $oj$$59$$.$PagingTableDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SYNC:"sync", REFRESH:"refresh", SORT:"sort"};
  $goog$exportPath_$$("PagingTableDataSource.EventType", $oj$$59$$.$PagingTableDataSource$.$EventType$, $oj$$59$$);
});
