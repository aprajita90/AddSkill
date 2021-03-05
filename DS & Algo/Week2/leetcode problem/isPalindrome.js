/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&\@\^\#\:\_\-\"\"\'\'\$\%\;\~\`\`\s+])/g,"").toLowerCase()
    var str = s.split('').reverse().join('');
    return (str === s)
};