/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 jQuery UI Touch Punch 0.2.3

 Copyright 2011-2014, Dave Furfero
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
define(["ojs/ojcore","jquery"],function(a,f){a.He=function(a){this._init(a)};a.He.prototype._init=function(a){this.rc=a;this.uD=this.jy=!1;this.wD=f.proxy(this.Cma,this);this.hy=f.proxy(this.Ama,this);this.mM=f.proxy(this.Bma,this);this.rc.on({touchstart:this.wD,touchend:this.hy,touchmove:this.mM,touchcancel:this.hy})};a.He.prototype._destroy=function(){this.rc&&this.wD&&(this.rc.off({touchstart:this.wD,touchmove:this.mM,touchend:this.hy,touchcancel:this.hy}),this.mM=this.hy=this.wD=void 0)};a.He.prototype.Zq=
function(a,d){if(!(1<a.originalEvent.touches.length)){"touchstart"!=a.type&&"touchend"!=a.type&&a.preventDefault();var c=a.originalEvent.changedTouches[0],e=document.createEvent("MouseEvent");e.initMouseEvent(d,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null);c.target.dispatchEvent(e)}};a.He.prototype.Cma=function(a){this.jy||(this.jy=!0,this.uD=!1,this.Zq(a,"mouseover"),this.Zq(a,"mousemove"),this.Zq(a,"mousedown"))};a.He.prototype.Bma=function(a){this.jy&&(this.uD=!0,this.Zq(a,
"mousemove"))};a.He.prototype.Ama=function(a){this.jy&&(this.Zq(a,"mouseup"),this.Zq(a,"mouseout"),this.uD||"touchend"!=a.type||this.Zq(a,"click"),this.jy=!1)};a.He.sA="_ojTouchProxy";a.He.P1=function(b){b=f(b);var d=b.data(a.He.sA);d||(d=new a.He(b),b.data(a.He.sA,d));return d};a.He.p5=function(b){b=f(b);var d=b.data(a.He.sA);d&&(d._destroy(),b.removeData(a.He.sA))}});