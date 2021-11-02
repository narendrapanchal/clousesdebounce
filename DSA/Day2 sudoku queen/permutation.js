function runProgram(input) {
  // Write code here
  input=input.split("\n");
 let n;
 let arr=input[1].trim().split(" ").map(Number);
 var towdarr=[];
 n=arr.length;
 output(arr,0);


   function output(funcarr,count){

       if(count==n-1){
          towdarr.push(funcarr);
           return;
       }
     for(var i=count;i<n;i++){
         let temp=[];
         for(var k=0;k<n;k++){
             temp.push(funcarr[k]);
         }
         let temparr=swap(temp,i,count);
         output(temparr,count+1);
     }
   }

   function swap(swaparr,i,j){
       let temp=swaparr[j];
       swaparr[j]=swaparr[i];
       swaparr[i]=temp;
       return swaparr;
   }
   towdarr.sort();
   for(var i=0;i<towdarr.length;i++){
       console.log(towdarr[i].join(" "));
   }
}
if (process.env.USER === "Narendra") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0) ;
  });
}
