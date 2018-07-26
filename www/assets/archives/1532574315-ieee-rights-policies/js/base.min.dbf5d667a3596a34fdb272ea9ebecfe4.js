/*! jQuery UI - v1.9.2 - 2012-11-23
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */
(function(b,f){var a=0,e=/^ui-id-\d+$/;
b.ui=b.ui||{};
if(b.ui.version){return
}b.extend(b.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
b.fn.extend({_focus:b.fn.focus,focus:function(g,h){return typeof g==="number"?this.each(function(){var j=this;
setTimeout(function(){b(j).focus();
if(h){h.call(j)
}},g)
}):this._focus.apply(this,arguments)
},scrollParent:function(){var g;
if((b.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.css(this,"position"))&&(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)
}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!g.length?b(document):g
},zIndex:function(k){if(k!==f){return this.css("zIndex",k)
}if(this.length){var h=b(this[0]),g,j;
while(h.length&&h[0]!==document){g=h.css("position");
if(g==="absolute"||g==="relative"||g==="fixed"){j=parseInt(h.css("zIndex"),10);
if(!isNaN(j)&&j!==0){return j
}}h=h.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++a)
}})
},removeUniqueId:function(){return this.each(function(){if(e.test(this.id)){b(this).removeAttr("id")
}})
}});
function d(j,g){var l,k,h,m=j.nodeName.toLowerCase();
if("area"===m){l=j.parentNode;
k=l.name;
if(!j.href||!k||l.nodeName.toLowerCase()!=="map"){return false
}h=b("img[usemap=#"+k+"]")[0];
return !!h&&c(h)
}return(/input|select|textarea|button|object/.test(m)?!j.disabled:"a"===m?j.href||g:g)&&c(j)
}function c(g){return b.expr.filters.visible(g)&&!b(g).parents().andSelf().filter(function(){return b.css(this,"visibility")==="hidden"
}).length
}b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(g){return function(h){return !!b.data(h,g)
}
}):function(j,h,g){return !!b.data(j,g[3])
},focusable:function(g){return d(g,!isNaN(b.attr(g,"tabindex")))
},tabbable:function(j){var g=b.attr(j,"tabindex"),h=isNaN(g);
return(h||g>=0)&&d(j,!h)
}});
b(function(){var g=document.body,h=g.appendChild(h=document.createElement("div"));
h.offsetHeight;
b.extend(h.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});
b.support.minHeight=h.offsetHeight===100;
b.support.selectstart="onselectstart" in h;
g.removeChild(h).style.display="none"
});
if(!b("<a>").outerWidth(1).jquery){b.each(["Width","Height"],function(j,g){var h=g==="Width"?["Left","Right"]:["Top","Bottom"],k=g.toLowerCase(),m={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};
function l(p,o,n,q){b.each(h,function(){o-=parseFloat(b.css(p,"padding"+this))||0;
if(n){o-=parseFloat(b.css(p,"border"+this+"Width"))||0
}if(q){o-=parseFloat(b.css(p,"margin"+this))||0
}});
return o
}b.fn["inner"+g]=function(n){if(n===f){return m["inner"+g].call(this)
}return this.each(function(){b(this).css(k,l(this,n)+"px")
})
};
b.fn["outer"+g]=function(n,o){if(typeof n!=="number"){return m["outer"+g].call(this,n)
}return this.each(function(){b(this).css(k,l(this,n,true,o)+"px")
})
}
})
}if(b("<a>").data("a-b","a").removeData("a-b").data("a-b")){b.fn.removeData=(function(g){return function(h){if(arguments.length){return g.call(this,b.camelCase(h))
}else{return g.call(this)
}}
})(b.fn.removeData)
}(function(){var g=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];
b.ui.ie=g.length?true:false;
b.ui.ie6=parseFloat(g[1],10)===6
})();
b.fn.extend({disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
b.extend(b.ui,{plugin:{add:function(h,j,l){var g,k=b.ui[h].prototype;
for(g in l){k.plugins[g]=k.plugins[g]||[];
k.plugins[g].push([j,l[g]])
}},call:function(g,j,h){var k,l=g.plugins[j];
if(!l||!g.element[0].parentNode||g.element[0].parentNode.nodeType===11){return
}for(k=0;
k<l.length;
k++){if(g.options[l[k][0]]){l[k][1].apply(g.element,h)
}}}},contains:b.contains,hasScroll:function(k,h){if(b(k).css("overflow")==="hidden"){return false
}var g=(h&&h==="left")?"scrollLeft":"scrollTop",j=false;
if(k[g]>0){return true
}k[g]=1;
j=(k[g]>0);
k[g]=0;
return j
},isOverAxis:function(h,g,j){return(h>g)&&(h<(g+j))
},isOver:function(m,h,l,k,g,j){return b.ui.isOverAxis(m,l,g)&&b.ui.isOverAxis(h,k,j)
}})
})(jQuery);
(function(b,e){var a=0,d=Array.prototype.slice,c=b.cleanData;
b.cleanData=function(f){for(var g=0,h;
(h=f[g])!=null;
g++){try{b(h).triggerHandler("remove")
}catch(j){}}c(f)
};
b.widget=function(g,k,f){var n,m,j,l,h=g.split(".")[0];
g=g.split(".")[1];
n=h+"-"+g;
if(!f){f=k;
k=b.Widget
}b.expr[":"][n.toLowerCase()]=function(o){return !!b.data(o,n)
};
b[h]=b[h]||{};
m=b[h][g];
j=b[h][g]=function(o,p){if(!this._createWidget){return new j(o,p)
}if(arguments.length){this._createWidget(o,p)
}};
b.extend(j,m,{version:f.version,_proto:b.extend({},f),_childConstructors:[]});
l=new k();
l.options=b.widget.extend({},l.options);
b.each(f,function(p,o){if(b.isFunction(o)){f[p]=(function(){var q=function(){return k.prototype[p].apply(this,arguments)
},r=function(s){return k.prototype[p].apply(this,s)
};
return function(){var v=this._super,s=this._superApply,u;
this._super=q;
this._superApply=r;
u=o.apply(this,arguments);
this._super=v;
this._superApply=s;
return u
}
})()
}});
j.prototype=b.widget.extend(l,{widgetEventPrefix:m?l.widgetEventPrefix:g},f,{constructor:j,namespace:h,widgetName:g,widgetBaseClass:n,widgetFullName:n});
if(m){b.each(m._childConstructors,function(p,q){var o=q.prototype;
b.widget(o.namespace+"."+o.widgetName,j,q._proto)
});
delete m._childConstructors
}else{k._childConstructors.push(j)
}b.widget.bridge(g,j)
};
b.widget.extend=function(l){var g=d.call(arguments,1),k=0,f=g.length,h,j;
for(;
k<f;
k++){for(h in g[k]){j=g[k][h];
if(g[k].hasOwnProperty(h)&&j!==e){if(b.isPlainObject(j)){l[h]=b.isPlainObject(l[h])?b.widget.extend({},l[h],j):b.widget.extend({},j)
}else{l[h]=j
}}}}return l
};
b.widget.bridge=function(g,f){var h=f.prototype.widgetFullName||g;
b.fn[g]=function(l){var j=typeof l==="string",k=d.call(arguments,1),m=this;
l=!j&&k.length?b.widget.extend.apply(null,[l].concat(k)):l;
if(j){this.each(function(){var o,n=b.data(this,h);
if(!n){return b.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+l+"'")
}if(!b.isFunction(n[l])||l.charAt(0)==="_"){return b.error("no such method '"+l+"' for "+g+" widget instance")
}o=n[l].apply(n,k);
if(o!==n&&o!==e){m=o&&o.jquery?m.pushStack(o.get()):o;
return false
}})
}else{this.each(function(){var n=b.data(this,h);
if(n){n.option(l||{})._init()
}else{b.data(this,h,new f(l,this))
}})
}return m
}
};
b.Widget=function(){};
b.Widget._childConstructors=[];
b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(f,g){g=b(g||this.defaultElement||this)[0];
this.element=b(g);
this.uuid=a++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=b.widget.extend({},this.options,this._getCreateOptions(),f);
this.bindings=b();
this.hoverable=b();
this.focusable=b();
if(g!==this){b.data(g,this.widgetName,this);
b.data(g,this.widgetFullName,this);
this._on(true,this.element,{remove:function(h){if(h.target===g){this.destroy()
}}});
this.document=b(g.style?g.ownerDocument:g.document||g);
this.window=b(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:b.noop,widget:function(){return this.element
},option:function(j,k){var f=j,l,h,g;
if(arguments.length===0){return b.widget.extend({},this.options)
}if(typeof j==="string"){f={};
l=j.split(".");
j=l.shift();
if(l.length){h=f[j]=b.widget.extend({},this.options[j]);
for(g=0;
g<l.length-1;
g++){h[l[g]]=h[l[g]]||{};
h=h[l[g]]
}j=l.pop();
if(k===e){return h[j]===e?null:h[j]
}h[j]=k
}else{if(k===e){return this.options[j]===e?null:this.options[j]
}f[j]=k
}}this._setOptions(f);
return this
},_setOptions:function(f){var g;
for(g in f){this._setOption(g,f[g])
}return this
},_setOption:function(f,g){this.options[f]=g;
if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(j,h,g){var k,f=this;
if(typeof j!=="boolean"){g=h;
h=j;
j=false
}if(!g){g=h;
h=this.element;
k=this.widget()
}else{h=k=b(h);
this.bindings=this.bindings.add(h)
}b.each(g,function(q,p){function n(){if(!j&&(f.options.disabled===true||b(this).hasClass("ui-state-disabled"))){return
}return(typeof p==="string"?f[p]:p).apply(f,arguments)
}if(typeof p!=="string"){n.guid=p.guid=p.guid||n.guid||b.guid++
}var o=q.match(/^(\w+)\s*(.*)$/),m=o[1]+f.eventNamespace,l=o[2];
if(l){k.delegate(l,m,n)
}else{h.bind(m,n)
}})
},_off:function(g,f){f=(f||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
g.unbind(f).undelegate(f)
},_delay:function(j,h){function g(){return(typeof j==="string"?f[j]:j).apply(f,arguments)
}var f=this;
return setTimeout(g,h||0)
},_hoverable:function(f){this.hoverable=this.hoverable.add(f);
this._on(f,{mouseenter:function(g){b(g.currentTarget).addClass("ui-state-hover")
},mouseleave:function(g){b(g.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(f){this.focusable=this.focusable.add(f);
this._on(f,{focusin:function(g){b(g.currentTarget).addClass("ui-state-focus")
},focusout:function(g){b(g.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(f,g,h){var l,k,j=this.options[f];
h=h||{};
g=b.Event(g);
g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();
g.target=this.element[0];
k=g.originalEvent;
if(k){for(l in k){if(!(l in g)){g[l]=k[l]
}}}this.element.trigger(g,h);
return !(b.isFunction(j)&&j.apply(this.element[0],[g].concat(h))===false||g.isDefaultPrevented())
}};
b.each({show:"fadeIn",hide:"fadeOut"},function(g,f){b.Widget.prototype["_"+g]=function(k,j,m){if(typeof j==="string"){j={effect:j}
}var l,h=!j?g:j===true||typeof j==="number"?f:j.effect||f;
j=j||{};
if(typeof j==="number"){j={duration:j}
}l=!b.isEmptyObject(j);
j.complete=m;
if(j.delay){k.delay(j.delay)
}if(l&&b.effects&&(b.effects.effect[h]||b.uiBackCompat!==false&&b.effects[h])){k[g](j)
}else{if(h!==g&&k[h]){k[h](j.duration,j.easing,m)
}else{k.queue(function(n){b(this)[g]();
if(m){m.call(k[0])
}n()
})
}}}
});
if(b.uiBackCompat!==false){b.Widget.prototype._getCreateOptions=function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]
}
}})(jQuery);
(function(b,c){var a=false;
b(document).mouseup(function(d){a=false
});
b.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var d=this;
this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)
}).bind("click."+this.widgetName,function(e){if(true===b.data(e.target,d.widgetName+".preventClickEvent")){b.removeData(e.target,d.widgetName+".preventClickEvent");
e.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(f){if(a){return
}(this._mouseStarted&&this._mouseUp(f));
this._mouseDownEvent=f;
var e=this,g=(f.which===1),d=(typeof this.options.cancel==="string"&&f.target.nodeName?b(f.target).closest(this.options.cancel).length:false);
if(!g||d||!this._mouseCapture(f)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(f)!==false);
if(!this._mouseStarted){f.preventDefault();
return true
}}if(true===b.data(f.target,this.widgetName+".preventClickEvent")){b.removeData(f.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(h){return e._mouseMove(h)
};
this._mouseUpDelegate=function(h){return e._mouseUp(h)
};
b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
f.preventDefault();
a=true;
return true
},_mouseMove:function(d){if(b.ui.ie&&!(document.documentMode>=9)&&!d.button){return this._mouseUp(d)
}if(this._mouseStarted){this._mouseDrag(d);
return d.preventDefault()
}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);
(this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))
}return !this._mouseStarted
},_mouseUp:function(d){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(d.target===this._mouseDownEvent.target){b.data(d.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(d)
}return false
},_mouseDistanceMet:function(d){return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)
},_mouseDelayMet:function(d){return this.mouseDelayMet
},_mouseStart:function(d){},_mouseDrag:function(d){},_mouseStop:function(d){},_mouseCapture:function(d){return true
}})
})(jQuery);
(function(e,c){e.ui=e.ui||{};
var j,k=Math.max,o=Math.abs,m=Math.round,d=/left|center|right/,g=/top|center|bottom/,a=/[\+\-]\d+%?/,l=/^\w+/,b=/%$/,f=e.fn.position;
function n(r,q,p){return[parseInt(r[0],10)*(b.test(r[0])?q/100:1),parseInt(r[1],10)*(b.test(r[1])?p/100:1)]
}function h(p,q){return parseInt(e.css(p,q),10)||0
}e.position={scrollbarWidth:function(){if(j!==c){return j
}var q,p,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=s.children()[0];
e("body").append(s);
q=r.offsetWidth;
s.css("overflow","scroll");
p=r.offsetWidth;
if(q===p){p=s[0].clientWidth
}s.remove();
return(j=q-p)
},getScrollInfo:function(u){var s=u.isWindow?"":u.element.css("overflow-x"),r=u.isWindow?"":u.element.css("overflow-y"),q=s==="scroll"||(s==="auto"&&u.width<u.element[0].scrollWidth),p=r==="scroll"||(r==="auto"&&u.height<u.element[0].scrollHeight);
return{width:q?e.position.scrollbarWidth():0,height:p?e.position.scrollbarWidth():0}
},getWithinInfo:function(q){var r=e(q||window),p=e.isWindow(r[0]);
return{element:r,isWindow:p,offset:r.offset()||{left:0,top:0},scrollLeft:r.scrollLeft(),scrollTop:r.scrollTop(),width:p?r.width():r.outerWidth(),height:p?r.height():r.outerHeight()}
}};
e.fn.position=function(A){if(!A||!A.of){return f.apply(this,arguments)
}A=e.extend({},A);
var B,x,u,z,s,w=e(A.of),r=e.position.getWithinInfo(A.within),p=e.position.getScrollInfo(r),v=w[0],y=(A.collision||"flip").split(" "),q={};
if(v.nodeType===9){x=w.width();
u=w.height();
z={top:0,left:0}
}else{if(e.isWindow(v)){x=w.width();
u=w.height();
z={top:w.scrollTop(),left:w.scrollLeft()}
}else{if(v.preventDefault){A.at="left top";
x=u=0;
z={top:v.pageY,left:v.pageX}
}else{x=w.outerWidth();
u=w.outerHeight();
z=w.offset()
}}}s=e.extend({},z);
e.each(["my","at"],function(){var E=(A[this]||"").split(" "),D,C;
if(E.length===1){E=d.test(E[0])?E.concat(["center"]):g.test(E[0])?["center"].concat(E):["center","center"]
}E[0]=d.test(E[0])?E[0]:"center";
E[1]=g.test(E[1])?E[1]:"center";
D=a.exec(E[0]);
C=a.exec(E[1]);
q[this]=[D?D[0]:0,C?C[0]:0];
A[this]=[l.exec(E[0])[0],l.exec(E[1])[0]]
});
if(y.length===1){y[1]=y[0]
}if(A.at[0]==="right"){s.left+=x
}else{if(A.at[0]==="center"){s.left+=x/2
}}if(A.at[1]==="bottom"){s.top+=u
}else{if(A.at[1]==="center"){s.top+=u/2
}}B=n(q.at,x,u);
s.left+=B[0];
s.top+=B[1];
return this.each(function(){var D,M,F=e(this),H=F.outerWidth(),E=F.outerHeight(),G=h(this,"marginLeft"),C=h(this,"marginTop"),L=H+G+h(this,"marginRight")+p.width,K=E+C+h(this,"marginBottom")+p.height,I=e.extend({},s),J=n(q.my,F.outerWidth(),F.outerHeight());
if(A.my[0]==="right"){I.left-=H
}else{if(A.my[0]==="center"){I.left-=H/2
}}if(A.my[1]==="bottom"){I.top-=E
}else{if(A.my[1]==="center"){I.top-=E/2
}}I.left+=J[0];
I.top+=J[1];
if(!e.support.offsetFractions){I.left=m(I.left);
I.top=m(I.top)
}D={marginLeft:G,marginTop:C};
e.each(["left","top"],function(O,N){if(e.ui.position[y[O]]){e.ui.position[y[O]][N](I,{targetWidth:x,targetHeight:u,elemWidth:H,elemHeight:E,collisionPosition:D,collisionWidth:L,collisionHeight:K,offset:[B[0]+J[0],B[1]+J[1]],my:A.my,at:A.at,within:r,elem:F})
}});
if(e.fn.bgiframe){F.bgiframe()
}if(A.using){M=function(Q){var S=z.left-I.left,P=S+x-H,R=z.top-I.top,O=R+u-E,N={target:{element:w,left:z.left,top:z.top,width:x,height:u},element:{element:F,left:I.left,top:I.top,width:H,height:E},horizontal:P<0?"left":S>0?"right":"center",vertical:O<0?"top":R>0?"bottom":"middle"};
if(x<H&&o(S+P)<x){N.horizontal="center"
}if(u<E&&o(R+O)<u){N.vertical="middle"
}if(k(o(S),o(P))>k(o(R),o(O))){N.important="horizontal"
}else{N.important="vertical"
}A.using.call(this,Q,N)
}
}F.offset(e.extend(I,{using:M}))
})
};
e.ui.position={fit:{left:function(u,s){var r=s.within,w=r.isWindow?r.scrollLeft:r.offset.left,y=r.width,v=u.left-s.collisionPosition.marginLeft,x=w-v,q=v+s.collisionWidth-y-w,p;
if(s.collisionWidth>y){if(x>0&&q<=0){p=u.left+x+s.collisionWidth-y-w;
u.left+=x-p
}else{if(q>0&&x<=0){u.left=w
}else{if(x>q){u.left=w+y-s.collisionWidth
}else{u.left=w
}}}}else{if(x>0){u.left+=x
}else{if(q>0){u.left-=q
}else{u.left=k(u.left-v,u.left)
}}}},top:function(s,r){var q=r.within,x=q.isWindow?q.scrollTop:q.offset.top,y=r.within.height,v=s.top-r.collisionPosition.marginTop,w=x-v,u=v+r.collisionHeight-y-x,p;
if(r.collisionHeight>y){if(w>0&&u<=0){p=s.top+w+r.collisionHeight-y-x;
s.top+=w-p
}else{if(u>0&&w<=0){s.top=x
}else{if(w>u){s.top=x+y-r.collisionHeight
}else{s.top=x
}}}}else{if(w>0){s.top+=w
}else{if(u>0){s.top-=u
}else{s.top=k(s.top-v,s.top)
}}}}},flip:{left:function(w,v){var u=v.within,A=u.offset.left+u.scrollLeft,D=u.width,r=u.isWindow?u.scrollLeft:u.offset.left,x=w.left-v.collisionPosition.marginLeft,B=x-r,q=x+v.collisionWidth-D-r,z=v.my[0]==="left"?-v.elemWidth:v.my[0]==="right"?v.elemWidth:0,C=v.at[0]==="left"?v.targetWidth:v.at[0]==="right"?-v.targetWidth:0,s=-2*v.offset[0],p,y;
if(B<0){p=w.left+z+C+s+v.collisionWidth-D-A;
if(p<0||p<o(B)){w.left+=z+C+s
}}else{if(q>0){y=w.left-v.collisionPosition.marginLeft+z+C+s-r;
if(y>0||o(y)<q){w.left+=z+C+s
}}}},top:function(v,u){var s=u.within,C=s.offset.top+s.scrollTop,D=s.height,p=s.isWindow?s.scrollTop:s.offset.top,x=v.top-u.collisionPosition.marginTop,z=x-p,w=x+u.collisionHeight-D-p,A=u.my[1]==="top",y=A?-u.elemHeight:u.my[1]==="bottom"?u.elemHeight:0,E=u.at[1]==="top"?u.targetHeight:u.at[1]==="bottom"?-u.targetHeight:0,r=-2*u.offset[1],B,q;
if(z<0){q=v.top+y+E+r+u.collisionHeight-D-C;
if((v.top+y+E+r)>z&&(q<0||q<o(z))){v.top+=y+E+r
}}else{if(w>0){B=v.top-u.collisionPosition.marginTop+y+E+r-p;
if((v.top+y+E+r)>w&&(B>0||o(B)<w)){v.top+=y+E+r
}}}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments);
e.ui.position.fit.left.apply(this,arguments)
},top:function(){e.ui.position.flip.top.apply(this,arguments);
e.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var u,w,q,s,r,p=document.getElementsByTagName("body")[0],v=document.createElement("div");
u=document.createElement(p?"div":"body");
q={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(p){e.extend(q,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(r in q){u.style[r]=q[r]
}u.appendChild(v);
w=p||document.documentElement;
w.insertBefore(u,w.firstChild);
v.style.cssText="position: absolute; left: 10.7432222px;";
s=e(v).offset().left;
e.support.offsetFractions=s>10&&s<11;
u.innerHTML="";
w.removeChild(u)
})();
if(e.uiBackCompat!==false){(function(q){var p=q.fn.position;
q.fn.position=function(s){if(!s||!s.offset){return p.call(this,s)
}var u=s.offset.split(" "),r=s.at.split(" ");
if(u.length===1){u[1]=u[0]
}if(/^\d/.test(u[0])){u[0]="+"+u[0]
}if(/^\d/.test(u[1])){u[1]="+"+u[1]
}if(r.length===1){if(/left|center|right/.test(r[0])){r[1]="center"
}else{r[1]=r[0];
r[0]="center"
}}return p.call(this,q.extend(s,{at:r[0]+u[0]+" "+r[1]+u[1],offset:c}))
}
}(jQuery))
}}(jQuery));
(function(d,e){var b=0,c={},a={};
c.height=c.paddingTop=c.paddingBottom=c.borderTopWidth=c.borderBottomWidth="hide";
a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="show";
d.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var g=this.accordionId="ui-accordion-"+(this.element.attr("id")||++b),f=this.options;
this.prevShow=this.prevHide=d();
this.element.addClass("ui-accordion ui-widget ui-helper-reset");
this.headers=this.element.find(f.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
this._hoverable(this.headers);
this._focusable(this.headers);
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();
if(!f.collapsible&&(f.active===false||f.active==null)){f.active=0
}if(f.active<0){f.active+=this.headers.length
}this.active=this._findActive(f.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top");
this.active.next().addClass("ui-accordion-content-active").show();
this._createIcons();
this.refresh();
this.element.attr("role","tablist");
this.headers.attr("role","tab").each(function(l){var m=d(this),k=m.attr("id"),h=m.next(),j=h.attr("id");
if(!k){k=g+"-header-"+l;
m.attr("id",k)
}if(!j){j=g+"-panel-"+l;
h.attr("id",j)
}m.attr("aria-controls",j);
h.attr("aria-labelledby",k)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})
}this._on(this.headers,{keydown:"_keydown"});
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._setupEvents(f.event)
},_getCreateEventData:function(){return{header:this.active,content:!this.active.length?d():this.active.next()}
},_createIcons:function(){var f=this.options.icons;
if(f){d("<span>").addClass("ui-accordion-header-icon ui-icon "+f.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var f;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
this._destroyIcons();
f=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
if(this.options.heightStyle!=="content"){f.css("height","")
}},_setOption:function(f,g){if(f==="active"){this._activate(g);
return
}if(f==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(g)
}this._super(f,g);
if(f==="collapsible"&&!g&&this.options.active===false){this._activate(0)
}if(f==="icons"){this._destroyIcons();
if(g){this._createIcons()
}}if(f==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!g)
}},_keydown:function(j){if(j.altKey||j.ctrlKey){return
}var k=d.ui.keyCode,h=this.headers.length,f=this.headers.index(j.target),g=false;
switch(j.keyCode){case k.RIGHT:case k.DOWN:g=this.headers[(f+1)%h];
break;
case k.LEFT:case k.UP:g=this.headers[(f-1+h)%h];
break;
case k.SPACE:case k.ENTER:this._eventHandler(j);
break;
case k.HOME:g=this.headers[0];
break;
case k.END:g=this.headers[h-1];
break
}if(g){d(j.target).attr("tabIndex",-1);
d(g).attr("tabIndex",0);
g.focus();
j.preventDefault()
}},_panelKeyDown:function(f){if(f.keyCode===d.ui.keyCode.UP&&f.ctrlKey){d(f.currentTarget).prev().focus()
}},refresh:function(){var h,j,f=this.options.heightStyle,g=this.element.parent();
if(f==="fill"){if(!d.support.minHeight){j=g.css("overflow");
g.css("overflow","hidden")
}h=g.height();
this.element.siblings(":visible").each(function(){var l=d(this),k=l.css("position");
if(k==="absolute"||k==="fixed"){return
}h-=l.outerHeight(true)
});
if(j){g.css("overflow",j)
}this.headers.each(function(){h-=d(this).outerHeight(true)
});
this.headers.next().each(function(){d(this).height(Math.max(0,h-d(this).innerHeight()+d(this).height()))
}).css("overflow","auto")
}else{if(f==="auto"){h=0;
this.headers.next().each(function(){h=Math.max(h,d(this).css("height","").height())
}).height(h)
}}},_activate:function(f){var g=this._findActive(f)[0];
if(g===this.active[0]){return
}g=g||this.active[0];
this._eventHandler({target:g,currentTarget:g,preventDefault:d.noop})
},_findActive:function(f){return typeof f==="number"?this.headers.eq(f):d()
},_setupEvents:function(g){var f={};
if(!g){return
}d.each(g.split(" "),function(j,h){f[h]="_eventHandler"
});
this._on(this.headers,f)
},_eventHandler:function(f){var o=this.options,j=this.active,k=d(f.currentTarget),m=k[0]===j[0],g=m&&o.collapsible,h=g?d():k.next(),l=j.next(),n={oldHeader:j,oldPanel:l,newHeader:g?d():k,newPanel:h};
f.preventDefault();
if((m&&!o.collapsible)||(this._trigger("beforeActivate",f,n)===false)){return
}o.active=g?false:this.headers.index(k);
this.active=m?d():k;
this._toggle(n);
j.removeClass("ui-accordion-header-active ui-state-active");
if(o.icons){j.children(".ui-accordion-header-icon").removeClass(o.icons.activeHeader).addClass(o.icons.header)
}if(!m){k.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(o.icons){k.children(".ui-accordion-header-icon").removeClass(o.icons.header).addClass(o.icons.activeHeader)
}k.next().addClass("ui-accordion-content-active")
}},_toggle:function(h){var f=h.newPanel,g=this.prevShow.length?this.prevShow:h.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=f;
this.prevHide=g;
if(this.options.animate){this._animate(f,g,h)
}else{g.hide();
f.show();
this._toggleComplete(h)
}g.attr({"aria-expanded":"false","aria-hidden":"true"});
g.prev().attr("aria-selected","false");
if(f.length&&g.length){g.prev().attr("tabIndex",-1)
}else{if(f.length){this.headers.filter(function(){return d(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}f.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})
},_animate:function(f,o,k){var n,m,j,l=this,p=0,q=f.length&&(!o.length||(f.index()<o.index())),h=this.options.animate||{},r=q&&h.down||h,g=function(){l._toggleComplete(k)
};
if(typeof r==="number"){j=r
}if(typeof r==="string"){m=r
}m=m||r.easing||h.easing;
j=j||r.duration||h.duration;
if(!o.length){return f.animate(a,j,m,g)
}if(!f.length){return o.animate(c,j,m,g)
}n=f.show().outerHeight();
o.animate(c,{duration:j,easing:m,step:function(s,u){u.now=Math.round(s)
}});
f.hide().animate(a,{duration:j,easing:m,complete:g,step:function(s,u){u.now=Math.round(s);
if(u.prop!=="height"){p+=u.now
}else{if(l.options.heightStyle!=="content"){u.now=Math.round(n-o.outerHeight()-p);
p=0
}}}})
},_toggleComplete:function(g){var f=g.oldPanel;
f.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(f.length){f.parent()[0].className=f.parent()[0].className
}this._trigger("activate",null,g)
}});
if(d.uiBackCompat!==false){(function(g,f){g.extend(f.options,{navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()
}});
var h=f._create;
f._create=function(){if(this.options.navigation){var k=this,m=this.element.find(this.options.header),j=m.next(),l=m.add(j).find("a").filter(this.options.navigationFilter)[0];
if(l){m.add(j).each(function(n){if(g.contains(this,l)){k.options.active=Math.floor(n/2);
return false
}})
}}h.call(this)
}
}(jQuery,jQuery.ui.accordion.prototype));
(function(h,f){h.extend(f.options,{heightStyle:null,autoHeight:true,clearStyle:false,fillSpace:false});
var j=f._create,g=f._setOption;
h.extend(f,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle();
j.call(this)
},_setOption:function(k){if(k==="autoHeight"||k==="clearStyle"||k==="fillSpace"){this.options.heightStyle=this._mergeHeightStyle()
}g.apply(this,arguments)
},_mergeHeightStyle:function(){var k=this.options;
if(k.fillSpace){return"fill"
}if(k.clearStyle){return"content"
}if(k.autoHeight){return"auto"
}}})
}(jQuery,jQuery.ui.accordion.prototype));
(function(h,g){h.extend(g.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});
var f=g._createIcons;
g._createIcons=function(){if(this.options.icons){this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected
}f.call(this)
}
}(jQuery,jQuery.ui.accordion.prototype));
(function(h,g){g.activate=g._activate;
var f=g._findActive;
g._findActive=function(j){if(j===-1){j=false
}if(j&&typeof j!=="number"){j=this.headers.index(this.headers.filter(j));
if(j===-1){j=false
}}return f.call(this,j)
}
}(jQuery,jQuery.ui.accordion.prototype));
jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh;
(function(h,g){h.extend(g.options,{change:null,changestart:null});
var f=g._trigger;
g._trigger=function(k,l,m){var j=f.apply(this,arguments);
if(!j){return false
}if(k==="beforeActivate"){j=f.call(this,"changestart",l,{oldHeader:m.oldHeader,oldContent:m.oldPanel,newHeader:m.newHeader,newContent:m.newPanel})
}else{if(k==="activate"){j=f.call(this,"change",l,{oldHeader:m.oldHeader,oldContent:m.oldPanel,newHeader:m.newHeader,newContent:m.newPanel})
}}return j
}
}(jQuery,jQuery.ui.accordion.prototype));
(function(g,f){g.extend(f.options,{animate:null,animated:"slide"});
var h=f._create;
f._create=function(){var j=this.options;
if(j.animate===null){if(!j.animated){j.animate=false
}else{if(j.animated==="slide"){j.animate=300
}else{if(j.animated==="bounceslide"){j.animate={duration:200,down:{easing:"easeOutBounce",duration:1000}}
}else{j.animate=j.animated
}}}}h.call(this)
}
}(jQuery,jQuery.ui.accordion.prototype))
}})(jQuery);
(function(a,b){var c=0;
a.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var e,d,f;
this.isMultiLine=this._isMultiLine();
this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"];
this.isNewMenu=true;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");
this._on(this.element,{keydown:function(g){if(this.element.prop("readOnly")){e=true;
f=true;
d=true;
return
}e=false;
f=false;
d=false;
var h=a.ui.keyCode;
switch(g.keyCode){case h.PAGE_UP:e=true;
this._move("previousPage",g);
break;
case h.PAGE_DOWN:e=true;
this._move("nextPage",g);
break;
case h.UP:e=true;
this._keyEvent("previous",g);
break;
case h.DOWN:e=true;
this._keyEvent("next",g);
break;
case h.ENTER:case h.NUMPAD_ENTER:if(this.menu.active){e=true;
g.preventDefault();
this.menu.select(g)
}break;
case h.TAB:if(this.menu.active){this.menu.select(g)
}break;
case h.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);
this.close(g);
g.preventDefault()
}break;
default:d=true;
this._searchTimeout(g);
break
}},keypress:function(g){if(e){e=false;
g.preventDefault();
return
}if(d){return
}var h=a.ui.keyCode;
switch(g.keyCode){case h.PAGE_UP:this._move("previousPage",g);
break;
case h.PAGE_DOWN:this._move("nextPage",g);
break;
case h.UP:this._keyEvent("previous",g);
break;
case h.DOWN:this._keyEvent("next",g);
break
}},input:function(g){if(f){f=false;
g.preventDefault();
return
}this._searchTimeout(g)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(g){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching);
this.close(g);
this._change(g)
}});
this._initSource();
this.menu=a("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:a(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu");
this._on(this.menu.element,{mousedown:function(g){g.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur
});
var h=this.menu.element[0];
if(!a(g.target).closest(".ui-menu-item").length){this._delay(function(){var j=this;
this.document.one("mousedown",function(k){if(k.target!==j.element[0]&&k.target!==h&&!a.contains(h,k.target)){j.close()
}})
})
}},menufocus:function(h,j){if(this.isNewMenu){this.isNewMenu=false;
if(h.originalEvent&&/^mouse/.test(h.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){a(h.target).trigger(h.originalEvent)
});
return
}}var g=j.item.data("ui-autocomplete-item")||j.item.data("item.autocomplete");
if(false!==this._trigger("focus",h,{item:g})){if(h.originalEvent&&/^key/.test(h.originalEvent.type)){this._value(g.value)
}}else{this.liveRegion.text(g.value)
}},menuselect:function(j,k){var h=k.item.data("ui-autocomplete-item")||k.item.data("item.autocomplete"),g=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();
this.previous=g;
this._delay(function(){this.previous=g;
this.selectedItem=h
})
}if(false!==this._trigger("select",j,{item:h})){this._value(h.value)
}this.term=this._value();
this.close(j);
this.selectedItem=h
}});
this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
if(a.fn.bgiframe){this.menu.element.bgiframe()
}this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(d,e){this._super(d,e);
if(d==="source"){this._initSource()
}if(d==="appendTo"){this.menu.element.appendTo(this.document.find(e||"body")[0])
}if(d==="disabled"&&e&&this.xhr){this.xhr.abort()
}},_isMultiLine:function(){if(this.element.is("textarea")){return true
}if(this.element.is("input")){return false
}return this.element.prop("isContentEditable")
},_initSource:function(){var f,d,e=this;
if(a.isArray(this.options.source)){f=this.options.source;
this.source=function(h,g){g(a.ui.autocomplete.filter(f,h.term))
}
}else{if(typeof this.options.source==="string"){d=this.options.source;
this.source=function(h,g){if(e.xhr){e.xhr.abort()
}e.xhr=a.ajax({url:d,data:h,dataType:"json",success:function(j){g(j)
},error:function(){g([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(d){clearTimeout(this.searching);
this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;
this.search(null,d)
}},this.options.delay)
},search:function(e,d){e=e!=null?e:this._value();
this.term=this._value();
if(e.length<this.options.minLength){return this.close(d)
}if(this._trigger("search",d)===false){return
}return this._search(e)
},_search:function(d){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:d},this._response())
},_response:function(){var e=this,d=++c;
return function(f){if(d===c){e.__response(f)
}e.pending--;
if(!e.pending){e.element.removeClass("ui-autocomplete-loading")
}}
},__response:function(d){if(d){d=this._normalize(d)
}this._trigger("response",null,{content:d});
if(!this.options.disabled&&d&&d.length&&!this.cancelSearch){this._suggest(d);
this._trigger("open")
}else{this._close()
}},close:function(d){this.cancelSearch=true;
this._close(d)
},_close:function(d){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",d)
}},_change:function(d){if(this.previous!==this._value()){this._trigger("change",d,{item:this.selectedItem})
}},_normalize:function(d){if(d.length&&d[0].label&&d[0].value){return d
}return a.map(d,function(e){if(typeof e==="string"){return{label:e,value:e}
}return a.extend({label:e.label||e.value,value:e.value||e.label},e)
})
},_suggest:function(d){var e=this.menu.element.empty().zIndex(this.element.zIndex()+1);
this._renderMenu(e,d);
this.menu.refresh();
e.show();
this._resizeMenu();
e.position(a.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}},_resizeMenu:function(){var d=this.menu.element;
d.outerWidth(Math.max(d.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(e,d){var f=this;
a.each(d,function(g,h){f._renderItemData(e,h)
})
},_renderItemData:function(d,e){return this._renderItem(d,e).data("ui-autocomplete-item",e)
},_renderItem:function(d,e){return a("<li>").append(a("<a>").text(e.label)).appendTo(d)
},_move:function(e,d){if(!this.menu.element.is(":visible")){this.search(null,d);
return
}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term);
this.menu.blur();
return
}this.menu[e](d)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(e,d){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,d);
d.preventDefault()
}}});
a.extend(a.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(f,d){var e=new RegExp(a.ui.autocomplete.escapeRegex(d),"i");
return a.grep(f,function(g){return e.test(g.label||g.value||g)
})
}});
a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(d){return d+(d>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(e){var d;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}if(e&&e.length){d=this.options.messages.results(e.length)
}else{d=this.options.messages.noResults
}this.liveRegion.text(d)
}})
}(jQuery));
(function(f,b){var l,e,a,h,j="ui-button ui-widget ui-state-default ui-corner-all",c="ui-state-hover ui-state-active ",g="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",k=function(){var m=f(this).find(":ui-button");
setTimeout(function(){m.button("refresh")
},1)
},d=function(n){var m=n.name,o=n.form,p=f([]);
if(m){if(o){p=f(o).find("[name='"+m+"']")
}else{p=f("[name='"+m+"']",n.ownerDocument).filter(function(){return !this.form
})
}}return p
};
f.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,k);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var p=this,n=this.options,q=this.type==="checkbox"||this.type==="radio",o=!q?"ui-state-active":"",m="ui-state-focus";
if(n.label===null){n.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(j).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(n.disabled){return
}if(this===l){f(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(n.disabled){return
}f(this).removeClass(o)
}).bind("click"+this.eventNamespace,function(r){if(n.disabled){r.preventDefault();
r.stopImmediatePropagation()
}});
this.element.bind("focus"+this.eventNamespace,function(){p.buttonElement.addClass(m)
}).bind("blur"+this.eventNamespace,function(){p.buttonElement.removeClass(m)
});
if(q){this.element.bind("change"+this.eventNamespace,function(){if(h){return
}p.refresh()
});
this.buttonElement.bind("mousedown"+this.eventNamespace,function(r){if(n.disabled){return
}h=false;
e=r.pageX;
a=r.pageY
}).bind("mouseup"+this.eventNamespace,function(r){if(n.disabled){return
}if(e!==r.pageX||a!==r.pageY){h=true
}})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(n.disabled||h){return false
}f(this).toggleClass("ui-state-active");
p.buttonElement.attr("aria-pressed",p.element[0].checked)
})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(n.disabled||h){return false
}f(this).addClass("ui-state-active");
p.buttonElement.attr("aria-pressed","true");
var r=p.element[0];
d(r).not(r).map(function(){return f(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(n.disabled){return false
}f(this).addClass("ui-state-active");
l=this;
p.document.one("mouseup",function(){l=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(n.disabled){return false
}f(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(r){if(n.disabled){return false
}if(r.keyCode===f.ui.keyCode.SPACE||r.keyCode===f.ui.keyCode.ENTER){f(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace,function(){f(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(r){if(r.keyCode===f.ui.keyCode.SPACE){f(this).click()
}})
}}}this._setOption("disabled",n.disabled);
this._resetButton()
},_determineButtonType:function(){var m,o,n;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){m=this.element.parents().last();
o="label[for='"+this.element.attr("id")+"']";
this.buttonElement=m.find(o);
if(!this.buttonElement.length){m=m.length?m.siblings():this.element.siblings();
this.buttonElement=m.filter(o);
if(!this.buttonElement.length){this.buttonElement=m.find(o)
}}this.element.addClass("ui-helper-hidden-accessible");
n=this.element.is(":checked");
if(n){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",n)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(j+" "+c+" "+g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(m,n){this._super(m,n);
if(m==="disabled"){if(n){this.element.prop("disabled",true)
}else{this.element.prop("disabled",false)
}return
}this._resetButton()
},refresh:function(){var m=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(m!==this.options.disabled){this._setOption("disabled",m)
}if(this.type==="radio"){d(this.element[0]).each(function(){if(f(this).is(":checked")){f(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var q=this.buttonElement.removeClass(g),o=f("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(q.empty()).text(),n=this.options.icons,m=n.primary&&n.secondary,p=[];
if(n.primary||n.secondary){if(this.options.text){p.push("ui-button-text-icon"+(m?"s":(n.primary?"-primary":"-secondary")))
}if(n.primary){q.prepend("<span class='ui-button-icon-primary ui-icon "+n.primary+"'></span>")
}if(n.secondary){q.append("<span class='ui-button-icon-secondary ui-icon "+n.secondary+"'></span>")
}if(!this.options.text){p.push(m?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){q.attr("title",f.trim(o))
}}}else{p.push("ui-button-text-only")
}q.addClass(p.join(" "))
}});
f.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(m,n){if(m==="disabled"){this.buttons.button("option",m,n)
}this._super(m,n)
},refresh:function(){var m=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return f(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(m?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(m?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return f(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function($,undefined){$.extend($.ui,{datepicker:{version:"1.9.2"}});
var PROP_NAME="datepicker";
var dpuuid=new Date().getTime();
var instActive;
function Datepicker(){this.debug=false;
this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
$.extend(this._defaults,this.regional[""]);
this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug){console.log.apply("",arguments)
}},_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(settings){extendRemove(this._defaults,settings||{});
return this
},_attachDatepicker:function(target,settings){var inlineSettings=null;
for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);
if(attrValue){inlineSettings=inlineSettings||{};
try{inlineSettings[attrName]=eval(attrValue)
}catch(err){inlineSettings[attrName]=attrValue
}}}var nodeName=target.nodeName.toLowerCase();
var inline=(nodeName=="div"||nodeName=="span");
if(!target.id){this.uuid+=1;
target.id="dp"+this.uuid
}var inst=this._newInst($(target),inline);
inst.settings=$.extend({},settings||{},inlineSettings||{});
if(nodeName=="input"){this._connectDatepicker(target,inst)
}else{if(inline){this._inlineDatepicker(target,inst)
}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");
return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))}
},_connectDatepicker:function(target,inst){var input=$(target);
inst.append=$([]);
inst.trigger=$([]);
if(input.hasClass(this.markerClassName)){return
}this._attachments(input,inst);
input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value
}).bind("getData.datepicker",function(event,key){return this._get(inst,key)
});
this._autoSize(inst);
$.data(target,PROP_NAME,inst);
if(inst.settings.disabled){this._disableDatepicker(target)
}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");
var isRTL=this._get(inst,"isRTL");
if(inst.append){inst.append.remove()
}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");
input[isRTL?"before":"after"](inst.append)
}input.unbind("focus",this._showDatepicker);
if(inst.trigger){inst.trigger.remove()
}var showOn=this._get(inst,"showOn");
if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)
}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");
var buttonImage=this._get(inst,"buttonImage");
inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));
input[isRTL?"before":"after"](inst.trigger);
inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()
}else{if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){$.datepicker._hideDatepicker();
$.datepicker._showDatepicker(input[0])
}else{$.datepicker._showDatepicker(input[0])
}}return false
})
}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);
var dateFormat=this._get(inst,"dateFormat");
if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;
var maxI=0;
for(var i=0;
i<names.length;
i++){if(names[i].length>max){max=names[i].length;
maxI=i
}}return maxI
};
date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));
date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())
}inst.input.attr("size",this._formatDate(inst,date).length)
}},_inlineDatepicker:function(target,inst){var divSpan=$(target);
if(divSpan.hasClass(this.markerClassName)){return
}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value
}).bind("getData.datepicker",function(event,key){return this._get(inst,key)
});
$.data(target,PROP_NAME,inst);
this._setDate(inst,this._getDefaultDate(inst),true);
this._updateDatepicker(inst);
this._updateAlternate(inst);
if(inst.settings.disabled){this._disableDatepicker(target)
}inst.dpDiv.css("display","block")
},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;
if(!inst){this.uuid+=1;
var id="dp"+this.uuid;
this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px;"/>');
this._dialogInput.keydown(this._doKeyDown);
$("body").append(this._dialogInput);
inst=this._dialogInst=this._newInst(this._dialogInput,false);
inst.settings={};
$.data(this._dialogInput[0],PROP_NAME,inst)
}extendRemove(inst.settings,settings||{});
date=(date&&date.constructor==Date?this._formatDate(inst,date):date);
this._dialogInput.val(date);
this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);
if(!this._pos){var browserWidth=document.documentElement.clientWidth;
var browserHeight=document.documentElement.clientHeight;
var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;
var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
inst.settings.onSelect=onSelect;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if($.blockUI){$.blockUI(this.dpDiv)
}$.data(this._dialogInput[0],PROP_NAME,inst);
return this
},_destroyDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
$.removeData(target,PROP_NAME);
if(nodeName=="input"){inst.append.remove();
inst.trigger.remove();
$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
if(nodeName=="input"){target.disabled=false;
inst.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);
inline.children().removeClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)
})
},_disableDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
if(nodeName=="input"){target.disabled=true;
inst.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);
inline.children().addClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)
});
this._disabledInputs[this._disabledInputs.length]=target
},_isDisabledDatepicker:function(target){if(!target){return false
}for(var i=0;
i<this._disabledInputs.length;
i++){if(this._disabledInputs[i]==target){return true
}}return false
},_getInst:function(target){try{return $.data(target,PROP_NAME)
}catch(err){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);
if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))
}var settings=name||{};
if(typeof name=="string"){settings={};
settings[name]=value
}if(inst){if(this._curInst==inst){this._hideDatepicker()
}var date=this._getDateDatepicker(target,true);
var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
extendRemove(inst.settings,settings);
if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)
}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)
}this._attachments($(target),inst);
this._autoSize(inst);
this._setDate(inst,date);
this._updateAlternate(inst);
this._updateDatepicker(inst)
}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)
},_refreshDatepicker:function(target){var inst=this._getInst(target);
if(inst){this._updateDatepicker(inst)
}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);
if(inst){this._setDate(inst,date);
this._updateDatepicker(inst);
this._updateAlternate(inst)
}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);
if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)
}return(inst?this._getDate(inst):null)
},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);
var handled=true;
var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");
inst._keyEvent=true;
if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();
handled=false;
break;
case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);
if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])
}var onSelect=$.datepicker._get(inst,"onSelect");
if(onSelect){var dateStr=$.datepicker._formatDate(inst);
onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])
}else{$.datepicker._hideDatepicker()
}return false;
break;
case 27:$.datepicker._hideDatepicker();
break;
case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");
break;
case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");
break;
case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)
}handled=event.ctrlKey||event.metaKey;
break;
case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)
}handled=event.ctrlKey||event.metaKey;
break;
case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")
}handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")
}break;
case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")
}handled=event.ctrlKey||event.metaKey;
break;
case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")
}handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")
}break;
case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")
}handled=event.ctrlKey||event.metaKey;
break;
default:handled=false
}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)
}else{handled=false
}}if(handled){event.preventDefault();
event.stopPropagation()
}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);
if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));
var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);
return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)
}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);
if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));
if(date){$.datepicker._setDateFromField(inst);
$.datepicker._updateAlternate(inst);
$.datepicker._updateDatepicker(inst)
}}catch(err){$.datepicker.log(err)
}}return true
},_showDatepicker:function(input){input=input.target||input;
if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]
}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return
}var inst=$.datepicker._getInst(input);
if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);
if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])
}}var beforeShow=$.datepicker._get(inst,"beforeShow");
var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};
if(beforeShowSettings===false){return
}extendRemove(inst.settings,beforeShowSettings);
inst.lastVal=null;
$.datepicker._lastInput=input;
$.datepicker._setDateFromField(inst);
if($.datepicker._inDialog){input.value=""
}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);
$.datepicker._pos[1]+=input.offsetHeight
}var isFixed=false;
$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";
return !isFixed
});
var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};
$.datepicker._pos=null;
inst.dpDiv.empty();
inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
$.datepicker._updateDatepicker(inst);
offset=$.datepicker._checkOffset(inst,offset,isFixed);
inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});
if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");
var duration=$.datepicker._get(inst,"duration");
var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");
if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);
cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})
}};
inst.dpDiv.zIndex($(input).zIndex()+1);
$.datepicker._datepickerShowing=true;
if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)
}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)
}if(!showAnim||!duration){postProcess()
}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()
}$.datepicker._curInst=inst
}},_updateDatepicker:function(inst){this.maxRows=4;
var borders=$.datepicker._getBorders(inst.dpDiv);
instActive=inst;
inst.dpDiv.empty().append(this._generateHTML(inst));
this._attachHandlers(inst);
var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");
if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})
}inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var numMonths=this._getNumberOfMonths(inst);
var cols=numMonths[1];
var width=17;
inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")
}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");
inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){inst.input.focus()
}if(inst.yearshtml){var origyearshtml=inst.yearshtml;
setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)
}origyearshtml=inst.yearshtml=null
},0)
}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value
};
return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]
},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();
var dpHeight=inst.dpDiv.outerHeight();
var inputWidth=inst.input?inst.input.outerWidth():0;
var inputHeight=inst.input?inst.input.outerHeight():0;
var viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft());
var viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());
offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);
offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;
offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;
offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);
offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);
return offset
},_findPos:function(obj){var inst=this._getInst(obj);
var isRTL=this._get(inst,"isRTL");
while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]
}var position=$(obj).offset();
return[position.left,position.top]
},_hideDatepicker:function(input){var inst=this._curInst;
if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return
}if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");
var duration=this._get(inst,"duration");
var postProcess=function(){$.datepicker._tidyDialog(inst)
};
if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)
}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)
}if(!showAnim){postProcess()
}this._datepickerShowing=false;
var onClose=this._get(inst,"onClose");
if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if($.blockUI){$.unblockUI();
$("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(event){if(!$.datepicker._curInst){return
}var $target=$(event.target),inst=$.datepicker._getInst($target[0]);
if((($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)){$.datepicker._hideDatepicker()
}},_adjustDate:function(id,offset,period){var target=$(id);
var inst=this._getInst(target[0]);
if(this._isDisabledDatepicker(target[0])){return
}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);
this._updateDatepicker(inst)
},_gotoToday:function(id){var target=$(id);
var inst=this._getInst(target[0]);
if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;
inst.drawMonth=inst.selectedMonth=inst.currentMonth;
inst.drawYear=inst.selectedYear=inst.currentYear
}else{var date=new Date();
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear()
}this._notifyChange(inst);
this._adjustDate(target)
},_selectMonthYear:function(id,select,period){var target=$(id);
var inst=this._getInst(target[0]);
inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);
this._notifyChange(inst);
this._adjustDate(target)
},_selectDay:function(id,month,year,td){var target=$(id);
if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return
}var inst=this._getInst(target[0]);
inst.selectedDay=inst.currentDay=$("a",td).html();
inst.selectedMonth=inst.currentMonth=month;
inst.selectedYear=inst.currentYear=year;
this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))
},_clearDate:function(id){var target=$(id);
var inst=this._getInst(target[0]);
this._selectDate(target,"")
},_selectDate:function(id,dateStr){var target=$(id);
var inst=this._getInst(target[0]);
dateStr=(dateStr!=null?dateStr:this._formatDate(inst));
if(inst.input){inst.input.val(dateStr)
}this._updateAlternate(inst);
var onSelect=this._get(inst,"onSelect");
if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])
}else{if(inst.input){inst.input.trigger("change")
}}if(inst.inline){this._updateDatepicker(inst)
}else{this._hideDatepicker();
this._lastInput=inst.input[0];
if(typeof(inst.input[0])!="object"){inst.input.focus()
}this._lastInput=null
}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");
if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");
var date=this._getDate(inst);
var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));
$(altField).each(function(){$(this).val(dateStr)
})
}},noWeekends:function(date){var day=date.getDay();
return[(day>0&&day<6),""]
},iso8601Week:function(date){var checkDate=new Date(date.getTime());
checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));
var time=checkDate.getTime();
checkDate.setMonth(0);
checkDate.setDate(1);
return Math.floor(Math.round((time-checkDate)/86400000)/7)+1
},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"
}value=(typeof value=="object"?value.toString():value+"");
if(value==""){return null
}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;
shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;
var year=-1;
var month=-1;
var day=-1;
var doy=-1;
var literal=false;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
var getNumber=function(match){var isDoubled=lookAhead(match);
var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));
var digits=new RegExp("^\\d{1,"+size+"}");
var num=value.substring(iValue).match(digits);
if(!num){throw"Missing number at position "+iValue
}iValue+=num[0].length;
return parseInt(num[0],10)
};
var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]
}).sort(function(a,b){return -(a[1].length-b[1].length)
});
var index=-1;
$.each(names,function(i,pair){var name=pair[1];
if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];
iValue+=name.length;
return false
}});
if(index!=-1){return index+1
}else{throw"Unknown name at position "+iValue
}};
var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue
}iValue++
};
var iValue=0;
for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{checkLiteral()
}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");
break;
case"D":getName("D",dayNamesShort,dayNames);
break;
case"o":doy=getNumber("o");
break;
case"m":month=getNumber("m");
break;
case"M":month=getName("M",monthNamesShort,monthNames);
break;
case"y":year=getNumber("y");
break;
case"@":var date=new Date(getNumber("@"));
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case"'":if(lookAhead("'")){checkLiteral()
}else{literal=true
}break;
default:checkLiteral()
}}}if(iValue<value.length){var extra=value.substr(iValue);
if(!/^\s+/.test(extra)){throw"Extra/unparsed characters found in date: "+extra
}}if(year==-1){year=new Date().getFullYear()
}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)
}}if(doy>-1){month=1;
day=doy;
do{var dim=this._getDaysInMonth(year,month-1);
if(day<=dim){break
}month++;
day-=dim
}while(true)
}var date=this._daylightSavingAdjust(new Date(year,month-1,day));
if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"
}return date
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""
}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
var formatNumber=function(match,value,len){var num=""+value;
if(lookAhead(match)){while(num.length<len){num="0"+num
}}return num
};
var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])
};
var output="";
var literal=false;
if(date){for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{output+=format.charAt(iFormat)
}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);
break;
case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);
break;
case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":output+=formatNumber("m",date.getMonth()+1,2);
break;
case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);
break;
case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);
break;
case"@":output+=date.getTime();
break;
case"!":output+=date.getTime()*10000+this._ticksTo1970;
break;
case"'":if(lookAhead("'")){output+="'"
}else{literal=true
}break;
default:output+=format.charAt(iFormat)
}}}}return output
},_possibleChars:function(format){var chars="";
var literal=false;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{chars+=format.charAt(iFormat)
}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";
break;
case"D":case"M":return null;
case"'":if(lookAhead("'")){chars+="'"
}else{literal=true
}break;
default:chars+=format.charAt(iFormat)
}}}return chars
},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]
},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return
}var dateFormat=this._get(inst,"dateFormat");
var dates=inst.lastVal=inst.input?inst.input.val():null;
var date,defaultDate;
date=defaultDate=this._getDefaultDate(inst);
var settings=this._getFormatConfig(inst);
try{date=this.parseDate(dateFormat,dates,settings)||defaultDate
}catch(event){this.log(event);
dates=(noDefault?"":dates)
}inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
inst.currentDay=(dates?date.getDate():0);
inst.currentMonth=(dates?date.getMonth():0);
inst.currentYear=(dates?date.getFullYear():0);
this._adjustInstDate(inst)
},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))
},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();
date.setDate(date.getDate()+offset);
return date
};
var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))
}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();
var year=date.getFullYear();
var month=date.getMonth();
var day=date.getDate();
var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
var matches=pattern.exec(offset);
while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);
break;
case"w":case"W":day+=parseInt(matches[1],10)*7;
break;
case"m":case"M":month+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break;
case"y":case"Y":year+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break
}matches=pattern.exec(offset)
}return new Date(year,month,day)
};
var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));
newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);
if(newDate){newDate.setHours(0);
newDate.setMinutes(0);
newDate.setSeconds(0);
newDate.setMilliseconds(0)
}return this._daylightSavingAdjust(newDate)
},_daylightSavingAdjust:function(date){if(!date){return null
}date.setHours(date.getHours()>12?date.getHours()+2:0);
return date
},_setDate:function(inst,date,noChange){var clear=!date;
var origMonth=inst.selectedMonth;
var origYear=inst.selectedYear;
var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));
inst.selectedDay=inst.currentDay=newDate.getDate();
inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();
inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();
if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)
}this._adjustInstDate(inst);
if(inst.input){inst.input.val(clear?"":this._formatDate(inst))
}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return startDate
},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths");
var id="#"+inst.id.replace(/\\\\/g,"\\");
inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,-stepMonths,"M")
},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,+stepMonths,"M")
},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()
},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(id)
},selectDay:function(){window["DP_jQuery_"+dpuuid].datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"M");
return false
},selectYear:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"Y");
return false
}};
$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])
})
},_generateHTML:function(inst){var today=new Date();
today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));
var isRTL=this._get(inst,"isRTL");
var showButtonPanel=this._get(inst,"showButtonPanel");
var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");
var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");
var numMonths=this._getNumberOfMonths(inst);
var showCurrentAtPos=this._get(inst,"showCurrentAtPos");
var stepMonths=this._get(inst,"stepMonths");
var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);
var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
var drawMonth=inst.drawMonth-showCurrentAtPos;
var drawYear=inst.drawYear;
if(drawMonth<0){drawMonth+=12;
drawYear--
}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));
maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);
while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;
if(drawMonth<0){drawMonth=11;
drawYear--
}}}inst.drawMonth=drawMonth;
inst.drawYear=drawYear;
var prevText=this._get(inst,"prevText");
prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));
var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));
var nextText=this._get(inst,"nextText");
nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));
var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));
var currentText=this._get(inst,"currentText");
var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);
currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));
var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(inst,"closeText")+"</button>":"");
var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";
var firstDay=parseInt(this._get(inst,"firstDay"),10);
firstDay=(isNaN(firstDay)?0:firstDay);
var showWeek=this._get(inst,"showWeek");
var dayNames=this._get(inst,"dayNames");
var dayNamesShort=this._get(inst,"dayNamesShort");
var dayNamesMin=this._get(inst,"dayNamesMin");
var monthNames=this._get(inst,"monthNames");
var monthNamesShort=this._get(inst,"monthNamesShort");
var beforeShowDay=this._get(inst,"beforeShowDay");
var showOtherMonths=this._get(inst,"showOtherMonths");
var selectOtherMonths=this._get(inst,"selectOtherMonths");
var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;
var defaultDate=this._getDefaultDate(inst);
var html="";
for(var row=0;
row<numMonths[0];
row++){var group="";
this.maxRows=4;
for(var col=0;
col<numMonths[1];
col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));
var cornerClass=" ui-corner-all";
var calender="";
if(isMultiMonth){calender+='<div class="ui-datepicker-group';
if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";
cornerClass=" ui-corner-"+(isRTL?"right":"left");
break;
case numMonths[1]-1:calender+=" ui-datepicker-group-last";
cornerClass=" ui-corner-"+(isRTL?"left":"right");
break;
default:calender+=" ui-datepicker-group-middle";
cornerClass="";
break
}}calender+='">'
}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';
var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");
for(var dow=0;
dow<7;
dow++){var day=(dow+firstDay)%7;
thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"
}calender+=thead+"</tr></thead><tbody>";
var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);
if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)
}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;
var curRows=Math.ceil((leadDays+daysInMonth)/7);
var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);
this.maxRows=numRows;
var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));
for(var dRow=0;
dRow<numRows;
dRow++){calender+="<tr>";
var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");
for(var dow=0;
dow<7;
dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);
var otherMonth=(printDate.getMonth()!=drawMonth);
var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);
tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' data-handler="selectDay" data-event="click" data-month="'+printDate.getMonth()+'" data-year="'+printDate.getFullYear()+'"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";
printDate.setDate(printDate.getDate()+1);
printDate=this._daylightSavingAdjust(printDate)
}calender+=tbody+"</tr>"
}drawMonth++;
if(drawMonth>11){drawMonth=0;
drawYear++
}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");
group+=calender
}html+=group
}html+=buttonPanel+($.ui.ie6&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");
inst._keyEvent=false;
return html
},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");
var changeYear=this._get(inst,"changeYear");
var showMonthAfterYear=this._get(inst,"showMonthAfterYear");
var html='<div class="ui-datepicker-title">';
var monthHtml="";
if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"
}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);
var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);
monthHtml+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
for(var month=0;
month<12;
month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"
}}monthHtml+="</select>"
}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")
}if(!inst.yearshtml){inst.yearshtml="";
if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"
}else{var years=this._get(inst,"yearRange").split(":");
var thisYear=new Date().getFullYear();
var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));
return(isNaN(year)?thisYear:year)
};
var year=determineYear(years[0]);
var endYear=Math.max(year,determineYear(years[1]||""));
year=(minDate?Math.max(year,minDate.getFullYear()):year);
endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);
inst.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
for(;
year<=endYear;
year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"
}inst.yearshtml+="</select>";
html+=inst.yearshtml;
inst.yearshtml=null
}}html+=this._get(inst,"yearSuffix");
if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml
}html+="</div>";
return html
},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);
var month=inst.drawMonth+(period=="M"?offset:0);
var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);
var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
if(period=="M"||period=="Y"){this._notifyChange(inst)
}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
var newDate=(minDate&&date<minDate?minDate:date);
newDate=(maxDate&&newDate>maxDate?maxDate:newDate);
return newDate
},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");
if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])
}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");
return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))
},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)
},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()
},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()
},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);
var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));
if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))
}return this._isInRange(inst,date)
},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))
},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");
shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}
},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;
inst.currentMonth=inst.selectedMonth;
inst.currentYear=inst.selectedYear
}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))
}});
function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return dpDiv.delegate(selector,"mouseout",function(){$(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).removeClass("ui-datepicker-next-hover")
}}).delegate(selector,"mouseover",function(){if(!$.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
$(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).addClass("ui-datepicker-next-hover")
}}})
}function extendRemove(target,props){$.extend(target,props);
for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]
}}return target
}$.fn.datepicker=function(options){if(!this.length){return this
}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv);
$.datepicker.initialized=true
}var otherArgs=Array.prototype.slice.call(arguments,1);
if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))
}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))
}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)
})
};
$.datepicker=new Datepicker();
$.datepicker.initialized=false;
$.datepicker.uuid=new Date().getTime();
$.datepicker.version="1.9.2";
window["DP_jQuery_"+dpuuid]=$
})(jQuery);
(function(d,e){var b="ui-dialog ui-widget ui-widget-content ui-corner-all ",a={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},c={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
d.widget("ui.dialog",{version:"1.9.2",options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(g){var f=d(this).css(g).offset().top;
if(f<0){d(this).css("top",g.top-f)
}}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");
if(typeof this.originalTitle!=="string"){this.originalTitle=""
}this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.options.title=this.options.title||this.originalTitle;
var l=this,k=this.options,n=k.title||"&#160;",h,m,f,j,g;
h=(this.uiDialog=d("<div>")).addClass(b+k.dialogClass).css({display:"none",outline:0,zIndex:k.zIndex}).attr("tabIndex",-1).keydown(function(o){if(k.closeOnEscape&&!o.isDefaultPrevented()&&o.keyCode&&o.keyCode===d.ui.keyCode.ESCAPE){l.close(o);
o.preventDefault()
}}).mousedown(function(o){l.moveToTop(false,o)
}).appendTo("body");
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(h);
m=(this.uiDialogTitlebar=d("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",function(){h.focus()
}).prependTo(h);
f=d("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(function(o){o.preventDefault();
l.close(o)
}).appendTo(m);
(this.uiDialogTitlebarCloseText=d("<span>")).addClass("ui-icon ui-icon-closethick").text(k.closeText).appendTo(f);
j=d("<span>").uniqueId().addClass("ui-dialog-title").prependTo(m);
if(!k.title){j.html("&#160;")
}else{j.text(k.title)
}g=(this.uiDialogButtonPane=d("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
(this.uiButtonSet=d("<div>")).addClass("ui-dialog-buttonset").appendTo(g);
h.attr({role:"dialog","aria-labelledby":j.attr("id")});
m.find("*").add(m).disableSelection();
this._hoverable(f);
this._focusable(f);
if(k.draggable&&d.fn.draggable){this._makeDraggable()
}if(k.resizable&&d.fn.resizable){this._makeResizable()
}this._createButtons(k.buttons);
this._isOpen=false;
if(d.fn.bgiframe){h.bgiframe()
}this._on(h,{keydown:function(q){if(!k.modal||q.keyCode!==d.ui.keyCode.TAB){return
}var p=d(":tabbable",h),r=p.filter(":first"),o=p.filter(":last");
if(q.target===o[0]&&!q.shiftKey){r.focus(1);
return false
}else{if(q.target===r[0]&&q.shiftKey){o.focus(1);
return false
}}}})
},_init:function(){if(this.options.autoOpen){this.open()
}},_destroy:function(){var g,f=this.oldPosition;
if(this.overlay){this.overlay.destroy()
}this.uiDialog.hide();
this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
this.uiDialog.remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}g=f.parent.children().eq(f.index);
if(g.length&&g[0]!==this.element[0]){g.before(this.element)
}else{f.parent.append(this.element)
}},widget:function(){return this.uiDialog
},close:function(j){var h=this,g,f;
if(!this._isOpen){return
}if(false===this._trigger("beforeClose",j)){return
}this._isOpen=false;
if(this.overlay){this.overlay.destroy()
}if(this.options.hide){this._hide(this.uiDialog,this.options.hide,function(){h._trigger("close",j)
})
}else{this.uiDialog.hide();
this._trigger("close",j)
}d.ui.dialog.overlay.resize();
if(this.options.modal){g=0;
d(".ui-dialog").each(function(){if(this!==h.uiDialog[0]){f=d(this).css("z-index");
if(!isNaN(f)){g=Math.max(g,f)
}}});
d.ui.dialog.maxZ=g
}return this
},isOpen:function(){return this._isOpen
},moveToTop:function(j,h){var g=this.options,f;
if((g.modal&&!j)||(!g.stack&&!g.modal)){return this._trigger("focus",h)
}if(g.zIndex>d.ui.dialog.maxZ){d.ui.dialog.maxZ=g.zIndex
}if(this.overlay){d.ui.dialog.maxZ+=1;
d.ui.dialog.overlay.maxZ=d.ui.dialog.maxZ;
this.overlay.$el.css("z-index",d.ui.dialog.overlay.maxZ)
}f={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()};
d.ui.dialog.maxZ+=1;
this.uiDialog.css("z-index",d.ui.dialog.maxZ);
this.element.attr(f);
this._trigger("focus",h);
return this
},open:function(){if(this._isOpen){return
}var h,g=this.options,f=this.uiDialog;
this._size();
this._position(g.position);
f.show(g.show);
this.overlay=g.modal?new d.ui.dialog.overlay(this):null;
this.moveToTop(true);
h=this.element.find(":tabbable");
if(!h.length){h=this.uiDialogButtonPane.find(":tabbable");
if(!h.length){h=f
}}h.eq(0).focus();
this._isOpen=true;
this._trigger("open");
return this
},_createButtons:function(h){var g=this,f=false;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(typeof h==="object"&&h!==null){d.each(h,function(){return !(f=true)
})
}if(f){d.each(h,function(j,l){var k,m;
l=d.isFunction(l)?{click:l,text:j}:l;
l=d.extend({type:"button"},l);
m=l.click;
l.click=function(){m.apply(g.element[0],arguments)
};
k=d("<button></button>",l).appendTo(g.uiButtonSet);
if(d.fn.button){k.button()
}});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
}else{this.uiDialog.removeClass("ui-dialog-buttons")
}},_makeDraggable:function(){var h=this,g=this.options;
function f(j){return{position:j.position,offset:j.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(j,k){d(this).addClass("ui-dialog-dragging");
h._trigger("dragStart",j,f(k))
},drag:function(j,k){h._trigger("drag",j,f(k))
},stop:function(j,k){g.position=[k.position.left-h.document.scrollLeft(),k.position.top-h.document.scrollTop()];
d(this).removeClass("ui-dialog-dragging");
h._trigger("dragStop",j,f(k));
d.ui.dialog.overlay.resize()
}})
},_makeResizable:function(k){k=(k===e?this.options.resizable:k);
var l=this,j=this.options,f=this.uiDialog.css("position"),h=typeof k==="string"?k:"n,e,s,w,se,sw,ne,nw";
function g(m){return{originalPosition:m.originalPosition,originalSize:m.originalSize,position:m.position,size:m.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:j.maxWidth,maxHeight:j.maxHeight,minWidth:j.minWidth,minHeight:this._minHeight(),handles:h,start:function(m,n){d(this).addClass("ui-dialog-resizing");
l._trigger("resizeStart",m,g(n))
},resize:function(m,n){l._trigger("resize",m,g(n))
},stop:function(m,n){d(this).removeClass("ui-dialog-resizing");
j.height=d(this).height();
j.width=d(this).width();
l._trigger("resizeStop",m,g(n));
d.ui.dialog.overlay.resize()
}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
},_minHeight:function(){var f=this.options;
if(f.height==="auto"){return f.minHeight
}else{return Math.min(f.minHeight,f.height)
}},_position:function(g){var h=[],j=[0,0],f;
if(g){if(typeof g==="string"||(typeof g==="object"&&"0" in g)){h=g.split?g.split(" "):[g[0],g[1]];
if(h.length===1){h[1]=h[0]
}d.each(["left","top"],function(l,k){if(+h[l]===h[l]){j[l]=h[l];
h[l]=k
}});
g={my:h[0]+(j[0]<0?j[0]:"+"+j[0])+" "+h[1]+(j[1]<0?j[1]:"+"+j[1]),at:h.join(" ")}
}g=d.extend({},d.ui.dialog.prototype.options.position,g)
}else{g=d.ui.dialog.prototype.options.position
}f=this.uiDialog.is(":visible");
if(!f){this.uiDialog.show()
}this.uiDialog.position(g);
if(!f){this.uiDialog.hide()
}},_setOptions:function(h){var j=this,f={},g=false;
d.each(h,function(k,l){j._setOption(k,l);
if(k in a){g=true
}if(k in c){f[k]=l
}});
if(g){this._size()
}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",f)
}},_setOption:function(j,k){var h,l,g=this.uiDialog;
switch(j){case"buttons":this._createButtons(k);
break;
case"closeText":this.uiDialogTitlebarCloseText.text(""+k);
break;
case"dialogClass":g.removeClass(this.options.dialogClass).addClass(b+k);
break;
case"disabled":if(k){g.addClass("ui-dialog-disabled")
}else{g.removeClass("ui-dialog-disabled")
}break;
case"draggable":h=g.is(":data(draggable)");
if(h&&!k){g.draggable("destroy")
}if(!h&&k){this._makeDraggable()
}break;
case"position":this._position(k);
break;
case"resizable":l=g.is(":data(resizable)");
if(l&&!k){g.resizable("destroy")
}if(l&&typeof k==="string"){g.resizable("option","handles",k)
}if(!l&&k!==false){this._makeResizable(k)
}break;
case"title":var f=this.uiDialogTitlebar.find(".ui-dialog-title");
if(!k){f.html("&#160;")
}else{f.text(k)
}break
}this._super(j,k)
},_size:function(){var g,k,j,h=this.options,f=this.uiDialog.is(":visible");
this.element.show().css({width:"auto",minHeight:0,height:0});
if(h.minWidth>h.width){h.width=h.minWidth
}g=this.uiDialog.css({height:"auto",width:h.width}).outerHeight();
k=Math.max(0,h.minHeight-g);
if(h.height==="auto"){if(d.support.minHeight){this.element.css({minHeight:k,height:"auto"})
}else{this.uiDialog.show();
j=this.element.css("height","auto").height();
if(!f){this.uiDialog.hide()
}this.element.height(Math.max(j,k))
}}else{this.element.height(Math.max(h.height-g,0))
}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}}});
d.extend(d.ui.dialog,{uuid:0,maxZ:0,getTitleId:function(f){var g=f.attr("id");
if(!g){this.uuid+=1;
g=this.uuid
}return"ui-dialog-title-"+g
},overlay:function(f){this.$el=d.ui.dialog.overlay.create(f)
}});
d.extend(d.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:d.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(f){return f+".dialog-overlay"
}).join(" "),create:function(g){if(this.instances.length===0){setTimeout(function(){if(d.ui.dialog.overlay.instances.length){d(document).bind(d.ui.dialog.overlay.events,function(h){if(d(h.target).zIndex()<d.ui.dialog.overlay.maxZ){return false
}})
}},1);
d(window).bind("resize.dialog-overlay",d.ui.dialog.overlay.resize)
}var f=(this.oldInstances.pop()||d("<div>").addClass("ui-widget-overlay"));
d(document).bind("keydown.dialog-overlay",function(h){var j=d.ui.dialog.overlay.instances;
if(j.length!==0&&j[j.length-1]===f&&g.options.closeOnEscape&&!h.isDefaultPrevented()&&h.keyCode&&h.keyCode===d.ui.keyCode.ESCAPE){g.close(h);
h.preventDefault()
}});
f.appendTo(document.body).css({width:this.width(),height:this.height()});
if(d.fn.bgiframe){f.bgiframe()
}this.instances.push(f);
return f
},destroy:function(f){var g=d.inArray(f,this.instances),h=0;
if(g!==-1){this.oldInstances.push(this.instances.splice(g,1)[0])
}if(this.instances.length===0){d([document,window]).unbind(".dialog-overlay")
}f.height(0).width(0).remove();
d.each(this.instances,function(){h=Math.max(h,this.css("z-index"))
});
this.maxZ=h
},height:function(){var g,f;
if(d.ui.ie){g=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
f=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);
if(g<f){return d(window).height()+"px"
}else{return g+"px"
}}else{return d(document).height()+"px"
}},width:function(){var f,g;
if(d.ui.ie){f=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);
g=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);
if(f<g){return d(window).width()+"px"
}else{return f+"px"
}}else{return d(document).width()+"px"
}},resize:function(){var f=d([]);
d.each(d.ui.dialog.overlay.instances,function(){f=f.add(this)
});
f.css({width:0,height:0}).css({width:d.ui.dialog.overlay.width(),height:d.ui.dialog.overlay.height()})
}});
d.extend(d.ui.dialog.overlay.prototype,{destroy:function(){d.ui.dialog.overlay.destroy(this.$el)
}})
}(jQuery));
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}(this.options.addClasses&&this.element.addClass("ui-draggable"));
(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));
this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(c){var d=this.options;
if(this.helper||d.disabled||a(c.target).is(".ui-resizable-handle")){return false
}this.handle=this._getHandle(c);
if(!this.handle){return false
}a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(c){var d=this.options;
this.helper=this._createHelper(c);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(a.ui.ddmanager){a.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(c);
this.originalPageX=c.pageX;
this.originalPageY=c.pageY;
(d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt));
if(d.containment){this._setContainment()
}if(this._trigger("start",c)===false){this._clear();
return false
}this._cacheHelperProportions();
if(a.ui.ddmanager&&!d.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)
}this._mouseDrag(c,true);
if(a.ui.ddmanager){a.ui.ddmanager.dragStart(this,c)
}return true
},_mouseDrag:function(c,e){this.position=this._generatePosition(c);
this.positionAbs=this._convertPositionTo("absolute");
if(!e){var d=this._uiHash();
if(this._trigger("drag",c,d)===false){this._mouseUp({});
return false
}this.position=d.position
}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)
}return false
},_mouseStop:function(e){var g=false;
if(a.ui.ddmanager&&!this.options.dropBehaviour){g=a.ui.ddmanager.drop(this,e)
}if(this.dropped){g=this.dropped;
this.dropped=false
}var c=this.element[0],f=false;
while(c&&(c=c.parentNode)){if(c==document){f=true
}}if(!f&&this.options.helper==="original"){return false
}if((this.options.revert=="invalid"&&!g)||(this.options.revert=="valid"&&g)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,g))){var d=this;
a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(d._trigger("stop",e)!==false){d._clear()
}})
}else{if(this._trigger("stop",e)!==false){this._clear()
}}return false
},_mouseUp:function(c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(a.ui.ddmanager){a.ui.ddmanager.dragStop(this,c)
}return a.ui.mouse.prototype._mouseUp.call(this,c)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(c){var d=!this.options.handle||!a(this.options.handle,this.element).length?true:false;
a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==c.target){d=true
}});
return d
},_createHelper:function(d){var e=this.options;
var c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d])):(e.helper=="clone"?this.element.clone().removeAttr("id"):this.element);
if(!c.parents("body").length){c.appendTo((e.appendTo=="parent"?this.element[0].parentNode:e.appendTo))
}if(c[0]!=this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))){c.css("position","absolute")
}return c
},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")
}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
}if("left" in c){this.offset.click.left=c.left+this.margins.left
}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
}if("top" in c){this.offset.click.top=c.top+this.margins.top
}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var c=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
c.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.ui.ie)){c={top:0,left:0}
}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.element.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var g=this.options;
if(g.containment=="parent"){g.containment=this.helper[0].parentNode
}if(g.containment=="document"||g.containment=="window"){this.containment=[g.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,g.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(g.containment=="document"?0:a(window).scrollLeft())+a(g.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(g.containment=="document"?0:a(window).scrollTop())+(a(g.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(g.containment)&&g.containment.constructor!=Array){var h=a(g.containment);
var e=h[0];
if(!e){return
}var f=h.offset();
var d=(a(e).css("overflow")!="hidden");
this.containment=[(parseInt(a(e).css("borderLeftWidth"),10)||0)+(parseInt(a(e).css("paddingLeft"),10)||0),(parseInt(a(e).css("borderTopWidth"),10)||0)+(parseInt(a(e).css("paddingTop"),10)||0),(d?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(a(e).css("borderLeftWidth"),10)||0)-(parseInt(a(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(d?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(a(e).css("borderTopWidth"),10)||0)-(parseInt(a(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=h
}else{if(g.containment.constructor==Array){this.containment=g.containment
}}},_convertPositionTo:function(g,j){if(!j){j=this.position
}var e=g=="absolute"?1:-1;
var f=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(c[0].tagName);
return{top:(j.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(h?0:c.scrollTop()))*e)),left:(j.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:c.scrollLeft())*e))}
},_generatePosition:function(d){var e=this.options,m=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,j=(/(html|body)/i).test(m[0].tagName);
var h=d.pageX;
var g=d.pageY;
if(this.originalPosition){var c;
if(this.containment){if(this.relative_container){var l=this.relative_container.offset();
c=[this.containment[0]+l.left,this.containment[1]+l.top,this.containment[2]+l.left,this.containment[3]+l.top]
}else{c=this.containment
}if(d.pageX-this.offset.click.left<c[0]){h=c[0]+this.offset.click.left
}if(d.pageY-this.offset.click.top<c[1]){g=c[1]+this.offset.click.top
}if(d.pageX-this.offset.click.left>c[2]){h=c[2]+this.offset.click.left
}if(d.pageY-this.offset.click.top>c[3]){g=c[3]+this.offset.click.top
}}if(e.grid){var k=e.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1]:this.originalPageY;
g=c?(!(k-this.offset.click.top<c[1]||k-this.offset.click.top>c[3])?k:(!(k-this.offset.click.top<c[1])?k-e.grid[1]:k+e.grid[1])):k;
var f=e.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/e.grid[0])*e.grid[0]:this.originalPageX;
h=c?(!(f-this.offset.click.left<c[0]||f-this.offset.click.left>c[2])?f:(!(f-this.offset.click.left<c[0])?f-e.grid[0]:f+e.grid[0])):f
}}return{top:(g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(j?0:m.scrollTop())))),left:(h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():j?0:m.scrollLeft())))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(c,d,e){e=e||this._uiHash();
a.ui.plugin.call(this,c,[d,e]);
if(c=="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return a.Widget.prototype._trigger.call(this,c,d,e)
},plugins:{},_uiHash:function(c){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
a.ui.plugin.add("draggable","connectToSortable",{start:function(d,f){var e=a(this).data("draggable"),g=e.options,c=a.extend({},f,{item:e.element});
e.sortables=[];
a(g.connectToSortable).each(function(){var h=a.data(this,"sortable");
if(h&&!h.options.disabled){e.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();
h._trigger("activate",d,c)
}})
},stop:function(d,f){var e=a(this).data("draggable"),c=a.extend({},f,{item:e.element});
a.each(e.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
e.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=true
}this.instance._mouseStop(d);
this.instance.options.helper=this.instance.options._helper;
if(e.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",d,c)
}})
},drag:function(d,g){var f=a(this).data("draggable"),c=this;
var e=function(k){var q=this.offset.click.top,p=this.offset.click.left;
var h=this.positionAbs.top,m=this.positionAbs.left;
var l=k.height,n=k.width;
var r=k.top,j=k.left;
return a.ui.isOver(h+q,m+p,r,j,l,n)
};
a.each(f.sortables,function(j){var h=false;
var k=this;
this.instance.positionAbs=f.positionAbs;
this.instance.helperProportions=f.helperProportions;
this.instance.offset.click=f.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){h=true;
a.each(f.sortables,function(){this.instance.positionAbs=f.positionAbs;
this.instance.helperProportions=f.helperProportions;
this.instance.offset.click=f.offset.click;
if(this!=k&&this.instance._intersectsWith(this.instance.containerCache)&&a.ui.contains(k.instance.element[0],this.instance.element[0])){h=false
}return h
})
}if(h){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=a(c).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return g.helper[0]
};
d.target=this.instance.currentItem[0];
this.instance._mouseCapture(d,true);
this.instance._mouseStart(d,true,true);
this.instance.offset.click.top=f.offset.click.top;
this.instance.offset.click.left=f.offset.click.left;
this.instance.offset.parent.left-=f.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=f.offset.parent.top-this.instance.offset.parent.top;
f._trigger("toSortable",d);
f.dropped=this.instance.element;
f.currentItem=f.element;
this.instance.fromOutside=f
}if(this.instance.currentItem){this.instance._mouseDrag(d)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",d,this.instance._uiHash(this.instance));
this.instance._mouseStop(d,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}f._trigger("fromSortable",d);
f.dropped=false
}}})
}});
a.ui.plugin.add("draggable","cursor",{start:function(d,e){var c=a("body"),f=a(this).data("draggable").options;
if(c.css("cursor")){f._cursor=c.css("cursor")
}c.css("cursor",f.cursor)
},stop:function(c,d){var e=a(this).data("draggable").options;
if(e._cursor){a("body").css("cursor",e._cursor)
}}});
a.ui.plugin.add("draggable","opacity",{start:function(d,e){var c=a(e.helper),f=a(this).data("draggable").options;
if(c.css("opacity")){f._opacity=c.css("opacity")
}c.css("opacity",f.opacity)
},stop:function(c,d){var e=a(this).data("draggable").options;
if(e._opacity){a(d.helper).css("opacity",e._opacity)
}}});
a.ui.plugin.add("draggable","scroll",{start:function(d,e){var c=a(this).data("draggable");
if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){c.overflowOffset=c.scrollParent.offset()
}},drag:function(e,f){var d=a(this).data("draggable"),g=d.options,c=false;
if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!g.axis||g.axis!="x"){if((d.overflowOffset.top+d.scrollParent[0].offsetHeight)-e.pageY<g.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop+g.scrollSpeed
}else{if(e.pageY-d.overflowOffset.top<g.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop-g.scrollSpeed
}}}if(!g.axis||g.axis!="y"){if((d.overflowOffset.left+d.scrollParent[0].offsetWidth)-e.pageX<g.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft+g.scrollSpeed
}else{if(e.pageX-d.overflowOffset.left<g.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft-g.scrollSpeed
}}}}else{if(!g.axis||g.axis!="x"){if(e.pageY-a(document).scrollTop()<g.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed)
}else{if(a(window).height()-(e.pageY-a(document).scrollTop())<g.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)
}}}if(!g.axis||g.axis!="y"){if(e.pageX-a(document).scrollLeft()<g.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed)
}else{if(a(window).width()-(e.pageX-a(document).scrollLeft())<g.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed)
}}}}if(c!==false&&a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(d,e)
}}});
a.ui.plugin.add("draggable","snap",{start:function(d,e){var c=a(this).data("draggable"),f=c.options;
c.snapElements=[];
a(f.snap.constructor!=String?(f.snap.items||":data(draggable)"):f.snap).each(function(){var h=a(this);
var g=h.offset();
if(this!=c.element[0]){c.snapElements.push({item:this,width:h.outerWidth(),height:h.outerHeight(),top:g.top,left:g.left})
}})
},drag:function(u,p){var g=a(this).data("draggable"),q=g.options;
var y=q.snapTolerance;
var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;
for(var v=g.snapElements.length-1;
v>=0;
v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;
if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))
}g.snapElements[v].snapping=false;
continue
}if(q.snapMode!="inner"){var c=Math.abs(m-e)<=y;
var z=Math.abs(A-f)<=y;
var j=Math.abs(s-w)<=y;
var k=Math.abs(n-x)<=y;
if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top
}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top
}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left
}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left
}}var h=(c||z||j||k);
if(q.snapMode!="outer"){var c=Math.abs(m-f)<=y;
var z=Math.abs(A-e)<=y;
var j=Math.abs(s-x)<=y;
var k=Math.abs(n-w)<=y;
if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top
}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top
}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left
}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left
}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))
}g.snapElements[v].snapping=(c||z||j||k||h)
}}});
a.ui.plugin.add("draggable","stack",{start:function(d,e){var g=a(this).data("draggable").options;
var f=a.makeArray(a(g.stack)).sort(function(j,h){return(parseInt(a(j).css("zIndex"),10)||0)-(parseInt(a(h).css("zIndex"),10)||0)
});
if(!f.length){return
}var c=parseInt(f[0].style.zIndex)||0;
a(f).each(function(h){this.style.zIndex=c+h
});
this[0].style.zIndex=c+f.length
}});
a.ui.plugin.add("draggable","zIndex",{start:function(d,e){var c=a(e.helper),f=a(this).data("draggable").options;
if(c.css("zIndex")){f._zIndex=c.css("zIndex")
}c.css("zIndex",f.zIndex)
},stop:function(c,d){var e=a(this).data("draggable").options;
if(e._zIndex){a(d.helper).css("zIndex",e._zIndex)
}}})
})(jQuery);
(function(a,b){a.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,c=d.accept;
this.isover=0;
this.isout=1;
this.accept=a.isFunction(c)?c:function(e){return e.is(c)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
a.ui.ddmanager.droppables[d.scope]=a.ui.ddmanager.droppables[d.scope]||[];
a.ui.ddmanager.droppables[d.scope].push(this);
(d.addClasses&&this.element.addClass("ui-droppable"))
},_destroy:function(){var c=a.ui.ddmanager.droppables[this.options.scope];
for(var d=0;
d<c.length;
d++){if(c[d]==this){c.splice(d,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(c,d){if(c=="accept"){this.accept=a.isFunction(d)?d:function(e){return e.is(d)
}
}a.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(d){var c=a.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}(c&&this._trigger("activate",d,this.ui(c)))
},_deactivate:function(d){var c=a.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}(c&&this._trigger("deactivate",d,this.ui(c)))
},_over:function(d){var c=a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",d,this.ui(c))
}},_out:function(d){var c=a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",d,this.ui(c))
}},_drop:function(d,e){var c=e||a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return false
}var f=false;
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=a.data(this,"droppable");
if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],(c.currentItem||c.element))&&a.ui.intersect(c,a.extend(g,{offset:g.element.offset()}),g.options.tolerance)){f=true;
return false
}});
if(f){return false
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",d,this.ui(c));
return this.element
}return false
},ui:function(d){return{draggable:(d.currentItem||d.element),helper:d.helper,position:d.position,offset:d.positionAbs}
}});
a.ui.intersect=function(s,k,p){if(!k.offset){return false
}var e=(s.positionAbs||s.position.absolute).left,d=e+s.helperProportions.width,o=(s.positionAbs||s.position.absolute).top,n=o+s.helperProportions.height;
var g=k.offset.left,c=g+k.proportions.width,q=k.offset.top,m=q+k.proportions.height;
switch(p){case"fit":return(g<=e&&d<=c&&q<=o&&n<=m);
break;
case"intersect":return(g<e+(s.helperProportions.width/2)&&d-(s.helperProportions.width/2)<c&&q<o+(s.helperProportions.height/2)&&n-(s.helperProportions.height/2)<m);
break;
case"pointer":var h=((s.positionAbs||s.position.absolute).left+(s.clickOffset||s.offset.click).left),j=((s.positionAbs||s.position.absolute).top+(s.clickOffset||s.offset.click).top),f=a.ui.isOver(j,h,q,g,k.proportions.height,k.proportions.width);
return f;
break;
case"touch":return((o>=q&&o<=m)||(n>=q&&n<=m)||(o<q&&n>m))&&((e>=g&&e<=c)||(d>=g&&d<=c)||(e<g&&d>c));
break;
default:return false;
break
}};
a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(f,h){var c=a.ui.ddmanager.droppables[f.options.scope]||[];
var g=h?h.type:null;
var k=(f.currentItem||f.element).find(":data(droppable)").andSelf();
droppablesLoop:for(var e=0;
e<c.length;
e++){if(c[e].options.disabled||(f&&!c[e].accept.call(c[e].element[0],(f.currentItem||f.element)))){continue
}for(var d=0;
d<k.length;
d++){if(k[d]==c[e].element[0]){c[e].proportions.height=0;
continue droppablesLoop
}}c[e].visible=c[e].element.css("display")!="none";
if(!c[e].visible){continue
}if(g=="mousedown"){c[e]._activate.call(c[e],h)
}c[e].offset=c[e].element.offset();
c[e].proportions={width:c[e].element[0].offsetWidth,height:c[e].element[0].offsetHeight}
}},drop:function(c,d){var e=false;
a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&a.ui.intersect(c,this,this.options.tolerance)){e=this._drop.call(this,d)||e
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=1;
this.isover=0;
this._deactivate.call(this,d)
}});
return e
},dragStart:function(c,d){c.element.parentsUntil("body").bind("scroll.droppable",function(){if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)
}})
},drag:function(c,d){if(c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)
}a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var g=a.ui.intersect(c,this,this.options.tolerance);
var j=!g&&this.isover==1?"isout":(g&&this.isover==0?"isover":null);
if(!j){return
}var h;
if(this.options.greedy){var f=this.options.scope;
var e=this.element.parents(":data(droppable)").filter(function(){return a.data(this,"droppable").options.scope===f
});
if(e.length){h=a.data(e[0],"droppable");
h.greedyChild=(j=="isover"?1:0)
}}if(h&&j=="isover"){h.isover=0;
h.isout=1;
h._out.call(h,d)
}this[j]=1;
this[j=="isout"?"isover":"isout"]=0;
this[j=="isover"?"_over":"_out"].call(this,d);
if(h&&j=="isout"){h.isout=0;
h.isover=1;
h._over.call(h,d)
}})
},dragStop:function(c,d){c.element.parentsUntil("body").unbind("scroll.droppable");
if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)
}}}
})(jQuery);
(jQuery.effects||(function(b,d){var a=b.uiBackCompat!==false,c="ui-effects-";
b.effects={effect:{}};
/*!
     * jQuery Color Animations v2.0.0
     * http://jquery.com/
     *
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Mon Aug 13 13:41:02 2012 -0500
     */
(function(u,h){var p="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),m=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(v){return[v[1],v[2],v[3],v[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(v){return[v[1]*2.55,v[2]*2.55,v[3]*2.55,v[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(v){return[parseInt(v[1],16),parseInt(v[2],16),parseInt(v[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(v){return[parseInt(v[1]+v[1],16),parseInt(v[2]+v[2],16),parseInt(v[3]+v[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(v){return[v[1],v[2]/100,v[3]/100,v[4]]
}}],j=u.Color=function(w,x,v,y){return new u.Color.fn.parse(w,x,v,y)
},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},s={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},r=j.support={},f=u("<p>")[0],e,q=u.each;
f.style.cssText="background-color:rgba(1,1,1,.5)";
r.rgba=f.style.backgroundColor.indexOf("rgba")>-1;
q(o,function(v,w){w.cache="_"+v;
w.props.alpha={idx:3,type:"percent",def:1}
});
function n(w,y,x){var v=s[y.type]||{};
if(w==null){return(x||!y.def)?null:y.def
}w=v.floor?~~w:parseFloat(w);
if(isNaN(w)){return y.def
}if(v.mod){return(w+v.mod)%v.mod
}return 0>w?0:v.max<w?v.max:w
}function k(v){var x=j(),w=x._rgba=[];
v=v.toLowerCase();
q(l,function(C,D){var A,B=D.re.exec(v),z=B&&D.parse(B),y=D.space||"rgba";
if(z){A=x[y](z);
x[o[y].cache]=A[o[y].cache];
w=x._rgba=A._rgba;
return false
}});
if(w.length){if(w.join()==="0,0,0,0"){u.extend(w,e.transparent)
}return x
}return e[v]
}j.fn=u.extend(j.prototype,{parse:function(B,z,v,A){if(B===h){this._rgba=[null,null,null,null];
return this
}if(B.jquery||B.nodeType){B=u(B).css(z);
z=h
}var y=this,x=u.type(B),w=this._rgba=[];
if(z!==h){B=[B,z,v,A];
x="array"
}if(x==="string"){return this.parse(k(B)||e._default)
}if(x==="array"){q(o.rgba.props,function(C,D){w[D.idx]=n(B[D.idx],D)
});
return this
}if(x==="object"){if(B instanceof j){q(o,function(C,D){if(B[D.cache]){y[D.cache]=B[D.cache].slice()
}})
}else{q(o,function(D,E){var C=E.cache;
q(E.props,function(F,G){if(!y[C]&&E.to){if(F==="alpha"||B[F]==null){return
}y[C]=E.to(y._rgba)
}y[C][G.idx]=n(B[F],G,true)
});
if(y[C]&&b.inArray(null,y[C].slice(0,3))<0){y[C][3]=1;
if(E.from){y._rgba=E.from(y[C])
}}})
}return this
}},is:function(x){var v=j(x),y=true,w=this;
q(o,function(z,B){var C,A=v[B.cache];
if(A){C=w[B.cache]||B.to&&B.to(w._rgba)||[];
q(B.props,function(D,E){if(A[E.idx]!=null){y=(A[E.idx]===C[E.idx]);
return y
}})
}return y
});
return y
},_space:function(){var v=[],w=this;
q(o,function(x,y){if(w[y.cache]){v.push(x)
}});
return v.pop()
},transition:function(w,C){var x=j(w),y=x._space(),z=o[y],A=this.alpha()===0?j("transparent"):this,B=A[z.cache]||z.to(A._rgba),v=B.slice();
x=x[z.cache];
q(z.props,function(G,I){var F=I.idx,E=B[F],D=x[F],H=s[I.type]||{};
if(D===null){return
}if(E===null){v[F]=D
}else{if(H.mod){if(D-E>H.mod/2){E+=H.mod
}else{if(E-D>H.mod/2){E-=H.mod
}}}v[F]=n((D-E)*C+E,I)
}});
return this[y](v)
},blend:function(y){if(this._rgba[3]===1){return this
}var x=this._rgba.slice(),w=x.pop(),v=j(y)._rgba;
return j(u.map(x,function(z,A){return(1-w)*v[A]+w*z
}))
},toRgbaString:function(){var w="rgba(",v=u.map(this._rgba,function(x,y){return x==null?(y>2?1:0):x
});
if(v[3]===1){v.pop();
w="rgb("
}return w+v.join()+")"
},toHslaString:function(){var w="hsla(",v=u.map(this.hsla(),function(x,y){if(x==null){x=y>2?1:0
}if(y&&y<3){x=Math.round(x*100)+"%"
}return x
});
if(v[3]===1){v.pop();
w="hsl("
}return w+v.join()+")"
},toHexString:function(v){var w=this._rgba.slice(),x=w.pop();
if(v){w.push(~~(x*255))
}return"#"+u.map(w,function(y){y=(y||0).toString(16);
return y.length===1?"0"+y:y
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
j.fn.parse.prototype=j.fn;
function g(x,w,v){v=(v+1)%1;
if(v*6<1){return x+(w-x)*v*6
}if(v*2<1){return w
}if(v*3<2){return x+(w-x)*((2/3)-v)*6
}return x
}o.hsla.to=function(x){if(x[0]==null||x[1]==null||x[2]==null){return[null,null,null,x[3]]
}var v=x[0]/255,A=x[1]/255,B=x[2]/255,D=x[3],C=Math.max(v,A,B),y=Math.min(v,A,B),E=C-y,F=C+y,w=F*0.5,z,G;
if(y===C){z=0
}else{if(v===C){z=(60*(A-B)/E)+360
}else{if(A===C){z=(60*(B-v)/E)+120
}else{z=(60*(v-A)/E)+240
}}}if(w===0||w===1){G=w
}else{if(w<=0.5){G=E/F
}else{G=E/(2-F)
}}return[Math.round(z)%360,G,w,D==null?1:D]
};
o.hsla.from=function(z){if(z[0]==null||z[1]==null||z[2]==null){return[null,null,null,z[3]]
}var y=z[0]/360,x=z[1],w=z[2],v=z[3],A=w<=0.5?w*(1+x):w+x-w*x,B=2*w-A;
return[Math.round(g(B,A,y+(1/3))*255),Math.round(g(B,A,y)*255),Math.round(g(B,A,y-(1/3))*255),v]
};
q(o,function(w,y){var x=y.props,v=y.cache,A=y.to,z=y.from;
j.fn[w]=function(F){if(A&&!this[v]){this[v]=A(this._rgba)
}if(F===h){return this[v].slice()
}var C,E=u.type(F),B=(E==="array"||E==="object")?F:arguments,D=this[v].slice();
q(x,function(G,I){var H=B[E==="object"?G:I.idx];
if(H==null){H=D[I.idx]
}D[I.idx]=n(H,I)
});
if(z){C=j(z(D));
C[v]=D;
return C
}else{return j(D)
}};
q(x,function(B,C){if(j.fn[B]){return
}j.fn[B]=function(G){var I=u.type(G),F=(B==="alpha"?(this._hsla?"hsla":"rgba"):w),E=this[F](),H=E[C.idx],D;
if(I==="undefined"){return H
}if(I==="function"){G=G.call(this,H);
I=u.type(G)
}if(G==null&&C.empty){return this
}if(I==="string"){D=m.exec(G);
if(D){G=H+parseFloat(D[2])*(D[1]==="+"?1:-1)
}}E[C.idx]=G;
return this[F](E)
}
})
});
q(p,function(v,w){u.cssHooks[w]={set:function(B,C){var y,A,x="";
if(u.type(C)!=="string"||(y=k(C))){C=j(y||C);
if(!r.rgba&&C._rgba[3]!==1){A=w==="backgroundColor"?B.parentNode:B;
while((x===""||x==="transparent")&&A&&A.style){try{x=u.css(A,"backgroundColor");
A=A.parentNode
}catch(D){}}C=C.blend(x&&x!=="transparent"?x:"_default")
}C=C.toRgbaString()
}try{B.style[w]=C
}catch(z){}}};
u.fx.step[w]=function(x){if(!x.colorInit){x.start=j(x.elem,w);
x.end=j(x.end);
x.colorInit=true
}u.cssHooks[w].set(x.elem,x.start.transition(x.end,x.pos))
}
});
u.cssHooks.borderColor={expand:function(w){var v={};
q(["Top","Right","Bottom","Left"],function(y,x){v["border"+x+"Color"]=w
});
return v
}};
e=u.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
b.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(j,k){b.fx.step[k]=function(l){if(l.end!=="none"&&!l.setAttr||l.pos===1&&!l.setAttr){jQuery.style(l.elem,k,l.end);
l.setAttr=true
}}
});
function h(){var l=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,m={},k,j;
if(l&&l.length&&l[0]&&l[l[0]]){j=l.length;
while(j--){k=l[j];
if(typeof l[k]==="string"){m[b.camelCase(k)]=l[k]
}}}else{for(k in l){if(typeof l[k]==="string"){m[k]=l[k]
}}}return m
}function e(j,l){var n={},k,m;
for(k in l){m=l[k];
if(j[k]!==m){if(!g[k]){if(b.fx.step[k]||!isNaN(parseFloat(m))){n[k]=m
}}}}return n
}b.effects.animateClass=function(j,k,n,m){var l=b.speed(k,n,m);
return this.queue(function(){var q=b(this),o=q.attr("class")||"",p,r=l.children?q.find("*").andSelf():q;
r=r.map(function(){var s=b(this);
return{el:s,start:h.call(this)}
});
p=function(){b.each(f,function(s,u){if(j[u]){q[u+"Class"](j[u])
}})
};
p();
r=r.map(function(){this.end=h.call(this.el[0]);
this.diff=e(this.start,this.end);
return this
});
q.attr("class",o);
r=r.map(function(){var v=this,s=b.Deferred(),u=jQuery.extend({},l,{queue:false,complete:function(){s.resolve(v)
}});
this.el.animate(this.diff,u);
return s.promise()
});
b.when.apply(b,r.get()).done(function(){p();
b.each(arguments,function(){var s=this.el;
b.each(this.diff,function(u){s.css(u,"")
})
});
l.complete.call(q[0])
})
})
};
b.fn.extend({_addClass:b.fn.addClass,addClass:function(k,j,m,l){return j?b.effects.animateClass.call(this,{add:k},j,m,l):this._addClass(k)
},_removeClass:b.fn.removeClass,removeClass:function(k,j,m,l){return j?b.effects.animateClass.call(this,{remove:k},j,m,l):this._removeClass(k)
},_toggleClass:b.fn.toggleClass,toggleClass:function(l,k,j,n,m){if(typeof k==="boolean"||k===d){if(!j){return this._toggleClass(l,k)
}else{return b.effects.animateClass.call(this,(k?{add:l}:{remove:l}),j,n,m)
}}else{return b.effects.animateClass.call(this,{toggle:l},k,j,n)
}},switchClass:function(j,l,k,n,m){return b.effects.animateClass.call(this,{add:l,remove:j},k,n,m)
}})
})();
(function(){b.extend(b.effects,{version:"1.9.2",save:function(h,j){for(var g=0;
g<j.length;
g++){if(j[g]!==null){h.data(c+j[g],h[0].style[j[g]])
}}},restore:function(h,k){var j,g;
for(g=0;
g<k.length;
g++){if(k[g]!==null){j=h.data(c+k[g]);
if(j===d){j=""
}h.css(k[g],j)
}}},setMode:function(g,h){if(h==="toggle"){h=g.is(":hidden")?"show":"hide"
}return h
},getBaseline:function(h,j){var k,g;
switch(h[0]){case"top":k=0;
break;
case"middle":k=0.5;
break;
case"bottom":k=1;
break;
default:k=h[0]/j.height
}switch(h[1]){case"left":g=0;
break;
case"center":g=0.5;
break;
case"right":g=1;
break;
default:g=h[1]/j.width
}return{x:g,y:k}
},createWrapper:function(h){if(h.parent().is(".ui-effects-wrapper")){return h.parent()
}var j={width:h.outerWidth(true),height:h.outerHeight(true),"float":h.css("float")},m=b("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),g={width:h.width(),height:h.height()},l=document.activeElement;
try{l.id
}catch(k){l=document.body
}h.wrap(m);
if(h[0]===l||b.contains(h[0],l)){b(l).focus()
}m=h.parent();
if(h.css("position")==="static"){m.css({position:"relative"});
h.css({position:"relative"})
}else{b.extend(j,{position:h.css("position"),zIndex:h.css("z-index")});
b.each(["top","left","bottom","right"],function(n,o){j[o]=h.css(o);
if(isNaN(parseInt(j[o],10))){j[o]="auto"
}});
h.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}h.css(g);
return m.css(j).show()
},removeWrapper:function(g){var h=document.activeElement;
if(g.parent().is(".ui-effects-wrapper")){g.parent().replaceWith(g);
if(g[0]===h||b.contains(g[0],h)){b(h).focus()
}}return g
},setTransition:function(h,k,g,j){j=j||{};
b.each(k,function(m,l){var n=h.cssUnit(l);
if(n[0]>0){j[l]=n[0]*g+n[1]
}});
return j
}});
function e(h,g,j,k){if(b.isPlainObject(h)){g=h;
h=h.effect
}h={effect:h};
if(g==null){g={}
}if(b.isFunction(g)){k=g;
j=null;
g={}
}if(typeof g==="number"||b.fx.speeds[g]){k=j;
j=g;
g={}
}if(b.isFunction(j)){k=j;
j=null
}if(g){b.extend(h,g)
}j=j||g.duration;
h.duration=b.fx.off?0:typeof j==="number"?j:j in b.fx.speeds?b.fx.speeds[j]:b.fx.speeds._default;
h.complete=k||g.complete;
return h
}function f(g){if(!g||typeof g==="number"||b.fx.speeds[g]){return true
}if(typeof g==="string"&&!b.effects.effect[g]){if(a&&b.effects[g]){return false
}return true
}return false
}b.fn.extend({effect:function(){var j=e.apply(this,arguments),m=j.mode,g=j.queue,h=b.effects.effect[j.effect],k=!h&&a&&b.effects[j.effect];
if(b.fx.off||!(h||k)){if(m){return this[m](j.duration,j.complete)
}else{return this.each(function(){if(j.complete){j.complete.call(this)
}})
}}function l(p){var q=b(this),o=j.complete,r=j.mode;
function n(){if(b.isFunction(o)){o.call(q[0])
}if(b.isFunction(p)){p()
}}if(q.is(":hidden")?r==="hide":r==="show"){n()
}else{h.call(q[0],j,n)
}}if(h){return g===false?this.each(l):this.queue(g||"fx",l)
}else{return k.call(this,{options:j,duration:j.duration,callback:j.complete,mode:j.mode})
}},_show:b.fn.show,show:function(h){if(f(h)){return this._show.apply(this,arguments)
}else{var g=e.apply(this,arguments);
g.mode="show";
return this.effect.call(this,g)
}},_hide:b.fn.hide,hide:function(h){if(f(h)){return this._hide.apply(this,arguments)
}else{var g=e.apply(this,arguments);
g.mode="hide";
return this.effect.call(this,g)
}},__toggle:b.fn.toggle,toggle:function(h){if(f(h)||typeof h==="boolean"||b.isFunction(h)){return this.__toggle.apply(this,arguments)
}else{var g=e.apply(this,arguments);
g.mode="toggle";
return this.effect.call(this,g)
}},cssUnit:function(g){var h=this.css(g),j=[];
b.each(["em","px","%","pt"],function(k,l){if(h.indexOf(l)>0){j=[parseFloat(h),l]
}});
return j
}})
})();
(function(){var e={};
b.each(["Quad","Cubic","Quart","Quint","Expo"],function(g,f){e[f]=function(h){return Math.pow(h,g+2)
}
});
b.extend(e,{Sine:function(f){return 1-Math.cos(f*Math.PI/2)
},Circ:function(f){return 1-Math.sqrt(1-f*f)
},Elastic:function(f){return f===0||f===1?f:-Math.pow(2,8*(f-1))*Math.sin(((f-1)*80-7.5)*Math.PI/15)
},Back:function(f){return f*f*(3*f-2)
},Bounce:function(h){var f,g=4;
while(h<((f=Math.pow(2,--g))-1)/11){}return 1/Math.pow(4,3-g)-7.5625*Math.pow((f*3-2)/22-h,2)
}});
b.each(e,function(g,f){b.easing["easeIn"+g]=f;
b.easing["easeOut"+g]=function(h){return 1-f(1-h)
};
b.easing["easeInOut"+g]=function(h){return h<0.5?f(h*2)/2:1-f(h*-2+2)/2
}
})
})()
})(jQuery));
(function(b,d){var a=/up|down|vertical/,c=/up|left|vertical|horizontal/;
b.effects.effect.blind=function(g,n){var h=b(this),r=["position","top","bottom","left","right","height","width"],p=b.effects.setMode(h,g.mode||"hide"),s=g.direction||"up",k=a.test(s),j=k?"height":"width",q=k?"top":"left",v=c.test(s),m={},u=p==="show",f,e,l;
if(h.parent().is(".ui-effects-wrapper")){b.effects.save(h.parent(),r)
}else{b.effects.save(h,r)
}h.show();
f=b.effects.createWrapper(h).css({overflow:"hidden"});
e=f[j]();
l=parseFloat(f.css(q))||0;
m[j]=u?e:0;
if(!v){h.css(k?"bottom":"right",0).css(k?"top":"left","auto").css({position:"absolute"});
m[q]=u?l:e+l
}if(u){f.css(j,0);
if(!v){f.css(q,l+e)
}}f.animate(m,{duration:g.duration,easing:g.easing,queue:false,complete:function(){if(p==="hide"){h.hide()
}b.effects.restore(h,r);
b.effects.removeWrapper(h);
n()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.bounce=function(m,l){var c=a(this),d=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(c,m.mode||"effect"),j=k==="hide",w=k==="show",x=m.direction||"up",e=m.distance,h=m.times||5,y=h*2+(w||j?1:0),v=m.duration/y,p=m.easing,f=(x==="up"||x==="down")?"top":"left",n=(x==="up"||x==="left"),u,g,s,q=c.queue(),r=q.length;
if(w||j){d.push("opacity")
}a.effects.save(c,d);
c.show();
a.effects.createWrapper(c);
if(!e){e=c[f==="top"?"outerHeight":"outerWidth"]()/3
}if(w){s={opacity:1};
s[f]=0;
c.css("opacity",0).css(f,n?-e*2:e*2).animate(s,v,p)
}if(j){e=e/Math.pow(2,h-1)
}s={};
s[f]=0;
for(u=0;
u<h;
u++){g={};
g[f]=(n?"-=":"+=")+e;
c.animate(g,v,p).animate(s,v,p);
e=j?e*2:e/2
}if(j){g={opacity:0};
g[f]=(n?"-=":"+=")+e;
c.animate(g,v,p)
}c.queue(function(){if(j){c.hide()
}a.effects.restore(c,d);
a.effects.removeWrapper(c);
l()
});
if(r>1){q.splice.apply(q,[1,0].concat(q.splice(r,y+1)))
}c.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.clip=function(f,j){var g=a(this),n=["position","top","bottom","left","right","height","width"],m=a.effects.setMode(g,f.mode||"hide"),q=m==="show",p=f.direction||"vertical",l=p==="vertical",r=l?"height":"width",k=l?"top":"left",h={},d,e,c;
a.effects.save(g,n);
g.show();
d=a.effects.createWrapper(g).css({overflow:"hidden"});
e=(g[0].tagName==="IMG")?d:g;
c=e[r]();
if(q){e.css(r,0);
e.css(k,c/2)
}h[r]=q?c:0;
h[k]=q?0:c/2;
e.animate(h,{queue:false,duration:f.duration,easing:f.easing,complete:function(){if(!q){g.hide()
}a.effects.restore(g,n);
a.effects.removeWrapper(g);
j()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.drop=function(d,h){var e=a(this),k=["position","top","bottom","left","right","opacity","height","width"],j=a.effects.setMode(e,d.mode||"hide"),m=j==="show",l=d.direction||"left",f=(l==="up"||l==="down")?"top":"left",n=(l==="up"||l==="left")?"pos":"neg",g={opacity:m?1:0},c;
a.effects.save(e,k);
e.show();
a.effects.createWrapper(e);
c=d.distance||e[f==="top"?"outerHeight":"outerWidth"](true)/2;
if(m){e.css("opacity",0).css(f,n==="pos"?-c:c)
}g[f]=(m?(n==="pos"?"+=":"-="):(n==="pos"?"-=":"+="))+c;
e.animate(g,{queue:false,duration:d.duration,easing:d.easing,complete:function(){if(j==="hide"){e.hide()
}a.effects.restore(e,k);
a.effects.removeWrapper(e);
h()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.explode=function(s,r){var k=s.pieces?Math.round(Math.sqrt(s.pieces)):3,d=k,c=a(this),m=a.effects.setMode(c,s.mode||"hide"),x=m==="show",g=c.show().css("visibility","hidden").offset(),u=Math.ceil(c.outerWidth()/d),q=Math.ceil(c.outerHeight()/k),h=[],w,v,e,p,n,l;
function y(){h.push(this);
if(h.length===k*d){f()
}}for(w=0;
w<k;
w++){p=g.top+w*q;
l=w-(k-1)/2;
for(v=0;
v<d;
v++){e=g.left+v*u;
n=v-(d-1)/2;
c.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-v*u,top:-w*q}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:u,height:q,left:e+(x?n*u:0),top:p+(x?l*q:0),opacity:x?0:1}).animate({left:e+(x?0:n*u),top:p+(x?0:l*q),opacity:x?1:0},s.duration||500,s.easing,y)
}}function f(){c.css({visibility:"visible"});
a(h).remove();
if(!x){c.hide()
}r()
}}
})(jQuery);
(function(a,b){a.effects.effect.fade=function(f,c){var d=a(this),e=a.effects.setMode(d,f.mode||"toggle");
d.animate({opacity:e},{queue:false,duration:f.duration,easing:f.easing,complete:c})
}
})(jQuery);
(function(a,b){a.effects.effect.fold=function(e,j){var f=a(this),p=["position","top","bottom","left","right","height","width"],l=a.effects.setMode(f,e.mode||"hide"),s=l==="show",m=l==="hide",v=e.size||15,n=/([0-9]+)%/.exec(v),u=!!e.horizFirst,k=s!==u,g=k?["width","height"]:["height","width"],h=e.duration/2,d,c,r={},q={};
a.effects.save(f,p);
f.show();
d=a.effects.createWrapper(f).css({overflow:"hidden"});
c=k?[d.width(),d.height()]:[d.height(),d.width()];
if(n){v=parseInt(n[1],10)/100*c[m?0:1]
}if(s){d.css(u?{height:0,width:v}:{height:v,width:0})
}r[g[0]]=s?c[0]:v;
q[g[1]]=s?c[1]:0;
d.animate(r,h,e.easing).animate(q,h,e.easing,function(){if(m){f.hide()
}a.effects.restore(f,p);
a.effects.removeWrapper(f);
j()
})
}
})(jQuery);
(function(a,b){a.effects.effect.highlight=function(h,c){var e=a(this),d=["backgroundImage","backgroundColor","opacity"],g=a.effects.setMode(e,h.mode||"show"),f={backgroundColor:e.css("backgroundColor")};
if(g==="hide"){f.opacity=0
}a.effects.save(e,d);
e.show().css({backgroundImage:"none",backgroundColor:h.color||"#ffff99"}).animate(f,{queue:false,duration:h.duration,easing:h.easing,complete:function(){if(g==="hide"){e.hide()
}a.effects.restore(e,d);
c()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.pulsate=function(c,g){var e=a(this),k=a.effects.setMode(e,c.mode||"show"),p=k==="show",l=k==="hide",q=(p||k==="hide"),m=((c.times||5)*2)+(q?1:0),f=c.duration/m,n=0,j=e.queue(),d=j.length,h;
if(p||!e.is(":visible")){e.css("opacity",0).show();
n=1
}for(h=1;
h<m;
h++){e.animate({opacity:n},f,c.easing);
n=1-n
}e.animate({opacity:n},f,c.easing);
e.queue(function(){if(l){e.hide()
}g()
});
if(d>1){j.splice.apply(j,[1,0].concat(j.splice(d,m+1)))
}e.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.puff=function(k,c){var h=a(this),j=a.effects.setMode(h,k.mode||"hide"),f=j==="hide",g=parseInt(k.percent,10)||150,e=g/100,d={height:h.height(),width:h.width(),outerHeight:h.outerHeight(),outerWidth:h.outerWidth()};
a.extend(k,{effect:"scale",queue:false,fade:true,mode:j,complete:c,percent:f?g:100,from:f?d:{height:d.height*e,width:d.width*e,outerHeight:d.outerHeight*e,outerWidth:d.outerWidth*e}});
h.effect(k)
};
a.effects.effect.scale=function(c,f){var d=a(this),m=a.extend(true,{},c),g=a.effects.setMode(d,c.mode||"effect"),h=parseInt(c.percent,10)||(parseInt(c.percent,10)===0?0:(g==="hide"?0:100)),k=c.direction||"both",l=c.origin,e={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},j={y:k!=="horizontal"?(h/100):1,x:k!=="vertical"?(h/100):1};
m.effect="size";
m.queue=false;
m.complete=f;
if(g!=="effect"){m.origin=l||["middle","center"];
m.restore=true
}m.from=c.from||(g==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:e);
m.to={height:e.height*j.y,width:e.width*j.x,outerHeight:e.outerHeight*j.y,outerWidth:e.outerWidth*j.x};
if(m.fade){if(g==="show"){m.from.opacity=0;
m.to.opacity=1
}if(g==="hide"){m.from.opacity=1;
m.to.opacity=0
}}d.effect(m)
};
a.effects.effect.size=function(m,l){var r,j,k,c=a(this),q=["position","top","bottom","left","right","width","height","overflow","opacity"],p=["position","top","bottom","left","right","overflow","opacity"],n=["width","height","overflow"],g=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],h=a.effects.setMode(c,m.mode||"effect"),s=m.restore||h!=="effect",x=m.scale||"both",v=m.origin||["middle","center"],w=c.css("position"),e=s?q:p,f={height:0,width:0,outerHeight:0,outerWidth:0};
if(h==="show"){c.show()
}r={height:c.height(),width:c.width(),outerHeight:c.outerHeight(),outerWidth:c.outerWidth()};
if(m.mode==="toggle"&&h==="show"){c.from=m.to||f;
c.to=m.from||r
}else{c.from=m.from||(h==="show"?f:r);
c.to=m.to||(h==="hide"?f:r)
}k={from:{y:c.from.height/r.height,x:c.from.width/r.width},to:{y:c.to.height/r.height,x:c.to.width/r.width}};
if(x==="box"||x==="both"){if(k.from.y!==k.to.y){e=e.concat(u);
c.from=a.effects.setTransition(c,u,k.from.y,c.from);
c.to=a.effects.setTransition(c,u,k.to.y,c.to)
}if(k.from.x!==k.to.x){e=e.concat(d);
c.from=a.effects.setTransition(c,d,k.from.x,c.from);
c.to=a.effects.setTransition(c,d,k.to.x,c.to)
}}if(x==="content"||x==="both"){if(k.from.y!==k.to.y){e=e.concat(g).concat(n);
c.from=a.effects.setTransition(c,g,k.from.y,c.from);
c.to=a.effects.setTransition(c,g,k.to.y,c.to)
}}a.effects.save(c,e);
c.show();
a.effects.createWrapper(c);
c.css("overflow","hidden").css(c.from);
if(v){j=a.effects.getBaseline(v,r);
c.from.top=(r.outerHeight-c.outerHeight())*j.y;
c.from.left=(r.outerWidth-c.outerWidth())*j.x;
c.to.top=(r.outerHeight-c.to.outerHeight)*j.y;
c.to.left=(r.outerWidth-c.to.outerWidth)*j.x
}c.css(c.from);
if(x==="content"||x==="both"){u=u.concat(["marginTop","marginBottom"]).concat(g);
d=d.concat(["marginLeft","marginRight"]);
n=q.concat(u).concat(d);
c.find("*[width]").each(function(){var y=a(this),o={height:y.height(),width:y.width(),outerHeight:y.outerHeight(),outerWidth:y.outerWidth()};
if(s){a.effects.save(y,n)
}y.from={height:o.height*k.from.y,width:o.width*k.from.x,outerHeight:o.outerHeight*k.from.y,outerWidth:o.outerWidth*k.from.x};
y.to={height:o.height*k.to.y,width:o.width*k.to.x,outerHeight:o.height*k.to.y,outerWidth:o.width*k.to.x};
if(k.from.y!==k.to.y){y.from=a.effects.setTransition(y,u,k.from.y,y.from);
y.to=a.effects.setTransition(y,u,k.to.y,y.to)
}if(k.from.x!==k.to.x){y.from=a.effects.setTransition(y,d,k.from.x,y.from);
y.to=a.effects.setTransition(y,d,k.to.x,y.to)
}y.css(y.from);
y.animate(y.to,m.duration,m.easing,function(){if(s){a.effects.restore(y,n)
}})
})
}c.animate(c.to,{queue:false,duration:m.duration,easing:m.easing,complete:function(){if(c.to.opacity===0){c.css("opacity",c.from.opacity)
}if(h==="hide"){c.hide()
}a.effects.restore(c,e);
if(!s){if(w==="static"){c.css({position:"relative",top:c.to.top,left:c.to.left})
}else{a.each(["top","left"],function(o,y){c.css(y,function(A,C){var B=parseInt(C,10),z=o?c.to.left:c.to.top;
if(C==="auto"){return z+"px"
}return B+z+"px"
})
})
}}a.effects.removeWrapper(c);
l()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.shake=function(l,k){var c=a(this),d=["position","top","bottom","left","right","height","width"],j=a.effects.setMode(c,l.mode||"effect"),v=l.direction||"left",e=l.distance||20,h=l.times||3,w=h*2+1,q=Math.round(l.duration/w),g=(v==="up"||v==="down")?"top":"left",f=(v==="up"||v==="left"),u={},s={},r={},p,m=c.queue(),n=m.length;
a.effects.save(c,d);
c.show();
a.effects.createWrapper(c);
u[g]=(f?"-=":"+=")+e;
s[g]=(f?"+=":"-=")+e*2;
r[g]=(f?"-=":"+=")+e*2;
c.animate(u,q,l.easing);
for(p=1;
p<h;
p++){c.animate(s,q,l.easing).animate(r,q,l.easing)
}c.animate(s,q,l.easing).animate(u,q/2,l.easing).queue(function(){if(j==="hide"){c.hide()
}a.effects.restore(c,d);
a.effects.removeWrapper(c);
k()
});
if(n>1){m.splice.apply(m,[1,0].concat(m.splice(n,w+1)))
}c.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.slide=function(e,j){var f=a(this),l=["position","top","bottom","left","right","width","height"],k=a.effects.setMode(f,e.mode||"show"),n=k==="show",m=e.direction||"left",g=(m==="up"||m==="down")?"top":"left",d=(m==="up"||m==="left"),c,h={};
a.effects.save(f,l);
f.show();
c=e.distance||f[g==="top"?"outerHeight":"outerWidth"](true);
a.effects.createWrapper(f).css({overflow:"hidden"});
if(n){f.css(g,d?(isNaN(c)?"-"+c:-c):c)
}h[g]=(n?(d?"+=":"-="):(d?"-=":"+="))+c;
f.animate(h,{queue:false,duration:e.duration,easing:e.easing,complete:function(){if(k==="hide"){f.hide()
}a.effects.restore(f,l);
a.effects.removeWrapper(f);
j()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.transfer=function(d,h){var f=a(this),l=a(d.to),p=l.css("position")==="fixed",k=a("body"),m=p?k.scrollTop():0,n=p?k.scrollLeft():0,c=l.offset(),g={top:c.top-m,left:c.left-n,height:l.innerHeight(),width:l.innerWidth()},j=f.offset(),e=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(d.className).css({top:j.top-m,left:j.left-n,height:f.innerHeight(),width:f.innerWidth(),position:p?"fixed":"absolute"}).animate(g,d.duration,d.easing,function(){e.remove();
h()
})
}
})(jQuery);
(function(b,c){var a=false;
b.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,b.proxy(function(d){if(this.options.disabled){d.preventDefault()
}},this));
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
}this._on({"mousedown .ui-menu-item > a":function(d){d.preventDefault()
},"click .ui-state-disabled > a":function(d){d.preventDefault()
},"click .ui-menu-item:has(a)":function(d){var e=b(d.target).closest(".ui-menu-item");
if(!a&&e.not(".ui-state-disabled").length){a=true;
this.select(d);
if(e.has(".ui-menu").length){this.expand(d)
}else{if(!this.element.is(":focus")){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(d){var e=b(d.currentTarget);
e.siblings().children(".ui-state-active").removeClass("ui-state-active");
this.focus(d,e)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(f,d){var e=this.active||this.element.children(".ui-menu-item").eq(0);
if(!d){this.focus(f,e)
}},blur:function(d){this._delay(function(){if(!b.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(d)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(d){if(!b(d.target).closest(".ui-menu").length){this.collapseAll(d)
}a=false
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var d=b(this);
if(d.data("ui-menu-submenu-carat")){d.remove()
}});
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(k){var e,j,l,h,g,d=true;
function f(m){return m.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}switch(k.keyCode){case b.ui.keyCode.PAGE_UP:this.previousPage(k);
break;
case b.ui.keyCode.PAGE_DOWN:this.nextPage(k);
break;
case b.ui.keyCode.HOME:this._move("first","first",k);
break;
case b.ui.keyCode.END:this._move("last","last",k);
break;
case b.ui.keyCode.UP:this.previous(k);
break;
case b.ui.keyCode.DOWN:this.next(k);
break;
case b.ui.keyCode.LEFT:this.collapse(k);
break;
case b.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(k)
}break;
case b.ui.keyCode.ENTER:case b.ui.keyCode.SPACE:this._activate(k);
break;
case b.ui.keyCode.ESCAPE:this.collapse(k);
break;
default:d=false;
j=this.previousFilter||"";
l=String.fromCharCode(k.keyCode);
h=false;
clearTimeout(this.filterTimer);
if(l===j){h=true
}else{l=j+l
}g=new RegExp("^"+f(l),"i");
e=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(b(this).children("a").text())
});
e=h&&e.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):e;
if(!e.length){l=String.fromCharCode(k.keyCode);
g=new RegExp("^"+f(l),"i");
e=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(b(this).children("a").text())
})
}if(e.length){this.focus(k,e);
if(e.length>1){this.previousFilter=l;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}else{delete this.previousFilter
}}if(d){k.preventDefault()
}},_activate:function(d){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(d)
}else{this.select(d)
}}},refresh:function(){var f,e=this.options.icons.submenu,d=this.element.find(this.options.menus);
d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var j=b(this),h=j.prev("a"),g=b("<span>").addClass("ui-menu-icon ui-icon "+e).data("ui-menu-submenu-carat",true);
h.attr("aria-haspopup","true").prepend(g);
j.attr("aria-labelledby",h.attr("id"))
});
f=d.add(this.element);
f.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});
f.children(":not(.ui-menu-item)").each(function(){var g=b(this);
if(!/[^\-—–\s]/.test(g.text())){g.addClass("ui-widget-content ui-menu-divider")
}});
f.children(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!b.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},focus:function(e,d){var g,f;
this.blur(e,e&&e.type==="focus");
this._scrollIntoView(d);
this.active=d.first();
f=this.active.children("a").addClass("ui-state-focus");
if(this.options.role){this.element.attr("aria-activedescendant",f.attr("id"))
}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
if(e&&e.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}g=d.children(".ui-menu");
if(g.length&&(/^mouse/.test(e.type))){this._startOpening(g)
}this.activeMenu=d.parent();
this._trigger("focus",e,{item:d})
},_scrollIntoView:function(g){var k,f,h,d,e,j;
if(this._hasScroll()){k=parseFloat(b.css(this.activeMenu[0],"borderTopWidth"))||0;
f=parseFloat(b.css(this.activeMenu[0],"paddingTop"))||0;
h=g.offset().top-this.activeMenu.offset().top-k-f;
d=this.activeMenu.scrollTop();
e=this.activeMenu.height();
j=g.height();
if(h<0){this.activeMenu.scrollTop(d+h)
}else{if(h+j>e){this.activeMenu.scrollTop(d+h-e+j)
}}}},blur:function(e,d){if(!d){clearTimeout(this.timer)
}if(!this.active){return
}this.active.children("a").removeClass("ui-state-focus");
this.active=null;
this._trigger("blur",e,{item:this.active})
},_startOpening:function(d){clearTimeout(this.timer);
if(d.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close();
this._open(d)
},this.delay)
},_open:function(e){var d=b.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true");
e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(d)
},collapseAll:function(e,d){clearTimeout(this.timer);
this.timer=this._delay(function(){var f=d?this.element:b(e&&e.target).closest(this.element.find(".ui-menu"));
if(!f.length){f=this.element
}this._close(f);
this.blur(e);
this.activeMenu=f
},this.delay)
},_close:function(d){if(!d){d=this.active?this.active.parent():this.element
}d.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(e){var d=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(d&&d.length){this._close();
this.focus(e,d)
}},expand:function(e){var d=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
if(d&&d.length){this._open(d.parent());
this._delay(function(){this.focus(e,d)
})
}},next:function(d){this._move("next","first",d)
},previous:function(d){this._move("prev","last",d)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(g,e,f){var d;
if(this.active){if(g==="first"||g==="last"){d=this.active[g==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{d=this.active[g+"All"](".ui-menu-item").eq(0)
}}if(!d||!d.length||!this.active){d=this.activeMenu.children(".ui-menu-item")[e]()
}this.focus(f,d)
},nextPage:function(f){var e,g,d;
if(!this.active){this.next(f);
return
}if(this.isLastItem()){return
}if(this._hasScroll()){g=this.active.offset().top;
d=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){e=b(this);
return e.offset().top-g-d<0
});
this.focus(f,e)
}else{this.focus(f,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())
}},previousPage:function(f){var e,g,d;
if(!this.active){this.next(f);
return
}if(this.isFirstItem()){return
}if(this._hasScroll()){g=this.active.offset().top;
d=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){e=b(this);
return e.offset().top-g+d>0
});
this.focus(f,e)
}else{this.focus(f,this.activeMenu.children(".ui-menu-item").first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(d){this.active=this.active||b(d.target).closest(".ui-menu-item");
var e={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(d,true)
}this._trigger("select",d,e)
}})
}(jQuery));
(function(a,b){a.widget("ui.progressbar",{version:"1.9.2",options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});
this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this.oldValue=this._value();
this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove()
},value:function(c){if(c===b){return this._value()
}this._setOption("value",c);
return this
},_setOption:function(c,d){if(c==="value"){this.options.value=d;
this._refreshValue();
if(this._value()===this.options.max){this._trigger("complete")
}}this._super(c,d)
},_value:function(){var c=this.options.value;
if(typeof c!=="number"){c=0
}return Math.min(this.options.max,Math.max(this.min,c))
},_percentage:function(){return 100*this._value()/this.options.max
},_refreshValue:function(){var d=this.value(),c=this._percentage();
if(this.oldValue!==d){this.oldValue=d;
this._trigger("change")
}this.valueDiv.toggle(d>this.min).toggleClass("ui-corner-right",d===this.options.max).width(c.toFixed(0)+"%");
this.element.attr("aria-valuenow",d)
}})
})(jQuery);
(function(c,d){c.widget("ui.resizable",c.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var h=this,k=this.options;
this.element.addClass("ui-resizable");
c.extend(this,{_aspectRatio:!!(k.aspectRatio),aspectRatio:k.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:k.helper||k.ghost||k.animate?k.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("resizable",this.element.data("resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=k.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}var l=this.handles.split(",");
this.handles={};
for(var f=0;
f<l.length;
f++){var j=c.trim(l[f]),e="ui-resizable-"+j;
var g=c('<div class="ui-resizable-handle '+e+'"></div>');
g.css({zIndex:k.zIndex});
if("se"==j){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[j]=".ui-resizable-"+j;
this.element.append(g)
}}this._renderAxis=function(q){q=q||this.element;
for(var n in this.handles){if(this.handles[n].constructor==String){this.handles[n]=c(this.handles[n],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var o=c(this.handles[n],this.element),p=0;
p=/sw|ne|nw|se|n|s/.test(n)?o.outerHeight():o.outerWidth();
var m=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");
q.css(m,p);
this._proportionallyResize()
}if(!c(this.handles[n]).length){continue
}}};
this._renderAxis(this.element);
this._handles=c(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!h.resizing){if(this.className){var m=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}h.axis=m&&m[1]?m[1]:"se"
}});
if(k.autoHide){this._handles.hide();
c(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(k.disabled){return
}c(this).removeClass("ui-resizable-autohide");
h._handles.show()
}).mouseleave(function(){if(k.disabled){return
}if(!h.resizing){c(this).addClass("ui-resizable-autohide");
h._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var e=function(g){c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){e(this.element);
var f=this.element;
this.originalElement.css({position:f.css("position"),width:f.outerWidth(),height:f.outerHeight(),top:f.css("top"),left:f.css("left")}).insertAfter(f);
f.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
e(this.originalElement);
return this
},_mouseCapture:function(f){var g=false;
for(var e in this.handles){if(c(this.handles[e])[0]==f.target){g=true
}}return !this.options.disabled&&g
},_mouseStart:function(g){var k=this.options,f=this.element.position(),e=this.element;
this.resizing=true;
this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};
if(e.is(".ui-draggable")||(/absolute/).test(e.css("position"))){e.css({position:"absolute",top:f.top,left:f.left})
}this._renderProxy();
var l=b(this.helper.css("left")),h=b(this.helper.css("top"));
if(k.containment){l+=c(k.containment).scrollLeft()||0;
h+=c(k.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:l,top:h};
this.size=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};
this.originalSize=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};
this.originalPosition={left:l,top:h};
this.sizeDiff={width:e.outerWidth()-e.width(),height:e.outerHeight()-e.height()};
this.originalMousePosition={left:g.pageX,top:g.pageY};
this.aspectRatio=(typeof k.aspectRatio=="number")?k.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
var j=c(".ui-resizable-"+this.axis).css("cursor");
c("body").css("cursor",j=="auto"?this.axis+"-resize":j);
e.addClass("ui-resizable-resizing");
this._propagate("start",g);
return true
},_mouseDrag:function(e){var g=this.helper,f=this.options,m={},l=this,j=this.originalMousePosition,n=this.axis;
var q=(e.pageX-j.left)||0,p=(e.pageY-j.top)||0;
var h=this._change[n];
if(!h){return false
}var k=h.apply(this,[e,q,p]);
this._updateVirtualBoundaries(e.shiftKey);
if(this._aspectRatio||e.shiftKey){k=this._updateRatio(k,e)
}k=this._respectSize(k,e);
this._propagate("resize",e);
g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}this._updateCache(k);
this._trigger("resize",e,this.ui());
return false
},_mouseStop:function(h){this.resizing=false;
var j=this.options,m=this;
if(this._helper){var g=this._proportionallyResizeElements,e=g.length&&(/textarea/i).test(g[0].nodeName),f=e&&c.ui.hasScroll(g[0],"left")?0:m.sizeDiff.height,l=e?0:m.sizeDiff.width;
var p={width:(m.helper.width()-l),height:(m.helper.height()-f)},k=(parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left))||null,n=(parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top))||null;
if(!j.animate){this.element.css(c.extend(p,{top:n,left:k}))
}m.helper.height(m.size.height);
m.helper.width(m.size.width);
if(this._helper&&!j.animate){this._proportionallyResize()
}}c("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",h);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(g){var k=this.options,j,h,f,l,e;
e={minWidth:a(k.minWidth)?k.minWidth:0,maxWidth:a(k.maxWidth)?k.maxWidth:Infinity,minHeight:a(k.minHeight)?k.minHeight:0,maxHeight:a(k.maxHeight)?k.maxHeight:Infinity};
if(this._aspectRatio||g){j=e.minHeight*this.aspectRatio;
f=e.minWidth/this.aspectRatio;
h=e.maxHeight*this.aspectRatio;
l=e.maxWidth/this.aspectRatio;
if(j>e.minWidth){e.minWidth=j
}if(f>e.minHeight){e.minHeight=f
}if(h<e.maxWidth){e.maxWidth=h
}if(l<e.maxHeight){e.maxHeight=l
}}this._vBoundaries=e
},_updateCache:function(e){var f=this.options;
this.offset=this.helper.offset();
if(a(e.left)){this.position.left=e.left
}if(a(e.top)){this.position.top=e.top
}if(a(e.height)){this.size.height=e.height
}if(a(e.width)){this.size.width=e.width
}},_updateRatio:function(h,g){var j=this.options,k=this.position,f=this.size,e=this.axis;
if(a(h.height)){h.width=(h.height*this.aspectRatio)
}else{if(a(h.width)){h.height=(h.width/this.aspectRatio)
}}if(e=="sw"){h.left=k.left+(f.width-h.width);
h.top=null
}if(e=="nw"){h.top=k.top+(f.height-h.height);
h.left=k.left+(f.width-h.width)
}return h
},_respectSize:function(m,g){var k=this.helper,j=this._vBoundaries,s=this._aspectRatio||g.shiftKey,r=this.axis,v=a(m.width)&&j.maxWidth&&(j.maxWidth<m.width),n=a(m.height)&&j.maxHeight&&(j.maxHeight<m.height),h=a(m.width)&&j.minWidth&&(j.minWidth>m.width),u=a(m.height)&&j.minHeight&&(j.minHeight>m.height);
if(h){m.width=j.minWidth
}if(u){m.height=j.minHeight
}if(v){m.width=j.maxWidth
}if(n){m.height=j.maxHeight
}var f=this.originalPosition.left+this.originalSize.width,q=this.position.top+this.size.height;
var l=/sw|nw|w/.test(r),e=/nw|ne|n/.test(r);
if(h&&l){m.left=f-j.minWidth
}if(v&&l){m.left=f-j.maxWidth
}if(u&&e){m.top=q-j.minHeight
}if(n&&e){m.top=q-j.maxHeight
}var p=!m.width&&!m.height;
if(p&&!m.left&&m.top){m.top=null
}else{if(p&&!m.top&&m.left){m.left=null
}}return m
},_proportionallyResize:function(){var k=this.options;
if(!this._proportionallyResizeElements.length){return
}var g=this.helper||this.element;
for(var f=0;
f<this._proportionallyResizeElements.length;
f++){var h=this._proportionallyResizeElements[f];
if(!this.borderDif){var e=[h.css("borderTopWidth"),h.css("borderRightWidth"),h.css("borderBottomWidth"),h.css("borderLeftWidth")],j=[h.css("paddingTop"),h.css("paddingRight"),h.css("paddingBottom"),h.css("paddingLeft")];
this.borderDif=c.map(e,function(l,n){var m=parseInt(l,10)||0,o=parseInt(j[n],10)||0;
return m+o
})
}h.css({height:(g.height()-this.borderDif[0]-this.borderDif[2])||0,width:(g.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var e=this.element,h=this.options;
this.elementOffset=e.offset();
if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');
var f=(c.ui.ie6?1:0),g=(c.ui.ie6?2:-1);
this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++h.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(g,f,e){return{width:this.originalSize.width+f}
},w:function(h,f,e){var k=this.options,g=this.originalSize,j=this.originalPosition;
return{left:j.left+f,width:g.width-f}
},n:function(h,f,e){var k=this.options,g=this.originalSize,j=this.originalPosition;
return{top:j.top+e,height:g.height-e}
},s:function(g,f,e){return{height:this.originalSize.height+e}
},se:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
},sw:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
},ne:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
},nw:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
}},_propagate:function(f,e){c.ui.plugin.call(this,f,[e,this.ui()]);
(f!="resize"&&this._trigger(f,e,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
c.ui.plugin.add("resizable","alsoResize",{start:function(f,g){var e=c(this).data("resizable"),j=e.options;
var h=function(k){c(k).each(function(){var l=c(this);
l.data("resizable-alsoresize",{width:parseInt(l.width(),10),height:parseInt(l.height(),10),left:parseInt(l.css("left"),10),top:parseInt(l.css("top"),10)})
})
};
if(typeof(j.alsoResize)=="object"&&!j.alsoResize.parentNode){if(j.alsoResize.length){j.alsoResize=j.alsoResize[0];
h(j.alsoResize)
}else{c.each(j.alsoResize,function(k){h(k)
})
}}else{h(j.alsoResize)
}},resize:function(g,j){var f=c(this).data("resizable"),k=f.options,h=f.originalSize,m=f.originalPosition;
var l={height:(f.size.height-h.height)||0,width:(f.size.width-h.width)||0,top:(f.position.top-m.top)||0,left:(f.position.left-m.left)||0},e=function(n,o){c(n).each(function(){var r=c(this),s=c(this).data("resizable-alsoresize"),q={},p=o&&o.length?o:r.parents(j.originalElement[0]).length?["width","height"]:["width","height","top","left"];
c.each(p,function(u,w){var v=(s[w]||0)+(l[w]||0);
if(v&&v>=0){q[w]=v||null
}});
r.css(q)
})
};
if(typeof(k.alsoResize)=="object"&&!k.alsoResize.nodeType){c.each(k.alsoResize,function(n,o){e(n,o)
})
}else{e(k.alsoResize)
}},stop:function(e,f){c(this).removeData("resizable-alsoresize")
}});
c.ui.plugin.add("resizable","animate",{stop:function(j,q){var n=c(this).data("resizable"),k=n.options;
var h=n._proportionallyResizeElements,e=h.length&&(/textarea/i).test(h[0].nodeName),f=e&&c.ui.hasScroll(h[0],"left")?0:n.sizeDiff.height,m=e?0:n.sizeDiff.width;
var g={width:(n.size.width-m),height:(n.size.height-f)},l=(parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left))||null,p=(parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top))||null;
n.element.animate(c.extend(g,p&&l?{top:p,left:l}:{}),{duration:k.animateDuration,easing:k.animateEasing,step:function(){var o={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};
if(h&&h.length){c(h[0]).css({width:o.width,height:o.height})
}n._updateCache(o);
n._propagate("resize",j)
}})
}});
c.ui.plugin.add("resizable","containment",{start:function(f,u){var r=c(this).data("resizable"),k=r.options,m=r.element;
var g=k.containment,l=(g instanceof c)?g.get(0):(/parent/.test(g))?m.parent().get(0):g;
if(!l){return
}r.containerElement=c(l);
if(/document/.test(g)||g==document){r.containerOffset={left:0,top:0};
r.containerPosition={left:0,top:0};
r.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}
}else{var q=c(l),j=[];
c(["Top","Right","Left","Bottom"]).each(function(p,o){j[p]=b(q.css("padding"+o))
});
r.containerOffset=q.offset();
r.containerPosition=q.position();
r.containerSize={height:(q.innerHeight()-j[3]),width:(q.innerWidth()-j[1])};
var s=r.containerOffset,e=r.containerSize.height,n=r.containerSize.width,h=(c.ui.hasScroll(l,"left")?l.scrollWidth:n),v=(c.ui.hasScroll(l)?l.scrollHeight:e);
r.parentData={element:l,left:s.left,top:s.top,width:h,height:v}
}},resize:function(g,s){var n=c(this).data("resizable"),j=n.options,f=n.containerSize,r=n.containerOffset,p=n.size,q=n.position,u=n._aspectRatio||g.shiftKey,e={top:0,left:0},h=n.containerElement;
if(h[0]!=document&&(/static/).test(h.css("position"))){e=r
}if(q.left<(n._helper?r.left:0)){n.size.width=n.size.width+(n._helper?(n.position.left-r.left):(n.position.left-e.left));
if(u){n.size.height=n.size.width/n.aspectRatio
}n.position.left=j.helper?r.left:0
}if(q.top<(n._helper?r.top:0)){n.size.height=n.size.height+(n._helper?(n.position.top-r.top):n.position.top);
if(u){n.size.width=n.size.height*n.aspectRatio
}n.position.top=n._helper?r.top:0
}n.offset.left=n.parentData.left+n.position.left;
n.offset.top=n.parentData.top+n.position.top;
var m=Math.abs((n._helper?n.offset.left-e.left:(n.offset.left-e.left))+n.sizeDiff.width),v=Math.abs((n._helper?n.offset.top-e.top:(n.offset.top-r.top))+n.sizeDiff.height);
var l=n.containerElement.get(0)==n.element.parent().get(0),k=/relative|absolute/.test(n.containerElement.css("position"));
if(l&&k){m-=n.parentData.left
}if(m+n.size.width>=n.parentData.width){n.size.width=n.parentData.width-m;
if(u){n.size.height=n.size.width/n.aspectRatio
}}if(v+n.size.height>=n.parentData.height){n.size.height=n.parentData.height-v;
if(u){n.size.width=n.size.height*n.aspectRatio
}}},stop:function(f,q){var m=c(this).data("resizable"),g=m.options,n=m.position,p=m.containerOffset,e=m.containerPosition,j=m.containerElement;
var k=c(m.helper),s=k.offset(),r=k.outerWidth()-m.sizeDiff.width,l=k.outerHeight()-m.sizeDiff.height;
if(m._helper&&!g.animate&&(/relative/).test(j.css("position"))){c(this).css({left:s.left-e.left-p.left,width:r,height:l})
}if(m._helper&&!g.animate&&(/static/).test(j.css("position"))){c(this).css({left:s.left-e.left-p.left,width:r,height:l})
}}});
c.ui.plugin.add("resizable","ghost",{start:function(g,h){var f=c(this).data("resizable"),j=f.options,e=f.size;
f.ghost=f.originalElement.clone();
f.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof j.ghost=="string"?j.ghost:"");
f.ghost.appendTo(f.helper)
},resize:function(f,g){var e=c(this).data("resizable"),h=e.options;
if(e.ghost){e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})
}},stop:function(f,g){var e=c(this).data("resizable"),h=e.options;
if(e.ghost&&e.helper){e.helper.get(0).removeChild(e.ghost.get(0))
}}});
c.ui.plugin.add("resizable","grid",{resize:function(e,p){var l=c(this).data("resizable"),h=l.options,m=l.size,j=l.originalSize,k=l.originalPosition,q=l.axis,n=h._aspectRatio||e.shiftKey;
h.grid=typeof h.grid=="number"?[h.grid,h.grid]:h.grid;
var g=Math.round((m.width-j.width)/(h.grid[0]||1))*(h.grid[0]||1),f=Math.round((m.height-j.height)/(h.grid[1]||1))*(h.grid[1]||1);
if(/^(se|s|e)$/.test(q)){l.size.width=j.width+g;
l.size.height=j.height+f
}else{if(/^(ne)$/.test(q)){l.size.width=j.width+g;
l.size.height=j.height+f;
l.position.top=k.top-f
}else{if(/^(sw)$/.test(q)){l.size.width=j.width+g;
l.size.height=j.height+f;
l.position.left=k.left-g
}else{l.size.width=j.width+g;
l.size.height=j.height+f;
l.position.top=k.top-f;
l.position.left=k.left-g
}}}}});
var b=function(e){return parseInt(e,10)||0
};
var a=function(e){return !isNaN(parseInt(e,10))
}
})(jQuery);
(function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;
this.element.addClass("ui-selectable");
this.dragged=false;
var d;
this.refresh=function(){d=a(c.options.filter,c.element[0]);
d.addClass("ui-selectee");
d.each(function(){var e=a(this);
var f=e.offset();
a.data(this,"selectable-item",{element:this,$element:e,left:f.left,top:f.top,right:f.left+e.outerWidth(),bottom:f.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=d.addClass("ui-selectee");
this._mouseInit();
this.helper=a("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");
this._mouseDestroy()
},_mouseStart:function(e){var d=this;
this.opos=[e.pageX,e.pageY];
if(this.options.disabled){return
}var c=this.options;
this.selectees=a(c.filter,this.element[0]);
this._trigger("start",e);
a(c.appendTo).append(this.helper);
this.helper.css({left:e.clientX,top:e.clientY,width:0,height:0});
if(c.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var f=a.data(this,"selectable-item");
f.startselected=true;
if(!e.metaKey&&!e.ctrlKey){f.$element.removeClass("ui-selected");
f.selected=false;
f.$element.addClass("ui-unselecting");
f.unselecting=true;
d._trigger("unselecting",e,{unselecting:f.element})
}});
a(e.target).parents().andSelf().each(function(){var g=a.data(this,"selectable-item");
if(g){var f=(!e.metaKey&&!e.ctrlKey)||!g.$element.hasClass("ui-selected");
g.$element.removeClass(f?"ui-unselecting":"ui-selected").addClass(f?"ui-selecting":"ui-unselecting");
g.unselecting=!f;
g.selecting=f;
g.selected=f;
if(f){d._trigger("selecting",e,{selecting:g.element})
}else{d._trigger("unselecting",e,{unselecting:g.element})
}return false
}})
},_mouseDrag:function(k){var j=this;
this.dragged=true;
if(this.options.disabled){return
}var e=this.options;
var d=this.opos[0],h=this.opos[1],c=k.pageX,g=k.pageY;
if(d>c){var f=c;
c=d;
d=f
}if(h>g){var f=g;
g=h;
h=f
}this.helper.css({left:d,top:h,width:c-d,height:g-h});
this.selectees.each(function(){var l=a.data(this,"selectable-item");
if(!l||l.element==j.element[0]){return
}var m=false;
if(e.tolerance=="touch"){m=(!(l.left>c||l.right<d||l.top>g||l.bottom<h))
}else{if(e.tolerance=="fit"){m=(l.left>d&&l.right<c&&l.top>h&&l.bottom<g)
}}if(m){if(l.selected){l.$element.removeClass("ui-selected");
l.selected=false
}if(l.unselecting){l.$element.removeClass("ui-unselecting");
l.unselecting=false
}if(!l.selecting){l.$element.addClass("ui-selecting");
l.selecting=true;
j._trigger("selecting",k,{selecting:l.element})
}}else{if(l.selecting){if((k.metaKey||k.ctrlKey)&&l.startselected){l.$element.removeClass("ui-selecting");
l.selecting=false;
l.$element.addClass("ui-selected");
l.selected=true
}else{l.$element.removeClass("ui-selecting");
l.selecting=false;
if(l.startselected){l.$element.addClass("ui-unselecting");
l.unselecting=true
}j._trigger("unselecting",k,{unselecting:l.element})
}}if(l.selected){if(!k.metaKey&&!k.ctrlKey&&!l.startselected){l.$element.removeClass("ui-selected");
l.selected=false;
l.$element.addClass("ui-unselecting");
l.unselecting=true;
j._trigger("unselecting",k,{unselecting:l.element})
}}}});
return false
},_mouseStop:function(e){var d=this;
this.dragged=false;
var c=this.options;
a(".ui-unselecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");
f.$element.removeClass("ui-unselecting");
f.unselecting=false;
f.startselected=false;
d._trigger("unselected",e,{unselected:f.element})
});
a(".ui-selecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");
f.$element.removeClass("ui-selecting").addClass("ui-selected");
f.selecting=false;
f.selected=true;
f.startselected=true;
d._trigger("selected",e,{selected:f.element})
});
this._trigger("stop",e);
this.helper.remove();
return false
}})
})(jQuery);
(function(b,c){var a=5;
b.widget("ui.slider",b.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var f,d,j=this.options,h=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),g="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",e=[];
this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(j.disabled?" ui-slider-disabled ui-disabled":""));
this.range=b([]);
if(j.range){if(j.range===true){if(!j.values){j.values=[this._valueMin(),this._valueMin()]
}if(j.values.length&&j.values.length!==2){j.values=[j.values[0],j.values[0]]
}}this.range=b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((j.range==="min"||j.range==="max")?" ui-slider-range-"+j.range:""))
}d=(j.values&&j.values.length)||1;
for(f=h.length;
f<d;
f++){e.push(g)
}this.handles=h.add(b(e.join("")).appendTo(this.element));
this.handle=this.handles.eq(0);
this.handles.add(this.range).filter("a").click(function(k){k.preventDefault()
}).mouseenter(function(){if(!j.disabled){b(this).addClass("ui-state-hover")
}}).mouseleave(function(){b(this).removeClass("ui-state-hover")
}).focus(function(){if(!j.disabled){b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
b(this).addClass("ui-state-focus")
}else{b(this).blur()
}}).blur(function(){b(this).removeClass("ui-state-focus")
});
this.handles.each(function(k){b(this).data("ui-slider-handle-index",k)
});
this._on(this.handles,{keydown:function(o){var p,m,l,n,k=b(o.target).data("ui-slider-handle-index");
switch(o.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:o.preventDefault();
if(!this._keySliding){this._keySliding=true;
b(o.target).addClass("ui-state-active");
p=this._start(o,k);
if(p===false){return
}}break
}n=this.options.step;
if(this.options.values&&this.options.values.length){m=l=this.values(k)
}else{m=l=this.value()
}switch(o.keyCode){case b.ui.keyCode.HOME:l=this._valueMin();
break;
case b.ui.keyCode.END:l=this._valueMax();
break;
case b.ui.keyCode.PAGE_UP:l=this._trimAlignValue(m+((this._valueMax()-this._valueMin())/a));
break;
case b.ui.keyCode.PAGE_DOWN:l=this._trimAlignValue(m-((this._valueMax()-this._valueMin())/a));
break;
case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(m===this._valueMax()){return
}l=this._trimAlignValue(m+n);
break;
case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(m===this._valueMin()){return
}l=this._trimAlignValue(m-n);
break
}this._slide(o,k,l)
},keyup:function(l){var k=b(l.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(l,k);
this._change(l,k);
b(l.target).removeClass("ui-state-active")
}}});
this._refreshValue();
this._animateOff=false
},_destroy:function(){this.handles.remove();
this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()
},_mouseCapture:function(f){var k,n,e,h,m,p,j,d,l=this,g=this.options;
if(g.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
k={x:f.pageX,y:f.pageY};
n=this._normValueFromMouse(k);
e=this._valueMax()-this._valueMin()+1;
this.handles.each(function(o){var q=Math.abs(n-l.values(o));
if(e>q){e=q;
h=b(this);
m=o
}});
if(g.range===true&&this.values(1)===g.min){m+=1;
h=b(this.handles[m])
}p=this._start(f,m);
if(p===false){return false
}this._mouseSliding=true;
this._handleIndex=m;
h.addClass("ui-state-active").focus();
j=h.offset();
d=!b(f.target).parents().andSelf().is(".ui-slider-handle");
this._clickOffset=d?{left:0,top:0}:{left:f.pageX-j.left-(h.width()/2),top:f.pageY-j.top-(h.height()/2)-(parseInt(h.css("borderTopWidth"),10)||0)-(parseInt(h.css("borderBottomWidth"),10)||0)+(parseInt(h.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(f,m,n)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(f){var d={x:f.pageX,y:f.pageY},e=this._normValueFromMouse(d);
this._slide(f,this._handleIndex,e);
return false
},_mouseStop:function(d){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(d,this._handleIndex);
this._change(d,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(e){var d,h,g,f,j;
if(this.orientation==="horizontal"){d=this.elementSize.width;
h=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{d=this.elementSize.height;
h=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}g=(h/d);
if(g>1){g=1
}if(g<0){g=0
}if(this.orientation==="vertical"){g=1-g
}f=this._valueMax()-this._valueMin();
j=this._valueMin()+g*f;
return this._trimAlignValue(j)
},_start:function(f,e){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}return this._trigger("start",f,d)
},_slide:function(h,g,f){var d,e,j;
if(this.options.values&&this.options.values.length){d=this.values(g?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((g===0&&f>d)||(g===1&&f<d))){f=d
}if(f!==this.values(g)){e=this.values();
e[g]=f;
j=this._trigger("slide",h,{handle:this.handles[g],value:f,values:e});
d=this.values(g?0:1);
if(j!==false){this.values(g,f,true)
}}}else{if(f!==this.value()){j=this._trigger("slide",h,{handle:this.handles[g],value:f});
if(j!==false){this.value(f)
}}}},_stop:function(f,e){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}this._trigger("stop",f,d)
},_change:function(f,e){if(!this._keySliding&&!this._mouseSliding){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}this._trigger("change",f,d)
}},value:function(d){if(arguments.length){this.options.value=this._trimAlignValue(d);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(e,h){var g,d,f;
if(arguments.length>1){this.options.values[e]=this._trimAlignValue(h);
this._refreshValue();
this._change(null,e);
return
}if(arguments.length){if(b.isArray(arguments[0])){g=this.options.values;
d=arguments[0];
for(f=0;
f<g.length;
f+=1){g[f]=this._trimAlignValue(d[f]);
this._change(null,f)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(e)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(e,f){var d,g=0;
if(b.isArray(this.options.values)){g=this.options.values.length
}b.Widget.prototype._setOption.apply(this,arguments);
switch(e){case"disabled":if(f){this.handles.filter(".ui-state-focus").blur();
this.handles.removeClass("ui-state-hover");
this.handles.prop("disabled",true);
this.element.addClass("ui-disabled")
}else{this.handles.prop("disabled",false);
this.element.removeClass("ui-disabled")
}break;
case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(d=0;
d<g;
d+=1){this._change(null,d)
}this._animateOff=false;
break;
case"min":case"max":this._animateOff=true;
this._refreshValue();
this._animateOff=false;
break
}},_value:function(){var d=this.options.value;
d=this._trimAlignValue(d);
return d
},_values:function(d){var g,f,e;
if(arguments.length){g=this.options.values[d];
g=this._trimAlignValue(g);
return g
}else{f=this.options.values.slice();
for(e=0;
e<f.length;
e+=1){f[e]=this._trimAlignValue(f[e])
}return f
}},_trimAlignValue:function(g){if(g<=this._valueMin()){return this._valueMin()
}if(g>=this._valueMax()){return this._valueMax()
}var d=(this.options.step>0)?this.options.step:1,f=(g-this._valueMin())%d,e=g-f;
if(Math.abs(f)*2>=d){e+=(f>0)?d:(-d)
}return parseFloat(e.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var j,h,m,k,n,g=this.options.range,f=this.options,l=this,e=(!this._animateOff)?f.animate:false,d={};
if(this.options.values&&this.options.values.length){this.handles.each(function(o){h=(l.values(o)-l._valueMin())/(l._valueMax()-l._valueMin())*100;
d[l.orientation==="horizontal"?"left":"bottom"]=h+"%";
b(this).stop(1,1)[e?"animate":"css"](d,f.animate);
if(l.options.range===true){if(l.orientation==="horizontal"){if(o===0){l.range.stop(1,1)[e?"animate":"css"]({left:h+"%"},f.animate)
}if(o===1){l.range[e?"animate":"css"]({width:(h-j)+"%"},{queue:false,duration:f.animate})
}}else{if(o===0){l.range.stop(1,1)[e?"animate":"css"]({bottom:(h)+"%"},f.animate)
}if(o===1){l.range[e?"animate":"css"]({height:(h-j)+"%"},{queue:false,duration:f.animate})
}}}j=h
})
}else{m=this.value();
k=this._valueMin();
n=this._valueMax();
h=(n!==k)?(m-k)/(n-k)*100:0;
d[this.orientation==="horizontal"?"left":"bottom"]=h+"%";
this.handle.stop(1,1)[e?"animate":"css"](d,f.animate);
if(g==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[e?"animate":"css"]({width:h+"%"},f.animate)
}if(g==="max"&&this.orientation==="horizontal"){this.range[e?"animate":"css"]({width:(100-h)+"%"},{queue:false,duration:f.animate})
}if(g==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[e?"animate":"css"]({height:h+"%"},f.animate)
}if(g==="max"&&this.orientation==="vertical"){this.range[e?"animate":"css"]({height:(100-h)+"%"},{queue:false,duration:f.animate})
}}}})
}(jQuery));
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var c=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?c.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var c=this.items.length-1;
c>=0;
c--){this.items[c].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(c,d){if(c==="disabled"){this.options[c]=d;
this.widget().toggleClass("ui-sortable-disabled",!!d)
}else{a.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(f,g){var e=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type=="static"){return false
}this._refreshItems(f);
var d=null,c=a(f.target).parents().each(function(){if(a.data(this,e.widgetName+"-item")==e){d=a(this);
return false
}});
if(a.data(f.target,e.widgetName+"-item")==e){d=a(f.target)
}if(!d){return false
}if(this.options.handle&&!g){var h=false;
a(this.options.handle,d).find("*").andSelf().each(function(){if(this==f.target){h=true
}});
if(!h){return false
}}this.currentItem=d;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(e,f,c){var g=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(e);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(e);
this.originalPageX=e.pageX;
this.originalPageY=e.pageY;
(g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(g.containment){this._setContainment()
}if(g.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")
}a("body").css("cursor",g.cursor)
}if(g.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",g.opacity)
}if(g.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",g.zIndex)
}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",e,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!c){for(var d=this.containers.length-1;
d>=0;
d--){this.containers[d]._trigger("activate",e,this._uiHash(this))
}}if(a.ui.ddmanager){a.ui.ddmanager.current=this
}if(a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,e)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(e);
return true
},_mouseDrag:function(g){this.position=this._generatePosition(g);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){var h=this.options,c=false;
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-g.pageY<h.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+h.scrollSpeed
}else{if(g.pageY-this.overflowOffset.top<h.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-h.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-g.pageX<h.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+h.scrollSpeed
}else{if(g.pageX-this.overflowOffset.left<h.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-h.scrollSpeed
}}}else{if(g.pageY-a(document).scrollTop()<h.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-h.scrollSpeed)
}else{if(a(window).height()-(g.pageY-a(document).scrollTop())<h.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+h.scrollSpeed)
}}if(g.pageX-a(document).scrollLeft()<h.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-h.scrollSpeed)
}else{if(a(window).width()-(g.pageX-a(document).scrollLeft())<h.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+h.scrollSpeed)
}}}if(c!==false&&a.ui.ddmanager&&!h.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,g)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}for(var e=this.items.length-1;
e>=0;
e--){var f=this.items[e],d=f.item[0],j=this._intersectsWithPointer(f);
if(!j){continue
}if(f.instance!==this.currentContainer){continue
}if(d!=this.currentItem[0]&&this.placeholder[j==1?"next":"prev"]()[0]!=d&&!a.contains(this.placeholder[0],d)&&(this.options.type=="semi-dynamic"?!a.contains(this.element[0],d):true)){this.direction=j==1?"down":"up";
if(this.options.tolerance=="pointer"||this._intersectsWithSides(f)){this._rearrange(g,f)
}else{break
}this._trigger("change",g,this._uiHash());
break
}}this._contactContainers(g);
if(a.ui.ddmanager){a.ui.ddmanager.drag(this,g)
}this._trigger("sort",g,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(d,e){if(!d){return
}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,d)
}if(this.options.revert){var c=this;
var f=this.placeholder.offset();
this.reverting=true;
a(this.helper).animate({left:f.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:f.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(d)
})
}else{this._clear(d,e)
}return false
},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var c=this.containers.length-1;
c>=0;
c--){this.containers[c]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,this._uiHash(this));
this.containers[c].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)
}else{a(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(e){var c=this._getItemsAsjQuery(e&&e.connected);
var d=[];
e=e||{};
a(c).each(function(){var f=(a(e.item||this).attr(e.attribute||"id")||"").match(e.expression||(/(.+)[-=_](.+)/));
if(f){d.push((e.key||f[1]+"[]")+"="+(e.key&&e.expression?f[1]:f[2]))
}});
if(!d.length&&e.key){d.push(e.key+"=")
}return d.join("&")
},toArray:function(e){var c=this._getItemsAsjQuery(e&&e.connected);
var d=[];
e=e||{};
c.each(function(){d.push(a(e.item||this).attr(e.attribute||"id")||"")
});
return d
},_intersectsWith:function(n){var e=this.positionAbs.left,d=e+this.helperProportions.width,m=this.positionAbs.top,k=m+this.helperProportions.height;
var f=n.left,c=f+n.width,o=n.top,j=o+n.height;
var p=this.offset.click.top,h=this.offset.click.left;
var g=(m+p)>o&&(m+p)<j&&(e+h)>f&&(e+h)<c;
if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>n[this.floating?"width":"height"])){return g
}else{return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&o<m+(this.helperProportions.height/2)&&k-(this.helperProportions.height/2)<j)
}},_intersectsWithPointer:function(e){var f=(this.options.axis==="x")||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),d=(this.options.axis==="y")||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),h=f&&d,c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
if(!h){return false
}return this.floating?(((g&&g=="right")||c=="down")?2:1):(c&&(c=="down"?2:1))
},_intersectsWithSides:function(f){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,f.top+(f.height/2),f.height),e=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,f.left+(f.width/2),f.width),c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
if(this.floating&&g){return((g=="right"&&e)||(g=="left"&&!e))
}else{return c&&((c=="down"&&d)||(c=="up"&&!d))
}},_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;
return c!=0&&(c>0?"down":"up")
},_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;
return c!=0&&(c>0?"right":"left")
},refresh:function(c){this._refreshItems(c);
this.refreshPositions();
return this
},_connectWith:function(){var c=this.options;
return c.connectWith.constructor==String?[c.connectWith]:c.connectWith
},_getItemsAsjQuery:function(h){var c=[];
var e=[];
var g=this._connectWith();
if(g&&h){for(var f=g.length-1;
f>=0;
f--){var l=a(g[f]);
for(var d=l.length-1;
d>=0;
d--){var k=a.data(l[d],this.widgetName);
if(k&&k!=this&&!k.options.disabled){e.push([a.isFunction(k.options.items)?k.options.items.call(k.element):a(k.options.items,k.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),k])
}}}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(var f=e.length-1;
f>=0;
f--){e[f][0].each(function(){c.push(this)
})
}return a(c)
},_removeCurrentsFromItems:function(){var c=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=a.grep(this.items,function(e){for(var d=0;
d<c.length;
d++){if(c[d]==e.item[0]){return false
}}return true
})
},_refreshItems:function(c){this.items=[];
this.containers=[this];
var k=this.items;
var g=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],c,{item:this.currentItem}):a(this.options.items,this.element),this]];
var m=this._connectWith();
if(m&&this.ready){for(var f=m.length-1;
f>=0;
f--){var n=a(m[f]);
for(var e=n.length-1;
e>=0;
e--){var h=a.data(n[e],this.widgetName);
if(h&&h!=this&&!h.options.disabled){g.push([a.isFunction(h.options.items)?h.options.items.call(h.element[0],c,{item:this.currentItem}):a(h.options.items,h.element),h]);
this.containers.push(h)
}}}}for(var f=g.length-1;
f>=0;
f--){var l=g[f][1];
var d=g[f][0];
for(var e=0,o=d.length;
e<o;
e++){var p=a(d[e]);
p.data(this.widgetName+"-item",l);
k.push({item:p,instance:l,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(c){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}for(var e=this.items.length-1;
e>=0;
e--){var f=this.items[e];
if(f.instance!=this.currentContainer&&this.currentContainer&&f.item[0]!=this.currentItem[0]){continue
}var d=this.options.toleranceElement?a(this.options.toleranceElement,f.item):f.item;
if(!c){f.width=d.outerWidth();
f.height=d.outerHeight()
}var g=d.offset();
f.left=g.left;
f.top=g.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(var e=this.containers.length-1;
e>=0;
e--){var g=this.containers[e].element.offset();
this.containers[e].containerCache.left=g.left;
this.containers[e].containerCache.top=g.top;
this.containers[e].containerCache.width=this.containers[e].element.outerWidth();
this.containers[e].containerCache.height=this.containers[e].element.outerHeight()
}}return this
},_createPlaceholder:function(d){d=d||this;
var e=d.options;
if(!e.placeholder||e.placeholder.constructor==String){var c=e.placeholder;
e.placeholder={element:function(){var f=a(document.createElement(d.currentItem[0].nodeName)).addClass(c||d.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!c){f.style.visibility="hidden"
}return f
},update:function(f,g){if(c&&!e.forcePlaceholderSize){return
}if(!g.height()){g.height(d.currentItem.innerHeight()-parseInt(d.currentItem.css("paddingTop")||0,10)-parseInt(d.currentItem.css("paddingBottom")||0,10))
}if(!g.width()){g.width(d.currentItem.innerWidth()-parseInt(d.currentItem.css("paddingLeft")||0,10)-parseInt(d.currentItem.css("paddingRight")||0,10))
}}}
}d.placeholder=a(e.placeholder.element.call(d.element,d.currentItem));
d.currentItem.after(d.placeholder);
e.placeholder.update(d,d.placeholder)
},_contactContainers:function(c){var e=null,n=null;
for(var h=this.containers.length-1;
h>=0;
h--){if(a.contains(this.currentItem[0],this.containers[h].element[0])){continue
}if(this._intersectsWith(this.containers[h].containerCache)){if(e&&a.contains(this.containers[h].element[0],e.element[0])){continue
}e=this.containers[h];
n=h
}else{if(this.containers[h].containerCache.over){this.containers[h]._trigger("out",c,this._uiHash(this));
this.containers[h].containerCache.over=0
}}}if(!e){return
}if(this.containers.length===1){this.containers[n]._trigger("over",c,this._uiHash(this));
this.containers[n].containerCache.over=1
}else{var m=10000;
var k=null;
var l=this.containers[n].floating?"left":"top";
var o=this.containers[n].floating?"width":"height";
var d=this.positionAbs[l]+this.offset.click[l];
for(var f=this.items.length-1;
f>=0;
f--){if(!a.contains(this.containers[n].element[0],this.items[f].item[0])){continue
}if(this.items[f].item[0]==this.currentItem[0]){continue
}var p=this.items[f].item.offset()[l];
var g=false;
if(Math.abs(p-d)>Math.abs(p+this.items[f][o]-d)){g=true;
p+=this.items[f][o]
}if(Math.abs(p-d)<m){m=Math.abs(p-d);
k=this.items[f];
this.direction=g?"up":"down"
}}if(!k&&!this.options.dropOnEmpty){return
}this.currentContainer=this.containers[n];
k?this._rearrange(c,k,null,true):this._rearrange(c,null,this.containers[n].element,true);
this._trigger("change",c,this._uiHash());
this.containers[n]._trigger("change",c,this._uiHash(this));
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[n]._trigger("over",c,this._uiHash(this));
this.containers[n].containerCache.over=1
}},_createHelper:function(d){var e=this.options;
var c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d,this.currentItem])):(e.helper=="clone"?this.currentItem.clone():this.currentItem);
if(!c.parents("body").length){a(e.appendTo!="parent"?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])
}if(c[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(c[0].style.width==""||e.forceHelperSize){c.width(this.currentItem.width())
}if(c[0].style.height==""||e.forceHelperSize){c.height(this.currentItem.height())
}return c
},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")
}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
}if("left" in c){this.offset.click.left=c.left+this.margins.left
}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
}if("top" in c){this.offset.click.top=c.top+this.margins.top
}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var c=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
c.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.ui.ie)){c={top:0,left:0}
}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.currentItem.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var f=this.options;
if(f.containment=="parent"){f.containment=this.helper[0].parentNode
}if(f.containment=="document"||f.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(f.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(f.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(f.containment)){var d=a(f.containment)[0];
var e=a(f.containment).offset();
var c=(a(d).css("overflow")!="hidden");
this.containment=[e.left+(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0)-this.margins.top,e.left+(c?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(c?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(g,j){if(!j){j=this.position
}var e=g=="absolute"?1:-1;
var f=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(c[0].tagName);
return{top:(j.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(h?0:c.scrollTop()))*e)),left:(j.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:c.scrollLeft())*e))}
},_generatePosition:function(f){var j=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,k=(/(html|body)/i).test(c[0].tagName);
if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}var e=f.pageX;
var d=f.pageY;
if(this.originalPosition){if(this.containment){if(f.pageX-this.offset.click.left<this.containment[0]){e=this.containment[0]+this.offset.click.left
}if(f.pageY-this.offset.click.top<this.containment[1]){d=this.containment[1]+this.offset.click.top
}if(f.pageX-this.offset.click.left>this.containment[2]){e=this.containment[2]+this.offset.click.left
}if(f.pageY-this.offset.click.top>this.containment[3]){d=this.containment[3]+this.offset.click.top
}}if(j.grid){var h=this.originalPageY+Math.round((d-this.originalPageY)/j.grid[1])*j.grid[1];
d=this.containment?(!(h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3])?h:(!(h-this.offset.click.top<this.containment[1])?h-j.grid[1]:h+j.grid[1])):h;
var g=this.originalPageX+Math.round((e-this.originalPageX)/j.grid[0])*j.grid[0];
e=this.containment?(!(g-this.offset.click.left<this.containment[0]||g-this.offset.click.left>this.containment[2])?g:(!(g-this.offset.click.left<this.containment[0])?g-j.grid[0]:g+j.grid[0])):g
}}return{top:(d-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(k?0:c.scrollTop())))),left:(e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():k?0:c.scrollLeft())))}
},_rearrange:function(g,f,d,e){d?d[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var c=this.counter;
this._delay(function(){if(c==this.counter){this.refreshPositions(!e)
}})
},_clear:function(d,e){this.reverting=false;
var f=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]==this.currentItem[0]){for(var c in this._storedCSS){if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){this._storedCSS[c]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!e){f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){f.push(function(g){this._trigger("update",g,this._uiHash())
})
}if(this!==this.currentContainer){if(!e){f.push(function(g){this._trigger("remove",g,this._uiHash())
});
f.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))
}
}).call(this,this.currentContainer));
f.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}for(var c=this.containers.length-1;
c>=0;
c--){if(!e){f.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))
}
}).call(this,this.containers[c]))
}if(this.containers[c].containerCache.over){f.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))
}
}).call(this,this.containers[c]));
this.containers[c].containerCache.over=0
}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());
for(var c=0;
c<f.length;
c++){f[c].call(this,d)
}this._trigger("stop",d,this._uiHash())
}this.fromOutside=false;
return false
}if(!e){this._trigger("beforeStop",d,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!=this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!e){for(var c=0;
c<f.length;
c++){f[c].call(this,d)
}this._trigger("stop",d,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(a.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(c){var d=c||this;
return{helper:d.helper,placeholder:d.placeholder||a([]),position:d.position,originalPosition:d.originalPosition,offset:d.positionAbs,item:d.currentItem,sender:c?c.element:null}
}})
})(jQuery);
(function(b){function a(c){return function(){var d=this.element.val();
c.apply(this,arguments);
this._refresh();
if(d!==this.element.val()){this._trigger("change")
}}
}b.widget("ui.spinner",{version:"1.9.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
this._value(this.element.val(),true);
this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var c={},d=this.element;
b.each(["min","max","step"],function(e,f){var g=d.attr(f);
if(g!==undefined&&g.length){c[f]=g
}});
return c
},_events:{keydown:function(c){if(this._start(c)&&this._keydown(c)){c.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(c){if(this.cancelBlur){delete this.cancelBlur;
return
}this._refresh();
if(this.previous!==this.element.val()){this._trigger("change",c)
}},mousewheel:function(c,d){if(!d){return
}if(!this.spinning&&!this._start(c)){return false
}this._spin((d>0?1:-1)*this.options.step,c);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(c)
}},100);
c.preventDefault()
},"mousedown .ui-spinner-button":function(d){var c;
c=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();
function e(){var f=this.element[0]===this.document[0].activeElement;
if(!f){this.element.focus();
this.previous=c;
this._delay(function(){this.previous=c
})
}}d.preventDefault();
e.call(this);
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
e.call(this)
});
if(this._start(d)===false){return
}this._repeat(null,b(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(c){if(!b(c.currentTarget).hasClass("ui-state-active")){return
}if(this._start(c)===false){return false
}this._repeat(null,b(c.currentTarget).hasClass("ui-spinner-up")?1:-1,c)
},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var c=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton");
this.buttons=c.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");
if(this.buttons.height()>Math.ceil(c.height()*0.5)&&c.height()>0){c.height(c.height())
}if(this.options.disabled){this.disable()
}},_keydown:function(d){var c=this.options,e=b.ui.keyCode;
switch(d.keyCode){case e.UP:this._repeat(null,1,d);
return true;
case e.DOWN:this._repeat(null,-1,d);
return true;
case e.PAGE_UP:this._repeat(null,c.page,d);
return true;
case e.PAGE_DOWN:this._repeat(null,-c.page,d);
return true
}return false
},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"
},_start:function(c){if(!this.spinning&&this._trigger("start",c)===false){return false
}if(!this.counter){this.counter=1
}this.spinning=true;
return true
},_repeat:function(d,c,e){d=d||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){this._repeat(40,c,e)
},d);
this._spin(c*this.options.step,e)
},_spin:function(d,c){var e=this.value()||0;
if(!this.counter){this.counter=1
}e=this._adjustValue(e+d*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",c,{value:e})!==false){this._value(e);
this.counter++
}},_increment:function(c){var d=this.options.incremental;
if(d){return b.isFunction(d)?d(c):Math.floor(c*c*c/50000-c*c/500+17*c/200+1)
}return 1
},_precision:function(){var c=this._precisionOf(this.options.step);
if(this.options.min!==null){c=Math.max(c,this._precisionOf(this.options.min))
}return c
},_precisionOf:function(d){var e=d.toString(),c=e.indexOf(".");
return c===-1?0:e.length-c-1
},_adjustValue:function(e){var d,f,c=this.options;
d=c.min!==null?c.min:0;
f=e-d;
f=Math.round(f/c.step)*c.step;
e=d+f;
e=parseFloat(e.toFixed(this._precision()));
if(c.max!==null&&e>c.max){return c.max
}if(c.min!==null&&e<c.min){return c.min
}return e
},_stop:function(c){if(!this.spinning){return
}clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",c)
},_setOption:function(c,d){if(c==="culture"||c==="numberFormat"){var e=this._parse(this.element.val());
this.options[c]=d;
this.element.val(this._format(e));
return
}if(c==="max"||c==="min"||c==="step"){if(typeof d==="string"){d=this._parse(d)
}}this._super(c,d);
if(c==="disabled"){if(d){this.element.prop("disabled",true);
this.buttons.button("disable")
}else{this.element.prop("disabled",false);
this.buttons.button("enable")
}}},_setOptions:a(function(c){this._super(c);
this._value(this.element.val())
}),_parse:function(c){if(typeof c==="string"&&c!==""){c=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(c,10,this.options.culture):+c
}return c===""||isNaN(c)?null:c
},_format:function(c){if(c===""){return""
}return window.Globalize&&this.options.numberFormat?Globalize.format(c,this.options.numberFormat,this.options.culture):c
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},_value:function(e,c){var d;
if(e!==""){d=this._parse(e);
if(d!==null){if(!c){d=this._adjustValue(d)
}e=this._format(d)
}}this.element.val(e);
this._refresh()
},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.uiSpinner.replaceWith(this.element)
},stepUp:a(function(c){this._stepUp(c)
}),_stepUp:function(c){this._spin((c||1)*this.options.step)
},stepDown:a(function(c){this._stepDown(c)
}),_stepDown:function(c){this._spin((c||1)*-this.options.step)
},pageUp:a(function(c){this._stepUp((c||1)*this.options.page)
}),pageDown:a(function(c){this._stepDown((c||1)*this.options.page)
}),value:function(c){if(!arguments.length){return this._parse(this.element.val())
}a(this._value).call(this,c)
},widget:function(){return this.uiSpinner
}})
}(jQuery));
(function(c,e){var a=0,f=/#.*$/;
function d(){return ++a
}function b(g){return g.hash.length>1&&g.href.replace(f,"")===location.href.replace(f,"").replace(/\s/g,"%20")
}c.widget("ui.tabs",{version:"1.9.2",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var h=this,g=this.options,j=g.active,k=location.hash.substring(1);
this.running=false;
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",g.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(l){if(c(this).is(".ui-state-disabled")){l.preventDefault()
}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(c(this).closest("li").is(".ui-state-disabled")){this.blur()
}});
this._processTabs();
if(j===null){if(k){this.tabs.each(function(l,m){if(c(m).attr("aria-controls")===k){j=l;
return false
}})
}if(j===null){j=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(j===null||j===-1){j=this.tabs.length?0:false
}}if(j!==false){j=this.tabs.index(this.tabs.eq(j));
if(j===-1){j=g.collapsible?false:0
}}g.active=j;
if(!g.collapsible&&g.active===false&&this.anchors.length){g.active=0
}if(c.isArray(g.disabled)){g.disabled=c.unique(g.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"),function(l){return h.tabs.index(l)
}))).sort()
}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(this.options.active)
}else{this.active=c()
}this._refresh();
if(this.active.length){this.load(g.active)
}},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?c():this._getPanelForTab(this.active)}
},_tabKeydown:function(j){var h=c(this.document[0].activeElement).closest("li"),g=this.tabs.index(h),k=true;
if(this._handlePageNav(j)){return
}switch(j.keyCode){case c.ui.keyCode.RIGHT:case c.ui.keyCode.DOWN:g++;
break;
case c.ui.keyCode.UP:case c.ui.keyCode.LEFT:k=false;
g--;
break;
case c.ui.keyCode.END:g=this.anchors.length-1;
break;
case c.ui.keyCode.HOME:g=0;
break;
case c.ui.keyCode.SPACE:j.preventDefault();
clearTimeout(this.activating);
this._activate(g);
return;
case c.ui.keyCode.ENTER:j.preventDefault();
clearTimeout(this.activating);
this._activate(g===this.options.active?false:g);
return;
default:return
}j.preventDefault();
clearTimeout(this.activating);
g=this._focusNextTab(g,k);
if(!j.ctrlKey){h.attr("aria-selected","false");
this.tabs.eq(g).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",g)
},this.delay)
}},_panelKeydown:function(g){if(this._handlePageNav(g)){return
}if(g.ctrlKey&&g.keyCode===c.ui.keyCode.UP){g.preventDefault();
this.active.focus()
}},_handlePageNav:function(g){if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true
}if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true
}},_findNextTab:function(h,j){var g=this.tabs.length-1;
function k(){if(h>g){h=0
}if(h<0){h=g
}return h
}while(c.inArray(k(),this.options.disabled)!==-1){h=j?h+1:h-1
}return h
},_focusNextTab:function(g,h){g=this._findNextTab(g,h);
this.tabs.eq(g).focus();
return g
},_setOption:function(g,h){if(g==="active"){this._activate(h);
return
}if(g==="disabled"){this._setupDisabled(h);
return
}this._super(g,h);
if(g==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",h);
if(!h&&this.options.active===false){this._activate(0)
}}if(g==="event"){this._setupEvents(h)
}if(g==="heightStyle"){this._setupHeightStyle(h)
}},_tabId:function(g){return g.attr("aria-controls")||"ui-tabs-"+d()
},_sanitizeSelector:function(g){return g?g.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var h=this.options,g=this.tablist.children(":has(a[href])");
h.disabled=c.map(g.filter(".ui-state-disabled"),function(j){return g.index(j)
});
this._processTabs();
if(h.active===false||!this.anchors.length){h.active=false;
this.active=c()
}else{if(this.active.length&&!c.contains(this.tablist[0],this.active[0])){if(this.tabs.length===h.disabled.length){h.active=false;
this.active=c()
}else{this._activate(this._findNextTab(Math.max(0,h.active-1),false))
}}else{h.active=this.tabs.index(this.active)
}}this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)
}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})
}},_processTabs:function(){var g=this;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});
this.anchors=this.tabs.map(function(){return c("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});
this.panels=c();
this.anchors.each(function(n,l){var h,j,m,k=c(l).uniqueId().attr("id"),o=c(l).closest("li"),p=o.attr("aria-controls");
if(b(l)){h=l.hash;
j=g.element.find(g._sanitizeSelector(h))
}else{m=g._tabId(o);
h="#"+m;
j=g.element.find(h);
if(!j.length){j=g._createPanel(m);
j.insertAfter(g.panels[n-1]||g.tablist)
}j.attr("aria-live","polite")
}if(j.length){g.panels=g.panels.add(j)
}if(p){o.data("ui-tabs-aria-controls",p)
}o.attr({"aria-controls":h.substring(1),"aria-labelledby":k});
j.attr("aria-labelledby",k)
});
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.element.find("ol,ul").eq(0)
},_createPanel:function(g){return c("<div>").attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
},_setupDisabled:function(j){if(c.isArray(j)){if(!j.length){j=false
}else{if(j.length===this.anchors.length){j=true
}}}for(var h=0,g;
(g=this.tabs[h]);
h++){if(j===true||c.inArray(h,j)!==-1){c(g).addClass("ui-state-disabled").attr("aria-disabled","true")
}else{c(g).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}}this.options.disabled=j
},_setupEvents:function(h){var g={click:function(j){j.preventDefault()
}};
if(h){c.each(h.split(" "),function(k,j){g[j]="_eventHandler"
})
}this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(this.anchors,g);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs)
},_setupHeightStyle:function(g){var j,k,h=this.element.parent();
if(g==="fill"){if(!c.support.minHeight){k=h.css("overflow");
h.css("overflow","hidden")
}j=h.height();
this.element.siblings(":visible").each(function(){var m=c(this),l=m.css("position");
if(l==="absolute"||l==="fixed"){return
}j-=m.outerHeight(true)
});
if(k){h.css("overflow",k)
}this.element.children().not(this.panels).each(function(){j-=c(this).outerHeight(true)
});
this.panels.each(function(){c(this).height(Math.max(0,j-c(this).innerHeight()+c(this).height()))
}).css("overflow","auto")
}else{if(g==="auto"){j=0;
this.panels.each(function(){j=Math.max(j,c(this).height("").height())
}).height(j)
}}},_eventHandler:function(g){var q=this.options,l=this.active,m=c(g.currentTarget),k=m.closest("li"),o=k[0]===l[0],h=o&&q.collapsible,j=h?c():this._getPanelForTab(k),n=!l.length?c():this._getPanelForTab(l),p={oldTab:l,oldPanel:n,newTab:h?c():k,newPanel:j};
g.preventDefault();
if(k.hasClass("ui-state-disabled")||k.hasClass("ui-tabs-loading")||this.running||(o&&!q.collapsible)||(this._trigger("beforeActivate",g,p)===false)){return
}q.active=h?false:this.tabs.index(k);
this.active=o?c():k;
if(this.xhr){this.xhr.abort()
}if(!n.length&&!j.length){c.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(j.length){this.load(this.tabs.index(k),g)
}this._toggle(g,p)
},_toggle:function(n,m){var l=this,g=m.newPanel,k=m.oldPanel;
this.running=true;
function j(){l.running=false;
l._trigger("activate",n,m)
}function h(){m.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(g.length&&l.options.show){l._show(g,l.options.show,j)
}else{g.show();
j()
}}if(k.length&&this.options.hide){this._hide(k,this.options.hide,function(){m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
h()
})
}else{m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
k.hide();
h()
}k.attr({"aria-expanded":"false","aria-hidden":"true"});
m.oldTab.attr("aria-selected","false");
if(g.length&&k.length){m.oldTab.attr("tabIndex",-1)
}else{if(g.length){this.tabs.filter(function(){return c(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}g.attr({"aria-expanded":"true","aria-hidden":"false"});
m.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(h){var g,j=this._findActive(h);
if(j[0]===this.active[0]){return
}if(!j.length){j=this.active
}g=j.find(".ui-tabs-anchor")[0];
this._eventHandler({target:g,currentTarget:g,preventDefault:c.noop})
},_findActive:function(g){return g===false?c():this.tabs.eq(g)
},_getIndex:function(g){if(typeof g==="string"){g=this.anchors.index(this.anchors.filter("[href$='"+g+"']"))
}return g
},_destroy:function(){if(this.xhr){this.xhr.abort()
}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(c.data(this,"ui-tabs-destroy")){c(this).remove()
}else{c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}});
this.tabs.each(function(){var g=c(this),h=g.data("ui-tabs-aria-controls");
if(h){g.attr("aria-controls",h)
}else{g.removeAttr("aria-controls")
}});
this.panels.show();
if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(g){var h=this.options.disabled;
if(h===false){return
}if(g===e){h=false
}else{g=this._getIndex(g);
if(c.isArray(h)){h=c.map(h,function(j){return j!==g?j:null
})
}else{h=c.map(this.tabs,function(j,k){return k!==g?k:null
})
}}this._setupDisabled(h)
},disable:function(g){var h=this.options.disabled;
if(h===true){return
}if(g===e){h=true
}else{g=this._getIndex(g);
if(c.inArray(g,h)!==-1){return
}if(c.isArray(h)){h=c.merge([g],h).sort()
}else{h=[g]
}}this._setupDisabled(h)
},load:function(j,n){j=this._getIndex(j);
var m=this,k=this.tabs.eq(j),h=k.find(".ui-tabs-anchor"),g=this._getPanelForTab(k),l={tab:k,panel:g};
if(b(h[0])){return
}this.xhr=c.ajax(this._ajaxSettings(h,n,l));
if(this.xhr&&this.xhr.statusText!=="canceled"){k.addClass("ui-tabs-loading");
g.attr("aria-busy","true");
this.xhr.success(function(o){setTimeout(function(){g.html(o);
m._trigger("load",n,l)
},1)
}).complete(function(p,o){setTimeout(function(){if(o==="abort"){m.panels.stop(false,true)
}k.removeClass("ui-tabs-loading");
g.removeAttr("aria-busy");
if(p===m.xhr){delete m.xhr
}},1)
})
}},_ajaxSettings:function(g,k,j){var h=this;
return{url:g.attr("href"),beforeSend:function(m,l){return h._trigger("beforeLoad",k,c.extend({jqXHR:m,ajaxSettings:l},j))
}}
},_getPanelForTab:function(g){var h=c(g).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+h))
}});
if(c.uiBackCompat!==false){c.ui.tabs.prototype._ui=function(h,g){return{tab:h,panel:g,index:this.anchors.index(h)}
};
c.widget("ui.tabs",c.ui.tabs,{url:function(h,g){this.anchors.eq(h).attr("href",g)
}});
c.widget("ui.tabs",c.ui.tabs,{options:{ajaxOptions:null,cache:false},_create:function(){this._super();
var g=this;
this._on({tabsbeforeload:function(h,j){if(c.data(j.tab[0],"cache.tabs")){h.preventDefault();
return
}j.jqXHR.success(function(){if(g.options.cache){c.data(j.tab[0],"cache.tabs",true)
}})
}})
},_ajaxSettings:function(h,j,k){var g=this.options.ajaxOptions;
return c.extend({},g,{error:function(n,l){try{g.error(n,l,k.tab.closest("li").index(),k.tab[0])
}catch(m){}}},this._superApply(arguments))
},_setOption:function(g,h){if(g==="cache"&&h===false){this.anchors.removeData("cache.tabs")
}this._super(g,h)
},_destroy:function(){this.anchors.removeData("cache.tabs");
this._super()
},url:function(g){this.anchors.eq(g).removeData("cache.tabs");
this._superApply(arguments)
}});
c.widget("ui.tabs",c.ui.tabs,{abort:function(){if(this.xhr){this.xhr.abort()
}}});
c.widget("ui.tabs",c.ui.tabs,{options:{spinner:"<em>Loading&#8230;</em>"},_create:function(){this._super();
this._on({tabsbeforeload:function(j,k){if(j.target!==this.element[0]||!this.options.spinner){return
}var h=k.tab.find("span"),g=h.html();
h.html(this.options.spinner);
k.jqXHR.complete(function(){h.html(g)
})
}})
}});
c.widget("ui.tabs",c.ui.tabs,{options:{enable:null,disable:null},enable:function(j){var h=this.options,g;
if(j&&h.disabled===true||(c.isArray(h.disabled)&&c.inArray(j,h.disabled)!==-1)){g=true
}this._superApply(arguments);
if(g){this._trigger("enable",null,this._ui(this.anchors[j],this.panels[j]))
}},disable:function(j){var h=this.options,g;
if(j&&h.disabled===false||(c.isArray(h.disabled)&&c.inArray(j,h.disabled)===-1)){g=true
}this._superApply(arguments);
if(g){this._trigger("disable",null,this._ui(this.anchors[j],this.panels[j]))
}}});
c.widget("ui.tabs",c.ui.tabs,{options:{add:null,remove:null,tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},add:function(m,l,k){if(k===e){k=this.anchors.length
}var n,h,j=this.options,g=c(j.tabTemplate.replace(/#\{href\}/g,m).replace(/#\{label\}/g,l)),o=!m.indexOf("#")?m.replace("#",""):this._tabId(g);
g.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy",true);
g.attr("aria-controls",o);
n=k>=this.tabs.length;
h=this.element.find("#"+o);
if(!h.length){h=this._createPanel(o);
if(n){if(k>0){h.insertAfter(this.panels.eq(-1))
}else{h.appendTo(this.element)
}}else{h.insertBefore(this.panels[k])
}}h.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide();
if(n){g.appendTo(this.tablist)
}else{g.insertBefore(this.tabs[k])
}j.disabled=c.map(j.disabled,function(p){return p>=k?++p:p
});
this.refresh();
if(this.tabs.length===1&&j.active===false){this.option("active",0)
}this._trigger("add",null,this._ui(this.anchors[k],this.panels[k]));
return this
},remove:function(j){j=this._getIndex(j);
var h=this.options,k=this.tabs.eq(j).remove(),g=this._getPanelForTab(k).remove();
if(k.hasClass("ui-tabs-active")&&this.anchors.length>2){this._activate(j+(j+1<this.anchors.length?1:-1))
}h.disabled=c.map(c.grep(h.disabled,function(l){return l!==j
}),function(l){return l>=j?--l:l
});
this.refresh();
this._trigger("remove",null,this._ui(k.find("a")[0],g[0]));
return this
}});
c.widget("ui.tabs",c.ui.tabs,{length:function(){return this.anchors.length
}});
c.widget("ui.tabs",c.ui.tabs,{options:{idPrefix:"ui-tabs-"},_tabId:function(h){var g=h.is("li")?h.find("a[href]"):h;
g=g[0];
return c(g).closest("li").attr("aria-controls")||g.title&&g.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF\-]/g,"")||this.options.idPrefix+d()
}});
c.widget("ui.tabs",c.ui.tabs,{options:{panelTemplate:"<div></div>"},_createPanel:function(g){return c(this.options.panelTemplate).attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
}});
c.widget("ui.tabs",c.ui.tabs,{_create:function(){var g=this.options;
if(g.active===null&&g.selected!==e){g.active=g.selected===-1?false:g.selected
}this._super();
g.selected=g.active;
if(g.selected===false){g.selected=-1
}},_setOption:function(h,j){if(h!=="selected"){return this._super(h,j)
}var g=this.options;
this._super("active",j===-1?false:j);
g.selected=g.active;
if(g.selected===false){g.selected=-1
}},_eventHandler:function(){this._superApply(arguments);
this.options.selected=this.options.active;
if(this.options.selected===false){this.options.selected=-1
}}});
c.widget("ui.tabs",c.ui.tabs,{options:{show:null,select:null},_create:function(){this._super();
if(this.options.active!==false){this._trigger("show",null,this._ui(this.active.find(".ui-tabs-anchor")[0],this._getPanelForTab(this.active)[0]))
}},_trigger:function(k,l,m){var j,g,h=this._superApply(arguments);
if(!h){return false
}if(k==="beforeActivate"){j=m.newTab.length?m.newTab:m.oldTab;
g=m.newPanel.length?m.newPanel:m.oldPanel;
h=this._super("select",l,{tab:j.find(".ui-tabs-anchor")[0],panel:g[0],index:j.closest("li").index()})
}else{if(k==="activate"&&m.newTab.length){h=this._super("show",l,{tab:m.newTab.find(".ui-tabs-anchor")[0],panel:m.newPanel[0],index:m.newTab.closest("li").index()})
}}return h
}});
c.widget("ui.tabs",c.ui.tabs,{select:function(g){g=this._getIndex(g);
if(g===-1){if(this.options.collapsible&&this.options.selected!==-1){g=this.options.selected
}else{return
}}this.anchors.eq(g).trigger(this.options.event+this.eventNamespace)
}});
(function(){var g=0;
c.widget("ui.tabs",c.ui.tabs,{options:{cookie:null},_create:function(){var h=this.options,j;
if(h.active==null&&h.cookie){j=parseInt(this._cookie(),10);
if(j===-1){j=false
}h.active=j
}this._super()
},_cookie:function(j){var h=[this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+(++g))];
if(arguments.length){h.push(j===false?-1:j);
h.push(this.options.cookie)
}return c.cookie.apply(null,h)
},_refresh:function(){this._super();
if(this.options.cookie){this._cookie(this.options.active,this.options.cookie)
}},_eventHandler:function(){this._superApply(arguments);
if(this.options.cookie){this._cookie(this.options.active,this.options.cookie)
}},_destroy:function(){this._super();
if(this.options.cookie){this._cookie(null,this.options.cookie)
}}})
})();
c.widget("ui.tabs",c.ui.tabs,{_trigger:function(h,j,k){var g=c.extend({},k);
if(h==="load"){g.panel=g.panel[0];
g.tab=g.tab.find(".ui-tabs-anchor")[0]
}return this._super(h,j,g)
}});
c.widget("ui.tabs",c.ui.tabs,{options:{fx:null},_getFx:function(){var h,g,j=this.options.fx;
if(j){if(c.isArray(j)){h=j[0];
g=j[1]
}else{h=g=j
}}return j?{show:g,hide:h}:null
},_toggle:function(o,n){var m=this,g=n.newPanel,k=n.oldPanel,l=this._getFx();
if(!l){return this._super(o,n)
}m.running=true;
function j(){m.running=false;
m._trigger("activate",o,n)
}function h(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(g.length&&l.show){g.animate(l.show,l.show.duration,function(){j()
})
}else{g.show();
j()
}}if(k.length&&l.hide){k.animate(l.hide,l.hide.duration,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
h()
})
}else{n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
k.hide();
h()
}}})
}})(jQuery);
(function(d){var b=0;
function c(f,g){var e=(f.attr("aria-describedby")||"").split(/\s+/);
e.push(g);
f.data("ui-tooltip-id",g).attr("aria-describedby",d.trim(e.join(" ")))
}function a(g){var h=g.data("ui-tooltip-id"),f=(g.attr("aria-describedby")||"").split(/\s+/),e=d.inArray(h,f);
if(e!==-1){f.splice(e,1)
}g.removeData("ui-tooltip-id");
f=d.trim(f.join(" "));
if(f){g.attr("aria-describedby",f)
}else{g.removeAttr("aria-describedby")
}}d.widget("ui.tooltip",{version:"1.9.2",options:{content:function(){var e=d(this).attr("title");
return d("<a>").text(e).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
if(this.options.disabled){this._disable()
}},_setOption:function(e,g){var f=this;
if(e==="disabled"){this[g?"_disable":"_enable"]();
this.options[e]=g;
return
}this._super(e,g);
if(e==="content"){d.each(this.tooltips,function(j,h){f._updateContent(h)
})
}},_disable:function(){var e=this;
d.each(this.tooltips,function(h,f){var g=d.Event("blur");
g.target=g.currentTarget=f[0];
e.close(g,true)
});
this.element.find(this.options.items).andSelf().each(function(){var f=d(this);
if(f.is("[title]")){f.data("ui-tooltip-title",f.attr("title")).attr("title","")
}})
},_enable:function(){this.element.find(this.options.items).andSelf().each(function(){var e=d(this);
if(e.data("ui-tooltip-title")){e.attr("title",e.data("ui-tooltip-title"))
}})
},open:function(f){var e=this,g=d(f?f.target:this.element).closest(this.options.items);
if(!g.length||g.data("ui-tooltip-id")){return
}if(g.attr("title")){g.data("ui-tooltip-title",g.attr("title"))
}g.data("ui-tooltip-open",true);
if(f&&f.type==="mouseover"){g.parents().each(function(){var j=d(this),h;
if(j.data("ui-tooltip-open")){h=d.Event("blur");
h.target=h.currentTarget=this;
e.close(h,true)
}if(j.attr("title")){j.uniqueId();
e.parents[this.id]={element:this,title:j.attr("title")};
j.attr("title","")
}})
}this._updateContent(g,f)
},_updateContent:function(k,j){var h,e=this.options.content,g=this,f=j?j.type:null;
if(typeof e==="string"){return this._open(j,k,e)
}h=e.call(k[0],function(l){if(!k.data("ui-tooltip-open")){return
}g._delay(function(){if(j){j.type=f
}this._open(j,k,l)
})
});
if(h){this._open(j,k,h)
}},_open:function(j,l,h){var k,g,f,m=d.extend({},this.options.position);
if(!h){return
}k=this._find(l);
if(k.length){k.find(".ui-tooltip-content").html(h);
return
}if(l.is("[title]")){if(j&&j.type==="mouseover"){l.attr("title","")
}else{l.removeAttr("title")
}}k=this._tooltip(l);
c(l,k.attr("id"));
k.find(".ui-tooltip-content").html(h);
function e(n){m.of=n;
if(k.is(":hidden")){return
}k.position(m)
}if(this.options.track&&j&&/^mouse/.test(j.type)){this._on(this.document,{mousemove:e});
e(j)
}else{k.position(d.extend({of:l},this.options.position))
}k.hide();
this._show(k,this.options.show);
if(this.options.show&&this.options.show.delay){f=setInterval(function(){if(k.is(":visible")){e(m.of);
clearInterval(f)
}},d.fx.interval)
}this._trigger("open",j,{tooltip:k});
g={keyup:function(n){if(n.keyCode===d.ui.keyCode.ESCAPE){var o=d.Event(n);
o.currentTarget=l[0];
this.close(o,true)
}},remove:function(){this._removeTooltip(k)
}};
if(!j||j.type==="mouseover"){g.mouseleave="close"
}if(!j||j.type==="focusin"){g.focusout="close"
}this._on(true,l,g)
},close:function(f){var e=this,h=d(f?f.currentTarget:this.element),g=this._find(h);
if(this.closing){return
}if(h.data("ui-tooltip-title")){h.attr("title",h.data("ui-tooltip-title"))
}a(h);
g.stop(true);
this._hide(g,this.options.hide,function(){e._removeTooltip(d(this))
});
h.removeData("ui-tooltip-open");
this._off(h,"mouseleave focusout keyup");
if(h[0]!==this.element[0]){this._off(h,"remove")
}this._off(this.document,"mousemove");
if(f&&f.type==="mouseleave"){d.each(this.parents,function(k,j){d(j.element).attr("title",j.title);
delete e.parents[k]
})
}this.closing=true;
this._trigger("close",f,{tooltip:g});
this.closing=false
},_tooltip:function(e){var g="ui-tooltip-"+b++,f=d("<div>").attr({id:g,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
d("<div>").addClass("ui-tooltip-content").appendTo(f);
f.appendTo(this.document[0].body);
if(d.fn.bgiframe){f.bgiframe()
}this.tooltips[g]=e;
return f
},_find:function(e){var f=e.data("ui-tooltip-id");
return f?d("#"+f):d()
},_removeTooltip:function(e){e.remove();
delete this.tooltips[e.attr("id")]
},_destroy:function(){var e=this;
d.each(this.tooltips,function(h,f){var g=d.Event("blur");
g.target=g.currentTarget=f[0];
e.close(g,true);
d("#"+h).remove();
if(f.data("ui-tooltip-title")){f.attr("title",f.data("ui-tooltip-title"));
f.removeData("ui-tooltip-title")
}})
}})
}(jQuery));
(function(d){d.widget("ui.widget",{yield:null,returnValues:{},before:function(h,g){var e=this[h];
this[h]=function(){g.apply(this,arguments);
return e.apply(this,arguments)
}
},after:function(h,g){var e=this[h];
this[h]=function(){this.returnValues[h]=e.apply(this,arguments);
return g.apply(this,arguments)
}
},around:function(h,g){var e=this[h];
this[h]=function(){var j=this["yield"];
this["yield"]=e;
var f=g.apply(this,arguments);
this["yield"]=j;
return f
}
}});
var c=(function(e){return(function(f){e.prototype=f;
return new e()
})
})(function(){});
var a=/xyz/.test(function(){xyz
})?/\b_super\b/:/.*/;
d.ui.widget.subclass=function b(f){d.widget(f);
f=f.split(".");
var g=d[f[0]][f[1]],l=this,e=l.prototype;
var h=arguments[0]=g.prototype=c(e);
d.extend.apply(null,arguments);
g.subclass=b;
for(key in h){if(h.hasOwnProperty(key)){switch(key){case"_create":var j=h._create;
h._create=function(){e._create.apply(this);
j.apply(this)
};
break;
case"_init":var m=h._init;
h._init=function(){e._init.apply(this);
m.apply(this)
};
break;
case"destroy":var k=h.destroy;
h.destroy=function(){k.apply(this);
e.destroy.apply(this)
};
break;
case"options":var n=h.options;
h.options=d.extend({},e.options,n);
break;
default:if(d.isFunction(h[key])&&d.isFunction(e[key])&&a.test(h[key])){h[key]=(function(o,p){return function(){var r=this._super;
this._super=e[o];
try{var q=p.apply(this,arguments)
}finally{this._super=r
}return q
}
})(key,h[key])
}break
}}}}
})(jQuery);
(function(d){d("body").prepend('<div class="user-in"></div>');
d(".user-in").hide();
var f;
var m;
d(".btn-transparent").hover(function(){var o=d(this).closest(".container").parent(),n=o.css("background-color");
f=d(this).css("color");
m=d(this).css("background-color");
d(this).css({color:n,"background-color":"white","text-decoration":"none"})
},function(){d(this).css({color:f,"background-color":"transparent","text-decoration":"none"})
});
d(document).on("click",".user-sign",function(n){d(".my-aacount").toggle();
d(this).toggleClass("active");
d(".user-in").toggle()
});
d(document).on("click",".user-in",function(){d(".my-aacount").toggle();
d(".user-sign").toggleClass("active");
d(".user-in").hide()
});
if(d(window).width()<992){var h="<ul class='utilitylinks'>";
d("#util-left a").each(function(o){var n=d(this).text();
var p=d(this).attr("href");
if(!p){p="#"
}h+="<li class='main-menu-item'><a href="+p+">"+n+"</a></li>"
});
d(".header_menu_0 .panel-collapse").html(h)
}d("img.svg").each(function(){var q=d(this),o=q.attr("id"),p=q.attr("class"),n=q.attr("src");
jQuery.get(n,function(s){var r=d(s).find("svg");
if(typeof o!=="undefined"){r=r.attr("id",o)
}if(typeof p!=="undefined"){r=r.attr("class",p+" replaced-svg")
}r=r.removeAttr("xmlns:a");
q.replaceWith(r)
},"xml")
});
var k;
d(".top-of-page-link a").hover(function(){var o=d(this).parent().find("svg path");
k=o.css("fill");
var n=d(this).css("color");
o.css("fill",n)
},function(){var n=d(this).find("svg path");
n.css("fill",k)
});
d(window).on("resize",function(){d(".user-in").hide();
d(".user-sign").removeClass("active");
d(".my-aacount").hide();
a();
if(d(window).width()<768&&d(".banner-text-image").length>0){d(".banner-text-image .banner-text-content .content").css({"padding-top":0,"padding-bottom":0})
}});
d.fn.vAlign=function(){return this.each(function(p){var q=d(this).height();
var o=d(this).parent().height();
var n=Math.ceil((o-q)/2);
d(this).css("padding-top",n)
})
};
setTimeout(b,500);
d(".vAlign").vAlign();
function b(){d(".column-height .content").vAlign()
}d(".close-icon").click(function(){d(".service-banner").toggle()
});
if(d(".service-banner").length>0){d(".service-banner").each(function(n){var o=d(this).find("span").css("color");
d(this).find(".close-icon a").css("color",o)
})
}if(d(".right-slider-block .carousel").length>0){d(".right-slider-block .carousel").each(function(n){var o=d(this).find(".item").length;
if(o<=1){d(this).find(".left").addClass("deactive");
d(this).find(".right").addClass("deactive")
}else{d(this).find(".left").addClass("deactive");
d(this).on("slid.bs.carousel",function(q){var p=d(this).find(".active");
if(p.is(":first-child")){d(this).find(".left").addClass("deactive");
d(this).find(".right").removeClass("deactive");
return
}else{}if(p.is(":last-child")){d(this).find(".right").addClass("deactive");
d(this).find(".left").removeClass("deactive");
return
}else{}})
}})
}function a(){if(d(".banner-text-image").length>0&&d(window).width()>767){d(".banner-text-image").each(function(){var n=d(this).find(".content").height();
var o=d(this).find("img").height();
if(o>n){var p=(o-n)/2;
d(this).find(".content").css("padding-top",p)
}else{d(this).find(".content").css({"padding-top":"10px","padding-bottom":"10px"})
}})
}}a();
d("#global-benifit-form").submit(function(q){var o=d(this).find(".slctr-lt .dropdown_title").text();
var n=d(this).find(".slctr-rt .dropdown_title").text();
if(o!="By Career Phase"||n!="By Country"){if(n=="by country"||n=="By Country"){n="All"
}else{var p=d(this).find(".slctr-rt ul li a:contains("+n+")").attr("data-value");
if(n){n=p
}}d("#byCareerPhase").val(o);
d("#byCountry").val(n)
}else{return false
}});
if(d(".global-benefits-finder").length>0){d(".global-benefits-finder").each(function(){var o=d(this).find(".dropdown-menu:first").height();
var n=d(this).find(".dropdown-menu:last").height();
if(o>200){d(this).find(".dropdown-menu:first").css({"max-height":200,"overflow-y":"scroll"})
}if(n>200){d(this).find(".dropdown-menu:last").css({"max-height":200,"overflow-y":"scroll"})
}});
d.urlParam=function(n){var o=new RegExp("[?&]"+n+"=([^&#]*)").exec(window.location.href);
if(o==null){return null
}else{return decodeURI(o[1])||0
}};
var c=d.urlParam("byCountry");
var l=d.urlParam("byCareerPhase");
if(c&&l){var j=l.replace(/\+/g," ");
d(".slctr-lt ul li a:contains("+j+")").parent().parent().find("i").removeClass("selected");
d(".slctr-lt ul li a:contains("+j+")").parent().find("i").addClass("selected");
var e=d(".slctr-rt ul li").find('a[data-value="'+c+'"]').text();
d(".slctr-rt .dropdown_title").text(e);
d(".slctr-rt ul li a:contains("+e+")").parent().parent().find("i").removeClass("selected");
d(".slctr-rt ul li a:contains("+e+")").parent().find("i").addClass("selected")
}}d(".jump-links .link-list").each(function(){d(".more").hide();
if(d(".jump-links .link-list li").length>10){d("li",this).eq(9).nextAll().hide().addClass("toggleable");
d(".more").show();
d(this).append('<a class="more" href="javascript:void(0)">Show more...</a>')
}d(this).on("click",".more",g)
});
function g(){var n=d(this).hasClass("less");
d(this).text(n?"Show more...":"Hide more...").toggleClass("less",!n);
d(this).siblings("li.toggleable").slideToggle()
}d("#userSubscriptionForm").submit(function(p){p.preventDefault();
var o=d(".email-feild").val();
var q=d(".from-feilds .error-message");
if(o!=""){if(!n(o)){q.fadeIn();
d(".thanks-page").addClass("hidden");
d(".subscribe-form").removeClass("hidden")
}else{var r=d("#userSubscriptionServlet").val().concat("?userEmail=").concat(d(".email-feild").val()).concat("&currentPage=").concat(d("#currentPage").val());
d.ajax({url:r}).done(function(s){q.fadeOut();
d(".thanks-page").removeClass("hidden");
d(".subscribe-form").addClass("hidden")
}).fail(function(s){d(".thanks-page").addClass("hidden");
d(".subscribe-form").removeClass("hidden");
q.text("Oops! An error occured and your subscription is unsucessful.");
q.fadeIn()
})
}}else{q.fadeIn();
d(".thanks-page").addClass("hidden");
d(".subscribe-form").removeClass("hidden")
}function n(s){var u=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
return u.test(s)
}});
d("body").on("click",".subscribe-widget-modal.title",function(n){d(".thanks-page").addClass("hidden");
d(".subscribe-form").removeClass("hidden");
d(".email-feild").val("");
n.preventDefault()
})
})(this.jQuery);
(function(d){d(".link-extract").next().hide();
d(".vertical-navigation .link-extract").click(function(){if(window.innerWidth>767){d(this).next().slideToggle("10",function(){s.animate({},10,function(){r=d(".vertical-subhead-content").height()+parseInt(d(".vertical-subhead-content").css("margin-bottom"));
a()
})
});
d(this).find("i").toggleClass("fa-plus fa-minus")
}else{d(this).next().slideToggle("10");
d(this).find("i").toggleClass("fa-plus fa-minus")
}});
d(".vertical-subhead-content").children(0).css("margin-top","0");
var v=false;
var q=500;
var p,j=d(".sub-nav-section-head"),s=d(".sub-nav-section"),e=d(".rte-section"),o=d(".jump-link-section"),l=d(".dd-section"),u;
if(o.length!=0){u=65.232
}else{u=100
}function k(){if(window.innerWidth>767){e.css("width",u+"%")
}else{e.css("width","100%")
}}k();
d(j).on("click",function(){d(".sub-nav-section-head .vertical-subhead").toggleClass("arrow-down");
if(window.innerWidth>767){var y;
var x;
s.height(r);
if(o.length!=0){y=65.232;
x=42.054
}else{y=100;
if(window.innerWidth>767&&window.innerWidth<991){x=75.634
}else{x=76.777
}}if(v){s.finish().animate({width:"0%","padding-left":"0","margin-right":"0",height:0},q*0.33,function(){s.hide()
});
e.finish().animate({width:y+"%"},q*0.77,function(){a()
});
d(".sub-nav-section-head .vertical-subhead").toggleClass("border-rt")
}else{s.finish().animate({width:"18.875%","margin-right":"30px"},q*0.77,function(){s.show();
s.css("height","auto");
a();
d(".sub-nav-section-head .vertical-subhead").toggleClass("border-rt")
});
e.finish().animate({width:x+"%"},q*0.33)
}v=!v
}else{s.slideToggle(function(){if(d(this).height>0){d(this).height(0)
}else{d(this).height("100%")
}})
}});
if(window.innerWidth>767){s.css("width","18.875%");
var r=s.height()+2+parseInt(d(".vertical-subhead-content").css("margin-bottom"));
s.css("height",r);
s.width(0);
s.height(0)
}else{s.css("width","100%");
s.css("display","none")
}var b,m,n,g,h,c=[],f=[],w;
function a(){c=[];
b=d(".sub-nav-section-head").height();
m=r;
n=d(".rte-section").outerHeight();
g=d(".jump-link-section").height();
if(g!=null){g+parseInt(d(".jump-link-section").css("margin-top"))
}h=d(".dd-section").height();
c=[m,n,g];
f=[d(".sub-nav-section"),d(".rte-section"),d(".jump-link-section")];
sectClassArr=[".sub-nav-section",".rte-section",".jump-link-section"];
w=c.indexOf(Math.max.apply(null,c));
var x;
if(v){switch(w){case 0:c.splice(w,1);
f.splice(w,1);
x=c.indexOf(Math.max.apply(null,c));
if(o.length){if(x==0){diff=(m)-(c[0]);
if(diff>h){d(".dd-section").animate({width:"76.777%"})
}else{d(".dd-section").animate({width:"100%"})
}}else{if(x==1){diff=(c[1])-(c[0]);
diff1=(m)-(c[1]);
if(diff>=h){d(".dd-section").animate({width:"42.054%"})
}else{if(diff1>=h){d(".dd-section").animate({width:"76.777%"})
}else{d(".dd-section").animate({width:"100%"})
}}}else{diff=(c[1])-(c[0]);
if(diff>=h){d(".dd-section").animate({width:"65.232%"})
}else{d(".dd-section").animate({width:"100%"})
}}}}else{diff=(m)-(c[0]);
if(diff>=h){d(".dd-section").animate({width:"76.777%"})
}else{d(".dd-section").animate({width:"100%"})
}}break;
case 1:c.splice(w,1);
x=c.indexOf(Math.max.apply(null,c));
d(".dd-section").css({width:"100%"});
break;
case 2:c.splice(w,1);
x=c.indexOf(Math.max.apply(null,c));
if(x==0){diff=c[0]-c[1];
diff2=g-c[0];
if(diff>=h){d(".dd-section").animate({width:"42.054%"})
}else{if(diff2>=h){d(".dd-section").animate({width:"65.232%"})
}else{d(".dd-section").animate({width:"100%"})
}}}else{if(x==1){diff2=g-c[0];
if(diff2>=h){d(".dd-section").animate({width:"65.232%"})
}else{d(".dd-section").animate({width:"100%"})
}}}break
}}else{if(o.length){c.splice(0,1);
f.splice(0,1);
x=c.indexOf(Math.max.apply(null,c));
if(x==0){d(".dd-section").animate({width:"100%"})
}else{diff=(c[1])-(c[0]+parseInt(f[0].css("margin-top")));
if(diff>=h){d(".dd-section").animate({width:"65.232%"})
}else{d(".dd-section").animate({width:"100%"})
}}}else{d(".dd-section").animate({width:"100%"})
}}}if(window.innerWidth>767){a()
}d(".sect-main").bind("DOMNodeInserted DOMNodeRemoved",function(){if(window.innerWidth>767){a()
}});
d(window).on("resize",function(){if(window.innerWidth>767){setTimeout(a,500)
}})
})(jQuery);
(function(e){var b=false;
e(".dd-section-drpdown .dropdown-selector li").on("click",function(f){b=false;
if(e(this).closest(".dd-section-drpdown")){if(window.innerWidth>=768){f.preventDefault()
}}e(this).parent().siblings(".dropdown_title").html(e(this).find("a").html());
e(".dd-section-btn .btn-style").attr({href:"",target:""});
if(e(this).closest(".dd-section-drpdown")){e(".dd-section-btn .btn-style").attr({href:e(this).find("a").attr("href"),target:e(this).find("a").attr("target")})
}e(this).parent().find("i").removeClass("selected");
e(this).find("i").addClass("selected")
});
var a=e(".dd-section-title .dropdown-header").text();
var d=e(".dd-section-drpdown .dropdown_title").text();
function c(){var h=e(".dd-section-drpdown").attr("id");
var f=e(h).find(".dropdown_title");
var g=e(h).find("ul#dropdown-selector").find("li:first");
if(window.innerWidth<768){g.hide();
f.text(a)
}else{g.show();
f.text(d)
}}c();
e(".dd-section-btn .btn-style").on("click",function(f){if(b){f.preventDefault()
}c();
b=true
});
e(window).on("resize",function(){c()
})
})(jQuery);
(function(c){var a=c("#editmode").val();
var b=c("#panel-slide-interval-time").val();
if(a==undefined||a==""){if(c(".panel-carousel")!=undefined||c(".panel-carousel").length>0){c(".panel-carousel").carousel({interval:b,pause:false});
c(document).on("click",".carousel-indicators",function(){var d=c(this).parent().parent().parent().attr("id");
c("#"+d).carousel("pause")
})
}}})(jQuery);
$(function(){if($(".image-link-slider ").length>0){$(".image-link-slider ").each(function(){var b,l;
var j=$(this).find("#img-link-color-code").val();
$(this).css({"border-color":j});
$(this).find(".slider-arrowL").css("background-color","#e5e5e5");
$(this).find(".slider-arrowR").css("background-color",j);
$(this).find(".slider-arrowL").addClass("in-active");
var c,g;
if($(window).width()<768){if($(this).find(".slider-item").length<=1){$(this).find(".comp-slider-indicators").hide()
}c=30;
g=1;
l=200
}else{if($(window).width()<992){if($(this).find(".slider-item").length<=3){$(this).find(".comp-slider-indicators").hide()
}c=20;
g=3;
l=150
}else{if($(this).find(".slider-item").length<=4){$(this).find(".comp-slider-indicators").hide()
}c=20.6;
g=4;
l=150
}}if($(window).width()>991&&$(this).outerWidth()==940){if($(this).find(".slider-item").length<=5){$(this).find(".comp-slider-indicators").hide()
}c=30;
g=5;
$(this).find(".slider-item").css("margin-right",28.4)
}if($(window).width()==768&&$(this).outerWidth()==738){if($(this).find(".slider-item").length<=4){$(this).find(".comp-slider-indicators").hide()
}c=33.5;
g=4;
$(this).find(".slider-item").css("margin-right",15)
}var k=$(this).find(".slider-arrowL").width()+c;
var o="0px "+k+"px";
$(this).css({padding:o});
$(this).find(".comp-slider-indicators").css({"margin-left":-k});
$(this).find(".pagetitle").css({"margin-left":-k,"margin-right":-k,"background-color":j});
$(this).find(".slider-item").css({"background-color":j});
if($(window).width()<768&&$(window).width()>320){var n=200;
var a=($(this).find(".list-items-container").width()-n)/2;
$(this).find(".list-items-container").css({"margin-left":a,"margin-right":a})
}if($(window).width()>767&&$(this).find(".slider-item").length<=4){var n=l*$(this).find(".slider-item").length;
var f=$(this).width()+10;
var a=(f-n)/2;
$(this).find(".list-items-container").css({"margin-left":a,"margin-right":a})
}var e=0,h=$(this).find(".slider-item"),d=($(this).find(".slider-item").length-g);
var m=$(this).find(".slider-item").length;
$(this).find(".slider-arrowR").click(function(){if(e<d){$(this).parent().find(".slider-arrowL").removeClass("in-active");
$(this).parent().find(".slider-arrowL").css("background-color",j);
e++;
if($(this).parent().parent().outerWidth()==940){b=168.4
}else{if($(this).parent().parent().outerWidth()==738){b=155
}else{b=l
}}h.animate({left:"-="+b},500);
if(e==d){$(this).parent().find(".slider-arrowR").addClass("in-active");
$(this).parent().find(".slider-arrowR").css("background-color","#e5e5e5")
}}});
$(this).find(".slider-arrowL").click(function(){if(e>0){$(this).parent().find(".slider-arrowR").removeClass("in-active");
$(this).parent().find(".slider-arrowR").css("background-color",j);
e--;
if($(this).parent().parent().outerWidth()==940){b=168.4
}else{if($(this).parent().parent().outerWidth()==738){b=155
}else{b=l
}}h.animate({left:"+="+b},500);
if(e==0){$(this).parent().find(".slider-arrowL").addClass("in-active");
$(this).parent().find(".slider-arrowL").css("background-color","#e5e5e5")
}}})
})
}});
$(function(){if($(".home-page-carousel").length>0){$(".home-page-carousel").each(function(){if($(this).find(".carousel-card").length<=3&&$(window).width()>=768){$(this).find(".carousel-left-move").css("visibility","hidden");
$(this).find(".carousel-right-move").css("visibility","hidden")
}$(this).find(".carousel-left-move").addClass("in-active");
var n;
if($(window).width()<768){n=1
}else{n=3
}var l=$(this).outerWidth()+30,e=(l*8.33333333)/100;
e=e.toFixed(1);
oneColp="0px "+e+"px";
$(this).css({padding:oneColp});
$(this).find(".carousel-arrows-container").css({"margin-left":-e});
var g=$(this).width(),j=$(this).find(".carousel-left-move").width()+$(this).find(".carousel-left-move").width(),o=g,m=$(this).find(".carousel-list-container").width(),k=parseFloat(window.getComputedStyle($(this).find(".carousel-card").get(0)).width),c=k*n,b=(m-c)/2;
$(this).find(".carousel-card").css({"margin-right":b});
var h=$(this).find(".carousel-card").outerWidth(true),d=$(this).find(".carousel-card"),a=0,f=($(this).find(".carousel-card").length-n),p=$(this).find(".carousel-card").length;
if($(window).width()<767){e=38.8;
oneColp="0px "+e+"px";
$(this).css({padding:oneColp});
$(this).find(".carousel-arrows-container").css({"margin-left":-e});
o=parseFloat(window.getComputedStyle($(this).find(".carousel-list-container").get(0)).width);
mobileMargin=(o-k)/2;
if(o==k){mobileMargin=0;
h=k;
$(this).find(".carousel-card").css({"margin-right":mobileMargin,"margin-left":mobileMargin})
}else{h=parseFloat(window.getComputedStyle($(this).find(".carousel-list-container").get(0)).width);
$(this).find(".carousel-card").css({"margin-right":mobileMargin,"margin-left":mobileMargin})
}}$(this).find(".carousel-move-right").click(function(){if(a<f){$(this).parent().parent().find(".carousel-left-move").removeClass("in-active");
a++;
d.animate({left:"-="+h},500);
if(a==f){$(this).parent().parent().find(".carousel-right-move").addClass("in-active")
}}});
$(this).find(".carousel-move-left").click(function(){if(a>0){$(this).parent().parent().find(".carousel-right-move").removeClass("in-active");
a--;
d.animate({left:"+="+h},500);
if(a==0){$(this).parent().parent().find(".carousel-left-move").addClass("in-active")
}}})
})
}});
(function(d){colClass="col-xs-# col-sm-# col-md-# col-lg-#";
c();
b();
function c(){var o=d(".table-sticky[data-even-rows]");
if(!o){o=d(".table-sticky[data-odd-rows]")
}if(o){for(t=0;
t<o.length;
t++){var m=d(o[t]).attr("data-even-rows");
var h=d(o[t]).attr("data-odd-rows");
var n=d(".table-sticky[data-no-column-divider]");
var f=d(".table-sticky[data-no-row-divider]");
var p=d(o[t]).find("table");
var k=undefined;
var g=undefined;
var q;
var e;
var j=document.createElement("thead");
var l;
d;
if(m){k=JSON.parse(m)
}if(h){g=JSON.parse(h)
}if(k&&k.length){q=document.createElement("tr");
if(g){d(q).addClass("table-sticky-row")
}for(i=0;
i<k.length;
i++){l=k[i].colSpan*2;
e=document.createElement("td");
d(e).attr("colspan",k[i].colSpan);
d(e).addClass(a(colClass,"#",l));
d(e).text(k[i].headerValue);
q.appendChild(e);
if(n.length){d(e).addClass("no-column-dividers")
}if(f.length){d(e).addClass("no-row-dividers")
}}j.appendChild(q)
}if(g&&g.length){q=document.createElement("tr");
for(i=0;
i<g.length;
i++){l=g[i].colSpan*2;
e=document.createElement("td");
d(e).attr("colspan",g[i].colSpan);
d(e).addClass(a(colClass,"#",l));
d(e).text(g[i].headerValue);
q.appendChild(e);
if(n.length){d(e).addClass("no-column-dividers")
}if(f.length){d(e).addClass("no-row-dividers")
}}j.appendChild(q)
}d(p).prepend(j)
}}}function b(){var o;
var r=d(".table-sticky[data-even-rows]");
if(!r){r=d(".table-sticky[data-odd-rows]")
}if(r){for(t=0;
t<r.length;
t++){var u=d(r[t]).find("table tbody tr");
var p=d(r[t]).attr("data-even-rows");
var j=d(r[t]).attr("data-odd-rows");
var q=d(".table-sticky[data-no-column-divider]");
var g=d(".table-sticky[data-no-row-divider]");
var m=undefined;
var h=undefined;
var e;
d(r[t]).attr("width","100%");
d(r[t]).attr("cellpadding","0");
d(r[t]).attr("cellspacing","0");
d(r[t]).addClass("table table-fixed");
if(p){m=JSON.parse(p)
}if(j){h=JSON.parse(j)
}var l=m.length&&h.length?"two-row":"one-row";
u.addClass(l);
if(m.length&&h.length){for(i=0;
i<u.length;
i++){if(i%2){e=d(u[i]).find("td");
var n;
for(n=0;
n<h.length;
n++){if(n<e.length){o=h[n].colSpan*2;
d(e[n]).attr("colspan",h[n].colSpan);
d(e[n]).addClass(a(colClass,"#",o));
if(q.length){d(e[n]).addClass("no-column-dividers")
}if(g.length){d(e[n]).addClass("no-row-dividers")
}}}for(;
n<e.length;
n++){if(d(e[n]).text().trim().length===0||d(e[n]).text()==="&nbsp;"){d(e[n]).remove()
}}}else{e=d(u[i]).find("td");
var n;
for(n=0;
n<m.length;
n++){if(n<e.length){o=m[n].colSpan*2;
d(e[n]).attr("colspan",m[n].colSpan);
d(e[n]).addClass(a(colClass,"#",o));
if(q.length){d(e[n]).addClass("no-column-dividers")
}if(g.length){d(e[n]).addClass("no-row-dividers")
}}}for(;
n<e.length;
n++){if(d(e[n]).text().trim().length===0||d(e[n]).text()==="&nbsp;"){d(e[n]).remove()
}}}}}else{if(m.length||h.length){var k=undefined;
u.addClass("one-row");
if(h.length){k=h
}else{k=m
}for(i=0;
i<u.length;
i++){if(k){e=d(u[i]).find("td");
var n;
for(n=0;
n<k.length;
n++){if(n<e.length){o=k[n].colSpan*2;
d(e[n]).attr("colspan",k[n].colSpan);
d(e[n]).addClass(a(colClass,"#",o));
if(q.length){d(e[n]).addClass("no-column-dividers")
}if(g.length){d(e[n]).addClass("no-row-dividers")
}}}for(;
n<e.length;
n++){if(d(e[n]).html().trim().length===0||d(e[n]).html()==="&nbsp;"){d(e[n]).remove()
}}}}}else{u.addClass("one-row");
var s=d(r[t]).find("td");
for(i=0;
i<s.length;
i++){var f=s[i];
if(g.length){d(f).addClass("no-row-dividers")
}if(q.length){d(f).addClass("no-column-dividers")
}}}}}}}function a(h,g,e){var f=h;
while(f.indexOf(g)>=0){f=f.replace(g,e)
}return f
}})(jQuery);
(function(){var b=$(".table-sticky-d");
a(b);
function a(c){var d=c;
$(d).each(function(){var g=$(d).outerWidth();
var f=$(d).find("thead > tr");
var e=$(d).find("tbody > tr");
$(f).each(function(){var h=$(this).find("td, th").each(function(){var k=parseInt($(this).attr("colspan"));
var j=(g*0.16667)*k;
j=j+0;
$(this).css("width",j)
})
});
$(e).each(function(){var h=$(this).find("td").each(function(){var k=parseInt($(this).attr("colspan"));
var j=(g*0.16667)*k;
j=j+0;
$(this).css("width",j)
})
})
})
}$(window).resize(function(){a(b)
})
})();
(function(d){var a=null,b=null;
if(d(".banner-bg-image").find("img").attr("src")==undefined){a="background-color"
}else{d(".banner-bg-image img").load(function(){a=d(this);
if(a.height()>10){c()
}}).each(function(){if(this.complete){d(this).trigger("load")
}})
}d(".banner-fg-image img").load(function(){b=d(this);
if(b.height()>10){c()
}}).each(function(){if(this.complete){d(this).trigger("load")
}});
function c(){if(a!=null&&b!=null&&a!="background-color"){var e=a.height();
var f=b.height();
d(".banner").height(Math.max(e,f));
d(".banner-fg-image").height(b.height()).css({position:"absolute",right:"0"})
}else{if(a!=null&&b!=null&&a=="background-color"){var f=b.height();
d(".banner").height(f);
d(".banner-text-image").height(f);
d(".banner-fg-image").height(b.height()).css({position:"absolute",right:"0"})
}}}})(jQuery);