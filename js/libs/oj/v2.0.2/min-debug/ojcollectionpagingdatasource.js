/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojdatasource-common", "ojs/ojmodel", "ojs/ojknockout-model"], function($oj$$31$$, $$$$30$$, $ko$$5$$) {
  $oj$$31$$.$CollectionPagingDataSource$ = function $$oj$$31$$$$CollectionPagingDataSource$$($collection$$35$$) {
    this.$collection$ = $collection$$35$$;
    this.current = 0;
    this.Init();
    this.$dataWindow$ = [];
    this.$_setPageSize$(10);
  };
  $goog$exportPath_$$("CollectionPagingDataSource", $oj$$31$$.$CollectionPagingDataSource$, $oj$$31$$);
  $oj$$31$$.$Object$.$createSubclass$($oj$$31$$.$CollectionPagingDataSource$, $oj$$31$$.$DataSource$, "oj.CollectionPagingDataSource");
  $oj$$31$$.$CollectionPagingDataSource$.prototype.Init = function $$oj$$31$$$$CollectionPagingDataSource$$$Init$() {
    $oj$$31$$.$CollectionPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.Init", {Init:$oj$$31$$.$CollectionPagingDataSource$.prototype.Init});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.$_getSize$ = function $$oj$$31$$$$CollectionPagingDataSource$$$$_getSize$$() {
    return this.$_hasMore$() ? this.$currentPageSize$ : this.totalSize() - this.current;
  };
  $oj$$31$$.$CollectionPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$31$$$$CollectionPagingDataSource$$$$_refreshDataWindow$$() {
    this.$dataWindow$ = Array(this.$_getSize$());
    var $self$$157$$ = this;
    return this.$collection$.$IterativeAt$(this.current, this.current + this.$dataWindow$.length).then(function($array$$16$$) {
      for (var $i$$325$$ = 0;$i$$325$$ < $array$$16$$.length;$i$$325$$++) {
        $self$$157$$.$dataWindow$[$i$$325$$] = $array$$16$$[$i$$325$$];
      }
      $self$$157$$.$_refreshObservableDataWindow$();
      $self$$157$$.$_endIndex$ = $self$$157$$.$_startIndex$ + $self$$157$$.$dataWindow$.length - 1;
    });
  };
  $oj$$31$$.$CollectionPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$31$$$$CollectionPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$326$$ = 0;$i$$326$$ < this.$dataWindow$.length;$i$$326$$++) {
        this.$observableDataWindow$.push($oj$$31$$.$KnockoutUtils$.map(this.$dataWindow$[$i$$326$$]));
      }
    }
  };
  $oj$$31$$.$CollectionPagingDataSource$.prototype.$getWindow$ = function $$oj$$31$$$$CollectionPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$31$$.$CollectionPagingDataSource$.prototype.$getWindow$});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$31$$$$CollectionPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$5$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$31$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.getPage = function $$oj$$31$$$$CollectionPagingDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getPage", {getPage:$oj$$31$$.$CollectionPagingDataSource$.prototype.getPage});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.setPage = function $$oj$$31$$$$CollectionPagingDataSource$$$setPage$($value$$267$$, $options$$300$$) {
    $options$$300$$ = $options$$300$$ || {};
    $value$$267$$ = parseInt($value$$267$$, 10);
    try {
      $oj$$31$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$31$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$267$$, previousPage:this.$_page$});
    } catch ($err$$22$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$300$$.pageSize ? $options$$300$$.pageSize : this.pageSize;
    $options$$300$$.startIndex = $value$$267$$ * this.pageSize;
    var $previousPage$$2$$ = this.$_page$;
    this.$_page$ = $value$$267$$;
    this.$_startIndex$ = $options$$300$$.startIndex;
    var $self$$158$$ = this;
    return new Promise(function($resolve$$41$$, $reject$$37$$) {
      $self$$158$$.$_fetchInternal$($options$$300$$).then(function() {
        $oj$$31$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call($self$$158$$, $oj$$31$$.$PagingModel$.$EventType$.PAGE, {page:$self$$158$$.$_page$, previousPage:$previousPage$$2$$});
        $resolve$$41$$(null);
      }, function() {
        $self$$158$$.$_page$ = $previousPage$$2$$;
        $self$$158$$.$_startIndex$ = $self$$158$$.$_page$ * $self$$158$$.pageSize;
        $reject$$37$$(null);
      });
    });
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.setPage", {setPage:$oj$$31$$.$CollectionPagingDataSource$.prototype.setPage});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.getStartItemIndex = function $$oj$$31$$$$CollectionPagingDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$31$$.$CollectionPagingDataSource$.prototype.getStartItemIndex});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.getEndItemIndex = function $$oj$$31$$$$CollectionPagingDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$31$$.$CollectionPagingDataSource$.prototype.getEndItemIndex});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.getPageCount = function $$oj$$31$$$$CollectionPagingDataSource$$$getPageCount$() {
    var $totalSize$$2$$ = this.totalSize();
    return-1 == $totalSize$$2$$ ? -1 : Math.ceil($totalSize$$2$$ / this.pageSize);
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getPageCount", {getPageCount:$oj$$31$$.$CollectionPagingDataSource$.prototype.getPageCount});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.fetch = function $$oj$$31$$$$CollectionPagingDataSource$$$fetch$($options$$301$$) {
    var $opts$$32$$ = $options$$301$$ || {};
    if (void 0 !== $opts$$32$$.pageSize && void 0 !== $opts$$32$$.startIndex) {
      if (!this.$_hasMore$()) {
        return this.$_processSuccess$(null), Promise.resolve();
      }
      this.$currentPageSize$ = $opts$$32$$.startIndex + $opts$$32$$.pageSize;
      var $self$$159$$ = this;
      return this.$_refreshDataWindow$().then(function() {
        $self$$159$$.$_processSuccess$(null);
      });
    }
    return this.$_fetchInternal$($options$$301$$);
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.fetch", {fetch:$oj$$31$$.$CollectionPagingDataSource$.prototype.fetch});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$31$$$$CollectionPagingDataSource$$$$_fetchInternal$$($options$$302$$) {
    var $opts$$33$$ = $options$$302$$ || {};
    void 0 !== $opts$$33$$.startIndex && (this.current = $opts$$33$$.startIndex);
    void 0 !== $opts$$33$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$33$$.pageSize);
    var $self$$160$$ = this;
    return new Promise(function($resolve$$42$$) {
      try {
        $self$$160$$.$collection$.fetch({success:function() {
          $self$$160$$.$_refreshDataWindow$().then(function() {
            $self$$160$$.$_processSuccess$($opts$$33$$);
            $resolve$$42$$({data:$self$$160$$.$getWindow$(), startIndex:$self$$160$$.current});
          });
        }});
      } catch ($e$$95$$) {
        $self$$160$$.$_refreshDataWindow$().then(function() {
          $self$$160$$.$_processSuccess$($opts$$33$$);
          $resolve$$42$$({data:$self$$160$$.$getWindow$(), startIndex:$self$$160$$.current});
        });
      }
    });
  };
  $oj$$31$$.$CollectionPagingDataSource$.prototype.$_processSuccess$ = function $$oj$$31$$$$CollectionPagingDataSource$$$$_processSuccess$$($options$$303_opts$$34$$) {
    $options$$303_opts$$34$$ = $options$$303_opts$$34$$ || {};
    $options$$303_opts$$34$$.silent || this.handleEvent("sync", {data:this.$getWindow$(), startIndex:this.current});
    $options$$303_opts$$34$$.success && $options$$303_opts$$34$$.success();
  };
  $oj$$31$$.$CollectionPagingDataSource$.prototype.handleEvent = function $$oj$$31$$$$CollectionPagingDataSource$$$handleEvent$($eventType$$45$$, $event$$400$$) {
    return $oj$$31$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$45$$, $event$$400$$);
  };
  $oj$$31$$.$CollectionPagingDataSource$.prototype.$_hasMore$ = function $$oj$$31$$$$CollectionPagingDataSource$$$$_hasMore$$() {
    return this.current + this.$currentPageSize$ < this.totalSize();
  };
  $oj$$31$$.$CollectionPagingDataSource$.prototype.$_setPageSize$ = function $$oj$$31$$$$CollectionPagingDataSource$$$$_setPageSize$$($n$$23$$) {
    this.$currentPageSize$ = this.pageSize = $n$$23$$;
  };
  $oj$$31$$.$CollectionPagingDataSource$.prototype.size = function $$oj$$31$$$$CollectionPagingDataSource$$$size$() {
    var $w$$6$$ = this.$getWindow$();
    return $w$$6$$ ? $w$$6$$.length : 0;
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.size", {size:$oj$$31$$.$CollectionPagingDataSource$.prototype.size});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.totalSize = function $$oj$$31$$$$CollectionPagingDataSource$$$totalSize$() {
    return this.$collection$.length;
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.totalSize", {totalSize:$oj$$31$$.$CollectionPagingDataSource$.prototype.totalSize});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.totalSizeConfidence = function $$oj$$31$$$$CollectionPagingDataSource$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$31$$.$CollectionPagingDataSource$.prototype.totalSizeConfidence});
  $oj$$31$$.$CollectionPagingDataSource$.prototype.getCapability = function $$oj$$31$$$$CollectionPagingDataSource$$$getCapability$() {
    return null;
  };
  $oj$$31$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getCapability", {getCapability:$oj$$31$$.$CollectionPagingDataSource$.prototype.getCapability});
});
