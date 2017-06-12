/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$74$$, $$$$67$$, $comp$$17$$, $base$$12$$, $dvt$$10$$) {
  $oj$$74$$.$MapProviderUtils$ = {};
  $oj$$74$$.$MapProviderUtils$.$_MANAGER$ = "DvtBaseMapManager";
  $oj$$74$$.$MapProviderUtils$.$_UNPROCESSED$ = "_UNPROCESSED_MAPS";
  $oj$$74$$.$MapProviderUtils$.$_TYPE$ = "type";
  $oj$$74$$.$MapProviderUtils$.$_GEOMETRY$ = "geometry";
  $oj$$74$$.$MapProviderUtils$.$_COORDINATES$ = "coordinates";
  $oj$$74$$.$MapProviderUtils$.$_FEATURES$ = "features";
  $oj$$74$$.$MapProviderUtils$.$_PROPERTIES$ = "properties";
  $oj$$74$$.$MapProviderUtils$.$_TYPE_FEATURE_COLLECTION$ = "FeatureCollection";
  $oj$$74$$.$MapProviderUtils$.$_TYPE_GEOMETRY_COLLECTION$ = "GeometryCollection";
  $oj$$74$$.$MapProviderUtils$.$_TYPE_FEATURE$ = "Feature";
  $oj$$74$$.$MapProviderUtils$.$_TYPE_POLYGON$ = "Polygon";
  $oj$$74$$.$MapProviderUtils$.$_TYPE_MULTI_POLYGON$ = "MultiPolygon";
  $oj$$74$$.$MapProviderUtils$.$_ID$ = "id";
  $oj$$74$$.$MapProviderUtils$.$_SHORT_LABEL$ = "shortLabel";
  $oj$$74$$.$MapProviderUtils$.$_LONG_LABEL$ = "longLabel";
  $oj$$74$$.$MapProviderUtils$.$geoJsonToBasemap$ = function $$oj$$74$$$$MapProviderUtils$$$geoJsonToBasemap$$($basemap$$, $layer$$22$$, $mapProvider_type$$108$$) {
    var $labels$$ = {}, $areas$$ = {}, $geoJson$$ = $mapProvider_type$$108$$.geo, $keys$$45$$ = $mapProvider_type$$108$$.propertiesKeys || {};
    $mapProvider_type$$108$$ = $geoJson$$[$oj$$74$$.$MapProviderUtils$.$_TYPE$];
    if ($mapProvider_type$$108$$ === $oj$$74$$.$MapProviderUtils$.$_TYPE_FEATURE_COLLECTION$) {
      $geoJson$$[$oj$$74$$.$MapProviderUtils$.$_FEATURES$].forEach(function($feature$$18$$) {
        $oj$$74$$.$MapProviderUtils$.$parseFeature$($feature$$18$$, $keys$$45$$, $areas$$, $labels$$);
      });
    } else {
      if ($mapProvider_type$$108$$ === $oj$$74$$.$MapProviderUtils$.$_TYPE_FEATURE$) {
        $oj$$74$$.$MapProviderUtils$.$parseFeature$($geoJson$$, $keys$$45$$, $areas$$, $labels$$);
      } else {
        $oj$$74$$.$Logger$.error("GeoJSON type of " + $mapProvider_type$$108$$ + " is not supported. Only Feature and FeatureCollection types are supported.");
        return;
      }
    }
    0 === Object.keys($areas$$).length ? $oj$$74$$.$Logger$.error("No valid Features found in GeoJSON.") : (window[$oj$$74$$.$MapProviderUtils$.$_MANAGER$] || (window[$oj$$74$$.$MapProviderUtils$.$_MANAGER$] = {}, window[$oj$$74$$.$MapProviderUtils$.$_MANAGER$][$oj$$74$$.$MapProviderUtils$.$_UNPROCESSED$] = [[], [], []]), window[$oj$$74$$.$MapProviderUtils$.$_MANAGER$][$oj$$74$$.$MapProviderUtils$.$_UNPROCESSED$][0].push([$basemap$$, $layer$$22$$, $labels$$, $areas$$, null, null, 0]));
  };
  $oj$$74$$.$MapProviderUtils$.$parseFeature$ = function $$oj$$74$$$$MapProviderUtils$$$parseFeature$$($feature$$19_geom$$, $keys$$46_longLabel$$, $areas$$1$$, $labels$$1$$) {
    var $props$$33$$ = $feature$$19_geom$$[$oj$$74$$.$MapProviderUtils$.$_PROPERTIES$];
    $feature$$19_geom$$ = $feature$$19_geom$$[$oj$$74$$.$MapProviderUtils$.$_GEOMETRY$];
    if ($oj$$74$$.$MapProviderUtils$.$isSupportedGeometry$($feature$$19_geom$$)) {
      var $id$$61$$ = $props$$33$$[$keys$$46_longLabel$$[$oj$$74$$.$MapProviderUtils$.$_ID$]];
      if ($id$$61$$) {
        var $shortLabel$$ = $props$$33$$[$keys$$46_longLabel$$[$oj$$74$$.$MapProviderUtils$.$_SHORT_LABEL$]];
        $keys$$46_longLabel$$ = $props$$33$$[$keys$$46_longLabel$$[$oj$$74$$.$MapProviderUtils$.$_LONG_LABEL$]];
        if ($shortLabel$$ || $keys$$46_longLabel$$) {
          $labels$$1$$[$id$$61$$] = [$shortLabel$$, $keys$$46_longLabel$$];
        }
        $areas$$1$$[$id$$61$$] = $oj$$74$$.$MapProviderUtils$.$geomToPath$($feature$$19_geom$$);
      } else {
        $oj$$74$$.$Logger$.warn("No 'id' value found in the mapProvider.propertiesKey object. A Feature's 'properties' object must have an id in the field specified by the mapProvider.propertiesKey.id value.");
      }
    } else {
      $oj$$74$$.$Logger$.warn("A geometry of type " + $feature$$19_geom$$[$oj$$74$$.$MapProviderUtils$.$_TYPE$] + " is not supported and will be skipped.");
    }
  };
  $oj$$74$$.$MapProviderUtils$.$isSupportedGeometry$ = function $$oj$$74$$$$MapProviderUtils$$$isSupportedGeometry$$($geom$$1_type$$109$$) {
    $geom$$1_type$$109$$ = $geom$$1_type$$109$$[$oj$$74$$.$MapProviderUtils$.$_TYPE$];
    return $geom$$1_type$$109$$ === $oj$$74$$.$MapProviderUtils$.$_TYPE_POLYGON$ || $geom$$1_type$$109$$ === $oj$$74$$.$MapProviderUtils$.$_TYPE_MULTI_POLYGON$ ? !0 : !1;
  };
  $oj$$74$$.$MapProviderUtils$.$geomToPath$ = function $$oj$$74$$$$MapProviderUtils$$$geomToPath$$($coords_geom$$2$$) {
    var $path$$17$$ = "", $type$$110$$ = $coords_geom$$2$$[$oj$$74$$.$MapProviderUtils$.$_TYPE$];
    $coords_geom$$2$$ = $coords_geom$$2$$[$oj$$74$$.$MapProviderUtils$.$_COORDINATES$];
    $type$$110$$ === $oj$$74$$.$MapProviderUtils$.$_TYPE_POLYGON$ ? $path$$17$$ = $oj$$74$$.$MapProviderUtils$.$polygonToPath$($coords_geom$$2$$) : $type$$110$$ === $oj$$74$$.$MapProviderUtils$.$_TYPE_MULTI_POLYGON$ && $coords_geom$$2$$.forEach(function($polygonCoords$$) {
      $path$$17$$ += $oj$$74$$.$MapProviderUtils$.$polygonToPath$($polygonCoords$$);
    });
    return $path$$17$$;
  };
  $oj$$74$$.$MapProviderUtils$.$polygonToPath$ = function $$oj$$74$$$$MapProviderUtils$$$polygonToPath$$($coords$$1$$) {
    var $path$$18$$ = "";
    $coords$$1$$.forEach(function($linearArrayCoords$$) {
      $path$$18$$ += $oj$$74$$.$MapProviderUtils$.$linearRingToPath$($linearArrayCoords$$);
    });
    return $path$$18$$;
  };
  $oj$$74$$.$MapProviderUtils$.$linearRingToPath$ = function $$oj$$74$$$$MapProviderUtils$$$linearRingToPath$$($coords$$2$$) {
    var $path$$19$$, $prevX$$, $prevY$$, $prevCmd$$ = "M";
    $coords$$2$$.forEach(function($coord_y$$40$$) {
      var $x$$56$$ = $coord_y$$40$$[0];
      $coord_y$$40$$ = -$coord_y$$40$$[1];
      if ("M" === $prevCmd$$) {
        $prevX$$ = $x$$56$$, $prevY$$ = $coord_y$$40$$, $prevCmd$$ = "x", $path$$19$$ = "M" + $x$$56$$ + " " + $coord_y$$40$$;
      } else {
        var $relX$$1$$ = $x$$56$$ - $prevX$$, $relY$$ = $coord_y$$40$$ - $prevY$$;
        if ("l" == $prevCmd$$) {
          if ($prevX$$ == $x$$56$$) {
            $prevCmd$$ = "v";
            $prevY$$ = $coord_y$$40$$;
            $path$$19$$ = $path$$19$$ + $prevCmd$$ + $relY$$;
            return;
          }
          if ($prevY$$ == $coord_y$$40$$) {
            $prevCmd$$ = "h";
            $prevX$$ = $x$$56$$;
            $path$$19$$ = $path$$19$$ + $prevCmd$$ + $relX$$1$$;
            return;
          }
          $path$$19$$ = $path$$19$$ + " " + $relX$$1$$ + " " + $relY$$;
        } else {
          $prevCmd$$ = "l", $path$$19$$ = $path$$19$$ + "l" + $relX$$1$$ + " " + $relY$$;
        }
        $prevX$$ = $x$$56$$;
        $prevY$$ = $coord_y$$40$$;
      }
    });
    return $path$$19$$ + "Z";
  };
  $oj$$74$$.$__registerWidget$("oj.ojThematicMap", $$$$67$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{load:null, optionChange:null}, $_currentLocale$:"", $_loadedBasemaps$:[], $_basemapPath$:"resources/internal-deps/dvt/thematicMap/basemaps/", $_supportedLocales$:{ar:"ar", cs:"cs", da:"da", de:"de", el:"el", es:"es", fi:"fi", fr:"fr", "fr-ca":"fr_CA", he:"iw", hu:"hu", it:"it", ja:"ja", ko:"ko", nl:"nl", no:"no", pl:"pl", pt:"pt_BR", "pt-pt":"pt", ro:"ro", ru:"ru", sk:"sk", sv:"sv", 
  th:"th", tr:"tr", "zh-hans":"zh_CN", "zh-hant":"zh_TW"}, _ComponentCreate:function() {
    this._super();
    this.$_checkBasemaps$ = [];
    this.$_initiallyRendered$ = !1;
    this.$_dataLayersToUpdate$ = [];
  }, $_CreateDvtComponent$:function($context$$164$$, $callback$$130$$, $callbackObj$$13$$) {
    return $dvt$$10$$.ThematicMap.newInstance($context$$164$$, $callback$$130$$, $callbackObj$$13$$);
  }, $_ConvertLocatorToSubId$:function($locator$$60$$) {
    var $subId$$64$$ = $locator$$60$$.subId;
    "oj-thematicmap-area" == $subId$$64$$ ? $subId$$64$$ = $locator$$60$$.dataLayer + ":area[" + $locator$$60$$.index + "]" : "oj-thematicmap-marker" == $subId$$64$$ ? $subId$$64$$ = $locator$$60$$.dataLayer + ":marker[" + $locator$$60$$.index + "]" : "oj-thematicmap-tooltip" == $subId$$64$$ && ($subId$$64$$ = "tooltip");
    return $subId$$64$$;
  }, $_ConvertSubIdToLocator$:function($subId$$65$$) {
    var $locator$$61$$ = {};
    0 < $subId$$65$$.indexOf(":area") ? ($locator$$61$$.subId = "oj-thematicmap-area", $locator$$61$$.dataLayer = $subId$$65$$.substring(0, $subId$$65$$.indexOf(":")), $locator$$61$$.index = this.$_GetFirstIndex$($subId$$65$$)) : 0 < $subId$$65$$.indexOf(":marker") ? ($locator$$61$$.subId = "oj-thematicmap-marker", $locator$$61$$.dataLayer = $subId$$65$$.substring(0, $subId$$65$$.indexOf(":")), $locator$$61$$.index = this.$_GetFirstIndex$($subId$$65$$)) : "tooltip" == $subId$$65$$ && ($locator$$61$$.subId = 
    "oj-thematicmap-tooltip");
    return $locator$$61$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$22$$ = this._super();
    $styleClasses$$22$$.push("oj-thematicmap");
    return $styleClasses$$22$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$23$$ = this._super();
    $styleClasses$$23$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$23$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$23$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$23$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$23$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$23$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}];
    return $styleClasses$$23$$;
  }, $_GetEventTypes$:function() {
    return["load", "optionChange"];
  }, _setOptions:function($options$$406$$, $flags$$53$$) {
    var $i$$448_numUpdates$$ = Object.keys($options$$406$$).length, $newAreaLayers$$ = $options$$406$$.areaLayers, $oldAreaLayers$$ = this.options.areaLayers, $newAreaLayer_pointDataLayers$$ = $options$$406$$.pointDataLayers;
    if (1 == $i$$448_numUpdates$$ && $newAreaLayers$$ && $oldAreaLayers$$ && 0 < $oldAreaLayers$$.length) {
      for ($i$$448_numUpdates$$ = 0;$i$$448_numUpdates$$ < $newAreaLayers$$.length;$i$$448_numUpdates$$++) {
        var $newAreaLayer_pointDataLayers$$ = $newAreaLayers$$[$i$$448_numUpdates$$], $currAreaLayer$$ = $oldAreaLayers$$[$i$$448_numUpdates$$], $updateDataLayer$$ = !0, $areaLayerKey$$;
        for ($areaLayerKey$$ in $newAreaLayer_pointDataLayers$$) {
          "areaDataLayer" != $areaLayerKey$$ && $newAreaLayer_pointDataLayers$$[$areaLayerKey$$] != $currAreaLayer$$[$areaLayerKey$$] && ($updateDataLayer$$ = $updateDataLayer$$ && !1);
        }
        $updateDataLayer$$ && !$oj$$74$$.$Object$.$compareValues$($currAreaLayer$$.areaDataLayer, $newAreaLayer_pointDataLayers$$.areaDataLayer) && this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$.areaDataLayer, parentLayer:$newAreaLayer_pointDataLayers$$.layer, isADL:!0});
      }
    } else {
      if (1 == $i$$448_numUpdates$$ && $newAreaLayer_pointDataLayers$$ && this.options.pointDataLayers && 0 < this.options.pointDataLayers.length) {
        for ($i$$448_numUpdates$$ = 0;$i$$448_numUpdates$$ < $newAreaLayer_pointDataLayers$$.length;$i$$448_numUpdates$$++) {
          $oj$$74$$.$Object$.$compareValues$(this.options.pointDataLayers[$i$$448_numUpdates$$], $newAreaLayer_pointDataLayers$$[$i$$448_numUpdates$$]) || this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$[$i$$448_numUpdates$$], parentLayer:$newAreaLayer_pointDataLayers$$[$i$$448_numUpdates$$].id, isADL:!1});
        }
      }
    }
    this._super($options$$406$$, $flags$$53$$);
  }, $_Render$:function() {
    this.$_NotReady$();
    var $areaLayers_pointDataLayers$$1$$ = this.options.areaLayers;
    if (this.options.basemap && $areaLayers_pointDataLayers$$1$$ && !(1 > $areaLayers_pointDataLayers$$1$$.length)) {
      this.$_loadBasemap$();
      for (var $i$$449_tooltipObj$$ = 0;$i$$449_tooltipObj$$ < this.$_checkBasemaps$.length;$i$$449_tooltipObj$$++) {
        if (!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$449_tooltipObj$$]]) {
          return;
        }
      }
      this.$_checkBasemaps$ = [];
      this.$_updateDataLayerSelection$();
      var $tooltipFun$$ = ($i$$449_tooltipObj$$ = this.options.tooltip) ? $i$$449_tooltipObj$$.renderer : null;
      $tooltipFun$$ && (this.options._tooltip = function $this$options$_tooltip$($context$$165$$) {
        var $defaultTooltip$$ = $context$$165$$.tooltip;
        try {
          return $tooltipFun$$($context$$165$$) || $defaultTooltip$$;
        } catch ($error$$53$$) {
          return $oj$$74$$.$Logger$.warn("Showing default tooltip. " + $error$$53$$), $defaultTooltip$$;
        }
      });
      if ($areaLayers_pointDataLayers$$1$$) {
        for ($i$$449_tooltipObj$$ = 0;$i$$449_tooltipObj$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$449_tooltipObj$$++) {
          var $areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$449_tooltipObj$$].areaDataLayer;
          if ($areaDataLayer$$1_pointDataLayer$$) {
            var $dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer;
            $dl_renderer$$2$$ && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$2$$, $areaDataLayer$$1_pointDataLayer$$.markers));
          }
        }
      }
      if ($areaLayers_pointDataLayers$$1$$ = this.options.pointDataLayers) {
        for ($i$$449_tooltipObj$$ = 0;$i$$449_tooltipObj$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$449_tooltipObj$$++) {
          ($areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$449_tooltipObj$$]) && ($dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer) && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$2$$, $areaDataLayer$$1_pointDataLayer$$.markers));
        }
      }
      this.options._contextHandler = this.$_getContextHandler$();
      if (this.$_initiallyRendered$ && 0 < this.$_dataLayersToUpdate$.length) {
        if (this.$_context$.isReadyToRender()) {
          for ($i$$449_tooltipObj$$ = 0;$i$$449_tooltipObj$$ < this.$_dataLayersToUpdate$.length;$i$$449_tooltipObj$$++) {
            $dl_renderer$$2$$ = this.$_dataLayersToUpdate$[$i$$449_tooltipObj$$], this.$_component$.updateLayer($dl_renderer$$2$$.options, $dl_renderer$$2$$.parentLayer, $dl_renderer$$2$$.isADL);
          }
          this.$_dataLayersToUpdate$ = [];
        }
      } else {
        this._super(), this.$_initiallyRendered$ = !0;
      }
      this._trigger("load", null, null);
    }
  }, $_getTemplateRenderer$:function($templateFunction$$1$$) {
    var $thisRef$$2$$ = this;
    return function($context$$166_elem$$165$$) {
      var $dummyDiv$$4$$ = document.createElement("div");
      $dummyDiv$$4$$.style.display = "none";
      $dummyDiv$$4$$.$_dvtcontext$ = $thisRef$$2$$.$_context$;
      $thisRef$$2$$.element.append($dummyDiv$$4$$);
      $templateFunction$$1$$({parentElement:$dummyDiv$$4$$, data:$context$$166_elem$$165$$.data});
      return($context$$166_elem$$165$$ = $dummyDiv$$4$$.children[0]) ? "http://www.w3.org/2000/svg" === $context$$166_elem$$165$$.namespaceURI ? ($dummyDiv$$4$$.removeChild($context$$166_elem$$165$$), $$$$67$$($dummyDiv$$4$$).remove(), $context$$166_elem$$165$$) : $thisRef$$2$$.$_GetDvtComponent$($context$$166_elem$$165$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$3$$ = this;
    return function($parentElement$$10$$, $rootElement$$21$$, $data$$172$$, $state$$13$$, $previousState$$1$$) {
      return{component:$oj$$74$$.Components.$getWidgetConstructor$($thisRef$$3$$.element), parentElement:$parentElement$$10$$, rootElement:$rootElement$$21$$, data:$data$$172$$, state:$state$$13$$, previousState:$previousState$$1$$, id:$data$$172$$.id, label:$data$$172$$.label, color:$data$$172$$.color, location:$data$$172$$.location, x:$data$$172$$.x, y:$data$$172$$.y};
    };
  }, renderDefaultHover:function($context$$168$$) {
    $context$$168$$.previousState && $context$$168$$.state.hovered == $context$$168$$.previousState.hovered || this.$_component$.processDefaultHoverEffect($context$$168$$.id, $context$$168$$.state.hovered);
  }, renderDefaultSelection:function($context$$169$$) {
    $context$$169$$.previousState && $context$$169$$.state.selected == $context$$169$$.previousState.selected || this.$_component$.processDefaultSelectionEffect($context$$169$$.id, $context$$169$$.state.selected);
  }, renderDefaultFocus:function($context$$170$$) {
    $context$$170$$.previousState && $context$$170$$.state.focused == $context$$170$$.previousState.focused || this.$_component$.processDefaultFocusEffect($context$$170$$.id, $context$$170$$.state.focused);
  }, $_loadBasemap$:function() {
    var $basemap$$1$$ = this.options.basemap;
    if ($basemap$$1$$) {
      var $locale$$22$$ = $oj$$74$$.$Config$.$getLocale$();
      $locale$$22$$ !== this.$_currentLocale$ && (this.$_currentLocale$ = $locale$$22$$, this.$_loadedBasemaps$ = []);
      var $areaLayers$$1_pointDataLayers$$2$$ = this.options.areaLayers;
      if ($areaLayers$$1_pointDataLayers$$2$$) {
        for (var $i$$450$$ = 0;$i$$450$$ < $areaLayers$$1_pointDataLayers$$2$$.length;$i$$450$$++) {
          var $layer$$23$$ = $areaLayers$$1_pointDataLayers$$2$$[$i$$450$$].layer;
          $layer$$23$$ && this.$_loadBasemapHelper$($basemap$$1$$, $layer$$23$$, $locale$$22$$);
        }
      }
      $areaLayers$$1_pointDataLayers$$2$$ = this.options.pointDataLayers;
      !this.options.mapProvider && $areaLayers$$1_pointDataLayers$$2$$ && 0 < $areaLayers$$1_pointDataLayers$$2$$.length && this.$_loadBasemapHelper$($basemap$$1$$, "cities", $locale$$22$$);
    }
  }, $_loadResourceByUrl$:function($url$$35$$, $bRenderOnFail$$) {
    if (!this.$_loadedBasemaps$[$url$$35$$]) {
      var $thisRef$$4$$ = this, $getScript$$ = $$$$67$$.getScript($oj$$74$$.$Config$.$getResourceUrl$($url$$35$$), function() {
        $thisRef$$4$$.$_loadedBasemaps$[$url$$35$$] = !0;
        $thisRef$$4$$.$_Render$();
      });
      $bRenderOnFail$$ && $getScript$$.fail(function() {
        $thisRef$$4$$.$_loadedBasemaps$[$url$$35$$] = !0;
        $thisRef$$4$$.$_Render$();
      });
    }
  }, $_loadBasemapHelper$:function($basemap$$2_bundleName_bundleUrl$$, $i$$451_layer$$24$$, $locale$$23_localeList$$) {
    var $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$ = !0;
    try {
      $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$ = 0 < Object.keys($dvt$$10$$.DvtBaseMapManager.getLayerIds($basemap$$2_bundleName_bundleUrl$$, $i$$451_layer$$24$$)).length;
    } catch ($err$$25$$) {
      $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$ = !1;
    }
    $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$ || (($isLoaded_mapProvider$$1_relativeUrl_splitLocale$$ = this.options.mapProvider) ? $oj$$74$$.$MapProviderUtils$.$geoJsonToBasemap$($basemap$$2_bundleName_bundleUrl$$, $i$$451_layer$$24$$, $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$) : ($isLoaded_mapProvider$$1_relativeUrl_splitLocale$$ = this.$_basemapPath$ + "ojthematicmap-" + $basemap$$2_bundleName_bundleUrl$$ + "-" + $i$$451_layer$$24$$ + ".js", -1 == this.$_checkBasemaps$.indexOf($isLoaded_mapProvider$$1_relativeUrl_splitLocale$$) && 
    (this.$_checkBasemaps$.push($isLoaded_mapProvider$$1_relativeUrl_splitLocale$$), this.$_loadResourceByUrl$($isLoaded_mapProvider$$1_relativeUrl_splitLocale$$, !1))));
    if (-1 === $locale$$23_localeList$$.indexOf("en")) {
      for ($isLoaded_mapProvider$$1_relativeUrl_splitLocale$$ = $locale$$23_localeList$$.toLowerCase().split("-"), $locale$$23_localeList$$ = [$isLoaded_mapProvider$$1_relativeUrl_splitLocale$$[0]], 1 < $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($isLoaded_mapProvider$$1_relativeUrl_splitLocale$$[0] + "-" + $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$[1]), 2 < $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($isLoaded_mapProvider$$1_relativeUrl_splitLocale$$[0] + 
      "-" + $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$[2], $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$[0] + "-" + $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$[1] + "-" + $isLoaded_mapProvider$$1_relativeUrl_splitLocale$$[2]), $basemap$$2_bundleName_bundleUrl$$ = $basemap$$2_bundleName_bundleUrl$$.charAt(0).toUpperCase() + $basemap$$2_bundleName_bundleUrl$$.slice(1), $i$$451_layer$$24$$ = $i$$451_layer$$24$$.charAt(0).toUpperCase() + $i$$451_layer$$24$$.slice(1), $basemap$$2_bundleName_bundleUrl$$ = 
      this.$_basemapPath$ + "resourceBundles/" + $basemap$$2_bundleName_bundleUrl$$ + $i$$451_layer$$24$$ + "Bundle_", $i$$451_layer$$24$$ = 0;$i$$451_layer$$24$$ < $locale$$23_localeList$$.length;$i$$451_layer$$24$$++) {
        if (this.$_supportedLocales$[$locale$$23_localeList$$[$i$$451_layer$$24$$]]) {
          $basemap$$2_bundleName_bundleUrl$$ = $basemap$$2_bundleName_bundleUrl$$ + this.$_supportedLocales$[$locale$$23_localeList$$[$i$$451_layer$$24$$]] + ".js";
          -1 == this.$_checkBasemaps$.indexOf($basemap$$2_bundleName_bundleUrl$$) && (this.$_checkBasemaps$.push($basemap$$2_bundleName_bundleUrl$$), this.$_loadResourceByUrl$($basemap$$2_bundleName_bundleUrl$$, !0));
          break;
        }
      }
    }
  }, $_HandleEvent$:function($event$$646$$) {
    if ("selection" === $event$$646$$.type) {
      var $selection$$15$$ = {}, $id$$62$$ = $event$$646$$.clientId;
      $selection$$15$$[$id$$62$$] = $event$$646$$.selection;
      if (this.options.selection) {
        for (var $dataLayerId$$ in this.options.selection) {
          $id$$62$$ !== $dataLayerId$$ && ($selection$$15$$[$dataLayerId$$] = this.options.selection[$dataLayerId$$]);
        }
      }
      this.$_UserOptionChange$("selection", $selection$$15$$);
    } else {
      this._super($event$$646$$);
    }
  }, $_GetTranslationMap$:function() {
    var $translations$$20$$ = this.options.translations, $ret$$59$$ = this._super();
    $ret$$59$$["DvtUtilBundle.THEMATIC_MAP"] = $translations$$20$$.componentName;
    return $ret$$59$$;
  }, $_updateDataLayerSelection$:function() {
    var $selection$$16$$ = this.options.selection;
    if ($selection$$16$$) {
      var $als_pdls$$ = this.options.pointDataLayers;
      if ($als_pdls$$) {
        for (var $i$$452$$ = 0;$i$$452$$ < $als_pdls$$.length;$i$$452$$++) {
          $selection$$16$$[$als_pdls$$[$i$$452$$].id] && ($als_pdls$$[$i$$452$$].selection = $selection$$16$$[$als_pdls$$[$i$$452$$].id]);
        }
      }
      if ($als_pdls$$ = this.options.areaLayers) {
        for ($i$$452$$ = 0;$i$$452$$ < $als_pdls$$.length;$i$$452$$++) {
          var $adl$$ = $als_pdls$$[$i$$452$$].areaDataLayer;
          $adl$$ && $selection$$16$$[$adl$$.id] && ($adl$$.selection = $selection$$16$$[$adl$$.id]);
        }
      }
    }
  }, getArea:function($dataLayerId$$1$$, $index$$292$$) {
    var $ret$$60$$ = this.$_component$.getAutomation().getData($dataLayerId$$1$$, "area", $index$$292$$);
    this.$_AddAutomationGetters$($ret$$60$$);
    return $ret$$60$$;
  }, getMarker:function($dataLayerId$$2$$, $index$$293$$) {
    var $ret$$61$$ = this.$_component$.getAutomation().getData($dataLayerId$$2$$, "marker", $index$$293$$);
    this.$_AddAutomationGetters$($ret$$61$$);
    return $ret$$61$$;
  }, getContextByNode:function($context$$171_node$$129$$) {
    return($context$$171_node$$129$$ = this.getSubIdByNode($context$$171_node$$129$$)) && "oj-thematicmap-tooltip" !== $context$$171_node$$129$$.subId ? $context$$171_node$$129$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{areaLayers:["areaDataLayer/areas", "areaDataLayer/markers"], pointDataLayers:["markers"]};
  }, $_GetDataContext$:function($layer$$25_options$$407$$) {
    var $basemap$$3$$ = this.options.basemap;
    $layer$$25_options$$407$$ = $layer$$25_options$$407$$.layer ? $layer$$25_options$$407$$.layer : "cities";
    return{basemap:$basemap$$3$$, layer:$layer$$25_options$$407$$, ids:$dvt$$10$$.DvtBaseMapManager.getLayerIds($basemap$$3$$, $layer$$25_options$$407$$)};
  }});
});
