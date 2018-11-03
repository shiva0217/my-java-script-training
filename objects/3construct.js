function Restaurant(inputname){
    this.name=inputname;
    this.cookfood = function(){
        console.log("cooking food with new recipe")
    }

}
const rest1 = new Restaurant("indo france 1");
console.log(rest1);
console.log(rest1.cookfood());
const rest2 = new Restaurant("indo france 2");
console.log(rest2);
console.log(rest2.cookfood());