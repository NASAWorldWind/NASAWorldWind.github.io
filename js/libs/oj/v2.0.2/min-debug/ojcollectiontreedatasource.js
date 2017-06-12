/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel"], function($oj$$33$$) {
  $oj$$33$$.$CollectionNodeSet$ = function $$oj$$33$$$$CollectionNodeSet$$($parentKey$$6$$, $collection$$37$$, $treeDataSource$$1$$, $start$$51$$, $count$$53$$) {
    this.$parentKey$ = $parentKey$$6$$;
    this.$collection$ = $collection$$37$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$1$$;
    this.start = $start$$51$$ < $collection$$37$$.length ? $start$$51$$ : $collection$$37$$.length - 1;
    this.count = -1 === $count$$53$$ ? $collection$$37$$.length : Math.min($collection$$37$$.length, $count$$53$$);
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$33$$.$CollectionNodeSet$, $oj$$33$$);
  $oj$$33$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$33$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$35$$) {
    this.$_fetchDescendants$(this).then(function() {
      $callbacks$$35$$.success && $callbacks$$35$$.success();
    });
  };
  $oj$$33$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$33$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$22$$) {
    return new Promise(function($resolve$$47$$) {
      function $nextNode$$($index$$201$$) {
        $index$$201$$ < $count$$54$$ ? $nodeSet$$22$$.$FetchChildNodeSet$($index$$201$$, {success:function($childNodeSet$$1$$) {
          null !== $childNodeSet$$1$$ ? $nodeSet$$22$$.$_fetchDescendants$($childNodeSet$$1$$).then(function() {
            $nextNode$$($index$$201$$ + 1);
          }) : $nextNode$$($index$$201$$ + 1);
        }}) : $resolve$$47$$(void 0);
      }
      var $count$$54$$ = $nodeSet$$22$$.$getCount$();
      $nextNode$$(0);
    });
  };
  $oj$$33$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$33$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$202$$, $callbacks$$36$$) {
    var $model$$74_parentKey$$7$$ = this.$collection$.at($index$$202$$);
    if (this.$treeDataSource$.$parseMetadata$($model$$74_parentKey$$7$$).leaf) {
      this.$childNodeSet$[$index$$202$$] = null, $callbacks$$36$$.success(null);
    } else {
      var $collection$$38$$ = this.$treeDataSource$.$GetChildCollection$($model$$74_parentKey$$7$$), $model$$74_parentKey$$7$$ = this.$treeDataSource$.$parseMetadata$($model$$74_parentKey$$7$$).key, $self$$166$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$38$$, 0, -1, {success:function($nodeSet$$23$$) {
        $self$$166$$.$childNodeSet$[$index$$202$$] = $nodeSet$$23$$;
        $callbacks$$36$$.success($nodeSet$$23$$);
      }}, $model$$74_parentKey$$7$$);
    }
  };
  $oj$$33$$.$CollectionNodeSet$.prototype.getParent = function $$oj$$33$$$$CollectionNodeSet$$$getParent$() {
    return this.$parentKey$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$33$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$33$$.$CollectionNodeSet$.prototype.$getStart$ = function $$oj$$33$$$$CollectionNodeSet$$$$getStart$$() {
    return this.start;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {$getStart$:$oj$$33$$.$CollectionNodeSet$.prototype.$getStart$});
  $oj$$33$$.$CollectionNodeSet$.prototype.$getCount$ = function $$oj$$33$$$$CollectionNodeSet$$$$getCount$$() {
    return this.count;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {$getCount$:$oj$$33$$.$CollectionNodeSet$.prototype.$getCount$});
  $oj$$33$$.$CollectionNodeSet$.prototype.getData = function $$oj$$33$$$$CollectionNodeSet$$$getData$($index$$203$$) {
    this.$_checkRange$($index$$203$$);
    return this.$collection$.at($index$$203$$).attributes;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$33$$.$CollectionNodeSet$.prototype.getData});
  $oj$$33$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$33$$$$CollectionNodeSet$$$$_checkRange$$($index$$204$$) {
    if ($index$$204$$ < this.start || $index$$204$$ > this.start + this.count) {
      throw "Out of range";
    }
  };
  $oj$$33$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$33$$$$CollectionNodeSet$$$getMetadata$($index$$205_model$$75_parse$$6$$) {
    this.$_checkRange$($index$$205_model$$75_parse$$6$$);
    var $metadata$$13$$ = {};
    $index$$205_model$$75_parse$$6$$ = this.$collection$.at($index$$205_model$$75_parse$$6$$);
    $index$$205_model$$75_parse$$6$$ = this.$treeDataSource$.$parseMetadata$($index$$205_model$$75_parse$$6$$);
    $metadata$$13$$.key = $index$$205_model$$75_parse$$6$$.key;
    $metadata$$13$$.leaf = $index$$205_model$$75_parse$$6$$.leaf;
    $metadata$$13$$.depth = $index$$205_model$$75_parse$$6$$.depth;
    return $metadata$$13$$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$33$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$33$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$33$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$206$$) {
    this.$_checkRange$($index$$206$$);
    return this.$childNodeSet$[$index$$206$$];
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$33$$.$CollectionNodeSet$.prototype.$getChildNodeSet$});
  $oj$$33$$.$CollectionTreeDataSource$ = function $$oj$$33$$$$CollectionTreeDataSource$$($options$$312$$) {
    $options$$312$$ = $options$$312$$ || {};
    this.$rootCollection$ = $options$$312$$.root;
    this.$childCollectionCallback$ = $options$$312$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$312$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$33$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$33$$.$CollectionTreeDataSource$, $oj$$33$$);
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$76$$) {
    return{key:$model$$76$$.idAttribute + "\x3d" + $model$$76$$.id};
  };
  $oj$$33$$.$Object$.$createSubclass$($oj$$33$$.$CollectionTreeDataSource$, $oj$$33$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$33$$.$CollectionTreeDataSource$.prototype.Init = function $$oj$$33$$$$CollectionTreeDataSource$$$Init$() {
    $oj$$33$$.$CollectionTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {Init:$oj$$33$$.$CollectionTreeDataSource$.prototype.Init});
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$32$$) {
    var $childColl$$ = this.$cache$[$parent$$32$$];
    if ($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length;
    }
    this.$getChildCollection$($parent$$32$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length;
    }});
    return-1;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$33$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$146$$, $callbacks$$37$$) {
    this.$fetchChildren$($key$$146$$, null, {success:function($nodeSet$$24$$) {
      $callbacks$$37$$.success($nodeSet$$24$$.$collection$);
    }, error:$callbacks$$37$$.error});
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$33$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$33$$, $range$$16$$, $callbacks$$38$$) {
    $range$$16$$ = $range$$16$$ || {};
    var $start$$52$$ = $range$$16$$.start ? $range$$16$$.start : 0, $count$$55$$ = $range$$16$$.count ? $range$$16$$.count : -1;
    if (null === $parent$$33$$) {
      this.$FetchCollection$(null, $start$$52$$, $count$$55$$, $callbacks$$38$$, null);
    } else {
      var $self$$167$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$33$$, 0).then(function($collection$$39_parentModel$$) {
        if ($collection$$39_parentModel$$) {
          $collection$$39_parentModel$$ = $self$$167$$.$GetChildCollection$($collection$$39_parentModel$$.$model$);
          try {
            $self$$167$$.$FetchCollection$($collection$$39_parentModel$$, $start$$52$$, $count$$55$$, $callbacks$$38$$, $parent$$33$$);
          } catch ($error$$45$$) {
            $callbacks$$38$$ && $callbacks$$38$$.error && $callbacks$$38$$.error({status:$error$$45$$.message});
          }
        } else {
          $callbacks$$38$$ && $callbacks$$38$$.error && $callbacks$$38$$.error($parent$$33$$);
        }
      });
    }
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$33$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$409_model$$77$$, $collection$$40_parents$$4$$, $options$$314$$) {
    var $index$$207$$ = 0;
    $options$$314$$ && $options$$314$$.at && ($index$$207$$ = $options$$314$$.at);
    $collection$$40_parents$$4$$ = this.$_getParentChain$($collection$$40_parents$$4$$);
    $event$$409_model$$77$$ = this.$_createEvent$(this, "insert", $index$$207$$, $collection$$40_parents$$4$$, this.$_putModelInNodeSet$(null != $collection$$40_parents$$4$$ && 0 < $collection$$40_parents$$4$$.length ? $collection$$40_parents$$4$$[$collection$$40_parents$$4$$.length - 1] : null, $event$$409_model$$77$$));
    this.handleEvent("change", $event$$409_model$$77$$);
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$410_model$$78$$, $collection$$41$$, $options$$315$$) {
    var $index$$208$$ = 0;
    $options$$315$$ && $options$$315$$.index && ($index$$208$$ = $options$$315$$.index);
    this.$_removeCollectionFromCache$($event$$410_model$$78$$);
    $event$$410_model$$78$$ = this.$_createEvent$(this, "delete", $index$$208$$, this.$_getParentChain$($collection$$41$$), null);
    this.handleEvent("change", $event$$410_model$$78$$);
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$411_model$$79$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$411_model$$79$$), $index$$209$$ = null, $parents$$5$$ = null;
    $collectionForModel$$ && ($index$$209$$ = $collectionForModel$$.index, $parents$$5$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$411_model$$79$$ = this.$_createEvent$(this, "update", $index$$209$$, $parents$$5$$, this.$_putModelInNodeSet$(null != $parents$$5$$ && 0 < $parents$$5$$.length ? $parents$$5$$[$parents$$5$$.length - 1] : null, $event$$411_model$$79$$));
    this.handleEvent("change", $event$$411_model$$79$$);
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$42_event$$412$$) {
    $collection$$42_event$$412$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$42_event$$412$$), null);
    this.handleEvent("refresh", $collection$$42_event$$412$$);
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_putModelInNodeSet$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_putModelInNodeSet$$($parent$$36$$, $model$$80$$) {
    var $collection$$43$$ = new $oj$$33$$.$Collection$;
    $collection$$43$$.add($model$$80$$);
    return this.$_getNodeSet$($collection$$43$$, $parent$$36$$, 0, 1);
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$44$$) {
    var $parents$$6$$ = [], $parent$$37$$ = null;
    do {
      $parent$$37$$ = this.$_getParentOfCollection$($coll$$4_collection$$44$$), null !== $parent$$37$$ && ($parent$$37$$ !== $oj$$33$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$6$$.unshift($parent$$37$$), $coll$$4_collection$$44$$ = this.$_getCollectionOfKey$($parent$$37$$));
    } while (null != $parent$$37$$);
    return $parents$$6$$;
  };
  $oj$$33$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$81$$) {
    var $key$$147$$ = $model$$81$$ instanceof $oj$$33$$.$Model$ ? this.$parseMetadata$($model$$81$$).key : $model$$81$$;
    return $model$$81$$ ? $key$$147$$ : $oj$$33$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$;
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$82$$) {
    return this.$cache$[this.$_getCacheKey$($model$$82$$)];
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$83$$, $collection$$45$$) {
    $collection$$45$$.on($oj$$33$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$45$$.on($oj$$33$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$45$$.on($oj$$33$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$45$$.on($oj$$33$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$83$$)] = $collection$$45$$;
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$148_model$$84$$) {
    $key$$148_model$$84$$ = this.$_getCacheKey$($key$$148_model$$84$$);
    for (var $prop$$66$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$66$$) && $prop$$66$$ === $key$$148_model$$84$$) {
        this.$cache$[$key$$148_model$$84$$].off(null, null, this);
        delete this.$cache$[$key$$148_model$$84$$];
        break;
      }
    }
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$149$$, $collection$$46$$) {
    for (var $count$$56$$ = $collection$$46$$.length, $i$$332$$ = 0;$i$$332$$ < $count$$56$$;$i$$332$$++) {
      var $currKey$$ = this.$_getCacheKey$($collection$$46$$.at($i$$332$$));
      if ($key$$149$$ === $currKey$$) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$85$$) {
    for (var $prop$$67$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$67$$)) {
        for (var $collection$$47$$ = this.$cache$[$prop$$67$$], $i$$333$$ = 0;$i$$333$$ < $collection$$47$$.length;$i$$333$$++) {
          if ($collection$$47$$.at($i$$333$$) === $model$$85$$) {
            return{index:$i$$333$$, $collection$:$collection$$47$$};
          }
        }
      }
    }
    return null;
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$150$$) {
    for (var $prop$$68$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$68$$)) {
        var $collection$$48$$ = this.$cache$[$prop$$68$$];
        if (this.$_keyInCollection$($key$$150$$, $collection$$48$$)) {
          return $collection$$48$$;
        }
      }
    }
    return null;
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$49$$) {
    for (var $prop$$69$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$69$$) && this.$cache$[$prop$$69$$] === $collection$$49$$) {
        return $prop$$69$$;
      }
    }
    return null;
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$ = !0, $collection$$50$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$50$$ || ($cached$$ = !1, $collection$$50$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$50$$ && (this.$_applySortToCollection$($collection$$50$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$50$$)));
    return{$collection$:$collection$$50$$, $cached$:$cached$$};
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$11$$, $operation$$6$$, $index$$210$$, $parent$$38$$, $data$$152$$) {
    return{source:$source$$11$$, operation:$operation$$6$$, index:$index$$210$$, parent:$parent$$38$$, data:$data$$152$$};
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$51$$, $start$$53$$, $count$$57$$, $callbacks$$39$$, $parent$$39$$) {
    var $self$$168$$ = this;
    null === $collection$$51$$ && (($collection$$51$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$51$$ = {$collection$:$collection$$51$$, $cached$:!0} : ($collection$$51$$ = {$collection$:$self$$168$$.$rootCollection$, $cached$:!1}, $self$$168$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$51$$ && $self$$168$$.$_fetch$($collection$$51$$, function($coll$$5$$) {
      $callbacks$$39$$.success && $callbacks$$39$$.success($self$$168$$.$_getNodeSet$($coll$$5$$, $parent$$39$$, $start$$53$$, $count$$57$$));
    }, $callbacks$$39$$.error);
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$52$$, $parent$$40$$, $start$$54$$, $count$$58$$) {
    return new $oj$$33$$.$CollectionNodeSet$($parent$$40$$, $collection$$52$$, this, $start$$54$$, $count$$58$$);
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$53$$, $key$$151$$) {
    var $self$$169$$ = this;
    return new Promise(function($resolve$$48$$) {
      function $checkNext$$($index$$211$$, $collection$$54$$, $key$$152$$) {
        $index$$211$$ < $collection$$54$$.length ? $collection$$54$$.at($index$$211$$, {deferred:!0}).then(function($model$$86$$) {
          if ($model$$86$$) {
            var $parse$$7$$ = $self$$169$$.$parseMetadata$($model$$86$$);
            if ($key$$152$$ === $parse$$7$$.key) {
              $resolve$$48$$($model$$86$$);
              return;
            }
          }
          $index$$211$$++;
          $checkNext$$($index$$211$$, $collection$$54$$, $key$$152$$);
        }) : $resolve$$48$$(null);
      }
      $checkNext$$(0, $collection$$53$$, $key$$151$$);
    });
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$55$$, $key$$153$$, $depth$$25$$) {
    var $self$$170$$ = this;
    return new Promise(function($resolve$$49$$) {
      $self$$170$$.$_scanForKey$($collection$$55$$, $key$$153$$).then(function($model$$87$$) {
        function $getNextCollection$$($index$$212$$, $tds$$) {
          if ($index$$212$$ < $max$$7$$) {
            var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$55$$.at($index$$212$$));
            $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
              $tds$$.$_getModelForId$($fetchColl$$, $key$$153$$, $depth$$25$$ + 1).then(function($childModel$$) {
                $childModel$$ ? $resolve$$49$$($childModel$$) : ($index$$212$$++, $getNextCollection$$($index$$212$$, $tds$$));
              });
            }, null) : ($index$$212$$++, $getNextCollection$$($index$$212$$, $tds$$));
          } else {
            $resolve$$49$$(null);
          }
        }
        if ($model$$87$$) {
          $resolve$$49$$({$model$:$model$$87$$, depth:$depth$$25$$});
        } else {
          var $max$$7$$ = $collection$$55$$.length;
          $getNextCollection$$(0, $self$$170$$);
        }
      });
    });
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$15$$, $error$$46$$) {
    $collectionCacheObj$$.$cached$ ? $success$$15$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length || !$collectionCacheObj$$.$collection$.$IsUrlBased$() ? $success$$15$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$15$$($fetchColl$$1$$);
    }, error:$error$$46$$}));
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$fetchDescendants$$($parent$$41$$, $callbacks$$40$$) {
    var $self$$171$$ = this;
    null === $parent$$41$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$25$$) {
      $nodeSet$$25$$.$FetchDescendants$({success:function() {
        $callbacks$$40$$.success && $callbacks$$40$$.success($nodeSet$$25$$);
      }});
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$41$$, 0).then(function($collection$$56_parentModel$$2$$) {
      $collection$$56_parentModel$$2$$ && ($collection$$56_parentModel$$2$$ = $self$$171$$.$GetChildCollection$($collection$$56_parentModel$$2$$.$model$), $self$$171$$.$FetchCollection$($collection$$56_parentModel$$2$$, 0, -1, {success:function($nodeSet$$26$$) {
        $nodeSet$$26$$.$FetchDescendants$({success:function() {
          $callbacks$$40$$.success && $callbacks$$40$$.success($nodeSet$$26$$);
        }});
      }}, $parent$$41$$));
    });
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$33$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$33$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$33$$$$CollectionTreeDataSource$$$sort$($criteria$$6$$, $callbacks$$41$$) {
    var $key$$154$$ = $criteria$$6$$.key, $dir$$1$$ = $criteria$$6$$.direction, $needSort$$2$$ = !1;
    $key$$154$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$154$$, $needSort$$2$$ = !0);
    $dir$$1$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$1$$, $needSort$$2$$ = !0);
    if ($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for (var $prop$$70$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$70$$) && this.$_applySortToCollection$(this.$cache$[$prop$$70$$]);
      }
    }
    $callbacks$$41$$ && $callbacks$$41$$.success && $callbacks$$41$$.success();
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$33$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$58$$) {
    $collection$$58$$.comparator = this.$sortkey$;
    $collection$$58$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$58$$.sort();
  };
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$};
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$33$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$33$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$33$$$$CollectionTreeDataSource$$$move$() {
    $oj$$33$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$33$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$33$$.$CollectionTreeDataSource$.prototype.$moveOK$ = function $$oj$$33$$$$CollectionTreeDataSource$$$$moveOK$$() {
    return "invalid";
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$33$$.$CollectionTreeDataSource$.prototype.$moveOK$});
  $oj$$33$$.$CollectionTreeDataSource$.prototype.getCapability = function $$oj$$33$$$$CollectionTreeDataSource$$$getCapability$($feature$$12$$) {
    return "sort" === $feature$$12$$ ? "default" : "move" === $feature$$12$$ ? "none" : "batchFetch" === $feature$$12$$ || "fetchDescendants" === $feature$$12$$ ? "disable" : null;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {getCapability:$oj$$33$$.$CollectionTreeDataSource$.prototype.getCapability});
});
