function word(countString) {
    console.log(countString);
}
word("count this");
// parameter word taken as a string
// :number convert to numbers
function charCount(word) {
    return word.length;
}
// let variable myCount store charCount
// with the value "Hello World"
var myCount = charCount("Hello World");
console.log(myCount);
function second(word) {
    return word.replace(/\s/g, "").length;
}
var countTwo = second("Hello World");
console.log(second);
function both_charCount(word, spaces) {
    if (spaces) {
        return word.replace(/\s/g, "").length;
    }
    else {
        return word.length;
    }
}
var bothchar = both_charCount("test 1", false);
var bothchar1 = both_charCount("test 1", true);
var bothchar2 = both_charCount("test 1");
console.log(bothchar);
console.log(bothchar1);
console.log(bothchar2);
