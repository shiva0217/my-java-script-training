// declaration vs expressions
console.log(sum(1,2));
function sum(a,b){
    return a+b;
}
//expressions
let sum = function(a,b){
    return a+b;
}
console.log(sum(3,4));

//hoisting : when js search finds any function declaration in code, 
 //then it will put that declarations on top of the code before the compilation
 //js is a interpreter and compiler language