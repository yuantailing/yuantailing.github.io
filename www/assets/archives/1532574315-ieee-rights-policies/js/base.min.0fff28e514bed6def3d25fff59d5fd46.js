(function(a){a(".search-bar .input-group-addon").click(function(d){var c=a(this).closest("form");
c.submit();
var b=a(d).parent().find("#q");
if(b.val()==""){b.val("");
b.focus()
}});
a(".search-pagination > a").click(function(){if(a("#q").val()==""){a("#q").val("");
a("#q").focus()
}});
a("#noResultRedirect").click(function(){a("#q").val("");
a("#q").focus()
});
a(".utilitylinks").each(function(){var c=a(this).attr("id");
var b=a(this).find("li").css("color");
a(this).find("li a ").css("color",b)
})
})(this.jQuery);
(function(a){a(".tables").each(function(){var g=a(this).attr("id");
if(g!=null&&g!=""&&g.includes("defaultTable-")){var e=a("#paging").val();
e=j(e);
var c=a("#ordering").val();
c=j(c);
var f=a("#info").val();
f=j(f);
var i=a("#bFilter").val();
i=j(i);
var h=a("#bLengthChange").val();
h=j(h);
var d=a("#orderMulti").val();
d=j(d);
var k=a("#pageLength").val();
var b=parseInt(k);
var l=a("#"+g+"> table").DataTable({paging:e,ordering:c,info:f,bFilter:i,bLengthChange:h,aaSorting:[],orderMulti:d,language:{decimal:"",emptyTable:"No data available in table",info:"Showing _START_ to _END_ of _TOTAL_ chapters",infoEmpty:"Showing 0 to 0 of 0 chapters",infoFiltered:"(filtered from _MAX_ total chapters)",infoPostFix:"",thousands:",",lengthMenu:"Show _MENU_",loadingRecords:"Loading...",processing:"Processing...",search:"Filter:",zeroRecords:"No matching records found",paginate:{first:"First",last:"Last",next:"Next",previous:"Previous"},aria:{sortAscending:": activate to sort column ascending",sortDescending:": activate to sort column descending"}}});
l.page.len(b).draw();
function j(m){if(m=="true"){return true
}else{return false
}}}})
})(this.jQuery);
$(document).ready(function(){function a(){if($("html").find(".modal").length<1){$(".img-vid-content").removeClass("add-cursor")
}}a()
});
function loadVideoJsPlugins(){videojs.plugin("horizontalVolume",function(){var b=this,a=b.controlBar,c=a.volumeMenuButton;
a.removeChild("VolumeControl");
a.removeChild("MuteToggle");
a.addChild("VolumeControl");
a.addChild("MuteToggle");
a.removeChild(c)
});
$("video").each(function(){var a=$(this).attr("id");
videojs(a).horizontalVolume()
})
}function changeVideo(e){var c=$(e).attr("vid-id");
var a=$(e).attr("data-target");
var b=$(a).find("video").attr("id");
if(b==null||b==undefined){b=$(a).find(".video-js").attr("id")
}var d;
loadVideoJsPlugins();
videojs(b).ready(function(){d=this;
d.play();
d.catalog.getVideo(c,function(f,g){d.catalog.load(g);
d.play()
});
$(".video-js").on("click",function(f){f.stopPropagation()
});
$(".modal.modal-close").on("click",function(f){d.pause()
});
$(document).keyup(function(f){if(f.keyCode===27){$(".modal.modal-close").trigger("click")
}})
})
}function debounce(h,d,b){var c,f,k,j,g;
return function(){k=this,f=arguments,j=new Date;
var a=function(){var i=new Date-j;
d>i?c=setTimeout(a,d-i):(c=null,b||(g=h.apply(k,f)))
},e=b&&!c;
return c||(c=setTimeout(a,d)),e&&(g=h.apply(k,f)),g
}
}function onScrollSliderParallax(){requesting||(requesting=!0,requestAnimationFrame(function(){SEMICOLON.slider.sliderParallax(),SEMICOLON.slider.sliderElementsFade()
})),killRequesting()
}var $=jQuery.noConflict();
$.fn.inlineStyle=function(a){return this.prop("style")[$.camelCase(a)]
},$.fn.doOnce=function(a){return this.length&&a.apply(this),this
},$().infinitescroll?$.extend($.infinitescroll.prototype,{_setup_portfolioinfiniteitemsloader:function(){var b=this.options,a=this;
$(b.nextSelector).click(function(c){1!=c.which||c.metaKey||c.shiftKey||(c.preventDefault(),a.retrieve())
}),a.options.loading.start=function(c){c.loading.msg.appendTo(c.loading.selector).show(c.loading.speed,function(){a.beginAjax(c)
})
}
},_showdonemsg_portfolioinfiniteitemsloader:function(){var a=this.options;
a.loading.msg.find("img").hide().parent().find("div").html(a.loading.finishedMsg).animate({opacity:1},2000,function(){$(this).parent().fadeOut("normal")
}),$(a.navSelector).fadeOut("normal"),a.errorCallback.call($(a.contentSelector)[0],"done")
}}):"Infinite Scroll not defined.",function(){for(var d=0,c=["ms","moz","webkit","o"],b=0;
b<c.length&&!window.requestAnimationFrame;
++b){window.requestAnimationFrame=window[c[b]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[b]+"CancelAnimationFrame"]||window[c[b]+"CancelRequestAnimationFrame"]
}window.requestAnimationFrame||(window.requestAnimationFrame=function(g,e){var f=(new Date).getTime(),h=Math.max(0,16-(f-d)),j=window.setTimeout(function(){g(f+h)
},h);
return d=f+h,j
}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)
})
}();
var requesting=!1,killRequesting=debounce(function(){requesting=!1
},100),SEMICOLON=SEMICOLON||{};
!function(aX){SEMICOLON.initialize={init:function(){SEMICOLON.initialize.responsiveClasses(),SEMICOLON.initialize.imagePreload(".portfolio-item:not(:has(.fslider)) img"),SEMICOLON.initialize.stickyElements(),SEMICOLON.initialize.goToTop(),SEMICOLON.initialize.lazyLoad(),SEMICOLON.initialize.fullScreen(),SEMICOLON.initialize.verticalMiddle(),SEMICOLON.initialize.lightbox(),SEMICOLON.initialize.resizeVideos(),SEMICOLON.initialize.imageFade(),SEMICOLON.initialize.pageTransition(),SEMICOLON.initialize.dataResponsiveClasses(),SEMICOLON.initialize.dataResponsiveHeights(),aX(".fslider").addClass("preloader2")
},responsiveClasses:function(){if("undefined"==typeof jRespond){return"responsiveClasses: jRespond not Defined.",!0
}var a=jRespond([{label:"smallest",enter:0,exit:479},{label:"handheld",enter:480,exit:767},{label:"tablet",enter:768,exit:991},{label:"laptop",enter:992,exit:1199},{label:"desktop",enter:1200,exit:10000}]);
a.addFunc([{breakpoint:"desktop",enter:function(){a2.addClass("device-lg")
},exit:function(){a2.removeClass("device-lg")
}},{breakpoint:"laptop",enter:function(){a2.addClass("device-md")
},exit:function(){a2.removeClass("device-md")
}},{breakpoint:"tablet",enter:function(){a2.addClass("device-sm")
},exit:function(){a2.removeClass("device-sm")
}},{breakpoint:"handheld",enter:function(){a2.addClass("device-xs")
},exit:function(){a2.removeClass("device-xs")
}},{breakpoint:"smallest",enter:function(){a2.addClass("device-xxs")
},exit:function(){a2.removeClass("device-xxs")
}}])
},imagePreload:function(d,b){var c={delay:250,transition:400,easing:"linear"};
aX.extend(c,b),aX(d).each(function(){var a=aX(this);
a.css({visibility:"hidden",opacity:0,display:"block"}),a.wrap('<span class="preloader" />'),a.one("load",function(e){aX(this).delay(c.delay).css({visibility:"visible"}).animate({opacity:1},c.transition,c.easing,function(){aX(this).unwrap('<span class="preloader" />')
})
}).each(function(){this.complete&&aX(this).trigger("load")
})
})
},verticalMiddle:function(){ai.length>0&&ai.each(function(){var b=aX(this),a=b.outerHeight(),c=aJ.outerHeight();
b.parents("#slider").length>0&&!b.hasClass("ignore-header")&&aJ.hasClass("transparent-header")&&(a2.hasClass("device-lg")||a2.hasClass("device-md"))&&(a-=70,aR.next("#header").length>0&&(a+=c)),(a2.hasClass("device-xs")||a2.hasClass("device-xxs"))&&b.parents(".full-screen").length&&!b.parents(".force-full-screen").length?b.children(".col-padding").length>0?b.css({position:"relative",top:"0",width:"auto",marginTop:"0"}).addClass("clearfix"):b.css({position:"relative",top:"0",width:"auto",marginTop:"0",paddingTop:"60px",paddingBottom:"60px"}).addClass("clearfix"):b.css({position:"absolute",top:"50%",width:"100%",paddingTop:"0",paddingBottom:"0",marginTop:-(a/2)+"px"})
})
},stickyElements:function(){if(aL.length>0){var b=aL.outerHeight();
aL.css({marginTop:-(b/2)+"px"})
}if(ab.length>0){var a=ab.outerHeight();
ab.css({marginTop:-(a/2)+"px"})
}},goToTop:function(){var c=ad.attr("data-speed"),b=ad.attr("data-easing");
c||(c=700),b||(b="easeOutQuad"),ad.click(function(){return aX("body,html").stop(!0).animate({scrollTop:0},Number(c),b),!1
})
},goToTopScroll:function(){var b=ad.attr("data-mobile"),a=ad.attr("data-offset");
return a||(a=450),"true"!=b&&(a2.hasClass("device-xs")||a2.hasClass("device-xxs"))?!0:void (aI.scrollTop()>Number(a)?ad.fadeIn():ad.fadeOut())
},fullScreen:function(){ae.length>0&&ae.each(function(){var e=aX(this),k=window.innerHeight?window.innerHeight:aI.height(),h=e.attr("data-negative-height");
if("slider"==e.attr("id")){var f=aR.offset().top;
if(k-=f,e.find(".slider-parallax-inner").length>0){var a=e.find(".slider-parallax-inner").css("transform"),g=a.match(/-?[\d\.]+/g);
if(g){var j=g[5]
}else{var j=0
}k=(window.innerHeight?window.innerHeight:aI.height())+Number(j)-f
}if(aX("#slider.with-header").next("#header:not(.transparent-header)").length>0&&(a2.hasClass("device-lg")||a2.hasClass("device-md"))){var b=aJ.outerHeight();
k-=b
}}e.parents(".full-screen").length>0&&(k=e.parents(".full-screen").height()),(a2.hasClass("device-xs")||a2.hasClass("device-xxs"))&&(e.hasClass("force-full-screen")||(k="auto")),h&&(k-=Number(h)),e.css("height",k),"slider"!=e.attr("id")||e.hasClass("canvas-slider-grid")||e.has(".swiper-slide")&&e.find(".swiper-slide").css("height",k)
})
},maxHeight:function(){if(aj.length>0){if(aj.hasClass("customjs")){return !0
}aj.each(function(){var a=aX(this);
a.find(".common-height").length>0&&SEMICOLON.initialize.commonHeight(a.find(".common-height:not(.customjs)")),SEMICOLON.initialize.commonHeight(a)
})
}},commonHeight:function(c){var b=0;
c.children("[class*=col-]").each(function(){var a=aX(this).children();
a.hasClass("max-height")?b=a.outerHeight():a.outerHeight()>b&&(b=a.outerHeight())
}),c.children("[class*=col-]").each(function(){aX(this).height(b)
})
},testimonialsGrid:function(){if(aB.length>0){if(a2.hasClass("device-sm")||a2.hasClass("device-md")||a2.hasClass("device-lg")){var a=0;
aB.each(function(){aX(this).find("li > .testimonial").each(function(){aX(this).height()>a&&(a=aX(this).height())
}),aX(this).find("li").height(a),a=0
})
}else{aB.find("li").css({height:"auto"})
}}},lightbox:function(){if(!aX().magnificPopup){return"lightbox: Magnific Popup not Defined.",!0
}var b=aX('[data-lightbox="image"]'),a=aX('[data-lightbox="gallery"]'),c=aX('[data-lightbox="iframe"]'),f=aX('[data-lightbox="inline"]'),e=aX('[data-lightbox="ajax"]'),d=aX('[data-lightbox="ajax-gallery"]');
b.length>0&&b.magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-fade",image:{verticalFit:!0}}),a.length>0&&a.each(function(){var g=aX(this);
g.find('a[data-lightbox="gallery-item"]').parent(".clone").hasClass("clone")&&g.find('a[data-lightbox="gallery-item"]').parent(".clone").find('a[data-lightbox="gallery-item"]').attr("data-lightbox",""),g.find('a[data-lightbox="gallery-item"]').parents(".cloned").hasClass("cloned")&&g.find('a[data-lightbox="gallery-item"]').parents(".cloned").find('a[data-lightbox="gallery-item"]').attr("data-lightbox",""),g.magnificPopup({delegate:'a[data-lightbox="gallery-item"]',type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-fade",image:{verticalFit:!0},gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}})
}),c.length>0&&c.magnificPopup({disableOn:600,type:"iframe",removalDelay:160,preloader:!1,fixedContentPos:!1}),f.length>0&&f.magnificPopup({type:"inline",mainClass:"mfp-no-margins mfp-fade",closeBtnInside:!1,fixedContentPos:!0,overflowY:"scroll"}),e.length>0&&e.magnificPopup({type:"ajax",closeBtnInside:!1,callbacks:{ajaxContentAdded:function(g){SEMICOLON.widget.loadFlexSlider(),SEMICOLON.initialize.resizeVideos(),SEMICOLON.widget.masonryThumbs()
},open:function(){a2.addClass("ohidden")
},close:function(){a2.removeClass("ohidden")
}}}),d.length>0&&d.magnificPopup({delegate:'a[data-lightbox="ajax-gallery-item"]',type:"ajax",closeBtnInside:!1,gallery:{enabled:!0,preload:0,navigateByImgClick:!1},callbacks:{ajaxContentAdded:function(g){SEMICOLON.widget.loadFlexSlider(),SEMICOLON.initialize.resizeVideos(),SEMICOLON.widget.masonryThumbs()
},open:function(){a2.addClass("ohidden")
},close:function(){a2.removeClass("ohidden")
}}})
},modal:function(){if(!aX().magnificPopup){return"modal: Magnific Popup not Defined.",!0
}var a=aX(".modal-on-load:not(.customjs)");
a.length>0&&a.each(function(){var e=aX(this),c=e.attr("data-target"),d=c.split("#")[1],f=e.attr("data-delay"),j=e.attr("data-timeout"),h=e.attr("data-animate-in"),g=e.attr("data-animate-out");
if(e.hasClass("enable-cookie")||aX.removeCookie(d),e.hasClass("enable-cookie")){var b=aX.cookie(d);
if("undefined"!=typeof b&&"0"==b){return !0
}}f=f?Number(f)+1500:1500;
setTimeout(function(){aX.magnificPopup.open({items:{src:c},type:"inline",mainClass:"mfp-no-margins mfp-fade",closeBtnInside:!0,fixedContentPos:!0,removalDelay:500,callbacks:{open:function(){""!=h&&aX(c).addClass(h+" animated")
},beforeClose:function(){""!=g&&aX(c).removeClass(h).addClass(g)
},afterClose:function(){(""!=h||""!=g)&&aX(c).removeClass(h+" "+g+" animated"),e.hasClass("enable-cookie")&&aX.cookie(d,"0")
}}},0)
},Number(f));
if(""!=j){setTimeout(function(){aX.magnificPopup.close()
},Number(f)+Number(j))
}})
},resizeVideos:function(){return aX().fitVids?void aX("#content,#footer,#slider:not(.revslider-wrap),.landing-offer-media,.portfolio-ajax-modal,.mega-menu-column").fitVids({customSelector:"iframe[src^='http://www.dailymotion.com/embed'], iframe[src*='maps.google.com'], iframe[src*='google.com/maps']",ignore:".no-fv"}):("resizeVideos: FitVids not Defined.",!0)
},imageFade:function(){aX(".image_fade").hover(function(){aX(this).filter(":not(:animated)").animate({opacity:0.8},400)
},function(){aX(this).animate({opacity:1},400)
})
},blogTimelineEntries:function(){aX(".post-timeline.grid-2").find(".entry").each(function(){var a=aX(this).inlineStyle("left");
"0px"==a?aX(this).removeClass("alt"):aX(this).addClass("alt"),aX(this).find(".entry-timeline").fadeIn()
}),aX(".entry.entry-date-section").next().next().find(".entry-timeline").css({top:"70px"})
},pageTransition:function(){if(a2.hasClass("no-transition")){return !0
}if(!aX().animsition){return a2.addClass("no-transition"),"pageTransition: Animsition not Defined.",!0
}window.onpageshow=function(c){c.persisted&&window.location.reload()
};
var A=a2.attr("data-animation-in"),B=a2.attr("data-animation-out"),i=a2.attr("data-speed-in"),e=a2.attr("data-speed-out"),a=a2.attr("data-loader-timeout"),k=a2.attr("data-loader"),x=a2.attr("data-loader-color"),y=a2.attr("data-loader-html"),z="",q="",w="",j="",b="",v="";
A||(A="fadeIn"),B||(B="fadeOut"),i||(i=1500),e||(e=800),y||(y='<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>'),a=a?Number(a):!1,x&&("theme"==x?(w=" bgcolor",j=" border-color",b=' class="bgcolor"',v=' class="border-color"'):(z=' style="background-color:'+x+';"',q=' style="border-color:'+x+';"'),y='<div class="css3-spinner-bounce1'+w+'"'+z+'></div><div class="css3-spinner-bounce2'+w+'"'+z+'></div><div class="css3-spinner-bounce3'+w+'"'+z+"></div>"),"2"==k?y='<div class="css3-spinner-flipper'+w+'"'+z+"></div>":"3"==k?y='<div class="css3-spinner-double-bounce1'+w+'"'+z+'></div><div class="css3-spinner-double-bounce2'+w+'"'+z+"></div>":"4"==k?y='<div class="css3-spinner-rect1'+w+'"'+z+'></div><div class="css3-spinner-rect2'+w+'"'+z+'></div><div class="css3-spinner-rect3'+w+'"'+z+'></div><div class="css3-spinner-rect4'+w+'"'+z+'></div><div class="css3-spinner-rect5'+w+'"'+z+"></div>":"5"==k?y='<div class="css3-spinner-cube1'+w+'"'+z+'></div><div class="css3-spinner-cube2'+w+'"'+z+"></div>":"6"==k?y='<div class="css3-spinner-scaler'+w+'"'+z+"></div>":"7"==k?y='<div class="css3-spinner-grid-pulse"><div'+b+z+"></div><div"+b+z+"></div><div"+b+z+"></div><div"+b+z+"></div><div"+b+z+"></div><div"+b+z+"></div><div"+b+z+"></div><div"+b+z+"></div><div"+b+z+"></div></div>":"8"==k?y='<div class="css3-spinner-clip-rotate"><div'+v+q+"></div></div>":"9"==k?y='<div class="css3-spinner-ball-rotate"><div'+b+z+"></div><div"+b+z+"></div><div"+b+z+"></div></div>":"10"==k?y='<div class="css3-spinner-zig-zag"><div'+b+z+"></div><div"+b+z+"></div></div>":"11"==k?y='<div class="css3-spinner-triangle-path"><div'+b+z+"></div><div"+b+z+"></div><div"+b+z+"></div></div>":"12"==k?y='<div class="css3-spinner-ball-scale-multiple"><div'+b+z+"></div><div"+b+z+"></div><div"+b+z+"></div></div>":"13"==k?y='<div class="css3-spinner-ball-pulse-sync"><div'+b+z+"></div><div"+b+z+"></div><div"+b+z+"></div></div>":"14"==k&&(y='<div class="css3-spinner-scale-ripple"><div'+v+q+"></div><div"+v+q+"></div><div"+v+q+"></div></div>"),aT.animsition({inClass:A,outClass:B,inDuration:Number(i),outDuration:Number(e),linkElement:'#primary-menu ul li a:not([target="_blank"]):not([href*="#"]):not([data-lightbox]):not([href^="mailto"]):not([href^="tel"]):not([href^="sms"]):not([href^="call"])',loading:!0,loadingParentElement:"body",loadingClass:"css3-spinner",loadingHtml:y+'<a href="?transition=disable" class="button button-small button-rounded preview-pagetransition">Disable Page Loading Transition</a>',unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",timeOut:a})
},lazyLoad:function(){var a=aX("[data-lazyload]");
return aX().appear?void (a.length>0&&a.each(function(){var c=aX(this),b=c.attr("data-lazyload");
c.attr("src","http://canvashtml-cdn.semicolonweb.com/images/blank.svg").css({background:"url(../images/preloader.gif) no-repeat center center #FFF"}),c.appear(function(){c.css({background:"none"}).removeAttr("width").removeAttr("height").attr("src",b)
},{accX:0,accY:120},"easeInCubic")
})):("lazyLoad: Appear not Defined.",!0)
},topScrollOffset:function(){var a=0;
return !a2.hasClass("device-lg")&&!a2.hasClass("device-md")||SEMICOLON.isMobile.any()?a=40:(a=aJ.hasClass("sticky-header")?aF.hasClass("dots-menu")?100:144:aF.hasClass("dots-menu")?140:184,aF.length||(a=aJ.hasClass("sticky-header")?100:140)),a
},defineColumns:function(f){var b=4;
if(f.hasClass("portfolio-full")){b=f.hasClass("portfolio-3")?3:f.hasClass("portfolio-5")?5:f.hasClass("portfolio-6")?6:4,!a2.hasClass("device-sm")||4!=b&&5!=b&&6!=b?!a2.hasClass("device-xs")||3!=b&&4!=b&&5!=b&&6!=b?a2.hasClass("device-xxs")&&(b=1):b=2:b=3
}else{if(f.hasClass("masonry-thumbs")){var a=f.attr("data-lg-col"),c=f.attr("data-md-col"),h=f.attr("data-sm-col"),g=f.attr("data-xs-col"),d=f.attr("data-xxs-col");
b=f.hasClass("col-2")?2:f.hasClass("col-3")?3:f.hasClass("col-5")?5:f.hasClass("col-6")?6:4,a2.hasClass("device-lg")?a&&(b=Number(a)):a2.hasClass("device-md")?c&&(b=Number(c)):a2.hasClass("device-sm")?h&&(b=Number(h)):a2.hasClass("device-xs")?g&&(b=Number(g)):a2.hasClass("device-xxs")&&d&&(b=Number(d))
}}return b
},setFullColumnWidth:function(k){if(!aX().isotope){return"setFullColumnWidth: Isotope not Defined.",!0
}if(k.css({width:""}),k.hasClass("portfolio-full")){var f=SEMICOLON.initialize.defineColumns(k),l=k.width();
l==Math.floor(l/f)*f&&(l-=1);
var e=Math.floor(l/f);
if(a2.hasClass("device-xxs")){var b=1
}else{var b=0
}k.find(".portfolio-item").each(function(d){if(0==b&&aX(this).hasClass("wide")){var c=2*e
}else{var c=e
}aX(this).css({width:c+"px"})
})
}else{if(k.hasClass("masonry-thumbs")){var f=SEMICOLON.initialize.defineColumns(k),l=k.innerWidth();
l==aQ&&(l=1.004*aQ,k.css({width:l+"px"}));
var e=l/f;
e=Math.floor(e),e*f>=l&&k.css({"margin-right":"-1px"}),k.children("a").css({width:e+"px"});
var a=k.find("a:eq(0)").outerWidth();
k.isotope({masonry:{columnWidth:a}});
var g=k.attr("data-big");
if(g){g=g.split(",");
var h="",j="";
for(j=0;
j<g.length;
j++){h=Number(g[j])-1,k.find("a:eq("+h+")").css({width:2*a+"px"})
}setTimeout(function(){k.isotope("layout")
},1000)
}}}},aspectResizer:function(){var a=aX(".aspect-resizer");
a.length>0&&a.each(function(){var b=aX(this);
b.inlineStyle("width"),b.inlineStyle("height"),b.parent().innerWidth()
})
},dataResponsiveClasses:function(){var b=aX("[data-class-xxs]"),a=aX("[data-class-xs]"),c=aX("[data-class-sm]"),e=aX("[data-class-md]"),d=aX("[data-class-lg]");
b.length>0&&b.each(function(){var g=aX(this),f=g.attr("data-class-xxs"),h=g.attr("data-class-xs")+" "+g.attr("data-class-sm")+" "+g.attr("data-class-md")+" "+g.attr("data-class-lg");
a2.hasClass("device-xxs")&&(g.removeClass(h),g.addClass(f))
}),a.length>0&&a.each(function(){var g=aX(this),f=g.attr("data-class-xs"),h=g.attr("data-class-xxs")+" "+g.attr("data-class-sm")+" "+g.attr("data-class-md")+" "+g.attr("data-class-lg");
a2.hasClass("device-xs")&&(g.removeClass(h),g.addClass(f))
}),c.length>0&&c.each(function(){var g=aX(this),f=g.attr("data-class-sm"),h=g.attr("data-class-xxs")+" "+g.attr("data-class-xs")+" "+g.attr("data-class-md")+" "+g.attr("data-class-lg");
a2.hasClass("device-sm")&&(g.removeClass(h),g.addClass(f))
}),e.length>0&&e.each(function(){var g=aX(this),f=g.attr("data-class-md"),h=g.attr("data-class-xxs")+" "+g.attr("data-class-xs")+" "+g.attr("data-class-sm")+" "+g.attr("data-class-lg");
a2.hasClass("device-md")&&(g.removeClass(h),g.addClass(f))
}),d.length>0&&d.each(function(){var g=aX(this),f=g.attr("data-class-lg"),h=g.attr("data-class-xxs")+" "+g.attr("data-class-xs")+" "+g.attr("data-class-sm")+" "+g.attr("data-class-md");
a2.hasClass("device-lg")&&(g.removeClass(h),g.addClass(f))
})
},dataResponsiveHeights:function(){var b=aX("[data-height-xxs]"),a=aX("[data-height-xs]"),c=aX("[data-height-sm]"),e=aX("[data-height-md]"),d=aX("[data-height-lg]");
b.length>0&&b.each(function(){var g=aX(this),f=g.attr("data-height-xxs");
a2.hasClass("device-xxs")&&""!=f&&g.css("height",f)
}),a.length>0&&a.each(function(){var g=aX(this),f=g.attr("data-height-xs");
a2.hasClass("device-xs")&&""!=f&&g.css("height",f)
}),c.length>0&&c.each(function(){var g=aX(this),f=g.attr("data-height-sm");
a2.hasClass("device-sm")&&""!=f&&g.css("height",f)
}),e.length>0&&e.each(function(){var g=aX(this),f=g.attr("data-height-md");
a2.hasClass("device-md")&&""!=f&&g.css("height",f)
}),d.length>0&&d.each(function(){var g=aX(this),f=g.attr("data-height-lg");
a2.hasClass("device-lg")&&""!=f&&g.css("height",f)
})
},stickFooterOnSmall:function(){var b=aI.height(),a=aT.height();
!a2.hasClass("sticky-footer")&&aK.length>0&&aT.has("#footer")&&b>a&&aK.css({"margin-top":b-a})
},stickyFooter:function(){if(a2.hasClass("sticky-footer")&&aK.length>0&&(a2.hasClass("device-lg")||a2.hasClass("device-md"))){var a=aK.outerHeight();
aN.css({"margin-bottom":a})
}else{aN.css({"margin-bottom":0})
}}},SEMICOLON.header={init:function(){SEMICOLON.header.superfish(),SEMICOLON.header.menufunctions(),SEMICOLON.header.fullWidthMenu(),SEMICOLON.header.overlayMenu(),SEMICOLON.header.stickyMenu(),SEMICOLON.header.stickyPageMenu(),SEMICOLON.header.sideHeader(),SEMICOLON.header.sidePanel(),SEMICOLON.header.onePageScroll(),SEMICOLON.header.onepageScroller(),SEMICOLON.header.logo(),SEMICOLON.header.topsearch(),SEMICOLON.header.topcart()
},superfish:function(){return(a2.hasClass("device-lg")||a2.hasClass("device-md"))&&(aX("#primary-menu ul ul, #primary-menu ul .mega-menu-content").css("display","block"),SEMICOLON.header.menuInvert(),aX("#primary-menu ul ul, #primary-menu ul .mega-menu-content").css("display","")),aX().superfish?(aX("body:not(.side-header) #primary-menu > ul, body:not(.side-header) #primary-menu > div > ul:not(.dropdown-menu), .top-links > ul").superfish({popUpSelector:"ul,.mega-menu-content,.top-link-section",delay:250,speed:350,animation:{opacity:"show"},animationOut:{opacity:"hide"},cssArrows:!1,onShow:function(){var a=aX(this);
a.find(".owl-carousel.customjs").length>0&&(a.find(".owl-carousel").removeClass("customjs"),SEMICOLON.widget.carousel()),a.hasClass("mega-menu-content")&&a.find(".widget").length>0&&(a2.hasClass("device-lg")||a2.hasClass("device-md")?setTimeout(function(){SEMICOLON.initialize.commonHeight(a)
},200):a.children().height(""))
}}),void aX("body.side-header #primary-menu > ul").superfish({popUpSelector:"ul",delay:250,speed:350,animation:{opacity:"show",height:"show"},animationOut:{opacity:"hide",height:"hide"},cssArrows:!1})):(a2.addClass("no-superfish"),"superfish: Superfish not Defined.",!0)
},menuInvert:function(){aX("#primary-menu .mega-menu-content, #primary-menu ul ul").each(function(d,b){var c=aX(b),e=c.offset(),g=c.width(),f=e.left;
0>aQ-(g+f)&&c.addClass("menu-pos-invert")
})
},menufunctions:function(){aX("#primary-menu ul li:has(ul)").addClass("sub-menu"),aX(".top-links ul li:has(ul) > a, #primary-menu.with-arrows > ul > li:has(ul) > a > div, #primary-menu.with-arrows > div > ul > li:has(ul) > a > div, #page-menu nav ul li:has(ul) > a > div").append('<i class="icon-angle-down"></i>'),aX(".top-links > ul").addClass("clearfix"),(a2.hasClass("device-lg")||a2.hasClass("device-md"))&&(aX("#primary-menu.sub-title > ul > li").hover(function(){aX(this).prev().css({backgroundImage:"none"})
},function(){aX(this).prev().css({backgroundImage:'url("http://canvashtml-cdn.semicolonweb.com/images/icons/menu-divider.png")'})
}),aX("#primary-menu.sub-title").children("ul").children(".current").prev().css({backgroundImage:"none"})),SEMICOLON.isMobile.Android()&&aX("#primary-menu ul li.sub-menu").children("a").on("touchstart",function(a){aX(this).parent("li.sub-menu").hasClass("sfHover")||a.preventDefault()
}),SEMICOLON.isMobile.Windows()&&(aX().superfish?aX("#primary-menu > ul, #primary-menu > div > ul,.top-links > ul").superfish("destroy").addClass("windows-mobile-menu"):(aX("#primary-menu > ul, #primary-menu > div > ul,.top-links > ul").addClass("windows-mobile-menu"),"menufunctions: Superfish not defined."),aX("#primary-menu ul li:has(ul)").append('<a href="#" class="wn-submenu-trigger"><i class="icon-angle-down"></i></a>'),aX("#primary-menu ul li.sub-menu").children("a.wn-submenu-trigger").click(function(a){return aX(this).parent().toggleClass("open"),aX(this).parent().find("> ul, > .mega-menu-content").stop(!0,!0).toggle(),!1
}))
},fullWidthMenu:function(){a2.hasClass("stretched")?(aJ.find(".container-fullwidth").length>0&&aX(".mega-menu .mega-menu-content").css({width:aT.width()-120}),aJ.hasClass("full-header")&&aX(".mega-menu .mega-menu-content").css({width:aT.width()-60})):(aJ.find(".container-fullwidth").length>0&&aX(".mega-menu .mega-menu-content").css({width:aT.width()-120}),aJ.hasClass("full-header")&&aX(".mega-menu .mega-menu-content").css({width:aT.width()-80}))
},overlayMenu:function(){if(a2.hasClass("overlay-menu")){var a=aX("#primary-menu").children("ul").children("li"),b=a.outerHeight(),d=a.length*b,c=(aI.height()-d)/2;
aX("#primary-menu").children("ul").children("li:first-child").css({"margin-top":c+"px"})
}},stickyMenu:function(a){aI.scrollTop()>a?a2.hasClass("device-lg")||a2.hasClass("device-md")?(aX("body:not(.side-header) #header:not(.no-sticky)").addClass("sticky-header"),aO.hasClass("force-not-dark")||aO.removeClass("not-dark"),SEMICOLON.header.stickyMenuClass()):(a2.hasClass("device-xs")||a2.hasClass("device-xxs")||a2.hasClass("device-sm"))&&a2.hasClass("sticky-responsive-menu")&&(aX("#header:not(.no-sticky)").addClass("responsive-sticky-header"),SEMICOLON.header.stickyMenuClass()):SEMICOLON.header.removeStickyness()
},stickyPageMenu:function(a){aI.scrollTop()>a?a2.hasClass("device-lg")||a2.hasClass("device-md")?aX("#page-menu:not(.dots-menu,.no-sticky)").addClass("sticky-page-menu"):(a2.hasClass("device-xs")||a2.hasClass("device-xxs")||a2.hasClass("device-sm"))&&a2.hasClass("sticky-responsive-pagemenu")&&aX("#page-menu:not(.dots-menu,.no-sticky)").addClass("sticky-page-menu"):aX("#page-menu:not(.dots-menu,.no-sticky)").removeClass("sticky-page-menu")
},removeStickyness:function(){aJ.hasClass("sticky-header")&&(aX("body:not(.side-header) #header:not(.no-sticky)").removeClass("sticky-header"),aJ.removeClass().addClass(aY),aO.removeClass().addClass(aZ),aO.hasClass("force-not-dark")||aO.removeClass("not-dark"),SEMICOLON.slider.swiperSliderMenu(),SEMICOLON.slider.revolutionSliderMenu()),aJ.hasClass("responsive-sticky-header")&&aX("body.sticky-responsive-menu #header").removeClass("responsive-sticky-header"),(a2.hasClass("device-xs")||a2.hasClass("device-xxs")||a2.hasClass("device-sm"))&&"undefined"==typeof aU&&(aJ.removeClass().addClass(aY),aO.removeClass().addClass(aZ),aO.hasClass("force-not-dark")||aO.removeClass("not-dark"))
},sideHeader:function(){aX("#header-trigger").click(function(){return aX("body.open-header").toggleClass("side-header-open"),!1
})
},sidePanel:function(){aX(".side-panel-trigger").click(function(){return a2.toggleClass("side-panel-open"),a2.hasClass("device-touch")&&a2.hasClass("side-push-panel")&&a2.toggleClass("ohidden"),!1
})
},onePageScroll:function(){if(aE.length>0){var b=aE.attr("data-speed"),a=aE.attr("data-offset"),c=aE.attr("data-easing");
b||(b=1000),c||(c="easeOutQuad"),aE.find("a[data-href]").click(function(){var j=aX(this),h=j.attr("data-href"),f=j.attr("data-speed"),g=j.attr("data-offset"),i=j.attr("data-easing");
if(aX(h).length>0){if(a){var e=a
}else{var e=SEMICOLON.initialize.topScrollOffset()
}f||(f=b),g||(g=e),i||(i=c),aE.hasClass("no-offset")&&(g=0),am=Number(g),aE.find("li").removeClass("current"),aE.find('a[data-href="'+h+'"]').parent("li").addClass("current"),(768>aQ||a2.hasClass("overlay-menu"))&&(aX("#primary-menu").find("ul.mobile-primary-menu").length>0?aX("#primary-menu > ul.mobile-primary-menu, #primary-menu > div > ul.mobile-primary-menu").toggleClass("show",!1):aX("#primary-menu > ul, #primary-menu > div > ul").toggleClass("show",!1),aF.toggleClass("pagemenu-active",!1),a2.toggleClass("primary-menu-open",!1)),aX("html,body").stop(!0).animate({scrollTop:aX(h).offset().top-Number(g)},Number(f),i),am=Number(g)
}return !1
})
}},onepageScroller:function(){aE.find("li").removeClass("current"),aE.find('a[data-href="#'+SEMICOLON.header.onePageCurrentSection()+'"]').parent("li").addClass("current")
},onePageCurrentSection:function(){var a="home",b=aO.outerHeight();
return a2.hasClass("side-header")&&(b=0),af.each(function(c){var f=aX(this).offset().top,e=aI.scrollTop(),d=b+am;
e+d>=f&&e<f+aX(this).height()&&aX(this).attr("id")!=a&&(a=aX(this).attr("id"))
}),a
},logo:function(){!aJ.hasClass("dark")&&!a2.hasClass("dark")||aO.hasClass("not-dark")?(aM&&aW.find("img").attr("src",aM),aV&&aP.find("img").attr("src",aV)):(aG&&aW.find("img").attr("src",aG),ay&&aP.find("img").attr("src",ay)),aJ.hasClass("sticky-header")&&(al&&aW.find("img").attr("src",al),a0&&aP.find("img").attr("src",a0)),(a2.hasClass("device-xs")||a2.hasClass("device-xxs"))&&(aD&&aW.find("img").attr("src",aD),ah&&aP.find("img").attr("src",ah))
},stickyMenuClass:function(){if(aH){var d=aH.split(/ +/)
}else{var d=""
}var c=d.length;
if(c>0){var b=0;
for(b=0;
c>b;
b++){"not-dark"==d[b]?(aJ.removeClass("dark"),aO.addClass("not-dark")):"dark"==d[b]?(aO.removeClass("not-dark force-not-dark"),aJ.hasClass(d[b])||aJ.addClass(d[b])):aJ.hasClass(d[b])||aJ.addClass(d[b])
}}},responsiveMenuClass:function(){if(a2.hasClass("device-xs")||a2.hasClass("device-xxs")||a2.hasClass("device-sm")){if(aU){var c=aU.split(/ +/)
}else{var c=""
}var b=c.length;
if(b>0){var a=0;
for(a=0;
b>a;
a++){"not-dark"==c[a]?(aJ.removeClass("dark"),aO.addClass("not-dark")):"dark"==c[a]?(aO.removeClass("not-dark force-not-dark"),aJ.hasClass(c[a])||aJ.addClass(c[a])):aJ.hasClass(c[a])||aJ.addClass(c[a])
}}SEMICOLON.header.logo()
}},topsocial:function(){az.length>0&&(a2.hasClass("device-md")||a2.hasClass("device-lg")?(az.show(),az.find("a").css({width:40}),az.find(".ts-text").each(function(){var b=aX(this).clone().css({visibility:"hidden",display:"inline-block","font-size":"13px","font-weight":"bold"}).appendTo(a2),a=b.innerWidth()+52;
aX(this).parent("a").attr("data-hover-width",a),b.remove()
}),az.find("a").hover(function(){aX(this).find(".ts-text").length>0&&aX(this).css({width:aX(this).attr("data-hover-width")})
},function(){aX(this).css({width:40})
})):(az.show(),az.find("a").css({width:40}),az.find("a").each(function(){var a=aX(this).find(".ts-text").text();
aX(this).attr("title",a)
}),az.find("a").hover(function(){aX(this).css({width:40})
},function(){aX(this).css({width:40})
}),a2.hasClass("device-xxs")&&(az.hide(),az.slice(0,8).show())))
},topsearch:function(){aX(document).on("click",function(a){aX(a.target).closest("#top-search").length||a2.toggleClass("top-search-open",!1),aX(a.target).closest("#top-cart").length||aA.toggleClass("top-cart-open",!1),aX(a.target).closest("#page-menu").length||aF.toggleClass("pagemenu-active",!1),aX(a.target).closest("#side-panel").length||a2.toggleClass("side-panel-open",!1),aX(a.target).closest("#primary-menu.mobile-menu-off-canvas > ul").length||aX("#primary-menu.mobile-menu-off-canvas > ul").toggleClass("show",!1),aX(a.target).closest("#primary-menu.mobile-menu-off-canvas > div > ul").length||aX("#primary-menu.mobile-menu-off-canvas > div > ul").toggleClass("show",!1)
}),aX("#top-search-trigger").click(function(a){a2.toggleClass("top-search-open"),aA.toggleClass("top-cart-open",!1),aX("#primary-menu > ul, #primary-menu > div > ul").toggleClass("show",!1),aF.toggleClass("pagemenu-active",!1),a2.hasClass("top-search-open")&&a3.find("input").focus(),a.stopPropagation(),a.preventDefault()
})
},topcart:function(){aX("#top-cart-trigger").click(function(a){aF.toggleClass("pagemenu-active",!1),aA.toggleClass("top-cart-open"),a.stopPropagation(),a.preventDefault()
})
}},SEMICOLON.slider={init:function(){SEMICOLON.slider.sliderParallaxDimensions(),SEMICOLON.slider.sliderRun(),SEMICOLON.slider.sliderParallax(),SEMICOLON.slider.sliderElementsFade(),SEMICOLON.slider.captionPosition()
},sliderParallaxDimensions:function(){if(aw.find(".slider-parallax-inner").length<1){return !0
}if(a2.hasClass("device-lg")||a2.hasClass("device-md")||a2.hasClass("device-sm")){var b=aw.outerHeight(),a=aw.outerWidth();
(aw.hasClass("revslider-wrap")||aw.find(".carousel-widget").length>0)&&(b=aw.find(".slider-parallax-inner").children().first().outerHeight(),aw.height(b)),aw.find(".slider-parallax-inner").height(b),a2.hasClass("side-header")&&aw.find(".slider-parallax-inner").width(a),a2.hasClass("stretched")||(a=aT.outerWidth(),aw.find(".slider-parallax-inner").width(a))
}else{aw.find(".slider-parallax-inner").css({width:"",height:""})
}ao&&ao.update(!0)
},sliderRun:function(){if("undefined"==typeof Swiper){return"sliderRun: Swiper not Defined.",!0
}if(aR.hasClass("customjs")){return !0
}if(aR.hasClass("swiper_wrapper")){var A=aR.filter(".swiper_wrapper"),y=A.attr("data-direction"),p=A.attr("data-speed"),B=A.attr("data-autoplay"),g=A.attr("data-loop"),e=A.attr("data-effect"),b=A.attr("data-grab"),k=A.find("#slide-number-total"),w=A.find("#slide-number-current"),x=A.attr("data-video-autoplay");
if(p||(p=300),y||(y="horizontal"),B&&(B=Number(B)),g="true"==g?!0:!1,e||(e="slide"),b="false"==b?!1:!0,x="false"==x?!1:!0,A.find(".swiper-pagination").length>0){var z=".swiper-pagination",q=!0
}else{var z="",q=!1
}var v="#slider-arrow-right",j="#slider-arrow-left";
ao=new Swiper(A.find(".swiper-parent"),{direction:y,speed:Number(p),autoplay:B,loop:g,effect:e,slidesPerView:1,grabCursor:b,pagination:z,paginationClickable:q,prevButton:j,nextButton:v,onInit:function(c){SEMICOLON.slider.sliderParallaxDimensions(),A.find(".yt-bg-player").removeClass("customjs"),SEMICOLON.widget.youtubeBgVideo(),aX(".swiper-slide-active [data-caption-animate]").each(function(){var h=aX(this),d=h.attr("data-caption-delay"),f=0;
if(f=d?Number(d)+750:750,!h.hasClass("animated")){h.addClass("not-animated");
var l=h.attr("data-caption-animate");
setTimeout(function(){h.removeClass("not-animated").addClass(l+" animated")
},f)
}}),aX("[data-caption-animate]").each(function(){var f=aX(this),d=f.attr("data-caption-animate");
return f.parents(".swiper-slide").hasClass("swiper-slide-active")?!0:void f.removeClass("animated").removeClass(d).addClass("not-animated")
}),SEMICOLON.slider.swiperSliderMenu()
},onSlideChangeStart:function(c){w.length>0&&(1==g?w.html(Number(A.find(".swiper-slide.swiper-slide-active").attr("data-swiper-slide-index"))+1):w.html(ao.activeIndex+1)),aX("[data-caption-animate]").each(function(){var f=aX(this),d=f.attr("data-caption-animate");
return f.parents(".swiper-slide").hasClass("swiper-slide-active")?!0:void f.removeClass("animated").removeClass(d).addClass("not-animated")
}),SEMICOLON.slider.swiperSliderMenu()
},onSlideChangeEnd:function(c){A.find(".swiper-slide").each(function(){var a=aX(this);
a.find("video").length>0&&1==x&&a.find("video").get(0).pause(),a.find(".yt-bg-player.mb_YTPlayer:not(.customjs)").length>0&&a.find(".yt-bg-player.mb_YTPlayer:not(.customjs)").YTPPause()
}),A.find('.swiper-slide:not(".swiper-slide-active")').each(function(){var a=aX(this);
a.find("video").length>0&&0!=a.find("video").get(0).currentTime&&(a.find("video").get(0).currentTime=0),a.find(".yt-bg-player.mb_YTPlayer:not(.customjs)").length>0&&a.find(".yt-bg-player.mb_YTPlayer:not(.customjs)").YTPGetPlayer().seekTo(a.find(".yt-bg-player.mb_YTPlayer:not(.customjs)").attr("data-start"))
}),A.find(".swiper-slide.swiper-slide-active").find("video").length>0&&1==x&&A.find(".swiper-slide.swiper-slide-active").find("video").get(0).play(),A.find(".swiper-slide.swiper-slide-active").find(".yt-bg-player.mb_YTPlayer:not(.customjs)").length>0&&1==x&&A.find(".swiper-slide.swiper-slide-active").find(".yt-bg-player.mb_YTPlayer:not(.customjs)").YTPPlay(),A.find(".swiper-slide.swiper-slide-active [data-caption-animate]").each(function(){var h=aX(this),d=h.attr("data-caption-delay"),f=0;
if(f=d?Number(d)+300:300,!h.hasClass("animated")){h.addClass("not-animated");
var l=h.attr("data-caption-animate");
setTimeout(function(){h.removeClass("not-animated").addClass(l+" animated")
},f)
}})
}}),w.length>0&&(1==g?w.html(Number(A.find(".swiper-slide.swiper-slide-active").attr("data-swiper-slide-index"))+1):w.html(ao.activeIndex+1)),k.length>0&&k.html(A.find(".swiper-slide:not(.swiper-slide-duplicate)").length)
}},sliderParallaxOffset:function(){var c=0,b=aJ.outerHeight();
if((a2.hasClass("side-header")||aJ.hasClass("transparent-header"))&&(b=0),ag.length>0){var a=ag.outerHeight();
c=a+b
}else{c=b
}return aR.next("#header").length>0&&(c=0),c
},sliderParallax:function(){if(aw.length<1){return !0
}var a=SEMICOLON.slider.sliderParallaxOffset(),b=aw.outerHeight();
if(!a2.hasClass("device-lg")&&!a2.hasClass("device-md")||SEMICOLON.isMobile.any()){aw.find(".slider-parallax-inner").length>0?aX(".slider-parallax-inner,.slider-parallax .slider-caption,.ei-title").css({transform:"translateY(0px)"}):aX(".slider-parallax,.slider-parallax .slider-caption,.ei-title").css({transform:"translateY(0px)"})
}else{if(b+a+50>aI.scrollTop()){if(aw.addClass("slider-parallax-visible").removeClass("slider-parallax-invisible"),aI.scrollTop()>a){if(aw.find(".slider-parallax-inner").length>0){var d=((aI.scrollTop()-a)*-0.4).toFixed(0),c=((aI.scrollTop()-a)*-0.15).toFixed(0);
aw.find(".slider-parallax-inner").css({transform:"translateY("+d+"px)"}),aX(".slider-parallax .slider-caption,.ei-title").css({transform:"translateY("+c+"px)"})
}else{var d=((aI.scrollTop()-a)/1.5).toFixed(0),c=((aI.scrollTop()-a)/7).toFixed(0);
aw.css({transform:"translateY("+d+"px)"}),aX(".slider-parallax .slider-caption,.ei-title").css({transform:"translateY("+-c+"px)"})
}}else{aw.find(".slider-parallax-inner").length>0?aX(".slider-parallax-inner,.slider-parallax .slider-caption,.ei-title").css({transform:"translateY(0px)"}):aX(".slider-parallax,.slider-parallax .slider-caption,.ei-title").css({transform:"translateY(0px)"})
}}else{aw.addClass("slider-parallax-invisible").removeClass("slider-parallax-visible")
}requesting&&requestAnimationFrame(function(){SEMICOLON.slider.sliderParallax(),SEMICOLON.slider.sliderElementsFade()
})
}},sliderElementsFade:function(){if(aw.length>0){if(!a2.hasClass("device-lg")&&!a2.hasClass("device-md")||SEMICOLON.isMobile.any()){aw.find("#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next").css({opacity:1})
}else{var a=(SEMICOLON.slider.sliderParallaxOffset(),aw.outerHeight());
if(aR.length>0){if(aJ.hasClass("transparent-header")||aX("body").hasClass("side-header")){var b=100
}else{var b=0
}aw.find("#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next").css({opacity:1-1.85*(aI.scrollTop()-b)/a})
}}}},captionPosition:function(){aR.find(".slider-caption:not(.custom-caption-pos)").each(function(){var b=aX(this).outerHeight(),a=aR.outerHeight();
aX(this).parents("#slider").prev("#header").hasClass("transparent-header")&&(a2.hasClass("device-lg")||a2.hasClass("device-md"))?aX(this).parents("#slider").prev("#header").hasClass("floating-header")?aX(this).css({top:(a+160-b)/2+"px"}):aX(this).css({top:(a+100-b)/2+"px"}):aX(this).css({top:(a-b)/2+"px"})
})
},swiperSliderMenu:function(b){if(b="undefined"!=typeof b?b:!1,a2.hasClass("device-lg")||a2.hasClass("device-md")){var a=aR.find(".swiper-slide.swiper-slide-active");
SEMICOLON.slider.headerSchemeChanger(a,b)
}},revolutionSliderMenu:function(b){if(b="undefined"!=typeof b?b:!1,a2.hasClass("device-lg")||a2.hasClass("device-md")){var a=aR.find(".active-revslide");
SEMICOLON.slider.headerSchemeChanger(a,b)
}},headerSchemeChanger:function(d,b){if(d.length>0){var f=!1;
if(d.hasClass("dark")){if(aY){var e=aY.split(/ +/)
}else{var e=""
}var a=e.length;
if(a>0){var g=0;
for(g=0;
a>g;
g++){if("dark"==e[g]&&1==b){f=!0;
break
}}}aX("#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)").addClass("dark"),f||aX("#header.transparent-header.sticky-header,#header.transparent-header.semi-transparent.sticky-header,#header.transparent-header.floating-header.sticky-header").removeClass("dark"),aO.removeClass("not-dark")
}else{a2.hasClass("dark")?(d.addClass("not-dark"),aX("#header.transparent-header:not(.semi-transparent,.floating-header)").removeClass("dark"),aX("#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)").find("#header-wrap").addClass("not-dark")):(aX("#header.transparent-header:not(.semi-transparent,.floating-header)").removeClass("dark"),aO.removeClass("not-dark"))
}aJ.hasClass("sticky-header")&&SEMICOLON.header.stickyMenuClass(),SEMICOLON.header.logo()
}},owlCaptionInit:function(){au.length>0&&au.each(function(){var a=aX(this);
a.find(".owl-dot").length>0&&a.addClass("with-carousel-dots")
})
}},SEMICOLON.portfolio={init:function(){SEMICOLON.portfolio.ajaxload()
},gridInit:function(a){return aX().isotope?a.length<1?!0:a.hasClass("customjs")?!0:void a.each(function(){var d=aX(this),b=d.attr("data-transition"),c=d.attr("data-layout"),e=d.attr("data-stagger");
b||(b="0.65s"),c||(c="masonry"),e||(e=0),setTimeout(function(){d.hasClass("portfolio")?d.isotope({layoutMode:c,transitionDuration:b,stagger:Number(e),masonry:{columnWidth:d.find(".portfolio-item:not(.wide)")[0]}}):d.isotope({layoutMode:c,transitionDuration:b})
},300)
}):("gridInit: Isotope not Defined.",!0)
},filterInit:function(){return aX().isotope?av.length<1?!0:av.hasClass("customjs")?!0:void av.each(function(){var d=aX(this),b=d.attr("data-container"),c=d.attr("data-active-class"),e=d.attr("data-default");
c||(c="activeFilter"),d.find("a").click(function(){d.find("li").removeClass(c),aX(this).parent("li").addClass(c);
var a=aX(this).attr("data-filter");
return aX(b).isotope({filter:a}),!1
}),e&&(d.find("li").removeClass(c),d.find('[data-filter="'+e+'"]').parent("li").addClass(c),aX(b).isotope({filter:e}))
}):("filterInit: Isotope not Defined.",!0)
},shuffleInit:function(){return aX().isotope?aX(".portfolio-shuffle").length<1?!0:void aX(".portfolio-shuffle").click(function(){var c=aX(this),b=c.attr("data-container");
aX(b).isotope("shuffle")
}):("shuffleInit: Isotope not Defined.",!0)
},portfolioDescMargin:function(){var a=aX(".portfolio-overlay");
a.length>0&&a.each(function(){var d=aX(this);
if(d.find(".portfolio-desc").length>0){var b=d.outerHeight(),c=d.find(".portfolio-desc").outerHeight();
if(d.find("a.left-icon").length>0||d.find("a.right-icon").length>0||d.find("a.center-icon").length>0){var e=60
}else{var e=0
}var f=(b-c-e)/2;
d.find(".portfolio-desc").css({"margin-top":f})
}})
},arrange:function(){ar.length>0&&ar.each(function(){var a=aX(this);
SEMICOLON.initialize.setFullColumnWidth(a)
})
},ajaxload:function(){aX(".portfolio-ajax .portfolio-item a.center-icon").click(function(c){var b=aX(this).parents(".portfolio-item").attr("id");
aX(this).parents(".portfolio-item").hasClass("portfolio-active")||SEMICOLON.portfolio.loadItem(b,at),c.preventDefault()
})
},newNextPrev:function(d){var b=SEMICOLON.portfolio.getNextItem(d),c=SEMICOLON.portfolio.getPrevItem(d);
aX("#next-portfolio").attr("data-id",b),aX("#prev-portfolio").attr("data-id",c)
},loadItem:function(d,b,c){c||(c=!1);
var e=SEMICOLON.portfolio.getNextItem(d),g=SEMICOLON.portfolio.getPrevItem(d);
if(0==c){SEMICOLON.portfolio.closeItem(),ax.fadeIn();
var f=aX("#"+d).attr("data-loader");
aS.load(f,{portid:d,portnext:e,portprev:g},function(){SEMICOLON.portfolio.initializeAjax(d),SEMICOLON.portfolio.openItem(),aC.removeClass("portfolio-active"),aX("#"+d).addClass("portfolio-active")
})
}},closeItem:function(){ak&&ak.height()>32&&(ax.fadeIn(),ak.find("#portfolio-ajax-single").fadeOut("600",function(){aX(this).remove()
}),ak.removeClass("portfolio-ajax-opened"))
},openItem:function(){var d=ak.find("img").length,b=0;
if(d>0){ak.find("img").on("load",function(){b++;
var a=SEMICOLON.initialize.topScrollOffset();
if(d===b){aS.css({display:"block"}),ak.addClass("portfolio-ajax-opened"),ax.fadeOut();
setTimeout(function(){SEMICOLON.widget.loadFlexSlider(),SEMICOLON.initialize.lightbox(),SEMICOLON.initialize.resizeVideos(),SEMICOLON.widget.masonryThumbs(),aX("html,body").stop(!0).animate({scrollTop:ak.offset().top-a},900,"easeOutQuad")
},500)
}})
}else{var c=SEMICOLON.initialize.topScrollOffset();
aS.css({display:"block"}),ak.addClass("portfolio-ajax-opened"),ax.fadeOut();
setTimeout(function(){SEMICOLON.widget.loadFlexSlider(),SEMICOLON.initialize.lightbox(),SEMICOLON.initialize.resizeVideos(),SEMICOLON.widget.masonryThumbs(),aX("html,body").stop(!0).animate({scrollTop:ak.offset().top-c},900,"easeOutQuad")
},500)
}},getNextItem:function(d){var b="",c=aX("#"+d).next();
return 0!=c.length&&(b=c.attr("id")),b
},getPrevItem:function(d){var b="",c=aX("#"+d).prev();
return 0!=c.length&&(b=c.attr("id")),b
},initializeAjax:function(a){at=aX("#"+a),aX("#next-portfolio, #prev-portfolio").click(function(){var b=aX(this).attr("data-id");
return aC.removeClass("portfolio-active"),aX("#"+b).addClass("portfolio-active"),SEMICOLON.portfolio.loadItem(b,at),!1
}),aX("#close-portfolio").click(function(){return aS.fadeOut("600",function(){ak.find("#portfolio-ajax-single").remove()
}),ak.removeClass("portfolio-ajax-opened"),aC.removeClass("portfolio-active"),!1
})
}},SEMICOLON.widget={init:function(){SEMICOLON.widget.animations(),SEMICOLON.widget.youtubeBgVideo(),SEMICOLON.widget.tabs(),SEMICOLON.widget.tabsJustify(),SEMICOLON.widget.tabsResponsive(),SEMICOLON.widget.tabsResponsiveResize(),SEMICOLON.widget.toggles(),SEMICOLON.widget.accordions(),SEMICOLON.widget.counter(),SEMICOLON.widget.roundedSkill(),SEMICOLON.widget.progress(),SEMICOLON.widget.twitterFeed(),SEMICOLON.widget.flickrFeed(),SEMICOLON.widget.instagramPhotos("36286274.b9e559e.4824cbc1d0c94c23827dc4a2267a9f6b","b9e559ec7c284375bf41e9a9fb72ae01"),SEMICOLON.widget.dribbbleShots("01530280af335d298e756ed8ef786c8c4e92a50b88e53a185531b1a639e768b8"),SEMICOLON.widget.navTree(),SEMICOLON.widget.textRotater(),SEMICOLON.widget.carousel(),SEMICOLON.widget.linkScroll(),SEMICOLON.widget.contactForm(),SEMICOLON.widget.subscription(),SEMICOLON.widget.quickContact(),SEMICOLON.widget.stickySidebar(),SEMICOLON.widget.cookieNotify(),SEMICOLON.widget.extras()
},parallax:function(){return aX.stellar?void ((aq.length>0||ac.length>0||ap.length>0)&&(SEMICOLON.isMobile.any()?(aq.addClass("mobile-parallax"),ac.addClass("mobile-parallax"),ap.addClass("mobile-parallax")):aX.stellar({horizontalScrolling:!1,verticalOffset:150}))):("parallax: Stellar not Defined.",!0)
},animations:function(){if(!aX().appear){return"animations: Appear not Defined.",!0
}var a=aX("[data-animate]");
a.length>0&&(a2.hasClass("device-lg")||a2.hasClass("device-md")||a2.hasClass("device-sm"))&&a.each(function(){var d=aX(this),b=d.attr("data-animate-out"),c=d.attr("data-delay"),e=d.attr("data-delay-out"),h=0,g=3000;
if(d.parents(".fslider.no-thumbs-animate").length>0){return !0
}if(h=c?Number(c)+500:500,b&&e&&(g=Number(e)+h),!d.hasClass("animated")){d.addClass("not-animated");
var f=d.attr("data-animate");
d.appear(function(){setTimeout(function(){d.removeClass("not-animated").addClass(f+" animated")
},h),b&&setTimeout(function(){d.removeClass(f).addClass(b)
},g)
},{accX:0,accY:-120},"easeInCubic")
}})
},loadFlexSlider:function(){if(!aX().flexslider){return"loadFlexSlider: FlexSlider not Defined.",!0
}var a=aX(".fslider:not(.customjs)").find(".flexslider");
a.length>0&&a.each(function(){var E=aX(this),C=E.parent(".fslider").attr("data-animation"),w=E.parent(".fslider").attr("data-easing"),F=E.parent(".fslider").attr("data-direction"),k=E.parent(".fslider").attr("data-reverse"),j=E.parent(".fslider").attr("data-slideshow"),b=E.parent(".fslider").attr("data-pause"),v=E.parent(".fslider").attr("data-speed"),A=E.parent(".fslider").attr("data-video"),B=E.parent(".fslider").attr("data-pagi"),D=E.parent(".fslider").attr("data-arrows"),x=E.parent(".fslider").attr("data-thumbs"),z=E.parent(".fslider").attr("data-hover"),q=E.parent(".fslider").attr("data-smooth-height"),e=E.parent(".fslider").attr("data-touch"),y=!1;
C||(C="slide"),w&&"swing"!=w||(w="swing",y=!0),F||(F="horizontal"),k="true"==k?!0:!1,j=j?!1:!0,b||(b=5000),v||(v=600),A||(A=!1),q="false"==q?!1:!0,"vertical"==F&&(q=!1),B="false"==B?!1:!0,B="true"==x?"thumbnails":B,D="false"==D?!1:!0,z="false"==z?!1:!0,e="false"==e?!1:!0,E.flexslider({selector:".slider-wrap > .slide",animation:C,easing:w,direction:F,reverse:k,slideshow:j,slideshowSpeed:Number(b),animationSpeed:Number(v),pauseOnHover:z,video:A,controlNav:B,directionNav:D,smoothHeight:q,useCSS:y,touch:e,start:function(c){SEMICOLON.widget.animations(),SEMICOLON.initialize.verticalMiddle(),c.parent().removeClass("preloader2");
setTimeout(function(){aX(".grid-container").isotope("layout")
},1200);
SEMICOLON.initialize.lightbox(),aX(".flex-prev").html('<i class="glyphicon glyphicon-chevron-left"></i>'),aX(".flex-next").html('<i class="glyphicon glyphicon-chevron-right"></i>'),SEMICOLON.portfolio.portfolioDescMargin()
},after:function(){aX(".grid-container").hasClass("portfolio-full")&&(aX(".grid-container.portfolio-full").isotope("layout"),SEMICOLON.portfolio.portfolioDescMargin())
}})
})
},html5Video:function(){var a=aX(".video-wrap:has(video)");
a.length>0&&a.each(function(){var p=aX(this),m=p.find("video"),h=p.outerWidth(),q=p.outerHeight(),f=m.outerWidth(),e=m.outerHeight();
if(q>e){var b=f/e,g=q*b,j=(g-h)/2;
m.css({width:g+"px",height:q+"px",left:-j+"px"})
}else{var j=(e-q)/2;
m.css({width:f+"px",height:e+"px",top:-j+"px"})
}if(SEMICOLON.isMobile.any()&&!p.hasClass("no-placeholder")){var k=m.attr("poster");
""!=k&&p.append('<div class="video-placeholder" style="background-image: url('+k+');"></div>'),m.hide()
}})
},youtubeBgVideo:function(){if(!aX().mb_YTPlayer){return"youtubeBgVideo: YoutubeBG Plugin not Defined.",!0
}var a=aX(".yt-bg-player");
return a.hasClass("customjs")?!0:void (a.length>0&&a.each(function(){var A=aX(this),y=A.attr("data-video"),p=A.attr("data-mute"),B=A.attr("data-ratio"),g=A.attr("data-quality"),e=A.attr("data-opacity"),b=A.attr("data-container"),k=A.attr("data-optimize"),w=A.attr("data-loop"),x=A.attr("data-volume"),z=A.attr("data-start"),q=A.attr("data-stop"),v=A.attr("data-autoplay"),j=A.attr("data-fullscreen");
p="false"==p?!1:!0,B||(B="16/9"),g||(g="hd720"),e||(e=1),b||(b="self"),k="false"==k?!1:!0,w="false"==w?!1:!0,x||(x=1),z||(z=0),q||(q=0),v="false"==v?!1:!0,j="true"==j?!0:!1,A.mb_YTPlayer({videoURL:y,mute:p,ratio:B,quality:g,opacity:Number(e),containment:b,optimizeDisplay:k,loop:w,vol:Number(x),startAt:Number(z),stopAt:Number(q),autoplay:v,realfullscreen:j,showYTLogo:!1,showControls:!1})
}))
},tabs:function(){if(!aX().tabs){return"tabs: Tabs not Defined.",!0
}var a=aX(".tabs:not(.customjs)");
a.length>0&&a.each(function(){var d=aX(this),b=d.attr("data-speed"),c=d.attr("data-active");
b||(b=400),c?c-=1:c=0,d.tabs({active:Number(c),show:{effect:"fade",duration:Number(b)}})
})
},tabsJustify:function(){if(aX("body").hasClass("device-xxs")||aX("body").hasClass("device-xs")){aX(".tabs.tabs-justify").find(".tab-nav > li").css({width:""})
}else{var a=aX(".tabs.tabs-justify");
a.length>0&&a.each(function(){var d=aX(this),b=d.find(".tab-nav > li"),c=b.length,e=0,f=0;
e=d.hasClass("tabs-bordered")||d.hasClass("tabs-bb")?d.find(".tab-nav").outerWidth():d.find("tab-nav").hasClass("tab-nav2")?d.find(".tab-nav").outerWidth()-10*c:d.find(".tab-nav").outerWidth()-30,f=Math.floor(e/c),b.css({width:f+"px"})
})
}},tabsResponsive:function(){if(!aX().tabs){return"tabs: Tabs not Defined.",!0
}var a=aX(".tabs.tabs-responsive");
return a.length<1?!0:void a.each(function(){var c=(aX(this),aX(this).find(".tab-nav")),b=aX(this).find(".tab-container");
c.children("li").each(function(){var e=aX(this),d=e.children("a"),f=d.attr("href"),g=d.html();
b.find(f).before('<div class="acctitle hide"><i class="acc-closed icon-ok-circle"></i><i class="acc-open icon-remove-circle"></i>'+g+"</div>")
})
})
},tabsResponsiveResize:function(){if(!aX().tabs){return"tabs: Tabs not Defined.",!0
}var a=aX(".tabs.tabs-responsive");
return a.length<1?!0:void a.each(function(){var c=aX(this),b=c.attr("data-accordion-style");
aX("body").hasClass("device-xs")||aX("body").hasClass("device-xxs")?(c.find(".tab-nav").addClass("hide"),c.find(".tab-container").addClass("accordion "+b+" clearfix"),c.find(".tab-content").addClass("acc_content"),c.find(".acctitle").removeClass("hide"),SEMICOLON.widget.accordions()):(aX("body").hasClass("device-sm")||aX("body").hasClass("device-md")||aX("body").hasClass("device-lg"))&&(c.find(".tab-nav").removeClass("hide"),c.find(".tab-container").removeClass("accordion "+b+" clearfix"),c.find(".tab-content").removeClass("acc_content"),c.find(".acctitle").addClass("hide"),c.tabs("refresh"))
})
},toggles:function(){var a=aX(".toggle");
a.length>0&&a.each(function(){var c=aX(this),b=c.attr("data-state");
"open"!=b?c.children(".togglec").hide():c.children(".togglet").addClass("toggleta"),c.children(".togglet").click(function(){return aX(this).toggleClass("toggleta").next(".togglec").slideToggle(300),!0
})
})
},accordions:function(){var a=aX(".accordion");
a.length>0&&a.each(function(){var d=aX(this),b=d.attr("data-state"),c=d.attr("data-active");
c?c-=1:c=0,d.find(".acc_content").hide(),"closed"!=b&&d.find(".acctitle:eq("+Number(c)+")").addClass("acctitlec").next().show(),d.find(".acctitle").click(function(){if(aX(this).next().is(":hidden")){d.find(".acctitle").removeClass("acctitlec").next().slideUp("normal");
var e=aX(this);
aX(this).toggleClass("acctitlec").next().slideDown("normal",function(){aX("html,body").stop(!0).animate({scrollTop:e.offset().top-(SEMICOLON.initialize.topScrollOffset()-40)},800,"easeOutQuad")
})
}return !1
})
})
},counter:function(){if(!aX().appear){return"counter: Appear not Defined.",!0
}if(!aX().countTo){return"counter: countTo not Defined.",!0
}var a=aX(".counter:not(.counter-instant)");
a.length>0&&a.each(function(){var c=aX(this),b=aX(this).find("span").attr("data-comma");
b=b?!0:!1,a2.hasClass("device-lg")||a2.hasClass("device-md")?c.appear(function(){SEMICOLON.widget.runCounter(c,b),c.parents(".common-height")&&SEMICOLON.initialize.maxHeight()
},{accX:0,accY:-120},"easeInCubic"):SEMICOLON.widget.runCounter(c,b)
})
},runCounter:function(b,a){1==a?b.find("span").countTo({formatter:function(d,c){return d=d.toFixed(c.decimals),d=d.replace(/\B(?=(\d{3})+(?!\d))/g,",")
}}):b.find("span").countTo()
},roundedSkill:function(){if(!aX().appear){return"roundedSkill: Appear not Defined.",!0
}if(!aX().easyPieChart){return"roundedSkill: EasyPieChart not Defined.",!0
}var a=aX(".rounded-skill");
a.length>0&&a.each(function(){var d=aX(this),c=d.attr("data-size"),e=d.attr("data-speed"),h=d.attr("data-width"),g=d.attr("data-color"),f=d.attr("data-trackcolor");
c||(c=140),e||(e=2000),h||(h=8),g||(g="#0093BF"),f||(f="rgba(0,0,0,0.04)");
var b={roundSkillSize:c,roundSkillSpeed:e,roundSkillWidth:h,roundSkillColor:g,roundSkillTrackColor:f};
a2.hasClass("device-lg")||a2.hasClass("device-md")?(d.css({width:c+"px",height:c+"px","line-height":c+"px"}).animate({opacity:0},10),d.appear(function(){if(!d.hasClass("skills-animated")){setTimeout(function(){d.css({opacity:1})
},100);
SEMICOLON.widget.runRoundedSkills(d,b),d.addClass("skills-animated")
}},{accX:0,accY:-120},"easeInCubic")):SEMICOLON.widget.runRoundedSkills(d,b)
})
},runRoundedSkills:function(b,a){b.easyPieChart({size:Number(a.roundSkillSize),animate:Number(a.roundSkillSpeed),scaleColor:!1,trackColor:a.roundSkillTrackColor,lineWidth:Number(a.roundSkillWidth),lineCap:"square",barColor:a.roundSkillColor})
},progress:function(){if(!aX().appear){return"progress: Appear not Defined.",!0
}var a=aX(".progress");
a.length>0&&a.each(function(){var c=aX(this),b=c.parent("li"),d=b.attr("data-percent");
a2.hasClass("device-lg")||a2.hasClass("device-md")?c.appear(function(){b.hasClass("skills-animated")||(c.find(".counter-instant span").countTo(),b.find(".progress").css({width:d+"%"}).addClass("skills-animated"))
},{accX:0,accY:-120},"easeInCubic"):(c.find(".counter-instant span").countTo(),b.find(".progress").css({width:d+"%"}))
})
},twitterFeed:function(){if("undefined"==typeof sm_format_twitter){return"twitterFeed: sm_format_twitter() not Defined.",!0
}if("undefined"==typeof sm_format_twitter3){return"twitterFeed: sm_format_twitter3() not Defined.",!0
}var a=aX(".twitter-feed");
a.length>0&&a.each(function(){var d=aX(this),b=d.attr("data-username"),c=d.attr("data-count"),e=d.attr("data-loader");
b||(b="twitter"),c||(c=3),e||(e="include/twitter/tweets.php"),aX.getJSON(e+"?username="+b+"&count="+c,function(f){d.hasClass("fslider")?d.find(".slider-wrap").html(sm_format_twitter3(f)).promise().done(function(){var g=setInterval(function(){if(d.find(".slide").length>1){d.removeClass("customjs");
setTimeout(function(){SEMICOLON.widget.loadFlexSlider()
},500);
clearInterval(g)
}},500)
}):d.html(sm_format_twitter(f))
})
})
},flickrFeed:function(){if(!aX().jflickrfeed){return"flickrFeed: jflickrfeed not Defined.",!0
}var a=aX(".flickr-feed");
a.length>0&&a.each(function(){var d=aX(this),b=d.attr("data-id"),c=d.attr("data-count"),e=d.attr("data-type"),f="photos_public.gne";
"group"==e&&(f="groups_pool.gne"),c||(c=9),d.jflickrfeed({feedapi:f,limit:Number(c),qstrings:{id:b},itemTemplate:'<a href="{{image_b}}" title="{{title}}" data-lightbox="gallery-item"><img src="{{image_s}}" alt="{{title}}" /></a>'},function(g){SEMICOLON.initialize.lightbox()
})
})
},instagramPhotos:function(d,b){if("undefined"==typeof Instafeed){return"Instafeed not Defined.",!0
}var c=aX(".instagram-photos");
c.length>0&&c.each(function(){var h=aX(this),p=h.attr("id"),f=h.attr("data-user"),e=h.attr("data-tag"),a=(h.attr("data-location"),h.attr("data-count")),g=h.attr("data-type"),j=h.attr("data-sortBy"),k=h.attr("data-resolution");
if(a||(a=9),j||(j="none"),k||(k="thumbnail"),"user"==g){var m=new Instafeed({target:p,get:g,userId:Number(f),limit:Number(a),sortBy:j,resolution:k,accessToken:d,clientId:b})
}else{if("tagged"==g){var m=new Instafeed({target:p,get:g,tagName:e,limit:Number(a),sortBy:j,resolution:k,clientId:b})
}else{if("location"==g){var m=new Instafeed({target:p,get:g,locationId:Number(f),limit:Number(a),sortBy:j,resolution:k,clientId:b})
}else{var m=new Instafeed({target:p,get:"popular",limit:Number(a),sortBy:j,resolution:k,clientId:b})
}}}m.run()
})
},dribbbleShots:function(c){if(!aX.jribbble){return"dribbbleShots: Jribbble not Defined.",!0
}if(!aX().imagesLoaded){return"dribbbleShots: imagesLoaded not Defined.",!0
}var b=aX(".dribbble-shots");
b.length>0&&(aX.jribbble.setToken(c),b.each(function(){var f=aX(this),d=f.attr("data-user"),e=f.attr("data-count"),g=f.attr("data-list"),h=f.attr("data-type");
f.addClass("customjs"),e||(e=9),"user"==h?aX.jribbble.users(d).shots({sort:"recent",page:1,per_page:Number(e)}).then(function(j){var i=[];
j.forEach(function(a){i.push('<a href="'+a.html_url+'" target="_blank">'),i.push('<img src="'+a.images.teaser+'" '),i.push('alt="'+a.title+'"></a>')
}),f.html(i.join("")),f.imagesLoaded().done(function(){f.removeClass("customjs"),SEMICOLON.widget.masonryThumbs()
})
}):"list"==h&&aX.jribbble.shots(g,{sort:"recent",page:1,per_page:Number(e)}).then(function(j){var i=[];
j.forEach(function(a){i.push('<a href="'+a.html_url+'" target="_blank">'),i.push('<img src="'+a.images.teaser+'" '),i.push('alt="'+a.title+'"></a>')
}),f.html(i.join("")),f.imagesLoaded().done(function(){f.removeClass("customjs"),SEMICOLON.widget.masonryThumbs()
})
})
}))
},navTree:function(){var a=aX(".nav-tree");
a.length>0&&a.each(function(){var d=aX(this),b=d.attr("data-speed"),c=d.attr("data-easing");
b||(b=250),c||(c="swing"),d.find("ul li:has(ul)").addClass("sub-menu"),d.find("ul li:has(ul) > a").append(' <i class="icon-angle-down"></i>'),d.hasClass("on-hover")?d.find("ul li:has(ul):not(.active)").hover(function(e){aX(this).children("ul").stop(!0,!0).slideDown(Number(b),c)
},function(){aX(this).children("ul").delay(250).slideUp(Number(b),c)
}):d.find("ul li:has(ul) > a").click(function(e){var f=aX(this);
d.find("ul li").not(f.parents()).removeClass("active"),f.parent().children("ul").slideToggle(Number(b),c,function(){aX(this).find("ul").hide(),aX(this).find("li.active").removeClass("active")
}),d.find("ul li > ul").not(f.parent().children("ul")).not(f.parents("ul")).slideUp(Number(b),c),f.parent("li:has(ul)").toggleClass("active"),e.preventDefault()
})
})
},carousel:function(){if(!aX().owlCarousel){return"carousel: Owl Carousel not Defined.",!0
}var a=aX(".carousel-widget:not(.customjs)");
return a.length<1?!0:void a.each(function(){var F=aX(this),R=F.attr("data-items"),G=F.attr("data-items-lg"),M=F.attr("data-items-md"),L=F.attr("data-items-sm"),J=F.attr("data-items-xs"),Q=F.attr("data-items-xxs"),W=F.attr("data-loop"),X=F.attr("data-autoplay"),E=F.attr("data-speed"),T=F.attr("data-animate-in"),V=F.attr("data-animate-out"),P=F.attr("data-nav"),K=F.attr("data-pagi"),U=F.attr("data-margin"),D=F.attr("data-stage-padding"),H=F.attr("data-merge"),j=F.attr("data-start"),Y=F.attr("data-rewind"),q=F.attr("data-slideby"),e=F.attr("data-center"),B=F.attr("data-lazyload"),A=F.attr("data-video"),k=F.attr("data-rtl");
if(R||(R=4),G||(G=Number(R)),M||(M=Number(G)),L||(L=Number(M)),J||(J=Number(L)),Q||(Q=Number(J)),E||(E=250),U||(U=20),D||(D=0),j||(j=0),q||(q=1),q="page"==q?"page":Number(q),W="true"==W?!0:!1,X){var z=Number(X);
X=!0
}else{X=!1;
var z=0
}T||(T=!1),V||(V=!1),P="false"==P?!1:!0,K="false"==K?!1:!0,Y="true"==Y?!0:!1,H="true"==H?!0:!1,e="true"==e?!0:!1,B="true"==B?!0:!1,A="true"==A?!0:!1,k="true"==k||a2.hasClass("rtl")?!0:!1,F.owlCarousel({margin:Number(U),loop:W,stagePadding:Number(D),merge:H,startPosition:Number(j),rewind:Y,slideBy:q,center:e,lazyLoad:B,nav:P,navText:['<i class="glyphicon glyphicon-chevron-left"></i>','<i class="glyphicon glyphicon-chevron-right"></i>'],autoplay:X,autoplayTimeout:z,autoplayHoverPause:!0,dots:K,smartSpeed:Number(E),fluidSpeed:Number(E),video:A,animateIn:T,animateOut:V,rtl:k,responsive:{0:{items:Number(Q)},480:{items:Number(J)},768:{items:Number(L)},992:{items:Number(M)},1200:{items:Number(G)}},onInitialized:function(){SEMICOLON.slider.owlCaptionInit(),SEMICOLON.slider.sliderParallaxDimensions(),SEMICOLON.initialize.lightbox()
}})
})
},masonryThumbs:function(){var a=aX(".masonry-thumbs:not(.customjs)");
a.length>0&&a.each(function(){var b=aX(this);
SEMICOLON.widget.masonryThumbsArrange(b)
})
},masonryThumbsArrange:function(a){return aX().isotope?(SEMICOLON.initialize.setFullColumnWidth(a),void a.isotope("layout")):("masonryThumbsArrange: Isotope not Defined.",!0)
},notifications:function(d){if("undefined"==typeof toastr){return"notifications: Toastr not Defined.",!0
}toastr.remove();
var b=aX(d),c=b.attr("data-notify-position"),e=b.attr("data-notify-type"),h=b.attr("data-notify-msg"),g=b.attr("data-notify-timeout"),f=b.attr("data-notify-close");
return c=c?"toast-"+b.attr("data-notify-position"):"toast-top-right",h||(h="Please set a message!"),g||(g=5000),f="true"==f?!0:!1,toastr.options.positionClass=c,toastr.options.timeOut=Number(g),toastr.options.closeButton=f,toastr.options.closeHtml='<button><i class="icon-remove"></i></button>',"warning"==e?toastr.warning(h):"error"==e?toastr.error(h):"success"==e?toastr.success(h):toastr.info(h),!1
},textRotater:function(){return aX().Morphext?void (aa.length>0&&aa.each(function(){var d=(aX(this),aX(this).attr("data-rotate")),b=aX(this).attr("data-speed"),c=aX(this).attr("data-separator");
d||(d="fade"),b||(b=1200),c||(c=",");
var e=aX(this).find(".t-rotate");
e.Morphext({animation:d,separator:c,speed:Number(b)})
})):("textRotater: Morphext not Defined.",!0)
},linkScroll:function(){aX("a[data-scrollto]").click(function(){var d=aX(this),b=d.attr("data-scrollto"),c=d.attr("data-speed"),e=d.attr("data-offset"),g=d.attr("data-easing"),f=d.attr("data-highlight");
return c||(c=750),e||(e=SEMICOLON.initialize.topScrollOffset()),g||(g="easeOutQuad"),aX("html,body").stop(!0).animate({scrollTop:aX(b).offset().top-Number(e)},Number(c),g,function(){if(f){if(aX(b).find(".highlight-me").length>0){aX(b).find(".highlight-me").animate({backgroundColor:f},300);
setTimeout(function(){aX(b).find(".highlight-me").animate({backgroundColor:"transparent"},300)
},500)
}else{aX(b).animate({backgroundColor:f},300);
setTimeout(function(){aX(b).animate({backgroundColor:"transparent"},300)
},500)
}}}),!1
})
},contactForm:function(){if(!aX().validate){return"contactForm: Form Validate not Defined.",!0
}if(!aX().ajaxSubmit){return"contactForm: jQuery Form not Defined.",!0
}var a=aX(".contact-widget:not(.customjs)");
return a.length<1?!0:void a.each(function(){var d=aX(this),b=d.attr("data-alert-type"),c=d.attr("data-loader"),e=d.find(".contact-form-result"),f=d.attr("data-redirect");
d.find("form").validate({submitHandler:function(g){if(e.hide(),"button"==c){var i=aX(g).find("button"),h=i.html();
i.html('<i class="icon-line-loader icon-spin nomargin"></i>')
}else{aX(g).find(".form-process").fadeIn()
}aX(g).ajaxSubmit({target:e,dataType:"json",success:function(j){if("button"==c?i.html(h):aX(g).find(".form-process").fadeOut(),"error"!=j.alert&&f){return window.location.replace(f),!0
}if("inline"==b){if("error"==j.alert){var k="alert-danger"
}else{var k="alert-success"
}e.removeClass("alert-danger alert-success").addClass("alert "+k).html(j.message).slideDown(400)
}else{e.attr("data-notify-type",j.alert).attr("data-notify-msg",j.message).html(""),SEMICOLON.widget.notifications(e)
}aX(g).find(".g-recaptcha").children("div").length>0&&grecaptcha.reset(),"error"!=j.alert&&aX(g).clearForm()
}})
}})
})
},subscription:function(){if(!aX().validate){return"subscription: Form Validate not Defined.",!0
}if(!aX().ajaxSubmit){return"subscription: jQuery Form not Defined.",!0
}var a=aX(".subscribe-widget:not(.customjs)");
return a.length<1?!0:void a.each(function(){var d=aX(this),b=d.attr("data-alert-type"),c=d.attr("data-loader"),e=d.find(".widget-subscribe-form-result"),f=d.attr("data-redirect");
d.find("form").validate({submitHandler:function(g){if(e.hide(),"button"==c){var i=aX(g).find("button"),h=i.html();
i.html('<i class="icon-line-loader icon-spin nomargin"></i>')
}else{aX(g).find(".input-group-addon").find(".icon-email2").removeClass("icon-email2").addClass("icon-line-loader icon-spin")
}aX(g).ajaxSubmit({target:e,dataType:"json",resetForm:!0,success:function(j){if("button"==c?i.html(h):aX(g).find(".input-group-addon").find(".icon-line-loader").removeClass("icon-line-loader icon-spin").addClass("icon-email2"),"error"!=j.alert&&f){return window.location.replace(f),!0
}if("inline"==b){if("error"==j.alert){var k="alert-danger"
}else{var k="alert-success"
}e.addClass("alert "+k).html(j.message).slideDown(400)
}else{e.attr("data-notify-type",j.alert).attr("data-notify-msg",j.message).html(""),SEMICOLON.widget.notifications(e)
}}})
}})
})
},quickContact:function(){if(!aX().validate){return"quickContact: Form Validate not Defined.",!0
}if(!aX().ajaxSubmit){return"quickContact: jQuery Form not Defined.",!0
}var a=aX(".quick-contact-widget:not(.customjs)");
return a.length<1?!0:void a.each(function(){var d=aX(this),b=d.attr("data-alert-type"),c=d.attr("data-loader"),e=d.find(".quick-contact-form-result"),f=d.attr("data-redirect");
d.find("form").validate({submitHandler:function(g){if(e.hide(),aX(g).animate({opacity:0.4}),"button"==c){var i=aX(g).find("button"),h=i.html();
i.html('<i class="icon-line-loader icon-spin nomargin"></i>')
}else{aX(g).find(".form-process").fadeIn()
}aX(g).ajaxSubmit({target:e,dataType:"json",resetForm:!0,success:function(j){if(aX(g).animate({opacity:1}),"button"==c?i.html(h):aX(g).find(".form-process").fadeOut(),"error"!=j.alert&&f){return window.location.replace(f),!0
}if("inline"==b){if("error"==j.alert){var k="alert-danger"
}else{var k="alert-success"
}e.addClass("alert "+k).html(j.message).slideDown(400)
}else{e.attr("data-notify-type",j.alert).attr("data-notify-msg",j.message).html(""),SEMICOLON.widget.notifications(e)
}aX(g).find(".g-recaptcha").children("div").length>0&&grecaptcha.reset()
}})
}})
})
},stickySidebar:function(){if(!aX().scwStickySidebar){return"stickySidebar: Sticky Sidebar is not Defined.",!0
}var a=jQuery(".sticky-sidebar-wrap");
return a.length<1?!0:void a.each(function(){var d=aX(this),b=d.attr("data-offset-top"),c=d.attr("data-offset-bottom");
b||(b=110),c||(c=50),d.scwStickySidebar({additionalMarginTop:Number(b),additionalMarginBottom:Number(c)})
})
},cookieNotify:function(){if(!aX.cookie){return"cookieNotify: Cookie Function not defined.",!0
}if(a1.length>0){var a=a1.outerHeight();
a1.css({bottom:-a}),"yesConfirmed"!=aX.cookie("websiteUsesCookies")&&a1.css({bottom:0}),aX(".cookie-accept").click(function(){return a1.css({bottom:-a}),aX.cookie("websiteUsesCookies","yesConfirmed",{expires:30}),!1
})
}},extras:function(){aX().tooltip?aX('[data-toggle="tooltip"]').tooltip({container:"body"}):"extras: Bootstrap Tooltip not defined.",aX().popover?aX("[data-toggle=popover]").popover():"extras: Bootstrap Popover not defined.",aX(".style-msg").on("click",".close",function(a){aX(this).parents(".style-msg").slideUp(),a.preventDefault()
}),aX("#primary-menu-trigger,#overlay-menu-close").click(function(){return aX("#primary-menu").find("ul.mobile-primary-menu").length>0?aX("#primary-menu > ul.mobile-primary-menu, #primary-menu > div > ul.mobile-primary-menu").toggleClass("show"):aX("#primary-menu > ul, #primary-menu > div > ul").toggleClass("show"),a2.toggleClass("primary-menu-open"),!1
}),aX("#page-submenu-trigger").click(function(){return a2.toggleClass("top-search-open",!1),aF.toggleClass("pagemenu-active"),!1
}),aF.find("nav").click(function(a){a2.toggleClass("top-search-open",!1),aA.toggleClass("top-cart-open",!1)
}),SEMICOLON.isMobile.any()&&a2.addClass("device-touch")
}},SEMICOLON.isMobile={Android:function(){return navigator.userAgent.match(/Android/i)
},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)
},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)
},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)
},Windows:function(){return navigator.userAgent.match(/IEMobile/i)
},any:function(){return SEMICOLON.isMobile.Android()||SEMICOLON.isMobile.BlackBerry()||SEMICOLON.isMobile.iOS()||SEMICOLON.isMobile.Opera()||SEMICOLON.isMobile.Windows()
}},SEMICOLON.documentOnResize={init:function(){setTimeout(function(){SEMICOLON.header.topsocial(),SEMICOLON.header.fullWidthMenu(),SEMICOLON.header.overlayMenu(),SEMICOLON.initialize.fullScreen(),SEMICOLON.initialize.verticalMiddle(),SEMICOLON.initialize.maxHeight(),SEMICOLON.initialize.testimonialsGrid(),SEMICOLON.initialize.stickyFooter(),SEMICOLON.slider.sliderParallaxDimensions(),SEMICOLON.slider.captionPosition(),SEMICOLON.portfolio.arrange(),SEMICOLON.portfolio.portfolioDescMargin(),SEMICOLON.widget.tabsResponsiveResize(),SEMICOLON.widget.tabsJustify(),SEMICOLON.widget.html5Video(),SEMICOLON.widget.masonryThumbs(),SEMICOLON.initialize.dataResponsiveClasses(),SEMICOLON.initialize.dataResponsiveHeights(),an.length>0&&(an.hasClass(".customjs")||(aX().isotope?an.isotope("layout"):"documentOnResize > init: Isotope not defined.")),(a2.hasClass("device-lg")||a2.hasClass("device-md"))&&aX("#primary-menu").find("ul.mobile-primary-menu").removeClass("show")
},500);
aQ=aI.width()
}},SEMICOLON.documentOnReady={init:function(){SEMICOLON.initialize.init(),SEMICOLON.header.init(),aR.length>0&&SEMICOLON.slider.init(),ar.length>0&&SEMICOLON.portfolio.init(),SEMICOLON.widget.init(),SEMICOLON.documentOnReady.windowscroll()
},windowscroll:function(){var c=0,d=0,f=0;
aJ.length>0&&(c=aJ.offset().top),aJ.length>0&&(d=aO.offset().top),aF.length>0&&(f=aJ.length>0&&!aJ.hasClass("no-sticky")?aJ.hasClass("sticky-style-2")||aJ.hasClass("sticky-style-3")?aF.offset().top-aO.outerHeight():aF.offset().top-aJ.outerHeight():aF.offset().top);
var e=aJ.attr("data-sticky-offset");
if("undefined"!=typeof e){if("full"==e){d=aI.height();
var b=aJ.attr("data-sticky-offset-negative");
"undefined"!=typeof b&&(d=d-b-1)
}else{d=Number(e)
}}SEMICOLON.header.stickyMenu(d),SEMICOLON.header.stickyPageMenu(f),aI.on("scroll",function(){SEMICOLON.initialize.goToTopScroll(),aX("body.open-header.close-header-on-scroll").removeClass("side-header-open"),SEMICOLON.header.stickyMenu(d),SEMICOLON.header.stickyPageMenu(f),SEMICOLON.header.logo()
}),window.addEventListener("scroll",onScrollSliderParallax,!1),aE.length>0&&(aX().scrolled?aI.scrolled(function(){SEMICOLON.header.onepageScroller()
}):"windowscroll: Scrolled Function not defined.")
}},SEMICOLON.documentOnLoad={init:function(){SEMICOLON.slider.captionPosition(),SEMICOLON.slider.swiperSliderMenu(!0),SEMICOLON.slider.revolutionSliderMenu(!0),SEMICOLON.initialize.maxHeight(),SEMICOLON.initialize.testimonialsGrid(),SEMICOLON.initialize.verticalMiddle(),SEMICOLON.initialize.stickFooterOnSmall(),SEMICOLON.initialize.stickyFooter(),SEMICOLON.portfolio.gridInit(an),SEMICOLON.portfolio.filterInit(),SEMICOLON.portfolio.shuffleInit(),SEMICOLON.portfolio.arrange(),SEMICOLON.portfolio.portfolioDescMargin(),SEMICOLON.widget.parallax(),SEMICOLON.widget.loadFlexSlider(),SEMICOLON.widget.html5Video(),SEMICOLON.widget.masonryThumbs(),SEMICOLON.header.topsocial(),SEMICOLON.header.responsiveMenuClass(),SEMICOLON.initialize.modal()
}};
var aI=aX(window),a2=aX("body"),aT=aX("#wrapper"),aJ=aX("#header"),aO=aX("#header-wrap"),aN=aX("#content"),aK=aX("#footer"),aQ=aI.width(),aY=aJ.attr("class"),aZ=aO.attr("class"),aH=aJ.attr("data-sticky-class"),aU=aJ.attr("data-responsive-class"),aW=aX("#logo").find(".standard-logo"),aP=(aW.find("img").outerWidth(),aX("#logo").find(".retina-logo")),aM=aW.find("img").attr("src"),aV=aP.find("img").attr("src"),aG=aW.attr("data-dark-logo"),ay=aP.attr("data-dark-logo"),al=aW.attr("data-sticky-logo"),a0=aP.attr("data-sticky-logo"),aD=aW.attr("data-mobile-logo"),ah=aP.attr("data-mobile-logo"),aF=aX("#page-menu"),aE=aX(".one-page-menu"),am=0,ar=aX(".portfolio"),an=(aX(".shop"),aX(".grid-container")),aR=aX("#slider"),aw=aX(".slider-parallax"),ao="",ag=aX("#page-title"),aC=aX(".portfolio-ajax").find(".portfolio-item"),ak=aX("#portfolio-ajax-wrap"),aS=aX("#portfolio-ajax-container"),ax=aX("#portfolio-ajax-loader"),av=aX(".portfolio-filter,.custom-filter"),at="",a3=aX("#top-search"),aA=aX("#top-cart"),ai=aX(".vertical-middle"),az=aX("#top-social").find("li"),aL=aX(".si-sticky"),ab=aX(".dots-menu"),ad=aX("#gotoTop"),ae=aX(".full-screen"),aj=aX(".common-height"),aB=aX(".testimonials-grid"),af=aX(".page-section"),au=aX(".owl-carousel"),aq=aX(".parallax"),ac=aX(".page-title-parallax"),ap=aX(".portfolio-parallax").find(".portfolio-image"),aa=aX(".text-rotater"),a1=aX("#cookie-notification");
aX(document).ready(SEMICOLON.documentOnReady.init),aI.load(SEMICOLON.documentOnLoad.init),aI.on("resize",SEMICOLON.documentOnResize.init)
}(jQuery);
jQuery(document).ready(function(b){var a=b("#primary-menu").find('a[href="both-sidebar.php"]');
a.attr("href","sticky-sidebar.php"),a.find("div").html('Sticky Sidebar <div class="label bgcolor nott" style="position: relative; top: -1px; margin-left: 5px;">New</div>')
});
function initMap(){$("#geoMetricPanel").hide();
var p={lat:40.7127837,lng:-74.00594130000002};
if($("#leftMapContainer").length>0){var j=new google.maps.Map(document.getElementById("leftMapContainer"),{zoom:8,scrollwheel:false,center:p});
var n=new google.maps.Marker({position:p,map:j})
}var i={lat:40.7127837,lng:-74.00594130000002};
if($("#rightMapContainer").length>0){var c=new google.maps.Map(document.getElementById("rightMapContainer"),{zoom:8,scrollwheel:false,center:i});
var o=new google.maps.Marker({position:i,map:c})
}var f={lat:48.856614,lng:2.3522219000000177};
if($("#containerMap").length>0){var k=new google.maps.Map(document.getElementById("containerMap"),{zoom:8,scrollwheel:false,center:f});
var d=new google.maps.Marker({position:f,map:k})
}if(!!navigator.geolocation&&$("#google_canvas").length>0){var b;
var e={zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP};
b=new google.maps.Map(document.getElementById("google_canvas"),e);
navigator.geolocation.getCurrentPosition(function(q){var r=new google.maps.LatLng(q.coords.latitude,q.coords.longitude);
var s=new google.maps.InfoWindow({map:b,position:r,content:"<h1>Geolocation!</h1><h2>Latitude: "+q.coords.latitude+"</h2><h2>Longitude: "+q.coords.longitude+"</h2>"});
b.setCenter(r)
})
}if($("#customMap").length>0){var m=new google.maps.Map(document.getElementById("customMap"),{zoom:8,scrollwheel:false,center:{lat:-34.397,lng:150.644}});
var l=(document.getElementById("address"));
var g=new google.maps.InfoWindow();
var h=new google.maps.Marker({map:m,anchorPoint:new google.maps.Point(0,-29)});
var a=new google.maps.places.Autocomplete(l);
a.bindTo("bounds",m);
a.addListener("place_changed",function(){g.close();
h.setVisible(false);
var r=a.getPlace();
if(!r.geometry){window.alert("Autocomplete's returned place contains no geometry");
return
}if(r.geometry.viewport){m.fitBounds(r.geometry.viewport)
}else{m.setCenter(r.geometry.location);
m.setZoom(17)
}h.setIcon(({url:r.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(35,35)}));
h.setPosition(r.geometry.location);
h.setVisible(true);
var q="";
if(r.address_components){q=[(r.address_components[0]&&r.address_components[0].short_name||""),(r.address_components[1]&&r.address_components[1].short_name||""),(r.address_components[2]&&r.address_components[2].short_name||"")].join(" ")
}g.setContent("<div><strong>"+r.name+"</strong><br>"+q);
g.open(m,h)
})
}};