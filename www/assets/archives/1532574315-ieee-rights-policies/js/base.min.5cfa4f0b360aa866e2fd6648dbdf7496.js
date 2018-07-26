(function(f){var b=f(".dropdown-title"),c=f(".dropdown_title"),a=f(".dropdown-title").length,g=[],e=[];
getValues(a,b,g,e);
setDropdown(a,b,c,g,e);
f(".dropdown_title").dblclick(function(i){i.preventDefault()
});
f(".dropdown_title").on("click",function(j){j.preventDefault();
var i=f.trim(f(this).parent().find("li:first a").text());
if(f.trim(f(this).text())==i){setTimeout(function(){f(".dropdown-menu").scrollTop(0)
},10)
}});
f(".dropdown-selector li").on("click",function(i){if(window.innerWidth>=992){i.preventDefault()
}f(this).parent().siblings(".dropdown_title").html(f(this).find("a").html());
f(this).parent().parent().siblings("a").attr({href:f(this).find("a").attr("href"),trarget:f(this).find("a").attr("target")});
f(this).parent().find("i").removeClass("selected");
f(this).find("i").addClass("selected")
});
updateFun();
var h=false;
f("body").prepend('<div class="gray-layer"></div>');
f(".gray-layer").hide();
f(".navbar-toggle, .gray-layer").on("click",function(k){f(".dropdown-wrap").hide();
f(".main-menu li").removeClass("current");
f(".accordian-iocns").removeClass("collapsed");
f(".footer .accordion").hide();
f(".foot-top-title a").removeClass("minus-ico");
var j=f("#page-header").height();
var i=f(window).height()-50;
if(h==false){f(".header-block").css({transition:"0.3s",width:"320","max-height":i});
f(".gray-layer").show();
h=true;
lockScroll()
}else{f(".header-block").css({transition:"0.3s",width:"calc(0%)"});
f(".gray-layer").hide();
h=false;
unlockScroll()
}});
if(window.innerWidth>992){f(".site-navigation ul.main-menu > li").addClass("hover");
f(".foot-top-title").removeClass("footer-title-click");
f(".nav-link").addClass("setMenuHeight")
}else{f(".site-navigation ul.main-menu > li").removeClass("hover");
f(".foot-top-title").addClass("footer-title-click");
f(".nav-link").removeClass("setMenuHeight")
}f(document).on({mouseenter:function(){f(".site-navigation ul.main-menu > li").removeClass("active");
var t=f(this),i,k=f(this).children(".dropdown-wrap"),m=f(".dropdown-wrap .dropdown-selector .selector"),o=f(this).find(".dropdown-wrap .dropdown-selector .selector .dropdown_title"),r=f(this).find(".dropdown-wrap .dropdown-selector .selector .dropdown-menu li").first("a").text();
t.addClass("active");
m.removeClass("open");
o.html(r);
t.find(".dropdown-wrap").show();
f(".dropdown-wrap .dropdown-selector .selector .dropdown-menu li i").removeClass("selected");
f(".dropdown-wrap .dropdown-selector .selector .dropdown-menu li:first-child i").addClass("selected");
var q=t.find(".dropdown-wrap").height(),u=12,p=t.find(".rte-description").height()+50,l=t.find(".dropdown-title").height()+15,n=t.find(".dropdown-selector").height()+30,s=t.find(".btns-ieee").height();
var j=q-(u+p+l+n+s);
if(s==null||s==0){j=j-20
}i=t.find(".dropdown-menu").height();
if(i<j){t.find(".dropdown-menu").css("overflow-y","unset")
}else{t.find(".dropdown-menu").height(j)
}},mouseleave:function(){f(".site-navigation ul.main-menu > li").removeClass("active");
var i=f(this),j=f(this).children(".dropdown-wrap");
i.removeClass("active");
i.find(".dropdown-wrap").hide()
}},".site-navigation .main-menu .hover");
f(".dropdown-wrap").hide();
f(".main-menu .accordianClick").on("click",function(j){j.preventDefault();
var i=f(this).parent();
if(i.hasClass("main-menu-item")){f(i).removeClass("main-menu-item")
}f(".main-menu li").not(i).addClass("main-menu-item");
f(".main-menu li").not(i).removeClass("current");
f(".accordian-iocns").not(this).removeClass("collapsed");
f(this).next(".dropdown-wrap").slideToggle("normal");
f(".main-menu-item .dropdown-wrap").slideUp("normal");
if(i.hasClass("current")){toggleClassDelay(f(this),"collapsed",400);
window.setTimeout(function(){i.toggleClass("current")
},400)
}else{i.toggleClass("current");
f(this).toggleClass("collapsed")
}});
f(document).on("mouseover",".setMenuHeight",function(){if(window.innerWidth>992){var i=f(this);
setTimeout(setMenuHeight,20,i)
}});
function d(){if(window.innerWidth>767){f(".footer .btn-style, .footer .btn-blue, .footer .btn-transparent").parent().find(".link-list").css("margin-top","18px");
f(".footer .btn-style, .footer .btn-blue, .footer .btn-transparent").parent().find(".link-list").prev().css("margin-top","0")
}else{f(".footer .btn-style, .footer .btn-blue, .footer .btn-transparent").parent().find(".link-list").css("margin-top","18px");
f(".footer .btn-style, .footer .btn-blue, .footer .btn-transparent").parent().find(".link-list").prev().css("margin-top","18px")
}}d();
f(".footer .accordion").hide();
f(".footer-title-click").on("click",function(i){i.preventDefault();
f(this).parent().siblings().find(".accordion").slideUp();
f(this).next().slideToggle();
if(f(this).find("a").hasClass("minus-ico")){f(this).find("a").removeClass("minus-ico")
}else{f(".foot-top-title a").removeClass("minus-ico");
f(this).find("a").addClass("minus-ico")
}});
f.fn.vAlign=function(){return this.each(function(l){var m=f(this).height();
var k=f(this).parent().height();
var j=Math.ceil((k-m)/2);
f(this).css("padding-top",j)
})
};
f(".pagetitle div, .section-header div, .section-header-orange div, .section-header-gray div").vAlign();
f(window).on("resize",function(){updateFun();
d();
f(".gray-layer").hide();
setDropdown();
f(".dropdown-wrap").hide();
f(".main-menu > li").removeClass("current");
f(".accordian-iocns").removeClass("collapsed");
f(".site-navigation .main-menu li").removeClass("hover");
f(".site-navigation .dropdown-wrap .dropdown-left, .site-navigation .dropdown-wrap .dropdown-right").css("height","unset");
isMobileNav();
f(".pagetitle div, .section-header div, .section-header-orange div, .section-header-gray div").vAlign()
})
})(jQuery);
function setMenuHeight(d){var e=d.parent().find(".dropdown-wrap").find(".dropdown-left");
var c=e.height();
var a=d.parent().find(".dropdown-wrap").find(".dropdown-right");
var b=a.height();
if(c>b){a.height(c)
}else{e.height(b)
}}function toggleClassDelay(c,a,b){window.setTimeout(function(){c.toggleClass(a)
},b)
}function isMobileNav(){$(".footer .accordion").hide();
$(".foot-top-title a").removeClass("minus-ico");
if(window.innerWidth<=991){$(".accordian-iocns").addClass("accordianClick");
$(".site-navigation ul.main-menu > li").removeClass("hover");
$(".foot-top-title").addClass("footer-title-click");
$(".nav-link").removeClass("setMenuHeight")
}else{if(window.innerWidth>991){$(".accordian-iocns").removeClass("accordianClick");
$(".site-navigation ul.main-menu > li").addClass("hover");
$(".dropdown-wrap").hide();
$(".foot-top-title").removeClass("footer-title-click");
$(".nav-link").addClass("setMenuHeight")
}}}function updateFun(){if(window.innerWidth<992){$(".header-block").css({transition:"none",width:"0"});
menuToggle=false
}else{$(".header-block").css({width:"calc(100%)",transition:"none"})
}}function unlockScroll(){$html=$("html");
$body=$("body");
$html.css("overflow",$html.data("previous-overflow"));
var a=$html.data("scroll-position");
window.scrollTo(a[0],a[1]);
$body.css({"margin-right":0,"margin-bottom":0})
}function lockScroll(){$html=$("html");
$body=$("body");
var c=$body.outerWidth();
var e=$body.outerHeight();
var b=[self.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,self.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop];
$html.data("scroll-position",b);
$html.data("previous-overflow",$html.css("overflow"));
$html.css("overflow","hidden");
window.scrollTo(b[0],b[1]);
var d=$body.outerWidth()-c;
var a=$body.outerHeight()-e;
$body.css({"margin-right":d,"margin-bottom":a})
}function getValues(a,c,e,d){for(var b=0;
b<a;
b++){e.push($($(".dropdown-title")[b]).text());
d.push($($(".dropdown_title")[b]).text())
}}function setDropdown(a,c,d,f,e){for(var b=0;
b<a;
b++){c=$(".dropdown-title")[b];
d=$(".dropdown_title")[b];
fromElement=d;
if(window.innerWidth<992){$(fromElement).html(f[b]);
$($(fromElement).next().find("li")[0]).hide()
}else{$(fromElement).html(e[b]);
$($(fromElement).next().find("li")[0]).show()
}}}$("iframe").on("load",function(){window.scrollTo(0,0)
});