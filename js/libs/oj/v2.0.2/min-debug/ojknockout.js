/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "knockout", "jqueryui-amd/widget"], function($oj$$7$$, $$$$7$$, $ko$$1$$) {
  function $GlobalChangeQueue$$() {
    this.Init();
  }
  function $_extractValueFromChangeEvent$$($event$$60$$, $eventData$$1$$) {
    var $nameVal$$ = {};
    $nameVal$$.value = $eventData$$1$$.value;
    return $nameVal$$;
  }
  function $_extractOptionChange$$($event$$61$$, $eventData$$2$$) {
    var $nameVal$$1$$ = {}, $metadata$$ = $eventData$$2$$.optionMetadata;
    $metadata$$ && "shouldWrite" === $metadata$$.writeback && ($nameVal$$1$$[$eventData$$2$$.option] = $eventData$$2$$.value);
    return $nameVal$$1$$;
  }
  function $_handleAttributes$$($name$$80$$, $value$$149$$, $bindingContext$$1$$) {
    "pieCenter" === $name$$80$$ && $value$$149$$.template && ($value$$149$$.renderer = $_getCenterRenderer$$($bindingContext$$1$$, $value$$149$$.template));
    return{pieCenter:$value$$149$$};
  }
  function $_getComboboxOptionRenderer$$($bindingContext$$2$$, $template$$1$$) {
    return function($context$$44$$) {
      var $parent$$4$$, $childContext$$;
      $parent$$4$$ = $context$$44$$.parentElement;
      $childContext$$ = $bindingContext$$2$$.createChildContext($context$$44$$.data, null, function($binding$$) {
        $binding$$.$optionContext = $context$$44$$;
      });
      $ko$$1$$.renderTemplate($template$$1$$, $childContext$$, null, $parent$$4$$);
      return null;
    };
  }
  function $_handleComboboxManagedAttributes$$($name$$81$$, $value$$150$$, $bindingContext$$3$$) {
    return "optionTemplate" === $name$$81$$ && null !== $value$$150$$ ? {optionRenderer:$_getComboboxOptionRenderer$$($bindingContext$$3$$, String($value$$150$$))} : null;
  }
  function $ComponentChangeTracker$$($component$$6$$, $queue$$) {
    this.Init($component$$6$$, $queue$$);
  }
  function $_modifyOjComponentBinding$$($info$$1_node$$25$$, $bindingName$$1$$, $bindingList_wrapped$$3$$, $bindingContext$$5$$, $accessorMap$$2$$) {
    $info$$1_node$$25$$ = $_getBindingValueInfo$$($info$$1_node$$25$$, $bindingName$$1$$, $bindingList_wrapped$$3$$, $bindingContext$$5$$);
    $bindingList_wrapped$$3$$ = $info$$1_node$$25$$.$attrList$;
    if (null == $bindingList_wrapped$$3$$) {
      return $accessorMap$$2$$;
    }
    var $bindingMap$$ = {};
    $_keyValueArrayForEach$$($bindingList_wrapped$$3$$, function($key$$43$$, $value$$151$$) {
      $bindingMap$$[$key$$43$$] = $value$$151$$;
    });
    $accessorMap$$2$$ = $oj$$7$$.$CollectionUtils$.$copyInto$({}, $accessorMap$$2$$);
    $accessorMap$$2$$[$bindingName$$1$$] = $_getOjComponent2BindingAccessor$$($bindingContext$$5$$, $bindingMap$$, $info$$1_node$$25$$.$bindingExpr$);
    return $accessorMap$$2$$;
  }
  function $_getOjComponent2BindingAccessor$$($bindingContext$$6$$, $attributeMap$$, $bindingExpr$$) {
    function $accessorFunc$$() {
      var $accessor$$ = {};
      Object.keys($attributeMap$$).forEach(function($option$$22$$) {
        var $getter$$1$$ = $oj$$7$$.$ComponentBinding$.$__CreateEvaluator$($attributeMap$$[$option$$22$$]).bind(null, $bindingContext$$6$$);
        Object.defineProperty($accessor$$, $option$$22$$, {get:$getter$$1$$, enumerable:!0});
      });
      Object.defineProperty($accessor$$, $oj$$7$$.$ComponentBinding$.$_OPTION_MAP$, {value:$attributeMap$$});
      return $accessor$$;
    }
    $accessorFunc$$.toString = function $$accessorFunc$$$toString$() {
      return $bindingExpr$$;
    };
    return $accessorFunc$$;
  }
  function $_getBindingString$$($match$$14_node$$26$$, $wrapped$$4$$, $bindingContext$$7$$) {
    var $func$$6$$ = $wrapped$$4$$.getBindingsString;
    if ($func$$6$$) {
      return $func$$6$$.call($wrapped$$4$$, $match$$14_node$$26$$, $bindingContext$$7$$);
    }
    switch($match$$14_node$$26$$.nodeType) {
      case 1:
        return $match$$14_node$$26$$.getAttribute("data-bind");
      case 8:
        return($match$$14_node$$26$$ = $match$$14_node$$26$$.nodeValue.match(/^\s*ko(?:\s+([\s\S]+))?\s*$/)) ? $match$$14_node$$26$$[1] : null;
    }
    return null;
  }
  function $_getBindingValueInfo$$($bindingString_keyValueArray_node$$27$$, $bindingName$$2$$, $wrapped$$5$$, $bindingContext$$8$$) {
    var $list$$ = null;
    $bindingString_keyValueArray_node$$27$$ = $_getBindingString$$($bindingString_keyValueArray_node$$27$$, $wrapped$$5$$, $bindingContext$$8$$);
    $bindingString_keyValueArray_node$$27$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($bindingString_keyValueArray_node$$27$$);
    var $selfVal$$ = null;
    $_keyValueArrayForEach$$($bindingString_keyValueArray_node$$27$$, function($key$$44$$, $value$$152$$) {
      return $key$$44$$ === $bindingName$$2$$ ? ($selfVal$$ = $value$$152$$, !0) : !1;
    });
    null != $selfVal$$ && 0 === $selfVal$$.indexOf("{") && ($list$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($selfVal$$));
    return{$attrList$:$list$$, $bindingExpr$:$selfVal$$};
  }
  function $_keyValueArrayForEach$$($array$$14$$, $callback$$83$$) {
    for (var $i$$125$$ = 0;$i$$125$$ < $array$$14$$.length;$i$$125$$++) {
      var $entry_value$$153$$ = $array$$14$$[$i$$125$$], $key$$45$$ = $entry_value$$153$$.key, $entry_value$$153$$ = $entry_value$$153$$.value;
      if (null != $key$$45$$ && null != $entry_value$$153$$ && $callback$$83$$($key$$45$$.trim(), $entry_value$$153$$.trim())) {
        break;
      }
    }
  }
  function $_getDataGridHeaderRenderer$$($bindingContext$$9$$, $template$$3$$) {
    return function($context$$45$$) {
      var $parent$$5$$, $childContext$$1$$;
      $parent$$5$$ = $context$$45$$.parentElement;
      $childContext$$1$$ = $bindingContext$$9$$.createChildContext($context$$45$$.data, null, function($binding$$1$$) {
        $binding$$1$$.$key = $context$$45$$.key;
        $binding$$1$$.$metadata = $context$$45$$.metadata;
        $binding$$1$$.$headerContext = $context$$45$$;
      });
      $ko$$1$$.renderTemplate($template$$3$$, $childContext$$1$$, {afterRender:function($renderedElement$$1$$) {
        $$$$7$$($renderedElement$$1$$)._ojDetectCleanData();
      }}, $parent$$5$$);
      return null;
    };
  }
  function $_getDataGridCellRenderer$$($bindingContext$$10$$, $template$$4$$) {
    return function($context$$46$$) {
      var $parent$$6$$, $childContext$$2$$;
      $parent$$6$$ = $context$$46$$.parentElement;
      $childContext$$2$$ = $bindingContext$$10$$.createChildContext($context$$46$$.data, null, function($binding$$2$$) {
        $binding$$2$$.$keys = $context$$46$$.keys;
        $binding$$2$$.$metadata = $context$$46$$.metadata;
        $binding$$2$$.$cellContext = $context$$46$$;
      });
      $ko$$1$$.renderTemplate($template$$4$$, $childContext$$2$$, {afterRender:function($renderedElement$$2$$) {
        $$$$7$$($renderedElement$$2$$)._ojDetectCleanData();
      }}, $parent$$6$$);
      return null;
    };
  }
  function $_getDiagramNodeRenderer$$($bindingContext$$11$$, $template$$5$$) {
    return function($context$$47$$) {
      var $model$$57$$ = $bindingContext$$11$$.createChildContext($context$$47$$.data);
      $ko$$1$$.renderTemplate($template$$5$$, $model$$57$$, {afterRender:function($renderedElement$$3$$) {
        $$$$7$$($renderedElement$$3$$)._ojDetectCleanData();
      }}, $context$$47$$.parentElement);
      return null;
    };
  }
  function $_getListViewItemRenderer$$($bindingContext$$13$$, $template$$6$$) {
    return function($context$$48$$) {
      var $parent$$7$$, $childContext$$3$$;
      $parent$$7$$ = $context$$48$$.parentElement;
      $childContext$$3$$ = $bindingContext$$13$$.createChildContext($context$$48$$.data, null, function($binding$$3$$) {
        $binding$$3$$.$itemContext = $context$$48$$;
      });
      $ko$$1$$.renderTemplate($template$$6$$, $childContext$$3$$, {afterRender:function($renderedElement$$4$$) {
        $$$$7$$($renderedElement$$4$$)._ojDetectCleanData();
      }}, $parent$$7$$, "replaceNode");
      return null;
    };
  }
  function $_handleListViewManagedAttributes$$($name$$85_template$$7$$, $value$$155$$, $bindingContext$$14$$) {
    return "item" == $name$$85_template$$7$$ ? ($name$$85_template$$7$$ = $value$$155$$.template, null != $name$$85_template$$7$$ && ($value$$155$$.renderer = $_getListViewItemRenderer$$($bindingContext$$14$$, $name$$85_template$$7$$)), {item:$value$$155$$}) : null;
  }
  function $_getCenterRenderer$$($bindingContext$$15$$, $template$$8$$) {
    return function($context$$49_elem$$20_model$$58$$) {
      var $dummyDiv$$1$$ = document.createElement("div");
      $dummyDiv$$1$$.style.display = "none";
      $context$$49_elem$$20_model$$58$$ = $bindingContext$$15$$.createChildContext($context$$49_elem$$20_model$$58$$);
      $ko$$1$$.renderTemplate($template$$8$$, $context$$49_elem$$20_model$$58$$, {afterRender:function($renderedElement$$5$$) {
        $$$$7$$($renderedElement$$5$$)._ojDetectCleanData();
      }}, $dummyDiv$$1$$);
      return($context$$49_elem$$20_model$$58$$ = $dummyDiv$$1$$.children[0]) ? ($dummyDiv$$1$$.removeChild($context$$49_elem$$20_model$$58$$), $$$$7$$($dummyDiv$$1$$).remove(), $context$$49_elem$$20_model$$58$$) : null;
    };
  }
  function $_handleManagedGaugeAttributes$$($name$$86$$, $value$$156$$, $bindingContext$$16$$) {
    "center" === $name$$86$$ && $value$$156$$.template && ($value$$156$$.renderer = $_getCenterRenderer$$($bindingContext$$16$$, $value$$156$$.template));
    return{center:$value$$156$$};
  }
  function $_getTableColumnTemplateRenderer$$($bindingContext$$17$$, $type$$77$$, $template$$9$$) {
    var $rendererOption$$ = {};
    (function($template$$10$$, $type$$78$$) {
      $rendererOption$$ = function $$rendererOption$$$($params$$14$$) {
        var $childContext$$4$$ = null, $parentElement$$ = null;
        "header" == $type$$78$$ ? ($childContext$$4$$ = $bindingContext$$17$$.createChildContext(null, null, function($binding$$4$$) {
          $binding$$4$$.$columnIndex = $params$$14$$.columnIndex;
          $binding$$4$$.$headerContext = $params$$14$$.headerContext;
          $binding$$4$$.$data = $params$$14$$.data;
        }), $parentElement$$ = $params$$14$$.headerContext.parentElement) : "cell" == $type$$78$$ && ($childContext$$4$$ = $bindingContext$$17$$.createChildContext($params$$14$$.row, null, function($binding$$5$$) {
          $binding$$5$$.$columnIndex = $params$$14$$.columnIndex;
          $binding$$5$$.$cellContext = $params$$14$$.cellContext;
        }), $parentElement$$ = $params$$14$$.cellContext.parentElement);
        "footer" == $type$$78$$ && ($childContext$$4$$ = $bindingContext$$17$$.createChildContext(null, null, function($binding$$6$$) {
          $binding$$6$$.$columnIndex = $params$$14$$.columnIndex;
          $binding$$6$$.$footerContext = $params$$14$$.footerContext;
        }), $parentElement$$ = $params$$14$$.footerContext.parentElement);
        $ko$$1$$.renderTemplate($template$$10$$, $childContext$$4$$, {afterRender:function($renderedElement$$6$$) {
          $$$$7$$($renderedElement$$6$$)._ojDetectCleanData();
        }}, $parentElement$$, "replaceNode");
      };
    })($template$$9$$, $type$$77$$);
    return $rendererOption$$;
  }
  function $_getTableRowTemplateRenderer$$($bindingContext$$18$$, $template$$11$$) {
    return function($params$$15$$) {
      var $childContext$$5$$ = $bindingContext$$18$$.createChildContext($params$$15$$.row, null, function($binding$$7$$) {
        $binding$$7$$.$rowContext = $params$$15$$.rowContext;
      });
      $ko$$1$$.renderTemplate($template$$11$$, $childContext$$5$$, {afterRender:function($renderedElement$$7$$) {
        $$$$7$$($renderedElement$$7$$)._ojDetectCleanData();
      }}, $params$$15$$.rowContext.parentElement, "replaceNode");
    };
  }
  function $_getDataLayerRenderer$$($bindingContext$$19$$, $template$$12$$) {
    return function($context$$50$$) {
      var $model$$59$$ = $bindingContext$$19$$.createChildContext($context$$50$$.data);
      $ko$$1$$.renderTemplate($template$$12$$, $model$$59$$, {afterRender:function($renderedElement$$8$$) {
        $$$$7$$($renderedElement$$8$$)._ojDetectCleanData();
      }}, $context$$50$$.parentElement);
      return null;
    };
  }
  function $_handleManagedAttributes$$($i$$126_name$$87$$, $value$$157$$, $bindingContext$$20$$) {
    if ("areaLayers" === $i$$126_name$$87$$) {
      for ($i$$126_name$$87$$ = 0;$i$$126_name$$87$$ < $value$$157$$.length;$i$$126_name$$87$$++) {
        var $areaDataLayer$$ = $value$$157$$[$i$$126_name$$87$$].areaDataLayer;
        if ($areaDataLayer$$) {
          var $template$$13$$ = $areaDataLayer$$.template;
          null != $template$$13$$ && ($areaDataLayer$$._templateRenderer = $_getDataLayerRenderer$$($bindingContext$$20$$, $template$$13$$));
        }
      }
      return{areaLayers:$value$$157$$};
    }
    if ("pointDataLayers" === $i$$126_name$$87$$) {
      for ($i$$126_name$$87$$ = 0;$i$$126_name$$87$$ < $value$$157$$.length;$i$$126_name$$87$$++) {
        $template$$13$$ = $value$$157$$[$i$$126_name$$87$$].template, null != $template$$13$$ && ($value$$157$$[$i$$126_name$$87$$]._templateRenderer = $_getDataLayerRenderer$$($bindingContext$$20$$, $template$$13$$));
      }
      return{pointDataLayers:$value$$157$$};
    }
    return null;
  }
  function $_getTooltipRenderer$$($bindingContext$$21$$, $template$$14$$) {
    return function($context$$51_elem$$21_model$$60$$) {
      var $dummyDiv$$2$$ = document.createElement("div");
      $dummyDiv$$2$$.style.display = "none";
      $context$$51_elem$$21_model$$60$$ = $bindingContext$$21$$.createChildContext($context$$51_elem$$21_model$$60$$);
      $ko$$1$$.renderTemplate($template$$14$$, $context$$51_elem$$21_model$$60$$, {afterRender:function($renderedElement$$9$$) {
        $$$$7$$($renderedElement$$9$$)._ojDetectCleanData();
      }}, $dummyDiv$$2$$);
      return($context$$51_elem$$21_model$$60$$ = $dummyDiv$$2$$.children[0]) ? ($dummyDiv$$2$$.removeChild($context$$51_elem$$21_model$$60$$), $$$$7$$($dummyDiv$$2$$).remove(), $context$$51_elem$$21_model$$60$$) : null;
    };
  }
  function $_handleManagedTooltipAttribute$$($name$$88$$, $value$$158$$, $bindingContext$$22$$) {
    "tooltip" === $name$$88$$ && $value$$158$$.template && ($value$$158$$.renderer = $_getTooltipRenderer$$($bindingContext$$22$$, $value$$158$$.template));
    return{tooltip:$value$$158$$};
  }
  $oj$$7$$.$Object$.$createSubclass$($GlobalChangeQueue$$, $oj$$7$$.$Object$, "ComponentBinding.GlobalChangeQueue");
  $GlobalChangeQueue$$.prototype.Init = function $$GlobalChangeQueue$$$$Init$() {
    $GlobalChangeQueue$$.$superclass$.Init.call(this);
    this.$_trackers$ = [];
    this.$_queue$ = [];
  };
  $GlobalChangeQueue$$.prototype.$registerComponentChanges$ = function $$GlobalChangeQueue$$$$$registerComponentChanges$$($tracker$$3$$) {
    -1 === this.$_trackers$.indexOf($tracker$$3$$) && (this.$_trackers$.push($tracker$$3$$), this.$_delayTimer$ || (this.$_delayTimer$ = setTimeout($oj$$7$$.$Object$.$createCallback$(this, this.$_deliverChangesImpl$), 1)));
  };
  $GlobalChangeQueue$$.prototype.$deliverChanges$ = function $$GlobalChangeQueue$$$$$deliverChanges$$() {
    this.$_delayTimer$ && clearTimeout(this.$_delayTimer$);
    this.$_deliverChangesImpl$();
  };
  $GlobalChangeQueue$$.prototype.$_deliverChangesImpl$ = function $$GlobalChangeQueue$$$$$_deliverChangesImpl$$() {
    var $i$$127_record$$3$$;
    this.$_delayTimer$ = null;
    var $trackers$$ = this.$_trackers$;
    this.$_trackers$ = [];
    for ($i$$127_record$$3$$ = 0;$i$$127_record$$3$$ < $trackers$$.length;$i$$127_record$$3$$++) {
      var $tracker$$4$$ = $trackers$$[$i$$127_record$$3$$];
      this.$_queue$.push({$tracker$:$tracker$$4$$, $changes$:$tracker$$4$$.$flushChanges$()});
    }
    for (;0 < this.$_queue$.length;) {
      $i$$127_record$$3$$ = this.$_queue$.shift(), $i$$127_record$$3$$.$tracker$.$applyChanges$($i$$127_record$$3$$.$changes$);
    }
  };
  $oj$$7$$.$ComponentBinding$ = function $$oj$$7$$$$ComponentBinding$$($name$$89$$, $options$$209$$) {
    this.Init($name$$89$$, $options$$209$$);
  };
  $goog$exportPath_$$("ComponentBinding", $oj$$7$$.$ComponentBinding$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$ComponentBinding$, $oj$$7$$.$Object$, "oj.ComponentBinding");
  $oj$$7$$.$ComponentBinding$.create = function $$oj$$7$$$$ComponentBinding$$create$($name$$90$$, $options$$210$$) {
    if (null == $name$$90$$) {
      throw "Binding name is required!";
    }
    var $instance$$14$$ = new $oj$$7$$.$ComponentBinding$($name$$90$$, $options$$210$$), $handlers$$5$$ = $ko$$1$$.bindingHandlers, $i$$128$$, $names$$1$$ = Array.isArray($name$$90$$) ? $name$$90$$ : [$name$$90$$];
    for ($i$$128$$ = 0;$i$$128$$ < $names$$1$$.length;$i$$128$$++) {
      var $nm$$ = $names$$1$$[$i$$128$$];
      $oj$$7$$.$ComponentBinding$.$_REGISTERED_NAMES$.push($nm$$);
      $handlers$$5$$[$nm$$] = $instance$$14$$;
    }
    return $instance$$14$$;
  };
  $goog$exportPath_$$("ComponentBinding.create", $oj$$7$$.$ComponentBinding$.create, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$ = function $$oj$$7$$$$ComponentBinding$$$getDefaultInstance$$() {
    return $oj$$7$$.$ComponentBinding$.$_INSTANCE$;
  };
  $goog$exportPath_$$("ComponentBinding.getDefaultInstance", $oj$$7$$.$ComponentBinding$.$getDefaultInstance$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$setupManagedAttributes$$($opts$$9$$) {
    var $forName$$ = $opts$$9$$["for"], $forName$$ = null == $forName$$ ? "@global" : $forName$$, $managers$$ = this.$_managedAttrOptions$[$forName$$] || [];
    $managers$$.push($opts$$9$$);
    this.$_managedAttrOptions$[$forName$$] = $managers$$;
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ComponentBinding.prototype.setupManagedAttributes", {$setupManagedAttributes$:$oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$});
  $oj$$7$$.$ComponentBinding$.$deliverChanges$ = function $$oj$$7$$$$ComponentBinding$$$deliverChanges$$() {
    $oj$$7$$.$ComponentBinding$.$_changeQueue$.$deliverChanges$();
  };
  $goog$exportPath_$$("ComponentBinding.deliverChanges", $oj$$7$$.$ComponentBinding$.$deliverChanges$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.Init = function $$oj$$7$$$$ComponentBinding$$$Init$($names$$2$$, $options$$211$$) {
    $oj$$7$$.$ComponentBinding$.$superclass$.Init.call(this);
    "string" === typeof $options$$211$$ && ($options$$211$$ = {componentName:$options$$211$$});
    this.$_bindingOptions$ = $options$$211$$ || {};
    Array.isArray($names$$2$$);
    this.init = this._init.bind(this);
    this.update = this.$_update$.bind(this);
    this.$_managedAttrOptions$ = {};
  };
  $oj$$7$$.$ComponentBinding$.prototype._init = function $$oj$$7$$$$ComponentBinding$$$_init$($element$$43$$, $valueAccessor$$, $allBindingsAccessor$$, $viewModel$$1$$, $bindingContext$$23$$) {
    $ko$$1$$.applyBindingsToDescendants($bindingContext$$23$$, $element$$43$$);
    return{controlsDescendantBindings:!0};
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_update$ = function $$oj$$7$$$$ComponentBinding$$$$_update$$($element$$44$$, $valueAccessor$$1$$, $allBindingsAccessor$$1$$, $viewModel$$2$$, $bindingContext$$24$$) {
    function $cleanup$$($destroyComponent$$) {
      $componentComputeds$$.forEach(function($computed$$) {
        $computed$$.dispose();
      });
      $componentComputeds$$ = [];
      $destroyComponent$$ && $component$$7$$ && ($component$$7$$("destroy"), $component$$7$$ = null);
      $changeTracker$$ && ($changeTracker$$.$dispose$(), $changeTracker$$ = null);
      $jelem$$4$$.off($oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$);
    }
    function $createComponent$$($componentName$$3$$, $nameOption$$, $bindingValue$$) {
      if (null != $componentName$$3$$) {
        var $comp$$2$$ = $jelem$$4$$[$componentName$$3$$];
        if ("function" !== typeof $comp$$2$$) {
          $oj$$7$$.$Logger$.error("Component %s is not found", $componentName$$3$$);
        } else {
          $comp$$2$$ = $comp$$2$$.bind($jelem$$4$$);
          $changeTracker$$ = new $ComponentChangeTracker$$($comp$$2$$, $oj$$7$$.$ComponentBinding$.$_changeQueue$);
          var $specifiedOptions$$ = Object.keys($bindingValue$$).filter(function($value$$159$$) {
            return!(null == $value$$159$$ || $value$$159$$ === $nameOption$$);
          });
          $component$$7$$ = this.$_initComponent$($element$$44$$, {$component$:$comp$$2$$, $changeTracker$:$changeTracker$$, $componentName$:$componentName$$3$$, $specifiedOptions$:$specifiedOptions$$, $computeds$:$componentComputeds$$, $valueAccessor$:function() {
            return $bindingValue$$;
          }, $allBindingsAccessor$:$allBindingsAccessor$$1$$, $bindingContext$:$bindingContext$$24$$, $destroyCallback$:function() {
            $component$$7$$ = null;
          }});
        }
      }
    }
    var $componentComputeds$$ = [], $stage$$ = 0, $component$$7$$, $changeTracker$$, $jelem$$4$$ = $$$$7$$($element$$44$$);
    $ko$$1$$.ignoreDependencies(function() {
      $ko$$1$$.computed(function() {
        var $bindingValue$$1$$ = $ko$$1$$.utils.unwrapObservable($valueAccessor$$1$$());
        "object" !== typeof $bindingValue$$1$$ && $oj$$7$$.$Logger$.error("ojComponent binding should evaluate to an object");
        var $componentName$$4$$ = this.$_bindingOptions$.componentName, $nameOpt$$, $nameOptionFound$$ = !1;
        if (null == $componentName$$4$$ & null != $bindingValue$$1$$) {
          for (var $name_attrs$$ = [$oj$$7$$.$ComponentBinding$.$_COMPONENT_OPTION$, "role"], $n$$20$$ = 0;!$nameOptionFound$$ && $n$$20$$ < $name_attrs$$.length;$n$$20$$++) {
            $nameOpt$$ = $name_attrs$$[$n$$20$$], $nameOpt$$ in $bindingValue$$1$$ && ($nameOptionFound$$ = !0, $componentName$$4$$ = $bindingValue$$1$$[$nameOpt$$]);
          }
          $nameOptionFound$$ || $oj$$7$$.$Logger$.error("component attribute is required for the ojComponent binding");
          $componentName$$4$$ = $ko$$1$$.utils.unwrapObservable($componentName$$4$$);
        }
        0 == $stage$$ ? $stage$$ = 1 : $ko$$1$$.ignoreDependencies($cleanup$$, this, [!0]);
        $ko$$1$$.ignoreDependencies($createComponent$$, this, [$componentName$$4$$, $nameOpt$$, $bindingValue$$1$$]);
      }, this, {disposeWhenNodeIsRemoved:$element$$44$$});
    }, this);
    $ko$$1$$.utils.domNodeDisposal.addDisposeCallback($element$$44$$, $cleanup$$.bind(this, !1));
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_initComponent$ = function $$oj$$7$$$$ComponentBinding$$$$_initComponent$$($element$$45$$, $ctx$$) {
    function $propertyReadFunc$$() {
      var $initProps_prop$$57_updateProps$$ = this.$_property$, $updateKeys_value$$160$$ = $oj$$7$$.$ComponentBinding$.$_toJS$($ctx$$.$valueAccessor$()[$initProps_prop$$57_updateProps$$]);
      if (0 === $stage$$1$$) {
        var $initFunc_k$$5_managedPropEntry_updateFunc$$ = $managedAttrMap$$[$initProps_prop$$57_updateProps$$];
        null != $initFunc_k$$5_managedPropEntry_updateFunc$$ ? ($specifiedManagedAttrs$$[$initProps_prop$$57_updateProps$$] = $initFunc_k$$5_managedPropEntry_updateFunc$$, $initFunc_k$$5_managedPropEntry_updateFunc$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$.$init$, null != $initFunc_k$$5_managedPropEntry_updateFunc$$ && ($initProps_prop$$57_updateProps$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$($initProps_prop$$57_updateProps$$, $updateKeys_value$$160$$, $element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, 
        $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$) || {}, $oj$$7$$.$CollectionUtils$.$copyInto$($resolvedInitialOptions$$, $initProps_prop$$57_updateProps$$))) : $resolvedInitialOptions$$[$initProps_prop$$57_updateProps$$] = $updateKeys_value$$160$$;
      } else {
        if (!$disposed$$) {
          if (null != $managedAttrMap$$[$initProps_prop$$57_updateProps$$]) {
            if ($initFunc_k$$5_managedPropEntry_updateFunc$$ = $managedAttrMap$$[$initProps_prop$$57_updateProps$$].update, null != $initFunc_k$$5_managedPropEntry_updateFunc$$) {
              for ($initProps_prop$$57_updateProps$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$($initProps_prop$$57_updateProps$$, $updateKeys_value$$160$$, $element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$) || {}, $updateKeys_value$$160$$ = Object.keys($initProps_prop$$57_updateProps$$), $initFunc_k$$5_managedPropEntry_updateFunc$$ = 0;$initFunc_k$$5_managedPropEntry_updateFunc$$ < $updateKeys_value$$160$$.length;$initFunc_k$$5_managedPropEntry_updateFunc$$++) {
                var $p$$3$$ = $updateKeys_value$$160$$[$initFunc_k$$5_managedPropEntry_updateFunc$$];
                $ctx$$.$changeTracker$.$addChange$($p$$3$$, $initProps_prop$$57_updateProps$$[$p$$3$$]);
              }
            }
          } else {
            $ctx$$.$changeTracker$.$addChange$($initProps_prop$$57_updateProps$$, $updateKeys_value$$160$$);
          }
        }
      }
    }
    function $destroyListener$$($destroyCallback_evt$$19$$) {
      $destroyCallback_evt$$19$$.target && $destroyCallback_evt$$19$$.target == $element$$45$$ && ($ctx$$.$destroyCallback$(), ($destroyCallback_evt$$19$$ = $self$$50$$.$_bindingOptions$.beforeDestroy) && $destroyCallback_evt$$19$$($element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$), $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$(!1, $specifiedManagedAttrs$$, $element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, 
      $ctx$$.$bindingContext$), $disposed$$ = !0, $ctx$$.$changeTracker$.$dispose$(), $element$$45$$.removeEventListener("_ojDestroy", $destroyListener$$));
    }
    var $disposed$$ = !1, $stage$$1$$ = 0, $specifiedManagedAttrs$$ = {}, $createCallback_jelem$$5_mutationOptions$$ = $$$$7$$($element$$45$$), $comp$$3$$ = $ctx$$.$component$, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = $ctx$$.$componentName$, $self$$50$$ = this;
    $element$$45$$.addEventListener("_ojDestroy", $destroyListener$$);
    var $managedAttrMap$$ = $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $ctx$$.$specifiedOptions$, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$), $defaultInstance_m$$18$$ = $oj$$7$$.$ComponentBinding$.$getDefaultInstance$();
    this !== $defaultInstance_m$$18$$ && ($componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = $defaultInstance_m$$18$$.$_getManagedAttributes$($ctx$$.$specifiedOptions$, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$), $oj$$7$$.$CollectionUtils$.$copyInto$($componentName$$5_defaultManagedMap_k$$4_mutationKeys$$, $managedAttrMap$$), $managedAttrMap$$ = $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$);
    for (var $resolvedInitialOptions$$ = {}, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = 0;$componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ < $ctx$$.$specifiedOptions$.length;$componentName$$5_defaultManagedMap_k$$4_mutationKeys$$++) {
      $ctx$$.$computeds$.push($ko$$1$$.computed($propertyReadFunc$$, {$_property$:$ctx$$.$specifiedOptions$[$componentName$$5_defaultManagedMap_k$$4_mutationKeys$$]}));
    }
    $stage$$1$$ = 1;
    $oj$$7$$.$ComponentBinding$.$_registerWritebacks$($createCallback_jelem$$5_mutationOptions$$, $ctx$$);
    $createCallback_jelem$$5_mutationOptions$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$($resolvedInitialOptions$$);
    $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = Object.keys($createCallback_jelem$$5_mutationOptions$$);
    $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$.forEach(function($mutationOpt$$) {
      delete $resolvedInitialOptions$$[$mutationOpt$$];
    });
    $comp$$3$$($resolvedInitialOptions$$);
    for ($defaultInstance_m$$18$$ = 0;$defaultInstance_m$$18$$ < $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$.length;$defaultInstance_m$$18$$++) {
      var $mo$$ = $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$[$defaultInstance_m$$18$$];
      $comp$$3$$("option", $mo$$, $createCallback_jelem$$5_mutationOptions$$[$mo$$]);
    }
    ($createCallback_jelem$$5_mutationOptions$$ = this.$_bindingOptions$.afterCreate) && $createCallback_jelem$$5_mutationOptions$$($element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$);
    $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$(!0, $specifiedManagedAttrs$$, $element$$45$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$);
    $resolvedInitialOptions$$ = null;
    return $comp$$3$$;
  };
  $oj$$7$$.$ComponentBinding$.$__CreateEvaluator$ = function $$oj$$7$$$$ComponentBinding$$$__CreateEvaluator$$($expr$$3$$) {
    return new Function("$context", "with($context){with($data||{}){return " + $expr$$3$$ + ";}}");
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_getManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$_getManagedAttributes$$($specifiedOptions$$1$$, $componentName$$6$$) {
    return $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $specifiedOptions$$1$$, $componentName$$6$$);
  };
  $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$_resolveManagedAttributes$$($optionMap$$, $specifiedOptions$$2$$, $componentName$$7_k$$6_proto$$4_widgetClass$$) {
    function $traverseOptions$$($name$$91$$, $followLinks$$) {
      var $managers$$1$$ = $optionMap$$[$name$$91$$];
      if (null != $managers$$1$$) {
        for (var $n$$21$$ = $managers$$1$$.length - 1;0 <= $n$$21$$;$n$$21$$--) {
          var $opt$$17_parents$$ = $managers$$1$$[$n$$21$$];
          null != $opt$$17_parents$$.attributes && $applicableOptions$$.push($opt$$17_parents$$);
          if ($followLinks$$ && ($opt$$17_parents$$ = $opt$$17_parents$$.use, null != $opt$$17_parents$$)) {
            for (var $opt$$17_parents$$ = Array.isArray($opt$$17_parents$$) ? $opt$$17_parents$$ : [$opt$$17_parents$$], $i$$129$$ = 0;$i$$129$$ < $opt$$17_parents$$.length;$i$$129$$++) {
              $traverseOptions$$($opt$$17_parents$$[$i$$129$$], !0);
            }
          }
        }
      }
    }
    var $managedAttrMap$$1$$ = {}, $applicableOptions$$ = [];
    $traverseOptions$$($componentName$$7_k$$6_proto$$4_widgetClass$$, !0);
    $componentName$$7_k$$6_proto$$4_widgetClass$$ = $$$$7$$.oj[$componentName$$7_k$$6_proto$$4_widgetClass$$];
    if (null != $componentName$$7_k$$6_proto$$4_widgetClass$$) {
      for ($componentName$$7_k$$6_proto$$4_widgetClass$$ = Object.getPrototypeOf($componentName$$7_k$$6_proto$$4_widgetClass$$.prototype);null != $componentName$$7_k$$6_proto$$4_widgetClass$$ && "oj" === $componentName$$7_k$$6_proto$$4_widgetClass$$.namespace;) {
        $traverseOptions$$($componentName$$7_k$$6_proto$$4_widgetClass$$.widgetName, !0), $componentName$$7_k$$6_proto$$4_widgetClass$$ = Object.getPrototypeOf($componentName$$7_k$$6_proto$$4_widgetClass$$);
      }
    }
    $traverseOptions$$("@global", !1);
    if (0 < $applicableOptions$$.length) {
      for ($componentName$$7_k$$6_proto$$4_widgetClass$$ = 0;$componentName$$7_k$$6_proto$$4_widgetClass$$ < $specifiedOptions$$2$$.length;$componentName$$7_k$$6_proto$$4_widgetClass$$++) {
        for (var $attr$$13$$ = $specifiedOptions$$2$$[$componentName$$7_k$$6_proto$$4_widgetClass$$], $l$$2$$ = 0;$l$$2$$ < $applicableOptions$$.length;$l$$2$$++) {
          var $opts$$10$$ = $applicableOptions$$[$l$$2$$];
          if (0 <= $opts$$10$$.attributes.indexOf($attr$$13$$)) {
            $managedAttrMap$$1$$[$attr$$13$$] = {$init$:$opts$$10$$.init, update:$opts$$10$$.update, $afterCreate$:$opts$$10$$.afterCreate, $beforeDestroy$:$opts$$10$$.beforeDestroy};
            break;
          }
        }
      }
    }
    return $managedAttrMap$$1$$;
  };
  $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$ = ".oj_ko";
  $oj$$7$$.$ComponentBinding$.$_registerWritebacks$ = function $$oj$$7$$$$ComponentBinding$$$_registerWritebacks$$($jelem$$6$$, $ctx$$1$$) {
    for (var $eventInfos_writablePropMap$$ = {"^slider$":[{event:"slidechange", getter:$_extractValueFromChangeEvent$$}], "^oj*":[{event:"ojoptionchange", getter:$_extractOptionChange$$}]}, $cachedWriterFunctionEvaluators$$ = {}, $i$$130_keys$$9$$ = Object.keys($eventInfos_writablePropMap$$), $info$$2_k$$7$$ = 0;$info$$2_k$$7$$ < $i$$130_keys$$9$$.length;$info$$2_k$$7$$++) {
      var $pattern$$12$$ = $i$$130_keys$$9$$[$info$$2_k$$7$$];
      if ($ctx$$1$$.$componentName$.match($pattern$$12$$)) {
        $eventInfos_writablePropMap$$ = $eventInfos_writablePropMap$$[$pattern$$12$$];
        for ($i$$130_keys$$9$$ = 0;$i$$130_keys$$9$$ < $eventInfos_writablePropMap$$.length;$i$$130_keys$$9$$++) {
          $info$$2_k$$7$$ = $eventInfos_writablePropMap$$[$i$$130_keys$$9$$], $jelem$$6$$.on($info$$2_k$$7$$.event + $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$, {$getter$:$info$$2_k$$7$$.getter}, function($evt$$20$$, $data$$53$$) {
            $evt$$20$$.stopPropagation();
            var $nameValues$$ = $evt$$20$$.data.$getter$($evt$$20$$, $data$$53$$), $accessor$$1$$ = $ctx$$1$$.$valueAccessor$(), $name$$92$$;
            for ($name$$92$$ in $nameValues$$) {
              $ctx$$1$$.$changeTracker$.$suspend$($name$$92$$);
              try {
                if (0 <= $ctx$$1$$.$specifiedOptions$.indexOf($name$$92$$)) {
                  var $optionMap$$1$$ = $accessor$$1$$[$oj$$7$$.$ComponentBinding$.$_OPTION_MAP$];
                  $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$($name$$92$$, $accessor$$1$$[$name$$92$$], $nameValues$$[$name$$92$$], null == $optionMap$$1$$ ? null : $optionMap$$1$$[$name$$92$$], $ctx$$1$$.$bindingContext$, $cachedWriterFunctionEvaluators$$);
                }
              } finally {
                $ctx$$1$$.$changeTracker$.$resume$($name$$92$$);
              }
            }
          });
        }
        break;
      }
    }
  };
  $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$ = function $$oj$$7$$$$ComponentBinding$$$_writeValueToProperty$$($func$$7_name$$93$$, $inContextWriter_target$$78$$, $value$$161$$, $propertyExpression_writerExpr$$, $bindingContext$$25$$, $cachedWriterFunctionEvaluators$$1$$) {
    null != $inContextWriter_target$$78$$ && $ko$$1$$.isObservable($inContextWriter_target$$78$$) ? $ko$$1$$.isWriteableObservable($inContextWriter_target$$78$$) && $inContextWriter_target$$78$$($value$$161$$) : ($func$$7_name$$93$$ in $cachedWriterFunctionEvaluators$$1$$ || ($inContextWriter_target$$78$$ = null, $propertyExpression_writerExpr$$ = $oj$$7$$.$ExpressionUtils$.$getPropertyWriterExpression$($propertyExpression_writerExpr$$), null != $propertyExpression_writerExpr$$ && ($inContextWriter_target$$78$$ = 
    $oj$$7$$.$ComponentBinding$.$__CreateEvaluator$($propertyExpression_writerExpr$$)), $cachedWriterFunctionEvaluators$$1$$[$func$$7_name$$93$$] = $inContextWriter_target$$78$$), ($func$$7_name$$93$$ = $cachedWriterFunctionEvaluators$$1$$[$func$$7_name$$93$$]) && $func$$7_name$$93$$($bindingContext$$25$$)($value$$161$$));
  };
  $oj$$7$$.$ComponentBinding$.$_toJS$ = function $$oj$$7$$$$ComponentBinding$$$_toJS$$($prop$$58$$) {
    $prop$$58$$ = $ko$$1$$.utils.unwrapObservable($prop$$58$$);
    (Array.isArray($prop$$58$$) || $oj$$7$$.$CollectionUtils$.isPlainObject($prop$$58$$)) && $prop$$58$$.ojConvertToJS && ($prop$$58$$ = $ko$$1$$.toJS($prop$$58$$));
    return $prop$$58$$;
  };
  $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$ = function $$oj$$7$$$$ComponentBinding$$$_extractDotNotationOptions$$($options$$212$$) {
    for (var $mutationOptions$$1$$ = {}, $keys$$10$$ = Object.keys($options$$212$$), $k$$8$$ = 0;$k$$8$$ < $keys$$10$$.length;$k$$8$$++) {
      var $opt$$18$$ = $keys$$10$$[$k$$8$$];
      0 <= $opt$$18$$.indexOf(".") && ($mutationOptions$$1$$[$opt$$18$$] = $options$$212$$[$opt$$18$$]);
    }
    return $mutationOptions$$1$$;
  };
  $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$ = function $$oj$$7$$$$ComponentBinding$$$_deliverCreateDestroyEventToManagedProps$$($isCreate$$, $managedAttrMap$$2$$, $element$$46$$, $comp$$4$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$26$$) {
    for (var $props$$7$$ = Object.keys($managedAttrMap$$2$$), $i$$131$$ = 0;$i$$131$$ < $props$$7$$.length;$i$$131$$++) {
      var $prop$$59$$ = $props$$7$$[$i$$131$$], $callback$$84_entry$$1$$ = $managedAttrMap$$2$$[$prop$$59$$];
      ($callback$$84_entry$$1$$ = $isCreate$$ ? $callback$$84_entry$$1$$.$afterCreate$ : $callback$$84_entry$$1$$.$beforeDestroy$) && $callback$$84_entry$$1$$($prop$$59$$, $element$$46$$, $comp$$4$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$26$$);
    }
  };
  $oj$$7$$.$ComponentBinding$.$_changeQueue$ = new $GlobalChangeQueue$$;
  $oj$$7$$.$ComponentBinding$.$__getKnockoutVersion$ = function $$oj$$7$$$$ComponentBinding$$$__getKnockoutVersion$$() {
    return $oj$$7$$.$__isAmdLoaderPresent$() && $ko$$1$$ ? $ko$$1$$.version : "";
  };
  $oj$$7$$.$ComponentBinding$.$_isNameRegistered$ = function $$oj$$7$$$$ComponentBinding$$$_isNameRegistered$$($bindingName$$3$$) {
    return 0 <= $oj$$7$$.$ComponentBinding$.$_REGISTERED_NAMES$.indexOf($bindingName$$3$$);
  };
  $oj$$7$$.$ComponentBinding$.$_REGISTERED_NAMES$ = [];
  $oj$$7$$.$ComponentBinding$.$_COMPONENT_OPTION$ = "component";
  $oj$$7$$.$ComponentBinding$.$_OPTION_MAP$ = "_ojOptions";
  (function() {
    var $wrapped$$6$$ = $ko$$1$$.removeNode;
    $ko$$1$$.removeNode = function $$ko$$1$$$removeNode$($node$$28$$) {
      var $ojComponents$$ = $oj$$7$$.Components;
      $ojComponents$$ && $oj$$7$$.$DomUtils$.$setInKoRemoveNode$($node$$28$$);
      try {
        $wrapped$$6$$($node$$28$$);
      } finally {
        $ojComponents$$ && $oj$$7$$.$DomUtils$.$setInKoRemoveNode$(null);
      }
    };
  })();
  $oj$$7$$.$ComponentBinding$.$_INSTANCE$ = $oj$$7$$.$ComponentBinding$.create(["ojComponent", "jqueryUI"]);
  $$$$7$$.widget("oj._ojDetectCleanData", {_destroy:function() {
    var $disposal$$, $oldCleanExternal$$;
    $disposal$$ = $ko$$1$$.utils.domNodeDisposal;
    $oldCleanExternal$$ = $disposal$$.cleanExternalData;
    $disposal$$.cleanExternalData = function $$disposal$$$cleanExternalData$() {
    };
    try {
      $ko$$1$$.cleanNode(this.element[0]);
    } finally {
      $disposal$$.cleanExternalData = $oldCleanExternal$$;
    }
  }});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["pieCenter"], init:function($name$$95$$, $value$$162$$, $element$$47$$, $widgetConstructor$$, $valueAccessor$$3$$, $allBindingsAccessor$$3$$, $bindingContext$$27$$) {
    return $_handleAttributes$$($name$$95$$, $value$$162$$, $bindingContext$$27$$);
  }, update:function($name$$96$$, $value$$163$$, $element$$48$$, $widgetConstructor$$1$$, $valueAccessor$$4$$, $allBindingsAccessor$$4$$, $bindingContext$$28$$) {
    return $_handleAttributes$$($name$$96$$, $value$$163$$, $bindingContext$$28$$);
  }, "for":"ojChart"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["optionTemplate"], init:function($name$$97_result$$16$$, $value$$164$$, $element$$49$$, $widgetConstructor$$2$$, $valueAccessor$$5$$, $allBindingsAccessor$$5$$, $bindingContext$$29$$) {
    $name$$97_result$$16$$ = $_handleComboboxManagedAttributes$$($name$$97_result$$16$$, $value$$164$$, $bindingContext$$29$$);
    if (null !== $name$$97_result$$16$$) {
      return $name$$97_result$$16$$;
    }
  }, update:function($name$$98$$, $value$$165$$, $element$$50$$, $widgetConstructor$$3$$, $valueAccessor$$6$$, $allBindingsAccessor$$6$$, $bindingContext$$30$$) {
    return $_handleComboboxManagedAttributes$$($name$$98$$, $value$$165$$, $bindingContext$$30$$);
  }, "for":"ComboboxOptionRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojCombobox", use:"ComboboxOptionRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojSelect", use:"ComboboxOptionRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputSearch", use:"ComboboxOptionRenderer"});
  $oj$$7$$.$Object$.$createSubclass$($ComponentChangeTracker$$, $oj$$7$$.$Object$, "ComponentBinding.ComponentChangeTracker");
  $ComponentChangeTracker$$.prototype.Init = function $$ComponentChangeTracker$$$$Init$($component$$8$$, $queue$$1$$) {
    $ComponentChangeTracker$$.$superclass$.Init.call(this);
    this.$_component$ = $component$$8$$;
    this.$_queue$ = $queue$$1$$;
    this.$_changes$ = {};
    this.$_suspendCountMap$ = {};
  };
  $ComponentChangeTracker$$.prototype.$addChange$ = function $$ComponentChangeTracker$$$$$addChange$$($property$$17$$, $value$$166$$) {
    this.$_isSuspended$($property$$17$$) || this.$_disposed$ || (this.$_changes$[$property$$17$$] = $value$$166$$, this.$_queue$.$registerComponentChanges$(this));
  };
  $ComponentChangeTracker$$.prototype.$dispose$ = function $$ComponentChangeTracker$$$$$dispose$$() {
    this.$_disposed$ = !0;
  };
  $ComponentChangeTracker$$.prototype.$resume$ = function $$ComponentChangeTracker$$$$$resume$$($option$$23$$) {
    var $count$$28$$ = this.$_suspendCountMap$[$option$$23$$] || 0;
    $oj$$7$$.$Assert$.assert(0 < $count$$28$$, "ComponentChangeTracker suspendCount underflow");
    $count$$28$$--;
    0 == $count$$28$$ ? delete this.$_suspendCountMap$[$option$$23$$] : this.$_suspendCountMap$[$option$$23$$] = $count$$28$$;
  };
  $ComponentChangeTracker$$.prototype.$suspend$ = function $$ComponentChangeTracker$$$$$suspend$$($option$$24$$) {
    this.$_suspendCountMap$[$option$$24$$] = (this.$_suspendCountMap$[$option$$24$$] || 0) + 1;
  };
  $ComponentChangeTracker$$.prototype.$applyChanges$ = function $$ComponentChangeTracker$$$$$applyChanges$$($changes$$1$$) {
    if (!this.$_disposed$) {
      var $mutationOptions$$2$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$($changes$$1$$), $flags$$15$$ = {changed:!0};
      this.$_component$("option", $changes$$1$$, $flags$$15$$);
      for (var $mo$$1$$ in $mutationOptions$$2$$) {
        this.$_component$("option", $mo$$1$$, $mutationOptions$$2$$[$mo$$1$$], $flags$$15$$);
      }
    }
  };
  $ComponentChangeTracker$$.prototype.$flushChanges$ = function $$ComponentChangeTracker$$$$$flushChanges$$() {
    var $changes$$2$$ = this.$_changes$;
    this.$_changes$ = {};
    return $changes$$2$$;
  };
  $ComponentChangeTracker$$.prototype.$_isSuspended$ = function $$ComponentChangeTracker$$$$$_isSuspended$$($option$$25$$) {
    return 1 <= (this.$_suspendCountMap$[$option$$25$$] || 0);
  };
  $ko$$1$$.bindingHandlers.ojContextMenu = {update:function $$ko$$1$$$bindingHandlers$ojContextMenu$update$($element$$51$$, $valueAccessor$$7$$) {
    function $launch$$1$$($event$$64$$, $eventType$$29_openOptions$$1$$, $pressHold$$1$$) {
      $isPressHold$$1$$ = $pressHold$$1$$;
      var $menu$$3$$ = $getContextMenu$$();
      if ($isPressHold$$1$$) {
        $$element$$.one("touchend.ojContextMenu", function() {
          $menu$$3$$.$__contextMenuPressHoldJustEnded$(!0);
          setTimeout(function() {
            $menu$$3$$.$__contextMenuPressHoldJustEnded$(!1);
          }, 50);
        });
      }
      "touchstart" === $doubleOpenType$$1$$ && "contextmenu" === $event$$64$$.type || "contextmenu" === $doubleOpenType$$1$$ && "touchstart" === $event$$64$$.type ? ($doubleOpenType$$1$$ = null, clearTimeout($doubleOpenTimer$$1$$)) : !$event$$64$$.isDefaultPrevented() && ($eventType$$29_openOptions$$1$$ = {launcher:$$element$$, initialFocus:"menu", position:{mouse:{my:"start top", at:"start bottom", of:$event$$64$$}, touch:{my:"start\x3e40 center", at:"start bottom", of:$event$$64$$, collision:"flipfit"}, 
      keyboard:{my:"start top", at:"start bottom", of:"launcher"}}[$eventType$$29_openOptions$$1$$]}, $menu$$3$$.$__openingContextMenu$ = !0, $menu$$3$$.open($event$$64$$, $eventType$$29_openOptions$$1$$), $menu$$3$$.$__openingContextMenu$ = !1, $getContextMenuNode$$().is(":visible") && ($event$$64$$.preventDefault(), document.addEventListener("keyup", $preventKeyUpEventIfMenuOpen$$), "touchstart" === $event$$64$$.type || "contextmenu" === $event$$64$$.type)) && ($doubleOpenType$$1$$ = $event$$64$$.type, 
      $doubleOpenTimer$$1$$ = setTimeout(function() {
        $doubleOpenType$$1$$ = null;
      }, 300));
    }
    function $preventKeyUpEventIfMenuOpen$$($event$$63$$) {
      121 == $event$$63$$.which && $event$$63$$.shiftKey && $getContextMenuNode$$().is(":visible") && $event$$63$$.preventDefault();
    }
    function $getContextMenuNode$$() {
      $$menu$$ || $setContextMenuIvars$$();
      return $$menu$$;
    }
    function $getContextMenu$$() {
      $_menu$$ || $setContextMenuIvars$$();
      return $_menu$$;
    }
    function $setContextMenuIvars$$() {
      $$menu$$ = $$$$7$$($menuSelector$$).first();
      $_menu$$ = $$menu$$.data("oj-ojMenu");
      if (!$_menu$$) {
        throw Error('"contextMenu" set to "' + $menuSelector$$ + '", which does not reference a valid JET Menu.');
      }
      $$menu$$.on("ojclose.ojContextMenu", function() {
        document.removeEventListener("keyup", $preventKeyUpEventIfMenuOpen$$);
      });
    }
    var $$element$$ = $$$$7$$($element$$51$$), $$menu$$, $_menu$$, $pressHoldTimer$$, $isPressHold$$1$$ = !1, $touchInProgress$$1$$ = !1, $doubleOpenTimer$$1$$, $doubleOpenType$$1$$ = null, $clickListener$$;
    $$element$$.off(".ojContextMenu").removeClass("oj-menu-context-menu-launcher")[0].removeEventListener("click", $clickListener$$, !0);
    $$menu$$ && $$menu$$.off(".ojContextMenu");
    clearTimeout($pressHoldTimer$$);
    $$menu$$ = $_menu$$ = void 0;
    var $menuSelector$$ = $ko$$1$$.utils.unwrapObservable($valueAccessor$$7$$());
    "string" !== $$$$7$$.type($menuSelector$$) && ($menuSelector$$ = $element$$51$$.getAttribute("contextmenu")) && ($menuSelector$$ = "#" + $menuSelector$$);
    $clickListener$$ = function $$clickListener$$$($event$$66$$) {
      if ($isPressHold$$1$$) {
        return $event$$66$$.preventDefault(), $event$$66$$.stopPropagation(), $isPressHold$$1$$ = !1;
      }
    };
    $element$$51$$.addEventListener("click", $clickListener$$, !0);
    $$element$$.on("touchstart.ojContextMenu mousedown.ojContextMenu keydown.ojContextMenu ", function($event$$67$$) {
      if ("mousedown" !== $event$$67$$.type || !$getContextMenu$$().$__contextMenuPressHoldJustEnded$()) {
        return $isPressHold$$1$$ = !1, "touchstart" === $event$$67$$.type && ($touchInProgress$$1$$ = !0, $pressHoldTimer$$ = setTimeout($launch$$1$$.bind(void 0, $event$$67$$, "touch", !0), 750)), !0;
      }
    }).on("touchend.ojContextMenu touchcancel.ojContextMenu", function() {
      $touchInProgress$$1$$ = !1;
      clearTimeout($pressHoldTimer$$);
      return!0;
    }).on("keydown.ojContextMenu contextmenu.ojContextMenu", function($event$$69$$) {
      ("contextmenu" === $event$$69$$.type || 121 == $event$$69$$.which && $event$$69$$.shiftKey) && $launch$$1$$($event$$69$$, $touchInProgress$$1$$ ? "touch" : "keydown" === $event$$69$$.type ? "keyboard" : "mouse", !1);
      return!0;
    }).addClass($oj$$7$$.$DomUtils$.$isTouchSupported$() ? "oj-menu-context-menu-launcher" : "");
  }};
  $oj$$7$$.$__KO_CUSTOM_BINDING_PROVIDER_INSTANCE$ = (new function _KoCustomBindingProvider() {
    function $_wrap$$($wrapped$$, $target$$76$$, $name$$82$$) {
      var $delegate$$ = $wrapped$$[$name$$82$$];
      $target$$76$$[$name$$82$$] = function $$target$$76$$$$name$$82$$$() {
        var $ret$$21$$ = $delegate$$ ? $delegate$$.apply($wrapped$$, arguments) : null, $postprocessHandlers$$ = $_postprocessors$$[$name$$82$$];
        if (null != $postprocessHandlers$$) {
          var $originalArgs$$ = arguments;
          $postprocessHandlers$$.forEach(function($handler$$46$$) {
            var $args$$16$$ = Array.prototype.slice.call($originalArgs$$);
            $args$$16$$.push($ret$$21$$, $wrapped$$);
            $ret$$21$$ = $handler$$46$$.apply(null, $args$$16$$);
          });
        }
        return $ret$$21$$;
      };
    }
    this.$install$ = function $this$$install$$() {
      var $methodsToWrap_provider$$ = $ko$$1$$.bindingProvider, $wrapped$$1$$ = $methodsToWrap_provider$$.instance;
      if (!$wrapped$$1$$.getBindingAccessors) {
        return $oj$$7$$.$Logger$.error("JET's Knockout bindings are not compatible with the current binding provider since it does not implement getBindingAccessors()"), this;
      }
      var $custom$$2$$ = $methodsToWrap_provider$$.instance = {}, $methodsToWrap_provider$$ = [];
      $methodsToWrap_provider$$.push("getBindingAccessors", "nodeHasBindings", "getBindings", "preprocessNode");
      $methodsToWrap_provider$$.forEach(function($name$$83$$) {
        $_wrap$$($wrapped$$1$$, $custom$$2$$, $name$$83$$);
      });
      return this;
    };
    this.$addPostprocessor$ = function $this$$addPostprocessor$$($postprocessor$$) {
      Object.keys($postprocessor$$).forEach(function($key$$41$$) {
        $_postprocessors$$[$key$$41$$] = $_postprocessors$$[$key$$41$$] || [];
        $_postprocessors$$[$key$$41$$].push($postprocessor$$[$key$$41$$]);
      });
    };
    var $_postprocessors$$ = {};
  }).$install$();
  $oj$$7$$.$__KO_CUSTOM_BINDING_PROVIDER_INSTANCE$.$addPostprocessor$({getBindingAccessors:function _replaceComponentBindingWithV2($node$$24$$, $bindingContext$$4$$, $accessorMap$$, $wrapped$$2$$) {
    if (null == $accessorMap$$) {
      return null;
    }
    var $bindingName_keys$$inline_639$$;
    a: {
      $bindingName_keys$$inline_639$$ = Object.keys($accessorMap$$);
      for (var $i$$inline_640$$ = -0;$i$$inline_640$$ < $bindingName_keys$$inline_639$$.length;$i$$inline_640$$++) {
        var $key$$inline_641$$ = $bindingName_keys$$inline_639$$[$i$$inline_640$$];
        if ($oj$$7$$.$ComponentBinding$.$_isNameRegistered$($key$$inline_641$$)) {
          $bindingName_keys$$inline_639$$ = $key$$inline_641$$;
          break a;
        }
      }
      $bindingName_keys$$inline_639$$ = null;
    }
    null != $bindingName_keys$$inline_639$$ && ($accessorMap$$ = $_modifyOjComponentBinding$$($node$$24$$, $bindingName_keys$$inline_639$$, $wrapped$$2$$, $bindingContext$$4$$, $accessorMap$$));
    return $accessorMap$$;
  }});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["header", "cell"], init:function($cellTemplate_column_name$$99_row$$, $value$$167$$, $columnTemplate_element$$52_rowTemplate$$, $widgetConstructor$$4$$, $valueAccessor$$8$$, $allBindingsAccessor$$7$$, $bindingContext$$32$$) {
    if ("header" === $cellTemplate_column_name$$99_row$$) {
      return $cellTemplate_column_name$$99_row$$ = $value$$167$$.row, null != $cellTemplate_column_name$$99_row$$ && ($columnTemplate_element$$52_rowTemplate$$ = $cellTemplate_column_name$$99_row$$.template, null != $columnTemplate_element$$52_rowTemplate$$ && ($cellTemplate_column_name$$99_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$32$$, $columnTemplate_element$$52_rowTemplate$$))), $cellTemplate_column_name$$99_row$$ = $value$$167$$.column, null != $cellTemplate_column_name$$99_row$$ && 
      ($columnTemplate_element$$52_rowTemplate$$ = $cellTemplate_column_name$$99_row$$.template, null != $columnTemplate_element$$52_rowTemplate$$ && ($cellTemplate_column_name$$99_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$32$$, $columnTemplate_element$$52_rowTemplate$$))), {header:$value$$167$$};
    }
    if ("cell" === $cellTemplate_column_name$$99_row$$) {
      return $cellTemplate_column_name$$99_row$$ = $value$$167$$.template, null != $cellTemplate_column_name$$99_row$$ && ($value$$167$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$32$$, $cellTemplate_column_name$$99_row$$)), {cell:$value$$167$$};
    }
  }, update:function($cellTemplate$$1_column$$1_name$$100_row$$1$$, $value$$168$$, $columnTemplate$$1_element$$53_rowTemplate$$1$$, $widgetConstructor$$5$$, $valueAccessor$$9$$, $allBindingsAccessor$$8$$, $bindingContext$$33$$) {
    return "header" === $cellTemplate$$1_column$$1_name$$100_row$$1$$ ? ($cellTemplate$$1_column$$1_name$$100_row$$1$$ = $value$$168$$.row, null != $cellTemplate$$1_column$$1_name$$100_row$$1$$ && ($columnTemplate$$1_element$$53_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$100_row$$1$$.template, null != $columnTemplate$$1_element$$53_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$100_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$33$$, $columnTemplate$$1_element$$53_rowTemplate$$1$$))), 
    $cellTemplate$$1_column$$1_name$$100_row$$1$$ = $value$$168$$.column, null != $cellTemplate$$1_column$$1_name$$100_row$$1$$ && ($columnTemplate$$1_element$$53_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$100_row$$1$$.template, null != $columnTemplate$$1_element$$53_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$100_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$33$$, $columnTemplate$$1_element$$53_rowTemplate$$1$$))), {header:$value$$168$$}) : "cell" === $cellTemplate$$1_column$$1_name$$100_row$$1$$ ? 
    ($cellTemplate$$1_column$$1_name$$100_row$$1$$ = $value$$168$$.template, null != $cellTemplate$$1_column$$1_name$$100_row$$1$$ && ($value$$168$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$33$$, $cellTemplate$$1_column$$1_name$$100_row$$1$$)), {cell:$value$$168$$}) : null;
  }, "for":"ojDataGrid"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["template"], init:function($name$$101$$, $value$$169$$, $element$$54$$, $widgetConstructor$$6$$, $valueAccessor$$10$$, $allBindingsAccessor$$9$$, $bindingContext$$34$$) {
    return "template" === $name$$101$$ ? {_templateFunction:$_getDiagramNodeRenderer$$($bindingContext$$34$$, $value$$169$$)} : null;
  }, update:function($name$$102$$, $value$$170$$, $element$$55$$, $widgetConstructor$$7$$, $valueAccessor$$11$$, $allBindingsAccessor$$10$$, $bindingContext$$35$$) {
    return "template" === $name$$102$$ ? {_templateFunction:$_getDiagramNodeRenderer$$($bindingContext$$35$$, $value$$170$$)} : null;
  }, "for":"ojDiagram"});
  (function() {
    $oj$$7$$.$ExpressionUtils$ = {};
    $oj$$7$$.$ExpressionUtils$.$getExpressionInfo$ = function $$oj$$7$$$$ExpressionUtils$$$getExpressionInfo$$($attrValue$$) {
      var $info$$3$$ = {};
      if ($attrValue$$) {
        var $exp$$1$$ = $_ATTR_EXP$$.exec($attrValue$$), $exp$$1$$ = $exp$$1$$ ? $exp$$1$$[1] : null;
        $exp$$1$$ || ($info$$3$$.$downstreamOnly$ = !0, $exp$$1$$ = ($exp$$1$$ = $_ATTR_EXP_RO$$.exec($attrValue$$)) ? $exp$$1$$[1] : null);
        $info$$3$$.expr = $exp$$1$$;
      }
      return $info$$3$$;
    };
    $oj$$7$$.$ExpressionUtils$.$getPropertyWriterExpression$ = function $$oj$$7$$$$ExpressionUtils$$$getPropertyWriterExpression$$($expression$$4$$) {
      var $match$$15_reserveddWords$$ = ["true", "false", "null", "undefined"];
      if (null == $expression$$4$$ || 0 <= $match$$15_reserveddWords$$.indexOf($expression$$4$$)) {
        return null;
      }
      $match$$15_reserveddWords$$ = $expression$$4$$.match($_ASSIGNMENT_TARGET_EXP$$);
      return null === $match$$15_reserveddWords$$ ? null : "function(v){" + ($match$$15_reserveddWords$$[1] ? "Object(" + $match$$15_reserveddWords$$[1] + ")" + $match$$15_reserveddWords$$[2] : $expression$$4$$) + "\x3dv;}";
    };
    var $_ATTR_EXP$$ = /(?:\{\{\s*)([^\s]+)(?:\s*\}\})/, $_ATTR_EXP_RO$$ = /(?:\[\[\s*)([^\s]+)(?:\s*\]\])/, $_ASSIGNMENT_TARGET_EXP$$ = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;
  })();
  $oj$$7$$.$koStringTemplateEngine$ = {};
  $goog$exportPath_$$("koStringTemplateEngine", $oj$$7$$.$koStringTemplateEngine$, $oj$$7$$);
  $oj$$7$$.$koStringTemplateEngine$.$install$ = function $$oj$$7$$$$koStringTemplateEngine$$$install$$() {
    if (!$ko$$1$$.templates) {
      var $_templateText$$ = {}, $_templateData$$ = {}, $_engine$$ = new $ko$$1$$.nativeTemplateEngine, $StringTemplate$$ = function $$StringTemplate$$$($template$$15$$) {
        this.$_templateName$ = $template$$15$$;
        this.text = function $this$text$($value$$171$$) {
          if (!$value$$171$$) {
            return $_templateText$$[this.$_templateName$];
          }
          $_templateText$$[this.$_templateName$] = $value$$171$$;
        };
        this.data = function $this$data$($key$$46$$, $value$$172$$) {
          $_templateData$$[this.$_templateName$] || ($_templateData$$[this.$_templateName$] = {});
          if (1 === arguments.length) {
            return $_templateData$$[this.$_templateName$][$key$$46$$];
          }
          $_templateData$$[this.$_templateName$][$key$$46$$] = $value$$172$$;
        };
      };
      $_engine$$.makeTemplateSource = function $$_engine$$$makeTemplateSource$($template$$16$$, $templateDocument$$) {
        if ("string" == typeof $template$$16$$) {
          $templateDocument$$ = $templateDocument$$ || document;
          var $elem$$22$$ = $templateDocument$$.getElementById($template$$16$$);
          return $elem$$22$$ ? new $ko$$1$$.templateSources.domElement($elem$$22$$) : new $StringTemplate$$($template$$16$$);
        }
        if ($template$$16$$ && 1 == $template$$16$$.nodeType || 8 == $template$$16$$.nodeType) {
          return new $ko$$1$$.templateSources.anonymousTemplate($template$$16$$);
        }
      };
      $ko$$1$$.templates = $_templateText$$;
      $ko$$1$$.setTemplateEngine($_engine$$);
    }
  };
  $goog$exportPath_$$("koStringTemplateEngine.install", $oj$$7$$.$koStringTemplateEngine$.$install$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["item"], init:function($name$$103_result$$17$$, $value$$173$$, $element$$56$$, $widgetConstructor$$8$$, $valueAccessor$$12$$, $allBindingsAccessor$$11$$, $bindingContext$$36$$) {
    $name$$103_result$$17$$ = $_handleListViewManagedAttributes$$($name$$103_result$$17$$, $value$$173$$, $bindingContext$$36$$);
    if (null != $name$$103_result$$17$$) {
      return $name$$103_result$$17$$;
    }
  }, update:function($name$$104$$, $value$$174$$, $element$$57$$, $widgetConstructor$$9$$, $valueAccessor$$13$$, $allBindingsAccessor$$12$$, $bindingContext$$37$$) {
    return $_handleListViewManagedAttributes$$($name$$104$$, $value$$174$$, $bindingContext$$37$$);
  }, "for":"ojListViewRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojListView", use:"ojListViewRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojNavigationList", use:"ojListViewRenderer"});
  $oj$$7$$.ResponsiveKnockoutUtils = {};
  $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable = function $$oj$$7$$$ResponsiveKnockoutUtils$createMediaQueryObservable$($query$$4_queryString$$1$$) {
    if (null == $query$$4_queryString$$1$$) {
      throw Error("oj.ResponsiveKnockoutUtils.createMediaQueryObservable: aborting, queryString is null");
    }
    $query$$4_queryString$$1$$ = window.matchMedia($query$$4_queryString$$1$$);
    var $observable$$ = $ko$$1$$.observable($query$$4_queryString$$1$$.matches);
    $query$$4_queryString$$1$$.addListener(function($query$$5$$) {
      $observable$$($query$$5$$.matches);
    });
    -1 != navigator.userAgent.indexOf("WebKit") && -1 == navigator.userAgent.indexOf("Chrome") && $$$$7$$(window).resize(function() {
      0 === $$$$7$$("body").has(".oj-webkit-bug-123293").length && $$$$7$$("body").append('\x3cdiv aria-hidden\x3d"true" class\x3d"oj-helper-hidden-accessible oj-webkit-bug-123293"\x3e');
      $$$$7$$(".oj-webkit-bug-123293").text((new Date).getMilliseconds().toString());
    });
    return $observable$$;
  };
  $oj$$7$$.ResponsiveKnockoutUtils.createScreenRangeObservable = function $$oj$$7$$$ResponsiveKnockoutUtils$createScreenRangeObservable$() {
    var $xxlQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.XXL_UP), $xlQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.XL_UP), $lgQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.LG_UP), $mdQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP), $smQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_UP), 
    $xxlObservable$$ = null == $xxlQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($xxlQuery$$), $xlObservable$$ = null == $xlQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($xlQuery$$), $lgObservable$$ = null == $lgQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($lgQuery$$), $mdObservable$$ = null == $mdQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($mdQuery$$), $smObservable$$ = 
    null == $smQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($smQuery$$);
    return $ko$$1$$.computed(function() {
      if ($xxlObservable$$ && $xxlObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.XXL;
      }
      if ($xlObservable$$ && $xlObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.XL;
      }
      if ($lgObservable$$ && $lgObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.LG;
      }
      if ($mdObservable$$ && $mdObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.MD;
      }
      if ($smObservable$$ && $smObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.SM;
      }
      throw Error(" NO MATCH in oj.ResponsiveKnockoutUtils.createScreenRangeObservable");
    });
  };
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["center"], init:function($name$$105$$, $value$$175$$, $element$$58$$, $widgetConstructor$$10$$, $valueAccessor$$14$$, $allBindingsAccessor$$13$$, $bindingContext$$38$$) {
    return $_handleManagedGaugeAttributes$$($name$$105$$, $value$$175$$, $bindingContext$$38$$);
  }, update:function($name$$106$$, $value$$176$$, $element$$59$$, $widgetConstructor$$11$$, $valueAccessor$$15$$, $allBindingsAccessor$$14$$, $bindingContext$$39$$) {
    return $_handleManagedGaugeAttributes$$($name$$106$$, $value$$176$$, $bindingContext$$39$$);
  }, "for":"ojStatusMeterGauge"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["columns", "columnsDefault", "rowTemplate"], init:function($name$$107$$, $value$$177$$, $element$$60_i$$132$$, $template$$17_widgetConstructor$$12$$, $footerTemplate_valueAccessor$$16$$, $allBindingsAccessor$$15_headerTemplate$$, $bindingContext$$40$$) {
    if ("columns" == $name$$107$$ || "columnsDefault" == $name$$107$$) {
      for ($element$$60_i$$132$$ = 0;$element$$60_i$$132$$ < $value$$177$$.length;$element$$60_i$$132$$++) {
        var $column$$2$$ = $value$$177$$[$element$$60_i$$132$$];
        $template$$17_widgetConstructor$$12$$ = $column$$2$$.template;
        $footerTemplate_valueAccessor$$16$$ = $column$$2$$.footerTemplate;
        $allBindingsAccessor$$15_headerTemplate$$ = $column$$2$$.headerTemplate;
        null != $template$$17_widgetConstructor$$12$$ && ($column$$2$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$40$$, "cell", $template$$17_widgetConstructor$$12$$));
        null != $footerTemplate_valueAccessor$$16$$ && ($column$$2$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$40$$, "footer", $footerTemplate_valueAccessor$$16$$));
        null != $allBindingsAccessor$$15_headerTemplate$$ && ($column$$2$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$40$$, "header", $allBindingsAccessor$$15_headerTemplate$$));
      }
      return "columns" == $name$$107$$ ? {columns:$value$$177$$} : {columnsDefault:$value$$177$$};
    }
    if ("rowTemplate" == $name$$107$$) {
      return{rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$40$$, $value$$177$$)};
    }
  }, update:function($name$$108$$, $value$$178$$, $element$$61_i$$133$$, $widgetConstructor$$13$$, $template$$18_valueAccessor$$17$$, $allBindingsAccessor$$16_footerTemplate$$1$$, $bindingContext$$41$$) {
    if ("columns" == $name$$108$$ || "columnsDefault" == $name$$108$$) {
      var $headerTemplate$$1$$;
      for ($element$$61_i$$133$$ = 0;$element$$61_i$$133$$ < $value$$178$$.length;$element$$61_i$$133$$++) {
        var $column$$3$$ = $value$$178$$[$element$$61_i$$133$$];
        $template$$18_valueAccessor$$17$$ = $column$$3$$.template;
        $allBindingsAccessor$$16_footerTemplate$$1$$ = $column$$3$$.footerTemplate;
        $headerTemplate$$1$$ = $column$$3$$.headerTemplate;
        null != $template$$18_valueAccessor$$17$$ && ($column$$3$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$41$$, "cell", $template$$18_valueAccessor$$17$$));
        null != $allBindingsAccessor$$16_footerTemplate$$1$$ && ($column$$3$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$41$$, "footer", $allBindingsAccessor$$16_footerTemplate$$1$$));
        null != $headerTemplate$$1$$ && ($column$$3$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$41$$, "header", $headerTemplate$$1$$));
      }
      "columns" == $name$$108$$ ? $widgetConstructor$$13$$({columns:$value$$178$$}) : $widgetConstructor$$13$$({columnsDefault:$value$$178$$});
    } else {
      if ("rowTemplate" == $name$$108$$) {
        return{rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$41$$, $value$$178$$)};
      }
    }
    return null;
  }, "for":"ojTable"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["areaLayers", "pointDataLayers"], init:function($name$$109$$, $value$$179$$, $element$$62$$, $widgetConstructor$$14$$, $valueAccessor$$18$$, $allBindingsAccessor$$17$$, $bindingContext$$42$$) {
    return $_handleManagedAttributes$$($name$$109$$, $value$$179$$, $bindingContext$$42$$);
  }, update:function($name$$110$$, $value$$180$$, $element$$63$$, $widgetConstructor$$15$$, $valueAccessor$$19$$, $allBindingsAccessor$$18$$, $bindingContext$$43$$) {
    return $_handleManagedAttributes$$($name$$110$$, $value$$180$$, $bindingContext$$43$$);
  }, "for":"ojThematicMap"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["tooltip"], init:function($name$$111$$, $value$$181$$, $element$$64$$, $widgetConstructor$$16$$, $valueAccessor$$20$$, $allBindingsAccessor$$19$$, $bindingContext$$44$$) {
    return $_handleManagedTooltipAttribute$$($name$$111$$, $value$$181$$, $bindingContext$$44$$);
  }, update:function($name$$112$$, $value$$182$$, $element$$65$$, $widgetConstructor$$17$$, $valueAccessor$$21$$, $allBindingsAccessor$$20$$, $bindingContext$$45$$) {
    return $_handleManagedTooltipAttribute$$($name$$112$$, $value$$182$$, $bindingContext$$45$$);
  }, "for":"tooltipOptionRenderer"});
  (function() {
    for (var $componentsArray$$ = "ojChart ojDiagram ojNBox ojPictoChart ojSunburst ojTagCloud ojThematicMap ojTreemap ojDialGauge ojLedGauge ojRatingGauge ojSparkChart ojStatusMeterGauge".split(" "), $i$$134$$ = 0;$i$$134$$ < $componentsArray$$.length;$i$$134$$++) {
      $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":$componentsArray$$[$i$$134$$], use:"tooltipOptionRenderer"});
    }
  })();
});
