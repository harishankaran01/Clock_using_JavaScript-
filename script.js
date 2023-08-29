let  meridiem1;
console.log("Hello");
function time(){
    let date_Time =new Date();
    let hour=date_Time.getHours();
    let minutes=addZero(date_Time.getMinutes());
    let second=addZero(date_Time.getSeconds());
    console.log("Hello1");
   if(hour>=12){
    if(hour>12)
    {
        hour=hour-12;
    }
    meridiem1="PM"
   }
   else if(hour==0){
    hour=12;
    meridiem1= "AM";
   }
   else if(hour<12)
   {
    meridiem1="AM";
   }
    function addZero(num){
        return num<10?"0"+num:num;
    }
    document.getElementById("hours").innerHTML=(addZero(hour))+" : ";
    document.getElementById("minutes").innerHTML=minutes+" : ";
   document.getElementById("second").innerHTML=second+"  ";
   document.getElementById("meridiem").innerHTML=meridiem1;
}
setInterval(time,500);