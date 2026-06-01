let add7 = (num) => num+7;  //arrow function example 
console.log(add7(10))       //good

let multiply = (a,b) => a*b;
console.log(multiply(3,2))      //good

function capitalize(str){
    let lower = str.toLowerCase();
    let first = lower.slice(0,1)
    let rest = lower.slice(1)        //get first character
    //console.log(first, rest)
    first = first.toUpperCase();
    //console.log(first)
    let final = first+rest
    return final
}
console.log(capitalize("abcd"), capitalize("ABCD"), capitalize("aBcD")) //good

let lastLetter = (str) => str.slice(-1) 
console.log(lastLetter("abcd")) //good

