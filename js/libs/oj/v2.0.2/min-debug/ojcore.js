/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var $goog$global$$ = this;
function $goog$exportPath_$$($name$$53_parts$$, $opt_object$$, $cur_opt_objectToExportTo$$) {
  $name$$53_parts$$ = $name$$53_parts$$.split(".");
  $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$ || $goog$global$$;
  $name$$53_parts$$[0] in $cur_opt_objectToExportTo$$ || !$cur_opt_objectToExportTo$$.execScript || $cur_opt_objectToExportTo$$.execScript("var " + $name$$53_parts$$[0]);
  for (var $part$$;$name$$53_parts$$.length && ($part$$ = $name$$53_parts$$.shift());) {
    $name$$53_parts$$.length || void 0 === $opt_object$$ ? $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$[$part$$] ? $cur_opt_objectToExportTo$$[$part$$] : $cur_opt_objectToExportTo$$[$part$$] = {} : $cur_opt_objectToExportTo$$[$part$$] = $opt_object$$;
  }
}
;/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["require", "ojL10n!ojtranslations/nls/ojtranslations"], function($require$$2$$, $ojt$$1$$) {
  var $_scope$$ = {};
  "undefined" !== typeof window ? $_scope$$ = window : "undefined" !== typeof self && ($_scope$$ = self);
  var $_oldVal$$ = $_scope$$.oj, $oj$$ = $_scope$$.oj = {version:"2.0.2", build:"", revision:"26451", noConflict:function $$_scope$$$oj$noConflict$() {
    $_scope$$.oj = $_oldVal$$;
  }};
  $oj$$.$Logger$ = {};
  $goog$exportPath_$$("Logger", $oj$$.$Logger$, $oj$$);
  $oj$$.$Logger$.$LEVEL_NONE$ = 0;
  $goog$exportPath_$$("Logger.LEVEL_NONE", $oj$$.$Logger$.$LEVEL_NONE$, $oj$$);
  $oj$$.$Logger$.$LEVEL_ERROR$ = 1;
  $goog$exportPath_$$("Logger.LEVEL_ERROR", $oj$$.$Logger$.$LEVEL_ERROR$, $oj$$);
  $oj$$.$Logger$.$LEVEL_WARN$ = 2;
  $goog$exportPath_$$("Logger.LEVEL_WARN", $oj$$.$Logger$.$LEVEL_WARN$, $oj$$);
  $oj$$.$Logger$.$LEVEL_INFO$ = 3;
  $goog$exportPath_$$("Logger.LEVEL_INFO", $oj$$.$Logger$.$LEVEL_INFO$, $oj$$);
  $oj$$.$Logger$.$LEVEL_LOG$ = 4;
  $goog$exportPath_$$("Logger.LEVEL_LOG", $oj$$.$Logger$.$LEVEL_LOG$, $oj$$);
  $oj$$.$Logger$.$_METHOD_ERROR$ = "error";
  $oj$$.$Logger$.$_METHOD_WARN$ = "warn";
  $oj$$.$Logger$.$_METHOD_INFO$ = "info";
  $oj$$.$Logger$.$_METHOD_LOG$ = "log";
  $oj$$.$Logger$.$_defaultOptions$ = {level:$oj$$.$Logger$.$LEVEL_ERROR$, writer:null};
  $oj$$.$Logger$.$_options$ = $oj$$.$Logger$.$_defaultOptions$;
  $oj$$.$Logger$.error = function $$oj$$$$Logger$$error$($args$$7$$) {
    $oj$$.$Logger$.$_write$($oj$$.$Logger$.$LEVEL_ERROR$, $oj$$.$Logger$.$_METHOD_ERROR$, arguments);
  };
  $goog$exportPath_$$("Logger.error", $oj$$.$Logger$.error, $oj$$);
  $oj$$.$Logger$.info = function $$oj$$$$Logger$$info$($args$$8$$) {
    $oj$$.$Logger$.$_write$($oj$$.$Logger$.$LEVEL_INFO$, $oj$$.$Logger$.$_METHOD_INFO$, arguments);
  };
  $goog$exportPath_$$("Logger.info", $oj$$.$Logger$.info, $oj$$);
  $oj$$.$Logger$.warn = function $$oj$$$$Logger$$warn$($args$$9$$) {
    $oj$$.$Logger$.$_write$($oj$$.$Logger$.$LEVEL_WARN$, $oj$$.$Logger$.$_METHOD_WARN$, arguments);
  };
  $goog$exportPath_$$("Logger.warn", $oj$$.$Logger$.warn, $oj$$);
  $oj$$.$Logger$.log = function $$oj$$$$Logger$$log$($args$$10$$) {
    $oj$$.$Logger$.$_write$($oj$$.$Logger$.$LEVEL_LOG$, $oj$$.$Logger$.$_METHOD_LOG$, arguments);
  };
  $goog$exportPath_$$("Logger.log", $oj$$.$Logger$.log, $oj$$);
  $oj$$.$Logger$.option = function $$oj$$$$Logger$$option$($key$$20$$, $value$$53$$) {
    var $ret$$ = {}, $opt$$;
    if (0 == arguments.length) {
      for ($opt$$ in $oj$$.$Logger$.$_options$) {
        $oj$$.$Logger$.$_options$.hasOwnProperty($opt$$) && ($ret$$[$opt$$] = $oj$$.$Logger$.$_options$[$opt$$]);
      }
      return $ret$$;
    }
    if ("string" === typeof $key$$20$$ && void 0 === $value$$53$$) {
      return void 0 === $oj$$.$Logger$.$_options$[$key$$20$$] ? null : $oj$$.$Logger$.$_options$[$key$$20$$];
    }
    if ("string" === typeof $key$$20$$) {
      $oj$$.$Logger$.$_options$[$key$$20$$] = $value$$53$$;
    } else {
      for ($opt$$ in $key$$20$$) {
        $key$$20$$.hasOwnProperty($opt$$) && $oj$$.$Logger$.option($opt$$, $key$$20$$[$opt$$]);
      }
    }
  };
  $goog$exportPath_$$("Logger.option", $oj$$.$Logger$.option, $oj$$);
  $oj$$.$Logger$.$_write$ = function $$oj$$$$Logger$$$_write$$($level$$7$$, $method$$1$$, $args$$11$$) {
    if (!($oj$$.$Logger$.option("level") < $level$$7$$)) {
      var $writer$$ = $oj$$.$Logger$.$_getWriter$();
      null != $writer$$ && (1 == $args$$11$$.length && $args$$11$$[0] instanceof Function && ($args$$11$$ = [$args$$11$$[0]()]), $writer$$[$method$$1$$] && $writer$$[$method$$1$$].apply ? $writer$$[$method$$1$$].apply($writer$$, $args$$11$$) : $writer$$[$method$$1$$] && ($writer$$[$method$$1$$] = Function.prototype.bind.call($writer$$[$method$$1$$], $writer$$), $oj$$.$Logger$.$_write$($level$$7$$, $method$$1$$, $args$$11$$)));
    }
  };
  $oj$$.$Logger$.$_getWriter$ = function $$oj$$$$Logger$$$_getWriter$$() {
    var $writer$$1$$ = null;
    $oj$$.$Logger$.option("writer") ? $writer$$1$$ = $oj$$.$Logger$.option("writer") : "undefined" !== typeof window && void 0 !== window.console && ($writer$$1$$ = window.console);
    return $writer$$1$$;
  };
  $oj$$.$Logger$.$_validateOption$ = function $$oj$$$$Logger$$$_validateOption$$($key$$21$$) {
    return void 0 !== $oj$$.$Logger$.$_defaultOptions$[$key$$21$$];
  };
  var $_checkpointManagerDelegate$$ = $_scope$$.__ojCheckpointManager;
  $oj$$.$CHECKPOINT_MANAGER$ = {};
  $goog$exportPath_$$("CHECKPOINT_MANAGER", $oj$$.$CHECKPOINT_MANAGER$, $oj$$);
  $oj$$.$CHECKPOINT_MANAGER$.$startCheckpoint$ = function $$oj$$$$CHECKPOINT_MANAGER$$$startCheckpoint$$($name$$60$$, $description$$2$$) {
    $_checkpointManagerDelegate$$ && $_checkpointManagerDelegate$$.startCheckpoint($name$$60$$, $description$$2$$);
  };
  $goog$exportPath_$$("CHECKPOINT_MANAGER.startCheckpoint", $oj$$.$CHECKPOINT_MANAGER$.$startCheckpoint$, $oj$$);
  $oj$$.$CHECKPOINT_MANAGER$.$endCheckpoint$ = function $$oj$$$$CHECKPOINT_MANAGER$$$endCheckpoint$$($name$$61$$) {
    $_checkpointManagerDelegate$$ && $_checkpointManagerDelegate$$.endCheckpoint($name$$61$$);
  };
  $goog$exportPath_$$("CHECKPOINT_MANAGER.endCheckpoint", $oj$$.$CHECKPOINT_MANAGER$.$endCheckpoint$, $oj$$);
  $oj$$.$CHECKPOINT_MANAGER$.$getRecord$ = function $$oj$$$$CHECKPOINT_MANAGER$$$getRecord$$($name$$62$$) {
    return $_checkpointManagerDelegate$$ ? $_checkpointManagerDelegate$$.getRecord($name$$62$$) : void 0;
  };
  $goog$exportPath_$$("CHECKPOINT_MANAGER.getRecord", $oj$$.$CHECKPOINT_MANAGER$.$getRecord$, $oj$$);
  $oj$$.$CHECKPOINT_MANAGER$.$matchRecords$ = function $$oj$$$$CHECKPOINT_MANAGER$$$matchRecords$$($regexp$$2$$) {
    return $_checkpointManagerDelegate$$ ? $_checkpointManagerDelegate$$.matchRecords($regexp$$2$$) : [];
  };
  $goog$exportPath_$$("CHECKPOINT_MANAGER.matchRecords", $oj$$.$CHECKPOINT_MANAGER$.$matchRecords$, $oj$$);
  $oj$$.$CHECKPOINT_MANAGER$.$dump$ = function $$oj$$$$CHECKPOINT_MANAGER$$$dump$$($regexp$$3$$) {
    $oj$$.$Logger$.info(function() {
      for (var $logMsg$$ = "Checkpoint Records:", $records$$ = $oj$$.$CHECKPOINT_MANAGER$.$matchRecords$($regexp$$3$$), $i$$7$$ = 0;$i$$7$$ < $records$$.length;$i$$7$$++) {
        var $record$$ = $records$$[$i$$7$$], $logMsg$$ = $logMsg$$ + "\n" + $record$$.name, $desc$$ = $record$$.description;
        null != $desc$$ && ($logMsg$$ = $logMsg$$ + " (" + $desc$$ + ")");
        $logMsg$$ += ":\n";
        $logMsg$$ = $logMsg$$ + "start: " + $record$$.start + "\tduration: " + $record$$.duration;
      }
      return $logMsg$$;
    });
  };
  $goog$exportPath_$$("CHECKPOINT_MANAGER.dump", $oj$$.$CHECKPOINT_MANAGER$.$dump$, $oj$$);
  $oj$$.$Object$ = function $$oj$$$$Object$$() {
    this.Init();
  };
  $goog$exportPath_$$("Object", $oj$$.$Object$, $oj$$);
  $oj$$.$Object$.$superclass$ = null;
  $oj$$.$Object$.$_typeName$ = "oj.Object";
  $oj$$.$Object$.$_GET_FUNCTION_NAME_REGEXP$ = /function\s+([\w\$][\w\$\d]*)\s*\(/;
  $oj$$.$Object$.prototype = {};
  $oj$$.$Object$.prototype.constructor = $oj$$.$Object$;
  $oj$$.$Object$.$exportPrototypeSymbol$ = function $$oj$$$$Object$$$exportPrototypeSymbol$$($name$$63$$, $valueMapping$$) {
    var $renamed$$ = null, $val$$11$$ = null, $constructor_prop$$5$$;
    for ($constructor_prop$$5$$ in $valueMapping$$) {
      if ($valueMapping$$.hasOwnProperty($constructor_prop$$5$$)) {
        $renamed$$ = $constructor_prop$$5$$;
        $val$$11$$ = $valueMapping$$[$constructor_prop$$5$$];
        break;
      }
    }
    var $original_tokens$$ = $name$$63$$.split(".");
    $constructor_prop$$5$$ = $oj$$[$original_tokens$$[0]];
    $original_tokens$$ = $original_tokens$$[2];
    if ($renamed$$ != $original_tokens$$ && null != $renamed$$) {
      var $renameMap$$ = $constructor_prop$$5$$.$_r2o$;
      $renameMap$$ || ($renameMap$$ = {}, $constructor_prop$$5$$.$_r2o$ = $renameMap$$);
      $renameMap$$[$renamed$$] = $original_tokens$$;
      $constructor_prop$$5$$.prototype[$original_tokens$$] = $val$$11$$;
    }
  };
  $oj$$.$Object$.$createSubclass$ = function $$oj$$$$Object$$$createSubclass$$($extendingClass$$, $baseClass$$, $typeName$$) {
    $oj$$.$Assert$.$assertFunction$($extendingClass$$);
    $oj$$.$Assert$.$assertFunctionOrNull$($baseClass$$);
    $oj$$.$Assert$.$assertStringOrNull$($typeName$$);
    void 0 === $baseClass$$ && ($baseClass$$ = $oj$$.$Object$);
    $oj$$.$Assert$.assert($extendingClass$$ !== $baseClass$$, "Class can't extend itself");
    var $TempConstructor$$ = $oj$$.$Object$.$_tempSubclassConstructor$;
    $TempConstructor$$.prototype = $baseClass$$.prototype;
    $extendingClass$$.prototype = new $TempConstructor$$;
    $extendingClass$$.prototype.constructor = $extendingClass$$;
    $extendingClass$$.$superclass$ = $extendingClass$$.superclass = $baseClass$$.prototype;
    $typeName$$ && ($extendingClass$$.$_typeName$ = $typeName$$);
  };
  $goog$exportPath_$$("Object.createSubclass", $oj$$.$Object$.$createSubclass$, $oj$$);
  $oj$$.$Object$.$copyPropertiesForClass$ = function $$oj$$$$Object$$$copyPropertiesForClass$$($targetClass$$, $source$$3$$) {
    var $prop$$6$$;
    $oj$$.$Assert$.$assertFunction$($targetClass$$);
    $oj$$.$Assert$.assert(null != $source$$3$$, "source object cannot be null");
    for ($prop$$6$$ in $source$$3$$) {
      $source$$3$$.hasOwnProperty($prop$$6$$) && ($targetClass$$.prototype[$prop$$6$$] = $source$$3$$[$prop$$6$$]);
    }
  };
  $goog$exportPath_$$("Object.copyPropertiesForClass", $oj$$.$Object$.$copyPropertiesForClass$, $oj$$);
  $oj$$.$Object$.$_tempSubclassConstructor$ = function $$oj$$$$Object$$$_tempSubclassConstructor$$() {
  };
  $oj$$.$Object$.prototype.$getClass$ = function $$oj$$$$Object$$$$getClass$$($otherInstance$$) {
    if (void 0 === $otherInstance$$) {
      $otherInstance$$ = this;
    } else {
      if (null === $otherInstance$$) {
        return null;
      }
    }
    return $otherInstance$$.constructor;
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.getClass", {$getClass$:$oj$$.$Object$.prototype.$getClass$});
  $oj$$.$Object$.prototype.clone = function $$oj$$$$Object$$$clone$() {
    var $clone$$1$$ = new this.constructor;
    $oj$$.$CollectionUtils$.$copyInto$($clone$$1$$, this);
    return $clone$$1$$;
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.clone", {clone:$oj$$.$Object$.prototype.clone});
  $oj$$.$Object$.prototype.toString = function $$oj$$$$Object$$$toString$() {
    return this.$toDebugString$();
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.toString", {toString:$oj$$.$Object$.prototype.toString});
  $oj$$.$Object$.prototype.$toDebugString$ = function $$oj$$$$Object$$$$toDebugString$$() {
    return this.getTypeName() + " Object";
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.toDebugString", {$toDebugString$:$oj$$.$Object$.prototype.$toDebugString$});
  $oj$$.$Object$.getTypeName = function $$oj$$$$Object$$getTypeName$($clazz$$) {
    $oj$$.$Assert$.$assertFunction$($clazz$$);
    var $constructorText_matches_typeName$$1$$ = $clazz$$.$_typeName$;
    null == $constructorText_matches_typeName$$1$$ && ($constructorText_matches_typeName$$1$$ = $clazz$$.toString(), $constructorText_matches_typeName$$1$$ = ($constructorText_matches_typeName$$1$$ = $oj$$.$Object$.$_GET_FUNCTION_NAME_REGEXP$.exec($constructorText_matches_typeName$$1$$)) ? $constructorText_matches_typeName$$1$$[1] : "anonymous", $clazz$$.$_typeName$ = $constructorText_matches_typeName$$1$$);
    return $constructorText_matches_typeName$$1$$;
  };
  $goog$exportPath_$$("Object.getTypeName", $oj$$.$Object$.getTypeName, $oj$$);
  $oj$$.$Object$.prototype.getTypeName = function $$oj$$$$Object$$$getTypeName$() {
    return $oj$$.$Object$.getTypeName(this.constructor);
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.getTypeName", {getTypeName:$oj$$.$Object$.prototype.getTypeName});
  $oj$$.$Object$.prototype.Init = function $$oj$$$$Object$$$Init$() {
    $oj$$.$Assert$.$isDebug$() && $oj$$.$Assert$.assert(this.getTypeName, "Not an oj.Object");
    var $currClass$$ = this.constructor;
    $currClass$$.$_initialized$ || $oj$$.$Object$.$_initClasses$($currClass$$);
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.Init", {Init:$oj$$.$Object$.prototype.Init});
  $oj$$.$Object$.$ensureClassInitialization$ = function $$oj$$$$Object$$$ensureClassInitialization$$($clazz$$1$$) {
    $oj$$.$Assert$.$assertFunction$($clazz$$1$$);
    $clazz$$1$$.$_initialized$ || $oj$$.$Object$.$_initClasses$($clazz$$1$$);
  };
  $goog$exportPath_$$("Object.ensureClassInitialization", $oj$$.$Object$.$ensureClassInitialization$, $oj$$);
  $oj$$.$Object$.prototype.$equals$ = function $$oj$$$$Object$$$$equals$$($object$$2$$) {
    return this === $object$$2$$;
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("Object.prototype.equals", {$equals$:$oj$$.$Object$.prototype.$equals$});
  $oj$$.$Object$.$createCallback$ = function $$oj$$$$Object$$$createCallback$$($obj$$40$$, $func$$3$$) {
    $oj$$.$Assert$.$assertFunction$($func$$3$$);
    return $func$$3$$.bind($obj$$40$$);
  };
  $goog$exportPath_$$("Object.createCallback", $oj$$.$Object$.$createCallback$, $oj$$);
  $oj$$.$Object$.$_initClasses$ = function $$oj$$$$Object$$$_initClasses$$($currClass$$1$$) {
    $oj$$.$Assert$.$isDebug$() && ($oj$$.$Assert$.$assertFunction$($currClass$$1$$), $oj$$.$Assert$.assert(!$currClass$$1$$.$_initialized$));
    $currClass$$1$$.$_initialized$ = !0;
    var $InitClassFunc_superclass_superclassConstructor$$ = $currClass$$1$$.$superclass$;
    $InitClassFunc_superclass_superclassConstructor$$ && (($InitClassFunc_superclass_superclassConstructor$$ = $InitClassFunc_superclass_superclassConstructor$$.constructor) && !$InitClassFunc_superclass_superclassConstructor$$.$_initialized$ && $oj$$.$Object$.$_initClasses$($InitClassFunc_superclass_superclassConstructor$$), $oj$$.$Object$.$_applyRenamesToSubclass$($currClass$$1$$));
    ($InitClassFunc_superclass_superclassConstructor$$ = $currClass$$1$$.InitClass || null) || ($InitClassFunc_superclass_superclassConstructor$$ = $currClass$$1$$.InitClass);
    $InitClassFunc_superclass_superclassConstructor$$ && $InitClassFunc_superclass_superclassConstructor$$.call($currClass$$1$$);
  };
  $oj$$.$Object$.$compareValues$ = function $$oj$$$$Object$$$compareValues$$($obj1$$, $obj2$$) {
    if ($obj1$$ === $obj2$$) {
      return!0;
    }
    if (typeof $obj1$$ !== typeof $obj2$$ || null === $obj1$$ || null === $obj2$$) {
      return!1;
    }
    if ($obj1$$.constructor === $obj2$$.constructor) {
      if (Array.isArray($obj1$$)) {
        return $oj$$.$Object$.$_compareArrayValues$($obj1$$, $obj2$$);
      }
      if ($obj1$$.constructor === Object) {
        return $oj$$.$Object$.$__innerEquals$($obj1$$, $obj2$$);
      }
      if ($obj1$$.valueOf && "function" === typeof $obj1$$.valueOf) {
        return $obj1$$.valueOf() === $obj2$$.valueOf();
      }
    }
    return!1;
  };
  $goog$exportPath_$$("Object.compareValues", $oj$$.$Object$.$compareValues$, $oj$$);
  $oj$$.$Object$.$_compareArrayValues$ = function $$oj$$$$Object$$$_compareArrayValues$$($array1$$, $array2$$) {
    if ($array1$$.length !== $array2$$.length) {
      return!1;
    }
    for (var $i$$8$$ = 0, $j$$1$$ = $array1$$.length;$i$$8$$ < $j$$1$$;$i$$8$$++) {
      if (!$oj$$.$Object$.$compareValues$($array1$$[$i$$8$$], $array2$$[$i$$8$$])) {
        return!1;
      }
    }
    return!0;
  };
  $oj$$.$Object$.$_compareSet$ = function $$oj$$$$Object$$$_compareSet$$($array1$$1$$, $array2$$1$$) {
    if (!$array1$$1$$) {
      return!$array2$$1$$ || 0 == $array2$$1$$.length;
    }
    if (!$array2$$1$$) {
      return!$array1$$1$$ || 0 == $array1$$1$$.length;
    }
    if ($array1$$1$$.length != $array2$$1$$.length) {
      return!1;
    }
    for (var $i$$9$$ = 0;$i$$9$$ < $array1$$1$$.length;$i$$9$$++) {
      if ($array1$$1$$[$i$$9$$] != $array2$$1$$[$i$$9$$] && (-1 == $array1$$1$$.indexOf($array2$$1$$[$i$$9$$]) || -1 == $array2$$1$$.indexOf($array1$$1$$[$i$$9$$]))) {
        return!1;
      }
    }
    return!0;
  };
  $oj$$.$Object$.$__innerEquals$ = function $$oj$$$$Object$$$__innerEquals$$($obj1$$1$$, $obj2$$1$$) {
    var $prop$$7$$, $hasProperties$$ = !1;
    if ($obj1$$1$$ === $obj2$$1$$) {
      return!0;
    }
    if (!($obj1$$1$$ instanceof Object && $obj2$$1$$ instanceof Object) || $obj1$$1$$.constructor !== $obj2$$1$$.constructor) {
      return!1;
    }
    for ($prop$$7$$ in $obj1$$1$$) {
      if ($hasProperties$$ || ($hasProperties$$ = !0), $obj1$$1$$.hasOwnProperty($prop$$7$$) && (!$obj2$$1$$.hasOwnProperty($prop$$7$$) || $obj1$$1$$[$prop$$7$$] !== $obj2$$1$$[$prop$$7$$] && ("object" !== typeof $obj1$$1$$[$prop$$7$$] || !$oj$$.$Object$.$__innerEquals$($obj1$$1$$[$prop$$7$$], $obj2$$1$$[$prop$$7$$])))) {
        return!1;
      }
    }
    for ($prop$$7$$ in $obj2$$1$$) {
      if ($hasProperties$$ || ($hasProperties$$ = !0), $obj2$$1$$.hasOwnProperty($prop$$7$$) && !$obj1$$1$$.hasOwnProperty($prop$$7$$)) {
        return!1;
      }
    }
    return $hasProperties$$ ? !0 : JSON.stringify($obj1$$1$$) === JSON.stringify($obj2$$1$$);
  };
  $oj$$.$Object$.$isEmpty$ = function $$oj$$$$Object$$$isEmpty$$($object$$3$$) {
    var $prop$$8$$;
    if (void 0 === $object$$3$$ || null === $object$$3$$) {
      return!0;
    }
    for ($prop$$8$$ in $object$$3$$) {
      if ($object$$3$$.hasOwnProperty($prop$$8$$)) {
        return!1;
      }
    }
    return!0;
  };
  $oj$$.$Object$.$_applyRenamesToSubclass$ = function $$oj$$$$Object$$$_applyRenamesToSubclass$$($currClass$$2$$) {
    $oj$$.$Object$.$_r2o$ && $oj$$.$Object$.$_applyRenamesFromChain$($currClass$$2$$, $currClass$$2$$.$superclass$);
  };
  $oj$$.$Object$.$_applyRenamesFromChain$ = function $$oj$$$$Object$$$_applyRenamesFromChain$$($currClass$$3$$, $superclass$$1$$) {
    if ($superclass$$1$$) {
      var $ancestor$$1_renameMap$$1$$ = $superclass$$1$$.constructor;
      $oj$$.$Object$.$_applyRenamesFromChain$($currClass$$3$$, $ancestor$$1_renameMap$$1$$.$superclass$);
      var $ancestor$$1_renameMap$$1$$ = $ancestor$$1_renameMap$$1$$.$_r2o$, $alias$$;
      if ($ancestor$$1_renameMap$$1$$) {
        for ($alias$$ in $ancestor$$1_renameMap$$1$$) {
          if ($ancestor$$1_renameMap$$1$$.hasOwnProperty($alias$$)) {
            var $orig$$ = $ancestor$$1_renameMap$$1$$[$alias$$];
            if ($alias$$ != $orig$$) {
              var $prot$$ = $currClass$$3$$.prototype;
              !$prot$$.hasOwnProperty($alias$$) && $prot$$.hasOwnProperty($orig$$) ? $prot$$[$alias$$] = $prot$$[$orig$$] : !$prot$$.hasOwnProperty($orig$$) && $prot$$.hasOwnProperty($alias$$) && ($prot$$[$orig$$] = $prot$$[$alias$$]);
            }
          }
        }
      }
    }
  };
  $oj$$.$__isAmdLoaderPresent$ = function $$oj$$$$__isAmdLoaderPresent$$() {
    return "function" === typeof define && define.amd;
  };
  $oj$$.$Assert$ = {};
  $goog$exportPath_$$("Assert", $oj$$.$Assert$, $oj$$);
  $oj$$.$Assert$.$forceDebug$ = function $$oj$$$$Assert$$$forceDebug$$() {
    $oj$$.$Assert$.DEBUG = !0;
  };
  $goog$exportPath_$$("Assert.forceDebug", $oj$$.$Assert$.$forceDebug$, $oj$$);
  $oj$$.$Assert$.$clearDebug$ = function $$oj$$$$Assert$$$clearDebug$$() {
    $oj$$.$Assert$.DEBUG = !1;
  };
  $goog$exportPath_$$("Assert.clearDebug", $oj$$.$Assert$.$clearDebug$, $oj$$);
  $oj$$.$Assert$.$isDebug$ = function $$oj$$$$Assert$$$isDebug$$() {
    return!0 == $oj$$.$Assert$.DEBUG;
  };
  $goog$exportPath_$$("Assert.isDebug", $oj$$.$Assert$.$isDebug$, $oj$$);
  $oj$$.$Assert$.assert = function $$oj$$$$Assert$$assert$($condition$$1$$, $message$$19$$) {
    if ($oj$$.$Assert$.DEBUG && !$condition$$1$$) {
      var $myMessage$$ = $message$$19$$ || "", $i$$10$$;
      if (2 < arguments.length) {
        $myMessage$$ += "(";
        for ($i$$10$$ = 2;$i$$10$$ < arguments.length;$i$$10$$ += 1) {
          $myMessage$$ += arguments[$i$$10$$];
        }
        $myMessage$$ += ")";
      }
      $oj$$.$Assert$.$assertionFailed$($myMessage$$);
    }
  };
  $goog$exportPath_$$("Assert.assert", $oj$$.$Assert$.assert, $oj$$);
  $oj$$.$Assert$.$failedInAbstractFunction$ = function $$oj$$$$Assert$$$failedInAbstractFunction$$() {
    $oj$$.$Assert$.DEBUG && $oj$$.$Assert$.$assertionFailed$("Abstract function called");
  };
  $goog$exportPath_$$("Assert.failedInAbstractFunction", $oj$$.$Assert$.$failedInAbstractFunction$, $oj$$);
  $oj$$.$Assert$.$assertPrototype$ = function $$oj$$$$Assert$$$assertPrototype$$($target$$48$$, $theConstructor$$, $reason$$) {
    var $thePrototype$$;
    $oj$$.$Assert$.DEBUG && (null != $target$$48$$ ? ($oj$$.$Assert$.$assertType$($theConstructor$$, "function", null, 0, !1), $thePrototype$$ = $theConstructor$$.prototype, $thePrototype$$.isPrototypeOf($target$$48$$) || $oj$$.$Assert$.$assertionFailed$("object '" + $target$$48$$ + "' doesn't match prototype " + $thePrototype$$, 0, $reason$$)) : $oj$$.$Assert$.$assertionFailed$("null object doesn't match prototype " + $thePrototype$$, 0, $reason$$));
  };
  $goog$exportPath_$$("Assert.assertPrototype", $oj$$.$Assert$.$assertPrototype$, $oj$$);
  $oj$$.$Assert$.$assertPrototypeOrNull$ = function $$oj$$$$Assert$$$assertPrototypeOrNull$$($target$$49$$, $theConstructor$$1$$, $reason$$1$$) {
    var $thePrototype$$1$$;
    $oj$$.$Assert$.DEBUG && null != $target$$49$$ && (null != $target$$49$$ ? ($oj$$.$Assert$.$assertType$($theConstructor$$1$$, "function", null, 0, !1), $thePrototype$$1$$ = $theConstructor$$1$$.prototype, $thePrototype$$1$$.isPrototypeOf($target$$49$$) || $oj$$.$Assert$.$assertionFailed$("object '" + $target$$49$$ + "' doesn't match prototype " + $thePrototype$$1$$, 0, $reason$$1$$)) : $oj$$.$Assert$.$assertionFailed$("null object doesn't match prototype " + $thePrototype$$1$$, 0, $reason$$1$$));
  };
  $goog$exportPath_$$("Assert.assertPrototypeOrNull", $oj$$.$Assert$.$assertPrototypeOrNull$, $oj$$);
  $oj$$.$Assert$.$assertPrototypes$ = function $$oj$$$$Assert$$$assertPrototypes$$($target$$50$$, $instanceOne_thePrototype$$2$$, $instanceTwo_thePrototypeTwo$$, $reason$$2$$) {
    $oj$$.$Assert$.DEBUG && ($instanceOne_thePrototype$$2$$ = $instanceOne_thePrototype$$2$$.prototype, $instanceTwo_thePrototypeTwo$$ = $instanceTwo_thePrototypeTwo$$.prototype, $instanceOne_thePrototype$$2$$.isPrototypeOf($target$$50$$) || $instanceTwo_thePrototypeTwo$$.isPrototypeOf($target$$50$$) || $oj$$.$Assert$.$assertionFailed$("object '" + $target$$50$$ + "' doesn't match prototype " + $instanceOne_thePrototype$$2$$ + " or " + $instanceTwo_thePrototypeTwo$$, 0, $reason$$2$$));
  };
  $goog$exportPath_$$("Assert.assertPrototypes", $oj$$.$Assert$.$assertPrototypes$, $oj$$);
  $oj$$.$Assert$.$assertDomNodeOrNull$ = function $$oj$$$$Assert$$$assertDomNodeOrNull$$($target$$51$$) {
    $oj$$.$Assert$.DEBUG && $target$$51$$ && void 0 === $target$$51$$.nodeType && $oj$$.$Assert$.$assertionFailed$($target$$51$$ + " is not a DOM Node");
  };
  $goog$exportPath_$$("Assert.assertDomNodeOrNull", $oj$$.$Assert$.$assertDomNodeOrNull$, $oj$$);
  $oj$$.$Assert$.$assertDomNode$ = function $$oj$$$$Assert$$$assertDomNode$$($target$$52$$) {
    $oj$$.$Assert$.DEBUG && ($target$$52$$ && void 0 !== $target$$52$$.nodeType || $oj$$.$Assert$.$assertionFailed$($target$$52$$ + " is not a DOM Node"));
  };
  $goog$exportPath_$$("Assert.assertDomNode", $oj$$.$Assert$.$assertDomNode$, $oj$$);
  $oj$$.$Assert$.$assertDomElement$ = function $$oj$$$$Assert$$$assertDomElement$$($target$$53$$, $nodeName$$) {
    $oj$$.$Assert$.DEBUG && ($oj$$.$Assert$.$assertDomNode$($target$$53$$), 1 !== $target$$53$$.nodeType ? $oj$$.$Assert$.$assertionFailed$($target$$53$$ + " is not a DOM Element") : $nodeName$$ && $target$$53$$.nodeName !== $nodeName$$ && $oj$$.$Assert$.$assertionFailed$($target$$53$$ + " is not a " + $nodeName$$ + " Element"));
  };
  $goog$exportPath_$$("Assert.assertDomElement", $oj$$.$Assert$.$assertDomElement$, $oj$$);
  $oj$$.$Assert$.$assertDomElementOrNull$ = function $$oj$$$$Assert$$$assertDomElementOrNull$$($target$$54$$, $nodeName$$1$$) {
    $oj$$.$Assert$.DEBUG && null != $target$$54$$ && ($oj$$.$Assert$.$assertDomNode$($target$$54$$), 1 !== $target$$54$$.nodeType ? $oj$$.$Assert$.$assertionFailed$($target$$54$$ + " is not a DOM Element") : $nodeName$$1$$ && $target$$54$$.nodeName !== $nodeName$$1$$ && $oj$$.$Assert$.$assertionFailed$($target$$54$$ + " is not a " + $nodeName$$1$$ + " Element"));
  };
  $goog$exportPath_$$("Assert.assertDomElementOrNull", $oj$$.$Assert$.$assertDomElementOrNull$, $oj$$);
  $oj$$.$Assert$.$assertType$ = function $$oj$$$$Assert$$$assertType$$($message$$20_target$$55$$, $type$$62$$, $prefix$$2$$, $depth$$3$$, $nullOK$$) {
    !$oj$$.$Assert$.DEBUG || null == $message$$20_target$$55$$ && $nullOK$$ || typeof $message$$20_target$$55$$ === $type$$62$$ || ($message$$20_target$$55$$ = $message$$20_target$$55$$ + " is not of type " + $type$$62$$, $prefix$$2$$ && ($message$$20_target$$55$$ = $prefix$$2$$ + $message$$20_target$$55$$), $oj$$.$Assert$.$assertionFailed$($message$$20_target$$55$$));
  };
  $goog$exportPath_$$("Assert.assertType", $oj$$.$Assert$.$assertType$, $oj$$);
  $oj$$.$Assert$.$assertObject$ = function $$oj$$$$Assert$$$assertObject$$($target$$56$$, $prefix$$3$$) {
    $oj$$.$Assert$.DEBUG && $oj$$.$Assert$.$assertType$($target$$56$$, "object", $prefix$$3$$, 0, !1);
  };
  $goog$exportPath_$$("Assert.assertObject", $oj$$.$Assert$.$assertObject$, $oj$$);
  $oj$$.$Assert$.$assertObjectOrNull$ = function $$oj$$$$Assert$$$assertObjectOrNull$$($target$$57$$, $prefix$$4$$) {
    $oj$$.$Assert$.DEBUG && $oj$$.$Assert$.$assertType$($target$$57$$, "object", $prefix$$4$$, 0, !0);
  };
  $goog$exportPath_$$("Assert.assertObjectOrNull", $oj$$.$Assert$.$assertObjectOrNull$, $oj$$);
  $oj$$.$Assert$.$assertNonEmptyString$ = function $$oj$$$$Assert$$$assertNonEmptyString$$($target$$58$$, $prefix$$5$$) {
    $oj$$.$Assert$.DEBUG && ($oj$$.$Assert$.$assertType$($target$$58$$, "string", $prefix$$5$$, 0, !1), $oj$$.$Assert$.assert(0 < $target$$58$$.length, "empty string"));
  };
  $goog$exportPath_$$("Assert.assertNonEmptyString", $oj$$.$Assert$.$assertNonEmptyString$, $oj$$);
  $oj$$.$Assert$.$assertString$ = function $$oj$$$$Assert$$$assertString$$($target$$59$$, $prefix$$6$$) {
    $oj$$.$Assert$.DEBUG && $oj$$.$Assert$.$assertType$($target$$59$$, "string", $prefix$$6$$, 0, !1);
  };
  $goog$exportPath_$$("Assert.assertString", $oj$$.$Assert$.$assertString$, $oj$$);
  $oj$$.$Assert$.$assertStringOrNull$ = function $$oj$$$$Assert$$$assertStringOrNull$$($target$$60$$, $prefix$$7$$) {
    $oj$$.$Assert$.DEBUG && $oj$$.$Assert$.$assertType$($target$$60$$, "string", $prefix$$7$$, 0, !0);
  };
  $goog$exportPath_$$("Assert.assertStringOrNull", $oj$$.$Assert$.$assertStringOrNull$, $oj$$);
  $oj$$.$Assert$.$assertFunction$ = function $$oj$$$$Assert$$$assertFunction$$($target$$61$$, $prefix$$8$$) {
    $oj$$.$Assert$.DEBUG && $oj$$.$Assert$.$assertType$($target$$61$$, "function", $prefix$$8$$, 0, !1);
  };
  $goog$exportPath_$$("Assert.assertFunction", $oj$$.$Assert$.$assertFunction$, $oj$$);
  $oj$$.$Assert$.$assertFunctionOrNull$ = function $$oj$$$$Assert$$$assertFunctionOrNull$$($target$$62$$, $prefix$$9$$) {
    $oj$$.$Assert$.DEBUG && $oj$$.$Assert$.$assertType$($target$$62$$, "function", $prefix$$9$$, 0, !0);
  };
  $goog$exportPath_$$("Assert.assertFunctionOrNull", $oj$$.$Assert$.$assertFunctionOrNull$, $oj$$);
  $oj$$.$Assert$.$assertBoolean$ = function $$oj$$$$Assert$$$assertBoolean$$($target$$63$$, $prefix$$10$$) {
    $oj$$.$Assert$.DEBUG && $oj$$.$Assert$.$assertType$($target$$63$$, "boolean", $prefix$$10$$, 0, !1);
  };
  $goog$exportPath_$$("Assert.assertBoolean", $oj$$.$Assert$.$assertBoolean$, $oj$$);
  $oj$$.$Assert$.$assertNumber$ = function $$oj$$$$Assert$$$assertNumber$$($target$$64$$, $prefix$$11$$) {
    $oj$$.$Assert$.DEBUG && $oj$$.$Assert$.$assertType$($target$$64$$, "number", $prefix$$11$$, 0, !1);
  };
  $goog$exportPath_$$("Assert.assertNumber", $oj$$.$Assert$.$assertNumber$, $oj$$);
  $oj$$.$Assert$.$assertNumberOrNull$ = function $$oj$$$$Assert$$$assertNumberOrNull$$($target$$65$$, $prefix$$12$$) {
    $oj$$.$Assert$.DEBUG && $oj$$.$Assert$.$assertType$($target$$65$$, "number", $prefix$$12$$, 0, !0);
  };
  $goog$exportPath_$$("Assert.assertNumberOrNull", $oj$$.$Assert$.$assertNumberOrNull$, $oj$$);
  $oj$$.$Assert$.$assertArray$ = function $$oj$$$$Assert$$$assertArray$$($target$$66$$, $message$$21$$) {
    $oj$$.$Assert$.DEBUG && !Array.isArray($target$$66$$) && (void 0 === $message$$21$$ && ($message$$21$$ = $target$$66$$ + " is not an array"), $oj$$.$Assert$.$assertionFailed$($message$$21$$));
  };
  $goog$exportPath_$$("Assert.assertArray", $oj$$.$Assert$.$assertArray$, $oj$$);
  $oj$$.$Assert$.$assertArrayOrNull$ = function $$oj$$$$Assert$$$assertArrayOrNull$$($target$$67$$, $message$$22$$) {
    $oj$$.$Assert$.DEBUG && null != $target$$67$$ && !Array.isArray($target$$67$$) && (void 0 === $message$$22$$ && ($message$$22$$ = $target$$67$$ + " is not an array"), $oj$$.$Assert$.$assertionFailed$($message$$22$$));
  };
  $goog$exportPath_$$("Assert.assertArrayOrNull", $oj$$.$Assert$.$assertArrayOrNull$, $oj$$);
  $oj$$.$Assert$.$assertNonNumeric$ = function $$oj$$$$Assert$$$assertNonNumeric$$($target$$68$$, $message$$23$$) {
    $oj$$.$Assert$.DEBUG && !isNaN($target$$68$$) && (void 0 === $message$$23$$ && ($message$$23$$ = $target$$68$$ + " is convertible to a number"), $oj$$.$Assert$.$assertionFailed$($message$$23$$));
  };
  $goog$exportPath_$$("Assert.assertNonNumeric", $oj$$.$Assert$.$assertNonNumeric$, $oj$$);
  $oj$$.$Assert$.$assertNumeric$ = function $$oj$$$$Assert$$$assertNumeric$$($target$$69$$, $message$$24$$) {
    $oj$$.$Assert$.DEBUG && isNaN($target$$69$$) && (void 0 === $message$$24$$ && ($message$$24$$ = $target$$69$$ + " is not convertible to a number"), $oj$$.$Assert$.$assertionFailed$($message$$24$$));
  };
  $goog$exportPath_$$("Assert.assertNumeric", $oj$$.$Assert$.$assertNumeric$, $oj$$);
  $oj$$.$Assert$.$assertInSet$ = function $$oj$$$$Assert$$$assertInSet$$($value$$54$$, $set$$1$$, $keyString_message$$25$$) {
    var $k$$;
    if (null == $value$$54$$ || void 0 === $set$$1$$[$value$$54$$.toString()]) {
      if (void 0 === $keyString_message$$25$$) {
        $keyString_message$$25$$ = " is not in set: {";
        for ($k$$ in $set$$1$$) {
          $set$$1$$.hasOwnProperty($k$$) && ($keyString_message$$25$$ += $k$$, $keyString_message$$25$$ += ",");
        }
        $keyString_message$$25$$ = $value$$54$$ + ($keyString_message$$25$$ + "}");
      }
      $oj$$.$Assert$.$assertionFailed$($keyString_message$$25$$);
    }
  };
  $goog$exportPath_$$("Assert.assertInSet", $oj$$.$Assert$.$assertInSet$, $oj$$);
  $oj$$.$Assert$.$assertionFailed$ = function $$oj$$$$Assert$$$assertionFailed$$($message$$26$$, $errorMessage$$1_skipLevel$$, $reason$$3$$) {
    $errorMessage$$1_skipLevel$$ = "Assertion";
    $reason$$3$$ && ($errorMessage$$1_skipLevel$$ += " (" + $reason$$3$$ + ")");
    $errorMessage$$1_skipLevel$$ += " failed: ";
    void 0 !== $message$$26$$ && ($errorMessage$$1_skipLevel$$ += $message$$26$$);
    throw Error($errorMessage$$1_skipLevel$$);
  };
  $goog$exportPath_$$("Assert.assertionFailed", $oj$$.$Assert$.$assertionFailed$, $oj$$);
  var $_assertSetting$$ = $_scope$$.__oj_Assert_DEBUG;
  void 0 !== $_assertSetting$$ && ($oj$$.$Assert$.DEBUG = $_assertSetting$$);
  $oj$$.$EventSource$ = function $$oj$$$$EventSource$$() {
    this.Init();
  };
  $goog$exportPath_$$("EventSource", $oj$$.$EventSource$, $oj$$);
  $oj$$.$Object$.$createSubclass$($oj$$.$EventSource$, $oj$$.$Object$, "oj.EventSource");
  $oj$$.$EventSource$.prototype.Init = function $$oj$$$$EventSource$$$Init$() {
    this.$_eventHandlers$ = [];
    $oj$$.$EventSource$.$superclass$.Init.call(this);
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("EventSource.prototype.Init", {Init:$oj$$.$EventSource$.prototype.Init});
  $oj$$.$EventSource$.prototype.on = function $$oj$$$$EventSource$$$on$($eventType$$8$$, $eventHandler$$) {
    var $foundEventHandler$$ = !1, $i$$11$$;
    for ($i$$11$$ = 0;$i$$11$$ < this.$_eventHandlers$.length;$i$$11$$++) {
      if (this.$_eventHandlers$[$i$$11$$].eventType == $eventType$$8$$ && this.$_eventHandlers$[$i$$11$$].eventHandlerFunc == $eventHandler$$) {
        $foundEventHandler$$ = !0;
        break;
      }
    }
    $foundEventHandler$$ || this.$_eventHandlers$.push({eventType:$eventType$$8$$, eventHandlerFunc:$eventHandler$$});
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("EventSource.prototype.on", {on:$oj$$.$EventSource$.prototype.on});
  $oj$$.$EventSource$.prototype.off = function $$oj$$$$EventSource$$$off$($eventType$$9$$, $eventHandler$$1$$) {
    var $i$$12$$;
    for ($i$$12$$ = this.$_eventHandlers$.length - 1;0 <= $i$$12$$;$i$$12$$--) {
      if (this.$_eventHandlers$[$i$$12$$].eventType == $eventType$$9$$ && this.$_eventHandlers$[$i$$12$$].eventHandlerFunc == $eventHandler$$1$$) {
        this.$_eventHandlers$.splice($i$$12$$, 1);
        break;
      }
    }
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("EventSource.prototype.off", {off:$oj$$.$EventSource$.prototype.off});
  $oj$$.$EventSource$.prototype.handleEvent = function $$oj$$$$EventSource$$$handleEvent$($eventType$$10$$, $event$$2$$) {
    var $i$$13$$, $eventHandler$$2_returnValue$$;
    for ($i$$13$$ = 0;$i$$13$$ < this.$_eventHandlers$.length;$i$$13$$++) {
      if ($eventHandler$$2_returnValue$$ = this.$_eventHandlers$[$i$$13$$], $eventHandler$$2_returnValue$$.eventType == $eventType$$10$$ && ($eventHandler$$2_returnValue$$ = $eventHandler$$2_returnValue$$.eventHandlerFunc.apply(this, Array.prototype.slice.call(arguments).slice(1)), !1 === $eventHandler$$2_returnValue$$)) {
        return!1;
      }
    }
    return!0;
  };
  $oj$$.$Object$.$exportPrototypeSymbol$("EventSource.prototype.handleEvent", {handleEvent:$oj$$.$EventSource$.prototype.handleEvent});
  $oj$$.$AgentUtils$ = function $$oj$$$$AgentUtils$$() {
  };
  $oj$$.$AgentUtils$.$BROWSER$ = {$IE$:"ie", $FIREFOX$:"firefox", $SAFARI$:"safari", $CHROME$:"chrome", $UNKNOWN$:"unknown"};
  $oj$$.$AgentUtils$.$ENGINE$ = {$TRIDENT$:"trident", $WEBKIT$:"webkit", $GECKO$:"gecko", $UNKNOWN$:"unknown"};
  $oj$$.$AgentUtils$.$OS$ = {$WINDOWS$:"Windows", $SOLARIS$:"Solaris", $MAC$:"Mac", $UNKNOWN$:"Unknown", $ANDROID$:"Android", $IOS$:"IOS", $LINUX$:"Linux"};
  $oj$$.$AgentUtils$.$getAgentInfo$ = function $$oj$$$$AgentUtils$$$getAgentInfo$$() {
    var $userAgent$$;
    $oj$$.$StringUtils$.$isEmptyOrUndefined$($userAgent$$) && ($userAgent$$ = navigator.userAgent);
    $userAgent$$ = $userAgent$$.toLowerCase();
    var $hashCode$$ = $oj$$.$StringUtils$.$hashCode$($userAgent$$), $currAgentInfo_os$$ = $oj$$.$AgentUtils$.$_currAgentInfo$;
    if ($currAgentInfo_os$$ && $currAgentInfo_os$$.hashCode === $hashCode$$) {
      return{os:$currAgentInfo_os$$.os, browser:$currAgentInfo_os$$.browser, browserVersion:$currAgentInfo_os$$.browserVersion, engine:$currAgentInfo_os$$.engine, engineVersion:$currAgentInfo_os$$.engineVersion, hashCode:$currAgentInfo_os$$.hashCode};
    }
    var $currAgentInfo_os$$ = $oj$$.$AgentUtils$.$OS$.$UNKNOWN$, $browser$$ = $oj$$.$AgentUtils$.$BROWSER$.$UNKNOWN$, $browserVersion$$ = 0, $engine$$ = $oj$$.$AgentUtils$.$ENGINE$.$UNKNOWN$, $engineVersion$$ = 0;
    -1 < $userAgent$$.indexOf("iphone") || -1 < $userAgent$$.indexOf("ipad") ? $currAgentInfo_os$$ = $oj$$.$AgentUtils$.$OS$.$IOS$ : -1 < $userAgent$$.indexOf("mac") ? $currAgentInfo_os$$ = $oj$$.$AgentUtils$.$OS$.$MAC$ : -1 < $userAgent$$.indexOf("sunos") ? $currAgentInfo_os$$ = $oj$$.$AgentUtils$.$OS$.$SOLARIS$ : -1 < $userAgent$$.indexOf("android") ? $currAgentInfo_os$$ = $oj$$.$AgentUtils$.$OS$.$ANDROID$ : -1 < $userAgent$$.indexOf("linux") ? $currAgentInfo_os$$ = $oj$$.$AgentUtils$.$OS$.$LINUX$ : 
    -1 < $userAgent$$.indexOf("win") && ($currAgentInfo_os$$ = $oj$$.$AgentUtils$.$OS$.$WINDOWS$);
    -1 < $userAgent$$.indexOf("msie") ? ($browser$$ = $oj$$.$AgentUtils$.$BROWSER$.$IE$, $browserVersion$$ = $oj$$.$AgentUtils$.$_parseFloatVersion$($userAgent$$, /msie (\d+[.]\d+)/), $userAgent$$.indexOf("trident") && ($engine$$ = $oj$$.$AgentUtils$.$ENGINE$.$TRIDENT$, $engineVersion$$ = $oj$$.$AgentUtils$.$_parseFloatVersion$($userAgent$$, /trident\/(\d+[.]\d+)/))) : -1 < $userAgent$$.indexOf("trident") ? ($browser$$ = $oj$$.$AgentUtils$.$BROWSER$.$IE$, $browserVersion$$ = $oj$$.$AgentUtils$.$_parseFloatVersion$($userAgent$$, 
    /rv:(\d+[.]\d+)/), $userAgent$$.indexOf("trident") && ($engine$$ = $oj$$.$AgentUtils$.$ENGINE$.$TRIDENT$, $engineVersion$$ = $oj$$.$AgentUtils$.$_parseFloatVersion$($userAgent$$, /trident\/(\d+[.]\d+)/))) : -1 < $userAgent$$.indexOf("chrome") ? ($browser$$ = $oj$$.$AgentUtils$.$BROWSER$.$CHROME$, $browserVersion$$ = $oj$$.$AgentUtils$.$_parseFloatVersion$($userAgent$$, /chrome\/(\d+[.]\d+)/), $engine$$ = $oj$$.$AgentUtils$.$ENGINE$.$WEBKIT$, $engineVersion$$ = $oj$$.$AgentUtils$.$_parseFloatVersion$($userAgent$$, 
    /applewebkit\/(\d+[.]\d+)/)) : -1 < $userAgent$$.indexOf("safari") ? ($browser$$ = $oj$$.$AgentUtils$.$BROWSER$.$SAFARI$, $browserVersion$$ = $oj$$.$AgentUtils$.$_parseFloatVersion$($userAgent$$, /version\/(\d+[.]\d+)/), $engine$$ = $oj$$.$AgentUtils$.$ENGINE$.$WEBKIT$, $engineVersion$$ = $oj$$.$AgentUtils$.$_parseFloatVersion$($userAgent$$, /applewebkit\/(\d+[.]\d+)/)) : -1 < $userAgent$$.indexOf("firefox") && ($browser$$ = $oj$$.$AgentUtils$.$BROWSER$.$FIREFOX$, $browserVersion$$ = $oj$$.$AgentUtils$.$_parseFloatVersion$($userAgent$$, 
    /rv:(\d+[.]\d+)/), $engine$$ = $oj$$.$AgentUtils$.$ENGINE$.$GECKO$, $engineVersion$$ = $oj$$.$AgentUtils$.$_parseFloatVersion$($userAgent$$, /gecko\/(\d+)/));
    $currAgentInfo_os$$ = $oj$$.$AgentUtils$.$_currAgentInfo$ = {hashCode:$hashCode$$, os:$currAgentInfo_os$$, browser:$browser$$, browserVersion:$browserVersion$$, engine:$engine$$, engineVersion:$engineVersion$$};
    return{os:$currAgentInfo_os$$.os, browser:$currAgentInfo_os$$.browser, browserVersion:$currAgentInfo_os$$.browserVersion, engine:$currAgentInfo_os$$.engine, engineVersion:$currAgentInfo_os$$.engineVersion, hashCode:$currAgentInfo_os$$.hashCode};
  };
  $oj$$.$AgentUtils$.$_parseFloatVersion$ = function $$oj$$$$AgentUtils$$$_parseFloatVersion$$($userAgent$$1$$, $versionNumberPattern$$) {
    var $matches$$1_versionString$$ = $userAgent$$1$$.match($versionNumberPattern$$);
    return $matches$$1_versionString$$ && ($matches$$1_versionString$$ = $matches$$1_versionString$$[1]) ? parseFloat($matches$$1_versionString$$) : 0;
  };
  $oj$$.$CollectionUtils$ = {};
  $goog$exportPath_$$("CollectionUtils", $oj$$.$CollectionUtils$, $oj$$);
  $oj$$.$CollectionUtils$.$copyInto$ = function $$oj$$$$CollectionUtils$$$copyInto$$($target$$70$$, $source$$4$$, $keyConverter$$, $recurse$$, $maxRecursionDepth$$) {
    return $oj$$.$CollectionUtils$.$_copyIntoImpl$($target$$70$$, $source$$4$$, $keyConverter$$, $recurse$$, $maxRecursionDepth$$, 0);
  };
  $goog$exportPath_$$("CollectionUtils.copyInto", $oj$$.$CollectionUtils$.$copyInto$, $oj$$);
  $oj$$.$CollectionUtils$.isPlainObject = function $$oj$$$$CollectionUtils$$isPlainObject$($obj$$41$$) {
    if ("object" === typeof $obj$$41$$) {
      try {
        if ($obj$$41$$.constructor && $obj$$41$$.constructor.prototype.hasOwnProperty("isPrototypeOf")) {
          return!0;
        }
      } catch ($e$$12$$) {
      }
    }
    return!1;
  };
  $goog$exportPath_$$("CollectionUtils.isPlainObject", $oj$$.$CollectionUtils$.isPlainObject, $oj$$);
  $oj$$.$CollectionUtils$.$_copyIntoImpl$ = function $$oj$$$$CollectionUtils$$$_copyIntoImpl$$($target$$71$$, $source$$5$$, $keyConverter$$1$$, $recurse$$1$$, $maxRecursionDepth$$1$$, $currentLevel$$) {
    var $k$$1_sourceVal$$, $targetKey$$, $keys$$;
    if ($target$$71$$ && $source$$5$$ && $target$$71$$ !== $source$$5$$) {
      $keys$$ = Object.keys($source$$5$$);
      for (var $i$$14$$ = 0;$i$$14$$ < $keys$$.length;$i$$14$$++) {
        $k$$1_sourceVal$$ = $keys$$[$i$$14$$];
        $targetKey$$ = $keyConverter$$1$$ ? $keyConverter$$1$$($k$$1_sourceVal$$) : $k$$1_sourceVal$$;
        $k$$1_sourceVal$$ = $source$$5$$[$k$$1_sourceVal$$];
        var $recursed$$ = !1;
        if ($recurse$$1$$ && $currentLevel$$ < $maxRecursionDepth$$1$$) {
          var $targetVal$$ = $target$$71$$[$targetKey$$];
          $oj$$.$CollectionUtils$.isPlainObject($targetVal$$) && $oj$$.$CollectionUtils$.isPlainObject($k$$1_sourceVal$$) && ($recursed$$ = !0, $oj$$.$CollectionUtils$.$_copyIntoImpl$($targetVal$$, $k$$1_sourceVal$$, $keyConverter$$1$$, !0, $maxRecursionDepth$$1$$, $currentLevel$$ + 1));
        }
        $recursed$$ || ($target$$71$$[$targetKey$$] = $k$$1_sourceVal$$);
      }
    }
    return $target$$71$$;
  };
  $oj$$.$Config$ = {};
  $goog$exportPath_$$("Config", $oj$$.$Config$, $oj$$);
  $oj$$.$Config$.$getLocale$ = function $$oj$$$$Config$$$getLocale$$() {
    var $loc_rl$$;
    if ($oj$$.$__isAmdLoaderPresent$()) {
      return $oj$$.$Assert$.assert(void 0 !== $ojt$$1$$, "ojtranslations module must be defined"), $loc_rl$$ = $ojt$$1$$._ojLocale_, "root" == $loc_rl$$ ? "en" : $loc_rl$$;
    }
    $loc_rl$$ = $oj$$.$Config$.$_locale$;
    null == $loc_rl$$ && (($loc_rl$$ = document.documentElement.lang) || ($loc_rl$$ = void 0 === navigator ? "en" : (navigator.language || navigator.userLanguage || "en").toLowerCase()), $oj$$.$Config$.$_locale$ = $loc_rl$$ = $loc_rl$$.toLowerCase());
    return $loc_rl$$;
  };
  $goog$exportPath_$$("Config.getLocale", $oj$$.$Config$.$getLocale$, $oj$$);
  $oj$$.$Config$.$setLocale$ = function $$oj$$$$Config$$$setLocale$$($locale$$, $callback$$56$$) {
    if ($oj$$.$__isAmdLoaderPresent$()) {
      var $requestedBundles$$ = ["ojL10n!ojtranslations/nls/" + $locale$$ + "/ojtranslations"];
      $oj$$.$LocaleData$ && $requestedBundles$$.push("ojL10n!ojtranslations/nls/" + $locale$$ + "/localeElements");
      $require$$2$$($requestedBundles$$, function($translations$$, $localeElements$$) {
        $ojt$$1$$ = $translations$$;
        $localeElements$$ && $oj$$.$LocaleData$.$__updateBundle$($localeElements$$);
        $callback$$56$$ && $callback$$56$$();
      });
    } else {
      $oj$$.$Config$.$_locale$ = $locale$$, $callback$$56$$ && $callback$$56$$();
    }
  };
  $goog$exportPath_$$("Config.setLocale", $oj$$.$Config$.$setLocale$, $oj$$);
  $oj$$.$Config$.$getResourceUrl$ = function $$oj$$$$Config$$$getResourceUrl$$($relativePath$$) {
    var $base$$2_fullUrlExp_modulePath$$ = /^\/|:/;
    return null == $relativePath$$ || $base$$2_fullUrlExp_modulePath$$.test($relativePath$$) ? $relativePath$$ : ($base$$2_fullUrlExp_modulePath$$ = $oj$$.$Config$.$_resourceBaseUrl$) ? $base$$2_fullUrlExp_modulePath$$ + ("/" == $base$$2_fullUrlExp_modulePath$$.charAt($base$$2_fullUrlExp_modulePath$$.length - 1) ? "" : "/") + $relativePath$$ : $oj$$.$__isAmdLoaderPresent$() ? ($base$$2_fullUrlExp_modulePath$$ = $require$$2$$.toUrl("ojs/_foo_"), $base$$2_fullUrlExp_modulePath$$.replace(/[^\/]*$/, 
    "../" + $relativePath$$)) : $relativePath$$;
  };
  $goog$exportPath_$$("Config.getResourceUrl", $oj$$.$Config$.$getResourceUrl$, $oj$$);
  $oj$$.$Config$.$setResourceBaseUrl$ = function $$oj$$$$Config$$$setResourceBaseUrl$$($baseUrl$$) {
    $oj$$.$Config$.$_resourceBaseUrl$ = $baseUrl$$;
  };
  $goog$exportPath_$$("Config.setResourceBaseUrl", $oj$$.$Config$.$setResourceBaseUrl$, $oj$$);
  $oj$$.$Config$.$setAutomationMode$ = function $$oj$$$$Config$$$setAutomationMode$$($mode$$10$$) {
    $oj$$.$Config$.$_automationMode$ = $mode$$10$$;
  };
  $goog$exportPath_$$("Config.setAutomationMode", $oj$$.$Config$.$setAutomationMode$, $oj$$);
  $oj$$.$Config$.$getAutomationMode$ = function $$oj$$$$Config$$$getAutomationMode$$() {
    return $oj$$.$Config$.$_automationMode$;
  };
  $goog$exportPath_$$("Config.getAutomationMode", $oj$$.$Config$.$getAutomationMode$, $oj$$);
  $oj$$.$Config$.$getVersionInfo$ = function $$oj$$$$Config$$$getVersionInfo$$() {
    var $info$$ = "Oracle JET Version: " + $oj$$.version + "\n", $info$$ = $info$$ + ("Oracle JET Revision: " + $oj$$.revision + "\n"), $windowDefined$$ = "undefined" !== typeof window;
    $windowDefined$$ && window.navigator && ($info$$ += "Browser: " + window.navigator.userAgent + "\n", $info$$ += "Browser Platform: " + window.navigator.platform + "\n");
    $ && ($.fn && ($info$$ += "jQuery Version: " + $.fn.jquery + "\n"), $.ui && $.ui.version && ($info$$ += "jQuery UI Version: " + $.ui.version + "\n"));
    $oj$$.$ComponentBinding$ && ($info$$ += "Knockout Version: " + $oj$$.$ComponentBinding$.$__getKnockoutVersion$() + "\n");
    $windowDefined$$ && window.$require$ && ($info$$ += "Require Version: " + window.$require$.version + "\n");
    return $info$$;
  };
  $goog$exportPath_$$("Config.getVersionInfo", $oj$$.$Config$.$getVersionInfo$, $oj$$);
  $oj$$.$Config$.$logVersionInfo$ = function $$oj$$$$Config$$$logVersionInfo$$() {
    console.log($oj$$.$Config$.$getVersionInfo$());
  };
  $goog$exportPath_$$("Config.logVersionInfo", $oj$$.$Config$.$logVersionInfo$, $oj$$);
  (function() {
    function $CustomEvent$$1$$($event$$3$$, $params$$2$$) {
      $params$$2$$ = $params$$2$$ || {bubbles:!1, cancelable:!1, detail:void 0};
      var $evt$$16$$ = document.createEvent("CustomEvent");
      $evt$$16$$.initCustomEvent($event$$3$$, $params$$2$$.bubbles, $params$$2$$.cancelable, $params$$2$$.detail);
      return $evt$$16$$;
    }
    "undefined" !== typeof window && "function" !== typeof window.CustomEvent && ($CustomEvent$$1$$.prototype = window.Event.prototype, window.CustomEvent = $CustomEvent$$1$$);
  })();
  $oj$$.ResponsiveUtils = {};
  $oj$$.ResponsiveUtils.SCREEN_RANGE = {SM:"sm", MD:"md", LG:"lg", XL:"xl", XXL:"xxl"};
  $oj$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY = {SM_UP:"sm-up", MD_UP:"md-up", LG_UP:"lg-up", XL_UP:"xl-up", XXL_UP:"xxl-up", SM_ONLY:"sm-only", MD_ONLY:"md-only", LG_ONLY:"lg-only", XL_ONLY:"xl-only", MD_DOWN:"md-down", LG_DOWN:"lg-down", XL_DOWN:"xl-down", HIGH_RESOLUTION:"high-resolution"};
  $oj$$.ResponsiveUtils.$_RANGE$ = {};
  $oj$$.ResponsiveUtils.$_RANGE$[$oj$$.ResponsiveUtils.SCREEN_RANGE.SM] = 0;
  $oj$$.ResponsiveUtils.$_RANGE$[$oj$$.ResponsiveUtils.SCREEN_RANGE.MD] = 1;
  $oj$$.ResponsiveUtils.$_RANGE$[$oj$$.ResponsiveUtils.SCREEN_RANGE.LG] = 2;
  $oj$$.ResponsiveUtils.$_RANGE$[$oj$$.ResponsiveUtils.SCREEN_RANGE.XL] = 3;
  $oj$$.ResponsiveUtils.$_RANGE$[$oj$$.ResponsiveUtils.SCREEN_RANGE.XXL] = 4;
  $oj$$.ResponsiveUtils.$_getMediaQueryFromClass$ = function $$oj$$$ResponsiveUtils$$_getMediaQueryFromClass$$($selector$$14$$) {
    var $elem$$12$$ = document.getElementsByClassName($selector$$14$$).item(0);
    null === $elem$$12$$ && ($elem$$12$$ = document.createElement("meta"), $elem$$12$$.className = $selector$$14$$, document.head.appendChild($elem$$12$$));
    return window.getComputedStyle($elem$$12$$).getPropertyValue("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "");
  };
  $oj$$.ResponsiveUtils.getFrameworkQuery = function $$oj$$$ResponsiveUtils$getFrameworkQuery$($frameworkQueryKey_query$$2$$) {
    $frameworkQueryKey_query$$2$$ = $oj$$.ResponsiveUtils.$_getMediaQueryFromClass$("oj-mq-" + $frameworkQueryKey_query$$2$$);
    return "null" == $frameworkQueryKey_query$$2$$ ? null : $frameworkQueryKey_query$$2$$;
  };
  $oj$$.ResponsiveUtils.compare = function $$oj$$$ResponsiveUtils$compare$($size1$$, $size2$$) {
    var $range1$$ = $oj$$.ResponsiveUtils.$_RANGE$[$size1$$], $range2$$ = $oj$$.ResponsiveUtils.$_RANGE$[$size2$$];
    if (void 0 == $range1$$) {
      throw "size1 param " + $size1$$ + " illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";
    }
    if (void 0 == $range2$$) {
      throw "size2 param " + $size2$$ + " illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";
    }
    return $range1$$ - $range2$$;
  };
  $oj$$.$StringUtils$ = {};
  $goog$exportPath_$$("StringUtils", $oj$$.$StringUtils$, $oj$$);
  $oj$$.$StringUtils$.$_TRIM_ALL_RE$ = /^\s*|\s*$/g;
  $oj$$.$StringUtils$.$isEmpty$ = function $$oj$$$$StringUtils$$$isEmpty$$($value$$55$$) {
    return null === $value$$55$$ ? !0 : 0 === $oj$$.$StringUtils$.trim($value$$55$$).length;
  };
  $goog$exportPath_$$("StringUtils.isEmpty", $oj$$.$StringUtils$.$isEmpty$, $oj$$);
  $oj$$.$StringUtils$.$isEmptyOrUndefined$ = function $$oj$$$$StringUtils$$$isEmptyOrUndefined$$($value$$56$$) {
    return void 0 === $value$$56$$ || $oj$$.$StringUtils$.$isEmpty$($value$$56$$) ? !0 : !1;
  };
  $goog$exportPath_$$("StringUtils.isEmptyOrUndefined", $oj$$.$StringUtils$.$isEmptyOrUndefined$, $oj$$);
  $oj$$.$StringUtils$.$isString$ = function $$oj$$$$StringUtils$$$isString$$($obj$$42$$) {
    return null !== $obj$$42$$ && ("string" === typeof $obj$$42$$ || $obj$$42$$ instanceof String);
  };
  $goog$exportPath_$$("StringUtils.isString", $oj$$.$StringUtils$.$isString$, $oj$$);
  $oj$$.$StringUtils$.trim = function $$oj$$$$StringUtils$$trim$($data$$32$$) {
    return $oj$$.$StringUtils$.$isString$($data$$32$$) ? $data$$32$$.replace($oj$$.$StringUtils$.$_TRIM_ALL_RE$, "") : $data$$32$$;
  };
  $goog$exportPath_$$("StringUtils.trim", $oj$$.$StringUtils$.trim, $oj$$);
  $oj$$.$StringUtils$.$hashCode$ = function $$oj$$$$StringUtils$$$hashCode$$($str$$10$$) {
    var $hash$$ = 0;
    if (0 === $str$$10$$.length) {
      return $hash$$;
    }
    for (var $i$$15$$ = 0;$i$$15$$ < $str$$10$$.length;$i$$15$$++) {
      $hash$$ = ($hash$$ << 5) - $hash$$ + $str$$10$$.charCodeAt($i$$15$$), $hash$$ &= $hash$$;
    }
    return $hash$$;
  };
  $oj$$.$ThemeUtils$ = {};
  $oj$$.$ThemeUtils$.$parseJSONFromFontFamily$ = function $$oj$$$$ThemeUtils$$$parseJSONFromFontFamily$$($selector$$16$$) {
    var $elem$$13_jsonval_style$$ = document.getElementsByClassName($selector$$16$$).item(0);
    null === $elem$$13_jsonval_style$$ && ($elem$$13_jsonval_style$$ = document.createElement("meta"), $elem$$13_jsonval_style$$.className = $selector$$16$$, document.head.appendChild($elem$$13_jsonval_style$$));
    if (($elem$$13_jsonval_style$$ = window.getComputedStyle($elem$$13_jsonval_style$$)) && ($elem$$13_jsonval_style$$ = $elem$$13_jsonval_style$$.getPropertyValue("font-family")) && "none" != $elem$$13_jsonval_style$$ && ($elem$$13_jsonval_style$$ = $elem$$13_jsonval_style$$.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, ""))) {
      try {
        $elem$$13_jsonval_style$$ = JSON.parse($elem$$13_jsonval_style$$);
      } catch ($e$$13$$) {
        return $oj$$.$Logger$.error("Error parsing json for selector " + $selector$$16$$ + ".\nString being parsed is " + $elem$$13_jsonval_style$$ + "\n" + $e$$13$$), null;
      }
      return $elem$$13_jsonval_style$$;
    }
    $oj$$.$Logger$.info("No json found for selector " + $selector$$16$$);
    return null;
  };
  $oj$$.$ThemeUtils$.$getOptionDefaultMap$ = function $$oj$$$$ThemeUtils$$$getOptionDefaultMap$$($componentName$$) {
    $componentName$$ = $componentName$$.toLowerCase();
    null == $oj$$.$ThemeUtils$.$optionDefaults$ && ($oj$$.$ThemeUtils$.$optionDefaults$ = {});
    var $componentOptionDefaults$$ = $oj$$.$ThemeUtils$.$optionDefaults$[$componentName$$];
    null == $componentOptionDefaults$$ && ($componentOptionDefaults$$ = $oj$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-" + $componentName$$ + "-option-defaults"), null == $componentOptionDefaults$$ && ($componentOptionDefaults$$ = {}), $oj$$.$ThemeUtils$.$optionDefaults$[$componentName$$] = $componentOptionDefaults$$);
    return $componentOptionDefaults$$;
  };
  $oj$$.$Translations$ = {};
  $goog$exportPath_$$("Translations", $oj$$.$Translations$, $oj$$);
  $oj$$.$Translations$.$setBundle$ = function $$oj$$$$Translations$$$setBundle$$($bundle$$) {
    $oj$$.$Translations$.$_bundle$ = $bundle$$;
  };
  $goog$exportPath_$$("Translations.setBundle", $oj$$.$Translations$.$setBundle$, $oj$$);
  $oj$$.$Translations$.$getResource$ = function $$oj$$$$Translations$$$getResource$$($key$$22$$) {
    return $oj$$.$Translations$.$_getResourceString$($key$$22$$);
  };
  $goog$exportPath_$$("Translations.getResource", $oj$$.$Translations$.$getResource$, $oj$$);
  $oj$$.$Translations$.$applyParameters$ = function $$oj$$$$Translations$$$applyParameters$$($pattern$$1$$, $parameters$$) {
    return null == $pattern$$1$$ ? null : $oj$$.$Translations$.$_format$($pattern$$1$$, $parameters$$);
  };
  $goog$exportPath_$$("Translations.applyParameters", $oj$$.$Translations$.$applyParameters$, $oj$$);
  $oj$$.$Translations$.$getTranslatedString$ = function $$oj$$$$Translations$$$getTranslatedString$$($key$$23$$, $var_args$$45$$) {
    var $val$$12$$ = $oj$$.$Translations$.$_getResourceString$($key$$23$$);
    if (null == $val$$12$$) {
      return $key$$23$$;
    }
    var $params$$3$$ = {};
    2 < arguments.length ? $params$$3$$ = Array.prototype.slice.call(arguments, 1) : 2 == arguments.length && ($params$$3$$ = arguments[1], "object" === typeof $params$$3$$ || $params$$3$$ instanceof Array || ($params$$3$$ = [$params$$3$$]));
    return $oj$$.$Translations$.$applyParameters$($val$$12$$, $params$$3$$);
  };
  $goog$exportPath_$$("Translations.getTranslatedString", $oj$$.$Translations$.$getTranslatedString$, $oj$$);
  $oj$$.$Translations$.$getComponentTranslations$ = function $$oj$$$$Translations$$$getComponentTranslations$$($bundle$$1_componentName$$1$$) {
    $bundle$$1_componentName$$1$$ = $oj$$.$Translations$.$_getBundle$()[$bundle$$1_componentName$$1$$];
    var $translations$$1$$, $k$$2$$;
    if (null == $bundle$$1_componentName$$1$$) {
      return{};
    }
    $translations$$1$$ = {};
    for ($k$$2$$ in $bundle$$1_componentName$$1$$) {
      $bundle$$1_componentName$$1$$.hasOwnProperty($k$$2$$) && ($translations$$1$$[$k$$2$$] = $bundle$$1_componentName$$1$$[$k$$2$$]);
    }
    return $translations$$1$$;
  };
  $goog$exportPath_$$("Translations.getComponentTranslations", $oj$$.$Translations$.$getComponentTranslations$, $oj$$);
  $oj$$.$Translations$.$_getResourceString$ = function $$oj$$$$Translations$$$_getResourceString$$($key$$24_keys$$1$$) {
    $key$$24_keys$$1$$ = $key$$24_keys$$1$$ ? $key$$24_keys$$1$$.split(".") : [];
    var $bundle$$2$$ = $oj$$.$Translations$.$_getBundle$(), $iteration$$ = $key$$24_keys$$1$$.length, $index$$46$$ = 0, $subkey$$ = $key$$24_keys$$1$$[$index$$46$$];
    for ($oj$$.$Assert$.$assertObject$($bundle$$2$$);0 < --$iteration$$ && $bundle$$2$$;) {
      $bundle$$2$$ = $bundle$$2$$[$subkey$$], $index$$46$$++, $subkey$$ = $key$$24_keys$$1$$[$index$$46$$];
    }
    return $bundle$$2$$ ? $bundle$$2$$[$subkey$$] || null : null;
  };
  $oj$$.$Translations$.$_format$ = function $$oj$$$$Translations$$$_format$$($formatString$$1$$, $parameters$$1$$) {
    var $formatLength$$ = $formatString$$1$$.length, $buffer$$8$$ = [], $token$$4$$ = null, $escaped$$1$$ = !1, $isToken_val$$13$$ = !1, $isGroup$$ = !1, $isExcluded$$ = !1, $tokenTerminated$$, $i$$16$$;
    for ($i$$16$$ = 0;$i$$16$$ < $formatLength$$;$i$$16$$++) {
      var $ch$$ = $formatString$$1$$.charAt($i$$16$$), $accumulate$$ = !1;
      if ($escaped$$1$$) {
        $accumulate$$ = !0, $escaped$$1$$ = !1;
      } else {
        switch($ch$$) {
          case "$":
            $escaped$$1$$ = !0;
            break;
          case "{":
            $isExcluded$$ || ($isToken_val$$13$$ || ($tokenTerminated$$ = !1, $token$$4$$ = []), $isToken_val$$13$$ = !0);
            break;
          case "}":
            $isToken_val$$13$$ && 0 < $token$$4$$.length && ($isToken_val$$13$$ = $parameters$$1$$[$token$$4$$.join("")], $buffer$$8$$.push(void 0 === $isToken_val$$13$$ ? "null" : $isToken_val$$13$$));
            $isToken_val$$13$$ = !1;
            break;
          case "[":
            $isToken_val$$13$$ || ($isGroup$$ ? $isExcluded$$ = !0 : $isGroup$$ = !0);
            break;
          case "]":
            $isExcluded$$ ? $isExcluded$$ = !1 : $isGroup$$ = !1;
            break;
          default:
            $accumulate$$ = !0;
        }
      }
      $accumulate$$ && ($isToken_val$$13$$ ? "," == $ch$$ || " " == $ch$$ ? $tokenTerminated$$ = !0 : $tokenTerminated$$ || $token$$4$$.push($ch$$) : $isExcluded$$ || $buffer$$8$$.push($ch$$));
    }
    return $buffer$$8$$.join("");
  };
  $oj$$.$Translations$.$_getBundle$ = function $$oj$$$$Translations$$$_getBundle$$() {
    var $b$$47$$ = $oj$$.$Translations$.$_bundle$;
    return $b$$47$$ ? $b$$47$$ : $oj$$.$__isAmdLoaderPresent$() ? ($oj$$.$Assert$.assert(void 0 !== $ojt$$1$$, "ojtranslations module must be defined"), $ojt$$1$$) : {};
  };
  return $oj$$;
});
