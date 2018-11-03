//every
const numbers=[2,3,-1,5];
const allpositives =numbers.every(value => value>0);
console.log(allpositives);

//some

const allpositive =numbers.some(value => value>0);
console.log(allpositives);

//filters
const filtered = numbers.filter(n=> n>=0);
console.log(filtered);

//piping or chaining

const piping = numbers.
                        filter(n=> n>=0)
                        .map(n=> n +"*");
console.log(piping);

//reduce

const reduce = numbers.reduce((accumelator, currentvale) => accumelator+currentvale,10);
console.log(reduce);