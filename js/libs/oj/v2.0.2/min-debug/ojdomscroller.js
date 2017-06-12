/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery"], function($oj$$41$$, $$$$38$$) {
  $oj$$41$$.$DomScroller$ = function $$oj$$41$$$$DomScroller$$($element$$141$$, $datasource$$, $options$$323$$) {
    $options$$323$$ = $options$$323$$ || {};
    this.$_data$ = $datasource$$;
    this.$_element$ = $element$$141$$;
    this.$_fetchSize$ = $options$$323$$.fetchSize;
    this.$_fetchSize$ = 0 < this.$_fetchSize$ ? this.$_fetchSize$ : 25;
    this.$_maxCount$ = $options$$323$$.maxCount;
    this.$_maxCount$ = 0 < this.$_maxCount$ ? this.$_maxCount$ : 500;
    this.$_rowCount$ = 0;
    this.$_successCallback$ = $options$$323$$.success;
    this.$_errorCallback$ = $options$$323$$.error;
    this.$_registerDataSourceEventListeners$();
    $$$$38$$(this.$_element$).on("scroll.domscroller", function($event$$467_maxScrollTop$$2$$) {
      var $scrollTop$$7$$ = $$$$38$$($event$$467_maxScrollTop$$2$$.target).scrollTop();
      $event$$467_maxScrollTop$$2$$ = $$$$38$$($event$$467_maxScrollTop$$2$$.target)[0].scrollHeight - $$$$38$$($event$$467_maxScrollTop$$2$$.target)[0].clientHeight;
      0 < $event$$467_maxScrollTop$$2$$ && this.$_handleScrollerScrollTop$($scrollTop$$7$$, $event$$467_maxScrollTop$$2$$);
    }.bind(this));
  };
  $oj$$41$$.$DomScroller$.prototype.destroy = function $$oj$$41$$$$DomScroller$$$destroy$() {
    this.$_unregisterDataSourceEventListeners$();
    $$$$38$$(this.$_element$).off("scroll.domscroller");
  };
  $oj$$41$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.destroy", {destroy:$oj$$41$$.$DomScroller$.prototype.destroy});
  $oj$$41$$.$DomScroller$.prototype.checkViewport = function $$oj$$41$$$$DomScroller$$$checkViewport$() {
    return 0 < this.$_element$[0].clientHeight && !this.$_checkOverflow$() ? this.$_fetchMoreRows$() : Promise.resolve(null);
  };
  $oj$$41$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.checkViewport", {checkViewport:$oj$$41$$.$DomScroller$.prototype.checkViewport});
  $oj$$41$$.$DomScroller$.prototype.$_handleScrollerScrollTop$ = function $$oj$$41$$$$DomScroller$$$$_handleScrollerScrollTop$$($scrollTop$$8$$, $maxScrollTop$$3$$) {
    if (1 >= $maxScrollTop$$3$$ - $scrollTop$$8$$) {
      var $self$$178$$ = this;
      this.$_fetchMoreRows$().then(function($result$$70$$) {
        null != $self$$178$$.$_successCallback$ && $self$$178$$.$_successCallback$($result$$70$$);
      }, this.$_errorCallback$);
    }
  };
  $oj$$41$$.$DomScroller$.prototype.$_checkOverflow$ = function $$oj$$41$$$$DomScroller$$$$_checkOverflow$$() {
    var $element$$142$$ = this.$_element$;
    return $element$$142$$[0].scrollHeight > $element$$142$$[0].clientHeight + 1 ? !0 : !1;
  };
  $oj$$41$$.$DomScroller$.prototype.$_fetchMoreRows$ = function $$oj$$41$$$$DomScroller$$$$_fetchMoreRows$$() {
    if (this.$_fetchPromise$) {
      return this.$_fetchPromise$;
    }
    var $remainingCount$$ = this.$_maxCount$ - this.$_rowCount$;
    if (0 < $remainingCount$$) {
      var $pageSize$$8$$ = this.$_fetchSize$, $self$$179$$ = this;
      $remainingCount$$ < this.$_fetchSize$ && ($pageSize$$8$$ = $remainingCount$$);
      var $fetchPromise$$2$$ = this.$_fetchNext$({pageSize:$pageSize$$8$$});
      return this.$_fetchPromise$ = new Promise(function($resolve$$51$$) {
        $fetchPromise$$2$$.then(function($result$$71$$) {
          $self$$179$$.$_fetchPromise$ = null;
          null != $result$$71$$ && ($self$$179$$.$_rowCount$ = $result$$71$$.data.length + $result$$71$$.startIndex, $remainingCount$$ < $self$$179$$.$_fetchSize$ && ($result$$71$$.maxCount = $self$$179$$.$_maxCount$, $result$$71$$.maxCountLimit = !0));
          $resolve$$51$$($result$$71$$);
        });
      });
    }
    return Promise.resolve({maxCount:this.$_maxCount$, maxCountLimit:!0});
  };
  $oj$$41$$.$DomScroller$.prototype.$_fetchNext$ = function $$oj$$41$$$$DomScroller$$$$_fetchNext$$($options$$324$$) {
    $options$$324$$ = $options$$324$$ || {};
    var $pageSize$$9$$ = $options$$324$$.pageSize;
    this.$_currentStartIndex$ = this.$_currentStartIndex$ ? this.$_currentStartIndex$ + $pageSize$$9$$ : $pageSize$$9$$;
    if (-1 == this.$_data$.totalSize() || this.$_data$.totalSize() > this.$_currentStartIndex$) {
      var $self$$180$$ = this;
      return new Promise(function($resolve$$52$$, $reject$$47$$) {
        $self$$180$$.$_data$.fetch({startIndex:$self$$180$$.$_currentStartIndex$, pageSize:$pageSize$$9$$}).then(function($result$$72$$) {
          $resolve$$52$$($result$$72$$);
        }, function() {
          $reject$$47$$(null);
        });
      });
    }
    return Promise.resolve();
  };
  $oj$$41$$.$DomScroller$.prototype.$_handleDataReset$ = function $$oj$$41$$$$DomScroller$$$$_handleDataReset$$() {
    this.$_currentStartIndex$ = null;
    this.$_rowCount$ = 0;
  };
  $oj$$41$$.$DomScroller$.prototype.$_handleDataSync$ = function $$oj$$41$$$$DomScroller$$$$_handleDataSync$$($event$$468$$) {
    this.$_currentStartIndex$ = $event$$468$$.startIndex;
    this.$_rowCount$ = $event$$468$$.data.length + this.$_currentStartIndex$;
  };
  $oj$$41$$.$DomScroller$.prototype.$_registerDataSourceEventListeners$ = function $$oj$$41$$$$DomScroller$$$$_registerDataSourceEventListeners$$() {
    var $data$$158$$ = this.$_data$;
    if (null != $data$$158$$) {
      this.$_unregisterDataSourceEventListeners$();
      this.$_dataSourceEventHandlers$ = [];
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$41$$.$TableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$41$$.$TableDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$41$$.$TableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$41$$.$TableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataSync$.bind(this)});
      var $i$$354$$, $ev$$2$$;
      for ($i$$354$$ = 0;$i$$354$$ < this.$_dataSourceEventHandlers$.length;$i$$354$$++) {
        ($ev$$2$$ = $data$$158$$.on(this.$_dataSourceEventHandlers$[$i$$354$$].eventType, this.$_dataSourceEventHandlers$[$i$$354$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$354$$].eventHandler = $ev$$2$$);
      }
    }
  };
  $oj$$41$$.$DomScroller$.prototype.$_unregisterDataSourceEventListeners$ = function $$oj$$41$$$$DomScroller$$$$_unregisterDataSourceEventListeners$$() {
    var $data$$159$$ = this.$_data$;
    if (null != this.$_dataSourceEventHandlers$ && null != $data$$159$$) {
      var $i$$355$$;
      for ($i$$355$$ = 0;$i$$355$$ < this.$_dataSourceEventHandlers$.length;$i$$355$$++) {
        $data$$159$$.off(this.$_dataSourceEventHandlers$[$i$$355$$].eventType, this.$_dataSourceEventHandlers$[$i$$355$$].eventHandler);
      }
    }
  };
});
