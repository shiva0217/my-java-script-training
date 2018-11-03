const rest ={
    name : "indo france",
    add : "16 rue paris",
    num : "9059957615",
    workers : ["w1","w2","w3","w4","w5"],
    specialDish(orderedItem){
        console.log("your order is :"+ orderedItem);
        
    }
};
// console.log(rest);
// console.log("list of the workers");
// for(let key of rest.workers){
//     console.log(key);
//}
rest.specialDish("chicken");


