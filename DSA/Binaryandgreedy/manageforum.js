function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let total=+input[0];
   let arr1=input[1].trim().split(" ").map(Number);
   let arr2=input[2].trim().split(" ").map(Number);
   let check=false;
   for(let i=0;i<arr1.length;i++){
       let left =arr1[i];
       let right=arr2[i];
       let count=1;
       for(let j=i+1;j<arr1.length;j++){
           if((left>=arr1[j]&&left<=arr2[j]) || (right>=arr1[j]&&right<=[arr2[j]])){
               count++;
           }
       }
       if(count>total){
           check=true;
           break;
       }
   }
   if(check)
   console.log("Not Possible");
   else
   console.log("Possible");
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