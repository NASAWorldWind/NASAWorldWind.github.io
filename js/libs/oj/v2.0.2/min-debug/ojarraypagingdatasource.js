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
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojdatasource-common"], function($oj$$24$$, $$$$23$$, $ko$$4$$) {
  $oj$$24$$.$ArrayPagingDataSource$ = function $$oj$$24$$$$ArrayPagingDataSource$$($data$$146$$) {
    this.data = $data$$146$$;
    this.current = 0;
    this.Init();
    this.$_setPageSize$(10);
  };
  $goog$exportPath_$$("ArrayPagingDataSource", $oj$$24$$.$ArrayPagingDataSource$, $oj$$24$$);
  $oj$$24$$.$Object$.$createSubclass$($oj$$24$$.$ArrayPagingDataSource$, $oj$$24$$.$DataSource$, "oj.ArrayPagingDataSource");
  $oj$$24$$.$ArrayPagingDataSource$.prototype.Init = function $$oj$$24$$$$ArrayPagingDataSource$$$Init$() {
    $oj$$24$$.$ArrayPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.Init", {Init:$oj$$24$$.$ArrayPagingDataSource$.prototype.Init});
  $oj$$24$$.$ArrayPagingDataSource$.prototype.$_getSize$ = function $$oj$$24$$$$ArrayPagingDataSource$$$$_getSize$$() {
    return this.$_hasMore$() ? this.$currentPageSize$ : this.totalSize() - this.current;
  };
  $oj$$24$$.$ArrayPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$24$$$$ArrayPagingDataSource$$$$_refreshDataWindow$$($options$$277$$) {
    $options$$277$$ = $options$$277$$ || {};
    this.$dataWindow$ = Array(this.$_getSize$());
    for (var $i$$307$$ = 0;$i$$307$$ < this.$dataWindow$.length;$i$$307$$++) {
      this.$dataWindow$[$i$$307$$] = this.data[this.current + $i$$307$$];
    }
    this.$_refreshObservableDataWindow$();
    this.$_endIndex$ = this.$_startIndex$ + this.$dataWindow$.length - 1;
    $options$$277$$.silent || this.handleEvent("sync", {data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$24$$.$ArrayPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$24$$$$ArrayPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$308$$ = 0;$i$$308$$ < this.$dataWindow$.length;$i$$308$$++) {
        this.$observableDataWindow$.push(this.$dataWindow$[$i$$308$$]);
      }
    }
  };
  $oj$$24$$.$ArrayPagingDataSource$.prototype.handleEvent = function $$oj$$24$$$$ArrayPagingDataSource$$$handleEvent$($eventType$$40$$, $event$$358$$) {
    return $oj$$24$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$40$$, $event$$358$$);
  };
  $oj$$24$$.$ArrayPagingDataSource$.prototype.$getWindow$ = function $$oj$$24$$$$ArrayPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$24$$.$ArrayPagingDataSource$.prototype.$getWindow$});
  $oj$$24$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$24$$$$ArrayPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$4$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$24$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$24$$.$ArrayPagingDataSource$.prototype.getPage = function $$oj$$24$$$$ArrayPagingDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPage", {getPage:$oj$$24$$.$ArrayPagingDataSource$.prototype.getPage});
  $oj$$24$$.$ArrayPagingDataSource$.prototype.setPage = function $$oj$$24$$$$ArrayPagingDataSource$$$setPage$($value$$259$$, $options$$278$$) {
    $options$$278$$ = $options$$278$$ || {};
    $value$$259$$ = parseInt($value$$259$$, 10);
    try {
      $oj$$24$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$24$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$259$$, previousPage:this.$_page$});
    } catch ($err$$20$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$278$$.pageSize ? $options$$278$$.pageSize : this.pageSize;
    $options$$278$$.startIndex = $value$$259$$ * this.pageSize;
    var $previousPage$$1$$ = this.$_page$;
    this.$_page$ = $value$$259$$;
    this.$_startIndex$ = $options$$278$$.startIndex;
    var $self$$143$$ = this;
    return new Promise(function($resolve$$36$$, $reject$$32$$) {
      $self$$143$$.$_fetchInternal$($options$$278$$).then(function() {
        $oj$$24$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call($self$$143$$, $oj$$24$$.$PagingModel$.$EventType$.PAGE, {page:$self$$143$$.$_page$, previousPage:$previousPage$$1$$});
        $resolve$$36$$(null);
      }, function() {
        $self$$143$$.$_page$ = $previousPage$$1$$;
        $self$$143$$.$_startIndex$ = $self$$143$$.$_page$ * $self$$143$$.pageSize;
        $reject$$32$$(null);
      });
    });
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.setPage", {setPage:$oj$$24$$.$ArrayPagingDataSource$.prototype.setPage});
  $oj$$24$$.$ArrayPagingDataSource$.prototype.getStartItemIndex = function $$oj$$24$$$$ArrayPagingDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$24$$.$ArrayPagingDataSource$.prototype.getStartItemIndex});
  $oj$$24$$.$ArrayPagingDataSource$.prototype.getEndItemIndex = function $$oj$$24$$$$ArrayPagingDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$24$$.$ArrayPagingDataSource$.prototype.getEndItemIndex});
  $oj$$24$$.$ArrayPagingDataSource$.prototype.getPageCount = function $$oj$$24$$$$ArrayPagingDataSource$$$getPageCount$() {
    var $totalSize$$ = this.totalSize();
    return-1 == $totalSize$$ ? -1 : Math.ceil($totalSize$$ / this.pageSize);
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPageCount", {getPageCount:$oj$$24$$.$ArrayPagingDataSource$.prototype.getPageCount});
  $oj$$24$$.$ArrayPagingDataSource$.prototype.fetch = function $$oj$$24$$$$ArrayPagingDataSource$$$fetch$($options$$279_opts$$30$$) {
    $options$$279_opts$$30$$ = $options$$279_opts$$30$$ || {};
    if (void 0 !== $options$$279_opts$$30$$.pageSize && void 0 !== $options$$279_opts$$30$$.startIndex) {
      if (!this.$_hasMore$()) {
        return Promise.resolve();
      }
      this.$currentPageSize$ = $options$$279_opts$$30$$.startIndex + $options$$279_opts$$30$$.pageSize;
    }
    this.$_refreshDataWindow$(null);
    return Promise.resolve();
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.fetch", {fetch:$oj$$24$$.$ArrayPagingDataSource$.prototype.fetch});
  $oj$$24$$.$ArrayPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$24$$$$ArrayPagingDataSource$$$$_fetchInternal$$($options$$280$$) {
    var $opts$$31$$ = $options$$280$$ || {};
    void 0 !== $opts$$31$$.startIndex && (this.current = $opts$$31$$.startIndex);
    void 0 !== $opts$$31$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$31$$.pageSize);
    this.$_refreshDataWindow$($options$$280$$);
    return Promise.resolve({data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$24$$.$ArrayPagingDataSource$.prototype.$_hasMore$ = function $$oj$$24$$$$ArrayPagingDataSource$$$$_hasMore$$() {
    return this.current + this.$currentPageSize$ < this.totalSize();
  };
  $oj$$24$$.$ArrayPagingDataSource$.prototype.$_setPageSize$ = function $$oj$$24$$$$ArrayPagingDataSource$$$$_setPageSize$$($n$$22$$) {
    this.$currentPageSize$ = this.pageSize = $n$$22$$;
    this.$_refreshDataWindow$(null);
  };
  $oj$$24$$.$ArrayPagingDataSource$.prototype.totalSize = function $$oj$$24$$$$ArrayPagingDataSource$$$totalSize$() {
    return this.data.length;
  };
  $oj$$24$$.$ArrayPagingDataSource$.prototype.totalSizeConfidence = function $$oj$$24$$$$ArrayPagingDataSource$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$24$$.$ArrayPagingDataSource$.prototype.totalSizeConfidence});
  $oj$$24$$.$ArrayPagingDataSource$.prototype.getCapability = function $$oj$$24$$$$ArrayPagingDataSource$$$getCapability$() {
    return null;
  };
  $oj$$24$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getCapability", {getCapability:$oj$$24$$.$ArrayPagingDataSource$.prototype.getCapability});
});
