const rest= [
    {id:1,name:"ramesh",designation:"manager",salary:20000},
    {id:2,name:"suresh",designation:"asst manager",salary:18000},
    {id:3,name:"mahesh",designation:"team leader",salary:16000},
    {id:4,name:"naresh",designation:"junior",salary:14000}
];
searchOption = "mahesh";
const SD = rest.find(sd =>sd.name === searchOption);
console.log("designation of "+searchOption+" is: "+SD.designation);
console.log("salary of "+searchOption+" is: "+SD.salary);