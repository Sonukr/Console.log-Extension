
var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log(firstHref);
function getXPath( element ){
    var xpath = '';
    for ( ; element && element.nodeType == 1; element = element.parentNode )
    {
        var id = $(element.parentNode).children(element.tagName).index(element) + 1;
        id > 1 ? (id = '[' + id + ']') : (id = '');
        xpath = '/' + element.tagName.toLowerCase() + id + xpath;
    }
    return xpath;
}

$(document).click(function(e){
    console.log(e.target);
    console.log(getXPath(e.target));

});
