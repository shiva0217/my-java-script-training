function createrest(inputname){
return {
    name: "Indo France",  
    cookFood : function(){
        console.log("cook and add special home made spices + some pepper salt");
    }
   
};
}
const rest1 = createrest("indofrance 1");
const rest2 = createrest("indofrance2");
console.log(rest1);
console.log(rest1.cookFood());
console.log(rest2);
console.log(rest2.cookFood());