/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "ojs/ojknockout"], function($oj$$35$$, $ko$$6$$) {
  function $_getResourcePromise$$($descriptor$$1$$, $resourceType$$) {
    var $key$$155_promise$$3$$ = null, $val$$49_value$$268$$ = $descriptor$$1$$[$resourceType$$];
    if (null != $val$$49_value$$268$$) {
      $key$$155_promise$$3$$ = Object.keys($val$$49_value$$268$$)[0];
      $val$$49_value$$268$$ = $val$$49_value$$268$$[$key$$155_promise$$3$$];
      if (null == $key$$155_promise$$3$$) {
        throw "Invalid component descriptor key";
      }
      switch($key$$155_promise$$3$$) {
        case "inline":
          $key$$155_promise$$3$$ = Promise.resolve($val$$49_value$$268$$);
          break;
        case "promise":
          $key$$155_promise$$3$$ = $val$$49_value$$268$$;
          break;
        default:
          throw "Invalid descriptor key " + $key$$155_promise$$3$$ + " for the resopurce type: " + $resourceType$$;;
      }
    }
    return $key$$155_promise$$3$$;
  }
  function $_invokeCompositeViewModelMethod$$($model$$88$$, $handler$$51_key$$156_name$$125$$, $args$$22$$) {
    if (null != $model$$88$$ && ($handler$$51_key$$156_name$$125$$ = $oj$$35$$.$Composite$.$defaults$[$handler$$51_key$$156_name$$125$$], null != $handler$$51_key$$156_name$$125$$ && $model$$88$$ && ($handler$$51_key$$156_name$$125$$ = $model$$88$$[$handler$$51_key$$156_name$$125$$], "function" === typeof $handler$$51_key$$156_name$$125$$))) {
      return $ko$$6$$.ignoreDependencies($handler$$51_key$$156_name$$125$$, $model$$88$$, $args$$22$$);
    }
  }
  function $_setupProperties$$($element$$124$$, $props$$16$$, $metadata$$14$$, $propertyUpdater$$) {
    $_enumMetadataProperty$$($metadata$$14$$, "properties", function($name$$126$$, $propMetadata$$) {
      $_defineDynamicCompositeProperty$$($element$$124$$, $props$$16$$, $name$$126$$, $propMetadata$$, $propertyUpdater$$);
    });
  }
  function $_setupMethods$$($element$$125$$, $metadata$$15$$, $model$$89$$) {
    $_enumMetadataProperty$$($metadata$$15$$, "methods", function($name$$127$$) {
      var $internalName$$ = $metadata$$15$$.methods[$name$$127$$].internalName;
      $element$$125$$[$name$$127$$] = $internalName$$ ? $model$$89$$[$internalName$$].bind($model$$89$$) : $model$$89$$[$name$$127$$].bind($model$$89$$);
    });
  }
  function $_defineDynamicCompositeProperty$$($element$$126$$, $props$$17$$, $name$$128$$, $metadata$$16$$, $propertyUpdater$$1$$) {
    function $innerSet$$($evt$$inline_880_val$$50$$) {
      var $old$$ = $propertyTracker$$.peek();
      $old$$ !== $evt$$inline_880_val$$50$$ && ($propertyTracker$$($evt$$inline_880_val$$50$$), $propertyUpdater$$1$$.$isInitializing$() || ($evt$$inline_880_val$$50$$ = new CustomEvent($name$$128$$ + "-changed", {detail:{value:$evt$$inline_880_val$$50$$, previousValue:$old$$}}), $element$$126$$.dispatchEvent($evt$$inline_880_val$$50$$)));
    }
    var $propertyTracker$$ = $ko$$6$$.observable();
    $_defineDynamicObjectProperty$$($props$$17$$, $name$$128$$, function() {
      return $propertyTracker$$();
    }, $innerSet$$);
    $_defineDynamicObjectProperty$$($element$$126$$, $name$$128$$, function() {
      return $propertyTracker$$.peek();
    }, function($val$$51$$) {
      if ($metadata$$16$$.readOnly) {
        throw "Read-only property " + $name$$128$$ + " cannot be set";
      }
      $innerSet$$($val$$51$$);
    });
  }
  function $_defineDynamicObjectProperty$$($obj$$55$$, $name$$129$$, $getter$$2$$, $setter$$) {
    Object.defineProperty($obj$$55$$, $name$$129$$, {configurable:!0, enumerable:!0, get:$getter$$2$$, set:$setter$$});
  }
  function $_enumMetadataProperty$$($metadata$$17$$, $property$$26$$, $callback$$109$$) {
    if ($metadata$$17$$) {
      var $properties$$7$$ = $metadata$$17$$[$property$$26$$] || {};
      Object.keys($properties$$7$$).forEach(function($name$$131$$) {
        $callback$$109$$($name$$131$$, $properties$$7$$[$name$$131$$]);
      });
    }
  }
  function $_resetElement$$($element$$128$$, $metadata$$18$$) {
    ["methods", "properties"].forEach(function($type$$91$$) {
      $_enumMetadataProperty$$($metadata$$18$$, $type$$91$$, function($name$$132$$) {
        delete $element$$128$$[$name$$132$$];
      });
    });
  }
  function $_createSlotMap$$($childNodeList_element$$129$$) {
    var $slotMap$$ = {};
    $childNodeList_element$$129$$ = $childNodeList_element$$129$$.childNodes;
    for (var $i$$334$$ = 0;$i$$334$$ < $childNodeList_element$$129$$.length;$i$$334$$++) {
      var $child$$8$$ = $childNodeList_element$$129$$[$i$$334$$];
      if ((1 === $child$$8$$.nodeType || 3 === $child$$8$$.nodeType) && (3 !== $child$$8$$.nodeType || $child$$8$$.nodeValue.trim())) {
        var $savedSlot_slot$$ = $child$$8$$.__oj_slots;
        ($savedSlot_slot$$ = null != $savedSlot_slot$$ ? $savedSlot_slot$$ : $child$$8$$.getAttribute && $child$$8$$.getAttribute("slot")) || ($savedSlot_slot$$ = "");
        $slotMap$$[$savedSlot_slot$$] || ($slotMap$$[$savedSlot_slot$$] = []);
        $slotMap$$[$savedSlot_slot$$].push($child$$8$$);
      }
    }
    return $slotMap$$;
  }
  function $_storeNodes$$($element$$130$$, $view$$3$$) {
    var $nodeStorage$$, $childNodes$$ = $element$$130$$.childNodes;
    if ($childNodes$$) {
      $nodeStorage$$ = document.createElement("div");
      $nodeStorage$$.setAttribute("data-bind", "_ojNodeStorage_");
      $nodeStorage$$.style.display = "none";
      $view$$3$$.push($nodeStorage$$);
      for (var $assignableNodes$$ = [], $i$$335$$ = 0;$i$$335$$ < $childNodes$$.length;$i$$335$$++) {
        var $node$$86$$ = $childNodes$$[$i$$335$$];
        1 !== $node$$86$$.nodeType && 3 !== $node$$86$$.nodeType || $assignableNodes$$.push($node$$86$$);
      }
      $assignableNodes$$.forEach(function($node$$87$$) {
        $nodeStorage$$.appendChild($node$$87$$);
      });
    }
    return $nodeStorage$$;
  }
  function $PropertyUpdater$$($element$$132$$, $bindingContext$$46$$) {
    function $_setPropertyFromAttribute$$($metadata$$19_value$$270$$, $propName$$5$$, $attrVal$$1$$) {
      $_setupExpression$$($attrVal$$1$$, $propName$$5$$, $metadata$$19_value$$270$$) || $metadata$$19_value$$270$$.readOnly || ($metadata$$19_value$$270$$ = $_coerceValue$$($attrVal$$1$$, $metadata$$19_value$$270$$.type), $_setElementProperty$$($propName$$5$$, $metadata$$19_value$$270$$));
    }
    function $_coerceValue$$($val$$52$$, $type$$93$$) {
      switch($type$$93$$.toLowerCase()) {
        case "boolean":
          return Boolean($val$$52$$);
        case "number":
          return Number($val$$52$$);
        case "string":
          return $val$$52$$;
        default:
          return JSON.parse($val$$52$$);
      }
    }
    function $_attributeToPropertyName$$($attr$$18$$) {
      return $attr$$18$$.toLowerCase().replace(/-(.)/g, function($match$$22$$, $group1$$) {
        return $group1$$.toUpperCase();
      });
    }
    function $_setupExpression$$($attrVal$$2_info$$4$$, $propName$$6$$, $metadata$$20$$) {
      $attrVal$$2_info$$4$$ = $oj$$35$$.$ExpressionUtils$.$getExpressionInfo$($attrVal$$2_info$$4$$);
      delete $propsWithLocalValue$$[$propName$$6$$];
      var $changeListener_oldListener_readOnly$$2$$ = $expressionListeners$$[$propName$$6$$];
      $changeListener_oldListener_readOnly$$2$$ && ($changeListener_oldListener_readOnly$$2$$.dispose(), delete $expressionListeners$$[$propName$$6$$]);
      if ($changeListener_oldListener_readOnly$$2$$ = $changeListeners$$[$propName$$6$$]) {
        $element$$132$$.removeEventListener($propName$$6$$ + $_CHANGED_EVENT_SUFFIX$$, $changeListener_oldListener_readOnly$$2$$), delete $changeListeners$$[$propName$$6$$];
      }
      var $cleanupObservableListener$$, $changeListener_oldListener_readOnly$$2$$ = $metadata$$20$$.readOnly;
      $changeListener_oldListener_readOnly$$2$$ || ($cleanupObservableListener$$ = function $$cleanupObservableListener$$$() {
        var $observableListener$$ = $observableListeners$$[$propName$$6$$];
        $observableListener$$ && ($observableListener$$.dispose(), delete $observableListeners$$[$propName$$6$$]);
      }, $cleanupObservableListener$$());
      var $expr$$5$$ = $attrVal$$2_info$$4$$.expr;
      if ($expr$$5$$) {
        var $evaluator$$ = $oj$$35$$.$ComponentBinding$.$__CreateEvaluator$($expr$$5$$);
        $changeListener_oldListener_readOnly$$2$$ || $ko$$6$$.ignoreDependencies(function() {
          $expressionListeners$$[$propName$$6$$] = $ko$$6$$.computed(function() {
            $cleanupObservableListener$$();
            if (!$propsWithLocalValue$$[$propName$$6$$]) {
              var $value$$271$$ = $evaluator$$($bindingContext$$46$$);
              $ko$$6$$.isObservable($value$$271$$) ? $observableListeners$$[$propName$$6$$] = $_setAndWatchObservableValue$$($propName$$6$$, $value$$271$$) : $_setElementProperty$$($propName$$6$$, $value$$271$$);
            }
          });
        });
        $changeListeners$$[$propName$$6$$] = $_listenToPropertyChanges$$($propName$$6$$, $expr$$5$$, $evaluator$$, $metadata$$20$$.writeback && !$attrVal$$2_info$$4$$.$downstreamOnly$);
        return!0;
      }
      return!1;
    }
    function $_setAndWatchObservableValue$$($propName$$7$$, $value$$272$$) {
      $ko$$6$$.ignoreDependencies(function() {
        $_setElementProperty$$($propName$$7$$, $ko$$6$$.utils.unwrapObservable($value$$272$$));
      });
      return $value$$272$$.subscribe(function($newVal$$) {
        $propsWithLocalValue$$[$propName$$7$$] || $_setElementProperty$$($propName$$7$$, $newVal$$);
      });
    }
    function $_listenToPropertyChanges$$($propName$$8$$, $expr$$6$$, $evaluator$$1$$, $writable$$) {
      function $listener$$37$$($evt$$28$$) {
        var $written$$ = !1;
        $_settingProperty$$ || ($writable$$ && $ko$$6$$.ignoreDependencies(function() {
          var $value$$273$$ = $evt$$28$$.detail.value, $target$$88_writerExpr$$1$$ = $evaluator$$1$$($bindingContext$$46$$);
          $ko$$6$$.isWriteableObservable($target$$88_writerExpr$$1$$) ? ($written$$ = !0, $target$$88_writerExpr$$1$$($value$$273$$)) : ($target$$88_writerExpr$$1$$ = $oj$$35$$.$ExpressionUtils$.$getPropertyWriterExpression$($expr$$6$$), null != $target$$88_writerExpr$$1$$ && ($oj$$35$$.$ComponentBinding$.$__CreateEvaluator$($target$$88_writerExpr$$1$$)($bindingContext$$46$$)($value$$273$$), $written$$ = !0));
        }), $written$$ || ($propsWithLocalValue$$[$propName$$8$$] = !0));
      }
      $element$$132$$.addEventListener($propName$$8$$ + $_CHANGED_EVENT_SUFFIX$$, $listener$$37$$);
      return $listener$$37$$;
    }
    function $_propertyNameToAttribute$$($name$$133$$) {
      return $name$$133$$.replace(/([A-Z])/g, function($match$$23$$) {
        return "-" + $match$$23$$.toLowerCase();
      });
    }
    function $_setElementProperty$$($propName$$9$$, $value$$274$$) {
      $_settingProperty$$ = !0;
      try {
        $element$$132$$[$propName$$9$$] = $value$$274$$;
      } finally {
        $_settingProperty$$ = !1;
      }
    }
    this.$setup$ = function $this$$setup$$($metadata$$21_names$$4$$) {
      var $metadataProps$$ = $metadata$$21_names$$4$$.properties;
      if ($metadataProps$$) {
        $originalMethods$$.setAttribute = $element$$132$$.setAttribute;
        $originalMethods$$.removeAttribute = $element$$132$$.removeAttribute;
        $element$$132$$.setAttribute = function $$element$$132$$$setAttribute$($name$$134$$, $value$$275$$) {
          $changeAttribute$$($name$$134$$, $value$$275$$, $originalMethods$$.setAttribute);
        };
        $element$$132$$.removeAttribute = function $$element$$132$$$removeAttribute$($name$$135$$) {
          $changeAttribute$$($name$$135$$, null, $originalMethods$$.removeAttribute);
        };
        var $changeAttribute$$ = function $$changeAttribute$$$($name$$136$$, $value$$276$$, $operation$$7$$) {
          $name$$136$$ = $name$$136$$.toLowerCase();
          var $previousValue$$2$$ = $element$$132$$.getAttribute($name$$136$$);
          $operation$$7$$.apply($element$$132$$, arguments);
          var $newValue$$20$$ = $element$$132$$.getAttribute($name$$136$$), $propName$$10$$ = $_attributeToPropertyName$$($name$$136$$);
          $element$$132$$.hasOwnProperty($propName$$10$$) && $newValue$$20$$ !== $previousValue$$2$$ && $_setPropertyFromAttribute$$($metadataProps$$[$propName$$10$$], $propName$$10$$, $newValue$$20$$);
        };
        $metadata$$21_names$$4$$ = Object.keys($metadataProps$$);
        $_initializing$$ = !0;
        try {
          $metadata$$21_names$$4$$.forEach(function($name$$137$$) {
            var $attrName$$1_attrVal$$3$$ = $_propertyNameToAttribute$$($name$$137$$), $propertyMetadata$$ = $metadataProps$$[$name$$137$$];
            $element$$132$$.hasAttribute($attrName$$1_attrVal$$3$$) ? ($attrName$$1_attrVal$$3$$ = $element$$132$$.getAttribute($attrName$$1_attrVal$$3$$), $_setPropertyFromAttribute$$($propertyMetadata$$, $name$$137$$, $attrName$$1_attrVal$$3$$)) : $propertyMetadata$$.readOnly || ($element$$132$$[$name$$137$$] = $propertyMetadata$$.value);
          });
        } finally {
          $_initializing$$ = !1;
        }
      }
      return this;
    };
    this.$isInitializing$ = function $this$$isInitializing$$() {
      return $_initializing$$;
    };
    this.$teardown$ = function $this$$teardown$$($element$$133$$) {
      var $names$$5$$;
      [$observableListeners$$, $expressionListeners$$].forEach(function($i$$337_listeners$$) {
        $names$$5$$ = Object.keys($i$$337_listeners$$);
        for ($i$$337_listeners$$ = 0;$i$$337_listeners$$ < $names$$5$$.length;$i$$337_listeners$$++) {
          $expressionListeners$$[$names$$5$$[$i$$337_listeners$$]].dispose();
        }
      });
      $observableListeners$$ = {};
      $expressionListeners$$ = {};
      $names$$5$$ = Object.keys($originalMethods$$);
      var $i$$336$$;
      for ($i$$336$$ = 0;$i$$336$$ < $names$$5$$.length;$i$$336$$++) {
        var $method$$7_prop$$71$$ = $names$$5$$[$i$$336$$];
        $element$$133$$[$method$$7_prop$$71$$] = $originalMethods$$[$method$$7_prop$$71$$];
      }
      $originalMethods$$ = {};
      $names$$5$$ = Object.keys($changeListeners$$);
      for ($i$$336$$ = 0;$i$$336$$ < $names$$5$$.length;$i$$336$$++) {
        $method$$7_prop$$71$$ = $names$$5$$[$i$$336$$], $element$$133$$.removeEventListener($method$$7_prop$$71$$ + $_CHANGED_EVENT_SUFFIX$$, $changeListeners$$[$method$$7_prop$$71$$]);
      }
      $changeListeners$$ = {};
    };
    var $expressionListeners$$ = {}, $observableListeners$$ = {}, $changeListeners$$ = {}, $originalMethods$$ = {}, $propsWithLocalValue$$ = {}, $_initializing$$, $_settingProperty$$, $_CHANGED_EVENT_SUFFIX$$ = "-changed";
  }
  (function() {
    $oj$$35$$.$__KO_CUSTOM_BINDING_PROVIDER_INSTANCE$.$addPostprocessor$({nodeHasBindings:function($node$$88$$, $wrappedReturn$$) {
      return $wrappedReturn$$ || 1 === $node$$88$$.nodeType && $oj$$35$$.$Composite$.$__GetDescriptor$($node$$88$$.nodeName.toLowerCase());
    }, getBindingAccessors:function($name$$138_node$$89$$, $bindingContext$$47$$, $wrappedReturn$$1$$) {
      if (1 === $name$$138_node$$89$$.nodeType && ($name$$138_node$$89$$ = $name$$138_node$$89$$.nodeName.toLowerCase(), $oj$$35$$.$Composite$.$__GetDescriptor$($name$$138_node$$89$$))) {
        $wrappedReturn$$1$$ = $wrappedReturn$$1$$ || {};
        if ($wrappedReturn$$1$$.ojComposite) {
          throw "Cannot use ojComposite binding on a custom element whose name is already registered for a composite binding";
        }
        var $bindingValue$$2$$ = {name:$name$$138_node$$89$$};
        $wrappedReturn$$1$$.ojComposite = function $$wrappedReturn$$1$$$ojComposite$() {
          return $bindingValue$$2$$;
        };
      }
      return $wrappedReturn$$1$$;
    }, preprocessNode:function($node$$90$$, $wrappedReturn$$2$$) {
      var $attrs$$22_newNodes$$;
      if (1 === $node$$90$$.nodeType && "oj-slot" === $node$$90$$.nodeName.toLowerCase()) {
        $attrs$$22_newNodes$$ = ["name", "slot", "index"];
        for (var $binding$$8_closeComment$$ = "ko _ojSlot_:{", $parent$$42_valueExpressions$$ = [], $child$$9_i$$338_openComment$$ = 0;$child$$9_i$$338_openComment$$ < $attrs$$22_newNodes$$.length;$child$$9_i$$338_openComment$$++) {
          var $attr$$19$$ = $attrs$$22_newNodes$$[$child$$9_i$$338_openComment$$], $attrValue$$inline_886_expr$$7$$;
          $attrValue$$inline_886_expr$$7$$ = $node$$90$$.getAttribute($attr$$19$$);
          if (null != $attrValue$$inline_886_expr$$7$$) {
            var $exp$$inline_887$$ = $oj$$35$$.$ExpressionUtils$.$getExpressionInfo$($attrValue$$inline_886_expr$$7$$).expr;
            null == $exp$$inline_887$$ && ($exp$$inline_887$$ = "'" + $attrValue$$inline_886_expr$$7$$ + "'");
            $attrValue$$inline_886_expr$$7$$ = $exp$$inline_887$$;
          } else {
            $attrValue$$inline_886_expr$$7$$ = null;
          }
          $attrValue$$inline_886_expr$$7$$ && $parent$$42_valueExpressions$$.push($attr$$19$$ + ":" + $attrValue$$inline_886_expr$$7$$);
        }
        $binding$$8_closeComment$$ += $parent$$42_valueExpressions$$.join(",");
        $child$$9_i$$338_openComment$$ = document.createComment($binding$$8_closeComment$$ + "}");
        $binding$$8_closeComment$$ = document.createComment("/ko");
        $attrs$$22_newNodes$$ = [$child$$9_i$$338_openComment$$];
        $parent$$42_valueExpressions$$ = $node$$90$$.parentNode;
        for ($parent$$42_valueExpressions$$.insertBefore($child$$9_i$$338_openComment$$, $node$$90$$);0 < $node$$90$$.childNodes.length;) {
          $child$$9_i$$338_openComment$$ = $node$$90$$.childNodes[0], $parent$$42_valueExpressions$$.insertBefore($child$$9_i$$338_openComment$$, $node$$90$$), $attrs$$22_newNodes$$.push($child$$9_i$$338_openComment$$);
        }
        $attrs$$22_newNodes$$.push($binding$$8_closeComment$$);
        $parent$$42_valueExpressions$$.replaceChild($binding$$8_closeComment$$, $node$$90$$);
      }
      return $attrs$$22_newNodes$$ ? $attrs$$22_newNodes$$ : $wrappedReturn$$2$$;
    }});
  })();
  $oj$$35$$.$Composite$ = {};
  $oj$$35$$.$Composite$.$defaults$ = {initializeMethod:"initialize", activatedMethod:"activated", attachedMethod:"attached", bindingsAppliedMethod:"bindingsApplied", disposeMethod:"dispose"};
  $goog$exportPath_$$("Composite.defaults", $oj$$35$$.$Composite$.$defaults$, $oj$$35$$);
  $oj$$35$$.$Composite$.register = function $$oj$$35$$$$Composite$$register$($name$$139$$, $descriptor$$3$$) {
    $oj$$35$$.$Composite$.$_registry$[$name$$139$$] = $descriptor$$3$$;
  };
  $goog$exportPath_$$("Composite.register", $oj$$35$$.$Composite$.register, $oj$$35$$);
  $oj$$35$$.$Composite$.$__GetDescriptor$ = function $$oj$$35$$$$Composite$$$__GetDescriptor$$($name$$140$$) {
    return $oj$$35$$.$Composite$.$_registry$[$name$$140$$];
  };
  $oj$$35$$.$Composite$.$_registry$ = {};
  $ko$$6$$.bindingHandlers.ojComposite = {init:function $$ko$$6$$$bindingHandlers$ojComposite$init$() {
    return{controlsDescendantBindings:!0};
  }, update:function $$ko$$6$$$bindingHandlers$ojComposite$update$($element$$135$$, $valueAccessor$$26$$, $allBindingsAccessor$$22$$, $viewModel$$5$$, $bindingContext$$49$$) {
    function $cleanup$$1$$($isNodeDispose$$) {
      $propertyUpdater$$2$$ && ($propertyUpdater$$2$$.$teardown$($element$$135$$), $propertyUpdater$$2$$ = null);
      $nodeDisposed$$ = $isNodeDispose$$;
      $_invokeCompositeViewModelMethod$$($childViewModel$$, "disposeMethod", [$element$$135$$]);
      $childViewModel$$ = null;
      $compMetadata$$ && $_resetElement$$($element$$135$$, $compMetadata$$);
      $nodeStorage$$1$$ && ($element$$135$$.removeChild($nodeStorage$$1$$), $nodeStorage$$1$$ = null);
      $compMetadata$$ = null;
      $props$$21$$ = {};
    }
    function $wrapToCheckLoadId$$($func$$11$$) {
      return function($id$$35$$) {
        if ($nodeDisposed$$ || $id$$35$$ != $pendingLoadId$$) {
          throw $_INTERRUPTED_ERROR$$;
        }
        return $func$$11$$.apply(this, Array.prototype.slice.call(arguments, 1));
      }.bind(null, $pendingLoadId$$);
    }
    var $_INTERRUPTED_ERROR$$ = Error(), $childViewModel$$, $propertyUpdater$$2$$, $pendingLoadId$$ = -1, $nodeDisposed$$ = !1, $compMetadata$$, $props$$21$$ = {}, $nodeStorage$$1$$, $unwrap$$ = $ko$$6$$.utils.unwrapObservable;
    $ko$$6$$.ignoreDependencies(function() {
      $ko$$6$$.computed(function() {
        $pendingLoadId$$++;
        $element$$135$$.dispatchEvent(new CustomEvent("pending", {bubbles:!0}));
        $cleanup$$1$$(!1);
        var $name$$141_propertiesInitializedPromise_value$$277$$ = $unwrap$$($valueAccessor$$26$$()) || {}, $name$$141_propertiesInitializedPromise_value$$277$$ = $unwrap$$($name$$141_propertiesInitializedPromise_value$$277$$.name), $cssPromise_descriptor$$4$$ = $oj$$35$$.$Composite$.$__GetDescriptor$($name$$141_propertiesInitializedPromise_value$$277$$);
        if (!$cssPromise_descriptor$$4$$) {
          throw "Composite is missing a descriptor";
        }
        var $metadataPromise_modelInstancePromise_slotsPromise$$ = $_getResourcePromise$$($cssPromise_descriptor$$4$$, "metadata"), $name$$141_propertiesInitializedPromise_value$$277$$ = null;
        $metadataPromise_modelInstancePromise_slotsPromise$$ && ($name$$141_propertiesInitializedPromise_value$$277$$ = $metadataPromise_modelInstancePromise_slotsPromise$$.then($wrapToCheckLoadId$$(function($metadata$$22$$) {
          $metadata$$22$$ ? ($compMetadata$$ = $metadata$$22$$, $propertyUpdater$$2$$ = new $PropertyUpdater$$($element$$135$$, $bindingContext$$49$$), $_setupProperties$$($element$$135$$, $props$$21$$, $metadata$$22$$, $propertyUpdater$$2$$), $propertyUpdater$$2$$.$setup$($metadata$$22$$)) : $oj$$35$$.$Logger$.$warning$("ojComposite is being loaded without metadata. No element properties will be set up");
          return $props$$21$$;
        })));
        var $resolveSlotsPromise$$, $metadataPromise_modelInstancePromise_slotsPromise$$ = new Promise(function($resolve$$50$$) {
          $resolveSlotsPromise$$ = $resolve$$50$$;
        }), $unique$$1$$ = $_UNIQUE$$ + $_UNIQUE_INCR$$++, $vmContext$$ = {element:$element$$135$$, props:$name$$141_propertiesInitializedPromise_value$$277$$, slotNodeCounts:$metadataPromise_modelInstancePromise_slotsPromise$$, unique:$unique$$1$$}, $metadataPromise_modelInstancePromise_slotsPromise$$ = null, $activatedPromise_modelPromise$$ = $_getResourcePromise$$($cssPromise_descriptor$$4$$, "viewModel");
        $activatedPromise_modelPromise$$ && ($metadataPromise_modelInstancePromise_slotsPromise$$ = $activatedPromise_modelPromise$$.then($wrapToCheckLoadId$$(function($model$$90$$) {
          return $model$$90$$ = "function" === typeof $model$$90$$ ? new $model$$90$$($vmContext$$) : $_invokeCompositeViewModelMethod$$($model$$90$$, "initializeMethod", [$vmContext$$]) || $model$$90$$;
        })));
        $activatedPromise_modelPromise$$ = null;
        $metadataPromise_modelInstancePromise_slotsPromise$$ && ($activatedPromise_modelPromise$$ = $metadataPromise_modelInstancePromise_slotsPromise$$.then($wrapToCheckLoadId$$(function($model$$91$$) {
          return $_invokeCompositeViewModelMethod$$($model$$91$$, "activatedMethod", [$vmContext$$]);
        })));
        var $viewPromise$$ = $_getResourcePromise$$($cssPromise_descriptor$$4$$, "view");
        $viewPromise$$ && ($viewPromise$$ = $viewPromise$$.then($wrapToCheckLoadId$$(function($content$$inline_900_view$$4$$) {
          if ("string" === typeof $content$$inline_900_view$$4$$) {
            $content$$inline_900_view$$4$$ = $ko$$6$$.utils.parseHtmlFragment($content$$inline_900_view$$4$$);
          } else {
            if (window.DocumentFragment ? $content$$inline_900_view$$4$$ instanceof DocumentFragment : $content$$inline_900_view$$4$$ && 11 === $content$$inline_900_view$$4$$.nodeType) {
              $content$$inline_900_view$$4$$ = $ko$$6$$.utils.arrayPushAll([], $content$$inline_900_view$$4$$.childNodes);
            } else {
              if (Array.isArray($content$$inline_900_view$$4$$)) {
                $content$$inline_900_view$$4$$ = $ko$$6$$.utils.arrayPushAll([], $content$$inline_900_view$$4$$);
              } else {
                throw "The View (" + $content$$inline_900_view$$4$$ + ") has an unsupported type";
              }
            }
          }
          return $content$$inline_900_view$$4$$;
        })));
        ($cssPromise_descriptor$$4$$ = $_getResourcePromise$$($cssPromise_descriptor$$4$$, "css")) && ($cssPromise_descriptor$$4$$ = $cssPromise_descriptor$$4$$.then($wrapToCheckLoadId$$(function($css$$) {
          var $style$$8$$ = document.createElement("style");
          $style$$8$$.type = "text/css";
          $style$$8$$.styleSheet ? $style$$8$$.styleSheet.cssText = $css$$ : $style$$8$$.appendChild(document.createTextNode($css$$));
          document.head.appendChild($style$$8$$);
        })));
        $ko$$6$$.applyBindingsToDescendants($bindingContext$$49$$, $element$$135$$);
        Promise.all([$viewPromise$$, $metadataPromise_modelInstancePromise_slotsPromise$$, $name$$141_propertiesInitializedPromise_value$$277$$, $cssPromise_descriptor$$4$$, $activatedPromise_modelPromise$$]).then(function($id$$36$$, $values$$13$$) {
          if (!$nodeDisposed$$ && $id$$36$$ == $pendingLoadId$$) {
            var $childBindingContext_view$$5$$ = $values$$13$$[0];
            if (!$childBindingContext_view$$5$$) {
              throw "ojComposite is missing a View";
            }
            var $slotMap$$1$$ = $_createSlotMap$$($element$$135$$), $slotNodeCounts$$ = {}, $slot$$1$$;
            for ($slot$$1$$ in $slotMap$$1$$) {
              $slotNodeCounts$$[$slot$$1$$] = $slotMap$$1$$[$slot$$1$$].length;
            }
            $resolveSlotsPromise$$($slotNodeCounts$$);
            $nodeStorage$$1$$ = $_storeNodes$$($element$$135$$, $childBindingContext_view$$5$$);
            $ko$$6$$.virtualElements.setDomNodeChildren($element$$135$$, $childBindingContext_view$$5$$);
            $childViewModel$$ = $values$$13$$[1];
            $_invokeCompositeViewModelMethod$$($childViewModel$$, "attachedMethod", [$vmContext$$]);
            $childBindingContext_view$$5$$ = $bindingContext$$49$$.createChildContext($childViewModel$$, void 0, function($ctx$$3$$) {
              $ctx$$3$$.__oj_slots = $slotMap$$1$$;
              $ctx$$3$$.__oj_nodestorage = $nodeStorage$$1$$;
              $ctx$$3$$.$slotNodeCounts = $slotNodeCounts$$;
              $ctx$$3$$.$props = $props$$21$$;
              $ctx$$3$$.$unique = $unique$$1$$;
            });
            $compMetadata$$ && $childViewModel$$ && $_setupMethods$$($element$$135$$, $compMetadata$$, $childViewModel$$);
            $ko$$6$$.applyBindingsToDescendants($childBindingContext_view$$5$$, $element$$135$$);
            $_invokeCompositeViewModelMethod$$($childViewModel$$, "bindingsAppliedMethod", [$vmContext$$]);
            $element$$135$$.dispatchEvent(new CustomEvent("ready", {bubbles:!0}));
          }
        }.bind(null, $pendingLoadId$$), function($id$$37$$, $reason$$6$$) {
          $reason$$6$$ !== $_INTERRUPTED_ERROR$$ && null != $reason$$6$$ && $oj$$35$$.$Logger$.error($reason$$6$$);
        }.bind(null, $pendingLoadId$$));
      }, null, {disposeWhenNodeIsRemoved:$element$$135$$});
    });
    $ko$$6$$.utils.domNodeDisposal.addDisposeCallback($element$$135$$, $cleanup$$1$$.bind(null, !0, $bindingContext$$49$$));
  }};
  var $_UNIQUE_INCR$$ = 0, $_UNIQUE$$ = "_ojcomposite";
  $ko$$6$$.bindingHandlers._ojNodeStorage_ = {init:function $$ko$$6$$$bindingHandlers$_ojNodeStorage_$init$() {
    return{controlsDescendantBindings:!0};
  }};
  $ko$$6$$.bindingHandlers._ojSlot_ = {init:function $$ko$$6$$$bindingHandlers$_ojSlot_$init$($element$$136$$, $valueAccessor$$27_values$$14$$, $allBindingsAccessor$$23_unwrap$$1$$, $assignedNodes_slots_viewModel$$6$$, $bindingContext$$51_i$$339_slotName$$) {
    $ko$$6$$.utils.domNodeDisposal.addDisposeCallback($element$$136$$, function cleanup$$2($bindingContext$$52_nodeStorage$$2$$) {
      if ($bindingContext$$52_nodeStorage$$2$$ = $bindingContext$$52_nodeStorage$$2$$.__oj_nodestorage) {
        for (var $node$$92$$;$node$$92$$ = $ko$$6$$.virtualElements.firstChild($element$$136$$);) {
          null != $node$$92$$.__oj_slots && $bindingContext$$52_nodeStorage$$2$$.appendChild($node$$92$$);
        }
      }
    }.bind(null, $bindingContext$$51_i$$339_slotName$$));
    $assignedNodes_slots_viewModel$$6$$ = $bindingContext$$51_i$$339_slotName$$.__oj_slots;
    $valueAccessor$$27_values$$14$$ = $valueAccessor$$27_values$$14$$();
    $allBindingsAccessor$$23_unwrap$$1$$ = $ko$$6$$.utils.unwrapObservable;
    $bindingContext$$51_i$$339_slotName$$ = $allBindingsAccessor$$23_unwrap$$1$$($valueAccessor$$27_values$$14$$.name) || "";
    var $index$$213$$ = $allBindingsAccessor$$23_unwrap$$1$$($valueAccessor$$27_values$$14$$.index);
    if ($assignedNodes_slots_viewModel$$6$$ = null != $index$$213$$ ? [$assignedNodes_slots_viewModel$$6$$[$bindingContext$$51_i$$339_slotName$$][$index$$213$$]] : $assignedNodes_slots_viewModel$$6$$[$bindingContext$$51_i$$339_slotName$$]) {
      for ($bindingContext$$51_i$$339_slotName$$ = 0;$bindingContext$$51_i$$339_slotName$$ < $assignedNodes_slots_viewModel$$6$$.length;$bindingContext$$51_i$$339_slotName$$++) {
        $assignedNodes_slots_viewModel$$6$$[$bindingContext$$51_i$$339_slotName$$].__oj_slots = $allBindingsAccessor$$23_unwrap$$1$$($valueAccessor$$27_values$$14$$.slot) || "";
      }
      $ko$$6$$.virtualElements.setDomNodeChildren($element$$136$$, $assignedNodes_slots_viewModel$$6$$);
      return{controlsDescendantBindings:!0};
    }
  }};
  $ko$$6$$.virtualElements.allowedBindings._ojSlot_ = !0;
});
