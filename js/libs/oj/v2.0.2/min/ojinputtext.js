/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(a,f){a.ya("oj.inputBase",f.oj.editableValue,{version:"1.0.0",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"",_WIDGET_CLASS_NAMES:"",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_GET_INIT_OPTIONS_PROPS:[{W:"disabled",xc:!0},{W:"pattern"},{W:"placeholder"},{W:"value"},{W:"readonly",option:"readOnly",xc:!0},{W:"required",ef:!0,xc:!0},{W:"title"}],_INPUT_HELPER_KEY:"",OQ:"blur",LR:"keydown",AR:"input",jR:"drop",options:{converter:void 0,placeholder:void 0,
rawValue:void 0,readOnly:!1},Qv:function(a){var d=this._superApply(arguments);this.qja();return d},ae:function(b,d){this._super(b,d);a.ze.al(this._GET_INIT_OPTIONS_PROPS,d,this)},_ComponentCreate:function(){var a=this.element,d=this._superApply(arguments),c=this.tR(a),e=this.options.readOnly;this.Cj="rtl"===this.dc();"boolean"===typeof e&&this.element.prop("readonly",e);this.Gv()&&(this.fna(),this.kR()&&this.ena());"pattern"in c&&a.removeAttr("pattern");this.iI={};this.kd=null;return d},rf:function(){var a=
this._superApply(arguments),d=this;this._CLASS_NAMES&&this.element.addClass(this._CLASS_NAMES);this.uT();this.TF();f.each(["disabled","readOnly"],function(a,b){d.options[b]&&d.KZ(b,d.options[b])});return a},KZ:function(a,d){"disabled"===a&&this.element.prop("disabled",d);"readOnly"===a&&(this.element.prop("readonly",d),this.RC("readOnly",d));"disabled"!==a&&"readOnly"!==a||this.uT()},_setOption:function(b,d){var c=this._superApply(arguments);"disabled"!==b&&"readOnly"!==b||this.KZ(b,d);"pattern"===
b&&(this.iI[a.fd.VALIDATOR_TYPE_REGEXP]=this.uW(),this.ks());return c},_destroy:function(){var b=this._superApply(arguments);this.element.off("blur drop keydown input");this.sK&&this.sK.remove();this.Gv()&&(this.kR()?a.v.unwrap(this.element,this.su):a.v.unwrap(this.element));return b},uT:function(){if(!this.options.readOnly&&!this.options.disabled){this.kd={};var a=f.proxy(this.UK,this),d=f.proxy(this.JC,this),c=f.proxy(this.Pia,this),e=function(){this.focus()};this.element.on("blur",a);this.element.on("keydown",
d);this.element.on("input",c);this.element.on("drop",e);this.kd[this.OQ]=a;this.kd[this.LR]=d;this.kd[this.AR]=c;this.kd[this.jR]=e}else if(this.kd)for(a=[this.OQ,this.LR,this.AR,this.jR],d=0,c=a.length;d<c;d++)this.kd[a[d]]&&(this.element.off(a[d],this.kd[a[d]]),delete this.kd[a[d]])},Bn:{readOnly:"oj-read-only"},qja:function(){for(var a=this._ATTR_CHECK,d=0,c=a.length;d<c;d++){var e=a[d].attr;"setMandatory"in a[d]&&this.element.attr(e,a[d].setMandatory)}},UK:function(a){this.gc(this.kg(),a)},JC:function(a){a.keyCode===
f.ui.keyCode.ENTER&&this.gc(this.kg(),a)},Pia:function(a){this.Dn(this.$d().val(),a)},Gv:function(){return this._WIDGET_CLASS_NAMES},kR:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES},fna:function(){f(this.element).wrap(f("\x3cdiv\x3e").addClass(this._WIDGET_CLASS_NAMES));this.su=this.element.parent()},ena:function(){f(this.element).wrap(f("\x3cdiv\x3e").addClass(this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES))},TF:function(){if(this._INPUT_HELPER_KEY&&this.Gv()){var a=this.element.attr("aria-describedby")||
"",d=this.rn(this._INPUT_HELPER_KEY);this.element.attr("aria-describedby",a+(" "+d));this.sK=f("\x3cdiv class\x3d'oj-helper-hidden-accessible' id\x3d'"+d+"'\x3e"+this.fk(this.A(this._INPUT_HELPER_KEY))+"\x3c/div\x3e");this.UF().append(this.sK)}},fk:function(a){return f("\x3cspan\x3e"+a+"\x3c/span\x3e").text()},UF:function(){return this.widget()},Iv:function(){var b=this._superApply(arguments);this.options.pattern&&(this.iI[a.fd.VALIDATOR_TYPE_REGEXP]=this.uW());return f.extend(this.iI,b)},RC:function(a,
d){-1!=Object.keys(this.Bn).indexOf(a)&&this.widget().toggleClass(this.Bn[a],!!d)},uW:function(){if(!this.options.pattern)return null;var b={pattern:this.options.pattern,label:this.hJ()};f.extend(b,this.options.translations.regexp||{});return a.qa.Or(a.fd.VALIDATOR_TYPE_REGEXP).createValidator(b)},rn:function(a){return this.uuid+"_"+a},Era:function(){return this.Cj},refresh:function(){var a=this._superApply(arguments);this.Cj="rtl"===this.dc();return a},getNodeBySubId:function(a){return this._super(a)},
widget:function(){return this.Gv()?this.su:this.element}},!0);a.ya("oj.ojInputPassword",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"password"}],_CLASS_NAMES:"oj-inputpassword-input",_WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var d=this._superApply(arguments),c;d||(c=a.subId,"oj-inputpassword-input"===c&&(d=this.element?this.element[0]:null));return d||
null},_GetDefaultStyleClass:function(){return"oj-inputpassword"}});a.ya("oj.ojInputText",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_CLASS_NAMES:"oj-inputtext-input",_WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var d=this._superApply(arguments),c;d||(c=a.subId,"oj-inputtext-input"===c&&(d=this.element?this.element[0]:null));return d||null},_GetDefaultStyleClass:function(){return"oj-inputtext"},
Tz:function(){return"oj-inputBase"}});a.ya("oj.ojTextArea",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3ctextarea\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"oj-textarea-input",_WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var d=this._superApply(arguments),c;d||(c=a.subId,"oj-textarea-input"===c&&(d=this.element?this.element[0]:null));return d||null},_GetDefaultStyleClass:function(){return"oj-textarea"},Tz:function(){return"oj-inputBase"}})});