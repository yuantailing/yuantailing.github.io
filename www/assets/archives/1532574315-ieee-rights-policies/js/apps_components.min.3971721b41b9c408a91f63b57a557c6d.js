var startIndex=1;
var pageNumber=1;
var resultsPerPage=10;
var totalEventPages;
function getParameterByName(b,a){if(!a){a=window.location.href
}b=b.replace(/[\[\]]/g,"\\$&");
var d=new RegExp("[?&]"+b+"(=([^&#]*)|&|#|$)"),c=d.exec(a);
if(!c){return null
}if(!c[2]){return""
}return decodeURIComponent(c[2].replace(/\+/g," "))
}var searchKey=getParameterByName("q");
if(searchKey){getSearchApiData(searchKey,startIndex)
}else{showNoResults()
}function getSearchApiData(e,d){if(d=="prev"){startIndex=parseInt(startIndex)-10;
pageNumber=parseInt(pageNumber)-1
}else{if(d=="next"){startIndex=parseInt(startIndex)+10;
pageNumber=parseInt(pageNumber)+1
}else{startIndex=parseInt(startIndex)
}}var c=$("#google-search").attr("data-search-key");
var a=$("#google-search").attr("data-search-id");
var b="https://www.googleapis.com/customsearch/v1?key="+c+"&cx="+a+"&q="+e+"&start="+startIndex+"";
$.getJSON(b,"",getSearchResultsData)
}function getSearchResultsData(d){var e=d.searchInformation.totalResults;
if(e>0){var g=e+" results";
$("#results-quantity").html(g);
totalListPages=Math.ceil(e/resultsPerPage);
var c="";
$(".teaser-title br").replaceWith(" ");
c+="<table class='font-f' width='100%' cellspacing='0' cellpadding='0' border='0'><tbody>";
for(var b=0;
b<d.items.length;
b++){var f=d.items[b];
var h=f.htmlSnippet.replace(/<br\s*\/?>/gi,"&nbsp;");
c+="<tr><td><div class='rea-title'><a href='"+f.link+"' target='_blank' class='font-e'>"+f.htmlTitle+"</a><p class='font-f'>"+h+" <a href='"+f.link+"' target='_blank'>More</a></p></div></td></tr>"
}c+="</tbody></table>";
$("#searchDataWrapper").html(c);
if(e>10){var a="";
a+="<a href='javascript:void(0);' class='btn-style pull-left' id='prevgSearchPage'><span aria-hidden='true'>&larr;</span> Prev</a><ul><li><a href='javascript:void(0);' class='active'>"+pageNumber+"</a></li><li><span> &nbsp; of "+totalListPages+"</span></li></ul> <a href='javascript:void(0);' class='btn-style pull-right' id='nextgSearchPage'>Next <span aria-hidden='true'>&rarr;</span></a>";
$("#pagination-div").html(a);
$("#nextgSearchPage").click(function(){getSearchApiData(searchKey,"next")
});
$("#prevgSearchPage").click(function(){getSearchApiData(searchKey,"prev")
});
if(pageNumber==1){$("#prevgSearchPage").off("click")
}else{if(pageNumber==totalListPages){$("#nextgSearchPage").off("click")
}}}}else{showNoResults()
}}function showNoResults(){$("#noResultsDiv").show();
$("#pagination-div").hide();
$("#searchDataWrapper").hide();
var a="0 results";
$("#results-quantity").html(a)
}$("[id='formId']").each(function(){var g="#"+$(this).val();
var e=g+"-result";
var f=g+"-success";
var a=g+"-error";
var d=$("#thankYouRedirect").val();
var c=$("#currentPage").val();
var b=$("#contactus").val();
$(f).hide();
$(a).hide();
$(".form-group").click(function(h){$(f).hide();
$(a).hide()
});
$(g).submit(function(h){h.preventDefault()
});
$(g).validate({submitHandler:function(h){$(h).animate({opacity:0.4});
$(h).find(".form-process").fadeIn();
$(h).ajaxSubmit({target:e,success:function(i){if(i.isSuccess=="true"){$(h).animate({opacity:1});
$(h).find(".form-process").fadeOut();
$(h).find(".form-control").val("");
$(h).find(".textarea").val("");
$(f).removeClass("hidden");
$(f).show();
if(d!=null&&d.length>0){window.location.href=d
}else{if($("#contactus").length==0){window.location.href=c+".html"
}}}else{$(h).animate({opacity:1});
$(h).find(".form-process").fadeOut();
$(a).removeClass("hidden");
$(a).show()
}},error:function(i,k,j){$(h).animate({opacity:1});
$(h).find(".form-process").fadeOut();
$(a).removeClass("hidden");
$(a).show()
}})
}})
});