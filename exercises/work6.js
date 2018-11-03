const today= new Date();
console.log(today.getHours());
const hour = today.getHours();
if (hour < 12){
    console.log("good morning");
}else if(hour>=12 && hour<16){
    console.log("good afternoon");
}else if(hour >16){
    console.log("good night");
}