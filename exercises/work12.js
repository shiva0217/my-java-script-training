const today= new Date();
console.log(today.getHours());
const hour = today.getHours();
const rest = [
    {id:1,name:"dosa",cost:5.65,servetime:"morning",hour :6},
    {id:2,name:"chicken biryani",cost:6.75,servetime:"evening",hour:20},
    {id:3,name:"idly",cost:8.95,servetime:"morning",hour:6},
    {id:4,name:"mutton biryani",cost:6.15,servetime:"evening",hour:21},
    {id:5,name:"vada",cost:5.65,servetime:"morning",hour:6},
    {id:6,name:"palak paneer",cost:6.75,servetime:"evening",hour:20},
    {id:7,name:"roti",cost:8.95,servetime:"morning",hour:6},
    {id:8,name:"fish biryani",cost:6.15,servetime:"evening",hour:22}
];

const morningfood = rest.filter(n => n.servetime ==="morning");
const eveningfood = rest.filter(n => n.servetime ==="evening");
if (hour<12){console.log(morningfood);}
else if(hour>=19){console.log(eveningfood);}