let a= 68
let b= 17
let percentage = a>70;
let credits= b>15;
let scholarship =percentage && credits;
console.log(scholarship);
let admission = percentage ||credits;
console.log(admission);
let admissionrefused =! admission;
console.log(admissionrefused);
