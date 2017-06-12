/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$49$$, $ko$$7$$) {
  $oj$$49$$.$KnockoutUtils$ = function $$oj$$49$$$$KnockoutUtils$$() {
  };
  $goog$exportPath_$$("KnockoutUtils", $oj$$49$$.$KnockoutUtils$, $oj$$49$$);
  $oj$$49$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$49$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$49$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$49$$.$KnockoutUtils$.$subscriptionProp$ = "oj.collectionSubscription";
  $oj$$49$$.$KnockoutUtils$.$updatingCollectionFunc$ = "oj.collectionUpdatingFunc";
  $oj$$49$$.$KnockoutUtils$.map = function $$oj$$49$$$$KnockoutUtils$$map$($m$$24$$, $callback$$111$$, $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$295$$) {
        $koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] || $m$$24$$.set($argProp$$, $value$$295$$);
      };
    }
    var $koObject$$, $i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$, $converted_index$$234_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if ($m$$24$$ instanceof $oj$$49$$.$Collection$) {
      $i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$ = Array($m$$24$$.$_getLength$());
      $koObject$$ = $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$ ? $ko$$7$$.observableArray($i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$) : $i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$;
      $oj$$49$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$24$$);
      if ($array$$17_data$$165_updateObservable_updateObservableArrayRemove$$) {
        for ($i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$ = 0;$i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$ < $m$$24$$.$_modelIndices$.length;$i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$234_updateObservableArrayReset$$ = $m$$24$$.$_modelIndices$[$i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$], $koObject$$()[$converted_index$$234_updateObservableArrayReset$$] = $oj$$49$$.$KnockoutUtils$.map($m$$24$$.$_atInternal$($converted_index$$234_updateObservableArrayReset$$, null, !0, !1), $callback$$111$$);
        }
      } else {
        for ($i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$ = 0;$i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$ < $m$$24$$.$_modelIndices$.length;$i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$234_updateObservableArrayReset$$ = $m$$24$$.$_modelIndices$[$i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$], $koObject$$[$converted_index$$234_updateObservableArrayReset$$] = $oj$$49$$.$KnockoutUtils$.map($m$$24$$.$_atInternal$($converted_index$$234_updateObservableArrayReset$$, null, !0, !1), $callback$$111$$);
        }
      }
      $i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$ = function $$i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$$($changes$$7$$) {
        var $i$$390$$;
        try {
          if (!$koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$49$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for ($i$$390$$ = 0;$i$$390$$ < $changes$$7$$.length;$i$$390$$++) {
              var $index$$235$$ = $changes$$7$$[$i$$390$$].index, $model$$96$$ = $oj$$49$$.$KnockoutUtils$.$_getModel$($changes$$7$$[$i$$390$$].value), $status$$29$$ = $changes$$7$$[$i$$390$$].status;
              "added" === $status$$29$$ ? $index$$235$$ >= $m$$24$$.length - 1 ? $m$$24$$.add($model$$96$$) : $m$$24$$.add($model$$96$$, {at:$index$$235$$}) : "deleted" === $status$$29$$ && $m$$24$$.$_removeInternal$($model$$96$$, $index$$235$$);
            }
            $m$$24$$.comparator && ($koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$122$$, $b$$76$$) {
              return $oj$$49$$.$KnockoutUtils$.$_callSort$($a$$122$$, $b$$76$$, $m$$24$$.comparator, $m$$24$$, this);
            }), $koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !1);
          }
        } catch ($e$$103$$) {
          throw $e$$103$$;
        } finally {
          $koObject$$[$oj$$49$$.$KnockoutUtils$.$collUpdatingProp$] = !1;
        }
      };
      $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && ($koObject$$[$oj$$49$$.$KnockoutUtils$.$updatingCollectionFunc$] = $i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$, $koObject$$[$oj$$49$$.$KnockoutUtils$.$subscriptionProp$] = $koObject$$.subscribe($i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$, null, "arrayChange"));
      $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$ = function $$array$$17_data$$165_updateObservable_updateObservableArrayRemove$$$($model$$97$$, $collection$$59$$, $options$$353$$) {
        var $index$$236$$;
        try {
          !$koObject$$[$oj$$49$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$59$$ instanceof $oj$$49$$.$Collection$ && ($koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$236$$ = $options$$353$$.index, $koObject$$.splice($index$$236$$, 1));
        } catch ($e$$104$$) {
          throw $e$$104$$;
        } finally {
          $koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$ = function $$i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$$($model$$98$$, $collection$$60$$, $options$$354$$) {
        var $index$$237$$, $newObservable$$;
        try {
          if (!$koObject$$[$oj$$49$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$60$$ instanceof $oj$$49$$.$Collection$ && ($koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$237$$ = $collection$$60$$.$_localIndexOf$($model$$98$$), void 0 !== $index$$237$$ && -1 < $index$$237$$)) {
            if ($newObservable$$ = $oj$$49$$.$KnockoutUtils$.map($model$$98$$, $callback$$111$$), $options$$354$$.fillIn) {
              for (var $i$$391$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$391$$ < $index$$237$$;$i$$391$$++) {
                $koObject$$.splice($i$$391$$, 0, $oj$$49$$.$KnockoutUtils$.map($collection$$60$$.$_atInternal$($i$$391$$, null, !0, !1), $callback$$111$$));
              }
              $koObject$$.splice($index$$237$$, 1, $newObservable$$);
            } else {
              $koObject$$.splice($index$$237$$, 0, $newObservable$$);
            }
          }
        } catch ($e$$105$$) {
          throw $e$$105$$;
        } finally {
          $koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $converted_index$$234_updateObservableArrayReset$$ = function $$converted_index$$234_updateObservableArrayReset$$$($collection$$61$$) {
        try {
          !$koObject$$[$oj$$49$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$61$$ instanceof $oj$$49$$.$Collection$ && ($koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$7$$.isObservable($koObject$$) ? ($koObject$$[$oj$$49$$.$KnockoutUtils$.$subscriptionProp$] && $koObject$$[$oj$$49$$.$KnockoutUtils$.$subscriptionProp$].dispose(), $koObject$$.removeAll(), $koObject$$[$oj$$49$$.$KnockoutUtils$.$updatingCollectionFunc$] && $koObject$$.subscribe($koObject$$[$oj$$49$$.$KnockoutUtils$.$updatingCollectionFunc$], 
          null, "arrayChange")) : $koObject$$ = []);
        } catch ($e$$106$$) {
          throw $e$$106$$;
        } finally {
          $koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$62$$) {
        try {
          !$koObject$$[$oj$$49$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$62$$ instanceof $oj$$49$$.$Collection$ && ($koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$123$$, $b$$77$$) {
            return $oj$$49$$.$KnockoutUtils$.$_callSort$($a$$123$$, $b$$77$$, $m$$24$$.comparator, $collection$$62$$, this);
          }));
        } catch ($e$$107$$) {
          throw $e$$107$$;
        } finally {
          $koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$24$$.$OnInternal$($oj$$49$$.$Events$.$EventType$.ADD, $i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$24$$.$OnInternal$($oj$$49$$.$Events$.$EventType$.REMOVE, $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$24$$.$OnInternal$($oj$$49$$.$Events$.$EventType$.RESET, $converted_index$$234_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$24$$.$OnInternal$($oj$$49$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0);
    } else {
      if (void 0 === $m$$24$$) {
        return;
      }
      $koObject$$ = {};
      $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$ = $m$$24$$.attributes;
      $i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$ = null;
      for ($i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$ in $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$) {
        $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$) && ($converted_index$$234_updateObservableArrayReset$$ = $ko$$7$$.observable($m$$24$$.get($i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$] = $converted_index$$234_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = 
        $_makeUpdateModel$$($i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$), $updateModel_updateObservableArraySort$$.$_prop$ = $i$$389_prealloc_prop$$74_updateCollection_updateObservableArrayAdd$$, $converted_index$$234_updateObservableArrayReset$$.subscribe && $converted_index$$234_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$));
      }
      $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$ = function $$array$$17_data$$165_updateObservable_updateObservableArrayRemove$$$($model$$99$$) {
        var $attrs$$23$$, $prop$$75$$;
        try {
          for ($prop$$75$$ in $koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$23$$ = $model$$99$$.$changedAttributes$(), $attrs$$23$$) {
            if ($attrs$$23$$.hasOwnProperty($prop$$75$$)) {
              $koObject$$[$prop$$75$$]($model$$99$$.get($prop$$75$$));
            }
          }
        } catch ($e$$108$$) {
          throw $e$$108$$;
        } finally {
          $koObject$$[$oj$$49$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$24$$.$OnInternal$($oj$$49$$.$Events$.$EventType$.CHANGE, $array$$17_data$$165_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$49$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$24$$);
      $callback$$111$$ && $callback$$111$$($koObject$$);
    }
    return $koObject$$;
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$49$$.$KnockoutUtils$.map, $oj$$49$$);
  $oj$$49$$.$KnockoutUtils$.$_getModel$ = function $$oj$$49$$$$KnockoutUtils$$$_getModel$$($val$$59$$) {
    return $val$$59$$ instanceof $oj$$49$$.$Model$ ? $val$$59$$ : $val$$59$$.hasOwnProperty($oj$$49$$.$KnockoutUtils$.$internalObjectProperty$) ? $val$$59$$[$oj$$49$$.$KnockoutUtils$.$internalObjectProperty$] : $val$$59$$;
  };
  $oj$$49$$.$KnockoutUtils$.$_callSort$ = function $$oj$$49$$$$KnockoutUtils$$$_callSort$$($a$$124$$, $b$$78$$, $comparator$$16$$, $collection$$63$$, $caller$$8$$) {
    return $oj$$49$$.$Collection$.$SortFunc$($oj$$49$$.$KnockoutUtils$.$_getModel$($a$$124$$), $oj$$49$$.$KnockoutUtils$.$_getModel$($b$$78$$), $comparator$$16$$, $collection$$63$$, $caller$$8$$);
  };
  $oj$$49$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$49$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$6$$, $value$$296$$) {
    Object.defineProperty($object$$6$$, $oj$$49$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$296$$, enumerable:!1});
  };
});
