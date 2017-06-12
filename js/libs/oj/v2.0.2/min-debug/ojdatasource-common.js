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
define(["ojs/ojcore", "jquery"], function($oj$$9$$) {
  $oj$$9$$.$DataSource$ = function $$oj$$9$$$$DataSource$$($data$$54$$) {
    this.data = $data$$54$$;
    this.Init();
  };
  $goog$exportPath_$$("DataSource", $oj$$9$$.$DataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$DataSource$, $oj$$9$$.$EventSource$, "oj.DataSource");
  $oj$$9$$.$DataSource$.prototype.Init = function $$oj$$9$$$$DataSource$$$Init$() {
    $oj$$9$$.$DataSource$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("DataSource.prototype.Init", {Init:$oj$$9$$.$DataSource$.prototype.Init});
  $oj$$9$$.$TreeDataSource$ = function $$oj$$9$$$$TreeDataSource$$($data$$55$$) {
    $oj$$9$$.$TreeDataSource$.$superclass$.constructor.call(this, $data$$55$$);
  };
  $goog$exportPath_$$("TreeDataSource", $oj$$9$$.$TreeDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$TreeDataSource$, $oj$$9$$.$DataSource$, "oj.TreeDataSource");
  $oj$$9$$.$TableDataSource$ = function $$oj$$9$$$$TableDataSource$$($data$$56$$, $options$$216$$) {
    if (this.constructor == $oj$$9$$.$TableDataSource$) {
      throw Error($oj$$9$$.$TableDataSource$.$_LOGGER_MSG$.$_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY$ + "\n" + $oj$$9$$.$TableDataSource$.$_LOGGER_MSG$.$_ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL$);
    }
    this.data = $data$$56$$;
    this.options = $options$$216$$;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("TableDataSource", $oj$$9$$.$TableDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$TableDataSource$, $oj$$9$$.$DataSource$, "oj.TableDataSource");
  $oj$$9$$.$TableDataSource$.prototype.Init = function $$oj$$9$$$$TableDataSource$$$Init$() {
    $oj$$9$$.$TableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.Init", {Init:$oj$$9$$.$TableDataSource$.prototype.Init});
  $oj$$9$$.$TableDataSource$.prototype.totalSizeConfidence = function $$oj$$9$$$$TableDataSource$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$9$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$9$$.$TableDataSource$.prototype.totalSizeConfidence});
  $oj$$9$$.$TableDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", REFRESH:"refresh", SORT:"sort", CHANGE:"change", REQUEST:"request", SYNC:"sync", ERROR:"error"};
  $goog$exportPath_$$("TableDataSource.EventType", $oj$$9$$.$TableDataSource$.$EventType$, $oj$$9$$);
  $oj$$9$$.$TableDataSource$.$_LOGGER_MSG$ = {_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY:"oj.TableDataSource constructor called.", _ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL:"Please do not instantiate oj.TableDataSource. Please use one of the subclasses instead such as oj.ArrayTableDataSource or oj.CollectionTableDataSource.", _ERR_DATA_INVALID_TYPE_SUMMARY:"Invalid data type.", _ERR_DATA_INVALID_TYPE_DETAIL:"Please specify the appropriate data type."};
  $oj$$9$$.$DataGridDataSource$ = function $$oj$$9$$$$DataGridDataSource$$($data$$57$$) {
    $oj$$9$$.$DataGridDataSource$.$superclass$.constructor.call(this, $data$$57$$);
  };
  $goog$exportPath_$$("DataGridDataSource", $oj$$9$$.$DataGridDataSource$, $oj$$9$$);
  $oj$$9$$.$Object$.$createSubclass$($oj$$9$$.$DataGridDataSource$, $oj$$9$$.$DataSource$, "oj.DataGridDataSource");
});
