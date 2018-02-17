'use strict';

var symbols = {
'&': "&amp;",
'<': "&lt;",
'>': "&gt;",
'"': '&quot;',
"'": '&#39;',
};

function replacer(validTags, str) {
if(symbols[str]) return symbols[str];

for(let value of validTags) {
if(str.indexOf(value) > 0) return str;
}

let rep = replacer.bind(null, validTags);
return str.replace(/[<>"']/g, rep);
}

const filter = function(input, validTags){
    let rep = replacer.bind(null, validTags);
    return input.replace(/<[^>]+>|["'<>&]/g, rep);
}
