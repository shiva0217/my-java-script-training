//getters and setters
const person ={
    firstname: "shiva",
    lastname: "kumar",
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    },
    set fullname(value){
        const parts = value.split(" ");
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}
person.fullname = "sravan kumar";
console.log(person.fullname);