function count(countString: string){
    console.log(countString);

}

count("count this");

// parameter word taken as a string
// :number convert to numbers
function charCount(word:string):number{
    return word.length;
}

// let variable myCount store charCount
// with the value "Hello World"
let myCount = charCount("Hello World");
console.log(myCount);


function second(word:string):number{
    return word.replace(/\s/g, "").length;
}

let countTwo = second("Hello World");
console.log(second);

function both_charCount(word:string, spaces?:boolean):number{

    if(spaces){
        return word.replace(/\s/g, "").length;
    }
    else {
        return word.length;
    }
}

let bothchar = both_charCount("test 1", false);
let bothchar1 = both_charCount("test 1", true);
let bothchar2 = both_charCount("test 1");

console.log(bothchar);
console.log(bothchar1);
console.log(bothchar2);

