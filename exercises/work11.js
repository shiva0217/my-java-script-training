let a= [];
for(let i=1;i<=1000;i++){
a.push(i);
}
//console.log(a);
//execute only odd numbers
// const filteredodd = a.filter(n=> (n%2)!==0);
// console.log(filteredodd);
//sum of all even numbers
const filteredeven = a.filter(n=> (n%2)===0);
console.log(filteredeven);
const sumofeven = filteredeven.reduce((a,b) => a+b);
console.log(sumofeven);
