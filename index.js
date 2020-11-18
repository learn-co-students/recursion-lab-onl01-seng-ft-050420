function printString(string) {
    if (string.length > 0) {
        console.log(string[0])
        return printString( string.substring(1, string.length) )
    }
    else {
        return true
    }
}

function reverseString(string) {
    if (string !== "") {
        return reverseString( string.substr(1) ) + string.charAt(0);
    }
    else {
        return ''
    }
}
