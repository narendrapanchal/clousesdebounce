function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let [n,c,r]=input[0].trim().split(" ").map(Number);
   let arr=input[1].trim().split(" ").map(Number);
   arr.sort((a,b)=>{
       return a-b;
   });
   let sum=0;
   for(let i=0;i<c;i++){
       sum+=arr[i];
   }
   if(sum<=r)
   console.log("Party");
   else
   console.log("Sad")


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
  