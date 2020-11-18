function printString(string) {
    console.log(string[0])
    if (string.length > 1) {
        printString( string.substring(1, string.length) )
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

function isPalindrome(string) {
    if (string.length <= 1) {
        return true 
    }
    else if (string[0] === string[string.length - 1]) {
        return isPalindrome(string.substr(1, [string.length - 2]))
    }
    else {
        return false 
    }
}
