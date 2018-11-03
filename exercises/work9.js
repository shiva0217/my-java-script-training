const rest = [
    {id:1,name:"cheese burger",cost:5.65},
    {id:2,name:"double beaf burger",cost:6.75},
    {id:3,name:"triple beaf burger",cost:8.95},
    {id:4,name:"fish burger",cost:6.15}
];
selecteditems = [1,2];
let totalcost = 0;
for (let item of rest){

    let iteminmenu = selecteditems.find(si => si === item.id);
    if(iteminmenu){
        totalcost=totalcost + item.cost;
    }
}
console.log("cost of your order :"+totalcost);
