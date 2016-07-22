/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/internal-deps/datagrid/DvtDataGrid", "promise", "ojs/ojcomponentcore", "ojs/ojdatasource-common", "ojs/ojarraydatagriddatasource", "ojs/ojflattenedtreedatagriddatasource", "ojs/ojpagingdatagriddatasource", "ojs/ojinputnumber", "ojs/ojmenu", "ojs/ojdialog", "ojs/ojpagingcontrol"], function($oj$$11$$, $$$$11$$, $DvtDataGrid$$1$$) {
  $oj$$11$$.$DataGridResources$ = function $$oj$$11$$$$DataGridResources$$($rtlMode$$, $translationFunction$$) {
    this.$rtlMode$ = $rtlMode$$;
    this.$translationFunction$ = $translationFunction$$;
    this.$styles$ = {};
    this.$styles$.datagrid = "oj-datagrid";
    this.$styles$.cell = "oj-datagrid-cell";
    this.$styles$.cellcontent = "oj-datagrid-cell-content";
    this.$styles$.celltext = "oj-datagrid-cell-text";
    this.$styles$.banded = "oj-datagrid-banded";
    this.$styles$.row = "oj-datagrid-row";
    this.$styles$.databody = "oj-datagrid-databody";
    this.$styles$.topcorner = "oj-datagrid-top-corner";
    this.$styles$.bottomcorner = "oj-datagrid-bottom-corner";
    this.$styles$.rowheaderspacer = "oj-datagrid-row-header-spacer";
    this.$styles$.colheaderspacer = "oj-datagrid-column-header-spacer";
    this.$styles$.status = "oj-datagrid-status";
    this.$styles$.emptytext = "oj-datagrid-empty-text";
    this.$styles$.header = "oj-datagrid-header";
    this.$styles$.groupingcontainer = "oj-datagrid-header-grouping";
    this.$styles$.headercell = "oj-datagrid-header-cell";
    this.$styles$.headercelltext = "oj-datagrid-header-cell-text";
    this.$styles$.headercellcontent = "oj-datagrid-header-cell-content";
    this.$styles$.rowheader = "oj-datagrid-row-header";
    this.$styles$.colheader = "oj-datagrid-column-header";
    this.$styles$.colheadercell = "oj-datagrid-column-header-cell";
    this.$styles$.rowheadercell = "oj-datagrid-row-header-cell";
    this.$styles$["scroller-mobile"] = "oj-datagrid-scroller-touch";
    this.$styles$.scroller = "oj-datagrid-scroller";
    this.$styles$.scrollers = "oj-datagrid-scrollers";
    this.$styles$.focus = "oj-focus";
    this.$styles$.hover = "oj-hover";
    this.$styles$.active = "oj-active";
    this.$styles$.selected = "oj-selected";
    this.$styles$.disabled = "oj-disabled";
    this.$styles$.enabled = "oj-enabled";
    this.$styles$["default"] = "oj-default";
    this.$styles$.sortcontainer = "oj-datagrid-sort-icon-container";
    this.$styles$.sortascending = "oj-datagrid-sort-ascending-icon";
    this.$styles$.sortdescending = "oj-datagrid-sort-descending-icon";
    this.$styles$.icon = "oj-component-icon";
    this.$styles$.clickableicon = "oj-clickable-icon-nocontext";
    this.$styles$.info = "oj-helper-hidden-accessible";
    this.$styles$.rowexpander = "oj-rowexpander";
    this.$styles$.cut = "oj-datagrid-cut";
    this.$styles$.selectaffordancetop = "oj-datagrid-touch-selection-affordance-top";
    this.$styles$.selectaffordancebottom = "oj-datagrid-touch-selection-affordance-bottom";
    this.$styles$.toucharea = "oj-datagrid-touch-area";
    this.$styles$.draggable = "oj-draggable";
    this.$styles$.drag = "oj-drag";
    this.$styles$.drop = "oj-drop";
    this.$styles$.activedrop = "oj-active-drop";
    this.$styles$.validdrop = "oj-valid-drop";
    this.$styles$.invaliddrop = "oj-invalid-drop";
    this.$commands$ = {};
    this.$commands$.sortCol = "oj-datagrid-sortCol";
    this.$commands$.sortColAsc = "oj-datagrid-sortColAsc";
    this.$commands$.sortColDsc = "oj-datagrid-sortColDsc";
    this.$commands$.sortRow = "oj-datagrid-sortRow";
    this.$commands$.sortRowAsc = "oj-datagrid-sortRowAsc";
    this.$commands$.sortRowDsc = "oj-datagrid-sortRowDsc";
    this.$commands$.resize = "oj-datagrid-resize";
    this.$commands$.resizeWidth = "oj-datagrid-resizeWidth";
    this.$commands$.resizeHeight = "oj-datagrid-resizeHeight";
    this.$commands$.cut = "oj-datagrid-cut";
    this.$commands$.paste = "oj-datagrid-paste";
    this.$commands$.discontiguousSelection = "oj-datagrid-discontiguousSelection";
    this.attributes = {};
    this.attributes.key = "data-oj-key";
    this.attributes.context = "data-oj-context";
    this.attributes.resizable = "data-oj-resizable";
    this.attributes.sortable = "data-oj-sortable";
    this.attributes.sortDir = "data-oj-sortdir";
    this.attributes.expander = "data-oj-expander";
    this.attributes.expanderIndex = "data-oj-expander-index";
    this.attributes.container = $oj$$11$$.Components.$_OJ_CONTAINER_ATTR$;
    this.attributes.extent = "data-oj-extent";
    this.attributes.start = "data-oj-start";
    this.attributes.depth = "data-oj-depth";
    this.attributes.level = "data-oj-level";
    this.attributes.tabMod = "data-oj-tabmod";
  };
  $goog$exportPath_$$("DataGridResources", $oj$$11$$.$DataGridResources$, $oj$$11$$);
  $oj$$11$$.$DataGridResources$.prototype.$isRTLMode$ = function $$oj$$11$$$$DataGridResources$$$$isRTLMode$$() {
    return "rtl" === this.$rtlMode$ ? !0 : !1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.isRTLMode", {$isRTLMode$:$oj$$11$$.$DataGridResources$.prototype.$isRTLMode$});
  $oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$ = function $$oj$$11$$$$DataGridResources$$$$getTranslatedText$$($key$$48$$, $args$$17$$) {
    return this.$translationFunction$($key$$48$$, $args$$17$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getTranslatedText", {$getTranslatedText$:$oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$ = function $$oj$$11$$$$DataGridResources$$$$getMappedStyle$$($key$$49$$) {
    return null != $key$$49$$ ? this.$styles$[$key$$49$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedStyle", {$getMappedStyle$:$oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$ = function $$oj$$11$$$$DataGridResources$$$$getMappedCommand$$($key$$50$$) {
    return null != $key$$50$$ ? this.$commands$[$key$$50$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedCommand", {$getMappedCommand$:$oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$ = function $$oj$$11$$$$DataGridResources$$$$getMappedAttribute$$($key$$51$$) {
    return null != $key$$51$$ ? this.attributes[$key$$51$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedAttribute", {$getMappedAttribute$:$oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$});
  $oj$$11$$.$__registerWidget$("oj.ojDataGrid", $$$$11$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{bandingInterval:{row:0, column:0}, data:null, gridlines:{horizontal:"visible", vertical:"visible"}, scrollPosition:null, selectionMode:null, dnd:{reorder:{row:"disable"}}, scrollPolicy:"auto", selection:[], currentCell:null, header:{row:{className:null, renderer:null, resizable:{width:"disable", height:"disable"}, sortable:"auto", style:null}, column:{className:null, renderer:null, resizable:{width:"disable", 
  height:"disable"}, sortable:"auto", style:null}}, cell:{className:null, renderer:null, style:null}, resize:null, sort:null, optionChange:null, ready:null, scroll:null, beforeCurrentCell:null}, _ComponentCreate:function() {
    this._super();
    this.root = this.element[0];
    this.$rootId$ = this.root.getAttribute("id");
    this.$_createReadyPromise$();
    this.$_resolveReadyPromise$();
    this.grid = new $DvtDataGrid$$1$$;
    this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_RENDER);
    $$$$11$$(this.root).addClass("oj-datagrid oj-component");
    this.$redrawSet$ = {data:"all", header:["className", "renderer", "style", "template"]};
  }, $_AfterCreate$:function() {
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
    this._super();
    this.$resources$ = new $oj$$11$$.$DataGridResources$(this.$_GetReadingDirection$(), this.$_getTranslation$.bind(this));
    this.$_setDataSource$();
    this.$_setSelection$();
    null != this.$datasource$ && (this.$_addContextMenu$(), this.grid.SetDataSource(this.$datasource$));
    this.grid.SetOptions(this.options);
    this.grid.SetResources(this.$resources$);
    this.grid.SetCreateContextCallback(this.$_modifyContext$.bind(this));
    this.grid.SetRemoveCallback(this.$_remove$.bind(this));
    this.grid.SetCreateReadyPromiseCallback(this.$_createReadyPromise$.bind(this));
    this.grid.SetResolveReadyPromiseCallback(this.$_resolveReadyPromise$.bind(this));
    this.$_registerEventListeners$();
    this.$_possiblyRenderOrRefresh$();
    null != this.$datasource$ && this.$_registerResizeListener$(this.root);
  }, $_registerEventListeners$:function() {
    var $self$$69$$ = this;
    this.grid.addListener("resize", function($details$$) {
      $self$$69$$._trigger("resize", $details$$.event, $details$$.ui);
    });
    this.grid.addListener("select", function($details$$1$$) {
      $self$$69$$.option("selection", $details$$1$$.ui.selection, {_context:{originalEvent:$details$$1$$.event, $internalSet$:!0}, changed:!0});
    });
    this.grid.addListener("currentCell", function($details$$2$$) {
      $self$$69$$.option("currentCell", $details$$2$$.ui, {_context:{originalEvent:$details$$2$$.event, $internalSet$:!0}, changed:!0});
    });
    this.grid.addListener("beforeCurrentCell", function($details$$3$$) {
      return $self$$69$$._trigger("beforeCurrentCell", $details$$3$$.event, $details$$3$$.ui);
    });
    this.grid.addListener("sort", function($details$$4$$) {
      $self$$69$$._trigger("sort", $details$$4$$.event, $details$$4$$.ui);
    });
    this.grid.addListener("keydown", function($details$$5$$) {
      $self$$69$$._trigger("keydown", $details$$5$$.event, $details$$5$$.ui);
    });
    this.grid.addListener("ready", function() {
      $self$$69$$._trigger("ready", null, {});
    });
    this.grid.addListener("scroll", function($details$$7$$) {
      $self$$69$$._trigger("scroll", $details$$7$$.event, $details$$7$$.ui);
    });
  }, refresh:function() {
    this._super();
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
    !0 === this.$_useDefaultContextMenu$ && (this.options.contextMenu = null);
    this.$_setDataSource$();
    null != this.$datasource$ && (this.$datasource$ instanceof $oj$$11$$.$FlattenedTreeDataGridDataSource$ && (this.$datasource$.$Destroy$(), this.$datasource$.Init()), this.$_addContextMenu$(), this.grid.SetDataSource(this.$datasource$));
    this.grid.SetOptions(this.options);
    this.grid.SetResources(this.$resources$);
    this.grid.getVisibility() != $DvtDataGrid$$1$$.VISIBILITY_STATE_RENDER && this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_REFRESH);
    this.$_possiblyRenderOrRefresh$();
    null != this.$datasource$ && this.$_registerResizeListener$(this.root);
  }, _destroy:function() {
    null != this.$datasource$ && this.$datasource$.$Destroy$ && this.$datasource$.$Destroy$();
    this.grid.destroy();
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
  }, _setOptions:function($options$$220$$, $flags$$16$$) {
    var $isRefresh$$;
    this.$datasource$ ? ($isRefresh$$ = this.$_shouldRefresh$($options$$220$$), this._super($options$$220$$, $flags$$16$$), $isRefresh$$ ? this.refresh() : this.grid.UpdateOptions($options$$220$$)) : (this._super($options$$220$$, $flags$$16$$), null != $options$$220$$.data && this.refresh());
  }, $_NotifyShown$:function() {
    this._super();
    this.$_possiblyRenderOrRefresh$();
  }, $_NotifyHidden$:function() {
    this._super();
    this.grid.getVisibility() === $DvtDataGrid$$1$$.VISIBILITY_STATE_VISIBLE && this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_HIDDEN);
  }, $_NotifyAttached$:function() {
    this._super();
    this.$_possiblyRenderOrRefresh$();
  }, $_NotifyDetached$:function() {
    this._super();
    this.grid.getVisibility() === $DvtDataGrid$$1$$.VISIBILITY_STATE_VISIBLE && this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_HIDDEN);
  }, $_shouldRefresh$:function($options$$221$$) {
    var $i$$139$$, $key$$52$$, $isRefresh$$1$$, $elm$$, $itm$$, $opt$$19$$;
    $isRefresh$$1$$ = !1;
    for ($key$$52$$ in $options$$221$$) {
      if ($key$$52$$ in this.$redrawSet$) {
        if ("data" === $key$$52$$) {
          $isRefresh$$1$$ = !0;
          break;
        } else {
          if ("header" == $key$$52$$) {
            for ($elm$$ in $options$$221$$.header) {
              if ("column" == $elm$$ || "row" == $elm$$ || "cell" == $elm$$) {
                for ($itm$$ in $options$$221$$.header[$elm$$]) {
                  for ($i$$139$$ = 0;$i$$139$$ < this.$redrawSet$.header.length;$i$$139$$++) {
                    if ($itm$$ == this.$redrawSet$.header[$i$$139$$]) {
                      for ($opt$$19$$ in this.options.header[$elm$$]) {
                        if ($opt$$19$$ == $itm$$ && $options$$221$$.header[$elm$$][$itm$$] != this.options.header[$elm$$][$itm$$]) {
                          $isRefresh$$1$$ = !0;
                          break;
                        }
                      }
                    }
                  }
                  if ($isRefresh$$1$$) {
                    break;
                  }
                }
              }
              if ($isRefresh$$1$$) {
                break;
              }
            }
          } else {
            for ($opt$$19$$ in this.options) {
              if ($opt$$19$$ == $key$$52$$ && !$oj$$11$$.$Object$.$compareValues$($options$$221$$[$key$$52$$], this.options[$opt$$19$$])) {
                $isRefresh$$1$$ = !0;
                break;
              }
            }
          }
        }
      }
    }
    return $isRefresh$$1$$;
  }, $_isResizeEnabled$:function($axis$$, $direction$$4$$) {
    return this.options.header[$axis$$] && this.options.header[$axis$$].resizable ? "disable" !== this.options.header[$axis$$].resizable[$direction$$4$$] : !1;
  }, $_isSortEnabled$:function($axis$$1$$) {
    return this.options.header[$axis$$1$$] ? "disable" !== this.options.header[$axis$$1$$].sortable : !1;
  }, $_addContextMenu$:function() {
    var $self$$70$$, $menuContainer$$, $listItems_resizeMenu$$ = null, $sortMenu$$ = null, $selectMenu$$ = null, $moveMenu$$ = null, $sortCapability$$, $menuItemsSetByGrid$$;
    $self$$70$$ = this;
    if (null == this.options.contextMenu) {
      if (null != this.$datasource$) {
        $menuContainer$$ = $$$$11$$("\x3cul\x3e");
        $menuContainer$$.css("display", "none").attr("id", this.$rootId$ + "contextmenu");
        $$$$11$$(this.root).append($menuContainer$$);
        if (this.$_isResizeEnabled$("column", "width") || this.$_isResizeEnabled$("column", "height") || this.$_isResizeEnabled$("row", "width") || this.$_isResizeEnabled$("row", "height")) {
          $listItems_resizeMenu$$ = this.$_buildContextMenuItem$("resize");
        }
        $sortCapability$$ = this.$datasource$.getCapability("sort");
        !this.$_isSortEnabled$("column") || "column" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = this.$_buildContextMenuItem$("sortCol"));
        !this.$_isSortEnabled$("row") || "row" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = null != $sortMenu$$ ? $sortMenu$$.add(this.$_buildContextMenuItem$("sortRow")) : this.$_buildContextMenuItem$("sortRow"));
        if ("enable" === this.options.dnd.reorder.row) {
          switch(this.$datasource$.getCapability("move")) {
            case "none":
              break;
            default:
              $moveMenu$$ = this.$_buildContextMenuListItem$("cut").add(this.$_buildContextMenuListItem$("paste"));
          }
        }
        this.$_isMultipleSelection$() && $oj$$11$$.$DomUtils$.$isTouchSupported$() && (this.$_discontiguousSelection$ = !1, $selectMenu$$ = this.$_buildContextMenuListItem$("discontiguousSelection"));
        if (null != $listItems_resizeMenu$$ || null != $sortMenu$$ || null != $moveMenu$$ || null != $selectMenu$$) {
          $menuContainer$$.append($listItems_resizeMenu$$).append($sortMenu$$).append($moveMenu$$).append($selectMenu$$), $menuContainer$$.ojMenu(), this.$_useDefaultContextMenu$ = !0, this._setOption("contextMenu", "#" + $menuContainer$$.attr("id")), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
        }
      }
    } else {
      null == this.$_menuItemsSetByGrid$ && (this.$_menuItemsSetByGrid$ = []), $menuContainer$$ = $$$$11$$(this.options.contextMenu), $listItems_resizeMenu$$ = $menuContainer$$.find("[data-oj-command]"), $menuItemsSetByGrid$$ = [], $listItems_resizeMenu$$.each(function() {
        var $anchor_command_newListItem$$;
        $anchor_command_newListItem$$ = $$$$11$$(this).children("a");
        if (0 === $anchor_command_newListItem$$.length || -1 != $self$$70$$.$_menuItemsSetByGrid$.indexOf($anchor_command_newListItem$$.get(0))) {
          $anchor_command_newListItem$$ = $$$$11$$(this).attr("data-oj-command").split("-"), $anchor_command_newListItem$$ = $self$$70$$.$_buildContextMenuItem$($anchor_command_newListItem$$[$anchor_command_newListItem$$.length - 1]), $$$$11$$(this).replaceWith($anchor_command_newListItem$$), $menuItemsSetByGrid$$.push($anchor_command_newListItem$$.children("a").get(0));
        }
      }), this.$_menuItemsSetByGrid$ = $menuItemsSetByGrid$$, $menuContainer$$.data("oj-ojMenu") && $menuContainer$$.ojMenu("refresh"), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
    }
  }, $_buildContextMenuItem$:function($command$$1$$) {
    if ("resize" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("resize").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("resizeWidth")).append(this.$_buildContextMenuListItem$("resizeHeight")));
    }
    if ("sortCol" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("sortCol").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("sortColAsc")).append(this.$_buildContextMenuListItem$("sortColDsc")));
    }
    if ("sortRow" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("sortRow").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("sortRowAsc")).append(this.$_buildContextMenuListItem$("sortRowDsc")));
    }
    if (-1 != Object.keys(this.$resources$.$commands$).indexOf($command$$1$$)) {
      return $$$$11$$(this.$_buildContextMenuListItem$($command$$1$$));
    }
  }, $_buildContextMenuListItem$:function($command$$2$$) {
    var $listItem$$ = $$$$11$$("\x3cli\x3e\x3c/li\x3e");
    $listItem$$.attr("data-oj-command", this.$_getMappedCommand$($command$$2$$));
    $listItem$$.append(this.$_buildContextMenuLabel$($command$$2$$));
    return $listItem$$;
  }, $_buildContextMenuLabel$:function($command$$3$$) {
    var $key$$53$$ = "label" + $command$$3$$.charAt(0).toUpperCase() + $command$$3$$.slice(1);
    "discontiguousSelection" === $command$$3$$ && ($key$$53$$ = "labelEnableNonContiguous");
    return $$$$11$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e').text(this.$_getTranslation$($key$$53$$));
  }, $_getDataGridContextMenu$:function() {
    return $$$$11$$(this.options.contextMenu).get(0);
  }, $_getTranslation$:function($key$$54$$, $args$$18$$) {
    return this.$getTranslatedString$($key$$54$$, $args$$18$$);
  }, $_handleResizeDialog$:function() {
    var $value$$188$$ = $$$$11$$("#" + this.$rootId$ + "spinner").ojInputNumber("option", "value");
    $$$$11$$("#" + this.$rootId$ + "dialog").ojDialog("close");
    this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, $value$$188$$);
    this.$contextMenuEvent$.target.focus();
  }, $_buildResizeDialog$:function($title$$8$$, $initialSize$$) {
    var $dialog$$, $dialogBody$$, $spinner$$, $dialogFooter$$, $dialogOKButton$$;
    $dialog$$ = $$$$11$$("#" + this.$rootId$ + "dialog");
    $spinner$$ = $$$$11$$("#" + this.$rootId$ + "spinner");
    0 === $dialog$$.length || 0 === $spinner$$.length ? ($dialog$$ = $$$$11$$("\x3cdiv\x3e"), $dialog$$.attr("id", this.$rootId$ + "dialog"), $dialog$$.attr("title", $title$$8$$), $dialogBody$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-body"\x3e\x3c/div\x3e'), $dialogFooter$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-footer"\x3e\x3c/div\x3e'), $dialog$$.append($dialogBody$$).append($dialogFooter$$), $spinner$$ = $$$$11$$('\x3cinput id\x3d"' + this.$rootId$ + 'spinner"/\x3e'), $dialogOKButton$$ = $$$$11$$('\x3cbutton id\x3d"' + 
    this.$rootId$ + 'dialogsubmit"/\x3e'), $dialogBody$$.append($spinner$$), $dialogFooter$$.append($dialogOKButton$$), $$$$11$$(this.root).append($dialog$$), $dialogOKButton$$.ojButton({$component$:"ojButton", label:this.$_getTranslation$("labelResizeDialogSubmit")}), $dialogOKButton$$.on("click", this.$_handleResizeDialog$.bind(this)), $spinner$$.ojInputNumber({$component$:"ojInputNumber", max:1E3, min:20, step:1, value:$initialSize$$}), $dialog$$.ojDialog({initialVisibility:"show", position:{my:"center center", 
    at:"center center", collision:"none", of:$$$$11$$(this.root)}})) : ($spinner$$.ojInputNumber("option", "value", $initialSize$$), $$$$11$$("#" + this.$rootId$ + "dialog").ojDialog("open"));
  }, $_handleContextMenuSelect$:function($event$$106$$, $ui$$3$$) {
    var $initialSize$$1_key$$55_parent$$9$$;
    this.$menuItemFunction$ = $ui$$3$$.item.attr("data-oj-command");
    this.$menuItemFunction$ === this.$_getMappedCommand$("sortColAsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("sortColDsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("cut") || this.$menuItemFunction$ === this.$_getMappedCommand$("paste") ? this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, null) : this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") || this.$menuItemFunction$ === this.$_getMappedCommand$("resizeHeight") ? 
    ($initialSize$$1_key$$55_parent$$9$$ = $$$$11$$(this.$contextMenuEvent$.target).closest("." + this.$_getMappedStyle$("cell")), 0 == $initialSize$$1_key$$55_parent$$9$$.length && ($initialSize$$1_key$$55_parent$$9$$ = $$$$11$$(this.$contextMenuEvent$.target).closest("." + this.$_getMappedStyle$("headercell"))), 0 < $initialSize$$1_key$$55_parent$$9$$.length && ($initialSize$$1_key$$55_parent$$9$$ = this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $initialSize$$1_key$$55_parent$$9$$.outerWidth() : 
    $initialSize$$1_key$$55_parent$$9$$.outerHeight(), this.$_buildResizeDialog$($ui$$3$$.item.text(), $initialSize$$1_key$$55_parent$$9$$))) : this.$menuItemFunction$ === this.$_getMappedCommand$("discontiguousSelection") && (this.$_discontiguousSelection$ = !this.$_discontiguousSelection$, this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, this.$_discontiguousSelection$), $initialSize$$1_key$$55_parent$$9$$ = this.$_discontiguousSelection$ ? "labelDisableNonContiguous" : 
    "labelEnableNonContiguous", $ui$$3$$.item.children().first().text(this.$_getTranslation$($initialSize$$1_key$$55_parent$$9$$)));
  }, $_NotifyContextMenuGesture$:function($menu$$4$$, $event$$107$$, $eventType$$31$$) {
    this.grid.handleContextMenuGesture($event$$107$$, $eventType$$31$$, this.$_contextMenuGestureCallback$.bind(this));
  }, $_contextMenuGestureCallback$:function($capabilities_returnVal$$1$$, $event$$108$$, $eventType$$32$$) {
    var $launcher$$7_openOptions$$2$$;
    null != $capabilities_returnVal$$1$$ && (this.$contextMenuEvent$ = $event$$108$$.originalEvent, $launcher$$7_openOptions$$2$$ = $capabilities_returnVal$$1$$.launcher, $capabilities_returnVal$$1$$ = $capabilities_returnVal$$1$$.capabilities, this.$_manageContextMenu$($capabilities_returnVal$$1$$), $launcher$$7_openOptions$$2$$ = "keyboard" === $eventType$$32$$ ? {position:{of:$launcher$$7_openOptions$$2$$}, launcher:$$$$11$$($launcher$$7_openOptions$$2$$)} : {launcher:$$$$11$$($launcher$$7_openOptions$$2$$)}, 
    this.$_OpenContextMenu$($event$$108$$, $eventType$$32$$, $launcher$$7_openOptions$$2$$));
  }, $_addContextMenuCapability$:function($command$$4$$) {
    var $contextMenu$$1$$;
    $contextMenu$$1$$ = $$$$11$$(this.$_getDataGridContextMenu$());
    $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").hasClass("oj-disabled") || $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").addClass("oj-disabled");
  }, $_removeContextMenuCapability$:function($command$$5$$) {
    $$$$11$$(this.$_getDataGridContextMenu$()).find("[data-oj-command\x3d" + $command$$5$$ + "]").removeClass("oj-disabled");
  }, $_manageContextMenu$:function($capabilities$$1$$) {
    var $property$$21$$, $command$$6$$;
    for ($property$$21$$ in $capabilities$$1$$) {
      $capabilities$$1$$.hasOwnProperty($property$$21$$) && ($command$$6$$ = this.$resources$.$getMappedCommand$($property$$21$$), "disable" === $capabilities$$1$$[$property$$21$$] ? this.$_addContextMenuCapability$($command$$6$$) : this.$_removeContextMenuCapability$($command$$6$$));
    }
  }, $_findCellIndex$:function($columnIndex_element$$71$$) {
    var $row$$2$$;
    $row$$2$$ = $columnIndex_element$$71$$.parent();
    $columnIndex_element$$71$$ = $columnIndex_element$$71$$.index();
    return{rowIndex:$row$$2$$.index(), columnIndex:$columnIndex_element$$71$$};
  }, $_findHeadersByCellIndex$:function($columnHeader_index$$97$$) {
    var $rowHeader$$;
    $rowHeader$$ = this.$_getRowHeader$().children().eq(0).children().eq($columnHeader_index$$97$$.rowIndex + 1);
    $columnHeader_index$$97$$ = this.$_getColumnHeader$().children().eq(0).children().eq($columnHeader_index$$97$$.columnIndex);
    return{rowHeader:$rowHeader$$, columnHeader:$columnHeader_index$$97$$};
  }, $_getGrid$:function() {
    return $$$$11$$(this.root);
  }, $_getColumnHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:columnHeader");
  }, $_getRowHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:rowHeader");
  }, $_getDatabodyRows$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:databody ." + this.$_getMappedStyle$("row"));
  }, $_setDataSource$:function() {
    this.$datasource$ = null != this.options.data ? this.options.data : null;
  }, $_setSelection$:function() {
    var $selection$$ = this.options.selection;
    null != $selection$$ && this.grid.SetSelection($selection$$);
  }, $_modifyContext$:function($context$$52$$) {
    $context$$52$$.component = $oj$$11$$.Components.$getWidgetConstructor$(this.element, "ojDataGrid");
  }, $_setAccessibleContext$:function($context$$53$$) {
    this.grid.SetAccessibleContext($context$$53$$);
  }, $_unregisterResizeListener$:function($element$$72$$) {
    $element$$72$$ && this.$_resizeHandler$ && $oj$$11$$.$DomUtils$.$removeResizeListener$($element$$72$$, this.$_resizeHandler$);
  }, $_registerResizeListener$:function($element$$73$$) {
    $element$$73$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$11$$.$DomUtils$.$addResizeListener$($element$$73$$, this.$_resizeHandler$));
  }, $_handleResize$:function($width$$14$$, $height$$13$$) {
    0 < $width$$14$$ && 0 < $height$$13$$ && (this.$_possiblyRenderOrRefresh$(), this.grid.HandleResize($width$$14$$, $height$$13$$));
  }, getNodeBySubId:function($columnIndex$$1_level$$9_locator$$11$$) {
    var $rowIndex$$1_subId$$6$$, $header$$4$$, $index$$98_returnElement$$, $axis$$2$$;
    if (null == $columnIndex$$1_level$$9_locator$$11$$) {
      return this.element ? this.element[0] : null;
    }
    $rowIndex$$1_subId$$6$$ = $columnIndex$$1_level$$9_locator$$11$$.subId;
    if ("oj-datagrid-cell" === $rowIndex$$1_subId$$6$$) {
      $rowIndex$$1_subId$$6$$ = $columnIndex$$1_level$$9_locator$$11$$.rowIndex - this.grid.getStartRow(), $columnIndex$$1_level$$9_locator$$11$$ = $columnIndex$$1_level$$9_locator$$11$$.columnIndex - this.grid.getStartColumn(), $index$$98_returnElement$$ = this.$_getDatabodyRows$().eq($rowIndex$$1_subId$$6$$).children().eq($columnIndex$$1_level$$9_locator$$11$$);
    } else {
      if ("oj-datagrid-sort-icon" === $rowIndex$$1_subId$$6$$ || "oj-datagrid-sort-ascending" === $rowIndex$$1_subId$$6$$ || "oj-datagrid-sort-descending" === $rowIndex$$1_subId$$6$$ || "oj-datagrid-header" === $rowIndex$$1_subId$$6$$) {
        $axis$$2$$ = $columnIndex$$1_level$$9_locator$$11$$.axis;
        $index$$98_returnElement$$ = $columnIndex$$1_level$$9_locator$$11$$.index;
        $columnIndex$$1_level$$9_locator$$11$$ = null == $columnIndex$$1_level$$9_locator$$11$$.level ? 0 : $columnIndex$$1_level$$9_locator$$11$$.level;
        "column" === $axis$$2$$ ? $header$$4$$ = this.$_getHeaderByIndex$($index$$98_returnElement$$, $columnIndex$$1_level$$9_locator$$11$$, $$$$11$$("#" + this.$rootId$ + "\\:columnHeader"), this.grid.getStartColumnHeader()) : "row" === $axis$$2$$ && ($header$$4$$ = this.$_getHeaderByIndex$($index$$98_returnElement$$, $columnIndex$$1_level$$9_locator$$11$$, $$$$11$$("#" + this.$rootId$ + "\\:rowHeader"), this.grid.getStartRowHeader()));
        if (null == $header$$4$$) {
          return null;
        }
        if ("oj-datagrid-sort-icon" === $rowIndex$$1_subId$$6$$) {
          return $header$$4$$.children("." + this.$_getMappedStyle$("sortcontainer")).children().get(0);
        }
        $index$$98_returnElement$$ = "oj-datagrid-sort-ascending" === $rowIndex$$1_subId$$6$$ ? $header$$4$$.find("." + this.$_getMappedStyle$("sortascending")) : "oj-datagrid-sort-descending" === $rowIndex$$1_subId$$6$$ ? $header$$4$$.find("." + this.$_getMappedStyle$("sortdescending")) : $header$$4$$;
      }
    }
    return null != $index$$98_returnElement$$ && 0 < $index$$98_returnElement$$.length ? $index$$98_returnElement$$[0] : null;
  }, getSubIdByNode:function($indexes_node$$30_subId$$7$$) {
    var $cell_context$$54$$, $header$$5$$;
    $cell_context$$54$$ = $$$$11$$($indexes_node$$30_subId$$7$$).closest("." + this.$_getMappedStyle$("cell"));
    if (0 < $cell_context$$54$$.length) {
      return $indexes_node$$30_subId$$7$$ = this.$_findCellIndex$($cell_context$$54$$), {subId:"oj-datagrid-cell", rowIndex:$indexes_node$$30_subId$$7$$.rowIndex + this.grid.getStartRow(), columnIndex:$indexes_node$$30_subId$$7$$.columnIndex + this.grid.getStartColumn()};
    }
    $header$$5$$ = $$$$11$$($indexes_node$$30_subId$$7$$).closest("." + this.$_getMappedStyle$("headercell"));
    return 0 < $header$$5$$.length ? ($cell_context$$54$$ = $header$$5$$[0][this.$_getMappedAttribute$("context")], $indexes_node$$30_subId$$7$$ = $$$$11$$($indexes_node$$30_subId$$7$$).hasClass(this.$_getMappedStyle$("sortascending")) ? "oj-datagrid-sort-ascending" : $$$$11$$($indexes_node$$30_subId$$7$$).hasClass(this.$_getMappedStyle$("sortdescending")) ? "oj-datagrid-sort-descending" : "oj-datagrid-header", {subId:$indexes_node$$30_subId$$7$$, axis:$cell_context$$54$$.axis, index:this.$_getHeaderIndex$($header$$5$$), 
    level:$cell_context$$54$$.level}) : null;
  }, getContextByNode:function($context$$55_node$$31$$) {
    var $cell$$1_header$$6_index$$99$$;
    $cell$$1_header$$6_index$$99$$ = $$$$11$$($context$$55_node$$31$$).closest("." + this.$_getMappedStyle$("cell"));
    if (0 < $cell$$1_header$$6_index$$99$$.length) {
      return $context$$55_node$$31$$ = $cell$$1_header$$6_index$$99$$[0][this.$_getMappedAttribute$("context")], $cell$$1_header$$6_index$$99$$ = this.$_findCellIndex$($cell$$1_header$$6_index$$99$$), {subId:"oj-datagrid-cell", component:$context$$55_node$$31$$.component, data:$context$$55_node$$31$$.data, datasource:$context$$55_node$$31$$.datasource, indexes:{row:$cell$$1_header$$6_index$$99$$.rowIndex + this.grid.getStartRow(), column:$cell$$1_header$$6_index$$99$$.columnIndex + this.grid.getStartColumn()}, 
      keys:{row:$context$$55_node$$31$$.keys.row, column:$context$$55_node$$31$$.keys.column}};
    }
    $cell$$1_header$$6_index$$99$$ = $$$$11$$($context$$55_node$$31$$).closest("." + this.$_getMappedStyle$("headercell"));
    return 0 < $cell$$1_header$$6_index$$99$$.length ? ($context$$55_node$$31$$ = $cell$$1_header$$6_index$$99$$[0][this.$_getMappedAttribute$("context")], {subId:"oj-datagrid-header", axis:$context$$55_node$$31$$.axis, component:$context$$55_node$$31$$.component, data:$context$$55_node$$31$$.data, datasource:$context$$55_node$$31$$.datasource, depth:$context$$55_node$$31$$.depth, extent:$context$$55_node$$31$$.extent, index:this.$_getHeaderIndex$($cell$$1_header$$6_index$$99$$), key:$context$$55_node$$31$$.key, 
    level:$context$$55_node$$31$$.level}) : null;
  }, $_getMappedStyle$:function($key$$56$$) {
    return this.$resources$.$getMappedStyle$($key$$56$$);
  }, $_getMappedAttribute$:function($key$$57$$) {
    return this.$resources$.$getMappedAttribute$($key$$57$$);
  }, $_getMappedCommand$:function($key$$58$$) {
    return this.$resources$.$getMappedCommand$($key$$58$$);
  }, $_isDataGridSizingAvailable$:function() {
    return null != this.root.offsetParent ? !0 : !1;
  }, $_possiblyRenderOrRefresh$:function() {
    var $visibility$$ = this.grid.getVisibility();
    this.$_isDataGridSizingAvailable$() ? ($visibility$$ === $DvtDataGrid$$1$$.VISIBILITY_STATE_RENDER ? this.grid.render(this.root) : $visibility$$ === $DvtDataGrid$$1$$.VISIBILITY_STATE_REFRESH && this.grid.refresh(this.root), this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_VISIBLE)) : $visibility$$ === $DvtDataGrid$$1$$.VISIBILITY_STATE_VISIBLE && this.grid.setVisibility($DvtDataGrid$$1$$.VISIBILITY_STATE_HIDDEN);
  }, $_getHeaderByIndex$:function($index$$100_relativeIndex$$, $level$$10$$, $grouping_headerContainer$$, $start$$27$$) {
    if (0 > $level$$10$$) {
      return null;
    }
    if ($grouping_headerContainer$$.children().first().children().last().hasClass(this.$_getMappedStyle$("headercell"))) {
      return $grouping_headerContainer$$.children().first().children("." + this.$_getMappedStyle$("headercell")).eq($index$$100_relativeIndex$$ - $start$$27$$);
    }
    $grouping_headerContainer$$ = this.$_getGroupingContainer$($index$$100_relativeIndex$$, $level$$10$$, 0, $grouping_headerContainer$$.children().first().children());
    if (null == $grouping_headerContainer$$) {
      return null;
    }
    if ($level$$10$$ <= parseInt($grouping_headerContainer$$.attr(this.$_getMappedAttribute$("level")), 10) + parseInt($grouping_headerContainer$$.children().eq(0).attr(this.$_getMappedAttribute$("depth")), 10) - 1) {
      return $grouping_headerContainer$$.children().eq(0);
    }
    $start$$27$$ = parseInt($grouping_headerContainer$$.attr(this.$_getMappedAttribute$("start")), 10);
    $index$$100_relativeIndex$$ = $index$$100_relativeIndex$$ - $start$$27$$ + 1;
    return $grouping_headerContainer$$.children().eq($index$$100_relativeIndex$$);
  }, $_getGroupingContainer$:function($index$$101$$, $level$$11$$, $currentLevel$$1$$, $headers$$2$$) {
    var $headerIndex_headerRoot$$, $headerExtent$$, $i$$140$$, $headerDepth$$;
    if (null == $headers$$2$$.eq(1) || $headers$$2$$.eq(1).hasClass(this.$_getMappedStyle$("headercell"))) {
      return $level$$11$$ === $currentLevel$$1$$ ? $headers$$2$$.eq(0).parent() : null;
    }
    $headerIndex_headerRoot$$ = $headers$$2$$.parent().parent();
    for ($i$$140$$ = $headerIndex_headerRoot$$.hasClass(this.$_getMappedStyle$("colheader")) || $headerIndex_headerRoot$$.hasClass(this.$_getMappedStyle$("rowheader")) ? 0 : 1;$i$$140$$ < $headers$$2$$.length;$i$$140$$++) {
      if ($headerIndex_headerRoot$$ = parseInt($headers$$2$$.eq($i$$140$$).attr(this.$_getMappedAttribute$("start")), 10), $headerExtent$$ = parseInt($headers$$2$$.eq($i$$140$$).attr(this.$_getMappedAttribute$("extent")), 10), $headerDepth$$ = parseInt($headers$$2$$.eq($i$$140$$).children().eq(0).attr(this.$_getMappedAttribute$("depth")), 10), $index$$101$$ >= $headerIndex_headerRoot$$ && $index$$101$$ < $headerIndex_headerRoot$$ + $headerExtent$$) {
        return $level$$11$$ < $currentLevel$$1$$ + $headerDepth$$ ? $headers$$2$$.eq($i$$140$$) : this.$_getGroupingContainer$($index$$101$$, $level$$11$$, $currentLevel$$1$$ + $headerDepth$$, $headers$$2$$.eq($i$$140$$).children());
      }
    }
    return null;
  }, $_getHeaderIndex$:function($header$$7$$) {
    var $index$$102$$;
    if ($header$$7$$.parent().hasClass(this.$_getMappedStyle$("groupingcontainer"))) {
      $index$$102$$ = parseInt($header$$7$$.parent().attr(this.$_getMappedAttribute$("start")), 10);
      if ($header$$7$$.get(0) === $header$$7$$.parent().children(":first").get(0)) {
        return $index$$102$$;
      }
      $index$$102$$--;
    } else {
      $index$$102$$ = $header$$7$$.hasClass(this.$_getMappedStyle$("rowheadercell")) ? this.grid.getStartRowHeader() : this.grid.getStartColumnHeader();
    }
    return $index$$102$$ += $header$$7$$.index();
  }, $_getHeaderLevel$:function($header$$8$$) {
    var $level$$12$$;
    return $header$$8$$.parent().hasClass(this.$_getMappedStyle$("groupingcontainer")) ? ($level$$12$$ = parseInt($header$$8$$.parent().attr(this.$_getMappedAttribute$("level")), 10), $header$$8$$.get(0) === $header$$8$$.parent().children(":first").get(0) ? $level$$12$$ : $level$$12$$ + 1) : 0;
  }, $_isMultipleSelection$:function() {
    return null == this.options.selectionMode || "multiple" !== this.options.selectionMode.row && "multiple" !== this.options.selectionMode.cell ? !1 : !0;
  }, $_remove$:function($element$$74$$) {
    $$$$11$$($element$$74$$).remove();
  }, scrollTo:function($options$$222$$) {
    this.grid.scroll($options$$222$$);
  }, whenReady:function() {
    return this.$_readyPromise$;
  }, $_createReadyPromise$:function() {
    var $self$$71$$ = this;
    this.$_readyPromise$ = new Promise(function($resolve$$26$$) {
      $self$$71$$.$_readyResolve$ = $resolve$$26$$;
    });
  }, $_resolveReadyPromise$:function() {
    this.$_readyResolve$(null);
  }});
});
