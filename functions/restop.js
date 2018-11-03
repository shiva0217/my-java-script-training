// rest opeartor
function sum(c,d,...args){
    console.log(args);
    return args.reduce((a,b)=> a+b , (c+d));
}
console.log(sum(2,3,4,5,6,7));