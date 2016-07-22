/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$12$$, $$$$12$$) {
  var $_ComboUtils$$ = {$GENERATED_OPTIONS_SELECTOR$:"oj-select-options-generated", $KEY$:{TAB:9, ENTER:13, $ESC$:27, SPACE:32, LEFT:37, UP:38, RIGHT:39, DOWN:40, $SHIFT$:16, $CTRL$:17, $ALT$:18, PAGE_UP:33, PAGE_DOWN:34, HOME:36, END:35, $BACKSPACE$:8, $DELETE$:46, $isControl$:function($e$$51$$) {
    switch($e$$51$$.which) {
      case $_ComboUtils$$.$KEY$.$SHIFT$:
      ;
      case $_ComboUtils$$.$KEY$.$CTRL$:
      ;
      case $_ComboUtils$$.$KEY$.$ALT$:
        return!0;
    }
    return $e$$51$$.metaKey || $e$$51$$.ctrlKey ? !0 : !1;
  }, $isFunctionKey$:function($k$$10$$) {
    $k$$10$$ = $k$$10$$.which ? $k$$10$$.which : $k$$10$$;
    return 112 <= $k$$10$$ && 123 >= $k$$10$$;
  }}, $DEFAULT_QUERY_DELAY$:70, $ValueChangeTriggerTypes$:{$ENTER_PRESSED$:"enter_pressed", $OPTION_SELECTED$:"option_selected", $BLUR$:"blur", $SEARCH_ICON_CLICKED$:"search_icon_clicked"}, $lastMousePosition$:{x:0, y:0}, $nextUid$:function() {
    var $counter$$ = 1;
    return function() {
      return $counter$$++;
    };
  }(), $scrollBarDimensions$:null, $each2$:function($list$$1$$, $c$$37$$) {
    for (var $j$$19$$ = $$$$12$$.isFunction($list$$1$$[0]) ? $$$$12$$($list$$1$$[0]()) : $$$$12$$($list$$1$$[0]), $i$$141$$ = -1, $l$$3$$ = $list$$1$$.length;++$i$$141$$ < $l$$3$$ && ($j$$19$$.context = $j$$19$$[0] = $$$$12$$.isFunction($list$$1$$[0]) ? $list$$1$$[$i$$141$$]() : $list$$1$$[$i$$141$$]) && !1 !== $c$$37$$.call($j$$19$$[0], $i$$141$$, $j$$19$$);) {
    }
    return $list$$1$$;
  }, $measureScrollbar$:function() {
    var $$template$$ = $$$$12$$("\x3cdiv class\x3d'oj-listbox-measure-scrollbar'\x3e\x3c/div\x3e");
    $$template$$.appendTo("body");
    var $dim$$ = {width:$$template$$.width() - $$template$$[0].clientWidth, height:$$template$$.height() - $$template$$[0].clientHeight};
    $$template$$.remove();
    return $dim$$;
  }, $splitVal$:function($string$$3$$, $separator$$) {
    var $val$$27$$, $i$$142$$, $l$$4$$;
    if (null === $string$$3$$ || 1 > $string$$3$$.length) {
      return[];
    }
    $val$$27$$ = $string$$3$$.split($separator$$);
    $i$$142$$ = 0;
    for ($l$$4$$ = $val$$27$$.length;$i$$142$$ < $l$$4$$;$i$$142$$ += 1) {
      $val$$27$$[$i$$142$$] = $$$$12$$.trim($val$$27$$[$i$$142$$]);
    }
    return $val$$27$$;
  }, $getSideBorderPadding$:function($element$$75$$) {
    return $element$$75$$.outerWidth(!1) - $element$$75$$.width();
  }, $installKeyUpChangeEvent$:function($element$$76$$) {
    $element$$76$$.on("keydown", function() {
      void 0 === $$$$12$$.data($element$$76$$, "keyup-change-value") && $$$$12$$.data($element$$76$$, "keyup-change-value", $element$$76$$.val());
    });
    $element$$76$$.on("keyup", function($e$$52_val$$28$$) {
      $e$$52_val$$28$$.which === $_ComboUtils$$.$KEY$.ENTER ? $e$$52_val$$28$$.stopPropagation() : ($e$$52_val$$28$$ = $$$$12$$.data($element$$76$$, "keyup-change-value"), void 0 !== $e$$52_val$$28$$ && $element$$76$$.val() !== $e$$52_val$$28$$ && ($$$$12$$.removeData($element$$76$$, "keyup-change-value"), $element$$76$$.trigger("keyup-change")));
    });
  }, $installFilteredMouseMove$:function($element$$77$$) {
    $element$$77$$.on("mousemove", function($e$$53$$) {
      var $lastpos$$ = $_ComboUtils$$.$lastMousePosition$;
      if (void 0 === $lastpos$$ || $lastpos$$.x !== $e$$53$$.pageX || $lastpos$$.y !== $e$$53$$.pageY) {
        $$$$12$$($e$$53$$.target).trigger("mousemove-filtered", $e$$53$$), $_ComboUtils$$.$lastMousePosition$.x = $e$$53$$.pageX, $_ComboUtils$$.$lastMousePosition$.y = $e$$53$$.pageY;
      }
    });
  }, $thunk$:function($formula$$) {
    var $evaluated$$ = !1, $value$$189$$;
    return function() {
      !1 === $evaluated$$ && ($value$$189$$ = $formula$$(), $evaluated$$ = !0);
      return $value$$189$$;
    };
  }, $_focus$:function($$el$$) {
    $$el$$[0] !== document.activeElement && window.setTimeout(function() {
      var $el$$3_range$$5$$ = $$el$$[0], $pos$$5$$ = $$el$$.val().length;
      $$el$$.focus();
      $$el$$.is(":visible") && $el$$3_range$$5$$ === document.activeElement && ($el$$3_range$$5$$.setSelectionRange ? $el$$3_range$$5$$.setSelectionRange($pos$$5$$, $pos$$5$$) : $el$$3_range$$5$$.createTextRange && ($el$$3_range$$5$$ = $el$$3_range$$5$$.createTextRange(), $el$$3_range$$5$$.collapse(!1), $el$$3_range$$5$$.select()));
    }, 40);
  }, $getCursorInfo$:function($el$$4$$) {
    $el$$4$$ = $$$$12$$($el$$4$$)[0];
    var $offset$$16_sel$$ = 0, $length$$13$$ = 0;
    "selectionStart" in $el$$4$$ ? ($offset$$16_sel$$ = $el$$4$$.selectionStart, $length$$13$$ = $el$$4$$.selectionEnd - $offset$$16_sel$$) : "selection" in document && ($el$$4$$.focus(), $offset$$16_sel$$ = document.selection.createRange(), $length$$13$$ = document.selection.createRange().text.length, $offset$$16_sel$$.moveStart("character", -$el$$4$$.value.length), $offset$$16_sel$$ = $offset$$16_sel$$.text.length - $length$$13$$);
    return{offset:$offset$$16_sel$$, length:$length$$13$$};
  }, $killEvent$:function($event$$109$$) {
    $event$$109$$.preventDefault();
    $event$$109$$.stopPropagation();
  }, $killEventImmediately$:function($event$$110$$) {
    $event$$110$$.preventDefault();
    $event$$110$$.stopImmediatePropagation();
  }, $defaultEscapeMarkup$:function($markup$$) {
    var $replace_map$$ = {"\\":"\x26#92;", "\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#39;"};
    return String($markup$$).replace(/[&<>"'\\]/g, function($match$$16$$) {
      return $replace_map$$[$match$$16$$];
    });
  }, $local$:function($options$$223$$, $optKeys$$) {
    function $text$$9$$($item$$6$$) {
      return "" + $item$$6$$.label;
    }
    var $data$$77$$ = $options$$223$$, $dataText$$, $tmp$$1$$;
    $$$$12$$.isArray($data$$77$$) && ($tmp$$1$$ = $data$$77$$, $data$$77$$ = {$results$:$tmp$$1$$});
    !1 === $$$$12$$.isFunction($data$$77$$) && ($tmp$$1$$ = $data$$77$$, $data$$77$$ = function $$data$$77$$$() {
      return $tmp$$1$$;
    });
    var $dataItem$$ = $data$$77$$();
    $dataItem$$ && $dataItem$$.text && ($text$$9$$ = $dataItem$$.text, $$$$12$$.isFunction($text$$9$$) || ($dataText$$ = $dataItem$$.text, $text$$9$$ = function $$text$$9$$$($item$$7$$) {
      return $item$$7$$[$dataText$$];
    }));
    return function($query$$6$$) {
      var $filtered$$ = {$results$:[]};
      "" !== $query$$6$$.$term$ || $optKeys$$ ? ($data$$77$$() && $_ComboUtils$$.$each2$($$$$12$$($data$$77$$().$results$), function($i$$143$$, $datum$$) {
        $_ComboUtils$$.$_processData$($query$$6$$, $datum$$, $filtered$$.$results$, $optKeys$$, !0, $text$$9$$);
      }), $query$$6$$.$callback$($filtered$$)) : $query$$6$$.$callback$($data$$77$$());
    };
  }, $createOptionTag$:function($depth$$4$$, $value$$190$$, $label$$4$$, $formatFunc$$) {
    var $node$$32$$ = $$$$12$$("\x3coption\x3e");
    $node$$32$$.addClass("oj-listbox-result oj-listbox-result-selectable oj-listbox-results-depth-" + $depth$$4$$);
    $node$$32$$.attr("role", "option");
    $node$$32$$.attr("id", "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$());
    $node$$32$$.text($formatFunc$$($label$$4$$));
    $node$$32$$.attr("value", $value$$190$$);
    return $node$$32$$;
  }, $createOptgroupTag$:function($container$$2$$, $label$$5$$, $formatFunc$$1$$) {
    var $node$$33$$ = $$$$12$$("\x3coptgroup\x3e");
    $node$$33$$.addClass("oj-listbox-results-sub");
    $node$$33$$.attr("label", $formatFunc$$1$$($label$$5$$));
    $container$$2$$.addClass("oj-listbox-result-with-children");
    return $node$$33$$;
  }, $listPopulateResults$:function($container$$3$$, $list$$2$$, $formatFunc$$2$$) {
    function $populate$$($container$$4$$, $list$$3$$, $depth$$5$$) {
      var $node$$34$$, $li$$, $label$$6$$, $ul$$;
      $list$$3$$.each(function() {
        $li$$ = $$$$12$$(this);
        $li$$.is("li") && (0 < $li$$.children("ul").length ? ($label$$6$$ = $li$$.contents().filter(function() {
          return 1 !== this.nodeType || "ul" !== this.tagName.toLowerCase();
        }).text(), $node$$34$$ = $_ComboUtils$$.$createOptgroupTag$($container$$4$$, $label$$6$$, $formatFunc$$2$$), $ul$$ = $li$$.children("ul"), $populate$$($node$$34$$, $ul$$.children(), $depth$$5$$ + 1)) : $node$$34$$ = $_ComboUtils$$.$createOptionTag$($depth$$5$$, $li$$.attr("oj-data-value"), $li$$.text(), $formatFunc$$2$$), $node$$34$$.appendTo($container$$4$$));
      });
    }
    $populate$$($container$$3$$, $list$$2$$, 0);
  }, $lookupOptionKeys$:function($result$$29$$, $optionsKeys$$, $key$$60$$) {
    $key$$60$$ = $optionsKeys$$[$key$$60$$] || $key$$60$$;
    return $result$$29$$[$key$$60$$];
  }, $arrayPopulateResults$:function($container$$5$$, $arrlist$$, $formatFunc$$3$$, $optionsKeys$$1$$) {
    function $populate$$1$$($container$$6$$, $arrlist$$1$$, $depth$$6$$, $optionsKeys$$2$$) {
      for (var $item$$8$$, $label$$7_node$$35$$, $children$$1_value$$191$$, $i$$144$$ = 0, $l$$5$$ = $arrlist$$1$$.length;$i$$144$$ < $l$$5$$;$i$$144$$++) {
        $item$$8$$ = $arrlist$$1$$[$i$$144$$], $children$$1_value$$191$$ = $_ComboUtils$$.$lookupOptionKeys$($item$$8$$, $optionsKeys$$2$$, "children"), $label$$7_node$$35$$ = $_ComboUtils$$.$lookupOptionKeys$($item$$8$$, $optionsKeys$$2$$, "label"), $children$$1_value$$191$$ && 0 < $children$$1_value$$191$$.length ? ($label$$7_node$$35$$ = $_ComboUtils$$.$createOptgroupTag$($container$$6$$, $label$$7_node$$35$$, $formatFunc$$3$$), $populate$$1$$($label$$7_node$$35$$, $children$$1_value$$191$$, $depth$$6$$ + 
        1, $optionsKeys$$2$$.childKeys || {})) : ($children$$1_value$$191$$ = $_ComboUtils$$.$lookupOptionKeys$($item$$8$$, $optionsKeys$$2$$, "value"), $label$$7_node$$35$$ = $_ComboUtils$$.$createOptionTag$($depth$$6$$, $children$$1_value$$191$$, $label$$7_node$$35$$, $formatFunc$$3$$)), $label$$7_node$$35$$.appendTo($container$$6$$);
      }
    }
    $populate$$1$$($container$$5$$, $arrlist$$, 0, $optionsKeys$$1$$ || {});
  }, $cleanupResults$:function($container$$7$$) {
    $container$$7$$.children().remove();
    $container$$7$$.removeClass("oj-listbox-result-with-children");
  }, $remote$:function($options$$224$$, $optKeys$$1$$) {
    return function($query$$7$$) {
      var $context$$56$$ = {component:this.$ojContext$};
      $query$$7$$.value ? $context$$56$$.value = $query$$7$$.value : $context$$56$$.term = $query$$7$$.$term$ || "";
      $options$$224$$($context$$56$$).then(function($data$$78$$) {
        var $filtered$$1$$ = {$results$:[]};
        $data$$78$$ && $_ComboUtils$$.$each2$($$$$12$$($data$$78$$), function($i$$145$$, $datum$$1$$) {
          $_ComboUtils$$.$_processData$($query$$7$$, $datum$$1$$, $filtered$$1$$.$results$, $optKeys$$1$$, !1);
        });
        $query$$7$$.$callback$($filtered$$1$$);
      });
    };
  }, $_processData$:function($query$$8$$, $datum$$2$$, $collection$$29$$, $keys$$11$$, $isLocal$$, $text$$10$$) {
    var $group$$, $attr$$14$$;
    $datum$$2$$ = $datum$$2$$[0];
    !$datum$$2$$.label && $keys$$11$$ && $keys$$11$$.label && ($datum$$2$$.label = $datum$$2$$[$keys$$11$$.label]);
    !$datum$$2$$.value && $keys$$11$$ && $keys$$11$$.value && ($datum$$2$$.value = $datum$$2$$[$keys$$11$$.value]);
    !$datum$$2$$.children && $keys$$11$$ && $keys$$11$$.children && ($datum$$2$$.children = $datum$$2$$[$keys$$11$$.children], delete $datum$$2$$[$keys$$11$$.children]);
    if ($datum$$2$$.children) {
      $group$$ = {};
      for ($attr$$14$$ in $datum$$2$$) {
        $datum$$2$$.hasOwnProperty($attr$$14$$) && ($group$$[$attr$$14$$] = $datum$$2$$[$attr$$14$$]);
      }
      $group$$.children = [];
      $_ComboUtils$$.$each2$($$$$12$$($datum$$2$$.children), function($i$$146$$, $childDatum$$) {
        $_ComboUtils$$.$_processData$($query$$8$$, $childDatum$$, $group$$.children, $keys$$11$$ && $keys$$11$$.childKeys ? $keys$$11$$.childKeys : null, $isLocal$$, $text$$10$$);
      });
      (!$isLocal$$ || $group$$.children.length || $query$$8$$.$matcher$($query$$8$$.$term$, $text$$10$$($group$$), $datum$$2$$)) && $collection$$29$$.push($group$$);
    } else {
      $isLocal$$ && !$query$$8$$.$matcher$($query$$8$$.$term$, $text$$10$$($datum$$2$$), $datum$$2$$) || $collection$$29$$.push($datum$$2$$);
    }
  }, $checkFormatter$:function($ojContext$$, $formatter$$, $formatterName$$) {
    if ($$$$12$$.isFunction($formatter$$)) {
      return!0;
    }
    if (!$formatter$$) {
      return!1;
    }
    throw Error($formatterName$$ + " must be a function or a false value");
  }, $clazz$:function($SuperClass$$, $methods$$1$$) {
    function $constructor$$1$$() {
    }
    $oj$$12$$.$Object$.$createSubclass$($constructor$$1$$, $SuperClass$$, "");
    $constructor$$1$$.prototype = $$$$12$$.extend($constructor$$1$$.prototype, $methods$$1$$);
    return $constructor$$1$$;
  }, $LAST_QUERY_RESULT$:"last-query-result", $getLastQueryResult$:function($context$$57$$) {
    return $$$$12$$.data($context$$57$$.$container$, $context$$57$$.$_classNm$ + "-" + $_ComboUtils$$.$LAST_QUERY_RESULT$);
  }, $saveLastQueryResult$:function($context$$58$$, $queryResult$$2$$) {
    $$$$12$$.data($context$$58$$.$container$, $context$$58$$.$_classNm$ + "-" + $_ComboUtils$$.$LAST_QUERY_RESULT$, $queryResult$$2$$);
  }}, $_AbstractOjChoice$$ = $_ComboUtils$$.$clazz$(Object, {$_bind$:function($func$$8$$) {
    var $self$$72$$ = this;
    return function() {
      $func$$8$$.apply($self$$72$$, arguments);
    };
  }, _init:function($opts$$11$$) {
    var $search$$1$$, $className$$6$$ = this.$_classNm$, $disabled$$2_dropdownList_elemName_readonly$$ = this.$_elemNm$;
    this.$ojContext$ = $opts$$11$$.$ojContext$;
    this.$opts$ = $opts$$11$$ = this.$_prepareOpts$($opts$$11$$);
    this.id = $opts$$11$$.id;
    this.$headerInitialized$ = !1;
    void 0 !== $opts$$11$$.element.data($disabled$$2_dropdownList_elemName_readonly$$) && null !== $opts$$11$$.element.data($disabled$$2_dropdownList_elemName_readonly$$) && $opts$$11$$.element.data($disabled$$2_dropdownList_elemName_readonly$$)._destroy();
    this.$container$ = this.$_createContainer$();
    var $rootAttr$$ = this.$opts$.rootAttributes;
    this.$containerId$ = $rootAttr$$ && $rootAttr$$.id ? $rootAttr$$.id : "ojChoiceId_" + ($opts$$11$$.element.attr("id") || "autogen" + $_ComboUtils$$.$nextUid$());
    this.$containerId$.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
    this.$container$.attr("id", this.$containerId$);
    this.body = $_ComboUtils$$.$thunk$(function() {
      return $opts$$11$$.element.closest("body");
    });
    this.$container$.attr("style", $opts$$11$$.element.attr("style"));
    this.$elementTabIndex$ = this.$opts$.element.attr("tabindex");
    this.$opts$.element.data($disabled$$2_dropdownList_elemName_readonly$$, this).attr("tabindex", "-1").before(this.$container$);
    this.$container$.data($disabled$$2_dropdownList_elemName_readonly$$, this);
    this.$dropdown$ = this.$container$.find(".oj-listbox-drop");
    this.$dropdown$.data("ojlistbox", this);
    this.$dropdown$.attr("data-oj-containerid", this.$containerId$);
    this.$results$ = this.$container$.find(".oj-listbox-results");
    this.$results$.on("click", $_ComboUtils$$.$killEvent$);
    $opts$$11$$.list && $$$$12$$("#" + $opts$$11$$.list).is("ul") && ($disabled$$2_dropdownList_elemName_readonly$$ = $$$$12$$("#" + $opts$$11$$.list), this.$dropdownListParent$ = $disabled$$2_dropdownList_elemName_readonly$$.parent(), $disabled$$2_dropdownList_elemName_readonly$$.addClass("oj-listbox-results").attr("role", "listbox"), this.$results$.replaceWith($disabled$$2_dropdownList_elemName_readonly$$), this.$results$ = this.$container$.find(".oj-listbox-results"), this.$results$.css("display", 
    ""));
    this.search = $search$$1$$ = "oj-select" == $className$$6$$ ? this.$container$.find("input.oj-listbox-input") : this.$container$.find("input." + $className$$6$$ + "-input");
    this.$resultsPage$ = this.$queryCount$ = 0;
    this.context = null;
    this.$_initContainer$();
    this.$container$.on("click", $_ComboUtils$$.$killEvent$);
    $_ComboUtils$$.$installFilteredMouseMove$(this.$results$);
    this.$dropdown$.on("mousemove-filtered touchstart touchmove touchend", ".oj-listbox-results", this.$_bind$(this.$_highlightUnderEvent$));
    $$$$12$$(this.$container$).on("change", "." + $className$$6$$ + "-input", function($e$$54$$) {
      $e$$54$$.stopPropagation();
    });
    $$$$12$$(this.$dropdown$).on("change", "." + $className$$6$$ + "-input", function($e$$55$$) {
      $e$$55$$.stopPropagation();
    });
    var $self$$73$$ = this;
    $_ComboUtils$$.$installKeyUpChangeEvent$($search$$1$$);
    $search$$1$$.on("keyup-change input paste", this.$_bind$(this.$_updateResults$));
    $search$$1$$.on("focus", function() {
      $search$$1$$.addClass($className$$6$$ + "-focused");
      "oj-select" !== $className$$6$$ && $self$$73$$.$container$.addClass("oj-focus");
    });
    $search$$1$$.on("blur", function() {
      $search$$1$$.removeClass($className$$6$$ + "-focused");
      "oj-select" !== $className$$6$$ && $self$$73$$.$container$.removeClass("oj-focus");
    });
    this.$dropdown$.on("mouseup", ".oj-listbox-results", this.$_bind$(function($e$$56$$) {
      0 < $$$$12$$($e$$56$$.target).closest(".oj-listbox-result-selectable").length && (this.$_highlightUnderEvent$($e$$56$$), this.$_selectHighlighted$(null, $e$$56$$));
    }));
    this.$dropdown$.on("click mouseup mousedown", function($e$$57$$) {
      $e$$57$$.stopPropagation();
    });
    $$$$12$$.isFunction(this.$opts$.$initSelection$) && this.$_initSelection$();
    $disabled$$2_dropdownList_elemName_readonly$$ = $opts$$11$$.element.prop("disabled");
    void 0 === $disabled$$2_dropdownList_elemName_readonly$$ && ($disabled$$2_dropdownList_elemName_readonly$$ = !1);
    this.$_enable$(!$disabled$$2_dropdownList_elemName_readonly$$);
    $disabled$$2_dropdownList_elemName_readonly$$ = $opts$$11$$.element.prop("readonly");
    void 0 === $disabled$$2_dropdownList_elemName_readonly$$ && ($disabled$$2_dropdownList_elemName_readonly$$ = !1);
    this.$_readonly$($disabled$$2_dropdownList_elemName_readonly$$);
    $_ComboUtils$$.$scrollBarDimensions$ = $_ComboUtils$$.$scrollBarDimensions$ || $_ComboUtils$$.$measureScrollbar$();
    this.autofocus = $opts$$11$$.element.prop("autofocus");
    $opts$$11$$.element.prop("autofocus", !1);
    this.autofocus && this.$_focus$();
  }, $_clickAwayHandler$:function($event$$111$$) {
    var $dropdown_self$$74$$ = this.$dropdown$;
    !$$$$12$$($event$$111$$.target).closest($dropdown_self$$74$$).length && !$$$$12$$($event$$111$$.target).closest("#" + $dropdown_self$$74$$.attr("data-oj-containerid")).length && 0 < $dropdown_self$$74$$.length && ($dropdown_self$$74$$ = $dropdown_self$$74$$.data("ojlistbox"), $dropdown_self$$74$$.close($event$$111$$));
  }, $_surrogateRemoveHandler$:function() {
    this.$dropdown$ && this.$dropdown$.remove();
  }, _destroy:function() {
    var $closeDelayTimer_element$$78$$ = this.$_closeDelayTimer$;
    isNaN($closeDelayTimer_element$$78$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer_element$$78$$));
    var $closeDelayTimer_element$$78$$ = this.$opts$.element, $ojcomp$$ = $closeDelayTimer_element$$78$$.data(this.$_elemNm$);
    this.close();
    this.$propertyObserver$ && (delete this.$propertyObserver$, this.$propertyObserver$ = null);
    this.$opts$.list && this.$results$ && (this.$_cleanupList$(this.$results$), this.$dropdownListParent$ && this.$dropdownListParent$.append(this.$results$));
    void 0 !== $ojcomp$$ && ($ojcomp$$.$container$.remove(), $ojcomp$$.$dropdown$.remove(), $closeDelayTimer_element$$78$$.removeAttr("aria-hidden").removeData(this.$_elemNm$).off("." + this.$_classNm$).prop("autofocus", this.autofocus || !1), this.$elementTabIndex$ ? $closeDelayTimer_element$$78$$.attr({$tabindex$:this.$elementTabIndex$}) : $closeDelayTimer_element$$78$$.removeAttr("tabindex"), $closeDelayTimer_element$$78$$.show());
  }, $_cleanupList$:function($list$$4$$) {
    if ($list$$4$$ && $list$$4$$.is("ul")) {
      $list$$4$$.removeClass("oj-listbox-results oj-listbox-result-sub");
      $list$$4$$.removeAttr("role");
      for (var $i$$147_wrappingDiv$$ = $list$$4$$.children().length - 1;0 <= $i$$147_wrappingDiv$$;$i$$147_wrappingDiv$$--) {
        this.$_cleanupList$($$$$12$$($list$$4$$.children()[$i$$147_wrappingDiv$$]));
      }
    } else {
      $list$$4$$.is("li") && (($list$$4$$.hasClass("oj-listbox-placeholder") || $list$$4$$.hasClass("oj-listbox-no-results")) && $list$$4$$.remove(), $list$$4$$.attr("class") && $list$$4$$.attr("class", $list$$4$$.attr("class").replace(/\oj-listbox-\S+/g, "")), ($i$$147_wrappingDiv$$ = $list$$4$$.children(".oj-listbox-result-label")) && $i$$147_wrappingDiv$$.contents().unwrap(), "none" == $list$$4$$.css("display") && $list$$4$$.css("display", ""), this.$_cleanupList$($list$$4$$.children("ul")));
    }
  }, $_optionToData$:function($element$$79$$) {
    if ($element$$79$$.is("option")) {
      return{value:$element$$79$$.prop("value"), label:$element$$79$$.text(), element:$element$$79$$.get(), css:$element$$79$$.attr("class"), disabled:$element$$79$$.prop("disabled"), locked:"locked" === $element$$79$$.attr("locked") || !0 === $element$$79$$.data("locked")};
    }
    if ($element$$79$$.is("optgroup")) {
      return{label:$element$$79$$.attr("label"), children:[], element:$element$$79$$.get(), css:$element$$79$$.attr("class")};
    }
    if ($element$$79$$.is("li")) {
      var $elemChildren_itemLabel$$, $groupData$$ = null;
      ($elemChildren_itemLabel$$ = $element$$79$$.children()) && 0 < $elemChildren_itemLabel$$.length && $elemChildren_itemLabel$$.is("ul") ? ($elemChildren_itemLabel$$ = $element$$79$$.attr("oj-data-label") ? $element$$79$$.attr("oj-data-label") : $element$$79$$.clone().children().remove().end().text().trim(), $groupData$$ = []) : $elemChildren_itemLabel$$ = $element$$79$$.attr("oj-data-label") ? $element$$79$$.attr("oj-data-label") : $element$$79$$.text().trim();
      return{value:$element$$79$$.attr("oj-data-value"), label:$elemChildren_itemLabel$$, element:$element$$79$$.get(), css:$element$$79$$.attr("class"), children:$groupData$$};
    }
  }, $_prepareOpts$:function($opts$$12$$) {
    var $element$$80$$, $datalist$$, $self$$75$$ = this;
    $opts$$12$$.options && Array.isArray($opts$$12$$.options) && $opts$$12$$.optionsKeys && ($opts$$12$$.options = $$$$12$$.extend(!0, [], $opts$$12$$.options));
    $element$$80$$ = $opts$$12$$.element;
    var $tagName$$2$$ = $element$$80$$.get(0).tagName.toLowerCase();
    "input" === $tagName$$2$$ && $element$$80$$.attr("list") ? this.$datalist$ = $datalist$$ = $$$$12$$("#" + $element$$80$$.attr("list")) : "select" === $tagName$$2$$ && 0 < $element$$80$$.children().length ? this.$datalist$ = $datalist$$ = $element$$80$$ : $opts$$12$$.list && (this.$datalist$ = $datalist$$ = $$$$12$$("#" + $opts$$12$$.list));
    $opts$$12$$ = $$$$12$$.extend({}, {$populateResults$:function($container$$8$$, $results$$1$$, $query$$9$$, $showPlaceholder$$) {
      var $populate$$2$$, $id$$16$$ = this.$opts$.id, $optionRenderer$$1$$ = this.$opts$.optionRenderer;
      "function" !== typeof $optionRenderer$$1$$ && ($optionRenderer$$1$$ = null);
      $populate$$2$$ = function $$populate$$2$$$($resultsParent$$, $results$$2$$, $container$$9$$, $depth$$7$$, $l$$6_showPlaceholder$$1$$) {
        function $createLabelContent$$($labelNode$$, $result$$32$$) {
          if ($optionRenderer$$1$$) {
            var $content$$15_context$$59_highlighterSection$$1$$ = {index:$i$$148$$, depth:$depth$$7$$, leaf:!$result$$32$$.children, parent:$resultsParent$$, data:$result$$32$$, component:$opts$$12$$.$ojContext$, parentElement:$labelNode$$.get(0)}, $content$$15_context$$59_highlighterSection$$1$$ = $optionRenderer$$1$$.call($opts$$12$$.$ojContext$, $content$$15_context$$59_highlighterSection$$1$$);
            null !== $content$$15_context$$59_highlighterSection$$1$$ && (null === $content$$15_context$$59_highlighterSection$$1$$.parentNode || $content$$15_context$$59_highlighterSection$$1$$.parentNode instanceof DocumentFragment) && $labelNode$$.appendChild($content$$15_context$$59_highlighterSection$$1$$);
          } else {
            $formatted$$ = $opts$$12$$.$formatResult$($result$$32$$), void 0 !== $formatted$$ && $labelNode$$.text($formatted$$);
          }
          !0 !== $query$$9$$.$initial$ && ($content$$15_context$$59_highlighterSection$$1$$ = $labelNode$$.find(".oj-listbox-highlighter-section"), $content$$15_context$$59_highlighterSection$$1$$.length || ($content$$15_context$$59_highlighterSection$$1$$ = $labelNode$$), $termHighlight$$($content$$15_context$$59_highlighterSection$$1$$, $query$$9$$.$term$));
        }
        function $termHighlight$$($highlighterSection$$, $pattern$$13$$) {
          function $innerHighlight$$($node$$38$$, $pat$$1$$) {
            var $skip$$1_spannode$$ = 0;
            if (3 === $node$$38$$.nodeType) {
              var $i$$149_middlebit_pos$$6$$ = $node$$38$$.data.toUpperCase().indexOf($pat$$1$$);
              if (0 <= $i$$149_middlebit_pos$$6$$) {
                $skip$$1_spannode$$ = document.createElement("span");
                $skip$$1_spannode$$.className = "oj-listbox-highlighter";
                $i$$149_middlebit_pos$$6$$ = $node$$38$$.splitText($i$$149_middlebit_pos$$6$$);
                $i$$149_middlebit_pos$$6$$.splitText($pat$$1$$.length);
                var $middleclone$$ = $i$$149_middlebit_pos$$6$$.cloneNode(!0);
                $skip$$1_spannode$$.appendChild($middleclone$$);
                $i$$149_middlebit_pos$$6$$.parentNode.replaceChild($skip$$1_spannode$$, $i$$149_middlebit_pos$$6$$);
                $skip$$1_spannode$$ = 1;
              }
            } else {
              if (1 === $node$$38$$.nodeType && $node$$38$$.childNodes && !/(script|style)/i.test($node$$38$$.tagName)) {
                for ($i$$149_middlebit_pos$$6$$ = 0;$i$$149_middlebit_pos$$6$$ < $node$$38$$.childNodes.length;++$i$$149_middlebit_pos$$6$$) {
                  $i$$149_middlebit_pos$$6$$ += $innerHighlight$$($node$$38$$.childNodes[$i$$149_middlebit_pos$$6$$], $pat$$1$$);
                }
              }
            }
            return $skip$$1_spannode$$;
          }
          $highlighterSection$$.length && $pattern$$13$$ && $pattern$$13$$.length && $highlighterSection$$.each(function() {
            $innerHighlight$$(this, $pattern$$13$$.toUpperCase());
          });
        }
        function $processChildren$$($node$$37$$, $result$$31$$) {
          if ($result$$31$$.children && 0 < $result$$31$$.children.length) {
            var $nestedList$$ = $result$$31$$.element && $$$$12$$($result$$31$$.element[0]).is("li") && $$$$12$$($result$$31$$.element[0]).children("ul"), $innerContainer$$1$$ = $nestedList$$ ? $$$$12$$($result$$31$$.element[0]).children("ul") : $$$$12$$("\x3cul\x3e\x3c/ul\x3e");
            $innerContainer$$1$$.hasClass("oj-listbox-result-sub") || $innerContainer$$1$$.addClass("oj-listbox-result-sub");
            $populate$$2$$($result$$31$$, $result$$31$$.children, $innerContainer$$1$$, $depth$$7$$ + 1, !1);
            $nestedList$$ || $node$$37$$.append($innerContainer$$1$$);
          }
        }
        var $i$$148$$, $placeholder_result$$30$$, $label$$8_selectable$$, $disabled$$3$$, $node$$36$$, $formatted$$;
        $placeholder_result$$30$$ = $self$$75$$.$_getPlaceholder$();
        $l$$6_showPlaceholder$$1$$ && null !== $placeholder_result$$30$$ && !$query$$9$$.$term$ && 0 >= $container$$9$$.find(".oj-listbox-placeholder").length && ($placeholder_result$$30$$ = {value:"", label:$placeholder_result$$30$$}, $node$$36$$ = $$$$12$$("\x3cli\x3e\x3c/li\x3e"), $node$$36$$.addClass("oj-listbox-placeholder oj-listbox-results-depth-0 oj-listbox-result oj-listbox-result-selectable"), $node$$36$$.attr("role", "presentation"), $label$$8_selectable$$ = $$$$12$$(document.createElement("div")), 
        $label$$8_selectable$$.addClass("oj-listbox-result-label"), $label$$8_selectable$$.attr("id", "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$()), $label$$8_selectable$$.attr("role", "option"), $formatted$$ = $opts$$12$$.$formatResult$($placeholder_result$$30$$), void 0 !== $formatted$$ && $label$$8_selectable$$.text($formatted$$), $node$$36$$.append($label$$8_selectable$$), $node$$36$$.data($self$$75$$.$_elemNm$, $placeholder_result$$30$$), $container$$9$$.prepend($node$$36$$));
        $i$$148$$ = 0;
        for ($l$$6_showPlaceholder$$1$$ = $results$$2$$.length;$i$$148$$ < $l$$6_showPlaceholder$$1$$;$i$$148$$ += 1) {
          $placeholder_result$$30$$ = $results$$2$$[$i$$148$$];
          $disabled$$3$$ = !0 === $placeholder_result$$30$$.disabled;
          $label$$8_selectable$$ = !$disabled$$3$$ && void 0 !== $id$$16$$($placeholder_result$$30$$);
          var $isList$$ = $placeholder_result$$30$$.element && $$$$12$$($placeholder_result$$30$$.element[0]).is("li");
          $node$$36$$ = $isList$$ ? $$$$12$$($placeholder_result$$30$$.element[0]) : $$$$12$$("\x3cli\x3e\x3c/li\x3e");
          $node$$36$$.hasClass("oj-listbox-result") ? ($placeholder_result$$30$$.children && 0 < $placeholder_result$$30$$.children.length && $processChildren$$($node$$36$$, $placeholder_result$$30$$), $$$$12$$($placeholder_result$$30$$.element[0]).css("display", "")) : ($node$$36$$.addClass("oj-listbox-results-depth-" + $depth$$7$$), $node$$36$$.addClass("oj-listbox-result"), $node$$36$$.addClass($label$$8_selectable$$ ? "oj-listbox-result-selectable" : "oj-listbox-result-unselectable"), $disabled$$3$$ && 
          $node$$36$$.addClass("oj-disabled"), $placeholder_result$$30$$.children && $node$$36$$.addClass("oj-listbox-result-with-children"), $node$$36$$.attr("role", "presentation"), $label$$8_selectable$$ = $$$$12$$(document.createElement("div")), $label$$8_selectable$$.addClass("oj-listbox-result-label"), $label$$8_selectable$$.attr("id", "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$()), $label$$8_selectable$$.attr("role", "option"), $disabled$$3$$ && $label$$8_selectable$$.attr("aria-disabled", 
          "true"), $isList$$ || ($createLabelContent$$($label$$8_selectable$$, $placeholder_result$$30$$), $node$$36$$.append($label$$8_selectable$$)), $placeholder_result$$30$$.children && 0 < $placeholder_result$$30$$.children.length && $processChildren$$($node$$36$$, $placeholder_result$$30$$), $node$$36$$.data($self$$75$$.$_elemNm$, $placeholder_result$$30$$), $isList$$ ? ($$$$12$$($placeholder_result$$30$$.element[0]).contents().filter(function() {
            return "UL" !== this.tagName;
          }).wrapAll($label$$8_selectable$$), $$$$12$$($placeholder_result$$30$$.element[0]).css("display", "")) : $container$$9$$.append($node$$36$$));
        }
      };
      $populate$$2$$(null, $results$$1$$, $container$$8$$, 0, $showPlaceholder$$);
    }}, $_ojChoice_defaults$$, $opts$$12$$);
    $opts$$12$$.id = function $$opts$$12$$$id$($e$$58$$) {
      return $e$$58$$.value;
    };
    $opts$$12$$.$formatResult$ = function $$opts$$12$$$$formatResult$$($result$$33$$) {
      return isNaN($result$$33$$.label) ? $result$$33$$.label : this.$ojContext$.$_formatValue$($result$$33$$.label);
    };
    $opts$$12$$.$formatSelection$ = function $$opts$$12$$$$formatSelection$$($data$$79$$) {
      return $data$$79$$ && $data$$79$$.label ? isNaN($data$$79$$.label) ? $data$$79$$.label : this.$ojContext$.$_formatValue$($data$$79$$.label) : void 0;
    };
    "select" !== $tagName$$2$$ && null !== $opts$$12$$.manageNewEntry && ($opts$$12$$.manageNewEntry = function $$opts$$12$$$manageNewEntry$($term$$) {
      var $entry$$2$$ = {};
      $entry$$2$$.value = $entry$$2$$.label = $$$$12$$.trim($term$$);
      return $entry$$2$$;
    });
    $datalist$$ ? $opts$$12$$.$query$ = this.$_bind$(function($query$$10$$) {
      var $data$$80$$ = {$results$:[], $more$:!1}, $term$$1$$ = $query$$10$$.$term$, $children$$2$$, $process$$;
      $process$$ = function $$process$$$($element$$81$$, $collection$$30$$) {
        var $group$$1$$, $nestedLi$$ = $element$$81$$.children() && 0 < $element$$81$$.children().length && $element$$81$$.children().is("ul");
        if ($element$$81$$.is("option") || $element$$81$$.is("li") && !$nestedLi$$) {
          $query$$10$$.$matcher$($term$$1$$, $element$$81$$.text(), $element$$81$$) && $collection$$30$$.push($self$$75$$.$_optionToData$($element$$81$$));
        } else {
          if ($element$$81$$.is("optgroup") || $element$$81$$.is("li") && $nestedLi$$) {
            $group$$1$$ = $self$$75$$.$_optionToData$($element$$81$$), $_ComboUtils$$.$each2$($element$$81$$.is("optgroup") ? $element$$81$$.children() : $element$$81$$.children("ul").children(), function($i$$150$$, $elm$$1$$) {
              $process$$($elm$$1$$, $group$$1$$.children);
            }), 0 < $group$$1$$.children.length && $collection$$30$$.push($group$$1$$);
          }
        }
      };
      $children$$2$$ = $datalist$$.children();
      void 0 !== this.$_getPlaceholder$() && 0 < $children$$2$$.length && "" == $children$$2$$.first().attr("value") && ($children$$2$$ = $children$$2$$.slice(1));
      $_ComboUtils$$.$each2$($children$$2$$, function($i$$151$$, $elm$$2$$) {
        $process$$($elm$$2$$, $data$$80$$.$results$);
      });
      $query$$10$$.$callback$($data$$80$$);
    }) : "options" in $opts$$12$$ && ($opts$$12$$.$query$ = $$$$12$$.isFunction($opts$$12$$.options) ? $_ComboUtils$$.$remote$($opts$$12$$.options, $opts$$12$$.optionsKeys ? $opts$$12$$.optionsKeys : null) : $_ComboUtils$$.$local$($opts$$12$$.options, $opts$$12$$.optionsKeys ? $opts$$12$$.optionsKeys : null));
    return $opts$$12$$;
  }, $_createHeader$:function() {
    var $headerElem_resultsNHeaderContainer$$ = this.$opts$.element.find(".oj-listbox-header");
    if ($headerElem_resultsNHeaderContainer$$.length) {
      this.header = $$$$12$$("\x3cli\x3e", {"class":"oj-listbox-result-header oj-listbox-result-unselectable", role:"presentation"});
      this.header.append($headerElem_resultsNHeaderContainer$$.children());
      this.$_initializeHeaderItems$();
      $headerElem_resultsNHeaderContainer$$ = $$$$12$$("\x3cul\x3e", {"class":"oj-listbox-results-with-header", role:"listbox"});
      $headerElem_resultsNHeaderContainer$$.append(this.header);
      $headerElem_resultsNHeaderContainer$$.appendTo(this.$results$.parent());
      var $resultsWrapper$$ = $$$$12$$("\x3cli\x3e", {role:"presentation"});
      $headerElem_resultsNHeaderContainer$$.append($resultsWrapper$$);
      this.$results$.attr("role", "presentation");
      this.$results$.appendTo($resultsWrapper$$);
    }
    this.$headerInitialized$ = !0;
  }, $_initializeHeaderItems$:function() {
    this.$headerItems$ = this.header.find("li[role\x3d'option'], li:not([role])");
    this.$headerItems$.uniqueId();
    this.header.find("ul").attr("role", "presentation");
    this.header.find("li:not([role])").attr("role", "option");
    this.header.find("a, input, select, textarea, button, object, .oj-component-initnode").each(function() {
      $$$$12$$(this).attr("tabIndex", -1);
    });
  }, $_isHeaderItem$:function($item$$9$$) {
    var $isHeaderItem$$ = !1;
    this.$headerItems$.each(function() {
      if ($$$$12$$(this).attr("id") === $item$$9$$) {
        return $isHeaderItem$$ = !0, !1;
      }
    });
    return $isHeaderItem$$;
  }, $_getNextHeaderItem$:function($currentItem$$) {
    if (!this.$headerItems$) {
      return null;
    }
    if (!$currentItem$$) {
      return this.$headerItems$.first();
    }
    var $foundCurrentItem$$ = !1, $nextItem$$ = null;
    this.$headerItems$.each(function() {
      if ($foundCurrentItem$$) {
        return $nextItem$$ = $$$$12$$(this), !1;
      }
      $foundCurrentItem$$ = $$$$12$$(this).attr("id") === $currentItem$$;
    });
    return $nextItem$$;
  }, $_getPreviousHeaderItem$:function($currentItem$$1$$) {
    if (!this.$headerItems$) {
      return null;
    }
    var $previousItem$$ = null;
    this.$headerItems$.each(function() {
      if ($$$$12$$(this).attr("id") === $currentItem$$1$$) {
        return!1;
      }
      $previousItem$$ = $$$$12$$(this);
    });
    return $previousItem$$;
  }, $_setFocusOnHeaderItem$:function($item$$10$$) {
    var $focusable$$1$$ = $item$$10$$.find(".oj-component .oj-enabled").first();
    0 === $focusable$$1$$.length && ($focusable$$1$$ = $item$$10$$.find("a, input, select, textarea, button, object, .oj-component-initnode").first(), 0 === $focusable$$1$$.length && ($focusable$$1$$ = $item$$10$$.children().first()));
    $focusable$$1$$ && $focusable$$1$$.addClass("oj-focus");
  }, $_removeHighlightFromHeaderItems$:function() {
    this.$headerItems$ && this.$headerItems$.find(".oj-focus").removeClass("oj-focus");
  }, $_triggerSelect$:function($data$$81_evt$$21$$) {
    $data$$81_evt$$21$$ = $$$$12$$.Event(this.$_elemNm$ + "-selecting", {val:this.id($data$$81_evt$$21$$), object:$data$$81_evt$$21$$});
    this.$opts$.element.trigger($data$$81_evt$$21$$);
    return!$data$$81_evt$$21$$.isDefaultPrevented();
  }, $_isInterfaceEnabled$:function() {
    return!0 === this.$enabledInterface$;
  }, $_enableInterface$:function() {
    var $enabled$$ = this.$_enabled$ && !this.$_readonly$;
    if ($enabled$$ === this.$enabledInterface$) {
      return!1;
    }
    this.$container$.toggleClass("oj-disabled", !$enabled$$);
    this.close();
    this.$enabledInterface$ = $enabled$$;
    return!0;
  }, $_enable$:function($enabled$$1$$) {
    void 0 === $enabled$$1$$ && ($enabled$$1$$ = !0);
    this.$_enabled$ !== $enabled$$1$$ && (this.$_enabled$ = $enabled$$1$$, this.$opts$.element.prop("disabled", !$enabled$$1$$), this.$container$.toggleClass("oj-enabled", $enabled$$1$$), this.$_enableInterface$());
  }, $_disable$:function() {
    this.$_enable$(!1);
  }, $_readonly$:function($enabled$$2$$) {
    void 0 === $enabled$$2$$ && ($enabled$$2$$ = !1);
    if (this.$_readonly$ === $enabled$$2$$) {
      return!1;
    }
    this.$_readonly$ = $enabled$$2$$;
    this.$opts$.element.prop("readonly", $enabled$$2$$);
    this.$_enableInterface$();
    return!0;
  }, $_opened$:function() {
    return this.$container$.hasClass("oj-listbox-dropdown-open");
  }, $_getDropdownPositionElement$:function() {
    return this.$container$.children().first();
  }, $_usingHandler$:function($pos$$7$$, $props$$8$$) {
    if ($oj$$12$$.$PositionUtils$.$isAligningPositionClipped$($props$$8$$)) {
      this.$_closeDelayTimer$ = window.setTimeout($$$$12$$.proxy(this.close, this), 1);
    } else {
      var $container$$10$$ = this.$container$, $dropdown$$1$$ = $props$$8$$.element.element;
      $dropdown$$1$$.css($pos$$7$$);
      "bottom" === $props$$8$$.vertical ? ($container$$10$$.addClass("oj-listbox-drop-above"), $dropdown$$1$$.addClass("oj-listbox-drop-above")) : ($container$$10$$.removeClass("oj-listbox-drop-above"), $dropdown$$1$$.removeClass("oj-listbox-drop-above"));
    }
  }, $_getDropdownPosition$:function() {
    var $position$$4$$ = {my:"start top", at:"start bottom", of:this.$_getDropdownPositionElement$(), collision:"flip", using:$$$$12$$.proxy(this.$_usingHandler$, this)}, $isRtl$$ = "rtl" === $oj$$12$$.$DomUtils$.$getReadingDirection$();
    return $oj$$12$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$4$$, $isRtl$$);
  }, $_positionDropdown$:function() {
    var $dropdown$$2$$ = this.$dropdown$, $position$$5$$ = this.$_getDropdownPosition$();
    $dropdown$$2$$.css("width", this.$container$.outerWidth());
    $dropdown$$2$$.position($position$$5$$);
  }, $_shouldOpen$:function($e$$59$$) {
    return this.$_opened$() || !1 === this.$_enabled$ || !0 === this.$_readonly$ ? !1 : this.$ojContext$._trigger("beforeExpand", $e$$59$$, {component:this.$opts$.element});
  }, $_clearDropdownAlignmentPreference$:function() {
    this.$container$.removeClass("oj-listbox-drop-above");
    this.$dropdown$.removeClass("oj-listbox-drop-above");
  }, open:function($e$$60$$, $dontUpdateResults$$) {
    if (!this.$_shouldOpen$($e$$60$$)) {
      return!1;
    }
    this.$_opening$($e$$60$$, $dontUpdateResults$$);
    return!0;
  }, $_opening$:function() {
    this.$headerInitialized$ || this.$_createHeader$();
    this.$container$.addClass("oj-listbox-dropdown-open");
  }, $_showDropDown$:function() {
    if (this.$_opened$() && "true" !== this.$_getActiveContainer$().attr("aria-expanded")) {
      this.$_clearDropdownAlignmentPreference$();
      this.$dropdown$[0] !== this.body().children().last()[0] && this.$dropdown$.detach().appendTo(this.body());
      this.$dropdown$.appendTo(this.body());
      this.header && (this.$dropdown$.find(".oj-listbox-results-with-header").prepend(this.header), this.header.show());
      var $psEvents$$ = {};
      $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$12$$.proxy(this.close, this);
      $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$12$$.proxy(this.$_surrogateRemoveHandler$, this);
      $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $$$$12$$.proxy(this.$_clickAwayHandler$, this);
      $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$12$$.proxy(this.$_positionDropdown$, this);
      var $psOptions$$ = {};
      $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$POPUP$] = this.$dropdown$;
      $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$LAUNCHER$] = this.$opts$.element;
      $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$EVENTS$] = $psEvents$$;
      $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$POSITION$] = this.$_getDropdownPosition$();
      $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-listbox-drop-layer";
      $oj$$12$$.$PopupService$.$getInstance$().open($psOptions$$);
      $$$$12$$("#oj-listbox-drop").removeAttr("id");
      this.$dropdown$.attr("id", "oj-listbox-drop");
      this.$dropdown$.attr("data-oj-containerid", this.$containerId$);
      this.$_positionDropdown$();
      this.$_getActiveContainer$().attr("aria-expanded", !0);
    }
  }, close:function() {
    if (this.$_opened$()) {
      this.$container$.removeClass("oj-listbox-dropdown-open");
      var $cid$$7_dropDownVisible_psOptions$$1$$ = this.$_getActiveContainer$().attr("aria-expanded");
      if ($cid$$7_dropDownVisible_psOptions$$1$$ && "false" !== $cid$$7_dropDownVisible_psOptions$$1$$) {
        var $cid$$7_dropDownVisible_psOptions$$1$$ = this.$containerId$, $scroll$$ = "scroll." + $cid$$7_dropDownVisible_psOptions$$1$$, $resize$$ = "resize." + $cid$$7_dropDownVisible_psOptions$$1$$, $orient$$ = "orientationchange." + $cid$$7_dropDownVisible_psOptions$$1$$;
        this.$container$.parents().add(window).each(function() {
          $$$$12$$(this).off($scroll$$).off($resize$$).off($orient$$);
        });
        this.$_clearDropdownAlignmentPreference$();
        $cid$$7_dropDownVisible_psOptions$$1$$ = {};
        $cid$$7_dropDownVisible_psOptions$$1$$[$oj$$12$$.$PopupService$.$OPTION$.$POPUP$] = this.$dropdown$;
        $oj$$12$$.$PopupService$.$getInstance$().close($cid$$7_dropDownVisible_psOptions$$1$$);
        this.header && (this.header.hide(), this.header.appendTo(this.$container$));
        this.$dropdown$.removeAttr("data-oj-containerid");
        this.$dropdown$.removeAttr("id");
        this.$opts$.list ? this.$_removeHighlight$() : (this.$dropdown$.detach(), this.$results$.empty());
        this.$_getActiveContainer$().attr("aria-expanded", !1);
      }
    }
  }, $_clearSearch$:function() {
  }, $_ensureHighlightVisible$:function() {
    var $results$$3$$ = this.$results$, $children$$3_more_rb$$, $index$$104$$, $child$$2$$, $hb_y$$37$$;
    $index$$104$$ = this.$_highlight$();
    0 > $index$$104$$ || (0 == $index$$104$$ ? $results$$3$$.scrollTop(0) : ($children$$3_more_rb$$ = this.$_findHighlightableChoices$().find(".oj-listbox-result-label"), $child$$2$$ = $$$$12$$($children$$3_more_rb$$[$index$$104$$]), $hb_y$$37$$ = $child$$2$$.offset().top + $child$$2$$.outerHeight(!0), $index$$104$$ === $children$$3_more_rb$$.length - 1 && ($children$$3_more_rb$$ = $results$$3$$.find("li.oj-listbox-more-results"), 0 < $children$$3_more_rb$$.length && ($hb_y$$37$$ = $children$$3_more_rb$$.offset().top + 
    $children$$3_more_rb$$.outerHeight(!0))), $children$$3_more_rb$$ = $results$$3$$.offset().top + $results$$3$$.outerHeight(!0), $hb_y$$37$$ > $children$$3_more_rb$$ && $results$$3$$.scrollTop($results$$3$$.scrollTop() + ($hb_y$$37$$ - $children$$3_more_rb$$)), $hb_y$$37$$ = $child$$2$$.offset().top - $results$$3$$.offset().top, 0 > $hb_y$$37$$ && "none" != $child$$2$$.css("display") && $results$$3$$.scrollTop($results$$3$$.scrollTop() + $hb_y$$37$$)));
  }, $_findHighlightableChoices$:function() {
    return this.$results$.find(".oj-listbox-result-selectable:not(.oj-disabled, .oj-selected)").filter(function() {
      return "none" != $$$$12$$(this).css("display");
    });
  }, $_moveHighlight$:function($delta$$3$$) {
    var $choices$$ = this.$_findHighlightableChoices$(), $index$$105$$ = this.$_highlight$();
    if (this.header && (0 >= $index$$105$$ || $index$$105$$ === $choices$$.length - 1)) {
      var $activeDescendant_choice$$ = this.$_getActiveContainer$().attr("aria-activedescendant"), $isHeaderItem$$1$$ = this.$_isHeaderItem$($activeDescendant_choice$$);
      $isHeaderItem$$1$$ || ($activeDescendant_choice$$ = null);
      var $headerItem$$ = null;
      0 < $delta$$3$$ && (0 > $index$$105$$ || $index$$105$$ === $choices$$.length - 1) ? $headerItem$$ = this.$_getNextHeaderItem$($activeDescendant_choice$$) : 0 > $delta$$3$$ && ($isHeaderItem$$1$$ && 0 > $index$$105$$ || 0 === $index$$105$$) && ($headerItem$$ = this.$_getPreviousHeaderItem$($activeDescendant_choice$$));
      if ($headerItem$$) {
        this.$_removeHighlight$();
        this.$_setFocusOnHeaderItem$($headerItem$$);
        this.$_getActiveContainer$().attr("aria-activedescendant", $headerItem$$.attr("id"));
        return;
      }
      $isHeaderItem$$1$$ && 0 > $delta$$3$$ && ($index$$105$$ = 0);
    }
    for (;-1 <= $index$$105$$ && $index$$105$$ < $choices$$.length;) {
      if ($index$$105$$ += $delta$$3$$, $index$$105$$ == $choices$$.length ? $index$$105$$ = 0 : -1 == $index$$105$$ && ($index$$105$$ = $choices$$.length - 1), $activeDescendant_choice$$ = $$$$12$$($choices$$[$index$$105$$]), $activeDescendant_choice$$.hasClass("oj-listbox-result-selectable") && !$activeDescendant_choice$$.hasClass("oj-disabled") && !$activeDescendant_choice$$.hasClass("oj-selected")) {
        this.$_highlight$($index$$105$$);
        break;
      }
    }
  }, $_highlight$:function($index$$106$$) {
    var $choice$$1_choices$$1$$ = this.$_findHighlightableChoices$();
    if (0 === arguments.length) {
      var $curSelected$$ = $choice$$1_choices$$1$$.filter(".oj-hover");
      $curSelected$$.length || ($curSelected$$ = $choice$$1_choices$$1$$.children(".oj-hover").closest(".oj-listbox-result"));
      return $choice$$1_choices$$1$$.get().indexOf($curSelected$$[0]);
    }
    $index$$106$$ >= $choice$$1_choices$$1$$.length && ($index$$106$$ = $choice$$1_choices$$1$$.length - 1);
    0 > $index$$106$$ && ($index$$106$$ = 0);
    this.$_removeHighlight$();
    $choice$$1_choices$$1$$ = $$$$12$$($choice$$1_choices$$1$$[$index$$106$$]);
    $choice$$1_choices$$1$$.hasClass("oj-listbox-result-with-children") ? $choice$$1_choices$$1$$.children(".oj-listbox-result-label").addClass("oj-hover") : $choice$$1_choices$$1$$.addClass("oj-hover");
    this.$_getActiveContainer$().attr("aria-activedescendant", $choice$$1_choices$$1$$.find(".oj-listbox-result-label").attr("id"));
    this.$_ensureHighlightVisible$();
  }, $_removeHighlight$:function() {
    this.$results$.find(".oj-hover").removeClass("oj-hover");
    this.$_removeHighlightFromHeaderItems$();
  }, $_highlightUnderEvent$:function($el$$5_event$$113$$) {
    $el$$5_event$$113$$ = $$$$12$$($el$$5_event$$113$$.target).closest(".oj-listbox-result-selectable");
    if (0 < $el$$5_event$$113$$.length && !$el$$5_event$$113$$.is(".oj-hover")) {
      var $choices$$2$$ = this.$_findHighlightableChoices$();
      this.$_highlight$($choices$$2$$.index($el$$5_event$$113$$));
    } else {
      0 == $el$$5_event$$113$$.length && this.$_removeHighlight$();
    }
  }, $_updateResults$:function($initial$$) {
    var $self$$76$$ = this, $term$$2$$ = this.search.val(), $lastTerm$$ = $$$$12$$.data(this.$container$, this.$_classNm$ + "-last-term");
    if (!0 === $initial$$ || !$lastTerm$$ || $term$$2$$ !== $lastTerm$$) {
      if ($lastTerm$$ || $term$$2$$ || !$initial$$ || "input" !== $initial$$.type) {
        $$$$12$$.data(this.$container$, this.$_classNm$ + "-last-term", $term$$2$$), $term$$2$$.length >= (this.$opts$.minLength || 0) ? (clearTimeout(this.$queryTimer$), $initial$$ && !0 !== $initial$$ ? this.$queryTimer$ = setTimeout(function() {
          $self$$76$$.$_queryResults$($initial$$);
        }, $_ComboUtils$$.$DEFAULT_QUERY_DELAY$) : this.$_queryResults$($initial$$)) : this.close();
      }
    }
  }, $_queryResults$:function($initial$$1$$) {
    function $postRender$$() {
      $self$$77$$.$_positionDropdown$();
      if ($self$$77$$.header && $self$$77$$.$headerItems$.length) {
        var $highlightableChoices_highlightableOptions$$ = $self$$77$$.$_findHighlightableChoices$(), $totalOptions$$ = $self$$77$$.$headerItems$.length + $highlightableChoices_highlightableOptions$$.length;
        $self$$77$$.$headerItems$.attr("aria-setsize", $totalOptions$$);
        $highlightableChoices_highlightableOptions$$.length && ($highlightableChoices_highlightableOptions$$ = $highlightableChoices_highlightableOptions$$.children("[role\x3d'option']"), $highlightableChoices_highlightableOptions$$.attr("aria-setsize", $totalOptions$$), $highlightableChoices_highlightableOptions$$.first().attr("aria-posinset", $self$$77$$.$headerItems$.length + 1));
      }
    }
    var $search$$3$$ = this.search, $results$$4$$ = this.$results$, $opts$$13$$ = this.$opts$, $self$$77$$ = this, $input$$2_term$$3$$;
    $input$$2_term$$3$$ = $search$$3$$.val();
    var $queryNumber$$;
    ($opts$$13$$.minLength || 0) > $input$$2_term$$3$$.length ? this.close() : (this.open(null, !0), $queryNumber$$ = ++this.$queryCount$, this.$_removeHighlight$(), $input$$2_term$$3$$ = this.search.val(), $input$$2_term$$3$$ = void 0 !== $input$$2_term$$3$$ && null !== $input$$2_term$$3$$ && (!0 !== $initial$$1$$ || $opts$$13$$.$inputSearch$ || 0 < $opts$$13$$.minLength) ? $input$$2_term$$3$$ : "", this.$resultsPage$ = 1, $opts$$13$$.$query$({element:$opts$$13$$.element, $term$:$input$$2_term$$3$$, 
    page:this.$resultsPage$, context:null, $matcher$:$opts$$13$$.$matcher$, $callback$:this.$_bind$(function($data$$83_li$$1$$) {
      $queryNumber$$ === this.$queryCount$ && this.$_opened$() && (this.context = $data$$83_li$$1$$ && void 0 !== $data$$83_li$$1$$.context ? $data$$83_li$$1$$.context : null, $data$$83_li$$1$$ && 0 !== $data$$83_li$$1$$.$results$.length || !$_ComboUtils$$.$checkFormatter$($self$$77$$.$ojContext$, $opts$$13$$.$formatNoMatches$, "formatNoMatches") ? ($_ComboUtils$$.$saveLastQueryResult$(this, $data$$83_li$$1$$.$results$), this.$_showDropDown$(), this.$_preprocessResults$($results$$4$$), $self$$77$$.$opts$.$populateResults$.call(this, 
      $results$$4$$, $data$$83_li$$1$$.$results$, {$term$:$search$$3$$.val(), page:this.$resultsPage$, context:null, $initial$:$initial$$1$$}, this.$_showPlaceholder$()), this.$_postprocessResults$($data$$83_li$$1$$, $initial$$1$$), $postRender$$()) : "oj-select" === this.$_classNm$ && !0 !== this.$opts$.multiple || this.header ? ($data$$83_li$$1$$ = $$$$12$$("\x3cli\x3e"), $data$$83_li$$1$$.addClass("oj-listbox-no-results"), $data$$83_li$$1$$.text($opts$$13$$.$formatNoMatches$($self$$77$$.$ojContext$, 
      $search$$3$$.val())), this.$_showDropDown$(), this.$_preprocessResults$($results$$4$$), $results$$4$$.append($data$$83_li$$1$$), $postRender$$()) : this.close());
    })}));
  }, $_preprocessResults$:function($resultList_results$$5$$) {
    this.$opts$.list ? ($resultList_results$$5$$ = $resultList_results$$5$$.children(), this.$_hideResultList$($resultList_results$$5$$)) : $resultList_results$$5$$.empty();
  }, $_hideResultList$:function($resultList$$1$$) {
    for (var $i$$152$$ = 0;$i$$152$$ < $resultList$$1$$.length;$i$$152$$++) {
      $$$$12$$($resultList$$1$$[$i$$152$$]).is("LI") && (($$$$12$$($resultList$$1$$[$i$$152$$]).hasClass("oj-listbox-no-results") || $$$$12$$($resultList$$1$$[$i$$152$$]).hasClass("oj-listbox-placeholder")) && $$$$12$$($resultList$$1$$[$i$$152$$]).remove(), $$$$12$$($resultList$$1$$[$i$$152$$]).css("display", "none"), $$$$12$$($resultList$$1$$[$i$$152$$]).hasClass("oj-selected") && $$$$12$$($resultList$$1$$[$i$$152$$]).removeClass("oj-selected"));
      var $nested$$ = $$$$12$$($resultList$$1$$[$i$$152$$]).children("ul");
      $nested$$ && $nested$$.children() && this.$_hideResultList$($nested$$.children());
    }
  }, $_cancel$:function($event$$114$$) {
    this.close($event$$114$$);
  }, $_focusSearch$:function() {
    $_ComboUtils$$.$_focus$(this.search);
  }, $_selectHighlighted$:function($options$$225$$, $event$$115$$) {
    if (this.header) {
      var $activeDescendant$$1_activeItem_index$$107$$ = this.$_getActiveContainer$().attr("aria-activedescendant");
      if (this.$_isHeaderItem$($activeDescendant$$1_activeItem_index$$107$$)) {
        var $activeDescendant$$1_activeItem_index$$107$$ = $$$$12$$("#" + $activeDescendant$$1_activeItem_index$$107$$), $clickable_data$$84$$ = $activeDescendant$$1_activeItem_index$$107$$.find("a, input, select, textarea, button, object").first();
        0 === $clickable_data$$84$$.length && ($clickable_data$$84$$ = $activeDescendant$$1_activeItem_index$$107$$.children());
        $clickable_data$$84$$.length && $clickable_data$$84$$[0].click();
        this.close($event$$115$$);
        return;
      }
    }
    $activeDescendant$$1_activeItem_index$$107$$ = this.$_highlight$();
    ($clickable_data$$84$$ = this.$results$.find(".oj-hover").closest(".oj-listbox-result").data(this.$_elemNm$)) ? (this.$_highlight$($activeDescendant$$1_activeItem_index$$107$$), $options$$225$$ = $options$$225$$ || {}, $options$$225$$.trigger = $_ComboUtils$$.$ValueChangeTriggerTypes$.$OPTION_SELECTED$, this.$_onSelect$($clickable_data$$84$$, $options$$225$$, $event$$115$$)) : $options$$225$$ && $options$$225$$.$noFocus$ && this.close($event$$115$$);
  }, $_getPlaceholder$:function() {
    return this.$opts$.element.attr("placeholder") || this.$opts$.element.attr("data-placeholder") || this.$opts$.element.data("placeholder") || this.$opts$.placeholder;
  }, $_setPlaceholder$:function() {
    var $placeholder$$1$$ = this.$_getPlaceholder$();
    $placeholder$$1$$ && (this.search.attr("placeholder", $placeholder$$1$$), this.$container$.removeClass(this.$_classNm$ + "-allowclear"));
  }, $_initContainerWidth$:function() {
    var $attrs$$inline_680_style$$inline_679_width$$15$$;
    a: {
      var $attr$$inline_684_matches$$inline_681$$, $i$$inline_682$$, $l$$inline_683$$;
      $attrs$$inline_680_style$$inline_679_width$$15$$ = this.$opts$.element.attr("style");
      if (void 0 !== $attrs$$inline_680_style$$inline_679_width$$15$$) {
        for ($attrs$$inline_680_style$$inline_679_width$$15$$ = $attrs$$inline_680_style$$inline_679_width$$15$$.split(";"), $i$$inline_682$$ = 0, $l$$inline_683$$ = $attrs$$inline_680_style$$inline_679_width$$15$$.length;$i$$inline_682$$ < $l$$inline_683$$;$i$$inline_682$$ += 1) {
          if ($attr$$inline_684_matches$$inline_681$$ = $attrs$$inline_680_style$$inline_679_width$$15$$[$i$$inline_682$$].replace(/\s/g, ""), $attr$$inline_684_matches$$inline_681$$ = $attr$$inline_684_matches$$inline_681$$.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== $attr$$inline_684_matches$$inline_681$$ && 1 <= $attr$$inline_684_matches$$inline_681$$.length) {
            $attrs$$inline_680_style$$inline_679_width$$15$$ = $attr$$inline_684_matches$$inline_681$$[1];
            break a;
          }
        }
      }
      $attrs$$inline_680_style$$inline_679_width$$15$$ = void 0;
    }
    null !== $attrs$$inline_680_style$$inline_679_width$$15$$ && this.$container$.css("width", $attrs$$inline_680_style$$inline_679_width$$15$$);
  }, $getVal$:function() {
    return this.$ojContext$.option("value");
  }, $setVal$:function($val$$29$$, $event$$116$$, $context$$60$$) {
    var $options$$226$$ = {$doValueChangeCheck$:!1};
    $context$$60$$ && ($options$$226$$._context = $context$$60$$);
    "string" === typeof $val$$29$$ ? this.$ojContext$.$_SetValue$([$val$$29$$], $event$$116$$, $options$$226$$) : this.$ojContext$.$_SetValue$($val$$29$$, $event$$116$$, $options$$226$$);
    this.$opts$.element.val($val$$29$$);
  }, $_showPlaceholder$:function() {
    return!1;
  }, $_getActiveContainer$:function() {
    return this.search;
  }, $_hasSearchBox$:function() {
    return void 0 !== this.$opts$.minimumResultsForSearch && void 0 !== this.$container$.$_hasSearchBox$;
  }, $_findItem$:function($list$$5$$, $value$$192$$) {
    for (var $i$$154$$ = 0;$i$$154$$ < $list$$5$$.length;$i$$154$$++) {
      if ($$$$12$$($list$$5$$[$i$$154$$]).data(this.$_elemNm$).value === $value$$192$$) {
        return $list$$5$$[$i$$154$$];
      }
    }
    return null;
  }}), $_ojChoice_defaults$$ = {$closeOnSelect$:!0, $openOnEnter$:!0, $formatNoMatches$:function($ojContext$$1$$) {
    return $ojContext$$1$$.$getTranslatedString$("noMatchesFound");
  }, id:function($e$$61$$) {
    return $e$$61$$.id;
  }, $matcher$:function($term$$4$$, $text$$11$$) {
    return 0 <= ("" + $text$$11$$).toUpperCase().indexOf(("" + $term$$4$$).toUpperCase());
  }, separator:","}, $_AbstractSingleChoice$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_enableInterface$:function() {
    $_AbstractSingleChoice$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$());
  }, $_focus$:function() {
    this.$_opened$() && this.close();
  }, _destroy:function() {
    $$$$12$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_AbstractSingleChoice$$.$superclass$._destroy.apply(this, arguments);
  }, $_clear$:function($event$$117$$) {
    this.selection.data(this.$_elemNm$) && ($event$$117$$ || $oj$$12$$.$Logger$.warn("Event should not be null when user modified the value in UI"), "oj-select" === this.$_classNm$ && this.$ojContext$.$_IsRequired$() || this.$setVal$([], $event$$117$$), this.search.val(""), this.selection.removeData(this.$_elemNm$));
    this.$_setPlaceholder$();
  }, $_initSelection$:function() {
    this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, this.$_bind$(this.$_updateSelectedOption$));
  }, $_containerKeydownHandler$:function($e$$62$$) {
    if (this.$_isInterfaceEnabled$()) {
      if ($e$$62$$.which === $_ComboUtils$$.$KEY$.PAGE_UP || $e$$62$$.which === $_ComboUtils$$.$KEY$.PAGE_DOWN) {
        $_ComboUtils$$.$killEvent$($e$$62$$);
      } else {
        switch($e$$62$$.which) {
          case $_ComboUtils$$.$KEY$.UP:
          ;
          case $_ComboUtils$$.$KEY$.DOWN:
            this.$_opened$() ? this.$_moveHighlight$($e$$62$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1) : this.open($e$$62$$);
            $_ComboUtils$$.$killEvent$($e$$62$$);
            return;
          case $_ComboUtils$$.$KEY$.ENTER:
            this.$_selectHighlighted$(null, $e$$62$$);
            $_ComboUtils$$.$killEvent$($e$$62$$);
            this.$_opened$() || (this.$_userTyping$ = !1);
            return;
          case $_ComboUtils$$.$KEY$.TAB:
            this.close($e$$62$$);
            this.$_userTyping$ = !1;
            return;
          case $_ComboUtils$$.$KEY$.$ESC$:
            this.$_opened$() && (this.$_cancel$($e$$62$$), $_ComboUtils$$.$killEvent$($e$$62$$));
            this.$_userTyping$ = !1;
            return;
        }
        this.$_userTyping$ = !0;
      }
    }
  }, $_containerKeyupHandler$:function($e$$63$$) {
    this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open($e$$63$$);
  }, $_initContainer$:function() {
    var $container$$12_selection$$1$$;
    $container$$12_selection$$1$$ = this.$container$;
    var $elementLabel$$, $idSuffix_rootAttr$$1$$ = this.$opts$.rootAttributes, $idSuffix_rootAttr$$1$$ = $idSuffix_rootAttr$$1$$ && $idSuffix_rootAttr$$1$$.id ? $idSuffix_rootAttr$$1$$.id : this.$opts$.element.attr("id") || $_ComboUtils$$.$nextUid$();
    this.selection = $container$$12_selection$$1$$ = $container$$12_selection$$1$$.find("." + this.$_classNm$ + "-choice");
    $container$$12_selection$$1$$.attr("id", this.$_classNm$ + "-choice-" + $idSuffix_rootAttr$$1$$);
    $elementLabel$$ = $$$$12$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$.attr("id") || $elementLabel$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix_rootAttr$$1$$);
    $container$$12_selection$$1$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix_rootAttr$$1$$);
    this.$results$.attr("id") || this.$results$.attr("id", "oj-listbox-results-" + $idSuffix_rootAttr$$1$$);
    this.search.attr("aria-owns", this.$results$.attr("id"));
    this.search.attr("aria-labelledby", $elementLabel$$.attr("id"));
    this.$opts$.element.attr("aria-labelledby", $elementLabel$$.attr("id"));
    this.search.attr("id") && $elementLabel$$.attr("for", this.search.attr("id"));
    this.$opts$.element.attr("aria-label") && this.search.attr("aria-label", this.$opts$.element.attr("aria-label"));
    this.$opts$.element.attr("aria-controls") && this.search.attr("aria-controls", this.$opts$.element.attr("aria-controls"));
    $container$$12_selection$$1$$.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    $container$$12_selection$$1$$.on("mousedown", "abbr", this.$_bind$(function($e$$64$$) {
      this.$_isInterfaceEnabled$() && (this.$_clear$($e$$64$$), $_ComboUtils$$.$killEventImmediately$($e$$64$$), this.close($e$$64$$), this.selection.focus());
    }));
    $container$$12_selection$$1$$.on("mousedown", this.$_bind$(function($e$$65_hidden$$) {
      this.$opts$.element.prop("disabled") && $_ComboUtils$$.$killEvent$($e$$65_hidden$$);
      this.$_opened$() ? this.close($e$$65_hidden$$) : this.$_isInterfaceEnabled$() && this.open($e$$65_hidden$$);
      ($e$$65_hidden$$ = this.search.parent().attr("aria-hidden")) && "true" == $e$$65_hidden$$ ? this.selection.focus() : this.search.focus();
      this.$container$.addClass("oj-active");
    }));
    $container$$12_selection$$1$$.on("mouseup", this.$_bind$(function() {
      this.$container$.removeClass("oj-active");
    }));
    $container$$12_selection$$1$$.on("focus", this.$_bind$(function($e$$67$$) {
      $_ComboUtils$$.$killEvent$($e$$67$$);
    }));
    this.search.on("input", this.$_bind$(function($e$$68$$) {
      this.$ojContext$.$_SetRawValue$(this.search.val(), $e$$68$$);
    }));
    this.search.on("blur keyup", this.$_bind$(function($e$$69_formatted$$1$$) {
      if ("keyup" !== $e$$69_formatted$$1$$.type || 10 === $e$$69_formatted$$1$$.keyCode || 13 === $e$$69_formatted$$1$$.keyCode) {
        if (void 0 !== this.search.val() && 0 >= this.$results$.find(".oj-hover").length) {
          if (this.$opts$.manageNewEntry) {
            var $data$$86_selectionData$$ = this.selection.data(this.$_elemNm$);
            if (!$data$$86_selectionData$$ && "" !== this.search.val() || $data$$86_selectionData$$ && ($data$$86_selectionData$$.label !== this.search.val() || !this.$ojContext$.isValid())) {
              $data$$86_selectionData$$ = this.$opts$.manageNewEntry(this.search.val()), this.$_onSelect$($data$$86_selectionData$$, {trigger:"blur" === $e$$69_formatted$$1$$.type ? $_ComboUtils$$.$ValueChangeTriggerTypes$.$BLUR$ : $_ComboUtils$$.$ValueChangeTriggerTypes$.$ENTER_PRESSED$}, $e$$69_formatted$$1$$);
            }
          } else {
            null == this.$opts$.manageNewEntry && (($data$$86_selectionData$$ = this.selection.data(this.$_elemNm$), "" == this.search.val()) ? this.$_clear$($e$$69_formatted$$1$$) : $data$$86_selectionData$$ || "" === this.search.val() ? "oj-select" !== this.$_classNm$ && ($e$$69_formatted$$1$$ = this.$opts$.$formatSelection$($data$$86_selectionData$$), void 0 !== $e$$69_formatted$$1$$ && this.search.val($e$$69_formatted$$1$$)) : this.$_clearSearch$());
          }
        }
        this.search.removeClass(this.$_classNm$ + "-focused");
        this.$container$.removeClass("oj-focus");
      }
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.hide().attr("aria-hidden", !0);
    this.$_setPlaceholder$();
  }, $_prepareOpts$:function() {
    var $opts$$14$$ = $_AbstractSingleChoice$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$79$$ = this, $tagName$$3$$ = $opts$$14$$.element.get(0).tagName.toLowerCase();
    if ("input" === $tagName$$3$$ && $opts$$14$$.element.attr("list") || "select" === $tagName$$3$$ && 0 < $opts$$14$$.element.children().length || $opts$$14$$.list) {
      var $eleName$$ = $opts$$14$$.list ? "li" : "option";
      $opts$$14$$.$initSelection$ = function $$opts$$14$$$$initSelection$$($element$$83$$, $callback$$85$$) {
        var $selected$$1$$, $value$$193$$ = $self$$79$$.$getVal$();
        Array.isArray($value$$193$$) && ($value$$193$$ = $value$$193$$[0]);
        $selected$$1$$ = void 0 !== $value$$193$$ && null !== $value$$193$$ ? $self$$79$$.$_optionToData$($element$$83$$.find($eleName$$).filter(function() {
          if ("li" == $eleName$$) {
            return this.getAttribute("oj-data-value") === $value$$193$$;
          }
          if ("option" == $eleName$$) {
            return this.value === $value$$193$$;
          }
        })) : $self$$79$$.$_optionToData$($element$$83$$.find($eleName$$).filter(function() {
          if ("li" == $eleName$$) {
            return!0 === this.getAttribute("oj-data-selected");
          }
          if ("option" == $eleName$$) {
            return this.selected;
          }
        }));
        $callback$$85$$($selected$$1$$);
      };
      $opts$$14$$.validate = function $$opts$$14$$$validate$($element$$84$$, $value$$194$$) {
        var $selected$$2$$;
        void 0 !== $value$$194$$ && null !== $value$$194$$ && ($selected$$2$$ = $self$$79$$.$_optionToData$($element$$84$$.find($eleName$$).filter(function() {
          if ("li" == $eleName$$) {
            return this.getAttribute("oj-data-value") === $value$$194$$;
          }
          if ("option" == $eleName$$) {
            return this.value === $value$$194$$;
          }
        })));
        return!!$selected$$2$$;
      };
    } else {
      if ("options" in $opts$$14$$ || this.$getVal$() && 0 < this.$getVal$().length) {
        $$$$12$$.isFunction($opts$$14$$.options) ? $opts$$14$$.$initSelection$ = function $$opts$$14$$$$initSelection$$($element$$85$$, $callback$$86$$) {
          function $findOption$$($results$$6$$, $optionValue$$1$$) {
            for (var $i$$155$$ = 0, $l$$8$$ = $results$$6$$.length;$i$$155$$ < $l$$8$$;$i$$155$$++) {
              var $found$$4_result$$34$$ = $results$$6$$[$i$$155$$];
              if ($optionValue$$1$$ === $opts$$14$$.id($found$$4_result$$34$$) || $found$$4_result$$34$$.children && ($found$$4_result$$34$$ = $findOption$$($found$$4_result$$34$$.children, $optionValue$$1$$))) {
                return $found$$4_result$$34$$;
              }
            }
            return null;
          }
          var $id$$17$$ = "";
          $self$$79$$.$getVal$() && $self$$79$$.$getVal$().length && ($id$$17$$ = $self$$79$$.$getVal$()[0]);
          var $match$$17$$ = null;
          if ($id$$17$$) {
            var $currentItem$$2_queryResult$$3$$ = $_ComboUtils$$.$getLastQueryResult$($self$$79$$);
            $currentItem$$2_queryResult$$3$$ && ($match$$17$$ = $findOption$$($currentItem$$2_queryResult$$3$$, $id$$17$$));
            $match$$17$$ || ($currentItem$$2_queryResult$$3$$ = $self$$79$$.currentItem) && $currentItem$$2_queryResult$$3$$.length && $id$$17$$ === $opts$$14$$.id($currentItem$$2_queryResult$$3$$[0]) && ($match$$17$$ = $currentItem$$2_queryResult$$3$$[0]);
            $match$$17$$ || $self$$79$$.$valueChangeTrigger$ ? $callback$$86$$($match$$17$$) : $opts$$14$$.$query$({value:[$id$$17$$], $callback$:$$$$12$$.isFunction($callback$$86$$) ? function($queryResult$$4$$) {
              $queryResult$$4$$ && $queryResult$$4$$.$results$ && ($match$$17$$ = $findOption$$($queryResult$$4$$.$results$, $id$$17$$));
              $callback$$86$$($match$$17$$);
            } : $$$$12$$.noop});
          } else {
            $callback$$86$$($match$$17$$);
          }
        } : ($opts$$14$$.$initSelection$ = function $$opts$$14$$$$initSelection$$($element$$86$$, $callback$$87$$) {
          var $id$$18$$ = "";
          $self$$79$$.$getVal$() && $self$$79$$.$getVal$().length && ($id$$18$$ = $self$$79$$.$getVal$()[0]);
          var $first$$4$$ = "select" == $tagName$$3$$ && $self$$79$$.$ojContext$.$_HasPlaceholderSet$() && !$self$$79$$.$ojContext$.$_IsRequired$() ? $self$$79$$.$_getPlaceholder$() : null, $match$$18$$ = null;
          $opts$$14$$.$query$({$matcher$:function($is_match_term$$5$$, $text$$12$$, $el$$6$$) {
            ($is_match_term$$5$$ = $id$$18$$ === $opts$$14$$.id($el$$6$$)) && ($match$$18$$ = $el$$6$$);
            null == $first$$4$$ && ($first$$4$$ = $el$$6$$);
            return $is_match_term$$5$$;
          }, $callback$:$$$$12$$.isFunction($callback$$87$$) ? function() {
            $match$$18$$ || "select" !== $tagName$$3$$ || ($match$$18$$ = $first$$4$$);
            $callback$$87$$($match$$18$$);
          } : $$$$12$$.noop});
        }, $opts$$14$$.validate = function $$opts$$14$$$validate$($element$$87$$, $value$$195$$) {
          var $match$$19$$ = null;
          $opts$$14$$.$query$({$matcher$:function($is_match$$1_term$$6$$, $text$$13$$, $el$$7$$) {
            ($is_match$$1_term$$6$$ = $value$$195$$ === $opts$$14$$.id($el$$7$$)) && ($match$$19$$ = $el$$7$$);
            return $is_match$$1_term$$6$$;
          }, $callback$:$$$$12$$.noop});
          return!!$match$$19$$;
        });
      }
    }
    return $opts$$14$$;
  }, $_postprocessResults$:function($data$$87_highlightableChoices$$1$$, $initial$$2$$, $noHighlightUpdate$$) {
    var $selected$$3$$ = -1, $self$$80$$ = this;
    $data$$87_highlightableChoices$$1$$ = this.$_findHighlightableChoices$();
    $_ComboUtils$$.$each2$($data$$87_highlightableChoices$$1$$, function($i$$156$$, $elm$$3$$) {
      if ($self$$80$$.$getVal$() && $self$$80$$.$getVal$()[0] === $self$$80$$.id($elm$$3$$.data($self$$80$$.$_elemNm$))) {
        return $selected$$3$$ = $i$$156$$, !1;
      }
    });
    !1 !== $noHighlightUpdate$$ && !0 === $initial$$2$$ && 0 <= $selected$$3$$ && this.$_highlight$($selected$$3$$);
  }, $_onSelect$:function($data$$88$$, $options$$228$$, $event$$118$$) {
    if (this.$_triggerSelect$($data$$88$$)) {
      var $context$$61$$;
      $options$$228$$ && $options$$228$$.trigger && ($context$$61$$ = {$optionMetadata$:{trigger:$options$$228$$.trigger}});
      this.close($event$$118$$);
      this.$setVal$(0 === this.id($data$$88$$).length ? [] : this.id($data$$88$$), $event$$118$$, $context$$61$$);
      "blur" !== $event$$118$$.type && this.$_focusSearch$();
    }
  }, $_clearSearch$:function() {
    this.search.val("");
  }}), $_OjSingleCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-combobox oj-component"}).html("\x3cdiv class\x3d'oj-combobox-choice' tabindex\x3d'-1' role\x3d'presentation'\x3e   \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'       spellcheck\x3d'false' class\x3d'oj-combobox-input' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e   \x3cabbr class\x3d'oj-combobox-clear-entry' role\x3d'presentation'\x3e\x3c/abbr\x3e   \x3ca class\x3d'oj-combobox-arrow oj-combobox-icon oj-component-icon oj-clickable-icon-nocontext oj-combobox-open-icon'       role\x3d'button' aria-label\x3d'expand'\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop' style\x3d'display:none' role\x3d'presentation'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, $_enable$:function($enabled$$3$$) {
    $_OjSingleCombobox$$.$superclass$.$_enable$.apply(this, arguments);
    this.$_enabled$ ? this.$container$.find(".oj-combobox-arrow").removeClass("oj-disabled") : this.$container$.find(".oj-combobox-arrow").addClass("oj-disabled");
  }, close:function($event$$119$$) {
    this.$_opened$() && $_OjSingleCombobox$$.$superclass$.close.apply(this, arguments);
  }, $_opening$:function($event$$120$$, $dontUpdateResults$$1$$) {
    $_OjSingleCombobox$$.$superclass$.$_opening$.apply(this, arguments);
    $dontUpdateResults$$1$$ || this.$_updateResults$(!0);
  }, $_containerKeydownHandler$:function($e$$70$$) {
    $_ComboUtils$$.$KEY$.$isControl$($e$$70$$) || $_ComboUtils$$.$KEY$.$isFunctionKey$($e$$70$$) || $_OjSingleCombobox$$.$superclass$.$_containerKeydownHandler$.apply(this, arguments);
  }, $_updateSelection$:function($data$$89$$) {
    var $formatted$$2$$, $item$$11$$ = [];
    this.selection.data(this.$_elemNm$, $data$$89$$);
    null !== $data$$89$$ && 0 != $data$$89$$.length ? ($formatted$$2$$ = this.$opts$.$formatSelection$($data$$89$$), void 0 !== $formatted$$2$$ && this.search.val() !== $formatted$$2$$ && this.search.val($formatted$$2$$), this.search.removeClass(this.$_classNm$ + "-default"), $item$$11$$.push($data$$89$$)) : (this.search.val(""), this.$_setPlaceholder$());
    this.currentItem = $item$$11$$;
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear");
  }, $_updateSelectedOption$:function($data$$90_selected$$4_value$$196$$) {
    if (void 0 === $data$$90_selected$$4_value$$196$$ || null === $data$$90_selected$$4_value$$196$$) {
      $data$$90_selected$$4_value$$196$$ = ($data$$90_selected$$4_value$$196$$ = this.$getVal$()) ? Array.isArray($data$$90_selected$$4_value$$196$$) ? Array.isArray($data$$90_selected$$4_value$$196$$) && $data$$90_selected$$4_value$$196$$.length ? {label:$data$$90_selected$$4_value$$196$$[0]} : null : {label:$data$$90_selected$$4_value$$196$$} : null;
    }
    this.$_updateSelection$($data$$90_selected$$4_value$$196$$);
  }}), $_OjSingleSelect$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojselect", $_classNm$:"oj-select", $_userTyping$:!1, $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-select oj-component"}).html("\x3cdiv class\x3d'oj-select-choice' tabindex\x3d'0' role\x3d'combobox'      aria-autocomplete\x3d'none' aria-expanded\x3d'false' aria-ready\x3d'true'\x3e  \x3cspan class\x3d'oj-select-chosen'\x3e\x3c/span\x3e  \x3cabbr class\x3d'oj-select-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e  \x3ca class\x3d'oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-open-icon' role\x3d'presentation'\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop' style\x3d'display:none' role\x3d'presentation'\x3e  \x3cdiv class\x3d'oj-listbox-search-wrapper'\x3e  \x3cdiv class\x3d'oj-listbox-search'\x3e    \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'           spellcheck\x3d'false' class\x3d'oj-listbox-input' title\x3d'Search field'            role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e    \x3cspan class\x3d'oj-listbox-spyglass-box'\x3e      \x3cspan class\x3d'oj-component-icon oj-clickable-icon-nocontext oj-listbox-search-icon' role\x3d'presentation'\x3e       \x3cb role\x3d'presentation'\x3e\x3c/b\x3e\x3c/span\x3e    \x3c/span\x3e  \x3c/div\x3e  \x3c/div\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, $_enable$:function($enabled$$4$$) {
    $_OjSingleSelect$$.$superclass$.$_enable$.apply(this, arguments);
    this.$_enabled$ ? (this.$container$.find(".oj-select-choice").attr("tabindex", "0"), this.$container$.find(".oj-select-arrow").removeClass("oj-disabled")) : (this.$container$.find(".oj-select-choice").attr("tabindex", "-1"), this.$container$.find(".oj-select-arrow").addClass("oj-disabled"));
  }, close:function($event$$121$$) {
    this.$_opened$() && ($_OjSingleSelect$$.$superclass$.close.apply(this, arguments), this.$container$.find(".oj-select-choice").attr("aria-expanded", !1), this.$_testClear$($event$$121$$) || this.$_clearSearch$(), $event$$121$$ instanceof MouseEvent && $event$$121$$.target != this.selection && $event$$121$$.target != this.search || $_ComboUtils$$.$_focus$(this.selection), this.$container$.find(".oj-listbox-spyglass-box").off("mouseup click"));
  }, $_opening$:function($event$$122$$, $dontUpdateResults$$2$$) {
    $_OjSingleSelect$$.$superclass$.$_opening$.apply(this, arguments);
    var $searchText$$;
    $event$$122$$ && "keydown" == $event$$122$$.type && $event$$122$$.which != $_ComboUtils$$.$KEY$.UP && $event$$122$$.which != $_ComboUtils$$.$KEY$.DOWN && $event$$122$$.which != $_ComboUtils$$.$KEY$.LEFT && $event$$122$$.which != $_ComboUtils$$.$KEY$.RIGHT && ($searchText$$ = String.fromCharCode($event$$122$$.which), $_ComboUtils$$.$killEvent$($event$$122$$));
    this.$_showSearchBox$($searchText$$);
    $dontUpdateResults$$2$$ || ($searchText$$ ? this.$_updateResults$() : this.$_updateResults$(!0));
  }, $_showDropDown$:function() {
    if (this.$_opened$()) {
      $_OjSingleSelect$$.$superclass$.$_showDropDown$.apply(this, arguments);
      this.$container$.find(".oj-select-choice").attr("aria-expanded", !0);
      var $el$$8_range$$6$$, $len$$15$$;
      this.$_hasSearchBox$() && ($el$$8_range$$6$$ = this.search.get(0), $el$$8_range$$6$$.createTextRange ? ($el$$8_range$$6$$ = $el$$8_range$$6$$.createTextRange(), $el$$8_range$$6$$.collapse(!1), $el$$8_range$$6$$.select()) : $el$$8_range$$6$$.setSelectionRange && ($len$$15$$ = this.search.val().length, $el$$8_range$$6$$.setSelectionRange($len$$15$$, $len$$15$$)));
    }
  }, $_initContainer$:function() {
    var $label$$9_selectedId$$ = this.$containerId$ + "_selected";
    this.text = this.$container$.find(".oj-select-chosen").attr("id", $label$$9_selectedId$$);
    $_OjSingleSelect$$.$superclass$.$_initContainer$.apply(this, arguments);
    this.$container$.find(".oj-select-choice").attr({"aria-owns":this.search.attr("aria-owns"), "aria-labelledby":this.search.attr("aria-labelledby"), "aria-describedby":$label$$9_selectedId$$});
    ($label$$9_selectedId$$ = this.$opts$.element.attr("aria-label")) && this.selection.attr("aria-label", $label$$9_selectedId$$);
    this.search.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    this.search.on("keyup-change input", this.$_bind$(this.$_containerKeyupHandler$));
    this.search.attr("title", this.$ojContext$.$getTranslatedString$("seachField"));
    var $self$$81$$ = this;
    this.selection.on("blur", function($e$$71$$) {
      $self$$81$$.$_testClear$($e$$71$$);
    });
  }, $_initSelection$:function() {
    this.$_isPlaceholderOptionSelected$() ? (this.$_updateSelection$(null), this.close(), this.$_setPlaceholder$()) : $_OjSingleSelect$$.$superclass$.$_initSelection$.apply(this, arguments);
  }, $_updateSelectedOption$:function($selected$$5$$) {
    if (void 0 !== $selected$$5$$ && null !== $selected$$5$$) {
      var $selectedVal$$, $value$$197$$ = this.$getVal$(), $value$$197$$ = Array.isArray($value$$197$$) ? $value$$197$$[0] : $value$$197$$;
      $selectedVal$$ = this.$opts$.id($selected$$5$$);
      $value$$197$$ !== $selectedVal$$ && (void 0 === $value$$197$$ || null === $value$$197$$ ? this.$ojContext$.options.value = Array.isArray($selectedVal$$) ? $selectedVal$$ : [$selectedVal$$] : this.$setVal$(Array.isArray($selectedVal$$) ? $selectedVal$$ : [$selectedVal$$]));
      this.$_updateSelection$($selected$$5$$);
      this.close();
    }
  }, $_updateSelection$:function($data$$91$$) {
    this.selection.data(this.$_elemNm$, $data$$91$$);
    null !== $data$$91$$ && this.text.text($data$$91$$.label);
    $data$$91$$ && "" != $data$$91$$.id && this.text.removeClass(this.$_classNm$ + "-default");
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear");
  }, $_getActiveContainer$:function() {
    return this.search.attr("aria-expanded") && this.$_hasSearchBox$() ? this.search : this.selection;
  }, $_isPlaceholderOptionSelected$:function() {
    if (null === this.$_getPlaceholder$()) {
      return!1;
    }
    var $cval$$ = this.$getVal$(), $cval$$ = Array.isArray($cval$$) ? $cval$$[0] : $cval$$;
    return "" === $cval$$ || void 0 === $cval$$ || null === $cval$$;
  }, $_getPlaceholder$:function() {
    return this.$opts$.placeholder;
  }, $_showPlaceholder$:function() {
    return!0;
  }, $_setPlaceholder$:function() {
    var $placeholder$$2$$ = this.$_getPlaceholder$();
    this.$_isPlaceholderOptionSelected$() && void 0 !== $placeholder$$2$$ && (void 0 === $placeholder$$2$$ && ($placeholder$$2$$ = ""), this.text.text($placeholder$$2$$).addClass(this.$_classNm$ + "-default"), this.$container$.removeClass(this.$_classNm$ + "-allowclear"));
  }, $setVal$:function($val$$31$$, $event$$123$$, $context$$62$$) {
    $_OjSingleSelect$$.$superclass$.$setVal$.call(this, $val$$31$$, $event$$123$$, $context$$62$$);
    this.selection.data("selectVal", $val$$31$$);
  }, $_containerKeydownHandler$:function($e$$72$$) {
    if (!($_ComboUtils$$.$KEY$.$isControl$($e$$72$$) && $e$$72$$.which != $_ComboUtils$$.$KEY$.$SHIFT$ || $_ComboUtils$$.$KEY$.$isFunctionKey$($e$$72$$))) {
      switch($e$$72$$.which) {
        case $_ComboUtils$$.$KEY$.TAB:
          this.close($e$$72$$);
          this.selection.focus();
          this.$_testClear$($e$$72$$);
          return;
        case $_ComboUtils$$.$KEY$.ENTER:
          if ($e$$72$$.target === this.selection[0] && !this.$_opened$()) {
            this.open($e$$72$$);
            $_ComboUtils$$.$killEvent$($e$$72$$);
            return;
          }
        ;
      }
      var $hasSearchBoxAlready$$ = this.$_hasSearchBox$();
      $_OjSingleSelect$$.$superclass$.$_containerKeydownHandler$.apply(this, arguments);
      this.$_userTyping$ && !this.$_opened$() && this.open($e$$72$$);
      if (!$hasSearchBoxAlready$$ && this.$_userTyping$) {
        var $c$$38$$;
        $e$$72$$.which != $_ComboUtils$$.$KEY$.LEFT && $e$$72$$.which != $_ComboUtils$$.$KEY$.RIGHT && ($c$$38$$ = String.fromCharCode($e$$72$$.which));
        this.$_showSearchBox$($c$$38$$);
        this.$_updateResults$();
        $_ComboUtils$$.$killEvent$($e$$72$$);
      }
    }
  }, $_testClear$:function($event$$124$$) {
    return "" == this.text.text() ? (this.$_clear$($event$$124$$), !0) : !1;
  }, $_showSearchBox$:function($searchText$$1$$) {
    var $focusOnSearchBox$$ = !1, $searchBox$$ = this.$dropdown$.find(".oj-listbox-search");
    $searchBox$$ && (this.$_hasSearchBox$() ? (this.$dropdown$.find(".oj-listbox-search-wrapper").removeClass("oj-helper-hidden-accessible"), $$$$12$$($searchBox$$).removeAttr("aria-hidden"), this.search.val($searchText$$1$$), $focusOnSearchBox$$ = !0) : (this.$dropdown$.find(".oj-listbox-search-wrapper").addClass("oj-helper-hidden-accessible"), $$$$12$$($searchBox$$).attr("aria-hidden", "true")));
    $_ComboUtils$$.$_focus$($focusOnSearchBox$$ ? this.search : this.selection);
    if ($focusOnSearchBox$$) {
      var $self$$82$$ = this;
      $searchBox$$.find(".oj-listbox-spyglass-box").on("mouseup click", function($e$$73$$) {
        $self$$82$$.search.focus();
        $e$$73$$.stopPropagation();
      });
    }
  }, $_hasSearchBox$:function() {
    var $threshold$$ = this.$opts$.minimumResultsForSearch;
    return(this.$opts$.list ? $$$$12$$("#" + this.$opts$.list).find("li").length : this.$datalist$ ? this.$datalist$[0].length : this.$opts$.options ? this.$opts$.options.length : 0) > $threshold$$ || this.$_userTyping$;
  }}), $_AbstractMultiChoice$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_prepareOpts$:function() {
    var $opts$$15$$ = $_AbstractMultiChoice$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$83$$ = this, $tagName$$4$$ = $opts$$15$$.element.get(0).tagName.toLowerCase();
    if ("input" === $tagName$$4$$ && $opts$$15$$.element.attr("list") || "select" === $tagName$$4$$ && 0 < $opts$$15$$.element.children().length || $opts$$15$$.list) {
      var $eleName$$1$$ = $opts$$15$$.list ? "li" : "option";
      $opts$$15$$.$initSelection$ = function $$opts$$15$$$$initSelection$$($element$$88$$, $callback$$88$$) {
        var $data$$92$$ = [];
        if ($self$$83$$.$getVal$()) {
          for (var $selected$$6$$, $ids$$ = $self$$83$$.$getVal$(), $i$$157$$ = 0;$i$$157$$ < $ids$$.length;$i$$157$$++) {
            var $id$$20$$ = $ids$$[$i$$157$$];
            ($selected$$6$$ = $element$$88$$.find($eleName$$1$$).filter(function() {
              if ("option" === $eleName$$1$$) {
                return this.value === $id$$20$$;
              }
              if ("li" === $eleName$$1$$) {
                return this.getAttribute("oj-data-value") === $id$$20$$;
              }
            })) && $selected$$6$$.length ? $data$$92$$.push($self$$83$$.$_optionToData$($selected$$6$$)) : $data$$92$$.push({value:$id$$20$$, label:$id$$20$$});
          }
        } else {
          "select" !== $tagName$$4$$ && ($selected$$6$$ = $element$$88$$.find($eleName$$1$$).filter(function() {
            if ("option" === $eleName$$1$$) {
              return this.selected;
            }
            if ("li" === $eleName$$1$$) {
              return!0 === this.getAttribute("oj-data-selected");
            }
          }), $_ComboUtils$$.$each2$($selected$$6$$, function($i$$158$$, $elm$$4$$) {
            $data$$92$$.push($self$$83$$.$_optionToData$($elm$$4$$));
          }));
        }
        $callback$$88$$($data$$92$$);
      };
    } else {
      "options" in $opts$$15$$ && ($opts$$15$$.$initSelection$ = $$$$12$$.isFunction($opts$$15$$.options) ? function($element$$89$$, $callback$$89$$) {
        function $reorderOptions$$() {
          for (var $ordered$$ = [], $i$$160$$ = 0;$i$$160$$ < $ids$$1$$.length;$i$$160$$++) {
            for (var $id$$21$$ = $ids$$1$$[$i$$160$$], $found$$5$$ = !1, $currentItem$$3_j$$20$$ = 0;$currentItem$$3_j$$20$$ < $matches$$3$$.length;$currentItem$$3_j$$20$$++) {
              var $k$$11_match$$20$$ = $matches$$3$$[$currentItem$$3_j$$20$$];
              if ($id$$21$$ === $opts$$15$$.id($k$$11_match$$20$$)) {
                $ordered$$.push($k$$11_match$$20$$);
                $matches$$3$$.splice($currentItem$$3_j$$20$$, 1);
                $found$$5$$ = !0;
                break;
              }
            }
            if (!$found$$5$$) {
              if (($currentItem$$3_j$$20$$ = $self$$83$$.currentItem) && $currentItem$$3_j$$20$$.length) {
                for ($k$$11_match$$20$$ = 0;$k$$11_match$$20$$ < $currentItem$$3_j$$20$$.length;$k$$11_match$$20$$++) {
                  if ($id$$21$$ === $opts$$15$$.id($currentItem$$3_j$$20$$[$k$$11_match$$20$$])) {
                    $ordered$$.push($currentItem$$3_j$$20$$[$k$$11_match$$20$$]);
                    $found$$5$$ = !0;
                    break;
                  }
                }
              }
              $found$$5$$ || $ordered$$.push({value:$id$$21$$, label:$id$$21$$});
            }
          }
          $callback$$89$$($ordered$$);
        }
        function $findOptions$$($results$$7$$, $optionValues$$) {
          for (var $foundOptions$$ = [], $i$$159$$ = 0, $l$$9$$ = $results$$7$$.length;$i$$159$$ < $l$$9$$;$i$$159$$++) {
            var $childOptions_result$$35$$ = $results$$7$$[$i$$159$$];
            0 <= $optionValues$$.indexOf($opts$$15$$.id($childOptions_result$$35$$)) && $foundOptions$$.push($childOptions_result$$35$$);
            $childOptions_result$$35$$.children && ($childOptions_result$$35$$ = $findOptions$$($childOptions_result$$35$$.children, $optionValues$$)) && $childOptions_result$$35$$.length && $$$$12$$.merge($foundOptions$$, $childOptions_result$$35$$);
          }
          return $foundOptions$$;
        }
        var $ids$$1$$ = $self$$83$$.$getVal$(), $matches$$3$$ = [], $queryResult$$5$$ = $_ComboUtils$$.$getLastQueryResult$($self$$83$$);
        $queryResult$$5$$ && ($matches$$3$$ = $findOptions$$($queryResult$$5$$, $ids$$1$$));
        $self$$83$$.$valueChangeTrigger$ ? $reorderOptions$$() : $opts$$15$$.$query$({value:$ids$$1$$, $callback$:function($queryResult$$6_results$$8$$) {
          $queryResult$$6_results$$8$$ && $queryResult$$6_results$$8$$.$results$ && ($queryResult$$6_results$$8$$ = $findOptions$$($queryResult$$6_results$$8$$.$results$, $ids$$1$$)) && $queryResult$$6_results$$8$$.length && $$$$12$$.merge($matches$$3$$, $queryResult$$6_results$$8$$);
          $reorderOptions$$();
        }});
      } : $opts$$15$$.$initSelection$ || function($element$$90$$, $callback$$90$$) {
        var $ids$$2$$ = $self$$83$$.$getVal$(), $matches$$4$$ = [];
        $opts$$15$$.$query$({$matcher$:function($is_match$$2_term$$7$$, $text$$14$$, $el$$9$$) {
          ($is_match$$2_term$$7$$ = $$$$12$$.grep($ids$$2$$, function($id$$22$$) {
            return $id$$22$$ === $opts$$15$$.id($el$$9$$);
          }).length) && $matches$$4$$.push($el$$9$$);
          return $is_match$$2_term$$7$$;
        }, $callback$:$$$$12$$.isFunction($callback$$90$$) ? function() {
          for (var $ordered$$1$$ = [], $i$$161$$ = 0;$i$$161$$ < $ids$$2$$.length;$i$$161$$++) {
            for (var $id$$23$$ = $ids$$2$$[$i$$161$$], $found$$6$$ = !1, $j$$21$$ = 0;$j$$21$$ < $matches$$4$$.length;$j$$21$$++) {
              var $match$$21$$ = $matches$$4$$[$j$$21$$];
              if ($id$$23$$ === $opts$$15$$.id($match$$21$$)) {
                $ordered$$1$$.push($match$$21$$);
                $matches$$4$$.splice($j$$21$$, 1);
                $found$$6$$ = !0;
                break;
              }
            }
            $found$$6$$ || $ordered$$1$$.push({value:$id$$23$$, label:$id$$23$$});
          }
          $callback$$90$$($ordered$$1$$);
        } : $$$$12$$.noop});
      });
    }
    return $opts$$15$$;
  }, $_selectChoice$:function($choice$$2$$) {
    var $selected$$7$$ = this.$container$.find("." + this.$_classNm$ + "-selected-choice.oj-focus");
    $selected$$7$$.length && $choice$$2$$ && $choice$$2$$[0] == $selected$$7$$[0] || ($selected$$7$$.length && this.$opts$.element.trigger("choice-deselected", $selected$$7$$), $selected$$7$$.removeClass("oj-focus"), $choice$$2$$ && $choice$$2$$.length && (this.close(), $choice$$2$$.addClass("oj-focus"), this.$container$.find("." + this.$_classNm$ + "-description").text($choice$$2$$.attr("valueText") + ". Press back space to delete.").attr("aria-live", "assertive"), this.$opts$.element.trigger("choice-selected", 
    $choice$$2$$)));
  }, _destroy:function() {
    $$$$12$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_AbstractMultiChoice$$.$superclass$._destroy.apply(this, arguments);
  }, $_initContainer$:function() {
    var $selector$$23$$ = "." + this.$_classNm$ + "-choices", $selection$$2$$, $idSuffix$$1$$ = $_ComboUtils$$.$nextUid$(), $elementLabel$$1$$;
    this.$searchContainer$ = this.$container$.find("." + this.$_classNm$ + "-search-field");
    this.selection = $selection$$2$$ = this.$container$.find($selector$$23$$);
    var $_this$$ = this;
    this.selection.on("click", "." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)", function() {
      $_this$$.search[0].focus();
      $_this$$.$_selectChoice$($$$$12$$(this));
    });
    $elementLabel$$1$$ = $$$$12$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$1$$.attr("id") || $elementLabel$$1$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix$$1$$);
    $selection$$2$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix$$1$$);
    this.$results$.attr("id") || this.$results$.attr("id", "oj-listbox-results-" + $idSuffix$$1$$);
    this.search.attr("aria-owns", this.$results$.attr("id"));
    this.search.attr("aria-labelledby", $elementLabel$$1$$.attr("id"));
    this.$opts$.element.attr("aria-labelledby", $elementLabel$$1$$.attr("id"));
    this.search.attr("id") && $elementLabel$$1$$.attr("for", this.search.attr("id"));
    this.$opts$.element.attr("aria-label") && this.search.attr("aria-label", this.$opts$.element.attr("aria-label"));
    this.$opts$.element.attr("aria-controls") && this.search.attr("aria-controls", this.$opts$.element.attr("aria-controls"));
    this.search.attr("tabindex", this.$elementTabIndex$);
    this.$keydowns$ = 0;
    this.search.on("keydown", this.$_bind$(function($e$$75$$) {
      if (this.$_isInterfaceEnabled$()) {
        ++this.$keydowns$;
        var $selected$$8$$ = $selection$$2$$.find("." + this.$_classNm$ + "-selected-choice.oj-focus"), $prev$$ = $selected$$8$$.prev("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)"), $next$$ = $selected$$8$$.next("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)"), $pos$$8_selectedChoice$$ = $_ComboUtils$$.$getCursorInfo$(this.search);
        if (!$selected$$8$$.length || $e$$75$$.which != $_ComboUtils$$.$KEY$.LEFT && $e$$75$$.which != $_ComboUtils$$.$KEY$.RIGHT && $e$$75$$.which != $_ComboUtils$$.$KEY$.$BACKSPACE$ && $e$$75$$.which != $_ComboUtils$$.$KEY$.$DELETE$ && $e$$75$$.which != $_ComboUtils$$.$KEY$.ENTER) {
          if (($e$$75$$.which !== $_ComboUtils$$.$KEY$.$BACKSPACE$ || 1 != this.$keydowns$) && $e$$75$$.which != $_ComboUtils$$.$KEY$.LEFT || 0 != $pos$$8_selectedChoice$$.offset || $pos$$8_selectedChoice$$.length) {
            this.$_selectChoice$(null);
            if (this.$_opened$()) {
              switch($e$$75$$.which) {
                case $_ComboUtils$$.$KEY$.UP:
                ;
                case $_ComboUtils$$.$KEY$.DOWN:
                  this.$_moveHighlight$($e$$75$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1);
                  $_ComboUtils$$.$killEvent$($e$$75$$);
                  return;
                case $_ComboUtils$$.$KEY$.ENTER:
                  this.$_selectHighlighted$(null, $e$$75$$);
                  $_ComboUtils$$.$killEvent$($e$$75$$);
                  return;
                case $_ComboUtils$$.$KEY$.TAB:
                  this.close($e$$75$$);
                  return;
                case $_ComboUtils$$.$KEY$.$ESC$:
                  this.$_cancel$($e$$75$$);
                  $_ComboUtils$$.$killEvent$($e$$75$$);
                  return;
              }
            }
            if (!($e$$75$$.which === $_ComboUtils$$.$KEY$.TAB || $_ComboUtils$$.$KEY$.$isControl$($e$$75$$) || $_ComboUtils$$.$KEY$.$isFunctionKey$($e$$75$$) || $e$$75$$.which === $_ComboUtils$$.$KEY$.$ESC$ || $e$$75$$.which === $_ComboUtils$$.$KEY$.ENTER && this.search.val() && "ojcombobox" === this.$_elemNm$)) {
              switch($e$$75$$.which) {
                case $_ComboUtils$$.$KEY$.UP:
                ;
                case $_ComboUtils$$.$KEY$.DOWN:
                  this.open();
                  $_ComboUtils$$.$killEvent$($e$$75$$);
                  break;
                case $_ComboUtils$$.$KEY$.PAGE_UP:
                ;
                case $_ComboUtils$$.$KEY$.PAGE_DOWN:
                  $_ComboUtils$$.$killEvent$($e$$75$$);
                  break;
                case $_ComboUtils$$.$KEY$.ENTER:
                  $_ComboUtils$$.$killEvent$($e$$75$$);
              }
            }
          } else {
            this.$_selectChoice$($selection$$2$$.find("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)").last()), $_ComboUtils$$.$killEvent$($e$$75$$);
          }
        } else {
          $pos$$8_selectedChoice$$ = $selected$$8$$, $e$$75$$.which == $_ComboUtils$$.$KEY$.LEFT && $prev$$.length ? $pos$$8_selectedChoice$$ = $prev$$ : $e$$75$$.which == $_ComboUtils$$.$KEY$.RIGHT ? $pos$$8_selectedChoice$$ = $next$$.length ? $next$$ : null : $e$$75$$.which === $_ComboUtils$$.$KEY$.$BACKSPACE$ ? (this.$_unselect$($selected$$8$$.first(), $e$$75$$), this.search.width(10), $pos$$8_selectedChoice$$ = $prev$$.length ? $prev$$ : $next$$) : $e$$75$$.which == $_ComboUtils$$.$KEY$.$DELETE$ ? 
          (this.$_unselect$($selected$$8$$.first(), $e$$75$$), this.search.width(10), $pos$$8_selectedChoice$$ = $next$$.length ? $next$$ : null) : $e$$75$$.which == $_ComboUtils$$.$KEY$.ENTER && ($pos$$8_selectedChoice$$ = null), this.$_selectChoice$($pos$$8_selectedChoice$$), $_ComboUtils$$.$killEvent$($e$$75$$), $pos$$8_selectedChoice$$ && $pos$$8_selectedChoice$$.length || this.open();
        }
      }
    }));
    this.search.on("keyup", this.$_bind$(function() {
      this.$keydowns$ = 0;
    }));
    this.search.on("input", this.$_bind$(function($e$$77$$) {
      this.$ojContext$.$_SetRawValue$(this.search.val(), $e$$77$$);
    }));
    this.search.on("blur keyup", this.$_bind$(function($e$$78$$) {
      if ("keyup" !== $e$$78$$.type || 10 === $e$$78$$.keyCode || 13 === $e$$78$$.keyCode) {
        if (this.$opts$.manageNewEntry && this.search.val() && 0 >= this.$results$.find(".oj-hover").length) {
          var $data$$93$$ = this.$opts$.manageNewEntry(this.search.val());
          this.$_onSelect$($data$$93$$, {trigger:"blur" === $e$$78$$.type ? $_ComboUtils$$.$ValueChangeTriggerTypes$.$BLUR$ : $_ComboUtils$$.$ValueChangeTriggerTypes$.$ENTER_PRESSED$}, $e$$78$$);
        }
        this.search.removeClass(this.$_classNm$ + "-focused");
        this.$container$.removeClass("oj-focus");
        this.$_selectChoice$(null);
        this.$_opened$() || this.$_clearSearch$();
        $e$$78$$.stopImmediatePropagation();
      }
    }));
    this.$container$.on("click touchstart", $selector$$23$$, this.$_bind$(function($e$$79$$) {
      !this.$_isInterfaceEnabled$() || 0 < $$$$12$$($e$$79$$.target).closest("." + this.$_classNm$ + "-selected-choice").length || (this.$_selectChoice$(null), this.$_opened$() ? this.close($e$$79$$) : (this.open(), this.$_focusSearch$()), $e$$79$$.preventDefault());
    }));
    this.$container$.on("focus", $selector$$23$$, this.$_bind$(function() {
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.hide().attr("aria-hidden", !0);
    this.$_clearSearch$();
  }, $_enableInterface$:function() {
    $_AbstractMultiChoice$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$());
  }, $_initSelection$:function() {
    null !== this.$getVal$() && 0 !== this.$getVal$().length || "oj-select" !== this.$_classNm$ && "" !== this.$opts$.element.text() || (this.$_updateSelection$([]), this.close(), this.$_clearSearch$());
    if (this.$datalist$ || null !== this.$getVal$() && this.$getVal$().length) {
      var $self$$84$$ = this;
      this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, function($data$$95$$) {
        void 0 !== $data$$95$$ && null !== $data$$95$$ && 0 !== $data$$95$$.length && ($self$$84$$.$_updateSelection$($data$$95$$), $self$$84$$.close(), $self$$84$$.$_clearSearch$());
      });
    }
  }, $_clearSearch$:function() {
    var $placeholder$$3$$ = this.$_getPlaceholder$(), $maxWidth$$ = this.$_getMaxSearchWidth$();
    void 0 === $placeholder$$3$$ || this.$getVal$() && 0 !== this.$getVal$().length ? (this.search.attr("placeholder", ""), this.search.val("").width(10), this.$searchContainer$.width("auto")) : (this.search.attr("placeholder", $placeholder$$3$$), this.search.val("").width(0 < $maxWidth$$ ? $maxWidth$$ : this.$container$.css("width")), this.$searchContainer$.width("100%"));
  }, $_opening$:function($event$$125$$, $dontUpdateResults$$3$$) {
    this.$_resizeSearch$();
    $_AbstractMultiChoice$$.$superclass$.$_opening$.apply(this, arguments);
    this.$_focusSearch$();
    $dontUpdateResults$$3$$ || this.$_updateResults$(!0);
    this.search.focus();
  }, close:function($event$$126$$) {
    this.$_opened$() && $_AbstractMultiChoice$$.$superclass$.close.apply(this, arguments);
  }, $_focus$:function() {
    this.close();
    this.search.focus();
  }, $_updateSelection$:function($data$$96$$) {
    var $ids$$3$$ = [], $filtered$$2$$ = [], $self$$85$$ = this;
    $$$$12$$($data$$96$$).each(function() {
      0 > $ids$$3$$.indexOf($self$$85$$.id(this)) && ($ids$$3$$.push($self$$85$$.id(this)), $filtered$$2$$.push(this));
    });
    $data$$96$$ = $filtered$$2$$;
    this.selection.find("." + this.$_classNm$ + "-selected-choice").remove();
    $$$$12$$($data$$96$$).each(function() {
      $self$$85$$.$_addSelectedChoice$(this);
    });
    this.currentItem = $data$$96$$;
    this.$opts$.element.val(0 === $ids$$3$$.length ? "" : $ids$$3$$.join(this.$opts$.separator));
    $self$$85$$.$_postprocessResults$();
  }, $_onSelect$:function($data$$97$$, $options$$230$$, $event$$127$$) {
    if (this.$_triggerSelect$($data$$97$$)) {
      var $context$$63$$;
      $options$$230$$ && $options$$230$$.trigger && ($context$$63$$ = {$optionMetadata$:{trigger:$options$$230$$.trigger}});
      var $id$$24$$ = this.id($data$$97$$), $val$$32$$ = this.$getVal$() ? this.$getVal$().slice(0) : [];
      this.$ojContext$.isValid() || ($val$$32$$ = $_ComboUtils$$.$splitVal$(this.$opts$.element.val(), this.$opts$.separator));
      $$$$12$$($data$$97$$).each(function() {
        0 > $val$$32$$.indexOf($id$$24$$) && $val$$32$$.push($id$$24$$);
      });
      this.$setVal$($val$$32$$, $event$$127$$, $context$$63$$);
      !this.select && this.$opts$.$closeOnSelect$ || this.$_postprocessResults$($data$$97$$, !1, !0 === this.$opts$.$closeOnSelect$);
      this.$opts$.$closeOnSelect$ && (this.close($event$$127$$), this.search.width(10));
      $options$$230$$ && $options$$230$$.$noFocus$ || this.$_focusSearch$();
    }
  }, $_cancel$:function($event$$128$$) {
    this.close($event$$128$$);
    this.$_focusSearch$();
  }, $_addSelectedChoice$:function($data$$98$$) {
    var $enableChoice$$ = !$data$$98$$.locked, $choice$$3_enabledItem$$ = $$$$12$$("\x3cli class\x3d'" + this.$_classNm$ + "-selected-choice'\x3e    \x3cdiv\x3e\x3c/div\x3e    \x3ca href\x3d'#' onclick\x3d'return false;' role\x3d'button' aria-label\x3d'remove' class\x3d'" + this.$_classNm$ + "-clear-entry       oj-component-icon oj-clickable-icon-nocontext " + this.$_classNm$ + "-clear-entry-icon' tabindex\x3d'-1'\x3e    \x3c/a\x3e\x3c/li\x3e"), $disabledItem_formatted$$3$$ = $$$$12$$("\x3cli class\x3d'" + 
    this.$_classNm$ + "-selected-choice " + this.$_classNm$ + "-locked'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/li\x3e"), $choice$$3_enabledItem$$ = $enableChoice$$ ? $choice$$3_enabledItem$$ : $disabledItem_formatted$$3$$;
    this.id($data$$98$$);
    $disabledItem_formatted$$3$$ = this.$opts$.$formatSelection$($data$$98$$);
    void 0 !== $disabledItem_formatted$$3$$ && ($choice$$3_enabledItem$$.find("div").addClass(this.$_classNm$ + "-selected-choice-label").text($disabledItem_formatted$$3$$), $choice$$3_enabledItem$$.find("." + this.$_classNm$ + "-clear-entry").attr("aria-label", $disabledItem_formatted$$3$$ + " remove"), $choice$$3_enabledItem$$.attr("valueText", $disabledItem_formatted$$3$$));
    if ($enableChoice$$) {
      $choice$$3_enabledItem$$.find("." + this.$_classNm$ + "-clear-entry").on("mousedown", $_ComboUtils$$.$killEvent$).on("click dblclick", this.$_bind$(function($e$$80$$) {
        this.$_isInterfaceEnabled$() && ($$$$12$$($e$$80$$.target).closest("." + this.$_classNm$ + "-selected-choice").fadeOut("fast", this.$_bind$(function() {
          this.$_unselect$($$$$12$$($e$$80$$.target), $e$$80$$);
          this.selection.find("." + this.$_classNm$ + "-selected-choice.oj-focus").removeClass("oj-focus");
          this.close($e$$80$$);
          this.$_focusSearch$();
        })).dequeue(), $_ComboUtils$$.$killEvent$($e$$80$$));
      }));
    }
    $choice$$3_enabledItem$$.data(this.$_elemNm$, $data$$98$$);
    $choice$$3_enabledItem$$.insertBefore(this.$searchContainer$);
  }, $_unselect$:function($selected$$9$$, $event$$129$$) {
    var $val$$33$$ = this.$getVal$() ? this.$getVal$().slice(0) : [], $data$$99$$, $index$$108$$;
    $selected$$9$$ = $selected$$9$$.closest("." + this.$_classNm$ + "-selected-choice");
    if (0 === $selected$$9$$.length) {
      throw "Invalid argument: " + $selected$$9$$ + ". Must be ." + this.$_classNm$ + "-selected-choice";
    }
    if ($data$$99$$ = $selected$$9$$.data(this.$_elemNm$)) {
      for (this.$ojContext$.isValid() || ($val$$33$$ = $_ComboUtils$$.$splitVal$(this.$opts$.element.val(), this.$opts$.separator));0 <= ($index$$108$$ = $val$$33$$.indexOf(this.id($data$$99$$)));) {
        $val$$33$$.splice($index$$108$$, 1), this.$setVal$($val$$33$$, $event$$129$$), this.select && this.$_postprocessResults$();
      }
      $selected$$9$$.remove();
    }
  }, $_postprocessResults$:function() {
    var $val$$34$$ = this.$getVal$() && (this.$opts$.element.val() || this.$ojContext$.isValid()) ? this.$getVal$() : [], $choices$$3$$ = this.$results$.find(".oj-listbox-result"), $compound$$ = this.$results$.find(".oj-listbox-result-with-children"), $self$$86$$ = this;
    $_ComboUtils$$.$each2$($choices$$3$$, function($i$$162$$, $choice$$4$$) {
      var $id$$26$$ = $self$$86$$.id($choice$$4$$.data($self$$86$$.$_elemNm$));
      $val$$34$$ && 0 <= $val$$34$$.indexOf($id$$26$$) && ($choice$$4$$.addClass("oj-selected"), $choice$$4$$.find(".oj-listbox-result-selectable").addClass("oj-selected"));
    });
    $_ComboUtils$$.$each2$($compound$$, function($i$$163$$, $choice$$5$$) {
      $choice$$5$$.is(".oj-listbox-result-selectable") || 0 !== $choice$$5$$.find(".oj-listbox-result-selectable:not(.oj-selected)").length || $choice$$5$$.addClass("oj-selected");
    });
    0 < !$choices$$3$$.filter(".oj-listbox-result:not(.oj-selected)").length && this.close();
  }, $_getMaxSearchWidth$:function() {
    return this.selection.width() - $_ComboUtils$$.$getSideBorderPadding$(this.search);
  }, $_textWidth$:function($text$$15_textNode$$) {
    var $textSpan_width$$16$$ = document.createElement("span");
    $text$$15_textNode$$ = document.createTextNode($text$$15_textNode$$);
    $textSpan_width$$16$$.style.display = "none";
    $textSpan_width$$16$$.appendChild($text$$15_textNode$$);
    $$$$12$$("body").append($textSpan_width$$16$$);
    $textSpan_width$$16$$ = $$$$12$$("body").find("span:last").width();
    $$$$12$$("body").find("span:last").remove();
    return $textSpan_width$$16$$;
  }, $_resizeSearch$:function() {
    var $minimumWidth$$, $left$$5_searchWidth$$, $maxWidth$$1$$, $containerLeft$$, $sideBorderPadding$$ = $_ComboUtils$$.$getSideBorderPadding$(this.search);
    $minimumWidth$$ = this.$_textWidth$(this.search.val()) + 10;
    $left$$5_searchWidth$$ = this.search.offset().left;
    $maxWidth$$1$$ = this.selection.width();
    $containerLeft$$ = this.selection.offset().left;
    $left$$5_searchWidth$$ = $maxWidth$$1$$ - ($left$$5_searchWidth$$ - $containerLeft$$) - $sideBorderPadding$$;
    $left$$5_searchWidth$$ < $minimumWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    40 > $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    0 >= $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $minimumWidth$$);
    this.search.width(Math.floor($left$$5_searchWidth$$));
  }, $setVal$:function($options$$231_val$$35$$, $event$$130$$, $context$$64$$) {
    var $unique$$;
    $unique$$ = [];
    "string" === typeof $options$$231_val$$35$$ && ($options$$231_val$$35$$ = $_ComboUtils$$.$splitVal$($options$$231_val$$35$$, this.$opts$.separator));
    for (var $i$$164$$ = 0;$i$$164$$ < $options$$231_val$$35$$.length;$i$$164$$++) {
      0 > $unique$$.indexOf($options$$231_val$$35$$[$i$$164$$]) && $unique$$.push($options$$231_val$$35$$[$i$$164$$]);
    }
    $options$$231_val$$35$$ = {$doValueChangeCheck$:!1};
    $context$$64$$ && ($options$$231_val$$35$$._context = $context$$64$$);
    this.$ojContext$.$_SetValue$($unique$$, $event$$130$$, $options$$231_val$$35$$);
    (this.$ojContext$.isValid() || 0 === $unique$$.length) && this.$opts$.element.val(0 === $unique$$.length ? "" : $unique$$.join(this.$opts$.separator));
    this.search.attr("aria-activedescendant", this.$opts$.element.attr("id"));
  }}), $_OjMultiCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractMultiChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-combobox oj-combobox-multi oj-component"}).html("\x3cul class\x3d'oj-combobox-choices'\x3e  \x3cli class\x3d'oj-combobox-search-field'\x3e    \x3cinput type\x3d'text' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off' spellcheck\x3d'false' class\x3d'oj-combobox-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'oj-combobox-description oj-helper-hidden-accessible'/\x3e\x3cdiv class\x3d'oj-listbox-drop oj-listbox-drop-multi' style\x3d'display:none'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }}), $_OjMultiSelect$$ = $_ComboUtils$$.$clazz$($_AbstractMultiChoice$$, {$_elemNm$:"ojselect", $_classNm$:"oj-select", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-select oj-select-multi oj-component"}).html("\x3cul class\x3d'oj-select-choices'\x3e  \x3cli class\x3d'oj-select-search-field'\x3e    \x3cinput type\x3d'text' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off' spellcheck\x3d'false' class\x3d'oj-listbox-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'oj-select-description oj-helper-hidden-accessible'/\x3e\x3cdiv class\x3d'oj-listbox-drop oj-listbox-drop-multi' style\x3d'display:none'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }});
  $oj$$12$$.$__registerWidget$("oj.ojCombobox", $$$$12$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:void 0, placeholder:"", list:void 0, multiple:!1, options:null, optionsKeys:null, optionRenderer:null, minLength:0, beforeExpand:null, rawValue:void 0}, widget:function() {
    return this.$combobox$.$container$;
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_InitOptions$:function($originalDefaults$$6$$, $constructorOptions$$8$$) {
    this._super($originalDefaults$$6$$, $constructorOptions$$8$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"placeholder"}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title"}], $constructorOptions$$8$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$198$$ = this.options.value;
      Array.isArray($value$$198$$) ? $value$$198$$ = $value$$198$$.slice(0) : "string" === typeof $value$$198$$ && ($value$$198$$ = !0 === this.options.multiple ? $_ComboUtils$$.$splitVal$($value$$198$$, ",") : [$value$$198$$]);
      this.options.value = $value$$198$$;
    }
  }, $_setup$:function() {
    var $opts$$16$$ = {}, $multiple$$ = this.options.multiple;
    $opts$$16$$.element = this.element;
    $opts$$16$$.$ojContext$ = this;
    $opts$$16$$ = $$$$12$$.extend(this.options, $opts$$16$$);
    this.$combobox$ = $multiple$$ ? new $_OjMultiCombobox$$ : new $_OjSingleCombobox$$;
    this.$combobox$._init($opts$$16$$);
  }, _destroy:function() {
    this.$combobox$._destroy();
    this._super();
  }, refresh:function() {
    this._super();
    this.$combobox$._destroy();
    this.$_setup$();
    this.$_SetRootAttributes$();
    this.$_Refresh$("required", this.options.required);
  }, _setOption:function($key$$61$$, $value$$199$$, $flags$$17$$) {
    "value" === $key$$61$$ && (Array.isArray($value$$199$$) ? $value$$199$$ = $value$$199$$.slice(0) : "string" === typeof $value$$199$$ && ($value$$199$$ = !0 === this.options.multiple ? $_ComboUtils$$.$splitVal$($value$$199$$, ",") : [$value$$199$$]), this.$combobox$.$valueChangeTrigger$ = $flags$$17$$ && $flags$$17$$._context && $flags$$17$$._context.$optionMetadata$ ? $flags$$17$$._context.$optionMetadata$.trigger : null);
    this._super($key$$61$$, $value$$199$$, $flags$$17$$);
    "options" === $key$$61$$ && (this.$combobox$.$opts$.options = $value$$199$$, this.$combobox$.$opts$ = this.$combobox$.$_prepareOpts$(this.$combobox$.$opts$));
    "disabled" === $key$$61$$ && ($value$$199$$ ? this.$combobox$.$_disable$() : this.$combobox$.$_enable$());
  }, $_NotifyDetached$:function() {
    this.$combobox$.close();
  }, $_NotifyHidden$:function() {
    this.$combobox$.close();
  }, $_SetDisplayValue$:function() {
    this.$combobox$.$_initSelection$();
  }, $_SetPlaceholder$:function($value$$200$$) {
    this.$combobox$ && (this.$combobox$.$opts$.placeholder = $value$$200$$, this.$combobox$.$_setPlaceholder$ && this.$combobox$.$_setPlaceholder$());
  }, validate:function() {
    var $displayValue$$4$$ = this.$combobox$.search.val(), $existingValue_newValue$$6$$ = null;
    !0 !== this.options.multiple ? $existingValue_newValue$$6$$ = void 0 === $displayValue$$4$$ || null === $displayValue$$4$$ || "" === $displayValue$$4$$ ? [] : [$displayValue$$4$$] : ($existingValue_newValue$$6$$ = this.$combobox$.$getVal$(), $existingValue_newValue$$6$$ = void 0 === $displayValue$$4$$ || null === $displayValue$$4$$ || "" === $displayValue$$4$$ ? $existingValue_newValue$$6$$ : $existingValue_newValue$$6$$.push($displayValue$$4$$));
    return this.$_SetValue$($existingValue_newValue$$6$$, null, this.$_VALIDATE_METHOD_OPTIONS$);
  }, $_parseValue$:function($submittedValue$$2$$) {
    var $parsedVal$$ = [];
    "string" === typeof $submittedValue$$2$$ && ($submittedValue$$2$$ = !0 === this.options.multiple ? $_ComboUtils$$.$splitVal$($submittedValue$$2$$, ",") : [$submittedValue$$2$$]);
    if (Array.isArray($submittedValue$$2$$)) {
      for (var $i$$165$$ = 0;$i$$165$$ < $submittedValue$$2$$.length;$i$$165$$++) {
        var $parsed$$2$$ = this._super($submittedValue$$2$$[$i$$165$$]);
        $parsedVal$$.push($parsed$$2$$.toString());
      }
    }
    return $parsedVal$$;
  }, _GetMessagingLauncherElement:function() {
    return this.$combobox$.search;
  }, $_GetContentElement$:function() {
    return this.$combobox$.search;
  }, _GetDefaultStyleClass:function() {
    return "oj-combobox";
  }, $_getDropdown$:function() {
    if (this.$combobox$ && this.$combobox$.$_opened$()) {
      for (var $dropdown$$4$$ = $$$$12$$(".oj-listbox-drop"), $i$$166$$ = 0;$i$$166$$ < $dropdown$$4$$.length;$i$$166$$++) {
        if ("oj-listbox-drop" == $$$$12$$($dropdown$$4$$[$i$$166$$]).attr("id") && $$$$12$$($dropdown$$4$$[$i$$166$$]).attr("data-oj-containerid") == this.$combobox$.$containerId$) {
          return $$$$12$$($dropdown$$4$$[$i$$166$$]);
        }
      }
    }
    return null;
  }, $_findItem$:function($list$$6$$, $value$$201$$) {
    for (var $i$$167$$ = 0;$i$$167$$ < $list$$6$$.length;$i$$167$$++) {
      if ($$$$12$$($list$$6$$[$i$$167$$]).data("ojcombobox").value === $value$$201$$) {
        return $list$$6$$[$i$$167$$];
      }
    }
    return null;
  }, getNodeBySubId:function($item$$12_locator$$12$$) {
    var $list$$7_node$$39_selectedItems$$ = null, $subId$$8$$;
    if (null == $item$$12_locator$$12$$) {
      return this.$combobox$.$container$ ? this.$combobox$.$container$[0] : null;
    }
    $list$$7_node$$39_selectedItems$$ = this._super($item$$12_locator$$12$$);
    if (!$list$$7_node$$39_selectedItems$$) {
      $subId$$8$$ = $item$$12_locator$$12$$.subId;
      "oj-combobox-drop" === $subId$$8$$ && ($subId$$8$$ = "oj-listbox-drop");
      "oj-combobox-results" === $subId$$8$$ && ($subId$$8$$ = "oj-listbox-results");
      "oj-combobox-selection" === $subId$$8$$ && ($subId$$8$$ = "oj-combobox-selected-choice");
      var $dropdown$$5$$ = this.$_getDropdown$();
      switch($subId$$8$$) {
        case "oj-combobox-input":
        ;
        case "oj-combobox-arrow":
          $list$$7_node$$39_selectedItems$$ = this.widget().find("." + $subId$$8$$)[0];
          break;
        case "oj-listitem":
          $dropdown$$5$$ && ($list$$7_node$$39_selectedItems$$ = $dropdown$$5$$.find(".oj-listbox-result"), $list$$7_node$$39_selectedItems$$ = this.$_findItem$($list$$7_node$$39_selectedItems$$, $item$$12_locator$$12$$.value));
          break;
        case "oj-combobox-remove":
          $list$$7_node$$39_selectedItems$$ = this.widget().find(".oj-combobox-selected-choice");
          $list$$7_node$$39_selectedItems$$ = ($item$$12_locator$$12$$ = this.$_findItem$($list$$7_node$$39_selectedItems$$, $item$$12_locator$$12$$.value)) ? $$$$12$$($item$$12_locator$$12$$).find(".oj-combobox-clear-entry-icon")[0] : null;
          break;
        case "oj-listbox-drop":
          $dropdown$$5$$ && ($list$$7_node$$39_selectedItems$$ = $dropdown$$5$$[0]);
          break;
        case "oj-listbox-results":
          $dropdown$$5$$ && ($list$$7_node$$39_selectedItems$$ = $dropdown$$5$$.find("." + $subId$$8$$)[0]);
          break;
        case "oj-combobox-selected-choice":
          $list$$7_node$$39_selectedItems$$ = this.widget().find("." + $subId$$8$$).toArray();
      }
    }
    return $list$$7_node$$39_selectedItems$$ || null;
  }, getSubIdByNode:function($node$$40_nodeCached$$) {
    var $subId$$9$$ = null;
    null != $node$$40_nodeCached$$ && ($node$$40_nodeCached$$ = $$$$12$$($node$$40_nodeCached$$), $node$$40_nodeCached$$.hasClass("oj-combobox-input") ? $subId$$9$$ = {subId:"oj-combobox-input"} : $node$$40_nodeCached$$.hasClass("oj-combobox-arrow") ? $subId$$9$$ = {subId:"oj-combobox-arrow"} : $node$$40_nodeCached$$.hasClass("oj-listbox-result") ? $subId$$9$$ = {subId:"oj-listitem", value:$node$$40_nodeCached$$.data("ojcombobox").value} : $node$$40_nodeCached$$.hasClass("oj-combobox-clear-entry-icon") && 
    ($subId$$9$$ = {subId:"oj-combobox-remove", value:$node$$40_nodeCached$$.closest(".oj-combobox-selected-choice").data("ojcombobox").value}));
    return $subId$$9$$;
  }});
  var $_OjInputSeachContainer$$ = $_ComboUtils$$.$clazz$($_OjSingleCombobox$$, {$_elemNm$:"ojinputsearch", $_classNm$:"oj-inputsearch", $_createContainer$:function() {
    var $container$$17$$ = $$$$12$$(document.createElement("div")).attr({"class":"oj-inputsearch oj-component"}).html("\x3cdiv class\x3d'oj-inputsearch-choice' tabindex\x3d'-1' role\x3d'presentation'\x3e   \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'       spellcheck\x3d'false' class\x3d'oj-inputsearch-input' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e   \x3ca class\x3d'oj-inputsearch-search-button oj-inputsearch-search-icon oj-component-icon oj-clickable-icon-nocontext'       role\x3d'button' aria-label\x3d'search'\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop' style\x3d'display:none' role\x3d'presentation'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e"), 
    $trigger$$2$$ = $container$$17$$.find(".oj-inputsearch-search-button");
    this.$_attachSearchIconClickHandler$($trigger$$2$$);
    return $container$$17$$;
  }, $_attachSearchIconClickHandler$:function($trigger$$3$$) {
    var $self$$87$$ = this;
    $trigger$$3$$.on("click", function($event$$131$$) {
      if ($self$$87$$.$_isInterfaceEnabled$()) {
        if ($self$$87$$.$opts$.manageNewEntry) {
          var $data$$101$$ = $self$$87$$.$opts$.manageNewEntry($self$$87$$.search.val());
          $self$$87$$.$_onSelect$($data$$101$$, {trigger:$_ComboUtils$$.$ValueChangeTriggerTypes$.$SEARCH_ICON_CLICKED$}, $event$$131$$);
        }
        return!1;
      }
    }).on("mousedown", function($event$$132$$) {
      $event$$132$$.stopPropagation();
      return!1;
    });
  }, $_enable$:function($enabled$$5$$) {
    $_OjInputSeachContainer$$.$superclass$.$_enable$.apply(this, arguments);
    this.$_enabled$ ? this.$container$.find(".oj-inputsearch-search-button").removeClass("oj-disabled") : this.$container$.find(".oj-inputsearch-search-button").addClass("oj-disabled");
  }});
  $oj$$12$$.$__registerWidget$("oj.ojInputSearch", $$$$12$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{placeholder:void 0, options:null, optionsKeys:null, optionRenderer:null, minLength:0, beforeExpand:null, rawValue:void 0, optionChange:null}, widget:function() {
    return this.$inputSearch$.$container$;
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_InitOptions$:function($originalDefaults$$7$$, $constructorOptions$$9$$) {
    this._super($originalDefaults$$7$$, $constructorOptions$$9$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $defaultOptionValue$:null, $validateOption$:!0}, {$attribute$:"placeholder", $defaultOptionValue$:""}, {$attribute$:"required", $defaultOptionValue$:!1, $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title", $defaultOptionValue$:""}], $constructorOptions$$9$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$202$$ = this.options.value;
      Array.isArray($value$$202$$) ? $value$$202$$ = $value$$202$$.slice(0) : "string" === typeof $value$$202$$ && ($value$$202$$ = [$value$$202$$]);
      this.options.value = $value$$202$$;
    }
  }, $_setup$:function() {
    var $opts$$17$$ = {};
    $opts$$17$$.element = this.element;
    $opts$$17$$.$ojContext$ = this;
    $opts$$17$$.$inputSearch$ = !0;
    $opts$$17$$ = $$$$12$$.extend(this.options, $opts$$17$$);
    this.$inputSearch$ = new $_OjInputSeachContainer$$;
    this.$inputSearch$._init($opts$$17$$);
  }, _destroy:function() {
    this.$inputSearch$._destroy();
    this._super();
  }, refresh:function() {
    this._super();
    this.$inputSearch$._destroy();
    this.$_setup$();
    this.$_SetRootAttributes$();
    this.$_Refresh$("required", this.options.required);
  }, _setOption:function($key$$62$$, $value$$203$$, $flags$$18$$) {
    "value" === $key$$62$$ && (Array.isArray($value$$203$$) ? $value$$203$$ = $value$$203$$.slice(0) : "string" === typeof $value$$203$$ && ($value$$203$$ = [$value$$203$$]), this.$inputSearch$.$valueChangeTrigger$ = $flags$$18$$ && $flags$$18$$._context && $flags$$18$$._context.$optionMetadata$ ? $flags$$18$$._context.$optionMetadata$.trigger : null);
    this._super($key$$62$$, $value$$203$$, $flags$$18$$);
    "options" === $key$$62$$ && (this.$inputSearch$.$opts$.options = $value$$203$$, this.$inputSearch$.$opts$ = this.$inputSearch$.$_prepareOpts$(this.$inputSearch$.$opts$));
    "disabled" === $key$$62$$ && ($value$$203$$ ? this.$inputSearch$.$_disable$() : this.$inputSearch$.$_enable$());
  }, $_NotifyDetached$:function() {
    this.$inputSearch$.close();
  }, $_NotifyHidden$:function() {
    this.$inputSearch$.close();
  }, $_SetDisplayValue$:function() {
    this.$inputSearch$.$_initSelection$();
  }, $_SetPlaceholder$:function($value$$204$$) {
    this.$inputSearch$ && (this.$inputSearch$.$opts$.placeholder = $value$$204$$, this.$inputSearch$.$_setPlaceholder$ && this.$inputSearch$.$_setPlaceholder$());
  }, validate:function() {
    var $displayValue$$6$$ = this.$inputSearch$.search.val(), $existingValue$$1_newValue$$7$$ = null, $existingValue$$1_newValue$$7$$ = this.$inputSearch$.$getVal$(), $existingValue$$1_newValue$$7$$ = void 0 === $displayValue$$6$$ || null === $displayValue$$6$$ || "" === $displayValue$$6$$ ? $existingValue$$1_newValue$$7$$ : $existingValue$$1_newValue$$7$$.push($displayValue$$6$$);
    return this.$_SetValue$($existingValue$$1_newValue$$7$$, null, this.$_VALIDATE_METHOD_OPTIONS$);
  }, $_parseValue$:function($submittedValue$$3$$) {
    var $parsedVal$$1$$ = [];
    "string" === typeof $submittedValue$$3$$ && ($submittedValue$$3$$ = [$submittedValue$$3$$]);
    if (Array.isArray($submittedValue$$3$$)) {
      for (var $i$$168$$ = 0;$i$$168$$ < $submittedValue$$3$$.length;$i$$168$$++) {
        var $parsed$$3$$ = this._super($submittedValue$$3$$[$i$$168$$]);
        $parsedVal$$1$$.push($parsed$$3$$.toString());
      }
    }
    return $parsedVal$$1$$;
  }, _GetMessagingLauncherElement:function() {
    return this.$inputSearch$.search;
  }, $_GetContentElement$:function() {
    return this.$inputSearch$.search;
  }, _GetDefaultStyleClass:function() {
    return "oj-inputsearch";
  }, $_getDropdown$:function() {
    if (this.$inputSearch$ && this.$inputSearch$.$_opened$()) {
      for (var $dropdown$$6$$ = $$$$12$$(".oj-listbox-drop"), $i$$169$$ = 0;$i$$169$$ < $dropdown$$6$$.length;$i$$169$$++) {
        if ("oj-listbox-drop" == $$$$12$$($dropdown$$6$$[$i$$169$$]).attr("id") && $$$$12$$($dropdown$$6$$[$i$$169$$]).attr("data-oj-containerid") == this.$inputSearch$.$containerId$) {
          return $$$$12$$($dropdown$$6$$[$i$$169$$]);
        }
      }
    }
    return null;
  }, expand:function() {
    this.$inputSearch$.open();
  }, collapse:function() {
    this.$inputSearch$.close();
  }, getNodeBySubId:function($locator$$13$$) {
    var $list$$8_node$$41$$ = null, $dropdown$$7_subId$$10$$;
    if (null === $locator$$13$$) {
      return this.$inputSearch$.$container$ ? this.$inputSearch$.$container$[0] : null;
    }
    $list$$8_node$$41$$ = this._super($locator$$13$$);
    if (!$list$$8_node$$41$$) {
      switch($dropdown$$7_subId$$10$$ = $locator$$13$$.subId, "oj-inputsearch-search" === $dropdown$$7_subId$$10$$ && ($dropdown$$7_subId$$10$$ = "oj-inputsearch-search-button"), $dropdown$$7_subId$$10$$) {
        case "oj-inputsearch-input":
        ;
        case "oj-inputsearch-search-button":
          $list$$8_node$$41$$ = this.widget().find("." + $dropdown$$7_subId$$10$$)[0];
          break;
        case "oj-listitem":
          if ($dropdown$$7_subId$$10$$ = this.$_getDropdown$()) {
            $list$$8_node$$41$$ = $dropdown$$7_subId$$10$$.find(".oj-listbox-result"), $list$$8_node$$41$$ = this.$inputSearch$.$_findItem$($list$$8_node$$41$$, $locator$$13$$.value);
          }
        ;
      }
    }
    return $list$$8_node$$41$$ || null;
  }, getSubIdByNode:function($node$$42_nodeCached$$1$$) {
    var $subId$$11$$ = null;
    null != $node$$42_nodeCached$$1$$ && ($node$$42_nodeCached$$1$$ = $$$$12$$($node$$42_nodeCached$$1$$), $node$$42_nodeCached$$1$$.hasClass("oj-inputsearch-input") ? $subId$$11$$ = {subId:"oj-inputsearch-input"} : $node$$42_nodeCached$$1$$.hasClass("oj-inputsearch-search-button") ? $subId$$11$$ = {subId:"oj-inputsearch-search"} : $node$$42_nodeCached$$1$$.hasClass("oj-listbox-result") && ($subId$$11$$ = {subId:"oj-listitem", value:$node$$42_nodeCached$$1$$.data("ojinputsearch").value}));
    return $subId$$11$$;
  }});
  $oj$$12$$.$__registerWidget$("oj.ojSelect", $$$$12$$.oj.editableValue, {defaultElement:"\x3cselect\x3e", widgetEventPrefix:"oj", options:{minimumResultsForSearch:10, placeholder:null, list:void 0, multiple:!1, options:null, optionsKeys:null, beforeExpand:null, renderMode:"jet"}, widget:function() {
    return this.select ? this.select.$container$ : this.element.parent();
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_nativeSetDisabled$:function($disabled$$5$$) {
    $disabled$$5$$ ? (this.element.attr("disabled", ""), this.element.parent().addClass("oj-disabled").removeClass("oj-enabled")) : (this.element.removeAttr("disabled"), this.element.parent().removeClass("oj-disabled").addClass("oj-enabled"));
  }, $_nativeChangeHandler$:function($event$$133$$) {
    var $arr$$21$$ = [], $emptyValueAllowed$$ = !this.$_IsRequired$() && this.$_HasPlaceholderSet$();
    $$$$12$$($event$$133$$.target).find("option").each(function() {
      this.selected && (this.value || $emptyValueAllowed$$ && "" === this.value) && $arr$$21$$.push(this.value);
    });
    this.$_SetValue$($arr$$21$$, $event$$133$$, {$doValueChangeCheck$:!1});
  }, $_nativeSetup$:function() {
    var $element$$92$$ = this.element;
    $element$$92$$.wrap("\x3cdiv\x3e").parent().addClass("oj-select-native oj-component oj-select oj-form-control");
    $element$$92$$.addClass("oj-select-select oj-component-initnode");
    this.options.multiple ? ($element$$92$$.attr("multiple", ""), $element$$92$$.parent().prepend("\x3ca class\x3d'oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-multiple-open-icon' role\x3d'presentation'\x3e\x3c/a\x3e")) : $element$$92$$.parent().prepend("\x3ca class\x3d'oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-open-icon' role\x3d'presentation'\x3e\x3c/a\x3e");
    this.$_nativeSetDisabled$(this.options.disabled);
    this.options.list ? ($_ComboUtils$$.$listPopulateResults$($element$$92$$, $$$$12$$("#" + this.options.list).children(), this.$_formatValue$.bind(this)), $element$$92$$.addClass($_ComboUtils$$.$GENERATED_OPTIONS_SELECTOR$)) : this.options.options && ($_ComboUtils$$.$arrayPopulateResults$($element$$92$$, this.options.options, this.$_formatValue$.bind(this), this.options.optionsKeys), $element$$92$$.addClass($_ComboUtils$$.$GENERATED_OPTIONS_SELECTOR$));
    $element$$92$$.change(this.$_nativeChangeHandler$.bind(this));
  }, $_jetSetup$:function() {
    var $opts$$18$$ = {}, $multiple$$1$$ = this.options.multiple;
    $opts$$18$$.element = this.element;
    $opts$$18$$.$ojContext$ = this;
    $opts$$18$$ = $$$$12$$.extend(this.options, $opts$$18$$);
    this.select = $multiple$$1$$ ? new $_OjMultiSelect$$ : new $_OjSingleSelect$$;
    this.select._init($opts$$18$$);
    this.select.$container$.addClass("oj-select-jet oj-form-control");
  }, $_setup$:function() {
    this.$_isNative$() ? this.$_nativeSetup$() : this.$_jetSetup$();
  }, refresh:function() {
    this._super();
    this.$_cleanup$();
    this.$_setup$();
    this.$_SetRootAttributes$();
    this.$_Refresh$("required", this.options.required);
  }, _destroy:function() {
    this.$_cleanup$();
    this._super();
  }, $_NotifyDetached$:function() {
    this.select && this.select.close();
  }, $_NotifyHidden$:function() {
    this.select && this.select.close();
  }, $_SetPlaceholder$:function($value$$205$$) {
    if (this.$_isNative$() && null != $value$$205$$) {
      var $placeholder$$4$$ = $$$$12$$(this.element.children("option:first-child"));
      $placeholder$$4$$ && "" === $placeholder$$4$$.attr("value") ? ($placeholder$$4$$.text(this.options.placeholder), $placeholder$$4$$.attr("value", "")) : ($placeholder$$4$$ = $_ComboUtils$$.$createOptionTag$(0, "", $value$$205$$, this.$_formatValue$.bind(this)), $placeholder$$4$$.addClass("oj-listbox-placeholder"), $placeholder$$4$$.prependTo(this.element));
    }
  }, $_HasPlaceholderSet$:function() {
    return "string" === typeof this.options.placeholder;
  }, $_ClearPlaceholder$:function() {
    this.$_SetPlaceholderOption$(null);
    this.$_SetPlaceholder$(null);
  }, $_InitOptions$:function($originalDefaults$$8$$, $constructorOptions$$10$$) {
    this._super($originalDefaults$$8$$, $constructorOptions$$10$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"placeholder"}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title"}], $constructorOptions$$10$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$206$$ = this.options.value;
      Array.isArray($value$$206$$) && ($value$$206$$ = $value$$206$$.slice(0));
      this.options.value = $value$$206$$;
    }
  }, validate:function() {
    return this.select ? this.$_SetValue$(this.select.$getVal$(), null, this.$_VALIDATE_METHOD_OPTIONS$) : !0;
  }, $_SetDisplayValue$:function($children$$4_displayValue$$7$$) {
    this.select ? this.select.$_initSelection$() : null == $children$$4_displayValue$$7$$ ? this.$_HasPlaceholderSet$() ? (this.element[0].selectedIndex = 0, this.element.addClass("oj-select-default")) : ($children$$4_displayValue$$7$$ = this.element.children(), 0 < $children$$4_displayValue$$7$$.length && (this.options.value = [$children$$4_displayValue$$7$$.first().attr("value")])) : this.element.val($children$$4_displayValue$$7$$);
  }, $_nativeFindFirstEnabledOptionValue$:function() {
    var $enaOptions$$ = this.element.children("option:not(:disabled)");
    return 0 < $enaOptions$$.length ? [$$$$12$$($enaOptions$$[0]).attr("value")] : null;
  }, $_nativeSetOptions$:function($defVal_value$$207$$) {
    var $oSelected$$ = this.options.value, $element$$93$$ = this.element;
    if ($element$$93$$.hasClass($_ComboUtils$$.$GENERATED_OPTIONS_SELECTOR$)) {
      $_ComboUtils$$.$cleanupResults$($element$$93$$);
    } else {
      var $children$$5$$ = $element$$93$$.children();
      0 < $children$$5$$.length && $children$$5$$.remove();
    }
    $_ComboUtils$$.$arrayPopulateResults$($element$$93$$, $defVal_value$$207$$, this.$_formatValue$.bind(this), this.options.optionsKeys);
    $element$$93$$.addClass($_ComboUtils$$.$GENERATED_OPTIONS_SELECTOR$);
    $defVal_value$$207$$ = null;
    this.$_HasPlaceholderSet$() && (this.options.required && ($defVal_value$$207$$ = this.$_nativeFindFirstEnabledOptionValue$()), this.$_SetPlaceholder$());
    null === $defVal_value$$207$$ && ($defVal_value$$207$$ = this.$_nativeFindFirstEnabledOptionValue$());
    this.options.value = $defVal_value$$207$$;
    this._setOption("value", $oSelected$$);
  }, $_removePlaceholderInMultiValues$:function($valArr$$) {
    for (var $val$$36$$, $narr$$ = [], $i$$170$$ = 0;$i$$170$$ < $valArr$$.length;$i$$170$$++) {
      $val$$36$$ = $valArr$$[$i$$170$$], null != $val$$36$$ && (0 < $val$$36$$.length ? (1 == $narr$$.length && "" === $narr$$[0] && $narr$$.pop(), $narr$$.push($val$$36$$)) : 0 == $narr$$.length && $narr$$.push($val$$36$$));
    }
    return $narr$$;
  }, _setOption:function($key$$63$$, $value$$208$$, $flags$$19$$) {
    if ("value" === $key$$63$$) {
      if (this.$_HasPlaceholderSet$() && $value$$208$$ && 0 == $value$$208$$.length) {
        this._super($key$$63$$, $value$$208$$, $flags$$19$$);
      } else {
        var $element$$94_selected$$10$$;
        this.select && ($element$$94_selected$$10$$ = this.select.$datalist$, $element$$94_selected$$10$$ || ($element$$94_selected$$10$$ = this.select.$opts$.element));
        Array.isArray($value$$208$$) || ($value$$208$$ = [$value$$208$$]);
        this.$_isNative$() && ($value$$208$$ = this.$_removePlaceholderInMultiValues$($value$$208$$), 1 == $value$$208$$.length && "" == $value$$208$$[0] ? this.element.addClass("oj-select-default") : this.element.removeClass("oj-select-default"));
        for (var $newArr$$ = [], $i$$171$$ = 0;$i$$171$$ < $value$$208$$.length;$i$$171$$++) {
          this.select ? (this.options.multiple || this.select.$opts$.validate($element$$94_selected$$10$$, $value$$208$$[$i$$171$$])) && $newArr$$.push($value$$208$$[$i$$171$$]) : 0 < this.element.find("option[value\x3d'" + $value$$208$$[$i$$171$$] + "']").length && $newArr$$.push($value$$208$$[$i$$171$$]);
        }
        (0 < $newArr$$.length || this.options.multiple) && this._super($key$$63$$, $newArr$$, $flags$$19$$);
      }
    } else {
      "placeholder" === $key$$63$$ ? this.select ? (this.select.$opts$.placeholder = $value$$208$$, this.select.$_setPlaceholder$()) : ($element$$94_selected$$10$$ = this.options.value, $element$$94_selected$$10$$ && 0 !== $element$$94_selected$$10$$.length && $element$$94_selected$$10$$[0] || (this.element[0].selectedIndex = 0)) : "minimumResultsForSearch" === $key$$63$$ ? this.select && (this.select.$opts$.minimumResultsForSearch = $value$$208$$) : "renderMode" === $key$$63$$ && (this.$_cleanup$(), 
      this.options.renderMode = $value$$208$$, this.refresh()), this._super($key$$63$$, $value$$208$$, $flags$$19$$), "disabled" === $key$$63$$ ? this.select ? $value$$208$$ ? this.select.$_disable$() : this.select.$_enable$() : this.$_nativeSetDisabled$($value$$208$$) : "options" === $key$$63$$ && (this.select ? (this.select.$opts$.options = $value$$208$$, this.select.$opts$ = this.select.$_prepareOpts$(this.select.$opts$), this._super("value", this.select.$getVal$())) : this.$_nativeSetOptions$($value$$208$$))
      ;
    }
  }, $_getDropdown$:function() {
    if (this.select && this.select.$_opened$()) {
      var $dropdown$$8$$ = this.select.$dropdown$;
      if ($dropdown$$8$$ && $dropdown$$8$$.attr("data-oj-containerid") === this.select.$containerId$) {
        return $dropdown$$8$$;
      }
    }
    return null;
  }, $_isNative$:function() {
    return "native" === this.options.renderMode;
  }, $_cleanup$:function() {
    var $isNative$$ = this.$_isNative$();
    $isNative$$ && this.element.parent().hasClass("oj-select-native") ? (this.element.off("change"), this.element.hasClass($_ComboUtils$$.$GENERATED_OPTIONS_SELECTOR$) && $_ComboUtils$$.$cleanupResults$(this.element), this.element.parent().hasClass("oj-select-native") && (this.element.parent().children(".oj-select-arrow").remove(), this.element.unwrap()), this.element.removeClass("oj-select-select oj-component-initnode"), this.element.attr({"aria-labelledby":""})) : !$isNative$$ && this.select && 
    (this.select._destroy(), this.select = void 0);
  }, getNodeBySubId:function($container$$18_index$$109_item$$13_locator$$14$$) {
    var $list$$9_node$$43_selectedItems$$1$$ = null, $subId$$12$$;
    if (null == $container$$18_index$$109_item$$13_locator$$14$$) {
      return($container$$18_index$$109_item$$13_locator$$14$$ = this.widget()) ? $container$$18_index$$109_item$$13_locator$$14$$[0] : null;
    }
    if (this.$_isNative$()) {
      return null;
    }
    $list$$9_node$$43_selectedItems$$1$$ = this._super($container$$18_index$$109_item$$13_locator$$14$$);
    if (!$list$$9_node$$43_selectedItems$$1$$) {
      var $ddlist_dropdown$$9$$ = this.$_getDropdown$();
      $subId$$12$$ = $container$$18_index$$109_item$$13_locator$$14$$.subId;
      switch($subId$$12$$) {
        case "oj-select-drop":
          $ddlist_dropdown$$9$$ && ($list$$9_node$$43_selectedItems$$1$$ = $ddlist_dropdown$$9$$[0]);
          break;
        case "oj-select-results":
          $ddlist_dropdown$$9$$ && ($list$$9_node$$43_selectedItems$$1$$ = $ddlist_dropdown$$9$$.find(".oj-listbox-results")[0]);
          break;
        case "oj-select-search":
          $ddlist_dropdown$$9$$ && ($list$$9_node$$43_selectedItems$$1$$ = $ddlist_dropdown$$9$$.find(".oj-listbox-search")[0]);
          break;
        case "oj-select-input":
        ;
        case "oj-listbox-input":
          !0 === this.options.multiple ? $list$$9_node$$43_selectedItems$$1$$ = this.widget().find(".oj-listbox-input")[0] : $ddlist_dropdown$$9$$ && ($list$$9_node$$43_selectedItems$$1$$ = $ddlist_dropdown$$9$$.find(".oj-listbox-input")[0]);
          break;
        case "oj-select-choice":
        ;
        case "oj-select-chosen":
        ;
        case "oj-select-arrow":
          $list$$9_node$$43_selectedItems$$1$$ = this.widget().find("." + $subId$$12$$)[0];
          break;
        case "oj-listitem":
          $ddlist_dropdown$$9$$ && ($list$$9_node$$43_selectedItems$$1$$ = $ddlist_dropdown$$9$$.find(".oj-listbox-result"), $list$$9_node$$43_selectedItems$$1$$ = this.select.$_findItem$($list$$9_node$$43_selectedItems$$1$$, $container$$18_index$$109_item$$13_locator$$14$$.value));
          break;
        case "oj-select-remove":
          $list$$9_node$$43_selectedItems$$1$$ = this.widget().find(".oj-select-selected-choice");
          $list$$9_node$$43_selectedItems$$1$$ = ($container$$18_index$$109_item$$13_locator$$14$$ = this.select.$_findItem$($list$$9_node$$43_selectedItems$$1$$, $container$$18_index$$109_item$$13_locator$$14$$.value)) ? $$$$12$$($container$$18_index$$109_item$$13_locator$$14$$).find(".oj-select-clear-entry-icon")[0] : null;
          break;
        case "oj-listbox-result-label":
          $ddlist_dropdown$$9$$ && ($ddlist_dropdown$$9$$ = $$$$12$$("#" + this.select.$results$.attr("id")).children(), $container$$18_index$$109_item$$13_locator$$14$$ = $container$$18_index$$109_item$$13_locator$$14$$.index, $ddlist_dropdown$$9$$.length && $container$$18_index$$109_item$$13_locator$$14$$ < $ddlist_dropdown$$9$$.length && ($list$$9_node$$43_selectedItems$$1$$ = $ddlist_dropdown$$9$$.eq($container$$18_index$$109_item$$13_locator$$14$$).find("." + $subId$$12$$)[0]));
      }
    }
    return $list$$9_node$$43_selectedItems$$1$$ || null;
  }, getSubIdByNode:function($node$$44_nodeCached$$2$$) {
    if (this.$_isNative$()) {
      return this._super($node$$44_nodeCached$$2$$);
    }
    var $subId$$13$$ = null;
    null != $node$$44_nodeCached$$2$$ && ($node$$44_nodeCached$$2$$ = $$$$12$$($node$$44_nodeCached$$2$$), $node$$44_nodeCached$$2$$.hasClass("oj-listbox-input") ? $subId$$13$$ = {subId:"oj-select-input"} : $node$$44_nodeCached$$2$$.hasClass("oj-select-arrow") ? $subId$$13$$ = {subId:"oj-select-arrow"} : $node$$44_nodeCached$$2$$.hasClass("oj-listbox-result") ? $subId$$13$$ = {subId:"oj-listitem", value:$node$$44_nodeCached$$2$$.data("ojselect").value} : $node$$44_nodeCached$$2$$.hasClass("oj-select-clear-entry-icon") && 
    ($subId$$13$$ = {subId:"oj-select-remove", value:$node$$44_nodeCached$$2$$.closest(".oj-select-selected-choice").data("ojselect").value}));
    return $subId$$13$$;
  }, _GetDefaultStyleClass:function() {
    return "oj-select";
  }, _GetMessagingLauncherElement:function() {
    return this.select ? this.select.selection : this.element;
  }, $_GetContentElement$:function() {
    return this.select ? this.select.selection : this.element;
  }});
  $oj$$12$$.Components.$setDefaultOptions$({ojSelect:{displayOptions:{converterHint:["none"]}, renderMode:$oj$$12$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$12$$.$ThemeUtils$.$getOptionDefaultMap$("select").renderMode;
  })}});
});
