function sum(){
    let total = 0;
    for (let num of arguments){  // we have an arguments object inbuilt..
        total= total + num;   
    }
    return total;
}
console.log(sum(2,3,4,5,6)); // we can add number of arguments