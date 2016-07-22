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
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "promise", "ojdnd", "ojs/ojdomscroller", "ojs/ojeditablevalue", "ojs/ojmenu", "ojs/ojdatasource-common", "ojs/ojpagingtabledatasource", "ojs/ojflattenedtreetabledatasource"], function($oj$$14$$, $$$$14$$) {
  (function() {
    $oj$$14$$.$__registerWidget$("oj.ojTable", $$$$14$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3ctable\x3e", widgetEventPrefix:"oj", options:{accessibility:null, currentRow:null, data:null, display:"list", dnd:{drag:null, drop:null, reorder:{columns:"disabled"}}, emptyText:null, horizontalGridVisible:"auto", rowRenderer:null, scrollPolicy:"auto", scrollPolicyOptions:{fetchSize:25, maxCount:500}, selection:[], selectionMode:null, verticalGridVisible:"auto", columns:[{renderer:null, 
    className:null, field:null, footerClassName:null, footerRenderer:null, footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, headerText:null, id:null, sortable:"auto", sortProperty:null, style:null}], columnsDefault:{renderer:null, className:null, field:null, footerClassName:null, footerRenderer:null, footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, headerText:null, sortable:"auto", sortProperty:null, style:null}, beforeCurrentRow:null, ready:null, 
    sort:null, optionChange:null}, $_BUNDLE_KEY$:{$_MSG_FETCHING_DATA$:"msgFetchingData", $_MSG_NO_DATA$:"msgNoData", $_LABEL_SELECT_COLUMN$:"labelSelectColumn", $_LABEL_SELECT_ROW$:"labelSelectRow"}, $_LOGGER_MSG$:{$_ERR_PRECURRENTROW_ERROR_SUMMARY$:"Did not change current row due to error.", $_ERR_PRECURRENTROW_ERROR_DETAIL$:"Error detail: {error}.", $_ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY$:"Did not change current row due to unavailable row index.", $_ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL$:"Unavailable row index: {rowIdx}.", 
    $_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$:"Invalid row index value.", $_ERR_REFRESHROW_INVALID_INDEX_DETAIL$:"Row index: {rowIdx}.", $_ERR_DATA_INVALID_TYPE_SUMMARY$:"Invalid data type.", $_ERR_DATA_INVALID_TYPE_DETAIL$:"Please specify the appropriate data type.", $_ERR_ELEMENT_INVALID_TYPE_SUMMARY$:"Invalid element type.", $_ERR_ELEMENT_INVALID_TYPE_DETAIL$:"Only a \x3ctable\x3e element can be specified for ojTable.", $_ERR_DOM_SCROLLER_MAX_COUNT_SUMMARY$:"Exceeded maximum rows for table scrolling.", 
    $_ERR_DOM_SCROLLER_MAX_COUNT_DETAIL$:"Please reload with smaller data set."}, $_FIELD_ID$:"id", $_CONST_DATA$:"data", $_CONST_INDEXES$:"indexes", $_CONST_KEY$:"key", $_CONST_KEYS$:"keys", $_CONST_STARTINDEX$:"startIndex", $_CONST_ENDINDEX$:"endIndex", $_CONST_PAGESIZE$:"pageSize", $_CONST_COLUMN$:"column", $_CONST_ROW$:"row", $_COLUMN_HEADER_ID$:"_headerColumn", $_COLUMN_HEADER_TEXT_ID$:"_headerColumnText", $_COLUMN_HEADER_ASC_ID$:"_headerColumnAsc", $_COLUMN_HEADER_DSC_ID$:"_headerColumnDsc", 
    $_COLUMN_HEADER_ID_PREFIX$:"_hdrCol", $_FOCUS_CALLED$:"_focusedCalled", $_OPTION_AUTO$:"auto", $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_OPTION_NONE$:"none", $_OPTION_SELECTION_MODES$:{$_SINGLE$:"single", $_MULTIPLE$:"multiple"}, $_OPTION_SCROLL_POLICY$:{$_AUTO$:"auto", $_LOADMORE_ON_SCROLL$:"loadMoreOnScroll"}, $_COLUMN_SORT_ORDER$:{$_ASCENDING$:"ascending", $_DESCENDING$:"descending"}, $_DND_REORDER_TABLE_ID_DATA_KEY$:"oj-table-dnd-reorder-table-id", $_KEYBOARD_CODES$:{$_KEYBOARD_CODE_SPACEBAR$:32, 
    $_KEYBOARD_CODE_ENTER$:13, $_KEYBOARD_CODE_UP$:38, $_KEYBOARD_CODE_DOWN$:40, $_KEYBOARD_CODE_LEFT$:37, $_KEYBOARD_CODE_RIGHT$:39, $_KEYBOARD_CODE_HOME$:36, $_KEYBOARD_CODE_END$:35, $_KEYBOARD_CODE_TAB$:9, $_KEYBOARD_CODE_ESC$:27, $_KEYBOARD_MODIFIER_SHIFT$:"shiftKey"}, getContextByNode:function($node$$54$$) {
      return this.getSubIdByNode($node$$54$$, !0);
    }, getDataForVisibleRow:function($rowIndex$$2$$) {
      var $row$$4_tableBodyRow$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIndex$$2$$);
      return null != $row$$4_tableBodyRow$$ ? ($row$$4_tableBodyRow$$ = JSON.parse($row$$4_tableBodyRow$$.data("rowData")), {key:$row$$4_tableBodyRow$$.key, data:$row$$4_tableBodyRow$$.data, index:$rowIndex$$2$$}) : null;
    }, getNodeBySubId:function($columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
      if (null == $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
        return this.element ? this.element[0] : null;
      }
      var $offset$$20_rowIdx$$1_subId$$19$$ = $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.subId;
      if ("oj-table-cell" === $offset$$20_rowIdx$$1_subId$$19$$) {
        var $offset$$20_rowIdx$$1_subId$$19$$ = 0, $data$$102$$ = this.$_getData$();
        $data$$102$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($offset$$20_rowIdx$$1_subId$$19$$ = $data$$102$$.getStartItemIndex());
        $offset$$20_rowIdx$$1_subId$$19$$ += parseInt($columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.rowIndex, 10);
        $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.columnIndex;
        return this.$_getTableDomUtils$().$getTableBodyLogicalCells$($offset$$20_rowIdx$$1_subId$$19$$)[$columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$];
      }
      if ("oj-table-header" === $offset$$20_rowIdx$$1_subId$$19$$ || "oj-table-sort-ascending" === $offset$$20_rowIdx$$1_subId$$19$$ || "oj-table-sort-descending" === $offset$$20_rowIdx$$1_subId$$19$$) {
        if ($columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.index, $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = $$$$14$$(this.$_getTableDomUtils$().$getTableHeaderLogicalColumns$()[$columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$]), 
        null != $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
          if ("oj-table-header" === $offset$$20_rowIdx$$1_subId$$19$$) {
            return $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$[0];
          }
          $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = "oj-table-sort-ascending" === $offset$$20_rowIdx$$1_subId$$19$$ ? $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$) : $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.find("." + 
          $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$);
          if (0 < $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.length) {
            return $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$[0];
          }
        }
      } else {
        if ("oj-table-footer" === $offset$$20_rowIdx$$1_subId$$19$$ && ($columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.index, $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = this.$_getTableDomUtils$().$getTableFooterLogicalCells$()[$columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$], 
        null != $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$)) {
          return $columnIdx_locator$$18_tableFooterCell_tableHeaderColumn_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$;
        }
      }
      return null;
    }, getSubIdByNode:function($node$$55$$, $ignoreSortIcons$$) {
      var $cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$ = $$$$14$$($node$$55$$).closest("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
      if (0 < $cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$.length) {
        var $offset$$21$$ = 0, $data$$103$$ = this.$_getData$();
        $data$$103$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($offset$$21$$ = $data$$103$$.getStartItemIndex());
        return{subId:"oj-table-cell", rowIndex:$offset$$21$$ + this.$_getTableDomUtils$().$getElementRowIdx$($cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$), columnIndex:this.$_getTableDomUtils$().$getElementColumnIdx$($cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$)};
      }
      $cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$ = $$$$14$$($node$$55$$).closest("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
      if (0 < $cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$.length) {
        return{subId:$ignoreSortIcons$$ ? "oj-table-header" : "oj-table-sort-ascending", index:this.$_getTableDomUtils$().$getElementColumnIdx$($cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$)};
      }
      $cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$ = $$$$14$$($node$$55$$).closest("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$);
      if (0 < $cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$.length) {
        return{subId:$ignoreSortIcons$$ ? "oj-table-header" : "oj-table-sort-descending", index:this.$_getTableDomUtils$().$getElementColumnIdx$($cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$)};
      }
      $cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$ = $$$$14$$($node$$55$$).closest("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$);
      if (0 < $cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$.length) {
        return{subId:"oj-table-header", index:this.$_getTableDomUtils$().$getElementColumnIdx$($cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$)};
      }
      $cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$ = $$$$14$$($node$$55$$).closest("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
      return 0 < $cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$.length ? {subId:"oj-table-footer", index:this.$_getTableDomUtils$().$getElementColumnIdx$($cell$$2_footer_header$$9_headerSortAsc_headerSortDsc$$)} : null;
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, refreshRow:function($rowIdx$$2$$) {
      var $data$$104_errSummary$$9$$ = this.$_getData$();
      if (!$data$$104_errSummary$$9$$) {
        return!1;
      }
      var $errDetail$$2_rowKey_tableBodyRows$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (isNaN($rowIdx$$2$$) || 0 > $rowIdx$$2$$ || null != $errDetail$$2_rowKey_tableBodyRows$$ && $rowIdx$$2$$ >= $errDetail$$2_rowKey_tableBodyRows$$.length) {
        throw $data$$104_errSummary$$9$$ = this.$_LOGGER_MSG$.$_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$, $errDetail$$2_rowKey_tableBodyRows$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_REFRESHROW_INVALID_INDEX_DETAIL$, {rowIdx:$rowIdx$$2$$.toString()}), new RangeError($data$$104_errSummary$$9$$ + "\n" + $errDetail$$2_rowKey_tableBodyRows$$);
      }
      var $errDetail$$2_rowKey_tableBodyRows$$ = this.$_getRowKeyForRowIdx$($rowIdx$$2$$), $row$$5$$ = $data$$104_errSummary$$9$$.get($errDetail$$2_rowKey_tableBodyRows$$);
      if (null == $row$$5$$) {
        return!1;
      }
      var $self$$94$$ = this;
      return this.$_queueTask$(function() {
        return $row$$5$$.then(function($row$$6$$) {
          $self$$94$$.$_refreshTableBodyRow$($rowIdx$$2$$, $row$$6$$);
        }).then(function() {
          return!0;
        });
      });
    }, widget:function() {
      var $tableContainer$$ = this.$_getTableDomUtils$().$getTableContainer$();
      return null != $tableContainer$$ ? $tableContainer$$ : this.element;
    }, _ComponentCreate:function() {
      this._super();
      this.$_draw$();
      this.$_registerCustomEvents$();
      this._on(this.$_events$);
      if (this.$_isTouchDevice$()) {
        var $tableContainer$$1$$ = this.$_getTableDomUtils$().$getTableContainer$();
        this._on($tableContainer$$1$$, this.$_eventsContainer$);
      }
      this.$_registerDomEventListeners$();
      this.$_registerDataSourceEventListeners$();
      this.$_cachedOptions$ = $$$$14$$.extend(!0, {}, this.options);
    }, $_AfterCreate$:function() {
      this._super();
      this.$_getTableDomUtils$().$createContextMenu$(this.$_handleContextMenuSelect$.bind(this));
      this.$_initFetch$();
    }, $_NotifyContextMenuGesture$:function($contextMenu$$2$$, $event$$149$$, $eventType$$33$$) {
      var $openOptions$$3$$ = {};
      this.$_contextMenuEvent$ = $event$$149$$.originalEvent;
      if (!(this.$_isNodeEditable$($$$$14$$(this.$_contextMenuEvent$.target)) || this.$_isNodeClickable$($$$$14$$(this.$_contextMenuEvent$.target)) || "touch" == $eventType$$33$$ && this.$_isNodeDraggable$($$$$14$$(this.$_contextMenuEvent$.target)))) {
        var $columnIdx$$1_headerColumn$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-column-header-cell"), $columnIdx$$1_headerColumn$$ = null == $columnIdx$$1_headerColumn$$ ? this.$_getTableDomUtils$().$getTableHeaderColumn$(this.$_activeColumnIndex$) : $columnIdx$$1_headerColumn$$, $focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-data-cell");
        null != $focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ && ($columnIdx$$1_headerColumn$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$), $columnIdx$$1_headerColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$1_headerColumn$$));
        "keydown" === this.$_contextMenuEvent$.type && ($focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ = this.$_tableDomUtils$.$getTable$(), this.$_contextMenuEvent$.target == $focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$[0] ? null != $columnIdx$$1_headerColumn$$ && null != $columnIdx$$1_headerColumn$$[0] ? $openOptions$$3$$.position = {my:"start top", at:"start bottom", of:$columnIdx$$1_headerColumn$$[0]} : ($focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ = this.$_getFocusedRowIdx$(), 
        0 <= $focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ ? ($focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ = this.$_getTableDomUtils$().$getTableBodyRow$($focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$), $openOptions$$3$$.position = {my:"start top", at:"start bottom", of:$focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$[0]}) : $openOptions$$3$$.position = {my:"start top", at:"start bottom", of:this.$_contextMenuEvent$.target}) : $openOptions$$3$$.position = {my:"start top", 
        at:"start bottom", of:this.$_contextMenuEvent$.target});
        $columnIdx$$1_headerColumn$$.attr("data-oj-sortable") == this.$_OPTION_ENABLED$ ? ($$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortAsc]").removeClass("oj-disabled"), $$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortDsc]").removeClass("oj-disabled")) : ($$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortAsc]").addClass("oj-disabled"), $$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortDsc]").addClass("oj-disabled"));
        this.$_OpenContextMenu$($event$$149$$, $eventType$$33$$, $openOptions$$3$$);
      }
    }, _destroy:function() {
      this.$_getData$();
      this.$_unregisterDataSourceEventListeners$();
      this.$_unregisterResizeListener$();
      this.$_getTableDomUtils$().$getTableBody$().removeAttr($oj$$14$$.Components.$_OJ_CONTAINER_ATTR$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$);
      $oj$$14$$.$DomUtils$.unwrap(this.element, this.$_getTableDomUtils$().$getTableContainer$());
      this.element.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
      this.$_componentDestroyed$ = !0;
    }, $_draw$:function() {
      this.$_setFinalTask$(function() {
        this.$_getTableDomUtils$().$refreshTableDimensions$();
        this.$_setSelection$(this.options.selection);
        this.$_isLoadMoreOnScroll$() && !this.$_dataFetching$ && this.$_domScroller$.checkViewport().then(this.$_domScrollerMaxCountFunc$, null);
      });
      if (!this.element.is("table")) {
        throw new RangeError(this.$_LOGGER_MSG$.$_ERR_ELEMENT_INVALID_TYPE_SUMMARY$ + "\n" + this.$_LOGGER_MSG$.$_ERR_ELEMENT_INVALID_TYPE_DETAIL$);
      }
      this.element.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_ELEMENT_CLASS$);
      this.$_getTableDomUtils$().$createInitialTable$(this.$_isTableHeaderless$(), this.$_isTableFooterless$());
      this.$_getTableDomUtils$().$styleInitialTable$();
      this.$_refreshTableHeader$();
      this.$_refreshTableFooter$();
      this.$_refreshTableBody$();
      this.$_getTableDomUtils$().$refreshTableDimensions$();
      this.$_isLoadMoreOnScroll$() && this.$_registerDomScroller$();
      this.options.disabled && this.disable();
      this.$_registerResizeListener$();
    }, $_events$:{blur:function($event$$150$$) {
      var $table$$1$$ = this.$_getTableDomUtils$().$getTable$();
      0 < $table$$1$$.has($event$$150$$.relatedTarget).length || null != $event$$150$$.originalEvent && $event$$150$$.originalEvent.explicitOriginalTarget == $table$$1$$[0] || (this.$_clearKeyboardKeys$(), this.$_clearFocusedHeaderColumn$(), this.$_clearFocusedRow$(!1), this.$_setTableNavigationMode$(!1));
    }, focus:function($event$$151$$) {
      this.$_checkRowOrHeaderColumnFocus$($event$$151$$);
    }, "focus .oj-table-column-header-acc-asc-link":function($event$$152$$) {
      var $self$$95$$ = this;
      setTimeout(function() {
        $self$$95$$.$_checkRowOrHeaderColumnFocus$($event$$152$$);
      }, 0);
    }, "click .oj-table-checkbox-acc-select-column":function($event$$153$$) {
      var $columnIdx$$2$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$153$$.currentTarget)), $selected$$15$$ = $$$$14$$($event$$153$$.currentTarget).is(":checked");
      $selected$$15$$ && this.$_setHeaderColumnFocus$($columnIdx$$2$$, !0, !0, null);
      this.$_setHeaderColumnSelection$($columnIdx$$2$$, $selected$$15$$, $event$$153$$.currentTarget, $event$$153$$, !0);
      $event$$153$$.stopPropagation();
    }, "click .oj-table-checkbox-acc-select-row":function($event$$154$$) {
      var $rowIdx$$3$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$154$$.currentTarget)), $selected$$16$$ = $$$$14$$($event$$154$$.currentTarget).is(":checked"), $focused$$ = !1;
      $selected$$16$$ && ($focused$$ = this.$_setRowFocus$($rowIdx$$3$$, !0, !0, null, $event$$154$$, !0));
      $focused$$ && this.$_setRowSelection$($rowIdx$$3$$, $selected$$16$$, $event$$154$$.currentTarget, $event$$154$$, !0);
      $event$$154$$.stopPropagation();
    }, keydown:function($event$$155$$) {
      if (!(this.$_isNodeEditable$($$$$14$$($event$$155$$.target)) || null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$155$$.target).length) && (this.$_addKeyboardKey$($event$$155$$.keyCode), 1 == this.$_getKeyboardKeys$().length || 2 == this.$_getKeyboardKeys$().length && $event$$155$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$])) {
        if (this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$)) {
          $event$$155$$.preventDefault(), $event$$155$$.stopPropagation();
        }
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) ? this.$_handleKeydownUpDown$($event$$155$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) ? this.$_handleKeydownLeftRight$($event$$155$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_TAB$) && this.$_handleKeydownTab$($event$$155$$);
      }
    }, keyup:function($event$$156$$) {
      if (!(this.$_isNodeEditable$($$$$14$$($event$$156$$.target)) || null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$156$$.target).length)) {
        if (1 == this.$_getKeyboardKeys$().length) {
          var $keyboardCode1$$ = this.$_getKeyboardKeys$()[0];
          $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$ ? this.$_handleKeyupSpacebar$($event$$156$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ENTER$ ? this.$_handleKeyupEnter$($event$$156$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$ ? this.$_handleKeyupHome$($event$$156$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$ ? this.$_handleKeyupEnd$($event$$156$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ESC$ && 
          this.$_handleKeyupEsc$($event$$156$$);
          this.$_removeKeyboardKey$($keyboardCode1$$);
        }
        this.$_removeKeyboardKey$($event$$156$$.keyCode);
      }
    }, "mousedown .oj-table-body":function($event$$157$$) {
      this.$_mouseDownRowIdx$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$157$$.target));
      if (null != this.$_mouseDownRowIdx$) {
        var $tableBodyRow$$2$$ = this.$_getTableDomUtils$().$getTableBodyRow$(this.$_mouseDownRowIdx$);
        null != $tableBodyRow$$2$$ && $tableBodyRow$$2$$.prop("draggable") ? this.$_mouseDownRowIdx$ = null : null == this.$_mouseDownRowIdx$ || $event$$157$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] || $oj$$14$$.$DomUtils$.$isMetaKeyPressed$($event$$157$$) || this.$_getRowSelection$(this.$_mouseDownRowIdx$) && 1 == this.$_getSelectedRowIdxs$().length || this.$_nonContiguousSelection$ || this.$_clearSelectedRows$();
      }
    }, "mouseup .oj-table-body":function() {
      this.$_mouseDownRowIdx$ = null;
    }, "mouseenter .oj-table-body-row":function($event$$159$$) {
      $$$$14$$($event$$159$$.currentTarget).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
      this.$_handleMouseEnterSelection$($event$$159$$.target);
    }, "mouseleave .oj-table-body-row":function($event$$160$$) {
      $$$$14$$($event$$160$$.currentTarget).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, "mousedown .oj-table-column-header-cell":function($event$$161$$) {
      var $columnIdx$$3$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$161$$.currentTarget));
      this.$_setHeaderColumnFocus$($columnIdx$$3$$, !0, !0, $event$$161$$);
      $$$$14$$($event$$161$$.target).data(this.$_FOCUS_CALLED$, !0);
    }, "mouseenter .oj-table-column-header-cell":function($columnIdx$$4_event$$162$$) {
      $$$$14$$($columnIdx$$4_event$$162$$.currentTarget).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
      $columnIdx$$4_event$$162$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($columnIdx$$4_event$$162$$.currentTarget));
      this.$_showTableHeaderColumnSortLink$($columnIdx$$4_event$$162$$);
    }, "mouseleave .oj-table-column-header-cell":function($columnIdx$$5_event$$163$$) {
      $$$$14$$($columnIdx$$5_event$$163$$.currentTarget).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
      $columnIdx$$5_event$$163$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($columnIdx$$5_event$$163$$.currentTarget));
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$5_event$$163$$, !0);
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$5_event$$163$$, !1);
    }, "mousedown .oj-table-data-cell":function($event$$164$$) {
      var $rowIdx$$4$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$164$$.currentTarget));
      this.$_setRowFocus$($rowIdx$$4$$, !0, !0, $event$$164$$.currentTarget, $event$$164$$);
      $$$$14$$($event$$164$$.target).data(this.$_FOCUS_CALLED$, !0);
    }, "mouseenter .oj-table-data-cell":function($event$$165$$) {
      $$$$14$$($event$$165$$.currentTarget).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, "mouseleave .oj-table-data-cell":function($event$$166$$) {
      $$$$14$$($event$$166$$.currentTarget).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, "click .oj-table-column-header-asc-link":function($event$$167$$) {
      var $columnIdx$$6$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$167$$.target)), $tableHeaderColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$6$$);
      $tableHeaderColumn$$1$$ && ($tableHeaderColumn$$1$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$6$$, !1, $event$$167$$) : this.$_handleSortTableHeaderColumn$($columnIdx$$6$$, !0, $event$$167$$), $event$$167$$.preventDefault(), $event$$167$$.stopPropagation());
    }, "click .oj-table-column-header-acc-asc-link":function($event$$168$$) {
      var $columnIdx$$7$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$168$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$7$$, !0, $event$$168$$);
      $event$$168$$.preventDefault();
      $event$$168$$.stopPropagation();
    }, "click .oj-table-column-header-dsc-link":function($event$$169$$) {
      var $columnIdx$$8$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$169$$.target)), $tableHeaderColumn$$2$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$8$$);
      $tableHeaderColumn$$2$$ && ($tableHeaderColumn$$2$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$8$$, !0, $event$$169$$) : this.$_handleSortTableHeaderColumn$($columnIdx$$8$$, !1, $event$$169$$), $event$$169$$.preventDefault(), $event$$169$$.stopPropagation());
    }, "click .oj-table-column-header-acc-dsc-link":function($event$$170$$) {
      var $columnIdx$$9$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$170$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$9$$, !1, $event$$170$$);
      $event$$170$$.preventDefault();
      $event$$170$$.stopPropagation();
    }, "click .oj-table-data-cell":function($event$$171$$) {
      var $rowIdx$$5$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$171$$.currentTarget));
      if (!$$$$14$$($event$$171$$.target).data(this.$_FOCUS_CALLED$)) {
        var $focused$$2_lastSelectedRowIdx_rowSelected$$1$$ = this.$_setRowFocus$($rowIdx$$5$$, !0, !0, $event$$171$$.currentTarget, $event$$171$$);
        $$$$14$$($event$$171$$.target).data(this.$_FOCUS_CALLED$, !1);
        if (!$focused$$2_lastSelectedRowIdx_rowSelected$$1$$) {
          return;
        }
      }
      if ($event$$171$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
        if ($focused$$2_lastSelectedRowIdx_rowSelected$$1$$ = this.$_getLastRowSelection$(), null != $focused$$2_lastSelectedRowIdx_rowSelected$$1$$) {
          if (window.getSelection().removeAllRanges(), $rowIdx$$5$$ < $focused$$2_lastSelectedRowIdx_rowSelected$$1$$) {
            var $i$$177$$;
            for ($i$$177$$ = $rowIdx$$5$$;$i$$177$$ <= $focused$$2_lastSelectedRowIdx_rowSelected$$1$$;$i$$177$$++) {
              this.$_setRowSelection$($i$$177$$, !0, $event$$171$$.currentTarget, $event$$171$$, !0);
            }
          } else {
            for ($i$$177$$ = $focused$$2_lastSelectedRowIdx_rowSelected$$1$$;$i$$177$$ <= $rowIdx$$5$$;$i$$177$$++) {
              this.$_setRowSelection$($i$$177$$, !0, $event$$171$$.currentTarget, $event$$171$$, !0);
            }
          }
        }
      } else {
        $oj$$14$$.$DomUtils$.$isMetaKeyPressed$($event$$171$$) ? this.$_setRowSelection$($rowIdx$$5$$, !this.$_getRowSelection$($rowIdx$$5$$), $event$$171$$.currentTarget, $event$$171$$, !0) : 0 == this.$_getKeyboardKeys$().length && ($focused$$2_lastSelectedRowIdx_rowSelected$$1$$ = this.$_getRowSelection$($rowIdx$$5$$), this.$_setRowSelection$($rowIdx$$5$$, !$focused$$2_lastSelectedRowIdx_rowSelected$$1$$, $event$$171$$.currentTarget, $event$$171$$, !0), this.$_isTouchDevice$() && this.$_getRowSelectionMode$() == 
        this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$ && !$focused$$2_lastSelectedRowIdx_rowSelected$$1$$ && this.$_getTableDomUtils$().$createTableBodyRowTouchSelectionAffordance$($rowIdx$$5$$));
      }
    }, "contextmenu .oj-table-data-cell":function($event$$172$$) {
      var $rowIdx$$6_rowKey$$1$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$172$$.currentTarget)), $rowIdx$$6_rowKey$$1$$ = this.$_getRowKeyForRowIdx$($rowIdx$$6_rowKey$$1$$);
      this.$_setCurrentRow$({rowKey:$rowIdx$$6_rowKey$$1$$}, $event$$172$$);
    }, "click .oj-table-column-header-cell":function($event$$173$$) {
      var $columnIdx$$10$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$173$$.currentTarget));
      $$$$14$$($event$$173$$.target).data(this.$_FOCUS_CALLED$) || (this.$_setHeaderColumnFocus$($columnIdx$$10$$, !0, !0, $event$$173$$), $$$$14$$($event$$173$$.target).data(this.$_FOCUS_CALLED$, !1));
      if ($event$$173$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
        var $lastSelectedColumnIdx$$ = this.$_getLastHeaderColumnSelection$();
        if (null != $lastSelectedColumnIdx$$) {
          if ($columnIdx$$10$$ < $lastSelectedColumnIdx$$) {
            var $i$$178$$;
            for ($i$$178$$ = $columnIdx$$10$$;$i$$178$$ <= $lastSelectedColumnIdx$$;$i$$178$$++) {
              this.$_setHeaderColumnSelection$($i$$178$$, !0, $event$$173$$.currentTarget, $event$$173$$, !0);
            }
          } else {
            for ($i$$178$$ = $lastSelectedColumnIdx$$;$i$$178$$ <= $columnIdx$$10$$;$i$$178$$++) {
              this.$_setHeaderColumnSelection$($i$$178$$, !0, $event$$173$$.currentTarget, $event$$173$$, !0);
            }
          }
        }
      } else {
        $oj$$14$$.$DomUtils$.$isMetaKeyPressed$($event$$173$$) ? this.$_setHeaderColumnSelection$($columnIdx$$10$$, !this.$_getHeaderColumnSelection$($columnIdx$$10$$), $event$$173$$.currentTarget, $event$$173$$, !0) : 0 == this.$_getKeyboardKeys$().length && (this.$_clearSelectedHeaderColumns$(), this.$_setHeaderColumnSelection$($columnIdx$$10$$, !this.$_getHeaderColumnSelection$($columnIdx$$10$$), $event$$173$$.currentTarget, $event$$173$$, !0), this.$_getTableDndContext$().$setTableHeaderColumnDraggable$($columnIdx$$10$$, 
        !0));
      }
    }, "dragstart .oj-table-column-header-cell":function($event$$174$$) {
      return this.$_getTableDndContext$().$handleColumnDragStart$($event$$174$$);
    }, "dragenter .oj-table-column-header-cell":function($event$$175$$) {
      return this.$_getTableDndContext$().$handleColumnDragEnter$($event$$175$$);
    }, "dragover .oj-table-column-header-cell":function($event$$176$$) {
      return this.$_getTableDndContext$().$handleColumnDragOver$($event$$176$$);
    }, "dragleave .oj-table-column-header-cell":function($event$$177$$) {
      return this.$_getTableDndContext$().$handleColumnDragLeave$($event$$177$$);
    }, "drop .oj-table-column-header-cell":function($event$$178$$) {
      return this.$_getTableDndContext$().$handleColumnDrop$($event$$178$$);
    }, "dragend .oj-table-column-header-cell":function() {
      return this.$_getTableDndContext$().$handleColumnDragEnd$();
    }, "dragstart .oj-table-body-row":function($event$$180$$) {
      return this.$_getTableDndContext$().$handleRowDragStart$($event$$180$$);
    }, "drag .oj-table-body-row":function($event$$181$$) {
      return this.$_getTableDndContext$().$handleRowDrag$($event$$181$$);
    }, "dragend .oj-table-body-row":function($event$$182$$) {
      return this.$_getTableDndContext$().$handleRowDragEnd$($event$$182$$);
    }, "dragenter .oj-table-body":function($event$$183$$) {
      return this.$_getTableDndContext$().$handleRowDragEnter$($event$$183$$);
    }, "dragover .oj-table-body":function($event$$184$$) {
      return this.$_getTableDndContext$().$handleRowDragOver$($event$$184$$);
    }, "dragleave .oj-table-body":function($event$$185$$) {
      return this.$_getTableDndContext$().$handleRowDragLeave$($event$$185$$);
    }, "drop .oj-table-body":function($event$$186$$) {
      return this.$_getTableDndContext$().$handleRowDrop$($event$$186$$);
    }}, $_eventsContainer$:{touchstart:function($event$$187$$) {
      if (1 == $event$$187$$.originalEvent.touches.length && this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        if ($$$$14$$($event$$187$$.target).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_CLASS$) || $$$$14$$($event$$187$$.target).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_ICON_CLASS$)) {
          $event$$187$$.preventDefault(), this.$_mouseDownRowIdx$ = this.$_getTableDomUtils$().$getTableBodyRowTouchSelectionAffordanceBottom$().data("rowIdx");
        } else {
          if ($$$$14$$($event$$187$$.target).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_CLASS$) || $$$$14$$($event$$187$$.target).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_ICON_CLASS$)) {
            $event$$187$$.preventDefault(), this.$_mouseDownRowIdx$ = this.$_getTableDomUtils$().$getTableBodyRowTouchSelectionAffordanceTop$().data("rowIdx");
          }
        }
      }
    }, touchmove:function($event$$188_eventTarget$$) {
      null != this.$_mouseDownRowIdx$ && ($event$$188_eventTarget$$.preventDefault(), $event$$188_eventTarget$$ = this.$_getTouchEventTargetElement$($event$$188_eventTarget$$), this.$_handleMouseEnterSelection$($event$$188_eventTarget$$));
    }, touchend:function($event$$189_eventTarget$$1$$) {
      null != this.$_mouseDownRowIdx$ && ($event$$189_eventTarget$$1$$ = this.$_getTouchEventTargetElement$($event$$189_eventTarget$$1$$), this.$_handleMouseEnterSelection$($event$$189_eventTarget$$1$$));
      this.$_mouseDownRowIdx$ = null;
    }, touchcancel:function() {
      this.$_mouseDownRowIdx$ = null;
    }}, $_refresh$:function() {
      var $startIndex$$14$$ = null, $initFetch$$ = !1;
      this.$_data$ != this.options[this.$_CONST_DATA$] && (this.$_clearCachedDataMetadata$(), null == this.$_data$ ? $initFetch$$ = !0 : $startIndex$$14$$ = 0, this.$_isLoadMoreOnScroll$() && (null != this.$_domScroller$ && this.$_domScroller$.destroy(), this.$_registerDomScroller$()));
      this.$_contextMenuId$ != this.$_getTableDomUtils$().$getContextMenuId$() && this.$_getTableDomUtils$().$createContextMenu$(this.$_handleContextMenuSelect$.bind(this));
      this.$_getTableDomUtils$().$clearCachedDom$();
      this.$_getTableDomUtils$().$refreshContextMenu$();
      this.$_refreshTableStatusMessage$();
      if ($initFetch$$) {
        return this.$_initFetch$();
      }
      var $self$$96$$ = this;
      this.$_queueTask$(function() {
        return $self$$96$$.$_invokeDataFetchRows$($startIndex$$14$$);
      });
    }, _setOption:function($key$$68$$, $value$$217$$) {
      this._superApply(arguments);
      this.$_isTableRefreshNeeded$($key$$68$$, $value$$217$$) ? this.$_refresh$() : "selection" == $key$$68$$ ? (this.$_clearSelectedRows$(), this.$_clearSelectedHeaderColumns$(), this.$_setSelection$($value$$217$$)) : "currentRow" == $key$$68$$ && this.$_setCurrentRow$($value$$217$$, null, !0);
    }, $_addKeyboardKey$:function($keyCode$$1$$) {
      var $foundCode_keyboardKeys$$ = !1, $found$$7_prop$$60$$;
      for ($found$$7_prop$$60$$ in this.$_KEYBOARD_CODES$) {
        this.$_KEYBOARD_CODES$.hasOwnProperty($found$$7_prop$$60$$) && this.$_KEYBOARD_CODES$[$found$$7_prop$$60$$] == $keyCode$$1$$ && ($foundCode_keyboardKeys$$ = !0);
      }
      if ($foundCode_keyboardKeys$$) {
        $foundCode_keyboardKeys$$ = this.$_getKeyboardKeys$();
        $found$$7_prop$$60$$ = !1;
        var $i$$179$$, $keyboardKeysCount$$ = $foundCode_keyboardKeys$$.length;
        for ($i$$179$$ = 0;$i$$179$$ < $keyboardKeysCount$$;$i$$179$$++) {
          if ($foundCode_keyboardKeys$$[$i$$179$$] == $keyCode$$1$$) {
            $found$$7_prop$$60$$ = !0;
            break;
          }
        }
        $found$$7_prop$$60$$ || $foundCode_keyboardKeys$$.push($keyCode$$1$$);
      }
    }, $_addSingleTableBodyRow$:function($rowIdx$$7$$, $row$$7$$, $docFrag$$, $docFragStartIdx$$) {
      var $tableBodyRow$$3$$ = this.$_getTableDomUtils$().$createTableBodyRow$($rowIdx$$7$$, $row$$7$$[this.$_CONST_KEY$]);
      this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$3$$, !0);
      this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$7$$, $tableBodyRow$$3$$, $row$$7$$, $docFrag$$);
      this.$_refreshTableBodyRow$($rowIdx$$7$$, $row$$7$$, $tableBodyRow$$3$$, $docFrag$$, $docFragStartIdx$$, !0);
    }, $_checkRowOrHeaderColumnFocus$:function($event$$191$$) {
      var $focusedRowIdx$$1$$ = this.$_getFocusedRowIdx$(), $focusedHeaderColumnIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      null == $focusedRowIdx$$1$$ && null == $focusedHeaderColumnIdx$$ && (this.$_isTableHeaderless$() ? this.$_setRowFocus$(0, !0, !0, null, $event$$191$$) : this.$_setHeaderColumnFocus$(0, !0, !1, $event$$191$$));
    }, $_clearCachedMetadata$:function() {
      this.$_columnDefArray$ = null;
      this.$_setTableNavigationMode$(!1);
    }, $_clearCachedDataMetadata$:function() {
      null != this.$_data$ && this.$_unregisterDataSourceEventListeners$();
      this.$_data$ = null;
    }, $_clearDataWaitingState$:function() {
      this.$_hideInlineMessage$();
      this.$_hideStatusMessage$();
      this.$_dataFetching$ = !1;
    }, $_clearKeyboardKeys$:function() {
      this.$_keyboardKeys$ = [];
    }, $_clearFocusedHeaderColumn$:function() {
      var $focusedHeaderColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedHeaderColumnIdx$$1$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$1$$, !1, !1, null);
      this.$_activeColumnIndex$ = -1;
    }, $_clearFocusedRow$:function($updateCurrentRow$$) {
      null != this.$_getFocusedRowIdx$() && this.$_setRowFocus$(-1, !0, $updateCurrentRow$$, null, null);
    }, $_clearSelectedHeaderColumns$:function() {
      var $selectedHeaderColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$(), $i$$180$$, $selectedHeaderColumnIdxsCount$$ = $selectedHeaderColumnIdxs$$.length;
      for ($i$$180$$ = 0;$i$$180$$ < $selectedHeaderColumnIdxsCount$$;$i$$180$$++) {
        this.$_setHeaderColumnSelection$($selectedHeaderColumnIdxs$$[$i$$180$$], !1, null, null, !1);
      }
    }, $_clearSelectedRows$:function() {
      var $selectedRowIdxs$$ = this.$_getSelectedRowIdxs$(), $i$$181$$, $selectedRowIdxsCount$$ = $selectedRowIdxs$$.length;
      for ($i$$181$$ = 0;$i$$181$$ < $selectedRowIdxsCount$$;$i$$181$$++) {
        this.$_setRowSelection$($selectedRowIdxs$$[$i$$181$$], !1, null, null, !1);
      }
      this.$_isTouchDevice$() && this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$ && this.$_getTableDomUtils$().$removeTableBodyRowTouchSelectionAffordance$();
    }, $_clearSortedHeaderColumn$:function($columnIdx$$11$$) {
      var $sortedTableHeaderColumnIdx$$ = this.$_getSortedTableHeaderColumnIdx$();
      if (null != $sortedTableHeaderColumnIdx$$) {
        var $sortedTableHeaderColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($sortedTableHeaderColumnIdx$$), $sorted$$2$$ = $sortedTableHeaderColumn$$.data("sorted");
        $sortedTableHeaderColumn$$.data("sorted", null);
        $sortedTableHeaderColumnIdx$$ != $columnIdx$$11$$ ? $sorted$$2$$ == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !0) : this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !1) : ($sortedTableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $sortedTableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
      }
    }, $_executeTableBodyRowsAdd$:function($rows$$) {
      var $self$$97$$ = this;
      this.$_queueTask$(function() {
        var $batchAdd_tableBody$$ = !1;
        if (1 < $rows$$.length) {
          var $i$$182_tableBodyRowBefore$$, $rowsCount$$ = $rows$$.length, $isContiguous_tableBodyDocFrag$$ = !0;
          for ($i$$182_tableBodyRowBefore$$ = 0;$i$$182_tableBodyRowBefore$$ < $rowsCount$$;$i$$182_tableBodyRowBefore$$++) {
            if (0 != $i$$182_tableBodyRowBefore$$ && $rows$$[$i$$182_tableBodyRowBefore$$ - 1].$rowIdx$ != $rows$$[$i$$182_tableBodyRowBefore$$].$rowIdx$ - 1) {
              $isContiguous_tableBodyDocFrag$$ = !1;
              break;
            }
          }
          if ($isContiguous_tableBodyDocFrag$$) {
            $batchAdd_tableBody$$ = $self$$97$$.$_getTableDomUtils$().$getTableBody$();
            $isContiguous_tableBodyDocFrag$$ = $$$$14$$(document.createDocumentFragment());
            $rowsCount$$ = $rows$$.length;
            for ($i$$182_tableBodyRowBefore$$ = 0;$i$$182_tableBodyRowBefore$$ < $rowsCount$$;$i$$182_tableBodyRowBefore$$++) {
              $self$$97$$.$_addSingleTableBodyRow$($rows$$[$i$$182_tableBodyRowBefore$$].$rowIdx$, $rows$$[$i$$182_tableBodyRowBefore$$].row, $isContiguous_tableBodyDocFrag$$, $rows$$[0].$rowIdx$);
            }
            0 == $rows$$[0].$rowIdx$ ? $batchAdd_tableBody$$.prepend($isContiguous_tableBodyDocFrag$$) : ($i$$182_tableBodyRowBefore$$ = $self$$97$$.$_getTableDomUtils$().$getTableBodyRow$($rows$$[0].$rowIdx$), null != $i$$182_tableBodyRowBefore$$ ? $batchAdd_tableBody$$[0].insertBefore($isContiguous_tableBodyDocFrag$$[0], $i$$182_tableBodyRowBefore$$[0]) : $batchAdd_tableBody$$[0].insertBefore($isContiguous_tableBodyDocFrag$$[0], null));
            $self$$97$$.$_getTableDomUtils$().$clearCachedDomRowData$();
            $oj$$14$$.Components.$subtreeAttached$($batchAdd_tableBody$$[0]);
            $batchAdd_tableBody$$ = !0;
          }
        }
        if (!$batchAdd_tableBody$$) {
          for ($rowsCount$$ = $rows$$.length, $i$$182_tableBodyRowBefore$$ = 0;$i$$182_tableBodyRowBefore$$ < $rowsCount$$;$i$$182_tableBodyRowBefore$$++) {
            $self$$97$$.$_addSingleTableBodyRow$($rows$$[$i$$182_tableBodyRowBefore$$].$rowIdx$, $rows$$[$i$$182_tableBodyRowBefore$$].row);
          }
        }
        $self$$97$$.$_getTableDomUtils$().$clearCachedDomRowData$();
        $self$$97$$.$_refreshTableFooter$();
      });
    }, $_executeTableBodyRowsChange$:function($rows$$1$$) {
      var $self$$98$$ = this;
      this.$_queueTask$(function() {
        var $i$$183$$, $rowsCount$$1$$ = $rows$$1$$.length;
        for ($i$$183$$ = 0;$i$$183$$ < $rowsCount$$1$$;$i$$183$$++) {
          $self$$98$$.$_refreshTableBodyRow$($rows$$1$$[$i$$183$$].$rowIdx$, $rows$$1$$[$i$$183$$].row);
        }
        $self$$98$$.$_refreshTableFooter$();
      });
    }, $_executeTableBodyRowsRemove$:function($rows$$2$$) {
      var $self$$99$$ = this, $currentRow$$ = this.$_getCurrentRow$(), $currentRowKey$$ = null != $currentRow$$ ? $currentRow$$.rowKey : null;
      this.$_queueTask$(function() {
        var $i$$184_tableBodyRows$$1$$, $rowKey$$2$$, $rowsCount$$2$$ = $rows$$2$$.length;
        for ($i$$184_tableBodyRows$$1$$ = 0;$i$$184_tableBodyRows$$1$$ < $rowsCount$$2$$;$i$$184_tableBodyRows$$1$$++) {
          $self$$99$$.$_getTableDomUtils$().$removeTableBodyRow$($rows$$2$$[$i$$184_tableBodyRows$$1$$].$rowIdx$), null != $currentRowKey$$ && ($rowKey$$2$$ = $rows$$2$$[$i$$184_tableBodyRows$$1$$].row[$self$$99$$.$_FIELD_ID$], $oj$$14$$.$Object$.$compareValues$($rowKey$$2$$, $currentRowKey$$) && ($self$$99$$.$_setCurrentRow$(null, null), $currentRowKey$$ = null));
        }
        $self$$99$$.$_refreshTableFooter$();
        $i$$184_tableBodyRows$$1$$ = $self$$99$$.$_getTableDomUtils$().$getTableBodyRows$();
        null != $i$$184_tableBodyRows$$1$$ && 0 != $i$$184_tableBodyRows$$1$$.length || this.$_showNoDataMessage$();
      });
    }, $_getColumnDefs$:function() {
      this.$_columnDefArray$ || (this.$_columnDefArray$ = this.$_getColumnMetadata$());
      return this.$_columnDefArray$;
    }, $_getColumnMetadata$:function() {
      var $columns_columnsSortedArray$$ = this.options.columns, $columnsDefault_defaultedColumnsCount$$ = this.options.columnsDefault;
      if ((0 == $columns_columnsSortedArray$$.length || 1 == $columns_columnsSortedArray$$.length && null == $columns_columnsSortedArray$$[0].id && null == $columns_columnsSortedArray$$[0].headerText && null == $columns_columnsSortedArray$$[0].field) && null == $columnsDefault_defaultedColumnsCount$$.headerText && null == $columnsDefault_defaultedColumnsCount$$.field) {
        return[];
      }
      var $defaultedColumns_sortSupportedData$$ = [], $data$$106_i$$185$$, $columnsCount$$ = $columns_columnsSortedArray$$.length;
      for ($data$$106_i$$185$$ = 0;$data$$106_i$$185$$ < $columnsCount$$;$data$$106_i$$185$$++) {
        $defaultedColumns_sortSupportedData$$[$data$$106_i$$185$$] = $$$$14$$.extend({}, $columnsDefault_defaultedColumnsCount$$, $columns_columnsSortedArray$$[$data$$106_i$$185$$]);
      }
      $columns_columnsSortedArray$$ = [];
      $columnsDefault_defaultedColumnsCount$$ = $defaultedColumns_sortSupportedData$$.length;
      for ($data$$106_i$$185$$ = 0;$data$$106_i$$185$$ < $columnsDefault_defaultedColumnsCount$$;$data$$106_i$$185$$++) {
        $columns_columnsSortedArray$$.push($defaultedColumns_sortSupportedData$$[$data$$106_i$$185$$]);
      }
      $data$$106_i$$185$$ = this.$_getData$();
      $defaultedColumns_sortSupportedData$$ = !1;
      null != $data$$106_i$$185$$ && "full" == $data$$106_i$$185$$.getCapability("sort") && ($defaultedColumns_sortSupportedData$$ = !0);
      for ($data$$106_i$$185$$ = 0;$data$$106_i$$185$$ < $columnsDefault_defaultedColumnsCount$$;$data$$106_i$$185$$++) {
        null == $columns_columnsSortedArray$$[$data$$106_i$$185$$][this.$_FIELD_ID$] && ($columns_columnsSortedArray$$[$data$$106_i$$185$$][this.$_FIELD_ID$] = this.$_COLUMN_HEADER_ID_PREFIX$ + $data$$106_i$$185$$), null != $columns_columnsSortedArray$$[$data$$106_i$$185$$].sortable && $columns_columnsSortedArray$$[$data$$106_i$$185$$].sortable != this.$_OPTION_AUTO$ || !$defaultedColumns_sortSupportedData$$ || ($columns_columnsSortedArray$$[$data$$106_i$$185$$].sortable = this.$_OPTION_ENABLED$)
        ;
      }
      return $columns_columnsSortedArray$$;
    }, $_getColumnIdxForColumnKey$:function($columnKey$$) {
      var $columns$$1$$ = this.$_getColumnDefs$();
      if (null != $columns$$1$$) {
        var $i$$186$$, $column$$4$$, $columnsCount$$1$$ = $columns$$1$$.length;
        for ($i$$186$$ = 0;$i$$186$$ < $columnsCount$$1$$;$i$$186$$++) {
          if ($column$$4$$ = $columns$$1$$[$i$$186$$], $oj$$14$$.$Object$.$compareValues$($column$$4$$.id, $columnKey$$)) {
            return $i$$186$$;
          }
        }
      }
      return null;
    }, $_getColumnIdxsForElementsWithStyleClass$:function($elements$$1_styleClass$$) {
      $elements$$1_styleClass$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$1_styleClass$$);
      var $columnIdxs$$ = [];
      if ($elements$$1_styleClass$$ && 0 < $elements$$1_styleClass$$.length) {
        var $i$$187$$, $j$$27$$, $alreadyAdded$$, $columnIdx$$12$$, $columnIdxsCount$$, $elementsCount$$ = $elements$$1_styleClass$$.length;
        for ($i$$187$$ = 0;$i$$187$$ < $elementsCount$$;$i$$187$$++) {
          $columnIdx$$12$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($elements$$1_styleClass$$.get($i$$187$$)));
          $alreadyAdded$$ = !1;
          $columnIdxsCount$$ = $columnIdxs$$.length;
          for ($j$$27$$ = 0;$j$$27$$ < $columnIdxsCount$$;$j$$27$$++) {
            $columnIdxs$$[$j$$27$$] == $columnIdx$$12$$ && ($alreadyAdded$$ = !0);
          }
          $alreadyAdded$$ || $columnIdxs$$.push($columnIdx$$12$$);
        }
      }
      return $columnIdxs$$;
    }, $_getColumnKeyForColumnIdx$:function($columnIdx$$13$$) {
      var $columns$$2$$ = this.$_getColumnDefs$();
      return null != $columns$$2$$ && $columnIdx$$13$$ < $columns$$2$$.length ? $columns$$2$$[$columnIdx$$13$$][this.$_FIELD_ID$] : null;
    }, $_getColumnRenderer$:function($columnIdx$$14$$, $type$$79$$) {
      var $column$$5$$ = this.$_getColumnDefs$()[$columnIdx$$14$$];
      return "cell" == $type$$79$$ ? $column$$5$$.renderer : "footer" == $type$$79$$ ? $column$$5$$.footerRenderer : "header" == $type$$79$$ ? $column$$5$$.headerRenderer : null;
    }, $_getCurrentRow$:function() {
      return this.$_getData$() ? this.$_currentRow$ : null;
    }, $_getData$:function() {
      if (!this.$_data$ && null != this.options.data) {
        var $data$$108$$ = this.options.data;
        if ($data$$108$$ instanceof $oj$$14$$.$TableDataSource$ || $data$$108$$ instanceof $oj$$14$$.$PagingTableDataSource$) {
          this.$_data$ = $data$$108$$;
        } else {
          throw Error(this.$_LOGGER_MSG$.$_ERR_DATA_INVALID_TYPE_SUMMARY$ + "\n" + this.$_LOGGER_MSG$.$_ERR_DATA_INVALID_TYPE_DETAIL$);
        }
        this.$_registerDataSourceEventListeners$();
      }
      return this.$_data$;
    }, $_getFocusedHeaderColumnIdx$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0];
    }, $_getFocusedRowIdx$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0];
    }, $_getHeaderColumnFocus$:function($columnIdx$$15$$) {
      return this.$_getHeaderColumnState$($columnIdx$$15$$).$focused$;
    }, $_getHeaderColumnSelection$:function($columnIdx$$16$$) {
      return this.$_getHeaderColumnState$($columnIdx$$16$$).selected;
    }, $_getColumnSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode[this.$_CONST_COLUMN$];
    }, $_getHeaderColumnState$:function($columnIdx$$17_headerColumn$$1$$) {
      $columnIdx$$17_headerColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$17_headerColumn$$1$$);
      return{$focused$:$columnIdx$$17_headerColumn$$1$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), selected:$columnIdx$$17_headerColumn$$1$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)};
    }, $_getKeyboardKeys$:function() {
      this.$_keyboardKeys$ || (this.$_keyboardKeys$ = []);
      return this.$_keyboardKeys$.reverse();
    }, $_getLastHeaderColumnSelection$:function() {
      return null != this.$_lastSelectedColumnIdxArray$ && 0 < this.$_lastSelectedColumnIdxArray$.length ? this.$_lastSelectedColumnIdxArray$[0] : null;
    }, $_getLastRowSelection$:function() {
      return null != this.$_lastSelectedRowIdxArray$ && 0 < this.$_lastSelectedRowIdxArray$.length ? this.$_lastSelectedRowIdxArray$[0] : null;
    }, $_getRowIdxRowArray$:function($resultObject$$, $startIndex$$16$$) {
      var $rowIdxRowArray$$ = [];
      if (null != $resultObject$$) {
        var $i$$188$$, $indexesCount$$ = $resultObject$$[this.$_CONST_INDEXES$].length;
        for ($i$$188$$ = 0;$i$$188$$ < $indexesCount$$;$i$$188$$++) {
          $rowIdxRowArray$$.push({row:{data:$resultObject$$[this.$_CONST_DATA$][$i$$188$$], key:$resultObject$$[this.$_CONST_KEYS$][$i$$188$$], index:$resultObject$$[this.$_CONST_INDEXES$][$i$$188$$]}, $rowIdx$:$startIndex$$16$$ + $i$$188$$});
        }
      }
      return $rowIdxRowArray$$;
    }, $_getRowIdxForRowKey$:function($rowKey$$3$$) {
      var $tableBodyRows$$2$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $tableBodyRows$$2$$ && 0 < $tableBodyRows$$2$$.length) {
        var $i$$189$$, $tableBodyRowsCount$$ = $tableBodyRows$$2$$.length;
        for ($i$$189$$ = 0;$i$$189$$ < $tableBodyRowsCount$$;$i$$189$$++) {
          if ($oj$$14$$.$Object$.$compareValues$($$$$14$$($tableBodyRows$$2$$[$i$$189$$]).data("rowKey"), $rowKey$$3$$)) {
            return $i$$189$$;
          }
        }
      }
      return null;
    }, $_getDataSourceRowIndexForRowKey$:function($data$$109_rowKey$$4$$) {
      var $startIndex$$17_tableBodyRows$$3$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $startIndex$$17_tableBodyRows$$3$$ && 0 < $startIndex$$17_tableBodyRows$$3$$.length) {
        var $i$$190$$, $tableBodyRowsCount$$1$$ = $startIndex$$17_tableBodyRows$$3$$.length;
        for ($i$$190$$ = 0;$i$$190$$ < $tableBodyRowsCount$$1$$;$i$$190$$++) {
          if ($oj$$14$$.$Object$.$compareValues$($$$$14$$($startIndex$$17_tableBodyRows$$3$$[$i$$190$$]).data("rowKey"), $data$$109_rowKey$$4$$)) {
            return $data$$109_rowKey$$4$$ = this.$_getData$(), $startIndex$$17_tableBodyRows$$3$$ = 0, $data$$109_rowKey$$4$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($startIndex$$17_tableBodyRows$$3$$ = $data$$109_rowKey$$4$$.getStartItemIndex()), $i$$190$$ + $startIndex$$17_tableBodyRows$$3$$;
          }
        }
      }
      return null;
    }, $_getRowIdxsForElementsWithStyleClass$:function($elements$$2_styleClass$$1$$) {
      $elements$$2_styleClass$$1$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$2_styleClass$$1$$);
      var $rowIdxs$$ = [];
      if ($elements$$2_styleClass$$1$$ && 0 < $elements$$2_styleClass$$1$$.length) {
        var $i$$191$$, $j$$28$$, $rowIdx$$8$$, $rowIdxsCount$$, $alreadyAdded$$1$$, $elementsCount$$1$$ = $elements$$2_styleClass$$1$$.length;
        for ($i$$191$$ = 0;$i$$191$$ < $elementsCount$$1$$;$i$$191$$++) {
          $rowIdx$$8$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($elements$$2_styleClass$$1$$.get($i$$191$$)));
          $alreadyAdded$$1$$ = !1;
          $rowIdxsCount$$ = $rowIdxs$$.length;
          for ($j$$28$$ = 0;$j$$28$$ < $rowIdxsCount$$;$j$$28$$++) {
            $rowIdxs$$[$j$$28$$] == $rowIdx$$8$$ && ($alreadyAdded$$1$$ = !0);
          }
          $alreadyAdded$$1$$ || $rowIdxs$$.push($rowIdx$$8$$);
        }
      }
      return $rowIdxs$$;
    }, $_getRowKeyForDataSourceRowIndex$:function($rowIndex$$3$$) {
      var $tableBodyRows$$4$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $tableBodyRows$$4$$ && 0 < $tableBodyRows$$4$$.length) {
        var $data$$110_i$$192$$ = this.$_getData$(), $startIndex$$18$$ = 0;
        $data$$110_i$$192$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($startIndex$$18$$ = $data$$110_i$$192$$.getStartItemIndex());
        for (var $tableBodyRowsCount$$2$$ = $tableBodyRows$$4$$.length, $data$$110_i$$192$$ = 0;$data$$110_i$$192$$ < $tableBodyRowsCount$$2$$;$data$$110_i$$192$$++) {
          if ($startIndex$$18$$ + $data$$110_i$$192$$ == $rowIndex$$3$$) {
            return $$$$14$$($tableBodyRows$$4$$[$data$$110_i$$192$$]).data("rowKey");
          }
        }
      }
      return null;
    }, $_getRowKeyForRowIdx$:function($rowIdx$$9_tableBodyRow$$4$$) {
      $rowIdx$$9_tableBodyRow$$4$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$9_tableBodyRow$$4$$);
      return null != $rowIdx$$9_tableBodyRow$$4$$ ? $rowIdx$$9_tableBodyRow$$4$$.data("rowKey") : null;
    }, $_getRowRenderer$:function() {
      return this.options.rowRenderer;
    }, $_getRowSelection$:function($rowIdx$$10$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$10$$).hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getRowSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode[this.$_CONST_ROW$];
    }, $_getSelectedHeaderColumnIdxs$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getSelectedRowIdxs$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getSelection$:function() {
      var $rangeArray_selectedRowIdxs$$1$$ = this.$_getSelectedRowIdxs$(), $rangeCount_selectedColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$(), $selectionIdxs$$ = null, $rowSelection$$ = !0;
      if (null != $rangeArray_selectedRowIdxs$$1$$ && 0 < $rangeArray_selectedRowIdxs$$1$$.length) {
        $selectionIdxs$$ = $rangeArray_selectedRowIdxs$$1$$;
      } else {
        if (null != $rangeCount_selectedColumnIdxs$$ && 0 < $rangeCount_selectedColumnIdxs$$.length) {
          $selectionIdxs$$ = $rangeCount_selectedColumnIdxs$$, $rowSelection$$ = !1;
        } else {
          return null;
        }
      }
      var $rangeArray_selectedRowIdxs$$1$$ = [], $rangeCount_selectedColumnIdxs$$ = 0, $previousIdx$$ = null, $rangeObj$$, $selectionIndex$$, $selectionIdx$$, $selectionKey$$, $i$$193$$, $selectionIdxsCount$$ = $selectionIdxs$$.length;
      for ($i$$193$$ = 0;$i$$193$$ < $selectionIdxsCount$$;$i$$193$$++) {
        $selectionIdx$$ = $selectionIdxs$$[$i$$193$$], 0 == $i$$193$$ ? ($rangeObj$$ = {}, $rangeObj$$[this.$_CONST_STARTINDEX$] = {}, $rangeObj$$[this.$_CONST_ENDINDEX$] = {}, $rangeObj$$.startKey = {}, $rangeObj$$.endKey = {}, $rowSelection$$ ? ($selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), $rangeObj$$.startKey[this.$_CONST_ROW$] = $selectionKey$$, $rangeObj$$.endKey[this.$_CONST_ROW$] = $selectionKey$$, 
        $rangeObj$$[this.$_CONST_STARTINDEX$][this.$_CONST_ROW$] = $selectionIndex$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_ROW$] = $selectionIndex$$) : ($rangeObj$$[this.$_CONST_STARTINDEX$][this.$_CONST_COLUMN$] = $selectionIdx$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_COLUMN$] = $selectionIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.startKey[this.$_CONST_COLUMN$] = $selectionKey$$, $rangeObj$$.endKey[this.$_CONST_COLUMN$] = $selectionKey$$), 
        $rangeArray_selectedRowIdxs$$1$$[0] = $rangeObj$$) : ($rangeObj$$ = $rangeArray_selectedRowIdxs$$1$$[$rangeCount_selectedColumnIdxs$$], $rowSelection$$ ? ($selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), $rangeObj$$.endKey[this.$_CONST_ROW$] = $selectionKey$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_ROW$] = $selectionIndex$$) : ($rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_COLUMN$] = $selectionIdx$$, 
        $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.endKey[this.$_CONST_COLUMN$] = $selectionKey$$), $selectionIdx$$ != $previousIdx$$ + 1 && ($rowSelection$$ ? ($selectionKey$$ = this.$_getRowKeyForRowIdx$($previousIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), $rangeObj$$.endKey[this.$_CONST_ROW$] = $selectionKey$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_ROW$] = $selectionIndex$$, $rangeObj$$ = {}, $rangeObj$$[this.$_CONST_STARTINDEX$] = 
        {}, $rangeObj$$[this.$_CONST_ENDINDEX$] = {}, $rangeObj$$.startKey = {}, $rangeObj$$.endKey = {}, $selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), $rangeObj$$.startKey[this.$_CONST_ROW$] = $selectionKey$$, $rangeObj$$.endKey[this.$_CONST_ROW$] = $selectionKey$$, $rangeObj$$[this.$_CONST_STARTINDEX$][this.$_CONST_ROW$] = $selectionIndex$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_ROW$] = $selectionIndex$$) : 
        ($rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_COLUMN$] = $previousIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($previousIdx$$), $rangeObj$$.endKey[this.$_CONST_COLUMN$] = $selectionKey$$, $rangeObj$$ = {}, $rangeObj$$[this.$_CONST_STARTINDEX$] = {}, $rangeObj$$[this.$_CONST_ENDINDEX$] = {}, $rangeObj$$.startKey = {}, $rangeObj$$.endKey = {}, $rangeObj$$[this.$_CONST_STARTINDEX$][this.$_CONST_COLUMN$] = $selectionIdx$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_COLUMN$] = 
        $selectionIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.startKey[this.$_CONST_COLUMN$] = $selectionKey$$, $rangeObj$$.endKey[this.$_CONST_COLUMN$] = $selectionKey$$), $rangeCount_selectedColumnIdxs$$++, $rangeArray_selectedRowIdxs$$1$$[$rangeCount_selectedColumnIdxs$$] = $rangeObj$$)), $previousIdx$$ = $selectionIdx$$;
      }
      return $rangeArray_selectedRowIdxs$$1$$;
    }, $_getSortedTableHeaderColumnIdx$:function() {
      var $tableHeaderColumns$$ = this.$_getTableDomUtils$().$getTableHeaderColumns$(), $i$$194$$, $sorted$$3$$, $tableHeaderColumnsCount$$ = $tableHeaderColumns$$.length;
      for ($i$$194$$ = 0;$i$$194$$ < $tableHeaderColumnsCount$$;$i$$194$$++) {
        if ($sorted$$3$$ = $$$$14$$($tableHeaderColumns$$[$i$$194$$]).data("sorted"), null != $sorted$$3$$) {
          return $i$$194$$;
        }
      }
      return null;
    }, $_getTabbableElements$:function($element$$95_tabbableElements$$) {
      $element$$95_tabbableElements$$ = $element$$95_tabbableElements$$.find(":tabbable");
      return null != $element$$95_tabbableElements$$ && 0 < $element$$95_tabbableElements$$.length ? $element$$95_tabbableElements$$ : null;
    }, $_getTableDndContext$:function() {
      this.$_tableDndContext$ || (this.$_tableDndContext$ = new $oj$$14$$.$TableDndContext$(this));
      return this.$_tableDndContext$;
    }, $_getTableDomUtils$:function() {
      this.$_tableDomUtils$ || (this.$_tableDomUtils$ = new $oj$$14$$.$TableDomUtils$(this));
      return this.$_tableDomUtils$;
    }, $_getTouchEventTargetElement$:function($event$$192_eventLocation$$) {
      $event$$192_eventLocation$$ = $event$$192_eventLocation$$.originalEvent.changedTouches[0];
      return $$$$14$$(document.elementFromPoint($event$$192_eventLocation$$.clientX, $event$$192_eventLocation$$.clientY));
    }, $_handleContextMenuSelect$:function($event$$193$$, $ui$$5$$) {
      var $menuItemCommand$$ = $ui$$5$$.item.attr("data-oj-command"), $headerColumn$$2$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-column-header-cell"), $tableBodyCell$$1$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-data-cell"), $columnIdx$$18$$ = null;
      null != $headerColumn$$2$$ && ($columnIdx$$18$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($headerColumn$$2$$));
      null != $tableBodyCell$$1$$ && ($columnIdx$$18$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($tableBodyCell$$1$$));
      "oj-table-sortAsc" == $menuItemCommand$$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$18$$, !0, $event$$193$$) : "oj-table-sortDsc" == $menuItemCommand$$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$18$$, !1, $event$$193$$) : "oj-table-enableNonContiguousSelection" == $menuItemCommand$$ ? (this.$_nonContiguousSelection$ = !0, $ui$$5$$.item.attr("data-oj-command", "oj-table-disableNonContiguousSelection"), $ui$$5$$.item.children().first().text(this.$getTranslatedString$("labelDisableNonContiguousSelection"))) : 
      "oj-table-disableNonContiguousSelection" == $menuItemCommand$$ && (this.$_nonContiguousSelection$ = !1, $ui$$5$$.item.attr("data-oj-command", "oj-table-enableNonContiguousSelection"), $ui$$5$$.item.children().first().text(this.$getTranslatedString$("labelEnableNonContiguousSelection")));
    }, $_handleDataError$:function($error$$29$$) {
      this.$_clearDataWaitingState$();
      $oj$$14$$.$Logger$.error($error$$29$$);
    }, $_handleDataFetchStart$:function() {
      this.$_setDataWaitingState$();
    }, $_handleDataFetchEnd$:function($event$$195$$) {
      try {
        var $self$$100$$ = this;
        this.$_queueTask$(function() {
          var $offset$$22$$ = 0, $data$$111_indexArray$$ = $self$$100$$.$_getData$();
          $data$$111_indexArray$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($offset$$22$$ = $data$$111_indexArray$$.getStartItemIndex());
          var $data$$111_indexArray$$ = [], $i$$195$$, $eventDataCount$$ = $event$$195$$[$self$$100$$.$_CONST_DATA$].length;
          for ($i$$195$$ = 0;$i$$195$$ < $eventDataCount$$;$i$$195$$++) {
            $data$$111_indexArray$$[$i$$195$$] = $i$$195$$ + $offset$$22$$ + $event$$195$$[$self$$100$$.$_CONST_STARTINDEX$];
          }
          $self$$100$$.$_refreshAll$({data:$event$$195$$[$self$$100$$.$_CONST_DATA$], keys:$event$$195$$[$self$$100$$.$_CONST_KEYS$], indexes:$data$$111_indexArray$$}, $event$$195$$[$self$$100$$.$_CONST_STARTINDEX$]);
        });
      } catch ($e$$83$$) {
        $oj$$14$$.$Logger$.error($e$$83$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRefresh$:function() {
      try {
        var $fetchPromise$$ = this.$_invokeDataFetchRows$(), $self$$101$$ = this;
        this.$_queueTask$(function() {
          $self$$101$$.$_setCurrentRow$(null, null);
          return $fetchPromise$$;
        });
      } catch ($e$$84$$) {
        $oj$$14$$.$Logger$.error($e$$84$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataReset$:function() {
      try {
        this.$_initFetch$();
        var $self$$102$$ = this;
        this.$_queueTask$(function() {
          $self$$102$$.$_setCurrentRow$(null, null);
        });
      } catch ($e$$85$$) {
        $oj$$14$$.$Logger$.error($e$$85$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRowAdd$:function($event$$198_startIndex$$19$$) {
      try {
        var $data$$112_rowArray$$ = this.$_getData$(), $eventData$$5$$ = $event$$198_startIndex$$19$$[this.$_CONST_DATA$], $eventIndexes$$ = $event$$198_startIndex$$19$$[this.$_CONST_INDEXES$], $eventKeys$$ = $event$$198_startIndex$$19$$[this.$_CONST_KEYS$];
        $eventData$$5$$ instanceof Array || ($eventData$$5$$ = [$eventData$$5$$]);
        $event$$198_startIndex$$19$$ = 0;
        $data$$112_rowArray$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($event$$198_startIndex$$19$$ = $data$$112_rowArray$$.getStartItemIndex());
        var $data$$112_rowArray$$ = [], $i$$196$$, $eventDataCount$$1$$ = $eventData$$5$$.length;
        for ($i$$196$$ = 0;$i$$196$$ < $eventDataCount$$1$$;$i$$196$$++) {
          var $rowIdx$$11$$ = $eventIndexes$$[$i$$196$$] - $event$$198_startIndex$$19$$;
          void 0 !== $rowIdx$$11$$ && $data$$112_rowArray$$.push({row:{data:$eventData$$5$$[$i$$196$$], key:$eventKeys$$[$i$$196$$], index:$eventIndexes$$[$i$$196$$]}, $rowIdx$:$rowIdx$$11$$});
        }
        0 < $data$$112_rowArray$$.length && this.$_executeTableBodyRowsAdd$($data$$112_rowArray$$);
      } catch ($e$$86$$) {
        $oj$$14$$.$Logger$.error($e$$86$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRowChange$:function($event$$199_startIndex$$20$$) {
      try {
        var $data$$113_rowArray$$1$$ = this.$_getData$(), $eventData$$6$$ = $event$$199_startIndex$$20$$[this.$_CONST_DATA$], $eventIndexes$$1$$ = $event$$199_startIndex$$20$$[this.$_CONST_INDEXES$], $eventKeys$$1$$ = $event$$199_startIndex$$20$$[this.$_CONST_KEYS$];
        $eventData$$6$$ instanceof Array || ($eventData$$6$$ = [$eventData$$6$$]);
        $event$$199_startIndex$$20$$ = 0;
        $data$$113_rowArray$$1$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($event$$199_startIndex$$20$$ = $data$$113_rowArray$$1$$.getStartItemIndex());
        var $data$$113_rowArray$$1$$ = [], $i$$197$$, $eventDataCount$$2$$ = $eventData$$6$$.length;
        for ($i$$197$$ = 0;$i$$197$$ < $eventDataCount$$2$$;$i$$197$$++) {
          var $rowIdx$$12$$ = $eventIndexes$$1$$[$i$$197$$] - $event$$199_startIndex$$20$$;
          void 0 !== $rowIdx$$12$$ && $data$$113_rowArray$$1$$.push({row:{data:$eventData$$6$$[$i$$197$$], key:$eventKeys$$1$$[$i$$197$$], index:$eventIndexes$$1$$[$i$$197$$]}, $rowIdx$:$rowIdx$$12$$});
        }
        0 < $data$$113_rowArray$$1$$.length && this.$_executeTableBodyRowsChange$($data$$113_rowArray$$1$$);
      } catch ($e$$87$$) {
        $oj$$14$$.$Logger$.error($e$$87$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRowRemove$:function($event$$200_startIndex$$21$$) {
      try {
        var $data$$114_rowArray$$2$$ = this.$_getData$(), $eventData$$7$$ = $event$$200_startIndex$$21$$[this.$_CONST_DATA$], $eventIndexes$$2$$ = $event$$200_startIndex$$21$$[this.$_CONST_INDEXES$], $eventKeys$$2$$ = $event$$200_startIndex$$21$$[this.$_CONST_KEYS$];
        $eventData$$7$$ instanceof Array || ($eventData$$7$$ = [$eventData$$7$$]);
        $event$$200_startIndex$$21$$ = 0;
        $data$$114_rowArray$$2$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($event$$200_startIndex$$21$$ = $data$$114_rowArray$$2$$.getStartItemIndex());
        var $data$$114_rowArray$$2$$ = [], $i$$198$$;
        for ($i$$198$$ = $eventData$$7$$.length - 1;0 <= $i$$198$$;$i$$198$$--) {
          var $rowIdx$$13$$ = $eventIndexes$$2$$[$i$$198$$] - $event$$200_startIndex$$21$$;
          void 0 !== $rowIdx$$13$$ && $data$$114_rowArray$$2$$.push({row:{data:$eventData$$7$$[$i$$198$$], key:$eventKeys$$2$$[$i$$198$$], index:$eventIndexes$$2$$[$i$$198$$]}, $rowIdx$:$rowIdx$$13$$});
        }
        0 < $data$$114_rowArray$$2$$.length && this.$_executeTableBodyRowsRemove$($data$$114_rowArray$$2$$);
      } catch ($e$$88$$) {
        $oj$$14$$.$Logger$.error($e$$88$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataSort$:function($clearSelection_event$$201$$) {
      try {
        var $columnIdx$$19$$;
        if (null != $clearSelection_event$$201$$) {
          var $columns$$4$$ = this.$_getColumnDefs$(), $i$$199$$, $column$$6$$, $sortField$$, $columnsCount$$2$$ = $columns$$4$$.length;
          for ($i$$199$$ = 0;$i$$199$$ < $columnsCount$$2$$;$i$$199$$++) {
            if ($column$$6$$ = $columns$$4$$[$i$$199$$], $sortField$$ = null == $column$$6$$.sortProperty ? $column$$6$$.field : $column$$6$$.sortProperty, $clearSelection_event$$201$$.header == $sortField$$) {
              $columnIdx$$19$$ = $i$$199$$;
              break;
            }
          }
          null != $columnIdx$$19$$ && this.$_refreshSortTableHeaderColumn$($columnIdx$$19$$, $clearSelection_event$$201$$.direction == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$);
        }
        var $existingSelection$$ = this.options.selection;
        if (null != $existingSelection$$) {
          $clearSelection_event$$201$$ = !1;
          if (1 < $existingSelection$$.length) {
            $clearSelection_event$$201$$ = !0;
          } else {
            if (null != $existingSelection$$[0]) {
              var $endIndex$$1$$ = $existingSelection$$[0][this.$_CONST_ENDINDEX$];
              $oj$$14$$.$Object$.$compareValues$($existingSelection$$[0][this.$_CONST_STARTINDEX$], $endIndex$$1$$) || null == $endIndex$$1$$ || ($clearSelection_event$$201$$ = !0);
            }
          }
          $clearSelection_event$$201$$ && (this.$_setSelection$(null), this.option("selection", null, {_context:{$writeback$:!0, $internalSet$:!0}}));
        }
        this.$_setCurrentRow$(this.options.currentRow, null);
        var $self$$103$$ = this;
        this.$_queueTask$(function() {
          return $self$$103$$.$_isLoadMoreOnScroll$() ? $self$$103$$.$_invokeDataFetchRows$(0, null) : $self$$103$$.$_invokeDataFetchRows$(null);
        }).then(function() {
          null != $columnIdx$$19$$ && setTimeout(function() {
            $self$$103$$.$_scrollColumnIntoViewport$($columnIdx$$19$$);
          }, 0);
        });
      } catch ($e$$89$$) {
        $oj$$14$$.$Logger$.error($e$$89$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleKeydownLeftRight$:function($event$$202$$) {
      var $focusedHeaderColumnIdx$$2$$ = this.$_getFocusedHeaderColumnIdx$(), $columns$$5_newFocusedHeaderColumnSelection$$ = this.$_getColumnDefs$();
      if (null != $focusedHeaderColumnIdx$$2$$) {
        var $newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$2$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) ? $newFocusedHeaderColumnIdx$$ = 0 < $focusedHeaderColumnIdx$$2$$ ? $focusedHeaderColumnIdx$$2$$ - 1 : $focusedHeaderColumnIdx$$2$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) && ($newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$2$$ < $columns$$5_newFocusedHeaderColumnSelection$$.length - 1 ? $focusedHeaderColumnIdx$$2$$ + 1 : $focusedHeaderColumnIdx$$2$$);
        $newFocusedHeaderColumnIdx$$ != $focusedHeaderColumnIdx$$2$$ && (this.$_setHeaderColumnFocus$($newFocusedHeaderColumnIdx$$, !0, !1, null), $event$$202$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($columns$$5_newFocusedHeaderColumnSelection$$ = this.$_getHeaderColumnSelection$($newFocusedHeaderColumnIdx$$), this.$_setHeaderColumnSelection$($newFocusedHeaderColumnIdx$$, !$columns$$5_newFocusedHeaderColumnSelection$$, null, $event$$202$$, !0), $columns$$5_newFocusedHeaderColumnSelection$$ && 
        this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$2$$) && this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$2$$, !1, null, $event$$202$$, !0)));
      }
    }, $_handleKeydownTab$:function($event$$203$$) {
      var $tabHandled_tabbableElementsInDocument$$ = !1, $focusedRowIdx$$3_tabbableElementsInDocumentCount_tabbableElementsInRow_tableBodyRow$$5$$ = this.$_getFocusedRowIdx$();
      if (null != $focusedRowIdx$$3_tabbableElementsInDocumentCount_tabbableElementsInRow_tableBodyRow$$5$$ && this.$_tableNavMode$) {
        var $currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$ = document.activeElement, $tableBody$$1_tableTabIndex$$ = this.$_getTableDomUtils$().$getTableBody$();
        if ($$$$14$$.contains($tableBody$$1_tableTabIndex$$[0], $currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$)) {
          return;
        }
        $currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$ = this.$_getTabbableElements$($tableBody$$1_tableTabIndex$$);
        null == $currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$ || $event$$203$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] || ($tabHandled_tabbableElementsInDocument$$ = !0, $focusedRowIdx$$3_tabbableElementsInDocumentCount_tabbableElementsInRow_tableBodyRow$$5$$ = this.$_getTableDomUtils$().$getTableBodyRow$($focusedRowIdx$$3_tabbableElementsInDocumentCount_tabbableElementsInRow_tableBodyRow$$5$$), $focusedRowIdx$$3_tabbableElementsInDocumentCount_tabbableElementsInRow_tableBodyRow$$5$$ = 
        this.$_getTabbableElements$($focusedRowIdx$$3_tabbableElementsInDocumentCount_tabbableElementsInRow_tableBodyRow$$5$$), null != $focusedRowIdx$$3_tabbableElementsInDocumentCount_tabbableElementsInRow_tableBodyRow$$5$$ ? $$$$14$$($focusedRowIdx$$3_tabbableElementsInDocumentCount_tabbableElementsInRow_tableBodyRow$$5$$[0]).focus() : $$$$14$$($currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$[0]).focus(), $event$$203$$.preventDefault(), 
        $event$$203$$.stopPropagation());
      }
      if (!$tabHandled_tabbableElementsInDocument$$) {
        $currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$ = this.$_getTableDomUtils$().$getTable$();
        $tabHandled_tabbableElementsInDocument$$ = this.$_getTabbableElements$($$$$14$$(document));
        $focusedRowIdx$$3_tabbableElementsInDocumentCount_tabbableElementsInRow_tableBodyRow$$5$$ = $tabHandled_tabbableElementsInDocument$$.length;
        $currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$ = this.$_getTabbableElements$($currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$);
        $currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$ = null != $currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$ ? $currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$.length : 0;
        $tableBody$$1_tableTabIndex$$ = $tabHandled_tabbableElementsInDocument$$.index(this.$_getTableDomUtils$().$getTable$());
        if ($event$$203$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
          if (0 <= $tableBody$$1_tableTabIndex$$) {
            if (0 == $tableBody$$1_tableTabIndex$$) {
              return;
            }
            $$$$14$$($tabHandled_tabbableElementsInDocument$$[$tableBody$$1_tableTabIndex$$ - 1]).focus();
          } else {
            return;
          }
        } else {
          if ($tableBody$$1_tableTabIndex$$ == $focusedRowIdx$$3_tabbableElementsInDocumentCount_tabbableElementsInRow_tableBodyRow$$5$$ - 1) {
            return;
          }
          $$$$14$$($tabHandled_tabbableElementsInDocument$$[$tableBody$$1_tableTabIndex$$ + $currentFocusElement_tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$2$$ + 1]).focus();
        }
        $event$$203$$.preventDefault();
        $event$$203$$.stopPropagation();
      }
      this.$_removeKeyboardKey$($event$$203$$.keyCode);
    }, $_handleKeydownUpDown$:function($event$$204$$) {
      var $focusedRowIdx$$4$$ = this.$_getFocusedRowIdx$(), $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedRowIdx$$4$$) {
        var $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = this.$_getTableDomUtils$().$getTableBodyRows$(), $newFocusedRowSelection_rowCount$$2$$ = null != $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ ? $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$.length : 0, $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = $focusedRowIdx$$4$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) ? $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = 0 < $focusedRowIdx$$4$$ ? $focusedRowIdx$$4$$ - 1 : $focusedRowIdx$$4$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && ($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = $focusedRowIdx$$4$$ < $newFocusedRowSelection_rowCount$$2$$ - 1 ? $focusedRowIdx$$4$$ + 1 : $focusedRowIdx$$4$$);
        $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ != $focusedRowIdx$$4$$ ? this.$_setRowFocus$($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$, !0, !0, null, $event$$204$$) && $event$$204$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($newFocusedRowSelection_rowCount$$2$$ = this.$_getRowSelection$($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$), this.$_setRowSelection$($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$, !$newFocusedRowSelection_rowCount$$2$$, 
        null, $event$$204$$, !0), $newFocusedRowSelection_rowCount$$2$$ && this.$_getRowSelection$($focusedRowIdx$$4$$) && this.$_setRowSelection$($focusedRowIdx$$4$$, !1, null, $event$$204$$, !0)) : $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ == $focusedRowIdx$$4$$ && 0 == $focusedRowIdx$$4$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) && this.$_setHeaderColumnFocus$(0, !0, !1, null);
      } else {
        null != $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && this.$_setRowFocus$(0, !0, !0, null, $event$$204$$);
      }
    }, $_handleKeyupEnd$:function($event$$205$$) {
      var $focusedColumnIdx_focusedRowIdx$$5$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedColumnIdx_focusedRowIdx$$5$$ && $focusedColumnIdx_focusedRowIdx$$5$$ != this.$_getColumnDefs$().length - 1) {
        this.$_setHeaderColumnFocus$(this.$_getColumnDefs$().length - 1, !0, !1, null);
      } else {
        var $focusedColumnIdx_focusedRowIdx$$5$$ = this.$_getFocusedRowIdx$(), $rowCount$$3_tableBodyRows$$6$$ = this.$_getTableDomUtils$().$getTableBodyRows$(), $rowCount$$3_tableBodyRows$$6$$ = null != $rowCount$$3_tableBodyRows$$6$$ ? $rowCount$$3_tableBodyRows$$6$$.length : 0;
        null != $focusedColumnIdx_focusedRowIdx$$5$$ && $focusedColumnIdx_focusedRowIdx$$5$$ != $rowCount$$3_tableBodyRows$$6$$ - 1 && 0 < $rowCount$$3_tableBodyRows$$6$$ && this.$_setRowFocus$($rowCount$$3_tableBodyRows$$6$$ - 1, !0, !0, null, $event$$205$$);
      }
    }, $_handleKeyupEnter$:function($event$$206$$) {
      var $focusedColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedColumnIdx$$1$$ && this.$_getColumnDefs$()[$focusedColumnIdx$$1$$].sortable == this.$_OPTION_ENABLED$) {
        var $sorted$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($focusedColumnIdx$$1$$).data("sorted");
        null == $sorted$$4$$ || $sorted$$4$$ == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !0, $event$$206$$) : this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !1, $event$$206$$);
      }
    }, $_handleKeyupEsc$:function($event$$207$$) {
      $event$$207$$.preventDefault();
      $event$$207$$.stopPropagation();
      this.$_getTableDomUtils$().$getTable$().focus();
      this.$_setTableNavigationMode$(!1);
    }, $_handleKeyupHome$:function($event$$208$$) {
      var $focusedColumnIdx$$2_focusedRowIdx$$6$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedColumnIdx$$2_focusedRowIdx$$6$$ && 0 != $focusedColumnIdx$$2_focusedRowIdx$$6$$ ? this.$_setHeaderColumnFocus$(0, !0, !1, null) : ($focusedColumnIdx$$2_focusedRowIdx$$6$$ = this.$_getFocusedRowIdx$(), null != $focusedColumnIdx$$2_focusedRowIdx$$6$$ && 0 != $focusedColumnIdx$$2_focusedRowIdx$$6$$ && this.$_setRowFocus$(0, !0, !0, null, $event$$208$$));
    }, $_handleKeyupSpacebar$:function($event$$209$$) {
      var $focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ = this.$_getFocusedRowIdx$();
      null != $focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ ? this.$_setRowSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$, !this.$_getRowSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$), null, $event$$209$$, !0) : ($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ = this.$_getFocusedHeaderColumnIdx$(), null != $focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ && (this.$_clearSelectedRows$(), this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$, !this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$), 
      null, $event$$209$$, !0)));
    }, $_handleMouseEnterSelection$:function($element$$96$$) {
      var $rowIdx$$14$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($element$$96$$));
      if (null != $rowIdx$$14$$ && null != this.$_mouseDownRowIdx$ && this.$_mouseDownRowIdx$ != $rowIdx$$14$$) {
        var $lastSelectedRowIdx$$1$$ = this.$_mouseDownRowIdx$, $selectedRowIdxs$$2$$ = this.$_getSelectedRowIdxs$();
        if ($rowIdx$$14$$ < $lastSelectedRowIdx$$1$$) {
          var $i$$200$$;
          for ($i$$200$$ = 0;$i$$200$$ < $selectedRowIdxs$$2$$.length;$i$$200$$++) {
            ($selectedRowIdxs$$2$$[$i$$200$$] < $rowIdx$$14$$ || $selectedRowIdxs$$2$$[$i$$200$$] > $lastSelectedRowIdx$$1$$) && this.$_setRowSelection$($selectedRowIdxs$$2$$[$i$$200$$], !1, $element$$96$$, null, !0);
          }
          for ($i$$200$$ = $lastSelectedRowIdx$$1$$;$i$$200$$ >= $rowIdx$$14$$;$i$$200$$--) {
            this.$_setRowSelection$($i$$200$$, !0, $element$$96$$, null, !0), this.$_getTableDomUtils$().$moveTableBodyRowTouchSelectionAffordanceTop$($i$$200$$);
          }
        } else {
          for ($i$$200$$ = 0;$i$$200$$ < $selectedRowIdxs$$2$$.length;$i$$200$$++) {
            ($selectedRowIdxs$$2$$[$i$$200$$] > $rowIdx$$14$$ || $selectedRowIdxs$$2$$[$i$$200$$] < $lastSelectedRowIdx$$1$$) && this.$_setRowSelection$($selectedRowIdxs$$2$$[$i$$200$$], !1, $element$$96$$, null, !0);
          }
          for ($i$$200$$ = $lastSelectedRowIdx$$1$$;$i$$200$$ <= $rowIdx$$14$$;$i$$200$$++) {
            this.$_setRowSelection$($i$$200$$, !0, $element$$96$$, null, !0), this.$_getTableDomUtils$().$moveTableBodyRowTouchSelectionAffordanceBottom$($i$$200$$);
          }
        }
      }
    }, $_handleScrollerMaxRowCount$:function() {
      this.$_showInlineMessage$(this.$_LOGGER_MSG$.$_ERR_DOM_SCROLLER_MAX_COUNT_SUMMARY$, this.$_LOGGER_MSG$.$_ERR_DOM_SCROLLER_MAX_COUNT_DETAIL$, $oj$$14$$.$Message$.$SEVERITY_LEVEL$.WARNING);
    }, $_handleScrollerScrollLeft$:function($scrollLeft$$) {
      var $tableFooterRow_tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeader$(), $tableFooter$$ = this.$_getTableDomUtils$().$getTableFooter$();
      this.$_getTableDomUtils$().$isDivScroller$() ? ($tableFooterRow_tableHeader_tableHeaderRow$$ && ("rtl" === this.$_GetReadingDirection$() ? $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), $tableFooter$$ && ("rtl" === this.$_GetReadingDirection$() ? 
      $tableFooter$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableFooter$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$))) : (($tableFooterRow_tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeaderRow$()) && ("rtl" === this.$_GetReadingDirection$() ? $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, 
      "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), ($tableFooterRow_tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableFooterRow$()) && ("rtl" === this.$_GetReadingDirection$() ? $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : 
      $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)));
    }, $_handleSortTableHeaderColumn$:function($columnIdx$$20$$, $ascending$$, $event$$210$$) {
      this.$_clearSortedHeaderColumn$($columnIdx$$20$$);
      var $column$$7$$ = this.$_getColumnDefs$()[$columnIdx$$20$$];
      this.$_invokeDataSort$(null == $column$$7$$.sortProperty ? $column$$7$$.field : $column$$7$$.sortProperty, $ascending$$, $event$$210$$);
      this.$_sortColumn$ = $column$$7$$;
      this.$_refreshSortTableHeaderColumn$($columnIdx$$20$$, $ascending$$);
    }, $_hasRowOrCellRenderer$:function($columnIdx$$21_i$$201$$) {
      if (null != this.$_getRowRenderer$()) {
        return!0;
      }
      var $cellRenderer$$ = null;
      if (null != $columnIdx$$21_i$$201$$) {
        $cellRenderer$$ = this.$_getColumnRenderer$($columnIdx$$21_i$$201$$, "cell");
      } else {
        var $columnsCount$$3$$ = this.$_getColumnDefs$().length;
        for ($columnIdx$$21_i$$201$$ = 0;$columnIdx$$21_i$$201$$ < $columnsCount$$3$$ && ($cellRenderer$$ = this.$_getColumnRenderer$($columnIdx$$21_i$$201$$, "cell"), null == $cellRenderer$$);$columnIdx$$21_i$$201$$++) {
        }
      }
      return null != $cellRenderer$$ ? !0 : !1;
    }, $_hideInlineMessage$:function() {
      var $inlineMessage$$ = this.$_getTableDomUtils$().$getTableInlineMessage$();
      if ($inlineMessage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$) != $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$) {
        var $inlineMessageHeight$$ = $inlineMessage$$.outerHeight(), $tableContainer$$2$$ = this.$_getTableDomUtils$().$getTableContainer$(), $tableContainerBorderBottom$$ = parseInt($tableContainer$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_BOTTOM_WIDTH$), 10), $tableContainerMarginBottom$$ = parseInt($tableContainer$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$), 10);
        $tableContainer$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$, $tableContainerMarginBottom$$ - $tableContainerBorderBottom$$ - $inlineMessageHeight$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $tableContainer$$2$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$);
        $inlineMessage$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$);
        $inlineMessage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BOTTOM$, "");
        $inlineMessage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
      }
    }, $_hideNoDataMessage$:function() {
      var $noDataRow$$ = this.$_getTableDomUtils$().$getTableNoDataRow$();
      null != $noDataRow$$ && $noDataRow$$.remove();
    }, $_hideStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    }, $_hideTableHeaderColumnSortLink$:function($columnIdx$$22$$, $ascending$$1$$) {
      if (this.$_getColumnDefs$()[$columnIdx$$22$$].sortable == this.$_OPTION_ENABLED$) {
        var $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$22$$), $sorted$$5$$ = $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.data("sorted");
        !$ascending$$1$$ || null != $sorted$$5$$ && $sorted$$5$$ != this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? $ascending$$1$$ || null != $sorted$$5$$ && $sorted$$5$$ != this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ || ($headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$ = $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)) : ($headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$ = $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), 
        $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
      }
    }, $_initFetch$:function() {
      var $self$$104$$ = this, $data$$115$$ = this.$_getData$();
      null != $data$$115$$ && $data$$115$$ instanceof $oj$$14$$.$TableDataSource$ && !($data$$115$$ instanceof $oj$$14$$.$PagingTableDataSource$) ? (this.$_getTableDomUtils$().$getScroller$()[0].scrollTop = 0, this.$_queueTask$(function() {
        return $self$$104$$.$_invokeDataFetchRows$(0, {fetchType:"init"});
      })) : null == $data$$115$$ && this.$_queueTask$(function() {
        return Promise.resolve();
      });
    }, $_invokeDataFetchRows$:function($startIndex$$23$$, $options$$238$$) {
      $options$$238$$ = $options$$238$$ || {};
      $options$$238$$[this.$_CONST_STARTINDEX$] = $startIndex$$23$$;
      !$options$$238$$[this.$_CONST_PAGESIZE$] && this.$_isLoadMoreOnScroll$() && ($options$$238$$[this.$_CONST_PAGESIZE$] = this.options.scrollPolicyOptions.fetchSize);
      $options$$238$$.silent = !0;
      var $initFetch$$1$$ = "init" == $options$$238$$.fetchType ? !0 : !1, $data$$116$$ = this.$_getData$(), $self$$105$$ = this;
      return new Promise(function($resolve$$27$$, $reject$$27$$) {
        null != $data$$116$$ ? ($self$$105$$.$_setDataWaitingState$(), $data$$116$$.fetch($options$$238$$).then(function($result$$36$$) {
          if (null != $result$$36$$ && null != $result$$36$$[$self$$105$$.$_CONST_DATA$]) {
            var $offset$$23$$ = 0;
            $data$$116$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($offset$$23$$ = $data$$116$$.getStartItemIndex());
            var $indexArray$$1$$ = [], $i$$202$$, $resultDataCount$$ = $result$$36$$[$self$$105$$.$_CONST_DATA$].length;
            for ($i$$202$$ = 0;$i$$202$$ < $resultDataCount$$;$i$$202$$++) {
              $indexArray$$1$$[$i$$202$$] = $i$$202$$ + $offset$$23$$ + $result$$36$$[$self$$105$$.$_CONST_STARTINDEX$];
            }
            $self$$105$$.$_refreshAll$({data:$result$$36$$[$self$$105$$.$_CONST_DATA$], keys:$result$$36$$[$self$$105$$.$_CONST_KEYS$], indexes:$indexArray$$1$$}, $result$$36$$[$self$$105$$.$_CONST_STARTINDEX$], $initFetch$$1$$, $initFetch$$1$$);
          }
          $self$$105$$.$_clearDataWaitingState$();
          $resolve$$27$$(null);
        }, function($error$$30$$) {
          $self$$105$$.$_clearDataWaitingState$();
          $reject$$27$$($error$$30$$);
        })) : $resolve$$27$$(null);
      });
    }, $_invokeDataSort$:function($sortField$$2$$, $ascending$$2$$, $event$$211$$) {
      var $data$$117$$ = this.$_getData$();
      if (!$data$$117$$) {
        return null;
      }
      this.$_showStatusMessage$();
      var $sortCriteria$$ = {};
      $sortCriteria$$[this.$_CONST_KEY$] = $sortField$$2$$;
      $sortCriteria$$.direction = $ascending$$2$$ ? this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ : this.$_COLUMN_SORT_ORDER$.$_DESCENDING$;
      this._trigger("sort", $event$$211$$, {header:$sortCriteria$$[this.$_CONST_KEY$], direction:$sortCriteria$$.direction});
      $data$$117$$.sort($sortCriteria$$);
    }, $_isColumnMetadataUpdated$:function() {
      if (null != this.$_columnDefArray$) {
        var $columnsMetadata$$ = this.$_getColumnMetadata$();
        if (this.$_columnDefArray$.length != $columnsMetadata$$.length) {
          return!0;
        }
        var $i$$203$$, $prop$$61$$, $columnsMetadataCount$$ = $columnsMetadata$$.length;
        for ($i$$203$$ = 0;$i$$203$$ < $columnsMetadataCount$$;$i$$203$$++) {
          for ($prop$$61$$ in $columnsMetadata$$[$i$$203$$]) {
            if ($columnsMetadata$$[$i$$203$$].hasOwnProperty($prop$$61$$) && $columnsMetadata$$[$i$$203$$][$prop$$61$$] != this.$_columnDefArray$[$i$$203$$][$prop$$61$$]) {
              return!0;
            }
          }
        }
        return!1;
      }
      return!0;
    }, $_isKeyboardKeyPressed$:function($keyCode$$2$$) {
      var $keyboardKeys$$1$$ = this.$_getKeyboardKeys$(), $i$$204$$, $keyboardKeysCount$$1$$ = $keyboardKeys$$1$$.length;
      for ($i$$204$$ = 0;$i$$204$$ < $keyboardKeysCount$$1$$;$i$$204$$++) {
        if ($keyboardKeys$$1$$[$i$$204$$] == $keyCode$$2$$) {
          return!0;
        }
      }
      return!1;
    }, $_isLoadMoreOnScroll$:function() {
      return this.options.scrollPolicy == this.$_OPTION_SCROLL_POLICY$.$_LOADMORE_ON_SCROLL$ ? !0 : !1;
    }, $_isNodeEditable$:function($node$$56$$) {
      return this.$_isNodeType$($node$$56$$, /^INPUT|TEXTAREA/);
    }, $_isNodeClickable$:function($node$$57$$) {
      return this.$_isNodeType$($node$$57$$, /SELECT|OPTION|BUTTON|^A\b/);
    }, $_isNodeDraggable$:function($node$$58$$) {
      return 0 < $node$$58$$.closest("[draggable\x3d'true']").length;
    }, $_isNodeType$:function($node$$59$$, $type$$80$$) {
      for (var $nodeName$$3$$, $table$$3$$ = this.$_getTableDomUtils$().$getTable$();null != $node$$59$$ && $node$$59$$[0] != $table$$3$$[0] && "TD" != ($nodeName$$3$$ = $node$$59$$.prop("nodeName")) && "TH" != $nodeName$$3$$;) {
        if (3 == $node$$59$$[0].nodeType) {
          $node$$59$$ = $node$$59$$[0].parentNode;
        } else {
          var $tabIndex$$ = $node$$59$$.attr("tabIndex");
          if ($nodeName$$3$$.match($type$$80$$) && -1 != $tabIndex$$) {
            return!0;
          }
          $node$$59$$ = $node$$59$$.parentNode;
        }
      }
      return!1;
    }, $_isTableFooterless$:function() {
      var $i$$205$$, $footerRenderer$$, $columnsCount$$4$$ = this.$_getColumnDefs$().length;
      for ($i$$205$$ = 0;$i$$205$$ < $columnsCount$$4$$;$i$$205$$++) {
        if ($footerRenderer$$ = this.$_getColumnRenderer$($i$$205$$, "footer"), null != $footerRenderer$$) {
          return!1;
        }
      }
      return!0;
    }, $_isTableHeaderless$:function() {
      var $columns$$8$$ = this.$_getColumnDefs$(), $i$$206$$, $columnsCount$$5$$ = $columns$$8$$.length;
      for ($i$$206$$ = 0;$i$$206$$ < $columnsCount$$5$$;$i$$206$$++) {
        if (null != $columns$$8$$[$i$$206$$].headerText || null != $columns$$8$$[$i$$206$$].headerStyle || null != $columns$$8$$[$i$$206$$].sortable && $columns$$8$$[$i$$206$$].sortable != this.$_OPTION_NONE$ || null != $columns$$8$$[$i$$206$$].sortProperty || null != $columns$$8$$[$i$$206$$].headerRenderer) {
          return!1;
        }
      }
      return!0;
    }, $_isTableHeaderColumnsRendered$:function() {
      return!0 == this.$_renderedTableHeaderColumns$;
    }, $_isTableNavigationMode$:function() {
      return this.$_tableNavMode$;
    }, $_isTableRefreshNeeded$:function($key$$69$$, $value$$218$$) {
      var $currentOptions$$ = this.$_cachedOptions$, $refresh$$ = !1;
      "contextMenu" == $key$$69$$ && $value$$218$$ == "#" + this.$_getTableDomUtils$().$getTableId$() + "_contextmenu" ? $refresh$$ = !1 : "selection" == $key$$69$$ || "currentRow" == $key$$69$$ || $oj$$14$$.$Object$.$compareValues$($value$$218$$, $currentOptions$$[$key$$69$$]) || ($refresh$$ = !0);
      this.$_cachedOptions$ = $$$$14$$.extend(!0, {}, this.options);
      return $refresh$$;
    }, $_isTableSortable$:function() {
      var $columns$$9$$ = this.$_getColumnDefs$(), $i$$207$$, $columnsCount$$6$$ = $columns$$9$$.length;
      for ($i$$207$$ = 0;$i$$207$$ < $columnsCount$$6$$;$i$$207$$++) {
        if (null != $columns$$9$$[$i$$207$$].sortable && $columns$$9$$[$i$$207$$].sortable != this.$_OPTION_NONE$) {
          return!0;
        }
      }
      return!1;
    }, $_isTouchDevice$:function() {
      if (void 0 == this.$_isTouch$) {
        var $agentName$$ = navigator.userAgent.toLowerCase();
        -1 != $agentName$$.indexOf("mobile") || -1 != $agentName$$.indexOf("android") ? this.$_isTouch$ = !0 : this.$_isTouch$ = !1;
      }
      return this.$_isTouch$;
    }, $_refreshAll$:function($resultObject$$1$$, $startIndex$$24$$, $resetScrollTop$$, $resetScrollLeft$$) {
      if (this.$_isColumnMetadataUpdated$() || !this.$_isTableHeaderColumnsRendered$() && !this.$_isTableHeaderless$()) {
        if (this.$_clearCachedMetadata$(), this.$_refreshTableHeader$(), null != this.$_sortColumn$) {
          var $i$$208$$, $column$$8$$, $foundColumn$$ = !1, $columns$$10$$ = this.$_getColumnDefs$();
          if (null != $columns$$10$$) {
            var $columnsCount$$7$$ = $columns$$10$$.length;
            for ($i$$208$$ = 0;$i$$208$$ < $columnsCount$$7$$;$i$$208$$++) {
              if ($column$$8$$ = $columns$$10$$[$i$$208$$], $oj$$14$$.$Object$.$compareValues$($column$$8$$, this.$_sortColumn$)) {
                $foundColumn$$ = !0;
                break;
              }
            }
            $foundColumn$$ || this.$_getData$().sort(null);
          }
        }
      }
      this.$_refreshTableFooter$();
      this.$_refreshTableBody$($resultObject$$1$$, $startIndex$$24$$, $resetScrollTop$$, $resetScrollLeft$$);
    }, $_refreshSortTableHeaderColumn$:function($columnIdx$$23$$, $ascending$$3$$) {
      this.$_clearSortedHeaderColumn$($columnIdx$$23$$);
      var $tableHeaderColumn$$5$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$23$$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.data("sorted");
      $ascending$$3$$ && $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ != this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? ($tableHeaderColumn$$5$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_ASCENDING$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), this.$_hideTableHeaderColumnSortLink$($columnIdx$$23$$, !$ascending$$3$$)) : $ascending$$3$$ || $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ == 
      this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ || ($tableHeaderColumn$$5$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_DESCENDING$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$ = $tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$));
    }, $_refreshTableBody$:function($resultObject$$2_rows$$3$$, $startIndex$$25$$, $resetScrollTop$$1$$, $resetScrollLeft$$1$$) {
      var $tableBody$$2$$ = this.$_getTableDomUtils$().$getTableBody$();
      if (null != $tableBody$$2$$) {
        $resultObject$$2_rows$$3$$ = this.$_getRowIdxRowArray$($resultObject$$2_rows$$3$$, $startIndex$$25$$);
        var $i$$209_tableBodyRows$$7$$;
        if (0 == $startIndex$$25$$) {
          $oj$$14$$.Components.$subtreeDetached$($tableBody$$2$$[0]), $tableBody$$2$$.empty();
        } else {
          if ($i$$209_tableBodyRows$$7$$ = $tableBody$$2$$.children(), null != $i$$209_tableBodyRows$$7$$ && 0 < $i$$209_tableBodyRows$$7$$.length) {
            for ($i$$209_tableBodyRows$$7$$ = $i$$209_tableBodyRows$$7$$.length - 1;$i$$209_tableBodyRows$$7$$ >= $startIndex$$25$$;$i$$209_tableBodyRows$$7$$--) {
              this.$_getTableDomUtils$().$removeTableBodyRow$($i$$209_tableBodyRows$$7$$);
            }
          }
        }
        this.$_getTableDomUtils$().$clearCachedDomRowData$();
        this.$_hideNoDataMessage$();
        $i$$209_tableBodyRows$$7$$ = $tableBody$$2$$.children();
        if (0 != $resultObject$$2_rows$$3$$.length || null != $i$$209_tableBodyRows$$7$$ && 0 != $i$$209_tableBodyRows$$7$$.length) {
          var $tableBodyDocFrag$$1$$ = $$$$14$$(document.createDocumentFragment()), $row$$11$$, $rowIdx$$15$$, $tableBodyRow$$6$$, $rowsCount$$3$$ = $resultObject$$2_rows$$3$$.length;
          for ($i$$209_tableBodyRows$$7$$ = 0;$i$$209_tableBodyRows$$7$$ < $rowsCount$$3$$;$i$$209_tableBodyRows$$7$$++) {
            $row$$11$$ = $resultObject$$2_rows$$3$$[$i$$209_tableBodyRows$$7$$].row, $rowIdx$$15$$ = $resultObject$$2_rows$$3$$[$i$$209_tableBodyRows$$7$$].$rowIdx$, null != $row$$11$$ && ($tableBodyRow$$6$$ = this.$_getTableDomUtils$().$createTableBodyRow$($rowIdx$$15$$, $row$$11$$[this.$_CONST_KEY$]), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$6$$, !0), this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$15$$, $tableBodyRow$$6$$, $row$$11$$, $tableBodyDocFrag$$1$$), this.$_refreshTableBodyRow$($rowIdx$$15$$, 
            $row$$11$$, $tableBodyRow$$6$$, $tableBodyDocFrag$$1$$, $startIndex$$25$$, !0));
          }
          $tableBody$$2$$.append($tableBodyDocFrag$$1$$);
          this.$_hasRowOrCellRenderer$() && (this.$_getTableDomUtils$().$refreshTableDimensions$(null, null, $resetScrollTop$$1$$, $resetScrollLeft$$1$$), $oj$$14$$.Components.$subtreeAttached$($tableBody$$2$$[0]));
        } else {
          this.$_showNoDataMessage$();
        }
      }
    }, $_refreshTableBodyRow$:function($moveTableBodyCell_rowIdx$$16$$, $row$$12_swapTableBodyCell$$, $tableBodyRow$$7$$, $docFrag$$1_i$$210$$, $docFragStartIdx$$1_tableBodyCells$$, $context$$65_isNew$$) {
      var $rowContent_rowRenderer$$1_tableBodyCell$$2$$ = this.$_getRowRenderer$();
      this.$_getColumnDefs$();
      var $tableBody$$3_tableBodyCellsCount$$ = this.$_getTableDomUtils$().$getTableBody$();
      (isNaN($moveTableBodyCell_rowIdx$$16$$) || 0 > $moveTableBodyCell_rowIdx$$16$$) && $oj$$14$$.$Logger$.error("Error: Invalid rowIdx value: " + $moveTableBodyCell_rowIdx$$16$$);
      var $rowHashCode$$ = this.$_getTableDomUtils$().$hashCode$($row$$12_swapTableBodyCell$$[this.$_CONST_KEY$]);
      if (null == $tableBodyRow$$7$$) {
        if ($tableBodyRow$$7$$ = this.$_getTableDomUtils$().$getTableBodyRow$($moveTableBodyCell_rowIdx$$16$$)) {
          $tableBodyRow$$7$$.empty(), $context$$65_isNew$$ = !0, this.$_getTableDomUtils$().$createTableBodyCellAccSelect$($moveTableBodyCell_rowIdx$$16$$, $row$$12_swapTableBodyCell$$[this.$_CONST_KEY$], $rowHashCode$$, $tableBodyRow$$7$$, $context$$65_isNew$$);
        } else {
          return;
        }
      }
      this.$_hideNoDataMessage$();
      $context$$65_isNew$$ = {rowContext:$oj$$14$$.$TableRendererUtils$.$getRendererContextObject$(this, $row$$12_swapTableBodyCell$$, $tableBodyRow$$7$$[0]), row:$$$$14$$.extend({}, $row$$12_swapTableBodyCell$$[this.$_CONST_DATA$])};
      if ($rowContent_rowRenderer$$1_tableBodyCell$$2$$) {
        $rowContent_rowRenderer$$1_tableBodyCell$$2$$ = $rowContent_rowRenderer$$1_tableBodyCell$$2$$($context$$65_isNew$$);
        null != $rowContent_rowRenderer$$1_tableBodyCell$$2$$ ? $tableBodyRow$$7$$.append($rowContent_rowRenderer$$1_tableBodyCell$$2$$) : (null == $docFrag$$1_i$$210$$ ? $tableBodyRow$$7$$ = $$$$14$$($tableBody$$3_tableBodyCellsCount$$.children()[$moveTableBodyCell_rowIdx$$16$$]) : ($docFragStartIdx$$1_tableBodyCells$$ = null == $docFragStartIdx$$1_tableBodyCells$$ ? 0 : $docFragStartIdx$$1_tableBodyCells$$, $tableBodyRow$$7$$ = $$$$14$$($docFrag$$1_i$$210$$.children()[$moveTableBodyCell_rowIdx$$16$$ - 
        $docFragStartIdx$$1_tableBodyCells$$])), this.$_getTableDomUtils$().$clearCachedDomRowData$(), this.$_getTableDomUtils$().$setTableBodyRowAttributes$($row$$12_swapTableBodyCell$$, $tableBodyRow$$7$$), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$7$$, !1));
        this.$_getTableDomUtils$().$createTableBodyCellAccSelect$($moveTableBodyCell_rowIdx$$16$$, $row$$12_swapTableBodyCell$$[this.$_CONST_KEY$], $rowHashCode$$, $tableBodyRow$$7$$, !1);
        $docFragStartIdx$$1_tableBodyCells$$ = $tableBodyRow$$7$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$);
        $tableBody$$3_tableBodyCellsCount$$ = $docFragStartIdx$$1_tableBodyCells$$.length;
        for ($docFrag$$1_i$$210$$ = 1;$docFrag$$1_i$$210$$ < $tableBody$$3_tableBodyCellsCount$$;$docFrag$$1_i$$210$$++) {
          $rowContent_rowRenderer$$1_tableBodyCell$$2$$ = $$$$14$$($docFragStartIdx$$1_tableBodyCells$$[$docFrag$$1_i$$210$$]), this.$_getTableDomUtils$().$setTableBodyCellAttributes$($moveTableBodyCell_rowIdx$$16$$, $row$$12_swapTableBodyCell$$[this.$_CONST_KEY$], $rowHashCode$$, $docFrag$$1_i$$210$$ - 1, $rowContent_rowRenderer$$1_tableBodyCell$$2$$), this.$_getTableDomUtils$().$styleTableBodyCell$($docFrag$$1_i$$210$$ - 1, $rowContent_rowRenderer$$1_tableBodyCell$$2$$, !1);
        }
        if (null != this.$_columnsDestMap$) {
          for ($docFrag$$1_i$$210$$ = 0;$docFrag$$1_i$$210$$ < this.$_columnsDestMap$.length - 1;$docFrag$$1_i$$210$$++) {
            this.$_columnsDestMap$[$docFrag$$1_i$$210$$] > $docFrag$$1_i$$210$$ && ($moveTableBodyCell_rowIdx$$16$$ = $$$$14$$($docFragStartIdx$$1_tableBodyCells$$[this.$_columnsDestMap$[$docFrag$$1_i$$210$$] + 1]), $row$$12_swapTableBodyCell$$ = $$$$14$$($docFragStartIdx$$1_tableBodyCells$$[$docFrag$$1_i$$210$$ + 1]), $moveTableBodyCell_rowIdx$$16$$[0].parentNode.insertBefore($moveTableBodyCell_rowIdx$$16$$[0], $row$$12_swapTableBodyCell$$[0]), $docFragStartIdx$$1_tableBodyCells$$ = $tableBodyRow$$7$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$))
            ;
          }
        }
      } else {
        $oj$$14$$.$TableRendererUtils$.$tableBodyRowDefaultRenderer$($moveTableBodyCell_rowIdx$$16$$, $row$$12_swapTableBodyCell$$, $context$$65_isNew$$);
      }
    }, $_refreshTableFooter$:function() {
      var $columns$$12_i$$211$$ = this.$_getColumnDefs$(), $tableFooter$$1_tableFooterRow$$1$$ = this.$_getTableDomUtils$().$getTableFooter$();
      if (!$tableFooter$$1_tableFooterRow$$1$$) {
        if (this.$_isTableFooterless$()) {
          return;
        }
        $tableFooter$$1_tableFooterRow$$1$$ = this.$_getTableDomUtils$().$createTableFooter$();
        this.$_getTableDomUtils$().$styleTableFooter$($tableFooter$$1_tableFooterRow$$1$$);
      }
      $tableFooter$$1_tableFooterRow$$1$$ = this.$_getTableDomUtils$().$getTableFooterRow$();
      $tableFooter$$1_tableFooterRow$$1$$.empty();
      if ($columns$$12_i$$211$$ && 0 < $columns$$12_i$$211$$.length) {
        this.$_getTableDomUtils$().$createTableFooterAccSelect$($tableFooter$$1_tableFooterRow$$1$$);
        for (var $footerCellContent_footerRenderer$$1$$, $footerCell$$, $columnsCount$$8$$ = $columns$$12_i$$211$$.length, $columns$$12_i$$211$$ = 0;$columns$$12_i$$211$$ < $columnsCount$$8$$;$columns$$12_i$$211$$++) {
          $footerCellContent_footerRenderer$$1$$ = this.$_getColumnRenderer$($columns$$12_i$$211$$, "footer"), $footerCell$$ = this.$_getTableDomUtils$().$createTableFooterCell$(), this.$_getTableDomUtils$().$styleTableFooterCell$($columns$$12_i$$211$$, $footerCell$$), this.$_getTableDomUtils$().$insertTableFooterCell$($columns$$12_i$$211$$, $footerCell$$), $footerCellContent_footerRenderer$$1$$ && ($footerCellContent_footerRenderer$$1$$ = $footerCellContent_footerRenderer$$1$$({footerContext:$oj$$14$$.$TableRendererUtils$.$getRendererContextObject$(this, 
          null, $footerCell$$[0]), columnIndex:$columns$$12_i$$211$$}), null != $footerCellContent_footerRenderer$$1$$ ? ($footerCell$$.empty(), $footerCell$$.append($footerCellContent_footerRenderer$$1$$)) : ($footerCell$$ = $$$$14$$($tableFooter$$1_tableFooterRow$$1$$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$ + ")")[$columns$$12_i$$211$$]), this.$_getTableDomUtils$().$styleTableFooterCell$($columns$$12_i$$211$$, $footerCell$$)));
        }
      }
    }, $_refreshTableHeader$:function() {
      var $columns$$13$$ = this.$_getColumnDefs$(), $tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeader$();
      if (!$tableHeader$$1_tableHeaderRow$$1$$) {
        if (this.$_isTableHeaderless$()) {
          return;
        }
        $tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$createTableHeader$();
        this.$_getTableDomUtils$().$styleTableHeader$($tableHeader$$1_tableHeaderRow$$1$$);
      }
      $tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeaderRow$();
      this.$_unregisterChildStateListeners$($tableHeader$$1_tableHeaderRow$$1$$);
      $tableHeader$$1_tableHeaderRow$$1$$.empty();
      if ($columns$$13$$ && 0 < $columns$$13$$.length) {
        var $i$$212_tableHeaderAccSelectRowColumn$$ = this.$_getTableDomUtils$().$createTableHeaderAccSelectRowColumn$();
        $tableHeader$$1_tableHeaderRow$$1$$.append($i$$212_tableHeaderAccSelectRowColumn$$);
        for (var $column$$10_headerColumnContent$$, $headerRenderer$$, $headerColumn$$3$$, $context$$66_headerContext$$, $columnsCount$$9$$ = $columns$$13$$.length, $i$$212_tableHeaderAccSelectRowColumn$$ = 0;$i$$212_tableHeaderAccSelectRowColumn$$ < $columnsCount$$9$$;$i$$212_tableHeaderAccSelectRowColumn$$++) {
          $column$$10_headerColumnContent$$ = $columns$$13$$[$i$$212_tableHeaderAccSelectRowColumn$$], $headerRenderer$$ = this.$_getColumnRenderer$($i$$212_tableHeaderAccSelectRowColumn$$, "header"), $headerColumn$$3$$ = this.$_getTableDomUtils$().$createTableHeaderColumn$($i$$212_tableHeaderAccSelectRowColumn$$), $headerRenderer$$ && ($context$$66_headerContext$$ = $oj$$14$$.$TableRendererUtils$.$getRendererContextObject$(this, null, $headerColumn$$3$$[0]), $context$$66_headerContext$$ = {headerContext:$context$$66_headerContext$$, 
          columnIndex:$i$$212_tableHeaderAccSelectRowColumn$$, data:$column$$10_headerColumnContent$$.headerText}, $column$$10_headerColumnContent$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ ? $context$$66_headerContext$$.columnHeaderSortableIconRenderer = function $$context$$66_headerContext$$$columnHeaderSortableIconRenderer$($options$$240$$, $delegateRenderer$$) {
            $oj$$14$$.$TableRendererUtils$.$columnHeaderSortableIconRenderer$(this, $delegateRenderer$$);
          } : $context$$66_headerContext$$.columnHeaderDefaultRenderer = function $$context$$66_headerContext$$$columnHeaderDefaultRenderer$($options$$241$$, $delegateRenderer$$1$$) {
            $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultRenderer$(this, $delegateRenderer$$1$$);
          }, $column$$10_headerColumnContent$$ = $headerRenderer$$($context$$66_headerContext$$), null != $column$$10_headerColumnContent$$ ? ($headerColumn$$3$$.empty(), $headerColumn$$3$$.append($column$$10_headerColumnContent$$)) : ($headerColumn$$3$$ = $$$$14$$($tableHeader$$1_tableHeaderRow$$1$$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$ + ")")[$i$$212_tableHeaderAccSelectRowColumn$$]), this.$_getTableDomUtils$().$setTableHeaderColumnAttributes$($i$$212_tableHeaderAccSelectRowColumn$$, 
          $headerColumn$$3$$), this.$_getTableDomUtils$().$styleTableHeaderColumn$($i$$212_tableHeaderAccSelectRowColumn$$, $headerColumn$$3$$, !1))), this.$_getTableDomUtils$().$createTableHeaderColumnAccSelect$($i$$212_tableHeaderAccSelectRowColumn$$, this.$_getColumnSelectionMode$());
        }
        this.$_renderedTableHeaderColumns$ = !0;
      }
    }, $_refreshTableStatusMessage$:function() {
      var $tableStatusMessage$$ = this.$_getTableDomUtils$().$getTableStatusMessage$();
      null != $tableStatusMessage$$ && $tableStatusMessage$$.remove();
      this.$_getTableDomUtils$().$createTableStatusMessage$();
    }, $_registerCustomEvents$:function() {
      var $jqEventSpecial$$ = $$$$14$$.event.special;
      $jqEventSpecial$$.ojtablebeforecurrentrow = {handle:function $$jqEventSpecial$$$ojtablebeforecurrentrow$handle$($event$$212$$, $JSCompiler_OptimizeArgumentsArray_p1$$) {
        return $event$$212$$.handleObj.handler.apply(this, [$event$$212$$, $JSCompiler_OptimizeArgumentsArray_p1$$]);
      }};
      $jqEventSpecial$$.ojtablesort = {handle:function $$jqEventSpecial$$$ojtablesort$handle$($event$$213$$, $JSCompiler_OptimizeArgumentsArray_p2$$) {
        return $event$$213$$.handleObj.handler.apply(this, [$event$$213$$, $JSCompiler_OptimizeArgumentsArray_p2$$]);
      }};
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$118$$ = this.$_getData$();
      if (null != $data$$118$$) {
        this.$_unregisterDataSourceEventListeners$();
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REQUEST, eventHandler:this.$_handleDataFetchStart$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataSort$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.ADD, eventHandler:this.$_handleDataRowAdd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REMOVE, eventHandler:this.$_handleDataRowRemove$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.CHANGE, eventHandler:this.$_handleDataRowChange$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataRefresh$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.ERROR, eventHandler:this.$_handleDataError$.bind(this)});
        var $i$$213$$, $ev$$1$$, $dataSourceEventHandlersCount$$ = this.$_dataSourceEventHandlers$.length;
        for ($i$$213$$ = 0;$i$$213$$ < $dataSourceEventHandlersCount$$;$i$$213$$++) {
          ($ev$$1$$ = $data$$118$$.on(this.$_dataSourceEventHandlers$[$i$$213$$].eventType, this.$_dataSourceEventHandlers$[$i$$213$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$213$$].eventHandler = $ev$$1$$);
        }
      }
    }, $_registerDomEventListeners$:function() {
      null != this.$_getTableDomUtils$().$getScroller$() && this.$_getTableDomUtils$().$getScroller$().scroll(function($event$$214$$) {
        this.$_handleScrollerScrollLeft$(this.$_getTableDomUtils$().$getScrollLeft$($event$$214$$.target));
      }.bind(this));
    }, $_registerDomScroller$:function() {
      var $self$$106$$ = this;
      this.$_domScrollerMaxCountFunc$ = function $this$$_domScrollerMaxCountFunc$$($result$$37$$) {
        null != $result$$37$$ && $result$$37$$.maxCountLimit && $self$$106$$.$_handleScrollerMaxRowCount$();
      };
      this.$_domScroller$ = new $oj$$14$$.$DomScroller$(this.$_getTableDomUtils$().$getScroller$(), this.$_getData$(), {fetchSize:this.options.scrollPolicyOptions.fetchSize, maxCount:this.options.scrollPolicyOptions.maxCount, success:this.$_domScrollerMaxCountFunc$});
    }, $_registerResizeListener$:function() {
      var $element$$97$$ = this.$_getTableDomUtils$().$getTableContainer$();
      if (!this.$_resizeListener$) {
        var $self$$107$$ = this;
        this.$_resizeListener$ = function $this$$_resizeListener$$() {
          var $tableContainerHeight$$ = $self$$107$$.$_getTableDomUtils$().$getTableContainer$().outerHeight(), $tableContainerWidth$$ = $self$$107$$.$_getTableDomUtils$().$getTableContainer$().outerWidth();
          $self$$107$$.$_getTableDomUtils$().$refreshTableDimensions$($tableContainerWidth$$, $tableContainerHeight$$);
        };
      }
      this.$_isResizeListenerAdded$ || ($oj$$14$$.$DomUtils$.$addResizeListener$($element$$97$$[0], this.$_resizeListener$, 50), this.$_isResizeListenerAdded$ = !0);
    }, $_removeKeyboardKey$:function($keyCode$$3$$) {
      var $keyboardKeys$$2$$ = this.$_getKeyboardKeys$(), $i$$214$$, $keyboardKeysCount$$2$$ = $keyboardKeys$$2$$.length;
      for ($i$$214$$ = 0;$i$$214$$ < $keyboardKeysCount$$2$$;$i$$214$$++) {
        $keyboardKeys$$2$$[$i$$214$$] == $keyCode$$3$$ && $keyboardKeys$$2$$.splice($i$$214$$, 1);
      }
    }, $_scrollColumnIntoViewport$:function($columnIdx$$24_scrollbarWidth$$) {
      var $isRTL$$3_scrollLeftDiff$$ = "rtl" === this.$_GetReadingDirection$(), $tableBody$$4$$ = this.$_getTableDomUtils$().$getTableBody$(), $headerColumnRect_tableHeaderColumn$$6$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$24_scrollbarWidth$$);
      if ($headerColumnRect_tableHeaderColumn$$6$$) {
        $columnIdx$$24_scrollbarWidth$$ = this.$_getTableDomUtils$().$getScrollbarWidth$();
        var $headerColumnRect_tableHeaderColumn$$6$$ = $headerColumnRect_tableHeaderColumn$$6$$.get(0).getBoundingClientRect(), $tableBodyRect$$ = $tableBody$$4$$.get(0).getBoundingClientRect(), $scrolledLeft$$ = !1;
        $isRTL$$3_scrollLeftDiff$$ ? ($headerColumnRect_tableHeaderColumn$$6$$.left < $tableBodyRect$$.left + $columnIdx$$24_scrollbarWidth$$ && ($isRTL$$3_scrollLeftDiff$$ = $tableBodyRect$$.left - $headerColumnRect_tableHeaderColumn$$6$$.left + $columnIdx$$24_scrollbarWidth$$, this.$_getTableDomUtils$().$_isIE$() || ($isRTL$$3_scrollLeftDiff$$ *= -1), $tableBody$$4$$.scrollLeft($tableBody$$4$$.scrollLeft() + $isRTL$$3_scrollLeftDiff$$), $scrolledLeft$$ = !0), $headerColumnRect_tableHeaderColumn$$6$$.right > 
        $tableBodyRect$$.right && !$scrolledLeft$$ && ($isRTL$$3_scrollLeftDiff$$ = $headerColumnRect_tableHeaderColumn$$6$$.right - $tableBodyRect$$.right, this.$_getTableDomUtils$().$_isIE$() || ($isRTL$$3_scrollLeftDiff$$ *= -1), $tableBody$$4$$.scrollLeft($tableBody$$4$$.scrollLeft() - $isRTL$$3_scrollLeftDiff$$))) : ($headerColumnRect_tableHeaderColumn$$6$$.left < $tableBodyRect$$.left && ($isRTL$$3_scrollLeftDiff$$ = $tableBodyRect$$.left - $headerColumnRect_tableHeaderColumn$$6$$.left, $tableBody$$4$$.scrollLeft($tableBody$$4$$.scrollLeft() - 
        $isRTL$$3_scrollLeftDiff$$), $scrolledLeft$$ = !0), $headerColumnRect_tableHeaderColumn$$6$$.right > $tableBodyRect$$.right - $columnIdx$$24_scrollbarWidth$$ && !$scrolledLeft$$ && ($isRTL$$3_scrollLeftDiff$$ = $headerColumnRect_tableHeaderColumn$$6$$.right - $tableBodyRect$$.right + $columnIdx$$24_scrollbarWidth$$, $tableBody$$4$$.scrollLeft($tableBody$$4$$.scrollLeft() + $isRTL$$3_scrollLeftDiff$$)));
      }
    }, $_scrollRowIntoViewport$:function($rowIdx$$17_scrollTopDiff_scrollbarHeight$$) {
      var $rowRect_tableBodyRow$$8$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$17_scrollTopDiff_scrollbarHeight$$);
      $rowIdx$$17_scrollTopDiff_scrollbarHeight$$ = this.$_getTableDomUtils$().$getScrollbarHeight$();
      var $rowRect_tableBodyRow$$8$$ = $rowRect_tableBodyRow$$8$$.get(0).getBoundingClientRect(), $scrollingElement$$ = this.$_getTableDomUtils$().$getScroller$(), $scrollingElementRect$$ = $scrollingElement$$.get(0).getBoundingClientRect(), $scrolledDown$$ = !1;
      $rowRect_tableBodyRow$$8$$.bottom > $scrollingElementRect$$.bottom - $rowIdx$$17_scrollTopDiff_scrollbarHeight$$ && ($rowIdx$$17_scrollTopDiff_scrollbarHeight$$ = $rowRect_tableBodyRow$$8$$.bottom - $scrollingElementRect$$.bottom + $rowIdx$$17_scrollTopDiff_scrollbarHeight$$, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() + $rowIdx$$17_scrollTopDiff_scrollbarHeight$$), $scrolledDown$$ = !0);
      $rowRect_tableBodyRow$$8$$.top < $scrollingElementRect$$.top && !$scrolledDown$$ && ($rowIdx$$17_scrollTopDiff_scrollbarHeight$$ = $scrollingElementRect$$.top - $rowRect_tableBodyRow$$8$$.top, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() - $rowIdx$$17_scrollTopDiff_scrollbarHeight$$));
    }, $_setCurrentRow$:function($currentRow$$1_errSummary$$13$$, $event$$215$$, $currentFocusedRowIdx_optionChange$$) {
      var $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = this.$_currentRow$, $tableBodyRow$$9_updateCurrentRow$$1$$;
      $tableBodyRow$$9_updateCurrentRow$$1$$ = !0;
      if (null == $currentRow$$1_errSummary$$13$$) {
        if (null != $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$) {
          try {
            $tableBodyRow$$9_updateCurrentRow$$1$$ = this._trigger("beforecurrentrow", $event$$215$$, {currentRow:null, previousCurrentRow:this.$_currentRow$});
          } catch ($err$$15$$) {
            $currentRow$$1_errSummary$$13$$ = this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_SUMMARY$;
            var $errDetail$$6_rowIdx$$18$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_DETAIL$, {error:$err$$15$$.toString()});
            $oj$$14$$.$Logger$.info($currentRow$$1_errSummary$$13$$ + "\n" + $errDetail$$6_rowIdx$$18$$);
            return!1;
          }
          if (!$tableBodyRow$$9_updateCurrentRow$$1$$) {
            return!1;
          }
          this.$_currentRow$ = null;
          this.option("currentRow", null, {_context:{$writeback$:!0, originalEvent:$event$$215$$, $internalSet$:!0}});
          null == $event$$215$$ && this.$_setRowFocus$(-1, !0, !1, null, $event$$215$$);
          $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$.rowIndex;
          $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = this.$_getRowKeyForDataSourceRowIndex$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$);
          $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = this.$_getRowIdxForRowKey$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$);
          $tableBodyRow$$9_updateCurrentRow$$1$$ = this.$_getTableDomUtils$().$getTableBodyRow$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$);
          null != $tableBodyRow$$9_updateCurrentRow$$1$$ && $tableBodyRow$$9_updateCurrentRow$$1$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CURRENT_ROW_CLASS$);
        }
        return!0;
      }
      var $currentRowChanged_data$$119$$ = this.$_getData$(), $rowIndex$$4$$ = $currentRow$$1_errSummary$$13$$.rowIndex, $rowKey$$5$$ = $currentRow$$1_errSummary$$13$$.rowKey;
      null == $rowKey$$5$$ && ($rowKey$$5$$ = this.$_getRowKeyForDataSourceRowIndex$($rowIndex$$4$$));
      null == $rowIndex$$4$$ && ($rowIndex$$4$$ = this.$_getDataSourceRowIndexForRowKey$($rowKey$$5$$));
      $errDetail$$6_rowIdx$$18$$ = this.$_getRowIdxForRowKey$($rowKey$$5$$);
      $currentRow$$1_errSummary$$13$$ = {rowIndex:$rowIndex$$4$$, rowKey:$rowKey$$5$$};
      if (-1 != $errDetail$$6_rowIdx$$18$$ && (!$currentRowChanged_data$$119$$ || 0 == $currentRowChanged_data$$119$$.totalSize() || -1 > $errDetail$$6_rowIdx$$18$$ || null === $errDetail$$6_rowIdx$$18$$ || null === $rowKey$$5$$)) {
        $currentRow$$1_errSummary$$13$$ = this.$_LOGGER_MSG$.$_ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY$;
        $errDetail$$6_rowIdx$$18$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL$, {rowIdx:$errDetail$$6_rowIdx$$18$$});
        if ($currentFocusedRowIdx_optionChange$$) {
          throw Error($currentRow$$1_errSummary$$13$$ + "\n" + $errDetail$$6_rowIdx$$18$$);
        }
        $oj$$14$$.$Logger$.info($currentRow$$1_errSummary$$13$$ + "\n" + $errDetail$$6_rowIdx$$18$$);
        return!1;
      }
      $currentFocusedRowIdx_optionChange$$ = this.$_getFocusedRowIdx$();
      if ($currentRowChanged_data$$119$$ = !$oj$$14$$.$Object$.$compareValues$(this.$_currentRow$, $currentRow$$1_errSummary$$13$$)) {
        try {
          $tableBodyRow$$9_updateCurrentRow$$1$$ = this._trigger("beforecurrentrow", $event$$215$$, {currentRow:{rowIndex:$rowIndex$$4$$, rowKey:$rowKey$$5$$}, previousCurrentRow:this.$_currentRow$});
        } catch ($err$$16$$) {
          return $currentRow$$1_errSummary$$13$$ = this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_SUMMARY$, $errDetail$$6_rowIdx$$18$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_DETAIL$, {error:$err$$16$$.toString()}), $oj$$14$$.$Logger$.info($currentRow$$1_errSummary$$13$$ + "\n" + $errDetail$$6_rowIdx$$18$$), !1;
        }
        if (!$tableBodyRow$$9_updateCurrentRow$$1$$) {
          return!1;
        }
        this.$_currentRow$ = {rowIndex:$rowIndex$$4$$, rowKey:$rowKey$$5$$};
        this.option("currentRow", this.$_currentRow$, {_context:{$writeback$:!0, originalEvent:$event$$215$$, $internalSet$:!0}});
        $tableBodyRow$$9_updateCurrentRow$$1$$ = this.$_getTableDomUtils$().$getTableBodyRow$($errDetail$$6_rowIdx$$18$$);
        null != $tableBodyRow$$9_updateCurrentRow$$1$$ && $tableBodyRow$$9_updateCurrentRow$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CURRENT_ROW_CLASS$);
        null != $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ && ($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$.rowIndex, $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = this.$_getRowKeyForDataSourceRowIndex$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$), 
        $existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$ = this.$_getRowIdxForRowKey$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$), $tableBodyRow$$9_updateCurrentRow$$1$$ = this.$_getTableDomUtils$().$getTableBodyRow$($existingCurrentRow_existingCurrentRowIdx_existingCurrentRowIndex_existingCurrentRowKey$$), null != $tableBodyRow$$9_updateCurrentRow$$1$$ && $tableBodyRow$$9_updateCurrentRow$$1$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CURRENT_ROW_CLASS$));
      }
      ($currentRowChanged_data$$119$$ || $currentFocusedRowIdx_optionChange$$ != $currentRow$$1_errSummary$$13$$.rowIndex) && null == $event$$215$$ && this.$_setRowFocus$($errDetail$$6_rowIdx$$18$$, !0, !1, null, $event$$215$$);
      return!0;
    }, $_setDataWaitingState$:function() {
      this.$_showStatusMessage$();
      this.$_hideNoDataMessage$();
      this.$_dataFetching$ = !0;
    }, $_setHeaderColumnFocus$:function($columnIdx$$25$$, $focused$$4$$, $clearSelectedRows$$, $event$$216$$) {
      var $element$$98$$ = null;
      null != $event$$216$$ && ($element$$98$$ = $event$$216$$.currentTarget);
      if ($focused$$4$$) {
        var $focusedHeaderColumnIdx$$5$$ = this.$_getFocusedHeaderColumnIdx$();
        null != $focusedHeaderColumnIdx$$5$$ && $focusedHeaderColumnIdx$$5$$ != $columnIdx$$25$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$5$$, !1, !1, $event$$216$$);
        this.$_clearFocusedRow$(!0);
        $clearSelectedRows$$ && this.$_clearSelectedRows$();
        this.$_scrollColumnIntoViewport$($columnIdx$$25$$);
        this.$_activeColumnIndex$ = $columnIdx$$25$$;
      }
      this.$_setHeaderColumnState$($columnIdx$$25$$, {$focused$:$focused$$4$$}, $element$$98$$);
    }, $_setHeaderColumnSelection$:function($accSelectionColumn_columnIdx$$26$$, $selected$$17_selection$$3$$, $element$$99$$, $event$$217$$, $updateSelection$$) {
      if (this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        (isNaN($accSelectionColumn_columnIdx$$26$$) || 0 > $accSelectionColumn_columnIdx$$26$$) && $oj$$14$$.$Logger$.error("Error: Invalid column selection value: " + $accSelectionColumn_columnIdx$$26$$), this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$17_selection$$3$$ && this.$_clearSelectedHeaderColumns$(), this.$_setHeaderColumnState$($accSelectionColumn_columnIdx$$26$$, {selected:$selected$$17_selection$$3$$}, $element$$99$$, $event$$217$$), this.$_setLastHeaderColumnSelection$($accSelectionColumn_columnIdx$$26$$, 
        $selected$$17_selection$$3$$), $accSelectionColumn_columnIdx$$26$$ = this.$_getTableDomUtils$().$getTableHeaderColumnAccSelect$($accSelectionColumn_columnIdx$$26$$), $$$$14$$($accSelectionColumn_columnIdx$$26$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$)[0]).prop("checked", $selected$$17_selection$$3$$), $updateSelection$$ && ($selected$$17_selection$$3$$ = this.$_getSelection$(), this.option("selection", $selected$$17_selection$$3$$, {_context:{$writeback$:!0, 
        $internalSet$:!0}}));
      }
    }, $_setHeaderColumnState$:function($columnIdx$$27$$, $state$$) {
      var $headerColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$27$$);
      if ($headerColumn$$4$$) {
        var $focused$$5$$ = $state$$.$focused$, $selected$$18$$ = $state$$.selected;
        null != $selected$$18$$ && $headerColumn$$4$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$18$$ && ($selected$$18$$ ? $headerColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $headerColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
        null != $focused$$5$$ && ($focused$$5$$ ? ($headerColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_showTableHeaderColumnSortLink$($columnIdx$$27$$)) : ($headerColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_hideTableHeaderColumnSortLink$($columnIdx$$27$$, !0), this.$_hideTableHeaderColumnSortLink$($columnIdx$$27$$, !1)));
        this.$_updateHeaderColumnStateCellsClass$($columnIdx$$27$$);
      }
    }, $_setLastHeaderColumnSelection$:function($columnIdx$$28$$, $selected$$19$$) {
      this.$_lastSelectedColumnIdxArray$ || (this.$_lastSelectedColumnIdxArray$ = []);
      var $i$$215$$, $lastSelectedColumnIdxArrayCount$$ = this.$_lastSelectedColumnIdxArray$.length;
      for ($i$$215$$ = 0;$i$$215$$ < $lastSelectedColumnIdxArrayCount$$;$i$$215$$++) {
        if (this.$_lastSelectedColumnIdxArray$[$i$$215$$] == $columnIdx$$28$$) {
          this.$_lastSelectedColumnIdxArray$.splice($i$$215$$, 1);
          break;
        }
      }
      $selected$$19$$ && this.$_lastSelectedColumnIdxArray$.push($columnIdx$$28$$);
    }, $_setLastRowSelection$:function($rowIdx$$19$$, $selected$$20$$) {
      this.$_lastSelectedRowIdxArray$ || (this.$_lastSelectedRowIdxArray$ = []);
      var $i$$216$$, $lastSelectedRowIdxArrayCount$$ = this.$_lastSelectedRowIdxArray$.length;
      for ($i$$216$$ = 0;$i$$216$$ < $lastSelectedRowIdxArrayCount$$;$i$$216$$++) {
        if (this.$_lastSelectedRowIdxArray$[$i$$216$$] == $rowIdx$$19$$) {
          this.$_lastSelectedRowIdxArray$.splice($i$$216$$, 1);
          break;
        }
      }
      $selected$$20$$ && this.$_lastSelectedRowIdxArray$.push($rowIdx$$19$$);
    }, $_setRowFocus$:function($rowIdx$$20$$, $focused$$6$$, $rowKey$$6_updateCurrentRow$$2$$, $element$$101$$, $event$$219_updateRowFocus$$) {
      if (-1 == $rowIdx$$20$$) {
        var $focusedRowIdx$$8$$ = this.$_getFocusedRowIdx$();
        null != $focusedRowIdx$$8$$ && this.$_setRowFocus$($focusedRowIdx$$8$$, !1, $rowKey$$6_updateCurrentRow$$2$$, null, null);
        return $rowKey$$6_updateCurrentRow$$2$$ && ($event$$219_updateRowFocus$$ = this.$_setCurrentRow$(null, $event$$219_updateRowFocus$$), !$event$$219_updateRowFocus$$) ? !1 : !0;
      }
      var $tableBodyRow$$10$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$20$$);
      if (!$tableBodyRow$$10$$) {
        return!1;
      }
      if ($focused$$6$$) {
        $focusedRowIdx$$8$$ = this.$_getFocusedRowIdx$();
        null != $focusedRowIdx$$8$$ && $focusedRowIdx$$8$$ != $rowIdx$$20$$ && this.$_setRowFocus$($focusedRowIdx$$8$$, !1, $rowKey$$6_updateCurrentRow$$2$$, $element$$101$$, null);
        if ($rowKey$$6_updateCurrentRow$$2$$ && ($rowKey$$6_updateCurrentRow$$2$$ = this.$_getRowKeyForRowIdx$($rowIdx$$20$$), $event$$219_updateRowFocus$$ = this.$_setCurrentRow$({rowKey:$rowKey$$6_updateCurrentRow$$2$$}, $event$$219_updateRowFocus$$), !$event$$219_updateRowFocus$$)) {
          return!1;
        }
        $tableBodyRow$$10$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
        this.$_scrollRowIntoViewport$($rowIdx$$20$$);
        this.$_updateRowStateCellsClass$($rowIdx$$20$$, {$focused$:!0, hover:!1});
        this.$_clearFocusedHeaderColumn$();
        this.$_clearSelectedHeaderColumns$();
        this.$_setTableNavigationMode$(!0);
      } else {
        $tableBodyRow$$10$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
      }
      this.$_updateRowStateCellsClass$($rowIdx$$20$$, {$focused$:$focused$$6$$});
      return!0;
    }, $_setRowSelection$:function($accSelectionCell_rowIdx$$21$$, $selected$$21_selection$$4$$, $element$$102_tableBodyRow$$11$$, $event$$220_selectionChanged$$, $updateSelection$$1$$) {
      if (this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        if ((isNaN($accSelectionCell_rowIdx$$21$$) || 0 > $accSelectionCell_rowIdx$$21$$) && $oj$$14$$.$Logger$.error("Error: Invalid row selection value: " + $accSelectionCell_rowIdx$$21$$), this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$21_selection$$4$$ && this.$_clearSelectedRows$(), $element$$102_tableBodyRow$$11$$ = this.$_getTableDomUtils$().$getTableBodyRow$($accSelectionCell_rowIdx$$21$$), null != $element$$102_tableBodyRow$$11$$) {
          $event$$220_selectionChanged$$ = !1;
          if ($element$$102_tableBodyRow$$11$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$21_selection$$4$$) {
            $selected$$21_selection$$4$$ ? $element$$102_tableBodyRow$$11$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $element$$102_tableBodyRow$$11$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
            $event$$220_selectionChanged$$ = !0;
            var $dragOption$$ = this.options.dnd.drag;
            $dragOption$$ && ("rows" === $dragOption$$ || $dragOption$$.rows) && $element$$102_tableBodyRow$$11$$.prop("draggable", $selected$$21_selection$$4$$);
          }
          $event$$220_selectionChanged$$ && ($selected$$21_selection$$4$$ ? this.$_updateRowStateCellsClass$($accSelectionCell_rowIdx$$21$$, {hover:!1, $focused$:!1, selected:!0}) : this.$_updateRowStateCellsClass$($accSelectionCell_rowIdx$$21$$, {selected:!1}));
          this.$_setLastRowSelection$($accSelectionCell_rowIdx$$21$$, $selected$$21_selection$$4$$);
          $accSelectionCell_rowIdx$$21$$ = this.$_getTableDomUtils$().$getTableBodyCellAccSelect$($element$$102_tableBodyRow$$11$$);
          $$$$14$$($accSelectionCell_rowIdx$$21$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$)[0]).prop("checked", $selected$$21_selection$$4$$);
          $updateSelection$$1$$ && ($selected$$21_selection$$4$$ = this.$_getSelection$(), this.option("selection", $selected$$21_selection$$4$$, {_context:{$writeback$:!0, $internalSet$:!0}}));
        }
      }
    }, $_setSelection$:function($selection$$5$$) {
      if (null == $selection$$5$$) {
        this.$_clearSelectedRows$(), this.$_clearSelectedHeaderColumns$();
      } else {
        var $i$$217$$, $endRowIndex_endRowKey_j$$31$$, $endRowIdx_rangeObj$$1$$, $endColumnIdx_startRowIdx_startRowKey$$, $startRowIndex$$, $startColumnIdx$$, $selectionCount$$ = $selection$$5$$.length;
        for ($i$$217$$ = 0;$i$$217$$ < $selectionCount$$;$i$$217$$++) {
          $endRowIdx_rangeObj$$1$$ = $selection$$5$$[$i$$217$$];
          if (null == $endRowIdx_rangeObj$$1$$.startKey && null == $endRowIdx_rangeObj$$1$$[this.$_CONST_STARTINDEX$] || null == $endRowIdx_rangeObj$$1$$.endKey && null == $endRowIdx_rangeObj$$1$$[this.$_CONST_ENDINDEX$]) {
            return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection. Both start and end objects must be specified"), null;
          }
          $endColumnIdx_startRowIdx_startRowKey$$ = $startColumnIdx$$ = $endRowIndex_endRowKey_j$$31$$ = $startRowIndex$$ = null;
          null != $endRowIdx_rangeObj$$1$$.startKey && null != $endRowIdx_rangeObj$$1$$.startKey[this.$_CONST_ROW$] && ($startRowIndex$$ = this.$_getDataSourceRowIndexForRowKey$($endRowIdx_rangeObj$$1$$.startKey[this.$_CONST_ROW$]));
          null != $endRowIdx_rangeObj$$1$$.endKey && null != $endRowIdx_rangeObj$$1$$.endKey[this.$_CONST_ROW$] && ($endRowIndex_endRowKey_j$$31$$ = this.$_getDataSourceRowIndexForRowKey$($endRowIdx_rangeObj$$1$$.endKey[this.$_CONST_ROW$]));
          null != $endRowIdx_rangeObj$$1$$.startKey && null != $endRowIdx_rangeObj$$1$$.startKey[this.$_CONST_COLUMN$] && ($startColumnIdx$$ = this.$_getColumnIdxForColumnKey$($endRowIdx_rangeObj$$1$$.startKey[this.$_CONST_COLUMN$]));
          null != $endRowIdx_rangeObj$$1$$.endKey && null != $endRowIdx_rangeObj$$1$$.endKey[this.$_CONST_COLUMN$] && ($endColumnIdx_startRowIdx_startRowKey$$ = this.$_getColumnIdxForColumnKey$($endRowIdx_rangeObj$$1$$.endKey[this.$_CONST_COLUMN$]));
          null == $startRowIndex$$ && null != $endRowIdx_rangeObj$$1$$[this.$_CONST_STARTINDEX$] && ($startRowIndex$$ = $endRowIdx_rangeObj$$1$$[this.$_CONST_STARTINDEX$][this.$_CONST_ROW$]);
          null == $endRowIndex_endRowKey_j$$31$$ && null != $endRowIdx_rangeObj$$1$$[this.$_CONST_ENDINDEX$] && ($endRowIndex_endRowKey_j$$31$$ = $endRowIdx_rangeObj$$1$$[this.$_CONST_ENDINDEX$][this.$_CONST_ROW$]);
          null == $startColumnIdx$$ && null != $endRowIdx_rangeObj$$1$$[this.$_CONST_STARTINDEX$] && ($startColumnIdx$$ = $endRowIdx_rangeObj$$1$$[this.$_CONST_STARTINDEX$][this.$_CONST_COLUMN$]);
          null == $endColumnIdx_startRowIdx_startRowKey$$ && null != $endRowIdx_rangeObj$$1$$[this.$_CONST_ENDINDEX$] && ($endColumnIdx_startRowIdx_startRowKey$$ = $endRowIdx_rangeObj$$1$$[this.$_CONST_ENDINDEX$][this.$_CONST_COLUMN$]);
          if (null != $startRowIndex$$ && null != $endRowIndex_endRowKey_j$$31$$ && null != $startColumnIdx$$ && null != $endColumnIdx_startRowIdx_startRowKey$$) {
            return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection - Can only support row or column selection. Not both"), null;
          }
          if (null != $startRowIndex$$ && 0 <= $startRowIndex$$ && null != $endRowIndex_endRowKey_j$$31$$ && 0 <= $endRowIndex_endRowKey_j$$31$$) {
            for ($endColumnIdx_startRowIdx_startRowKey$$ = this.$_getRowKeyForDataSourceRowIndex$($startRowIndex$$), $endRowIndex_endRowKey_j$$31$$ = this.$_getRowKeyForDataSourceRowIndex$($endRowIndex_endRowKey_j$$31$$), $endColumnIdx_startRowIdx_startRowKey$$ = this.$_getRowIdxForRowKey$($endColumnIdx_startRowIdx_startRowKey$$), $endRowIdx_rangeObj$$1$$ = this.$_getRowIdxForRowKey$($endRowIndex_endRowKey_j$$31$$), $endRowIndex_endRowKey_j$$31$$ = $endColumnIdx_startRowIdx_startRowKey$$;$endRowIndex_endRowKey_j$$31$$ <= 
            $endRowIdx_rangeObj$$1$$;$endRowIndex_endRowKey_j$$31$$++) {
              try {
                this.$_setRowSelection$($endRowIndex_endRowKey_j$$31$$, !0, null, null, !1);
              } catch ($e$$90$$) {
                $oj$$14$$.$Logger$.error("Error: " + $e$$90$$);
              }
            }
          } else {
            if (null != $startColumnIdx$$ && null != $endColumnIdx_startRowIdx_startRowKey$$) {
              for ($endRowIndex_endRowKey_j$$31$$ = $startColumnIdx$$;$endRowIndex_endRowKey_j$$31$$ <= $endColumnIdx_startRowIdx_startRowKey$$;$endRowIndex_endRowKey_j$$31$$++) {
                try {
                  this.$_setHeaderColumnSelection$($endRowIndex_endRowKey_j$$31$$, !0, null, null, !1);
                } catch ($e$$91$$) {
                  $oj$$14$$.$Logger$.error("Error: " + $e$$91$$);
                }
              }
            } else {
              return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection - \n start row: " + $startRowIndex$$ + "\nend row: " + $endRowIndex_endRowKey_j$$31$$ + "\nstart column: " + $startColumnIdx$$ + "\nend column: " + $endColumnIdx_startRowIdx_startRowKey$$), null;
            }
          }
        }
      }
    }, $_setTableNavigationMode$:function($value$$219$$) {
      this.$_tableNavMode$ = $value$$219$$;
    }, $_showInlineMessage$:function($inlineMessage$$1_summary$$21$$, $detail$$24_tableContainer$$3$$, $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$) {
      this.$_getTableDomUtils$().$setTableInlineMessage$($inlineMessage$$1_summary$$21$$, $detail$$24_tableContainer$$3$$, $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$);
      $inlineMessage$$1_summary$$21$$ = this.$_getTableDomUtils$().$getTableInlineMessage$();
      if ($inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$) == $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$) {
        $inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$);
        var $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ = parseInt($inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$), 10), $inlineMessagePaddingRight_tableContainerBorderLeft$$ = parseInt($inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$), 10);
        $detail$$24_tableContainer$$3$$ = this.$_getTableDomUtils$().$getTableContainer$();
        $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ == $oj$$14$$.$Message$.$SEVERITY_LEVEL$.WARNING && ($detail$$24_tableContainer$$3$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$), $inlineMessage$$1_summary$$21$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$));
        $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ = $detail$$24_tableContainer$$3$$.width();
        $inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ - $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ - $inlineMessagePaddingRight_tableContainerBorderLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ = $inlineMessage$$1_summary$$21$$.outerHeight();
        var $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ = parseInt($detail$$24_tableContainer$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_BOTTOM_WIDTH$), 10), $inlineMessagePaddingRight_tableContainerBorderLeft$$ = parseInt($detail$$24_tableContainer$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_LEFT_WIDTH$), 10), $tableContainerMarginBottom$$1$$ = parseInt($detail$$24_tableContainer$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$), 10), $tableContainerMarginBottom$$1$$ = 
        $tableContainerMarginBottom$$1$$ + $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ + $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$;
        $detail$$24_tableContainer$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$, $tableContainerMarginBottom$$1$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BOTTOM$, -1 * ($tableContainerMarginBottom$$1$$ + $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$) + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $inlineMessage$$1_summary$$21$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, -1 * $inlineMessagePaddingRight_tableContainerBorderLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
      }
    }, $_showNoDataMessage$:function() {
      null == this.$_getTableDomUtils$().$getTableNoDataRow$() && this.$_getTableDomUtils$().$createTableNoDataRow$(this.$_getColumnDefs$().length);
    }, $_showStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_INLINE$);
      this.$_getTableDomUtils$().$refreshTableStatusPosition$();
    }, $_showTableHeaderColumnSortLink$:function($columnIdx$$29_tableHeaderColumn$$7$$) {
      if (this.$_getColumnDefs$()[$columnIdx$$29_tableHeaderColumn$$7$$].sortable == this.$_OPTION_ENABLED$ && ($columnIdx$$29_tableHeaderColumn$$7$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$29_tableHeaderColumn$$7$$)) && null == $columnIdx$$29_tableHeaderColumn$$7$$.data("sorted")) {
        var $headerColumnAscLink$$2$$ = $columnIdx$$29_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
        $headerColumnAscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$);
        $headerColumnAscLink$$2$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
        $columnIdx$$29_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
        $columnIdx$$29_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
      }
    }, $_unregisterChildStateListeners$:function($parent$$10$$) {
      var $self$$108$$ = this;
      $parent$$10$$.find("*").each(function() {
        $self$$108$$.$_UnregisterChildNode$(this);
      });
    }, $_unregisterDataSourceEventListeners$:function() {
      var $data$$120$$ = this.$_getData$();
      if (null != this.$_dataSourceEventHandlers$ && null != $data$$120$$) {
        var $i$$218$$, $dataSourceEventHandlersCount$$1$$ = this.$_dataSourceEventHandlers$.length;
        for ($i$$218$$ = 0;$i$$218$$ < $dataSourceEventHandlersCount$$1$$;$i$$218$$++) {
          $data$$120$$.off(this.$_dataSourceEventHandlers$[$i$$218$$].eventType, this.$_dataSourceEventHandlers$[$i$$218$$].eventHandler);
        }
      }
    }, $_unregisterResizeListener$:function() {
      var $element$$103$$ = this.$_getTableDomUtils$().$getTableContainer$();
      $oj$$14$$.$DomUtils$.$removeResizeListener$($element$$103$$[0], this.$_resizeListener$);
      this.$_isResizeListenerAdded$ = !1;
    }, $_updateHeaderColumnStateCellsClass$:function($columnIdx$$30$$) {
      var $selected$$22$$ = this.$_getHeaderColumnState$($columnIdx$$30$$).selected, $selectedRowIdxs$$3$$ = this.$_getSelectedRowIdxs$(), $i$$219_tableBodyRows$$8$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $i$$219_tableBodyRows$$8$$ && 0 < $i$$219_tableBodyRows$$8$$.length) {
        for (var $j$$32$$, $tableBodyCell$$3$$, $rowSelected$$3$$, $selectedRowIdxsCount$$1$$, $tableBodyRowsCount$$4$$ = $i$$219_tableBodyRows$$8$$.length, $i$$219_tableBodyRows$$8$$ = 0;$i$$219_tableBodyRows$$8$$ < $tableBodyRowsCount$$4$$;$i$$219_tableBodyRows$$8$$++) {
          if ($tableBodyCell$$3$$ = this.$_getTableDomUtils$().$getTableBodyCell$($i$$219_tableBodyRows$$8$$, $columnIdx$$30$$), $selected$$22$$) {
            $$$$14$$($tableBodyCell$$3$$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
          } else {
            $rowSelected$$3$$ = !1;
            $selectedRowIdxsCount$$1$$ = $selectedRowIdxs$$3$$.length;
            for ($j$$32$$ = 0;$j$$32$$ < $selectedRowIdxsCount$$1$$;$j$$32$$++) {
              if ($i$$219_tableBodyRows$$8$$ == $selectedRowIdxs$$3$$[$j$$32$$]) {
                $rowSelected$$3$$ = !0;
                break;
              }
            }
            $rowSelected$$3$$ || $$$$14$$($tableBodyCell$$3$$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
          }
        }
      }
    }, $_updateRowStateCellsClass$:function($rowIdx$$22$$, $state$$2$$) {
      var $tableBodyCells$$1$$ = this.$_getTableDomUtils$().$getTableBodyCells$($rowIdx$$22$$), $focused$$7$$ = $state$$2$$.$focused$, $selected$$23$$ = $state$$2$$.selected, $hover$$ = $state$$2$$.hover;
      if ($tableBodyCells$$1$$) {
        if (null != $hover$$) {
          var $i$$220$$, $tableBodyCellsCount$$1$$ = $tableBodyCells$$1$$.length;
          for ($i$$220$$ = 0;$i$$220$$ < $tableBodyCellsCount$$1$$;$i$$220$$++) {
            $hover$$ ? $$$$14$$($tableBodyCells$$1$$[$i$$220$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$) : $$$$14$$($tableBodyCells$$1$$[$i$$220$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
          }
        }
        if (null != $focused$$7$$) {
          for ($tableBodyCellsCount$$1$$ = $tableBodyCells$$1$$.length, $i$$220$$ = 0;$i$$220$$ < $tableBodyCellsCount$$1$$;$i$$220$$++) {
            $focused$$7$$ ? $$$$14$$($tableBodyCells$$1$$[$i$$220$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$) : $$$$14$$($tableBodyCells$$1$$[$i$$220$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
          }
        }
        if (null != $selected$$23$$) {
          for ($tableBodyCellsCount$$1$$ = $tableBodyCells$$1$$.length, $i$$220$$ = 0;$i$$220$$ < $tableBodyCellsCount$$1$$;$i$$220$$++) {
            $selected$$23$$ ? $$$$14$$($tableBodyCells$$1$$[$i$$220$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $$$$14$$($tableBodyCells$$1$$[$i$$220$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
          }
        }
      }
    }, $_setFinalTask$:function($task$$) {
      this.$_finalTask$ = $task$$ ? $task$$.bind(this) : void 0;
    }, $_queueTask$:function($task$$1$$) {
      var $self$$109$$ = this;
      this.$_pendingTasks$ || (this.$_taskCount$ = 0, this.$_pendingTasks$ = Promise.resolve());
      this.$_taskCount$++;
      return this.$_pendingTasks$ = this.$_pendingTasks$.then(function() {
        if (!$self$$109$$.$_componentDestroyed$) {
          return $task$$1$$.bind($self$$109$$)();
        }
      }).then(function($value$$220$$) {
        $self$$109$$.$_taskCount$--;
        0 != $self$$109$$.$_taskCount$ || $self$$109$$.$_componentDestroyed$ || ($self$$109$$.$_pendingTasks$ = void 0, $self$$109$$.$_finalTask$ && $self$$109$$.$_finalTask$(), $self$$109$$._trigger("ready"));
        return $value$$220$$;
      }, function($error$$31$$) {
        $self$$109$$.$_taskCount$--;
        0 == $self$$109$$.$_taskCount$ && ($self$$109$$.$_pendingTasks$ = void 0, $oj$$14$$.$Logger$.error($error$$31$$));
        return Promise.reject($error$$31$$);
      });
    }});
  })();
  $oj$$14$$.Components.$setDefaultOptions$({ojTable:{display:$oj$$14$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$14$$.$ThemeUtils$.$getOptionDefaultMap$("table").display;
  })}});
  $oj$$14$$.$TableDndContext$ = function $$oj$$14$$$$TableDndContext$$($component$$16$$) {
    this.$component$ = $component$$16$$;
    this.options = $component$$16$$.options;
    this.Init();
  };
  $goog$exportPath_$$("TableDndContext", $oj$$14$$.$TableDndContext$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$TableDndContext$, $oj$$14$$.$Object$, "oj.TableDndContext");
  $oj$$14$$.$TableDndContext$.prototype.Init = function $$oj$$14$$$$TableDndContext$$$Init$() {
    $oj$$14$$.$TableDndContext$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDndContext.prototype.Init", {Init:$oj$$14$$.$TableDndContext$.prototype.Init});
  $oj$$14$$.$TableDndContext$.prototype.$_addDragMarkerClass$ = function $$oj$$14$$$$TableDndContext$$$$_addDragMarkerClass$$($columnIdx$$31$$) {
    this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$31$$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
    this.$_getTableDomUtils$().$setTableColumnCellsClass$($columnIdx$$31$$, !0, $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
  };
  $oj$$14$$.$TableDndContext$.prototype.$_removeDragMarkerClass$ = function $$oj$$14$$$$TableDndContext$$$$_removeDragMarkerClass$$() {
    var $dragColumns$$ = this.$_getTableDomUtils$().$getTableHeader$().find("." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
    if (null != $dragColumns$$ && 0 < $dragColumns$$.length) {
      var $i$$221$$, $dragColumnsCount$$ = $dragColumns$$.length;
      for ($i$$221$$ = 0;$i$$221$$ < $dragColumnsCount$$;$i$$221$$++) {
        $$$$14$$($dragColumns$$[$i$$221$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
      }
    }
    this.$_getTableDomUtils$().$setTableColumnCellsClass$(null, !1, $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
  };
  $oj$$14$$.$TableDndContext$.prototype.$_cloneTableBody$ = function $$oj$$14$$$$TableDndContext$$$$_cloneTableBody$$($tableBody$$5$$) {
    var $bodyClone$$;
    $tableBody$$5$$[0].getBoundingClientRect();
    var $scrollLeft$$1$$ = $tableBody$$5$$.scrollLeft(), $scrollTop$$ = $tableBody$$5$$.scrollTop();
    $bodyClone$$ = $tableBody$$5$$.clone();
    $bodyClone$$.css({overflow:"hidden", "overflow-x":"hidden", "overflow-y":"hidden", "background-color":"transparent", width:$tableBody$$5$$.css("width"), height:$tableBody$$5$$.css("height"), position:"fixed", top:1E4});
    $$$$14$$("body").append($bodyClone$$);
    $bodyClone$$.scrollLeft(1 * $scrollLeft$$1$$);
    $bodyClone$$.scrollTop(1 * $scrollTop$$);
    return $bodyClone$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_destroyDragImage$ = function $$oj$$14$$$$TableDndContext$$$$_destroyDragImage$$() {
    this.$_dragImage$ && (this.$_dragImage$.remove(), this.$_dragImage$ = null);
  };
  $oj$$14$$.$TableDndContext$.prototype.$_getEventColumnIndex$ = function $$oj$$14$$$$TableDndContext$$$$_getEventColumnIndex$$($event$$221$$) {
    return this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$221$$.currentTarget));
  };
  $oj$$14$$.$TableDndContext$.prototype.$_getOverRowIndex$ = function $$oj$$14$$$$TableDndContext$$$$_getOverRowIndex$$($context$$67_event$$222$$) {
    var $newRowIndex_overRow_tableBodyRows$$9$$;
    $newRowIndex_overRow_tableBodyRows$$9$$ = $$$$14$$($context$$67_event$$222$$.target).closest("tr");
    $newRowIndex_overRow_tableBodyRows$$9$$ = ($context$$67_event$$222$$ = this.$component$.getContextByNode($context$$67_event$$222$$.target)) && "oj-table-cell" == $context$$67_event$$222$$.subId ? $context$$67_event$$222$$.rowIndex : $newRowIndex_overRow_tableBodyRows$$9$$ && $newRowIndex_overRow_tableBodyRows$$9$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_DRAG_INDICATOR_BEFORE_CLASS$) ? this.$_dropRowIndex$ : ($newRowIndex_overRow_tableBodyRows$$9$$ = this.$_getTableDomUtils$().$getTableBodyRows$()) ? 
    $newRowIndex_overRow_tableBodyRows$$9$$.length : 0;
    return $newRowIndex_overRow_tableBodyRows$$9$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_getTableDomUtils$ = function $$oj$$14$$$$TableDndContext$$$$_getTableDomUtils$$() {
    return this.$component$.$_getTableDomUtils$();
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDragStart$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDragStart$$($event$$223$$) {
    if (this.$_isColumnReorderEnabled$()) {
      var $columnIdx$$32$$ = this.$_getEventColumnIndex$($event$$223$$);
      this.$_dragStartColumnIdx$ = $columnIdx$$32$$;
      this.$_setReorderColumnsDataTransfer$($event$$223$$, $columnIdx$$32$$);
      this.$component$.$_setSelection$(null);
      this.$component$.option("selection", null, {_context:{$writeback$:!0, $internalSet$:!0}});
      setTimeout(function() {
        window.getSelection().removeAllRanges();
      }, 0);
      this.$_addDragMarkerClass$($columnIdx$$32$$);
      return!0;
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDragEnd$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDragEnd$$() {
    this.$_isColumnReorderEnabled$() && (this.$setTableHeaderColumnDraggable$(null, !1), this.$_dragStartColumnIdx$ = null, this.$_getTableDomUtils$().$removeDragOverIndicatorColumn$(), this.$_getTableDomUtils$().$removeTableHeaderColumnDragImage$(), this.$_removeDragMarkerClass$());
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDragEnter$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDragEnter$$($event$$225$$) {
    if (!this.$_isColumnReordering$()) {
      var $columnIdx$$33$$ = this.$_getEventColumnIndex$($event$$225$$);
      return this.$_invokeDropCallback$("columns", "dragEnter", $event$$225$$, {columnIndex:$columnIdx$$33$$});
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnReorderDragOver$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnReorderDragOver$$($event$$226$$) {
    var $columnIdx$$34$$ = this.$_getEventColumnIndex$($event$$226$$), $dragStartColumnIdx$$ = this.$_dragStartColumnIdx$;
    null != $dragStartColumnIdx$$ && $dragStartColumnIdx$$ != $columnIdx$$34$$ && ((this.$_currentDropColumnBefore$ = this.$_isDragOverBeforeColumn$($event$$226$$)) && $dragStartColumnIdx$$ == $columnIdx$$34$$ - 1 || !this.$_currentDropColumnBefore$ && $dragStartColumnIdx$$ == $columnIdx$$34$$ + 1 || this.$_getTableDomUtils$().$displayDragOverIndicatorColumn$($columnIdx$$34$$, this.$_currentDropColumnBefore$), $event$$226$$.preventDefault());
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDragOver$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDragOver$$($event$$227$$) {
    if (this.$_isColumnReordering$()) {
      return this.$handleColumnReorderDragOver$($event$$227$$);
    }
    var $columnIdx$$35$$ = this.$_getEventColumnIndex$($event$$227$$);
    this.$_currentDropColumnBefore$ = this.$_isDragOverBeforeColumn$($event$$227$$);
    var $returnValue$$1$$ = this.$_invokeDropCallback$("columns", "dragOver", $event$$227$$, {columnIndex:$columnIdx$$35$$});
    (!1 === $returnValue$$1$$ || $event$$227$$.isDefaultPrevented()) && this.$_getTableDomUtils$().$displayDragOverIndicatorColumn$($columnIdx$$35$$, this.$_isDragOverBeforeColumn$($event$$227$$));
    return $returnValue$$1$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDragLeave$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDragLeave$$($event$$228$$) {
    if (!this.$_isColumnReordering$()) {
      this.$_getTableDomUtils$().$removeDragOverIndicatorColumn$();
      var $columnIdx$$36$$ = this.$_getEventColumnIndex$($event$$228$$);
      return this.$_invokeDndCallback$("drop", "columns", "dragLeave", $event$$228$$, {columnIndex:$columnIdx$$36$$});
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnReorderDrop$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnReorderDrop$$($event$$229$$) {
    var $columnIdx$$37$$ = this.$_getEventColumnIndex$($event$$229$$);
    this.$_currentDropColumnBefore$ || $columnIdx$$37$$++;
    this.$component$.$_columnsDestMap$ = this.$_getTableDomUtils$().$moveTableHeaderColumn$(this.$_dragStartColumnIdx$, $columnIdx$$37$$, $event$$229$$);
    $event$$229$$.preventDefault();
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDrop$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDrop$$($event$$230$$) {
    if (this.$_isColumnReordering$()) {
      return this.$handleColumnReorderDrop$($event$$230$$);
    }
    this.$_getTableDomUtils$().$removeDragOverIndicatorColumn$();
    var $columnIdx$$38$$ = this.$_getEventColumnIndex$($event$$230$$);
    this.$_currentDropColumnBefore$ || $columnIdx$$38$$++;
    return this.$_invokeDropCallback$("columns", "drop", $event$$230$$, {columnIndex:$columnIdx$$38$$});
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDragStart$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDragStart$$($event$$231$$) {
    var $dragOption$$1_ui$$6$$ = this.options.dnd.drag;
    if ($dragOption$$1_ui$$6$$ && $dragOption$$1_ui$$6$$.rows) {
      return($dragOption$$1_ui$$6$$ = this.$_setDragRowsDataTransfer$($event$$231$$, $dragOption$$1_ui$$6$$.rows.dataTypes, this.$component$.$_getSelectedRowIdxs$())) ? this.$_invokeDndCallback$("drag", "rows", "dragStart", $event$$231$$, $dragOption$$1_ui$$6$$) : !1;
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDrag$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDrag$$($event$$232$$) {
    return this.$_invokeDndCallback$("drag", "rows", "drag", $event$$232$$);
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDragEnd$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDragEnd$$($event$$233$$) {
    this.$_destroyDragImage$();
    return this.$_invokeDndCallback$("drag", "rows", "dragEnd", $event$$233$$);
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDragEnter$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDragEnter$$($event$$234$$) {
    var $newRowIndex$$1$$ = this.$_getOverRowIndex$($event$$234$$), $returnValue$$2$$ = this.$_invokeDropCallback$("rows", "dragEnter", $event$$234$$, {rowIndex:$newRowIndex$$1$$});
    (!1 === $returnValue$$2$$ || $event$$234$$.isDefaultPrevented()) && this.$_updateDragRowsState$($event$$234$$, $newRowIndex$$1$$);
    return $returnValue$$2$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDragOver$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDragOver$$($event$$235$$) {
    return this.$_invokeDropCallback$("rows", "dragOver", $event$$235$$, {rowIndex:this.$_dropRowIndex$});
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDragLeave$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDragLeave$$($event$$236$$) {
    var $returnValue$$3$$ = this.$_invokeDndCallback$("drop", "rows", "dragLeave", $event$$236$$, {rowIndex:this.$_dropRowIndex$});
    this.$_isDndEventInElement$($event$$236$$, $event$$236$$.currentTarget) || (this.$_getTableDomUtils$().$removeDragOverIndicatorRow$(), this.$_dropRowIndex$ = null);
    return $returnValue$$3$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDrop$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDrop$$($event$$237$$) {
    var $dropRowIndex$$ = this.$_dropRowIndex$;
    this.$_getTableDomUtils$().$removeDragOverIndicatorRow$();
    this.$_dropRowIndex$ = null;
    return this.$_invokeDropCallback$("rows", "drop", $event$$237$$, {rowIndex:$dropRowIndex$$});
  };
  $oj$$14$$.$TableDndContext$.prototype.$_hideUnselectedRows$ = function $$oj$$14$$$$TableDndContext$$$$_hideUnselectedRows$$($bodyClone$$1$$, $selArray$$) {
    var $bodyRows$$;
    $bodyRows$$ = $bodyClone$$1$$.children("tr");
    for (var $i$$222$$ = 0;$i$$222$$ < $bodyRows$$.length;$i$$222$$++) {
      -1 == $selArray$$.indexOf($i$$222$$) && $$$$14$$($bodyRows$$[$i$$222$$]).css("visibility", "hidden");
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$_invokeDndCallback$ = function $$oj$$14$$$$TableDndContext$$$$_invokeDndCallback$$($dndOption_dndType$$, $callback$$91_itemType$$, $callbackType$$, $event$$238$$, $ui$$7$$) {
    $dndOption_dndType$$ = this.options.dnd[$dndOption_dndType$$];
    var $returnValue$$4$$;
    if ($dndOption_dndType$$ && $dndOption_dndType$$[$callback$$91_itemType$$] && ($callback$$91_itemType$$ = $dndOption_dndType$$[$callback$$91_itemType$$][$callbackType$$]) && "function" == typeof $callback$$91_itemType$$) {
      try {
        $event$$238$$.dataTransfer = $event$$238$$.originalEvent.dataTransfer, $returnValue$$4$$ = $callback$$91_itemType$$($event$$238$$, $ui$$7$$);
      } catch ($e$$92$$) {
        $oj$$14$$.$Logger$.error("Error: " + $e$$92$$);
      }
    }
    return $returnValue$$4$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_invokeDropCallback$ = function $$oj$$14$$$$TableDndContext$$$$_invokeDropCallback$$($itemType$$1$$, $callbackType$$1_returnValue$$5$$, $event$$239$$, $ui$$8$$) {
    $callbackType$$1_returnValue$$5$$ = this.$_invokeDndCallback$("drop", $itemType$$1$$, $callbackType$$1_returnValue$$5$$, $event$$239$$, $ui$$8$$);
    void 0 === $callbackType$$1_returnValue$$5$$ && this.$_matchDragDataType$($event$$239$$, $itemType$$1$$) && $event$$239$$.preventDefault();
    return $callbackType$$1_returnValue$$5$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_isColumnReorderEnabled$ = function $$oj$$14$$$$TableDndContext$$$$_isColumnReorderEnabled$$() {
    var $dndOption$$1$$ = this.options.dnd;
    return $dndOption$$1$$ && $dndOption$$1$$.reorder && $dndOption$$1$$.reorder.columns == this.$component$.$_OPTION_ENABLED$ ? !0 : !1;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_isColumnReordering$ = function $$oj$$14$$$$TableDndContext$$$$_isColumnReordering$$() {
    return null != this.$_dragStartColumnIdx$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_isDndEventInElement$ = function $$oj$$14$$$$TableDndContext$$$$_isDndEventInElement$$($event$$240$$, $element$$104$$) {
    var $rect$$1$$ = $element$$104$$.getBoundingClientRect(), $domEvent$$ = $event$$240$$.originalEvent;
    return $domEvent$$.clientX >= $rect$$1$$.left && $domEvent$$.clientX < $rect$$1$$.right && $domEvent$$.clientY >= $rect$$1$$.top && $domEvent$$.clientY < $rect$$1$$.bottom;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_isDragOverBeforeColumn$ = function $$oj$$14$$$$TableDndContext$$$$_isDragOverBeforeColumn$$($event$$241_onRightHalf$$) {
    var $columnRect$$ = $event$$241_onRightHalf$$.currentTarget.getBoundingClientRect();
    return null != $event$$241_onRightHalf$$.originalEvent.clientX ? ($event$$241_onRightHalf$$ = $columnRect$$.right - $event$$241_onRightHalf$$.originalEvent.clientX < ($columnRect$$.right - $columnRect$$.left) / 2, "rtl" === $oj$$14$$.$DomUtils$.$getReadingDirection$() ? $event$$241_onRightHalf$$ : !$event$$241_onRightHalf$$) : !1;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_matchDragDataType$ = function $$oj$$14$$$$TableDndContext$$$$_matchDragDataType$$($event$$242$$, $itemType$$2$$) {
    var $dragDataTypes$$ = $event$$242$$.originalEvent.dataTransfer.types, $allowedTypeArray_allowedTypes_dndOption$$2$$ = this.options.dnd.drop;
    if ($allowedTypeArray_allowedTypes_dndOption$$2$$ && $allowedTypeArray_allowedTypes_dndOption$$2$$[$itemType$$2$$] && $allowedTypeArray_allowedTypes_dndOption$$2$$[$itemType$$2$$].dataTypes) {
      for (var $allowedTypeArray_allowedTypes_dndOption$$2$$ = $allowedTypeArray_allowedTypes_dndOption$$2$$[$itemType$$2$$].dataTypes, $allowedTypeArray_allowedTypes_dndOption$$2$$ = "string" == typeof $allowedTypeArray_allowedTypes_dndOption$$2$$ ? [$allowedTypeArray_allowedTypes_dndOption$$2$$] : $allowedTypeArray_allowedTypes_dndOption$$2$$, $i$$223$$ = 0;$i$$223$$ < $dragDataTypes$$.length;$i$$223$$++) {
        if (0 <= $allowedTypeArray_allowedTypes_dndOption$$2$$.indexOf($dragDataTypes$$[$i$$223$$])) {
          return!0;
        }
      }
    }
    return!1;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_setHeaderColumnDraggable$ = function $$oj$$14$$$$TableDndContext$$$$_setHeaderColumnDraggable$$($headerColumn$$5$$, $draggable$$) {
    if ($headerColumn$$5$$.draggable = $draggable$$) {
      $$$$14$$($headerColumn$$5$$).css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_CURSOR$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_MOVE$), $$$$14$$($headerColumn$$5$$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAGGABLE$);
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$_clearHeaderColumnDraggable$ = function $$oj$$14$$$$TableDndContext$$$$_clearHeaderColumnDraggable$$($headerColumn$$6$$) {
    $headerColumn$$6$$.draggable = "";
    $$$$14$$($headerColumn$$6$$).css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_CURSOR$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$);
    $$$$14$$($headerColumn$$6$$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAGGABLE$);
  };
  $oj$$14$$.$TableDndContext$.prototype.$_setDragRowsData$ = function $$oj$$14$$$$TableDndContext$$$$_setDragRowsData$$($dataTransfer_nativeEvent$$, $dataTypes$$2$$, $jsonStr$$1_rowDataArray$$) {
    $dataTransfer_nativeEvent$$ = $dataTransfer_nativeEvent$$.dataTransfer;
    $jsonStr$$1_rowDataArray$$ = JSON.stringify($jsonStr$$1_rowDataArray$$);
    if ("string" == typeof $dataTypes$$2$$) {
      $dataTransfer_nativeEvent$$.setData($dataTypes$$2$$, $jsonStr$$1_rowDataArray$$);
    } else {
      if ($dataTypes$$2$$) {
        for (var $i$$224$$ = 0;$i$$224$$ < $dataTypes$$2$$.length;$i$$224$$++) {
          $dataTransfer_nativeEvent$$.setData($dataTypes$$2$$[$i$$224$$], $jsonStr$$1_rowDataArray$$);
        }
      }
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$_setDragRowsDataTransfer$ = function $$oj$$14$$$$TableDndContext$$$$_setDragRowsDataTransfer$$($event$$243$$, $dataTypes$$3$$, $selArray$$1$$) {
    for (var $rowDataArray$$1$$ = [], $i$$225$$ = 0;$i$$225$$ < $selArray$$1$$.length;$i$$225$$++) {
      var $row$$13$$ = this.$component$.getDataForVisibleRow($selArray$$1$$[$i$$225$$]);
      $row$$13$$ && $rowDataArray$$1$$.push($row$$13$$);
    }
    return $rowDataArray$$1$$.length ? (this.$_setDragRowsData$($event$$243$$.originalEvent, $dataTypes$$3$$, $rowDataArray$$1$$), this.$_dragImage$ = this.$_setDragRowsImage$($event$$243$$.originalEvent, $$$$14$$($event$$243$$.currentTarget).closest("tbody"), $selArray$$1$$), {rows:$rowDataArray$$1$$}) : null;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_setDragRowsImage$ = function $$oj$$14$$$$TableDndContext$$$$_setDragRowsImage$$($nativeEvent$$1$$, $scrollTop$$1_tableBody$$6$$, $rect$$2_selArray$$2$$) {
    var $bodyClone$$2$$ = this.$_cloneTableBody$($scrollTop$$1_tableBody$$6$$);
    this.$_hideUnselectedRows$($bodyClone$$2$$, $rect$$2_selArray$$2$$);
    $rect$$2_selArray$$2$$ = $scrollTop$$1_tableBody$$6$$[0].getBoundingClientRect();
    var $scrollLeft$$2$$ = $scrollTop$$1_tableBody$$6$$.scrollLeft();
    $scrollTop$$1_tableBody$$6$$ = $scrollTop$$1_tableBody$$6$$.scrollTop();
    $nativeEvent$$1$$.dataTransfer.setDragImage($bodyClone$$2$$[0], $nativeEvent$$1$$.clientX - $rect$$2_selArray$$2$$.left + $scrollLeft$$2$$, $nativeEvent$$1$$.clientY - $rect$$2_selArray$$2$$.top + $scrollTop$$1_tableBody$$6$$);
    return $bodyClone$$2$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_setReorderColumnsDataTransfer$ = function $$oj$$14$$$$TableDndContext$$$$_setReorderColumnsDataTransfer$$($event$$244$$, $columnIdx$$39$$) {
    var $dataTransfer$$1$$ = $event$$244$$.originalEvent.dataTransfer, $dragImage_tableIdHashCode$$ = this.$_getTableDomUtils$().$hashCode$(this.$_getTableDomUtils$().$getTableUID$());
    $dataTransfer$$1$$.setData("Text", this.$component$.$_DND_REORDER_TABLE_ID_DATA_KEY$ + ":" + $dragImage_tableIdHashCode$$ + ":" + $columnIdx$$39$$);
    $dragImage_tableIdHashCode$$ = this.$_getTableDomUtils$().$createTableHeaderColumnDragImage$($columnIdx$$39$$);
    try {
      $dataTransfer$$1$$.setDragImage($dragImage_tableIdHashCode$$[0], 0, 0);
    } catch ($e$$93$$) {
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$setTableHeaderColumnDraggable$ = function $$oj$$14$$$$TableDndContext$$$$setTableHeaderColumnDraggable$$($columnIdx$$40$$, $draggable$$1$$) {
    if (this.$_isColumnReorderEnabled$()) {
      var $headerColumns$$ = this.$_getTableDomUtils$().$getTableHeaderColumns$();
      if (null != $headerColumns$$ && 0 < $headerColumns$$.length) {
        var $i$$226$$;
        for ($i$$226$$ = 0;$i$$226$$ < $headerColumns$$.length;$i$$226$$++) {
          var $headerColumn$$7$$ = $headerColumns$$[$i$$226$$];
          null != $columnIdx$$40$$ && $i$$226$$ == $columnIdx$$40$$ ? this.$_setHeaderColumnDraggable$($headerColumn$$7$$, $draggable$$1$$) : this.$_clearHeaderColumnDraggable$($headerColumn$$7$$);
        }
      }
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$_updateDragRowsState$ = function $$oj$$14$$$$TableDndContext$$$$_updateDragRowsState$$($event$$245$$, $newRowIndex$$2$$) {
    if (this.$_dropRowIndex$ != $newRowIndex$$2$$) {
      var $overRow$$1$$ = $$$$14$$($event$$245$$.target).closest("tr");
      this.$_dropRowIndex$ = $newRowIndex$$2$$;
      this.$_getTableDomUtils$().$displayDragOverIndicatorRow$(this.$_dropRowIndex$, $overRow$$1$$);
    }
  };
  $oj$$14$$.$TableDomUtils$ = function $$oj$$14$$$$TableDomUtils$$($component$$17$$) {
    this.$component$ = $component$$17$$;
    this.options = $component$$17$$.options;
    this.element = $component$$17$$.element;
    this.Init();
  };
  $goog$exportPath_$$("TableDomUtils", $oj$$14$$.$TableDomUtils$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$TableDomUtils$, $oj$$14$$.$Object$, "oj.TableDomUtils");
  $oj$$14$$.$TableDomUtils$.prototype.Init = function $$oj$$14$$$$TableDomUtils$$$Init$() {
    $oj$$14$$.$TableDomUtils$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDomUtils.prototype.Init", {Init:$oj$$14$$.$TableDomUtils$.prototype.Init});
  $oj$$14$$.$TableDomUtils$.prototype.$clearCachedDom$ = function $$oj$$14$$$$TableDomUtils$$$$clearCachedDom$$() {
    this.$clearCachedDomRowData$();
    this.$_tableDimensions$ = null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$clearCachedDomRowData$ = function $$oj$$14$$$$TableDomUtils$$$$clearCachedDomRowData$$() {
    this.$_cachedDomTableBodyRows$ = null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenu$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenu$$($handleContextMenuSelect$$) {
    var $menuContainer$$1$$ = null, $self$$110$$ = this, $enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$ = this.$component$.$_isTouchDevice$() ? this.$component$.$_getRowSelectionMode$() == this.$component$.$_OPTION_SELECTION_MODES$.$_MULTIPLE$ : !1;
    if (null != this.options.contextMenu || null != this.$getTable$().attr("contextmenu")) {
      if ($enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$ = this.$getContextMenuId$(), $menuContainer$$1$$ = $$$$14$$($enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$), null != $menuContainer$$1$$ && 0 < $menuContainer$$1$$.length) {
        var $listItems$$1_sortMenu$$1$$ = $menuContainer$$1$$.find("[data-oj-command]");
        if (null != $listItems$$1_sortMenu$$1$$ && 0 < $listItems$$1_sortMenu$$1$$.length) {
          var $command$$7$$;
          $listItems$$1_sortMenu$$1$$.each(function() {
            0 === $$$$14$$(this).children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_A$).length && ($command$$7$$ = $$$$14$$(this).attr("data-oj-command").split("-"), $$$$14$$(this).replaceWith($self$$110$$.$createContextMenuItem$($command$$7$$[$command$$7$$.length - 1])));
          });
          this.$_menuContainer$ = $menuContainer$$1$$;
          this.$component$.$_contextMenuId$ = $enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$;
          $menuContainer$$1$$.ojMenu("refresh");
          $menuContainer$$1$$.on("ojselect", $handleContextMenuSelect$$);
        }
      }
    } else {
      if (this.$component$.$_isTableSortable$() || $enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$) {
        $menuContainer$$1$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_UL$)), $menuContainer$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$), $menuContainer$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTableId$() + "_contextmenu"), this.$getTableContainer$().append($menuContainer$$1$$), this.$component$.$_isTableSortable$() && ($listItems$$1_sortMenu$$1$$ = this.$createContextMenuItem$("sort"), 
        $menuContainer$$1$$.append($listItems$$1_sortMenu$$1$$)), $enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$ && ($enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$ = this.$createContextMenuItem$("enableNonContiguousSelection"), $menuContainer$$1$$.append($enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$)), $menuContainer$$1$$.ojMenu(), this.$_menuContainer$ = $menuContainer$$1$$, this.$component$.$_contextMenuId$ = 
        "#" + $menuContainer$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$), $menuContainer$$1$$.on("ojselect", $handleContextMenuSelect$$), this.$component$._setOption("contextMenu", "#" + $menuContainer$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$));
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuItem$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuItem$$($command$$8$$) {
    return "sort" === $command$$8$$ ? $$$$14$$(this.$createContextMenuListItem$($command$$8$$)).append($$$$14$$("\x3cul\x3e\x3c/ul\x3e").append($$$$14$$(this.$createContextMenuListItem$("sortAsc"))).append($$$$14$$(this.$createContextMenuListItem$("sortDsc")))) : "enableNonContiguousSelection" == $command$$8$$ || "disableNonContiguousSelection" == $command$$8$$ ? $$$$14$$(this.$createContextMenuListItem$($command$$8$$)) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuListItem$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuListItem$$($command$$9$$) {
    var $contextMenuListItem$$ = $$$$14$$(document.createElement("li"));
    $contextMenuListItem$$.attr("data-oj-command", "oj-table-" + $command$$9$$);
    $contextMenuListItem$$.append(this.$createContextMenuLabel$($command$$9$$));
    return $contextMenuListItem$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuLabel$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuLabel$$($command$$10$$) {
    var $contextMenuLabel$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_A$));
    $contextMenuLabel$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HREF$, "#");
    var $commandString$$ = null;
    "sort" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSort") : "sortAsc" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSortAsc") : "sortDsc" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSortDsc") : "enableNonContiguousSelection" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelEnableNonContiguousSelection") : "disableNonContiguousSelection" == $command$$10$$ && 
    ($commandString$$ = this.$component$.$getTranslatedString$("labelDisableNonContiguousSelection"));
    $contextMenuLabel$$.text($commandString$$);
    return $contextMenuLabel$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createInitialTable$ = function $$oj$$14$$$$TableDomUtils$$$$createInitialTable$$($isTableHeaderless$$, $isTableFooterless$$) {
    this.$getTable$();
    this.$createTableContainer$();
    this.$isDivScroller$() && this.$createTableDivScroller$();
    $isTableHeaderless$$ || this.$createTableHeader$();
    $isTableFooterless$$ || this.$createTableFooter$();
    this.$createTableBody$();
    this.$createTableStatusMessage$();
    this.$createTableInlineMessage$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBody$$() {
    var $table$$5$$ = this.$getTable$(), $tableBody$$7$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TBODY$));
    $table$$5$$.append($tableBody$$7$$);
    this.$_cachedDomTableBody$ = $tableBody$$7$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyCell$$() {
    return $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyCellAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyCellAccSelect$$($rowIdx$$24_rowKeyStrHashCode_selectRowTitle$$, $rowKey$$7$$, $accSelectCheckbox$$2_rowHashCode$$1$$, $tableBodyRow$$12$$, $isNew$$1$$) {
    var $accSelectionCell$$1_rowKeyStr$$ = null;
    $isNew$$1$$ || ($accSelectionCell$$1_rowKeyStr$$ = this.$getTableBodyCellAccSelect$($tableBodyRow$$12$$));
    null == $accSelectionCell$$1_rowKeyStr$$ && ($accSelectionCell$$1_rowKeyStr$$ = null != $rowKey$$7$$ ? $rowKey$$7$$.toString() : $rowIdx$$24_rowKeyStrHashCode_selectRowTitle$$.toString(), $rowIdx$$24_rowKeyStrHashCode_selectRowTitle$$ = null == $accSelectCheckbox$$2_rowHashCode$$1$$ ? this.$hashCode$($accSelectionCell$$1_rowKeyStr$$) : $accSelectCheckbox$$2_rowHashCode$$1$$, $accSelectionCell$$1_rowKeyStr$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$)), $accSelectionCell$$1_rowKeyStr$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), 
    $accSelectionCell$$1_rowKeyStr$$.css("padding", "0"), $accSelectionCell$$1_rowKeyStr$$.css("border", "0"), null != this.$getTableHeader$() && $accSelectionCell$$1_rowKeyStr$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HEADERS$, this.$getTableId$() + ":" + $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$), $accSelectCheckbox$$2_rowHashCode$$1$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_INPUT$)), $accSelectCheckbox$$2_rowHashCode$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, 
    this.$getTableId$() + ":acc_sel_row_" + $rowIdx$$24_rowKeyStrHashCode_selectRowTitle$$), $accSelectCheckbox$$2_rowHashCode$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TYPE$, "checkbox"), $accSelectCheckbox$$2_rowHashCode$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1"), $rowIdx$$24_rowKeyStrHashCode_selectRowTitle$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$), $accSelectCheckbox$$2_rowHashCode$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, 
    $rowIdx$$24_rowKeyStrHashCode_selectRowTitle$$), $accSelectCheckbox$$2_rowHashCode$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$), $accSelectCheckbox$$2_rowHashCode$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), $accSelectionCell$$1_rowKeyStr$$.append($accSelectCheckbox$$2_rowHashCode$$1$$), $tableBodyRow$$12$$.prepend($accSelectionCell$$1_rowKeyStr$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyRow$$($rowIdx$$25$$, $rowKey$$8$$) {
    var $tableBodyRow$$13$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    this.$createTableBodyCellAccSelect$($rowIdx$$25$$, $rowKey$$8$$, null, $tableBodyRow$$13$$, !0);
    return $tableBodyRow$$13$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyRowTouchSelectionAffordance$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyRowTouchSelectionAffordance$$($rowIdx$$26$$) {
    var $topAffordance$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $topAffordance$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_CLASS$);
    $topAffordance$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOUCH_AREA_CLASS$);
    $topAffordance$$.data("rowIdx", $rowIdx$$26$$);
    var $bottomAffordance_topIcon$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $bottomAffordance_topIcon$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_ICON_CLASS$);
    $bottomAffordance_topIcon$$.attr("role", "button");
    $bottomAffordance_topIcon$$.attr("aria-label", this.$component$.$getTranslatedString$("labelAccSelectionAffordanceTop"));
    $bottomAffordance_topIcon$$.data("rowIdx", $rowIdx$$26$$);
    $topAffordance$$.append($bottomAffordance_topIcon$$);
    $bottomAffordance_topIcon$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $bottomAffordance_topIcon$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_CLASS$);
    $bottomAffordance_topIcon$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOUCH_AREA_CLASS$);
    $bottomAffordance_topIcon$$.data("rowIdx", $rowIdx$$26$$);
    var $bottomIcon_tableContainer$$4$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $bottomIcon_tableContainer$$4$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_ICON_CLASS$);
    $bottomIcon_tableContainer$$4$$.attr("role", "button");
    $bottomIcon_tableContainer$$4$$.attr("aria-label", this.$component$.$getTranslatedString$("labelAccSelectionAffordanceBottom"));
    $bottomIcon_tableContainer$$4$$.data("rowIdx", $rowIdx$$26$$);
    $bottomAffordance_topIcon$$.append($bottomIcon_tableContainer$$4$$);
    $bottomIcon_tableContainer$$4$$ = this.$getTableContainer$();
    $bottomIcon_tableContainer$$4$$.append($topAffordance$$);
    $bottomIcon_tableContainer$$4$$.append($bottomAffordance_topIcon$$);
    this.$moveTableBodyRowTouchSelectionAffordanceTop$($rowIdx$$26$$);
    this.$moveTableBodyRowTouchSelectionAffordanceBottom$($rowIdx$$26$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$createTableContainer$$() {
    var $tableContainer$$5$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    this.element.parent()[0].replaceChild($tableContainer$$5$$[0], this.element[0]);
    $tableContainer$$5$$.prepend(this.element);
    this.$_cachedDomTableContainer$ = $tableContainer$$5$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooter$$() {
    var $table$$6$$ = this.$getTable$(), $tableFooter$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TFOOT$)), $tableBody$$8_tableFooterRow$$2_tableHeader$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    this.$createTableFooterAccSelect$($tableBody$$8_tableFooterRow$$2_tableHeader$$2$$);
    $tableFooter$$2$$.append($tableBody$$8_tableFooterRow$$2_tableHeader$$2$$);
    $tableBody$$8_tableFooterRow$$2_tableHeader$$2$$ = this.$getTableHeader$();
    null != $tableBody$$8_tableFooterRow$$2_tableHeader$$2$$ ? $tableBody$$8_tableFooterRow$$2_tableHeader$$2$$.after($tableFooter$$2$$) : ($tableBody$$8_tableFooterRow$$2_tableHeader$$2$$ = this.$getTableBody$(), null != $tableBody$$8_tableFooterRow$$2_tableHeader$$2$$ ? $tableBody$$8_tableFooterRow$$2_tableHeader$$2$$.before($tableFooter$$2$$) : $table$$6$$.append($tableFooter$$2$$));
    return $tableFooter$$2$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooterAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooterAccSelect$$($tableFooterRow$$3$$) {
    var $accFooterCell$$ = $tableFooterRow$$3$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    null != $accFooterCell$$ && 0 < $accFooterCell$$.length ? $$$$14$$($accFooterCell$$[0]) : ($accFooterCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$)), $accFooterCell$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), $accFooterCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1"), $tableFooterRow$$3$$.prepend($accFooterCell$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooterCell$$() {
    return $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeader$$() {
    var $table$$7$$ = this.$getTable$(), $tableHeader$$3$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_THEAD$)), $tableBody$$9_tableFooter$$3_tableHeaderRow$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    this.$_cachedDomTableHeaderRow$ = $tableBody$$9_tableFooter$$3_tableHeaderRow$$2$$;
    $tableHeader$$3$$.append($tableBody$$9_tableFooter$$3_tableHeaderRow$$2$$);
    $tableBody$$9_tableFooter$$3_tableHeaderRow$$2$$ = this.$getTableFooter$();
    null != $tableBody$$9_tableFooter$$3_tableHeaderRow$$2$$ ? $tableBody$$9_tableFooter$$3_tableHeaderRow$$2$$.before($tableHeader$$3$$) : ($tableBody$$9_tableFooter$$3_tableHeaderRow$$2$$ = this.$getTableBody$(), null != $tableBody$$9_tableFooter$$3_tableHeaderRow$$2$$ ? $tableBody$$9_tableFooter$$3_tableHeaderRow$$2$$.before($tableHeader$$3$$) : $table$$7$$.append($tableHeader$$3$$));
    return this.$_cachedDomTableHeader$ = $tableHeader$$3$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderAccSelectRowColumn$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderAccSelectRowColumn$$() {
    var $headerColumn$$8$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TH$));
    $headerColumn$$8$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$);
    $headerColumn$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTableId$() + ":" + $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$);
    var $selectRowTitle$$1$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$);
    $headerColumn$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, $selectRowTitle$$1$$);
    $headerColumn$$8$$.css("padding", "0");
    $headerColumn$$8$$.css("border", "0");
    var $headerColumnText$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_SPAN$));
    $headerColumnText$$.text($selectRowTitle$$1$$);
    $headerColumnText$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumn$$8$$.append($headerColumnText$$);
    return $headerColumn$$8$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumn$$($columnIdx$$43_headerContext$$1$$) {
    var $column$$12$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$43_headerContext$$1$$], $headerColumnCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TH$));
    this.$styleTableHeaderColumn$($columnIdx$$43_headerContext$$1$$, $headerColumnCell$$, !0);
    $headerColumnCell$$.attr("abbr", $column$$12$$.headerText);
    $headerColumnCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, $column$$12$$.headerText);
    this.$insertTableHeaderColumn$($columnIdx$$43_headerContext$$1$$, $headerColumnCell$$);
    $columnIdx$$43_headerContext$$1$$ = {columnIndex:$columnIdx$$43_headerContext$$1$$, headerContext:{component:this.$component$, parentElement:$headerColumnCell$$}};
    $column$$12$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ ? ($headerColumnCell$$.attr("data-oj-sortable", $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$), $oj$$14$$.$TableRendererUtils$.$columnHeaderSortableIconRenderer$($columnIdx$$43_headerContext$$1$$, null)) : $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultRenderer$($columnIdx$$43_headerContext$$1$$, null);
    return $headerColumnCell$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumnDragImage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumnDragImage$$($columnIdx$$44_headerColumnDragImage$$) {
    $columnIdx$$44_headerColumnDragImage$$ = this.$getTableHeaderColumn$($columnIdx$$44_headerColumnDragImage$$).clone();
    $columnIdx$$44_headerColumnDragImage$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
    $columnIdx$$44_headerColumnDragImage$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
    $columnIdx$$44_headerColumnDragImage$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    $columnIdx$$44_headerColumnDragImage$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_IMAGE$);
    $columnIdx$$44_headerColumnDragImage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_ABSOLUTE$);
    $columnIdx$$44_headerColumnDragImage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, "0");
    $columnIdx$$44_headerColumnDragImage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "0");
    $columnIdx$$44_headerColumnDragImage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_ZINDEX$, "-999");
    this.$getTableContainer$().append($columnIdx$$44_headerColumnDragImage$$);
    return $columnIdx$$44_headerColumnDragImage$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumnAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumnAccSelect$$($columnIdx$$45$$, $columnSelectionMode$$2$$) {
    if ($columnSelectionMode$$2$$ == $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_SINGLE$ || $columnSelectionMode$$2$$ == $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
      var $headerColumn$$10$$ = this.$getTableHeaderColumn$($columnIdx$$45$$), $accSelectionHeaderColumn$$ = this.$getTableHeaderColumnAccSelect$($columnIdx$$45$$);
      if (null == $accSelectionHeaderColumn$$) {
        $accSelectionHeaderColumn$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
        $accSelectionHeaderColumn$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
        var $accSelectCheckbox$$3$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_INPUT$));
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTableId$() + ":acc_sel_col" + $columnIdx$$45$$);
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TYPE$, "checkbox");
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1");
        var $selectColumnTitle$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_COLUMN$);
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, $selectColumnTitle$$);
        $accSelectCheckbox$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.append($accSelectCheckbox$$3$$);
        $headerColumn$$10$$.prepend($accSelectionHeaderColumn$$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$createTableDivScroller$$() {
    var $table$$8$$ = this.$getTable$(), $tableContainer$$7$$ = this.$getTableContainer$(), $tableDivScroller$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $tableDivScroller$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$);
    $tableContainer$$7$$[0].replaceChild($tableDivScroller$$[0], $table$$8$$[0]);
    $tableDivScroller$$.append($table$$8$$);
    this.$_cachedDomTableDivScroller$ = $tableDivScroller$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableNoDataRow$ = function $$oj$$14$$$$TableDomUtils$$$$createTableNoDataRow$$($columnCount$$) {
    var $tableBody$$10$$ = this.$getTableBody$(), $tableNoDataRow$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    $tableNoDataRow$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_ROW_CLASS$);
    this.$createTableNoDataAccSelect$($tableNoDataRow$$);
    this.$createTableNoDataCell$($tableNoDataRow$$, $columnCount$$);
    $tableBody$$10$$.append($tableNoDataRow$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableNoDataAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableNoDataAccSelect$$($tableNoDataRow$$1$$) {
    var $accNoDataCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
    $accNoDataCell$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $accNoDataCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1");
    $tableNoDataRow$$1$$.prepend($accNoDataCell$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableNoDataCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableNoDataCell$$($tableNoDataRow$$2$$, $columnCount$$1$$) {
    var $noDataCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
    $noDataCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$, $columnCount$$1$$ || 1);
    $noDataCell$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$);
    var $emptyTextMsg$$ = null, $emptyTextMsg$$ = null != this.options.emptyText ? this.options.emptyText : this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_NO_DATA$);
    $noDataCell$$.text($emptyTextMsg$$);
    $tableNoDataRow$$2$$.append($noDataCell$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableInlineMessage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableInlineMessage$$() {
    var $tableContainer$$8$$ = this.$getTableContainer$(), $inlineMessage$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $inlineMessage$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_INLINE_MESSAGE_CLASS$);
    $inlineMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    $tableContainer$$8$$.append($inlineMessage$$2$$);
    this.$_cachedDomTableInlineMessage$ = $inlineMessage$$2$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableStatusMessage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableStatusMessage$$() {
    var $tableContainer$$9$$ = this.$getTableContainer$(), $statusMessage$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $statusMessage$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
    $statusMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    var $statusMessageText$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $statusMessageText$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_TEXT_CLASS$);
    $statusMessageText$$.text(this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_FETCHING_DATA$));
    $statusMessage$$2$$.append($statusMessageText$$);
    $tableContainer$$9$$.append($statusMessage$$2$$);
    this.$_cachedDomTableStatusMessage$ = $statusMessage$$2$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$displayDragOverIndicatorColumn$ = function $$oj$$14$$$$TableDomUtils$$$$displayDragOverIndicatorColumn$$($columnIdx$$46$$, $before$$1$$) {
    this.$removeDragOverIndicatorColumn$();
    var $tableHeaderRow$$3$$ = this.$getTableHeaderRow$(), $columns$$14_tableHeaderColumn$$8$$ = this.$getTableHeaderColumn$($columnIdx$$46$$);
    if (null != $columns$$14_tableHeaderColumn$$8$$) {
      $before$$1$$ ? $columns$$14_tableHeaderColumn$$8$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS$) : $columns$$14_tableHeaderColumn$$8$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS$);
    } else {
      if ($columns$$14_tableHeaderColumn$$8$$ = this.$component$.$_getColumnDefs$(), null == $columns$$14_tableHeaderColumn$$8$$ || 0 == $columns$$14_tableHeaderColumn$$8$$.length) {
        $before$$1$$ ? $tableHeaderRow$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS$) : $tableHeaderRow$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$displayDragOverIndicatorRow$ = function $$oj$$14$$$$TableDomUtils$$$$displayDragOverIndicatorRow$$($rowIdx$$27$$, $modelRow$$) {
    this.$removeDragOverIndicatorRow$();
    var $tableBodyRowDragIndicator$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    $tableBodyRowDragIndicator$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_DRAG_INDICATOR_BEFORE_CLASS$);
    $modelRow$$ && $tableBodyRowDragIndicator$$.height($modelRow$$.height());
    var $tableBodyDragIndicatorCell_tableBodyRow$$14$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$)), $columns$$15$$ = this.$component$.$_getColumnDefs$();
    $tableBodyDragIndicatorCell_tableBodyRow$$14$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$, $columns$$15$$.length + 1);
    $tableBodyRowDragIndicator$$.append($tableBodyDragIndicatorCell_tableBodyRow$$14$$);
    $tableBodyDragIndicatorCell_tableBodyRow$$14$$ = this.$getTableBodyRow$($rowIdx$$27$$);
    null != $tableBodyDragIndicatorCell_tableBodyRow$$14$$ ? $tableBodyDragIndicatorCell_tableBodyRow$$14$$.before($tableBodyRowDragIndicator$$) : this.$getTableBody$().append($tableBodyRowDragIndicator$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getContextMenuId$ = function $$oj$$14$$$$TableDomUtils$$$$getContextMenuId$$() {
    return null == this.options.contextMenu ? "#" + this.$getTable$().attr("contextmenu") : this.options.contextMenu;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getElementColumnIdx$ = function $$oj$$14$$$$TableDomUtils$$$$getElementColumnIdx$$($element$$105_tableFooterCell$$2$$) {
    var $tableBodyCell$$5_tableHeaderColumn$$9$$ = this.$getFirstAncestor$($element$$105_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    if (null != $tableBodyCell$$5_tableHeaderColumn$$9$$) {
      return $tableBodyCell$$5_tableHeaderColumn$$9$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$).index($tableBodyCell$$5_tableHeaderColumn$$9$$);
    }
    $tableBodyCell$$5_tableHeaderColumn$$9$$ = this.$getFirstAncestor$($element$$105_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$);
    if (null != $tableBodyCell$$5_tableHeaderColumn$$9$$) {
      return $tableBodyCell$$5_tableHeaderColumn$$9$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$).index($tableBodyCell$$5_tableHeaderColumn$$9$$);
    }
    $element$$105_tableFooterCell$$2$$ = this.$getFirstAncestor$($element$$105_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    return null != $element$$105_tableFooterCell$$2$$ ? $element$$105_tableFooterCell$$2$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$).index($element$$105_tableFooterCell$$2$$) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getElementRowIdx$ = function $$oj$$14$$$$TableDomUtils$$$$getElementRowIdx$$($element$$106_tableBodyRow$$15$$) {
    $element$$106_tableBodyRow$$15$$ = this.$getFirstAncestor$($element$$106_tableBodyRow$$15$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
    return null != $element$$106_tableBodyRow$$15$$ ? $element$$106_tableBodyRow$$15$$.index() : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getFirstAncestor$ = function $$oj$$14$$$$TableDomUtils$$$$getFirstAncestor$$($element$$107$$, $className$$8$$) {
    var $parents$$1$$;
    if (null == $element$$107$$) {
      return null;
    }
    $element$$107$$ = $$$$14$$($element$$107$$);
    if ($element$$107$$.hasClass($className$$8$$)) {
      return $element$$107$$;
    }
    $parents$$1$$ = $element$$107$$.parents("." + $className$$8$$);
    return 0 != $parents$$1$$.length ? $parents$$1$$.eq(0) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollbarHeight$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollbarHeight$$() {
    var $scroller$$ = this.$getScroller$();
    return 0 < $scroller$$.get(0).clientHeight ? $scroller$$.get(0).offsetHeight - $scroller$$.get(0).clientHeight : 0;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollbarWidth$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollbarWidth$$() {
    var $scroller$$1$$ = this.$getScroller$();
    return 0 < $scroller$$1$$.get(0).clientWidth ? $scroller$$1$$.get(0).offsetWidth - $scroller$$1$$.get(0).clientWidth : 0;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScroller$ = function $$oj$$14$$$$TableDomUtils$$$$getScroller$$() {
    return this.$isDivScroller$() ? this.$getTableDivScroller$() : this.$getTableBody$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollLeft$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollLeft$$($element$$108$$) {
    $element$$108$$ = $$$$14$$($element$$108$$);
    var $scrollLeft$$3$$ = $element$$108$$[0].scrollLeft;
    "rtl" === this.$component$.$_GetReadingDirection$() && ($scrollLeft$$3$$ = Math.abs($scrollLeft$$3$$), this.$_isWebkit$() && ($scrollLeft$$3$$ = $element$$108$$[0].scrollWidth - $element$$108$$[0].clientWidth - $scrollLeft$$3$$));
    return $scrollLeft$$3$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTable$ = function $$oj$$14$$$$TableDomUtils$$$$getTable$$() {
    return $$$$14$$(this.element);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBody$$() {
    if (!this.$_cachedDomTableBody$) {
      var $table$$9$$ = this.$getTable$(), $tableBody$$11$$ = null;
      $table$$9$$ && ($tableBody$$11$$ = $table$$9$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$)) && 0 < $tableBody$$11$$.length && (this.$_cachedDomTableBody$ = $$$$14$$($tableBody$$11$$.get(0)));
    }
    return this.$_cachedDomTableBody$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCell$$($rowIdx$$28_tableBodyCells$$2$$, $columnIdx$$47$$, $tableBodyRow$$16$$) {
    return($rowIdx$$28_tableBodyCells$$2$$ = this.$getTableBodyCells$($rowIdx$$28_tableBodyCells$$2$$, $tableBodyRow$$16$$)) ? $rowIdx$$28_tableBodyCells$$2$$.length > $columnIdx$$47$$ ? $$$$14$$($rowIdx$$28_tableBodyCells$$2$$[$columnIdx$$47$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCellAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCellAccSelect$$($accSelectionCell$$2_tableBodyRow$$17$$) {
    return null != $accSelectionCell$$2_tableBodyRow$$17$$ && ($accSelectionCell$$2_tableBodyRow$$17$$ = $accSelectionCell$$2_tableBodyRow$$17$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), null != $accSelectionCell$$2_tableBodyRow$$17$$ && 0 < $accSelectionCell$$2_tableBodyRow$$17$$.length) ? $$$$14$$($accSelectionCell$$2_tableBodyRow$$17$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyLogicalCells$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyLogicalCells$$($rowIdx$$29_tableBodyCells$$3$$) {
    return($rowIdx$$29_tableBodyCells$$3$$ = this.$getTableBodyCells$($rowIdx$$29_tableBodyCells$$3$$, void 0)) ? this.$_getColspanLogicalElements$($rowIdx$$29_tableBodyCells$$3$$) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCells$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCells$$($rowIdx$$30$$, $tableBodyRow$$19$$) {
    $tableBodyRow$$19$$ || ($tableBodyRow$$19$$ = this.$getTableBodyRow$($rowIdx$$30$$));
    if (!$tableBodyRow$$19$$) {
      return null;
    }
    var $tableBodyCellElements$$ = $tableBodyRow$$19$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    return null != $tableBodyCellElements$$ && 0 < $tableBodyCellElements$$.length ? $tableBodyCellElements$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRow$$($rowIdx$$31$$) {
    var $tableBodyRows$$10$$ = this.$getTableBodyRows$();
    return $tableBodyRows$$10$$ && null != $rowIdx$$31$$ ? $tableBodyRows$$10$$.length > $rowIdx$$31$$ ? $$$$14$$($tableBodyRows$$10$$[$rowIdx$$31$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRows$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRows$$() {
    if (!this.$_cachedDomTableBodyRows$) {
      var $tableBodyRowElements$$ = this.$getTableBody$().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
      null != $tableBodyRowElements$$ && 0 < $tableBodyRowElements$$.length && (this.$_cachedDomTableBodyRows$ = $tableBodyRowElements$$);
    }
    return this.$_cachedDomTableBodyRows$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRowTouchSelectionAffordanceTop$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRowTouchSelectionAffordanceTop$$() {
    var $topAffordance$$1$$ = this.$getTableContainer$().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_CLASS$);
    return null != $topAffordance$$1$$ && 0 < $topAffordance$$1$$.length ? $topAffordance$$1$$ = $$$$14$$($topAffordance$$1$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRowTouchSelectionAffordanceBottom$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRowTouchSelectionAffordanceBottom$$() {
    var $bottomAffordance$$1$$ = this.$getTableContainer$().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_CLASS$);
    return null != $bottomAffordance$$1$$ && 0 < $bottomAffordance$$1$$.length ? $bottomAffordance$$1$$ = $$$$14$$($bottomAffordance$$1$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$getTableContainer$$() {
    this.$_cachedDomTableContainer$ || (this.$isDivScroller$() ? this.$_cachedDomTableContainer$ = $$$$14$$(this.element.get(0).parentNode.parentNode) : this.$_cachedDomTableContainer$ = $$$$14$$(this.element.get(0).parentNode));
    return this.$_cachedDomTableContainer$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooter$$() {
    var $table$$10$$ = this.$getTable$(), $tableFooter$$4$$ = null;
    return $table$$10$$ && ($tableFooter$$4$$ = $table$$10$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$)) && 0 < $tableFooter$$4$$.length ? $$$$14$$($tableFooter$$4$$.get(0)) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterCell$$($columnIdx$$48$$) {
    var $tableFooterCells$$ = this.$getTableFooterCells$();
    return null != $tableFooterCells$$ && $tableFooterCells$$.length > $columnIdx$$48$$ ? $$$$14$$($tableFooterCells$$[$columnIdx$$48$$]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterCells$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterCells$$() {
    var $tableFooterCells$$1_tableFooterRow$$4$$ = this.$getTableFooterRow$(), $tableFooterCells$$1_tableFooterRow$$4$$ = $$$$14$$($tableFooterCells$$1_tableFooterRow$$4$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    return null != $tableFooterCells$$1_tableFooterRow$$4$$ && 0 < $tableFooterCells$$1_tableFooterRow$$4$$.length ? $tableFooterCells$$1_tableFooterRow$$4$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterLogicalCells$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterLogicalCells$$() {
    var $tableFooterCells$$2$$ = this.$getTableFooterCells$();
    return $tableFooterCells$$2$$ ? this.$_getColspanLogicalElements$($tableFooterCells$$2$$) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterRow$$() {
    if (!this.$_cachedDomTableFooterRow$) {
      var $tableFooter$$5$$ = this.$getTableFooter$();
      if (!$tableFooter$$5$$) {
        return null;
      }
      this.$_cachedDomTableFooterRow$ = $$$$14$$($tableFooter$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$).get(0));
    }
    return this.$_cachedDomTableFooterRow$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeader$$() {
    if (!this.$_cachedDomTableHeader$) {
      var $table$$11$$ = this.$getTable$(), $tableHeader$$4$$ = null;
      $table$$11$$ && ($tableHeader$$4$$ = $table$$11$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$)) && 0 < $tableHeader$$4$$.length && (this.$_cachedDomTableHeader$ = $$$$14$$($tableHeader$$4$$.get(0)));
    }
    return this.$_cachedDomTableHeader$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumn$$($columnIdx$$49$$) {
    var $headerColumns$$1$$ = this.$getTableHeaderColumns$();
    return $headerColumns$$1$$ ? $headerColumns$$1$$.length > $columnIdx$$49$$ ? $$$$14$$($headerColumns$$1$$[$columnIdx$$49$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumnAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumnAccSelect$$($accSelectionCell$$3_columnIdx$$50_headerColumn$$11$$) {
    $accSelectionCell$$3_columnIdx$$50_headerColumn$$11$$ = this.$getTableHeaderColumn$($accSelectionCell$$3_columnIdx$$50_headerColumn$$11$$);
    return null != $accSelectionCell$$3_columnIdx$$50_headerColumn$$11$$ && ($accSelectionCell$$3_columnIdx$$50_headerColumn$$11$$ = $accSelectionCell$$3_columnIdx$$50_headerColumn$$11$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$), null != $accSelectionCell$$3_columnIdx$$50_headerColumn$$11$$ && 0 < $accSelectionCell$$3_columnIdx$$50_headerColumn$$11$$.length) ? $$$$14$$($accSelectionCell$$3_columnIdx$$50_headerColumn$$11$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumns$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumns$$() {
    var $headerColumnElements_tableHeaderRow$$4$$ = this.$getTableHeaderRow$();
    return null != $headerColumnElements_tableHeaderRow$$4$$ && ($headerColumnElements_tableHeaderRow$$4$$ = $headerColumnElements_tableHeaderRow$$4$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$), null != $headerColumnElements_tableHeaderRow$$4$$ && 0 < $headerColumnElements_tableHeaderRow$$4$$.length) ? $headerColumnElements_tableHeaderRow$$4$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderLogicalColumns$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderLogicalColumns$$() {
    var $tableHeaderColumns$$1$$ = this.$getTableHeaderColumns$();
    return $tableHeaderColumns$$1$$ ? this.$_getColspanLogicalElements$($tableHeaderColumns$$1$$) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderRow$$() {
    if (!this.$_cachedDomTableHeaderRow$) {
      var $tableHeader$$5$$ = this.$getTableHeader$();
      if (!$tableHeader$$5$$) {
        return null;
      }
      this.$_cachedDomTableHeaderRow$ = $$$$14$$($tableHeader$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$).get(0));
    }
    return this.$_cachedDomTableHeaderRow$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$getTableDivScroller$$() {
    if (!this.$_cachedDomTableDivScroller$) {
      var $tableContainer$$12_tableDivScroller$$1$$ = this.$getTableContainer$();
      $tableContainer$$12_tableDivScroller$$1$$ && ($tableContainer$$12_tableDivScroller$$1$$ = $tableContainer$$12_tableDivScroller$$1$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$)) && 0 < $tableContainer$$12_tableDivScroller$$1$$.length && (this.$_cachedDomTableDivScroller$ = $$$$14$$($tableContainer$$12_tableDivScroller$$1$$.get(0)));
    }
    return this.$_cachedDomTableDivScroller$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableId$ = function $$oj$$14$$$$TableDomUtils$$$$getTableId$$() {
    this.$_tableId$ || (this.$_tableId$ = this.$getTable$().attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$));
    return this.$_tableId$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableInlineMessage$ = function $$oj$$14$$$$TableDomUtils$$$$getTableInlineMessage$$() {
    if (!this.$_cachedDomTableInlineMessage$) {
      var $inlineMessage$$3_tableContainer$$13$$ = this.$getTableContainer$();
      $inlineMessage$$3_tableContainer$$13$$ && ($inlineMessage$$3_tableContainer$$13$$ = $inlineMessage$$3_tableContainer$$13$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_INLINE_MESSAGE_CLASS$)) && 0 < $inlineMessage$$3_tableContainer$$13$$.length && (this.$_cachedDomTableInlineMessage$ = $$$$14$$($inlineMessage$$3_tableContainer$$13$$.get(0)));
    }
    return this.$_cachedDomTableInlineMessage$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableNoDataRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableNoDataRow$$() {
    var $noDataRow$$2_tableBody$$13$$ = this.$getTableBody$();
    return $noDataRow$$2_tableBody$$13$$ && ($noDataRow$$2_tableBody$$13$$ = $noDataRow$$2_tableBody$$13$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_ROW_CLASS$)) && 0 < $noDataRow$$2_tableBody$$13$$.length ? $$$$14$$($noDataRow$$2_tableBody$$13$$.get(0)) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableStatusMessage$ = function $$oj$$14$$$$TableDomUtils$$$$getTableStatusMessage$$() {
    if (!this.$_cachedDomTableStatusMessage$) {
      var $statusMessage$$3_tableContainer$$14$$ = this.$getTableContainer$();
      $statusMessage$$3_tableContainer$$14$$ && ($statusMessage$$3_tableContainer$$14$$ = $statusMessage$$3_tableContainer$$14$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$)) && 0 < $statusMessage$$3_tableContainer$$14$$.length && (this.$_cachedDomTableStatusMessage$ = $$$$14$$($statusMessage$$3_tableContainer$$14$$.get(0)));
    }
    return this.$_cachedDomTableStatusMessage$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableUID$ = function $$oj$$14$$$$TableDomUtils$$$$getTableUID$$() {
    if (!this.$_tableUID$) {
      var $uid$$ = this.$getTableId$();
      null == $uid$$ && ($uid$$ = (1E32 * Math.random()).toString(36));
      this.$_tableUID$ = $uid$$;
    }
    return this.$_tableUID$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$hashCode$ = function $$oj$$14$$$$TableDomUtils$$$$hashCode$$($str$$18$$) {
    "string" != $$$$14$$.type($str$$18$$) && ($str$$18$$ = $str$$18$$.toString());
    var $hash$$1$$ = 0;
    if (0 == $str$$18$$.length) {
      return $hash$$1$$;
    }
    var $charVal$$, $i$$227$$, $strCount$$ = $str$$18$$.length;
    for ($i$$227$$ = 0;$i$$227$$ < $strCount$$;$i$$227$$++) {
      $charVal$$ = $str$$18$$.charCodeAt($i$$227$$), $hash$$1$$ = ($hash$$1$$ << 5) - $hash$$1$$ + $charVal$$, $hash$$1$$ &= $hash$$1$$;
    }
    return $hash$$1$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableBodyCell$$($rowIdx$$32$$, $rowKey$$9$$, $rowHashCode$$2$$, $columnIdx$$51$$, $tableBodyCell$$6$$, $tableBodyRow$$20$$) {
    this.$setTableBodyCellAttributes$($rowIdx$$32$$, $rowKey$$9$$, $rowHashCode$$2$$, $columnIdx$$51$$, $tableBodyCell$$6$$);
    $$$$14$$($tableBodyRow$$20$$).append($tableBodyCell$$6$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableBodyRow$$($rowIdx$$33$$, $tableBodyRow$$21$$, $row$$14_tableBody$$14$$, $docFrag$$2_tableBodyRows$$11$$) {
    this.$setTableBodyRowAttributes$($row$$14_tableBody$$14$$, $tableBodyRow$$21$$);
    null == $docFrag$$2_tableBodyRows$$11$$ ? ($row$$14_tableBody$$14$$ = this.$getTableBody$(), $docFrag$$2_tableBodyRows$$11$$ = $row$$14_tableBody$$14$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$), 0 == $rowIdx$$33$$ ? $row$$14_tableBody$$14$$.prepend($tableBodyRow$$21$$) : $docFrag$$2_tableBodyRows$$11$$.length >= $rowIdx$$33$$ ? $$$$14$$($docFrag$$2_tableBodyRows$$11$$.get($rowIdx$$33$$ - 1)).after($tableBodyRow$$21$$) : $row$$14_tableBody$$14$$.append($tableBodyRow$$21$$)) : 
    $docFrag$$2_tableBodyRows$$11$$.append($tableBodyRow$$21$$);
    this.$clearCachedDomRowData$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableFooterCell$$($columnIdx$$52$$, $tableFooterCell$$3$$) {
    var $tableFooterRow$$5$$ = this.$getTableFooterRow$(), $accFooterCell$$1_tableFooterCells$$3$$ = $$$$14$$($tableFooterRow$$5$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    0 == $columnIdx$$52$$ ? ($accFooterCell$$1_tableFooterCells$$3$$ = $tableFooterRow$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), null != $accFooterCell$$1_tableFooterCells$$3$$ && 0 < $accFooterCell$$1_tableFooterCells$$3$$.length ? $$$$14$$($accFooterCell$$1_tableFooterCells$$3$$[0]).after($tableFooterCell$$3$$) : $tableFooterRow$$5$$.prepend($tableFooterCell$$3$$)) : $tableFooterRow$$5$$.length >= $columnIdx$$52$$ ? $$$$14$$($accFooterCell$$1_tableFooterCells$$3$$.get($columnIdx$$52$$ - 
    1)).after($tableFooterCell$$3$$) : $tableFooterRow$$5$$.append($tableFooterCell$$3$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableHeaderColumn$$($columnIdx$$53$$, $tableHeaderColumn$$10$$) {
    var $tableHeaderRow$$5$$ = this.$getTableHeaderRow$(), $accSelectionColumn$$1_tableHeaderColumns$$2$$ = this.$getTableHeaderColumns$();
    this.$setTableHeaderColumnAttributes$($columnIdx$$53$$, $tableHeaderColumn$$10$$);
    var $oldTableHeaderColumn$$ = this.$getTableHeaderColumn$($columnIdx$$53$$);
    $oldTableHeaderColumn$$ ? $oldTableHeaderColumn$$.replaceWith($tableHeaderColumn$$10$$) : 0 == $columnIdx$$53$$ ? ($accSelectionColumn$$1_tableHeaderColumns$$2$$ = $tableHeaderRow$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$), null != $accSelectionColumn$$1_tableHeaderColumns$$2$$ && 0 < $accSelectionColumn$$1_tableHeaderColumns$$2$$.length ? $$$$14$$($accSelectionColumn$$1_tableHeaderColumns$$2$$[0]).after($tableHeaderColumn$$10$$) : $tableHeaderRow$$5$$.prepend($tableHeaderColumn$$10$$)) : 
    $accSelectionColumn$$1_tableHeaderColumns$$2$$.length >= $columnIdx$$53$$ ? $$$$14$$($accSelectionColumn$$1_tableHeaderColumns$$2$$.get($columnIdx$$53$$ - 1)).after($tableHeaderColumn$$10$$) : $tableHeaderRow$$5$$.append($tableHeaderColumn$$10$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$isDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$isDivScroller$$() {
    return this.$_isIE$() && 10 > this.$_isIE$() ? !0 : !1;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$isTableContainerScrollable$ = function $$oj$$14$$$$TableDomUtils$$$$isTableContainerScrollable$$() {
    var $tableContainer$$15$$ = this.$getTableContainer$(), $table$$12$$ = this.$getTable$(), $tableStatusMessage$$1$$ = this.$getTableStatusMessage$(), $tableStatusMessageDisplay$$ = $tableStatusMessage$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$).toString();
    $tableStatusMessage$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    var $result$$38$$ = [];
    $result$$38$$[0] = 0 < $tableContainer$$15$$[0].clientHeight ? $table$$12$$[0].clientHeight > $tableContainer$$15$$[0].clientHeight ? 1 : 1 < $tableContainer$$15$$[0].clientHeight - $table$$12$$[0].clientHeight ? -1 : 0 : 0;
    $result$$38$$[1] = 0 < $tableContainer$$15$$[0].clientWidth ? $table$$12$$[0].clientWidth > $tableContainer$$15$$[0].clientWidth ? 1 : 1 < $tableContainer$$15$$[0].clientWidth - $table$$12$$[0].clientWidth ? -1 : 0 : 0;
    $tableStatusMessage$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $tableStatusMessageDisplay$$);
    return $result$$38$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$moveTableBodyRowTouchSelectionAffordanceTop$ = function $$oj$$14$$$$TableDomUtils$$$$moveTableBodyRowTouchSelectionAffordanceTop$$($rowIdx$$34_tableBodyRowRect$$) {
    var $topAffordance$$2$$ = this.$getTableBodyRowTouchSelectionAffordanceTop$();
    if (null != $topAffordance$$2$$) {
      $topAffordance$$2$$.data("rowIdx", $rowIdx$$34_tableBodyRowRect$$);
      $$$$14$$($topAffordance$$2$$.children()[0]).data("rowIdx", $rowIdx$$34_tableBodyRowRect$$);
      var $tableBody$$15$$ = this.$getTableBody$();
      $rowIdx$$34_tableBodyRowRect$$ = this.$getTableBodyRow$($rowIdx$$34_tableBodyRowRect$$)[0].getBoundingClientRect();
      var $tableContainerRect$$ = this.$getTableContainer$()[0].getBoundingClientRect();
      $topAffordance$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, $rowIdx$$34_tableBodyRowRect$$.top - $tableContainerRect$$.top - $topAffordance$$2$$.height() / 2);
      $topAffordance$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, $tableBody$$15$$.width() / 2 + "px");
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$moveTableBodyRowTouchSelectionAffordanceBottom$ = function $$oj$$14$$$$TableDomUtils$$$$moveTableBodyRowTouchSelectionAffordanceBottom$$($rowIdx$$35_tableBodyRowRect$$1$$) {
    var $bottomAffordance$$2$$ = this.$getTableBodyRowTouchSelectionAffordanceBottom$();
    if (null != $bottomAffordance$$2$$) {
      $bottomAffordance$$2$$.data("rowIdx", $rowIdx$$35_tableBodyRowRect$$1$$);
      $$$$14$$($bottomAffordance$$2$$.children()[0]).data("rowIdx", $rowIdx$$35_tableBodyRowRect$$1$$);
      var $tableBody$$16$$ = this.$getTableBody$();
      $rowIdx$$35_tableBodyRowRect$$1$$ = this.$getTableBodyRow$($rowIdx$$35_tableBodyRowRect$$1$$)[0].getBoundingClientRect();
      var $tableContainerRect$$1$$ = this.$getTableContainer$()[0].getBoundingClientRect();
      $bottomAffordance$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, $rowIdx$$35_tableBodyRowRect$$1$$.top - $tableContainerRect$$1$$.top + $rowIdx$$35_tableBodyRowRect$$1$$.height - $bottomAffordance$$2$$.height() / 2);
      $bottomAffordance$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, $tableBody$$16$$.width() / 2 + "px");
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$moveTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$moveTableHeaderColumn$$($columnIdx$$54_columnsDestMapItem$$, $destColIdx_destIdx$$, $columnDef_event$$246$$) {
    var $columns$$16_i$$228$$ = this.$component$.$_getColumnDefs$(), $tableBodyRows$$12_tableHeaderColumn$$11$$ = this.$getTableHeaderColumn$($columnIdx$$54_columnsDestMapItem$$), $tableFooterCell$$4$$ = this.$getTableFooterCell$($columnIdx$$54_columnsDestMapItem$$), $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$ = null, $destTableBodyCell$$ = $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$ = $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$ = null, $colSpan_columnsOption$$ = 
    null, $afterColumn_columnOption$$ = !1;
    $destColIdx_destIdx$$ == $columns$$16_i$$228$$.length && ($destColIdx_destIdx$$ -= 1, $afterColumn_columnOption$$ = !0);
    null != $tableBodyRows$$12_tableHeaderColumn$$11$$ && ($colSpan_columnsOption$$ = $tableBodyRows$$12_tableHeaderColumn$$11$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$), $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$ = this.$getTableHeaderColumn$($destColIdx_destIdx$$), null == $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$ || null != $colSpan_columnsOption$$ && 1 != $colSpan_columnsOption$$ || ($afterColumn_columnOption$$ ? $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$.after($tableBodyRows$$12_tableHeaderColumn$$11$$) : 
    $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$.before($tableBodyRows$$12_tableHeaderColumn$$11$$)));
    null != $tableFooterCell$$4$$ && ($colSpan_columnsOption$$ = $tableFooterCell$$4$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$), $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$ = this.$getTableFooterCell$($destColIdx_destIdx$$), null == $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$ || null != $colSpan_columnsOption$$ && 1 != $colSpan_columnsOption$$ || ($afterColumn_columnOption$$ ? $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$.after($tableFooterCell$$4$$) : 
    $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$.before($tableFooterCell$$4$$)));
    $tableBodyRows$$12_tableHeaderColumn$$11$$ = this.$getTableBodyRows$();
    if (null != $tableBodyRows$$12_tableHeaderColumn$$11$$) {
      for ($columns$$16_i$$228$$ = 0;$columns$$16_i$$228$$ < $tableBodyRows$$12_tableHeaderColumn$$11$$.length;$columns$$16_i$$228$$++) {
        $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$ = this.$getTableBodyCell$($columns$$16_i$$228$$, $columnIdx$$54_columnsDestMapItem$$, null), null != $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$ && ($destTableBodyCell$$ = this.$getTableBodyCell$($columns$$16_i$$228$$, $destColIdx_destIdx$$, null), $colSpan_columnsOption$$ = $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$), null == $destTableBodyCell$$ || 
        null != $colSpan_columnsOption$$ && 1 != $colSpan_columnsOption$$ || ($afterColumn_columnOption$$ ? $destTableBodyCell$$.after($destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$) : $destTableBodyCell$$.before($destTableFooterCell_destTableHeaderColumn_tableBodyCell$$7$$)));
      }
    }
    $colSpan_columnsOption$$ = this.options.columns;
    $destColIdx_destIdx$$ = $columnIdx$$54_columnsDestMapItem$$ < $destColIdx_destIdx$$ && !$afterColumn_columnOption$$ ? $destColIdx_destIdx$$ - 1 : $destColIdx_destIdx$$;
    $afterColumn_columnOption$$ = $colSpan_columnsOption$$.splice($columnIdx$$54_columnsDestMapItem$$, 1);
    $colSpan_columnsOption$$.splice($destColIdx_destIdx$$, 0, $afterColumn_columnOption$$[0]);
    $colSpan_columnsOption$$ = $colSpan_columnsOption$$.slice(0);
    this.$component$.option("columns", $colSpan_columnsOption$$, {_context:{$writeback$:!0, originalEvent:$columnDef_event$$246$$, $internalSet$:!0}});
    $columnDef_event$$246$$ = this.$component$.$_columnDefArray$.splice($columnIdx$$54_columnsDestMapItem$$, 1);
    this.$component$.$_columnDefArray$.splice($destColIdx_destIdx$$, 0, $columnDef_event$$246$$[0]);
    if (!this.$_columnsDestMap$) {
      for (this.$_columnsDestMap$ = [], $columns$$16_i$$228$$ = 0;$columns$$16_i$$228$$ < $colSpan_columnsOption$$.length;$columns$$16_i$$228$$++) {
        this.$_columnsDestMap$[$columns$$16_i$$228$$] = $columns$$16_i$$228$$;
      }
    }
    $columnIdx$$54_columnsDestMapItem$$ = this.$_columnsDestMap$.splice($columnIdx$$54_columnsDestMapItem$$, 1);
    this.$_columnsDestMap$.splice($destColIdx_destIdx$$, 0, $columnIdx$$54_columnsDestMapItem$$[0]);
    this.$component$.$_queueTask$(function() {
    });
    return this.$_columnsDestMap$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$refreshContextMenu$ = function $$oj$$14$$$$TableDomUtils$$$$refreshContextMenu$$() {
    var $self$$111$$ = this, $menuContainer$$2$$ = this.$_menuContainer$;
    $menuContainer$$2$$ && 0 < $menuContainer$$2$$.length && $menuContainer$$2$$.find("[data-oj-command]").each(function() {
      var $contextMenuLabel$$1$$ = $$$$14$$(this).children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_A$);
      if (0 < $contextMenuLabel$$1$$.length) {
        var $command$$11$$ = $$$$14$$(this).attr("data-oj-command").split("-"), $command$$11$$ = $command$$11$$[$command$$11$$.length - 1], $commandString$$1$$;
        "sort" == $command$$11$$ ? $commandString$$1$$ = $self$$111$$.$component$.$getTranslatedString$("labelSort") : "sortAsc" == $command$$11$$ ? $commandString$$1$$ = $self$$111$$.$component$.$getTranslatedString$("labelSortAsc") : "sortDsc" == $command$$11$$ && ($commandString$$1$$ = $self$$111$$.$component$.$getTranslatedString$("labelSortDsc"));
        $contextMenuLabel$$1$$.contents().filter(function() {
          return 3 === this.nodeType;
        })[0].nodeValue = $commandString$$1$$;
      }
    });
  };
  $oj$$14$$.$TableDomUtils$.prototype.$refreshTableDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$refreshTableDimensions$$($width$$19$$, $height$$15$$, $resetScrollTop$$2$$, $resetScrollLeft$$2$$) {
    this.$component$.$_unregisterResizeListener$();
    this.$_refreshTableDimensions$($width$$19$$, $height$$15$$, $resetScrollTop$$2$$, $resetScrollLeft$$2$$);
    this.$component$.$_registerResizeListener$();
    this.$component$.$_setCurrentRow$(this.options.currentRow, null);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$removeDragOverIndicatorColumn$ = function $$oj$$14$$$$TableDomUtils$$$$removeDragOverIndicatorColumn$$() {
    var $indicatorElements$$ = this.$getTable$().find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS$ + ",." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS$), $i$$229$$ = 0;
    if ($indicatorElements$$ && 0 < $indicatorElements$$.length) {
      for (var $indicatorElementsCount$$ = $indicatorElements$$.length, $i$$229$$ = 0;$i$$229$$ < $indicatorElementsCount$$;$i$$229$$++) {
        $$$$14$$($indicatorElements$$[$i$$229$$]).removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS$), $$$$14$$($indicatorElements$$[$i$$229$$]).removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$removeDragOverIndicatorRow$ = function $$oj$$14$$$$TableDomUtils$$$$removeDragOverIndicatorRow$$() {
    var $indicatorRowAfterElements_tableBody$$17$$ = this.$getTableBody$(), $indicatorRowAfterElementsCount_indicatorRowBeforeElements$$ = $indicatorRowAfterElements_tableBody$$17$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_DRAG_INDICATOR_BEFORE_CLASS$), $indicatorRowAfterElements_tableBody$$17$$ = $indicatorRowAfterElements_tableBody$$17$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_DRAG_INDICATOR_AFTER_CLASS$), $i$$230$$ = 0;
    if ($indicatorRowAfterElementsCount_indicatorRowBeforeElements$$ && 0 < $indicatorRowAfterElementsCount_indicatorRowBeforeElements$$.length) {
      for (var $indicatorRowBeforeElementsCount$$ = $indicatorRowAfterElementsCount_indicatorRowBeforeElements$$.length, $i$$230$$ = 0;$i$$230$$ < $indicatorRowBeforeElementsCount$$;$i$$230$$++) {
        $$$$14$$($indicatorRowAfterElementsCount_indicatorRowBeforeElements$$[$i$$230$$]).remove();
      }
    }
    if ($indicatorRowAfterElements_tableBody$$17$$ && 0 < $indicatorRowAfterElements_tableBody$$17$$.length) {
      for ($indicatorRowAfterElementsCount_indicatorRowBeforeElements$$ = $indicatorRowAfterElements_tableBody$$17$$.length, $i$$230$$ = 0;$i$$230$$ < $indicatorRowAfterElementsCount_indicatorRowBeforeElements$$;$i$$230$$++) {
        $$$$14$$($indicatorRowAfterElements_tableBody$$17$$[$i$$230$$]).remove();
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$removeTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$removeTableBodyRow$$($rowIdx$$36_tableBodyRow$$24$$) {
    $rowIdx$$36_tableBodyRow$$24$$ = this.$getTableBodyRow$($rowIdx$$36_tableBodyRow$$24$$);
    null != $rowIdx$$36_tableBodyRow$$24$$ && ($oj$$14$$.Components.$subtreeDetached$($rowIdx$$36_tableBodyRow$$24$$[0]), $rowIdx$$36_tableBodyRow$$24$$.remove(), this.$clearCachedDomRowData$());
  };
  $oj$$14$$.$TableDomUtils$.prototype.$removeTableBodyRowTouchSelectionAffordance$ = function $$oj$$14$$$$TableDomUtils$$$$removeTableBodyRowTouchSelectionAffordance$$() {
    var $touchAffordance$$ = this.$getTableContainer$().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOUCH_AREA_CLASS$);
    if (null != $touchAffordance$$ && 0 < $touchAffordance$$.length) {
      var $i$$231$$;
      for ($i$$231$$ = 0;$i$$231$$ < $touchAffordance$$.length;$i$$231$$++) {
        $touchAffordance$$[$i$$231$$].remove();
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$removeTableHeaderColumnDragImage$ = function $$oj$$14$$$$TableDomUtils$$$$removeTableHeaderColumnDragImage$$() {
    var $headerDragImage$$ = this.$getTableContainer$().find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_IMAGE$);
    if ($headerDragImage$$ && 0 < $headerDragImage$$.length) {
      var $i$$232$$, $headerDragImageCount$$ = $headerDragImage$$.length;
      for ($i$$232$$ = 0;$i$$232$$ < $headerDragImageCount$$;$i$$232$$++) {
        $$$$14$$($headerDragImage$$[$i$$232$$]).remove();
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setScrollLeft$ = function $$oj$$14$$$$TableDomUtils$$$$setScrollLeft$$($element$$109$$, $scrollLeft$$4$$) {
    $element$$109$$ = $$$$14$$($element$$109$$);
    "rtl" === this.$component$.$_GetReadingDirection$() && ($scrollLeft$$4$$ = Math.abs($scrollLeft$$4$$), this.$_isWebkit$() ? $scrollLeft$$4$$ = $element$$109$$[0].scrollWidth - $element$$109$$[0].clientWidth - $scrollLeft$$4$$ : this.$_isFF$() && ($scrollLeft$$4$$ *= -1));
    $element$$109$$[0].scrollLeft != $scrollLeft$$4$$ && ($element$$109$$[0].scrollLeft = $scrollLeft$$4$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableBodyCellAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableBodyCellAttributes$$($headers$$3_rowIdx$$37_rowKeyStr$$1$$, $rowKey$$10$$, $cellRowHeaderId_rowHashCode$$3_rowKeyStrHashCode$$1$$, $column$$13_columnIdx$$55$$, $tableBodyCell$$8$$) {
    var $accessibility$$ = this.options.accessibility;
    $column$$13_columnIdx$$55$$ = this.$component$.$_getColumnDefs$()[$column$$13_columnIdx$$55$$];
    var $rowHeaderColumnId$$ = null, $isTableHeaderless$$2$$ = null == this.$getTableHeader$() ? !0 : !1, $rowHeaderColumnId$$ = null != $accessibility$$ && null != $accessibility$$.rowHeader ? $accessibility$$.rowHeader : this.$component$.$_getColumnDefs$()[0].id;
    $headers$$3_rowIdx$$37_rowKeyStr$$1$$ = null != $rowKey$$10$$ ? $rowKey$$10$$.toString() : $headers$$3_rowIdx$$37_rowKeyStr$$1$$.toString();
    $cellRowHeaderId_rowHashCode$$3_rowKeyStrHashCode$$1$$ = null == $cellRowHeaderId_rowHashCode$$3_rowKeyStrHashCode$$1$$ ? this.$hashCode$($headers$$3_rowIdx$$37_rowKeyStr$$1$$) : $cellRowHeaderId_rowHashCode$$3_rowKeyStrHashCode$$1$$;
    $cellRowHeaderId_rowHashCode$$3_rowKeyStrHashCode$$1$$ = this.$getTableId$() + ":" + $rowHeaderColumnId$$ + "_" + $cellRowHeaderId_rowHashCode$$3_rowKeyStrHashCode$$1$$;
    $headers$$3_rowIdx$$37_rowKeyStr$$1$$ = this.$getTableId$() + ":" + $column$$13_columnIdx$$55$$.id;
    $rowHeaderColumnId$$ == $column$$13_columnIdx$$55$$.id ? ($tableBodyCell$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, $cellRowHeaderId_rowHashCode$$3_rowKeyStrHashCode$$1$$), $isTableHeaderless$$2$$ && ($headers$$3_rowIdx$$37_rowKeyStr$$1$$ = "")) : $headers$$3_rowIdx$$37_rowKeyStr$$1$$ = $isTableHeaderless$$2$$ ? $cellRowHeaderId_rowHashCode$$3_rowKeyStrHashCode$$1$$ : $headers$$3_rowIdx$$37_rowKeyStr$$1$$ + " " + $cellRowHeaderId_rowHashCode$$3_rowKeyStrHashCode$$1$$;
    $tableBodyCell$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HEADERS$) || $tableBodyCell$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HEADERS$, $headers$$3_rowIdx$$37_rowKeyStr$$1$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableBodyRowAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableBodyRowAttributes$$($row$$15$$, $tableBodyRow$$25$$) {
    $tableBodyRow$$25$$.data("rowKey", $row$$15$$.key);
    $tableBodyRow$$25$$.data("rowData", JSON.stringify($row$$15$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableHeaderColumnAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableHeaderColumnAttributes$$($columnIdx$$56$$, $tableHeaderColumn$$12$$) {
    var $column$$14$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$56$$];
    $tableHeaderColumn$$12$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$) || $tableHeaderColumn$$12$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTableId$() + ":" + $column$$14$$.id);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableColumnCellsClass$ = function $$oj$$14$$$$TableDomUtils$$$$setTableColumnCellsClass$$($columnIdx$$57_tableBodyCells$$5$$, $add$$7$$, $styleClass$$2$$) {
    var $i$$233_tableBodyRows$$13$$ = this.$getTableBodyRows$();
    if (null != $i$$233_tableBodyRows$$13$$ && 0 < $i$$233_tableBodyRows$$13$$.length) {
      if (null === $columnIdx$$57_tableBodyCells$$5$$) {
        if ($columnIdx$$57_tableBodyCells$$5$$ = null, $columnIdx$$57_tableBodyCells$$5$$ = $add$$7$$ ? this.$getTableBody$().find("[td]") : this.$getTableBody$().find("." + $styleClass$$2$$), null != $columnIdx$$57_tableBodyCells$$5$$ && 0 < $columnIdx$$57_tableBodyCells$$5$$.length) {
          for (var $tableBodyCell$$9_tableBodyCellsCount$$2$$ = $columnIdx$$57_tableBodyCells$$5$$.length, $i$$233_tableBodyRows$$13$$ = 0;$i$$233_tableBodyRows$$13$$ < $tableBodyCell$$9_tableBodyCellsCount$$2$$;$i$$233_tableBodyRows$$13$$++) {
            $add$$7$$ ? $$$$14$$($columnIdx$$57_tableBodyCells$$5$$[$i$$233_tableBodyRows$$13$$]).addClass($styleClass$$2$$) : $$$$14$$($columnIdx$$57_tableBodyCells$$5$$[$i$$233_tableBodyRows$$13$$]).removeClass($styleClass$$2$$);
          }
        }
      } else {
        for (var $tableBodyRowsCount$$5$$ = $i$$233_tableBodyRows$$13$$.length, $i$$233_tableBodyRows$$13$$ = 0;$i$$233_tableBodyRows$$13$$ < $tableBodyRowsCount$$5$$;$i$$233_tableBodyRows$$13$$++) {
          $tableBodyCell$$9_tableBodyCellsCount$$2$$ = this.$getTableBodyCell$($i$$233_tableBodyRows$$13$$, $columnIdx$$57_tableBodyCells$$5$$, null), $add$$7$$ ? $$$$14$$($tableBodyCell$$9_tableBodyCellsCount$$2$$).addClass($styleClass$$2$$) : $$$$14$$($tableBodyCell$$9_tableBodyCellsCount$$2$$).removeClass($styleClass$$2$$);
        }
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableInlineMessage$ = function $$oj$$14$$$$TableDomUtils$$$$setTableInlineMessage$$($summary$$22$$, $detail$$25$$, $severityLevel$$3$$) {
    var $inlineMessage$$4$$ = this.$getTableInlineMessage$();
    $inlineMessage$$4$$.empty();
    $inlineMessage$$4$$.append($oj$$14$$.$PopupMessagingStrategyUtils$.$buildMessageHtml$(document, $summary$$22$$, $detail$$25$$, $severityLevel$$3$$, null));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleInitialTable$ = function $$oj$$14$$$$TableDomUtils$$$$styleInitialTable$$() {
    var $table$$14$$ = this.$getTable$(), $tableContainer$$20$$ = this.$getTableContainer$(), $tableHeader$$6$$ = $table$$14$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_THEAD$), $tableHeader$$6$$ = 0 < $tableHeader$$6$$.length ? $$$$14$$($tableHeader$$6$$[0]) : null, $tableFooter$$6$$ = $table$$14$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TFOOT$), $tableFooter$$6$$ = 0 < $tableFooter$$6$$.length ? $$$$14$$($tableFooter$$6$$[0]) : null, $tableBody$$18$$ = $table$$14$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TBODY$), 
    $tableBody$$18$$ = 0 < $tableBody$$18$$.length ? $$$$14$$($tableBody$$18$$[0]) : null;
    $table$$14$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "0");
    this.$component$._focusable($table$$14$$);
    this.$component$._focusable($tableContainer$$20$$);
    this.$styleTableHeader$($tableHeader$$6$$);
    this.$styleTableFooter$($tableFooter$$6$$);
    this.$styleTableBody$($tableBody$$18$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBody$$($tableBody$$19$$) {
    $tableBody$$19$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
    $tableBody$$19$$.attr($oj$$14$$.Components.$_OJ_CONTAINER_ATTR$, this.$component$.widgetName);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBodyCell$$($column$$15_columnIdx$$58$$, $tableBodyCell$$10$$, $isNew$$3$$) {
    $column$$15_columnIdx$$58$$ = this.$component$.$_getColumnDefs$()[$column$$15_columnIdx$$58$$];
    if ($isNew$$3$$ || !$tableBodyCell$$10$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$)) {
      $tableBodyCell$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$), null == $column$$15_columnIdx$$58$$.style || !$isNew$$3$$ && $tableBodyCell$$10$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$) == $column$$15_columnIdx$$58$$.style || $tableBodyCell$$10$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, $column$$15_columnIdx$$58$$.style), null == $column$$15_columnIdx$$58$$.className || !$isNew$$3$$ && $tableBodyCell$$10$$.hasClass($column$$15_columnIdx$$58$$.className) || 
      $tableBodyCell$$10$$.addClass($column$$15_columnIdx$$58$$.className);
    }
    this.$_isVerticalGridEnabled$() && (!$isNew$$3$$ && $tableBodyCell$$10$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$) || $tableBodyCell$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBodyRow$$($tableBodyRow$$26$$, $isNew$$4$$) {
    !$isNew$$4$$ && $tableBodyRow$$26$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$) || $tableBodyRow$$26$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
    this.$_isHorizontalGridEnabled$() && (!$isNew$$4$$ && $tableBodyRow$$26$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$) || $tableBodyRow$$26$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableContainer$$($tableContainer$$21$$) {
    $tableContainer$$21$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
    $tableContainer$$21$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CONTAINER_CLASS$);
    $tableContainer$$21$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WIDGET$);
    this.options.display == $oj$$14$$.$TableDomUtils$.$_OPTION_DISPLAY$.$_GRID$ && $tableContainer$$21$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_COMPACT_CLASS$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableFooter$$($tableFooter$$7$$) {
    $tableFooter$$7$$ && ($tableFooter$$7$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$), $$$$14$$($tableFooter$$7$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$)[0]).addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableFooterCell$$($columnIdx$$59$$, $tableFooterCell$$5$$) {
    this.$component$.$_getColumnDefs$();
    var $column$$16$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$59$$];
    $tableFooterCell$$5$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, $column$$16$$.footerStyle);
    $tableFooterCell$$5$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$) || $tableFooterCell$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    this.$_isVerticalGridEnabled$() && !$tableFooterCell$$5$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$) && $tableFooterCell$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$);
    $column$$16$$.footerClassName && $tableFooterCell$$5$$.addClass($column$$16$$.footerClassName);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableHeader$$($tableHeader$$7_tableHeaderRow$$6$$) {
    $tableHeader$$7_tableHeaderRow$$6$$ && ($tableHeader$$7_tableHeaderRow$$6$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$), $tableHeader$$7_tableHeaderRow$$6$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, "table-header-group"), $tableHeader$$7_tableHeaderRow$$6$$ = $$$$14$$($tableHeader$$7_tableHeaderRow$$6$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$)[0]), $tableHeader$$7_tableHeaderRow$$6$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$), 
    $tableHeader$$7_tableHeaderRow$$6$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableHeaderColumn$$($column$$17_columnIdx$$60$$, $tableHeaderColumn$$13$$, $isNew$$5$$) {
    $column$$17_columnIdx$$60$$ = this.$component$.$_getColumnDefs$()[$column$$17_columnIdx$$60$$];
    if ($isNew$$5$$ || !$tableHeaderColumn$$13$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$)) {
      $tableHeaderColumn$$13$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$), this.$_isVerticalGridEnabled$() && (!$isNew$$5$$ && $tableHeaderColumn$$13$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$) || $tableHeaderColumn$$13$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$)), null == $column$$17_columnIdx$$60$$.headerStyle || !$isNew$$5$$ && $tableHeaderColumn$$13$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$) == 
      $column$$17_columnIdx$$60$$.headerStyle || $tableHeaderColumn$$13$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, $column$$17_columnIdx$$60$$.headerStyle), null == $column$$17_columnIdx$$60$$.headerClassName || !$isNew$$5$$ && $tableHeaderColumn$$13$$.hasClass($column$$17_columnIdx$$60$$.headerClassName) || $tableHeaderColumn$$13$$.addClass($column$$17_columnIdx$$60$$.headerClassName);
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_getColspanLogicalElements$ = function $$oj$$14$$$$TableDomUtils$$$$_getColspanLogicalElements$$($elementArray$$) {
    var $i$$234$$, $j$$33$$, $indexedElementArrayNum$$ = 0, $indexedElementArray$$ = [], $elementArrayCount$$ = $elementArray$$.length;
    for ($i$$234$$ = 0;$i$$234$$ < $elementArrayCount$$;$i$$234$$++) {
      var $colSpan$$1$$ = $$$$14$$($elementArray$$[$i$$234$$]).attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$);
      if (null != $colSpan$$1$$) {
        $colSpan$$1$$ = parseInt($colSpan$$1$$, 10);
        for ($j$$33$$ = 0;$j$$33$$ < $colSpan$$1$$;$j$$33$$++) {
          $indexedElementArray$$[$indexedElementArrayNum$$ + $j$$33$$] = $elementArray$$[$i$$234$$];
        }
        $indexedElementArrayNum$$ += $colSpan$$1$$;
      } else {
        $indexedElementArray$$[$indexedElementArrayNum$$++] = $elementArray$$[$i$$234$$];
      }
    }
    return $$$$14$$($indexedElementArray$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isHorizontalGridEnabled$ = function $$oj$$14$$$$TableDomUtils$$$$_isHorizontalGridEnabled$$() {
    return this.options.horizontalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ || this.options.horizontalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_AUTO$ ? !0 : !1;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isVerticalGridEnabled$ = function $$oj$$14$$$$TableDomUtils$$$$_isVerticalGridEnabled$$() {
    return this.options.verticalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ || this.options.verticalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_AUTO$ && this.options.display == $oj$$14$$.$TableDomUtils$.$_OPTION_DISPLAY$.$_GRID$ ? !0 : !1;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isFF$ = function $$oj$$14$$$$TableDomUtils$$$$_isFF$$() {
    return-1 < navigator.userAgent.toLowerCase().indexOf("firefox") ? !0 : !1;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isIE$ = function $$oj$$14$$$$TableDomUtils$$$$_isIE$$() {
    if ("undefined" == typeof this.$_browserIsIE$) {
      var $resultArray_userAgent$$2$$ = navigator.userAgent;
      "Microsoft Internet Explorer" == navigator.appName ? ($resultArray_userAgent$$2$$ = /MSIE ([0-9]{1,}[.0-9]{0,})/.exec($resultArray_userAgent$$2$$), null != $resultArray_userAgent$$2$$ && (this.$_browserIsIE$ = parseFloat($resultArray_userAgent$$2$$[1]))) : 0 <= $resultArray_userAgent$$2$$.indexOf("Trident") ? this.$_browserIsIE$ = 11 : this.$_browserIsIE$ = null;
    }
    return this.$_browserIsIE$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isWebkit$ = function $$oj$$14$$$$TableDomUtils$$$$_isWebkit$$() {
    if ("undefined" == typeof this.$_browserIsWebkit$) {
      var $ua$$ = navigator.userAgent.toLowerCase();
      this.$_browserIsWebkit$ = /webkit/.test($ua$$) && !/edge/.test($ua$$);
    }
    return this.$_browserIsWebkit$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_refreshTableDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$_refreshTableDimensions$$($scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$, $height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$, $resetScrollTop$$3$$, $resetScrollLeft$$3$$) {
    var $caption_table$$15_tableHeaderHeight$$ = this.$getTable$(), $tableDivScroller$$2_tableHeader$$8$$ = this.$getTableHeader$(), $tableFooter$$8$$ = this.$getTableFooter$(), $tableBodyHeight_tableFooterRow$$7$$ = this.$getTableFooterRow$(), $tableFooterHeight_tableHeaderRow$$7$$ = this.$getTableHeaderRow$(), $tableContainer$$22$$ = this.$getTableContainer$(), $tableBody$$20$$ = this.$getTableBody$(), $scrollTop$$2$$ = null, $scrollLeft$$5$$ = null;
    if (null != this.$getScroller$()) {
      var $maxScrollTop_tableContainerScrollableState$$ = this.$getScroller$()[0].scrollHeight - this.$getScroller$()[0].clientHeight, $captionHeight_maxScrollLeft$$2$$ = this.$getScroller$()[0].scrollWidth - this.$getScroller$()[0].clientWidth;
      0 < $maxScrollTop_tableContainerScrollableState$$ && ($scrollTop$$2$$ = this.$getScroller$()[0].scrollTop);
      0 < $captionHeight_maxScrollLeft$$2$$ && ($scrollLeft$$5$$ = this.$getScrollLeft$(this.$getScroller$()[0]));
    }
    this.$_removeTableDimensionsStyling$();
    this.$styleTableContainer$($tableContainer$$22$$);
    $maxScrollTop_tableContainerScrollableState$$ = this.$isTableContainerScrollable$();
    this.$_tableHeightConstrained$ = 1 === $maxScrollTop_tableContainerScrollableState$$[0] ? !0 : !1;
    this.$_tableWidthConstrained$ = 1 === $maxScrollTop_tableContainerScrollableState$$[1] ? !0 : !1;
    if (null != $tableBody$$20$$) {
      if (this.$_tableHeightConstrained$ || this.$_tableWidthConstrained$) {
        this.$_tableDimensions$ || (this.$_tableDimensions$ = {}), 0 < $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$ || 0 < $height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$ ? (0 < $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$ && this.$_tableWidthConstrained$ && (this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] = $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$), 0 < $height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$ && 
        this.$_tableHeightConstrained$ && (this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] = $height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$)) : (this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] = this.$_tableHeightConstrained$ ? $tableContainer$$22$$[0].offsetHeight : 0, this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] = this.$_tableWidthConstrained$ ? $tableContainer$$22$$[0].offsetWidth : 0), this.$_tableBorderWidth$ || 
        (this.$_tableBorderWidth$ = $tableContainer$$22$$.outerWidth() - $tableContainer$$22$$.innerWidth()), this.$_tableBorderHeight$ || (this.$_tableBorderHeight$ = $tableContainer$$22$$.outerHeight() - $tableContainer$$22$$.innerHeight()), $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$ = 0, this.$_tableHeightConstrained$ && !this.$_tableWidthConstrained$ && ($tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$ = 
        $tableContainer$$22$$.get(0).offsetWidth - $tableContainer$$22$$.get(0).clientWidth, 0 < this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] ? $caption_table$$15_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableContainer$$22$$.get(0).clientWidth + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : ($caption_table$$15_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableContainer$$22$$.get(0).scrollWidth + $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$ + 
        $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $maxScrollTop_tableContainerScrollableState$$ = this.$isTableContainerScrollable$(), 1 === $maxScrollTop_tableContainerScrollableState$$[1] && $caption_table$$15_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableContainer$$22$$.get(0).clientWidth + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, "")), $height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$ = 
        $caption_table$$15_tableHeaderHeight$$.width(), this.$_setColumnWidths$(), $captionHeight_maxScrollLeft$$2$$ = 0, $caption_table$$15_tableHeaderHeight$$ = $caption_table$$15_tableHeaderHeight$$.children("caption"), null != $caption_table$$15_tableHeaderHeight$$ && 0 < $caption_table$$15_tableHeaderHeight$$.length && ($captionHeight_maxScrollLeft$$2$$ = $$$$14$$($caption_table$$15_tableHeaderHeight$$[0]).outerHeight(), $caption_table$$15_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, 
        $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_INLINE$), null != $tableDivScroller$$2_tableHeader$$8$$ && $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_TOP$, $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_TOP$).toString())), $caption_table$$15_tableHeaderHeight$$ = 0, null != $tableDivScroller$$2_tableHeader$$8$$ && ($tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), 
        this.$isDivScroller$() ? ($tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_ABSOLUTE$), $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, "0px")) : $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), $tableFooterHeight_tableHeaderRow$$7$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, 
        $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), $tableFooterHeight_tableHeaderRow$$7$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), $caption_table$$15_tableHeaderHeight$$ = $tableDivScroller$$2_tableHeader$$8$$.outerHeight()), this.$isDivScroller$() && $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_TOP$, $caption_table$$15_tableHeaderHeight$$ + $captionHeight_maxScrollLeft$$2$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), 
        $tableFooterHeight_tableHeaderRow$$7$$ = 0, null != $tableFooter$$8$$ && (this.$isDivScroller$() ? ($tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_ABSOLUTE$), $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BOTTOM$, "0px")) : $tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), $tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, 
        $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), $tableBodyHeight_tableFooterRow$$7$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), $tableBodyHeight_tableFooterRow$$7$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$)), $tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), $tableBodyHeight_tableFooterRow$$7$$ = 0, this.$isDivScroller$() || 
        ($tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_Y$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), this.$_tableWidthConstrained$ ? $tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] - this.$_tableBorderWidth$) : 0 < $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$ && 
        $tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$ - this.$_tableBorderWidth$ + $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$), $tableBody$$20$$.width(), null != $tableFooter$$8$$ && ($tableFooterHeight_tableHeaderRow$$7$$ = $tableFooter$$8$$.outerHeight(), $tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, -1 * $tableFooterHeight_tableHeaderRow$$7$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), 
        this.$_tableHeightConstrained$ ? ($tableBodyHeight_tableFooterRow$$7$$ = this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] - $caption_table$$15_tableHeaderHeight$$ - $tableFooterHeight_tableHeaderRow$$7$$ - $captionHeight_maxScrollLeft$$2$$ - this.$_tableBorderHeight$, 0 < $tableBodyHeight_tableFooterRow$$7$$ && ($tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$, $tableBodyHeight_tableFooterRow$$7$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_HEIGHT$, 
        $tableBodyHeight_tableFooterRow$$7$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$))) : $tableBodyHeight_tableFooterRow$$7$$ = $tableBody$$20$$.outerHeight(), $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$ = this.$getScrollbarWidth$(), this.$_tableWidthConstrained$ ? ($height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$ = this.$getTableBodyRows$(), null != $height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$ && 0 < $height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$.length ? 
        ($tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_Y$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$), null != $tableDivScroller$$2_tableHeader$$8$$ && ($height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$ = this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] - 
        this.$_tableBorderWidth$, 0 < $height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$ && (0 < $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$ ? $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$ - $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$20$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, 
        $height$$16_tableBodyRows$$14_tableHeaderWidth_tableWidth$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)))) : ($tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_Y$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$))) : $tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, 
        $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$)), this.$isDivScroller$() && ($tableDivScroller$$2_tableHeader$$8$$ = this.$getTableDivScroller$(), $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), this.$_tableWidthConstrained$ && $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$]), this.$_tableHeightConstrained$ && 
        $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$, this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] - $caption_table$$15_tableHeaderHeight$$ - $tableFooterHeight_tableHeaderRow$$7$$), $tableBody$$20$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_FLOAT$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_LEFT$), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$)), null != 
        $tableFooter$$8$$ && (this.$isDivScroller$() || $tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, $tableBodyHeight_tableFooterRow$$7$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$));
      }
      this.$_setHeaderColumnOverflowWidths$();
      this.$_removeTableBodyRowBottomBorder$(0 > $maxScrollTop_tableContainerScrollableState$$[0]);
      this.$refreshTableStatusPosition$();
      null == $scrollTop$$2$$ || $resetScrollTop$$3$$ ? $resetScrollTop$$3$$ && (this.$getScroller$()[0].scrollTop = 0, this.$getScroller$().scroll()) : ($maxScrollTop_tableContainerScrollableState$$ = this.$getScroller$()[0].scrollHeight - this.$getScroller$()[0].clientHeight, $scrollTop$$2$$ = $scrollTop$$2$$ > $maxScrollTop_tableContainerScrollableState$$ ? $maxScrollTop_tableContainerScrollableState$$ : $scrollTop$$2$$, this.$component$.$_isLoadMoreOnScroll$() && $maxScrollTop_tableContainerScrollableState$$ == 
      $scrollTop$$2$$ && $scrollTop$$2$$--, this.$getScroller$()[0].scrollTop = $scrollTop$$2$$, this.$getScroller$().scroll());
      null == $scrollLeft$$5$$ || $resetScrollLeft$$3$$ ? $resetScrollLeft$$3$$ && (this.$setScrollLeft$(this.$getScroller$()[0], 0), this.$getScroller$().scroll()) : (this.$setScrollLeft$(this.$getScroller$()[0], $scrollLeft$$5$$), this.$getScroller$().scroll());
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$refreshTableStatusPosition$ = function $$oj$$14$$$$TableDomUtils$$$$refreshTableStatusPosition$$() {
    var $isRTL$$4_tableContainer$$23$$ = this.$getTableContainer$(), $tableBody$$21_tableStatusMessageText$$ = this.$getTableBody$(), $msgTextOptions_tableStatusMessage$$2$$ = this.$getTableStatusMessage$(), $options$$246_overTableElement$$ = $isRTL$$4_tableContainer$$23$$;
    0 < $tableBody$$21_tableStatusMessageText$$.height() && ($options$$246_overTableElement$$ = $tableBody$$21_tableStatusMessageText$$);
    $msgTextOptions_tableStatusMessage$$2$$ && $msgTextOptions_tableStatusMessage$$2$$[0].offsetParent && ($msgTextOptions_tableStatusMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$, $tableBody$$21_tableStatusMessageText$$.height() + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $msgTextOptions_tableStatusMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableBody$$21_tableStatusMessageText$$.width() + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $tableBody$$21_tableStatusMessageText$$ = 
    $$$$14$$($msgTextOptions_tableStatusMessage$$2$$[0].children[0]), $isRTL$$4_tableContainer$$23$$ = "rtl" === this.$component$.$_GetReadingDirection$(), $options$$246_overTableElement$$ = {my:"center", at:"center", collision:"none", of:$options$$246_overTableElement$$}, $options$$246_overTableElement$$ = $oj$$14$$.$PositionUtils$.$normalizeHorizontalAlignment$($options$$246_overTableElement$$, $isRTL$$4_tableContainer$$23$$), $msgTextOptions_tableStatusMessage$$2$$.position($options$$246_overTableElement$$), 
    $msgTextOptions_tableStatusMessage$$2$$ = {my:"center", at:"center", collision:"none", of:$msgTextOptions_tableStatusMessage$$2$$}, $msgTextOptions_tableStatusMessage$$2$$ = $oj$$14$$.$PositionUtils$.$normalizeHorizontalAlignment$($msgTextOptions_tableStatusMessage$$2$$, $isRTL$$4_tableContainer$$23$$), $tableBody$$21_tableStatusMessageText$$.position($msgTextOptions_tableStatusMessage$$2$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeHeaderColumnAndCellColumnWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_removeHeaderColumnAndCellColumnWidths$$() {
    var $i$$235_tableBodyRows$$15$$, $headerColumn$$12_tableBodyCell$$11$$, $columnCount$$2$$ = this.$component$.$_getColumnDefs$().length;
    for ($i$$235_tableBodyRows$$15$$ = 0;$i$$235_tableBodyRows$$15$$ < $columnCount$$2$$;$i$$235_tableBodyRows$$15$$++) {
      $headerColumn$$12_tableBodyCell$$11$$ = this.$getTableHeaderColumn$($i$$235_tableBodyRows$$15$$), null != $headerColumn$$12_tableBodyCell$$11$$ && $headerColumn$$12_tableBodyCell$$11$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, "");
    }
    $i$$235_tableBodyRows$$15$$ = this.$getTableBodyRows$();
    if (null != $i$$235_tableBodyRows$$15$$ && 0 < $i$$235_tableBodyRows$$15$$.length) {
      for ($i$$235_tableBodyRows$$15$$ = 0;$i$$235_tableBodyRows$$15$$ < $columnCount$$2$$;$i$$235_tableBodyRows$$15$$++) {
        $headerColumn$$12_tableBodyCell$$11$$ = this.$getTableBodyCell$(0, $i$$235_tableBodyRows$$15$$, null), null != $headerColumn$$12_tableBodyCell$$11$$ && $headerColumn$$12_tableBodyCell$$11$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, "");
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeTableBodyRowBottomBorder$ = function $$oj$$14$$$$TableDomUtils$$$$_removeTableBodyRowBottomBorder$$($underflow$$) {
    if (this.$_isHorizontalGridEnabled$()) {
      var $lastTableBodyRow_tableBodyRows$$16$$ = this.$getTableBodyRows$();
      if (null != $lastTableBodyRow_tableBodyRows$$16$$ && 0 < $lastTableBodyRow_tableBodyRows$$16$$.length) {
        var $i$$236$$, $tableBodyRowsCount$$6$$ = $lastTableBodyRow_tableBodyRows$$16$$.length;
        for ($i$$236$$ = 0;$i$$236$$ < $tableBodyRowsCount$$6$$;$i$$236$$++) {
          $$$$14$$($lastTableBodyRow_tableBodyRows$$16$$[$i$$236$$]).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$) || $$$$14$$($lastTableBodyRow_tableBodyRows$$16$$[$i$$236$$]).addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$);
        }
        $lastTableBodyRow_tableBodyRows$$16$$ = $$$$14$$($lastTableBodyRow_tableBodyRows$$16$$[$lastTableBodyRow_tableBodyRows$$16$$.length - 1]);
        $underflow$$ || $lastTableBodyRow_tableBodyRows$$16$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeTableDimensionsStyling$ = function $$oj$$14$$$$TableDomUtils$$$$_removeTableDimensionsStyling$$() {
    var $table$$16$$ = this.$getTable$(), $headerColumnTextDivs_tableHeader$$9$$ = this.$getTableHeader$(), $i$$237_tableHeaderRow$$8$$ = this.$getTableHeaderRow$(), $tableFooter$$9$$ = this.$getTableFooter$(), $tableFooterRow$$8$$ = this.$getTableFooterRow$(), $tableBody$$22$$ = this.$getTableBody$();
    if (null != $headerColumnTextDivs_tableHeader$$9$$ && ($headerColumnTextDivs_tableHeader$$9$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""), $i$$237_tableHeaderRow$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""), ($headerColumnTextDivs_tableHeader$$9$$ = $i$$237_tableHeaderRow$$8$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnTextDivs_tableHeader$$9$$.length)) {
      for (var $headerColumnTextDivsCount$$ = $headerColumnTextDivs_tableHeader$$9$$.length, $i$$237_tableHeaderRow$$8$$ = 0;$i$$237_tableHeaderRow$$8$$ < $headerColumnTextDivsCount$$;$i$$237_tableHeaderRow$$8$$++) {
        $$$$14$$($headerColumnTextDivs_tableHeader$$9$$[$i$$237_tableHeaderRow$$8$$]).css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, "");
      }
    }
    null != $tableFooter$$9$$ && ($tableFooter$$9$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""), $tableFooterRow$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""));
    $table$$16$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, "");
    $table$$16$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, "");
    null != $tableBody$$22$$ && $tableBody$$22$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, "");
    this.$_removeHeaderColumnAndCellColumnWidths$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_setColumnWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_setColumnWidths$$() {
    var $columnWidths$$ = [], $columnPaddingWidths$$ = [], $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = null, $adjustedColumnWidths_defaultColumnPaddingWidth$$, $defaultTableBodyCellPaddingWidth_footerCell$$1$$, $headerColumnTextDivHeight_headerRenderer$$1$$, $i$$238_tableBodyRows$$17$$, $headerColumnCellStyle_headerColumnTextDiv$$, $columnsCount$$10$$ = this.$component$.$_getColumnDefs$().length;
    for ($i$$238_tableBodyRows$$17$$ = 0;$i$$238_tableBodyRows$$17$$ < $columnsCount$$10$$;$i$$238_tableBodyRows$$17$$++) {
      $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = this.$getTableHeaderColumn$($i$$238_tableBodyRows$$17$$), null != $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ && ($headerColumnCellStyle_headerColumnTextDiv$$ = window.getComputedStyle($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$[0]), 
      $columnWidths$$[$i$$238_tableBodyRows$$17$$] = parseInt($headerColumnCellStyle_headerColumnTextDiv$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$], 10), $headerColumnTextDivHeight_headerRenderer$$1$$ = this.$component$.$_getColumnRenderer$($i$$238_tableBodyRows$$17$$, "header"), $adjustedColumnWidths_defaultColumnPaddingWidth$$ || null != $headerColumnTextDivHeight_headerRenderer$$1$$ ? $columnPaddingWidths$$[$i$$238_tableBodyRows$$17$$] = null != $headerColumnTextDivHeight_headerRenderer$$1$$ ? 
      parseInt($headerColumnCellStyle_headerColumnTextDiv$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$], 10) + parseInt($headerColumnCellStyle_headerColumnTextDiv$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$], 10) : $adjustedColumnWidths_defaultColumnPaddingWidth$$ : ($adjustedColumnWidths_defaultColumnPaddingWidth$$ = parseInt($headerColumnCellStyle_headerColumnTextDiv$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$], 10) + parseInt($headerColumnCellStyle_headerColumnTextDiv$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$], 
      10), $columnPaddingWidths$$[$i$$238_tableBodyRows$$17$$] = $adjustedColumnWidths_defaultColumnPaddingWidth$$), $headerColumnTextDivHeight_headerRenderer$$1$$ = null, ($headerColumnCellStyle_headerColumnTextDiv$$ = $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnCellStyle_headerColumnTextDiv$$.length && 
      ($headerColumnTextDivHeight_headerRenderer$$1$$ = $headerColumnCellStyle_headerColumnTextDiv$$.get(0).clientHeight), null != $headerColumnTextDivHeight_headerRenderer$$1$$ && ($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$), 
      $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_HEIGHT$, $headerColumnTextDivHeight_headerRenderer$$1$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)));
    }
    $adjustedColumnWidths_defaultColumnPaddingWidth$$ = [];
    $i$$238_tableBodyRows$$17$$ = this.$getTableBodyRows$();
    if (null != $i$$238_tableBodyRows$$17$$ && 0 < $i$$238_tableBodyRows$$17$$.length) {
      for ($i$$238_tableBodyRows$$17$$ = 0;$i$$238_tableBodyRows$$17$$ < $columnsCount$$10$$;$i$$238_tableBodyRows$$17$$++) {
        $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = this.$getTableBodyCell$(0, $i$$238_tableBodyRows$$17$$, null), null != $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ && (this.$component$.$_getColumnRenderer$($i$$238_tableBodyRows$$17$$, "cell"), this.$component$.$_hasRowOrCellRenderer$($i$$238_tableBodyRows$$17$$) ? 
        ($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = window.getComputedStyle($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$[0]), $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = parseInt($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$], 
        10) + parseInt($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$], 10)) : ($defaultTableBodyCellPaddingWidth_footerCell$$1$$ || ($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = window.getComputedStyle($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$[0]), 
        $defaultTableBodyCellPaddingWidth_footerCell$$1$$ = parseInt($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$], 10) + parseInt($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$], 10)), $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = 
        $defaultTableBodyCellPaddingWidth_footerCell$$1$$), $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ > $columnPaddingWidths$$[$i$$238_tableBodyRows$$17$$] ? $columnWidths$$[$i$$238_tableBodyRows$$17$$] - $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ + 
        $columnPaddingWidths$$[$i$$238_tableBodyRows$$17$$] : $columnWidths$$[$i$$238_tableBodyRows$$17$$] + $columnPaddingWidths$$[$i$$238_tableBodyRows$$17$$] - $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$, $adjustedColumnWidths_defaultColumnPaddingWidth$$[$i$$238_tableBodyRows$$17$$] = $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$)
        ;
      }
    }
    for ($i$$238_tableBodyRows$$17$$ = 0;$i$$238_tableBodyRows$$17$$ < $columnsCount$$10$$;$i$$238_tableBodyRows$$17$$++) {
      $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = this.$getTableHeaderColumn$($i$$238_tableBodyRows$$17$$), null != $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ && $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, 
      $columnWidths$$[$i$$238_tableBodyRows$$17$$] + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = this.$getTableBodyCell$(0, $i$$238_tableBodyRows$$17$$, null), null != $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ && $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, 
      $adjustedColumnWidths_defaultColumnPaddingWidth$$[$i$$238_tableBodyRows$$17$$] + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $defaultTableBodyCellPaddingWidth_footerCell$$1$$ = this.$getTableFooterCell$($i$$238_tableBodyRows$$17$$), null != $defaultTableBodyCellPaddingWidth_footerCell$$1$$ && ($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = parseInt($defaultTableBodyCellPaddingWidth_footerCell$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$), 
      10) + parseInt($defaultTableBodyCellPaddingWidth_footerCell$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$), 10), $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ > $columnPaddingWidths$$[$i$$238_tableBodyRows$$17$$] ? $columnWidths$$[$i$$238_tableBodyRows$$17$$] - 
      $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ + $columnPaddingWidths$$[$i$$238_tableBodyRows$$17$$] : $columnWidths$$[$i$$238_tableBodyRows$$17$$] + $columnPaddingWidths$$[$i$$238_tableBodyRows$$17$$] - $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$, $defaultTableBodyCellPaddingWidth_footerCell$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, 
      $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$12_tableBodyCellPaddingWidth_tableBodyCellStyle$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$));
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_setHeaderColumnOverflowWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_setHeaderColumnOverflowWidths$$() {
    var $columns$$19$$ = this.$component$.$_getColumnDefs$(), $i$$239$$, $column$$18_headerColumnTextDivWidth$$, $headerColumnCell$$2_newHeaderColumnTextDivWidth$$, $headerColumnDiv$$1$$, $headerColumnTextDiv$$1$$, $sortPlaceHolderDivWidth$$, $columnsCount$$11$$ = $columns$$19$$.length;
    for ($i$$239$$ = 0;$i$$239$$ < $columnsCount$$11$$;$i$$239$$++) {
      $column$$18_headerColumnTextDivWidth$$ = $columns$$19$$[$i$$239$$], $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ = this.$getTableHeaderColumn$($i$$239$$), null != $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ && ($headerColumnDiv$$1$$ = $headerColumnCell$$2_newHeaderColumnTextDivWidth$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$), 0 < $headerColumnDiv$$1$$.length && ($headerColumnDiv$$1$$ = $$$$14$$($headerColumnDiv$$1$$[0]), ($headerColumnTextDiv$$1$$ = 
      $headerColumnCell$$2_newHeaderColumnTextDivWidth$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnTextDiv$$1$$.length && ($sortPlaceHolderDivWidth$$ = 0, $column$$18_headerColumnTextDivWidth$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && ($sortPlaceHolderDivWidth$$ = $$$$14$$($headerColumnCell$$2_newHeaderColumnTextDivWidth$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$).get(0)).width()), 
      0 < $headerColumnDiv$$1$$[0].clientWidth && $headerColumnTextDiv$$1$$.width() + $sortPlaceHolderDivWidth$$ > $headerColumnDiv$$1$$[0].clientWidth && ($headerColumnTextDiv$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, ""), $column$$18_headerColumnTextDivWidth$$ = $headerColumnTextDiv$$1$$.width(), $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ = $headerColumnCell$$2_newHeaderColumnTextDivWidth$$.width() - $sortPlaceHolderDivWidth$$, $column$$18_headerColumnTextDivWidth$$ > $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ + 
      1 && $headerColumnTextDiv$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)))));
    }
  };
  $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$ = {$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$:"oj-table-checkbox-acc-select-column", $_CHECKBOX_ACC_SELECT_ROW_CLASS$:"oj-table-checkbox-acc-select-row", $_TABLE_CONTAINER_CLASS$:"oj-table-container", $_TABLE_SCROLLER_CLASS$:"oj-table-scroller", $_TABLE_CLASS$:"oj-table", $_TABLE_COMPACT_CLASS$:"oj-table-grid-display", $_TABLE_ELEMENT_CLASS$:"oj-table-element", $_TABLE_FOOTER_CLASS$:"oj-table-footer", $_TABLE_FOOTER_ROW_CLASS$:"oj-table-footer-row", $_TABLE_HEADER_CLASS$:"oj-table-header", 
  $_TABLE_HEADER_ROW_CLASS$:"oj-table-header-row", $_COLUMN_HEADER_CELL_CLASS$:"oj-table-column-header-cell", $_COLUMN_HEADER_DROP_EMPTY_CELL_CLASS$:"oj-table-column-header-drop-empty-cell", $_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$:"oj-table-column-header-acc-select-column", $_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$:"oj-table-column-header-acc-select-row", $_COLUMN_HEADER_ACC_SELECT_ROW_TEXT_CLASS$:"oj-table-column-header-acc-select-row-text", $_COLUMN_HEADER_CLASS$:"oj-table-column-header", $_COLUMN_HEADER_TEXT_CLASS$:"oj-table-column-header-text", 
  $_COLUMN_HEADER_ASC_CLASS$:"oj-table-column-header-asc", $_COLUMN_HEADER_DSC_CLASS$:"oj-table-column-header-dsc", $_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$:"oj-table-column-header-sort-placeholder", $_COLUMN_HEADER_ACC_ASC_LINK_CLASS$:"oj-table-column-header-acc-asc-link", $_COLUMN_HEADER_ACC_DSC_LINK_CLASS$:"oj-table-column-header-acc-dsc-link", $_COLUMN_HEADER_ASC_LINK_CLASS$:"oj-table-column-header-asc-link", $_COLUMN_HEADER_DSC_LINK_CLASS$:"oj-table-column-header-dsc-link", $_COLUMN_HEADER_ASC_ICON_CLASS$:"oj-table-column-header-asc-icon", 
  $_COLUMN_HEADER_DSC_ICON_CLASS$:"oj-table-column-header-dsc-icon", $_COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS$:"oj-table-column-header-drag-indicator-before", $_COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS$:"oj-table-column-header-drag-indicator-after", $_COLUMN_HEADER_DRAG_IMAGE$:"oj-table-column-header-cell-drag-image", $_TABLE_BODY_CLASS$:"oj-table-body", $_TABLE_DATA_ROW_CLASS$:"oj-table-body-row", $_TABLE_DATA_ROW_DRAG_INDICATOR_BEFORE_CLASS$:"oj-table-body-row-drag-indicator-before", $_TABLE_DATA_ROW_DRAG_INDICATOR_AFTER_CLASS$:"oj-table-body-row-drag-indicator-after", 
  $_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_CLASS$:"oj-table-body-row-touch-selection-affordance-top", $_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_CLASS$:"oj-table-body-row-touch-selection-affordance-bottom", $_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_ICON_CLASS$:"oj-table-body-row-touch-selection-affordance-top-icon", $_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_ICON_CLASS$:"oj-table-body-row-touch-selection-affordance-bottom-icon", $_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOUCH_AREA_CLASS$:"oj-table-body-row-touch-selection-affordance-touch-area", 
  $_TABLE_DATA_CURRENT_ROW_CLASS$:"oj-table-body-current-row", $_TABLE_DATA_CELL_CLASS$:"oj-table-data-cell", $_TABLE_DATA_CELL_ACC_SELECT_CLASS$:"oj-table-data-cell-acc-select", $_TABLE_VGRID_LINES_CLASS$:"oj-table-vgrid-lines", $_TABLE_HGRID_LINES_CLASS$:"oj-table-hgrid-lines", $_TABLE_FOOTER_CELL_CLASS$:"oj-table-footer-cell", $_TABLE_FOOTER_DROP_EMPTY_CELL_CLASS$:"oj-table-footer-drop-empty-cell", $_TABLE_INLINE_MESSAGE_CLASS$:"oj-table-inline-message", $_TABLE_STATUS_MESSAGE_CLASS$:"oj-table-status-message", 
  $_TABLE_STATUS_MESSAGE_TEXT_CLASS$:"oj-table-status-message-text", $_TABLE_NO_DATA_MESSAGE_CLASS$:"oj-table-no-data-message", $_TABLE_NO_DATA_ROW_CLASS$:"oj-table-no-data-row", $_WIDGET_ICON_CLASS$:"oj-component-icon", $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"};
  $oj$$14$$.$TableDomUtils$.$CSS_PROP$ = {$_DISPLAY$:"display", $_POSITION$:"position", $_HEIGHT$:"height", $_WIDTH$:"width", $_TOP$:"top", $_BOTTOM$:"bottom", $_LEFT$:"left", $_RIGHT$:"right", $_PADDING_TOP$:"padding-top", $_PADDING_LEFT$:"padding-left", $_PADDING_RIGHT$:"padding-right", $_OVERFLOW$:"overflow", $_OVERFLOW_X$:"overflow-x", $_OVERFLOW_Y$:"overflow-y", $_MIN_WIDTH$:"min-width", $_MIN_HEIGHT$:"min-height", $_FLOAT$:"float", $_BORDER_TOP$:"border-top", $_BORDER_BOTTOM_WIDTH$:"border-bottom-width", 
  $_BORDER_LEFT_WIDTH$:"border-left-width", $_MARGIN_BOTTOM$:"margin-bottom", $_VERTICAL_ALIGN$:"vertical-align", $_CURSOR$:"cursor", $_ZINDEX$:"z-index"};
  $oj$$14$$.$TableDomUtils$.$CSS_VAL$ = {$_NONE$:"none", $_BLOCK$:"block", $_RELATIVE$:"relative", $_ABSOLUTE$:"absolute", $_INLINE$:"inline", $_AUTO$:"auto", $_HIDDEN$:"hidden", $_LEFT$:"left", $_PX$:"px", $_MIDDLE$:"middle", $_MOVE$:"move"};
  $oj$$14$$.$TableDomUtils$.$DOM_ATTR$ = {$_STYLE$:"style", $_TABINDEX$:"tabindex", $_TYPE$:"type", $_ID$:"id", $_TITLE$:"title", $_HREF$:"href", $_HEADERS$:"headers", $_COLSPAN$:"colspan"};
  $oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$ = {$_DIV$:"div", $_A$:"a", $_TR$:"tr", $_TD$:"td", $_TH$:"th", $_TABLE$:"table", $_TBODY$:"tbody", $_THEAD$:"thead", $_TFOOT$:"tfoot", $_INPUT$:"input", $_UL$:"ul", $_SPAN$:"span"};
  $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$ = {$_WIDGET$:"oj-component", $_ACTIVE$:"oj-active", $_CLICKABLE_ICON$:"oj-clickable-icon-nocontext", $_DISABLED$:"oj-disabled", $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-selected", $_WARNING$:"oj-warning", $_DRAGGABLE$:"oj-draggable", $_DRAG$:"oj-drag"};
  $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$ = "_hdrColRowSel";
  $oj$$14$$.$TableDomUtils$.$_OPTION_AUTO$ = "auto";
  $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ = "enabled";
  $oj$$14$$.$TableDomUtils$.$_OPTION_DISABLED$ = "disabled";
  $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$ = {$_SINGLE$:"single", $_MULTIPLE$:"multiple"};
  $oj$$14$$.$TableDomUtils$.$_OPTION_DISPLAY$ = {$_LIST$:"list", $_GRID$:"grid"};
  $oj$$14$$.$TableRendererUtils$ = {};
  $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$columnHeaderDefaultRenderer$$($context$$68$$, $delegateRenderer$$2$$) {
    var $headerContentDiv_parentElement$$1$$ = $$$$14$$($context$$68$$.headerContext.parentElement), $headerColumnDiv$$2$$ = $$$$14$$(document.createElement("div"));
    $headerColumnDiv$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$);
    $headerContentDiv_parentElement$$1$$.empty();
    $headerContentDiv_parentElement$$1$$.append($headerColumnDiv$$2$$);
    $headerContentDiv_parentElement$$1$$ = $$$$14$$(document.createElement("div"));
    $headerContentDiv_parentElement$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$);
    $headerColumnDiv$$2$$.prepend($headerContentDiv_parentElement$$1$$);
    null != $delegateRenderer$$2$$ ? $delegateRenderer$$2$$($headerContentDiv_parentElement$$1$$) : this.$columnHeaderDefaultTextRenderer$($headerContentDiv_parentElement$$1$$, $context$$68$$);
  };
  $oj$$14$$.$TableRendererUtils$.$columnHeaderSortableIconRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$columnHeaderSortableIconRenderer$$($context$$69$$, $delegateRenderer$$3$$) {
    var $component$$18_headerContentDiv$$1$$ = $context$$69$$.headerContext.component, $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$ = $$$$14$$($context$$69$$.headerContext.parentElement), $headerColumnDiv$$3$$ = $$$$14$$(document.createElement("div"));
    $headerColumnDiv$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.empty();
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.append($headerColumnDiv$$3$$);
    "rtl" === $component$$18_headerContentDiv$$1$$.$_GetReadingDirection$() ? $headerColumnDiv$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$, "0px") : $headerColumnDiv$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$, "0px");
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$);
    $headerColumnDiv$$3$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$);
    var $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$);
    $component$$18_headerContentDiv$$1$$._hoverable($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.append($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    var $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.width(), $headerColumnAscHeight$$ = $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.height(), $headerColumnAccAscLink$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccAscLink$$.attr("tabindex", "0");
    $headerColumnAccAscLink$$.attr("href", "#");
    $headerColumnAccAscLink$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_ASC_LINK_CLASS$);
    $headerColumnAccAscLink$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumnAccAscLink$$.text($component$$18_headerContentDiv$$1$$.$getTranslatedString$("labelSortAsc"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.append($headerColumnAccAscLink$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, "inline-block");
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_VERTICAL_ALIGN$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_MIDDLE$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.css("width", $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ + "px");
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.css("height", $headerColumnAscHeight$$ + "px");
    $headerColumnDiv$$3$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
    $headerColumnDiv$$3$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$);
    $component$$18_headerContentDiv$$1$$._hoverable($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.append($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.attr("tabindex", "0");
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.attr("href", "#");
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_DSC_LINK_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.text($component$$18_headerContentDiv$$1$$.$getTranslatedString$("labelSortDsc"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_parentElement$$2$$.append($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $component$$18_headerContentDiv$$1$$ = $$$$14$$(document.createElement("div"));
    $component$$18_headerContentDiv$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$);
    $headerColumnDiv$$3$$.prepend($component$$18_headerContentDiv$$1$$);
    null != $delegateRenderer$$3$$ ? $delegateRenderer$$3$$($component$$18_headerContentDiv$$1$$) : this.$columnHeaderDefaultTextRenderer$($component$$18_headerContentDiv$$1$$, $context$$69$$);
  };
  $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultTextRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$columnHeaderDefaultTextRenderer$$($headerContentDiv$$2$$, $context$$70$$) {
    var $column$$19_columnIdx$$61$$ = $context$$70$$.columnIndex, $column$$19_columnIdx$$61$$ = $context$$70$$.headerContext.component.$_getColumnDefs$()[$column$$19_columnIdx$$61$$];
    $headerContentDiv$$2$$.text($column$$19_columnIdx$$61$$.headerText);
  };
  $oj$$14$$.$TableRendererUtils$.$tableBodyRowDefaultRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$tableBodyRowDefaultRenderer$$($rowIdx$$38$$, $row$$16$$, $context$$71$$) {
    var $component$$20_j$$34$$ = $context$$71$$.rowContext.component, $columnsCount$$12_tableBodyRow$$27$$ = $$$$14$$($context$$71$$.rowContext.parentElement), $rowHashCode$$4$$ = $component$$20_j$$34$$.$_getTableDomUtils$().$hashCode$($row$$16$$.key), $columns$$20$$ = $component$$20_j$$34$$.$_getColumnDefs$();
    $component$$20_j$$34$$.$_getTableDomUtils$().$setTableBodyRowAttributes$($row$$16$$, $columnsCount$$12_tableBodyRow$$27$$);
    $columnsCount$$12_tableBodyRow$$27$$ = $columns$$20$$.length;
    for ($component$$20_j$$34$$ = 0;$component$$20_j$$34$$ < $columnsCount$$12_tableBodyRow$$27$$;$component$$20_j$$34$$++) {
      this.$tableBodyCellDefaultRenderer$($rowIdx$$38$$, $component$$20_j$$34$$, $row$$16$$, $rowHashCode$$4$$, $context$$71$$);
    }
  };
  $oj$$14$$.$TableRendererUtils$.$tableBodyCellDefaultRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$tableBodyCellDefaultRenderer$$($rowIdx$$39$$, $columnIdx$$62$$, $row$$17$$, $rowHashCode$$5$$, $context$$72_tableBodyRow$$28$$) {
    var $component$$21$$ = $context$$72_tableBodyRow$$28$$.rowContext.component;
    $context$$72_tableBodyRow$$28$$ = $$$$14$$($context$$72_tableBodyRow$$28$$.rowContext.parentElement);
    var $cellRenderer$$2_column$$20$$ = $component$$21$$.$_getColumnDefs$()[$columnIdx$$62$$], $tableBodyCell$$13$$ = $component$$21$$.$_getTableDomUtils$().$createTableBodyCell$();
    $component$$21$$.$_getTableDomUtils$().$styleTableBodyCell$($columnIdx$$62$$, $tableBodyCell$$13$$, !0);
    $component$$21$$.$_getTableDomUtils$().$insertTableBodyCell$($rowIdx$$39$$, $row$$17$$.key, $rowHashCode$$5$$, $columnIdx$$62$$, $tableBodyCell$$13$$, $context$$72_tableBodyRow$$28$$);
    var $cellColumnContent_data$$121$$ = null;
    null != $cellRenderer$$2_column$$20$$.field && ($cellColumnContent_data$$121$$ = $row$$17$$.data[$cellRenderer$$2_column$$20$$.field]);
    if ($cellRenderer$$2_column$$20$$ = $component$$21$$.$_getColumnRenderer$($columnIdx$$62$$, "cell")) {
      var $cellContext$$ = this.$getRendererContextObject$($component$$21$$, $row$$17$$, $tableBodyCell$$13$$[0]), $cellColumnContent_data$$121$$ = $cellRenderer$$2_column$$20$$({cellContext:$cellContext$$, columnIndex:$columnIdx$$62$$, data:$cellColumnContent_data$$121$$, row:$$$$14$$.extend({}, $row$$17$$.data)});
      null != $cellColumnContent_data$$121$$ ? $tableBodyCell$$13$$.append($cellColumnContent_data$$121$$) : ($tableBodyCell$$13$$ = $$$$14$$($context$$72_tableBodyRow$$28$$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$ + ")")[$columnIdx$$62$$]), $component$$21$$.$_getTableDomUtils$().$setTableBodyCellAttributes$($rowIdx$$39$$, $row$$17$$.key, $rowHashCode$$5$$, $columnIdx$$62$$, $tableBodyCell$$13$$), $component$$21$$.$_getTableDomUtils$().$styleTableBodyCell$($columnIdx$$62$$, 
      $tableBodyCell$$13$$, !1));
    } else {
      $tableBodyCell$$13$$.text($cellColumnContent_data$$121$$);
    }
  };
  $oj$$14$$.$TableRendererUtils$.$getRendererContextObject$ = function $$oj$$14$$$$TableRendererUtils$$$getRendererContextObject$$($component$$22_rowContext$$1$$, $row$$18$$, $parentElement$$3$$) {
    var $context$$73$$ = {};
    $context$$73$$.component = $component$$22_rowContext$$1$$;
    var $dataSource$$ = $component$$22_rowContext$$1$$.$_getData$();
    $dataSource$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($dataSource$$ = $dataSource$$.getWrappedDataSource());
    $context$$73$$.datasource = $dataSource$$;
    $context$$73$$.parentElement = $parentElement$$3$$;
    if (null != $row$$18$$ && ($context$$73$$.status = this.$getRendererStatusObject$($component$$22_rowContext$$1$$, $row$$18$$), $dataSource$$ instanceof $oj$$14$$.$FlattenedTreeTableDataSource$)) {
      $component$$22_rowContext$$1$$ = $dataSource$$.$_getMetadata$($row$$18$$.index);
      for (var $i$$240$$ in $component$$22_rowContext$$1$$) {
        $component$$22_rowContext$$1$$.hasOwnProperty($i$$240$$) && ($context$$73$$[$i$$240$$] = $component$$22_rowContext$$1$$[$i$$240$$]);
      }
    }
    return $context$$73$$;
  };
  $oj$$14$$.$TableRendererUtils$.$getRendererStatusObject$ = function $$oj$$14$$$$TableRendererUtils$$$getRendererStatusObject$$($component$$23$$, $row$$19$$) {
    return{rowIndex:$row$$19$$.index, rowKey:$row$$19$$.key, currentRow:$$$$14$$.extend({}, $component$$23$$.$_getCurrentRow$())};
  };
});
