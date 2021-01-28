function calender(){
var d=new Date();
var n=d.getMonth();
var n1=d.getDay();
let month= ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
let day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// let date=d.getDate();
// let year=d.getFullYear();

document.getElementById("mon").innerHTML=month[n];
document.getElementById("yr").innerHTML=d.getFullYear();
document.getElementById("wdate").innerHTML=d.getDate();
document.getElementById("wday").innerHTML=day[n1];

setTimeout(calender,(10*60*1000));
}

calender();