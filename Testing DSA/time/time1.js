function printTime(miliseconds){
    miliseconds=Math.floor(miliseconds/1000);
    let str=""
   if(miliseconds>0){
       if(miliseconds%60)
    str=(miliseconds%60)+" second";
    miliseconds=Math.floor(miliseconds/60);
       
    
   }
   if(miliseconds>0){
       if(str.length && miliseconds%60)
       str=(miliseconds%60)+" minute"+" "+str;
       else if(miliseconds%60)
       str=(miliseconds%60)+" minute";
       miliseconds=Math.floor(miliseconds/60);
       //C:\Users\narendra\Desktop\assignment\Unit3\Sprint4\Day2\Coding\time\time.js
   }
   if(miliseconds>0){
       if(str.length)
    str=(miliseconds)+" hour"+" "+str;
    else
    str=(miliseconds)+" hour";

   }
    return str;
}
module.exports ={printTime};