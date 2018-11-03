const rest = [
    {id:1,name:"cheese burger",cost:5.65},
    {id:2,name:"double beaf burger",cost:6.75},
    {id:3,name:"triple beaf burger",cost:8.95},
    {id:4,name:"fish burger",cost:6.15}
];
searchOption = [3,4];
const order1 = rest.find(O1=> O1.id === searchOption[0]);
    console.log("your order is : "+searchOption[1]+". "+order1.name+ "\n cost: "+order1.cost);
const order2 = rest.find(O2=> O2.id === searchOption[1]);    
    console.log("your order is : "+searchOption[1]+". "+order2.name+ "\n cost: "+order2.cost);
let totalcost= order1.cost + order2.cost;
    console.log("total cost : "+totalcost );
