const numbers=[1,2,3,4,5,6,7];
const length= numbers.length;
numbers.splice((length-2),length);
console.log(numbers);
numbers.splice(0,length);
console.log(numbers);