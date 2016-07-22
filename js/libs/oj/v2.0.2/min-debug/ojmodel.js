/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "promise"], function($oj$$1$$, $$$$1$$) {
  $oj$$1$$.$Events$ = window.oj.Events = {on:function $window$oj$Events$on$($eventType$$11$$, $callback$$57$$, $context$$5$$) {
    return this.$OnInternal$($eventType$$11$$, $callback$$57$$, $context$$5$$, !1, !1);
  }, off:function $window$oj$Events$off$($eventType$$12$$, $callback$$58$$, $context$$6$$) {
    return this.$_offInternal$($eventType$$12$$, $callback$$58$$, $context$$6$$, !1);
  }, trigger:function $window$oj$Events$trigger$($eventType$$13$$) {
    var $args$$12$$ = Array.prototype.slice.call(arguments);
    $args$$12$$.unshift(!1);
    return $oj$$1$$.$Events$.$TriggerInternal$.apply(this, $args$$12$$);
  }, once:function $window$oj$Events$once$($eventType$$14$$, $callback$$59$$, $context$$7$$) {
    return this.$_onceInternal$($eventType$$14$$, $callback$$59$$, $context$$7$$, !1, null);
  }, listenTo:function $window$oj$Events$listenTo$($otherObj$$, $eventArray_eventType$$15$$, $callback$$60_e$$14$$) {
    var $event$$4_eventString$$, $attr$$, $listenerObj$$, $prop$$9$$, $eventMap$$ = {};
    $eventArray_eventType$$15$$.constructor === String ? $eventMap$$[$eventArray_eventType$$15$$] = $callback$$60_e$$14$$ : $eventMap$$ = $eventArray_eventType$$15$$;
    for ($prop$$9$$ in $eventMap$$) {
      if ($eventMap$$.hasOwnProperty($prop$$9$$)) {
        for ($eventArray_eventType$$15$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$9$$), $callback$$60_e$$14$$ = 0;$callback$$60_e$$14$$ < $eventArray_eventType$$15$$.length;$callback$$60_e$$14$$ += 1) {
          $event$$4_eventString$$ = $eventArray_eventType$$15$$[$callback$$60_e$$14$$].event, $attr$$ = $eventArray_eventType$$15$$[$callback$$60_e$$14$$].$attribute$, $listenerObj$$ = {event:$event$$4_eventString$$, $attribute$:$attr$$, object:$otherObj$$, $callback$:$eventMap$$[$prop$$9$$]}, this.$_checkForHandler$(this._listeningTo, $listenerObj$$, $oj$$1$$.$Events$.$_listenersIdentical$), $event$$4_eventString$$ = $attr$$ ? $event$$4_eventString$$ + ":" + $attr$$ : $event$$4_eventString$$, void 0 === 
          this._listeningTo && (this._listeningTo = []), this._listeningTo.push($listenerObj$$), $otherObj$$.$OnInternal$($event$$4_eventString$$, $eventMap$$[$prop$$9$$], null, !0, !1);
        }
      }
    }
    return this;
  }, listenToOnce:function $window$oj$Events$listenToOnce$($otherObj$$1$$, $eventArray$$1_eventType$$16$$, $callback$$61_e$$15$$) {
    var $event$$5_eventString$$1$$, $attr$$1$$, $listenerObj$$1$$, $prop$$10$$, $eventMap$$1$$ = {};
    $eventArray$$1_eventType$$16$$.constructor === String ? $eventMap$$1$$[$eventArray$$1_eventType$$16$$] = $callback$$61_e$$15$$ : $eventMap$$1$$ = $eventArray$$1_eventType$$16$$;
    for ($prop$$10$$ in $eventMap$$1$$) {
      if ($eventMap$$1$$.hasOwnProperty($prop$$10$$)) {
        for ($eventArray$$1_eventType$$16$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$10$$), $callback$$61_e$$15$$ = 0;$callback$$61_e$$15$$ < $eventArray$$1_eventType$$16$$.length;$callback$$61_e$$15$$ += 1) {
          $event$$5_eventString$$1$$ = $eventArray$$1_eventType$$16$$[$callback$$61_e$$15$$].event, $attr$$1$$ = $eventArray$$1_eventType$$16$$[$callback$$61_e$$15$$].$attribute$, $listenerObj$$1$$ = {event:$event$$5_eventString$$1$$, $attribute$:$attr$$1$$, object:$otherObj$$1$$, $callback$:$eventMap$$1$$[$prop$$10$$]}, this.$_checkForHandler$(this._listeningTo, $listenerObj$$1$$, $oj$$1$$.$Events$.$_listenersIdentical$), $event$$5_eventString$$1$$ = $attr$$1$$ ? $event$$5_eventString$$1$$ + ":" + 
          $attr$$1$$ : $event$$5_eventString$$1$$, void 0 === this._listeningTo && (this._listeningTo = []), this._listeningTo.push($listenerObj$$1$$), $otherObj$$1$$.$_onceInternal$($event$$5_eventString$$1$$, $eventMap$$1$$[$prop$$10$$], null, !0, this);
        }
      }
    }
    return this;
  }, stopListening:function $window$oj$Events$stopListening$($otherObj$$2$$, $eventType$$17$$, $callback$$62$$) {
    var $actualType_eventArray$$2$$, $eventMap$$2$$ = {}, $e$$16$$, $oneEvent$$, $oneAttr$$, $attrEqual_event$$6$$, $cb_objEqual$$, $eventEqual_len$$, $callbackEqual$$, $i$$17$$, $prop$$11$$;
    if (null == arguments || 1 >= arguments.length) {
      $eventEqual_len$$ = this._listeningTo ? this._listeningTo.length : 0;
      for ($i$$17$$ = 0;$i$$17$$ < $eventEqual_len$$;$i$$17$$++) {
        if ($attrEqual_event$$6$$ = this._listeningTo[$i$$17$$], $cb_objEqual$$ = $otherObj$$2$$ ? $otherObj$$2$$ === $attrEqual_event$$6$$.object : !0) {
          $cb_objEqual$$ = $attrEqual_event$$6$$.object.$_offInternal$, $cb_objEqual$$.apply($attrEqual_event$$6$$.object, [$attrEqual_event$$6$$.event, $attrEqual_event$$6$$.$callback$, $attrEqual_event$$6$$.context, !0]);
        }
      }
      this._listeningTo = [];
      return this;
    }
    $actualType_eventArray$$2$$ = $eventType$$17$$;
    $otherObj$$2$$ && $otherObj$$2$$.constructor === String && ($actualType_eventArray$$2$$ = $otherObj$$2$$);
    $actualType_eventArray$$2$$.constructor === String ? $eventMap$$2$$[$actualType_eventArray$$2$$] = $callback$$62$$ : $eventMap$$2$$ = $actualType_eventArray$$2$$;
    for ($prop$$11$$ in $eventMap$$2$$) {
      if ($eventMap$$2$$.hasOwnProperty($prop$$11$$)) {
        for ($actualType_eventArray$$2$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$11$$), $e$$16$$ = 0;$e$$16$$ < $actualType_eventArray$$2$$.length;$e$$16$$ += 1) {
          for ($oneEvent$$ = $actualType_eventArray$$2$$[$e$$16$$].event, $oneAttr$$ = $actualType_eventArray$$2$$[$e$$16$$].$attribute$, $eventEqual_len$$ = this._listeningTo ? this._listeningTo.length : 0, $i$$17$$ = $eventEqual_len$$ - 1;0 <= $i$$17$$;$i$$17$$ -= 1) {
            $attrEqual_event$$6$$ = this._listeningTo[$i$$17$$], $cb_objEqual$$ = $otherObj$$2$$ ? $otherObj$$2$$ === $attrEqual_event$$6$$.object : !0, $eventEqual_len$$ = $oneEvent$$ ? $oneEvent$$ === $attrEqual_event$$6$$.event : !0, $callbackEqual$$ = $callback$$62$$ ? $eventMap$$2$$[$prop$$11$$] === $attrEqual_event$$6$$.$callback$ : !0, $attrEqual_event$$6$$ = $oneAttr$$ ? $oneAttr$$ === $attrEqual_event$$6$$.$attribute$ : !0, $cb_objEqual$$ && $eventEqual_len$$ && $callbackEqual$$ && $attrEqual_event$$6$$ && 
            ($cb_objEqual$$ = this._listeningTo[$i$$17$$].object.$_offInternal$, $cb_objEqual$$.apply(this._listeningTo[$i$$17$$].object, [this._listeningTo[$i$$17$$].event, this._listeningTo[$i$$17$$].$callback$, this._listeningTo[$i$$17$$].context, !0]), this._listeningTo.splice($i$$17$$, 1));
          }
        }
      }
    }
    return this;
  }};
  $oj$$1$$.$Events$.bind = $oj$$1$$.$Events$.on;
  $oj$$1$$.$Events$.unbind = $oj$$1$$.$Events$.off;
  $oj$$1$$.$Events$.$EventType$ = {ADD:"add", ALLADDED:"alladded", REMOVE:"remove", RESET:"reset", REFRESH:"refresh", SORT:"sort", CHANGE:"change", DESTROY:"destroy", ALLREMOVED:"allremoved", REQUEST:"request", SYNC:"sync", ERROR:"error", INVALID:"invalid", READY:"ready", ALL:"all"};
  $goog$exportPath_$$("Events.EventType", $oj$$1$$.$Events$.$EventType$, $oj$$1$$);
  $oj$$1$$.$Events$.$Mixin$ = function $$oj$$1$$$$Events$$$Mixin$$($myClass$$, $source$$6$$) {
    var $methodName$$1$$, $obj$$43$$ = $source$$6$$ || this;
    for ($methodName$$1$$ in $obj$$43$$) {
      "function" === typeof $obj$$43$$[$methodName$$1$$] && ($myClass$$[$methodName$$1$$] = $obj$$43$$[$methodName$$1$$]);
    }
    $myClass$$.$eventHandlers$ = {};
    $myClass$$._listeningTo = [];
  };
  $oj$$1$$.$Events$.$_onceInternal$ = function $$oj$$1$$$$Events$$$_onceInternal$$($eventArray$$3_eventType$$18$$, $callback$$63_e$$17$$, $context$$8$$, $listenTo$$, $otherObj$$3$$) {
    var $event$$7$$, $attr$$2$$, $eventMap$$3$$, $prop$$12$$;
    $eventMap$$3$$ = this.$_getEventMap$($eventArray$$3_eventType$$18$$, $callback$$63_e$$17$$);
    for ($prop$$12$$ in $eventMap$$3$$) {
      if ($eventMap$$3$$.hasOwnProperty($prop$$12$$)) {
        for ($eventArray$$3_eventType$$18$$ = this.$_getEvents$($prop$$12$$), $callback$$63_e$$17$$ = 0;$callback$$63_e$$17$$ < $eventArray$$3_eventType$$18$$.length;$callback$$63_e$$17$$ += 1) {
          $event$$7$$ = $eventArray$$3_eventType$$18$$[$callback$$63_e$$17$$].event, $attr$$2$$ = $eventArray$$3_eventType$$18$$[$callback$$63_e$$17$$].$attribute$, void 0 === this.$eventHandlers$ && (this.$eventHandlers$ = []), void 0 === this.$eventHandlers$[$event$$7$$] && (this.$eventHandlers$[$event$$7$$] = []), this.$eventHandlers$[$event$$7$$].push({$callback$:$eventMap$$3$$[$prop$$12$$], context:$context$$8$$, $attribute$:$attr$$2$$, $once$:!0, fired:!1, $listen$:$listenTo$$, $otherObj$:$otherObj$$3$$})
          ;
        }
      }
    }
    return this;
  };
  $oj$$1$$.$Events$.$_shouldFire$ = function $$oj$$1$$$$Events$$$_shouldFire$$($handler$$42$$) {
    return $handler$$42$$.$once$ ? $handler$$42$$.fired ? !1 : $handler$$42$$.fired = !0 : !0;
  };
  $oj$$1$$.$Events$.$_getContext$ = function $$oj$$1$$$$Events$$$_getContext$$($obj$$44$$, $handler$$43$$) {
    return $handler$$43$$.context || $handler$$43$$.$otherObj$ || $obj$$44$$;
  };
  $oj$$1$$.$Events$.$TriggerInternal$ = function $$oj$$1$$$$Events$$$TriggerInternal$$($silent$$, $eventType$$19$$) {
    var $eventArray$$4_handlers$$1$$ = this.$_getEvents$($eventType$$19$$), $e$$18$$, $event$$8_i$$18$$, $args$$13_attr$$3$$, $eventsToFire$$, $allHandlers$$, $callback$$64$$;
    $eventsToFire$$ = [];
    for ($e$$18$$ = 0;$e$$18$$ < $eventArray$$4_handlers$$1$$.length;$e$$18$$ += 1) {
      $event$$8_i$$18$$ = $eventArray$$4_handlers$$1$$[$e$$18$$].event, $args$$13_attr$$3$$ = $eventArray$$4_handlers$$1$$[$e$$18$$].$attribute$, $eventsToFire$$.push({event:$event$$8_i$$18$$, $attribute$:$args$$13_attr$$3$$});
    }
    for ($e$$18$$ = 0;$e$$18$$ < $eventsToFire$$.length;$e$$18$$ += 1) {
      $allHandlers$$ = this.$_getHandlers$(this.$eventHandlers$, $oj$$1$$.$Events$.$EventType$.ALL);
      $eventArray$$4_handlers$$1$$ = $oj$$1$$.$Events$.$_getHandlers$(this.$eventHandlers$, $eventsToFire$$[$e$$18$$].event, !1);
      for ($event$$8_i$$18$$ = 0;$event$$8_i$$18$$ < ($eventArray$$4_handlers$$1$$ ? $eventArray$$4_handlers$$1$$.length : 0);$event$$8_i$$18$$ += 1) {
        $eventArray$$4_handlers$$1$$[$event$$8_i$$18$$].$attribute$ === $eventsToFire$$[$e$$18$$].$attribute$ && $eventArray$$4_handlers$$1$$[$event$$8_i$$18$$].$callback$ && ($args$$13_attr$$3$$ = Array.prototype.slice.call(arguments), $eventArray$$4_handlers$$1$$ && $eventArray$$4_handlers$$1$$[$event$$8_i$$18$$] && $eventArray$$4_handlers$$1$$[$event$$8_i$$18$$].$once$ && (this.$_removeHandler$($oj$$1$$.$Events$.$_getHandlers$(this.$eventHandlers$, $eventsToFire$$[$e$$18$$].event, !0), $eventArray$$4_handlers$$1$$[$event$$8_i$$18$$]), 
        $eventArray$$4_handlers$$1$$[$event$$8_i$$18$$].$otherObj$ && $eventArray$$4_handlers$$1$$[$event$$8_i$$18$$].$otherObj$.stopListening(this, $eventType$$19$$, $eventArray$$4_handlers$$1$$[$event$$8_i$$18$$].$callback$)), $eventArray$$4_handlers$$1$$ && $eventArray$$4_handlers$$1$$[$event$$8_i$$18$$] && this.$_shouldFire$($eventArray$$4_handlers$$1$$[$event$$8_i$$18$$]) && ($callback$$64$$ = $eventArray$$4_handlers$$1$$[$event$$8_i$$18$$].$callback$, $silent$$ && !$eventArray$$4_handlers$$1$$[$event$$8_i$$18$$].$ignoreSilent$ || 
        $callback$$64$$.apply($oj$$1$$.$Events$.$_getContext$(this, $eventArray$$4_handlers$$1$$[$event$$8_i$$18$$]), $args$$13_attr$$3$$.slice(2))));
      }
      for ($event$$8_i$$18$$ = 0;$event$$8_i$$18$$ < ($allHandlers$$ ? $allHandlers$$.length : 0);$event$$8_i$$18$$ += 1) {
        $args$$13_attr$$3$$ = Array.prototype.slice.call(arguments), 0 < $args$$13_attr$$3$$.length && ($args$$13_attr$$3$$[1] = $eventsToFire$$[$e$$18$$].$attribute$ ? $eventsToFire$$[$e$$18$$].event + ":" + $eventsToFire$$[$e$$18$$].$attribute$ : $eventsToFire$$[$e$$18$$].event), $allHandlers$$ && $allHandlers$$[$event$$8_i$$18$$] && $allHandlers$$[$event$$8_i$$18$$].$callback$ && this.$_shouldFire$($allHandlers$$[$event$$8_i$$18$$]) && ($callback$$64$$ = $allHandlers$$[$event$$8_i$$18$$].$callback$, 
        $silent$$ && !$allHandlers$$[$event$$8_i$$18$$].$ignoreSilent$ || $callback$$64$$.apply($oj$$1$$.$Events$.$_getContext$(this, $allHandlers$$[$event$$8_i$$18$$]), $args$$13_attr$$3$$.slice(1))), $allHandlers$$ && $allHandlers$$[$event$$8_i$$18$$] && $allHandlers$$[$event$$8_i$$18$$].$once$ && (this.$_removeHandler$(this.$_getHandlers$(this.$eventHandlers$, $oj$$1$$.$Events$.$EventType$.ALL, !0), $allHandlers$$[$event$$8_i$$18$$]), $allHandlers$$[$event$$8_i$$18$$].$otherObj$ && $allHandlers$$[$event$$8_i$$18$$].$otherObj$.stopListening(this, 
        $oj$$1$$.$Events$.$EventType$.ALL, $allHandlers$$[$event$$8_i$$18$$].$callback$));
      }
    }
    return this;
  };
  $oj$$1$$.$Events$.$OnInternal$ = function $$oj$$1$$$$Events$$$OnInternal$$($eventMap$$4_eventType$$20$$, $callback$$65_eventArray$$5$$, $context$$9$$, $listenTo$$1$$, $ignoreSilent$$) {
    var $prop$$13$$, $i$$19$$, $event$$9$$, $attr$$4_eventObj$$;
    $eventMap$$4_eventType$$20$$ = this.$_getEventMap$($eventMap$$4_eventType$$20$$, $callback$$65_eventArray$$5$$);
    for ($prop$$13$$ in $eventMap$$4_eventType$$20$$) {
      if ($eventMap$$4_eventType$$20$$.hasOwnProperty($prop$$13$$)) {
        for ($callback$$65_eventArray$$5$$ = this.$_getEvents$($prop$$13$$), $i$$19$$ = 0;$i$$19$$ < $callback$$65_eventArray$$5$$.length;$i$$19$$ += 1) {
          $event$$9$$ = $callback$$65_eventArray$$5$$[$i$$19$$].event, $attr$$4_eventObj$$ = $callback$$65_eventArray$$5$$[$i$$19$$].$attribute$, void 0 === this.$eventHandlers$ && (this.$eventHandlers$ = []), void 0 === this.$eventHandlers$[$event$$9$$] && (this.$eventHandlers$[$event$$9$$] = []), $attr$$4_eventObj$$ = {$callback$:$eventMap$$4_eventType$$20$$[$prop$$13$$], context:$context$$9$$, $attribute$:$attr$$4_eventObj$$, $listen$:$listenTo$$1$$, $ignoreSilent$:$ignoreSilent$$}, -1 === this.$_checkForHandler$(this.$eventHandlers$[$event$$9$$], 
          $attr$$4_eventObj$$, $oj$$1$$.$Events$.$_handlersIdentical$) && this.$eventHandlers$[$event$$9$$].push($attr$$4_eventObj$$);
        }
      }
    }
    return this;
  };
  $oj$$1$$.$Events$.$_offInternal$ = function $$oj$$1$$$$Events$$$_offInternal$$($eventType$$21$$, $callback$$66$$, $context$$10$$, $listen$$) {
    var $eventMap$$5$$, $prop$$14$$;
    if (null == arguments || 0 == arguments.length) {
      return this.$eventHandlers$ = {}, this;
    }
    if (null == $eventType$$21$$) {
      return this.$_removeEvent$($eventType$$21$$, $callback$$66$$, $context$$10$$, $listen$$), this;
    }
    $eventMap$$5$$ = this.$_getEventMap$($eventType$$21$$, $callback$$66$$);
    for ($prop$$14$$ in $eventMap$$5$$) {
      $eventMap$$5$$.hasOwnProperty($prop$$14$$) && this.$_removeEvent$($prop$$14$$, $eventMap$$5$$[$prop$$14$$], $context$$10$$, $listen$$);
    }
    return this;
  };
  $oj$$1$$.$Events$.$_getEventMap$ = function $$oj$$1$$$$Events$$$_getEventMap$$($eventType$$22$$, $callback$$67$$) {
    var $eventMap$$6$$ = {};
    $eventType$$22$$.constructor === String ? $eventMap$$6$$[$eventType$$22$$] = $callback$$67$$ : $eventMap$$6$$ = $eventType$$22$$;
    return $eventMap$$6$$;
  };
  $oj$$1$$.$Events$.$_removeEvent$ = function $$oj$$1$$$$Events$$$_removeEvent$$($e$$19_eventType$$23$$, $callback$$68$$, $context$$12$$, $listen$$1$$) {
    var $eventArray$$6$$ = [], $i$$20$$, $event$$10$$, $attr$$5$$, $handlers$$2$$, $callbacks$$2$$, $contexts$$, $attrs$$, $listenEq$$;
    if ($e$$19_eventType$$23$$) {
      $eventArray$$6$$ = $oj$$1$$.$Events$.$_getEvents$($e$$19_eventType$$23$$);
    } else {
      if (void 0 !== this.$eventHandlers$) {
        for ($event$$10$$ in this.$eventHandlers$) {
          this.$eventHandlers$.hasOwnProperty($event$$10$$) && $eventArray$$6$$.push({event:$event$$10$$});
        }
      }
    }
    for ($e$$19_eventType$$23$$ = 0;$e$$19_eventType$$23$$ < $eventArray$$6$$.length;$e$$19_eventType$$23$$ += 1) {
      if ($event$$10$$ = $eventArray$$6$$[$e$$19_eventType$$23$$].event, $attr$$5$$ = $eventArray$$6$$[$e$$19_eventType$$23$$].$attribute$, void 0 !== this.$eventHandlers$ && this.$eventHandlers$[$event$$10$$] instanceof Array) {
        $handlers$$2$$ = this.$eventHandlers$[$event$$10$$];
        for ($i$$20$$ = $handlers$$2$$.length - 1;0 <= $i$$20$$;$i$$20$$ -= 1) {
          $callbacks$$2$$ = void 0 === $callback$$68$$ || null === $callback$$68$$ || $handlers$$2$$[$i$$20$$].$callback$ == $callback$$68$$, $contexts$$ = void 0 === $context$$12$$ || null === $context$$12$$ || $handlers$$2$$[$i$$20$$].context == $context$$12$$, $attrs$$ = void 0 === $attr$$5$$ || null === $attr$$5$$ || $handlers$$2$$[$i$$20$$].$attribute$ == $attr$$5$$, $listenEq$$ = void 0 === $listen$$1$$ || null === $listen$$1$$ || $handlers$$2$$[$i$$20$$].$listen$ == $listen$$1$$, $callbacks$$2$$ && 
          $contexts$$ && $attrs$$ && $listenEq$$ && $handlers$$2$$.splice($i$$20$$, 1);
        }
        0 === $handlers$$2$$.length && delete this.$eventHandlers$[$event$$10$$];
      }
    }
  };
  $oj$$1$$.$Events$.$_removeHandler$ = function $$oj$$1$$$$Events$$$_removeHandler$$($handlers$$3$$, $handler$$44$$) {
    var $i$$21$$, $callbacks$$3$$, $contexts$$1$$, $attrs$$1$$, $listenEq$$1$$, $onceEq$$;
    if ($handlers$$3$$) {
      for ($i$$21$$ = $handlers$$3$$.length - 1;0 <= $i$$21$$;$i$$21$$ -= 1) {
        $callbacks$$3$$ = void 0 === $handler$$44$$.$callback$ || null === $handler$$44$$.$callback$ || $handlers$$3$$[$i$$21$$].$callback$ == $handler$$44$$.$callback$, $contexts$$1$$ = void 0 === $handler$$44$$.context || null === $handler$$44$$.context || $handlers$$3$$[$i$$21$$].context == $handler$$44$$.context, $attrs$$1$$ = void 0 === $handler$$44$$.$attribute$ || null === $handler$$44$$.$attribute$ || $handlers$$3$$[$i$$21$$].$attribute$ == $handler$$44$$.$attribute$, $listenEq$$1$$ = void 0 === 
        $handler$$44$$.$listen$ || null === $handler$$44$$.$listen$ || $handlers$$3$$[$i$$21$$].$listen$ == $handler$$44$$.$listen$, $onceEq$$ = void 0 === $handler$$44$$.$once$ || null === $handler$$44$$.$once$ || $handlers$$3$$[$i$$21$$].$once$ == $handler$$44$$.$once$, $callbacks$$3$$ && $contexts$$1$$ && $attrs$$1$$ && $listenEq$$1$$ && $onceEq$$ && $handlers$$3$$.splice($i$$21$$, 1);
      }
    }
  };
  $oj$$1$$.$Events$.$_getEvents$ = function $$oj$$1$$$$Events$$$_getEvents$$($eventList_eventString$$2$$) {
    $eventList_eventString$$2$$ = $eventList_eventString$$2$$ ? $eventList_eventString$$2$$.split(" ") : [];
    var $retList$$ = [], $i$$22$$, $attr$$6_eventWithAttr$$, $name$$64$$;
    for ($i$$22$$ = 0;$i$$22$$ < $eventList_eventString$$2$$.length;$i$$22$$ += 1) {
      $attr$$6_eventWithAttr$$ = $eventList_eventString$$2$$[$i$$22$$].split(":"), $name$$64$$ = $attr$$6_eventWithAttr$$[0], $attr$$6_eventWithAttr$$ = 1 < $attr$$6_eventWithAttr$$.length ? $attr$$6_eventWithAttr$$[1] : null, $retList$$.push({event:$name$$64$$, $attribute$:$attr$$6_eventWithAttr$$});
    }
    return $retList$$;
  };
  $oj$$1$$.$Events$.$_handlersIdentical$ = function $$oj$$1$$$$Events$$$_handlersIdentical$$($handler1$$, $handler2$$) {
    return $handler1$$.$callback$ === $handler2$$.$callback$ && $handler1$$.$attribute$ === $handler2$$.$attribute$ && $handler1$$.context === $handler2$$.context && $handler1$$.$listen$ === $handler2$$.$listen$ && $handler1$$.$once$ === $handler2$$.$once$;
  };
  $oj$$1$$.$Events$.$_listenersIdentical$ = function $$oj$$1$$$$Events$$$_listenersIdentical$$($listener1$$, $listener2$$) {
    return $listener1$$.event === $listener2$$.event && $listener1$$.$attribute$ === $listener2$$.$attribute$ && $listener1$$.context === $listener2$$.context && $listener1$$.object === $listener2$$.object;
  };
  $oj$$1$$.$Events$.$_checkForHandler$ = function $$oj$$1$$$$Events$$$_checkForHandler$$($handlerList$$, $handler$$45$$, $handlerTest$$) {
    var $i$$23$$;
    if (void 0 === $handlerList$$) {
      return-1;
    }
    for ($i$$23$$ = 0;$i$$23$$ < $handlerList$$.length;$i$$23$$ += 1) {
      if ($handlerTest$$($handlerList$$[$i$$23$$], $handler$$45$$)) {
        return $i$$23$$;
      }
    }
    return-1;
  };
  $oj$$1$$.$Events$.$_getHandlers$ = function $$oj$$1$$$$Events$$$_getHandlers$$($handlers$$4$$, $eventType$$24$$, $handlerReturn_original$$1$$) {
    if ($handlers$$4$$ && $handlers$$4$$[$eventType$$24$$] instanceof Array) {
      if ($handlerReturn_original$$1$$) {
        return $handlers$$4$$[$eventType$$24$$];
      }
      $handlerReturn_original$$1$$ = [];
      var $i$$24$$;
      for ($i$$24$$ = 0;$i$$24$$ < $handlers$$4$$[$eventType$$24$$].length;$i$$24$$++) {
        $handlerReturn_original$$1$$.push($handlers$$4$$[$eventType$$24$$][$i$$24$$]);
      }
      return $handlerReturn_original$$1$$;
    }
    return null;
  };
  $oj$$1$$.$Collection$ = function $$oj$$1$$$$Collection$$($models$$, $options$$16$$) {
    $oj$$1$$.$Collection$.$_justExtending$ || $oj$$1$$.$Collection$._init(this, $models$$, $options$$16$$, null);
  };
  $goog$exportPath_$$("Collection", $oj$$1$$.$Collection$, $oj$$1$$);
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$Collection$, $oj$$1$$.$Object$, "oj.Collection");
  $oj$$1$$.$Collection$.prototype.$model$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.model", {$model$:$oj$$1$$.$Collection$.prototype.$model$});
  $oj$$1$$.$Collection$.prototype.$modelId$ = function $$oj$$1$$$$Collection$$$$modelId$$($attrs$$2$$) {
    var $model$$1$$ = this.model;
    return $model$$1$$ && $attrs$$2$$ ? $attrs$$2$$[$model$$1$$.idAttribute || $model$$1$$.prototype.idAttribute || "id"] : null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.modelId", {$modelId$:$oj$$1$$.$Collection$.prototype.$modelId$});
  $oj$$1$$.$Collection$.prototype.length = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.length", {length:$oj$$1$$.$Collection$.prototype.length});
  $oj$$1$$.$Collection$.prototype.$models$ = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.models", {$models$:$oj$$1$$.$Collection$.prototype.$models$});
  $oj$$1$$.$Collection$.prototype.$_modelIndices$ = [];
  $oj$$1$$.$Collection$.prototype.url = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.url", {url:$oj$$1$$.$Collection$.prototype.url});
  $oj$$1$$.$Collection$.prototype.$changes$ = [];
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.changes", {$changes$:$oj$$1$$.$Collection$.prototype.$changes$});
  $oj$$1$$.$Collection$.prototype.$customURL$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.customURL", {$customURL$:$oj$$1$$.$Collection$.prototype.$customURL$});
  $oj$$1$$.$Collection$.prototype.$customPagingOptions$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.customPagingOptions", {$customPagingOptions$:$oj$$1$$.$Collection$.prototype.$customPagingOptions$});
  $oj$$1$$.$Collection$.prototype.$lastFetchSize$ = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastFetchSize", {$lastFetchSize$:$oj$$1$$.$Collection$.prototype.$lastFetchSize$});
  $oj$$1$$.$Collection$.prototype.$hasMore$ = !1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.hasMore", {$hasMore$:$oj$$1$$.$Collection$.prototype.$hasMore$});
  $oj$$1$$.$Collection$.prototype.$totalResults$ = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.totalResults", {$totalResults$:$oj$$1$$.$Collection$.prototype.$totalResults$});
  $oj$$1$$.$Collection$.prototype.$lastFetchCount$ = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastFetchCount", {$lastFetchCount$:$oj$$1$$.$Collection$.prototype.$lastFetchCount$});
  $oj$$1$$.$Collection$.prototype.$modelLimit$ = -1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.modelLimit", {$modelLimit$:$oj$$1$$.$Collection$.prototype.$modelLimit$});
  $oj$$1$$.$Collection$.prototype.offset = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.offset", {offset:$oj$$1$$.$Collection$.prototype.offset});
  $oj$$1$$.$Collection$.prototype.$fetchSize$ = -1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.fetchSize", {$fetchSize$:$oj$$1$$.$Collection$.prototype.$fetchSize$});
  $oj$$1$$.$Collection$.prototype.$sortDirection$ = 1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortDirection", {$sortDirection$:$oj$$1$$.$Collection$.prototype.$sortDirection$});
  $oj$$1$$.$Collection$.prototype.$comparator$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.comparator", {$comparator$:$oj$$1$$.$Collection$.prototype.$comparator$});
  $oj$$1$$.$Collection$.prototype.Init = function $$oj$$1$$$$Collection$$$Init$() {
    $oj$$1$$.$Collection$.$superclass$.Init.call(this);
  };
  $oj$$1$$.$Collection$.extend = function $$oj$$1$$$$Collection$$extend$($properties$$3$$, $classProperties$$) {
    $oj$$1$$.$Collection$.$_justExtending$ = !0;
    var $obj$$45$$ = new $oj$$1$$.$Collection$;
    $oj$$1$$.$Collection$.$_justExtending$ = !1;
    $$$$1$$.extend($obj$$45$$, this.prototype);
    var $Collection$$;
    $Collection$$ = $properties$$3$$ && $properties$$3$$.constructor && $properties$$3$$.hasOwnProperty("constructor") ? $properties$$3$$.constructor : function($models$$1$$, $options$$17$$) {
      $oj$$1$$.$Collection$._init(this, $models$$1$$, $options$$17$$, $properties$$3$$);
    };
    if ($classProperties$$) {
      for (var $prop$$15$$ in $classProperties$$) {
        $classProperties$$.hasOwnProperty($prop$$15$$) && ($Collection$$[$prop$$15$$] = $classProperties$$[$prop$$15$$]);
      }
    }
    if ($properties$$3$$) {
      for ($prop$$15$$ in $properties$$3$$) {
        $properties$$3$$.hasOwnProperty($prop$$15$$) && ($obj$$45$$[$prop$$15$$] = $properties$$3$$[$prop$$15$$]);
      }
    }
    $$$$1$$.extend($Collection$$, this);
    $Collection$$.prototype = $obj$$45$$;
    $Collection$$.extend = $oj$$1$$.$Collection$.extend;
    return $Collection$$.prototype.constructor = $Collection$$;
  };
  $goog$exportPath_$$("Collection.extend", $oj$$1$$.$Collection$.extend, $oj$$1$$);
  $oj$$1$$.$Collection$._init = function $$oj$$1$$$$Collection$$_init$($collection$$2$$, $models$$2$$, $options$$18$$, $properties$$4$$) {
    var $i$$25_prop$$16$$, $modelList_optionlist$$;
    $collection$$2$$.Init();
    $oj$$1$$.$Events$.$Mixin$($collection$$2$$);
    if ($properties$$4$$) {
      for ($i$$25_prop$$16$$ in $properties$$4$$) {
        $properties$$4$$.hasOwnProperty($i$$25_prop$$16$$) && ($collection$$2$$[$i$$25_prop$$16$$] = $properties$$4$$[$i$$25_prop$$16$$]);
      }
    }
    $options$$18$$ = $options$$18$$ || {};
    $modelList_optionlist$$ = ["comparator", "customPagingOptions", "customURL", $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$, "model", "modelLimit", "sortDirection", "url"];
    for ($i$$25_prop$$16$$ = 0;$i$$25_prop$$16$$ < $modelList_optionlist$$.length;$i$$25_prop$$16$$++) {
      $options$$18$$.hasOwnProperty($modelList_optionlist$$[$i$$25_prop$$16$$]) && void 0 !== $options$$18$$[$modelList_optionlist$$[$i$$25_prop$$16$$]] && ($collection$$2$$[$modelList_optionlist$$[$i$$25_prop$$16$$]] = $options$$18$$[$modelList_optionlist$$[$i$$25_prop$$16$$]]);
    }
    void 0 === $collection$$2$$.$_getFetchSize$(null) && $collection$$2$$.$setFetchSize$(-1);
    void 0 === $collection$$2$$.modelLimit && $collection$$2$$.$setModelLimit$(-1);
    $collection$$2$$.hasMore = !1;
    $collection$$2$$.$lruCount$ = 0;
    $collection$$2$$.$_setModels$([], !0);
    $options$$18$$.parse && ($models$$2$$ = $collection$$2$$.parse($models$$2$$));
    if (null != $models$$2$$) {
      for ($options$$18$$.$noparse$ = !0, $modelList_optionlist$$ = $models$$2$$ instanceof Array ? $models$$2$$ : [$models$$2$$], $i$$25_prop$$16$$ = 0;$i$$25_prop$$16$$ < $modelList_optionlist$$.length;$i$$25_prop$$16$$ += 1) {
        $collection$$2$$.add($modelList_optionlist$$[$i$$25_prop$$16$$], $options$$18$$);
      }
    }
    $collection$$2$$.$_setLength$();
    $properties$$4$$ && $properties$$4$$.initialize && $properties$$4$$.initialize.call($collection$$2$$, $models$$2$$, $options$$18$$);
  };
  $oj$$1$$.$Collection$.prototype.on = function $$oj$$1$$$$Collection$$$on$() {
  };
  $oj$$1$$.$Collection$.prototype.$OnInternal$ = function $$oj$$1$$$$Collection$$$$OnInternal$$() {
  };
  $oj$$1$$.$Collection$.prototype.$TriggerInternal$ = function $$oj$$1$$$$Collection$$$$TriggerInternal$$() {
  };
  $oj$$1$$.$Collection$.prototype.$_fireRequest$ = function $$oj$$1$$$$Collection$$$$_fireRequest$$($collection$$3$$, $xhr$$, $options$$20$$, $silent$$2$$) {
    this.$TriggerInternal$($silent$$2$$, $oj$$1$$.$Events$.$EventType$.REQUEST, $collection$$3$$, $xhr$$, $options$$20$$);
  };
  $oj$$1$$.$Collection$.prototype.$_resetChanges$ = function $$oj$$1$$$$Collection$$$$_resetChanges$$() {
    this.changes = [];
  };
  $oj$$1$$.$Collection$.prototype.$_setChangeAt$ = function $$oj$$1$$$$Collection$$$$_setChangeAt$$($start$$6$$, $count$$8$$) {
    for (var $at$$ = $start$$6$$;$at$$ < $start$$6$$ + $count$$8$$;$at$$++) {
      -1 === this.changes.indexOf($at$$) && (this.changes.push($at$$), this.changes.sort(function($a$$91$$, $b$$48$$) {
        return $a$$91$$ - $b$$48$$;
      }));
    }
  };
  $oj$$1$$.$Collection$.prototype.$_setModels$ = function $$oj$$1$$$$Collection$$$$_setModels$$($models$$3$$, $clearing$$) {
    this.models = $models$$3$$;
    if ($clearing$$) {
      this.$_modelIndices$ = [], this.$_resetChanges$();
    } else {
      for (var $i$$26$$ = 0;$i$$26$$ < $models$$3$$.length;$i$$26$$++) {
        $models$$3$$[$i$$26$$] && this.$_modelIndices$.push($i$$26$$);
      }
    }
  };
  $oj$$1$$.$Collection$.prototype.$_getModels$ = function $$oj$$1$$$$Collection$$$$_getModels$$() {
    return this.models;
  };
  $oj$$1$$.$Collection$.prototype.$_getModelsLength$ = function $$oj$$1$$$$Collection$$$$_getModelsLength$$() {
    return this.$_getModels$().length;
  };
  $oj$$1$$.$Collection$.prototype.$_overUpperLimit$ = function $$oj$$1$$$$Collection$$$$_overUpperLimit$$($index$$49$$) {
    return $index$$49$$ < this.$_getModelsLength$() || this.$IsVirtual$() && (!this.$_hasTotalResults$() || 0 === this.$_getModelsLength$()) ? !1 : !0;
  };
  $oj$$1$$.$Collection$.prototype.$_hasTotalResults$ = function $$oj$$1$$$$Collection$$$$_hasTotalResults$$() {
    return $oj$$1$$.$Collection$.$_defined$(this.totalResults);
  };
  $oj$$1$$.$Collection$.$_defined$ = function $$oj$$1$$$$Collection$$$_defined$$($value$$57$$) {
    return null != $value$$57$$;
  };
  $oj$$1$$.$Collection$.prototype.$_pushModel$ = function $$oj$$1$$$$Collection$$$$_pushModel$$($model$$2$$) {
    this.$_getModels$().push($model$$2$$);
    this.$_modelIndices$.push(this.$_getModelsLength$() - 1);
    this.$_setChangeAt$(this.$_getModelsLength$() - 1, 1);
  };
  $oj$$1$$.$Collection$.prototype.$_pushModels$ = function $$oj$$1$$$$Collection$$$$_pushModels$$($model$$3$$) {
    this.$_makeModelHead$($model$$3$$);
    this.$_pushModel$($model$$3$$);
    this.$lruCount$++;
    $model$$3$$.$SetIndex$(this.$_getModelsLength$() - 1);
  };
  $oj$$1$$.$Collection$.prototype.$_reduceLRU$ = function $$oj$$1$$$$Collection$$$$_reduceLRU$$($removed$$) {
    if ($removed$$) {
      for (var $i$$27$$ = 0;$i$$27$$ < $removed$$.length;$i$$27$$++) {
        $removed$$[$i$$27$$] && this.$lruCount$--;
      }
    }
  };
  $oj$$1$$.$Collection$.prototype.$_spliceModels$ = function $$oj$$1$$$$Collection$$$$_spliceModels$$($start$$7$$, $count$$9$$, $model$$4$$) {
    for (var $i$$28$$ = $start$$7$$;$i$$28$$ < $start$$7$$ + $count$$9$$;$i$$28$$++) {
      this.$_removePrevNext$(this.$_getModel$($i$$28$$));
    }
    void 0 === $model$$4$$ ? (this.$_reduceLRU$(this.$_getModels$().splice($start$$7$$, $count$$9$$)), this.$_spliceModelIndices$($start$$7$$, $start$$7$$ + $count$$9$$ - 1)) : (this.$_reduceLRU$(this.$_getModels$().splice($start$$7$$, $count$$9$$, $model$$4$$)), this.$_spliceModelIndices$($start$$7$$, $start$$7$$ + $count$$9$$ - 1), this.$_insertModelIndex$($start$$7$$), this.$_makeModelHead$($model$$4$$));
    this.$_setChangeAt$($start$$7$$, $count$$9$$);
    0 > this.$lruCount$ && (this.$lruCount$ = 0);
    this.$_realignModelIndices$($start$$7$$);
  };
  $oj$$1$$.$Collection$.prototype.$_getModel$ = function $$oj$$1$$$$Collection$$$$_getModel$$($index$$50$$) {
    return this.$_getModels$()[$index$$50$$];
  };
  $oj$$1$$.$Collection$.prototype.$_realignModelIndices$ = function $$oj$$1$$$$Collection$$$$_realignModelIndices$$($start$$8$$) {
    for (var $index$$51$$, $i$$29$$ = 0;$i$$29$$ < this.$_modelIndices$.length;$i$$29$$++) {
      $index$$51$$ = this.$_modelIndices$[$i$$29$$], $index$$51$$ >= $start$$8$$ && this.$_getModel$($index$$51$$) && this.$_getModel$($index$$51$$).$SetIndex$($index$$51$$);
    }
  };
  $oj$$1$$.$Collection$.prototype.$_removePrevNext$ = function $$oj$$1$$$$Collection$$$$_removePrevNext$$($model$$5_oldNext$$) {
    if ($model$$5_oldNext$$) {
      var $oldPrev$$ = $model$$5_oldNext$$.$previousModel$;
      $model$$5_oldNext$$ = $model$$5_oldNext$$.$nextModel$;
      $oldPrev$$ ? $oldPrev$$.$SetNext$($model$$5_oldNext$$) : this.head = $model$$5_oldNext$$;
      $model$$5_oldNext$$ ? $model$$5_oldNext$$.$SetPrevious$($oldPrev$$) : this.tail = $oldPrev$$;
    }
  };
  $oj$$1$$.$Collection$.prototype.$_makeModelHead$ = function $$oj$$1$$$$Collection$$$$_makeModelHead$$($model$$6$$) {
    $model$$6$$.$SetNext$(this.head);
    this.head ? this.head.$SetPrevious$($model$$6$$) : this.tail = $model$$6$$;
    $model$$6$$.$SetPrevious$(null);
    this.head = $model$$6$$;
  };
  $oj$$1$$.$Collection$.prototype.$_setModelIndex$ = function $$oj$$1$$$$Collection$$$$_setModelIndex$$($index$$52$$) {
    -1 === this.$_modelIndices$.indexOf($index$$52$$) && this.$_modelIndices$.push($index$$52$$);
  };
  $oj$$1$$.$Collection$.prototype.$_insertModelIndex$ = function $$oj$$1$$$$Collection$$$$_insertModelIndex$$($start$$9$$) {
    for (var $i$$31$$ = 0;$i$$31$$ < this.$_modelIndices$.length;$i$$31$$++) {
      this.$_modelIndices$[$i$$31$$] >= $start$$9$$ && this.$_modelIndices$[$i$$31$$]++;
    }
    this.$_modelIndices$.push($start$$9$$);
  };
  $oj$$1$$.$Collection$.prototype.$_spliceModelIndices$ = function $$oj$$1$$$$Collection$$$$_spliceModelIndices$$($start$$10$$, $end$$3$$) {
    void 0 === $end$$3$$ && ($end$$3$$ = $start$$10$$);
    this.$_clearModelIndices$($start$$10$$, $end$$3$$);
    for (var $count$$11$$ = $end$$3$$ - $start$$10$$ + 1, $i$$32$$ = 0;$i$$32$$ < this.$_modelIndices$.length;$i$$32$$++) {
      this.$_modelIndices$[$i$$32$$] > $end$$3$$ && (this.$_modelIndices$[$i$$32$$] -= $count$$11$$);
    }
  };
  $oj$$1$$.$Collection$.prototype.$_clearModelIndices$ = function $$oj$$1$$$$Collection$$$$_clearModelIndices$$($start$$11$$, $end$$4$$) {
    void 0 === $end$$4$$ && ($end$$4$$ = $start$$11$$);
    for (var $i$$33$$ = $start$$11$$;$i$$33$$ <= $end$$4$$;$i$$33$$++) {
      var $idx$$ = this.$_modelIndices$.indexOf($start$$11$$);
      -1 < $idx$$ && this.$_modelIndices$.splice($idx$$, 1);
    }
  };
  $oj$$1$$.$Collection$.prototype.$_setModel$ = function $$oj$$1$$$$Collection$$$$_setModel$$($index$$53$$, $model$$7$$) {
    var $oldModel$$ = this.$_getModel$($index$$53$$);
    this.$_removePrevNext$($oldModel$$);
    $oldModel$$ || this.$lruCount$++;
    this.$_setChangeAt$($index$$53$$, 1);
    if (this.$_getModels$()[$index$$53$$] = $model$$7$$) {
      this.$_setModelIndex$($index$$53$$), $model$$7$$.$SetIndex$($index$$53$$), this.$_makeModelHead$($model$$7$$);
    }
  };
  $oj$$1$$.$Collection$.prototype.$_clearOutModels$ = function $$oj$$1$$$$Collection$$$$_clearOutModels$$($n$$2$$) {
    var $current$$ = this.tail, $index$$54$$, $model$$8$$, $i$$34$$ = 0;
    for (this.tail = null;$current$$ && $i$$34$$ < $n$$2$$;) {
      $index$$54$$ = $current$$.$GetIndex$(), ($model$$8$$ = this.$_getModel$($index$$54$$)) && $model$$8$$.$hasChanged$() ? (this.tail || (this.tail = $current$$), $current$$ = $current$$.$previousModel$) : (this.$lruCount$--, -1 < $index$$54$$ && (this.$_setModel$($index$$54$$, void 0), this.$_clearModelIndices$($index$$54$$, $index$$54$$)), $current$$.$SetNext$(null), $current$$ = $current$$.$SetPrevious$(null), $i$$34$$++);
    }
    this.tail || (this.tail = $current$$);
    0 > this.$lruCount$ && (this.$lruCount$ = 0);
    0 === this.$lruCount$ && (this.tail = this.head = null);
  };
  $oj$$1$$.$Collection$.prototype.$_resetLRU$ = function $$oj$$1$$$$Collection$$$$_resetLRU$$() {
    this.$lruCount$ = 0;
    this.tail = this.head = null;
  };
  $oj$$1$$.$Collection$.prototype.$_manageLRU$ = function $$oj$$1$$$$Collection$$$$_manageLRU$$($incoming$$) {
    if (this.$IsVirtual$()) {
      var $limit$$ = this.$_getModelLimit$();
      -1 < $limit$$ && this.$lruCount$ + $incoming$$ > $limit$$ && this.$_clearOutModels$(this.$lruCount$ + $incoming$$ - $limit$$);
    }
  };
  $oj$$1$$.$Collection$.prototype.clone = function $$oj$$1$$$$Collection$$$clone$() {
    return this.$_cloneInternal$(!0);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.clone", {clone:$oj$$1$$.$Collection$.prototype.clone});
  $oj$$1$$.$Collection$.prototype.$_cloneInternal$ = function $$oj$$1$$$$Collection$$$$_cloneInternal$$($i$$35_withProperties$$) {
    var $c$$27$$ = new this.constructor, $model$$9$$;
    this.$IsVirtual$() && ($c$$27$$ = this.$_copyFetchProperties$($c$$27$$), $c$$27$$.$_resetModelsToFullLength$());
    $c$$27$$ = this.$_copyProperties$($c$$27$$);
    if ($i$$35_withProperties$$) {
      var $indices$$ = [];
      for ($i$$35_withProperties$$ = 0;$i$$35_withProperties$$ < this.$_modelIndices$.length;$i$$35_withProperties$$++) {
        $indices$$.push(this.$_modelIndices$[$i$$35_withProperties$$]);
      }
      $indices$$.sort(function($a$$92$$, $b$$49$$) {
        return $a$$92$$ - $b$$49$$;
      });
      var $index$$55$$;
      for ($i$$35_withProperties$$ = 0;$i$$35_withProperties$$ < $indices$$.length;$i$$35_withProperties$$++) {
        $index$$55$$ = $indices$$[$i$$35_withProperties$$], ($model$$9$$ = this.$_atInternal$($index$$55$$, null, !0, !1)) && $c$$27$$.$_addInternal$($model$$9$$.clone(), {at:$index$$55$$}, !0, !1);
      }
    }
    return $c$$27$$;
  };
  $oj$$1$$.$Collection$.prototype.$_copyProperties$ = function $$oj$$1$$$$Collection$$$$_copyProperties$$($collection$$4$$) {
    var $props$$1$$ = ["comparator", "model", "modelId"], $prop$$17$$, $i$$36$$;
    for ($i$$36$$ = 0;$i$$36$$ < $props$$1$$.length;$i$$36$$++) {
      $prop$$17$$ = $props$$1$$[$i$$36$$], $collection$$4$$[$prop$$17$$] = this[$prop$$17$$];
    }
    return $collection$$4$$;
  };
  $oj$$1$$.$Collection$.prototype.$_copyFetchProperties$ = function $$oj$$1$$$$Collection$$$$_copyFetchProperties$$($collection$$5$$) {
    var $props$$2$$ = ["totalResults", "hasMore", $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$], $prop$$18$$, $i$$37$$;
    for ($i$$37$$ = 0;$i$$37$$ < $props$$2$$.length;$i$$37$$++) {
      $prop$$18$$ = $props$$2$$[$i$$37$$], $collection$$5$$[$prop$$18$$] = this[$prop$$18$$];
    }
    return $collection$$5$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getLength$ = function $$oj$$1$$$$Collection$$$$_getLength$$() {
    return this.length;
  };
  $oj$$1$$.$Collection$.prototype.$_setLength$ = function $$oj$$1$$$$Collection$$$$_setLength$$() {
    var $modelsLen$$ = this.$_getModelsLength$();
    this.length = $modelsLen$$;
    this.$IsVirtual$() || (this.totalResults = $modelsLen$$);
  };
  $oj$$1$$.$Collection$.$_createModel$ = function $$oj$$1$$$$Collection$$$_createModel$$($collection$$6$$, $attrs$$3$$, $options$$21$$) {
    return $collection$$6$$.model ? $$$$1$$.isFunction($collection$$6$$.model) ? new $collection$$6$$.model($attrs$$3$$, $options$$21$$) : new $collection$$6$$.model.constructor($attrs$$3$$, $options$$21$$) : null;
  };
  $oj$$1$$.$Collection$.prototype.$_newModel$ = function $$oj$$1$$$$Collection$$$$_newModel$$($m_validationValue$$, $opt$$1_options$$22$$, $ignoreDefaults$$) {
    var $newModel$$ = null;
    $opt$$1_options$$22$$ = $opt$$1_options$$22$$ || {};
    $opt$$1_options$$22$$.$ignoreDefaults$ = $ignoreDefaults$$;
    $m_validationValue$$ instanceof $oj$$1$$.$Model$ ? $newModel$$ = $m_validationValue$$ : this.model ? $newModel$$ = $oj$$1$$.$Collection$.$_createModel$(this, $m_validationValue$$, $opt$$1_options$$22$$) : ($opt$$1_options$$22$$.collection = this, $newModel$$ = new $oj$$1$$.$Model$($m_validationValue$$, $opt$$1_options$$22$$));
    return $opt$$1_options$$22$$.validate && $newModel$$.validate && ($m_validationValue$$ = $newModel$$.validate($newModel$$.attributes)) ? ($opt$$1_options$$22$$.validationError = $m_validationValue$$, this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.INVALID, $newModel$$, $m_validationValue$$, $opt$$1_options$$22$$), null) : $newModel$$;
  };
  $oj$$1$$.$Collection$.prototype.add = function $$oj$$1$$$$Collection$$$add$($m$$1$$, $options$$23$$) {
    this.$_manageLRU$(1);
    return this.$_handlePromise$(this.$_addInternal$($m$$1$$, $options$$23$$, !1, ($options$$23$$ || {}).deferred));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.add", {add:$oj$$1$$.$Collection$.prototype.add});
  $oj$$1$$.$Collection$.prototype.$_addInternal$ = function $$oj$$1$$$$Collection$$$$_addInternal$$($m$$2$$, $options$$24$$, $fillIn$$, $deferred$$2$$) {
    function $mergeAttrs$$($collection$$9$$, $modelToTryAndMerge_sortOpt$$inline_352$$, $modelFoundInCollection$$1$$, $newModel$$3$$, $deferred$$4$$) {
      var $existingModel$$1$$, $modelAdded$$ = null;
      !$force$$ && $merge$$ && $modelFoundInCollection$$1$$ ? ($needSort$$ = $modelFoundInCollection$$1$$.$Merge$($modelToTryAndMerge_sortOpt$$inline_352$$, $collection$$9$$.comparator, $silent$$3$$), $modelAdded$$ = $modelFoundInCollection$$1$$) : ($force$$ || ($existingModel$$1$$ = $collection$$9$$.$_getLocal$($newModel$$3$$)) && $fillIn$$ && $at$$1$$ !== $existingModel$$1$$.index && $oj$$1$$.$Logger$.warn("Duplicate ID fetched or added without merging, the id \x3d " + $existingModel$$1$$.$GetId$()), 
      void 0 === $existingModel$$1$$ ? (void 0 === $at$$1$$ ? ($collection$$9$$.$_pushModels$($newModel$$3$$), $index$$56$$ = $collection$$9$$.$_getModelsLength$() - 1, $collection$$9$$.$_getModel$($index$$56$$).$SetCid$()) : ($index$$56$$ = $at$$1$$, $collection$$9$$.$IsVirtual$() && $fillIn$$ ? $collection$$9$$.$_setModel$($index$$56$$, $newModel$$3$$) : $collection$$9$$.$_spliceModels$($index$$56$$, 0, $newModel$$3$$), $collection$$9$$.$_getModel$($index$$56$$).$SetCid$(), $at$$1$$ += 1), void 0 === 
      $newModel$$3$$.$GetCollection$() && $newModel$$3$$.$SetCollection$($collection$$9$$), $collection$$9$$.$_setLength$(), $collection$$9$$.$_listenToModel$($newModel$$3$$), $added$$ = !0, $modelAdded$$ = $newModel$$3$$) : $modelAdded$$ = $existingModel$$1$$);
      $fillIn$$ && ($options$$24$$ = $options$$24$$ || {}, $options$$24$$.fillIn = !0);
      $needSort$$ && void 0 === $existingModel$$1$$ && !$sort$$ && void 0 === $at$$1$$ && 1 < $collection$$9$$.$_getLength$() && (-1 < $index$$56$$ && ($cid$$ = $collection$$9$$.$_getModel$($index$$56$$).cid), $modelToTryAndMerge_sortOpt$$inline_352$$ = {}, $oj$$1$$.$CollectionUtils$.$copyInto$($modelToTryAndMerge_sortOpt$$inline_352$$, $options$$24$$), $modelToTryAndMerge_sortOpt$$inline_352$$.add = !0, $collection$$9$$.sort($modelToTryAndMerge_sortOpt$$inline_352$$), -1 < $index$$56$$ && ($index$$56$$ = 
      $collection$$9$$.$IsVirtual$() ? -1 : $collection$$9$$.indexOf($collection$$9$$.$getByCid$($cid$$), $deferred$$4$$)));
      $added$$ && ($options$$24$$.at && ($options$$24$$.index = $index$$56$$), $newModel$$3$$ ? ($newModel$$3$$.$TriggerInternal$($silent$$3$$, $oj$$1$$.$Events$.$EventType$.ADD, $newModel$$3$$, $collection$$9$$, $options$$24$$), $addedModels$$.push($newModel$$3$$)) : ($modelFoundInCollection$$1$$.$TriggerInternal$($silent$$3$$, $oj$$1$$.$Events$.$EventType$.ADD, $modelFoundInCollection$$1$$, $collection$$9$$, $options$$24$$), $addedModels$$.push($modelFoundInCollection$$1$$)));
      return $modelAdded$$;
    }
    function $doAdd$$($collection$$10$$, $model$$10_modelAdded$$1$$, $deferred$$5$$) {
      $added$$ = !1;
      var $newModel$$4$$ = $collection$$10$$.$_newModel$($model$$10_modelAdded$$1$$, $options$$24$$, !1), $modelToTryAndMerge$$1$$ = null, $modelFoundInCollection$$2$$ = null;
      if (null != $newModel$$4$$) {
        $index$$56$$ = -1;
        $newModel$$4$$.$SetupId$();
        $modelToTryAndMerge$$1$$ = $model$$10_modelAdded$$1$$ instanceof $oj$$1$$.$Model$ ? $model$$10_modelAdded$$1$$ : $newModel$$4$$;
        if ($deferred$$5$$) {
          return $force$$ ? new Promise(function($resolve$$) {
            var $model$$11$$ = $mergeAttrs$$($collection$$10$$, $modelToTryAndMerge$$1$$, void 0, $newModel$$4$$, $deferred$$5$$);
            $modelReturnList$$.push($model$$11$$);
            $resolve$$($model$$11$$);
          }) : $collection$$10$$.$_getInternal$($modelToTryAndMerge$$1$$, {silent:!0}, $deferred$$5$$, !0).then(function($mod_modInfo$$) {
            $modelFoundInCollection$$2$$ = $mod_modInfo$$.m;
            $mod_modInfo$$ = $mergeAttrs$$($collection$$10$$, $modelToTryAndMerge$$1$$, $modelFoundInCollection$$2$$, $newModel$$4$$, $deferred$$5$$);
            $modelReturnList$$.push($mod_modInfo$$);
          });
        }
        !$force$$ && $merge$$ && ($modelFoundInCollection$$2$$ = $fillIn$$ ? $collection$$10$$.$_getLocal$($modelToTryAndMerge$$1$$) : $collection$$10$$.get($modelToTryAndMerge$$1$$));
        ($model$$10_modelAdded$$1$$ = $mergeAttrs$$($collection$$10$$, $modelToTryAndMerge$$1$$, $modelFoundInCollection$$2$$, $newModel$$4$$, $deferred$$5$$)) && $modelReturnList$$.push($model$$10_modelAdded$$1$$);
      } else {
        $modelReturnList$$.push(!1);
      }
    }
    function $_parse$$($collection$$11$$, $array$$9$$) {
      return $collection$$11$$.parse && $options$$24$$.parse && !$options$$24$$.$noparse$ ? $collection$$11$$.parse($array$$9$$) : $array$$9$$;
    }
    $options$$24$$ = $options$$24$$ || {};
    var $modelArray$$ = [], $at$$1$$ = $options$$24$$.at, $silent$$3$$ = $options$$24$$.silent, $force$$ = $options$$24$$.force, $i$$38$$, $index$$56$$, $cid$$, $merge$$ = $options$$24$$.merge || !1, $sort$$ = $options$$24$$.sort, $needSort$$ = !0, $added$$ = !1, $addedModels$$ = [], $modelReturnList$$ = [];
    void 0 !== $at$$1$$ && 0 > $at$$1$$ && ($at$$1$$ += this.$_getLength$() + 1);
    $m$$2$$ instanceof Array ? $modelArray$$ = $m$$2$$ : $modelArray$$.push($m$$2$$);
    if (!$fillIn$$ && (this.$IsVirtual$() || $deferred$$2$$)) {
      var $self$$1$$ = this;
      return new Promise(function($allResolve$$, $allReject$$) {
        function $doTask$$($index$$57$$) {
          return new Promise(function($resolve$$1$$, $reject$$1$$) {
            $doAdd$$($self$$1$$, $modelArray$$[$index$$57$$], !0).then(function() {
              $resolve$$1$$($index$$57$$ + 1);
            }, $reject$$1$$);
          });
        }
        var $currentStep$$ = Promise.resolve(0);
        $modelArray$$ = $_parse$$($self$$1$$, $modelArray$$);
        for ($i$$38$$ = 0;$i$$38$$ < $modelArray$$.length;$i$$38$$++) {
          $currentStep$$ = $currentStep$$.then($doTask$$);
        }
        $currentStep$$.then(function() {
          0 < $addedModels$$.length && $self$$1$$.$TriggerInternal$($options$$24$$.silent, $oj$$1$$.$Events$.$EventType$.ALLADDED, $self$$1$$, $addedModels$$, $options$$24$$);
          $allResolve$$($oj$$1$$.$Collection$.$_returnModels$($modelReturnList$$));
        }, $allReject$$);
      });
    }
    $modelArray$$ = $_parse$$(this, $modelArray$$);
    for ($i$$38$$ = 0;$i$$38$$ < $modelArray$$.length;$i$$38$$++) {
      $doAdd$$(this, $modelArray$$[$i$$38$$], !1);
    }
    0 < $addedModels$$.length && this.$TriggerInternal$($options$$24$$.silent, $oj$$1$$.$Events$.$EventType$.ALLADDED, this, $addedModels$$, $options$$24$$);
    return $oj$$1$$.$Collection$.$_returnModels$($modelReturnList$$);
  };
  $oj$$1$$.$Collection$.$_returnModels$ = function $$oj$$1$$$$Collection$$$_returnModels$$($modelReturnList$$1$$) {
    return 1 === $modelReturnList$$1$$.length ? $modelReturnList$$1$$[0] : $modelReturnList$$1$$;
  };
  $oj$$1$$.$Collection$.prototype.$_hasComparator$ = function $$oj$$1$$$$Collection$$$$_hasComparator$$() {
    return $oj$$1$$.$Collection$.$_defined$(this.comparator);
  };
  $oj$$1$$.$Collection$.prototype.sort = function $$oj$$1$$$$Collection$$$sort$($options$$25$$) {
    $options$$25$$ = $options$$25$$ || {};
    var $silent$$4_startIndex$$ = $options$$25$$.silent, $comparator$$ = this.comparator, $self$$2$$;
    if (!this.$_hasComparator$()) {
      return null;
    }
    if (this.$IsVirtual$()) {
      var $eventOpts_totalResults$$ = this.totalResults;
      this.$_hasTotalResults$() ? this.$_setModels$(Array($eventOpts_totalResults$$), !0) : (this.$_setModels$([], !0), this.$_resetLRU$(), this.$_setLength$());
      $eventOpts_totalResults$$ = $options$$25$$.add ? {add:!0} : null;
      this.$TriggerInternal$($silent$$4_startIndex$$, $oj$$1$$.$Events$.$EventType$.SORT, this, $eventOpts_totalResults$$, null);
      $silent$$4_startIndex$$ = $options$$25$$.startIndex;
      return void 0 !== $silent$$4_startIndex$$ && null !== $silent$$4_startIndex$$ ? this.$setRangeLocal$($silent$$4_startIndex$$, this.$_getFetchSize$($options$$25$$)) : null;
    }
    $self$$2$$ = this;
    this.$_getModels$().sort(function($a$$93$$, $b$$50$$) {
      return $oj$$1$$.$Collection$.$SortFunc$($a$$93$$, $b$$50$$, $comparator$$, $self$$2$$, $self$$2$$);
    });
    this.$_realignModelIndices$(0);
    $eventOpts_totalResults$$ = $options$$25$$.add ? {add:!0} : null;
    this.$TriggerInternal$($silent$$4_startIndex$$, $oj$$1$$.$Events$.$EventType$.SORT, this, $eventOpts_totalResults$$, null);
    return null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sort", {sort:$oj$$1$$.$Collection$.prototype.sort});
  $oj$$1$$.$Collection$.$_getKey$ = function $$oj$$1$$$$Collection$$$_getKey$$($val$$14$$, $attr$$7$$) {
    return $val$$14$$ instanceof $oj$$1$$.$Model$ ? $val$$14$$.get($attr$$7$$) : $oj$$1$$.$Model$.$GetPropValue$($val$$14$$, $attr$$7$$);
  };
  $oj$$1$$.$Collection$.$SortFunc$ = function $$oj$$1$$$$Collection$$$SortFunc$$($a$$94$$, $b$$51$$, $attrs$$4_comparator$$1$$, $collection$$12$$, $self$$3$$) {
    var $attrs1_keyA$$, $keyB_retVal$$, $i$$39$$;
    if ($$$$1$$.isFunction($attrs$$4_comparator$$1$$)) {
      if (1 === $attrs$$4_comparator$$1$$.length) {
        $attrs1_keyA$$ = $attrs$$4_comparator$$1$$.call($self$$3$$, $a$$94$$);
        $keyB_retVal$$ = $attrs$$4_comparator$$1$$.call($self$$3$$, $b$$51$$);
        $attrs1_keyA$$ = $oj$$1$$.$StringUtils$.$isString$($attrs1_keyA$$) ? $attrs1_keyA$$.split(",") : [$attrs1_keyA$$];
        var $attrs2$$ = $oj$$1$$.$StringUtils$.$isString$($keyB_retVal$$) ? $keyB_retVal$$.split(",") : [$keyB_retVal$$];
        for ($i$$39$$ = 0;$i$$39$$ < $attrs1_keyA$$.length;$i$$39$$++) {
          if ($keyB_retVal$$ = $oj$$1$$.$Collection$.$_compareKeys$($attrs1_keyA$$[$i$$39$$], $attrs2$$[$i$$39$$], $collection$$12$$.sortDirection), 0 !== $keyB_retVal$$) {
            return $keyB_retVal$$;
          }
        }
      }
      return $attrs$$4_comparator$$1$$.call($self$$3$$, $a$$94$$, $b$$51$$);
    }
    if ($oj$$1$$.$StringUtils$.$isString$($attrs$$4_comparator$$1$$)) {
      for ($attrs$$4_comparator$$1$$ = $attrs$$4_comparator$$1$$.split(","), $i$$39$$ = 0;$i$$39$$ < $attrs$$4_comparator$$1$$.length;$i$$39$$++) {
        if ($attrs1_keyA$$ = $oj$$1$$.$Collection$.$_getKey$($a$$94$$, $attrs$$4_comparator$$1$$[$i$$39$$]), $keyB_retVal$$ = $oj$$1$$.$Collection$.$_getKey$($b$$51$$, $attrs$$4_comparator$$1$$[$i$$39$$]), $keyB_retVal$$ = $oj$$1$$.$Collection$.$_compareKeys$($attrs1_keyA$$, $keyB_retVal$$, $collection$$12$$.sortDirection), 0 !== $keyB_retVal$$) {
          return $keyB_retVal$$;
        }
      }
    }
    return 0;
  };
  $oj$$1$$.$Collection$.prototype.$sortedIndex$ = function $$oj$$1$$$$Collection$$$$sortedIndex$$($model$$12$$, $comparator$$2$$) {
    var $comp$$ = $comparator$$2$$ ? $comparator$$2$$ : this.comparator, $self$$4$$;
    if (!$comp$$) {
      return-1;
    }
    this.$_throwErrIfVirtual$("sortedIndex");
    $self$$4$$ = this;
    return $oj$$1$$.$Collection$.$_find$(this.$_getModels$(), $model$$12$$, function($a$$95$$, $b$$52$$) {
      var $attrs1$$1_keyA$$1$$, $attrs2$$1_keyB$$1$$;
      if ($$$$1$$.isFunction($comp$$)) {
        if (1 === $comp$$.length) {
          $attrs1$$1_keyA$$1$$ = $comp$$.call($self$$4$$, $a$$95$$);
          $attrs2$$1_keyB$$1$$ = $comp$$.call($self$$4$$, $b$$52$$);
          $attrs1$$1_keyA$$1$$ = $oj$$1$$.$StringUtils$.$isString$($attrs1$$1_keyA$$1$$) ? $attrs1$$1_keyA$$1$$.split(",") : [$attrs1$$1_keyA$$1$$];
          $attrs2$$1_keyB$$1$$ = $oj$$1$$.$StringUtils$.$isString$($attrs2$$1_keyB$$1$$) ? $attrs2$$1_keyB$$1$$.split(",") : [$attrs2$$1_keyB$$1$$];
          var $retVal$$1$$, $i$$40$$;
          for ($i$$40$$ = 0;$i$$40$$ < $attrs1$$1_keyA$$1$$.length;$i$$40$$++) {
            if ($retVal$$1$$ = $oj$$1$$.$Collection$.$_compareKeys$($attrs1$$1_keyA$$1$$[$i$$40$$], $attrs2$$1_keyB$$1$$[$i$$40$$], $self$$4$$.sortDirection), 0 !== $retVal$$1$$) {
              return $retVal$$1$$;
            }
          }
        }
        return $comp$$.call($self$$4$$, $a$$95$$, $b$$52$$);
      }
      return $oj$$1$$.$StringUtils$.$isString$($comp$$) ? ($attrs1$$1_keyA$$1$$ = $a$$95$$.get($comp$$), $attrs2$$1_keyB$$1$$ = $b$$52$$.get($comp$$), $oj$$1$$.$Collection$.$_compareKeys$($attrs1$$1_keyA$$1$$, $attrs2$$1_keyB$$1$$, $self$$4$$.sortDirection)) : 0;
    });
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortedIndex", {$sortedIndex$:$oj$$1$$.$Collection$.prototype.$sortedIndex$});
  $oj$$1$$.$Collection$.$_find$ = function $$oj$$1$$$$Collection$$$_find$$($modelArray$$1$$, $model$$13$$, $comparator$$3$$) {
    function $search$$($min$$, $max$$) {
      var $cid$$1_mid$$, $id$$2$$;
      if ($min$$ > $max$$) {
        return-1;
      }
      $cid$$1_mid$$ = $model$$13$$.$GetCid$();
      $id$$2$$ = $model$$13$$.$GetId$();
      if ($modelArray$$1$$[$min$$].$Match$($id$$2$$, $cid$$1_mid$$)) {
        return $min$$;
      }
      if ($modelArray$$1$$[$max$$].$Match$($id$$2$$, $cid$$1_mid$$)) {
        return $max$$;
      }
      $cid$$1_mid$$ = Math.floor(($max$$ + $min$$) / 2);
      return-1 === $comparator$$3$$($modelArray$$1$$[$cid$$1_mid$$], $model$$13$$) ? $search$$($min$$ + 1, $cid$$1_mid$$) : 1 === $comparator$$3$$($modelArray$$1$$[$cid$$1_mid$$], $model$$13$$) ? $search$$($cid$$1_mid$$, $max$$ - 1) : $cid$$1_mid$$;
    }
    return $search$$(0, $modelArray$$1$$.length - 1);
  };
  $oj$$1$$.$Collection$.$_compareKeys$ = function $$oj$$1$$$$Collection$$$_compareKeys$$($keyA$$2$$, $keyB$$2$$, $sortDirection$$) {
    if (-1 === $sortDirection$$) {
      if ($keyA$$2$$ < $keyB$$2$$) {
        return 1;
      }
      if ($keyB$$2$$ < $keyA$$2$$) {
        return-1;
      }
    } else {
      if ($keyA$$2$$ > $keyB$$2$$) {
        return 1;
      }
      if ($keyB$$2$$ > $keyA$$2$$) {
        return-1;
      }
    }
    return 0;
  };
  $oj$$1$$.$Collection$.prototype.unshift = function $$oj$$1$$$$Collection$$$unshift$($m$$3$$, $options$$26$$) {
    var $opt$$3$$ = {};
    $oj$$1$$.$CollectionUtils$.$copyInto$($opt$$3$$, $options$$26$$ || {});
    $opt$$3$$.at || ($opt$$3$$.at = 0);
    this.$_manageLRU$(1);
    return this.$_handlePromise$(this.$_addInternal$($m$$3$$, $opt$$3$$, !1, $opt$$3$$.deferred));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.unshift", {unshift:$oj$$1$$.$Collection$.prototype.unshift});
  $oj$$1$$.$Collection$.prototype.$_handlePromise$ = function $$oj$$1$$$$Collection$$$$_handlePromise$$($result$$) {
    return $$$$1$$.isFunction($result$$.then) ? this.$_addPromise$(function() {
      return $result$$;
    }) : $result$$;
  };
  $oj$$1$$.$Collection$.prototype.shift = function $$oj$$1$$$$Collection$$$shift$($options$$27$$) {
    $options$$27$$ = $options$$27$$ || {};
    var $deferred$$6$$ = this.$_getDeferred$($options$$27$$), $retVal$$2$$;
    if (this.$IsVirtual$() || $deferred$$6$$) {
      var $self$$5$$ = this;
      return this.at(0, $options$$27$$).then(function($model$$14$$) {
        $retVal$$2$$ = $self$$5$$.$_removeInternal$($model$$14$$, 0, $options$$27$$);
        $self$$5$$.$TriggerInternal$($options$$27$$.silent, $oj$$1$$.$Events$.$EventType$.ALLREMOVED, $self$$5$$, [$retVal$$2$$], $options$$27$$);
        return $retVal$$2$$;
      });
    }
    $retVal$$2$$ = this.$_removeInternal$(this.at(0), 0, $options$$27$$);
    this.$TriggerInternal$($options$$27$$.silent, $oj$$1$$.$Events$.$EventType$.ALLREMOVED, this, [$retVal$$2$$], $options$$27$$);
    return $retVal$$2$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.shift", {shift:$oj$$1$$.$Collection$.prototype.shift});
  $oj$$1$$.$Collection$.prototype.$initial$ = function $$oj$$1$$$$Collection$$$$initial$$($n$$3$$) {
    void 0 === $n$$3$$ && ($n$$3$$ = 1);
    this.$_throwErrIfVirtual$("initial");
    var $array$$10$$ = [], $i$$41$$;
    for ($i$$41$$ = 0;$i$$41$$ < this.$_getLength$() - $n$$3$$;$i$$41$$ += 1) {
      $array$$10$$.push(this.at($i$$41$$));
    }
    return $array$$10$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.initial", {$initial$:$oj$$1$$.$Collection$.prototype.$initial$});
  $oj$$1$$.$Collection$.prototype.$_getDeferred$ = function $$oj$$1$$$$Collection$$$$_getDeferred$$($options$$28$$) {
    return($options$$28$$ || {}).deferred;
  };
  $oj$$1$$.$Collection$.prototype.last = function $$oj$$1$$$$Collection$$$last$($n$$4$$, $options$$29$$) {
    var $deferred$$7_i$$42$$ = this.$_getDeferred$($options$$29$$);
    void 0 === $n$$4$$ && ($n$$4$$ = 1);
    if (1 === $n$$4$$) {
      var $len$$1$$ = this.$_getModelsLength$();
      0 === $len$$1$$ && ($len$$1$$ = $n$$4$$);
      return 0 < $len$$1$$ ? this.at($len$$1$$ - 1, $deferred$$7_i$$42$$) : null;
    }
    var $array$$11$$ = [], $len$$1$$ = this.$_getLength$();
    if ($deferred$$7_i$$42$$ || this.$IsVirtual$()) {
      var $start$$12$$ = $len$$1$$ - $n$$4$$;
      0 > $start$$12$$ && ($start$$12$$ = 0);
      0 === $len$$1$$ && ($len$$1$$ = $n$$4$$);
      var $self$$6$$ = this;
      return this.$_addPromise$(function() {
        return $self$$6$$.$IterativeAt$($start$$12$$, $len$$1$$);
      });
    }
    for ($deferred$$7_i$$42$$ = $len$$1$$ - $n$$4$$;$deferred$$7_i$$42$$ < $len$$1$$;$deferred$$7_i$$42$$ += 1) {
      $array$$11$$.push(this.at($deferred$$7_i$$42$$));
    }
    return $array$$11$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.last", {last:$oj$$1$$.$Collection$.prototype.last});
  $oj$$1$$.$Collection$.prototype.$IterativeAt$ = function $$oj$$1$$$$Collection$$$$IterativeAt$$($start$$13$$, $end$$5$$) {
    var $array$$12$$ = [], $i$$43$$, $self$$7$$ = this;
    return new Promise(function($allResolve$$1$$, $allReject$$1$$) {
      function $doTask$$1$$($index$$58$$) {
        return new Promise(function($resolve$$2$$, $reject$$2$$) {
          $self$$7$$.$_deferredAt$($index$$58$$, null).then(function($model$$15$$) {
            $array$$12$$.push($model$$15$$);
            $resolve$$2$$($index$$58$$ + 1);
          }, $reject$$2$$);
        });
      }
      var $currentStep$$1$$ = Promise.resolve($start$$13$$);
      for ($i$$43$$ = $start$$13$$;$i$$43$$ < $end$$5$$;$i$$43$$++) {
        $currentStep$$1$$ = $currentStep$$1$$.then($doTask$$1$$);
      }
      $currentStep$$1$$.then(function() {
        $allResolve$$1$$($array$$12$$);
      }, $allReject$$1$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.$_getDefaultFetchSize$ = function $$oj$$1$$$$Collection$$$$_getDefaultFetchSize$$($n$$5$$) {
    return void 0 === $n$$5$$ || null === $n$$5$$ ? this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] : $n$$5$$;
  };
  $oj$$1$$.$Collection$.prototype.$_calculateNextStart$ = function $$oj$$1$$$$Collection$$$$_calculateNextStart$$() {
    var $lastFetch$$ = this.lastFetchCount;
    if (void 0 === $lastFetch$$ || null === $lastFetch$$) {
      $lastFetch$$ = this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$];
    }
    return void 0 === this.offset || null === this.offset ? $lastFetch$$ : this.offset + $lastFetch$$;
  };
  $oj$$1$$.$Collection$.prototype.next = function $$oj$$1$$$$Collection$$$next$($n$$6$$, $options$$30$$) {
    $options$$30$$ = $options$$30$$ || {};
    $options$$30$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getDefaultFetchSize$($n$$6$$);
    var $start$$14$$ = this.$_calculateNextStart$(), $length$$11$$ = this.$_getLength$();
    if (0 === $length$$11$$ && 0 < $options$$30$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$]) {
      $start$$14$$ = 0;
    } else {
      if ($start$$14$$ >= $length$$11$$) {
        return $options$$30$$.success && $options$$30$$.success.call($oj$$1$$.$Model$.$GetContext$($options$$30$$, this), this, null, $options$$30$$), null;
      }
    }
    $options$$30$$.startIndex = $start$$14$$;
    return this.fetch($options$$30$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.next", {next:$oj$$1$$.$Collection$.prototype.next});
  $oj$$1$$.$Collection$.prototype.$_calculatePrevStart$ = function $$oj$$1$$$$Collection$$$$_calculatePrevStart$$($n$$7$$) {
    return void 0 === this.offset || null === this.offset ? 0 : this.offset - $n$$7$$;
  };
  $oj$$1$$.$Collection$.prototype.$previous$ = function $$oj$$1$$$$Collection$$$$previous$$($n$$8$$, $options$$31$$) {
    $options$$31$$ = $options$$31$$ || {};
    if (0 === this.offset) {
      return $options$$31$$.success && this.lastFetchCount && $options$$31$$.success.call($oj$$1$$.$Model$.$GetContext$($options$$31$$, this), this, null, $options$$31$$), null;
    }
    $options$$31$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getDefaultFetchSize$($n$$8$$);
    var $start$$15$$ = this.$_calculatePrevStart$($options$$31$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$]);
    0 > $start$$15$$ && ($options$$31$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.offset, $start$$15$$ = 0);
    $options$$31$$.startIndex = $start$$15$$;
    return this.fetch($options$$31$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.previous", {$previous$:$oj$$1$$.$Collection$.prototype.$previous$});
  $oj$$1$$.$Collection$.prototype.$setModelLimit$ = function $$oj$$1$$$$Collection$$$$setModelLimit$$($n$$9$$) {
    this.modelLimit = $n$$9$$;
    this.$_manageLRU$(0);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.setModelLimit", {$setModelLimit$:$oj$$1$$.$Collection$.prototype.$setModelLimit$});
  $oj$$1$$.$Collection$.prototype.$_getModelLimit$ = function $$oj$$1$$$$Collection$$$$_getModelLimit$$() {
    return this.modelLimit;
  };
  $oj$$1$$.$Collection$.prototype.$setFetchSize$ = function $$oj$$1$$$$Collection$$$$setFetchSize$$($n$$10$$) {
    this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = $n$$10$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.setFetchSize", {$setFetchSize$:$oj$$1$$.$Collection$.prototype.$setFetchSize$});
  $oj$$1$$.$Collection$.prototype.$rest$ = function $$oj$$1$$$$Collection$$$$rest$$($n$$11$$, $options$$32$$) {
    var $deferred$$8_i$$44$$ = this.$_getDeferred$($options$$32$$);
    void 0 === $n$$11$$ && ($n$$11$$ = 1);
    var $array$$13$$ = [];
    if (this.$IsVirtual$() || $deferred$$8_i$$44$$) {
      var $self$$10$$ = this;
      return this.$_addPromise$(function() {
        return $self$$10$$.$IterativeAt$($n$$11$$, $self$$10$$.$_getLength$());
      });
    }
    for ($deferred$$8_i$$44$$ = $n$$11$$;$deferred$$8_i$$44$$ < this.$_getLength$();$deferred$$8_i$$44$$ += 1) {
      $array$$13$$.push(this.at($deferred$$8_i$$44$$));
    }
    return $array$$13$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.rest", {$rest$:$oj$$1$$.$Collection$.prototype.$rest$});
  $oj$$1$$.$Collection$.prototype.remove = function $$oj$$1$$$$Collection$$$remove$($m$$4$$, $options$$33$$) {
    $options$$33$$ = $options$$33$$ || {};
    var $modArray$$ = [], $mod$$1$$;
    $m$$4$$ instanceof Array ? $modArray$$ = $m$$4$$ : $modArray$$.push($m$$4$$);
    var $modsRemoved$$ = [];
    for ($mod$$1$$ = $modArray$$.length - 1;0 <= $mod$$1$$;$mod$$1$$ -= 1) {
      $modsRemoved$$.unshift(this.$_removeInternal$($modArray$$[$mod$$1$$], -1, $options$$33$$));
    }
    this.$TriggerInternal$($options$$33$$.silent, $oj$$1$$.$Events$.$EventType$.ALLREMOVED, this, $modArray$$, $options$$33$$);
    return $oj$$1$$.$Collection$.$_returnModels$($modsRemoved$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.remove", {remove:$oj$$1$$.$Collection$.prototype.remove});
  $oj$$1$$.$Collection$.prototype.$_removeInternal$ = function $$oj$$1$$$$Collection$$$$_removeInternal$$($modInfo$$1_model$$17$$, $index$$59$$, $options$$34$$) {
    $options$$34$$ = $options$$34$$ || {};
    $modInfo$$1_model$$17$$ = -1 == $index$$59$$ ? this.$_getInternal$($modInfo$$1_model$$17$$) : $oj$$1$$.$Collection$.$_getModinfo$($index$$59$$, $modInfo$$1_model$$17$$);
    var $silent$$5$$ = $options$$34$$.silent;
    $index$$59$$ = $modInfo$$1_model$$17$$.index;
    if (-1 < $index$$59$$) {
      var $mod$$2$$ = $modInfo$$1_model$$17$$.m;
      void 0 !== $mod$$2$$ && $mod$$2$$.$GetCollection$() === this && $mod$$2$$.$SetCollection$(null);
      this.$_spliceModels$($index$$59$$, 1);
      this.$_setLength$();
      var $opt$$5$$ = {};
      $oj$$1$$.$CollectionUtils$.$copyInto$($opt$$5$$, $options$$34$$);
      $opt$$5$$.index = $index$$59$$;
      void 0 !== $mod$$2$$ && $mod$$2$$.$TriggerInternal$($silent$$5$$, $oj$$1$$.$Events$.$EventType$.REMOVE, $mod$$2$$, this, $opt$$5$$);
      this.$_unlistenToModel$($mod$$2$$);
    }
    return $modInfo$$1_model$$17$$.m;
  };
  $oj$$1$$.$Collection$.prototype.$_unlistenToModel$ = function $$oj$$1$$$$Collection$$$$_unlistenToModel$$($m$$5$$) {
    void 0 !== $m$$5$$ && $m$$5$$.off(null, null, this);
  };
  $oj$$1$$.$Collection$.prototype.$_listenToModel$ = function $$oj$$1$$$$Collection$$$$_listenToModel$$($m$$6$$) {
    $m$$6$$.$OnInternal$($oj$$1$$.$Events$.$EventType$.ALL, this.$_modelEvent$, this, !1, !0);
  };
  $oj$$1$$.$Collection$.prototype.$_modelEvent$ = function $$oj$$1$$$$Collection$$$$_modelEvent$$($event$$14$$, $model$$18$$, $collection$$13$$, $options$$35$$) {
    $event$$14$$ === $oj$$1$$.$Events$.$EventType$.DESTROY && this.remove($model$$18$$);
    void 0 !== $collection$$13$$ && $collection$$13$$ instanceof $oj$$1$$.$Collection$ && $collection$$13$$ !== this || (Array.prototype.slice.call(arguments), this.$TriggerInternal$($options$$35$$ && $options$$35$$.silent, $event$$14$$, $model$$18$$, $collection$$13$$, $options$$35$$));
  };
  $oj$$1$$.$Collection$.prototype.refresh = function $$oj$$1$$$$Collection$$$refresh$($options$$36$$) {
    $options$$36$$ = $options$$36$$ || {};
    var $self$$11$$ = this;
    return this.$_addPromise$(function() {
      return new Promise(function($resolve$$3$$, $reject$$3$$) {
        if (!$self$$11$$.$IsVirtual$()) {
          var $silent$$7$$ = void 0 !== $options$$36$$.silent && $options$$36$$.silent;
          try {
            $self$$11$$.reset(null, {silent:!0});
            var $opt$$6_startIndex$$1$$ = {}, $prop$$19$$;
            for ($prop$$19$$ in $options$$36$$) {
              $options$$36$$.hasOwnProperty($prop$$19$$) && ($opt$$6_startIndex$$1$$[$prop$$19$$] = $options$$36$$[$prop$$19$$]);
            }
            $opt$$6_startIndex$$1$$.success = function $$opt$$6_startIndex$$1$$$success$($collection$$14$$, $response$$, $options$$37$$) {
              $self$$11$$.$TriggerInternal$($silent$$7$$, $oj$$1$$.$Events$.$EventType$.REFRESH, $self$$11$$, $options$$37$$, null);
              $resolve$$3$$({collection:$collection$$14$$, response:$response$$, options:$options$$37$$});
            };
            $opt$$6_startIndex$$1$$.error = function $$opt$$6_startIndex$$1$$$error$($xhr$$1$$, $status$$, $error$$3$$) {
              $reject$$3$$($oj$$1$$.$Collection$.$_createRejectionError$($xhr$$1$$, $status$$, $error$$3$$, $self$$11$$, $options$$36$$));
            };
            $self$$11$$.fetch($opt$$6_startIndex$$1$$);
            return;
          } catch ($e$$20$$) {
            if ($e$$20$$ instanceof $oj$$1$$.$URLError$) {
              $self$$11$$.$TriggerInternal$($silent$$7$$, $oj$$1$$.$Events$.$EventType$.REFRESH, $self$$11$$, $options$$36$$, null);
              $resolve$$3$$({collection:$self$$11$$, options:$options$$36$$});
              return;
            }
            throw $e$$20$$;
          }
        }
        $opt$$6_startIndex$$1$$ = $options$$36$$.startIndex;
        $self$$11$$.$_setModels$([], !0);
        $self$$11$$.$_resetLRU$();
        $self$$11$$.totalResults = void 0;
        $self$$11$$.$_setLength$();
        $silent$$7$$ = void 0 !== $options$$36$$.silent && $options$$36$$.silent;
        $self$$11$$.$TriggerInternal$($silent$$7$$, $oj$$1$$.$Events$.$EventType$.REFRESH, $self$$11$$, $options$$36$$, null);
        if (void 0 === $opt$$6_startIndex$$1$$ || null === $opt$$6_startIndex$$1$$) {
          $opt$$6_startIndex$$1$$ = 0;
        }
        void 0 !== $opt$$6_startIndex$$1$$ && null !== $opt$$6_startIndex$$1$$ ? $self$$11$$.$_setRangeLocalInternal$($opt$$6_startIndex$$1$$, $self$$11$$.$_getFetchSize$($options$$36$$)).then(function($actual$$) {
          $resolve$$3$$($actual$$);
        }, function($err$$) {
          $reject$$3$$($err$$);
        }) : $resolve$$3$$(void 0);
      });
    });
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.refresh", {refresh:$oj$$1$$.$Collection$.prototype.refresh});
  $oj$$1$$.$Collection$.prototype.reset = function $$oj$$1$$$$Collection$$$reset$($data$$33$$, $options$$38$$) {
    var $opts$$ = {};
    $oj$$1$$.$CollectionUtils$.$copyInto$($opts$$, $options$$38$$ || {});
    $opts$$.previousModels = this.$_getModels$();
    for (var $index$$60_model$$19_retObj$$, $i$$45_silent$$8$$ = 0;$i$$45_silent$$8$$ < this.$_modelIndices$.length;$i$$45_silent$$8$$++) {
      if ($index$$60_model$$19_retObj$$ = this.$_modelIndices$[$i$$45_silent$$8$$], $index$$60_model$$19_retObj$$ = this.$_getModel$($index$$60_model$$19_retObj$$)) {
        this.$_unlistenToModel$($index$$60_model$$19_retObj$$), $index$$60_model$$19_retObj$$.$SetCollection$(null);
      }
    }
    this.$_setModels$([], !0);
    this.$_resetLRU$();
    $i$$45_silent$$8$$ = void 0 !== $opts$$.silent && $opts$$.silent;
    if (!$data$$33$$) {
      return this.totalResults = void 0, this.$_setLength$(), this.$TriggerInternal$($i$$45_silent$$8$$, $oj$$1$$.$Events$.$EventType$.RESET, this, $opts$$, null), null;
    }
    $index$$60_model$$19_retObj$$ = null;
    $opts$$.parse && ($data$$33$$ = this.parse($data$$33$$));
    this.$_manageLRU$($data$$33$$ instanceof Array ? $data$$33$$.length : 1);
    $opts$$.$noparse$ = !0;
    $index$$60_model$$19_retObj$$ = this.$_addInternal$($data$$33$$, $opts$$, !0, !1);
    this.$_setLength$();
    this.$TriggerInternal$($i$$45_silent$$8$$, $oj$$1$$.$Events$.$EventType$.RESET, this, $opts$$, null);
    return this.$_handlePromise$($index$$60_model$$19_retObj$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.reset", {reset:$oj$$1$$.$Collection$.prototype.reset});
  $oj$$1$$.$Collection$.prototype.at = function $$oj$$1$$$$Collection$$$at$($index$$61$$, $options$$39$$) {
    return this.$_atInternal$($index$$61$$, $options$$39$$, !1, this.$_getDeferred$($options$$39$$));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.at", {at:$oj$$1$$.$Collection$.prototype.at});
  $oj$$1$$.$Collection$.prototype.$_atInternal$ = function $$oj$$1$$$$Collection$$$$_atInternal$$($index$$62$$, $options$$40$$, $local$$, $deferred$$10$$) {
    0 > $index$$62$$ && ($index$$62$$ += this.$_getLength$());
    if (0 > $index$$62$$ || this.$_overUpperLimit$($index$$62$$)) {
      return $local$$ || !this.$IsVirtual$() && !$deferred$$10$$ ? null : this.$_addPromise$(function() {
        return Promise.resolve(null);
      });
    }
    var $self$$12$$ = this;
    return $local$$ || !this.$IsVirtual$() && !$deferred$$10$$ ? this.$_getModel$($index$$62$$) : this.$_addPromise$(function() {
      return $self$$12$$.$_deferredAt$($index$$62$$, $options$$40$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.whenReady = function $$oj$$1$$$$Collection$$$whenReady$() {
    return this.$_promises$ ? this.$_promises$ : Promise.resolve();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.whenReady", {whenReady:$oj$$1$$.$Collection$.prototype.whenReady});
  $oj$$1$$.$Collection$.prototype.$_addPromise$ = function $$oj$$1$$$$Collection$$$$_addPromise$$($promiseTask$$) {
    var $self$$13$$ = this;
    void 0 === this.$_promises$ && (this.$_promiseCount$ = 0, this.$_promises$ = Promise.resolve());
    this.$_promiseCount$++;
    return this.$_promises$ = this.$_promises$.then($promiseTask$$.bind($self$$13$$)).then(function($arg$$10$$) {
      $self$$13$$.$_promiseCount$--;
      0 === $self$$13$$.$_promiseCount$ && ($self$$13$$.$_promises$ = void 0, $self$$13$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.READY, $self$$13$$, null, null));
      return $arg$$10$$;
    }, function($error$$4$$) {
      $self$$13$$.$_promiseCount$--;
      0 === $self$$13$$.$_promiseCount$ && ($self$$13$$.$_promises$ = void 0);
      return Promise.reject($error$$4$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.$_deferredAt$ = function $$oj$$1$$$$Collection$$$$_deferredAt$$($index$$63$$, $options$$41$$) {
    var $self$$14$$ = this, $model$$20$$ = $self$$14$$.$_getModel$($index$$63$$);
    return void 0 === $model$$20$$ ? new Promise(function($resolve$$4$$, $reject$$4$$) {
      var $opts$$1$$ = {};
      $oj$$1$$.$CollectionUtils$.$copyInto$($opts$$1$$, $options$$41$$ || {});
      $opts$$1$$.context = $self$$14$$;
      $opts$$1$$.startIndex = $index$$63$$;
      $opts$$1$$.error = function $$opts$$1$$$error$($xhr$$2$$, $status$$1$$, $error$$5$$) {
        $reject$$4$$($oj$$1$$.$Collection$.$_createRejectionError$($xhr$$2$$, $status$$1$$, $error$$5$$, $self$$14$$, $options$$41$$));
      };
      $opts$$1$$.success = function $$opts$$1$$$success$() {
        $resolve$$4$$($self$$14$$.$_getModel$($index$$63$$));
      };
      $self$$14$$.$_fetchInternal$($opts$$1$$, -1, !1);
    }) : new Promise(function($resolve$$5$$) {
      $resolve$$5$$($model$$20$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.$getByCid$ = function $$oj$$1$$$$Collection$$$$getByCid$$($clientId$$) {
    for (var $models$$5$$ = this.$_getModels$(), $index$$64$$, $foundModel$$ = null, $i$$46$$ = 0;$i$$46$$ < this.$_modelIndices$.length;$i$$46$$++) {
      if ($index$$64$$ = this.$_modelIndices$[$i$$46$$], $models$$5$$[$index$$64$$] && $clientId$$ === $models$$5$$[$index$$64$$].cid) {
        $foundModel$$ = $models$$5$$[$index$$64$$];
        break;
      }
    }
    if ($foundModel$$) {
      return $foundModel$$;
    }
    if (this.$IsVirtual$()) {
      throw Error("Not found locally and not supported by server for virtual collections");
    }
    return null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.getByCid", {$getByCid$:$oj$$1$$.$Collection$.prototype.$getByCid$});
  $oj$$1$$.$Collection$.prototype.get = function $$oj$$1$$$$Collection$$$get$($id$$3$$, $options$$42$$) {
    var $internalGet$$ = this.$_getInternal$($id$$3$$, $options$$42$$, this.$_getDeferred$($options$$42$$));
    if ($internalGet$$) {
      if ($$$$1$$.isFunction($internalGet$$.then)) {
        return this.$_addPromise$(function() {
          return new Promise(function($resolve$$6$$, $reject$$6$$) {
            $internalGet$$.then(function($modInfo$$2$$) {
              $resolve$$6$$($modInfo$$2$$.m);
            }, function($err$$1$$) {
              $reject$$6$$($err$$1$$);
            });
          });
        });
      }
      if (this.$IsVirtual$()) {
        return this.$_addPromise$(function() {
          return new Promise(function($resolve$$7$$) {
            $resolve$$7$$($internalGet$$.m);
          });
        });
      }
      if ($internalGet$$.hasOwnProperty("m")) {
        return $internalGet$$.m;
      }
    }
    return null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.get", {get:$oj$$1$$.$Collection$.prototype.get});
  $oj$$1$$.$Collection$.prototype.$_getLocal$ = function $$oj$$1$$$$Collection$$$$_getLocal$$($id$$4_internalGet$$1$$) {
    return($id$$4_internalGet$$1$$ = this.$_getLocalInternal$($id$$4_internalGet$$1$$)) ? $id$$4_internalGet$$1$$.m : null;
  };
  $oj$$1$$.$Collection$.prototype.$_getLocalInternal$ = function $$oj$$1$$$$Collection$$$$_getLocalInternal$$($id$$5$$) {
    var $cid$$2$$ = $id$$5$$;
    $id$$5$$ instanceof $oj$$1$$.$Model$ ? ($cid$$2$$ = $id$$5$$.$GetCid$(), $id$$5$$ = $id$$5$$.$GetId$()) : $oj$$1$$.$Collection$.$_defined$($id$$5$$) && void 0 !== $id$$5$$.id && ($id$$5$$ = $id$$5$$.id);
    for (var $foundObj$$ = null, $len$$2$$ = this.$_modelIndices$.length, $model$$21$$, $models$$6$$ = this.$_getModels$(), $index$$65$$, $i$$47$$ = 0;$i$$47$$ < $len$$2$$;$i$$47$$++) {
      if ($index$$65$$ = this.$_modelIndices$[$i$$47$$], $model$$21$$ = $models$$6$$[$index$$65$$], void 0 !== $model$$21$$ && $model$$21$$.$Match$($id$$5$$, $cid$$2$$)) {
        $foundObj$$ = $oj$$1$$.$Collection$.$_getModinfo$($index$$65$$, $model$$21$$);
        break;
      }
    }
    return $foundObj$$ ? $foundObj$$ : $oj$$1$$.$Collection$.$_getModinfo$(-1, void 0);
  };
  $oj$$1$$.$Collection$.prototype.$_getInternal$ = function $$oj$$1$$$$Collection$$$$_getInternal$$($id$$6$$, $options$$43$$, $deferred$$12$$, $fillIn$$1$$) {
    var $cid$$3$$ = $id$$6$$;
    void 0 === $fillIn$$1$$ && ($fillIn$$1$$ = !1);
    $id$$6$$ instanceof $oj$$1$$.$Model$ ? ($cid$$3$$ = $id$$6$$.$GetCid$(), $id$$6$$ = $id$$6$$.$GetId$()) : $oj$$1$$.$Collection$.$_defined$($id$$6$$) && void 0 !== $id$$6$$.id && ($id$$6$$ = $id$$6$$.id);
    for (var $foundObj$$1$$ = null, $models$$7$$ = this.$_getModels$(), $index$$66$$, $i$$48$$ = 0;$i$$48$$ < this.$_modelIndices$.length;$i$$48$$++) {
      if ($index$$66$$ = this.$_modelIndices$[$i$$48$$], $models$$7$$[$index$$66$$] && $models$$7$$[$index$$66$$].$Match$($id$$6$$, $cid$$3$$)) {
        $foundObj$$1$$ = $oj$$1$$.$Collection$.$_getModinfo$($index$$66$$, $models$$7$$[$index$$66$$]);
        break;
      }
    }
    if ($foundObj$$1$$) {
      return $deferred$$12$$ ? new Promise(function($resolve$$8$$) {
        $resolve$$8$$($foundObj$$1$$);
      }) : $foundObj$$1$$;
    }
    if (this.$IsVirtual$()) {
      if (void 0 === $id$$6$$ && void 0 !== $cid$$3$$) {
        return new Promise(function($resolve$$9$$) {
          $resolve$$9$$($oj$$1$$.$Collection$.$_getModinfo$(-1, void 0));
        });
      }
      var $self$$15$$ = this;
      return new Promise(function($resolve$$10$$, $reject$$10$$) {
        var $opts$$2$$ = {};
        $oj$$1$$.$CollectionUtils$.$copyInto$($opts$$2$$, $options$$43$$ || {});
        $opts$$2$$.context = $self$$15$$;
        $opts$$2$$.startID = $id$$6$$;
        $opts$$2$$.error = function $$opts$$2$$$error$($xhr$$3$$, $status$$2$$, $error$$6$$) {
          $reject$$10$$($oj$$1$$.$Collection$.$_createRejectionError$($xhr$$3$$, $status$$2$$, $error$$6$$, $self$$15$$, $options$$43$$));
        };
        $opts$$2$$.success = function $$opts$$2$$$success$($collection$$16$$, $response$$2$$) {
          if (null != $response$$2$$) {
            var $index$$inline_355$$ = $self$$15$$.$_getOffset$(), $model$$inline_356$$ = $self$$15$$.$_getModel$($index$$inline_355$$);
            void 0 !== $model$$inline_356$$ && $model$$inline_356$$.$Match$($id$$6$$, $cid$$3$$) ? $resolve$$10$$($oj$$1$$.$Collection$.$_getModinfo$($index$$inline_355$$, $model$$inline_356$$)) : $resolve$$10$$($oj$$1$$.$Collection$.$_getModinfo$(-1, void 0));
          } else {
            $resolve$$10$$($oj$$1$$.$Collection$.$_getModinfo$(-1, void 0));
          }
        };
        $self$$15$$.$_fetchInternal$($opts$$2$$, -1, $fillIn$$1$$);
      });
    }
    var $undefinedModInfo$$ = $oj$$1$$.$Collection$.$_getModinfo$(-1, void 0);
    return $deferred$$12$$ ? new Promise(function($resolve$$11$$) {
      $resolve$$11$$($undefinedModInfo$$);
    }) : $undefinedModInfo$$;
  };
  $oj$$1$$.$Collection$.$_getModinfo$ = function $$oj$$1$$$$Collection$$$_getModinfo$$($index$$68$$, $model$$23$$) {
    return{index:$index$$68$$, m:$model$$23$$};
  };
  $oj$$1$$.$Collection$.prototype.parse = function $$oj$$1$$$$Collection$$$parse$($response$$3$$) {
    var $prop$$20$$;
    if ($response$$3$$ instanceof Array || !$response$$3$$) {
      return $response$$3$$;
    }
    for ($prop$$20$$ in $response$$3$$) {
      if ($response$$3$$.hasOwnProperty($prop$$20$$) && $response$$3$$[$prop$$20$$] instanceof Array) {
        return $response$$3$$[$prop$$20$$];
      }
    }
    return $response$$3$$;
  };
  $oj$$1$$.$Collection$.prototype.$_checkActual$ = function $$oj$$1$$$$Collection$$$$_checkActual$$($start$$16$$, $count$$12$$, $actual$$1$$) {
    return this.$_hasTotalResults$() && 0 < this.totalResults && $actual$$1$$.start + $actual$$1$$.count >= this.totalResults ? !0 : $actual$$1$$.start === $start$$16$$ && $actual$$1$$.count === $count$$12$$;
  };
  $oj$$1$$.$Collection$.prototype.$setRangeLocal$ = function $$oj$$1$$$$Collection$$$$setRangeLocal$$($start$$17$$, $count$$13$$) {
    var $self$$16$$ = this;
    return this.$_addPromise$(function() {
      return $self$$16$$.$_setRangeLocalInternal$($start$$17$$, $count$$13$$);
    });
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.setRangeLocal", {$setRangeLocal$:$oj$$1$$.$Collection$.prototype.$setRangeLocal$});
  $oj$$1$$.$Collection$.prototype.$_setRangeLocalInternal$ = function $$oj$$1$$$$Collection$$$$_setRangeLocalInternal$$($start$$18$$, $count$$14$$) {
    this.$IsVirtual$() && this.$_resetModelsToFullLength$();
    var $actual$$2$$ = this.$_getLocalRange$($start$$18$$, $count$$14$$), $self$$17$$ = this;
    if (this.$_checkActual$($start$$18$$, $count$$14$$, $actual$$2$$)) {
      return new Promise(function($resolve$$12$$) {
        $resolve$$12$$($actual$$2$$);
      });
    }
    var $modelLimit$$ = this.$_getModelLimit$();
    -1 < $modelLimit$$ && $modelLimit$$ < $count$$14$$ && (this.modelLimit = $count$$14$$);
    return new Promise(function($resolve$$13$$, $reject$$13$$) {
      $self$$17$$.$_setRangeLocalFetch$($start$$18$$, $count$$14$$, -1, {start:$start$$18$$, count:$count$$14$$}, $resolve$$13$$, $reject$$13$$, !0);
    });
  };
  $oj$$1$$.$Collection$.prototype.$_setRangeLocalFetch$ = function $$oj$$1$$$$Collection$$$$_setRangeLocalFetch$$($start$$19$$, $count$$15$$, $actual$$3_placement$$, $original$$2$$, $resolve$$14$$, $reject$$14$$, $fill$$) {
    var $self$$18$$ = this, $limit$$1$$ = $start$$19$$ + $count$$15$$;
    this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] && this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] > $count$$15$$ && ($limit$$1$$ = this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] + $start$$19$$);
    var $newStart_opts$$3$$ = null;
    this.$IsVirtual$() ? ($newStart_opts$$3$$ = this.$_getFirstMissingModel$($start$$19$$, $limit$$1$$), $newStart_opts$$3$$ > $start$$19$$ && ($start$$19$$ = $newStart_opts$$3$$, $limit$$1$$ = $start$$19$$ + $count$$15$$, this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] && this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] > $count$$15$$ && ($limit$$1$$ = this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] + $start$$19$$)), $newStart_opts$$3$$ = {context:this, startIndex:$start$$19$$, fetchSize:$limit$$1$$ - 
    $start$$19$$}) : $newStart_opts$$3$$ = {context:this};
    $newStart_opts$$3$$.error = function $$newStart_opts$$3$$$error$($xhr$$4$$, $status$$3$$, $error$$7$$) {
      $reject$$14$$($oj$$1$$.$Collection$.$_createRejectionError$($xhr$$4$$, $status$$3$$, $error$$7$$, $self$$18$$, null));
    };
    $newStart_opts$$3$$.success = function $$newStart_opts$$3$$$success$() {
      var $actual$$inline_358$$ = $self$$18$$.$_getLocalRange$($original$$2$$.start, $original$$2$$.count);
      if ($fill$$ && $self$$18$$.$_hasTotalResults$() && $actual$$inline_358$$.count < $original$$2$$.count) {
        var $newPlacement$$inline_359$$ = $actual$$inline_358$$.start + $actual$$inline_358$$.count, $newStart$$inline_360$$ = $start$$19$$ + $count$$15$$;
        $newStart$$inline_360$$ < $self$$18$$.totalResults ? $self$$18$$.$_setRangeLocalFetch$($newStart$$inline_360$$, $count$$15$$, $newPlacement$$inline_359$$, $original$$2$$, $resolve$$14$$, $reject$$14$$, $fill$$) : $resolve$$14$$($actual$$inline_358$$);
      } else {
        $resolve$$14$$($actual$$inline_358$$);
      }
    };
    try {
      this.$_fetchInternal$($newStart_opts$$3$$, $actual$$3_placement$$, -1 < $actual$$3_placement$$);
    } catch ($e$$21$$) {
      $e$$21$$ instanceof $oj$$1$$.$URLError$ && ($actual$$3_placement$$ = $self$$18$$.$_getLocalRange$($start$$19$$, $count$$15$$), $resolve$$14$$($actual$$3_placement$$));
    }
  };
  $oj$$1$$.$Collection$.$_createRejectionError$ = function $$oj$$1$$$$Collection$$$_createRejectionError$$($xhr$$5$$, $status$$4$$, $error$$8$$, $collection$$18$$, $err$$2_options$$44$$) {
    var $silent$$9$$ = !1;
    $err$$2_options$$44$$ && $err$$2_options$$44$$.silent && ($silent$$9$$ = $err$$2_options$$44$$.silent);
    $oj$$1$$.$Model$.$_triggerError$($collection$$18$$, $silent$$9$$, $err$$2_options$$44$$, $status$$4$$, $error$$8$$, $xhr$$5$$);
    $err$$2_options$$44$$ = Error($status$$4$$);
    $err$$2_options$$44$$.xhr = $xhr$$5$$;
    $err$$2_options$$44$$.error = $error$$8$$;
    $err$$2_options$$44$$.collection = $collection$$18$$;
    $err$$2_options$$44$$.status = $status$$4$$;
    return $err$$2_options$$44$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getMaxLength$ = function $$oj$$1$$$$Collection$$$$_getMaxLength$$($start$$20$$, $count$$16$$) {
    var $len$$3$$ = this.$_getModelsLength$();
    return 0 === $len$$3$$ ? $start$$20$$ + $count$$16$$ : $start$$20$$ + $count$$16$$ > $len$$3$$ ? $len$$3$$ : $start$$20$$ + $count$$16$$;
  };
  $oj$$1$$.$Collection$.prototype.$isRangeLocal$ = function $$oj$$1$$$$Collection$$$$isRangeLocal$$($start$$21$$, $count$$17$$) {
    var $localRange$$ = this.$_getLocalRange$($start$$21$$, $count$$17$$);
    return 0 === this.$_getModelsLength$() ? 0 === $count$$17$$ : $start$$21$$ === $localRange$$.start && ($count$$17$$ === $localRange$$.count || $start$$21$$ + $count$$17$$ > this.$_getModelsLength$());
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.isRangeLocal", {$isRangeLocal$:$oj$$1$$.$Collection$.prototype.$isRangeLocal$});
  $oj$$1$$.$Collection$.prototype.$_getModelArray$ = function $$oj$$1$$$$Collection$$$$_getModelArray$$($start$$22$$, $count$$18$$) {
    for (var $retArr$$ = [], $models$$8$$ = this.$_getModels$(), $end$$6$$ = $start$$22$$ + $count$$18$$, $i$$49$$ = $start$$22$$;$i$$49$$ < $end$$6$$;$i$$49$$++) {
      $retArr$$.push($models$$8$$[$i$$49$$]);
    }
    return $retArr$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getLocalRange$ = function $$oj$$1$$$$Collection$$$$_getLocalRange$$($start$$23$$, $count$$19$$) {
    if (!this.$IsVirtual$()) {
      if (0 < this.$_getModelsLength$()) {
        if ($start$$23$$ + $count$$19$$ > this.$_getModelsLength$()) {
          var $c$$28_limit$$2$$ = this.$_getModelsLength$() - $start$$23$$;
          return{start:$start$$23$$, count:$c$$28_limit$$2$$, models:this.$_getModelArray$($start$$23$$, $c$$28_limit$$2$$)};
        }
        return{start:$start$$23$$, count:$count$$19$$, models:this.$_getModelArray$($start$$23$$, $count$$19$$)};
      }
      return{start:$start$$23$$, count:0, models:[]};
    }
    $c$$28_limit$$2$$ = this.$_getMaxLength$($start$$23$$, $count$$19$$);
    if (!this.$_hasTotalResults$() && $c$$28_limit$$2$$ < $start$$23$$ + $count$$19$$) {
      return{start:$start$$23$$, count:$c$$28_limit$$2$$ - $start$$23$$, models:this.$_getModelArray$($start$$23$$, $c$$28_limit$$2$$ - $start$$23$$)};
    }
    if (0 === $c$$28_limit$$2$$) {
      return{start:$start$$23$$, count:0, models:[]};
    }
    var $firstMissingModel$$ = this.$_getFirstMissingModel$($start$$23$$, $c$$28_limit$$2$$);
    if (-1 < $firstMissingModel$$) {
      return{start:$start$$23$$, count:$firstMissingModel$$ - $start$$23$$, models:this.$_getModelArray$($start$$23$$, $firstMissingModel$$ - $start$$23$$)};
    }
    $start$$23$$ > $c$$28_limit$$2$$ ? $count$$19$$ = 0 : $start$$23$$ + $count$$19$$ > $c$$28_limit$$2$$ && ($count$$19$$ = $c$$28_limit$$2$$ - $start$$23$$);
    return{start:$start$$23$$, count:$count$$19$$, models:this.$_getModelArray$($start$$23$$, $count$$19$$)};
  };
  $oj$$1$$.$Collection$.prototype.$_getFirstMissingModel$ = function $$oj$$1$$$$Collection$$$$_getFirstMissingModel$$($start$$24$$, $limit$$3$$) {
    for (var $i$$50$$ = $start$$24$$;$i$$50$$ < $limit$$3$$;$i$$50$$++) {
      if (void 0 === this.$_getModel$($i$$50$$)) {
        return $i$$50$$;
      }
    }
    return-1;
  };
  $oj$$1$$.$Collection$.prototype.fetch = function $$oj$$1$$$$Collection$$$fetch$($options$$45$$) {
    var $xhr$$6$$ = this.$_fetchInternal$($options$$45$$, -1, !1);
    this.$_addPromise$(function() {
      return Promise.resolve($xhr$$6$$);
    });
    return $xhr$$6$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.fetch", {fetch:$oj$$1$$.$Collection$.prototype.fetch});
  $oj$$1$$.$Collection$.prototype.$_fetchInternal$ = function $$oj$$1$$$$Collection$$$$_fetchInternal$$($options$$46$$, $placement$$1$$, $fillIn$$2$$) {
    function $doReset$$($collection$$19$$, $opt$$8$$, $fillIn$$3$$) {
      $collection$$19$$.$IsVirtual$() ? $fillIn$$3$$ || $collection$$19$$.$_resetModelsToFullLength$() : $opt$$8$$.add || $opt$$8$$.$useset$ || $collection$$19$$.reset(null, {silent:!0});
    }
    var $opt$$7$$ = $options$$46$$ || {}, $success$$8$$ = $opt$$7$$.success, $self$$19$$, $errFunc$$ = $opt$$7$$.error;
    $opt$$7$$.set && ($opt$$7$$.$useset$ = $opt$$7$$.set ? !0 : !1);
    void 0 === $opt$$7$$.parse && ($opt$$7$$.parse = !0);
    $self$$19$$ = this;
    $opt$$7$$.error = function $$opt$$7$$$error$($xhr$$7$$, $status$$5$$, $error$$9$$) {
      $oj$$1$$.$Model$.$_triggerError$($self$$19$$, !1, $options$$46$$, $status$$5$$, $error$$9$$, $xhr$$7$$);
      $errFunc$$ && $errFunc$$.call($oj$$1$$.$Model$.$GetContext$($options$$46$$, $self$$19$$), $xhr$$7$$, $status$$5$$, $error$$9$$);
    };
    $opt$$7$$.success = function $$opt$$7$$$success$($response$$5$$) {
      var $data$$34$$;
      try {
        $data$$34$$ = $self$$19$$.parse($response$$5$$, $options$$46$$);
      } catch ($e$$22$$) {
        $oj$$1$$.$Collection$.$_reportError$($self$$19$$, $e$$22$$, $opt$$7$$.error, $options$$46$$);
        return;
      }
      $self$$19$$.$_setPagingReturnValues$($response$$5$$, $options$$46$$, $data$$34$$, $fillIn$$2$$);
      var $dataList$$ = null;
      if ($opt$$7$$.add || $self$$19$$.model) {
        $doReset$$($self$$19$$, $opt$$7$$, $fillIn$$2$$);
        try {
          $manageLRU$$ = !1, -1 === $placement$$1$$ && ($manageLRU$$ = !0, $placement$$1$$ = $self$$19$$.$_getOffset$()), $dataList$$ = $self$$19$$.$_fillInCollectionWithParsedData$($data$$34$$, $placement$$1$$, $manageLRU$$, $opt$$7$$);
        } catch ($e$$23$$) {
          $oj$$1$$.$Collection$.$_reportError$($self$$19$$, $e$$23$$, $opt$$7$$.error, $options$$46$$);
          return;
        }
      } else {
        if (!$fillIn$$2$$) {
          if ($self$$19$$.$IsVirtual$()) {
            $doReset$$($self$$19$$, $opt$$7$$, $fillIn$$2$$);
            var $manageLRU$$ = !1;
            -1 === $placement$$1$$ && ($manageLRU$$ = !0, $placement$$1$$ = $self$$19$$.$_getOffset$());
            $dataList$$ = $self$$19$$.$_putDataIntoCollection$($data$$34$$, $placement$$1$$, $manageLRU$$);
          } else {
            $opt$$7$$.$useset$ ? $self$$19$$.$_setInternal$($data$$34$$, !1, $opt$$7$$, !1) : $self$$19$$.reset($data$$34$$, {silent:!0});
          }
        }
      }
      $self$$19$$.$IsVirtual$() && $dataList$$ && ($self$$19$$.lastFetchCount = $dataList$$.length);
      $self$$19$$.$TriggerInternal$($opt$$7$$.silent ? !0 : !1, $oj$$1$$.$Events$.$EventType$.SYNC, $self$$19$$, $response$$5$$, $opt$$7$$);
      $success$$8$$ && $success$$8$$.call($oj$$1$$.$Model$.$GetContext$($options$$46$$, $self$$19$$), $self$$19$$, $response$$5$$, $opt$$7$$);
    };
    return this.$_fetchCall$($opt$$7$$);
  };
  $oj$$1$$.$Collection$.prototype.$_putDataIntoCollection$ = function $$oj$$1$$$$Collection$$$$_putDataIntoCollection$$($addOpt_data$$35$$, $insertPos_placement$$2$$, $manageLRU$$1_virtual$$) {
    var $dataList$$1$$;
    if ($addOpt_data$$35$$) {
      $dataList$$1$$ = $addOpt_data$$35$$ instanceof Array ? $addOpt_data$$35$$ : [$addOpt_data$$35$$];
      $addOpt_data$$35$$ = {};
      $manageLRU$$1_virtual$$ && this.$_manageLRU$($dataList$$1$$.length);
      $manageLRU$$1_virtual$$ = this.$IsVirtual$();
      for (var $prevItem$$ = null, $i$$51$$ = 0;$i$$51$$ < $dataList$$1$$.length;$i$$51$$ += 1) {
        $manageLRU$$1_virtual$$ && ($addOpt_data$$35$$ = {at:$insertPos_placement$$2$$}, $prevItem$$ = this.$_atInternal$($insertPos_placement$$2$$, null, !0, !1)), $addOpt_data$$35$$.silent = !0, this.$_addInternal$($dataList$$1$$[$i$$51$$], $addOpt_data$$35$$, !0, !1), this.$_atInternal$($insertPos_placement$$2$$, null, !0, !1) !== $prevItem$$ && $insertPos_placement$$2$$++;
      }
    }
    return $dataList$$1$$;
  };
  $oj$$1$$.$Collection$.prototype.$_fillInCollectionWithParsedData$ = function $$oj$$1$$$$Collection$$$$_fillInCollectionWithParsedData$$($addOpt$$1_data$$36$$, $parsedModel_placement$$3$$, $manageLRU$$2_virtual$$1$$, $opt$$9_prevItem$$1$$) {
    $opt$$9_prevItem$$1$$ = $opt$$9_prevItem$$1$$ || {};
    var $parse$$1$$ = $opt$$9_prevItem$$1$$.parse, $modelInstance$$ = $oj$$1$$.$Collection$.$_createModel$(this);
    if ($addOpt$$1_data$$36$$) {
      var $dataList$$2$$ = $addOpt$$1_data$$36$$ instanceof Array ? $addOpt$$1_data$$36$$ : [$addOpt$$1_data$$36$$];
      $addOpt$$1_data$$36$$ = {};
      $manageLRU$$2_virtual$$1$$ && this.$_manageLRU$($dataList$$2$$.length);
      $manageLRU$$2_virtual$$1$$ = this.$IsVirtual$();
      if ($opt$$9_prevItem$$1$$.$useset$ && !$manageLRU$$2_virtual$$1$$) {
        for (var $i$$52$$ = 0;$i$$52$$ < $dataList$$2$$.length;$i$$52$$ += 1) {
          $parsedModel_placement$$3$$ = $modelInstance$$ && $parse$$1$$ ? $modelInstance$$.parse($dataList$$2$$[$i$$52$$]) : $dataList$$2$$[$i$$52$$], $dataList$$2$$[$i$$52$$] = $parsedModel_placement$$3$$;
        }
        this.$_setInternal$($dataList$$2$$, !1, $opt$$9_prevItem$$1$$, !1);
      } else {
        $opt$$9_prevItem$$1$$ = null;
        for (var $insertPos$$1$$ = $parsedModel_placement$$3$$, $i$$52$$ = 0;$i$$52$$ < $dataList$$2$$.length;$i$$52$$ += 1) {
          $parsedModel_placement$$3$$ = $modelInstance$$ && $parse$$1$$ ? $modelInstance$$.parse($dataList$$2$$[$i$$52$$]) : $dataList$$2$$[$i$$52$$], $manageLRU$$2_virtual$$1$$ && ($addOpt$$1_data$$36$$ = {at:$insertPos$$1$$}, $opt$$9_prevItem$$1$$ = this.$_atInternal$($insertPos$$1$$, $addOpt$$1_data$$36$$, !0, !1)), $addOpt$$1_data$$36$$.silent = !0, this.$_addInternal$($parsedModel_placement$$3$$, $addOpt$$1_data$$36$$, !0, !1), this.$_atInternal$($insertPos$$1$$, null, !0, !1) !== $opt$$9_prevItem$$1$$ && 
          $insertPos$$1$$++;
        }
      }
    }
    return $dataList$$2$$;
  };
  $oj$$1$$.$Collection$.$_reportError$ = function $$oj$$1$$$$Collection$$$_reportError$$($collection$$20$$, $e$$24$$, $errorFunc$$, $options$$47$$) {
    $oj$$1$$.$Logger$.error($e$$24$$.toString());
    $errorFunc$$ && $errorFunc$$.call($oj$$1$$.$Model$.$GetContext$($options$$47$$, $collection$$20$$), $collection$$20$$, $e$$24$$, $options$$47$$);
  };
  $oj$$1$$.$Collection$.prototype.$_fetchOnly$ = function $$oj$$1$$$$Collection$$$$_fetchOnly$$($options$$48$$) {
    var $opt$$10$$ = $options$$48$$ || {}, $success$$9$$ = $opt$$10$$.success, $parsedModel$$1$$, $self$$20$$;
    void 0 === $opt$$10$$.parse && ($opt$$10$$.parse = !0);
    $self$$20$$ = this;
    $opt$$10$$.success = function $$opt$$10$$$success$($response$$6$$) {
      var $data$$37_i$$53$$, $modelInstance$$1$$, $dataList$$3$$ = null, $fetchedModels$$ = [];
      try {
        $data$$37_i$$53$$ = $self$$20$$.parse($response$$6$$, $options$$48$$);
      } catch ($e$$25$$) {
        $oj$$1$$.$Collection$.$_reportError$($self$$20$$, $e$$25$$, $opt$$10$$.error, $options$$48$$);
        return;
      }
      if ($opt$$10$$.add || $self$$20$$.model) {
        if ($modelInstance$$1$$ = $oj$$1$$.$Collection$.$_createModel$($self$$20$$), $data$$37_i$$53$$) {
          for ($dataList$$3$$ = $data$$37_i$$53$$ instanceof Array ? $data$$37_i$$53$$ : [$data$$37_i$$53$$], $data$$37_i$$53$$ = 0;$data$$37_i$$53$$ < $dataList$$3$$.length;$data$$37_i$$53$$ += 1) {
            if ($modelInstance$$1$$ && $opt$$10$$.parse) {
              try {
                $parsedModel$$1$$ = $modelInstance$$1$$.parse($dataList$$3$$[$data$$37_i$$53$$]);
              } catch ($e$$26$$) {
                $oj$$1$$.$Collection$.$_reportError$($self$$20$$, $e$$26$$, $opt$$10$$.error, $options$$48$$);
                return;
              }
            } else {
              $parsedModel$$1$$ = $dataList$$3$$[$data$$37_i$$53$$];
            }
            $fetchedModels$$.push($self$$20$$.$_newModel$($parsedModel$$1$$));
          }
        }
      }
      $self$$20$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.SYNC, $self$$20$$, $response$$6$$, $opt$$10$$);
      $success$$9$$ && $success$$9$$.call($oj$$1$$.$Model$.$GetContext$($options$$48$$, $self$$20$$), $self$$20$$, $fetchedModels$$, $opt$$10$$);
    };
    this.$_fetchCall$($opt$$10$$);
  };
  $oj$$1$$.$Collection$.prototype.$_fetchCall$ = function $$oj$$1$$$$Collection$$$$_fetchCall$$($opt$$11$$) {
    try {
      return $oj$$1$$.$Model$.$_internalSync$("read", this, $opt$$11$$);
    } catch ($e$$27$$) {
      throw $oj$$1$$.$Model$.$_triggerError$(this, !1, $opt$$11$$, null, $e$$27$$, null), $e$$27$$;
    }
  };
  $oj$$1$$.$Collection$.prototype.$_resetModelsToFullLength$ = function $$oj$$1$$$$Collection$$$$_resetModelsToFullLength$$() {
    var $totalResults$$1$$ = this.totalResults;
    void 0 !== $totalResults$$1$$ && this.$_getModelsLength$() !== $totalResults$$1$$ && (this.$_setModels$(Array($totalResults$$1$$), !0), this.$_resetLRU$(), this.$_setLength$());
  };
  $oj$$1$$.$Collection$.prototype.$_getFetchSize$ = function $$oj$$1$$$$Collection$$$$_getFetchSize$$($options$$49$$) {
    $options$$49$$ = $options$$49$$ || {};
    return $options$$49$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] || this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$];
  };
  $oj$$1$$.$Collection$.prototype.$IsVirtual$ = function $$oj$$1$$$$Collection$$$$IsVirtual$$() {
    return-1 < this.$_getFetchSize$(null);
  };
  $oj$$1$$.$Collection$.prototype.$_getReturnProperty$ = function $$oj$$1$$$$Collection$$$$_getReturnProperty$$($customObj_value$$58$$, $response$$7$$, $property$$4$$, $optionValue$$, $defaultValue$$1$$) {
    $customObj_value$$58$$ = parseInt($oj$$1$$.$Collection$.$_getProp$($customObj_value$$58$$, $response$$7$$, $property$$4$$), 10);
    return void 0 === $customObj_value$$58$$ || null === $customObj_value$$58$$ || isNaN($customObj_value$$58$$) ? $optionValue$$ ? $optionValue$$ : $defaultValue$$1$$ : $customObj_value$$58$$;
  };
  $oj$$1$$.$Collection$.prototype.$_cleanTotalResults$ = function $$oj$$1$$$$Collection$$$$_cleanTotalResults$$($totalResults$$2$$) {
    return-1 === $totalResults$$2$$ ? void 0 : $totalResults$$2$$;
  };
  $oj$$1$$.$Collection$.prototype.$_setPagingReturnValues$ = function $$oj$$1$$$$Collection$$$$_setPagingReturnValues$$($response$$8$$, $options$$50$$, $data$$38$$, $fillIn$$4$$) {
    var $customObj$$1$$ = {};
    this.customPagingOptions && (($customObj$$1$$ = this.customPagingOptions.call(this, $response$$8$$)) || ($customObj$$1$$ = {}));
    $options$$50$$ = $options$$50$$ || {};
    this.lastFetchSize = this.$_getReturnProperty$($customObj$$1$$, $response$$8$$, "limit", $options$$50$$.fetchSize, this.fetchSize);
    this.offset = this.$_getReturnProperty$($customObj$$1$$, $response$$8$$, "offset", $options$$50$$.startIndex, 0);
    this.lastFetchCount = this.$_getReturnProperty$($customObj$$1$$, $response$$8$$, "count", this.lastFetchCount, this.lastFetchCount);
    this.totalResults = this.$_cleanTotalResults$(this.$_getReturnProperty$($customObj$$1$$, $response$$8$$, "totalResults", this.totalResults, this.totalResults));
    this.hasMore = this.$_getHasMore$($oj$$1$$.$Collection$.$_getProp$($customObj$$1$$, $response$$8$$, "hasMore"), this.offset, this.lastFetchSize, this.totalResults);
    $fillIn$$4$$ || (this.totalResults = this.$_adjustTotalResults$(this.$_cleanTotalResults$(parseInt($oj$$1$$.$Collection$.$_getProp$($customObj$$1$$, $response$$8$$, "totalResults"), 10)), this.hasMore, this.offset, parseInt($oj$$1$$.$Collection$.$_getProp$($customObj$$1$$, $response$$8$$, "count"), 10), $data$$38$$ && Array.isArray($data$$38$$) ? $data$$38$$.length : 0));
    !this.$IsVirtual$() && this.totalResults && this.totalResults !== this.lastFetchCount && this.lastFetchSize && this.$setFetchSize$(this.lastFetchSize);
  };
  $oj$$1$$.$Collection$.prototype.$_adjustTotalResults$ = function $$oj$$1$$$$Collection$$$$_adjustTotalResults$$($totalResultsReturned$$1$$, $hasMore$$, $offset$$14$$, $lastFetchCount$$, $dataLength$$) {
    return!$hasMore$$ && isNaN($totalResultsReturned$$1$$) ? (isNaN($lastFetchCount$$) ? $dataLength$$ : $lastFetchCount$$) + $offset$$14$$ : this.totalResults;
  };
  $oj$$1$$.$Collection$.prototype.$_getHasMore$ = function $$oj$$1$$$$Collection$$$$_getHasMore$$($hasMore$$1$$, $offset$$15$$, $lastFetchSize$$, $totalResults$$3$$) {
    return $oj$$1$$.$Collection$.$_defined$($hasMore$$1$$) ? $hasMore$$1$$ : void 0 === $totalResults$$3$$ || null === $totalResults$$3$$ ? !0 : $offset$$15$$ + $lastFetchSize$$ > $totalResults$$3$$ ? !1 : !0;
  };
  $oj$$1$$.$Collection$.$_getProp$ = function $$oj$$1$$$$Collection$$$_getProp$$($custom$$, $response$$9$$, $prop$$21$$) {
    return $custom$$.hasOwnProperty($prop$$21$$) ? $custom$$[$prop$$21$$] : $response$$9$$ ? $response$$9$$[$prop$$21$$] : void 0;
  };
  $oj$$1$$.$Collection$.prototype.$_getOffset$ = function $$oj$$1$$$$Collection$$$$_getOffset$$() {
    return $oj$$1$$.$Collection$.$_defined$(this.offset) ? this.offset : 0;
  };
  $oj$$1$$.$Collection$.prototype.create = function $$oj$$1$$$$Collection$$$create$($attributes$$, $options$$51$$) {
    function $doSave$$($newModel$$6$$, $opt$$12$$) {
      $newModel$$6$$.save($attributes$$ instanceof $oj$$1$$.$Model$ ? null : $attributes$$, $opt$$12$$);
      return $newModel$$6$$;
    }
    function $doAdd$$1$$($newModel$$7$$, $addOpts$$1$$) {
      if ($options$$51$$.wait) {
        if ($self$$21$$.$IsVirtual$() || $deferred$$13$$) {
          return $self$$21$$.$_addPromise$(function() {
            return Promise.resolve(void 0);
          });
        }
      } else {
        return $self$$21$$.add($newModel$$7$$, $addOpts$$1$$);
      }
    }
    var $self$$21$$ = this;
    $options$$51$$ = $options$$51$$ || {};
    var $deferred$$13$$ = this.$_getDeferred$($options$$51$$), $newModel$$5$$ = this.$_newModel$($attributes$$, $options$$51$$, !1), $callback$$71$$ = $options$$51$$.success, $context$$14$$ = $options$$51$$.context;
    $options$$51$$.context = this;
    $options$$51$$.success = function $$options$$51$$$success$($model$$25$$, $resp$$3$$, $successOpts$$) {
      $successOpts$$.xhr && ($options$$51$$.xhr = $successOpts$$.xhr);
      $options$$51$$.wait && $self$$21$$.add($newModel$$5$$, $options$$51$$);
      $callback$$71$$ && $callback$$71$$.call(null != $context$$14$$ ? $context$$14$$ : $self$$21$$, $model$$25$$, $resp$$3$$, $options$$51$$);
    };
    if (null == $newModel$$5$$) {
      return!1;
    }
    $options$$51$$.forceNew = null != $newModel$$5$$.$GetId$();
    var $addOpts$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$51$$);
    $newModel$$5$$.$SetCollection$(this);
    if ($deferred$$13$$ || this.$IsVirtual$()) {
      return new Promise(function($resolve$$15$$) {
        $addOpts$$.merge = !0;
        $addOpts$$.deferred = !0;
        $doAdd$$1$$($newModel$$5$$, $addOpts$$).then(function() {
          $options$$51$$.success = function $$options$$51$$$success$($model$$27$$, $resp$$4$$, $successOpts$$1$$) {
            $successOpts$$1$$.xhr && ($options$$51$$.xhr = $successOpts$$1$$.xhr);
            $options$$51$$.wait ? ($self$$21$$.$IsVirtual$() && ($addOpts$$.force = !0), $self$$21$$.add($newModel$$5$$, $addOpts$$).then(function() {
              $callback$$71$$ && $callback$$71$$.call(null != $context$$14$$ ? $context$$14$$ : $self$$21$$, $model$$27$$, $resp$$4$$, $options$$51$$);
              $resolve$$15$$($model$$27$$);
            })) : ($callback$$71$$ && $callback$$71$$.call(null != $context$$14$$ ? $context$$14$$ : $self$$21$$, $model$$27$$, $resp$$4$$, $options$$51$$), $resolve$$15$$($model$$27$$));
          };
          var $model$$26$$ = $doSave$$($newModel$$5$$, $options$$51$$);
          $model$$26$$ || $resolve$$15$$($model$$26$$);
        });
      });
    }
    $addOpts$$.merge = !0;
    $doAdd$$1$$($newModel$$5$$, $addOpts$$);
    return $doSave$$($newModel$$5$$, $options$$51$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.create", {create:$oj$$1$$.$Collection$.prototype.create});
  $oj$$1$$.$Collection$.prototype.$pluck$ = function $$oj$$1$$$$Collection$$$$pluck$$($attr$$8$$) {
    var $arr$$16$$ = [], $i$$54$$;
    this.$_throwErrIfVirtual$("pluck");
    for ($i$$54$$ = 0;$i$$54$$ < this.$_getLength$();$i$$54$$ += 1) {
      $arr$$16$$.push(this.at($i$$54$$).get($attr$$8$$));
    }
    return $arr$$16$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.pluck", {$pluck$:$oj$$1$$.$Collection$.prototype.$pluck$});
  $oj$$1$$.$Collection$.prototype.$where$ = function $$oj$$1$$$$Collection$$$$where$$($attrs$$5$$, $options$$52$$) {
    return this.$_handlePromise$(this.$_whereInternal$($attrs$$5$$, $options$$52$$));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.where", {$where$:$oj$$1$$.$Collection$.prototype.$where$});
  $oj$$1$$.$Collection$.prototype.$_whereInternal$ = function $$oj$$1$$$$Collection$$$$_whereInternal$$($attrs$$6$$, $options$$53$$) {
    $options$$53$$ = $options$$53$$ || {};
    var $deferred$$14$$ = this.$_getDeferred$($options$$53$$), $self$$22$$ = this;
    if (this.$IsVirtual$()) {
      return new Promise(function($resolve$$16$$, $reject$$16$$) {
        $self$$22$$.$_fetchOnly$({query:$attrs$$6$$, all:!0, success:function($collection$$22$$, $fetchedModels$$1$$) {
          $resolve$$16$$($fetchedModels$$1$$);
        }, error:function($xhr$$10$$, $status$$8$$, $error$$10$$) {
          $reject$$16$$($oj$$1$$.$Collection$.$_createRejectionError$($xhr$$10$$, $status$$8$$, $error$$10$$, $self$$22$$, $options$$53$$));
        }});
      });
    }
    var $arr$$17$$ = [], $i$$55$$, $m$$7$$;
    for ($i$$55$$ = 0;$i$$55$$ < this.$_getLength$();$i$$55$$ += 1) {
      $m$$7$$ = this.at($i$$55$$), $m$$7$$.$Contains$($attrs$$6$$) && $arr$$17$$.push($m$$7$$);
    }
    return $deferred$$14$$ ? new Promise(function($resolve$$17$$) {
      $resolve$$17$$($arr$$17$$);
    }) : $arr$$17$$;
  };
  $oj$$1$$.$Collection$.prototype.$whereToCollection$ = function $$oj$$1$$$$Collection$$$$whereToCollection$$($attrs$$7$$, $options$$55$$) {
    $options$$55$$ = $options$$55$$ || {};
    var $deferred$$15_models$$9_newCollection$$ = this.$_getDeferred$($options$$55$$), $self$$23$$ = this;
    if (this.$IsVirtual$() || $deferred$$15_models$$9_newCollection$$) {
      return $self$$23$$.$_addPromise$(function() {
        return new Promise(function($resolve$$18$$, $reject$$18$$) {
          return $self$$23$$.$_whereInternal$($attrs$$7$$, $options$$55$$).then(function($collection$$23_models$$10$$) {
            $collection$$23_models$$10$$ = $self$$23$$.$_makeNewCollection$($collection$$23_models$$10$$);
            $resolve$$18$$($collection$$23_models$$10$$);
          }, function($err$$3$$) {
            $reject$$18$$($err$$3$$);
          });
        });
      });
    }
    $deferred$$15_models$$9_newCollection$$ = this.$_whereInternal$($attrs$$7$$, $options$$55$$);
    $deferred$$15_models$$9_newCollection$$ = this.$_makeNewCollection$($deferred$$15_models$$9_newCollection$$);
    $deferred$$15_models$$9_newCollection$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = -1;
    $deferred$$15_models$$9_newCollection$$.$_setLength$();
    return $deferred$$15_models$$9_newCollection$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.whereToCollection", {$whereToCollection$:$oj$$1$$.$Collection$.prototype.$whereToCollection$});
  $oj$$1$$.$Collection$.prototype.$_makeNewCollection$ = function $$oj$$1$$$$Collection$$$$_makeNewCollection$$($models$$11$$) {
    var $collection$$24$$ = this.$_cloneInternal$(!1);
    $collection$$24$$.$_setModels$($models$$11$$, !1);
    $collection$$24$$.$_resetLRU$();
    $collection$$24$$.$_setLength$();
    return $collection$$24$$;
  };
  $oj$$1$$.$Collection$.prototype.$_throwErrIfVirtual$ = function $$oj$$1$$$$Collection$$$$_throwErrIfVirtual$$($func$$4$$) {
    if (this.$IsVirtual$()) {
      throw Error($func$$4$$ + " not valid on a virtual Collection");
    }
  };
  $oj$$1$$.$Collection$.prototype.map = function $$oj$$1$$$$Collection$$$map$($iterator$$, $context$$15$$) {
    var $retArr$$1$$ = [], $value$$59$$;
    this.$_throwErrIfVirtual$("map");
    this.$_getModels$().forEach(function($model$$28$$) {
      $value$$59$$ = $iterator$$.call($context$$15$$ || this, $model$$28$$);
      $retArr$$1$$.push($value$$59$$);
    });
    return $retArr$$1$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.map", {map:$oj$$1$$.$Collection$.prototype.map});
  $oj$$1$$.$Collection$.prototype.each = function $$oj$$1$$$$Collection$$$each$($iterator$$1$$, $context$$16$$) {
    this.$_throwErrIfVirtual$("each");
    this.$_getModels$().forEach($iterator$$1$$, $context$$16$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.each", {each:$oj$$1$$.$Collection$.prototype.each});
  $oj$$1$$.$Collection$.prototype.size = function $$oj$$1$$$$Collection$$$size$() {
    return this.$_getLength$();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.size", {size:$oj$$1$$.$Collection$.prototype.size});
  $oj$$1$$.$Collection$.prototype.$sortBy$ = function $$oj$$1$$$$Collection$$$$sortBy$$($iterator$$2$$, $context$$17$$) {
    var $retArr$$2$$ = [], $self$$24$$;
    this.$_throwErrIfVirtual$("sortBy");
    this.$_getModels$().forEach(function($model$$29$$) {
      $retArr$$2$$.push($model$$29$$);
    });
    $self$$24$$ = this;
    $retArr$$2$$.sort(function($a$$96$$, $b$$53$$) {
      var $keyA$$3$$, $keyB$$3$$;
      if ($$$$1$$.isFunction($iterator$$2$$)) {
        return $keyA$$3$$ = $iterator$$2$$.call($context$$17$$ || $self$$24$$, $a$$96$$), $keyB$$3$$ = $iterator$$2$$.call($context$$17$$ || $self$$24$$, $b$$53$$), $oj$$1$$.$Collection$.$_compareKeys$($keyA$$3$$, $keyB$$3$$, $self$$24$$.sortDirection);
      }
      $keyA$$3$$ = $a$$96$$.get($iterator$$2$$);
      $keyB$$3$$ = $b$$53$$.get($iterator$$2$$);
      return $oj$$1$$.$Collection$.$_compareKeys$($keyA$$3$$, $keyB$$3$$, $self$$24$$.sortDirection);
    });
    return $retArr$$2$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortBy", {$sortBy$:$oj$$1$$.$Collection$.prototype.$sortBy$});
  $oj$$1$$.$Collection$.prototype.$groupBy$ = function $$oj$$1$$$$Collection$$$$groupBy$$($iterator$$3$$, $context$$18$$) {
    var $retObj$$2$$ = {}, $groupVal$$;
    this.$_throwErrIfVirtual$("groupBy");
    this.$_getModels$().forEach(function($model$$30$$) {
      $groupVal$$ = $$$$1$$.isFunction($iterator$$3$$) ? $iterator$$3$$.call($context$$18$$ || this, $model$$30$$) : $model$$30$$.get($iterator$$3$$);
      void 0 === $retObj$$2$$[$groupVal$$] && ($retObj$$2$$[$groupVal$$] = []);
      $retObj$$2$$[$groupVal$$].push($model$$30$$);
    }, this);
    return $retObj$$2$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.groupBy", {$groupBy$:$oj$$1$$.$Collection$.prototype.$groupBy$});
  $oj$$1$$.$Collection$.prototype.$indexBy$ = function $$oj$$1$$$$Collection$$$$indexBy$$($iterator$$4$$, $context$$19$$) {
    var $retObj$$3$$ = {}, $index$$69$$;
    this.$_throwErrIfVirtual$("indexBy");
    this.$_getModels$().forEach(function($model$$31$$) {
      $index$$69$$ = $$$$1$$.isFunction($iterator$$4$$) ? $iterator$$4$$.call($context$$19$$ || this, $model$$31$$) : $model$$31$$.get($iterator$$4$$);
      $retObj$$3$$[$index$$69$$] = $model$$31$$;
    }, this);
    return $retObj$$3$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.indexBy", {$indexBy$:$oj$$1$$.$Collection$.prototype.$indexBy$});
  $oj$$1$$.$Collection$.prototype.min = function $$oj$$1$$$$Collection$$$min$($iterator$$5$$, $context$$20$$) {
    var $minModel$$ = {}, $minModelValue$$, $currValue$$;
    this.$_throwErrIfVirtual$("min");
    if (0 == this.$_getModelsLength$()) {
      return null;
    }
    $minModel$$ = this.$_getModel$(0);
    $minModelValue$$ = $iterator$$5$$.call($context$$20$$ || this, this.$_getModel$(0));
    this.$_getModels$().forEach(function($model$$32$$, $i$$56$$) {
      1 <= $i$$56$$ && ($currValue$$ = $iterator$$5$$.call($context$$20$$ || this, $model$$32$$), $currValue$$ < $minModelValue$$ && ($minModel$$ = $model$$32$$, $minModelValue$$ = $currValue$$));
    }, this);
    return $minModel$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.min", {min:$oj$$1$$.$Collection$.prototype.min});
  $oj$$1$$.$Collection$.prototype.max = function $$oj$$1$$$$Collection$$$max$($iterator$$6$$, $context$$21$$) {
    var $maxModel$$ = {}, $maxModelValue$$, $currValue$$1$$;
    this.$_throwErrIfVirtual$("max");
    if (0 == this.$_getModelsLength$()) {
      return null;
    }
    $maxModel$$ = this.$_getModel$(0);
    $maxModelValue$$ = $iterator$$6$$.call($context$$21$$, this.$_getModel$(0));
    this.$_getModels$().forEach(function($model$$33$$, $i$$57$$) {
      1 <= $i$$57$$ && ($currValue$$1$$ = $iterator$$6$$.call($context$$21$$ || this, $model$$33$$), $currValue$$1$$ > $maxModelValue$$ && ($maxModel$$ = $model$$33$$, $maxModelValue$$ = $currValue$$1$$));
    }, this);
    return $maxModel$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.max", {max:$oj$$1$$.$Collection$.prototype.max});
  $oj$$1$$.$Collection$.prototype.filter = function $$oj$$1$$$$Collection$$$filter$($iterator$$7$$, $context$$22$$) {
    var $retArr$$3$$ = [];
    this.$_throwErrIfVirtual$("filter");
    this.$_getModels$().forEach(function($model$$34$$) {
      $iterator$$7$$.call($context$$22$$ || this, $model$$34$$) && $retArr$$3$$.push($model$$34$$);
    });
    return $retArr$$3$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.filter", {filter:$oj$$1$$.$Collection$.prototype.filter});
  $oj$$1$$.$Collection$.prototype.$without$ = function $$oj$$1$$$$Collection$$$$without$$($var_args$$46$$) {
    var $retArr$$4$$ = [], $j$$2$$, $id$$7$$, $cid$$4$$, $add$$;
    this.$_throwErrIfVirtual$("without");
    for (var $model$$35$$, $i$$58$$ = 0;$i$$58$$ < this.$_getModels$().length;$i$$58$$++) {
      $add$$ = !0;
      $model$$35$$ = this.$_getModel$($i$$58$$);
      for ($j$$2$$ = 0;$j$$2$$ < arguments.length;$j$$2$$ += 1) {
        if ($cid$$4$$ = arguments[$j$$2$$].$GetCid$(), $id$$7$$ = arguments[$j$$2$$].$GetId$(), $model$$35$$.$Match$($id$$7$$, $cid$$4$$)) {
          $add$$ = !1;
          break;
        }
      }
      $add$$ && $retArr$$4$$.push($model$$35$$);
    }
    return $retArr$$4$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.without", {$without$:$oj$$1$$.$Collection$.prototype.$without$});
  $oj$$1$$.$Collection$.prototype.$difference$ = function $$oj$$1$$$$Collection$$$$difference$$($var_args$$47$$) {
    var $retArr$$5$$ = [], $j$$3$$, $k$$3$$, $id$$8$$, $cid$$5$$, $add$$1$$;
    this.$_throwErrIfVirtual$("difference");
    for (var $model$$36$$, $i$$59$$ = 0;$i$$59$$ < this.$_getModels$().length;$i$$59$$++) {
      $add$$1$$ = !0;
      $model$$36$$ = this.$_getModel$($i$$59$$);
      for ($j$$3$$ = 0;$j$$3$$ < arguments.length;$j$$3$$ += 1) {
        for ($k$$3$$ = 0;$k$$3$$ < arguments[$j$$3$$].length;$k$$3$$++) {
          if ($cid$$5$$ = arguments[$j$$3$$][$k$$3$$].$GetCid$(), $id$$8$$ = arguments[$j$$3$$][$k$$3$$].$GetId$(), $model$$36$$.$Match$($id$$8$$, $cid$$5$$)) {
            $add$$1$$ = !1;
            break;
          }
        }
        if (!$add$$1$$) {
          break;
        }
      }
      $add$$1$$ && $retArr$$5$$.push($model$$36$$);
    }
    return $retArr$$5$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.difference", {$difference$:$oj$$1$$.$Collection$.prototype.$difference$});
  $oj$$1$$.$Collection$.prototype.$isEmpty$ = function $$oj$$1$$$$Collection$$$$isEmpty$$() {
    return 0 === this.$_getLength$();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.isEmpty", {$isEmpty$:$oj$$1$$.$Collection$.prototype.$isEmpty$});
  $oj$$1$$.$Collection$.prototype.$any$ = function $$oj$$1$$$$Collection$$$$any$$($iterator$$8$$, $context$$23$$) {
    this.$_throwErrIfVirtual$("any");
    for (var $model$$37$$, $i$$60$$ = 0;$i$$60$$ < this.$_getModelsLength$();$i$$60$$ += 1) {
      if ($model$$37$$ = this.$_getModel$($i$$60$$), $iterator$$8$$.call($context$$23$$ || this, $model$$37$$)) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.any", {$any$:$oj$$1$$.$Collection$.prototype.$any$});
  $oj$$1$$.$Collection$.prototype.$findWhere$ = function $$oj$$1$$$$Collection$$$$findWhere$$($attrs$$8$$, $options$$56$$) {
    var $arr$$18_deferred$$16$$ = this.$_getDeferred$($options$$56$$), $self$$25$$ = this;
    if (this.$IsVirtual$() || $arr$$18_deferred$$16$$) {
      return this.$_addPromise$(function() {
        return new Promise(function($resolve$$19$$) {
          $self$$25$$.$_whereInternal$($attrs$$8$$, $options$$56$$).then(function($modelList$$1$$) {
            $modelList$$1$$ && 0 < $modelList$$1$$.length && $resolve$$19$$($modelList$$1$$[0]);
            $resolve$$19$$(null);
          });
        });
      });
    }
    $arr$$18_deferred$$16$$ = this.$_whereInternal$($attrs$$8$$, $options$$56$$);
    return 0 < $arr$$18_deferred$$16$$.length ? $arr$$18_deferred$$16$$[0] : null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.findWhere", {$findWhere$:$oj$$1$$.$Collection$.prototype.$findWhere$});
  $oj$$1$$.$Collection$.prototype.slice = function $$oj$$1$$$$Collection$$$slice$($start$$25$$, $end$$7$$, $options$$57_ret$$1$$) {
    var $deferred$$17_i$$61$$ = this.$_getDeferred$($options$$57_ret$$1$$);
    $options$$57_ret$$1$$ = [];
    if (void 0 === $end$$7$$) {
      if (this.$IsVirtual$() && !this.$_hasTotalResults$()) {
        throw Error("End must be set for virtual collections with no totalResults");
      }
      $end$$7$$ = this.$_getModelsLength$();
    }
    if ($deferred$$17_i$$61$$ || this.$IsVirtual$()) {
      var $self$$26$$ = this;
      return this.$_addPromise$(function() {
        return $self$$26$$.$IterativeAt$($start$$25$$, $end$$7$$);
      });
    }
    for ($deferred$$17_i$$61$$ = $start$$25$$;$deferred$$17_i$$61$$ < $end$$7$$;$deferred$$17_i$$61$$ += 1) {
      $options$$57_ret$$1$$.push(this.$_getModel$($deferred$$17_i$$61$$));
    }
    return $options$$57_ret$$1$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.slice", {slice:$oj$$1$$.$Collection$.prototype.slice});
  $oj$$1$$.$Collection$.prototype.set = function $$oj$$1$$$$Collection$$$set$($models$$12$$, $options$$58$$) {
    return this.$_setInternal$($models$$12$$, !0, $options$$58$$, this.$_getDeferred$($options$$58$$) || this.$IsVirtual$());
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.set", {set:$oj$$1$$.$Collection$.prototype.set});
  $oj$$1$$.$Collection$.$_removeAfterSet$ = function $$oj$$1$$$$Collection$$$_removeAfterSet$$($collection$$25$$, $models$$13$$, $i$$62_remove$$, $foundModels$$, $options$$59$$) {
    if ($i$$62_remove$$) {
      for ($i$$62_remove$$ = $models$$13$$.length - 1;0 <= $i$$62_remove$$;$i$$62_remove$$ -= 1) {
        -1 == $foundModels$$.indexOf($i$$62_remove$$) && $collection$$25$$.$_removeInternal$($models$$13$$[$i$$62_remove$$], $i$$62_remove$$, $options$$59$$);
      }
    }
  };
  $oj$$1$$.$Collection$.prototype.$_swapModels$ = function $$oj$$1$$$$Collection$$$$_swapModels$$($oldIndex$$, $newIndex$$, $len$$4_oldModel$$1_remove$$1$$, $add$$2_newModel$$8$$) {
    if (this.$_hasComparator$() || !$len$$4_oldModel$$1_remove$$1$$ || !$add$$2_newModel$$8$$) {
      return{index:$oldIndex$$, $swapped$:!1};
    }
    $len$$4_oldModel$$1_remove$$1$$ = this.$_getModelsLength$();
    if ($oldIndex$$ >= $len$$4_oldModel$$1_remove$$1$$ || $newIndex$$ >= $len$$4_oldModel$$1_remove$$1$$) {
      return{index:$oldIndex$$, $swapped$:!1};
    }
    $len$$4_oldModel$$1_remove$$1$$ = this.$_getModel$($oldIndex$$);
    $add$$2_newModel$$8$$ = this.$_getModel$($newIndex$$);
    this.$_setModel$($oldIndex$$, $add$$2_newModel$$8$$);
    $add$$2_newModel$$8$$.$SetIndex$($oldIndex$$);
    this.$_setModel$($newIndex$$, $len$$4_oldModel$$1_remove$$1$$);
    $len$$4_oldModel$$1_remove$$1$$.$SetIndex$($newIndex$$);
    return{index:$newIndex$$, $swapped$:$newIndex$$ !== $oldIndex$$};
  };
  $oj$$1$$.$Collection$.prototype.$_setInternal$ = function $$oj$$1$$$$Collection$$$$_setInternal$$($i$$63_models$$14$$, $parse$$2_swapped$$, $options$$60$$, $deferred$$19$$) {
    $options$$60$$ = $options$$60$$ || {};
    var $add$$3$$ = void 0 === $options$$60$$.add ? !0 : $options$$60$$.add, $remove$$2$$ = void 0 === $options$$60$$.remove ? !0 : $options$$60$$.remove, $merge$$1$$ = void 0 === $options$$60$$.merge ? !0 : $options$$60$$.merge, $foundModels$$1$$ = [], $currModel_obj$$46$$ = null, $modelList$$2$$;
    $parse$$2_swapped$$ && ($i$$63_models$$14$$ = this.parse($i$$63_models$$14$$));
    $modelList$$2$$ = Array.isArray($i$$63_models$$14$$) ? $i$$63_models$$14$$ : [$i$$63_models$$14$$];
    if ($deferred$$19$$) {
      var $self$$27$$ = this;
      return this.$_addPromise$(function() {
        return $self$$27$$.$_deferredSet$($modelList$$2$$, $self$$27$$.$_getModels$(), $options$$60$$, $remove$$2$$, $add$$3$$, $merge$$1$$);
      });
    }
    $parse$$2_swapped$$ = !1;
    for ($i$$63_models$$14$$ = 0;$i$$63_models$$14$$ < $modelList$$2$$.length;$i$$63_models$$14$$ += 1) {
      if ($currModel_obj$$46$$ = this.$_updateModel$(this.$_newModel$($modelList$$2$$[$i$$63_models$$14$$], $options$$60$$, !0), $add$$3$$, $merge$$1$$, $deferred$$19$$), -1 !== $currModel_obj$$46$$) {
        var $currModel_obj$$46$$ = this.$_swapModels$($currModel_obj$$46$$, $i$$63_models$$14$$, $remove$$2$$, $add$$3$$), $newLoc$$ = $currModel_obj$$46$$.index;
        $currModel_obj$$46$$.$swapped$ && ($parse$$2_swapped$$ = !0);
        -1 === $foundModels$$1$$.indexOf($newLoc$$) && $foundModels$$1$$.push($newLoc$$);
      }
    }
    $parse$$2_swapped$$ && this.$TriggerInternal$($options$$60$$.silent, $oj$$1$$.$Events$.$EventType$.SORT, this, $options$$60$$.add ? {add:!0} : null, null);
    $oj$$1$$.$Collection$.$_removeAfterSet$(this, this.$_getModels$(), $remove$$2$$, $foundModels$$1$$, $options$$60$$);
  };
  $oj$$1$$.$Collection$.prototype.$_deferredSet$ = function $$oj$$1$$$$Collection$$$$_deferredSet$$($modelList$$3$$, $modelsCopy$$, $options$$61$$, $remove$$3$$, $add$$4$$, $merge$$2$$) {
    var $foundModels$$2$$ = [], $i$$64$$, $self$$28$$ = this;
    return new Promise(function($allResolve$$2$$, $allReject$$2$$) {
      function $doTask$$2$$($index$$70$$) {
        return new Promise(function($resolve$$20$$, $reject$$20$$) {
          $self$$28$$.$_updateModel$($self$$28$$.$_newModel$($modelList$$3$$[$index$$70$$], $options$$61$$, !0), $add$$4$$, $merge$$2$$, !0).then(function($currModel$$1$$) {
            -1 !== $currModel$$1$$ && $foundModels$$2$$.push($currModel$$1$$);
            $resolve$$20$$($index$$70$$ + 1);
          }, $reject$$20$$);
        });
      }
      var $currentStep$$2$$ = Promise.resolve(0);
      for ($i$$64$$ = 0;$i$$64$$ < $modelList$$3$$.length;$i$$64$$ += 1) {
        $currentStep$$2$$ = $currentStep$$2$$.then($doTask$$2$$);
      }
      $currentStep$$2$$.then(function() {
        $oj$$1$$.$Collection$.$_removeAfterSet$($self$$28$$, $modelsCopy$$, $remove$$3$$, $foundModels$$2$$, $options$$61$$);
        $allResolve$$2$$(void 0);
      }, $allReject$$2$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.$_updateModel$ = function $$oj$$1$$$$Collection$$$$_updateModel$$($model$$38$$, $add$$5$$, $merge$$3$$, $deferred$$20$$) {
    function $update$$($collection$$26$$, $found$$2$$, $deferred$$21$$) {
      var $index$$71$$ = $found$$2$$ ? $found$$2$$.index : -1;
      if ($found$$2$$ && $found$$2$$.m) {
        if ($merge$$3$$) {
          var $opt$$14$$ = {merge:$merge$$3$$};
          if ($deferred$$21$$) {
            return new Promise(function($resolve$$21$$) {
              $collection$$26$$.$_addInternal$($model$$38$$, $opt$$14$$, !1, !0).then(function() {
                $resolve$$21$$($index$$71$$);
              });
            });
          }
          $collection$$26$$.add($model$$38$$, $opt$$14$$);
        }
      } else {
        if ($add$$5$$) {
          if ($deferred$$21$$) {
            return new Promise(function($resolve$$22$$) {
              $collection$$26$$.$_addInternal$($model$$38$$, $opt$$14$$, !1, !0).then(function() {
                $resolve$$22$$($collection$$26$$.$_getLength$() - 1);
              });
            });
          }
          $collection$$26$$.add($model$$38$$);
          $index$$71$$ = $collection$$26$$.$_getLength$() - 1;
        }
      }
      return $index$$71$$;
    }
    if ($deferred$$20$$ || this.$IsVirtual$()) {
      var $self$$29$$ = this;
      return new Promise(function($resolve$$23$$) {
        $self$$29$$.$_getInternal$($model$$38$$, {silent:!0}, $deferred$$20$$).then(function($found$$3$$) {
          $update$$($self$$29$$, $found$$3$$, !0).then(function($index$$72$$) {
            $resolve$$23$$($index$$72$$);
          });
        });
      });
    }
    var $found$$1$$ = this.$_getInternal$($model$$38$$);
    return $update$$(this, $found$$1$$, !1);
  };
  $oj$$1$$.$Collection$.prototype.toJSON = function $$oj$$1$$$$Collection$$$toJSON$() {
    var $retArr$$6$$ = [];
    this.$_throwErrIfVirtual$("toJSON");
    this.$_getModels$().forEach(function($model$$39$$) {
      $retArr$$6$$.push($model$$39$$.toJSON());
    });
    return $retArr$$6$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.toJSON", {toJSON:$oj$$1$$.$Collection$.prototype.toJSON});
  $oj$$1$$.$Collection$.prototype.first = function $$oj$$1$$$$Collection$$$first$($n$$12$$, $options$$62$$) {
    var $deferred$$22_i$$65_virtual$$2$$ = this.$_getDeferred$($options$$62$$), $elementCount$$ = this.$_getLength$(), $retArray$$ = [];
    $n$$12$$ ? $elementCount$$ = $n$$12$$ : $n$$12$$ = 1;
    $deferred$$22_i$$65_virtual$$2$$ = this.$IsVirtual$() || $deferred$$22_i$$65_virtual$$2$$;
    if (1 === $n$$12$$) {
      if ($deferred$$22_i$$65_virtual$$2$$) {
        var $self$$30$$ = this;
        return this.$_addPromise$(function() {
          return $self$$30$$.$_deferredAt$(0, null);
        });
      }
      return 0 < this.$_getModelsLength$() ? this.$_getModel$(0) : null;
    }
    $elementCount$$ > this.$_getModelsLength$() && (!this.$IsVirtual$() || this.$_hasTotalResults$()) && ($elementCount$$ = this.$_getModelsLength$());
    if ($deferred$$22_i$$65_virtual$$2$$) {
      return $self$$30$$ = this, this.$_addPromise$(function() {
        return $self$$30$$.$IterativeAt$(0, $elementCount$$);
      });
    }
    for ($deferred$$22_i$$65_virtual$$2$$ = 0;$deferred$$22_i$$65_virtual$$2$$ < $elementCount$$;$deferred$$22_i$$65_virtual$$2$$ += 1) {
      $retArray$$.push(this.$_getModel$($deferred$$22_i$$65_virtual$$2$$));
    }
    return $retArray$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.first", {first:$oj$$1$$.$Collection$.prototype.first});
  $oj$$1$$.$Collection$.prototype.indexOf = function $$oj$$1$$$$Collection$$$indexOf$($model$$40$$, $options$$63$$) {
    var $deferred$$23$$ = this.$_getDeferred$($options$$63$$);
    if (this.$IsVirtual$() || $deferred$$23$$) {
      var $self$$31$$ = this;
      return this.$_addPromise$(function() {
        return $self$$31$$.$_getInternal$($model$$40$$, null, !0).then(function($loc$$1$$) {
          return $loc$$1$$.index;
        });
      });
    }
    return this.$_getInternal$($model$$40$$).index;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.indexOf", {indexOf:$oj$$1$$.$Collection$.prototype.indexOf});
  $oj$$1$$.$Collection$.prototype.contains = function $$oj$$1$$$$Collection$$$contains$($model$$41$$, $options$$64$$) {
    var $deferred$$24$$ = this.$_getDeferred$($options$$64$$);
    if (this.$IsVirtual$() || $deferred$$24$$) {
      var $self$$32$$ = this;
      return this.$_addPromise$(function() {
        return $self$$32$$.$_getInternal$($model$$41$$, null, !0).then(function($loc$$2$$) {
          return-1 < $loc$$2$$.index;
        });
      });
    }
    return-1 < this.$_getInternal$($model$$41$$).index;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.contains", {contains:$oj$$1$$.$Collection$.prototype.contains});
  $oj$$1$$.$Collection$.prototype.$include$ = $oj$$1$$.$Collection$.prototype.contains;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.include", {$include$:$oj$$1$$.$Collection$.prototype.$include$});
  $oj$$1$$.$Collection$.prototype.$_localIndexOf$ = function $$oj$$1$$$$Collection$$$$_localIndexOf$$($location$$23_model$$42$$) {
    $location$$23_model$$42$$ = this.$_getLocalInternal$($location$$23_model$$42$$);
    return void 0 !== $location$$23_model$$42$$ ? $location$$23_model$$42$$.index : -1;
  };
  $oj$$1$$.$Collection$.prototype.pop = function $$oj$$1$$$$Collection$$$pop$($options$$65$$) {
    var $deferred$$25_m$$8$$ = this.$_getDeferred$($options$$65$$);
    if (this.$IsVirtual$() || $deferred$$25_m$$8$$) {
      var $self$$33$$ = this;
      return this.at(this.$_getLength$() - 1, {deferred:$deferred$$25_m$$8$$}).then(function($model$$43$$) {
        $self$$33$$.remove($model$$43$$, $options$$65$$);
        return $model$$43$$;
      });
    }
    $deferred$$25_m$$8$$ = this.at(this.$_getLength$() - 1);
    this.remove($deferred$$25_m$$8$$, $options$$65$$);
    return $deferred$$25_m$$8$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.pop", {pop:$oj$$1$$.$Collection$.prototype.pop});
  $oj$$1$$.$Collection$.prototype.push = function $$oj$$1$$$$Collection$$$push$($m$$9$$, $options$$66$$) {
    var $deferred$$26$$ = this.$_getDeferred$($options$$66$$);
    this.$_manageLRU$(1);
    return this.$_handlePromise$(this.$_addInternal$($m$$9$$, $options$$66$$, !1, $deferred$$26$$));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.push", {push:$oj$$1$$.$Collection$.prototype.push});
  $oj$$1$$.$Collection$.prototype.lastIndexOf = function $$oj$$1$$$$Collection$$$lastIndexOf$($model$$44$$, $fromIndex$$2$$) {
    var $i$$66$$;
    this.$_throwErrIfVirtual$("lastIndexOf");
    void 0 === $fromIndex$$2$$ && ($fromIndex$$2$$ = 0);
    for ($i$$66$$ = this.$_getLength$() - 1;$i$$66$$ >= $fromIndex$$2$$;$i$$66$$ -= 1) {
      if ($oj$$1$$.$Object$.$__innerEquals$($model$$44$$, this.at($i$$66$$))) {
        return $i$$66$$;
      }
    }
    return-1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastIndexOf", {lastIndexOf:$oj$$1$$.$Collection$.prototype.lastIndexOf});
  $oj$$1$$.$Collection$.prototype.$_getSortAttrs$ = function $$oj$$1$$$$Collection$$$$_getSortAttrs$$($sortStr$$) {
    return void 0 === $sortStr$$ ? [] : $sortStr$$.split(",");
  };
  $oj$$1$$.$Collection$.$_getQueryString$ = function $$oj$$1$$$$Collection$$$_getQueryString$$($q_queries$$) {
    $q_queries$$ = Array.isArray($q_queries$$) ? $q_queries$$ : [$q_queries$$];
    var $str$$11$$ = "", $query$$3$$, $exp_value$$60$$, $i$$67$$, $prop$$22$$;
    for ($i$$67$$ = 0;$i$$67$$ < $q_queries$$.length;$i$$67$$++) {
      $query$$3$$ = $q_queries$$[$i$$67$$];
      for ($prop$$22$$ in $query$$3$$) {
        if ($query$$3$$.hasOwnProperty($prop$$22$$)) {
          for (var $val$$15$$ = Array.isArray($query$$3$$[$prop$$22$$]) ? $query$$3$$[$prop$$22$$] : [$query$$3$$[$prop$$22$$]], $j$$4$$ = 0;$j$$4$$ < $val$$15$$.length;$j$$4$$++) {
            if ($oj$$1$$.$Model$.$IsComplexValue$($val$$15$$[$j$$4$$])) {
              $exp_value$$60$$ = $val$$15$$[$j$$4$$].value;
              var $comparator$$4_compare$$ = null, $comparator$$4_compare$$ = $val$$15$$[$j$$4$$].comparator, $comparator$$4_compare$$ = $$$$1$$.isFunction($comparator$$4_compare$$) ? $comparator$$4_compare$$(null, $prop$$22$$, $exp_value$$60$$) : $comparator$$4_compare$$;
              $exp_value$$60$$ = $prop$$22$$ + $comparator$$4_compare$$ + $exp_value$$60$$;
            } else {
              $exp_value$$60$$ = $prop$$22$$ + "\x3d" + $query$$3$$[$prop$$22$$];
            }
            $str$$11$$ += $exp_value$$60$$ + "+";
          }
        }
      }
      $str$$11$$ = $str$$11$$.substring(0, $str$$11$$.length - 1) + ",";
    }
    return "," === $str$$11$$.substring($str$$11$$.length - 1) ? $str$$11$$.substring(0, $str$$11$$.length - 1) : $str$$11$$;
  };
  $oj$$1$$.$Collection$.prototype.$ModifyOptionsForCustomURL$ = function $$oj$$1$$$$Collection$$$$ModifyOptionsForCustomURL$$($attrs$$9_comparator$$5_options$$67$$) {
    var $opt$$15$$ = {}, $i$$68_prop$$23$$;
    for ($i$$68_prop$$23$$ in $attrs$$9_comparator$$5_options$$67$$) {
      $attrs$$9_comparator$$5_options$$67$$.hasOwnProperty($i$$68_prop$$23$$) && ($opt$$15$$[$i$$68_prop$$23$$] = $attrs$$9_comparator$$5_options$$67$$[$i$$68_prop$$23$$]);
    }
    if (($attrs$$9_comparator$$5_options$$67$$ = this.comparator) && $oj$$1$$.$StringUtils$.$isString$($attrs$$9_comparator$$5_options$$67$$)) {
      $attrs$$9_comparator$$5_options$$67$$ = this.$_getSortAttrs$($attrs$$9_comparator$$5_options$$67$$);
      for ($i$$68_prop$$23$$ = 0;$i$$68_prop$$23$$ < $attrs$$9_comparator$$5_options$$67$$.length;$i$$68_prop$$23$$++) {
        $opt$$15$$.sort = 0 === $i$$68_prop$$23$$ ? $attrs$$9_comparator$$5_options$$67$$[$i$$68_prop$$23$$] : $opt$$15$$.sort + ("," + $attrs$$9_comparator$$5_options$$67$$[$i$$68_prop$$23$$]);
      }
      $opt$$15$$.sortDir = this.$_getSortDirStr$();
    }
    this.$IsVirtual$() && ($opt$$15$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getFetchSize$($opt$$15$$));
    return $opt$$15$$;
  };
  $oj$$1$$.$Collection$.prototype.$IsUrlBased$ = function $$oj$$1$$$$Collection$$$$IsUrlBased$$() {
    if ($$$$1$$.isFunction(this.customURL)) {
      return!0;
    }
    var $url$$17$$ = this.$GetCollectionFetchUrl$(null);
    return $oj$$1$$.$Collection$.$_defined$($url$$17$$);
  };
  $oj$$1$$.$Collection$.prototype.$GetCollectionFetchUrl$ = function $$oj$$1$$$$Collection$$$$GetCollectionFetchUrl$$($attrs$$10_comparator$$6_options$$69_queryString$$) {
    var $url$$18$$ = $oj$$1$$.$Model$.$GetPropValue$(this, "url");
    if (this.$IsVirtual$()) {
      var $all_sortDirStr$$ = $attrs$$10_comparator$$6_options$$69_queryString$$.all, $i$$69_limit$$4_totalResults$$4$$ = null;
      $i$$69_limit$$4_totalResults$$4$$ = $all_sortDirStr$$ ? ($i$$69_limit$$4_totalResults$$4$$ = this.totalResults) ? $i$$69_limit$$4_totalResults$$4$$ : this.$_getFetchSize$($attrs$$10_comparator$$6_options$$69_queryString$$) : this.$_getFetchSize$($attrs$$10_comparator$$6_options$$69_queryString$$);
      $url$$18$$ = $url$$18$$ && -1 < $url$$18$$.indexOf("?") ? $url$$18$$ + "\x26" : $url$$18$$ + "?";
      $url$$18$$ += "limit\x3d" + $i$$69_limit$$4_totalResults$$4$$;
      $all_sortDirStr$$ || ($oj$$1$$.$Collection$.$_defined$($attrs$$10_comparator$$6_options$$69_queryString$$.startIndex) && ($url$$18$$ += "\x26offset\x3d" + $attrs$$10_comparator$$6_options$$69_queryString$$.startIndex), $attrs$$10_comparator$$6_options$$69_queryString$$.startID && ($url$$18$$ += "\x26fromID\x3d" + $attrs$$10_comparator$$6_options$$69_queryString$$.startID), $attrs$$10_comparator$$6_options$$69_queryString$$.since && ($url$$18$$ += "\x26since\x3d" + $attrs$$10_comparator$$6_options$$69_queryString$$.since), 
      $attrs$$10_comparator$$6_options$$69_queryString$$.until && ($url$$18$$ += "\x26until\x3d" + $attrs$$10_comparator$$6_options$$69_queryString$$.until));
      $attrs$$10_comparator$$6_options$$69_queryString$$.query && ($attrs$$10_comparator$$6_options$$69_queryString$$ = $oj$$1$$.$Collection$.$_getQueryString$($attrs$$10_comparator$$6_options$$69_queryString$$.query)) && 0 < $attrs$$10_comparator$$6_options$$69_queryString$$.length && ($url$$18$$ += "\x26q\x3d" + $attrs$$10_comparator$$6_options$$69_queryString$$);
      if (($attrs$$10_comparator$$6_options$$69_queryString$$ = this.comparator) && $oj$$1$$.$StringUtils$.$isString$($attrs$$10_comparator$$6_options$$69_queryString$$)) {
        for ($attrs$$10_comparator$$6_options$$69_queryString$$ = this.$_getSortAttrs$($attrs$$10_comparator$$6_options$$69_queryString$$), $all_sortDirStr$$ = this.$_getSortDirStr$(), $i$$69_limit$$4_totalResults$$4$$ = 0;$i$$69_limit$$4_totalResults$$4$$ < $attrs$$10_comparator$$6_options$$69_queryString$$.length;$i$$69_limit$$4_totalResults$$4$$++) {
          $url$$18$$ = 0 === $i$$69_limit$$4_totalResults$$4$$ ? $url$$18$$ + ("\x26orderBy\x3d" + $attrs$$10_comparator$$6_options$$69_queryString$$[$i$$69_limit$$4_totalResults$$4$$] + ":" + $all_sortDirStr$$) : $url$$18$$ + ("," + $attrs$$10_comparator$$6_options$$69_queryString$$[$i$$69_limit$$4_totalResults$$4$$] + ":" + $all_sortDirStr$$);
        }
      }
      $url$$18$$ += "\x26totalResults\x3dtrue";
    }
    return $url$$18$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getSortDirStr$ = function $$oj$$1$$$$Collection$$$$_getSortDirStr$$() {
    return-1 === this.sortDirection ? "desc" : "asc";
  };
  $oj$$1$$.$Collection$.prototype.sync = function $$oj$$1$$$$Collection$$$sync$($method$$2$$, $collection$$27$$, $options$$70$$) {
    return window.oj.sync($method$$2$$, $collection$$27$$, $options$$70$$);
  };
  $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$ = "fetchSize";
  $oj$$1$$.$Model$ = function $$oj$$1$$$$Model$$($attributes$$1$$, $options$$71$$) {
    $oj$$1$$.$Model$._init(this, $attributes$$1$$, $options$$71$$, null);
  };
  $goog$exportPath_$$("Model", $oj$$1$$.$Model$, $oj$$1$$);
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$Model$, $oj$$1$$.$Object$, "oj.Model");
  $oj$$1$$.$Model$.prototype.Init = function $$oj$$1$$$$Model$$$Init$() {
    $oj$$1$$.$Model$.$superclass$.Init.call(this);
  };
  $oj$$1$$.$Model$.prototype.attributes = {};
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.attributes", {attributes:$oj$$1$$.$Model$.prototype.attributes});
  $oj$$1$$.$Model$.prototype.$defaults$ = {};
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.defaults", {$defaults$:$oj$$1$$.$Model$.prototype.$defaults$});
  $oj$$1$$.$Model$.prototype.id = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.id", {id:$oj$$1$$.$Model$.prototype.id});
  $oj$$1$$.$Model$.prototype.$idAttribute$ = "id";
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.idAttribute", {$idAttribute$:$oj$$1$$.$Model$.prototype.$idAttribute$});
  $oj$$1$$.$Model$.prototype.$urlRoot$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.urlRoot", {$urlRoot$:$oj$$1$$.$Model$.prototype.$urlRoot$});
  $oj$$1$$.$Model$.prototype.$customURL$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.customURL", {$customURL$:$oj$$1$$.$Model$.prototype.$customURL$});
  $oj$$1$$.$Model$.$_idCount$ = 0;
  $oj$$1$$.$Model$._init = function $$oj$$1$$$$Model$$_init$($model$$45$$, $attributes$$2$$, $options$$72$$, $parse$$4_properties$$5$$) {
    var $prop$$24$$ = null, $attrCopy$$;
    if (!$oj$$1$$.$Model$.$_justExtending$) {
      $model$$45$$.Init();
      $oj$$1$$.$Events$.$Mixin$($model$$45$$);
      $model$$45$$.$_clearChanged$();
      $model$$45$$.$previousAttrs$ = {};
      $model$$45$$.$nestedSet$ = !1;
      $model$$45$$.index = -1;
      $options$$72$$ = $options$$72$$ || {};
      $model$$45$$.attributes = {};
      $model$$45$$.defaults && !$options$$72$$.$ignoreDefaults$ && ($model$$45$$.attributes = $oj$$1$$.$Model$.$_cloneAttributes$($$$$1$$.isFunction($model$$45$$.defaults) ? $model$$45$$.defaults() : $model$$45$$.defaults, null));
      for ($prop$$24$$ in $parse$$4_properties$$5$$) {
        $parse$$4_properties$$5$$.hasOwnProperty($prop$$24$$) && ($model$$45$$[$prop$$24$$] = $parse$$4_properties$$5$$[$prop$$24$$]);
      }
      if ($attributes$$2$$) {
        if ($parse$$4_properties$$5$$ = $options$$72$$.parse, $$$$1$$.isFunction($parse$$4_properties$$5$$) && ($model$$45$$.parse = $parse$$4_properties$$5$$), $attrCopy$$ = $oj$$1$$.$Model$.$_cloneAttributes$($attributes$$2$$, $model$$45$$.attributes), $attrCopy$$ = $parse$$4_properties$$5$$ ? $model$$45$$.parse($attrCopy$$) : $attrCopy$$, null == $attrCopy$$ || void 0 === $attrCopy$$) {
          $model$$45$$.attributes = {};
        } else {
          for ($prop$$24$$ in $attrCopy$$) {
            $attrCopy$$.hasOwnProperty($prop$$24$$) && $model$$45$$.$_setProp$($prop$$24$$, $attrCopy$$[$prop$$24$$], !1, !1, $options$$72$$);
          }
        }
      }
      $model$$45$$.$SetCid$();
      $model$$45$$.$SetCollection$($options$$72$$.collection);
      $options$$72$$.customURL && ($model$$45$$.customURL = $options$$72$$.customURL);
      $options$$72$$.url && ($model$$45$$.url = $options$$72$$.url);
      $options$$72$$.urlRoot && ($model$$45$$.urlRoot = $options$$72$$.urlRoot);
      $model$$45$$.initialize && $model$$45$$.initialize($attributes$$2$$, $options$$72$$);
      $model$$45$$.$SetupId$();
    }
  };
  $oj$$1$$.$Model$.extend = function $$oj$$1$$$$Model$$extend$($properties$$6$$, $classProperties$$1$$) {
    $oj$$1$$.$Model$.$_justExtending$ = !0;
    var $obj$$47$$, $prop$$25$$;
    $obj$$47$$ = new $oj$$1$$.$Model$;
    $oj$$1$$.$Model$.$_justExtending$ = !1;
    $$$$1$$.extend($obj$$47$$, this.prototype);
    $properties$$6$$ = $properties$$6$$ || {};
    for ($prop$$25$$ in $properties$$6$$) {
      $properties$$6$$.hasOwnProperty($prop$$25$$) && ($obj$$47$$[$prop$$25$$] = $properties$$6$$[$prop$$25$$]);
    }
    var $Model$$;
    $Model$$ = $properties$$6$$ && $properties$$6$$.constructor && $properties$$6$$.hasOwnProperty("constructor") ? $properties$$6$$.constructor : function($attributes$$3$$, $options$$73$$) {
      $oj$$1$$.$Model$._init(this, $attributes$$3$$, $options$$73$$, $properties$$6$$);
    };
    $$$$1$$.extend($Model$$, this);
    $Model$$.prototype = $obj$$47$$;
    $Model$$.extend = $oj$$1$$.$Model$.extend;
    $Model$$.prototype.constructor = $Model$$;
    $oj$$1$$.$Events$.$Mixin$($Model$$, this);
    if ($classProperties$$1$$) {
      for ($prop$$25$$ in $classProperties$$1$$) {
        $classProperties$$1$$.hasOwnProperty($prop$$25$$) && ($Model$$[$prop$$25$$] = $classProperties$$1$$[$prop$$25$$]);
      }
    }
    return $Model$$;
  };
  $goog$exportPath_$$("Model.extend", $oj$$1$$.$Model$.extend, $oj$$1$$);
  $oj$$1$$.$Model$.prototype.$TriggerInternal$ = function $$oj$$1$$$$Model$$$$TriggerInternal$$() {
  };
  $oj$$1$$.$Model$.prototype.$SetCid$ = function $$oj$$1$$$$Model$$$$SetCid$$() {
    this.$GetCid$() || (this.cid = "id" + $oj$$1$$.$Model$.$_idCount$, $oj$$1$$.$Model$.$_idCount$ += 1);
  };
  $oj$$1$$.$Model$.prototype.$GetCid$ = function $$oj$$1$$$$Model$$$$GetCid$$() {
    return this.cid;
  };
  $oj$$1$$.$Model$.prototype.$SetIndex$ = function $$oj$$1$$$$Model$$$$SetIndex$$($index$$73$$) {
    this.index = $index$$73$$;
  };
  $oj$$1$$.$Model$.prototype.$GetIndex$ = function $$oj$$1$$$$Model$$$$GetIndex$$() {
    return this.index;
  };
  $oj$$1$$.$Model$.prototype.$SetNext$ = function $$oj$$1$$$$Model$$$$SetNext$$($model$$46$$) {
    this.$nextModel$ = $model$$46$$;
  };
  $oj$$1$$.$Model$.prototype.$SetPrevious$ = function $$oj$$1$$$$Model$$$$SetPrevious$$($model$$47$$) {
    var $retVal$$4$$ = this.$previousModel$;
    this.$previousModel$ = $model$$47$$;
    return $retVal$$4$$;
  };
  $oj$$1$$.$Model$.prototype.$Merge$ = function $$oj$$1$$$$Model$$$$Merge$$($model$$48$$, $comparator$$7$$, $silent$$12$$) {
    var $prop$$26$$, $needSort$$1$$ = !1, $isStringComparator$$ = $oj$$1$$.$StringUtils$.$isString$($comparator$$7$$), $valueChange$$, $changes$$ = !1;
    for ($prop$$26$$ in $model$$48$$.attributes) {
      $model$$48$$.attributes.hasOwnProperty($prop$$26$$) && ($valueChange$$ = this.attributes[$prop$$26$$] != $model$$48$$.attributes[$prop$$26$$], $isStringComparator$$ ? $prop$$26$$ === $comparator$$7$$ && $valueChange$$ && ($needSort$$1$$ = !0) : $valueChange$$ && ($needSort$$1$$ = !0), $valueChange$$ && ($changes$$ = !0, this.attributes[$prop$$26$$] = $model$$48$$.attributes[$prop$$26$$], this.$_addChange$($prop$$26$$, $model$$48$$.attributes[$prop$$26$$]), this.$_fireAttrChange$($prop$$26$$, 
      this.attributes[$prop$$26$$], null, $silent$$12$$)));
    }
    this.$SetupId$();
    $changes$$ && this.$_fireChange$(null, $silent$$12$$);
    return $needSort$$1$$;
  };
  $oj$$1$$.$Model$.$_hasProperties$ = function $$oj$$1$$$$Model$$$_hasProperties$$($object$$4$$) {
    var $prop$$27$$;
    if ($object$$4$$ && $object$$4$$ instanceof Object) {
      for ($prop$$27$$ in $object$$4$$) {
        if ($object$$4$$.hasOwnProperty($prop$$27$$)) {
          return!0;
        }
      }
    }
    return!1;
  };
  $oj$$1$$.$Model$.prototype.$SetCollection$ = function $$oj$$1$$$$Model$$$$SetCollection$$($coll$$) {
    null == $coll$$ ? delete this.collection : (this.collection = $coll$$, this.$SetupId$());
  };
  $oj$$1$$.$Model$.prototype.$GetCollection$ = function $$oj$$1$$$$Model$$$$GetCollection$$() {
    return this.collection;
  };
  $oj$$1$$.$Model$.prototype.$_fireAttrChange$ = function $$oj$$1$$$$Model$$$$_fireAttrChange$$($prop$$28$$, $value$$61$$, $options$$75$$, $silent$$13$$) {
    null != $prop$$28$$ && this.$TriggerInternal$($silent$$13$$, $oj$$1$$.$Events$.$EventType$.CHANGE + ":" + $prop$$28$$, this, $value$$61$$, $options$$75$$);
  };
  $oj$$1$$.$Model$.prototype.$_fireChange$ = function $$oj$$1$$$$Model$$$$_fireChange$$($options$$76$$, $silent$$14$$) {
    this.$TriggerInternal$($silent$$14$$, $oj$$1$$.$Events$.$EventType$.CHANGE, this, $options$$76$$, null);
  };
  $oj$$1$$.$Model$.prototype.$SetupId$ = function $$oj$$1$$$$Model$$$$SetupId$$() {
    var $id$$9_idAttr$$1_modFunc$$ = null;
    this.collection && this.collection.modelId && ($id$$9_idAttr$$1_modFunc$$ = this.collection.modelId, $id$$9_idAttr$$1_modFunc$$ = $$$$1$$.isFunction($id$$9_idAttr$$1_modFunc$$) ? $id$$9_idAttr$$1_modFunc$$.call(this.collection, this.attributes) : $id$$9_idAttr$$1_modFunc$$);
    $id$$9_idAttr$$1_modFunc$$ || ($id$$9_idAttr$$1_modFunc$$ = this.$_getIdAttr$(), $id$$9_idAttr$$1_modFunc$$ = null != this.attributes ? this.attributes[$id$$9_idAttr$$1_modFunc$$] : null);
    this.id = $id$$9_idAttr$$1_modFunc$$;
  };
  $oj$$1$$.$Model$.prototype.$_setPropInternal$ = function $$oj$$1$$$$Model$$$$_setPropInternal$$($prop$$29$$, $value$$62$$, $copyRegardless$$) {
    var $equality$$ = $oj$$1$$.$Object$.$__innerEquals$(this.attributes[$prop$$29$$], $value$$62$$);
    return $copyRegardless$$ || !$equality$$ ? (this.attributes[$prop$$29$$] = $value$$62$$, this.$SetupId$(), !$equality$$) : !1;
  };
  $oj$$1$$.$Model$.prototype.$_clearChanged$ = function $$oj$$1$$$$Model$$$$_clearChanged$$() {
    this.changed = {};
  };
  $oj$$1$$.$Model$.prototype.$_addChange$ = function $$oj$$1$$$$Model$$$$_addChange$$($property$$5$$, $value$$63$$) {
    this.changed[$property$$5$$] = $value$$63$$;
  };
  $oj$$1$$.$Model$.prototype.$_setProp$ = function $$oj$$1$$$$Model$$$$_setProp$$($opts$$4_prop$$30$$, $value$$64$$, $copyRegardless$$1_silent$$15$$, $propertyBag$$, $options$$77$$) {
    if (null == $opts$$4_prop$$30$$) {
      return!0;
    }
    var $attrs$$11$$ = {}, $p$$, $isNested$$ = this.$nestedSet$;
    if ($propertyBag$$) {
      for ($p$$ in $opts$$4_prop$$30$$) {
        $opts$$4_prop$$30$$.hasOwnProperty($p$$) && ($attrs$$11$$[$p$$] = $opts$$4_prop$$30$$[$p$$]);
      }
    } else {
      $attrs$$11$$[$opts$$4_prop$$30$$] = $value$$64$$;
    }
    $opts$$4_prop$$30$$ = $options$$77$$ || {};
    if (!this.$_checkValid$($attrs$$11$$, {validate:$opts$$4_prop$$30$$.validate}, !1)) {
      return!1;
    }
    $isNested$$ || (this.$_clearChanged$(), this.$changes$ = []);
    this.$nestedSet$ || (this.$previousAttrs$ = $oj$$1$$.$Model$.$_cloneAttributes$(this.attributes, null));
    this.$nestedSet$ = !0;
    for ($p$$ in $attrs$$11$$) {
      $attrs$$11$$.hasOwnProperty($p$$) && (this.$_setPropInternal$($p$$, $attrs$$11$$[$p$$], $copyRegardless$$1_silent$$15$$) ? (this.$_addChange$($p$$, $attrs$$11$$[$p$$]), this.$changes$.push($p$$)) : delete $attrs$$11$$[$p$$]);
    }
    $copyRegardless$$1_silent$$15$$ = $opts$$4_prop$$30$$.silent;
    for ($p$$ in $attrs$$11$$) {
      $attrs$$11$$.hasOwnProperty($p$$) && (!$copyRegardless$$1_silent$$15$$ && (0 < this.$changes$.length || $isNested$$ && -1 === this.$changes$.indexOf($p$$)) && (this.$pendingChanges$ = !0, this.$pendingOpts$ = $opts$$4_prop$$30$$), this.$_fireAttrChange$($p$$, $attrs$$11$$[$p$$], $opts$$4_prop$$30$$, $copyRegardless$$1_silent$$15$$));
    }
    if ($isNested$$) {
      return!0;
    }
    if (!$copyRegardless$$1_silent$$15$$ && !$isNested$$) {
      for (;this.$pendingChanges$;) {
        this.$pendingChanges$ = !1, this.$_fireChange$(this.$pendingOpts$, $copyRegardless$$1_silent$$15$$);
      }
    }
    this.$nestedSet$ = !1;
    return!0;
  };
  $oj$$1$$.$Model$.prototype.clear = function $$oj$$1$$$$Model$$$clear$($options$$78$$) {
    var $prop$$31$$, $unsetOpt$$ = {silent:!0}, $silent$$16$$;
    $options$$78$$ = $options$$78$$ || {};
    $silent$$16$$ = $options$$78$$.silent;
    $unsetOpt$$.validate = $options$$78$$.validate;
    this.$_clearChanged$();
    for ($prop$$31$$ in this.attributes) {
      if (this.attributes.hasOwnProperty($prop$$31$$)) {
        if (!this.$_unsetInternal$($prop$$31$$, $unsetOpt$$, !0)) {
          return!1;
        }
        this.$TriggerInternal$($silent$$16$$, $oj$$1$$.$Events$.$EventType$.CHANGE + ":" + $prop$$31$$, this, void 0, null);
      }
    }
    this.attributes = {};
    this.$SetupId$();
    this.$_fireAttrChange$(null, null, null, $silent$$16$$);
    this.$_fireChange$(null, $silent$$16$$);
    return this;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.clear", {clear:$oj$$1$$.$Model$.prototype.clear});
  $oj$$1$$.$Model$.$_cloneAttributes$ = function $$oj$$1$$$$Model$$$_cloneAttributes$$($oldData$$, $newData$$) {
    $newData$$ = $newData$$ || {};
    for (var $prop$$32$$ in $oldData$$) {
      $newData$$.hasOwnProperty($prop$$32$$) && $oldData$$.hasOwnProperty($prop$$32$$) && void 0 === $oldData$$[$prop$$32$$] && delete $oldData$$[$prop$$32$$];
    }
    $oj$$1$$.$CollectionUtils$.$copyInto$($newData$$, $oldData$$, void 0, !0, 1E4);
    return $newData$$;
  };
  $oj$$1$$.$Model$.prototype.clone = function $$oj$$1$$$$Model$$$clone$() {
    var $c$$29$$ = new this.constructor, $prop$$33$$;
    for ($prop$$33$$ in this) {
      this.hasOwnProperty($prop$$33$$) && this[$prop$$33$$] !== this.attributes && ($c$$29$$[$prop$$33$$] = this[$prop$$33$$]);
    }
    $c$$29$$.attributes = $oj$$1$$.$Model$.$_cloneAttributes$(this.attributes, null);
    delete $c$$29$$.cid;
    $c$$29$$.$SetCid$();
    $c$$29$$.$SetupId$();
    return $c$$29$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.clone", {clone:$oj$$1$$.$Model$.prototype.clone});
  $oj$$1$$.$Model$.prototype.$Match$ = function $$oj$$1$$$$Model$$$$Match$$($id$$10$$, $cid$$6$$) {
    var $modCid_modId$$ = this.$GetId$();
    if (void 0 !== $modCid_modId$$ && $modCid_modId$$ == $id$$10$$) {
      return!0;
    }
    $modCid_modId$$ = this.cid;
    return void 0 !== $modCid_modId$$ && $modCid_modId$$ == $cid$$6$$ ? !0 : !1;
  };
  $oj$$1$$.$Model$.prototype.set = function $$oj$$1$$$$Model$$$set$($property$$6$$, $value$$65$$, $options$$79$$) {
    var $opts$$5$$ = $options$$79$$ || {}, $prop$$34$$, $valid$$ = !0;
    if (arguments && 0 < arguments.length) {
      if ($oj$$1$$.$StringUtils$.$isString$($property$$6$$)) {
        $opts$$5$$.unset ? this.$_unsetInternal$($property$$6$$, null, !1) : this.$_setProp$($property$$6$$, $value$$65$$, !1, !1, $opts$$5$$) || ($valid$$ = !1);
      } else {
        if ($opts$$5$$ = $value$$65$$ || {}, $opts$$5$$.unset) {
          for ($prop$$34$$ in $property$$6$$) {
            $property$$6$$.hasOwnProperty($prop$$34$$) && this.$_unsetInternal$($prop$$34$$, null, !1);
          }
        } else {
          this.$_setProp$($property$$6$$, null, !0, !0, $opts$$5$$) || ($valid$$ = !1);
        }
      }
    }
    return $valid$$ ? this : !1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.set", {set:$oj$$1$$.$Model$.prototype.set});
  $oj$$1$$.$Model$.prototype.$unset$ = function $$oj$$1$$$$Model$$$$unset$$($property$$7$$, $options$$80$$) {
    return this.$_unsetInternal$($property$$7$$, $options$$80$$, !1);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.unset", {$unset$:$oj$$1$$.$Model$.prototype.$unset$});
  $oj$$1$$.$Model$.prototype.$_unsetInternal$ = function $$oj$$1$$$$Model$$$$_unsetInternal$$($property$$8$$, $options$$81$$, $clear$$) {
    $options$$81$$ = $options$$81$$ || {};
    var $silent$$17$$ = $options$$81$$.silent, $attrs$$12$$ = {};
    if (this.has($property$$8$$)) {
      if (!this.$_checkValid$($attrs$$12$$, $options$$81$$, !1)) {
        return!1;
      }
      $clear$$ || this.$_clearChanged$();
      delete this.attributes[$property$$8$$];
      this.$_addChange$($property$$8$$, void 0);
      this.$_fireAttrChange$($property$$8$$, null, null, $silent$$17$$);
      this.$_fireChange$(null, $silent$$17$$);
    }
    this.$SetupId$();
    return!0;
  };
  $oj$$1$$.$Model$.prototype.get = function $$oj$$1$$$$Model$$$get$($property$$9$$) {
    return this.attributes[$property$$9$$];
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.get", {get:$oj$$1$$.$Model$.prototype.get});
  $oj$$1$$.$Model$.prototype.has = function $$oj$$1$$$$Model$$$has$($property$$10$$) {
    return $oj$$1$$.$Collection$.$_defined$(this.attributes[$property$$10$$]);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.has", {has:$oj$$1$$.$Model$.prototype.has});
  $oj$$1$$.$Model$.prototype.fetch = function $$oj$$1$$$$Model$$$fetch$($options$$82$$) {
    $options$$82$$ = $options$$82$$ || {};
    var $success$$11$$ = $options$$82$$.success, $userErr$$ = $options$$82$$.error, $self$$34$$ = this, $opts$$6$$;
    $opts$$6$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$82$$);
    $opts$$6$$.error = function $$opts$$6$$$error$($xhr$$11$$, $status$$9$$, $err$$4$$) {
      $oj$$1$$.$Model$.$_triggerError$($self$$34$$, !1, $options$$82$$, $status$$9$$, $err$$4$$, $xhr$$11$$);
      $userErr$$ && $userErr$$.apply($self$$34$$, arguments);
    };
    $opts$$6$$.success = function $$opts$$6$$$success$($response$$10$$) {
      $opts$$6$$.xhr && ($options$$82$$.xhr = $opts$$6$$.xhr);
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$34$$, $response$$10$$, $opts$$6$$);
      $$$$1$$.isFunction($self$$34$$.parse) && $self$$34$$.set($self$$34$$.parse($response$$10$$), $opts$$6$$);
      $success$$11$$ && $success$$11$$.call($self$$34$$, this, $response$$10$$, $options$$82$$);
    };
    $oj$$1$$.$Model$.$_internalSync$("read", this, $opts$$6$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.fetch", {fetch:$oj$$1$$.$Model$.prototype.fetch});
  $oj$$1$$.$Model$.prototype.parse = function $$oj$$1$$$$Model$$$parse$($rawData$$) {
    return $rawData$$;
  };
  $oj$$1$$.$Model$.prototype.url = function $$oj$$1$$$$Model$$$url$() {
    var $coll$$2_collUrl_urlRoot$$ = this.$_getUrlRoot$(), $id$$11_slash$$ = this.$GetId$();
    if ($coll$$2_collUrl_urlRoot$$) {
      return $id$$11_slash$$ ? $coll$$2_collUrl_urlRoot$$ + "/" + encodeURIComponent($id$$11_slash$$) : $coll$$2_collUrl_urlRoot$$;
    }
    if ($coll$$2_collUrl_urlRoot$$ = this.collection) {
      return $coll$$2_collUrl_urlRoot$$ = $oj$$1$$.$Model$.$GetPropValue$($coll$$2_collUrl_urlRoot$$, "url"), $id$$11_slash$$ && $coll$$2_collUrl_urlRoot$$ ? ($id$$11_slash$$ = "/" == $oj$$1$$.$Model$.$_getLastChar$($coll$$2_collUrl_urlRoot$$) ? "" : "/", $coll$$2_collUrl_urlRoot$$ + $id$$11_slash$$ + encodeURIComponent(this.$GetId$())) : $coll$$2_collUrl_urlRoot$$;
    }
    throw new $oj$$1$$.$URLError$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.url", {url:$oj$$1$$.$Model$.prototype.url});
  $oj$$1$$.$Model$.prototype.keys = function $$oj$$1$$$$Model$$$keys$() {
    var $prop$$35$$, $retArray$$1$$ = [];
    for ($prop$$35$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$35$$) && $retArray$$1$$.push($prop$$35$$);
    }
    return $retArray$$1$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.keys", {keys:$oj$$1$$.$Model$.prototype.keys});
  $oj$$1$$.$Model$.prototype.$values$ = function $$oj$$1$$$$Model$$$$values$$() {
    var $prop$$36$$, $retArray$$2$$ = [];
    for ($prop$$36$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$36$$) && $retArray$$2$$.push(this.get($prop$$36$$));
    }
    return $retArray$$2$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.values", {$values$:$oj$$1$$.$Model$.prototype.$values$});
  $oj$$1$$.$Model$.prototype.$pairs$ = function $$oj$$1$$$$Model$$$$pairs$$() {
    var $prop$$37$$, $retObj$$4$$ = [], $item$$;
    for ($prop$$37$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$37$$) && ($item$$ = [], $item$$.push($prop$$37$$), $item$$.push(this.get($prop$$37$$)), $retObj$$4$$.push($item$$));
    }
    return $retObj$$4$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.pairs", {$pairs$:$oj$$1$$.$Model$.prototype.$pairs$});
  $oj$$1$$.$Model$.prototype.$omit$ = function $$oj$$1$$$$Model$$$$omit$$($keys$$2$$) {
    var $keyArr$$ = [], $i$$70$$, $prop$$38$$, $retObj$$5$$ = {};
    if ($keys$$2$$ instanceof Array) {
      $keyArr$$ = $keys$$2$$;
    } else {
      for ($i$$70$$ = 0;$i$$70$$ < arguments.length;$i$$70$$++) {
        $keyArr$$.push(arguments[$i$$70$$]);
      }
    }
    for ($prop$$38$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$38$$) && -1 == $keyArr$$.indexOf($prop$$38$$) && ($retObj$$5$$[$prop$$38$$] = this.get($prop$$38$$));
    }
    return $retObj$$5$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.omit", {$omit$:$oj$$1$$.$Model$.prototype.$omit$});
  $oj$$1$$.$Model$.prototype.$pick$ = function $$oj$$1$$$$Model$$$$pick$$($keys$$3$$) {
    var $keyArr$$1$$ = [], $i$$71$$, $retObj$$6$$ = {};
    if ($keys$$3$$ instanceof Array) {
      $keyArr$$1$$ = $keys$$3$$;
    } else {
      for ($i$$71$$ = 0;$i$$71$$ < arguments.length;$i$$71$$++) {
        $keyArr$$1$$.push(arguments[$i$$71$$]);
      }
    }
    for ($i$$71$$ = 0;$i$$71$$ < $keyArr$$1$$.length;$i$$71$$++) {
      this.attributes.hasOwnProperty($keyArr$$1$$[$i$$71$$]) && ($retObj$$6$$[$keyArr$$1$$[$i$$71$$]] = this.get($keyArr$$1$$[$i$$71$$]));
    }
    return $retObj$$6$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.pick", {$pick$:$oj$$1$$.$Model$.prototype.$pick$});
  $oj$$1$$.$Model$.prototype.$invert$ = function $$oj$$1$$$$Model$$$$invert$$() {
    var $prop$$39$$, $retObj$$7$$ = {}, $val$$16$$;
    for ($prop$$39$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$39$$) && ($val$$16$$ = this.get($prop$$39$$), $retObj$$7$$[$val$$16$$] = $prop$$39$$);
    }
    return $retObj$$7$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.invert", {$invert$:$oj$$1$$.$Model$.prototype.$invert$});
  $oj$$1$$.$Model$.$_getLastChar$ = function $$oj$$1$$$$Model$$$_getLastChar$$($str$$12$$) {
    return $str$$12$$.charAt($str$$12$$.length - 1);
  };
  $oj$$1$$.$Model$.prototype.$_saveUrl$ = function $$oj$$1$$$$Model$$$$_saveUrl$$() {
    var $urlRoot$$1$$ = this.$_getUrlRoot$();
    return $urlRoot$$1$$ ? $urlRoot$$1$$ : this.$GetCollection$() ? this.$GetCollection$().url : null;
  };
  $oj$$1$$.$Model$.prototype.$_getUrlRoot$ = function $$oj$$1$$$$Model$$$$_getUrlRoot$$() {
    return $oj$$1$$.$Model$.$GetPropValue$(this, "urlRoot");
  };
  $oj$$1$$.$Model$.prototype.parseSave = function $$oj$$1$$$$Model$$$parseSave$($modelData$$) {
    return $modelData$$;
  };
  $oj$$1$$.$Model$.prototype.isValid = function $$oj$$1$$$$Model$$$isValid$() {
    var $options$$83$$ = {};
    $options$$83$$.validate = this.validate;
    return this.$_checkValid$(this.attributes, $options$$83$$, !1);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.isValid", {isValid:$oj$$1$$.$Model$.prototype.isValid});
  $oj$$1$$.$Model$.$_isValidateSet$ = function $$oj$$1$$$$Model$$$_isValidateSet$$($options$$84$$, $save$$) {
    $options$$84$$ = $options$$84$$ || {};
    return void 0 !== $options$$84$$.validate && null !== $options$$84$$.validate ? $options$$84$$.validate : $save$$;
  };
  $oj$$1$$.$Model$.prototype.$_checkValid$ = function $$oj$$1$$$$Model$$$$_checkValid$$($attributes$$4$$, $options$$85$$, $save$$1$$) {
    $options$$85$$ = $options$$85$$ || {};
    var $validate$$2$$ = this.validate;
    return $validate$$2$$ && $oj$$1$$.$Model$.$_isValidateSet$($options$$85$$, $save$$1$$) && (this.validationError = $validate$$2$$.call(this, $attributes$$4$$, $options$$85$$)) ? (this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.INVALID, this, this.validationError, $options$$85$$), !1) : !0;
  };
  $oj$$1$$.$Model$.$_processArgs$ = function $$oj$$1$$$$Model$$$_processArgs$$($args$$15$$) {
    var $ignoreLastArg$$ = !1, $options$$86$$ = {}, $i$$72_prop$$40$$, $attributes$$5$$ = {};
    if ($args$$15$$ && 0 < $args$$15$$.length) {
      1 < $args$$15$$.length && $args$$15$$[$args$$15$$.length - 1] && $oj$$1$$.$Model$.$_hasProperties$($args$$15$$[$args$$15$$.length - 1]) && ($ignoreLastArg$$ = !0, $options$$86$$ = $args$$15$$[$args$$15$$.length - 1] || {});
      if (null == $args$$15$$[0]) {
        return{attributes:null, options:$options$$86$$};
      }
      if ($oj$$1$$.$Model$.$_hasProperties$($args$$15$$[0]) || $oj$$1$$.$Object$.$isEmpty$($args$$15$$[0])) {
        for ($i$$72_prop$$40$$ in $args$$15$$[0]) {
          $args$$15$$[0].hasOwnProperty($i$$72_prop$$40$$) && ($attributes$$5$$[$i$$72_prop$$40$$] = $args$$15$$[0][$i$$72_prop$$40$$]);
        }
      } else {
        for ($i$$72_prop$$40$$ = 0;$i$$72_prop$$40$$ < $args$$15$$.length;$i$$72_prop$$40$$ += 2) {
          if (void 0 !== $args$$15$$[$i$$72_prop$$40$$] || $i$$72_prop$$40$$ < $args$$15$$.length - 1 || !$ignoreLastArg$$ && $i$$72_prop$$40$$ === $args$$15$$.length - 1) {
            $attributes$$5$$[$args$$15$$[$i$$72_prop$$40$$]] = $args$$15$$[$i$$72_prop$$40$$ + 1];
          }
        }
      }
    }
    return{attributes:$attributes$$5$$, options:$options$$86$$};
  };
  $oj$$1$$.$Model$.$_copyOptions$ = function $$oj$$1$$$$Model$$$_copyOptions$$($options$$87$$) {
    var $optReturn$$ = {}, $prop$$41$$;
    $options$$87$$ = $options$$87$$ || {};
    for ($prop$$41$$ in $options$$87$$) {
      $options$$87$$.hasOwnProperty($prop$$41$$) && ($optReturn$$[$prop$$41$$] = $options$$87$$[$prop$$41$$]);
    }
    return $optReturn$$;
  };
  $oj$$1$$.$Model$.$_triggerError$ = function $$oj$$1$$$$Model$$$_triggerError$$($self$$35$$, $silent$$18$$, $options$$88$$, $status$$10$$, $err$$5$$, $xhr$$12$$) {
    $options$$88$$ = $options$$88$$ || {};
    $options$$88$$.textStatus = $status$$10$$;
    $options$$88$$.errorThrown = $err$$5$$;
    $self$$35$$.$TriggerInternal$($silent$$18$$, $oj$$1$$.$Events$.$EventType$.ERROR, $self$$35$$, $xhr$$12$$, $options$$88$$);
  };
  $oj$$1$$.$Model$.prototype.save = function $$oj$$1$$$$Model$$$save$($attributes$$6$$, $options$$89$$) {
    var $argResults_forceNew$$, $success$$12$$, $callback$$72$$, $self$$36$$, $userErr$$1$$, $patch$$;
    $argResults_forceNew$$ = $oj$$1$$.$Model$.$_processArgs$(arguments);
    var $opts$$7$$, $oldAttrs$$, $attrArgs$$;
    $attrArgs$$ = void 0 === $attributes$$6$$ ? void 0 : $argResults_forceNew$$.attributes;
    $options$$89$$ = $options$$89$$ || {};
    $opts$$7$$ = $oj$$1$$.$Model$.$_copyOptions$($argResults_forceNew$$.options);
    if (!this.$_checkValid$(this.attributes, $opts$$7$$, !0)) {
      return!1;
    }
    $opts$$7$$.wait || this.set($attrArgs$$);
    $argResults_forceNew$$ = void 0 === $opts$$7$$.forceNew ? !1 : $opts$$7$$.forceNew;
    $self$$36$$ = this;
    $userErr$$1$$ = $opts$$7$$.error;
    $patch$$ = $opts$$7$$.patch;
    $opts$$7$$.error = function $$opts$$7$$$error$($xhr$$13$$, $status$$11$$, $err$$6$$) {
      $oj$$1$$.$Model$.$_triggerError$($self$$36$$, !1, $options$$89$$, $status$$11$$, $err$$6$$, $xhr$$13$$);
      $userErr$$1$$ && $userErr$$1$$.apply($self$$36$$, arguments);
    };
    $opts$$7$$.saveAttrs = $opts$$7$$.wait ? this.$_attrUnion$($attrArgs$$) : this.attributes;
    $oldAttrs$$ = this.attributes;
    this.attributes = $opts$$7$$.saveAttrs;
    $opts$$7$$.saveAttrs = this.toJSON();
    this.attributes = $oldAttrs$$;
    if (!$argResults_forceNew$$ && !this.$isNew$()) {
      return $success$$12$$ = $opts$$7$$.success, $opts$$7$$.success = function $$opts$$7$$$success$($resp$$5$$) {
        var $attrs$$13$$;
        $opts$$7$$.xhr && ($options$$89$$.xhr = $opts$$7$$.xhr);
        $resp$$5$$ && ($attrs$$13$$ = $$$$1$$.isFunction($self$$36$$.parse) ? $self$$36$$.parse($resp$$5$$) : $resp$$5$$, $self$$36$$.attributes = $$$$1$$.extend(!0, $self$$36$$.attributes, $attrs$$13$$), $self$$36$$.$SetupId$());
        $oj$$1$$.$Model$.$_fireSyncEvent$($self$$36$$, $resp$$5$$, $opts$$7$$);
        $opts$$7$$.wait && $self$$36$$.set($attrArgs$$);
        $success$$12$$ && $success$$12$$.call($oj$$1$$.$Model$.$GetContext$($opts$$7$$, $self$$36$$), $self$$36$$, $resp$$5$$, $options$$89$$);
        $self$$36$$.$_clearChanged$();
      }, $opts$$7$$.attrs || ($opts$$7$$.attrs = void 0 === $attrArgs$$ ? void 0 : $patch$$ ? $attrArgs$$ : $opts$$7$$.saveAttrs), $oj$$1$$.$Model$.$_internalSync$($patch$$ ? "patch" : "update", this, $opts$$7$$);
    }
    $callback$$72$$ = $oj$$1$$.$Model$.$_getSuccess$($opts$$7$$);
    $opts$$7$$.success = function $$opts$$7$$$success$($resp$$6$$) {
      var $attrs$$14$$;
      $opts$$7$$.xhr && ($options$$89$$.xhr = $opts$$7$$.xhr);
      if ($resp$$6$$) {
        $attrs$$14$$ = $$$$1$$.isFunction($self$$36$$.parse) ? $self$$36$$.parse($resp$$6$$) : $resp$$6$$;
        if (!$self$$36$$.$_checkValid$($attrs$$14$$, $opts$$7$$, !0)) {
          return;
        }
        $self$$36$$.attributes = $$$$1$$.extend(!0, $self$$36$$.attributes, $attrs$$14$$);
        $self$$36$$.$SetupId$();
      }
      $opts$$7$$.wait && $self$$36$$.set($attrArgs$$);
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$36$$, $resp$$6$$, $opts$$7$$);
      $callback$$72$$ && $callback$$72$$.call($oj$$1$$.$Model$.$GetContext$($opts$$7$$, $self$$36$$), $self$$36$$, $resp$$6$$, $options$$89$$);
      $self$$36$$.$_clearChanged$();
    };
    $opts$$7$$.attrs || ($opts$$7$$.attrs = $opts$$7$$.saveAttrs);
    $opts$$7$$.parse = !0;
    $patch$$ && ($opts$$7$$.saveAttrs = $opts$$7$$.attrs);
    return $oj$$1$$.$Model$.$_internalSync$("create", this, $opts$$7$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.save", {save:$oj$$1$$.$Model$.prototype.save});
  $oj$$1$$.$Model$.prototype.$_attrUnion$ = function $$oj$$1$$$$Model$$$$_attrUnion$$($attrs$$15$$) {
    var $attrReturn$$ = {}, $prop$$42$$;
    for ($prop$$42$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$42$$) && ($attrReturn$$[$prop$$42$$] = this.attributes[$prop$$42$$]);
    }
    for ($prop$$42$$ in $attrs$$15$$) {
      $attrs$$15$$.hasOwnProperty($prop$$42$$) && ($attrReturn$$[$prop$$42$$] = $attrs$$15$$[$prop$$42$$]);
    }
    return $attrReturn$$;
  };
  $oj$$1$$.$Model$.$GetPropValue$ = function $$oj$$1$$$$Model$$$GetPropValue$$($obj$$48$$, $property$$11$$) {
    return $obj$$48$$ ? $$$$1$$.isFunction($obj$$48$$[$property$$11$$]) ? $obj$$48$$[$property$$11$$]() : $obj$$48$$[$property$$11$$] : $$$$1$$.isFunction($property$$11$$) ? $property$$11$$() : $property$$11$$;
  };
  $oj$$1$$.$Model$.$IsComplexValue$ = function $$oj$$1$$$$Model$$$IsComplexValue$$($val$$17$$) {
    return $val$$17$$ && $val$$17$$.hasOwnProperty("value") && $val$$17$$.hasOwnProperty("comparator");
  };
  $oj$$1$$.$Model$.prototype.$_hasAttrs$ = function $$oj$$1$$$$Model$$$$_hasAttrs$$($attrs$$16$$) {
    for (var $prop$$43$$ in $attrs$$16$$) {
      if ($attrs$$16$$.hasOwnProperty($prop$$43$$)) {
        if (!this.attributes.hasOwnProperty($prop$$43$$)) {
          return!1;
        }
        for (var $val$$18$$ = Array.isArray($attrs$$16$$[$prop$$43$$]) ? $attrs$$16$$[$prop$$43$$] : [$attrs$$16$$[$prop$$43$$]], $i$$73$$ = 0;$i$$73$$ < $val$$18$$.length;$i$$73$$++) {
          if ($oj$$1$$.$Model$.$IsComplexValue$($val$$18$$[$i$$73$$])) {
            var $comparator$$8$$ = $val$$18$$[$i$$73$$].comparator, $value$$66$$ = $val$$18$$[$i$$73$$].value;
            if ($oj$$1$$.$StringUtils$.$isString$($comparator$$8$$)) {
              throw Error("String comparator invalid for local where/findWhere");
            }
            if (!$comparator$$8$$(this, $prop$$43$$, $value$$66$$)) {
              return!1;
            }
          } else {
            if ($attrs$$16$$[$prop$$43$$] !== this.attributes[$prop$$43$$]) {
              return!1;
            }
          }
        }
      }
    }
    return!0;
  };
  $oj$$1$$.$Model$.prototype.matches = function $$oj$$1$$$$Model$$$matches$($JSCompiler_inline_result$$4_attrs$$17$$) {
    a: {
      for (var $prop$$inline_371$$ in $JSCompiler_inline_result$$4_attrs$$17$$) {
        if (this.get($prop$$inline_371$$) !== $JSCompiler_inline_result$$4_attrs$$17$$[$prop$$inline_371$$]) {
          $JSCompiler_inline_result$$4_attrs$$17$$ = !1;
          break a;
        }
      }
      $JSCompiler_inline_result$$4_attrs$$17$$ = !0;
    }
    return $JSCompiler_inline_result$$4_attrs$$17$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.matches", {matches:$oj$$1$$.$Model$.prototype.matches});
  $oj$$1$$.$Model$.prototype.$Contains$ = function $$oj$$1$$$$Model$$$$Contains$$($attrList_attrs$$18$$) {
    $attrList_attrs$$18$$ = $attrList_attrs$$18$$.constructor === Array ? $attrList_attrs$$18$$ : [$attrList_attrs$$18$$];
    var $i$$74$$;
    for ($i$$74$$ = 0;$i$$74$$ < $attrList_attrs$$18$$.length;$i$$74$$++) {
      if (this.$_hasAttrs$($attrList_attrs$$18$$[$i$$74$$])) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$1$$.$Model$.$_getSuccess$ = function $$oj$$1$$$$Model$$$_getSuccess$$($options$$90$$) {
    return null != $options$$90$$ && $options$$90$$.success ? $options$$90$$.success : null;
  };
  $oj$$1$$.$Model$.$GetContext$ = function $$oj$$1$$$$Model$$$GetContext$$($options$$91$$, $model$$50$$) {
    return void 0 !== $options$$91$$ && void 0 !== $options$$91$$.context ? $options$$91$$.context : $model$$50$$;
  };
  $oj$$1$$.$Model$.prototype.$isNew$ = function $$oj$$1$$$$Model$$$$isNew$$() {
    return void 0 == this.$GetId$();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.isNew", {$isNew$:$oj$$1$$.$Model$.prototype.$isNew$});
  $oj$$1$$.$Model$.prototype.$_getIdAttr$ = function $$oj$$1$$$$Model$$$$_getIdAttr$$() {
    return this.idAttribute || "id";
  };
  $oj$$1$$.$Model$.prototype.$GetId$ = function $$oj$$1$$$$Model$$$$GetId$$() {
    return this.id;
  };
  $oj$$1$$.$Model$.prototype.$changedAttributes$ = function $$oj$$1$$$$Model$$$$changedAttributes$$($attributes$$7$$) {
    if ($attributes$$7$$) {
      var $internalChanges$$ = {}, $prop$$45$$;
      for ($prop$$45$$ in $attributes$$7$$) {
        $attributes$$7$$.hasOwnProperty($prop$$45$$) && ($oj$$1$$.$Object$.$__innerEquals$($attributes$$7$$[$prop$$45$$], this.attributes[$prop$$45$$]) || ($internalChanges$$[$prop$$45$$] = $attributes$$7$$[$prop$$45$$]));
      }
      return $oj$$1$$.$Object$.$isEmpty$($internalChanges$$) ? !1 : $internalChanges$$;
    }
    return $oj$$1$$.$Object$.$isEmpty$(this.changed) ? !1 : this.changed;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.changedAttributes", {$changedAttributes$:$oj$$1$$.$Model$.prototype.$changedAttributes$});
  $oj$$1$$.$Model$.prototype.$hasChanged$ = function $$oj$$1$$$$Model$$$$hasChanged$$($attribute$$) {
    return void 0 !== $attribute$$ ? $oj$$1$$.$Model$.$_hasProperties$(this.changed) && this.changed.hasOwnProperty($attribute$$) : $oj$$1$$.$Model$.$_hasProperties$(this.changed);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.hasChanged", {$hasChanged$:$oj$$1$$.$Model$.prototype.$hasChanged$});
  $oj$$1$$.$Model$.prototype.destroy = function $$oj$$1$$$$Model$$$destroy$($options$$92$$) {
    $options$$92$$ = $options$$92$$ || {};
    var $isWait$$ = $options$$92$$.wait, $callback$$73$$, $userErr$$2$$ = $options$$92$$.error, $self$$37$$ = this, $xhr$$15$$, $opts$$8$$;
    $opts$$8$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$92$$);
    $callback$$73$$ = $oj$$1$$.$Model$.$_getSuccess$($opts$$8$$);
    var $collection$$28$$ = this.$GetCollection$();
    $opts$$8$$.success = function $$opts$$8$$$success$($data$$39$$) {
      $opts$$8$$.xhr && ($options$$92$$.xhr = $opts$$8$$.xhr);
      if ($collection$$28$$) {
        var $props$$3$$ = $oj$$1$$.$StringUtils$.$isString$($data$$39$$) && !$oj$$1$$.$StringUtils$.$isEmpty$($data$$39$$) ? JSON.parse($data$$39$$) : $data$$39$$;
        $collection$$28$$.$_setPagingReturnValues$($props$$3$$, null, $data$$39$$, !0);
      }
      $isWait$$ && $self$$37$$.$_fireDestroy$();
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$37$$, $data$$39$$, $opts$$8$$);
      $callback$$73$$ && $callback$$73$$.call($oj$$1$$.$Model$.$GetContext$($opts$$8$$, $self$$37$$), $self$$37$$, $data$$39$$, $options$$92$$);
    };
    $opts$$8$$.error = function $$opts$$8$$$error$($xhr$$17$$, $status$$14$$, $err$$7$$) {
      $self$$37$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.ERROR, $self$$37$$, $xhr$$17$$, $options$$92$$);
      $userErr$$2$$ && $userErr$$2$$.apply($self$$37$$, arguments);
    };
    if (!this.$isNew$()) {
      return $xhr$$15$$ = $oj$$1$$.$Model$.$_internalSync$("delete", this, $opts$$8$$), $isWait$$ || this.$_fireDestroy$(), $xhr$$15$$;
    }
    $isWait$$ || this.$_fireDestroy$();
    $callback$$73$$ && $callback$$73$$.call($oj$$1$$.$Model$.$GetContext$($opts$$8$$, $self$$37$$), $self$$37$$, null, $options$$92$$);
    return!1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.destroy", {destroy:$oj$$1$$.$Model$.prototype.destroy});
  $oj$$1$$.$Model$.prototype.$_fireRequest$ = function $$oj$$1$$$$Model$$$$_fireRequest$$($model$$51$$, $xhr$$18$$, $options$$93$$, $silent$$19$$) {
    this.$TriggerInternal$($silent$$19$$, $oj$$1$$.$Events$.$EventType$.REQUEST, $model$$51$$, $xhr$$18$$, $options$$93$$);
  };
  $oj$$1$$.$Model$.prototype.$_fireDestroy$ = function $$oj$$1$$$$Model$$$$_fireDestroy$$() {
    this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.DESTROY, this, this.collection, null);
  };
  $oj$$1$$.$Model$.$_fireSyncEvent$ = function $$oj$$1$$$$Model$$$_fireSyncEvent$$($model$$52$$, $resp$$7$$, $options$$94$$) {
    $model$$52$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.SYNC, $model$$52$$, $resp$$7$$, $options$$94$$);
  };
  $oj$$1$$.$Model$.prototype.toJSON = function $$oj$$1$$$$Model$$$toJSON$() {
    var $retObj$$8$$ = {}, $prop$$46$$;
    for ($prop$$46$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$46$$) && (Array.isArray(this.attributes[$prop$$46$$]) ? $retObj$$8$$[$prop$$46$$] = this.attributes[$prop$$46$$].slice(0) : $retObj$$8$$[$prop$$46$$] = this.attributes[$prop$$46$$]);
    }
    return $retObj$$8$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.toJSON", {toJSON:$oj$$1$$.$Model$.prototype.toJSON});
  $oj$$1$$.$Model$.prototype.$previous$ = function $$oj$$1$$$$Model$$$$previous$$($attr$$9$$) {
    return this.$previousAttrs$[$attr$$9$$];
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.previous", {$previous$:$oj$$1$$.$Model$.prototype.$previous$});
  $oj$$1$$.$Model$.prototype.$previousAttributes$ = function $$oj$$1$$$$Model$$$$previousAttributes$$() {
    return this.$previousAttrs$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.previousAttributes", {$previousAttributes$:$oj$$1$$.$Model$.prototype.$previousAttributes$});
  $oj$$1$$.$Model$.prototype.sync = function $$oj$$1$$$$Model$$$sync$($method$$3$$, $model$$53$$, $options$$95$$) {
    return window.oj.sync($method$$3$$, $model$$53$$, $options$$95$$);
  };
  $oj$$1$$.$Model$.$_internalSync$ = function $$oj$$1$$$$Model$$$_internalSync$$($method$$4$$, $model$$54$$, $options$$96$$) {
    $options$$96$$ = $options$$96$$ || {};
    $model$$54$$.oauth && ($options$$96$$.oauthHeader = $model$$54$$.oauth.getHeader());
    !$options$$96$$.dataType && $model$$54$$.dataType && ($options$$96$$.dataType = $model$$54$$.dataType);
    !$options$$96$$.jsonpCallback && $model$$54$$.jsonpCallback && ($options$$96$$.jsonpCallback = $model$$54$$.jsonpCallback);
    if ("create" === $method$$4$$ || "patch" === $method$$4$$ || "update" === $method$$4$$) {
      $options$$96$$.$parsedData$ = $model$$54$$.parseSave.call($model$$54$$, "patch" === $method$$4$$ ? $options$$96$$.attrs : $options$$96$$.saveAttrs);
    }
    var $recordId_urlOpt$$ = null;
    $model$$54$$ instanceof $oj$$1$$.$Model$ && ($recordId_urlOpt$$ = $model$$54$$.$GetId$());
    var $newOpt$$ = {};
    if ($options$$96$$) {
      for (var $prop$$47$$ in $options$$96$$) {
        $newOpt$$[$prop$$47$$] = $options$$96$$[$prop$$47$$];
      }
    }
    $recordId_urlOpt$$ = $oj$$1$$.$Model$.$SetCustomURLOptions$($recordId_urlOpt$$, $model$$54$$, $options$$96$$);
    for ($prop$$47$$ in $recordId_urlOpt$$) {
      $newOpt$$[$prop$$47$$] = $recordId_urlOpt$$[$prop$$47$$];
    }
    $options$$96$$.xhr = $model$$54$$.sync($method$$4$$, $model$$54$$, $newOpt$$);
    $newOpt$$.xhr && ($options$$96$$.xhr = $newOpt$$.xhr);
    return $options$$96$$.xhr;
  };
  $oj$$1$$.$Model$.$SetCustomURLOptions$ = function $$oj$$1$$$$Model$$$SetCustomURLOptions$$($recordID$$, $context$$25_options$$97$$, $opt$$16$$) {
    $context$$25_options$$97$$ = $context$$25_options$$97$$ instanceof $oj$$1$$.$Collection$ ? $context$$25_options$$97$$.$ModifyOptionsForCustomURL$($opt$$16$$) : {};
    $recordID$$ && ($context$$25_options$$97$$.recordID = $recordID$$);
    return $context$$25_options$$97$$;
  };
  $oj$$1$$.$sync$ = function $$oj$$1$$$$sync$$($method$$5_url$$19$$, $model$$55$$, $options$$98$$) {
    function $_fireAndReturn$$($xhr$$19$$) {
      $model$$55$$.$_fireRequest$($model$$55$$, $xhr$$19$$, $options$$98$$, $options$$98$$.silent);
      return $xhr$$19$$;
    }
    $options$$98$$ = $options$$98$$ || {};
    var $customURL$$1_restService$$, $success$$13$$ = $options$$98$$.success, $error$$11$$ = $options$$98$$.error;
    $customURL$$1_restService$$ = $model$$55$$.customURL;
    if ("create" === $method$$5_url$$19$$.valueOf()) {
      return $method$$5_url$$19$$ = ($method$$5_url$$19$$ = $model$$55$$.$_saveUrl$()) ? $method$$5_url$$19$$ : $oj$$1$$.$Model$.$GetPropValue$($model$$55$$, "url"), $customURL$$1_restService$$ = new $oj$$1$$.$RestImpl$($method$$5_url$$19$$, $customURL$$1_restService$$), $_fireAndReturn$$($customURL$$1_restService$$.$addRecord$($options$$98$$.$parsedData$, $error$$11$$, $options$$98$$, $model$$55$$));
    }
    if ("read" === $method$$5_url$$19$$.valueOf()) {
      if ($model$$55$$ instanceof $oj$$1$$.$Model$) {
        return $method$$5_url$$19$$ = $options$$98$$.url ? $options$$98$$.url : $oj$$1$$.$Model$.$GetPropValue$($model$$55$$, "url"), $customURL$$1_restService$$ = new $oj$$1$$.$RestImpl$($method$$5_url$$19$$, $customURL$$1_restService$$), $_fireAndReturn$$($customURL$$1_restService$$.$getRecord$($success$$13$$, $error$$11$$, $model$$55$$.$GetId$(), $options$$98$$, $oj$$1$$.$Model$.$GetContext$($options$$98$$, $model$$55$$)));
      }
      $method$$5_url$$19$$ = $model$$55$$.$GetCollectionFetchUrl$($options$$98$$);
      $customURL$$1_restService$$ = new $oj$$1$$.$RestImpl$($method$$5_url$$19$$, $customURL$$1_restService$$);
      return $_fireAndReturn$$($customURL$$1_restService$$.$getRecords$($success$$13$$, $error$$11$$, $options$$98$$, $model$$55$$));
    }
    $customURL$$1_restService$$ = new $oj$$1$$.$RestImpl$($oj$$1$$.$Model$.$GetPropValue$($model$$55$$, "url"), $customURL$$1_restService$$);
    var $recordId$$1$$ = null;
    $model$$55$$ instanceof $oj$$1$$.$Model$ && ($recordId$$1$$ = $model$$55$$.$GetId$());
    return "update" === $method$$5_url$$19$$.valueOf() ? $_fireAndReturn$$($customURL$$1_restService$$.$updateRecord$($success$$13$$, $recordId$$1$$, $options$$98$$.$parsedData$, $error$$11$$, $options$$98$$, $model$$55$$, !1)) : "patch" === $method$$5_url$$19$$.valueOf() ? $_fireAndReturn$$($customURL$$1_restService$$.$updateRecord$($success$$13$$, $recordId$$1$$, $options$$98$$.$parsedData$, $error$$11$$, $options$$98$$, $model$$55$$, !0)) : "delete" === $method$$5_url$$19$$.valueOf() ? $_fireAndReturn$$($customURL$$1_restService$$.$deleteRecord$($recordId$$1$$, 
    $error$$11$$, $options$$98$$, $model$$55$$)) : null;
  };
  $goog$exportPath_$$("sync", $oj$$1$$.$sync$, $oj$$1$$);
  $oj$$1$$.$Model$.$_urlError$ = function $$oj$$1$$$$Model$$$_urlError$$($ajaxOptions$$) {
    if (!$ajaxOptions$$.url) {
      throw Error("The url property or function must be specified");
    }
  };
  $oj$$1$$.ajax = function $$oj$$1$$$ajax$() {
    arguments && 0 < arguments.length && $oj$$1$$.$Model$.$_urlError$(arguments[0]);
    return $$$$1$$.ajax.apply(window.oj, arguments);
  };
  $goog$exportPath_$$("ajax", $oj$$1$$.ajax, $oj$$1$$);
  $oj$$1$$.$OAuth$ = function $$oj$$1$$$$OAuth$$($header$$2$$, $attributes$$8$$) {
    $attributes$$8$$ = $attributes$$8$$ || {};
    $oj$$1$$.$OAuth$._init(this, $attributes$$8$$, $header$$2$$ || "Authorization");
  };
  $goog$exportPath_$$("OAuth", $oj$$1$$.$OAuth$, $oj$$1$$);
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$OAuth$, $oj$$1$$.$Object$, "oj.OAuth");
  $oj$$1$$.$OAuth$.prototype.Init = function $$oj$$1$$$$OAuth$$$Init$() {
    $oj$$1$$.$OAuth$.$superclass$.Init.call(this);
  };
  $oj$$1$$.$OAuth$.prototype.$getHeader$ = function $$oj$$1$$$$OAuth$$$$getHeader$$() {
    var $headers$$ = {};
    this.$accessTokenResponse$.access_token || this.$clientCredentialGrant$();
    $headers$$[this.$accessTokenRequest$.$auth_header$] = "Bearer " + this.$accessTokenResponse$.access_token;
    return $headers$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getHeader", {$getHeader$:$oj$$1$$.$OAuth$.prototype.$getHeader$});
  $oj$$1$$.$OAuth$.prototype.$isInitialized$ = function $$oj$$1$$$$OAuth$$$$isInitialized$$() {
    return this.$accessTokenResponse$.$access_token$ ? !0 : !1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.isInitialized", {$isInitialized$:$oj$$1$$.$OAuth$.prototype.$isInitialized$});
  $oj$$1$$.$OAuth$.prototype.$clientCredentialGrant$ = function $$oj$$1$$$$OAuth$$$$clientCredentialGrant$$() {
    var $headers$$1$$ = {}, $self$$38$$ = this;
    $headers$$1$$[$self$$38$$.$accessTokenRequest$.$auth_header$] = "Basic " + $oj$$1$$.$OAuth$.$_base64_encode$($self$$38$$.$accessTokenRequest$.client_id + ":" + $self$$38$$.$accessTokenRequest$.client_secret);
    $$$$1$$.ajax({type:"POST", async:!1, url:this.$accessTokenRequest$.bearer_url, data:"grant_type\x3dclient_credentials", headers:$headers$$1$$, success:function($data$$40$$) {
      $oj$$1$$.$OAuth$.$_initAccessToken$($self$$38$$.$accessTokenResponse$, $data$$40$$);
    }, error:function($jqXHR$$1$$) {
      throw Error($jqXHR$$1$$.responseText);
    }});
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.clientCredentialGrant", {$clientCredentialGrant$:$oj$$1$$.$OAuth$.prototype.$clientCredentialGrant$});
  $oj$$1$$.$OAuth$.prototype.$setAccessTokenResponse$ = function $$oj$$1$$$$OAuth$$$$setAccessTokenResponse$$($data$$41$$) {
    $oj$$1$$.$OAuth$.$_initAccessToken$(this.$accessTokenResponse$, $data$$41$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.setAccessTokenResponse", {$setAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$setAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$getAccessTokenResponse$ = function $$oj$$1$$$$OAuth$$$$getAccessTokenResponse$$() {
    return this.$accessTokenResponse$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getAccessTokenResponse", {$getAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$getAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$cleanAccessTokenResponse$ = function $$oj$$1$$$$OAuth$$$$cleanAccessTokenResponse$$() {
    $oj$$1$$.$OAuth$.$_cleanAccessToken$(this.$accessTokenResponse$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.cleanAccessTokenResponse", {$cleanAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$cleanAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$setAccessTokenRequest$ = function $$oj$$1$$$$OAuth$$$$setAccessTokenRequest$$($data$$42$$) {
    $oj$$1$$.$OAuth$.$_initAccessToken$(this.$accessTokenRequest$, $data$$42$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.setAccessTokenRequest", {$setAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$setAccessTokenRequest$});
  $oj$$1$$.$OAuth$.prototype.$getAccessTokenRequest$ = function $$oj$$1$$$$OAuth$$$$getAccessTokenRequest$$() {
    return this.$accessTokenRequest$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getAccessTokenRequest", {$getAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$getAccessTokenRequest$});
  $oj$$1$$.$OAuth$.prototype.$cleanAccessTokenRequest$ = function $$oj$$1$$$$OAuth$$$$cleanAccessTokenRequest$$() {
    $oj$$1$$.$OAuth$.$_cleanAccessToken$(this.$accessTokenRequest$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.cleanAccessTokenRequest", {$cleanAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$cleanAccessTokenRequest$});
  $oj$$1$$.$OAuth$._init = function $$oj$$1$$$$OAuth$$_init$($oauth$$, $attributes$$9$$, $header$$3$$) {
    $oauth$$.Init();
    $oauth$$.$accessTokenRequest$ = {};
    $oauth$$.$accessTokenResponse$ = {};
    $attributes$$9$$.access_token ? $oj$$1$$.$OAuth$.$_initAccessToken$($oauth$$.$accessTokenResponse$, $attributes$$9$$) : $attributes$$9$$.client_id && $attributes$$9$$.client_secret && $attributes$$9$$.bearer_url && $oj$$1$$.$OAuth$.$_initAccessToken$($oauth$$.$accessTokenRequest$, $attributes$$9$$);
    $oauth$$.$accessTokenRequest$.$auth_header$ = $header$$3$$;
  };
  $oj$$1$$.$OAuth$.$_initAccessToken$ = function $$oj$$1$$$$OAuth$$$_initAccessToken$$($oauthObj$$, $data$$43$$) {
    var $prop$$48$$;
    $data$$43$$ = $data$$43$$ || {};
    for ($prop$$48$$ in $data$$43$$) {
      $oauthObj$$[$prop$$48$$] = $data$$43$$[$prop$$48$$];
    }
  };
  $oj$$1$$.$OAuth$.$_cleanAccessToken$ = function $$oj$$1$$$$OAuth$$$_cleanAccessToken$$($oauthObj$$1$$) {
    for (var $key$$25$$ in $oauthObj$$1$$) {
      $oauthObj$$1$$.hasOwnProperty($key$$25$$) && "auth_header" !== $key$$25$$ && ($oauthObj$$1$$[$key$$25$$] = null, delete $oauthObj$$1$$[$key$$25$$]);
    }
  };
  $oj$$1$$.$OAuth$.$_base64_encode$ = function $$oj$$1$$$$OAuth$$$_base64_encode$$($a$$97$$) {
    var $d$$, $e$$28$$, $f$$, $b$$54$$, $g$$ = 0, $h$$4$$ = 0, $c$$30$$ = [];
    do {
      $d$$ = $a$$97$$.charCodeAt($g$$++), $e$$28$$ = $a$$97$$.charCodeAt($g$$++), $f$$ = $a$$97$$.charCodeAt($g$$++), $b$$54$$ = $d$$ << 16 | $e$$28$$ << 8 | $f$$, $d$$ = $b$$54$$ >> 18 & 63, $e$$28$$ = $b$$54$$ >> 12 & 63, $f$$ = $b$$54$$ >> 6 & 63, $b$$54$$ &= 63, $c$$30$$[$h$$4$$++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($d$$) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($e$$28$$) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($f$$) + 
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($b$$54$$);
    } while ($g$$ < $a$$97$$.length);
    $c$$30$$ = $c$$30$$.join("");
    $d$$ = $a$$97$$.length % 3;
    return($d$$ ? $c$$30$$.slice(0, $d$$ - 3) : $c$$30$$) + "\x3d\x3d\x3d".slice($d$$ || 3);
  };
  $oj$$1$$.$RestImpl$ = function $$oj$$1$$$$RestImpl$$($rootURL$$, $custom$$1$$) {
    this.$rootURL$ = $rootURL$$;
    this.$customURL$ = $custom$$1$$;
    $$$$1$$.support.cors = !0;
  };
  $oj$$1$$.$RestImpl$.$_HEADER_PROP$ = "headers";
  $oj$$1$$.$RestImpl$.$addOptions$ = function $$oj$$1$$$$RestImpl$$$addOptions$$($starter$$, $options$$99$$, $customOptions$$) {
    var $prop$$49$$;
    $starter$$ = $$$$1$$.extend(!0, $starter$$, $customOptions$$);
    for ($prop$$49$$ in $options$$99$$) {
      $options$$99$$.hasOwnProperty($prop$$49$$) && "oauthHeader" !== $prop$$49$$ && ($starter$$.hasOwnProperty($prop$$49$$) || ($starter$$[$prop$$49$$] = $options$$99$$[$prop$$49$$]), $prop$$49$$ === $oj$$1$$.$RestImpl$.$_HEADER_PROP$ && ($starter$$[$prop$$49$$] = $$$$1$$.extend(!0, $starter$$[$prop$$49$$], $options$$99$$[$prop$$49$$])));
    }
    if ($options$$99$$.oauthHeader) {
      for ($prop$$49$$ in $starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] || ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] = {}), $options$$99$$.oauthHeader) {
        $options$$99$$.oauthHeader.hasOwnProperty($prop$$49$$) && ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$].hasOwnProperty($prop$$49$$) || ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$][$prop$$49$$] = $options$$99$$.oauthHeader[$prop$$49$$]));
      }
    }
    return $starter$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$getRecords$ = function $$oj$$1$$$$RestImpl$$$$getRecords$$($ajaxOptions$$1_callback$$74$$, $errFunc$$1$$, $options$$100$$, $context$$26$$) {
    $options$$100$$ = $options$$100$$ || {};
    var $isJsonp$$ = "jsonp" === $options$$100$$.dataType, $urlInfo$$ = this.$_getURL$("read", this.$rootURL$, this.$customURL$, null, $context$$26$$, $options$$100$$);
    $ajaxOptions$$1_callback$$74$$ = {crossDomain:$options$$100$$.crossDomain || !$isJsonp$$, dataType:this.$_getDataType$($options$$100$$), jsonpCallback:$options$$100$$.jsonpCallback, context:null !== $context$$26$$ ? $context$$26$$ : this, success:$ajaxOptions$$1_callback$$74$$, error:$errFunc$$1$$};
    $ajaxOptions$$1_callback$$74$$ = this.$_addHeaderProp$($ajaxOptions$$1_callback$$74$$);
    $ajaxOptions$$1_callback$$74$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$1_callback$$74$$, $options$$100$$, $urlInfo$$);
    $options$$100$$.xhr = this.ajax($ajaxOptions$$1_callback$$74$$);
    return $options$$100$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$_addHeaderProp$ = function $$oj$$1$$$$RestImpl$$$$_addHeaderProp$$($options$$101$$) {
    $options$$101$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] = {"Accept-Language":this.$getLocale$()};
    return $options$$101$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$getRecord$ = function $$oj$$1$$$$RestImpl$$$$getRecord$$($ajaxOptions$$2_success$$14$$, $error$$12$$, $recordID$$1_urlInfo$$1$$, $options$$102$$, $context$$27$$) {
    $options$$102$$ = $options$$102$$ || {};
    var $isJsonp$$1$$ = "jsonp" === $options$$102$$.dataType;
    $recordID$$1_urlInfo$$1$$ = this.$_getURL$("read", this.$rootURL$, this.$customURL$, $recordID$$1_urlInfo$$1$$, $context$$27$$, $options$$102$$);
    $ajaxOptions$$2_success$$14$$ = {crossDomain:$options$$102$$.crossDomain || !$isJsonp$$1$$, dataType:this.$_getDataType$($options$$102$$), jsonpCallback:$options$$102$$.jsonpCallback, context:null !== $context$$27$$ ? $context$$27$$ : this, success:$ajaxOptions$$2_success$$14$$, error:$error$$12$$};
    $ajaxOptions$$2_success$$14$$ = this.$_addHeaderProp$($ajaxOptions$$2_success$$14$$);
    $ajaxOptions$$2_success$$14$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$2_success$$14$$, $options$$102$$, $recordID$$1_urlInfo$$1$$);
    $options$$102$$.xhr = this.ajax($ajaxOptions$$2_success$$14$$);
    return $options$$102$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$updateRecord$ = function $$oj$$1$$$$RestImpl$$$$updateRecord$$($ajaxOptions$$3_callback$$75$$, $recordID$$2_urlInfo$$2$$, $record$$1$$, $error$$13$$, $options$$103$$, $context$$28$$, $emulateHTTP_patch$$1$$) {
    $options$$103$$ = $options$$103$$ || {};
    var $isJsonp$$2$$ = "jsonp" === $options$$103$$.dataType;
    $recordID$$2_urlInfo$$2$$ = this.$_getURL$($emulateHTTP_patch$$1$$ ? "patch" : "update", this.$rootURL$, this.$customURL$, $recordID$$2_urlInfo$$2$$, $context$$28$$, $options$$103$$);
    $emulateHTTP_patch$$1$$ = $oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$103$$);
    $ajaxOptions$$3_callback$$75$$ = {crossDomain:$options$$103$$.crossDomain || !$isJsonp$$2$$, contentType:this.$_getContentType$($options$$103$$), dataType:this.$_getDataType$($options$$103$$), jsonpCallback:$options$$103$$.jsonpCallback, data:this.$_getData$(JSON.stringify($record$$1$$), $options$$103$$, $recordID$$2_urlInfo$$2$$), emulateHTTP:$emulateHTTP_patch$$1$$, emulateJSON:$oj$$1$$.$RestImpl$.$_emulateJSON$($options$$103$$), success:$ajaxOptions$$3_callback$$75$$, error:$error$$13$$, context:null !== 
    $context$$28$$ ? $context$$28$$ : this};
    $ajaxOptions$$3_callback$$75$$ = this.$_addHeaderProp$($ajaxOptions$$3_callback$$75$$);
    $ajaxOptions$$3_callback$$75$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$3_callback$$75$$, $options$$103$$, $recordID$$2_urlInfo$$2$$);
    $ajaxOptions$$3_callback$$75$$ = $oj$$1$$.$RestImpl$.$_beforeSendMod$($emulateHTTP_patch$$1$$, $ajaxOptions$$3_callback$$75$$);
    $options$$103$$.xhr = this.ajax($ajaxOptions$$3_callback$$75$$);
    return $options$$103$$.xhr;
  };
  $oj$$1$$.$RestImpl$.$_beforeSendMod$ = function $$oj$$1$$$$RestImpl$$$_beforeSendMod$$($emulateHTTP$$1$$, $options$$104$$) {
    if ($emulateHTTP$$1$$) {
      var $beforeSend$$ = $options$$104$$.beforeSend;
      $options$$104$$.beforeSend = function $$options$$104$$$beforeSend$($xhr$$20$$) {
        $xhr$$20$$.setRequestHeader("X-HTTP-Method-Override", $options$$104$$.$_method$);
        if ($beforeSend$$) {
          return $beforeSend$$.apply(this, arguments);
        }
      };
    }
    return $options$$104$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$_getData$ = function $$oj$$1$$$$RestImpl$$$$_getData$$($data$$44$$, $options$$105_retObj$$9$$, $urlInfo$$3$$) {
    return $oj$$1$$.$RestImpl$.$_emulateJSON$($options$$105_retObj$$9$$) ? ($options$$105_retObj$$9$$ = {_method:$urlInfo$$3$$.$_method$ ? $urlInfo$$3$$.$_method$ : $urlInfo$$3$$.type}, $data$$44$$ && ($options$$105_retObj$$9$$.model = $data$$44$$), $options$$105_retObj$$9$$) : $data$$44$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$_getHTTPMethod$ = function $$oj$$1$$$$RestImpl$$$$_getHTTPMethod$$($operation$$1$$, $options$$106$$) {
    if ($options$$106$$.type) {
      return{method:$options$$106$$.type};
    }
    var $method$$6$$ = null;
    "create" === $operation$$1$$ && ($method$$6$$ = "POST");
    "delete" === $operation$$1$$ && ($method$$6$$ = "DELETE");
    "patch" === $operation$$1$$ && ($method$$6$$ = "PATCH");
    "update" === $operation$$1$$ && ($method$$6$$ = "PUT");
    if ($oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$106$$)) {
      var $retObj$$10$$ = {method:"POST"};
      $retObj$$10$$.$_method$ = $method$$6$$;
      return $retObj$$10$$;
    }
    null === $method$$6$$ && ($method$$6$$ = "GET");
    return{method:$method$$6$$};
  };
  $oj$$1$$.$RestImpl$.$_emulateHTTP$ = function $$oj$$1$$$$RestImpl$$$_emulateHTTP$$($options$$107$$) {
    return $options$$107$$.emulateHTTP || $oj$$1$$.emulateHTTP;
  };
  $oj$$1$$.$RestImpl$.$_emulateJSON$ = function $$oj$$1$$$$RestImpl$$$_emulateJSON$$($options$$108$$) {
    return $options$$108$$.emulateJSON || $oj$$1$$.emulateJSON;
  };
  $oj$$1$$.$RestImpl$.prototype.$_getURL$ = function $$oj$$1$$$$RestImpl$$$$_getURL$$($operation$$2_result$$1$$, $retObj$$11_rootURL$$1$$, $customURL$$2$$, $recordID$$3$$, $context$$29$$, $options$$109$$) {
    var $httpMethod$$ = this.$_getHTTPMethod$($operation$$2_result$$1$$, $options$$109$$);
    if ($$$$1$$.isFunction($customURL$$2$$)) {
      $operation$$2_result$$1$$ = $customURL$$2$$.call(this, $operation$$2_result$$1$$, $context$$29$$, $oj$$1$$.$Model$.$SetCustomURLOptions$($recordID$$3$$, $context$$29$$, $options$$109$$));
      if ($oj$$1$$.$StringUtils$.$isString$($operation$$2_result$$1$$)) {
        return $retObj$$11_rootURL$$1$$ = {url:$operation$$2_result$$1$$, type:$httpMethod$$.method}, $httpMethod$$.$_method$ && ($retObj$$11_rootURL$$1$$.$_method$ = $httpMethod$$.$_method$), $retObj$$11_rootURL$$1$$;
      }
      if ($operation$$2_result$$1$$) {
        return $operation$$2_result$$1$$.url = $operation$$2_result$$1$$.hasOwnProperty("url") ? $operation$$2_result$$1$$.url : $retObj$$11_rootURL$$1$$, $operation$$2_result$$1$$.hasOwnProperty("type") || ($operation$$2_result$$1$$.type = $httpMethod$$.method), !$operation$$2_result$$1$$.hasOwnProperty("data") && $httpMethod$$.$_method$ && ($operation$$2_result$$1$$.$_method$ = $httpMethod$$.$_method$), $operation$$2_result$$1$$;
      }
    }
    $retObj$$11_rootURL$$1$$ = {url:$oj$$1$$.$Model$.$GetPropValue$(null, $retObj$$11_rootURL$$1$$), type:$httpMethod$$.method};
    $httpMethod$$.$_method$ && ($retObj$$11_rootURL$$1$$.$_method$ = $httpMethod$$.$_method$);
    return $retObj$$11_rootURL$$1$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$deleteRecord$ = function $$oj$$1$$$$RestImpl$$$$deleteRecord$$($recordID$$4_urlInfo$$4$$, $ajaxOptions$$4_error$$14$$, $options$$110$$, $context$$30_data$$45$$) {
    $options$$110$$ = $options$$110$$ || {};
    var $isJsonp$$3$$ = "jsonp" === $options$$110$$.dataType;
    $recordID$$4_urlInfo$$4$$ = this.$_getURL$("delete", this.$rootURL$, this.$customURL$, $recordID$$4_urlInfo$$4$$, $context$$30_data$$45$$, $options$$110$$);
    var $emulateHTTP$$2$$ = $oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$110$$);
    $ajaxOptions$$4_error$$14$$ = {crossDomain:$options$$110$$.crossDomain || !$isJsonp$$3$$, success:$options$$110$$.success, error:$ajaxOptions$$4_error$$14$$, context:null !== $context$$30_data$$45$$ ? $context$$30_data$$45$$ : this, emulateHTTP:$emulateHTTP$$2$$, emulateJSON:$oj$$1$$.$RestImpl$.$_emulateJSON$($options$$110$$)};
    ($context$$30_data$$45$$ = this.$_getData$(null, $options$$110$$, $recordID$$4_urlInfo$$4$$)) && ($ajaxOptions$$4_error$$14$$.data = $context$$30_data$$45$$);
    $ajaxOptions$$4_error$$14$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$4_error$$14$$, $options$$110$$, $recordID$$4_urlInfo$$4$$);
    $ajaxOptions$$4_error$$14$$ = $oj$$1$$.$RestImpl$.$_beforeSendMod$($emulateHTTP$$2$$, $ajaxOptions$$4_error$$14$$);
    $options$$110$$.xhr = this.ajax($ajaxOptions$$4_error$$14$$);
    return $options$$110$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$addRecord$ = function $$oj$$1$$$$RestImpl$$$$addRecord$$($record$$2_urlInfo$$5$$, $ajaxOptions$$5_error$$15$$, $options$$111$$, $context$$31$$) {
    $options$$111$$ = $options$$111$$ || {};
    var $recordStr$$ = JSON.stringify($record$$2_urlInfo$$5$$), $isJsonp$$4$$ = "jsonp" === $options$$111$$.dataType;
    $record$$2_urlInfo$$5$$ = this.$_getURL$("create", this.$rootURL$, this.$customURL$, null, $context$$31$$, $options$$111$$);
    var $emulateHTTP$$3$$ = $oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$111$$);
    $ajaxOptions$$5_error$$15$$ = {crossDomain:$options$$111$$.crossDomain || !$isJsonp$$4$$, contentType:$options$$111$$.contentType || "application/json", dataType:this.$_getDataType$($options$$111$$), jsonpCallback:$options$$111$$.jsonpCallback, data:this.$_getData$($recordStr$$, $options$$111$$, $record$$2_urlInfo$$5$$), success:$options$$111$$.success, error:$ajaxOptions$$5_error$$15$$, emulateHTTP:$emulateHTTP$$3$$, emulateJSON:$oj$$1$$.$RestImpl$.$_emulateJSON$($options$$111$$), context:null !== 
    $context$$31$$ ? $context$$31$$ : this};
    $ajaxOptions$$5_error$$15$$ = this.$_addHeaderProp$($ajaxOptions$$5_error$$15$$);
    $ajaxOptions$$5_error$$15$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$5_error$$15$$, $options$$111$$, $record$$2_urlInfo$$5$$);
    $options$$111$$.xhr = this.ajax($ajaxOptions$$5_error$$15$$);
    return $options$$111$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$_getDataType$ = function $$oj$$1$$$$RestImpl$$$$_getDataType$$($options$$112$$) {
    return $oj$$1$$.$RestImpl$.$_emulateJSON$($options$$112$$) && !$oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$112$$) ? "application/x-www-form-urlencoded" : $options$$112$$.dataType || "json";
  };
  $oj$$1$$.$RestImpl$.prototype.$_getContentType$ = function $$oj$$1$$$$RestImpl$$$$_getContentType$$($options$$113$$) {
    return $oj$$1$$.$RestImpl$.$_emulateJSON$($options$$113$$) && !$oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$113$$) ? "application/x-www-form-urlencoded" : $options$$113$$.contentType || "application/json";
  };
  $oj$$1$$.$RestImpl$.prototype.$getLocale$ = function $$oj$$1$$$$RestImpl$$$$getLocale$$() {
    return $oj$$1$$.$Config$.$getLocale$();
  };
  $oj$$1$$.$RestImpl$.prototype.ajax = function $$oj$$1$$$$RestImpl$$$ajax$($settings$$3$$) {
    if (null === $settings$$3$$.url || void 0 === $settings$$3$$.url) {
      throw new $oj$$1$$.$URLError$;
    }
    return window.oj.ajax($settings$$3$$);
  };
  $oj$$1$$.$URLError$ = function $$oj$$1$$$$URLError$$() {
    this.name = "URLError";
    this.message = "No URL defined";
  };
  $goog$exportPath_$$("URLError", $oj$$1$$.$URLError$, $oj$$1$$);
  $oj$$1$$.$URLError$.prototype = Error();
  $oj$$1$$.$URLError$.constructor = $oj$$1$$.$URLError$;
});
