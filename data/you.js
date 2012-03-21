
console.log("u opened youtube!!");

function getParameter(url, name) {
    var urlparts = url.split('?');
    if (urlparts.length > 1) {
        var parameters = urlparts[1].split('&');
        for (var i = 0; i < parameters.length; i++) {
            var paramparts = parameters[i].split('=');
            if (paramparts.length > 1 && unescape(paramparts[0]) == name) {
                return unescape(paramparts[1]);
            }
        }
    }
    return null;
}

var x=getParameter(window.location.href, 'v');

if (x!=null) {
postMessage({"m1":x,"m2":document.title});  
}
   


