let numbers=[1,2,3,4,5];

console.log(numbers.indexOf(4));

//presence of element
if (numbers.indexOf(3) <0){
    console.log("absent");
}else {
    console.log("present");
}
//includes
if (numbers.includes(3) <0){
    console.log("absent");
}else {
    console.log("present");
}
// searching from specified number
let num =[1,2,3,4,5,6,3]
console.log(num.indexOf(3,3));

// 