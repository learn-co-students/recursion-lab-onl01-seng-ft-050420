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

function addUpTo(array, index) {
    if (index === 0) {
        return array[0]
    }
    else {
        array.splice(0, 2, array[0] + array[1])
        return addUpTo(array, index - 1) 
    }
}

// LOOP VERSION 
// function maxOf(array) {
//     let result = array.sort( (a,b) => { return a - b })
//     return result.slice(-1)[0]
// }

function maxOf(array) {
    if ( array.length === 1) {
        return array[0] 
    }
    else if (array[0] >= array[1]) {
        array.splice(1, 1)
        return maxOf(array)
    }
    else if ( array[0] <= array[1] ) {
        array.splice(0, 1) 
        return maxOf(array)
    }
}


// function includesNumber(array, target) {
//     array.sort( function(a,b) {return a - b })
//     let max = array.length - 1 
//     let index = Math.floor(Math.random() * max)
//     if ( array.length === 1 ) {
//         return array[0] === target 
//     }
//     else if ( array[index] < target ) {
//         array.splice(0, index + 1)
//         return includesNumber(array, target)
//     }
//     else if ( array[index] > target ) {
//         array.splice( (array.length - index ) * -1)
//         return includesNumber( array, target )
//     }
//     else if ( array[index] === target ) {
//         return true 
//     }
// }

function includesNumber( array, target ) {
    if ( array.length === 1 ) {
        return array[0] === target 
    }
    else if ( array[0] === target ) { 
        return true 
    }
    else {
        array.splice(0, 1)
        return includesNumber( array, target )
    }
}


//sort array 
//mathRandom an index in array length 
//if target is less than or greater than
//change start or end point of array and run again 