const numbers=[1,2,3,4];
// end
numbers.push(5);
console.log(numbers);
// start
numbers.unshift(0);
console.log(numbers);
//middle
numbers.splice(3,0,'a','b');
console.log(numbers);