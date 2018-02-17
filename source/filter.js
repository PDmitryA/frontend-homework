'use strict';

var symbols = {
    '&': "&amp;",
    '<': "&lt;",
    '>': "&gt;",
    '"': '&quot;',
    "'": '&#39;',
};

const filter = function(input, validTags){
    function rep(str) {
        if(symbols[str]) {
        	return symbols[str];
        }

        for(let value of validTags) {
        	if(str.indexOf(value) > 0) return str;
        }

        return str.replace(/[<>"']/g, rep);
    }
    return input.replace(/<[^>]+>|["'<>&]/g, rep);
}
