// by using for in loop
const person ={
    name: "shiva",
    surname: "gannarapu"
};
const clonedPerson={};
for (let key in person){
    console.log(person[key]);
    clonedPerson[key]=person[key];
}
console.log(clonedPerson);

// spread operators
const clonedperson2 ={... person};
console.log(clonedperson2);

//assign operator
const clonedperson3 = Object.assign({address : "1 rue de paris"},person);
console.log(clonedperson3);

