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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "hammerjs", "ojs/ojpagingtabledatasource", "ojs/ojinputtext", "ojs/ojjquery-hammer"], function($oj$$10$$, $$$$10$$, $compCore$$, $Hammer$$2$$) {
  (function() {
    $oj$$10$$.$__registerWidget$("oj.ojPagingControl", $$$$10$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{data:null, overflow:"fit", pageSize:25, pageOptions:{layout:["auto"], type:"numbers", maxPageLinks:6, orientation:"horizontal"}, loadMoreOptions:{maxCount:500}, mode:"page", ready:null}, $_BUNDLE_KEY$:{$_LABEL_ACC_PAGING$:"labelAccPaging", $_LABEL_ACC_NAV_FIRST_PAGE$:"labelAccNavFirstPage", $_LABEL_ACC_NAV_LAST_PAGE$:"labelAccNavLastPage", 
    $_LABEL_ACC_NAV_NEXT_PAGE$:"labelAccNavNextPage", $_LABEL_ACC_NAV_PREVIOUS_PAGE$:"labelAccNavPreviousPage", $_LABEL_ACC_NAV_PAGE$:"labelAccNavPage", $_LABEL_LOAD_MORE$:"labelLoadMore", $_LABEL_LOAD_MORE_MAX_ROWS$:"labelLoadMoreMaxRows", $_LABEL_NAV_INPUT_PAGE$:"labelNavInputPage", $_LABEL_NAV_INPUT_PAGE_MAX$:"labelNavInputPageMax", $_LABEL_NAV_INPUT_PAGE_SUMMARY$:"labelNavInputPageSummary", $_MSG_ITEM_RANGE_CURRENT$:"msgItemRangeCurrent", $_MSG_ITEM_RANGE_CURRENT_SINGLE$:"msgItemRangeCurrentSingle", 
    $_MSG_ITEM_RANGE_ITEMS$:"msgItemRangeItems", $_MSG_ITEM_RANGE_ATLEAST$:"msgItemRangeOfAtLeast", $_MSG_ITEM_RANGE_APPROX$:"msgItemRangeOfApprox", $_MSG_ITEM_RANGE_OF$:"msgItemRangeOf", $_TIP_NAV_INPUT_PAGE$:"tipNavInputPage", $_TIP_NAV_PAGE_LINK$:"tipNavPageLink", $_TIP_NAV_NEXT_PAGE$:"tipNavNextPage", $_TIP_NAV_PREVIOUS_PAGE$:"tipNavPreviousPage", $_TIP_NAV_FIRST_PAGE$:"tipNavFirstPage", $_TIP_NAV_LAST_PAGE$:"tipNavLastPage", $_ERR_PAGE_INVALID_SUMMARY$:"pageInvalid.summary", $_ERR_PAGE_INVALID_DETAIL$:"pageInvalid.detail", 
    $_ERR_DATA_INVALID_TYPE_SUMMARY$:"dataInvalidType.summary", $_ERR_DATA_INVALID_TYPE_DETAIL$:"dataInvalidType.detail", $_ERR_MAXPAGELINKS_INVALID_SUMMARY$:"maxPageLinksInvalid.summary", $_ERR_MAXPAGELINKS_INVALID_DETAIL$:"maxPageLinksInvalid.detail"}, $_MARKER_STYLE_CLASSES$:{$_WIDGET$:"oj-component", $_ACTIVE$:"oj-active", $_CLICKABLE_ICON$:"oj-clickable-icon-nocontext", $_DISABLED$:"oj-disabled", $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-selected"}, $_CSS_CLASSES$:{$_PAGING_CONTROL_CLASS$:"oj-pagingcontrol", 
    $_PAGING_CONTROL_ACC_LABEL_CLASS$:"oj-pagingcontrol-acc-label", $_PAGING_CONTROL_CONTENT_CLASS$:"oj-pagingcontrol-content", $_PAGING_CONTROL_LOAD_MORE_CLASS$:"oj-pagingcontrol-loadmore", $_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$:"oj-pagingcontrol-loadmore-link", $_PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS$:"oj-pagingcontrol-loadmore-max-rows", $_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$:"oj-pagingcontrol-loadmore-range", $_PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS$:"oj-pagingcontrol-loadmore-range-current", 
    $_PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS$:"oj-pagingcontrol-loadmore-range-max", $_PAGING_CONTROL_NAV_CLASS$:"oj-pagingcontrol-nav", $_PAGING_CONTROL_NAV_ARROW_CLASS$:"oj-pagingcontrol-nav-arrow", $_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$:"oj-pagingcontrol-nav-arrow-section", $_PAGING_CONTROL_NAV_PAGE_CLASS$:"oj-pagingcontrol-nav-page", $_PAGING_CONTROL_NAV_PAGE_ELLIPSIS_CLASS$:"oj-pagingcontrol-nav-page-ellipsis", $_PAGING_CONTROL_NAV_DOT_CLASS$:"oj-pagingcontrol-nav-dot", $_PAGING_CONTROL_NAV_DOT_BULLET_CLASS$:"oj-pagingcontrol-nav-dot-bullet", 
    $_PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-page-acc-label", $_PAGING_CONTROL_NAV_LABEL_CLASS$:"oj-pagingcontrol-nav-label", $_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$:"oj-pagingcontrol-nav-input-section", $_PAGING_CONTROL_NAV_INPUT_CLASS$:"oj-pagingcontrol-nav-input", $_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$:"oj-pagingcontrol-nav-input-max", $_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$:"oj-pagingcontrol-nav-input-summary", $_PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS$:"oj-pagingcontrol-nav-input-summary-current", 
    $_PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS$:"oj-pagingcontrol-nav-input-summary-max", $_PAGING_CONTROL_NAV_PAGES_SECTION_CLASS$:"oj-pagingcontrol-nav-pages-section", $_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$:"oj-pagingcontrol-nav-pages-links", $_PAGING_CONTROL_NAV_FIRST_CLASS$:"oj-pagingcontrol-nav-first", $_PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-first-acc-label", $_PAGING_CONTROL_NAV_PREVIOUS_CLASS$:"oj-pagingcontrol-nav-previous", $_PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-previous-acc-label", 
    $_PAGING_CONTROL_NAV_NEXT_CLASS$:"oj-pagingcontrol-nav-next", $_PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-next-acc-label", $_PAGING_CONTROL_NAV_LAST_CLASS$:"oj-pagingcontrol-nav-last", $_PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-last-acc-label", $_PAGING_CONTROL_NAV_FIRST_ICON_CLASS$:"oj-pagingcontrol-nav-first-icon", $_PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS$:"oj-pagingcontrol-nav-previous-icon", $_PAGING_CONTROL_NAV_NEXT_ICON_CLASS$:"oj-pagingcontrol-nav-next-icon", 
    $_PAGING_CONTROL_NAV_LAST_ICON_CLASS$:"oj-pagingcontrol-nav-last-icon", $_PAGING_CONTROL_NAV_FIRST_VERTICAL_ICON_CLASS$:"oj-pagingcontrol-nav-first-vertical-icon", $_PAGING_CONTROL_NAV_PREVIOUS_VERTICAL_ICON_CLASS$:"oj-pagingcontrol-nav-previous-vertical-icon", $_PAGING_CONTROL_NAV_NEXT_VERTICAL_ICON_CLASS$:"oj-pagingcontrol-nav-next-vertical-icon", $_PAGING_CONTROL_NAV_LAST_VERTICAL_ICON_CLASS$:"oj-pagingcontrol-nav-last-vertical-icon", $_WIDGET_ICON_CLASS$:"oj-component-icon", $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"}, 
    $_DATA_ATTR_PAGE_NUM$:"data-oj-pagenum", $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_TAB_INDEX$:"tabindex", $_MODE$:{$_LOAD_MORE$:"loadMore", $_PAGE$:"page"}, $_PAGE_OPTION_LAYOUT$:{$_AUTO$:"auto", $_ALL$:"all", $_INPUT$:"input", $_RANGE_TEXT$:"rangeText", $_PAGES$:"pages", $_NAV$:"nav"}, $_PAGE_OPTION_DEFAULT_MAX_PAGE_LINKS$:6, $_TYPE$:{$_NUMBERS$:"numbers", $_DOTS$:"dots"}, firstPage:function() {
      return null != this.$_getData$() ? this.$_invokeDataPage$(0, !1) : this.$_getRejectPromise$();
    }, previousPage:function() {
      if (null != this.$_getData$()) {
        var $page$$ = this.$_getCurrentPage$();
        if (0 < $page$$) {
          return this.$_invokeDataPage$($page$$ - 1, !1);
        }
      }
      return this.$_getRejectPromise$();
    }, nextPage:function() {
      if (null != this.$_getData$()) {
        var $page$$1$$ = this.$_getCurrentPage$();
        if ($page$$1$$ + 1 <= this.$_getTotalPages$() - 1 || 0 > this.$_getTotalPages$()) {
          return this.$_invokeDataPage$($page$$1$$ + 1, !1);
        }
      }
      return this.$_getRejectPromise$();
    }, lastPage:function() {
      return null != this.$_getData$() && 0 < this.$_getTotalPages$() ? this.$_invokeDataPage$(this.$_getTotalPages$() - 1, !1) : this.$_getRejectPromise$();
    }, page:function($page$$2$$) {
      return null != this.$_getData$() && (this.$_isTotalSizeConfidenceActual$() && $page$$2$$ <= this.$_getTotalPages$() - 1 || 0 > this.$_getTotalPages$() || !this.$_isTotalSizeConfidenceActual$()) ? this.$_invokeDataPage$($page$$2$$, !1) : this.$_getRejectPromise$();
    }, loadNext:function() {
      return null != this.$_getData$() ? this.$_invokeDataFetchNext$() : this.$_getRejectPromise$();
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, getNodeBySubId:function($index$$96_locator$$10$$) {
      if (null == $index$$96_locator$$10$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$5$$ = $index$$96_locator$$10$$.subId, $retval$$ = null;
      "oj-pagingcontrol-nav-input" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$)[0] : "oj-pagingcontrol-nav-input-max" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$)[0] : "oj-pagingcontrol-nav-input-summary" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$)[0] : 
      "oj-pagingcontrol-nav-input-summary-current" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS$)[0] : "oj-pagingcontrol-nav-input-summary-max" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS$)[0] : "oj-pagingcontrol-nav-first" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$)[0] : 
      "oj-pagingcontrol-nav-next" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$)[0] : "oj-pagingcontrol-nav-previous" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$)[0] : "oj-pagingcontrol-nav-last" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$)[0] : 
      "oj-pagingcontrol-nav-page" === $subId$$5$$ ? ($index$$96_locator$$10$$ = $index$$96_locator$$10$$.index, $retval$$ = this.$_getPagingControlContainer$().find("[" + this.$_DATA_ATTR_PAGE_NUM$ + "\x3d" + $index$$96_locator$$10$$ + "]")[0]) : "oj-pagingcontrol-load-more-link" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$)[0] : "oj-pagingcontrol-load-more-range" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + 
      this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$)[0] : "oj-pagingcontrol-load-more-range-current" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS$)[0] : "oj-pagingcontrol-load-more-range-max" === $subId$$5$$ ? $retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS$)[0] : "oj-pagingcontrol-load-more-max-rows" === $subId$$5$$ && 
      ($retval$$ = this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS$)[0]);
      void 0 === $retval$$ && ($retval$$ = null);
      return $retval$$;
    }, getSubIdByNode:function($node$$29$$) {
      return $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$) ? {subId:"oj-pagingcontrol-nav-input"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$) ? {subId:"oj-pagingcontrol-nav-input-max"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$) ? {subId:"oj-pagingcontrol-nav-input-summary"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS$) ? 
      {subId:"oj-pagingcontrol-nav-input-summary-current"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS$) ? {subId:"oj-pagingcontrol-nav-input-summary-max"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$) ? {subId:"oj-pagingcontrol-nav-first"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$) ? {subId:"oj-pagingcontrol-nav-next"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$) ? 
      {subId:"oj-pagingcontrol-nav-previous"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$) ? {subId:"oj-pagingcontrol-nav-last"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_CLASS$) ? {subId:"oj-pagingcontrol-nav-page", index:$$$$10$$($node$$29$$).attr(this.$_DATA_ATTR_PAGE_NUM$)} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$) ? {subId:"oj-pagingcontrol-load-more-link"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$) ? 
      {subId:"oj-pagingcontrol-load-more-range"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS$) ? {subId:"oj-pagingcontrol-load-more-range-current"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS$) ? {subId:"oj-pagingcontrol-load-more-range-max"} : $$$$10$$($node$$29$$).hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS$) ? {subId:"oj-pagingcontrol-load-more-max-rows"} : null;
    }, _ComponentCreate:function() {
      this._super();
      this.$_registerDataSourceEventListeners$();
      this.$_draw$();
      this.$_registerResizeListener$(this.$_getPagingControlContainer$());
      this._on(this.$_events$);
    }, $_AfterCreate$:function() {
      this._super();
      this.$_registerSwipeHandler$();
      this.$_setInitialPage$();
    }, _destroy:function() {
      this.$_unregisterDataSourceEventListeners$();
      this.$_unregisterSwipeHandler$();
      this.$_componentDestroyed$ = !0;
    }, $_draw$:function() {
      var $options$$217$$ = this.options;
      this.element.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_CLASS$);
      this.element.addClass(this.$_MARKER_STYLE_CLASSES$.$_WIDGET$);
      this.$_createPagingControlAccLabel$();
      this.$_createPagingControlContent$();
      this.$_mode$ = $options$$217$$.mode;
      $options$$217$$.mode == this.$_MODE$.$_LOAD_MORE$ ? (this.$_createPagingControlLoadMore$(), this.$_createPagingControlLoadMoreLink$(), this.$_createPagingControlLoadMoreRange$()) : this.$_createPagingControlNav$();
    }, $_events$:{"mouseup .oj-pagingcontrol-loadmore-link":function($event$$71$$) {
      this.loadNext();
      $$$$10$$($event$$71$$.target).data("_mouseup", !0);
      $event$$71$$.preventDefault();
    }, "click .oj-pagingcontrol-loadmore-link":function($event$$72$$) {
      $$$$10$$($event$$72$$.target).data("_mouseup") ? $$$$10$$($event$$72$$.target).data("_mouseup", !1) : this.loadNext();
      $event$$72$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-dot":function($event$$73$$) {
      if (!$$$$10$$($event$$73$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$)) {
        var $pageNum$$ = $$$$10$$($event$$73$$.currentTarget).attr("data-oj-pagenum"), $self$$53$$ = this;
        this.page($pageNum$$).then(function() {
        }, function($err$$8$$) {
          var $errSummary$$1$$ = $self$$53$$.$getTranslatedString$($self$$53$$.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_SUMMARY$);
          $oj$$10$$.$Logger$.error($errSummary$$1$$ + "\n" + $err$$8$$);
        });
      }
      $event$$73$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-page":function($event$$74$$) {
      if (!$$$$10$$($event$$74$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$)) {
        var $pageNum$$1$$ = $$$$10$$($event$$74$$.currentTarget).attr("data-oj-pagenum"), $self$$54$$ = this;
        this.page($pageNum$$1$$).then(function() {
        }, function($err$$9$$) {
          var $errSummary$$2$$ = $self$$54$$.$getTranslatedString$($self$$54$$.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_SUMMARY$);
          $oj$$10$$.$Logger$.error($errSummary$$2$$ + "\n" + $err$$9$$);
        });
      }
      $event$$74$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-first":function($event$$75$$) {
      if (!$$$$10$$($event$$75$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$)) {
        var $self$$55$$ = this;
        this.firstPage().then(function() {
        }, function($err$$10$$) {
          var $errSummary$$3$$ = $self$$55$$.$getTranslatedString$($self$$55$$.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_SUMMARY$);
          $oj$$10$$.$Logger$.error($errSummary$$3$$ + "\n" + $err$$10$$);
        });
      }
      $event$$75$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-previous":function($event$$76$$) {
      if (!$$$$10$$($event$$76$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$)) {
        var $self$$56$$ = this;
        this.previousPage().then(function() {
        }, function($err$$11$$) {
          var $errSummary$$4$$ = $self$$56$$.$getTranslatedString$($self$$56$$.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_SUMMARY$);
          $oj$$10$$.$Logger$.error($errSummary$$4$$ + "\n" + $err$$11$$);
        });
      }
      $event$$76$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-next":function($event$$77$$) {
      if (!$$$$10$$($event$$77$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$)) {
        var $self$$57$$ = this;
        this.nextPage().then(function() {
        }, function($err$$12$$) {
          var $errSummary$$5$$ = $self$$57$$.$getTranslatedString$($self$$57$$.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_SUMMARY$);
          $oj$$10$$.$Logger$.error($errSummary$$5$$ + "\n" + $err$$12$$);
        });
      }
      $event$$77$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-last":function($event$$78$$) {
      if (!$$$$10$$($event$$78$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$)) {
        var $self$$58$$ = this;
        this.lastPage().then(function() {
        }, function($err$$13$$) {
          var $errSummary$$6$$ = $self$$58$$.$getTranslatedString$($self$$58$$.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_SUMMARY$);
          $oj$$10$$.$Logger$.error($errSummary$$6$$ + "\n" + $err$$13$$);
        });
      }
      $event$$78$$.preventDefault();
    }, "keypress .oj-pagingcontrol-nav-input":function($event$$79$$) {
      13 == $event$$79$$.which && $event$$79$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-first":function($event$$80$$) {
      $$$$10$$($event$$80$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || $$$$10$$($event$$80$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$80$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-previous":function($event$$81$$) {
      $$$$10$$($event$$81$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || $$$$10$$($event$$81$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$81$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-next":function($event$$82$$) {
      $$$$10$$($event$$82$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || $$$$10$$($event$$82$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$82$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-last":function($event$$83$$) {
      $$$$10$$($event$$83$$.currentTarget).hasClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$) || $$$$10$$($event$$83$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$83$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-first":function($event$$84$$) {
      $$$$10$$($event$$84$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$84$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-previous":function($event$$85$$) {
      $$$$10$$($event$$85$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$85$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-next":function($event$$86$$) {
      $$$$10$$($event$$86$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$86$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-last":function($event$$87$$) {
      $$$$10$$($event$$87$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$87$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-first":function($event$$88$$) {
      $$$$10$$($event$$88$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$88$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-previous":function($event$$89$$) {
      $$$$10$$($event$$89$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$89$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-next":function($event$$90$$) {
      $$$$10$$($event$$90$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$90$$.preventDefault();
    }, "mouseleave .oj-pagingcontrol-nav-last":function($event$$91$$) {
      $$$$10$$($event$$91$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$91$$.preventDefault();
    }}, $_refresh$:function() {
      this.$_data$ != this.options.data && (this.$_clearCachedDataMetadata$(), this.$_setInitialPage$());
      var $size$$11$$ = 0, $startIndex$$2$$ = 0;
      null != this.$_data$ && ($startIndex$$2$$ = this.$_data$.getStartItemIndex());
      null != this.$_data$ && 0 != this.$_data$.totalSize() && 0 <= this.$_data$.getEndItemIndex() && ($size$$11$$ = this.$_data$.getEndItemIndex() - $startIndex$$2$$ + 1);
      if (this.$_mode$ != this.options.mode) {
        this.$_mode$ = this.options.mode, this.options.mode == this.$_MODE$.$_LOAD_MORE$ ? this.$_refreshPagingControlLoadMore$($size$$11$$, $startIndex$$2$$) : this.$_refreshPagingControlNav$($size$$11$$, $startIndex$$2$$);
      } else {
        if (this.options.mode == this.$_MODE$.$_LOAD_MORE$) {
          var $data$$64$$ = this.$_getData$(), $pagingControlLoadMore$$ = this.$_getPagingControlLoadMore$();
          null != $data$$64$$ && ($startIndex$$2$$ + $size$$11$$ == $data$$64$$.totalSize() && this.$_isTotalSizeConfidenceActual$() || 0 == $data$$64$$.totalSize()) ? $pagingControlLoadMore$$.css("display", "none") : this.$_refreshPagingControlLoadMore$($size$$11$$, $startIndex$$2$$);
        } else {
          this.$_refreshPagingControlNav$($size$$11$$, $startIndex$$2$$);
        }
      }
    }, _setOption:function($key$$47$$, $value$$187$$) {
      this._superApply(arguments);
      this.$_invokeDataPage$(0, !0);
      if (this.options.mode != this.$_MODE$.$_LOAD_MORE$ && "pageOptions" == $key$$47$$) {
        var $pagingControlContent$$ = this.$_getPagingControlContent$();
        null != $pagingControlContent$$ && (this.$_unregisterChildStateListeners$($pagingControlContent$$), this.$_unregisterSwipeHandler$(), $pagingControlContent$$.empty());
        this.$_clearCachedDomPagingControlNav$();
        this.$_createPagingControlNav$();
        this.$_registerSwipeHandler$();
      }
      this.$_refresh$();
    }, $_clearCachedDataMetadata$:function() {
      null != this.$_data$ && this.$_unregisterDataSourceEventListeners$();
      this.$_data$ = null;
    }, $_clearCachedDomLoadMore$:function() {
      this.$_cachedDomPagingControlLoadMoreRange$ = this.$_cachedDomPagingControlLoadMoreLink$ = this.$_cachedDomPagingControlLoadMore$ = null;
    }, $_clearCachedDomPagingControlNav$:function() {
      this.$_cachedDomPagingControlNavInputSummary$ = this.$_cachedDomPagingControlNavInput$ = this.$_cachedDomPagingControlNav$ = null;
    }, $_getCurrentPage$:function() {
      var $data$$65$$ = this.$_getData$(), $page$$3$$ = 0;
      null != $data$$65$$ && ($page$$3$$ = $data$$65$$.getPage());
      return $page$$3$$;
    }, $_getData$:function() {
      this.$_data$ || null == this.options.data || (this.$_data$ = this.options.data, this.$_registerDataSourceEventListeners$());
      return this.$_data$;
    }, $_getItemRange$:function($size$$12$$, $startIndex$$3$$) {
      var $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ = 0 <= $startIndex$$3$$ ? $startIndex$$3$$ : 0, $itemRangeSpan$$ = $$$$10$$(document.createElement("span")), $itemRangeCurrentSpan$$ = $$$$10$$(document.createElement("span"));
      this.options.mode == this.$_MODE$.$_LOAD_MORE$ ? $itemRangeCurrentSpan$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS$) : $itemRangeCurrentSpan$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS$);
      $itemRangeSpan$$.append($itemRangeCurrentSpan$$);
      var $data$$66_itemRangeItemsText$$ = this.$_getData$();
      if (null != $data$$66_itemRangeItemsText$$ && null != $data$$66_itemRangeItemsText$$.totalSize() && null != $size$$12$$) {
        var $itemRangeCurrentText_pageTo$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_CURRENT_SINGLE$, {pageFrom:$itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$}), $itemRangeCurrentText_pageTo$$ = parseInt($startIndex$$3$$, 10) + parseInt($size$$12$$, 10), $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ = 0 < $itemRangeCurrentText_pageTo$$ ? $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ + 1 : 0;
        if (-1 != $data$$66_itemRangeItemsText$$.totalSize()) {
          var $itemRangeCurrentText_pageTo$$ = $itemRangeCurrentText_pageTo$$ > $data$$66_itemRangeItemsText$$.totalSize() ? $data$$66_itemRangeItemsText$$.totalSize() : $itemRangeCurrentText_pageTo$$, $itemRangeCurrentText_pageTo$$ = $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ == $itemRangeCurrentText_pageTo$$ ? this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_CURRENT_SINGLE$, {pageFrom:$itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$}) : this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_CURRENT$, 
          {pageFrom:$itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$, pageTo:$itemRangeCurrentText_pageTo$$}), $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_OF$), $itemRangeConf$$ = null;
          "atLeast" == $data$$66_itemRangeItemsText$$.totalSizeConfidence() ? $itemRangeConf$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_ATLEAST$) : "estimate" == $data$$66_itemRangeItemsText$$.totalSizeConfidence() && ($itemRangeConf$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_APPROX$));
          var $itemRangeOfSpan$$ = $$$$10$$(document.createElement("span"));
          null == $itemRangeConf$$ ? $itemRangeOfSpan$$.text(" " + $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ + " ") : $itemRangeOfSpan$$.text(" " + $itemRangeConf$$ + " ");
          $itemRangeSpan$$.append($itemRangeOfSpan$$);
          $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ = $$$$10$$(document.createElement("span"));
          this.options.mode == this.$_MODE$.$_LOAD_MORE$ ? $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS$) : $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS$);
          $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$.text($data$$66_itemRangeItemsText$$.totalSize());
          $itemRangeSpan$$.append($itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$);
        } else {
          $itemRangeCurrentText_pageTo$$ = 0 == $size$$12$$ ? this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_CURRENT_SINGLE$, {pageFrom:0}) : this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_CURRENT$, {pageFrom:$itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$, pageTo:$itemRangeCurrentText_pageTo$$});
        }
        $data$$66_itemRangeItemsText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_ITEMS$);
        $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$ = $$$$10$$(document.createElement("span"));
        $itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$.text(" " + $data$$66_itemRangeItemsText$$);
        $itemRangeSpan$$.append($itemRangeItemsSpan_itemRangeMaxSpan_itemRangeOfText_pageFrom$$);
        $itemRangeCurrentSpan$$.text($itemRangeCurrentText_pageTo$$);
      }
      return $itemRangeSpan$$;
    }, $_getMaxPageLinks$:function() {
      var $maxPageLinks$$ = this.options.pageOptions.maxPageLinks;
      this.options.pageOptions.type == this.$_TYPE$.$_DOTS$ ? $maxPageLinks$$ = Number.MAX_VALUE : $maxPageLinks$$ || ($maxPageLinks$$ = this.$_PAGE_OPTION_DEFAULT_MAX_PAGE_LINKS$);
      return $maxPageLinks$$;
    }, $_getMaxPageVal$:function($data$$67_size$$13$$) {
      var $maxPageVal$$ = 0;
      0 < this.$_getTotalPages$() && this.$_isTotalSizeConfidenceActual$() ? $maxPageVal$$ = this.$_getTotalPages$() : 0 < $data$$67_size$$13$$ ? ($data$$67_size$$13$$ = this.$_getData$(), $maxPageVal$$ = null == $data$$67_size$$13$$ || "atLeast" != $data$$67_size$$13$$.totalSizeConfidence() && "estimate" != $data$$67_size$$13$$.totalSizeConfidence() ? this.$_getCurrentPage$() + 2 : this.$_getTotalPages$() + 1) : $maxPageVal$$ = this.$_getCurrentPage$() + 1;
      return $maxPageVal$$;
    }, $_getRejectPromise$:function() {
      return Promise.reject();
    }, $_getTotalPages$:function() {
      var $data$$68$$ = this.$_getData$(), $pageCount$$ = 0;
      null != $data$$68$$ && ($pageCount$$ = $data$$68$$.getPageCount());
      return-1 <= $pageCount$$ ? $pageCount$$ : 0;
    }, $_handleDataFetchEnd$:function() {
      var $activeElement$$ = $$$$10$$(document.activeElement);
      if ($activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_CLASS$)) {
        var $pageNum$$2$$ = $activeElement$$.attr("data-oj-pagenum"), $self$$59$$ = this;
        setTimeout(function() {
          0 <= $pageNum$$2$$ && $self$$59$$.$_getPagingControlContent$().find("div[data-oj-pagenum\x3d" + $pageNum$$2$$ + "]").focus();
        }, 100);
      } else {
        $activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$) ? ($self$$59$$ = this, setTimeout(function() {
          $self$$59$$.$_getPagingControlContent$().find("." + $self$$59$$.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$).focus();
        }, 100)) : $activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$) ? ($self$$59$$ = this, setTimeout(function() {
          $self$$59$$.$_getPagingControlContent$().find("." + $self$$59$$.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$).focus();
        }, 100)) : $activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$) ? ($self$$59$$ = this, setTimeout(function() {
          $self$$59$$.$_getPagingControlContent$().find("." + $self$$59$$.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$).focus();
        }, 100)) : $activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$) ? ($self$$59$$ = this, setTimeout(function() {
          $self$$59$$.$_getPagingControlContent$().find("." + $self$$59$$.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$).focus();
        }, 100)) : $activeElement$$.hasClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$) && ($self$$59$$ = this, setTimeout(function() {
          $self$$59$$.$_getPagingControlContent$().find("." + $self$$59$$.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$).focus();
        }, 100));
      }
      this.$_queueRefresh$();
    }, $_handleDataPage$:function($event$$93$$) {
      $event$$93$$.page != $event$$93$$.previousPage && this.$_queueRefresh$();
    }, $_handleDataReset$:function() {
      this.$_invokeDataPage$(0, !1);
    }, $_handleDataRefresh$:function() {
      this.$_queueRefresh$();
    }, $_handleDataSort$:function($event$$96$$) {
      this.options.mode == this.$_MODE$.$_LOAD_MORE$ && this.$_handleDataReset$($event$$96$$);
    }, $_handleDataRowAdd$:function($event$$97$$) {
      this.options.mode == this.$_MODE$.$_PAGE$ && this.$_isOperationOnCurrentPage$($event$$97$$) ? this.$_invokeDataPage$(this.$_getCurrentPage$(), !0) : this.$_queueRefresh$();
    }, $_handleDataRowRemove$:function($event$$98$$) {
      0 < this.$_getTotalPages$() && this.$_getCurrentPage$() > this.$_getTotalPages$() - 1 ? this.$_invokeDataPage$(this.$_getTotalPages$() - 1, !0) : this.$_isOperationOnCurrentPage$($event$$98$$) ? this.$_invokeDataPage$(this.$_getCurrentPage$(), !0) : this.$_queueRefresh$();
    }, $_handlePageChange$:function($event$$99$$, $data$$69$$) {
      var $page$$5$$ = $data$$69$$.value;
      if ($page$$5$$ != this.$_getCurrentPage$() + 1 && !isNaN($page$$5$$) && 0 < $page$$5$$) {
        var $page$$5$$ = Math.round($page$$5$$), $self$$60$$ = this;
        this.page($page$$5$$ - 1).then(function() {
        }, function($err$$14$$) {
          var $errSummary$$7$$ = $self$$60$$.$getTranslatedString$($self$$60$$.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_SUMMARY$);
          $oj$$10$$.$Logger$.error($errSummary$$7$$ + "\n" + $err$$14$$);
        });
      }
    }, $_invokeDataPage$:function($page$$6$$, $async$$) {
      try {
        $page$$6$$ = parseInt($page$$6$$, 10);
      } catch ($e$$50$$) {
        return Promise.reject($e$$50$$);
      }
      this.$_currentStartIndex$ = 0;
      if ($async$$) {
        return this.$_queuePageFetch$($page$$6$$), Promise.resolve();
      }
      var $data$$70$$ = this.$_getData$(), $self$$61$$ = this;
      return new Promise(function($resolve$$24$$, $reject$$24$$) {
        null != $data$$70$$ ? $data$$70$$.setPage($page$$6$$, {pageSize:$self$$61$$.options.pageSize}).then(function() {
          $resolve$$24$$(null);
        }, function($error$$24$$) {
          $reject$$24$$($error$$24$$);
        }) : $resolve$$24$$(null);
      });
    }, $_invokeDataFetchNext$:function() {
      var $data$$71$$ = this.$_getData$(), $pageSize$$ = this.options.pageSize;
      this.$_currentStartIndex$ = this.$_currentStartIndex$ ? this.$_currentStartIndex$ + $pageSize$$ : $pageSize$$;
      if (!this.$_isTotalSizeConfidenceActual$() || $data$$71$$.totalSize() > this.$_currentStartIndex$ && this.$_isTotalSizeConfidenceActual$()) {
        var $self$$62$$ = this;
        return new Promise(function($resolve$$25$$, $reject$$25$$) {
          $data$$71$$.fetch({startIndex:$self$$62$$.$_currentStartIndex$, pageSize:$pageSize$$}).then(function($result$$28$$) {
            $resolve$$25$$($result$$28$$);
          }, function() {
            $reject$$25$$(null);
          });
        });
      }
      return Promise.resolve();
    }, $_isOperationOnCurrentPage$:function($event$$100$$) {
      if (null == $event$$100$$) {
        return!1;
      }
      var $data$$72_startIndex$$4$$ = this.$_getData$(), $endIndex_pageSize$$1$$ = this.options.pageSize, $data$$72_startIndex$$4$$ = $data$$72_startIndex$$4$$.getStartItemIndex(), $endIndex_pageSize$$1$$ = $data$$72_startIndex$$4$$ + $endIndex_pageSize$$1$$, $rowIdx$$;
      if (null != $event$$100$$.index) {
        if ($rowIdx$$ = $event$$100$$.index, this.options.mode == this.$_MODE$.$_LOAD_MORE$ && ($data$$72_startIndex$$4$$ = 0), $rowIdx$$ >= $data$$72_startIndex$$4$$ && $rowIdx$$ < $endIndex_pageSize$$1$$) {
          return!0;
        }
      } else {
        if (null != $event$$100$$.indexes) {
          var $i$$135$$;
          for ($i$$135$$ = 0;$i$$135$$ < $event$$100$$.indexes.length;$i$$135$$++) {
            if ($rowIdx$$ = $event$$100$$.indexes[$i$$135$$], this.options.mode == this.$_MODE$.$_LOAD_MORE$ && ($data$$72_startIndex$$4$$ = 0), $rowIdx$$ >= $data$$72_startIndex$$4$$ && $rowIdx$$ < $endIndex_pageSize$$1$$) {
              return!0;
            }
          }
        }
      }
      return!1;
    }, $_isTotalSizeConfidenceActual$:function() {
      var $data$$73$$ = this.$_getData$();
      return null != $data$$73$$ && "actual" == $data$$73$$.totalSizeConfidence() ? !0 : !1;
    }, $_queuePageFetch$:function($page$$7$$) {
      var $self$$63$$ = this;
      this.$_pendingPageFetch$ || (this.$_pageFetchCount$ = 0, this.$_pendingPageFetch$ = Promise.resolve());
      this.$_pageFetchCount$++;
      this.$_pageFetchLatestPage$ = $page$$7$$;
      this.$_pendingPageFetch$ = this.$_pendingPageFetch$.then(function() {
        $self$$63$$.$_pageFetchCount$--;
        if (0 == $self$$63$$.$_pageFetchCount$ && !$self$$63$$.$_componentDestroyed$) {
          $self$$63$$.$_pendingPageFetch$ = void 0;
          var $data$$74$$ = $self$$63$$.$_getData$();
          null != $data$$74$$ && $data$$74$$.setPage($self$$63$$.$_pageFetchLatestPage$, {pageSize:$self$$63$$.options.pageSize}).then(function() {
          }, function($error$$26$$) {
            $self$$63$$.$_pageFetchCount$--;
            0 >= $self$$63$$.$_pageFetchCount$ && ($self$$63$$.$_pendingPageFetch$ = void 0, $oj$$10$$.$Logger$.error($error$$26$$));
          });
        }
      }, function($error$$27$$) {
        $self$$63$$.$_pageFetchCount$--;
        0 >= $self$$63$$.$_pageFetchCount$ && ($self$$63$$.$_pendingPageFetch$ = void 0, $oj$$10$$.$Logger$.error($error$$27$$));
      });
    }, $_queueRefresh$:function() {
      var $self$$64$$ = this;
      this.$_pendingRefreshes$ || (this.$_refreshCount$ = 0, this.$_pendingRefreshes$ = Promise.resolve());
      this.$_refreshCount$++;
      this.$_pendingRefreshes$ = this.$_pendingRefreshes$.then(function() {
        $self$$64$$.$_refreshCount$--;
        0 != $self$$64$$.$_refreshCount$ || $self$$64$$.$_componentDestroyed$ || ($self$$64$$.$_pendingRefreshes$ = void 0, $self$$64$$.$_refresh$(), $self$$64$$._trigger("ready"));
      }, function($error$$28$$) {
        $self$$64$$.$_refreshCount$--;
        0 == $self$$64$$.$_refreshCount$ && ($self$$64$$.$_pendingRefreshes$ = void 0, $oj$$10$$.$Logger$.error($error$$28$$));
      });
    }, $_refreshPagingControlLoadMore$:function($size$$14$$, $startIndex$$5$$) {
      var $pagingControlContent$$1_rowCount$$1$$ = this.$_getPagingControlContent$();
      null != $pagingControlContent$$1_rowCount$$1$$ && $pagingControlContent$$1_rowCount$$1$$.empty();
      this.$_clearCachedDomLoadMore$();
      this.$_createPagingControlLoadMore$();
      $pagingControlContent$$1_rowCount$$1$$ = -1;
      null != $size$$14$$ && ($pagingControlContent$$1_rowCount$$1$$ = $startIndex$$5$$ + $size$$14$$);
      0 > $pagingControlContent$$1_rowCount$$1$$ || $pagingControlContent$$1_rowCount$$1$$ < this.options.loadMoreOptions.maxCount ? (this.$_createPagingControlLoadMoreLink$(), this.$_createPagingControlLoadMoreRange$($size$$14$$, $startIndex$$5$$)) : this.$_createPagingControlLoadMoreMaxRows$();
    }, $_refreshPagingControlNav$:function($size$$15$$, $startIndex$$6$$) {
      var $elementWidth_overflowOption$$ = this.options.overflow;
      this.$_refreshPagingControlNavMaxPageVal$($size$$15$$, $startIndex$$6$$);
      this.$_refreshPagingControlNavLabel$();
      this.$_refreshPagingControlNavInput$();
      this.$_refreshPagingControlNavSummaryLabel$($size$$15$$, $startIndex$$6$$);
      this.$_refreshPagingControlNavPages$($size$$15$$, $startIndex$$6$$);
      this.$_refreshPagingControlNavArrows$($size$$15$$, $startIndex$$6$$);
      if ("fit" == $elementWidth_overflowOption$$) {
        var $elementWidth_overflowOption$$ = this.element.width(), $pagingControlNavArrowSection$$ = this.$_getPagingControlNavArrowSection$(), $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ = this.$_getPagingControlNavInputSection$(), $pagingControlNavPageLinks$$ = this.$_getPagingControlNavPageLinks$(), $pagingControlNavInputSummary$$ = this.$_getPagingControlNavInputSummary$(), $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ = null != $pagingControlNavArrowSection$$ ? 
        $pagingControlNavArrowSection$$[0].offsetWidth : 0, $pagingControlNavInputSectionWidth$$ = null != $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ ? $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$[0].offsetWidth : 0, $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ = null != $pagingControlNavPageLinks$$ ? $pagingControlNavPageLinks$$.width() : 0, $pagingControlNavInputSummaryWidth$$ = null != $pagingControlNavInputSummary$$ ? $pagingControlNavInputSummary$$.width() : 
        0, $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ = $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ + $pagingControlNavInputSectionWidth$$ + $pagingControlNavInputSummaryWidth$$;
        $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ > $elementWidth_overflowOption$$ ? $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ - $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ <= $elementWidth_overflowOption$$ ? $pagingControlNavPageLinks$$.css("display", "none") : $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ - $pagingControlNavInputSection_pagingControlNavPageLinksWidth$$ - $pagingControlNavInputSummaryWidth$$ <= $elementWidth_overflowOption$$ ? 
        (null != $pagingControlNavPageLinks$$ && $pagingControlNavPageLinks$$.css("display", "none"), null != $pagingControlNavInputSummary$$ && $pagingControlNavInputSummary$$.css("display", "none")) : (null != $pagingControlNavPageLinks$$ && $pagingControlNavPageLinks$$.css("display", "none"), null != $pagingControlNavInputSummary$$ && $pagingControlNavInputSummary$$.css("display", "none"), null != $pagingControlNavArrowSection$$ && $pagingControlNavArrowSection$$.css("display", "none")) : 0 < 
        $pagingControlNavArrowSectionWidth_pagingControlNavWidth$$ && (null != $pagingControlNavPageLinks$$ && $pagingControlNavPageLinks$$.css("display", ""), null != $pagingControlNavInputSummary$$ && $pagingControlNavInputSummary$$.css("display", ""), null != $pagingControlNavArrowSection$$ && $pagingControlNavArrowSection$$.css("display", ""));
      }
    }, $_refreshPagingControlNavArrows$:function($size$$16$$) {
      var $pageSize$$2$$ = this.options.pageSize, $pagingControlNavArrowSection$$1_pagingControlNavNext$$ = this.$_getPagingControlNavArrowSection$(), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$);
      if ($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ && 0 < $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length) {
        var $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), $navFirstPageTip_navLastPageTip_navPreviousPageTip$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_FIRST_PAGE$);
        $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("title", $navFirstPageTip_navLastPageTip_navPreviousPageTip$$);
        0 == this.$_getCurrentPage$() ? ($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "-1")) : ($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), 
        $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr(this.$_TAB_INDEX$, "0"));
      }
      ($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$)) && 0 < $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), 
      $navFirstPageTip_navLastPageTip_navPreviousPageTip$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_PREVIOUS_PAGE$), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("title", $navFirstPageTip_navLastPageTip_navPreviousPageTip$$), 0 == this.$_getCurrentPage$() ? ($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), 
      $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr(this.$_TAB_INDEX$, "-1")) : ($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr(this.$_TAB_INDEX$, 
      "0")));
      ($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$)) && 0 < $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), 
      $navFirstPageTip_navLastPageTip_navPreviousPageTip$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_LAST_PAGE$), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("title", $navFirstPageTip_navLastPageTip_navPreviousPageTip$$), this.$_getCurrentPage$() == this.$_getTotalPages$() - 1 || 0 >= this.$_getTotalPages$() || !this.$_isTotalSizeConfidenceActual$() ? ($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr(this.$_TAB_INDEX$, "-1")) : ($navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr(this.$_TAB_INDEX$, "0")));
      ($pagingControlNavArrowSection$$1_pagingControlNavNext$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$)) && 0 < $pagingControlNavArrowSection$$1_pagingControlNavNext$$.length && ($pagingControlNavArrowSection$$1_pagingControlNavNext$$ = $$$$10$$($pagingControlNavArrowSection$$1_pagingControlNavNext$$[0]), $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_NEXT_PAGE$), 
      $pagingControlNavArrowSection$$1_pagingControlNavNext$$.attr("title", $navNextPageTip_pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$), this.$_getCurrentPage$() == this.$_getTotalPages$() - 1 && this.$_isTotalSizeConfidenceActual$() || 0 === this.$_getTotalPages$() || 0 > this.$_getTotalPages$() && 0 === $size$$16$$ || 0 > this.$_getTotalPages$() && $size$$16$$ < $pageSize$$2$$ ? ($pagingControlNavArrowSection$$1_pagingControlNavNext$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $pagingControlNavArrowSection$$1_pagingControlNavNext$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.attr(this.$_TAB_INDEX$, "-1")) : ($pagingControlNavArrowSection$$1_pagingControlNavNext$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.attr(this.$_TAB_INDEX$, 
      "0")));
    }, $_refreshPagingControlNavPages$:function($size$$17$$, $startIndex$$8$$) {
      var $pagingControlNavPagesSection$$ = this.$_getPagingControlNav$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_SECTION_CLASS$);
      null != $pagingControlNavPagesSection$$ && 0 < $pagingControlNavPagesSection$$.length && ($pagingControlNavPagesSection$$ = $$$$10$$($pagingControlNavPagesSection$$.get(0)), $pagingControlNavPagesSection$$.empty(), this.$_createPagingControlNavPages$($pagingControlNavPagesSection$$, this.$_getMaxPageLinks$(), $size$$17$$, $startIndex$$8$$));
    }, $_refreshPagingControlNavLabel$:function() {
      var $pagingControlNavInputSection$$1_pagingControlNavLabel$$ = this.$_getPagingControlNavInputSection$();
      if (null != $pagingControlNavInputSection$$1_pagingControlNavLabel$$ && ($pagingControlNavInputSection$$1_pagingControlNavLabel$$ = $pagingControlNavInputSection$$1_pagingControlNavLabel$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LABEL_CLASS$), null != $pagingControlNavInputSection$$1_pagingControlNavLabel$$ && 0 < $pagingControlNavInputSection$$1_pagingControlNavLabel$$.length)) {
        var $pagingControlNavInputSection$$1_pagingControlNavLabel$$ = $$$$10$$($pagingControlNavInputSection$$1_pagingControlNavLabel$$[0]), $navInputPageLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE$);
        $pagingControlNavInputSection$$1_pagingControlNavLabel$$.text($navInputPageLabel$$);
      }
    }, $_refreshPagingControlNavInput$:function() {
      var $pagingControlNavInput$$ = this.$_getPagingControlNavInput$();
      if (null != $pagingControlNavInput$$) {
        var $navInputPageTip$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_INPUT_PAGE$);
        $pagingControlNavInput$$.attr("title", $navInputPageTip$$);
        $pagingControlNavInput$$.ojInputText("option", "title", $navInputPageTip$$);
      }
    }, $_refreshPagingControlNavSummaryLabel$:function($size$$18$$, $startIndex$$9$$) {
      var $pagingControlNavSummaryLabel$$ = this.$_getPagingControlNav$().children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$);
      if (null != $pagingControlNavSummaryLabel$$ && 0 < $pagingControlNavSummaryLabel$$.length) {
        var $itemRange$$ = this.$_getItemRange$($size$$18$$, $startIndex$$9$$);
        0 < $itemRange$$.text().length && ($pagingControlNavSummaryLabel$$ = $$$$10$$($pagingControlNavSummaryLabel$$.get(0)), $pagingControlNavSummaryLabel$$.empty(), $pagingControlNavSummaryLabel$$.append("("), $pagingControlNavSummaryLabel$$.append($itemRange$$), $pagingControlNavSummaryLabel$$.append(")"));
      }
    }, $_refreshPagingControlNavMaxPageVal$:function($maxPageVal$$1_size$$19$$) {
      $maxPageVal$$1_size$$19$$ = this.$_getMaxPageVal$($maxPageVal$$1_size$$19$$);
      var $pagingControlNavInput$$1_pagingControlNavMaxLabel$$ = this.$_getPagingControlNav$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$);
      if (null != $pagingControlNavInput$$1_pagingControlNavMaxLabel$$ && 0 < $pagingControlNavInput$$1_pagingControlNavMaxLabel$$.length) {
        if ($pagingControlNavInput$$1_pagingControlNavMaxLabel$$ = $$$$10$$($pagingControlNavInput$$1_pagingControlNavMaxLabel$$.get(0)), 0 < this.$_getTotalPages$() && this.$_isTotalSizeConfidenceActual$()) {
          var $navInputPageMaxLabel_pagingControlNavInputSection$$2$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE_MAX$, {pageMax:$maxPageVal$$1_size$$19$$});
          $pagingControlNavInput$$1_pagingControlNavMaxLabel$$.text($navInputPageMaxLabel_pagingControlNavInputSection$$2$$);
        } else {
          $pagingControlNavInput$$1_pagingControlNavMaxLabel$$.empty();
        }
      } else {
        $navInputPageMaxLabel_pagingControlNavInputSection$$2$$ = this.$_getPagingControlNavInputSection$(), null != $navInputPageMaxLabel_pagingControlNavInputSection$$2$$ && 0 < this.$_getTotalPages$() && this.$_isTotalSizeConfidenceActual$() && ($pagingControlNavInput$$1_pagingControlNavMaxLabel$$ = $$$$10$$(document.createElement("span")), $pagingControlNavInput$$1_pagingControlNavMaxLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$), $navInputPageMaxLabel_pagingControlNavInputSection$$2$$.append($pagingControlNavInput$$1_pagingControlNavMaxLabel$$), 
        $navInputPageMaxLabel_pagingControlNavInputSection$$2$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE_MAX$, {pageMax:$maxPageVal$$1_size$$19$$}), $pagingControlNavInput$$1_pagingControlNavMaxLabel$$.text($navInputPageMaxLabel_pagingControlNavInputSection$$2$$));
      }
      $pagingControlNavInput$$1_pagingControlNavMaxLabel$$ = this.$_getPagingControlNav$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$);
      null != $pagingControlNavInput$$1_pagingControlNavMaxLabel$$ && 0 < $pagingControlNavInput$$1_pagingControlNavMaxLabel$$.length && ($pagingControlNavInput$$1_pagingControlNavMaxLabel$$ = $$$$10$$($pagingControlNavInput$$1_pagingControlNavMaxLabel$$.get(0)), $pagingControlNavInput$$1_pagingControlNavMaxLabel$$.val(this.$_getCurrentPage$() + 1), $pagingControlNavInput$$1_pagingControlNavMaxLabel$$.ojInputText("option", "validators", [{type:"numberRange", options:{min:1, max:$maxPageVal$$1_size$$19$$}}]));
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$75$$ = this.$_getData$();
      if (null != $data$$75$$) {
        this.$_unregisterDataSourceEventListeners$();
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingModel$.$EventType$.PAGE, eventHandler:this.$_handleDataPage$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingModel$.$EventType$.PAGECOUNT, eventHandler:this.$_handleDataRefresh$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.ADD, eventHandler:this.$_handleDataRowAdd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.REMOVE, eventHandler:this.$_handleDataRowRemove$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataRefresh$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingTableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataSort$.bind(this)});
        var $i$$136$$, $ev$$;
        for ($i$$136$$ = 0;$i$$136$$ < this.$_dataSourceEventHandlers$.length;$i$$136$$++) {
          ($ev$$ = $data$$75$$.on(this.$_dataSourceEventHandlers$[$i$$136$$].eventType, this.$_dataSourceEventHandlers$[$i$$136$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$136$$].eventHandler = $ev$$);
        }
      }
    }, $_registerResizeListener$:function($element$$70$$) {
      if (!this.$_isResizeListenerAdded$) {
        var $self$$65$$ = this;
        $oj$$10$$.$DomUtils$.$addResizeListener$($element$$70$$[0], function() {
          $self$$65$$.$_queueRefresh$();
        }, 50);
        this.$_isResizeListenerAdded$ = !0;
      }
    }, $_registerSwipeHandler$:function() {
      if ($oj$$10$$.$DomUtils$.$isTouchSupported$() && this.options.mode == this.$_MODE$.$_PAGE$) {
        var $pagingControlNavArrowSection$$2$$ = this.$_getPagingControlNavArrowSection$();
        if (null != $pagingControlNavArrowSection$$2$$) {
          var $self$$66$$ = this;
          if ("vertical" == this.options.pageOptions.orientation) {
            var $options$$218$$ = {recognizers:[[$Hammer$$2$$.Swipe, {direction:$Hammer$$2$$.DIRECTION_VERTICAL}]]};
            this.$_hammerSwipeUp$ = $pagingControlNavArrowSection$$2$$.$ojHammer$($options$$218$$).on("swipeup", function($event$$101$$) {
              $event$$101$$.preventDefault();
              $self$$66$$.nextPage();
            });
            this.$_hammerSwipeDown$ = $pagingControlNavArrowSection$$2$$.$ojHammer$($options$$218$$).on("swipedown", function($event$$102$$) {
              $event$$102$$.preventDefault();
              $self$$66$$.previousPage();
            });
          } else {
            $options$$218$$ = {recognizers:[[$Hammer$$2$$.Swipe, {direction:$Hammer$$2$$.DIRECTION_HORIZONTAL}]]}, this.$_hammerSwipeLeft$ = $pagingControlNavArrowSection$$2$$.$ojHammer$($options$$218$$).on("swipeleft", function($event$$103$$) {
              $event$$103$$.preventDefault();
              $self$$66$$.nextPage();
            }), this.$_hammerSwipeRight$ = $pagingControlNavArrowSection$$2$$.$ojHammer$($options$$218$$).on("swiperight", function($event$$104$$) {
              $event$$104$$.preventDefault();
              $self$$66$$.previousPage();
            });
          }
        }
      }
    }, $_setInitialPage$:function() {
      var $currentPage$$ = this.$_getCurrentPage$();
      0 < $currentPage$$ ? this.$_invokeDataPage$($currentPage$$, !0) : this.$_invokeDataPage$(0, !0);
    }, $_unregisterDataSourceEventListeners$:function() {
      var $data$$76$$ = this.$_getData$();
      if (null != this.$_dataSourceEventHandlers$ && null != $data$$76$$) {
        var $i$$137$$;
        for ($i$$137$$ = 0;$i$$137$$ < this.$_dataSourceEventHandlers$.length;$i$$137$$++) {
          $data$$76$$.off(this.$_dataSourceEventHandlers$[$i$$137$$].eventType, this.$_dataSourceEventHandlers$[$i$$137$$].eventHandler);
        }
      }
    }, $_unregisterChildStateListeners$:function($parent$$8$$) {
      var $self$$67$$ = this;
      $parent$$8$$.find("*").each(function() {
        $self$$67$$.$_UnregisterChildNode$(this);
      });
    }, $_unregisterSwipeHandler$:function() {
      $oj$$10$$.$DomUtils$.$isTouchSupported$() && ("vertical" == this.options.pageOptions.orientation ? (null != this.$_hammerSwipeUp$ && (this.$_hammerSwipeUp$.off("swipeup"), this.$_hammerSwipeUp$ = null), null != this.$_hammerSwipeDown$ && (this.$_hammerSwipeDown$.off("swipedown"), this.$_hammerSwipeDown$ = null)) : (null != this.$_hammerSwipeLeft$ && (this.$_hammerSwipeLeft$.off("swipeleft"), this.$_hammerSwipeLeft$ = null), null != this.$_hammerSwipeRight$ && (this.$_hammerSwipeRight$.off("swiperight"), 
      this.$_hammerSwipeRight$ = null)));
    }, $_createAccLabelSpan$:function($text$$8$$, $className$$5$$) {
      var $accLabel$$ = $$$$10$$(document.createElement("span"));
      $accLabel$$.addClass($className$$5$$);
      $accLabel$$.addClass(this.$_CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      $accLabel$$.text($text$$8$$);
      return $accLabel$$;
    }, $_createPagingControlAccLabel$:function() {
      var $pagingControlContainer$$ = this.$_getPagingControlContainer$(), $pagingControlAccLabel_pagingControlAccLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_PAGING$), $pagingControlAccLabel_pagingControlAccLabelText$$ = this.$_createAccLabelSpan$($pagingControlAccLabel_pagingControlAccLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_ACC_LABEL_CLASS$), $pagingControlAccLabelId$$ = this.element.attr("id") + "_oj_pgCtrl_acc_label";
      $pagingControlAccLabel_pagingControlAccLabelText$$.attr("id", $pagingControlAccLabelId$$);
      $pagingControlContainer$$.append($pagingControlAccLabel_pagingControlAccLabelText$$);
      return $pagingControlAccLabel_pagingControlAccLabelText$$;
    }, $_createPagingControlAccNavPageLabel$:function() {
      var $pagingControlAccNavPageLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavPageLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavFirstLabel$:function() {
      var $pagingControlAccNavFirstLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_FIRST_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavFirstLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavLastLabel$:function() {
      var $pagingControlAccNavLastLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_LAST_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavLastLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavNextLabel$:function() {
      var $pagingControlAccNavNextLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_NEXT_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavNextLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavPreviousLabel$:function() {
      var $pagingControlAccNavPreviousLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_PREVIOUS_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavPreviousLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS$);
    }, $_createPagingControlContent$:function() {
      var $pagingControlContainer$$1$$ = this.$_getPagingControlContainer$(), $pagingControlContent$$2$$ = $$$$10$$(document.createElement("div"));
      $pagingControlContent$$2$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_CONTENT_CLASS$);
      var $pagingControlAccLabelId$$1$$ = this.$_getPagingControlAccLabel$().attr("id");
      $pagingControlContent$$2$$.attr("role", "navigation");
      $pagingControlContent$$2$$.attr("aria-labelledby", $pagingControlAccLabelId$$1$$);
      $pagingControlContainer$$1$$.append($pagingControlContent$$2$$);
      return $pagingControlContent$$2$$;
    }, $_createPagingControlLoadMore$:function() {
      var $pagingControlContent$$3$$ = this.$_getPagingControlContent$(), $pagingControlLoadMore$$1$$ = $$$$10$$(document.createElement("div"));
      $pagingControlLoadMore$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_CLASS$);
      $pagingControlContent$$3$$.append($pagingControlLoadMore$$1$$);
      return $pagingControlLoadMore$$1$$;
    }, $_createPagingControlLoadMoreLink$:function() {
      var $pagingControlLoadMore$$2$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreLink$$ = $$$$10$$(document.createElement("a"));
      $pagingControlLoadMoreLink$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$);
      var $loadMoreText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_LOAD_MORE$);
      $pagingControlLoadMoreLink$$.text($loadMoreText$$);
      $pagingControlLoadMoreLink$$.attr(this.$_TAB_INDEX$, "0");
      $pagingControlLoadMoreLink$$.attr("href", "#");
      $pagingControlLoadMore$$2$$.append($pagingControlLoadMoreLink$$);
      return $pagingControlLoadMoreLink$$;
    }, $_createPagingControlLoadMoreMaxRows$:function() {
      var $pagingControlLoadMore$$3$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreMaxRows$$ = $$$$10$$(document.createElement("span"));
      $pagingControlLoadMoreMaxRows$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS$);
      var $maxRowsText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_LOAD_MORE_MAX_ROWS$, {maxRows:this.options.loadMoreOptions.maxCount});
      $pagingControlLoadMoreMaxRows$$.text($maxRowsText$$);
      $pagingControlLoadMore$$3$$.append($pagingControlLoadMoreMaxRows$$);
      return $pagingControlLoadMoreMaxRows$$;
    }, $_createPagingControlLoadMoreRange$:function($size$$20$$, $startIndex$$11$$) {
      var $pagingControlLoadMore$$4$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreRange$$ = $$$$10$$(document.createElement("span"));
      $pagingControlLoadMoreRange$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$);
      var $loadMoreRange$$ = this.$_getItemRange$($size$$20$$, $startIndex$$11$$);
      $pagingControlLoadMoreRange$$.append($loadMoreRange$$);
      $pagingControlLoadMore$$4$$.append($pagingControlLoadMoreRange$$);
      return $pagingControlLoadMoreRange$$;
    }, $_createPagingControlNav$:function($size$$21$$, $startIndex$$12$$) {
      var $isVertical$$2$$ = "vertical" == this.options.pageOptions.orientation ? !0 : !1, $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = "dots" == this.options.pageOptions.type ? !0 : !1, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = this.options.pageOptions.layout;
      null == $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ && ($navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = [this.$_PAGE_OPTION_LAYOUT$.$_AUTO$]);
      var $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$ = this.$_getPagingControlContent$(), $pagingControlNav$$ = $$$$10$$(document.createElement("div"));
      $pagingControlNav$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_CLASS$);
      $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append($pagingControlNav$$);
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) && !$isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_INPUT$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$)) {
        $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$ = $$$$10$$(document.createElement("div"));
        $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$);
        $pagingControlNav$$.append($pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$);
        var $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$ = $$$$10$$(document.createElement("label"));
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr("for", this.element.attr("id") + "_nav_input");
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LABEL_CLASS$);
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass("oj-label-inline");
        var $maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE$);
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.text($maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$);
        $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append($itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$);
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$ = $$$$10$$(document.createElement("input"));
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$);
        $maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_INPUT_PAGE$);
        this._focusable(this.element);
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr("id", this.element.attr("id") + "_nav_input");
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr("title", $maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$);
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr(this.$_TAB_INDEX$, "0");
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.val(this.$_getCurrentPage$() + 1);
        $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append($itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$);
        $maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$ = this.$_getMaxPageVal$($size$$21$$);
        if (0 < this.$_getTotalPages$() && this.$_isTotalSizeConfidenceActual$()) {
          var $pagingControlNavMaxLabel$$1$$ = $$$$10$$(document.createElement("span"));
          $pagingControlNavMaxLabel$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$);
          var $navInputPageMaxLabel$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE_MAX$, {pageMax:$maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$});
          $pagingControlNavMaxLabel$$1$$.text($navInputPageMaxLabel$$1$$);
          $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append($pagingControlNavMaxLabel$$1$$);
        }
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.ojInputText({displayOptions:{messages:["notewindow"], converterHint:["notewindow"], validatorHint:["notewindow"]}, rootAttributes:{style:"width: auto; min-width: 0;"}, optionChange:this.$_handlePageChange$.bind(this), validators:[{type:"numberRange", options:{min:1, max:$maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$}}]});
      }
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) && !$isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_RANGE_TEXT$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$)) {
        $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$ = $$$$10$$(document.createElement("span")), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$ = 
        this.$_getItemRange$($size$$21$$, $startIndex$$12$$), 0 < $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.text().length && ($pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append("("), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append($itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$), 
        $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append(")")), $pagingControlNav$$.append($pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$);
      }
      $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$ = $$$$10$$(document.createElement("div"));
      $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$);
      $pagingControlNav$$.append($pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$);
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) && !$isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_NAV$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$)) {
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$ = $$$$10$$(document.createElement("a")), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$), 
        $isVertical$$2$$ ? $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_VERTICAL_ICON_CLASS$) : $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_ICON_CLASS$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), 
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_FIRST_PAGE$), this._hoverable($itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$), this._focusable($itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr("title", 
        $maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr(this.$_TAB_INDEX$, "0"), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr("href", 
        "#"), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr("oncontextmenu", "return false;"), $maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$ = this.$_createPagingControlAccNavFirstLabel$(), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.append($maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$), 
        $isVertical$$2$$ && $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.css("display", "block"), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append($itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$ = 
        $$$$10$$(document.createElement("a")), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$), $isVertical$$2$$ ? 
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_VERTICAL_ICON_CLASS$) : $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), 
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_PREVIOUS_PAGE$), this._hoverable($itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$), this._focusable($itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr("title", 
        $maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr(this.$_TAB_INDEX$, "0"), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr("href", 
        "#"), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.attr("oncontextmenu", "return false;"), $maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$ = this.$_createPagingControlAccNavPreviousLabel$(), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.append($maxPageVal$$2_navFirstPageTip$$1_navInputPageLabel$$1_navInputPageTip$$1_navPreviousPageTip$$1_pagingControlNavFirstAccLabel_pagingControlNavPreviousAccLabel$$), 
        $isVertical$$2$$ && $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.css("display", "block"), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append($itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$);
      }
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_PAGES$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$)) {
        $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$ = $$$$10$$(document.createElement("div")), $itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_SECTION_CLASS$), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append($itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$), 
        this.$_createPagingControlNavPages$($itemRange$$1_pagingControlNavFirst$$1_pagingControlNavInput$$2_pagingControlNavLabel$$1_pagingControlNavPagesSection$$1_pagingControlNavPrevious$$1$$, this.$_getMaxPageLinks$(), $size$$21$$, $startIndex$$12$$);
      }
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) && !$isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_ALL$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_NAV$, $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$)) {
        $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = $$$$10$$(document.createElement("a")), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$), $isVertical$$2$$ ? $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_VERTICAL_ICON_CLASS$) : 
        $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_ICON_CLASS$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_NEXT_PAGE$), this._hoverable($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$), this._focusable($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("title", $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr(this.$_TAB_INDEX$, "0"), 
        $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("href", "#"), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("oncontextmenu", "return false;"), $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = this.$_createPagingControlAccNavNextLabel$(), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.append($navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$), 
        $isVertical$$2$$ && $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.css("display", "block"), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = $$$$10$$(document.createElement("a")), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), 
        $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$), $isVertical$$2$$ ? $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_VERTICAL_ICON_CLASS$) : $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_ICON_CLASS$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), 
        $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_LAST_PAGE$), this._hoverable($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$), this._focusable($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$), 
        $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("title", $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr(this.$_TAB_INDEX$, "0"), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("href", "#"), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("oncontextmenu", "return false;"), $navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$ = 
        this.$_createPagingControlAccNavLastLabel$(), $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.append($navLastPageTip$$1_navNextPageTip$$1_pageOptionLayout_pagingControlNavLastAccLabel_pagingControlNavNextAccLabel$$), $isVertical$$2$$ && $isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$.css("display", "block"), $pagingControlContent$$4_pagingControlNavArrowSection$$3_pagingControlNavInputSection$$3_pagingControlNavSummaryLabel$$1$$.append($isDot_pagingControlNavLast$$1_pagingControlNavNext$$1$$)
        ;
      }
      return $pagingControlNav$$;
    }, $_createPagingControlNavPages$:function($pageSize$$3_parentDiv$$, $numLinks_pageList$$, $errSummary$$8_size$$22$$) {
      if (5 > $numLinks_pageList$$) {
        $errSummary$$8_size$$22$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_MAXPAGELINKS_INVALID_SUMMARY$);
        var $errDetail$$1_pagingControlNavPagesLinks$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_MAXPAGELINKS_INVALID_DETAIL$);
        throw Error($errSummary$$8_size$$22$$ + "\n" + $errDetail$$1_pagingControlNavPagesLinks$$);
      }
      $errDetail$$1_pagingControlNavPagesLinks$$ = $$$$10$$(document.createElement("div"));
      $errDetail$$1_pagingControlNavPagesLinks$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$);
      $pageSize$$3_parentDiv$$.append($errDetail$$1_pagingControlNavPagesLinks$$);
      var $pageNum$$3_totalPages$$ = this.$_getTotalPages$(), $currentPage$$1_i$$138_pageAfterCurrent$$ = this.$_getCurrentPage$();
      $pageSize$$3_parentDiv$$ = this.options.pageSize;
      var $numPagesToAdd$$ = $numLinks_pageList$$;
      $numLinks_pageList$$ = [];
      if (0 <= $currentPage$$1_i$$138_pageAfterCurrent$$) {
        if (this.$_isTotalSizeConfidenceActual$() && $pageNum$$3_totalPages$$ <= $numPagesToAdd$$) {
          for ($numLinks_pageList$$[0] = 0, $currentPage$$1_i$$138_pageAfterCurrent$$ = 1;$currentPage$$1_i$$138_pageAfterCurrent$$ < $pageNum$$3_totalPages$$;$currentPage$$1_i$$138_pageAfterCurrent$$++) {
            $numLinks_pageList$$[$currentPage$$1_i$$138_pageAfterCurrent$$] = $currentPage$$1_i$$138_pageAfterCurrent$$;
          }
        } else {
          $numLinks_pageList$$.push(0);
          0 != $currentPage$$1_i$$138_pageAfterCurrent$$ && $numLinks_pageList$$.push($currentPage$$1_i$$138_pageAfterCurrent$$);
          $currentPage$$1_i$$138_pageAfterCurrent$$ != $pageNum$$3_totalPages$$ - 1 && this.$_isTotalSizeConfidenceActual$() && $numLinks_pageList$$.push($pageNum$$3_totalPages$$ - 1);
          var $numPagesToAdd$$ = $numPagesToAdd$$ - $numLinks_pageList$$.length, $pageBeforeCurrent$$ = $currentPage$$1_i$$138_pageAfterCurrent$$ - 1, $numPagesAfterCurrent$$ = 1;
          for (!this.$_isTotalSizeConfidenceActual$() || $currentPage$$1_i$$138_pageAfterCurrent$$ != $pageNum$$3_totalPages$$ - 1 && $currentPage$$1_i$$138_pageAfterCurrent$$ != $pageNum$$3_totalPages$$ - 2 || ($numPagesAfterCurrent$$ = 0);$numPagesToAdd$$ > $numPagesAfterCurrent$$ && 1 <= $pageBeforeCurrent$$;) {
            $numLinks_pageList$$.push($pageBeforeCurrent$$), $pageBeforeCurrent$$--, $numPagesToAdd$$--;
          }
          $currentPage$$1_i$$138_pageAfterCurrent$$ += 1;
          for (-1 == $pageNum$$3_totalPages$$ && ($numPagesToAdd$$ = 0 < $errSummary$$8_size$$22$$ && $errSummary$$8_size$$22$$ >= $pageSize$$3_parentDiv$$ ? 1 : 0);0 < $numPagesToAdd$$ && ($currentPage$$1_i$$138_pageAfterCurrent$$ <= $pageNum$$3_totalPages$$ || -1 == $pageNum$$3_totalPages$$);) {
            $numLinks_pageList$$.push($currentPage$$1_i$$138_pageAfterCurrent$$), $currentPage$$1_i$$138_pageAfterCurrent$$++, $numPagesToAdd$$--;
          }
        }
        $numLinks_pageList$$.sort(function($a$$101$$, $b$$61$$) {
          return $a$$101$$ - $b$$61$$;
        });
        for ($currentPage$$1_i$$138_pageAfterCurrent$$ = 0;$currentPage$$1_i$$138_pageAfterCurrent$$ < $numLinks_pageList$$.length;$currentPage$$1_i$$138_pageAfterCurrent$$++) {
          $pageNum$$3_totalPages$$ = $numLinks_pageList$$[$currentPage$$1_i$$138_pageAfterCurrent$$], this.$_createPagingControlNavPage$($errDetail$$1_pagingControlNavPagesLinks$$, $pageNum$$3_totalPages$$), $currentPage$$1_i$$138_pageAfterCurrent$$ != $numLinks_pageList$$.length - 1 && $pageNum$$3_totalPages$$ != $numLinks_pageList$$[$currentPage$$1_i$$138_pageAfterCurrent$$ + 1] - 1 && this.$_createPagingControlNavPage$($errDetail$$1_pagingControlNavPagesLinks$$, -1);
        }
        !this.$_isTotalSizeConfidenceActual$() && $errSummary$$8_size$$22$$ >= $pageSize$$3_parentDiv$$ && this.$_createPagingControlNavPage$($errDetail$$1_pagingControlNavPagesLinks$$, -1);
      }
      return $errDetail$$1_pagingControlNavPagesLinks$$;
    }, $_createPagingControlNavPage$:function($parentDiv$$1$$, $pageNum$$4$$) {
      var $currentPage$$2$$ = this.$_getCurrentPage$(), $pagingControlNavPage$$ = null, $isRTL$$ = "rtl" === this.$_GetReadingDirection$(), $isVertical$$3$$ = "vertical" == this.options.pageOptions.orientation ? !0 : !1, $isDot$$1$$ = "dots" == this.options.pageOptions.type ? !0 : !1;
      if (-1 == $pageNum$$4$$) {
        $pagingControlNavPage$$ = $$$$10$$(document.createElement("span")), $pagingControlNavPage$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_ELLIPSIS_CLASS$), $pagingControlNavPage$$.text("...");
      } else {
        $currentPage$$2$$ == $pageNum$$4$$ ? ($pagingControlNavPage$$ = $$$$10$$(document.createElement("div")), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)) : ($pagingControlNavPage$$ = $$$$10$$(document.createElement("a")), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), 
        $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavPage$$.attr("href", "#"));
        $pagingControlNavPage$$.attr("data-oj-pagenum", $pageNum$$4$$);
        $isDot$$1$$ ? $pagingControlNavPage$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_DOT_CLASS$) : $pagingControlNavPage$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_CLASS$);
        var $accPageLabel_pageTitle_pagingControlNavPageSpan$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_PAGE_LINK$, {pageNum:($pageNum$$4$$ + 1).toString()});
        this._hoverable($pagingControlNavPage$$);
        this._focusable($pagingControlNavPage$$);
        $pagingControlNavPage$$.attr("title", $accPageLabel_pageTitle_pagingControlNavPageSpan$$);
        $pagingControlNavPage$$.attr(this.$_TAB_INDEX$, "0");
        $pagingControlNavPage$$.attr("oncontextmenu", "return false;");
        $accPageLabel_pageTitle_pagingControlNavPageSpan$$ = this.$_createPagingControlAccNavPageLabel$();
        $pagingControlNavPage$$.append($accPageLabel_pageTitle_pagingControlNavPageSpan$$);
        $accPageLabel_pageTitle_pagingControlNavPageSpan$$ = $$$$10$$(document.createElement("span"));
        $accPageLabel_pageTitle_pagingControlNavPageSpan$$.append(($pageNum$$4$$ + 1).toString());
        $isDot$$1$$ && ($accPageLabel_pageTitle_pagingControlNavPageSpan$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_DOT_BULLET_CLASS$), this._hoverable($accPageLabel_pageTitle_pagingControlNavPageSpan$$), $currentPage$$2$$ == $pageNum$$4$$ && ($accPageLabel_pageTitle_pagingControlNavPageSpan$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $accPageLabel_pageTitle_pagingControlNavPageSpan$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$)));
        $accPageLabel_pageTitle_pagingControlNavPageSpan$$.attr("dir", $isRTL$$ ? "rtl" : "ltr");
        $pagingControlNavPage$$.append($accPageLabel_pageTitle_pagingControlNavPageSpan$$);
        this._hoverable($pagingControlNavPage$$);
        $isVertical$$3$$ && $pagingControlNavPage$$.css("display", "block");
      }
      $parentDiv$$1$$.append($pagingControlNavPage$$);
      return $pagingControlNavPage$$;
    }, $_getPagingControlAccLabel$:function() {
      var $pagingControlContainer$$2$$ = this.$_getPagingControlContainer$(), $pagingControlContentAccLabel$$ = null;
      $pagingControlContainer$$2$$ && ($pagingControlContentAccLabel$$ = $pagingControlContainer$$2$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_ACC_LABEL_CLASS$)) && 0 < $pagingControlContentAccLabel$$.length && ($pagingControlContentAccLabel$$ = $$$$10$$($pagingControlContentAccLabel$$.get(0)));
      return $pagingControlContentAccLabel$$;
    }, $_getPagingControlContainer$:function() {
      return $$$$10$$(this.element);
    }, $_getPagingControlContent$:function() {
      if (!this.$_cachedDomPagingControlContent$) {
        var $pagingControlContainer$$3$$ = this.$_getPagingControlContainer$(), $pagingControlContent$$5$$ = null;
        $pagingControlContainer$$3$$ && ($pagingControlContent$$5$$ = $pagingControlContainer$$3$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_CONTENT_CLASS$)) && 0 < $pagingControlContent$$5$$.length && (this.$_cachedDomPagingControlContent$ = $$$$10$$($pagingControlContent$$5$$.get(0)));
      }
      return this.$_cachedDomPagingControlContent$;
    }, $_getPagingControlLoadMore$:function() {
      if (!this.$_cachedDomPagingControlLoadMore$) {
        var $pagingControlContent$$6$$ = this.$_getPagingControlContent$(), $pagingControlLoadMore$$5$$ = null;
        $pagingControlContent$$6$$ && ($pagingControlLoadMore$$5$$ = $pagingControlContent$$6$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_CLASS$)) && 0 < $pagingControlLoadMore$$5$$.length && (this.$_cachedDomPagingControlLoadMore$ = $$$$10$$($pagingControlLoadMore$$5$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMore$;
    }, $_getPagingControlLoadMoreLink$:function() {
      if (!this.$_cachedDomPagingControlLoadMoreLink$) {
        var $pagingControlLoadMore$$6$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreLink$$1$$ = null;
        $pagingControlLoadMore$$6$$ && ($pagingControlLoadMoreLink$$1$$ = $pagingControlLoadMore$$6$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$)) && 0 < $pagingControlLoadMoreLink$$1$$.length && (this.$_cachedDomPagingControlLoadMoreLink$ = $$$$10$$($pagingControlLoadMoreLink$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMoreLink$;
    }, $_getPagingControlLoadMoreRange$:function() {
      if (!this.$_cachedDomPagingControlLoadMoreRange$) {
        var $pagingControlLoadMore$$7$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreRange$$1$$ = null;
        $pagingControlLoadMore$$7$$ && ($pagingControlLoadMoreRange$$1$$ = $pagingControlLoadMore$$7$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$)) && 0 < $pagingControlLoadMoreRange$$1$$.length && (this.$_cachedDomPagingControlLoadMoreRange$ = $$$$10$$($pagingControlLoadMoreRange$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMoreRange$;
    }, $_getPagingControlNav$:function() {
      if (!this.$_cachedDomPagingControlNav$) {
        var $pagingControlContent$$7$$ = this.$_getPagingControlContent$(), $pagingControlNav$$1$$ = null;
        $pagingControlContent$$7$$ && ($pagingControlNav$$1$$ = $pagingControlContent$$7$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_CLASS$)) && 0 < $pagingControlNav$$1$$.length && (this.$_cachedDomPagingControlNav$ = $$$$10$$($pagingControlNav$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlNav$;
    }, $_getPagingControlNavInput$:function() {
      if (!this.$_cachedDomPagingControlNavInput$) {
        var $pagingControlNav$$2$$ = this.$_getPagingControlNav$(), $pagingControlNavInput$$3$$ = null;
        $pagingControlNav$$2$$ && ($pagingControlNavInput$$3$$ = $pagingControlNav$$2$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$)) && 0 < $pagingControlNavInput$$3$$.length && (this.$_cachedDomPagingControlNavInput$ = $$$$10$$($pagingControlNavInput$$3$$.get(0)));
      }
      return this.$_cachedDomPagingControlNavInput$;
    }, $_getPagingControlNavInputSummary$:function() {
      if (!this.$_cachedDomPagingControlNavInputSummary$) {
        var $pagingControlNav$$3$$ = this.$_getPagingControlNav$(), $pagingControlNavInputSummary$$1$$ = null;
        $pagingControlNav$$3$$ && ($pagingControlNavInputSummary$$1$$ = $pagingControlNav$$3$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$)) && 0 < $pagingControlNavInputSummary$$1$$.length && (this.$_cachedDomPagingControlNavInputSummary$ = $$$$10$$($pagingControlNavInputSummary$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlNavInputSummary$;
    }, $_getPagingControlNavPageLinks$:function() {
      var $pagingControlNav$$4$$ = this.$_getPagingControlNav$(), $pagingControlNavPageLinks$$1$$ = null;
      $pagingControlNav$$4$$ && ($pagingControlNavPageLinks$$1$$ = $pagingControlNav$$4$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$)) && 0 < $pagingControlNavPageLinks$$1$$.length && ($pagingControlNavPageLinks$$1$$ = $$$$10$$($pagingControlNavPageLinks$$1$$.get(0)));
      return $pagingControlNavPageLinks$$1$$;
    }, $_getPagingControlNavArrowSection$:function() {
      var $pagingControlNav$$5$$ = this.$_getPagingControlNav$(), $pagingControlNavArrowSection$$4$$ = null;
      if ($pagingControlNav$$5$$) {
        if (($pagingControlNavArrowSection$$4$$ = $pagingControlNav$$5$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$)) && 0 < $pagingControlNavArrowSection$$4$$.length) {
          $pagingControlNavArrowSection$$4$$ = $$$$10$$($pagingControlNavArrowSection$$4$$.get(0));
        } else {
          return null;
        }
      }
      return $pagingControlNavArrowSection$$4$$;
    }, $_getPagingControlNavInputSection$:function() {
      var $pagingControlNav$$6$$ = this.$_getPagingControlNav$(), $pagingControlNavInputSection$$4$$ = null;
      if ($pagingControlNav$$6$$) {
        if (($pagingControlNavInputSection$$4$$ = $pagingControlNav$$6$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$)) && 0 < $pagingControlNavInputSection$$4$$.length) {
          $pagingControlNavInputSection$$4$$ = $$$$10$$($pagingControlNavInputSection$$4$$.get(0));
        } else {
          return null;
        }
      }
      return $pagingControlNavInputSection$$4$$;
    }});
  })();
});
