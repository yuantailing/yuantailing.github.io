$(document).ready(function(){var a=encodeURIComponent(window.location.href);
var g=$("#mn-signin-link");
var b=g.attr("href");
var f=$("#xploreLogoutUrl").text();
var d=null;
if(typeof b!="undefined"&&(b.indexOf("=")==(b.length-1))){d=b+a;
$("a.sign-in-cls").attr("href",d)
}var c=$("#mn-calink-link");
var e=c.attr("href");
if(typeof e!="undefined"&&(e.indexOf("=")==(e.length-1))){c.attr("href",e+a)
}$.ajax({crossDomain:true,dataType:"json",xhrFields:{withCredentials:true},url:"js/get-quote.dynamic-metanav.json",type:"GET",cache:false,data:"",success:function(h){if(h&&h.success){if(h.data!==null){$(".cart-items-count").html(h.data.cartItemCount);
if(typeof h.data.userName!=="undefined"&&null!=h.data.userName){$("#mn-user-name-text").text(h.data.userName);
$(".anonymous-metanav-info").hide();
if((typeof h.data.webAccountUser!=="undefined")&&(h.data.webAccountUser===false)){$(".cart-count-link").hide()
}else{$(".cart-count-link").show()
}$(".logged-in-metanav-info").show();
SSOValidator.execute(true,null,h.data.webAccountUser)
}else{$(".anonymous-metanav-info").show();
$(".logged-in-metanav-info").hide();
SSOValidator.execute(false,d)
}}}else{console.log(h)
}},error:function(h){console.log(h)
}});
if(null!=f&&""!=f&&$("#mn-signout-link").length){$("#mn-signout-link").on("click",function(h){h.preventDefault();
$.ajax({url:f,type:"GET",dataType:"jsonp",jsonpCallback:function(i){window.location=$("#mn-signout-link").attr("href")
},success:function(i){}})
})
}});
var SSOValidator={execute:function(d,c,b){if($("#ssoValidatorUrl").length&&!SSOValidator.getCookie("wcmmode")){var a=$("#ssoValidatorUrl").text();
$.ajax({crossDomain:true,dataType:"json",url:a,cache:false,xhrFields:{withCredentials:true},success:function(e){if(!d&&(typeof e=="object"&&e.cookieValid&&(typeof b=="undefined"||b))){window.location=c
}else{if(d&&(typeof e=="object"&&!e.cookieValid)&&(typeof b!=="undefined"&&b)){var f=$("#mn-signout-link").attr("href");
window.location=f
}}},error:function(f){console.debug(f)
}})
}},getCookie:function(d){var b=d+"=";
var f=decodeURIComponent(document.cookie);
var a=f.split(";");
for(var e=0;
e<a.length;
e++){var g=a[e];
while(g.charAt(0)==" "){g=g.substring(1)
}if(g.indexOf(b)==0){return g.substring(b.length,g.length)
}}return""
}};
$(document).ready(function(){var e=$("#search-engine-id").val();
var b=$("#seacrh-tips-page-path-id").val();
if(b==null||b==undefined){b="#"
}if(e!=null&&e!=undefined){var d=e;
var c=document.createElement("script");
c.type="text/javascript";
c.async=true;
c.src="https://cse.google.com/cse.js?cx="+d;
var i=document.getElementsByTagName("script")[0];
i.parentNode.insertBefore(c,i);
google.setOnLoadCallback(function(){var l=new google.search.CustomSearchControl(e);
l.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
l.setRefinementStyle(google.search.SearchControl.REFINEMENT_AS_LINK);
l.setLinkTarget(google.search.Search.LINK_TARGET_SELF);
var n=new google.search.DrawOptions();
n.setDrawMode(google.search.SearchControl.DRAW_MODE_LINEAR);
n.enableSearchResultsOnly();
var k=g();
var o=k.replace(/\</g,"&lt;").replace(/\>/g,"&gt;");
var m=false;
var j;
l.setSearchCompleteCallback(this,function(q,p){j=p;
a(o);
h(o);
f(p,o)
});
l.draw("cse-search-results",n);
if(k){l.execute(k)
}},true);
function g(){var n="q";
var l=window.location.search.substr(1);
var m=l.split("&");
for(var k=0;
k<m.length;
k++){var j=m[k].split("=");
if(decodeURIComponent(j[0])==n){return decodeURIComponent(j[1].replace(/\+/g," "))
}}return""
}function h(j){if($(".gsc-refinementsArea").length>0){if($(".gsc-refinementLabel").length<=0){var l=$(".gsc-refinementsArea")[0];
var k=l.children;
var o=k[0];
var m=o.children;
for(var n=0;
n<m.length;
n++){l.appendChild(m[n])
}l.removeChild(o);
$(".gsc-refinementsArea").prepend('<div class="gsc-refinementLabel">Refine results for: <b>'+j+"</b></div>")
}}}(function(j){j.fn.available=function(k,m){var l="DOMSubtreeModified";
return this.each(function(){var p=j(this),o=p.find(k)[0];
if(o){return m(o)
}var n=function(q){o=p.find(k)[0];
if(o){p.unbind(l,n);
m(o)
}};
p.bind(l,n)
})
}
})(jQuery);
function f(k,j){if($(".gsc-result-info").length>0&&k.cursor!=null){jQuery(".gsc-control-wrapper-cse").available(".gsc-above-wrapper-area",function(o){var m=k.cursor.currentPageIndex*k.getNumResultsPerPage();
var p=k.cursor.estimatedResultCount;
var l=$("div.gsc-tabdActive div.gsc-result-info")[0];
if($(l).length>0){l.innerHTML="Showing "+(m+1)+" - "+((p-m)>10?(m+10):p)+" of "+k.cursor.resultCount+" for "+j+" ("+k.cursor.searchResultTime+" seconds)"
}else{var n="Showing "+(m+1)+" - "+((p-m)>10?(m+10):p)+" of "+k.cursor.resultCount+" for "+j+" ("+k.cursor.searchResultTime+" seconds)";
$(".gsc-tabdActive").prepend('<div class="gsc-above-wrapper-area2"><table cellspacing="0" cellpadding="0" class="gsc-above-wrapper-area-container"><tbody><tr><td class="gsc-result-info-container"><div class="gsc-result-info" id="resInfo-0">'+n+"</div></td></tr></tbody></table></div>")
}});
$(".gsc-above-wrapper-area").hide()
}}function a(k){if($(".gs-no-results-result").length>0){$(".gsc-above-wrapper-area")[0].style.border="none";
var j="<p>Your search - <b>"+k+'</b> did not match any documents.</p><p>Suggestions: <br/><ul>	<li>Make sure all words are spelled correctly.</li>	<li>Try different keywords.</li>	<li>Try more general keywords.</li>	<li>Try fewer keywords.</li></ul></p><p class="arrow-link"><a href='+b+">View more search tips</a></p>";
$(".gs-no-results-result").html('<div class="gs-snippet">'+j+"</div>")
}}}});
$(function(){if($("#calendar").size()>0){var e=function(){var o=null;
$.ajax({async:false,url:$("#eventDetailsServletPath")[0].value.concat("?calendarEventBasePath").concat("=").concat($("#basePath")[0].value),dataType:"JSON",success:function(p){o=p
}});
return o
}();
var m=[],d="",g=0,k={},b=new Date(),c=b.getMonth()+1,h=b.getFullYear(),a=h+"-"+c,f;
function l(p){for(var q=0;
q<e.data.length;
q+=1){var o=e.data[q];
if(o.monthyear===p){m=[];
f=o.eventList;
for(var q in f.eventItems){var r=f.eventItems[q];
m.push({eventDate:new Date(r.Date),eventTitle:r.Title,eventDescription:r.description,eventId:r.DateID,eventSpecDate:r.eventSpecificDate,eventtimeZone:r.TimeZone,learnMoreURL:r.learnMoreURL})
}k.events=m;
return m
}}}l(a);
if(m){var i=$("#calendar");
function j(){setTimeout(function(){var p=$(".ui-datepicker-header").find(".ui-datepicker-title");
var o=$('<a href="#" class="uparrow"></a>');
o.bind("click",function(){event.preventDefault();
$.datepicker._adjustDate(i,-1,"Y")
});
o.appendTo(p);
var q=$('<a href="#" class="downarrow"></a>');
q.bind("click",function(){event.preventDefault();
$.datepicker._adjustDate(i,+1,"Y")
});
q.appendTo(p)
},1)
}$("#calendar").datepicker({beforeShowDay:j(),beforeShowDay:function(p){var o=[true,"",null];
var q=$.grep(m,function(r){return r.eventDate.valueOf()===p.valueOf()
});
if(q.length){o=[true,"highlight",null]
}return o
},onSelect:function(r){j();
var o,p=new Date(r),q=null;
d=m.filter(function(s){return s.eventId==p.getDate()
});
if(d.length>0){n(d,g);
$(".events-prev-next .events-prev").addClass("disabled")
}if(d.length===1){$(".events-prev-next .events-prev").addClass("disabled");
$(".events-prev-next .events-next").addClass("disabled")
}},onChangeMonthYear:function(o,p){j();
a=o+"-"+p;
l(a)
}});
function n(q,p){var r=document.getElementById("eventsModal");
var o="";
o+='<div class="event-date-header"><span>'+q[p].eventSpecDate+' Events</span> <a href="#" class="close-btn">X</a></div><div class="event-time">'+q[p].eventtimeZone+'</div><div class="event-title">'+q[p].eventTitle+'</div><div class="event-description">'+q[p].eventDescription+'</div><a href="'+q[p].learnMoreURL+'" class="event-btn" target="_blank">Learn more</a><div class="events-prev-next"><span class="events-prev glyphicon glyphicon-triangle-top"></span><span class="events-next glyphicon glyphicon-triangle-bottom"></span></div>';
$(r).html(o);
r.style.display="block"
}$(document).on("click",".events-next",function(){if(g<(d.length-1)){g=g+1;
n(d,g);
if(g===(d.length-1)){$(".events-prev-next .events-next").addClass("disabled")
}}});
$(document).on("click",".events-prev",function(){if(g>0){g=g-1;
n(d,g);
if(g==0){$(".events-prev-next .events-prev").addClass("disabled")
}}});
$(document).on("click",".close-btn",function(){g=0;
$("#eventsModal").hide();
event.preventDefault()
})
}}});