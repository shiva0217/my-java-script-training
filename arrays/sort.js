const students = [
    {id:1,name:"havishma"},
    {id:1,name:"usha"},
    {id:1,name:"komal"},
    {id:1,name:"shiva"},
    {id:1,name:"sandeep"}
];
students.sort((a,b)=> a.name.localeCompare(b.name))
console.log(students);