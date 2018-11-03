const workers= [
        {id:1,name:"ramesh",gender:"male",DOB : "19940615"},
        {id:2,name:"shirisha",gender:"female",DOB : "19920812"},
        {id:3,name:"mahesh",gender:"male",DOB : '19740613'},
        {id:4,name:"rushika",gender:"female",DOB : '19840615'},
        {id:5,name:"havishma",gender:"female",DOB : '19940716'},
        {id:6,name:"usha",gender:"female",DOB : '19950616'},
        {id:7,name:"komal",gender:"male",DOB : '19910923'},
        {id:8,name:"shiva",gender:"male",DOB : '19940214'},
        {id:9,name:"sandeep",gender:"male",DOB : '19910617'}

    ];
//sorting
// const sort = workers.sort((a,b)=> a.name.localeCompare(b.name));
// console.log("sorting of workers list by name");
// console.log(sort);
//filter by gender
// const filteredmale = workers.filter(n=> n.gender==="male");
// console.log("*****male workers*****");
// console.log(filteredmale);
// const filteredfemale = workers.filter(n=> n.gender==="female");
// console.log("*****female workers*****");
// console.log(filteredfemale);
//SORT BY DOB
const DOBsort = workers.sort((a,b)=> a.DOB.localeCompare(b.DOB));
console.log("sort by date of birth of workers");
console.log(DOBsort);


