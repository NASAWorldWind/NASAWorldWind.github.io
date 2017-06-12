/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var $JSCompiler_prototypeAlias$$;
function $goog$exportPath_$$($name$$71$$, $opt_object$$) {
  0 == $name$$71$$.indexOf("dvt.") && ($name$$71$$ = $name$$71$$.substring(4));
  var $parts$$ = $name$$71$$.split("."), $cur$$ = eval("dvt");
  $parts$$[0] in $cur$$ || !$cur$$.execScript || $cur$$.execScript("var " + $parts$$[0]);
  for (var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    $parts$$.length || void 0 === $opt_object$$ ? $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {} : $cur$$[$part$$] = $opt_object$$;
  }
}
Math.floor(2147483648 * Math.random()).toString(36);

(function($dvt$$5$$) {
  function $DvtNBoxAutomation$$($dvt$$5$$) {
    this.Init($dvt$$5$$);
  }
  function $DvtNBoxKeyboardHandler$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    this.Init($dvt$$5$$, $DvtNBoxAutomation$$);
  }
  function $DvtNBoxEventManager$$($dvt$$5$$) {
    this.Init($dvt$$5$$.$getCtx$(), $dvt$$5$$.$processEvent$, $dvt$$5$$);
    this.$_nbox$ = $dvt$$5$$;
  }
  function $DvtNBoxDataAnimationHandler$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    this.Init($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
  }
  function $DvtNBoxDrawer$$() {
  }
  function $DvtNBoxCategoryRolloverHandler$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $DvtNBoxCategoryRolloverHandler$$.$superclass$.constructor.call(this, $dvt$$5$$, $DvtNBoxAutomation$$);
    this.$_nbox$ = $DvtNBoxAutomation$$;
  }
  function $DvtNBoxCategoryNode$$() {
  }
  function $DvtNBoxNodeOverflow$$() {
  }
  function $DvtNBoxNode$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    this.Init($dvt$$5$$, $DvtNBoxAutomation$$);
  }
  function $DvtNBoxCell$$() {
  }
  function $DvtNBoxDefaults$$() {
    this.Init({skyros:$DvtNBoxDefaults$$.$VERSION_1$, alta:$DvtNBoxDefaults$$.$SKIN_ALTA$});
  }
  $dvt$$5$$.$NBox$ = function $$dvt$$5$$$$NBox$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    this.Init($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
  };
  $dvt$$5$$.$Obj$.$createSubclass$($dvt$$5$$.$NBox$, $dvt$$5$$.$BaseComponent$);
  $dvt$$5$$.$NBox$.newInstance = function $$dvt$$5$$$$NBox$$newInstance$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    return new $dvt$$5$$.$NBox$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
  };
  $dvt$$5$$.$NBox$.$getDefaults$ = function $$dvt$$5$$$$NBox$$$getDefaults$$($dvt$$5$$) {
    return (new $DvtNBoxDefaults$$).$getDefaults$($dvt$$5$$);
  };
  $dvt$$5$$.$NBox$.prototype.Init = function $$dvt$$5$$$$NBox$$$Init$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$) {
    $dvt$$5$$.$NBox$.$superclass$.Init.call(this, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$);
    this.$Defaults$ = new $DvtNBoxDefaults$$;
    this.$EventManager$ = new $DvtNBoxEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    this.$_dragSource$ = new $dvt$$5$$.$DragSource$($DvtNBoxAutomation$$);
    this.$EventManager$.$setDragSource$(this.$_dragSource$);
    $dvt$$5$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$EventManager$));
    this.setId("nbox1000" + Math.floor(1E9 * Math.random()));
    this.$legend$ = null;
    this.$_peers$ = [];
    this.$_animationAllowed$ = !0;
  };
  $dvt$$5$$.$NBox$.prototype.$SetOptions$ = function $$dvt$$5$$$$NBox$$$$SetOptions$$($DvtNBoxAutomation$$) {
    $DvtNBoxAutomation$$ || ($DvtNBoxAutomation$$ = this.$getSanitizedOptions$());
    $DvtNBoxAutomation$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($DvtNBoxAutomation$$), $DvtNBoxDataUtils$$.$processDataObject$(this), $dvt$$5$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$[$dvt$$5$$.$NBoxConstants$.$ANIMATION_ON_DISPLAY$] = "none", this.$Options$[$dvt$$5$$.$NBoxConstants$.$ANIMATION_ON_DATA_CHANGE$] = "none")) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
    this.$_displayables$ = [];
    $DvtNBoxAutomation$$ = this.$Options$[$dvt$$5$$.$NBoxConstants$.$SELECTION_MODE$];
    this.$_selectionHandler$ = "single" == $DvtNBoxAutomation$$ ? new $dvt$$5$$.$SelectionHandler$($dvt$$5$$.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $DvtNBoxAutomation$$ ? new $dvt$$5$$.$SelectionHandler$($dvt$$5$$.$SelectionHandler$.$TYPE_MULTIPLE$) : null;
    this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
  };
  $dvt$$5$$.$NBox$.prototype.$render$ = function $$dvt$$5$$$$NBox$$$$render$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxStyleUtils$$.$getAnimationOnDataChange$(this), $DvtNBoxDrawer$$ = null;
    this.$Options$ && "none" !== $DvtNBoxCategoryRolloverHandler$$ && ($DvtNBoxDrawer$$ = {options:this.$Options$, getOptions:function $$DvtNBoxDrawer$$$getOptions$() {
      return this.options;
    }, displayables:this.$_displayables$, getDisplayables:function $$DvtNBoxDrawer$$$getDisplayables$() {
      return this.displayables;
    }, id:this.getId(), getId:function $$DvtNBoxDrawer$$$getId$() {
      return this.id;
    }}, $DvtNBoxDrawer$$.$getOptions$ = $DvtNBoxDrawer$$.getOptions, $DvtNBoxDrawer$$.$getDisplayables$ = $DvtNBoxDrawer$$.getDisplayables, $DvtNBoxDrawer$$.getId = $DvtNBoxDrawer$$.getId);
    this.$__cleanUp$();
    this.$SetOptions$($DvtNBoxAutomation$$);
    isNaN($DvtNBoxKeyboardHandler$$) || isNaN($DvtNBoxEventManager$$) || (this.$Width$ = $DvtNBoxKeyboardHandler$$, this.$Height$ = $DvtNBoxEventManager$$);
    $DvtNBoxKeyboardHandler$$ = new $dvt$$5$$.$Container$(this.$getCtx$());
    this.$addChild$($DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$render$(this, $DvtNBoxKeyboardHandler$$, new $dvt$$5$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    $DvtNBoxEventManager$$ = [this];
    var $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getLegend$(this);
    if ($DvtNBoxCategoryNode$$ && $DvtNBoxCategoryNode$$.sections) {
      var $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $DvtNBoxCategoryNode$$, "panelDrawer");
      $DvtNBoxCell$$ && ($DvtNBoxEventManager$$.push($DvtNBoxCell$$), $DvtNBoxCell$$.$isDisclosed$() && ($DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $DvtNBoxCategoryNode$$, "legend"), $DvtNBoxEventManager$$.push($DvtNBoxCategoryNode$$)));
    }
    this.$getCtx$().$setKeyboardFocusArray$($DvtNBoxEventManager$$);
    $DvtNBoxAutomation$$ && $DvtNBoxDataUtils$$.$getDrawer$(this) && $DvtNBoxDataUtils$$.$getGrouping$(this) && ($DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $DvtNBoxDataUtils$$.$getDrawer$(this)), this.$EventManager$.$setFocus$($DvtNBoxEventManager$$), this.$EventManager$.$setFocused$(!1));
    this.$_updateKeyboardFocusEffect$();
    this.$StopAnimation$();
    var $DvtNBoxCategoryNode$$ = $DvtNBoxStyleUtils$$.$getAnimationOnDisplay$(this), $DvtNBoxCell$$ = $DvtNBoxStyleUtils$$.$getAnimationDuration$(this), $DvtNBoxNodeOverflow$$ = new $dvt$$5$$.$Rectangle$(0, 0, this.$Width$, this.$Height$);
    $DvtNBoxEventManager$$ = !1;
    this.$_container$ ? "none" != $DvtNBoxCategoryRolloverHandler$$ && $DvtNBoxAutomation$$ && ((this.$Animation$ = $dvt$$5$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$getCtx$(), $DvtNBoxCategoryRolloverHandler$$, this.$_container$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeOverflow$$, $DvtNBoxCell$$)) ? $DvtNBoxEventManager$$ = !0 : (this.$_deleteContainer$ = new $dvt$$5$$.$Container$(this.$getCtx$(), "DeleteContainer"), this.$addChild$(this.$_deleteContainer$), $DvtNBoxCategoryRolloverHandler$$ = 
    new $DvtNBoxDataAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$, $DvtNBoxDrawer$$, this), $DvtNBoxCategoryNode$$ = $DvtNBoxRenderer$$.$getNodeOrderFunction$(this), $DvtNBoxCategoryRolloverHandler$$.$constructAnimation$([$DvtNBoxDrawer$$], [this]), this.$Animation$ = $DvtNBoxCategoryRolloverHandler$$.$getAnimation$(), $dvt$$5$$.$Playable$.$appendOnEnd$(this.$Animation$, $DvtNBoxCategoryNode$$, this))) : "none" !== $DvtNBoxCategoryNode$$ && (this.$Animation$ = $dvt$$5$$.$BlackBoxAnimationHandler$.$getInAnimation$(this.$getCtx$(), 
    $DvtNBoxCategoryNode$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeOverflow$$, $DvtNBoxCell$$));
    this.$Animation$ ? (this.$setMouseEnabled$(!1), $dvt$$5$$.$Playable$.$appendOnEnd$(this.$Animation$, this.$_onAnimationEnd$, this), $dvt$$5$$.$Agent$.$isPlatformIE$() && 12 <= $dvt$$5$$.$Agent$.$getVersion$() && $dvt$$5$$.$Playable$.$appendOnEnd$(this.$Animation$, function() {
      this.$setAnimationAllowed$(!1);
      this.$render$($DvtNBoxAutomation$$);
      this.$setAnimationAllowed$(!0);
    }, this), this.$Animation$.play()) : this.$_onAnimationEnd$();
    $DvtNBoxEventManager$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$());
    this.$_container$ = $DvtNBoxKeyboardHandler$$;
    this.$UpdateAriaAttributes$();
  };
  $dvt$$5$$.$NBox$.prototype.$__cleanUp$ = function $$dvt$$5$$$$NBox$$$$__cleanUp$$() {
    this.$EventManager$.$hideTooltip$();
    this.$_peers$.length = 0;
  };
  $dvt$$5$$.$NBox$.prototype.$_onAnimationEnd$ = function $$dvt$$5$$$$NBox$$$$_onAnimationEnd$$() {
    this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
    this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$());
    this.$_deleteContainer$ = null;
    this.$setMouseEnabled$(!0);
    this.$AnimationStopped$ || this.$RenderComplete$();
    this.$Animation$ = null;
    this.$AnimationStopped$ = !1;
  };
  $dvt$$5$$.$NBox$.prototype.$CreateKeyboardHandler$ = function $$dvt$$5$$$$NBox$$$$CreateKeyboardHandler$$($dvt$$5$$) {
    return new $DvtNBoxKeyboardHandler$$($dvt$$5$$, this);
  };
  $dvt$$5$$.$NBox$.prototype.$getChildContainer$ = function $$dvt$$5$$$$NBox$$$$getChildContainer$$() {
    return this.$_container$;
  };
  $dvt$$5$$.$NBox$.prototype.$getDisplayables$ = function $$dvt$$5$$$$NBox$$$$getDisplayables$$() {
    return this.$_displayables$;
  };
  $dvt$$5$$.$NBox$.prototype.$_updateKeyboardFocusEffect$ = function $$dvt$$5$$$$NBox$$$$_updateKeyboardFocusEffect$$() {
    var $dvt$$5$$ = this.$EventManager$.$getFocus$(), $DvtNBoxAutomation$$ = !1;
    if ($dvt$$5$$) {
      var $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$ = $dvt$$5$$.$isShowingKeyboardFocusEffect$();
      $dvt$$5$$.$getKeyboardFocusDisplayable$ && ($DvtNBoxKeyboardHandler$$ = $dvt$$5$$.$getKeyboardFocusDisplayable$());
      $DvtNBoxKeyboardHandler$$ && $DvtNBoxAutomation$$ && $DvtNBoxKeyboardHandler$$.$showKeyboardFocusEffect$();
      this.$EventManager$.$setFocus$($DvtNBoxKeyboardHandler$$);
    }
  };
  $dvt$$5$$.$NBox$.prototype.$processEvent$ = function $$dvt$$5$$$$NBox$$$$processEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.type, $DvtNBoxEventManager$$ = this.$getSanitizedOptions$();
    "categoryHide" == $DvtNBoxKeyboardHandler$$ || "categoryShow" == $DvtNBoxKeyboardHandler$$ ? $DvtNBoxAutomation$$ = this.$_processHideShowEvent$($DvtNBoxAutomation$$) : "categoryHighlight" == $DvtNBoxKeyboardHandler$$ ? $DvtNBoxAutomation$$ = this.$_processRolloverEvent$($DvtNBoxAutomation$$) : "selection" == $DvtNBoxKeyboardHandler$$ ? $DvtNBoxAutomation$$ = this.$_processSelectionEvent$($DvtNBoxAutomation$$) : $DvtNBoxEventManager$$._legend && $DvtNBoxKeyboardHandler$$ == $dvt$$5$$.$PanelDrawerEvent$.$TYPE$ && 
    ($DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getSubType$() == $dvt$$5$$.$PanelDrawerEvent$.$SUBTYPE_HIDE$ ? "undisclosed" : "disclosed", $DvtNBoxAutomation$$ = $dvt$$5$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$5$$.$NBoxConstants$.$LEGEND_DISCLOSURE$, $DvtNBoxKeyboardHandler$$), $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$LEGEND_DISCLOSURE$] = $DvtNBoxKeyboardHandler$$, this.$render$($DvtNBoxEventManager$$));
    $DvtNBoxAutomation$$ && this.dispatchEvent($DvtNBoxAutomation$$);
  };
  $dvt$$5$$.$NBox$.prototype.$_processHideShowEvent$ = function $$dvt$$5$$$$NBox$$$$_processHideShowEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = this.$getSanitizedOptions$(), $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$HIDDEN_CATEGORIES$];
    $DvtNBoxEventManager$$ || ($DvtNBoxEventManager$$ = []);
    var $DvtNBoxDataAnimationHandler$$ = $dvt$$5$$.$ArrayUtils$.$getIndex$($DvtNBoxEventManager$$, $DvtNBoxAutomation$$.category);
    "categoryHide" == $DvtNBoxAutomation$$.type && -1 == $DvtNBoxDataAnimationHandler$$ && $DvtNBoxEventManager$$.push($DvtNBoxAutomation$$.category);
    "categoryShow" == $DvtNBoxAutomation$$.type && -1 != $DvtNBoxDataAnimationHandler$$ && $DvtNBoxEventManager$$.splice($DvtNBoxDataAnimationHandler$$, 1);
    0 == $DvtNBoxEventManager$$.length && ($DvtNBoxEventManager$$ = null);
    $DvtNBoxAutomation$$ = $dvt$$5$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$5$$.$NBoxConstants$.$HIDDEN_CATEGORIES$, $DvtNBoxEventManager$$);
    $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$HIDDEN_CATEGORIES$] = $DvtNBoxEventManager$$;
    this.$render$($DvtNBoxKeyboardHandler$$);
    return $DvtNBoxAutomation$$;
  };
  $dvt$$5$$.$NBox$.prototype.$_processRolloverEvent$ = function $$dvt$$5$$$$NBox$$$$_processRolloverEvent$$($dvt$$5$$) {
    this.$_processHighlighting$($dvt$$5$$.categories);
    return $dvt$$5$$;
  };
  $dvt$$5$$.$NBox$.prototype.$_processSelectionEvent$ = function $$dvt$$5$$$$NBox$$$$_processSelectionEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.selection, $DvtNBoxEventManager$$ = null;
    if ($DvtNBoxKeyboardHandler$$) {
      $DvtNBoxAutomation$$ = {};
      for ($DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxEventManager$$++) {
        $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$]] = !0;
      }
      var $DvtNBoxKeyboardHandler$$ = this.$getObjects$(), $DvtNBoxDataAnimationHandler$$ = null;
      if ($DvtNBoxDataUtils$$.$getGrouping$(this)) {
        for ($DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxEventManager$$++) {
          if ($DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$] instanceof $DvtNBoxCategoryNode$$) {
            if ($DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$].getId()]) {
              $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$].getId()] = !1;
              for (var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$].getData().nodeIndices, $DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxCategoryRolloverHandler$$.length;$DvtNBoxCell$$++) {
                var $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$(this, $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxCell$$]);
                $DvtNBoxAutomation$$[$DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.ID]] = !0;
              }
            }
          } else {
            $DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$] instanceof $DvtNBoxDrawer$$ && ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$]);
          }
        }
      }
      var $DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$ = [], $DvtNBoxNode$$;
      for ($DvtNBoxNode$$ in $DvtNBoxAutomation$$) {
        $DvtNBoxAutomation$$[$DvtNBoxNode$$] && ($DvtNBoxKeyboardHandler$$.push($DvtNBoxNode$$), $DvtNBoxEventManager$$.push($DvtNBoxNode$$));
      }
      $DvtNBoxAutomation$$ = $dvt$$5$$.$EventFactory$.$newSelectionEvent$($DvtNBoxKeyboardHandler$$);
    }
    $DvtNBoxDataUtils$$.$setSelectedItems$(this, $DvtNBoxEventManager$$);
    $DvtNBoxDataAnimationHandler$$ && $DvtNBoxDataAnimationHandler$$.$UpdateAccessibilityAttributes$();
    return $DvtNBoxAutomation$$;
  };
  $dvt$$5$$.$NBox$.prototype.$registerObject$ = function $$dvt$$5$$$$NBox$$$$registerObject$$($dvt$$5$$) {
    this.$_peers$.push($dvt$$5$$);
  };
  $dvt$$5$$.$NBox$.prototype.$getObjects$ = function $$dvt$$5$$$$NBox$$$$getObjects$$() {
    return this.$_peers$;
  };
  $dvt$$5$$.$NBox$.prototype.getWidth = function $$dvt$$5$$$$NBox$$$getWidth$() {
    return this.$Width$;
  };
  $dvt$$5$$.$NBox$.prototype.getHeight = function $$dvt$$5$$$$NBox$$$getHeight$() {
    return this.$Height$;
  };
  $dvt$$5$$.$NBox$.prototype.$getSelectionHandler$ = function $$dvt$$5$$$$NBox$$$$getSelectionHandler$$() {
    return this.$_selectionHandler$;
  };
  $dvt$$5$$.$NBox$.prototype.$isSelectionSupported$ = function $$dvt$$5$$$$NBox$$$$isSelectionSupported$$() {
    return this.$_selectionHandler$ ? !0 : !1;
  };
  $dvt$$5$$.$NBox$.prototype.$getShowPopupBehaviors$ = function $$dvt$$5$$$$NBox$$$$getShowPopupBehaviors$$($dvt$$5$$) {
    return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$dvt$$5$$] : null;
  };
  $dvt$$5$$.$NBox$.prototype.$animateUpdate$ = function $$dvt$$5$$$$NBox$$$$animateUpdate$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $DvtNBoxRenderer$$.$animateUpdate$($dvt$$5$$, $DvtNBoxAutomation$$, this);
  };
  $dvt$$5$$.$NBox$.prototype.$getSanitizedOptions$ = function $$dvt$$5$$$$NBox$$$$getSanitizedOptions$$() {
    return $dvt$$5$$.$JsonUtils$.clone(this.$getOptions$(), function($dvt$$5$$) {
      return 0 != $dvt$$5$$.indexOf("__");
    });
  };
  $dvt$$5$$.$NBox$.prototype.$getSubcomponentStyles$ = function $$dvt$$5$$$$NBox$$$$getSubcomponentStyles$$() {
    return {};
  };
  $dvt$$5$$.$NBox$.prototype.$__isDragAvailable$ = function $$dvt$$5$$$$NBox$$$$__isDragAvailable$$($dvt$$5$$) {
    return this.$_selectionHandler$ ? $dvt$$5$$[0] : null;
  };
  $dvt$$5$$.$NBox$.prototype.$__getDragTransferable$ = function $$dvt$$5$$$$NBox$$$$__getDragTransferable$$($DvtNBoxAutomation$$) {
    $DvtNBoxAutomation$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($DvtNBoxAutomation$$, !1), this.$EventManager$.$fireSelectionEvent$());
    $DvtNBoxAutomation$$ = [];
    for (var $DvtNBoxKeyboardHandler$$ = {}, $DvtNBoxEventManager$$ = this.$_selectionHandler$.getSelection(), $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDataAnimationHandler$$++) {
      var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$];
      if ($DvtNBoxCategoryRolloverHandler$$ instanceof $DvtNBoxNode$$) {
        $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryRolloverHandler$$.getData()[$dvt$$5$$.$NBoxConstants$.ID], $DvtNBoxAutomation$$.push($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$] = !0;
      } else {
        if ($DvtNBoxCategoryRolloverHandler$$ instanceof $DvtNBoxCategoryNode$$) {
          for (var $DvtNBoxDrawer$$ = $DvtNBoxCategoryRolloverHandler$$.getData().nodeIndices, $DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxDrawer$$.length;$DvtNBoxCell$$++) {
            var $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$(this, $DvtNBoxDrawer$$[$DvtNBoxCell$$])[$dvt$$5$$.$NBoxConstants$.ID];
            $DvtNBoxAutomation$$.push($DvtNBoxNodeOverflow$$);
            $DvtNBoxKeyboardHandler$$[$DvtNBoxNodeOverflow$$] = !0;
          }
          $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$.getData()[$dvt$$5$$.$NBoxConstants$.ID]] = !0;
        }
      }
    }
    $DvtNBoxEventManager$$ = this.$_selectionHandler$.$getSelectedIds$();
    for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDataAnimationHandler$$++) {
      if ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$], !$DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$]) {
        if (!isNaN($DvtNBoxDataUtils$$.$getNodeIndex$(this, $DvtNBoxCategoryRolloverHandler$$))) {
          $DvtNBoxAutomation$$.push($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$] = !0;
        } else {
          if ($DvtNBoxDataUtils$$.$getGrouping$(this) && $DvtNBoxDataUtils$$.$getCategoryNode$(this, $DvtNBoxCategoryRolloverHandler$$)) {
            $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this, $DvtNBoxCategoryRolloverHandler$$).nodeIndices;
            for ($DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxDrawer$$.length;$DvtNBoxCell$$++) {
              $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$(this, $DvtNBoxDrawer$$[$DvtNBoxCell$$])[$dvt$$5$$.$NBoxConstants$.ID], $DvtNBoxKeyboardHandler$$[$DvtNBoxNodeOverflow$$] || ($DvtNBoxAutomation$$.push($DvtNBoxNodeOverflow$$), $DvtNBoxKeyboardHandler$$[$DvtNBoxNodeOverflow$$] = !0);
            }
            $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$] = !0;
          }
        }
      }
    }
    return $DvtNBoxAutomation$$;
  };
  $dvt$$5$$.$NBox$.prototype.$__getDragFeedback$ = function $$dvt$$5$$$$NBox$$$$__getDragFeedback$$() {
    return this.$_selectionHandler$.getSelection().slice(0);
  };
  $dvt$$5$$.$NBox$.prototype.$getAutomation$ = function $$dvt$$5$$$$NBox$$$$getAutomation$$() {
    this.$Automation$ || (this.$Automation$ = new $DvtNBoxAutomation$$(this));
    return this.$Automation$;
  };
  $dvt$$5$$.$NBox$.prototype.$GetComponentDescription$ = function $$dvt$$5$$$$NBox$$$$GetComponentDescription$$() {
    return $dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "NBOX", $DvtNBoxDataUtils$$.$getColumnCount$(this) * $DvtNBoxDataUtils$$.$getRowCount$(this));
  };
  $dvt$$5$$.$NBox$.prototype.$highlight$ = function $$dvt$$5$$$$NBox$$$$highlight$$($DvtNBoxAutomation$$) {
    this.$Options$.highlightedCategories = $dvt$$5$$.$JsonUtils$.clone($DvtNBoxAutomation$$);
    this.$_processHighlighting$($DvtNBoxAutomation$$);
  };
  $dvt$$5$$.$NBox$.prototype.$_processHighlighting$ = function $$dvt$$5$$$$NBox$$$$_processHighlighting$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = this.$getNodeDisplayables$(), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowCount$(this) * $DvtNBoxDataUtils$$.$getColumnCount$(this);
    this.$getOptions$().__highlightedMap = null;
    for ($DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxEventManager$$;$DvtNBoxDrawer$$++) {
      var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getCell$(this, $DvtNBoxDrawer$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $DvtNBoxDataAnimationHandler$$);
      $DvtNBoxCellRenderer$$.$renderHeader$(this, $DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryRolloverHandler$$, !1);
    }
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$(this);
    $DvtNBoxEventManager$$ = {};
    if ($DvtNBoxDataAnimationHandler$$) {
      for (var $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxDrawer$$++) {
        $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$[$DvtNBoxDrawer$$][$dvt$$5$$.$NBoxConstants$.ID]] = !0;
      }
    }
    for ($DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxDrawer$$++) {
      if ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$ && 0 < $DvtNBoxAutomation$$.length) {
        a: {
          $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$];
          if ($DvtNBoxDataAnimationHandler$$ instanceof $DvtNBoxNode$$) {
            if ($DvtNBoxDataAnimationHandler$$.$getCategories$()) {
              $DvtNBoxDataAnimationHandler$$ = "all" == this.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$HIGHLIGHT_MATCH$] ? $dvt$$5$$.$ArrayUtils$.$hasAllItems$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$.$getCategories$()) : $dvt$$5$$.$ArrayUtils$.$hasAnyItem$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$.$getCategories$());
              break a;
            }
          } else {
            if ($DvtNBoxDataAnimationHandler$$ instanceof $DvtNBoxCategoryNode$$) {
              for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataAnimationHandler$$.getData(), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$.nodeIndices.length, $DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxCategoryRolloverHandler$$;$DvtNBoxCell$$++) {
                var $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$(this, $DvtNBoxDataAnimationHandler$$.nodeIndices[$DvtNBoxCell$$]);
                if ($DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.$CATEGORIES$] && ("all" == this.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$HIGHLIGHT_MATCH$] ? $dvt$$5$$.$ArrayUtils$.$hasAllItems$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.$CATEGORIES$]) : $dvt$$5$$.$ArrayUtils$.$hasAnyItem$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.$CATEGORIES$]))) {
                  $DvtNBoxDataAnimationHandler$$ = !0;
                  break a;
                }
              }
            }
          }
          $DvtNBoxDataAnimationHandler$$ = !1;
        }
        $DvtNBoxDataAnimationHandler$$ = !$DvtNBoxDataAnimationHandler$$;
      }
      $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$].$setAlpha$($DvtNBoxStyleUtils$$.$getFadedNodeAlpha$(this)) : $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$].$setAlpha$(1);
      if ($DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$] instanceof $DvtNBoxCategoryNode$$) {
        $DvtNBoxCategoryRolloverHandler$$ = 0;
        $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$].getData();
        for ($DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxDataAnimationHandler$$.nodeIndices.length;$DvtNBoxCell$$++) {
          $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$.nodeIndices[$DvtNBoxCell$$]] && ($DvtNBoxCategoryRolloverHandler$$ += 1);
        }
        $DvtNBoxDataAnimationHandler$$.highlightedCount = $DvtNBoxCategoryRolloverHandler$$;
        $DvtNBoxCategoryRolloverHandler$$ = null != $DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$(this, $DvtNBoxDataAnimationHandler$$) || null != $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this, $DvtNBoxDataAnimationHandler$$);
        $DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$(this, $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$].getData(), $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$], $DvtNBoxDataAnimationHandler$$.__scale, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDataAnimationHandler$$.__gap);
      }
    }
  };
  $dvt$$5$$.$NBox$.prototype.$getNodeDisplayables$ = function $$dvt$$5$$$$NBox$$$$getNodeDisplayables$$() {
    for (var $DvtNBoxAutomation$$ = [], $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getNodeCount$(this), $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxEventManager$$++) {
      $DvtNBoxAutomation$$.push($DvtNBoxDataUtils$$.$getNode$(this, $DvtNBoxEventManager$$));
    }
    $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$(this);
    if ($DvtNBoxKeyboardHandler$$ = this.$getOptions$().__groups) {
      if ($DvtNBoxEventManager$$ == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getRowCount$(this) * $DvtNBoxDataUtils$$.$getColumnCount$(this), $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxEventManager$$++) {
          var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$ + ""], $DvtNBoxDrawer$$;
          for ($DvtNBoxDrawer$$ in $DvtNBoxCategoryRolloverHandler$$) {
            $DvtNBoxAutomation$$.push($DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDrawer$$]);
          }
        }
      } else {
        for ($DvtNBoxDrawer$$ in $DvtNBoxKeyboardHandler$$) {
          $DvtNBoxAutomation$$.push($DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$]);
        }
      }
    }
    $DvtNBoxDrawer$$ = [];
    for ($DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxAutomation$$.length;$DvtNBoxEventManager$$++) {
      ($DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $DvtNBoxAutomation$$[$DvtNBoxEventManager$$])) && $DvtNBoxDrawer$$.push($DvtNBoxKeyboardHandler$$);
    }
    return $DvtNBoxDrawer$$;
  };
  $dvt$$5$$.$NBox$.prototype.$setAnimationAllowed$ = function $$dvt$$5$$$$NBox$$$$setAnimationAllowed$$($dvt$$5$$) {
    this.$_animationAllowed$ = $dvt$$5$$;
  };
  $dvt$$5$$.$NBox$.prototype.$isDragAvailable$ = function $$dvt$$5$$$$NBox$$$$isDragAvailable$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return this.$_dragSource$.$isDragAvailable$($DvtNBoxKeyboardHandler$$);
  };
  $dvt$$5$$.$NBox$.prototype.$getDragTransferable$ = function $$dvt$$5$$$$NBox$$$$getDragTransferable$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    return this.$_dragSource$.$getDragTransferable$($dvt$$5$$, $DvtNBoxAutomation$$);
  };
  $dvt$$5$$.$NBox$.prototype.$getDragOverFeedback$ = function $$dvt$$5$$$$NBox$$$$getDragOverFeedback$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    return this.$_dragSource$.$getDragOverFeedback$($dvt$$5$$, $DvtNBoxAutomation$$);
  };
  $dvt$$5$$.$NBox$.prototype.$getDragOffset$ = function $$dvt$$5$$$$NBox$$$$getDragOffset$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    return this.$_dragSource$.$getDragOffset$($dvt$$5$$, $DvtNBoxAutomation$$);
  };
  $dvt$$5$$.$NBoxConstants$ = {};
  $dvt$$5$$.$Obj$.$createSubclass$($dvt$$5$$.$NBoxConstants$, $dvt$$5$$.$Obj$);
  $dvt$$5$$.$NBoxConstants$.$COLUMN$ = "column";
  $dvt$$5$$.$NBoxConstants$.$COLUMNS$ = "columns";
  $dvt$$5$$.$NBoxConstants$.$COLUMNS_TITLE$ = "columnsTitle";
  $dvt$$5$$.$NBoxConstants$.$COLUMNS_TITLE_STYLE$ = "columnsTitleStyle";
  $dvt$$5$$.$NBoxConstants$.$COLUMN_LABEL_STYLE$ = "columnLabelStyle";
  $dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$ = "maximizedColumn";
  $dvt$$5$$.$NBoxConstants$.$ROW$ = "row";
  $dvt$$5$$.$NBoxConstants$.$ROWS$ = "rows";
  $dvt$$5$$.$NBoxConstants$.$ROWS_TITLE$ = "rowsTitle";
  $dvt$$5$$.$NBoxConstants$.$ROWS_TITLE_STYLE$ = "rowsTitleStyle";
  $dvt$$5$$.$NBoxConstants$.$ROW_LABEL_STYLE$ = "rowLabelStyle";
  $dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$ = "maximizedRow";
  $dvt$$5$$.$NBoxConstants$.$CELL$ = "cell";
  $dvt$$5$$.$NBoxConstants$.$CELLS$ = "cells";
  $dvt$$5$$.$NBoxConstants$.$CELL_DEFAULTS$ = "cellDefaults";
  $dvt$$5$$.$NBoxConstants$.$NODES$ = "nodes";
  $dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$ = "nodeDefaults";
  $dvt$$5$$.$NBoxConstants$.$CATEGORIES$ = "categories";
  $dvt$$5$$.$NBoxConstants$.$ICON$ = "icon";
  $dvt$$5$$.$NBoxConstants$.$ICON_DEFAULTS$ = "iconDefaults";
  $dvt$$5$$.$NBoxConstants$.$INDICATOR$ = "indicator";
  $dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON$ = "indicatorIcon";
  $dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$ = "indicatorIconDefaults";
  $dvt$$5$$.$NBoxConstants$.$INDICATOR_COLOR$ = "indicatorColor";
  $dvt$$5$$.$NBoxConstants$.$X_PERCENTAGE$ = "xPercentage";
  $dvt$$5$$.$NBoxConstants$.$Y_PERCENTAGE$ = "yPercentage";
  $dvt$$5$$.$NBoxConstants$.$SELECTION$ = "selection";
  $dvt$$5$$.$NBoxConstants$.$SELECTION_MODE$ = "selectionMode";
  $dvt$$5$$.$NBoxConstants$.$SELECTION_INFO$ = "selectionInfo";
  $dvt$$5$$.$NBoxConstants$.$HAS_SELECTION_LISTENER$ = "hasSelectionListener";
  $dvt$$5$$.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$ = "highlightedCategories";
  $dvt$$5$$.$NBoxConstants$.$HIGHLIGHT_MATCH$ = "highlightMatch";
  $dvt$$5$$.$NBoxConstants$.$HIDDEN_CATEGORIES$ = "hiddenCategories";
  $dvt$$5$$.$NBoxConstants$.$HOVER_BEHAVIOR$ = "hoverBehavior";
  $dvt$$5$$.$NBoxConstants$.$GROUP_CATEGORY$ = "groupCategory";
  $dvt$$5$$.$NBoxConstants$.$GROUP_ATTRIBUTES$ = "groupAttributes";
  $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR$ = "groupBehavior";
  $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ = "withinCell";
  $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ = "acrossCells";
  $dvt$$5$$.$NBoxConstants$.$OTHER_COLOR$ = "otherColor";
  $dvt$$5$$.$NBoxConstants$.$OTHER_THRESHOLD$ = "otherThreshold";
  $dvt$$5$$.$NBoxConstants$.$ANIMATION_ON_DATA_CHANGE$ = "animationOnDataChange";
  $dvt$$5$$.$NBoxConstants$.$ANIMATION_ON_DISPLAY$ = "animationOnDisplay";
  $dvt$$5$$.$NBoxConstants$.$ANIMATION_DURATION$ = "animationDuration";
  $dvt$$5$$.$NBoxConstants$.$DRAWER$ = "_drawer";
  $dvt$$5$$.$NBoxConstants$.$LEGEND$ = "_legend";
  $dvt$$5$$.$NBoxConstants$.$LEGEND_DISCLOSURE$ = "legendDisclosure";
  $dvt$$5$$.$NBoxConstants$.ID = "id";
  $dvt$$5$$.$NBoxConstants$.$LABEL$ = "label";
  $dvt$$5$$.$NBoxConstants$.$LABEL_STYLE$ = "labelStyle";
  $dvt$$5$$.$NBoxConstants$.$LABEL_HALIGN$ = "labelHalign";
  $dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL$ = "secondaryLabel";
  $dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL_STYLE$ = "secondaryLabelStyle";
  $dvt$$5$$.$NBoxConstants$.$SHORT_DESC$ = "shortDesc";
  $dvt$$5$$.$NBoxConstants$.$SHOW_COUNT$ = "showCount";
  $dvt$$5$$.$NBoxConstants$.STYLE = "style";
  $dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$ = "styleDefaults";
  $dvt$$5$$.$NBoxConstants$.$BORDER_COLOR$ = "borderColor";
  $dvt$$5$$.$NBoxConstants$.$BORDER_RADIUS$ = "borderRadius";
  $dvt$$5$$.$NBoxConstants$.$BORDER_WIDTH$ = "borderWidth";
  $dvt$$5$$.$NBoxConstants$.$COLOR$ = "color";
  $dvt$$5$$.$NBoxConstants$.$PATTERN$ = "pattern";
  $dvt$$5$$.$NBoxConstants$.$OPACITY$ = "opacity";
  $dvt$$5$$.$NBoxConstants$.$SHAPE$ = "shape";
  $dvt$$5$$.$NBoxConstants$.$SOURCE$ = "source";
  $dvt$$5$$.$NBoxConstants$.$HEIGHT$ = "height";
  $dvt$$5$$.$NBoxConstants$.$WIDTH$ = "width";
  $dvt$$5$$.$Bundle$.$addDefaultStrings$($dvt$$5$$.$Bundle$.$NBOX_PREFIX$, {HIGHLIGHTED_COUNT:"{0}/{1}", COMMA_SEP_LIST:"{0}, {1}", OTHER:"Other", LEGEND:"Legend", GROUP_NODE:"Group", ADDITIONAL_DATA:"Additional Data", SIZE:"Size"});
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxDefaults$$, $dvt$$5$$.$BaseComponentDefaults$);
  $DvtNBoxDefaults$$.$VERSION_1$ = {skin:$dvt$$5$$.$CSSStyle$.$SKIN_ALTA$, selectionMode:"multiple", animationOnDataChange:"none", animationOnDisplay:"none", cellMaximize:"on", cellContent:"auto", legendDisplay:"auto", legendDisclosure:"disclosed", groupBehavior:"withinCell", otherColor:"#636363", otherThreshold:0, hoverBehavior:"none", highlightMatch:"all", highlightedCategories:[], touchResponse:"auto", styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, columnLabelStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + 
  "color: #252525;"), rowLabelStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + "color: #252525;"), columnsTitleStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_14$ + "color: #252525;"), rowsTitleStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_14$ + "color: #252525;"), cellDefaults:{style:new $dvt$$5$$.$CSSStyle$("background-color:#e9e9e9"), maximizedStyle:new $dvt$$5$$.$CSSStyle$("background-color:#dddddd"), 
  minimizedStyle:new $dvt$$5$$.$CSSStyle$("background-color:#e9e9e9"), labelStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$ + "color: #252525;"), countLabelStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_14$ + "color: #252525;"), bodyCountLabelStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$ + "color: #252525;"), dropTargetStyle:new $dvt$$5$$.$CSSStyle$("background-color:rgba(217, 244, 250, .75);border-color:#ccf6ff"), 
  showCount:"auto", showMaximize:"on"}, __scrollbar:{scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333"}, __drawerDefaults:{background:"#e9e9e9", borderColor:"#bcc7d2", borderRadius:1, headerBackground:"linear-gradient(to bottom, #f5f5f5 0%, #f0f0f0 100%)", labelStyle:new $dvt$$5$$.$CSSStyle$("color: #252525;" + $dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$), 
  countLabelStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$), countBorderRadius:1}, nodeDefaults:{color:"#FFFFFF", labelStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$), secondaryLabelStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$), alphaFade:.2, borderRadius:1, hoverColor:"#FFFFFF", selectionColor:"#000000", iconDefaults:{preferredSize:19, preferredSizeTouch:34, shapePaddingRatio:.15, 
  sourcePaddingRatio:0, opacity:1, pattern:"none", borderColor:"#000000", borderWidth:0, borderRadius:0, shape:$dvt$$5$$.$SimpleMarker$.$CIRCLE$}, indicatorIconDefaults:{width:10, height:10, opacity:1, pattern:"none", borderColor:"#000000", borderWidth:0, borderRadius:0, shape:$dvt$$5$$.$SimpleMarker$.$CIRCLE$}}, __legendDefaults:{sectionStyle:"color: #252525;" + $dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_12$, itemStyle:"color: #252525;" + $dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$, 
  markerColor:"#808080"}, __categoryNodeDefaults:{labelStyle:new $dvt$$5$$.$CSSStyle$($dvt$$5$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}}, __layout:{componentGap:8, titleGap:4, titleComponentGap:4, nodeLabelOnlyStartLabelGap:5, nodeStartLabelGap:3, nodeEndLabelGap:5, nodeSingleLabelGap:2, nodeDualLabelGap:2, nodeInterLabelGap:0, nodeIndicatorGap:3, nodeSwatchSize:10, categoryNodeLabelGap:5, minimumCellSize:34, cellGap:3, gridGap:6, cellStartGap:6, cellEndGap:6, cellTopGap:6, cellBottomGap:6, 
  cellLabelGap:6, cellCloseGap:6, countLabelGap:10, markerGap:3, minimumLabelWidth:55, maximumLabelWidth:148, drawerButtonGap:6, drawerCountHorizontalGap:5, drawerCountVerticalGap:3, drawerStartGap:6, drawerLabelGap:6, drawerHeaderHeight:31, legendBottomGap:10}};
  $DvtNBoxDefaults$$.$SKIN_ALTA$ = {};
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxCell$$, $dvt$$5$$.$Container$);
  $DvtNBoxCell$$.newInstance = function $$DvtNBoxCell$$$newInstance$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = new $DvtNBoxCell$$;
    $DvtNBoxKeyboardHandler$$.Init($dvt$$5$$, $DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxCell$$.prototype.Init = function $$DvtNBoxCell$$$$Init$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$ROW$]), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$]);
    $DvtNBoxCell$$.$superclass$.Init.call(this, $DvtNBoxAutomation$$.$getCtx$(), null, "c:" + $DvtNBoxEventManager$$ + "," + $DvtNBoxDataAnimationHandler$$);
    this.$_nbox$ = $DvtNBoxAutomation$$;
    this.$_data$ = $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxCell$$.prototype.getData = function $$DvtNBoxCell$$$$getData$() {
    return this.$_data$;
  };
  $DvtNBoxCell$$.prototype.$render$ = function $$DvtNBoxCell$$$$$render$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $dvt$$5$$.$addChild$(this);
    $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
    $DvtNBoxCellRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $DvtNBoxAutomation$$);
    this.$_nbox$.$EventManager$.$associate$(this, this);
  };
  $DvtNBoxCell$$.prototype.$getChildContainer$ = function $$DvtNBoxCell$$$$$getChildContainer$$() {
    return this.$_childContainer$;
  };
  $DvtNBoxCell$$.prototype.$setChildContainer$ = function $$DvtNBoxCell$$$$$setChildContainer$$($dvt$$5$$) {
    this.$_childContainer$ = $dvt$$5$$;
  };
  $DvtNBoxCell$$.prototype.$animateUpdate$ = function $$DvtNBoxCell$$$$$animateUpdate$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $DvtNBoxCellRenderer$$.$animateUpdate$($dvt$$5$$, $DvtNBoxAutomation$$, this);
  };
  $DvtNBoxCell$$.prototype.$animateDelete$ = function $$DvtNBoxCell$$$$$animateDelete$$($dvt$$5$$) {
    $DvtNBoxCellRenderer$$.$animateDelete$($dvt$$5$$, this);
  };
  $DvtNBoxCell$$.prototype.$animateInsert$ = function $$DvtNBoxCell$$$$$animateInsert$$($dvt$$5$$) {
    $DvtNBoxCellRenderer$$.$animateInsert$($dvt$$5$$, this);
  };
  $DvtNBoxCell$$.prototype.$isDoubleClickable$ = function $$DvtNBoxCell$$$$$isDoubleClickable$$() {
    return $DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$);
  };
  $DvtNBoxCell$$.prototype.$handleDoubleClick$ = function $$DvtNBoxCell$$$$$handleDoubleClick$$() {
    if (this.$isDoubleClickable$()) {
      var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $DvtNBoxEventManager$$ = this.$_nbox$.$getSanitizedOptions$(), $DvtNBoxDataAnimationHandler$$ = $dvt$$5$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$5$$.$NBoxConstants$.$DRAWER$, null);
      $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$DRAWER$] = null;
      $DvtNBoxAutomation$$ == this.$_data$[$dvt$$5$$.$NBoxConstants$.$ROW$] && $DvtNBoxKeyboardHandler$$ == this.$_data$[$dvt$$5$$.$NBoxConstants$.$COLUMN$] ? ($DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$] = null, $DvtNBoxDataAnimationHandler$$.properties[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$] = null, $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = null, $DvtNBoxDataAnimationHandler$$.properties[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = null) : 
      ($DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$] = this.$_data$[$dvt$$5$$.$NBoxConstants$.$ROW$], $DvtNBoxDataAnimationHandler$$.properties[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$] = this.$_data$[$dvt$$5$$.$NBoxConstants$.$ROW$], $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = this.$_data$[$dvt$$5$$.$NBoxConstants$.$COLUMN$], $DvtNBoxDataAnimationHandler$$.properties[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = this.$_data$[$dvt$$5$$.$NBoxConstants$.$COLUMN$]);
      var $DvtNBoxCategoryRolloverHandler$$;
      ($DvtNBoxAutomation$$ = this.$_nbox$.$EventManager$.$getFocus$()) ? $DvtNBoxAutomation$$ instanceof $DvtNBoxNode$$ ? $DvtNBoxCategoryRolloverHandler$$ = this.$getCellIndex$() != $DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $DvtNBoxAutomation$$.getData()) : $DvtNBoxAutomation$$ instanceof $DvtNBoxNodeOverflow$$ ? $DvtNBoxCategoryRolloverHandler$$ = this != $DvtNBoxAutomation$$.$_cell$ : $DvtNBoxAutomation$$ instanceof $DvtNBoxCell$$ ? $DvtNBoxCategoryRolloverHandler$$ = this.$getCellIndex$() != 
      $DvtNBoxAutomation$$.$getCellIndex$() : $DvtNBoxAutomation$$ instanceof $DvtNBoxCategoryNode$$ && ($DvtNBoxCategoryRolloverHandler$$ = this.$getCellIndex$() != $DvtNBoxAutomation$$.getData().cell) : this.$_nbox$.$EventManager$.$setFocusObj$(this);
      $DvtNBoxCategoryRolloverHandler$$ && (this.$_nbox$.$EventManager$.$setFocusObj$(this), this.$_nbox$.$EventManager$.$setFocused$(!1));
      this.$_nbox$.$processEvent$($DvtNBoxDataAnimationHandler$$);
      this.$_nbox$.$render$($DvtNBoxEventManager$$);
    }
  };
  $DvtNBoxCell$$.prototype.contains = function $$DvtNBoxCell$$$$contains$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background"), $DvtNBoxEventManager$$ = this.$getTranslateX$() + $DvtNBoxKeyboardHandler$$.$getX$(), $DvtNBoxDataAnimationHandler$$ = this.$getTranslateY$() + $DvtNBoxKeyboardHandler$$.$getY$(), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxEventManager$$ + $DvtNBoxKeyboardHandler$$.getWidth(), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataAnimationHandler$$ + $DvtNBoxKeyboardHandler$$.getHeight();
    return $DvtNBoxEventManager$$ <= $dvt$$5$$ && $dvt$$5$$ <= $DvtNBoxCategoryRolloverHandler$$ && $DvtNBoxDataAnimationHandler$$ <= $DvtNBoxAutomation$$ && $DvtNBoxAutomation$$ <= $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxCell$$.prototype.$renderDropSiteFeedback$ = function $$DvtNBoxCell$$$$$renderDropSiteFeedback$$() {
    return $DvtNBoxCellRenderer$$.$renderDropSiteFeedback$(this.$_nbox$, this);
  };
  $DvtNBoxCell$$.prototype.$HandleKeyboardEvent$ = function $$DvtNBoxCell$$$$$HandleKeyboardEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$ == this.$_data$[$dvt$$5$$.$NBoxConstants$.$ROW$] && $DvtNBoxEventManager$$ == this.$_data$[$dvt$$5$$.$NBoxConstants$.$COLUMN$] ? !0 : !1;
    (!$DvtNBoxKeyboardHandler$$ && $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$ENTER$ || $DvtNBoxKeyboardHandler$$ && $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$ESCAPE$) && this.$handleDoubleClick$();
  };
  $DvtNBoxCell$$.prototype.$getAriaLabel$ = function $$DvtNBoxCell$$$$$getAriaLabel$$() {
    var $DvtNBoxAutomation$$ = this.$getCellIndex$(), $DvtNBoxKeyboardHandler$$ = [];
    $DvtNBoxDataUtils$$.$isCellMaximized$(this.$_nbox$, $DvtNBoxAutomation$$) ? $DvtNBoxKeyboardHandler$$.push($dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "STATE_MAXIMIZED")) : $DvtNBoxDataUtils$$.$isCellMinimized$(this.$_nbox$, $DvtNBoxAutomation$$) && $DvtNBoxKeyboardHandler$$.push($dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "STATE_MINIMIZED"));
    $DvtNBoxKeyboardHandler$$.push([$dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$NBOX_PREFIX$, "SIZE"), this.$getNodeCount$()]);
    return $dvt$$5$$.$Displayable$.$generateAriaLabel$(this.getData().shortDesc, $DvtNBoxKeyboardHandler$$);
  };
  $DvtNBoxCell$$.prototype.$getKeyboardBoundingBox$ = function $$DvtNBoxCell$$$$$getKeyboardBoundingBox$$($dvt$$5$$) {
    return $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$(this, $dvt$$5$$);
  };
  $DvtNBoxCell$$.prototype.$getTargetElem$ = function $$DvtNBoxCell$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtNBoxCell$$.prototype.$showKeyboardFocusEffect$ = function $$DvtNBoxCell$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show();
  };
  $DvtNBoxCell$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtNBoxCell$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$();
  };
  $DvtNBoxCell$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtNBoxCell$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtNBoxCell$$.prototype.$getNextNavigable$ = function $$DvtNBoxCell$$$$$getNextNavigable$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null;
    this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($DvtNBoxAutomation$$) && ($DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$OPEN_BRACKET$ ? this.$_getFirstNavigableChild$($DvtNBoxAutomation$$) : this.$_getNextSibling$($DvtNBoxAutomation$$));
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxCell$$.prototype.$_getNextSibling$ = function $$DvtNBoxCell$$$$$_getNextSibling$$($DvtNBoxAutomation$$) {
    for (var $DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) * $DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$), $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$;$DvtNBoxDataAnimationHandler$$++) {
      $DvtNBoxKeyboardHandler$$.push($DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxDataAnimationHandler$$)));
    }
    return $dvt$$5$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
  };
  $DvtNBoxCell$$.prototype.$_getFirstNavigableChild$ = function $$DvtNBoxCell$$$$$_getFirstNavigableChild$$($DvtNBoxAutomation$$) {
    var $DvtNBoxEventManager$$ = null, $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
    if ($DvtNBoxCategoryRolloverHandler$$ && $DvtNBoxEventManager$$ == this.getData()[$dvt$$5$$.$NBoxConstants$.$ROW$] && $DvtNBoxDataAnimationHandler$$ == this.getData()[$dvt$$5$$.$NBoxConstants$.$COLUMN$]) {
      $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxCategoryRolloverHandler$$);
    } else {
      if ($DvtNBoxEventManager$$ = this.$getChildContainer$(), $DvtNBoxEventManager$$.$getScrollingPane$ && ($DvtNBoxEventManager$$ = $DvtNBoxEventManager$$.$_container$), 0 < $DvtNBoxEventManager$$.$getNumChildren$() && ($DvtNBoxEventManager$$.$getChildAt$(0) instanceof $DvtNBoxNode$$ || $DvtNBoxEventManager$$.$getChildAt$(0) instanceof $DvtNBoxNodeOverflow$$)) {
        $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, $DvtNBoxEventManager$$);
      } else {
        $DvtNBoxDataAnimationHandler$$ = [];
        for ($DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxEventManager$$.$getNumChildren$();$DvtNBoxCategoryRolloverHandler$$++) {
          var $DvtNBoxDrawer$$ = $DvtNBoxEventManager$$.$getChildAt$($DvtNBoxCategoryRolloverHandler$$);
          $DvtNBoxDrawer$$ instanceof $DvtNBoxCategoryNode$$ && $DvtNBoxDataAnimationHandler$$.push($DvtNBoxDrawer$$);
        }
        $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getNextNavigableCategoryNode$(null, $DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
      }
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxCell$$.prototype.$getCellIndex$ = function $$DvtNBoxCell$$$$$getCellIndex$$() {
    return $DvtNBoxDataUtils$$.$getCellIndexByRowColumn$(this.$_nbox$, this.getData()[$dvt$$5$$.$NBoxConstants$.$ROW$], this.getData()[$dvt$$5$$.$NBoxConstants$.$COLUMN$]);
  };
  $DvtNBoxCell$$.prototype.$getLabel$ = function $$DvtNBoxCell$$$$$getLabel$$() {
    var $DvtNBoxAutomation$$ = this.getData()[$dvt$$5$$.$NBoxConstants$.$LABEL$];
    return $DvtNBoxAutomation$$ ? $DvtNBoxAutomation$$ : null;
  };
  $DvtNBoxCell$$.prototype.$getCountLabel$ = function $$DvtNBoxCell$$$$$getCountLabel$$() {
    var $dvt$$5$$ = this.getData(), $DvtNBoxAutomation$$ = this.$_nbox$.$getOptions$().countLabel;
    return $DvtNBoxAutomation$$ ? ($dvt$$5$$ = {row:$dvt$$5$$.row, column:$dvt$$5$$.column, nodeCount:this.$getNodeCount$(), highlightedNodeCount:this.$getHighlightedNodeCount$(), totalNodeCount:$DvtNBoxDataUtils$$.$getNodeCount$(this.$_nbox$)}, $DvtNBoxAutomation$$($dvt$$5$$)) : $dvt$$5$$.countLabel;
  };
  $DvtNBoxCell$$.prototype.$getBackground$ = function $$DvtNBoxCell$$$$$getBackground$$() {
    var $DvtNBoxAutomation$$ = $DvtNBoxStyleUtils$$.$getCellStyle$(this.$_nbox$, this.$getCellIndex$()), $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getStyle$($dvt$$5$$.$CSSStyle$.$BACKGROUND$), $DvtNBoxAutomation$$ = $DvtNBoxAutomation$$.$getStyle$($dvt$$5$$.$CSSStyle$.$BACKGROUND_COLOR$);
    return $DvtNBoxKeyboardHandler$$ ? $DvtNBoxKeyboardHandler$$ : $DvtNBoxAutomation$$;
  };
  $DvtNBoxCell$$.prototype.$getNodeCount$ = function $$DvtNBoxCell$$$$$getNodeCount$$() {
    return $DvtNBoxRenderer$$.$getCellCounts$(this.$_nbox$).total[this.$getCellIndex$()];
  };
  $DvtNBoxCell$$.prototype.$getHighlightedNodeCount$ = function $$DvtNBoxCell$$$$$getHighlightedNodeCount$$() {
    var $dvt$$5$$ = $DvtNBoxRenderer$$.$getCellCounts$(this.$_nbox$);
    return $dvt$$5$$.highlighted ? $dvt$$5$$.highlighted[this.$getCellIndex$()] : null;
  };
  $DvtNBoxCell$$.prototype.$getNode$ = function $$DvtNBoxCell$$$$$getNode$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = this.$_nbox$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$NODES$];
    if ($DvtNBoxKeyboardHandler$$) {
      for (var $DvtNBoxEventManager$$ = 0, $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxDataAnimationHandler$$++) {
        if (this.getData()[$dvt$$5$$.$NBoxConstants$.$ROW$] == $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$][$dvt$$5$$.$NBoxConstants$.$ROW$] && this.getData()[$dvt$$5$$.$NBoxConstants$.$COLUMN$] == $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$][$dvt$$5$$.$NBoxConstants$.$COLUMN$] && !$DvtNBoxDataUtils$$.$isNodeHidden$(this.$_nbox$, $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$])) {
          if ($DvtNBoxAutomation$$ == $DvtNBoxEventManager$$) {
            return $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$];
          }
          $DvtNBoxEventManager$$++;
        }
      }
    }
    return null;
  };
  $DvtNBoxCell$$.prototype.$getDisplayable$ = function $$DvtNBoxCell$$$$$getDisplayable$$() {
    return this;
  };
  $DvtNBoxCell$$.prototype.$getKeyboardFocusDisplayable$ = function $$DvtNBoxCell$$$$$getKeyboardFocusDisplayable$$() {
    return $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && this.$_nbox$.$getOptions$().__groups ? null : $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, this.getData())));
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxNode$$, $dvt$$5$$.$Container$);
  $DvtNBoxNode$$.prototype.Init = function $$DvtNBoxNode$$$$Init$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxNode$$.$superclass$.Init.call(this, $DvtNBoxAutomation$$.$getCtx$(), null, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.ID]);
    this.$_nbox$ = $DvtNBoxAutomation$$;
    this.$_data$ = $DvtNBoxKeyboardHandler$$;
    this.$_nbox$.$registerObject$(this);
    var $DvtNBoxEventManager$$ = this.$_nbox$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$SELECTION_MODE$];
    ("single" == $DvtNBoxEventManager$$ || "multiple" == $DvtNBoxEventManager$$ || this.$getAction$()) && this.setCursor("pointer");
    this.$_maxAlpha$ = 1;
  };
  $DvtNBoxNode$$.prototype.getData = function $$DvtNBoxNode$$$$getData$() {
    return this.$_data$;
  };
  $DvtNBoxNode$$.prototype.$getAction$ = function $$DvtNBoxNode$$$$$getAction$$() {
    return this.$_data$.action;
  };
  $DvtNBoxNode$$.prototype.$render$ = function $$DvtNBoxNode$$$$$render$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $DvtNBoxNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $DvtNBoxAutomation$$);
    $dvt$$5$$.$addChild$(this);
    $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
    this.$_nbox$.$EventManager$.$associate$(this, this);
  };
  $DvtNBoxNode$$.prototype.$isSelectable$ = function $$DvtNBoxNode$$$$$isSelectable$$() {
    return !0;
  };
  $DvtNBoxNode$$.prototype.$isSelected$ = function $$DvtNBoxNode$$$$$isSelected$$() {
    return this.$getSelectionShape$().$isSelected$();
  };
  $DvtNBoxNode$$.prototype.$setSelected$ = function $$DvtNBoxNode$$$$$setSelected$$($dvt$$5$$) {
    this.$getSelectionShape$().$setSelected$($dvt$$5$$);
    this.$UpdateAccessibilityAttributes$();
  };
  $DvtNBoxNode$$.prototype.$showHoverEffect$ = function $$DvtNBoxNode$$$$$showHoverEffect$$() {
    this.$getSelectionShape$().$showHoverEffect$();
  };
  $DvtNBoxNode$$.prototype.$hideHoverEffect$ = function $$DvtNBoxNode$$$$$hideHoverEffect$$() {
    this.$getSelectionShape$().$hideHoverEffect$();
  };
  $DvtNBoxNode$$.prototype.$setSelectionShape$ = function $$DvtNBoxNode$$$$$setSelectionShape$$($dvt$$5$$) {
    this.$_selectionShape$ = $dvt$$5$$;
  };
  $DvtNBoxNode$$.prototype.$getSelectionShape$ = function $$DvtNBoxNode$$$$$getSelectionShape$$() {
    return this.$_selectionShape$;
  };
  $DvtNBoxNode$$.prototype.$getDatatip$ = function $$DvtNBoxNode$$$$$getDatatip$$() {
    var $dvt$$5$$ = this.$_nbox$.$getOptions$().tooltip;
    if ($dvt$$5$$ = $dvt$$5$$ ? $dvt$$5$$.renderer : null) {
      var $DvtNBoxAutomation$$ = {id:this.$_data$.id, label:this.$_data$.label, secondaryLabel:this.$_data$.secondaryLabel, row:this.$_data$.row, column:this.$_data$.column, color:$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nbox$, this.$_data$)};
      return this.$_nbox$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($dvt$$5$$, $DvtNBoxAutomation$$);
    }
    return this.$getShortDesc$();
  };
  $DvtNBoxNode$$.prototype.$getShortDesc$ = function $$DvtNBoxNode$$$$$getShortDesc$$() {
    return this.$_data$[$dvt$$5$$.$NBoxConstants$.$SHORT_DESC$];
  };
  $DvtNBoxNode$$.prototype.$getDatatipColor$ = function $$DvtNBoxNode$$$$$getDatatipColor$$() {
    return $DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$);
  };
  $DvtNBoxNode$$.prototype.$setMaxAlpha$ = function $$DvtNBoxNode$$$$$setMaxAlpha$$($dvt$$5$$) {
    this.$_maxAlpha$ = $dvt$$5$$;
    this.$setAlpha$(this.$getAlpha$());
  };
  $DvtNBoxNode$$.prototype.$setAlpha$ = function $$DvtNBoxNode$$$$$setAlpha$$($dvt$$5$$) {
    $DvtNBoxNode$$.$superclass$.$setAlpha$.call(this, Math.min($dvt$$5$$, this.$_maxAlpha$));
  };
  $DvtNBoxNode$$.prototype.$animateUpdate$ = function $$DvtNBoxNode$$$$$animateUpdate$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $DvtNBoxNodeRenderer$$.$animateUpdate$($dvt$$5$$, $DvtNBoxAutomation$$, this);
  };
  $DvtNBoxNode$$.prototype.$animateDelete$ = function $$DvtNBoxNode$$$$$animateDelete$$($dvt$$5$$) {
    $DvtNBoxNodeRenderer$$.$animateDelete$($dvt$$5$$, this);
  };
  $DvtNBoxNode$$.prototype.$animateInsert$ = function $$DvtNBoxNode$$$$$animateInsert$$($dvt$$5$$) {
    $DvtNBoxNodeRenderer$$.$animateInsert$($dvt$$5$$, this);
  };
  $DvtNBoxNode$$.prototype.$isDoubleClickable$ = function $$DvtNBoxNode$$$$$isDoubleClickable$$() {
    return !0;
  };
  $DvtNBoxNode$$.prototype.$handleDoubleClick$ = function $$DvtNBoxNode$$$$$handleDoubleClick$$() {
    this.$_getParentContainer$().$handleDoubleClick$();
  };
  $DvtNBoxNode$$.prototype.$getShowPopupBehaviors$ = function $$DvtNBoxNode$$$$$getShowPopupBehaviors$$() {
    if (!this.$_showPopupBehaviors$) {
      this.$_showPopupBehaviors$ = [];
      var $DvtNBoxAutomation$$ = this.$_data$.showPopupBehaviors;
      if ($DvtNBoxAutomation$$) {
        for (var $DvtNBoxKeyboardHandler$$ = 0;$DvtNBoxKeyboardHandler$$ < $DvtNBoxAutomation$$.length;$DvtNBoxKeyboardHandler$$++) {
          this.$_showPopupBehaviors$.push(new $dvt$$5$$.$ShowPopupBehavior$($DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$].popupId, $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$].triggerType, $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$].alignId, $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$].align));
        }
      }
    }
    return this.$_showPopupBehaviors$;
  };
  $DvtNBoxNode$$.prototype.$getPopupBounds$ = function $$DvtNBoxNode$$$$$getPopupBounds$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$ && $DvtNBoxAutomation$$.$getAlign$()) {
      $DvtNBoxAutomation$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$(this);
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background");
      return new $dvt$$5$$.$Rectangle$($DvtNBoxAutomation$$.$_tx$ + $DvtNBoxKeyboardHandler$$.$getX$(), $DvtNBoxAutomation$$.$_ty$ + $DvtNBoxKeyboardHandler$$.$getY$(), $DvtNBoxKeyboardHandler$$.getWidth(), $DvtNBoxKeyboardHandler$$.getHeight());
    }
    return null;
  };
  $DvtNBoxNode$$.prototype.$isDragAvailable$ = function $$DvtNBoxNode$$$$$isDragAvailable$$($dvt$$5$$) {
    return this.$_nbox$.$__isDragAvailable$($dvt$$5$$);
  };
  $DvtNBoxNode$$.prototype.$getDragTransferable$ = function $$DvtNBoxNode$$$$$getDragTransferable$$() {
    return this.$_nbox$.$__getDragTransferable$(this);
  };
  $DvtNBoxNode$$.prototype.$getDragFeedback$ = function $$DvtNBoxNode$$$$$getDragFeedback$$() {
    return this.$_nbox$.$__getDragFeedback$();
  };
  $DvtNBoxNode$$.prototype.$_getParentContainer$ = function $$DvtNBoxNode$$$$$_getParentContainer$$() {
    var $dvt$$5$$;
    $dvt$$5$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
    $dvt$$5$$ || ($dvt$$5$$ = $DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, this.$_data$), $dvt$$5$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $dvt$$5$$));
    return $dvt$$5$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $dvt$$5$$);
  };
  $DvtNBoxNode$$.prototype.$UpdateAccessibilityAttributes$ = function $$DvtNBoxNode$$$$$UpdateAccessibilityAttributes$$() {
    if (!$dvt$$5$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxAutomation$$ = this.$getAriaLabel$();
      $DvtNBoxAutomation$$ && this.$setAriaProperty$($dvt$$5$$.$NBoxConstants$.$LABEL$, $DvtNBoxAutomation$$);
    }
  };
  $DvtNBoxNode$$.prototype.$getAriaLabel$ = function $$DvtNBoxNode$$$$$getAriaLabel$$() {
    return $DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$());
  };
  $DvtNBoxNode$$.prototype.$getCategories$ = function $$DvtNBoxNode$$$$$getCategories$$() {
    return this.getData()[$dvt$$5$$.$NBoxConstants$.$CATEGORIES$] ? this.getData()[$dvt$$5$$.$NBoxConstants$.$CATEGORIES$] : [];
  };
  $DvtNBoxNode$$.prototype.$getKeyboardBoundingBox$ = function $$DvtNBoxNode$$$$$getKeyboardBoundingBox$$($dvt$$5$$) {
    return $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$(this, $dvt$$5$$);
  };
  $DvtNBoxNode$$.prototype.$getTargetElem$ = function $$DvtNBoxNode$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtNBoxNode$$.prototype.$showKeyboardFocusEffect$ = function $$DvtNBoxNode$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$showHoverEffect$();
    var $dvt$$5$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$(this.$_nbox$, this);
    $dvt$$5$$ && $dvt$$5$$.scrollIntoView(this);
  };
  $DvtNBoxNode$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtNBoxNode$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$hideHoverEffect$();
  };
  $DvtNBoxNode$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtNBoxNode$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtNBoxNode$$.prototype.$getNextNavigable$ = function $$DvtNBoxNode$$$$$getNextNavigable$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null;
    if ($DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$SPACE$ && $DvtNBoxAutomation$$.ctrlKey) {
      return this;
    }
    this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($DvtNBoxAutomation$$) ? $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$CLOSE_BRACKET$ ? this.$_getParentContainer$() : $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$OPEN_BRACKET$ ? this : $DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $DvtNBoxAutomation$$) : $DvtNBoxAutomation$$.type == $dvt$$5$$.MouseEvent.$CLICK$ && ($DvtNBoxKeyboardHandler$$ = this);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxNode$$.prototype.$HandleKeyboardEvent$ = function $$DvtNBoxNode$$$$$HandleKeyboardEvent$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$) && $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$ESCAPE$) {
      this.$handleDoubleClick$();
    } else {
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$ == this.$_data$[$dvt$$5$$.$NBoxConstants$.$ROW$] && $DvtNBoxEventManager$$ == this.$_data$[$dvt$$5$$.$NBoxConstants$.$COLUMN$] ? !0 : !1;
      (!$DvtNBoxKeyboardHandler$$ && $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$ENTER$ || $DvtNBoxKeyboardHandler$$ && $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$ESCAPE$) && this.$handleDoubleClick$();
    }
  };
  $DvtNBoxNode$$.prototype.$getDisplayable$ = function $$DvtNBoxNode$$$$$getDisplayable$$() {
    return this;
  };
  $DvtNBoxNode$$.prototype.$getKeyboardFocusDisplayable$ = function $$DvtNBoxNode$$$$$getKeyboardFocusDisplayable$$() {
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.getData()[$dvt$$5$$.$NBoxConstants$.ID]));
    if ($DvtNBoxAutomation$$) {
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxAutomation$$);
      if ($DvtNBoxKeyboardHandler$$) {
        return $DvtNBoxKeyboardHandler$$;
      }
      $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $DvtNBoxAutomation$$));
      $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxAutomation$$);
      $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getLastNavigableNode$(this.$_nbox$, $DvtNBoxAutomation$$.$getChildContainer$());
      return $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNodeOverflow$$ ? $DvtNBoxKeyboardHandler$$ : ($DvtNBoxKeyboardHandler$$ = this.$_getParentDrawer$()) ? $DvtNBoxKeyboardHandler$$.$getKeyboardFocusDisplayable$() : $DvtNBoxAutomation$$.$getKeyboardFocusDisplayable$();
    }
    return null;
  };
  $DvtNBoxNode$$.prototype.$_getParentDrawer$ = function $$DvtNBoxNode$$$$$_getParentDrawer$$() {
    for (var $dvt$$5$$ = this;$dvt$$5$$ && $dvt$$5$$.getParent;) {
      if ($dvt$$5$$ = $dvt$$5$$.getParent(), $dvt$$5$$ instanceof $DvtNBoxDrawer$$) {
        return $dvt$$5$$;
      }
    }
    return null;
  };
  $DvtNBoxNode$$.prototype.$getChildContainer$ = function $$DvtNBoxNode$$$$$getChildContainer$$($DvtNBoxAutomation$$) {
    if (!$DvtNBoxAutomation$$ || this.$_childContainer$) {
      return this.$_childContainer$;
    }
    this.$_childContainer$ = new $dvt$$5$$.$Container$(this.$getCtx$());
    this.$addChild$(this.$_childContainer$);
    return this.$_childContainer$;
  };
  $DvtNBoxNode$$.prototype.$setChildContainer$ = function $$DvtNBoxNode$$$$$setChildContainer$$($dvt$$5$$) {
    this.$_childContainer$ = $dvt$$5$$;
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxNodeOverflow$$, $dvt$$5$$.$Container$);
  $DvtNBoxNodeOverflow$$.newInstance = function $$DvtNBoxNodeOverflow$$$newInstance$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = new $DvtNBoxNodeOverflow$$;
    $DvtNBoxKeyboardHandler$$.Init($dvt$$5$$, $DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxNodeOverflow$$.prototype.Init = function $$DvtNBoxNodeOverflow$$$$Init$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $DvtNBoxNodeOverflow$$.$superclass$.Init.call(this, $dvt$$5$$.$getCtx$());
    this.$_nbox$ = $dvt$$5$$;
    this.$_cell$ = $DvtNBoxAutomation$$;
    this.$_button$;
  };
  $DvtNBoxNodeOverflow$$.prototype.$render$ = function $$DvtNBoxNodeOverflow$$$$$render$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = this.$_nbox$.$getOptions$(), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$._resources.overflow_ena.width, $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$._resources.overflow_ena.height, $DvtNBoxCategoryNode$$ = 1;
    if ($DvtNBoxKeyboardHandler$$ < $DvtNBoxCategoryRolloverHandler$$ || $DvtNBoxEventManager$$ < $DvtNBoxDrawer$$) {
      $DvtNBoxCategoryNode$$ = Math.min($DvtNBoxKeyboardHandler$$ / $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$ / $DvtNBoxDrawer$$);
    }
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryNode$$ * $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$ = $DvtNBoxCategoryNode$$ * $DvtNBoxDrawer$$, $DvtNBoxCategoryNode$$ = ($DvtNBoxKeyboardHandler$$ - $DvtNBoxCategoryRolloverHandler$$) / 2, $DvtNBoxCell$$ = ($DvtNBoxEventManager$$ - $DvtNBoxDrawer$$) / 2, $DvtNBoxNodeOverflow$$ = this.$_nbox$.$getCtx$(), $DvtNBoxNode$$ = new $dvt$$5$$.Rect($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$), $DvtNBoxDefaults$$ = 
    new $dvt$$5$$.Rect($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$), $DvtNBoxRenderer$$ = new $dvt$$5$$.Rect($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$), $DvtNBoxCellRenderer$$ = new $dvt$$5$$.Rect($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxNode$$.$setInvisibleFill$();
    $DvtNBoxDefaults$$.$setInvisibleFill$();
    $DvtNBoxRenderer$$.$setInvisibleFill$();
    $DvtNBoxCellRenderer$$.$setInvisibleFill$();
    var $DvtNBoxNodeRenderer$$ = new $dvt$$5$$.$Container$($DvtNBoxNodeOverflow$$), $DvtNBoxCategoryNodeRenderer$$ = new $dvt$$5$$.$Container$($DvtNBoxNodeOverflow$$), $DvtNBoxStyleUtils$$ = new $dvt$$5$$.$Container$($DvtNBoxNodeOverflow$$), $DvtNBoxDrawerRenderer$$ = new $dvt$$5$$.$Container$($DvtNBoxNodeOverflow$$);
    $DvtNBoxNodeRenderer$$.$addChild$($DvtNBoxNode$$);
    $DvtNBoxCategoryNodeRenderer$$.$addChild$($DvtNBoxDefaults$$);
    $DvtNBoxStyleUtils$$.$addChild$($DvtNBoxRenderer$$);
    $DvtNBoxDrawerRenderer$$.$addChild$($DvtNBoxCellRenderer$$);
    $DvtNBoxNodeRenderer$$.$addChild$(new $dvt$$5$$.Image($DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$._resources.overflow_ena.src, $DvtNBoxCategoryNode$$, $DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$));
    $DvtNBoxCategoryNodeRenderer$$.$addChild$(new $dvt$$5$$.Image($DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$._resources.overflow_ovr.src, $DvtNBoxCategoryNode$$, $DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$));
    $DvtNBoxStyleUtils$$.$addChild$(new $dvt$$5$$.Image($DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$._resources.overflow_dwn.src, $DvtNBoxCategoryNode$$, $DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$));
    $DvtNBoxDrawerRenderer$$.$addChild$(new $dvt$$5$$.Image($DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$._resources.overflow_dis.src, $DvtNBoxCategoryNode$$, $DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$));
    this.$_button$ = new $dvt$$5$$.$Button$($DvtNBoxNodeOverflow$$, $DvtNBoxNodeRenderer$$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxStyleUtils$$, $DvtNBoxDrawerRenderer$$, null, this.$HandleClick$, this);
    $DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$) || (this.$_button$.$setEnabled$(!1), this.$_button$.$drawDisabledState$());
    this.$addChild$(this.$_button$);
    $DvtNBoxKeyboardHandler$$ = new $dvt$$5$$.$KeyboardFocusEffect$(this.$_nbox$.$getCtx$(), this, new $dvt$$5$$.$Rectangle$(-1, -1, $DvtNBoxKeyboardHandler$$ + 2, $DvtNBoxEventManager$$ + 2));
    $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this, $DvtNBoxKeyboardHandler$$, "focusEffect");
    $DvtNBoxAutomation$$.$addChild$(this);
    this.$_addAccessibilityAttributes$();
    this.$_nbox$.$EventManager$.$associate$(this, this);
  };
  $DvtNBoxNodeOverflow$$.prototype.$HandleClick$ = function $$DvtNBoxNodeOverflow$$$$$HandleClick$$($DvtNBoxAutomation$$) {
    $dvt$$5$$.$EventManager$.$consumeEvent$($DvtNBoxAutomation$$);
    this.$_cell$.$handleDoubleClick$(!0);
  };
  $DvtNBoxNodeOverflow$$.prototype.$HandleKeyboardEvent$ = function $$DvtNBoxNodeOverflow$$$$$HandleKeyboardEvent$$($DvtNBoxAutomation$$) {
    $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$ENTER$ && this.$_cell$.$handleDoubleClick$();
  };
  $DvtNBoxNodeOverflow$$.prototype.$_addAccessibilityAttributes$ = function $$DvtNBoxNodeOverflow$$$$$_addAccessibilityAttributes$$() {
    this.$setAriaRole$("button");
    if (!$dvt$$5$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxAutomation$$ = this.$getAriaLabel$();
      $DvtNBoxAutomation$$ && this.$setAriaProperty$($dvt$$5$$.$NBoxConstants$.$LABEL$, $DvtNBoxAutomation$$);
    }
  };
  $DvtNBoxNodeOverflow$$.prototype.$getDatatip$ = function $$DvtNBoxNodeOverflow$$$$$getDatatip$$() {
    return $dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$NBOX_PREFIX$, "ADDITIONAL_DATA");
  };
  $DvtNBoxNodeOverflow$$.prototype.$getAriaLabel$ = function $$DvtNBoxNodeOverflow$$$$$getAriaLabel$$() {
    return this.$getDatatip$();
  };
  $DvtNBoxNodeOverflow$$.prototype.$getKeyboardBoundingBox$ = function $$DvtNBoxNodeOverflow$$$$$getKeyboardBoundingBox$$($dvt$$5$$) {
    return $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$(this, $dvt$$5$$);
  };
  $DvtNBoxNodeOverflow$$.prototype.$getTargetElem$ = function $$DvtNBoxNodeOverflow$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtNBoxNodeOverflow$$.prototype.$showKeyboardFocusEffect$ = function $$DvtNBoxNodeOverflow$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").show();
  };
  $DvtNBoxNodeOverflow$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtNBoxNodeOverflow$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").$hide$();
  };
  $DvtNBoxNodeOverflow$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtNBoxNodeOverflow$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtNBoxNodeOverflow$$.prototype.$getNextNavigable$ = function $$DvtNBoxNodeOverflow$$$$$getNextNavigable$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null;
    this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($DvtNBoxAutomation$$) && ($DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$CLOSE_BRACKET$ ? this.$_cell$ : $DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $DvtNBoxAutomation$$));
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxNodeOverflow$$.prototype.$getDisplayable$ = function $$DvtNBoxNodeOverflow$$$$$getDisplayable$$() {
    return this;
  };
  $DvtNBoxNodeOverflow$$.prototype.$getKeyboardFocusDisplayable$ = function $$DvtNBoxNodeOverflow$$$$$getKeyboardFocusDisplayable$$() {
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.__prev[$dvt$$5$$.$NBoxConstants$.ID])).__next;
    return $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxAutomation$$);
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxCategoryNode$$, $dvt$$5$$.$Container$);
  $DvtNBoxCategoryNode$$.newInstance = function $$DvtNBoxCategoryNode$$$newInstance$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = new $DvtNBoxCategoryNode$$;
    $DvtNBoxKeyboardHandler$$.Init($dvt$$5$$, $DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxCategoryNode$$.prototype.Init = function $$DvtNBoxCategoryNode$$$$Init$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxCategoryNode$$.$superclass$.Init.call(this, $DvtNBoxAutomation$$.$getCtx$(), null, isNaN($DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$CELL$]) ? $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.ID] : $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$CELL$] + ":" + $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.ID]);
    this.$_nbox$ = $DvtNBoxAutomation$$;
    this.$_data$ = $DvtNBoxKeyboardHandler$$;
    this.$_nbox$.$registerObject$(this);
    this.setCursor("pointer");
    this.$_maxAlpha$ = 1;
  };
  $DvtNBoxCategoryNode$$.prototype.getData = function $$DvtNBoxCategoryNode$$$$getData$() {
    return this.$_data$;
  };
  $DvtNBoxCategoryNode$$.prototype.$render$ = function $$DvtNBoxCategoryNode$$$$$render$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxCategoryNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $dvt$$5$$.$addChild$(this);
    $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
    this.$_nbox$.$EventManager$.$associate$(this, this);
  };
  $DvtNBoxCategoryNode$$.prototype.$isSelectable$ = function $$DvtNBoxCategoryNode$$$$$isSelectable$$() {
    return "multiple" == this.$_nbox$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$SELECTION_MODE$];
  };
  $DvtNBoxCategoryNode$$.prototype.$isSelected$ = function $$DvtNBoxCategoryNode$$$$$isSelected$$() {
    return this.$getSelectionShape$().$isSelected$();
  };
  $DvtNBoxCategoryNode$$.prototype.$setSelected$ = function $$DvtNBoxCategoryNode$$$$$setSelected$$($dvt$$5$$) {
    this.$getSelectionShape$().$setSelected$($dvt$$5$$);
    this.$UpdateAccessibilityAttributes$();
  };
  $DvtNBoxCategoryNode$$.prototype.$showHoverEffect$ = function $$DvtNBoxCategoryNode$$$$$showHoverEffect$$() {
    this.$getSelectionShape$().$showHoverEffect$();
  };
  $DvtNBoxCategoryNode$$.prototype.$hideHoverEffect$ = function $$DvtNBoxCategoryNode$$$$$hideHoverEffect$$() {
    this.$getSelectionShape$().$hideHoverEffect$();
  };
  $DvtNBoxCategoryNode$$.prototype.$setSelectionShape$ = function $$DvtNBoxCategoryNode$$$$$setSelectionShape$$($dvt$$5$$) {
    this.$_selectionShape$ = $dvt$$5$$;
  };
  $DvtNBoxCategoryNode$$.prototype.$getSelectionShape$ = function $$DvtNBoxCategoryNode$$$$$getSelectionShape$$() {
    return this.$_selectionShape$;
  };
  $DvtNBoxCategoryNode$$.prototype.$getLabel$ = function $$DvtNBoxCategoryNode$$$$$getLabel$$() {
    for (var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$);1 < $DvtNBoxAutomation$$.length;) {
      var $DvtNBoxKeyboardHandler$$ = $dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$NBOX_PREFIX$, "COMMA_SEP_LIST", [$DvtNBoxAutomation$$[0], $DvtNBoxAutomation$$[1]]);
      $DvtNBoxAutomation$$.splice(0, 2, $DvtNBoxKeyboardHandler$$);
    }
    return $DvtNBoxAutomation$$[0];
  };
  $DvtNBoxCategoryNode$$.prototype.$getDatatip$ = function $$DvtNBoxCategoryNode$$$$$getDatatip$$() {
    var $DvtNBoxAutomation$$ = this.$_nbox$.$getOptions$().tooltip;
    if ($DvtNBoxAutomation$$ = $DvtNBoxAutomation$$ ? $DvtNBoxAutomation$$.renderer : null) {
      var $DvtNBoxKeyboardHandler$$ = {id:this.$_data$.id, color:$DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this.$_nbox$, this.$_data$), size:this.$_data$.nodeIndices.length};
      "withinCell" == $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) && ($DvtNBoxKeyboardHandler$$.row = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).row, $DvtNBoxKeyboardHandler$$.column = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).column);
      return this.$_nbox$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    }
    return this.$getShortDesc$() + "\n" + $dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$NBOX_PREFIX$, "SIZE"), this.$_data$.nodeIndices.length]);
  };
  $DvtNBoxCategoryNode$$.prototype.$getShortDesc$ = function $$DvtNBoxCategoryNode$$$$$getShortDesc$$() {
    return $DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$).join("\n");
  };
  $DvtNBoxCategoryNode$$.prototype.$getDatatipColor$ = function $$DvtNBoxCategoryNode$$$$$getDatatipColor$$() {
    return $DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$);
  };
  $DvtNBoxCategoryNode$$.prototype.$setMaxAlpha$ = function $$DvtNBoxCategoryNode$$$$$setMaxAlpha$$($dvt$$5$$) {
    this.$_maxAlpha$ = $dvt$$5$$;
    this.$setAlpha$(this.$getAlpha$());
  };
  $DvtNBoxCategoryNode$$.prototype.$setAlpha$ = function $$DvtNBoxCategoryNode$$$$$setAlpha$$($dvt$$5$$) {
    $DvtNBoxCategoryNode$$.$superclass$.$setAlpha$.call(this, Math.min($dvt$$5$$, this.$_maxAlpha$));
  };
  $DvtNBoxCategoryNode$$.prototype.$isDoubleClickable$ = function $$DvtNBoxCategoryNode$$$$$isDoubleClickable$$() {
    return this.$isSelectable$();
  };
  $DvtNBoxCategoryNode$$.prototype.$handleDoubleClick$ = function $$DvtNBoxCategoryNode$$$$$handleDoubleClick$$() {
    this.$isSelectable$() && this.$openDrawer$();
  };
  $DvtNBoxCategoryNode$$.prototype.$openDrawer$ = function $$DvtNBoxCategoryNode$$$$$openDrawer$$() {
    var $DvtNBoxAutomation$$ = this.$_nbox$.$getSanitizedOptions$();
    $DvtNBoxAutomation$$[$dvt$$5$$.$NBoxConstants$.$DRAWER$] = {id:this.getId()};
    var $DvtNBoxKeyboardHandler$$ = $dvt$$5$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$5$$.$NBoxConstants$.$DRAWER$, this.getId());
    this.$_nbox$.$processEvent$($DvtNBoxKeyboardHandler$$);
    this.$_nbox$.$render$($DvtNBoxAutomation$$);
  };
  $DvtNBoxCategoryNode$$.prototype.$animateUpdate$ = function $$DvtNBoxCategoryNode$$$$$animateUpdate$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $DvtNBoxCategoryNodeRenderer$$.$animateUpdate$($dvt$$5$$, $DvtNBoxAutomation$$, this);
  };
  $DvtNBoxCategoryNode$$.prototype.$animateDelete$ = function $$DvtNBoxCategoryNode$$$$$animateDelete$$($dvt$$5$$) {
    $DvtNBoxCategoryNodeRenderer$$.$animateDelete$($dvt$$5$$, this);
  };
  $DvtNBoxCategoryNode$$.prototype.$animateInsert$ = function $$DvtNBoxCategoryNode$$$$$animateInsert$$($dvt$$5$$) {
    $DvtNBoxCategoryNodeRenderer$$.$animateInsert$($dvt$$5$$, this);
  };
  $DvtNBoxCategoryNode$$.prototype.$isDragAvailable$ = function $$DvtNBoxCategoryNode$$$$$isDragAvailable$$($dvt$$5$$) {
    return this.$_nbox$.$__isDragAvailable$($dvt$$5$$);
  };
  $DvtNBoxCategoryNode$$.prototype.$getDragTransferable$ = function $$DvtNBoxCategoryNode$$$$$getDragTransferable$$() {
    return this.$_nbox$.$__getDragTransferable$(this);
  };
  $DvtNBoxCategoryNode$$.prototype.$getDragFeedback$ = function $$DvtNBoxCategoryNode$$$$$getDragFeedback$$() {
    return this.$_nbox$.$__getDragFeedback$();
  };
  $DvtNBoxCategoryNode$$.prototype.$HandleKeyboardEvent$ = function $$DvtNBoxCategoryNode$$$$$HandleKeyboardEvent$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$ENTER$) {
      this.$openDrawer$();
    } else {
      if ($DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$ESCAPE$ && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.$cell$);
        $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxKeyboardHandler$$).$HandleKeyboardEvent$($DvtNBoxAutomation$$);
      }
    }
  };
  $DvtNBoxCategoryNode$$.prototype.$UpdateAccessibilityAttributes$ = function $$DvtNBoxCategoryNode$$$$$UpdateAccessibilityAttributes$$() {
    if (!$dvt$$5$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxAutomation$$ = this.$getAriaLabel$();
      $DvtNBoxAutomation$$ && this.$setAriaProperty$($dvt$$5$$.$NBoxConstants$.$LABEL$, $DvtNBoxAutomation$$);
    }
  };
  $DvtNBoxCategoryNode$$.prototype.$getAriaLabel$ = function $$DvtNBoxCategoryNode$$$$$getAriaLabel$$() {
    return $DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$());
  };
  $DvtNBoxCategoryNode$$.prototype.$getCategories$ = function $$DvtNBoxCategoryNode$$$$$getCategories$$() {
    var $DvtNBoxAutomation$$ = this.getData()[$dvt$$5$$.$NBoxConstants$.$CATEGORIES$];
    if (!$DvtNBoxAutomation$$) {
      for (var $DvtNBoxKeyboardHandler$$ = function $$DvtNBoxKeyboardHandler$$$($dvt$$5$$, $DvtNBoxAutomation$$) {
        return $dvt$$5$$.filter(function($dvt$$5$$) {
          return -1 < $DvtNBoxAutomation$$.indexOf($dvt$$5$$);
        });
      }, $DvtNBoxEventManager$$ = this.getData().nodeIndices, $DvtNBoxAutomation$$ = null, $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDataAnimationHandler$$++) {
        var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$])[$dvt$$5$$.$NBoxConstants$.$CATEGORIES$];
        if (!$DvtNBoxCategoryRolloverHandler$$) {
          $DvtNBoxAutomation$$ = [];
          break;
        }
        $DvtNBoxAutomation$$ = null == $DvtNBoxAutomation$$ ? $DvtNBoxCategoryRolloverHandler$$ : $DvtNBoxKeyboardHandler$$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$);
      }
      this.getData()[$dvt$$5$$.$NBoxConstants$.$CATEGORIES$] = $DvtNBoxAutomation$$;
    }
    return $DvtNBoxAutomation$$;
  };
  $DvtNBoxCategoryNode$$.$compareSize$ = function $$DvtNBoxCategoryNode$$$$compareSize$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $dvt$$5$$.nodeIndices.length, $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.nodeIndices.length;
    return $DvtNBoxKeyboardHandler$$ == $DvtNBoxEventManager$$ ? 0 : $DvtNBoxKeyboardHandler$$ < $DvtNBoxEventManager$$ ? 1 : -1;
  };
  $DvtNBoxCategoryNode$$.prototype.$getKeyboardBoundingBox$ = function $$DvtNBoxCategoryNode$$$$$getKeyboardBoundingBox$$($dvt$$5$$) {
    return $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$(this, $dvt$$5$$);
  };
  $DvtNBoxCategoryNode$$.prototype.$getTargetElem$ = function $$DvtNBoxCategoryNode$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtNBoxCategoryNode$$.prototype.$showKeyboardFocusEffect$ = function $$DvtNBoxCategoryNode$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    this.$showHoverEffect$();
  };
  $DvtNBoxCategoryNode$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtNBoxCategoryNode$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$hideHoverEffect$();
  };
  $DvtNBoxCategoryNode$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtNBoxCategoryNode$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtNBoxCategoryNode$$.prototype.$getNextNavigable$ = function $$DvtNBoxCategoryNode$$$$$getNextNavigable$$($DvtNBoxAutomation$$) {
    var $DvtNBoxEventManager$$ = null;
    if ($DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$SPACE$ && $DvtNBoxAutomation$$.ctrlKey) {
      return this;
    }
    if ($DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$CLOSE_BRACKET$ && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.getData()[$dvt$$5$$.$NBoxConstants$.$CELL$]), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxAutomation$$);
    } else {
      if ($DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$CLOSE_BRACKET$ || $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$OPEN_BRACKET$) {
        $DvtNBoxEventManager$$ = this;
      } else {
        if (this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($DvtNBoxAutomation$$)) {
          if ($DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
            var $DvtNBoxEventManager$$ = this.$_nbox$.$getOptions$().__groups, $DvtNBoxDataAnimationHandler$$ = [], $DvtNBoxCategoryRolloverHandler$$;
            for ($DvtNBoxCategoryRolloverHandler$$ in $DvtNBoxEventManager$$) {
              var $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxEventManager$$[$DvtNBoxCategoryRolloverHandler$$]);
              $DvtNBoxDrawer$$ && $DvtNBoxDataAnimationHandler$$.push($DvtNBoxDrawer$$);
            }
            $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getNextNavigableCategoryNode$(this, $DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
          } else {
            $DvtNBoxCategoryRolloverHandler$$ = this.getParent();
            $DvtNBoxEventManager$$ = [];
            for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxCategoryRolloverHandler$$.$getNumChildren$();$DvtNBoxDataAnimationHandler$$++) {
              $DvtNBoxCategoryRolloverHandler$$.$getChildAt$($DvtNBoxDataAnimationHandler$$) instanceof $DvtNBoxCategoryNode$$ && $DvtNBoxEventManager$$.push($DvtNBoxCategoryRolloverHandler$$.$getChildAt$($DvtNBoxDataAnimationHandler$$));
            }
            $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getNextNavigableCategoryNode$(this, $DvtNBoxAutomation$$, $DvtNBoxEventManager$$);
          }
        } else {
          $DvtNBoxAutomation$$.type == $dvt$$5$$.MouseEvent.$CLICK$ && ($DvtNBoxEventManager$$ = this);
        }
      }
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxCategoryNode$$.prototype.$getDisplayable$ = function $$DvtNBoxCategoryNode$$$$$getDisplayable$$() {
    return this;
  };
  $DvtNBoxCategoryNode$$.prototype.$getKeyboardFocusDisplayable$ = function $$DvtNBoxCategoryNode$$$$$getKeyboardFocusDisplayable$$() {
    var $dvt$$5$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
    return $dvt$$5$$ || $DvtNBoxDataUtils$$.$getGrouping$(this.$_nbox$) && ($dvt$$5$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getId())) ? $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $dvt$$5$$) : null;
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxCategoryRolloverHandler$$, $dvt$$5$$.$CategoryRolloverHandler$);
  $DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloverCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloverCallback$$($DvtNBoxAutomation$$) {
    return $dvt$$5$$.$Obj$.$createCallback$(this, function() {
      this.$SetHighlightMode$(!0);
      this.$_nbox$.$processEvent$($DvtNBoxAutomation$$);
      this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $DvtNBoxAutomation$$, this.$_source$);
    });
  };
  $DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloutCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloutCallback$$($DvtNBoxAutomation$$) {
    return $dvt$$5$$.$Obj$.$createCallback$(this, function() {
      this.$SetHighlightModeTimeout$();
      this.$_nbox$.$processEvent$($DvtNBoxAutomation$$);
      this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $DvtNBoxAutomation$$, this.$_source$);
    });
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxDrawer$$, $dvt$$5$$.$Container$);
  $DvtNBoxDrawer$$.newInstance = function $$DvtNBoxDrawer$$$newInstance$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = new $DvtNBoxDrawer$$;
    $DvtNBoxKeyboardHandler$$.Init($dvt$$5$$, $DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDrawer$$.prototype.Init = function $$DvtNBoxDrawer$$$$Init$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $DvtNBoxDrawer$$.$superclass$.Init.call(this, $dvt$$5$$.$getCtx$(), null, $DvtNBoxAutomation$$.id + "_d");
    this.$_nbox$ = $dvt$$5$$;
    this.$_data$ = $DvtNBoxAutomation$$;
    this.$_nbox$.$registerObject$(this);
  };
  $DvtNBoxDrawer$$.prototype.getData = function $$DvtNBoxDrawer$$$$getData$() {
    return this.$_data$;
  };
  $DvtNBoxDrawer$$.prototype.$render$ = function $$DvtNBoxDrawer$$$$$render$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $dvt$$5$$.$addChild$(this);
    $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
    $DvtNBoxDrawerRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $DvtNBoxAutomation$$);
    this.$_nbox$.$EventManager$.$associate$(this, this);
  };
  $DvtNBoxDrawer$$.prototype.$getChildContainer$ = function $$DvtNBoxDrawer$$$$$getChildContainer$$() {
    return this.$_childContainer$;
  };
  $DvtNBoxDrawer$$.prototype.$setChildContainer$ = function $$DvtNBoxDrawer$$$$$setChildContainer$$($dvt$$5$$) {
    this.$_childContainer$ = $dvt$$5$$;
  };
  $DvtNBoxDrawer$$.prototype.$isDoubleClickable$ = function $$DvtNBoxDrawer$$$$$isDoubleClickable$$() {
    return !0;
  };
  $DvtNBoxDrawer$$.prototype.$handleDoubleClick$ = function $$DvtNBoxDrawer$$$$$handleDoubleClick$$() {
    this.$closeDrawer$();
  };
  $DvtNBoxDrawer$$.prototype.$closeDrawer$ = function $$DvtNBoxDrawer$$$$$closeDrawer$$() {
    var $DvtNBoxAutomation$$ = this.$_nbox$.$getSanitizedOptions$();
    $DvtNBoxAutomation$$[$dvt$$5$$.$NBoxConstants$.$DRAWER$] = null;
    var $DvtNBoxKeyboardHandler$$ = $dvt$$5$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$5$$.$NBoxConstants$.$DRAWER$, null);
    this.$_nbox$.$processEvent$($DvtNBoxKeyboardHandler$$);
    this.$_nbox$.$render$($DvtNBoxAutomation$$);
  };
  $DvtNBoxDrawer$$.prototype.$animateUpdate$ = function $$DvtNBoxDrawer$$$$$animateUpdate$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $DvtNBoxDrawerRenderer$$.$animateUpdate$($dvt$$5$$, $DvtNBoxAutomation$$, this);
  };
  $DvtNBoxDrawer$$.prototype.$animateDelete$ = function $$DvtNBoxDrawer$$$$$animateDelete$$($dvt$$5$$) {
    $DvtNBoxDrawerRenderer$$.$animateDelete$($dvt$$5$$, this);
  };
  $DvtNBoxDrawer$$.prototype.$animateInsert$ = function $$DvtNBoxDrawer$$$$$animateInsert$$($dvt$$5$$) {
    $DvtNBoxDrawerRenderer$$.$animateInsert$($dvt$$5$$, this);
  };
  $DvtNBoxDrawer$$.prototype.$HandleKeyboardEvent$ = function $$DvtNBoxDrawer$$$$$HandleKeyboardEvent$$($DvtNBoxAutomation$$) {
    $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$ESCAPE$ && this.$closeDrawer$();
  };
  $DvtNBoxDrawer$$.prototype.$UpdateAccessibilityAttributes$ = function $$DvtNBoxDrawer$$$$$UpdateAccessibilityAttributes$$() {
    if (!$dvt$$5$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxAutomation$$ = this.$getAriaLabel$();
      $DvtNBoxAutomation$$ && ($dvt$$5$$.$Agent$.$isTouchDevice$() ? $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "background") : this).$setAriaProperty$("label", $DvtNBoxAutomation$$);
    }
  };
  $DvtNBoxDrawer$$.prototype.$getAriaLabel$ = function $$DvtNBoxDrawer$$$$$getAriaLabel$$() {
    var $dvt$$5$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData().id)), $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$isDrawerSelected$(this.$_nbox$, $dvt$$5$$);
    return $DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, $dvt$$5$$.$getShortDesc$(), $DvtNBoxAutomation$$);
  };
  $DvtNBoxDrawer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtNBoxDrawer$$$$$getKeyboardBoundingBox$$($dvt$$5$$) {
    return $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$(this, $dvt$$5$$);
  };
  $DvtNBoxDrawer$$.prototype.$getTargetElem$ = function $$DvtNBoxDrawer$$$$$getTargetElem$$() {
    return this.$getElem$();
  };
  $DvtNBoxDrawer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtNBoxDrawer$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !0;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show();
  };
  $DvtNBoxDrawer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtNBoxDrawer$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = !1;
    $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$();
  };
  $DvtNBoxDrawer$$.prototype.$isShowingKeyboardFocusEffect$ = function $$DvtNBoxDrawer$$$$$isShowingKeyboardFocusEffect$$() {
    return this.$_isShowingKeyboardFocusEffect$;
  };
  $DvtNBoxDrawer$$.prototype.$getNextNavigable$ = function $$DvtNBoxDrawer$$$$$getNextNavigable$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null;
    this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($DvtNBoxAutomation$$) && ($DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$OPEN_BRACKET$ ? ($DvtNBoxAutomation$$ = this.$getChildContainer$(), $DvtNBoxAutomation$$.$getScrollingPane$ && ($DvtNBoxAutomation$$ = $DvtNBoxAutomation$$.$_container$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, $DvtNBoxAutomation$$)) : $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$CLOSE_BRACKET$ && 
    ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getMaximizedCellIndex$(this.$_nbox$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxAutomation$$))));
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDrawer$$.prototype.$getDisplayable$ = function $$DvtNBoxDrawer$$$$$getDisplayable$$() {
    return this;
  };
  $DvtNBoxDrawer$$.prototype.$getKeyboardFocusDisplayable$ = function $$DvtNBoxDrawer$$$$$getKeyboardFocusDisplayable$$() {
    if (this.$_nbox$.$getOptions$()._drawer) {
      return this;
    }
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData()[$dvt$$5$$.$NBoxConstants$.ID]);
    return $DvtNBoxAutomation$$ ? $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxAutomation$$) : null;
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxDataAnimationHandler$$, $dvt$$5$$.$DataAnimationHandler$);
  $DvtNBoxDataAnimationHandler$$.$DELETE$ = 0;
  $DvtNBoxDataAnimationHandler$$.$UPDATE$ = 1;
  $DvtNBoxDataAnimationHandler$$.$INSERT$ = 2;
  $DvtNBoxDataAnimationHandler$$.prototype.Init = function $$DvtNBoxDataAnimationHandler$$$$Init$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxDataAnimationHandler$$.$superclass$.Init.call(this, $dvt$$5$$, $DvtNBoxAutomation$$);
    this.$_oldNBox$ = $DvtNBoxKeyboardHandler$$;
    this.$_newNBox$ = $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataAnimationHandler$$.prototype.$getAnimationDuration$ = function $$DvtNBoxDataAnimationHandler$$$$$getAnimationDuration$$() {
    return $DvtNBoxStyleUtils$$.$getAnimationDuration$(this.$_oldNBox$);
  };
  $dvt$$5$$.$Obj$.$createSubclass$(function($dvt$$5$$) {
    this.$_view$ = $dvt$$5$$;
  }, $dvt$$5$$.$DropTarget$);
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxEventManager$$, $dvt$$5$$.$EventManager$);
  $DvtNBoxEventManager$$.prototype.$OnClickInternal$ = function $$DvtNBoxEventManager$$$$$OnClickInternal$$($dvt$$5$$) {
    $dvt$$5$$ = this.$GetLogicalObject$($dvt$$5$$.target);
    this.$_processActionEvent$($dvt$$5$$);
    $dvt$$5$$ instanceof $DvtNBoxCategoryNode$$ && !$dvt$$5$$.$isSelectable$() && $dvt$$5$$.$openDrawer$();
  };
  $DvtNBoxEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtNBoxEventManager$$$$$OnDblClickInternal$$($dvt$$5$$) {
    this.$_handleDblClick$(this.$GetCurrentTargetForEvent$($dvt$$5$$));
  };
  $DvtNBoxEventManager$$.prototype.$HandleTouchDblClickInternal$ = function $$DvtNBoxEventManager$$$$$HandleTouchDblClickInternal$$($dvt$$5$$) {
    this.$_handleDblClick$(this.$GetCurrentTargetForEvent$($dvt$$5$$));
  };
  $DvtNBoxEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtNBoxEventManager$$$$$HandleTouchHoverEndInternal$$($dvt$$5$$) {
    $dvt$$5$$ = this.$GetLogicalObject$($dvt$$5$$.target);
    this.$_processActionEvent$($dvt$$5$$);
  };
  $DvtNBoxEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtNBoxEventManager$$$$$HandleTouchClickInternal$$($dvt$$5$$) {
    $dvt$$5$$ = this.$GetLogicalObject$($dvt$$5$$.target);
    this.$_processActionEvent$($dvt$$5$$);
    $dvt$$5$$ instanceof $DvtNBoxCategoryNode$$ && !$dvt$$5$$.$isSelectable$() && $dvt$$5$$.$openDrawer$();
  };
  $DvtNBoxEventManager$$.prototype.$_handleDblClick$ = function $$DvtNBoxEventManager$$$$$_handleDblClick$$($dvt$$5$$) {
    ($dvt$$5$$ = this.$GetLogicalObject$($dvt$$5$$)) && $dvt$$5$$.$isDoubleClickable$ && $dvt$$5$$.$isDoubleClickable$() && $dvt$$5$$.$handleDoubleClick$ && $dvt$$5$$.$handleDoubleClick$();
  };
  $DvtNBoxEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtNBoxEventManager$$$$$ProcessKeyboardEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = !1, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.keyCode, $DvtNBoxCategoryRolloverHandler$$ = this.$getFocus$();
    if ($DvtNBoxDataAnimationHandler$$ == $dvt$$5$$.KeyboardEvent.$ENTER$ || $DvtNBoxDataAnimationHandler$$ == $dvt$$5$$.KeyboardEvent.$ESCAPE$) {
      $DvtNBoxCategoryRolloverHandler$$ && $DvtNBoxCategoryRolloverHandler$$.$HandleKeyboardEvent$ && $DvtNBoxCategoryRolloverHandler$$.$HandleKeyboardEvent$($DvtNBoxAutomation$$);
    } else {
      if ($DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$SPACE$ && $DvtNBoxAutomation$$.ctrlKey) {
        if ($DvtNBoxCategoryRolloverHandler$$ instanceof $DvtNBoxCategoryNode$$ || $DvtNBoxCategoryRolloverHandler$$ instanceof $DvtNBoxNode$$) {
          $DvtNBoxKeyboardHandler$$ = $DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtNBoxAutomation$$);
        }
      } else {
        $DvtNBoxKeyboardHandler$$ = $DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtNBoxAutomation$$);
      }
    }
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtNBoxEventManager$$$$$ProcessRolloverEvent$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = this.$_nbox$.$getOptions$();
    "dim" == $DvtNBoxAutomation$$.hoverBehavior && ($DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$.$getCategories$ ? $DvtNBoxKeyboardHandler$$.$getCategories$() : [], $DvtNBoxAutomation$$.highlightedCategories = $DvtNBoxEventManager$$ ? $DvtNBoxKeyboardHandler$$.slice() : null, $DvtNBoxEventManager$$ = $dvt$$5$$.$EventFactory$.$newCategoryHighlightEvent$($DvtNBoxAutomation$$.highlightedCategories, $DvtNBoxEventManager$$), $DvtNBoxKeyboardHandler$$ = $dvt$$5$$.$StyleUtils$.$getTimeMilliseconds$($DvtNBoxAutomation$$.styleDefaults.hoverBehaviorDelay), 
    this.$RolloverHandler$.$processEvent$($DvtNBoxEventManager$$, this.$_nbox$.$getNodeDisplayables$(), $DvtNBoxKeyboardHandler$$, "any" == $DvtNBoxAutomation$$.highlightMatch));
  };
  $DvtNBoxEventManager$$.prototype.$CreateCategoryRolloverHandler$ = function $$DvtNBoxEventManager$$$$$CreateCategoryRolloverHandler$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    return new $DvtNBoxCategoryRolloverHandler$$($dvt$$5$$, $DvtNBoxAutomation$$);
  };
  $DvtNBoxEventManager$$.prototype.$_processActionEvent$ = function $$DvtNBoxEventManager$$$$$_processActionEvent$$($DvtNBoxAutomation$$) {
    $DvtNBoxAutomation$$ && $DvtNBoxAutomation$$.$getAction$ && $DvtNBoxAutomation$$.$getAction$() && this.$FireEvent$($dvt$$5$$.$EventFactory$.$newActionEvent$("action", $DvtNBoxAutomation$$.$getAction$(), $DvtNBoxAutomation$$.getId()));
  };
  $DvtNBoxEventManager$$.prototype.$GetTouchResponse$ = function $$DvtNBoxEventManager$$$$$GetTouchResponse$$() {
    var $DvtNBoxAutomation$$ = this.$_nbox$.$getOptions$(), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxDataUtils$$.$getMaximizedCellIndex$(this.$_nbox$));
    return $DvtNBoxKeyboardHandler$$ && $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxKeyboardHandler$$).$getChildContainer$().$hasScrollingContent$() || $DvtNBoxEventManager$$ && $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxEventManager$$).$getChildContainer$().$hasScrollingContent$() ? $dvt$$5$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : $DvtNBoxAutomation$$.touchResponse === $dvt$$5$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ ? $dvt$$5$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ : 
    $dvt$$5$$.$EventManager$.$TOUCH_RESPONSE_AUTO$;
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxKeyboardHandler$$, $dvt$$5$$.$KeyboardHandler$);
  $DvtNBoxKeyboardHandler$$.prototype.Init = function $$DvtNBoxKeyboardHandler$$$$Init$($dvt$$5$$, $DvtNBoxAutomation$$) {
    $DvtNBoxKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$5$$);
    this.$_nbox$ = $DvtNBoxAutomation$$;
  };
  $DvtNBoxKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtNBoxKeyboardHandler$$$$$processKeyDown$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$TAB$) {
      var $DvtNBoxEventManager$$ = this.$_eventManager$.$getFocus$(), $DvtNBoxDataAnimationHandler$$ = null;
      $dvt$$5$$.$EventManager$.$consumeEvent$($DvtNBoxAutomation$$);
      if ($DvtNBoxEventManager$$) {
        $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$;
      } else {
        if ($DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$)) {
          $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxEventManager$$);
        } else {
          if ($DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($DvtNBoxEventManager$$ = this.$_nbox$.$getOptions$().__groups)) {
            var $DvtNBoxDataAnimationHandler$$ = [], $DvtNBoxCategoryRolloverHandler$$;
            for ($DvtNBoxCategoryRolloverHandler$$ in $DvtNBoxEventManager$$) {
              var $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxEventManager$$[$DvtNBoxCategoryRolloverHandler$$]);
              $DvtNBoxDrawer$$ && $DvtNBoxDataAnimationHandler$$.push($DvtNBoxDrawer$$);
            }
            $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.$getNextNavigableCategoryNode$(null, $DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
          }
        }
        $DvtNBoxDataAnimationHandler$$ || ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$) * ($DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) - 1), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxAutomation$$)));
      }
      return $DvtNBoxDataAnimationHandler$$;
    }
    return $DvtNBoxKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtNBoxAutomation$$);
  };
  $DvtNBoxKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isSelectionEvent$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$TAB$ ? !1 : this.$isNavigationEvent$($DvtNBoxAutomation$$) && !$DvtNBoxAutomation$$.ctrlKey;
  };
  $DvtNBoxKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isMultiSelectEvent$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.keyCode == $dvt$$5$$.KeyboardEvent.$SPACE$ && $DvtNBoxAutomation$$.ctrlKey;
  };
  $DvtNBoxKeyboardHandler$$.$getKeyboardBoundingBox$ = function $$DvtNBoxKeyboardHandler$$$$getKeyboardBoundingBox$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getDimensions$(), $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$localToStage$(new $dvt$$5$$.$Point$($DvtNBoxKeyboardHandler$$.x, $DvtNBoxKeyboardHandler$$.y));
    $DvtNBoxAutomation$$ = $DvtNBoxAutomation$$.$localToStage$(new $dvt$$5$$.$Point$($DvtNBoxKeyboardHandler$$.x + $DvtNBoxKeyboardHandler$$.$w$, $DvtNBoxKeyboardHandler$$.y + $DvtNBoxKeyboardHandler$$.$h$));
    return new $dvt$$5$$.$Rectangle$($DvtNBoxEventManager$$.x, $DvtNBoxEventManager$$.y, $DvtNBoxAutomation$$.x - $DvtNBoxEventManager$$.x, $DvtNBoxAutomation$$.y - $DvtNBoxEventManager$$.y);
  };
  $DvtNBoxKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isNavigationEvent$$($DvtNBoxAutomation$$) {
    var $DvtNBoxEventManager$$ = !1;
    switch($DvtNBoxAutomation$$.keyCode) {
      case $dvt$$5$$.KeyboardEvent.$OPEN_BRACKET$:
      ;
      case $dvt$$5$$.KeyboardEvent.$CLOSE_BRACKET$:
        $DvtNBoxEventManager$$ = !0;
        break;
      default:
        $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $DvtNBoxAutomation$$);
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxKeyboardHandler$$.$getNextNavigableCategoryNode$ = function $$DvtNBoxKeyboardHandler$$$$getNextNavigableCategoryNode$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    if (!$DvtNBoxEventManager$$ || 0 >= $DvtNBoxEventManager$$.length) {
      return null;
    }
    $DvtNBoxEventManager$$[0] instanceof $DvtNBoxCategoryNode$$ && $DvtNBoxEventManager$$.sort(function($dvt$$5$$, $DvtNBoxAutomation$$) {
      return $DvtNBoxCategoryNode$$.$compareSize$($dvt$$5$$.getData(), $DvtNBoxAutomation$$.getData());
    });
    if (null == $DvtNBoxAutomation$$) {
      return $DvtNBoxEventManager$$[0];
    }
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$;
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$.keyCode == $dvt$$5$$.KeyboardEvent.$RIGHT_ARROW$ || $DvtNBoxKeyboardHandler$$.keyCode == $dvt$$5$$.KeyboardEvent.$DOWN_ARROW$ ? !0 : !1;
    for (var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxEventManager$$.length, $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxCategoryRolloverHandler$$;$DvtNBoxDrawer$$++) {
      if ($DvtNBoxEventManager$$[$DvtNBoxDrawer$$] === $DvtNBoxAutomation$$) {
        $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$[$DvtNBoxKeyboardHandler$$ ? $DvtNBoxDrawer$$ + 1 < $DvtNBoxCategoryRolloverHandler$$ ? $DvtNBoxDrawer$$ + 1 : $DvtNBoxDrawer$$ : 0 <= $DvtNBoxDrawer$$ - 1 ? $DvtNBoxDrawer$$ - 1 : $DvtNBoxDrawer$$];
        break;
      }
    }
    return $DvtNBoxDataAnimationHandler$$;
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxAutomation$$, $dvt$$5$$.$Automation$);
  $DvtNBoxAutomation$$.prototype.Init = function $$DvtNBoxAutomation$$$$Init$($dvt$$5$$) {
    this.$_nBox$ = $dvt$$5$$;
  };
  $DvtNBoxAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtNBoxAutomation$$$$$GetSubIdForDomElement$$($DvtNBoxAutomation$$) {
    for (var $DvtNBoxKeyboardHandler$$ = this.$_getParentObject$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxEventManager$$ = this.$_getParentObject$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$);$DvtNBoxAutomation$$ && !($DvtNBoxAutomation$$ instanceof $dvt$$5$$.$NBox$);) {
      var $DvtNBoxDataAnimationHandler$$ = this.$getComponent$(), $DvtNBoxCategoryRolloverHandler$$, $action$$22$$;
      if ($DvtNBoxAutomation$$ instanceof $DvtNBoxNode$$) {
        return $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getNodeIndex$($DvtNBoxDataAnimationHandler$$, $DvtNBoxAutomation$$.getData().id), $DvtNBoxCategoryRolloverHandler$$ = this.$_createBrackets$([$DvtNBoxAutomation$$]), $DvtNBoxCategoryRolloverHandler$$ = "node" + $DvtNBoxCategoryRolloverHandler$$, this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
      }
      if ($DvtNBoxKeyboardHandler$$) {
        $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$.getData().row;
        var $DvtNBoxDefaults$$ = $DvtNBoxKeyboardHandler$$.getData().column;
        $DvtNBoxKeyboardHandler$$.$getChildContainer$();
        $DvtNBoxCategoryRolloverHandler$$ = this.$_createBrackets$([$DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDefaults$$]);
        $DvtNBoxCategoryRolloverHandler$$ = "cell" + $DvtNBoxCategoryRolloverHandler$$;
        if ($DvtNBoxAutomation$$ instanceof $DvtNBoxCell$$) {
          return this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
        }
        if ($DvtNBoxAutomation$$ instanceof $dvt$$5$$.$Button$) {
          if (this.$_getParentObject$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$)) {
            return $action$$22$$ = "overflow", this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
          }
          if ($DvtNBoxAutomation$$ == $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDataAnimationHandler$$, $DvtNBoxKeyboardHandler$$.getData(), "closeButton")) {
            return $action$$22$$ = "closeButton", this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
          }
        }
        if ($DvtNBoxAutomation$$ instanceof $DvtNBoxCategoryNode$$) {
          return $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.getData().id, $action$$22$$ = "groupNode", $action$$22$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxDataAnimationHandler$$, $DvtNBoxAutomation$$.getData().nodeIndices[0]).groupCategory ? $action$$22$$ + this.$_createBrackets$([$DvtNBoxKeyboardHandler$$]) : $action$$22$$ + this.$_createBraces$($DvtNBoxKeyboardHandler$$.split(";")), this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
        }
      }
      if ($DvtNBoxEventManager$$) {
        $DvtNBoxCategoryRolloverHandler$$ = "dialog";
        if ($DvtNBoxAutomation$$ instanceof $DvtNBoxDrawer$$) {
          return this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
        }
        if ($DvtNBoxAutomation$$ instanceof $dvt$$5$$.$Button$) {
          return $action$$22$$ = "closeButton", this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, $action$$22$$);
        }
      }
      if ($DvtNBoxAutomation$$ instanceof $DvtNBoxCategoryNode$$) {
        return $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.getData().id, $DvtNBoxCategoryRolloverHandler$$ = "groupNode", $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxDataAnimationHandler$$, $DvtNBoxAutomation$$.getData().nodeIndices[0]).groupCategory ? $DvtNBoxCategoryRolloverHandler$$ + this.$_createBrackets$([$DvtNBoxKeyboardHandler$$]) : $DvtNBoxCategoryRolloverHandler$$ + this.$_createBraces$($DvtNBoxKeyboardHandler$$.split(";")), this.$_createSubId$($DvtNBoxCategoryRolloverHandler$$, 
        $action$$22$$);
      }
      $DvtNBoxAutomation$$ = $DvtNBoxAutomation$$.getParent();
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$_createSubId$ = function $$DvtNBoxAutomation$$$$$_createSubId$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $dvt$$5$$;
    $DvtNBoxAutomation$$ && ($DvtNBoxKeyboardHandler$$ += "#" + $DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtNBoxAutomation$$$$$getDomElementForSubId$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = this.$getComponent$();
    if ($DvtNBoxAutomation$$ == $dvt$$5$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$($DvtNBoxKeyboardHandler$$);
    }
    $DvtNBoxAutomation$$ = this.$_parseSubId$($DvtNBoxAutomation$$);
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.component, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.action, $DvtNBoxCategoryRolloverHandler$$ = null, $DvtNBoxCell$$ = null;
    $DvtNBoxAutomation$$ = null;
    0 === $DvtNBoxEventManager$$.lastIndexOf("node", 0) && ($DvtNBoxCategoryRolloverHandler$$ = this.$_parseBrackets$($DvtNBoxEventManager$$, !0), $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryRolloverHandler$$[0]), $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$));
    if (0 === $DvtNBoxEventManager$$.lastIndexOf("cell", 0)) {
      $DvtNBoxCategoryRolloverHandler$$ = this.$_parseBrackets$($DvtNBoxEventManager$$);
      $DvtNBoxCell$$ = this.$_getCellIndexFromValues$($DvtNBoxCategoryRolloverHandler$$);
      $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$);
      if (!$DvtNBoxCell$$) {
        return null;
      }
      $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$);
      if ($DvtNBoxDataAnimationHandler$$) {
        $DvtNBoxCell$$ = $DvtNBoxEventManager$$.$getChildContainer$();
        $DvtNBoxCell$$.$getScrollingPane$ && ($DvtNBoxCell$$ = $DvtNBoxCell$$.$_container$);
        if ("overflow" == $DvtNBoxDataAnimationHandler$$) {
          for (var $DvtNBoxDefaults$$ = $DvtNBoxCell$$.$getNumChildren$();0 < $DvtNBoxDefaults$$;$DvtNBoxDefaults$$--) {
            if ($DvtNBoxCell$$.$getChildAt$($DvtNBoxDefaults$$ - 1) instanceof $DvtNBoxNodeOverflow$$) {
              $DvtNBoxAutomation$$ = $DvtNBoxCell$$.$getChildAt$($DvtNBoxDefaults$$ - 1).$_button$;
              break;
            }
          }
        }
        "closeButton" == $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$.getData(), "closeButton"));
        if (0 === $DvtNBoxDataAnimationHandler$$.lastIndexOf("node", 0)) {
          $DvtNBoxCategoryRolloverHandler$$ = this.$_parseBrackets$($DvtNBoxDataAnimationHandler$$, !0);
          $DvtNBoxDefaults$$ = $DvtNBoxCategoryRolloverHandler$$[0];
          if (0 > $DvtNBoxDefaults$$) {
            return null;
          }
          for (var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$($DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$), $DvtNBoxRenderer$$ = 0;$DvtNBoxEventManager$$ instanceof $DvtNBoxNode$$;) {
            if ($DvtNBoxRenderer$$ == $DvtNBoxDefaults$$) {
              $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
              break;
            }
            $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$.getData().__next);
            $DvtNBoxRenderer$$++;
          }
        }
        if (0 === $DvtNBoxDataAnimationHandler$$.lastIndexOf("groupNode", 0)) {
          var $DvtNBoxCellRenderer$$;
          -1 < $DvtNBoxDataAnimationHandler$$.indexOf("{") ? $DvtNBoxCategoryRolloverHandler$$ = this.$_parseBraces$($DvtNBoxDataAnimationHandler$$) : $DvtNBoxCellRenderer$$ = $DvtNBoxDataAnimationHandler$$.substring($DvtNBoxDataAnimationHandler$$.indexOf("[") + 1, $DvtNBoxDataAnimationHandler$$.indexOf("]"));
          for ($DvtNBoxDefaults$$ = 0;$DvtNBoxDefaults$$ < $DvtNBoxCell$$.$getNumChildren$();$DvtNBoxDefaults$$++) {
            if ($DvtNBoxEventManager$$ = $DvtNBoxCell$$.$getChildAt$($DvtNBoxDefaults$$), $DvtNBoxEventManager$$ instanceof $DvtNBoxCategoryNode$$) {
              if ($DvtNBoxKeyboardHandler$$ = $DvtNBoxEventManager$$.getData().id, $DvtNBoxCategoryRolloverHandler$$ && this.$_compareCategories$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$.split(";"))) {
                $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
                break;
              } else {
                if ($DvtNBoxCellRenderer$$ && $DvtNBoxCellRenderer$$ == $DvtNBoxKeyboardHandler$$) {
                  $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
                  break;
                }
              }
            }
          }
        }
      } else {
        $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
      }
    } else {
      if (0 === $DvtNBoxEventManager$$.lastIndexOf("groupNode", 0)) {
        for ($DvtNBoxCell$$ = $DvtNBoxKeyboardHandler$$.$getChildContainer$(), -1 < $DvtNBoxEventManager$$.indexOf("{") ? $DvtNBoxCategoryRolloverHandler$$ = this.$_parseBraces$($DvtNBoxEventManager$$) : $DvtNBoxCellRenderer$$ = $DvtNBoxEventManager$$.substring($DvtNBoxEventManager$$.indexOf("[") + 1, $DvtNBoxEventManager$$.indexOf("]")), $DvtNBoxDefaults$$ = 0;$DvtNBoxDefaults$$ < $DvtNBoxCell$$.$getNumChildren$();$DvtNBoxDefaults$$++) {
          if ($DvtNBoxEventManager$$ = $DvtNBoxCell$$.$getChildAt$($DvtNBoxDefaults$$), $DvtNBoxEventManager$$ instanceof $DvtNBoxCategoryNode$$) {
            if ($DvtNBoxKeyboardHandler$$ = $DvtNBoxEventManager$$.getData().id, $DvtNBoxCategoryRolloverHandler$$ && this.$_compareCategories$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$.split(";"))) {
              $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
              break;
            } else {
              if ($DvtNBoxCellRenderer$$ && $DvtNBoxCellRenderer$$ == $DvtNBoxKeyboardHandler$$) {
                $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
                break;
              }
            }
          }
        }
      } else {
        if ("dialog" === $DvtNBoxEventManager$$ && ($DvtNBoxCell$$ = $DvtNBoxKeyboardHandler$$.$getChildContainer$())) {
          for ($DvtNBoxDefaults$$ = 0;$DvtNBoxDefaults$$ < $DvtNBoxCell$$.$getNumChildren$();$DvtNBoxDefaults$$++) {
            if ($DvtNBoxCell$$.$getChildAt$($DvtNBoxDefaults$$) instanceof $DvtNBoxDrawer$$) {
              $DvtNBoxCellRenderer$$ = $DvtNBoxCell$$.$getChildAt$($DvtNBoxDefaults$$);
              if ($DvtNBoxDataAnimationHandler$$) {
                if ("closeButton" == $DvtNBoxDataAnimationHandler$$) {
                  for ($DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxCellRenderer$$.$getNumChildren$();$DvtNBoxCategoryRolloverHandler$$++) {
                    $DvtNBoxCellRenderer$$.$getChildAt$($DvtNBoxCategoryRolloverHandler$$) instanceof $dvt$$5$$.$Button$ && ($DvtNBoxAutomation$$ = $DvtNBoxCellRenderer$$.$getChildAt$($DvtNBoxCategoryRolloverHandler$$));
                  }
                }
                if (0 === $DvtNBoxDataAnimationHandler$$.lastIndexOf("node", 0)) {
                  $DvtNBoxCellRenderer$$ = $DvtNBoxCellRenderer$$.$getChildContainer$().$_container$;
                  $DvtNBoxCategoryRolloverHandler$$ = this.$_parseBrackets$($DvtNBoxDataAnimationHandler$$, !0);
                  $DvtNBoxDefaults$$ = $DvtNBoxCategoryRolloverHandler$$[0];
                  if (0 > $DvtNBoxDefaults$$) {
                    return null;
                  }
                  $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$($DvtNBoxKeyboardHandler$$, $DvtNBoxCellRenderer$$);
                  for ($DvtNBoxRenderer$$ = 0;$DvtNBoxEventManager$$ instanceof $DvtNBoxNode$$;) {
                    if ($DvtNBoxRenderer$$ == $DvtNBoxDefaults$$) {
                      $DvtNBoxAutomation$$ = $DvtNBoxEventManager$$;
                      break;
                    }
                    $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$.getData().__next);
                    $DvtNBoxRenderer$$++;
                  }
                }
              } else {
                $DvtNBoxAutomation$$ = $DvtNBoxCellRenderer$$;
              }
              break;
            }
          }
        }
      }
    }
    return $DvtNBoxAutomation$$ ? $DvtNBoxAutomation$$.$getElem$() : null;
  };
  $DvtNBoxAutomation$$.prototype.$_parseSubId$ = function $$DvtNBoxAutomation$$$$$_parseSubId$$($dvt$$5$$) {
    var $DvtNBoxAutomation$$ = null, $DvtNBoxKeyboardHandler$$ = null, $DvtNBoxEventManager$$ = $dvt$$5$$.indexOf("#");
    -1 !== $DvtNBoxEventManager$$ ? ($DvtNBoxAutomation$$ = $dvt$$5$$.substring(0, $DvtNBoxEventManager$$), $DvtNBoxKeyboardHandler$$ = $dvt$$5$$.substring($DvtNBoxEventManager$$ + 1)) : $DvtNBoxAutomation$$ = $dvt$$5$$;
    return {component:$DvtNBoxAutomation$$, action:$DvtNBoxKeyboardHandler$$};
  };
  $DvtNBoxAutomation$$.prototype.$getComponent$ = function $$DvtNBoxAutomation$$$$$getComponent$$() {
    return this.$_nBox$;
  };
  $DvtNBoxAutomation$$.prototype.$_parseBrackets$ = function $$DvtNBoxAutomation$$$$$_parseBrackets$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $dvt$$5$$.substring($dvt$$5$$.indexOf("[") + 1, $dvt$$5$$.indexOf("]")).split(",");
    if ($DvtNBoxAutomation$$) {
      for (var $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxEventManager$$++) {
        $DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$] = parseInt($DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$]);
      }
    }
    return 0 < $DvtNBoxKeyboardHandler$$.length ? $DvtNBoxKeyboardHandler$$ : null;
  };
  $DvtNBoxAutomation$$.prototype.$_createBrackets$ = function $$DvtNBoxAutomation$$$$$_createBrackets$$($dvt$$5$$) {
    return 0 < $dvt$$5$$.length ? "[" + $dvt$$5$$.join(",") + "]" : "";
  };
  $DvtNBoxAutomation$$.prototype.$_parseBraces$ = function $$DvtNBoxAutomation$$$$$_parseBraces$$($dvt$$5$$) {
    return $dvt$$5$$.substring($dvt$$5$$.indexOf("{") + 1, $dvt$$5$$.lastIndexOf("}")).split(",");
  };
  $DvtNBoxAutomation$$.prototype.$_createBraces$ = function $$DvtNBoxAutomation$$$$$_createBraces$$($dvt$$5$$) {
    for (var $DvtNBoxAutomation$$ = "{", $DvtNBoxKeyboardHandler$$ = 0;$DvtNBoxKeyboardHandler$$ < $dvt$$5$$.length;$DvtNBoxKeyboardHandler$$++) {
      $DvtNBoxAutomation$$ += $dvt$$5$$[$DvtNBoxKeyboardHandler$$].trim() + ",";
    }
    return $DvtNBoxAutomation$$.substring(0, $DvtNBoxAutomation$$.length - 1) + "}";
  };
  $DvtNBoxAutomation$$.prototype.$_compareCategories$ = function $$DvtNBoxAutomation$$$$$_compareCategories$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    if ($dvt$$5$$.length != $DvtNBoxAutomation$$.length) {
      return !1;
    }
    $dvt$$5$$.sort();
    $DvtNBoxAutomation$$.sort();
    for (var $DvtNBoxKeyboardHandler$$ = 0;$DvtNBoxKeyboardHandler$$ < $dvt$$5$$.length;$DvtNBoxKeyboardHandler$$++) {
      if ($dvt$$5$$[$DvtNBoxKeyboardHandler$$].trim() != $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$].trim()) {
        return !1;
      }
    }
    return !0;
  };
  $DvtNBoxAutomation$$.prototype.$_getCellIndexFromValues$ = function $$DvtNBoxAutomation$$$$$_getCellIndexFromValues$$($dvt$$5$$) {
    var $DvtNBoxAutomation$$ = this.$getComponent$(), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $dvt$$5$$[0]);
    $dvt$$5$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $dvt$$5$$[1]);
    return null != $dvt$$5$$ && null != $DvtNBoxEventManager$$ ? $dvt$$5$$ + $DvtNBoxKeyboardHandler$$ * $DvtNBoxEventManager$$ : null;
  };
  $DvtNBoxAutomation$$.prototype.$_getParentObject$ = function $$DvtNBoxAutomation$$$$$_getParentObject$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    for (var $DvtNBoxKeyboardHandler$$ = $dvt$$5$$;$DvtNBoxKeyboardHandler$$;) {
      if ($DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxAutomation$$) {
        return $DvtNBoxKeyboardHandler$$;
      }
      $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$.getParent();
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.getData = function $$DvtNBoxAutomation$$$$getData$($dvt$$5$$, $DvtNBoxAutomation$$) {
    if (this.$_nBox$) {
      if ("rowsTitle" == $dvt$$5$$) {
        if (this.$_nBox$.$getOptions$().rowsTitle) {
          return this.$_nBox$.$getOptions$().rowsTitle;
        }
      } else {
        if ("rowCount" == $dvt$$5$$) {
          var $DvtNBoxKeyboardHandler$$ = this.$_nBox$.$getOptions$().rows;
          if ($DvtNBoxKeyboardHandler$$) {
            return $DvtNBoxKeyboardHandler$$.length;
          }
        } else {
          if ("row" == $dvt$$5$$) {
            if (0 <= $DvtNBoxDataUtils$$.$getRowIndex$(this.$_nBox$, $DvtNBoxAutomation$$)) {
              return $DvtNBoxKeyboardHandler$$ = {}, $DvtNBoxKeyboardHandler$$.label = $DvtNBoxDataUtils$$.$getRowLabel$(this.$_nBox$, $DvtNBoxAutomation$$), $DvtNBoxKeyboardHandler$$;
            }
          } else {
            if ("columnsTitle" == $dvt$$5$$) {
              if (this.$_nBox$.$getOptions$().columnsTitle) {
                return this.$_nBox$.$getOptions$().columnsTitle;
              }
            } else {
              if ("columnCount" == $dvt$$5$$) {
                if ($DvtNBoxKeyboardHandler$$ = this.$_nBox$.$getOptions$().columns) {
                  return $DvtNBoxKeyboardHandler$$.length;
                }
              } else {
                if ("column" == $dvt$$5$$) {
                  if (0 <= $DvtNBoxDataUtils$$.$getColumnIndex$(this.$_nBox$, $DvtNBoxAutomation$$)) {
                    return $DvtNBoxKeyboardHandler$$ = {}, $DvtNBoxKeyboardHandler$$.label = $DvtNBoxDataUtils$$.$getColumnLabel$(this.$_nBox$, $DvtNBoxAutomation$$), $DvtNBoxKeyboardHandler$$;
                  }
                } else {
                  if ("groupBehavior" == $dvt$$5$$) {
                    return $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$);
                  }
                }
              }
            }
          }
        }
      }
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getGroupNode$ = function $$DvtNBoxAutomation$$$$$getGroupNode$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$ && $DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
      if ("string" === typeof $DvtNBoxAutomation$$) {
        return this.$_getGroupNodeData$($DvtNBoxAutomation$$);
      }
      var $DvtNBoxKeyboardHandler$$ = "", $DvtNBoxEventManager$$;
      for ($DvtNBoxEventManager$$ in $DvtNBoxAutomation$$) {
        $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$[$DvtNBoxEventManager$$] ? $DvtNBoxKeyboardHandler$$ + ($DvtNBoxEventManager$$ + ":" + $DvtNBoxAutomation$$[$DvtNBoxEventManager$$] + ";") : $DvtNBoxKeyboardHandler$$ + ($DvtNBoxEventManager$$ + ";");
      }
      return this.$_getGroupNodeData$($DvtNBoxKeyboardHandler$$.substring(0, $DvtNBoxKeyboardHandler$$.length - 1));
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$_getGroupNodeData$ = function $$DvtNBoxAutomation$$$$$_getGroupNodeData$$($dvt$$5$$) {
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $dvt$$5$$);
    if ($DvtNBoxAutomation$$) {
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $DvtNBoxAutomation$$);
      if ($DvtNBoxKeyboardHandler$$) {
        return $dvt$$5$$ = {}, $dvt$$5$$.selected = $DvtNBoxKeyboardHandler$$.$isSelected$(), $dvt$$5$$.color = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nBox$, $DvtNBoxAutomation$$), $dvt$$5$$.indicatorColor = $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this.$_nBox$, $DvtNBoxAutomation$$), $dvt$$5$$.tooltip = $DvtNBoxKeyboardHandler$$.$getShortDesc$(), $dvt$$5$$.size = $DvtNBoxAutomation$$.nodeIndices ? $DvtNBoxAutomation$$.nodeIndices.length : -1, $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, 
        $DvtNBoxAutomation$$, "indicatorIcon"), $dvt$$5$$.indicatorIcon = this.$_getMarkerData$($DvtNBoxAutomation$$), $dvt$$5$$;
      }
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getCell$ = function $$DvtNBoxAutomation$$$$$getCell$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $dvt$$5$$, $DvtNBoxAutomation$$);
    if ($DvtNBoxKeyboardHandler$$) {
      var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getCellIndex$(), $DvtNBoxDataAnimationHandler$$ = {};
      $DvtNBoxDataAnimationHandler$$.label = $DvtNBoxKeyboardHandler$$.$getLabel$();
      $DvtNBoxDataAnimationHandler$$.background = $DvtNBoxKeyboardHandler$$.$getBackground$();
      $DvtNBoxDataAnimationHandler$$.getNodeCount = function $$DvtNBoxDataAnimationHandler$$$getNodeCount$() {
        return $DvtNBoxKeyboardHandler$$.$getNodeCount$();
      };
      $DvtNBoxDataAnimationHandler$$.rowValue = $dvt$$5$$;
      $DvtNBoxDataAnimationHandler$$.columnValue = $DvtNBoxAutomation$$;
      $DvtNBoxDataAnimationHandler$$.cellIndex = $DvtNBoxEventManager$$;
      return $DvtNBoxDataAnimationHandler$$;
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getCellNode$ = function $$DvtNBoxAutomation$$$$$getCellNode$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    if (this.$_nBox$ && !$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$)) {
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $dvt$$5$$.rowValue, $dvt$$5$$.columnValue).$getNode$($DvtNBoxAutomation$$);
      return this.$_getNode$($DvtNBoxKeyboardHandler$$);
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getNode$ = function $$DvtNBoxAutomation$$$$$getNode$$($dvt$$5$$) {
    $dvt$$5$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $dvt$$5$$);
    return this.$_getNode$($dvt$$5$$);
  };
  $DvtNBoxAutomation$$.prototype.$_getNode$ = function $$DvtNBoxAutomation$$$$$_getNode$$($dvt$$5$$) {
    if ($dvt$$5$$) {
      var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $dvt$$5$$);
      if ($DvtNBoxAutomation$$) {
        var $DvtNBoxKeyboardHandler$$ = {};
        $DvtNBoxKeyboardHandler$$.selected = $DvtNBoxAutomation$$.$isSelected$();
        $DvtNBoxKeyboardHandler$$.tooltip = $DvtNBoxAutomation$$.$getShortDesc$();
        $DvtNBoxKeyboardHandler$$.color = $DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nBox$, $dvt$$5$$);
        $DvtNBoxKeyboardHandler$$.indicatorColor = $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nBox$, $dvt$$5$$);
        $dvt$$5$$.label && ($DvtNBoxKeyboardHandler$$.label = $dvt$$5$$.label);
        $dvt$$5$$.secondaryLabel && ($DvtNBoxKeyboardHandler$$.secondaryLabel = $dvt$$5$$.secondaryLabel);
        $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $dvt$$5$$, "icon");
        $DvtNBoxKeyboardHandler$$.icon = this.$_getMarkerData$($DvtNBoxAutomation$$);
        $dvt$$5$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $dvt$$5$$, "indicatorIcon");
        $DvtNBoxKeyboardHandler$$.indicatorIcon = this.$_getMarkerData$($dvt$$5$$);
        return $DvtNBoxKeyboardHandler$$;
      }
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getCellGroupNode$ = function $$DvtNBoxAutomation$$$$$getCellGroupNode$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if ($DvtNBoxKeyboardHandler$$ && $DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      if ("string" === typeof $DvtNBoxKeyboardHandler$$) {
        return this.$_getGroupNodeData$($DvtNBoxAutomation$$.cellIndex + ":" + $DvtNBoxKeyboardHandler$$);
      }
      var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.cellIndex + ":", $DvtNBoxDataAnimationHandler$$;
      for ($DvtNBoxDataAnimationHandler$$ in $DvtNBoxKeyboardHandler$$) {
        $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$] ? $DvtNBoxEventManager$$ + ($DvtNBoxDataAnimationHandler$$ + ":" + $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$] + ";") : $DvtNBoxEventManager$$ + ($DvtNBoxDataAnimationHandler$$ + ";");
      }
      return this.$_getGroupNodeData$($DvtNBoxEventManager$$.substring(0, $DvtNBoxEventManager$$.length - 1));
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$_getMarkerData$ = function $$DvtNBoxAutomation$$$$$_getMarkerData$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$) {
      var $DvtNBoxKeyboardHandler$$ = {};
      $DvtNBoxKeyboardHandler$$.shape = $DvtNBoxAutomation$$ instanceof $dvt$$5$$.$SimpleMarker$ ? $DvtNBoxAutomation$$.$getType$() : "none";
      $DvtNBoxAutomation$$.$getFill$() && ($DvtNBoxKeyboardHandler$$.color = $DvtNBoxAutomation$$.$getFill$().$getColor$());
      return $DvtNBoxKeyboardHandler$$;
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getDialog$ = function $$DvtNBoxAutomation$$$$$getDialog$$() {
    var $dvt$$5$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
    if ($dvt$$5$$) {
      var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $dvt$$5$$.id);
      if ($DvtNBoxAutomation$$) {
        var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $DvtNBoxAutomation$$), $dvt$$5$$ = {};
        $dvt$$5$$.label = $DvtNBoxKeyboardHandler$$.$getLabel$();
        $dvt$$5$$.getNodeCount = function $$dvt$$5$$$getNodeCount$() {
          return $DvtNBoxAutomation$$.nodeIndices ? $DvtNBoxAutomation$$.nodeIndices.length : -1;
        };
        for (var $DvtNBoxKeyboardHandler$$ = {}, $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.id.split(";"), $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxDataAnimationHandler$$++) {
          var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxEventManager$$[$DvtNBoxDataAnimationHandler$$].split(":");
          $DvtNBoxCategoryRolloverHandler$$ && 2 == $DvtNBoxCategoryRolloverHandler$$.length && ($DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryRolloverHandler$$[0]] = $DvtNBoxCategoryRolloverHandler$$[1]);
        }
        $dvt$$5$$.groupInfo = $DvtNBoxKeyboardHandler$$;
        return $dvt$$5$$;
      }
    }
    return null;
  };
  $DvtNBoxAutomation$$.prototype.$getDialogNode$ = function $$DvtNBoxAutomation$$$$$getDialogNode$$($dvt$$5$$) {
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
    return $DvtNBoxAutomation$$ && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $DvtNBoxAutomation$$.id)) && $DvtNBoxAutomation$$.nodeIndices && null != $DvtNBoxAutomation$$.nodeIndices[$dvt$$5$$] ? ($dvt$$5$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $DvtNBoxAutomation$$.nodeIndices[$dvt$$5$$]), this.$_getNode$($dvt$$5$$)) : null;
  };
  $DvtNBoxAutomation$$.prototype.$getNodeIdFromIndex$ = function $$DvtNBoxAutomation$$$$$getNodeIdFromIndex$$($dvt$$5$$) {
    return $DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $dvt$$5$$).id;
  };
  $DvtNBoxAutomation$$.prototype.$getNodeIndexFromId$ = function $$DvtNBoxAutomation$$$$$getNodeIndexFromId$$($dvt$$5$$) {
    return $DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nBox$, $dvt$$5$$);
  };
  var $DvtNBoxRenderer$$ = {};
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxRenderer$$, $dvt$$5$$.$Obj$);
  $DvtNBoxRenderer$$.$render$ = function $$DvtNBoxRenderer$$$$render$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxRenderer$$.$_renderBackground$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_renderLegend$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_adjustAvailSpace$($DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_renderTitles$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_adjustAvailSpace$($DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_renderCells$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_renderNodes$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_renderInitialSelection$($dvt$$5$$);
    $DvtNBoxRenderer$$.$_fixZOrder$($dvt$$5$$);
  };
  $DvtNBoxRenderer$$.$_renderBackground$ = function $$DvtNBoxRenderer$$$$_renderBackground$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = new $dvt$$5$$.Rect($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxEventManager$$.x, $DvtNBoxEventManager$$.y, $DvtNBoxEventManager$$.$w$, $DvtNBoxEventManager$$.$h$);
    $DvtNBoxAutomation$$.$setInvisibleFill$();
    $DvtNBoxKeyboardHandler$$.$addChild$($DvtNBoxAutomation$$);
    $DvtNBoxAutomation$$ = new $dvt$$5$$.$ClipPath$;
    $DvtNBoxAutomation$$.$addRect$($DvtNBoxEventManager$$.x, $DvtNBoxEventManager$$.y, $DvtNBoxEventManager$$.$w$, $DvtNBoxEventManager$$.$h$);
    $DvtNBoxKeyboardHandler$$.$setClipPath$($DvtNBoxAutomation$$);
  };
  $DvtNBoxRenderer$$.$_renderLegend$ = function $$DvtNBoxRenderer$$$$_renderLegend$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getLegend$($DvtNBoxAutomation$$);
    if ($DvtNBoxDataAnimationHandler$$ && $DvtNBoxDataAnimationHandler$$.sections) {
      var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDrawer$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$PanelDrawer$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxAutomation$$.$processEvent$, $DvtNBoxAutomation$$, "pd1");
      $DvtNBoxCategoryNode$$.$addEvtListener$($dvt$$5$$.$PanelDrawerEvent$.$TYPE$, $DvtNBoxAutomation$$.$processEvent$, !1, $DvtNBoxAutomation$$);
      $DvtNBoxCategoryNode$$.$setDockSide$($dvt$$5$$.$PanelDrawer$.$DOCK_TOP$);
      $DvtNBoxCategoryNode$$.$setMaxHeight$($DvtNBoxEventManager$$.$h$ - $DvtNBoxCategoryRolloverHandler$$.__layout.legendBottomGap);
      $DvtNBoxCategoryNode$$.$setMaxWidth$($DvtNBoxEventManager$$.$w$ / 3);
      $DvtNBoxKeyboardHandler$$.$addChild$($DvtNBoxCategoryNode$$);
      var $DvtNBoxCell$$ = $dvt$$5$$.$Legend$.newInstance($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxAutomation$$.$processEvent$, $DvtNBoxAutomation$$);
      $DvtNBoxKeyboardHandler$$.$addChild$($DvtNBoxCell$$);
      var $DvtNBoxNodeOverflow$$ = $DvtNBoxCell$$.$getPreferredSize$($DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryNode$$.$getMaxContentWidth$(), $DvtNBoxCategoryNode$$.$getMaxContentHeight$());
      $DvtNBoxCell$$.$render$($DvtNBoxDataAnimationHandler$$, $DvtNBoxNodeOverflow$$.$w$, $DvtNBoxNodeOverflow$$.$h$);
      $DvtNBoxKeyboardHandler$$.removeChild($DvtNBoxCell$$);
      var $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryRolloverHandler$$._resources.legend_ena, $DvtNBoxNode$$ = $DvtNBoxCategoryRolloverHandler$$._resources.legend_ovr;
      $DvtNBoxKeyboardHandler$$ = $DvtNBoxCategoryRolloverHandler$$._resources.legend_dwn;
      $DvtNBoxNodeOverflow$$ = new $dvt$$5$$.Image($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxNodeOverflow$$.src, 0, 0, $DvtNBoxNodeOverflow$$.width, $DvtNBoxNodeOverflow$$.height);
      $DvtNBoxNode$$ = new $dvt$$5$$.Image($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxNode$$.src, 0, 0, $DvtNBoxNode$$.width, $DvtNBoxNode$$.height);
      $DvtNBoxKeyboardHandler$$ = new $dvt$$5$$.Image($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxKeyboardHandler$$.src, 0, 0, $DvtNBoxKeyboardHandler$$.width, $DvtNBoxKeyboardHandler$$.height);
      $DvtNBoxCategoryNode$$.$addPanel$($DvtNBoxCell$$, $DvtNBoxNodeOverflow$$, $DvtNBoxNode$$, $DvtNBoxKeyboardHandler$$, $dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "LEGEND"), "legend");
      $DvtNBoxDrawer$$ && $DvtNBoxCategoryNode$$.$setDiscloseDirection$($dvt$$5$$.$PanelDrawer$.$DIR_RIGHT$);
      $DvtNBoxCategoryNode$$.$renderComponent$();
      "disclosed" == $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$LEGEND_DISCLOSURE$] && ($DvtNBoxCategoryNode$$.$setDisplayedPanelId$("legend"), $DvtNBoxCategoryNode$$.$setDisclosed$(!0, !0));
      $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryNode$$.$getDimensions$();
      $DvtNBoxCategoryNode$$.$setTranslate$($DvtNBoxDrawer$$ ? 0 : $DvtNBoxEventManager$$.$w$, 0);
      $DvtNBoxDrawer$$ && ($DvtNBoxEventManager$$.x += $DvtNBoxCategoryRolloverHandler$$.$w$);
      $DvtNBoxEventManager$$.$w$ -= $DvtNBoxCategoryRolloverHandler$$.$w$;
      $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxCell$$, "legend");
      $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryNode$$, "panelDrawer");
    }
  };
  $DvtNBoxRenderer$$.$_renderTitles$ = function $$DvtNBoxRenderer$$$$_renderTitles$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = $DvtNBoxDataAnimationHandler$$.__layout.componentGap, $DvtNBoxCell$$ = $DvtNBoxDataAnimationHandler$$.__layout.titleGap, $DvtNBoxNodeOverflow$$ = $DvtNBoxDataAnimationHandler$$.__layout.titleComponentGap, $DvtNBoxNode$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$());
    $DvtNBoxEventManager$$.x += $DvtNBoxCategoryNode$$;
    $DvtNBoxEventManager$$.y += $DvtNBoxCategoryNode$$;
    $DvtNBoxEventManager$$.$w$ -= 2 * $DvtNBoxCategoryNode$$;
    $DvtNBoxEventManager$$.$h$ -= 2 * $DvtNBoxCategoryNode$$;
    var $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = $DvtNBoxDefaults$$ ? $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$) : -1, $DvtNBoxNodeRenderer$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxNodeRenderer$$ ? $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxNodeRenderer$$) : -1, $DvtNBoxDrawerRenderer$$ = null, $rowsTitle$$ = 
    null, $columnLabels$$ = [], $rowLabels$$ = [], $columnsTitleHeight$$ = 0, $rowsTitleWidth$$ = 0, $rowTitleGap$$ = 0, $columnTitleGap$$ = 0, $columnLabelsHeight$$ = 0, $rowLabelsWidth$$ = 0, $rowTitleComponentGap$$ = 0, $columnTitleComponentGap$$ = 0;
    $DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$COLUMNS_TITLE$] && ($DvtNBoxDrawerRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$COLUMNS_TITLE$], $DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$COLUMNS_TITLE_STYLE$], $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $DvtNBoxKeyboardHandler$$.$addChild$($DvtNBoxDrawerRenderer$$), 
    $columnsTitleHeight$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($DvtNBoxDrawerRenderer$$).$h$);
    $DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$ROWS_TITLE$] && ($rowsTitle$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$ROWS_TITLE$], $DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$ROWS_TITLE_STYLE$], $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $DvtNBoxKeyboardHandler$$.$addChild$($rowsTitle$$), $rowsTitleWidth$$ = 
    $dvt$$5$$.$TextUtils$.$guessTextDimensions$($rowsTitle$$).$h$);
    for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxCategoryRolloverHandler$$;$DvtNBoxDataAnimationHandler$$++) {
      var $column_rowLabel$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
      if ($column_rowLabel$$[$dvt$$5$$.$NBoxConstants$.$LABEL$]) {
        var $columnLabel$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $column_rowLabel$$[$dvt$$5$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getColumnLabelStyle$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $columnLabelsHeight$$ = Math.max($columnLabelsHeight$$, $dvt$$5$$.$TextUtils$.$guessTextDimensions$($columnLabel$$).$h$);
        $DvtNBoxDefaults$$ && $DvtNBoxDefaults$$ != $column_rowLabel$$[$dvt$$5$$.$NBoxConstants$.ID] || ($columnLabels$$[$DvtNBoxDataAnimationHandler$$] = $columnLabel$$, $DvtNBoxKeyboardHandler$$.$addChild$($columnLabels$$[$DvtNBoxDataAnimationHandler$$]));
      }
    }
    for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxDrawer$$;$DvtNBoxDataAnimationHandler$$++) {
      $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.$LABEL$] && ($column_rowLabel$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getRowLabelStyle$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $rowLabelsWidth$$ = 
      Math.max($rowLabelsWidth$$, $dvt$$5$$.$TextUtils$.$guessTextDimensions$($column_rowLabel$$).$h$), $DvtNBoxNodeRenderer$$ && $DvtNBoxNodeRenderer$$ != $DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.ID] || ($rowLabels$$[$DvtNBoxDataAnimationHandler$$] = $column_rowLabel$$, $DvtNBoxKeyboardHandler$$.$addChild$($rowLabels$$[$DvtNBoxDataAnimationHandler$$])));
    }
    if ($rowsTitleWidth$$ || $rowLabelsWidth$$) {
      $rowTitleComponentGap$$ = $DvtNBoxNodeOverflow$$, $rowsTitleWidth$$ && $rowLabelsWidth$$ && ($rowTitleGap$$ = $DvtNBoxCell$$);
    }
    if ($columnsTitleHeight$$ || $columnLabelsHeight$$) {
      $columnTitleComponentGap$$ = $DvtNBoxNodeOverflow$$, $columnsTitleHeight$$ && $columnLabelsHeight$$ && ($columnTitleGap$$ = $DvtNBoxCell$$);
    }
    $DvtNBoxCell$$ = $rowsTitleWidth$$ + $rowTitleGap$$ + $rowLabelsWidth$$ + $rowTitleComponentGap$$;
    $DvtNBoxNodeOverflow$$ = $columnsTitleHeight$$ + $columnTitleGap$$ + $columnLabelsHeight$$ + $columnTitleComponentGap$$;
    $DvtNBoxEventManager$$.x += $DvtNBoxNode$$ ? 0 : $DvtNBoxCell$$;
    $DvtNBoxEventManager$$.$w$ -= $DvtNBoxCell$$;
    $DvtNBoxEventManager$$.$h$ -= $DvtNBoxNodeOverflow$$;
    $DvtNBoxDrawerRenderer$$ && $dvt$$5$$.$TextUtils$.$fitText$($DvtNBoxDrawerRenderer$$, $DvtNBoxEventManager$$.$w$, $columnsTitleHeight$$, $DvtNBoxKeyboardHandler$$) && ($DvtNBoxRenderer$$.$positionText$($DvtNBoxDrawerRenderer$$, $DvtNBoxEventManager$$.x + $DvtNBoxEventManager$$.$w$ / 2, $DvtNBoxEventManager$$.y + $DvtNBoxEventManager$$.$h$ + $DvtNBoxNodeOverflow$$ - $columnsTitleHeight$$ / 2), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDrawerRenderer$$, 
    $dvt$$5$$.$NBoxConstants$.$COLUMNS_TITLE$));
    $rowsTitle$$ && $dvt$$5$$.$TextUtils$.$fitText$($rowsTitle$$, $DvtNBoxEventManager$$.$h$, $rowsTitleWidth$$, $DvtNBoxKeyboardHandler$$) && ($DvtNBoxRenderer$$.$positionText$($rowsTitle$$, $DvtNBoxEventManager$$.x + ($DvtNBoxNode$$ ? $DvtNBoxEventManager$$.$w$ : 0) + ($DvtNBoxNode$$ ? 1 : -1) * ($DvtNBoxCell$$ - $rowsTitleWidth$$ / 2), $DvtNBoxEventManager$$.y + $DvtNBoxEventManager$$.$h$ / 2, $DvtNBoxNode$$ ? Math.PI / 2 : -Math.PI / 2), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, 
    $DvtNBoxAutomation$$.$getOptions$(), $rowsTitle$$, $dvt$$5$$.$NBoxConstants$.$ROWS_TITLE$));
    for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxCategoryRolloverHandler$$;$DvtNBoxDataAnimationHandler$$++) {
      $columnLabels$$[$DvtNBoxDataAnimationHandler$$] && ($DvtNBoxDrawerRenderer$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($DvtNBoxAutomation$$, -1 == $DvtNBoxCategoryNodeRenderer$$ ? 0 : $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$), $dvt$$5$$.$TextUtils$.$fitText$($columnLabels$$[$DvtNBoxDataAnimationHandler$$], $DvtNBoxDrawerRenderer$$.$w$, $columnLabelsHeight$$, $DvtNBoxKeyboardHandler$$) && ($DvtNBoxRenderer$$.$positionText$($columnLabels$$[$DvtNBoxDataAnimationHandler$$], 
      $DvtNBoxDrawerRenderer$$.x + $DvtNBoxDrawerRenderer$$.$w$ / 2, $DvtNBoxEventManager$$.y + $DvtNBoxEventManager$$.$h$ + $columnTitleComponentGap$$ + $columnLabelsHeight$$ / 2), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $columnLabels$$[$DvtNBoxDataAnimationHandler$$], $dvt$$5$$.$NBoxConstants$.$LABEL$)));
    }
    for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxDrawer$$;$DvtNBoxDataAnimationHandler$$++) {
      $rowLabels$$[$DvtNBoxDataAnimationHandler$$] && ($DvtNBoxDrawerRenderer$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$, -1 == $DvtNBoxCategoryNode$$ ? 0 : $DvtNBoxCategoryNode$$, $DvtNBoxEventManager$$), $dvt$$5$$.$TextUtils$.$fitText$($rowLabels$$[$DvtNBoxDataAnimationHandler$$], $DvtNBoxDrawerRenderer$$.$h$, $rowLabelsWidth$$, $DvtNBoxKeyboardHandler$$) && ($DvtNBoxRenderer$$.$positionText$($rowLabels$$[$DvtNBoxDataAnimationHandler$$], 
      $DvtNBoxEventManager$$.x + ($DvtNBoxNode$$ ? $DvtNBoxEventManager$$.$w$ : 0) + ($DvtNBoxNode$$ ? 1 : -1) * ($rowTitleComponentGap$$ + $rowLabelsWidth$$ / 2), $DvtNBoxDrawerRenderer$$.y + $DvtNBoxDrawerRenderer$$.$h$ / 2, $DvtNBoxNode$$ ? Math.PI / 2 : -Math.PI / 2), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $rowLabels$$[$DvtNBoxDataAnimationHandler$$], $dvt$$5$$.$NBoxConstants$.$LABEL$)));
    }
  };
  $DvtNBoxRenderer$$.$createText$ = function $$DvtNBoxRenderer$$$$createText$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryRolloverHandler$$) {
    $DvtNBoxAutomation$$ = new $dvt$$5$$.$OutputText$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, 0, 0);
    $DvtNBoxAutomation$$.$setCSSStyle$($DvtNBoxEventManager$$);
    $DvtNBoxAutomation$$.$setHorizAlignment$($DvtNBoxDataAnimationHandler$$);
    $DvtNBoxAutomation$$.$setVertAlignment$($DvtNBoxCategoryRolloverHandler$$);
    return $DvtNBoxAutomation$$;
  };
  $DvtNBoxRenderer$$.$_renderCells$ = function $$DvtNBoxRenderer$$$$_renderCells$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    for (var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowCount$($dvt$$5$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($dvt$$5$$), $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxEventManager$$;$DvtNBoxCategoryRolloverHandler$$++) {
      for (var $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxDrawer$$++) {
        var $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getCell$($dvt$$5$$, $DvtNBoxCategoryRolloverHandler$$ * $DvtNBoxDataAnimationHandler$$ + $DvtNBoxDrawer$$);
        $DvtNBoxCell$$.newInstance($dvt$$5$$, $DvtNBoxCategoryNode$$).$render$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
      }
    }
  };
  $DvtNBoxRenderer$$.$getCellCounts$ = function $$DvtNBoxRenderer$$$$getCellCounts$$($dvt$$5$$) {
    return $dvt$$5$$.$getOptions$().__cellCounts || $DvtNBoxRenderer$$.$_calculateCellCounts$($dvt$$5$$);
  };
  $DvtNBoxRenderer$$.$_calculateCellCounts$ = function $$DvtNBoxRenderer$$$$_calculateCellCounts$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$ * $DvtNBoxEventManager$$, $DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$ = null, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = {};
    if ($DvtNBoxCategoryRolloverHandler$$) {
      for (var $DvtNBoxEventManager$$ = [], $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxCategoryRolloverHandler$$.length;$DvtNBoxCategoryNode$$++) {
        $DvtNBoxDrawer$$[$DvtNBoxCategoryRolloverHandler$$[$DvtNBoxCategoryNode$$][$dvt$$5$$.$NBoxConstants$.ID]] = !0;
      }
    }
    for ($DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxCategoryNode$$++) {
      $DvtNBoxKeyboardHandler$$[$DvtNBoxCategoryNode$$] = 0, $DvtNBoxEventManager$$ && ($DvtNBoxEventManager$$[$DvtNBoxCategoryNode$$] = 0);
    }
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$);
    for ($DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxCategoryNode$$++) {
      if ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxCategoryNode$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$)) {
        var $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$);
        $DvtNBoxKeyboardHandler$$[$DvtNBoxCell$$]++;
        $DvtNBoxEventManager$$ && $DvtNBoxDrawer$$[$DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.ID]] && $DvtNBoxEventManager$$[$DvtNBoxCell$$]++;
      }
    }
    $DvtNBoxDrawer$$ = {};
    $DvtNBoxDrawer$$.total = $DvtNBoxKeyboardHandler$$;
    $DvtNBoxEventManager$$ && ($DvtNBoxDrawer$$.highlighted = $DvtNBoxEventManager$$);
    return $DvtNBoxAutomation$$.$getOptions$().__cellCounts = $DvtNBoxDrawer$$;
  };
  $DvtNBoxRenderer$$.$calculateNodeOrders$ = function $$DvtNBoxRenderer$$$$calculateNodeOrders$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = ["normal"], $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = {};
    if ($DvtNBoxEventManager$$) {
      for (var $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
        $DvtNBoxDataAnimationHandler$$[$DvtNBoxEventManager$$[$DvtNBoxCategoryRolloverHandler$$][$dvt$$5$$.$NBoxConstants$.ID]] = !0;
      }
    }
    var $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = {};
    if ($DvtNBoxDrawer$$) {
      for ($DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxDrawer$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
        $DvtNBoxCategoryNode$$[$DvtNBoxDrawer$$[$DvtNBoxCategoryRolloverHandler$$]] = !0;
      }
    }
    $DvtNBoxEventManager$$ ? $DvtNBoxKeyboardHandler$$ = $DvtNBoxDrawer$$ ? ["highlighted-selected", "highlighted-unselected", "unhighlighted-selected", "unhighlighted-unselected"] : ["highlighted-unselected", "unhighlighted-unselected"] : $DvtNBoxDrawer$$ && ($DvtNBoxKeyboardHandler$$ = ["unhighlighted-selected", "unhighlighted-unselected"]);
    $DvtNBoxEventManager$$ = {};
    $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$);
    for ($DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxDrawer$$++) {
      for (var $DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxCategoryRolloverHandler$$;$DvtNBoxCell$$++) {
        var $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxCell$$);
        if (!$DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$) && ("normal" == $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$] || "highlighted-selected" == $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$] && $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.ID]] && $DvtNBoxCategoryNode$$[$DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.ID]] || "highlighted-unselected" == $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$] && $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.ID]] && 
        !$DvtNBoxCategoryNode$$[$DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.ID]] || "unhighlighted-selected" == $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$] && !$DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.ID]] && $DvtNBoxCategoryNode$$[$DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.ID]] || "unhighlighted-unselected" == $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$] && !$DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.ID]] && !$DvtNBoxCategoryNode$$[$DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.ID]])) {
          var $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$);
          $DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxNode$$) || ($DvtNBoxEventManager$$[$DvtNBoxNode$$] || ($DvtNBoxEventManager$$[$DvtNBoxNode$$] = []), $DvtNBoxEventManager$$[$DvtNBoxNode$$].push($DvtNBoxNodeOverflow$$));
        }
      }
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxRenderer$$.$_renderNodes$ = function $$DvtNBoxRenderer$$$$_renderNodes$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (0 < $DvtNBoxDataUtils$$.$getNodeCount$($dvt$$5$$)) {
      if ("counts" == $DvtNBoxDataUtils$$.$getCellContent$($dvt$$5$$)) {
        $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getRowCount$($dvt$$5$$);
        $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($dvt$$5$$);
        for (var $DvtNBoxEventManager$$ = [], $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxAutomation$$;$DvtNBoxDataAnimationHandler$$++) {
          for (var $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxCategoryRolloverHandler$$++) {
            $DvtNBoxEventManager$$.push($DvtNBoxDataAnimationHandler$$ * $DvtNBoxKeyboardHandler$$ + $DvtNBoxCategoryRolloverHandler$$);
          }
        }
        $DvtNBoxCellRenderer$$.$renderBodyCountLabels$($dvt$$5$$, $DvtNBoxEventManager$$);
      } else {
        $DvtNBoxDataUtils$$.$getGrouping$($dvt$$5$$) ? ($DvtNBoxRenderer$$.$_renderCategoryNodes$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxRenderer$$.$_renderDrawer$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$)) : $DvtNBoxRenderer$$.$_renderIndividualNodes$($dvt$$5$$);
      }
    }
  };
  $DvtNBoxRenderer$$.$_renderIndividualNodes$ = function $$DvtNBoxRenderer$$$$_renderIndividualNodes$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.gridGap, $DvtNBoxEventManager$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = {};
    if ($DvtNBoxCategoryRolloverHandler$$) {
      for (var $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxCategoryRolloverHandler$$.length;$DvtNBoxCategoryNode$$++) {
        $DvtNBoxDrawer$$[$DvtNBoxCategoryRolloverHandler$$[$DvtNBoxCategoryNode$$][$dvt$$5$$.$NBoxConstants$.ID]] = !0;
      }
    }
    for (var $DvtNBoxCell$$ = $DvtNBoxRenderer$$.$calculateNodeOrders$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = $DvtNBoxNodeRenderer$$.$calculateNodeLayout$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxDefaults$$ = $DvtNBoxCategoryNode$$.indicatorSectionWidth + $DvtNBoxCategoryNode$$.iconSectionWidth + $DvtNBoxCategoryNode$$.labelSectionWidth + $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCategoryNode$$.nodeHeight + $DvtNBoxKeyboardHandler$$, $DvtNBoxDrawerRenderer$$ = 
    $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $columnCount$$4$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $r$$32$$ = 0;$r$$32$$ < $DvtNBoxDrawerRenderer$$;$r$$32$$++) {
      for (var $c$$21$$ = 0;$c$$21$$ < $columnCount$$4$$;$c$$21$$++) {
        var $cellIndex$$5_cellLayout$$1$$ = $r$$32$$ * $columnCount$$4$$ + $c$$21$$, $nodes$$13$$ = $DvtNBoxCell$$[$cellIndex$$5_cellLayout$$1$$];
        if ($nodes$$13$$ && $nodes$$13$$.length) {
          var $cell$$12$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $cellIndex$$5_cellLayout$$1$$), $cellIndex$$5_cellLayout$$1$$ = $DvtNBoxCategoryNode$$.cellLayouts[$cellIndex$$5_cellLayout$$1$$], $cellRows_gridXOrigin_prevNode$$ = $cellIndex$$5_cellLayout$$1$$.cellRows, $cellColumns_overflowContainer$$ = $cellIndex$$5_cellLayout$$1$$.cellColumns;
          if (!(0 == $cellRows_gridXOrigin_prevNode$$ || 0 == $cellColumns_overflowContainer$$ || 1 == $cellRows_gridXOrigin_prevNode$$ && 1 == $cellColumns_overflowContainer$$ && $cellIndex$$5_cellLayout$$1$$.overflow)) {
            for (var $maxNodes$$ = $cellRows_gridXOrigin_prevNode$$ * $cellColumns_overflowContainer$$ - ($cellIndex$$5_cellLayout$$1$$.overflow ? 1 : 0), $n$$18$$ = 0;$n$$18$$ < $nodes$$13$$.length;$n$$18$$++) {
              var $node$$253$$ = $nodes$$13$$[$n$$18$$];
              if (0 > $maxNodes$$ || $n$$18$$ < $maxNodes$$) {
                var $cellContainer$$1$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $cell$$12$$).$getChildContainer$(), $scrolling$$ = $cellContainer$$1$$ instanceof $dvt$$5$$.$SimpleScrollableContainer$, $nodeContainer$$ = new $DvtNBoxNode$$($DvtNBoxAutomation$$, $node$$253$$), $cellRows_gridXOrigin_prevNode$$ = $cell$$12$$.__childArea.x + ($cell$$12$$.__childArea.$w$ - $cellIndex$$5_cellLayout$$1$$.cellColumns * $DvtNBoxDefaults$$ + $DvtNBoxKeyboardHandler$$) / 2, $gridYOrigin$$ = 
                $scrolling$$ ? $DvtNBoxKeyboardHandler$$ : $cell$$12$$.__childArea.y, $gridColumn$$ = $n$$18$$ % $cellColumns_overflowContainer$$;
                $DvtNBoxEventManager$$ && ($gridColumn$$ = $cellColumns_overflowContainer$$ - $gridColumn$$ - 1);
                var $gridRow$$ = Math.floor($n$$18$$ / $cellColumns_overflowContainer$$);
                $nodeContainer$$.$setTranslate$($cellRows_gridXOrigin_prevNode$$ + $DvtNBoxDefaults$$ * $gridColumn$$, $gridYOrigin$$ + $DvtNBoxCategoryNodeRenderer$$ * $gridRow$$);
                $nodeContainer$$.$render$($scrolling$$ ? $cellContainer$$1$$.$_container$ : $cellContainer$$1$$, $DvtNBoxCategoryNode$$);
                $DvtNBoxCategoryRolloverHandler$$ && !$DvtNBoxDrawer$$[$node$$253$$[$dvt$$5$$.$NBoxConstants$.ID]] && $nodeContainer$$.$setAlpha$($DvtNBoxDataAnimationHandler$$);
                if ($cellRows_gridXOrigin_prevNode$$ = 0 < $n$$18$$ ? $nodes$$13$$[$n$$18$$ - 1] : null) {
                  $node$$253$$.__prev = $cellRows_gridXOrigin_prevNode$$, $cellRows_gridXOrigin_prevNode$$.__next = $node$$253$$;
                }
              }
            }
          }
        }
      }
    }
    $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);
    $columnCount$$4$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);
    $DvtNBoxDataAnimationHandler$$ = [];
    for ($r$$32$$ = 0;$r$$32$$ < $DvtNBoxDrawerRenderer$$;$r$$32$$++) {
      for ($c$$21$$ = 0;$c$$21$$ < $columnCount$$4$$;$c$$21$$++) {
        $DvtNBoxCategoryRolloverHandler$$ = $r$$32$$ * $columnCount$$4$$ + $c$$21$$, $DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$) || ($DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$), $cell$$12$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$), $cellIndex$$5_cellLayout$$1$$ = $DvtNBoxCategoryNode$$.cellLayouts[$DvtNBoxCategoryRolloverHandler$$], $cellIndex$$5_cellLayout$$1$$.overflow && 
        ($cellRows_gridXOrigin_prevNode$$ = $cellIndex$$5_cellLayout$$1$$.cellRows, $cellColumns_overflowContainer$$ = $cellIndex$$5_cellLayout$$1$$.cellColumns, 0 == $cellRows_gridXOrigin_prevNode$$ || 0 == $cellColumns_overflowContainer$$ || 1 == $cellRows_gridXOrigin_prevNode$$ && 1 == $cellColumns_overflowContainer$$ && $cellIndex$$5_cellLayout$$1$$.overflow ? $DvtNBoxDataAnimationHandler$$.push($DvtNBoxCategoryRolloverHandler$$) : ($cellColumns_overflowContainer$$ = $DvtNBoxNodeOverflow$$.newInstance($DvtNBoxAutomation$$, 
        $cell$$12$$), ($cellRows_gridXOrigin_prevNode$$ = $DvtNBoxDataUtils$$.$getLastNavigableNode$($DvtNBoxAutomation$$, $cell$$12$$.$getChildContainer$())) && $cellRows_gridXOrigin_prevNode$$ instanceof $DvtNBoxNode$$ && ($cellColumns_overflowContainer$$.__prev = $cellRows_gridXOrigin_prevNode$$.getData(), $cellRows_gridXOrigin_prevNode$$.getData().__next = $cellColumns_overflowContainer$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $cellColumns_overflowContainer$$, $cellColumns_overflowContainer$$), 
        $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$, $cellColumns_overflowContainer$$, "overflow"), $cellRows_gridXOrigin_prevNode$$ = $DvtNBoxDrawer$$.__childArea.x + ($DvtNBoxDrawer$$.__childArea.$w$ - $cellIndex$$5_cellLayout$$1$$.cellColumns * $DvtNBoxDefaults$$ + $DvtNBoxKeyboardHandler$$) / 2, $gridYOrigin$$ = $DvtNBoxDrawer$$.__childArea.y, $gridColumn$$ = $cellIndex$$5_cellLayout$$1$$.cellColumns - 1, $DvtNBoxEventManager$$ && ($gridColumn$$ = 0), $gridRow$$ = 
        $cellIndex$$5_cellLayout$$1$$.cellRows - 1, $cellColumns_overflowContainer$$.$setTranslate$($cellRows_gridXOrigin_prevNode$$ + $DvtNBoxDefaults$$ * $gridColumn$$, $gridYOrigin$$ + $DvtNBoxCategoryNodeRenderer$$ * $gridRow$$), $cellColumns_overflowContainer$$.$render$($cell$$12$$.$getChildContainer$(), $DvtNBoxDefaults$$ - $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryNodeRenderer$$ - $DvtNBoxKeyboardHandler$$)))), $DvtNBoxDataUtils$$.$isCellMaximized$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$) && 
        ($cellContainer$$1$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$)).$getChildContainer$(), $cellContainer$$1$$.$prepareContentPane$());
      }
    }
    0 < $DvtNBoxDataAnimationHandler$$.length && $DvtNBoxCellRenderer$$.$renderBodyCountLabels$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
  };
  $DvtNBoxRenderer$$.$_renderCategoryNodes$ = function $$DvtNBoxRenderer$$$$_renderCategoryNodes$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = {}, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$), $DvtNBoxCell$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxNode$$ = {};
    if ($DvtNBoxNodeOverflow$$) {
      for (var $DvtNBoxDefaults$$ = 0;$DvtNBoxDefaults$$ < $DvtNBoxNodeOverflow$$.length;$DvtNBoxDefaults$$++) {
        $DvtNBoxNode$$[$DvtNBoxNodeOverflow$$[$DvtNBoxDefaults$$][$dvt$$5$$.$NBoxConstants$.ID]] = !0;
      }
    }
    for ($DvtNBoxDefaults$$ = 0;$DvtNBoxDefaults$$ < $DvtNBoxCategoryRolloverHandler$$;$DvtNBoxDefaults$$++) {
      if ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$)) {
        var $DvtNBoxCellRenderer$$ = $DvtNBoxDataAnimationHandler$$;
        if ($DvtNBoxDrawer$$ == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
          var $DvtNBoxNodeRenderer$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$) + "", $DvtNBoxCellRenderer$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeRenderer$$];
          $DvtNBoxCellRenderer$$ || ($DvtNBoxCellRenderer$$ = {}, $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeRenderer$$] = $DvtNBoxCellRenderer$$);
        }
        var $DvtNBoxNodeRenderer$$ = $DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxNodeOverflow$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCellRenderer$$[$DvtNBoxNodeRenderer$$];
        $DvtNBoxCategoryNodeRenderer$$ || ($DvtNBoxCategoryNodeRenderer$$ = {}, $DvtNBoxCategoryNodeRenderer$$[$dvt$$5$$.$NBoxConstants$.ID] = $DvtNBoxNodeRenderer$$, $DvtNBoxDrawer$$ == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($DvtNBoxCategoryNodeRenderer$$[$dvt$$5$$.$NBoxConstants$.$CELL$] = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$)), $DvtNBoxCategoryNodeRenderer$$.nodeIndices = [], $DvtNBoxCategoryNodeRenderer$$.highlightedCount = 0, $DvtNBoxCellRenderer$$[$DvtNBoxNodeRenderer$$] = 
        $DvtNBoxCategoryNodeRenderer$$);
        $DvtNBoxCategoryNodeRenderer$$.nodeIndices.push($DvtNBoxDefaults$$);
        $DvtNBoxNode$$[$DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$)[$dvt$$5$$.$NBoxConstants$.ID]] && $DvtNBoxCategoryNodeRenderer$$.highlightedCount++;
      }
    }
    if ($DvtNBoxDrawer$$ == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      var $DvtNBoxDefaults$$ = {}, $DvtNBoxStyleUtils$$;
      for ($DvtNBoxStyleUtils$$ in $DvtNBoxDataAnimationHandler$$) {
        $DvtNBoxDefaults$$[$DvtNBoxStyleUtils$$] = $DvtNBoxRenderer$$.$_processOtherThreshold$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxStyleUtils$$]);
      }
    } else {
      $DvtNBoxDefaults$$ = $DvtNBoxRenderer$$.$_processOtherThreshold$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
    }
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDefaults$$;
    $DvtNBoxAutomation$$.$getOptions$().__groups = $DvtNBoxDataAnimationHandler$$;
    if ($DvtNBoxDrawer$$ == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
      $DvtNBoxStyleUtils$$ = [];
      for ($DvtNBoxCategoryNodeRenderer$$ in $DvtNBoxDataAnimationHandler$$) {
        $DvtNBoxStyleUtils$$.push($DvtNBoxCategoryNodeRenderer$$);
      }
      $DvtNBoxStyleUtils$$.sort(function($dvt$$5$$, $DvtNBoxAutomation$$) {
        return $DvtNBoxCategoryNode$$.$compareSize$($DvtNBoxDataAnimationHandler$$[$dvt$$5$$], $DvtNBoxDataAnimationHandler$$[$DvtNBoxAutomation$$]);
      });
      $DvtNBoxDrawer$$ = Math.sqrt(.15 * $DvtNBoxEventManager$$.$w$ * $DvtNBoxEventManager$$.$h$ / $DvtNBoxCategoryRolloverHandler$$);
      for ($DvtNBoxDefaults$$ = 0;$DvtNBoxDefaults$$ < $DvtNBoxStyleUtils$$.length;$DvtNBoxDefaults$$++) {
        $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxStyleUtils$$[$DvtNBoxDefaults$$];
        $DvtNBoxCellRenderer$$ = $DvtNBoxNode$$ = 0;
        $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNodeRenderer$$].nodeIndices.length;
        for ($DvtNBoxNodeRenderer$$ = 0;$DvtNBoxNodeRenderer$$ < $DvtNBoxCategoryRolloverHandler$$;$DvtNBoxNodeRenderer$$++) {
          $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNodeRenderer$$].nodeIndices[$DvtNBoxNodeRenderer$$]), $DvtNBoxNode$$ += $DvtNBoxDataUtils$$.$getXPercentage$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxCellRenderer$$ += $DvtNBoxDataUtils$$.$getYPercentage$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$);
        }
        $DvtNBoxNode$$ /= $DvtNBoxCategoryRolloverHandler$$;
        $DvtNBoxCellRenderer$$ /= $DvtNBoxCategoryRolloverHandler$$;
        $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryNode$$.newInstance($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNodeRenderer$$]);
        $DvtNBoxCategoryRolloverHandler$$.$setTranslate$($DvtNBoxEventManager$$.x + ($DvtNBoxCell$$ ? 1 - $DvtNBoxNode$$ : $DvtNBoxNode$$) * $DvtNBoxEventManager$$.$w$, $DvtNBoxEventManager$$.y + (1 - $DvtNBoxCellRenderer$$) * $DvtNBoxEventManager$$.$h$);
        $DvtNBoxCategoryRolloverHandler$$.$render$($DvtNBoxKeyboardHandler$$, $DvtNBoxDrawer$$, 0);
        $DvtNBoxCategoryRolloverHandler$$.$setMaxAlpha$(.8);
      }
    } else {
      if ($DvtNBoxDrawer$$ == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);
        $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);
        $DvtNBoxKeyboardHandler$$ *= $DvtNBoxDefaults$$;
        $DvtNBoxEventManager$$ = [];
        for ($DvtNBoxDefaults$$ = 0;$DvtNBoxDefaults$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxDefaults$$++) {
          $DvtNBoxDataAnimationHandler$$[$DvtNBoxDefaults$$] && !$DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$) && ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$), $DvtNBoxEventManager$$[$DvtNBoxDefaults$$] = $DvtNBoxRenderer$$.$_forceLayoutGroups$($DvtNBoxDataAnimationHandler$$[$DvtNBoxDefaults$$], $DvtNBoxCell$$.__childArea.$w$, $DvtNBoxCell$$.__childArea.$h$));
        }
        $DvtNBoxDrawer$$ = 40;
        for ($DvtNBoxDefaults$$ = 0;$DvtNBoxDefaults$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxDefaults$$++) {
          $DvtNBoxDataAnimationHandler$$[$DvtNBoxDefaults$$] && !$DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$) && ($DvtNBoxDrawer$$ = Math.min($DvtNBoxDrawer$$, $DvtNBoxEventManager$$[$DvtNBoxDefaults$$].scale));
        }
        for ($DvtNBoxDefaults$$ = 0;$DvtNBoxDefaults$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxDefaults$$++) {
          if ($DvtNBoxDataAnimationHandler$$[$DvtNBoxDefaults$$] && !$DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$)) {
            for ($DvtNBoxCategoryNodeRenderer$$ in $DvtNBoxNodeOverflow$$ = $DvtNBoxEventManager$$[$DvtNBoxDefaults$$].positions, $DvtNBoxStyleUtils$$ = $DvtNBoxEventManager$$[$DvtNBoxDefaults$$].center, $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$), $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxCell$$).$getChildContainer$(), $DvtNBoxCellRenderer$$ = $DvtNBoxNode$$ instanceof $dvt$$5$$.$SimpleScrollableContainer$, $DvtNBoxNodeOverflow$$) {
              $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryNode$$.newInstance($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxDefaults$$][$DvtNBoxCategoryNodeRenderer$$]), $DvtNBoxCategoryRolloverHandler$$.$setTranslate$($DvtNBoxCell$$.__childArea.x + $DvtNBoxCell$$.__childArea.$w$ / 2 + $DvtNBoxDrawer$$ * ($DvtNBoxNodeOverflow$$[$DvtNBoxCategoryNodeRenderer$$].x - $DvtNBoxStyleUtils$$.x), ($DvtNBoxCellRenderer$$ ? 0 : $DvtNBoxCell$$.__childArea.y) + $DvtNBoxCell$$.__childArea.$h$ / 
              2 + $DvtNBoxDrawer$$ * ($DvtNBoxNodeOverflow$$[$DvtNBoxCategoryNodeRenderer$$].y - $DvtNBoxStyleUtils$$.y)), $DvtNBoxCategoryRolloverHandler$$.$render$($DvtNBoxCellRenderer$$ ? $DvtNBoxNode$$.$_container$ : $DvtNBoxNode$$, $DvtNBoxDrawer$$, 3);
            }
          }
        }
      }
    }
  };
  $DvtNBoxRenderer$$.$getRowDimensions$ = function $$DvtNBoxRenderer$$$$getRowDimensions$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$.$h$ / $DvtNBoxAutomation$$;
    return new $dvt$$5$$.$Rectangle$($DvtNBoxEventManager$$.x, $DvtNBoxEventManager$$.y + ($DvtNBoxAutomation$$ - $DvtNBoxKeyboardHandler$$ - 1) * $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$.$w$, $DvtNBoxDataAnimationHandler$$);
  };
  $DvtNBoxRenderer$$.$getColumnDimensions$ = function $$DvtNBoxRenderer$$$$getColumnDimensions$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$.$w$ / $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxAutomation$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$());
    return new $dvt$$5$$.$Rectangle$($DvtNBoxEventManager$$.x + ($DvtNBoxAutomation$$ ? $DvtNBoxEventManager$$.$w$ - $DvtNBoxDataAnimationHandler$$ : 0) + ($DvtNBoxAutomation$$ ? -1 : 1) * $DvtNBoxKeyboardHandler$$ * $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$.y, $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$.$h$);
  };
  $DvtNBoxRenderer$$.$_adjustAvailSpace$ = function $$DvtNBoxRenderer$$$$_adjustAvailSpace$$($dvt$$5$$) {
    $dvt$$5$$.x = Math.round($dvt$$5$$.x);
    $dvt$$5$$.y = Math.round($dvt$$5$$.y);
    $dvt$$5$$.$w$ = Math.round($dvt$$5$$.$w$);
    $dvt$$5$$.$h$ = Math.round($dvt$$5$$.$h$);
  };
  $DvtNBoxRenderer$$.$positionText$ = function $$DvtNBoxRenderer$$$$positionText$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $dvt$$5$$.$setX$($DvtNBoxAutomation$$);
    $dvt$$5$$.$setY$($DvtNBoxKeyboardHandler$$);
    if ($DvtNBoxEventManager$$) {
      var $DvtNBoxDataAnimationHandler$$ = $dvt$$5$$.$getMatrix$();
      $DvtNBoxDataAnimationHandler$$.translate(-$DvtNBoxAutomation$$, -$DvtNBoxKeyboardHandler$$);
      $DvtNBoxDataAnimationHandler$$.rotate($DvtNBoxEventManager$$);
      $DvtNBoxDataAnimationHandler$$.translate($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
      $dvt$$5$$.$setMatrix$($DvtNBoxDataAnimationHandler$$);
    }
  };
  $DvtNBoxRenderer$$.$_renderInitialSelection$ = function $$DvtNBoxRenderer$$$$_renderInitialSelection$$($DvtNBoxAutomation$$) {
    if ($DvtNBoxAutomation$$.$isSelectionSupported$()) {
      var $DvtNBoxKeyboardHandler$$ = {}, $DvtNBoxEventManager$$ = [], $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($DvtNBoxAutomation$$);
      if ($DvtNBoxDataAnimationHandler$$) {
        for (var $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
          $DvtNBoxEventManager$$.push($DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryRolloverHandler$$]), $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryRolloverHandler$$]] = !0;
        }
        var $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$getObjects$();
        if ($DvtNBoxDataUtils$$.$getGrouping$($DvtNBoxAutomation$$)) {
          for ($DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxDrawer$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
            if ($DvtNBoxDrawer$$[$DvtNBoxCategoryRolloverHandler$$] instanceof $DvtNBoxCategoryNode$$) {
              for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDrawer$$[$DvtNBoxCategoryRolloverHandler$$].getData().nodeIndices, $DvtNBoxCell$$ = !0, $DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeOverflow$$++) {
                var $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$]);
                if (!$DvtNBoxKeyboardHandler$$[$DvtNBoxNode$$[$dvt$$5$$.$NBoxConstants$.ID]]) {
                  $DvtNBoxCell$$ = !1;
                  break;
                }
              }
              $DvtNBoxCell$$ && $DvtNBoxEventManager$$.push($DvtNBoxDrawer$$[$DvtNBoxCategoryRolloverHandler$$].getId());
            }
          }
        }
      }
      $DvtNBoxAutomation$$.$getSelectionHandler$().$processInitialSelections$($DvtNBoxEventManager$$, $DvtNBoxDrawer$$);
    }
  };
  $DvtNBoxRenderer$$.$_forceLayoutGroups$ = function $$DvtNBoxRenderer$$$$_forceLayoutGroups$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = [], $DvtNBoxCategoryRolloverHandler$$;
    for ($DvtNBoxCategoryRolloverHandler$$ in $DvtNBoxAutomation$$) {
      $DvtNBoxDataAnimationHandler$$.push($DvtNBoxCategoryRolloverHandler$$);
    }
    $DvtNBoxDataAnimationHandler$$.sort(function($dvt$$5$$, $DvtNBoxKeyboardHandler$$) {
      return $DvtNBoxCategoryNode$$.$compareSize$($DvtNBoxAutomation$$[$dvt$$5$$], $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$]);
    });
    for (var $DvtNBoxDrawer$$ = {}, $DvtNBoxCell$$ = 2 * Math.PI / $DvtNBoxDataAnimationHandler$$.length, $DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeOverflow$$++) {
      $DvtNBoxDrawer$$[$DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$]] = $dvt$$5$$.$VectorUtils$.$createVector$($DvtNBoxNodeOverflow$$ * Math.cos($DvtNBoxCell$$ * $DvtNBoxNodeOverflow$$), $DvtNBoxNodeOverflow$$ * Math.sin($DvtNBoxCell$$ * $DvtNBoxNodeOverflow$$));
    }
    for (var $DvtNBoxCell$$ = 1, $DvtNBoxNode$$ = -.25 * $DvtNBoxEventManager$$ / Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$), $DvtNBoxDefaults$$ = -.25 * $DvtNBoxKeyboardHandler$$ / Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);.005 < $DvtNBoxCell$$;) {
      for (var $DvtNBoxRenderer$$ = {}, $DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeOverflow$$++) {
        var $DvtNBoxCellRenderer$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$];
        $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawer$$[$DvtNBoxCellRenderer$$];
        var $DvtNBoxDataUtils$$ = $DvtNBoxAutomation$$[$DvtNBoxCellRenderer$$].nodeIndices.length;
        $DvtNBoxRenderer$$[$DvtNBoxCellRenderer$$] = $dvt$$5$$.$VectorUtils$.$createVector$($DvtNBoxCell$$ * $DvtNBoxNode$$ * $DvtNBoxCategoryRolloverHandler$$.x, $DvtNBoxCell$$ * $DvtNBoxDefaults$$ * $DvtNBoxCategoryRolloverHandler$$.y);
        for (var $DvtNBoxNodeRenderer$$ = 0;$DvtNBoxNodeRenderer$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeRenderer$$++) {
          if ($DvtNBoxNodeOverflow$$ != $DvtNBoxNodeRenderer$$) {
            for (var $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeRenderer$$], $DvtNBoxStyleUtils$$ = $DvtNBoxAutomation$$[$DvtNBoxCategoryNodeRenderer$$].nodeIndices.length, $DvtNBoxCategoryNodeRenderer$$ = $dvt$$5$$.$VectorUtils$.$subtractVectors$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$[$DvtNBoxCategoryNodeRenderer$$]), $DvtNBoxDrawerRenderer$$ = $dvt$$5$$.$VectorUtils$.$getMagnitude$($DvtNBoxCategoryNodeRenderer$$), $angle$$35_minimumDistance$$ = Math.atan2($DvtNBoxCategoryNodeRenderer$$.y, 
            $DvtNBoxCategoryNodeRenderer$$.x);0 > $angle$$35_minimumDistance$$;) {
              $angle$$35_minimumDistance$$ += Math.PI / 2;
            }
            for (;$angle$$35_minimumDistance$$ >= Math.PI / 2;) {
              $angle$$35_minimumDistance$$ -= Math.PI / 2;
            }
            $angle$$35_minimumDistance$$ = $angle$$35_minimumDistance$$ < Math.PI / 4 ? .5 * (Math.sqrt($DvtNBoxDataUtils$$) + Math.sqrt($DvtNBoxStyleUtils$$)) / Math.cos($angle$$35_minimumDistance$$) : .5 * (Math.sqrt($DvtNBoxDataUtils$$) + Math.sqrt($DvtNBoxStyleUtils$$)) / Math.sin($angle$$35_minimumDistance$$);
            $DvtNBoxDrawerRenderer$$ < $angle$$35_minimumDistance$$ && ($DvtNBoxRenderer$$[$DvtNBoxCellRenderer$$] = $dvt$$5$$.$VectorUtils$.$addVectors$($DvtNBoxRenderer$$[$DvtNBoxCellRenderer$$], $dvt$$5$$.$VectorUtils$.$scaleVector$($DvtNBoxCategoryNodeRenderer$$, ($angle$$35_minimumDistance$$ - $DvtNBoxDrawerRenderer$$) / $DvtNBoxDrawerRenderer$$ * ($DvtNBoxStyleUtils$$ / ($DvtNBoxDataUtils$$ + $DvtNBoxStyleUtils$$)) * (1 - $DvtNBoxCell$$))));
          }
        }
      }
      for ($DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeOverflow$$++) {
        $DvtNBoxCellRenderer$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$], $DvtNBoxDrawer$$[$DvtNBoxCellRenderer$$] = $dvt$$5$$.$VectorUtils$.$addVectors$($DvtNBoxDrawer$$[$DvtNBoxCellRenderer$$], $DvtNBoxRenderer$$[$DvtNBoxCellRenderer$$]);
      }
      $DvtNBoxCell$$ *= .98;
    }
    $DvtNBoxCell$$ = Number.MAX_VALUE;
    $DvtNBoxNode$$ = -Number.MAX_VALUE;
    $DvtNBoxDefaults$$ = Number.MAX_VALUE;
    $DvtNBoxRenderer$$ = -Number.MAX_VALUE;
    for ($DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxNodeOverflow$$++) {
      $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxNodeOverflow$$], $DvtNBoxCellRenderer$$ = Math.sqrt($DvtNBoxAutomation$$[$DvtNBoxCategoryRolloverHandler$$].nodeIndices.length), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawer$$[$DvtNBoxCategoryRolloverHandler$$], $DvtNBoxCell$$ = Math.min($DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$.x - $DvtNBoxCellRenderer$$ / 2), $DvtNBoxNode$$ = Math.max($DvtNBoxNode$$, $DvtNBoxCategoryRolloverHandler$$.x + $DvtNBoxCellRenderer$$ / 
      2), $DvtNBoxDefaults$$ = Math.min($DvtNBoxDefaults$$, $DvtNBoxCategoryRolloverHandler$$.y - $DvtNBoxCellRenderer$$ / 2), $DvtNBoxRenderer$$ = Math.max($DvtNBoxRenderer$$, $DvtNBoxCategoryRolloverHandler$$.y + $DvtNBoxCellRenderer$$ / 2);
    }
    return {scale:Math.min($DvtNBoxKeyboardHandler$$ / ($DvtNBoxNode$$ - $DvtNBoxCell$$), $DvtNBoxEventManager$$ / ($DvtNBoxRenderer$$ - $DvtNBoxDefaults$$)), center:new $dvt$$5$$.$Point$(($DvtNBoxCell$$ + $DvtNBoxNode$$) / 2, ($DvtNBoxDefaults$$ + $DvtNBoxRenderer$$) / 2), positions:$DvtNBoxDrawer$$};
  };
  $DvtNBoxRenderer$$.$_processOtherThreshold$ = function $$DvtNBoxRenderer$$$$_processOtherThreshold$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getOtherThreshold$($DvtNBoxAutomation$$) * $DvtNBoxEventManager$$;
    if (1 >= $DvtNBoxEventManager$$) {
      return $DvtNBoxKeyboardHandler$$;
    }
    var $DvtNBoxDataAnimationHandler$$ = {}, $DvtNBoxCategoryRolloverHandler$$ = {};
    if ($DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      for (var $DvtNBoxDrawer$$ in $DvtNBoxKeyboardHandler$$) {
        var $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$];
        $DvtNBoxCategoryRolloverHandler$$.cell = $DvtNBoxCategoryNode$$.cell;
        break;
      }
    }
    $DvtNBoxCategoryRolloverHandler$$.id = "other";
    $DvtNBoxCategoryRolloverHandler$$.nodeIndices = [];
    $DvtNBoxCategoryRolloverHandler$$.otherNode = !0;
    for ($DvtNBoxDrawer$$ in $DvtNBoxKeyboardHandler$$) {
      if ($DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawer$$], $DvtNBoxCategoryNode$$.nodeIndices.length < $DvtNBoxEventManager$$) {
        for (var $DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxCategoryNode$$.nodeIndices.length;$DvtNBoxCell$$++) {
          $DvtNBoxCategoryRolloverHandler$$.nodeIndices.push($DvtNBoxCategoryNode$$.nodeIndices[$DvtNBoxCell$$]);
        }
      } else {
        $DvtNBoxDataAnimationHandler$$[$DvtNBoxDrawer$$] = $DvtNBoxCategoryNode$$;
      }
    }
    0 < $DvtNBoxCategoryRolloverHandler$$.nodeIndices.length && ($DvtNBoxDataAnimationHandler$$.other = $DvtNBoxCategoryRolloverHandler$$);
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxRenderer$$.$_renderDrawer$ = function $$DvtNBoxRenderer$$$$_renderDrawer$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$);
    $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$.id) ? $DvtNBoxDrawer$$.newInstance($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$).$render$($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) : ($DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$DRAWER$] = null, $DvtNBoxKeyboardHandler$$ = $dvt$$5$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$5$$.$NBoxConstants$.$DRAWER$, null), $DvtNBoxAutomation$$.$processEvent$($DvtNBoxKeyboardHandler$$)));
  };
  $DvtNBoxRenderer$$.$getGlobalMatrix$ = function $$DvtNBoxRenderer$$$$getGlobalMatrix$$($dvt$$5$$) {
    var $DvtNBoxAutomation$$ = $dvt$$5$$.$getMatrix$().clone();
    for ($dvt$$5$$ = $dvt$$5$$.getParent();$dvt$$5$$;) {
      var $DvtNBoxKeyboardHandler$$ = $dvt$$5$$.$getMatrix$();
      $DvtNBoxAutomation$$.translate($DvtNBoxKeyboardHandler$$.$_tx$, $DvtNBoxKeyboardHandler$$.$_ty$);
      $dvt$$5$$ = $dvt$$5$$.getParent();
    }
    return $DvtNBoxAutomation$$;
  };
  $DvtNBoxRenderer$$.$animateUpdate$ = function $$DvtNBoxRenderer$$$$animateUpdate$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxRenderer$$.$_animateCells$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxRenderer$$.$_animateNodes$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxEventManager$$ ? $DvtNBoxEventManager$$.id : null, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxKeyboardHandler$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxDataAnimationHandler$$.id : null;
    $DvtNBoxEventManager$$ != $DvtNBoxDataAnimationHandler$$ && $DvtNBoxRenderer$$.$_animateDrawer$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
  };
  $DvtNBoxRenderer$$.$_animateCells$ = function $$DvtNBoxRenderer$$$$_animateCells$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxKeyboardHandler$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxEventManager$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxKeyboardHandler$$), $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxEventManager$$), $DvtNBoxCell$$ = $DvtNBoxDataAnimationHandler$$ * $DvtNBoxDrawer$$, $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryRolloverHandler$$ * 
    $DvtNBoxCategoryNode$$, $DvtNBoxNode$$ = [], $DvtNBoxDefaults$$ = [], $DvtNBoxRenderer$$ = 0;$DvtNBoxRenderer$$ < $DvtNBoxCell$$;$DvtNBoxRenderer$$++) {
      $DvtNBoxNode$$.push($DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxDataUtils$$.$getCell$($DvtNBoxKeyboardHandler$$, $DvtNBoxRenderer$$)));
    }
    for ($DvtNBoxRenderer$$ = 0;$DvtNBoxRenderer$$ < $DvtNBoxNodeOverflow$$;$DvtNBoxRenderer$$++) {
      $DvtNBoxDefaults$$.push($DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxEventManager$$, $DvtNBoxDataUtils$$.$getCell$($DvtNBoxEventManager$$, $DvtNBoxRenderer$$)));
    }
    if ($DvtNBoxDataAnimationHandler$$ == $DvtNBoxCategoryRolloverHandler$$ && $DvtNBoxDrawer$$ == $DvtNBoxCategoryNode$$) {
      $DvtNBoxDataAnimationHandler$$ = !0;
      for ($DvtNBoxRenderer$$ = 0;$DvtNBoxRenderer$$ < $DvtNBoxCategoryRolloverHandler$$;$DvtNBoxRenderer$$++) {
        if ($DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxKeyboardHandler$$, $DvtNBoxRenderer$$)[$dvt$$5$$.$NBoxConstants$.ID], $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxEventManager$$, $DvtNBoxRenderer$$)[$dvt$$5$$.$NBoxConstants$.ID], $DvtNBoxDrawer$$ != $DvtNBoxCell$$) {
          $DvtNBoxDataAnimationHandler$$ = !1;
          break;
        }
      }
      if ($DvtNBoxDataAnimationHandler$$) {
        for ($DvtNBoxRenderer$$ = 0;$DvtNBoxRenderer$$ < $DvtNBoxCategoryNode$$;$DvtNBoxRenderer$$++) {
          if ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxKeyboardHandler$$, $DvtNBoxRenderer$$)[$dvt$$5$$.$NBoxConstants$.ID], $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxEventManager$$, $DvtNBoxRenderer$$)[$dvt$$5$$.$NBoxConstants$.ID], $DvtNBoxCategoryRolloverHandler$$ != $DvtNBoxDrawer$$) {
            $DvtNBoxDataAnimationHandler$$ = !1;
            break;
          }
        }
      }
      if ($DvtNBoxDataAnimationHandler$$) {
        $DvtNBoxAutomation$$.$constructAnimation$($DvtNBoxNode$$, $DvtNBoxDefaults$$);
        return;
      }
    }
    $DvtNBoxAutomation$$.$constructAnimation$($DvtNBoxNode$$, []);
    $DvtNBoxAutomation$$.$constructAnimation$([], $DvtNBoxDefaults$$);
  };
  $DvtNBoxRenderer$$.$_animateNodes$ = function $$DvtNBoxRenderer$$$$_animateNodes$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    for (var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxKeyboardHandler$$), $DvtNBoxCategoryRolloverHandler$$ = [], $DvtNBoxDrawer$$ = [], $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxEventManager$$;$DvtNBoxCategoryNode$$++) {
      $DvtNBoxCategoryRolloverHandler$$.push($DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxCategoryNode$$)));
    }
    for ($DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxCategoryNode$$++) {
      $DvtNBoxDrawer$$.push($DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxDataUtils$$.$getNode$($DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryNode$$)));
    }
    $dvt$$5$$.$constructAnimation$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$);
    $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$);
    $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxKeyboardHandler$$) || ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxRenderer$$.$_getSortedGroups$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$.$_getSortedGroups$($DvtNBoxKeyboardHandler$$), $DvtNBoxEventManager$$ && ($DvtNBoxDataUtils$$.$getMaximizedCellIndex$($DvtNBoxAutomation$$) != $DvtNBoxDataUtils$$.$getMaximizedCellIndex$($DvtNBoxKeyboardHandler$$) ? ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataAnimationHandler$$.filter(function($dvt$$5$$) {
      return $dvt$$5$$.getData().cell != $DvtNBoxDataUtils$$.$getMaximizedCellIndex$($DvtNBoxAutomation$$);
    }), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryRolloverHandler$$.filter(function($dvt$$5$$) {
      return $dvt$$5$$.getData().cell != $DvtNBoxDataUtils$$.$getMaximizedCellIndex$($DvtNBoxAutomation$$);
    })) : $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$ = null), $dvt$$5$$.$constructAnimation$($DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryRolloverHandler$$));
  };
  $DvtNBoxRenderer$$.$_getSortedGroups$ = function $$DvtNBoxRenderer$$$$_getSortedGroups$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$().__groups, $DvtNBoxDataAnimationHandler$$ = [];
    if ($DvtNBoxEventManager$$) {
      if ($DvtNBoxKeyboardHandler$$ == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        for (var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$ * $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxKeyboardHandler$$;$DvtNBoxCategoryRolloverHandler$$++) {
          for (var $DvtNBoxDrawer$$ = $DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$[$DvtNBoxCategoryRolloverHandler$$ + ""]), $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDrawer$$.length;$DvtNBoxCategoryNode$$++) {
            $DvtNBoxDataAnimationHandler$$.push($DvtNBoxDrawer$$[$DvtNBoxCategoryNode$$]);
          }
        }
      } else {
        $DvtNBoxDataAnimationHandler$$ = $DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$);
      }
    }
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$ = function $$DvtNBoxRenderer$$$$_getSortedGroupsFromContainer$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$;
    for ($DvtNBoxEventManager$$ in $DvtNBoxAutomation$$) {
      var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$5$$, $DvtNBoxAutomation$$[$DvtNBoxEventManager$$]);
      $DvtNBoxDataAnimationHandler$$ && $DvtNBoxKeyboardHandler$$.push($DvtNBoxDataAnimationHandler$$);
    }
    $DvtNBoxKeyboardHandler$$.sort(function($dvt$$5$$, $DvtNBoxAutomation$$) {
      var $DvtNBoxKeyboardHandler$$ = $dvt$$5$$.getId(), $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.getId();
      return $DvtNBoxKeyboardHandler$$ == $DvtNBoxEventManager$$ ? 0 : $DvtNBoxKeyboardHandler$$ < $DvtNBoxEventManager$$ ? -1 : 1;
    });
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxRenderer$$.$_animateDrawer$ = function $$DvtNBoxRenderer$$$$_animateDrawer$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$ = $DvtNBoxEventManager$$ ? [$DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$)] : null;
    $DvtNBoxAutomation$$ = ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxKeyboardHandler$$)) ? [$DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$)] : [];
    $dvt$$5$$.$constructAnimation$($DvtNBoxEventManager$$, $DvtNBoxAutomation$$);
  };
  $DvtNBoxRenderer$$.$setFill$ = function $$DvtNBoxRenderer$$$$setFill$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (0 == $DvtNBoxKeyboardHandler$$.indexOf("linear-gradient")) {
      var $DvtNBoxEventManager$$ = $dvt$$5$$.$GradientParser$.$parseCSSGradient$($DvtNBoxKeyboardHandler$$);
      $DvtNBoxEventManager$$ && $DvtNBoxAutomation$$.$setFill$(new $dvt$$5$$.$LinearGradientFill$($DvtNBoxEventManager$$.$getAngle$(), $DvtNBoxEventManager$$.$_arColors$, $DvtNBoxEventManager$$.$_arAlphas$, $DvtNBoxEventManager$$.$_arRatios$));
    } else {
      $DvtNBoxAutomation$$.$setSolidFill$($DvtNBoxKeyboardHandler$$);
    }
  };
  $DvtNBoxRenderer$$.$_fixZOrder$ = function $$DvtNBoxRenderer$$$$_fixZOrder$$($dvt$$5$$) {
    var $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getLegend$($dvt$$5$$);
    $DvtNBoxAutomation$$ && $DvtNBoxAutomation$$.sections && ($dvt$$5$$ = $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$5$$, $DvtNBoxAutomation$$, "panelDrawer")) && $dvt$$5$$.getParent().$addChild$($dvt$$5$$);
  };
  $DvtNBoxRenderer$$.$getNodeOrderFunction$ = function $$DvtNBoxRenderer$$$$getNodeOrderFunction$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$);
    if ($DvtNBoxEventManager$$) {
      for (var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$).$getChildContainer$().$_container$, $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$.$getNumChildren$();$DvtNBoxDataAnimationHandler$$++) {
        $DvtNBoxKeyboardHandler$$.push($DvtNBoxEventManager$$.$getChildAt$($DvtNBoxDataAnimationHandler$$));
      }
    } else {
      for ($DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$) * $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxEventManager$$;$DvtNBoxDataAnimationHandler$$++) {
        var $DvtNBoxCategoryRolloverHandler$$ = [], $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$).$getChildContainer$();
        $DvtNBoxDrawer$$ instanceof $dvt$$5$$.$SimpleScrollableContainer$ && ($DvtNBoxDrawer$$ = $DvtNBoxDrawer$$.$_container$);
        for (var $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDrawer$$.$getNumChildren$();$DvtNBoxCategoryNode$$++) {
          $DvtNBoxCategoryRolloverHandler$$.push($DvtNBoxDrawer$$.$getChildAt$($DvtNBoxCategoryNode$$));
        }
        $DvtNBoxKeyboardHandler$$.push($DvtNBoxCategoryRolloverHandler$$);
      }
    }
    return function() {
      if ($DvtNBoxKeyboardHandler$$.length) {
        if ($DvtNBoxKeyboardHandler$$[0] && isNaN($DvtNBoxKeyboardHandler$$[0].length)) {
          var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDrawer$($DvtNBoxAutomation$$);
          if ($DvtNBoxEventManager$$) {
            for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$).$getChildContainer$().$_container$, $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxEventManager$$++) {
              $DvtNBoxDataAnimationHandler$$.$addChild$($DvtNBoxKeyboardHandler$$[$DvtNBoxEventManager$$]);
            }
          }
        } else {
          for ($DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxDataAnimationHandler$$++) {
            var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$], $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
            if ($DvtNBoxCategoryRolloverHandler$$.length && $DvtNBoxEventManager$$) {
              var $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$).$getChildContainer$();
              $DvtNBoxDrawer$$ instanceof $dvt$$5$$.$SimpleScrollableContainer$ && ($DvtNBoxDrawer$$ = $DvtNBoxDrawer$$.$_container$);
              for ($DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxCategoryRolloverHandler$$.length;$DvtNBoxEventManager$$++) {
                $DvtNBoxDrawer$$.$addChild$($DvtNBoxCategoryRolloverHandler$$[$DvtNBoxEventManager$$]);
              }
            }
          }
        }
      }
    };
  };
  var $DvtNBoxCellRenderer$$ = {};
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxCellRenderer$$, $dvt$$5$$.$Obj$);
  $DvtNBoxCellRenderer$$.$render$ = function $$DvtNBoxCellRenderer$$$$render$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDrawer$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.cellGap, $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.cellStartGap, $DvtNBoxCell$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.cellEndGap, $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.cellTopGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.cellBottomGap, $DvtNBoxNode$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($DvtNBoxAutomation$$), 
    $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$ROW$]), $DvtNBoxRenderer$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$]), $DvtNBoxNodeRenderer$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$, $DvtNBoxRenderer$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxEventManager$$.$setTranslate$($DvtNBoxNodeRenderer$$.x + $DvtNBoxDrawer$$ / 2, $DvtNBoxNodeRenderer$$.y + $DvtNBoxDrawer$$ / 2);
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDefaults$$ * $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$) + $DvtNBoxRenderer$$;
    $DvtNBoxDrawer$$ = new $dvt$$5$$.Rect($DvtNBoxAutomation$$.$getCtx$(), 0, 0, Math.max($DvtNBoxNodeRenderer$$.$w$ - $DvtNBoxDrawer$$, 0), Math.max($DvtNBoxNodeRenderer$$.$h$ - $DvtNBoxDrawer$$, 0));
    $DvtNBoxDrawer$$.$setPixelHinting$();
    $DvtNBoxDefaults$$ = $DvtNBoxStyleUtils$$.$getCellStyle$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxCellRenderer$$.$_applyStyleToRect$($DvtNBoxDrawer$$, $DvtNBoxDefaults$$);
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxDrawer$$);
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDrawer$$, "background");
    $DvtNBoxDefaults$$ = new $dvt$$5$$.$KeyboardFocusEffect$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxEventManager$$, new $dvt$$5$$.$Rectangle$(-1, -1, $DvtNBoxDrawer$$.getWidth() + 2, $DvtNBoxDrawer$$.getHeight() + 2));
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDefaults$$, "focusEffect");
    $DvtNBoxCellRenderer$$.$renderHeader$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, !1);
    $DvtNBoxDataAnimationHandler$$ = ($DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$isCellMaximized$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$)) ? $DvtNBoxNode$$.maximizedHeaderSize : $DvtNBoxNode$$.headerSize;
    $DvtNBoxNode$$ = $DvtNBoxDefaults$$ ? $DvtNBoxNode$$.maximizedLabelHeight : $DvtNBoxNode$$.labelHeight;
    $DvtNBoxDefaults$$ = $DvtNBoxDefaults$$ ? new $dvt$$5$$.$SimpleScrollableContainer$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxDrawer$$.getWidth(), $DvtNBoxDrawer$$.getHeight() - $DvtNBoxDataAnimationHandler$$) : new $dvt$$5$$.$Container$($DvtNBoxAutomation$$.$getCtx$());
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxDefaults$$);
    $DvtNBoxEventManager$$.$setChildContainer$($DvtNBoxDefaults$$);
    $DvtNBoxEventManager$$ = null;
    $DvtNBoxNode$$ ? ($DvtNBoxEventManager$$ = $DvtNBoxCellRenderer$$.$_isLabelVertical$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) ? new $dvt$$5$$.$Rectangle$($DvtNBoxDataAnimationHandler$$, $DvtNBoxNodeOverflow$$, $DvtNBoxDrawer$$.getWidth() - $DvtNBoxDataAnimationHandler$$ - $DvtNBoxCell$$, $DvtNBoxDrawer$$.getHeight() - $DvtNBoxNodeOverflow$$ - $DvtNBoxCategoryRolloverHandler$$) : new $dvt$$5$$.$Rectangle$($DvtNBoxCategoryNode$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxDrawer$$.getWidth() - 
    $DvtNBoxCategoryNode$$ - $DvtNBoxCell$$, $DvtNBoxDrawer$$.getHeight() - $DvtNBoxDataAnimationHandler$$ - $DvtNBoxCategoryRolloverHandler$$), $DvtNBoxDefaults$$ instanceof $dvt$$5$$.$SimpleScrollableContainer$ && $DvtNBoxDefaults$$.$setTranslate$(0, $DvtNBoxDataAnimationHandler$$)) : $DvtNBoxEventManager$$ = new $dvt$$5$$.$Rectangle$($DvtNBoxCategoryNode$$, $DvtNBoxNodeOverflow$$, $DvtNBoxDrawer$$.getWidth() - $DvtNBoxCategoryNode$$ - $DvtNBoxCell$$, $DvtNBoxDrawer$$.getHeight() - $DvtNBoxNodeOverflow$$ - 
    $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxEventManager$$.$w$ = Math.max($DvtNBoxEventManager$$.$w$, 0);
    $DvtNBoxEventManager$$.$h$ = Math.max($DvtNBoxEventManager$$.$h$, 0);
    $DvtNBoxKeyboardHandler$$.__childArea = $DvtNBoxEventManager$$;
  };
  $DvtNBoxCellRenderer$$.$renderHeader$ = function $$DvtNBoxCellRenderer$$$$renderHeader$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $dvt$$5$$.$NBoxConstants$.$LABEL$);
    $DvtNBoxCategoryRolloverHandler$$ && ($DvtNBoxCategoryRolloverHandler$$.getParent().removeChild($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, null, $dvt$$5$$.$NBoxConstants$.$LABEL$));
    if ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "countLabel")) {
      $DvtNBoxCategoryRolloverHandler$$.getParent().removeChild($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, null, "countLabel");
    }
    if ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "closeButton")) {
      $DvtNBoxCategoryRolloverHandler$$.getParent().removeChild($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, null, "closeButton");
    }
    if ($DvtNBoxKeyboardHandler$$) {
      var $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDrawer$$.__layout.countLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxDrawer$$.__layout.cellCloseGap, $DvtNBoxCell$$ = $DvtNBoxDrawer$$.__layout.cellStartGap, $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawer$$.__layout.cellEndGap, $DvtNBoxNode$$ = $DvtNBoxDrawer$$.__layout.cellTopGap, $DvtNBoxDefaults$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($DvtNBoxAutomation$$), $DvtNBoxNodeRenderer$$ = $DvtNBoxRenderer$$.$getCellCounts$($DvtNBoxAutomation$$), 
      $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "background"), $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$ROW$]), $c$$25_cellIndex$$7$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$]), $c$$25_cellIndex$$7$$ = $DvtNBoxDrawerRenderer$$ * $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$) + 
      $c$$25_cellIndex$$7$$, $DvtNBoxDrawerRenderer$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ = 0;
      if ($DvtNBoxDataUtils$$.$isCellMaximized$($DvtNBoxAutomation$$, $c$$25_cellIndex$$7$$)) {
        var $closeEna_closeEnaImg_countLabelY$$ = $DvtNBoxDrawer$$._resources.close_ena, $closeWidth_halign$$14$$ = $closeEna_closeEnaImg_countLabelY$$.width;
        $DvtNBoxCategoryNodeRenderer$$.getWidth() - $DvtNBoxCell$$ - $DvtNBoxNodeOverflow$$ > $closeWidth_halign$$14$$ && ($cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ = $DvtNBoxDrawer$$._resources.close_ovr, $DvtNBoxDrawer$$ = $DvtNBoxDrawer$$._resources.close_dwn, $closeEna_closeEnaImg_countLabelY$$ = new $dvt$$5$$.Image($DvtNBoxAutomation$$.$getCtx$(), $closeEna_closeEnaImg_countLabelY$$.src, 0, 0, $closeEna_closeEnaImg_countLabelY$$.width, $closeEna_closeEnaImg_countLabelY$$.height), 
        $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ = new $dvt$$5$$.Image($DvtNBoxAutomation$$.$getCtx$(), $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$.src, 0, 0, $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$.width, $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$.height), $DvtNBoxDrawer$$ = new $dvt$$5$$.Image($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxDrawer$$.src, 0, 0, $DvtNBoxDrawer$$.width, $DvtNBoxDrawer$$.height), $DvtNBoxDrawer$$ = new $dvt$$5$$.$Button$($DvtNBoxAutomation$$.$getCtx$(), 
        $closeEna_closeEnaImg_countLabelY$$, $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$, $DvtNBoxDrawer$$, null, null, $DvtNBoxEventManager$$.$handleDoubleClick$, $DvtNBoxEventManager$$), $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ = $DvtNBoxDrawerRenderer$$ ? Math.min(($DvtNBoxCategoryNodeRenderer$$.getWidth() - $closeWidth_halign$$14$$) / 2, $DvtNBoxNodeOverflow$$) : Math.max(($DvtNBoxCategoryNodeRenderer$$.getWidth() - $closeWidth_halign$$14$$) / 2, $DvtNBoxCategoryNodeRenderer$$.getWidth() - 
        $DvtNBoxNodeOverflow$$ - $closeWidth_halign$$14$$), $DvtNBoxDrawer$$.$setTranslate$($cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$, $DvtNBoxNode$$), $DvtNBoxEventManager$$.$addChild$($DvtNBoxDrawer$$), $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ = $closeWidth_halign$$14$$ + $DvtNBoxCategoryNode$$, $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDrawer$$, "closeButton"));
      }
      if ($DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL$]) {
        var $DvtNBoxCategoryNode$$ = $DvtNBoxDefaults$$.labelHeight, $skipLabel$$ = !1, $closeWidth_halign$$14$$ = $DvtNBoxStyleUtils$$.$getLabelHalign$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $countLabelWidthWithGap$$ = $DvtNBoxDrawer$$ = 0, $DvtNBoxDefaults$$ = null, $closeEna_closeEnaImg_countLabelY$$ = $DvtNBoxDrawer$$ = 0, $countText$$ = null, $showCount$$ = $DvtNBoxStyleUtils$$.$getCellShowCount$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
        $DvtNBoxDataAnimationHandler$$ || "off" == $showCount$$ || (($DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$).$getCountLabel$()) ? $countText$$ = $DvtNBoxDataAnimationHandler$$ : "on" == $showCount$$ && ($countText$$ = "" + $DvtNBoxNodeRenderer$$.total[$c$$25_cellIndex$$7$$], $DvtNBoxNodeRenderer$$.highlighted && ($countText$$ = $dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$NBOX_PREFIX$, "HIGHLIGHTED_COUNT", 
        [$DvtNBoxNodeRenderer$$.highlighted[$c$$25_cellIndex$$7$$], $countText$$]))));
        $DvtNBoxCellRenderer$$.$_isLabelVertical$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) ? ($countText$$ && ($DvtNBoxDefaults$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $countText$$, $DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($DvtNBoxAutomation$$), $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $dvt$$5$$.$TextUtils$.$fitText$($DvtNBoxDefaults$$, $DvtNBoxCategoryNodeRenderer$$.getHeight() - $DvtNBoxCell$$ - $DvtNBoxNodeOverflow$$, 
        $DvtNBoxCategoryNodeRenderer$$.getWidth() - 2 * $DvtNBoxNode$$, $DvtNBoxEventManager$$) ? ($DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDefaults$$, "countLabel"), $DvtNBoxDrawer$$ = $DvtNBoxDefaults$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = $DvtNBoxDrawer$$ + $DvtNBoxCategoryRolloverHandler$$, $closeEna_closeEnaImg_countLabelY$$ = $DvtNBoxCategoryNodeRenderer$$.getHeight() / 2, $DvtNBoxDrawer$$ = $DvtNBoxNode$$ + $DvtNBoxCategoryNode$$ / 
        2) : $skipLabel$$ = !0), $DvtNBoxDataAnimationHandler$$ = 0, $skipLabel$$ || ($DvtNBoxNodeRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getCellLabelStyle$($DvtNBoxAutomation$$, $c$$25_cellIndex$$7$$), $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $dvt$$5$$.$TextUtils$.$fitText$($DvtNBoxNodeRenderer$$, $DvtNBoxCategoryNodeRenderer$$.getHeight() - 
        $DvtNBoxCell$$ - $DvtNBoxNodeOverflow$$ - $countLabelWidthWithGap$$, $DvtNBoxCategoryNodeRenderer$$.getWidth() - 2 * $DvtNBoxNode$$, $DvtNBoxEventManager$$) && ($DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeRenderer$$, $dvt$$5$$.$NBoxConstants$.$LABEL$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxNodeRenderer$$.$getDimensions$().$w$, $DvtNBoxRenderer$$.$positionText$($DvtNBoxNodeRenderer$$, $DvtNBoxNode$$ + $DvtNBoxCategoryNode$$ / 2, ($DvtNBoxCategoryNodeRenderer$$.getHeight() + 
        $countLabelWidthWithGap$$) / 2, $DvtNBoxDrawerRenderer$$ ? Math.PI / 2 : -Math.PI / 2), $DvtNBoxDataAnimationHandler$$ = ($DvtNBoxDataAnimationHandler$$ + $DvtNBoxCategoryRolloverHandler$$) / 2)), $DvtNBoxDefaults$$ && $DvtNBoxRenderer$$.$positionText$($DvtNBoxDefaults$$, $DvtNBoxDrawer$$, $closeEna_closeEnaImg_countLabelY$$ - $DvtNBoxDataAnimationHandler$$, $DvtNBoxDrawerRenderer$$ ? Math.PI / 2 : -Math.PI / 2)) : ($countText$$ && ($DvtNBoxDefaults$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), 
        $countText$$, $DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($DvtNBoxAutomation$$), $closeWidth_halign$$14$$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $dvt$$5$$.$TextUtils$.$fitText$($DvtNBoxDefaults$$, $DvtNBoxCategoryNodeRenderer$$.getWidth() - $DvtNBoxCell$$ - $DvtNBoxNodeOverflow$$ - $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$, $DvtNBoxCategoryNodeRenderer$$.getHeight() - 2 * $DvtNBoxNode$$, $DvtNBoxEventManager$$) ? ($DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, 
        $DvtNBoxKeyboardHandler$$, $DvtNBoxDefaults$$, "countLabel"), $DvtNBoxDrawer$$ = $DvtNBoxDefaults$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = $DvtNBoxDrawer$$ + $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$ = $closeWidth_halign$$14$$ == $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$ ? $DvtNBoxCategoryNodeRenderer$$.getWidth() / 2 : $closeWidth_halign$$14$$ == $dvt$$5$$.$OutputText$.$H_ALIGN_RIGHT$ ? $DvtNBoxCategoryNodeRenderer$$.getWidth() - $DvtNBoxNodeOverflow$$ : $DvtNBoxCell$$, 
        $closeEna_closeEnaImg_countLabelY$$ = $DvtNBoxNode$$ + $DvtNBoxCategoryNode$$ / 2, $DvtNBoxRenderer$$.$positionText$($DvtNBoxDefaults$$, $DvtNBoxDrawer$$, $closeEna_closeEnaImg_countLabelY$$)) : $skipLabel$$ = !0), $DvtNBoxDataAnimationHandler$$ = 0, $skipLabel$$ || ($DvtNBoxNodeRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getCellLabelStyle$($DvtNBoxAutomation$$, $c$$25_cellIndex$$7$$), 
        $closeWidth_halign$$14$$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $dvt$$5$$.$TextUtils$.$fitText$($DvtNBoxNodeRenderer$$, $DvtNBoxCategoryNodeRenderer$$.getWidth() - $DvtNBoxCell$$ - $DvtNBoxNodeOverflow$$ - $cellCloseWidthWithGap_closeButtonX_closeOvr_closeOvrImg$$ - $countLabelWidthWithGap$$, $DvtNBoxCategoryNodeRenderer$$.getHeight() - 2 * $DvtNBoxNode$$, $DvtNBoxEventManager$$) && ($DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeRenderer$$, 
        $dvt$$5$$.$NBoxConstants$.$LABEL$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxNodeRenderer$$.$getDimensions$().$w$, $closeWidth_halign$$14$$ == $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$ ? ($DvtNBoxCell$$ = ($DvtNBoxCategoryNodeRenderer$$.getWidth() - ($DvtNBoxDrawerRenderer$$ ? -1 : 1) * $countLabelWidthWithGap$$) / 2, $DvtNBoxDataAnimationHandler$$ = ($DvtNBoxDrawerRenderer$$ ? -1 : 1) * ($DvtNBoxDataAnimationHandler$$ + $DvtNBoxCategoryRolloverHandler$$) / 2) : $closeWidth_halign$$14$$ == 
        $dvt$$5$$.$OutputText$.$H_ALIGN_RIGHT$ ? ($DvtNBoxCell$$ = $DvtNBoxCategoryNodeRenderer$$.getWidth() - $DvtNBoxNodeOverflow$$ - ($DvtNBoxDrawerRenderer$$ ? 0 : 1) * $countLabelWidthWithGap$$, $DvtNBoxDataAnimationHandler$$ = ($DvtNBoxDrawerRenderer$$ ? -1 : 0) * ($DvtNBoxDataAnimationHandler$$ + $DvtNBoxCategoryRolloverHandler$$)) : ($DvtNBoxCell$$ += ($DvtNBoxDrawerRenderer$$ ? 1 : 0) * $countLabelWidthWithGap$$, $DvtNBoxDataAnimationHandler$$ = ($DvtNBoxDrawerRenderer$$ ? 0 : 1) * ($DvtNBoxDataAnimationHandler$$ + 
        $DvtNBoxCategoryRolloverHandler$$)), $DvtNBoxRenderer$$.$positionText$($DvtNBoxNodeRenderer$$, $DvtNBoxCell$$, $DvtNBoxNode$$ + $DvtNBoxCategoryNode$$ / 2))), $DvtNBoxDefaults$$ && $DvtNBoxDataAnimationHandler$$ && $DvtNBoxRenderer$$.$positionText$($DvtNBoxDefaults$$, $DvtNBoxDrawer$$ + $DvtNBoxDataAnimationHandler$$, $closeEna_closeEnaImg_countLabelY$$));
      }
    }
    $DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
  };
  $DvtNBoxCellRenderer$$.$renderBodyCountLabels$ = function $$DvtNBoxCellRenderer$$$$renderBodyCountLabels$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.cellTopGap, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.cellStartGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = $DvtNBoxRenderer$$.$getCellCounts$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = Number.MAX_VALUE, $DvtNBoxCell$$ = !1, $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[0]), 
    $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $dvt$$5$$.$NBoxConstants$.$LABEL$), $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, "countLabel"), $DvtNBoxNodeRenderer$$ = $DvtNBoxNode$$ && $DvtNBoxNode$$.$getCSSStyle$() ? $DvtNBoxNode$$.$getCSSStyle$().$getFontSize$() : null, $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDefaults$$ && $DvtNBoxDefaults$$.$getCSSStyle$() ? $DvtNBoxDefaults$$.$getCSSStyle$().$getFontSize$() : 
    null, $DvtNBoxNodeRenderer$$ = isNaN($DvtNBoxNodeRenderer$$) ? parseFloat($DvtNBoxNodeRenderer$$) : $DvtNBoxNodeRenderer$$, $DvtNBoxCategoryNodeRenderer$$ = isNaN($DvtNBoxCategoryNodeRenderer$$) ? parseFloat($DvtNBoxCategoryNodeRenderer$$) : $DvtNBoxCategoryNodeRenderer$$;
    isNaN($DvtNBoxNodeRenderer$$) && isNaN($DvtNBoxCategoryNodeRenderer$$) || ($DvtNBoxCategoryNode$$ = isNaN($DvtNBoxNodeRenderer$$) ? $DvtNBoxCategoryNodeRenderer$$ : isNaN($DvtNBoxCategoryNodeRenderer$$) ? $DvtNBoxNodeRenderer$$ : Math.max($DvtNBoxNodeRenderer$$, $DvtNBoxCategoryNodeRenderer$$));
    for (var $DvtNBoxNodeRenderer$$ = [], $DvtNBoxCategoryNodeRenderer$$ = [], $DvtNBoxDrawerRenderer$$ = 0;$DvtNBoxDrawerRenderer$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxDrawerRenderer$$++) {
      $DvtNBoxNodeOverflow$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawerRenderer$$], $DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$) ? $DvtNBoxCategoryNodeRenderer$$.push($DvtNBoxNodeOverflow$$) : $DvtNBoxNodeRenderer$$.push($DvtNBoxNodeOverflow$$);
    }
    for (var $maximizedLabels$$ = [], $minimizedLabels$$ = [], $DvtNBoxDrawerRenderer$$ = 0;$DvtNBoxDrawerRenderer$$ < $DvtNBoxNodeRenderer$$.length;$DvtNBoxDrawerRenderer$$++) {
      $DvtNBoxNodeOverflow$$ = $DvtNBoxNodeRenderer$$[$DvtNBoxDrawerRenderer$$], $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawer$$.total[$DvtNBoxNodeOverflow$$], $maximizedLabels$$[$DvtNBoxDrawerRenderer$$] = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), "" + $DvtNBoxNodeOverflow$$, $DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($DvtNBoxAutomation$$), $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$);
    }
    for ($DvtNBoxDrawerRenderer$$ = 0;$DvtNBoxDrawerRenderer$$ < $DvtNBoxCategoryNodeRenderer$$.length;$DvtNBoxDrawerRenderer$$++) {
      $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryNodeRenderer$$[$DvtNBoxDrawerRenderer$$], $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawer$$.total[$DvtNBoxNodeOverflow$$], $minimizedLabels$$[$DvtNBoxDrawerRenderer$$] = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), "" + $DvtNBoxNodeOverflow$$, $DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($DvtNBoxAutomation$$), $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$);
    }
    $DvtNBoxDrawer$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($DvtNBoxAutomation$$, $DvtNBoxNodeRenderer$$, $maximizedLabels$$);
    if ($DvtNBoxDrawer$$ <= $DvtNBoxCategoryNode$$ || $DvtNBoxDefaults$$ && !$DvtNBoxNode$$) {
      $DvtNBoxCell$$ = !0;
    }
    var $minimizedFontSize$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$, $minimizedLabels$$);
    if ($minimizedFontSize$$ <= $DvtNBoxCategoryNode$$ || $DvtNBoxDefaults$$ && !$DvtNBoxNode$$) {
      $DvtNBoxCell$$ = !0;
    }
    if ($DvtNBoxCell$$) {
      for ($DvtNBoxDrawerRenderer$$ = 0;$DvtNBoxDrawerRenderer$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxDrawerRenderer$$++) {
        $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$DvtNBoxDrawerRenderer$$]), $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $dvt$$5$$.$NBoxConstants$.$LABEL$), $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, "countLabel"), $DvtNBoxCategoryNode$$ = $DvtNBoxNodeOverflow$$.__childArea, $DvtNBoxDrawer$$ = !1, $DvtNBoxNode$$ && ($DvtNBoxNode$$.getParent().removeChild($DvtNBoxNode$$), 
        $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, null, $dvt$$5$$.$NBoxConstants$.$LABEL$), $DvtNBoxDrawer$$ = !0), $DvtNBoxDefaults$$ && ($DvtNBoxDefaults$$.getParent().removeChild($DvtNBoxDefaults$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, null, "countLabel"), $DvtNBoxDrawer$$ = !0), $DvtNBoxDrawer$$ && ($DvtNBoxCellRenderer$$.$_isLabelVertical$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$) ? ($DvtNBoxCategoryNode$$.x -= 
        $DvtNBoxCategoryRolloverHandler$$.headerSize - $DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryNode$$.$w$ += $DvtNBoxCategoryRolloverHandler$$.headerSize - $DvtNBoxDataAnimationHandler$$) : ($DvtNBoxCategoryNode$$.y -= $DvtNBoxCategoryRolloverHandler$$.headerSize - $DvtNBoxEventManager$$, $DvtNBoxCategoryNode$$.$h$ += $DvtNBoxCategoryRolloverHandler$$.headerSize - $DvtNBoxEventManager$$), $DvtNBoxNodeOverflow$$.__childArea = $DvtNBoxCategoryNode$$);
      }
      $DvtNBoxDrawer$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($DvtNBoxAutomation$$, $DvtNBoxNodeRenderer$$, $maximizedLabels$$);
      $minimizedFontSize$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$, $minimizedLabels$$);
    }
    for ($DvtNBoxDrawerRenderer$$ = 0;$DvtNBoxDrawerRenderer$$ < $DvtNBoxNodeRenderer$$.length;$DvtNBoxDrawerRenderer$$++) {
      $DvtNBoxNodeOverflow$$ = $DvtNBoxNodeRenderer$$[$DvtNBoxDrawerRenderer$$], $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxCategoryNode$$ = $DvtNBoxNodeOverflow$$.__childArea, $maximizedLabels$$[$DvtNBoxDrawerRenderer$$].$setFontSize$($DvtNBoxDrawer$$), $dvt$$5$$.$TextUtils$.$fitText$($maximizedLabels$$[$DvtNBoxDrawerRenderer$$], 
      $DvtNBoxCategoryNode$$.$w$, $DvtNBoxCategoryNode$$.$h$, $DvtNBoxEventManager$$) && ($DvtNBoxCell$$ || $DvtNBoxCellRenderer$$.$renderHeader$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$, !0), $DvtNBoxRenderer$$.$positionText$($maximizedLabels$$[$DvtNBoxDrawerRenderer$$], $DvtNBoxCategoryNode$$.x + $DvtNBoxCategoryNode$$.$w$ / 2, $DvtNBoxCategoryNode$$.y + $DvtNBoxCategoryNode$$.$h$ / 2));
    }
    for ($DvtNBoxDrawerRenderer$$ = 0;$DvtNBoxDrawerRenderer$$ < $DvtNBoxCategoryNodeRenderer$$.length;$DvtNBoxDrawerRenderer$$++) {
      $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryNodeRenderer$$[$DvtNBoxDrawerRenderer$$], $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxCategoryNode$$ = $DvtNBoxNodeOverflow$$.__childArea, $minimizedLabels$$[$DvtNBoxDrawerRenderer$$].$setFontSize$($minimizedFontSize$$), $dvt$$5$$.$TextUtils$.$fitText$($minimizedLabels$$[$DvtNBoxDrawerRenderer$$], 
      $DvtNBoxCategoryNode$$.$w$, $DvtNBoxCategoryNode$$.$h$, $DvtNBoxEventManager$$) && ($DvtNBoxCell$$ || $DvtNBoxCellRenderer$$.$renderHeader$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$, !0), $DvtNBoxRenderer$$.$positionText$($minimizedLabels$$[$DvtNBoxDrawerRenderer$$], $DvtNBoxCategoryNode$$.x + $DvtNBoxCategoryNode$$.$w$ / 2, $DvtNBoxCategoryNode$$.y + $DvtNBoxCategoryNode$$.$h$ / 2));
    }
  };
  $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$ = function $$DvtNBoxCellRenderer$$$$getBodyCountLabelsFontSize$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    for (var $DvtNBoxEventManager$$ = Number.MAX_VALUE, $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxAutomation$$.length;$DvtNBoxDataAnimationHandler$$++) {
      var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getCell$($dvt$$5$$, $DvtNBoxAutomation$$[$DvtNBoxDataAnimationHandler$$]).__childArea, $DvtNBoxEventManager$$ = Math.min($DvtNBoxEventManager$$, $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$].$getOptimalFontSize$($DvtNBoxCategoryRolloverHandler$$))
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxCellRenderer$$.$_isLabelVertical$ = function $$DvtNBoxCellRenderer$$$$_isLabelVertical$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$);
    return !$DvtNBoxEventManager$$ || $DvtNBoxEventManager$$ == $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$] || $DvtNBoxDataAnimationHandler$$ && $DvtNBoxDataAnimationHandler$$ != $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$ROW$] ? !1 : !0;
  };
  $DvtNBoxCellRenderer$$.$getCellDimensions$ = function $$DvtNBoxCellRenderer$$$$getCellDimensions$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.cellGap, $DvtNBoxDrawer$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxDrawer$$ = $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxDrawer$$.minimumCellSize, $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), 
    $DvtNBoxNodeOverflow$$ = $DvtNBoxRenderer$$.$getRowDimensions$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxNode$$ = $DvtNBoxRenderer$$.$getColumnDimensions$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxNodeRenderer$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxNode$$.x, 
    $DvtNBoxDrawerRenderer$$ = $DvtNBoxNodeOverflow$$.y, $DvtNBoxNode$$ = $DvtNBoxNode$$.$w$, $DvtNBoxNodeOverflow$$ = $DvtNBoxNodeOverflow$$.$h$, $DvtNBoxStyleUtils$$ = !0;
    $DvtNBoxDefaults$$ && ($DvtNBoxDrawerRenderer$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$), $DvtNBoxDefaults$$ = Math.min($DvtNBoxDataAnimationHandler$$.$h$ / (3 * ($DvtNBoxCell$$ - 1)), $DvtNBoxDrawer$$), $DvtNBoxKeyboardHandler$$ < $DvtNBoxDrawerRenderer$$ ? ($DvtNBoxDrawerRenderer$$ = $DvtNBoxDataAnimationHandler$$.y + $DvtNBoxDataAnimationHandler$$.$h$ - ($DvtNBoxKeyboardHandler$$ + 1) * $DvtNBoxDefaults$$, $DvtNBoxNodeOverflow$$ = $DvtNBoxDefaults$$, $DvtNBoxStyleUtils$$ = 
    !1) : $DvtNBoxKeyboardHandler$$ == $DvtNBoxDrawerRenderer$$ ? ($DvtNBoxDrawerRenderer$$ = $DvtNBoxDataAnimationHandler$$.y + ($DvtNBoxCell$$ - $DvtNBoxKeyboardHandler$$ - 1) * $DvtNBoxDefaults$$, $DvtNBoxNodeOverflow$$ = $DvtNBoxDataAnimationHandler$$.$h$ - ($DvtNBoxCell$$ - 1) * $DvtNBoxDefaults$$) : ($DvtNBoxDrawerRenderer$$ = $DvtNBoxDataAnimationHandler$$.y + ($DvtNBoxCell$$ - $DvtNBoxKeyboardHandler$$ - 1) * $DvtNBoxDefaults$$, $DvtNBoxNodeOverflow$$ = $DvtNBoxDefaults$$, $DvtNBoxStyleUtils$$ = 
    !1));
    $DvtNBoxNodeRenderer$$ && $DvtNBoxStyleUtils$$ && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxNodeRenderer$$), $DvtNBoxKeyboardHandler$$ = Math.min($DvtNBoxDataAnimationHandler$$.$w$ / (3 * ($DvtNBoxCategoryRolloverHandler$$ - 1)), $DvtNBoxDrawer$$), $DvtNBoxEventManager$$ < $DvtNBoxAutomation$$ ? ($DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataAnimationHandler$$.x + ($DvtNBoxCategoryNode$$ ? $DvtNBoxDataAnimationHandler$$.$w$ - 
    $DvtNBoxKeyboardHandler$$ : 0) + ($DvtNBoxCategoryNode$$ ? -1 : 1) * $DvtNBoxEventManager$$ * $DvtNBoxKeyboardHandler$$) : $DvtNBoxEventManager$$ == $DvtNBoxAutomation$$ ? ($DvtNBoxNode$$ = $DvtNBoxDataAnimationHandler$$.$w$ - ($DvtNBoxCategoryRolloverHandler$$ - 1) * $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataAnimationHandler$$.x + ($DvtNBoxCategoryNode$$ ? $DvtNBoxDataAnimationHandler$$.$w$ - $DvtNBoxNode$$ : 0) + ($DvtNBoxCategoryNode$$ ? -1 : 1) * $DvtNBoxEventManager$$ * 
    $DvtNBoxKeyboardHandler$$) : ($DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataAnimationHandler$$.x + ($DvtNBoxCategoryNode$$ ? -$DvtNBoxKeyboardHandler$$ : $DvtNBoxDataAnimationHandler$$.$w$) + ($DvtNBoxCategoryNode$$ ? 1 : -1) * ($DvtNBoxCategoryRolloverHandler$$ - $DvtNBoxEventManager$$) * $DvtNBoxKeyboardHandler$$));
    return new $dvt$$5$$.$Rectangle$($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxDrawerRenderer$$, $DvtNBoxNode$$, $DvtNBoxNodeOverflow$$);
  };
  $DvtNBoxCellRenderer$$.$getCellLayout$ = function $$DvtNBoxCellRenderer$$$$getCellLayout$$($dvt$$5$$) {
    return $dvt$$5$$.$getOptions$().__layout.__cellLayout || $DvtNBoxCellRenderer$$.$_calculateCellLayout$($dvt$$5$$);
  };
  $DvtNBoxCellRenderer$$.$_calculateCellLayout$ = function $$DvtNBoxCellRenderer$$$$_calculateCellLayout$$($DvtNBoxAutomation$$) {
    for (var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxEventManager$$ = $DvtNBoxRenderer$$.$getCellCounts$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.__layout.cellTopGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$.__layout.cellBottomGap, $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$.__layout.cellLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.__layout.minimumCellSize, $DvtNBoxCell$$ = 0, $DvtNBoxNodeOverflow$$ = 
    0, $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$) * $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $DvtNBoxDefaults$$ = 0;$DvtNBoxDefaults$$ < $DvtNBoxNode$$;$DvtNBoxDefaults$$++) {
      var $DvtNBoxCellRenderer$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$);
      if ($DvtNBoxCellRenderer$$ && $DvtNBoxCellRenderer$$[$dvt$$5$$.$NBoxConstants$.$LABEL$]) {
        var $DvtNBoxNodeRenderer$$ = $DvtNBoxCellRenderer$$[$dvt$$5$$.$NBoxConstants$.$LABEL_HALIGN$], $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCellRenderer$$[$dvt$$5$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getCellLabelStyle$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$), $DvtNBoxNodeRenderer$$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $DvtNBoxCategoryNodeRenderer$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($DvtNBoxCategoryNodeRenderer$$).$h$;
        "on" == $DvtNBoxStyleUtils$$.$getCellShowCount$($DvtNBoxAutomation$$, $DvtNBoxCellRenderer$$) && ($DvtNBoxCellRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxEventManager$$.total[$DvtNBoxDefaults$$], $DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($DvtNBoxAutomation$$), $DvtNBoxNodeRenderer$$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $DvtNBoxCellRenderer$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($DvtNBoxCellRenderer$$).$h$, $DvtNBoxCategoryNodeRenderer$$ = 
        Math.max($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxCellRenderer$$));
        $DvtNBoxCell$$ = Math.max($DvtNBoxCell$$, $DvtNBoxCategoryNodeRenderer$$);
      }
    }
    $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$) && $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$) && ($DvtNBoxNodeOverflow$$ = Math.max($DvtNBoxCell$$, $DvtNBoxKeyboardHandler$$._resources.close_ena.height));
    $DvtNBoxCategoryNode$$ = Math.max($DvtNBoxCell$$ + $DvtNBoxDataAnimationHandler$$ + $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryNode$$);
    $DvtNBoxAutomation$$ = {labelHeight:$DvtNBoxCell$$, headerSize:$DvtNBoxCell$$ + $DvtNBoxDataAnimationHandler$$ + $DvtNBoxDrawer$$, maximizedLabelHeight:$DvtNBoxNodeOverflow$$, maximizedHeaderSize:$DvtNBoxNodeOverflow$$ + $DvtNBoxDataAnimationHandler$$ + $DvtNBoxDrawer$$, minimumCellSize:$DvtNBoxCategoryNode$$};
    return $DvtNBoxKeyboardHandler$$.__layout.__cellLayout = $DvtNBoxAutomation$$;
  };
  $DvtNBoxCellRenderer$$.$animateUpdate$ = function $$DvtNBoxCellRenderer$$$$animateUpdate$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$CustomAnimation$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxEventManager$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxCell$$ = $DvtNBoxEventManager$$.$getChildContainer$(), $DvtNBoxNodeOverflow$$ = $DvtNBoxCell$$.$getMatrix$();
    $DvtNBoxCell$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$));
    var $DvtNBoxNode$$ = $DvtNBoxEventManager$$.getParent();
    $DvtNBoxNode$$.$addChildAt$($DvtNBoxCell$$, $DvtNBoxNode$$.$getChildIndex$($DvtNBoxEventManager$$) + 1);
    var $DvtNBoxNode$$ = $DvtNBoxEventManager$$.$getTranslateX$(), $DvtNBoxDefaults$$ = $DvtNBoxEventManager$$.$getTranslateY$();
    $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_MATRIX$, $DvtNBoxEventManager$$, $DvtNBoxEventManager$$.$getMatrix$, $DvtNBoxEventManager$$.$setMatrix$, $DvtNBoxEventManager$$.$getMatrix$());
    $DvtNBoxEventManager$$.$setMatrix$($DvtNBoxKeyboardHandler$$.$getMatrix$());
    var $DvtNBoxNodeRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$.getData(), "background"), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxEventManager$$.getData(), "background"), $DvtNBoxDrawerRenderer$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxDrawer$$.$getCtx$()) ? 0 : $DvtNBoxCategoryNodeRenderer$$.getWidth() - $DvtNBoxNodeRenderer$$.getWidth();
    $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_FILL$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxCategoryNodeRenderer$$.$getFill$, $DvtNBoxCategoryNodeRenderer$$.$setFill$, $DvtNBoxCategoryNodeRenderer$$.$getFill$());
    $DvtNBoxCategoryNodeRenderer$$.$setFill$($DvtNBoxNodeRenderer$$.$getFill$());
    $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxCategoryNodeRenderer$$.getWidth, $DvtNBoxCategoryNodeRenderer$$.$setWidth$, $DvtNBoxCategoryNodeRenderer$$.getWidth());
    $DvtNBoxCategoryNodeRenderer$$.$setWidth$($DvtNBoxNodeRenderer$$.getWidth());
    $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxCategoryNodeRenderer$$.getHeight, $DvtNBoxCategoryNodeRenderer$$.$setHeight$, $DvtNBoxCategoryNodeRenderer$$.getHeight());
    $DvtNBoxCategoryNodeRenderer$$.$setHeight$($DvtNBoxNodeRenderer$$.getHeight());
    $DvtNBoxEventManager$$.$isShowingKeyboardFocusEffect$() && ($DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxEventManager$$.getData(), "focusEffect").$getEffect$()) && ($DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxCategoryNodeRenderer$$.getWidth, $DvtNBoxCategoryNodeRenderer$$.$setWidth$, $DvtNBoxCategoryNodeRenderer$$.getWidth()), $DvtNBoxCategoryNodeRenderer$$.$setWidth$($DvtNBoxNodeRenderer$$.getWidth() + 
    2), $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxCategoryNodeRenderer$$.getHeight, $DvtNBoxCategoryNodeRenderer$$.$setHeight$, $DvtNBoxCategoryNodeRenderer$$.getHeight()), $DvtNBoxCategoryNodeRenderer$$.$setHeight$($DvtNBoxNodeRenderer$$.getHeight() + 2));
    $DvtNBoxCellRenderer$$.$_animateLabels$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, "countLabel");
    $DvtNBoxCellRenderer$$.$_animateLabels$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$5$$.$NBoxConstants$.$LABEL$);
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$.getData(), "closeButton");
    $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxEventManager$$.getData(), "closeButton");
    $DvtNBoxKeyboardHandler$$ ? $DvtNBoxCategoryRolloverHandler$$ ? ($DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_MATRIX$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryRolloverHandler$$.$getMatrix$, $DvtNBoxCategoryRolloverHandler$$.$setMatrix$, $DvtNBoxCategoryRolloverHandler$$.$getMatrix$()), $DvtNBoxCategoryRolloverHandler$$.$setMatrix$($DvtNBoxKeyboardHandler$$.$getMatrix$())) : ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$), 
    $DvtNBoxKeyboardHandler$$.$setTranslate$($DvtNBoxKeyboardHandler$$.$getTranslateX$() + $DvtNBoxDrawerRenderer$$ + $DvtNBoxNode$$, $DvtNBoxKeyboardHandler$$.$getTranslateY$() + $DvtNBoxDefaults$$), $DvtNBoxAutomation$$.add(new $dvt$$5$$.$AnimFadeOut$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$), $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_MATRIX$, $DvtNBoxKeyboardHandler$$, 
    $DvtNBoxKeyboardHandler$$.$getMatrix$, $DvtNBoxKeyboardHandler$$.$setMatrix$, $DvtNBoxKeyboardHandler$$.$getMatrix$()), $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxDrawer$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$)) : $DvtNBoxCategoryRolloverHandler$$ && ($DvtNBoxAutomation$$.add(new $dvt$$5$$.$AnimFadeIn$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$), 
    $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_MATRIX$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryRolloverHandler$$.$getMatrix$, $DvtNBoxCategoryRolloverHandler$$.$setMatrix$, $DvtNBoxCategoryRolloverHandler$$.$getMatrix$()), $DvtNBoxCategoryRolloverHandler$$.$setTranslate$($DvtNBoxCategoryRolloverHandler$$.$getTranslateX$() - $DvtNBoxDrawerRenderer$$, $DvtNBoxCategoryRolloverHandler$$.$getTranslateY$()), $DvtNBoxCategoryRolloverHandler$$.$setAlpha$(0));
    $dvt$$5$$.$Playable$.$appendOnEnd$($DvtNBoxCategoryNode$$, function() {
      $DvtNBoxEventManager$$.$addChild$($DvtNBoxCell$$);
      $DvtNBoxCell$$.$setMatrix$($DvtNBoxNodeOverflow$$);
    });
    $DvtNBoxAutomation$$.add($DvtNBoxCategoryNode$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
  };
  $DvtNBoxCellRenderer$$.$_animateLabels$ = function $$DvtNBoxCellRenderer$$$$_animateLabels$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxCategoryRolloverHandler$$) {
    var $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxCategoryNode$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$.getData(), $DvtNBoxCategoryRolloverHandler$$), $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryNode$$, $DvtNBoxEventManager$$.getData(), $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxCellRenderer$$.$_isLabelVertical$($DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$.getData());
    $DvtNBoxDrawer$$ = $DvtNBoxCellRenderer$$.$_isLabelVertical$($DvtNBoxCategoryNode$$, $DvtNBoxEventManager$$.getData());
    if ($DvtNBoxCell$$ || $DvtNBoxNodeOverflow$$) {
      if ($DvtNBoxCell$$ && $DvtNBoxNodeOverflow$$ && $DvtNBoxKeyboardHandler$$ == $DvtNBoxDrawer$$) {
        $DvtNBoxKeyboardHandler$$ = new $dvt$$5$$.$CustomAnimation$($DvtNBoxCategoryNode$$.$getCtx$(), $DvtNBoxNodeOverflow$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
        var $DvtNBoxDrawer$$ = $DvtNBoxCell$$.$getHorizAlignment$(), $DvtNBoxNode$$ = $DvtNBoxNodeOverflow$$.$getHorizAlignment$(), $DvtNBoxDrawer$$ = (("left" == $DvtNBoxNode$$ ? -1 : "center" == $DvtNBoxNode$$ ? 0 : 1) - ("left" == $DvtNBoxDrawer$$ ? -1 : "center" == $DvtNBoxDrawer$$ ? 0 : 1)) * $DvtNBoxNodeOverflow$$.$measureDimensions$().$w$ / 2;
        $DvtNBoxKeyboardHandler$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxNodeOverflow$$, $DvtNBoxNodeOverflow$$.$getX$, $DvtNBoxNodeOverflow$$.$setX$, $DvtNBoxNodeOverflow$$.$getX$());
        $DvtNBoxNodeOverflow$$.$setX$($DvtNBoxCell$$.$getX$() + $DvtNBoxDrawer$$);
        $DvtNBoxKeyboardHandler$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxNodeOverflow$$, $DvtNBoxNodeOverflow$$.$getY$, $DvtNBoxNodeOverflow$$.$setY$, $DvtNBoxNodeOverflow$$.$getY$());
        $DvtNBoxNodeOverflow$$.$setY$($DvtNBoxCell$$.$getY$());
        $DvtNBoxKeyboardHandler$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_MATRIX$, $DvtNBoxNodeOverflow$$, $DvtNBoxNodeOverflow$$.$getMatrix$, $DvtNBoxNodeOverflow$$.$setMatrix$, $DvtNBoxNodeOverflow$$.$getMatrix$());
        $DvtNBoxNodeOverflow$$.$setMatrix$($DvtNBoxCell$$.$getMatrix$());
        $DvtNBoxAutomation$$.add($DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
        "countLabel" == $DvtNBoxCategoryRolloverHandler$$ && $DvtNBoxCell$$.$getTextString$() != $DvtNBoxNodeOverflow$$.$getTextString$() && ($DvtNBoxNodeOverflow$$.$setAlpha$(0), $DvtNBoxEventManager$$.$addChild$($DvtNBoxCell$$), $DvtNBoxEventManager$$ = new $dvt$$5$$.$AnimFadeOut$($DvtNBoxCategoryNode$$.$getCtx$(), $DvtNBoxCell$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxNodeOverflow$$ = new $dvt$$5$$.$AnimFadeIn$($DvtNBoxCategoryNode$$.$getCtx$(), $DvtNBoxNodeOverflow$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), 
        $DvtNBoxAutomation$$.add($DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$), $DvtNBoxAutomation$$.add($DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$.$INSERT$), $dvt$$5$$.$Playable$.$appendOnEnd$($DvtNBoxEventManager$$, function() {
          $DvtNBoxCategoryNode$$.$_deleteContainer$.$addChild$($DvtNBoxCell$$);
        }));
      } else {
        $DvtNBoxCell$$ && ($DvtNBoxCell$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$)), $DvtNBoxCategoryNode$$.$_deleteContainer$.$addChild$($DvtNBoxCell$$), $DvtNBoxAutomation$$.add(new $dvt$$5$$.$AnimFadeOut$($DvtNBoxCategoryNode$$.$getCtx$(), $DvtNBoxCell$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$)), $DvtNBoxNodeOverflow$$ && ($DvtNBoxNodeOverflow$$.$setAlpha$(0), $DvtNBoxAutomation$$.add(new $dvt$$5$$.$AnimFadeIn$($DvtNBoxCategoryNode$$.$getCtx$(), 
        $DvtNBoxNodeOverflow$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$));
      }
    }
  };
  $DvtNBoxCellRenderer$$.$animateDelete$ = function $$DvtNBoxCellRenderer$$$$animateDelete$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$.$getChildContainer$();
    if ($DvtNBoxCategoryRolloverHandler$$) {
      var $DvtNBoxDrawer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.getParent();
      $DvtNBoxCategoryNode$$.$addChildAt$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryNode$$.$getChildIndex$($DvtNBoxKeyboardHandler$$) + 1);
      $DvtNBoxCategoryRolloverHandler$$.$setMatrix$($DvtNBoxDrawer$$);
    }
    $DvtNBoxEventManager$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$);
    $DvtNBoxAutomation$$.add(new $dvt$$5$$.$AnimFadeOut$($DvtNBoxEventManager$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$);
  };
  $DvtNBoxCellRenderer$$.$animateInsert$ = function $$DvtNBoxCellRenderer$$$$animateInsert$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$.$getChildContainer$(), $DvtNBoxDrawer$$ = null;
    if ($DvtNBoxCategoryRolloverHandler$$) {
      var $DvtNBoxDrawer$$ = $DvtNBoxCategoryRolloverHandler$$.$getMatrix$(), $DvtNBoxCategoryNode$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$), $DvtNBoxCell$$ = $DvtNBoxKeyboardHandler$$.getParent();
      $DvtNBoxCell$$.$addChildAt$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$.$getChildIndex$($DvtNBoxKeyboardHandler$$) + 1);
      $DvtNBoxCategoryRolloverHandler$$.$setMatrix$($DvtNBoxCategoryNode$$);
    }
    $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
    $DvtNBoxEventManager$$ = new $dvt$$5$$.$AnimFadeIn$($DvtNBoxEventManager$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxCategoryRolloverHandler$$ && $dvt$$5$$.$Playable$.$appendOnEnd$($DvtNBoxEventManager$$, function() {
      $DvtNBoxKeyboardHandler$$.$addChild$($DvtNBoxCategoryRolloverHandler$$);
      $DvtNBoxCategoryRolloverHandler$$.$setMatrix$($DvtNBoxDrawer$$);
    });
    $DvtNBoxAutomation$$.add($DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
  };
  $DvtNBoxCellRenderer$$.$renderDropSiteFeedback$ = function $$DvtNBoxCellRenderer$$$$renderDropSiteFeedback$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$.getData(), "background"), $DvtNBoxDataAnimationHandler$$ = new $dvt$$5$$.Rect($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxEventManager$$.$getX$(), $DvtNBoxEventManager$$.$getY$(), $DvtNBoxEventManager$$.getWidth(), $DvtNBoxEventManager$$.getHeight());
    $DvtNBoxDataAnimationHandler$$.$setPixelHinting$();
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxStyleUtils$$.$getCellDropTargetStyle$($DvtNBoxAutomation$$);
    $DvtNBoxCellRenderer$$.$_applyStyleToRect$($DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxKeyboardHandler$$.$addChildAt$($DvtNBoxDataAnimationHandler$$, $DvtNBoxKeyboardHandler$$.$getChildIndex$($DvtNBoxEventManager$$) + 1);
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxCellRenderer$$.$_applyStyleToRect$ = function $$DvtNBoxCellRenderer$$$$_applyStyleToRect$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getStyle$($dvt$$5$$.$CSSStyle$.$BACKGROUND$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.$getStyle$($dvt$$5$$.$CSSStyle$.$BACKGROUND_COLOR$);
    ($DvtNBoxEventManager$$ = $DvtNBoxEventManager$$ ? $DvtNBoxEventManager$$ : $DvtNBoxDataAnimationHandler$$) && $DvtNBoxRenderer$$.$setFill$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$);
    "solid" == $DvtNBoxKeyboardHandler$$.$getStyle$($dvt$$5$$.$CSSStyle$.$BORDER_STYLE$) && ($DvtNBoxEventManager$$ = ($DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getStyle$($dvt$$5$$.$CSSStyle$.$BORDER_COLOR$)) ? $DvtNBoxEventManager$$ : "#000000", $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.$getStyle$($dvt$$5$$.$CSSStyle$.$BORDER_WIDTH$), $DvtNBoxDataAnimationHandler$$ = null == $DvtNBoxDataAnimationHandler$$ ? 1 : parseFloat($DvtNBoxDataAnimationHandler$$), $DvtNBoxAutomation$$.$setSolidStroke$($DvtNBoxEventManager$$, 
    null, $DvtNBoxDataAnimationHandler$$));
  };
  $DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCellRenderer$$$$_addAccessibilityAttributes$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = $dvt$$5$$.$Agent$.$isTouchDevice$() ? $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "background") : $DvtNBoxEventManager$$;
    $DvtNBoxAutomation$$.$setAriaRole$("img");
    $dvt$$5$$.$Agent$.$deferAriaCreation$() || ($DvtNBoxEventManager$$ = $DvtNBoxEventManager$$.$getAriaLabel$()) && $DvtNBoxAutomation$$.$setAriaProperty$($dvt$$5$$.$NBoxConstants$.$LABEL$, $DvtNBoxEventManager$$);
  };
  var $DvtNBoxNodeRenderer$$ = {};
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxNodeRenderer$$, $dvt$$5$$.$Obj$);
  $DvtNBoxNodeRenderer$$.$_MIN_CORNER_RADIUS$ = 2.5;
  $DvtNBoxNodeRenderer$$.$_ASPECT_RATIO_SCALING$ = "xMidYMid slice";
  $DvtNBoxNodeRenderer$$.$render$ = function $$DvtNBoxNodeRenderer$$$$render$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxNodeRenderer$$.$_renderNodeBackground$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxNodeRenderer$$.$_renderNodeIndicator$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxNodeRenderer$$.$_renderNodeIcon$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxNodeRenderer$$.$_renderNodeLabels$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$($dvt$$5$$, $DvtNBoxKeyboardHandler$$);
    ($DvtNBoxAutomation$$ = $DvtNBoxKeyboardHandler$$.$getChildContainer$()) && $DvtNBoxNodeRenderer$$.$_clipIfNecessary$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxEventManager$$);
  };
  $DvtNBoxNodeRenderer$$.$calculateNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeLayout$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    for (var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$.__layout.gridGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxEventManager$$.__layout.nodeStartLabelGap, $DvtNBoxDrawer$$ = $DvtNBoxEventManager$$.__layout.nodeLabelOnlyStartLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxEventManager$$.__layout.nodeEndLabelGap, $DvtNBoxCell$$ = $DvtNBoxEventManager$$.__layout.nodeSwatchSize, $DvtNBoxNodeOverflow$$ = $DvtNBoxEventManager$$.__layout.maximumLabelWidth, 
    $DvtNBoxNode$$ = $DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($DvtNBoxAutomation$$), $DvtNBoxDefaults$$ = $DvtNBoxNode$$.nodeHeight, $DvtNBoxRenderer$$ = $DvtNBoxNode$$.indicatorSectionWidth, $DvtNBoxCellRenderer$$ = $DvtNBoxNode$$.iconSectionWidth, $DvtNBoxDrawer$$ = $DvtNBoxRenderer$$ || $DvtNBoxCellRenderer$$ ? $DvtNBoxCategoryRolloverHandler$$ : $DvtNBoxDrawer$$, $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, 0), $DvtNBoxDrawerRenderer$$ = $DvtNBoxDataUtils$$.$getIndicatorIcon$($DvtNBoxAutomation$$, 
    $DvtNBoxCategoryNodeRenderer$$), $icon$$40_widestLabel$$ = $DvtNBoxDataUtils$$.$getIcon$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $labelSectionWidth_rowCount$$9$$ = 0, $DvtNBoxCategoryRolloverHandler$$ = [], $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ = 0, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = 0, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), 
    $cellArea_ci$$3_maximizedColumn$$7$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$), $labelSectionWidth_rowCount$$9$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$), $columnCount$$9_label$$62_secondaryLabel$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$), $nodeCount$$8_r$$35$$ = 0;$nodeCount$$8_r$$35$$ < $labelSectionWidth_rowCount$$9$$;$nodeCount$$8_r$$35$$++) {
      for (var $c$$26_nodeCellIndex$$ = 0;$c$$26_nodeCellIndex$$ < $columnCount$$9_label$$62_secondaryLabel$$;$c$$26_nodeCellIndex$$++) {
        $DvtNBoxCategoryRolloverHandler$$.push({cellRows:0, cellColumns:0, overflow:!1});
      }
    }
    for (var $maximizedCellIndex$$1_nodeCounts$$ = [], $nodeCount$$8_r$$35$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$), $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ = 0;$cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ < $nodeCount$$8_r$$35$$;$cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$++) {
      var $cellIndex$$9_n$$22$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$);
      $DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxAutomation$$, $cellIndex$$9_n$$22$$) || ($c$$26_nodeCellIndex$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxAutomation$$, $cellIndex$$9_n$$22$$), isNaN($maximizedCellIndex$$1_nodeCounts$$[$c$$26_nodeCellIndex$$]) && ($maximizedCellIndex$$1_nodeCounts$$[$c$$26_nodeCellIndex$$] = 0), $maximizedCellIndex$$1_nodeCounts$$[$c$$26_nodeCellIndex$$]++);
    }
    if ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ && $cellArea_ci$$3_maximizedColumn$$7$$) {
      $maximizedCellIndex$$1_nodeCounts$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $cellArea_ci$$3_maximizedColumn$$7$$) + $columnCount$$9_label$$62_secondaryLabel$$ * $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$);
      $cellArea_ci$$3_maximizedColumn$$7$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $maximizedCellIndex$$1_nodeCounts$$).__childArea;
      $labelSectionWidth_rowCount$$9$$ = $DvtNBoxNode$$.labelSectionWidth;
      null == $labelSectionWidth_rowCount$$9$$ && ("ifRequired" != $DvtNBoxEventManager$$.labelTruncation ? $labelSectionWidth_rowCount$$9$$ = $DvtNBoxNodeOverflow$$ + $DvtNBoxDrawer$$ + $DvtNBoxCategoryNode$$ : ($DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$[$maximizedCellIndex$$1_nodeCounts$$], $labelSectionWidth_rowCount$$9$$ = Math.max($DvtNBoxNodeOverflow$$, $DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($DvtNBoxAutomation$$, $DvtNBoxNode$$)) + $DvtNBoxDrawer$$ + $DvtNBoxCategoryNode$$), $labelSectionWidth_rowCount$$9$$ = 
      Math.min($labelSectionWidth_rowCount$$9$$, $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $DvtNBoxRenderer$$ - $DvtNBoxCellRenderer$$));
      $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / ($DvtNBoxRenderer$$ + $DvtNBoxCellRenderer$$ + $labelSectionWidth_rowCount$$9$$ + $DvtNBoxDataAnimationHandler$$));
      $DvtNBoxCategoryNodeRenderer$$[$dvt$$5$$.$NBoxConstants$.$LABEL$] && ($DvtNBoxDataAnimationHandler$$ = new $dvt$$5$$.$Container$, $DvtNBoxNodeOverflow$$ = !1, $columnCount$$9_label$$62_secondaryLabel$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($columnCount$$9_label$$62_secondaryLabel$$).$h$, $dvt$$5$$.$TextUtils$.$fitText$($columnCount$$9_label$$62_secondaryLabel$$, 
      $labelSectionWidth_rowCount$$9$$ - $DvtNBoxDrawer$$ - $DvtNBoxCategoryNode$$, $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$, $DvtNBoxDataAnimationHandler$$) && ($DvtNBoxNodeOverflow$$ = !0), $DvtNBoxCategoryNodeRenderer$$[$dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL$] && ($columnCount$$9_label$$62_secondaryLabel$$ = $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($columnCount$$9_label$$62_secondaryLabel$$).$h$, 
      $dvt$$5$$.$TextUtils$.$fitText$($columnCount$$9_label$$62_secondaryLabel$$, $labelSectionWidth_rowCount$$9$$ - $DvtNBoxDrawer$$ - $DvtNBoxCategoryNode$$, $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$, $DvtNBoxDataAnimationHandler$$) && ($DvtNBoxNodeOverflow$$ = !0)), $DvtNBoxNodeOverflow$$ || ($labelSectionWidth_rowCount$$9$$ = 0, $DvtNBoxCategoryNodeRenderer$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] && ($DvtNBoxDrawerRenderer$$ && !$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($DvtNBoxAutomation$$, 
      $DvtNBoxCategoryNodeRenderer$$) || $icon$$40_widestLabel$$ && !$icon$$40_widestLabel$$[$dvt$$5$$.$NBoxConstants$.$SOURCE$] || ($labelSectionWidth_rowCount$$9$$ = Math.max(0, Math.min($DvtNBoxCell$$, $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $DvtNBoxRenderer$$ - $DvtNBoxCellRenderer$$))))));
      if (0 > $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $DvtNBoxRenderer$$ - $DvtNBoxCellRenderer$$) {
        var $iconWidth$$9$$ = $DvtNBoxCellRenderer$$, $DvtNBoxCellRenderer$$ = Math.max(0, $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $DvtNBoxRenderer$$)
      }
      0 > $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $DvtNBoxRenderer$$ && ($DvtNBoxRenderer$$ = $cellArea_ci$$3_maximizedColumn$$7$$.$w$);
      $DvtNBoxCategoryRolloverHandler$$[$maximizedCellIndex$$1_nodeCounts$$] = {cellRows:-1, cellColumns:$cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, overflow:!1};
    } else {
      $DvtNBoxCell$$ = [];
      if ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$) {
        for ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$), $c$$26_nodeCellIndex$$ = 0;$c$$26_nodeCellIndex$$ < $columnCount$$9_label$$62_secondaryLabel$$;$c$$26_nodeCellIndex$$++) {
          $DvtNBoxCell$$.push($c$$26_nodeCellIndex$$ + $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ * $columnCount$$9_label$$62_secondaryLabel$$);
        }
      } else {
        if ($cellArea_ci$$3_maximizedColumn$$7$$) {
          for ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $cellArea_ci$$3_maximizedColumn$$7$$), $nodeCount$$8_r$$35$$ = 0;$nodeCount$$8_r$$35$$ < $labelSectionWidth_rowCount$$9$$;$nodeCount$$8_r$$35$$++) {
            $DvtNBoxCell$$.push($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ + $nodeCount$$8_r$$35$$ * $columnCount$$9_label$$62_secondaryLabel$$);
          }
        } else {
          for ($cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ = 0;$cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ < $DvtNBoxCategoryRolloverHandler$$.length;$cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$++) {
            $DvtNBoxCell$$.push($cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$);
          }
        }
      }
      if (null != $DvtNBoxNode$$.labelSectionWidth) {
        $labelSectionWidth_rowCount$$9$$ = $DvtNBoxNode$$.labelSectionWidth, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxCell$$[0]), $cellArea_ci$$3_maximizedColumn$$7$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$.__childArea, $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$h$ + 
        $DvtNBoxDataAnimationHandler$$) / ($DvtNBoxDefaults$$ + $DvtNBoxDataAnimationHandler$$)), $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / ($DvtNBoxRenderer$$ + $DvtNBoxCellRenderer$$ + $labelSectionWidth_rowCount$$9$$ + $DvtNBoxDataAnimationHandler$$));
      } else {
        for ($cellArea_ci$$3_maximizedColumn$$7$$ = $DvtNBoxCategoryNodeRenderer$$ = 0;$cellArea_ci$$3_maximizedColumn$$7$$ < $DvtNBoxCell$$.length;$cellArea_ci$$3_maximizedColumn$$7$$++) {
          !isNaN($maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxCell$$[$cellArea_ci$$3_maximizedColumn$$7$$]]) && $maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxCell$$[$cellArea_ci$$3_maximizedColumn$$7$$]] > $maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxCategoryNodeRenderer$$] && ($DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCell$$[$cellArea_ci$$3_maximizedColumn$$7$$]);
        }
        if ("ifRequired" != $DvtNBoxEventManager$$.labelTruncation) {
          if ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $cellArea_ci$$3_maximizedColumn$$7$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$.__childArea, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$h$ + $DvtNBoxDataAnimationHandler$$) / 
          ($DvtNBoxDefaults$$ + $DvtNBoxDataAnimationHandler$$)), $DvtNBoxDrawerRenderer$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / ($DvtNBoxRenderer$$ + $DvtNBoxCellRenderer$$ + $DvtNBoxEventManager$$.__layout.minimumLabelWidth + $DvtNBoxDrawer$$ + $DvtNBoxCategoryNode$$ + $DvtNBoxDataAnimationHandler$$)), $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ * $DvtNBoxDrawerRenderer$$ < $maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxCategoryNodeRenderer$$]) {
            $labelSectionWidth_rowCount$$9$$ = Math.floor(Math.min($DvtNBoxEventManager$$.__layout.maximumLabelWidth + $DvtNBoxDrawer$$ + $DvtNBoxCategoryNode$$, ($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / $DvtNBoxDrawerRenderer$$ - ($DvtNBoxRenderer$$ + $DvtNBoxCellRenderer$$ + $DvtNBoxDataAnimationHandler$$))), $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, 
            $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDrawerRenderer$$;
          } else {
            $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawerRenderer$$;
            for ($labelSectionWidth_rowCount$$9$$ = Math.floor(Math.min($DvtNBoxEventManager$$.__layout.maximumLabelWidth + $DvtNBoxDrawer$$ + $DvtNBoxCategoryNode$$, ($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / $DvtNBoxNodeOverflow$$ - ($DvtNBoxRenderer$$ + $DvtNBoxCellRenderer$$ + $DvtNBoxDataAnimationHandler$$)));$labelSectionWidth_rowCount$$9$$ < $DvtNBoxEventManager$$.__layout.maximumLabelWidth + $DvtNBoxDrawer$$ + $DvtNBoxCategoryNode$$;) {
              if (($DvtNBoxNodeOverflow$$ - 1) * $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ >= $maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxCategoryNodeRenderer$$]) {
                $DvtNBoxNodeOverflow$$--, $labelSectionWidth_rowCount$$9$$ = Math.floor(Math.min($DvtNBoxEventManager$$.__layout.maximumLabelWidth + $DvtNBoxDrawer$$ + $DvtNBoxCategoryNode$$, ($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / $DvtNBoxNodeOverflow$$ - ($DvtNBoxRenderer$$ + $DvtNBoxCellRenderer$$ + $DvtNBoxDataAnimationHandler$$)));
              } else {
                break;
              }
            }
            $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$;
            $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxNodeOverflow$$;
          }
        } else {
          for (var $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxCell$$[0]), $cellArea_ci$$3_maximizedColumn$$7$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$.__childArea, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$h$ + $DvtNBoxDataAnimationHandler$$) / 
          ($DvtNBoxDefaults$$ + $DvtNBoxDataAnimationHandler$$)), $DvtNBoxDrawerRenderer$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / ($DvtNBoxRenderer$$ + $DvtNBoxCellRenderer$$ + $DvtNBoxEventManager$$.__layout.minimumLabelWidth + $DvtNBoxDrawer$$ + $DvtNBoxCategoryNode$$ + $DvtNBoxDataAnimationHandler$$)), $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, 
          $startIndex$$8$$ = $icon$$40_widestLabel$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = 0;$cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ <= $DvtNBoxDrawerRenderer$$;) {
            $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$++;
            var $maxLabelWidth$$6$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - ($DvtNBoxRenderer$$ + $DvtNBoxCellRenderer$$ + $DvtNBoxDataAnimationHandler$$));
            if ($icon$$40_widestLabel$$ > $maxLabelWidth$$6$$) {
              $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.max($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - 1, 1);
              break;
            }
            for (var $maxNodes$$1$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ * $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$, $nodeArray$$ = [], $nodeCount$$8_r$$35$$ = 0;$nodeCount$$8_r$$35$$ < $labelSectionWidth_rowCount$$9$$;$nodeCount$$8_r$$35$$++) {
              for ($c$$26_nodeCellIndex$$ = 0;$c$$26_nodeCellIndex$$ < $columnCount$$9_label$$62_secondaryLabel$$;$c$$26_nodeCellIndex$$++) {
                if ($cellIndex$$9_n$$22$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $c$$26_nodeCellIndex$$) + $columnCount$$9_label$$62_secondaryLabel$$ * $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $nodeCount$$8_r$$35$$), ($DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$[$cellIndex$$9_n$$22$$]) && $DvtNBoxNode$$.length) {
                  var $numNodes$$3$$ = Math.min($DvtNBoxNode$$.length, $maxNodes$$1$$);
                  $DvtNBoxNode$$.length > $maxNodes$$1$$ && $numNodes$$3$$--;
                  for ($cellIndex$$9_n$$22$$ = $startIndex$$8$$;$cellIndex$$9_n$$22$$ < $numNodes$$3$$;$cellIndex$$9_n$$22$$++) {
                    $nodeArray$$.push($DvtNBoxNode$$[$cellIndex$$9_n$$22$$]);
                  }
                }
              }
            }
            $icon$$40_widestLabel$$ = Math.max($icon$$40_widestLabel$$, Math.ceil($DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($DvtNBoxAutomation$$, $nodeArray$$) + $DvtNBoxDrawer$$ + $DvtNBoxCategoryNode$$));
            if ($icon$$40_widestLabel$$ > $maxLabelWidth$$6$$) {
              $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.max($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - 1, 1);
              break;
            }
            if ($maxNodes$$1$$ >= $maximizedCellIndex$$1_nodeCounts$$[$DvtNBoxCategoryNodeRenderer$$]) {
              break;
            }
            $startIndex$$8$$ = $maxNodes$$1$$;
          }
          $maxLabelWidth$$6$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $DvtNBoxDataAnimationHandler$$) / $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - ($DvtNBoxRenderer$$ + $DvtNBoxCellRenderer$$ + $DvtNBoxDataAnimationHandler$$));
          $labelSectionWidth_rowCount$$9$$ = $icon$$40_widestLabel$$ > $maxLabelWidth$$6$$ ? $maxLabelWidth$$6$$ : Math.max($icon$$40_widestLabel$$, Math.min($maxLabelWidth$$6$$, $DvtNBoxNodeOverflow$$ + $DvtNBoxDrawer$$ + $DvtNBoxCategoryNode$$));
          $labelSectionWidth_rowCount$$9$$ < $DvtNBoxEventManager$$.__layout.minimumLabelWidth && ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = 0);
        }
      }
      for ($cellArea_ci$$3_maximizedColumn$$7$$ = 0;$cellArea_ci$$3_maximizedColumn$$7$$ < $DvtNBoxCell$$.length;$cellArea_ci$$3_maximizedColumn$$7$$++) {
        $cellIndex$$9_n$$22$$ = $DvtNBoxCell$$[$cellArea_ci$$3_maximizedColumn$$7$$], $DvtNBoxCategoryNode$$ = !1, $maximizedCellIndex$$1_nodeCounts$$[$cellIndex$$9_n$$22$$] > $cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$ * $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ && ($DvtNBoxCategoryNode$$ = !0), $DvtNBoxCategoryRolloverHandler$$[$cellIndex$$9_n$$22$$] = {cellRows:$cellRows$$1_i$$530_labelHeight$$9_secondaryLabelHeight$$, cellColumns:$cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, 
        overflow:$DvtNBoxCategoryNode$$};
      }
    }
    $DvtNBoxDefaults$$ = {nodeHeight:$DvtNBoxDefaults$$, indicatorSectionWidth:$DvtNBoxRenderer$$, iconSectionWidth:$DvtNBoxCellRenderer$$, iconWidth:$iconWidth$$9$$, labelSectionWidth:$labelSectionWidth_rowCount$$9$$, cellLayouts:$DvtNBoxCategoryRolloverHandler$$};
    return $DvtNBoxEventManager$$.__layout.__nodeLayout = $DvtNBoxDefaults$$;
  };
  $DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeDrawerLayout$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$.__layout.gridGap, $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeStartLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeLabelOnlyStartLabelGap, $DvtNBoxCell$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeEndLabelGap, $DvtNBoxNodeOverflow$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeSwatchSize, $DvtNBoxNode$$ = 
    $DvtNBoxDataAnimationHandler$$.__layout.maximumLabelWidth, $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, 0), $DvtNBoxRenderer$$ = $DvtNBoxDataUtils$$.$getIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$), $DvtNBoxCellRenderer$$ = $DvtNBoxDataUtils$$.$getIcon$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($DvtNBoxAutomation$$), $DvtNBoxDrawerRenderer$$ = $DvtNBoxCategoryNodeRenderer$$.nodeHeight, 
    $indicatorSectionWidth$$1$$ = $DvtNBoxCategoryNodeRenderer$$.indicatorSectionWidth, $iconSectionWidth$$1$$ = $DvtNBoxCategoryNodeRenderer$$.iconSectionWidth, $DvtNBoxDrawer$$ = $indicatorSectionWidth$$1$$ || $iconSectionWidth$$1$$ ? $DvtNBoxDrawer$$ : $DvtNBoxCategoryNode$$;
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$.__childArea;
    $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCategoryNodeRenderer$$.labelSectionWidth;
    null == $DvtNBoxCategoryNodeRenderer$$ && ($DvtNBoxCategoryNodeRenderer$$ = "ifRequired" != $DvtNBoxDataAnimationHandler$$.labelTruncation ? $DvtNBoxNode$$ + $DvtNBoxDrawer$$ + $DvtNBoxCell$$ : Math.max($DvtNBoxNode$$, $DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$)) + $DvtNBoxDrawer$$ + $DvtNBoxCell$$, $DvtNBoxCategoryNodeRenderer$$ = Math.min($DvtNBoxCategoryNodeRenderer$$, $DvtNBoxKeyboardHandler$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$));
    $DvtNBoxEventManager$$ = Math.floor(($DvtNBoxKeyboardHandler$$.$w$ + $DvtNBoxCategoryRolloverHandler$$) / ($indicatorSectionWidth$$1$$ + $iconSectionWidth$$1$$ + $DvtNBoxCategoryNodeRenderer$$ + $DvtNBoxCategoryRolloverHandler$$));
    if ($DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.$LABEL$]) {
      var $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$5$$.$Container$, $DvtNBoxNode$$ = !1, $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$), $labelHeight$$10_secondaryLabelHeight$$1$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($DvtNBoxCategoryNode$$).$h$;
      $dvt$$5$$.$TextUtils$.$fitText$($DvtNBoxCategoryNode$$, $DvtNBoxCategoryNodeRenderer$$ - $DvtNBoxDrawer$$ - $DvtNBoxCell$$, $labelHeight$$10_secondaryLabelHeight$$1$$, $DvtNBoxCategoryRolloverHandler$$) && ($DvtNBoxNode$$ = !0);
      $DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL$] && ($DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$), $labelHeight$$10_secondaryLabelHeight$$1$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($DvtNBoxCategoryNode$$).$h$, $dvt$$5$$.$TextUtils$.$fitText$($DvtNBoxCategoryNode$$, $DvtNBoxCategoryNodeRenderer$$ - $DvtNBoxDrawer$$ - $DvtNBoxCell$$, $labelHeight$$10_secondaryLabelHeight$$1$$, $DvtNBoxCategoryRolloverHandler$$) && 
      ($DvtNBoxNode$$ = !0));
      $DvtNBoxNode$$ || ($DvtNBoxCategoryNodeRenderer$$ = 0, $DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] && ($DvtNBoxRenderer$$ && !$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($DvtNBoxAutomation$$, $DvtNBoxDefaults$$) || $DvtNBoxCellRenderer$$ && !$DvtNBoxCellRenderer$$[$dvt$$5$$.$NBoxConstants$.$SOURCE$] || ($DvtNBoxCategoryNodeRenderer$$ = Math.max(0, Math.min($DvtNBoxNodeOverflow$$, $DvtNBoxKeyboardHandler$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$)))));
    }
    if (0 > $DvtNBoxKeyboardHandler$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$) {
      var $iconWidth$$10$$ = $iconSectionWidth$$1$$, $iconSectionWidth$$1$$ = Math.max(0, $DvtNBoxKeyboardHandler$$.$w$ - $indicatorSectionWidth$$1$$)
    }
    0 > $DvtNBoxKeyboardHandler$$.$w$ - $indicatorSectionWidth$$1$$ && ($indicatorSectionWidth$$1$$ = $DvtNBoxKeyboardHandler$$.$w$);
    $DvtNBoxAutomation$$ = {nodeHeight:$DvtNBoxDrawerRenderer$$, indicatorSectionWidth:$indicatorSectionWidth$$1$$, iconSectionWidth:$iconSectionWidth$$1$$, iconWidth:$iconWidth$$10$$, labelSectionWidth:$DvtNBoxCategoryNodeRenderer$$, drawerLayout:{rows:-1, columns:$DvtNBoxEventManager$$}};
    return $DvtNBoxDataAnimationHandler$$.__layout.__nodeDrawerLayout = $DvtNBoxAutomation$$;
  };
  $DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$_calculateSimpleNodeLayout$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.__layout.nodeIndicatorGap, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.__layout.nodeSingleLabelGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$.__layout.nodeDualLabelGap, $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$.__layout.nodeInterLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.__layout.nodeSwatchSize, $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, 
    0), $DvtNBoxNodeOverflow$$ = $DvtNBoxKeyboardHandler$$ = 0, $DvtNBoxNode$$ = 0, $DvtNBoxDefaults$$ = null, $DvtNBoxRenderer$$ = $DvtNBoxDataUtils$$.$getIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxCellRenderer$$ = $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxNodeRenderer$$ = $DvtNBoxDataUtils$$.$getIcon$($DvtNBoxAutomation$$, $DvtNBoxCell$$);
    $DvtNBoxRenderer$$ ? ($DvtNBoxCellRenderer$$ = $DvtNBoxRenderer$$[$dvt$$5$$.$NBoxConstants$.$HEIGHT$], $DvtNBoxNodeOverflow$$ = $DvtNBoxRenderer$$[$dvt$$5$$.$NBoxConstants$.$WIDTH$] + 2 * $DvtNBoxEventManager$$, $DvtNBoxKeyboardHandler$$ = Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxCellRenderer$$ + 2 * $DvtNBoxEventManager$$)) : $DvtNBoxCellRenderer$$ && ($DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryNode$$);
    $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$LABEL$] ? ($DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxEventManager$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($DvtNBoxEventManager$$).$h$, $DvtNBoxKeyboardHandler$$ = Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$ + 2 * $DvtNBoxDataAnimationHandler$$), $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL$] && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($DvtNBoxAutomation$$, 
    $DvtNBoxCell$$), $DvtNBoxAutomation$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($DvtNBoxAutomation$$).$h$, $DvtNBoxKeyboardHandler$$ = Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$ + $DvtNBoxAutomation$$ + 2 * $DvtNBoxCategoryRolloverHandler$$ + $DvtNBoxDrawer$$))) : ($DvtNBoxDefaults$$ = 0, $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] && ($DvtNBoxRenderer$$ && !$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($DvtNBoxAutomation$$, $DvtNBoxCell$$) || $DvtNBoxNodeRenderer$$ && 
    !$DvtNBoxNodeRenderer$$[$dvt$$5$$.$NBoxConstants$.$SOURCE$] || ($DvtNBoxDefaults$$ = $DvtNBoxNodeOverflow$$ ? $DvtNBoxNodeOverflow$$ : $DvtNBoxCategoryNode$$)));
    $DvtNBoxNodeRenderer$$ && ($DvtNBoxNode$$ = Math.max($DvtNBoxKeyboardHandler$$, $dvt$$5$$.$Agent$.$isTouchDevice$() ? $DvtNBoxNodeRenderer$$.preferredSizeTouch : $DvtNBoxNodeRenderer$$.preferredSize), $DvtNBoxCategoryRolloverHandler$$ = ($DvtNBoxNodeRenderer$$[$dvt$$5$$.$NBoxConstants$.$SOURCE$] ? $DvtNBoxNodeRenderer$$.sourcePaddingRatio : $DvtNBoxNodeRenderer$$.shapePaddingRatio) * $DvtNBoxNode$$, $DvtNBoxDrawer$$ = $DvtNBoxNodeRenderer$$[$dvt$$5$$.$NBoxConstants$.$HEIGHT$] ? $DvtNBoxNodeRenderer$$[$dvt$$5$$.$NBoxConstants$.$HEIGHT$] : 
    $DvtNBoxNode$$ - 2 * $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxNode$$ = ($DvtNBoxNodeRenderer$$[$dvt$$5$$.$NBoxConstants$.$WIDTH$] ? $DvtNBoxNodeRenderer$$[$dvt$$5$$.$NBoxConstants$.$WIDTH$] : $DvtNBoxNode$$ - 2 * $DvtNBoxCategoryRolloverHandler$$) + 2 * $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$ = Math.max($DvtNBoxKeyboardHandler$$, $DvtNBoxDrawer$$ + 2 * $DvtNBoxCategoryRolloverHandler$$));
    return {nodeHeight:$DvtNBoxKeyboardHandler$$, indicatorSectionWidth:$DvtNBoxNodeOverflow$$, iconSectionWidth:$DvtNBoxNode$$, labelSectionWidth:$DvtNBoxDefaults$$};
  };
  $DvtNBoxNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeBackground$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth + $DvtNBoxDataAnimationHandler$$.iconSectionWidth + $DvtNBoxDataAnimationHandler$$.labelSectionWidth, $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$.nodeHeight;
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getNodeBorderRadius$($DvtNBoxAutomation$$);
    var $DvtNBoxCategoryNode$$ = $DvtNBoxStyleUtils$$.$getNodeHoverColor$($DvtNBoxAutomation$$), $DvtNBoxCell$$ = $DvtNBoxStyleUtils$$.$getNodeSelectionColor$($DvtNBoxAutomation$$), $DvtNBoxNodeOverflow$$ = new $dvt$$5$$.Rect($DvtNBoxAutomation$$.$getCtx$(), 0, 0, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$);
    $DvtNBoxNodeOverflow$$.$setFill$(null);
    $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxNodeOverflow$$.$setRx$($DvtNBoxDataAnimationHandler$$), $DvtNBoxNodeOverflow$$.$setRy$($DvtNBoxDataAnimationHandler$$));
    $DvtNBoxNodeOverflow$$.$setHoverStroke$(new $dvt$$5$$.$SolidStroke$($DvtNBoxCategoryNode$$, null, 2), new $dvt$$5$$.$SolidStroke$($DvtNBoxCell$$, null, 4));
    $DvtNBoxNodeOverflow$$.$setSelectedStroke$(new $dvt$$5$$.$SolidStroke$($DvtNBoxCell$$, null, 4), null);
    $DvtNBoxNodeOverflow$$.$setSelectedHoverStroke$(new $dvt$$5$$.$SolidStroke$($DvtNBoxCategoryNode$$, null, 2), new $dvt$$5$$.$SolidStroke$($DvtNBoxCell$$, null, 6));
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxNodeOverflow$$);
    $DvtNBoxEventManager$$.$setSelectionShape$($DvtNBoxNodeOverflow$$);
    $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$5$$.Rect($DvtNBoxAutomation$$.$getCtx$(), 0, 0, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$);
    $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxCategoryRolloverHandler$$.$setRx$($DvtNBoxDataAnimationHandler$$), $DvtNBoxCategoryRolloverHandler$$.$setRy$($DvtNBoxDataAnimationHandler$$));
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxCategoryRolloverHandler$$.$setSolidFill$($DvtNBoxDataAnimationHandler$$);
    $DvtNBoxStyleUtils$$.$getNodeBorderColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) && $DvtNBoxStyleUtils$$.$getNodeBorderWidth$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) && $DvtNBoxCategoryRolloverHandler$$.$setSolidStroke$($DvtNBoxStyleUtils$$.$getNodeBorderColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), null, $DvtNBoxStyleUtils$$.$getNodeBorderWidth$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$));
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCategoryRolloverHandler$$, "background");
  };
  $DvtNBoxNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIndicator$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDrawer$$ = $dvt$$5$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxCategoryNode$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()) ? $DvtNBoxDataAnimationHandler$$.labelSectionWidth + $DvtNBoxDataAnimationHandler$$.iconSectionWidth : 0, $DvtNBoxCell$$ = $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($DvtNBoxAutomation$$, 
    $DvtNBoxKeyboardHandler$$);
    if ($DvtNBoxCell$$) {
      var $DvtNBoxDrawer$$ = $dvt$$5$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxCell$$), $DvtNBoxNodeOverflow$$ = new $dvt$$5$$.Rect($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCategoryNode$$, 0, $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth, $DvtNBoxDataAnimationHandler$$.nodeHeight);
      $DvtNBoxNodeOverflow$$.$setSolidFill$($DvtNBoxCell$$);
      $DvtNBoxNodeRenderer$$.$_clipIfNecessary$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$);
      $DvtNBoxEventManager$$.$addChild$($DvtNBoxNodeOverflow$$);
      $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeOverflow$$, $dvt$$5$$.$NBoxConstants$.$INDICATOR$);
    }
    if ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$)) {
      var $DvtNBoxNodeOverflow$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$WIDTH$], $DvtNBoxNode$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$HEIGHT$], $DvtNBoxDefaults$$ = $DvtNBoxCategoryNode$$ + $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth / 2, $DvtNBoxRenderer$$ = $DvtNBoxDataAnimationHandler$$.nodeHeight / 2, $DvtNBoxCategoryNode$$ = $DvtNBoxNodeOverflow$$, $DvtNBoxDrawer$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] ? $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] : $DvtNBoxDrawer$$, 
      $DvtNBoxCellRenderer$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$BORDER_COLOR$], $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$BORDER_WIDTH$], $DvtNBoxDrawerRenderer$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$BORDER_RADIUS$], $indicatorIconPattern$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$PATTERN$];
      $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$SOURCE$] ? ($DvtNBoxNodeOverflow$$ = new $dvt$$5$$.$ImageMarker$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxDefaults$$, $DvtNBoxRenderer$$, $DvtNBoxNodeOverflow$$, $DvtNBoxNode$$, $DvtNBoxDrawerRenderer$$, $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$SOURCE$]), $DvtNBoxNodeOverflow$$.$setPreserveAspectRatio$($DvtNBoxNodeRenderer$$.$_ASPECT_RATIO_SCALING$)) : ($DvtNBoxNodeOverflow$$ = new $dvt$$5$$.$SimpleMarker$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$SHAPE$], 
      $dvt$$5$$.$CSSStyle$.$SKIN_ALTA$, $DvtNBoxDefaults$$, $DvtNBoxRenderer$$, $DvtNBoxNodeOverflow$$, $DvtNBoxNode$$, $DvtNBoxDrawerRenderer$$), 0 < $DvtNBoxCategoryNodeRenderer$$ && ($DvtNBoxCategoryNode$$ += $DvtNBoxCategoryNodeRenderer$$));
      $DvtNBoxCategoryNodeRenderer$$ && $DvtNBoxNodeOverflow$$.$setSolidStroke$($DvtNBoxCellRenderer$$, null, $DvtNBoxCategoryNodeRenderer$$);
      "none" != $indicatorIconPattern$$ ? $DvtNBoxNodeOverflow$$.$setFill$(new $dvt$$5$$.$PatternFill$($indicatorIconPattern$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$)) : $DvtNBoxNodeOverflow$$.$setSolidFill$($DvtNBoxDrawer$$);
      $DvtNBoxCategoryNode$$ > $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth ? $DvtNBoxDrawerRenderer$$ && $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$SOURCE$] ? $DvtNBoxEventManager$$.$getChildContainer$(!0).$addChild$($DvtNBoxNodeOverflow$$) : ($DvtNBoxNodeRenderer$$.$_clipIfNecessary$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxEventManager$$.$addChild$($DvtNBoxNodeOverflow$$)) : $DvtNBoxEventManager$$.$addChild$($DvtNBoxNodeOverflow$$);
      $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeOverflow$$, $dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON$);
    }
  };
  $DvtNBoxNodeRenderer$$.$_renderNodeIcon$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDrawer$$ = $dvt$$5$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxCategoryNode$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getIcon$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    if ($DvtNBoxCell$$) {
      var $DvtNBoxNodeOverflow$$ = ($DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$SOURCE$] ? $DvtNBoxCell$$.sourcePaddingRatio : $DvtNBoxCell$$.shapePaddingRatio) * $DvtNBoxDataAnimationHandler$$.nodeHeight, $DvtNBoxNode$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$WIDTH$] ? $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$WIDTH$] : $DvtNBoxDataAnimationHandler$$.iconWidth ? $DvtNBoxDataAnimationHandler$$.iconWidth : $DvtNBoxDataAnimationHandler$$.iconSectionWidth - 2 * $DvtNBoxNodeOverflow$$, $DvtNBoxNodeOverflow$$ = 
      $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$HEIGHT$] ? $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$HEIGHT$] : $DvtNBoxDataAnimationHandler$$.nodeHeight - 2 * $DvtNBoxNodeOverflow$$, $DvtNBoxCategoryNode$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$ ? "labelSectionWidth" : "indicatorSectionWidth"] + Math.max($DvtNBoxDataAnimationHandler$$.iconSectionWidth / 2, $DvtNBoxDataAnimationHandler$$.iconWidth ? $DvtNBoxDataAnimationHandler$$.iconWidth / 2 : 0), $DvtNBoxDefaults$$ = $DvtNBoxDataAnimationHandler$$.nodeHeight / 
      2, $DvtNBoxDrawer$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] ? $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] : $DvtNBoxDrawer$$, $DvtNBoxRenderer$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$BORDER_COLOR$], $DvtNBoxCellRenderer$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$BORDER_WIDTH$], $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$BORDER_RADIUS$], $DvtNBoxDrawerRenderer$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$PATTERN$];
      $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$SOURCE$] ? ($DvtNBoxNode$$ = new $dvt$$5$$.$ImageMarker$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCategoryNode$$, $DvtNBoxDefaults$$, $DvtNBoxNode$$, $DvtNBoxNodeOverflow$$, $DvtNBoxCategoryNodeRenderer$$, $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$SOURCE$]), $DvtNBoxNode$$.$setPreserveAspectRatio$($DvtNBoxNodeRenderer$$.$_ASPECT_RATIO_SCALING$)) : $DvtNBoxNode$$ = new $dvt$$5$$.$SimpleMarker$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$SHAPE$], 
      $dvt$$5$$.$CSSStyle$.$SKIN_ALTA$, $DvtNBoxCategoryNode$$, $DvtNBoxDefaults$$, $DvtNBoxNode$$ - $DvtNBoxCellRenderer$$, $DvtNBoxNodeOverflow$$ - $DvtNBoxCellRenderer$$, $DvtNBoxCategoryNodeRenderer$$);
      $DvtNBoxCellRenderer$$ && $DvtNBoxNode$$.$setSolidStroke$($DvtNBoxRenderer$$, null, $DvtNBoxCellRenderer$$);
      "none" != $DvtNBoxDrawerRenderer$$ ? $DvtNBoxNode$$.$setFill$(new $dvt$$5$$.$PatternFill$($DvtNBoxDrawerRenderer$$, $DvtNBoxDrawer$$, $DvtNBoxCategoryRolloverHandler$$)) : $DvtNBoxNode$$.$setSolidFill$($DvtNBoxDrawer$$);
      0 == $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth || 0 == $DvtNBoxDataAnimationHandler$$.labelSectionWidth ? $DvtNBoxCategoryNodeRenderer$$ && $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$SOURCE$] ? $DvtNBoxEventManager$$.$getChildContainer$(!0).$addChild$($DvtNBoxNode$$) : ($DvtNBoxNodeRenderer$$.$_clipIfNecessary$($DvtNBoxAutomation$$, $DvtNBoxNode$$, $DvtNBoxDataAnimationHandler$$), $DvtNBoxEventManager$$.$addChild$($DvtNBoxNode$$)) : $DvtNBoxEventManager$$.$addChild$($DvtNBoxNode$$);
      $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNode$$, $dvt$$5$$.$NBoxConstants$.$ICON$);
    }
  };
  $DvtNBoxNodeRenderer$$.$_renderNodeLabels$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeLabels$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDrawer$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.nodeInterLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.nodeLabelOnlyStartLabelGap, $DvtNBoxCell$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.nodeStartLabelGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryRolloverHandler$$.__layout.nodeEndLabelGap, $DvtNBoxCategoryNode$$ = $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth || 
    $DvtNBoxDataAnimationHandler$$.iconSectionWidth ? $DvtNBoxCell$$ : $DvtNBoxCategoryNode$$, $DvtNBoxCell$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxCell$$ = $dvt$$5$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxCell$$), $DvtNBoxNodeOverflow$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()) ? $DvtNBoxDataAnimationHandler$$.labelSectionWidth - $DvtNBoxCategoryNode$$ : $DvtNBoxDataAnimationHandler$$.indicatorSectionWidth + 
    $DvtNBoxDataAnimationHandler$$.iconSectionWidth + $DvtNBoxCategoryNode$$;
    if ($DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL$]) {
      var $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDefaults$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($DvtNBoxNode$$).$h$;
      $dvt$$5$$.$TextUtils$.$fitText$($DvtNBoxNode$$, $DvtNBoxDataAnimationHandler$$.labelSectionWidth - $DvtNBoxCategoryNode$$ - $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDefaults$$, $DvtNBoxEventManager$$) && ($DvtNBoxRenderer$$.$positionText$($DvtNBoxNode$$, $DvtNBoxNodeOverflow$$, $DvtNBoxDataAnimationHandler$$.nodeHeight / 2), $DvtNBoxNode$$.$getCSSStyle$() && $DvtNBoxNode$$.$getCSSStyle$().$getStyle$("color") ? $DvtNBoxNode$$.$setSolidFill$($DvtNBoxNode$$.$getCSSStyle$().$getStyle$("color")) : 
      $DvtNBoxNode$$.$setSolidFill$($DvtNBoxCell$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNode$$, $dvt$$5$$.$NBoxConstants$.$LABEL$));
      if ($DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL$]) {
        var $DvtNBoxCellRenderer$$ = $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxNodeRenderer$$ = $dvt$$5$$.$TextUtils$.$guessTextDimensions$($DvtNBoxCellRenderer$$).$h$;
        $dvt$$5$$.$TextUtils$.$fitText$($DvtNBoxCellRenderer$$, $DvtNBoxDataAnimationHandler$$.labelSectionWidth - $DvtNBoxCategoryNode$$ - $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxNodeRenderer$$, $DvtNBoxEventManager$$) && ($DvtNBoxEventManager$$ = ($DvtNBoxDataAnimationHandler$$.nodeHeight - $DvtNBoxDefaults$$ - $DvtNBoxNodeRenderer$$ - $DvtNBoxDrawer$$) / 2, $DvtNBoxRenderer$$.$positionText$($DvtNBoxNode$$, $DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$ + $DvtNBoxDefaults$$ / 2), $DvtNBoxRenderer$$.$positionText$($DvtNBoxCellRenderer$$, 
        $DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$ + $DvtNBoxDefaults$$ + $DvtNBoxDrawer$$ + $DvtNBoxNodeRenderer$$ / 2), $DvtNBoxCellRenderer$$.$getCSSStyle$() && $DvtNBoxCellRenderer$$.$getCSSStyle$().$getStyle$("color") ? $DvtNBoxCellRenderer$$.$setSolidFill$($DvtNBoxCellRenderer$$.$getCSSStyle$().$getStyle$("color")) : $DvtNBoxCellRenderer$$.$setSolidFill$($DvtNBoxCell$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCellRenderer$$, $dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL$));
      }
    }
  };
  $DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$ = function $$DvtNBoxNodeRenderer$$$$_getMaxLabelWidth$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    for (var $DvtNBoxEventManager$$ = new $dvt$$5$$.$Container$, $DvtNBoxDataAnimationHandler$$ = 0;$DvtNBoxDataAnimationHandler$$ < $DvtNBoxKeyboardHandler$$.length;$DvtNBoxDataAnimationHandler$$++) {
      var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$[$DvtNBoxDataAnimationHandler$$];
      $DvtNBoxEventManager$$.$addChild$($DvtNBoxDataUtils$$.$getNodeLabel$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$));
      $DvtNBoxEventManager$$.$addChild$($DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($DvtNBoxAutomation$$, $DvtNBoxCategoryRolloverHandler$$));
    }
    $DvtNBoxAutomation$$.$addChild$($DvtNBoxEventManager$$);
    for ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$.$getDimensions$().$w$;0 < $DvtNBoxEventManager$$.$getNumChildren$();) {
      $DvtNBoxEventManager$$.removeChild($DvtNBoxEventManager$$.$getChildAt$(0));
    }
    $DvtNBoxAutomation$$.removeChild($DvtNBoxEventManager$$);
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxNodeRenderer$$.$_clipIfNecessary$ = function $$DvtNBoxNodeRenderer$$$$_clipIfNecessary$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = $DvtNBoxStyleUtils$$.$getNodeBorderRadius$($DvtNBoxAutomation$$);
    if ($DvtNBoxAutomation$$ = $DvtNBoxAutomation$$ < $DvtNBoxNodeRenderer$$.$_MIN_CORNER_RADIUS$ ? 0 : $DvtNBoxAutomation$$) {
      var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$.indicatorSectionWidth + $DvtNBoxEventManager$$.iconSectionWidth + $DvtNBoxEventManager$$.labelSectionWidth;
      $DvtNBoxEventManager$$ = $DvtNBoxEventManager$$.nodeHeight;
      var $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$5$$.$ClipPath$;
      $DvtNBoxCategoryRolloverHandler$$.$addRect$(0, 0, $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$, $DvtNBoxAutomation$$, $DvtNBoxAutomation$$);
      $DvtNBoxKeyboardHandler$$.$setClipPath$($DvtNBoxCategoryRolloverHandler$$);
    }
  };
  $DvtNBoxNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxNodeRenderer$$$$animateUpdate$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryNode$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$), $DvtNBoxCell$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxEventManager$$), $DvtNBoxNodeOverflow$$ = $DvtNBoxEventManager$$.$getMatrix$(), $DvtNBoxNode$$ = $DvtNBoxEventManager$$.getParent();
    $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
    $DvtNBoxAutomation$$.$_newNBox$.$addChild$($DvtNBoxEventManager$$);
    $DvtNBoxEventManager$$.$setMatrix$($DvtNBoxCategoryNode$$);
    var $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxCellRenderer$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$($DvtNBoxDrawer$$, $DvtNBoxEventManager$$);
    if ($DvtNBoxDefaults$$ || $DvtNBoxCellRenderer$$) {
      var $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$ClipPath$, $DvtNBoxCategoryNodeRenderer$$;
      if ($DvtNBoxDefaults$$) {
        $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxDefaults$$);
        $DvtNBoxCategoryNodeRenderer$$ = new $dvt$$5$$.$Rectangle$($DvtNBoxCategoryNodeRenderer$$.$_tx$, $DvtNBoxCategoryNodeRenderer$$.$_ty$, $DvtNBoxDefaults$$.getWidth(), $DvtNBoxDefaults$$.getHeight());
        var $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$.getData()), $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDefaults$$), $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDefaults$$, "background"), $DvtNBoxDrawerRenderer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxDefaults$$), $DvtNBoxDefaults$$ = new $dvt$$5$$.$Rectangle$($DvtNBoxDrawerRenderer$$.$_tx$, 
        $DvtNBoxDrawerRenderer$$.$_ty$, $DvtNBoxDefaults$$.getWidth(), $DvtNBoxDefaults$$.getHeight());
        $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCategoryNodeRenderer$$.$getUnion$($DvtNBoxDefaults$$);
      }
      $DvtNBoxCellRenderer$$ && ($DvtNBoxDefaults$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCellRenderer$$), $DvtNBoxCellRenderer$$ = new $dvt$$5$$.$Rectangle$($DvtNBoxDefaults$$.$_tx$, $DvtNBoxDefaults$$.$_ty$, $DvtNBoxCellRenderer$$.getWidth(), $DvtNBoxCellRenderer$$.getHeight()), $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxDrawer$$, $DvtNBoxEventManager$$.getData()), $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxDrawer$$, $DvtNBoxDefaults$$), $DvtNBoxDefaults$$ = 
      $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxDefaults$$, "background"), $DvtNBoxDrawerRenderer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxDefaults$$), $DvtNBoxDefaults$$ = new $dvt$$5$$.$Rectangle$($DvtNBoxDrawerRenderer$$.$_tx$, $DvtNBoxDrawerRenderer$$.$_ty$, $DvtNBoxDefaults$$.getWidth(), $DvtNBoxDefaults$$.getHeight()), $DvtNBoxCellRenderer$$ = $DvtNBoxCellRenderer$$.$getUnion$($DvtNBoxDefaults$$), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxCategoryNodeRenderer$$ ? 
      $DvtNBoxCategoryNodeRenderer$$.$getUnion$($DvtNBoxCellRenderer$$) : $DvtNBoxCellRenderer$$);
      $DvtNBoxCategoryNodeRenderer$$ && ($DvtNBoxCategoryNode$$.$addRect$($DvtNBoxCategoryNodeRenderer$$.x, $DvtNBoxCategoryNodeRenderer$$.y, $DvtNBoxCategoryNodeRenderer$$.$w$, $DvtNBoxCategoryNodeRenderer$$.$h$), $DvtNBoxEventManager$$.$setClipPath$($DvtNBoxCategoryNode$$));
    }
    $DvtNBoxCell$$ = new $dvt$$5$$.$AnimMoveTo$($DvtNBoxEventManager$$.$getCtx$(), $DvtNBoxEventManager$$, new $dvt$$5$$.$Point$($DvtNBoxCell$$.$_tx$, $DvtNBoxCell$$.$_ty$), $DvtNBoxAutomation$$.$getAnimationDuration$());
    $dvt$$5$$.$Playable$.$appendOnEnd$($DvtNBoxCell$$, function() {
      $DvtNBoxNode$$.$addChild$($DvtNBoxEventManager$$);
      $DvtNBoxEventManager$$.$setMatrix$($DvtNBoxNodeOverflow$$);
      $DvtNBoxEventManager$$.$setClipPath$(null);
    });
    $DvtNBoxAutomation$$.add($DvtNBoxCell$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
    $DvtNBoxCell$$ = new $dvt$$5$$.$CustomAnimation$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxEventManager$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, "background");
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$5$$.$NBoxConstants$.$LABEL$);
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL$);
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$5$$.$NBoxConstants$.$INDICATOR$);
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON$);
    $DvtNBoxNodeRenderer$$.$_animateFill$($DvtNBoxCell$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$5$$.$NBoxConstants$.$ICON$);
    $DvtNBoxAutomation$$.add($DvtNBoxCell$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
  };
  $DvtNBoxNodeRenderer$$.$_animateFill$ = function $$DvtNBoxNodeRenderer$$$$_animateFill$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$) {
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$.getData(), $DvtNBoxDrawer$$);
    $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxEventManager$$, $DvtNBoxCategoryRolloverHandler$$.getData(), $DvtNBoxDrawer$$);
    $DvtNBoxKeyboardHandler$$ && $DvtNBoxEventManager$$ && ($DvtNBoxAutomation$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_FILL$, $DvtNBoxEventManager$$, $DvtNBoxEventManager$$.$getFill$, $DvtNBoxEventManager$$.$setFill$, $DvtNBoxEventManager$$.$getFill$()), $DvtNBoxEventManager$$.$setFill$($DvtNBoxKeyboardHandler$$.$getFill$()));
  };
  $DvtNBoxNodeRenderer$$.$animateDelete$ = function $$DvtNBoxNodeRenderer$$$$animateDelete$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$DELETE$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryRolloverHandler$$.$getOptions$().__layout.__nodeLayout;
    if ($DvtNBoxCategoryNode$$) {
      var $DvtNBoxCell$$ = $DvtNBoxKeyboardHandler$$.getData(), $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNodeIndex$($DvtNBoxDrawer$$, $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.ID]);
      if (!isNaN($DvtNBoxNodeOverflow$$) && ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxDrawer$$, $DvtNBoxNodeOverflow$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxDrawer$$, $DvtNBoxNodeOverflow$$))) {
        if ($DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxDataUtils$$.$getGrouping$($DvtNBoxDrawer$$)) {
          if ($DvtNBoxCell$$ = $DvtNBoxDrawer$$.$getOptions$().__groups, $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxDrawer$$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($DvtNBoxCell$$ = $DvtNBoxCell$$[$DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxDrawer$$, $DvtNBoxNodeOverflow$$)]), $DvtNBoxNodeOverflow$$ = $DvtNBoxCell$$[$DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxNodeOverflow$$)]) {
            if ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxNodeOverflow$$)) {
              $DvtNBoxNodeOverflow$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxNodeOverflow$$), $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$Point$(($DvtNBoxCategoryNode$$.indicatorSectionWidth + $DvtNBoxCategoryNode$$.iconSectionWidth + $DvtNBoxCategoryNode$$.labelSectionWidth) / 2, $DvtNBoxCategoryNode$$.nodeHeight / 2), $DvtNBoxAutomation$$.add(new $dvt$$5$$.$AnimMoveTo$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$5$$.$Point$($DvtNBoxNodeOverflow$$.$_tx$ - $DvtNBoxCategoryNode$$.x, 
              $DvtNBoxNodeOverflow$$.$_ty$ - $DvtNBoxCategoryNode$$.y), $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxEventManager$$);
            }
          }
        } else {
          if ($DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$ROW$] != $DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.$ROW$] || $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$] != $DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$]) {
            $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$);
            $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getDimensions$();
            $DvtNBoxAutomation$$.$_newNBox$.$addChild$($DvtNBoxKeyboardHandler$$);
            $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxCategoryRolloverHandler$$);
            $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCellByRowColumn$($DvtNBoxDrawer$$, $DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.$ROW$], $DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$]);
            ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxDrawer$$, $DvtNBoxCell$$.getData(), "overflow")) ? ($DvtNBoxCategoryNode$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCategoryRolloverHandler$$), $DvtNBoxAutomation$$.add(new $dvt$$5$$.$AnimMoveTo$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$5$$.$Point$($DvtNBoxCategoryNode$$.$_tx$, $DvtNBoxCategoryNode$$.$_ty$), $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$)) : 
            ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$), $DvtNBoxCell$$ = $DvtNBoxCell$$.$getDimensions$(), $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$Point$(($DvtNBoxCategoryNode$$.indicatorSectionWidth + $DvtNBoxCategoryNode$$.iconSectionWidth + $DvtNBoxCategoryNode$$.labelSectionWidth) / 2, $DvtNBoxCategoryNode$$.nodeHeight / 2), $DvtNBoxAutomation$$.add(new $dvt$$5$$.$AnimMoveTo$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$5$$.$Point$($DvtNBoxCategoryRolloverHandler$$.$_tx$ + 
            $DvtNBoxCell$$.$w$ / 2 - $DvtNBoxCategoryNode$$.x, $DvtNBoxCategoryRolloverHandler$$.$_ty$ + $DvtNBoxCell$$.$h$ / 2 - $DvtNBoxCategoryNode$$.y), $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$UPDATE$));
            $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$CustomAnimation$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxNodeOverflow$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
            $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getScaleX$, $DvtNBoxKeyboardHandler$$.$setScaleX$, .01);
            $DvtNBoxCategoryNode$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getScaleY$, $DvtNBoxKeyboardHandler$$.$setScaleY$, .01);
            $dvt$$5$$.$Playable$.$appendOnEnd$($DvtNBoxCategoryNode$$, function() {
              $DvtNBoxDrawer$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$);
            });
            $DvtNBoxAutomation$$.add($DvtNBoxCategoryNode$$, $DvtNBoxDataAnimationHandler$$.$INSERT$);
            $DvtNBoxAutomation$$.add(new $dvt$$5$$.$AnimMoveBy$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$5$$.$Point$($DvtNBoxEventManager$$.$w$ / 2, $DvtNBoxEventManager$$.$h$ / 2), $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$INSERT$);
            $DvtNBoxAutomation$$.add(new $dvt$$5$$.$AnimFadeOut$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxDataAnimationHandler$$.$INSERT$);
            return;
          }
        }
      }
      $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$));
      if ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxKeyboardHandler$$)) {
        $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$ClipPath$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxNodeOverflow$$), $DvtNBoxNodeOverflow$$ = new $dvt$$5$$.$Rectangle$($DvtNBoxCategoryRolloverHandler$$.$_tx$, $DvtNBoxCategoryRolloverHandler$$.$_ty$, $DvtNBoxNodeOverflow$$.$_width$, $DvtNBoxNodeOverflow$$.$_height$), $DvtNBoxCategoryNode$$.$addRect$($DvtNBoxNodeOverflow$$.x, $DvtNBoxNodeOverflow$$.y, $DvtNBoxNodeOverflow$$.$w$, $DvtNBoxNodeOverflow$$.$h$), $DvtNBoxKeyboardHandler$$.$setClipPath$($DvtNBoxCategoryNode$$)
        ;
      }
      $DvtNBoxAutomation$$.add(new $dvt$$5$$.$AnimFadeOut$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxEventManager$$);
      $DvtNBoxDrawer$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$);
    }
  };
  $DvtNBoxNodeRenderer$$.$animateInsert$ = function $$DvtNBoxNodeRenderer$$$$animateInsert$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$INSERT$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxCategoryNode$$ = $DvtNBoxDrawer$$.$getOptions$().__layout.__nodeLayout;
    if ($DvtNBoxCategoryNode$$) {
      var $DvtNBoxCell$$ = $DvtNBoxKeyboardHandler$$.getData()[$dvt$$5$$.$NBoxConstants$.ID], $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getNodeIndex$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$);
      if (!isNaN($DvtNBoxCell$$) && ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$) && ($DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxDataUtils$$.$getGrouping$($DvtNBoxCategoryRolloverHandler$$)))) {
        var $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryRolloverHandler$$.$getOptions$().__groups;
        $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxCategoryRolloverHandler$$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($DvtNBoxNodeOverflow$$ = $DvtNBoxNodeOverflow$$[$DvtNBoxDataUtils$$.$getCellIndex$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$)]);
        if ($DvtNBoxCell$$ = $DvtNBoxNodeOverflow$$[$DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxCell$$)]) {
          if ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$)) {
            var $DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$.$getMatrix$(), $DvtNBoxDefaults$$ = $DvtNBoxKeyboardHandler$$.getParent(), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$), $DvtNBoxCell$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$), $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$Point$(($DvtNBoxCategoryNode$$.indicatorSectionWidth + $DvtNBoxCategoryNode$$.iconSectionWidth + $DvtNBoxCategoryNode$$.labelSectionWidth) / 2, $DvtNBoxCategoryNode$$.nodeHeight / 
            2);
            $DvtNBoxCell$$.translate(-$DvtNBoxCategoryNode$$.x, -$DvtNBoxCategoryNode$$.y);
            $DvtNBoxDrawer$$.$addChild$($DvtNBoxKeyboardHandler$$);
            $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxCell$$);
            $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$AnimMoveTo$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$5$$.$Point$($DvtNBoxCategoryRolloverHandler$$.$_tx$, $DvtNBoxCategoryRolloverHandler$$.$_ty$), $DvtNBoxAutomation$$.$getAnimationDuration$());
            $dvt$$5$$.$Playable$.$appendOnEnd$($DvtNBoxCategoryNode$$, function() {
              $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxNode$$);
              $DvtNBoxDefaults$$.$addChild$($DvtNBoxKeyboardHandler$$);
            });
            $DvtNBoxAutomation$$.add($DvtNBoxCategoryNode$$, $DvtNBoxEventManager$$);
          }
        }
      }
      $DvtNBoxDrawer$$ = new $dvt$$5$$.$CustomAnimation$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
      $DvtNBoxDrawer$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getAlpha$, $DvtNBoxKeyboardHandler$$.$setAlpha$, $DvtNBoxKeyboardHandler$$.$getAlpha$());
      $DvtNBoxAutomation$$.add($DvtNBoxDrawer$$, $DvtNBoxEventManager$$);
      $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
    }
  };
  $DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxNodeRenderer$$$$_addAccessibilityAttributes$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxKeyboardHandler$$.$setAriaRole$("img");
    if (!$dvt$$5$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getAriaLabel$();
      $DvtNBoxEventManager$$ && $DvtNBoxKeyboardHandler$$.$setAriaProperty$($dvt$$5$$.$NBoxConstants$.$LABEL$, $DvtNBoxEventManager$$);
    }
  };
  var $DvtNBoxCategoryNodeRenderer$$ = {};
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxCategoryNodeRenderer$$, $dvt$$5$$.$Obj$);
  $DvtNBoxCategoryNodeRenderer$$.$render$ = function $$DvtNBoxCategoryNodeRenderer$$$$render$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    $DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$);
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$($dvt$$5$$, $DvtNBoxKeyboardHandler$$);
  };
  $DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeBackground$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryRolloverHandler$$) {
    $DvtNBoxKeyboardHandler$$.__scale = $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxKeyboardHandler$$.__gap = $DvtNBoxCategoryRolloverHandler$$;
    $DvtNBoxCategoryRolloverHandler$$ = Math.max(0, $DvtNBoxCategoryNodeRenderer$$.$getSideLength$($DvtNBoxKeyboardHandler$$));
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getNodeBorderRadius$($DvtNBoxAutomation$$);
    var $DvtNBoxDrawer$$ = $DvtNBoxStyleUtils$$.$getNodeHoverColor$($DvtNBoxAutomation$$), $DvtNBoxCategoryNode$$ = $DvtNBoxStyleUtils$$.$getNodeSelectionColor$($DvtNBoxAutomation$$), $DvtNBoxCell$$ = new $dvt$$5$$.Rect($DvtNBoxAutomation$$.$getCtx$(), -$DvtNBoxCategoryRolloverHandler$$ / 2, -$DvtNBoxCategoryRolloverHandler$$ / 2, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxCell$$.$setFill$(null);
    $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxCell$$.$setRx$($DvtNBoxDataAnimationHandler$$), $DvtNBoxCell$$.$setRy$($DvtNBoxDataAnimationHandler$$));
    $DvtNBoxCell$$.$setHoverStroke$(new $dvt$$5$$.$SolidStroke$($DvtNBoxDrawer$$, null, 2), new $dvt$$5$$.$SolidStroke$($DvtNBoxCategoryNode$$, null, 4));
    $DvtNBoxCell$$.$setSelectedStroke$(new $dvt$$5$$.$SolidStroke$($DvtNBoxCategoryNode$$, null, 4), null);
    $DvtNBoxCell$$.$setSelectedHoverStroke$(new $dvt$$5$$.$SolidStroke$($DvtNBoxDrawer$$, null, 2), new $dvt$$5$$.$SolidStroke$($DvtNBoxCategoryNode$$, null, 6));
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxCell$$);
    $DvtNBoxEventManager$$.$setSelectionShape$($DvtNBoxCell$$);
    $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$5$$.Rect($DvtNBoxAutomation$$.$getCtx$(), -$DvtNBoxCategoryRolloverHandler$$ / 2, -$DvtNBoxCategoryRolloverHandler$$ / 2, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxDataAnimationHandler$$ && ($DvtNBoxCategoryRolloverHandler$$.$setRx$($DvtNBoxDataAnimationHandler$$), $DvtNBoxCategoryRolloverHandler$$.$setRy$($DvtNBoxDataAnimationHandler$$));
    $DvtNBoxAutomation$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxCategoryRolloverHandler$$.$setSolidFill$($DvtNBoxAutomation$$);
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxCategoryRolloverHandler$$);
  };
  $DvtNBoxCategoryNodeRenderer$$.$getSideLength$ = function $$DvtNBoxCategoryNodeRenderer$$$$getSideLength$$($dvt$$5$$) {
    return $dvt$$5$$.__scale * Math.sqrt($dvt$$5$$.nodeIndices.length) - $dvt$$5$$.__gap;
  };
  $DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeIndicator$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryRolloverHandler$$) {
    var $DvtNBoxDrawer$$ = !1, $DvtNBoxCategoryNode$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.markerGap, $DvtNBoxCell$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxNodeOverflow$$ = $DvtNBoxDataAnimationHandler$$ * Math.sqrt($DvtNBoxKeyboardHandler$$.nodeIndices.length) - $DvtNBoxCategoryRolloverHandler$$;
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    var $DvtNBoxNode$$ = $dvt$$5$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxDataAnimationHandler$$), $DvtNBoxDefaults$$ = $DvtNBoxNodeOverflow$$ / 4, $DvtNBoxRenderer$$ = 1, $DvtNBoxCellRenderer$$ = $DvtNBoxCell$$ ? $DvtNBoxNodeOverflow$$ / 2 - $DvtNBoxDefaults$$ : -$DvtNBoxNodeOverflow$$ / 2;
    ($DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$)) && ($DvtNBoxRenderer$$ = Math.min($DvtNBoxDefaults$$ / ($DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$WIDTH$] + 2 * $DvtNBoxCategoryNode$$), $DvtNBoxNodeOverflow$$ / ($DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$HEIGHT$] + 2 * $DvtNBoxCategoryNode$$)));
    if ($DvtNBoxCategoryNode$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$)) {
      $DvtNBoxNode$$ = $dvt$$5$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxCategoryNode$$), $DvtNBoxDrawer$$ = new $dvt$$5$$.Rect($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCellRenderer$$, -$DvtNBoxNodeOverflow$$ / 2, $DvtNBoxDefaults$$, $DvtNBoxNodeOverflow$$), $DvtNBoxDrawer$$.$setSolidFill$($DvtNBoxCategoryNode$$), $DvtNBoxEventManager$$.$addChild$($DvtNBoxDrawer$$), $DvtNBoxDrawer$$ = !0;
    }
    $DvtNBoxCategoryRolloverHandler$$ && ($DvtNBoxDrawer$$ = $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] ? $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] : $DvtNBoxNode$$, $DvtNBoxCell$$ = new $dvt$$5$$.$SimpleMarker$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$SHAPE$], $dvt$$5$$.$CSSStyle$.$SKIN_ALTA$, ($DvtNBoxCell$$ ? 1 : -1) * ($DvtNBoxNodeOverflow$$ - $DvtNBoxDefaults$$) / 2, 0, $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$WIDTH$] * 
    $DvtNBoxRenderer$$, $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$HEIGHT$] * $DvtNBoxRenderer$$, $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$BORDER_RADIUS$]), $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$BORDER_WIDTH$] && $DvtNBoxCell$$.$setSolidStroke$($DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$BORDER_COLOR$], null, $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$BORDER_WIDTH$]), $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$PATTERN$] && 
    "none" != $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$PATTERN$] ? $DvtNBoxCell$$.$setFill$(new $dvt$$5$$.$PatternFill$($DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$PATTERN$], $DvtNBoxDrawer$$, $DvtNBoxDataAnimationHandler$$)) : $DvtNBoxCell$$.$setSolidFill$($DvtNBoxDrawer$$), $DvtNBoxEventManager$$.$addChild$($DvtNBoxCell$$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$, $dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON$), 
    $DvtNBoxDrawer$$ = !0);
    return $DvtNBoxDrawer$$;
  };
  $DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeCount$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$, $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$) {
    var $DvtNBoxCategoryNode$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.categoryNodeLabelGap, $DvtNBoxCell$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxNodeOverflow$$ = $DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($DvtNBoxAutomation$$), $DvtNBoxNode$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "label");
    if ($DvtNBoxNode$$) {
      if ($DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$.highlightedCount, 0 == $DvtNBoxNode$$) {
        $DvtNBoxDefaults$$ && $DvtNBoxDefaults$$.$setTextString$("");
        $DvtNBoxEventManager$$.$setAlpha$($DvtNBoxNodeOverflow$$);
        return;
      }
    } else {
      $DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$.nodeIndices.length;
    }
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataAnimationHandler$$ * Math.sqrt($DvtNBoxKeyboardHandler$$.nodeIndices.length) - $DvtNBoxDrawer$$;
    $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryRolloverHandler$$ ? .75 * $DvtNBoxDataAnimationHandler$$ : $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxCell$$ = ($DvtNBoxCell$$ ? -1 : 1) * ($DvtNBoxDataAnimationHandler$$ - $DvtNBoxCategoryRolloverHandler$$) / 2;
    $DvtNBoxDrawer$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    $DvtNBoxDrawer$$ = $dvt$$5$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxDrawer$$);
    $DvtNBoxNodeOverflow$$ = new $dvt$$5$$.$Rectangle$(0, 0, $DvtNBoxCategoryRolloverHandler$$ - 2 * $DvtNBoxCategoryNode$$, $DvtNBoxDataAnimationHandler$$ - 2 * $DvtNBoxCategoryNode$$);
    $DvtNBoxDefaults$$ ? $DvtNBoxDefaults$$.$setTextString$("" + $DvtNBoxNode$$) : ($DvtNBoxDefaults$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), "" + $DvtNBoxNode$$, $DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$($DvtNBoxAutomation$$), $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDefaults$$, "label"));
    $DvtNBoxAutomation$$ = $DvtNBoxDefaults$$.$getOptimalFontSize$($DvtNBoxNodeOverflow$$);
    $DvtNBoxDefaults$$.$setFontSize$($DvtNBoxAutomation$$);
    $dvt$$5$$.$TextUtils$.$fitText$($DvtNBoxDefaults$$, $DvtNBoxCategoryRolloverHandler$$ - 2 * $DvtNBoxCategoryNode$$, $DvtNBoxDataAnimationHandler$$ - 2 * $DvtNBoxCategoryNode$$, $DvtNBoxEventManager$$) && ($DvtNBoxRenderer$$.$positionText$($DvtNBoxDefaults$$, $DvtNBoxCell$$, 0), $DvtNBoxDefaults$$.$setSolidFill$($DvtNBoxDrawer$$));
  };
  $DvtNBoxCategoryNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateUpdate$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$), $DvtNBoxDrawer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxEventManager$$), $DvtNBoxCategoryNode$$ = $DvtNBoxEventManager$$.$getMatrix$(), $DvtNBoxCell$$ = $DvtNBoxEventManager$$.getParent();
    $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
    $DvtNBoxAutomation$$.$_newNBox$.$addChild$($DvtNBoxEventManager$$);
    $DvtNBoxEventManager$$.$setMatrix$($DvtNBoxCategoryRolloverHandler$$);
    $DvtNBoxKeyboardHandler$$ = new $dvt$$5$$.$AnimMoveTo$($DvtNBoxEventManager$$.$getCtx$(), $DvtNBoxEventManager$$, new $dvt$$5$$.$Point$($DvtNBoxDrawer$$.$_tx$, $DvtNBoxDrawer$$.$_ty$), $DvtNBoxAutomation$$.$getAnimationDuration$());
    $dvt$$5$$.$Playable$.$appendOnEnd$($DvtNBoxKeyboardHandler$$, function() {
      $DvtNBoxCell$$.$addChild$($DvtNBoxEventManager$$);
      $DvtNBoxEventManager$$.$setMatrix$($DvtNBoxCategoryNode$$);
    });
    $DvtNBoxAutomation$$.add($DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$.$UPDATE$);
  };
  $DvtNBoxCategoryNodeRenderer$$.$animateDelete$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateDelete$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_newNBox$;
    $DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$) && $DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$) && ($DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$DELETE$);
    $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$5$$.$AnimScaleTo$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$5$$.$Point$(.01, .01), $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxAutomation$$.add($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$5$$.$AnimFadeOut$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxAutomation$$.add($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxKeyboardHandler$$));
    $DvtNBoxDrawer$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$);
  };
  $DvtNBoxCategoryNodeRenderer$$.$animateInsert$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateInsert$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_oldNBox$, $DvtNBoxDrawer$$ = $DvtNBoxAutomation$$.$_newNBox$;
    $DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$) && $DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$) && ($DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$INSERT$);
    $DvtNBoxKeyboardHandler$$.$setScaleX$(.01);
    $DvtNBoxKeyboardHandler$$.$setScaleY$(.01);
    $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$5$$.$AnimScaleTo$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, new $dvt$$5$$.$Point$(1, 1), $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxAutomation$$.add($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxDrawer$$ = new $dvt$$5$$.$CustomAnimation$($DvtNBoxDrawer$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxDrawer$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_NUMBER$, $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getAlpha$, $DvtNBoxKeyboardHandler$$.$setAlpha$, $DvtNBoxKeyboardHandler$$.$getAlpha$());
    $DvtNBoxAutomation$$.add($DvtNBoxDrawer$$, $DvtNBoxEventManager$$);
    $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
  };
  $DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isGroupingEqual$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($dvt$$5$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNodeCount$($dvt$$5$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = !1;
    if ($DvtNBoxKeyboardHandler$$ == $DvtNBoxEventManager$$ && $DvtNBoxDataAnimationHandler$$ == $DvtNBoxCategoryRolloverHandler$$) {
      for ($DvtNBoxDrawer$$ = !0, $DvtNBoxKeyboardHandler$$ = 0;$DvtNBoxKeyboardHandler$$ < $DvtNBoxDataAnimationHandler$$;$DvtNBoxKeyboardHandler$$++) {
        if ($DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxDataUtils$$.$getNode$($dvt$$5$$, $DvtNBoxKeyboardHandler$$)), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$)), $DvtNBoxEventManager$$ != $DvtNBoxCategoryRolloverHandler$$) {
          $DvtNBoxDrawer$$ = !1;
          break;
        }
      }
    }
    return $DvtNBoxDrawer$$;
  };
  $DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isMaximizeEqual$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($dvt$$5$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($dvt$$5$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$);
    return $DvtNBoxKeyboardHandler$$ == $DvtNBoxDataAnimationHandler$$ && $DvtNBoxEventManager$$ == $DvtNBoxCategoryRolloverHandler$$;
  };
  $DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCategoryNodeRenderer$$$$_addAccessibilityAttributes$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxKeyboardHandler$$.$setAriaRole$("img");
    if (!$dvt$$5$$.$Agent$.$deferAriaCreation$()) {
      var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.$getAriaLabel$();
      $DvtNBoxEventManager$$ && $DvtNBoxKeyboardHandler$$.$setAriaProperty$($dvt$$5$$.$NBoxConstants$.$LABEL$, $DvtNBoxEventManager$$);
    }
  };
  var $DvtNBoxDrawerRenderer$$ = {};
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxDrawerRenderer$$, $dvt$$5$$.$Obj$);
  $DvtNBoxDrawerRenderer$$.$render$ = function $$DvtNBoxDrawerRenderer$$$$render$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDrawerRenderer$$.$getDrawerBounds$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$);
    $DvtNBoxKeyboardHandler$$.__drawerBounds = $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxEventManager$$.$setTranslate$($DvtNBoxDataAnimationHandler$$.x, $DvtNBoxDataAnimationHandler$$.y);
    $DvtNBoxDataAnimationHandler$$ = new $dvt$$5$$.$KeyboardFocusEffect$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxEventManager$$, new $dvt$$5$$.$Rectangle$(-1, -1, $DvtNBoxDataAnimationHandler$$.$w$ + 2, $DvtNBoxDataAnimationHandler$$.$h$ + 2));
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxDataAnimationHandler$$, "focusEffect");
    $DvtNBoxDrawerRenderer$$.$_renderBody$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxDrawerRenderer$$.$_renderHeader$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
    $DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$);
  };
  $DvtNBoxDrawerRenderer$$.$_renderHeader$ = function $$DvtNBoxDrawerRenderer$$$$_renderHeader$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerButtonGap, $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerStartGap, $DvtNBoxCategoryNode$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerLabelGap, $DvtNBoxCell$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerCountHorizontalGap, $DvtNBoxNodeOverflow$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerCountVerticalGap, $DvtNBoxNode$$ = 
    $DvtNBoxDataAnimationHandler$$.__layout.drawerHeaderHeight, $DvtNBoxDefaults$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeIndicatorGap, $DvtNBoxCellRenderer$$ = $DvtNBoxDataAnimationHandler$$.__layout.nodeSwatchSize, $DvtNBoxNodeRenderer$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.ID]), $DvtNBoxDrawerRenderer$$ = $DvtNBoxCategoryNodeRenderer$$.nodeIndices.length;
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxKeyboardHandler$$.__drawerBounds;
    var $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = $DvtNBoxDataAnimationHandler$$._resources.close_ena, $closeWidth$$1$$ = $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.width;
    if ($DvtNBoxKeyboardHandler$$.$w$ > $closeWidth$$1$$) {
      var $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = $DvtNBoxDataAnimationHandler$$._resources.close_ovr, $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ = $DvtNBoxDataAnimationHandler$$._resources.close_dwn, $DvtNBoxDataAnimationHandler$$ = $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.height, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = new $dvt$$5$$.Image($DvtNBoxAutomation$$.$getCtx$(), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.src, 0, 0, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.width, 
      $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.height), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = new $dvt$$5$$.Image($DvtNBoxAutomation$$.$getCtx$(), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.src, 0, 0, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.width, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.height), $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ = new $dvt$$5$$.Image($DvtNBoxAutomation$$.$getCtx$(), $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$.src, 
      0, 0, $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$.width, $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$.height), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = new $dvt$$5$$.$Button$($DvtNBoxAutomation$$.$getCtx$(), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$, $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$, null, null, $DvtNBoxEventManager$$.$closeDrawer$, $DvtNBoxEventManager$$);
      $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.$setTranslate$($DvtNBoxNodeRenderer$$ ? Math.min(($DvtNBoxKeyboardHandler$$.$w$ - $closeWidth$$1$$) / 2, $DvtNBoxCategoryRolloverHandler$$) : Math.max(($DvtNBoxKeyboardHandler$$.$w$ - $closeWidth$$1$$) / 2, $DvtNBoxKeyboardHandler$$.$w$ - $DvtNBoxCategoryRolloverHandler$$ - $closeWidth$$1$$), $DvtNBoxNode$$ / 2 - $DvtNBoxDataAnimationHandler$$ / 2);
      $DvtNBoxEventManager$$.$addChild$($closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$);
    }
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = $dvt$$5$$.$ColorUtils$.$getContrastingTextColor$($DvtNBoxDataAnimationHandler$$), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = ($closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$)) ? 
    $dvt$$5$$.$ColorUtils$.$getContrastingTextColor$($closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$) : $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$, $indicatorIcon$$7$$ = $DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$), $countLabelSectionWidth_indicatorIconWidth$$3$$ = $DvtNBoxCellRenderer$$, $indicatorMarker$$2_scale$$50$$ = 1;
    if ($indicatorIcon$$7$$) {
      var $halign$$16_indicatorIconW$$ = $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$WIDTH$], $indicatorMarker$$2_scale$$50$$ = $DvtNBoxCellRenderer$$ / $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$HEIGHT$], $countLabelSectionWidth_indicatorIconWidth$$3$$ = $indicatorMarker$$2_scale$$50$$ * $halign$$16_indicatorIconW$$, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] ? $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] : $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$
    }
    var $countBorderRadius_indicatorSection_indicatorSectionPath$$ = $DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$($DvtNBoxAutomation$$), $halign$$16_indicatorIconW$$ = $DvtNBoxNodeRenderer$$ ? $dvt$$5$$.$OutputText$.$H_ALIGN_RIGHT$ : $dvt$$5$$.$OutputText$.$H_ALIGN_LEFT$, $DvtNBoxDrawerRenderer$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), "" + $DvtNBoxDrawerRenderer$$, $DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$($DvtNBoxAutomation$$), $halign$$16_indicatorIconW$$, 
    $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$), $countLabelDims_indicatorX$$2$$ = $DvtNBoxDrawerRenderer$$.$measureDimensions$(), $DvtNBoxNodeOverflow$$ = $countLabelDims_indicatorX$$2$$.$h$ + 2 * $DvtNBoxNodeOverflow$$, $DvtNBoxCellRenderer$$ = $indicatorIcon$$7$$ ? $countLabelSectionWidth_indicatorIconWidth$$3$$ + 2 * $DvtNBoxDefaults$$ : $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ ? $DvtNBoxCellRenderer$$ : 0, $countLabelSectionWidth_indicatorIconWidth$$3$$ = $countLabelDims_indicatorX$$2$$.$w$ + 
    2 * $DvtNBoxCell$$, $DvtNBoxDefaults$$ = $DvtNBoxCellRenderer$$ + $countLabelSectionWidth_indicatorIconWidth$$3$$, $countIndicatorPath_countIndicatorShape$$;
    $DvtNBoxKeyboardHandler$$.$w$ - $closeWidth$$1$$ - 2 * $DvtNBoxCategoryRolloverHandler$$ - $DvtNBoxDrawer$$ > $DvtNBoxDefaults$$ && ($countIndicatorPath_countIndicatorShape$$ = $dvt$$5$$.$PathUtils$.$roundedRectangle$(0, 0, $DvtNBoxDefaults$$, $DvtNBoxNodeOverflow$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
    $countIndicatorPath_countIndicatorShape$$ = new $dvt$$5$$.$Path$($DvtNBoxAutomation$$.$getCtx$(), $countIndicatorPath_countIndicatorShape$$), $countIndicatorPath_countIndicatorShape$$.$setSolidFill$($DvtNBoxDataAnimationHandler$$), $DvtNBoxEventManager$$.$addChild$($countIndicatorPath_countIndicatorShape$$), $countLabelDims_indicatorX$$2$$ = $DvtNBoxNodeRenderer$$ ? $countLabelSectionWidth_indicatorIconWidth$$3$$ : 0, 0 < $DvtNBoxCellRenderer$$ && ($closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ && 
    ($countBorderRadius_indicatorSection_indicatorSectionPath$$ = $dvt$$5$$.$PathUtils$.$roundedRectangle$($countLabelDims_indicatorX$$2$$, 0, $DvtNBoxCellRenderer$$, $DvtNBoxNodeOverflow$$, $DvtNBoxNodeRenderer$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$, $DvtNBoxNodeRenderer$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $DvtNBoxNodeRenderer$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $DvtNBoxNodeRenderer$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
    $countBorderRadius_indicatorSection_indicatorSectionPath$$ = new $dvt$$5$$.$Path$($DvtNBoxAutomation$$.$getCtx$(), $countBorderRadius_indicatorSection_indicatorSectionPath$$), $countBorderRadius_indicatorSection_indicatorSectionPath$$.$setSolidFill$($closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$), $countIndicatorPath_countIndicatorShape$$.$addChild$($countBorderRadius_indicatorSection_indicatorSectionPath$$)), $indicatorIcon$$7$$ && ($indicatorMarker$$2_scale$$50$$ = new $dvt$$5$$.$SimpleMarker$($DvtNBoxAutomation$$.$getCtx$(), 
    $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$SHAPE$], $dvt$$5$$.$CSSStyle$.$SKIN_ALTA$, $countLabelDims_indicatorX$$2$$ + $DvtNBoxCellRenderer$$ / 2, $DvtNBoxNodeOverflow$$ / 2, $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$WIDTH$] * $indicatorMarker$$2_scale$$50$$, $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$HEIGHT$] * $indicatorMarker$$2_scale$$50$$, $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$BORDER_RADIUS$]), $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$BORDER_WIDTH$] && $indicatorMarker$$2_scale$$50$$.$setSolidStroke$($indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$BORDER_COLOR$], 
    null, $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$BORDER_WIDTH$]), $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$PATTERN$] && "none" != $indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$PATTERN$] ? $indicatorMarker$$2_scale$$50$$.$setFill$(new $dvt$$5$$.$PatternFill$($indicatorIcon$$7$$[$dvt$$5$$.$NBoxConstants$.$PATTERN$], $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$, $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ ? $closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ : $DvtNBoxDataAnimationHandler$$)) : 
    $indicatorMarker$$2_scale$$50$$.$setSolidFill$($closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$), $countIndicatorPath_countIndicatorShape$$.$addChild$($indicatorMarker$$2_scale$$50$$))), $countIndicatorPath_countIndicatorShape$$.$addChild$($DvtNBoxDrawerRenderer$$), $DvtNBoxDrawerRenderer$$.$setSolidFill$($closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$), $DvtNBoxRenderer$$.$positionText$($DvtNBoxDrawerRenderer$$, $DvtNBoxNodeRenderer$$ ? $countLabelSectionWidth_indicatorIconWidth$$3$$ - 
    $DvtNBoxCell$$ : $DvtNBoxCellRenderer$$ + $DvtNBoxCell$$, $DvtNBoxNodeOverflow$$ / 2));
    $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxCategoryNodeRenderer$$).$getLabel$();
    $DvtNBoxAutomation$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCell$$, $DvtNBoxStyleUtils$$.$getDrawerLabelStyle$($DvtNBoxAutomation$$), $halign$$16_indicatorIconW$$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$);
    $DvtNBoxCell$$ = 0;
    $dvt$$5$$.$TextUtils$.$fitText$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$.$w$ - $DvtNBoxDrawer$$ - $DvtNBoxCategoryNode$$ - $DvtNBoxDefaults$$ - 2 * $DvtNBoxCategoryRolloverHandler$$ - $closeWidth$$1$$, $DvtNBoxNode$$, $DvtNBoxEventManager$$) && ($DvtNBoxRenderer$$.$positionText$($DvtNBoxAutomation$$, $DvtNBoxNodeRenderer$$ ? $DvtNBoxKeyboardHandler$$.$w$ - $DvtNBoxDrawer$$ : $DvtNBoxDrawer$$, $DvtNBoxNode$$ / 2), $DvtNBoxCell$$ = $DvtNBoxAutomation$$.$measureDimensions$().$w$ + $DvtNBoxCategoryNode$$);
    $countIndicatorPath_countIndicatorShape$$ && $countIndicatorPath_countIndicatorShape$$.$setTranslate$($DvtNBoxNodeRenderer$$ ? $DvtNBoxKeyboardHandler$$.$w$ - $DvtNBoxDrawer$$ - $DvtNBoxDefaults$$ - $DvtNBoxCell$$ : $DvtNBoxDrawer$$ + $DvtNBoxCell$$, ($DvtNBoxNode$$ - $DvtNBoxNodeOverflow$$) / 2);
  };
  $DvtNBoxDrawerRenderer$$.$_renderBody$ = function $$DvtNBoxDrawerRenderer$$$$_renderBody$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataAnimationHandler$$.__layout.gridGap, $DvtNBoxDrawer$$ = $DvtNBoxDataAnimationHandler$$.__layout.drawerHeaderHeight, $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.__drawerBounds, $DvtNBoxDataAnimationHandler$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()), $DvtNBoxCell$$ = $DvtNBoxStyleUtils$$.$getDrawerBorderRadius$($DvtNBoxAutomation$$), $DvtNBoxNodeOverflow$$ = 
    $DvtNBoxStyleUtils$$.$getDrawerBorderColor$($DvtNBoxAutomation$$), $DvtNBoxCell$$ = $dvt$$5$$.$PathUtils$.$roundedRectangle$(0, 0, $DvtNBoxCategoryNode$$.$w$, $DvtNBoxCategoryNode$$.$h$, $DvtNBoxCell$$, $DvtNBoxCell$$, $DvtNBoxCell$$, $DvtNBoxCell$$), $DvtNBoxCell$$ = new $dvt$$5$$.$Path$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCell$$);
    $DvtNBoxRenderer$$.$setFill$($DvtNBoxCell$$, $DvtNBoxStyleUtils$$.$getDrawerBackground$($DvtNBoxAutomation$$));
    $DvtNBoxCell$$.$setSolidStroke$($DvtNBoxNodeOverflow$$);
    $DvtNBoxCell$$.$setPixelHinting$();
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxCell$$);
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxCell$$, "background");
    $DvtNBoxKeyboardHandler$$.__childArea = new $dvt$$5$$.$Rectangle$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxDrawer$$ + $DvtNBoxCategoryRolloverHandler$$, Math.max($DvtNBoxCategoryNode$$.$w$ - 2 * $DvtNBoxCategoryRolloverHandler$$, 0), Math.max($DvtNBoxCategoryNode$$.$h$ - $DvtNBoxDrawer$$ - 2 * $DvtNBoxCategoryRolloverHandler$$, 0));
    $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$SimpleScrollableContainer$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxCategoryNode$$.$w$, $DvtNBoxCategoryNode$$.$h$ - $DvtNBoxDrawer$$);
    $DvtNBoxCategoryNode$$.$setTranslate$(0, $DvtNBoxDrawer$$);
    $DvtNBoxEventManager$$.$addChild$($DvtNBoxCategoryNode$$);
    $DvtNBoxEventManager$$.$setChildContainer$($DvtNBoxCategoryNode$$);
    $DvtNBoxEventManager$$ = $DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($DvtNBoxAutomation$$);
    $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$);
    $DvtNBoxCategoryNode$$ = {};
    if ($DvtNBoxDrawer$$) {
      for ($DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDrawer$$.length;$DvtNBoxNodeOverflow$$++) {
        $DvtNBoxCategoryNode$$[$DvtNBoxDrawer$$[$DvtNBoxNodeOverflow$$][$dvt$$5$$.$NBoxConstants$.ID]] = !0;
      }
    }
    for (var $DvtNBoxNodeOverflow$$ = $DvtNBoxDrawerRenderer$$.$calculateNodeOrders$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxCell$$ = $DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxNodeOverflow$$), $DvtNBoxDefaults$$ = $DvtNBoxCell$$.indicatorSectionWidth + $DvtNBoxCell$$.iconSectionWidth + $DvtNBoxCell$$.labelSectionWidth + $DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCellRenderer$$ = $DvtNBoxCell$$.nodeHeight + $DvtNBoxCategoryRolloverHandler$$, 
    $DvtNBoxCategoryNodeRenderer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$).$getChildContainer$(), $n$$24$$ = 0;$n$$24$$ < $DvtNBoxNodeOverflow$$.length;$n$$24$$++) {
      var $node$$270$$ = $DvtNBoxNodeOverflow$$[$n$$24$$];
      if (0 != $DvtNBoxCell$$.drawerLayout[$dvt$$5$$.$NBoxConstants$.$COLUMNS$] && 0 != $DvtNBoxCell$$.drawerLayout[$dvt$$5$$.$NBoxConstants$.$ROWS$]) {
        var $nodeContainer$$11_prevNode$$1$$ = new $DvtNBoxNode$$($DvtNBoxAutomation$$, $node$$270$$), $gridXOrigin$$1$$ = $DvtNBoxKeyboardHandler$$.__childArea.x + ($DvtNBoxKeyboardHandler$$.__childArea.$w$ - $DvtNBoxCell$$.drawerLayout[$dvt$$5$$.$NBoxConstants$.$COLUMNS$] * $DvtNBoxDefaults$$ + $DvtNBoxCategoryRolloverHandler$$) / 2, $gridYOrigin$$1$$ = $DvtNBoxCategoryRolloverHandler$$, $gridColumn$$1$$ = $n$$24$$ % $DvtNBoxCell$$.drawerLayout[$dvt$$5$$.$NBoxConstants$.$COLUMNS$];
        $DvtNBoxDataAnimationHandler$$ && ($gridColumn$$1$$ = $DvtNBoxCell$$.drawerLayout[$dvt$$5$$.$NBoxConstants$.$COLUMNS$] - $gridColumn$$1$$ - 1);
        $nodeContainer$$11_prevNode$$1$$.$setTranslate$($gridXOrigin$$1$$ + $DvtNBoxDefaults$$ * $gridColumn$$1$$, $gridYOrigin$$1$$ + $DvtNBoxCellRenderer$$ * Math.floor($n$$24$$ / $DvtNBoxCell$$.drawerLayout[$dvt$$5$$.$NBoxConstants$.$COLUMNS$]));
        $nodeContainer$$11_prevNode$$1$$.$render$($DvtNBoxCategoryNodeRenderer$$.$_container$, $DvtNBoxCell$$);
        $DvtNBoxDrawer$$ && !$DvtNBoxCategoryNode$$[$node$$270$$[$dvt$$5$$.$NBoxConstants$.ID]] && $nodeContainer$$11_prevNode$$1$$.$setAlpha$($DvtNBoxEventManager$$);
        if ($nodeContainer$$11_prevNode$$1$$ = 0 < $n$$24$$ ? $DvtNBoxNodeOverflow$$[$n$$24$$ - 1] : null) {
          $node$$270$$.__prev = $nodeContainer$$11_prevNode$$1$$, $nodeContainer$$11_prevNode$$1$$.__next = $node$$270$$;
        }
      }
    }
    $DvtNBoxCategoryNodeRenderer$$.$prepareContentPane$();
  };
  $DvtNBoxDrawerRenderer$$.$calculateNodeOrders$ = function $$DvtNBoxDrawerRenderer$$$$calculateNodeOrders$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = ["normal"], $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = {};
    if ($DvtNBoxDataAnimationHandler$$) {
      for (var $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxDrawer$$++) {
        $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDataAnimationHandler$$[$DvtNBoxDrawer$$][$dvt$$5$$.$NBoxConstants$.ID]] = !0;
      }
    }
    var $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($DvtNBoxAutomation$$), $DvtNBoxCell$$ = {};
    if ($DvtNBoxCategoryNode$$) {
      for ($DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxCategoryNode$$.length;$DvtNBoxDrawer$$++) {
        $DvtNBoxCell$$[$DvtNBoxCategoryNode$$[$DvtNBoxDrawer$$]] = !0;
      }
    }
    $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxEventManager$$ = $DvtNBoxCategoryNode$$ ? ["highlighted-selected", "highlighted-unselected", "unhighlighted-selected", "unhighlighted-unselected"] : ["highlighted-unselected", "unhighlighted-unselected"] : $DvtNBoxCategoryNode$$ && ($DvtNBoxEventManager$$ = ["unhighlighted-selected", "unhighlighted-unselected"]);
    for (var $DvtNBoxDataAnimationHandler$$ = [], $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.ID]), $DvtNBoxCategoryNode$$ = $DvtNBoxDrawer$$.nodeIndices.length, $DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxEventManager$$.length;$DvtNBoxNodeOverflow$$++) {
      for (var $DvtNBoxNode$$ = 0;$DvtNBoxNode$$ < $DvtNBoxCategoryNode$$;$DvtNBoxNode$$++) {
        var $DvtNBoxDefaults$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$.nodeIndices[$DvtNBoxNode$$]);
        ("normal" == $DvtNBoxEventManager$$[$DvtNBoxNodeOverflow$$] || "highlighted-selected" == $DvtNBoxEventManager$$[$DvtNBoxNodeOverflow$$] && $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.ID]] && $DvtNBoxCell$$[$DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.ID]] || "highlighted-unselected" == $DvtNBoxEventManager$$[$DvtNBoxNodeOverflow$$] && $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.ID]] && !$DvtNBoxCell$$[$DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.ID]] || 
        "unhighlighted-selected" == $DvtNBoxEventManager$$[$DvtNBoxNodeOverflow$$] && !$DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.ID]] && $DvtNBoxCell$$[$DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.ID]] || "unhighlighted-unselected" == $DvtNBoxEventManager$$[$DvtNBoxNodeOverflow$$] && !$DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.ID]] && !$DvtNBoxCell$$[$DvtNBoxDefaults$$[$dvt$$5$$.$NBoxConstants$.ID]]) && $DvtNBoxDataAnimationHandler$$.push($DvtNBoxDefaults$$);
      }
    }
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxDrawerRenderer$$.$getDrawerBounds$ = function $$DvtNBoxDrawerRenderer$$$$getDrawerBounds$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$().__layout.gridGap, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = new $dvt$$5$$.$Rectangle$($DvtNBoxEventManager$$.x + $DvtNBoxDataAnimationHandler$$, $DvtNBoxEventManager$$.y + $DvtNBoxDataAnimationHandler$$, Math.max($DvtNBoxEventManager$$.$w$ - 2 * $DvtNBoxDataAnimationHandler$$, 0), Math.max($DvtNBoxEventManager$$.$h$ - 2 * $DvtNBoxDataAnimationHandler$$, 
    0));
    $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($DvtNBoxKeyboardHandler$$ = parseInt($DvtNBoxKeyboardHandler$$.id.substring(0, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.ID].indexOf(":"))), $DvtNBoxDataUtils$$.$isCellMaximized$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) && ($DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, 
    $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$ROW$]), $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$]), $DvtNBoxAutomation$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($DvtNBoxAutomation$$, $DvtNBoxDrawer$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$), $DvtNBoxDrawer$$ = new $dvt$$5$$.$Rectangle$($DvtNBoxAutomation$$.x + $DvtNBoxDataAnimationHandler$$, $DvtNBoxAutomation$$.y + 
    $DvtNBoxDataAnimationHandler$$ + $DvtNBoxCategoryRolloverHandler$$.maximizedHeaderSize, Math.max($DvtNBoxAutomation$$.$w$ - 2 * $DvtNBoxDataAnimationHandler$$, 0), Math.max($DvtNBoxAutomation$$.$h$ - $DvtNBoxCategoryRolloverHandler$$.maximizedHeaderSize - 2 * $DvtNBoxDataAnimationHandler$$, 0))));
    return $DvtNBoxDrawer$$;
  };
  $DvtNBoxDrawerRenderer$$.$animateUpdate$ = function $$DvtNBoxDrawerRenderer$$$$animateUpdate$$() {
    console.log("********************* DvtNBoxDrawerRenderer.animateUpdate *********************");
  };
  $DvtNBoxDrawerRenderer$$.$animateDelete$ = function $$DvtNBoxDrawerRenderer$$$$animateDelete$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$.getData().__drawerBounds, $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.getData()[$dvt$$5$$.$NBoxConstants$.ID], $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryNode$$);
    if ($DvtNBoxCell$$) {
      var $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryNodeRenderer$$.$getSideLength$($DvtNBoxCell$$), $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryNode$$ / $DvtNBoxDrawer$$.$w$, $DvtNBoxDrawer$$ = $DvtNBoxCategoryNode$$ / $DvtNBoxDrawer$$.$h$;
      if ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$)) {
        $DvtNBoxCell$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$), $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$Matrix$($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxDrawer$$, $DvtNBoxCell$$.$_tx$ - $DvtNBoxCategoryNode$$ / 2, $DvtNBoxCell$$.$_ty$ - $DvtNBoxCategoryNode$$ / 2), $DvtNBoxNodeOverflow$$ = new $dvt$$5$$.$CustomAnimation$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$()), $DvtNBoxNodeOverflow$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_MATRIX$, 
        $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getMatrix$, $DvtNBoxKeyboardHandler$$.$setMatrix$, $DvtNBoxCategoryNode$$), $DvtNBoxAutomation$$.add($DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$);
      }
    }
    $DvtNBoxCategoryRolloverHandler$$.$_deleteContainer$.$addChild$($DvtNBoxKeyboardHandler$$);
    $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$5$$.$AnimFadeOut$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxAutomation$$.add($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$);
  };
  $DvtNBoxDrawerRenderer$$.$animateInsert$ = function $$DvtNBoxDrawerRenderer$$$$animateInsert$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataAnimationHandler$$.$UPDATE$, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxAutomation$$.$_newNBox$, $DvtNBoxDrawer$$ = $DvtNBoxKeyboardHandler$$.getData().__drawerBounds, $DvtNBoxCategoryNode$$ = $DvtNBoxKeyboardHandler$$.getData()[$dvt$$5$$.$NBoxConstants$.ID], $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCategoryNode$$);
    if ($DvtNBoxCell$$) {
      var $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryNodeRenderer$$.$getSideLength$($DvtNBoxCell$$), $DvtNBoxNodeOverflow$$ = $DvtNBoxCategoryNode$$ / $DvtNBoxDrawer$$.$w$, $DvtNBoxDrawer$$ = $DvtNBoxCategoryNode$$ / $DvtNBoxDrawer$$.$h$;
      if ($DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxCell$$)) {
        $DvtNBoxCell$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($DvtNBoxCell$$);
        $DvtNBoxCategoryNode$$ = new $dvt$$5$$.$Matrix$($DvtNBoxNodeOverflow$$, 0, 0, $DvtNBoxDrawer$$, $DvtNBoxCell$$.$_tx$ - $DvtNBoxCategoryNode$$ / 2, $DvtNBoxCell$$.$_ty$ - $DvtNBoxCategoryNode$$ / 2);
        $DvtNBoxNodeOverflow$$ = new $dvt$$5$$.$CustomAnimation$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
        $DvtNBoxNodeOverflow$$.$_animator$.$addProp$($dvt$$5$$.$Animator$.$TYPE_MATRIX$, $DvtNBoxKeyboardHandler$$, $DvtNBoxKeyboardHandler$$.$getMatrix$, $DvtNBoxKeyboardHandler$$.$setMatrix$, $DvtNBoxKeyboardHandler$$.$getMatrix$());
        var $DvtNBoxNode$$ = $DvtNBoxKeyboardHandler$$.getParent();
        $DvtNBoxCategoryRolloverHandler$$.$addChild$($DvtNBoxKeyboardHandler$$);
        $dvt$$5$$.$Playable$.$appendOnEnd$($DvtNBoxNodeOverflow$$, function() {
          $DvtNBoxNode$$.$addChild$($DvtNBoxKeyboardHandler$$);
        });
        $DvtNBoxKeyboardHandler$$.$setMatrix$($DvtNBoxCategoryNode$$);
        $DvtNBoxAutomation$$.add($DvtNBoxNodeOverflow$$, $DvtNBoxEventManager$$);
      }
    }
    $DvtNBoxKeyboardHandler$$.$setAlpha$(0);
    $DvtNBoxCategoryRolloverHandler$$ = new $dvt$$5$$.$AnimFadeIn$($DvtNBoxCategoryRolloverHandler$$.$getCtx$(), $DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getAnimationDuration$());
    $DvtNBoxAutomation$$.add($DvtNBoxCategoryRolloverHandler$$, $DvtNBoxEventManager$$);
  };
  $DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxDrawerRenderer$$$$_addAccessibilityAttributes$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxAutomation$$ = $dvt$$5$$.$Agent$.$isTouchDevice$() ? $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, "background") : $DvtNBoxEventManager$$;
    $DvtNBoxAutomation$$.$setAriaRole$("img");
    $dvt$$5$$.$Agent$.$deferAriaCreation$() || ($DvtNBoxEventManager$$ = $DvtNBoxEventManager$$.$getAriaLabel$()) && $DvtNBoxAutomation$$.$setAriaProperty$($dvt$$5$$.$NBoxConstants$.$LABEL$, $DvtNBoxEventManager$$);
  };
  var $DvtNBoxDataUtils$$ = {};
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxDataUtils$$, $dvt$$5$$.$Obj$);
  $DvtNBoxDataUtils$$.$processDataObject$ = function $$DvtNBoxDataUtils$$$$processDataObject$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$CELLS$], $DvtNBoxDataAnimationHandler$$ = {};
    if ($DvtNBoxEventManager$$) {
      for (var $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
        var $DvtNBoxDrawer$$ = $DvtNBoxEventManager$$[$DvtNBoxCategoryRolloverHandler$$], $DvtNBoxCategoryNode$$ = $DvtNBoxDrawer$$[$dvt$$5$$.$NBoxConstants$.$ROW$];
        $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$] || ($DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$] = {});
        var $DvtNBoxCell$$ = $DvtNBoxDrawer$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$];
        $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$][$DvtNBoxCell$$] = $DvtNBoxDrawer$$;
      }
    }
    for (var $DvtNBoxDrawer$$ = [], $DvtNBoxCategoryRolloverHandler$$ = {}, $DvtNBoxEventManager$$ = {}, $DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);$DvtNBoxNodeOverflow$$++) {
      $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxCategoryNode$$[$dvt$$5$$.$NBoxConstants$.ID]] = $DvtNBoxNodeOverflow$$;
    }
    $DvtNBoxKeyboardHandler$$.__rowMap = $DvtNBoxCategoryRolloverHandler$$;
    for (var $DvtNBoxNode$$ = 0;$DvtNBoxNode$$ < $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);$DvtNBoxNode$$++) {
      $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxNode$$), $DvtNBoxEventManager$$[$DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.ID]] = $DvtNBoxNode$$;
    }
    $DvtNBoxKeyboardHandler$$.__columnMap = $DvtNBoxEventManager$$;
    for ($DvtNBoxNodeOverflow$$ = 0;$DvtNBoxNodeOverflow$$ < $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);$DvtNBoxNodeOverflow$$++) {
      for ($DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxNodeOverflow$$), $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryNode$$[$dvt$$5$$.$NBoxConstants$.ID], $DvtNBoxNode$$ = 0;$DvtNBoxNode$$ < $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);$DvtNBoxNode$$++) {
        $DvtNBoxCell$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxNode$$), $DvtNBoxCell$$ = $DvtNBoxCell$$[$dvt$$5$$.$NBoxConstants$.ID], $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$] && $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$][$DvtNBoxCell$$] ? $DvtNBoxDrawer$$.push($DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$][$DvtNBoxCell$$]) : $DvtNBoxDrawer$$.push({row:$DvtNBoxCategoryNode$$, column:$DvtNBoxCell$$});
      }
    }
    $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$CELLS$] = $DvtNBoxDrawer$$;
    $DvtNBoxDataAnimationHandler$$ = {};
    $DvtNBoxCategoryNode$$ = !1;
    for ($DvtNBoxCell$$ = 0;$DvtNBoxCell$$ < $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$);$DvtNBoxCell$$++) {
      $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxCell$$), $DvtNBoxDataAnimationHandler$$[$DvtNBoxDrawer$$[$dvt$$5$$.$NBoxConstants$.ID]] = $DvtNBoxCell$$, !$DvtNBoxCategoryNode$$ && ($DvtNBoxDrawer$$[$dvt$$5$$.$NBoxConstants$.$GROUP_CATEGORY$] || $DvtNBoxDrawer$$._groupCategories || $DvtNBoxDrawer$$._groupLabels) && ($DvtNBoxCategoryNode$$ = !0);
    }
    $DvtNBoxKeyboardHandler$$.__nodeMap = $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxKeyboardHandler$$.__grouping = "none" != $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR$] ? $DvtNBoxCategoryNode$$ : !1;
    $DvtNBoxDataUtils$$.$getGrouping$($DvtNBoxAutomation$$) && $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$] = null, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($DvtNBoxAutomation$$, $dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$), $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = null, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($DvtNBoxAutomation$$, 
    $dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$));
    if ($DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$] && isNaN($DvtNBoxCategoryRolloverHandler$$[$DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$]]) || $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] && isNaN($DvtNBoxEventManager$$[$DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$]])) {
      $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$] = null, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($DvtNBoxAutomation$$, $dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$), $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$] = null, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($DvtNBoxAutomation$$, $dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$);
    }
    if (($DvtNBoxAutomation$$ = $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$LEGEND$]) && $DvtNBoxAutomation$$.sections) {
      var $DvtNBoxDefaults$$ = "color iconFill iconShape iconPattern indicatorColor indicatorIconColor indicatorIconShape indicatorIconPattern".split(" ");
      $DvtNBoxAutomation$$.sections = $DvtNBoxAutomation$$.sections.slice(0);
      $DvtNBoxAutomation$$.sections.sort(function($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
        return $dvt$$5$$.$ArrayUtils$.$getIndex$($DvtNBoxDefaults$$, $DvtNBoxAutomation$$.type) - $dvt$$5$$.$ArrayUtils$.$getIndex$($DvtNBoxDefaults$$, $DvtNBoxKeyboardHandler$$.type);
      });
      $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$HIDDEN_CATEGORIES$];
      $DvtNBoxAutomation$$.hideAndShowBehavior = "on";
      $DvtNBoxAutomation$$.textStyle = $DvtNBoxKeyboardHandler$$.styleDefaults.__legendDefaults.itemStyle;
      $DvtNBoxAutomation$$.layout = {rowGap:2};
      $DvtNBoxAutomation$$.symbolWidth = 16;
      $DvtNBoxAutomation$$.symbolHeight = 16;
      for ($DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxAutomation$$.sections.length;$DvtNBoxCategoryRolloverHandler$$++) {
        for ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.sections[$DvtNBoxCategoryRolloverHandler$$], $DvtNBoxDataAnimationHandler$$.titleStyle = $DvtNBoxKeyboardHandler$$.styleDefaults.__legendDefaults.sectionStyle, $DvtNBoxCategoryNode$$ = 0;$DvtNBoxCategoryNode$$ < $DvtNBoxDataAnimationHandler$$.items.length;$DvtNBoxCategoryNode$$++) {
          $DvtNBoxCell$$ = $DvtNBoxDataAnimationHandler$$.items[$DvtNBoxCategoryNode$$], $DvtNBoxCell$$.categoryVisibility = -1 != $dvt$$5$$.$ArrayUtils$.$getIndex$($DvtNBoxEventManager$$, $DvtNBoxCell$$.categories && 0 < $DvtNBoxCell$$.categories.length ? $DvtNBoxCell$$.categories[0] : $DvtNBoxCell$$.id) ? "hidden" : null, $DvtNBoxCell$$.indicatorColor && ($DvtNBoxCell$$.color = $DvtNBoxCell$$.indicatorColor), $DvtNBoxCell$$.color || ($DvtNBoxCell$$.color = $DvtNBoxKeyboardHandler$$.styleDefaults.__legendDefaults.markerColor), 
          $DvtNBoxCell$$.shape && ($DvtNBoxCell$$.markerShape = $DvtNBoxCell$$.shape);
        }
      }
    }
  };
  $DvtNBoxDataUtils$$.$getColumnCount$ = function $$DvtNBoxDataUtils$$$$getColumnCount$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$COLUMNS$].length;
  };
  $DvtNBoxDataUtils$$.$getRowCount$ = function $$DvtNBoxDataUtils$$$$getRowCount$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$ROWS$].length;
  };
  $DvtNBoxDataUtils$$.$getColumnLabel$ = function $$DvtNBoxDataUtils$$$$getColumnLabel$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$));
    return $DvtNBoxEventManager$$ && $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$LABEL$] ? $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$LABEL$] : null;
  };
  $DvtNBoxDataUtils$$.$getRowLabel$ = function $$DvtNBoxDataUtils$$$$getRowLabel$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$));
    return $DvtNBoxEventManager$$ && $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$LABEL$] ? $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$LABEL$] : null;
  };
  $DvtNBoxDataUtils$$.$getCellByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellByRowColumn$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCell$($dvt$$5$$, $DvtNBoxDataUtils$$.$getCellIndexByRowColumn$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$))) ? $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$5$$, $DvtNBoxAutomation$$) : null;
  };
  $DvtNBoxDataUtils$$.$getCellIndexByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellIndexByRowColumn$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxDataUtils$$.$getColumnIndex$($dvt$$5$$, $DvtNBoxKeyboardHandler$$) + $DvtNBoxDataUtils$$.$getRowIndex$($dvt$$5$$, $DvtNBoxAutomation$$) * $DvtNBoxDataUtils$$.$getColumnCount$($dvt$$5$$);
  };
  $DvtNBoxDataUtils$$.$getColumn$ = function $$DvtNBoxDataUtils$$$$getColumn$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$COLUMNS$][$DvtNBoxKeyboardHandler$$];
  };
  $DvtNBoxDataUtils$$.$getRow$ = function $$DvtNBoxDataUtils$$$$getRow$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$ROWS$][$DvtNBoxKeyboardHandler$$];
  };
  $DvtNBoxDataUtils$$.$getMaximizedRow$ = function $$DvtNBoxDataUtils$$$$getMaximizedRow$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_ROW$];
  };
  $DvtNBoxDataUtils$$.$getMaximizedColumn$ = function $$DvtNBoxDataUtils$$$$getMaximizedColumn$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$MAXIMIZED_COLUMN$];
  };
  $DvtNBoxDataUtils$$.$getRowIndex$ = function $$DvtNBoxDataUtils$$$$getRowIndex$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    return $dvt$$5$$.$getOptions$().__rowMap[$DvtNBoxAutomation$$];
  };
  $DvtNBoxDataUtils$$.$getColumnIndex$ = function $$DvtNBoxDataUtils$$$$getColumnIndex$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    return $dvt$$5$$.$getOptions$().__columnMap[$DvtNBoxAutomation$$];
  };
  $DvtNBoxDataUtils$$.$getCell$ = function $$DvtNBoxDataUtils$$$$getCell$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$CELLS$][$DvtNBoxKeyboardHandler$$];
  };
  $DvtNBoxDataUtils$$.$getNodeCount$ = function $$DvtNBoxDataUtils$$$$getNodeCount$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$NODES$] ? $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$NODES$].length : 0;
  };
  $DvtNBoxDataUtils$$.$getNode$ = function $$DvtNBoxDataUtils$$$$getNode$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$NODES$][$DvtNBoxKeyboardHandler$$];
  };
  $DvtNBoxDataUtils$$.$getNodeIndex$ = function $$DvtNBoxDataUtils$$$$getNodeIndex$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    return $dvt$$5$$.$getOptions$().__nodeMap[$DvtNBoxAutomation$$];
  };
  $DvtNBoxDataUtils$$.$getCellIndex$ = function $$DvtNBoxDataUtils$$$$getCellIndex$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$ROW$]), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$]), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);
    return $DvtNBoxDataAnimationHandler$$ + $DvtNBoxEventManager$$ * $DvtNBoxCategoryRolloverHandler$$;
  };
  $DvtNBoxDataUtils$$.$getIcon$ = function $$DvtNBoxDataUtils$$$$getIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$ICON$] ? $DvtNBoxStyleUtils$$.$getStyledIcon$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$ICON$]) : null;
  };
  $DvtNBoxDataUtils$$.$getIndicatorIcon$ = function $$DvtNBoxDataUtils$$$$getIndicatorIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON$] ? $DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON$]) : null;
  };
  $DvtNBoxDataUtils$$.$getSelectedItems$ = function $$DvtNBoxDataUtils$$$$getSelectedItems$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$SELECTION$];
  };
  $DvtNBoxDataUtils$$.$setSelectedItems$ = function $$DvtNBoxDataUtils$$$$setSelectedItems$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$SELECTION$] = $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDataUtils$$.$getHighlightedItems$ = function $$DvtNBoxDataUtils$$$$getHighlightedItems$$($DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$];
    if ($DvtNBoxEventManager$$ && 0 < $DvtNBoxEventManager$$.length) {
      for ($DvtNBoxKeyboardHandler$$ = [], $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxDataUtils$$.$getNodeCount$($DvtNBoxAutomation$$);$DvtNBoxEventManager$$++) {
        var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$);
        $DvtNBoxDataUtils$$.$isNodeHighlighted$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$) && $DvtNBoxKeyboardHandler$$.push($DvtNBoxDataAnimationHandler$$);
      }
    }
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDataUtils$$.$getGrouping$ = function $$DvtNBoxDataUtils$$$$getGrouping$$($dvt$$5$$) {
    return $dvt$$5$$.$getOptions$().__grouping;
  };
  $DvtNBoxDataUtils$$.$getGroupAttributes$ = function $$DvtNBoxDataUtils$$$$getGroupAttributes$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$GROUP_ATTRIBUTES$];
  };
  $DvtNBoxDataUtils$$.$getGroupBehavior$ = function $$DvtNBoxDataUtils$$$$getGroupBehavior$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR$];
  };
  $DvtNBoxDataUtils$$.$getNodeGroupId$ = function $$DvtNBoxDataUtils$$$$getNodeGroupId$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$[$dvt$$5$$.$NBoxConstants$.$GROUP_CATEGORY$] ? $DvtNBoxAutomation$$[$dvt$$5$$.$NBoxConstants$.$GROUP_CATEGORY$] : ($DvtNBoxAutomation$$ = $DvtNBoxAutomation$$._groupCategories) && 0 < $DvtNBoxAutomation$$.length ? $DvtNBoxAutomation$$.join(";") : null;
  };
  $DvtNBoxDataUtils$$.$getXPercentage$ = function $$DvtNBoxDataUtils$$$$getXPercentage$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (!isNaN($DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$X_PERCENTAGE$])) {
      return $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$X_PERCENTAGE$];
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getColumnCount$($DvtNBoxAutomation$$);
    return ($DvtNBoxDataUtils$$.$getColumnIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$]) + .5) / $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataUtils$$.$getYPercentage$ = function $$DvtNBoxDataUtils$$$$getYPercentage$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (!isNaN($DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$Y_PERCENTAGE$])) {
      return $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$Y_PERCENTAGE$];
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getRowCount$($DvtNBoxAutomation$$);
    return ($DvtNBoxDataUtils$$.$getRowIndex$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$ROW$]) + .5) / $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataUtils$$.$getOtherThreshold$ = function $$DvtNBoxDataUtils$$$$getOtherThreshold$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$OTHER_THRESHOLD$];
  };
  $DvtNBoxDataUtils$$.$getOtherColor$ = function $$DvtNBoxDataUtils$$$$getOtherColor$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$OTHER_COLOR$];
  };
  $DvtNBoxDataUtils$$.$getDrawer$ = function $$DvtNBoxDataUtils$$$$getDrawer$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$DRAWER$];
  };
  $DvtNBoxDataUtils$$.$getCategoryNode$ = function $$DvtNBoxDataUtils$$$$getCategoryNode$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$().__groups, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$;
    $DvtNBoxEventManager$$ == $dvt$$5$$.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.substring(0, $DvtNBoxKeyboardHandler$$.indexOf(":")), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxKeyboardHandler$$.substring($DvtNBoxKeyboardHandler$$.indexOf(":") + 1), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataAnimationHandler$$[$DvtNBoxEventManager$$]);
    return $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryRolloverHandler$$] : null;
  };
  $DvtNBoxDataUtils$$.$getCategoryNodeLabels$ = function $$DvtNBoxDataUtils$$$$getCategoryNodeLabels$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if ($DvtNBoxKeyboardHandler$$.__labels) {
      return $DvtNBoxKeyboardHandler$$.__labels;
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$.nodeIndices[0]);
    if ($DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$GROUP_CATEGORY$]) {
      return $DvtNBoxKeyboardHandler$$.__labels = [$DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$GROUP_CATEGORY$]];
    }
    $DvtNBoxKeyboardHandler$$.__labels = [];
    if ($DvtNBoxEventManager$$._groupCategories) {
      for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxAutomation$$.$getOptions$()._groupLabels, $DvtNBoxCategoryRolloverHandler$$ = 0;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxEventManager$$._groupCategories.length;$DvtNBoxCategoryRolloverHandler$$++) {
        $DvtNBoxKeyboardHandler$$.__labels[$DvtNBoxCategoryRolloverHandler$$] = $DvtNBoxDataAnimationHandler$$ && $DvtNBoxDataAnimationHandler$$[$DvtNBoxEventManager$$._groupCategories[$DvtNBoxCategoryRolloverHandler$$]] ? $DvtNBoxDataAnimationHandler$$[$DvtNBoxEventManager$$._groupCategories[$DvtNBoxCategoryRolloverHandler$$]] : $DvtNBoxEventManager$$._groupCategories[$DvtNBoxCategoryRolloverHandler$$];
      }
    }
    return $DvtNBoxKeyboardHandler$$.__labels;
  };
  $DvtNBoxDataUtils$$.$setDisplayable$ = function $$DvtNBoxDataUtils$$$$setDisplayable$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $dvt$$5$$ = $dvt$$5$$.$getDisplayables$();
    $DvtNBoxEventManager$$ = $DvtNBoxEventManager$$ ? "__displayable:" + $DvtNBoxEventManager$$ : "__displayable";
    $DvtNBoxAutomation$$[$DvtNBoxEventManager$$] ? $dvt$$5$$[$DvtNBoxAutomation$$[$DvtNBoxEventManager$$]] = $DvtNBoxKeyboardHandler$$ : ($DvtNBoxAutomation$$[$DvtNBoxEventManager$$] = $dvt$$5$$.length, $dvt$$5$$.push($DvtNBoxKeyboardHandler$$));
  };
  $DvtNBoxDataUtils$$.$getDisplayable$ = function $$DvtNBoxDataUtils$$$$getDisplayable$$($dvt$$5$$, $DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (!$DvtNBoxAutomation$$) {
      return null;
    }
    $DvtNBoxAutomation$$ = $DvtNBoxAutomation$$[$DvtNBoxKeyboardHandler$$ ? "__displayable:" + $DvtNBoxKeyboardHandler$$ : "__displayable"];
    $dvt$$5$$ = $dvt$$5$$.$getDisplayables$();
    return null == $DvtNBoxAutomation$$ ? null : $dvt$$5$$[$DvtNBoxAutomation$$];
  };
  $DvtNBoxDataUtils$$.$isMaximizeEnabled$ = function $$DvtNBoxDataUtils$$$$isMaximizeEnabled$$($dvt$$5$$) {
    return "off" != $dvt$$5$$.$getOptions$().cellMaximize;
  };
  $DvtNBoxDataUtils$$.$getCellContent$ = function $$DvtNBoxDataUtils$$$$getCellContent$$($dvt$$5$$) {
    return "counts" == $dvt$$5$$.$getOptions$().cellContent ? "counts" : "auto";
  };
  $DvtNBoxDataUtils$$.$isCellMinimized$ = function $$DvtNBoxDataUtils$$$$isCellMinimized$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$);
    if (!$DvtNBoxEventManager$$ && !$DvtNBoxDataAnimationHandler$$) {
      return !1;
    }
    var $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDrawer$$ = $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$ROW$], $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$];
    return $DvtNBoxEventManager$$ && $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxEventManager$$ != $DvtNBoxDrawer$$ || $DvtNBoxDataAnimationHandler$$ != $DvtNBoxCategoryRolloverHandler$$ : $DvtNBoxEventManager$$ != $DvtNBoxDrawer$$ && $DvtNBoxDataAnimationHandler$$ != $DvtNBoxCategoryRolloverHandler$$;
  };
  $DvtNBoxDataUtils$$.$isCellMaximized$ = function $$DvtNBoxDataUtils$$$$isCellMaximized$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$), $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDrawer$$ = $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$COLUMN$];
    return $DvtNBoxEventManager$$ == $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$ROW$] && $DvtNBoxDataAnimationHandler$$ == $DvtNBoxDrawer$$;
  };
  $DvtNBoxDataUtils$$.$getLegend$ = function $$DvtNBoxDataUtils$$$$getLegend$$($dvt$$5$$) {
    return $dvt$$5$$.$getOptions$()._legend;
  };
  $DvtNBoxDataUtils$$.$isNodeHidden$ = function $$DvtNBoxDataUtils$$$$isNodeHidden$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$();
    $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$HIDDEN_CATEGORIES$] && !$DvtNBoxEventManager$$.__hiddenMap && ($DvtNBoxEventManager$$.__hiddenMap = $dvt$$5$$.$ArrayUtils$.$createBooleanMap$($DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$HIDDEN_CATEGORIES$]));
    return $dvt$$5$$.$ArrayUtils$.$hasAnyMapItem$($DvtNBoxEventManager$$.__hiddenMap, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$CATEGORIES$]);
  };
  $DvtNBoxDataUtils$$.$isNodeHighlighted$ = function $$DvtNBoxDataUtils$$$$isNodeHighlighted$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$();
    $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$] && !$DvtNBoxEventManager$$.__highlightedMap && ($DvtNBoxEventManager$$.__highlightedMap = $dvt$$5$$.$ArrayUtils$.$createBooleanMap$($DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$]));
    return "all" == $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$HIGHLIGHT_MATCH$] ? $dvt$$5$$.$ArrayUtils$.$hasAllMapItems$($DvtNBoxEventManager$$.__highlightedMap, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$CATEGORIES$]) : $dvt$$5$$.$ArrayUtils$.$hasAnyMapItem$($DvtNBoxEventManager$$.__highlightedMap, $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$CATEGORIES$]);
  };
  $DvtNBoxDataUtils$$.$getNodeScrollableContainer$ = function $$DvtNBoxDataUtils$$$$getNodeScrollableContainer$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    if (!$DvtNBoxAutomation$$) {
      return null;
    }
    var $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDrawer$($dvt$$5$$);
    if ($DvtNBoxKeyboardHandler$$ && ($DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$5$$, $DvtNBoxKeyboardHandler$$))) {
      return $DvtNBoxKeyboardHandler$$.$getChildContainer$();
    }
    $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCellIndex$($dvt$$5$$, $DvtNBoxAutomation$$.getData());
    return $DvtNBoxDataUtils$$.$isCellMaximized$($dvt$$5$$, $DvtNBoxKeyboardHandler$$) ? ($DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getCell$($dvt$$5$$, $DvtNBoxKeyboardHandler$$), $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$5$$, $DvtNBoxKeyboardHandler$$).$getChildContainer$()) : null;
  };
  $DvtNBoxDataUtils$$.$getNodeLabel$ = function $$DvtNBoxDataUtils$$$$getNodeLabel$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (!$DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL$]) {
      return null;
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $dvt$$5$$.$NBoxConstants$.$LABEL$);
    if ($DvtNBoxEventManager$$) {
      return $DvtNBoxEventManager$$;
    }
    $DvtNBoxEventManager$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()) ? $dvt$$5$$.$OutputText$.$H_ALIGN_RIGHT$ : $dvt$$5$$.$OutputText$.$H_ALIGN_LEFT$;
    $DvtNBoxEventManager$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getNodeLabelStyle$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$);
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$5$$.$NBoxConstants$.$LABEL$);
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$ = function $$DvtNBoxDataUtils$$$$getNodeSecondaryLabel$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if (!$DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL$]) {
      return null;
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL$);
    if ($DvtNBoxEventManager$$) {
      return $DvtNBoxEventManager$$;
    }
    $DvtNBoxEventManager$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$()) ? $dvt$$5$$.$OutputText$.$H_ALIGN_RIGHT$ : $dvt$$5$$.$OutputText$.$H_ALIGN_LEFT$;
    $DvtNBoxEventManager$$ = $DvtNBoxRenderer$$.$createText$($DvtNBoxAutomation$$.$getCtx$(), $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL$], $DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($DvtNBoxAutomation$$), $DvtNBoxEventManager$$, $dvt$$5$$.$OutputText$.$V_ALIGN_MIDDLE$);
    $DvtNBoxDataUtils$$.$setDisplayable$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL$);
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataUtils$$.$fireSetPropertyEvent$ = function $$DvtNBoxDataUtils$$$$fireSetPropertyEvent$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $dvt$$5$$.$EventFactory$.$newAdfPropertyChangeEvent$($DvtNBoxKeyboardHandler$$, null);
    $DvtNBoxAutomation$$.$processEvent$($DvtNBoxEventManager$$);
  };
  $DvtNBoxDataUtils$$.$getMaximizedCellIndex$ = function $$DvtNBoxDataUtils$$$$getMaximizedCellIndex$$($dvt$$5$$) {
    var $DvtNBoxAutomation$$ = null, $DvtNBoxKeyboardHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($dvt$$5$$), $DvtNBoxEventManager$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($dvt$$5$$);
    $DvtNBoxKeyboardHandler$$ && $DvtNBoxEventManager$$ && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getColumnCount$($dvt$$5$$), $DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($dvt$$5$$, $DvtNBoxEventManager$$) + $DvtNBoxAutomation$$ * $DvtNBoxDataUtils$$.$getRowIndex$($dvt$$5$$, $DvtNBoxKeyboardHandler$$));
    return $DvtNBoxAutomation$$;
  };
  $DvtNBoxDataUtils$$.$isDrawerSelected$ = function $$DvtNBoxDataUtils$$$$isDrawerSelected$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = !1, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($DvtNBoxAutomation$$);
    if ($DvtNBoxDataAnimationHandler$$) {
      for (var $DvtNBoxCategoryRolloverHandler$$ = {}, $DvtNBoxEventManager$$ = 0;$DvtNBoxEventManager$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxEventManager$$++) {
        $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDataAnimationHandler$$[$DvtNBoxEventManager$$]] = !0;
      }
      for (var $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.getData().nodeIndices, $DvtNBoxEventManager$$ = !0, $DvtNBoxDrawer$$ = 0;$DvtNBoxDrawer$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxDrawer$$++) {
        var $DvtNBoxCategoryNode$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxDrawer$$]);
        if (!$DvtNBoxCategoryRolloverHandler$$[$DvtNBoxCategoryNode$$[$dvt$$5$$.$NBoxConstants$.ID]]) {
          $DvtNBoxEventManager$$ = !1;
          break;
        }
      }
    }
    return $DvtNBoxEventManager$$;
  };
  $DvtNBoxDataUtils$$.$buildAriaDesc$ = function $$DvtNBoxDataUtils$$$$buildAriaDesc$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$, $DvtNBoxDataAnimationHandler$$) {
    $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxCategoryNode$$ || $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxDrawer$$ ? $dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$NBOX_PREFIX$, "GROUP_NODE"), $DvtNBoxEventManager$$]) : $DvtNBoxEventManager$$;
    var $DvtNBoxCategoryRolloverHandler$$ = [];
    $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxCategoryRolloverHandler$$.push($dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "STATE_SELECTED")) : $DvtNBoxCategoryRolloverHandler$$.push($dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "STATE_UNSELECTED"));
    $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxCategoryNode$$ ? ($DvtNBoxAutomation$$ = $DvtNBoxKeyboardHandler$$.getData().nodeIndices.length, $DvtNBoxCategoryRolloverHandler$$.push($dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "STATE_COLLAPSED")), $DvtNBoxCategoryRolloverHandler$$.push($dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$NBOX_PREFIX$, "SIZE"), $DvtNBoxAutomation$$]))) : 
    $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxDrawer$$ && ($DvtNBoxAutomation$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$.getData()[$dvt$$5$$.$NBoxConstants$.ID]).nodeIndices.length, $DvtNBoxCategoryRolloverHandler$$.push($dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "STATE_EXPANDED")), $DvtNBoxCategoryRolloverHandler$$.push($dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$5$$.$Bundle$.$getTranslatedString$($dvt$$5$$.$Bundle$.$NBOX_PREFIX$, 
    "SIZE"), $DvtNBoxAutomation$$])));
    return $dvt$$5$$.$Displayable$.$generateAriaLabel$($DvtNBoxEventManager$$, $DvtNBoxCategoryRolloverHandler$$);
  };
  $DvtNBoxDataUtils$$.$getFirstNavigableNode$ = function $$DvtNBoxDataUtils$$$$getFirstNavigableNode$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null;
    if (0 < $DvtNBoxAutomation$$.$getNumChildren$()) {
      var $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getChildAt$(0), $DvtNBoxEventManager$$;
      do {
        $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNode$$ ? $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.getData().__prev : $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNodeOverflow$$ && ($DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.__prev), $DvtNBoxKeyboardHandler$$ = $DvtNBoxEventManager$$ ? $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$5$$, $DvtNBoxEventManager$$) : $DvtNBoxKeyboardHandler$$;
      } while ($DvtNBoxEventManager$$);
    }
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDataUtils$$.$getLastNavigableNode$ = function $$DvtNBoxDataUtils$$$$getLastNavigableNode$$($dvt$$5$$, $DvtNBoxAutomation$$) {
    var $DvtNBoxKeyboardHandler$$ = null, $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getNumChildren$();
    if (0 < $DvtNBoxEventManager$$) {
      $DvtNBoxKeyboardHandler$$ = $DvtNBoxAutomation$$.$getChildAt$($DvtNBoxEventManager$$ - 1);
      do {
        $DvtNBoxKeyboardHandler$$ = ($DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNode$$ ? $DvtNBoxKeyboardHandler$$.getData().__next : null) ? $DvtNBoxDataUtils$$.$getDisplayable$($dvt$$5$$, $DvtNBoxEventManager$$) : $DvtNBoxKeyboardHandler$$;
      } while ($DvtNBoxEventManager$$);
    }
    return $DvtNBoxKeyboardHandler$$;
  };
  $DvtNBoxDataUtils$$.$getNextNavigableNode$ = function $$DvtNBoxDataUtils$$$$getNextNavigableNode$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$, $DvtNBoxEventManager$$) {
    $DvtNBoxEventManager$$ = $DvtNBoxEventManager$$.keyCode == $dvt$$5$$.KeyboardEvent.$RIGHT_ARROW$ || $DvtNBoxEventManager$$.keyCode == $dvt$$5$$.KeyboardEvent.$DOWN_ARROW$ ? !0 : !1;
    var $DvtNBoxDataAnimationHandler$$;
    $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNode$$ ? $DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$ ? $DvtNBoxKeyboardHandler$$.getData().__next : $DvtNBoxKeyboardHandler$$.getData().__prev : $DvtNBoxKeyboardHandler$$ instanceof $DvtNBoxNodeOverflow$$ && ($DvtNBoxDataAnimationHandler$$ = $DvtNBoxEventManager$$ ? null : $DvtNBoxKeyboardHandler$$.__prev);
    return $DvtNBoxDataAnimationHandler$$ ? $DvtNBoxDataUtils$$.$getDisplayable$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$) : $DvtNBoxKeyboardHandler$$;
  };
  var $DvtNBoxStyleUtils$$ = {};
  $dvt$$5$$.$Obj$.$createSubclass$($DvtNBoxStyleUtils$$, $dvt$$5$$.$Obj$);
  $DvtNBoxStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDisplay$$($DvtNBoxAutomation$$) {
    if (!$DvtNBoxAutomation$$.$_animationAllowed$) {
      return "none";
    }
    $DvtNBoxAutomation$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$ANIMATION_ON_DISPLAY$];
    "auto" == $DvtNBoxAutomation$$ && ($DvtNBoxAutomation$$ = $dvt$$5$$.$BlackBoxAnimationHandler$.$ALPHA_FADE$);
    return $DvtNBoxAutomation$$;
  };
  $DvtNBoxStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDataChange$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$_animationAllowed$ ? $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$ANIMATION_ON_DATA_CHANGE$] : "none";
  };
  $DvtNBoxStyleUtils$$.$getAnimationDuration$ = function $$DvtNBoxStyleUtils$$$$getAnimationDuration$$($DvtNBoxAutomation$$) {
    return $dvt$$5$$.$StyleUtils$.$getTimeMilliseconds$($DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$ANIMATION_DURATION$]) / 1E3;
  };
  $DvtNBoxStyleUtils$$.$getColumnLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getColumnLabelStyle$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$COLUMN_LABEL_STYLE$], $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getColumn$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    return $DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL_STYLE$] ? $dvt$$5$$.$JsonUtils$.$merge$(new $dvt$$5$$.$CSSStyle$($DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL_STYLE$]), $DvtNBoxEventManager$$) : $DvtNBoxEventManager$$;
  };
  $DvtNBoxStyleUtils$$.$getRowLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getRowLabelStyle$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$ROW_LABEL_STYLE$], $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getRow$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    return $DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL_STYLE$] ? $dvt$$5$$.$JsonUtils$.$merge$(new $dvt$$5$$.$CSSStyle$($DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL_STYLE$]), $DvtNBoxEventManager$$) : $DvtNBoxEventManager$$;
  };
  $DvtNBoxStyleUtils$$.$getCellStyle$ = function $$DvtNBoxStyleUtils$$$$getCellStyle$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$(), $DvtNBoxDataAnimationHandler$$ = $dvt$$5$$.$NBoxConstants$.STYLE, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($DvtNBoxAutomation$$), $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($DvtNBoxAutomation$$);
    $DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) ? $DvtNBoxDataAnimationHandler$$ = "minimizedStyle" : !$DvtNBoxCategoryRolloverHandler$$ && !$DvtNBoxDrawer$$ || $DvtNBoxDataUtils$$.$isCellMinimized$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) || ($DvtNBoxDataAnimationHandler$$ = "maximizedStyle");
    $DvtNBoxEventManager$$ = $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$CELL_DEFAULTS$][$DvtNBoxDataAnimationHandler$$];
    $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    return $DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDataAnimationHandler$$] ? $dvt$$5$$.$JsonUtils$.$merge$(new $dvt$$5$$.$CSSStyle$($DvtNBoxCategoryRolloverHandler$$[$DvtNBoxDataAnimationHandler$$]), $DvtNBoxEventManager$$) : $DvtNBoxEventManager$$;
  };
  $DvtNBoxStyleUtils$$.$getCellLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellLabelStyle$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$CELL_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$LABEL_STYLE$], $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getCell$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$);
    return $DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL_STYLE$] ? $dvt$$5$$.$JsonUtils$.$merge$(new $dvt$$5$$.$CSSStyle$($DvtNBoxDataAnimationHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL_STYLE$]), $DvtNBoxEventManager$$) : $DvtNBoxEventManager$$;
  };
  $DvtNBoxStyleUtils$$.$getCellShowCount$ = function $$DvtNBoxStyleUtils$$$$getCellShowCount$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$SHOW_COUNT$] ? $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$SHOW_COUNT$] : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$CELL_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$SHOW_COUNT$];
  };
  $DvtNBoxStyleUtils$$.$getCellCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellCountLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$CELL_DEFAULTS$].countLabelStyle;
  };
  $DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellBodyCountLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$CELL_DEFAULTS$].bodyCountLabelStyle;
  };
  $DvtNBoxStyleUtils$$.$getCellDropTargetStyle$ = function $$DvtNBoxStyleUtils$$$$getCellDropTargetStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$CELL_DEFAULTS$].dropTargetStyle;
  };
  $DvtNBoxStyleUtils$$.$getNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$LABEL_STYLE$];
  };
  $DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeSecondaryLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$SECONDARY_LABEL_STYLE$];
  };
  $DvtNBoxStyleUtils$$.$getNodeColor$ = function $$DvtNBoxStyleUtils$$$$getNodeColor$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] ? $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$COLOR$];
  };
  $DvtNBoxStyleUtils$$.$getNodeBorderColor$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderColor$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$BORDER_COLOR$] ? $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$BORDER_COLOR$] : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$BORDER_COLOR$];
    return $DvtNBoxEventManager$$ ? $DvtNBoxEventManager$$ : null;
  };
  $DvtNBoxStyleUtils$$.$getNodeBorderWidth$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderWidth$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$BORDER_WIDTH$] ? $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$BORDER_WIDTH$] : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$BORDER_WIDTH$];
    return $DvtNBoxEventManager$$ ? $DvtNBoxEventManager$$ : null;
  };
  $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getNodeIndicatorColor$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$INDICATOR_COLOR$] ? $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$INDICATOR_COLOR$] : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$INDICATOR_COLOR$];
  };
  $DvtNBoxStyleUtils$$.$getStyledIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $dvt$$5$$.$JsonUtils$.$merge$($DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$ICON_DEFAULTS$]);
  };
  $DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIndicatorIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    return $dvt$$5$$.$JsonUtils$.$merge$($DvtNBoxKeyboardHandler$$, $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$]);
  };
  $DvtNBoxStyleUtils$$.$getFadedNodeAlpha$ = function $$DvtNBoxStyleUtils$$$$getFadedNodeAlpha$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$].alphaFade;
  };
  $DvtNBoxStyleUtils$$.$getScrollbarStyleMap$ = function $$DvtNBoxStyleUtils$$$$getScrollbarStyleMap$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$].__scrollbar;
  };
  $DvtNBoxStyleUtils$$.$getCategoryNodeColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeColor$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if ("none" == $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) || $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("color")) {
      return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$COLOR$];
    }
    if ($DvtNBoxKeyboardHandler$$.otherNode) {
      return $DvtNBoxDataUtils$$.$getOtherColor$($DvtNBoxAutomation$$);
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.nodeIndices, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$[0])[$dvt$$5$$.$NBoxConstants$.$COLOR$];
    if (!$DvtNBoxDataAnimationHandler$$) {
      return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$COLOR$];
    }
    for (var $DvtNBoxCategoryRolloverHandler$$ = 1;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
      var $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$[$DvtNBoxCategoryRolloverHandler$$]);
      if ($DvtNBoxDataAnimationHandler$$ != $DvtNBoxDrawer$$[$dvt$$5$$.$NBoxConstants$.$COLOR$]) {
        return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$COLOR$];
      }
    }
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeIndicatorColor$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if ("none" == $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) || $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorColor")) {
      return null;
    }
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$.nodeIndices, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$[0])[$dvt$$5$$.$NBoxConstants$.$INDICATOR_COLOR$];
    if (!$DvtNBoxDataAnimationHandler$$) {
      return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$INDICATOR_COLOR$];
    }
    for (var $DvtNBoxCategoryRolloverHandler$$ = 1;$DvtNBoxCategoryRolloverHandler$$ < $DvtNBoxEventManager$$.length;$DvtNBoxCategoryRolloverHandler$$++) {
      var $DvtNBoxDrawer$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxEventManager$$[$DvtNBoxCategoryRolloverHandler$$]);
      if ($DvtNBoxDataAnimationHandler$$ != $DvtNBoxDrawer$$[$dvt$$5$$.$NBoxConstants$.$INDICATOR_COLOR$]) {
        return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$INDICATOR_COLOR$];
      }
    }
    return $DvtNBoxDataAnimationHandler$$;
  };
  $DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledCategoryIndicatorIcon$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    if ("none" == $DvtNBoxDataUtils$$.$getGroupBehavior$($DvtNBoxAutomation$$) || $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconShape") && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconColor") && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconPattern")) {
      return null;
    }
    var $DvtNBoxEventManager$$ = {}, $DvtNBoxDataAnimationHandler$$ = $DvtNBoxKeyboardHandler$$.nodeIndices, $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[0])[$dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON$];
    if (!$DvtNBoxCategoryRolloverHandler$$) {
      return null;
    }
    $DvtNBoxCategoryRolloverHandler$$.width && ($DvtNBoxEventManager$$.width = $DvtNBoxCategoryRolloverHandler$$.width);
    $DvtNBoxCategoryRolloverHandler$$.height && ($DvtNBoxEventManager$$.height = $DvtNBoxCategoryRolloverHandler$$.height);
    $DvtNBoxCategoryRolloverHandler$$.borderWidth && ($DvtNBoxEventManager$$.borderWidth = $DvtNBoxCategoryRolloverHandler$$.borderWidth);
    $DvtNBoxCategoryRolloverHandler$$.borderStyle && ($DvtNBoxEventManager$$.borderStyle = $DvtNBoxCategoryRolloverHandler$$.borderStyle);
    $DvtNBoxCategoryRolloverHandler$$.borderColor && ($DvtNBoxEventManager$$.borderColor = $DvtNBoxCategoryRolloverHandler$$.borderColor);
    $DvtNBoxCategoryRolloverHandler$$.borderRadius && ($DvtNBoxEventManager$$.borderRadius = $DvtNBoxCategoryRolloverHandler$$.borderRadius);
    var $DvtNBoxDrawer$$ = !0;
    if (!$DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) || -1 != $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconShape")) {
      for (var $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$SHAPE$], $DvtNBoxCell$$ = 1;$DvtNBoxCell$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxCell$$++) {
        var $DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxCell$$])[$dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON$];
        $DvtNBoxNodeOverflow$$ && $DvtNBoxCategoryNode$$ != $DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.$SHAPE$] && ($DvtNBoxDrawer$$ = !1);
      }
      $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$SHAPE$] = $DvtNBoxDrawer$$ ? $DvtNBoxCategoryNode$$ : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$SHAPE$];
    }
    $DvtNBoxDrawer$$ = !0;
    if (!$DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) || -1 != $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconColor")) {
      $DvtNBoxCategoryNode$$ = $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$COLOR$];
      for ($DvtNBoxCell$$ = 1;$DvtNBoxCell$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxCell$$++) {
        ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxCell$$])[$dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON$]) && $DvtNBoxCategoryNode$$ != $DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] && ($DvtNBoxDrawer$$ = !1);
      }
      $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$COLOR$] = $DvtNBoxDrawer$$ ? $DvtNBoxCategoryNode$$ : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$COLOR$];
    }
    $DvtNBoxDrawer$$ = !0;
    if (!$DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$) || -1 != $DvtNBoxDataUtils$$.$getGroupAttributes$($DvtNBoxAutomation$$).indexOf("indicatorIconPattern")) {
      $DvtNBoxCategoryRolloverHandler$$ = $DvtNBoxCategoryRolloverHandler$$[$dvt$$5$$.$NBoxConstants$.$PATTERN$];
      for ($DvtNBoxCategoryNode$$ = 1;$DvtNBoxCategoryNode$$ < $DvtNBoxDataAnimationHandler$$.length;$DvtNBoxCategoryNode$$++) {
        ($DvtNBoxNodeOverflow$$ = $DvtNBoxDataUtils$$.$getNode$($DvtNBoxAutomation$$, $DvtNBoxDataAnimationHandler$$[$DvtNBoxCategoryNode$$])[$dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON$]) && $DvtNBoxCategoryRolloverHandler$$ != $DvtNBoxNodeOverflow$$[$dvt$$5$$.$NBoxConstants$.$PATTERN$] && ($DvtNBoxDrawer$$ = !1);
      }
      $DvtNBoxEventManager$$[$dvt$$5$$.$NBoxConstants$.$PATTERN$] = $DvtNBoxDrawer$$ ? $DvtNBoxCategoryRolloverHandler$$ : $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$PATTERN$];
    }
    return $dvt$$5$$.$JsonUtils$.$merge$($DvtNBoxEventManager$$, $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$]);
  };
  $DvtNBoxStyleUtils$$.$getDrawerBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerBackground$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.background;
  };
  $DvtNBoxStyleUtils$$.$getDrawerHeaderBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerHeaderBackground$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.headerBackground;
  };
  $DvtNBoxStyleUtils$$.$getDrawerBorderColor$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderColor$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults[$dvt$$5$$.$NBoxConstants$.$BORDER_COLOR$];
  };
  $DvtNBoxStyleUtils$$.$getDrawerBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderRadius$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults[$dvt$$5$$.$NBoxConstants$.$BORDER_RADIUS$];
  };
  $DvtNBoxStyleUtils$$.$getDrawerLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults[$dvt$$5$$.$NBoxConstants$.$LABEL_STYLE$];
  };
  $DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.countLabelStyle;
  };
  $DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountBorderRadius$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.countBorderRadius;
  };
  $DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeLabelStyle$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$].__categoryNodeDefaults.labelStyle;
  };
  $DvtNBoxStyleUtils$$.$getNodeBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderRadius$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$BORDER_RADIUS$];
  };
  $DvtNBoxStyleUtils$$.$getNodeHoverColor$ = function $$DvtNBoxStyleUtils$$$$getNodeHoverColor$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$].hoverColor;
  };
  $DvtNBoxStyleUtils$$.$getNodeSelectionColor$ = function $$DvtNBoxStyleUtils$$$$getNodeSelectionColor$$($DvtNBoxAutomation$$) {
    return $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$NODE_DEFAULTS$].selectionColor;
  };
  $DvtNBoxStyleUtils$$.$getLabelHalign$ = function $$DvtNBoxStyleUtils$$$$getLabelHalign$$($DvtNBoxAutomation$$, $DvtNBoxKeyboardHandler$$) {
    var $DvtNBoxEventManager$$ = $DvtNBoxKeyboardHandler$$[$dvt$$5$$.$NBoxConstants$.$LABEL_HALIGN$];
    $DvtNBoxEventManager$$ || ($DvtNBoxEventManager$$ = $DvtNBoxAutomation$$.$getOptions$()[$dvt$$5$$.$NBoxConstants$.$STYLE_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$CELL_DEFAULTS$][$dvt$$5$$.$NBoxConstants$.$LABEL_HALIGN$]);
    var $DvtNBoxDataAnimationHandler$$ = $dvt$$5$$.$Agent$.$isRightToLeft$($DvtNBoxAutomation$$.$getCtx$());
    return "end" == $DvtNBoxEventManager$$ ? $DvtNBoxDataAnimationHandler$$ ? $dvt$$5$$.$OutputText$.$H_ALIGN_LEFT$ : $dvt$$5$$.$OutputText$.$H_ALIGN_RIGHT$ : "center" == $DvtNBoxEventManager$$ ? $dvt$$5$$.$OutputText$.$H_ALIGN_CENTER$ : $DvtNBoxDataAnimationHandler$$ ? $dvt$$5$$.$OutputText$.$H_ALIGN_RIGHT$ : $dvt$$5$$.$OutputText$.$H_ALIGN_LEFT$;
  };
  $dvt$$5$$.$exportProperty$($dvt$$5$$, "NBox", $dvt$$5$$.$NBox$);
  $dvt$$5$$.$exportProperty$($dvt$$5$$.$NBox$, "newInstance", $dvt$$5$$.$NBox$.newInstance);
  $dvt$$5$$.$exportProperty$($dvt$$5$$.$NBox$.prototype, "render", $dvt$$5$$.$NBox$.prototype.$render$);
  $dvt$$5$$.$exportProperty$($dvt$$5$$.$NBox$.prototype, "getAutomation", $dvt$$5$$.$NBox$.prototype.$getAutomation$);
  $dvt$$5$$.$exportProperty$($dvt$$5$$.$NBox$.prototype, "highlight", $dvt$$5$$.$NBox$.prototype.$highlight$);
  $dvt$$5$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getDomElementForSubId", $DvtNBoxAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$5$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getData", $DvtNBoxAutomation$$.prototype.getData);
  $dvt$$5$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getGroupNode", $DvtNBoxAutomation$$.prototype.$getGroupNode$);
  $dvt$$5$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getCell", $DvtNBoxAutomation$$.prototype.$getCell$);
  $dvt$$5$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getCellNode", $DvtNBoxAutomation$$.prototype.$getCellNode$);
  $dvt$$5$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getNode", $DvtNBoxAutomation$$.prototype.$getNode$);
  $dvt$$5$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getCellGroupNode", $DvtNBoxAutomation$$.prototype.$getCellGroupNode$);
  $dvt$$5$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getDialog", $DvtNBoxAutomation$$.prototype.$getDialog$);
  $dvt$$5$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getDialogNode", $DvtNBoxAutomation$$.prototype.$getDialogNode$);
  $dvt$$5$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getNodeIdFromIndex", $DvtNBoxAutomation$$.prototype.$getNodeIdFromIndex$);
  $dvt$$5$$.$exportProperty$($DvtNBoxAutomation$$.prototype, "getNodeIndexFromId", $DvtNBoxAutomation$$.prototype.$getNodeIndexFromId$);
})(dvt);

  return dvt;
});
