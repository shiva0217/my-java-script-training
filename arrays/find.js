const courses=[
    {id:1,name: "java script", cost : 200},
    {id:2,name: "node", cost : 300},
    {id:3,name: "react", cost : 400}
];
const course = courses.find(function(course){
    return(course.name === "node");
});
console.log(course.cost);

// arrow functions
const cource= courses.find(c => c.name === "node");
console.log(cource.cost);