// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[!@#$%^&*(),.?":{}|<>_\s]/g, '').toLowerCase().split('').sort().join('');
    stringB = stringB.replace(/[!@#$%^&*(),.?":{}|<>_\s]/g, '').toLowerCase().split('').sort().join('');
    
    if (stringA === stringB) {
        return true;
    }
    return false;
}


module.exports = anagrams;
