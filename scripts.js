function kilomiterMiter(kilo){
var miter=kilo*1000;
return miter;

}
var result=kilomiterMiter(2);





        
function resturantCost(day){
   var cost=0;
   if(day<=10){
    var cost=day*100;

   }else if(day<=20){
       var firstDay=10*100;
       var remaining=day-10;
       var secondDay=remaining*80;
       var cost=firstDay+secondDay;

   }else{
    var firstDay=10*100;
    var secondDay=10*80;
    var remaining=day-20;
    var thirdDay=remaining*50;
    var cost=firstDay+secondDay+thirdDay;
    
   

   }
   return cost;

}

var result=resturantCost(26);









