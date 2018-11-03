let num = [1,2,3,4];
let num1 = [5,6,7];
let combinedlist = num.concat(num1);
console.log(combinedlist);

// slicing
let sicedlist = combinedlist.slice(2,4);
console.log(sicedlist);

// spread 
let combinedList= [...num,'a','b',...num1,8,9];
console.log(...combinedList);

//iterating an array by forEach

const numbers = [1,2,3,4,5];
numbers.forEach((value,index)=> console.log(index,value))
