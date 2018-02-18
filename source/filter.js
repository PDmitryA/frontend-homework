'use strict';



const filter = (input, validTags) => {
    let symbols = {
        '&': "&amp;",
        '<': "&lt;",
        '>': "&gt;",
        '"': '&quot;',
        "'": '&#39;',
    };

    const rep = (str) => {
        if(symbols[str]) {
            return symbols[str];
        }

        for(let value of validTags) {
            if(str.indexOf(value) > 0) { 
                return str;
            }
        }

        return str.replace(/[<>"']/g, rep);
    }
    return input.replace(/<[^>]+>|["'<>&]/g, rep);
}
