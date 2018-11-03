//default parameters
function simpleinterest(principle, rate =3.5, year=5){
    return(principle*rate*year)/100;
}
const interest = simpleinterest(1000);
console.log(interest);
