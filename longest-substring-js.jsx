function longestCommonSubstring(str1, str2){
    var longest = '';
    var longestLength = 0;
    for (var i =0 ; i<str1.length; i++){
        for (var j=i+1; j<=str1.length;j++){
            var substring = str1.substring(i,j);
            if(str2.indexOf(substring)!==-1 && substring.length > longestLength){
                longest = substring;
                longestLength = substring.length;
            }
        }
    }
    return longest;
}

console.log(longestCommonSubstring('naam','sanam'));