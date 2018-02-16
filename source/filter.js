'use strict';

const filter = function(string, validHtml){
    //return escape(string);
    //string.html();
    var words = string.split(' ');
    var ignoreRegExpString = "<?/?";
    validHtml.forEach(function(item, i, arr) {
        ignoreRegExpString = ignoreRegExpString + item + '|';
        });
    ignoreRegExpString = ignoreRegExpString + '>?';
    var ignoreRegExp = new RegExp(ignoreRegExpString);
    var output = " ";

    function escapeHtml(text) {
        'use strict';
        return text
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;');
    }
    console.log(ignoreRegExpString);
    words = words.map(function(item, i, arr){
        if(ignoreRegExp.test(item)){
            output = output + ' ' + item;
            console.log(item);
            
            }
        else{
            output = output + ' ' + escapeHtml(item);
            
            }
        });
    
    return output;
    }
