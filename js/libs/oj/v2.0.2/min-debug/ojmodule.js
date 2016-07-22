/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise"], function($oj$$53$$, $ko$$8$$) {
  $oj$$53$$.$ModuleBinding$ = {};
  $oj$$53$$.$ModuleBinding$.$defaults$ = {viewPath:"text!views/", viewSuffix:".html", modelPath:"viewModels/", initializeMethod:"initialize", disposeMethod:"dispose", activatedHandler:"handleActivated", attachedHandler:"handleAttached", detachedHandler:"handleDetached", bindingsAppliedHandler:"handleBindingsApplied", deactivatedHandler:"handleDeactivated", transitionCompletedHandler:"handleTransitionCompleted"};
  $goog$exportPath_$$("ModuleBinding.defaults", $oj$$53$$.$ModuleBinding$.$defaults$, $oj$$53$$);
  (function() {
    function $_animate$$($actx$$, $animation$$, $element$$152$$, $oldDomNodes$$, $insertAndActivateFunc$$, $removeOldDomNodes$$, $transitionComplete$$) {
      var $canAnimateFunc_settings$$4$$ = $animation$$.canAnimate;
      if (null == $canAnimateFunc_settings$$4$$ || $canAnimateFunc_settings$$4$$.call($animation$$, $actx$$)) {
        var $newViewParent$$, $oldViewParent$$;
        if ($canAnimateFunc_settings$$4$$ = $animation$$.prepareAnimation.call($animation$$, $actx$$)) {
          $newViewParent$$ = $canAnimateFunc_settings$$4$$.newViewParent, $oldViewParent$$ = $canAnimateFunc_settings$$4$$.oldViewParent;
        }
        var $targetElement$$ = $newViewParent$$ || $element$$152$$;
        $oldViewParent$$ && $oldViewParent$$ !== $element$$152$$ ? $_moveDomNodes$$($oldDomNodes$$, $oldViewParent$$) : $targetElement$$ === $element$$152$$ && $removeOldDomNodes$$(null);
        $targetElement$$ !== $element$$152$$ && $ko$$8$$.virtualElements.setDomNodeChildren($targetElement$$, []);
        $insertAndActivateFunc$$($targetElement$$);
        var $newDomNodes$$ = Array.prototype.slice.call($targetElement$$.childNodes), $viewInserted$$ = !1, $insertNewView$$ = function $$insertNewView$$$() {
          $viewInserted$$ || ($viewInserted$$ = !0, $element$$152$$ !== $targetElement$$ && $_insertNodes$$($element$$152$$, $newDomNodes$$));
        }, $removeOldView$$ = $removeOldDomNodes$$.bind(null, $oldViewParent$$);
        $actx$$.newViewParent = $newViewParent$$;
        $actx$$.oldViewParent = $oldViewParent$$;
        $actx$$.oldViewNodes = $oldDomNodes$$;
        $actx$$.removeOldView = $removeOldView$$;
        $actx$$.insertNewView = $insertNewView$$;
        var $postAnimation$$ = function $$postAnimation$$$() {
          $removeOldView$$();
          $insertNewView$$();
          $transitionComplete$$();
        };
        return $animation$$.animate.call($animation$$, $actx$$).then($postAnimation$$, function() {
          $postAnimation$$();
          $oj$$53$$.$Logger$.error("ojModule animation promise was rejected");
        });
      }
    }
    function $_detachOldView$$($element$$153$$, $oldViewParent$$1$$, $cacheHolder$$) {
      $oldViewParent$$1$$ = $oldViewParent$$1$$ || $element$$153$$;
      var $empty$$3$$ = [];
      $cacheHolder$$ && $element$$153$$ === $oldViewParent$$1$$ && ($cacheHolder$$.parentNode.removeChild($cacheHolder$$), $empty$$3$$.push($cacheHolder$$));
      $ko$$8$$.virtualElements.setDomNodeChildren($oldViewParent$$1$$, $empty$$3$$);
    }
    function $_moveDomNodes$$($nodes$$, $target$$97$$) {
      $nodes$$.forEach(function($n$$26$$) {
        $target$$97$$.appendChild($n$$26$$);
      });
    }
    function $_invokeLifecycleListener$$($listener$$42$$, $method$$8$$, $params$$24$$) {
      if ($listener$$42$$ && $listener$$42$$[$method$$8$$]) {
        var $data$$166$$ = {element:$params$$24$$[0], valueAccessor:$params$$24$$[1]};
        2 < $params$$24$$.length && ($data$$166$$.viewModel = $params$$24$$[2], 3 < $params$$24$$.length && ($data$$166$$["boolean" === typeof $params$$24$$[3] ? "fromCache" : "cachedNodes"] = $params$$24$$[3]));
        return $ko$$8$$.ignoreDependencies($listener$$42$$[$method$$8$$], $listener$$42$$, [$data$$166$$]);
      }
    }
    function $_invokeViewModelMethod$$($model$$100$$, $handler$$52_key$$171_name$$144$$, $params$$25$$) {
      if (null != $model$$100$$ && ($handler$$52_key$$171_name$$144$$ = $oj$$53$$.$ModuleBinding$.$defaults$[$handler$$52_key$$171_name$$144$$], null != $handler$$52_key$$171_name$$144$$ && $model$$100$$ && ($handler$$52_key$$171_name$$144$$ = $model$$100$$[$handler$$52_key$$171_name$$144$$], "function" === typeof $handler$$52_key$$171_name$$144$$))) {
        var $data$$167$$ = void 0;
        $params$$25$$ && ($data$$167$$ = {element:$params$$25$$[0], valueAccessor:$params$$25$$[1]}, 2 < $params$$25$$.length && ($data$$167$$["boolean" === typeof $params$$25$$[2] ? "fromCache" : "cachedNodes"] = $params$$25$$[2]));
        return $ko$$8$$.ignoreDependencies($handler$$52_key$$171_name$$144$$, $model$$100$$, [$data$$167$$]);
      }
    }
    function $_getContainedNodes$$($container$$31_node$$110$$, $cacheHolder$$1$$, $endCommentNode$$) {
      var $childList$$ = [];
      for ($container$$31_node$$110$$ = $ko$$8$$.virtualElements.firstChild($container$$31_node$$110$$);null != $container$$31_node$$110$$ && $container$$31_node$$110$$ != $endCommentNode$$;$container$$31_node$$110$$ = $container$$31_node$$110$$.nextSibling) {
        $container$$31_node$$110$$ != $cacheHolder$$1$$ && $childList$$.push($container$$31_node$$110$$);
      }
      return $childList$$;
    }
    function $_getKoNodes$$($container$$32$$, $cacheHolder$$2$$) {
      var $nodes$$1$$ = [], $firstChild$$2$$ = $ko$$8$$.virtualElements.firstChild($container$$32$$);
      $_koNodesForEach$$($firstChild$$2$$, $cacheHolder$$2$$, function($node$$111$$) {
        $nodes$$1$$.push($node$$111$$);
      });
      return $nodes$$1$$;
    }
    function $_koNodesForEach$$($first$$9_node$$112$$, $cacheHolder$$3$$, $callback$$113$$) {
      for (;null != $first$$9_node$$112$$;) {
        var $next$$9$$ = $ko$$8$$.virtualElements.nextSibling($first$$9_node$$112$$), $type$$100$$ = $first$$9_node$$112$$.nodeType;
        $first$$9_node$$112$$ === $cacheHolder$$3$$ || 1 !== $type$$100$$ && 8 !== $type$$100$$ || $callback$$113$$($first$$9_node$$112$$);
        $first$$9_node$$112$$ = $next$$9$$;
      }
    }
    function $_insertNodes$$($container$$33$$, $nodes$$2$$) {
      for (var $i$$417$$ = $nodes$$2$$.length - 1;0 <= $i$$417$$;$i$$417$$--) {
        $ko$$8$$.virtualElements.prepend($container$$33$$, $nodes$$2$$[$i$$417$$]);
      }
    }
    function $_propagateSubtreeVisibilityToComponents$$($nodeArray$$, $visible$$) {
      if (null != $oj$$53$$.Components) {
        for (var $i$$418$$ = 0;$i$$418$$ < $nodeArray$$.length;$i$$418$$++) {
          $visible$$ ? $oj$$53$$.Components.$subtreeShown$($nodeArray$$[$i$$418$$]) : $oj$$53$$.Components.$subtreeHidden$($nodeArray$$[$i$$418$$]);
        }
      }
    }
    function $_getDomNodes$$1$$($content$$29$$) {
      if ("string" === typeof $content$$29$$) {
        $content$$29$$ = $ko$$8$$.utils.parseHtmlFragment($content$$29$$);
      } else {
        if (window.DocumentFragment ? $content$$29$$ instanceof DocumentFragment : $content$$29$$ && 11 === $content$$29$$.nodeType) {
          $content$$29$$ = $ko$$8$$.utils.arrayPushAll([], $content$$29$$.childNodes);
        } else {
          if (Array.isArray($content$$29$$)) {
            $content$$29$$ = $ko$$8$$.utils.arrayPushAll([], $content$$29$$);
          } else {
            throw "The View (" + $content$$29$$ + ") has an unsupported type";
          }
        }
      }
      return $content$$29$$;
    }
    function $_getRequirePromise$$($module$$1$$) {
      return new Promise(function($resolve$$61$$) {
        require([$module$$1$$], function($loaded$$) {
          $resolve$$61$$($loaded$$);
        }, function() {
          throw Error("ojModule failed to load " + $module$$1$$);
        });
      });
    }
    function $_createNoFailPromise$$($promise$$4$$) {
      return $promise$$4$$ ? new Promise(function($resolve$$62$$) {
        $promise$$4$$.then($resolve$$62$$, $resolve$$62$$);
      }) : $promise$$4$$;
    }
    $ko$$8$$.bindingHandlers.ojModule = {init:function $$ko$$8$$$bindingHandlers$ojModule$init$($element$$154$$, $valueAccessor$$29$$, $allBindingsAccessor$$24$$, $viewModel$$7$$, $bindingContext$$53$$) {
      function $checkPeningId$$($id$$42$$) {
        if ($id$$42$$ != $pendingViewId$$) {
          throw Error("Promise cancelled because ojModule is fetching new View and ViewModel");
        }
      }
      function $invokeModelDispose$$($model$$101$$) {
        $_invokeViewModelMethod$$($model$$101$$, "disposeMethod", [$element$$154$$, $valueAccessor$$29$$]);
      }
      var $currentViewModel$$, $currentAnimationPromise$$, $cache$$ = {}, $currentCacheKey$$, $pendingViewId$$ = -1, $cacheHolder$$4$$, $endCommentNode$$1$$;
      $ko$$8$$.utils.domNodeDisposal.addDisposeCallback($element$$154$$, function() {
        $invokeModelDispose$$($currentViewModel$$);
        for (var $keys$$43$$ = Object.keys($cache$$), $i$$419$$ = 0;$i$$419$$ < $keys$$43$$.length;$i$$419$$++) {
          $invokeModelDispose$$($cache$$[$keys$$43$$[$i$$419$$]].$model$);
        }
      });
      8 === $element$$154$$.nodeType && ($ko$$8$$.virtualElements.setDomNodeChildren($element$$154$$, []), $endCommentNode$$1$$ = $element$$154$$.nextSibling);
      $ko$$8$$.computed(function() {
        $pendingViewId$$++;
        var $isInitial$$1$$ = 0 === $pendingViewId$$, $attachPromise_unwrap$$2$$ = $ko$$8$$.utils.unwrapObservable, $value$$300$$ = $attachPromise_unwrap$$2$$($valueAccessor$$29$$()), $moduleName$$, $viewName$$, $params$$26$$, $modelFactory$$, $viewFunction$$, $cacheKey$$, $lifecycleListener$$, $animation$$1$$;
        "string" === typeof $value$$300$$ ? $moduleName$$ = $value$$300$$ : ($moduleName$$ = $attachPromise_unwrap$$2$$($value$$300$$.name), $viewName$$ = $attachPromise_unwrap$$2$$($value$$300$$.viewName), $params$$26$$ = $attachPromise_unwrap$$2$$($value$$300$$.params), $modelFactory$$ = $attachPromise_unwrap$$2$$($value$$300$$.viewModelFactory), $viewFunction$$ = $attachPromise_unwrap$$2$$($value$$300$$.createViewFunction), $cacheKey$$ = $attachPromise_unwrap$$2$$($value$$300$$.cacheKey), $lifecycleListener$$ = 
        $attachPromise_unwrap$$2$$($value$$300$$.lifecycleListener), $animation$$1$$ = $attachPromise_unwrap$$2$$($value$$300$$.animation));
        var $attachPromise_unwrap$$2$$ = $_invokeLifecycleListener$$($lifecycleListener$$, "activated", [$element$$154$$, $valueAccessor$$29$$]), $viewPromise$$1$$, $modelPromise$$1$$, $cached$$2$$ = null == $cacheKey$$ ? null : $cache$$[$cacheKey$$];
        if (null != $cached$$2$$) {
          delete $cache$$[$cacheKey$$], $viewPromise$$1$$ = Promise.resolve($cached$$2$$.view), $modelPromise$$1$$ = Promise.resolve($cached$$2$$.$model$);
        } else {
          if (null != $modelFactory$$ && ($modelPromise$$1$$ = $ko$$8$$.ignoreDependencies($modelFactory$$.createViewModel, $modelFactory$$, [$params$$26$$, $valueAccessor$$29$$])), null == $modelPromise$$1$$ && null != $moduleName$$ && ($modelPromise$$1$$ = $_getRequirePromise$$($oj$$53$$.$ModuleBinding$.$defaults$.modelPath + $moduleName$$)), null != $modelPromise$$1$$ && ($modelPromise$$1$$ = $modelPromise$$1$$.then(function($id$$43$$, $viewModel$$8$$) {
            $checkPeningId$$($id$$43$$);
            return $viewModel$$8$$ = "function" === typeof $viewModel$$8$$ ? new $viewModel$$8$$($params$$26$$) : $_invokeViewModelMethod$$($viewModel$$8$$, "initializeMethod", [$element$$154$$, $valueAccessor$$29$$]) || $viewModel$$8$$;
          }.bind(null, $pendingViewId$$)), null != $viewFunction$$ && ($viewPromise$$1$$ = $modelPromise$$1$$.then(function($id$$44$$, $model$$103$$) {
            $checkPeningId$$($id$$44$$);
            if (null == $model$$103$$) {
              throw "createViewFunction option cannot be used when the ViewModel is null";
            }
            var $viewMethod$$ = $model$$103$$[$viewFunction$$];
            if (null == $viewMethod$$) {
              throw "function specified by the createViewFunction option was not found on the ViewModel";
            }
            return $viewMethod$$.call($model$$103$$);
          }.bind(null, $pendingViewId$$)))), null == $viewPromise$$1$$) {
            if ($viewName$$ = null == $viewName$$ ? $moduleName$$ : $viewName$$, null != $viewName$$) {
              $viewPromise$$1$$ = $_getRequirePromise$$($oj$$53$$.$ModuleBinding$.$defaults$.viewPath + $viewName$$ + $oj$$53$$.$ModuleBinding$.$defaults$.viewSuffix);
            } else {
              throw Error("View name must be specified");
            }
          }
        }
        if (null == $viewPromise$$1$$) {
          throw Error("ojModule is missing a View");
        }
        var $modelAttachPromise$$;
        null != $modelPromise$$1$$ && ($modelAttachPromise$$ = $modelPromise$$1$$.then(function($id$$45$$, $viewModel$$9$$) {
          $checkPeningId$$($id$$45$$);
          return $_invokeViewModelMethod$$($viewModel$$9$$, "activatedHandler", [$element$$154$$, $valueAccessor$$29$$]);
        }.bind(null, $pendingViewId$$)));
        Promise.all([$viewPromise$$1$$, $modelPromise$$1$$, $attachPromise_unwrap$$2$$, $modelAttachPromise$$, $currentAnimationPromise$$]).then(function($id$$46$$, $values$$15$$) {
          if ($id$$46$$ == $pendingViewId$$) {
            var $removeOldDomNodes$$1_view$$6$$ = $values$$15$$[0];
            if (null == $removeOldDomNodes$$1_view$$6$$) {
              throw "The module's View was resolved to null";
            }
            var $nodes$$3$$ = $_getDomNodes$$1$$($removeOldDomNodes$$1_view$$6$$), $model$$104$$ = $values$$15$$[1], $saveInCache$$ = !1, $cachedNodeArray$$, $oldDomNodes$$1$$ = $_getContainedNodes$$($element$$154$$, $cacheHolder$$4$$, $endCommentNode$$1$$), $oldKoNodes$$ = $_getKoNodes$$($element$$154$$, $cacheHolder$$4$$);
            null != $currentCacheKey$$ && ($saveInCache$$ = !0, $cachedNodeArray$$ = $oldDomNodes$$1$$, $cacheHolder$$4$$ || ($cacheHolder$$4$$ = document.createElement("div"), $cacheHolder$$4$$.className = "oj-helper-module-cache", $ko$$8$$.virtualElements.prepend($element$$154$$, $cacheHolder$$4$$)));
            var $oldNodesRemoved$$ = !1, $removeOldDomNodes$$1_view$$6$$ = function $$removeOldDomNodes$$1_view$$6$$$($oldViewParent$$2$$) {
              $oldNodesRemoved$$ || ($oldNodesRemoved$$ = !0, $saveInCache$$ ? $_moveDomNodes$$($oldDomNodes$$1$$, $cacheHolder$$4$$) : $oldKoNodes$$.forEach(function($n$$27$$) {
                $ko$$8$$.cleanNode($n$$27$$);
              }), $_detachOldView$$($element$$154$$, $oldViewParent$$2$$ || $element$$154$$, $cacheHolder$$4$$), $isInitial$$1$$ || ($_invokeLifecycleListener$$($lifecycleListener$$, "detached", [$element$$154$$, $valueAccessor$$29$$, $currentViewModel$$, $cachedNodeArray$$]), $_invokeViewModelMethod$$($currentViewModel$$, "detachedHandler", [$element$$154$$, $valueAccessor$$29$$, $cachedNodeArray$$]), $_invokeLifecycleListener$$($lifecycleListener$$, "deactivated", [$element$$154$$, $valueAccessor$$29$$, 
              $currentViewModel$$]), $_invokeViewModelMethod$$($currentViewModel$$, "deactivatedHandler", [$element$$154$$, $valueAccessor$$29$$])), $saveInCache$$ ? ($_propagateSubtreeVisibilityToComponents$$($cachedNodeArray$$, !1), $cache$$[$currentCacheKey$$] = {$model$:$currentViewModel$$, view:$cachedNodeArray$$}) : $invokeModelDispose$$($currentViewModel$$), $currentViewModel$$ = $model$$104$$, $currentCacheKey$$ = $cacheKey$$);
            }, $insertAndActivateNewNodes$$ = function $$insertAndActivateNewNodes$$$($targetElement$$1$$) {
              $targetElement$$1$$ = $targetElement$$1$$ || $element$$154$$;
              $_insertNodes$$($targetElement$$1$$, $nodes$$3$$);
              var $fromCache$$ = null != $cached$$2$$;
              $fromCache$$ && $_propagateSubtreeVisibilityToComponents$$($nodes$$3$$, !0);
              $_invokeLifecycleListener$$($lifecycleListener$$, "attached", [$targetElement$$1$$, $valueAccessor$$29$$, $model$$104$$, $fromCache$$]);
              $_invokeViewModelMethod$$($model$$104$$, "attachedHandler", [$targetElement$$1$$, $valueAccessor$$29$$, $fromCache$$]);
              if (!$fromCache$$) {
                var $childBindingContext$$1$$ = $bindingContext$$53$$.createChildContext($model$$104$$, void 0, function($ctx$$4$$) {
                  $ctx$$4$$.$module = $model$$104$$;
                  $ctx$$4$$.$params = $params$$26$$;
                });
                $_koNodesForEach$$($nodes$$3$$[0], $cacheHolder$$4$$, function($node$$114$$) {
                  $ko$$8$$.applyBindings($childBindingContext$$1$$, $node$$114$$);
                });
                $_invokeLifecycleListener$$($lifecycleListener$$, "bindingsApplied", [$targetElement$$1$$, $valueAccessor$$29$$, $model$$104$$]);
                $_invokeViewModelMethod$$($model$$104$$, "bindingsAppliedHandler", [$targetElement$$1$$, $valueAccessor$$29$$]);
              }
            }, $transitionComplete$$1$$ = function $$transitionComplete$$1$$$() {
              $_invokeLifecycleListener$$($lifecycleListener$$, "transitionCompleted", [$element$$154$$, $valueAccessor$$29$$, $model$$104$$]);
              $_invokeViewModelMethod$$($model$$104$$, "transitionCompletedHandler", [$element$$154$$, $valueAccessor$$29$$]);
            };
            if (null != $animation$$1$$) {
              var $promise$$5$$ = $_animate$$({node:$element$$154$$, valueAccessor:$valueAccessor$$29$$, isInitial:$isInitial$$1$$, oldViewModel:$currentViewModel$$, newViewModel:$model$$104$$}, $animation$$1$$, $element$$154$$, $oldDomNodes$$1$$, $insertAndActivateNewNodes$$, $removeOldDomNodes$$1_view$$6$$, $transitionComplete$$1$$);
              $currentAnimationPromise$$ = $_createNoFailPromise$$($promise$$5$$);
            } else {
              $currentAnimationPromise$$ = void 0;
            }
            $currentAnimationPromise$$ || ($removeOldDomNodes$$1_view$$6$$(null), $insertAndActivateNewNodes$$(null), $transitionComplete$$1$$());
          }
        }.bind(null, $pendingViewId$$), function($id$$47$$, $reason$$8$$) {
          $id$$47$$ == $pendingViewId$$ && null != $reason$$8$$ && $oj$$53$$.$Logger$.error($reason$$8$$);
        }.bind(null, $pendingViewId$$));
      }, null, {disposeWhenNodeIsRemoved:$element$$154$$});
      return{controlsDescendantBindings:!0};
    }};
    $ko$$8$$.virtualElements.allowedBindings.ojModule = !0;
  })();
});
